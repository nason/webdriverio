import labels from '../../../fixtures/labels'

describe('execute', () => {
    before(async function () {
        await this.client.context(labels.NATIVE_APP_CONTEXT)
    })

    it('should be able to execute native function objects', async function () {
        (await this.client.execute((a) => a + 2, 3)).value.should.be.equal(5)
    })
})

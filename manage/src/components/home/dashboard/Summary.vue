<template>
  <div>
    <Row :gutter="16">
      <Col span="6">
        <Card :bordered="false">
          <p slot="title">
            访问量
          </p>
          <a href="#" slot="extra">
            <Icon type="ios-loop-strong"></Icon>
          </a>

          123asd
        </Card>
      </Col>
      <Col span="6">
        <Card :bordered="false">
          <p slot="title">
            销售额
          </p>
          123asd
        </Card>
      </Col>
      <Col span="6">
        <Card :bordered="false">
          <p slot="title">
            订单量
          </p>
          123asd
        </Card>
      </Col>
      <Col span="6">
        <Card :bordered="false">
          <p slot="title">
            新增用户
          </p>
          123asd
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "Summary"
}
</script>

<style scoped>

</style>
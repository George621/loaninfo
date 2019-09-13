import React from 'react'
import './index.scss'

export const Index = () => {

  return (
    <div className="index">
      <div className="banner">
        <img src="http://yk.ksdao.com/lfx/sb01/images/banner1.jpg?_=cvds43" alt="" />
      </div>
      <ul class="m_list">
        <li>
          <img src="../../images/pic1.jpg" alt=""/>
        </li>
        <li></li>
        <li></li>
      </ul>
      <div className="tips_all">
        <div className="timer">
          00:00
        </div>
        <div className="time-infor">
          为使用您的提额资格，请
          <span className="">15分钟</span>
          内完成申请
          </div>
      </div>
      <div className="mainform">

      </div>
      <div className="bot_tip">
        <p>
					本平台为你提供专业借贷咨询服务，并不参与实际放款！所有贷款 申请在未成功放款前，绝不会收取任何费用，为保证您的资金安全，请不要相信任何要求您支付费用的信息、邮件、电话等不实信息。
        </p>
        <p>
        借款成功与否因人而异，具体贷款额度和放款到账时间以最终审批结果为准，未成功放款，不收取任何费用
        </p>
      </div>
      <div className="footer">
        <p>兴业消费金融股份公司</p>
				<p>闽ICP备15001833号-1</p>
				<p>贷款有风险，投资需谨慎</p>
				<p>贷款额度示个人情况/资质而定</p>
      </div>
    </div>
  )
}
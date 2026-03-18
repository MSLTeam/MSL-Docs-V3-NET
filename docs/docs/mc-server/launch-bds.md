---
icon: server
title: 启动一个官方基岩版服务器
createTime: 2025/10/12 21:18:45
permalink: /docs/mc-server/launch-bds/
---
## 一键部署

::: tip MSL从`v3.7.4.8`版本起支持一键部署官方基岩版服务端，旧版本请及时更新哦。

:::



:::: steps

1. ### 创建服务端实例

   首先，在创建服务端的页面，选择 ==自定义模式== ，填写好名字和文件夹位置。（也可以直接默认下一步）

   ![image-20260318193708574](./assets/image-20260318193708574.png)

   下一步，选择 ==不使用Java== 。

   ![image-20260318193741306](./assets/image-20260318193741306.png)

   

2. ### 选择基岩版版本

   在选择服务端的位置，选择`使用基岩版官方服务端`。

   ::: tip 带`release`的版本是正式版，带`beta`的版本是预览（测试）版。

   :::

   ![image-20260318193906140](./assets/image-20260318193906140.png)

   等待自动下载和解压资源即可。

3. ### 完成创建

   根据喜好选择终端模式，完成创建即可启动您的基岩版服务端。

   ![image-20260318194023405](./assets/image-20260318194023405.png)

   ![image-20260318194046994](./assets/image-20260318194046994.png)

::::

## 基岩版连接提示

::: tip 基岩版默认端口是19132 ，使用的协议是`udp`。

:::

   若服务器和游戏在同一台电脑上，IP地址输入`127.0.0.1`。否则您需要使用公网IP/内网传统以允许他人进入您的服务器。

   <LinkCard title="配置内网穿透" icon="book" href="/docs/proxy/frp/" description="如果您没有公网IP，那么点这查看如何配置内网穿透吧！<br>让其他人也能访问您的服务器！" />

   ::: warning 本地连接请注意！

   （新版基岩版不是UWP应用了，应该没有这个问题了）由于Windows UWP应用默认存在 ==本地回环网络限制=={.warning} 。

   若您在同一台电脑开了服务器在同一电脑进不去，可以参考此文章解决：

   [解除UWP应用本地回环限制](https://www.minebbs.com/threads/uwp.17877/){.readmore}

   :::

## 手动导入基岩版服务端

### 视频教程

这是热心群友 [七灝seven](https://space.bilibili.com/2112152080) 制作的视频教程↓↓↓

@[bilibili](BV1NzZpYZEjZ)

<LinkCard title="前往bilibili观看" icon="b:bilibili" href="https://www.bilibili.com/video/BV1NzZpYZEjZ/" />

### 图文教程

:::: steps

1. #### 下载 & 解压服务端文件

   首先，前往下载一个BDS服务端软件：

   <LinkCard title="基岩版服务器下载 | Minecraft" icon="download" href="https://www.minecraft.net/zh-hans/download/server/bedrock" />

   ![image-20251014182630433](./assets/image-20251014182630433.png)

   接着，解压压缩包到一个你喜欢的地方

   [不会解压？**【电子扫盲课】【小白必看】如何解压压缩包？**](https://www.bilibili.com/video/BV1xZ4y1v7pU/){.read-more}

   ![image-20251014183203650](./assets/image-20251014183203650.png)

2. #### 导入到MSL中

   进入创建服务器页面，选择自定义模式（目前快速模式暂不支持创建BDS服务端）

   ![image-20251014183401915](./assets/image-20251014183401915.png)

   接着， ==服务器目录== 选择为你刚刚解压出来的文件夹。

   ::: tip 小技巧

   点击这个位置可以编辑路径，可以在这里快速复制路径哦~

   ![image-20251014183521587](./assets/image-20251014183521587.png)

   :::

   ![image-20251014183612826](./assets/image-20251014183612826.png)

   下一步，请选择 ==不使用Java== 。

   ![image-20251014183705788](./assets/image-20251014183705788.png)

   下一步，在 ==自定义指令== 处输入`bedrock_server.exe`。（这是您的基岩版服务端程序）。

   ![image-20251014183758423](./assets/image-20251014183758423.png)

   下一步，选择终端模式（[终端模式的区别？](/docs/mc-server/start/#配置服务器参数)），然后即可完成您的基岩版服务器创建。

3. #### 开启服务器

   开启服务器，出现 ==成功开启== 的提醒即成功开启了您的基岩版服务器。

   ![image-20251014184032325](./assets/image-20251014184032325.png)

   接下来就可以连接到您的服务器了。

::::

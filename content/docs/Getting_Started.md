---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZFBPGP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGDd965M6i4wMO%2FNOijTWPpIMRD8uUWos1oEt0GlVXcTAiEAtuZctrg5pYN2Aq7%2FvEFMyFiYA0deeM%2BU3uFrzazWk0kqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKASxIsm9lb7JSWN0ircAx6yKT7jbEq8FJen9os%2FxuWkYOyZgeF4zwrmGT8NTwgJg%2F4n6SqIVADbmkfUjF7L4U5mtTsXD9PBWg6DaoqyLQT36oQA8FNPiMYSdr%2BGIRGlXwV%2BRACX16F2mbJrhDI%2FbrjMvkJo%2B%2Fp4eKv0RWL8rMiyhAShcc%2Bk4NA8S0BdHMAFsTNQQ7CjXcGA8Xzwv2sM2bLr%2BUjYaXJ%2B3Te3wa8AI%2BhUEHNjO6LtPLZ8AaS9TcIsq5FtExUpR3x241Kwm3RhTTgiiU2aXQKW4Njy5KQpI4WK1qYkOTWUW5bYxSut0EOCgDm2OlZ5oBFj4JkuHnFRlOa%2BXUvKXXNenzLqF0FSr%2BQ4XztViBm3EWNk0DA0E8bMfOPHb%2FGr7PD1LY0F03vpNaCcrNbFeliCCvK2PhwhrB28zLg%2BWRPojpDunvRCquNG6ou7cWGQnTS8vFeLY4RR37KcyAKo482D3UCTvgMARH1aSqD9lDCj%2B0DjWuO6vDSu%2BS9xUB%2Fvv4a4OW5ya%2Fh%2Ft%2FfR9vBC%2BTexqsN3SKW20OjbwR7hN3hsTNb%2BBbuRiEu%2BeUCKj8BO%2Beb6Kx5myMxpb5k3Pze7SpnQkfbsvpzPTzg%2FTowiWzt05YfVxdQdGTvxzcw6qlLBy3XqB6toMNPutsEGOqUBQ8oBtTOZ25h%2B20dooMOdfth6kYj4Rbk6og2Nxeqn38plZsa%2F%2BkoqgEuPphy6qf9Em8JFnCSiAMADPsX9Oj7q2rsfMcNK0oMQHRaselKVBZTt2X8H%2FHQ64rSJKX9LDEZm4z%2Ba%2FFslCsECW4lkI%2BRKW5dfy0IKqdWpXIoUnkNcQRLVqWVgXdLW%2FCVot%2BKENloGKDafrx2QTF0T237sqF3K66SwOu%2BK&X-Amz-Signature=7e41e36794e0fa001a13da10491beb8c5d45f132bcac90fd3bf205cc26a951ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZFBPGP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGDd965M6i4wMO%2FNOijTWPpIMRD8uUWos1oEt0GlVXcTAiEAtuZctrg5pYN2Aq7%2FvEFMyFiYA0deeM%2BU3uFrzazWk0kqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKASxIsm9lb7JSWN0ircAx6yKT7jbEq8FJen9os%2FxuWkYOyZgeF4zwrmGT8NTwgJg%2F4n6SqIVADbmkfUjF7L4U5mtTsXD9PBWg6DaoqyLQT36oQA8FNPiMYSdr%2BGIRGlXwV%2BRACX16F2mbJrhDI%2FbrjMvkJo%2B%2Fp4eKv0RWL8rMiyhAShcc%2Bk4NA8S0BdHMAFsTNQQ7CjXcGA8Xzwv2sM2bLr%2BUjYaXJ%2B3Te3wa8AI%2BhUEHNjO6LtPLZ8AaS9TcIsq5FtExUpR3x241Kwm3RhTTgiiU2aXQKW4Njy5KQpI4WK1qYkOTWUW5bYxSut0EOCgDm2OlZ5oBFj4JkuHnFRlOa%2BXUvKXXNenzLqF0FSr%2BQ4XztViBm3EWNk0DA0E8bMfOPHb%2FGr7PD1LY0F03vpNaCcrNbFeliCCvK2PhwhrB28zLg%2BWRPojpDunvRCquNG6ou7cWGQnTS8vFeLY4RR37KcyAKo482D3UCTvgMARH1aSqD9lDCj%2B0DjWuO6vDSu%2BS9xUB%2Fvv4a4OW5ya%2Fh%2Ft%2FfR9vBC%2BTexqsN3SKW20OjbwR7hN3hsTNb%2BBbuRiEu%2BeUCKj8BO%2Beb6Kx5myMxpb5k3Pze7SpnQkfbsvpzPTzg%2FTowiWzt05YfVxdQdGTvxzcw6qlLBy3XqB6toMNPutsEGOqUBQ8oBtTOZ25h%2B20dooMOdfth6kYj4Rbk6og2Nxeqn38plZsa%2F%2BkoqgEuPphy6qf9Em8JFnCSiAMADPsX9Oj7q2rsfMcNK0oMQHRaselKVBZTt2X8H%2FHQ64rSJKX9LDEZm4z%2Ba%2FFslCsECW4lkI%2BRKW5dfy0IKqdWpXIoUnkNcQRLVqWVgXdLW%2FCVot%2BKENloGKDafrx2QTF0T237sqF3K66SwOu%2BK&X-Amz-Signature=2cd6a42bbdd70b01fa4f17f14ba036b224336d66f5d21be94f51640169a91415&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZFBPGP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGDd965M6i4wMO%2FNOijTWPpIMRD8uUWos1oEt0GlVXcTAiEAtuZctrg5pYN2Aq7%2FvEFMyFiYA0deeM%2BU3uFrzazWk0kqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKASxIsm9lb7JSWN0ircAx6yKT7jbEq8FJen9os%2FxuWkYOyZgeF4zwrmGT8NTwgJg%2F4n6SqIVADbmkfUjF7L4U5mtTsXD9PBWg6DaoqyLQT36oQA8FNPiMYSdr%2BGIRGlXwV%2BRACX16F2mbJrhDI%2FbrjMvkJo%2B%2Fp4eKv0RWL8rMiyhAShcc%2Bk4NA8S0BdHMAFsTNQQ7CjXcGA8Xzwv2sM2bLr%2BUjYaXJ%2B3Te3wa8AI%2BhUEHNjO6LtPLZ8AaS9TcIsq5FtExUpR3x241Kwm3RhTTgiiU2aXQKW4Njy5KQpI4WK1qYkOTWUW5bYxSut0EOCgDm2OlZ5oBFj4JkuHnFRlOa%2BXUvKXXNenzLqF0FSr%2BQ4XztViBm3EWNk0DA0E8bMfOPHb%2FGr7PD1LY0F03vpNaCcrNbFeliCCvK2PhwhrB28zLg%2BWRPojpDunvRCquNG6ou7cWGQnTS8vFeLY4RR37KcyAKo482D3UCTvgMARH1aSqD9lDCj%2B0DjWuO6vDSu%2BS9xUB%2Fvv4a4OW5ya%2Fh%2Ft%2FfR9vBC%2BTexqsN3SKW20OjbwR7hN3hsTNb%2BBbuRiEu%2BeUCKj8BO%2Beb6Kx5myMxpb5k3Pze7SpnQkfbsvpzPTzg%2FTowiWzt05YfVxdQdGTvxzcw6qlLBy3XqB6toMNPutsEGOqUBQ8oBtTOZ25h%2B20dooMOdfth6kYj4Rbk6og2Nxeqn38plZsa%2F%2BkoqgEuPphy6qf9Em8JFnCSiAMADPsX9Oj7q2rsfMcNK0oMQHRaselKVBZTt2X8H%2FHQ64rSJKX9LDEZm4z%2Ba%2FFslCsECW4lkI%2BRKW5dfy0IKqdWpXIoUnkNcQRLVqWVgXdLW%2FCVot%2BKENloGKDafrx2QTF0T237sqF3K66SwOu%2BK&X-Amz-Signature=991df370e612c0900cb0f3e1c23d93cc6c77f8394af30e14bc5389a7661cbd22&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZ7OK3O%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDCzVvdDbx0FVFJtRL1edkwO6aok1WffXq9pXfSrG8%2FtgIhAN9MvWHNENZRhtbZbQyMk9JFtDrysNu1c5cP0vuzeRHTKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydYecBkJGdchstfI0q3APcGWHT5FOq8UqULTNcJU0OIzvY5WhVrGY7%2BjUSeGac262OtlHJBGwNeS%2F6s32jLR5yvA1sFRDKGGWpSgjHiIJDifp9rmvztjEADAmWSXYPog3H37NbLrn3oH383IUvQSjr5AZtIMDE3TspETMPrlXlIdDJYd4FCduQuD1mBxewYps59d1ATwa6wQ6pv7ac2IRmPsXWhkVa0WGV1ynpOJzjr899AHR9JmChleazW02B06W58mx4cSLYaAEwDBbmn2HGjKGoi5kZgq4VGA2idnYOm0Guaa3HLklIX3z5%2BTPlY7eCsdRzQ4mRbsJot5guSm9fqpNUgDSln6%2BvXHuLnpCbuuDJDV8x54FcWFrLUU3OEeuCcIcrEg%2FcH%2BXtlQdWntMoRYtYcRD92lkFecTmqUZ2fap0KYQHuksB2hg2Dzp5yaxyszlcblkRnqQeRoQep0NGuvNjB1L6Si1qJAKJWckZFMf7nNblTLuxrmW8OTGMxHBCzY2w70PY4U2CPLFAXK%2FAE6a%2F7XKWnKX38P2n82jV6HJZeWPWJAqiGuOVuIJno5ZfN5s3n0UPGWER%2FS2o2rhDjls8bka5qfiSIygzIajRH%2Fcg%2Fy8eBwkay4BQ%2BPAHI7fSE556yjzevRMQszDD7rbBBjqkAUPNqYGaB10O5PPrcJsKgb7ERmG8wSH6cIH%2BxFNx%2FYfsS11LKWFi1U0CwfZGyp7FeMsgySIp689moi2XueVcdg7CzeU63NKM%2BL3qBogR%2BKVoV22ZtJ6SEigekricY2zHM0U7E7SZK0zgnTALS6urVs%2B9ne5ryp05uMziNTyC9zdm%2BqAHRrPSM5F2SBhkdG3DBY6USEX7HN5i76rjIF9wUKaaz5Bt&X-Amz-Signature=c54ee20617c57187a4353898b7002c0e316c352e2ef13b672840ba81c3fc359d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654YIAAXN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCf%2Bz%2Bxyvpg8xvQQGYRSHS9zxvvvoB9ph6GvRtXa8ADNAIhANTfxo8Fn17pbbwLymw9nW9Gfakq6F3P87Uc6LJ97GXCKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPllPcbCwvMUcVIhcq3APX%2FZIAolTQrbFJIqioCft%2BIKy6KB3MerEaEkUq8ChpTjzxAd9dzfjGCx91rGUEX2%2Bxbv9MoT9kS5HhuNNiy%2F7mYnA7YP2febAy8Jj%2FfdX0eyUz%2BlCrWQyT8t8MRVRZ3r8mTTMhah%2BgAwnFuQX9uksUrIAkWTVol5C%2F9uOfzPQN%2FaO%2BHys0d6bxSSgcEVYu53ZnPPOjw7Tcz8uScnOSuRYiy%2FXciLWi5adZiIH6G26SKVcbs0FWxVjbi6vIk%2F5Qq1A5s7D3ONP9q3Rkyn5O9R8yk5ZSa9gLayH4frSFtIIpnqbd6YWDtLu2GibdIkuDcjasatMpYwWTi%2BuTz1aNpaFfC3KF9LPiAzzWr30YPfkWzzF3pFNq5LsD0YddQEdlLNZZ5h%2BNV5Sfp0ZdGukRQYtfGMFxn6swG76FkljasqGrkaZi7%2BqJyPRMDp0%2FhMuZJF%2FIxBqElbzQMripfFfEZWhYFIm2NLLUqnHw9G5mrj9iWKpoaXBY%2FyW8pamcRta1oJBJvbtMTzZ1x6T5KRWFA901JfqeAgml68j28q7yLGVUJJvpm53Rq9pn9Szm3fHEPOJcdVQqcIJBcr%2BS3CvXUqtTvdI53ap%2F%2F5u7vNrSXfwDU1E25q6FI%2FXdXEgVyjDT7rbBBjqkATplnvthq2%2FJRKKmGj3S906DjVvj7w1NVuTx8O%2BBjSmWixd1FWsD1XfT7ldART853i%2FGQaUo0AcPsYAV2WvIQew7sJzAlIcrqqci1PHO1Zs3BI%2F4hYQXwa9L2q02hA6BV5bmk7J6r6rNE5zjzAkxQ9Oq20r2HIa4SWXzBMSivBcxEqn5zBUXej%2BBSynstlSOt5oJqviXi2S2GfTMdqboU%2FlamtQc&X-Amz-Signature=f75f5cbcb0003b9568a2307c407a6843b393651c3b1fdd32cb95a6ec57bbdc55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZFBPGP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGDd965M6i4wMO%2FNOijTWPpIMRD8uUWos1oEt0GlVXcTAiEAtuZctrg5pYN2Aq7%2FvEFMyFiYA0deeM%2BU3uFrzazWk0kqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKASxIsm9lb7JSWN0ircAx6yKT7jbEq8FJen9os%2FxuWkYOyZgeF4zwrmGT8NTwgJg%2F4n6SqIVADbmkfUjF7L4U5mtTsXD9PBWg6DaoqyLQT36oQA8FNPiMYSdr%2BGIRGlXwV%2BRACX16F2mbJrhDI%2FbrjMvkJo%2B%2Fp4eKv0RWL8rMiyhAShcc%2Bk4NA8S0BdHMAFsTNQQ7CjXcGA8Xzwv2sM2bLr%2BUjYaXJ%2B3Te3wa8AI%2BhUEHNjO6LtPLZ8AaS9TcIsq5FtExUpR3x241Kwm3RhTTgiiU2aXQKW4Njy5KQpI4WK1qYkOTWUW5bYxSut0EOCgDm2OlZ5oBFj4JkuHnFRlOa%2BXUvKXXNenzLqF0FSr%2BQ4XztViBm3EWNk0DA0E8bMfOPHb%2FGr7PD1LY0F03vpNaCcrNbFeliCCvK2PhwhrB28zLg%2BWRPojpDunvRCquNG6ou7cWGQnTS8vFeLY4RR37KcyAKo482D3UCTvgMARH1aSqD9lDCj%2B0DjWuO6vDSu%2BS9xUB%2Fvv4a4OW5ya%2Fh%2Ft%2FfR9vBC%2BTexqsN3SKW20OjbwR7hN3hsTNb%2BBbuRiEu%2BeUCKj8BO%2Beb6Kx5myMxpb5k3Pze7SpnQkfbsvpzPTzg%2FTowiWzt05YfVxdQdGTvxzcw6qlLBy3XqB6toMNPutsEGOqUBQ8oBtTOZ25h%2B20dooMOdfth6kYj4Rbk6og2Nxeqn38plZsa%2F%2BkoqgEuPphy6qf9Em8JFnCSiAMADPsX9Oj7q2rsfMcNK0oMQHRaselKVBZTt2X8H%2FHQ64rSJKX9LDEZm4z%2Ba%2FFslCsECW4lkI%2BRKW5dfy0IKqdWpXIoUnkNcQRLVqWVgXdLW%2FCVot%2BKENloGKDafrx2QTF0T237sqF3K66SwOu%2BK&X-Amz-Signature=320f96b77137a83104e68b13e3c21a36337a748d20b0ace9f6fdf1386902eba5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

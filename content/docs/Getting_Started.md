---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOCEBOY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCx1qxGBZXUi5CLHOSEY29dT%2FxAlpqd%2FqXgLSkHalIZhAIgHnSYIQkaLDzrw9N80LZIqnup7vlUkoyhQsXmfp698AAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEeJUMVyyVavl3GFUSrcA2tlibjHxgNDNXpjKYYAyckOP6zLvA6wCE8BVEC7ut29KbBL1injBCGJel8lFnTLJFVvqS%2Bbet%2FxZw1r6C5RwofLAMzjMUTeOpn7Lp1tPVL8ysJmZ6xd8rllnknY0pqKEbsZwCc3Uvd3adWcU0jJJFSECrJNQ94MQ5JaZA3sQ0hG4e2LOhWDViLansRdFc8w6rSipgrTQbSAJDtZ2X3TTAouhBWumjU8fj8Dnjg4YXCBKzSyB5UrUIpQQQajXitHqxEpp9Nqhx10bIWV7kub%2F2i31P4qctaEGnR%2BjTSnMTgsgrRqETZ8DskqBWzP3vhdx5KzdYNkWfSiUTminn9VjbBcxwc7p7XcTZE18LZZnFwEEVHyu%2F5Fi0g5if6qSktD92ma7%2Ftre5OhSMC2g7uL4%2BGWIvTHW6qfM7UtjOBQx0jVMY6qYWiE2N9qCW7Fk%2BfX9bzGbPH8bZDqns1deBnSyPgjCEpYXpHNoydrJcrqRq%2BwZjvzH5MOwhxZEMysSd2pIgzaQ36FljIXdWBVVagx6La43eah%2FMajC1JeEEs4jYErZGEgoAwfnluw9vPlo3HujNKIabz53%2BEiK8ieBFGTozvflTjty8ww%2BwhBRQrk1FrkA2stx0GzWDo57JdPMMr%2B6L4GOqUB4cRbSh6IyPd%2FLdVa8rqNwDhH3fhf%2F4wEthp7OOZ3xoENYCutIZdZtXwlvEw%2BqxFdpiCw3Obw%2FbbqSxEM3hmT1D8cVf33WetpQuFZ9F33JZMfT9MwijUj9nvRO5CKk1w6W%2B6cwrm3se7A6CQxlSsbFuisn7%2FVn%2BLezY6rjK5G3eRqcaGAhvPQ%2Fg3kgcwS2eihXDd1c9XNH%2FnEKJ1BIlOZWQu%2Bmi5w&X-Amz-Signature=a1fa86f2cd387422e901562f75981f05cc82e85f56332fbc61c62d68611beeaf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOCEBOY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCx1qxGBZXUi5CLHOSEY29dT%2FxAlpqd%2FqXgLSkHalIZhAIgHnSYIQkaLDzrw9N80LZIqnup7vlUkoyhQsXmfp698AAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEeJUMVyyVavl3GFUSrcA2tlibjHxgNDNXpjKYYAyckOP6zLvA6wCE8BVEC7ut29KbBL1injBCGJel8lFnTLJFVvqS%2Bbet%2FxZw1r6C5RwofLAMzjMUTeOpn7Lp1tPVL8ysJmZ6xd8rllnknY0pqKEbsZwCc3Uvd3adWcU0jJJFSECrJNQ94MQ5JaZA3sQ0hG4e2LOhWDViLansRdFc8w6rSipgrTQbSAJDtZ2X3TTAouhBWumjU8fj8Dnjg4YXCBKzSyB5UrUIpQQQajXitHqxEpp9Nqhx10bIWV7kub%2F2i31P4qctaEGnR%2BjTSnMTgsgrRqETZ8DskqBWzP3vhdx5KzdYNkWfSiUTminn9VjbBcxwc7p7XcTZE18LZZnFwEEVHyu%2F5Fi0g5if6qSktD92ma7%2Ftre5OhSMC2g7uL4%2BGWIvTHW6qfM7UtjOBQx0jVMY6qYWiE2N9qCW7Fk%2BfX9bzGbPH8bZDqns1deBnSyPgjCEpYXpHNoydrJcrqRq%2BwZjvzH5MOwhxZEMysSd2pIgzaQ36FljIXdWBVVagx6La43eah%2FMajC1JeEEs4jYErZGEgoAwfnluw9vPlo3HujNKIabz53%2BEiK8ieBFGTozvflTjty8ww%2BwhBRQrk1FrkA2stx0GzWDo57JdPMMr%2B6L4GOqUB4cRbSh6IyPd%2FLdVa8rqNwDhH3fhf%2F4wEthp7OOZ3xoENYCutIZdZtXwlvEw%2BqxFdpiCw3Obw%2FbbqSxEM3hmT1D8cVf33WetpQuFZ9F33JZMfT9MwijUj9nvRO5CKk1w6W%2B6cwrm3se7A6CQxlSsbFuisn7%2FVn%2BLezY6rjK5G3eRqcaGAhvPQ%2Fg3kgcwS2eihXDd1c9XNH%2FnEKJ1BIlOZWQu%2Bmi5w&X-Amz-Signature=68dfe24ffd84b612e9b4fa75311bcae9602cc6838b129493435dd23631ed3853&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TKMSAQ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDgN8Hw61mPj98sHwLItS9SSry4zDsMhpdbwsY%2BG3O96QIgLiOEirytqgUkq8ohV5s47tqNBZQRjzFVIIcdS8IspJUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE9s2MxEmN%2BWsDXqoCrcA7mtYcBlG4QR6TYzbBd3w995zl%2FrzoREjbAikUFnf7UP%2FBBHGEH2lIFfUHimVaoGrcoJRNYMNc%2BaSSZZ2WXW6DBX2kQO0TGEZMY1pU5zcPgMTDXdC2e23n1x1PmKvn7UoR8amIZPOh8OGS0Eq7MxlSCNvKsxpaAiZC%2BCkFt2WEt7NclNDXRdaHAg9Wt1gVlIQKAMST61mNXZVM1DuwMJ%2Bxdcjqjh5FI1Oe9uiDh%2BPjhnUugSUxSDIfO2VOhI45KHWSwBBAgfIUr%2BIgajJnU4S92mT%2Ba5BrcNDwSRZqtuIMCnmYb7j5CYXGzr9BKr0E4qLKS8ltDy5joS7wjq7CiSx7l270rt2g5I%2BiN453C5v27U6u5sgGBBdtjD6bJq6eqCjD%2FegogYs0Ve1dtiDkqPV9uKbkSjWnO%2FpR8DLmbY%2B1zWhB3ANvi71OQLPFQrdxgwYjxoZKjIbBzP%2FP1StsBpPDesOAFnMotBJIRhpyxER6aoGc9ZYLZX9WaXNe%2FFKegPvzp05irm3sGUPyMlpa0S0nfHNVsE%2F9tOG%2FC9c%2FMgKHQP5C7761l1jx5glOr%2BCZFx5g0XjL4W%2BnJE3NZyazByEVnV64ct7P7L0qEW0WH8hoHxmcCsMQ9PkearP8YyMOT%2B6L4GOqUBaJ5Jiivchz3pwIBMYN2s0L4J4f%2BQ4UgPthnFx7dTdzaLW3y2Drd7LfPJpD5k1kcUb%2FReCGCTA1Im3U9sScXfceQKuhjHFyhHrZsCgk%2FgX8gE1oLv8aaJXn%2FGR6H2YQSR62xiy40cJvnSC9K%2B%2FXJJ9GLwf9VFQUxg66JY%2BxmIska83qY3wyr6Gyg%2FM2avdWJHIqrrIbDGxZoYHwUufRNsXh5FZin0&X-Amz-Signature=81ba99d801c71fe134bca1c021413175396c39241366dbbf5b7e2704cda2d7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2QK2FH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC9sR2z6T9SygVTceXKjmyM1Zp4yvqpXZiG2wjjHY5Y5gIhAL%2B%2FpQnaJDebUe1D5k7kFBRzlbrmYFDvcrbhtsBCTE23Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxazUBfPXq0KRiHHVcq3APGiUHWgEfMx%2FL%2B8ZdDIVVqdqTicxwujC4RoCQmz1hsdJi2MikIJUpA131RYVx2ga5Y5VtW%2BZPBGr5REz4DpXzfUfQJRMHY%2BEB%2BJF1OhXxL94DFoh9iV0i%2F8w5sl2pg2TKcQcokdaeqYFFByTY2kMfakW7TiNqY%2B9WLboQs749Vh5T1%2Bkiv1c50Djl%2FI36k4XQ3e0aqdVMOrj%2B0VXFHOcV40N8UfytA0WgwjrxnaiZDneOak1QmyR%2FmNWRVY006NOadRzMDiQG8bSDL%2BztE4qkQj%2F7w217PdIqH55Q%2BL93wyvAY1p0vO8%2BO8prnT1o5XYgBfNG8OzrDznemPTPEp7PeIZIfUM07xVYoByRVnMVph0azUFS%2BkY04mur2VWUfwoGftObSG8hDXLnGxV2ZpVvu%2B33FpBHwiOmAFIXWNQsRz7jhK0t4SPXpvS4ndSCQUQ5SQmt2UEAR6mb7AGiWuKb1EUyQGVh31MAnEGaSZY1QdVdhlhwuWphMjGu81ZEGrVFJyye9zzZtJgP18yZycqWwDbwuI6zelPFvWGueufDHH2mZ%2FAr39xECHHt%2BWEUwJvfqD%2FVunWoeRcw6d%2BPSBVoTGVWqjfu8C29qebznaoLtnj36a%2BwYuJL%2FMT79OzDi%2Fei%2BBjqkAXJaYYJpCFQ%2FRaiIm2D1ljcakIAd75L2usr1WV1HuVnwCVIAcHrjovmdxRlO2g88N%2FiTxi1rUpZJ53PQuww2I5wQt8EzzgyRyIHlJGldLgzqqAQLDPiSrvc19pprREjnHskafXpRXIX5T1wrBGSJ3aMXP09A5Zc%2BvENM0t1z1WqKCPFwEGAHUMnulPgfVE2o8VIeHR50iTIuHosz078w6%2B2ZSARy&X-Amz-Signature=44c0effe7cd6c172848a582e819e48847e968b5d9adfe3c37d5acf4dd8f369c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOCEBOY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCx1qxGBZXUi5CLHOSEY29dT%2FxAlpqd%2FqXgLSkHalIZhAIgHnSYIQkaLDzrw9N80LZIqnup7vlUkoyhQsXmfp698AAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEeJUMVyyVavl3GFUSrcA2tlibjHxgNDNXpjKYYAyckOP6zLvA6wCE8BVEC7ut29KbBL1injBCGJel8lFnTLJFVvqS%2Bbet%2FxZw1r6C5RwofLAMzjMUTeOpn7Lp1tPVL8ysJmZ6xd8rllnknY0pqKEbsZwCc3Uvd3adWcU0jJJFSECrJNQ94MQ5JaZA3sQ0hG4e2LOhWDViLansRdFc8w6rSipgrTQbSAJDtZ2X3TTAouhBWumjU8fj8Dnjg4YXCBKzSyB5UrUIpQQQajXitHqxEpp9Nqhx10bIWV7kub%2F2i31P4qctaEGnR%2BjTSnMTgsgrRqETZ8DskqBWzP3vhdx5KzdYNkWfSiUTminn9VjbBcxwc7p7XcTZE18LZZnFwEEVHyu%2F5Fi0g5if6qSktD92ma7%2Ftre5OhSMC2g7uL4%2BGWIvTHW6qfM7UtjOBQx0jVMY6qYWiE2N9qCW7Fk%2BfX9bzGbPH8bZDqns1deBnSyPgjCEpYXpHNoydrJcrqRq%2BwZjvzH5MOwhxZEMysSd2pIgzaQ36FljIXdWBVVagx6La43eah%2FMajC1JeEEs4jYErZGEgoAwfnluw9vPlo3HujNKIabz53%2BEiK8ieBFGTozvflTjty8ww%2BwhBRQrk1FrkA2stx0GzWDo57JdPMMr%2B6L4GOqUB4cRbSh6IyPd%2FLdVa8rqNwDhH3fhf%2F4wEthp7OOZ3xoENYCutIZdZtXwlvEw%2BqxFdpiCw3Obw%2FbbqSxEM3hmT1D8cVf33WetpQuFZ9F33JZMfT9MwijUj9nvRO5CKk1w6W%2B6cwrm3se7A6CQxlSsbFuisn7%2FVn%2BLezY6rjK5G3eRqcaGAhvPQ%2Fg3kgcwS2eihXDd1c9XNH%2FnEKJ1BIlOZWQu%2Bmi5w&X-Amz-Signature=7e318284d23fa1effcf570fe09b95afbd2a2587f56ccc89cd60212d72ad82012&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

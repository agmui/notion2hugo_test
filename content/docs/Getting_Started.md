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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQO4ZFFD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDmxnHzf13SHauUFXUvcpMGd7JRlTxqnRu%2BymyVtClknAIgTOANWnuIIRKbyuRZSLbJfXmXZd4nA3GNfD3QMh2NZN4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDErTsEo3%2Fdj6GFyBCrcA5ynKcyGe2kilWtjYyDAaSe4oNVjmQsy%2BoZpb5817C0rqm9OUSky0z3zUgvtGNjyyk2zfRB7f24oNFBC8hC%2FhmBFYLEa046MVQFL3T7EwGs7k0gO%2BWNMk7FoSBDs2F1O208Ca%2FEqnDLkqz5020It2VTM7OZSPLQyvtmrglk7Z7VAMsffVac2XVDBWKp8RUNruqrAJWvcLn6wbI9KAjfSBFEkpZ%2FbO3qoIEbzcXy1P%2BMK%2BLB38SV0uDz%2BFSQ6M2U1w%2BKcGq0aWzEQyZJ4YYGRdOwL%2B99NEdWT2rS51NX6L640vxO64wNC%2BneAYW8xydypiXlUzEHyCk753xqmvhma7agdH%2BfwYwRnPmHdOBQvvRwToDs5m1RJQP6LFBmeLxJn3I4%2BjcdklzSkVIftd1qpiVZhzAE0zDJmDbkLFXc5y%2BNORthFE3Q9nrkvxna9vbuSLZgVTv4hwhqwd0gUg8b89LNlVNnER4R9O6qCFA53v0igGc3R1qm%2B3EhHxQufdhhBhoOBHh7%2FtZ%2FpJPYtH9nMqHXFL%2FafPK%2FTVODar5W1Ml7GjQqhOvhH9d2XSi4%2Fcisbx7O37hKE%2Fnb%2Bpvrj%2Fbx6P99F9P4yIxwf9y%2BfO3%2Fe%2FAG%2FKZLWGlVALWXH4PNyMPSEwb0GOqUBzRp7UTGkySnpLQJ823SJ4Sl%2FJLEJraUH6rNOpcxZTuzZkNy8903yuUP4iHAxUgynNPYOnySZxVjGApe3dctqHwiJGBrOYmKqWVYN2frMomfCekjMAEOiQB2%2FTDfA2P1w1vNJtpB9CLatDghKgKL7SEeUFkl%2BuinvPWfGK5P57mCJYwjkmt%2B6mdIcrllZFxK2f92nPbDOggz7mP8PexM5KP8tpJM4&X-Amz-Signature=09645fb630485fbb12fe425aa8df7ef2ec1bc8329e8b3a87c12f92cf9ada347b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQO4ZFFD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDmxnHzf13SHauUFXUvcpMGd7JRlTxqnRu%2BymyVtClknAIgTOANWnuIIRKbyuRZSLbJfXmXZd4nA3GNfD3QMh2NZN4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDErTsEo3%2Fdj6GFyBCrcA5ynKcyGe2kilWtjYyDAaSe4oNVjmQsy%2BoZpb5817C0rqm9OUSky0z3zUgvtGNjyyk2zfRB7f24oNFBC8hC%2FhmBFYLEa046MVQFL3T7EwGs7k0gO%2BWNMk7FoSBDs2F1O208Ca%2FEqnDLkqz5020It2VTM7OZSPLQyvtmrglk7Z7VAMsffVac2XVDBWKp8RUNruqrAJWvcLn6wbI9KAjfSBFEkpZ%2FbO3qoIEbzcXy1P%2BMK%2BLB38SV0uDz%2BFSQ6M2U1w%2BKcGq0aWzEQyZJ4YYGRdOwL%2B99NEdWT2rS51NX6L640vxO64wNC%2BneAYW8xydypiXlUzEHyCk753xqmvhma7agdH%2BfwYwRnPmHdOBQvvRwToDs5m1RJQP6LFBmeLxJn3I4%2BjcdklzSkVIftd1qpiVZhzAE0zDJmDbkLFXc5y%2BNORthFE3Q9nrkvxna9vbuSLZgVTv4hwhqwd0gUg8b89LNlVNnER4R9O6qCFA53v0igGc3R1qm%2B3EhHxQufdhhBhoOBHh7%2FtZ%2FpJPYtH9nMqHXFL%2FafPK%2FTVODar5W1Ml7GjQqhOvhH9d2XSi4%2Fcisbx7O37hKE%2Fnb%2Bpvrj%2Fbx6P99F9P4yIxwf9y%2BfO3%2Fe%2FAG%2FKZLWGlVALWXH4PNyMPSEwb0GOqUBzRp7UTGkySnpLQJ823SJ4Sl%2FJLEJraUH6rNOpcxZTuzZkNy8903yuUP4iHAxUgynNPYOnySZxVjGApe3dctqHwiJGBrOYmKqWVYN2frMomfCekjMAEOiQB2%2FTDfA2P1w1vNJtpB9CLatDghKgKL7SEeUFkl%2BuinvPWfGK5P57mCJYwjkmt%2B6mdIcrllZFxK2f92nPbDOggz7mP8PexM5KP8tpJM4&X-Amz-Signature=75202b5e5111c0230d16abbb10bf761f737872d4053600237a2b9d5dcd33d0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TR44UDR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCjUqDaNwpsed9ZAMU4ES2IptoL1F9Dy3aCEfNOOlmGWwIgGzS87PUo85iBgCw9IZ9VlxYDuhhwMQj%2B%2B8euY7bgIfMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLZnt%2B%2FWelGcgu1rOSrcA1wwuhldRMdL9hFLRbSmFIUisLqorZdJXNX7EjM15ZjKrzOaE9uJnRXEpvBtiPEtpxNi0MrckVkgSk8JYmqgTWHHKoFy9t3s4wrhXH3ECMC8Nd02Sltc5w%2Fqyj3VIe4sO9a%2BOJwtD9eNnVqvfoTLcXBB89cT8CewSX9847%2Bn474o8JPXEYQkZFmHod4rGdm6TOKqmBR4mJCAmA50ZnuyYxHL7X4hr8xL3Qex%2FRWfHFuanBUXl5KtfnGHrgxKrSy66C5nhvX935Apbw06MKxbp34Nz3462dS8qKHxMoZ%2FgEOx0xxqROZfgn3v4AcJdeo%2BpVDemXtgx4D3GlAq8dyp2wy1VoS0ka5YHwWBq%2FazY6MuNKn6JLk4VGc%2BPFfN4GEtE1bsLm4G%2FJuVVyHVVpcrIraQhzl9Pm%2BrrXaDjhXE9k8RJ5Wrg68XWzGIcq%2F6FlTzvTYP0TSbpn3z4SEG2wVmsGopLGBTdzcLLcuThNdvZPFOQWrUfnsc4xfe7%2FwcbVB8mHgdMvbi93YLSGB%2FbmrEWZ6pc8Rrym9R1O%2FVZC%2B4nsgAT3zv8Vj4lHmUCllaCI8l4KFjC9Lax406iavWcsS5OVHTpPecWhniJF5VAX2NUrK609rq3u4FtNPsckYvMMmEwb0GOqUB41jg2kwBQl%2BzBTU8LHY%2FRJYDsKLo07N0VwqJcliTqSSpEdJUrOhWFwf5D%2F%2BSOvTOww7vfZ7pNg3OVhyKWQdr0CzxpHHVDBZdwgAHCsEI9IeRuRppuly6vuFfUDUP8BMOtFwfFnejXsMGQrjjKQChQHjOlOXl2%2B5Z32yxcDC3g%2FZDA%2Fy4aI5EGXd3GCImy1JxtkZx4iQ2J9lhqU05TYnQ%2FrzYk8eE&X-Amz-Signature=7b4e30b66ca6a90aaa7d27dbdcd9a34fe216f6aa28c9c49aa33cb2275378597a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HU7AIDN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDZCjjRXrNhaQviLeV%2B8WxNFM5ARXtX7BzBOt1m1%2F5K2wIhAKs0Khyg8OxWduYjHX%2BUa5ECV33tz06BEUBwT%2BmTxIvnKv8DCEEQABoMNjM3NDIzMTgzODA1Igz8TlbW5hZ3%2Bv9SOdkq3AMwAK5HfgPhKXmTfEaXYWYLfi%2FrzEIVez4E2zM3EuBoCwoBIMcVCBO4tzq2QVs%2BfeRPuPNLHy6wzrxSTmpQaxb6QMl%2B%2BrxyfJtMPDwoma4iBy47x4oecCPKTjpDV4kdVazgkxHxqXJRFsMKKANzBKeoMBjP1s72XPogQLOB7%2BM1Z9tXHLcJz5o2n9UbLy804unhj%2BojqurxeUEmzUOk8lv0rklM1dtzncGfE8DVod3xVcYynK7GN08SNVcVld7TcKe5%2FYpMvrWTDy8GL%2FsM7h8ztCdFF7sEyBplXNQwBJ%2BxpUT9jbf%2Fg5%2F2eOlTBoA4YVX6JpXlVlhEErkKJVopk173XoqBmxoyru20FFqwn%2BG3JSXqX%2BkVDCNmrQBTCMSwr9Y9CEA3druRNVgt3rm3LHV5RhD%2F7osQNV7ExqtqtiEp8GQUoDLTcSfFxQjf6ysZzwp%2BeexuRfQ3zMf0%2B3QE2Bgjrl1NIm7Re8CMX6i1Plv9DIfm8vANU4q1BokJP9tmTgL%2FQ4jVdPwBtEkFwD8yosDqgrAd4FJBzHo0DBT41zbM2lJBQaS1OZE9YUAuIALtr116IPv0gjj%2BTlL1uex7J0flXXA8aW2tBWA87%2FVF9%2Biy5liOY3cfIlYrlHclATCnhMG9BjqkARVvA%2FZ5Ghyje%2Fzh083C2MSpeUs8xrbIZMldr%2B7OGfG6YLytbtnvB8znuchs98cym6TJGZ2iFZLflRUY3Q4NFxtrd16GagIeHoUnNDKhNlClbkKwpcMz59iDUPKZrXBsdX%2FuCicZvuSWq%2BQvDmkh41k8t31HCGETnsDOH9oeSE%2BC3ScNiOauhCckrdDHYtj7a8oKyzbL5AmEszujIu0xN1bN3FSe&X-Amz-Signature=0ef41a56de651d00f05cb1fcdedb6cf6ee67c154c6b8418721c98cabd8291816&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQO4ZFFD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDmxnHzf13SHauUFXUvcpMGd7JRlTxqnRu%2BymyVtClknAIgTOANWnuIIRKbyuRZSLbJfXmXZd4nA3GNfD3QMh2NZN4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDErTsEo3%2Fdj6GFyBCrcA5ynKcyGe2kilWtjYyDAaSe4oNVjmQsy%2BoZpb5817C0rqm9OUSky0z3zUgvtGNjyyk2zfRB7f24oNFBC8hC%2FhmBFYLEa046MVQFL3T7EwGs7k0gO%2BWNMk7FoSBDs2F1O208Ca%2FEqnDLkqz5020It2VTM7OZSPLQyvtmrglk7Z7VAMsffVac2XVDBWKp8RUNruqrAJWvcLn6wbI9KAjfSBFEkpZ%2FbO3qoIEbzcXy1P%2BMK%2BLB38SV0uDz%2BFSQ6M2U1w%2BKcGq0aWzEQyZJ4YYGRdOwL%2B99NEdWT2rS51NX6L640vxO64wNC%2BneAYW8xydypiXlUzEHyCk753xqmvhma7agdH%2BfwYwRnPmHdOBQvvRwToDs5m1RJQP6LFBmeLxJn3I4%2BjcdklzSkVIftd1qpiVZhzAE0zDJmDbkLFXc5y%2BNORthFE3Q9nrkvxna9vbuSLZgVTv4hwhqwd0gUg8b89LNlVNnER4R9O6qCFA53v0igGc3R1qm%2B3EhHxQufdhhBhoOBHh7%2FtZ%2FpJPYtH9nMqHXFL%2FafPK%2FTVODar5W1Ml7GjQqhOvhH9d2XSi4%2Fcisbx7O37hKE%2Fnb%2Bpvrj%2Fbx6P99F9P4yIxwf9y%2BfO3%2Fe%2FAG%2FKZLWGlVALWXH4PNyMPSEwb0GOqUBzRp7UTGkySnpLQJ823SJ4Sl%2FJLEJraUH6rNOpcxZTuzZkNy8903yuUP4iHAxUgynNPYOnySZxVjGApe3dctqHwiJGBrOYmKqWVYN2frMomfCekjMAEOiQB2%2FTDfA2P1w1vNJtpB9CLatDghKgKL7SEeUFkl%2BuinvPWfGK5P57mCJYwjkmt%2B6mdIcrllZFxK2f92nPbDOggz7mP8PexM5KP8tpJM4&X-Amz-Signature=6241f4f4eba66b8581b80f8e02d602f63abdced9d00c962831f44b232d1d23c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

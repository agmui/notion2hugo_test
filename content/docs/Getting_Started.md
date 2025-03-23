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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35RQAGO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICDpGNfPlPNM0FFRfYXP1HVgjkzoTj7Oh%2BEt0EXhx%2FbhAiBd02hOihTTHvAhjGtubVXlXO8tk%2FziX4GyGoy%2F8PyY9SqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bun6H5ue92jIPXgjKtwDIU1760J5fiKGEEXSO0LqWXwTwOajQoFjndmdJXMscSvJLSj%2BQ4SfMc3cTq0GqBl263x6kIH9Je4FxiBWZ49JG8kl7P0rSBpYXMXR2BVgnOG5ntyJngFp%2BLeOaynknZYH8HhpWt%2BEY7kEOJ1EbaHu1GfNFMUDuAgMhrQ6zRv%2BIc8myselFUZIUOsG6Pi5B1UsIcoWOli4PD3bj7YitNkIqv6InMNYo4drJ32Y%2F4EO9YyzYFBBbEjFSqmHDcJ41odXtv8zqbBhmyJpqRIq4pR3sTvDHOFplCIrwTREfxHCPB3XsyzT9%2FlcapWom2sE7FVigaKyliFf36MslEVTkVovAcIp5%2B6Yqv%2F78xsnmMNXRg83IigRYUMn8bOYCYtaqHDoD9TB8740eEJj1zZ9ludllgHEQIkUCzondFbPjpy0n%2F%2BZzpcI00aqfsQYMjYSJVGeN5QV5%2BP%2FWa9G2Zh%2BOR8JgjFj%2BZhc%2FD7FNK5RDrvHj5KBtyJE7L62lHUUp2sXTBb4a%2FYwLQCWam7Ld%2FiCVrYQQzM%2FvZrr74E8TXMXd2RpmZdwEP6sKywDO%2Bu37KFn1Ajvh1YehBhu0waZTayC9rWvCZ5Sg32DbFDJBCcwEeuL%2FgihAB9GK%2F6Gx%2FzF2wswic3%2FvgY6pgGlH8hB%2F3GfaXEyhSZSLevhivP5rfSJzKIIbU4D4nvaKV5F5gZw5KfYRJXjh1EWgC%2BWBNDqoMXLVncQKwHLNbuhpQjo0HlNCZaq9C%2Br%2B49LAbCL7%2FI1FIPuhjnlgk0zVPIyT3Gp9%2Ff0ri4A%2FHcw8KUWerICK9JR32wgvya%2FgFFvBgvaSH0st8mReWwmBJ3d82H7aZucvTifdZzjirp4z2Hz%2BBMFFbvv&X-Amz-Signature=992481bd65d53e45c85fb1f5dbf3d6e09146249fcbbe5dee5d38bc1c656bfe7b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35RQAGO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICDpGNfPlPNM0FFRfYXP1HVgjkzoTj7Oh%2BEt0EXhx%2FbhAiBd02hOihTTHvAhjGtubVXlXO8tk%2FziX4GyGoy%2F8PyY9SqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bun6H5ue92jIPXgjKtwDIU1760J5fiKGEEXSO0LqWXwTwOajQoFjndmdJXMscSvJLSj%2BQ4SfMc3cTq0GqBl263x6kIH9Je4FxiBWZ49JG8kl7P0rSBpYXMXR2BVgnOG5ntyJngFp%2BLeOaynknZYH8HhpWt%2BEY7kEOJ1EbaHu1GfNFMUDuAgMhrQ6zRv%2BIc8myselFUZIUOsG6Pi5B1UsIcoWOli4PD3bj7YitNkIqv6InMNYo4drJ32Y%2F4EO9YyzYFBBbEjFSqmHDcJ41odXtv8zqbBhmyJpqRIq4pR3sTvDHOFplCIrwTREfxHCPB3XsyzT9%2FlcapWom2sE7FVigaKyliFf36MslEVTkVovAcIp5%2B6Yqv%2F78xsnmMNXRg83IigRYUMn8bOYCYtaqHDoD9TB8740eEJj1zZ9ludllgHEQIkUCzondFbPjpy0n%2F%2BZzpcI00aqfsQYMjYSJVGeN5QV5%2BP%2FWa9G2Zh%2BOR8JgjFj%2BZhc%2FD7FNK5RDrvHj5KBtyJE7L62lHUUp2sXTBb4a%2FYwLQCWam7Ld%2FiCVrYQQzM%2FvZrr74E8TXMXd2RpmZdwEP6sKywDO%2Bu37KFn1Ajvh1YehBhu0waZTayC9rWvCZ5Sg32DbFDJBCcwEeuL%2FgihAB9GK%2F6Gx%2FzF2wswic3%2FvgY6pgGlH8hB%2F3GfaXEyhSZSLevhivP5rfSJzKIIbU4D4nvaKV5F5gZw5KfYRJXjh1EWgC%2BWBNDqoMXLVncQKwHLNbuhpQjo0HlNCZaq9C%2Br%2B49LAbCL7%2FI1FIPuhjnlgk0zVPIyT3Gp9%2Ff0ri4A%2FHcw8KUWerICK9JR32wgvya%2FgFFvBgvaSH0st8mReWwmBJ3d82H7aZucvTifdZzjirp4z2Hz%2BBMFFbvv&X-Amz-Signature=ea63f0d939628a9afb299f29f803e23bac8973f578ae7f9c83cb13ca0274d8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDHTOB3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCID%2Fi11IXKSjAe%2BswztCWTP%2FndNoaLRQPlqi9DNvA%2FhorAiA%2BgTRvFhQuTCSyCZ6iaCftlRuNunzSStViRKolXQS42yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWg9p57VsIFN5iqb6KtwDxoKrpG0IcDiuIf9cDuYa62DyKFTXWSZ0i2l2hEvnUpTzHqcGRFgxBHtli3wI6YI5X9HL1y7geevak%2B%2BLg8JSKehMce9BQhgv5QrhpB%2B0DuAn1b9PSiCb9Tah%2BoHsiz%2BE5zXabl4qZOaOnfSW63GJZeKUhUHVFfbnFiZSlsb3nVaQAysZrZJj3JypdtDvN4C3oEFEKeY6eUU1SpzMocbFM7g7xssxH5iyTxxSag4%2B6%2Fhs9aEu9gZQZJVzn5DZNK2eO8IlV5MU14JwBeEy4s%2B48cDYDk1SChEFx4jbIkQWkHNOZmEFRDlbiqtQR4equfRz%2B%2BhB3uzTulGjWSIK5b0PnL647g4j7cpOiXQh6lW%2FtsO0ZNqC3QFrlW6AemuwTwuq30wvEu%2FZuCmmOP2QhKubNa2eCkOfKam3Jn7LRJt4gs3bCYy%2FXs0e5CubrvnsIRVEVqLyirilMzG2Hv206WbVgh3AcctZVEi5x%2Fw%2F8Pd5WOAufk%2FeP4PscH%2FW9hcVf7YyRdMUqS6g5TZidJ1cVEdOLXPgLg06iHaQZDVzhHzkjyBgC2FtrswdDOtXMVSg19PqNWdWY%2BZCVomVnFDyvZCohbChtdDSJcoAAWj0YEWNuAwjJ38yUewCuBmNAZAwhs3%2FvgY6pgE6nonz%2Fdiap43eNm9t7%2BiE41r9l3cMb1SIWPco3BIS2jA3qik6xWDQSfeYMsJKV%2FJok%2FGwR0i6MZFV%2Bkd78d3mQtox5ctO6p7n5UioJ3aiH6Vq%2Flyoo%2FBOLhDrjxr7EpM3Ud2urzleHFjhGyoibVWTGrt7JJjyfUzy0prRHdhXjx0xd4mNfjcL7MErlDc4WWOVWTvp9v66KYhZv5Z4mLVKXP6wc%2FKb&X-Amz-Signature=60584f88bcfe31ad5360522cffa39a7543ec5d0ccaa07b6fc6ca161769895eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROKBBD3Z%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDqnzMDwy0Ad%2Fg12YRGrNHko18fbxPK3Btb5E3byURTiAIgORAEj365Pv%2FO8j8%2Bf84srzHy61T9c1IPSWNj3iyVlksqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRwm2PrF6If%2BLSq5ircA9Ct77e9L1402czQdb6q2Iv8IRkLuhMcn4nd90KgKDRk6E869o5RVmNHrEfZNs1XhVtcZBlIvc4e9YlGkqkCkOl95lJ1IHHzCcCgCCFgb5l6YNMpXlxTK7Jq34hPCBTEylvBN88q51RcsSizLLm4RHJ6e48JK5t3Iu9515JwVqlOBLMnr18vfsbp40tdXBO4RaKKiK9X4KgS6C5pl2gDSiIZFjooxExUFgpgm0cIV3q2zL7cvtJWJKGcQ0dHizTye5xbARjRJeEd0NZx%2FyFU4xG1bZ47Vx3bGyc09w1qg6IwcieWPZdcJ6mGHrpmmW7YEQPH3gY6jIZPlwVkXkSiGZXGAomu7XVKk7wUbcknyASe0BhDFjGrpxxEiIcrPbpFEGkVkuaeS65BIZOGjAdD%2F6inPRwJopggq1pnJi9iXF7lWDbEXr9V1mCny0QbO35ezThXIps0J6O6kYXps0H4H9X7%2Bc%2BmrIpx%2F3LrPHNruGKmyZvtLD5tbu1cviVf8D90wyB7oLPsipQyIHurfSce7A5I4NQgCRuHI%2FPFBpgPFXh6%2Bymu%2Bzl51U%2BEGRrxdN0ZY8AVVskBxsU6rn%2FFdzAQIap3V7ifPqEL1SGfaiaWQ3bzJnXv8TqfuWovdOrkMInM%2F74GOqUBCy5ovr%2FMkJWVbIwEkg65Bl13fpie4GiBTH1srS01fqRC%2F1BsYHU%2Bna2qLf4IB5Jhye0PSZ9NcyU8wYTOtHrF0gGIaJdI7fOuXVllO9S3JS2qXoj4DOw4FWS2EVONmv3Nm2n6IY5lbpdfCTyFac%2BHREIZgJCR%2FdMdiog33NwTSo%2FOZIunfX%2BN%2BEdnfc5Z8W1YRrmz71J%2FeoiLJbWLnk4iqwYba3NT&X-Amz-Signature=88eeb791bc5226bdeb4d6c10e3c7ee62af3b70cd01438493973af97fc3d91469&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35RQAGO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICDpGNfPlPNM0FFRfYXP1HVgjkzoTj7Oh%2BEt0EXhx%2FbhAiBd02hOihTTHvAhjGtubVXlXO8tk%2FziX4GyGoy%2F8PyY9SqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bun6H5ue92jIPXgjKtwDIU1760J5fiKGEEXSO0LqWXwTwOajQoFjndmdJXMscSvJLSj%2BQ4SfMc3cTq0GqBl263x6kIH9Je4FxiBWZ49JG8kl7P0rSBpYXMXR2BVgnOG5ntyJngFp%2BLeOaynknZYH8HhpWt%2BEY7kEOJ1EbaHu1GfNFMUDuAgMhrQ6zRv%2BIc8myselFUZIUOsG6Pi5B1UsIcoWOli4PD3bj7YitNkIqv6InMNYo4drJ32Y%2F4EO9YyzYFBBbEjFSqmHDcJ41odXtv8zqbBhmyJpqRIq4pR3sTvDHOFplCIrwTREfxHCPB3XsyzT9%2FlcapWom2sE7FVigaKyliFf36MslEVTkVovAcIp5%2B6Yqv%2F78xsnmMNXRg83IigRYUMn8bOYCYtaqHDoD9TB8740eEJj1zZ9ludllgHEQIkUCzondFbPjpy0n%2F%2BZzpcI00aqfsQYMjYSJVGeN5QV5%2BP%2FWa9G2Zh%2BOR8JgjFj%2BZhc%2FD7FNK5RDrvHj5KBtyJE7L62lHUUp2sXTBb4a%2FYwLQCWam7Ld%2FiCVrYQQzM%2FvZrr74E8TXMXd2RpmZdwEP6sKywDO%2Bu37KFn1Ajvh1YehBhu0waZTayC9rWvCZ5Sg32DbFDJBCcwEeuL%2FgihAB9GK%2F6Gx%2FzF2wswic3%2FvgY6pgGlH8hB%2F3GfaXEyhSZSLevhivP5rfSJzKIIbU4D4nvaKV5F5gZw5KfYRJXjh1EWgC%2BWBNDqoMXLVncQKwHLNbuhpQjo0HlNCZaq9C%2Br%2B49LAbCL7%2FI1FIPuhjnlgk0zVPIyT3Gp9%2Ff0ri4A%2FHcw8KUWerICK9JR32wgvya%2FgFFvBgvaSH0st8mReWwmBJ3d82H7aZucvTifdZzjirp4z2Hz%2BBMFFbvv&X-Amz-Signature=f814614ed62f39ec1df4867ecaf1dc89883ac92e4bda9e306105db3b2329eb26&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

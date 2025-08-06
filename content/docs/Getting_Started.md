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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7W2EEL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDUyIUgAnDIiofC%2F15IkzhyPEHTQwEsdt0KBklEh2rOqAiEA2ztc6brxMSAmknmw8SVveIot68VtklcyT7oMaR3J7K8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIBmpaBA8D%2FwBvLpUSrcA6PTUmoSS1jGDe3pWVar2t8zglqqCrXvm0M%2FpWZdEopd6DuyN0PD3VUbP6rN81mN9g7Ko56%2B3kaQFrwjggmJ%2B%2FSDOBcOPOH6Sli7CV64fjKXzwoO8IUwqLAyS1i%2FWwZdhuD8owb6FCTCXIysOClwBiITOHJx1MOpxb4NfP0HAUUsjqHLKvT%2BGEu6foRrfc%2BX0S%2B84OXI%2FGjuoDjAkv5F05oh6YKlgp6g%2B64%2BJtIm9P4glXU3JoYNhCsh%2Bf%2Fpln7oNtbIQH6%2FXOYr94dpcKxmx0qnpm0E2qPmpHhK1%2BrjpCrfinASCE991mnYKW2BGVlEVV%2FrpC6UlZrBSINx9Ag4iWeGHzvUf91vAsBBqDE5lFo4Wae2k9aGwxhfAdyOLUAgNUAvzmPcS2BEfzbwJeWGhBKOhEmA0HWVK1eQy0zHqT%2FNXVY0zb4DUqVpwSwJv8ypbDDV2RK646P%2BojkCITfIIyyV4ERqFw%2BVrFkryecJvJ%2FM2nEq057QdH3yyU44OpQYOjttuBVFctSioIY0aIZknTR6GBzBnxDHkqd4UHn10nqq4N5Mvxy9GqTi5WhXuERTJgM5jX1HEag1T51EW%2F6YY39byuqgjC%2BJBNeZJaKIbEeCwdnChD5kP1EeqPTXMP3qzsQGOqUBscFQ%2FCbnWyq6%2B5z9mO2xJOLVJgyYVwQ2esyvMXciZTlXa%2FSZVA8uKDroXIfwfk%2BhTGcZIPF2%2BCgjJn6n079dXhrFFMtuyHLCjh6KPd0EaM7Y8CVsD%2BHqqsJBspN%2BOslwcfAIuhHIwBWFngWiUsMtoGgCQn0LO47WmTKrPSgb8IsDIVX6NfQKJbVx5%2FQgJHcnf9%2F64UQLPDfV%2BPpdZxqDFsrK5SjX&X-Amz-Signature=c6b70c3d9c60d0b66153d53aacb87d3e0eedaf922319ea687490bd14fe641256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7W2EEL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDUyIUgAnDIiofC%2F15IkzhyPEHTQwEsdt0KBklEh2rOqAiEA2ztc6brxMSAmknmw8SVveIot68VtklcyT7oMaR3J7K8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIBmpaBA8D%2FwBvLpUSrcA6PTUmoSS1jGDe3pWVar2t8zglqqCrXvm0M%2FpWZdEopd6DuyN0PD3VUbP6rN81mN9g7Ko56%2B3kaQFrwjggmJ%2B%2FSDOBcOPOH6Sli7CV64fjKXzwoO8IUwqLAyS1i%2FWwZdhuD8owb6FCTCXIysOClwBiITOHJx1MOpxb4NfP0HAUUsjqHLKvT%2BGEu6foRrfc%2BX0S%2B84OXI%2FGjuoDjAkv5F05oh6YKlgp6g%2B64%2BJtIm9P4glXU3JoYNhCsh%2Bf%2Fpln7oNtbIQH6%2FXOYr94dpcKxmx0qnpm0E2qPmpHhK1%2BrjpCrfinASCE991mnYKW2BGVlEVV%2FrpC6UlZrBSINx9Ag4iWeGHzvUf91vAsBBqDE5lFo4Wae2k9aGwxhfAdyOLUAgNUAvzmPcS2BEfzbwJeWGhBKOhEmA0HWVK1eQy0zHqT%2FNXVY0zb4DUqVpwSwJv8ypbDDV2RK646P%2BojkCITfIIyyV4ERqFw%2BVrFkryecJvJ%2FM2nEq057QdH3yyU44OpQYOjttuBVFctSioIY0aIZknTR6GBzBnxDHkqd4UHn10nqq4N5Mvxy9GqTi5WhXuERTJgM5jX1HEag1T51EW%2F6YY39byuqgjC%2BJBNeZJaKIbEeCwdnChD5kP1EeqPTXMP3qzsQGOqUBscFQ%2FCbnWyq6%2B5z9mO2xJOLVJgyYVwQ2esyvMXciZTlXa%2FSZVA8uKDroXIfwfk%2BhTGcZIPF2%2BCgjJn6n079dXhrFFMtuyHLCjh6KPd0EaM7Y8CVsD%2BHqqsJBspN%2BOslwcfAIuhHIwBWFngWiUsMtoGgCQn0LO47WmTKrPSgb8IsDIVX6NfQKJbVx5%2FQgJHcnf9%2F64UQLPDfV%2BPpdZxqDFsrK5SjX&X-Amz-Signature=dff36231bec740c5506b6b9b79e5644e22d9b201d175d43eed0dbd0b74bff75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7W2EEL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDUyIUgAnDIiofC%2F15IkzhyPEHTQwEsdt0KBklEh2rOqAiEA2ztc6brxMSAmknmw8SVveIot68VtklcyT7oMaR3J7K8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIBmpaBA8D%2FwBvLpUSrcA6PTUmoSS1jGDe3pWVar2t8zglqqCrXvm0M%2FpWZdEopd6DuyN0PD3VUbP6rN81mN9g7Ko56%2B3kaQFrwjggmJ%2B%2FSDOBcOPOH6Sli7CV64fjKXzwoO8IUwqLAyS1i%2FWwZdhuD8owb6FCTCXIysOClwBiITOHJx1MOpxb4NfP0HAUUsjqHLKvT%2BGEu6foRrfc%2BX0S%2B84OXI%2FGjuoDjAkv5F05oh6YKlgp6g%2B64%2BJtIm9P4glXU3JoYNhCsh%2Bf%2Fpln7oNtbIQH6%2FXOYr94dpcKxmx0qnpm0E2qPmpHhK1%2BrjpCrfinASCE991mnYKW2BGVlEVV%2FrpC6UlZrBSINx9Ag4iWeGHzvUf91vAsBBqDE5lFo4Wae2k9aGwxhfAdyOLUAgNUAvzmPcS2BEfzbwJeWGhBKOhEmA0HWVK1eQy0zHqT%2FNXVY0zb4DUqVpwSwJv8ypbDDV2RK646P%2BojkCITfIIyyV4ERqFw%2BVrFkryecJvJ%2FM2nEq057QdH3yyU44OpQYOjttuBVFctSioIY0aIZknTR6GBzBnxDHkqd4UHn10nqq4N5Mvxy9GqTi5WhXuERTJgM5jX1HEag1T51EW%2F6YY39byuqgjC%2BJBNeZJaKIbEeCwdnChD5kP1EeqPTXMP3qzsQGOqUBscFQ%2FCbnWyq6%2B5z9mO2xJOLVJgyYVwQ2esyvMXciZTlXa%2FSZVA8uKDroXIfwfk%2BhTGcZIPF2%2BCgjJn6n079dXhrFFMtuyHLCjh6KPd0EaM7Y8CVsD%2BHqqsJBspN%2BOslwcfAIuhHIwBWFngWiUsMtoGgCQn0LO47WmTKrPSgb8IsDIVX6NfQKJbVx5%2FQgJHcnf9%2F64UQLPDfV%2BPpdZxqDFsrK5SjX&X-Amz-Signature=c3b4f1b3f021c1d27bfff0edfb4fc92977a6e5600474a09d07af8af10349ea73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZAW42V5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAUlpl1Iir%2FSYCsIVJkSTObG1ge9pWWq1KN8Eto%2BmkhBAiEAxjcbiXSp%2BnJ8EODgrEH7T%2F%2FTl9M5Zi%2FiOQFbvR6evWgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDH48i0M%2Fm7jwTSjswircA6mO4MSd%2F3YUXLawLJir8gBNwwNYUxdsXbZ9et8hoa6ZpVY2N88cnzaqbXF79n4wTJ2%2Bvouq8IRXBo7D%2FafG2pfVrh6DX26yM60U7WfH4RnV7wCoT%2BtKOsbDwBHeyQlm2F4IWyqysgi4Nj1AVfPmD5OVcp1yVfpbV%2FvcphKh9FA%2F43l%2FTLqyUeJclLa5WliWiOz1hQXRZ0AhupRLxQ5EQ21CykUjxjw%2BUB6xDzYFW5GEzVyvpPR2gzAMUAysr3LT9kpVRd%2BQEDLuCu%2BXzV%2BMbnfaJek2mykVWTIXcDBTR06P6yVDBtbbAIdGImjqD6kxmVezm6DNIX39Z8VdCZaJEpFWvAU3w2sGotJPgJDCoQmS7Zua%2B4v6TISzMPV2dSqYHNiwrjndLHfq65FToYod%2BzI8mKG9RlJhPPnQ6dn0k59EPO%2BQiepuhJECEgds0oqG7ZtEnA9%2F5CV%2F1q0j96%2BFrhVQ3vsKiVSpW%2B2aqdnhYUlupSISiXUnHGCeGVPcKNtzo9t6mjnGEJk59Upgdf6VksPqQwQFebau7fkmo71cqDOZ%2B3RaD%2Bn3uN1kps9FXZ9tl0TbYNbc4%2F6eVpRTCZRNtlvHdVWJpZGrXYPXoG0Z41LcZxJILMSvd5Dh9Re6MOvqzsQGOqUBtAyQRLkgLuJcA9hNF%2BvlfgnEGjjU8ofM4s5cs9X0GhrrmEdY%2FRoAN3iqhNuEZtRy62VjlEKQZQeU8yOWOdSUdojNTcFVPUkSsi9%2FWXSjIJVOF5fggn23%2F3wKzk7LNKFhvtOX%2BGSHxQKIqPik3Usk3gn8T4hNyahNkSQ51hGtvU8CWKtWf%2Fws6B0ny8DyRp19eK6idKmGC0dx9nIO1YPkGGU02d%2Fx&X-Amz-Signature=9474f8c06081ba14aaccecffe777a90ef85283c900a19257833532748bd35b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TBADV6J%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDGLxqby%2FXeNKJ6UG9C4ziIpzSie2Qzx6LMJrIICA32swIgZHPBXvkTmgh3zXwjl9iGTuL4IL7%2B0BmCkcNsBmqOb60q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIA4SBTM8%2B7Cw4vepSrcA8IbsXmYYXstTSBmD1o72WAkzLjojkf%2FksJFKnV57rhNr12pkBEwEyJd%2Bhp2BsW56A9VJ42YW3jfunrnbJFf4jxHTQsvl3hwmLQDTghk9wRhXMOGnTratXpy%2BtjF7uKCUHD%2BP5gP5gUFh4lI9MQKHtLDoarewg1bBLrhnjTbyY9jGuCp%2FbYLLBkR9KEBpPnv3hvCKRUQgcEUyQeFgocFUt2NdMbBQsc%2FgR%2BusXpkS1oYft4A8JpRJhZKKDCvgeaZbRnT4NzsV1xiwXt%2BNqaeZma6wfN0QV6QChV0I4CYvYTIjrbOiLjbNclrQHp%2BnwslPCN%2FUVlJFiaHCcWgTuIIoCpUQm8zF5V9MS2ZmKSBDo61bjcCRGWYd4jT3VRP%2B2ifOYKqFisUW48OZH6iwNEaZ5Um30%2BlnVStCM%2BehJHuxXEhOadTqPzDZc3u3%2F2EYhTSXQ16PNmt%2FIvtuYnlxt7pyP8TfQL35eDQbBTW7jBUfN%2FPp8j1kJp8v9sQ37FeuCLyc1vzAeYYbo2o%2Fc16SJzat3S0f39Wno%2BFel51UpWNeHfTyG5FxZ66zqMJcaS7PUb45K8dy4qw2Ex%2Fnf6F32MjuCRdiHVda7mbZXZjggbE5lp8DapHkXSXx6tTZVwDMPzqzsQGOqUBfdyNqPHb2Xc%2F5X0Kdcav40JuVgJWOV85pZqYj%2FOjBRom4%2BUuL4exZG9FGqwR0yHAFD%2B0RUFFuZ6f4KDJ6Q2zgB5Zs%2BkP0MSl%2FrWFTs%2FpxAl94il5j9lsgXKJyuE8OTCeeySG%2FNEBWf%2BWS2%2Byw%2BzUcF1rypIZJlzd3S5XjUH6J2zmSiAXk5MdU4plXRGRD4RtkwmGmLbXME5tlvEP0GqTSLxPydxo&X-Amz-Signature=6749ed425c7d127e33e55b5fb70490b330023fe7126f8ab72b4711dd6c88fbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7W2EEL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDUyIUgAnDIiofC%2F15IkzhyPEHTQwEsdt0KBklEh2rOqAiEA2ztc6brxMSAmknmw8SVveIot68VtklcyT7oMaR3J7K8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIBmpaBA8D%2FwBvLpUSrcA6PTUmoSS1jGDe3pWVar2t8zglqqCrXvm0M%2FpWZdEopd6DuyN0PD3VUbP6rN81mN9g7Ko56%2B3kaQFrwjggmJ%2B%2FSDOBcOPOH6Sli7CV64fjKXzwoO8IUwqLAyS1i%2FWwZdhuD8owb6FCTCXIysOClwBiITOHJx1MOpxb4NfP0HAUUsjqHLKvT%2BGEu6foRrfc%2BX0S%2B84OXI%2FGjuoDjAkv5F05oh6YKlgp6g%2B64%2BJtIm9P4glXU3JoYNhCsh%2Bf%2Fpln7oNtbIQH6%2FXOYr94dpcKxmx0qnpm0E2qPmpHhK1%2BrjpCrfinASCE991mnYKW2BGVlEVV%2FrpC6UlZrBSINx9Ag4iWeGHzvUf91vAsBBqDE5lFo4Wae2k9aGwxhfAdyOLUAgNUAvzmPcS2BEfzbwJeWGhBKOhEmA0HWVK1eQy0zHqT%2FNXVY0zb4DUqVpwSwJv8ypbDDV2RK646P%2BojkCITfIIyyV4ERqFw%2BVrFkryecJvJ%2FM2nEq057QdH3yyU44OpQYOjttuBVFctSioIY0aIZknTR6GBzBnxDHkqd4UHn10nqq4N5Mvxy9GqTi5WhXuERTJgM5jX1HEag1T51EW%2F6YY39byuqgjC%2BJBNeZJaKIbEeCwdnChD5kP1EeqPTXMP3qzsQGOqUBscFQ%2FCbnWyq6%2B5z9mO2xJOLVJgyYVwQ2esyvMXciZTlXa%2FSZVA8uKDroXIfwfk%2BhTGcZIPF2%2BCgjJn6n079dXhrFFMtuyHLCjh6KPd0EaM7Y8CVsD%2BHqqsJBspN%2BOslwcfAIuhHIwBWFngWiUsMtoGgCQn0LO47WmTKrPSgb8IsDIVX6NfQKJbVx5%2FQgJHcnf9%2F64UQLPDfV%2BPpdZxqDFsrK5SjX&X-Amz-Signature=cc176c1524923272a75c775a8b7ce8c861cc9477835cc6f1f48b4a801da9c990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAZDI46%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHfWGp%2BKpLgQNMEtkRO4shsTLcVokKCKEgNGh40%2BOxbyAiAtff63eyO2cbHGlch1CiPzmnPuvWDowqM41Oh9Z4PrnCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh7pTW0WQ82EFsKZ%2FKtwDnCSivci7Cx6%2FntX9X7C3W7FC%2B0z%2B4N8vjGMf1l%2BGmRWdATWjXEFfeGRbzOfENQVGk0yhdxxi35Y1MTj%2B%2BKCwIz5v3DTLm2aFovnfKM%2FxMwl2gyKyDAvkoj9DsgoOfXmrgtt5MCEwamF%2FBB9A1lNFaTw8F0%2BJASHB9OdOZO8D6pnyNjN83%2FkuF6eyquRdDWI1N6uSa3AHGYjIjCqnfBfhALRDme%2BtmODqLCV%2FCuAgEZOO620SEOCrLIoXCRNb6GZoga0yGBdBWj1KkixGBaGxPD6UscD3b6naTPqZtSfiG%2BqrDDORcyglxtpSOKZDxOgd1ahUUVMpM7PkzUQB862cw%2FZFBJ4Tw4piHDo1dG%2BmcevMqgZ9WOwZSstj8az%2B5KNQEbgYSq6E8rTu0nDma7FOFRxhroN2iFgSkeanQMjh%2BBNPwSqoYl9P650BQ4FLrWUoX9yxQc1Rex4IIRlBXskSnhWNgDgWsemnRdccZe2Kbv8Wh3fowl7zJAEoaKValM2lTIn9Y%2FkYnFXOyWh5bQOYPz3MKLfzgtmXlwSuunFm2OiD6IRJ1DuNxEK7HfipdMK8cc0vCm7IU8tjeu0R8xrvnpxgDsMveupyuCWd6XlBF2T5XegCniW3CMWW9JQw05TSvQY6pgF8xfnwft1epdAA%2F2ZiEUo9EvyAgw9rjSGsogU28NbYrBHdblZuJfuXWFGm%2F%2FyUZsl0%2FOPTNXAArX3tUSII%2FRWMYIe7xa0jy7KsFAv5dojkXOdeI8cbjDPpHOsa3joD%2FS%2BDNAONrq7%2BmhvnfGPqG11VO7gPJe7ykXHRWTieKzvbL931q5z%2FJM0LEvNlV1PTqbba3avpgu2ZyAiWKGwIMQ%2BA8HaIJsYC&X-Amz-Signature=e2ce2ab16f334bf7d916730c0508e08360c17b3746920985e33ebf1145a9fa71&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAZDI46%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHfWGp%2BKpLgQNMEtkRO4shsTLcVokKCKEgNGh40%2BOxbyAiAtff63eyO2cbHGlch1CiPzmnPuvWDowqM41Oh9Z4PrnCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh7pTW0WQ82EFsKZ%2FKtwDnCSivci7Cx6%2FntX9X7C3W7FC%2B0z%2B4N8vjGMf1l%2BGmRWdATWjXEFfeGRbzOfENQVGk0yhdxxi35Y1MTj%2B%2BKCwIz5v3DTLm2aFovnfKM%2FxMwl2gyKyDAvkoj9DsgoOfXmrgtt5MCEwamF%2FBB9A1lNFaTw8F0%2BJASHB9OdOZO8D6pnyNjN83%2FkuF6eyquRdDWI1N6uSa3AHGYjIjCqnfBfhALRDme%2BtmODqLCV%2FCuAgEZOO620SEOCrLIoXCRNb6GZoga0yGBdBWj1KkixGBaGxPD6UscD3b6naTPqZtSfiG%2BqrDDORcyglxtpSOKZDxOgd1ahUUVMpM7PkzUQB862cw%2FZFBJ4Tw4piHDo1dG%2BmcevMqgZ9WOwZSstj8az%2B5KNQEbgYSq6E8rTu0nDma7FOFRxhroN2iFgSkeanQMjh%2BBNPwSqoYl9P650BQ4FLrWUoX9yxQc1Rex4IIRlBXskSnhWNgDgWsemnRdccZe2Kbv8Wh3fowl7zJAEoaKValM2lTIn9Y%2FkYnFXOyWh5bQOYPz3MKLfzgtmXlwSuunFm2OiD6IRJ1DuNxEK7HfipdMK8cc0vCm7IU8tjeu0R8xrvnpxgDsMveupyuCWd6XlBF2T5XegCniW3CMWW9JQw05TSvQY6pgF8xfnwft1epdAA%2F2ZiEUo9EvyAgw9rjSGsogU28NbYrBHdblZuJfuXWFGm%2F%2FyUZsl0%2FOPTNXAArX3tUSII%2FRWMYIe7xa0jy7KsFAv5dojkXOdeI8cbjDPpHOsa3joD%2FS%2BDNAONrq7%2BmhvnfGPqG11VO7gPJe7ykXHRWTieKzvbL931q5z%2FJM0LEvNlV1PTqbba3avpgu2ZyAiWKGwIMQ%2BA8HaIJsYC&X-Amz-Signature=a2da2eaca081616c187f466f60a16dbbf07582fabb97948417a18c98d5120dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVDKN7R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFwxaOuza%2FNeqOkhstVHg2ylg%2FkRwWlE%2FhO4Fu%2FuFczoAiEA2PNUFMoSvue1Lr5ibtDsyI9wnJY53O9fZcRsNdgd%2FS4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FLsWp8mPmnUU5VlircA5ZRb1WLzN63sjm%2BpVQFBKTvX2pJ9o8QOn4VRlxRWxYBsusfLQo6%2Bzs2Ywp%2BVw5sv%2FSLFje3iic5teow7U%2FMyGy92MWGgAGj%2FjKgbltqKPU2oeYJrM29TajlzB4sD5M6k7a3Lp%2BBGxT%2FcLn0JwKHM1TLY81RNuJ%2BifaRyZsgpPkjCqObjx%2BUnvPVM3%2BwZhHtJHjCdc3AyYCuNTH6UBoeq30D9VQiBSBO1njQ16ncm7dRFWQw1JaB4LA0ssk1%2FCa%2BeVvdf%2FKz16VZ1B1xDGEZD5ygSGSNMKXj%2FTn4MAl63vm1uGJI6h0JWRl8DdzBf3knZh4ulMCoDaIDUAbMPt4LZaW9ZFGTQP%2FkeIzSXSe%2B5EzYjODEuAPeJA5%2Bb%2F1qEVRb5yJTaJbUwPg%2B3wZP%2BWlfxL%2B4R%2BjqS735BYN2deIquUtxjj58fXqDVPopDAzTjoLypOhaNsHK%2B9QF3mNYjCJhWI7FdvEewac8L2bfywcXr8cuv3MX3T3xSTGTTqaJguF4VXy5zWrHm82myuFDeLcxJe%2BMBUDSFP8Kwp1S3ND50SMkXXyQhsDjYLoUqZ%2BPZdhXVj5MiTOXUiD4sFGmpigirZumf8HlgFMhRytY8%2BHReu%2FG1YT3Knwby4dkJdHmML%2BU0r0GOqUBK1HKeHd%2Brevt47G9rGfeYsNMnc3Pnr3NsDSBNCzKinj6bcqIS97unnAjX4QWfr%2BjpUw%2Fop85xIXUqyZVMKSRT1igIwUOtdjntp2WZZADR1otrLWeAqWlLzo3Scehh1mP%2B86mE1Qwj2tynvpPJ2W8uJgpphOOpq%2F%2FVLF0AHJPKp2OEnbhjkJb0x3bggkfVitjO9NKv%2BfuYUIDtCjpEsJrE2M0%2BHCJ&X-Amz-Signature=fa34ffeb8abc70cfdf8bfb3a9100388e2bd4e3f17f44a8e8b34e4d4ef5aeb40c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4746BL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICIujLxrN9vI7DRV1aPeQkcdkh2sqidMdTiBd5Elvr34AiEAitRG2LQ3RzNlrdOorcZXAOZCU7ZQ4zDtow1WCVC8M3IqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFX4E%2FG1RRcb59sVoyrcA6eQZChD02k5%2FDO1A0NrSCFxa8zrhMUY5It4%2BXNsYQYL7Ib3AUSOTGFXfbH0DZ0OJcTFwLFmnkeItN2TuVY279X3AIJkzY%2BOTHsuVDa%2BvIEcIob3R%2FmpHxXZxSG5RMxxoc1gZMk1HPSKZfGMI9qxXqxQn1zFY7MBEL2ryZmHFTDivW6JuAH7gFNs6gzXOisPyiq76NCLUHo%2FaxzqTbyizk3UIFRXB2VrLdNirNPwOWocfmAO2wyS2Qz2IH27CQIWDfHbYLUysxbL3tzO19%2B8sQUXlJ%2BsqkYRSZ7o9dmInFHirXMAe6RIH7gfHl7IaRDMzotPb4tXj2HRXZ%2FrUdOGsQP2qscNvrZGPS8VDX0Sc590Xh8q053yVDVwdnk8U7oXlH%2FQ3kxv8HG%2BR4Z1ZkET5w8%2BpaQnmE8K4v7tvxDOH5Dp0D1jf%2FlyFiFomX7wJMNRG1P%2FL24iNbjP%2Fpa84kwx8DjNd%2F5fNx043jGU7DWrQl97JEPu%2FQwES59fu9haWLEo7JE6OnCvgA%2BypVS6%2Fd%2BMIcjjUxc1negwIQHM9SifUMD5ujWWzkewTefR5%2FrkAIau%2Bk3KjnXSRuIdm3QdWz2OHYSbUBMuoIY98cmbF9ziPrvpcteEJ7JxU%2BurcEwtMMiU0r0GOqUBq0NxDkcy1CfrZ4dTEvX%2BvDI5fMueuupuzssx1iQAUxiJs4Q8yHRLPuWVXiuhySRyzLBd7JT2DdbwgCDECNJe6e4I7Y6NmkIAhXXnTQqpPc5KPVaixipohCv3sCJBzKF%2FE1j11MBevkhUe2JHfZtiXtv6L9Uehobz%2F5NQO28nHGJLVxmkURISFv8N4C8Mb1s7%2B%2B2RlizxT6vFm%2FwzyN%2FBYsUthcvI&X-Amz-Signature=032a7e07ebcd95c6f731c22df551a81e104cfd9779ca4501df26c4e913011840&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAZDI46%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHfWGp%2BKpLgQNMEtkRO4shsTLcVokKCKEgNGh40%2BOxbyAiAtff63eyO2cbHGlch1CiPzmnPuvWDowqM41Oh9Z4PrnCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh7pTW0WQ82EFsKZ%2FKtwDnCSivci7Cx6%2FntX9X7C3W7FC%2B0z%2B4N8vjGMf1l%2BGmRWdATWjXEFfeGRbzOfENQVGk0yhdxxi35Y1MTj%2B%2BKCwIz5v3DTLm2aFovnfKM%2FxMwl2gyKyDAvkoj9DsgoOfXmrgtt5MCEwamF%2FBB9A1lNFaTw8F0%2BJASHB9OdOZO8D6pnyNjN83%2FkuF6eyquRdDWI1N6uSa3AHGYjIjCqnfBfhALRDme%2BtmODqLCV%2FCuAgEZOO620SEOCrLIoXCRNb6GZoga0yGBdBWj1KkixGBaGxPD6UscD3b6naTPqZtSfiG%2BqrDDORcyglxtpSOKZDxOgd1ahUUVMpM7PkzUQB862cw%2FZFBJ4Tw4piHDo1dG%2BmcevMqgZ9WOwZSstj8az%2B5KNQEbgYSq6E8rTu0nDma7FOFRxhroN2iFgSkeanQMjh%2BBNPwSqoYl9P650BQ4FLrWUoX9yxQc1Rex4IIRlBXskSnhWNgDgWsemnRdccZe2Kbv8Wh3fowl7zJAEoaKValM2lTIn9Y%2FkYnFXOyWh5bQOYPz3MKLfzgtmXlwSuunFm2OiD6IRJ1DuNxEK7HfipdMK8cc0vCm7IU8tjeu0R8xrvnpxgDsMveupyuCWd6XlBF2T5XegCniW3CMWW9JQw05TSvQY6pgF8xfnwft1epdAA%2F2ZiEUo9EvyAgw9rjSGsogU28NbYrBHdblZuJfuXWFGm%2F%2FyUZsl0%2FOPTNXAArX3tUSII%2FRWMYIe7xa0jy7KsFAv5dojkXOdeI8cbjDPpHOsa3joD%2FS%2BDNAONrq7%2BmhvnfGPqG11VO7gPJe7ykXHRWTieKzvbL931q5z%2FJM0LEvNlV1PTqbba3avpgu2ZyAiWKGwIMQ%2BA8HaIJsYC&X-Amz-Signature=c592694af5385779fb8d62b7dd15810208ac2b071ba1f528419f9251b3419d86&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZQGYYL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRtLC2NhdvUCVZkT%2FJd958r%2B6cA2XURb1SoEb0AgSCmAiBOZG3Gg%2BeJ7EzefkqHg2DVjRo335%2FhKmLeWtlHUJD1CyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxjVGcIgeY9i4t3eTKtwDOIPtBcdCU3blSWDQOnjyl0GqEUUxreyoqxoVvAzaNfIkX4%2BPZ5XQh4H6TcJxRXSoJg1s2sERSK7ordVa52vcEgLbMp9mHF1ByHGg9UIEjWJqG8I6WS14RzWsSOwuX44Ez8rN6KK0Hb3WxNl2jBG0SS%2BBHFPSOe1y1%2FYv%2BNuUaodwi%2BBDwAuuLK5zx8JO%2B7poXejt7N9NbVACLxxL9mBb5RPfTPCF9GSjDsAXAi%2Bxkzt388tNdzArncd5T112EsqybQF3dskGDOc0iXzHG%2FGOuWw670%2FJB0AX2jOGCm1STNLme7halqRwhV5EaVrcHcn%2BG5bOy%2BolPPmTiYJ5Uj%2FRA4bO603eQ5CtQEDZyFVjMw8sL%2BpNhcPsmo3NRAy1shOWlAcEKw92D7lNvGvW8mGif1yCwRhBjWXe1TyE2VUuIQagt%2BRWFZ4U%2FN5m2dVopC3rQ1%2BDd1qCTWSzE6WVIQMfAwQUJxguIexGCU0vJQBwkIKDgkD6m68urC5JgG%2FmKwRNMXEO2hihtFWV3fbdYcPI3BiCEOzFdAeBsTo0gC6YL50TYrN2tc8qxHPiRfLrXmJENXsdTqVIcpjAmWIvb%2F41qx63i8Iy30lcGVi9t88TyKrq6KYWQdnMBTVHyoYwwPPnxAY6pgFVnpVeU42iziAk%2FeXgGvcxuvXM91HjRJYIjalmhjWrD6JXgAS21kh80QDJG5M8%2B6jJ%2ByXNPjfhdsb6YqJ2hib6tV1%2BscskM8r0bXjolMsQcgx6f%2BoSaeHVshbY%2FInX8PpC2wzXJMrYc2%2FOxWvLmmRRpyokiM8Sxh90QYOpW%2FH%2B2TDqLWWd5aXhgxf0a3ujyFHUFxthAn%2Fr7l2taYEKKCzy8uZfiOvY&X-Amz-Signature=b5d9109e61713cf171105a0748e983c5c57714197d5582af263844eff03d0b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZQGYYL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRtLC2NhdvUCVZkT%2FJd958r%2B6cA2XURb1SoEb0AgSCmAiBOZG3Gg%2BeJ7EzefkqHg2DVjRo335%2FhKmLeWtlHUJD1CyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxjVGcIgeY9i4t3eTKtwDOIPtBcdCU3blSWDQOnjyl0GqEUUxreyoqxoVvAzaNfIkX4%2BPZ5XQh4H6TcJxRXSoJg1s2sERSK7ordVa52vcEgLbMp9mHF1ByHGg9UIEjWJqG8I6WS14RzWsSOwuX44Ez8rN6KK0Hb3WxNl2jBG0SS%2BBHFPSOe1y1%2FYv%2BNuUaodwi%2BBDwAuuLK5zx8JO%2B7poXejt7N9NbVACLxxL9mBb5RPfTPCF9GSjDsAXAi%2Bxkzt388tNdzArncd5T112EsqybQF3dskGDOc0iXzHG%2FGOuWw670%2FJB0AX2jOGCm1STNLme7halqRwhV5EaVrcHcn%2BG5bOy%2BolPPmTiYJ5Uj%2FRA4bO603eQ5CtQEDZyFVjMw8sL%2BpNhcPsmo3NRAy1shOWlAcEKw92D7lNvGvW8mGif1yCwRhBjWXe1TyE2VUuIQagt%2BRWFZ4U%2FN5m2dVopC3rQ1%2BDd1qCTWSzE6WVIQMfAwQUJxguIexGCU0vJQBwkIKDgkD6m68urC5JgG%2FmKwRNMXEO2hihtFWV3fbdYcPI3BiCEOzFdAeBsTo0gC6YL50TYrN2tc8qxHPiRfLrXmJENXsdTqVIcpjAmWIvb%2F41qx63i8Iy30lcGVi9t88TyKrq6KYWQdnMBTVHyoYwwPPnxAY6pgFVnpVeU42iziAk%2FeXgGvcxuvXM91HjRJYIjalmhjWrD6JXgAS21kh80QDJG5M8%2B6jJ%2ByXNPjfhdsb6YqJ2hib6tV1%2BscskM8r0bXjolMsQcgx6f%2BoSaeHVshbY%2FInX8PpC2wzXJMrYc2%2FOxWvLmmRRpyokiM8Sxh90QYOpW%2FH%2B2TDqLWWd5aXhgxf0a3ujyFHUFxthAn%2Fr7l2taYEKKCzy8uZfiOvY&X-Amz-Signature=26ee4c7f28b4a14aafdaf68ffff8a245b3a3229a5a1f332b9b573f7303e3ac5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZQGYYL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRtLC2NhdvUCVZkT%2FJd958r%2B6cA2XURb1SoEb0AgSCmAiBOZG3Gg%2BeJ7EzefkqHg2DVjRo335%2FhKmLeWtlHUJD1CyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxjVGcIgeY9i4t3eTKtwDOIPtBcdCU3blSWDQOnjyl0GqEUUxreyoqxoVvAzaNfIkX4%2BPZ5XQh4H6TcJxRXSoJg1s2sERSK7ordVa52vcEgLbMp9mHF1ByHGg9UIEjWJqG8I6WS14RzWsSOwuX44Ez8rN6KK0Hb3WxNl2jBG0SS%2BBHFPSOe1y1%2FYv%2BNuUaodwi%2BBDwAuuLK5zx8JO%2B7poXejt7N9NbVACLxxL9mBb5RPfTPCF9GSjDsAXAi%2Bxkzt388tNdzArncd5T112EsqybQF3dskGDOc0iXzHG%2FGOuWw670%2FJB0AX2jOGCm1STNLme7halqRwhV5EaVrcHcn%2BG5bOy%2BolPPmTiYJ5Uj%2FRA4bO603eQ5CtQEDZyFVjMw8sL%2BpNhcPsmo3NRAy1shOWlAcEKw92D7lNvGvW8mGif1yCwRhBjWXe1TyE2VUuIQagt%2BRWFZ4U%2FN5m2dVopC3rQ1%2BDd1qCTWSzE6WVIQMfAwQUJxguIexGCU0vJQBwkIKDgkD6m68urC5JgG%2FmKwRNMXEO2hihtFWV3fbdYcPI3BiCEOzFdAeBsTo0gC6YL50TYrN2tc8qxHPiRfLrXmJENXsdTqVIcpjAmWIvb%2F41qx63i8Iy30lcGVi9t88TyKrq6KYWQdnMBTVHyoYwwPPnxAY6pgFVnpVeU42iziAk%2FeXgGvcxuvXM91HjRJYIjalmhjWrD6JXgAS21kh80QDJG5M8%2B6jJ%2ByXNPjfhdsb6YqJ2hib6tV1%2BscskM8r0bXjolMsQcgx6f%2BoSaeHVshbY%2FInX8PpC2wzXJMrYc2%2FOxWvLmmRRpyokiM8Sxh90QYOpW%2FH%2B2TDqLWWd5aXhgxf0a3ujyFHUFxthAn%2Fr7l2taYEKKCzy8uZfiOvY&X-Amz-Signature=10a566e3b2f2b6866cd5692f32ba53f7d474cd99ac3dfb9ba2d56fca199aecd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGQJ2Y4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8zBZ3Pr4PQUuZ6jbp8tOmT0dAR2n6QobA2FcQ6QHBwAiBSYK2%2B%2FXDDXnWKVGWqOaLT38iqvdOyouNqrDbou7eFKSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2FVUxycf1zDGIudaKtwD1qrNNkVhNkEHqI772RjJD0c2XMWxiL9hJTO%2BMGZd2To9hOe4zzRUyQ0buVtJ29oDTrnmTgiB3l94y%2F2L3awFIR111StOXnEMPGj48JmnAH2VYkseQlPAh3m4%2FeoFxYVVURiKseK8%2B1V0ta1NbRi6qzic0vVsGEWaYCp3yXqoKH1ALqt9c54p7WlGI3GaQHw3p82bZ4LaZzVTTzguG86OfHSJxPHchiSFzfUhKFy%2BLv%2FPN4HRh737oX7W0tTAKJA%2FZdjHmejQB17HabPHc%2B2CiGI5zw6PQuxnyfh34uurPoTHM2McZz40KMQXRRXdjLXqmK8q9m9DpIARJydUjg8ApGplt%2FXJtyHeFXUcZa2%2F0SaoilPsjyNOykBUlhuaAH%2FdWFR3VgRfk83vnA%2Bmf8bTia8JBkvx%2F3gWW8CqVKMU4xImEwFHr%2FejT5cqNr%2Fz%2BTBoXWNOZTrr0L7tqtfq5M3DVH5A7mDe0flpppRLV0kAfQqkLnuhN6ac48F49KI8KkUQT4l3o9RtbqfTrhVSD7yvuklPMQ4HJMcXhMLR%2FiLkYu1kJNj3vufVcJe8NUPld9KUOe%2FeYKGOERs2JNcMFw5U20lzHpwLbJzG3rQnNIy8JV2JPVjZ8%2BtU1b%2Bhxl0w1PPnxAY6pgE0JHEe42cgNK99ii4SUp2nPM%2BW8taRTFjqwExQBZVVEqWh70cP47eP906vrQy%2FIffkvsJQmDrkS6t0DF5tqaMQmww3iPjwM%2BAYUfb1NZSlzvgdtefw%2BoLNzfpgPwB%2F3UplIKjD68RYwFrhbo%2Ba1Xb9KHfkXVSNHfaulnrxYMmOlvUvuWvvtLqgWnXQZKTipe9CcVWrySnbQazyWvlpYIPBbgOUERcn&X-Amz-Signature=5da16988766f5227d75e963c16cf7beaa9de39104200f8ad72a36534a76bd732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATS4OGQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEbyxhh4yqzuiRtgMdpzm6atAil42YrC7klbR9uRVz2wIgZVIsPQJq%2BfDYiXOGAnFKvAJEj5vlxzvaV4lWSQRrk%2BAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyRbcg376NbQgACEircAycl7vZY%2Bb8DbMJStViOGQov9rK0RGDkJpj9R16cTWd0YpdlCJ1LO%2BbbKMmGLe5GC9f9BemgtDvhPs6SLMeKnTUMJS%2F6kndTU71q9TGReMlZQv6Z3uogi1cTtgQ5%2B6KZzswgCR%2FNXpZ5vqV%2B7cSMZuK27lOZ1LhhClbbYlfTVNryWXpY5%2FPsoKVNKaSdj%2BzZM8eossx38rPvgw97XvsU5yvtOzQKbYFDRlfCnoPUf%2BvZca9%2FTRHKHmrK4Pp25K7aNmqKpzi%2Bgj8InL3Wa9C3vsTo%2FRCF57k006qjN9jVXaPmbQT7vTsXkgS6eXEs4%2FX%2BwWwF6S7EiDgtnMr3LFdYGdEdbLj%2Byk9Rc03BDqIwS2g8jSWnUul6X8fCCdR%2F%2Bhk5tqfJ38jRm9%2FEBBDC71sstdzsAZUIVfjrsYb4Soa%2FJeHJsA3YUmFRho%2BoOPmxH6JtGeTzazAI68dVYBAHLc65dUS%2B%2BqC7mTxJhpXAe7sPdi3C2Tj%2B3PEK9emqKheGSqwUTJdjkw%2FuqRHiTchdh7TksP%2Fp02LbVdOq9X5AtYd7DCtMttoSkUX5ZAe0AdR1NC0wphHAc%2Bcup3ioVtyGS9moQXGJGvOo6fThVuq1yQP8ga6fKBvLIG0DmOqbq39QML3y58QGOqUB2m%2FysIhd4eyEMpltarp2osYuDaurH09wjWJbiZaLkt7G4Jti4toVhemxOYeGkXszO0uIGYh7tFhXAokXfxWMbRmF69BmD022UOzjaVvOqloJYk%2F7829yowy2sqrloo7dA6l0r9S9bmzKMl1HYZS29KE3kyVaWpfdICsPESRohqPy4jYP4VfTw5oCqclh%2BeuMNT9K%2BNoLCLGa9OfvSuIPQ2IS5bD1&X-Amz-Signature=2296bdee04f1fd18c8a8a05facbfb83db412567852b29d9bf9b6983dac2325bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZQGYYL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRtLC2NhdvUCVZkT%2FJd958r%2B6cA2XURb1SoEb0AgSCmAiBOZG3Gg%2BeJ7EzefkqHg2DVjRo335%2FhKmLeWtlHUJD1CyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxjVGcIgeY9i4t3eTKtwDOIPtBcdCU3blSWDQOnjyl0GqEUUxreyoqxoVvAzaNfIkX4%2BPZ5XQh4H6TcJxRXSoJg1s2sERSK7ordVa52vcEgLbMp9mHF1ByHGg9UIEjWJqG8I6WS14RzWsSOwuX44Ez8rN6KK0Hb3WxNl2jBG0SS%2BBHFPSOe1y1%2FYv%2BNuUaodwi%2BBDwAuuLK5zx8JO%2B7poXejt7N9NbVACLxxL9mBb5RPfTPCF9GSjDsAXAi%2Bxkzt388tNdzArncd5T112EsqybQF3dskGDOc0iXzHG%2FGOuWw670%2FJB0AX2jOGCm1STNLme7halqRwhV5EaVrcHcn%2BG5bOy%2BolPPmTiYJ5Uj%2FRA4bO603eQ5CtQEDZyFVjMw8sL%2BpNhcPsmo3NRAy1shOWlAcEKw92D7lNvGvW8mGif1yCwRhBjWXe1TyE2VUuIQagt%2BRWFZ4U%2FN5m2dVopC3rQ1%2BDd1qCTWSzE6WVIQMfAwQUJxguIexGCU0vJQBwkIKDgkD6m68urC5JgG%2FmKwRNMXEO2hihtFWV3fbdYcPI3BiCEOzFdAeBsTo0gC6YL50TYrN2tc8qxHPiRfLrXmJENXsdTqVIcpjAmWIvb%2F41qx63i8Iy30lcGVi9t88TyKrq6KYWQdnMBTVHyoYwwPPnxAY6pgFVnpVeU42iziAk%2FeXgGvcxuvXM91HjRJYIjalmhjWrD6JXgAS21kh80QDJG5M8%2B6jJ%2ByXNPjfhdsb6YqJ2hib6tV1%2BscskM8r0bXjolMsQcgx6f%2BoSaeHVshbY%2FInX8PpC2wzXJMrYc2%2FOxWvLmmRRpyokiM8Sxh90QYOpW%2FH%2B2TDqLWWd5aXhgxf0a3ujyFHUFxthAn%2Fr7l2taYEKKCzy8uZfiOvY&X-Amz-Signature=367c40879c33835cc46239249d0e3eea12c9f01373210e57c0308e09ff5b0ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

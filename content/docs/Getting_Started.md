---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LS2JA2%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK6NnIZ2tJxVRld89qU%2BHC4ePPw9CeA4QODeT8bRmKMAIhAMk9FUOBgGsCtuG0x%2FlN2i01JqgHCP2uwuWIjAahAs5SKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCIiutTQ3V4MPsLIgq3APVUBPMapmpTZyxsKj%2Fm8Khwo4TbS2zTvX9EHDvRP9EB%2F0AxFzfMjBsRLoBNBDr69aW6VBM8X6VGmnF1H%2BXQzf6RtpaTzV7%2Fs1qA%2FEaiiKKYQ0ndMBLPYRfntTuRbn7FOFVnHJuq06227RXv58NKRvS4CJseQqevN6YVFhqZ0etUwSHCAMtGuw3%2FptuHxO0MtFekMF2p%2BqsOHF5pPyQXJ0phYolVs5VjIbjAmcusRMxjHXUxhEXYc6gdg%2BH83A9IWP3oTNJd8F3tZLD4GTapGaobbKEeQk00WmpjVdXBtLMa5cqXuQaV4KLnczqw%2FLXaE1YHsFuvPAb3LKPpSPrXxJF%2BXiytM224Koe0MlGfQQlC12LmyCXqht%2B7t1Z9O6mSZljQTDu5fLyV22%2Fkt6MOfEuSSoX2qFXF8KpSnY1GwfVmAD1yXw1aeO4wSCn09ftTPzSZAN4JAvsWmp6Nz%2FiH88r0jN%2FvDTOSxdiBNfGdcqmtd72R1%2FsowoSGwsDMoCz9xamwOta5XKeIM4R6snu1ZwEr3h3NZpki0utNz%2BShaziG9VntRuphAGs%2BNmj2YuL79WPh14LnfaoW5ME3yeukUpelPFT2W8kJ0lx3u0qYI0uUpOy7HtM4MgIvjtl6DCD1vDSBjqkAQ%2FbZZZiN6BXWU7lMORcxQ6HrRiS3oW1KPG%2Fa2bSzGbe%2Ba9CYrufkY%2F0LduQvJCYyTcw%2BWYtv48XWHcdLAbX83JQK1yBwkT19mw4NvOxGcDz2UYTbebG%2FnpGrofeM2En0mb8IP1GO4lseL%2Fr4LfcNJ0tpQB%2B8k0bUDerHL4%2FeByfx5FoRrf3JeiS9EAphIX0tW5%2BBeRlkueQE9%2FDgJz7m5TMoCj7&X-Amz-Signature=dbc8a838352c0a09e8e827490b00abf8a072c002116058443ec779d136ef636e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LS2JA2%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK6NnIZ2tJxVRld89qU%2BHC4ePPw9CeA4QODeT8bRmKMAIhAMk9FUOBgGsCtuG0x%2FlN2i01JqgHCP2uwuWIjAahAs5SKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCIiutTQ3V4MPsLIgq3APVUBPMapmpTZyxsKj%2Fm8Khwo4TbS2zTvX9EHDvRP9EB%2F0AxFzfMjBsRLoBNBDr69aW6VBM8X6VGmnF1H%2BXQzf6RtpaTzV7%2Fs1qA%2FEaiiKKYQ0ndMBLPYRfntTuRbn7FOFVnHJuq06227RXv58NKRvS4CJseQqevN6YVFhqZ0etUwSHCAMtGuw3%2FptuHxO0MtFekMF2p%2BqsOHF5pPyQXJ0phYolVs5VjIbjAmcusRMxjHXUxhEXYc6gdg%2BH83A9IWP3oTNJd8F3tZLD4GTapGaobbKEeQk00WmpjVdXBtLMa5cqXuQaV4KLnczqw%2FLXaE1YHsFuvPAb3LKPpSPrXxJF%2BXiytM224Koe0MlGfQQlC12LmyCXqht%2B7t1Z9O6mSZljQTDu5fLyV22%2Fkt6MOfEuSSoX2qFXF8KpSnY1GwfVmAD1yXw1aeO4wSCn09ftTPzSZAN4JAvsWmp6Nz%2FiH88r0jN%2FvDTOSxdiBNfGdcqmtd72R1%2FsowoSGwsDMoCz9xamwOta5XKeIM4R6snu1ZwEr3h3NZpki0utNz%2BShaziG9VntRuphAGs%2BNmj2YuL79WPh14LnfaoW5ME3yeukUpelPFT2W8kJ0lx3u0qYI0uUpOy7HtM4MgIvjtl6DCD1vDSBjqkAQ%2FbZZZiN6BXWU7lMORcxQ6HrRiS3oW1KPG%2Fa2bSzGbe%2Ba9CYrufkY%2F0LduQvJCYyTcw%2BWYtv48XWHcdLAbX83JQK1yBwkT19mw4NvOxGcDz2UYTbebG%2FnpGrofeM2En0mb8IP1GO4lseL%2Fr4LfcNJ0tpQB%2B8k0bUDerHL4%2FeByfx5FoRrf3JeiS9EAphIX0tW5%2BBeRlkueQE9%2FDgJz7m5TMoCj7&X-Amz-Signature=1256b5c435e9592e2e94a9b82c754d63e43c2b7943f96dfd6a914d5d30adbc75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LS2JA2%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK6NnIZ2tJxVRld89qU%2BHC4ePPw9CeA4QODeT8bRmKMAIhAMk9FUOBgGsCtuG0x%2FlN2i01JqgHCP2uwuWIjAahAs5SKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCIiutTQ3V4MPsLIgq3APVUBPMapmpTZyxsKj%2Fm8Khwo4TbS2zTvX9EHDvRP9EB%2F0AxFzfMjBsRLoBNBDr69aW6VBM8X6VGmnF1H%2BXQzf6RtpaTzV7%2Fs1qA%2FEaiiKKYQ0ndMBLPYRfntTuRbn7FOFVnHJuq06227RXv58NKRvS4CJseQqevN6YVFhqZ0etUwSHCAMtGuw3%2FptuHxO0MtFekMF2p%2BqsOHF5pPyQXJ0phYolVs5VjIbjAmcusRMxjHXUxhEXYc6gdg%2BH83A9IWP3oTNJd8F3tZLD4GTapGaobbKEeQk00WmpjVdXBtLMa5cqXuQaV4KLnczqw%2FLXaE1YHsFuvPAb3LKPpSPrXxJF%2BXiytM224Koe0MlGfQQlC12LmyCXqht%2B7t1Z9O6mSZljQTDu5fLyV22%2Fkt6MOfEuSSoX2qFXF8KpSnY1GwfVmAD1yXw1aeO4wSCn09ftTPzSZAN4JAvsWmp6Nz%2FiH88r0jN%2FvDTOSxdiBNfGdcqmtd72R1%2FsowoSGwsDMoCz9xamwOta5XKeIM4R6snu1ZwEr3h3NZpki0utNz%2BShaziG9VntRuphAGs%2BNmj2YuL79WPh14LnfaoW5ME3yeukUpelPFT2W8kJ0lx3u0qYI0uUpOy7HtM4MgIvjtl6DCD1vDSBjqkAQ%2FbZZZiN6BXWU7lMORcxQ6HrRiS3oW1KPG%2Fa2bSzGbe%2Ba9CYrufkY%2F0LduQvJCYyTcw%2BWYtv48XWHcdLAbX83JQK1yBwkT19mw4NvOxGcDz2UYTbebG%2FnpGrofeM2En0mb8IP1GO4lseL%2Fr4LfcNJ0tpQB%2B8k0bUDerHL4%2FeByfx5FoRrf3JeiS9EAphIX0tW5%2BBeRlkueQE9%2FDgJz7m5TMoCj7&X-Amz-Signature=3787381cedaaf10f652849d8404b2136625189a4d201f547028ae8c0ac046a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHA5TX6%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9k77NXTcbORGmxBx2iLMTGyfd8T9Mu3y7oyY92ISvogIhANrxuw6CIjxCjDi4SF17hGsER7tc1BhcjOSZmHY2EI2aKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW9HzaxwwXe3fJaZ0q3AN5p0oZOSNX3BV8FTbn2XT8jHkdkhlHOvSuh2qqyQ77wYiLqvHwHb3q6RwzHTHSSIlR18GdHIgOGLbem8%2FDcPZtNBT0TJ%2FFH%2FCZbUulGiJhDs%2FoighptGomDVtaHPPiPpSz9LvT%2BSBC10%2B%2F12DwQ0vfE7Tzqmc44iHLbSuejR8DXR9js9TRNWgQjuxeNhuZxU2wmk344VQt%2FlHggdZvhGque9KizVwiTU1ykv6%2FaTtSZPr4gNPGii61Fb7Jou4sZZSzkTyFw5M8FKDxgTsCEhvKWGdZ1AFYcdqtfrddoqSx9%2Fi706myvYle0EUKqQcUvpPQgTN80YHyMVaEdCyfX0pqRqOjy9IzzXC76M64Afa1iu%2FSx1a5I5oYV9z5dDYwQhY6Q%2BNBluNiTf6iax5MQflvsIspgL9cb99jdmXirmsZatUQpFdDrac%2BszfIg90FI7CtNyOv4j7YoLtGwiOZVugFtbSJ3207GkSFMUNI8qvUqJpXYn%2BLkp0a5eJKnCbBNgskSypUwBZ4SuDFeCGdXN2anGedy%2FtRTKeAvkswDTxPsHGMGys9Ni1k4dC9lRpf%2BNe0Algpq7RjCnT8P4S9W91ndIGJYumWUc6N6LYrRtN%2BPV4YTohSLQtraoHnMzCf2fDSBjqkATE5Qc3oLEbw49cZnZmnVtnyseX0k41DSmojGawqSFaKQK7AZClsxJkJ8l%2FAT1cmJDwB9JeUcvLkUZTAuTBioK5xolsTEr24nuMbnUZ%2Bws%2F87RPksDeG71uCAWPPosUG5DJIprg6%2F3cg%2BQmBTZX7gNLwV8F8EcASZx7PBSuMmHiJBooQnuC4YJazoNfz4BCVMHGfW8GKt%2BkcLQSkLzgGM%2BmHNqdc&X-Amz-Signature=2b3b9f796a36b884d6fa893f478da3660064996e10c395c8f361136b96d9dd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVTFFX3%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqBaBz%2F0x%2BGvnKIGN6UIi83kyv1rsGoDSQkFqtknVzGAiEAugaQHR5DHxkXy9pm9PrOt1WJ2vNowJdA65EvBcbR6aYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNd62gidbFYH9T1BWyrcAxJg5koUNnr8F%2FS7Gi7C7y6PvOOiwl3Znopd%2BasX1Bbu7fkE1TJpmEieKvYq%2BJsC4r6hgTUneTp2BuJnj%2B4gvWwefQbvv%2FDi8lfO%2FCtPJ95PpjQXMbIjgmPySTVTbVkV4954vu7A%2FOz%2BScfMIWHV3fvSYkrXxQ%2BP11xXs4R84ZRJgerOur66vnnpxp1u2G79zsX82ZNPmYcKC%2FXMULWR7k6eOgoA89A%2B1gxXUTZv%2BDOjDLcn4rKdb2GEvBuGxilMzyEFP33SH%2FsY20gpt%2BWQFU0Eebu6YKcBaG6vnYGEWm%2FYlTCdz2bWz96cRXbVRtIkOTAORswwl6Lr1fGLaBFq7znSZNHsDeADuxBJQLMVyAOscYDjk%2BCm4%2B5TFsu4tuKsue22ASlBa3lO6Tjh6Z9bd9QsILCSAn%2FBx39%2BayP7Ri5dOVElG8dUT47c9SG5kKMKERRVzs9icO6k3Im291dxIJJ9y9MHfW8dPXHGk4sMgHAVoO4LSboYv4bMYO2zGI4khY3nRph9x3aHpvX5MBjpeyJHNhRBEWat8ey4xIp%2FW69jcOSM0ujDESuQi%2BU1%2BOh2WwYknI1THfHSLuh2F5KPgbdH1tr49y0aQeCi%2B%2FgAwe%2BqzxPZWSpXr0w%2FBjGKMNjX8NIGOqUB9Gdz4Zwp7u5suJGntce6d6a7DzKnMGElbnUqaXBJ6RfZ%2FMqSO0wZWqOTcbVanPWOSx69nZ6cotgl1PcPRdUjW7%2BkjeEcEyC989QbKFQGRtSnlgVBhUOz%2Bq3La3HmInnm3fLZkalHk1gNzgsi4Zd8zuQZl4obV4BL6u38lvAq4L%2FHEvSkjM5zv%2Be40V9p7WdNM8wTZ8UdWfRGvnVZc%2B97ubgkPR3u&X-Amz-Signature=06c4f2f800b7cf251e999dfa1dbcdc1c0fc5bbf1b5fbb4111a7e80df5f078f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LS2JA2%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK6NnIZ2tJxVRld89qU%2BHC4ePPw9CeA4QODeT8bRmKMAIhAMk9FUOBgGsCtuG0x%2FlN2i01JqgHCP2uwuWIjAahAs5SKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCIiutTQ3V4MPsLIgq3APVUBPMapmpTZyxsKj%2Fm8Khwo4TbS2zTvX9EHDvRP9EB%2F0AxFzfMjBsRLoBNBDr69aW6VBM8X6VGmnF1H%2BXQzf6RtpaTzV7%2Fs1qA%2FEaiiKKYQ0ndMBLPYRfntTuRbn7FOFVnHJuq06227RXv58NKRvS4CJseQqevN6YVFhqZ0etUwSHCAMtGuw3%2FptuHxO0MtFekMF2p%2BqsOHF5pPyQXJ0phYolVs5VjIbjAmcusRMxjHXUxhEXYc6gdg%2BH83A9IWP3oTNJd8F3tZLD4GTapGaobbKEeQk00WmpjVdXBtLMa5cqXuQaV4KLnczqw%2FLXaE1YHsFuvPAb3LKPpSPrXxJF%2BXiytM224Koe0MlGfQQlC12LmyCXqht%2B7t1Z9O6mSZljQTDu5fLyV22%2Fkt6MOfEuSSoX2qFXF8KpSnY1GwfVmAD1yXw1aeO4wSCn09ftTPzSZAN4JAvsWmp6Nz%2FiH88r0jN%2FvDTOSxdiBNfGdcqmtd72R1%2FsowoSGwsDMoCz9xamwOta5XKeIM4R6snu1ZwEr3h3NZpki0utNz%2BShaziG9VntRuphAGs%2BNmj2YuL79WPh14LnfaoW5ME3yeukUpelPFT2W8kJ0lx3u0qYI0uUpOy7HtM4MgIvjtl6DCD1vDSBjqkAQ%2FbZZZiN6BXWU7lMORcxQ6HrRiS3oW1KPG%2Fa2bSzGbe%2Ba9CYrufkY%2F0LduQvJCYyTcw%2BWYtv48XWHcdLAbX83JQK1yBwkT19mw4NvOxGcDz2UYTbebG%2FnpGrofeM2En0mb8IP1GO4lseL%2Fr4LfcNJ0tpQB%2B8k0bUDerHL4%2FeByfx5FoRrf3JeiS9EAphIX0tW5%2BBeRlkueQE9%2FDgJz7m5TMoCj7&X-Amz-Signature=418e7be085b72eda3f5f06aee8b2655ed3b51b33e74311bfcf649269766ecf61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

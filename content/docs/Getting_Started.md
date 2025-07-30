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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSDENTK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBl9CxyfkNsE3ef9Xk0EoEdGhRIAEf47AbIHFlbY3T3AiEAnj32zZPsZ9F4Tf%2FcoD8L56ksgWGpzM0l4fdQ%2FqbdA4gqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJfnVQ0AsYrEMQXpyrcA717jd0pZGD8bMJgr782N4Dhpj%2BfmeGm3fmVtb5Q0ejNgVg9GJO99pqvb2nlfJUEFntgcyWOVvjxJKPv6KuXVJj9rPIRSaSvo956imfr%2BWOcdYJZYiWwsTffb%2B1Off6SAQQKf4gIruQDbcMmUtrDt3HiFj9bO4ZOTrUgSgpCM2MtVwjAbcL4cXUG6QaGGeuBnaNKdspyVdpP7%2BHne1XzGV5GiVvfLVPDPQEi1RsROBNTZ0avh9MCSW831AQ9BF2O2VUCEtwdkh4LhUqNVAowga%2BPVa5YLrrIb%2BYFvdE5fFNzcTZVF%2Bni1oO9U865iEAp7qXOFEG9S6feXa5%2BZ5A50KKtNE3uGGVnvhmXH18dzU%2F9XR97aGoQbivf7PR7T3wm8p6ucwS0xAhyNdBKiNm%2BBVkENR57Drys8EbmRZ51pIys1GryqqGxxrZpUkIR8c6OM0nP0NqxUfPVvUq%2FLOyoHnsFko17dRK7yLw9es4i952SzCyNzuHBxOmnh2SRrLVaSdVEdA%2BCW%2Fiu7H7Vm0lUXIcwlxu52Pdl%2B4HZk6lr%2ByuX8P4uLqoCzgf0B4MtsdOuepQiHAbLoA7TdL1ipDJdjW5oNAqL%2F4BPNNc8O6GfuZQlbJ3PMixhnNazEI3cMJmiqMQGOqUBTGf%2F8BPpYZvHt%2B1ZSGAJVE0rynclQb0Y0xa7CCRMIMHuyc2Ju1jYwStYK1k1tHKfXlTUdQAcIgIlU73Z6LBAB7u1k8YwJ1pUeybgW0tWALp7U%2FkaoSqkcMRdPtF8CzEgUGD5mFwr7ua2fokhyPt9YlnqwWx%2BDaskq5m9b3q4SVi4AJ4zYHzYxEpHmwzxKIR9bs2jnbWRYpjAbQwwR%2FxSwhiviYux&X-Amz-Signature=9fd258320ed51d79568fd85e9716b8e1076fe037a53dab2ebc9be1ac18500ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSDENTK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBl9CxyfkNsE3ef9Xk0EoEdGhRIAEf47AbIHFlbY3T3AiEAnj32zZPsZ9F4Tf%2FcoD8L56ksgWGpzM0l4fdQ%2FqbdA4gqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJfnVQ0AsYrEMQXpyrcA717jd0pZGD8bMJgr782N4Dhpj%2BfmeGm3fmVtb5Q0ejNgVg9GJO99pqvb2nlfJUEFntgcyWOVvjxJKPv6KuXVJj9rPIRSaSvo956imfr%2BWOcdYJZYiWwsTffb%2B1Off6SAQQKf4gIruQDbcMmUtrDt3HiFj9bO4ZOTrUgSgpCM2MtVwjAbcL4cXUG6QaGGeuBnaNKdspyVdpP7%2BHne1XzGV5GiVvfLVPDPQEi1RsROBNTZ0avh9MCSW831AQ9BF2O2VUCEtwdkh4LhUqNVAowga%2BPVa5YLrrIb%2BYFvdE5fFNzcTZVF%2Bni1oO9U865iEAp7qXOFEG9S6feXa5%2BZ5A50KKtNE3uGGVnvhmXH18dzU%2F9XR97aGoQbivf7PR7T3wm8p6ucwS0xAhyNdBKiNm%2BBVkENR57Drys8EbmRZ51pIys1GryqqGxxrZpUkIR8c6OM0nP0NqxUfPVvUq%2FLOyoHnsFko17dRK7yLw9es4i952SzCyNzuHBxOmnh2SRrLVaSdVEdA%2BCW%2Fiu7H7Vm0lUXIcwlxu52Pdl%2B4HZk6lr%2ByuX8P4uLqoCzgf0B4MtsdOuepQiHAbLoA7TdL1ipDJdjW5oNAqL%2F4BPNNc8O6GfuZQlbJ3PMixhnNazEI3cMJmiqMQGOqUBTGf%2F8BPpYZvHt%2B1ZSGAJVE0rynclQb0Y0xa7CCRMIMHuyc2Ju1jYwStYK1k1tHKfXlTUdQAcIgIlU73Z6LBAB7u1k8YwJ1pUeybgW0tWALp7U%2FkaoSqkcMRdPtF8CzEgUGD5mFwr7ua2fokhyPt9YlnqwWx%2BDaskq5m9b3q4SVi4AJ4zYHzYxEpHmwzxKIR9bs2jnbWRYpjAbQwwR%2FxSwhiviYux&X-Amz-Signature=5655628733934f53eb2967b20ca66920eef3d46939859fda1596f2001dd2cdda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSDENTK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBl9CxyfkNsE3ef9Xk0EoEdGhRIAEf47AbIHFlbY3T3AiEAnj32zZPsZ9F4Tf%2FcoD8L56ksgWGpzM0l4fdQ%2FqbdA4gqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJfnVQ0AsYrEMQXpyrcA717jd0pZGD8bMJgr782N4Dhpj%2BfmeGm3fmVtb5Q0ejNgVg9GJO99pqvb2nlfJUEFntgcyWOVvjxJKPv6KuXVJj9rPIRSaSvo956imfr%2BWOcdYJZYiWwsTffb%2B1Off6SAQQKf4gIruQDbcMmUtrDt3HiFj9bO4ZOTrUgSgpCM2MtVwjAbcL4cXUG6QaGGeuBnaNKdspyVdpP7%2BHne1XzGV5GiVvfLVPDPQEi1RsROBNTZ0avh9MCSW831AQ9BF2O2VUCEtwdkh4LhUqNVAowga%2BPVa5YLrrIb%2BYFvdE5fFNzcTZVF%2Bni1oO9U865iEAp7qXOFEG9S6feXa5%2BZ5A50KKtNE3uGGVnvhmXH18dzU%2F9XR97aGoQbivf7PR7T3wm8p6ucwS0xAhyNdBKiNm%2BBVkENR57Drys8EbmRZ51pIys1GryqqGxxrZpUkIR8c6OM0nP0NqxUfPVvUq%2FLOyoHnsFko17dRK7yLw9es4i952SzCyNzuHBxOmnh2SRrLVaSdVEdA%2BCW%2Fiu7H7Vm0lUXIcwlxu52Pdl%2B4HZk6lr%2ByuX8P4uLqoCzgf0B4MtsdOuepQiHAbLoA7TdL1ipDJdjW5oNAqL%2F4BPNNc8O6GfuZQlbJ3PMixhnNazEI3cMJmiqMQGOqUBTGf%2F8BPpYZvHt%2B1ZSGAJVE0rynclQb0Y0xa7CCRMIMHuyc2Ju1jYwStYK1k1tHKfXlTUdQAcIgIlU73Z6LBAB7u1k8YwJ1pUeybgW0tWALp7U%2FkaoSqkcMRdPtF8CzEgUGD5mFwr7ua2fokhyPt9YlnqwWx%2BDaskq5m9b3q4SVi4AJ4zYHzYxEpHmwzxKIR9bs2jnbWRYpjAbQwwR%2FxSwhiviYux&X-Amz-Signature=b9ea2c3582d9a94c5d21453b057866347d21195b44c3a0822a18a8ad9b93dbc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2IDXFL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTh5p0zZlkvV5TbFHgwcE07rDL7GBPvWcGBiAgu%2FuM7AiEA%2BMZWTmdmt5y7v%2BwjpC%2FLT8JGg94MeZ8HsMaoDjsFrZUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuBlgt1Lo8C2dR17ircA%2F%2BJXZJpkSBOLWMWwA0eOKwO0SqlfKXT59mbnGO6hP1viHlZGif8JyaNMexYotYY%2BK6A2RpF968CWCvFQ9hNxxdAr78eAMtn9NHFwdxRgb1ZwkKUjiBcdzmxWs5PAw9rwcalam6dHNlHmPPWv2gcSOqrsenkKO3n4UVRpg5GoJtpK4RsQEuXCaM715i3EqQW4wbcH0x1tFiSRHDV6Ck3LEspbDRfRiQuAcwiT9zZmumr%2FV05s2aal6ecIoVyfufunrA%2BRYqyG4XgmTHne0qKvb8LM%2FwPzOnaRcUNr0inIkMp9z33GfUg7G48jN0s2%2BC0JA14EBPAUYYLfPBGPjtt9MjvzrcIBMDzu3Zbe8qa7pfaI%2FdHgDEbE6SSgnRWLSD5yJqYq83P9M0YOkYd5o7h8k1iH8%2F7P0aVwsqK0FE80Jc2IWaZ0u8bwDtzT36cNMsr7AF6IsrBvDOtvp3jcXgCncbulnuu9KKJvc7sXQ6ZqbBibbxmMP6G4Pe6P993WH2VJexrl0uGDfK4IE%2BqOpqqRiecmriU6wyXYGtUVOFDl9jdRycRQICmtSZbprs9h9fncufCtL2ExGX06S2KOan3gYGCTrfC04VIvwZnyeSriJHfZD3D3tTm7f0aw3hwMIejqMQGOqUBR%2F8yiLiu0K6C1zecWvZ4pu1QCIn%2BTuNKj%2BtXoZQQFf9OtCUHHiP0pjJ0lk5NbZu%2FplY3LMGg%2B0c%2BUx6xx4U5Ta9rfR2HMrde%2B0lcZ1eq%2FDi5JYGFfmQDzUCQdpPNZ5CJkBApZcb1x8eAnKYjjdkvgwuFenCEyB1BKg1uKwWkeueIyg%2BNmaSnwYkpF7i%2BGnJdqXQHaYDx%2BZ2d5fuDh0WA%2BE5Cmj66&X-Amz-Signature=c9e6f31d0708e342995f52300372f0cfa5465435ff6f54ff7fef241af3d335ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W52TJ3OG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT1J1aaBb01za5dF7ePfQzZ2fJ6vWn%2FXF3ugf1qAhEfgIhAJUgzKVyE0IVSQt9sdwRmITlc1%2BKM0E9Wo8TzF0bY3IRKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR%2FR3ddxAsjjp3Cwkq3AOxFrLr%2FECmXQtJuXDgU9KyaxMW9VE0DCGGAUugZmMPEaPhONgji7BTWiuP3Zl2ekmHj7fvsAxv%2FubUYRhGRy4RFWUHE8GV%2BlTYf5XJT3YGftKq9XEz59m1s9tZ2Cu4lbyl6VPxrAN2WNtL1DzGZCV%2F3mkLVRn8QSo89oLo468emInbareUXt%2Fb5skI3jes1KQgJQTHZbADtDRyHykpdiFLXHIL%2FuoAeTSCSKLaa1%2FBWXaTyke4VflWlHEQT7DmmHYju8ZsMrOhc9DviWjhC4qiEGHETJta6NSA4DqaEfEenF7bb8r7UVsd0cxobJxXCk3AlAS%2B4Qjmx00cPAqUt%2BW2BajmNKgdPZT2huO0MW5c2jFE5OMb5DgJhJMI4tvb5t9rn%2BWrFMxDzESFCoV8%2FaZGlHUP%2FALRwMod1xPvHdmPW8uqLwW%2FfR1q6DT7M2WZGgLZxXN5ZncN40vpCqirO8%2BsS5zHG9IEqIC1Z8vmjADcJyYzHVn5CmqK93bXuNDRyaLF8CrZANUMIvLb7esUpq74RuExpXh2Cm456WDk3rUvcho5TDBUJQetpMY3aF%2Bm4Vryz%2B%2FiVk7%2FpLJvQC4UfyvjvhbKssVTQ%2Bs0dPRgPcpwpILr63Jqa86UTV%2B1gDCHoqjEBjqkAbnMm158mQVUUmZQdLzpM4tg7buggBgBinHrtJK%2B5T5xWbhyxtcbYBtW8TKoJXYWnAjKPLogXIF8p%2FbWwYNdWI%2Bcpcy8ysdOZZf9exx6QNOc2XTC5UT0tK77pDlbBS%2FzLV84%2BJ%2B5vB0d%2F9pXKxt0Y3w0elsEWU7nWrLTyA0UuNbpk0NIwLl2HUXHA4Pbv0PFaSgLyKM5cOhEdfGl%2Fdd339%2BggFLp&X-Amz-Signature=ce62db9ec22780d36131fde4dc825f4ec0dc6f63d954305546aec6de1d0d4890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSDENTK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBl9CxyfkNsE3ef9Xk0EoEdGhRIAEf47AbIHFlbY3T3AiEAnj32zZPsZ9F4Tf%2FcoD8L56ksgWGpzM0l4fdQ%2FqbdA4gqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJfnVQ0AsYrEMQXpyrcA717jd0pZGD8bMJgr782N4Dhpj%2BfmeGm3fmVtb5Q0ejNgVg9GJO99pqvb2nlfJUEFntgcyWOVvjxJKPv6KuXVJj9rPIRSaSvo956imfr%2BWOcdYJZYiWwsTffb%2B1Off6SAQQKf4gIruQDbcMmUtrDt3HiFj9bO4ZOTrUgSgpCM2MtVwjAbcL4cXUG6QaGGeuBnaNKdspyVdpP7%2BHne1XzGV5GiVvfLVPDPQEi1RsROBNTZ0avh9MCSW831AQ9BF2O2VUCEtwdkh4LhUqNVAowga%2BPVa5YLrrIb%2BYFvdE5fFNzcTZVF%2Bni1oO9U865iEAp7qXOFEG9S6feXa5%2BZ5A50KKtNE3uGGVnvhmXH18dzU%2F9XR97aGoQbivf7PR7T3wm8p6ucwS0xAhyNdBKiNm%2BBVkENR57Drys8EbmRZ51pIys1GryqqGxxrZpUkIR8c6OM0nP0NqxUfPVvUq%2FLOyoHnsFko17dRK7yLw9es4i952SzCyNzuHBxOmnh2SRrLVaSdVEdA%2BCW%2Fiu7H7Vm0lUXIcwlxu52Pdl%2B4HZk6lr%2ByuX8P4uLqoCzgf0B4MtsdOuepQiHAbLoA7TdL1ipDJdjW5oNAqL%2F4BPNNc8O6GfuZQlbJ3PMixhnNazEI3cMJmiqMQGOqUBTGf%2F8BPpYZvHt%2B1ZSGAJVE0rynclQb0Y0xa7CCRMIMHuyc2Ju1jYwStYK1k1tHKfXlTUdQAcIgIlU73Z6LBAB7u1k8YwJ1pUeybgW0tWALp7U%2FkaoSqkcMRdPtF8CzEgUGD5mFwr7ua2fokhyPt9YlnqwWx%2BDaskq5m9b3q4SVi4AJ4zYHzYxEpHmwzxKIR9bs2jnbWRYpjAbQwwR%2FxSwhiviYux&X-Amz-Signature=1c5f7ad43a73fab5a16f1e671628cd8a2020980a3ce6276bf71b4e72ba5609b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

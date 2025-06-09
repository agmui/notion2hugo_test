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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HW6RP4U%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVzcWT%2FMVQfW9NEUsvwgEZ9YEG%2FFdTbKT8slNYqlJuQAiBezHZHYcyhI0JWlxxfLT3wRmHpD8FR9i0GzUO9rl%2FuPSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQch0wyfRMBg7vY29KtwDc3tOSLvSeq4y6xFQlPLi1ThwLgTSZxFoXwCSA2%2FQmb4joXxzD7jKGZ2kU8sGMN0vUBTDXlt0IavctaeUl6OrIsc4NlJ%2F2%2FVWCIjj29edBI1JF2w3P4SQnJ%2ByC8cjnKjKNLN2h0wvB1ep3krEv%2BF9CkyIuYIe2ZLsH2Oi%2FW4dFedag7bvxlqaq%2FVmlT%2Frtt5cjC8r2hOXBr01dXq4pziebTnUNh1VSdnD8guX0l0TerPisEak9SGTs551JWLjAHjPCxJ0HJN6MIYgyRs%2B92YR68u0Uj1iXtEYUuAb4ecMBqfp1yodJRN%2BGOCbwv1Uaq2cczYSiHACCHICsKNUPIV1jKGRVhHzz7ZL9MLwwYmucELgC9B8%2BvAktjay9UIDhujWjCo3w3HKLNxysGKmNKB9UoU6HkMt0jSb4E9i5xpka%2F7Y37feUBIx2I7dAzjMA5qriRQQTG2qb1EDpB9JCtUS86vLHlK8zr%2FU7PzgscjBUcaRtfDQ8gEp9puoWMe5SFoMhwwQ8hGZ6h9S%2FiXDtdKv3CdsYn0SlHA4rzl8uFZOAwyqbv8mmk%2BH9OEhskGLQ0UO6VtUqUJHhyziYFwXpHDIh1ZTgy1XVA%2FbSm%2FQL36jd%2Fu4xFd%2BOLQXqbuVCuww5N6awgY6pgFWisZg7tLIe%2BSJV06UQpD8Hni910%2BeFDh6p%2Ft9qTaFJZXGBlsBSLu2X8kBlP7ww%2BemK1KzgMnFor5R%2FYM5T7YHbZYq7dr3iRdi0EppKxSeYu2AHkKkCfNzSLYVuhgpyDVqODZQ%2FtSvGi12j8tOW86hZMfnipOsyML%2BWol6%2Buw2JPwmIDlt3hLy14q1uA265RFIPRfDRq9A%2BTWNUoP5bx164cu%2FzZpo&X-Amz-Signature=3582f575472e716a8cb4ca5dc743f568ee3751b9491b7727c78d5b166caaf48f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HW6RP4U%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVzcWT%2FMVQfW9NEUsvwgEZ9YEG%2FFdTbKT8slNYqlJuQAiBezHZHYcyhI0JWlxxfLT3wRmHpD8FR9i0GzUO9rl%2FuPSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQch0wyfRMBg7vY29KtwDc3tOSLvSeq4y6xFQlPLi1ThwLgTSZxFoXwCSA2%2FQmb4joXxzD7jKGZ2kU8sGMN0vUBTDXlt0IavctaeUl6OrIsc4NlJ%2F2%2FVWCIjj29edBI1JF2w3P4SQnJ%2ByC8cjnKjKNLN2h0wvB1ep3krEv%2BF9CkyIuYIe2ZLsH2Oi%2FW4dFedag7bvxlqaq%2FVmlT%2Frtt5cjC8r2hOXBr01dXq4pziebTnUNh1VSdnD8guX0l0TerPisEak9SGTs551JWLjAHjPCxJ0HJN6MIYgyRs%2B92YR68u0Uj1iXtEYUuAb4ecMBqfp1yodJRN%2BGOCbwv1Uaq2cczYSiHACCHICsKNUPIV1jKGRVhHzz7ZL9MLwwYmucELgC9B8%2BvAktjay9UIDhujWjCo3w3HKLNxysGKmNKB9UoU6HkMt0jSb4E9i5xpka%2F7Y37feUBIx2I7dAzjMA5qriRQQTG2qb1EDpB9JCtUS86vLHlK8zr%2FU7PzgscjBUcaRtfDQ8gEp9puoWMe5SFoMhwwQ8hGZ6h9S%2FiXDtdKv3CdsYn0SlHA4rzl8uFZOAwyqbv8mmk%2BH9OEhskGLQ0UO6VtUqUJHhyziYFwXpHDIh1ZTgy1XVA%2FbSm%2FQL36jd%2Fu4xFd%2BOLQXqbuVCuww5N6awgY6pgFWisZg7tLIe%2BSJV06UQpD8Hni910%2BeFDh6p%2Ft9qTaFJZXGBlsBSLu2X8kBlP7ww%2BemK1KzgMnFor5R%2FYM5T7YHbZYq7dr3iRdi0EppKxSeYu2AHkKkCfNzSLYVuhgpyDVqODZQ%2FtSvGi12j8tOW86hZMfnipOsyML%2BWol6%2Buw2JPwmIDlt3hLy14q1uA265RFIPRfDRq9A%2BTWNUoP5bx164cu%2FzZpo&X-Amz-Signature=4336ba4e4e5fee93497d2ffa04c9cfb7b6190f50a022fa7a35386cd1efd97b04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HW6RP4U%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVzcWT%2FMVQfW9NEUsvwgEZ9YEG%2FFdTbKT8slNYqlJuQAiBezHZHYcyhI0JWlxxfLT3wRmHpD8FR9i0GzUO9rl%2FuPSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQch0wyfRMBg7vY29KtwDc3tOSLvSeq4y6xFQlPLi1ThwLgTSZxFoXwCSA2%2FQmb4joXxzD7jKGZ2kU8sGMN0vUBTDXlt0IavctaeUl6OrIsc4NlJ%2F2%2FVWCIjj29edBI1JF2w3P4SQnJ%2ByC8cjnKjKNLN2h0wvB1ep3krEv%2BF9CkyIuYIe2ZLsH2Oi%2FW4dFedag7bvxlqaq%2FVmlT%2Frtt5cjC8r2hOXBr01dXq4pziebTnUNh1VSdnD8guX0l0TerPisEak9SGTs551JWLjAHjPCxJ0HJN6MIYgyRs%2B92YR68u0Uj1iXtEYUuAb4ecMBqfp1yodJRN%2BGOCbwv1Uaq2cczYSiHACCHICsKNUPIV1jKGRVhHzz7ZL9MLwwYmucELgC9B8%2BvAktjay9UIDhujWjCo3w3HKLNxysGKmNKB9UoU6HkMt0jSb4E9i5xpka%2F7Y37feUBIx2I7dAzjMA5qriRQQTG2qb1EDpB9JCtUS86vLHlK8zr%2FU7PzgscjBUcaRtfDQ8gEp9puoWMe5SFoMhwwQ8hGZ6h9S%2FiXDtdKv3CdsYn0SlHA4rzl8uFZOAwyqbv8mmk%2BH9OEhskGLQ0UO6VtUqUJHhyziYFwXpHDIh1ZTgy1XVA%2FbSm%2FQL36jd%2Fu4xFd%2BOLQXqbuVCuww5N6awgY6pgFWisZg7tLIe%2BSJV06UQpD8Hni910%2BeFDh6p%2Ft9qTaFJZXGBlsBSLu2X8kBlP7ww%2BemK1KzgMnFor5R%2FYM5T7YHbZYq7dr3iRdi0EppKxSeYu2AHkKkCfNzSLYVuhgpyDVqODZQ%2FtSvGi12j8tOW86hZMfnipOsyML%2BWol6%2Buw2JPwmIDlt3hLy14q1uA265RFIPRfDRq9A%2BTWNUoP5bx164cu%2FzZpo&X-Amz-Signature=dc9da0003675e68e61df2144eddfdcc07e6f5013d91f06b0877d1e56836725db&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUWG6LK%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD2QUwMQJ0Y61bRkyTEEjGujPoYTzNlhqh9mWHD40b%2BAIhAI1eALfNKPKEzZ87yIN%2FaIrmvOraFHdgUod0K0a%2B0z5EKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBH2eqvSrliGMADW8q3AOA98WrsiZMe0WR5bGWAXbjdTs8eE%2Bh9N3gRTiKjlFoY843M7%2Fe7TRCT4ybkyvp2%2BDJJrNMiuVaW4Seb3Va1n%2FKCMCcYwTP3flNdYyQTntdrVQDkd1%2BHiO7RHJrZuCMzMCD68g%2Fy7E9vT8ltNZSUiFmba8zcbTiLwb%2B5BAbaCPRBS0l%2FIs0u5rhGQjN0LP8bb8M5%2Brg7TpUcuUcx4ojlIlohkEYkPMhLPF5xvOXRSmNUqTsZD3GAQF7Z2rS17zwxemUebkoGUoX%2F2gpcS3qJE6sMJP6AjtKtFq0JtkEqcD%2FIclKSubHZ5FyNzQkojrf5MZ20vYofpmdz2%2FNGewbc5B2HoVaC335087RtSqkwNm6m3VD79H4GuEkAKzWkrnwMc%2Fc3CTkkDQynF5njoo%2F5hfeHMmfzPh67jobK2LS2fXPnJDNuPuwnk8pUuCc1185I8tutoreth0cw%2BQheSfsI868CKCeHa0NjtQjw2NlIkm6sRqec0nRm0dpm4JviZbCDqwHImE75mXsUz2BF1GijOkAY6ow%2BwL9joNkfYkukVOu4vsLID5xMohmDxefcMKFWCyoY0Giwpd6tz5pC8KBjMRugPb2o2ZSeFK3Pv6Mc75ftgcvDWideQuAbHMy4zCu3prCBjqkAYxtjbcvvlGh5WFfry6KZ5O1wbwZsSO8jeyAlZA3Y2sUUjG30iFK09WoLlFOW%2FshPAWpnMd6S%2Bs0ruwetPxq1sM8aHy5F766aIMAWNWknQsY%2BcD2b3DGUlJ%2FiIxRYoWi2SgOQayUtZ6mXPs71l9jy4arLqqqCuEdnWDvgNjdJI%2Bzmov%2BHesMF2PUPTx5bV7o8Ij%2FxnOQQQNMKKBHy60p%2B5IUUgSD&X-Amz-Signature=4ede911df627cb3af10afb8fc4e5e4021fd685de1ab73ee69df35ea97e921906&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VUDF5T%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnk8My%2FIWhtcZsRzU8KNLYo1W2ZXoOFlPDKenJbjp9WgIhAMNbNm0Gv%2Fg%2FlDKPOrB1wHFlBgVDxreqFyIYSKtlWwx9KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztUM36b6D55Awg6hkq3ANKsiioTktqwXaDr8HyJQ59y8MHJ0n0dxMIdkYVvxm%2FgadAsyB1XZ2nlNF2CzmaR34i5HBTk3%2FrPbL%2B6LAQb3n8RMcRVsunYDzBEuOxes6GSCkxNpc13n8LT6n2TPedLAbLb273GCKshVRMq2CGLJRB4XSEvouGixoMbviss5q2vR0BaqsIhLRo0PPpPVgpTrvHQdxBsw1KVbWZoUWAQFwfmBb1gBsw5HlQ64Xr6pWLU7Ibky%2FOs%2FbrchFleNYQ45u8DpdOakwjFmRGeKc11IB33wMdjA2p%2FGtNLvf7p3rNRe7WFeq98yVQpuQ%2FWU8VoVoM4AI9nt3qWlZrL9mW4vI0E22ABuJUs3hbNyfwL4sFhPstl%2FMEMml%2Fezz6q7bxnLCjQJ48El6WnRknZaQlSooCTRu0aoPSfqZHS%2FzlCSynxc%2Fs5T%2BNPCgnpy1NWB86i%2FCLpL%2FBmxXql%2Bcccp51pR%2FzoAvUgGS1IDyWKilXOO5fK2PAmM0GOsYbDDk1BJvppa%2BQiogltFCIwte9nKKDucTALHpfZH9SHgOkZeoA2na1s7%2FWEL44J1sYOX6EfrJx1Jdjr5aF5XBiivEYMT3L1XKcuRHWfaDi3rif9FiwEQo4jKb4MBX4HwY5s%2BW0nTCf3prCBjqkAYX3I7ASIbarvOQm7vf1OyNn5B5GQ0PcuIFOC6ZvlvVC5rYpSMB%2BEJoX3eWUJCgkfUV0M%2BjAGmkUkfKHvnh%2F26X%2BL1wjLTkVLDV4VYSab8RlbYWDHIMgLxCahPzf%2FQFRI2PxuzYg%2FATeY%2B34MN%2FqEynFqd2DitlokKNGjdWR2YPQ4CSyVe8xIt%2BZTehO1BVpVQ9GVE6Cw9Q2E1PU7F2VSh%2BThgPD&X-Amz-Signature=fd900a32027c07b5045e372763ec3f2eb7e33015e90b40bb9093d00318c1b0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HW6RP4U%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVzcWT%2FMVQfW9NEUsvwgEZ9YEG%2FFdTbKT8slNYqlJuQAiBezHZHYcyhI0JWlxxfLT3wRmHpD8FR9i0GzUO9rl%2FuPSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQch0wyfRMBg7vY29KtwDc3tOSLvSeq4y6xFQlPLi1ThwLgTSZxFoXwCSA2%2FQmb4joXxzD7jKGZ2kU8sGMN0vUBTDXlt0IavctaeUl6OrIsc4NlJ%2F2%2FVWCIjj29edBI1JF2w3P4SQnJ%2ByC8cjnKjKNLN2h0wvB1ep3krEv%2BF9CkyIuYIe2ZLsH2Oi%2FW4dFedag7bvxlqaq%2FVmlT%2Frtt5cjC8r2hOXBr01dXq4pziebTnUNh1VSdnD8guX0l0TerPisEak9SGTs551JWLjAHjPCxJ0HJN6MIYgyRs%2B92YR68u0Uj1iXtEYUuAb4ecMBqfp1yodJRN%2BGOCbwv1Uaq2cczYSiHACCHICsKNUPIV1jKGRVhHzz7ZL9MLwwYmucELgC9B8%2BvAktjay9UIDhujWjCo3w3HKLNxysGKmNKB9UoU6HkMt0jSb4E9i5xpka%2F7Y37feUBIx2I7dAzjMA5qriRQQTG2qb1EDpB9JCtUS86vLHlK8zr%2FU7PzgscjBUcaRtfDQ8gEp9puoWMe5SFoMhwwQ8hGZ6h9S%2FiXDtdKv3CdsYn0SlHA4rzl8uFZOAwyqbv8mmk%2BH9OEhskGLQ0UO6VtUqUJHhyziYFwXpHDIh1ZTgy1XVA%2FbSm%2FQL36jd%2Fu4xFd%2BOLQXqbuVCuww5N6awgY6pgFWisZg7tLIe%2BSJV06UQpD8Hni910%2BeFDh6p%2Ft9qTaFJZXGBlsBSLu2X8kBlP7ww%2BemK1KzgMnFor5R%2FYM5T7YHbZYq7dr3iRdi0EppKxSeYu2AHkKkCfNzSLYVuhgpyDVqODZQ%2FtSvGi12j8tOW86hZMfnipOsyML%2BWol6%2Buw2JPwmIDlt3hLy14q1uA265RFIPRfDRq9A%2BTWNUoP5bx164cu%2FzZpo&X-Amz-Signature=b8d7adc4555306ed502f84d07882ed87fec6985a02c495eb59c8639cfad3cd0c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

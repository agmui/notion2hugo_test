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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5K6YFV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfiby%2BkmRnQPUprfgoO5ckkl6mVW7ckZJX2JmEhVL5hAiBccUEKWsYqRcLkSK6jSxA1ZgI8uR7Qo4NaWM1Fyx0HxSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPih0W3yqlVHVVvJXKtwDFdMjAnOQajXeciOPRQAIgsB2TiaWswgFXnefJmfX%2FxgIJx4fwffb%2BlIGAbW%2BkdQF8VsJktEopZ4rf4rMnSI51sm3JmzD4I%2BmUfo2Mkbkvii4GKZbRlyU2SXNDsqqxkGFBYAjYyElp%2Ba9ph16B4VKsOVxmussZiAZ6oWvclUa0e9d24KJpO%2FnzwZTjW8z6akySkYX3QTE4xRn6x8DXQjq42VhY%2Br7%2B0jjCQ7rRePrlW%2BUAw8%2F7vUOzNAxJl2iBSDagSsdAmB0zBEDfUDlo0Nf77GMedi6L%2Fn1DKhjsb3R8yeYzlZHXH7Ky6rrpOrblGP3ISP4SSRnmbOIcLhSBVGAH5yUe5gRWOhmLYIXE9RBiE0yj88pbtglPABvpYwk1flRUHH5qG%2BBD67BWhQ6GNBxPIX%2FhvTLmfzRXDniUMU%2FKdCfPzIHu0y%2FzSh7tx3VupA0UmHaKCJ6ogSmzkOwT8drCLOizQGkXd%2BWeStFqBc3%2BKFIa%2BujTtOGE%2FGQVcpKlExClA8A2%2BfNjbX0aP5ZcS01P5IMTfjaJt%2BoqVXkQn5XTir0SKaFZG8aRa%2FSQ2yRIm0318%2B2bThbM2WOo9iVUbqzROQ1aUBvsockAZGsINA2TwWBJWdgBbgjeIoXNEown6%2FYwgY6pgGLNGve8ysinioUpDaE3lmP6RuyR7rtlylw0xAYnyWatN7LWZWGUHnnR5%2FQHqaaB%2FO8A3%2B%2BKaljCKjP%2B9bWgmGkeN5WWQby3ZOMzNj27LbCRhiYBBW8QN1P7b12i1%2BCYPsjxSWIRajgcZNpiNzvCIlgO0GZM1t5LjTZoSKl5413VQUKnjigET3cebrSPZAxALEcC9h19eVdXfvV53tbN3L3MkJy9tjI&X-Amz-Signature=b0813159440ac8bc40af7b80263d356f67ef0edf38759d7b8b54ffb51aa02d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5K6YFV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfiby%2BkmRnQPUprfgoO5ckkl6mVW7ckZJX2JmEhVL5hAiBccUEKWsYqRcLkSK6jSxA1ZgI8uR7Qo4NaWM1Fyx0HxSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPih0W3yqlVHVVvJXKtwDFdMjAnOQajXeciOPRQAIgsB2TiaWswgFXnefJmfX%2FxgIJx4fwffb%2BlIGAbW%2BkdQF8VsJktEopZ4rf4rMnSI51sm3JmzD4I%2BmUfo2Mkbkvii4GKZbRlyU2SXNDsqqxkGFBYAjYyElp%2Ba9ph16B4VKsOVxmussZiAZ6oWvclUa0e9d24KJpO%2FnzwZTjW8z6akySkYX3QTE4xRn6x8DXQjq42VhY%2Br7%2B0jjCQ7rRePrlW%2BUAw8%2F7vUOzNAxJl2iBSDagSsdAmB0zBEDfUDlo0Nf77GMedi6L%2Fn1DKhjsb3R8yeYzlZHXH7Ky6rrpOrblGP3ISP4SSRnmbOIcLhSBVGAH5yUe5gRWOhmLYIXE9RBiE0yj88pbtglPABvpYwk1flRUHH5qG%2BBD67BWhQ6GNBxPIX%2FhvTLmfzRXDniUMU%2FKdCfPzIHu0y%2FzSh7tx3VupA0UmHaKCJ6ogSmzkOwT8drCLOizQGkXd%2BWeStFqBc3%2BKFIa%2BujTtOGE%2FGQVcpKlExClA8A2%2BfNjbX0aP5ZcS01P5IMTfjaJt%2BoqVXkQn5XTir0SKaFZG8aRa%2FSQ2yRIm0318%2B2bThbM2WOo9iVUbqzROQ1aUBvsockAZGsINA2TwWBJWdgBbgjeIoXNEown6%2FYwgY6pgGLNGve8ysinioUpDaE3lmP6RuyR7rtlylw0xAYnyWatN7LWZWGUHnnR5%2FQHqaaB%2FO8A3%2B%2BKaljCKjP%2B9bWgmGkeN5WWQby3ZOMzNj27LbCRhiYBBW8QN1P7b12i1%2BCYPsjxSWIRajgcZNpiNzvCIlgO0GZM1t5LjTZoSKl5413VQUKnjigET3cebrSPZAxALEcC9h19eVdXfvV53tbN3L3MkJy9tjI&X-Amz-Signature=3f8a6fa9b15f6399ee2c6c8b711e893df57503091389e902494ab212f2d8c130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5K6YFV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfiby%2BkmRnQPUprfgoO5ckkl6mVW7ckZJX2JmEhVL5hAiBccUEKWsYqRcLkSK6jSxA1ZgI8uR7Qo4NaWM1Fyx0HxSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPih0W3yqlVHVVvJXKtwDFdMjAnOQajXeciOPRQAIgsB2TiaWswgFXnefJmfX%2FxgIJx4fwffb%2BlIGAbW%2BkdQF8VsJktEopZ4rf4rMnSI51sm3JmzD4I%2BmUfo2Mkbkvii4GKZbRlyU2SXNDsqqxkGFBYAjYyElp%2Ba9ph16B4VKsOVxmussZiAZ6oWvclUa0e9d24KJpO%2FnzwZTjW8z6akySkYX3QTE4xRn6x8DXQjq42VhY%2Br7%2B0jjCQ7rRePrlW%2BUAw8%2F7vUOzNAxJl2iBSDagSsdAmB0zBEDfUDlo0Nf77GMedi6L%2Fn1DKhjsb3R8yeYzlZHXH7Ky6rrpOrblGP3ISP4SSRnmbOIcLhSBVGAH5yUe5gRWOhmLYIXE9RBiE0yj88pbtglPABvpYwk1flRUHH5qG%2BBD67BWhQ6GNBxPIX%2FhvTLmfzRXDniUMU%2FKdCfPzIHu0y%2FzSh7tx3VupA0UmHaKCJ6ogSmzkOwT8drCLOizQGkXd%2BWeStFqBc3%2BKFIa%2BujTtOGE%2FGQVcpKlExClA8A2%2BfNjbX0aP5ZcS01P5IMTfjaJt%2BoqVXkQn5XTir0SKaFZG8aRa%2FSQ2yRIm0318%2B2bThbM2WOo9iVUbqzROQ1aUBvsockAZGsINA2TwWBJWdgBbgjeIoXNEown6%2FYwgY6pgGLNGve8ysinioUpDaE3lmP6RuyR7rtlylw0xAYnyWatN7LWZWGUHnnR5%2FQHqaaB%2FO8A3%2B%2BKaljCKjP%2B9bWgmGkeN5WWQby3ZOMzNj27LbCRhiYBBW8QN1P7b12i1%2BCYPsjxSWIRajgcZNpiNzvCIlgO0GZM1t5LjTZoSKl5413VQUKnjigET3cebrSPZAxALEcC9h19eVdXfvV53tbN3L3MkJy9tjI&X-Amz-Signature=b262fe0c68548dc40fd1ad0373b6522f70cbd4a525c790c3e77d940f6ca5dd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZOLTVG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDXASJ68mF6cjzTdk5rkjMuFUFCe7Ccxlnl4WPsxnCAiEAtm38SwMRVlLEiI%2FfiC0WMIypGAZ3fRcVbwcLzCKdgrUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8d0oSE4CuUxzshUSrcA9WMul%2FbdA2HC7oaEuElUeeiSluu1es2LwhCeftN91TjdYP0zFa0lxSL07a7XLW909cy1WwEoJKZpxERGkCOB7Hjjw301wQWusPNNIWZwZG%2BJJyvQtBkEkPCurQKKSTz%2B0J%2BtEI%2Fowep5SEdeKIUgCOpryMxvLjFWD33EsY6N65gvXX1IFn9Z0En2JIaaUKuNoBcH8pF4I%2BjqPkDyUqi61AKTckOJHUTW3u3pnYzpPJAPzuQPZPMXKet2TIIynMtX6L2BlzTXRbCfVDtRE6NMIyXZZDR5F4O2iZ3yYOtGmI59flcSl60urdsqN4nPRbYAgA%2FCSfYbMXEzSSwNyWRhRhHtXVEFDCQmomplXUU4lcbpoZ%2BlZPni6HfAbEV0uqoOXG2M2OMWbEyMNjmFJMgfaWGIx27v5b07Ty3GNsx9WwHO5u5LBGZcrI4U%2B3oOS1X2Pc77M1UAREi5QTo3AS29qjOQZZ0q2piv7h2b%2FQ%2FLM%2Fx3q%2FJoc4YwxyL%2B4Cr1NMinKMmjz6j%2FBtUkqxYrz3W%2BxcagPKDtSbdjKVq0JiJ4ZaihulMhGcNV9oHzLawtP0D3BnuBEbfgAeYXLD8wJzS3xKXOjjOMnbH8rDdLE%2FQJtxu4EakdpPMMs2F2gfGMKmv2MIGOqUBSFl5BWjBMtJXQ4fusgvtM81vAOVXCkJSzQULdxFFqfif0kGB3CD5ZsyiVVs9z%2BpyT8ePSnb0FIWU8MkGzN5UuNghbngZoH7897gEnYGZ4p0xKH%2FCJjwvbx9s898kqAFWVKkbMLD9zPeSEFiqLlj8cIO3ePsXyJKmRIGHUxBaemcbnYRGq11si4romx1vYiyZgyMACrM%2BIKBtGuMlRkKld0%2F1xNom&X-Amz-Signature=e613a451eededd17b8c4dcc43ae8f8e926e67e9b13a7672bbe5bbde835d15bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGJF23XA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKjjALOG%2FM%2BV7vUTunHnp5a%2BgKeytqw5G91ixFjD4vwAiEAvwf9ont8k%2FSAh1jLKLFiwD5nOfTF%2F6ef6SoVImof3m0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0YHRZ%2FbaeItb7uXSrcA5jIPVlhqTOEw7aYcNfFJzK1U1ZPZNuJvuacwkU5xw%2FCdYfF5klOSI1SHuIA5%2BYnSY%2B5OElZIEz4K%2FWYwATYEYl6cJfeGZcQb%2Fsmm9oWp55Fjn%2FLth0bZ9uz%2FVyknnd66z0MBmgN%2FoT%2FA2wZbeQMR0c7fu0ZdB%2BrXxTd0W4o%2FToVPgbxeFoRj%2F5M2uuExRa%2BgIpHcr5JTYlx8Kb43SbAqOIXxR5ufy%2FKqeI86F2bDJdNwMvJrjv47FN3BFNH7h5pOVwNdBAUXULiF%2F9xCBST1x5%2BdCQG3w777VOk%2F1OaHAK8cwOTpB%2BDESePC00dmUxheNTYJ8B%2Bljt%2FONB4qYS9xZA7KWd3buzLFAzKXlgfTH%2Bn5C7w88i6KEmB%2FRdBRUrq3mKetbU0aPg5peOEu2%2Bft2EdHZOrrGWITDhA4pnYIR4l3no%2FhQDuw9Cs2LKbGbm4wYaNyDSnnqXAZP8eCzbrgOBSOlrGET7HUrb0Rma736GICdYbFUqUWcmULIHj26GoEGuL1j7wzF8V0u78ltetCqd5DxpC8YuzY04DAQ8p5o3%2FU%2B0WqcJAtFQcabMobkmIHkZjpBcyDsQdgPNuWblK2JWswgFDHGtbDU0ZhGN%2FDZ3zUCvJnVsd893B8W8YMMav2MIGOqUBbvAxL4rZk9Cn0MP0hW5LrPt5HBlQFsLk5%2BQsth7pgLHtilqHo4Hiukx6%2B65DchH3cqvT75oND4sE%2FAgI6i3fDhKkuexX0XOP%2B5GKWYOQH9Z3HZMA2%2Fn9Ri%2FEoxQ6BGmbL7Du5C2D2by6TxlwCboxhqzquO66Ts9ll0H%2F5BewtMOsCcxFID7EBmSk3Hll05J7EhFNtmgEckRpAfznoTGlsZnPjc1J&X-Amz-Signature=08dced6e0612944ea4e55c5581346b052f26724c388668b47de3fb539ad4b641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5K6YFV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfiby%2BkmRnQPUprfgoO5ckkl6mVW7ckZJX2JmEhVL5hAiBccUEKWsYqRcLkSK6jSxA1ZgI8uR7Qo4NaWM1Fyx0HxSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPih0W3yqlVHVVvJXKtwDFdMjAnOQajXeciOPRQAIgsB2TiaWswgFXnefJmfX%2FxgIJx4fwffb%2BlIGAbW%2BkdQF8VsJktEopZ4rf4rMnSI51sm3JmzD4I%2BmUfo2Mkbkvii4GKZbRlyU2SXNDsqqxkGFBYAjYyElp%2Ba9ph16B4VKsOVxmussZiAZ6oWvclUa0e9d24KJpO%2FnzwZTjW8z6akySkYX3QTE4xRn6x8DXQjq42VhY%2Br7%2B0jjCQ7rRePrlW%2BUAw8%2F7vUOzNAxJl2iBSDagSsdAmB0zBEDfUDlo0Nf77GMedi6L%2Fn1DKhjsb3R8yeYzlZHXH7Ky6rrpOrblGP3ISP4SSRnmbOIcLhSBVGAH5yUe5gRWOhmLYIXE9RBiE0yj88pbtglPABvpYwk1flRUHH5qG%2BBD67BWhQ6GNBxPIX%2FhvTLmfzRXDniUMU%2FKdCfPzIHu0y%2FzSh7tx3VupA0UmHaKCJ6ogSmzkOwT8drCLOizQGkXd%2BWeStFqBc3%2BKFIa%2BujTtOGE%2FGQVcpKlExClA8A2%2BfNjbX0aP5ZcS01P5IMTfjaJt%2BoqVXkQn5XTir0SKaFZG8aRa%2FSQ2yRIm0318%2B2bThbM2WOo9iVUbqzROQ1aUBvsockAZGsINA2TwWBJWdgBbgjeIoXNEown6%2FYwgY6pgGLNGve8ysinioUpDaE3lmP6RuyR7rtlylw0xAYnyWatN7LWZWGUHnnR5%2FQHqaaB%2FO8A3%2B%2BKaljCKjP%2B9bWgmGkeN5WWQby3ZOMzNj27LbCRhiYBBW8QN1P7b12i1%2BCYPsjxSWIRajgcZNpiNzvCIlgO0GZM1t5LjTZoSKl5413VQUKnjigET3cebrSPZAxALEcC9h19eVdXfvV53tbN3L3MkJy9tjI&X-Amz-Signature=45c1e00846a1bd3c4180effd7c001ab0a8c065d1b905d48662cfbc3ad74f8ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

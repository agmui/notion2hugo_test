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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5XGD4C%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY7qmCvn%2FJNbiDwJs%2BTE%2FQnaA9F11N26HQ3Ksnqpi6bAiB8yBtoRLFBZMl5wcTIphwNWItnw%2FYjxtxkrVk4IPkg0yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDp%2FW6dd3eQdkfKIMKtwDutsteWEsuZcIuCEe0lai6Sjoo8wCUgqB5jbN8IjYeu6oF%2BjR6TQhyG7UwCeKdHeMANpJ%2BDeox9nIZcFlcBStMt0nWYVigxEki1TJL5OlL9jLUA%2B%2FLbyqoUD2Nv%2FUabRpniUymRSevJN%2BArTwGztb5e6hCJkV1MWK5Q1kXbmWCD3eKv8KJ5XUbYLyUpzopz6dxKa7QFX6hsNahRDBYuYzi%2FOx2PK3n7f%2FJo71Tl9SJI9kzxJsfmRsn1iy%2Fclx48Ijc9zs9kZ%2F3iC7o30NYfMJ4iS14ZugFqZ0%2Fvm2jHMj5FpXYQshDTy4iW%2FgR1QglymOpX4v6APi6mbBz6z%2FCKpM5JpCVl6yrL6x%2FXdMw74df2JsqGAsnxfc1ukuRWQmVbpJwRUcpd7aQVlV9CxfFplFWf4xM6B2wqLkvjbiqm2EWp5rHI7H8NnSSBw0Fo1QxLCPxDIl4KnJHojPSpQM8sgfcU5EVvObPIt7wdSOWLHbRJx%2BOqF0E7RtlHw0P0umkCa9YOzdVemTwOPh%2BYrxyr7h7ciTQlP%2B6mGieKvHjqKDyeU7Au3xGr0MuGxj5BJieerybtcnacKneuT4nkDrWSyJNI1kn%2BP8SYUNC8FL5Z7flQ5M3prkbEB78a35Gq4wx8XswwY6pgGImDl7PUSRLh6cFV%2F0zcVKxCnxhYPRTN%2BRWQM6jZs8KrdGQRkckMsOblXPs6gDaJMUkSwoxqRSOnY1TkrVTXy5rDeOXokHrJUa7yhxROB%2BDCZ4Hu2VnhRlSLYvgMuJAA5Sqv7mambX9uXmEuStkS446Hg80SZI7E%2FVrHtOeJxZyE2GYcgrQYDzNyzy%2BYBUnGaxOkD1chTXh7uX%2B%2F0QCaoes3F4O0F0&X-Amz-Signature=7b11ada4305a997345fa6a489dc11df37150ffac6ce0243a261153be571e571e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5XGD4C%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY7qmCvn%2FJNbiDwJs%2BTE%2FQnaA9F11N26HQ3Ksnqpi6bAiB8yBtoRLFBZMl5wcTIphwNWItnw%2FYjxtxkrVk4IPkg0yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDp%2FW6dd3eQdkfKIMKtwDutsteWEsuZcIuCEe0lai6Sjoo8wCUgqB5jbN8IjYeu6oF%2BjR6TQhyG7UwCeKdHeMANpJ%2BDeox9nIZcFlcBStMt0nWYVigxEki1TJL5OlL9jLUA%2B%2FLbyqoUD2Nv%2FUabRpniUymRSevJN%2BArTwGztb5e6hCJkV1MWK5Q1kXbmWCD3eKv8KJ5XUbYLyUpzopz6dxKa7QFX6hsNahRDBYuYzi%2FOx2PK3n7f%2FJo71Tl9SJI9kzxJsfmRsn1iy%2Fclx48Ijc9zs9kZ%2F3iC7o30NYfMJ4iS14ZugFqZ0%2Fvm2jHMj5FpXYQshDTy4iW%2FgR1QglymOpX4v6APi6mbBz6z%2FCKpM5JpCVl6yrL6x%2FXdMw74df2JsqGAsnxfc1ukuRWQmVbpJwRUcpd7aQVlV9CxfFplFWf4xM6B2wqLkvjbiqm2EWp5rHI7H8NnSSBw0Fo1QxLCPxDIl4KnJHojPSpQM8sgfcU5EVvObPIt7wdSOWLHbRJx%2BOqF0E7RtlHw0P0umkCa9YOzdVemTwOPh%2BYrxyr7h7ciTQlP%2B6mGieKvHjqKDyeU7Au3xGr0MuGxj5BJieerybtcnacKneuT4nkDrWSyJNI1kn%2BP8SYUNC8FL5Z7flQ5M3prkbEB78a35Gq4wx8XswwY6pgGImDl7PUSRLh6cFV%2F0zcVKxCnxhYPRTN%2BRWQM6jZs8KrdGQRkckMsOblXPs6gDaJMUkSwoxqRSOnY1TkrVTXy5rDeOXokHrJUa7yhxROB%2BDCZ4Hu2VnhRlSLYvgMuJAA5Sqv7mambX9uXmEuStkS446Hg80SZI7E%2FVrHtOeJxZyE2GYcgrQYDzNyzy%2BYBUnGaxOkD1chTXh7uX%2B%2F0QCaoes3F4O0F0&X-Amz-Signature=c3f2fee8e20196601c770586c56d82c7ad97e802f09351f8f05d48077af5c064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5XGD4C%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY7qmCvn%2FJNbiDwJs%2BTE%2FQnaA9F11N26HQ3Ksnqpi6bAiB8yBtoRLFBZMl5wcTIphwNWItnw%2FYjxtxkrVk4IPkg0yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDp%2FW6dd3eQdkfKIMKtwDutsteWEsuZcIuCEe0lai6Sjoo8wCUgqB5jbN8IjYeu6oF%2BjR6TQhyG7UwCeKdHeMANpJ%2BDeox9nIZcFlcBStMt0nWYVigxEki1TJL5OlL9jLUA%2B%2FLbyqoUD2Nv%2FUabRpniUymRSevJN%2BArTwGztb5e6hCJkV1MWK5Q1kXbmWCD3eKv8KJ5XUbYLyUpzopz6dxKa7QFX6hsNahRDBYuYzi%2FOx2PK3n7f%2FJo71Tl9SJI9kzxJsfmRsn1iy%2Fclx48Ijc9zs9kZ%2F3iC7o30NYfMJ4iS14ZugFqZ0%2Fvm2jHMj5FpXYQshDTy4iW%2FgR1QglymOpX4v6APi6mbBz6z%2FCKpM5JpCVl6yrL6x%2FXdMw74df2JsqGAsnxfc1ukuRWQmVbpJwRUcpd7aQVlV9CxfFplFWf4xM6B2wqLkvjbiqm2EWp5rHI7H8NnSSBw0Fo1QxLCPxDIl4KnJHojPSpQM8sgfcU5EVvObPIt7wdSOWLHbRJx%2BOqF0E7RtlHw0P0umkCa9YOzdVemTwOPh%2BYrxyr7h7ciTQlP%2B6mGieKvHjqKDyeU7Au3xGr0MuGxj5BJieerybtcnacKneuT4nkDrWSyJNI1kn%2BP8SYUNC8FL5Z7flQ5M3prkbEB78a35Gq4wx8XswwY6pgGImDl7PUSRLh6cFV%2F0zcVKxCnxhYPRTN%2BRWQM6jZs8KrdGQRkckMsOblXPs6gDaJMUkSwoxqRSOnY1TkrVTXy5rDeOXokHrJUa7yhxROB%2BDCZ4Hu2VnhRlSLYvgMuJAA5Sqv7mambX9uXmEuStkS446Hg80SZI7E%2FVrHtOeJxZyE2GYcgrQYDzNyzy%2BYBUnGaxOkD1chTXh7uX%2B%2F0QCaoes3F4O0F0&X-Amz-Signature=920aea277b5f3d100662f72e7daf2b3ba3a23ae92fb6ec9d620f4e03936eff60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PKOUAS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9IOen52ugpwQcOfieH09SEOWWzLxtzEueYLiFgT%2B1nQIhAKVoqkQM9SwTwhaucze9%2FQxcLLTMWqgcZjlf5oa2y0XmKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN%2Bf7xtfSNxWZ5GJkq3AM%2FgBLXwm5LNFuMz20jkeM%2BBGKH3A84I9ezWvklLu2W%2BlKQCe7V%2BHS9gtf5Zn%2F4I%2BH1oY1gYN7p3w4TBmlNqbAlIHA%2BAbjHCgmBqMfpDh%2FYZATui5vyrBfPwn942sWxAJb1ME6yzvfXirj4RehDNEeNynws%2BnoDbennY%2FNwpIahfyEMSmbA7Kovym7UkJU0j%2F3AQZgnGjtzG1ERLEBSMBTlZvhjrYRLqyJmSVmkNM2lCTEW2irL2MDZALtq%2B0fJckDXO6PTx53Zk0GjdFtdHjlBovj5e%2Fx3dwYgpf%2FBV2TmVWUptcj3aONRXrY7B%2B%2FsjmFYtQFbQjhdGNAEuxwiEL0ixhcVt1IDg3b71xh%2Flc2jKnT5dQ8qoEataWW1CZKMzOto%2FNMirKGFyn4xgTfu23uB5Rn2Ra7RY0lJNvR4b3wV0kMcknSAwTnonTNdwVda7AgmV0fGZP14Lix0pVjlX3R4jsY9QiSP5dhWHsxxrkXQXPTfjYOX3xhfTooq5%2BlIC%2BjZr1ogB3RtGpi%2FFZi9O%2BDHGRezj1YSZxekMflxkjq52S2b5Qj3HXhgzk3%2BA588l2j1dAnJY2lQnhhDB6%2F0F4lW4Iixs0WdEPidvZmn%2FlpuSInOKv%2BlUTXuUrKXmzCGxezDBjqkAUC5ItdzU1AnNUcEtfbw%2BNL%2F%2FgINqYnu%2FbueSqvROvNhjsblIuk7subpRo7DKpW9gK8FWL1TYANBYBj3owtwULOVeIgn%2BstZSYVDyCoRTTsEox4Co%2BdqLvQV%2FMXkcIJfHghE4ErZ75xSv0oiKqsya4Q0MKF8rkESyWWRqNV1lNqt7NWN0NzXS7z02mGZdJ43T3T1kvZ%2FKJ%2FFHq7rDUSmesXpEkiU&X-Amz-Signature=2bce0d895b68737a58c76c44f01f2f56b0823b3b691165499959f718b967e285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPSERHP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGybgnrYS6RnAxDX8o0emA30hRXXlokE72xJaUCpeiNdAiEAhXoU0%2BALO7YZIMPPdhnMURKxGs5puz3oX5%2BQtepjEYQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLsfXNKfOUfHJB4eyrcAxLOB3GFS7%2B1Xs029gzUrmFW0K2jgAi%2BcgeJPubk%2BeVdcHygRCk2fE5ss9LJb169WT4lgA8uQCCwBG8GftkAOYi1P6R8Ga35arLV0lPkLMliHXEA3LI1laUMsYFSuHHinSnxUBDCDGvVw5JPJi8JTpXxRghBPRofZ%2BGOnferS%2B8Dd2WtH8mJ4VqhBksght2LUNH%2BhV4vXfHzwi6P2dNlFxmG4MHgFhxw9EKgM4h37vF6PtHMy%2FDtNWlZu0J9hGHQi7itr7KOVfpq8DdAvu1beygaOLNoKJIyq09JDOE5Jq2bhROoNv1quer2Tofepd89a65632vYJslFU3FfLuxBdIC7cz%2FJ%2FYEJnGSSPbW%2B343E2sryHdlDWh7s95ibdNvy%2FjSdCjFLLI3UveSmTqVP5%2F21QGPfUrKFKUvjKzbPB5IMOjJ%2FsQq%2BpN07LEzDDfN12sTFVV1LpdYJKF%2BznrHd4R3F%2B9myEZARRgbpKSOLpbgGvKxGAq7rrnOq%2Blg%2F8CbrBbt020GLLB2vV1k9l4Wk3xmlLJBK9Tko2zHD%2FZuflU2A8VBSKr53V0aCwuV28KuJClN7IXZ0UjxhQwnycf9SKIoItCgoEHEvJjwOOpJFr0iFhXWpomrioUah9vp1MLDF7MMGOqUBKEoFU4zyyfbocS2a10xBnnhNvC0exGgWJwaRbjLWmtgO7mZwQYwCtXFDdaH3oP%2BPOGhb4ifXIWitbP7Q0oCDBUk74eW67A8i%2B%2FiZ29K4E%2BefyRQC69dmu9NGrkehivDMJc6bcb5lizHoZugoMXTvevu%2B0zXtRtHO7kRxVcyBy7IFqCUtB5btVzDuY2Xv1lCpgLD1%2Fsg%2BPMJmzeHjSeMr1zTwQN0j&X-Amz-Signature=eedcc296bca22c3187cc2ebfdb78a1f5a0aeee37f29be2153ca8455ddcfa32ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5XGD4C%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY7qmCvn%2FJNbiDwJs%2BTE%2FQnaA9F11N26HQ3Ksnqpi6bAiB8yBtoRLFBZMl5wcTIphwNWItnw%2FYjxtxkrVk4IPkg0yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDp%2FW6dd3eQdkfKIMKtwDutsteWEsuZcIuCEe0lai6Sjoo8wCUgqB5jbN8IjYeu6oF%2BjR6TQhyG7UwCeKdHeMANpJ%2BDeox9nIZcFlcBStMt0nWYVigxEki1TJL5OlL9jLUA%2B%2FLbyqoUD2Nv%2FUabRpniUymRSevJN%2BArTwGztb5e6hCJkV1MWK5Q1kXbmWCD3eKv8KJ5XUbYLyUpzopz6dxKa7QFX6hsNahRDBYuYzi%2FOx2PK3n7f%2FJo71Tl9SJI9kzxJsfmRsn1iy%2Fclx48Ijc9zs9kZ%2F3iC7o30NYfMJ4iS14ZugFqZ0%2Fvm2jHMj5FpXYQshDTy4iW%2FgR1QglymOpX4v6APi6mbBz6z%2FCKpM5JpCVl6yrL6x%2FXdMw74df2JsqGAsnxfc1ukuRWQmVbpJwRUcpd7aQVlV9CxfFplFWf4xM6B2wqLkvjbiqm2EWp5rHI7H8NnSSBw0Fo1QxLCPxDIl4KnJHojPSpQM8sgfcU5EVvObPIt7wdSOWLHbRJx%2BOqF0E7RtlHw0P0umkCa9YOzdVemTwOPh%2BYrxyr7h7ciTQlP%2B6mGieKvHjqKDyeU7Au3xGr0MuGxj5BJieerybtcnacKneuT4nkDrWSyJNI1kn%2BP8SYUNC8FL5Z7flQ5M3prkbEB78a35Gq4wx8XswwY6pgGImDl7PUSRLh6cFV%2F0zcVKxCnxhYPRTN%2BRWQM6jZs8KrdGQRkckMsOblXPs6gDaJMUkSwoxqRSOnY1TkrVTXy5rDeOXokHrJUa7yhxROB%2BDCZ4Hu2VnhRlSLYvgMuJAA5Sqv7mambX9uXmEuStkS446Hg80SZI7E%2FVrHtOeJxZyE2GYcgrQYDzNyzy%2BYBUnGaxOkD1chTXh7uX%2B%2F0QCaoes3F4O0F0&X-Amz-Signature=a5283bb2a3c3b50a36d7483145c347f14cc2c98dad25dff3fb51d0d361781835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

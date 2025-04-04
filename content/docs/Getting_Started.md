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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6HCKLU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc0%2FBK414irxVa8aAdgZDZqf%2FUeAV2z8sk90%2FZMobKzAIhAKq4pV6bbVVHpLacCCp0tnk3zYmFNH3XkBOhJjebAqBgKv8DCBgQABoMNjM3NDIzMTgzODA1IgzSahgJ8Q2qjxEH8pYq3AMws7YjcqltS0jyta%2Fm%2Fl001gkOCCq%2FG1LxWPbWKVP5Eexj0nMFZfbTlaZWEoG%2BjqQdNfmtgWY2HqY5W0SHlwPekIbTNXjOYVYt2vFbp6seD7sPak8YCcerSlvpY9rw6qq8yOvoMv8qd6l7ltZPmYW8dLJ5moNJMHsnuAd1IsBN33txilt5M2dJsZp2CcyohgcqVAgxATIvXGXdMxtKgK6dVmR1xrymZ%2BLVSuOSNXEiZG7THeGW%2BQBQaWyQryA3JbxLVf5YABRgDc%2FYG9w%2FEH0KnVQj%2FFdeFo25mEXLDbW3tkHPb0OoLnHpijSbFQoVNJzV8dEjNQzG6sSFFVnsmGjAor4YgShuAtds1JREdwvWunMxqoTgUNSkpaPQrNmST5zLpYGzBVh5cRDIlXikMb%2BRIacdfsqDj2FibxoAwKYDqBLhfC%2BkdotzkV3xeC%2FwrmO%2Blzuao8cMKc7y31viaZw2yOI8uFUohXibyaEutsAWKe38KoFYIJR55ljub%2BJhwW4%2FtnX7YhZef2xZNNNi3emy%2FXXhTqbYRe16BK9jgnCmIiCoJEpAodMuUwzy%2F1cv1fPBYFyPg8HRMbxoinwGcRIhe1gS3PyMOr0G3Qr06nBomgVdLos%2BuubXSG%2FgvDCu57%2B%2FBjqkAUd%2FeAhK5PlH4oVDZlqzjtexLMUU4a5SCn9ZbtEvL3%2FACl2pG1xz0kT01sLk0KOCc6qahiMKnOCZNLw2Le0n4uSlSFzJzM3%2BSZ2WeFLmXu6N80pn8JzK13LiXmAMzqU8uTkBI5Eb8uqEG2hbhj0z0hNt1BWfyHgUV0kbyxfqFN72M%2BxyDGGeASN0CGF%2BY2rBWVj6BN1xcJCxk7BD7OyBb9dTyyMS&X-Amz-Signature=db9fb286ceea17456f95542ac1dc4c015663d012d93edb02c3cfe1e063394478&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6HCKLU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc0%2FBK414irxVa8aAdgZDZqf%2FUeAV2z8sk90%2FZMobKzAIhAKq4pV6bbVVHpLacCCp0tnk3zYmFNH3XkBOhJjebAqBgKv8DCBgQABoMNjM3NDIzMTgzODA1IgzSahgJ8Q2qjxEH8pYq3AMws7YjcqltS0jyta%2Fm%2Fl001gkOCCq%2FG1LxWPbWKVP5Eexj0nMFZfbTlaZWEoG%2BjqQdNfmtgWY2HqY5W0SHlwPekIbTNXjOYVYt2vFbp6seD7sPak8YCcerSlvpY9rw6qq8yOvoMv8qd6l7ltZPmYW8dLJ5moNJMHsnuAd1IsBN33txilt5M2dJsZp2CcyohgcqVAgxATIvXGXdMxtKgK6dVmR1xrymZ%2BLVSuOSNXEiZG7THeGW%2BQBQaWyQryA3JbxLVf5YABRgDc%2FYG9w%2FEH0KnVQj%2FFdeFo25mEXLDbW3tkHPb0OoLnHpijSbFQoVNJzV8dEjNQzG6sSFFVnsmGjAor4YgShuAtds1JREdwvWunMxqoTgUNSkpaPQrNmST5zLpYGzBVh5cRDIlXikMb%2BRIacdfsqDj2FibxoAwKYDqBLhfC%2BkdotzkV3xeC%2FwrmO%2Blzuao8cMKc7y31viaZw2yOI8uFUohXibyaEutsAWKe38KoFYIJR55ljub%2BJhwW4%2FtnX7YhZef2xZNNNi3emy%2FXXhTqbYRe16BK9jgnCmIiCoJEpAodMuUwzy%2F1cv1fPBYFyPg8HRMbxoinwGcRIhe1gS3PyMOr0G3Qr06nBomgVdLos%2BuubXSG%2FgvDCu57%2B%2FBjqkAUd%2FeAhK5PlH4oVDZlqzjtexLMUU4a5SCn9ZbtEvL3%2FACl2pG1xz0kT01sLk0KOCc6qahiMKnOCZNLw2Le0n4uSlSFzJzM3%2BSZ2WeFLmXu6N80pn8JzK13LiXmAMzqU8uTkBI5Eb8uqEG2hbhj0z0hNt1BWfyHgUV0kbyxfqFN72M%2BxyDGGeASN0CGF%2BY2rBWVj6BN1xcJCxk7BD7OyBb9dTyyMS&X-Amz-Signature=ecb02c4701b37d327a133e25411a7a4121dda9c311f5090b603d64886283d9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7AN5LW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa%2FV9vbr0BRsbca3rl9j5or87XhHNH6x%2B7P%2BSTTBWeiAIhALk1Lm3jNJUA1foiMqNRWsQtbErXYmVH02Cm%2FrSldFgoKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXpKtL%2F9p1QxevrqYq3AO5P3BZ6fR66t%2FESf2u%2F2RSg4LOUAKCXEKk4IttDkTH%2BoW66aAS0NciYlUGMkgDKGxvamlSoHbHEpihQQUzFwk0lnxVLnCGKwFsCuByZhwM72EdtHzsIiIMyX%2FLTE%2BPZsGxBOCzwJ4u4kGUi2O7VlOiFRIxcDmgZlGF3x0%2FmwLzy1yAltzz6UQ9hEQtstSFehwSgEMFrZNdho0VrRAXwx6KGQwCJbMvSGIkhusqbW1re2kd91OTBFX7SKQmY1SnyK7L0%2F12xrV8MvMhRlgI558zb6o%2BGN443vnMToBRjFE9bbNrad4WpEo0R9d9xpyziF3tQpiYUTuh6%2BWyH8pB4g5XaGhwM8IwOOotsK6bX%2FeYD%2BsXOroIHEr0A%2FQq6dRr118Btb3o6kFB3ACUHG5zmppnnnlK04NeWWkfzLtH5nBXMc92Edxy2kQjBohZ8u%2FpeRKFxk0HHA%2BR5tDIb4T3iAvgENc1WeAGKXDC%2Bx6DtZOoxvJsYZ7UOK6d9UDXoFv5Sy3m6Kl3LN2AQUrtdR%2F5wOzK%2B2OkRNdLyuGUcnp5x%2FbfymmvLBcO7mzGxZS1M5PxkIObQHvM2dLLoebMyJGuYAew%2BcgFy7VCBH2v1bmThhdMenK6%2BEZGrImx7xyqBDDK5r%2B%2FBjqkAWuMOXJiFvamtWJRQMlMENNzHEztiL6SOApV2F3waLY7sFKUWGB%2FZ%2BeVeplX%2Fhb4aLBfXm610noh69GGYiJyTAT1ovcSV5Nk4mXzEaIOtp8vMTrw4HSKuhSqde7u04lhk2ARFPNYJbNeSVjKNzV4r6gJ62V5idWWZYBAUoQG6KjKhvPJU%2BV1ABjHVMgZGZhawJ55CRPPGEn3sKaFLqlC7eRwfyOK&X-Amz-Signature=92106640a8857644f81d51ea27cba16374e9cb8b41347d92d2ebe55bf415ab81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKBCDUOB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIhiHVa8qggLcc2oej41bRiaiYnaZTmrSPhPD06sfooAiEA4iEa74ntX8EHECgdpEr24feYpKvjf8LJeIircXH29poq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDJVcKYZZZdXwGNoSzCrcAznt61e1iC3JRDEhCP1S1Tb9HlS%2BEt6SC%2FeUwW96EvY%2Bidkg2FPZjwK9hppy3gb%2Fil%2BYBeaw1SoW27FDKY86WI%2FeUY%2B%2BVFx0o28wLwxkztPQtzB7Cb6x%2F63W%2F8otmwAsdtDqsurv9FhtAL7g6P%2FNOuMJIEnB1k%2FwF6VmaU752GmPC%2BvH8sB9Ou%2FM9k1FOn8xfXYP%2BSDPHRnpUoP%2BJOIZvLSsV57ie%2Brr0uWRF%2B8Lz9ph%2FRdbj4iCmCNF29l2n8pqWZB%2Ft1PQbGgwEynXu3hR0rus0rlJiL7CfFVaJ5TeKJRQJVME%2Bhca4mRz3Kwz6kEnfizYMdQEVulJfnXn1ZoI0I%2FxHoid0DiJBhARGYwN1kWJfm9AJT2fNKShQwpy4LRrDiUR7HIIgG64tNueZh8LV2Ry%2BU0PHI992I2RVLD0osOGosIIr0RS8auE4yGXOZKvBGuREwn32ILmffIaLJuSmzfTbjkhxHJPWrjKoOwxjq6vfjTIp9JnmplQ9QPMRLe5YftWi2fEXd13tlEZ5n39Oh151Fgl%2FHBrPaAVChGk5TJjIkAQhV9RwQAG3wafpo5iTgUucSrbIjp4wRLsOi3MmaqKBjiv0SdXTlkFIDH2juwkcQP9ot7zRgZ5C6UIML3nv78GOqUBO4v1ViRjNePz%2ByLuDaMDW%2Fq36KYvklGZ4A4yB04cHJP86aKNcOmKZUhBpYWzW7nayQe5s2PXRdCp6xdAUk8S2xeIT1BczejGhi0VPMIgLMI1zdeIW8OipEZdXKFgu93XPaoS8y9NNopkf5dGHOJIjzDdnwS9dz04EKRvKgM%2B4Q5vDiPb6i0qIQBdBhNj4D7YqPxTd0Jh7U%2FefdD%2F4rbnyuzR7mzM&X-Amz-Signature=cf355733f034e6ded907f7515f8119f1576b326991d0b231ec7121d936daa58e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6HCKLU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc0%2FBK414irxVa8aAdgZDZqf%2FUeAV2z8sk90%2FZMobKzAIhAKq4pV6bbVVHpLacCCp0tnk3zYmFNH3XkBOhJjebAqBgKv8DCBgQABoMNjM3NDIzMTgzODA1IgzSahgJ8Q2qjxEH8pYq3AMws7YjcqltS0jyta%2Fm%2Fl001gkOCCq%2FG1LxWPbWKVP5Eexj0nMFZfbTlaZWEoG%2BjqQdNfmtgWY2HqY5W0SHlwPekIbTNXjOYVYt2vFbp6seD7sPak8YCcerSlvpY9rw6qq8yOvoMv8qd6l7ltZPmYW8dLJ5moNJMHsnuAd1IsBN33txilt5M2dJsZp2CcyohgcqVAgxATIvXGXdMxtKgK6dVmR1xrymZ%2BLVSuOSNXEiZG7THeGW%2BQBQaWyQryA3JbxLVf5YABRgDc%2FYG9w%2FEH0KnVQj%2FFdeFo25mEXLDbW3tkHPb0OoLnHpijSbFQoVNJzV8dEjNQzG6sSFFVnsmGjAor4YgShuAtds1JREdwvWunMxqoTgUNSkpaPQrNmST5zLpYGzBVh5cRDIlXikMb%2BRIacdfsqDj2FibxoAwKYDqBLhfC%2BkdotzkV3xeC%2FwrmO%2Blzuao8cMKc7y31viaZw2yOI8uFUohXibyaEutsAWKe38KoFYIJR55ljub%2BJhwW4%2FtnX7YhZef2xZNNNi3emy%2FXXhTqbYRe16BK9jgnCmIiCoJEpAodMuUwzy%2F1cv1fPBYFyPg8HRMbxoinwGcRIhe1gS3PyMOr0G3Qr06nBomgVdLos%2BuubXSG%2FgvDCu57%2B%2FBjqkAUd%2FeAhK5PlH4oVDZlqzjtexLMUU4a5SCn9ZbtEvL3%2FACl2pG1xz0kT01sLk0KOCc6qahiMKnOCZNLw2Le0n4uSlSFzJzM3%2BSZ2WeFLmXu6N80pn8JzK13LiXmAMzqU8uTkBI5Eb8uqEG2hbhj0z0hNt1BWfyHgUV0kbyxfqFN72M%2BxyDGGeASN0CGF%2BY2rBWVj6BN1xcJCxk7BD7OyBb9dTyyMS&X-Amz-Signature=e6717484024bdf112514095ef30014c706bea11ef60b726b6edd302c70aea23d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

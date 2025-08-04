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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWW2MFR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGo1E8TcUO23gpwT%2B2rjWEj38R2DBsClRlXKOgzGRd7qAiAzkJ4vflfi%2FPKo%2FOCGBgHjxEfg3am23iUpHY3opdwctyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMURqCvEEXWJm3UDX0KtwDk%2BTGBQT2y1jAXBFRbUnhdv%2FLlFk2OU2TVeqYL8o9E5GbFtBhsZ23KWLJHsjZxcK5R9l%2FMEhWvXWDAYTsnjnKgUME6PiqwPTZ%2Btp1Nrvl%2BWh0wWoXoZu1k1M50RLq2rzfULtUEAH8VTLPWZhuTsW9Sr%2Fw41o%2BwPs6v%2FYd%2Fdbrg9XEe%2Fl37Y2HbGGPP1t3F3%2BWSguXzDhWHENZX7LwU3njEfmUwwMA2krZ%2BS47CyS19WZleQgRk4e4e%2B4%2FbMLliPD4FCmXPQqlxpzMeCQv%2FZhWo8vony0o9ceRlWRa3wdptBbd5aPpqAcN2636nH1xM2cY%2B04XXQ8lErHY81jbf8OTEylpFX40AHuf8LM29gh9ev2AQ6dxKpOTPmY8%2FhXzaHsGSWZ5JWf1%2Be9UlWjIvJPxxA3dD321u3ZqGxSSxBuZ7NzO6t1t8CtSCBcMf2ByI3HEge5hrgxOZAhaGcpgjfu1%2Ff7%2FLtQEDk5BbUuYfJwWSCq6faJJFU3MsOcoS18g3CfNHnwv49Tg0%2BWIHjxDpFaSnVbN8noRcrwP4PlvWIB2QeEIsgOhPJdpDZWBa%2FAt6XdO2AACyn4bxD07IhwcBys6cNkElvzV4jO3d2kpqU6SI4afqhNOaq%2Fv2P%2BbhikwpLfBxAY6pgF3147%2FLEpRd%2FLT%2Bu%2BQS1oQOg7OYklJCm3Nxp9q1Ny0wOQJ0pxdVx2VUmCLMdLrkTL7UpP%2FcazA7tbZLH4UUbS%2FM337aTpd1%2FgzgJpp%2F0aiSIucLDnV9qng875Up0wskQoA5RrsL04fecZ0Y9LDr%2BEM35b716oRh0XGdMWt%2BNtU19vShqker6kkzRGjgK2hqTbKhnQvI0YLPHmcrL%2FKiNJZuE37iOsq&X-Amz-Signature=4a411539c98afdca8f42ddb3b47702331b53e8caae0fccf82d9d0e4ee13b6d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWW2MFR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGo1E8TcUO23gpwT%2B2rjWEj38R2DBsClRlXKOgzGRd7qAiAzkJ4vflfi%2FPKo%2FOCGBgHjxEfg3am23iUpHY3opdwctyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMURqCvEEXWJm3UDX0KtwDk%2BTGBQT2y1jAXBFRbUnhdv%2FLlFk2OU2TVeqYL8o9E5GbFtBhsZ23KWLJHsjZxcK5R9l%2FMEhWvXWDAYTsnjnKgUME6PiqwPTZ%2Btp1Nrvl%2BWh0wWoXoZu1k1M50RLq2rzfULtUEAH8VTLPWZhuTsW9Sr%2Fw41o%2BwPs6v%2FYd%2Fdbrg9XEe%2Fl37Y2HbGGPP1t3F3%2BWSguXzDhWHENZX7LwU3njEfmUwwMA2krZ%2BS47CyS19WZleQgRk4e4e%2B4%2FbMLliPD4FCmXPQqlxpzMeCQv%2FZhWo8vony0o9ceRlWRa3wdptBbd5aPpqAcN2636nH1xM2cY%2B04XXQ8lErHY81jbf8OTEylpFX40AHuf8LM29gh9ev2AQ6dxKpOTPmY8%2FhXzaHsGSWZ5JWf1%2Be9UlWjIvJPxxA3dD321u3ZqGxSSxBuZ7NzO6t1t8CtSCBcMf2ByI3HEge5hrgxOZAhaGcpgjfu1%2Ff7%2FLtQEDk5BbUuYfJwWSCq6faJJFU3MsOcoS18g3CfNHnwv49Tg0%2BWIHjxDpFaSnVbN8noRcrwP4PlvWIB2QeEIsgOhPJdpDZWBa%2FAt6XdO2AACyn4bxD07IhwcBys6cNkElvzV4jO3d2kpqU6SI4afqhNOaq%2Fv2P%2BbhikwpLfBxAY6pgF3147%2FLEpRd%2FLT%2Bu%2BQS1oQOg7OYklJCm3Nxp9q1Ny0wOQJ0pxdVx2VUmCLMdLrkTL7UpP%2FcazA7tbZLH4UUbS%2FM337aTpd1%2FgzgJpp%2F0aiSIucLDnV9qng875Up0wskQoA5RrsL04fecZ0Y9LDr%2BEM35b716oRh0XGdMWt%2BNtU19vShqker6kkzRGjgK2hqTbKhnQvI0YLPHmcrL%2FKiNJZuE37iOsq&X-Amz-Signature=7ab90811a760683425c540d0b0348fec4db0302e269ff01c51a8c719c3a184bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWW2MFR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGo1E8TcUO23gpwT%2B2rjWEj38R2DBsClRlXKOgzGRd7qAiAzkJ4vflfi%2FPKo%2FOCGBgHjxEfg3am23iUpHY3opdwctyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMURqCvEEXWJm3UDX0KtwDk%2BTGBQT2y1jAXBFRbUnhdv%2FLlFk2OU2TVeqYL8o9E5GbFtBhsZ23KWLJHsjZxcK5R9l%2FMEhWvXWDAYTsnjnKgUME6PiqwPTZ%2Btp1Nrvl%2BWh0wWoXoZu1k1M50RLq2rzfULtUEAH8VTLPWZhuTsW9Sr%2Fw41o%2BwPs6v%2FYd%2Fdbrg9XEe%2Fl37Y2HbGGPP1t3F3%2BWSguXzDhWHENZX7LwU3njEfmUwwMA2krZ%2BS47CyS19WZleQgRk4e4e%2B4%2FbMLliPD4FCmXPQqlxpzMeCQv%2FZhWo8vony0o9ceRlWRa3wdptBbd5aPpqAcN2636nH1xM2cY%2B04XXQ8lErHY81jbf8OTEylpFX40AHuf8LM29gh9ev2AQ6dxKpOTPmY8%2FhXzaHsGSWZ5JWf1%2Be9UlWjIvJPxxA3dD321u3ZqGxSSxBuZ7NzO6t1t8CtSCBcMf2ByI3HEge5hrgxOZAhaGcpgjfu1%2Ff7%2FLtQEDk5BbUuYfJwWSCq6faJJFU3MsOcoS18g3CfNHnwv49Tg0%2BWIHjxDpFaSnVbN8noRcrwP4PlvWIB2QeEIsgOhPJdpDZWBa%2FAt6XdO2AACyn4bxD07IhwcBys6cNkElvzV4jO3d2kpqU6SI4afqhNOaq%2Fv2P%2BbhikwpLfBxAY6pgF3147%2FLEpRd%2FLT%2Bu%2BQS1oQOg7OYklJCm3Nxp9q1Ny0wOQJ0pxdVx2VUmCLMdLrkTL7UpP%2FcazA7tbZLH4UUbS%2FM337aTpd1%2FgzgJpp%2F0aiSIucLDnV9qng875Up0wskQoA5RrsL04fecZ0Y9LDr%2BEM35b716oRh0XGdMWt%2BNtU19vShqker6kkzRGjgK2hqTbKhnQvI0YLPHmcrL%2FKiNJZuE37iOsq&X-Amz-Signature=c59cbc88ca1f6bd7fbf6c34187a0dc79b1111c18c9ec8f30fd1da94577f14161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665225GW2H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIAtSBtolZkC6l9TzaFsfizc9tZL%2Ba2dWqPIr8ryi97y%2FAiEA%2BjFBAohlS5Y0P4EWmkkvr1rWtjW16ki0f0uQFdJSG8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJKcocJmA21z6WnJYyrcAxggtmaKMj%2F3JyjlBowqwiq%2FUNhcuBtSa8I%2BgQq64r5o8Up49mTD525rXjkBX36HNTTFGgpIMrMY754F16QnYCawOv%2F0%2BYGfGFdlA3uJd%2F2VlL6bgxQ2g2MoXcEjGBsUyIWb0BIS3nlHlbtx48ncPO4XHgaDNXv66wuuytwIf4NsFxmFk%2F4TeDFnMz7fL9edub72Ju7ARH9%2BWE61YooFFMJ5anR2D4xnz9mbnCFz5izSGgljLpIPAdhGPU3deru9m%2F61Ap6O4328c%2BnSc%2BYShr1DJE1bc%2FsHUW6sQjQbM%2BwJ2knRIcMOCdMVTu4jyMzNncTQ249JB8lS7XFZa%2FT4glB0o6a7TKLz%2BXiju9p8hjjgyzWThkWY%2FsSiAQ0AIpHfs7nW9qAFBvUurwCuEeZgBmEMqedp%2Bk7fAVDdtWAGYBvBWqNfMtdZn7UJJk5edEJa0lmeRfJEvAnfLhUleMzBY0%2FD5WGqO14ZKe1x2E%2BVsDZpoZPT1pxIfCAfY6LcYBLmRLPOUFCpPF7Gap1KTpREGhsrvNSB%2Ft5MERtUyviGf5I167tZ1ZyqRLJhh19UHq%2FR34kQf1sFqi7ZxTqZVpL7yzJoub%2FQa7imlLt%2FRQjzWm%2FrF%2FAfVPRDfOpJxkxVMLa4wcQGOqUBAnladep9L6nkwAM%2BdrPL8mhoAl3voKOLSaV5%2B55WqnUiaKoDEKbKiCsKSxz3iauFQciMm1hYIyMq2kv3FUy2Oxi7o4J6ywcLE%2Fpil3lAsIxecXMo87uXNr%2BWS%2FilYsbOzaFlreGvRIFt09DAWOCrg%2BQ2AUqgPJKAxaVCWk565sr84esWSUExjdPCU7rHO55pL9JPcXfX6C7fSrnXSWMnrkIgr%2Bw4&X-Amz-Signature=27a13d71199bc0aefd7943ac8e2b61068e255d5b66ae9dbda70889c4fc9af638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKDZ4YIF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDPs5qp3VQ00GvtU9eoyjX3tDmeLob6%2FjH%2BV0bfYSRmqgIhAJG9gDQFbC6Zx7d7Ukzu09xn%2BZdixznQoI0p5n9xHnClKv8DCEAQABoMNjM3NDIzMTgzODA1IgxmquLqM9Dwg4yrwW0q3APD7s3KeilpKEs0W%2BhKQikegLzG7oFcmmAL5kjm2lsvHpYo4idfAgSxFuLA7SdnqhdJvcO1tzLqHxc%2BpfUWX13G9Jcaj9yNP5ZYtYE9LPYHFMza8TjbMOnQRU8m1zqyggJ78dGrm%2FHkBMz0u2MWa8aH3jFa7G9qkr2rKJaKu%2BBscKnq0cHyBexZs%2BjiQDzOOydMVw8dZCoBUsQTKvYDm0UrOIQiUN129gXUJnMHJNHkJEArIteNm19SYSymk5Ptwjuxl8PEYLR8V0Lc4J1IAWxPiMjDcAxDSgK48jJRDnunH9Xz79F4ySiN6eTMJjIyj9NfEunXYxeiNA9mkLQBDMbJlfHIyE9KkDfEmJ6eE1pyJuV0gerKx1yG8q4Fi5XxJ4Ow00cOvqFzA7ZHnj08ywZAuo%2BIMM9IACqTYp31P0upqPuouJ4iqokPESb3IplaJaa0cs8XnITuzmYAU8E89hhWZsmy32%2BvmGdmur5Fr9AIahMLGomlSgzaKBTsXbFQSGkvWEG6qk4GmP3LXSRVBWpi%2B39aJQ2xhGlP%2FTtnlzmo1gqto46%2FfBAllGskkiDdaEkmNVdMXBhnmpTJzBgnpifM1JdWHInWVhbghI%2F%2FJIy65IhTAvllIsniVrQHDTCsuMHEBjqkAbYfNbRBn233IOCAelgaa5ltqQZdcSJ%2FaAv7lPx8AxZYi6sAUZjH37NqHx28r%2FF743Xz4Y2pYO8%2Fp0QUzfqcxheyOdv8ZakHaf51NP8Gg15ZagAOV2Uypew9im5YgQHsbkpH%2BcrCRtvBgrc2TDKOhMsY4uxCQUeCi1WbYmzXtz6WwUB9z0b%2BvGaKpW56bK7p3VVQ%2Fd8LMaC2ypg77l8JfiYehdfu&X-Amz-Signature=0db154820a6a2293d3866c47dac33086043bfc02d99d793855033ba2e51ae265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWW2MFR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGo1E8TcUO23gpwT%2B2rjWEj38R2DBsClRlXKOgzGRd7qAiAzkJ4vflfi%2FPKo%2FOCGBgHjxEfg3am23iUpHY3opdwctyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMURqCvEEXWJm3UDX0KtwDk%2BTGBQT2y1jAXBFRbUnhdv%2FLlFk2OU2TVeqYL8o9E5GbFtBhsZ23KWLJHsjZxcK5R9l%2FMEhWvXWDAYTsnjnKgUME6PiqwPTZ%2Btp1Nrvl%2BWh0wWoXoZu1k1M50RLq2rzfULtUEAH8VTLPWZhuTsW9Sr%2Fw41o%2BwPs6v%2FYd%2Fdbrg9XEe%2Fl37Y2HbGGPP1t3F3%2BWSguXzDhWHENZX7LwU3njEfmUwwMA2krZ%2BS47CyS19WZleQgRk4e4e%2B4%2FbMLliPD4FCmXPQqlxpzMeCQv%2FZhWo8vony0o9ceRlWRa3wdptBbd5aPpqAcN2636nH1xM2cY%2B04XXQ8lErHY81jbf8OTEylpFX40AHuf8LM29gh9ev2AQ6dxKpOTPmY8%2FhXzaHsGSWZ5JWf1%2Be9UlWjIvJPxxA3dD321u3ZqGxSSxBuZ7NzO6t1t8CtSCBcMf2ByI3HEge5hrgxOZAhaGcpgjfu1%2Ff7%2FLtQEDk5BbUuYfJwWSCq6faJJFU3MsOcoS18g3CfNHnwv49Tg0%2BWIHjxDpFaSnVbN8noRcrwP4PlvWIB2QeEIsgOhPJdpDZWBa%2FAt6XdO2AACyn4bxD07IhwcBys6cNkElvzV4jO3d2kpqU6SI4afqhNOaq%2Fv2P%2BbhikwpLfBxAY6pgF3147%2FLEpRd%2FLT%2Bu%2BQS1oQOg7OYklJCm3Nxp9q1Ny0wOQJ0pxdVx2VUmCLMdLrkTL7UpP%2FcazA7tbZLH4UUbS%2FM337aTpd1%2FgzgJpp%2F0aiSIucLDnV9qng875Up0wskQoA5RrsL04fecZ0Y9LDr%2BEM35b716oRh0XGdMWt%2BNtU19vShqker6kkzRGjgK2hqTbKhnQvI0YLPHmcrL%2FKiNJZuE37iOsq&X-Amz-Signature=f127446a2acd8acdac839628b23b2ed6ec05c4ac0769e8d51b0a3d39512eacaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

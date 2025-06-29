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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JYZALA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc23W6jziWUPGOOm6dO3UQ33n4WA%2BYBB%2FCD7fTatNEPAIhAJuG0BvrY47LOOCJq5Ln8uChqHOllyRh6AaX%2FsIz6jlnKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUxvIbaUcW4fFwDU4q3AMv%2BvUzUYy9WQ5EpD8eUpLfVnNnMF%2F1OHqOAPM5YyEfcQ4qd3ORG%2BXF9QqdLXq3MCk7PdCsu5VRwgGKMV5EambhdZ%2Bjs9b8Ypuo0DnavQK70FN2s08vbK2UTFcVcKCPqmcsPIxegFcjdsMgrk0wm8%2BUfhV6XDQQTmGF8SErfi0qFCW7xXHyozWEqEk1W74FXBGF%2Fj7XWxlbSBCj1lL1l7CPq86aYY2ZwiSb6fOFult0YK5%2FH%2Faz92un50eve6r69wUjtQbbeSbuV%2B49waX%2BuRn6xaP9V%2BkW0on%2B2likaqQhXClEtX147Vy%2F%2FVeZABWzXh3H4PZOBV1bx16FY6mw4EIdQi5gj%2FHIJpxLQIAmumJ7bS0yEHCbxIN7YuE8kFu%2BZ8P0HsviaCVqTNntiy7wpUwH5WXd5vpW13Kb3S4xL0Ja2dq%2FIBtusoAEepsOFuzpH64lYAMXGcVlwouoBjDMhMPI36JMeYkW4WVktm8Qnh0CAk1V3%2BL%2B1KkX%2Bri6Hj5wH%2Fezcd2p0e0mGKAcWglTReiSUXebxTxW8kqAO%2FhzgVZL18dja6JtzfTd3Ykx2CSbQPQHWNq7AvMgK9Sb9te%2ByK2tjZ%2BxSUpfZr31EGfK4jk8y16RzaBYt8Gdbp6UuTCqzYbDBjqkAYobok7AnXO2Hy5L2ns1ZSFwJ9KHrj8aOYe6ntuzImInQAYZRb4lzpWqY6XH00JIcTZuAS7HVduM3oB10V1ALCzSDFHlB3NKwm5nNTHmiV8NpebfI1K1d2Nsn4US4MfEpxo4QnoCijzmjZVg1GEyBOZbYG22GK0xK3xgIzh5haf1sXy2OCJJRE5kAatdkFunOhEV6DkGm57Q4U3F1u2bY5eCPUo7&X-Amz-Signature=671eb25be27423d570daae4ac3f7d647ec2b7e946d2dd76aa06429992f20da58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JYZALA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc23W6jziWUPGOOm6dO3UQ33n4WA%2BYBB%2FCD7fTatNEPAIhAJuG0BvrY47LOOCJq5Ln8uChqHOllyRh6AaX%2FsIz6jlnKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUxvIbaUcW4fFwDU4q3AMv%2BvUzUYy9WQ5EpD8eUpLfVnNnMF%2F1OHqOAPM5YyEfcQ4qd3ORG%2BXF9QqdLXq3MCk7PdCsu5VRwgGKMV5EambhdZ%2Bjs9b8Ypuo0DnavQK70FN2s08vbK2UTFcVcKCPqmcsPIxegFcjdsMgrk0wm8%2BUfhV6XDQQTmGF8SErfi0qFCW7xXHyozWEqEk1W74FXBGF%2Fj7XWxlbSBCj1lL1l7CPq86aYY2ZwiSb6fOFult0YK5%2FH%2Faz92un50eve6r69wUjtQbbeSbuV%2B49waX%2BuRn6xaP9V%2BkW0on%2B2likaqQhXClEtX147Vy%2F%2FVeZABWzXh3H4PZOBV1bx16FY6mw4EIdQi5gj%2FHIJpxLQIAmumJ7bS0yEHCbxIN7YuE8kFu%2BZ8P0HsviaCVqTNntiy7wpUwH5WXd5vpW13Kb3S4xL0Ja2dq%2FIBtusoAEepsOFuzpH64lYAMXGcVlwouoBjDMhMPI36JMeYkW4WVktm8Qnh0CAk1V3%2BL%2B1KkX%2Bri6Hj5wH%2Fezcd2p0e0mGKAcWglTReiSUXebxTxW8kqAO%2FhzgVZL18dja6JtzfTd3Ykx2CSbQPQHWNq7AvMgK9Sb9te%2ByK2tjZ%2BxSUpfZr31EGfK4jk8y16RzaBYt8Gdbp6UuTCqzYbDBjqkAYobok7AnXO2Hy5L2ns1ZSFwJ9KHrj8aOYe6ntuzImInQAYZRb4lzpWqY6XH00JIcTZuAS7HVduM3oB10V1ALCzSDFHlB3NKwm5nNTHmiV8NpebfI1K1d2Nsn4US4MfEpxo4QnoCijzmjZVg1GEyBOZbYG22GK0xK3xgIzh5haf1sXy2OCJJRE5kAatdkFunOhEV6DkGm57Q4U3F1u2bY5eCPUo7&X-Amz-Signature=25248f614856162927a7faa2384b8842618f47cec6e7716ddae4618ea95782be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JYZALA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc23W6jziWUPGOOm6dO3UQ33n4WA%2BYBB%2FCD7fTatNEPAIhAJuG0BvrY47LOOCJq5Ln8uChqHOllyRh6AaX%2FsIz6jlnKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUxvIbaUcW4fFwDU4q3AMv%2BvUzUYy9WQ5EpD8eUpLfVnNnMF%2F1OHqOAPM5YyEfcQ4qd3ORG%2BXF9QqdLXq3MCk7PdCsu5VRwgGKMV5EambhdZ%2Bjs9b8Ypuo0DnavQK70FN2s08vbK2UTFcVcKCPqmcsPIxegFcjdsMgrk0wm8%2BUfhV6XDQQTmGF8SErfi0qFCW7xXHyozWEqEk1W74FXBGF%2Fj7XWxlbSBCj1lL1l7CPq86aYY2ZwiSb6fOFult0YK5%2FH%2Faz92un50eve6r69wUjtQbbeSbuV%2B49waX%2BuRn6xaP9V%2BkW0on%2B2likaqQhXClEtX147Vy%2F%2FVeZABWzXh3H4PZOBV1bx16FY6mw4EIdQi5gj%2FHIJpxLQIAmumJ7bS0yEHCbxIN7YuE8kFu%2BZ8P0HsviaCVqTNntiy7wpUwH5WXd5vpW13Kb3S4xL0Ja2dq%2FIBtusoAEepsOFuzpH64lYAMXGcVlwouoBjDMhMPI36JMeYkW4WVktm8Qnh0CAk1V3%2BL%2B1KkX%2Bri6Hj5wH%2Fezcd2p0e0mGKAcWglTReiSUXebxTxW8kqAO%2FhzgVZL18dja6JtzfTd3Ykx2CSbQPQHWNq7AvMgK9Sb9te%2ByK2tjZ%2BxSUpfZr31EGfK4jk8y16RzaBYt8Gdbp6UuTCqzYbDBjqkAYobok7AnXO2Hy5L2ns1ZSFwJ9KHrj8aOYe6ntuzImInQAYZRb4lzpWqY6XH00JIcTZuAS7HVduM3oB10V1ALCzSDFHlB3NKwm5nNTHmiV8NpebfI1K1d2Nsn4US4MfEpxo4QnoCijzmjZVg1GEyBOZbYG22GK0xK3xgIzh5haf1sXy2OCJJRE5kAatdkFunOhEV6DkGm57Q4U3F1u2bY5eCPUo7&X-Amz-Signature=a9e37ddd80eaced783eff8a64681321f8fce0e2b001432dd5986d9ea6c5164d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQGFWGD%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtxP6MWpErerWOntgs3b2V4LnK3zEH%2FZOUErdikkXYwIgHg1tJEJvtcnQBsaV3%2FzQFStdXg1uAnaICPIiTACz3DwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKUhxWJUXprqvEF%2FCrcAzkbhFNK6PdfIgszZXhOvGWZpckyeQzeLf9io5wImPcy5X1I9s5JjZsOmFp1h3eP7AJYid4bmFTSYUIDnWxYUkRxT787AugWw0lGSHxubwgEA2EMenspV29mIZ%2BJnf%2Fhf%2F0u%2F4yebhViFCkk5qxCHofOsfHG8%2BaTkwQ5YC%2Fm9kepYv4P8lStCl22Qtbqcp9w8nlhzfGrGr0IIyHAB3YVgcq3IsoA61D22W6bOro5ERLzq1aUeuULncdk%2B4qXOCUrRBcJC8fP0o85OaZIwFjWcTZ%2Foq0Je7tQpNwhvTJQgGLrbzcdzK39J0Ss3H2t%2BH3%2FvKUC7FEJy0Fpg2T1VJ73itn1cOLH%2Bj0gQlsy6rdYRl7aqQQA%2FjnYKnEOh4c6oQTkF3YwJ3U1SF1L52cqsc5alc2m8UM49%2FaCogL3Cze%2FP5pDOsRf7LwXph%2BDd2L3iMmcPYKWiiVRsGAtS0OuYL%2B%2B1s2ZkzkfM0f2wQNYQQQHsbQhOopJqDzxoHtvdqn5sE4gM0%2Buq7%2FGTr3xLzXHHHAdVrqsqKvrO8%2FScwrxdHj3FOcCoC4Z3nP5kHxIcPV%2BkAK9TEj94Vuc61gerMS%2FJhxSO6JfgkY7mIdtt7p%2BPnvjFzu1frk8xFFpjlLoivLNMIjNhsMGOqUBjsmVojOSaIKyNFJD1%2FCkixsSsOw1QiYcwSQKQFgHR9s%2BfNFNgsyIYkC75chePfzg%2BVBPr80QOCbkfIzpZBge9q2If49i5QTUuTQvyUveoigaQMbgMsR9J388s7I3B6NO7EvlLUDUfxC5tkNZvsKcZglv8dhOn5mwTBX%2F10ktESZme9HrFaJzqF4mnY85gQAuQ45V3Tz%2BLlATyUd1C5e0ne55R3gh&X-Amz-Signature=2f6acd2d1644129373009ff97614cb1d43a80fa35e1f3148882300fd30a1271e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5WHX3F%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNdC09uG%2Bu7hTvjM28sAOD7MigO1J%2FFFV0vnGp5HgDRAiEAqP%2BgZlsxQ%2FD7sxNtCHNrTy2odZtm0i5Gcbe6LKy0YdgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr%2BVm2gBviPZJCP2CrcA6keQ1ipRuq9MDlCNQ99my%2Boke%2FJjNT%2BP0pG%2BJrEBRXGnKdFK2x3TjhTndR9Pj9HHrfpQR%2ByGROxRNpp2f7%2BnTlOJeCK%2BHwEY2QHBMAZcr6RlOlnHtjQt1F9JaeDj9j45g7f0jfU4oUrex6uqJ509TMzp7Xr2oF1OYEsFITw0iWoFvJETV%2Bqfd0opaCspbyKgp%2B2H2yQhK6LYOj%2B37R4iWAxrVpDavUwEsXQJd1N0m%2F7WxTbY7lI7xko3gjpFb2gukSR1YP%2Bs7IjLZwrK7d6a2nvVx7XOwr%2FbVlCiZVqkEO0jvlogK3WTmWZk%2Fd7oeqJnqzhcbedG8sLRhp%2FYuZrxRe3NUjWBv%2BcXt4feRo7zRe9KmYxLVhMeWR6L2faMTG%2FMzOVVDX087R1a%2FsydB4vvifT%2FJ94nK3B6FAeVrVxrqytlkBSrUpyJr9vQRHodPkbb7m8MVFZFidOkBrloonRQUPiaMu7xkXB6ilowF4o33O6nYDmX5v3ugCNimgNTAVjholteMw7441023d58pdz9czB69CIGe%2FyQ1KIsnNz442B22bg4XLk089e%2FOyNM75Voy%2BR0CyOgiOUUgV8jyDVlzexShMfGuh7G7jVFYcuCrfV2zbImYYOdOFmSAR1MKPNhsMGOqUBWJSWLY8DYClSrhPpuWAxtSaxzMU08qJDfetYulk9faUF5qlrZd2NX8QUYyZfF0i7hngjwMiIFIIVBbctwpOsQej2VuPim4OhM6V1ZDue11nkrfNSEFp69jQmwGx9N6QaxLzWC3tPjcXDysS02g%2FrHRfYk8SlwXbS6EBoIy7Xl%2BCehIFgttLxaYVOBMAGetCwgsmQg5kvoZL1nY9GoYZeZSkhWEcm&X-Amz-Signature=4537c74e0878e63ef5f43a8691ee31904188060785a197deebc52e8ae421cf94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JYZALA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc23W6jziWUPGOOm6dO3UQ33n4WA%2BYBB%2FCD7fTatNEPAIhAJuG0BvrY47LOOCJq5Ln8uChqHOllyRh6AaX%2FsIz6jlnKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUxvIbaUcW4fFwDU4q3AMv%2BvUzUYy9WQ5EpD8eUpLfVnNnMF%2F1OHqOAPM5YyEfcQ4qd3ORG%2BXF9QqdLXq3MCk7PdCsu5VRwgGKMV5EambhdZ%2Bjs9b8Ypuo0DnavQK70FN2s08vbK2UTFcVcKCPqmcsPIxegFcjdsMgrk0wm8%2BUfhV6XDQQTmGF8SErfi0qFCW7xXHyozWEqEk1W74FXBGF%2Fj7XWxlbSBCj1lL1l7CPq86aYY2ZwiSb6fOFult0YK5%2FH%2Faz92un50eve6r69wUjtQbbeSbuV%2B49waX%2BuRn6xaP9V%2BkW0on%2B2likaqQhXClEtX147Vy%2F%2FVeZABWzXh3H4PZOBV1bx16FY6mw4EIdQi5gj%2FHIJpxLQIAmumJ7bS0yEHCbxIN7YuE8kFu%2BZ8P0HsviaCVqTNntiy7wpUwH5WXd5vpW13Kb3S4xL0Ja2dq%2FIBtusoAEepsOFuzpH64lYAMXGcVlwouoBjDMhMPI36JMeYkW4WVktm8Qnh0CAk1V3%2BL%2B1KkX%2Bri6Hj5wH%2Fezcd2p0e0mGKAcWglTReiSUXebxTxW8kqAO%2FhzgVZL18dja6JtzfTd3Ykx2CSbQPQHWNq7AvMgK9Sb9te%2ByK2tjZ%2BxSUpfZr31EGfK4jk8y16RzaBYt8Gdbp6UuTCqzYbDBjqkAYobok7AnXO2Hy5L2ns1ZSFwJ9KHrj8aOYe6ntuzImInQAYZRb4lzpWqY6XH00JIcTZuAS7HVduM3oB10V1ALCzSDFHlB3NKwm5nNTHmiV8NpebfI1K1d2Nsn4US4MfEpxo4QnoCijzmjZVg1GEyBOZbYG22GK0xK3xgIzh5haf1sXy2OCJJRE5kAatdkFunOhEV6DkGm57Q4U3F1u2bY5eCPUo7&X-Amz-Signature=7d369e0cca55664fe6144001c5d934b757d8038d860480199152622da0dbf5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

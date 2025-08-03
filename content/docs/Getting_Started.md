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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ642OSK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFATCBRHjHsAoUbbMFT%2FeU2vUSZzI%2BCmN5wT0Bh227shAiEA%2BRFvdb%2Fn%2B0bpQWgOvNLcafpiIU6UVGmxXPm7hG1qtT4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC41IpK5vfAj0K5rUSrcA%2FEpQPUBaZQ5QGADin%2BCGsQJQ6AN7soJjFnmfsS6DydiWw3qSYsQQKUx471HLstKTg8wjZHIWSUffLDV57D9CcZOTjXo%2Bv5q2ttRqAvyXSqedYBwtuhvqEboBYR%2Fp2%2B2Em7z%2Fj%2BgRfCqu74wSBH%2BftEuPyHgTV8zm5%2B1FiI9cTlDYkcsGMWJtODkvAzUlzux1avYskf%2BevuXp%2B%2BHwZT%2BWUp0KxsQt6vVghY9A6Wi510A3HYbiyycffWJ4huWquZFk9V8xDHItAecpcEkEuVaE0ocaaJV1rwoSDbtLmND5uOOK8D0aahzm8lQAxiwoE1te0bMkmeuJmRU3J%2BO2otLLYbNgPKctJ83koza30CCqtmwZv5R%2BY46Kb6599nROfErrRYJ21bU372kN2R7T%2FAuK6Gl6u%2F6oPExNe8Lbs0WPyPOoz%2BKRcw7FpxI32rhLtitQs6dMsyCEE7sLDYfVesisOvrtRbQcDj0gKLacHZT4ftMAI3OA08JRQdfTWQZjLUPsoer17Crer31gahO08RUFETXKYjUkIXqgk71FxwCWrXHsbuKxqR%2BI3%2B7f%2Btj43bngKVYcGH%2FPM1%2Bnt3iBX0xTW0fMA6q9MJ1xyfzLzqF%2FJ1jMrjITr7HDK5LH%2BOkMPCqvsQGOqUBzVHfQAEDUEX9xAojEVThKN2bJFmJq8DuQU1sY5mhD0JOCeRjuEYx5lZvJCP4r3RTyRfTSaGbDzo4h%2BJ7ts0hKYrTFyOh3f8ftb1czbT6ZZJdGRXqzYYEBXN2o0MHvRD2Nc%2FkyNsqtbLy7qwUPBPICqdNsNKVcXQDMPOa%2FCq%2FOc%2Bh4dqaPTvAqaA7fACwyUUxqwBTDfsLG%2Fw2GkCRkJjvXdKTcq4r&X-Amz-Signature=2f4fc45debe62c09809209e28a3715e9f27f462ce4e84d84e5f4cddd8bd57081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ642OSK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFATCBRHjHsAoUbbMFT%2FeU2vUSZzI%2BCmN5wT0Bh227shAiEA%2BRFvdb%2Fn%2B0bpQWgOvNLcafpiIU6UVGmxXPm7hG1qtT4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC41IpK5vfAj0K5rUSrcA%2FEpQPUBaZQ5QGADin%2BCGsQJQ6AN7soJjFnmfsS6DydiWw3qSYsQQKUx471HLstKTg8wjZHIWSUffLDV57D9CcZOTjXo%2Bv5q2ttRqAvyXSqedYBwtuhvqEboBYR%2Fp2%2B2Em7z%2Fj%2BgRfCqu74wSBH%2BftEuPyHgTV8zm5%2B1FiI9cTlDYkcsGMWJtODkvAzUlzux1avYskf%2BevuXp%2B%2BHwZT%2BWUp0KxsQt6vVghY9A6Wi510A3HYbiyycffWJ4huWquZFk9V8xDHItAecpcEkEuVaE0ocaaJV1rwoSDbtLmND5uOOK8D0aahzm8lQAxiwoE1te0bMkmeuJmRU3J%2BO2otLLYbNgPKctJ83koza30CCqtmwZv5R%2BY46Kb6599nROfErrRYJ21bU372kN2R7T%2FAuK6Gl6u%2F6oPExNe8Lbs0WPyPOoz%2BKRcw7FpxI32rhLtitQs6dMsyCEE7sLDYfVesisOvrtRbQcDj0gKLacHZT4ftMAI3OA08JRQdfTWQZjLUPsoer17Crer31gahO08RUFETXKYjUkIXqgk71FxwCWrXHsbuKxqR%2BI3%2B7f%2Btj43bngKVYcGH%2FPM1%2Bnt3iBX0xTW0fMA6q9MJ1xyfzLzqF%2FJ1jMrjITr7HDK5LH%2BOkMPCqvsQGOqUBzVHfQAEDUEX9xAojEVThKN2bJFmJq8DuQU1sY5mhD0JOCeRjuEYx5lZvJCP4r3RTyRfTSaGbDzo4h%2BJ7ts0hKYrTFyOh3f8ftb1czbT6ZZJdGRXqzYYEBXN2o0MHvRD2Nc%2FkyNsqtbLy7qwUPBPICqdNsNKVcXQDMPOa%2FCq%2FOc%2Bh4dqaPTvAqaA7fACwyUUxqwBTDfsLG%2Fw2GkCRkJjvXdKTcq4r&X-Amz-Signature=88730c7ec82ee56687fa4dc86987cb0cc7f7c85d018e32a9039729a43bd8fd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ642OSK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFATCBRHjHsAoUbbMFT%2FeU2vUSZzI%2BCmN5wT0Bh227shAiEA%2BRFvdb%2Fn%2B0bpQWgOvNLcafpiIU6UVGmxXPm7hG1qtT4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC41IpK5vfAj0K5rUSrcA%2FEpQPUBaZQ5QGADin%2BCGsQJQ6AN7soJjFnmfsS6DydiWw3qSYsQQKUx471HLstKTg8wjZHIWSUffLDV57D9CcZOTjXo%2Bv5q2ttRqAvyXSqedYBwtuhvqEboBYR%2Fp2%2B2Em7z%2Fj%2BgRfCqu74wSBH%2BftEuPyHgTV8zm5%2B1FiI9cTlDYkcsGMWJtODkvAzUlzux1avYskf%2BevuXp%2B%2BHwZT%2BWUp0KxsQt6vVghY9A6Wi510A3HYbiyycffWJ4huWquZFk9V8xDHItAecpcEkEuVaE0ocaaJV1rwoSDbtLmND5uOOK8D0aahzm8lQAxiwoE1te0bMkmeuJmRU3J%2BO2otLLYbNgPKctJ83koza30CCqtmwZv5R%2BY46Kb6599nROfErrRYJ21bU372kN2R7T%2FAuK6Gl6u%2F6oPExNe8Lbs0WPyPOoz%2BKRcw7FpxI32rhLtitQs6dMsyCEE7sLDYfVesisOvrtRbQcDj0gKLacHZT4ftMAI3OA08JRQdfTWQZjLUPsoer17Crer31gahO08RUFETXKYjUkIXqgk71FxwCWrXHsbuKxqR%2BI3%2B7f%2Btj43bngKVYcGH%2FPM1%2Bnt3iBX0xTW0fMA6q9MJ1xyfzLzqF%2FJ1jMrjITr7HDK5LH%2BOkMPCqvsQGOqUBzVHfQAEDUEX9xAojEVThKN2bJFmJq8DuQU1sY5mhD0JOCeRjuEYx5lZvJCP4r3RTyRfTSaGbDzo4h%2BJ7ts0hKYrTFyOh3f8ftb1czbT6ZZJdGRXqzYYEBXN2o0MHvRD2Nc%2FkyNsqtbLy7qwUPBPICqdNsNKVcXQDMPOa%2FCq%2FOc%2Bh4dqaPTvAqaA7fACwyUUxqwBTDfsLG%2Fw2GkCRkJjvXdKTcq4r&X-Amz-Signature=3ce5897ffabcf45d2629d98023ae8a4be620e70ffe9805c65290bfe9ebe66a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4SY322%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPbOC1s03GgWCiNqm8znykaYytVIqQ%2BlDyzccUQe%2FlVAiEAlzCwdFXfX4%2BMSCpp2rtqVzCmDNnbDBvy6PI38j2T6JYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIAq9H4ONMVkvAE7yircA3Gns7MsUDECGac8FNsLNnkUXKX0uXMzRPdZ0A3wEtPhGYrX7LUS7ufcStnOp1qWwC32n0ixs0UOPPZYhuCgq%2B4%2BPZKo5x1RnxzQAJ%2FNG%2Fs7VI96wRihNm%2Bno5Nyr1uJsa5GcxrIflEumCHl0RZMjmi4X7vR2dbxM8%2F4L4SeKlt4MVQTeyh8kkZy3ktksGSY7SoL%2BEAB9HajoiPkSimUHttgShUQCxOCOpfjbT5otgtbYFbtze4VhC2jJdNKHt6lcM4xKIRKIY0Wj4Dhyvy5dOtMVUjYiGKK%2B5oK7bbuaSeHZUxqhQggf0zNZ2556pm%2BK5MfifIUXkQVuib3HIystLAhtIYbpwgLDHmHuIhKAtb9UUe9obCncS6mxWTKbHWf9dfsC%2Fsb9e7CfB2VvyegmDH0plBNqdJG5nEOayP8WGLLM7rhl4yCDVGj0Ng%2Bgmug71gscNqNjTM4B8dFLqyQaKd65js%2F6N36jzzWPndKQQoWTRcnd5t8%2FAk6p%2FpFsFnFwxXBOw%2BV8IjAQGumUFkSKSxCy7E%2FxLueVcFOHqyBmXDFSm18r%2FMv%2BBUNSRX%2B6QIHbUaqJBf%2FCx2jX8hqvD1knRHanTP52Vz30hpPC%2FFVJNQtulQUzPJtLGj48opVMJarvsQGOqUBBDBNanT0b%2FL4kYqMth0TteRyAmn0G7DdjOX7Xz75aeOCy256gwIh3QnKK4s0mVT6PMXkjkvyBrRDkzo4aY8YijaCrdrAAxYD%2BGatUffxOqn4%2FsmTeHarVeCfsE7m5pHemyAISgriUq5CbKmVHIr3OQUoXYE5Odwz0cAF3JzgGf%2BQUZ7DKzeXVDVWmBG%2BodG9Te05V%2FZnTkqz1UkK5OwnLYnsafBP&X-Amz-Signature=7e5dc8b2b3714968924eb54ed149ac01aab24e799f902747a4206e26daa3e453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2BLT7V%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGIWuxmcQbuVL5aPPxXvftD%2FRgqyagLAeNhoOdXuVmZAiB4nff1GB6mevEf2TtXmUFKg%2BO5R%2FJKv2dzGTfh7vg9pCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqnJJR%2BM%2Bwu7n%2B2CoKtwDw1upZnHOngPR0DQ3jWxpuGsT6XVrud02CYE0vDzWLpW4Eb8mK%2F%2FQn3p0qzsOWM6zc3LXfxufnuQpRQiqmdiZiBCb6TjEKxD2%2BNK9RDwAeKY6oavnvgNoPxxrN0KWWjXwAtmGjvSs%2BKpwzQf1s49BqfUrGHShbQHwfrpi8Xwyo5Zdgv%2BaJFXoJZPVnOG9KPnJvyr53hnrxqoTbBMqKeFocEPPFOJqk0xUwRz4bzFxKK4PMVuEi82CdRFSTo3WUh6Bm30Ra%2BwlSiqzq%2BR%2BJxGAE1xldL0ujUfwc7eaBPWNWnrmuTau0VEGb%2Fg3he9cKiQkW9eJjVaFOPzBOw1occ3nu2d%2BN%2F0hoJmoHF6qF9SSPHdtqktaHc5Lx9kiTMVY1rFM6oFOHHqExqxFKMcl6KUBKSMZhwTkQMkHVYM4zhtXKHGg2vejAyOM7FEBZylm3HcAdTLn3%2FWFsZ2aH7WTmDdYjo4EDk24vkKZtJHc4nnZIi8actuWzPEZ3OIw5M54BZfALCrrBLJEF9dmwJ8OLNHesPWKTiIPR%2BswNV2IL0gRliQNPQtezLxjZ1lR9C1TCptwF3e7pCYhNUfczv4ud8rHn5racQbTI6W078kVZg511fMDq88fS6PIv5YUrGQw6qq%2BxAY6pgEidfyRtEPGg50juffzfj1g3OLfiNPE2IgQ%2BirVUgnSXfS69L7lynFzULRiIFB7lfCRKV65rXyWyfye%2BCEn%2Bqh1nPqT1S4rkr5bKp9NZ7xLCWepFhzkGh7meiSyJi1Rem7WFOoo9xKb5ZtkO0vUNbrC6A2XbZy5bb7ndFqGP1JVdgkDhuimLOaIOv%2B6SEs5cqFaNgc3hnLciBCCMja%2FuEK%2BtpuMouRL&X-Amz-Signature=1a341c88e5e7ed205557cfcaf464aea96afd5c979df67cb3bbf2ae5ea52486bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ642OSK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFATCBRHjHsAoUbbMFT%2FeU2vUSZzI%2BCmN5wT0Bh227shAiEA%2BRFvdb%2Fn%2B0bpQWgOvNLcafpiIU6UVGmxXPm7hG1qtT4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC41IpK5vfAj0K5rUSrcA%2FEpQPUBaZQ5QGADin%2BCGsQJQ6AN7soJjFnmfsS6DydiWw3qSYsQQKUx471HLstKTg8wjZHIWSUffLDV57D9CcZOTjXo%2Bv5q2ttRqAvyXSqedYBwtuhvqEboBYR%2Fp2%2B2Em7z%2Fj%2BgRfCqu74wSBH%2BftEuPyHgTV8zm5%2B1FiI9cTlDYkcsGMWJtODkvAzUlzux1avYskf%2BevuXp%2B%2BHwZT%2BWUp0KxsQt6vVghY9A6Wi510A3HYbiyycffWJ4huWquZFk9V8xDHItAecpcEkEuVaE0ocaaJV1rwoSDbtLmND5uOOK8D0aahzm8lQAxiwoE1te0bMkmeuJmRU3J%2BO2otLLYbNgPKctJ83koza30CCqtmwZv5R%2BY46Kb6599nROfErrRYJ21bU372kN2R7T%2FAuK6Gl6u%2F6oPExNe8Lbs0WPyPOoz%2BKRcw7FpxI32rhLtitQs6dMsyCEE7sLDYfVesisOvrtRbQcDj0gKLacHZT4ftMAI3OA08JRQdfTWQZjLUPsoer17Crer31gahO08RUFETXKYjUkIXqgk71FxwCWrXHsbuKxqR%2BI3%2B7f%2Btj43bngKVYcGH%2FPM1%2Bnt3iBX0xTW0fMA6q9MJ1xyfzLzqF%2FJ1jMrjITr7HDK5LH%2BOkMPCqvsQGOqUBzVHfQAEDUEX9xAojEVThKN2bJFmJq8DuQU1sY5mhD0JOCeRjuEYx5lZvJCP4r3RTyRfTSaGbDzo4h%2BJ7ts0hKYrTFyOh3f8ftb1czbT6ZZJdGRXqzYYEBXN2o0MHvRD2Nc%2FkyNsqtbLy7qwUPBPICqdNsNKVcXQDMPOa%2FCq%2FOc%2Bh4dqaPTvAqaA7fACwyUUxqwBTDfsLG%2Fw2GkCRkJjvXdKTcq4r&X-Amz-Signature=c76d44f256c2e5fdebcf0995d97b66e848a4b6e9b4e0f25a07aacad465ae1a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

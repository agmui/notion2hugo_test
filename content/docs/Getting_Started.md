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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HI5P6NI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZodbwqf1uZkrAqm7Rg1CYrK5HBPMfhNDxX28ZLugQbwIhAJ0nrjJqVeUwCG3UCWwWXLc6bpuxqaAVYAnbQBC0aB9hKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGHUuBtUGggNpPczwq3ANw%2BV2I%2FS%2BRgHkgwvjfQ957e0mDuqKypRY%2Fh9JkKUKCXpdwPxXyaG2ncWSghLXJorhjPr0YZraGdYwq3IN0HRpYouDreZViRkY0LHY6B5rCrkqo6YFctNxjZUfxMqzCrnlAVScpAlTv%2FVUHsPuBXhQM5rx7iW%2FqCKLqv5bmzFEeh5r89KbocNsUVtLpiNcgYgm9DJu78k44NKP%2FUpP1rsJu%2FdYx1YbiBQKorsTnnuJ1G2zTpOjV8C6MtqZw40ZA9v5YJH5hN5F4dD9T95czaAWNY25f8wLkBAgK8ufVJOwvUtv4qKBgsY0HmrCxPKadM0G8tiuEx54nvvaj13tGTd8JyX2dIz7kBpupihzKyyE3IJgvLU9p3zoGHllEZu3WXnBeVbfnVZAXpYfgB8bOKXj8F1TxCCoEj0ca1RZflA0NinL%2FULU%2FgaIfm4yfe8j3A91w5Nn6s3sO638HkgZupS9ChDi1bd786EarSK%2B7gENdZ5ZdY2n291SJjnBT37OPfzeR%2FH3YAUigQAARpqqarQttGzNNqC6n4inKDw2VdHMyXLCWT%2BlQpPS7yXkwdAEgN7bdQb6jJ%2Fu%2B1d7KnOetCV%2BFvMGAqaJUZUhE5OTEgeAEqrT6Xg0PecqDGlTdeDCO8tTCBjqkAWrd0k%2BTDIU2sQ6%2FVZWx1w41T2gxWyc6d5OVhBuDfN0%2BQ9LvzCcjTN4m%2Bgj81CS6jeUB%2BKGpKjazY5SPX7CAC1jIR5LeicAD1%2BzxrfYv4hPNS18Mj4hZWcaBUqcvkTqYAmO%2F8Fuy16yt%2BGCTQwCfscxgIvK7BF4uCd6cEhX7Xat3ODJQeL9B%2By5mImU42uKP%2BqTK5R5akCf298z6320alg8peEw6&X-Amz-Signature=756ad09129d2513d29ee81acc74ec8bb642a81d610d25fa69081282f606be401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HI5P6NI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZodbwqf1uZkrAqm7Rg1CYrK5HBPMfhNDxX28ZLugQbwIhAJ0nrjJqVeUwCG3UCWwWXLc6bpuxqaAVYAnbQBC0aB9hKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGHUuBtUGggNpPczwq3ANw%2BV2I%2FS%2BRgHkgwvjfQ957e0mDuqKypRY%2Fh9JkKUKCXpdwPxXyaG2ncWSghLXJorhjPr0YZraGdYwq3IN0HRpYouDreZViRkY0LHY6B5rCrkqo6YFctNxjZUfxMqzCrnlAVScpAlTv%2FVUHsPuBXhQM5rx7iW%2FqCKLqv5bmzFEeh5r89KbocNsUVtLpiNcgYgm9DJu78k44NKP%2FUpP1rsJu%2FdYx1YbiBQKorsTnnuJ1G2zTpOjV8C6MtqZw40ZA9v5YJH5hN5F4dD9T95czaAWNY25f8wLkBAgK8ufVJOwvUtv4qKBgsY0HmrCxPKadM0G8tiuEx54nvvaj13tGTd8JyX2dIz7kBpupihzKyyE3IJgvLU9p3zoGHllEZu3WXnBeVbfnVZAXpYfgB8bOKXj8F1TxCCoEj0ca1RZflA0NinL%2FULU%2FgaIfm4yfe8j3A91w5Nn6s3sO638HkgZupS9ChDi1bd786EarSK%2B7gENdZ5ZdY2n291SJjnBT37OPfzeR%2FH3YAUigQAARpqqarQttGzNNqC6n4inKDw2VdHMyXLCWT%2BlQpPS7yXkwdAEgN7bdQb6jJ%2Fu%2B1d7KnOetCV%2BFvMGAqaJUZUhE5OTEgeAEqrT6Xg0PecqDGlTdeDCO8tTCBjqkAWrd0k%2BTDIU2sQ6%2FVZWx1w41T2gxWyc6d5OVhBuDfN0%2BQ9LvzCcjTN4m%2Bgj81CS6jeUB%2BKGpKjazY5SPX7CAC1jIR5LeicAD1%2BzxrfYv4hPNS18Mj4hZWcaBUqcvkTqYAmO%2F8Fuy16yt%2BGCTQwCfscxgIvK7BF4uCd6cEhX7Xat3ODJQeL9B%2By5mImU42uKP%2BqTK5R5akCf298z6320alg8peEw6&X-Amz-Signature=2396fe3ebf61d23b9c96fa39fe07670e8670c494a32759c277705437b6d0072a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HI5P6NI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZodbwqf1uZkrAqm7Rg1CYrK5HBPMfhNDxX28ZLugQbwIhAJ0nrjJqVeUwCG3UCWwWXLc6bpuxqaAVYAnbQBC0aB9hKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGHUuBtUGggNpPczwq3ANw%2BV2I%2FS%2BRgHkgwvjfQ957e0mDuqKypRY%2Fh9JkKUKCXpdwPxXyaG2ncWSghLXJorhjPr0YZraGdYwq3IN0HRpYouDreZViRkY0LHY6B5rCrkqo6YFctNxjZUfxMqzCrnlAVScpAlTv%2FVUHsPuBXhQM5rx7iW%2FqCKLqv5bmzFEeh5r89KbocNsUVtLpiNcgYgm9DJu78k44NKP%2FUpP1rsJu%2FdYx1YbiBQKorsTnnuJ1G2zTpOjV8C6MtqZw40ZA9v5YJH5hN5F4dD9T95czaAWNY25f8wLkBAgK8ufVJOwvUtv4qKBgsY0HmrCxPKadM0G8tiuEx54nvvaj13tGTd8JyX2dIz7kBpupihzKyyE3IJgvLU9p3zoGHllEZu3WXnBeVbfnVZAXpYfgB8bOKXj8F1TxCCoEj0ca1RZflA0NinL%2FULU%2FgaIfm4yfe8j3A91w5Nn6s3sO638HkgZupS9ChDi1bd786EarSK%2B7gENdZ5ZdY2n291SJjnBT37OPfzeR%2FH3YAUigQAARpqqarQttGzNNqC6n4inKDw2VdHMyXLCWT%2BlQpPS7yXkwdAEgN7bdQb6jJ%2Fu%2B1d7KnOetCV%2BFvMGAqaJUZUhE5OTEgeAEqrT6Xg0PecqDGlTdeDCO8tTCBjqkAWrd0k%2BTDIU2sQ6%2FVZWx1w41T2gxWyc6d5OVhBuDfN0%2BQ9LvzCcjTN4m%2Bgj81CS6jeUB%2BKGpKjazY5SPX7CAC1jIR5LeicAD1%2BzxrfYv4hPNS18Mj4hZWcaBUqcvkTqYAmO%2F8Fuy16yt%2BGCTQwCfscxgIvK7BF4uCd6cEhX7Xat3ODJQeL9B%2By5mImU42uKP%2BqTK5R5akCf298z6320alg8peEw6&X-Amz-Signature=5a3004eb8921379466935b9086bca07917b92894bc00641edb79956dbf0c6947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDAXGPX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhn8%2BdAP2qYrK7OQytmIPw6AoRS10wiUR7eQ69oYspgIgfXaOLFG3%2F%2B0xi62uySsMr3QIbUd6pAtxHTwTg%2FfyK4IqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDd4odzurNXqq5H5QCrcA4Ei7Julhsukr3Y8sKj8T2w5LQ5PiFTia0%2FH4LIEKkHuJInGPLto490REvLeXU3lv4vBquoqBfShpz1p8%2BLKyLLjcN85YTQnu%2F%2FmfSabNauFUKI9GUJvK%2BgIvw36RrX5ITqklNkH5eGqYNLPAwuvBW%2BPR64TiGhom7gyo%2FMuLVYEV3VQUtLooj0exPHcwQEWRL417x9yi%2B8ls4GfKXfnefLkJBUW3iBLO19hSQHluSO4d1xdFlvU4d8WFdbT1tX%2FJqj3SQ0M13ukBe8Yd%2FjUivk9oTPE5XbBuGBAk%2BKB7vsCfZRh44duNUqTSMK1MbdYKQYOKD95NNki18SgQhBgEEzSax9wFn4j1yUQGqu5HxMHRvoAz196EDxmbAOLMRJWXX7ILyNxFp2mkSu20qUYym98Rp13Kls%2Fx%2B3ooKzB8Jjv845ayZDXovrlbY36l6cqj6YVE7PSwnjxPM9U4Z4X9DmCB%2FEc1GtT4%2FP%2FePMoWxCfR%2FFeOG30Gk1G%2BUvAR7DInPcK1Z%2BmWM%2FQLWKSl5YqmjE9zFdJuw5n7fZkvkDZGRSdC5V71n9qJLsfRHY6ZhFekBVi%2FoTnephGIusIrQNzBidUYw1t8%2FbIh7IzoypExEDHEE2dfyMDxiOfLJQ6MJvy1MIGOqUBBu8rjE0Ptca%2BqS54kXqzDPgIMitOR4t0a%2BlCv8g2D7QoUrU1qqs9GVWq2bXWTV4WYkXRByHwFPWt06UGrhxWvBujDd38uozdFqsP6CXc9yxY6rHm1V5KTkHPttZ65z%2FwGcxGXkwkawAJbfrKW0n%2F5vdZgDRY9uuqj3VNwYZLIqMxOWbCflezPmVWbVpi0wCKShIGKR7fRn%2FleeIgTT5O5Ge8esys&X-Amz-Signature=a217d3e925e4f6a201dcbdf4eb7bf09d6b44cbcd78cecd22765e21799690d66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYPTVTX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKP8nq%2F6tFjSP7uSkYIaxp7oxCKwMCarBHfaPieDHOIAiBGO%2FD2nInj2vYj9CL33ZfB%2BuFg23pZRRKQ1G8RjkQMyCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMltd9NNrpKTGZbgcyKtwDiGUOzFE%2F3E1erCDWIJItGWwP0N9ojOmOkhP8MR0TPn22Cd%2B5rp5%2FNgBADMhQDSRIbwi%2BUuVHhMTrKvwjvtpb%2B35kF0tca%2Bupgvp0qY430v34zgCxdSVCVM3K%2FjshKF%2Bb9ZGM%2FsmSzRsjDQVGSRlJMXtko2UQ7I1QrG%2B56YuTn7e7T1w%2F9fHNXXCBThjSKJMkENIsXr%2Bb9XLVWLrlOwBnA6phdIYL8k3x2lonSCqfs8FVfP%2BANsPS1RqxgKTK4cL3lzukPQLPr%2FEVreJJv49M99Kf%2FZqTeA7G%2BkqDMKLNu0B6D7ywyk1rQwFkpr2En4CzNTpMjcgabr9T0g6pksPpkAeS3hkPVSU90D6MXJFEUKerSOruMOA3RaLsL8Yyissd3R6lXwA8w%2FS2f1MAJVttc4ziLx0uIUSWx40g3tT8BPX1o8iiA9mN0OCO0UXqi5ccAykmeT0z5uF4DnU%2BdhLYVokB%2BwVF2FcESd%2BoaBdHisdKgNbRLOTzqZQ5q5v46ZfGsC%2BlhvqAH7RxP1Xy7tHPL7yAcalk0R%2Bn3PFML%2BpRHg17Xs%2FbTA6JBnGZnFfFKoyNwzdSHU%2BDJ5qiASLKgKdXFh19MMl3FKAlV%2FbMUhWBtdBmEU7cJRaGoJ%2BKHwIwg%2FPUwgY6pgGF4SczWgKRMWym%2FOQL7kznjcZIRqVHAB%2FfN4z1i%2FzpDkhSTEEmaOeImrsW5A42dC3iziuLQVdIC0K3yZgoJhcH0RyH4faWs8qqSq4Wkl17FmpS4UPu4kztau7TGSIgp%2B8sbOgHTfopm%2B6%2FPX7DNBYlGt1qw9P05XW1k0w9kNuRmg43GfOYzwF9pkmDEvKpu97vF%2BHbmoku0BKzIfNSJvwUEXwNXxub&X-Amz-Signature=ef1a39c7e6a03258190bba091b220fa77cc8122d99c143aeda267f7ebd89290f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HI5P6NI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZodbwqf1uZkrAqm7Rg1CYrK5HBPMfhNDxX28ZLugQbwIhAJ0nrjJqVeUwCG3UCWwWXLc6bpuxqaAVYAnbQBC0aB9hKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGHUuBtUGggNpPczwq3ANw%2BV2I%2FS%2BRgHkgwvjfQ957e0mDuqKypRY%2Fh9JkKUKCXpdwPxXyaG2ncWSghLXJorhjPr0YZraGdYwq3IN0HRpYouDreZViRkY0LHY6B5rCrkqo6YFctNxjZUfxMqzCrnlAVScpAlTv%2FVUHsPuBXhQM5rx7iW%2FqCKLqv5bmzFEeh5r89KbocNsUVtLpiNcgYgm9DJu78k44NKP%2FUpP1rsJu%2FdYx1YbiBQKorsTnnuJ1G2zTpOjV8C6MtqZw40ZA9v5YJH5hN5F4dD9T95czaAWNY25f8wLkBAgK8ufVJOwvUtv4qKBgsY0HmrCxPKadM0G8tiuEx54nvvaj13tGTd8JyX2dIz7kBpupihzKyyE3IJgvLU9p3zoGHllEZu3WXnBeVbfnVZAXpYfgB8bOKXj8F1TxCCoEj0ca1RZflA0NinL%2FULU%2FgaIfm4yfe8j3A91w5Nn6s3sO638HkgZupS9ChDi1bd786EarSK%2B7gENdZ5ZdY2n291SJjnBT37OPfzeR%2FH3YAUigQAARpqqarQttGzNNqC6n4inKDw2VdHMyXLCWT%2BlQpPS7yXkwdAEgN7bdQb6jJ%2Fu%2B1d7KnOetCV%2BFvMGAqaJUZUhE5OTEgeAEqrT6Xg0PecqDGlTdeDCO8tTCBjqkAWrd0k%2BTDIU2sQ6%2FVZWx1w41T2gxWyc6d5OVhBuDfN0%2BQ9LvzCcjTN4m%2Bgj81CS6jeUB%2BKGpKjazY5SPX7CAC1jIR5LeicAD1%2BzxrfYv4hPNS18Mj4hZWcaBUqcvkTqYAmO%2F8Fuy16yt%2BGCTQwCfscxgIvK7BF4uCd6cEhX7Xat3ODJQeL9B%2By5mImU42uKP%2BqTK5R5akCf298z6320alg8peEw6&X-Amz-Signature=8896bfa76a4413198d0e2fbb715148e181c762c78a76fc0b73ba39a9ca4edc4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRUU3AJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDZEQXCwZXdkIuS3UZYXQ51eBQH7J8xarNk4nzMlPv1hQIhANz5w0kzZYq1pwAzDQZd3mKZf%2BwKINZLN8MNQeHFaqC%2FKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1H0T8B4ovo0LwVroq3APYaTzBxHmmaqvFPRxc9A%2BkzPtFnAkIJobXiNdyyOKhyl%2BVh1oRZKzV9ax5R6dbuhHK%2FCGyiurmQeSyZyhbtud2y79VgTtBd7WjSeVi5VxQGLVSCISbBLLA8rLZYnSRg4U%2FPMz5%2Bfno1K4FOm9fpnsoI2T%2B%2BGy8p8Pfy60jMuX6i4vBpvMd6eHWe%2FmySnG%2B%2Bs8qfTEba1ewiSrNa4EM2yH9Y4wjgUhLvModAohs3UUGdFAHTzlh5uXz5%2BV4spN3odj9431PKi4mL1Y77Cl6I6ljPmZ58gut3Y0Sjh2Uy3ly7mz8%2B6rifFQtTWrYm93JIKcTvNZRyOEBhKRlOLI%2Fk2JQYa5ctVORpLxWusOQB%2Fy9IOrur4HfD53ZZdWodyL2LHjaCEYnVympej4IGA9ecPHqClV7YvktIh5WSqR62Rq7jTuv%2B4tgXjghtPE6%2BsJ6IS3nHrPGc3GTekpG66VUGSMcgbH%2FwyDMVTKOM3OUJxxqayonddV84uT5%2BhU3k3VXq41Z%2Bt7ITvaiRuS%2FeJRYkH%2FVLSwrCQeKyBs0vtnSEL1rxqgANHSU0Th4ICP%2BV3JJxLmlf%2FPSuAicueC3lJ9FRezcBJaXSWp5Dh51jCqHopJJlzFKUMKmFP9kDu09qTDZm%2BS%2FBjqkAYdgtWyLnFK0DJlLW340XrWDBcWHMRsqjK8v1mtm%2B3XSrWxDlg9s%2FHOj%2FGMZNTVyCcVYbEPoB%2FMrin7BnbGeBQe1NqXw3kSxsMuqn4wLK6XEH2k7HQeERIjI1b581l%2F%2FfNxfoUBk%2BVRbFZXKgaZHO7B1F6SzqrFTb2snSqgUJSx4ev6vJ8LJNkn%2BRxYk8KcEsWyaE%2B40L8udV7%2BULddz7vw2DOYE&X-Amz-Signature=7a322432b80b90daf6fd5f0f6ec628b2ee7a454367b48caa91d545d1f1659cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRUU3AJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDZEQXCwZXdkIuS3UZYXQ51eBQH7J8xarNk4nzMlPv1hQIhANz5w0kzZYq1pwAzDQZd3mKZf%2BwKINZLN8MNQeHFaqC%2FKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1H0T8B4ovo0LwVroq3APYaTzBxHmmaqvFPRxc9A%2BkzPtFnAkIJobXiNdyyOKhyl%2BVh1oRZKzV9ax5R6dbuhHK%2FCGyiurmQeSyZyhbtud2y79VgTtBd7WjSeVi5VxQGLVSCISbBLLA8rLZYnSRg4U%2FPMz5%2Bfno1K4FOm9fpnsoI2T%2B%2BGy8p8Pfy60jMuX6i4vBpvMd6eHWe%2FmySnG%2B%2Bs8qfTEba1ewiSrNa4EM2yH9Y4wjgUhLvModAohs3UUGdFAHTzlh5uXz5%2BV4spN3odj9431PKi4mL1Y77Cl6I6ljPmZ58gut3Y0Sjh2Uy3ly7mz8%2B6rifFQtTWrYm93JIKcTvNZRyOEBhKRlOLI%2Fk2JQYa5ctVORpLxWusOQB%2Fy9IOrur4HfD53ZZdWodyL2LHjaCEYnVympej4IGA9ecPHqClV7YvktIh5WSqR62Rq7jTuv%2B4tgXjghtPE6%2BsJ6IS3nHrPGc3GTekpG66VUGSMcgbH%2FwyDMVTKOM3OUJxxqayonddV84uT5%2BhU3k3VXq41Z%2Bt7ITvaiRuS%2FeJRYkH%2FVLSwrCQeKyBs0vtnSEL1rxqgANHSU0Th4ICP%2BV3JJxLmlf%2FPSuAicueC3lJ9FRezcBJaXSWp5Dh51jCqHopJJlzFKUMKmFP9kDu09qTDZm%2BS%2FBjqkAYdgtWyLnFK0DJlLW340XrWDBcWHMRsqjK8v1mtm%2B3XSrWxDlg9s%2FHOj%2FGMZNTVyCcVYbEPoB%2FMrin7BnbGeBQe1NqXw3kSxsMuqn4wLK6XEH2k7HQeERIjI1b581l%2F%2FfNxfoUBk%2BVRbFZXKgaZHO7B1F6SzqrFTb2snSqgUJSx4ev6vJ8LJNkn%2BRxYk8KcEsWyaE%2B40L8udV7%2BULddz7vw2DOYE&X-Amz-Signature=f116480ac1c5f9f8d453b47d46465abf8c85ab652c88b19f63e43ddc347ad716&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSQFNM4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIB%2B2dLeeqqUuEKP6CErbsjbvP1i9PogkZ2Cuwm8HOKYrAiB8N3t%2B4x4jafmuv5Mw5nl4tOjiM4E5UFR61js3t5%2FHaiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTnlyZrZu0aoOO209KtwD2C5MI4kQWwsz5vyYUZ348cR%2Fp%2FK18Bl419IcZCr0LxVH4t4ad3pJQobutgNgGqb6eZ5kBBUSMIs8h5Zxd4OqT9eISaSME7PbXyP801H8gUswQ7Ojr%2FhD%2Bl8srK2aCZ4lHJDFN1Pi0CKGyg4q3n0QovgYHigklDOG4rTSKvShAdn0DSRtXMxzoMrimRTrb219LV8PAX5ziClPQ%2BBdUoQwRTimH5f0K5lzrhfdC0ePBUQR5V%2FOzcH3S2%2FuNShDDBzxZryU%2BXD%2BAxxbE%2BiD0dSMNFpMypqlzbaPjboIHGjlUABGBKVhMWGlen7ZqOc8dn9UHgcABWtHT94PhPkLs0w%2BvEgJCRM1rJ3zBW%2FRH9GC40X%2FZ6xYQvwfK1dNE0lX0gkFpJInBCU%2FmXy8Y404nQj94uBJzvBcpXU4a%2B8W4BzXcxJzNb4EdGSFl4O%2Fw0zPNeaO7iH%2Ft%2FxXMoiIp%2F2PDVx1hy0RWZCtvd3wRaEKgbZhgovd3c14nEO%2FfDE1AnLWOahJAP00o6IaIaHPgRz8lgY%2Fr9Wmy2CmuqhNFrRDMclBKUoFPpYSvdIKqdwfUfHi6IgGUD3XKXYA4Uu38XnqQl4lOJcXBBhhkWCbtyrV75JPRiwtse94rrRbSqiyIUwwuJvkvwY6pgFXa9RhElno7zk1MhcFxWXSFS9Z2DCJw6JbceAWU%2FaLmAUa9IObAXoEaIjDt8bADeSLer%2B8cvIH%2F3hu7y3Vm%2FByWXBi81wSc554hSFSIywt0e7qyE%2BVV3W1JGqkjFI%2FzkPkCVhtbs4WBqYKSaaykTYKe%2FoAK3ct50RgyJVDC%2BiGnl0TI6gZr1zuZKJvXGTmIwtKen4EYAP4h7NYUdWheb5ru0O4EP3s&X-Amz-Signature=f65ed47e92a1fe32c9888988db26382eb0f7a1914018a810af1586a683eee75e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMFR4UB5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDBm6F2z0wo%2Bbnw9rEu3KXWJ%2BEKtcNLILGKOgp0KbT%2BIAIhANXqRAFjk2egm3%2FGGTdbPIP1%2BQhXi6LqkaEF2pMMg%2B45KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb7xUKSQNlSTzMvSgq3APpMSFWHsWUgYgZj%2BrV8%2BHDNCgFpfUmN9WFMp%2B6f761sn74S9eixlLacHcHA%2Bl1K3CafMxlqP%2FT2cCvTOtNdNSGJrdQ17Dz8FCrPPp6VCDsVEAqGCATtdWQ2KI02g7nolq7Un4D18KBYr9vbZXbJSehsYvFVa8HM7D0WSc1htP8XniGipw3mLf3s6OVjZe4SzA4vmmd1d%2B36RXG4upeJbUnFx6ZtVzq5JI9j5Mm5dcztchhZj2eQTtlSADMtcd6fVOio%2FO148KIQG03rXvJo4a0hHPAdqbDUrKtR%2FIsrqH3XSv1wOC4FO6AL5LycfumxU0cMlHyRn%2BRu4Gux8A0AyyVmUF5vpgOmwNQftizQRKTg4v53dWWrP8u17kG9i2XtLcS1hfrwIpJfG7NbegVuwJfsPAIQC0sOWGTA7t2VSk%2BpF0lAn4H8BncwRd1rR5MircXAvnXjAdj1KE%2BQYkBajagKfy0pc3KhvZC6OrMhKpN%2B6fU40r4iwQrivsgRk%2FdmfA5U%2Bbk%2FuuED063oTVwTUja39q07Z0BhqqswT5jtzW4UWORoZFZiZ%2BTyEMlM6iZn%2FEQtOEVgaIzVPJ1%2BKIY12GQfH%2FCvDdxB2Iao%2BzetnkvNraj8VaAajXJokSBXzCxm%2BS%2FBjqkAS0PwFXoc%2FQvy4VY7xk1FBZ3tdaoa%2BLUfxZsW7BzyDJZcDEN%2Fm1rR19zXUJChq8GffN8EMdJHU0Ww8DK5mZuwzCGQ6%2B2H8TfgvVoXdid7EOLOIZvh%2BLTyvtOj5t6NYDrT3WUsUjM18sgqO9QCUYfC502V7IdWmxdxmbTpk85LM8n8kY6hG%2BMpdOb2kX7q9vlrTS917eQvPoVdxRtIbgEr77RnHmG&X-Amz-Signature=1c1f21c2686a01bbc22f78e9eb7b024aa56686ea9bae83bdc8bfc2be831c7b47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRUU3AJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDZEQXCwZXdkIuS3UZYXQ51eBQH7J8xarNk4nzMlPv1hQIhANz5w0kzZYq1pwAzDQZd3mKZf%2BwKINZLN8MNQeHFaqC%2FKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1H0T8B4ovo0LwVroq3APYaTzBxHmmaqvFPRxc9A%2BkzPtFnAkIJobXiNdyyOKhyl%2BVh1oRZKzV9ax5R6dbuhHK%2FCGyiurmQeSyZyhbtud2y79VgTtBd7WjSeVi5VxQGLVSCISbBLLA8rLZYnSRg4U%2FPMz5%2Bfno1K4FOm9fpnsoI2T%2B%2BGy8p8Pfy60jMuX6i4vBpvMd6eHWe%2FmySnG%2B%2Bs8qfTEba1ewiSrNa4EM2yH9Y4wjgUhLvModAohs3UUGdFAHTzlh5uXz5%2BV4spN3odj9431PKi4mL1Y77Cl6I6ljPmZ58gut3Y0Sjh2Uy3ly7mz8%2B6rifFQtTWrYm93JIKcTvNZRyOEBhKRlOLI%2Fk2JQYa5ctVORpLxWusOQB%2Fy9IOrur4HfD53ZZdWodyL2LHjaCEYnVympej4IGA9ecPHqClV7YvktIh5WSqR62Rq7jTuv%2B4tgXjghtPE6%2BsJ6IS3nHrPGc3GTekpG66VUGSMcgbH%2FwyDMVTKOM3OUJxxqayonddV84uT5%2BhU3k3VXq41Z%2Bt7ITvaiRuS%2FeJRYkH%2FVLSwrCQeKyBs0vtnSEL1rxqgANHSU0Th4ICP%2BV3JJxLmlf%2FPSuAicueC3lJ9FRezcBJaXSWp5Dh51jCqHopJJlzFKUMKmFP9kDu09qTDZm%2BS%2FBjqkAYdgtWyLnFK0DJlLW340XrWDBcWHMRsqjK8v1mtm%2B3XSrWxDlg9s%2FHOj%2FGMZNTVyCcVYbEPoB%2FMrin7BnbGeBQe1NqXw3kSxsMuqn4wLK6XEH2k7HQeERIjI1b581l%2F%2FfNxfoUBk%2BVRbFZXKgaZHO7B1F6SzqrFTb2snSqgUJSx4ev6vJ8LJNkn%2BRxYk8KcEsWyaE%2B40L8udV7%2BULddz7vw2DOYE&X-Amz-Signature=75917d5cce662218e19c62b5e85a5c20fd8004c04893c209ffb5edc25ca77e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVX2POH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDR8pfdf%2FxsR8jvzlLt6QFSZfRjE%2BIfrHvJggk5UNo9OQIgIMR3YAE%2BeZHOgpfqsGijGE6IckRKTp%2B2ZQkpHm8RDC4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMhv%2FMnaWWfTKcnjsCrcAwam6oURJmdO8WrQKBGbTOm0mBBj%2B0ZLVNvLWHlqiPXrXh9%2F2BfWJ3mI%2Fa9O6Nni22Nl1HDgLed9fw2rgYlQ9WHA4%2FHn%2BCQbw2Icb6I2lm%2FpRy1Cp5yps7tZn0BPkA1LaLtMJmUTtYaMjNp2yPRpB6ycWg9VUCGXm5eKLc5E9aqXen%2BHXPrpeq1%2BL4%2BYWbhuH2QCZjMXNx50sZANDiiKu4THp%2B%2F4noo2ljg8cxxrV3on52SHWFQ1Qp87d5PFIcgPS91A4navh9Davo2YTOK2YmKcNyWhB6EbvgAq3rjrJE%2F47OuDz%2BEM%2B0r97xc0ELt7C%2BflapSI1a5OLFts3pRH%2BWGTffC%2Bjj90O6vCBQwA16J%2BHpj%2BVMe7SiYfmNRyBKpmhTL0Tu2v0Ouemz%2FqjbRoeRJXYp9d%2FURkMf%2BMq3gYrk0sMzO%2FTG7nFBJHo%2F9V48kFtaCfYatWTl0M7g2D4ja6PXAkj0v7MPMXF%2BjRc3OK3q6twIlpUrFaVB%2Ff%2Bm3Nx%2F%2FLiHkw%2FhLbRwTFuzzmnQUb7ELiFBK0N42ssBFHcVBAdXu9xo%2BC2s8B1vV%2BRFdosrA5nZWpoBCL3kX2DOQIW4sbK9o5Gd%2BCJRz%2F1arY6AutVv60ZW%2FkPavcFsresInRMMycjMQGOqUBaHmRTkGn7gl1d4tN%2Ffsew7Ml6wUxfHBQ3PX%2FZQIka7W1UG%2BsV%2F39xSsyya5iGBOwWOz133wrLIdNNVzuUoddSn7qC0PZ%2FDH2IVcE9RkJ64GyK%2FI3dFQqgvu6ibSGc6tswyxfpYLVEi7YjAW3NI6sSothLW4l5hDAr8mUmFVuuUk7DiqRynsU8DQhAi43gBLkUYq0cueVpN0dtILbOndxUnJ%2F13MP&X-Amz-Signature=cfd3dc7537db8ac6a01e0840514a79a6d27809e438e56d831db97fe7e5b3949e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVX2POH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDR8pfdf%2FxsR8jvzlLt6QFSZfRjE%2BIfrHvJggk5UNo9OQIgIMR3YAE%2BeZHOgpfqsGijGE6IckRKTp%2B2ZQkpHm8RDC4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMhv%2FMnaWWfTKcnjsCrcAwam6oURJmdO8WrQKBGbTOm0mBBj%2B0ZLVNvLWHlqiPXrXh9%2F2BfWJ3mI%2Fa9O6Nni22Nl1HDgLed9fw2rgYlQ9WHA4%2FHn%2BCQbw2Icb6I2lm%2FpRy1Cp5yps7tZn0BPkA1LaLtMJmUTtYaMjNp2yPRpB6ycWg9VUCGXm5eKLc5E9aqXen%2BHXPrpeq1%2BL4%2BYWbhuH2QCZjMXNx50sZANDiiKu4THp%2B%2F4noo2ljg8cxxrV3on52SHWFQ1Qp87d5PFIcgPS91A4navh9Davo2YTOK2YmKcNyWhB6EbvgAq3rjrJE%2F47OuDz%2BEM%2B0r97xc0ELt7C%2BflapSI1a5OLFts3pRH%2BWGTffC%2Bjj90O6vCBQwA16J%2BHpj%2BVMe7SiYfmNRyBKpmhTL0Tu2v0Ouemz%2FqjbRoeRJXYp9d%2FURkMf%2BMq3gYrk0sMzO%2FTG7nFBJHo%2F9V48kFtaCfYatWTl0M7g2D4ja6PXAkj0v7MPMXF%2BjRc3OK3q6twIlpUrFaVB%2Ff%2Bm3Nx%2F%2FLiHkw%2FhLbRwTFuzzmnQUb7ELiFBK0N42ssBFHcVBAdXu9xo%2BC2s8B1vV%2BRFdosrA5nZWpoBCL3kX2DOQIW4sbK9o5Gd%2BCJRz%2F1arY6AutVv60ZW%2FkPavcFsresInRMMycjMQGOqUBaHmRTkGn7gl1d4tN%2Ffsew7Ml6wUxfHBQ3PX%2FZQIka7W1UG%2BsV%2F39xSsyya5iGBOwWOz133wrLIdNNVzuUoddSn7qC0PZ%2FDH2IVcE9RkJ64GyK%2FI3dFQqgvu6ibSGc6tswyxfpYLVEi7YjAW3NI6sSothLW4l5hDAr8mUmFVuuUk7DiqRynsU8DQhAi43gBLkUYq0cueVpN0dtILbOndxUnJ%2F13MP&X-Amz-Signature=d3dcd18cf29926ee9fc76fe81b6ebd403243b52fcf8f67cf7087b4e834e0f044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVX2POH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDR8pfdf%2FxsR8jvzlLt6QFSZfRjE%2BIfrHvJggk5UNo9OQIgIMR3YAE%2BeZHOgpfqsGijGE6IckRKTp%2B2ZQkpHm8RDC4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMhv%2FMnaWWfTKcnjsCrcAwam6oURJmdO8WrQKBGbTOm0mBBj%2B0ZLVNvLWHlqiPXrXh9%2F2BfWJ3mI%2Fa9O6Nni22Nl1HDgLed9fw2rgYlQ9WHA4%2FHn%2BCQbw2Icb6I2lm%2FpRy1Cp5yps7tZn0BPkA1LaLtMJmUTtYaMjNp2yPRpB6ycWg9VUCGXm5eKLc5E9aqXen%2BHXPrpeq1%2BL4%2BYWbhuH2QCZjMXNx50sZANDiiKu4THp%2B%2F4noo2ljg8cxxrV3on52SHWFQ1Qp87d5PFIcgPS91A4navh9Davo2YTOK2YmKcNyWhB6EbvgAq3rjrJE%2F47OuDz%2BEM%2B0r97xc0ELt7C%2BflapSI1a5OLFts3pRH%2BWGTffC%2Bjj90O6vCBQwA16J%2BHpj%2BVMe7SiYfmNRyBKpmhTL0Tu2v0Ouemz%2FqjbRoeRJXYp9d%2FURkMf%2BMq3gYrk0sMzO%2FTG7nFBJHo%2F9V48kFtaCfYatWTl0M7g2D4ja6PXAkj0v7MPMXF%2BjRc3OK3q6twIlpUrFaVB%2Ff%2Bm3Nx%2F%2FLiHkw%2FhLbRwTFuzzmnQUb7ELiFBK0N42ssBFHcVBAdXu9xo%2BC2s8B1vV%2BRFdosrA5nZWpoBCL3kX2DOQIW4sbK9o5Gd%2BCJRz%2F1arY6AutVv60ZW%2FkPavcFsresInRMMycjMQGOqUBaHmRTkGn7gl1d4tN%2Ffsew7Ml6wUxfHBQ3PX%2FZQIka7W1UG%2BsV%2F39xSsyya5iGBOwWOz133wrLIdNNVzuUoddSn7qC0PZ%2FDH2IVcE9RkJ64GyK%2FI3dFQqgvu6ibSGc6tswyxfpYLVEi7YjAW3NI6sSothLW4l5hDAr8mUmFVuuUk7DiqRynsU8DQhAi43gBLkUYq0cueVpN0dtILbOndxUnJ%2F13MP&X-Amz-Signature=69756ee5bdf8a32ac870ea0f205fe12ff7e483197cf77c982e3720081767a422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52NQE4J%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDxq8kRgH4HIBoLWC1094qq9Hy6R5rhFFPfwVDRCCJt1QIhAL%2BvvT%2BzweknU8dycn1npqEEwH1c2hn%2FOrwy957KjQaNKv8DCD4QABoMNjM3NDIzMTgzODA1IgyRpWEOy2MtJh%2FvG2Aq3AP3dIKd9%2BCHNHlT6nsgygZhxYH1nEnVS%2BuHWNuaWzQEGPAKSF%2F71wTUB%2FHC4VYKPGO9K7bNJNiuJx3jpM%2BPL04nvRBk8tFdNG8oBSU2LE6PdsR%2BMoV9oHkhJa8vCTTfHR8KkPkihKJZ5KjeW%2FbENxrEtEyjhFvYjHbOJjvVkTGTdcg3FPqQyDC8lvYg29%2FNClBn6iuP33JXxNsDFloLxPdquZKOVIEwZ%2F1%2ByFRFG2uPQPVbFlcj7%2BlgrB2PXUcU3lG%2BlBzIJjjiEBN6lHLqKmOCYV4vkfn%2B2S6B%2BbNmB4eAWKjwknThznWqRl0DIdO9QAJ6%2BKWTWe%2BP1XdQ6IsRe2RvGoEY%2FM28kJoCnSOlAjC4tBUEyfFrG4OCiYkEgm9txyURKqI%2FByRtGxiQ3Nsnxaov%2FQOn1TfCJ4YFJD%2Btqn7Th4zi%2BpPrS293xvHXCv7JkNwMe7qMwMzQS9F55%2B7tX6SJuXkcxAQhK08k7Gf7hOOEHNMFeZyGiKBGFFVIeHS5QayjZ%2Bz98Q97l4QP2LOv6xPgsaejMHbXPI565erivJLLZBcQ3zJ%2Bwl%2B91rOJPJfX88vANk3UDTMv03tavFUh9dR2fx9GSPS%2FNSDenHL8VJ7X4vFbavfLAlcZ3jPmEzCInYzEBjqkAe40OUc%2BI1k3xmwj2GX9Il6uI9f8ajrYx5yqd5wlLpChe3Z15dW0xLm2zexFnWNLEwg%2Bpb%2BrU8GXwU2%2BMmLGc3mXKlxA%2FTGP%2BT51Ezagd%2Fy4bvcdKaTKVJ3qoFw1mzjJ0jySd50polj%2FcyyAxgtCPvrO66R5sd1MziE7FDIMu57gPmG%2F65CgcSOXccd1yK1OmL5BX4YsIB8G5zBYqwEAwfS1s8Ef&X-Amz-Signature=dbc13759f70ba389ad10cebc7d84f7bef693e3c0662480bc6b6ba90169197e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AD44IC4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDr16LtUnBzk6PWNf%2FosgJBrDcAmgzjnhhunASraD7rMAIhALrniQbEv7KXBazj9Dompz%2BioWl6jhLRRTEd9Su9xoqhKv8DCD4QABoMNjM3NDIzMTgzODA1IgyMmYkbYiqIpFPeQpwq3AM%2F8%2Fk72dB7Ia0pfERyuqrbLAcaoVNPlTCQ6VO%2Bp8Tj3oWYPVB%2BwDjaFYIbvcjono%2Be6Ir1F3cEEzm7ScYblPH0YdzXKyCMbbQlm5vfUYrL8tq4AOTEXGvNoBPTERKEefuXhujIRQBF3hBEN6UxlDJzYOkD%2BK50bG%2BOOG0g8xkxl%2BRLS5a5Nf0lySUCR0uwwip2Sn5Yfvr1AsA1Z7sqD9RFDri9lP5RyNUR9JUIYbMPob%2BiTA%2BwoJha4NcZ9ymdVu159eQMuI92tWtVx9GQI9ojMF0eBbO2jzWHt3670XlAznrn6HMCaVFXTOY2dPWzYN3yUGilgSi5t%2FaFn8ak6bfXYTvlb0yY%2B1wO5jqmyKPbKa5zYAS2I1M%2BaM6WzNC9ORHw48FAwqb2dIpHi0SqyvZcJ%2FqXtuq18j%2B9ebGpSeLgfFsamIR1LpmE0T8Zm9Dgci%2BUYPUTzW7qfhk0gq9%2BXMe90XeogcRPRUKi3vpvfMacuBU77q2Yt6gCC%2FuFPwBBmG3q8uGmn8cf%2Fx%2FeNLmHfPfdAnpYivJ9bxdXcrn5NPNPn3c8xm59CzANLxBAves%2FPJyQc0g6N6qy6Zg%2FSYPvel2EVDSL9V7hmnE%2FWxovCpaEgzhhsHMw7QveFn7eJzC3nIzEBjqkAS4P1spsZNCrHb8pznD07kVvlYKWQYSSeEiZZ9uyCiO6yAC55SbIIKxRwbVkiQDGNMPegtmiRUqilmvdAEC%2BAykzMzEUE5RdR54XbXjSNxnL4ONg86u9PwHaaT0yt%2B62qtJsqBMlcDgyZLtS4gYqThJMTnHwjwzB%2Bdek7hWD4ZQGhs1uo4cQh8yVw%2FNWvc4D72wTIv7PaQCbxBiwuCyxJp9TLO6j&X-Amz-Signature=ea97ec5e4a1781bbc3643d836c2971cd67bdff63003b35113b11e3b77743243b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVX2POH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDR8pfdf%2FxsR8jvzlLt6QFSZfRjE%2BIfrHvJggk5UNo9OQIgIMR3YAE%2BeZHOgpfqsGijGE6IckRKTp%2B2ZQkpHm8RDC4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMhv%2FMnaWWfTKcnjsCrcAwam6oURJmdO8WrQKBGbTOm0mBBj%2B0ZLVNvLWHlqiPXrXh9%2F2BfWJ3mI%2Fa9O6Nni22Nl1HDgLed9fw2rgYlQ9WHA4%2FHn%2BCQbw2Icb6I2lm%2FpRy1Cp5yps7tZn0BPkA1LaLtMJmUTtYaMjNp2yPRpB6ycWg9VUCGXm5eKLc5E9aqXen%2BHXPrpeq1%2BL4%2BYWbhuH2QCZjMXNx50sZANDiiKu4THp%2B%2F4noo2ljg8cxxrV3on52SHWFQ1Qp87d5PFIcgPS91A4navh9Davo2YTOK2YmKcNyWhB6EbvgAq3rjrJE%2F47OuDz%2BEM%2B0r97xc0ELt7C%2BflapSI1a5OLFts3pRH%2BWGTffC%2Bjj90O6vCBQwA16J%2BHpj%2BVMe7SiYfmNRyBKpmhTL0Tu2v0Ouemz%2FqjbRoeRJXYp9d%2FURkMf%2BMq3gYrk0sMzO%2FTG7nFBJHo%2F9V48kFtaCfYatWTl0M7g2D4ja6PXAkj0v7MPMXF%2BjRc3OK3q6twIlpUrFaVB%2Ff%2Bm3Nx%2F%2FLiHkw%2FhLbRwTFuzzmnQUb7ELiFBK0N42ssBFHcVBAdXu9xo%2BC2s8B1vV%2BRFdosrA5nZWpoBCL3kX2DOQIW4sbK9o5Gd%2BCJRz%2F1arY6AutVv60ZW%2FkPavcFsresInRMMycjMQGOqUBaHmRTkGn7gl1d4tN%2Ffsew7Ml6wUxfHBQ3PX%2FZQIka7W1UG%2BsV%2F39xSsyya5iGBOwWOz133wrLIdNNVzuUoddSn7qC0PZ%2FDH2IVcE9RkJ64GyK%2FI3dFQqgvu6ibSGc6tswyxfpYLVEi7YjAW3NI6sSothLW4l5hDAr8mUmFVuuUk7DiqRynsU8DQhAi43gBLkUYq0cueVpN0dtILbOndxUnJ%2F13MP&X-Amz-Signature=49efc3d830d6fe25ce79687720495e865effecd8073edefbdcc72af1b43d329a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

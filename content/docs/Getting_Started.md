---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBTKSIF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMYfGXhf0j3ZCMfebO8aT4yiGsGNjFfPh6mIdlGMvolwIgAbdhs%2Bm%2FnJ2nA1ntI7w%2BbY1LfIBAj7sFpIobUCDg7uUqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyT5sKQ4yJQSrYbQCrcA4yKLCYdtIzwJjV1MxLFRnUDXguinuq%2BvQbg3xYqeeVfgzb0TNOvl%2F3lwJnVIRtL43P%2BcPJ%2BAKRofR7PlrQnptUik6hhdhSSktnTK1Effl6Cx1HwPQU%2BMmvtwWN8EZbGkZj%2Fhe1DGwi9Zqr9shmpUBNRmvKgq%2F4qvwfomlnfIkZn1RmyIhnlST1seZa9Lj0Xo0MRzBITq67EaTNE982JnrusRAITlHJ3%2F7FxDTksmULGAmI%2B707A0BSkn0Wuz%2B6EQnpOgDZ%2F8N1MKwFpO%2Fwk%2FK4ad7uCI4oXPmMt%2BnFLb9sCuqspqckUepJ9WoNSSebMFh7s%2BXvnx9EoWmbhvIDktsoOhEL03lr0%2BWCowCqlkEMescKvqSe%2BnxjdEHRJCOEd4Cs8irCewmOYZGTdZZyC1dS6%2FJQcoqQCv5ceYyrZ09B05T3RBN%2BPdlmJWzWmWkhDozrIFpsmNbVXh59d7WpFoTtgKfoqdU6D8SiH1TnV4UvAm9WMwF%2Fxi6D2Zm8Xg%2BTsA%2Bt72lGLqEm6B6dHTnRR7TpvuzgG50qSdI8P8%2BAwhTWOpnB0j59ZivP%2BW8jTuMI1NpShRzP%2FflXVxQ%2FIAUp7dYk5VU5Oy7%2F4tC2MfBRlveTEktA6f7GqRKFO0VaEMPHo3swGOqUB5ChhaCOxcjSK%2FWXCTV8SfUjThTxp7b9443E73k1FvGpQe%2F6ptOEnzhySZvU5X4wQDsnersq2czHJEyn9IWhtoFInQI0KwUq81q9fgU3wT4U%2B5u1pjG73aFa7vxJDsLfj14bTKXJD61zDGwRGpSPsI3zk2kRSP%2B4XoE7l4TgKrnwr4CajLQAWLy2zrtHhaC0fE%2BrbIwjlH1wrzC6LnTnQSIi5snsx&X-Amz-Signature=c800236c63462abe61d33e4e5d9d4fd5a35aa254f6e9e9b4d01070b3371665a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBTKSIF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMYfGXhf0j3ZCMfebO8aT4yiGsGNjFfPh6mIdlGMvolwIgAbdhs%2Bm%2FnJ2nA1ntI7w%2BbY1LfIBAj7sFpIobUCDg7uUqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyT5sKQ4yJQSrYbQCrcA4yKLCYdtIzwJjV1MxLFRnUDXguinuq%2BvQbg3xYqeeVfgzb0TNOvl%2F3lwJnVIRtL43P%2BcPJ%2BAKRofR7PlrQnptUik6hhdhSSktnTK1Effl6Cx1HwPQU%2BMmvtwWN8EZbGkZj%2Fhe1DGwi9Zqr9shmpUBNRmvKgq%2F4qvwfomlnfIkZn1RmyIhnlST1seZa9Lj0Xo0MRzBITq67EaTNE982JnrusRAITlHJ3%2F7FxDTksmULGAmI%2B707A0BSkn0Wuz%2B6EQnpOgDZ%2F8N1MKwFpO%2Fwk%2FK4ad7uCI4oXPmMt%2BnFLb9sCuqspqckUepJ9WoNSSebMFh7s%2BXvnx9EoWmbhvIDktsoOhEL03lr0%2BWCowCqlkEMescKvqSe%2BnxjdEHRJCOEd4Cs8irCewmOYZGTdZZyC1dS6%2FJQcoqQCv5ceYyrZ09B05T3RBN%2BPdlmJWzWmWkhDozrIFpsmNbVXh59d7WpFoTtgKfoqdU6D8SiH1TnV4UvAm9WMwF%2Fxi6D2Zm8Xg%2BTsA%2Bt72lGLqEm6B6dHTnRR7TpvuzgG50qSdI8P8%2BAwhTWOpnB0j59ZivP%2BW8jTuMI1NpShRzP%2FflXVxQ%2FIAUp7dYk5VU5Oy7%2F4tC2MfBRlveTEktA6f7GqRKFO0VaEMPHo3swGOqUB5ChhaCOxcjSK%2FWXCTV8SfUjThTxp7b9443E73k1FvGpQe%2F6ptOEnzhySZvU5X4wQDsnersq2czHJEyn9IWhtoFInQI0KwUq81q9fgU3wT4U%2B5u1pjG73aFa7vxJDsLfj14bTKXJD61zDGwRGpSPsI3zk2kRSP%2B4XoE7l4TgKrnwr4CajLQAWLy2zrtHhaC0fE%2BrbIwjlH1wrzC6LnTnQSIi5snsx&X-Amz-Signature=9021fe8ecc8995c90178f9cc74818230d0e744f1623fae3be3666c17b572f0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBTKSIF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMYfGXhf0j3ZCMfebO8aT4yiGsGNjFfPh6mIdlGMvolwIgAbdhs%2Bm%2FnJ2nA1ntI7w%2BbY1LfIBAj7sFpIobUCDg7uUqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyT5sKQ4yJQSrYbQCrcA4yKLCYdtIzwJjV1MxLFRnUDXguinuq%2BvQbg3xYqeeVfgzb0TNOvl%2F3lwJnVIRtL43P%2BcPJ%2BAKRofR7PlrQnptUik6hhdhSSktnTK1Effl6Cx1HwPQU%2BMmvtwWN8EZbGkZj%2Fhe1DGwi9Zqr9shmpUBNRmvKgq%2F4qvwfomlnfIkZn1RmyIhnlST1seZa9Lj0Xo0MRzBITq67EaTNE982JnrusRAITlHJ3%2F7FxDTksmULGAmI%2B707A0BSkn0Wuz%2B6EQnpOgDZ%2F8N1MKwFpO%2Fwk%2FK4ad7uCI4oXPmMt%2BnFLb9sCuqspqckUepJ9WoNSSebMFh7s%2BXvnx9EoWmbhvIDktsoOhEL03lr0%2BWCowCqlkEMescKvqSe%2BnxjdEHRJCOEd4Cs8irCewmOYZGTdZZyC1dS6%2FJQcoqQCv5ceYyrZ09B05T3RBN%2BPdlmJWzWmWkhDozrIFpsmNbVXh59d7WpFoTtgKfoqdU6D8SiH1TnV4UvAm9WMwF%2Fxi6D2Zm8Xg%2BTsA%2Bt72lGLqEm6B6dHTnRR7TpvuzgG50qSdI8P8%2BAwhTWOpnB0j59ZivP%2BW8jTuMI1NpShRzP%2FflXVxQ%2FIAUp7dYk5VU5Oy7%2F4tC2MfBRlveTEktA6f7GqRKFO0VaEMPHo3swGOqUB5ChhaCOxcjSK%2FWXCTV8SfUjThTxp7b9443E73k1FvGpQe%2F6ptOEnzhySZvU5X4wQDsnersq2czHJEyn9IWhtoFInQI0KwUq81q9fgU3wT4U%2B5u1pjG73aFa7vxJDsLfj14bTKXJD61zDGwRGpSPsI3zk2kRSP%2B4XoE7l4TgKrnwr4CajLQAWLy2zrtHhaC0fE%2BrbIwjlH1wrzC6LnTnQSIi5snsx&X-Amz-Signature=1f40875e1bbb56efd4686477cd971dfaac3be36d15f6a2bccf1d740e15ef9f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTG2BOIM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZCQV4VZtOyA3TRWyzp1HrEcQNnwTTrkQwsXmpDVMpqAiAodsO6uZfDBmq%2B4H5LOqs%2Fi8sPo%2FapQYrDj5oEUciRdyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2F3WI%2BoDK21mqcYrKtwD9yvJ7ibZqYT6suI%2FTVKYsGImserJeGkZjvKUzHBW%2BJoXOXqZxYDUPxs2mc%2BbnceXYnUh%2F4GEUJlzP2DDM9a7BhUL07ft3WkpembdRsLCVKuSHb1IyqJHbhejoQU25K9SbVSDlHr6tF7AGrFxrPDDRLM0NL1RpS%2F37Ri8RLE1aYYubA3U9vmGb%2FvWunNd3rwlXEQrt7iIz%2B7sQtpk3iuD2RFTS1Z7z8v4WYjwgg8SCX0Tj7HG5Nst4jLPjAAcu3v2XXaV5gQHrm22TWFmKJdXUbpUNZjNhntJcJU3%2BlTqpZGUKQSYdm2PY7Ua%2B6YFKYVmZENkdNBpluTAk8CmCRi4ZrSugll%2FF5GxNSpOVi3p1pmUVhbQmKDCkZ%2BgHzCyQpIq4Vd99Dapc2pLfMAV8wi3%2BQ636JMFfJaVDVb8%2FuYBsDOrOhBVBvEO2t9WhrngmR9xuFl5XXd07VOQC57phch8Gg7vS4qWtD7TDOPPDC1J5cztA0zm9V8%2FiShy5CysYuIGsX%2BfKlIGBzHP8q0lduK%2BKHnYgwB8po9As2bAclZKSj%2BbYALynOrzmh63eP0JG%2FURuFsXGAq2OK5E0b%2FQOaDdlGe2RVSKzw72lAZyAGhIwfKb52vIs3FI%2F5XT3q8wnejezAY6pgFUJK7eDyRHWIlAeDg5jQ51x2dU97MVhxz6lTHaxmp%2BgeoAtr2cK4KHVyi1yvXiYoNR%2FXcMQdkvItAhlYxyD10kiHcPMUEEKVhYMgOLYhC3h%2F%2BW9KpV1gsHLthnx1maoTPC%2BqX3G9E2xYF4PeoJ9ykE4QuIZ2G2i%2F6BjihcZ%2BVGBYr%2BJqNPjCHFX2xmO7EkVhQwKa9V3CI8vRqvJ81mdwWso1YOMKbx&X-Amz-Signature=c22ec1f207502b0bd8cb023170f5cf3bb737e746bef8cd43a0c6ca0adb11fe79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXPABU6%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7GbBr2RiiTA7Noy0XRVXhavpKzianvt3FhduSPGcpIAIhAKBF1Uy4DYRdeMCudrA9T0%2FkdtjBfr9ZhW6zHNXB8PD1KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb%2FaYQC3EjUGDJ7lYq3APkHzWpKXOYYMr7dajMDXO5TilMokwXCKPTxavwu4ZkPulBKa4KDh3eIwZSlwgKa%2B5sMeRg15JH%2BjeIaXMnxjFsBaHawiS4mbH9KjmSsN1LA5uOivwgs1HZoJOQJJWjSw%2FRqQegQiAUo4Wv1xWk7ilNB8DQzQwBsm3mVKKpDhHMwZj2KkUsF3zzBCpoW0JmqjZ0WQlP9JaZS4kfIoYP1bPPzrYnFTZUhzFbqxeIVpYCziSgdGCGIpynTKcuPGKk%2FnVDo8kDFUQt4HwKF71cPM8kj00XHMIzivtFGal5Spe7IDd2l2%2FZFPMdwYM5BBSWPNU%2BrlgXvFjUkHc3LC86NWfuujH233zxleSa%2BflmasIIeDgaGAockZNSbOvokL3WvY9piGiqAMZCnKUcBWQp%2FMLSMgTQsCoadRqni7Cv0Wctvx%2B%2BVlaPR8QTgJeZ7gakNCviiIqsPTlrQY9SRRw4wQOdJJh4NbnnfWpB7t6cBhnKusGNo94uwjxFRM27UBCngRdPrHE42sizBATWOciRGgXKPgT62cBWjc%2Fj4c2QLjdcAnfI9Ylbxs259LY4OJlEA6y8TgOEmgN5NgKYdDRxzb7etfNHS9Mw8yoj7LbABSl0NkhRz%2FZzpPfUNaJoUjDk597MBjqkASSjmq%2BXpRnFBFVhlfMImUKD%2BIpuVNUv479KgvX8kEb1zHypez8XAKtWaacfNXH9Hl3dXYA46R3f9W1IzgG91GyopRMGKHbTZ5Scr3iFkaGWWinjtMa7ZILd4qroCpJ32pO94mBGgRyF9EqcTr7KD9D%2BioOC4WsMrAdGqlePNkVK%2B5JKwrCFp2ZpVIDuFj0zVqsDKaVU6fy6AXmok3ibkl9tWurE&X-Amz-Signature=bef875a37263bb7dbca44595334f502f0c6b67f6b5a39967e6dd728fec2b4107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBTKSIF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMYfGXhf0j3ZCMfebO8aT4yiGsGNjFfPh6mIdlGMvolwIgAbdhs%2Bm%2FnJ2nA1ntI7w%2BbY1LfIBAj7sFpIobUCDg7uUqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyT5sKQ4yJQSrYbQCrcA4yKLCYdtIzwJjV1MxLFRnUDXguinuq%2BvQbg3xYqeeVfgzb0TNOvl%2F3lwJnVIRtL43P%2BcPJ%2BAKRofR7PlrQnptUik6hhdhSSktnTK1Effl6Cx1HwPQU%2BMmvtwWN8EZbGkZj%2Fhe1DGwi9Zqr9shmpUBNRmvKgq%2F4qvwfomlnfIkZn1RmyIhnlST1seZa9Lj0Xo0MRzBITq67EaTNE982JnrusRAITlHJ3%2F7FxDTksmULGAmI%2B707A0BSkn0Wuz%2B6EQnpOgDZ%2F8N1MKwFpO%2Fwk%2FK4ad7uCI4oXPmMt%2BnFLb9sCuqspqckUepJ9WoNSSebMFh7s%2BXvnx9EoWmbhvIDktsoOhEL03lr0%2BWCowCqlkEMescKvqSe%2BnxjdEHRJCOEd4Cs8irCewmOYZGTdZZyC1dS6%2FJQcoqQCv5ceYyrZ09B05T3RBN%2BPdlmJWzWmWkhDozrIFpsmNbVXh59d7WpFoTtgKfoqdU6D8SiH1TnV4UvAm9WMwF%2Fxi6D2Zm8Xg%2BTsA%2Bt72lGLqEm6B6dHTnRR7TpvuzgG50qSdI8P8%2BAwhTWOpnB0j59ZivP%2BW8jTuMI1NpShRzP%2FflXVxQ%2FIAUp7dYk5VU5Oy7%2F4tC2MfBRlveTEktA6f7GqRKFO0VaEMPHo3swGOqUB5ChhaCOxcjSK%2FWXCTV8SfUjThTxp7b9443E73k1FvGpQe%2F6ptOEnzhySZvU5X4wQDsnersq2czHJEyn9IWhtoFInQI0KwUq81q9fgU3wT4U%2B5u1pjG73aFa7vxJDsLfj14bTKXJD61zDGwRGpSPsI3zk2kRSP%2B4XoE7l4TgKrnwr4CajLQAWLy2zrtHhaC0fE%2BrbIwjlH1wrzC6LnTnQSIi5snsx&X-Amz-Signature=a080abf93a54adeae7b393fab0c7bc7b146acb087d9927b2d50fdb44502989a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

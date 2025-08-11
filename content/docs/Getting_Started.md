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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEETKCB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPYhEeJkIvW7AaqTV5xDZRlVTczilkwLsfOrlqvuTSkAiBGqc0yWXd8QGdK8gZM%2FV5bwDX6OTtdxSY8zALhgcRCeCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ33e67SPkt5ktCwSKtwD%2BWPIPAiI%2FK7Ps6w5VAsWLDPyYghuDOCikk7rA9%2B7NWL8Nisxi0R87e7P2vaYInD5SkB6CVI55XbWhxi53UX87j3%2BmP7m%2FlJCG2FovIE5pWiy8A9SXsJrMm3wukxGcJnE7Mo699jxqUjCVLxti5aPu6sdULQu30D23hkLg31veitAscTp8Zby3knHS4JQkAACnuh9LfQUaPYLTMTQLrUSVyU%2BtEL6syJBiApGrWZ3unyl0CjmOb5RjNgYCcCEqWoO%2B%2BscnX8BIm1wynpjoql5QSlyXdNXJS%2Bs7wwqDRolJV%2BtCo6lbGPAKdD2AeGigeyREjb%2FYHfq4yJtg8Ku3ouy1c9ErFStAF29CiVUpMVZVIXP3GdXI7MT0FAEigHrJzVbB0VpvcLegdbkhHBUw5Rpz3z%2FnSCNh77zocZEnYLrIdaSQug6Ml9sA2lmPYi1GFUJYZiuLRI3Qew25KbPSBeNlaKePhaWJ11p32iuo9yb0K841Po1%2FY2MkUw87rPyZ4HepxUqGEm36AgqeIDrdLA2I6sv2EuoRFmhMpA7oD9oIOm%2BOylg2%2BmbsfbFPAp2UrtlzM%2BLCg3zWAOxWDO3mos7lm7UIQY0AbX%2FnLBARCetz9%2BkZ5NVCbdyY1VjNGAwsZ3lxAY6pgEosBkIz9lN%2BGXBhfvRZVtR3A1RHQj44MGlXeCv9qxWw1IgOQoN72KrNbgl%2FWS2qW7DOBFRYg5wembaaG%2B2jshJYa1nnkmIESRSIHsHk%2FpV8UGZ52uOhSJ63DGy3OGbjn%2BxZl00zHr8fn0H%2FJNiqDkhG7jf0%2FS%2BvSqTe3VjdtzPhkK3IW3Xg8vrCN3KiCbUilbsC7ioPb1hpI1MqLPzjCCXTuou%2BtIN&X-Amz-Signature=c8a1dcd7bc6c037d31ea247771f7a816742fc2b9006251986669f5e91dc40d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEETKCB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPYhEeJkIvW7AaqTV5xDZRlVTczilkwLsfOrlqvuTSkAiBGqc0yWXd8QGdK8gZM%2FV5bwDX6OTtdxSY8zALhgcRCeCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ33e67SPkt5ktCwSKtwD%2BWPIPAiI%2FK7Ps6w5VAsWLDPyYghuDOCikk7rA9%2B7NWL8Nisxi0R87e7P2vaYInD5SkB6CVI55XbWhxi53UX87j3%2BmP7m%2FlJCG2FovIE5pWiy8A9SXsJrMm3wukxGcJnE7Mo699jxqUjCVLxti5aPu6sdULQu30D23hkLg31veitAscTp8Zby3knHS4JQkAACnuh9LfQUaPYLTMTQLrUSVyU%2BtEL6syJBiApGrWZ3unyl0CjmOb5RjNgYCcCEqWoO%2B%2BscnX8BIm1wynpjoql5QSlyXdNXJS%2Bs7wwqDRolJV%2BtCo6lbGPAKdD2AeGigeyREjb%2FYHfq4yJtg8Ku3ouy1c9ErFStAF29CiVUpMVZVIXP3GdXI7MT0FAEigHrJzVbB0VpvcLegdbkhHBUw5Rpz3z%2FnSCNh77zocZEnYLrIdaSQug6Ml9sA2lmPYi1GFUJYZiuLRI3Qew25KbPSBeNlaKePhaWJ11p32iuo9yb0K841Po1%2FY2MkUw87rPyZ4HepxUqGEm36AgqeIDrdLA2I6sv2EuoRFmhMpA7oD9oIOm%2BOylg2%2BmbsfbFPAp2UrtlzM%2BLCg3zWAOxWDO3mos7lm7UIQY0AbX%2FnLBARCetz9%2BkZ5NVCbdyY1VjNGAwsZ3lxAY6pgEosBkIz9lN%2BGXBhfvRZVtR3A1RHQj44MGlXeCv9qxWw1IgOQoN72KrNbgl%2FWS2qW7DOBFRYg5wembaaG%2B2jshJYa1nnkmIESRSIHsHk%2FpV8UGZ52uOhSJ63DGy3OGbjn%2BxZl00zHr8fn0H%2FJNiqDkhG7jf0%2FS%2BvSqTe3VjdtzPhkK3IW3Xg8vrCN3KiCbUilbsC7ioPb1hpI1MqLPzjCCXTuou%2BtIN&X-Amz-Signature=290513565f9c71f66a388d4edb3f09f1685532dc5ec4a610ebc55aaa28a3a440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEETKCB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPYhEeJkIvW7AaqTV5xDZRlVTczilkwLsfOrlqvuTSkAiBGqc0yWXd8QGdK8gZM%2FV5bwDX6OTtdxSY8zALhgcRCeCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ33e67SPkt5ktCwSKtwD%2BWPIPAiI%2FK7Ps6w5VAsWLDPyYghuDOCikk7rA9%2B7NWL8Nisxi0R87e7P2vaYInD5SkB6CVI55XbWhxi53UX87j3%2BmP7m%2FlJCG2FovIE5pWiy8A9SXsJrMm3wukxGcJnE7Mo699jxqUjCVLxti5aPu6sdULQu30D23hkLg31veitAscTp8Zby3knHS4JQkAACnuh9LfQUaPYLTMTQLrUSVyU%2BtEL6syJBiApGrWZ3unyl0CjmOb5RjNgYCcCEqWoO%2B%2BscnX8BIm1wynpjoql5QSlyXdNXJS%2Bs7wwqDRolJV%2BtCo6lbGPAKdD2AeGigeyREjb%2FYHfq4yJtg8Ku3ouy1c9ErFStAF29CiVUpMVZVIXP3GdXI7MT0FAEigHrJzVbB0VpvcLegdbkhHBUw5Rpz3z%2FnSCNh77zocZEnYLrIdaSQug6Ml9sA2lmPYi1GFUJYZiuLRI3Qew25KbPSBeNlaKePhaWJ11p32iuo9yb0K841Po1%2FY2MkUw87rPyZ4HepxUqGEm36AgqeIDrdLA2I6sv2EuoRFmhMpA7oD9oIOm%2BOylg2%2BmbsfbFPAp2UrtlzM%2BLCg3zWAOxWDO3mos7lm7UIQY0AbX%2FnLBARCetz9%2BkZ5NVCbdyY1VjNGAwsZ3lxAY6pgEosBkIz9lN%2BGXBhfvRZVtR3A1RHQj44MGlXeCv9qxWw1IgOQoN72KrNbgl%2FWS2qW7DOBFRYg5wembaaG%2B2jshJYa1nnkmIESRSIHsHk%2FpV8UGZ52uOhSJ63DGy3OGbjn%2BxZl00zHr8fn0H%2FJNiqDkhG7jf0%2FS%2BvSqTe3VjdtzPhkK3IW3Xg8vrCN3KiCbUilbsC7ioPb1hpI1MqLPzjCCXTuou%2BtIN&X-Amz-Signature=a695a96dfba6039c1eeeafceea2eb8b8a58fc22468ccccf0a89269f0f6a3d876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHQ5RLS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdOzLryDCYDaS551ORfBUefTJi2LPKj3U%2Bb78dgQi6BAiARC81TtsWZkkyWjo9WMaNg0AibUcn7mkUtFsD414KkZiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6KlNze5Fi6loApROKtwDI25Zs9qOKEDdcwGEHAbV8U1py71twNzpHKs1CjPc7RKTyg7ndv%2Fwt8WjYONLvvMgbiewh%2BKNUggE3fb8h5Z729jujGl8PmkGwxqLUCN3hdPe6S89it6%2BYhcSWQ6PERWisZETBithvmHJf0qNZ27hFlQbK3mzItm%2Fsj7qwEevpheb7Do55gmsCeGjBiWz7WvQAXcfM4CkxISjMXGSIvKfa1fwcTkgAiJsvNktF0BR1482Bz9N5yUbuGSATR5dcAWYywdgQWfwoNXbWN%2Bmmxh2wkUG5LZh2voDYQuH6Ytjm2Y0YESFgebCSn330BOkh2BzAFLVlV%2FhUylNeUvKnlrrnOwTAEgaZ391PFVXVh0gkd2SmOeKMXrT8A0KvUhK%2FX%2BflJEqn0QezumHvLeSsNBbTgeOI%2FAnxU3Fe8Vk4f47PTOXX4b9aBW6M759%2BFLYzUW3JbJMh2JPL3JNeb%2B0vZFpcIq8Sg4ytFKbhm5bDKjidNIur7XKH75MjPiFytzTBwpF53GQ%2Fm%2Fmc7V3I%2BbUBmUFfKaUhfH5WknnyVl%2BcBwGP0T7HNYVhNmtJAl2F6VxckTLI%2FO2LJaceM95%2FTILvUfzOU1Co0JMEoVGjCScptKwldDtZcyLGvzI8AJiiiAwqZ7lxAY6pgEJipKe%2Bbs4llWij%2Bthk%2FAsFqCRQG09c3ybdmjDIsjtBQJOnc20u9hQRaMPNwDtRiVoPl3IzE809W6jeL4E2ZDVdM6A5G2uVEVqcQUNQ3NpHU6Nn1mP2pNMvBnENIRMWZTq%2FTJADQNLv5urrnQ3DltpXi0SW0V%2FVIgD8sgr%2FiezBaFT1LlXbp6yg3QtdGn%2FX6oyjCwlv3JgXT%2By2uwEUNzetSH%2B3VzR&X-Amz-Signature=e9fe7a4c89212411953263f01c4d135f19453b4dd3486173ab57fdac0f8de69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEJ3KEO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxx1VP7mWBx1SH6G5TLEwdy4H6EhbF%2BUGaZAxGwd2uAIhAMeLfK%2BB2ZeLgTp7vOJmnQSKcf5%2FmpCSpFk2lUMAzLSQKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcTKzMYcU5D4MdhkEq3AN5hX2phjm2hBU6%2FMAKor%2FF1H%2FAa70V%2FE%2BdTo%2FMMA8KY%2FoGtDYTfaMC8Y%2FCpxTBfpgdGdlYrucXd3v2SR2PhwPzTxpCRoQJxuDOB2utamLchZfc31vR9BjVxNMVu%2Fy1wKHbdSZAtHZY%2BAXZotWDnuBN3JPgXezsJzqr1aV5uV9371SgdUjjbAPb%2Bzq8nR8Mm5951EvGw6YQTUDJwPYYsWehND531Ql%2BdjvuUEIGLXcPEw2YAz9%2Baq0L1J3p%2BPBBRUn2VbE9y3PuA1WKmtbw%2FBzx%2FzKLMTVYIL%2BVno5sHXI%2FJfrYEbSXmbi7Sfr0hBQaJPwoD%2FH5FBgtdVLmHt%2F5MEJvz4Yxju0c8ksDBmQeInAIPpmNI6o6KhS2qHgyFBR5hHZZFrSWFfBU%2Bs3pEjBba8xbvrGzDE8kXERYRMSG1dZXjaEBEBCngwD%2B3kICYOXHXIwSCmvg7xt3M%2BR0UOmdW8ARs351roi8TB5Zus0bac0T8JJk6Gu8TAyhF3soOEQhC1MVuvErYHaWN8fmJ79zrt0Lqrnnmyt878ufKPznqMNC0No3FZ0CKrE9w%2FEuYK0eJkPmf43N6IW68XZPV%2FKIV8ImogYY7HitYR51G9ek%2FMvQL8sXlYvMU1ngFseYcTCEnuXEBjqkAetm3t%2BMDf2E522EiYgkpt%2B23qXTLjYy5DEc03YgGVmATDBnK61YqW1K5YNVFhAcx7sT8sMIqfWXMXrrO7M8Zm2SKwHKJFiQfZm72My6SLSU3N5tg4RqaqMziM6EclfoAkFenOYSBvEOmUQhffAQaaSIA%2FUSHPr2I2gUEsklgJ5sj0yW%2FzuoRsbpzXobDp5o2LaYyEo7Mxb8BMWYjc7Rl0nNR%2FfN&X-Amz-Signature=3a7b9ee280ddf7c70629425f057994a9f24d0aee432592becaa29a278d8eedf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEETKCB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPYhEeJkIvW7AaqTV5xDZRlVTczilkwLsfOrlqvuTSkAiBGqc0yWXd8QGdK8gZM%2FV5bwDX6OTtdxSY8zALhgcRCeCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ33e67SPkt5ktCwSKtwD%2BWPIPAiI%2FK7Ps6w5VAsWLDPyYghuDOCikk7rA9%2B7NWL8Nisxi0R87e7P2vaYInD5SkB6CVI55XbWhxi53UX87j3%2BmP7m%2FlJCG2FovIE5pWiy8A9SXsJrMm3wukxGcJnE7Mo699jxqUjCVLxti5aPu6sdULQu30D23hkLg31veitAscTp8Zby3knHS4JQkAACnuh9LfQUaPYLTMTQLrUSVyU%2BtEL6syJBiApGrWZ3unyl0CjmOb5RjNgYCcCEqWoO%2B%2BscnX8BIm1wynpjoql5QSlyXdNXJS%2Bs7wwqDRolJV%2BtCo6lbGPAKdD2AeGigeyREjb%2FYHfq4yJtg8Ku3ouy1c9ErFStAF29CiVUpMVZVIXP3GdXI7MT0FAEigHrJzVbB0VpvcLegdbkhHBUw5Rpz3z%2FnSCNh77zocZEnYLrIdaSQug6Ml9sA2lmPYi1GFUJYZiuLRI3Qew25KbPSBeNlaKePhaWJ11p32iuo9yb0K841Po1%2FY2MkUw87rPyZ4HepxUqGEm36AgqeIDrdLA2I6sv2EuoRFmhMpA7oD9oIOm%2BOylg2%2BmbsfbFPAp2UrtlzM%2BLCg3zWAOxWDO3mos7lm7UIQY0AbX%2FnLBARCetz9%2BkZ5NVCbdyY1VjNGAwsZ3lxAY6pgEosBkIz9lN%2BGXBhfvRZVtR3A1RHQj44MGlXeCv9qxWw1IgOQoN72KrNbgl%2FWS2qW7DOBFRYg5wembaaG%2B2jshJYa1nnkmIESRSIHsHk%2FpV8UGZ52uOhSJ63DGy3OGbjn%2BxZl00zHr8fn0H%2FJNiqDkhG7jf0%2FS%2BvSqTe3VjdtzPhkK3IW3Xg8vrCN3KiCbUilbsC7ioPb1hpI1MqLPzjCCXTuou%2BtIN&X-Amz-Signature=020e50f7c2fcd38645de48918fccaa4da9475289b50d89b93142c8c8b7e6264c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

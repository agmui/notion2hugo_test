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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLGO7AN6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsH6UZ%2BqOn0HVGkAGvjOA%2Fb%2FTI68ARu6Nl4Upya2N%2BCQIgfOxnf4RM2%2F2PKt7Lu2qqJQ73FcwGORTfVckmM8ZRJrMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNi%2BmHxBAAYMomgL8ircA5SZb4RH%2FPUzl14vXr8Xb%2FLe18GbMTzG4rc2DdWOO2MG%2BJRtUVt9hnr6NaNBpTllN%2FLcw1HKlG0puYF%2BMrF1a%2FbU7Y2QoApBkf85Fv4JGSh7fGDNE8v7UuMdIvzr2CX%2FaJ2H2War3pDl6kTBdEV7U8WFgTWNqzVUWJBEGFDU8oe87Qe6mpz64EeA4D3r%2FWyi%2B%2BIMJRHKI80WIBniIVg%2FqP7qBMsykAntzUKJu77Km7RrYI5Jo9numMUVZi1Pj0WXUf3VwFJ4B40Cj2sibflex%2Fwy1vLh1yJXJS3wYtm3iaDzkXfd3jqV8l42jhrn8aMfmxiGiRZPdg9%2FtN6lHqq3RQzkzhZpJ7Vqqp72NJV4Cg02WhVPIdHbCcv8uvBXAo%2BIGoIb5sCnb6re2s96KpMJ6upagm48uaFKNwuZ1OGGYUOTA8brBU9XRwTGVQauhvkjk7v3q0s7nrbY8pxhU1c2ZmhbwUbey5vaB5IsYHQ51bk6kPTCKzoVfFIdVPUWuNOz%2FJYxM2AH4PGUINc3xjh5pm58ntP4WkzFrStDmd6Ic33i9C5lb3yAxMk%2BwkCAa5t0rjP9SpAtNIkz8y0YNLepKiST85JbgyWXbzc%2BlIRAbiDEMPTiXWmzlHOnRltuMKHfuL0GOqUB20fjzbI1p1f6dp9vwb4hk4cbAFftAE6ss74%2BCXgxJP1IrZVvfFSFm7yImFqKhESgp2ZsWCzlwhgMo0PcIZt75PbAniA0%2BOkVPITQjozAWkwvFBJwimQ%2BDe9Kwgkl1Olyu1lnLF8GSWF5JIeZ7gm%2F6PYG%2BNis4jPChJQXcDTfVuXUTILEBmo6cY995ccdw9%2BEey%2FdzBvS55zgvYWoM6mvGdXpV8ZC&X-Amz-Signature=2342da9f405a07fe682d1d659056d4bcbc0974d160281a76ca9448679c5e97f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLGO7AN6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsH6UZ%2BqOn0HVGkAGvjOA%2Fb%2FTI68ARu6Nl4Upya2N%2BCQIgfOxnf4RM2%2F2PKt7Lu2qqJQ73FcwGORTfVckmM8ZRJrMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNi%2BmHxBAAYMomgL8ircA5SZb4RH%2FPUzl14vXr8Xb%2FLe18GbMTzG4rc2DdWOO2MG%2BJRtUVt9hnr6NaNBpTllN%2FLcw1HKlG0puYF%2BMrF1a%2FbU7Y2QoApBkf85Fv4JGSh7fGDNE8v7UuMdIvzr2CX%2FaJ2H2War3pDl6kTBdEV7U8WFgTWNqzVUWJBEGFDU8oe87Qe6mpz64EeA4D3r%2FWyi%2B%2BIMJRHKI80WIBniIVg%2FqP7qBMsykAntzUKJu77Km7RrYI5Jo9numMUVZi1Pj0WXUf3VwFJ4B40Cj2sibflex%2Fwy1vLh1yJXJS3wYtm3iaDzkXfd3jqV8l42jhrn8aMfmxiGiRZPdg9%2FtN6lHqq3RQzkzhZpJ7Vqqp72NJV4Cg02WhVPIdHbCcv8uvBXAo%2BIGoIb5sCnb6re2s96KpMJ6upagm48uaFKNwuZ1OGGYUOTA8brBU9XRwTGVQauhvkjk7v3q0s7nrbY8pxhU1c2ZmhbwUbey5vaB5IsYHQ51bk6kPTCKzoVfFIdVPUWuNOz%2FJYxM2AH4PGUINc3xjh5pm58ntP4WkzFrStDmd6Ic33i9C5lb3yAxMk%2BwkCAa5t0rjP9SpAtNIkz8y0YNLepKiST85JbgyWXbzc%2BlIRAbiDEMPTiXWmzlHOnRltuMKHfuL0GOqUB20fjzbI1p1f6dp9vwb4hk4cbAFftAE6ss74%2BCXgxJP1IrZVvfFSFm7yImFqKhESgp2ZsWCzlwhgMo0PcIZt75PbAniA0%2BOkVPITQjozAWkwvFBJwimQ%2BDe9Kwgkl1Olyu1lnLF8GSWF5JIeZ7gm%2F6PYG%2BNis4jPChJQXcDTfVuXUTILEBmo6cY995ccdw9%2BEey%2FdzBvS55zgvYWoM6mvGdXpV8ZC&X-Amz-Signature=0ddda4c9e85ba538323da46d2bdba47c4c4deec0a4c4a8a959e6c1954ccf594a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636EUJTI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaFyPV3deMFEfwueyh3RZMWDOTyKH%2BOOnDvd1VYClopQIhAJo7KK0pqR6eSI9YIPlXEJKU%2Fbrj5V%2FPVZhsrV8pMK6eKv8DCBsQABoMNjM3NDIzMTgzODA1Igxch97rmLDJdBJjQukq3AOdK9uMMuLenzrgFi1MKOD%2FIl0DUU1ldWR3PFq7rnOdLMgHS3cCaLLCq5%2F%2FFPFd10wir%2BhS8YjzG0MA04V%2FoFRBl762S9VC90q3ec7jZyI4yPeFqfzMreV6KPe43hruUFeZJw%2BuR1%2FEbvMrIgkL9Kf3fQhoIyxVupypwq%2BHXyE5OQyoISdgZMxXcOg2uRgQ7%2FkxbMOAi%2FQtggYIbOvn4PoHzlJ0TEvboQc1XCTnercwTY1Y2dXQkdhIUZkx3SWItNrp65yFGQufjuwx8BMDGxNnAPJc%2F34daTcCnS6OjKAmcWHzi4r%2BgXIK1SB2jWbWrNt%2BdefCNk8cgD4HLyB9fDpTO3ppTxKMC063CGfpS5w0Rr2HUdXSI%2FntoGomJCTwPwHWTfJgHsr1K5fpJZiJ%2BHXsx8slr59VABmJm%2F4xyT%2FKwmetKCaUbvjRakvf7NEy92DYQNp%2FDPJZZmcskSPQKKNSgzlOlIJYbHg1oYXPJfqsUzPtmUvHXjQCj87XJKidedPms8UNFOR4dNxPKXVSxBwhly4J4KsyP3VEPXi%2Bi7H%2BxYfaPwlTB%2BYoZ0vKTpYm8SI5KhzLBeKk%2FEATJ1eZw3%2Bjx%2FCkpCgYIt0kVbWKr%2BTwIyPzsuIYuRBIxJNG%2BTDx3ri9BjqkARLMoKOqpy9l0lzDHGD%2FNBAx8KHO3I8I%2BskrkEBCXQZ%2B6%2FSs0X%2B%2BKppJt%2BGeewwwGHnUe4pNtcez8JUwgbGeHtiR0QT%2BADPMTSghpsiN908kb0fGMoKdLjaMVp2lkUX%2FIP5Ibnoa%2Ffe%2F1EqnUfJKJp2xRwvQ6pfO7%2F1XJ66kfjJHNUCgMtYVX11O52nOQPTShoLTBQ01u1fvcuhlm6fybZ6gb4E1&X-Amz-Signature=c04605049e9d21d681062eb1fc70b9a798bbfae4f31d17c6fc31583769e7b40e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WV3DSF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFVok4ojYr4nUUDy%2Bpa9HETTBTMyoS4J1%2BemWECoh27AiBUxJT0svjHk%2FWMmm1CozwnaYR7cuClokzWGPt6h7gjFSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrEeb7mLMfUprS9W0KtwD%2Bl%2Bwot%2FSf3b7JmWqqpfJgaIq7y16wo8fnffcANQBH6InboFQrJE6UgQbiPeP6JdghbaKnnToeVJspEp%2BPPi5r8lqdM9lR%2FzAStJDGyhdZJD1NytSQ2cdm5m%2Bz0GcAJ0d0Iuz9sPj48q3%2FQt9jP0Cd35paGQAVRCNGVGqBSuvLXqZmOROMhpj3UbxtL9%2FwhiFZJqLwLWod7gThRoC3%2F0EkTiUCqg%2F46mAEB0whWcEP4JhLL704FWPFJJwhhTsyXf9d%2FPDZ9256IjMFocyItd4C6ZhqOMvXLWFIjTFQ%2BEAAFbLZPVW%2BuviCo3GRjMkfIkvT3FUQRhLR6DG8du4%2FJIUlDmG5nA9bZPiMuaRNFsMOVVaaFlTMOOfG95A3FtI1viJgl4uJ81lq67NWaztw2Iocun3jk6RQL0EB%2BAh5ZFA7cmlB8itsf9YfjTteOvt6I5J0uC9dU7QwT%2FQt%2BKJde9V5jr9kp%2BF51WHIDO1%2Bn5eS5CuQc%2FMlZ0LYVi2wx1MbfUEa8Vg4UBfYrcy3hDnQyFUrkoG%2BQQTR2J6wqq%2BeR1fz984%2BWmyfs3oI4SHK3%2FBBd58bfJ5fLxPORjUsD2EkjOZdBhbMFubrTA7JOBpQD6hzM0LoRQmwkLM0iNSwXUwgt%2B4vQY6pgEEndsEu4%2FO5ekQ3b7Oy41ExAzrQTZtZagiIFPGoY3JhP54Awol3b53zGJXKUB8N5oj8TP%2B6TPgtQipgyoHWimytpPBDHeGf2oD1thMBqzUSPl5ZWtd6otV45hxQ9Cqvkf4lCPmRZ8VTdYYeZzpCZTWyLsR0ssnDgfZ61NON7JzLe8s9pOUZlQNoSv8GEGQWLfKqfflW4TjKHLPHyheJUXq91PQRDQK&X-Amz-Signature=903ac008ac39e0f04725e1ebaa5ad6ef9066241ff003cc3bcf3685f85072ec3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLGO7AN6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsH6UZ%2BqOn0HVGkAGvjOA%2Fb%2FTI68ARu6Nl4Upya2N%2BCQIgfOxnf4RM2%2F2PKt7Lu2qqJQ73FcwGORTfVckmM8ZRJrMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNi%2BmHxBAAYMomgL8ircA5SZb4RH%2FPUzl14vXr8Xb%2FLe18GbMTzG4rc2DdWOO2MG%2BJRtUVt9hnr6NaNBpTllN%2FLcw1HKlG0puYF%2BMrF1a%2FbU7Y2QoApBkf85Fv4JGSh7fGDNE8v7UuMdIvzr2CX%2FaJ2H2War3pDl6kTBdEV7U8WFgTWNqzVUWJBEGFDU8oe87Qe6mpz64EeA4D3r%2FWyi%2B%2BIMJRHKI80WIBniIVg%2FqP7qBMsykAntzUKJu77Km7RrYI5Jo9numMUVZi1Pj0WXUf3VwFJ4B40Cj2sibflex%2Fwy1vLh1yJXJS3wYtm3iaDzkXfd3jqV8l42jhrn8aMfmxiGiRZPdg9%2FtN6lHqq3RQzkzhZpJ7Vqqp72NJV4Cg02WhVPIdHbCcv8uvBXAo%2BIGoIb5sCnb6re2s96KpMJ6upagm48uaFKNwuZ1OGGYUOTA8brBU9XRwTGVQauhvkjk7v3q0s7nrbY8pxhU1c2ZmhbwUbey5vaB5IsYHQ51bk6kPTCKzoVfFIdVPUWuNOz%2FJYxM2AH4PGUINc3xjh5pm58ntP4WkzFrStDmd6Ic33i9C5lb3yAxMk%2BwkCAa5t0rjP9SpAtNIkz8y0YNLepKiST85JbgyWXbzc%2BlIRAbiDEMPTiXWmzlHOnRltuMKHfuL0GOqUB20fjzbI1p1f6dp9vwb4hk4cbAFftAE6ss74%2BCXgxJP1IrZVvfFSFm7yImFqKhESgp2ZsWCzlwhgMo0PcIZt75PbAniA0%2BOkVPITQjozAWkwvFBJwimQ%2BDe9Kwgkl1Olyu1lnLF8GSWF5JIeZ7gm%2F6PYG%2BNis4jPChJQXcDTfVuXUTILEBmo6cY995ccdw9%2BEey%2FdzBvS55zgvYWoM6mvGdXpV8ZC&X-Amz-Signature=f346a764fbc4be4a9eb788dacdade73fa8e220e7a48b5ba95a50548105933f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

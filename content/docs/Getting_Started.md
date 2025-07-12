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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGMUY5YD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9V5qzpCcKAyy5wploBIAwVJv4kUWhUODYylUKGjLNpAiBrxgxbHail9kgeW%2F3Ows4DEYi2bK0eyjHHXDDobQky2SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDt%2FWQEM9fcuYaR4%2FKtwDaRw9uHix4tJk8FwaY22Zx8FcupuYDN%2B4iM8VojNHUw88qlhRIU66b2zumBd%2FssgAMez6sKsM7D%2BDgacekWGPDf01r1U3U4L0WvwulJy9eFtHrhUr5fHc%2F5%2Fjdo2RZToDaxDmVMv1rOgbHd3vZZgk6Fk%2Fb3W%2F3T9%2Fagx%2Blq64VVu40wniXHlm%2F0iyn73bOSPfW3fkaZG%2FL4zU6fd6ZMNvoSJRo9nHdyQlUOXKwe8Fr80OdFmbLBCpMipePnKKSTJ04h0xSrfVNpB%2BfAKX6szYTce%2FzmK69L5zjBAbPlzdL4obj600Fk2RGla5FiAOrc3Dtw%2FAfs%2F%2F0rqAu01FQwerXYePE7pDCdiKzi3Ak%2BxPEcCKEaEmbvSu8f49skTgpthoeCXmCmp%2BjyttsKQN9aG6C%2B9cRlb3e3f4fioGT3q%2FPiB2tOaZPlCBeAyaL%2Bb4iRzqtV%2F%2Btf3mXpU971kBenmKt7I5hFmtdTaYJ6HSWKNWYmmIjUyR63zLKVunHHf4jTlGSwGmc4o40irExKCDNGXNH91Qj9p6dfw7dBt%2FYmHVn2l%2BP%2FtjriYQmjnD9YZacl%2FzpOCSPOG4uAFYT69eHreetviuULJ5FlzknlZcTZQhksT0UuzxgR3eVGC%2FrHkw8fzIwwY6pgEmEJzuZIR4%2FeVOuMU1MpvJzErVqd%2FbH1p3DWOoE6Jgh94Llk88z6IhCX4wruYJ07XhIJ3hX2iCzr0bCZcdckCtKqJRzhBDLqqMeGxwNtylR68Khkcno6HGTBu%2BA%2B%2B9k5nGAmCqMlT4Nq3%2FpQCZynIX5x39ecUJXd1VzKFzcsK%2F2arZEkye2fD2%2FmDZ9d93bn4Ey69CtIogUqWOuvl8nTCW1rCnXTNN&X-Amz-Signature=d30ea96ff202ce33b8c153cddf8dded36d67ece6771691613f133c4cff73af86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGMUY5YD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9V5qzpCcKAyy5wploBIAwVJv4kUWhUODYylUKGjLNpAiBrxgxbHail9kgeW%2F3Ows4DEYi2bK0eyjHHXDDobQky2SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDt%2FWQEM9fcuYaR4%2FKtwDaRw9uHix4tJk8FwaY22Zx8FcupuYDN%2B4iM8VojNHUw88qlhRIU66b2zumBd%2FssgAMez6sKsM7D%2BDgacekWGPDf01r1U3U4L0WvwulJy9eFtHrhUr5fHc%2F5%2Fjdo2RZToDaxDmVMv1rOgbHd3vZZgk6Fk%2Fb3W%2F3T9%2Fagx%2Blq64VVu40wniXHlm%2F0iyn73bOSPfW3fkaZG%2FL4zU6fd6ZMNvoSJRo9nHdyQlUOXKwe8Fr80OdFmbLBCpMipePnKKSTJ04h0xSrfVNpB%2BfAKX6szYTce%2FzmK69L5zjBAbPlzdL4obj600Fk2RGla5FiAOrc3Dtw%2FAfs%2F%2F0rqAu01FQwerXYePE7pDCdiKzi3Ak%2BxPEcCKEaEmbvSu8f49skTgpthoeCXmCmp%2BjyttsKQN9aG6C%2B9cRlb3e3f4fioGT3q%2FPiB2tOaZPlCBeAyaL%2Bb4iRzqtV%2F%2Btf3mXpU971kBenmKt7I5hFmtdTaYJ6HSWKNWYmmIjUyR63zLKVunHHf4jTlGSwGmc4o40irExKCDNGXNH91Qj9p6dfw7dBt%2FYmHVn2l%2BP%2FtjriYQmjnD9YZacl%2FzpOCSPOG4uAFYT69eHreetviuULJ5FlzknlZcTZQhksT0UuzxgR3eVGC%2FrHkw8fzIwwY6pgEmEJzuZIR4%2FeVOuMU1MpvJzErVqd%2FbH1p3DWOoE6Jgh94Llk88z6IhCX4wruYJ07XhIJ3hX2iCzr0bCZcdckCtKqJRzhBDLqqMeGxwNtylR68Khkcno6HGTBu%2BA%2B%2B9k5nGAmCqMlT4Nq3%2FpQCZynIX5x39ecUJXd1VzKFzcsK%2F2arZEkye2fD2%2FmDZ9d93bn4Ey69CtIogUqWOuvl8nTCW1rCnXTNN&X-Amz-Signature=4667e9dedd2292865f3109f68fb80ad97dbaec98de4d701f688eed0f6a97b604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGMUY5YD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9V5qzpCcKAyy5wploBIAwVJv4kUWhUODYylUKGjLNpAiBrxgxbHail9kgeW%2F3Ows4DEYi2bK0eyjHHXDDobQky2SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDt%2FWQEM9fcuYaR4%2FKtwDaRw9uHix4tJk8FwaY22Zx8FcupuYDN%2B4iM8VojNHUw88qlhRIU66b2zumBd%2FssgAMez6sKsM7D%2BDgacekWGPDf01r1U3U4L0WvwulJy9eFtHrhUr5fHc%2F5%2Fjdo2RZToDaxDmVMv1rOgbHd3vZZgk6Fk%2Fb3W%2F3T9%2Fagx%2Blq64VVu40wniXHlm%2F0iyn73bOSPfW3fkaZG%2FL4zU6fd6ZMNvoSJRo9nHdyQlUOXKwe8Fr80OdFmbLBCpMipePnKKSTJ04h0xSrfVNpB%2BfAKX6szYTce%2FzmK69L5zjBAbPlzdL4obj600Fk2RGla5FiAOrc3Dtw%2FAfs%2F%2F0rqAu01FQwerXYePE7pDCdiKzi3Ak%2BxPEcCKEaEmbvSu8f49skTgpthoeCXmCmp%2BjyttsKQN9aG6C%2B9cRlb3e3f4fioGT3q%2FPiB2tOaZPlCBeAyaL%2Bb4iRzqtV%2F%2Btf3mXpU971kBenmKt7I5hFmtdTaYJ6HSWKNWYmmIjUyR63zLKVunHHf4jTlGSwGmc4o40irExKCDNGXNH91Qj9p6dfw7dBt%2FYmHVn2l%2BP%2FtjriYQmjnD9YZacl%2FzpOCSPOG4uAFYT69eHreetviuULJ5FlzknlZcTZQhksT0UuzxgR3eVGC%2FrHkw8fzIwwY6pgEmEJzuZIR4%2FeVOuMU1MpvJzErVqd%2FbH1p3DWOoE6Jgh94Llk88z6IhCX4wruYJ07XhIJ3hX2iCzr0bCZcdckCtKqJRzhBDLqqMeGxwNtylR68Khkcno6HGTBu%2BA%2B%2B9k5nGAmCqMlT4Nq3%2FpQCZynIX5x39ecUJXd1VzKFzcsK%2F2arZEkye2fD2%2FmDZ9d93bn4Ey69CtIogUqWOuvl8nTCW1rCnXTNN&X-Amz-Signature=cb0a3b4f52dbce42ce94e56dac7fdfcafc8a7e754f09a174efa12ac11a0db1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BI5LMLT%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvHQDiRDmwU0XcjvBT2pi%2BrdPPveB4mQyejx6o6O2iYQIhAKAvGmF6ks2CJXaAXR2PWBXVwYCWu5%2FO4XtU4FxnKMEDKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3Cppg4ddZH9gwv3kq3AOdDXtkWmERGGmiFexi2ReUBop7K0y%2BGDxNbdnqWsXnhjPUkdLJge5%2FIiFT6lrMAJh3%2B4ggn7kxC1za0QVTrjh4Bugj2Q4Cp0%2FxHsZ1vsaV99NkwSR9FgyH3Oznus8y2O6yZbhkAH%2FyB2dzEaaKOoM6Xhinenu2ZmdyAzt4fmw1G1baQuiupFqGQlHGtAw2VmAAs6ZbtF8M0hNAgjdQjoTQV4I9yVIHuEzihw63QMDrl5lfgHEcg7O2Tzm0leGNlRrb%2F2I8j0x%2FToGpA8K8sym6j0OpTbI21EVIlj3PU5wxxgMZAFdFWmWCo9mRBT%2BqbMVd%2BQFJmUiTLm9MqN%2FJ4enVVvukMn0VZQK5vYjJuvaldBszX5P5XiIoyu4cG2LsYS4HCUpU1G1Rk8Sx4nDyw1gy4wVjuqCHxW2cznvFWfhJWm%2FBs4DkHX%2FXmltLLl71P2CPoYR4IBEtd2C%2F7enl1O0Zo%2BeG3UBwAkQgEubDD1FlhrYeCOK3gtoxlxhkVQKaAjdBqNjK2N83rp0oKvnoLikFQEboTXSU2cXTz6o3Wi9N4mV8psfANVtF%2FH9gFH5QwYLp%2BN%2BxWcoPNMDJozD5ipbUQYRrbBZxjqLzM4F6Q4E8P%2Bzirh8qEmLi6kC3pTDm%2FMjDBjqkAUodL5FdNWBc11yImKPMLIN9JE%2FfsydFwNuBRM7f%2Fjgi8esRTwKjDo28YvZ8Z4%2BF3hmNi9ZLjl7hZJOSBXL90A7j9Tz3x%2FWqNdySoUgJjy2XyeZgcXFRJUxV4h5WyLCyLDv%2BGS1PhgWK5LMr%2FtgU3ZFRbcYAVT%2Beog9Ad1llBO%2FGRlGDE0ahhTHp5%2FWjk8fFj6RlVlcb6BbkrA9ICNA4wG2pgBzD&X-Amz-Signature=d83edeedf61bbe54ff262df4eb8ec206507657287ca687cfaf2fffefd238ca96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CH23KT6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B2%2BdJciKwvHnc7cNR%2FgwBdVXqYGgeScJ7X8iHTLhFoAIgUSRnR0JLyZ3HsISPtVc2R6mL8QyVyrUAoIOYAAVmp98qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbXiqZ6rRJTEZQ4SSrcA3ir%2BdmQgjC9HinPkcDqG2kiF9HB6b6RbGlE4Yr8pmG%2B6GiloNXEqypThp9sB007EhCy8VyBRyoq2oZM5Z6W82Fm78Oj%2FmRAUcjh2hZp2QCvy4rAxOoB638SvvQDVCEGgwKp7mslvgJfFHxwKo5WLYVDFD4%2FUO3V9INYeWPYiMxUcj2FlqlCSq9iWBbw4Cs02J%2FSrVtxtpJOi8JslTRFEbb%2Bw9evBz1TgvDb5ELhnM4YlKngz%2Fl3rzNbu8hzGC3Czqj5cemGRVh3oOK%2F92mX7BFxvP82hn%2F9QSo9Rg3V%2Fbn8w5634BIU4BJBVocDHNBfWpXDk95qaB6sURYUQT6AlP4cJJoHCFvv368AcoxsGCg9HaGWXyEt5ghYX1or3EiIe2MTlYSEOVpGgREoUyKFBANpGSwu7veehk8T3vvi96wSxQWaXRKpGIuFyoycth4Wef9xhjPrOvElANCRjxBmdFrKVonyeW0s%2F%2F8TcSgWkwTopjQY394vhIaImgEK6SAmysij%2FSn18P6dKC%2FzOMA9uiOaASR8cCAIeD8%2FinxKlv5lgaX9ShZHMWXGSOA0QUPEIc8CXHEtyM62oVHoMKlpHYFRNDc8UzJKTW8qso5B29JNnvyKY1TmXV2DG1tbMNT8yMMGOqUBZ9FcvKJMe7OfJAd%2Fjyp%2Fd7B7h9QQeucTy3vHUll2pilfGXELWM%2FPezoRG3RUmaGxGuWbhe%2FvqoPmpFkMIGJNr3uFGqtHYVwo2lueOsg%2FQGM%2BM1P5vSVp3g5dXxX8daBgb4qrqk3tlOBRpjwoPx5YkuVPeNwaabrL8v4B9AfjJwloBLmhQFyCwyCCnqW%2ByHZtzflCnSKbdx4QGnJcwLhGpE6kGzdz&X-Amz-Signature=a70b6c8abf3e8168187b5b19fe337ebe220505a11d3c793fadb3ec78b3039c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGMUY5YD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9V5qzpCcKAyy5wploBIAwVJv4kUWhUODYylUKGjLNpAiBrxgxbHail9kgeW%2F3Ows4DEYi2bK0eyjHHXDDobQky2SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDt%2FWQEM9fcuYaR4%2FKtwDaRw9uHix4tJk8FwaY22Zx8FcupuYDN%2B4iM8VojNHUw88qlhRIU66b2zumBd%2FssgAMez6sKsM7D%2BDgacekWGPDf01r1U3U4L0WvwulJy9eFtHrhUr5fHc%2F5%2Fjdo2RZToDaxDmVMv1rOgbHd3vZZgk6Fk%2Fb3W%2F3T9%2Fagx%2Blq64VVu40wniXHlm%2F0iyn73bOSPfW3fkaZG%2FL4zU6fd6ZMNvoSJRo9nHdyQlUOXKwe8Fr80OdFmbLBCpMipePnKKSTJ04h0xSrfVNpB%2BfAKX6szYTce%2FzmK69L5zjBAbPlzdL4obj600Fk2RGla5FiAOrc3Dtw%2FAfs%2F%2F0rqAu01FQwerXYePE7pDCdiKzi3Ak%2BxPEcCKEaEmbvSu8f49skTgpthoeCXmCmp%2BjyttsKQN9aG6C%2B9cRlb3e3f4fioGT3q%2FPiB2tOaZPlCBeAyaL%2Bb4iRzqtV%2F%2Btf3mXpU971kBenmKt7I5hFmtdTaYJ6HSWKNWYmmIjUyR63zLKVunHHf4jTlGSwGmc4o40irExKCDNGXNH91Qj9p6dfw7dBt%2FYmHVn2l%2BP%2FtjriYQmjnD9YZacl%2FzpOCSPOG4uAFYT69eHreetviuULJ5FlzknlZcTZQhksT0UuzxgR3eVGC%2FrHkw8fzIwwY6pgEmEJzuZIR4%2FeVOuMU1MpvJzErVqd%2FbH1p3DWOoE6Jgh94Llk88z6IhCX4wruYJ07XhIJ3hX2iCzr0bCZcdckCtKqJRzhBDLqqMeGxwNtylR68Khkcno6HGTBu%2BA%2B%2B9k5nGAmCqMlT4Nq3%2FpQCZynIX5x39ecUJXd1VzKFzcsK%2F2arZEkye2fD2%2FmDZ9d93bn4Ey69CtIogUqWOuvl8nTCW1rCnXTNN&X-Amz-Signature=d3a1fb6af1f55ee939b0d6c97590d54ce7fe59e6688ef5e8a23030fbc02ce204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

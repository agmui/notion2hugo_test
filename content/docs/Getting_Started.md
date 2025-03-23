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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXR3P6K2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0t9zpSCelARu2w22BnUlr8MGcHNeGuSnMO7ClwWQJmAiEArNd63dc7UxcrYNN6WWS6dd9cPSyaGCjO7VnRWp2YsY4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKf86lSO9QSVvyghfircA5ICiGi9NouGpqfCpUg%2F%2Fc9%2BpcbMdK2bQdOt3bCVoNELflbj6D7%2Btm%2BTKJGP9DEdREUf75eVHbDLux16Sw0fRvg5civBda8dySxPx5%2F6TnjZl4hx64LLuxJby14YAyZaysjCiXdEMYd%2FNYQpqPyd3geHgjpMqeHngnAzNq%2FH39RbdSSfQI0Eo4HYsdsyl%2Bm4i1vNIdLSPSL6SoE0fM1S7uGFFSmWlsBf9qcfaYNzhpkXocS%2BQoojjdcN0FedfPmHBpc4sfYjsc6cTY6YtMQYw9YoBIJNAXCwpA5k%2BWahiPJyTXVYQlcxI9AraW7O6mCaztRlxaO%2B4zs03Sv8qkF3Tg0B%2BJVEj%2FBoNhZLxhx1H37quASiCeZkGIkgBDTatguWWzSjaPrjU21Z%2BafzSspy77Wemi6sE4RbC8nQbutNyD80ZXRP3Koq3b1Iu7spTpEZYLTvAsLEjK%2BNFgyeejj%2FcL1t0x5V7%2BcqTp94BXdK5Fl7EH%2BhmyRMJgD30WuHitDZDbxVyF%2B9BamgKC6RfblpjwpO4Ge8EEJtB3V6cA7hUdVVxwo%2BykWi7Wr9TAVvL%2BD3Jyfwz5daHfnwWm5hk4zczRY7vgAYTFtEIMSsflL3ecavLrh3eDKWc04APts6MIvj%2Fb4GOqUB%2BFGo2SjyarxmlU9oXolEEy%2Bjh5mT7SCmo4JV2xjN6EihnmIXevnXEVecuk6inBdbwcIFuFmFjFw1DoVGWobkJFSzarZHLsSaGb5Mrw%2BunG%2BxbWWlU%2BLv%2Fc7H6lhgxgiMr8ACzgip4TOjFxw6Syg71YWxOb%2Fmv2vqhRy8NUrveBO0YQhfwVfDbZuChk5FrQBFWCjYYyLqxz%2FVGzByJrgja2icVjPd&X-Amz-Signature=15b2690ca923f41938af3332a7261a376c191bc273d88b2d37e00030322a1823&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXR3P6K2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0t9zpSCelARu2w22BnUlr8MGcHNeGuSnMO7ClwWQJmAiEArNd63dc7UxcrYNN6WWS6dd9cPSyaGCjO7VnRWp2YsY4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKf86lSO9QSVvyghfircA5ICiGi9NouGpqfCpUg%2F%2Fc9%2BpcbMdK2bQdOt3bCVoNELflbj6D7%2Btm%2BTKJGP9DEdREUf75eVHbDLux16Sw0fRvg5civBda8dySxPx5%2F6TnjZl4hx64LLuxJby14YAyZaysjCiXdEMYd%2FNYQpqPyd3geHgjpMqeHngnAzNq%2FH39RbdSSfQI0Eo4HYsdsyl%2Bm4i1vNIdLSPSL6SoE0fM1S7uGFFSmWlsBf9qcfaYNzhpkXocS%2BQoojjdcN0FedfPmHBpc4sfYjsc6cTY6YtMQYw9YoBIJNAXCwpA5k%2BWahiPJyTXVYQlcxI9AraW7O6mCaztRlxaO%2B4zs03Sv8qkF3Tg0B%2BJVEj%2FBoNhZLxhx1H37quASiCeZkGIkgBDTatguWWzSjaPrjU21Z%2BafzSspy77Wemi6sE4RbC8nQbutNyD80ZXRP3Koq3b1Iu7spTpEZYLTvAsLEjK%2BNFgyeejj%2FcL1t0x5V7%2BcqTp94BXdK5Fl7EH%2BhmyRMJgD30WuHitDZDbxVyF%2B9BamgKC6RfblpjwpO4Ge8EEJtB3V6cA7hUdVVxwo%2BykWi7Wr9TAVvL%2BD3Jyfwz5daHfnwWm5hk4zczRY7vgAYTFtEIMSsflL3ecavLrh3eDKWc04APts6MIvj%2Fb4GOqUB%2BFGo2SjyarxmlU9oXolEEy%2Bjh5mT7SCmo4JV2xjN6EihnmIXevnXEVecuk6inBdbwcIFuFmFjFw1DoVGWobkJFSzarZHLsSaGb5Mrw%2BunG%2BxbWWlU%2BLv%2Fc7H6lhgxgiMr8ACzgip4TOjFxw6Syg71YWxOb%2Fmv2vqhRy8NUrveBO0YQhfwVfDbZuChk5FrQBFWCjYYyLqxz%2FVGzByJrgja2icVjPd&X-Amz-Signature=602dfb6a691fa88c0b6c08ebdcc3adfa8df3fddc3634d726f143e5497f92129e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB4AMYUG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCnxfBhluy9Hxm9KiVekUOLqLETDQh%2FmoMqhfI34CALIwIgVnC3pz9FHsFD0c7wH3raLRlrejsRNBGC%2FoBD48Qqm0UqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSIqjQEO5N7%2F7UcGyrcA6yXOciGyF15KFme%2Bt6XZQsoa3DGyfsPvo9iUVsn2b28epwi5X5ZGQS5LsBmj4AmZQeGmd69VWhSZhCfvAmAkyxMLshXYoDgI3iElG9sCJJpCgeZeOSUjN3eT5xrrZD6M5i37QIGVZkVHPqAsGI2r3Wf%2B4LgY2%2FNo2tXknxoMTE10QyB1edQ6H%2BM7iF3T14TvQSslMJ9Vc5ZJtjVc4nByDl6PbtnLmiVF5WT2B%2BKlmEoEBcf65tKRw0z4BATOouX2o7F01WQvlYoLYkJmyO5G7wr650qgra2Z6eV6pMm7p452QNjb5orSsj2%2FrYVstSP%2B4vymxW0kglB%2FMI7%2FIw%2FfYDAfR1OpI9Ie3mv2py4OtZFnEOdLObquAm%2BgXxZov6PafwLs%2FvJtooNAgkrpXVupmJO8UjOWMe%2BHNM5GCOvANZG%2FmwIoZxz9TA72q3GsVlKio9BNyEHFJtsQYm3S1PY5XeA13K%2FHZAPY4L3cf8sVfMD84KVyCPYJ%2B9A472s%2BzFfHZNq8PD%2F0Qgil1OeCm4LjnS8KZF8v1CWikz0YHMXqvovF3tE689vFzUdJmO3s4MLSrFqq67CqtvCztAAq8tIACP9UGfDTBpLbnzGoAEVF9jEGM9nOh77%2FvMtcBk7MJDj%2Fb4GOqUB3AKCxkDCBmHXaULEwdaIdWkRS7d%2FcespgzL11YnZzESptGqGVuzzbQNxjtwp3kFX9Jiwlgfkoa6Ff5IB5bazqG8g65eqeLIKnW8mSA7cOtx5kjzCP%2FfDoVJhoG%2F24v51L0I9XNPp7rlpkCGkgvx2VE1LfgcDzuvMnQuWkofnjtnHDcN%2FGtpql5B6MqCvCwcPq99XFqIe7Yc3WaxwRpFmLZanrA5i&X-Amz-Signature=4d642ce94237b408be94d815fab630a78dac9db8553e604eb9e7b3e44e541b25&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOHPLTL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH7iDGGpiwVVQJQYg%2BqywRhf%2Be%2BgNQDuV%2FVjQpowL1SWAiEA6AVbTxkyEiOVelNPTGFfMaGKC2P6bQZe6ehbBP2Pia0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4mt4GvrD1preb%2B1CrcAyKMavJUItQGrKyl1mAHyD3T1y%2BxlLiI7OLxwLWkD2MzZBCGyw33DlPnlzhKNdUXDhU88afX1WPoxppXSWKXAjWNNAFlRqEodfw4M8H1%2B%2BuYXuOhB3v3xtjMK%2FC8tqpznzg%2BohTUmHJkGQ0M0Un98%2BBV7zxQu8KBqgh8UdBm3q%2BZYJlfrfdzbKfb93vuHWWPYscOo4JuwtKUtIinNWp8%2FlODi8ExITBPSeBdSjSsoJ%2BMXNffK1pvX7pHfk2sGIs%2BFRASeVUKfO4Wqcy1Ev3Ng6ofZfU%2Bc%2Fozacya3uH3SiMabP21UIoWxNP%2BLAdgyG8R%2BBoVgq6a7YleWPC869434lKOWUtjCYkC4U8mZo4OXF7YTvRCXz%2FpZiIiY3aTnrxqojli7SrcMX62KTHTLGd9bpxAY1F%2BYzy%2FiM%2FqpMWAWDNiIjhU0ImQLDDD2vkdWlg%2BUPZIq1xormD9xzZVQqMJJrjQSKS5s2U7OSUkMo%2FycNE9fQIraQo68p7oU8xLjUk2ls7jXtNTRp43e%2BuYRXPpf%2BHqMhVY1ufPNgMCVAISutL8aahFKS%2Bd0%2FuyEKSqeyEKhMOnKbEeFI9JEpbjsUnnk5kszgtJYjxTojZL1gD8gui%2FhkhjYOhUd6qReSvTMKrj%2Fb4GOqUBE7QsOEy%2BmU%2F6S%2FEx6NjlL7vz8Jx%2FpEzRQFj2G%2BBs537rKeWdwYiB0%2FU9pMv9MfvM243cAeFVZwuVh4E2Ukf8jjtDCI0stg5IJGRhggtbzh7fl2wpkJHkGzVuj%2FmUkI2vC9XDWRMuqsAxZOjt7ooijfWaqlv1tgEdLdPQACtSoKPcX9%2BkJmFYjyGxMbAPLkag0njwtagNTPMmlcTLakISh57vcQwp&X-Amz-Signature=dd4cf8ddfe75a66536cedce00819641ed74d08561016d281ca9c846029865707&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXR3P6K2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0t9zpSCelARu2w22BnUlr8MGcHNeGuSnMO7ClwWQJmAiEArNd63dc7UxcrYNN6WWS6dd9cPSyaGCjO7VnRWp2YsY4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKf86lSO9QSVvyghfircA5ICiGi9NouGpqfCpUg%2F%2Fc9%2BpcbMdK2bQdOt3bCVoNELflbj6D7%2Btm%2BTKJGP9DEdREUf75eVHbDLux16Sw0fRvg5civBda8dySxPx5%2F6TnjZl4hx64LLuxJby14YAyZaysjCiXdEMYd%2FNYQpqPyd3geHgjpMqeHngnAzNq%2FH39RbdSSfQI0Eo4HYsdsyl%2Bm4i1vNIdLSPSL6SoE0fM1S7uGFFSmWlsBf9qcfaYNzhpkXocS%2BQoojjdcN0FedfPmHBpc4sfYjsc6cTY6YtMQYw9YoBIJNAXCwpA5k%2BWahiPJyTXVYQlcxI9AraW7O6mCaztRlxaO%2B4zs03Sv8qkF3Tg0B%2BJVEj%2FBoNhZLxhx1H37quASiCeZkGIkgBDTatguWWzSjaPrjU21Z%2BafzSspy77Wemi6sE4RbC8nQbutNyD80ZXRP3Koq3b1Iu7spTpEZYLTvAsLEjK%2BNFgyeejj%2FcL1t0x5V7%2BcqTp94BXdK5Fl7EH%2BhmyRMJgD30WuHitDZDbxVyF%2B9BamgKC6RfblpjwpO4Ge8EEJtB3V6cA7hUdVVxwo%2BykWi7Wr9TAVvL%2BD3Jyfwz5daHfnwWm5hk4zczRY7vgAYTFtEIMSsflL3ecavLrh3eDKWc04APts6MIvj%2Fb4GOqUB%2BFGo2SjyarxmlU9oXolEEy%2Bjh5mT7SCmo4JV2xjN6EihnmIXevnXEVecuk6inBdbwcIFuFmFjFw1DoVGWobkJFSzarZHLsSaGb5Mrw%2BunG%2BxbWWlU%2BLv%2Fc7H6lhgxgiMr8ACzgip4TOjFxw6Syg71YWxOb%2Fmv2vqhRy8NUrveBO0YQhfwVfDbZuChk5FrQBFWCjYYyLqxz%2FVGzByJrgja2icVjPd&X-Amz-Signature=21e1539c1639b4d8125aa0a2ec565fde9f970334cfccd4321c2237910a6e7a59&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASQFCTH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHXXBd4LzLUCkuHMtZMncMIGVlZ9EYrL%2B679YZsdHtkhAiBbBqp4BWijw54l%2FJ3z%2Bz1XxcOheoAw2JWi3oT%2BbPhc4SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhLCBCOIPvHepDIvNKtwD2%2BdkQRNPgo9dNK1aGubkaTzyrrhh9vtx0eibIbYZTPCYSguxAVexH5cOpLGQgjUHRnOtsTLoJ4mWfmBVO%2BhF%2B0Gl8Dn8T1vFjdlTYBhOWt26AbnynaLOAZ0TaXcvo3757Y7wB7GU8MLV8ZBrOgADWIZs%2BGe0J6KM2MyUPQHw0gWz%2FBUwlkGT1tQo33dwU7fcsfYE3HtQy75gtdc%2F20VB7ymcGH324P%2FZeMVnATkmAYQFNdVmR4vC%2BsnJCxDs9NoSFpMndEWYgh2%2F5BFBaxfSngTgnIHieso9XIvZ01W%2BCNw0lI1eJzpSdEvD7re%2BEp%2BRN3ugCawGlw6wyBfnwBjCkGE1AXfSjW4%2Fg7wwTWUbjuXpH95b3EmatS6ZqPG5qMg2hgj4bz7M1Pc0g1pg8MQ4e5fuOpttSYqB3BKKzzVmSw4hDxBOZA4%2F4stcsyl5aWuIykhpj2llzfu9JflUmRxv%2F9x8yEbFIUZobFV9pgxhTmVK4nTO2PMS6JtielBJz1%2BOcCM8Tgr9LRF4xR9rQRjQqgZUyB6GyGOMAH0mrjCwlUmsnDtF1rPijbpUUbHccBHvZqfP%2B8kMCAnK83Unaf4vJYCugzDengOUPnRXM37HTk0FXPPfI3NzvZHz9gcw17ObvQY6pgG1KjoOLf5mgRbHq8kOjfKPj0CrSbwA7LzjO0fQPI1kr9Gz4J%2FHqgVqngkx5ECPQue42GdrQ5LSIf7V2yp0ReL1gBYHEC3le1s1XXOVP0Qzp6POn9B5vLvh1ihn2Sk17heYvLD5gR67KpaRmfzFXd3tfO3MLoGIBU0798NDm5POAxEVCRHvUsDGlwT%2FTZyN75hwc2qnDiQR6Cz%2BsPWFEHcKb1p%2Fi4Io&X-Amz-Signature=e369c2a8ae024ac5007a36f5f9bf1fc299ba242bd14ef49d5c736aed5e758c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASQFCTH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHXXBd4LzLUCkuHMtZMncMIGVlZ9EYrL%2B679YZsdHtkhAiBbBqp4BWijw54l%2FJ3z%2Bz1XxcOheoAw2JWi3oT%2BbPhc4SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhLCBCOIPvHepDIvNKtwD2%2BdkQRNPgo9dNK1aGubkaTzyrrhh9vtx0eibIbYZTPCYSguxAVexH5cOpLGQgjUHRnOtsTLoJ4mWfmBVO%2BhF%2B0Gl8Dn8T1vFjdlTYBhOWt26AbnynaLOAZ0TaXcvo3757Y7wB7GU8MLV8ZBrOgADWIZs%2BGe0J6KM2MyUPQHw0gWz%2FBUwlkGT1tQo33dwU7fcsfYE3HtQy75gtdc%2F20VB7ymcGH324P%2FZeMVnATkmAYQFNdVmR4vC%2BsnJCxDs9NoSFpMndEWYgh2%2F5BFBaxfSngTgnIHieso9XIvZ01W%2BCNw0lI1eJzpSdEvD7re%2BEp%2BRN3ugCawGlw6wyBfnwBjCkGE1AXfSjW4%2Fg7wwTWUbjuXpH95b3EmatS6ZqPG5qMg2hgj4bz7M1Pc0g1pg8MQ4e5fuOpttSYqB3BKKzzVmSw4hDxBOZA4%2F4stcsyl5aWuIykhpj2llzfu9JflUmRxv%2F9x8yEbFIUZobFV9pgxhTmVK4nTO2PMS6JtielBJz1%2BOcCM8Tgr9LRF4xR9rQRjQqgZUyB6GyGOMAH0mrjCwlUmsnDtF1rPijbpUUbHccBHvZqfP%2B8kMCAnK83Unaf4vJYCugzDengOUPnRXM37HTk0FXPPfI3NzvZHz9gcw17ObvQY6pgG1KjoOLf5mgRbHq8kOjfKPj0CrSbwA7LzjO0fQPI1kr9Gz4J%2FHqgVqngkx5ECPQue42GdrQ5LSIf7V2yp0ReL1gBYHEC3le1s1XXOVP0Qzp6POn9B5vLvh1ihn2Sk17heYvLD5gR67KpaRmfzFXd3tfO3MLoGIBU0798NDm5POAxEVCRHvUsDGlwT%2FTZyN75hwc2qnDiQR6Cz%2BsPWFEHcKb1p%2Fi4Io&X-Amz-Signature=044dd59b1788f582e7719d2f88c1235755a012aabaef88acee977c5483fb24b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OK3UAKK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCICDE5W220Mo4GCKb7gvN2R8EGktcY8W8YYABoTN%2FJ4MoAiBcuPMNY1rLI1XAERVswlaBiZ8hGLsIdWYbLewJyM8lPCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMguHlTVc1QUEluRHoKtwDmsNYVHVfHUg9Weeh52CWA9AlYmmlTz5EUGOUjxi%2BSxiqdo5qDFQN%2BtaHPznfgwnODfPEM47g%2BEeYiCBUetMeltHaCTOPJcSHDpDo5%2B%2F8eJwE%2BEjbQqtfMRswYBpbaQtuNOCS%2BoTP7znou4ZDgunpuQmvrhYihIMR24geGit1B1hGHeUvIUbO%2Fp5n%2BlLU5VCsvF44alboVJzWgcWTuYqa2cjD9isjmEqK5ROdXXc%2Fp1US6DlhbGPRBwArc%2BPSftybNc5R4uYtAirfHBhgFYnF1oN3iwsWA9PQ2WbJ8c2NTilScbv55ZAoHAI3SHJGumkp79JMwHJ5GuItkS9apwS9z2Fm1HYLTKJKQ38xRd6dr43J6FjdMXtG9BZlwXZBkA4dT7fe6XFfgITb7Fi3lMti4lB9%2FCAAgKAHdnOlhRz%2FPG8hUTzt7mTIUW4f7Cc1kM7K%2BGzz3fGbAolSmT6u4Dcu%2FkQD8oKh3zaEvdH9x4nzDflRL0l5Mu0KqS%2F9jRmqBr2dj52jiQB0H40RBcs8URA2w8eXfmk44y29s50EXfhEqjNxvJETQmPHmJ44LcuBdemTlBzFusP7kT%2F8WidJOEGOzw6B%2FfkQPPfOsQWNi0SWFYP46rmU4srx%2F3tlHZkwr7SbvQY6pgEPpZTH6h60HX2tHMLwACZhsdHZmqY2RIN88ypQ6K0KxgEvi72LXOxBZxSu1vCpGtrtyy4lbejj88vEtN%2FW0rT9Ja3%2FeIHAqWc%2BReggeCX0eoBt1wMNQLe%2Bdw9qrbKgD4NDUXSioBYfVm%2BQPrdwKPBYQuzeasobzhthQ5a3TRkWOEra1SLJZDzS8mOj%2BAsYx76TANQLehu%2BMCU4iGqxawKAQVX%2BalqK&X-Amz-Signature=4ae35be02645f6c232383c229574ca416be232a9b9abc66ca13560f7c15a28b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MU7YMKM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDoyo9IL3UnFa5eLS7q%2BKEycAMP6LS566W5z0FaeCmPsAIhAJChBU9SkhDDXp2Kd8bxElJsoSIf3QQWbuoJ13%2FkqbUvKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNuBKdYdHEvkOxWJAq3APQyGmKZvfTHp%2B%2B494nRPYd%2BUtxrDL1IZScCq%2BXoj2t6zGudTNDknDHZCTl687jCrKDiO8dYLYpsbUbFabjpWcH85bfP%2BMo4lPxzgIZ0DN7H%2BveHeTshqGjERRhKnRvouhtC08a78QpkvS9kxu1mhCLQR6tMKBvMT%2BVE6S%2B8rW0JkKOiblx7ftk6Ao139eEf3cmmk5ufsI9DVBk%2FKDFjiaySREFsWzq936xH3qHa1Wv8wqwrC%2FDjUEu%2FY0FXRtSVl1H8d2v1zTld4upBt7tKhBi2la%2F66SQ%2BUsZoUUi0Mak0ecxhzhBnHBa278dH1UXoTGbSkVbS1Vd0Uv8rr1VWmXW1je%2B8ULzUhRi5pYP5k8TI1aVY2VUBa%2FhyCSrBYeAVA4F8KPXQyqTuHBl5bgaZqW0BwYEs6bWJSSlc5dZLPwAS03XYPb6BbEZqT07XQI04dOMkFXH0Cgn5Ad03fOJDkSH7OT1GRht%2FfQcfqeL5%2B%2FTL%2FUNBUz8H1y45PhnNXp5jezq%2BrxeYSX9Y0oOtwv2cVsskMqsSWmXJ27ELvKuTVHx3%2B9JmBtH5HKjyubo%2Bj6c85HGoisBDsDC4g2cQn3Kni9xmAcbJl5fvTS%2FVFPcK6i3EyK%2BienCntPFrJh5fDDTtJu9BjqkAYBPa9OwxEWBGb1Nd6WVgs%2BgZhUS6gOOGg2BbT7ZpkLbBf2dYy5sVIXfMj4MJj%2BOxpqgBdazrA3zfJG65PmSJblWPq1ZNwIUSzUnji7amkqNRDgGbrXqYlAROVGzhOCBTZw8AU%2FXLrvcObEI1pBGZeFO4xaGr%2FqY%2Br2PJK8t%2FXv1TCqoRWuTtvYOeNBMdcPOhYH02M%2FEtDzaR0uMYkwo6erUDXEI&X-Amz-Signature=680af90b1567035f4c878d40aeeddf2575df97728d51fbd74e0b52e340a43bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASQFCTH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHXXBd4LzLUCkuHMtZMncMIGVlZ9EYrL%2B679YZsdHtkhAiBbBqp4BWijw54l%2FJ3z%2Bz1XxcOheoAw2JWi3oT%2BbPhc4SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhLCBCOIPvHepDIvNKtwD2%2BdkQRNPgo9dNK1aGubkaTzyrrhh9vtx0eibIbYZTPCYSguxAVexH5cOpLGQgjUHRnOtsTLoJ4mWfmBVO%2BhF%2B0Gl8Dn8T1vFjdlTYBhOWt26AbnynaLOAZ0TaXcvo3757Y7wB7GU8MLV8ZBrOgADWIZs%2BGe0J6KM2MyUPQHw0gWz%2FBUwlkGT1tQo33dwU7fcsfYE3HtQy75gtdc%2F20VB7ymcGH324P%2FZeMVnATkmAYQFNdVmR4vC%2BsnJCxDs9NoSFpMndEWYgh2%2F5BFBaxfSngTgnIHieso9XIvZ01W%2BCNw0lI1eJzpSdEvD7re%2BEp%2BRN3ugCawGlw6wyBfnwBjCkGE1AXfSjW4%2Fg7wwTWUbjuXpH95b3EmatS6ZqPG5qMg2hgj4bz7M1Pc0g1pg8MQ4e5fuOpttSYqB3BKKzzVmSw4hDxBOZA4%2F4stcsyl5aWuIykhpj2llzfu9JflUmRxv%2F9x8yEbFIUZobFV9pgxhTmVK4nTO2PMS6JtielBJz1%2BOcCM8Tgr9LRF4xR9rQRjQqgZUyB6GyGOMAH0mrjCwlUmsnDtF1rPijbpUUbHccBHvZqfP%2B8kMCAnK83Unaf4vJYCugzDengOUPnRXM37HTk0FXPPfI3NzvZHz9gcw17ObvQY6pgG1KjoOLf5mgRbHq8kOjfKPj0CrSbwA7LzjO0fQPI1kr9Gz4J%2FHqgVqngkx5ECPQue42GdrQ5LSIf7V2yp0ReL1gBYHEC3le1s1XXOVP0Qzp6POn9B5vLvh1ihn2Sk17heYvLD5gR67KpaRmfzFXd3tfO3MLoGIBU0798NDm5POAxEVCRHvUsDGlwT%2FTZyN75hwc2qnDiQR6Cz%2BsPWFEHcKb1p%2Fi4Io&X-Amz-Signature=67ed7771d6d9c26adecdb5ed214d6fb397a473f3d036128b67b8f19ec0c74e56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPBUBTB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCID7%2BhUg1pv0%2Fya3d4%2FuJr2kxR0%2Fl3%2FIszEIefIdo4l9TAiANaHROmg%2FA7dubWlCNLHW3VWzbttUF2%2FE6n6vVj2KqVSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM8jLz2%2BaMcswqcrqkKtwD5wE7q6WRDfiAN1Y1IQsLAzC8L8rYQyzcShGTPNH7EHjtefZjmSQLH2SUA6%2BE5Cox%2FHIqfB2BR%2BPTVEXklIcnXUo3vOdYbCp0p3LADFEqimg3WTTORJZxER7PUjVM9sDTmS7y27%2FRWRDAqssjplpVqtDn6eFq3iKwoRs0luVx%2FcU3QJnPqUi2s5LZCmEbd8qkhZWES6JvGUl0%2FvG9UE404tEaR48gpJC92nrtqMSx9yerlJXJyPoZ%2FRp9WO%2Fhm2cEUl77VGnXUAIbnUlBSohddvX3d8P8KWs9ERDA7rh%2F%2FGLRi7qjy5aEilMnvbYu8VNZiUHBM7dxFeasLznbxf7WNPNJhSiwjnQN3vT6%2FxUjaoyyJIrPnnEvNdOr6CkQucOyeD098NgWWtyiZ7JNhA6a3NmPXJAs3G2V8xPj1KZWXFOAee8jE4caJsqB8PGpPgRMHVSTBE636EfNH18olYGXLTIqBI92PfwvV%2FnjMnHQppjQiOj7REreuc3njPgZ%2FctyOJDHXCPEfYszX20jmUkGlxp89PPokChrb9XHG2Wjxk6SC6cdd6IU080BpOux3cs2iLEmT6pq8buARMIQ9JbF59WNuK6%2B4njV0AaQpSCUeD404ikUzRfODUgeeigwksvKvQY6pgHQte4OCo%2ByJQwtRo0Md5ylys4O7KACFC2OKscYBQm%2FwN%2BpnEuO63%2FioLQxgzM5S97S3GzlFzHqqIDqSxYNmUCnWfjhu9sf01XQ6bS4zCs%2BpTqJsn%2FftnuVjU0rLhM3fFGxsLzhAZyY7oAAyflb07G1qaaaG3rCqOfoPrzROoUI%2F%2Fl8R8yjcKlOLxL1p8IW0%2BM7OjXyck4srESnkPsvPPZRA8I1TblE&X-Amz-Signature=bed49c8f6391b8506dfd9a85f38b359ff30c568738fd38b1aefb2340f45729b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPBUBTB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCID7%2BhUg1pv0%2Fya3d4%2FuJr2kxR0%2Fl3%2FIszEIefIdo4l9TAiANaHROmg%2FA7dubWlCNLHW3VWzbttUF2%2FE6n6vVj2KqVSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM8jLz2%2BaMcswqcrqkKtwD5wE7q6WRDfiAN1Y1IQsLAzC8L8rYQyzcShGTPNH7EHjtefZjmSQLH2SUA6%2BE5Cox%2FHIqfB2BR%2BPTVEXklIcnXUo3vOdYbCp0p3LADFEqimg3WTTORJZxER7PUjVM9sDTmS7y27%2FRWRDAqssjplpVqtDn6eFq3iKwoRs0luVx%2FcU3QJnPqUi2s5LZCmEbd8qkhZWES6JvGUl0%2FvG9UE404tEaR48gpJC92nrtqMSx9yerlJXJyPoZ%2FRp9WO%2Fhm2cEUl77VGnXUAIbnUlBSohddvX3d8P8KWs9ERDA7rh%2F%2FGLRi7qjy5aEilMnvbYu8VNZiUHBM7dxFeasLznbxf7WNPNJhSiwjnQN3vT6%2FxUjaoyyJIrPnnEvNdOr6CkQucOyeD098NgWWtyiZ7JNhA6a3NmPXJAs3G2V8xPj1KZWXFOAee8jE4caJsqB8PGpPgRMHVSTBE636EfNH18olYGXLTIqBI92PfwvV%2FnjMnHQppjQiOj7REreuc3njPgZ%2FctyOJDHXCPEfYszX20jmUkGlxp89PPokChrb9XHG2Wjxk6SC6cdd6IU080BpOux3cs2iLEmT6pq8buARMIQ9JbF59WNuK6%2B4njV0AaQpSCUeD404ikUzRfODUgeeigwksvKvQY6pgHQte4OCo%2ByJQwtRo0Md5ylys4O7KACFC2OKscYBQm%2FwN%2BpnEuO63%2FioLQxgzM5S97S3GzlFzHqqIDqSxYNmUCnWfjhu9sf01XQ6bS4zCs%2BpTqJsn%2FftnuVjU0rLhM3fFGxsLzhAZyY7oAAyflb07G1qaaaG3rCqOfoPrzROoUI%2F%2Fl8R8yjcKlOLxL1p8IW0%2BM7OjXyck4srESnkPsvPPZRA8I1TblE&X-Amz-Signature=ffc568d742a93eb62a490ba1164202f3e6e46e1c263b288977b7f9bdaae0fb55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBPTWYX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICtDMcQwoJdfZXg9jWsp8ovQ5xl079uFpwU0T4k8O2TzAiEAr5Xxwf%2BLiG9hTP0FYBqiGEkY4jDZQ9tuv%2BkLm8UZ4X4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGCbBf7uu7xMn0IXRSrcAyn8QxVZDrWpbFbQXLXlAnzgxL0tJ%2Fgl1qiCKBfZrdfo3aUKSPceT1nagypRLKY%2F4XrfEOPU8sOXL%2BrhE%2FALk8kgQHDV50LI7WXJvlrHTKf1azrUMsKA5TXCz4y5TwnaSKfpDSzo5jkRN%2BPfOycOdOS25WxaYrAwE9E0%2FR5F%2FwbvBFPvv%2BinvhFIxXOz1a%2FSc9cKjnk1RPSo%2BZO0iZXY2%2FZBadXr3eh1I8yeomPIYbQ4Jj%2F%2F7ZfxwRcnpPvHQB6MX7TE2kGnN%2BWQkYZToxERtxEisHtWeuc6qyRBWnG%2FnuH2KnnrnAy8smRs2bih2%2FKA8BcZ2ix5%2FyVUeU82J1XOxeIBnDCtz2y3RSKx1ZpBtoXVeptDzRpWlBk4ebF2eP%2FgxH849ga%2FWByIIN4c7ESnkbQi7H%2BdDbrdEgzLn6vU6Jpev%2FuXxy%2FMMr%2B%2BsCNUscYbAMk8%2BNKdM%2Br1LerRVHXZGV6z4MxwEBQMiCgexIBRwZ4cFA9LZdoUvb7JWpNGyJWocZOLp%2BjXRX4Pn8A2o814Ufe4OG1ImzC4EFeMgUFdlFB4krphTAYEbAxD9p2CKPDJtOwNSU0%2Fz8oScgxa2QJGuHSY0YWmTuNHbol0QdyGYlM%2BibVTAx%2BgxI9wTafZMMTKyr0GOqUBpKFMRfDBnpdPMce%2BxAPOVVxct8EB4bBbau9dFnQgpM78SrOqzz6HA3GRTyOVLYaY9XbAkH66NlWvhyHjmO9EvAzCMxM9KuH%2FUwipmoDqmWyZ1zMjB%2BS1DrCk9TkQ96P%2F5SI7mrZXtciDfKhx5u4ETmwC7cZAGn7JeUK%2Fh1ytvnHFrtJK39CGdGKsvqEWvlsXDoWQ30%2FetLKgBLN5OxqBDGtiwMQ7&X-Amz-Signature=92bd69f5c6996370c15504e8a452b9874eeec3bd468c27d80bc3814185065d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARUO6PS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBZnW47P5h8%2FkNx6SZ11VBgI6LAYxSA7v6iV6mprjTZqAiEA7FgY2nFQ%2B4oo2d0f2Eoa647Lf5HmhpsACuGr3CllBcQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFdZcNIAR4iDxd%2BN0CrcA3WDI6uolo3tMyYRq1rmL2ZoUGd2HGo6InijRUEMtIFSv%2BSTkebGeXU4At93D6DBZiZhVNJYPlkqcstQm4XSWWV%2BeOEcemIDStYbpF1TUp0KU8%2FxU92GapGr1OrnhTZ1GsXC8Ap3lpNggmaGoEzaJ1hJTX8pkWyfYP27edFmLuFSUzySuRTAMsF7sDSQSQbWfUZtWn6rtv5ZVnpPzHtyZhUuWivC9qFoHqP0odsny%2FmORwECH9Zww6Xg4%2BiFZN7CZE4xIR%2BQVF4NJYdpMgiQniyBXbTgufHfqW4vVOKib3Q89kfC4MqTkLOQE%2BCJpNrC3F2AjDhxelxhuRNtoQbxtH60UefKccmannVI7gDP2qYjehVQlOBSfjmF2QY4AmMLmZ4JJZuMs0f291cc6B5CUwEsA7dRC8CvbEOL0fvP693CveEFUKcnml3lovUYDLhJTre7L%2BU6%2FrNmlWmvat5PVGzvn3EdjcNMp%2F6AGN1KPZ9L27Eqs%2B5XYBGv6S5f0KavW%2BWvTggrO%2BjgP6wnjOLO7P1cUG7kqcFMwKJemQTILHXOEGw7zY%2BLAaHEywSBalEOE1FMeH7rX4fASRksLnU%2Fl4VbFJtDZicr9N8j3ibBa74s3tngMA7Psit2TCZuMK%2FKyr0GOqUBvpH%2F%2FeEYjyYst7NMRoIcDk1sm3cdcbPj%2FSqZQ2Yp3%2BkCDMl3F3qgT%2F%2BAcdKZNEGOm%2FFPvx2tD7FAeJ2LPl3MstIu3lPnWJxOHvA5p5NyO6sKsTVQgkkoWF9621Y6hI7ctMKlDRi7mUcrhkd9VweBP6O83l%2BGppuxeZYWGTBVnRVLISYiCQXUT2An3FQ5Q8yzX0R4rhvMc%2Bvt17n%2Fbik%2B2Ro7WZlY&X-Amz-Signature=c9f38d949ea8463760aa4967a515ec5c681ea734e0fbc316307b29f7d19415c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPBUBTB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCID7%2BhUg1pv0%2Fya3d4%2FuJr2kxR0%2Fl3%2FIszEIefIdo4l9TAiANaHROmg%2FA7dubWlCNLHW3VWzbttUF2%2FE6n6vVj2KqVSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM8jLz2%2BaMcswqcrqkKtwD5wE7q6WRDfiAN1Y1IQsLAzC8L8rYQyzcShGTPNH7EHjtefZjmSQLH2SUA6%2BE5Cox%2FHIqfB2BR%2BPTVEXklIcnXUo3vOdYbCp0p3LADFEqimg3WTTORJZxER7PUjVM9sDTmS7y27%2FRWRDAqssjplpVqtDn6eFq3iKwoRs0luVx%2FcU3QJnPqUi2s5LZCmEbd8qkhZWES6JvGUl0%2FvG9UE404tEaR48gpJC92nrtqMSx9yerlJXJyPoZ%2FRp9WO%2Fhm2cEUl77VGnXUAIbnUlBSohddvX3d8P8KWs9ERDA7rh%2F%2FGLRi7qjy5aEilMnvbYu8VNZiUHBM7dxFeasLznbxf7WNPNJhSiwjnQN3vT6%2FxUjaoyyJIrPnnEvNdOr6CkQucOyeD098NgWWtyiZ7JNhA6a3NmPXJAs3G2V8xPj1KZWXFOAee8jE4caJsqB8PGpPgRMHVSTBE636EfNH18olYGXLTIqBI92PfwvV%2FnjMnHQppjQiOj7REreuc3njPgZ%2FctyOJDHXCPEfYszX20jmUkGlxp89PPokChrb9XHG2Wjxk6SC6cdd6IU080BpOux3cs2iLEmT6pq8buARMIQ9JbF59WNuK6%2B4njV0AaQpSCUeD404ikUzRfODUgeeigwksvKvQY6pgHQte4OCo%2ByJQwtRo0Md5ylys4O7KACFC2OKscYBQm%2FwN%2BpnEuO63%2FioLQxgzM5S97S3GzlFzHqqIDqSxYNmUCnWfjhu9sf01XQ6bS4zCs%2BpTqJsn%2FftnuVjU0rLhM3fFGxsLzhAZyY7oAAyflb07G1qaaaG3rCqOfoPrzROoUI%2F%2Fl8R8yjcKlOLxL1p8IW0%2BM7OjXyck4srESnkPsvPPZRA8I1TblE&X-Amz-Signature=e856103fb62739ae200bcac212bf7e373b0f64873c394bd91c72e76850853a30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

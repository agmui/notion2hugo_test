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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQ2VJNM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIEA%2Bag9kFARn3MqNm89GsFFHWJ4SGnhwvSuv06f8O2GqAiEAhTIMcM0Yz6fZqoH7kqX0yw%2B1tXhCfEoEU%2BUykTgpoTUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgvgy75OTBOw5j17ircA30W0IocfjJYr7IN2lj8ysc%2FDd82DPmonTQH7EAYQpKaB7QRSWRcZ3AlFmTAWqtSx9yQmXjHhnFK51XnXjOHXEHBlgq4kTQlzaxtw2yepGzV6tjhLEdJ8lkHNyfV58o5HE1K%2Fd6JiMcgVgVTKqaQ8DGTT3WgB%2FIZUC2CpZWlH0%2FaHtWz2hMNzYcy5PyBoxK2%2BnygFEeriIKd8dUAnqrQE7o7zDeI06rWZ4hkyp6iMx%2Fu8ghRjLd7%2F9GJp7gopiHzKJ7Mq80SDA%2FMvolEgxQWewyTliRMHYPayZKhGKoRdbVvr4GHu6k%2FIHo5PtX%2BzTBtNmHn9tD0cPsNwz2e2H9xksiPYG5%2BmS92L1g1Bj40zlXooZ0pvVAags7jQJUfKNszRh9L%2F%2BXFdE2Dm3u07m%2BRn%2F4uSkF4eeGyA3DJdjqKI%2B0YBN0U%2Bp8gPDKn6dcQJOXiVgL54xFO0qWTkA1Zsd0iUoGufCxPQ%2ByIDxa%2F8dOCBOLEa%2FR6y12CgZx7CigK8Yz85J%2FnAhNwZw21NKK9QP3zgDVzUBoyWYnc6ivLbxwQCk8D7OGVjevztLuMLkr7ACpT41v0coPBoV8nyXeBiWMnoTR3OzF6X%2FZr0QJA6lMFPth5Ur9aTe1wq8uXwe9nMPO7mMAGOqUBoCpEDNVMzC4tMJjcDL4b412%2BVX3%2FsyVCOhlgRwxzxJRJVCWYSqfO18cAj45y8d1Qg24kwtKGLPoy6YEjgF3YlhP0r5i%2BBQRjd8Ue3a7Y%2FrKImlCcaFSLaG2%2F%2B6Y6h6uUUves7xtPEDiXdDwRqhZCrP5JzYhrmWB3MyDatSUWnkX751AkajTMdJdSrNlYVBq6JVeaz2skvPrI%2B12%2BI%2FU%2Fldy3RCUe&X-Amz-Signature=a35b292f99929b0fb5a49ef477e5bd1a424ca5a1ffa947f58b1ecf8dffba4358&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQ2VJNM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIEA%2Bag9kFARn3MqNm89GsFFHWJ4SGnhwvSuv06f8O2GqAiEAhTIMcM0Yz6fZqoH7kqX0yw%2B1tXhCfEoEU%2BUykTgpoTUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgvgy75OTBOw5j17ircA30W0IocfjJYr7IN2lj8ysc%2FDd82DPmonTQH7EAYQpKaB7QRSWRcZ3AlFmTAWqtSx9yQmXjHhnFK51XnXjOHXEHBlgq4kTQlzaxtw2yepGzV6tjhLEdJ8lkHNyfV58o5HE1K%2Fd6JiMcgVgVTKqaQ8DGTT3WgB%2FIZUC2CpZWlH0%2FaHtWz2hMNzYcy5PyBoxK2%2BnygFEeriIKd8dUAnqrQE7o7zDeI06rWZ4hkyp6iMx%2Fu8ghRjLd7%2F9GJp7gopiHzKJ7Mq80SDA%2FMvolEgxQWewyTliRMHYPayZKhGKoRdbVvr4GHu6k%2FIHo5PtX%2BzTBtNmHn9tD0cPsNwz2e2H9xksiPYG5%2BmS92L1g1Bj40zlXooZ0pvVAags7jQJUfKNszRh9L%2F%2BXFdE2Dm3u07m%2BRn%2F4uSkF4eeGyA3DJdjqKI%2B0YBN0U%2Bp8gPDKn6dcQJOXiVgL54xFO0qWTkA1Zsd0iUoGufCxPQ%2ByIDxa%2F8dOCBOLEa%2FR6y12CgZx7CigK8Yz85J%2FnAhNwZw21NKK9QP3zgDVzUBoyWYnc6ivLbxwQCk8D7OGVjevztLuMLkr7ACpT41v0coPBoV8nyXeBiWMnoTR3OzF6X%2FZr0QJA6lMFPth5Ur9aTe1wq8uXwe9nMPO7mMAGOqUBoCpEDNVMzC4tMJjcDL4b412%2BVX3%2FsyVCOhlgRwxzxJRJVCWYSqfO18cAj45y8d1Qg24kwtKGLPoy6YEjgF3YlhP0r5i%2BBQRjd8Ue3a7Y%2FrKImlCcaFSLaG2%2F%2B6Y6h6uUUves7xtPEDiXdDwRqhZCrP5JzYhrmWB3MyDatSUWnkX751AkajTMdJdSrNlYVBq6JVeaz2skvPrI%2B12%2BI%2FU%2Fldy3RCUe&X-Amz-Signature=ae9d395c62ba0b2acf62b28e847a17385c513f4b2e4a5baf7608ac671f1f7aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646GRW257%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD4siAUJD1Mw60%2Fl1qIQkCtKhqF2owLaGPCjnErDf9h6AIgEFwCuPAc%2BOMd1kL9u83m747SCXmGtzl6MUPz13GfHBkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTTHu8iEqrFWlhHySrcA1IvHp51xYU96Vz5inhCPk7XPrkGZVuhqnlkACrLckVR2osp35AQcVcgThrYIxe3oZ2VhnYFzfLN1W7Ydi%2Buz36Fz4JHFVcLKUWtV9WVFdy97toqa016yFw%2BWnmLtEXYCJqFwCVwozWHgLVDBU05iP8tE068S2H%2FQsyQe%2FE0gnjXrEjiSqVrTB%2BdxtCeS5fuktGRUCUNPJ%2BZn%2FdPDgYzR%2F%2FWGLd3ta39%2BTyp4%2FwBHbBlUpgLE0bXD9prF7sF5uHqd7Onnj68NGmlhxNWq%2FZAVsMviPbXoV%2BUFo9WslsO0Ofha1Xk4sRY6KYQjFi3yJI4ufBh5bDORX4fDumnzVS2W0ha8a%2FERQ44KN6cEKqm79pqcWW3UlhNpdy88K4nsX1ReEhsMzRiPVwJNa3jFGmKg%2F7n2CrtSyJkemy6fV9oX%2FWSFrGB%2FBu3ZMrAYMKIoQDTvElZynGf6CSDuosHV99%2BSUpvGoBcVfWIhybSR3dDseDjgivF3hUB01J2r5UbAKahF%2B2swsy3XleF3vRqPxNCOc%2BsW6bO5GgUFp%2FmrSVP%2B5%2FDBh0irPEPUZpLo5c8PZbq4PcpMwQH8uU%2BhQFibP057GK9e3rhkIE0rriN8h2bPBc%2Bq9r%2BwJK8GUUDKYxjMOG7mMAGOqUBZvHOqCBRGp5Uvy12g0ylL1y3NqPer%2F%2B%2FUAtB37RaHWaWpyFNCtsE71odbjWwEM3o7O1%2BlSHn334yK%2BTI9x%2BFKfiXKb0IVNQEsyRWYdx5PB6DhkdYBPHiB18stuPovTjfKyuBlKBw%2Fy9L8KbXV0V6PlL%2FErFSv7mjFmR3%2BZlD6H5XKkS5%2FOMYkU7OsmRp3d9NlD4ur88DPdQe5O7O8HBSWeKHOzfv&X-Amz-Signature=b2bcae08ecd8cf9b8b126a67365dce1fa2fdb3bc275ccc20b5c8172c3ee3beeb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUF5PRYB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDO%2F5lEOHPdemEAMYiGBO4sxfxAv3gSIanaiZS4UGn0AAIgCv7FHAy8myWUZUk2%2BY%2FsZyvUp5vQwxAMBYHYDU%2FpjhQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZg0c5xkzdDcdwkSyrcA1eb3QbHzK2eM08hnhQcd0VWItbjwgZIxoeCtTir3hV1umTXLMsA%2F6q5ux1zDWWJGN93dR5ktb%2BmaTskvwnYPISX8ikKoaVqX0AH7dFL%2BTWTM9UrR4i4ey%2BV25R03wLy8v9SPdG2kCiRj8DcUBX0CneY95Qek480v8bOVCCGs6fDAaznWBNh%2FQqVp4vdkzTRA7FdBfe1qVjb3lS8wRP%2BYOAnhu9Y8U%2B8hqVdwygenAVMdANrDYxMj3CAocT9nCCg%2BFwtr7upvZfzYHdubarIUOKkL7Fr3tk3Q06rjdPNKeNs4aAsb%2FLTa6Aer6K3UKi7B3obvZN3fXv6jEq9%2Fbqtx6%2FkdbyQ9j8a4oJSznxGQWUtkBIbVVcGwbUSA%2FRmDY6sbB4lPLYu5n%2BXlv9nvU6tFcW7bgHD0ovdIHwqQspchP5w46g7bibdloadwfxd3W%2FOKiShAdbP0gDslKE0cTZsAJX2gK5IPtz5AE1NkSlj9vFIaKO1XPfUUKkxxa1Pc%2BDSbpr8J4Lq8IdN%2FCIGYaxWS9sT12N0oQFnKqK9%2B3skD3CfotOJeAXx7LtPxfeKtVtE0MzjI0Ut9B8neIFTj%2BeauRc992JEMUJnPzPTvM6TXXwM0cd%2Fy1K1FAXf4IiHML27mMAGOqUBtOtHVm%2FBmRYmko408af99MImXT7VAzywCi2fGJ3TJTP61g2GCgwlKoVWu%2BrbeUGRktuXzBnBiiG3P7Nd9DE4qy%2BCn9wsBZDQaZHG6PevhRAp7VvenEnblXA0Pz6%2FmtOAM0neJeGA70JOAyLrJ2K2teQ2G5NSOSQ5KbFOwIp0Acvfgq7xrWW2jjLyoB%2BLREdoDBUZTz%2Bf36cQeHFPXJaPXOklqHq5&X-Amz-Signature=381aed80100e8e9864d7db0a14cc78fee66c58923eb0b5e80c76e051c730e804&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQ2VJNM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIEA%2Bag9kFARn3MqNm89GsFFHWJ4SGnhwvSuv06f8O2GqAiEAhTIMcM0Yz6fZqoH7kqX0yw%2B1tXhCfEoEU%2BUykTgpoTUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgvgy75OTBOw5j17ircA30W0IocfjJYr7IN2lj8ysc%2FDd82DPmonTQH7EAYQpKaB7QRSWRcZ3AlFmTAWqtSx9yQmXjHhnFK51XnXjOHXEHBlgq4kTQlzaxtw2yepGzV6tjhLEdJ8lkHNyfV58o5HE1K%2Fd6JiMcgVgVTKqaQ8DGTT3WgB%2FIZUC2CpZWlH0%2FaHtWz2hMNzYcy5PyBoxK2%2BnygFEeriIKd8dUAnqrQE7o7zDeI06rWZ4hkyp6iMx%2Fu8ghRjLd7%2F9GJp7gopiHzKJ7Mq80SDA%2FMvolEgxQWewyTliRMHYPayZKhGKoRdbVvr4GHu6k%2FIHo5PtX%2BzTBtNmHn9tD0cPsNwz2e2H9xksiPYG5%2BmS92L1g1Bj40zlXooZ0pvVAags7jQJUfKNszRh9L%2F%2BXFdE2Dm3u07m%2BRn%2F4uSkF4eeGyA3DJdjqKI%2B0YBN0U%2Bp8gPDKn6dcQJOXiVgL54xFO0qWTkA1Zsd0iUoGufCxPQ%2ByIDxa%2F8dOCBOLEa%2FR6y12CgZx7CigK8Yz85J%2FnAhNwZw21NKK9QP3zgDVzUBoyWYnc6ivLbxwQCk8D7OGVjevztLuMLkr7ACpT41v0coPBoV8nyXeBiWMnoTR3OzF6X%2FZr0QJA6lMFPth5Ur9aTe1wq8uXwe9nMPO7mMAGOqUBoCpEDNVMzC4tMJjcDL4b412%2BVX3%2FsyVCOhlgRwxzxJRJVCWYSqfO18cAj45y8d1Qg24kwtKGLPoy6YEjgF3YlhP0r5i%2BBQRjd8Ue3a7Y%2FrKImlCcaFSLaG2%2F%2B6Y6h6uUUves7xtPEDiXdDwRqhZCrP5JzYhrmWB3MyDatSUWnkX751AkajTMdJdSrNlYVBq6JVeaz2skvPrI%2B12%2BI%2FU%2Fldy3RCUe&X-Amz-Signature=6c7fdb2e32b06e6f5a6c544f917c3c8233cde0b8ad59666a6f04553279bca3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

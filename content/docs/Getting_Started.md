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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAQLPEH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcaH2DA8zCNbYJD86%2FDFOFfLkNsZHsi7PeFjluLAe1QIgNlzdBDiA%2BeRhE4FkbijawejTY29XNwATAEhmfxG6%2FbYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRf8ExGMZjb4E0uWCrcAw0qv1Qk2TUdWd6rvs7l5avw%2B6FclBe4%2BH6%2FAlrvQSya5qewR5jDCRWviqWk6xxJVTBp7JWh8rvE4JJ%2FJ6Pwrc%2FnWAYRPH07QP0E0p4yNizZZBps1Hv9ZAtMffoNmZmPI4JhR0U3HiUyuUv8CWAVUm8LWX2bxdPdV4w5ZqYiJQ6dHZXUjmJ3Zretu1TGlCYrpJ1k9p%2B1d%2BCqNas8XYcFcDoHFiyUAtTWOK5m0fdMloOH%2BiAot53mMcK6NBIFvoWEY8PUFBqE%2BBkQTrDsPZiTr%2BPY86AMuO%2B%2B1fCOeU%2B4jDznpcjFmKSGEeSJEs4YLvl3DGw2GBsZUor6Rsu%2F%2FQCtWrTXndkYmMpOzn%2B9Kdc30OIHOjpr3WB0MYDwRGneudkh22yM3lUX7uk0hvU63tyl0moTdCo881Cll0bm9d%2FG1zj1%2FwVwryS8S%2BQUQzVLvNEdwFuZ8A5T%2BnkPCx2qKiw%2Fi0s4c670TZw%2BaENhYFFznUCwKQZfKQqBSQxkVJUzVA7ULrkoIweJWEGTQukMgVFnrjonplUKYnuTKyfuzZP%2Bv9SsZHzVfvSB8HlrJeBHrhFgtUacbSsKG6pYd39EfyVVdSWzSwpA2awcETPoknQFHdmymzp%2FJYNGL5bHvFW4MMatysMGOqUB6bs9d1BcbHHvCMeuD0mbSezfsI31jt0R2Fm7PDJhMXsX3WoemEho3KAanstcXjFpvyLAaU6awEiB%2BS7IZeYRz4j%2FacekGEhJJ4Zguwr28TxGKbmGvQLugZ5UNi7W7oiPd5iqzYT%2BlyRsfZNdMScpaW%2F2Yaym344TuMR84a%2FALvjxIFkyL%2BHu8JbKsKxlJVqHT9jK1h7LHBsk%2BuHl8IwOIS9iaZJC&X-Amz-Signature=fd03692f80da85dd131fd15dee4a838ce84b4daf5b8ce22e658a979a51936ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAQLPEH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcaH2DA8zCNbYJD86%2FDFOFfLkNsZHsi7PeFjluLAe1QIgNlzdBDiA%2BeRhE4FkbijawejTY29XNwATAEhmfxG6%2FbYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRf8ExGMZjb4E0uWCrcAw0qv1Qk2TUdWd6rvs7l5avw%2B6FclBe4%2BH6%2FAlrvQSya5qewR5jDCRWviqWk6xxJVTBp7JWh8rvE4JJ%2FJ6Pwrc%2FnWAYRPH07QP0E0p4yNizZZBps1Hv9ZAtMffoNmZmPI4JhR0U3HiUyuUv8CWAVUm8LWX2bxdPdV4w5ZqYiJQ6dHZXUjmJ3Zretu1TGlCYrpJ1k9p%2B1d%2BCqNas8XYcFcDoHFiyUAtTWOK5m0fdMloOH%2BiAot53mMcK6NBIFvoWEY8PUFBqE%2BBkQTrDsPZiTr%2BPY86AMuO%2B%2B1fCOeU%2B4jDznpcjFmKSGEeSJEs4YLvl3DGw2GBsZUor6Rsu%2F%2FQCtWrTXndkYmMpOzn%2B9Kdc30OIHOjpr3WB0MYDwRGneudkh22yM3lUX7uk0hvU63tyl0moTdCo881Cll0bm9d%2FG1zj1%2FwVwryS8S%2BQUQzVLvNEdwFuZ8A5T%2BnkPCx2qKiw%2Fi0s4c670TZw%2BaENhYFFznUCwKQZfKQqBSQxkVJUzVA7ULrkoIweJWEGTQukMgVFnrjonplUKYnuTKyfuzZP%2Bv9SsZHzVfvSB8HlrJeBHrhFgtUacbSsKG6pYd39EfyVVdSWzSwpA2awcETPoknQFHdmymzp%2FJYNGL5bHvFW4MMatysMGOqUB6bs9d1BcbHHvCMeuD0mbSezfsI31jt0R2Fm7PDJhMXsX3WoemEho3KAanstcXjFpvyLAaU6awEiB%2BS7IZeYRz4j%2FacekGEhJJ4Zguwr28TxGKbmGvQLugZ5UNi7W7oiPd5iqzYT%2BlyRsfZNdMScpaW%2F2Yaym344TuMR84a%2FALvjxIFkyL%2BHu8JbKsKxlJVqHT9jK1h7LHBsk%2BuHl8IwOIS9iaZJC&X-Amz-Signature=6ef5e1b74f3d36ffaea7de9f2159ad6d3bb0bbbd9848c79627c1b6e015dd845e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAQLPEH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcaH2DA8zCNbYJD86%2FDFOFfLkNsZHsi7PeFjluLAe1QIgNlzdBDiA%2BeRhE4FkbijawejTY29XNwATAEhmfxG6%2FbYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRf8ExGMZjb4E0uWCrcAw0qv1Qk2TUdWd6rvs7l5avw%2B6FclBe4%2BH6%2FAlrvQSya5qewR5jDCRWviqWk6xxJVTBp7JWh8rvE4JJ%2FJ6Pwrc%2FnWAYRPH07QP0E0p4yNizZZBps1Hv9ZAtMffoNmZmPI4JhR0U3HiUyuUv8CWAVUm8LWX2bxdPdV4w5ZqYiJQ6dHZXUjmJ3Zretu1TGlCYrpJ1k9p%2B1d%2BCqNas8XYcFcDoHFiyUAtTWOK5m0fdMloOH%2BiAot53mMcK6NBIFvoWEY8PUFBqE%2BBkQTrDsPZiTr%2BPY86AMuO%2B%2B1fCOeU%2B4jDznpcjFmKSGEeSJEs4YLvl3DGw2GBsZUor6Rsu%2F%2FQCtWrTXndkYmMpOzn%2B9Kdc30OIHOjpr3WB0MYDwRGneudkh22yM3lUX7uk0hvU63tyl0moTdCo881Cll0bm9d%2FG1zj1%2FwVwryS8S%2BQUQzVLvNEdwFuZ8A5T%2BnkPCx2qKiw%2Fi0s4c670TZw%2BaENhYFFznUCwKQZfKQqBSQxkVJUzVA7ULrkoIweJWEGTQukMgVFnrjonplUKYnuTKyfuzZP%2Bv9SsZHzVfvSB8HlrJeBHrhFgtUacbSsKG6pYd39EfyVVdSWzSwpA2awcETPoknQFHdmymzp%2FJYNGL5bHvFW4MMatysMGOqUB6bs9d1BcbHHvCMeuD0mbSezfsI31jt0R2Fm7PDJhMXsX3WoemEho3KAanstcXjFpvyLAaU6awEiB%2BS7IZeYRz4j%2FacekGEhJJ4Zguwr28TxGKbmGvQLugZ5UNi7W7oiPd5iqzYT%2BlyRsfZNdMScpaW%2F2Yaym344TuMR84a%2FALvjxIFkyL%2BHu8JbKsKxlJVqHT9jK1h7LHBsk%2BuHl8IwOIS9iaZJC&X-Amz-Signature=5e0b387c4edfe512e166c93bec5a91ee2fa247c980051fc3cfa9229d86b513a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRCFDPT3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWlOlfklG6IAb5ORN4hNFHhpdtmBo4Tfx1lQSdhRAM%2FAiBIJl4PH%2FPY06gAX1F1EhflNJmqrb%2BnGoPqUS%2Btnm2%2FGyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2BJeZFn0vgnfjC8AKtwDnI18LC30fAZzorhBSEeZgOmnWSuFDtqB0BatQllCSrn1APKsJ9Thsx0U5nva%2F7ClZuJTZFpPQv3HVeYFlu%2FRDugcfHfiKN0C4SqhnIBBj2apz2upY35CqfkMN2kbZ%2BUjvb9IRny7jladbYnl6ZPa64pJBpxOmrQmna4beC3vdnf7Cds8gXVIRWrvIkkCXqYSB%2B3RJ4Tnfb5HJ1RUAeoN85wX%2BpAeAPwkz%2FCfAF%2BOwQS4rXogqDmh1xycOaRqkr0DLFg6f2hLTMKXneJPGnSPhMrbDK81mafOGel75OT9mFWLZrp%2FezG%2FYvllVL2HRCptYNTdgFjd8jTF4nlUqwqsKTxBV19SLrQ6JCqGRmpj3ii7U4bxX3dUfC6r5CVb5%2BYBQVRTyVGQ9rd3AiHsn6cGxBkfZ7AqNRVWCjx4%2BPIzUICG%2FoGhc4AOu%2F7fWVMefQoN5iyZ%2BFqTvGxNpT3GwAferx5oCP5tlFYZbxDVlWDDmJ0n2%2Fyuow2QfLavvZK1HcAkE%2Buii%2FDACOi8XOynz6ptSbPP1AX7E2NkNU96trjQLTR3RkTQlzKTyIdsAwfvSM%2FsG9JX80H4XrcYQe%2BPNdN2B%2BRJYKvhWQ%2Bev8aXf1gfw4Ffu5FJB7qYyf%2FpRncwpK3KwwY6pgEnAQiAoGcVxtsaRmmSPjKTpOmiSsXV0W8kk6MfZFZ9oKV2DpVZpbLzZE2bjjNufze9ygRZ6BlEB%2BsEwQkv4rSzs4TfODdzetZF%2FskDUyVi4VjfLH%2B12VBTXaX%2F7J0Jt0dUG8TshYxy3j7zKxphVqUns9QIrACAYxSOScM68PpUGwrnoJHZhaf%2BCy16kV4Nr6NT3d7%2F%2FHVdIN8AeJXf5%2FkGJrAL6Xox&X-Amz-Signature=7acbb1e1a71a81d234c6eb8d6dd2fcd098f3f6f2517acb06dd2e071fb06c238b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBODHLSR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWW%2BOsu9rEjL0DizdjVKVSMj4rrdMalxjgYpWyYRneBgIgGZ9Kd7YrXwk5m8TiEfsHQivrB5gEXSl7lFSYREzGXk0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHN1h8q%2FWch3O9R8sSrcA1jqNUSHAk9j76FdR98971Q%2Fswe8P%2FaF%2B4KEXjcFXQYbb2NvBvFQI4ZClpROA6xIssCxII%2BpWm1a2RiFYA3d0rkJL1RpVdwZcPovmuRmyHlv95z%2BULgzKk8BfZdDLhfETJqDv0nyeBGiAWl2MJYiT6xxrmVes9%2FkEwMmnTo3pYM728shvpYW32lzJWK%2BP7o8KP8LYismpoy3BUeZlb21CaSniFljbxWnFXyVRWgo9YdcMSPJsOZ8o8xxl7B6rGg8QWKIKd8kOwDSsCxRDcuIzi0%2B3nim7ldcI%2FT1aVm9BMtgD%2F2sUxnrBsES6uLRarYKm4WZ%2FqVeBWB6lXW2lVBy1yCcWKN3%2F9vxqGrmBfUzPKuGZfrq58E9h075YZb9%2FSfgodzqN1FytS3%2Br1vw5HJRHH87K5z5Ayg2LKE5SPKGGwH3ZGB1vvyuJD6PMzvdE3mdGNHa%2Fv0bVgd%2BJRnZFAV3RUfi%2FEOplhEmmJzQ4rur5Or%2B9dhznDwzs2A7gXCLKSqHgop4apyEv638L63LB67CnoSQA7KuGHSBK8FQCavlm6DqsoCDZxXNooui6wV6QEiwJMTPqvrcae0eAPgoDml2zE%2B1w2BbC2IXMmt8hv4IIzyHcafmUe0GV6Ck0k0OMK2uysMGOqUBV6pFvW7cTeWcXxyxHOxWg%2Brk1mXtQ7UaURkxX3IvExsEKUiLItGdyrics06RijMXBnBDBT24TkoeREverlybBKy6hDFupgcg6dljYCLLFwWdc6r0P7GrpRBlnBJGleOg73ogK6o9iKKH7Tx2E2jWB46cNzb2gJPXFeBt6ewR32qUay4VcF1V2PPYsVbnZCzp9hV7NVSF%2Fd1bVOoNJ6KSfNLvLdbZ&X-Amz-Signature=f1fe33139753998b3a1160588ae11d3cfc9e8f3d7325954f76ae2992b55af633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAQLPEH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcaH2DA8zCNbYJD86%2FDFOFfLkNsZHsi7PeFjluLAe1QIgNlzdBDiA%2BeRhE4FkbijawejTY29XNwATAEhmfxG6%2FbYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRf8ExGMZjb4E0uWCrcAw0qv1Qk2TUdWd6rvs7l5avw%2B6FclBe4%2BH6%2FAlrvQSya5qewR5jDCRWviqWk6xxJVTBp7JWh8rvE4JJ%2FJ6Pwrc%2FnWAYRPH07QP0E0p4yNizZZBps1Hv9ZAtMffoNmZmPI4JhR0U3HiUyuUv8CWAVUm8LWX2bxdPdV4w5ZqYiJQ6dHZXUjmJ3Zretu1TGlCYrpJ1k9p%2B1d%2BCqNas8XYcFcDoHFiyUAtTWOK5m0fdMloOH%2BiAot53mMcK6NBIFvoWEY8PUFBqE%2BBkQTrDsPZiTr%2BPY86AMuO%2B%2B1fCOeU%2B4jDznpcjFmKSGEeSJEs4YLvl3DGw2GBsZUor6Rsu%2F%2FQCtWrTXndkYmMpOzn%2B9Kdc30OIHOjpr3WB0MYDwRGneudkh22yM3lUX7uk0hvU63tyl0moTdCo881Cll0bm9d%2FG1zj1%2FwVwryS8S%2BQUQzVLvNEdwFuZ8A5T%2BnkPCx2qKiw%2Fi0s4c670TZw%2BaENhYFFznUCwKQZfKQqBSQxkVJUzVA7ULrkoIweJWEGTQukMgVFnrjonplUKYnuTKyfuzZP%2Bv9SsZHzVfvSB8HlrJeBHrhFgtUacbSsKG6pYd39EfyVVdSWzSwpA2awcETPoknQFHdmymzp%2FJYNGL5bHvFW4MMatysMGOqUB6bs9d1BcbHHvCMeuD0mbSezfsI31jt0R2Fm7PDJhMXsX3WoemEho3KAanstcXjFpvyLAaU6awEiB%2BS7IZeYRz4j%2FacekGEhJJ4Zguwr28TxGKbmGvQLugZ5UNi7W7oiPd5iqzYT%2BlyRsfZNdMScpaW%2F2Yaym344TuMR84a%2FALvjxIFkyL%2BHu8JbKsKxlJVqHT9jK1h7LHBsk%2BuHl8IwOIS9iaZJC&X-Amz-Signature=d047cb6e1d049a266aab54da5a80110014f97ac9ab96ca60e93f4940b390c984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

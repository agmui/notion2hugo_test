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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4VCFY2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBABq5xK20%2B7PlbUu3W%2F9Q2umXkwPC8XfTKWUlxHrgBZAiBkdAgaNW9SrLSYqPIb%2B1RgVEi4eqyW91qty40jfJd4Zir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMbEa26A6BIHJ4InaYKtwDkJTMznoRVEeHV9xQFcaMzGsR5RnfeEBRyy2ZmGd6LNs24D63yLQkcQeaCe8iKVFxkMgFTDxWPBE%2FbkP%2F6crfzj5tfrspDgyvjopN5zYVP8YUNF8FqfCCSm%2F2rwn58fCglYnil%2Bl3qrpWfuijZelQh7mcvAOpHEAadeehtr96gUOIJoCBblsYMJuTNG7VntJm%2Bsi4Ltay4lrhQvLP66Tq4hekcIZmMbCfS%2F9a7ceU8dSJuj%2BBhaP6sNRbEh5fmE%2BPsz5genEairmeg0NJKyNkP84elJRyAFGi%2FOlMjk308WsII2%2BkVrNFhoNWmSWHafpFEf%2BqXsnKB7UKiXa3cQ6DV7V0nwZK%2B1E24qGGv%2B%2Brf1M3tFoU%2FhOOLvfwCHzOW3Xslc%2BHFSW2htnIwjM4ytc2oCnhyysHUIz3lCkcvDIUnjVwUp498Q8qEbxSxo%2BmSp38WqSs%2BrRs2E%2BeM9uADhicqnY7ZXu7ACPWVptLB%2FkPdn2AfJg90kDouzmHYsFyT6azGhfaoq5voWYhCc%2FI6mKS028fI2AgeRBcfube6yNUxB7CzvmWiuvmlv1gG8J7yIn24Cati2RvAlj1fd4pXt6jJng%2FvjXVH34inOeVERCzKIVj3fH4Jj%2FeXw3gpDAwqPjYwQY6pgHuwPwE3YqAvCbEAzzHhjy3qDTOssIxYBPa3eAnkakXqiSEUXu%2F6bzxWOnb1DIOLtWnjUXE3V6krinMonvUZkEAoR1iDumo6fZTxR65PbTa8jg2PQOzhRGYnYWZr11293QD7VRg1r50yF4TbMx6DqLLjBB70A5%2BG%2BvCARu%2FekV8ydIAPQtmN785Ey3%2BuJ1qWugZ%2FK3LonjUqigU0v1bKaIv%2Bnyt3mTr&X-Amz-Signature=a1246a5d4d5cc98a96814cc55b17acc54a7dc974e102b7c8c22f22f59067701b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4VCFY2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBABq5xK20%2B7PlbUu3W%2F9Q2umXkwPC8XfTKWUlxHrgBZAiBkdAgaNW9SrLSYqPIb%2B1RgVEi4eqyW91qty40jfJd4Zir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMbEa26A6BIHJ4InaYKtwDkJTMznoRVEeHV9xQFcaMzGsR5RnfeEBRyy2ZmGd6LNs24D63yLQkcQeaCe8iKVFxkMgFTDxWPBE%2FbkP%2F6crfzj5tfrspDgyvjopN5zYVP8YUNF8FqfCCSm%2F2rwn58fCglYnil%2Bl3qrpWfuijZelQh7mcvAOpHEAadeehtr96gUOIJoCBblsYMJuTNG7VntJm%2Bsi4Ltay4lrhQvLP66Tq4hekcIZmMbCfS%2F9a7ceU8dSJuj%2BBhaP6sNRbEh5fmE%2BPsz5genEairmeg0NJKyNkP84elJRyAFGi%2FOlMjk308WsII2%2BkVrNFhoNWmSWHafpFEf%2BqXsnKB7UKiXa3cQ6DV7V0nwZK%2B1E24qGGv%2B%2Brf1M3tFoU%2FhOOLvfwCHzOW3Xslc%2BHFSW2htnIwjM4ytc2oCnhyysHUIz3lCkcvDIUnjVwUp498Q8qEbxSxo%2BmSp38WqSs%2BrRs2E%2BeM9uADhicqnY7ZXu7ACPWVptLB%2FkPdn2AfJg90kDouzmHYsFyT6azGhfaoq5voWYhCc%2FI6mKS028fI2AgeRBcfube6yNUxB7CzvmWiuvmlv1gG8J7yIn24Cati2RvAlj1fd4pXt6jJng%2FvjXVH34inOeVERCzKIVj3fH4Jj%2FeXw3gpDAwqPjYwQY6pgHuwPwE3YqAvCbEAzzHhjy3qDTOssIxYBPa3eAnkakXqiSEUXu%2F6bzxWOnb1DIOLtWnjUXE3V6krinMonvUZkEAoR1iDumo6fZTxR65PbTa8jg2PQOzhRGYnYWZr11293QD7VRg1r50yF4TbMx6DqLLjBB70A5%2BG%2BvCARu%2FekV8ydIAPQtmN785Ey3%2BuJ1qWugZ%2FK3LonjUqigU0v1bKaIv%2Bnyt3mTr&X-Amz-Signature=33347aca24988c8f0bf5e90f7894bb67c3d2feef8692f98bb3514dab6a2fca2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4VCFY2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBABq5xK20%2B7PlbUu3W%2F9Q2umXkwPC8XfTKWUlxHrgBZAiBkdAgaNW9SrLSYqPIb%2B1RgVEi4eqyW91qty40jfJd4Zir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMbEa26A6BIHJ4InaYKtwDkJTMznoRVEeHV9xQFcaMzGsR5RnfeEBRyy2ZmGd6LNs24D63yLQkcQeaCe8iKVFxkMgFTDxWPBE%2FbkP%2F6crfzj5tfrspDgyvjopN5zYVP8YUNF8FqfCCSm%2F2rwn58fCglYnil%2Bl3qrpWfuijZelQh7mcvAOpHEAadeehtr96gUOIJoCBblsYMJuTNG7VntJm%2Bsi4Ltay4lrhQvLP66Tq4hekcIZmMbCfS%2F9a7ceU8dSJuj%2BBhaP6sNRbEh5fmE%2BPsz5genEairmeg0NJKyNkP84elJRyAFGi%2FOlMjk308WsII2%2BkVrNFhoNWmSWHafpFEf%2BqXsnKB7UKiXa3cQ6DV7V0nwZK%2B1E24qGGv%2B%2Brf1M3tFoU%2FhOOLvfwCHzOW3Xslc%2BHFSW2htnIwjM4ytc2oCnhyysHUIz3lCkcvDIUnjVwUp498Q8qEbxSxo%2BmSp38WqSs%2BrRs2E%2BeM9uADhicqnY7ZXu7ACPWVptLB%2FkPdn2AfJg90kDouzmHYsFyT6azGhfaoq5voWYhCc%2FI6mKS028fI2AgeRBcfube6yNUxB7CzvmWiuvmlv1gG8J7yIn24Cati2RvAlj1fd4pXt6jJng%2FvjXVH34inOeVERCzKIVj3fH4Jj%2FeXw3gpDAwqPjYwQY6pgHuwPwE3YqAvCbEAzzHhjy3qDTOssIxYBPa3eAnkakXqiSEUXu%2F6bzxWOnb1DIOLtWnjUXE3V6krinMonvUZkEAoR1iDumo6fZTxR65PbTa8jg2PQOzhRGYnYWZr11293QD7VRg1r50yF4TbMx6DqLLjBB70A5%2BG%2BvCARu%2FekV8ydIAPQtmN785Ey3%2BuJ1qWugZ%2FK3LonjUqigU0v1bKaIv%2Bnyt3mTr&X-Amz-Signature=1ae1c28accb7945ad2cec750f5957433b62e172a5327bc4a551322327fd7bd81&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7CSKOJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9I5pOGfJrf%2FhkPyTozwogMLonpohBc7GiQiKIl3XeFwIhANaTlQVaFxis%2FYBdJ5GMkXNKjJgiAqvVTWP3eja8b6nXKv8DCGcQABoMNjM3NDIzMTgzODA1IgwNpWFmA1j%2BXrdDzaAq3AMjDTHxJoEbNswQCUXVue1lHvQsxUqi1mDQXLZTJJuZpJi%2BVOKIF6xPRGZVqeZNtg%2FWtGVTISE1hXh0aZ9zoLb7uLHIsdoM3jOKC15GQijIo9sxeEeFBMG7XypAT%2FUu3Z0%2BxujIyHdQjlFrZsKeHpAvb6bkyEEX2FeEYILx9K%2F7vsQv53mjYVSD6vN5cvg314f8WiVtsLpQkp%2FJP468Vhl3aGNNhQDaJGNIq5QZ1TMFjr0xoPM2p6kcWOJG9jfQANL15bI8dnmluajuCd0Y28zbZ9bWpqrvhuupph7BG%2BysRitgRx0oApXGoc1fjgu1%2BU64l4PiSSKHMj0ZsKtzweoSYwPt3aEqg6Gka80%2Bl7Ykx%2FNWXqU4Lsef780%2BJRy3Mdb1iTVPlTJtgw8%2FnWWaP%2BizP5JxGmRkFNVrLjPI8sXuJjwiVsRnxRsrB%2FbC5HIFz4cpsemQUcW9F8DLCFbN1AHgaonkXho5K9qBBJpJ2hkvd1MO8gkQdzUy92EYCncP%2BE0FffLBpqK%2Fva5LyfuSmlizlemIDsZLuuO1IqNXNC5kRgIOuqddUQdq3STowrF9k6yL5aFyRElK23fNqcH9Pc926%2Fi92m0UjUPbB5BkeN%2FNz%2FrIdwFZhXwTqGM1azD699jBBjqkAScUnrYzB5VAGmEzvyre9dyNHwzeLBLNrS7BMLhHGyM1m9qSNENnH7BLH119KAi7rZ%2Bo5g1%2BRUelOmX%2B%2Fx8b4zX5gRFRjAytvMUFGzKfZEofbA7%2Fdnr9Rf9IoIJaSqMpOoF9p2MUyrf7J8tJyIBCj9jiTHLFe5humjXhRDi6NaFPtHsdwTxeNLpT%2FJu7h9VS%2BcW1CcgdkD3VyUsRDZwFHc7mqyUC&X-Amz-Signature=9e8b6fb63e05e5154856bcd2a74e6eef304fbd8242689df94fe64f53255f555e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KRBIGBZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDCTPHjiedFVGmHrDinMGVWh2gx%2BBT8fwX%2BkO9Iw2QWAIgHUe5JgwDQ%2FyMwP9T0b2df0hdNLRy2yuftgKgdIVb9p8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOagp4HhGDG4JWScHSrcA3hKGnrM7fwuTjF0zfbWVY4KLJX4k1F0r2fCWlYKhrcSihD6JL6z2EN3C7Md%2BR3hDh6FIYj%2FL4zXT26gyuav1QeJo%2FOQkCmSd8p6qMohpdGtI2x0vj3%2BTiSQ2%2FOyW8zvdyvfxUD2GPxco2zaf%2Bynq3telaR4KeOyASOecBJ%2FnyVxOpyS2hPWCQlfZ%2BIlnRpgUHdY2XEP9WYyxcmlh1%2FwwE5T1eaNQiM8TmyHEJwiWQOGXE9ZLHW6UJGFNY6OMxWVPRPCxT71QNNMe84gDz%2BN3gr5CouI%2BoAW77zrWYZHUOAigCQCyuzKJwFDNhfib7tLCKYbHABc%2BmnfcxtlN8nFECqoqqz%2BsTNHgPGXVCBXSaDZ9C42L9l1FW5nN6xMLCmivXys3QC1L9krCRtn2Ps5qdcsOxnyOIwDl57Lx2IWF9%2BGE1uETK%2Beay%2Fhj6g49n31OKpgMnzm%2B%2BjgLX97lWEHppqjrd0tOsKikkbiqsWUxa8gaf%2B9uPLiZF3gOiVApyq9H2oYxgAz6rAxU45OzMngdZ2Z%2BP5gfswvF3TWdVTNWw2MnzK176RT4QNkfL30RiA%2BWEvF2RWngiHooMrjTFtynqvWpBeAQfzdWLqVP2V5Wa%2Fn9WloCYwZmQW8N%2F1jMJT42MEGOqUB5I3E1WJCNElQhcHsGFqFN1YupZkytG%2B1HlkrcPoG7yyboAs6cz0Fxx0umyznNNb8PAQHhdV5MC8GHjCs8n1AiNcwcmAuDZIh3MDr1G%2FxOQueDEsm5kN4Pe2Ebo0ALkS%2BxyW5nk5aeQzaKSletzWRWu5Ewja3u4fhojV8o4nliOa0wy20OnHqrmHlsedBmSP08UZXlK4xZHYpxRvuOnnZubguLO0t&X-Amz-Signature=4ad0c30720cdea086dc1e6e06b086d6e7090fe74e96131e5e8837aca13f0aed2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4VCFY2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBABq5xK20%2B7PlbUu3W%2F9Q2umXkwPC8XfTKWUlxHrgBZAiBkdAgaNW9SrLSYqPIb%2B1RgVEi4eqyW91qty40jfJd4Zir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMbEa26A6BIHJ4InaYKtwDkJTMznoRVEeHV9xQFcaMzGsR5RnfeEBRyy2ZmGd6LNs24D63yLQkcQeaCe8iKVFxkMgFTDxWPBE%2FbkP%2F6crfzj5tfrspDgyvjopN5zYVP8YUNF8FqfCCSm%2F2rwn58fCglYnil%2Bl3qrpWfuijZelQh7mcvAOpHEAadeehtr96gUOIJoCBblsYMJuTNG7VntJm%2Bsi4Ltay4lrhQvLP66Tq4hekcIZmMbCfS%2F9a7ceU8dSJuj%2BBhaP6sNRbEh5fmE%2BPsz5genEairmeg0NJKyNkP84elJRyAFGi%2FOlMjk308WsII2%2BkVrNFhoNWmSWHafpFEf%2BqXsnKB7UKiXa3cQ6DV7V0nwZK%2B1E24qGGv%2B%2Brf1M3tFoU%2FhOOLvfwCHzOW3Xslc%2BHFSW2htnIwjM4ytc2oCnhyysHUIz3lCkcvDIUnjVwUp498Q8qEbxSxo%2BmSp38WqSs%2BrRs2E%2BeM9uADhicqnY7ZXu7ACPWVptLB%2FkPdn2AfJg90kDouzmHYsFyT6azGhfaoq5voWYhCc%2FI6mKS028fI2AgeRBcfube6yNUxB7CzvmWiuvmlv1gG8J7yIn24Cati2RvAlj1fd4pXt6jJng%2FvjXVH34inOeVERCzKIVj3fH4Jj%2FeXw3gpDAwqPjYwQY6pgHuwPwE3YqAvCbEAzzHhjy3qDTOssIxYBPa3eAnkakXqiSEUXu%2F6bzxWOnb1DIOLtWnjUXE3V6krinMonvUZkEAoR1iDumo6fZTxR65PbTa8jg2PQOzhRGYnYWZr11293QD7VRg1r50yF4TbMx6DqLLjBB70A5%2BG%2BvCARu%2FekV8ydIAPQtmN785Ey3%2BuJ1qWugZ%2FK3LonjUqigU0v1bKaIv%2Bnyt3mTr&X-Amz-Signature=254c78bdad0f99c75a41e7c2d13e1879889e31cf1fea649838be3fc519c5dec3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

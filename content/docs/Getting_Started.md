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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURIJ47H%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFV9dHn2UwwMFDoV8oqKGJ%2BIaquoYMwkP0fECQ4pI4u3AiEAwjdxCXElx0zNwlATgpZm4PiHK1L%2FvPZblIbjHGd6oAMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBE9GCphVgGnOoSVXSrcA%2FHPM%2BFsZkQwPQNnPkk%2BF2btaVfRaoasjcnd4rQ17Ode769XUoSqYgBUAmCS8Odqodtkbncj6iDIpi9ilVa0msvSqBrvW07XTgUxUKjeN%2FqNtPY9Dmw5geWB1sM7kbGtVKIs8b7%2FkLnt2WMZBGqBADBpkxBYlaatCJ%2FN260ljXstS55ve7SPphlFzzsehUoCSJLfM8XzaejXRb4otXsdnKOKcqPxIzv1yjhNgnKyuVWNvTzFimXHjqDvMY6xk6o9VhVg8LOsiimtUPvoForrzTKLzGrubjOmJ%2FrZsH2nsfsaqE%2FcJjIWGoZSKvovGbSQ5Z4mDtGPNvUyeuWxjE9tZME8hHLPRhpc3XK1xXykm1206Y2utjfQQXpahMdUsslZLDOW%2BhXKglWk2e4O78dqPgPJ%2FvdZm5pTt%2BuJjDqpyeUqX7UcnPKdO8DWmh40vFH3EqxP3%2B7FkAlsdj67MGiYWlBJsPKvAtgUYZQQqYWDkREdQWr5n5OcnUnfaqYtZGMAy6yR3q%2FjChVWPh6Tr7ulJH6fg3Ko2QeDxTCjnUe1dgRPc0ZRGF%2F2owtQh9YqK3a47hucQS6ZEfOP8zD63mRhap2sO7yjtncQMs%2Bka2EUYP3DkPqwXlwblcXeEogSMJyg88QGOqUB7hs%2FPT2NbfO8a0NrGRBck3U8RQGKd8WHpQ9fMpV7xaZng8bLPu6kfcCA6RSqDJ49K1E0pz%2Bs%2FXG%2Fs1SmD1xu5rYFoyg9ZzHcSLwvDGwcBHYtjHtwLT7f5fl0095r%2BgVUrwcKey6QRZJ7jZJO8sPkujldssIefQ3mtZtk6xjSKpld4jdVN%2BNFyn6Y07Fgt7cEkIxssoGKEqyR1tKn59v5qdqSuNzc&X-Amz-Signature=7be72fa0b96c4e3db41042c21ecb529d682c65e400884e77dd6a444341cf5a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURIJ47H%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFV9dHn2UwwMFDoV8oqKGJ%2BIaquoYMwkP0fECQ4pI4u3AiEAwjdxCXElx0zNwlATgpZm4PiHK1L%2FvPZblIbjHGd6oAMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBE9GCphVgGnOoSVXSrcA%2FHPM%2BFsZkQwPQNnPkk%2BF2btaVfRaoasjcnd4rQ17Ode769XUoSqYgBUAmCS8Odqodtkbncj6iDIpi9ilVa0msvSqBrvW07XTgUxUKjeN%2FqNtPY9Dmw5geWB1sM7kbGtVKIs8b7%2FkLnt2WMZBGqBADBpkxBYlaatCJ%2FN260ljXstS55ve7SPphlFzzsehUoCSJLfM8XzaejXRb4otXsdnKOKcqPxIzv1yjhNgnKyuVWNvTzFimXHjqDvMY6xk6o9VhVg8LOsiimtUPvoForrzTKLzGrubjOmJ%2FrZsH2nsfsaqE%2FcJjIWGoZSKvovGbSQ5Z4mDtGPNvUyeuWxjE9tZME8hHLPRhpc3XK1xXykm1206Y2utjfQQXpahMdUsslZLDOW%2BhXKglWk2e4O78dqPgPJ%2FvdZm5pTt%2BuJjDqpyeUqX7UcnPKdO8DWmh40vFH3EqxP3%2B7FkAlsdj67MGiYWlBJsPKvAtgUYZQQqYWDkREdQWr5n5OcnUnfaqYtZGMAy6yR3q%2FjChVWPh6Tr7ulJH6fg3Ko2QeDxTCjnUe1dgRPc0ZRGF%2F2owtQh9YqK3a47hucQS6ZEfOP8zD63mRhap2sO7yjtncQMs%2Bka2EUYP3DkPqwXlwblcXeEogSMJyg88QGOqUB7hs%2FPT2NbfO8a0NrGRBck3U8RQGKd8WHpQ9fMpV7xaZng8bLPu6kfcCA6RSqDJ49K1E0pz%2Bs%2FXG%2Fs1SmD1xu5rYFoyg9ZzHcSLwvDGwcBHYtjHtwLT7f5fl0095r%2BgVUrwcKey6QRZJ7jZJO8sPkujldssIefQ3mtZtk6xjSKpld4jdVN%2BNFyn6Y07Fgt7cEkIxssoGKEqyR1tKn59v5qdqSuNzc&X-Amz-Signature=29ab1fa124a65a7388ffb4f765e756f7acf7b8ac9ccaa23af79f03e4832d1348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURIJ47H%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFV9dHn2UwwMFDoV8oqKGJ%2BIaquoYMwkP0fECQ4pI4u3AiEAwjdxCXElx0zNwlATgpZm4PiHK1L%2FvPZblIbjHGd6oAMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBE9GCphVgGnOoSVXSrcA%2FHPM%2BFsZkQwPQNnPkk%2BF2btaVfRaoasjcnd4rQ17Ode769XUoSqYgBUAmCS8Odqodtkbncj6iDIpi9ilVa0msvSqBrvW07XTgUxUKjeN%2FqNtPY9Dmw5geWB1sM7kbGtVKIs8b7%2FkLnt2WMZBGqBADBpkxBYlaatCJ%2FN260ljXstS55ve7SPphlFzzsehUoCSJLfM8XzaejXRb4otXsdnKOKcqPxIzv1yjhNgnKyuVWNvTzFimXHjqDvMY6xk6o9VhVg8LOsiimtUPvoForrzTKLzGrubjOmJ%2FrZsH2nsfsaqE%2FcJjIWGoZSKvovGbSQ5Z4mDtGPNvUyeuWxjE9tZME8hHLPRhpc3XK1xXykm1206Y2utjfQQXpahMdUsslZLDOW%2BhXKglWk2e4O78dqPgPJ%2FvdZm5pTt%2BuJjDqpyeUqX7UcnPKdO8DWmh40vFH3EqxP3%2B7FkAlsdj67MGiYWlBJsPKvAtgUYZQQqYWDkREdQWr5n5OcnUnfaqYtZGMAy6yR3q%2FjChVWPh6Tr7ulJH6fg3Ko2QeDxTCjnUe1dgRPc0ZRGF%2F2owtQh9YqK3a47hucQS6ZEfOP8zD63mRhap2sO7yjtncQMs%2Bka2EUYP3DkPqwXlwblcXeEogSMJyg88QGOqUB7hs%2FPT2NbfO8a0NrGRBck3U8RQGKd8WHpQ9fMpV7xaZng8bLPu6kfcCA6RSqDJ49K1E0pz%2Bs%2FXG%2Fs1SmD1xu5rYFoyg9ZzHcSLwvDGwcBHYtjHtwLT7f5fl0095r%2BgVUrwcKey6QRZJ7jZJO8sPkujldssIefQ3mtZtk6xjSKpld4jdVN%2BNFyn6Y07Fgt7cEkIxssoGKEqyR1tKn59v5qdqSuNzc&X-Amz-Signature=243855331b3aab3f27b7c3054a412c1f276fe826d9a88fb18c47113517dcf665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ADEVLIA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5w2pefczlNhtbOTaYspLbqWriA%2FTLlUzpI5TSxp3J9AiEAk5cS%2By2ZnheDJvJaBEFN0Ob1OYM8hA9CjzUhvsHYTCQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDClAr8f%2BxMES3GuPlSrcA2kYAjVrF8%2FSen7J%2Fb5zxyxawrTWOh6yNjbSC7fhNlYvWg49hOTyMvoDOeVCyTmGnCVus0rt%2FoKu0NATzOiLltfZcJQ9xSo7XKtrbN%2FC5yzRJmTOxoaMeeKonML1Ut%2BfCaVVdg%2Ft32aFse9NuhoKxlZgUdVjH4gEvEoBL8qjgTiT4aHAtHHUQtgFF3Jvyu17R0klD%2Fyol%2F0Nle5PDRgJBQeQgGIcrO6pchBOob9RAJAXWUcuA%2FOb%2FDRgbH926j3ib18gFR0F541fKgqPhXfKPHwX9O7ilD9itzTlykKncDzOUhrDJqVRjnP4QoQqqJXCfkU%2FxhbzNJuGNZ%2FBDYthx4Pru8kC7DnnVTZSI3WTbPT0RwVJMWSC9dbgPJXgsKrrCl1uLE6uGYwllBZSYUDxEyE6bm2dmv%2FgmxmG2sYh5%2B4FXoZdUjLy1qPJI7mhZ1EOx2rnERTnb5KGjdo1n2S%2F25HXeeCQixJskqDqLSYg97pXAf3lB%2BQ3IwBSn9iU2pnGgZFKq9Q%2FlaU7j245u4h4%2Bbq2BdBgv9wLMP6JWtx7kkGakJ1UF8dbyMNvi6P5DUynQHsRf4Jb66%2BxP4xNEa1m7Z2Ytg9Rr9RfJSqZxwYN4p7rgvzNDqb7P6ogI4nLMN2f88QGOqUBCBWbIvvsNgBIFYev2EsDNpLp3YMIp1ZZFdyNW6itrM5k%2FpTuY1TNrM9NixGAEuW7KMHGbcGVz6tSBcnq9iAnWyc4lpDZm%2FlCYHdKTVGP0cFX0gfH%2B3nXruKAOmXhErZ99RefRp9IFitJdYltY6Fx3RtRRtXOFXXWpCbfwbjb6utd6COmin8r0j05rVdbboDk1Pe28o7QS8oxCg16zBZiM4ok3U2u&X-Amz-Signature=48788b36d4ba2db0ecb400de3a311d9f6974fe80c09d10f1f5662fb92101b909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXQKVKA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrQ4ikuVjhiCxzvSJj5p%2Bpa4ARqnFOSWRJJnqTlOulcQIhAN5vu%2F8zuxXaRGSOAVcRqWzpefmSqxG2Iy4y4ZhvkjLLKv8DCDMQABoMNjM3NDIzMTgzODA1Igw8zxWacGY7VZE7Qicq3AMfgNB3uGgscfgdjy9DuvsLh3vuC2Hop7nZRyxoSZeIMqFBm%2FK%2BkUO96BzWC2y6In5cSAV1XIUcRPD54%2BJPuSeIjOgKPVgRaUQsf0xqCCc6XNugdyv%2Fi6xtI9aw7Up9HChkd107gJsVLm5qZQyU8Q40rilVSSDuDxBI7wVg8LmKfYnG%2F2kPkfg1qIDGdscM9n5DvTv%2FG%2BNFY9EQXKktJ5dw7g%2BPlJfaEqEDR22bBMKaSHUY%2FrCPo9BOXVi61oUMYtqUnK%2FkoMSfbU3O2FU%2BQ74Gt5pIQSlXFOaqiinUwgy%2FjUxEsHoOzlz4Orn5wnBk8GOC%2BqFAj%2FTIYJlnWc2DjevfFtFR28t6Tz4RYursVWq9%2F%2BI2MzAlAI%2BZByt4w2nSXG5if9DCC4IlD8%2FCsVfpGsKac3CbAszOXTxExKDa86Hh65mzi8MZipBdU9BQl1%2FVIcbTc%2FWV%2FJYhU6nBokU3ZVkd%2FOTTPtE7luM0iXYCrVZpfXtj4OcAqjAGButJ1iKHxIsmAoJfUmVcT9ZK1H3z1v%2BxVKtll33mZ8KpR4FpLu%2FgtJphFE3FSVA78P6qOWV9oIh%2ByKsCo9uZewtsBx0DHd%2BPSD0YZWzg%2BoKha8crNdZgWfAhMIXOqHIo3dAGqTCjoPPEBjqkAbbI4vk7RY0jcTnezJNIUKS%2BEf86s1nGdvLZ%2FKW7zGoWTuHnEkVaTSwLlMeoVV8JQFr8FGaA%2FWbNB%2Forje1vuAaEnS2KiwsijSvyhtXkWd2Q6CO%2FRf%2FYY35FUZ5SS7Au0WoQpSaU%2Fmul1yznvJQI%2FByEV7MMa2ZFrr7IjUoBs581tdLu13AxU3UmGC6o42u5yjrdRAdKadGq2WA6eSZVi51jnaGL&X-Amz-Signature=f2ee8047046fa9f571ea3968de145cb85e96be20d4ed3c1dfb7a176900b604c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURIJ47H%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFV9dHn2UwwMFDoV8oqKGJ%2BIaquoYMwkP0fECQ4pI4u3AiEAwjdxCXElx0zNwlATgpZm4PiHK1L%2FvPZblIbjHGd6oAMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBE9GCphVgGnOoSVXSrcA%2FHPM%2BFsZkQwPQNnPkk%2BF2btaVfRaoasjcnd4rQ17Ode769XUoSqYgBUAmCS8Odqodtkbncj6iDIpi9ilVa0msvSqBrvW07XTgUxUKjeN%2FqNtPY9Dmw5geWB1sM7kbGtVKIs8b7%2FkLnt2WMZBGqBADBpkxBYlaatCJ%2FN260ljXstS55ve7SPphlFzzsehUoCSJLfM8XzaejXRb4otXsdnKOKcqPxIzv1yjhNgnKyuVWNvTzFimXHjqDvMY6xk6o9VhVg8LOsiimtUPvoForrzTKLzGrubjOmJ%2FrZsH2nsfsaqE%2FcJjIWGoZSKvovGbSQ5Z4mDtGPNvUyeuWxjE9tZME8hHLPRhpc3XK1xXykm1206Y2utjfQQXpahMdUsslZLDOW%2BhXKglWk2e4O78dqPgPJ%2FvdZm5pTt%2BuJjDqpyeUqX7UcnPKdO8DWmh40vFH3EqxP3%2B7FkAlsdj67MGiYWlBJsPKvAtgUYZQQqYWDkREdQWr5n5OcnUnfaqYtZGMAy6yR3q%2FjChVWPh6Tr7ulJH6fg3Ko2QeDxTCjnUe1dgRPc0ZRGF%2F2owtQh9YqK3a47hucQS6ZEfOP8zD63mRhap2sO7yjtncQMs%2Bka2EUYP3DkPqwXlwblcXeEogSMJyg88QGOqUB7hs%2FPT2NbfO8a0NrGRBck3U8RQGKd8WHpQ9fMpV7xaZng8bLPu6kfcCA6RSqDJ49K1E0pz%2Bs%2FXG%2Fs1SmD1xu5rYFoyg9ZzHcSLwvDGwcBHYtjHtwLT7f5fl0095r%2BgVUrwcKey6QRZJ7jZJO8sPkujldssIefQ3mtZtk6xjSKpld4jdVN%2BNFyn6Y07Fgt7cEkIxssoGKEqyR1tKn59v5qdqSuNzc&X-Amz-Signature=6546316c499b3fab72ca74fab77f915c332de532ed97f3923f85da509cb7fcdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

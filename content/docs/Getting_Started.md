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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K5XUPY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDghJqmX9iBMu3Unj3nnly9xXSmVQMjBosDpdtdnBFQiAiEA%2FolBb1Le7rhntS3ImgbDvHaYeqL6Ap2qEGByR9ouSvUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDB4eEXAE9P5OygiXvCrcA8uMxXCiY8cOHu1QDddmtVoC3SBVF3K7v2YbfKlT1RVFmdfnHs6Fj2yJXmiv2LyNLRgqwaXEqXQufcjc5qXVlXK%2BPQMlqfFUyasIRPw%2F0%2Bqnuzgn1skzz4WuiAKgIov4H5N1BD04VfTqwAFZLwICOo7wCUC1Vdo5T9v9CHjK06kGBrpVQylS5%2BDTtnZhUR4PdPdTAkBvKBk40W1QszHU%2F1KJM63BMXxHeCi6fFLF2V4u3HerlKsZuzWu0fr2yh8BC48EISYpAB0DC%2FBt6WSJM8%2F4SaNANn%2FeMIybmJ1QFjWTw8wXBv15ONu6AixQ8kKQYqHL3p1yy2J5T2AUVoAAwoTymbzyIVQAWr3sfFMg4N00%2Bziv9cH9dR6K%2BEAn1QjYmOZNIK7TJ6HimRkxy3XdOYk6vJ8Q%2BFlyZRerF1f%2BkvZRTSz5uWXkmTI%2BqH%2BYeSMw%2BMPsUiO498C6uhea54HXaq5I03BaakIzT1BndHEow%2BpjHKhUTB4DSRLH7UF3G2OYUD8c8hvWua69cf5rNSsPtgdxdUn4oiQYZkeUfr%2BTyC4NWRFbca1sE%2BtOhhbkoyaEVgSbvCcw7sSLLBm4kdH9dsiNrQnyf9lTVIm3pl4zbX%2Ff5Lx%2Bp3YR6jovJ0IfMPqio8MGOqUB9XQVexa2g4iEIVIVhpkyKtNVo5iUYNCvsK5PKFq4r4TFqTMuZeCV8yCriGrnKZ1wVmhuBEdRBJqAVIWAKC%2FJbXSyxrlcIiVgU9MdMhW0sbubVp1TBxTNLn%2Fkl4Xn4BftqMKi1OXCmR7FATmlqhweZRY4NgcqQnvuKYAdB12dv5SK0DNWfgW90%2FLEttnpt3ImcWUKy%2BMhh5kEr3lHy%2BSXIIbLbvsA&X-Amz-Signature=1663a6e13349ded8043950ef5d2d652f2a9f0217d2f8662b745349cefc43ab71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K5XUPY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDghJqmX9iBMu3Unj3nnly9xXSmVQMjBosDpdtdnBFQiAiEA%2FolBb1Le7rhntS3ImgbDvHaYeqL6Ap2qEGByR9ouSvUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDB4eEXAE9P5OygiXvCrcA8uMxXCiY8cOHu1QDddmtVoC3SBVF3K7v2YbfKlT1RVFmdfnHs6Fj2yJXmiv2LyNLRgqwaXEqXQufcjc5qXVlXK%2BPQMlqfFUyasIRPw%2F0%2Bqnuzgn1skzz4WuiAKgIov4H5N1BD04VfTqwAFZLwICOo7wCUC1Vdo5T9v9CHjK06kGBrpVQylS5%2BDTtnZhUR4PdPdTAkBvKBk40W1QszHU%2F1KJM63BMXxHeCi6fFLF2V4u3HerlKsZuzWu0fr2yh8BC48EISYpAB0DC%2FBt6WSJM8%2F4SaNANn%2FeMIybmJ1QFjWTw8wXBv15ONu6AixQ8kKQYqHL3p1yy2J5T2AUVoAAwoTymbzyIVQAWr3sfFMg4N00%2Bziv9cH9dR6K%2BEAn1QjYmOZNIK7TJ6HimRkxy3XdOYk6vJ8Q%2BFlyZRerF1f%2BkvZRTSz5uWXkmTI%2BqH%2BYeSMw%2BMPsUiO498C6uhea54HXaq5I03BaakIzT1BndHEow%2BpjHKhUTB4DSRLH7UF3G2OYUD8c8hvWua69cf5rNSsPtgdxdUn4oiQYZkeUfr%2BTyC4NWRFbca1sE%2BtOhhbkoyaEVgSbvCcw7sSLLBm4kdH9dsiNrQnyf9lTVIm3pl4zbX%2Ff5Lx%2Bp3YR6jovJ0IfMPqio8MGOqUB9XQVexa2g4iEIVIVhpkyKtNVo5iUYNCvsK5PKFq4r4TFqTMuZeCV8yCriGrnKZ1wVmhuBEdRBJqAVIWAKC%2FJbXSyxrlcIiVgU9MdMhW0sbubVp1TBxTNLn%2Fkl4Xn4BftqMKi1OXCmR7FATmlqhweZRY4NgcqQnvuKYAdB12dv5SK0DNWfgW90%2FLEttnpt3ImcWUKy%2BMhh5kEr3lHy%2BSXIIbLbvsA&X-Amz-Signature=2e2a6ed546ea34c20d744b45328ee4211f706d021f63fc9f39b12a4dd21f3233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K5XUPY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDghJqmX9iBMu3Unj3nnly9xXSmVQMjBosDpdtdnBFQiAiEA%2FolBb1Le7rhntS3ImgbDvHaYeqL6Ap2qEGByR9ouSvUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDB4eEXAE9P5OygiXvCrcA8uMxXCiY8cOHu1QDddmtVoC3SBVF3K7v2YbfKlT1RVFmdfnHs6Fj2yJXmiv2LyNLRgqwaXEqXQufcjc5qXVlXK%2BPQMlqfFUyasIRPw%2F0%2Bqnuzgn1skzz4WuiAKgIov4H5N1BD04VfTqwAFZLwICOo7wCUC1Vdo5T9v9CHjK06kGBrpVQylS5%2BDTtnZhUR4PdPdTAkBvKBk40W1QszHU%2F1KJM63BMXxHeCi6fFLF2V4u3HerlKsZuzWu0fr2yh8BC48EISYpAB0DC%2FBt6WSJM8%2F4SaNANn%2FeMIybmJ1QFjWTw8wXBv15ONu6AixQ8kKQYqHL3p1yy2J5T2AUVoAAwoTymbzyIVQAWr3sfFMg4N00%2Bziv9cH9dR6K%2BEAn1QjYmOZNIK7TJ6HimRkxy3XdOYk6vJ8Q%2BFlyZRerF1f%2BkvZRTSz5uWXkmTI%2BqH%2BYeSMw%2BMPsUiO498C6uhea54HXaq5I03BaakIzT1BndHEow%2BpjHKhUTB4DSRLH7UF3G2OYUD8c8hvWua69cf5rNSsPtgdxdUn4oiQYZkeUfr%2BTyC4NWRFbca1sE%2BtOhhbkoyaEVgSbvCcw7sSLLBm4kdH9dsiNrQnyf9lTVIm3pl4zbX%2Ff5Lx%2Bp3YR6jovJ0IfMPqio8MGOqUB9XQVexa2g4iEIVIVhpkyKtNVo5iUYNCvsK5PKFq4r4TFqTMuZeCV8yCriGrnKZ1wVmhuBEdRBJqAVIWAKC%2FJbXSyxrlcIiVgU9MdMhW0sbubVp1TBxTNLn%2Fkl4Xn4BftqMKi1OXCmR7FATmlqhweZRY4NgcqQnvuKYAdB12dv5SK0DNWfgW90%2FLEttnpt3ImcWUKy%2BMhh5kEr3lHy%2BSXIIbLbvsA&X-Amz-Signature=ca97cae86802cfcb8653176f1632f0bcb76bb28f5d3cad2db44a89443b56b884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKQGKLU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDe27sLzKPWiLCZjKtOncgdJQS0GRxyZPC7707YsPmsGQIgK%2F%2BctrNJEqb0OD%2B9FH77V9dqLhGiOO568nkqMiydj%2Bkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDD4lqZxXeEG9Nce8dircA6Z1OPyfi5mj15b0vGoLxClMqEhLB%2BDtYOgAgUzKEIIQtCS%2B6zCRAWBbXOH%2FzGNzI2aOjka5hA6tBgYYKNxr9LQyKLdcdLBq1ROw7mLz%2Bt1hGkDINrhaSJbZjXVdWTqZv1fGAcsHYmiWCwrXw1tklnNrvwAJNStJ7CBDFa6SZX4%2Fvr8Q2s%2BQu4iWnqEDxaOqn4k4kXtpMNa1O4ryT4IwRzz7BdAinKuESqXG9S4JNMFPzfl%2FNf99nLKJupAIivcFaHMzOEM%2FeTzyEUozmYx67AY7sAZu4MHsjNdxxqeZzlLfqoT5VqWJtiFvzgRkubzcCRQOgTcn9XSQb%2FoJ3Yl2O%2BxQxZJiGiC72NEghRoPaIhbwhrTV5fqxBcf6iE1tTxf7p8e6ukAwD5HS7cGMXUuSgl%2Fjgr7xRufoJ7fcLIQ8JN1ZZSOQ3KmmGsaGxYC2c1CsVgF6vyju1kCrjOCPuNW0Wk87pwsXoy57YfCZgxNbYSaF85Ye9utUCEVs6iLtNo5daAcX8U%2FGzzrSgsQDxRuyFom0i9Gk5WwBxrwCnIV2lim%2Brjrkgo1%2B6kWVVCan%2FO3KE5WfMYrW2%2BE3bUuVl1p0mymi1bMXiBIZu6bt2hWmmhxNHaifEO2fUfZcRIMMOSfo8MGOqUB0zqHP%2FDyDXivTedNeDSPjPo8JuudmUi28iMvYdSL6q6X72GSEQBkzZJmYjtd9GdBramYt77V5aPvUlHJdcy%2Brq3UcA76sF7c30ruG%2Ba86JckfY70G7%2FdNeZftO9pSzQ6XlhgOyjxm7ddVYvzPSfgzX%2BIYBGRNMzQHX%2FPqpii9LGG%2FjbPY3Uo1NYRFBlUJXCiBctfg1xp18Zk7OiyNmd3T53AjdvB&X-Amz-Signature=941af28657f2a3020c66e04195ad91eaed684818140e1e99f78a8899a81f082e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMMHJKM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEnGN8FLYBnDhw9j54YTSPX2pN0Kcg9nOR29nW69nBccAiAICSAsL%2BcrWA1y9jlZ1we%2FjQvzNF0d17jdcJy3soQlTyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMxGvC6Hzfd4H%2FnW8eKtwDi2DlT9Vn5IpeAlddbiaucvYs9l6utgekDQ8hTOQnS%2BOHLu%2F0LEAyUfgzceXQVN0auRNQl5gyZ4RGI5G2F451l5YILSQzX6ZdZ1Zuihc6MO%2FCg6fJXowxwRRPNTKf0jIuKY7URn2mthl8kWvWEGyVl%2BWG3%2FOiDgOzFhWXdQiVUwEd812OW1%2FvqH51IIGQzxwLM7PTH1o%2BvIX8ZgeWIN9vrm%2B5BmRoG16HMQeFjyWNTFUBwc%2FtVnl8NFNZWUMTaWZ32bC0TFcJCzmuU6jljoUknW5489ELRbqD1ga5eyHhP2GCqRIXoJ3LW4b%2F1efceefWxiLf%2BcgpU4GdcrJf9tn2RTQXUc%2FjFQWPCw95EjGzEDoEU68l8v%2F9D%2BRUSslScitexuwurr52t9TLMfGiVxiMTWgJS7C0WATkDUfrdKZvjDuEYS9YxsloGlf4zU0D92bXys7NO%2F0hwuQMSvZQqkWoOf7EungH2l3so4lz%2BscWb3mpbb5SyEbj7lEhnTfHYoNAmGy9MwYu8qQaXrARmQ%2BjKrLZHBPO02xDK%2BKP9H0PJOebQPgBnBVQfqc71urZQM82HMof0UrIZpVgO3MAe2mLJhJbuqkoKcbP48vDFK5zpAFtfsRBLNa7sXSi3NUwvLCjwwY6pgEiqsV0HhI8ahJxED3tl1rSLR%2FYvwTdGrf7KAIuKuOrTxype7QiaxhC0R6xl8AMVNcOyFey1vKv6vdAvSSJ6zGTDD87L9B4aPX0YDT0Fk1t5TRqUfkiJBY%2BUfplXWVRFy83ntjKWAiLIUTvHeEyYPetCh%2BFcEI7sJSYWBljHDWYJFLC9SLyjYS9SVHJK%2BZBTNWgtiSDyCKWTqxptyZvWB8s8BirEyDq&X-Amz-Signature=3b9f1e06d141fe8da16672e3ad942f948d050db5878e7d03eef4dfac8297e511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K5XUPY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDghJqmX9iBMu3Unj3nnly9xXSmVQMjBosDpdtdnBFQiAiEA%2FolBb1Le7rhntS3ImgbDvHaYeqL6Ap2qEGByR9ouSvUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDB4eEXAE9P5OygiXvCrcA8uMxXCiY8cOHu1QDddmtVoC3SBVF3K7v2YbfKlT1RVFmdfnHs6Fj2yJXmiv2LyNLRgqwaXEqXQufcjc5qXVlXK%2BPQMlqfFUyasIRPw%2F0%2Bqnuzgn1skzz4WuiAKgIov4H5N1BD04VfTqwAFZLwICOo7wCUC1Vdo5T9v9CHjK06kGBrpVQylS5%2BDTtnZhUR4PdPdTAkBvKBk40W1QszHU%2F1KJM63BMXxHeCi6fFLF2V4u3HerlKsZuzWu0fr2yh8BC48EISYpAB0DC%2FBt6WSJM8%2F4SaNANn%2FeMIybmJ1QFjWTw8wXBv15ONu6AixQ8kKQYqHL3p1yy2J5T2AUVoAAwoTymbzyIVQAWr3sfFMg4N00%2Bziv9cH9dR6K%2BEAn1QjYmOZNIK7TJ6HimRkxy3XdOYk6vJ8Q%2BFlyZRerF1f%2BkvZRTSz5uWXkmTI%2BqH%2BYeSMw%2BMPsUiO498C6uhea54HXaq5I03BaakIzT1BndHEow%2BpjHKhUTB4DSRLH7UF3G2OYUD8c8hvWua69cf5rNSsPtgdxdUn4oiQYZkeUfr%2BTyC4NWRFbca1sE%2BtOhhbkoyaEVgSbvCcw7sSLLBm4kdH9dsiNrQnyf9lTVIm3pl4zbX%2Ff5Lx%2Bp3YR6jovJ0IfMPqio8MGOqUB9XQVexa2g4iEIVIVhpkyKtNVo5iUYNCvsK5PKFq4r4TFqTMuZeCV8yCriGrnKZ1wVmhuBEdRBJqAVIWAKC%2FJbXSyxrlcIiVgU9MdMhW0sbubVp1TBxTNLn%2Fkl4Xn4BftqMKi1OXCmR7FATmlqhweZRY4NgcqQnvuKYAdB12dv5SK0DNWfgW90%2FLEttnpt3ImcWUKy%2BMhh5kEr3lHy%2BSXIIbLbvsA&X-Amz-Signature=f979c93e8698ffa171031baaadc68e4660fc671315ed0914a60a42bf9b05b7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

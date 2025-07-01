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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWBCYOQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewaIKYoz1jhf12NUiV66rj3EZfGNib86UYvDhGyB%2FEgIhAJjU8B9eXeV0EVJt%2Fom%2FbkMOHOqCJ2BbBSX4KZ5CjzbfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJO8IZfZvWDzwFAs0q3ANc5RUUOMk%2FFIixzuFUpjuIsH0XmOKvfjnoAg1jwo5NYYpo%2BUqKqsmx3MRM8JrQoDgVk3xJLp1Y2JFUzmXBc0pz5AHnwMMY5fSjDtrfKlhFDrN3J3U8qFhcVD6ymJU39KZtA5g460Bc8dVRi7eMDZQdrWnse1lqozjhOicToDx2OUyZxQdxoL%2FeWX9SirC1f%2B3HE4YIogPY7ld%2FsBmpnWBq4stgYo6Iz5cV%2BZCZuOsYH666wf2senHzBxMikZfpVIYwuXPcyCxUVFg6Gevkrd5ppkAMHNiffDPCcgAeH9BJjt%2BXG4nLPfmcPKk2qpkKM3ATzcpXgk8ReegwcHnPj52Ynu4PXcGQnCsHW1gyXFyy5QDTOYhKX6GeI1vYLMCfdGRU1cHgGkRvG5S8BH%2FLwpoS9%2Bgy6BGJ7aH%2FVt%2BcJz7vTPta3f2VMNvdY1%2Fd%2BOjtXIKPJngz3LW0YWA43fpvuhoWjXsa7QZWkqczCN8PqNI%2BpoMDFCSCU5wWWlsVUKuncpO%2FwR7GWad1O1quTx72XJ83TXPBZ02sMj%2BHwNsteAWVELblc%2FX065Kiz9qJx8meWcwN3C%2FIPLXlS%2BRpU3KTdJpc39QfGdDsyy4cP5%2Ffi0XH8GXfdYnxwRXMRFMiUDCMxZDDBjqkAeME%2B%2FQFhvH9%2FClSkDj3VjtoMC7vMNN4iWToELDt6Rs3KqSjiml0X8IxxkELfwuECzQXXTFFX%2FPqJL6DPXVAvhRB7JukvJ8E80gSv0so8dUPFwFQpmVQGzE1JtKgjFerr8tvjTzCTxEJVLq3UIpunYYpyj18snBWSvWcPdR2W5I8p2gc1rSzJYlFPNa9oOlsGLZOdJm6zJ4l2VrU1TgtnAwc8ZoU&X-Amz-Signature=26327ccbec1f223f4b37578cb31c976be81fb1f23ecfad50cca49dfe842ec7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWBCYOQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewaIKYoz1jhf12NUiV66rj3EZfGNib86UYvDhGyB%2FEgIhAJjU8B9eXeV0EVJt%2Fom%2FbkMOHOqCJ2BbBSX4KZ5CjzbfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJO8IZfZvWDzwFAs0q3ANc5RUUOMk%2FFIixzuFUpjuIsH0XmOKvfjnoAg1jwo5NYYpo%2BUqKqsmx3MRM8JrQoDgVk3xJLp1Y2JFUzmXBc0pz5AHnwMMY5fSjDtrfKlhFDrN3J3U8qFhcVD6ymJU39KZtA5g460Bc8dVRi7eMDZQdrWnse1lqozjhOicToDx2OUyZxQdxoL%2FeWX9SirC1f%2B3HE4YIogPY7ld%2FsBmpnWBq4stgYo6Iz5cV%2BZCZuOsYH666wf2senHzBxMikZfpVIYwuXPcyCxUVFg6Gevkrd5ppkAMHNiffDPCcgAeH9BJjt%2BXG4nLPfmcPKk2qpkKM3ATzcpXgk8ReegwcHnPj52Ynu4PXcGQnCsHW1gyXFyy5QDTOYhKX6GeI1vYLMCfdGRU1cHgGkRvG5S8BH%2FLwpoS9%2Bgy6BGJ7aH%2FVt%2BcJz7vTPta3f2VMNvdY1%2Fd%2BOjtXIKPJngz3LW0YWA43fpvuhoWjXsa7QZWkqczCN8PqNI%2BpoMDFCSCU5wWWlsVUKuncpO%2FwR7GWad1O1quTx72XJ83TXPBZ02sMj%2BHwNsteAWVELblc%2FX065Kiz9qJx8meWcwN3C%2FIPLXlS%2BRpU3KTdJpc39QfGdDsyy4cP5%2Ffi0XH8GXfdYnxwRXMRFMiUDCMxZDDBjqkAeME%2B%2FQFhvH9%2FClSkDj3VjtoMC7vMNN4iWToELDt6Rs3KqSjiml0X8IxxkELfwuECzQXXTFFX%2FPqJL6DPXVAvhRB7JukvJ8E80gSv0so8dUPFwFQpmVQGzE1JtKgjFerr8tvjTzCTxEJVLq3UIpunYYpyj18snBWSvWcPdR2W5I8p2gc1rSzJYlFPNa9oOlsGLZOdJm6zJ4l2VrU1TgtnAwc8ZoU&X-Amz-Signature=e07029dd8ccfe73985615361192ac3f8d627bf4c7c1f87486f1a7139fb0ddf2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWBCYOQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewaIKYoz1jhf12NUiV66rj3EZfGNib86UYvDhGyB%2FEgIhAJjU8B9eXeV0EVJt%2Fom%2FbkMOHOqCJ2BbBSX4KZ5CjzbfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJO8IZfZvWDzwFAs0q3ANc5RUUOMk%2FFIixzuFUpjuIsH0XmOKvfjnoAg1jwo5NYYpo%2BUqKqsmx3MRM8JrQoDgVk3xJLp1Y2JFUzmXBc0pz5AHnwMMY5fSjDtrfKlhFDrN3J3U8qFhcVD6ymJU39KZtA5g460Bc8dVRi7eMDZQdrWnse1lqozjhOicToDx2OUyZxQdxoL%2FeWX9SirC1f%2B3HE4YIogPY7ld%2FsBmpnWBq4stgYo6Iz5cV%2BZCZuOsYH666wf2senHzBxMikZfpVIYwuXPcyCxUVFg6Gevkrd5ppkAMHNiffDPCcgAeH9BJjt%2BXG4nLPfmcPKk2qpkKM3ATzcpXgk8ReegwcHnPj52Ynu4PXcGQnCsHW1gyXFyy5QDTOYhKX6GeI1vYLMCfdGRU1cHgGkRvG5S8BH%2FLwpoS9%2Bgy6BGJ7aH%2FVt%2BcJz7vTPta3f2VMNvdY1%2Fd%2BOjtXIKPJngz3LW0YWA43fpvuhoWjXsa7QZWkqczCN8PqNI%2BpoMDFCSCU5wWWlsVUKuncpO%2FwR7GWad1O1quTx72XJ83TXPBZ02sMj%2BHwNsteAWVELblc%2FX065Kiz9qJx8meWcwN3C%2FIPLXlS%2BRpU3KTdJpc39QfGdDsyy4cP5%2Ffi0XH8GXfdYnxwRXMRFMiUDCMxZDDBjqkAeME%2B%2FQFhvH9%2FClSkDj3VjtoMC7vMNN4iWToELDt6Rs3KqSjiml0X8IxxkELfwuECzQXXTFFX%2FPqJL6DPXVAvhRB7JukvJ8E80gSv0so8dUPFwFQpmVQGzE1JtKgjFerr8tvjTzCTxEJVLq3UIpunYYpyj18snBWSvWcPdR2W5I8p2gc1rSzJYlFPNa9oOlsGLZOdJm6zJ4l2VrU1TgtnAwc8ZoU&X-Amz-Signature=d39b8e518d28328de447f29f1d63df2728e236f7fb3cd919232328943d6e642f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSHWCZKN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BBe%2FUzfR8SBE%2BMitBTFxyAHyaWqOjYoUodLyc3n6HyAiBaP%2BoRfMOjRplJ1VyBVwb9V%2FbV5yABLuftsQNBWcixaiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA6QqxGOw8FG%2BJxjxKtwDMEVXxkaw1%2FQ2NxpUxEE8vJzTuWcpMedojTlfcGxSBvRK8BNafsOUYOohfTfv%2B2tJe1hXOSQIvJSbYCGc72Jj2Ivfu8Hr7jH9t1NGfZ8aDNagcVh8fJozE4CJ7sKpNwpCQoEUh95Cwyp7RmMzBg4qGPXAVlybF%2B8EtVChRspD5gL4ZQyaUad3SrIvcDw76916POX6gyX%2FvS%2BJLQMf46lDi0clxfhYeRbrw4VDBFKLke6LgdXao8CnpFzeN%2BOxgXO4Qo6%2BHp2HziwY%2Fz6uFyGoAy6yfGXQo9AjKcZ40G3L6JpEyppewJ5QlRXmAHRPIq6IjKzZvQcbEGY214PeATXMMhxUjn2pa0Phm57puHTIQGKYkJaT109YcnH0lfpQ4jjYRDjBoXpGIJnX8YTMa33brlu%2BJrChXyFBwLS%2FU8NSMXJWjBb5EeOzikE%2BmH1qW89EdILjXxOQkAb92Jdc8kzLpgvdDUaASeahWoKiTbUHmwn4GHPwEjS7tpvVdbpNfasFgw5uBzyiNV6%2FsOn%2BXSr0KFrvJdC1HEtueIbxt876fAJ4%2B875B%2BVEgBmEujMdSl4X8HHr%2FDv%2BMgUe6Wq4Nn9I%2F2UMkGjXnigL2p0uflPBEsKLTR9rv9hTJTS98bgwmsSQwwY6pgGZ%2FVPp%2Bbu6WOkzesvr5wNdOaW0ALJeuVIWlv5hUy6p%2B0dTx%2FFDZ9nk3fFcNfemb0na4Kyk1T0Qnsd%2BT38AT%2BWK6BqsUOKIhUtQTRfgXKMAYDXvhgXivdy3B1O99JyVdEtmqKmQiRuR24ZjH%2BU9ZDOCAMP6pZ%2FQTdsd0ol85FNo6clDupKRs9m9B4Ag8ozEcIhtuPjFYUwIHa%2F1%2FEuK%2F3TLQGbTtcfh&X-Amz-Signature=ce8df0c7e9c2e242cf40e4c445d999fd04bdb893f838acf8040c3db69dc831f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3WBKB2%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHtQOpO%2B%2F75w7PhaDzU78IQvTxWg%2Fi2fmEw2k62gwiNwIhAOfA2BeLshMZR8ZGloIsFKWrwgEpbKaZolEv2kBqphuUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3ZX3va6QEF9%2F5Cm8q3AMaQyAmb%2ByDC8gSotAVzbWULbBsxRVkgei3WqmEIfQQvUZF8CnJ12Bat%2F5QOSAiqyah%2FDsJZLUHvTHwJa1JciiktmKh2JwiEgFsfwb4srOeixlmmZiVpaUUEKAJmzA5Y%2B1%2BWxAk%2BEJklrakthNpkxJR9KyLqJIp0yrbPdvFqYXx%2BfLTSxOQCPovRJMoGaYZBgny6DdGuVEJNJWlsl6a7zLtyNOdQomZTzefqfd207%2FIyLlIMks4BM6TUb30CnvWMcqPdDgJ0SFDbK0xO3NMl6W3uBF1cfpgM2TsiCcNGNmGAHTaat%2Bsb7IYr3SNRdZnY%2F0vnsnTDHw8TM5lrMYaFSKDUxWgeYuHp44V7DHNT7WO7sAN3CADk5NUCIXww8c3ksQlGfbAMYQvyglw%2Bgq0BFWoDPUbfvTfWd7%2FqGip1NOFHnd2CJ3pMwMnAF8F2okrZ3Z14WIjB20XXKP%2F%2BkSiViVKvFJIazuPU%2BokygILX9fzrVCU6YjA3Hwtg5smdWhdGOHlcIlDEWTsJ8GKD890hcVaRISVN4T1XjpKh8cwmaKQED3ddnNOQ2IdaofDiZl%2BPFJE8w3wbIjycYI5LHBdUDrOtuZXteq%2BiOGVMEIfr0fx3yyceHqS19psEA7%2B5DCbxJDDBjqkAVXjGTbWIjRB%2BVmFHPR8HVFRqydCL1HXo0k1meMCTYUBUm%2F6WNQy0vfwAKyHV83c48rZcgbelXVHv047sXbCj8yYxtYtyDG70MQe0KBH35q4Pggjo41ZiZXHFDJgLDBmfEyeQHMTt1ZAFPhCcbmqbd7f1xi6lXObHpLAWbEQky8zc8FQv9QQa%2F6CRYpr5g9PxdXjDjTNZS1iznEU7j4O3sSq47sV&X-Amz-Signature=0536e32e296e7a163f03c970a092ace54e04a71895e9c2111376415f77978586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWBCYOQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewaIKYoz1jhf12NUiV66rj3EZfGNib86UYvDhGyB%2FEgIhAJjU8B9eXeV0EVJt%2Fom%2FbkMOHOqCJ2BbBSX4KZ5CjzbfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJO8IZfZvWDzwFAs0q3ANc5RUUOMk%2FFIixzuFUpjuIsH0XmOKvfjnoAg1jwo5NYYpo%2BUqKqsmx3MRM8JrQoDgVk3xJLp1Y2JFUzmXBc0pz5AHnwMMY5fSjDtrfKlhFDrN3J3U8qFhcVD6ymJU39KZtA5g460Bc8dVRi7eMDZQdrWnse1lqozjhOicToDx2OUyZxQdxoL%2FeWX9SirC1f%2B3HE4YIogPY7ld%2FsBmpnWBq4stgYo6Iz5cV%2BZCZuOsYH666wf2senHzBxMikZfpVIYwuXPcyCxUVFg6Gevkrd5ppkAMHNiffDPCcgAeH9BJjt%2BXG4nLPfmcPKk2qpkKM3ATzcpXgk8ReegwcHnPj52Ynu4PXcGQnCsHW1gyXFyy5QDTOYhKX6GeI1vYLMCfdGRU1cHgGkRvG5S8BH%2FLwpoS9%2Bgy6BGJ7aH%2FVt%2BcJz7vTPta3f2VMNvdY1%2Fd%2BOjtXIKPJngz3LW0YWA43fpvuhoWjXsa7QZWkqczCN8PqNI%2BpoMDFCSCU5wWWlsVUKuncpO%2FwR7GWad1O1quTx72XJ83TXPBZ02sMj%2BHwNsteAWVELblc%2FX065Kiz9qJx8meWcwN3C%2FIPLXlS%2BRpU3KTdJpc39QfGdDsyy4cP5%2Ffi0XH8GXfdYnxwRXMRFMiUDCMxZDDBjqkAeME%2B%2FQFhvH9%2FClSkDj3VjtoMC7vMNN4iWToELDt6Rs3KqSjiml0X8IxxkELfwuECzQXXTFFX%2FPqJL6DPXVAvhRB7JukvJ8E80gSv0so8dUPFwFQpmVQGzE1JtKgjFerr8tvjTzCTxEJVLq3UIpunYYpyj18snBWSvWcPdR2W5I8p2gc1rSzJYlFPNa9oOlsGLZOdJm6zJ4l2VrU1TgtnAwc8ZoU&X-Amz-Signature=e9f2c989e5e7ebd71db5089e371bdbd869ec9d6a8e2f192ba767a811125ace3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

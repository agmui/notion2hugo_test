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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQV2BPR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkdY8V9nj6%2FwpMqN8O4iNhqQ8VNHbSgUlvVAkGRbA1jQIhAPMLFVDYiYH50Kk7vfl4AWYwynZxn36PBnNvVv5Jn7xjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwyPK%2BD%2BXmIA4NME%2BAq3APd1M1qhRkX6A3XO4xonaXLg0RwW8tZGT8s4B32yY%2BIvKis096Z4XrZqWsaxaRVAazJ9HJT%2FIBBl9TsCtIXIop2HOSXG3EyPnVQy6zm3jph0MgQmZ%2FrL%2FmnGmjWIrvWSD5ttgF7%2BfKNz%2BhDszAuH0udbmSdw61X54Oy5oo0zTEqBwOLFKDXwK5SVwwLXI24sXhS6iPUQ6RVuOo%2F0l3TQ1Ric4mDopk7QG%2FMZhHHaox4kbFiNp%2B%2F72fVeTX63TUiT65Z4lQBuI8pUcjHo08d0%2BeulNW5%2BVIzayy8WCEzDqJxbX3Ss%2FjtIhCjlKnZCYNHsFG%2B%2By99U%2F4veIIyjLaQU4dGh%2FWORYzE2IzHLGI0fU%2FtAThsHwAcN1VWO5stMpU7j%2BAhC5bz3pfBPmS4bBSVJkXqa5xEobCIci0qMXibRzLvbqg80RPFSBrbn1cmas2JxDdM3YTf4CCxZpb6%2Fq5nTP1QGeA7os0waPWDarXAdjoiKU2rUSaQADNY2Ze3jLfc4sA8RI7OljxCMTB1fV2yE3fRgzCSnXnv7ZD0XR9urMF1oKF%2B25EE4Sad1Z9wUu4s%2Fg6UbBNu2zcBoRcAM%2FniFrFx%2FzqsufKcsIk0WPjAEqFxg82yjQiKjvTEmTZV%2FjDG17jABjqkAcVsuEUDfK2aU52lxr492Pi1PKXX0A%2BkceUGCtv503GCbk5O3MvYhJhgsgtI7QiUwRK%2Bv%2FbBZ0O8%2FRxw%2FNMIkzIAGlQ5fcdoC51iqmhq9xdK%2Fj2i6K6erY0GHu0WmfbE0jXk%2Fw6cDn2G8hp1hQ15MRE0avgItn%2BN%2FB6c7Gp8jyQN0VW6UGur%2BglZOkqhhWErKZu%2FrvSUPDbkAK0myHP5PjcwI7HB&X-Amz-Signature=4cf38f513734f54af674f5ba1640e06973113e56e9fc9b66d74a209b1ef2640e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQV2BPR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkdY8V9nj6%2FwpMqN8O4iNhqQ8VNHbSgUlvVAkGRbA1jQIhAPMLFVDYiYH50Kk7vfl4AWYwynZxn36PBnNvVv5Jn7xjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwyPK%2BD%2BXmIA4NME%2BAq3APd1M1qhRkX6A3XO4xonaXLg0RwW8tZGT8s4B32yY%2BIvKis096Z4XrZqWsaxaRVAazJ9HJT%2FIBBl9TsCtIXIop2HOSXG3EyPnVQy6zm3jph0MgQmZ%2FrL%2FmnGmjWIrvWSD5ttgF7%2BfKNz%2BhDszAuH0udbmSdw61X54Oy5oo0zTEqBwOLFKDXwK5SVwwLXI24sXhS6iPUQ6RVuOo%2F0l3TQ1Ric4mDopk7QG%2FMZhHHaox4kbFiNp%2B%2F72fVeTX63TUiT65Z4lQBuI8pUcjHo08d0%2BeulNW5%2BVIzayy8WCEzDqJxbX3Ss%2FjtIhCjlKnZCYNHsFG%2B%2By99U%2F4veIIyjLaQU4dGh%2FWORYzE2IzHLGI0fU%2FtAThsHwAcN1VWO5stMpU7j%2BAhC5bz3pfBPmS4bBSVJkXqa5xEobCIci0qMXibRzLvbqg80RPFSBrbn1cmas2JxDdM3YTf4CCxZpb6%2Fq5nTP1QGeA7os0waPWDarXAdjoiKU2rUSaQADNY2Ze3jLfc4sA8RI7OljxCMTB1fV2yE3fRgzCSnXnv7ZD0XR9urMF1oKF%2B25EE4Sad1Z9wUu4s%2Fg6UbBNu2zcBoRcAM%2FniFrFx%2FzqsufKcsIk0WPjAEqFxg82yjQiKjvTEmTZV%2FjDG17jABjqkAcVsuEUDfK2aU52lxr492Pi1PKXX0A%2BkceUGCtv503GCbk5O3MvYhJhgsgtI7QiUwRK%2Bv%2FbBZ0O8%2FRxw%2FNMIkzIAGlQ5fcdoC51iqmhq9xdK%2Fj2i6K6erY0GHu0WmfbE0jXk%2Fw6cDn2G8hp1hQ15MRE0avgItn%2BN%2FB6c7Gp8jyQN0VW6UGur%2BglZOkqhhWErKZu%2FrvSUPDbkAK0myHP5PjcwI7HB&X-Amz-Signature=b8888d7ae744ac29a899e02267ca028505b1ac221ed6fe5240ed9080db7d4b59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4ZHK5UJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEbQYmdDlEMAwWXqCgeZ%2FQ67P5FlQiSbWYOYvNJEtLqQIhAPv8d1rYT5pkRJGZ9Mllf%2FQ%2FdOeHF%2BDShuObcMWg7GzQKv8DCGEQABoMNjM3NDIzMTgzODA1IgwAhLYKeUu0mH8zS3wq3AMLU%2FFGCfc0iOYL9Xrw7LQvFK1neDeqdMnp8aXVFSdXg7PxBVWSpB4rSu9mWOUI%2B2J3zfFP0v2KQAGE6vxAT%2FW7ODZBOKRWGEqzNvgB9dz8hFdTlQrSYBwq2l8Tocw3PGkeAOWDJmmjRDvLq9i9cn1PyQxhT8Olam1FRDsQW%2BljZlGFEWWvpabiQpUvoTgQCZ8f320tFky5jHjQeVcTibq3c%2BIO9nU8Fg4yV11my%2FTJt4Lzf%2Fc14ticmHvGmwbYvt02UvOsq0EZi1zfjLdRUlzjQSvc4%2BxHpKjDYHTfjoYqXpqCOi0DbYI8zWMnt%2FR2q4E9NaNxynxViDh9xnKUNV%2FTsJOuXwiY9cHxhcTidwIjXqrb9Ru7EbJV1N4y1LureDns%2FwwgNKU22OkAWAISBECwO77KslLdp5BYO5W6h1f4QJwilixCmpckMVIPSGVnt5YmzUTA6qfw9n%2By7VHR4XU7sDWs%2BpTqWfGF%2FghbQugJsV9JBP7Pxk%2F32BuuNPeE%2FPpSFpTOwaZQcbIOi5C5as10OuWsrHQx0iwvfG0phqOZRQqva79IPWiajnaQx9spxvplHusezsocymL90%2BRJIin89hTAKrnAsuKNGZy%2BGT%2FJx0r%2FzxeqvdA95A0bEjDCsrnABjqkASP%2BOl1YJ9yhwR1u6TCrfkbBznLy4SyqLwJJC4sXsch4k9%2Bil6mOeCRNVfj70tIHiSvLR6kLtb3Zyqm%2B%2FtZCPIt3Eoh7h45wCgOaheH9wM3jVuYstbaNHXstZTaQa7hlbvSIgeMRKgXLlqn3M%2B%2F8F%2BtOqFPHurciNCDrEElIDlfI28rMd%2BG0RxZ%2B6fkHgjKyAvCj2j1ptKhdKkJFtRFG7H2WRjc%2B&X-Amz-Signature=e5e99009126a45c9d575564fc9554563af5d68f66c5450478e54c689c8848517&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMK7YQP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSjCjH65qVKAUNrLp1vwThhNUMS2h0hVpLFgHm6u3K%2BwIgU1%2BekcD1sl%2BT17QOwyORpaOaqSygcCQvtMzBq6usxNoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOLKa5Iydm4ZNlOhAircA3WvWeBUSiJxVAxJYwHB2zOaykoA65pDcOefpKsup0ks6fRtmKhkYDK%2FAWI3vT%2BWxkQI3TODR5%2FPnpLv6vY7exvI7IFHu89x2nX%2FbzEU0t7Y2Vv4DkiUgfjReMyf%2FMfh7QbMwPcIbXZUo8xZsGXI4%2B2fvFtnxWQXMryIhvouKw2hl9s9bfZzA3vav9jsrDhPv3bfZZmhjdDnGNgYZ5WGxLpcq2bKswOYeYddAbjkpKHdpRBiuBO4ST%2FZbA2H7w%2Fre4QFx74XUYAs%2BbIYgWdTP28RKbRtSXnw%2FE31wpRvU9K7OP5V3LQPP1RBCRe5Jksu2TRwnIBcYibHYaEV0eKmKS%2BUJRyaLK3Mlx1QMykViwiDyC6F%2BDYUvr5%2F3p4PU6xEotywFYqgXHVDIL4sYIED3%2BGsgbbKq7LNpxgvgxdZ%2BcvpPsBlYbhhZ81PZdxxSjPrE7oDJsBZqpEV0ZAkz30TxjxuO5fZaHHaapZLkYra1w4NK%2Bfr2TWdaU7NBdsm%2BYkjVDQxWTM8dC21L9sUJprDI0EThWL1Fi7q%2FB0Bmx9l1BCsHvhWoYSn22JJxdrRmd56TKh9CMUOllr3qJKI2bPhhaO6LP9L8Sn6T4cAbquRoHppksPV3s77mUuHYickMK6uucAGOqUBvebTr0TiOmlIB68xZE6MvjdjrnCQVnbnRT5g1t8xdmGAwsru%2FCisJ5j19R1FhBhod9%2BL6zz7csPSUdlvQ4HifxNq5asS9XrgcXcH%2FLWUaaR2LLjnE95ZE9mnb3pSCyfgXXrgwC4mrzzi3GvDscZkBQv%2BP%2BdaxwKquLxMfBWMyWQvyZn4180s8b4sAZHOu6ZC91sRvff3hJCcasfP3buIzOjo9CLC&X-Amz-Signature=b62fe5e880d65bf9d552319909b529ee0a997f6c85a05d3af325d08ee56df764&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQV2BPR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkdY8V9nj6%2FwpMqN8O4iNhqQ8VNHbSgUlvVAkGRbA1jQIhAPMLFVDYiYH50Kk7vfl4AWYwynZxn36PBnNvVv5Jn7xjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwyPK%2BD%2BXmIA4NME%2BAq3APd1M1qhRkX6A3XO4xonaXLg0RwW8tZGT8s4B32yY%2BIvKis096Z4XrZqWsaxaRVAazJ9HJT%2FIBBl9TsCtIXIop2HOSXG3EyPnVQy6zm3jph0MgQmZ%2FrL%2FmnGmjWIrvWSD5ttgF7%2BfKNz%2BhDszAuH0udbmSdw61X54Oy5oo0zTEqBwOLFKDXwK5SVwwLXI24sXhS6iPUQ6RVuOo%2F0l3TQ1Ric4mDopk7QG%2FMZhHHaox4kbFiNp%2B%2F72fVeTX63TUiT65Z4lQBuI8pUcjHo08d0%2BeulNW5%2BVIzayy8WCEzDqJxbX3Ss%2FjtIhCjlKnZCYNHsFG%2B%2By99U%2F4veIIyjLaQU4dGh%2FWORYzE2IzHLGI0fU%2FtAThsHwAcN1VWO5stMpU7j%2BAhC5bz3pfBPmS4bBSVJkXqa5xEobCIci0qMXibRzLvbqg80RPFSBrbn1cmas2JxDdM3YTf4CCxZpb6%2Fq5nTP1QGeA7os0waPWDarXAdjoiKU2rUSaQADNY2Ze3jLfc4sA8RI7OljxCMTB1fV2yE3fRgzCSnXnv7ZD0XR9urMF1oKF%2B25EE4Sad1Z9wUu4s%2Fg6UbBNu2zcBoRcAM%2FniFrFx%2FzqsufKcsIk0WPjAEqFxg82yjQiKjvTEmTZV%2FjDG17jABjqkAcVsuEUDfK2aU52lxr492Pi1PKXX0A%2BkceUGCtv503GCbk5O3MvYhJhgsgtI7QiUwRK%2Bv%2FbBZ0O8%2FRxw%2FNMIkzIAGlQ5fcdoC51iqmhq9xdK%2Fj2i6K6erY0GHu0WmfbE0jXk%2Fw6cDn2G8hp1hQ15MRE0avgItn%2BN%2FB6c7Gp8jyQN0VW6UGur%2BglZOkqhhWErKZu%2FrvSUPDbkAK0myHP5PjcwI7HB&X-Amz-Signature=60684579c86a7dc62b53db95e707b16ee1bccdd830cc3813b438244886c2484a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

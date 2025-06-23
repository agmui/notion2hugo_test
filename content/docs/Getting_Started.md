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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4QC2T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGNs0pnzE68n5y5IlPIpFxYHbLNPtZyPbYOQ7n4iVARpAiEAo1XXm%2FqZHh8Vu%2BkX02Xo0HVjcJ5AIeHIMTTCDBOx9Dsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNvN2ohL2dWr5%2FCpfSrcA2Fm6N42Le2x7YJ0TDwWFDYZcDTNPH7ysCLd9ad475sTBV5mz9wgjoZS7fzyS1ZCIr72Gep%2FCRPg7HM98LJHUwBhI3JCrPmLODzgk0LZqoVN24IjYj45OEBKc6X%2B0h%2FtEqWfDMYuA1AJiyJP%2F25gIb54eR3mPGs7QFkM6aMqLul8D44%2F6AgHzULp0DRHQ1CloSKtkMdj5P4MJ4L%2BkxabrHlNtCzStnSmxz4jH18%2BcaU2HPVhQUwoDQs77Tm%2F4m%2Bec29eObsIOkF4s1eUF9%2BEU%2FbGBs2GW6ca22aV2bxzifGtV2hUDVc%2FLXfM3ipdZhYe6DTpUz7swR%2F61xPgQUKrOVaL8If%2Fvr0z3suXUi%2FZLtKovGR0IukovW%2BqQcxchUhzKcSJqo%2F7ZhFh4X4mNJDRsewOn2svbcwQqW7RzH3PLcayFiq6uI3Fn7zp8tqiNLxdW7G5T9Z3diIPHqa%2FJX9%2FCAgYBU96qmvs8DT6GRUorJNwhgzpWx9LYFD5VFIViseVAYtT5IryNwqU1QaHrZEjVp%2BlniDVENX6kRl%2BJnNk%2BpsPfhbKa%2FS%2FNdzT%2FSByqDzkiorB%2B8ZdEP7XD8LKZn43z4osACmSDoRkSt4%2BeL8B8yYMt93YpgdktX%2F5H8f1MLb05MIGOqUB8bAPla10d%2BVkKj%2FF6fgb6G9JbsH1QvOnQqa10HkyKKbTLS4cDeaUPQC8bIOa2HdYc3HhJ%2BPyMl2TPM9K6%2B0UMRczQaQhPu4Xh0Wc4IZvCfg0Ad%2FfzTG%2BrTnKPl5rFWI%2FERul%2FRJLxc4H8pJYsrxWVGAkHUi2unsjjPESH5h3rR6ai1uFjof2NHrTAmdUFCPd2amcFD%2F1RZf5kxmMGvsgVGqU0Bop&X-Amz-Signature=82cb09efa65170f3db2e8b662fa9eb5255101a49dac7703629a1af9a3d4eacaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4QC2T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGNs0pnzE68n5y5IlPIpFxYHbLNPtZyPbYOQ7n4iVARpAiEAo1XXm%2FqZHh8Vu%2BkX02Xo0HVjcJ5AIeHIMTTCDBOx9Dsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNvN2ohL2dWr5%2FCpfSrcA2Fm6N42Le2x7YJ0TDwWFDYZcDTNPH7ysCLd9ad475sTBV5mz9wgjoZS7fzyS1ZCIr72Gep%2FCRPg7HM98LJHUwBhI3JCrPmLODzgk0LZqoVN24IjYj45OEBKc6X%2B0h%2FtEqWfDMYuA1AJiyJP%2F25gIb54eR3mPGs7QFkM6aMqLul8D44%2F6AgHzULp0DRHQ1CloSKtkMdj5P4MJ4L%2BkxabrHlNtCzStnSmxz4jH18%2BcaU2HPVhQUwoDQs77Tm%2F4m%2Bec29eObsIOkF4s1eUF9%2BEU%2FbGBs2GW6ca22aV2bxzifGtV2hUDVc%2FLXfM3ipdZhYe6DTpUz7swR%2F61xPgQUKrOVaL8If%2Fvr0z3suXUi%2FZLtKovGR0IukovW%2BqQcxchUhzKcSJqo%2F7ZhFh4X4mNJDRsewOn2svbcwQqW7RzH3PLcayFiq6uI3Fn7zp8tqiNLxdW7G5T9Z3diIPHqa%2FJX9%2FCAgYBU96qmvs8DT6GRUorJNwhgzpWx9LYFD5VFIViseVAYtT5IryNwqU1QaHrZEjVp%2BlniDVENX6kRl%2BJnNk%2BpsPfhbKa%2FS%2FNdzT%2FSByqDzkiorB%2B8ZdEP7XD8LKZn43z4osACmSDoRkSt4%2BeL8B8yYMt93YpgdktX%2F5H8f1MLb05MIGOqUB8bAPla10d%2BVkKj%2FF6fgb6G9JbsH1QvOnQqa10HkyKKbTLS4cDeaUPQC8bIOa2HdYc3HhJ%2BPyMl2TPM9K6%2B0UMRczQaQhPu4Xh0Wc4IZvCfg0Ad%2FfzTG%2BrTnKPl5rFWI%2FERul%2FRJLxc4H8pJYsrxWVGAkHUi2unsjjPESH5h3rR6ai1uFjof2NHrTAmdUFCPd2amcFD%2F1RZf5kxmMGvsgVGqU0Bop&X-Amz-Signature=b221d7c2305e9e469e4e02280f44b0f6b5746d45eba533a12a7df68c3f31ed61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4QC2T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGNs0pnzE68n5y5IlPIpFxYHbLNPtZyPbYOQ7n4iVARpAiEAo1XXm%2FqZHh8Vu%2BkX02Xo0HVjcJ5AIeHIMTTCDBOx9Dsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNvN2ohL2dWr5%2FCpfSrcA2Fm6N42Le2x7YJ0TDwWFDYZcDTNPH7ysCLd9ad475sTBV5mz9wgjoZS7fzyS1ZCIr72Gep%2FCRPg7HM98LJHUwBhI3JCrPmLODzgk0LZqoVN24IjYj45OEBKc6X%2B0h%2FtEqWfDMYuA1AJiyJP%2F25gIb54eR3mPGs7QFkM6aMqLul8D44%2F6AgHzULp0DRHQ1CloSKtkMdj5P4MJ4L%2BkxabrHlNtCzStnSmxz4jH18%2BcaU2HPVhQUwoDQs77Tm%2F4m%2Bec29eObsIOkF4s1eUF9%2BEU%2FbGBs2GW6ca22aV2bxzifGtV2hUDVc%2FLXfM3ipdZhYe6DTpUz7swR%2F61xPgQUKrOVaL8If%2Fvr0z3suXUi%2FZLtKovGR0IukovW%2BqQcxchUhzKcSJqo%2F7ZhFh4X4mNJDRsewOn2svbcwQqW7RzH3PLcayFiq6uI3Fn7zp8tqiNLxdW7G5T9Z3diIPHqa%2FJX9%2FCAgYBU96qmvs8DT6GRUorJNwhgzpWx9LYFD5VFIViseVAYtT5IryNwqU1QaHrZEjVp%2BlniDVENX6kRl%2BJnNk%2BpsPfhbKa%2FS%2FNdzT%2FSByqDzkiorB%2B8ZdEP7XD8LKZn43z4osACmSDoRkSt4%2BeL8B8yYMt93YpgdktX%2F5H8f1MLb05MIGOqUB8bAPla10d%2BVkKj%2FF6fgb6G9JbsH1QvOnQqa10HkyKKbTLS4cDeaUPQC8bIOa2HdYc3HhJ%2BPyMl2TPM9K6%2B0UMRczQaQhPu4Xh0Wc4IZvCfg0Ad%2FfzTG%2BrTnKPl5rFWI%2FERul%2FRJLxc4H8pJYsrxWVGAkHUi2unsjjPESH5h3rR6ai1uFjof2NHrTAmdUFCPd2amcFD%2F1RZf5kxmMGvsgVGqU0Bop&X-Amz-Signature=eba3e026357738dd8b17c8083169348e8e9fb0e6da86a7fdb649b5ca10209424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVVHO2U%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD7zC5g%2BCR9bnLRACMChiFK47UBVGcaTjo0g1KulIXSEAIhAMWSjdxvRLJciSdLEP3H%2F6ZG9QWsDKMC4vONf04gM0e7Kv8DCBQQABoMNjM3NDIzMTgzODA1Igx%2F1QZ63tP0IXAg9Gkq3APSJS%2FvoyqJT5hW%2FN99WqrLvcj7DrsRnYCl%2Fqbp7B7eGO15n48Qbc2JC7K3yiXZBgLLYotQW%2BeynmLSsPVzfrcltuajBi%2FH348b2u5wJVwrb89mlcY5rfW5yEtw1bz0hY4VAG0Z%2Bb9JzRJdZ9bEyQw163U1tCNC%2FYEzc728Cpzdb7qtDZ709VMQjQvEGuNpvyHXYO880O7Kv%2F5fKZyr9ttvBw8LkIyHs6ewdEufRALjY70aRFqiH3%2B4n0HSYEj8CWj%2Btj020FRWYTmixevc8VlOZgA0V7hs5yjGl9616aTIqWFbhJ7hRoKCSPGbrGS19ZNNa1WHZ8exNfGUcmpDC4rXB3tru9zmYZePgbr8G6lJywJoMjrdpuV0WAkJVZymwIc0MmMygXZGI6tMHG31anIxbv84yUyd36GXDpT0BT3vV6iiiJR5O1p4tvDE7YAFtW6J8me6MhkieyMvfAI1ash2DNXDQ1mCYPHeLGBNrIgDAubwYIXZPZ4Lh4Zf2luzbfUqb4EUqZInHkeUnoH7aGoSON4ocj0GWJ4ki2OiOrNs0eIrds7pLhZrH2s%2FzQZqv6NtL%2Bj%2F6lQ7vlnsrO%2BviJHGO9yQslQe0UmVjOoRSvOxGr%2Fx9KoUrtBKLQly9DCT8%2BTCBjqkAcQ7PJRXYJnQwYjo70JHLteWiPqR3Y6mj2hS5EFV4wNXxLAvgf4hc0hHDt%2FMxpdSRk3Zd%2FieNTmQ0GJpMQx%2BTBcPbEc7nGfr5ItSXRwM2sXfoss4tYkFq9LKJWw%2FWzJT6BzNPfyDKUYSkhWBYmxtmqG%2BQ6mJZD1IG89RSj2IcNeb6oV6wNpAMHpiAjqSiPpziUVVi3KMOAKya%2BVSOHFACtQTbsxW&X-Amz-Signature=8ce1ab88bab3e4d68749568da1c60362ebbba73cbaab9af23b55f98594f0417e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLHMVHZ4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBYnFt2mU9QZUMJclc2hrbcT0RJ%2Fgmfv%2BaEW0LUUiYpcAiAvT1BXJKibzGkT5cF8eHEuU5JzLKZsFoOJsLlW2yjVEyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMNXRD8MqClZnNbcnuKtwDq3BYZyrV3ZLMVmJdf0KkYKGLXylFEZf6Cqby6ggZ%2ByCJR8BNOtjIHZFLKYg42PxkxViegEzQmHmFcbq3Qv7VdzRGigGVjzUS%2BPQbdrnBuQ0ZolXt9DqthgNe0wv%2B3b4maL0zxlrzX665Bgkhazy08r2H9vBRxoJGJifktDtY9FUa2YdoiVYB%2B8aSHirU1rJlDGkAQjkkua6adpd9A3zgFiy728a9QQNjd2zZy7z1KqTWRLJyAEzpzXjoDF8CJ9shDN0%2FiqBUanD3anuACBPXaRR1%2BWNtBUX0SId6K0Beko%2BZypGf9F7koC9PB2gPJxUCFXZ%2BN6JItwflNoMffdfVxLWixE2ynAxUnL%2FxnZ7wh6nTysXja2wQTeVLmiQnqtZZkPJryg4DNaSZtOMm7VrTpEytD9eiHznUfJW77pSGQZhfQ6NE633uomRsDTpqaaUu5VMxiW%2F37btoDVxUSjIbtm5dOZhcN75mWIKn1uxJygfrEbe5t6gOjWh4f%2B%2BLCwwXdDNO3NGK1dV4eWJzv%2Finra1UdtxdSU3CGPvLuEuOHnOodfh0K8NtB%2FHw%2FYLBn1x0%2BiFoJ%2Fzvs%2FVbrYLWmWwsQgJyZaMlur3G9KJ6vSCHx8FlseoJFB3seaUGbiMwq%2FPkwgY6pgFtl55qVI0LmvnZ3NYFA85DZ10t9K6qjEB67L5n%2FLXboj57iqE1neitxxS%2FAdll0AKrPDScxE2k2aaAee3HamtqIKlqmMeuCvCDBPmf8LwCyNjCZwEUerTC2xbCH8l0eV6dcc6z1cni3FwZjhum%2By3B3LC2kxs6pLP%2BFJqeo1bPTUzUpZYnfjJ9a9C2yxLknSolXPA5Tq1lSEF95IH%2B3nglRCI7WWll&X-Amz-Signature=98b8be84534bd80f43574a51ec0e90c835a7a2a81eb7231a974dd0c153757643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4QC2T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGNs0pnzE68n5y5IlPIpFxYHbLNPtZyPbYOQ7n4iVARpAiEAo1XXm%2FqZHh8Vu%2BkX02Xo0HVjcJ5AIeHIMTTCDBOx9Dsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNvN2ohL2dWr5%2FCpfSrcA2Fm6N42Le2x7YJ0TDwWFDYZcDTNPH7ysCLd9ad475sTBV5mz9wgjoZS7fzyS1ZCIr72Gep%2FCRPg7HM98LJHUwBhI3JCrPmLODzgk0LZqoVN24IjYj45OEBKc6X%2B0h%2FtEqWfDMYuA1AJiyJP%2F25gIb54eR3mPGs7QFkM6aMqLul8D44%2F6AgHzULp0DRHQ1CloSKtkMdj5P4MJ4L%2BkxabrHlNtCzStnSmxz4jH18%2BcaU2HPVhQUwoDQs77Tm%2F4m%2Bec29eObsIOkF4s1eUF9%2BEU%2FbGBs2GW6ca22aV2bxzifGtV2hUDVc%2FLXfM3ipdZhYe6DTpUz7swR%2F61xPgQUKrOVaL8If%2Fvr0z3suXUi%2FZLtKovGR0IukovW%2BqQcxchUhzKcSJqo%2F7ZhFh4X4mNJDRsewOn2svbcwQqW7RzH3PLcayFiq6uI3Fn7zp8tqiNLxdW7G5T9Z3diIPHqa%2FJX9%2FCAgYBU96qmvs8DT6GRUorJNwhgzpWx9LYFD5VFIViseVAYtT5IryNwqU1QaHrZEjVp%2BlniDVENX6kRl%2BJnNk%2BpsPfhbKa%2FS%2FNdzT%2FSByqDzkiorB%2B8ZdEP7XD8LKZn43z4osACmSDoRkSt4%2BeL8B8yYMt93YpgdktX%2F5H8f1MLb05MIGOqUB8bAPla10d%2BVkKj%2FF6fgb6G9JbsH1QvOnQqa10HkyKKbTLS4cDeaUPQC8bIOa2HdYc3HhJ%2BPyMl2TPM9K6%2B0UMRczQaQhPu4Xh0Wc4IZvCfg0Ad%2FfzTG%2BrTnKPl5rFWI%2FERul%2FRJLxc4H8pJYsrxWVGAkHUi2unsjjPESH5h3rR6ai1uFjof2NHrTAmdUFCPd2amcFD%2F1RZf5kxmMGvsgVGqU0Bop&X-Amz-Signature=ce34fd304961812a37c88da0eaf4523fac27dc93fa5dd5c065e1e87cd5ccccbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

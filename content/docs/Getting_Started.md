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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3IYRKA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH22mnCKcWRPuxmxvB8oWp5ZzEXwpGV1vzlQB1wNjBALAiAytjutGY%2F7E4zWlBwyJykefkO%2BA1uRE6XWzcAOKaqKcCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMI0LxHEowM5h6L%2F9hKtwDoDqYuMrjPAEqfy8bkQhy37EpvX2LGDdhs575L4ubtJi5kW5Mfn6YvWYP%2FYO6I25L9eEi2kx0l3VgMgH8qJrovfRQXWoxXf1YP%2F%2BDdoYloYC8R02%2Feee431rrL%2BzZybvyiCA%2BEhoZkI6d6ZM67aWPc1VyO6LqpvFJ58jlCx26A2sDb14y5kRXy8vQnEtbXlgc%2FUAaztkrip%2FXDdS1ZPTc%2F4QbmuW9IvYSEl9lvxw6iWr3RQP0ArJwQha4gLcGqkgjqQ6otbkHY7xwdBvwEmFTKsxL%2BOtsyrxWVJ5kpz5HGty4kzaIaYIXB381YwCV2Nw8n9IUfAKmOFmjM7vjFcemnJvtkZ1pU1eN0VMPocBGgwh2Ocg%2Fv5xEUVpdt6pW32H9SdKNDXGeiQCoU7xmLuzR2xd11VlKbD6cTPTJ%2BnckZ5k42RLIJThSqrVxunf4ideTaCImd7ANv304io1NF3Gbxcy67kOl5nCunj%2FV5KzBs%2BEDejPkRGya58wqXObisCzqA0W0BXFKElxgTmgPB3btO%2FwCXJaErBCkHWf9IXBGUvliriJeYUEUsX0B0lm0IAnBTkhndUyoeOs8nJTH4Z%2F6l2ZhjZ1voxgfwES8LM%2BiF6sg0RPK%2BpAUGfARPnowppuVvQY6pgGhFIOa1f93ut9ekMnYrArwS4MUQbFA0iF2vKBSTQXuB2dfp6A9Ybip1A5TJdsXzk%2BACpCkO03u4QIGnXEfXXpWmYIhN5WvI%2BNjOkEHOGVO28YivVoZEBHMmZdi%2FnXegwHZ6UsfiXvnT0Y0oaBGbIItJJxe9vY4KUnmC7P9fL4nErG6Ermofhmjy8BdJXiNl7An7H%2BqHASIKAWurE0cbNhpS8Tlc%2Bc0&X-Amz-Signature=408f9f5047e044ea3340e3ce7d1085be1e36f411245b1ae204d1b91429979047&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3IYRKA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH22mnCKcWRPuxmxvB8oWp5ZzEXwpGV1vzlQB1wNjBALAiAytjutGY%2F7E4zWlBwyJykefkO%2BA1uRE6XWzcAOKaqKcCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMI0LxHEowM5h6L%2F9hKtwDoDqYuMrjPAEqfy8bkQhy37EpvX2LGDdhs575L4ubtJi5kW5Mfn6YvWYP%2FYO6I25L9eEi2kx0l3VgMgH8qJrovfRQXWoxXf1YP%2F%2BDdoYloYC8R02%2Feee431rrL%2BzZybvyiCA%2BEhoZkI6d6ZM67aWPc1VyO6LqpvFJ58jlCx26A2sDb14y5kRXy8vQnEtbXlgc%2FUAaztkrip%2FXDdS1ZPTc%2F4QbmuW9IvYSEl9lvxw6iWr3RQP0ArJwQha4gLcGqkgjqQ6otbkHY7xwdBvwEmFTKsxL%2BOtsyrxWVJ5kpz5HGty4kzaIaYIXB381YwCV2Nw8n9IUfAKmOFmjM7vjFcemnJvtkZ1pU1eN0VMPocBGgwh2Ocg%2Fv5xEUVpdt6pW32H9SdKNDXGeiQCoU7xmLuzR2xd11VlKbD6cTPTJ%2BnckZ5k42RLIJThSqrVxunf4ideTaCImd7ANv304io1NF3Gbxcy67kOl5nCunj%2FV5KzBs%2BEDejPkRGya58wqXObisCzqA0W0BXFKElxgTmgPB3btO%2FwCXJaErBCkHWf9IXBGUvliriJeYUEUsX0B0lm0IAnBTkhndUyoeOs8nJTH4Z%2F6l2ZhjZ1voxgfwES8LM%2BiF6sg0RPK%2BpAUGfARPnowppuVvQY6pgGhFIOa1f93ut9ekMnYrArwS4MUQbFA0iF2vKBSTQXuB2dfp6A9Ybip1A5TJdsXzk%2BACpCkO03u4QIGnXEfXXpWmYIhN5WvI%2BNjOkEHOGVO28YivVoZEBHMmZdi%2FnXegwHZ6UsfiXvnT0Y0oaBGbIItJJxe9vY4KUnmC7P9fL4nErG6Ermofhmjy8BdJXiNl7An7H%2BqHASIKAWurE0cbNhpS8Tlc%2Bc0&X-Amz-Signature=03f8844724f5a88ed395509a9e6ab9324727d58134feae9813c291734f6d97fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNSGI24%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGBuo5BdXn1JS1JA5GsPYr2l2jtevc8Fw%2BGPVD%2BMkjQgAiEA%2FCtVrSFYE%2B%2FMF4eldwZS9cVxOifmoVeNLU3EnriRSVAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDB9lBwvgl%2Bk7OuG8tircAwMFgxQDip%2BszTWD3rxj%2BPBrYUYH%2BagJ%2Blt2KZeMla5Sg0WP7HPw67%2F76gp%2B3sZadf%2Ffew0t%2ByNnLXYwjYlrUSypHHlpqZvOMWMhGM4PqDDEQPQmqiQsrC664aFfKXukgmE9N5P6xeF3SLE7h2tTmXfGb0qNLFYieIe61dyE0bul9oiP2eECjqKyA8Ag1Q21NWJbRZ67c18tu4Qmxl%2B0fa35BVjeY%2BCRAdEhhYYsseJ7p0dYbl3dOYpBWKbFCGKyb2yeHE0ofw1amwpuPEDbHkSwabAnJdzYyf%2F6yib7k9Pkjn3PAkWCNFkP5ehvoJL3fs14Gv7Rh%2F0gqhFUbjLpRBboYaif%2F9Kdxk7zt64uXmAITWFJr346xVVejIAD9VYWMJeaygVbRPWx%2B84A%2BLP6LLMXVZ6SjPLBog7hmrYGDw%2BBKMOb%2F0RnKn7TCzeC%2FSyG0YNEzX5lfumqZwK62VPH7Ol7dBMONuzbxEegVsmlBU6VjsNkoXMbUo7UfVD4BZRkJufjgc1gnl44nD1F%2BM7er6y%2FtLjD8qR%2FC1XGyXwNbT0OMAwiMGMybHsBhPQRrH%2Bl5c8GAdePrs6lzd%2FhsJSP4PuTg2LTZi9RFHvkjjCs%2FIOYAAbIrL3flDfkH1mOMICclb0GOqUBNbDITAHrNo1aHEblh5OjDBlcWIQDSjg6VGRZLScI4%2FurVcuhJIFjCy1xwbn27f2QZcd%2Bh8%2B0EVUzxsDLIuajg%2Bw2NCBYqmsAoITqb4Xg8tSrVAL6LeBRCOa2zRQXdKIxbdkhlO%2F86xCrcVyQtePQbJ%2FVhN6VQel8iWk9OspsEraSS0R65qC%2BT5%2B831ng%2FW%2BU9aXwGwyF2nnq25rz6lkTFqrrAmRp&X-Amz-Signature=dec881c56427b3609a92b82fa0990f513205cf1c175ac5b1fddd3f0b6545cd42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RT6BHIZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHGeOg%2BS9k6D4Ydt%2BBlHAO4B%2FDqlfkF%2BKPlNZvwyHfsFAiBJdqnZmexGRv6veYIf3U0t6zQHFSEhSiBd0N6f1qJh2ir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM5%2F09TAgfoRo68bIvKtwDvW5Jbvstfqudo0hk1DmQ3A5ryLv2wa%2BopjRTfrKJJhoLstujQpyI3OEKjcEXwUSIA6elh7AiE8QaF1H5GL%2B59cz%2BxuJ7KQAPrrAT2U8N9e886yuwDLp1xV0PL43XDiYPisW33SqZ%2FtNyJtg6lK7C17Q3QiEEPCc%2FGhR2DwbHaghjioA4NTA3hwpRndq9DwSAdqsOIH8y7tGctIU%2FnoHS4iPdV121XBBVITa8VlGJyjs0e7CYCIeDVCi0xtgtl%2Fg0AlC83x4JNodFKBfUIeff5TZVRbHxwht5cfaZWpYz%2FTMPWsjf7m4ezyRNcMbtmcAzOXj6GopHapEpREOVJUxIpxPWipUG7%2BXoli9eQf%2BcEAKxzfla4Sl23pOvJA%2FQ05LV0qXjGpSPTQoa3BMuyDXZEWGmXwqog%2Fx%2FRQpqgCzA95t%2BgP%2BNLKSpQztoQopd31sQp668sLwS2Why9Tz03SqcQgNUKzu8MQpEmUrC3v%2BDLac377o4Pfh83Y7xshhmekFGXfFd%2FBcHLjVMvOfzL3E8AYySE%2BdgMLpysKLwN6kUbopTsAOZoC%2FdNBehbC1lzxM8rL24%2BJuucOssvNCMBXBgESKtNucgbAkQiF19e%2Btg%2BFNe7ZpVnXaYtyBhUH8wxZuVvQY6pgHF3XozP3FJrW1je%2FotqM0WjY67Ub8Fdbpw2mAfIVHmL2UYOAyh68Rdd3SgbQC9nWwZZZNv4VvHDfB%2BLIuRFLGMy8NeTaj%2FdBFT8CNKX7pJruE7J7L3w%2BOCLirmG7cVNRwQg2HdfhtDQGzHhHQH2yrlw3zssrelATWpk8EdNGxRWNGf%2FjgghGaOYCP%2B3u33JQ3yFazEMdQnP%2FaZmDyQrf%2FJYz5XCbLt&X-Amz-Signature=4381a74f214e118fcf41331b722953e84c41765989d63fadda0ce17078ffab1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3IYRKA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH22mnCKcWRPuxmxvB8oWp5ZzEXwpGV1vzlQB1wNjBALAiAytjutGY%2F7E4zWlBwyJykefkO%2BA1uRE6XWzcAOKaqKcCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMI0LxHEowM5h6L%2F9hKtwDoDqYuMrjPAEqfy8bkQhy37EpvX2LGDdhs575L4ubtJi5kW5Mfn6YvWYP%2FYO6I25L9eEi2kx0l3VgMgH8qJrovfRQXWoxXf1YP%2F%2BDdoYloYC8R02%2Feee431rrL%2BzZybvyiCA%2BEhoZkI6d6ZM67aWPc1VyO6LqpvFJ58jlCx26A2sDb14y5kRXy8vQnEtbXlgc%2FUAaztkrip%2FXDdS1ZPTc%2F4QbmuW9IvYSEl9lvxw6iWr3RQP0ArJwQha4gLcGqkgjqQ6otbkHY7xwdBvwEmFTKsxL%2BOtsyrxWVJ5kpz5HGty4kzaIaYIXB381YwCV2Nw8n9IUfAKmOFmjM7vjFcemnJvtkZ1pU1eN0VMPocBGgwh2Ocg%2Fv5xEUVpdt6pW32H9SdKNDXGeiQCoU7xmLuzR2xd11VlKbD6cTPTJ%2BnckZ5k42RLIJThSqrVxunf4ideTaCImd7ANv304io1NF3Gbxcy67kOl5nCunj%2FV5KzBs%2BEDejPkRGya58wqXObisCzqA0W0BXFKElxgTmgPB3btO%2FwCXJaErBCkHWf9IXBGUvliriJeYUEUsX0B0lm0IAnBTkhndUyoeOs8nJTH4Z%2F6l2ZhjZ1voxgfwES8LM%2BiF6sg0RPK%2BpAUGfARPnowppuVvQY6pgGhFIOa1f93ut9ekMnYrArwS4MUQbFA0iF2vKBSTQXuB2dfp6A9Ybip1A5TJdsXzk%2BACpCkO03u4QIGnXEfXXpWmYIhN5WvI%2BNjOkEHOGVO28YivVoZEBHMmZdi%2FnXegwHZ6UsfiXvnT0Y0oaBGbIItJJxe9vY4KUnmC7P9fL4nErG6Ermofhmjy8BdJXiNl7An7H%2BqHASIKAWurE0cbNhpS8Tlc%2Bc0&X-Amz-Signature=0da170fd40f530cb399c7c25f80934962c1f266b47571a80d08c7be6c4857245&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

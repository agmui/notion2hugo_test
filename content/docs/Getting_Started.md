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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWQIRTS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBswKt2gv5dLn1Ur%2F6bpdlQCxggDnOUp9ynj50fC89r8AiAkiIIb%2BDHl5ceZRojIHGO%2BlRH%2FAOv4bMmIKTTMDGJdKiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8DRlHtqE%2F7RBrYTQKtwDK6qbVspUVDIr8PTrDGYYR81v3GN21zJUQIhYD7TD446z%2FFY07vIdmmXJngAmNrNPGm35zD2GedaHcckH4L6KD9BMatTUZk5wK3VC8InMLpDEWhxxG4fX81CqfdqFsDXRMX9lrs1ux%2Fb75OwENmZ77rsUew1jk4JY0dxcAI9we48RaksVdgxmq1PH24JdrU%2FS1n9O%2BwtcQzsujlpeeYx7xJ%2FaZroEMHPldPdf4e9CXaZKGaJHHBs3JcXUyc2iIz3umTMQxfvD%2FAtS7fPGsb1dAAGFhbz33H%2FE9g9DgGGuivEgjygSjpUdO1p7WsUf5iqGwIKn%2BzGgy613Sg1qwUKTtCXHtjNWorXKrLmZj3YMs3DZ57hyiaeWb%2FFdVUM%2BQDK6itdGUH6%2BKMltW7tZzuOHhAaIj%2FzhUF4m7gzJcWTNbAJTQIeC4DLzN9Hf4wsrBZwk2CQbrMEjR9ZqjjdWa%2BYbiLQeieRpvsm%2B%2FZEWG7JX3284AQXZbeaC7k3ypuHWYxggAirEQ6ndv3SBtNmHa%2BZGnw4jc%2Bzdtj5G5OTEHNEIQ7dG6fnMsDAX4mLU%2Fp57nUzzQezZhv5gCXhS6Tm8vKDyd9%2BYPgml8T%2F8Xhfpe%2BR1uT44GhfPdonqdLyNuz4wwe7TxAY6pgGLRwzT7wURM7gACQMJz%2BZcnPleXBV%2FwLNxP8NBkDPQcybPX%2BP7qphVb%2F6vmQ31B%2Bm4XvwaAc8oTLLOdx6VmXqstnSDhVslg2aBfWDwXlkkIL79DIaTj%2B5bCvHiA%2F0e6Uzeaq%2FaYszgqD0eLY2%2B7KlxiKawgTWuV7Oj%2BhWNKkxELN96xmTyvPgqZcbiNm5G2xzEL2kkLaJYDs6jPXR6qBWC3P7xDFlE&X-Amz-Signature=6f6441cc74830bdd842e358467fb4b323d8616fbf05d1e742ee66d265c28e563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWQIRTS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBswKt2gv5dLn1Ur%2F6bpdlQCxggDnOUp9ynj50fC89r8AiAkiIIb%2BDHl5ceZRojIHGO%2BlRH%2FAOv4bMmIKTTMDGJdKiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8DRlHtqE%2F7RBrYTQKtwDK6qbVspUVDIr8PTrDGYYR81v3GN21zJUQIhYD7TD446z%2FFY07vIdmmXJngAmNrNPGm35zD2GedaHcckH4L6KD9BMatTUZk5wK3VC8InMLpDEWhxxG4fX81CqfdqFsDXRMX9lrs1ux%2Fb75OwENmZ77rsUew1jk4JY0dxcAI9we48RaksVdgxmq1PH24JdrU%2FS1n9O%2BwtcQzsujlpeeYx7xJ%2FaZroEMHPldPdf4e9CXaZKGaJHHBs3JcXUyc2iIz3umTMQxfvD%2FAtS7fPGsb1dAAGFhbz33H%2FE9g9DgGGuivEgjygSjpUdO1p7WsUf5iqGwIKn%2BzGgy613Sg1qwUKTtCXHtjNWorXKrLmZj3YMs3DZ57hyiaeWb%2FFdVUM%2BQDK6itdGUH6%2BKMltW7tZzuOHhAaIj%2FzhUF4m7gzJcWTNbAJTQIeC4DLzN9Hf4wsrBZwk2CQbrMEjR9ZqjjdWa%2BYbiLQeieRpvsm%2B%2FZEWG7JX3284AQXZbeaC7k3ypuHWYxggAirEQ6ndv3SBtNmHa%2BZGnw4jc%2Bzdtj5G5OTEHNEIQ7dG6fnMsDAX4mLU%2Fp57nUzzQezZhv5gCXhS6Tm8vKDyd9%2BYPgml8T%2F8Xhfpe%2BR1uT44GhfPdonqdLyNuz4wwe7TxAY6pgGLRwzT7wURM7gACQMJz%2BZcnPleXBV%2FwLNxP8NBkDPQcybPX%2BP7qphVb%2F6vmQ31B%2Bm4XvwaAc8oTLLOdx6VmXqstnSDhVslg2aBfWDwXlkkIL79DIaTj%2B5bCvHiA%2F0e6Uzeaq%2FaYszgqD0eLY2%2B7KlxiKawgTWuV7Oj%2BhWNKkxELN96xmTyvPgqZcbiNm5G2xzEL2kkLaJYDs6jPXR6qBWC3P7xDFlE&X-Amz-Signature=205f543d13e47aea8844fcf49e6ad4df972eb56c5c02192d238d18ceeee4e488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWQIRTS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBswKt2gv5dLn1Ur%2F6bpdlQCxggDnOUp9ynj50fC89r8AiAkiIIb%2BDHl5ceZRojIHGO%2BlRH%2FAOv4bMmIKTTMDGJdKiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8DRlHtqE%2F7RBrYTQKtwDK6qbVspUVDIr8PTrDGYYR81v3GN21zJUQIhYD7TD446z%2FFY07vIdmmXJngAmNrNPGm35zD2GedaHcckH4L6KD9BMatTUZk5wK3VC8InMLpDEWhxxG4fX81CqfdqFsDXRMX9lrs1ux%2Fb75OwENmZ77rsUew1jk4JY0dxcAI9we48RaksVdgxmq1PH24JdrU%2FS1n9O%2BwtcQzsujlpeeYx7xJ%2FaZroEMHPldPdf4e9CXaZKGaJHHBs3JcXUyc2iIz3umTMQxfvD%2FAtS7fPGsb1dAAGFhbz33H%2FE9g9DgGGuivEgjygSjpUdO1p7WsUf5iqGwIKn%2BzGgy613Sg1qwUKTtCXHtjNWorXKrLmZj3YMs3DZ57hyiaeWb%2FFdVUM%2BQDK6itdGUH6%2BKMltW7tZzuOHhAaIj%2FzhUF4m7gzJcWTNbAJTQIeC4DLzN9Hf4wsrBZwk2CQbrMEjR9ZqjjdWa%2BYbiLQeieRpvsm%2B%2FZEWG7JX3284AQXZbeaC7k3ypuHWYxggAirEQ6ndv3SBtNmHa%2BZGnw4jc%2Bzdtj5G5OTEHNEIQ7dG6fnMsDAX4mLU%2Fp57nUzzQezZhv5gCXhS6Tm8vKDyd9%2BYPgml8T%2F8Xhfpe%2BR1uT44GhfPdonqdLyNuz4wwe7TxAY6pgGLRwzT7wURM7gACQMJz%2BZcnPleXBV%2FwLNxP8NBkDPQcybPX%2BP7qphVb%2F6vmQ31B%2Bm4XvwaAc8oTLLOdx6VmXqstnSDhVslg2aBfWDwXlkkIL79DIaTj%2B5bCvHiA%2F0e6Uzeaq%2FaYszgqD0eLY2%2B7KlxiKawgTWuV7Oj%2BhWNKkxELN96xmTyvPgqZcbiNm5G2xzEL2kkLaJYDs6jPXR6qBWC3P7xDFlE&X-Amz-Signature=17ed40518794bf2293353029a18c0b7a75c130a15575d77fad3908fbf57c952b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHP7Z7KF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIF7CT15XL8xYb%2BG%2BVstmz8%2FO7TwvXvpx6wJRNO83UtmiAiBjM%2Bz3%2FpnGwTGFMkht9r4W3Gsikyuv%2FuPuw%2BT6WkttPyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt66JJR0WFhrULnd7KtwDDld60FWEW8SwG%2BHFCzKGIlVrOsZnIgkiSRz4Tv4vj%2FT6zHDfOQGbKlqWagPetAQy0cQhXoE%2FUt3rAxlfoxblqtmArwBGhqVuarI7cq1sIgk9eVU93q8O2FYIejFQH0u9Z6GE2EMjiScDIbFr6pDIS96S4HbAs559HL54nzvVv8kPqAShOZlWLqYEeJOxSBZs0rjKc1rFZr1xnFTx1t5sFBoF8%2F3DBcQvqP%2BF56dpYCWYi9uEsY2cXgSd6zbRFWk89QnJjOfSrYCjMVD%2Fm0%2FlfDfX0PAT0Kh5rsqj%2BX0caxECt9aoOBzylQqeGEN4ZsUl56kcadtHK4deeyoIFIFuhxTTSY7wfM9GUGw3ki%2FTKDPswJ1BOA1Q5PmobBcYtv7EILm5A6KmQmr4lJiOEM4bmobpad%2FZowzIA5fKkqpO8DYkfvU%2BDagl7c8%2BtwOillf4F%2FnpiOv2Jvn3AC7HLprzPs0Ij73phXA6q4%2FfvcGMW1wolfowmp38Sjy8yPlR18MA%2FX%2FZhxf3rmLtCdJXKcY5QJ0%2F3h17Rs4zQNjH6FCfflSxH2bR9%2BlQIxG9fXYH9wfBQGjbj83uHep%2FWVZfL1mydI6q3Uf958YbJGQNQWm52HCB65YETUNunEWXzxow7u3TxAY6pgEFjr2FAvM6Kp91JPtUjtA6Q224Sd6NIeYlg%2Bvnazh9bWqBYMQDkrcQ30uPy9YfcON%2FoXiN2gQlYRUwCEAjTNdTInM%2Bd558AcQUB%2Bv6geHq6h9gyMef%2BPbpDnVi86m9feDcHDlB86XmwgiCKhBmgfbwq3DgGKQSn6b0afN9NTtkK92%2FK3295cWQlSbkIutq5PzWS445L8Ic3BwvON0y0c%2BYRJnNIZhN&X-Amz-Signature=c1ed0237a747cee2452bfe668a2bca6644120f9c1d0ff9d627b7f02887ceebb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SWJKD7N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEA72JpSHIXxdh3pv96ysPMp6XCTrsgE%2BN7kVzwThmZOAiEA7BTU4SplHfnPuLDIefO5lAfbBcO6nl5thQjIxS80euMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxa2xDK174uWVM6wSrcAxZFSodbI6lPzl28Y9dkX7Z4VUek%2FdQcZ4ab7FzD%2BnPMyY%2BKu%2FeH2khCz7qM56inU4kNzu65pFgnoFu6Z%2BLqGer5Ai7Vlq9JRtIFBui7SO%2Bef%2B9X18A5NMW%2F%2FL%2ByrhTQvgflwA22cC8N%2FH6v%2BMBRfPgQrJ%2FlH0nFLB4xam%2FrKQu37VdEyInyyagOtjtjv%2BQ8dRUhi7011Tdmv8%2FzC9WUBgValJbEKrv6Dv2M%2BFk1%2Fy%2B1TJcLhPL35d%2Bt4P3QdrFl6xuVvsOt2Z%2BUnLdrMP4QD98ZDrpXb3tsC2CNr40hr9c0kQCvSZjiIJ4ceecijhu%2BhbVbabUxp3sFz6Lp5PCDMdZpYBhR0no%2FXQ74j3PPi7Gf6Ul6jNUKiQkrvPq4%2F1zfOhBrQaG1M9HbfhjtATJnDpVXVAhU2xXI42wQm4pNbibGTQ9y5UCZYKcmN%2FHCIURDBTyXWczCXIvob0GeGjjMeYY3%2BqirA8SRSVW7voUmGGugFBYIp4Ah57hwSkux3kM2YQmjPMVISIo139llPEjInPFEYFVm7ST9eXAWjZLtWaR909gTUa%2BvouVQtDdQgb8xQkgFtJDloP%2B7Pjk2Smty84zthBwAzaBCOMWPZaouSG%2FJb%2FzKmh5syd8rcpueMMPu08QGOqUBP3rFRM5ofC8aPxY7UnLU0I4ZrxaBgX66J6LSqb2Ay3PADUVrG7KB%2FqeFc971AT2JhDfwpgIVaaLjNKeDammXKUx4U0bdpdqcUKCmmMxlX6ZuYtAR3vZYAByQ7p5Zyhdfta2jfLe2PKbRBNhXa951Kv%2BwRn%2Bls6MQL7tvaVC1BYyW8QMjkArilZtyJffxhEE1AxiTlCDifO3x5RDM01KfQFsODL2t&X-Amz-Signature=24487f98f30dc5f5c542d5baa4b4215ca482f2f705fc7b1d790dde33e30c34eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWQIRTS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBswKt2gv5dLn1Ur%2F6bpdlQCxggDnOUp9ynj50fC89r8AiAkiIIb%2BDHl5ceZRojIHGO%2BlRH%2FAOv4bMmIKTTMDGJdKiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8DRlHtqE%2F7RBrYTQKtwDK6qbVspUVDIr8PTrDGYYR81v3GN21zJUQIhYD7TD446z%2FFY07vIdmmXJngAmNrNPGm35zD2GedaHcckH4L6KD9BMatTUZk5wK3VC8InMLpDEWhxxG4fX81CqfdqFsDXRMX9lrs1ux%2Fb75OwENmZ77rsUew1jk4JY0dxcAI9we48RaksVdgxmq1PH24JdrU%2FS1n9O%2BwtcQzsujlpeeYx7xJ%2FaZroEMHPldPdf4e9CXaZKGaJHHBs3JcXUyc2iIz3umTMQxfvD%2FAtS7fPGsb1dAAGFhbz33H%2FE9g9DgGGuivEgjygSjpUdO1p7WsUf5iqGwIKn%2BzGgy613Sg1qwUKTtCXHtjNWorXKrLmZj3YMs3DZ57hyiaeWb%2FFdVUM%2BQDK6itdGUH6%2BKMltW7tZzuOHhAaIj%2FzhUF4m7gzJcWTNbAJTQIeC4DLzN9Hf4wsrBZwk2CQbrMEjR9ZqjjdWa%2BYbiLQeieRpvsm%2B%2FZEWG7JX3284AQXZbeaC7k3ypuHWYxggAirEQ6ndv3SBtNmHa%2BZGnw4jc%2Bzdtj5G5OTEHNEIQ7dG6fnMsDAX4mLU%2Fp57nUzzQezZhv5gCXhS6Tm8vKDyd9%2BYPgml8T%2F8Xhfpe%2BR1uT44GhfPdonqdLyNuz4wwe7TxAY6pgGLRwzT7wURM7gACQMJz%2BZcnPleXBV%2FwLNxP8NBkDPQcybPX%2BP7qphVb%2F6vmQ31B%2Bm4XvwaAc8oTLLOdx6VmXqstnSDhVslg2aBfWDwXlkkIL79DIaTj%2B5bCvHiA%2F0e6Uzeaq%2FaYszgqD0eLY2%2B7KlxiKawgTWuV7Oj%2BhWNKkxELN96xmTyvPgqZcbiNm5G2xzEL2kkLaJYDs6jPXR6qBWC3P7xDFlE&X-Amz-Signature=0ea28bedda74cc4b51b8338c80c8ec1e592d199035b06438c6cbbd008d2245d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

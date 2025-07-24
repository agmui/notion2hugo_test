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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q643J5AB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCag%2F%2BUSrTofDGZwp%2BMNR97eVVfiMHwM6fFeSlii8H4OwIhAOO8mB24evBZHP71qzfLLwWYZoczW84%2BbDH%2FaBns6EILKv8DCC4QABoMNjM3NDIzMTgzODA1IgylXRAcCJUGKsfqm2Iq3APtPfZTOq7fAY4fQB%2FULNr1I8eWeHm0oekE6R3OdwAzwN93YoqvMilrNsgp%2Fv1OifUrz9uXo7a9kVfRfBz0NmBVyLH60LxXK%2Bo126aWfC4cDxMUdsYN7gYk3dMnXNO9pByUazJ6KA840MLZASyYGHoA8KxRZywa40CG6RzfOF6AIoT%2FQvoVabC14TbOMNNSujg6pf9nauymvjeKuSrEyzmO1SivD8C4hntxEriDOv9lldU%2Fn%2B%2Bdyvh%2BvgNv6PQn2whOvyft%2FApk5C%2BmlpBO6TOCrGdelmStydZ18Lu76DhPriMbBC%2FQVWc2xKqQFTFg%2FpOWozEfiw%2BC7TssYL%2FWM9pV0KJEWlCsR2bK5%2FUdHEAWaCY1K6eweSPwi%2BDhd6VIJP84VPJkNH1Z9MGHX29CC3JwQAL546SQjEsz9ExnevbcPEDbZPspHi6PHiLK99FSElaCw1PuYfHnVXQtKjdR4EIfL%2FXKQrTxivDJOU4azzQZ70g9w6gF12rUgw0n95HfGqXAuhxEjB08W1%2BXUMbTQWCkbFO%2BvTrYivITg8GQdK7rOTP4%2FZSmcjCA8msrQLkofo%2BwhQihrtgz1TQ6yyK3NqrrIzXcK4J44mazJSgMTWzHsehwzimzQH8jxxuurTDB2YjEBjqkAdAJDvnN8DpBi3UICJZGyfLebtpVcCFQ7DI8dYGkZeeF7PqMKgDeUzYFoy2R3OQAv%2F6jKJ5lS3t7oHPJjxKeRzgUkxG9BOyVQhfVdBp5kwgbuzIf57dmNlATRvyhWItcOX9FW%2BSEF1MM4zmnoxz5kVBuZMQ0RVDiN5%2FaiAOclJ7rRZxzBv2R3SyczPX2FEK1qZx5xpIL6sEHgVETen5Dxm9cQTpk&X-Amz-Signature=d731dda43b47ec26e4a06bcefe7f0a018e6fe88808ecc55bea1baadf32f60a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q643J5AB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCag%2F%2BUSrTofDGZwp%2BMNR97eVVfiMHwM6fFeSlii8H4OwIhAOO8mB24evBZHP71qzfLLwWYZoczW84%2BbDH%2FaBns6EILKv8DCC4QABoMNjM3NDIzMTgzODA1IgylXRAcCJUGKsfqm2Iq3APtPfZTOq7fAY4fQB%2FULNr1I8eWeHm0oekE6R3OdwAzwN93YoqvMilrNsgp%2Fv1OifUrz9uXo7a9kVfRfBz0NmBVyLH60LxXK%2Bo126aWfC4cDxMUdsYN7gYk3dMnXNO9pByUazJ6KA840MLZASyYGHoA8KxRZywa40CG6RzfOF6AIoT%2FQvoVabC14TbOMNNSujg6pf9nauymvjeKuSrEyzmO1SivD8C4hntxEriDOv9lldU%2Fn%2B%2Bdyvh%2BvgNv6PQn2whOvyft%2FApk5C%2BmlpBO6TOCrGdelmStydZ18Lu76DhPriMbBC%2FQVWc2xKqQFTFg%2FpOWozEfiw%2BC7TssYL%2FWM9pV0KJEWlCsR2bK5%2FUdHEAWaCY1K6eweSPwi%2BDhd6VIJP84VPJkNH1Z9MGHX29CC3JwQAL546SQjEsz9ExnevbcPEDbZPspHi6PHiLK99FSElaCw1PuYfHnVXQtKjdR4EIfL%2FXKQrTxivDJOU4azzQZ70g9w6gF12rUgw0n95HfGqXAuhxEjB08W1%2BXUMbTQWCkbFO%2BvTrYivITg8GQdK7rOTP4%2FZSmcjCA8msrQLkofo%2BwhQihrtgz1TQ6yyK3NqrrIzXcK4J44mazJSgMTWzHsehwzimzQH8jxxuurTDB2YjEBjqkAdAJDvnN8DpBi3UICJZGyfLebtpVcCFQ7DI8dYGkZeeF7PqMKgDeUzYFoy2R3OQAv%2F6jKJ5lS3t7oHPJjxKeRzgUkxG9BOyVQhfVdBp5kwgbuzIf57dmNlATRvyhWItcOX9FW%2BSEF1MM4zmnoxz5kVBuZMQ0RVDiN5%2FaiAOclJ7rRZxzBv2R3SyczPX2FEK1qZx5xpIL6sEHgVETen5Dxm9cQTpk&X-Amz-Signature=4ef3be860126b7ab9dee9116dfd2446a9c6efe1c1153a4f7602e0560eabc846d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q643J5AB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCag%2F%2BUSrTofDGZwp%2BMNR97eVVfiMHwM6fFeSlii8H4OwIhAOO8mB24evBZHP71qzfLLwWYZoczW84%2BbDH%2FaBns6EILKv8DCC4QABoMNjM3NDIzMTgzODA1IgylXRAcCJUGKsfqm2Iq3APtPfZTOq7fAY4fQB%2FULNr1I8eWeHm0oekE6R3OdwAzwN93YoqvMilrNsgp%2Fv1OifUrz9uXo7a9kVfRfBz0NmBVyLH60LxXK%2Bo126aWfC4cDxMUdsYN7gYk3dMnXNO9pByUazJ6KA840MLZASyYGHoA8KxRZywa40CG6RzfOF6AIoT%2FQvoVabC14TbOMNNSujg6pf9nauymvjeKuSrEyzmO1SivD8C4hntxEriDOv9lldU%2Fn%2B%2Bdyvh%2BvgNv6PQn2whOvyft%2FApk5C%2BmlpBO6TOCrGdelmStydZ18Lu76DhPriMbBC%2FQVWc2xKqQFTFg%2FpOWozEfiw%2BC7TssYL%2FWM9pV0KJEWlCsR2bK5%2FUdHEAWaCY1K6eweSPwi%2BDhd6VIJP84VPJkNH1Z9MGHX29CC3JwQAL546SQjEsz9ExnevbcPEDbZPspHi6PHiLK99FSElaCw1PuYfHnVXQtKjdR4EIfL%2FXKQrTxivDJOU4azzQZ70g9w6gF12rUgw0n95HfGqXAuhxEjB08W1%2BXUMbTQWCkbFO%2BvTrYivITg8GQdK7rOTP4%2FZSmcjCA8msrQLkofo%2BwhQihrtgz1TQ6yyK3NqrrIzXcK4J44mazJSgMTWzHsehwzimzQH8jxxuurTDB2YjEBjqkAdAJDvnN8DpBi3UICJZGyfLebtpVcCFQ7DI8dYGkZeeF7PqMKgDeUzYFoy2R3OQAv%2F6jKJ5lS3t7oHPJjxKeRzgUkxG9BOyVQhfVdBp5kwgbuzIf57dmNlATRvyhWItcOX9FW%2BSEF1MM4zmnoxz5kVBuZMQ0RVDiN5%2FaiAOclJ7rRZxzBv2R3SyczPX2FEK1qZx5xpIL6sEHgVETen5Dxm9cQTpk&X-Amz-Signature=ce88962685cae51163f2c7ed51f284cbd5524968e52dc8a2f4fa756e3631c223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJXLMA3I%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIC2Vl2oGbzT2XO84kwcg9Afh5OotHGbcjSG2eg1bj7n8AiAVp8FoPL0ALOQbh8GsxVhwn88jGzHMgJudKoTZEjVd4Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMxGt65of0d5ZeNP0kKtwDHzjL%2FIjKIQK%2FSFmZimlv8GS8M2e3MmbIK%2Bn%2BBSrIBCL0rihKIlk5iKYrMrUfFyPr%2FxqeYEEnz7%2BxIyih3GBM8iYlqOIfUvvxKhOUzmzPiqa6qIdde5yG%2Bluzb%2BqROP9WsJ9ojuANt%2Bl%2FO14yCUbyhb35VkNAxyPNNwzQvPV2v57wj7FamFirXp3HDZYeiio7kkHQqVS4EK2AgdN0Ref3OFaK6PzZOXahVgwxgKrpq2XKmpt1gMjtHpoWrxRxmoPiYt7qIhkU9QP3OnsTl0o8iFD7g8%2BYDEUErPvByF9dN3w0Vcu%2F3boo4hW6bEpyawhcios6Dsuhs5w%2Ffr6bwut13RsNGGfI%2Bnk5j65yfgf6gwL75hEGM4oyEQ5CFbqFoTtJMOWDqC%2BU2SmHtyUU%2F85MWeNO%2BM%2BnCixQjiHYL1G7J8F5SAkAsSt%2BfIWeuU5PDMdFE8FOg6i%2BU03UFfzNlMl%2B41jddzZV67QaFiM%2FfUZXe7JEbSetIexU5RKBmZ7WqZIODI55LkVMeIB%2BGtkkdEl6Fk%2FAgSkvE1NkHSDbYZhqrBNw9EQYv9OBI9xbwxYNSY0MJ5h7COe3lpPSCVFNFqOLujMgdl%2FDmDVa8r%2B6MZKo1z0nVe4xzSjJOJoCGSow1dmIxAY6pgG6KAd8R%2FrQ3cs7WSVtTvYAhvRbvhIGEK6ZTf7jVlIJ9NU%2Barg1hWXjGz9PFDMHm4hMtVSSVN6S1HW8sQSSh9I%2Bb6De%2BU4wTDalfXOtXY7e5ggARPRBx345ANBF3AUNhNPkP6K2St0eHoyGJeh1bUtu3QsfVALjhzIxU8gRc1sh19txiINTTgrJ8qklf1eFMl6krArYlAnxC2rgQSSWIimVLbHCObjt&X-Amz-Signature=7b6d7a362a3b7cf18a82c9eec166d4eb35dd878d119225d537c799cc3cc40539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZQQUQVM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCC9ugUOhHQTACpT2z%2F607%2FSeHTK2q3%2BE%2BUaL1OPJPkagIgNIvGA5epBRK%2FmxAbYKa5nKcYOu%2BntnKbrJTDNynDP1Iq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCczp8Q9iMlFqhk1fyrcAyaeiZ6u6EDjsGMPUjG3Juv%2B7Gz%2FKJLvmOzXSTGUMgSQ92ONRyWb07a9yMtTmGI2PTkrtno1NZHCX2wJIKyeKux8zA3Mid8%2BpfqqloZlQvc%2BVMnCyYpbnAWLpZYp4FjNPTO4k8fqTK6I4xfExulGAxPdvGt0s3aNRT3jP4puNaO%2FVxBcKbqY%2F65JbGVlcheI%2BZr%2BPybD9GFxYeSEQC5x01E6aiNwswy0%2BSIkzuR%2FTnvOQOoBE6%2Bfw4uyVFWYnF52aff66I5E2Qc%2BrrUPSCvMxCwiByFte5HrNN3SLF1TJaWzZ4nL2xsZCaLVhvM0RJdL1WzKT9ewcaECRvgyTpLO2ZEBBeeZwbirFnWISJJzShqxQW%2BPGUw%2FOjeTRY1pmBIRxSFkV%2BbnLEnKDKkUB5BpVWOlM60ryQgpyjASXLg%2FiquBHqoYVLmevgph1xZK5adytJPM2sdKJF9AGmtB3PeQOsHqtb78u9lyZcUAhLIByrdIBZVwdl1aMA3bZVtGIMpAGMgn2%2FZ2gJX2wEsgCiyNeleOv56KXy1gcq37MP%2B3s554pvmDDUb1XpEbW%2B3%2F69LleNo2mSy4S%2B5uXM2G90fmcPgo6trUWacZgVe0gj1pknHJBeRiXFBlwGcSqHNPMKbaiMQGOqUBSejWBXDP31r9e1gb1rWW6RNt2Q2Fb5JvQTlNl2L8vL51Y%2FeMru5evV8p3qkkGbq2upY%2B0w0Us6b7LR%2BUMrwND0V4Z96%2Fo5VYP59Lwzltnr2IVVNu19ddeUM5PscARtzpFJ39XJMbLcIRgwob8RF9IO8iFvHbEXXjZR6C5uOf%2FRjojTYabfA14Owa8KElkPaUHF6gPAdekPtzQtMEdrmx6x4RdKqV&X-Amz-Signature=f5cfc279a24188503f195ca6cbd455c3203b9e14728120d645137290303e9849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q643J5AB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCag%2F%2BUSrTofDGZwp%2BMNR97eVVfiMHwM6fFeSlii8H4OwIhAOO8mB24evBZHP71qzfLLwWYZoczW84%2BbDH%2FaBns6EILKv8DCC4QABoMNjM3NDIzMTgzODA1IgylXRAcCJUGKsfqm2Iq3APtPfZTOq7fAY4fQB%2FULNr1I8eWeHm0oekE6R3OdwAzwN93YoqvMilrNsgp%2Fv1OifUrz9uXo7a9kVfRfBz0NmBVyLH60LxXK%2Bo126aWfC4cDxMUdsYN7gYk3dMnXNO9pByUazJ6KA840MLZASyYGHoA8KxRZywa40CG6RzfOF6AIoT%2FQvoVabC14TbOMNNSujg6pf9nauymvjeKuSrEyzmO1SivD8C4hntxEriDOv9lldU%2Fn%2B%2Bdyvh%2BvgNv6PQn2whOvyft%2FApk5C%2BmlpBO6TOCrGdelmStydZ18Lu76DhPriMbBC%2FQVWc2xKqQFTFg%2FpOWozEfiw%2BC7TssYL%2FWM9pV0KJEWlCsR2bK5%2FUdHEAWaCY1K6eweSPwi%2BDhd6VIJP84VPJkNH1Z9MGHX29CC3JwQAL546SQjEsz9ExnevbcPEDbZPspHi6PHiLK99FSElaCw1PuYfHnVXQtKjdR4EIfL%2FXKQrTxivDJOU4azzQZ70g9w6gF12rUgw0n95HfGqXAuhxEjB08W1%2BXUMbTQWCkbFO%2BvTrYivITg8GQdK7rOTP4%2FZSmcjCA8msrQLkofo%2BwhQihrtgz1TQ6yyK3NqrrIzXcK4J44mazJSgMTWzHsehwzimzQH8jxxuurTDB2YjEBjqkAdAJDvnN8DpBi3UICJZGyfLebtpVcCFQ7DI8dYGkZeeF7PqMKgDeUzYFoy2R3OQAv%2F6jKJ5lS3t7oHPJjxKeRzgUkxG9BOyVQhfVdBp5kwgbuzIf57dmNlATRvyhWItcOX9FW%2BSEF1MM4zmnoxz5kVBuZMQ0RVDiN5%2FaiAOclJ7rRZxzBv2R3SyczPX2FEK1qZx5xpIL6sEHgVETen5Dxm9cQTpk&X-Amz-Signature=aad53d65828f400c3088edc082491aa1c0d4cd98134127f513e8156c1972af13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

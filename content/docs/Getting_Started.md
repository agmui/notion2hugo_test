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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNU6WP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BorZBqp1BrlBjzoVKWSqmNnLbOoI6hKkRWGBKeI4sQwIhALSYahjyASN4BY4ktktyR49Zb2P%2B5doWo8guqsm%2BWrW7KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQI54HXmiUGSipCYQq3AM1vM5dD5KLED97M4Ngvixa9Lib5dzwGJR17kSgpKc%2BEYNeplbgl9Q0Sjk4go56U0w5oUyeGwf015n0l88pu95Q7XBXC%2F%2B5gk4ZEHNwViXbYYYGPLZrt8Et%2FqomQN16B833q6fCHqJcFJxt4JPcwVA%2FicAFptgxrTfdmWG2F1urelKNoLRhyfQ5DxeucUzjXQZLnkJPA7XYsQywGVHr1BbQG9F4%2FnVB7HOZDHZHC6qxUhGsjb6SEG0WEUciEaIRQcWfuIXCVSOtSpfWnVoIdVjsMqYqzUpeDhz401lkKX5RjK%2Bj92o1LP3m7PjwhWcdw%2B6HGjEDWuRpXYLZodb4258wjjSJRMoeHw%2B0kbx1qyHr%2FluZRUFiYmiUx9uKBlYdXP0AbwaHY9j0PATa6XqNFrihNbDHlXhBgqOXa%2FtMKFbNafUj%2Bs9jj5e%2BdY8SgQCsWZGGotZpPYrEo3hdOG5XL973SN99kMoeKIl9TtbQzXVRoGJ44sE%2B4LuEJj2JIEL6nWnwr9vbtZzEdwTU3YozwZgHIEe4lxl%2FidhKOOvwJwC8zU%2BlWyZXz0i6e8OSLeewLOzvDRRSXlsK8lf7XW4IXN3JvD3iMMzYMGJMtCrFPT13U0Bq3AL4n0iNhbZhOTD%2Bt%2FLDBjqkAb1HiOcM95wL6osdscGRUZ%2BdsREyE2wq9KBfUKhTvQz7tpaQ%2FRYOKM5gBYy0di7p6AAVkJXNfSnzt9tGApN5yLK885%2BSjJsxOB0%2Bn7xyupfya3w9%2F2leAKtlA1h%2BVNPyoXKaWJeFzLQYYygjPJ7kgUfXqkECYeG6pSTqvJ1Q5satVkZIIfIkb5uqU3m7reDLfB9MC6mQ%2BB36%2FrylQDTxo9tulPDT&X-Amz-Signature=72ecb224e80458e93b57227b6b364e22cba89ad3376ca6239d50591a83f17395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNU6WP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BorZBqp1BrlBjzoVKWSqmNnLbOoI6hKkRWGBKeI4sQwIhALSYahjyASN4BY4ktktyR49Zb2P%2B5doWo8guqsm%2BWrW7KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQI54HXmiUGSipCYQq3AM1vM5dD5KLED97M4Ngvixa9Lib5dzwGJR17kSgpKc%2BEYNeplbgl9Q0Sjk4go56U0w5oUyeGwf015n0l88pu95Q7XBXC%2F%2B5gk4ZEHNwViXbYYYGPLZrt8Et%2FqomQN16B833q6fCHqJcFJxt4JPcwVA%2FicAFptgxrTfdmWG2F1urelKNoLRhyfQ5DxeucUzjXQZLnkJPA7XYsQywGVHr1BbQG9F4%2FnVB7HOZDHZHC6qxUhGsjb6SEG0WEUciEaIRQcWfuIXCVSOtSpfWnVoIdVjsMqYqzUpeDhz401lkKX5RjK%2Bj92o1LP3m7PjwhWcdw%2B6HGjEDWuRpXYLZodb4258wjjSJRMoeHw%2B0kbx1qyHr%2FluZRUFiYmiUx9uKBlYdXP0AbwaHY9j0PATa6XqNFrihNbDHlXhBgqOXa%2FtMKFbNafUj%2Bs9jj5e%2BdY8SgQCsWZGGotZpPYrEo3hdOG5XL973SN99kMoeKIl9TtbQzXVRoGJ44sE%2B4LuEJj2JIEL6nWnwr9vbtZzEdwTU3YozwZgHIEe4lxl%2FidhKOOvwJwC8zU%2BlWyZXz0i6e8OSLeewLOzvDRRSXlsK8lf7XW4IXN3JvD3iMMzYMGJMtCrFPT13U0Bq3AL4n0iNhbZhOTD%2Bt%2FLDBjqkAb1HiOcM95wL6osdscGRUZ%2BdsREyE2wq9KBfUKhTvQz7tpaQ%2FRYOKM5gBYy0di7p6AAVkJXNfSnzt9tGApN5yLK885%2BSjJsxOB0%2Bn7xyupfya3w9%2F2leAKtlA1h%2BVNPyoXKaWJeFzLQYYygjPJ7kgUfXqkECYeG6pSTqvJ1Q5satVkZIIfIkb5uqU3m7reDLfB9MC6mQ%2BB36%2FrylQDTxo9tulPDT&X-Amz-Signature=f5921903215f9d6fdd69b1057ea3ca17c893916e074fb1be0ccc8cf36b29929d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNU6WP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BorZBqp1BrlBjzoVKWSqmNnLbOoI6hKkRWGBKeI4sQwIhALSYahjyASN4BY4ktktyR49Zb2P%2B5doWo8guqsm%2BWrW7KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQI54HXmiUGSipCYQq3AM1vM5dD5KLED97M4Ngvixa9Lib5dzwGJR17kSgpKc%2BEYNeplbgl9Q0Sjk4go56U0w5oUyeGwf015n0l88pu95Q7XBXC%2F%2B5gk4ZEHNwViXbYYYGPLZrt8Et%2FqomQN16B833q6fCHqJcFJxt4JPcwVA%2FicAFptgxrTfdmWG2F1urelKNoLRhyfQ5DxeucUzjXQZLnkJPA7XYsQywGVHr1BbQG9F4%2FnVB7HOZDHZHC6qxUhGsjb6SEG0WEUciEaIRQcWfuIXCVSOtSpfWnVoIdVjsMqYqzUpeDhz401lkKX5RjK%2Bj92o1LP3m7PjwhWcdw%2B6HGjEDWuRpXYLZodb4258wjjSJRMoeHw%2B0kbx1qyHr%2FluZRUFiYmiUx9uKBlYdXP0AbwaHY9j0PATa6XqNFrihNbDHlXhBgqOXa%2FtMKFbNafUj%2Bs9jj5e%2BdY8SgQCsWZGGotZpPYrEo3hdOG5XL973SN99kMoeKIl9TtbQzXVRoGJ44sE%2B4LuEJj2JIEL6nWnwr9vbtZzEdwTU3YozwZgHIEe4lxl%2FidhKOOvwJwC8zU%2BlWyZXz0i6e8OSLeewLOzvDRRSXlsK8lf7XW4IXN3JvD3iMMzYMGJMtCrFPT13U0Bq3AL4n0iNhbZhOTD%2Bt%2FLDBjqkAb1HiOcM95wL6osdscGRUZ%2BdsREyE2wq9KBfUKhTvQz7tpaQ%2FRYOKM5gBYy0di7p6AAVkJXNfSnzt9tGApN5yLK885%2BSjJsxOB0%2Bn7xyupfya3w9%2F2leAKtlA1h%2BVNPyoXKaWJeFzLQYYygjPJ7kgUfXqkECYeG6pSTqvJ1Q5satVkZIIfIkb5uqU3m7reDLfB9MC6mQ%2BB36%2FrylQDTxo9tulPDT&X-Amz-Signature=f103d70932c7323358852bfcf2f2231122beae6ff7fd85d88a4696e7623073a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZ2AP6X%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB49FFDxyNCrUAY1PdG3Z0K8ucf8WyNcXXLU%2FirIR2N%2BAiBnvo%2B42P5XWsaISitGGYpa2JRtIXQVLvDEH1u2pYQ3niqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMboMJnHfKFlUD2%2BnCKtwDZYnnFFcL4Pa1TTAmsO5Rtbn%2BKogy5SkVhSCSqfcztCwzCc5YYrQUl0zODKgzACG%2BZ%2BMOqUVEO6ESGsK6mVYePIzvo2zIiV4F%2FUhWgRC%2FEWtUqiGvK%2FQ94n4i8Pd8ABKeWKPEwRF4ImfY5d2NFNviK54JmmXbC%2BnKzCwgxnlv%2FuNFuAaY3kGszWhd%2FX0M7Y56osf8Uyj91hM98BQ%2F8Cd9vu2MkFGKmU%2FTDxUVkbPE0JkItmKHPrdlB9Dbmblaaot5C3kXNK25NzO6zwfzJvd5Z06G%2FjfsQ2yebEQFQqOh7WB26sMuD1XDg6crxrZiOwUXRPyzSAxOcAnG6yrAFTftJ%2F0bY%2BImYZLJ0Fd3q%2BI0YxQTr9cF9tzp20KeUtu7OdsEwFdZg6rGlDSUGtSWJUXpBfgDqthiY2rKRKkpSOprxcYuPfbuc%2F%2BhbsOwqxeZrz6zbaNBxz50pslC0%2Bjun16dRptxiZ6%2BBgLn1zeI1P3U%2ByAo%2BNccLoWVdONGrrMgehR3jamLvITMOmWys7Krcb1aIPkj9l76yFgw5rRCOoWg1K2%2BCr2n1t2N5yquAaBThhcdHfZO6h1EGH2Y726pf6dTUhW9fcuEeO%2Bfy2DIzPc1dbC3be%2Fga3rcryhUDfAwvr%2FywwY6pgF9TVhCKxcnVudFTdAyI9at3iKAZffTAlgZ%2BW67KAJKU7hk9SPDcoUNH2tISR6FgbaG7GcK13Izi7P6ImM5ziaktR77HT0KIr8mkwlAheYTrGndRmlN8M%2BzYkaJ5hQSZonZ7U%2FXkLGX632myCBTBDlPsnbHjTjh0qPkYax5HrO%2BcDsG9K4ys7jidi%2FIMR7lR5CUjCoNVNIdInBVWTxceWQkU36ymCaT&X-Amz-Signature=643ec4fd1afb4eeec132fde396310ee8431e700a42f383fea6293a33366f8c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVNYU2Q%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6t%2FZfUEFVRN4Pv4EqTF3WnFBEYZW4U4Cmk9OULKOcUAIgO8TIGqZygisSVJJpsE4Ut7k09n0bRYi3LeNDwIb4x0UqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJ3PF9cLw%2BwLKeIsCrcA%2FWbzI0f8Qzmsn7l9Kt1NHA30mWc4zo6lEFm1Ylj2K7gZ5GynqZa1Fmww0OaOQT6yMkswyFgJbSHsLugLNjWjWMsKQM1I0JThkj8ObXkpcFvx71gXhQLYGx4SvaqPk8uY8BZHHyeGUW4%2FOw6UE5R9F2%2Fok2UA1wxha9uA2aD6tW5jXDm4uMM%2BC5euVWIViMmWJBw6vwtYH5%2FhBz9pwTRBxwKnJsTG9mJiDOmKjPEqaXxKBEVb8JOZTzZFNK2k1P%2F%2FedDYccXh%2FVHt2yGw7EcVBTU%2FkraJX%2FhNzw4OtfkB9M7BOkYfprv3qZqa4ob4j%2BLjbUv51ZrhKo%2B2tNMiHUvDt8PuRgGgUi6rdq%2F665T7zWkNF34O9bTFLGk%2B%2F546GGlbhEro1dTqnzrPnlY7igFWYir%2B9Qfr2qQPrYvHAsN4U4I08Us52h3%2Fm8USzDHp1NMij6uVHycdClZlUNOsCOFWom9RDz8MYqVyy%2BwXqwiTawl6xkw6y%2Ftqzr8A7xRY5JbsgonV1dafeYJAIoD3fN%2F839mGMUwVTzSk%2B9%2BwPp9iAWJ3JMx6pqRbBYmTaI1YKN0r7%2FHOzT7IdrLa61NzJav%2FD9XrAtF0xMeY%2F0GxMomtT77WW3JjpA6b5JJ0vfKMIS18sMGOqUBBCKHiEoakYUV40TJLOnBP%2Bpl0VFyxrbouoZ9HUJPzo4856%2BwL%2FuFCYw%2BQW9hArW%2FAJU4lwSAmXl5taLWC0gESn6htbhy%2FtKXaB8Jkhj8Qy6C7ZRr0pkmh%2B%2BxM51eSTWToha%2BHTgHrVtTKLsY8iIDqvb%2Bt4VTEnf7sxWsLmGBkVG4g45TwkLwFKaD%2FD6JMr3uhxN%2FGQNnkRDwgh70wmhp%2Blp%2BXZW9&X-Amz-Signature=c02b59968b852a091677958b77535b6a16f4c67f18bbea66cb6e9c1f0443afed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNU6WP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BorZBqp1BrlBjzoVKWSqmNnLbOoI6hKkRWGBKeI4sQwIhALSYahjyASN4BY4ktktyR49Zb2P%2B5doWo8guqsm%2BWrW7KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQI54HXmiUGSipCYQq3AM1vM5dD5KLED97M4Ngvixa9Lib5dzwGJR17kSgpKc%2BEYNeplbgl9Q0Sjk4go56U0w5oUyeGwf015n0l88pu95Q7XBXC%2F%2B5gk4ZEHNwViXbYYYGPLZrt8Et%2FqomQN16B833q6fCHqJcFJxt4JPcwVA%2FicAFptgxrTfdmWG2F1urelKNoLRhyfQ5DxeucUzjXQZLnkJPA7XYsQywGVHr1BbQG9F4%2FnVB7HOZDHZHC6qxUhGsjb6SEG0WEUciEaIRQcWfuIXCVSOtSpfWnVoIdVjsMqYqzUpeDhz401lkKX5RjK%2Bj92o1LP3m7PjwhWcdw%2B6HGjEDWuRpXYLZodb4258wjjSJRMoeHw%2B0kbx1qyHr%2FluZRUFiYmiUx9uKBlYdXP0AbwaHY9j0PATa6XqNFrihNbDHlXhBgqOXa%2FtMKFbNafUj%2Bs9jj5e%2BdY8SgQCsWZGGotZpPYrEo3hdOG5XL973SN99kMoeKIl9TtbQzXVRoGJ44sE%2B4LuEJj2JIEL6nWnwr9vbtZzEdwTU3YozwZgHIEe4lxl%2FidhKOOvwJwC8zU%2BlWyZXz0i6e8OSLeewLOzvDRRSXlsK8lf7XW4IXN3JvD3iMMzYMGJMtCrFPT13U0Bq3AL4n0iNhbZhOTD%2Bt%2FLDBjqkAb1HiOcM95wL6osdscGRUZ%2BdsREyE2wq9KBfUKhTvQz7tpaQ%2FRYOKM5gBYy0di7p6AAVkJXNfSnzt9tGApN5yLK885%2BSjJsxOB0%2Bn7xyupfya3w9%2F2leAKtlA1h%2BVNPyoXKaWJeFzLQYYygjPJ7kgUfXqkECYeG6pSTqvJ1Q5satVkZIIfIkb5uqU3m7reDLfB9MC6mQ%2BB36%2FrylQDTxo9tulPDT&X-Amz-Signature=6190024e1b73f3d1f1f193aa20b0da114e799ced44a6306606b748a3c6635a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

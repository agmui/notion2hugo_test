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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MYCPIC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgkT6H3WlykL%2FmNiGJvEn1Jc8qaZfZP4jZlKPTPxPtrAiAb%2FvYZiYiAL%2FMOAXy09%2BtNLKkVjS3brIGJxKnJ4fxZrCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYmstB9PnFc4FKBhPKtwDcYlR1f0IRN6v%2BBB5zA0%2FL5%2Baj3khdMa6onUjhUnZsr0bRC9HrSNuu%2BPyw2uUqmCDDMU91TEpc50xGHEm8JPuGaN%2BDzh1JDrZMEvBNx17ix1XZ%2BE9DgJE%2BS9g%2FG0UQomCOouM%2FtWYnftgRWJ4tatGloEoR39ZNX0%2FNqZ9mnZc%2BuJuuyPpoHA0PN2StF2a2MJsjgvC8h5Lv2OkZdp2Q4OGBlEX2LJqe9j3YnbHuLWUCIb6mt2HTS1CyEVE537DHzDjElMofVgn3blhbZI074nvo8%2FjkYpU6Xh61OAxGK%2B3R7RvDnUi81ApUrJBqvscj%2BXY3raB5ORD8niaXijWHEICODzHfMt7eUuLz%2ByBfmvyt9A%2FeqTs6i8OwrnGdhxzrtsj3np0tSiqVdinbIN4LiTtMVx8kLy1YuMtlr5JQ6MjwTjd%2FngN97ILINF90c6DuhKvpHqQoCLZDoFWKnmHfjX5GdK1iBkY74S5DoP3Z9jaFXgpOFwXBe0dSEXeZCTg88bjJjhY7iu3px6JYqKs%2BzRrBHrLFMMREQp8j0SU25dpWJCEKyl4uIyC7AUKNPtzpa8GL1rU1jfePcOMSUxvGzpoCVuu2gN046AWL2b%2B2EkJdS9sKsIhclEPJvKTz0Mwneq5wwY6pgFaK7%2FMqv8D%2Bo20NyT3flCt%2FQTxkJQoVPiaPr8I8f8Sy9KBQVYabHcmDqQ21S8xEBpe1m5Unq5T4F3deNbKtAVQJSvJQjq6ce%2FF3h3Ldyq2fqnFoR1D2Ifj2KO7dk5QgPEvawakR7LXZOV17MqKkgzQlKSkLafuwp1LcY7sFydpXZldJuT1WCMDcmBv2crM1nCMlywgjBI%2FDA6ZdU9Mu9MKKL%2BzRpT5&X-Amz-Signature=26878588c8337ed95d699291205300439342fb850c220e065dbce0deffc470d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MYCPIC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgkT6H3WlykL%2FmNiGJvEn1Jc8qaZfZP4jZlKPTPxPtrAiAb%2FvYZiYiAL%2FMOAXy09%2BtNLKkVjS3brIGJxKnJ4fxZrCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYmstB9PnFc4FKBhPKtwDcYlR1f0IRN6v%2BBB5zA0%2FL5%2Baj3khdMa6onUjhUnZsr0bRC9HrSNuu%2BPyw2uUqmCDDMU91TEpc50xGHEm8JPuGaN%2BDzh1JDrZMEvBNx17ix1XZ%2BE9DgJE%2BS9g%2FG0UQomCOouM%2FtWYnftgRWJ4tatGloEoR39ZNX0%2FNqZ9mnZc%2BuJuuyPpoHA0PN2StF2a2MJsjgvC8h5Lv2OkZdp2Q4OGBlEX2LJqe9j3YnbHuLWUCIb6mt2HTS1CyEVE537DHzDjElMofVgn3blhbZI074nvo8%2FjkYpU6Xh61OAxGK%2B3R7RvDnUi81ApUrJBqvscj%2BXY3raB5ORD8niaXijWHEICODzHfMt7eUuLz%2ByBfmvyt9A%2FeqTs6i8OwrnGdhxzrtsj3np0tSiqVdinbIN4LiTtMVx8kLy1YuMtlr5JQ6MjwTjd%2FngN97ILINF90c6DuhKvpHqQoCLZDoFWKnmHfjX5GdK1iBkY74S5DoP3Z9jaFXgpOFwXBe0dSEXeZCTg88bjJjhY7iu3px6JYqKs%2BzRrBHrLFMMREQp8j0SU25dpWJCEKyl4uIyC7AUKNPtzpa8GL1rU1jfePcOMSUxvGzpoCVuu2gN046AWL2b%2B2EkJdS9sKsIhclEPJvKTz0Mwneq5wwY6pgFaK7%2FMqv8D%2Bo20NyT3flCt%2FQTxkJQoVPiaPr8I8f8Sy9KBQVYabHcmDqQ21S8xEBpe1m5Unq5T4F3deNbKtAVQJSvJQjq6ce%2FF3h3Ldyq2fqnFoR1D2Ifj2KO7dk5QgPEvawakR7LXZOV17MqKkgzQlKSkLafuwp1LcY7sFydpXZldJuT1WCMDcmBv2crM1nCMlywgjBI%2FDA6ZdU9Mu9MKKL%2BzRpT5&X-Amz-Signature=8faecf68a97f7d8bd7fe6903b189f0d0bcb77c62a705d0cea27bbbc21a36f710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MYCPIC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgkT6H3WlykL%2FmNiGJvEn1Jc8qaZfZP4jZlKPTPxPtrAiAb%2FvYZiYiAL%2FMOAXy09%2BtNLKkVjS3brIGJxKnJ4fxZrCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYmstB9PnFc4FKBhPKtwDcYlR1f0IRN6v%2BBB5zA0%2FL5%2Baj3khdMa6onUjhUnZsr0bRC9HrSNuu%2BPyw2uUqmCDDMU91TEpc50xGHEm8JPuGaN%2BDzh1JDrZMEvBNx17ix1XZ%2BE9DgJE%2BS9g%2FG0UQomCOouM%2FtWYnftgRWJ4tatGloEoR39ZNX0%2FNqZ9mnZc%2BuJuuyPpoHA0PN2StF2a2MJsjgvC8h5Lv2OkZdp2Q4OGBlEX2LJqe9j3YnbHuLWUCIb6mt2HTS1CyEVE537DHzDjElMofVgn3blhbZI074nvo8%2FjkYpU6Xh61OAxGK%2B3R7RvDnUi81ApUrJBqvscj%2BXY3raB5ORD8niaXijWHEICODzHfMt7eUuLz%2ByBfmvyt9A%2FeqTs6i8OwrnGdhxzrtsj3np0tSiqVdinbIN4LiTtMVx8kLy1YuMtlr5JQ6MjwTjd%2FngN97ILINF90c6DuhKvpHqQoCLZDoFWKnmHfjX5GdK1iBkY74S5DoP3Z9jaFXgpOFwXBe0dSEXeZCTg88bjJjhY7iu3px6JYqKs%2BzRrBHrLFMMREQp8j0SU25dpWJCEKyl4uIyC7AUKNPtzpa8GL1rU1jfePcOMSUxvGzpoCVuu2gN046AWL2b%2B2EkJdS9sKsIhclEPJvKTz0Mwneq5wwY6pgFaK7%2FMqv8D%2Bo20NyT3flCt%2FQTxkJQoVPiaPr8I8f8Sy9KBQVYabHcmDqQ21S8xEBpe1m5Unq5T4F3deNbKtAVQJSvJQjq6ce%2FF3h3Ldyq2fqnFoR1D2Ifj2KO7dk5QgPEvawakR7LXZOV17MqKkgzQlKSkLafuwp1LcY7sFydpXZldJuT1WCMDcmBv2crM1nCMlywgjBI%2FDA6ZdU9Mu9MKKL%2BzRpT5&X-Amz-Signature=87f7c531529eeea11e69d22d80f3ba5ee2eaea37d3f549bf022c96cff6e47154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMGCS55%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSKSszeKTGaxm3u0FqfJlPEa%2FG56O08IkSLotIt8FCjgIgKdCKJElQzqREWmw8y7%2Fo9arzzspL2JYfoeuMP4tnpNgqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmBd2dWBZ0ictW6oircA6I7D7P6q4q%2FujU%2BifR27DWJQwOaod%2Fi4Iw9EJmJSeAtYZkGHg2HVgYXPuSDZ6eOxBQsLwq4iQMWKyPbnuYseUs9F7UvDdnLR7P5NOXDevG5x4MDsKJKw6pqTsNKZSIYotgvXYWN3IG2wBA2jt83K6xd2tPZTGleLuvUlT5N5cZCl2J3RyNQRaDT16g2T6GLY8b24W%2B2yZsTFpRJUlHsudWVQr5HA6cRH4x4OfiURCB76kcazbjuGH97wPzvt03dmLW0PWapHpuND9ehYGC7LvMtHjU4OywVQHKljOVC5sWJwkt2vAPOOPLWOmfjFhyVnQFg9675Eb%2Bs3U3EFsYFrTnDEdBQhro3Xa26aNcgvGIM6K%2BfreD4T1yfIwiYg967xfTTzgC1aH%2BElLaus4g62krIIAgDN3n80AAfgnSKQYDefUTg8aBKuR0ZgV96adAINVM6c0%2FvU2rQYaBvWtxDqlehMmRvTsKzJVUtR0UtkXHMhq2QAlzBzxuXbhVqOFhMKeLxJaYDe1HFjQ%2BTFQqwALmTVC4t46hOpu1SnoRN%2FM%2F8hT03obFweagaPuh6c1Ik0dErMPeOHg74p5bHOGJrmwX3tNMhdKnrxjl8kqWEetqAoPeA4xTaBbEpP6u4MLzqucMGOqUBvxF5tJh9SiJ45uBmOJ6rYEnv9KZWdhO%2F5YY8HjK8IRaplrSVxovYs3VuxNRF5o4RyhCjO1zOIMMxyjYJnMk3nKGqbT%2BkvlIB0AxSmd9mYQRjvQsz%2Bq9EhdpeINWO86tlxxU3qt1iMtySyXpKyohqHPQ9gspyJAWc7UsZpQfhV84MF9FyJ3ZftiriZEgnUe83ihw%2BQpXFwe%2F34CL6kqUvomQzVNKR&X-Amz-Signature=a7161d19141218f35fe226d1886ce9bd3334aec31fe0a1b6dea4630061787438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2Z45U3K%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsjRjPYxIxWq%2B2%2Fj39oFZ6k0HgC7hFGrpHuJvKd8D7vAiEAgyNTaW%2FIfw34aR7%2B8sPjFHoWRMgXJJBLn0hpNJjCZ%2FgqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHuqk1oVPV8HM64ASrcA1yCyjpnsTTmifmanMrWiBkYQbIZAo3cb4nA1rGn%2BO7QvaDZ3e%2F3MZzocM70o3zAfBHkWzKPs4SzLKRk0vgcbYpvi93Tz5z9HpjpO%2FT8vCXsncFcRbm1lvXMX8mLsTKY11GSXD4Z7sIuof9%2FF%2FaNrlWCvcNysYK2lMhAZrIYGRwtCqAz6ytriv0vbqIVaJEo4CdriNgWmsd3K6cs4skHz5JqYbgAgGO64mp%2FQN807JHObFCvlwO7B%2BYix9xVIKJE%2F%2FI77ZAFwGt4D%2BbXJvYjJzFPvCLhgdHqG11kyN5MDofHwrDKBDIazFclKtn5xjC%2BFN3zTh9y38oVaCr43fMYbmIc3kz7f31%2FwGBo6fIPmdIxdsj2V62wEfpqkr8XEYppv3bk%2BVtP%2FR%2BBZQQ%2FOJs3k2qfTre35ioat0%2F50IkCIzrUQZf9eTgVwDxswuoXhlb%2FHPwPC4HDONcC8ZYOAfqZJb2N80PFpyRI5fBXUDCtfGhQk7DPABQSeg%2BBOpqGI5qL26AkFF0tyS0sGZ5P79Oy%2FZoLU%2BZ95SZyeYdZeCVZ7Txz%2FFQoT4zB%2Fi6AUVt1zWKtgJLS275EzulzL88cHOXznAD3plSthdCrldCWD6YpMokzJHHC7Yr20y0eOwm0MJ7qucMGOqUBN39DT8NKfnk5wbyNTHLmWQ3CsnpLjWLJacMYN1wj6mxpFxuvyDy7iiYsZGPyKgltRqX8Eolqc3xjKqZ%2FYl%2BG75EwZc8h5SAu7VKMydmFpDHeyOMfvOiMg4f4BIHtIkdzmWWUfnfqzRdVuz%2BWoPgMXxYqlFMCbm%2BS3wyDhgkyb240Gn8UaabdKlS1b1sQ%2FwaBfox3GrMIgb50EuC7t%2FwjKecnu%2Fe7&X-Amz-Signature=bb2fdf02422a7bb970dcd3d7eee48ae389a1fcb25289c876d047e9da00e37088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MYCPIC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgkT6H3WlykL%2FmNiGJvEn1Jc8qaZfZP4jZlKPTPxPtrAiAb%2FvYZiYiAL%2FMOAXy09%2BtNLKkVjS3brIGJxKnJ4fxZrCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYmstB9PnFc4FKBhPKtwDcYlR1f0IRN6v%2BBB5zA0%2FL5%2Baj3khdMa6onUjhUnZsr0bRC9HrSNuu%2BPyw2uUqmCDDMU91TEpc50xGHEm8JPuGaN%2BDzh1JDrZMEvBNx17ix1XZ%2BE9DgJE%2BS9g%2FG0UQomCOouM%2FtWYnftgRWJ4tatGloEoR39ZNX0%2FNqZ9mnZc%2BuJuuyPpoHA0PN2StF2a2MJsjgvC8h5Lv2OkZdp2Q4OGBlEX2LJqe9j3YnbHuLWUCIb6mt2HTS1CyEVE537DHzDjElMofVgn3blhbZI074nvo8%2FjkYpU6Xh61OAxGK%2B3R7RvDnUi81ApUrJBqvscj%2BXY3raB5ORD8niaXijWHEICODzHfMt7eUuLz%2ByBfmvyt9A%2FeqTs6i8OwrnGdhxzrtsj3np0tSiqVdinbIN4LiTtMVx8kLy1YuMtlr5JQ6MjwTjd%2FngN97ILINF90c6DuhKvpHqQoCLZDoFWKnmHfjX5GdK1iBkY74S5DoP3Z9jaFXgpOFwXBe0dSEXeZCTg88bjJjhY7iu3px6JYqKs%2BzRrBHrLFMMREQp8j0SU25dpWJCEKyl4uIyC7AUKNPtzpa8GL1rU1jfePcOMSUxvGzpoCVuu2gN046AWL2b%2B2EkJdS9sKsIhclEPJvKTz0Mwneq5wwY6pgFaK7%2FMqv8D%2Bo20NyT3flCt%2FQTxkJQoVPiaPr8I8f8Sy9KBQVYabHcmDqQ21S8xEBpe1m5Unq5T4F3deNbKtAVQJSvJQjq6ce%2FF3h3Ldyq2fqnFoR1D2Ifj2KO7dk5QgPEvawakR7LXZOV17MqKkgzQlKSkLafuwp1LcY7sFydpXZldJuT1WCMDcmBv2crM1nCMlywgjBI%2FDA6ZdU9Mu9MKKL%2BzRpT5&X-Amz-Signature=4b016e16b4bd2046c2672231db7c73b51f6cf613ec3b1117e701d736f11da20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

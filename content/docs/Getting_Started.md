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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7VNVKZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7TTgZzke5zikaN5MiS6M4YWJ9%2FQIKAgUZidRWMc4%2FOAIhAOCehZ%2Bwr8a6vKA444eCGOzbHAfZaJFuZ0csDTqzl5wYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXVbA%2FCs4MO2P5PrMq3AMT1CM8SkRt7JUu0l0sZOSBCnabBhMNXZi35WvLIklYoUKRy%2F7r6dzlgOsp9FLraJLjevIuqPjTnVtOQIWqyMoIWuwr87Otlxfll6CsBo0VHSjl5AlR2gisjGj%2FYjDZEtFc%2FNf2jz19w92Lf6UVqGujCsW%2Fg3iJl45Z0n2jgwCXbSmvUEG2rRxhdpEc0l%2BdVMtcR0GGqykiwmrHgPrZbqKwHigvMyx%2B5hr1K%2FkviFbsiaw%2FMmA50%2FuJlNc6ZzpvrlqtXnBYmzlNT81knZ2j8pXLJqopWWMLDy%2FAO6JzePEOMQDqMeEXCKsBoVeYiH3x9CyX4Dw32SlT1F4jv7feit86RcuxD1ww4MxpIuCXponIOK4dQe3b1jnrlPbnVIPVTdT%2Bnvcb9WsCxdiOyoRK%2BOP4zTmcmtJ8GiXbL59nT4OpPi4etPYdAaoRN7ZKB14JWH0JwJ%2FxWq%2B%2BFHF6Gczip95eLOy%2FyNuAAwrOojU7CwU38UC2GZWT2YiAklKrod4zWzYias3txIlWsNQzh4Nrfpj5Hgx0ncsafHZollkgEeBz0qlCR1MaDJrNpCGY4c6KbH%2BOWJzzKwl3LEy3%2FGP97Mtk7zgKdK51pqYgS0ewbSsNvBYIWlOMuLg8Mw1WozC63ZnCBjqkARBtHiaOFGsDFPJP6RmI28RKM27zIYi%2BHzXsPQ8pTB1ENhPTyBfwo6xrkuwMpFlf0K1qE3xkVbtOhokSWNu5WhCqIYMzZhWTgbWYFSdA4pgXTZNATpFLDI12rUWbfwqmWKfuR8hwDjEh2UFAgNi9%2F%2FygxjPfAULb3DhB3PwOCvaC1JeNQX5r%2FSU%2F3cXk29CdIuju9susUEB6K%2FCdxllikDXPox4T&X-Amz-Signature=45a278af3648d9424597edac3d01a38491407ed4bc0871f2ae4463cbd115f0f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7VNVKZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7TTgZzke5zikaN5MiS6M4YWJ9%2FQIKAgUZidRWMc4%2FOAIhAOCehZ%2Bwr8a6vKA444eCGOzbHAfZaJFuZ0csDTqzl5wYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXVbA%2FCs4MO2P5PrMq3AMT1CM8SkRt7JUu0l0sZOSBCnabBhMNXZi35WvLIklYoUKRy%2F7r6dzlgOsp9FLraJLjevIuqPjTnVtOQIWqyMoIWuwr87Otlxfll6CsBo0VHSjl5AlR2gisjGj%2FYjDZEtFc%2FNf2jz19w92Lf6UVqGujCsW%2Fg3iJl45Z0n2jgwCXbSmvUEG2rRxhdpEc0l%2BdVMtcR0GGqykiwmrHgPrZbqKwHigvMyx%2B5hr1K%2FkviFbsiaw%2FMmA50%2FuJlNc6ZzpvrlqtXnBYmzlNT81knZ2j8pXLJqopWWMLDy%2FAO6JzePEOMQDqMeEXCKsBoVeYiH3x9CyX4Dw32SlT1F4jv7feit86RcuxD1ww4MxpIuCXponIOK4dQe3b1jnrlPbnVIPVTdT%2Bnvcb9WsCxdiOyoRK%2BOP4zTmcmtJ8GiXbL59nT4OpPi4etPYdAaoRN7ZKB14JWH0JwJ%2FxWq%2B%2BFHF6Gczip95eLOy%2FyNuAAwrOojU7CwU38UC2GZWT2YiAklKrod4zWzYias3txIlWsNQzh4Nrfpj5Hgx0ncsafHZollkgEeBz0qlCR1MaDJrNpCGY4c6KbH%2BOWJzzKwl3LEy3%2FGP97Mtk7zgKdK51pqYgS0ewbSsNvBYIWlOMuLg8Mw1WozC63ZnCBjqkARBtHiaOFGsDFPJP6RmI28RKM27zIYi%2BHzXsPQ8pTB1ENhPTyBfwo6xrkuwMpFlf0K1qE3xkVbtOhokSWNu5WhCqIYMzZhWTgbWYFSdA4pgXTZNATpFLDI12rUWbfwqmWKfuR8hwDjEh2UFAgNi9%2F%2FygxjPfAULb3DhB3PwOCvaC1JeNQX5r%2FSU%2F3cXk29CdIuju9susUEB6K%2FCdxllikDXPox4T&X-Amz-Signature=7d9356d651ff87b13a022aaaa93d9e609e4e206212660680bff0111c52b4b22b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7VNVKZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7TTgZzke5zikaN5MiS6M4YWJ9%2FQIKAgUZidRWMc4%2FOAIhAOCehZ%2Bwr8a6vKA444eCGOzbHAfZaJFuZ0csDTqzl5wYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXVbA%2FCs4MO2P5PrMq3AMT1CM8SkRt7JUu0l0sZOSBCnabBhMNXZi35WvLIklYoUKRy%2F7r6dzlgOsp9FLraJLjevIuqPjTnVtOQIWqyMoIWuwr87Otlxfll6CsBo0VHSjl5AlR2gisjGj%2FYjDZEtFc%2FNf2jz19w92Lf6UVqGujCsW%2Fg3iJl45Z0n2jgwCXbSmvUEG2rRxhdpEc0l%2BdVMtcR0GGqykiwmrHgPrZbqKwHigvMyx%2B5hr1K%2FkviFbsiaw%2FMmA50%2FuJlNc6ZzpvrlqtXnBYmzlNT81knZ2j8pXLJqopWWMLDy%2FAO6JzePEOMQDqMeEXCKsBoVeYiH3x9CyX4Dw32SlT1F4jv7feit86RcuxD1ww4MxpIuCXponIOK4dQe3b1jnrlPbnVIPVTdT%2Bnvcb9WsCxdiOyoRK%2BOP4zTmcmtJ8GiXbL59nT4OpPi4etPYdAaoRN7ZKB14JWH0JwJ%2FxWq%2B%2BFHF6Gczip95eLOy%2FyNuAAwrOojU7CwU38UC2GZWT2YiAklKrod4zWzYias3txIlWsNQzh4Nrfpj5Hgx0ncsafHZollkgEeBz0qlCR1MaDJrNpCGY4c6KbH%2BOWJzzKwl3LEy3%2FGP97Mtk7zgKdK51pqYgS0ewbSsNvBYIWlOMuLg8Mw1WozC63ZnCBjqkARBtHiaOFGsDFPJP6RmI28RKM27zIYi%2BHzXsPQ8pTB1ENhPTyBfwo6xrkuwMpFlf0K1qE3xkVbtOhokSWNu5WhCqIYMzZhWTgbWYFSdA4pgXTZNATpFLDI12rUWbfwqmWKfuR8hwDjEh2UFAgNi9%2F%2FygxjPfAULb3DhB3PwOCvaC1JeNQX5r%2FSU%2F3cXk29CdIuju9susUEB6K%2FCdxllikDXPox4T&X-Amz-Signature=dfca2a49500d8f541a62fa98ab2c4fcfe17b30ca78b16d58d98ce1fe6777e5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGXLZFU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqWGC%2BierdXOcTQ4XM2yI%2B%2FNb%2Bmd8pRv8iI%2Fc%2Bj6pWjAiBDWtxqNh%2Fq%2FyW8I5kuC%2BTEB%2BXqZhrcIuB3D%2B%2BXER5%2FASqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdvFq4JwxVUfIt2lxKtwDZEHx1PQvV59FaFnTsC6GZf4bpYDOIE1PHp6NqHkQj3Notei3hEUAwm34iVFvaTSq1KNBWnET4zGpB7RKJrd%2F8tFLI6DzXuM43c6tuvD7h4fjt6pxC8NOA3BZJcpL5rncX5qbLOmQqDSO%2FVI6gcOKsD%2BZw87TebAgSs%2FDA7wssz%2B%2FoH9aWyPQRDz5s0CAZnOi8bpDr1ZLKaaND0rz6cwEHjSqB7aXzJVS6Os%2Bh9XZfJg4LENl7wmxbevEt5EQCaAB7tjZuPa3CCnELopjJatvUDRIu67Tv3ufB0PzCq%2F4k0%2Fp%2FrJFaR67kx9N0uk%2FiH8SoGFd%2FKRSFAEauT33rd0SHdPcyhSvK%2FNcutIbHgxu1rm%2FO9TpUFy3SuyANpqwatljWKr%2BZiLAwn6ZaOZssfj8A6hSYpv%2BFDXGuop2PGKPyMbz%2FxOcEvX%2FEjROK2E09H2G09LPCNTYL3m9lhYjfag8Fi26StEqn05AHeWdFpnNF4cktOAZ8ua0dHF%2BGoUaxXe%2FEwiF3ROY%2FK7AzAHxyZbvJYYwU%2FA9Hv4RObXd76pl1y5qlO8HpqbExZThTlnS%2FJ2KF7pj7Gd8XB4OlIw2AsAiZe6Nh5gApamDdytMPEjDgqD7WQm%2BpNpLCT95BNgw9N2ZwgY6pgGnJ%2BG9qfrLrWwFrUhnBtVwYPjoZrVZ1zxweufaRiikI2Kgkx15tWLpyFFTwlXhOMi9n9ZHeSHxKa7T90lTj2cSy5LFPE7z7aB4o9ZykgveV8hNE3xoHfksOlLi9g4Q2I%2BPoQjZ%2FUrsgw9sJODXeuBGGpMHJzJc6s%2BdLs5hCSaGjZel8e1F5glWJsbWfRuJQD8%2BHPxo0xiFIoXYe8N77mw7lUwwKu4A&X-Amz-Signature=e011bf3161dce33f7034099d95d810a5a93f04e2402e41bf46d5ad09ac52bfcc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL427X4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbW6AowhC5OS6F3vzbLk5do6ROdMKgkO%2BS1amscGk9TAiATvG4vPiatawI6ootHw0EZLecB66uQOhGiXrfB%2FiP7qyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmmErDXwi4FObUQPVKtwDgKm1GQfQ0rw3FNPVHdAnazaj6mTrNTwRmuWDN8HMvauYESbOu%2F18tZRb%2BYCnxnomdau7%2F%2B5mAfGSrqA%2Bi7aEuK9Dawuv8rvDmZPxduGWK7A%2Bd%2FVg4J3B2ngENEN0gt3%2BNtw3PbpsPip1751yJvLfy3LnqMz4NCRelqb931tPYHhQPTZVmRmlPETc5EqGMxRSDs2i3v3aGEPB6IltdKaYp7EoDko7e%2BpyB%2BdKS8AqJJMHV22x89vsIMA%2BBGGF709rVnGWdP%2FJxd4kOjHu2PFHzfRLGntv93HZKxfN0YhqIMM8%2BQAsh7rRQTwOVOdlprtqogwDs%2FksJiFjA00JambyO5emfGIHufmlkccJOFF63MmMUnZO7caZ%2FEMbAumGnhKsGIqexmqH0hGg3bejkf9xDqTLwia1uXjJt22B0bD1XMbz4ZjM7ky%2BKm54bJnBTTzcHpgoNCOOM%2FBFgHs0KBBpAa22FhjcmPOPaaOd2EiM3NX%2FtP6iQ50ytceWM6N50GKQAnHG73pxJdGkvihVBdEYhIqAJDI8aK7wZKfixWlcNkoWWvgipqmGddRrU44KryFnEYGklkUOvp7yX3VTEBl79HA57Yjc44Q9aTX3szSNJSPSl2bRlWKERM5bTkUwst6ZwgY6pgGut05akxzHYv8%2F3gBDR7eOzqNtdT8rG6yU0Ct30zQqNpF3zWVMzTconySjrCkTWo%2BOyKxOIPmniU5qAmVw%2FmNQ%2B39o4O%2Bdya96TEPVyR66qYbsx9BO8MiTPzL6E4GCSKhZB4qeJgJvXvrItgqGgQtEg6SHLsmFfz7%2B5nWzHYdZFHo%2BXobSKGFXBLQ09Zhbd7fNFxiLoPcrOS2MXC0D3dLAwDp3sfaD&X-Amz-Signature=fa05b94ca9eec09ee4ac9cf10fec88caab14fd914a4d23781a502e4a281f1dad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7VNVKZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7TTgZzke5zikaN5MiS6M4YWJ9%2FQIKAgUZidRWMc4%2FOAIhAOCehZ%2Bwr8a6vKA444eCGOzbHAfZaJFuZ0csDTqzl5wYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXVbA%2FCs4MO2P5PrMq3AMT1CM8SkRt7JUu0l0sZOSBCnabBhMNXZi35WvLIklYoUKRy%2F7r6dzlgOsp9FLraJLjevIuqPjTnVtOQIWqyMoIWuwr87Otlxfll6CsBo0VHSjl5AlR2gisjGj%2FYjDZEtFc%2FNf2jz19w92Lf6UVqGujCsW%2Fg3iJl45Z0n2jgwCXbSmvUEG2rRxhdpEc0l%2BdVMtcR0GGqykiwmrHgPrZbqKwHigvMyx%2B5hr1K%2FkviFbsiaw%2FMmA50%2FuJlNc6ZzpvrlqtXnBYmzlNT81knZ2j8pXLJqopWWMLDy%2FAO6JzePEOMQDqMeEXCKsBoVeYiH3x9CyX4Dw32SlT1F4jv7feit86RcuxD1ww4MxpIuCXponIOK4dQe3b1jnrlPbnVIPVTdT%2Bnvcb9WsCxdiOyoRK%2BOP4zTmcmtJ8GiXbL59nT4OpPi4etPYdAaoRN7ZKB14JWH0JwJ%2FxWq%2B%2BFHF6Gczip95eLOy%2FyNuAAwrOojU7CwU38UC2GZWT2YiAklKrod4zWzYias3txIlWsNQzh4Nrfpj5Hgx0ncsafHZollkgEeBz0qlCR1MaDJrNpCGY4c6KbH%2BOWJzzKwl3LEy3%2FGP97Mtk7zgKdK51pqYgS0ewbSsNvBYIWlOMuLg8Mw1WozC63ZnCBjqkARBtHiaOFGsDFPJP6RmI28RKM27zIYi%2BHzXsPQ8pTB1ENhPTyBfwo6xrkuwMpFlf0K1qE3xkVbtOhokSWNu5WhCqIYMzZhWTgbWYFSdA4pgXTZNATpFLDI12rUWbfwqmWKfuR8hwDjEh2UFAgNi9%2F%2FygxjPfAULb3DhB3PwOCvaC1JeNQX5r%2FSU%2F3cXk29CdIuju9susUEB6K%2FCdxllikDXPox4T&X-Amz-Signature=ca681aa6c4e97131ec25be957e6ca840923a60d5df524c4e7bcba00531281ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

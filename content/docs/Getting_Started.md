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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EH27PG5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCNf8HxBJ3W4AjZkum9ebxvMoCpIaOnkJmDWmffmisOCgIgRs9abB4TnNIpGethqvaonxk4FN8v66ej5Ay1TJqd8SIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGNnNNiLOcb3B2tgVSrcA4QukGoRnRW7dLiHeCSwNJShJe8Ik8e8dPeitZmT8w2d1eYoxaAsNp1B%2FMQB95WTo9Vn2K8mA%2F1k1AfMHe4jKBzOdve4ZeyLWyPoPTMEdAwUSbPk5snIPmEGx5wQqlNShRWr4pTP7ZJztuTQ7hDQ6LlVkJZsSFsILvYKn9QgWzpjFmPp4ucIK2GtFjXWulUH%2FhkcZgYBmUZOeVwCX4nBB9iUXWmbkY6l6fm80K6KHXOXUF5IMGZ4Y0c2ZKspKxR%2FVluf0TzpKIzB1f5kZ7%2F8CY8dnJe9pNB7ZIXarOcDk1Fi7Qx5yqXKvNYs3HbBIThhbQDesU5lgvfJ%2BFAImlOoWCQp6Pnk%2BfsG8PLvPtXLSnR02ylO7%2BYc3N%2FFhr6TRdKBlW5LMFNAlDIrJsmxS%2Fi4lhH%2Blp2%2BD6Bb9RGDBJIk7KlddbFRzc78pw%2B%2BR1cOQUv%2BWbZJBdFAFKVwOYMIiaj4%2BIPjNWH2GPX9SGUTVrv%2B1R9jLFr9eVQe7kVi9ZUZcRUKhJ7r8eC8V1CU1MbycLQh8clQxQ9Aj3xhPa77VNMEB94nS865cw4zibf1eTiqyyVzppxvxSginLyZYRwWrQnVbzBOE7YAYSMxKtx7ZqjHoGZYYeXbm7hXKAgrlfvVMKi7m8MGOqUBfp4W9jpjQpv4Ma7t4iXkcIlBi9g628tBMXvs07upSVdD9fViF7UdqMaF4TbAJCfSbIqahpfKM%2FdTI6GIyvdNRB02Z9EJFBB1ti2iPSMc6Z4wXz6VMAZhGBmqhciZy%2FnMeGrqhWyCsaoU9aHcc9tknz2A3MWyNHvpCuShjluPyB0tMbVfVGLFjY2CtTiwqdngVrqkHMsYLmv7HTgmxriTJJJjy7bH&X-Amz-Signature=0c37f746f89292b812cc55c80144fe923564a38cdda97a7dc817fdeab5e91a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EH27PG5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCNf8HxBJ3W4AjZkum9ebxvMoCpIaOnkJmDWmffmisOCgIgRs9abB4TnNIpGethqvaonxk4FN8v66ej5Ay1TJqd8SIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGNnNNiLOcb3B2tgVSrcA4QukGoRnRW7dLiHeCSwNJShJe8Ik8e8dPeitZmT8w2d1eYoxaAsNp1B%2FMQB95WTo9Vn2K8mA%2F1k1AfMHe4jKBzOdve4ZeyLWyPoPTMEdAwUSbPk5snIPmEGx5wQqlNShRWr4pTP7ZJztuTQ7hDQ6LlVkJZsSFsILvYKn9QgWzpjFmPp4ucIK2GtFjXWulUH%2FhkcZgYBmUZOeVwCX4nBB9iUXWmbkY6l6fm80K6KHXOXUF5IMGZ4Y0c2ZKspKxR%2FVluf0TzpKIzB1f5kZ7%2F8CY8dnJe9pNB7ZIXarOcDk1Fi7Qx5yqXKvNYs3HbBIThhbQDesU5lgvfJ%2BFAImlOoWCQp6Pnk%2BfsG8PLvPtXLSnR02ylO7%2BYc3N%2FFhr6TRdKBlW5LMFNAlDIrJsmxS%2Fi4lhH%2Blp2%2BD6Bb9RGDBJIk7KlddbFRzc78pw%2B%2BR1cOQUv%2BWbZJBdFAFKVwOYMIiaj4%2BIPjNWH2GPX9SGUTVrv%2B1R9jLFr9eVQe7kVi9ZUZcRUKhJ7r8eC8V1CU1MbycLQh8clQxQ9Aj3xhPa77VNMEB94nS865cw4zibf1eTiqyyVzppxvxSginLyZYRwWrQnVbzBOE7YAYSMxKtx7ZqjHoGZYYeXbm7hXKAgrlfvVMKi7m8MGOqUBfp4W9jpjQpv4Ma7t4iXkcIlBi9g628tBMXvs07upSVdD9fViF7UdqMaF4TbAJCfSbIqahpfKM%2FdTI6GIyvdNRB02Z9EJFBB1ti2iPSMc6Z4wXz6VMAZhGBmqhciZy%2FnMeGrqhWyCsaoU9aHcc9tknz2A3MWyNHvpCuShjluPyB0tMbVfVGLFjY2CtTiwqdngVrqkHMsYLmv7HTgmxriTJJJjy7bH&X-Amz-Signature=c2444775928ddacee56242844ddf18bea54cc5d3f06df8cc1842f5cb61d02b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EH27PG5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCNf8HxBJ3W4AjZkum9ebxvMoCpIaOnkJmDWmffmisOCgIgRs9abB4TnNIpGethqvaonxk4FN8v66ej5Ay1TJqd8SIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGNnNNiLOcb3B2tgVSrcA4QukGoRnRW7dLiHeCSwNJShJe8Ik8e8dPeitZmT8w2d1eYoxaAsNp1B%2FMQB95WTo9Vn2K8mA%2F1k1AfMHe4jKBzOdve4ZeyLWyPoPTMEdAwUSbPk5snIPmEGx5wQqlNShRWr4pTP7ZJztuTQ7hDQ6LlVkJZsSFsILvYKn9QgWzpjFmPp4ucIK2GtFjXWulUH%2FhkcZgYBmUZOeVwCX4nBB9iUXWmbkY6l6fm80K6KHXOXUF5IMGZ4Y0c2ZKspKxR%2FVluf0TzpKIzB1f5kZ7%2F8CY8dnJe9pNB7ZIXarOcDk1Fi7Qx5yqXKvNYs3HbBIThhbQDesU5lgvfJ%2BFAImlOoWCQp6Pnk%2BfsG8PLvPtXLSnR02ylO7%2BYc3N%2FFhr6TRdKBlW5LMFNAlDIrJsmxS%2Fi4lhH%2Blp2%2BD6Bb9RGDBJIk7KlddbFRzc78pw%2B%2BR1cOQUv%2BWbZJBdFAFKVwOYMIiaj4%2BIPjNWH2GPX9SGUTVrv%2B1R9jLFr9eVQe7kVi9ZUZcRUKhJ7r8eC8V1CU1MbycLQh8clQxQ9Aj3xhPa77VNMEB94nS865cw4zibf1eTiqyyVzppxvxSginLyZYRwWrQnVbzBOE7YAYSMxKtx7ZqjHoGZYYeXbm7hXKAgrlfvVMKi7m8MGOqUBfp4W9jpjQpv4Ma7t4iXkcIlBi9g628tBMXvs07upSVdD9fViF7UdqMaF4TbAJCfSbIqahpfKM%2FdTI6GIyvdNRB02Z9EJFBB1ti2iPSMc6Z4wXz6VMAZhGBmqhciZy%2FnMeGrqhWyCsaoU9aHcc9tknz2A3MWyNHvpCuShjluPyB0tMbVfVGLFjY2CtTiwqdngVrqkHMsYLmv7HTgmxriTJJJjy7bH&X-Amz-Signature=5813a797a05ce08e61e86dd3cf9e846d3736dfe21424baf5a1509ee792518e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFEGZS2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHeHCZj44CkNNjF6J9UPtH8Ucphd7cgnxfBZV2EmEfEPAiB18lP5%2Fnt57rQJFBS7qawb1tn3oWTbz2n5s33bh4MrWCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMA1kLED%2F4mwbISaXtKtwDUfVt4KZpLUjco5CoLhZ1tRGmnSfhKKpEDf83kImjtAFbQ2GNxKyDvZGz8r5lqcrUBJw0qV2WvO%2FCA703U%2BXk%2FlyqTCqPbUMWsCQxX4gkmuBLHpx2ulIA5guuCPasaDHonqPU1DfrntEZM5twQtQYF0%2BNqXEH%2BrmxngUYjZD6qbhS%2BLCOI9zcNSoyWdkHMwnLgB2JCxk8I0nzDTufNZQsM0PHeCzkQxDAFaO0w6nuyoCuKr7bexgaaGWpiPJXKzLe8IVkcorfAS%2BgKGFg0lkqc9gDG1WpezOQzIbhtQDY85q0tSEJ7jJvDfpvBQVYhH%2B9E0NvWSOwv4d%2BxqmGWWLppk8X%2BecBeKs7vkYWkJFvx3s84E5HTNlsPSrsqKJu%2Fl6dVp0PE4YmrlyCk5FGjQ28dTEieyZLR1HIXB1NXk8xNv%2FYF%2FhxAY%2F25E7Qra9CXv4g%2FcQqXVlKltQx5oZfO%2BFsRh6WbPUw9rL2OD3%2Fk3pSlrguVAkJeOpEsAnbr%2FUECeYGe0Krz0sZ878Vr3TSkW6HxqC13A%2F%2B1%2FWugg%2BN4hji2lsBJmLT%2FbqhWqsVigIL5jDmr%2BrlgS3%2FbNgEfIVs4i73mf4kQANluLfZHktjooF7E63I30n%2FBvK9CIaPJ1Mw07ubwwY6pgGLpcsmoIhwoMcIdTUyToXayZeq6KMbJtGKsiFsRwcntiSupYJkFtMsIjtClsH5oH7wSz0VjIpFqEPMSwhbuCfOafpyWRIHrQDuO5vq70yqpcaX3VQN4J7tklgd1dS5xwIjo9UfKEKnwRnt18kY0Qoib14hF2Ky5t3jO1pG3cnwnJfNyQTFlDhTCZqPEe0ZMUYv6DGr%2FE%2BoV3h%2F2rsek9dIa1%2BZTqn5&X-Amz-Signature=f051e5844b0b47b0390bc26935df3680a35abd83872d2d4f38ba7b6c2f53f427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34YVCCN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDz0xJ%2BcooWW1oXaXtyOA34QBYyAse9aEwPejVPFy1IXwIhAJnlqnOe5fv8f%2BGzHKlXo9bLgmb34uwjIasCAtAQOGCcKv8DCB0QABoMNjM3NDIzMTgzODA1Igy9CheqPTb4Ww0lIuYq3AMYWg6QzOqM0aGrxd0boJz4SvQGBCBkR%2FIVuYOqGKtLqvMyqIzkACh4MAoMKxVV7KAPHbovWbcqvDnzsyF0FRnZBcl1p4FBhc4CsCEjr6YQskS4%2FoQoMMEE9EJJpxUXf1AzjjsoV7TFp%2FpV7jiWTJKxAby%2BJaCKvY4S%2ByRnLYJO9EVCQvjla%2BMYtZMfKGFPkQDnQw6QLZzKd5ATwZryg4dQDcJ7zghjXHgkFaSsQE6FA9SqU%2FqTpHcPS4QRWM1U612WrlqZ3OxJsZQk3qrF8XW4MFVSlBi3zCRENwY1nXeEIqGBVkz%2BaBAubY6er5FiXS9B71JB4gHqWDYfdurNXJ3AgNaTOZJhzUrTlYWJ3rmQWhq6hGA3EWYSu7WWdtAMUbNsa0piVznGAgJuuzar4B80A6ImOh%2FQ9OoR%2Fjz5r8%2ByChf%2Bq4T3foP7%2FgJayESqYjUUvxOuOthY4U%2BgLCl%2BoE0Oi3URk9ONcoxYSipgXfqd3AB9zMToXKjO7G8zEPQZ0Boll%2F8GM3F%2BZq3mntlaad%2FelfzFc1DbOMWD%2F6bq3iBYxr1w%2B6Ll%2Fg7xhcNwfMHrE2mHpmoTUGnvFRkYSWvNfIEN%2BPEoxUlOf2SBh4FVO7jqvB5U5naA4Ec1DSYlgDCVvJvDBjqkAY4yUkY38QuOoiLqqkT7E1jqAUe9ffA8uMULT8ors0XSJSiacQi%2BT4kmrfmAbnm7yZT7SyrIOlAAMua8ITxmRcup1hqd7qNbttc9Yym4qVjphrhl5TMT4Dj9j76t1GtE1DY2PL51rod4HaUsWtHOE0acO%2BabiKq0plMZNrK4OzgUfHtG1494E3XBVmkEkcLP9cjc6wZQKl2BKeoNKin3OYrKQ%2FpT&X-Amz-Signature=7e24feb7a5fe71936755732a4c023479367b08c336885fb081338737c6f70364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EH27PG5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCNf8HxBJ3W4AjZkum9ebxvMoCpIaOnkJmDWmffmisOCgIgRs9abB4TnNIpGethqvaonxk4FN8v66ej5Ay1TJqd8SIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGNnNNiLOcb3B2tgVSrcA4QukGoRnRW7dLiHeCSwNJShJe8Ik8e8dPeitZmT8w2d1eYoxaAsNp1B%2FMQB95WTo9Vn2K8mA%2F1k1AfMHe4jKBzOdve4ZeyLWyPoPTMEdAwUSbPk5snIPmEGx5wQqlNShRWr4pTP7ZJztuTQ7hDQ6LlVkJZsSFsILvYKn9QgWzpjFmPp4ucIK2GtFjXWulUH%2FhkcZgYBmUZOeVwCX4nBB9iUXWmbkY6l6fm80K6KHXOXUF5IMGZ4Y0c2ZKspKxR%2FVluf0TzpKIzB1f5kZ7%2F8CY8dnJe9pNB7ZIXarOcDk1Fi7Qx5yqXKvNYs3HbBIThhbQDesU5lgvfJ%2BFAImlOoWCQp6Pnk%2BfsG8PLvPtXLSnR02ylO7%2BYc3N%2FFhr6TRdKBlW5LMFNAlDIrJsmxS%2Fi4lhH%2Blp2%2BD6Bb9RGDBJIk7KlddbFRzc78pw%2B%2BR1cOQUv%2BWbZJBdFAFKVwOYMIiaj4%2BIPjNWH2GPX9SGUTVrv%2B1R9jLFr9eVQe7kVi9ZUZcRUKhJ7r8eC8V1CU1MbycLQh8clQxQ9Aj3xhPa77VNMEB94nS865cw4zibf1eTiqyyVzppxvxSginLyZYRwWrQnVbzBOE7YAYSMxKtx7ZqjHoGZYYeXbm7hXKAgrlfvVMKi7m8MGOqUBfp4W9jpjQpv4Ma7t4iXkcIlBi9g628tBMXvs07upSVdD9fViF7UdqMaF4TbAJCfSbIqahpfKM%2FdTI6GIyvdNRB02Z9EJFBB1ti2iPSMc6Z4wXz6VMAZhGBmqhciZy%2FnMeGrqhWyCsaoU9aHcc9tknz2A3MWyNHvpCuShjluPyB0tMbVfVGLFjY2CtTiwqdngVrqkHMsYLmv7HTgmxriTJJJjy7bH&X-Amz-Signature=1169918647ede8249832b64ff1621d5506b5b97e09e7112b826218ed497963f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

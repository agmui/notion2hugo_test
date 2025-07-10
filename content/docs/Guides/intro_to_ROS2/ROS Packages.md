---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THWM7QQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7CTuA8Owze%2BGKPXlkf9zRYD4MsDgw%2FZpCT4PSxdGG1wIgGcXG0WPlBYKVfXrxf0k64Dwysb0EGRW2J0k0gZENrtMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEYoSFjkQkrJR36KCrcAzC4I52v86Llgokt9PSz0rpoKJjHJqTPOL5FTCbyTDHm%2FlgiUX9Vkx1hS%2FKJYLdQ1P3NMw7XhYT4U8rHy6dPe3%2BhuwPNUryfSJEHDt4C412YP4uYFk77JS8RgGSg5K1fzOybBaav998saenKfQaAy7nnfgsX%2F%2B5ti5%2FHapUpZn%2BKM4spcUcdON0j8yy9v4RBwctT2UAkFNgI%2FsAIKaHi0HNlnGnIcrPpQ0VwXe%2FyZckn%2BJVBVzDFv1YUA0cT0TtUIvsaJqZ%2BcHWXKuQk8qvhliqg%2BdHsCUY7Iv2GtzCAd5vKOxWg4EVroY4lGfehqykLj5Q6Ekr1JxWolJ%2FcAUDMQBFVzlwJLFiuuw5vLJed5hMusjbVqzU7RjyN3V45re0RXXTcFIWkL7BymBJ2SSuMXKTZUSkaLIdwgYEzI0N1zaB4F6YeMqrFQjo1BE0HFVsZnj7vNSepyvBfR5QdH5DuNnPnjVAUIMv6uT98LUHgpUHE1DqEJxApGWLaSElVAb73dsmrIzZGIb1VmV84kIBRKje4RuBw0jlq4xvNdGyztV2sEdy6v0S40vokpp3hdZzMWqJE5vLMW2S2ztUhDEP2Y79BahTJNYqo%2FbqvMEiy%2F3tGAcB%2FYxbWQcAfR%2FDmMMrNwMMGOqUB7bDpyPS8P3h4lb0cq8NQnRw140tcej9vEllc7f666OIjqsxt25vu%2BcLi2s%2BnQJnWsfmzj3Xl712fNftnD0NnWqHF4N13lvqy4yDCAYeuALi2ICr4VZxjktFFIPxraC2QMKUwZopojLyFUp%2BRcSHp2WjcxDCioTGSWvPICYhgP4ZUhgB7idkH3retRUjAyHCxaWbS1TKeVgMMd3Fd6kAx8qIEMDd2&X-Amz-Signature=2f7f89c7d1856ef8167e79bfb1e20ef826aed69be02d1fd58c258eb2ade78a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THWM7QQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7CTuA8Owze%2BGKPXlkf9zRYD4MsDgw%2FZpCT4PSxdGG1wIgGcXG0WPlBYKVfXrxf0k64Dwysb0EGRW2J0k0gZENrtMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEYoSFjkQkrJR36KCrcAzC4I52v86Llgokt9PSz0rpoKJjHJqTPOL5FTCbyTDHm%2FlgiUX9Vkx1hS%2FKJYLdQ1P3NMw7XhYT4U8rHy6dPe3%2BhuwPNUryfSJEHDt4C412YP4uYFk77JS8RgGSg5K1fzOybBaav998saenKfQaAy7nnfgsX%2F%2B5ti5%2FHapUpZn%2BKM4spcUcdON0j8yy9v4RBwctT2UAkFNgI%2FsAIKaHi0HNlnGnIcrPpQ0VwXe%2FyZckn%2BJVBVzDFv1YUA0cT0TtUIvsaJqZ%2BcHWXKuQk8qvhliqg%2BdHsCUY7Iv2GtzCAd5vKOxWg4EVroY4lGfehqykLj5Q6Ekr1JxWolJ%2FcAUDMQBFVzlwJLFiuuw5vLJed5hMusjbVqzU7RjyN3V45re0RXXTcFIWkL7BymBJ2SSuMXKTZUSkaLIdwgYEzI0N1zaB4F6YeMqrFQjo1BE0HFVsZnj7vNSepyvBfR5QdH5DuNnPnjVAUIMv6uT98LUHgpUHE1DqEJxApGWLaSElVAb73dsmrIzZGIb1VmV84kIBRKje4RuBw0jlq4xvNdGyztV2sEdy6v0S40vokpp3hdZzMWqJE5vLMW2S2ztUhDEP2Y79BahTJNYqo%2FbqvMEiy%2F3tGAcB%2FYxbWQcAfR%2FDmMMrNwMMGOqUB7bDpyPS8P3h4lb0cq8NQnRw140tcej9vEllc7f666OIjqsxt25vu%2BcLi2s%2BnQJnWsfmzj3Xl712fNftnD0NnWqHF4N13lvqy4yDCAYeuALi2ICr4VZxjktFFIPxraC2QMKUwZopojLyFUp%2BRcSHp2WjcxDCioTGSWvPICYhgP4ZUhgB7idkH3retRUjAyHCxaWbS1TKeVgMMd3Fd6kAx8qIEMDd2&X-Amz-Signature=855d805e018835b40723ccf3fdf5aed6fe1a3a57371533365adf1406c56b88c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THWM7QQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7CTuA8Owze%2BGKPXlkf9zRYD4MsDgw%2FZpCT4PSxdGG1wIgGcXG0WPlBYKVfXrxf0k64Dwysb0EGRW2J0k0gZENrtMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEYoSFjkQkrJR36KCrcAzC4I52v86Llgokt9PSz0rpoKJjHJqTPOL5FTCbyTDHm%2FlgiUX9Vkx1hS%2FKJYLdQ1P3NMw7XhYT4U8rHy6dPe3%2BhuwPNUryfSJEHDt4C412YP4uYFk77JS8RgGSg5K1fzOybBaav998saenKfQaAy7nnfgsX%2F%2B5ti5%2FHapUpZn%2BKM4spcUcdON0j8yy9v4RBwctT2UAkFNgI%2FsAIKaHi0HNlnGnIcrPpQ0VwXe%2FyZckn%2BJVBVzDFv1YUA0cT0TtUIvsaJqZ%2BcHWXKuQk8qvhliqg%2BdHsCUY7Iv2GtzCAd5vKOxWg4EVroY4lGfehqykLj5Q6Ekr1JxWolJ%2FcAUDMQBFVzlwJLFiuuw5vLJed5hMusjbVqzU7RjyN3V45re0RXXTcFIWkL7BymBJ2SSuMXKTZUSkaLIdwgYEzI0N1zaB4F6YeMqrFQjo1BE0HFVsZnj7vNSepyvBfR5QdH5DuNnPnjVAUIMv6uT98LUHgpUHE1DqEJxApGWLaSElVAb73dsmrIzZGIb1VmV84kIBRKje4RuBw0jlq4xvNdGyztV2sEdy6v0S40vokpp3hdZzMWqJE5vLMW2S2ztUhDEP2Y79BahTJNYqo%2FbqvMEiy%2F3tGAcB%2FYxbWQcAfR%2FDmMMrNwMMGOqUB7bDpyPS8P3h4lb0cq8NQnRw140tcej9vEllc7f666OIjqsxt25vu%2BcLi2s%2BnQJnWsfmzj3Xl712fNftnD0NnWqHF4N13lvqy4yDCAYeuALi2ICr4VZxjktFFIPxraC2QMKUwZopojLyFUp%2BRcSHp2WjcxDCioTGSWvPICYhgP4ZUhgB7idkH3retRUjAyHCxaWbS1TKeVgMMd3Fd6kAx8qIEMDd2&X-Amz-Signature=a78acea31394057803ae267500d50c4daa58452c1a555f7575db02e1119c9e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THWM7QQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7CTuA8Owze%2BGKPXlkf9zRYD4MsDgw%2FZpCT4PSxdGG1wIgGcXG0WPlBYKVfXrxf0k64Dwysb0EGRW2J0k0gZENrtMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEYoSFjkQkrJR36KCrcAzC4I52v86Llgokt9PSz0rpoKJjHJqTPOL5FTCbyTDHm%2FlgiUX9Vkx1hS%2FKJYLdQ1P3NMw7XhYT4U8rHy6dPe3%2BhuwPNUryfSJEHDt4C412YP4uYFk77JS8RgGSg5K1fzOybBaav998saenKfQaAy7nnfgsX%2F%2B5ti5%2FHapUpZn%2BKM4spcUcdON0j8yy9v4RBwctT2UAkFNgI%2FsAIKaHi0HNlnGnIcrPpQ0VwXe%2FyZckn%2BJVBVzDFv1YUA0cT0TtUIvsaJqZ%2BcHWXKuQk8qvhliqg%2BdHsCUY7Iv2GtzCAd5vKOxWg4EVroY4lGfehqykLj5Q6Ekr1JxWolJ%2FcAUDMQBFVzlwJLFiuuw5vLJed5hMusjbVqzU7RjyN3V45re0RXXTcFIWkL7BymBJ2SSuMXKTZUSkaLIdwgYEzI0N1zaB4F6YeMqrFQjo1BE0HFVsZnj7vNSepyvBfR5QdH5DuNnPnjVAUIMv6uT98LUHgpUHE1DqEJxApGWLaSElVAb73dsmrIzZGIb1VmV84kIBRKje4RuBw0jlq4xvNdGyztV2sEdy6v0S40vokpp3hdZzMWqJE5vLMW2S2ztUhDEP2Y79BahTJNYqo%2FbqvMEiy%2F3tGAcB%2FYxbWQcAfR%2FDmMMrNwMMGOqUB7bDpyPS8P3h4lb0cq8NQnRw140tcej9vEllc7f666OIjqsxt25vu%2BcLi2s%2BnQJnWsfmzj3Xl712fNftnD0NnWqHF4N13lvqy4yDCAYeuALi2ICr4VZxjktFFIPxraC2QMKUwZopojLyFUp%2BRcSHp2WjcxDCioTGSWvPICYhgP4ZUhgB7idkH3retRUjAyHCxaWbS1TKeVgMMd3Fd6kAx8qIEMDd2&X-Amz-Signature=0e813015ae561f450fb761dd8670d17758f4e542beb51d3f5342ff2cc6187d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THWM7QQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7CTuA8Owze%2BGKPXlkf9zRYD4MsDgw%2FZpCT4PSxdGG1wIgGcXG0WPlBYKVfXrxf0k64Dwysb0EGRW2J0k0gZENrtMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEYoSFjkQkrJR36KCrcAzC4I52v86Llgokt9PSz0rpoKJjHJqTPOL5FTCbyTDHm%2FlgiUX9Vkx1hS%2FKJYLdQ1P3NMw7XhYT4U8rHy6dPe3%2BhuwPNUryfSJEHDt4C412YP4uYFk77JS8RgGSg5K1fzOybBaav998saenKfQaAy7nnfgsX%2F%2B5ti5%2FHapUpZn%2BKM4spcUcdON0j8yy9v4RBwctT2UAkFNgI%2FsAIKaHi0HNlnGnIcrPpQ0VwXe%2FyZckn%2BJVBVzDFv1YUA0cT0TtUIvsaJqZ%2BcHWXKuQk8qvhliqg%2BdHsCUY7Iv2GtzCAd5vKOxWg4EVroY4lGfehqykLj5Q6Ekr1JxWolJ%2FcAUDMQBFVzlwJLFiuuw5vLJed5hMusjbVqzU7RjyN3V45re0RXXTcFIWkL7BymBJ2SSuMXKTZUSkaLIdwgYEzI0N1zaB4F6YeMqrFQjo1BE0HFVsZnj7vNSepyvBfR5QdH5DuNnPnjVAUIMv6uT98LUHgpUHE1DqEJxApGWLaSElVAb73dsmrIzZGIb1VmV84kIBRKje4RuBw0jlq4xvNdGyztV2sEdy6v0S40vokpp3hdZzMWqJE5vLMW2S2ztUhDEP2Y79BahTJNYqo%2FbqvMEiy%2F3tGAcB%2FYxbWQcAfR%2FDmMMrNwMMGOqUB7bDpyPS8P3h4lb0cq8NQnRw140tcej9vEllc7f666OIjqsxt25vu%2BcLi2s%2BnQJnWsfmzj3Xl712fNftnD0NnWqHF4N13lvqy4yDCAYeuALi2ICr4VZxjktFFIPxraC2QMKUwZopojLyFUp%2BRcSHp2WjcxDCioTGSWvPICYhgP4ZUhgB7idkH3retRUjAyHCxaWbS1TKeVgMMd3Fd6kAx8qIEMDd2&X-Amz-Signature=634b75e98693c2c35489f50846011c52227cfa329303332d065e101ba0dbf943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THWM7QQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7CTuA8Owze%2BGKPXlkf9zRYD4MsDgw%2FZpCT4PSxdGG1wIgGcXG0WPlBYKVfXrxf0k64Dwysb0EGRW2J0k0gZENrtMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEYoSFjkQkrJR36KCrcAzC4I52v86Llgokt9PSz0rpoKJjHJqTPOL5FTCbyTDHm%2FlgiUX9Vkx1hS%2FKJYLdQ1P3NMw7XhYT4U8rHy6dPe3%2BhuwPNUryfSJEHDt4C412YP4uYFk77JS8RgGSg5K1fzOybBaav998saenKfQaAy7nnfgsX%2F%2B5ti5%2FHapUpZn%2BKM4spcUcdON0j8yy9v4RBwctT2UAkFNgI%2FsAIKaHi0HNlnGnIcrPpQ0VwXe%2FyZckn%2BJVBVzDFv1YUA0cT0TtUIvsaJqZ%2BcHWXKuQk8qvhliqg%2BdHsCUY7Iv2GtzCAd5vKOxWg4EVroY4lGfehqykLj5Q6Ekr1JxWolJ%2FcAUDMQBFVzlwJLFiuuw5vLJed5hMusjbVqzU7RjyN3V45re0RXXTcFIWkL7BymBJ2SSuMXKTZUSkaLIdwgYEzI0N1zaB4F6YeMqrFQjo1BE0HFVsZnj7vNSepyvBfR5QdH5DuNnPnjVAUIMv6uT98LUHgpUHE1DqEJxApGWLaSElVAb73dsmrIzZGIb1VmV84kIBRKje4RuBw0jlq4xvNdGyztV2sEdy6v0S40vokpp3hdZzMWqJE5vLMW2S2ztUhDEP2Y79BahTJNYqo%2FbqvMEiy%2F3tGAcB%2FYxbWQcAfR%2FDmMMrNwMMGOqUB7bDpyPS8P3h4lb0cq8NQnRw140tcej9vEllc7f666OIjqsxt25vu%2BcLi2s%2BnQJnWsfmzj3Xl712fNftnD0NnWqHF4N13lvqy4yDCAYeuALi2ICr4VZxjktFFIPxraC2QMKUwZopojLyFUp%2BRcSHp2WjcxDCioTGSWvPICYhgP4ZUhgB7idkH3retRUjAyHCxaWbS1TKeVgMMd3Fd6kAx8qIEMDd2&X-Amz-Signature=9e544f68c49a59d5911c724933a04c1fd4660c5246dafb52f59b0abeb846d55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THWM7QQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7CTuA8Owze%2BGKPXlkf9zRYD4MsDgw%2FZpCT4PSxdGG1wIgGcXG0WPlBYKVfXrxf0k64Dwysb0EGRW2J0k0gZENrtMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEYoSFjkQkrJR36KCrcAzC4I52v86Llgokt9PSz0rpoKJjHJqTPOL5FTCbyTDHm%2FlgiUX9Vkx1hS%2FKJYLdQ1P3NMw7XhYT4U8rHy6dPe3%2BhuwPNUryfSJEHDt4C412YP4uYFk77JS8RgGSg5K1fzOybBaav998saenKfQaAy7nnfgsX%2F%2B5ti5%2FHapUpZn%2BKM4spcUcdON0j8yy9v4RBwctT2UAkFNgI%2FsAIKaHi0HNlnGnIcrPpQ0VwXe%2FyZckn%2BJVBVzDFv1YUA0cT0TtUIvsaJqZ%2BcHWXKuQk8qvhliqg%2BdHsCUY7Iv2GtzCAd5vKOxWg4EVroY4lGfehqykLj5Q6Ekr1JxWolJ%2FcAUDMQBFVzlwJLFiuuw5vLJed5hMusjbVqzU7RjyN3V45re0RXXTcFIWkL7BymBJ2SSuMXKTZUSkaLIdwgYEzI0N1zaB4F6YeMqrFQjo1BE0HFVsZnj7vNSepyvBfR5QdH5DuNnPnjVAUIMv6uT98LUHgpUHE1DqEJxApGWLaSElVAb73dsmrIzZGIb1VmV84kIBRKje4RuBw0jlq4xvNdGyztV2sEdy6v0S40vokpp3hdZzMWqJE5vLMW2S2ztUhDEP2Y79BahTJNYqo%2FbqvMEiy%2F3tGAcB%2FYxbWQcAfR%2FDmMMrNwMMGOqUB7bDpyPS8P3h4lb0cq8NQnRw140tcej9vEllc7f666OIjqsxt25vu%2BcLi2s%2BnQJnWsfmzj3Xl712fNftnD0NnWqHF4N13lvqy4yDCAYeuALi2ICr4VZxjktFFIPxraC2QMKUwZopojLyFUp%2BRcSHp2WjcxDCioTGSWvPICYhgP4ZUhgB7idkH3retRUjAyHCxaWbS1TKeVgMMd3Fd6kAx8qIEMDd2&X-Amz-Signature=3c4b810c158d2ef17a0aa75c85d71c7c0fd96e713a67ad9a0105c5145d977367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

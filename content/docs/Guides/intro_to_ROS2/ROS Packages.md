---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRDZZF5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICbtwbq5TDsbnkBOjNP8vlO6yL5xXPMerQB5HmzIFFEPAiAO8aN%2FjoHWjCHhJrWqKgqGQvndDqYUy7F9J5kiq9Xn2ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMCUgqZdiVbqqlk%2FwKtwDvZ8fn76VrRTBblkLys1LZ0pxanGjUf6qAACowYV37sVmCkUSqaBysbz7QQa9Pi%2Bfownu49K%2Bh%2F14QuTgFgZXkNMoRXH9z2LVoaEz4Nqrm6euBu7whpAgcjDGtsbzrBPoML%2BAwvP7RMXWJxSK5xo62W25R9Y82%2Fxajts7I6YV%2B1z68dx2ugbgiiohacpO6OPrBOHRhfWmm6C0Be3RowS%2FN1AqpXirUlV1%2BaWNOY%2BAUcDMB%2FccZJqoQRaYY7lb8GQhut8jmoX9VjL19xEPKbWhH3O9w6h16RKEUmR9K4vfyUcY0gjsfrGiDG86%2FUpK%2FBHExOREGL6iiWBzt1LVtlCxQW1EQOTpA3SZ5Wx48Cmj2dU%2FYBaMguyjVGtJ5Rlt20U3uqpd%2B81nys5JiRNgMvw9v4nuDgnua8RN76gxg4UTjtGf5tDUGglGRxd%2BvbQDGGZ0I%2BIgL0D6TXBvQU3vk9hpcHV2A44YmruAmzB%2FmLkzwqACFZG5hgABhwFlKYR%2BpsNZ6zPOFlrEinjGX3xIIHRaN9dHj6IHOf8aCGQbHimig51GPsn7RUOEFK%2BxL%2B4qM2YauRdlGv4xIvoqHxAkF8yvmnQ4zTj5iRzVg4lB5sK8oX0MlDih7kSQ%2BFZ%2FErwwuounwwY6pgE0yTcacna%2FrLy%2BRxceXFAmP6Qcubnt2jAapR8XFmdAgLtq1iwZlLX2ZOvQt5JfzUgmCemM%2BgFdcpCU2%2F5wZN7XLk1nM2Hw%2BmkItbJo0EpPBvUhjMRgRy41M1mhQDcjF58QLxkaBCE%2F%2Flo8qHFozNzYZY47aKLM9zqC1DPc7sWvLNpj8pHJJAnYPX2QXmnuNaB2SK9YXoo1m9XLtO0H0hu26AWW75qL&X-Amz-Signature=42d9320b790b01e9511a601121b46a6e3896b2cd357bf001340fe10b419fd762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRDZZF5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICbtwbq5TDsbnkBOjNP8vlO6yL5xXPMerQB5HmzIFFEPAiAO8aN%2FjoHWjCHhJrWqKgqGQvndDqYUy7F9J5kiq9Xn2ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMCUgqZdiVbqqlk%2FwKtwDvZ8fn76VrRTBblkLys1LZ0pxanGjUf6qAACowYV37sVmCkUSqaBysbz7QQa9Pi%2Bfownu49K%2Bh%2F14QuTgFgZXkNMoRXH9z2LVoaEz4Nqrm6euBu7whpAgcjDGtsbzrBPoML%2BAwvP7RMXWJxSK5xo62W25R9Y82%2Fxajts7I6YV%2B1z68dx2ugbgiiohacpO6OPrBOHRhfWmm6C0Be3RowS%2FN1AqpXirUlV1%2BaWNOY%2BAUcDMB%2FccZJqoQRaYY7lb8GQhut8jmoX9VjL19xEPKbWhH3O9w6h16RKEUmR9K4vfyUcY0gjsfrGiDG86%2FUpK%2FBHExOREGL6iiWBzt1LVtlCxQW1EQOTpA3SZ5Wx48Cmj2dU%2FYBaMguyjVGtJ5Rlt20U3uqpd%2B81nys5JiRNgMvw9v4nuDgnua8RN76gxg4UTjtGf5tDUGglGRxd%2BvbQDGGZ0I%2BIgL0D6TXBvQU3vk9hpcHV2A44YmruAmzB%2FmLkzwqACFZG5hgABhwFlKYR%2BpsNZ6zPOFlrEinjGX3xIIHRaN9dHj6IHOf8aCGQbHimig51GPsn7RUOEFK%2BxL%2B4qM2YauRdlGv4xIvoqHxAkF8yvmnQ4zTj5iRzVg4lB5sK8oX0MlDih7kSQ%2BFZ%2FErwwuounwwY6pgE0yTcacna%2FrLy%2BRxceXFAmP6Qcubnt2jAapR8XFmdAgLtq1iwZlLX2ZOvQt5JfzUgmCemM%2BgFdcpCU2%2F5wZN7XLk1nM2Hw%2BmkItbJo0EpPBvUhjMRgRy41M1mhQDcjF58QLxkaBCE%2F%2Flo8qHFozNzYZY47aKLM9zqC1DPc7sWvLNpj8pHJJAnYPX2QXmnuNaB2SK9YXoo1m9XLtO0H0hu26AWW75qL&X-Amz-Signature=818a46925d5a656b921a0e966127d931d8ba1f318d1f029467a009c3738d5c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRDZZF5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICbtwbq5TDsbnkBOjNP8vlO6yL5xXPMerQB5HmzIFFEPAiAO8aN%2FjoHWjCHhJrWqKgqGQvndDqYUy7F9J5kiq9Xn2ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMCUgqZdiVbqqlk%2FwKtwDvZ8fn76VrRTBblkLys1LZ0pxanGjUf6qAACowYV37sVmCkUSqaBysbz7QQa9Pi%2Bfownu49K%2Bh%2F14QuTgFgZXkNMoRXH9z2LVoaEz4Nqrm6euBu7whpAgcjDGtsbzrBPoML%2BAwvP7RMXWJxSK5xo62W25R9Y82%2Fxajts7I6YV%2B1z68dx2ugbgiiohacpO6OPrBOHRhfWmm6C0Be3RowS%2FN1AqpXirUlV1%2BaWNOY%2BAUcDMB%2FccZJqoQRaYY7lb8GQhut8jmoX9VjL19xEPKbWhH3O9w6h16RKEUmR9K4vfyUcY0gjsfrGiDG86%2FUpK%2FBHExOREGL6iiWBzt1LVtlCxQW1EQOTpA3SZ5Wx48Cmj2dU%2FYBaMguyjVGtJ5Rlt20U3uqpd%2B81nys5JiRNgMvw9v4nuDgnua8RN76gxg4UTjtGf5tDUGglGRxd%2BvbQDGGZ0I%2BIgL0D6TXBvQU3vk9hpcHV2A44YmruAmzB%2FmLkzwqACFZG5hgABhwFlKYR%2BpsNZ6zPOFlrEinjGX3xIIHRaN9dHj6IHOf8aCGQbHimig51GPsn7RUOEFK%2BxL%2B4qM2YauRdlGv4xIvoqHxAkF8yvmnQ4zTj5iRzVg4lB5sK8oX0MlDih7kSQ%2BFZ%2FErwwuounwwY6pgE0yTcacna%2FrLy%2BRxceXFAmP6Qcubnt2jAapR8XFmdAgLtq1iwZlLX2ZOvQt5JfzUgmCemM%2BgFdcpCU2%2F5wZN7XLk1nM2Hw%2BmkItbJo0EpPBvUhjMRgRy41M1mhQDcjF58QLxkaBCE%2F%2Flo8qHFozNzYZY47aKLM9zqC1DPc7sWvLNpj8pHJJAnYPX2QXmnuNaB2SK9YXoo1m9XLtO0H0hu26AWW75qL&X-Amz-Signature=f70a3ac339bcb05307e2920f0fd28240aa56d84d45d2721e2cf512130bd017bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRDZZF5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICbtwbq5TDsbnkBOjNP8vlO6yL5xXPMerQB5HmzIFFEPAiAO8aN%2FjoHWjCHhJrWqKgqGQvndDqYUy7F9J5kiq9Xn2ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMCUgqZdiVbqqlk%2FwKtwDvZ8fn76VrRTBblkLys1LZ0pxanGjUf6qAACowYV37sVmCkUSqaBysbz7QQa9Pi%2Bfownu49K%2Bh%2F14QuTgFgZXkNMoRXH9z2LVoaEz4Nqrm6euBu7whpAgcjDGtsbzrBPoML%2BAwvP7RMXWJxSK5xo62W25R9Y82%2Fxajts7I6YV%2B1z68dx2ugbgiiohacpO6OPrBOHRhfWmm6C0Be3RowS%2FN1AqpXirUlV1%2BaWNOY%2BAUcDMB%2FccZJqoQRaYY7lb8GQhut8jmoX9VjL19xEPKbWhH3O9w6h16RKEUmR9K4vfyUcY0gjsfrGiDG86%2FUpK%2FBHExOREGL6iiWBzt1LVtlCxQW1EQOTpA3SZ5Wx48Cmj2dU%2FYBaMguyjVGtJ5Rlt20U3uqpd%2B81nys5JiRNgMvw9v4nuDgnua8RN76gxg4UTjtGf5tDUGglGRxd%2BvbQDGGZ0I%2BIgL0D6TXBvQU3vk9hpcHV2A44YmruAmzB%2FmLkzwqACFZG5hgABhwFlKYR%2BpsNZ6zPOFlrEinjGX3xIIHRaN9dHj6IHOf8aCGQbHimig51GPsn7RUOEFK%2BxL%2B4qM2YauRdlGv4xIvoqHxAkF8yvmnQ4zTj5iRzVg4lB5sK8oX0MlDih7kSQ%2BFZ%2FErwwuounwwY6pgE0yTcacna%2FrLy%2BRxceXFAmP6Qcubnt2jAapR8XFmdAgLtq1iwZlLX2ZOvQt5JfzUgmCemM%2BgFdcpCU2%2F5wZN7XLk1nM2Hw%2BmkItbJo0EpPBvUhjMRgRy41M1mhQDcjF58QLxkaBCE%2F%2Flo8qHFozNzYZY47aKLM9zqC1DPc7sWvLNpj8pHJJAnYPX2QXmnuNaB2SK9YXoo1m9XLtO0H0hu26AWW75qL&X-Amz-Signature=15c000b927629b06f4ecdcaa370f85d697f15d25559ccc5691daf55001229c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRDZZF5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICbtwbq5TDsbnkBOjNP8vlO6yL5xXPMerQB5HmzIFFEPAiAO8aN%2FjoHWjCHhJrWqKgqGQvndDqYUy7F9J5kiq9Xn2ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMCUgqZdiVbqqlk%2FwKtwDvZ8fn76VrRTBblkLys1LZ0pxanGjUf6qAACowYV37sVmCkUSqaBysbz7QQa9Pi%2Bfownu49K%2Bh%2F14QuTgFgZXkNMoRXH9z2LVoaEz4Nqrm6euBu7whpAgcjDGtsbzrBPoML%2BAwvP7RMXWJxSK5xo62W25R9Y82%2Fxajts7I6YV%2B1z68dx2ugbgiiohacpO6OPrBOHRhfWmm6C0Be3RowS%2FN1AqpXirUlV1%2BaWNOY%2BAUcDMB%2FccZJqoQRaYY7lb8GQhut8jmoX9VjL19xEPKbWhH3O9w6h16RKEUmR9K4vfyUcY0gjsfrGiDG86%2FUpK%2FBHExOREGL6iiWBzt1LVtlCxQW1EQOTpA3SZ5Wx48Cmj2dU%2FYBaMguyjVGtJ5Rlt20U3uqpd%2B81nys5JiRNgMvw9v4nuDgnua8RN76gxg4UTjtGf5tDUGglGRxd%2BvbQDGGZ0I%2BIgL0D6TXBvQU3vk9hpcHV2A44YmruAmzB%2FmLkzwqACFZG5hgABhwFlKYR%2BpsNZ6zPOFlrEinjGX3xIIHRaN9dHj6IHOf8aCGQbHimig51GPsn7RUOEFK%2BxL%2B4qM2YauRdlGv4xIvoqHxAkF8yvmnQ4zTj5iRzVg4lB5sK8oX0MlDih7kSQ%2BFZ%2FErwwuounwwY6pgE0yTcacna%2FrLy%2BRxceXFAmP6Qcubnt2jAapR8XFmdAgLtq1iwZlLX2ZOvQt5JfzUgmCemM%2BgFdcpCU2%2F5wZN7XLk1nM2Hw%2BmkItbJo0EpPBvUhjMRgRy41M1mhQDcjF58QLxkaBCE%2F%2Flo8qHFozNzYZY47aKLM9zqC1DPc7sWvLNpj8pHJJAnYPX2QXmnuNaB2SK9YXoo1m9XLtO0H0hu26AWW75qL&X-Amz-Signature=f963829281783d19acc07cc39fbbbe5f4887508fca0e827d98e6e2fff0c2747f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRDZZF5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICbtwbq5TDsbnkBOjNP8vlO6yL5xXPMerQB5HmzIFFEPAiAO8aN%2FjoHWjCHhJrWqKgqGQvndDqYUy7F9J5kiq9Xn2ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMCUgqZdiVbqqlk%2FwKtwDvZ8fn76VrRTBblkLys1LZ0pxanGjUf6qAACowYV37sVmCkUSqaBysbz7QQa9Pi%2Bfownu49K%2Bh%2F14QuTgFgZXkNMoRXH9z2LVoaEz4Nqrm6euBu7whpAgcjDGtsbzrBPoML%2BAwvP7RMXWJxSK5xo62W25R9Y82%2Fxajts7I6YV%2B1z68dx2ugbgiiohacpO6OPrBOHRhfWmm6C0Be3RowS%2FN1AqpXirUlV1%2BaWNOY%2BAUcDMB%2FccZJqoQRaYY7lb8GQhut8jmoX9VjL19xEPKbWhH3O9w6h16RKEUmR9K4vfyUcY0gjsfrGiDG86%2FUpK%2FBHExOREGL6iiWBzt1LVtlCxQW1EQOTpA3SZ5Wx48Cmj2dU%2FYBaMguyjVGtJ5Rlt20U3uqpd%2B81nys5JiRNgMvw9v4nuDgnua8RN76gxg4UTjtGf5tDUGglGRxd%2BvbQDGGZ0I%2BIgL0D6TXBvQU3vk9hpcHV2A44YmruAmzB%2FmLkzwqACFZG5hgABhwFlKYR%2BpsNZ6zPOFlrEinjGX3xIIHRaN9dHj6IHOf8aCGQbHimig51GPsn7RUOEFK%2BxL%2B4qM2YauRdlGv4xIvoqHxAkF8yvmnQ4zTj5iRzVg4lB5sK8oX0MlDih7kSQ%2BFZ%2FErwwuounwwY6pgE0yTcacna%2FrLy%2BRxceXFAmP6Qcubnt2jAapR8XFmdAgLtq1iwZlLX2ZOvQt5JfzUgmCemM%2BgFdcpCU2%2F5wZN7XLk1nM2Hw%2BmkItbJo0EpPBvUhjMRgRy41M1mhQDcjF58QLxkaBCE%2F%2Flo8qHFozNzYZY47aKLM9zqC1DPc7sWvLNpj8pHJJAnYPX2QXmnuNaB2SK9YXoo1m9XLtO0H0hu26AWW75qL&X-Amz-Signature=e618574ff09259447b86525f80f7b34a616828dcb85933323abd307005ddcfa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRDZZF5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICbtwbq5TDsbnkBOjNP8vlO6yL5xXPMerQB5HmzIFFEPAiAO8aN%2FjoHWjCHhJrWqKgqGQvndDqYUy7F9J5kiq9Xn2ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMCUgqZdiVbqqlk%2FwKtwDvZ8fn76VrRTBblkLys1LZ0pxanGjUf6qAACowYV37sVmCkUSqaBysbz7QQa9Pi%2Bfownu49K%2Bh%2F14QuTgFgZXkNMoRXH9z2LVoaEz4Nqrm6euBu7whpAgcjDGtsbzrBPoML%2BAwvP7RMXWJxSK5xo62W25R9Y82%2Fxajts7I6YV%2B1z68dx2ugbgiiohacpO6OPrBOHRhfWmm6C0Be3RowS%2FN1AqpXirUlV1%2BaWNOY%2BAUcDMB%2FccZJqoQRaYY7lb8GQhut8jmoX9VjL19xEPKbWhH3O9w6h16RKEUmR9K4vfyUcY0gjsfrGiDG86%2FUpK%2FBHExOREGL6iiWBzt1LVtlCxQW1EQOTpA3SZ5Wx48Cmj2dU%2FYBaMguyjVGtJ5Rlt20U3uqpd%2B81nys5JiRNgMvw9v4nuDgnua8RN76gxg4UTjtGf5tDUGglGRxd%2BvbQDGGZ0I%2BIgL0D6TXBvQU3vk9hpcHV2A44YmruAmzB%2FmLkzwqACFZG5hgABhwFlKYR%2BpsNZ6zPOFlrEinjGX3xIIHRaN9dHj6IHOf8aCGQbHimig51GPsn7RUOEFK%2BxL%2B4qM2YauRdlGv4xIvoqHxAkF8yvmnQ4zTj5iRzVg4lB5sK8oX0MlDih7kSQ%2BFZ%2FErwwuounwwY6pgE0yTcacna%2FrLy%2BRxceXFAmP6Qcubnt2jAapR8XFmdAgLtq1iwZlLX2ZOvQt5JfzUgmCemM%2BgFdcpCU2%2F5wZN7XLk1nM2Hw%2BmkItbJo0EpPBvUhjMRgRy41M1mhQDcjF58QLxkaBCE%2F%2Flo8qHFozNzYZY47aKLM9zqC1DPc7sWvLNpj8pHJJAnYPX2QXmnuNaB2SK9YXoo1m9XLtO0H0hu26AWW75qL&X-Amz-Signature=ad40ac0258528665fa2af2f134000c6918e5a51d43aab07961e0790effd23888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

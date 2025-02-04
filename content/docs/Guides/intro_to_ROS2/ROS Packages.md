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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVOEYMV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHtM3p67qm%2FZYAXziMOp4R%2BvAjh6Ld8ScY1Iuv2U70zIAiEAwpgI1G520T%2FsxCsVrFoQFNnPQT5D5tUixuI6I6fpCscq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAzB33EiD2jcGdvK9SrcA%2FDK64GaKcnRY83PGdZY7%2FvEsEfwTksNE6QE%2Bf7FXbzNA9GDGiJlVoxD4c%2Bm0BLR0P3h1rKS2hhsSrO8x3uPIn4RGaP%2FGVeg0XzWIY6kADJTjbY1tNKGU6rqqqXt4s5W6F9EM%2F9O67zlZwRxvxrMNkCs8b76YQEZwRbuPdkbsGEMysO%2F8TbPnL%2Bc7Td6pCiKc%2BjpGG%2F77TJm8lqay%2BTNestePtUDEslV73TQCM651KVwmVuTjqZujDoQMYYQP1iA8u66HfCBTpwoJdYPiibCakn7k5dJTYDiDDrv4z17xxlx9s4jEv16htUFmG%2B38qA60CqsJxJZlqS%2BwcJ07UYaQRJZWs842jPs799uZIKtxedu0T9IQEJb1xHhuFBh9v8NhhBGZKr3X%2FjLCWRTNNjK3AtGdbGv%2BrNnrDCAzIxHUP6zRjIXDMVLCBIjaZXm8kGpkidx9pX6YyZwA4feenhZ7KTJVZ%2BBp9G0Xk4cGwIk9iZRFLZ%2BGlUcAqZAy0XXiL8ScYR0iDVYGQEb3DFuQzOYWSgTXTrG6tX8BnyOMjvuj7dGEooUPs8o2M6AXMQUkABEZ66iQPDUzEvHeGbQwIFyNcOvc2cZ5l6vwhK%2FvjBKV4A8g%2FMviEBnHHxvSjJeMIzoiL0GOqUBlpL9VJHx8eE0poeMzN6yTaoaFnkjR%2F5iO5F3rY802pgdlB1NEMmDYH5%2FEx6U3dYo9EpUpqoJFRqeOUHPpgTHb5NR995PQ35E1h4a%2Bc1Gt%2FxOE6gfn6kNAgZk5zWgmxKpTKsxojk5gs6I%2FCT6VvtXVJ8bkImWSjywTlxZZ6tEpaY1PSC0VrPyAOrnqm540I7ohh52zZydYdlc2DvDdo2pmlttbmmT&X-Amz-Signature=a181719ea6ca03637fe8d03f981813e68d0adbeb15f4b523787b3e7f9290c605&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVOEYMV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHtM3p67qm%2FZYAXziMOp4R%2BvAjh6Ld8ScY1Iuv2U70zIAiEAwpgI1G520T%2FsxCsVrFoQFNnPQT5D5tUixuI6I6fpCscq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAzB33EiD2jcGdvK9SrcA%2FDK64GaKcnRY83PGdZY7%2FvEsEfwTksNE6QE%2Bf7FXbzNA9GDGiJlVoxD4c%2Bm0BLR0P3h1rKS2hhsSrO8x3uPIn4RGaP%2FGVeg0XzWIY6kADJTjbY1tNKGU6rqqqXt4s5W6F9EM%2F9O67zlZwRxvxrMNkCs8b76YQEZwRbuPdkbsGEMysO%2F8TbPnL%2Bc7Td6pCiKc%2BjpGG%2F77TJm8lqay%2BTNestePtUDEslV73TQCM651KVwmVuTjqZujDoQMYYQP1iA8u66HfCBTpwoJdYPiibCakn7k5dJTYDiDDrv4z17xxlx9s4jEv16htUFmG%2B38qA60CqsJxJZlqS%2BwcJ07UYaQRJZWs842jPs799uZIKtxedu0T9IQEJb1xHhuFBh9v8NhhBGZKr3X%2FjLCWRTNNjK3AtGdbGv%2BrNnrDCAzIxHUP6zRjIXDMVLCBIjaZXm8kGpkidx9pX6YyZwA4feenhZ7KTJVZ%2BBp9G0Xk4cGwIk9iZRFLZ%2BGlUcAqZAy0XXiL8ScYR0iDVYGQEb3DFuQzOYWSgTXTrG6tX8BnyOMjvuj7dGEooUPs8o2M6AXMQUkABEZ66iQPDUzEvHeGbQwIFyNcOvc2cZ5l6vwhK%2FvjBKV4A8g%2FMviEBnHHxvSjJeMIzoiL0GOqUBlpL9VJHx8eE0poeMzN6yTaoaFnkjR%2F5iO5F3rY802pgdlB1NEMmDYH5%2FEx6U3dYo9EpUpqoJFRqeOUHPpgTHb5NR995PQ35E1h4a%2Bc1Gt%2FxOE6gfn6kNAgZk5zWgmxKpTKsxojk5gs6I%2FCT6VvtXVJ8bkImWSjywTlxZZ6tEpaY1PSC0VrPyAOrnqm540I7ohh52zZydYdlc2DvDdo2pmlttbmmT&X-Amz-Signature=45e740531ce2ced72ea352e13cc847aaf408809fa219d632c1a9030a60f16d19&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVOEYMV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHtM3p67qm%2FZYAXziMOp4R%2BvAjh6Ld8ScY1Iuv2U70zIAiEAwpgI1G520T%2FsxCsVrFoQFNnPQT5D5tUixuI6I6fpCscq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAzB33EiD2jcGdvK9SrcA%2FDK64GaKcnRY83PGdZY7%2FvEsEfwTksNE6QE%2Bf7FXbzNA9GDGiJlVoxD4c%2Bm0BLR0P3h1rKS2hhsSrO8x3uPIn4RGaP%2FGVeg0XzWIY6kADJTjbY1tNKGU6rqqqXt4s5W6F9EM%2F9O67zlZwRxvxrMNkCs8b76YQEZwRbuPdkbsGEMysO%2F8TbPnL%2Bc7Td6pCiKc%2BjpGG%2F77TJm8lqay%2BTNestePtUDEslV73TQCM651KVwmVuTjqZujDoQMYYQP1iA8u66HfCBTpwoJdYPiibCakn7k5dJTYDiDDrv4z17xxlx9s4jEv16htUFmG%2B38qA60CqsJxJZlqS%2BwcJ07UYaQRJZWs842jPs799uZIKtxedu0T9IQEJb1xHhuFBh9v8NhhBGZKr3X%2FjLCWRTNNjK3AtGdbGv%2BrNnrDCAzIxHUP6zRjIXDMVLCBIjaZXm8kGpkidx9pX6YyZwA4feenhZ7KTJVZ%2BBp9G0Xk4cGwIk9iZRFLZ%2BGlUcAqZAy0XXiL8ScYR0iDVYGQEb3DFuQzOYWSgTXTrG6tX8BnyOMjvuj7dGEooUPs8o2M6AXMQUkABEZ66iQPDUzEvHeGbQwIFyNcOvc2cZ5l6vwhK%2FvjBKV4A8g%2FMviEBnHHxvSjJeMIzoiL0GOqUBlpL9VJHx8eE0poeMzN6yTaoaFnkjR%2F5iO5F3rY802pgdlB1NEMmDYH5%2FEx6U3dYo9EpUpqoJFRqeOUHPpgTHb5NR995PQ35E1h4a%2Bc1Gt%2FxOE6gfn6kNAgZk5zWgmxKpTKsxojk5gs6I%2FCT6VvtXVJ8bkImWSjywTlxZZ6tEpaY1PSC0VrPyAOrnqm540I7ohh52zZydYdlc2DvDdo2pmlttbmmT&X-Amz-Signature=38361f998503d20d598a40b20d07ea1b9c8c4c24da17712e97dcaa837271651f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVOEYMV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHtM3p67qm%2FZYAXziMOp4R%2BvAjh6Ld8ScY1Iuv2U70zIAiEAwpgI1G520T%2FsxCsVrFoQFNnPQT5D5tUixuI6I6fpCscq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAzB33EiD2jcGdvK9SrcA%2FDK64GaKcnRY83PGdZY7%2FvEsEfwTksNE6QE%2Bf7FXbzNA9GDGiJlVoxD4c%2Bm0BLR0P3h1rKS2hhsSrO8x3uPIn4RGaP%2FGVeg0XzWIY6kADJTjbY1tNKGU6rqqqXt4s5W6F9EM%2F9O67zlZwRxvxrMNkCs8b76YQEZwRbuPdkbsGEMysO%2F8TbPnL%2Bc7Td6pCiKc%2BjpGG%2F77TJm8lqay%2BTNestePtUDEslV73TQCM651KVwmVuTjqZujDoQMYYQP1iA8u66HfCBTpwoJdYPiibCakn7k5dJTYDiDDrv4z17xxlx9s4jEv16htUFmG%2B38qA60CqsJxJZlqS%2BwcJ07UYaQRJZWs842jPs799uZIKtxedu0T9IQEJb1xHhuFBh9v8NhhBGZKr3X%2FjLCWRTNNjK3AtGdbGv%2BrNnrDCAzIxHUP6zRjIXDMVLCBIjaZXm8kGpkidx9pX6YyZwA4feenhZ7KTJVZ%2BBp9G0Xk4cGwIk9iZRFLZ%2BGlUcAqZAy0XXiL8ScYR0iDVYGQEb3DFuQzOYWSgTXTrG6tX8BnyOMjvuj7dGEooUPs8o2M6AXMQUkABEZ66iQPDUzEvHeGbQwIFyNcOvc2cZ5l6vwhK%2FvjBKV4A8g%2FMviEBnHHxvSjJeMIzoiL0GOqUBlpL9VJHx8eE0poeMzN6yTaoaFnkjR%2F5iO5F3rY802pgdlB1NEMmDYH5%2FEx6U3dYo9EpUpqoJFRqeOUHPpgTHb5NR995PQ35E1h4a%2Bc1Gt%2FxOE6gfn6kNAgZk5zWgmxKpTKsxojk5gs6I%2FCT6VvtXVJ8bkImWSjywTlxZZ6tEpaY1PSC0VrPyAOrnqm540I7ohh52zZydYdlc2DvDdo2pmlttbmmT&X-Amz-Signature=1c73403baf2a4255e28631c30fd3d1bb6d6307bdfc83c16b1fba10a96d1a5431&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVOEYMV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHtM3p67qm%2FZYAXziMOp4R%2BvAjh6Ld8ScY1Iuv2U70zIAiEAwpgI1G520T%2FsxCsVrFoQFNnPQT5D5tUixuI6I6fpCscq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAzB33EiD2jcGdvK9SrcA%2FDK64GaKcnRY83PGdZY7%2FvEsEfwTksNE6QE%2Bf7FXbzNA9GDGiJlVoxD4c%2Bm0BLR0P3h1rKS2hhsSrO8x3uPIn4RGaP%2FGVeg0XzWIY6kADJTjbY1tNKGU6rqqqXt4s5W6F9EM%2F9O67zlZwRxvxrMNkCs8b76YQEZwRbuPdkbsGEMysO%2F8TbPnL%2Bc7Td6pCiKc%2BjpGG%2F77TJm8lqay%2BTNestePtUDEslV73TQCM651KVwmVuTjqZujDoQMYYQP1iA8u66HfCBTpwoJdYPiibCakn7k5dJTYDiDDrv4z17xxlx9s4jEv16htUFmG%2B38qA60CqsJxJZlqS%2BwcJ07UYaQRJZWs842jPs799uZIKtxedu0T9IQEJb1xHhuFBh9v8NhhBGZKr3X%2FjLCWRTNNjK3AtGdbGv%2BrNnrDCAzIxHUP6zRjIXDMVLCBIjaZXm8kGpkidx9pX6YyZwA4feenhZ7KTJVZ%2BBp9G0Xk4cGwIk9iZRFLZ%2BGlUcAqZAy0XXiL8ScYR0iDVYGQEb3DFuQzOYWSgTXTrG6tX8BnyOMjvuj7dGEooUPs8o2M6AXMQUkABEZ66iQPDUzEvHeGbQwIFyNcOvc2cZ5l6vwhK%2FvjBKV4A8g%2FMviEBnHHxvSjJeMIzoiL0GOqUBlpL9VJHx8eE0poeMzN6yTaoaFnkjR%2F5iO5F3rY802pgdlB1NEMmDYH5%2FEx6U3dYo9EpUpqoJFRqeOUHPpgTHb5NR995PQ35E1h4a%2Bc1Gt%2FxOE6gfn6kNAgZk5zWgmxKpTKsxojk5gs6I%2FCT6VvtXVJ8bkImWSjywTlxZZ6tEpaY1PSC0VrPyAOrnqm540I7ohh52zZydYdlc2DvDdo2pmlttbmmT&X-Amz-Signature=7f9777bc298417ce334d139fd57743656955c0132507ec83c0de76eb9e76e918&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVOEYMV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHtM3p67qm%2FZYAXziMOp4R%2BvAjh6Ld8ScY1Iuv2U70zIAiEAwpgI1G520T%2FsxCsVrFoQFNnPQT5D5tUixuI6I6fpCscq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAzB33EiD2jcGdvK9SrcA%2FDK64GaKcnRY83PGdZY7%2FvEsEfwTksNE6QE%2Bf7FXbzNA9GDGiJlVoxD4c%2Bm0BLR0P3h1rKS2hhsSrO8x3uPIn4RGaP%2FGVeg0XzWIY6kADJTjbY1tNKGU6rqqqXt4s5W6F9EM%2F9O67zlZwRxvxrMNkCs8b76YQEZwRbuPdkbsGEMysO%2F8TbPnL%2Bc7Td6pCiKc%2BjpGG%2F77TJm8lqay%2BTNestePtUDEslV73TQCM651KVwmVuTjqZujDoQMYYQP1iA8u66HfCBTpwoJdYPiibCakn7k5dJTYDiDDrv4z17xxlx9s4jEv16htUFmG%2B38qA60CqsJxJZlqS%2BwcJ07UYaQRJZWs842jPs799uZIKtxedu0T9IQEJb1xHhuFBh9v8NhhBGZKr3X%2FjLCWRTNNjK3AtGdbGv%2BrNnrDCAzIxHUP6zRjIXDMVLCBIjaZXm8kGpkidx9pX6YyZwA4feenhZ7KTJVZ%2BBp9G0Xk4cGwIk9iZRFLZ%2BGlUcAqZAy0XXiL8ScYR0iDVYGQEb3DFuQzOYWSgTXTrG6tX8BnyOMjvuj7dGEooUPs8o2M6AXMQUkABEZ66iQPDUzEvHeGbQwIFyNcOvc2cZ5l6vwhK%2FvjBKV4A8g%2FMviEBnHHxvSjJeMIzoiL0GOqUBlpL9VJHx8eE0poeMzN6yTaoaFnkjR%2F5iO5F3rY802pgdlB1NEMmDYH5%2FEx6U3dYo9EpUpqoJFRqeOUHPpgTHb5NR995PQ35E1h4a%2Bc1Gt%2FxOE6gfn6kNAgZk5zWgmxKpTKsxojk5gs6I%2FCT6VvtXVJ8bkImWSjywTlxZZ6tEpaY1PSC0VrPyAOrnqm540I7ohh52zZydYdlc2DvDdo2pmlttbmmT&X-Amz-Signature=084944ed545de657e172fdaca807a6d3c315878f4132c241c74554a0b52762fa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVOEYMV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHtM3p67qm%2FZYAXziMOp4R%2BvAjh6Ld8ScY1Iuv2U70zIAiEAwpgI1G520T%2FsxCsVrFoQFNnPQT5D5tUixuI6I6fpCscq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAzB33EiD2jcGdvK9SrcA%2FDK64GaKcnRY83PGdZY7%2FvEsEfwTksNE6QE%2Bf7FXbzNA9GDGiJlVoxD4c%2Bm0BLR0P3h1rKS2hhsSrO8x3uPIn4RGaP%2FGVeg0XzWIY6kADJTjbY1tNKGU6rqqqXt4s5W6F9EM%2F9O67zlZwRxvxrMNkCs8b76YQEZwRbuPdkbsGEMysO%2F8TbPnL%2Bc7Td6pCiKc%2BjpGG%2F77TJm8lqay%2BTNestePtUDEslV73TQCM651KVwmVuTjqZujDoQMYYQP1iA8u66HfCBTpwoJdYPiibCakn7k5dJTYDiDDrv4z17xxlx9s4jEv16htUFmG%2B38qA60CqsJxJZlqS%2BwcJ07UYaQRJZWs842jPs799uZIKtxedu0T9IQEJb1xHhuFBh9v8NhhBGZKr3X%2FjLCWRTNNjK3AtGdbGv%2BrNnrDCAzIxHUP6zRjIXDMVLCBIjaZXm8kGpkidx9pX6YyZwA4feenhZ7KTJVZ%2BBp9G0Xk4cGwIk9iZRFLZ%2BGlUcAqZAy0XXiL8ScYR0iDVYGQEb3DFuQzOYWSgTXTrG6tX8BnyOMjvuj7dGEooUPs8o2M6AXMQUkABEZ66iQPDUzEvHeGbQwIFyNcOvc2cZ5l6vwhK%2FvjBKV4A8g%2FMviEBnHHxvSjJeMIzoiL0GOqUBlpL9VJHx8eE0poeMzN6yTaoaFnkjR%2F5iO5F3rY802pgdlB1NEMmDYH5%2FEx6U3dYo9EpUpqoJFRqeOUHPpgTHb5NR995PQ35E1h4a%2Bc1Gt%2FxOE6gfn6kNAgZk5zWgmxKpTKsxojk5gs6I%2FCT6VvtXVJ8bkImWSjywTlxZZ6tEpaY1PSC0VrPyAOrnqm540I7ohh52zZydYdlc2DvDdo2pmlttbmmT&X-Amz-Signature=391b240c39e5f4044ef747987f52a230107d82292b15076811e07c2597f30568&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

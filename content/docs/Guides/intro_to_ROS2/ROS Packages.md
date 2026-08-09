---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTHIHJ2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx6GcP3DcE%2B8l932xdR77DoYeoKmxBoIHWZBLrmqoaAgIhALU5lkiMeJuFPNSFEQBy7%2FtgJy7rzdkeO%2Fc4GDVkeC2UKv8DCHcQABoMNjM3NDIzMTgzODA1Igzt8HdsXsRZseO9ts8q3ANjRth0P4ziP8hCFSl4Q%2BayWgXQ1H8mcEJsVy0FPSV9%2BQW8At1%2BPdYe134A0gfQJGv2AY71vbygD6dwaPwBKYOvSwF2HYmM%2BpzYhGx5BpBkj7KEWPTNyWMIptL4Eu33sGVmsvOHrrOQYLUlUCZwGfMVOaFV23MpW8W53mc6603htkYlF8A7N8wKmTw%2FDO%2FJGjsOZWwAdaCDtcYEWitf%2FHCmzdhFQIaxFSHTa%2BGjlCZ46Spn9hFJqdlDLPshUvR56cBDXrkH6SKBGV2x0DK0c6az7f4Eufr%2Fpg0QXlvYvRXGNaK4bMlHCgeSLiN8K%2F%2BvAgKK4awL4AmkNvSuGERY2tyGAfLIdNP7GqjWTHJ2GlRfIJKPvC1cRbw29f7KWbxVkTWhmaFJ6i901QcisYjhxJXKxXHuUC0LxKn2u%2Fqi%2BClFadvlQodCnT3rmCZozNzWA3YNfkRooQkrwpATXGiBXaH3rS3WR7fD6PWLkXiZca%2BzwI%2FfPjiJVkw8LbPhBshOxgqUN00CoqXE%2BiPBZQDsRXWtat2GptAWCITYGQDy%2FIK%2BqsH1d2etdY1IFScD4UY0lK68rz8u6VBSLF2v4FKQC4QiMNYt1CNGpkdIUKgp2D%2Fr1aptN2Ps4hpTKBKYzzCQ097TBjqkATL%2FgF3LzBFi69vetiWTcMqJimL8P6hWQipag8ave2z%2Bi7c12K0s0AS4C9J32U3JSw6HsWY253IPlekuESaZcrAYupWuCviZVxCOnXi6Wzgd%2FnqH0E4ZbA0%2FapmtHszs4OHxnGzUZiTKqXh6vHhFc%2FRaW8ai5fLMTPIwS9J%2Fp9BfnU7vGxm8k8g5K%2B9mOfvUd1Fhf%2Boj18zH6JTy9MEbqRDxLG3d&X-Amz-Signature=c06842309248ca0ce352028e18a270c3d94e5f88ed7975285424fd47ba0b0d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTHIHJ2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx6GcP3DcE%2B8l932xdR77DoYeoKmxBoIHWZBLrmqoaAgIhALU5lkiMeJuFPNSFEQBy7%2FtgJy7rzdkeO%2Fc4GDVkeC2UKv8DCHcQABoMNjM3NDIzMTgzODA1Igzt8HdsXsRZseO9ts8q3ANjRth0P4ziP8hCFSl4Q%2BayWgXQ1H8mcEJsVy0FPSV9%2BQW8At1%2BPdYe134A0gfQJGv2AY71vbygD6dwaPwBKYOvSwF2HYmM%2BpzYhGx5BpBkj7KEWPTNyWMIptL4Eu33sGVmsvOHrrOQYLUlUCZwGfMVOaFV23MpW8W53mc6603htkYlF8A7N8wKmTw%2FDO%2FJGjsOZWwAdaCDtcYEWitf%2FHCmzdhFQIaxFSHTa%2BGjlCZ46Spn9hFJqdlDLPshUvR56cBDXrkH6SKBGV2x0DK0c6az7f4Eufr%2Fpg0QXlvYvRXGNaK4bMlHCgeSLiN8K%2F%2BvAgKK4awL4AmkNvSuGERY2tyGAfLIdNP7GqjWTHJ2GlRfIJKPvC1cRbw29f7KWbxVkTWhmaFJ6i901QcisYjhxJXKxXHuUC0LxKn2u%2Fqi%2BClFadvlQodCnT3rmCZozNzWA3YNfkRooQkrwpATXGiBXaH3rS3WR7fD6PWLkXiZca%2BzwI%2FfPjiJVkw8LbPhBshOxgqUN00CoqXE%2BiPBZQDsRXWtat2GptAWCITYGQDy%2FIK%2BqsH1d2etdY1IFScD4UY0lK68rz8u6VBSLF2v4FKQC4QiMNYt1CNGpkdIUKgp2D%2Fr1aptN2Ps4hpTKBKYzzCQ097TBjqkATL%2FgF3LzBFi69vetiWTcMqJimL8P6hWQipag8ave2z%2Bi7c12K0s0AS4C9J32U3JSw6HsWY253IPlekuESaZcrAYupWuCviZVxCOnXi6Wzgd%2FnqH0E4ZbA0%2FapmtHszs4OHxnGzUZiTKqXh6vHhFc%2FRaW8ai5fLMTPIwS9J%2Fp9BfnU7vGxm8k8g5K%2B9mOfvUd1Fhf%2Boj18zH6JTy9MEbqRDxLG3d&X-Amz-Signature=e91dadf66052cadd4aaee1d5d66c2b6adcf621fb5d1f92b65ab298e0b961ecf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTHIHJ2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx6GcP3DcE%2B8l932xdR77DoYeoKmxBoIHWZBLrmqoaAgIhALU5lkiMeJuFPNSFEQBy7%2FtgJy7rzdkeO%2Fc4GDVkeC2UKv8DCHcQABoMNjM3NDIzMTgzODA1Igzt8HdsXsRZseO9ts8q3ANjRth0P4ziP8hCFSl4Q%2BayWgXQ1H8mcEJsVy0FPSV9%2BQW8At1%2BPdYe134A0gfQJGv2AY71vbygD6dwaPwBKYOvSwF2HYmM%2BpzYhGx5BpBkj7KEWPTNyWMIptL4Eu33sGVmsvOHrrOQYLUlUCZwGfMVOaFV23MpW8W53mc6603htkYlF8A7N8wKmTw%2FDO%2FJGjsOZWwAdaCDtcYEWitf%2FHCmzdhFQIaxFSHTa%2BGjlCZ46Spn9hFJqdlDLPshUvR56cBDXrkH6SKBGV2x0DK0c6az7f4Eufr%2Fpg0QXlvYvRXGNaK4bMlHCgeSLiN8K%2F%2BvAgKK4awL4AmkNvSuGERY2tyGAfLIdNP7GqjWTHJ2GlRfIJKPvC1cRbw29f7KWbxVkTWhmaFJ6i901QcisYjhxJXKxXHuUC0LxKn2u%2Fqi%2BClFadvlQodCnT3rmCZozNzWA3YNfkRooQkrwpATXGiBXaH3rS3WR7fD6PWLkXiZca%2BzwI%2FfPjiJVkw8LbPhBshOxgqUN00CoqXE%2BiPBZQDsRXWtat2GptAWCITYGQDy%2FIK%2BqsH1d2etdY1IFScD4UY0lK68rz8u6VBSLF2v4FKQC4QiMNYt1CNGpkdIUKgp2D%2Fr1aptN2Ps4hpTKBKYzzCQ097TBjqkATL%2FgF3LzBFi69vetiWTcMqJimL8P6hWQipag8ave2z%2Bi7c12K0s0AS4C9J32U3JSw6HsWY253IPlekuESaZcrAYupWuCviZVxCOnXi6Wzgd%2FnqH0E4ZbA0%2FapmtHszs4OHxnGzUZiTKqXh6vHhFc%2FRaW8ai5fLMTPIwS9J%2Fp9BfnU7vGxm8k8g5K%2B9mOfvUd1Fhf%2Boj18zH6JTy9MEbqRDxLG3d&X-Amz-Signature=aa0f4ffada6c1065971c8feb0df281e676c5a7c5e9e7719d52c7eb30d765349a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTHIHJ2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx6GcP3DcE%2B8l932xdR77DoYeoKmxBoIHWZBLrmqoaAgIhALU5lkiMeJuFPNSFEQBy7%2FtgJy7rzdkeO%2Fc4GDVkeC2UKv8DCHcQABoMNjM3NDIzMTgzODA1Igzt8HdsXsRZseO9ts8q3ANjRth0P4ziP8hCFSl4Q%2BayWgXQ1H8mcEJsVy0FPSV9%2BQW8At1%2BPdYe134A0gfQJGv2AY71vbygD6dwaPwBKYOvSwF2HYmM%2BpzYhGx5BpBkj7KEWPTNyWMIptL4Eu33sGVmsvOHrrOQYLUlUCZwGfMVOaFV23MpW8W53mc6603htkYlF8A7N8wKmTw%2FDO%2FJGjsOZWwAdaCDtcYEWitf%2FHCmzdhFQIaxFSHTa%2BGjlCZ46Spn9hFJqdlDLPshUvR56cBDXrkH6SKBGV2x0DK0c6az7f4Eufr%2Fpg0QXlvYvRXGNaK4bMlHCgeSLiN8K%2F%2BvAgKK4awL4AmkNvSuGERY2tyGAfLIdNP7GqjWTHJ2GlRfIJKPvC1cRbw29f7KWbxVkTWhmaFJ6i901QcisYjhxJXKxXHuUC0LxKn2u%2Fqi%2BClFadvlQodCnT3rmCZozNzWA3YNfkRooQkrwpATXGiBXaH3rS3WR7fD6PWLkXiZca%2BzwI%2FfPjiJVkw8LbPhBshOxgqUN00CoqXE%2BiPBZQDsRXWtat2GptAWCITYGQDy%2FIK%2BqsH1d2etdY1IFScD4UY0lK68rz8u6VBSLF2v4FKQC4QiMNYt1CNGpkdIUKgp2D%2Fr1aptN2Ps4hpTKBKYzzCQ097TBjqkATL%2FgF3LzBFi69vetiWTcMqJimL8P6hWQipag8ave2z%2Bi7c12K0s0AS4C9J32U3JSw6HsWY253IPlekuESaZcrAYupWuCviZVxCOnXi6Wzgd%2FnqH0E4ZbA0%2FapmtHszs4OHxnGzUZiTKqXh6vHhFc%2FRaW8ai5fLMTPIwS9J%2Fp9BfnU7vGxm8k8g5K%2B9mOfvUd1Fhf%2Boj18zH6JTy9MEbqRDxLG3d&X-Amz-Signature=854a8d9e9df95b1b6073c97667636518de0c4f7faeadf685c7761fce021aeccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTHIHJ2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx6GcP3DcE%2B8l932xdR77DoYeoKmxBoIHWZBLrmqoaAgIhALU5lkiMeJuFPNSFEQBy7%2FtgJy7rzdkeO%2Fc4GDVkeC2UKv8DCHcQABoMNjM3NDIzMTgzODA1Igzt8HdsXsRZseO9ts8q3ANjRth0P4ziP8hCFSl4Q%2BayWgXQ1H8mcEJsVy0FPSV9%2BQW8At1%2BPdYe134A0gfQJGv2AY71vbygD6dwaPwBKYOvSwF2HYmM%2BpzYhGx5BpBkj7KEWPTNyWMIptL4Eu33sGVmsvOHrrOQYLUlUCZwGfMVOaFV23MpW8W53mc6603htkYlF8A7N8wKmTw%2FDO%2FJGjsOZWwAdaCDtcYEWitf%2FHCmzdhFQIaxFSHTa%2BGjlCZ46Spn9hFJqdlDLPshUvR56cBDXrkH6SKBGV2x0DK0c6az7f4Eufr%2Fpg0QXlvYvRXGNaK4bMlHCgeSLiN8K%2F%2BvAgKK4awL4AmkNvSuGERY2tyGAfLIdNP7GqjWTHJ2GlRfIJKPvC1cRbw29f7KWbxVkTWhmaFJ6i901QcisYjhxJXKxXHuUC0LxKn2u%2Fqi%2BClFadvlQodCnT3rmCZozNzWA3YNfkRooQkrwpATXGiBXaH3rS3WR7fD6PWLkXiZca%2BzwI%2FfPjiJVkw8LbPhBshOxgqUN00CoqXE%2BiPBZQDsRXWtat2GptAWCITYGQDy%2FIK%2BqsH1d2etdY1IFScD4UY0lK68rz8u6VBSLF2v4FKQC4QiMNYt1CNGpkdIUKgp2D%2Fr1aptN2Ps4hpTKBKYzzCQ097TBjqkATL%2FgF3LzBFi69vetiWTcMqJimL8P6hWQipag8ave2z%2Bi7c12K0s0AS4C9J32U3JSw6HsWY253IPlekuESaZcrAYupWuCviZVxCOnXi6Wzgd%2FnqH0E4ZbA0%2FapmtHszs4OHxnGzUZiTKqXh6vHhFc%2FRaW8ai5fLMTPIwS9J%2Fp9BfnU7vGxm8k8g5K%2B9mOfvUd1Fhf%2Boj18zH6JTy9MEbqRDxLG3d&X-Amz-Signature=0437fdc58dcf90e06e700c414be1e85b7acc3c329746a2220679dc0d90f33815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTHIHJ2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx6GcP3DcE%2B8l932xdR77DoYeoKmxBoIHWZBLrmqoaAgIhALU5lkiMeJuFPNSFEQBy7%2FtgJy7rzdkeO%2Fc4GDVkeC2UKv8DCHcQABoMNjM3NDIzMTgzODA1Igzt8HdsXsRZseO9ts8q3ANjRth0P4ziP8hCFSl4Q%2BayWgXQ1H8mcEJsVy0FPSV9%2BQW8At1%2BPdYe134A0gfQJGv2AY71vbygD6dwaPwBKYOvSwF2HYmM%2BpzYhGx5BpBkj7KEWPTNyWMIptL4Eu33sGVmsvOHrrOQYLUlUCZwGfMVOaFV23MpW8W53mc6603htkYlF8A7N8wKmTw%2FDO%2FJGjsOZWwAdaCDtcYEWitf%2FHCmzdhFQIaxFSHTa%2BGjlCZ46Spn9hFJqdlDLPshUvR56cBDXrkH6SKBGV2x0DK0c6az7f4Eufr%2Fpg0QXlvYvRXGNaK4bMlHCgeSLiN8K%2F%2BvAgKK4awL4AmkNvSuGERY2tyGAfLIdNP7GqjWTHJ2GlRfIJKPvC1cRbw29f7KWbxVkTWhmaFJ6i901QcisYjhxJXKxXHuUC0LxKn2u%2Fqi%2BClFadvlQodCnT3rmCZozNzWA3YNfkRooQkrwpATXGiBXaH3rS3WR7fD6PWLkXiZca%2BzwI%2FfPjiJVkw8LbPhBshOxgqUN00CoqXE%2BiPBZQDsRXWtat2GptAWCITYGQDy%2FIK%2BqsH1d2etdY1IFScD4UY0lK68rz8u6VBSLF2v4FKQC4QiMNYt1CNGpkdIUKgp2D%2Fr1aptN2Ps4hpTKBKYzzCQ097TBjqkATL%2FgF3LzBFi69vetiWTcMqJimL8P6hWQipag8ave2z%2Bi7c12K0s0AS4C9J32U3JSw6HsWY253IPlekuESaZcrAYupWuCviZVxCOnXi6Wzgd%2FnqH0E4ZbA0%2FapmtHszs4OHxnGzUZiTKqXh6vHhFc%2FRaW8ai5fLMTPIwS9J%2Fp9BfnU7vGxm8k8g5K%2B9mOfvUd1Fhf%2Boj18zH6JTy9MEbqRDxLG3d&X-Amz-Signature=7549f5bbdad4b11a5f560c0706ff6e62131ca460230a23bc02e0b1888423f72a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTHIHJ2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx6GcP3DcE%2B8l932xdR77DoYeoKmxBoIHWZBLrmqoaAgIhALU5lkiMeJuFPNSFEQBy7%2FtgJy7rzdkeO%2Fc4GDVkeC2UKv8DCHcQABoMNjM3NDIzMTgzODA1Igzt8HdsXsRZseO9ts8q3ANjRth0P4ziP8hCFSl4Q%2BayWgXQ1H8mcEJsVy0FPSV9%2BQW8At1%2BPdYe134A0gfQJGv2AY71vbygD6dwaPwBKYOvSwF2HYmM%2BpzYhGx5BpBkj7KEWPTNyWMIptL4Eu33sGVmsvOHrrOQYLUlUCZwGfMVOaFV23MpW8W53mc6603htkYlF8A7N8wKmTw%2FDO%2FJGjsOZWwAdaCDtcYEWitf%2FHCmzdhFQIaxFSHTa%2BGjlCZ46Spn9hFJqdlDLPshUvR56cBDXrkH6SKBGV2x0DK0c6az7f4Eufr%2Fpg0QXlvYvRXGNaK4bMlHCgeSLiN8K%2F%2BvAgKK4awL4AmkNvSuGERY2tyGAfLIdNP7GqjWTHJ2GlRfIJKPvC1cRbw29f7KWbxVkTWhmaFJ6i901QcisYjhxJXKxXHuUC0LxKn2u%2Fqi%2BClFadvlQodCnT3rmCZozNzWA3YNfkRooQkrwpATXGiBXaH3rS3WR7fD6PWLkXiZca%2BzwI%2FfPjiJVkw8LbPhBshOxgqUN00CoqXE%2BiPBZQDsRXWtat2GptAWCITYGQDy%2FIK%2BqsH1d2etdY1IFScD4UY0lK68rz8u6VBSLF2v4FKQC4QiMNYt1CNGpkdIUKgp2D%2Fr1aptN2Ps4hpTKBKYzzCQ097TBjqkATL%2FgF3LzBFi69vetiWTcMqJimL8P6hWQipag8ave2z%2Bi7c12K0s0AS4C9J32U3JSw6HsWY253IPlekuESaZcrAYupWuCviZVxCOnXi6Wzgd%2FnqH0E4ZbA0%2FapmtHszs4OHxnGzUZiTKqXh6vHhFc%2FRaW8ai5fLMTPIwS9J%2Fp9BfnU7vGxm8k8g5K%2B9mOfvUd1Fhf%2Boj18zH6JTy9MEbqRDxLG3d&X-Amz-Signature=57472b05febf5189f2cbf0bde7782e60bb3afe250872cf54570edfb1176a4955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

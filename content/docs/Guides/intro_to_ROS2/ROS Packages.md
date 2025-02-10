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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667376UPU2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz14q6iIeag7Uae28P0HaTeLzRzQWAnlRm3G5bP%2FdoRAIhAMjiRA3hO2n%2F7leOSyzaKCclW1TPrWm07J4mNCn0IH0EKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL7SFO8obAAu2frgIq3ANvpvXSV5jxP8RLJxFTUv%2B2PaTG0H%2FedNuh78teNFwzjY1Dg4iFBmMa%2B1%2F3qBShwl77tioSGvMi2lnelI6ECPdXdZo7Yh9ex6nt7pdBjHz7CSFneoiSwU8zT42LnUJLcyL6sdNq3PP4Ec8SZ%2BMrIHYoNX6Ky2KEd0Bel3ZgEqUeTxHF9Qnp2ChGZeg4d409iYJyMn%2FCg%2B%2B0gY%2BVcOEbTgIJP0CJhpPc6x5E66V4kKvTgUWRv94FejIsXY80cpaK5ad30SJBX2%2BXJGfUtpLqVnmS6xPz6JJThY1UvcrcBCC4Uwez5pM%2FKzKhwQxsqJco10oOc1ZINQjLaLlvO46CSE6tqDZNK48dbbmeNYCa1xyUO5VA7NYtuVRfIMvYrHpMnysGi14g8QWXVY1jB4gVwunFQfZ3BHXlFU7FRMbpvXoOuSvoQA5AEuHzpmOYH3cAAq21T9QXtl%2FfqXg1KmTfRziHPwBBkJFO5qrhrwhbKHecEYyMYffUVN7e8GbXW22S6NGzBCluWtt4RRLrb3Pz7L1lmnNmBWF6suN2Ukzndd9C3W5MJnn1%2BpEvDyPf1JjLfa3NSrMTg0GaMwnYOLgI33Zayk%2FWPh0E3siXbY67TXqEV1GfbXyQiUWR7NyudzDOrae9BjqkAXoHhTJns0I%2F5hxtOfFTEjtXOQVFcyByrItfvCiHNNsTz9%2Fa%2FZwfEPBFA19taMaBBHnUC2%2F9kM8XtU%2FZdtYZ%2B1rMCQmLQGr9zmww3ZKKy03o2F3vbl7PvH7wS5Zy3wprbKiZubGnJ6YCKfL%2FAu33YFygmOuxZ9Gpjv%2B57HxOAclXlhiCN13h%2BNVx9tymtAw%2B%2FpZFkSKI3KnxO1yxLTaJB1PCkM5q&X-Amz-Signature=34817d54309b90fe8c23e933f3bef4b91582a845e2542d18cc30bbcbcc5cad01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667376UPU2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz14q6iIeag7Uae28P0HaTeLzRzQWAnlRm3G5bP%2FdoRAIhAMjiRA3hO2n%2F7leOSyzaKCclW1TPrWm07J4mNCn0IH0EKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL7SFO8obAAu2frgIq3ANvpvXSV5jxP8RLJxFTUv%2B2PaTG0H%2FedNuh78teNFwzjY1Dg4iFBmMa%2B1%2F3qBShwl77tioSGvMi2lnelI6ECPdXdZo7Yh9ex6nt7pdBjHz7CSFneoiSwU8zT42LnUJLcyL6sdNq3PP4Ec8SZ%2BMrIHYoNX6Ky2KEd0Bel3ZgEqUeTxHF9Qnp2ChGZeg4d409iYJyMn%2FCg%2B%2B0gY%2BVcOEbTgIJP0CJhpPc6x5E66V4kKvTgUWRv94FejIsXY80cpaK5ad30SJBX2%2BXJGfUtpLqVnmS6xPz6JJThY1UvcrcBCC4Uwez5pM%2FKzKhwQxsqJco10oOc1ZINQjLaLlvO46CSE6tqDZNK48dbbmeNYCa1xyUO5VA7NYtuVRfIMvYrHpMnysGi14g8QWXVY1jB4gVwunFQfZ3BHXlFU7FRMbpvXoOuSvoQA5AEuHzpmOYH3cAAq21T9QXtl%2FfqXg1KmTfRziHPwBBkJFO5qrhrwhbKHecEYyMYffUVN7e8GbXW22S6NGzBCluWtt4RRLrb3Pz7L1lmnNmBWF6suN2Ukzndd9C3W5MJnn1%2BpEvDyPf1JjLfa3NSrMTg0GaMwnYOLgI33Zayk%2FWPh0E3siXbY67TXqEV1GfbXyQiUWR7NyudzDOrae9BjqkAXoHhTJns0I%2F5hxtOfFTEjtXOQVFcyByrItfvCiHNNsTz9%2Fa%2FZwfEPBFA19taMaBBHnUC2%2F9kM8XtU%2FZdtYZ%2B1rMCQmLQGr9zmww3ZKKy03o2F3vbl7PvH7wS5Zy3wprbKiZubGnJ6YCKfL%2FAu33YFygmOuxZ9Gpjv%2B57HxOAclXlhiCN13h%2BNVx9tymtAw%2B%2FpZFkSKI3KnxO1yxLTaJB1PCkM5q&X-Amz-Signature=9c52292ee14bcbf8bfdf74783cb01cffe105513cac99d5811531cf760186c3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667376UPU2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz14q6iIeag7Uae28P0HaTeLzRzQWAnlRm3G5bP%2FdoRAIhAMjiRA3hO2n%2F7leOSyzaKCclW1TPrWm07J4mNCn0IH0EKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL7SFO8obAAu2frgIq3ANvpvXSV5jxP8RLJxFTUv%2B2PaTG0H%2FedNuh78teNFwzjY1Dg4iFBmMa%2B1%2F3qBShwl77tioSGvMi2lnelI6ECPdXdZo7Yh9ex6nt7pdBjHz7CSFneoiSwU8zT42LnUJLcyL6sdNq3PP4Ec8SZ%2BMrIHYoNX6Ky2KEd0Bel3ZgEqUeTxHF9Qnp2ChGZeg4d409iYJyMn%2FCg%2B%2B0gY%2BVcOEbTgIJP0CJhpPc6x5E66V4kKvTgUWRv94FejIsXY80cpaK5ad30SJBX2%2BXJGfUtpLqVnmS6xPz6JJThY1UvcrcBCC4Uwez5pM%2FKzKhwQxsqJco10oOc1ZINQjLaLlvO46CSE6tqDZNK48dbbmeNYCa1xyUO5VA7NYtuVRfIMvYrHpMnysGi14g8QWXVY1jB4gVwunFQfZ3BHXlFU7FRMbpvXoOuSvoQA5AEuHzpmOYH3cAAq21T9QXtl%2FfqXg1KmTfRziHPwBBkJFO5qrhrwhbKHecEYyMYffUVN7e8GbXW22S6NGzBCluWtt4RRLrb3Pz7L1lmnNmBWF6suN2Ukzndd9C3W5MJnn1%2BpEvDyPf1JjLfa3NSrMTg0GaMwnYOLgI33Zayk%2FWPh0E3siXbY67TXqEV1GfbXyQiUWR7NyudzDOrae9BjqkAXoHhTJns0I%2F5hxtOfFTEjtXOQVFcyByrItfvCiHNNsTz9%2Fa%2FZwfEPBFA19taMaBBHnUC2%2F9kM8XtU%2FZdtYZ%2B1rMCQmLQGr9zmww3ZKKy03o2F3vbl7PvH7wS5Zy3wprbKiZubGnJ6YCKfL%2FAu33YFygmOuxZ9Gpjv%2B57HxOAclXlhiCN13h%2BNVx9tymtAw%2B%2FpZFkSKI3KnxO1yxLTaJB1PCkM5q&X-Amz-Signature=f1f5d31d7d9c4e643253ddfc0bd87b62632ab38c7c9821f2e875d9e4177f19f7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667376UPU2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz14q6iIeag7Uae28P0HaTeLzRzQWAnlRm3G5bP%2FdoRAIhAMjiRA3hO2n%2F7leOSyzaKCclW1TPrWm07J4mNCn0IH0EKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL7SFO8obAAu2frgIq3ANvpvXSV5jxP8RLJxFTUv%2B2PaTG0H%2FedNuh78teNFwzjY1Dg4iFBmMa%2B1%2F3qBShwl77tioSGvMi2lnelI6ECPdXdZo7Yh9ex6nt7pdBjHz7CSFneoiSwU8zT42LnUJLcyL6sdNq3PP4Ec8SZ%2BMrIHYoNX6Ky2KEd0Bel3ZgEqUeTxHF9Qnp2ChGZeg4d409iYJyMn%2FCg%2B%2B0gY%2BVcOEbTgIJP0CJhpPc6x5E66V4kKvTgUWRv94FejIsXY80cpaK5ad30SJBX2%2BXJGfUtpLqVnmS6xPz6JJThY1UvcrcBCC4Uwez5pM%2FKzKhwQxsqJco10oOc1ZINQjLaLlvO46CSE6tqDZNK48dbbmeNYCa1xyUO5VA7NYtuVRfIMvYrHpMnysGi14g8QWXVY1jB4gVwunFQfZ3BHXlFU7FRMbpvXoOuSvoQA5AEuHzpmOYH3cAAq21T9QXtl%2FfqXg1KmTfRziHPwBBkJFO5qrhrwhbKHecEYyMYffUVN7e8GbXW22S6NGzBCluWtt4RRLrb3Pz7L1lmnNmBWF6suN2Ukzndd9C3W5MJnn1%2BpEvDyPf1JjLfa3NSrMTg0GaMwnYOLgI33Zayk%2FWPh0E3siXbY67TXqEV1GfbXyQiUWR7NyudzDOrae9BjqkAXoHhTJns0I%2F5hxtOfFTEjtXOQVFcyByrItfvCiHNNsTz9%2Fa%2FZwfEPBFA19taMaBBHnUC2%2F9kM8XtU%2FZdtYZ%2B1rMCQmLQGr9zmww3ZKKy03o2F3vbl7PvH7wS5Zy3wprbKiZubGnJ6YCKfL%2FAu33YFygmOuxZ9Gpjv%2B57HxOAclXlhiCN13h%2BNVx9tymtAw%2B%2FpZFkSKI3KnxO1yxLTaJB1PCkM5q&X-Amz-Signature=a242d54b76c34e36b0266e3997596fd3f03ca01d9d192d5438d4418760c0dd0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667376UPU2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz14q6iIeag7Uae28P0HaTeLzRzQWAnlRm3G5bP%2FdoRAIhAMjiRA3hO2n%2F7leOSyzaKCclW1TPrWm07J4mNCn0IH0EKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL7SFO8obAAu2frgIq3ANvpvXSV5jxP8RLJxFTUv%2B2PaTG0H%2FedNuh78teNFwzjY1Dg4iFBmMa%2B1%2F3qBShwl77tioSGvMi2lnelI6ECPdXdZo7Yh9ex6nt7pdBjHz7CSFneoiSwU8zT42LnUJLcyL6sdNq3PP4Ec8SZ%2BMrIHYoNX6Ky2KEd0Bel3ZgEqUeTxHF9Qnp2ChGZeg4d409iYJyMn%2FCg%2B%2B0gY%2BVcOEbTgIJP0CJhpPc6x5E66V4kKvTgUWRv94FejIsXY80cpaK5ad30SJBX2%2BXJGfUtpLqVnmS6xPz6JJThY1UvcrcBCC4Uwez5pM%2FKzKhwQxsqJco10oOc1ZINQjLaLlvO46CSE6tqDZNK48dbbmeNYCa1xyUO5VA7NYtuVRfIMvYrHpMnysGi14g8QWXVY1jB4gVwunFQfZ3BHXlFU7FRMbpvXoOuSvoQA5AEuHzpmOYH3cAAq21T9QXtl%2FfqXg1KmTfRziHPwBBkJFO5qrhrwhbKHecEYyMYffUVN7e8GbXW22S6NGzBCluWtt4RRLrb3Pz7L1lmnNmBWF6suN2Ukzndd9C3W5MJnn1%2BpEvDyPf1JjLfa3NSrMTg0GaMwnYOLgI33Zayk%2FWPh0E3siXbY67TXqEV1GfbXyQiUWR7NyudzDOrae9BjqkAXoHhTJns0I%2F5hxtOfFTEjtXOQVFcyByrItfvCiHNNsTz9%2Fa%2FZwfEPBFA19taMaBBHnUC2%2F9kM8XtU%2FZdtYZ%2B1rMCQmLQGr9zmww3ZKKy03o2F3vbl7PvH7wS5Zy3wprbKiZubGnJ6YCKfL%2FAu33YFygmOuxZ9Gpjv%2B57HxOAclXlhiCN13h%2BNVx9tymtAw%2B%2FpZFkSKI3KnxO1yxLTaJB1PCkM5q&X-Amz-Signature=a2257e488c6699ddecc234442ff9c0fcee994949a721a4f1c6b9f6c6ec8e9c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667376UPU2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz14q6iIeag7Uae28P0HaTeLzRzQWAnlRm3G5bP%2FdoRAIhAMjiRA3hO2n%2F7leOSyzaKCclW1TPrWm07J4mNCn0IH0EKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL7SFO8obAAu2frgIq3ANvpvXSV5jxP8RLJxFTUv%2B2PaTG0H%2FedNuh78teNFwzjY1Dg4iFBmMa%2B1%2F3qBShwl77tioSGvMi2lnelI6ECPdXdZo7Yh9ex6nt7pdBjHz7CSFneoiSwU8zT42LnUJLcyL6sdNq3PP4Ec8SZ%2BMrIHYoNX6Ky2KEd0Bel3ZgEqUeTxHF9Qnp2ChGZeg4d409iYJyMn%2FCg%2B%2B0gY%2BVcOEbTgIJP0CJhpPc6x5E66V4kKvTgUWRv94FejIsXY80cpaK5ad30SJBX2%2BXJGfUtpLqVnmS6xPz6JJThY1UvcrcBCC4Uwez5pM%2FKzKhwQxsqJco10oOc1ZINQjLaLlvO46CSE6tqDZNK48dbbmeNYCa1xyUO5VA7NYtuVRfIMvYrHpMnysGi14g8QWXVY1jB4gVwunFQfZ3BHXlFU7FRMbpvXoOuSvoQA5AEuHzpmOYH3cAAq21T9QXtl%2FfqXg1KmTfRziHPwBBkJFO5qrhrwhbKHecEYyMYffUVN7e8GbXW22S6NGzBCluWtt4RRLrb3Pz7L1lmnNmBWF6suN2Ukzndd9C3W5MJnn1%2BpEvDyPf1JjLfa3NSrMTg0GaMwnYOLgI33Zayk%2FWPh0E3siXbY67TXqEV1GfbXyQiUWR7NyudzDOrae9BjqkAXoHhTJns0I%2F5hxtOfFTEjtXOQVFcyByrItfvCiHNNsTz9%2Fa%2FZwfEPBFA19taMaBBHnUC2%2F9kM8XtU%2FZdtYZ%2B1rMCQmLQGr9zmww3ZKKy03o2F3vbl7PvH7wS5Zy3wprbKiZubGnJ6YCKfL%2FAu33YFygmOuxZ9Gpjv%2B57HxOAclXlhiCN13h%2BNVx9tymtAw%2B%2FpZFkSKI3KnxO1yxLTaJB1PCkM5q&X-Amz-Signature=b72c0283778be1315b147f19aa6b4f15a879980c6ccb4ed126ffd2303463a427&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667376UPU2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz14q6iIeag7Uae28P0HaTeLzRzQWAnlRm3G5bP%2FdoRAIhAMjiRA3hO2n%2F7leOSyzaKCclW1TPrWm07J4mNCn0IH0EKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL7SFO8obAAu2frgIq3ANvpvXSV5jxP8RLJxFTUv%2B2PaTG0H%2FedNuh78teNFwzjY1Dg4iFBmMa%2B1%2F3qBShwl77tioSGvMi2lnelI6ECPdXdZo7Yh9ex6nt7pdBjHz7CSFneoiSwU8zT42LnUJLcyL6sdNq3PP4Ec8SZ%2BMrIHYoNX6Ky2KEd0Bel3ZgEqUeTxHF9Qnp2ChGZeg4d409iYJyMn%2FCg%2B%2B0gY%2BVcOEbTgIJP0CJhpPc6x5E66V4kKvTgUWRv94FejIsXY80cpaK5ad30SJBX2%2BXJGfUtpLqVnmS6xPz6JJThY1UvcrcBCC4Uwez5pM%2FKzKhwQxsqJco10oOc1ZINQjLaLlvO46CSE6tqDZNK48dbbmeNYCa1xyUO5VA7NYtuVRfIMvYrHpMnysGi14g8QWXVY1jB4gVwunFQfZ3BHXlFU7FRMbpvXoOuSvoQA5AEuHzpmOYH3cAAq21T9QXtl%2FfqXg1KmTfRziHPwBBkJFO5qrhrwhbKHecEYyMYffUVN7e8GbXW22S6NGzBCluWtt4RRLrb3Pz7L1lmnNmBWF6suN2Ukzndd9C3W5MJnn1%2BpEvDyPf1JjLfa3NSrMTg0GaMwnYOLgI33Zayk%2FWPh0E3siXbY67TXqEV1GfbXyQiUWR7NyudzDOrae9BjqkAXoHhTJns0I%2F5hxtOfFTEjtXOQVFcyByrItfvCiHNNsTz9%2Fa%2FZwfEPBFA19taMaBBHnUC2%2F9kM8XtU%2FZdtYZ%2B1rMCQmLQGr9zmww3ZKKy03o2F3vbl7PvH7wS5Zy3wprbKiZubGnJ6YCKfL%2FAu33YFygmOuxZ9Gpjv%2B57HxOAclXlhiCN13h%2BNVx9tymtAw%2B%2FpZFkSKI3KnxO1yxLTaJB1PCkM5q&X-Amz-Signature=4ef8cd620fc93400538556210c427d5cc354bfb1b76c483a54e35ca0383fa1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

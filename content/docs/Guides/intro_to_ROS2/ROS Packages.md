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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXW2N3N%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSYMj7EDST17uedVT0Jfy480PCzQx%2BBr%2FWtrt%2FFxmNTgIgQXV8fp2zGrf9YdKK7jIyGMGIFAT%2Bv2i0VF73yevKrNMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHrwHYwsJFIOEjJkvSrcA5g1Qg0TjfXdh5C112UZfpm56jxBRnL%2Bld%2BWPH6l6gNVf2puu3X1mzfWPb52Ti4up2eLavQ7rL%2BSufBpo5u1eW6wWbtm2Yo2Nl6%2BluPxBMa%2FIvB23f%2FfZO76LiCuTYd4SlLgDi1lUalmOQU3twO%2Fvm8nJZB8CR9LmrU%2BpvVlVVuSxuJZjqM04H1S7wUroRrMkgjvK362gh9n%2Fzafo5WB9exm7MzWqvfUpxTDS6Ky47wdkyPGd6fj6c2XthLdwucX7QDtw8gP5o%2FUI3vH8NkMPU%2B3iylCYfa13vvXUwRJXxWY8VjpPBGPhfN%2F7xaab6mvH8d4zo2MmTPG32rdKdWMzjmmTfpYhASUzoYiJ4ZqwhFquCHHIan7QTyVKDeDHxt7PKfbekKCNAVdJZFM22IRr%2F2HnTgy24%2Bnm1MOtHuwtSMjjULb1qNUZBNhJh0OnnvVGkHFPxBLPfNkzB7HM6FbWZQxA6zo2hOqWe7TX03woZZpjNiKp1K3ETIdHTPrr9d7AM4Qa5fOtfjNt392R5Sdnypsi7ewwqFKAR0xgWjslp%2FhPG4yGYmQX2Aa%2Bq%2B4ihXtPVjU%2FIGXHm7cT74zLjPfDLRt5u2iXAWY6WXzilD5nW9ECCmXvdmOylHRoBvZML72388GOqUBkVZKRk4IK7MvMgS%2BLfsycZ%2BqW7m6vhWTYycrxZLHeMgnk%2F1f08ks0jaBHRGL4iIEa9Exli5bAFkOIkdziseO66DhTIpGYD8p%2FTV5fm95k81Rvb5llraBpT3ZMoWxMDhqcNidvzBgraGBqNJksKvquIa63kc1AAu3U%2BsC5nV7rp0LSf4PIY4KjCHJtgN64mVk2ufM3sWhqHcfN%2FV1fnydsJVCKinM&X-Amz-Signature=abf64683b1ef085a88c901162a1100f56825db22af6efecd9ab98021d2d10b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXW2N3N%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSYMj7EDST17uedVT0Jfy480PCzQx%2BBr%2FWtrt%2FFxmNTgIgQXV8fp2zGrf9YdKK7jIyGMGIFAT%2Bv2i0VF73yevKrNMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHrwHYwsJFIOEjJkvSrcA5g1Qg0TjfXdh5C112UZfpm56jxBRnL%2Bld%2BWPH6l6gNVf2puu3X1mzfWPb52Ti4up2eLavQ7rL%2BSufBpo5u1eW6wWbtm2Yo2Nl6%2BluPxBMa%2FIvB23f%2FfZO76LiCuTYd4SlLgDi1lUalmOQU3twO%2Fvm8nJZB8CR9LmrU%2BpvVlVVuSxuJZjqM04H1S7wUroRrMkgjvK362gh9n%2Fzafo5WB9exm7MzWqvfUpxTDS6Ky47wdkyPGd6fj6c2XthLdwucX7QDtw8gP5o%2FUI3vH8NkMPU%2B3iylCYfa13vvXUwRJXxWY8VjpPBGPhfN%2F7xaab6mvH8d4zo2MmTPG32rdKdWMzjmmTfpYhASUzoYiJ4ZqwhFquCHHIan7QTyVKDeDHxt7PKfbekKCNAVdJZFM22IRr%2F2HnTgy24%2Bnm1MOtHuwtSMjjULb1qNUZBNhJh0OnnvVGkHFPxBLPfNkzB7HM6FbWZQxA6zo2hOqWe7TX03woZZpjNiKp1K3ETIdHTPrr9d7AM4Qa5fOtfjNt392R5Sdnypsi7ewwqFKAR0xgWjslp%2FhPG4yGYmQX2Aa%2Bq%2B4ihXtPVjU%2FIGXHm7cT74zLjPfDLRt5u2iXAWY6WXzilD5nW9ECCmXvdmOylHRoBvZML72388GOqUBkVZKRk4IK7MvMgS%2BLfsycZ%2BqW7m6vhWTYycrxZLHeMgnk%2F1f08ks0jaBHRGL4iIEa9Exli5bAFkOIkdziseO66DhTIpGYD8p%2FTV5fm95k81Rvb5llraBpT3ZMoWxMDhqcNidvzBgraGBqNJksKvquIa63kc1AAu3U%2BsC5nV7rp0LSf4PIY4KjCHJtgN64mVk2ufM3sWhqHcfN%2FV1fnydsJVCKinM&X-Amz-Signature=efd6423bdab9849a8e88022d7d90cb6271c13e1214bcebd19917b0062bc16a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXW2N3N%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSYMj7EDST17uedVT0Jfy480PCzQx%2BBr%2FWtrt%2FFxmNTgIgQXV8fp2zGrf9YdKK7jIyGMGIFAT%2Bv2i0VF73yevKrNMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHrwHYwsJFIOEjJkvSrcA5g1Qg0TjfXdh5C112UZfpm56jxBRnL%2Bld%2BWPH6l6gNVf2puu3X1mzfWPb52Ti4up2eLavQ7rL%2BSufBpo5u1eW6wWbtm2Yo2Nl6%2BluPxBMa%2FIvB23f%2FfZO76LiCuTYd4SlLgDi1lUalmOQU3twO%2Fvm8nJZB8CR9LmrU%2BpvVlVVuSxuJZjqM04H1S7wUroRrMkgjvK362gh9n%2Fzafo5WB9exm7MzWqvfUpxTDS6Ky47wdkyPGd6fj6c2XthLdwucX7QDtw8gP5o%2FUI3vH8NkMPU%2B3iylCYfa13vvXUwRJXxWY8VjpPBGPhfN%2F7xaab6mvH8d4zo2MmTPG32rdKdWMzjmmTfpYhASUzoYiJ4ZqwhFquCHHIan7QTyVKDeDHxt7PKfbekKCNAVdJZFM22IRr%2F2HnTgy24%2Bnm1MOtHuwtSMjjULb1qNUZBNhJh0OnnvVGkHFPxBLPfNkzB7HM6FbWZQxA6zo2hOqWe7TX03woZZpjNiKp1K3ETIdHTPrr9d7AM4Qa5fOtfjNt392R5Sdnypsi7ewwqFKAR0xgWjslp%2FhPG4yGYmQX2Aa%2Bq%2B4ihXtPVjU%2FIGXHm7cT74zLjPfDLRt5u2iXAWY6WXzilD5nW9ECCmXvdmOylHRoBvZML72388GOqUBkVZKRk4IK7MvMgS%2BLfsycZ%2BqW7m6vhWTYycrxZLHeMgnk%2F1f08ks0jaBHRGL4iIEa9Exli5bAFkOIkdziseO66DhTIpGYD8p%2FTV5fm95k81Rvb5llraBpT3ZMoWxMDhqcNidvzBgraGBqNJksKvquIa63kc1AAu3U%2BsC5nV7rp0LSf4PIY4KjCHJtgN64mVk2ufM3sWhqHcfN%2FV1fnydsJVCKinM&X-Amz-Signature=4d4c09becaf906018ff39bd500247f5f22e48d18c73cf244530faa7c63fba10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXW2N3N%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSYMj7EDST17uedVT0Jfy480PCzQx%2BBr%2FWtrt%2FFxmNTgIgQXV8fp2zGrf9YdKK7jIyGMGIFAT%2Bv2i0VF73yevKrNMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHrwHYwsJFIOEjJkvSrcA5g1Qg0TjfXdh5C112UZfpm56jxBRnL%2Bld%2BWPH6l6gNVf2puu3X1mzfWPb52Ti4up2eLavQ7rL%2BSufBpo5u1eW6wWbtm2Yo2Nl6%2BluPxBMa%2FIvB23f%2FfZO76LiCuTYd4SlLgDi1lUalmOQU3twO%2Fvm8nJZB8CR9LmrU%2BpvVlVVuSxuJZjqM04H1S7wUroRrMkgjvK362gh9n%2Fzafo5WB9exm7MzWqvfUpxTDS6Ky47wdkyPGd6fj6c2XthLdwucX7QDtw8gP5o%2FUI3vH8NkMPU%2B3iylCYfa13vvXUwRJXxWY8VjpPBGPhfN%2F7xaab6mvH8d4zo2MmTPG32rdKdWMzjmmTfpYhASUzoYiJ4ZqwhFquCHHIan7QTyVKDeDHxt7PKfbekKCNAVdJZFM22IRr%2F2HnTgy24%2Bnm1MOtHuwtSMjjULb1qNUZBNhJh0OnnvVGkHFPxBLPfNkzB7HM6FbWZQxA6zo2hOqWe7TX03woZZpjNiKp1K3ETIdHTPrr9d7AM4Qa5fOtfjNt392R5Sdnypsi7ewwqFKAR0xgWjslp%2FhPG4yGYmQX2Aa%2Bq%2B4ihXtPVjU%2FIGXHm7cT74zLjPfDLRt5u2iXAWY6WXzilD5nW9ECCmXvdmOylHRoBvZML72388GOqUBkVZKRk4IK7MvMgS%2BLfsycZ%2BqW7m6vhWTYycrxZLHeMgnk%2F1f08ks0jaBHRGL4iIEa9Exli5bAFkOIkdziseO66DhTIpGYD8p%2FTV5fm95k81Rvb5llraBpT3ZMoWxMDhqcNidvzBgraGBqNJksKvquIa63kc1AAu3U%2BsC5nV7rp0LSf4PIY4KjCHJtgN64mVk2ufM3sWhqHcfN%2FV1fnydsJVCKinM&X-Amz-Signature=35cd153581b615d89aa3d53941793a87d961a7a28b4a6e88fc31b80e848e0281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXW2N3N%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSYMj7EDST17uedVT0Jfy480PCzQx%2BBr%2FWtrt%2FFxmNTgIgQXV8fp2zGrf9YdKK7jIyGMGIFAT%2Bv2i0VF73yevKrNMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHrwHYwsJFIOEjJkvSrcA5g1Qg0TjfXdh5C112UZfpm56jxBRnL%2Bld%2BWPH6l6gNVf2puu3X1mzfWPb52Ti4up2eLavQ7rL%2BSufBpo5u1eW6wWbtm2Yo2Nl6%2BluPxBMa%2FIvB23f%2FfZO76LiCuTYd4SlLgDi1lUalmOQU3twO%2Fvm8nJZB8CR9LmrU%2BpvVlVVuSxuJZjqM04H1S7wUroRrMkgjvK362gh9n%2Fzafo5WB9exm7MzWqvfUpxTDS6Ky47wdkyPGd6fj6c2XthLdwucX7QDtw8gP5o%2FUI3vH8NkMPU%2B3iylCYfa13vvXUwRJXxWY8VjpPBGPhfN%2F7xaab6mvH8d4zo2MmTPG32rdKdWMzjmmTfpYhASUzoYiJ4ZqwhFquCHHIan7QTyVKDeDHxt7PKfbekKCNAVdJZFM22IRr%2F2HnTgy24%2Bnm1MOtHuwtSMjjULb1qNUZBNhJh0OnnvVGkHFPxBLPfNkzB7HM6FbWZQxA6zo2hOqWe7TX03woZZpjNiKp1K3ETIdHTPrr9d7AM4Qa5fOtfjNt392R5Sdnypsi7ewwqFKAR0xgWjslp%2FhPG4yGYmQX2Aa%2Bq%2B4ihXtPVjU%2FIGXHm7cT74zLjPfDLRt5u2iXAWY6WXzilD5nW9ECCmXvdmOylHRoBvZML72388GOqUBkVZKRk4IK7MvMgS%2BLfsycZ%2BqW7m6vhWTYycrxZLHeMgnk%2F1f08ks0jaBHRGL4iIEa9Exli5bAFkOIkdziseO66DhTIpGYD8p%2FTV5fm95k81Rvb5llraBpT3ZMoWxMDhqcNidvzBgraGBqNJksKvquIa63kc1AAu3U%2BsC5nV7rp0LSf4PIY4KjCHJtgN64mVk2ufM3sWhqHcfN%2FV1fnydsJVCKinM&X-Amz-Signature=21836e29737224f05cba538689f192f3c764101cb76412064fd15c8371d94916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXW2N3N%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSYMj7EDST17uedVT0Jfy480PCzQx%2BBr%2FWtrt%2FFxmNTgIgQXV8fp2zGrf9YdKK7jIyGMGIFAT%2Bv2i0VF73yevKrNMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHrwHYwsJFIOEjJkvSrcA5g1Qg0TjfXdh5C112UZfpm56jxBRnL%2Bld%2BWPH6l6gNVf2puu3X1mzfWPb52Ti4up2eLavQ7rL%2BSufBpo5u1eW6wWbtm2Yo2Nl6%2BluPxBMa%2FIvB23f%2FfZO76LiCuTYd4SlLgDi1lUalmOQU3twO%2Fvm8nJZB8CR9LmrU%2BpvVlVVuSxuJZjqM04H1S7wUroRrMkgjvK362gh9n%2Fzafo5WB9exm7MzWqvfUpxTDS6Ky47wdkyPGd6fj6c2XthLdwucX7QDtw8gP5o%2FUI3vH8NkMPU%2B3iylCYfa13vvXUwRJXxWY8VjpPBGPhfN%2F7xaab6mvH8d4zo2MmTPG32rdKdWMzjmmTfpYhASUzoYiJ4ZqwhFquCHHIan7QTyVKDeDHxt7PKfbekKCNAVdJZFM22IRr%2F2HnTgy24%2Bnm1MOtHuwtSMjjULb1qNUZBNhJh0OnnvVGkHFPxBLPfNkzB7HM6FbWZQxA6zo2hOqWe7TX03woZZpjNiKp1K3ETIdHTPrr9d7AM4Qa5fOtfjNt392R5Sdnypsi7ewwqFKAR0xgWjslp%2FhPG4yGYmQX2Aa%2Bq%2B4ihXtPVjU%2FIGXHm7cT74zLjPfDLRt5u2iXAWY6WXzilD5nW9ECCmXvdmOylHRoBvZML72388GOqUBkVZKRk4IK7MvMgS%2BLfsycZ%2BqW7m6vhWTYycrxZLHeMgnk%2F1f08ks0jaBHRGL4iIEa9Exli5bAFkOIkdziseO66DhTIpGYD8p%2FTV5fm95k81Rvb5llraBpT3ZMoWxMDhqcNidvzBgraGBqNJksKvquIa63kc1AAu3U%2BsC5nV7rp0LSf4PIY4KjCHJtgN64mVk2ufM3sWhqHcfN%2FV1fnydsJVCKinM&X-Amz-Signature=81d56f16b61868dcdb9da0e6b60f9190644c07ac1bd6ed7476935d703f81be35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXW2N3N%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSYMj7EDST17uedVT0Jfy480PCzQx%2BBr%2FWtrt%2FFxmNTgIgQXV8fp2zGrf9YdKK7jIyGMGIFAT%2Bv2i0VF73yevKrNMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHrwHYwsJFIOEjJkvSrcA5g1Qg0TjfXdh5C112UZfpm56jxBRnL%2Bld%2BWPH6l6gNVf2puu3X1mzfWPb52Ti4up2eLavQ7rL%2BSufBpo5u1eW6wWbtm2Yo2Nl6%2BluPxBMa%2FIvB23f%2FfZO76LiCuTYd4SlLgDi1lUalmOQU3twO%2Fvm8nJZB8CR9LmrU%2BpvVlVVuSxuJZjqM04H1S7wUroRrMkgjvK362gh9n%2Fzafo5WB9exm7MzWqvfUpxTDS6Ky47wdkyPGd6fj6c2XthLdwucX7QDtw8gP5o%2FUI3vH8NkMPU%2B3iylCYfa13vvXUwRJXxWY8VjpPBGPhfN%2F7xaab6mvH8d4zo2MmTPG32rdKdWMzjmmTfpYhASUzoYiJ4ZqwhFquCHHIan7QTyVKDeDHxt7PKfbekKCNAVdJZFM22IRr%2F2HnTgy24%2Bnm1MOtHuwtSMjjULb1qNUZBNhJh0OnnvVGkHFPxBLPfNkzB7HM6FbWZQxA6zo2hOqWe7TX03woZZpjNiKp1K3ETIdHTPrr9d7AM4Qa5fOtfjNt392R5Sdnypsi7ewwqFKAR0xgWjslp%2FhPG4yGYmQX2Aa%2Bq%2B4ihXtPVjU%2FIGXHm7cT74zLjPfDLRt5u2iXAWY6WXzilD5nW9ECCmXvdmOylHRoBvZML72388GOqUBkVZKRk4IK7MvMgS%2BLfsycZ%2BqW7m6vhWTYycrxZLHeMgnk%2F1f08ks0jaBHRGL4iIEa9Exli5bAFkOIkdziseO66DhTIpGYD8p%2FTV5fm95k81Rvb5llraBpT3ZMoWxMDhqcNidvzBgraGBqNJksKvquIa63kc1AAu3U%2BsC5nV7rp0LSf4PIY4KjCHJtgN64mVk2ufM3sWhqHcfN%2FV1fnydsJVCKinM&X-Amz-Signature=a59c721cd78a2b44c44fe6d6eb681e029040d76dc2fd919cbd85634b56213bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

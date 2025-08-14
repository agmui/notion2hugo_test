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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7ZCQ2F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDum%2B0YxjNpnYSPKUJg9xB2zM8MwalB%2BP0d38EpAXV01AiAWj4TaKFA6WhUnB6vQ5aTbxUAA3VCx5UbZ3iY5qSiOKSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMbuuF8HURYa%2FLcMFFKtwDXSjORn25XRpH2V2qmw%2BO%2FFhXbQPYSJTZ5Qwe7OI2teUXYeY6BKy3Bfa3mcVVXdmkyg03s3YqmjyFr%2BGzTOkC3uCNBPDBUbSb%2FZO0bitaGKNVP2KZSldcEJQXhj6QEIS5rsndW6JdzrW07VVFvTfm8HSSX7L3feKhvJRzGa2laa%2FZwr%2FspAKHJBN2mVL9GbyOQAs8u5E4aG%2BPF3BWIhrbeAQTf22ijR6Fr2CQO4o%2FixU24XVZPuIRGyQwpfuv3qBIwgQ2JYdJFbaKw3wA%2B8RHHPrOPFLxhsOYDgyt%2BH%2FSS6htSMK32DUeKeBwvE7Af5EWkSvhpaciG%2FwRkfsKMNVg4yo0A9ysIiZEkfYnR%2FAEtf55abVIknWQdBqwHWg4u7dogKwFrWaEV10bcFczhF%2BqTsFiMwJ3IrQ7kEIN8ZCBmhuyvx1SJ45guW1hXAn%2FLFLh%2B2K0ssB6l4EUXfB09Zdu2Uj9oiiVy8m8Fi6KM6apeJDufqkKdtNGVFAZrglp%2BWHQOp8IGt0No7w9BwUgH0t6qpg3nLmVdNCWxsKcqWwTUR05Op2OMTIJBzQ8tYSL4GpxfJgyUCHDhbgnOlowq2i1gkKrzxQjpY1YYuncCq1iVfAsAxCaa6TAyZJihR0w3q%2F2xAY6pgEXosiN%2FMNyuy60deaQgmgsuwiD4V5NwJ76Mh%2FhOfwCzdfiOh89T24WnuwCTjkVQSKfPLgNX4LbcaUcHiZ1WMdq%2BUuE0Kp%2B%2BeqPKb49%2BiV6FIcOxJz3bvranGwPGMULNPkq2sG3uRj6EjwVI3RDz14F%2FCYNebjy5%2BPJdqE8jCAJV0afO28AEJThYDKgxHJZgfIIdWzBcSaPeeSvT7qDKcyV9fCope15&X-Amz-Signature=fd3931ce806c47424826f5fae3cff9781048cdf60436c2911b95aa11f1cb97a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7ZCQ2F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDum%2B0YxjNpnYSPKUJg9xB2zM8MwalB%2BP0d38EpAXV01AiAWj4TaKFA6WhUnB6vQ5aTbxUAA3VCx5UbZ3iY5qSiOKSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMbuuF8HURYa%2FLcMFFKtwDXSjORn25XRpH2V2qmw%2BO%2FFhXbQPYSJTZ5Qwe7OI2teUXYeY6BKy3Bfa3mcVVXdmkyg03s3YqmjyFr%2BGzTOkC3uCNBPDBUbSb%2FZO0bitaGKNVP2KZSldcEJQXhj6QEIS5rsndW6JdzrW07VVFvTfm8HSSX7L3feKhvJRzGa2laa%2FZwr%2FspAKHJBN2mVL9GbyOQAs8u5E4aG%2BPF3BWIhrbeAQTf22ijR6Fr2CQO4o%2FixU24XVZPuIRGyQwpfuv3qBIwgQ2JYdJFbaKw3wA%2B8RHHPrOPFLxhsOYDgyt%2BH%2FSS6htSMK32DUeKeBwvE7Af5EWkSvhpaciG%2FwRkfsKMNVg4yo0A9ysIiZEkfYnR%2FAEtf55abVIknWQdBqwHWg4u7dogKwFrWaEV10bcFczhF%2BqTsFiMwJ3IrQ7kEIN8ZCBmhuyvx1SJ45guW1hXAn%2FLFLh%2B2K0ssB6l4EUXfB09Zdu2Uj9oiiVy8m8Fi6KM6apeJDufqkKdtNGVFAZrglp%2BWHQOp8IGt0No7w9BwUgH0t6qpg3nLmVdNCWxsKcqWwTUR05Op2OMTIJBzQ8tYSL4GpxfJgyUCHDhbgnOlowq2i1gkKrzxQjpY1YYuncCq1iVfAsAxCaa6TAyZJihR0w3q%2F2xAY6pgEXosiN%2FMNyuy60deaQgmgsuwiD4V5NwJ76Mh%2FhOfwCzdfiOh89T24WnuwCTjkVQSKfPLgNX4LbcaUcHiZ1WMdq%2BUuE0Kp%2B%2BeqPKb49%2BiV6FIcOxJz3bvranGwPGMULNPkq2sG3uRj6EjwVI3RDz14F%2FCYNebjy5%2BPJdqE8jCAJV0afO28AEJThYDKgxHJZgfIIdWzBcSaPeeSvT7qDKcyV9fCope15&X-Amz-Signature=fabf80b06dbe809bccf50699661ee514e49d9879033e9d70430948f2eefeaeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7ZCQ2F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDum%2B0YxjNpnYSPKUJg9xB2zM8MwalB%2BP0d38EpAXV01AiAWj4TaKFA6WhUnB6vQ5aTbxUAA3VCx5UbZ3iY5qSiOKSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMbuuF8HURYa%2FLcMFFKtwDXSjORn25XRpH2V2qmw%2BO%2FFhXbQPYSJTZ5Qwe7OI2teUXYeY6BKy3Bfa3mcVVXdmkyg03s3YqmjyFr%2BGzTOkC3uCNBPDBUbSb%2FZO0bitaGKNVP2KZSldcEJQXhj6QEIS5rsndW6JdzrW07VVFvTfm8HSSX7L3feKhvJRzGa2laa%2FZwr%2FspAKHJBN2mVL9GbyOQAs8u5E4aG%2BPF3BWIhrbeAQTf22ijR6Fr2CQO4o%2FixU24XVZPuIRGyQwpfuv3qBIwgQ2JYdJFbaKw3wA%2B8RHHPrOPFLxhsOYDgyt%2BH%2FSS6htSMK32DUeKeBwvE7Af5EWkSvhpaciG%2FwRkfsKMNVg4yo0A9ysIiZEkfYnR%2FAEtf55abVIknWQdBqwHWg4u7dogKwFrWaEV10bcFczhF%2BqTsFiMwJ3IrQ7kEIN8ZCBmhuyvx1SJ45guW1hXAn%2FLFLh%2B2K0ssB6l4EUXfB09Zdu2Uj9oiiVy8m8Fi6KM6apeJDufqkKdtNGVFAZrglp%2BWHQOp8IGt0No7w9BwUgH0t6qpg3nLmVdNCWxsKcqWwTUR05Op2OMTIJBzQ8tYSL4GpxfJgyUCHDhbgnOlowq2i1gkKrzxQjpY1YYuncCq1iVfAsAxCaa6TAyZJihR0w3q%2F2xAY6pgEXosiN%2FMNyuy60deaQgmgsuwiD4V5NwJ76Mh%2FhOfwCzdfiOh89T24WnuwCTjkVQSKfPLgNX4LbcaUcHiZ1WMdq%2BUuE0Kp%2B%2BeqPKb49%2BiV6FIcOxJz3bvranGwPGMULNPkq2sG3uRj6EjwVI3RDz14F%2FCYNebjy5%2BPJdqE8jCAJV0afO28AEJThYDKgxHJZgfIIdWzBcSaPeeSvT7qDKcyV9fCope15&X-Amz-Signature=eed26a6cdcfab5ed916ee3fe25c0ee42a2e0a7853936f029dfbb15ece6b7ad96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7ZCQ2F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDum%2B0YxjNpnYSPKUJg9xB2zM8MwalB%2BP0d38EpAXV01AiAWj4TaKFA6WhUnB6vQ5aTbxUAA3VCx5UbZ3iY5qSiOKSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMbuuF8HURYa%2FLcMFFKtwDXSjORn25XRpH2V2qmw%2BO%2FFhXbQPYSJTZ5Qwe7OI2teUXYeY6BKy3Bfa3mcVVXdmkyg03s3YqmjyFr%2BGzTOkC3uCNBPDBUbSb%2FZO0bitaGKNVP2KZSldcEJQXhj6QEIS5rsndW6JdzrW07VVFvTfm8HSSX7L3feKhvJRzGa2laa%2FZwr%2FspAKHJBN2mVL9GbyOQAs8u5E4aG%2BPF3BWIhrbeAQTf22ijR6Fr2CQO4o%2FixU24XVZPuIRGyQwpfuv3qBIwgQ2JYdJFbaKw3wA%2B8RHHPrOPFLxhsOYDgyt%2BH%2FSS6htSMK32DUeKeBwvE7Af5EWkSvhpaciG%2FwRkfsKMNVg4yo0A9ysIiZEkfYnR%2FAEtf55abVIknWQdBqwHWg4u7dogKwFrWaEV10bcFczhF%2BqTsFiMwJ3IrQ7kEIN8ZCBmhuyvx1SJ45guW1hXAn%2FLFLh%2B2K0ssB6l4EUXfB09Zdu2Uj9oiiVy8m8Fi6KM6apeJDufqkKdtNGVFAZrglp%2BWHQOp8IGt0No7w9BwUgH0t6qpg3nLmVdNCWxsKcqWwTUR05Op2OMTIJBzQ8tYSL4GpxfJgyUCHDhbgnOlowq2i1gkKrzxQjpY1YYuncCq1iVfAsAxCaa6TAyZJihR0w3q%2F2xAY6pgEXosiN%2FMNyuy60deaQgmgsuwiD4V5NwJ76Mh%2FhOfwCzdfiOh89T24WnuwCTjkVQSKfPLgNX4LbcaUcHiZ1WMdq%2BUuE0Kp%2B%2BeqPKb49%2BiV6FIcOxJz3bvranGwPGMULNPkq2sG3uRj6EjwVI3RDz14F%2FCYNebjy5%2BPJdqE8jCAJV0afO28AEJThYDKgxHJZgfIIdWzBcSaPeeSvT7qDKcyV9fCope15&X-Amz-Signature=4bb83124f6bf57643f730fbe275e23223c04c2cf0c547a411141aeec7c9cadd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7ZCQ2F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDum%2B0YxjNpnYSPKUJg9xB2zM8MwalB%2BP0d38EpAXV01AiAWj4TaKFA6WhUnB6vQ5aTbxUAA3VCx5UbZ3iY5qSiOKSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMbuuF8HURYa%2FLcMFFKtwDXSjORn25XRpH2V2qmw%2BO%2FFhXbQPYSJTZ5Qwe7OI2teUXYeY6BKy3Bfa3mcVVXdmkyg03s3YqmjyFr%2BGzTOkC3uCNBPDBUbSb%2FZO0bitaGKNVP2KZSldcEJQXhj6QEIS5rsndW6JdzrW07VVFvTfm8HSSX7L3feKhvJRzGa2laa%2FZwr%2FspAKHJBN2mVL9GbyOQAs8u5E4aG%2BPF3BWIhrbeAQTf22ijR6Fr2CQO4o%2FixU24XVZPuIRGyQwpfuv3qBIwgQ2JYdJFbaKw3wA%2B8RHHPrOPFLxhsOYDgyt%2BH%2FSS6htSMK32DUeKeBwvE7Af5EWkSvhpaciG%2FwRkfsKMNVg4yo0A9ysIiZEkfYnR%2FAEtf55abVIknWQdBqwHWg4u7dogKwFrWaEV10bcFczhF%2BqTsFiMwJ3IrQ7kEIN8ZCBmhuyvx1SJ45guW1hXAn%2FLFLh%2B2K0ssB6l4EUXfB09Zdu2Uj9oiiVy8m8Fi6KM6apeJDufqkKdtNGVFAZrglp%2BWHQOp8IGt0No7w9BwUgH0t6qpg3nLmVdNCWxsKcqWwTUR05Op2OMTIJBzQ8tYSL4GpxfJgyUCHDhbgnOlowq2i1gkKrzxQjpY1YYuncCq1iVfAsAxCaa6TAyZJihR0w3q%2F2xAY6pgEXosiN%2FMNyuy60deaQgmgsuwiD4V5NwJ76Mh%2FhOfwCzdfiOh89T24WnuwCTjkVQSKfPLgNX4LbcaUcHiZ1WMdq%2BUuE0Kp%2B%2BeqPKb49%2BiV6FIcOxJz3bvranGwPGMULNPkq2sG3uRj6EjwVI3RDz14F%2FCYNebjy5%2BPJdqE8jCAJV0afO28AEJThYDKgxHJZgfIIdWzBcSaPeeSvT7qDKcyV9fCope15&X-Amz-Signature=2491a1302e0c5c739c424423e881454db2d5ca9c8abd5a44752bab6318ea593b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7ZCQ2F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDum%2B0YxjNpnYSPKUJg9xB2zM8MwalB%2BP0d38EpAXV01AiAWj4TaKFA6WhUnB6vQ5aTbxUAA3VCx5UbZ3iY5qSiOKSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMbuuF8HURYa%2FLcMFFKtwDXSjORn25XRpH2V2qmw%2BO%2FFhXbQPYSJTZ5Qwe7OI2teUXYeY6BKy3Bfa3mcVVXdmkyg03s3YqmjyFr%2BGzTOkC3uCNBPDBUbSb%2FZO0bitaGKNVP2KZSldcEJQXhj6QEIS5rsndW6JdzrW07VVFvTfm8HSSX7L3feKhvJRzGa2laa%2FZwr%2FspAKHJBN2mVL9GbyOQAs8u5E4aG%2BPF3BWIhrbeAQTf22ijR6Fr2CQO4o%2FixU24XVZPuIRGyQwpfuv3qBIwgQ2JYdJFbaKw3wA%2B8RHHPrOPFLxhsOYDgyt%2BH%2FSS6htSMK32DUeKeBwvE7Af5EWkSvhpaciG%2FwRkfsKMNVg4yo0A9ysIiZEkfYnR%2FAEtf55abVIknWQdBqwHWg4u7dogKwFrWaEV10bcFczhF%2BqTsFiMwJ3IrQ7kEIN8ZCBmhuyvx1SJ45guW1hXAn%2FLFLh%2B2K0ssB6l4EUXfB09Zdu2Uj9oiiVy8m8Fi6KM6apeJDufqkKdtNGVFAZrglp%2BWHQOp8IGt0No7w9BwUgH0t6qpg3nLmVdNCWxsKcqWwTUR05Op2OMTIJBzQ8tYSL4GpxfJgyUCHDhbgnOlowq2i1gkKrzxQjpY1YYuncCq1iVfAsAxCaa6TAyZJihR0w3q%2F2xAY6pgEXosiN%2FMNyuy60deaQgmgsuwiD4V5NwJ76Mh%2FhOfwCzdfiOh89T24WnuwCTjkVQSKfPLgNX4LbcaUcHiZ1WMdq%2BUuE0Kp%2B%2BeqPKb49%2BiV6FIcOxJz3bvranGwPGMULNPkq2sG3uRj6EjwVI3RDz14F%2FCYNebjy5%2BPJdqE8jCAJV0afO28AEJThYDKgxHJZgfIIdWzBcSaPeeSvT7qDKcyV9fCope15&X-Amz-Signature=8117731eaa800f0cea74cf2a624f2dc6a7a4451020d89f524511126e16d4f179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7ZCQ2F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDum%2B0YxjNpnYSPKUJg9xB2zM8MwalB%2BP0d38EpAXV01AiAWj4TaKFA6WhUnB6vQ5aTbxUAA3VCx5UbZ3iY5qSiOKSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMbuuF8HURYa%2FLcMFFKtwDXSjORn25XRpH2V2qmw%2BO%2FFhXbQPYSJTZ5Qwe7OI2teUXYeY6BKy3Bfa3mcVVXdmkyg03s3YqmjyFr%2BGzTOkC3uCNBPDBUbSb%2FZO0bitaGKNVP2KZSldcEJQXhj6QEIS5rsndW6JdzrW07VVFvTfm8HSSX7L3feKhvJRzGa2laa%2FZwr%2FspAKHJBN2mVL9GbyOQAs8u5E4aG%2BPF3BWIhrbeAQTf22ijR6Fr2CQO4o%2FixU24XVZPuIRGyQwpfuv3qBIwgQ2JYdJFbaKw3wA%2B8RHHPrOPFLxhsOYDgyt%2BH%2FSS6htSMK32DUeKeBwvE7Af5EWkSvhpaciG%2FwRkfsKMNVg4yo0A9ysIiZEkfYnR%2FAEtf55abVIknWQdBqwHWg4u7dogKwFrWaEV10bcFczhF%2BqTsFiMwJ3IrQ7kEIN8ZCBmhuyvx1SJ45guW1hXAn%2FLFLh%2B2K0ssB6l4EUXfB09Zdu2Uj9oiiVy8m8Fi6KM6apeJDufqkKdtNGVFAZrglp%2BWHQOp8IGt0No7w9BwUgH0t6qpg3nLmVdNCWxsKcqWwTUR05Op2OMTIJBzQ8tYSL4GpxfJgyUCHDhbgnOlowq2i1gkKrzxQjpY1YYuncCq1iVfAsAxCaa6TAyZJihR0w3q%2F2xAY6pgEXosiN%2FMNyuy60deaQgmgsuwiD4V5NwJ76Mh%2FhOfwCzdfiOh89T24WnuwCTjkVQSKfPLgNX4LbcaUcHiZ1WMdq%2BUuE0Kp%2B%2BeqPKb49%2BiV6FIcOxJz3bvranGwPGMULNPkq2sG3uRj6EjwVI3RDz14F%2FCYNebjy5%2BPJdqE8jCAJV0afO28AEJThYDKgxHJZgfIIdWzBcSaPeeSvT7qDKcyV9fCope15&X-Amz-Signature=a94b69aea684587ed366fa794cf5d156b9a3fbe073ec0dc65bc26cc3347e982f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

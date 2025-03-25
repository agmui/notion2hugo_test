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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFEPXFO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuN3b4HUBP6la2ToOq3qeNOvXa7%2BqrwIz1B%2BVJlMMvFAiAVlbk3IfM7vzbHByfq4wm0QEgpsJ6eqq2ij0t7C3bfYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjaiJzVj5ZMZ1qGPoKtwDiRmz0qba1aQZqRIzNDI7U%2F9jzyxPZPHCiuheNnorJrl2ygXrue22dYFparxqIjqmXDmdwmdZBUV%2Bnjs30KhIoaMSYWpEfMACfXcNwttqaiukS6BI1%2FdprlXslmXBk4%2FNRdAxuNMU0DsLZwMnbwlhh24qQB%2FH6oehpZAk5YhtkT7wclla5wd3zoKt8%2FnlyEh4ssLwauVlKOr9lqxyvA80HqGdH0Fbj403ay%2F%2FC3o0AcdjOQR0eGkfgoYL7JKMd6QMM4slOyV%2B%2Bxc31mIrkOW1NJgPGurKzVxQGWVijQxld9q4fVKeXXJZEQ6Cga2kLwh31%2BMhvgda5V%2B2Pl9v5m8f7C0tUumXAuFULHIWSuw1Xy4yJ4AhV06NuemVRvZyclSysPdCuGABFOyWJKN5rFsOrjy8ZoJzcbUy4M%2FCbZh9zn3V62RKzDzskXhn1ADjDjttx6%2BIgqJb%2FzGoNmdNED%2Fmgt1kHOhPuWwI7a1FfXsTUZ2WL9ZdRbuLDLtmSxhQuxtuWDcaNgDPhHH3KIYpeSZh3XbyYl9VRIElXSaF8uaWs0%2BGYSztLa6eOa13IEjNi9Pl3iFwq9DvJF8lfASG2AwXb%2FZe23Xerc%2B1%2FO7zAyx1K5PRYuSxuEp2KlS9TCgw1caKvwY6pgFbgL%2Fk9747fwka71ta9%2FPLATRelrBb5jShgC5ZLGXVE%2F%2BXE0n0x%2FXn9goTBNUesmnuAsAMsWe3luNnEolt%2BAqGqTh2uqaZC5FpKNPhYiF3M8QZo35JA%2BsAR2XZQ8EyDmxWULLeXhAD%2FLbG874BS%2F9q0IuJFahk8aGkIquQvQWa8pM3uPcy7nDPEDzEu30c814Qf71OpGag%2BJ6JjRrHg5irMDruUkQU&X-Amz-Signature=c9de017d16c9694d6c86a0c33647510c8cb9d4cdafe3244be1bff7d5a91d2211&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFEPXFO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuN3b4HUBP6la2ToOq3qeNOvXa7%2BqrwIz1B%2BVJlMMvFAiAVlbk3IfM7vzbHByfq4wm0QEgpsJ6eqq2ij0t7C3bfYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjaiJzVj5ZMZ1qGPoKtwDiRmz0qba1aQZqRIzNDI7U%2F9jzyxPZPHCiuheNnorJrl2ygXrue22dYFparxqIjqmXDmdwmdZBUV%2Bnjs30KhIoaMSYWpEfMACfXcNwttqaiukS6BI1%2FdprlXslmXBk4%2FNRdAxuNMU0DsLZwMnbwlhh24qQB%2FH6oehpZAk5YhtkT7wclla5wd3zoKt8%2FnlyEh4ssLwauVlKOr9lqxyvA80HqGdH0Fbj403ay%2F%2FC3o0AcdjOQR0eGkfgoYL7JKMd6QMM4slOyV%2B%2Bxc31mIrkOW1NJgPGurKzVxQGWVijQxld9q4fVKeXXJZEQ6Cga2kLwh31%2BMhvgda5V%2B2Pl9v5m8f7C0tUumXAuFULHIWSuw1Xy4yJ4AhV06NuemVRvZyclSysPdCuGABFOyWJKN5rFsOrjy8ZoJzcbUy4M%2FCbZh9zn3V62RKzDzskXhn1ADjDjttx6%2BIgqJb%2FzGoNmdNED%2Fmgt1kHOhPuWwI7a1FfXsTUZ2WL9ZdRbuLDLtmSxhQuxtuWDcaNgDPhHH3KIYpeSZh3XbyYl9VRIElXSaF8uaWs0%2BGYSztLa6eOa13IEjNi9Pl3iFwq9DvJF8lfASG2AwXb%2FZe23Xerc%2B1%2FO7zAyx1K5PRYuSxuEp2KlS9TCgw1caKvwY6pgFbgL%2Fk9747fwka71ta9%2FPLATRelrBb5jShgC5ZLGXVE%2F%2BXE0n0x%2FXn9goTBNUesmnuAsAMsWe3luNnEolt%2BAqGqTh2uqaZC5FpKNPhYiF3M8QZo35JA%2BsAR2XZQ8EyDmxWULLeXhAD%2FLbG874BS%2F9q0IuJFahk8aGkIquQvQWa8pM3uPcy7nDPEDzEu30c814Qf71OpGag%2BJ6JjRrHg5irMDruUkQU&X-Amz-Signature=9798ddf324416d005d37634d41e55aab6ad564924e92f9362babb3e8ae623523&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFEPXFO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuN3b4HUBP6la2ToOq3qeNOvXa7%2BqrwIz1B%2BVJlMMvFAiAVlbk3IfM7vzbHByfq4wm0QEgpsJ6eqq2ij0t7C3bfYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjaiJzVj5ZMZ1qGPoKtwDiRmz0qba1aQZqRIzNDI7U%2F9jzyxPZPHCiuheNnorJrl2ygXrue22dYFparxqIjqmXDmdwmdZBUV%2Bnjs30KhIoaMSYWpEfMACfXcNwttqaiukS6BI1%2FdprlXslmXBk4%2FNRdAxuNMU0DsLZwMnbwlhh24qQB%2FH6oehpZAk5YhtkT7wclla5wd3zoKt8%2FnlyEh4ssLwauVlKOr9lqxyvA80HqGdH0Fbj403ay%2F%2FC3o0AcdjOQR0eGkfgoYL7JKMd6QMM4slOyV%2B%2Bxc31mIrkOW1NJgPGurKzVxQGWVijQxld9q4fVKeXXJZEQ6Cga2kLwh31%2BMhvgda5V%2B2Pl9v5m8f7C0tUumXAuFULHIWSuw1Xy4yJ4AhV06NuemVRvZyclSysPdCuGABFOyWJKN5rFsOrjy8ZoJzcbUy4M%2FCbZh9zn3V62RKzDzskXhn1ADjDjttx6%2BIgqJb%2FzGoNmdNED%2Fmgt1kHOhPuWwI7a1FfXsTUZ2WL9ZdRbuLDLtmSxhQuxtuWDcaNgDPhHH3KIYpeSZh3XbyYl9VRIElXSaF8uaWs0%2BGYSztLa6eOa13IEjNi9Pl3iFwq9DvJF8lfASG2AwXb%2FZe23Xerc%2B1%2FO7zAyx1K5PRYuSxuEp2KlS9TCgw1caKvwY6pgFbgL%2Fk9747fwka71ta9%2FPLATRelrBb5jShgC5ZLGXVE%2F%2BXE0n0x%2FXn9goTBNUesmnuAsAMsWe3luNnEolt%2BAqGqTh2uqaZC5FpKNPhYiF3M8QZo35JA%2BsAR2XZQ8EyDmxWULLeXhAD%2FLbG874BS%2F9q0IuJFahk8aGkIquQvQWa8pM3uPcy7nDPEDzEu30c814Qf71OpGag%2BJ6JjRrHg5irMDruUkQU&X-Amz-Signature=5077061458ef2d124aa0b371b43213578a9489161242065c4dc7e9c66c1c9808&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFEPXFO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuN3b4HUBP6la2ToOq3qeNOvXa7%2BqrwIz1B%2BVJlMMvFAiAVlbk3IfM7vzbHByfq4wm0QEgpsJ6eqq2ij0t7C3bfYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjaiJzVj5ZMZ1qGPoKtwDiRmz0qba1aQZqRIzNDI7U%2F9jzyxPZPHCiuheNnorJrl2ygXrue22dYFparxqIjqmXDmdwmdZBUV%2Bnjs30KhIoaMSYWpEfMACfXcNwttqaiukS6BI1%2FdprlXslmXBk4%2FNRdAxuNMU0DsLZwMnbwlhh24qQB%2FH6oehpZAk5YhtkT7wclla5wd3zoKt8%2FnlyEh4ssLwauVlKOr9lqxyvA80HqGdH0Fbj403ay%2F%2FC3o0AcdjOQR0eGkfgoYL7JKMd6QMM4slOyV%2B%2Bxc31mIrkOW1NJgPGurKzVxQGWVijQxld9q4fVKeXXJZEQ6Cga2kLwh31%2BMhvgda5V%2B2Pl9v5m8f7C0tUumXAuFULHIWSuw1Xy4yJ4AhV06NuemVRvZyclSysPdCuGABFOyWJKN5rFsOrjy8ZoJzcbUy4M%2FCbZh9zn3V62RKzDzskXhn1ADjDjttx6%2BIgqJb%2FzGoNmdNED%2Fmgt1kHOhPuWwI7a1FfXsTUZ2WL9ZdRbuLDLtmSxhQuxtuWDcaNgDPhHH3KIYpeSZh3XbyYl9VRIElXSaF8uaWs0%2BGYSztLa6eOa13IEjNi9Pl3iFwq9DvJF8lfASG2AwXb%2FZe23Xerc%2B1%2FO7zAyx1K5PRYuSxuEp2KlS9TCgw1caKvwY6pgFbgL%2Fk9747fwka71ta9%2FPLATRelrBb5jShgC5ZLGXVE%2F%2BXE0n0x%2FXn9goTBNUesmnuAsAMsWe3luNnEolt%2BAqGqTh2uqaZC5FpKNPhYiF3M8QZo35JA%2BsAR2XZQ8EyDmxWULLeXhAD%2FLbG874BS%2F9q0IuJFahk8aGkIquQvQWa8pM3uPcy7nDPEDzEu30c814Qf71OpGag%2BJ6JjRrHg5irMDruUkQU&X-Amz-Signature=3d4891e93c5aea731c3b6e2f2b4333d982bfffff9354eed56b3dac2b5ca0013a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFEPXFO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuN3b4HUBP6la2ToOq3qeNOvXa7%2BqrwIz1B%2BVJlMMvFAiAVlbk3IfM7vzbHByfq4wm0QEgpsJ6eqq2ij0t7C3bfYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjaiJzVj5ZMZ1qGPoKtwDiRmz0qba1aQZqRIzNDI7U%2F9jzyxPZPHCiuheNnorJrl2ygXrue22dYFparxqIjqmXDmdwmdZBUV%2Bnjs30KhIoaMSYWpEfMACfXcNwttqaiukS6BI1%2FdprlXslmXBk4%2FNRdAxuNMU0DsLZwMnbwlhh24qQB%2FH6oehpZAk5YhtkT7wclla5wd3zoKt8%2FnlyEh4ssLwauVlKOr9lqxyvA80HqGdH0Fbj403ay%2F%2FC3o0AcdjOQR0eGkfgoYL7JKMd6QMM4slOyV%2B%2Bxc31mIrkOW1NJgPGurKzVxQGWVijQxld9q4fVKeXXJZEQ6Cga2kLwh31%2BMhvgda5V%2B2Pl9v5m8f7C0tUumXAuFULHIWSuw1Xy4yJ4AhV06NuemVRvZyclSysPdCuGABFOyWJKN5rFsOrjy8ZoJzcbUy4M%2FCbZh9zn3V62RKzDzskXhn1ADjDjttx6%2BIgqJb%2FzGoNmdNED%2Fmgt1kHOhPuWwI7a1FfXsTUZ2WL9ZdRbuLDLtmSxhQuxtuWDcaNgDPhHH3KIYpeSZh3XbyYl9VRIElXSaF8uaWs0%2BGYSztLa6eOa13IEjNi9Pl3iFwq9DvJF8lfASG2AwXb%2FZe23Xerc%2B1%2FO7zAyx1K5PRYuSxuEp2KlS9TCgw1caKvwY6pgFbgL%2Fk9747fwka71ta9%2FPLATRelrBb5jShgC5ZLGXVE%2F%2BXE0n0x%2FXn9goTBNUesmnuAsAMsWe3luNnEolt%2BAqGqTh2uqaZC5FpKNPhYiF3M8QZo35JA%2BsAR2XZQ8EyDmxWULLeXhAD%2FLbG874BS%2F9q0IuJFahk8aGkIquQvQWa8pM3uPcy7nDPEDzEu30c814Qf71OpGag%2BJ6JjRrHg5irMDruUkQU&X-Amz-Signature=1e732294b90c11aa0292ab20dcd47b8d026567972270a993e64e5caacea47c68&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFEPXFO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuN3b4HUBP6la2ToOq3qeNOvXa7%2BqrwIz1B%2BVJlMMvFAiAVlbk3IfM7vzbHByfq4wm0QEgpsJ6eqq2ij0t7C3bfYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjaiJzVj5ZMZ1qGPoKtwDiRmz0qba1aQZqRIzNDI7U%2F9jzyxPZPHCiuheNnorJrl2ygXrue22dYFparxqIjqmXDmdwmdZBUV%2Bnjs30KhIoaMSYWpEfMACfXcNwttqaiukS6BI1%2FdprlXslmXBk4%2FNRdAxuNMU0DsLZwMnbwlhh24qQB%2FH6oehpZAk5YhtkT7wclla5wd3zoKt8%2FnlyEh4ssLwauVlKOr9lqxyvA80HqGdH0Fbj403ay%2F%2FC3o0AcdjOQR0eGkfgoYL7JKMd6QMM4slOyV%2B%2Bxc31mIrkOW1NJgPGurKzVxQGWVijQxld9q4fVKeXXJZEQ6Cga2kLwh31%2BMhvgda5V%2B2Pl9v5m8f7C0tUumXAuFULHIWSuw1Xy4yJ4AhV06NuemVRvZyclSysPdCuGABFOyWJKN5rFsOrjy8ZoJzcbUy4M%2FCbZh9zn3V62RKzDzskXhn1ADjDjttx6%2BIgqJb%2FzGoNmdNED%2Fmgt1kHOhPuWwI7a1FfXsTUZ2WL9ZdRbuLDLtmSxhQuxtuWDcaNgDPhHH3KIYpeSZh3XbyYl9VRIElXSaF8uaWs0%2BGYSztLa6eOa13IEjNi9Pl3iFwq9DvJF8lfASG2AwXb%2FZe23Xerc%2B1%2FO7zAyx1K5PRYuSxuEp2KlS9TCgw1caKvwY6pgFbgL%2Fk9747fwka71ta9%2FPLATRelrBb5jShgC5ZLGXVE%2F%2BXE0n0x%2FXn9goTBNUesmnuAsAMsWe3luNnEolt%2BAqGqTh2uqaZC5FpKNPhYiF3M8QZo35JA%2BsAR2XZQ8EyDmxWULLeXhAD%2FLbG874BS%2F9q0IuJFahk8aGkIquQvQWa8pM3uPcy7nDPEDzEu30c814Qf71OpGag%2BJ6JjRrHg5irMDruUkQU&X-Amz-Signature=2702153f3aeb5e77e5835c82e9a62ef35e59f664d6b63cb91c10382b63dbf6c8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFEPXFO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuN3b4HUBP6la2ToOq3qeNOvXa7%2BqrwIz1B%2BVJlMMvFAiAVlbk3IfM7vzbHByfq4wm0QEgpsJ6eqq2ij0t7C3bfYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjaiJzVj5ZMZ1qGPoKtwDiRmz0qba1aQZqRIzNDI7U%2F9jzyxPZPHCiuheNnorJrl2ygXrue22dYFparxqIjqmXDmdwmdZBUV%2Bnjs30KhIoaMSYWpEfMACfXcNwttqaiukS6BI1%2FdprlXslmXBk4%2FNRdAxuNMU0DsLZwMnbwlhh24qQB%2FH6oehpZAk5YhtkT7wclla5wd3zoKt8%2FnlyEh4ssLwauVlKOr9lqxyvA80HqGdH0Fbj403ay%2F%2FC3o0AcdjOQR0eGkfgoYL7JKMd6QMM4slOyV%2B%2Bxc31mIrkOW1NJgPGurKzVxQGWVijQxld9q4fVKeXXJZEQ6Cga2kLwh31%2BMhvgda5V%2B2Pl9v5m8f7C0tUumXAuFULHIWSuw1Xy4yJ4AhV06NuemVRvZyclSysPdCuGABFOyWJKN5rFsOrjy8ZoJzcbUy4M%2FCbZh9zn3V62RKzDzskXhn1ADjDjttx6%2BIgqJb%2FzGoNmdNED%2Fmgt1kHOhPuWwI7a1FfXsTUZ2WL9ZdRbuLDLtmSxhQuxtuWDcaNgDPhHH3KIYpeSZh3XbyYl9VRIElXSaF8uaWs0%2BGYSztLa6eOa13IEjNi9Pl3iFwq9DvJF8lfASG2AwXb%2FZe23Xerc%2B1%2FO7zAyx1K5PRYuSxuEp2KlS9TCgw1caKvwY6pgFbgL%2Fk9747fwka71ta9%2FPLATRelrBb5jShgC5ZLGXVE%2F%2BXE0n0x%2FXn9goTBNUesmnuAsAMsWe3luNnEolt%2BAqGqTh2uqaZC5FpKNPhYiF3M8QZo35JA%2BsAR2XZQ8EyDmxWULLeXhAD%2FLbG874BS%2F9q0IuJFahk8aGkIquQvQWa8pM3uPcy7nDPEDzEu30c814Qf71OpGag%2BJ6JjRrHg5irMDruUkQU&X-Amz-Signature=635d85c84261a4d7a91b30bb11af7b76d86d81038b840f9b3ea9d441d5c8782f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

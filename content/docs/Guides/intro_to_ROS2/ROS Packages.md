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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3SAGLZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHiJr31vV%2F15Upc%2FLDo72791IcOGJn%2FLrC%2BkWkImW3OkAiEApc6ODfGxD99W8X0G76qfEJByibr4FkD%2FDkYu2xw96R8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGfxilxk0N3HCklMSrcA2AUPrkaMvn5I9Uv9KknCPBYuEgxu6nkYSKhn7Xp3MYjR2E%2FYfTE4piiir1NtYE9ER8U4Ts4WrM%2B4nEBMwzWQUg68I06HCaqY5BYgkId7lpZPt6P1vg%2BAzl5%2BvkHfBmrWm6sIodZuacf%2BsRUUiiXEskJbbPVPDaj15VVdmzjEwmMqBTuEyD45XCHiywSq78ZolyzJ8hIpghOIFAjKHQJUCtDI6601KN%2BfJU16AqFtOB7rtA%2FyfCYTlnFrlLaKg3VMQryABMhgAD4OoTDHvV5GHHk3l1w1yzrSKjtLbCnmGR1fiDnW3LOmjJyfekaM4VZFHf25CDgTpJn1kMZuFY57Dz2e70dln71oPF40dwtcSt%2Bz0Ny2jnSg3C8O6Whe1JS%2FwHJK6URUkDGhcH91dPsPNGEIDv7JBcZAWUDnguN5jEgIKOk28pdJz2brPQMrV19XbOYYWvrQ6fvf4DL9XcG11H0AQqmvAPLAaKMPOxMa10H8KZm5GG8MBdOlHpMmObW1QEVLQfzmalriKWWL7VyQG6lTVdCm2ojsBFRtCV5kmWI7FRouapZuhuJ29T2nHX38mxwPM0UWpwRMR6nbpXkbaK31jt54Jm0VPLelUuAOx1QLwf0knZoEATOm7sQMPCx0r0GOqUBv6BVSwJzWE0OUKtFIXOxQZcV%2F%2BDiMGsVuqXx4ktKc02GAqM7aSoof8GpioIS6A%2Bye50byTBwO6rKzD8xHpyJiqlIKL5SDxI5Xyx6RgoeJd0bEhKz1XliEweH8YZ2z3C9eh5Leady%2BgkX%2BaTHBk48%2FDk0Z99zHShOjWbZyvkGj%2BBReoU0PkXj7CJ0uqwg5eEJYK%2Bd%2B11645E%2BDYQQafNYuW2G9frr&X-Amz-Signature=d49f6043f316358d5255e53f41a971be1510cdbb4ebed4b14b24953432755b39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3SAGLZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHiJr31vV%2F15Upc%2FLDo72791IcOGJn%2FLrC%2BkWkImW3OkAiEApc6ODfGxD99W8X0G76qfEJByibr4FkD%2FDkYu2xw96R8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGfxilxk0N3HCklMSrcA2AUPrkaMvn5I9Uv9KknCPBYuEgxu6nkYSKhn7Xp3MYjR2E%2FYfTE4piiir1NtYE9ER8U4Ts4WrM%2B4nEBMwzWQUg68I06HCaqY5BYgkId7lpZPt6P1vg%2BAzl5%2BvkHfBmrWm6sIodZuacf%2BsRUUiiXEskJbbPVPDaj15VVdmzjEwmMqBTuEyD45XCHiywSq78ZolyzJ8hIpghOIFAjKHQJUCtDI6601KN%2BfJU16AqFtOB7rtA%2FyfCYTlnFrlLaKg3VMQryABMhgAD4OoTDHvV5GHHk3l1w1yzrSKjtLbCnmGR1fiDnW3LOmjJyfekaM4VZFHf25CDgTpJn1kMZuFY57Dz2e70dln71oPF40dwtcSt%2Bz0Ny2jnSg3C8O6Whe1JS%2FwHJK6URUkDGhcH91dPsPNGEIDv7JBcZAWUDnguN5jEgIKOk28pdJz2brPQMrV19XbOYYWvrQ6fvf4DL9XcG11H0AQqmvAPLAaKMPOxMa10H8KZm5GG8MBdOlHpMmObW1QEVLQfzmalriKWWL7VyQG6lTVdCm2ojsBFRtCV5kmWI7FRouapZuhuJ29T2nHX38mxwPM0UWpwRMR6nbpXkbaK31jt54Jm0VPLelUuAOx1QLwf0knZoEATOm7sQMPCx0r0GOqUBv6BVSwJzWE0OUKtFIXOxQZcV%2F%2BDiMGsVuqXx4ktKc02GAqM7aSoof8GpioIS6A%2Bye50byTBwO6rKzD8xHpyJiqlIKL5SDxI5Xyx6RgoeJd0bEhKz1XliEweH8YZ2z3C9eh5Leady%2BgkX%2BaTHBk48%2FDk0Z99zHShOjWbZyvkGj%2BBReoU0PkXj7CJ0uqwg5eEJYK%2Bd%2B11645E%2BDYQQafNYuW2G9frr&X-Amz-Signature=b5341f3b1a85bdbe3bec178afc2c2604d4254ac4444cb1d09f090fc82dac3458&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3SAGLZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHiJr31vV%2F15Upc%2FLDo72791IcOGJn%2FLrC%2BkWkImW3OkAiEApc6ODfGxD99W8X0G76qfEJByibr4FkD%2FDkYu2xw96R8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGfxilxk0N3HCklMSrcA2AUPrkaMvn5I9Uv9KknCPBYuEgxu6nkYSKhn7Xp3MYjR2E%2FYfTE4piiir1NtYE9ER8U4Ts4WrM%2B4nEBMwzWQUg68I06HCaqY5BYgkId7lpZPt6P1vg%2BAzl5%2BvkHfBmrWm6sIodZuacf%2BsRUUiiXEskJbbPVPDaj15VVdmzjEwmMqBTuEyD45XCHiywSq78ZolyzJ8hIpghOIFAjKHQJUCtDI6601KN%2BfJU16AqFtOB7rtA%2FyfCYTlnFrlLaKg3VMQryABMhgAD4OoTDHvV5GHHk3l1w1yzrSKjtLbCnmGR1fiDnW3LOmjJyfekaM4VZFHf25CDgTpJn1kMZuFY57Dz2e70dln71oPF40dwtcSt%2Bz0Ny2jnSg3C8O6Whe1JS%2FwHJK6URUkDGhcH91dPsPNGEIDv7JBcZAWUDnguN5jEgIKOk28pdJz2brPQMrV19XbOYYWvrQ6fvf4DL9XcG11H0AQqmvAPLAaKMPOxMa10H8KZm5GG8MBdOlHpMmObW1QEVLQfzmalriKWWL7VyQG6lTVdCm2ojsBFRtCV5kmWI7FRouapZuhuJ29T2nHX38mxwPM0UWpwRMR6nbpXkbaK31jt54Jm0VPLelUuAOx1QLwf0knZoEATOm7sQMPCx0r0GOqUBv6BVSwJzWE0OUKtFIXOxQZcV%2F%2BDiMGsVuqXx4ktKc02GAqM7aSoof8GpioIS6A%2Bye50byTBwO6rKzD8xHpyJiqlIKL5SDxI5Xyx6RgoeJd0bEhKz1XliEweH8YZ2z3C9eh5Leady%2BgkX%2BaTHBk48%2FDk0Z99zHShOjWbZyvkGj%2BBReoU0PkXj7CJ0uqwg5eEJYK%2Bd%2B11645E%2BDYQQafNYuW2G9frr&X-Amz-Signature=b552082e0eafbd58e12cf47dc4d5a31e3bd630e07f244d53e3be29f87c8ad030&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3SAGLZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHiJr31vV%2F15Upc%2FLDo72791IcOGJn%2FLrC%2BkWkImW3OkAiEApc6ODfGxD99W8X0G76qfEJByibr4FkD%2FDkYu2xw96R8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGfxilxk0N3HCklMSrcA2AUPrkaMvn5I9Uv9KknCPBYuEgxu6nkYSKhn7Xp3MYjR2E%2FYfTE4piiir1NtYE9ER8U4Ts4WrM%2B4nEBMwzWQUg68I06HCaqY5BYgkId7lpZPt6P1vg%2BAzl5%2BvkHfBmrWm6sIodZuacf%2BsRUUiiXEskJbbPVPDaj15VVdmzjEwmMqBTuEyD45XCHiywSq78ZolyzJ8hIpghOIFAjKHQJUCtDI6601KN%2BfJU16AqFtOB7rtA%2FyfCYTlnFrlLaKg3VMQryABMhgAD4OoTDHvV5GHHk3l1w1yzrSKjtLbCnmGR1fiDnW3LOmjJyfekaM4VZFHf25CDgTpJn1kMZuFY57Dz2e70dln71oPF40dwtcSt%2Bz0Ny2jnSg3C8O6Whe1JS%2FwHJK6URUkDGhcH91dPsPNGEIDv7JBcZAWUDnguN5jEgIKOk28pdJz2brPQMrV19XbOYYWvrQ6fvf4DL9XcG11H0AQqmvAPLAaKMPOxMa10H8KZm5GG8MBdOlHpMmObW1QEVLQfzmalriKWWL7VyQG6lTVdCm2ojsBFRtCV5kmWI7FRouapZuhuJ29T2nHX38mxwPM0UWpwRMR6nbpXkbaK31jt54Jm0VPLelUuAOx1QLwf0knZoEATOm7sQMPCx0r0GOqUBv6BVSwJzWE0OUKtFIXOxQZcV%2F%2BDiMGsVuqXx4ktKc02GAqM7aSoof8GpioIS6A%2Bye50byTBwO6rKzD8xHpyJiqlIKL5SDxI5Xyx6RgoeJd0bEhKz1XliEweH8YZ2z3C9eh5Leady%2BgkX%2BaTHBk48%2FDk0Z99zHShOjWbZyvkGj%2BBReoU0PkXj7CJ0uqwg5eEJYK%2Bd%2B11645E%2BDYQQafNYuW2G9frr&X-Amz-Signature=b2020a0f3ab9d6222841591f0885950693edfc35e07b27c02e1bd43e004c8bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3SAGLZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHiJr31vV%2F15Upc%2FLDo72791IcOGJn%2FLrC%2BkWkImW3OkAiEApc6ODfGxD99W8X0G76qfEJByibr4FkD%2FDkYu2xw96R8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGfxilxk0N3HCklMSrcA2AUPrkaMvn5I9Uv9KknCPBYuEgxu6nkYSKhn7Xp3MYjR2E%2FYfTE4piiir1NtYE9ER8U4Ts4WrM%2B4nEBMwzWQUg68I06HCaqY5BYgkId7lpZPt6P1vg%2BAzl5%2BvkHfBmrWm6sIodZuacf%2BsRUUiiXEskJbbPVPDaj15VVdmzjEwmMqBTuEyD45XCHiywSq78ZolyzJ8hIpghOIFAjKHQJUCtDI6601KN%2BfJU16AqFtOB7rtA%2FyfCYTlnFrlLaKg3VMQryABMhgAD4OoTDHvV5GHHk3l1w1yzrSKjtLbCnmGR1fiDnW3LOmjJyfekaM4VZFHf25CDgTpJn1kMZuFY57Dz2e70dln71oPF40dwtcSt%2Bz0Ny2jnSg3C8O6Whe1JS%2FwHJK6URUkDGhcH91dPsPNGEIDv7JBcZAWUDnguN5jEgIKOk28pdJz2brPQMrV19XbOYYWvrQ6fvf4DL9XcG11H0AQqmvAPLAaKMPOxMa10H8KZm5GG8MBdOlHpMmObW1QEVLQfzmalriKWWL7VyQG6lTVdCm2ojsBFRtCV5kmWI7FRouapZuhuJ29T2nHX38mxwPM0UWpwRMR6nbpXkbaK31jt54Jm0VPLelUuAOx1QLwf0knZoEATOm7sQMPCx0r0GOqUBv6BVSwJzWE0OUKtFIXOxQZcV%2F%2BDiMGsVuqXx4ktKc02GAqM7aSoof8GpioIS6A%2Bye50byTBwO6rKzD8xHpyJiqlIKL5SDxI5Xyx6RgoeJd0bEhKz1XliEweH8YZ2z3C9eh5Leady%2BgkX%2BaTHBk48%2FDk0Z99zHShOjWbZyvkGj%2BBReoU0PkXj7CJ0uqwg5eEJYK%2Bd%2B11645E%2BDYQQafNYuW2G9frr&X-Amz-Signature=ac90433d684478ff43f7adffbc0b1647fabc16d98c53434fcd64a940e939b3b5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3SAGLZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHiJr31vV%2F15Upc%2FLDo72791IcOGJn%2FLrC%2BkWkImW3OkAiEApc6ODfGxD99W8X0G76qfEJByibr4FkD%2FDkYu2xw96R8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGfxilxk0N3HCklMSrcA2AUPrkaMvn5I9Uv9KknCPBYuEgxu6nkYSKhn7Xp3MYjR2E%2FYfTE4piiir1NtYE9ER8U4Ts4WrM%2B4nEBMwzWQUg68I06HCaqY5BYgkId7lpZPt6P1vg%2BAzl5%2BvkHfBmrWm6sIodZuacf%2BsRUUiiXEskJbbPVPDaj15VVdmzjEwmMqBTuEyD45XCHiywSq78ZolyzJ8hIpghOIFAjKHQJUCtDI6601KN%2BfJU16AqFtOB7rtA%2FyfCYTlnFrlLaKg3VMQryABMhgAD4OoTDHvV5GHHk3l1w1yzrSKjtLbCnmGR1fiDnW3LOmjJyfekaM4VZFHf25CDgTpJn1kMZuFY57Dz2e70dln71oPF40dwtcSt%2Bz0Ny2jnSg3C8O6Whe1JS%2FwHJK6URUkDGhcH91dPsPNGEIDv7JBcZAWUDnguN5jEgIKOk28pdJz2brPQMrV19XbOYYWvrQ6fvf4DL9XcG11H0AQqmvAPLAaKMPOxMa10H8KZm5GG8MBdOlHpMmObW1QEVLQfzmalriKWWL7VyQG6lTVdCm2ojsBFRtCV5kmWI7FRouapZuhuJ29T2nHX38mxwPM0UWpwRMR6nbpXkbaK31jt54Jm0VPLelUuAOx1QLwf0knZoEATOm7sQMPCx0r0GOqUBv6BVSwJzWE0OUKtFIXOxQZcV%2F%2BDiMGsVuqXx4ktKc02GAqM7aSoof8GpioIS6A%2Bye50byTBwO6rKzD8xHpyJiqlIKL5SDxI5Xyx6RgoeJd0bEhKz1XliEweH8YZ2z3C9eh5Leady%2BgkX%2BaTHBk48%2FDk0Z99zHShOjWbZyvkGj%2BBReoU0PkXj7CJ0uqwg5eEJYK%2Bd%2B11645E%2BDYQQafNYuW2G9frr&X-Amz-Signature=21eecf7d2ffb7c6802055823a96ca84f20841cfb1b216ee46622b7ff9c14eebb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3SAGLZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHiJr31vV%2F15Upc%2FLDo72791IcOGJn%2FLrC%2BkWkImW3OkAiEApc6ODfGxD99W8X0G76qfEJByibr4FkD%2FDkYu2xw96R8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGfxilxk0N3HCklMSrcA2AUPrkaMvn5I9Uv9KknCPBYuEgxu6nkYSKhn7Xp3MYjR2E%2FYfTE4piiir1NtYE9ER8U4Ts4WrM%2B4nEBMwzWQUg68I06HCaqY5BYgkId7lpZPt6P1vg%2BAzl5%2BvkHfBmrWm6sIodZuacf%2BsRUUiiXEskJbbPVPDaj15VVdmzjEwmMqBTuEyD45XCHiywSq78ZolyzJ8hIpghOIFAjKHQJUCtDI6601KN%2BfJU16AqFtOB7rtA%2FyfCYTlnFrlLaKg3VMQryABMhgAD4OoTDHvV5GHHk3l1w1yzrSKjtLbCnmGR1fiDnW3LOmjJyfekaM4VZFHf25CDgTpJn1kMZuFY57Dz2e70dln71oPF40dwtcSt%2Bz0Ny2jnSg3C8O6Whe1JS%2FwHJK6URUkDGhcH91dPsPNGEIDv7JBcZAWUDnguN5jEgIKOk28pdJz2brPQMrV19XbOYYWvrQ6fvf4DL9XcG11H0AQqmvAPLAaKMPOxMa10H8KZm5GG8MBdOlHpMmObW1QEVLQfzmalriKWWL7VyQG6lTVdCm2ojsBFRtCV5kmWI7FRouapZuhuJ29T2nHX38mxwPM0UWpwRMR6nbpXkbaK31jt54Jm0VPLelUuAOx1QLwf0knZoEATOm7sQMPCx0r0GOqUBv6BVSwJzWE0OUKtFIXOxQZcV%2F%2BDiMGsVuqXx4ktKc02GAqM7aSoof8GpioIS6A%2Bye50byTBwO6rKzD8xHpyJiqlIKL5SDxI5Xyx6RgoeJd0bEhKz1XliEweH8YZ2z3C9eh5Leady%2BgkX%2BaTHBk48%2FDk0Z99zHShOjWbZyvkGj%2BBReoU0PkXj7CJ0uqwg5eEJYK%2Bd%2B11645E%2BDYQQafNYuW2G9frr&X-Amz-Signature=4f8810cf8a8e312e53df4270abe8f5579f8d9cdff497930a619d521bf88df32e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

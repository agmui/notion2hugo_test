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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPIFQWW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIApJ0iXsSSY8TRhloZm%2Bn4XmneXgCqkcLGvIgVCXKG3HAiAd1IAGjpIBqeX3J9LDDDKbOmwFbNY0H6rX6%2F4tKoB1MyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWllQfoiAW85%2BahfCKtwDWMig5zSq6NTPYdur%2FyqqBM1mSNe7wawBO%2ByDoX8LMynlkAV3o5PA9HJ7N3eZnquyfQweKGDrYOPTEE%2BKYpnYUWPAPG5KXtvox%2Fd9yizqisZYDpQ%2F9w0krjybD9eiGcQUR852DHriiVl5BOP9wuEPyJVxVXC%2FcSgjrPohzhhyz%2BC2dBU5rpqTZlqfqGzDkU%2Bp0%2BiFtps47%2F%2Bfvj4AVYDCT0ZGyjAJLOC2mSPNiUYgJLbUnh5GFr%2FcO%2Bh3wheXVSYk3fV%2F6w9bK0Z1BZ4e%2BvmuFkStWwUufKklGyLqAp8GHs%2BXS0g%2FAW0uWQFxsYJbc1%2FvjIn7AhDzlK9Rf1jqiLdzPDIRJw4KihZSGV7jRBh2lWf28SVwkwm5zSTAuEtZZUGRoXsYkvdrmJXo2Zs0gd0FC%2Fs7bpJYWN8QQd6P7T8irAUvHMuR5DPE%2BDWRP3tgdclXlI8azWcXxEK8KdHQ8BNcVOLBotLGoVat89EQRIHQ%2Byfkb48Y418N3R%2FzVkOWSg1AI54qtqnm1U%2BtW3y%2FsjIeaGWWs%2BqP1PDdJ8w6wiI85DQcxtydX2s4T7v1%2Be3YTlAQZ36bcUL78SY6I8l%2FrFgrgzFGplL9f9y4%2BXKR3QiB%2Baxh%2BoEFDgFUbgyN19cw7u%2FDwQY6pgEtUGy2FUjQK8TIL8ZxVeR2ghgHZvEAEp8wrItH1u%2FrqV%2FY%2FVLd%2Bl3viBe8J4H003ajH%2FjhAh%2B9LfNeud9CTzFj1uZhVWOPkElzVCiu2UmfnM%2BzwIteu0LJ3cA3E3V%2FtTXYZSUsbUDQ%2Fv%2BIWx308zGhBGypQ%2FCNC%2FOqSDh9yJL9OrTIbgKWJontDZXIkc8ULE7TF1ELp3g0sn2NzqOnHiycSzq7Icf8&X-Amz-Signature=8a47a57c98b7aa5d1dba3ba708ebb3fa44c78e667ff9e7fcfa84c304313fc515&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPIFQWW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIApJ0iXsSSY8TRhloZm%2Bn4XmneXgCqkcLGvIgVCXKG3HAiAd1IAGjpIBqeX3J9LDDDKbOmwFbNY0H6rX6%2F4tKoB1MyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWllQfoiAW85%2BahfCKtwDWMig5zSq6NTPYdur%2FyqqBM1mSNe7wawBO%2ByDoX8LMynlkAV3o5PA9HJ7N3eZnquyfQweKGDrYOPTEE%2BKYpnYUWPAPG5KXtvox%2Fd9yizqisZYDpQ%2F9w0krjybD9eiGcQUR852DHriiVl5BOP9wuEPyJVxVXC%2FcSgjrPohzhhyz%2BC2dBU5rpqTZlqfqGzDkU%2Bp0%2BiFtps47%2F%2Bfvj4AVYDCT0ZGyjAJLOC2mSPNiUYgJLbUnh5GFr%2FcO%2Bh3wheXVSYk3fV%2F6w9bK0Z1BZ4e%2BvmuFkStWwUufKklGyLqAp8GHs%2BXS0g%2FAW0uWQFxsYJbc1%2FvjIn7AhDzlK9Rf1jqiLdzPDIRJw4KihZSGV7jRBh2lWf28SVwkwm5zSTAuEtZZUGRoXsYkvdrmJXo2Zs0gd0FC%2Fs7bpJYWN8QQd6P7T8irAUvHMuR5DPE%2BDWRP3tgdclXlI8azWcXxEK8KdHQ8BNcVOLBotLGoVat89EQRIHQ%2Byfkb48Y418N3R%2FzVkOWSg1AI54qtqnm1U%2BtW3y%2FsjIeaGWWs%2BqP1PDdJ8w6wiI85DQcxtydX2s4T7v1%2Be3YTlAQZ36bcUL78SY6I8l%2FrFgrgzFGplL9f9y4%2BXKR3QiB%2Baxh%2BoEFDgFUbgyN19cw7u%2FDwQY6pgEtUGy2FUjQK8TIL8ZxVeR2ghgHZvEAEp8wrItH1u%2FrqV%2FY%2FVLd%2Bl3viBe8J4H003ajH%2FjhAh%2B9LfNeud9CTzFj1uZhVWOPkElzVCiu2UmfnM%2BzwIteu0LJ3cA3E3V%2FtTXYZSUsbUDQ%2Fv%2BIWx308zGhBGypQ%2FCNC%2FOqSDh9yJL9OrTIbgKWJontDZXIkc8ULE7TF1ELp3g0sn2NzqOnHiycSzq7Icf8&X-Amz-Signature=27e812691ad88e44b80b88e8194f48c7a9d56765e89a1beb4381b2f691776845&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPIFQWW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIApJ0iXsSSY8TRhloZm%2Bn4XmneXgCqkcLGvIgVCXKG3HAiAd1IAGjpIBqeX3J9LDDDKbOmwFbNY0H6rX6%2F4tKoB1MyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWllQfoiAW85%2BahfCKtwDWMig5zSq6NTPYdur%2FyqqBM1mSNe7wawBO%2ByDoX8LMynlkAV3o5PA9HJ7N3eZnquyfQweKGDrYOPTEE%2BKYpnYUWPAPG5KXtvox%2Fd9yizqisZYDpQ%2F9w0krjybD9eiGcQUR852DHriiVl5BOP9wuEPyJVxVXC%2FcSgjrPohzhhyz%2BC2dBU5rpqTZlqfqGzDkU%2Bp0%2BiFtps47%2F%2Bfvj4AVYDCT0ZGyjAJLOC2mSPNiUYgJLbUnh5GFr%2FcO%2Bh3wheXVSYk3fV%2F6w9bK0Z1BZ4e%2BvmuFkStWwUufKklGyLqAp8GHs%2BXS0g%2FAW0uWQFxsYJbc1%2FvjIn7AhDzlK9Rf1jqiLdzPDIRJw4KihZSGV7jRBh2lWf28SVwkwm5zSTAuEtZZUGRoXsYkvdrmJXo2Zs0gd0FC%2Fs7bpJYWN8QQd6P7T8irAUvHMuR5DPE%2BDWRP3tgdclXlI8azWcXxEK8KdHQ8BNcVOLBotLGoVat89EQRIHQ%2Byfkb48Y418N3R%2FzVkOWSg1AI54qtqnm1U%2BtW3y%2FsjIeaGWWs%2BqP1PDdJ8w6wiI85DQcxtydX2s4T7v1%2Be3YTlAQZ36bcUL78SY6I8l%2FrFgrgzFGplL9f9y4%2BXKR3QiB%2Baxh%2BoEFDgFUbgyN19cw7u%2FDwQY6pgEtUGy2FUjQK8TIL8ZxVeR2ghgHZvEAEp8wrItH1u%2FrqV%2FY%2FVLd%2Bl3viBe8J4H003ajH%2FjhAh%2B9LfNeud9CTzFj1uZhVWOPkElzVCiu2UmfnM%2BzwIteu0LJ3cA3E3V%2FtTXYZSUsbUDQ%2Fv%2BIWx308zGhBGypQ%2FCNC%2FOqSDh9yJL9OrTIbgKWJontDZXIkc8ULE7TF1ELp3g0sn2NzqOnHiycSzq7Icf8&X-Amz-Signature=322acd085d8d4fb8dfbb6214fd1b380da412fd124d2c26000f05adc769611d89&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPIFQWW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIApJ0iXsSSY8TRhloZm%2Bn4XmneXgCqkcLGvIgVCXKG3HAiAd1IAGjpIBqeX3J9LDDDKbOmwFbNY0H6rX6%2F4tKoB1MyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWllQfoiAW85%2BahfCKtwDWMig5zSq6NTPYdur%2FyqqBM1mSNe7wawBO%2ByDoX8LMynlkAV3o5PA9HJ7N3eZnquyfQweKGDrYOPTEE%2BKYpnYUWPAPG5KXtvox%2Fd9yizqisZYDpQ%2F9w0krjybD9eiGcQUR852DHriiVl5BOP9wuEPyJVxVXC%2FcSgjrPohzhhyz%2BC2dBU5rpqTZlqfqGzDkU%2Bp0%2BiFtps47%2F%2Bfvj4AVYDCT0ZGyjAJLOC2mSPNiUYgJLbUnh5GFr%2FcO%2Bh3wheXVSYk3fV%2F6w9bK0Z1BZ4e%2BvmuFkStWwUufKklGyLqAp8GHs%2BXS0g%2FAW0uWQFxsYJbc1%2FvjIn7AhDzlK9Rf1jqiLdzPDIRJw4KihZSGV7jRBh2lWf28SVwkwm5zSTAuEtZZUGRoXsYkvdrmJXo2Zs0gd0FC%2Fs7bpJYWN8QQd6P7T8irAUvHMuR5DPE%2BDWRP3tgdclXlI8azWcXxEK8KdHQ8BNcVOLBotLGoVat89EQRIHQ%2Byfkb48Y418N3R%2FzVkOWSg1AI54qtqnm1U%2BtW3y%2FsjIeaGWWs%2BqP1PDdJ8w6wiI85DQcxtydX2s4T7v1%2Be3YTlAQZ36bcUL78SY6I8l%2FrFgrgzFGplL9f9y4%2BXKR3QiB%2Baxh%2BoEFDgFUbgyN19cw7u%2FDwQY6pgEtUGy2FUjQK8TIL8ZxVeR2ghgHZvEAEp8wrItH1u%2FrqV%2FY%2FVLd%2Bl3viBe8J4H003ajH%2FjhAh%2B9LfNeud9CTzFj1uZhVWOPkElzVCiu2UmfnM%2BzwIteu0LJ3cA3E3V%2FtTXYZSUsbUDQ%2Fv%2BIWx308zGhBGypQ%2FCNC%2FOqSDh9yJL9OrTIbgKWJontDZXIkc8ULE7TF1ELp3g0sn2NzqOnHiycSzq7Icf8&X-Amz-Signature=6d40becbed252bfc1d08499b855d9dd62e854b0594dd8f47547b8111581dd539&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPIFQWW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIApJ0iXsSSY8TRhloZm%2Bn4XmneXgCqkcLGvIgVCXKG3HAiAd1IAGjpIBqeX3J9LDDDKbOmwFbNY0H6rX6%2F4tKoB1MyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWllQfoiAW85%2BahfCKtwDWMig5zSq6NTPYdur%2FyqqBM1mSNe7wawBO%2ByDoX8LMynlkAV3o5PA9HJ7N3eZnquyfQweKGDrYOPTEE%2BKYpnYUWPAPG5KXtvox%2Fd9yizqisZYDpQ%2F9w0krjybD9eiGcQUR852DHriiVl5BOP9wuEPyJVxVXC%2FcSgjrPohzhhyz%2BC2dBU5rpqTZlqfqGzDkU%2Bp0%2BiFtps47%2F%2Bfvj4AVYDCT0ZGyjAJLOC2mSPNiUYgJLbUnh5GFr%2FcO%2Bh3wheXVSYk3fV%2F6w9bK0Z1BZ4e%2BvmuFkStWwUufKklGyLqAp8GHs%2BXS0g%2FAW0uWQFxsYJbc1%2FvjIn7AhDzlK9Rf1jqiLdzPDIRJw4KihZSGV7jRBh2lWf28SVwkwm5zSTAuEtZZUGRoXsYkvdrmJXo2Zs0gd0FC%2Fs7bpJYWN8QQd6P7T8irAUvHMuR5DPE%2BDWRP3tgdclXlI8azWcXxEK8KdHQ8BNcVOLBotLGoVat89EQRIHQ%2Byfkb48Y418N3R%2FzVkOWSg1AI54qtqnm1U%2BtW3y%2FsjIeaGWWs%2BqP1PDdJ8w6wiI85DQcxtydX2s4T7v1%2Be3YTlAQZ36bcUL78SY6I8l%2FrFgrgzFGplL9f9y4%2BXKR3QiB%2Baxh%2BoEFDgFUbgyN19cw7u%2FDwQY6pgEtUGy2FUjQK8TIL8ZxVeR2ghgHZvEAEp8wrItH1u%2FrqV%2FY%2FVLd%2Bl3viBe8J4H003ajH%2FjhAh%2B9LfNeud9CTzFj1uZhVWOPkElzVCiu2UmfnM%2BzwIteu0LJ3cA3E3V%2FtTXYZSUsbUDQ%2Fv%2BIWx308zGhBGypQ%2FCNC%2FOqSDh9yJL9OrTIbgKWJontDZXIkc8ULE7TF1ELp3g0sn2NzqOnHiycSzq7Icf8&X-Amz-Signature=33ff6e7dfb85aee9488021f07567e05e278c59ab4f687809b22e095fcc40a131&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPIFQWW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIApJ0iXsSSY8TRhloZm%2Bn4XmneXgCqkcLGvIgVCXKG3HAiAd1IAGjpIBqeX3J9LDDDKbOmwFbNY0H6rX6%2F4tKoB1MyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWllQfoiAW85%2BahfCKtwDWMig5zSq6NTPYdur%2FyqqBM1mSNe7wawBO%2ByDoX8LMynlkAV3o5PA9HJ7N3eZnquyfQweKGDrYOPTEE%2BKYpnYUWPAPG5KXtvox%2Fd9yizqisZYDpQ%2F9w0krjybD9eiGcQUR852DHriiVl5BOP9wuEPyJVxVXC%2FcSgjrPohzhhyz%2BC2dBU5rpqTZlqfqGzDkU%2Bp0%2BiFtps47%2F%2Bfvj4AVYDCT0ZGyjAJLOC2mSPNiUYgJLbUnh5GFr%2FcO%2Bh3wheXVSYk3fV%2F6w9bK0Z1BZ4e%2BvmuFkStWwUufKklGyLqAp8GHs%2BXS0g%2FAW0uWQFxsYJbc1%2FvjIn7AhDzlK9Rf1jqiLdzPDIRJw4KihZSGV7jRBh2lWf28SVwkwm5zSTAuEtZZUGRoXsYkvdrmJXo2Zs0gd0FC%2Fs7bpJYWN8QQd6P7T8irAUvHMuR5DPE%2BDWRP3tgdclXlI8azWcXxEK8KdHQ8BNcVOLBotLGoVat89EQRIHQ%2Byfkb48Y418N3R%2FzVkOWSg1AI54qtqnm1U%2BtW3y%2FsjIeaGWWs%2BqP1PDdJ8w6wiI85DQcxtydX2s4T7v1%2Be3YTlAQZ36bcUL78SY6I8l%2FrFgrgzFGplL9f9y4%2BXKR3QiB%2Baxh%2BoEFDgFUbgyN19cw7u%2FDwQY6pgEtUGy2FUjQK8TIL8ZxVeR2ghgHZvEAEp8wrItH1u%2FrqV%2FY%2FVLd%2Bl3viBe8J4H003ajH%2FjhAh%2B9LfNeud9CTzFj1uZhVWOPkElzVCiu2UmfnM%2BzwIteu0LJ3cA3E3V%2FtTXYZSUsbUDQ%2Fv%2BIWx308zGhBGypQ%2FCNC%2FOqSDh9yJL9OrTIbgKWJontDZXIkc8ULE7TF1ELp3g0sn2NzqOnHiycSzq7Icf8&X-Amz-Signature=9794ad2008cd0371be63e94eac2c82f1298abf24b75f644ebf07e75ea5f78825&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPIFQWW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIApJ0iXsSSY8TRhloZm%2Bn4XmneXgCqkcLGvIgVCXKG3HAiAd1IAGjpIBqeX3J9LDDDKbOmwFbNY0H6rX6%2F4tKoB1MyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWllQfoiAW85%2BahfCKtwDWMig5zSq6NTPYdur%2FyqqBM1mSNe7wawBO%2ByDoX8LMynlkAV3o5PA9HJ7N3eZnquyfQweKGDrYOPTEE%2BKYpnYUWPAPG5KXtvox%2Fd9yizqisZYDpQ%2F9w0krjybD9eiGcQUR852DHriiVl5BOP9wuEPyJVxVXC%2FcSgjrPohzhhyz%2BC2dBU5rpqTZlqfqGzDkU%2Bp0%2BiFtps47%2F%2Bfvj4AVYDCT0ZGyjAJLOC2mSPNiUYgJLbUnh5GFr%2FcO%2Bh3wheXVSYk3fV%2F6w9bK0Z1BZ4e%2BvmuFkStWwUufKklGyLqAp8GHs%2BXS0g%2FAW0uWQFxsYJbc1%2FvjIn7AhDzlK9Rf1jqiLdzPDIRJw4KihZSGV7jRBh2lWf28SVwkwm5zSTAuEtZZUGRoXsYkvdrmJXo2Zs0gd0FC%2Fs7bpJYWN8QQd6P7T8irAUvHMuR5DPE%2BDWRP3tgdclXlI8azWcXxEK8KdHQ8BNcVOLBotLGoVat89EQRIHQ%2Byfkb48Y418N3R%2FzVkOWSg1AI54qtqnm1U%2BtW3y%2FsjIeaGWWs%2BqP1PDdJ8w6wiI85DQcxtydX2s4T7v1%2Be3YTlAQZ36bcUL78SY6I8l%2FrFgrgzFGplL9f9y4%2BXKR3QiB%2Baxh%2BoEFDgFUbgyN19cw7u%2FDwQY6pgEtUGy2FUjQK8TIL8ZxVeR2ghgHZvEAEp8wrItH1u%2FrqV%2FY%2FVLd%2Bl3viBe8J4H003ajH%2FjhAh%2B9LfNeud9CTzFj1uZhVWOPkElzVCiu2UmfnM%2BzwIteu0LJ3cA3E3V%2FtTXYZSUsbUDQ%2Fv%2BIWx308zGhBGypQ%2FCNC%2FOqSDh9yJL9OrTIbgKWJontDZXIkc8ULE7TF1ELp3g0sn2NzqOnHiycSzq7Icf8&X-Amz-Signature=d60f9776b26c73000405092171624000857bd335df05da25b6186997068e3ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

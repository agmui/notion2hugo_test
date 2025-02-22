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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VE4BJP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1k8PsazPHKJl8keHGTrgjaUnZxvAn60Vc1Of4v%2F0oMCIQD1YPL05GfgoI8TknDMow9guv5temJZ5luC2nvZg8nwpCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7AcugmdrEBYtuK4KtwD78yiAJnAblWt93RAYBUfscwh%2BJNc40clnOpox9IsrWNZjMsc%2B56OtO98MKrUS2HfOFJ2hNzTKTW0k7ybEioPSfG6%2FazfS7yUYTrGcxUY1TyHd2QAEN4s9BBfc41%2FTYAoSGEV1oYh2iBj6t5bs3Jk%2FEXEIAweWNQi%2BskHMy7KEs29452TInVmlk1YeiZZjWngzt9alJDg49fMnE1ffPmvp5iMRtiUpBxnIrP8E1%2F1X1NpX8K1nca%2BnNucvxGt3WatnGGO%2FWI1Be679R5dqp3TCrrKO4GJWPJfJZU6EChovHkv1mlakNkXTjByvWnqEC0ktyZM5Jr5ESDlV9mnwJIDJPBIVV%2BSf2tAvRuEr%2FHwEVZVAYIH3qt0ucmYU8crCddcr32c6ROO6cIUS%2BdwQhjcuatpor0Wx3iB%2BUaKjTSGxz7PG8kTCKSwy9UcxLav8xN1dzo370dgtg72vyDDj8FUk4K%2Bcfp96T%2FFGSkYMTmBH%2FESMAzGzj1Wn3nZyE6a%2FRKaGzZMysUenrma50z6HE0CxTn5ZIqFGxf9WgVx7neprfGQl208wJfwWuybcBNWSl1IdPB9Nw%2BSUQ77dEnNFR1o66tOGqap3ILvKavwWyGC%2BQd58%2B8UdCH3wV9yG3Qw3ezkvQY6pgH9NM0GsvtzKRJSl2EJiWbxP7aERYvCozbxpT%2BYU5ejHMJUKeCuLFZMZq%2FQNa4pFHbEDG%2FeDqUZNUXxh%2FRl7Q44z%2B1rTTcqBrhUunJBq2MOHG16JVUF6Qe36Zc%2FjDmKgEP7he9OV7qqdM50tERN%2FHHV11ax3vxPwgVf50zW%2B%2BRyzI%2BHQ2Qk%2FIJg4iUP5UBOpl8peRZ1GbaOsDSWe4pWx5qCpuheZKJB&X-Amz-Signature=478b705efefdcaa79d57bfd83063387884b99b23c0d7935bb80a975398e2b155&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VE4BJP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1k8PsazPHKJl8keHGTrgjaUnZxvAn60Vc1Of4v%2F0oMCIQD1YPL05GfgoI8TknDMow9guv5temJZ5luC2nvZg8nwpCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7AcugmdrEBYtuK4KtwD78yiAJnAblWt93RAYBUfscwh%2BJNc40clnOpox9IsrWNZjMsc%2B56OtO98MKrUS2HfOFJ2hNzTKTW0k7ybEioPSfG6%2FazfS7yUYTrGcxUY1TyHd2QAEN4s9BBfc41%2FTYAoSGEV1oYh2iBj6t5bs3Jk%2FEXEIAweWNQi%2BskHMy7KEs29452TInVmlk1YeiZZjWngzt9alJDg49fMnE1ffPmvp5iMRtiUpBxnIrP8E1%2F1X1NpX8K1nca%2BnNucvxGt3WatnGGO%2FWI1Be679R5dqp3TCrrKO4GJWPJfJZU6EChovHkv1mlakNkXTjByvWnqEC0ktyZM5Jr5ESDlV9mnwJIDJPBIVV%2BSf2tAvRuEr%2FHwEVZVAYIH3qt0ucmYU8crCddcr32c6ROO6cIUS%2BdwQhjcuatpor0Wx3iB%2BUaKjTSGxz7PG8kTCKSwy9UcxLav8xN1dzo370dgtg72vyDDj8FUk4K%2Bcfp96T%2FFGSkYMTmBH%2FESMAzGzj1Wn3nZyE6a%2FRKaGzZMysUenrma50z6HE0CxTn5ZIqFGxf9WgVx7neprfGQl208wJfwWuybcBNWSl1IdPB9Nw%2BSUQ77dEnNFR1o66tOGqap3ILvKavwWyGC%2BQd58%2B8UdCH3wV9yG3Qw3ezkvQY6pgH9NM0GsvtzKRJSl2EJiWbxP7aERYvCozbxpT%2BYU5ejHMJUKeCuLFZMZq%2FQNa4pFHbEDG%2FeDqUZNUXxh%2FRl7Q44z%2B1rTTcqBrhUunJBq2MOHG16JVUF6Qe36Zc%2FjDmKgEP7he9OV7qqdM50tERN%2FHHV11ax3vxPwgVf50zW%2B%2BRyzI%2BHQ2Qk%2FIJg4iUP5UBOpl8peRZ1GbaOsDSWe4pWx5qCpuheZKJB&X-Amz-Signature=6040cc698a85642abaa4609f8297ef89ea1371da49133f340d8583adbcb6a3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VE4BJP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1k8PsazPHKJl8keHGTrgjaUnZxvAn60Vc1Of4v%2F0oMCIQD1YPL05GfgoI8TknDMow9guv5temJZ5luC2nvZg8nwpCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7AcugmdrEBYtuK4KtwD78yiAJnAblWt93RAYBUfscwh%2BJNc40clnOpox9IsrWNZjMsc%2B56OtO98MKrUS2HfOFJ2hNzTKTW0k7ybEioPSfG6%2FazfS7yUYTrGcxUY1TyHd2QAEN4s9BBfc41%2FTYAoSGEV1oYh2iBj6t5bs3Jk%2FEXEIAweWNQi%2BskHMy7KEs29452TInVmlk1YeiZZjWngzt9alJDg49fMnE1ffPmvp5iMRtiUpBxnIrP8E1%2F1X1NpX8K1nca%2BnNucvxGt3WatnGGO%2FWI1Be679R5dqp3TCrrKO4GJWPJfJZU6EChovHkv1mlakNkXTjByvWnqEC0ktyZM5Jr5ESDlV9mnwJIDJPBIVV%2BSf2tAvRuEr%2FHwEVZVAYIH3qt0ucmYU8crCddcr32c6ROO6cIUS%2BdwQhjcuatpor0Wx3iB%2BUaKjTSGxz7PG8kTCKSwy9UcxLav8xN1dzo370dgtg72vyDDj8FUk4K%2Bcfp96T%2FFGSkYMTmBH%2FESMAzGzj1Wn3nZyE6a%2FRKaGzZMysUenrma50z6HE0CxTn5ZIqFGxf9WgVx7neprfGQl208wJfwWuybcBNWSl1IdPB9Nw%2BSUQ77dEnNFR1o66tOGqap3ILvKavwWyGC%2BQd58%2B8UdCH3wV9yG3Qw3ezkvQY6pgH9NM0GsvtzKRJSl2EJiWbxP7aERYvCozbxpT%2BYU5ejHMJUKeCuLFZMZq%2FQNa4pFHbEDG%2FeDqUZNUXxh%2FRl7Q44z%2B1rTTcqBrhUunJBq2MOHG16JVUF6Qe36Zc%2FjDmKgEP7he9OV7qqdM50tERN%2FHHV11ax3vxPwgVf50zW%2B%2BRyzI%2BHQ2Qk%2FIJg4iUP5UBOpl8peRZ1GbaOsDSWe4pWx5qCpuheZKJB&X-Amz-Signature=9a3eaa67c5cb702278a99f5e693f3370060c26ef6eee7450124d04f94db3cfcb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VE4BJP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1k8PsazPHKJl8keHGTrgjaUnZxvAn60Vc1Of4v%2F0oMCIQD1YPL05GfgoI8TknDMow9guv5temJZ5luC2nvZg8nwpCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7AcugmdrEBYtuK4KtwD78yiAJnAblWt93RAYBUfscwh%2BJNc40clnOpox9IsrWNZjMsc%2B56OtO98MKrUS2HfOFJ2hNzTKTW0k7ybEioPSfG6%2FazfS7yUYTrGcxUY1TyHd2QAEN4s9BBfc41%2FTYAoSGEV1oYh2iBj6t5bs3Jk%2FEXEIAweWNQi%2BskHMy7KEs29452TInVmlk1YeiZZjWngzt9alJDg49fMnE1ffPmvp5iMRtiUpBxnIrP8E1%2F1X1NpX8K1nca%2BnNucvxGt3WatnGGO%2FWI1Be679R5dqp3TCrrKO4GJWPJfJZU6EChovHkv1mlakNkXTjByvWnqEC0ktyZM5Jr5ESDlV9mnwJIDJPBIVV%2BSf2tAvRuEr%2FHwEVZVAYIH3qt0ucmYU8crCddcr32c6ROO6cIUS%2BdwQhjcuatpor0Wx3iB%2BUaKjTSGxz7PG8kTCKSwy9UcxLav8xN1dzo370dgtg72vyDDj8FUk4K%2Bcfp96T%2FFGSkYMTmBH%2FESMAzGzj1Wn3nZyE6a%2FRKaGzZMysUenrma50z6HE0CxTn5ZIqFGxf9WgVx7neprfGQl208wJfwWuybcBNWSl1IdPB9Nw%2BSUQ77dEnNFR1o66tOGqap3ILvKavwWyGC%2BQd58%2B8UdCH3wV9yG3Qw3ezkvQY6pgH9NM0GsvtzKRJSl2EJiWbxP7aERYvCozbxpT%2BYU5ejHMJUKeCuLFZMZq%2FQNa4pFHbEDG%2FeDqUZNUXxh%2FRl7Q44z%2B1rTTcqBrhUunJBq2MOHG16JVUF6Qe36Zc%2FjDmKgEP7he9OV7qqdM50tERN%2FHHV11ax3vxPwgVf50zW%2B%2BRyzI%2BHQ2Qk%2FIJg4iUP5UBOpl8peRZ1GbaOsDSWe4pWx5qCpuheZKJB&X-Amz-Signature=63db3c5e2a92c70207c87b283ab6806622e004eead0ddcd18e408f9160914ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VE4BJP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1k8PsazPHKJl8keHGTrgjaUnZxvAn60Vc1Of4v%2F0oMCIQD1YPL05GfgoI8TknDMow9guv5temJZ5luC2nvZg8nwpCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7AcugmdrEBYtuK4KtwD78yiAJnAblWt93RAYBUfscwh%2BJNc40clnOpox9IsrWNZjMsc%2B56OtO98MKrUS2HfOFJ2hNzTKTW0k7ybEioPSfG6%2FazfS7yUYTrGcxUY1TyHd2QAEN4s9BBfc41%2FTYAoSGEV1oYh2iBj6t5bs3Jk%2FEXEIAweWNQi%2BskHMy7KEs29452TInVmlk1YeiZZjWngzt9alJDg49fMnE1ffPmvp5iMRtiUpBxnIrP8E1%2F1X1NpX8K1nca%2BnNucvxGt3WatnGGO%2FWI1Be679R5dqp3TCrrKO4GJWPJfJZU6EChovHkv1mlakNkXTjByvWnqEC0ktyZM5Jr5ESDlV9mnwJIDJPBIVV%2BSf2tAvRuEr%2FHwEVZVAYIH3qt0ucmYU8crCddcr32c6ROO6cIUS%2BdwQhjcuatpor0Wx3iB%2BUaKjTSGxz7PG8kTCKSwy9UcxLav8xN1dzo370dgtg72vyDDj8FUk4K%2Bcfp96T%2FFGSkYMTmBH%2FESMAzGzj1Wn3nZyE6a%2FRKaGzZMysUenrma50z6HE0CxTn5ZIqFGxf9WgVx7neprfGQl208wJfwWuybcBNWSl1IdPB9Nw%2BSUQ77dEnNFR1o66tOGqap3ILvKavwWyGC%2BQd58%2B8UdCH3wV9yG3Qw3ezkvQY6pgH9NM0GsvtzKRJSl2EJiWbxP7aERYvCozbxpT%2BYU5ejHMJUKeCuLFZMZq%2FQNa4pFHbEDG%2FeDqUZNUXxh%2FRl7Q44z%2B1rTTcqBrhUunJBq2MOHG16JVUF6Qe36Zc%2FjDmKgEP7he9OV7qqdM50tERN%2FHHV11ax3vxPwgVf50zW%2B%2BRyzI%2BHQ2Qk%2FIJg4iUP5UBOpl8peRZ1GbaOsDSWe4pWx5qCpuheZKJB&X-Amz-Signature=eba62b9de0fb3a4bc0ebd9da64cf7edf71a8bdd610fac851bcdf41a03f971430&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VE4BJP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1k8PsazPHKJl8keHGTrgjaUnZxvAn60Vc1Of4v%2F0oMCIQD1YPL05GfgoI8TknDMow9guv5temJZ5luC2nvZg8nwpCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7AcugmdrEBYtuK4KtwD78yiAJnAblWt93RAYBUfscwh%2BJNc40clnOpox9IsrWNZjMsc%2B56OtO98MKrUS2HfOFJ2hNzTKTW0k7ybEioPSfG6%2FazfS7yUYTrGcxUY1TyHd2QAEN4s9BBfc41%2FTYAoSGEV1oYh2iBj6t5bs3Jk%2FEXEIAweWNQi%2BskHMy7KEs29452TInVmlk1YeiZZjWngzt9alJDg49fMnE1ffPmvp5iMRtiUpBxnIrP8E1%2F1X1NpX8K1nca%2BnNucvxGt3WatnGGO%2FWI1Be679R5dqp3TCrrKO4GJWPJfJZU6EChovHkv1mlakNkXTjByvWnqEC0ktyZM5Jr5ESDlV9mnwJIDJPBIVV%2BSf2tAvRuEr%2FHwEVZVAYIH3qt0ucmYU8crCddcr32c6ROO6cIUS%2BdwQhjcuatpor0Wx3iB%2BUaKjTSGxz7PG8kTCKSwy9UcxLav8xN1dzo370dgtg72vyDDj8FUk4K%2Bcfp96T%2FFGSkYMTmBH%2FESMAzGzj1Wn3nZyE6a%2FRKaGzZMysUenrma50z6HE0CxTn5ZIqFGxf9WgVx7neprfGQl208wJfwWuybcBNWSl1IdPB9Nw%2BSUQ77dEnNFR1o66tOGqap3ILvKavwWyGC%2BQd58%2B8UdCH3wV9yG3Qw3ezkvQY6pgH9NM0GsvtzKRJSl2EJiWbxP7aERYvCozbxpT%2BYU5ejHMJUKeCuLFZMZq%2FQNa4pFHbEDG%2FeDqUZNUXxh%2FRl7Q44z%2B1rTTcqBrhUunJBq2MOHG16JVUF6Qe36Zc%2FjDmKgEP7he9OV7qqdM50tERN%2FHHV11ax3vxPwgVf50zW%2B%2BRyzI%2BHQ2Qk%2FIJg4iUP5UBOpl8peRZ1GbaOsDSWe4pWx5qCpuheZKJB&X-Amz-Signature=b079740c3db9880a671f422cbe13a2d110814c364e9fb4cd13c5c02896162cab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VE4BJP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1k8PsazPHKJl8keHGTrgjaUnZxvAn60Vc1Of4v%2F0oMCIQD1YPL05GfgoI8TknDMow9guv5temJZ5luC2nvZg8nwpCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7AcugmdrEBYtuK4KtwD78yiAJnAblWt93RAYBUfscwh%2BJNc40clnOpox9IsrWNZjMsc%2B56OtO98MKrUS2HfOFJ2hNzTKTW0k7ybEioPSfG6%2FazfS7yUYTrGcxUY1TyHd2QAEN4s9BBfc41%2FTYAoSGEV1oYh2iBj6t5bs3Jk%2FEXEIAweWNQi%2BskHMy7KEs29452TInVmlk1YeiZZjWngzt9alJDg49fMnE1ffPmvp5iMRtiUpBxnIrP8E1%2F1X1NpX8K1nca%2BnNucvxGt3WatnGGO%2FWI1Be679R5dqp3TCrrKO4GJWPJfJZU6EChovHkv1mlakNkXTjByvWnqEC0ktyZM5Jr5ESDlV9mnwJIDJPBIVV%2BSf2tAvRuEr%2FHwEVZVAYIH3qt0ucmYU8crCddcr32c6ROO6cIUS%2BdwQhjcuatpor0Wx3iB%2BUaKjTSGxz7PG8kTCKSwy9UcxLav8xN1dzo370dgtg72vyDDj8FUk4K%2Bcfp96T%2FFGSkYMTmBH%2FESMAzGzj1Wn3nZyE6a%2FRKaGzZMysUenrma50z6HE0CxTn5ZIqFGxf9WgVx7neprfGQl208wJfwWuybcBNWSl1IdPB9Nw%2BSUQ77dEnNFR1o66tOGqap3ILvKavwWyGC%2BQd58%2B8UdCH3wV9yG3Qw3ezkvQY6pgH9NM0GsvtzKRJSl2EJiWbxP7aERYvCozbxpT%2BYU5ejHMJUKeCuLFZMZq%2FQNa4pFHbEDG%2FeDqUZNUXxh%2FRl7Q44z%2B1rTTcqBrhUunJBq2MOHG16JVUF6Qe36Zc%2FjDmKgEP7he9OV7qqdM50tERN%2FHHV11ax3vxPwgVf50zW%2B%2BRyzI%2BHQ2Qk%2FIJg4iUP5UBOpl8peRZ1GbaOsDSWe4pWx5qCpuheZKJB&X-Amz-Signature=9165e4b86225df804c4622cfe73a6b1cd703b1568542b0ed0ce11e355e321375&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

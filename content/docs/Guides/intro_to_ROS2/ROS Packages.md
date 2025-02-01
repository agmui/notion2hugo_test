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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THI6OBAE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B3XU2pqkDTKBE201lnPCX%2Fso0OyEqvRuR9zWykfysMAiAmHw1ZcJxosPQKhRRVkBYvyiRXJuf6xiUHYLx9e5xTZiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgoH1bpDmn9cARezKtwDEHrAfR9iftB%2BBccFs1m%2B%2Fwk5GpQ0prT%2F%2FHDOD36Sa3Nw8ADyuM3WgCKS7X031fntIRDE65tvZ1uq5KawyFwNc8cYn%2FZ8GLBNKK4N86A3odHkAV7OK11YmfeECnHPAsqH0ALmKMSvhld5l509ZAvAcuiU7Sx77YEnNLIqALqf%2BzJiWOre3oFO8y7Ob5ukW6i%2FObss2kpmfcKS5QB4CndMXC786RysFJLRcN25ugzT%2B1tV7fobtdqmJq3nsQAj7Jw4f5vwqogkZVU2sBhz26tAlFfovSMpkc4m2ISXwpX0AMym3tCmGJ%2BM1DaXj6O9AUg%2FEWz7TZxxqyvMtbG9MUK3UDkzNYwsRSRg7zQcxaL6rbtKQNrZ6sHCVhFmp%2Bjfejp5Dp4g92ORvrEsNjoIFecnhr5VOMcZd0MpUryWZ%2By7jiP%2F8eIkjnSUzeZRs4w%2BITKYwD5lsOatQXEULOblhB4pmnsmlKVd7E89lIBj6i75ydEAH5CpLSHGMUONMtPTvgm9URywN2yu%2F5Ed4QYdr8RiL9F1p8AcqAVydSMVe6medPOOs109gcfvXD%2Bz0xilzaprItzx4JTape6b85gUwnW9ykRC9p8IaVolJv9wnYzZsGevBlGJyrzvBNoXYicwjd%2F2vAY6pgFta%2Fst8BGTPXH5GCR%2F%2FAuEcO%2FLeAfjtAzhcI0mhEVlBzH1qziXvItoUQzF8ls6jqNwNBkiSW85XwFPLJwc1VlS88E61pGCjze0hnhTVc8mVg5l%2BSVZ2nUO2BXHwtyovJ1qN99GhbXcPRrbWknFtvB8Ce39wkYdav5K4NcjRNWW0z7YOiUIJD8Hxt%2BWyyPM5Wd1NleuXRNlup23Q62Q%2BwGkr5m2Vo6%2F&X-Amz-Signature=51fdf501043a6dd79c8bd53d2aafecde95347fe1a2ca4a93024427cf6795d138&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THI6OBAE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B3XU2pqkDTKBE201lnPCX%2Fso0OyEqvRuR9zWykfysMAiAmHw1ZcJxosPQKhRRVkBYvyiRXJuf6xiUHYLx9e5xTZiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgoH1bpDmn9cARezKtwDEHrAfR9iftB%2BBccFs1m%2B%2Fwk5GpQ0prT%2F%2FHDOD36Sa3Nw8ADyuM3WgCKS7X031fntIRDE65tvZ1uq5KawyFwNc8cYn%2FZ8GLBNKK4N86A3odHkAV7OK11YmfeECnHPAsqH0ALmKMSvhld5l509ZAvAcuiU7Sx77YEnNLIqALqf%2BzJiWOre3oFO8y7Ob5ukW6i%2FObss2kpmfcKS5QB4CndMXC786RysFJLRcN25ugzT%2B1tV7fobtdqmJq3nsQAj7Jw4f5vwqogkZVU2sBhz26tAlFfovSMpkc4m2ISXwpX0AMym3tCmGJ%2BM1DaXj6O9AUg%2FEWz7TZxxqyvMtbG9MUK3UDkzNYwsRSRg7zQcxaL6rbtKQNrZ6sHCVhFmp%2Bjfejp5Dp4g92ORvrEsNjoIFecnhr5VOMcZd0MpUryWZ%2By7jiP%2F8eIkjnSUzeZRs4w%2BITKYwD5lsOatQXEULOblhB4pmnsmlKVd7E89lIBj6i75ydEAH5CpLSHGMUONMtPTvgm9URywN2yu%2F5Ed4QYdr8RiL9F1p8AcqAVydSMVe6medPOOs109gcfvXD%2Bz0xilzaprItzx4JTape6b85gUwnW9ykRC9p8IaVolJv9wnYzZsGevBlGJyrzvBNoXYicwjd%2F2vAY6pgFta%2Fst8BGTPXH5GCR%2F%2FAuEcO%2FLeAfjtAzhcI0mhEVlBzH1qziXvItoUQzF8ls6jqNwNBkiSW85XwFPLJwc1VlS88E61pGCjze0hnhTVc8mVg5l%2BSVZ2nUO2BXHwtyovJ1qN99GhbXcPRrbWknFtvB8Ce39wkYdav5K4NcjRNWW0z7YOiUIJD8Hxt%2BWyyPM5Wd1NleuXRNlup23Q62Q%2BwGkr5m2Vo6%2F&X-Amz-Signature=e68c8d29310656c5e02ae5a86665c61e07d0344c096197991f0b20bc26e95939&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THI6OBAE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B3XU2pqkDTKBE201lnPCX%2Fso0OyEqvRuR9zWykfysMAiAmHw1ZcJxosPQKhRRVkBYvyiRXJuf6xiUHYLx9e5xTZiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgoH1bpDmn9cARezKtwDEHrAfR9iftB%2BBccFs1m%2B%2Fwk5GpQ0prT%2F%2FHDOD36Sa3Nw8ADyuM3WgCKS7X031fntIRDE65tvZ1uq5KawyFwNc8cYn%2FZ8GLBNKK4N86A3odHkAV7OK11YmfeECnHPAsqH0ALmKMSvhld5l509ZAvAcuiU7Sx77YEnNLIqALqf%2BzJiWOre3oFO8y7Ob5ukW6i%2FObss2kpmfcKS5QB4CndMXC786RysFJLRcN25ugzT%2B1tV7fobtdqmJq3nsQAj7Jw4f5vwqogkZVU2sBhz26tAlFfovSMpkc4m2ISXwpX0AMym3tCmGJ%2BM1DaXj6O9AUg%2FEWz7TZxxqyvMtbG9MUK3UDkzNYwsRSRg7zQcxaL6rbtKQNrZ6sHCVhFmp%2Bjfejp5Dp4g92ORvrEsNjoIFecnhr5VOMcZd0MpUryWZ%2By7jiP%2F8eIkjnSUzeZRs4w%2BITKYwD5lsOatQXEULOblhB4pmnsmlKVd7E89lIBj6i75ydEAH5CpLSHGMUONMtPTvgm9URywN2yu%2F5Ed4QYdr8RiL9F1p8AcqAVydSMVe6medPOOs109gcfvXD%2Bz0xilzaprItzx4JTape6b85gUwnW9ykRC9p8IaVolJv9wnYzZsGevBlGJyrzvBNoXYicwjd%2F2vAY6pgFta%2Fst8BGTPXH5GCR%2F%2FAuEcO%2FLeAfjtAzhcI0mhEVlBzH1qziXvItoUQzF8ls6jqNwNBkiSW85XwFPLJwc1VlS88E61pGCjze0hnhTVc8mVg5l%2BSVZ2nUO2BXHwtyovJ1qN99GhbXcPRrbWknFtvB8Ce39wkYdav5K4NcjRNWW0z7YOiUIJD8Hxt%2BWyyPM5Wd1NleuXRNlup23Q62Q%2BwGkr5m2Vo6%2F&X-Amz-Signature=62ad66f286185b3f3ea557bd655b7ab0f0cdb65ae89d986a460cec5c3c0fe4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THI6OBAE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B3XU2pqkDTKBE201lnPCX%2Fso0OyEqvRuR9zWykfysMAiAmHw1ZcJxosPQKhRRVkBYvyiRXJuf6xiUHYLx9e5xTZiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgoH1bpDmn9cARezKtwDEHrAfR9iftB%2BBccFs1m%2B%2Fwk5GpQ0prT%2F%2FHDOD36Sa3Nw8ADyuM3WgCKS7X031fntIRDE65tvZ1uq5KawyFwNc8cYn%2FZ8GLBNKK4N86A3odHkAV7OK11YmfeECnHPAsqH0ALmKMSvhld5l509ZAvAcuiU7Sx77YEnNLIqALqf%2BzJiWOre3oFO8y7Ob5ukW6i%2FObss2kpmfcKS5QB4CndMXC786RysFJLRcN25ugzT%2B1tV7fobtdqmJq3nsQAj7Jw4f5vwqogkZVU2sBhz26tAlFfovSMpkc4m2ISXwpX0AMym3tCmGJ%2BM1DaXj6O9AUg%2FEWz7TZxxqyvMtbG9MUK3UDkzNYwsRSRg7zQcxaL6rbtKQNrZ6sHCVhFmp%2Bjfejp5Dp4g92ORvrEsNjoIFecnhr5VOMcZd0MpUryWZ%2By7jiP%2F8eIkjnSUzeZRs4w%2BITKYwD5lsOatQXEULOblhB4pmnsmlKVd7E89lIBj6i75ydEAH5CpLSHGMUONMtPTvgm9URywN2yu%2F5Ed4QYdr8RiL9F1p8AcqAVydSMVe6medPOOs109gcfvXD%2Bz0xilzaprItzx4JTape6b85gUwnW9ykRC9p8IaVolJv9wnYzZsGevBlGJyrzvBNoXYicwjd%2F2vAY6pgFta%2Fst8BGTPXH5GCR%2F%2FAuEcO%2FLeAfjtAzhcI0mhEVlBzH1qziXvItoUQzF8ls6jqNwNBkiSW85XwFPLJwc1VlS88E61pGCjze0hnhTVc8mVg5l%2BSVZ2nUO2BXHwtyovJ1qN99GhbXcPRrbWknFtvB8Ce39wkYdav5K4NcjRNWW0z7YOiUIJD8Hxt%2BWyyPM5Wd1NleuXRNlup23Q62Q%2BwGkr5m2Vo6%2F&X-Amz-Signature=8703509de06ceb308a1ad62141dc6c3df4731609709b4014439c8fa4047a2080&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THI6OBAE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B3XU2pqkDTKBE201lnPCX%2Fso0OyEqvRuR9zWykfysMAiAmHw1ZcJxosPQKhRRVkBYvyiRXJuf6xiUHYLx9e5xTZiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgoH1bpDmn9cARezKtwDEHrAfR9iftB%2BBccFs1m%2B%2Fwk5GpQ0prT%2F%2FHDOD36Sa3Nw8ADyuM3WgCKS7X031fntIRDE65tvZ1uq5KawyFwNc8cYn%2FZ8GLBNKK4N86A3odHkAV7OK11YmfeECnHPAsqH0ALmKMSvhld5l509ZAvAcuiU7Sx77YEnNLIqALqf%2BzJiWOre3oFO8y7Ob5ukW6i%2FObss2kpmfcKS5QB4CndMXC786RysFJLRcN25ugzT%2B1tV7fobtdqmJq3nsQAj7Jw4f5vwqogkZVU2sBhz26tAlFfovSMpkc4m2ISXwpX0AMym3tCmGJ%2BM1DaXj6O9AUg%2FEWz7TZxxqyvMtbG9MUK3UDkzNYwsRSRg7zQcxaL6rbtKQNrZ6sHCVhFmp%2Bjfejp5Dp4g92ORvrEsNjoIFecnhr5VOMcZd0MpUryWZ%2By7jiP%2F8eIkjnSUzeZRs4w%2BITKYwD5lsOatQXEULOblhB4pmnsmlKVd7E89lIBj6i75ydEAH5CpLSHGMUONMtPTvgm9URywN2yu%2F5Ed4QYdr8RiL9F1p8AcqAVydSMVe6medPOOs109gcfvXD%2Bz0xilzaprItzx4JTape6b85gUwnW9ykRC9p8IaVolJv9wnYzZsGevBlGJyrzvBNoXYicwjd%2F2vAY6pgFta%2Fst8BGTPXH5GCR%2F%2FAuEcO%2FLeAfjtAzhcI0mhEVlBzH1qziXvItoUQzF8ls6jqNwNBkiSW85XwFPLJwc1VlS88E61pGCjze0hnhTVc8mVg5l%2BSVZ2nUO2BXHwtyovJ1qN99GhbXcPRrbWknFtvB8Ce39wkYdav5K4NcjRNWW0z7YOiUIJD8Hxt%2BWyyPM5Wd1NleuXRNlup23Q62Q%2BwGkr5m2Vo6%2F&X-Amz-Signature=65348042e97e2f3d688bb20e587312da03c816764c455fef27c7b74532165cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THI6OBAE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B3XU2pqkDTKBE201lnPCX%2Fso0OyEqvRuR9zWykfysMAiAmHw1ZcJxosPQKhRRVkBYvyiRXJuf6xiUHYLx9e5xTZiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgoH1bpDmn9cARezKtwDEHrAfR9iftB%2BBccFs1m%2B%2Fwk5GpQ0prT%2F%2FHDOD36Sa3Nw8ADyuM3WgCKS7X031fntIRDE65tvZ1uq5KawyFwNc8cYn%2FZ8GLBNKK4N86A3odHkAV7OK11YmfeECnHPAsqH0ALmKMSvhld5l509ZAvAcuiU7Sx77YEnNLIqALqf%2BzJiWOre3oFO8y7Ob5ukW6i%2FObss2kpmfcKS5QB4CndMXC786RysFJLRcN25ugzT%2B1tV7fobtdqmJq3nsQAj7Jw4f5vwqogkZVU2sBhz26tAlFfovSMpkc4m2ISXwpX0AMym3tCmGJ%2BM1DaXj6O9AUg%2FEWz7TZxxqyvMtbG9MUK3UDkzNYwsRSRg7zQcxaL6rbtKQNrZ6sHCVhFmp%2Bjfejp5Dp4g92ORvrEsNjoIFecnhr5VOMcZd0MpUryWZ%2By7jiP%2F8eIkjnSUzeZRs4w%2BITKYwD5lsOatQXEULOblhB4pmnsmlKVd7E89lIBj6i75ydEAH5CpLSHGMUONMtPTvgm9URywN2yu%2F5Ed4QYdr8RiL9F1p8AcqAVydSMVe6medPOOs109gcfvXD%2Bz0xilzaprItzx4JTape6b85gUwnW9ykRC9p8IaVolJv9wnYzZsGevBlGJyrzvBNoXYicwjd%2F2vAY6pgFta%2Fst8BGTPXH5GCR%2F%2FAuEcO%2FLeAfjtAzhcI0mhEVlBzH1qziXvItoUQzF8ls6jqNwNBkiSW85XwFPLJwc1VlS88E61pGCjze0hnhTVc8mVg5l%2BSVZ2nUO2BXHwtyovJ1qN99GhbXcPRrbWknFtvB8Ce39wkYdav5K4NcjRNWW0z7YOiUIJD8Hxt%2BWyyPM5Wd1NleuXRNlup23Q62Q%2BwGkr5m2Vo6%2F&X-Amz-Signature=01397c58061d3657a1f43faf6b03ea566646b5ae5f02dad8fb6803eb3dd7d768&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THI6OBAE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B3XU2pqkDTKBE201lnPCX%2Fso0OyEqvRuR9zWykfysMAiAmHw1ZcJxosPQKhRRVkBYvyiRXJuf6xiUHYLx9e5xTZiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgoH1bpDmn9cARezKtwDEHrAfR9iftB%2BBccFs1m%2B%2Fwk5GpQ0prT%2F%2FHDOD36Sa3Nw8ADyuM3WgCKS7X031fntIRDE65tvZ1uq5KawyFwNc8cYn%2FZ8GLBNKK4N86A3odHkAV7OK11YmfeECnHPAsqH0ALmKMSvhld5l509ZAvAcuiU7Sx77YEnNLIqALqf%2BzJiWOre3oFO8y7Ob5ukW6i%2FObss2kpmfcKS5QB4CndMXC786RysFJLRcN25ugzT%2B1tV7fobtdqmJq3nsQAj7Jw4f5vwqogkZVU2sBhz26tAlFfovSMpkc4m2ISXwpX0AMym3tCmGJ%2BM1DaXj6O9AUg%2FEWz7TZxxqyvMtbG9MUK3UDkzNYwsRSRg7zQcxaL6rbtKQNrZ6sHCVhFmp%2Bjfejp5Dp4g92ORvrEsNjoIFecnhr5VOMcZd0MpUryWZ%2By7jiP%2F8eIkjnSUzeZRs4w%2BITKYwD5lsOatQXEULOblhB4pmnsmlKVd7E89lIBj6i75ydEAH5CpLSHGMUONMtPTvgm9URywN2yu%2F5Ed4QYdr8RiL9F1p8AcqAVydSMVe6medPOOs109gcfvXD%2Bz0xilzaprItzx4JTape6b85gUwnW9ykRC9p8IaVolJv9wnYzZsGevBlGJyrzvBNoXYicwjd%2F2vAY6pgFta%2Fst8BGTPXH5GCR%2F%2FAuEcO%2FLeAfjtAzhcI0mhEVlBzH1qziXvItoUQzF8ls6jqNwNBkiSW85XwFPLJwc1VlS88E61pGCjze0hnhTVc8mVg5l%2BSVZ2nUO2BXHwtyovJ1qN99GhbXcPRrbWknFtvB8Ce39wkYdav5K4NcjRNWW0z7YOiUIJD8Hxt%2BWyyPM5Wd1NleuXRNlup23Q62Q%2BwGkr5m2Vo6%2F&X-Amz-Signature=b69034c90b1152e45183b4de1f5294f606eb279fc3e237b5c4c8fd1ebe15e4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

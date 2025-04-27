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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A54JQFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0cmvkRve9l8uSStihLiDzfUoH2QundydNFCoqBSpigAiEAg%2F06p0QibrohB1nV3ON59S732zF53OinymkqCyP7vpUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJ5zRnH1hcgmxBMeNCrcA7ebsCArKgoMr8ebr9NiGCcko9vIfXC1RM9bBBEdwJvdD319pVb4nsHT6jVZtnMvdHyKQrrNHXwONrvBHxLbGMZgUZrBTPhT7ma48YXYWbesi6wkgr%2BtdAYx0OLjQ2axdynmttxTVEeKAZBlvgzctmZVC5QFADj01LfQj3lVfXtz78jFETAgM7Y2T%2Fs252BgicBLaS30BHT0W8NGR9KLF9idadX%2BucQ%2FKGfWueACE08wn0%2BrkxtZaFTvJWRfPchyKbaftpyxSU%2Bc%2FsK5dQaqiK1emtPVaCHsK%2BrXSmmxsdnVAUKe03Ve8OVFb6fRzMtSpdXOJA2zSeJOQ24Y%2B1uIDk2Wivt0G3OFycSKyxFNQH8Bfte7v7tNtQYDiLzX%2BLY2eo%2BLryTQACr2Yh5%2BgBmRRwgYUbatVeza0glse0h2DF5BlKqWZnceq%2BJ%2BcV6OB0KXoQrKHUw%2BJo9WVkDnrAdU%2BKmCWLuapbPKerYREAIbO3MAO4qUTfTT8FXk1I3WuH9bBP7nQLH0PuOD4Df4Dhzp0MCmdoOwI2wjD9m5t%2BQq51AG6%2BLhrWm8bC0I6s8rJ2mtG7LdexDk8zlmGFLLIeFw1besWoCxgyjXPcD7dydm7YqTb8Satk3q1S8dMOvrMJSMuMAGOqUBmcsoFtPFj%2BStiW6H2w2KS3xeviB%2F06W9v1VXktcmeDK5ZMdM%2FOv2GWOBkUniC2z5TpCbBxPlIf4whlzP7q9PupuauiNfKDN1jD%2Bv83TZDlpwCT459CoPZyX4CHly7dcDvU%2B%2B3WT5ANSaGcf9b36zLviNPtaloUiqmk7j07RHOYVzOv%2B6v3H02lr%2FiJ7uZBYGxPvrDInPhIMYRi8SJCBlaC%2BulokF&X-Amz-Signature=0f48cf7fdae112b536abf32e59756d9eb6e74b7c6b52df3bfd68b3863c8f7c95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A54JQFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0cmvkRve9l8uSStihLiDzfUoH2QundydNFCoqBSpigAiEAg%2F06p0QibrohB1nV3ON59S732zF53OinymkqCyP7vpUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJ5zRnH1hcgmxBMeNCrcA7ebsCArKgoMr8ebr9NiGCcko9vIfXC1RM9bBBEdwJvdD319pVb4nsHT6jVZtnMvdHyKQrrNHXwONrvBHxLbGMZgUZrBTPhT7ma48YXYWbesi6wkgr%2BtdAYx0OLjQ2axdynmttxTVEeKAZBlvgzctmZVC5QFADj01LfQj3lVfXtz78jFETAgM7Y2T%2Fs252BgicBLaS30BHT0W8NGR9KLF9idadX%2BucQ%2FKGfWueACE08wn0%2BrkxtZaFTvJWRfPchyKbaftpyxSU%2Bc%2FsK5dQaqiK1emtPVaCHsK%2BrXSmmxsdnVAUKe03Ve8OVFb6fRzMtSpdXOJA2zSeJOQ24Y%2B1uIDk2Wivt0G3OFycSKyxFNQH8Bfte7v7tNtQYDiLzX%2BLY2eo%2BLryTQACr2Yh5%2BgBmRRwgYUbatVeza0glse0h2DF5BlKqWZnceq%2BJ%2BcV6OB0KXoQrKHUw%2BJo9WVkDnrAdU%2BKmCWLuapbPKerYREAIbO3MAO4qUTfTT8FXk1I3WuH9bBP7nQLH0PuOD4Df4Dhzp0MCmdoOwI2wjD9m5t%2BQq51AG6%2BLhrWm8bC0I6s8rJ2mtG7LdexDk8zlmGFLLIeFw1besWoCxgyjXPcD7dydm7YqTb8Satk3q1S8dMOvrMJSMuMAGOqUBmcsoFtPFj%2BStiW6H2w2KS3xeviB%2F06W9v1VXktcmeDK5ZMdM%2FOv2GWOBkUniC2z5TpCbBxPlIf4whlzP7q9PupuauiNfKDN1jD%2Bv83TZDlpwCT459CoPZyX4CHly7dcDvU%2B%2B3WT5ANSaGcf9b36zLviNPtaloUiqmk7j07RHOYVzOv%2B6v3H02lr%2FiJ7uZBYGxPvrDInPhIMYRi8SJCBlaC%2BulokF&X-Amz-Signature=ca02c614fb31f4fd181d472fc7b31b8a53f14e0a5069a58eb7c8f152042dcce8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A54JQFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0cmvkRve9l8uSStihLiDzfUoH2QundydNFCoqBSpigAiEAg%2F06p0QibrohB1nV3ON59S732zF53OinymkqCyP7vpUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJ5zRnH1hcgmxBMeNCrcA7ebsCArKgoMr8ebr9NiGCcko9vIfXC1RM9bBBEdwJvdD319pVb4nsHT6jVZtnMvdHyKQrrNHXwONrvBHxLbGMZgUZrBTPhT7ma48YXYWbesi6wkgr%2BtdAYx0OLjQ2axdynmttxTVEeKAZBlvgzctmZVC5QFADj01LfQj3lVfXtz78jFETAgM7Y2T%2Fs252BgicBLaS30BHT0W8NGR9KLF9idadX%2BucQ%2FKGfWueACE08wn0%2BrkxtZaFTvJWRfPchyKbaftpyxSU%2Bc%2FsK5dQaqiK1emtPVaCHsK%2BrXSmmxsdnVAUKe03Ve8OVFb6fRzMtSpdXOJA2zSeJOQ24Y%2B1uIDk2Wivt0G3OFycSKyxFNQH8Bfte7v7tNtQYDiLzX%2BLY2eo%2BLryTQACr2Yh5%2BgBmRRwgYUbatVeza0glse0h2DF5BlKqWZnceq%2BJ%2BcV6OB0KXoQrKHUw%2BJo9WVkDnrAdU%2BKmCWLuapbPKerYREAIbO3MAO4qUTfTT8FXk1I3WuH9bBP7nQLH0PuOD4Df4Dhzp0MCmdoOwI2wjD9m5t%2BQq51AG6%2BLhrWm8bC0I6s8rJ2mtG7LdexDk8zlmGFLLIeFw1besWoCxgyjXPcD7dydm7YqTb8Satk3q1S8dMOvrMJSMuMAGOqUBmcsoFtPFj%2BStiW6H2w2KS3xeviB%2F06W9v1VXktcmeDK5ZMdM%2FOv2GWOBkUniC2z5TpCbBxPlIf4whlzP7q9PupuauiNfKDN1jD%2Bv83TZDlpwCT459CoPZyX4CHly7dcDvU%2B%2B3WT5ANSaGcf9b36zLviNPtaloUiqmk7j07RHOYVzOv%2B6v3H02lr%2FiJ7uZBYGxPvrDInPhIMYRi8SJCBlaC%2BulokF&X-Amz-Signature=83322387c5ec8be806c1ee20e44aa2b7ab28ce9a32aeaeffb198c1f2522292e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A54JQFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0cmvkRve9l8uSStihLiDzfUoH2QundydNFCoqBSpigAiEAg%2F06p0QibrohB1nV3ON59S732zF53OinymkqCyP7vpUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJ5zRnH1hcgmxBMeNCrcA7ebsCArKgoMr8ebr9NiGCcko9vIfXC1RM9bBBEdwJvdD319pVb4nsHT6jVZtnMvdHyKQrrNHXwONrvBHxLbGMZgUZrBTPhT7ma48YXYWbesi6wkgr%2BtdAYx0OLjQ2axdynmttxTVEeKAZBlvgzctmZVC5QFADj01LfQj3lVfXtz78jFETAgM7Y2T%2Fs252BgicBLaS30BHT0W8NGR9KLF9idadX%2BucQ%2FKGfWueACE08wn0%2BrkxtZaFTvJWRfPchyKbaftpyxSU%2Bc%2FsK5dQaqiK1emtPVaCHsK%2BrXSmmxsdnVAUKe03Ve8OVFb6fRzMtSpdXOJA2zSeJOQ24Y%2B1uIDk2Wivt0G3OFycSKyxFNQH8Bfte7v7tNtQYDiLzX%2BLY2eo%2BLryTQACr2Yh5%2BgBmRRwgYUbatVeza0glse0h2DF5BlKqWZnceq%2BJ%2BcV6OB0KXoQrKHUw%2BJo9WVkDnrAdU%2BKmCWLuapbPKerYREAIbO3MAO4qUTfTT8FXk1I3WuH9bBP7nQLH0PuOD4Df4Dhzp0MCmdoOwI2wjD9m5t%2BQq51AG6%2BLhrWm8bC0I6s8rJ2mtG7LdexDk8zlmGFLLIeFw1besWoCxgyjXPcD7dydm7YqTb8Satk3q1S8dMOvrMJSMuMAGOqUBmcsoFtPFj%2BStiW6H2w2KS3xeviB%2F06W9v1VXktcmeDK5ZMdM%2FOv2GWOBkUniC2z5TpCbBxPlIf4whlzP7q9PupuauiNfKDN1jD%2Bv83TZDlpwCT459CoPZyX4CHly7dcDvU%2B%2B3WT5ANSaGcf9b36zLviNPtaloUiqmk7j07RHOYVzOv%2B6v3H02lr%2FiJ7uZBYGxPvrDInPhIMYRi8SJCBlaC%2BulokF&X-Amz-Signature=652eaa967610a0150a8caf173f5b5b41b5aab795a2f4e1550d4909db8721ddc4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A54JQFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0cmvkRve9l8uSStihLiDzfUoH2QundydNFCoqBSpigAiEAg%2F06p0QibrohB1nV3ON59S732zF53OinymkqCyP7vpUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJ5zRnH1hcgmxBMeNCrcA7ebsCArKgoMr8ebr9NiGCcko9vIfXC1RM9bBBEdwJvdD319pVb4nsHT6jVZtnMvdHyKQrrNHXwONrvBHxLbGMZgUZrBTPhT7ma48YXYWbesi6wkgr%2BtdAYx0OLjQ2axdynmttxTVEeKAZBlvgzctmZVC5QFADj01LfQj3lVfXtz78jFETAgM7Y2T%2Fs252BgicBLaS30BHT0W8NGR9KLF9idadX%2BucQ%2FKGfWueACE08wn0%2BrkxtZaFTvJWRfPchyKbaftpyxSU%2Bc%2FsK5dQaqiK1emtPVaCHsK%2BrXSmmxsdnVAUKe03Ve8OVFb6fRzMtSpdXOJA2zSeJOQ24Y%2B1uIDk2Wivt0G3OFycSKyxFNQH8Bfte7v7tNtQYDiLzX%2BLY2eo%2BLryTQACr2Yh5%2BgBmRRwgYUbatVeza0glse0h2DF5BlKqWZnceq%2BJ%2BcV6OB0KXoQrKHUw%2BJo9WVkDnrAdU%2BKmCWLuapbPKerYREAIbO3MAO4qUTfTT8FXk1I3WuH9bBP7nQLH0PuOD4Df4Dhzp0MCmdoOwI2wjD9m5t%2BQq51AG6%2BLhrWm8bC0I6s8rJ2mtG7LdexDk8zlmGFLLIeFw1besWoCxgyjXPcD7dydm7YqTb8Satk3q1S8dMOvrMJSMuMAGOqUBmcsoFtPFj%2BStiW6H2w2KS3xeviB%2F06W9v1VXktcmeDK5ZMdM%2FOv2GWOBkUniC2z5TpCbBxPlIf4whlzP7q9PupuauiNfKDN1jD%2Bv83TZDlpwCT459CoPZyX4CHly7dcDvU%2B%2B3WT5ANSaGcf9b36zLviNPtaloUiqmk7j07RHOYVzOv%2B6v3H02lr%2FiJ7uZBYGxPvrDInPhIMYRi8SJCBlaC%2BulokF&X-Amz-Signature=1ceb13308f0a77a53dc9f860c4e6b74282c498bf4421b9910b873e1631a7795d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A54JQFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0cmvkRve9l8uSStihLiDzfUoH2QundydNFCoqBSpigAiEAg%2F06p0QibrohB1nV3ON59S732zF53OinymkqCyP7vpUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJ5zRnH1hcgmxBMeNCrcA7ebsCArKgoMr8ebr9NiGCcko9vIfXC1RM9bBBEdwJvdD319pVb4nsHT6jVZtnMvdHyKQrrNHXwONrvBHxLbGMZgUZrBTPhT7ma48YXYWbesi6wkgr%2BtdAYx0OLjQ2axdynmttxTVEeKAZBlvgzctmZVC5QFADj01LfQj3lVfXtz78jFETAgM7Y2T%2Fs252BgicBLaS30BHT0W8NGR9KLF9idadX%2BucQ%2FKGfWueACE08wn0%2BrkxtZaFTvJWRfPchyKbaftpyxSU%2Bc%2FsK5dQaqiK1emtPVaCHsK%2BrXSmmxsdnVAUKe03Ve8OVFb6fRzMtSpdXOJA2zSeJOQ24Y%2B1uIDk2Wivt0G3OFycSKyxFNQH8Bfte7v7tNtQYDiLzX%2BLY2eo%2BLryTQACr2Yh5%2BgBmRRwgYUbatVeza0glse0h2DF5BlKqWZnceq%2BJ%2BcV6OB0KXoQrKHUw%2BJo9WVkDnrAdU%2BKmCWLuapbPKerYREAIbO3MAO4qUTfTT8FXk1I3WuH9bBP7nQLH0PuOD4Df4Dhzp0MCmdoOwI2wjD9m5t%2BQq51AG6%2BLhrWm8bC0I6s8rJ2mtG7LdexDk8zlmGFLLIeFw1besWoCxgyjXPcD7dydm7YqTb8Satk3q1S8dMOvrMJSMuMAGOqUBmcsoFtPFj%2BStiW6H2w2KS3xeviB%2F06W9v1VXktcmeDK5ZMdM%2FOv2GWOBkUniC2z5TpCbBxPlIf4whlzP7q9PupuauiNfKDN1jD%2Bv83TZDlpwCT459CoPZyX4CHly7dcDvU%2B%2B3WT5ANSaGcf9b36zLviNPtaloUiqmk7j07RHOYVzOv%2B6v3H02lr%2FiJ7uZBYGxPvrDInPhIMYRi8SJCBlaC%2BulokF&X-Amz-Signature=9f06907500d133d197d14bb157ef5678f01d3e41610490bc6274956ad55289f3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A54JQFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0cmvkRve9l8uSStihLiDzfUoH2QundydNFCoqBSpigAiEAg%2F06p0QibrohB1nV3ON59S732zF53OinymkqCyP7vpUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJ5zRnH1hcgmxBMeNCrcA7ebsCArKgoMr8ebr9NiGCcko9vIfXC1RM9bBBEdwJvdD319pVb4nsHT6jVZtnMvdHyKQrrNHXwONrvBHxLbGMZgUZrBTPhT7ma48YXYWbesi6wkgr%2BtdAYx0OLjQ2axdynmttxTVEeKAZBlvgzctmZVC5QFADj01LfQj3lVfXtz78jFETAgM7Y2T%2Fs252BgicBLaS30BHT0W8NGR9KLF9idadX%2BucQ%2FKGfWueACE08wn0%2BrkxtZaFTvJWRfPchyKbaftpyxSU%2Bc%2FsK5dQaqiK1emtPVaCHsK%2BrXSmmxsdnVAUKe03Ve8OVFb6fRzMtSpdXOJA2zSeJOQ24Y%2B1uIDk2Wivt0G3OFycSKyxFNQH8Bfte7v7tNtQYDiLzX%2BLY2eo%2BLryTQACr2Yh5%2BgBmRRwgYUbatVeza0glse0h2DF5BlKqWZnceq%2BJ%2BcV6OB0KXoQrKHUw%2BJo9WVkDnrAdU%2BKmCWLuapbPKerYREAIbO3MAO4qUTfTT8FXk1I3WuH9bBP7nQLH0PuOD4Df4Dhzp0MCmdoOwI2wjD9m5t%2BQq51AG6%2BLhrWm8bC0I6s8rJ2mtG7LdexDk8zlmGFLLIeFw1besWoCxgyjXPcD7dydm7YqTb8Satk3q1S8dMOvrMJSMuMAGOqUBmcsoFtPFj%2BStiW6H2w2KS3xeviB%2F06W9v1VXktcmeDK5ZMdM%2FOv2GWOBkUniC2z5TpCbBxPlIf4whlzP7q9PupuauiNfKDN1jD%2Bv83TZDlpwCT459CoPZyX4CHly7dcDvU%2B%2B3WT5ANSaGcf9b36zLviNPtaloUiqmk7j07RHOYVzOv%2B6v3H02lr%2FiJ7uZBYGxPvrDInPhIMYRi8SJCBlaC%2BulokF&X-Amz-Signature=689d4c00bf5aff904ba5728dd48ba53357b418b5158fe76ba13457fe300f7f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

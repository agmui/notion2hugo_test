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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KKDXD6V%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQM7Hsq1qAD7CxSLLBCPYVh7yBXWCcqEprNXcPqdWidwIhAKVWgxS2lL708lEnKtZRw63cpA6uaHULtdHuifyYh8OAKv8DCF4QABoMNjM3NDIzMTgzODA1IgzEWKLAO4X1GnB4rSoq3AM21u%2BGfXrlzwki78aqjl8GmONHbM79GjTLb6tm9Lnb3JPpIu8zMgcjN9PmxvxzsCCz%2BLgNGB5PVAOpQDP9N0ReIh2XJ3PxvPYka824NEsHSsjUOg6FQ9fqENCnEzChiabNWGMP18DWp6wUg2c4TYTKqFcDx7yNKV8cNEot0N%2FblVIu3QpNXLoPVVHvnT4SbsPZ182hZDcR1dCP8PcncyUKyjwN9Pxm66GX%2FocMo%2FSNToBSMoiiMdSo5Q3Dr4LR%2FzVtTPrZxCZYGpmT6yx7Tm%2F4BSPkABMY42pEvJMHE5QGpIKW0krcUBPBgg2QsqRHD99mhKvr9STEu7UJuVSWzJDUEtaic7qbK5MKD0ExEYFTuyak7nwHxqn9uSe9U4T%2BOeamHp6ED2NhfTLfiL%2Bddhszlj8U0B3JfRJEGxzmAjKiWZmVI2V0BkvGvVIYSEan66gdVgJ8npXKqZ3EdlaJ5yB9VUdy42FHTZ5QEwDU10y4cZpMP0r8pjpZKNS7%2FBkzLTC%2FT8OBKn0qcTPgiiKJ%2BWePg2ysUFD9hVP2Ge99z%2F5LaLt3W5VO7bg2VnUhqEWf6i1f31PeuSyRBf34SwPk3vcPkbAnp%2FIA%2FRh2P7Z9Whv1AwHLsm%2FHUfFNSPa8HTDJ5dbBBjqkAWapb5uC3LOWewyceN4hC1TBenm1raUNwbBXpjMe9KRIepjtDH%2F0tfCKvUJ0M1mzWNDJJ3KM%2B7RjQlGvJIUDpTEOxDqwhvESfZCTaatd2zwgQb0bqAbslHVic3eBoZrzOSiMGkVo%2FRMhY8KBu3dvj17VLga1R4IxgWzesqG8bU6UtCCexhJ0K4ku1FBT2jMW3NFWjsgemptKiwj2NKz87Km%2BgdXG&X-Amz-Signature=9a8b5de4dfab3a607d849832a78acb055f7bac7255e2a824adb62bc31e55fd9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KKDXD6V%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQM7Hsq1qAD7CxSLLBCPYVh7yBXWCcqEprNXcPqdWidwIhAKVWgxS2lL708lEnKtZRw63cpA6uaHULtdHuifyYh8OAKv8DCF4QABoMNjM3NDIzMTgzODA1IgzEWKLAO4X1GnB4rSoq3AM21u%2BGfXrlzwki78aqjl8GmONHbM79GjTLb6tm9Lnb3JPpIu8zMgcjN9PmxvxzsCCz%2BLgNGB5PVAOpQDP9N0ReIh2XJ3PxvPYka824NEsHSsjUOg6FQ9fqENCnEzChiabNWGMP18DWp6wUg2c4TYTKqFcDx7yNKV8cNEot0N%2FblVIu3QpNXLoPVVHvnT4SbsPZ182hZDcR1dCP8PcncyUKyjwN9Pxm66GX%2FocMo%2FSNToBSMoiiMdSo5Q3Dr4LR%2FzVtTPrZxCZYGpmT6yx7Tm%2F4BSPkABMY42pEvJMHE5QGpIKW0krcUBPBgg2QsqRHD99mhKvr9STEu7UJuVSWzJDUEtaic7qbK5MKD0ExEYFTuyak7nwHxqn9uSe9U4T%2BOeamHp6ED2NhfTLfiL%2Bddhszlj8U0B3JfRJEGxzmAjKiWZmVI2V0BkvGvVIYSEan66gdVgJ8npXKqZ3EdlaJ5yB9VUdy42FHTZ5QEwDU10y4cZpMP0r8pjpZKNS7%2FBkzLTC%2FT8OBKn0qcTPgiiKJ%2BWePg2ysUFD9hVP2Ge99z%2F5LaLt3W5VO7bg2VnUhqEWf6i1f31PeuSyRBf34SwPk3vcPkbAnp%2FIA%2FRh2P7Z9Whv1AwHLsm%2FHUfFNSPa8HTDJ5dbBBjqkAWapb5uC3LOWewyceN4hC1TBenm1raUNwbBXpjMe9KRIepjtDH%2F0tfCKvUJ0M1mzWNDJJ3KM%2B7RjQlGvJIUDpTEOxDqwhvESfZCTaatd2zwgQb0bqAbslHVic3eBoZrzOSiMGkVo%2FRMhY8KBu3dvj17VLga1R4IxgWzesqG8bU6UtCCexhJ0K4ku1FBT2jMW3NFWjsgemptKiwj2NKz87Km%2BgdXG&X-Amz-Signature=097eefd0c45c04e53e5c3797792bd949d835eb00d528de19aa2807ae6ad03a32&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KKDXD6V%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQM7Hsq1qAD7CxSLLBCPYVh7yBXWCcqEprNXcPqdWidwIhAKVWgxS2lL708lEnKtZRw63cpA6uaHULtdHuifyYh8OAKv8DCF4QABoMNjM3NDIzMTgzODA1IgzEWKLAO4X1GnB4rSoq3AM21u%2BGfXrlzwki78aqjl8GmONHbM79GjTLb6tm9Lnb3JPpIu8zMgcjN9PmxvxzsCCz%2BLgNGB5PVAOpQDP9N0ReIh2XJ3PxvPYka824NEsHSsjUOg6FQ9fqENCnEzChiabNWGMP18DWp6wUg2c4TYTKqFcDx7yNKV8cNEot0N%2FblVIu3QpNXLoPVVHvnT4SbsPZ182hZDcR1dCP8PcncyUKyjwN9Pxm66GX%2FocMo%2FSNToBSMoiiMdSo5Q3Dr4LR%2FzVtTPrZxCZYGpmT6yx7Tm%2F4BSPkABMY42pEvJMHE5QGpIKW0krcUBPBgg2QsqRHD99mhKvr9STEu7UJuVSWzJDUEtaic7qbK5MKD0ExEYFTuyak7nwHxqn9uSe9U4T%2BOeamHp6ED2NhfTLfiL%2Bddhszlj8U0B3JfRJEGxzmAjKiWZmVI2V0BkvGvVIYSEan66gdVgJ8npXKqZ3EdlaJ5yB9VUdy42FHTZ5QEwDU10y4cZpMP0r8pjpZKNS7%2FBkzLTC%2FT8OBKn0qcTPgiiKJ%2BWePg2ysUFD9hVP2Ge99z%2F5LaLt3W5VO7bg2VnUhqEWf6i1f31PeuSyRBf34SwPk3vcPkbAnp%2FIA%2FRh2P7Z9Whv1AwHLsm%2FHUfFNSPa8HTDJ5dbBBjqkAWapb5uC3LOWewyceN4hC1TBenm1raUNwbBXpjMe9KRIepjtDH%2F0tfCKvUJ0M1mzWNDJJ3KM%2B7RjQlGvJIUDpTEOxDqwhvESfZCTaatd2zwgQb0bqAbslHVic3eBoZrzOSiMGkVo%2FRMhY8KBu3dvj17VLga1R4IxgWzesqG8bU6UtCCexhJ0K4ku1FBT2jMW3NFWjsgemptKiwj2NKz87Km%2BgdXG&X-Amz-Signature=83755c620b4b22347d6fc1c127ec108ea6e98c3d784518e7b894a3c080b1cef0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KKDXD6V%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQM7Hsq1qAD7CxSLLBCPYVh7yBXWCcqEprNXcPqdWidwIhAKVWgxS2lL708lEnKtZRw63cpA6uaHULtdHuifyYh8OAKv8DCF4QABoMNjM3NDIzMTgzODA1IgzEWKLAO4X1GnB4rSoq3AM21u%2BGfXrlzwki78aqjl8GmONHbM79GjTLb6tm9Lnb3JPpIu8zMgcjN9PmxvxzsCCz%2BLgNGB5PVAOpQDP9N0ReIh2XJ3PxvPYka824NEsHSsjUOg6FQ9fqENCnEzChiabNWGMP18DWp6wUg2c4TYTKqFcDx7yNKV8cNEot0N%2FblVIu3QpNXLoPVVHvnT4SbsPZ182hZDcR1dCP8PcncyUKyjwN9Pxm66GX%2FocMo%2FSNToBSMoiiMdSo5Q3Dr4LR%2FzVtTPrZxCZYGpmT6yx7Tm%2F4BSPkABMY42pEvJMHE5QGpIKW0krcUBPBgg2QsqRHD99mhKvr9STEu7UJuVSWzJDUEtaic7qbK5MKD0ExEYFTuyak7nwHxqn9uSe9U4T%2BOeamHp6ED2NhfTLfiL%2Bddhszlj8U0B3JfRJEGxzmAjKiWZmVI2V0BkvGvVIYSEan66gdVgJ8npXKqZ3EdlaJ5yB9VUdy42FHTZ5QEwDU10y4cZpMP0r8pjpZKNS7%2FBkzLTC%2FT8OBKn0qcTPgiiKJ%2BWePg2ysUFD9hVP2Ge99z%2F5LaLt3W5VO7bg2VnUhqEWf6i1f31PeuSyRBf34SwPk3vcPkbAnp%2FIA%2FRh2P7Z9Whv1AwHLsm%2FHUfFNSPa8HTDJ5dbBBjqkAWapb5uC3LOWewyceN4hC1TBenm1raUNwbBXpjMe9KRIepjtDH%2F0tfCKvUJ0M1mzWNDJJ3KM%2B7RjQlGvJIUDpTEOxDqwhvESfZCTaatd2zwgQb0bqAbslHVic3eBoZrzOSiMGkVo%2FRMhY8KBu3dvj17VLga1R4IxgWzesqG8bU6UtCCexhJ0K4ku1FBT2jMW3NFWjsgemptKiwj2NKz87Km%2BgdXG&X-Amz-Signature=a948b4836319c4e27b876bb676a93f7d4fc7f1c04a9cf498a1f8e70d8e7c0ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KKDXD6V%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQM7Hsq1qAD7CxSLLBCPYVh7yBXWCcqEprNXcPqdWidwIhAKVWgxS2lL708lEnKtZRw63cpA6uaHULtdHuifyYh8OAKv8DCF4QABoMNjM3NDIzMTgzODA1IgzEWKLAO4X1GnB4rSoq3AM21u%2BGfXrlzwki78aqjl8GmONHbM79GjTLb6tm9Lnb3JPpIu8zMgcjN9PmxvxzsCCz%2BLgNGB5PVAOpQDP9N0ReIh2XJ3PxvPYka824NEsHSsjUOg6FQ9fqENCnEzChiabNWGMP18DWp6wUg2c4TYTKqFcDx7yNKV8cNEot0N%2FblVIu3QpNXLoPVVHvnT4SbsPZ182hZDcR1dCP8PcncyUKyjwN9Pxm66GX%2FocMo%2FSNToBSMoiiMdSo5Q3Dr4LR%2FzVtTPrZxCZYGpmT6yx7Tm%2F4BSPkABMY42pEvJMHE5QGpIKW0krcUBPBgg2QsqRHD99mhKvr9STEu7UJuVSWzJDUEtaic7qbK5MKD0ExEYFTuyak7nwHxqn9uSe9U4T%2BOeamHp6ED2NhfTLfiL%2Bddhszlj8U0B3JfRJEGxzmAjKiWZmVI2V0BkvGvVIYSEan66gdVgJ8npXKqZ3EdlaJ5yB9VUdy42FHTZ5QEwDU10y4cZpMP0r8pjpZKNS7%2FBkzLTC%2FT8OBKn0qcTPgiiKJ%2BWePg2ysUFD9hVP2Ge99z%2F5LaLt3W5VO7bg2VnUhqEWf6i1f31PeuSyRBf34SwPk3vcPkbAnp%2FIA%2FRh2P7Z9Whv1AwHLsm%2FHUfFNSPa8HTDJ5dbBBjqkAWapb5uC3LOWewyceN4hC1TBenm1raUNwbBXpjMe9KRIepjtDH%2F0tfCKvUJ0M1mzWNDJJ3KM%2B7RjQlGvJIUDpTEOxDqwhvESfZCTaatd2zwgQb0bqAbslHVic3eBoZrzOSiMGkVo%2FRMhY8KBu3dvj17VLga1R4IxgWzesqG8bU6UtCCexhJ0K4ku1FBT2jMW3NFWjsgemptKiwj2NKz87Km%2BgdXG&X-Amz-Signature=fb14b675698e5c73aeacbbe00b4118dea207310b2f2c7b49a5e42ca291382235&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KKDXD6V%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQM7Hsq1qAD7CxSLLBCPYVh7yBXWCcqEprNXcPqdWidwIhAKVWgxS2lL708lEnKtZRw63cpA6uaHULtdHuifyYh8OAKv8DCF4QABoMNjM3NDIzMTgzODA1IgzEWKLAO4X1GnB4rSoq3AM21u%2BGfXrlzwki78aqjl8GmONHbM79GjTLb6tm9Lnb3JPpIu8zMgcjN9PmxvxzsCCz%2BLgNGB5PVAOpQDP9N0ReIh2XJ3PxvPYka824NEsHSsjUOg6FQ9fqENCnEzChiabNWGMP18DWp6wUg2c4TYTKqFcDx7yNKV8cNEot0N%2FblVIu3QpNXLoPVVHvnT4SbsPZ182hZDcR1dCP8PcncyUKyjwN9Pxm66GX%2FocMo%2FSNToBSMoiiMdSo5Q3Dr4LR%2FzVtTPrZxCZYGpmT6yx7Tm%2F4BSPkABMY42pEvJMHE5QGpIKW0krcUBPBgg2QsqRHD99mhKvr9STEu7UJuVSWzJDUEtaic7qbK5MKD0ExEYFTuyak7nwHxqn9uSe9U4T%2BOeamHp6ED2NhfTLfiL%2Bddhszlj8U0B3JfRJEGxzmAjKiWZmVI2V0BkvGvVIYSEan66gdVgJ8npXKqZ3EdlaJ5yB9VUdy42FHTZ5QEwDU10y4cZpMP0r8pjpZKNS7%2FBkzLTC%2FT8OBKn0qcTPgiiKJ%2BWePg2ysUFD9hVP2Ge99z%2F5LaLt3W5VO7bg2VnUhqEWf6i1f31PeuSyRBf34SwPk3vcPkbAnp%2FIA%2FRh2P7Z9Whv1AwHLsm%2FHUfFNSPa8HTDJ5dbBBjqkAWapb5uC3LOWewyceN4hC1TBenm1raUNwbBXpjMe9KRIepjtDH%2F0tfCKvUJ0M1mzWNDJJ3KM%2B7RjQlGvJIUDpTEOxDqwhvESfZCTaatd2zwgQb0bqAbslHVic3eBoZrzOSiMGkVo%2FRMhY8KBu3dvj17VLga1R4IxgWzesqG8bU6UtCCexhJ0K4ku1FBT2jMW3NFWjsgemptKiwj2NKz87Km%2BgdXG&X-Amz-Signature=40a3a7091c90b8db35dd51812f66fb054f4b7d4d05c70639e0f9f3775646160c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KKDXD6V%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQM7Hsq1qAD7CxSLLBCPYVh7yBXWCcqEprNXcPqdWidwIhAKVWgxS2lL708lEnKtZRw63cpA6uaHULtdHuifyYh8OAKv8DCF4QABoMNjM3NDIzMTgzODA1IgzEWKLAO4X1GnB4rSoq3AM21u%2BGfXrlzwki78aqjl8GmONHbM79GjTLb6tm9Lnb3JPpIu8zMgcjN9PmxvxzsCCz%2BLgNGB5PVAOpQDP9N0ReIh2XJ3PxvPYka824NEsHSsjUOg6FQ9fqENCnEzChiabNWGMP18DWp6wUg2c4TYTKqFcDx7yNKV8cNEot0N%2FblVIu3QpNXLoPVVHvnT4SbsPZ182hZDcR1dCP8PcncyUKyjwN9Pxm66GX%2FocMo%2FSNToBSMoiiMdSo5Q3Dr4LR%2FzVtTPrZxCZYGpmT6yx7Tm%2F4BSPkABMY42pEvJMHE5QGpIKW0krcUBPBgg2QsqRHD99mhKvr9STEu7UJuVSWzJDUEtaic7qbK5MKD0ExEYFTuyak7nwHxqn9uSe9U4T%2BOeamHp6ED2NhfTLfiL%2Bddhszlj8U0B3JfRJEGxzmAjKiWZmVI2V0BkvGvVIYSEan66gdVgJ8npXKqZ3EdlaJ5yB9VUdy42FHTZ5QEwDU10y4cZpMP0r8pjpZKNS7%2FBkzLTC%2FT8OBKn0qcTPgiiKJ%2BWePg2ysUFD9hVP2Ge99z%2F5LaLt3W5VO7bg2VnUhqEWf6i1f31PeuSyRBf34SwPk3vcPkbAnp%2FIA%2FRh2P7Z9Whv1AwHLsm%2FHUfFNSPa8HTDJ5dbBBjqkAWapb5uC3LOWewyceN4hC1TBenm1raUNwbBXpjMe9KRIepjtDH%2F0tfCKvUJ0M1mzWNDJJ3KM%2B7RjQlGvJIUDpTEOxDqwhvESfZCTaatd2zwgQb0bqAbslHVic3eBoZrzOSiMGkVo%2FRMhY8KBu3dvj17VLga1R4IxgWzesqG8bU6UtCCexhJ0K4ku1FBT2jMW3NFWjsgemptKiwj2NKz87Km%2BgdXG&X-Amz-Signature=89997aaa1693bc1e6a6775f610b4a3bfa3f00f1a82eb8f90c9a988c2ebba0605&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

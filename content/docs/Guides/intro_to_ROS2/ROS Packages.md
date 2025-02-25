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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCB36TVD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCizL3iBinJz3DdfMx7n8QMIAjSL%2Fl%2BPXiLey2J1C3uhgIhAPzY6%2B0R7xXKZUBxn2%2FOweIqR4WJb7PRGK94zFOysFzdKv8DCEEQABoMNjM3NDIzMTgzODA1Igw85UVJ75BL4BcK1rkq3ANC56gySUADhapgZCDkqomJc566nqRxHFKp8S3MfAr4r4c%2BvlvglRQ1COXMtTFoEI%2F09zrqcdk8L%2FK%2BppM9iayiMVcy9wBq0Vk5cbyr%2FWElnV6RexbBcFUs8l4AvyL5GZnv8jgr%2Bo5bpnkvoOxN6aCfqiyrW0NYFN610n72HtyATF%2FBbLZc73bY2W1%2BMY9Mws0SenCuUxngRrtYTYsoSDU9VLPB0VpL3m99Fzk7Qu1cmrUEhBY6%2BwVDlyxqbdXNVx3WCUijjdgUGZ0uTdem4Yj3WZXf2Wa7xMuheielgx3H7JLBpd92X%2FM8DA4xdyEAvx5WckzU1IO%2B0RuibTkvl4uE3RdYT0NpNOwVHR%2Fgkp4Bo4x1fxcxgwEFbxI9RCKJhJP5Ez9pgC%2BY08aNkY8983Y5PzqvncxV1glIihf7QPsBQHGj8cNhvFavvXg1zJ9%2Fb7NpwqNeTshmakTa1qkf38W6jM9nTzyhyDSmt9QzMpyum9%2Fgj3EtqortejJkof1A%2FRtXr5vcwjgjwNkiOGQgTwPIYVlm%2FWLTqHRUsdFl53inojKScSA8KKSJScQhoDgNSrDeXwFnM4KK4jSKZWYZ8aANZ2bOX3CGa4dEM%2Fw%2B3KmfTPIWr9xITH2d5kksrzCG6PW9BjqkAWZJnraQ3zn1nNWHRFL2Yqr263k4tPiMyHEvv9DnqhkNWYeQ88hU1sIt859sV1caH%2BOUmYQoy6FtEPjT9IdZGSf%2F48UCoxcVj7Es6jGiSFjikx4FeKrwH5pT3Tgnlw1hYEGUIaNOe99OOeq%2BXtvFsVEzbnAhrYdxkMqYBQvQdq2B54Ea3MiS2sAWBOJCde1ZJXMrpXCVfGEXHfktlPfxR6YlkodA&X-Amz-Signature=33003e461652a426f1b63ca5559baf1ef3b1a48acbfe818e7515d4d1aca4a642&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCB36TVD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCizL3iBinJz3DdfMx7n8QMIAjSL%2Fl%2BPXiLey2J1C3uhgIhAPzY6%2B0R7xXKZUBxn2%2FOweIqR4WJb7PRGK94zFOysFzdKv8DCEEQABoMNjM3NDIzMTgzODA1Igw85UVJ75BL4BcK1rkq3ANC56gySUADhapgZCDkqomJc566nqRxHFKp8S3MfAr4r4c%2BvlvglRQ1COXMtTFoEI%2F09zrqcdk8L%2FK%2BppM9iayiMVcy9wBq0Vk5cbyr%2FWElnV6RexbBcFUs8l4AvyL5GZnv8jgr%2Bo5bpnkvoOxN6aCfqiyrW0NYFN610n72HtyATF%2FBbLZc73bY2W1%2BMY9Mws0SenCuUxngRrtYTYsoSDU9VLPB0VpL3m99Fzk7Qu1cmrUEhBY6%2BwVDlyxqbdXNVx3WCUijjdgUGZ0uTdem4Yj3WZXf2Wa7xMuheielgx3H7JLBpd92X%2FM8DA4xdyEAvx5WckzU1IO%2B0RuibTkvl4uE3RdYT0NpNOwVHR%2Fgkp4Bo4x1fxcxgwEFbxI9RCKJhJP5Ez9pgC%2BY08aNkY8983Y5PzqvncxV1glIihf7QPsBQHGj8cNhvFavvXg1zJ9%2Fb7NpwqNeTshmakTa1qkf38W6jM9nTzyhyDSmt9QzMpyum9%2Fgj3EtqortejJkof1A%2FRtXr5vcwjgjwNkiOGQgTwPIYVlm%2FWLTqHRUsdFl53inojKScSA8KKSJScQhoDgNSrDeXwFnM4KK4jSKZWYZ8aANZ2bOX3CGa4dEM%2Fw%2B3KmfTPIWr9xITH2d5kksrzCG6PW9BjqkAWZJnraQ3zn1nNWHRFL2Yqr263k4tPiMyHEvv9DnqhkNWYeQ88hU1sIt859sV1caH%2BOUmYQoy6FtEPjT9IdZGSf%2F48UCoxcVj7Es6jGiSFjikx4FeKrwH5pT3Tgnlw1hYEGUIaNOe99OOeq%2BXtvFsVEzbnAhrYdxkMqYBQvQdq2B54Ea3MiS2sAWBOJCde1ZJXMrpXCVfGEXHfktlPfxR6YlkodA&X-Amz-Signature=8ddc381ae041d16610c874edab6638c0a70294d239e3e207fc7d46378243aa0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCB36TVD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCizL3iBinJz3DdfMx7n8QMIAjSL%2Fl%2BPXiLey2J1C3uhgIhAPzY6%2B0R7xXKZUBxn2%2FOweIqR4WJb7PRGK94zFOysFzdKv8DCEEQABoMNjM3NDIzMTgzODA1Igw85UVJ75BL4BcK1rkq3ANC56gySUADhapgZCDkqomJc566nqRxHFKp8S3MfAr4r4c%2BvlvglRQ1COXMtTFoEI%2F09zrqcdk8L%2FK%2BppM9iayiMVcy9wBq0Vk5cbyr%2FWElnV6RexbBcFUs8l4AvyL5GZnv8jgr%2Bo5bpnkvoOxN6aCfqiyrW0NYFN610n72HtyATF%2FBbLZc73bY2W1%2BMY9Mws0SenCuUxngRrtYTYsoSDU9VLPB0VpL3m99Fzk7Qu1cmrUEhBY6%2BwVDlyxqbdXNVx3WCUijjdgUGZ0uTdem4Yj3WZXf2Wa7xMuheielgx3H7JLBpd92X%2FM8DA4xdyEAvx5WckzU1IO%2B0RuibTkvl4uE3RdYT0NpNOwVHR%2Fgkp4Bo4x1fxcxgwEFbxI9RCKJhJP5Ez9pgC%2BY08aNkY8983Y5PzqvncxV1glIihf7QPsBQHGj8cNhvFavvXg1zJ9%2Fb7NpwqNeTshmakTa1qkf38W6jM9nTzyhyDSmt9QzMpyum9%2Fgj3EtqortejJkof1A%2FRtXr5vcwjgjwNkiOGQgTwPIYVlm%2FWLTqHRUsdFl53inojKScSA8KKSJScQhoDgNSrDeXwFnM4KK4jSKZWYZ8aANZ2bOX3CGa4dEM%2Fw%2B3KmfTPIWr9xITH2d5kksrzCG6PW9BjqkAWZJnraQ3zn1nNWHRFL2Yqr263k4tPiMyHEvv9DnqhkNWYeQ88hU1sIt859sV1caH%2BOUmYQoy6FtEPjT9IdZGSf%2F48UCoxcVj7Es6jGiSFjikx4FeKrwH5pT3Tgnlw1hYEGUIaNOe99OOeq%2BXtvFsVEzbnAhrYdxkMqYBQvQdq2B54Ea3MiS2sAWBOJCde1ZJXMrpXCVfGEXHfktlPfxR6YlkodA&X-Amz-Signature=82ae0436fc9ee6c38d987f220395a7156200438441a5cebb0f713e218d2bfb12&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCB36TVD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCizL3iBinJz3DdfMx7n8QMIAjSL%2Fl%2BPXiLey2J1C3uhgIhAPzY6%2B0R7xXKZUBxn2%2FOweIqR4WJb7PRGK94zFOysFzdKv8DCEEQABoMNjM3NDIzMTgzODA1Igw85UVJ75BL4BcK1rkq3ANC56gySUADhapgZCDkqomJc566nqRxHFKp8S3MfAr4r4c%2BvlvglRQ1COXMtTFoEI%2F09zrqcdk8L%2FK%2BppM9iayiMVcy9wBq0Vk5cbyr%2FWElnV6RexbBcFUs8l4AvyL5GZnv8jgr%2Bo5bpnkvoOxN6aCfqiyrW0NYFN610n72HtyATF%2FBbLZc73bY2W1%2BMY9Mws0SenCuUxngRrtYTYsoSDU9VLPB0VpL3m99Fzk7Qu1cmrUEhBY6%2BwVDlyxqbdXNVx3WCUijjdgUGZ0uTdem4Yj3WZXf2Wa7xMuheielgx3H7JLBpd92X%2FM8DA4xdyEAvx5WckzU1IO%2B0RuibTkvl4uE3RdYT0NpNOwVHR%2Fgkp4Bo4x1fxcxgwEFbxI9RCKJhJP5Ez9pgC%2BY08aNkY8983Y5PzqvncxV1glIihf7QPsBQHGj8cNhvFavvXg1zJ9%2Fb7NpwqNeTshmakTa1qkf38W6jM9nTzyhyDSmt9QzMpyum9%2Fgj3EtqortejJkof1A%2FRtXr5vcwjgjwNkiOGQgTwPIYVlm%2FWLTqHRUsdFl53inojKScSA8KKSJScQhoDgNSrDeXwFnM4KK4jSKZWYZ8aANZ2bOX3CGa4dEM%2Fw%2B3KmfTPIWr9xITH2d5kksrzCG6PW9BjqkAWZJnraQ3zn1nNWHRFL2Yqr263k4tPiMyHEvv9DnqhkNWYeQ88hU1sIt859sV1caH%2BOUmYQoy6FtEPjT9IdZGSf%2F48UCoxcVj7Es6jGiSFjikx4FeKrwH5pT3Tgnlw1hYEGUIaNOe99OOeq%2BXtvFsVEzbnAhrYdxkMqYBQvQdq2B54Ea3MiS2sAWBOJCde1ZJXMrpXCVfGEXHfktlPfxR6YlkodA&X-Amz-Signature=02675ab507c99cd84684f144173aff63b7d95698923a3aaae96d6ce8f8978a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCB36TVD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCizL3iBinJz3DdfMx7n8QMIAjSL%2Fl%2BPXiLey2J1C3uhgIhAPzY6%2B0R7xXKZUBxn2%2FOweIqR4WJb7PRGK94zFOysFzdKv8DCEEQABoMNjM3NDIzMTgzODA1Igw85UVJ75BL4BcK1rkq3ANC56gySUADhapgZCDkqomJc566nqRxHFKp8S3MfAr4r4c%2BvlvglRQ1COXMtTFoEI%2F09zrqcdk8L%2FK%2BppM9iayiMVcy9wBq0Vk5cbyr%2FWElnV6RexbBcFUs8l4AvyL5GZnv8jgr%2Bo5bpnkvoOxN6aCfqiyrW0NYFN610n72HtyATF%2FBbLZc73bY2W1%2BMY9Mws0SenCuUxngRrtYTYsoSDU9VLPB0VpL3m99Fzk7Qu1cmrUEhBY6%2BwVDlyxqbdXNVx3WCUijjdgUGZ0uTdem4Yj3WZXf2Wa7xMuheielgx3H7JLBpd92X%2FM8DA4xdyEAvx5WckzU1IO%2B0RuibTkvl4uE3RdYT0NpNOwVHR%2Fgkp4Bo4x1fxcxgwEFbxI9RCKJhJP5Ez9pgC%2BY08aNkY8983Y5PzqvncxV1glIihf7QPsBQHGj8cNhvFavvXg1zJ9%2Fb7NpwqNeTshmakTa1qkf38W6jM9nTzyhyDSmt9QzMpyum9%2Fgj3EtqortejJkof1A%2FRtXr5vcwjgjwNkiOGQgTwPIYVlm%2FWLTqHRUsdFl53inojKScSA8KKSJScQhoDgNSrDeXwFnM4KK4jSKZWYZ8aANZ2bOX3CGa4dEM%2Fw%2B3KmfTPIWr9xITH2d5kksrzCG6PW9BjqkAWZJnraQ3zn1nNWHRFL2Yqr263k4tPiMyHEvv9DnqhkNWYeQ88hU1sIt859sV1caH%2BOUmYQoy6FtEPjT9IdZGSf%2F48UCoxcVj7Es6jGiSFjikx4FeKrwH5pT3Tgnlw1hYEGUIaNOe99OOeq%2BXtvFsVEzbnAhrYdxkMqYBQvQdq2B54Ea3MiS2sAWBOJCde1ZJXMrpXCVfGEXHfktlPfxR6YlkodA&X-Amz-Signature=8560f532d67eeaf42ea56640498896d1d16376c6e615dba9a468742058d820c7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCB36TVD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCizL3iBinJz3DdfMx7n8QMIAjSL%2Fl%2BPXiLey2J1C3uhgIhAPzY6%2B0R7xXKZUBxn2%2FOweIqR4WJb7PRGK94zFOysFzdKv8DCEEQABoMNjM3NDIzMTgzODA1Igw85UVJ75BL4BcK1rkq3ANC56gySUADhapgZCDkqomJc566nqRxHFKp8S3MfAr4r4c%2BvlvglRQ1COXMtTFoEI%2F09zrqcdk8L%2FK%2BppM9iayiMVcy9wBq0Vk5cbyr%2FWElnV6RexbBcFUs8l4AvyL5GZnv8jgr%2Bo5bpnkvoOxN6aCfqiyrW0NYFN610n72HtyATF%2FBbLZc73bY2W1%2BMY9Mws0SenCuUxngRrtYTYsoSDU9VLPB0VpL3m99Fzk7Qu1cmrUEhBY6%2BwVDlyxqbdXNVx3WCUijjdgUGZ0uTdem4Yj3WZXf2Wa7xMuheielgx3H7JLBpd92X%2FM8DA4xdyEAvx5WckzU1IO%2B0RuibTkvl4uE3RdYT0NpNOwVHR%2Fgkp4Bo4x1fxcxgwEFbxI9RCKJhJP5Ez9pgC%2BY08aNkY8983Y5PzqvncxV1glIihf7QPsBQHGj8cNhvFavvXg1zJ9%2Fb7NpwqNeTshmakTa1qkf38W6jM9nTzyhyDSmt9QzMpyum9%2Fgj3EtqortejJkof1A%2FRtXr5vcwjgjwNkiOGQgTwPIYVlm%2FWLTqHRUsdFl53inojKScSA8KKSJScQhoDgNSrDeXwFnM4KK4jSKZWYZ8aANZ2bOX3CGa4dEM%2Fw%2B3KmfTPIWr9xITH2d5kksrzCG6PW9BjqkAWZJnraQ3zn1nNWHRFL2Yqr263k4tPiMyHEvv9DnqhkNWYeQ88hU1sIt859sV1caH%2BOUmYQoy6FtEPjT9IdZGSf%2F48UCoxcVj7Es6jGiSFjikx4FeKrwH5pT3Tgnlw1hYEGUIaNOe99OOeq%2BXtvFsVEzbnAhrYdxkMqYBQvQdq2B54Ea3MiS2sAWBOJCde1ZJXMrpXCVfGEXHfktlPfxR6YlkodA&X-Amz-Signature=ae9993c0e2936ebd29d5f290de3ecbe2bdfac1528e6766a8a5f3c9e3694dd989&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCB36TVD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCizL3iBinJz3DdfMx7n8QMIAjSL%2Fl%2BPXiLey2J1C3uhgIhAPzY6%2B0R7xXKZUBxn2%2FOweIqR4WJb7PRGK94zFOysFzdKv8DCEEQABoMNjM3NDIzMTgzODA1Igw85UVJ75BL4BcK1rkq3ANC56gySUADhapgZCDkqomJc566nqRxHFKp8S3MfAr4r4c%2BvlvglRQ1COXMtTFoEI%2F09zrqcdk8L%2FK%2BppM9iayiMVcy9wBq0Vk5cbyr%2FWElnV6RexbBcFUs8l4AvyL5GZnv8jgr%2Bo5bpnkvoOxN6aCfqiyrW0NYFN610n72HtyATF%2FBbLZc73bY2W1%2BMY9Mws0SenCuUxngRrtYTYsoSDU9VLPB0VpL3m99Fzk7Qu1cmrUEhBY6%2BwVDlyxqbdXNVx3WCUijjdgUGZ0uTdem4Yj3WZXf2Wa7xMuheielgx3H7JLBpd92X%2FM8DA4xdyEAvx5WckzU1IO%2B0RuibTkvl4uE3RdYT0NpNOwVHR%2Fgkp4Bo4x1fxcxgwEFbxI9RCKJhJP5Ez9pgC%2BY08aNkY8983Y5PzqvncxV1glIihf7QPsBQHGj8cNhvFavvXg1zJ9%2Fb7NpwqNeTshmakTa1qkf38W6jM9nTzyhyDSmt9QzMpyum9%2Fgj3EtqortejJkof1A%2FRtXr5vcwjgjwNkiOGQgTwPIYVlm%2FWLTqHRUsdFl53inojKScSA8KKSJScQhoDgNSrDeXwFnM4KK4jSKZWYZ8aANZ2bOX3CGa4dEM%2Fw%2B3KmfTPIWr9xITH2d5kksrzCG6PW9BjqkAWZJnraQ3zn1nNWHRFL2Yqr263k4tPiMyHEvv9DnqhkNWYeQ88hU1sIt859sV1caH%2BOUmYQoy6FtEPjT9IdZGSf%2F48UCoxcVj7Es6jGiSFjikx4FeKrwH5pT3Tgnlw1hYEGUIaNOe99OOeq%2BXtvFsVEzbnAhrYdxkMqYBQvQdq2B54Ea3MiS2sAWBOJCde1ZJXMrpXCVfGEXHfktlPfxR6YlkodA&X-Amz-Signature=b6fbcf1da65cc23acd7932d1da4cb7f4a7be085e3110971eafc2a416ee95a31f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

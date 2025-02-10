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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CMVLHBR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BTKfkywx6caWdBnXHObXI1dBCRyyhGiYgTjIs00iqtQIhAIzsgufZTd17jJ1hmGcagP8GMGqejezd9Hm4p%2B2etAqbKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Zp3GKRTenYhvAdIq3AMZiS%2FFn0uOmOkms7XC3uca2Eh90wUYVepl7oY%2FKfbvNriED1U6y5lN9jchzUK880E%2FHE4aXDwtmGIe3ZeLU3n5QZw1T98Uxo%2FjPKAzDZY%2BVZG66LvOVWNIJbN30f35Le91W5StWMOPK80jzTRefh2Bm%2FYFayfCgy7ysHBmHfjr%2F71vPVaRlV6BD7%2F8SH9MebX0b%2BEm18NwN01DCR5dR1wHdGinsdRwtr%2BSEwuwb4ejboq8Ng04AHhEcq2n6PRk5gLOcOOZjwXj6zEBHLNYq71%2FO1npB2%2Ffzhs5rWMRvWxUGa4m3Uo83EQC446l3LsdGBbOUBq9B6iPTsexu%2BmY7QJbzch3uvUpLugDyD9LmJq1rwP8Mbf2p7IOm8mk7MJGkmYJR%2B7%2BcqZG4wFHSRvjoxIM7pIBMIttF%2FJoy9%2BspZ7f1L5nlPfcb3n4BUqBwZhtzzw6xVkVFiGJsVun14d5YZNaugQzK8XAA9UJIMD3ZHNFGEU7YH9PKpqx6nPKvciJCOHXYWMkVJkDyfffrEd3UcVqf0lEKResFPIDlevIpDiqVxS%2FFBXulk1na87StLGmJnfDp5LtDJPQFh6gBjPqjcv5buDnjzCv%2F6DAxkRNBngNbk6Zbsyya5p7YTiftTCQ4aS9BjqkAdfL03HlBr8HO2HvBTOL8JXXKd9i9r4caGWCl9OPkLmBHUsDMDkYSJAYAL0Wwnoe3677iirVRFz1pYBdMdUMDZ3JL2iV77SLg5SjxmZ7OGgVugMfNUITW%2FTbXqsUF9oG8QZnwdIADP%2FeZNbyqJAAOCOQOzc8t8PJqawgCpBE%2FfKkkJIoZ15wBmKSEGoRxfrNnJXPl0BsYOIuR57qX2HebcuGZAfs&X-Amz-Signature=614303db2fa7d53ab65232db52f216bda57b7d53cc99a16500a68e7a8377074e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CMVLHBR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BTKfkywx6caWdBnXHObXI1dBCRyyhGiYgTjIs00iqtQIhAIzsgufZTd17jJ1hmGcagP8GMGqejezd9Hm4p%2B2etAqbKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Zp3GKRTenYhvAdIq3AMZiS%2FFn0uOmOkms7XC3uca2Eh90wUYVepl7oY%2FKfbvNriED1U6y5lN9jchzUK880E%2FHE4aXDwtmGIe3ZeLU3n5QZw1T98Uxo%2FjPKAzDZY%2BVZG66LvOVWNIJbN30f35Le91W5StWMOPK80jzTRefh2Bm%2FYFayfCgy7ysHBmHfjr%2F71vPVaRlV6BD7%2F8SH9MebX0b%2BEm18NwN01DCR5dR1wHdGinsdRwtr%2BSEwuwb4ejboq8Ng04AHhEcq2n6PRk5gLOcOOZjwXj6zEBHLNYq71%2FO1npB2%2Ffzhs5rWMRvWxUGa4m3Uo83EQC446l3LsdGBbOUBq9B6iPTsexu%2BmY7QJbzch3uvUpLugDyD9LmJq1rwP8Mbf2p7IOm8mk7MJGkmYJR%2B7%2BcqZG4wFHSRvjoxIM7pIBMIttF%2FJoy9%2BspZ7f1L5nlPfcb3n4BUqBwZhtzzw6xVkVFiGJsVun14d5YZNaugQzK8XAA9UJIMD3ZHNFGEU7YH9PKpqx6nPKvciJCOHXYWMkVJkDyfffrEd3UcVqf0lEKResFPIDlevIpDiqVxS%2FFBXulk1na87StLGmJnfDp5LtDJPQFh6gBjPqjcv5buDnjzCv%2F6DAxkRNBngNbk6Zbsyya5p7YTiftTCQ4aS9BjqkAdfL03HlBr8HO2HvBTOL8JXXKd9i9r4caGWCl9OPkLmBHUsDMDkYSJAYAL0Wwnoe3677iirVRFz1pYBdMdUMDZ3JL2iV77SLg5SjxmZ7OGgVugMfNUITW%2FTbXqsUF9oG8QZnwdIADP%2FeZNbyqJAAOCOQOzc8t8PJqawgCpBE%2FfKkkJIoZ15wBmKSEGoRxfrNnJXPl0BsYOIuR57qX2HebcuGZAfs&X-Amz-Signature=85816e9718156d379d0ee851f9be0c1f2acd6ab5788f595f47e85104d058ec50&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CMVLHBR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BTKfkywx6caWdBnXHObXI1dBCRyyhGiYgTjIs00iqtQIhAIzsgufZTd17jJ1hmGcagP8GMGqejezd9Hm4p%2B2etAqbKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Zp3GKRTenYhvAdIq3AMZiS%2FFn0uOmOkms7XC3uca2Eh90wUYVepl7oY%2FKfbvNriED1U6y5lN9jchzUK880E%2FHE4aXDwtmGIe3ZeLU3n5QZw1T98Uxo%2FjPKAzDZY%2BVZG66LvOVWNIJbN30f35Le91W5StWMOPK80jzTRefh2Bm%2FYFayfCgy7ysHBmHfjr%2F71vPVaRlV6BD7%2F8SH9MebX0b%2BEm18NwN01DCR5dR1wHdGinsdRwtr%2BSEwuwb4ejboq8Ng04AHhEcq2n6PRk5gLOcOOZjwXj6zEBHLNYq71%2FO1npB2%2Ffzhs5rWMRvWxUGa4m3Uo83EQC446l3LsdGBbOUBq9B6iPTsexu%2BmY7QJbzch3uvUpLugDyD9LmJq1rwP8Mbf2p7IOm8mk7MJGkmYJR%2B7%2BcqZG4wFHSRvjoxIM7pIBMIttF%2FJoy9%2BspZ7f1L5nlPfcb3n4BUqBwZhtzzw6xVkVFiGJsVun14d5YZNaugQzK8XAA9UJIMD3ZHNFGEU7YH9PKpqx6nPKvciJCOHXYWMkVJkDyfffrEd3UcVqf0lEKResFPIDlevIpDiqVxS%2FFBXulk1na87StLGmJnfDp5LtDJPQFh6gBjPqjcv5buDnjzCv%2F6DAxkRNBngNbk6Zbsyya5p7YTiftTCQ4aS9BjqkAdfL03HlBr8HO2HvBTOL8JXXKd9i9r4caGWCl9OPkLmBHUsDMDkYSJAYAL0Wwnoe3677iirVRFz1pYBdMdUMDZ3JL2iV77SLg5SjxmZ7OGgVugMfNUITW%2FTbXqsUF9oG8QZnwdIADP%2FeZNbyqJAAOCOQOzc8t8PJqawgCpBE%2FfKkkJIoZ15wBmKSEGoRxfrNnJXPl0BsYOIuR57qX2HebcuGZAfs&X-Amz-Signature=b23dfba8272bd62014a0c310e9fb1bc8ed6db92d84eeb82cc1ccdb37d2af8a65&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CMVLHBR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BTKfkywx6caWdBnXHObXI1dBCRyyhGiYgTjIs00iqtQIhAIzsgufZTd17jJ1hmGcagP8GMGqejezd9Hm4p%2B2etAqbKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Zp3GKRTenYhvAdIq3AMZiS%2FFn0uOmOkms7XC3uca2Eh90wUYVepl7oY%2FKfbvNriED1U6y5lN9jchzUK880E%2FHE4aXDwtmGIe3ZeLU3n5QZw1T98Uxo%2FjPKAzDZY%2BVZG66LvOVWNIJbN30f35Le91W5StWMOPK80jzTRefh2Bm%2FYFayfCgy7ysHBmHfjr%2F71vPVaRlV6BD7%2F8SH9MebX0b%2BEm18NwN01DCR5dR1wHdGinsdRwtr%2BSEwuwb4ejboq8Ng04AHhEcq2n6PRk5gLOcOOZjwXj6zEBHLNYq71%2FO1npB2%2Ffzhs5rWMRvWxUGa4m3Uo83EQC446l3LsdGBbOUBq9B6iPTsexu%2BmY7QJbzch3uvUpLugDyD9LmJq1rwP8Mbf2p7IOm8mk7MJGkmYJR%2B7%2BcqZG4wFHSRvjoxIM7pIBMIttF%2FJoy9%2BspZ7f1L5nlPfcb3n4BUqBwZhtzzw6xVkVFiGJsVun14d5YZNaugQzK8XAA9UJIMD3ZHNFGEU7YH9PKpqx6nPKvciJCOHXYWMkVJkDyfffrEd3UcVqf0lEKResFPIDlevIpDiqVxS%2FFBXulk1na87StLGmJnfDp5LtDJPQFh6gBjPqjcv5buDnjzCv%2F6DAxkRNBngNbk6Zbsyya5p7YTiftTCQ4aS9BjqkAdfL03HlBr8HO2HvBTOL8JXXKd9i9r4caGWCl9OPkLmBHUsDMDkYSJAYAL0Wwnoe3677iirVRFz1pYBdMdUMDZ3JL2iV77SLg5SjxmZ7OGgVugMfNUITW%2FTbXqsUF9oG8QZnwdIADP%2FeZNbyqJAAOCOQOzc8t8PJqawgCpBE%2FfKkkJIoZ15wBmKSEGoRxfrNnJXPl0BsYOIuR57qX2HebcuGZAfs&X-Amz-Signature=79237f41a5e0f254ad0754210a277ca68cb3fedc7827eaaf04345a1799905bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CMVLHBR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BTKfkywx6caWdBnXHObXI1dBCRyyhGiYgTjIs00iqtQIhAIzsgufZTd17jJ1hmGcagP8GMGqejezd9Hm4p%2B2etAqbKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Zp3GKRTenYhvAdIq3AMZiS%2FFn0uOmOkms7XC3uca2Eh90wUYVepl7oY%2FKfbvNriED1U6y5lN9jchzUK880E%2FHE4aXDwtmGIe3ZeLU3n5QZw1T98Uxo%2FjPKAzDZY%2BVZG66LvOVWNIJbN30f35Le91W5StWMOPK80jzTRefh2Bm%2FYFayfCgy7ysHBmHfjr%2F71vPVaRlV6BD7%2F8SH9MebX0b%2BEm18NwN01DCR5dR1wHdGinsdRwtr%2BSEwuwb4ejboq8Ng04AHhEcq2n6PRk5gLOcOOZjwXj6zEBHLNYq71%2FO1npB2%2Ffzhs5rWMRvWxUGa4m3Uo83EQC446l3LsdGBbOUBq9B6iPTsexu%2BmY7QJbzch3uvUpLugDyD9LmJq1rwP8Mbf2p7IOm8mk7MJGkmYJR%2B7%2BcqZG4wFHSRvjoxIM7pIBMIttF%2FJoy9%2BspZ7f1L5nlPfcb3n4BUqBwZhtzzw6xVkVFiGJsVun14d5YZNaugQzK8XAA9UJIMD3ZHNFGEU7YH9PKpqx6nPKvciJCOHXYWMkVJkDyfffrEd3UcVqf0lEKResFPIDlevIpDiqVxS%2FFBXulk1na87StLGmJnfDp5LtDJPQFh6gBjPqjcv5buDnjzCv%2F6DAxkRNBngNbk6Zbsyya5p7YTiftTCQ4aS9BjqkAdfL03HlBr8HO2HvBTOL8JXXKd9i9r4caGWCl9OPkLmBHUsDMDkYSJAYAL0Wwnoe3677iirVRFz1pYBdMdUMDZ3JL2iV77SLg5SjxmZ7OGgVugMfNUITW%2FTbXqsUF9oG8QZnwdIADP%2FeZNbyqJAAOCOQOzc8t8PJqawgCpBE%2FfKkkJIoZ15wBmKSEGoRxfrNnJXPl0BsYOIuR57qX2HebcuGZAfs&X-Amz-Signature=98fde734bed6b72ff817e4f6fd36a63e0532914da94209e9c16c56667f359c62&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CMVLHBR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BTKfkywx6caWdBnXHObXI1dBCRyyhGiYgTjIs00iqtQIhAIzsgufZTd17jJ1hmGcagP8GMGqejezd9Hm4p%2B2etAqbKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Zp3GKRTenYhvAdIq3AMZiS%2FFn0uOmOkms7XC3uca2Eh90wUYVepl7oY%2FKfbvNriED1U6y5lN9jchzUK880E%2FHE4aXDwtmGIe3ZeLU3n5QZw1T98Uxo%2FjPKAzDZY%2BVZG66LvOVWNIJbN30f35Le91W5StWMOPK80jzTRefh2Bm%2FYFayfCgy7ysHBmHfjr%2F71vPVaRlV6BD7%2F8SH9MebX0b%2BEm18NwN01DCR5dR1wHdGinsdRwtr%2BSEwuwb4ejboq8Ng04AHhEcq2n6PRk5gLOcOOZjwXj6zEBHLNYq71%2FO1npB2%2Ffzhs5rWMRvWxUGa4m3Uo83EQC446l3LsdGBbOUBq9B6iPTsexu%2BmY7QJbzch3uvUpLugDyD9LmJq1rwP8Mbf2p7IOm8mk7MJGkmYJR%2B7%2BcqZG4wFHSRvjoxIM7pIBMIttF%2FJoy9%2BspZ7f1L5nlPfcb3n4BUqBwZhtzzw6xVkVFiGJsVun14d5YZNaugQzK8XAA9UJIMD3ZHNFGEU7YH9PKpqx6nPKvciJCOHXYWMkVJkDyfffrEd3UcVqf0lEKResFPIDlevIpDiqVxS%2FFBXulk1na87StLGmJnfDp5LtDJPQFh6gBjPqjcv5buDnjzCv%2F6DAxkRNBngNbk6Zbsyya5p7YTiftTCQ4aS9BjqkAdfL03HlBr8HO2HvBTOL8JXXKd9i9r4caGWCl9OPkLmBHUsDMDkYSJAYAL0Wwnoe3677iirVRFz1pYBdMdUMDZ3JL2iV77SLg5SjxmZ7OGgVugMfNUITW%2FTbXqsUF9oG8QZnwdIADP%2FeZNbyqJAAOCOQOzc8t8PJqawgCpBE%2FfKkkJIoZ15wBmKSEGoRxfrNnJXPl0BsYOIuR57qX2HebcuGZAfs&X-Amz-Signature=3621069a13c006abc5cc53a44b9bb0df87de535bca123071d5abdeff9d58788d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CMVLHBR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BTKfkywx6caWdBnXHObXI1dBCRyyhGiYgTjIs00iqtQIhAIzsgufZTd17jJ1hmGcagP8GMGqejezd9Hm4p%2B2etAqbKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Zp3GKRTenYhvAdIq3AMZiS%2FFn0uOmOkms7XC3uca2Eh90wUYVepl7oY%2FKfbvNriED1U6y5lN9jchzUK880E%2FHE4aXDwtmGIe3ZeLU3n5QZw1T98Uxo%2FjPKAzDZY%2BVZG66LvOVWNIJbN30f35Le91W5StWMOPK80jzTRefh2Bm%2FYFayfCgy7ysHBmHfjr%2F71vPVaRlV6BD7%2F8SH9MebX0b%2BEm18NwN01DCR5dR1wHdGinsdRwtr%2BSEwuwb4ejboq8Ng04AHhEcq2n6PRk5gLOcOOZjwXj6zEBHLNYq71%2FO1npB2%2Ffzhs5rWMRvWxUGa4m3Uo83EQC446l3LsdGBbOUBq9B6iPTsexu%2BmY7QJbzch3uvUpLugDyD9LmJq1rwP8Mbf2p7IOm8mk7MJGkmYJR%2B7%2BcqZG4wFHSRvjoxIM7pIBMIttF%2FJoy9%2BspZ7f1L5nlPfcb3n4BUqBwZhtzzw6xVkVFiGJsVun14d5YZNaugQzK8XAA9UJIMD3ZHNFGEU7YH9PKpqx6nPKvciJCOHXYWMkVJkDyfffrEd3UcVqf0lEKResFPIDlevIpDiqVxS%2FFBXulk1na87StLGmJnfDp5LtDJPQFh6gBjPqjcv5buDnjzCv%2F6DAxkRNBngNbk6Zbsyya5p7YTiftTCQ4aS9BjqkAdfL03HlBr8HO2HvBTOL8JXXKd9i9r4caGWCl9OPkLmBHUsDMDkYSJAYAL0Wwnoe3677iirVRFz1pYBdMdUMDZ3JL2iV77SLg5SjxmZ7OGgVugMfNUITW%2FTbXqsUF9oG8QZnwdIADP%2FeZNbyqJAAOCOQOzc8t8PJqawgCpBE%2FfKkkJIoZ15wBmKSEGoRxfrNnJXPl0BsYOIuR57qX2HebcuGZAfs&X-Amz-Signature=58e48014e9a8dc3740ac39168c00f23b6d529b48c3a267b489e07f21dcc0ce90&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

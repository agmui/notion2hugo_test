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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUFTZU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkXCkz0OIzzXvkMUZ%2BKrMmpjaQhwy5%2F7qTbNhL7bl7DAiBJ5l%2BqtNhb098%2FV1f1ti8KI%2BswGV6LPddp8nQ%2Fj3oe8CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XsrbB9cIAe%2FLEn9KtwDqt6tmI76fscm%2FRgHh7A%2B%2F6OLG%2B33tuG4lIXWj8shpSlHKN0UQkI4WOLbrw4eWXaZ8SXtqo3cBWspIhlBB3mVrOtZ1DoGi7Za2XDCmRE8zcXswVvbJA0Md4cuW25TprSNV8w40Zorq588Ap%2FuFNF0svnCmfSNg7ha9EYaKhw%2B9VMXAY5FRPT4H%2B%2B9c5pK5Ux4Sn%2B7xc50t2c6NVQlcQOyVlMcxHb9dgE0Fg0JguB3pE7D7VuJu8RSJ9nbi9YhawXlOlwgezn6M%2BS1raHwNH6SD0aYQ98FeH5S%2FEG0TIosYz2pRAXuYbTVmppR8WCCx89NEMBusI%2FqsHtneZiQ9cnfNIToCJfpHXMwha0riBDGyi3hitYTd%2Brn68tvIqexw2HnqSG0JAFZ4tVVN50SercmlgasZhACX4wMoDS0hTwm8aiqF5e7jL64OtZkO29gvpjuzu7AOeIXtitC4QZdeUkhCc1evQHmSTdNIUWMZZt4r5e%2FNL1J%2FOM6fqGQc7tSByXSksX9RtMbLT2ziCHt7co8GPycOsJR7e5jBW5PSJtEIDstfGOK6sOCUE93zIM2SBS8kFLBbZ0HtkNGPLcZuqNno5z4gYbfXdWX7Cpyjzi8O4S26CGrm7xJ6iyNrGQwrKnSwAY6pgGlyMU2Gfy4ixYRA%2B0zic3YA9dd7tgAAImjyiGnQqpH9tEZX9fTrVXEouPs7foiaiUNym6GWYuquyTlJK34K8CPvvbzxOCFpSxyRyFKe7xxTm1BtZfp7av9Z9Fb8FH06URwWflIIXAcdkVDGkVCH4vZxzbG2zD7OrF3nZxBOi24QkGNLGMUCUFh86GU1TbQlhPYiVev73TITJAGfUkvYvDLLPKy80K%2B&X-Amz-Signature=4c70c8a1db619ec3e0e089823f0edda0f9beca2ec3cbd53c0350280ac462a889&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUFTZU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkXCkz0OIzzXvkMUZ%2BKrMmpjaQhwy5%2F7qTbNhL7bl7DAiBJ5l%2BqtNhb098%2FV1f1ti8KI%2BswGV6LPddp8nQ%2Fj3oe8CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XsrbB9cIAe%2FLEn9KtwDqt6tmI76fscm%2FRgHh7A%2B%2F6OLG%2B33tuG4lIXWj8shpSlHKN0UQkI4WOLbrw4eWXaZ8SXtqo3cBWspIhlBB3mVrOtZ1DoGi7Za2XDCmRE8zcXswVvbJA0Md4cuW25TprSNV8w40Zorq588Ap%2FuFNF0svnCmfSNg7ha9EYaKhw%2B9VMXAY5FRPT4H%2B%2B9c5pK5Ux4Sn%2B7xc50t2c6NVQlcQOyVlMcxHb9dgE0Fg0JguB3pE7D7VuJu8RSJ9nbi9YhawXlOlwgezn6M%2BS1raHwNH6SD0aYQ98FeH5S%2FEG0TIosYz2pRAXuYbTVmppR8WCCx89NEMBusI%2FqsHtneZiQ9cnfNIToCJfpHXMwha0riBDGyi3hitYTd%2Brn68tvIqexw2HnqSG0JAFZ4tVVN50SercmlgasZhACX4wMoDS0hTwm8aiqF5e7jL64OtZkO29gvpjuzu7AOeIXtitC4QZdeUkhCc1evQHmSTdNIUWMZZt4r5e%2FNL1J%2FOM6fqGQc7tSByXSksX9RtMbLT2ziCHt7co8GPycOsJR7e5jBW5PSJtEIDstfGOK6sOCUE93zIM2SBS8kFLBbZ0HtkNGPLcZuqNno5z4gYbfXdWX7Cpyjzi8O4S26CGrm7xJ6iyNrGQwrKnSwAY6pgGlyMU2Gfy4ixYRA%2B0zic3YA9dd7tgAAImjyiGnQqpH9tEZX9fTrVXEouPs7foiaiUNym6GWYuquyTlJK34K8CPvvbzxOCFpSxyRyFKe7xxTm1BtZfp7av9Z9Fb8FH06URwWflIIXAcdkVDGkVCH4vZxzbG2zD7OrF3nZxBOi24QkGNLGMUCUFh86GU1TbQlhPYiVev73TITJAGfUkvYvDLLPKy80K%2B&X-Amz-Signature=a5d7fbe6ef96489b742a39c29661bd7aac3569a4038476f5fac68145c4b03ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUFTZU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkXCkz0OIzzXvkMUZ%2BKrMmpjaQhwy5%2F7qTbNhL7bl7DAiBJ5l%2BqtNhb098%2FV1f1ti8KI%2BswGV6LPddp8nQ%2Fj3oe8CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XsrbB9cIAe%2FLEn9KtwDqt6tmI76fscm%2FRgHh7A%2B%2F6OLG%2B33tuG4lIXWj8shpSlHKN0UQkI4WOLbrw4eWXaZ8SXtqo3cBWspIhlBB3mVrOtZ1DoGi7Za2XDCmRE8zcXswVvbJA0Md4cuW25TprSNV8w40Zorq588Ap%2FuFNF0svnCmfSNg7ha9EYaKhw%2B9VMXAY5FRPT4H%2B%2B9c5pK5Ux4Sn%2B7xc50t2c6NVQlcQOyVlMcxHb9dgE0Fg0JguB3pE7D7VuJu8RSJ9nbi9YhawXlOlwgezn6M%2BS1raHwNH6SD0aYQ98FeH5S%2FEG0TIosYz2pRAXuYbTVmppR8WCCx89NEMBusI%2FqsHtneZiQ9cnfNIToCJfpHXMwha0riBDGyi3hitYTd%2Brn68tvIqexw2HnqSG0JAFZ4tVVN50SercmlgasZhACX4wMoDS0hTwm8aiqF5e7jL64OtZkO29gvpjuzu7AOeIXtitC4QZdeUkhCc1evQHmSTdNIUWMZZt4r5e%2FNL1J%2FOM6fqGQc7tSByXSksX9RtMbLT2ziCHt7co8GPycOsJR7e5jBW5PSJtEIDstfGOK6sOCUE93zIM2SBS8kFLBbZ0HtkNGPLcZuqNno5z4gYbfXdWX7Cpyjzi8O4S26CGrm7xJ6iyNrGQwrKnSwAY6pgGlyMU2Gfy4ixYRA%2B0zic3YA9dd7tgAAImjyiGnQqpH9tEZX9fTrVXEouPs7foiaiUNym6GWYuquyTlJK34K8CPvvbzxOCFpSxyRyFKe7xxTm1BtZfp7av9Z9Fb8FH06URwWflIIXAcdkVDGkVCH4vZxzbG2zD7OrF3nZxBOi24QkGNLGMUCUFh86GU1TbQlhPYiVev73TITJAGfUkvYvDLLPKy80K%2B&X-Amz-Signature=3622c116418f3c069646ba352b89c20053ed0d8fc19e6910b0d5f2d5e9ea6fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUFTZU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkXCkz0OIzzXvkMUZ%2BKrMmpjaQhwy5%2F7qTbNhL7bl7DAiBJ5l%2BqtNhb098%2FV1f1ti8KI%2BswGV6LPddp8nQ%2Fj3oe8CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XsrbB9cIAe%2FLEn9KtwDqt6tmI76fscm%2FRgHh7A%2B%2F6OLG%2B33tuG4lIXWj8shpSlHKN0UQkI4WOLbrw4eWXaZ8SXtqo3cBWspIhlBB3mVrOtZ1DoGi7Za2XDCmRE8zcXswVvbJA0Md4cuW25TprSNV8w40Zorq588Ap%2FuFNF0svnCmfSNg7ha9EYaKhw%2B9VMXAY5FRPT4H%2B%2B9c5pK5Ux4Sn%2B7xc50t2c6NVQlcQOyVlMcxHb9dgE0Fg0JguB3pE7D7VuJu8RSJ9nbi9YhawXlOlwgezn6M%2BS1raHwNH6SD0aYQ98FeH5S%2FEG0TIosYz2pRAXuYbTVmppR8WCCx89NEMBusI%2FqsHtneZiQ9cnfNIToCJfpHXMwha0riBDGyi3hitYTd%2Brn68tvIqexw2HnqSG0JAFZ4tVVN50SercmlgasZhACX4wMoDS0hTwm8aiqF5e7jL64OtZkO29gvpjuzu7AOeIXtitC4QZdeUkhCc1evQHmSTdNIUWMZZt4r5e%2FNL1J%2FOM6fqGQc7tSByXSksX9RtMbLT2ziCHt7co8GPycOsJR7e5jBW5PSJtEIDstfGOK6sOCUE93zIM2SBS8kFLBbZ0HtkNGPLcZuqNno5z4gYbfXdWX7Cpyjzi8O4S26CGrm7xJ6iyNrGQwrKnSwAY6pgGlyMU2Gfy4ixYRA%2B0zic3YA9dd7tgAAImjyiGnQqpH9tEZX9fTrVXEouPs7foiaiUNym6GWYuquyTlJK34K8CPvvbzxOCFpSxyRyFKe7xxTm1BtZfp7av9Z9Fb8FH06URwWflIIXAcdkVDGkVCH4vZxzbG2zD7OrF3nZxBOi24QkGNLGMUCUFh86GU1TbQlhPYiVev73TITJAGfUkvYvDLLPKy80K%2B&X-Amz-Signature=74f5a80e5ea361bd7f6b2b68f152f98264df9589f71b245ddf629a3d80585a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUFTZU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkXCkz0OIzzXvkMUZ%2BKrMmpjaQhwy5%2F7qTbNhL7bl7DAiBJ5l%2BqtNhb098%2FV1f1ti8KI%2BswGV6LPddp8nQ%2Fj3oe8CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XsrbB9cIAe%2FLEn9KtwDqt6tmI76fscm%2FRgHh7A%2B%2F6OLG%2B33tuG4lIXWj8shpSlHKN0UQkI4WOLbrw4eWXaZ8SXtqo3cBWspIhlBB3mVrOtZ1DoGi7Za2XDCmRE8zcXswVvbJA0Md4cuW25TprSNV8w40Zorq588Ap%2FuFNF0svnCmfSNg7ha9EYaKhw%2B9VMXAY5FRPT4H%2B%2B9c5pK5Ux4Sn%2B7xc50t2c6NVQlcQOyVlMcxHb9dgE0Fg0JguB3pE7D7VuJu8RSJ9nbi9YhawXlOlwgezn6M%2BS1raHwNH6SD0aYQ98FeH5S%2FEG0TIosYz2pRAXuYbTVmppR8WCCx89NEMBusI%2FqsHtneZiQ9cnfNIToCJfpHXMwha0riBDGyi3hitYTd%2Brn68tvIqexw2HnqSG0JAFZ4tVVN50SercmlgasZhACX4wMoDS0hTwm8aiqF5e7jL64OtZkO29gvpjuzu7AOeIXtitC4QZdeUkhCc1evQHmSTdNIUWMZZt4r5e%2FNL1J%2FOM6fqGQc7tSByXSksX9RtMbLT2ziCHt7co8GPycOsJR7e5jBW5PSJtEIDstfGOK6sOCUE93zIM2SBS8kFLBbZ0HtkNGPLcZuqNno5z4gYbfXdWX7Cpyjzi8O4S26CGrm7xJ6iyNrGQwrKnSwAY6pgGlyMU2Gfy4ixYRA%2B0zic3YA9dd7tgAAImjyiGnQqpH9tEZX9fTrVXEouPs7foiaiUNym6GWYuquyTlJK34K8CPvvbzxOCFpSxyRyFKe7xxTm1BtZfp7av9Z9Fb8FH06URwWflIIXAcdkVDGkVCH4vZxzbG2zD7OrF3nZxBOi24QkGNLGMUCUFh86GU1TbQlhPYiVev73TITJAGfUkvYvDLLPKy80K%2B&X-Amz-Signature=a342fc2f8dbbac24c55fc4c098ee32c10a93de22633c7fdf4181d94bfaeaae27&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUFTZU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkXCkz0OIzzXvkMUZ%2BKrMmpjaQhwy5%2F7qTbNhL7bl7DAiBJ5l%2BqtNhb098%2FV1f1ti8KI%2BswGV6LPddp8nQ%2Fj3oe8CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XsrbB9cIAe%2FLEn9KtwDqt6tmI76fscm%2FRgHh7A%2B%2F6OLG%2B33tuG4lIXWj8shpSlHKN0UQkI4WOLbrw4eWXaZ8SXtqo3cBWspIhlBB3mVrOtZ1DoGi7Za2XDCmRE8zcXswVvbJA0Md4cuW25TprSNV8w40Zorq588Ap%2FuFNF0svnCmfSNg7ha9EYaKhw%2B9VMXAY5FRPT4H%2B%2B9c5pK5Ux4Sn%2B7xc50t2c6NVQlcQOyVlMcxHb9dgE0Fg0JguB3pE7D7VuJu8RSJ9nbi9YhawXlOlwgezn6M%2BS1raHwNH6SD0aYQ98FeH5S%2FEG0TIosYz2pRAXuYbTVmppR8WCCx89NEMBusI%2FqsHtneZiQ9cnfNIToCJfpHXMwha0riBDGyi3hitYTd%2Brn68tvIqexw2HnqSG0JAFZ4tVVN50SercmlgasZhACX4wMoDS0hTwm8aiqF5e7jL64OtZkO29gvpjuzu7AOeIXtitC4QZdeUkhCc1evQHmSTdNIUWMZZt4r5e%2FNL1J%2FOM6fqGQc7tSByXSksX9RtMbLT2ziCHt7co8GPycOsJR7e5jBW5PSJtEIDstfGOK6sOCUE93zIM2SBS8kFLBbZ0HtkNGPLcZuqNno5z4gYbfXdWX7Cpyjzi8O4S26CGrm7xJ6iyNrGQwrKnSwAY6pgGlyMU2Gfy4ixYRA%2B0zic3YA9dd7tgAAImjyiGnQqpH9tEZX9fTrVXEouPs7foiaiUNym6GWYuquyTlJK34K8CPvvbzxOCFpSxyRyFKe7xxTm1BtZfp7av9Z9Fb8FH06URwWflIIXAcdkVDGkVCH4vZxzbG2zD7OrF3nZxBOi24QkGNLGMUCUFh86GU1TbQlhPYiVev73TITJAGfUkvYvDLLPKy80K%2B&X-Amz-Signature=edfb492cbd4da60180faa7b7a8d47f0c6224b8a12e037f66c92cce70643c995f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUFTZU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkXCkz0OIzzXvkMUZ%2BKrMmpjaQhwy5%2F7qTbNhL7bl7DAiBJ5l%2BqtNhb098%2FV1f1ti8KI%2BswGV6LPddp8nQ%2Fj3oe8CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XsrbB9cIAe%2FLEn9KtwDqt6tmI76fscm%2FRgHh7A%2B%2F6OLG%2B33tuG4lIXWj8shpSlHKN0UQkI4WOLbrw4eWXaZ8SXtqo3cBWspIhlBB3mVrOtZ1DoGi7Za2XDCmRE8zcXswVvbJA0Md4cuW25TprSNV8w40Zorq588Ap%2FuFNF0svnCmfSNg7ha9EYaKhw%2B9VMXAY5FRPT4H%2B%2B9c5pK5Ux4Sn%2B7xc50t2c6NVQlcQOyVlMcxHb9dgE0Fg0JguB3pE7D7VuJu8RSJ9nbi9YhawXlOlwgezn6M%2BS1raHwNH6SD0aYQ98FeH5S%2FEG0TIosYz2pRAXuYbTVmppR8WCCx89NEMBusI%2FqsHtneZiQ9cnfNIToCJfpHXMwha0riBDGyi3hitYTd%2Brn68tvIqexw2HnqSG0JAFZ4tVVN50SercmlgasZhACX4wMoDS0hTwm8aiqF5e7jL64OtZkO29gvpjuzu7AOeIXtitC4QZdeUkhCc1evQHmSTdNIUWMZZt4r5e%2FNL1J%2FOM6fqGQc7tSByXSksX9RtMbLT2ziCHt7co8GPycOsJR7e5jBW5PSJtEIDstfGOK6sOCUE93zIM2SBS8kFLBbZ0HtkNGPLcZuqNno5z4gYbfXdWX7Cpyjzi8O4S26CGrm7xJ6iyNrGQwrKnSwAY6pgGlyMU2Gfy4ixYRA%2B0zic3YA9dd7tgAAImjyiGnQqpH9tEZX9fTrVXEouPs7foiaiUNym6GWYuquyTlJK34K8CPvvbzxOCFpSxyRyFKe7xxTm1BtZfp7av9Z9Fb8FH06URwWflIIXAcdkVDGkVCH4vZxzbG2zD7OrF3nZxBOi24QkGNLGMUCUFh86GU1TbQlhPYiVev73TITJAGfUkvYvDLLPKy80K%2B&X-Amz-Signature=f45c7a2b91c0762522a0b05c0c7b8892454c878f536908d209193607c389998e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

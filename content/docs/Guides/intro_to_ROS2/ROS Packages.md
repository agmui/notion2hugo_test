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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F2U53H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXhCayUCWuAc0w1EX01GCBiaHPe7kNMbOBKKS96iFzHAiA%2Fo1w00aI1BriI58TNfs3uxoKhzISVCP4MXC%2BOrQaZRCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2BzTaK01Hl3hzAtOKtwDZ6sWBe91JH9JzdcNqlEv4WMvaLVa0ssaSp8nU44OQ0e6QH9SEPgZr3Mf1J306pwN1vLZ%2FDrWMHk7F7GeU8YF5y7TvQZTwnnIAZMcXmYWvzA%2B9cg03YcsIJVMVlE2kLe5vlGTuV1Sqw4wXVArBOLYOXBY17w4fE2Gt3j2z5ydoeFG%2FQh%2BouIWYAElhbRuWIycNsAnbkEJeWefm2LAuw7%2Fd16Iun7tBdLPe%2FP9SQMj8M9JK7wwOcFZVFLyi05t7P1utELSaqZfoWVpKiT8YAyeBVW8P%2FnZnr8g%2B6VCxuP%2BC3A8tBy1SCuRgxBNF0Ia0%2BOkko%2BZ9hC5eo%2F1p3G39ilxuWKiy21Q74dro%2BJ6K0NPzTubruwxqrfUbQnn%2Fh0XZklJCBIcTKawR8m8XjijtmEDVNHuEzj%2B7lQAhvdtwhv0jtZXfyTW0GBYx4%2BJimoJnb9oaGkAgIjc2VEZjYDLbP6IM%2BFJNau7SzeQ%2F%2F10pllFqtwgZEitzZmJFFQNGusTqowS1a31AjHvMKkNGSxFvObDk8YlTyesHrd34d%2BOCwWNJPjiykE9owGWf5ynrSYyYjfNcyfNcUNkn%2BKpqBRD80kWQ%2Fprp8uLHINjz0%2B6ijuYdyTF7%2B9iewpgIhrfL0gwq7eHwQY6pgHzd%2FOxtL8KnbtGBA6xAT335CeQPFNkDAFxHQVokoVvvwATbNYzltSa%2FgPCVrurIMU2d5I9J3eiLJZHAGs8PuYIpGxauB%2FQYxOLJ%2BF9SUrdCDlftKiMA9wD8lx2WY7wSWOZdT7THZNXzkTideLbaLVdwKws1othSWrPyksT3bdVjbT24BdEG94U9EEWdbp7z7bzpGTXpcxEDW55e0vRu8ixtJ6G24Tb&X-Amz-Signature=1884963ee8bd38f187f51656a1fee9750cb4820583c6172f72dce023d8796e09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F2U53H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXhCayUCWuAc0w1EX01GCBiaHPe7kNMbOBKKS96iFzHAiA%2Fo1w00aI1BriI58TNfs3uxoKhzISVCP4MXC%2BOrQaZRCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2BzTaK01Hl3hzAtOKtwDZ6sWBe91JH9JzdcNqlEv4WMvaLVa0ssaSp8nU44OQ0e6QH9SEPgZr3Mf1J306pwN1vLZ%2FDrWMHk7F7GeU8YF5y7TvQZTwnnIAZMcXmYWvzA%2B9cg03YcsIJVMVlE2kLe5vlGTuV1Sqw4wXVArBOLYOXBY17w4fE2Gt3j2z5ydoeFG%2FQh%2BouIWYAElhbRuWIycNsAnbkEJeWefm2LAuw7%2Fd16Iun7tBdLPe%2FP9SQMj8M9JK7wwOcFZVFLyi05t7P1utELSaqZfoWVpKiT8YAyeBVW8P%2FnZnr8g%2B6VCxuP%2BC3A8tBy1SCuRgxBNF0Ia0%2BOkko%2BZ9hC5eo%2F1p3G39ilxuWKiy21Q74dro%2BJ6K0NPzTubruwxqrfUbQnn%2Fh0XZklJCBIcTKawR8m8XjijtmEDVNHuEzj%2B7lQAhvdtwhv0jtZXfyTW0GBYx4%2BJimoJnb9oaGkAgIjc2VEZjYDLbP6IM%2BFJNau7SzeQ%2F%2F10pllFqtwgZEitzZmJFFQNGusTqowS1a31AjHvMKkNGSxFvObDk8YlTyesHrd34d%2BOCwWNJPjiykE9owGWf5ynrSYyYjfNcyfNcUNkn%2BKpqBRD80kWQ%2Fprp8uLHINjz0%2B6ijuYdyTF7%2B9iewpgIhrfL0gwq7eHwQY6pgHzd%2FOxtL8KnbtGBA6xAT335CeQPFNkDAFxHQVokoVvvwATbNYzltSa%2FgPCVrurIMU2d5I9J3eiLJZHAGs8PuYIpGxauB%2FQYxOLJ%2BF9SUrdCDlftKiMA9wD8lx2WY7wSWOZdT7THZNXzkTideLbaLVdwKws1othSWrPyksT3bdVjbT24BdEG94U9EEWdbp7z7bzpGTXpcxEDW55e0vRu8ixtJ6G24Tb&X-Amz-Signature=3e4a010b72d038ed12a17ef4ececc5d106579e1e16584e21ea2ce7ad4694e8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F2U53H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXhCayUCWuAc0w1EX01GCBiaHPe7kNMbOBKKS96iFzHAiA%2Fo1w00aI1BriI58TNfs3uxoKhzISVCP4MXC%2BOrQaZRCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2BzTaK01Hl3hzAtOKtwDZ6sWBe91JH9JzdcNqlEv4WMvaLVa0ssaSp8nU44OQ0e6QH9SEPgZr3Mf1J306pwN1vLZ%2FDrWMHk7F7GeU8YF5y7TvQZTwnnIAZMcXmYWvzA%2B9cg03YcsIJVMVlE2kLe5vlGTuV1Sqw4wXVArBOLYOXBY17w4fE2Gt3j2z5ydoeFG%2FQh%2BouIWYAElhbRuWIycNsAnbkEJeWefm2LAuw7%2Fd16Iun7tBdLPe%2FP9SQMj8M9JK7wwOcFZVFLyi05t7P1utELSaqZfoWVpKiT8YAyeBVW8P%2FnZnr8g%2B6VCxuP%2BC3A8tBy1SCuRgxBNF0Ia0%2BOkko%2BZ9hC5eo%2F1p3G39ilxuWKiy21Q74dro%2BJ6K0NPzTubruwxqrfUbQnn%2Fh0XZklJCBIcTKawR8m8XjijtmEDVNHuEzj%2B7lQAhvdtwhv0jtZXfyTW0GBYx4%2BJimoJnb9oaGkAgIjc2VEZjYDLbP6IM%2BFJNau7SzeQ%2F%2F10pllFqtwgZEitzZmJFFQNGusTqowS1a31AjHvMKkNGSxFvObDk8YlTyesHrd34d%2BOCwWNJPjiykE9owGWf5ynrSYyYjfNcyfNcUNkn%2BKpqBRD80kWQ%2Fprp8uLHINjz0%2B6ijuYdyTF7%2B9iewpgIhrfL0gwq7eHwQY6pgHzd%2FOxtL8KnbtGBA6xAT335CeQPFNkDAFxHQVokoVvvwATbNYzltSa%2FgPCVrurIMU2d5I9J3eiLJZHAGs8PuYIpGxauB%2FQYxOLJ%2BF9SUrdCDlftKiMA9wD8lx2WY7wSWOZdT7THZNXzkTideLbaLVdwKws1othSWrPyksT3bdVjbT24BdEG94U9EEWdbp7z7bzpGTXpcxEDW55e0vRu8ixtJ6G24Tb&X-Amz-Signature=069665f0735ed0494943d49480d30054af91096ce2c642023e157c411a05c3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F2U53H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXhCayUCWuAc0w1EX01GCBiaHPe7kNMbOBKKS96iFzHAiA%2Fo1w00aI1BriI58TNfs3uxoKhzISVCP4MXC%2BOrQaZRCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2BzTaK01Hl3hzAtOKtwDZ6sWBe91JH9JzdcNqlEv4WMvaLVa0ssaSp8nU44OQ0e6QH9SEPgZr3Mf1J306pwN1vLZ%2FDrWMHk7F7GeU8YF5y7TvQZTwnnIAZMcXmYWvzA%2B9cg03YcsIJVMVlE2kLe5vlGTuV1Sqw4wXVArBOLYOXBY17w4fE2Gt3j2z5ydoeFG%2FQh%2BouIWYAElhbRuWIycNsAnbkEJeWefm2LAuw7%2Fd16Iun7tBdLPe%2FP9SQMj8M9JK7wwOcFZVFLyi05t7P1utELSaqZfoWVpKiT8YAyeBVW8P%2FnZnr8g%2B6VCxuP%2BC3A8tBy1SCuRgxBNF0Ia0%2BOkko%2BZ9hC5eo%2F1p3G39ilxuWKiy21Q74dro%2BJ6K0NPzTubruwxqrfUbQnn%2Fh0XZklJCBIcTKawR8m8XjijtmEDVNHuEzj%2B7lQAhvdtwhv0jtZXfyTW0GBYx4%2BJimoJnb9oaGkAgIjc2VEZjYDLbP6IM%2BFJNau7SzeQ%2F%2F10pllFqtwgZEitzZmJFFQNGusTqowS1a31AjHvMKkNGSxFvObDk8YlTyesHrd34d%2BOCwWNJPjiykE9owGWf5ynrSYyYjfNcyfNcUNkn%2BKpqBRD80kWQ%2Fprp8uLHINjz0%2B6ijuYdyTF7%2B9iewpgIhrfL0gwq7eHwQY6pgHzd%2FOxtL8KnbtGBA6xAT335CeQPFNkDAFxHQVokoVvvwATbNYzltSa%2FgPCVrurIMU2d5I9J3eiLJZHAGs8PuYIpGxauB%2FQYxOLJ%2BF9SUrdCDlftKiMA9wD8lx2WY7wSWOZdT7THZNXzkTideLbaLVdwKws1othSWrPyksT3bdVjbT24BdEG94U9EEWdbp7z7bzpGTXpcxEDW55e0vRu8ixtJ6G24Tb&X-Amz-Signature=003d92011e2ba7467df08be98e3012bacdbe5aeca1f20c7989c13cd9fef2c7be&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F2U53H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXhCayUCWuAc0w1EX01GCBiaHPe7kNMbOBKKS96iFzHAiA%2Fo1w00aI1BriI58TNfs3uxoKhzISVCP4MXC%2BOrQaZRCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2BzTaK01Hl3hzAtOKtwDZ6sWBe91JH9JzdcNqlEv4WMvaLVa0ssaSp8nU44OQ0e6QH9SEPgZr3Mf1J306pwN1vLZ%2FDrWMHk7F7GeU8YF5y7TvQZTwnnIAZMcXmYWvzA%2B9cg03YcsIJVMVlE2kLe5vlGTuV1Sqw4wXVArBOLYOXBY17w4fE2Gt3j2z5ydoeFG%2FQh%2BouIWYAElhbRuWIycNsAnbkEJeWefm2LAuw7%2Fd16Iun7tBdLPe%2FP9SQMj8M9JK7wwOcFZVFLyi05t7P1utELSaqZfoWVpKiT8YAyeBVW8P%2FnZnr8g%2B6VCxuP%2BC3A8tBy1SCuRgxBNF0Ia0%2BOkko%2BZ9hC5eo%2F1p3G39ilxuWKiy21Q74dro%2BJ6K0NPzTubruwxqrfUbQnn%2Fh0XZklJCBIcTKawR8m8XjijtmEDVNHuEzj%2B7lQAhvdtwhv0jtZXfyTW0GBYx4%2BJimoJnb9oaGkAgIjc2VEZjYDLbP6IM%2BFJNau7SzeQ%2F%2F10pllFqtwgZEitzZmJFFQNGusTqowS1a31AjHvMKkNGSxFvObDk8YlTyesHrd34d%2BOCwWNJPjiykE9owGWf5ynrSYyYjfNcyfNcUNkn%2BKpqBRD80kWQ%2Fprp8uLHINjz0%2B6ijuYdyTF7%2B9iewpgIhrfL0gwq7eHwQY6pgHzd%2FOxtL8KnbtGBA6xAT335CeQPFNkDAFxHQVokoVvvwATbNYzltSa%2FgPCVrurIMU2d5I9J3eiLJZHAGs8PuYIpGxauB%2FQYxOLJ%2BF9SUrdCDlftKiMA9wD8lx2WY7wSWOZdT7THZNXzkTideLbaLVdwKws1othSWrPyksT3bdVjbT24BdEG94U9EEWdbp7z7bzpGTXpcxEDW55e0vRu8ixtJ6G24Tb&X-Amz-Signature=9b4c46e1d9fa9b080e17c80fe16f179d1c90ec0884b0ad763c7660d5e0ae3847&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F2U53H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXhCayUCWuAc0w1EX01GCBiaHPe7kNMbOBKKS96iFzHAiA%2Fo1w00aI1BriI58TNfs3uxoKhzISVCP4MXC%2BOrQaZRCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2BzTaK01Hl3hzAtOKtwDZ6sWBe91JH9JzdcNqlEv4WMvaLVa0ssaSp8nU44OQ0e6QH9SEPgZr3Mf1J306pwN1vLZ%2FDrWMHk7F7GeU8YF5y7TvQZTwnnIAZMcXmYWvzA%2B9cg03YcsIJVMVlE2kLe5vlGTuV1Sqw4wXVArBOLYOXBY17w4fE2Gt3j2z5ydoeFG%2FQh%2BouIWYAElhbRuWIycNsAnbkEJeWefm2LAuw7%2Fd16Iun7tBdLPe%2FP9SQMj8M9JK7wwOcFZVFLyi05t7P1utELSaqZfoWVpKiT8YAyeBVW8P%2FnZnr8g%2B6VCxuP%2BC3A8tBy1SCuRgxBNF0Ia0%2BOkko%2BZ9hC5eo%2F1p3G39ilxuWKiy21Q74dro%2BJ6K0NPzTubruwxqrfUbQnn%2Fh0XZklJCBIcTKawR8m8XjijtmEDVNHuEzj%2B7lQAhvdtwhv0jtZXfyTW0GBYx4%2BJimoJnb9oaGkAgIjc2VEZjYDLbP6IM%2BFJNau7SzeQ%2F%2F10pllFqtwgZEitzZmJFFQNGusTqowS1a31AjHvMKkNGSxFvObDk8YlTyesHrd34d%2BOCwWNJPjiykE9owGWf5ynrSYyYjfNcyfNcUNkn%2BKpqBRD80kWQ%2Fprp8uLHINjz0%2B6ijuYdyTF7%2B9iewpgIhrfL0gwq7eHwQY6pgHzd%2FOxtL8KnbtGBA6xAT335CeQPFNkDAFxHQVokoVvvwATbNYzltSa%2FgPCVrurIMU2d5I9J3eiLJZHAGs8PuYIpGxauB%2FQYxOLJ%2BF9SUrdCDlftKiMA9wD8lx2WY7wSWOZdT7THZNXzkTideLbaLVdwKws1othSWrPyksT3bdVjbT24BdEG94U9EEWdbp7z7bzpGTXpcxEDW55e0vRu8ixtJ6G24Tb&X-Amz-Signature=5eab69e6dab2e189c78d9a63ca01703b94c049ec3dc352c130c8011ed859361a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F2U53H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXhCayUCWuAc0w1EX01GCBiaHPe7kNMbOBKKS96iFzHAiA%2Fo1w00aI1BriI58TNfs3uxoKhzISVCP4MXC%2BOrQaZRCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2BzTaK01Hl3hzAtOKtwDZ6sWBe91JH9JzdcNqlEv4WMvaLVa0ssaSp8nU44OQ0e6QH9SEPgZr3Mf1J306pwN1vLZ%2FDrWMHk7F7GeU8YF5y7TvQZTwnnIAZMcXmYWvzA%2B9cg03YcsIJVMVlE2kLe5vlGTuV1Sqw4wXVArBOLYOXBY17w4fE2Gt3j2z5ydoeFG%2FQh%2BouIWYAElhbRuWIycNsAnbkEJeWefm2LAuw7%2Fd16Iun7tBdLPe%2FP9SQMj8M9JK7wwOcFZVFLyi05t7P1utELSaqZfoWVpKiT8YAyeBVW8P%2FnZnr8g%2B6VCxuP%2BC3A8tBy1SCuRgxBNF0Ia0%2BOkko%2BZ9hC5eo%2F1p3G39ilxuWKiy21Q74dro%2BJ6K0NPzTubruwxqrfUbQnn%2Fh0XZklJCBIcTKawR8m8XjijtmEDVNHuEzj%2B7lQAhvdtwhv0jtZXfyTW0GBYx4%2BJimoJnb9oaGkAgIjc2VEZjYDLbP6IM%2BFJNau7SzeQ%2F%2F10pllFqtwgZEitzZmJFFQNGusTqowS1a31AjHvMKkNGSxFvObDk8YlTyesHrd34d%2BOCwWNJPjiykE9owGWf5ynrSYyYjfNcyfNcUNkn%2BKpqBRD80kWQ%2Fprp8uLHINjz0%2B6ijuYdyTF7%2B9iewpgIhrfL0gwq7eHwQY6pgHzd%2FOxtL8KnbtGBA6xAT335CeQPFNkDAFxHQVokoVvvwATbNYzltSa%2FgPCVrurIMU2d5I9J3eiLJZHAGs8PuYIpGxauB%2FQYxOLJ%2BF9SUrdCDlftKiMA9wD8lx2WY7wSWOZdT7THZNXzkTideLbaLVdwKws1othSWrPyksT3bdVjbT24BdEG94U9EEWdbp7z7bzpGTXpcxEDW55e0vRu8ixtJ6G24Tb&X-Amz-Signature=a9294245acfb480b870eff65d07f487e1eeb5f78b5ada7a51de0b63ac5e5084b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

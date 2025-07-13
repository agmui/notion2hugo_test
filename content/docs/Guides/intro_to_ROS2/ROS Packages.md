---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAURV7T%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2BoEIEL5%2FMQvzNgd1bjgCP%2BtCnCKSq3bxFhzAX7DQaAIhAMEzuowg5iOvocHTMNb0rmjfYYqo%2BlYunxX0GV0A0euNKv8DCBgQABoMNjM3NDIzMTgzODA1IgylAaImroAppVUDaBoq3AOC0WScl1CBM8geFP298sHvPwN3gqzTiDCUo88gfSbnbcKLDbCV6Cbm2TcGilEUfAd19ROkXW%2FLHfSg8MMMw5Rzbqe2wkUGvzIUO%2BDuwpqKqHLyKoeeERhHb8WNYeFHSX88bOe7CY3XwKydMZPV6kMWBFnkHzI85pONpWF1y80bVPqy2dT5MRac666dzKymvWOAHIaWeypbE8c9sPvujPrB%2FbmYAdTb9xeNZE%2B9eqQeHG8P8F%2B8DMtz6CGslw6TqUNEsLoieRqA1fYLlubN6B75UknUZyPntkZp82gqbGF68Ixi1r6ibaeh%2BU6FT0%2B%2F%2FW6MdRIitf%2BLYziItkt%2BZ3A%2BENHFScCYRks4WRgP0Pu5zuv7ix48rEn680G0m49UYXVeZw37gc5uFBlMW5EK3VT9mrFG8DdCkZiEVcGD3mQKwleDg4k6OxON8XMt3l2PCrB%2BujxFcVeqMkmvUOcTckwBdE7Nqtv6Vo3BQf4UrUgg6Jc8E3NMzQjxVanfJgvhbYaj4rMU111SzsrDaKbGGLLJuk6RloUndvnl0EeF1qc6PcA1KNI9Sk9%2FdE69Ft0IAaHLuNuaBCOA9R%2BTd7AklDRY9PI%2BdJBLe1CPPTf5HXC0uTl9gatEFSXmSrpGxTDFlc%2FDBjqkAaq6MRAI2Tt19eub1XJ%2BHFw50C1xfgWYeXJFOKLrTPehy8IFjwJiGXqRS5p5RR0KFFow2r93njPFkqhZtjFBlt0qtpidtfS6al0FP0Pu5oihpslahXv6tsxBxETzQwpIAhen8io4ueJZ1SHqUxiIkYY7nAvUKMB4b54ZRysQ7n%2BIyCoXu4LqF%2B%2Fp7u92HbI8cVE0JAcckkYBRUXwEdFB0cIM1fqE&X-Amz-Signature=3e2c15a4d3c4c64fc008edd6937073a32a5eecb529978a0f01523c85c0af3298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAURV7T%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2BoEIEL5%2FMQvzNgd1bjgCP%2BtCnCKSq3bxFhzAX7DQaAIhAMEzuowg5iOvocHTMNb0rmjfYYqo%2BlYunxX0GV0A0euNKv8DCBgQABoMNjM3NDIzMTgzODA1IgylAaImroAppVUDaBoq3AOC0WScl1CBM8geFP298sHvPwN3gqzTiDCUo88gfSbnbcKLDbCV6Cbm2TcGilEUfAd19ROkXW%2FLHfSg8MMMw5Rzbqe2wkUGvzIUO%2BDuwpqKqHLyKoeeERhHb8WNYeFHSX88bOe7CY3XwKydMZPV6kMWBFnkHzI85pONpWF1y80bVPqy2dT5MRac666dzKymvWOAHIaWeypbE8c9sPvujPrB%2FbmYAdTb9xeNZE%2B9eqQeHG8P8F%2B8DMtz6CGslw6TqUNEsLoieRqA1fYLlubN6B75UknUZyPntkZp82gqbGF68Ixi1r6ibaeh%2BU6FT0%2B%2F%2FW6MdRIitf%2BLYziItkt%2BZ3A%2BENHFScCYRks4WRgP0Pu5zuv7ix48rEn680G0m49UYXVeZw37gc5uFBlMW5EK3VT9mrFG8DdCkZiEVcGD3mQKwleDg4k6OxON8XMt3l2PCrB%2BujxFcVeqMkmvUOcTckwBdE7Nqtv6Vo3BQf4UrUgg6Jc8E3NMzQjxVanfJgvhbYaj4rMU111SzsrDaKbGGLLJuk6RloUndvnl0EeF1qc6PcA1KNI9Sk9%2FdE69Ft0IAaHLuNuaBCOA9R%2BTd7AklDRY9PI%2BdJBLe1CPPTf5HXC0uTl9gatEFSXmSrpGxTDFlc%2FDBjqkAaq6MRAI2Tt19eub1XJ%2BHFw50C1xfgWYeXJFOKLrTPehy8IFjwJiGXqRS5p5RR0KFFow2r93njPFkqhZtjFBlt0qtpidtfS6al0FP0Pu5oihpslahXv6tsxBxETzQwpIAhen8io4ueJZ1SHqUxiIkYY7nAvUKMB4b54ZRysQ7n%2BIyCoXu4LqF%2B%2Fp7u92HbI8cVE0JAcckkYBRUXwEdFB0cIM1fqE&X-Amz-Signature=5f4831a9e6487f370f7cfed06660fd8bda2c3fa8df8b236d5cef4e58436fcf3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAURV7T%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2BoEIEL5%2FMQvzNgd1bjgCP%2BtCnCKSq3bxFhzAX7DQaAIhAMEzuowg5iOvocHTMNb0rmjfYYqo%2BlYunxX0GV0A0euNKv8DCBgQABoMNjM3NDIzMTgzODA1IgylAaImroAppVUDaBoq3AOC0WScl1CBM8geFP298sHvPwN3gqzTiDCUo88gfSbnbcKLDbCV6Cbm2TcGilEUfAd19ROkXW%2FLHfSg8MMMw5Rzbqe2wkUGvzIUO%2BDuwpqKqHLyKoeeERhHb8WNYeFHSX88bOe7CY3XwKydMZPV6kMWBFnkHzI85pONpWF1y80bVPqy2dT5MRac666dzKymvWOAHIaWeypbE8c9sPvujPrB%2FbmYAdTb9xeNZE%2B9eqQeHG8P8F%2B8DMtz6CGslw6TqUNEsLoieRqA1fYLlubN6B75UknUZyPntkZp82gqbGF68Ixi1r6ibaeh%2BU6FT0%2B%2F%2FW6MdRIitf%2BLYziItkt%2BZ3A%2BENHFScCYRks4WRgP0Pu5zuv7ix48rEn680G0m49UYXVeZw37gc5uFBlMW5EK3VT9mrFG8DdCkZiEVcGD3mQKwleDg4k6OxON8XMt3l2PCrB%2BujxFcVeqMkmvUOcTckwBdE7Nqtv6Vo3BQf4UrUgg6Jc8E3NMzQjxVanfJgvhbYaj4rMU111SzsrDaKbGGLLJuk6RloUndvnl0EeF1qc6PcA1KNI9Sk9%2FdE69Ft0IAaHLuNuaBCOA9R%2BTd7AklDRY9PI%2BdJBLe1CPPTf5HXC0uTl9gatEFSXmSrpGxTDFlc%2FDBjqkAaq6MRAI2Tt19eub1XJ%2BHFw50C1xfgWYeXJFOKLrTPehy8IFjwJiGXqRS5p5RR0KFFow2r93njPFkqhZtjFBlt0qtpidtfS6al0FP0Pu5oihpslahXv6tsxBxETzQwpIAhen8io4ueJZ1SHqUxiIkYY7nAvUKMB4b54ZRysQ7n%2BIyCoXu4LqF%2B%2Fp7u92HbI8cVE0JAcckkYBRUXwEdFB0cIM1fqE&X-Amz-Signature=42bf645e79ac4b2371b8aad97e37f4d9e1743a74c01ba747a27bca895f4bc676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAURV7T%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2BoEIEL5%2FMQvzNgd1bjgCP%2BtCnCKSq3bxFhzAX7DQaAIhAMEzuowg5iOvocHTMNb0rmjfYYqo%2BlYunxX0GV0A0euNKv8DCBgQABoMNjM3NDIzMTgzODA1IgylAaImroAppVUDaBoq3AOC0WScl1CBM8geFP298sHvPwN3gqzTiDCUo88gfSbnbcKLDbCV6Cbm2TcGilEUfAd19ROkXW%2FLHfSg8MMMw5Rzbqe2wkUGvzIUO%2BDuwpqKqHLyKoeeERhHb8WNYeFHSX88bOe7CY3XwKydMZPV6kMWBFnkHzI85pONpWF1y80bVPqy2dT5MRac666dzKymvWOAHIaWeypbE8c9sPvujPrB%2FbmYAdTb9xeNZE%2B9eqQeHG8P8F%2B8DMtz6CGslw6TqUNEsLoieRqA1fYLlubN6B75UknUZyPntkZp82gqbGF68Ixi1r6ibaeh%2BU6FT0%2B%2F%2FW6MdRIitf%2BLYziItkt%2BZ3A%2BENHFScCYRks4WRgP0Pu5zuv7ix48rEn680G0m49UYXVeZw37gc5uFBlMW5EK3VT9mrFG8DdCkZiEVcGD3mQKwleDg4k6OxON8XMt3l2PCrB%2BujxFcVeqMkmvUOcTckwBdE7Nqtv6Vo3BQf4UrUgg6Jc8E3NMzQjxVanfJgvhbYaj4rMU111SzsrDaKbGGLLJuk6RloUndvnl0EeF1qc6PcA1KNI9Sk9%2FdE69Ft0IAaHLuNuaBCOA9R%2BTd7AklDRY9PI%2BdJBLe1CPPTf5HXC0uTl9gatEFSXmSrpGxTDFlc%2FDBjqkAaq6MRAI2Tt19eub1XJ%2BHFw50C1xfgWYeXJFOKLrTPehy8IFjwJiGXqRS5p5RR0KFFow2r93njPFkqhZtjFBlt0qtpidtfS6al0FP0Pu5oihpslahXv6tsxBxETzQwpIAhen8io4ueJZ1SHqUxiIkYY7nAvUKMB4b54ZRysQ7n%2BIyCoXu4LqF%2B%2Fp7u92HbI8cVE0JAcckkYBRUXwEdFB0cIM1fqE&X-Amz-Signature=1804d23ab069e8bb26f32b2c19e230105813528deea9ba1b932c4d85c51c9acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAURV7T%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2BoEIEL5%2FMQvzNgd1bjgCP%2BtCnCKSq3bxFhzAX7DQaAIhAMEzuowg5iOvocHTMNb0rmjfYYqo%2BlYunxX0GV0A0euNKv8DCBgQABoMNjM3NDIzMTgzODA1IgylAaImroAppVUDaBoq3AOC0WScl1CBM8geFP298sHvPwN3gqzTiDCUo88gfSbnbcKLDbCV6Cbm2TcGilEUfAd19ROkXW%2FLHfSg8MMMw5Rzbqe2wkUGvzIUO%2BDuwpqKqHLyKoeeERhHb8WNYeFHSX88bOe7CY3XwKydMZPV6kMWBFnkHzI85pONpWF1y80bVPqy2dT5MRac666dzKymvWOAHIaWeypbE8c9sPvujPrB%2FbmYAdTb9xeNZE%2B9eqQeHG8P8F%2B8DMtz6CGslw6TqUNEsLoieRqA1fYLlubN6B75UknUZyPntkZp82gqbGF68Ixi1r6ibaeh%2BU6FT0%2B%2F%2FW6MdRIitf%2BLYziItkt%2BZ3A%2BENHFScCYRks4WRgP0Pu5zuv7ix48rEn680G0m49UYXVeZw37gc5uFBlMW5EK3VT9mrFG8DdCkZiEVcGD3mQKwleDg4k6OxON8XMt3l2PCrB%2BujxFcVeqMkmvUOcTckwBdE7Nqtv6Vo3BQf4UrUgg6Jc8E3NMzQjxVanfJgvhbYaj4rMU111SzsrDaKbGGLLJuk6RloUndvnl0EeF1qc6PcA1KNI9Sk9%2FdE69Ft0IAaHLuNuaBCOA9R%2BTd7AklDRY9PI%2BdJBLe1CPPTf5HXC0uTl9gatEFSXmSrpGxTDFlc%2FDBjqkAaq6MRAI2Tt19eub1XJ%2BHFw50C1xfgWYeXJFOKLrTPehy8IFjwJiGXqRS5p5RR0KFFow2r93njPFkqhZtjFBlt0qtpidtfS6al0FP0Pu5oihpslahXv6tsxBxETzQwpIAhen8io4ueJZ1SHqUxiIkYY7nAvUKMB4b54ZRysQ7n%2BIyCoXu4LqF%2B%2Fp7u92HbI8cVE0JAcckkYBRUXwEdFB0cIM1fqE&X-Amz-Signature=a34960e36f1a984d8c55a4f5a82409ae9a8b54b717391cbd99c3546f1b165ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAURV7T%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2BoEIEL5%2FMQvzNgd1bjgCP%2BtCnCKSq3bxFhzAX7DQaAIhAMEzuowg5iOvocHTMNb0rmjfYYqo%2BlYunxX0GV0A0euNKv8DCBgQABoMNjM3NDIzMTgzODA1IgylAaImroAppVUDaBoq3AOC0WScl1CBM8geFP298sHvPwN3gqzTiDCUo88gfSbnbcKLDbCV6Cbm2TcGilEUfAd19ROkXW%2FLHfSg8MMMw5Rzbqe2wkUGvzIUO%2BDuwpqKqHLyKoeeERhHb8WNYeFHSX88bOe7CY3XwKydMZPV6kMWBFnkHzI85pONpWF1y80bVPqy2dT5MRac666dzKymvWOAHIaWeypbE8c9sPvujPrB%2FbmYAdTb9xeNZE%2B9eqQeHG8P8F%2B8DMtz6CGslw6TqUNEsLoieRqA1fYLlubN6B75UknUZyPntkZp82gqbGF68Ixi1r6ibaeh%2BU6FT0%2B%2F%2FW6MdRIitf%2BLYziItkt%2BZ3A%2BENHFScCYRks4WRgP0Pu5zuv7ix48rEn680G0m49UYXVeZw37gc5uFBlMW5EK3VT9mrFG8DdCkZiEVcGD3mQKwleDg4k6OxON8XMt3l2PCrB%2BujxFcVeqMkmvUOcTckwBdE7Nqtv6Vo3BQf4UrUgg6Jc8E3NMzQjxVanfJgvhbYaj4rMU111SzsrDaKbGGLLJuk6RloUndvnl0EeF1qc6PcA1KNI9Sk9%2FdE69Ft0IAaHLuNuaBCOA9R%2BTd7AklDRY9PI%2BdJBLe1CPPTf5HXC0uTl9gatEFSXmSrpGxTDFlc%2FDBjqkAaq6MRAI2Tt19eub1XJ%2BHFw50C1xfgWYeXJFOKLrTPehy8IFjwJiGXqRS5p5RR0KFFow2r93njPFkqhZtjFBlt0qtpidtfS6al0FP0Pu5oihpslahXv6tsxBxETzQwpIAhen8io4ueJZ1SHqUxiIkYY7nAvUKMB4b54ZRysQ7n%2BIyCoXu4LqF%2B%2Fp7u92HbI8cVE0JAcckkYBRUXwEdFB0cIM1fqE&X-Amz-Signature=cc19c8a4685807bb1bcfa183dc0d7db0e4994a5e9bb2fac2457679272171e751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAURV7T%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2BoEIEL5%2FMQvzNgd1bjgCP%2BtCnCKSq3bxFhzAX7DQaAIhAMEzuowg5iOvocHTMNb0rmjfYYqo%2BlYunxX0GV0A0euNKv8DCBgQABoMNjM3NDIzMTgzODA1IgylAaImroAppVUDaBoq3AOC0WScl1CBM8geFP298sHvPwN3gqzTiDCUo88gfSbnbcKLDbCV6Cbm2TcGilEUfAd19ROkXW%2FLHfSg8MMMw5Rzbqe2wkUGvzIUO%2BDuwpqKqHLyKoeeERhHb8WNYeFHSX88bOe7CY3XwKydMZPV6kMWBFnkHzI85pONpWF1y80bVPqy2dT5MRac666dzKymvWOAHIaWeypbE8c9sPvujPrB%2FbmYAdTb9xeNZE%2B9eqQeHG8P8F%2B8DMtz6CGslw6TqUNEsLoieRqA1fYLlubN6B75UknUZyPntkZp82gqbGF68Ixi1r6ibaeh%2BU6FT0%2B%2F%2FW6MdRIitf%2BLYziItkt%2BZ3A%2BENHFScCYRks4WRgP0Pu5zuv7ix48rEn680G0m49UYXVeZw37gc5uFBlMW5EK3VT9mrFG8DdCkZiEVcGD3mQKwleDg4k6OxON8XMt3l2PCrB%2BujxFcVeqMkmvUOcTckwBdE7Nqtv6Vo3BQf4UrUgg6Jc8E3NMzQjxVanfJgvhbYaj4rMU111SzsrDaKbGGLLJuk6RloUndvnl0EeF1qc6PcA1KNI9Sk9%2FdE69Ft0IAaHLuNuaBCOA9R%2BTd7AklDRY9PI%2BdJBLe1CPPTf5HXC0uTl9gatEFSXmSrpGxTDFlc%2FDBjqkAaq6MRAI2Tt19eub1XJ%2BHFw50C1xfgWYeXJFOKLrTPehy8IFjwJiGXqRS5p5RR0KFFow2r93njPFkqhZtjFBlt0qtpidtfS6al0FP0Pu5oihpslahXv6tsxBxETzQwpIAhen8io4ueJZ1SHqUxiIkYY7nAvUKMB4b54ZRysQ7n%2BIyCoXu4LqF%2B%2Fp7u92HbI8cVE0JAcckkYBRUXwEdFB0cIM1fqE&X-Amz-Signature=61b4eb9b9281e41ab6f55199091f042298f66efb4f814580c225ece0713a913d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

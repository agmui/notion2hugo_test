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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3NPY6YH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC56D6qW7uUrw3bzkZ7J4ZAYKZUQcNlYd3n6TMvaEsPkQIhAOd7cpT1816owh0qokQDZRZ9XlpOMkEwY2wAN4x4LHt3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAcggTk9YxBgmIUQq3ANCvLk2XUrSU7LcdNCgqWUFZNh4W54y%2BjoTEbWAJ8A%2Ffc2c67i4Hcx%2FspH%2BSV2g7zuZag6FbGg6s7dSji9Z2PbQQGoJ96mTOHt4qAIfwWz4IyeJRg3GKlWAiNe5opR5MN5aTYMbdSxiwKc0xBbzTY0wovUAd%2BQqPOUQ9uQfm%2Fvojw1hVcoeeefxdM%2BYl9IHR5dEqUCgI%2BP2vqSIz93m4NHxrWO0WwUww4ljynZ%2FMEG8VJmQjHzO9VMfkwZsMFTK5txl5iwfTns%2FCoiYfcIbaOe1iUpUhccLydurXc6Te5nEzm7Wzr9UrBnYLo1yXBXR8Vgs9MA4%2BWYZqNVWDjeHYBj3ujLFeZ9ehlqdNgdoF7w4TFJeeXz9oJViTvE2FnXo64BsnKBYfGGBHGgFobI15ZgijRC7u7v5xV%2BF1PWOCIHGgEkoOXWqJ2LEfqlMFYBlD%2BygFdtzd4XoqhG6iOIpOv5%2FD7dSp8D%2ByHYS34HplgeQNtLrQdJvPzGrIfZ6kuLovxUpnWWd7qW7WB7QD76qhRUbfuSmEWwdUedC6zmwfEtsEbbvnBpC4yPr7ScgIQtrx%2BSU2edBZdHSCVNNh4h5g50SSjXrTnfSiheyT%2B667mXWFXFeqR%2FPw3w6jTdFSTC62Nu9BjqkAZRBuBCtlTlsd%2BDx2nTsjSAoHsc9VeiOkl5sGSNGymMduzzKmdw4CvdaFNv0A6FY6XNG43l%2FIQDnNkIKarjMdRH8Zg8fkK4y%2F87rvtX9pXX1%2BP%2FmGfJ2MTymga6pf9iFAKX4%2Bbn6a3BfBXkZYKany11V2nPmwmVHPGqcI7NrhOYbnx5nuSwX8ShAgj3T0puw7mnxK5y8EmpRImf9HUxC9N2CNO3%2B&X-Amz-Signature=d0e4466d07526d1636598066ac5478451624966a6735a13d91a8b0461d4a2f37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3NPY6YH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC56D6qW7uUrw3bzkZ7J4ZAYKZUQcNlYd3n6TMvaEsPkQIhAOd7cpT1816owh0qokQDZRZ9XlpOMkEwY2wAN4x4LHt3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAcggTk9YxBgmIUQq3ANCvLk2XUrSU7LcdNCgqWUFZNh4W54y%2BjoTEbWAJ8A%2Ffc2c67i4Hcx%2FspH%2BSV2g7zuZag6FbGg6s7dSji9Z2PbQQGoJ96mTOHt4qAIfwWz4IyeJRg3GKlWAiNe5opR5MN5aTYMbdSxiwKc0xBbzTY0wovUAd%2BQqPOUQ9uQfm%2Fvojw1hVcoeeefxdM%2BYl9IHR5dEqUCgI%2BP2vqSIz93m4NHxrWO0WwUww4ljynZ%2FMEG8VJmQjHzO9VMfkwZsMFTK5txl5iwfTns%2FCoiYfcIbaOe1iUpUhccLydurXc6Te5nEzm7Wzr9UrBnYLo1yXBXR8Vgs9MA4%2BWYZqNVWDjeHYBj3ujLFeZ9ehlqdNgdoF7w4TFJeeXz9oJViTvE2FnXo64BsnKBYfGGBHGgFobI15ZgijRC7u7v5xV%2BF1PWOCIHGgEkoOXWqJ2LEfqlMFYBlD%2BygFdtzd4XoqhG6iOIpOv5%2FD7dSp8D%2ByHYS34HplgeQNtLrQdJvPzGrIfZ6kuLovxUpnWWd7qW7WB7QD76qhRUbfuSmEWwdUedC6zmwfEtsEbbvnBpC4yPr7ScgIQtrx%2BSU2edBZdHSCVNNh4h5g50SSjXrTnfSiheyT%2B667mXWFXFeqR%2FPw3w6jTdFSTC62Nu9BjqkAZRBuBCtlTlsd%2BDx2nTsjSAoHsc9VeiOkl5sGSNGymMduzzKmdw4CvdaFNv0A6FY6XNG43l%2FIQDnNkIKarjMdRH8Zg8fkK4y%2F87rvtX9pXX1%2BP%2FmGfJ2MTymga6pf9iFAKX4%2Bbn6a3BfBXkZYKany11V2nPmwmVHPGqcI7NrhOYbnx5nuSwX8ShAgj3T0puw7mnxK5y8EmpRImf9HUxC9N2CNO3%2B&X-Amz-Signature=348f6d3ac25b5810b53612455db54493cd8578125a67e40504db81e7f71ea9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3NPY6YH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC56D6qW7uUrw3bzkZ7J4ZAYKZUQcNlYd3n6TMvaEsPkQIhAOd7cpT1816owh0qokQDZRZ9XlpOMkEwY2wAN4x4LHt3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAcggTk9YxBgmIUQq3ANCvLk2XUrSU7LcdNCgqWUFZNh4W54y%2BjoTEbWAJ8A%2Ffc2c67i4Hcx%2FspH%2BSV2g7zuZag6FbGg6s7dSji9Z2PbQQGoJ96mTOHt4qAIfwWz4IyeJRg3GKlWAiNe5opR5MN5aTYMbdSxiwKc0xBbzTY0wovUAd%2BQqPOUQ9uQfm%2Fvojw1hVcoeeefxdM%2BYl9IHR5dEqUCgI%2BP2vqSIz93m4NHxrWO0WwUww4ljynZ%2FMEG8VJmQjHzO9VMfkwZsMFTK5txl5iwfTns%2FCoiYfcIbaOe1iUpUhccLydurXc6Te5nEzm7Wzr9UrBnYLo1yXBXR8Vgs9MA4%2BWYZqNVWDjeHYBj3ujLFeZ9ehlqdNgdoF7w4TFJeeXz9oJViTvE2FnXo64BsnKBYfGGBHGgFobI15ZgijRC7u7v5xV%2BF1PWOCIHGgEkoOXWqJ2LEfqlMFYBlD%2BygFdtzd4XoqhG6iOIpOv5%2FD7dSp8D%2ByHYS34HplgeQNtLrQdJvPzGrIfZ6kuLovxUpnWWd7qW7WB7QD76qhRUbfuSmEWwdUedC6zmwfEtsEbbvnBpC4yPr7ScgIQtrx%2BSU2edBZdHSCVNNh4h5g50SSjXrTnfSiheyT%2B667mXWFXFeqR%2FPw3w6jTdFSTC62Nu9BjqkAZRBuBCtlTlsd%2BDx2nTsjSAoHsc9VeiOkl5sGSNGymMduzzKmdw4CvdaFNv0A6FY6XNG43l%2FIQDnNkIKarjMdRH8Zg8fkK4y%2F87rvtX9pXX1%2BP%2FmGfJ2MTymga6pf9iFAKX4%2Bbn6a3BfBXkZYKany11V2nPmwmVHPGqcI7NrhOYbnx5nuSwX8ShAgj3T0puw7mnxK5y8EmpRImf9HUxC9N2CNO3%2B&X-Amz-Signature=8c0bd008f254e8b02f48dbe15cc26cd550d495f99df40773b34648f4d726c10a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3NPY6YH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC56D6qW7uUrw3bzkZ7J4ZAYKZUQcNlYd3n6TMvaEsPkQIhAOd7cpT1816owh0qokQDZRZ9XlpOMkEwY2wAN4x4LHt3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAcggTk9YxBgmIUQq3ANCvLk2XUrSU7LcdNCgqWUFZNh4W54y%2BjoTEbWAJ8A%2Ffc2c67i4Hcx%2FspH%2BSV2g7zuZag6FbGg6s7dSji9Z2PbQQGoJ96mTOHt4qAIfwWz4IyeJRg3GKlWAiNe5opR5MN5aTYMbdSxiwKc0xBbzTY0wovUAd%2BQqPOUQ9uQfm%2Fvojw1hVcoeeefxdM%2BYl9IHR5dEqUCgI%2BP2vqSIz93m4NHxrWO0WwUww4ljynZ%2FMEG8VJmQjHzO9VMfkwZsMFTK5txl5iwfTns%2FCoiYfcIbaOe1iUpUhccLydurXc6Te5nEzm7Wzr9UrBnYLo1yXBXR8Vgs9MA4%2BWYZqNVWDjeHYBj3ujLFeZ9ehlqdNgdoF7w4TFJeeXz9oJViTvE2FnXo64BsnKBYfGGBHGgFobI15ZgijRC7u7v5xV%2BF1PWOCIHGgEkoOXWqJ2LEfqlMFYBlD%2BygFdtzd4XoqhG6iOIpOv5%2FD7dSp8D%2ByHYS34HplgeQNtLrQdJvPzGrIfZ6kuLovxUpnWWd7qW7WB7QD76qhRUbfuSmEWwdUedC6zmwfEtsEbbvnBpC4yPr7ScgIQtrx%2BSU2edBZdHSCVNNh4h5g50SSjXrTnfSiheyT%2B667mXWFXFeqR%2FPw3w6jTdFSTC62Nu9BjqkAZRBuBCtlTlsd%2BDx2nTsjSAoHsc9VeiOkl5sGSNGymMduzzKmdw4CvdaFNv0A6FY6XNG43l%2FIQDnNkIKarjMdRH8Zg8fkK4y%2F87rvtX9pXX1%2BP%2FmGfJ2MTymga6pf9iFAKX4%2Bbn6a3BfBXkZYKany11V2nPmwmVHPGqcI7NrhOYbnx5nuSwX8ShAgj3T0puw7mnxK5y8EmpRImf9HUxC9N2CNO3%2B&X-Amz-Signature=3e5242838427a927e25fd5633993452fd32ee54aa96fad9d7a8a6b3ba562b888&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3NPY6YH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC56D6qW7uUrw3bzkZ7J4ZAYKZUQcNlYd3n6TMvaEsPkQIhAOd7cpT1816owh0qokQDZRZ9XlpOMkEwY2wAN4x4LHt3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAcggTk9YxBgmIUQq3ANCvLk2XUrSU7LcdNCgqWUFZNh4W54y%2BjoTEbWAJ8A%2Ffc2c67i4Hcx%2FspH%2BSV2g7zuZag6FbGg6s7dSji9Z2PbQQGoJ96mTOHt4qAIfwWz4IyeJRg3GKlWAiNe5opR5MN5aTYMbdSxiwKc0xBbzTY0wovUAd%2BQqPOUQ9uQfm%2Fvojw1hVcoeeefxdM%2BYl9IHR5dEqUCgI%2BP2vqSIz93m4NHxrWO0WwUww4ljynZ%2FMEG8VJmQjHzO9VMfkwZsMFTK5txl5iwfTns%2FCoiYfcIbaOe1iUpUhccLydurXc6Te5nEzm7Wzr9UrBnYLo1yXBXR8Vgs9MA4%2BWYZqNVWDjeHYBj3ujLFeZ9ehlqdNgdoF7w4TFJeeXz9oJViTvE2FnXo64BsnKBYfGGBHGgFobI15ZgijRC7u7v5xV%2BF1PWOCIHGgEkoOXWqJ2LEfqlMFYBlD%2BygFdtzd4XoqhG6iOIpOv5%2FD7dSp8D%2ByHYS34HplgeQNtLrQdJvPzGrIfZ6kuLovxUpnWWd7qW7WB7QD76qhRUbfuSmEWwdUedC6zmwfEtsEbbvnBpC4yPr7ScgIQtrx%2BSU2edBZdHSCVNNh4h5g50SSjXrTnfSiheyT%2B667mXWFXFeqR%2FPw3w6jTdFSTC62Nu9BjqkAZRBuBCtlTlsd%2BDx2nTsjSAoHsc9VeiOkl5sGSNGymMduzzKmdw4CvdaFNv0A6FY6XNG43l%2FIQDnNkIKarjMdRH8Zg8fkK4y%2F87rvtX9pXX1%2BP%2FmGfJ2MTymga6pf9iFAKX4%2Bbn6a3BfBXkZYKany11V2nPmwmVHPGqcI7NrhOYbnx5nuSwX8ShAgj3T0puw7mnxK5y8EmpRImf9HUxC9N2CNO3%2B&X-Amz-Signature=23ce894e72c21f6f8485ad72485be04a7d6be25df8f57e1cb15f0b2edaa7d6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3NPY6YH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC56D6qW7uUrw3bzkZ7J4ZAYKZUQcNlYd3n6TMvaEsPkQIhAOd7cpT1816owh0qokQDZRZ9XlpOMkEwY2wAN4x4LHt3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAcggTk9YxBgmIUQq3ANCvLk2XUrSU7LcdNCgqWUFZNh4W54y%2BjoTEbWAJ8A%2Ffc2c67i4Hcx%2FspH%2BSV2g7zuZag6FbGg6s7dSji9Z2PbQQGoJ96mTOHt4qAIfwWz4IyeJRg3GKlWAiNe5opR5MN5aTYMbdSxiwKc0xBbzTY0wovUAd%2BQqPOUQ9uQfm%2Fvojw1hVcoeeefxdM%2BYl9IHR5dEqUCgI%2BP2vqSIz93m4NHxrWO0WwUww4ljynZ%2FMEG8VJmQjHzO9VMfkwZsMFTK5txl5iwfTns%2FCoiYfcIbaOe1iUpUhccLydurXc6Te5nEzm7Wzr9UrBnYLo1yXBXR8Vgs9MA4%2BWYZqNVWDjeHYBj3ujLFeZ9ehlqdNgdoF7w4TFJeeXz9oJViTvE2FnXo64BsnKBYfGGBHGgFobI15ZgijRC7u7v5xV%2BF1PWOCIHGgEkoOXWqJ2LEfqlMFYBlD%2BygFdtzd4XoqhG6iOIpOv5%2FD7dSp8D%2ByHYS34HplgeQNtLrQdJvPzGrIfZ6kuLovxUpnWWd7qW7WB7QD76qhRUbfuSmEWwdUedC6zmwfEtsEbbvnBpC4yPr7ScgIQtrx%2BSU2edBZdHSCVNNh4h5g50SSjXrTnfSiheyT%2B667mXWFXFeqR%2FPw3w6jTdFSTC62Nu9BjqkAZRBuBCtlTlsd%2BDx2nTsjSAoHsc9VeiOkl5sGSNGymMduzzKmdw4CvdaFNv0A6FY6XNG43l%2FIQDnNkIKarjMdRH8Zg8fkK4y%2F87rvtX9pXX1%2BP%2FmGfJ2MTymga6pf9iFAKX4%2Bbn6a3BfBXkZYKany11V2nPmwmVHPGqcI7NrhOYbnx5nuSwX8ShAgj3T0puw7mnxK5y8EmpRImf9HUxC9N2CNO3%2B&X-Amz-Signature=a48343804408bb68c5e44b3f960bf101b1acbed990f81abf7f0916eccf310807&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3NPY6YH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC56D6qW7uUrw3bzkZ7J4ZAYKZUQcNlYd3n6TMvaEsPkQIhAOd7cpT1816owh0qokQDZRZ9XlpOMkEwY2wAN4x4LHt3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAcggTk9YxBgmIUQq3ANCvLk2XUrSU7LcdNCgqWUFZNh4W54y%2BjoTEbWAJ8A%2Ffc2c67i4Hcx%2FspH%2BSV2g7zuZag6FbGg6s7dSji9Z2PbQQGoJ96mTOHt4qAIfwWz4IyeJRg3GKlWAiNe5opR5MN5aTYMbdSxiwKc0xBbzTY0wovUAd%2BQqPOUQ9uQfm%2Fvojw1hVcoeeefxdM%2BYl9IHR5dEqUCgI%2BP2vqSIz93m4NHxrWO0WwUww4ljynZ%2FMEG8VJmQjHzO9VMfkwZsMFTK5txl5iwfTns%2FCoiYfcIbaOe1iUpUhccLydurXc6Te5nEzm7Wzr9UrBnYLo1yXBXR8Vgs9MA4%2BWYZqNVWDjeHYBj3ujLFeZ9ehlqdNgdoF7w4TFJeeXz9oJViTvE2FnXo64BsnKBYfGGBHGgFobI15ZgijRC7u7v5xV%2BF1PWOCIHGgEkoOXWqJ2LEfqlMFYBlD%2BygFdtzd4XoqhG6iOIpOv5%2FD7dSp8D%2ByHYS34HplgeQNtLrQdJvPzGrIfZ6kuLovxUpnWWd7qW7WB7QD76qhRUbfuSmEWwdUedC6zmwfEtsEbbvnBpC4yPr7ScgIQtrx%2BSU2edBZdHSCVNNh4h5g50SSjXrTnfSiheyT%2B667mXWFXFeqR%2FPw3w6jTdFSTC62Nu9BjqkAZRBuBCtlTlsd%2BDx2nTsjSAoHsc9VeiOkl5sGSNGymMduzzKmdw4CvdaFNv0A6FY6XNG43l%2FIQDnNkIKarjMdRH8Zg8fkK4y%2F87rvtX9pXX1%2BP%2FmGfJ2MTymga6pf9iFAKX4%2Bbn6a3BfBXkZYKany11V2nPmwmVHPGqcI7NrhOYbnx5nuSwX8ShAgj3T0puw7mnxK5y8EmpRImf9HUxC9N2CNO3%2B&X-Amz-Signature=439895e31df996bb213bd533098216979370d30348d52f182a4c61c7c1b95217&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

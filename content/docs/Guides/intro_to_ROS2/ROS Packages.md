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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBUPQ5U%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICJPQK9yEMjJOrdK93kkotuPEWsZ0LYVFYWA5EErQy9vAiEA5gn7EWCJE1jaRDgOOqQb97GulPaCMwm0TAAQcXu0Tccq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLfbI25yzla5T8%2BdSSrcA5sAtx3WAqDJtSQSF71MS59Eh5NiG7jkGBor%2Fv%2BHayrurUcmD9FGdRkSKT9oIHUc7WRUJzoZQYgxFLvyCYd0341QxcsJK2kFW%2F%2FARRPkjnSr7dGSi9rmqtdrVdWLiHNvEX2xu4icSMl80GqzOwRuIZGep4FnLp%2B5dxWoqVf30t%2Bo6Db2KLFa6Z2tm0zxsxrmevH5lDSVR7uV1oXdEb1jIxC7s2HRQ5Yd9y4IH4RSVisEI13f%2BPRkY5xy%2F6kl2lQ9UEWrEArAOp16kcX3RQ3%2FZcGixgma2cHy8uyBRsicJuxeUH9C%2BPQfJjpACZJJmsIJmQqVao%2F%2FAxmLCw2mrMMen2M%2FnB8pQz5hpx5aupyZ6mfxA41NFiGdFDgf9yY3A64EG89xMQs2LuI%2F6ltvHusys%2BkjwJtramnvlGPE0WnupU4U%2BXb7kTy%2FedXelXyZNLFC1P69SS5MF5K9TFR5z1C73Zj4g1HyHilGR4Caboq6yK2EYbmejRDa1wpOkHgusxPQJ%2FGwt12KOjyEmh3kCnHaCl1PP8ABE6oMKH8S3LbnJdT84mGZYm6owATJmkhQw2NwiPRawz2NVvThJb9jeDSfOubrXMlOiebkxkn1RfL70j%2BFLDdtG4F7YJFoWajhMPLenL8GOqUBVpUW1FUmoxxoCLzEphIDoLvay1lNzRhF%2B6Ek7vmK0cVhMUNd34eYcnWLS4Mnz9ok%2BEDMYm8AiXXc5QAeSATGU54kbM39OIVEFRtPbkg%2Fr7YVhAssxrkUQxB4%2F8JtnUukegIH8p0wOjx4LterERD%2BrOu1KLwLcW%2B7wkBGDi%2BLhAFQ5l8HsJGHMJVlFUd9Zbjb6rGZnYH8v8%2BtF4ArTbxLNloJT0Bn&X-Amz-Signature=a38e81bc632bfdbfcaee3192abe638357d956d3aa6ab0f7a6624539e42b52bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBUPQ5U%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICJPQK9yEMjJOrdK93kkotuPEWsZ0LYVFYWA5EErQy9vAiEA5gn7EWCJE1jaRDgOOqQb97GulPaCMwm0TAAQcXu0Tccq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLfbI25yzla5T8%2BdSSrcA5sAtx3WAqDJtSQSF71MS59Eh5NiG7jkGBor%2Fv%2BHayrurUcmD9FGdRkSKT9oIHUc7WRUJzoZQYgxFLvyCYd0341QxcsJK2kFW%2F%2FARRPkjnSr7dGSi9rmqtdrVdWLiHNvEX2xu4icSMl80GqzOwRuIZGep4FnLp%2B5dxWoqVf30t%2Bo6Db2KLFa6Z2tm0zxsxrmevH5lDSVR7uV1oXdEb1jIxC7s2HRQ5Yd9y4IH4RSVisEI13f%2BPRkY5xy%2F6kl2lQ9UEWrEArAOp16kcX3RQ3%2FZcGixgma2cHy8uyBRsicJuxeUH9C%2BPQfJjpACZJJmsIJmQqVao%2F%2FAxmLCw2mrMMen2M%2FnB8pQz5hpx5aupyZ6mfxA41NFiGdFDgf9yY3A64EG89xMQs2LuI%2F6ltvHusys%2BkjwJtramnvlGPE0WnupU4U%2BXb7kTy%2FedXelXyZNLFC1P69SS5MF5K9TFR5z1C73Zj4g1HyHilGR4Caboq6yK2EYbmejRDa1wpOkHgusxPQJ%2FGwt12KOjyEmh3kCnHaCl1PP8ABE6oMKH8S3LbnJdT84mGZYm6owATJmkhQw2NwiPRawz2NVvThJb9jeDSfOubrXMlOiebkxkn1RfL70j%2BFLDdtG4F7YJFoWajhMPLenL8GOqUBVpUW1FUmoxxoCLzEphIDoLvay1lNzRhF%2B6Ek7vmK0cVhMUNd34eYcnWLS4Mnz9ok%2BEDMYm8AiXXc5QAeSATGU54kbM39OIVEFRtPbkg%2Fr7YVhAssxrkUQxB4%2F8JtnUukegIH8p0wOjx4LterERD%2BrOu1KLwLcW%2B7wkBGDi%2BLhAFQ5l8HsJGHMJVlFUd9Zbjb6rGZnYH8v8%2BtF4ArTbxLNloJT0Bn&X-Amz-Signature=2540d0fa06e4aa5ed71e8124ccda4a054b55433cfb014cbcbc94ceb45a7daca2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBUPQ5U%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICJPQK9yEMjJOrdK93kkotuPEWsZ0LYVFYWA5EErQy9vAiEA5gn7EWCJE1jaRDgOOqQb97GulPaCMwm0TAAQcXu0Tccq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLfbI25yzla5T8%2BdSSrcA5sAtx3WAqDJtSQSF71MS59Eh5NiG7jkGBor%2Fv%2BHayrurUcmD9FGdRkSKT9oIHUc7WRUJzoZQYgxFLvyCYd0341QxcsJK2kFW%2F%2FARRPkjnSr7dGSi9rmqtdrVdWLiHNvEX2xu4icSMl80GqzOwRuIZGep4FnLp%2B5dxWoqVf30t%2Bo6Db2KLFa6Z2tm0zxsxrmevH5lDSVR7uV1oXdEb1jIxC7s2HRQ5Yd9y4IH4RSVisEI13f%2BPRkY5xy%2F6kl2lQ9UEWrEArAOp16kcX3RQ3%2FZcGixgma2cHy8uyBRsicJuxeUH9C%2BPQfJjpACZJJmsIJmQqVao%2F%2FAxmLCw2mrMMen2M%2FnB8pQz5hpx5aupyZ6mfxA41NFiGdFDgf9yY3A64EG89xMQs2LuI%2F6ltvHusys%2BkjwJtramnvlGPE0WnupU4U%2BXb7kTy%2FedXelXyZNLFC1P69SS5MF5K9TFR5z1C73Zj4g1HyHilGR4Caboq6yK2EYbmejRDa1wpOkHgusxPQJ%2FGwt12KOjyEmh3kCnHaCl1PP8ABE6oMKH8S3LbnJdT84mGZYm6owATJmkhQw2NwiPRawz2NVvThJb9jeDSfOubrXMlOiebkxkn1RfL70j%2BFLDdtG4F7YJFoWajhMPLenL8GOqUBVpUW1FUmoxxoCLzEphIDoLvay1lNzRhF%2B6Ek7vmK0cVhMUNd34eYcnWLS4Mnz9ok%2BEDMYm8AiXXc5QAeSATGU54kbM39OIVEFRtPbkg%2Fr7YVhAssxrkUQxB4%2F8JtnUukegIH8p0wOjx4LterERD%2BrOu1KLwLcW%2B7wkBGDi%2BLhAFQ5l8HsJGHMJVlFUd9Zbjb6rGZnYH8v8%2BtF4ArTbxLNloJT0Bn&X-Amz-Signature=7c4a37a6e341269a84d49541fa1914852320083f540891e3b9b712d01bed6a67&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBUPQ5U%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICJPQK9yEMjJOrdK93kkotuPEWsZ0LYVFYWA5EErQy9vAiEA5gn7EWCJE1jaRDgOOqQb97GulPaCMwm0TAAQcXu0Tccq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLfbI25yzla5T8%2BdSSrcA5sAtx3WAqDJtSQSF71MS59Eh5NiG7jkGBor%2Fv%2BHayrurUcmD9FGdRkSKT9oIHUc7WRUJzoZQYgxFLvyCYd0341QxcsJK2kFW%2F%2FARRPkjnSr7dGSi9rmqtdrVdWLiHNvEX2xu4icSMl80GqzOwRuIZGep4FnLp%2B5dxWoqVf30t%2Bo6Db2KLFa6Z2tm0zxsxrmevH5lDSVR7uV1oXdEb1jIxC7s2HRQ5Yd9y4IH4RSVisEI13f%2BPRkY5xy%2F6kl2lQ9UEWrEArAOp16kcX3RQ3%2FZcGixgma2cHy8uyBRsicJuxeUH9C%2BPQfJjpACZJJmsIJmQqVao%2F%2FAxmLCw2mrMMen2M%2FnB8pQz5hpx5aupyZ6mfxA41NFiGdFDgf9yY3A64EG89xMQs2LuI%2F6ltvHusys%2BkjwJtramnvlGPE0WnupU4U%2BXb7kTy%2FedXelXyZNLFC1P69SS5MF5K9TFR5z1C73Zj4g1HyHilGR4Caboq6yK2EYbmejRDa1wpOkHgusxPQJ%2FGwt12KOjyEmh3kCnHaCl1PP8ABE6oMKH8S3LbnJdT84mGZYm6owATJmkhQw2NwiPRawz2NVvThJb9jeDSfOubrXMlOiebkxkn1RfL70j%2BFLDdtG4F7YJFoWajhMPLenL8GOqUBVpUW1FUmoxxoCLzEphIDoLvay1lNzRhF%2B6Ek7vmK0cVhMUNd34eYcnWLS4Mnz9ok%2BEDMYm8AiXXc5QAeSATGU54kbM39OIVEFRtPbkg%2Fr7YVhAssxrkUQxB4%2F8JtnUukegIH8p0wOjx4LterERD%2BrOu1KLwLcW%2B7wkBGDi%2BLhAFQ5l8HsJGHMJVlFUd9Zbjb6rGZnYH8v8%2BtF4ArTbxLNloJT0Bn&X-Amz-Signature=cff2087072b2be49294596ff96a197d7b17e67ab9a5125030441f1cc4c689f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBUPQ5U%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICJPQK9yEMjJOrdK93kkotuPEWsZ0LYVFYWA5EErQy9vAiEA5gn7EWCJE1jaRDgOOqQb97GulPaCMwm0TAAQcXu0Tccq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLfbI25yzla5T8%2BdSSrcA5sAtx3WAqDJtSQSF71MS59Eh5NiG7jkGBor%2Fv%2BHayrurUcmD9FGdRkSKT9oIHUc7WRUJzoZQYgxFLvyCYd0341QxcsJK2kFW%2F%2FARRPkjnSr7dGSi9rmqtdrVdWLiHNvEX2xu4icSMl80GqzOwRuIZGep4FnLp%2B5dxWoqVf30t%2Bo6Db2KLFa6Z2tm0zxsxrmevH5lDSVR7uV1oXdEb1jIxC7s2HRQ5Yd9y4IH4RSVisEI13f%2BPRkY5xy%2F6kl2lQ9UEWrEArAOp16kcX3RQ3%2FZcGixgma2cHy8uyBRsicJuxeUH9C%2BPQfJjpACZJJmsIJmQqVao%2F%2FAxmLCw2mrMMen2M%2FnB8pQz5hpx5aupyZ6mfxA41NFiGdFDgf9yY3A64EG89xMQs2LuI%2F6ltvHusys%2BkjwJtramnvlGPE0WnupU4U%2BXb7kTy%2FedXelXyZNLFC1P69SS5MF5K9TFR5z1C73Zj4g1HyHilGR4Caboq6yK2EYbmejRDa1wpOkHgusxPQJ%2FGwt12KOjyEmh3kCnHaCl1PP8ABE6oMKH8S3LbnJdT84mGZYm6owATJmkhQw2NwiPRawz2NVvThJb9jeDSfOubrXMlOiebkxkn1RfL70j%2BFLDdtG4F7YJFoWajhMPLenL8GOqUBVpUW1FUmoxxoCLzEphIDoLvay1lNzRhF%2B6Ek7vmK0cVhMUNd34eYcnWLS4Mnz9ok%2BEDMYm8AiXXc5QAeSATGU54kbM39OIVEFRtPbkg%2Fr7YVhAssxrkUQxB4%2F8JtnUukegIH8p0wOjx4LterERD%2BrOu1KLwLcW%2B7wkBGDi%2BLhAFQ5l8HsJGHMJVlFUd9Zbjb6rGZnYH8v8%2BtF4ArTbxLNloJT0Bn&X-Amz-Signature=c8a5be56ca09c00aef6b7b0936d46093a8d3f4255acf6844763c9852e6bcfcc2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBUPQ5U%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICJPQK9yEMjJOrdK93kkotuPEWsZ0LYVFYWA5EErQy9vAiEA5gn7EWCJE1jaRDgOOqQb97GulPaCMwm0TAAQcXu0Tccq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLfbI25yzla5T8%2BdSSrcA5sAtx3WAqDJtSQSF71MS59Eh5NiG7jkGBor%2Fv%2BHayrurUcmD9FGdRkSKT9oIHUc7WRUJzoZQYgxFLvyCYd0341QxcsJK2kFW%2F%2FARRPkjnSr7dGSi9rmqtdrVdWLiHNvEX2xu4icSMl80GqzOwRuIZGep4FnLp%2B5dxWoqVf30t%2Bo6Db2KLFa6Z2tm0zxsxrmevH5lDSVR7uV1oXdEb1jIxC7s2HRQ5Yd9y4IH4RSVisEI13f%2BPRkY5xy%2F6kl2lQ9UEWrEArAOp16kcX3RQ3%2FZcGixgma2cHy8uyBRsicJuxeUH9C%2BPQfJjpACZJJmsIJmQqVao%2F%2FAxmLCw2mrMMen2M%2FnB8pQz5hpx5aupyZ6mfxA41NFiGdFDgf9yY3A64EG89xMQs2LuI%2F6ltvHusys%2BkjwJtramnvlGPE0WnupU4U%2BXb7kTy%2FedXelXyZNLFC1P69SS5MF5K9TFR5z1C73Zj4g1HyHilGR4Caboq6yK2EYbmejRDa1wpOkHgusxPQJ%2FGwt12KOjyEmh3kCnHaCl1PP8ABE6oMKH8S3LbnJdT84mGZYm6owATJmkhQw2NwiPRawz2NVvThJb9jeDSfOubrXMlOiebkxkn1RfL70j%2BFLDdtG4F7YJFoWajhMPLenL8GOqUBVpUW1FUmoxxoCLzEphIDoLvay1lNzRhF%2B6Ek7vmK0cVhMUNd34eYcnWLS4Mnz9ok%2BEDMYm8AiXXc5QAeSATGU54kbM39OIVEFRtPbkg%2Fr7YVhAssxrkUQxB4%2F8JtnUukegIH8p0wOjx4LterERD%2BrOu1KLwLcW%2B7wkBGDi%2BLhAFQ5l8HsJGHMJVlFUd9Zbjb6rGZnYH8v8%2BtF4ArTbxLNloJT0Bn&X-Amz-Signature=1a2bb3a3b8f5b981d7b0e3868955727a27a8bf0144b6f900405fd5907b1fa177&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBUPQ5U%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICJPQK9yEMjJOrdK93kkotuPEWsZ0LYVFYWA5EErQy9vAiEA5gn7EWCJE1jaRDgOOqQb97GulPaCMwm0TAAQcXu0Tccq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLfbI25yzla5T8%2BdSSrcA5sAtx3WAqDJtSQSF71MS59Eh5NiG7jkGBor%2Fv%2BHayrurUcmD9FGdRkSKT9oIHUc7WRUJzoZQYgxFLvyCYd0341QxcsJK2kFW%2F%2FARRPkjnSr7dGSi9rmqtdrVdWLiHNvEX2xu4icSMl80GqzOwRuIZGep4FnLp%2B5dxWoqVf30t%2Bo6Db2KLFa6Z2tm0zxsxrmevH5lDSVR7uV1oXdEb1jIxC7s2HRQ5Yd9y4IH4RSVisEI13f%2BPRkY5xy%2F6kl2lQ9UEWrEArAOp16kcX3RQ3%2FZcGixgma2cHy8uyBRsicJuxeUH9C%2BPQfJjpACZJJmsIJmQqVao%2F%2FAxmLCw2mrMMen2M%2FnB8pQz5hpx5aupyZ6mfxA41NFiGdFDgf9yY3A64EG89xMQs2LuI%2F6ltvHusys%2BkjwJtramnvlGPE0WnupU4U%2BXb7kTy%2FedXelXyZNLFC1P69SS5MF5K9TFR5z1C73Zj4g1HyHilGR4Caboq6yK2EYbmejRDa1wpOkHgusxPQJ%2FGwt12KOjyEmh3kCnHaCl1PP8ABE6oMKH8S3LbnJdT84mGZYm6owATJmkhQw2NwiPRawz2NVvThJb9jeDSfOubrXMlOiebkxkn1RfL70j%2BFLDdtG4F7YJFoWajhMPLenL8GOqUBVpUW1FUmoxxoCLzEphIDoLvay1lNzRhF%2B6Ek7vmK0cVhMUNd34eYcnWLS4Mnz9ok%2BEDMYm8AiXXc5QAeSATGU54kbM39OIVEFRtPbkg%2Fr7YVhAssxrkUQxB4%2F8JtnUukegIH8p0wOjx4LterERD%2BrOu1KLwLcW%2B7wkBGDi%2BLhAFQ5l8HsJGHMJVlFUd9Zbjb6rGZnYH8v8%2BtF4ArTbxLNloJT0Bn&X-Amz-Signature=4c5523f40f91e1cc555c7153ec9134a8729520549294115d001ded062bb6e684&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

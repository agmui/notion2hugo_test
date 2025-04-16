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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAAFI2P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Om%2FnftdKipxMdk1NZmzM0rwnVnw0zeZm2t%2FGJqWc5QIhAPky6Cc0go0p9pPJ3H8k%2BK5dK4AWcswEbUcO2h4zElVuKv8DCD4QABoMNjM3NDIzMTgzODA1Igz8cw5tN6MMVHmCvbQq3AOCPxqKFHwFt45YOOprWUceo%2FnMyaEkgXNXwm0wkUqy0LT64QE1CoCgawrYknIUFPd8AXfNTjNagquZ0PEA9%2FcK8I8fluPYrPXsJJvSaOkYNBGuut9Et4O4Z71KTGs7q52ufYV2Aq6BmlIbWkUaLre7DFaAOxPQ3kIhOyN7U%2FodDE9XpFequJ2uxyjr09KtbPdKGpl0VSBLe1yxRS1T2RoXBYNdLgmM0OX33l8GqilqIOmvHE1PboHelVWMrkVJc4OIBpbj6LQfOxDs5US9%2BOtMzXrTQG5xKOPsAN8CeyrHmSoquOEZIGfbyqfuy7ALjfLK6spfAEM1WwM0YqC9g4KsaU46urGGGwIEVQoM%2BKsrlqZt6m0Exaz37lmjykQAkgxI1dqE9uDs6rO0v95mp9YX8jFJkmCHhW2hQ%2BzSMXI5MH6stkqqLMS2MmMLWUeFUPUL7heQ6%2BIq0uLK263jM1jEaPB10BTnUg8jrjurQ8wmFE%2BhQChKn%2FlGXQbYm3wWpFrWySZUUImnc78qAREqC035HrCm%2FFjj8va%2FA4bPRD40oyi0uzPMatTNo6BYFRKkZXnYVpnUFYVx83wOxuSmp6o9%2BgmzBjcAtSmsDob8is%2FLwZbBLXQEWs8%2B422ZNDCH8fy%2FBjqkAejOos9oNGy0X6M9bwqdTkNyKU6E6BypXAfM5hhxegSrQsQK%2FK2v7ma8O9P4kmr5tguJxIIM6gNk7zntA8CNNTyUnBFxeutgnXIbND71grXZiQEPWUCT1oyb%2B6zdFXFDykxWzm1SpAgNEiIn8MmZwc70KmQl8VxzlFfnixNSpcUQwaUeLy2IK7TitAMGGovD7dOuWKHUnTgNpp4JYBJDjk0fSkXO&X-Amz-Signature=816a000b72740b2c63a2f67a4ec6d4d9dcd808848d28163b3c5d48d5167a2ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAAFI2P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Om%2FnftdKipxMdk1NZmzM0rwnVnw0zeZm2t%2FGJqWc5QIhAPky6Cc0go0p9pPJ3H8k%2BK5dK4AWcswEbUcO2h4zElVuKv8DCD4QABoMNjM3NDIzMTgzODA1Igz8cw5tN6MMVHmCvbQq3AOCPxqKFHwFt45YOOprWUceo%2FnMyaEkgXNXwm0wkUqy0LT64QE1CoCgawrYknIUFPd8AXfNTjNagquZ0PEA9%2FcK8I8fluPYrPXsJJvSaOkYNBGuut9Et4O4Z71KTGs7q52ufYV2Aq6BmlIbWkUaLre7DFaAOxPQ3kIhOyN7U%2FodDE9XpFequJ2uxyjr09KtbPdKGpl0VSBLe1yxRS1T2RoXBYNdLgmM0OX33l8GqilqIOmvHE1PboHelVWMrkVJc4OIBpbj6LQfOxDs5US9%2BOtMzXrTQG5xKOPsAN8CeyrHmSoquOEZIGfbyqfuy7ALjfLK6spfAEM1WwM0YqC9g4KsaU46urGGGwIEVQoM%2BKsrlqZt6m0Exaz37lmjykQAkgxI1dqE9uDs6rO0v95mp9YX8jFJkmCHhW2hQ%2BzSMXI5MH6stkqqLMS2MmMLWUeFUPUL7heQ6%2BIq0uLK263jM1jEaPB10BTnUg8jrjurQ8wmFE%2BhQChKn%2FlGXQbYm3wWpFrWySZUUImnc78qAREqC035HrCm%2FFjj8va%2FA4bPRD40oyi0uzPMatTNo6BYFRKkZXnYVpnUFYVx83wOxuSmp6o9%2BgmzBjcAtSmsDob8is%2FLwZbBLXQEWs8%2B422ZNDCH8fy%2FBjqkAejOos9oNGy0X6M9bwqdTkNyKU6E6BypXAfM5hhxegSrQsQK%2FK2v7ma8O9P4kmr5tguJxIIM6gNk7zntA8CNNTyUnBFxeutgnXIbND71grXZiQEPWUCT1oyb%2B6zdFXFDykxWzm1SpAgNEiIn8MmZwc70KmQl8VxzlFfnixNSpcUQwaUeLy2IK7TitAMGGovD7dOuWKHUnTgNpp4JYBJDjk0fSkXO&X-Amz-Signature=d137b82931a7d8c4899fa0cec8bda5ab00b5ec307827ab0a4c704573a45e8daa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAAFI2P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Om%2FnftdKipxMdk1NZmzM0rwnVnw0zeZm2t%2FGJqWc5QIhAPky6Cc0go0p9pPJ3H8k%2BK5dK4AWcswEbUcO2h4zElVuKv8DCD4QABoMNjM3NDIzMTgzODA1Igz8cw5tN6MMVHmCvbQq3AOCPxqKFHwFt45YOOprWUceo%2FnMyaEkgXNXwm0wkUqy0LT64QE1CoCgawrYknIUFPd8AXfNTjNagquZ0PEA9%2FcK8I8fluPYrPXsJJvSaOkYNBGuut9Et4O4Z71KTGs7q52ufYV2Aq6BmlIbWkUaLre7DFaAOxPQ3kIhOyN7U%2FodDE9XpFequJ2uxyjr09KtbPdKGpl0VSBLe1yxRS1T2RoXBYNdLgmM0OX33l8GqilqIOmvHE1PboHelVWMrkVJc4OIBpbj6LQfOxDs5US9%2BOtMzXrTQG5xKOPsAN8CeyrHmSoquOEZIGfbyqfuy7ALjfLK6spfAEM1WwM0YqC9g4KsaU46urGGGwIEVQoM%2BKsrlqZt6m0Exaz37lmjykQAkgxI1dqE9uDs6rO0v95mp9YX8jFJkmCHhW2hQ%2BzSMXI5MH6stkqqLMS2MmMLWUeFUPUL7heQ6%2BIq0uLK263jM1jEaPB10BTnUg8jrjurQ8wmFE%2BhQChKn%2FlGXQbYm3wWpFrWySZUUImnc78qAREqC035HrCm%2FFjj8va%2FA4bPRD40oyi0uzPMatTNo6BYFRKkZXnYVpnUFYVx83wOxuSmp6o9%2BgmzBjcAtSmsDob8is%2FLwZbBLXQEWs8%2B422ZNDCH8fy%2FBjqkAejOos9oNGy0X6M9bwqdTkNyKU6E6BypXAfM5hhxegSrQsQK%2FK2v7ma8O9P4kmr5tguJxIIM6gNk7zntA8CNNTyUnBFxeutgnXIbND71grXZiQEPWUCT1oyb%2B6zdFXFDykxWzm1SpAgNEiIn8MmZwc70KmQl8VxzlFfnixNSpcUQwaUeLy2IK7TitAMGGovD7dOuWKHUnTgNpp4JYBJDjk0fSkXO&X-Amz-Signature=d12fdc51bc1ced8b5c01474813c88ed39c8096c86d8eb7cdbc9a95a59beac12a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAAFI2P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Om%2FnftdKipxMdk1NZmzM0rwnVnw0zeZm2t%2FGJqWc5QIhAPky6Cc0go0p9pPJ3H8k%2BK5dK4AWcswEbUcO2h4zElVuKv8DCD4QABoMNjM3NDIzMTgzODA1Igz8cw5tN6MMVHmCvbQq3AOCPxqKFHwFt45YOOprWUceo%2FnMyaEkgXNXwm0wkUqy0LT64QE1CoCgawrYknIUFPd8AXfNTjNagquZ0PEA9%2FcK8I8fluPYrPXsJJvSaOkYNBGuut9Et4O4Z71KTGs7q52ufYV2Aq6BmlIbWkUaLre7DFaAOxPQ3kIhOyN7U%2FodDE9XpFequJ2uxyjr09KtbPdKGpl0VSBLe1yxRS1T2RoXBYNdLgmM0OX33l8GqilqIOmvHE1PboHelVWMrkVJc4OIBpbj6LQfOxDs5US9%2BOtMzXrTQG5xKOPsAN8CeyrHmSoquOEZIGfbyqfuy7ALjfLK6spfAEM1WwM0YqC9g4KsaU46urGGGwIEVQoM%2BKsrlqZt6m0Exaz37lmjykQAkgxI1dqE9uDs6rO0v95mp9YX8jFJkmCHhW2hQ%2BzSMXI5MH6stkqqLMS2MmMLWUeFUPUL7heQ6%2BIq0uLK263jM1jEaPB10BTnUg8jrjurQ8wmFE%2BhQChKn%2FlGXQbYm3wWpFrWySZUUImnc78qAREqC035HrCm%2FFjj8va%2FA4bPRD40oyi0uzPMatTNo6BYFRKkZXnYVpnUFYVx83wOxuSmp6o9%2BgmzBjcAtSmsDob8is%2FLwZbBLXQEWs8%2B422ZNDCH8fy%2FBjqkAejOos9oNGy0X6M9bwqdTkNyKU6E6BypXAfM5hhxegSrQsQK%2FK2v7ma8O9P4kmr5tguJxIIM6gNk7zntA8CNNTyUnBFxeutgnXIbND71grXZiQEPWUCT1oyb%2B6zdFXFDykxWzm1SpAgNEiIn8MmZwc70KmQl8VxzlFfnixNSpcUQwaUeLy2IK7TitAMGGovD7dOuWKHUnTgNpp4JYBJDjk0fSkXO&X-Amz-Signature=4f67f37078fb26c5f498187df3f515cf276b72ef110d47fddee8a590b6935e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAAFI2P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Om%2FnftdKipxMdk1NZmzM0rwnVnw0zeZm2t%2FGJqWc5QIhAPky6Cc0go0p9pPJ3H8k%2BK5dK4AWcswEbUcO2h4zElVuKv8DCD4QABoMNjM3NDIzMTgzODA1Igz8cw5tN6MMVHmCvbQq3AOCPxqKFHwFt45YOOprWUceo%2FnMyaEkgXNXwm0wkUqy0LT64QE1CoCgawrYknIUFPd8AXfNTjNagquZ0PEA9%2FcK8I8fluPYrPXsJJvSaOkYNBGuut9Et4O4Z71KTGs7q52ufYV2Aq6BmlIbWkUaLre7DFaAOxPQ3kIhOyN7U%2FodDE9XpFequJ2uxyjr09KtbPdKGpl0VSBLe1yxRS1T2RoXBYNdLgmM0OX33l8GqilqIOmvHE1PboHelVWMrkVJc4OIBpbj6LQfOxDs5US9%2BOtMzXrTQG5xKOPsAN8CeyrHmSoquOEZIGfbyqfuy7ALjfLK6spfAEM1WwM0YqC9g4KsaU46urGGGwIEVQoM%2BKsrlqZt6m0Exaz37lmjykQAkgxI1dqE9uDs6rO0v95mp9YX8jFJkmCHhW2hQ%2BzSMXI5MH6stkqqLMS2MmMLWUeFUPUL7heQ6%2BIq0uLK263jM1jEaPB10BTnUg8jrjurQ8wmFE%2BhQChKn%2FlGXQbYm3wWpFrWySZUUImnc78qAREqC035HrCm%2FFjj8va%2FA4bPRD40oyi0uzPMatTNo6BYFRKkZXnYVpnUFYVx83wOxuSmp6o9%2BgmzBjcAtSmsDob8is%2FLwZbBLXQEWs8%2B422ZNDCH8fy%2FBjqkAejOos9oNGy0X6M9bwqdTkNyKU6E6BypXAfM5hhxegSrQsQK%2FK2v7ma8O9P4kmr5tguJxIIM6gNk7zntA8CNNTyUnBFxeutgnXIbND71grXZiQEPWUCT1oyb%2B6zdFXFDykxWzm1SpAgNEiIn8MmZwc70KmQl8VxzlFfnixNSpcUQwaUeLy2IK7TitAMGGovD7dOuWKHUnTgNpp4JYBJDjk0fSkXO&X-Amz-Signature=25effa06b09d033fe6e6fbb545d6165ce427a5f7fbba27de4e8e1ce552092f87&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAAFI2P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Om%2FnftdKipxMdk1NZmzM0rwnVnw0zeZm2t%2FGJqWc5QIhAPky6Cc0go0p9pPJ3H8k%2BK5dK4AWcswEbUcO2h4zElVuKv8DCD4QABoMNjM3NDIzMTgzODA1Igz8cw5tN6MMVHmCvbQq3AOCPxqKFHwFt45YOOprWUceo%2FnMyaEkgXNXwm0wkUqy0LT64QE1CoCgawrYknIUFPd8AXfNTjNagquZ0PEA9%2FcK8I8fluPYrPXsJJvSaOkYNBGuut9Et4O4Z71KTGs7q52ufYV2Aq6BmlIbWkUaLre7DFaAOxPQ3kIhOyN7U%2FodDE9XpFequJ2uxyjr09KtbPdKGpl0VSBLe1yxRS1T2RoXBYNdLgmM0OX33l8GqilqIOmvHE1PboHelVWMrkVJc4OIBpbj6LQfOxDs5US9%2BOtMzXrTQG5xKOPsAN8CeyrHmSoquOEZIGfbyqfuy7ALjfLK6spfAEM1WwM0YqC9g4KsaU46urGGGwIEVQoM%2BKsrlqZt6m0Exaz37lmjykQAkgxI1dqE9uDs6rO0v95mp9YX8jFJkmCHhW2hQ%2BzSMXI5MH6stkqqLMS2MmMLWUeFUPUL7heQ6%2BIq0uLK263jM1jEaPB10BTnUg8jrjurQ8wmFE%2BhQChKn%2FlGXQbYm3wWpFrWySZUUImnc78qAREqC035HrCm%2FFjj8va%2FA4bPRD40oyi0uzPMatTNo6BYFRKkZXnYVpnUFYVx83wOxuSmp6o9%2BgmzBjcAtSmsDob8is%2FLwZbBLXQEWs8%2B422ZNDCH8fy%2FBjqkAejOos9oNGy0X6M9bwqdTkNyKU6E6BypXAfM5hhxegSrQsQK%2FK2v7ma8O9P4kmr5tguJxIIM6gNk7zntA8CNNTyUnBFxeutgnXIbND71grXZiQEPWUCT1oyb%2B6zdFXFDykxWzm1SpAgNEiIn8MmZwc70KmQl8VxzlFfnixNSpcUQwaUeLy2IK7TitAMGGovD7dOuWKHUnTgNpp4JYBJDjk0fSkXO&X-Amz-Signature=ea6ede6623031e685541feb98343cbb5d6874aef7f2579419c2ddeba0d9956d2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAAFI2P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Om%2FnftdKipxMdk1NZmzM0rwnVnw0zeZm2t%2FGJqWc5QIhAPky6Cc0go0p9pPJ3H8k%2BK5dK4AWcswEbUcO2h4zElVuKv8DCD4QABoMNjM3NDIzMTgzODA1Igz8cw5tN6MMVHmCvbQq3AOCPxqKFHwFt45YOOprWUceo%2FnMyaEkgXNXwm0wkUqy0LT64QE1CoCgawrYknIUFPd8AXfNTjNagquZ0PEA9%2FcK8I8fluPYrPXsJJvSaOkYNBGuut9Et4O4Z71KTGs7q52ufYV2Aq6BmlIbWkUaLre7DFaAOxPQ3kIhOyN7U%2FodDE9XpFequJ2uxyjr09KtbPdKGpl0VSBLe1yxRS1T2RoXBYNdLgmM0OX33l8GqilqIOmvHE1PboHelVWMrkVJc4OIBpbj6LQfOxDs5US9%2BOtMzXrTQG5xKOPsAN8CeyrHmSoquOEZIGfbyqfuy7ALjfLK6spfAEM1WwM0YqC9g4KsaU46urGGGwIEVQoM%2BKsrlqZt6m0Exaz37lmjykQAkgxI1dqE9uDs6rO0v95mp9YX8jFJkmCHhW2hQ%2BzSMXI5MH6stkqqLMS2MmMLWUeFUPUL7heQ6%2BIq0uLK263jM1jEaPB10BTnUg8jrjurQ8wmFE%2BhQChKn%2FlGXQbYm3wWpFrWySZUUImnc78qAREqC035HrCm%2FFjj8va%2FA4bPRD40oyi0uzPMatTNo6BYFRKkZXnYVpnUFYVx83wOxuSmp6o9%2BgmzBjcAtSmsDob8is%2FLwZbBLXQEWs8%2B422ZNDCH8fy%2FBjqkAejOos9oNGy0X6M9bwqdTkNyKU6E6BypXAfM5hhxegSrQsQK%2FK2v7ma8O9P4kmr5tguJxIIM6gNk7zntA8CNNTyUnBFxeutgnXIbND71grXZiQEPWUCT1oyb%2B6zdFXFDykxWzm1SpAgNEiIn8MmZwc70KmQl8VxzlFfnixNSpcUQwaUeLy2IK7TitAMGGovD7dOuWKHUnTgNpp4JYBJDjk0fSkXO&X-Amz-Signature=7a3af09feebcb041ee529e263e84dc48d2a56452b26593a16d917e80972d8886&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

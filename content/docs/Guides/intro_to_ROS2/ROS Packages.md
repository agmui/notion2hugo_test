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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ZR34ZW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAEzKqN5eiYIiKvZtxkCa8u2%2FRmEQhrqQQqLJQQ6voQAIhAK4WIsZH8SBOzwt6FJIgcJ9VA5qeF9FgcZPkbDsuh%2FkDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwql7oPj8iQ9nilcVMq3AMKDpntfsu7cDV22uQ8%2BmrdInwxSqlcNOJdKAHWi12cPc3GSsbpWZb07cH3GJG2FtAXdUCxs2GrGKWBCFDuIBWsfMpJScZiC0yV9rpVN295mQRh4l5XOmQdKSW8l1lYx%2F81eai58LI%2Bqw1Xd3h56LhBe9c29R8NvamOcrne7ShIhxCWXxiKEjW%2Ft%2BzewUbga9UEKs7Fm7S2EHN8r4nMeLjm2tfa1Xup8%2BeBTsCjQBzRaKrn8sCRSvdimRoP5xH8Wmms4aq7rLfvFbWXyw9QbRsPW%2FdX5V1WwuIKZwghFtQxP7VOzZun3qhZeWl%2FCOVbNta1Hsj4t16Ls3LgpJm%2F89iKuN7IkbuqUpCZQfFCJn95s1O04dK6N1m%2B53eJFVxGsvHubJaALq9V3KfsVOhBkUsXD25%2FIL%2FG7C%2B2t3Bqq%2F5E6QUXN1OnzvluwilR2p32aSOgzSa3DyX1W6JmJxIgJTnG8k6t7btuUnXNYzxWtlV9KziSQqn5v1a6aEWHe8xM1Y46I63SSg4rrwrcv6qp%2BT3Hhlv%2BnYKHmj7RjtHSy24hWbQhgqrrXtcBUuOoEOH0uU3sc8zDASSl6TnsO%2F1zXcbB1w7qaV6QSN0D%2FlWVKHj0yc9Acdqn8Ner65YykDDz4v2%2BBjqkAay0hffZbslJIbcc575iIHrD%2BBcQCl%2Bmj3thO1zmorGOpEksFD3wXbXDV52SLhppuGA7n%2F%2FmcuBUhpY6u5zoK%2FUoeW%2B0bdLwltuwCQov8v38momerYe%2Fm3kRBhWne9DdkJUWKIm%2B0BG5WrDO7wt2VEDedYO2w58o508OwzPAMM7HDahfS1ma3hF88BrxBx5r0zKX6mudlzIDLLHOm200fiOcNq1J&X-Amz-Signature=62dd0f78fd785bdac6a2b721d1bec149ed5fc4bbfb7af891b68bbe0881b66a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ZR34ZW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAEzKqN5eiYIiKvZtxkCa8u2%2FRmEQhrqQQqLJQQ6voQAIhAK4WIsZH8SBOzwt6FJIgcJ9VA5qeF9FgcZPkbDsuh%2FkDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwql7oPj8iQ9nilcVMq3AMKDpntfsu7cDV22uQ8%2BmrdInwxSqlcNOJdKAHWi12cPc3GSsbpWZb07cH3GJG2FtAXdUCxs2GrGKWBCFDuIBWsfMpJScZiC0yV9rpVN295mQRh4l5XOmQdKSW8l1lYx%2F81eai58LI%2Bqw1Xd3h56LhBe9c29R8NvamOcrne7ShIhxCWXxiKEjW%2Ft%2BzewUbga9UEKs7Fm7S2EHN8r4nMeLjm2tfa1Xup8%2BeBTsCjQBzRaKrn8sCRSvdimRoP5xH8Wmms4aq7rLfvFbWXyw9QbRsPW%2FdX5V1WwuIKZwghFtQxP7VOzZun3qhZeWl%2FCOVbNta1Hsj4t16Ls3LgpJm%2F89iKuN7IkbuqUpCZQfFCJn95s1O04dK6N1m%2B53eJFVxGsvHubJaALq9V3KfsVOhBkUsXD25%2FIL%2FG7C%2B2t3Bqq%2F5E6QUXN1OnzvluwilR2p32aSOgzSa3DyX1W6JmJxIgJTnG8k6t7btuUnXNYzxWtlV9KziSQqn5v1a6aEWHe8xM1Y46I63SSg4rrwrcv6qp%2BT3Hhlv%2BnYKHmj7RjtHSy24hWbQhgqrrXtcBUuOoEOH0uU3sc8zDASSl6TnsO%2F1zXcbB1w7qaV6QSN0D%2FlWVKHj0yc9Acdqn8Ner65YykDDz4v2%2BBjqkAay0hffZbslJIbcc575iIHrD%2BBcQCl%2Bmj3thO1zmorGOpEksFD3wXbXDV52SLhppuGA7n%2F%2FmcuBUhpY6u5zoK%2FUoeW%2B0bdLwltuwCQov8v38momerYe%2Fm3kRBhWne9DdkJUWKIm%2B0BG5WrDO7wt2VEDedYO2w58o508OwzPAMM7HDahfS1ma3hF88BrxBx5r0zKX6mudlzIDLLHOm200fiOcNq1J&X-Amz-Signature=c30b630ff10bb7d63b6a5cb003d98db0ea09d0d1076c206a9231b8b6d4c8f688&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ZR34ZW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAEzKqN5eiYIiKvZtxkCa8u2%2FRmEQhrqQQqLJQQ6voQAIhAK4WIsZH8SBOzwt6FJIgcJ9VA5qeF9FgcZPkbDsuh%2FkDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwql7oPj8iQ9nilcVMq3AMKDpntfsu7cDV22uQ8%2BmrdInwxSqlcNOJdKAHWi12cPc3GSsbpWZb07cH3GJG2FtAXdUCxs2GrGKWBCFDuIBWsfMpJScZiC0yV9rpVN295mQRh4l5XOmQdKSW8l1lYx%2F81eai58LI%2Bqw1Xd3h56LhBe9c29R8NvamOcrne7ShIhxCWXxiKEjW%2Ft%2BzewUbga9UEKs7Fm7S2EHN8r4nMeLjm2tfa1Xup8%2BeBTsCjQBzRaKrn8sCRSvdimRoP5xH8Wmms4aq7rLfvFbWXyw9QbRsPW%2FdX5V1WwuIKZwghFtQxP7VOzZun3qhZeWl%2FCOVbNta1Hsj4t16Ls3LgpJm%2F89iKuN7IkbuqUpCZQfFCJn95s1O04dK6N1m%2B53eJFVxGsvHubJaALq9V3KfsVOhBkUsXD25%2FIL%2FG7C%2B2t3Bqq%2F5E6QUXN1OnzvluwilR2p32aSOgzSa3DyX1W6JmJxIgJTnG8k6t7btuUnXNYzxWtlV9KziSQqn5v1a6aEWHe8xM1Y46I63SSg4rrwrcv6qp%2BT3Hhlv%2BnYKHmj7RjtHSy24hWbQhgqrrXtcBUuOoEOH0uU3sc8zDASSl6TnsO%2F1zXcbB1w7qaV6QSN0D%2FlWVKHj0yc9Acdqn8Ner65YykDDz4v2%2BBjqkAay0hffZbslJIbcc575iIHrD%2BBcQCl%2Bmj3thO1zmorGOpEksFD3wXbXDV52SLhppuGA7n%2F%2FmcuBUhpY6u5zoK%2FUoeW%2B0bdLwltuwCQov8v38momerYe%2Fm3kRBhWne9DdkJUWKIm%2B0BG5WrDO7wt2VEDedYO2w58o508OwzPAMM7HDahfS1ma3hF88BrxBx5r0zKX6mudlzIDLLHOm200fiOcNq1J&X-Amz-Signature=492c761f13ace99a8db78bed4f2bd1f95af9383cc1ad3dbcee4b269e7a95505d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ZR34ZW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAEzKqN5eiYIiKvZtxkCa8u2%2FRmEQhrqQQqLJQQ6voQAIhAK4WIsZH8SBOzwt6FJIgcJ9VA5qeF9FgcZPkbDsuh%2FkDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwql7oPj8iQ9nilcVMq3AMKDpntfsu7cDV22uQ8%2BmrdInwxSqlcNOJdKAHWi12cPc3GSsbpWZb07cH3GJG2FtAXdUCxs2GrGKWBCFDuIBWsfMpJScZiC0yV9rpVN295mQRh4l5XOmQdKSW8l1lYx%2F81eai58LI%2Bqw1Xd3h56LhBe9c29R8NvamOcrne7ShIhxCWXxiKEjW%2Ft%2BzewUbga9UEKs7Fm7S2EHN8r4nMeLjm2tfa1Xup8%2BeBTsCjQBzRaKrn8sCRSvdimRoP5xH8Wmms4aq7rLfvFbWXyw9QbRsPW%2FdX5V1WwuIKZwghFtQxP7VOzZun3qhZeWl%2FCOVbNta1Hsj4t16Ls3LgpJm%2F89iKuN7IkbuqUpCZQfFCJn95s1O04dK6N1m%2B53eJFVxGsvHubJaALq9V3KfsVOhBkUsXD25%2FIL%2FG7C%2B2t3Bqq%2F5E6QUXN1OnzvluwilR2p32aSOgzSa3DyX1W6JmJxIgJTnG8k6t7btuUnXNYzxWtlV9KziSQqn5v1a6aEWHe8xM1Y46I63SSg4rrwrcv6qp%2BT3Hhlv%2BnYKHmj7RjtHSy24hWbQhgqrrXtcBUuOoEOH0uU3sc8zDASSl6TnsO%2F1zXcbB1w7qaV6QSN0D%2FlWVKHj0yc9Acdqn8Ner65YykDDz4v2%2BBjqkAay0hffZbslJIbcc575iIHrD%2BBcQCl%2Bmj3thO1zmorGOpEksFD3wXbXDV52SLhppuGA7n%2F%2FmcuBUhpY6u5zoK%2FUoeW%2B0bdLwltuwCQov8v38momerYe%2Fm3kRBhWne9DdkJUWKIm%2B0BG5WrDO7wt2VEDedYO2w58o508OwzPAMM7HDahfS1ma3hF88BrxBx5r0zKX6mudlzIDLLHOm200fiOcNq1J&X-Amz-Signature=783155fae87ccc6c760241689eb5e4aeac84397e22d208e801ce677e2ec85956&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ZR34ZW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAEzKqN5eiYIiKvZtxkCa8u2%2FRmEQhrqQQqLJQQ6voQAIhAK4WIsZH8SBOzwt6FJIgcJ9VA5qeF9FgcZPkbDsuh%2FkDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwql7oPj8iQ9nilcVMq3AMKDpntfsu7cDV22uQ8%2BmrdInwxSqlcNOJdKAHWi12cPc3GSsbpWZb07cH3GJG2FtAXdUCxs2GrGKWBCFDuIBWsfMpJScZiC0yV9rpVN295mQRh4l5XOmQdKSW8l1lYx%2F81eai58LI%2Bqw1Xd3h56LhBe9c29R8NvamOcrne7ShIhxCWXxiKEjW%2Ft%2BzewUbga9UEKs7Fm7S2EHN8r4nMeLjm2tfa1Xup8%2BeBTsCjQBzRaKrn8sCRSvdimRoP5xH8Wmms4aq7rLfvFbWXyw9QbRsPW%2FdX5V1WwuIKZwghFtQxP7VOzZun3qhZeWl%2FCOVbNta1Hsj4t16Ls3LgpJm%2F89iKuN7IkbuqUpCZQfFCJn95s1O04dK6N1m%2B53eJFVxGsvHubJaALq9V3KfsVOhBkUsXD25%2FIL%2FG7C%2B2t3Bqq%2F5E6QUXN1OnzvluwilR2p32aSOgzSa3DyX1W6JmJxIgJTnG8k6t7btuUnXNYzxWtlV9KziSQqn5v1a6aEWHe8xM1Y46I63SSg4rrwrcv6qp%2BT3Hhlv%2BnYKHmj7RjtHSy24hWbQhgqrrXtcBUuOoEOH0uU3sc8zDASSl6TnsO%2F1zXcbB1w7qaV6QSN0D%2FlWVKHj0yc9Acdqn8Ner65YykDDz4v2%2BBjqkAay0hffZbslJIbcc575iIHrD%2BBcQCl%2Bmj3thO1zmorGOpEksFD3wXbXDV52SLhppuGA7n%2F%2FmcuBUhpY6u5zoK%2FUoeW%2B0bdLwltuwCQov8v38momerYe%2Fm3kRBhWne9DdkJUWKIm%2B0BG5WrDO7wt2VEDedYO2w58o508OwzPAMM7HDahfS1ma3hF88BrxBx5r0zKX6mudlzIDLLHOm200fiOcNq1J&X-Amz-Signature=959a0371045c8a84120a4b18db53902fb7eeb7fea7f5baabac26ecf1bd4cb53f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ZR34ZW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAEzKqN5eiYIiKvZtxkCa8u2%2FRmEQhrqQQqLJQQ6voQAIhAK4WIsZH8SBOzwt6FJIgcJ9VA5qeF9FgcZPkbDsuh%2FkDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwql7oPj8iQ9nilcVMq3AMKDpntfsu7cDV22uQ8%2BmrdInwxSqlcNOJdKAHWi12cPc3GSsbpWZb07cH3GJG2FtAXdUCxs2GrGKWBCFDuIBWsfMpJScZiC0yV9rpVN295mQRh4l5XOmQdKSW8l1lYx%2F81eai58LI%2Bqw1Xd3h56LhBe9c29R8NvamOcrne7ShIhxCWXxiKEjW%2Ft%2BzewUbga9UEKs7Fm7S2EHN8r4nMeLjm2tfa1Xup8%2BeBTsCjQBzRaKrn8sCRSvdimRoP5xH8Wmms4aq7rLfvFbWXyw9QbRsPW%2FdX5V1WwuIKZwghFtQxP7VOzZun3qhZeWl%2FCOVbNta1Hsj4t16Ls3LgpJm%2F89iKuN7IkbuqUpCZQfFCJn95s1O04dK6N1m%2B53eJFVxGsvHubJaALq9V3KfsVOhBkUsXD25%2FIL%2FG7C%2B2t3Bqq%2F5E6QUXN1OnzvluwilR2p32aSOgzSa3DyX1W6JmJxIgJTnG8k6t7btuUnXNYzxWtlV9KziSQqn5v1a6aEWHe8xM1Y46I63SSg4rrwrcv6qp%2BT3Hhlv%2BnYKHmj7RjtHSy24hWbQhgqrrXtcBUuOoEOH0uU3sc8zDASSl6TnsO%2F1zXcbB1w7qaV6QSN0D%2FlWVKHj0yc9Acdqn8Ner65YykDDz4v2%2BBjqkAay0hffZbslJIbcc575iIHrD%2BBcQCl%2Bmj3thO1zmorGOpEksFD3wXbXDV52SLhppuGA7n%2F%2FmcuBUhpY6u5zoK%2FUoeW%2B0bdLwltuwCQov8v38momerYe%2Fm3kRBhWne9DdkJUWKIm%2B0BG5WrDO7wt2VEDedYO2w58o508OwzPAMM7HDahfS1ma3hF88BrxBx5r0zKX6mudlzIDLLHOm200fiOcNq1J&X-Amz-Signature=0688cf6e27c75961d552e6b91adf45087af5ccc4f2e9156310e7552f9619db7f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ZR34ZW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAEzKqN5eiYIiKvZtxkCa8u2%2FRmEQhrqQQqLJQQ6voQAIhAK4WIsZH8SBOzwt6FJIgcJ9VA5qeF9FgcZPkbDsuh%2FkDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwql7oPj8iQ9nilcVMq3AMKDpntfsu7cDV22uQ8%2BmrdInwxSqlcNOJdKAHWi12cPc3GSsbpWZb07cH3GJG2FtAXdUCxs2GrGKWBCFDuIBWsfMpJScZiC0yV9rpVN295mQRh4l5XOmQdKSW8l1lYx%2F81eai58LI%2Bqw1Xd3h56LhBe9c29R8NvamOcrne7ShIhxCWXxiKEjW%2Ft%2BzewUbga9UEKs7Fm7S2EHN8r4nMeLjm2tfa1Xup8%2BeBTsCjQBzRaKrn8sCRSvdimRoP5xH8Wmms4aq7rLfvFbWXyw9QbRsPW%2FdX5V1WwuIKZwghFtQxP7VOzZun3qhZeWl%2FCOVbNta1Hsj4t16Ls3LgpJm%2F89iKuN7IkbuqUpCZQfFCJn95s1O04dK6N1m%2B53eJFVxGsvHubJaALq9V3KfsVOhBkUsXD25%2FIL%2FG7C%2B2t3Bqq%2F5E6QUXN1OnzvluwilR2p32aSOgzSa3DyX1W6JmJxIgJTnG8k6t7btuUnXNYzxWtlV9KziSQqn5v1a6aEWHe8xM1Y46I63SSg4rrwrcv6qp%2BT3Hhlv%2BnYKHmj7RjtHSy24hWbQhgqrrXtcBUuOoEOH0uU3sc8zDASSl6TnsO%2F1zXcbB1w7qaV6QSN0D%2FlWVKHj0yc9Acdqn8Ner65YykDDz4v2%2BBjqkAay0hffZbslJIbcc575iIHrD%2BBcQCl%2Bmj3thO1zmorGOpEksFD3wXbXDV52SLhppuGA7n%2F%2FmcuBUhpY6u5zoK%2FUoeW%2B0bdLwltuwCQov8v38momerYe%2Fm3kRBhWne9DdkJUWKIm%2B0BG5WrDO7wt2VEDedYO2w58o508OwzPAMM7HDahfS1ma3hF88BrxBx5r0zKX6mudlzIDLLHOm200fiOcNq1J&X-Amz-Signature=ab594833ac75930226c67da89d6ae05af001418cfcb979bf5bde131fe813a96c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

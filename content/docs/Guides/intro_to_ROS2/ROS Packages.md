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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6LRSB3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDOCFHAq7PiG1Lxwn2X3ahg%2BF%2BsbUwX1KgLVyGGtVAvaQIgKHKDEejlg%2F%2Fynk%2FMW5Ayk7rsV%2FeuN5dY3TuCJ1En5eAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMOhFlUK9U3FDuhWgCrcA%2BcS2%2FCt9cLQ5Z9I0N92QQiI8hakzOPeqdxjkLVHyCJ9ynkRe8lk4KSIt%2Fl8TZ1HTFd%2FwaYtZzvhcuzY4PEp5sgnoCyM2IOzhHu4EbRbKVlxlEB%2FXKjmTwz0dFGmRU9Ti9YD8f%2BBN8JTazBFJrPka151KP2lL0nxINdQh0HNtEjXJOwUlk%2FvLrKYeTR9qke3BXJRMgPGRT8yizNHFlPPArQZghIEyhCTE%2FVdCNYhxpSO1pFMNlNv7c2iJ98g5JYRxLh4uMzxcYaQ9rWVOsqnJSmvXsJiHHqhDl6qcWEEoA5IdSWtVO9ER0QyHDYZq9zl5K0zbNbTyRmlH5zQGgmu1gKF%2BMr%2FdK3pFUtzjg81E34duI54gXskxYq4ZQ3PHJiBqc1ltQc%2BiTkPWNSYDV%2FyzA3l0mZzg2WtixRWBb%2FRIy5QuBJnm8%2B4x%2F18rz3JvbtXzjtsJ5i%2BfvKZNx7RrhWq6LiTUs0bVr3i5qNpEonCJEAhaVXR9jqaOLvy9hfDsh%2FqCK8AW6wXgTd9lLQ8Q152jRlXfOyVBOmga1xIp84pEMYUeovC0fLWl2OLvZRsDoePlqZh%2F3g76Mz1AfmRzMoLX2EtCU%2FdF1SqgDjeMRX0uu3YeJmosxDjLzy63ZhpMP2egMIGOqUBcg2qG8jCRjx45o%2Fb%2BKLO7%2F4RBUD2CCMPseTUHbokoTf5M9O2nTPw%2Ff0vauKzQhuUCZpD0XIMLaGhnQPeA4jWXrW2FTeKRWVwTLlR3ah0FEC%2BKiCxdE4Frw%2BBmb1bXy2Rfyn9Gdl3A%2FWIcN%2BEiH88rnPjd7SrUjGBJ881W8IXw13aj9ODyX9AZPSgFLbimYOmfoodtAL2AY1laqJqc9H0DzeSGQmT&X-Amz-Signature=b7c9eaf954f77cfdaeea5c3a31409ed146d0e9bc633e7e1d95796987c8b0ff6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6LRSB3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDOCFHAq7PiG1Lxwn2X3ahg%2BF%2BsbUwX1KgLVyGGtVAvaQIgKHKDEejlg%2F%2Fynk%2FMW5Ayk7rsV%2FeuN5dY3TuCJ1En5eAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMOhFlUK9U3FDuhWgCrcA%2BcS2%2FCt9cLQ5Z9I0N92QQiI8hakzOPeqdxjkLVHyCJ9ynkRe8lk4KSIt%2Fl8TZ1HTFd%2FwaYtZzvhcuzY4PEp5sgnoCyM2IOzhHu4EbRbKVlxlEB%2FXKjmTwz0dFGmRU9Ti9YD8f%2BBN8JTazBFJrPka151KP2lL0nxINdQh0HNtEjXJOwUlk%2FvLrKYeTR9qke3BXJRMgPGRT8yizNHFlPPArQZghIEyhCTE%2FVdCNYhxpSO1pFMNlNv7c2iJ98g5JYRxLh4uMzxcYaQ9rWVOsqnJSmvXsJiHHqhDl6qcWEEoA5IdSWtVO9ER0QyHDYZq9zl5K0zbNbTyRmlH5zQGgmu1gKF%2BMr%2FdK3pFUtzjg81E34duI54gXskxYq4ZQ3PHJiBqc1ltQc%2BiTkPWNSYDV%2FyzA3l0mZzg2WtixRWBb%2FRIy5QuBJnm8%2B4x%2F18rz3JvbtXzjtsJ5i%2BfvKZNx7RrhWq6LiTUs0bVr3i5qNpEonCJEAhaVXR9jqaOLvy9hfDsh%2FqCK8AW6wXgTd9lLQ8Q152jRlXfOyVBOmga1xIp84pEMYUeovC0fLWl2OLvZRsDoePlqZh%2F3g76Mz1AfmRzMoLX2EtCU%2FdF1SqgDjeMRX0uu3YeJmosxDjLzy63ZhpMP2egMIGOqUBcg2qG8jCRjx45o%2Fb%2BKLO7%2F4RBUD2CCMPseTUHbokoTf5M9O2nTPw%2Ff0vauKzQhuUCZpD0XIMLaGhnQPeA4jWXrW2FTeKRWVwTLlR3ah0FEC%2BKiCxdE4Frw%2BBmb1bXy2Rfyn9Gdl3A%2FWIcN%2BEiH88rnPjd7SrUjGBJ881W8IXw13aj9ODyX9AZPSgFLbimYOmfoodtAL2AY1laqJqc9H0DzeSGQmT&X-Amz-Signature=10f937fdcbca5c3cc1ae8e4ae681bbeefc77709b4e2cd7e16dce57ab6487e64d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6LRSB3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDOCFHAq7PiG1Lxwn2X3ahg%2BF%2BsbUwX1KgLVyGGtVAvaQIgKHKDEejlg%2F%2Fynk%2FMW5Ayk7rsV%2FeuN5dY3TuCJ1En5eAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMOhFlUK9U3FDuhWgCrcA%2BcS2%2FCt9cLQ5Z9I0N92QQiI8hakzOPeqdxjkLVHyCJ9ynkRe8lk4KSIt%2Fl8TZ1HTFd%2FwaYtZzvhcuzY4PEp5sgnoCyM2IOzhHu4EbRbKVlxlEB%2FXKjmTwz0dFGmRU9Ti9YD8f%2BBN8JTazBFJrPka151KP2lL0nxINdQh0HNtEjXJOwUlk%2FvLrKYeTR9qke3BXJRMgPGRT8yizNHFlPPArQZghIEyhCTE%2FVdCNYhxpSO1pFMNlNv7c2iJ98g5JYRxLh4uMzxcYaQ9rWVOsqnJSmvXsJiHHqhDl6qcWEEoA5IdSWtVO9ER0QyHDYZq9zl5K0zbNbTyRmlH5zQGgmu1gKF%2BMr%2FdK3pFUtzjg81E34duI54gXskxYq4ZQ3PHJiBqc1ltQc%2BiTkPWNSYDV%2FyzA3l0mZzg2WtixRWBb%2FRIy5QuBJnm8%2B4x%2F18rz3JvbtXzjtsJ5i%2BfvKZNx7RrhWq6LiTUs0bVr3i5qNpEonCJEAhaVXR9jqaOLvy9hfDsh%2FqCK8AW6wXgTd9lLQ8Q152jRlXfOyVBOmga1xIp84pEMYUeovC0fLWl2OLvZRsDoePlqZh%2F3g76Mz1AfmRzMoLX2EtCU%2FdF1SqgDjeMRX0uu3YeJmosxDjLzy63ZhpMP2egMIGOqUBcg2qG8jCRjx45o%2Fb%2BKLO7%2F4RBUD2CCMPseTUHbokoTf5M9O2nTPw%2Ff0vauKzQhuUCZpD0XIMLaGhnQPeA4jWXrW2FTeKRWVwTLlR3ah0FEC%2BKiCxdE4Frw%2BBmb1bXy2Rfyn9Gdl3A%2FWIcN%2BEiH88rnPjd7SrUjGBJ881W8IXw13aj9ODyX9AZPSgFLbimYOmfoodtAL2AY1laqJqc9H0DzeSGQmT&X-Amz-Signature=9b7b71982a656767aef83bedb859d420ab4eb02f8beb7651739d6bb258c8bda2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6LRSB3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDOCFHAq7PiG1Lxwn2X3ahg%2BF%2BsbUwX1KgLVyGGtVAvaQIgKHKDEejlg%2F%2Fynk%2FMW5Ayk7rsV%2FeuN5dY3TuCJ1En5eAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMOhFlUK9U3FDuhWgCrcA%2BcS2%2FCt9cLQ5Z9I0N92QQiI8hakzOPeqdxjkLVHyCJ9ynkRe8lk4KSIt%2Fl8TZ1HTFd%2FwaYtZzvhcuzY4PEp5sgnoCyM2IOzhHu4EbRbKVlxlEB%2FXKjmTwz0dFGmRU9Ti9YD8f%2BBN8JTazBFJrPka151KP2lL0nxINdQh0HNtEjXJOwUlk%2FvLrKYeTR9qke3BXJRMgPGRT8yizNHFlPPArQZghIEyhCTE%2FVdCNYhxpSO1pFMNlNv7c2iJ98g5JYRxLh4uMzxcYaQ9rWVOsqnJSmvXsJiHHqhDl6qcWEEoA5IdSWtVO9ER0QyHDYZq9zl5K0zbNbTyRmlH5zQGgmu1gKF%2BMr%2FdK3pFUtzjg81E34duI54gXskxYq4ZQ3PHJiBqc1ltQc%2BiTkPWNSYDV%2FyzA3l0mZzg2WtixRWBb%2FRIy5QuBJnm8%2B4x%2F18rz3JvbtXzjtsJ5i%2BfvKZNx7RrhWq6LiTUs0bVr3i5qNpEonCJEAhaVXR9jqaOLvy9hfDsh%2FqCK8AW6wXgTd9lLQ8Q152jRlXfOyVBOmga1xIp84pEMYUeovC0fLWl2OLvZRsDoePlqZh%2F3g76Mz1AfmRzMoLX2EtCU%2FdF1SqgDjeMRX0uu3YeJmosxDjLzy63ZhpMP2egMIGOqUBcg2qG8jCRjx45o%2Fb%2BKLO7%2F4RBUD2CCMPseTUHbokoTf5M9O2nTPw%2Ff0vauKzQhuUCZpD0XIMLaGhnQPeA4jWXrW2FTeKRWVwTLlR3ah0FEC%2BKiCxdE4Frw%2BBmb1bXy2Rfyn9Gdl3A%2FWIcN%2BEiH88rnPjd7SrUjGBJ881W8IXw13aj9ODyX9AZPSgFLbimYOmfoodtAL2AY1laqJqc9H0DzeSGQmT&X-Amz-Signature=0dcb7c60e9da534afa2d1eb113ab318a015b7605c2ebdeee832333d0a584a7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6LRSB3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDOCFHAq7PiG1Lxwn2X3ahg%2BF%2BsbUwX1KgLVyGGtVAvaQIgKHKDEejlg%2F%2Fynk%2FMW5Ayk7rsV%2FeuN5dY3TuCJ1En5eAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMOhFlUK9U3FDuhWgCrcA%2BcS2%2FCt9cLQ5Z9I0N92QQiI8hakzOPeqdxjkLVHyCJ9ynkRe8lk4KSIt%2Fl8TZ1HTFd%2FwaYtZzvhcuzY4PEp5sgnoCyM2IOzhHu4EbRbKVlxlEB%2FXKjmTwz0dFGmRU9Ti9YD8f%2BBN8JTazBFJrPka151KP2lL0nxINdQh0HNtEjXJOwUlk%2FvLrKYeTR9qke3BXJRMgPGRT8yizNHFlPPArQZghIEyhCTE%2FVdCNYhxpSO1pFMNlNv7c2iJ98g5JYRxLh4uMzxcYaQ9rWVOsqnJSmvXsJiHHqhDl6qcWEEoA5IdSWtVO9ER0QyHDYZq9zl5K0zbNbTyRmlH5zQGgmu1gKF%2BMr%2FdK3pFUtzjg81E34duI54gXskxYq4ZQ3PHJiBqc1ltQc%2BiTkPWNSYDV%2FyzA3l0mZzg2WtixRWBb%2FRIy5QuBJnm8%2B4x%2F18rz3JvbtXzjtsJ5i%2BfvKZNx7RrhWq6LiTUs0bVr3i5qNpEonCJEAhaVXR9jqaOLvy9hfDsh%2FqCK8AW6wXgTd9lLQ8Q152jRlXfOyVBOmga1xIp84pEMYUeovC0fLWl2OLvZRsDoePlqZh%2F3g76Mz1AfmRzMoLX2EtCU%2FdF1SqgDjeMRX0uu3YeJmosxDjLzy63ZhpMP2egMIGOqUBcg2qG8jCRjx45o%2Fb%2BKLO7%2F4RBUD2CCMPseTUHbokoTf5M9O2nTPw%2Ff0vauKzQhuUCZpD0XIMLaGhnQPeA4jWXrW2FTeKRWVwTLlR3ah0FEC%2BKiCxdE4Frw%2BBmb1bXy2Rfyn9Gdl3A%2FWIcN%2BEiH88rnPjd7SrUjGBJ881W8IXw13aj9ODyX9AZPSgFLbimYOmfoodtAL2AY1laqJqc9H0DzeSGQmT&X-Amz-Signature=90518eb8a8da32e4537b9e934f7a50e67717be031dbf40ec64843a858a240f10&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6LRSB3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDOCFHAq7PiG1Lxwn2X3ahg%2BF%2BsbUwX1KgLVyGGtVAvaQIgKHKDEejlg%2F%2Fynk%2FMW5Ayk7rsV%2FeuN5dY3TuCJ1En5eAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMOhFlUK9U3FDuhWgCrcA%2BcS2%2FCt9cLQ5Z9I0N92QQiI8hakzOPeqdxjkLVHyCJ9ynkRe8lk4KSIt%2Fl8TZ1HTFd%2FwaYtZzvhcuzY4PEp5sgnoCyM2IOzhHu4EbRbKVlxlEB%2FXKjmTwz0dFGmRU9Ti9YD8f%2BBN8JTazBFJrPka151KP2lL0nxINdQh0HNtEjXJOwUlk%2FvLrKYeTR9qke3BXJRMgPGRT8yizNHFlPPArQZghIEyhCTE%2FVdCNYhxpSO1pFMNlNv7c2iJ98g5JYRxLh4uMzxcYaQ9rWVOsqnJSmvXsJiHHqhDl6qcWEEoA5IdSWtVO9ER0QyHDYZq9zl5K0zbNbTyRmlH5zQGgmu1gKF%2BMr%2FdK3pFUtzjg81E34duI54gXskxYq4ZQ3PHJiBqc1ltQc%2BiTkPWNSYDV%2FyzA3l0mZzg2WtixRWBb%2FRIy5QuBJnm8%2B4x%2F18rz3JvbtXzjtsJ5i%2BfvKZNx7RrhWq6LiTUs0bVr3i5qNpEonCJEAhaVXR9jqaOLvy9hfDsh%2FqCK8AW6wXgTd9lLQ8Q152jRlXfOyVBOmga1xIp84pEMYUeovC0fLWl2OLvZRsDoePlqZh%2F3g76Mz1AfmRzMoLX2EtCU%2FdF1SqgDjeMRX0uu3YeJmosxDjLzy63ZhpMP2egMIGOqUBcg2qG8jCRjx45o%2Fb%2BKLO7%2F4RBUD2CCMPseTUHbokoTf5M9O2nTPw%2Ff0vauKzQhuUCZpD0XIMLaGhnQPeA4jWXrW2FTeKRWVwTLlR3ah0FEC%2BKiCxdE4Frw%2BBmb1bXy2Rfyn9Gdl3A%2FWIcN%2BEiH88rnPjd7SrUjGBJ881W8IXw13aj9ODyX9AZPSgFLbimYOmfoodtAL2AY1laqJqc9H0DzeSGQmT&X-Amz-Signature=322efa0fdec473e556e7fe625ef28bcb1660d696b898cbaacc8b8d65cffd0da3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6LRSB3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDOCFHAq7PiG1Lxwn2X3ahg%2BF%2BsbUwX1KgLVyGGtVAvaQIgKHKDEejlg%2F%2Fynk%2FMW5Ayk7rsV%2FeuN5dY3TuCJ1En5eAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMOhFlUK9U3FDuhWgCrcA%2BcS2%2FCt9cLQ5Z9I0N92QQiI8hakzOPeqdxjkLVHyCJ9ynkRe8lk4KSIt%2Fl8TZ1HTFd%2FwaYtZzvhcuzY4PEp5sgnoCyM2IOzhHu4EbRbKVlxlEB%2FXKjmTwz0dFGmRU9Ti9YD8f%2BBN8JTazBFJrPka151KP2lL0nxINdQh0HNtEjXJOwUlk%2FvLrKYeTR9qke3BXJRMgPGRT8yizNHFlPPArQZghIEyhCTE%2FVdCNYhxpSO1pFMNlNv7c2iJ98g5JYRxLh4uMzxcYaQ9rWVOsqnJSmvXsJiHHqhDl6qcWEEoA5IdSWtVO9ER0QyHDYZq9zl5K0zbNbTyRmlH5zQGgmu1gKF%2BMr%2FdK3pFUtzjg81E34duI54gXskxYq4ZQ3PHJiBqc1ltQc%2BiTkPWNSYDV%2FyzA3l0mZzg2WtixRWBb%2FRIy5QuBJnm8%2B4x%2F18rz3JvbtXzjtsJ5i%2BfvKZNx7RrhWq6LiTUs0bVr3i5qNpEonCJEAhaVXR9jqaOLvy9hfDsh%2FqCK8AW6wXgTd9lLQ8Q152jRlXfOyVBOmga1xIp84pEMYUeovC0fLWl2OLvZRsDoePlqZh%2F3g76Mz1AfmRzMoLX2EtCU%2FdF1SqgDjeMRX0uu3YeJmosxDjLzy63ZhpMP2egMIGOqUBcg2qG8jCRjx45o%2Fb%2BKLO7%2F4RBUD2CCMPseTUHbokoTf5M9O2nTPw%2Ff0vauKzQhuUCZpD0XIMLaGhnQPeA4jWXrW2FTeKRWVwTLlR3ah0FEC%2BKiCxdE4Frw%2BBmb1bXy2Rfyn9Gdl3A%2FWIcN%2BEiH88rnPjd7SrUjGBJ881W8IXw13aj9ODyX9AZPSgFLbimYOmfoodtAL2AY1laqJqc9H0DzeSGQmT&X-Amz-Signature=afd70193d36dea3fc6389b902830296966e250afc2f506fdedc8bdfed8c6db5b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

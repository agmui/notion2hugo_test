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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2L4WZ44%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B0riTrYX6Ymx36F2e2WaUsQQBUPQhDd38cteCXvSHVwIga8799HavnGhWp7LrWkrbCHKT2bW2yppDhbOoKKG5CrMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHaQHWRsqrvZWJmYEircA%2B9pG8xYp8SHwA1jJaGdpJwfKH%2FwSm0gGZ6B8oDKpJIc5ZGqd6u47P6fvLoxNnwCXakkfjMyP7kaI4SuZGbFp67pZmP%2F5sn%2FKv7sVkm6aJsP2pg9Z2xZt5bs5C9XQs6lDbYZnR%2FZ3PzPoHmO6px5WFnsKQ6eWl6XFdv1uISCvQ%2B%2BqDYhCYaDrUH9Uh1KGyybCQ8ptO%2FbA%2BFTVj6emXDDOBXAlcGiR%2BbowXJqwiG%2FvT7IKkDJKPzHATTD2yz%2BBn4yyhq9uB8XuyIiwuedJG0R4i%2FKWIlZ58N8DblhbhF3clQ6BtToeURmr4t%2F%2FaJYxxCYA70a3OimKYe8%2FIoyaUb45k9gFq4fy6uaUsNcmADOaSXHzyBiGrQLTdIMn%2B5yvVp%2FukJZf%2B3f1%2Fa9Ew8WlsjJzFwMciz%2FJZU2zVQYypycw6L580BIgJjngExyVU6oGau0KANWdgT7P2Sm59Ug7ZGPG9M%2F4hOLZkOJBa0Jt3XSgtbnyCKMYOBGTK65AQODUwHJE357YiLRKUsnYx9MoyP1%2Fd%2F816ULn2GVL2qv8N%2FCajXR1%2B%2FiFTVCYqA8zMmjv8u5Vw4NP%2BwccfVS9PtXMF1BqnkLi%2FkYa%2FyHPD75vsx8xQK11ZVMhnTHimBL4ndsMKqRjcIGOqUB%2FPsKbf0Gs9mqC1BDMfq7JxsJFOAV5mA7Pl%2FDndFBBecGBkUa7jywN3s280ypjHeCDhBDniZDgnvGilipNLrYpeIMgBCl6ap9fRbmUaYy5ndJInTSW3URtHwuUNpMM0UN4z1JKHHb0FGJlI0%2F6ZdEUZPXxuSBANAn3WwZhBDVuA91mRsfumDRFw7A6MTGok277%2FnQje3DV5aZUu%2F5Dc%2BSHgjn2C2R&X-Amz-Signature=8f19e1a506ebe540e79d998ffb3791aa7defe83eaaa3b14ed33c664ca67a5408&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2L4WZ44%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B0riTrYX6Ymx36F2e2WaUsQQBUPQhDd38cteCXvSHVwIga8799HavnGhWp7LrWkrbCHKT2bW2yppDhbOoKKG5CrMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHaQHWRsqrvZWJmYEircA%2B9pG8xYp8SHwA1jJaGdpJwfKH%2FwSm0gGZ6B8oDKpJIc5ZGqd6u47P6fvLoxNnwCXakkfjMyP7kaI4SuZGbFp67pZmP%2F5sn%2FKv7sVkm6aJsP2pg9Z2xZt5bs5C9XQs6lDbYZnR%2FZ3PzPoHmO6px5WFnsKQ6eWl6XFdv1uISCvQ%2B%2BqDYhCYaDrUH9Uh1KGyybCQ8ptO%2FbA%2BFTVj6emXDDOBXAlcGiR%2BbowXJqwiG%2FvT7IKkDJKPzHATTD2yz%2BBn4yyhq9uB8XuyIiwuedJG0R4i%2FKWIlZ58N8DblhbhF3clQ6BtToeURmr4t%2F%2FaJYxxCYA70a3OimKYe8%2FIoyaUb45k9gFq4fy6uaUsNcmADOaSXHzyBiGrQLTdIMn%2B5yvVp%2FukJZf%2B3f1%2Fa9Ew8WlsjJzFwMciz%2FJZU2zVQYypycw6L580BIgJjngExyVU6oGau0KANWdgT7P2Sm59Ug7ZGPG9M%2F4hOLZkOJBa0Jt3XSgtbnyCKMYOBGTK65AQODUwHJE357YiLRKUsnYx9MoyP1%2Fd%2F816ULn2GVL2qv8N%2FCajXR1%2B%2FiFTVCYqA8zMmjv8u5Vw4NP%2BwccfVS9PtXMF1BqnkLi%2FkYa%2FyHPD75vsx8xQK11ZVMhnTHimBL4ndsMKqRjcIGOqUB%2FPsKbf0Gs9mqC1BDMfq7JxsJFOAV5mA7Pl%2FDndFBBecGBkUa7jywN3s280ypjHeCDhBDniZDgnvGilipNLrYpeIMgBCl6ap9fRbmUaYy5ndJInTSW3URtHwuUNpMM0UN4z1JKHHb0FGJlI0%2F6ZdEUZPXxuSBANAn3WwZhBDVuA91mRsfumDRFw7A6MTGok277%2FnQje3DV5aZUu%2F5Dc%2BSHgjn2C2R&X-Amz-Signature=8f92458dcdd98548945db1aa4622f601b0da2a93f8d69cf274e39fd0a301ea4b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2L4WZ44%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B0riTrYX6Ymx36F2e2WaUsQQBUPQhDd38cteCXvSHVwIga8799HavnGhWp7LrWkrbCHKT2bW2yppDhbOoKKG5CrMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHaQHWRsqrvZWJmYEircA%2B9pG8xYp8SHwA1jJaGdpJwfKH%2FwSm0gGZ6B8oDKpJIc5ZGqd6u47P6fvLoxNnwCXakkfjMyP7kaI4SuZGbFp67pZmP%2F5sn%2FKv7sVkm6aJsP2pg9Z2xZt5bs5C9XQs6lDbYZnR%2FZ3PzPoHmO6px5WFnsKQ6eWl6XFdv1uISCvQ%2B%2BqDYhCYaDrUH9Uh1KGyybCQ8ptO%2FbA%2BFTVj6emXDDOBXAlcGiR%2BbowXJqwiG%2FvT7IKkDJKPzHATTD2yz%2BBn4yyhq9uB8XuyIiwuedJG0R4i%2FKWIlZ58N8DblhbhF3clQ6BtToeURmr4t%2F%2FaJYxxCYA70a3OimKYe8%2FIoyaUb45k9gFq4fy6uaUsNcmADOaSXHzyBiGrQLTdIMn%2B5yvVp%2FukJZf%2B3f1%2Fa9Ew8WlsjJzFwMciz%2FJZU2zVQYypycw6L580BIgJjngExyVU6oGau0KANWdgT7P2Sm59Ug7ZGPG9M%2F4hOLZkOJBa0Jt3XSgtbnyCKMYOBGTK65AQODUwHJE357YiLRKUsnYx9MoyP1%2Fd%2F816ULn2GVL2qv8N%2FCajXR1%2B%2FiFTVCYqA8zMmjv8u5Vw4NP%2BwccfVS9PtXMF1BqnkLi%2FkYa%2FyHPD75vsx8xQK11ZVMhnTHimBL4ndsMKqRjcIGOqUB%2FPsKbf0Gs9mqC1BDMfq7JxsJFOAV5mA7Pl%2FDndFBBecGBkUa7jywN3s280ypjHeCDhBDniZDgnvGilipNLrYpeIMgBCl6ap9fRbmUaYy5ndJInTSW3URtHwuUNpMM0UN4z1JKHHb0FGJlI0%2F6ZdEUZPXxuSBANAn3WwZhBDVuA91mRsfumDRFw7A6MTGok277%2FnQje3DV5aZUu%2F5Dc%2BSHgjn2C2R&X-Amz-Signature=e680966e0ae143269d54fb502c634c0c8861f896929840a846bc665b7e507334&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2L4WZ44%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B0riTrYX6Ymx36F2e2WaUsQQBUPQhDd38cteCXvSHVwIga8799HavnGhWp7LrWkrbCHKT2bW2yppDhbOoKKG5CrMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHaQHWRsqrvZWJmYEircA%2B9pG8xYp8SHwA1jJaGdpJwfKH%2FwSm0gGZ6B8oDKpJIc5ZGqd6u47P6fvLoxNnwCXakkfjMyP7kaI4SuZGbFp67pZmP%2F5sn%2FKv7sVkm6aJsP2pg9Z2xZt5bs5C9XQs6lDbYZnR%2FZ3PzPoHmO6px5WFnsKQ6eWl6XFdv1uISCvQ%2B%2BqDYhCYaDrUH9Uh1KGyybCQ8ptO%2FbA%2BFTVj6emXDDOBXAlcGiR%2BbowXJqwiG%2FvT7IKkDJKPzHATTD2yz%2BBn4yyhq9uB8XuyIiwuedJG0R4i%2FKWIlZ58N8DblhbhF3clQ6BtToeURmr4t%2F%2FaJYxxCYA70a3OimKYe8%2FIoyaUb45k9gFq4fy6uaUsNcmADOaSXHzyBiGrQLTdIMn%2B5yvVp%2FukJZf%2B3f1%2Fa9Ew8WlsjJzFwMciz%2FJZU2zVQYypycw6L580BIgJjngExyVU6oGau0KANWdgT7P2Sm59Ug7ZGPG9M%2F4hOLZkOJBa0Jt3XSgtbnyCKMYOBGTK65AQODUwHJE357YiLRKUsnYx9MoyP1%2Fd%2F816ULn2GVL2qv8N%2FCajXR1%2B%2FiFTVCYqA8zMmjv8u5Vw4NP%2BwccfVS9PtXMF1BqnkLi%2FkYa%2FyHPD75vsx8xQK11ZVMhnTHimBL4ndsMKqRjcIGOqUB%2FPsKbf0Gs9mqC1BDMfq7JxsJFOAV5mA7Pl%2FDndFBBecGBkUa7jywN3s280ypjHeCDhBDniZDgnvGilipNLrYpeIMgBCl6ap9fRbmUaYy5ndJInTSW3URtHwuUNpMM0UN4z1JKHHb0FGJlI0%2F6ZdEUZPXxuSBANAn3WwZhBDVuA91mRsfumDRFw7A6MTGok277%2FnQje3DV5aZUu%2F5Dc%2BSHgjn2C2R&X-Amz-Signature=25a9fe11522ee178ea413e07580c1158aba3175bb80f9ebf20b003d504f3084b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2L4WZ44%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B0riTrYX6Ymx36F2e2WaUsQQBUPQhDd38cteCXvSHVwIga8799HavnGhWp7LrWkrbCHKT2bW2yppDhbOoKKG5CrMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHaQHWRsqrvZWJmYEircA%2B9pG8xYp8SHwA1jJaGdpJwfKH%2FwSm0gGZ6B8oDKpJIc5ZGqd6u47P6fvLoxNnwCXakkfjMyP7kaI4SuZGbFp67pZmP%2F5sn%2FKv7sVkm6aJsP2pg9Z2xZt5bs5C9XQs6lDbYZnR%2FZ3PzPoHmO6px5WFnsKQ6eWl6XFdv1uISCvQ%2B%2BqDYhCYaDrUH9Uh1KGyybCQ8ptO%2FbA%2BFTVj6emXDDOBXAlcGiR%2BbowXJqwiG%2FvT7IKkDJKPzHATTD2yz%2BBn4yyhq9uB8XuyIiwuedJG0R4i%2FKWIlZ58N8DblhbhF3clQ6BtToeURmr4t%2F%2FaJYxxCYA70a3OimKYe8%2FIoyaUb45k9gFq4fy6uaUsNcmADOaSXHzyBiGrQLTdIMn%2B5yvVp%2FukJZf%2B3f1%2Fa9Ew8WlsjJzFwMciz%2FJZU2zVQYypycw6L580BIgJjngExyVU6oGau0KANWdgT7P2Sm59Ug7ZGPG9M%2F4hOLZkOJBa0Jt3XSgtbnyCKMYOBGTK65AQODUwHJE357YiLRKUsnYx9MoyP1%2Fd%2F816ULn2GVL2qv8N%2FCajXR1%2B%2FiFTVCYqA8zMmjv8u5Vw4NP%2BwccfVS9PtXMF1BqnkLi%2FkYa%2FyHPD75vsx8xQK11ZVMhnTHimBL4ndsMKqRjcIGOqUB%2FPsKbf0Gs9mqC1BDMfq7JxsJFOAV5mA7Pl%2FDndFBBecGBkUa7jywN3s280ypjHeCDhBDniZDgnvGilipNLrYpeIMgBCl6ap9fRbmUaYy5ndJInTSW3URtHwuUNpMM0UN4z1JKHHb0FGJlI0%2F6ZdEUZPXxuSBANAn3WwZhBDVuA91mRsfumDRFw7A6MTGok277%2FnQje3DV5aZUu%2F5Dc%2BSHgjn2C2R&X-Amz-Signature=32b6261d5dbfec44727e80e06ba42c2b12f8278abb549bf44d6ab912fbf1f537&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2L4WZ44%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B0riTrYX6Ymx36F2e2WaUsQQBUPQhDd38cteCXvSHVwIga8799HavnGhWp7LrWkrbCHKT2bW2yppDhbOoKKG5CrMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHaQHWRsqrvZWJmYEircA%2B9pG8xYp8SHwA1jJaGdpJwfKH%2FwSm0gGZ6B8oDKpJIc5ZGqd6u47P6fvLoxNnwCXakkfjMyP7kaI4SuZGbFp67pZmP%2F5sn%2FKv7sVkm6aJsP2pg9Z2xZt5bs5C9XQs6lDbYZnR%2FZ3PzPoHmO6px5WFnsKQ6eWl6XFdv1uISCvQ%2B%2BqDYhCYaDrUH9Uh1KGyybCQ8ptO%2FbA%2BFTVj6emXDDOBXAlcGiR%2BbowXJqwiG%2FvT7IKkDJKPzHATTD2yz%2BBn4yyhq9uB8XuyIiwuedJG0R4i%2FKWIlZ58N8DblhbhF3clQ6BtToeURmr4t%2F%2FaJYxxCYA70a3OimKYe8%2FIoyaUb45k9gFq4fy6uaUsNcmADOaSXHzyBiGrQLTdIMn%2B5yvVp%2FukJZf%2B3f1%2Fa9Ew8WlsjJzFwMciz%2FJZU2zVQYypycw6L580BIgJjngExyVU6oGau0KANWdgT7P2Sm59Ug7ZGPG9M%2F4hOLZkOJBa0Jt3XSgtbnyCKMYOBGTK65AQODUwHJE357YiLRKUsnYx9MoyP1%2Fd%2F816ULn2GVL2qv8N%2FCajXR1%2B%2FiFTVCYqA8zMmjv8u5Vw4NP%2BwccfVS9PtXMF1BqnkLi%2FkYa%2FyHPD75vsx8xQK11ZVMhnTHimBL4ndsMKqRjcIGOqUB%2FPsKbf0Gs9mqC1BDMfq7JxsJFOAV5mA7Pl%2FDndFBBecGBkUa7jywN3s280ypjHeCDhBDniZDgnvGilipNLrYpeIMgBCl6ap9fRbmUaYy5ndJInTSW3URtHwuUNpMM0UN4z1JKHHb0FGJlI0%2F6ZdEUZPXxuSBANAn3WwZhBDVuA91mRsfumDRFw7A6MTGok277%2FnQje3DV5aZUu%2F5Dc%2BSHgjn2C2R&X-Amz-Signature=a26a3cd1fb328063d73b21ebbef74306477bf07dd4424214fccd6e0ba57c34da&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2L4WZ44%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B0riTrYX6Ymx36F2e2WaUsQQBUPQhDd38cteCXvSHVwIga8799HavnGhWp7LrWkrbCHKT2bW2yppDhbOoKKG5CrMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHaQHWRsqrvZWJmYEircA%2B9pG8xYp8SHwA1jJaGdpJwfKH%2FwSm0gGZ6B8oDKpJIc5ZGqd6u47P6fvLoxNnwCXakkfjMyP7kaI4SuZGbFp67pZmP%2F5sn%2FKv7sVkm6aJsP2pg9Z2xZt5bs5C9XQs6lDbYZnR%2FZ3PzPoHmO6px5WFnsKQ6eWl6XFdv1uISCvQ%2B%2BqDYhCYaDrUH9Uh1KGyybCQ8ptO%2FbA%2BFTVj6emXDDOBXAlcGiR%2BbowXJqwiG%2FvT7IKkDJKPzHATTD2yz%2BBn4yyhq9uB8XuyIiwuedJG0R4i%2FKWIlZ58N8DblhbhF3clQ6BtToeURmr4t%2F%2FaJYxxCYA70a3OimKYe8%2FIoyaUb45k9gFq4fy6uaUsNcmADOaSXHzyBiGrQLTdIMn%2B5yvVp%2FukJZf%2B3f1%2Fa9Ew8WlsjJzFwMciz%2FJZU2zVQYypycw6L580BIgJjngExyVU6oGau0KANWdgT7P2Sm59Ug7ZGPG9M%2F4hOLZkOJBa0Jt3XSgtbnyCKMYOBGTK65AQODUwHJE357YiLRKUsnYx9MoyP1%2Fd%2F816ULn2GVL2qv8N%2FCajXR1%2B%2FiFTVCYqA8zMmjv8u5Vw4NP%2BwccfVS9PtXMF1BqnkLi%2FkYa%2FyHPD75vsx8xQK11ZVMhnTHimBL4ndsMKqRjcIGOqUB%2FPsKbf0Gs9mqC1BDMfq7JxsJFOAV5mA7Pl%2FDndFBBecGBkUa7jywN3s280ypjHeCDhBDniZDgnvGilipNLrYpeIMgBCl6ap9fRbmUaYy5ndJInTSW3URtHwuUNpMM0UN4z1JKHHb0FGJlI0%2F6ZdEUZPXxuSBANAn3WwZhBDVuA91mRsfumDRFw7A6MTGok277%2FnQje3DV5aZUu%2F5Dc%2BSHgjn2C2R&X-Amz-Signature=556b7c143eea53786e449d7b9ad0f7dc90e8f3f4f21ede066ad8d118ea5d0b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

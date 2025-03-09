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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPRGEML%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID13rNfR%2FqsWE4SWeTwktK8PPydLNdDj3HHw2iN5tNGkAiEAq9PGF68Fbo1vMAEQbplg4g%2FHL9PMtjIh%2BUNs%2FQaG55Iq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDARaHq6szJKdx%2B2ryircA75qh6kj8Yhln7C%2FjOnXVaQ69sJtMmVV3han4RMH%2BBZF1%2B03mL9KKWP0X9MQ%2FF2w8IhJvp2rgGeniShgKaMz9D4KuV%2F4trEGwqgbQ2r2V%2Ban0nKHbUM6FIsTdil5EhKXlVqQFQVVPxbVZfw07rva7lEAjb8Th6ZZHT%2BEJVYaOzWJPOoP1Kks4HSdthr7hMM16AJ%2B1XdghHLdlBWPgP4hV1Bs%2FswN2QDCkWnbYZAS5mr6%2FzUtt9kr9X4SNiyTvo6NRPjh0kac8tUrcrUHcxij7ybegjzpLfWoAw4vd5mfsRr%2B7KW%2BV2VfW3S0GrPgKLeALZjrKHMbHeut%2FEKtwBU2D6A%2F3tCa09Is4ZkTdu%2BZePwLram13uWxTDg6kFVDTepzZk4R8WGkf1eMJTwZeg83RqvDGuChXVK%2BIcXdfi9Ubq4k6Ebi%2FLQ7C8QHSmAB9O9cLMMdapKgUYw0Pwgt6THJNObNYKPs817RhrjE3zhJ3P5OylOTIzXH3QqqQRfkvQ7VR5QAttH0FbGXplPBm%2FDbjsuNbEFd6s1WXizIDmJTU80unZr4J1frirS7lDz9bHOlZ%2BmthxaxTv4mz5UE%2BpwNX4SyBthLbMuTd2tr2qbPmCOJrne5hsoxCIk4XbTgMNTht74GOqUBxmTgRkBNZtAOB6jZe9JJXmbKqZKGUj0Qx9lMTedyJBxcOMluw7YpYiWSVi9TN%2BiG1VzP0cgDeLSs0WVeFtJepdF3P2Yqs7iEXVkyHkswRQW9WZvIff2iudj5T2TElstjfzw5nEX%2FJmKmmbPjFsT9VF2ygakUdOt8uW1iDxIvVSiZAeDGThjqiyPcRU%2FcxDnIoCepplMBf2jaYSJihptlAb5PSowc&X-Amz-Signature=87e334af12e7684b6375d7f41bc66b377f79d2630c5cedfffd0afb12548bf8da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPRGEML%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID13rNfR%2FqsWE4SWeTwktK8PPydLNdDj3HHw2iN5tNGkAiEAq9PGF68Fbo1vMAEQbplg4g%2FHL9PMtjIh%2BUNs%2FQaG55Iq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDARaHq6szJKdx%2B2ryircA75qh6kj8Yhln7C%2FjOnXVaQ69sJtMmVV3han4RMH%2BBZF1%2B03mL9KKWP0X9MQ%2FF2w8IhJvp2rgGeniShgKaMz9D4KuV%2F4trEGwqgbQ2r2V%2Ban0nKHbUM6FIsTdil5EhKXlVqQFQVVPxbVZfw07rva7lEAjb8Th6ZZHT%2BEJVYaOzWJPOoP1Kks4HSdthr7hMM16AJ%2B1XdghHLdlBWPgP4hV1Bs%2FswN2QDCkWnbYZAS5mr6%2FzUtt9kr9X4SNiyTvo6NRPjh0kac8tUrcrUHcxij7ybegjzpLfWoAw4vd5mfsRr%2B7KW%2BV2VfW3S0GrPgKLeALZjrKHMbHeut%2FEKtwBU2D6A%2F3tCa09Is4ZkTdu%2BZePwLram13uWxTDg6kFVDTepzZk4R8WGkf1eMJTwZeg83RqvDGuChXVK%2BIcXdfi9Ubq4k6Ebi%2FLQ7C8QHSmAB9O9cLMMdapKgUYw0Pwgt6THJNObNYKPs817RhrjE3zhJ3P5OylOTIzXH3QqqQRfkvQ7VR5QAttH0FbGXplPBm%2FDbjsuNbEFd6s1WXizIDmJTU80unZr4J1frirS7lDz9bHOlZ%2BmthxaxTv4mz5UE%2BpwNX4SyBthLbMuTd2tr2qbPmCOJrne5hsoxCIk4XbTgMNTht74GOqUBxmTgRkBNZtAOB6jZe9JJXmbKqZKGUj0Qx9lMTedyJBxcOMluw7YpYiWSVi9TN%2BiG1VzP0cgDeLSs0WVeFtJepdF3P2Yqs7iEXVkyHkswRQW9WZvIff2iudj5T2TElstjfzw5nEX%2FJmKmmbPjFsT9VF2ygakUdOt8uW1iDxIvVSiZAeDGThjqiyPcRU%2FcxDnIoCepplMBf2jaYSJihptlAb5PSowc&X-Amz-Signature=d7c7319b250038a3745857dca3586b2574ffbfd76571e4033101ad8f4a5121b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPRGEML%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID13rNfR%2FqsWE4SWeTwktK8PPydLNdDj3HHw2iN5tNGkAiEAq9PGF68Fbo1vMAEQbplg4g%2FHL9PMtjIh%2BUNs%2FQaG55Iq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDARaHq6szJKdx%2B2ryircA75qh6kj8Yhln7C%2FjOnXVaQ69sJtMmVV3han4RMH%2BBZF1%2B03mL9KKWP0X9MQ%2FF2w8IhJvp2rgGeniShgKaMz9D4KuV%2F4trEGwqgbQ2r2V%2Ban0nKHbUM6FIsTdil5EhKXlVqQFQVVPxbVZfw07rva7lEAjb8Th6ZZHT%2BEJVYaOzWJPOoP1Kks4HSdthr7hMM16AJ%2B1XdghHLdlBWPgP4hV1Bs%2FswN2QDCkWnbYZAS5mr6%2FzUtt9kr9X4SNiyTvo6NRPjh0kac8tUrcrUHcxij7ybegjzpLfWoAw4vd5mfsRr%2B7KW%2BV2VfW3S0GrPgKLeALZjrKHMbHeut%2FEKtwBU2D6A%2F3tCa09Is4ZkTdu%2BZePwLram13uWxTDg6kFVDTepzZk4R8WGkf1eMJTwZeg83RqvDGuChXVK%2BIcXdfi9Ubq4k6Ebi%2FLQ7C8QHSmAB9O9cLMMdapKgUYw0Pwgt6THJNObNYKPs817RhrjE3zhJ3P5OylOTIzXH3QqqQRfkvQ7VR5QAttH0FbGXplPBm%2FDbjsuNbEFd6s1WXizIDmJTU80unZr4J1frirS7lDz9bHOlZ%2BmthxaxTv4mz5UE%2BpwNX4SyBthLbMuTd2tr2qbPmCOJrne5hsoxCIk4XbTgMNTht74GOqUBxmTgRkBNZtAOB6jZe9JJXmbKqZKGUj0Qx9lMTedyJBxcOMluw7YpYiWSVi9TN%2BiG1VzP0cgDeLSs0WVeFtJepdF3P2Yqs7iEXVkyHkswRQW9WZvIff2iudj5T2TElstjfzw5nEX%2FJmKmmbPjFsT9VF2ygakUdOt8uW1iDxIvVSiZAeDGThjqiyPcRU%2FcxDnIoCepplMBf2jaYSJihptlAb5PSowc&X-Amz-Signature=71b2476bd3f6fe35676410a5cd286949ba62925f2a9dc27be100454d4edcabab&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPRGEML%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID13rNfR%2FqsWE4SWeTwktK8PPydLNdDj3HHw2iN5tNGkAiEAq9PGF68Fbo1vMAEQbplg4g%2FHL9PMtjIh%2BUNs%2FQaG55Iq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDARaHq6szJKdx%2B2ryircA75qh6kj8Yhln7C%2FjOnXVaQ69sJtMmVV3han4RMH%2BBZF1%2B03mL9KKWP0X9MQ%2FF2w8IhJvp2rgGeniShgKaMz9D4KuV%2F4trEGwqgbQ2r2V%2Ban0nKHbUM6FIsTdil5EhKXlVqQFQVVPxbVZfw07rva7lEAjb8Th6ZZHT%2BEJVYaOzWJPOoP1Kks4HSdthr7hMM16AJ%2B1XdghHLdlBWPgP4hV1Bs%2FswN2QDCkWnbYZAS5mr6%2FzUtt9kr9X4SNiyTvo6NRPjh0kac8tUrcrUHcxij7ybegjzpLfWoAw4vd5mfsRr%2B7KW%2BV2VfW3S0GrPgKLeALZjrKHMbHeut%2FEKtwBU2D6A%2F3tCa09Is4ZkTdu%2BZePwLram13uWxTDg6kFVDTepzZk4R8WGkf1eMJTwZeg83RqvDGuChXVK%2BIcXdfi9Ubq4k6Ebi%2FLQ7C8QHSmAB9O9cLMMdapKgUYw0Pwgt6THJNObNYKPs817RhrjE3zhJ3P5OylOTIzXH3QqqQRfkvQ7VR5QAttH0FbGXplPBm%2FDbjsuNbEFd6s1WXizIDmJTU80unZr4J1frirS7lDz9bHOlZ%2BmthxaxTv4mz5UE%2BpwNX4SyBthLbMuTd2tr2qbPmCOJrne5hsoxCIk4XbTgMNTht74GOqUBxmTgRkBNZtAOB6jZe9JJXmbKqZKGUj0Qx9lMTedyJBxcOMluw7YpYiWSVi9TN%2BiG1VzP0cgDeLSs0WVeFtJepdF3P2Yqs7iEXVkyHkswRQW9WZvIff2iudj5T2TElstjfzw5nEX%2FJmKmmbPjFsT9VF2ygakUdOt8uW1iDxIvVSiZAeDGThjqiyPcRU%2FcxDnIoCepplMBf2jaYSJihptlAb5PSowc&X-Amz-Signature=57d4bbc373d1c39a1be67753c262b41e5ca8fb3941e2b985db8bcd4ea0e9e9d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPRGEML%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID13rNfR%2FqsWE4SWeTwktK8PPydLNdDj3HHw2iN5tNGkAiEAq9PGF68Fbo1vMAEQbplg4g%2FHL9PMtjIh%2BUNs%2FQaG55Iq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDARaHq6szJKdx%2B2ryircA75qh6kj8Yhln7C%2FjOnXVaQ69sJtMmVV3han4RMH%2BBZF1%2B03mL9KKWP0X9MQ%2FF2w8IhJvp2rgGeniShgKaMz9D4KuV%2F4trEGwqgbQ2r2V%2Ban0nKHbUM6FIsTdil5EhKXlVqQFQVVPxbVZfw07rva7lEAjb8Th6ZZHT%2BEJVYaOzWJPOoP1Kks4HSdthr7hMM16AJ%2B1XdghHLdlBWPgP4hV1Bs%2FswN2QDCkWnbYZAS5mr6%2FzUtt9kr9X4SNiyTvo6NRPjh0kac8tUrcrUHcxij7ybegjzpLfWoAw4vd5mfsRr%2B7KW%2BV2VfW3S0GrPgKLeALZjrKHMbHeut%2FEKtwBU2D6A%2F3tCa09Is4ZkTdu%2BZePwLram13uWxTDg6kFVDTepzZk4R8WGkf1eMJTwZeg83RqvDGuChXVK%2BIcXdfi9Ubq4k6Ebi%2FLQ7C8QHSmAB9O9cLMMdapKgUYw0Pwgt6THJNObNYKPs817RhrjE3zhJ3P5OylOTIzXH3QqqQRfkvQ7VR5QAttH0FbGXplPBm%2FDbjsuNbEFd6s1WXizIDmJTU80unZr4J1frirS7lDz9bHOlZ%2BmthxaxTv4mz5UE%2BpwNX4SyBthLbMuTd2tr2qbPmCOJrne5hsoxCIk4XbTgMNTht74GOqUBxmTgRkBNZtAOB6jZe9JJXmbKqZKGUj0Qx9lMTedyJBxcOMluw7YpYiWSVi9TN%2BiG1VzP0cgDeLSs0WVeFtJepdF3P2Yqs7iEXVkyHkswRQW9WZvIff2iudj5T2TElstjfzw5nEX%2FJmKmmbPjFsT9VF2ygakUdOt8uW1iDxIvVSiZAeDGThjqiyPcRU%2FcxDnIoCepplMBf2jaYSJihptlAb5PSowc&X-Amz-Signature=3cb3fd6eeaa6b1902320e913fd906f0e30e90ed090627e4da6ad5f8990220772&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPRGEML%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID13rNfR%2FqsWE4SWeTwktK8PPydLNdDj3HHw2iN5tNGkAiEAq9PGF68Fbo1vMAEQbplg4g%2FHL9PMtjIh%2BUNs%2FQaG55Iq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDARaHq6szJKdx%2B2ryircA75qh6kj8Yhln7C%2FjOnXVaQ69sJtMmVV3han4RMH%2BBZF1%2B03mL9KKWP0X9MQ%2FF2w8IhJvp2rgGeniShgKaMz9D4KuV%2F4trEGwqgbQ2r2V%2Ban0nKHbUM6FIsTdil5EhKXlVqQFQVVPxbVZfw07rva7lEAjb8Th6ZZHT%2BEJVYaOzWJPOoP1Kks4HSdthr7hMM16AJ%2B1XdghHLdlBWPgP4hV1Bs%2FswN2QDCkWnbYZAS5mr6%2FzUtt9kr9X4SNiyTvo6NRPjh0kac8tUrcrUHcxij7ybegjzpLfWoAw4vd5mfsRr%2B7KW%2BV2VfW3S0GrPgKLeALZjrKHMbHeut%2FEKtwBU2D6A%2F3tCa09Is4ZkTdu%2BZePwLram13uWxTDg6kFVDTepzZk4R8WGkf1eMJTwZeg83RqvDGuChXVK%2BIcXdfi9Ubq4k6Ebi%2FLQ7C8QHSmAB9O9cLMMdapKgUYw0Pwgt6THJNObNYKPs817RhrjE3zhJ3P5OylOTIzXH3QqqQRfkvQ7VR5QAttH0FbGXplPBm%2FDbjsuNbEFd6s1WXizIDmJTU80unZr4J1frirS7lDz9bHOlZ%2BmthxaxTv4mz5UE%2BpwNX4SyBthLbMuTd2tr2qbPmCOJrne5hsoxCIk4XbTgMNTht74GOqUBxmTgRkBNZtAOB6jZe9JJXmbKqZKGUj0Qx9lMTedyJBxcOMluw7YpYiWSVi9TN%2BiG1VzP0cgDeLSs0WVeFtJepdF3P2Yqs7iEXVkyHkswRQW9WZvIff2iudj5T2TElstjfzw5nEX%2FJmKmmbPjFsT9VF2ygakUdOt8uW1iDxIvVSiZAeDGThjqiyPcRU%2FcxDnIoCepplMBf2jaYSJihptlAb5PSowc&X-Amz-Signature=7749068ced4b9b327c455dd9418ee71c0c97d7233baf0728fd55a907a2e990cd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPRGEML%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID13rNfR%2FqsWE4SWeTwktK8PPydLNdDj3HHw2iN5tNGkAiEAq9PGF68Fbo1vMAEQbplg4g%2FHL9PMtjIh%2BUNs%2FQaG55Iq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDARaHq6szJKdx%2B2ryircA75qh6kj8Yhln7C%2FjOnXVaQ69sJtMmVV3han4RMH%2BBZF1%2B03mL9KKWP0X9MQ%2FF2w8IhJvp2rgGeniShgKaMz9D4KuV%2F4trEGwqgbQ2r2V%2Ban0nKHbUM6FIsTdil5EhKXlVqQFQVVPxbVZfw07rva7lEAjb8Th6ZZHT%2BEJVYaOzWJPOoP1Kks4HSdthr7hMM16AJ%2B1XdghHLdlBWPgP4hV1Bs%2FswN2QDCkWnbYZAS5mr6%2FzUtt9kr9X4SNiyTvo6NRPjh0kac8tUrcrUHcxij7ybegjzpLfWoAw4vd5mfsRr%2B7KW%2BV2VfW3S0GrPgKLeALZjrKHMbHeut%2FEKtwBU2D6A%2F3tCa09Is4ZkTdu%2BZePwLram13uWxTDg6kFVDTepzZk4R8WGkf1eMJTwZeg83RqvDGuChXVK%2BIcXdfi9Ubq4k6Ebi%2FLQ7C8QHSmAB9O9cLMMdapKgUYw0Pwgt6THJNObNYKPs817RhrjE3zhJ3P5OylOTIzXH3QqqQRfkvQ7VR5QAttH0FbGXplPBm%2FDbjsuNbEFd6s1WXizIDmJTU80unZr4J1frirS7lDz9bHOlZ%2BmthxaxTv4mz5UE%2BpwNX4SyBthLbMuTd2tr2qbPmCOJrne5hsoxCIk4XbTgMNTht74GOqUBxmTgRkBNZtAOB6jZe9JJXmbKqZKGUj0Qx9lMTedyJBxcOMluw7YpYiWSVi9TN%2BiG1VzP0cgDeLSs0WVeFtJepdF3P2Yqs7iEXVkyHkswRQW9WZvIff2iudj5T2TElstjfzw5nEX%2FJmKmmbPjFsT9VF2ygakUdOt8uW1iDxIvVSiZAeDGThjqiyPcRU%2FcxDnIoCepplMBf2jaYSJihptlAb5PSowc&X-Amz-Signature=3d8faa9e7c033607773772757fe0e414d7441e3b4d5960b7677bbdf814a7a7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

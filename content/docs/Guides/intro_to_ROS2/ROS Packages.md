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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SH2ETM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCWGzO%2B2p7PjH6zOkoQ5AS97WcwTQ4D8Y1Vldno3e2qwIgDKDtqmPvppfIk%2FTr2%2FTDBhrkGWoYft2Jf1ZHVKchmS0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2BiRr3VtkHJdVxtCrcA0K3V%2FlQ7w6NM3FqpgR8Cg845IXnn1cbcf3upwWfxQOd9MBxgNkZbb13k7EOhlhHNI2gQEDS%2B5FL5hJpfXn3YVO5w5j9PA6nf6TX30iiHVUNp%2FP7ZL44ihTw9lI97%2FcjJF58oP6IYgdjR8MdsFKNTQpe4DljpMmjK9I5RgXTrYoZbX0r8GTsEIPNjF%2F5I7GeggkTDZZjgkvhzrvcJnYYbyionJrIE3SGs99UBBno940Bsl2lOlCAp04QhpAjCz1A91OXp%2FSW0ygzgGNmjYmmoKs04Ty5BPHB%2BGQwDHhoFAZWMd4ZuWVdZ1X06I3TA7KxnrvSrtSn%2FjM0wYZQ4J1vL98TFVIQ9kDZEEwZ8ZnP6SGEUNRLgX1xQs9qb0L%2BZQGVMphy2J6AnhZJMIvnP4pNWoIwRaAntMftMRa585OEFF3zr9oEDS74hfUgTSsc5%2B8uxuYq8c1JfrwLMtGPzuDEN8Z0T7ncWNGDNlYKgo%2BkG2%2BNz0rinziMU33Beh705LrkXwa8g0iYjZy6iI%2BLJdq79Av%2BqkgyTXsO0OW43IC0hkuQZlb1mjWN5Z6ZzqwL18cfYHwurh1HLzCUskMvMsMQysXrpG94oWMtcE%2F04SogTpdWLE7t37w7uPS4VYAcMI%2Fb7cEGOqUBhvHB%2F26TTpIeAThYwNrLZsCbeCsVyLvW6c6imGe8Iw6vyU3Zc%2B5Xvr3T4L43EoDGF5V%2F%2F%2F9n2lq4%2BqddMEJf74Byc%2FYH%2BpnyOYI%2BHebOGsKLZbqHipSRsOFQX6MmHRxpzSo%2BcDYN6mZu9jMffjLRlEff%2BeIugAw4woD%2FF5C55NUf%2Bw%2F8WLbpxyJYCN0iWApuHqJcY0NYyOGkSsEwfwo8xtZ43xGr&X-Amz-Signature=d355475e4c0b84b4a38ddee46e67cdf7c88d21ae2857a8634f65c0577daccd49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SH2ETM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCWGzO%2B2p7PjH6zOkoQ5AS97WcwTQ4D8Y1Vldno3e2qwIgDKDtqmPvppfIk%2FTr2%2FTDBhrkGWoYft2Jf1ZHVKchmS0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2BiRr3VtkHJdVxtCrcA0K3V%2FlQ7w6NM3FqpgR8Cg845IXnn1cbcf3upwWfxQOd9MBxgNkZbb13k7EOhlhHNI2gQEDS%2B5FL5hJpfXn3YVO5w5j9PA6nf6TX30iiHVUNp%2FP7ZL44ihTw9lI97%2FcjJF58oP6IYgdjR8MdsFKNTQpe4DljpMmjK9I5RgXTrYoZbX0r8GTsEIPNjF%2F5I7GeggkTDZZjgkvhzrvcJnYYbyionJrIE3SGs99UBBno940Bsl2lOlCAp04QhpAjCz1A91OXp%2FSW0ygzgGNmjYmmoKs04Ty5BPHB%2BGQwDHhoFAZWMd4ZuWVdZ1X06I3TA7KxnrvSrtSn%2FjM0wYZQ4J1vL98TFVIQ9kDZEEwZ8ZnP6SGEUNRLgX1xQs9qb0L%2BZQGVMphy2J6AnhZJMIvnP4pNWoIwRaAntMftMRa585OEFF3zr9oEDS74hfUgTSsc5%2B8uxuYq8c1JfrwLMtGPzuDEN8Z0T7ncWNGDNlYKgo%2BkG2%2BNz0rinziMU33Beh705LrkXwa8g0iYjZy6iI%2BLJdq79Av%2BqkgyTXsO0OW43IC0hkuQZlb1mjWN5Z6ZzqwL18cfYHwurh1HLzCUskMvMsMQysXrpG94oWMtcE%2F04SogTpdWLE7t37w7uPS4VYAcMI%2Fb7cEGOqUBhvHB%2F26TTpIeAThYwNrLZsCbeCsVyLvW6c6imGe8Iw6vyU3Zc%2B5Xvr3T4L43EoDGF5V%2F%2F%2F9n2lq4%2BqddMEJf74Byc%2FYH%2BpnyOYI%2BHebOGsKLZbqHipSRsOFQX6MmHRxpzSo%2BcDYN6mZu9jMffjLRlEff%2BeIugAw4woD%2FF5C55NUf%2Bw%2F8WLbpxyJYCN0iWApuHqJcY0NYyOGkSsEwfwo8xtZ43xGr&X-Amz-Signature=2090d01b660570b2d94de526e48c23a96fc4a1bb04b4445caf2afb678d0c106c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SH2ETM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCWGzO%2B2p7PjH6zOkoQ5AS97WcwTQ4D8Y1Vldno3e2qwIgDKDtqmPvppfIk%2FTr2%2FTDBhrkGWoYft2Jf1ZHVKchmS0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2BiRr3VtkHJdVxtCrcA0K3V%2FlQ7w6NM3FqpgR8Cg845IXnn1cbcf3upwWfxQOd9MBxgNkZbb13k7EOhlhHNI2gQEDS%2B5FL5hJpfXn3YVO5w5j9PA6nf6TX30iiHVUNp%2FP7ZL44ihTw9lI97%2FcjJF58oP6IYgdjR8MdsFKNTQpe4DljpMmjK9I5RgXTrYoZbX0r8GTsEIPNjF%2F5I7GeggkTDZZjgkvhzrvcJnYYbyionJrIE3SGs99UBBno940Bsl2lOlCAp04QhpAjCz1A91OXp%2FSW0ygzgGNmjYmmoKs04Ty5BPHB%2BGQwDHhoFAZWMd4ZuWVdZ1X06I3TA7KxnrvSrtSn%2FjM0wYZQ4J1vL98TFVIQ9kDZEEwZ8ZnP6SGEUNRLgX1xQs9qb0L%2BZQGVMphy2J6AnhZJMIvnP4pNWoIwRaAntMftMRa585OEFF3zr9oEDS74hfUgTSsc5%2B8uxuYq8c1JfrwLMtGPzuDEN8Z0T7ncWNGDNlYKgo%2BkG2%2BNz0rinziMU33Beh705LrkXwa8g0iYjZy6iI%2BLJdq79Av%2BqkgyTXsO0OW43IC0hkuQZlb1mjWN5Z6ZzqwL18cfYHwurh1HLzCUskMvMsMQysXrpG94oWMtcE%2F04SogTpdWLE7t37w7uPS4VYAcMI%2Fb7cEGOqUBhvHB%2F26TTpIeAThYwNrLZsCbeCsVyLvW6c6imGe8Iw6vyU3Zc%2B5Xvr3T4L43EoDGF5V%2F%2F%2F9n2lq4%2BqddMEJf74Byc%2FYH%2BpnyOYI%2BHebOGsKLZbqHipSRsOFQX6MmHRxpzSo%2BcDYN6mZu9jMffjLRlEff%2BeIugAw4woD%2FF5C55NUf%2Bw%2F8WLbpxyJYCN0iWApuHqJcY0NYyOGkSsEwfwo8xtZ43xGr&X-Amz-Signature=308b2afc9f59385a29aed9cc2c44af25004410d2952ea8a7d4f2799feae4696a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SH2ETM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCWGzO%2B2p7PjH6zOkoQ5AS97WcwTQ4D8Y1Vldno3e2qwIgDKDtqmPvppfIk%2FTr2%2FTDBhrkGWoYft2Jf1ZHVKchmS0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2BiRr3VtkHJdVxtCrcA0K3V%2FlQ7w6NM3FqpgR8Cg845IXnn1cbcf3upwWfxQOd9MBxgNkZbb13k7EOhlhHNI2gQEDS%2B5FL5hJpfXn3YVO5w5j9PA6nf6TX30iiHVUNp%2FP7ZL44ihTw9lI97%2FcjJF58oP6IYgdjR8MdsFKNTQpe4DljpMmjK9I5RgXTrYoZbX0r8GTsEIPNjF%2F5I7GeggkTDZZjgkvhzrvcJnYYbyionJrIE3SGs99UBBno940Bsl2lOlCAp04QhpAjCz1A91OXp%2FSW0ygzgGNmjYmmoKs04Ty5BPHB%2BGQwDHhoFAZWMd4ZuWVdZ1X06I3TA7KxnrvSrtSn%2FjM0wYZQ4J1vL98TFVIQ9kDZEEwZ8ZnP6SGEUNRLgX1xQs9qb0L%2BZQGVMphy2J6AnhZJMIvnP4pNWoIwRaAntMftMRa585OEFF3zr9oEDS74hfUgTSsc5%2B8uxuYq8c1JfrwLMtGPzuDEN8Z0T7ncWNGDNlYKgo%2BkG2%2BNz0rinziMU33Beh705LrkXwa8g0iYjZy6iI%2BLJdq79Av%2BqkgyTXsO0OW43IC0hkuQZlb1mjWN5Z6ZzqwL18cfYHwurh1HLzCUskMvMsMQysXrpG94oWMtcE%2F04SogTpdWLE7t37w7uPS4VYAcMI%2Fb7cEGOqUBhvHB%2F26TTpIeAThYwNrLZsCbeCsVyLvW6c6imGe8Iw6vyU3Zc%2B5Xvr3T4L43EoDGF5V%2F%2F%2F9n2lq4%2BqddMEJf74Byc%2FYH%2BpnyOYI%2BHebOGsKLZbqHipSRsOFQX6MmHRxpzSo%2BcDYN6mZu9jMffjLRlEff%2BeIugAw4woD%2FF5C55NUf%2Bw%2F8WLbpxyJYCN0iWApuHqJcY0NYyOGkSsEwfwo8xtZ43xGr&X-Amz-Signature=2d1bda330809eb7db4b3ae997b2ec6d873130915df19880203d844b9905b5f54&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SH2ETM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCWGzO%2B2p7PjH6zOkoQ5AS97WcwTQ4D8Y1Vldno3e2qwIgDKDtqmPvppfIk%2FTr2%2FTDBhrkGWoYft2Jf1ZHVKchmS0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2BiRr3VtkHJdVxtCrcA0K3V%2FlQ7w6NM3FqpgR8Cg845IXnn1cbcf3upwWfxQOd9MBxgNkZbb13k7EOhlhHNI2gQEDS%2B5FL5hJpfXn3YVO5w5j9PA6nf6TX30iiHVUNp%2FP7ZL44ihTw9lI97%2FcjJF58oP6IYgdjR8MdsFKNTQpe4DljpMmjK9I5RgXTrYoZbX0r8GTsEIPNjF%2F5I7GeggkTDZZjgkvhzrvcJnYYbyionJrIE3SGs99UBBno940Bsl2lOlCAp04QhpAjCz1A91OXp%2FSW0ygzgGNmjYmmoKs04Ty5BPHB%2BGQwDHhoFAZWMd4ZuWVdZ1X06I3TA7KxnrvSrtSn%2FjM0wYZQ4J1vL98TFVIQ9kDZEEwZ8ZnP6SGEUNRLgX1xQs9qb0L%2BZQGVMphy2J6AnhZJMIvnP4pNWoIwRaAntMftMRa585OEFF3zr9oEDS74hfUgTSsc5%2B8uxuYq8c1JfrwLMtGPzuDEN8Z0T7ncWNGDNlYKgo%2BkG2%2BNz0rinziMU33Beh705LrkXwa8g0iYjZy6iI%2BLJdq79Av%2BqkgyTXsO0OW43IC0hkuQZlb1mjWN5Z6ZzqwL18cfYHwurh1HLzCUskMvMsMQysXrpG94oWMtcE%2F04SogTpdWLE7t37w7uPS4VYAcMI%2Fb7cEGOqUBhvHB%2F26TTpIeAThYwNrLZsCbeCsVyLvW6c6imGe8Iw6vyU3Zc%2B5Xvr3T4L43EoDGF5V%2F%2F%2F9n2lq4%2BqddMEJf74Byc%2FYH%2BpnyOYI%2BHebOGsKLZbqHipSRsOFQX6MmHRxpzSo%2BcDYN6mZu9jMffjLRlEff%2BeIugAw4woD%2FF5C55NUf%2Bw%2F8WLbpxyJYCN0iWApuHqJcY0NYyOGkSsEwfwo8xtZ43xGr&X-Amz-Signature=364a99b43415634c653939405ca22b79ac0b8bd84a21a4c895f4df4d2fdc91f8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SH2ETM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCWGzO%2B2p7PjH6zOkoQ5AS97WcwTQ4D8Y1Vldno3e2qwIgDKDtqmPvppfIk%2FTr2%2FTDBhrkGWoYft2Jf1ZHVKchmS0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2BiRr3VtkHJdVxtCrcA0K3V%2FlQ7w6NM3FqpgR8Cg845IXnn1cbcf3upwWfxQOd9MBxgNkZbb13k7EOhlhHNI2gQEDS%2B5FL5hJpfXn3YVO5w5j9PA6nf6TX30iiHVUNp%2FP7ZL44ihTw9lI97%2FcjJF58oP6IYgdjR8MdsFKNTQpe4DljpMmjK9I5RgXTrYoZbX0r8GTsEIPNjF%2F5I7GeggkTDZZjgkvhzrvcJnYYbyionJrIE3SGs99UBBno940Bsl2lOlCAp04QhpAjCz1A91OXp%2FSW0ygzgGNmjYmmoKs04Ty5BPHB%2BGQwDHhoFAZWMd4ZuWVdZ1X06I3TA7KxnrvSrtSn%2FjM0wYZQ4J1vL98TFVIQ9kDZEEwZ8ZnP6SGEUNRLgX1xQs9qb0L%2BZQGVMphy2J6AnhZJMIvnP4pNWoIwRaAntMftMRa585OEFF3zr9oEDS74hfUgTSsc5%2B8uxuYq8c1JfrwLMtGPzuDEN8Z0T7ncWNGDNlYKgo%2BkG2%2BNz0rinziMU33Beh705LrkXwa8g0iYjZy6iI%2BLJdq79Av%2BqkgyTXsO0OW43IC0hkuQZlb1mjWN5Z6ZzqwL18cfYHwurh1HLzCUskMvMsMQysXrpG94oWMtcE%2F04SogTpdWLE7t37w7uPS4VYAcMI%2Fb7cEGOqUBhvHB%2F26TTpIeAThYwNrLZsCbeCsVyLvW6c6imGe8Iw6vyU3Zc%2B5Xvr3T4L43EoDGF5V%2F%2F%2F9n2lq4%2BqddMEJf74Byc%2FYH%2BpnyOYI%2BHebOGsKLZbqHipSRsOFQX6MmHRxpzSo%2BcDYN6mZu9jMffjLRlEff%2BeIugAw4woD%2FF5C55NUf%2Bw%2F8WLbpxyJYCN0iWApuHqJcY0NYyOGkSsEwfwo8xtZ43xGr&X-Amz-Signature=7f74fc18abcfde65eb8226bf00d256d95ba302902de133a463e9faf4e2a1979e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SH2ETM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCWGzO%2B2p7PjH6zOkoQ5AS97WcwTQ4D8Y1Vldno3e2qwIgDKDtqmPvppfIk%2FTr2%2FTDBhrkGWoYft2Jf1ZHVKchmS0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2BiRr3VtkHJdVxtCrcA0K3V%2FlQ7w6NM3FqpgR8Cg845IXnn1cbcf3upwWfxQOd9MBxgNkZbb13k7EOhlhHNI2gQEDS%2B5FL5hJpfXn3YVO5w5j9PA6nf6TX30iiHVUNp%2FP7ZL44ihTw9lI97%2FcjJF58oP6IYgdjR8MdsFKNTQpe4DljpMmjK9I5RgXTrYoZbX0r8GTsEIPNjF%2F5I7GeggkTDZZjgkvhzrvcJnYYbyionJrIE3SGs99UBBno940Bsl2lOlCAp04QhpAjCz1A91OXp%2FSW0ygzgGNmjYmmoKs04Ty5BPHB%2BGQwDHhoFAZWMd4ZuWVdZ1X06I3TA7KxnrvSrtSn%2FjM0wYZQ4J1vL98TFVIQ9kDZEEwZ8ZnP6SGEUNRLgX1xQs9qb0L%2BZQGVMphy2J6AnhZJMIvnP4pNWoIwRaAntMftMRa585OEFF3zr9oEDS74hfUgTSsc5%2B8uxuYq8c1JfrwLMtGPzuDEN8Z0T7ncWNGDNlYKgo%2BkG2%2BNz0rinziMU33Beh705LrkXwa8g0iYjZy6iI%2BLJdq79Av%2BqkgyTXsO0OW43IC0hkuQZlb1mjWN5Z6ZzqwL18cfYHwurh1HLzCUskMvMsMQysXrpG94oWMtcE%2F04SogTpdWLE7t37w7uPS4VYAcMI%2Fb7cEGOqUBhvHB%2F26TTpIeAThYwNrLZsCbeCsVyLvW6c6imGe8Iw6vyU3Zc%2B5Xvr3T4L43EoDGF5V%2F%2F%2F9n2lq4%2BqddMEJf74Byc%2FYH%2BpnyOYI%2BHebOGsKLZbqHipSRsOFQX6MmHRxpzSo%2BcDYN6mZu9jMffjLRlEff%2BeIugAw4woD%2FF5C55NUf%2Bw%2F8WLbpxyJYCN0iWApuHqJcY0NYyOGkSsEwfwo8xtZ43xGr&X-Amz-Signature=a1de71fad11bf8cfb37b6b633825458c7aa61343ee4aca77aecc7442ef809abf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

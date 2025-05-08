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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW375L5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu8aPxhz7BJ3pto2pqgSOCHwLbq6sIcsfRiq71Xqm%2B5QIgMfvhm0BcAZD3dPIMmREyDe9vveLmjNNtRZRnQBP0%2Bnsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNyJdm67tdqCuA3XqyrcA0W35SDYdJgEUkp1tiNc3wVyFSHedpCmJJ77N6%2FoQ6D3WH9rcAHo6lo2So41TVxd28tBM0bTbIv58jcBshc6Hd4lV40yzJ3%2F637Xs%2F2%2Bxx36a1bea96Ipg%2FE9svlN9wYd1ANIKbVHLpsWsgudB8NWU7KoX6jLDefRi%2BpFdkqUBOD8saMZiJm7EpURnfVV5Znfz7tHTC8rlgCH%2B9otNhtHRKnJPNKqvlLmrsObQtzMACA5gNH3WGTjVvoC1K3w5Yh1LftXu3J2kkHjH%2B%2Bq4ctx5nX9Ybqr55RRQ0jajTkf6G1fd9AhV0deRfLaQEqFLJSVJevttogHs216KiPqxHQsczNXrb6tvxd3Z%2FysKpxBqe%2FiQk83vodzaHxlnaXkt8dx015WDZijyQliTMCupiMv%2BN3qNvY1Ki53%2BIkYsOFaaGs8e3EWW%2FYbQqXtz92vkMOApMueotScXhWg8OMdXqsNEr4ldcLvaGbzMBC%2BiOGi6HBgpJ5MGKUQ%2Bzq5%2BNrZVXCHwWzwMk%2Bdomw3l45ymRxoVMsCs1Mgc8hxC3FsvItu%2ForIApC2qktc3wOyxHLIsymCkahvZMMYOgP7JSMR65z6ZuxBPrqPGuJwfpsSnOy5PRMeFFSSGsnwm1WjVSBMN3J9MAGOqUBmkhg7eoesD1ZnME6vEDg7IHKkK9x1WiKU1a%2FOigXU8uUUfDTJbOyT0dDY4kMpEWbNQmsUNSbxh8XZYkaDqaF%2BFxjsDMSqpXrI4zgBRQcasxpz5UKTNid9FTA5%2FUf07dtmDtBl2bnsKpDFJ1%2BSKrOIaTV8CFq3M%2BfrL%2BddSS76qZyiK1dyLj8vFB%2BrJjIpiPi9%2FNk1p97q4be1woxb4ZrX20GDLa2&X-Amz-Signature=332b6817f6c8597a37f5f499b1d5dd08a9b129c4cabeba28f7179ddc6606e421&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW375L5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu8aPxhz7BJ3pto2pqgSOCHwLbq6sIcsfRiq71Xqm%2B5QIgMfvhm0BcAZD3dPIMmREyDe9vveLmjNNtRZRnQBP0%2Bnsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNyJdm67tdqCuA3XqyrcA0W35SDYdJgEUkp1tiNc3wVyFSHedpCmJJ77N6%2FoQ6D3WH9rcAHo6lo2So41TVxd28tBM0bTbIv58jcBshc6Hd4lV40yzJ3%2F637Xs%2F2%2Bxx36a1bea96Ipg%2FE9svlN9wYd1ANIKbVHLpsWsgudB8NWU7KoX6jLDefRi%2BpFdkqUBOD8saMZiJm7EpURnfVV5Znfz7tHTC8rlgCH%2B9otNhtHRKnJPNKqvlLmrsObQtzMACA5gNH3WGTjVvoC1K3w5Yh1LftXu3J2kkHjH%2B%2Bq4ctx5nX9Ybqr55RRQ0jajTkf6G1fd9AhV0deRfLaQEqFLJSVJevttogHs216KiPqxHQsczNXrb6tvxd3Z%2FysKpxBqe%2FiQk83vodzaHxlnaXkt8dx015WDZijyQliTMCupiMv%2BN3qNvY1Ki53%2BIkYsOFaaGs8e3EWW%2FYbQqXtz92vkMOApMueotScXhWg8OMdXqsNEr4ldcLvaGbzMBC%2BiOGi6HBgpJ5MGKUQ%2Bzq5%2BNrZVXCHwWzwMk%2Bdomw3l45ymRxoVMsCs1Mgc8hxC3FsvItu%2ForIApC2qktc3wOyxHLIsymCkahvZMMYOgP7JSMR65z6ZuxBPrqPGuJwfpsSnOy5PRMeFFSSGsnwm1WjVSBMN3J9MAGOqUBmkhg7eoesD1ZnME6vEDg7IHKkK9x1WiKU1a%2FOigXU8uUUfDTJbOyT0dDY4kMpEWbNQmsUNSbxh8XZYkaDqaF%2BFxjsDMSqpXrI4zgBRQcasxpz5UKTNid9FTA5%2FUf07dtmDtBl2bnsKpDFJ1%2BSKrOIaTV8CFq3M%2BfrL%2BddSS76qZyiK1dyLj8vFB%2BrJjIpiPi9%2FNk1p97q4be1woxb4ZrX20GDLa2&X-Amz-Signature=cfb53144448541ad85f3e0acfde0ca77e0605e1937c0e1ebf17e1c29705b48e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW375L5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu8aPxhz7BJ3pto2pqgSOCHwLbq6sIcsfRiq71Xqm%2B5QIgMfvhm0BcAZD3dPIMmREyDe9vveLmjNNtRZRnQBP0%2Bnsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNyJdm67tdqCuA3XqyrcA0W35SDYdJgEUkp1tiNc3wVyFSHedpCmJJ77N6%2FoQ6D3WH9rcAHo6lo2So41TVxd28tBM0bTbIv58jcBshc6Hd4lV40yzJ3%2F637Xs%2F2%2Bxx36a1bea96Ipg%2FE9svlN9wYd1ANIKbVHLpsWsgudB8NWU7KoX6jLDefRi%2BpFdkqUBOD8saMZiJm7EpURnfVV5Znfz7tHTC8rlgCH%2B9otNhtHRKnJPNKqvlLmrsObQtzMACA5gNH3WGTjVvoC1K3w5Yh1LftXu3J2kkHjH%2B%2Bq4ctx5nX9Ybqr55RRQ0jajTkf6G1fd9AhV0deRfLaQEqFLJSVJevttogHs216KiPqxHQsczNXrb6tvxd3Z%2FysKpxBqe%2FiQk83vodzaHxlnaXkt8dx015WDZijyQliTMCupiMv%2BN3qNvY1Ki53%2BIkYsOFaaGs8e3EWW%2FYbQqXtz92vkMOApMueotScXhWg8OMdXqsNEr4ldcLvaGbzMBC%2BiOGi6HBgpJ5MGKUQ%2Bzq5%2BNrZVXCHwWzwMk%2Bdomw3l45ymRxoVMsCs1Mgc8hxC3FsvItu%2ForIApC2qktc3wOyxHLIsymCkahvZMMYOgP7JSMR65z6ZuxBPrqPGuJwfpsSnOy5PRMeFFSSGsnwm1WjVSBMN3J9MAGOqUBmkhg7eoesD1ZnME6vEDg7IHKkK9x1WiKU1a%2FOigXU8uUUfDTJbOyT0dDY4kMpEWbNQmsUNSbxh8XZYkaDqaF%2BFxjsDMSqpXrI4zgBRQcasxpz5UKTNid9FTA5%2FUf07dtmDtBl2bnsKpDFJ1%2BSKrOIaTV8CFq3M%2BfrL%2BddSS76qZyiK1dyLj8vFB%2BrJjIpiPi9%2FNk1p97q4be1woxb4ZrX20GDLa2&X-Amz-Signature=46bc837dfd26322648f1a3544d5c7f1e0696079ba7fdee38d99cc6ced01b40d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW375L5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu8aPxhz7BJ3pto2pqgSOCHwLbq6sIcsfRiq71Xqm%2B5QIgMfvhm0BcAZD3dPIMmREyDe9vveLmjNNtRZRnQBP0%2Bnsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNyJdm67tdqCuA3XqyrcA0W35SDYdJgEUkp1tiNc3wVyFSHedpCmJJ77N6%2FoQ6D3WH9rcAHo6lo2So41TVxd28tBM0bTbIv58jcBshc6Hd4lV40yzJ3%2F637Xs%2F2%2Bxx36a1bea96Ipg%2FE9svlN9wYd1ANIKbVHLpsWsgudB8NWU7KoX6jLDefRi%2BpFdkqUBOD8saMZiJm7EpURnfVV5Znfz7tHTC8rlgCH%2B9otNhtHRKnJPNKqvlLmrsObQtzMACA5gNH3WGTjVvoC1K3w5Yh1LftXu3J2kkHjH%2B%2Bq4ctx5nX9Ybqr55RRQ0jajTkf6G1fd9AhV0deRfLaQEqFLJSVJevttogHs216KiPqxHQsczNXrb6tvxd3Z%2FysKpxBqe%2FiQk83vodzaHxlnaXkt8dx015WDZijyQliTMCupiMv%2BN3qNvY1Ki53%2BIkYsOFaaGs8e3EWW%2FYbQqXtz92vkMOApMueotScXhWg8OMdXqsNEr4ldcLvaGbzMBC%2BiOGi6HBgpJ5MGKUQ%2Bzq5%2BNrZVXCHwWzwMk%2Bdomw3l45ymRxoVMsCs1Mgc8hxC3FsvItu%2ForIApC2qktc3wOyxHLIsymCkahvZMMYOgP7JSMR65z6ZuxBPrqPGuJwfpsSnOy5PRMeFFSSGsnwm1WjVSBMN3J9MAGOqUBmkhg7eoesD1ZnME6vEDg7IHKkK9x1WiKU1a%2FOigXU8uUUfDTJbOyT0dDY4kMpEWbNQmsUNSbxh8XZYkaDqaF%2BFxjsDMSqpXrI4zgBRQcasxpz5UKTNid9FTA5%2FUf07dtmDtBl2bnsKpDFJ1%2BSKrOIaTV8CFq3M%2BfrL%2BddSS76qZyiK1dyLj8vFB%2BrJjIpiPi9%2FNk1p97q4be1woxb4ZrX20GDLa2&X-Amz-Signature=106dc5eca7d83cfa4aec8f362c87c42ae7b007dd1f4a98f24ef05da290a6330d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW375L5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu8aPxhz7BJ3pto2pqgSOCHwLbq6sIcsfRiq71Xqm%2B5QIgMfvhm0BcAZD3dPIMmREyDe9vveLmjNNtRZRnQBP0%2Bnsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNyJdm67tdqCuA3XqyrcA0W35SDYdJgEUkp1tiNc3wVyFSHedpCmJJ77N6%2FoQ6D3WH9rcAHo6lo2So41TVxd28tBM0bTbIv58jcBshc6Hd4lV40yzJ3%2F637Xs%2F2%2Bxx36a1bea96Ipg%2FE9svlN9wYd1ANIKbVHLpsWsgudB8NWU7KoX6jLDefRi%2BpFdkqUBOD8saMZiJm7EpURnfVV5Znfz7tHTC8rlgCH%2B9otNhtHRKnJPNKqvlLmrsObQtzMACA5gNH3WGTjVvoC1K3w5Yh1LftXu3J2kkHjH%2B%2Bq4ctx5nX9Ybqr55RRQ0jajTkf6G1fd9AhV0deRfLaQEqFLJSVJevttogHs216KiPqxHQsczNXrb6tvxd3Z%2FysKpxBqe%2FiQk83vodzaHxlnaXkt8dx015WDZijyQliTMCupiMv%2BN3qNvY1Ki53%2BIkYsOFaaGs8e3EWW%2FYbQqXtz92vkMOApMueotScXhWg8OMdXqsNEr4ldcLvaGbzMBC%2BiOGi6HBgpJ5MGKUQ%2Bzq5%2BNrZVXCHwWzwMk%2Bdomw3l45ymRxoVMsCs1Mgc8hxC3FsvItu%2ForIApC2qktc3wOyxHLIsymCkahvZMMYOgP7JSMR65z6ZuxBPrqPGuJwfpsSnOy5PRMeFFSSGsnwm1WjVSBMN3J9MAGOqUBmkhg7eoesD1ZnME6vEDg7IHKkK9x1WiKU1a%2FOigXU8uUUfDTJbOyT0dDY4kMpEWbNQmsUNSbxh8XZYkaDqaF%2BFxjsDMSqpXrI4zgBRQcasxpz5UKTNid9FTA5%2FUf07dtmDtBl2bnsKpDFJ1%2BSKrOIaTV8CFq3M%2BfrL%2BddSS76qZyiK1dyLj8vFB%2BrJjIpiPi9%2FNk1p97q4be1woxb4ZrX20GDLa2&X-Amz-Signature=583e48ee0d4bfe2266d5ea5a9fa9c08ba04f5256b3f78e7173d9845c4dee34ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW375L5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu8aPxhz7BJ3pto2pqgSOCHwLbq6sIcsfRiq71Xqm%2B5QIgMfvhm0BcAZD3dPIMmREyDe9vveLmjNNtRZRnQBP0%2Bnsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNyJdm67tdqCuA3XqyrcA0W35SDYdJgEUkp1tiNc3wVyFSHedpCmJJ77N6%2FoQ6D3WH9rcAHo6lo2So41TVxd28tBM0bTbIv58jcBshc6Hd4lV40yzJ3%2F637Xs%2F2%2Bxx36a1bea96Ipg%2FE9svlN9wYd1ANIKbVHLpsWsgudB8NWU7KoX6jLDefRi%2BpFdkqUBOD8saMZiJm7EpURnfVV5Znfz7tHTC8rlgCH%2B9otNhtHRKnJPNKqvlLmrsObQtzMACA5gNH3WGTjVvoC1K3w5Yh1LftXu3J2kkHjH%2B%2Bq4ctx5nX9Ybqr55RRQ0jajTkf6G1fd9AhV0deRfLaQEqFLJSVJevttogHs216KiPqxHQsczNXrb6tvxd3Z%2FysKpxBqe%2FiQk83vodzaHxlnaXkt8dx015WDZijyQliTMCupiMv%2BN3qNvY1Ki53%2BIkYsOFaaGs8e3EWW%2FYbQqXtz92vkMOApMueotScXhWg8OMdXqsNEr4ldcLvaGbzMBC%2BiOGi6HBgpJ5MGKUQ%2Bzq5%2BNrZVXCHwWzwMk%2Bdomw3l45ymRxoVMsCs1Mgc8hxC3FsvItu%2ForIApC2qktc3wOyxHLIsymCkahvZMMYOgP7JSMR65z6ZuxBPrqPGuJwfpsSnOy5PRMeFFSSGsnwm1WjVSBMN3J9MAGOqUBmkhg7eoesD1ZnME6vEDg7IHKkK9x1WiKU1a%2FOigXU8uUUfDTJbOyT0dDY4kMpEWbNQmsUNSbxh8XZYkaDqaF%2BFxjsDMSqpXrI4zgBRQcasxpz5UKTNid9FTA5%2FUf07dtmDtBl2bnsKpDFJ1%2BSKrOIaTV8CFq3M%2BfrL%2BddSS76qZyiK1dyLj8vFB%2BrJjIpiPi9%2FNk1p97q4be1woxb4ZrX20GDLa2&X-Amz-Signature=739d46057f36607f31efb21ad499755e0c9f1bce6a9c90dc9613559e1f58dff2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW375L5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu8aPxhz7BJ3pto2pqgSOCHwLbq6sIcsfRiq71Xqm%2B5QIgMfvhm0BcAZD3dPIMmREyDe9vveLmjNNtRZRnQBP0%2Bnsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNyJdm67tdqCuA3XqyrcA0W35SDYdJgEUkp1tiNc3wVyFSHedpCmJJ77N6%2FoQ6D3WH9rcAHo6lo2So41TVxd28tBM0bTbIv58jcBshc6Hd4lV40yzJ3%2F637Xs%2F2%2Bxx36a1bea96Ipg%2FE9svlN9wYd1ANIKbVHLpsWsgudB8NWU7KoX6jLDefRi%2BpFdkqUBOD8saMZiJm7EpURnfVV5Znfz7tHTC8rlgCH%2B9otNhtHRKnJPNKqvlLmrsObQtzMACA5gNH3WGTjVvoC1K3w5Yh1LftXu3J2kkHjH%2B%2Bq4ctx5nX9Ybqr55RRQ0jajTkf6G1fd9AhV0deRfLaQEqFLJSVJevttogHs216KiPqxHQsczNXrb6tvxd3Z%2FysKpxBqe%2FiQk83vodzaHxlnaXkt8dx015WDZijyQliTMCupiMv%2BN3qNvY1Ki53%2BIkYsOFaaGs8e3EWW%2FYbQqXtz92vkMOApMueotScXhWg8OMdXqsNEr4ldcLvaGbzMBC%2BiOGi6HBgpJ5MGKUQ%2Bzq5%2BNrZVXCHwWzwMk%2Bdomw3l45ymRxoVMsCs1Mgc8hxC3FsvItu%2ForIApC2qktc3wOyxHLIsymCkahvZMMYOgP7JSMR65z6ZuxBPrqPGuJwfpsSnOy5PRMeFFSSGsnwm1WjVSBMN3J9MAGOqUBmkhg7eoesD1ZnME6vEDg7IHKkK9x1WiKU1a%2FOigXU8uUUfDTJbOyT0dDY4kMpEWbNQmsUNSbxh8XZYkaDqaF%2BFxjsDMSqpXrI4zgBRQcasxpz5UKTNid9FTA5%2FUf07dtmDtBl2bnsKpDFJ1%2BSKrOIaTV8CFq3M%2BfrL%2BddSS76qZyiK1dyLj8vFB%2BrJjIpiPi9%2FNk1p97q4be1woxb4ZrX20GDLa2&X-Amz-Signature=5052e7d755f49c86b69840a2f86a8f3c301d077a64d4de36a1254a10d3a66b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

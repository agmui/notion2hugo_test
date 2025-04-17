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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBOFDCE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qtc8gWw8iPEU2mjo6BGCBJvBDE9d9wrMlBYOfREG2AIgEGfSiyZuocXWdeRu8MboDA0vA%2BIiRnKwoEJGO7OBZmQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNIQns3t%2BFLsjngEfyrcAz0otQrSVsykyVzdYstTnW0mRkhccG01M9zJoQakW8%2BYcnenuaHn6pJjV1BpUUNNVprAwxQH6MteGrmldPo4tLTgmtGMaATkI0D22CA%2FTHPiW%2FRJSKMTzV53%2BuzpB8Uigk%2BFcQnAlJ0XQJmUEFgQeRAmrazbGQfu0hQ4ixM8LQr1UVnV4ZTXekewivxjbD1k7dgQr2ao62bGay1PRYbaqzxNBhG5IL3bgQbzVu8I1JiSADEIX34tNSn2N3jdGtCBFUYOFACsC8EfB5VYshhH88o8Otpd%2FFWYPnhC%2BBoOQZarNT9V3fWmmBpW%2FxyLWx7vgoWDxduCH91Q098Lgdgso1WWqqfCf8Swcqo1V7CIAMNsO%2Ffui%2FQpFVs9GbRLd%2FaPgVwz6jkQMExn%2FbDNGnUaIdDxM4Xf5OwxWsf%2FN8d12g%2BQw7sMaYOAzMJUzGATUC2gJz5byuEnH88xca0FA8bfiG8fagqvI2gjhDxsr2uWJbfVqJll4Rm6yT3aLMZAuUX9mf4xdwu%2B76rwGYO%2Bs0ZgVJVrzb844GIvuBk%2BzX1sXOBjOdkqTAfpLTg3ibmGckQQM1cCivdpuaJJhtF%2Fhkk%2FfvfMw%2BgIfX%2BFAmFEdYg6wm0oXT7ldhfKhpsya%2F5pMKvhgcAGOqUBwA7PwpV628TwTM8GoJqQoH%2BKV1jvdMXV9BNKZgCYUEKiDf17J%2BrZRRUBMJIzn2W5vMp6tzlbcU4Gh7tUJuzx%2BZt4XCMavZEEMpOZXtMAiXDERY%2B7dsbgelvCuRXMY3rhxG6Bo1HaIog8Sc7bC5qv5kTxJrPfb9sMtTMheQjQtkEwjvbdoEG1otRi57%2FwrLSqqrHkvo2aaFHskknA3P9o3G8EK8Jo&X-Amz-Signature=b864540523c7ca361b1e2937e90a73f6d0c06cadcc75ea8445d9e5be653fc424&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBOFDCE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qtc8gWw8iPEU2mjo6BGCBJvBDE9d9wrMlBYOfREG2AIgEGfSiyZuocXWdeRu8MboDA0vA%2BIiRnKwoEJGO7OBZmQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNIQns3t%2BFLsjngEfyrcAz0otQrSVsykyVzdYstTnW0mRkhccG01M9zJoQakW8%2BYcnenuaHn6pJjV1BpUUNNVprAwxQH6MteGrmldPo4tLTgmtGMaATkI0D22CA%2FTHPiW%2FRJSKMTzV53%2BuzpB8Uigk%2BFcQnAlJ0XQJmUEFgQeRAmrazbGQfu0hQ4ixM8LQr1UVnV4ZTXekewivxjbD1k7dgQr2ao62bGay1PRYbaqzxNBhG5IL3bgQbzVu8I1JiSADEIX34tNSn2N3jdGtCBFUYOFACsC8EfB5VYshhH88o8Otpd%2FFWYPnhC%2BBoOQZarNT9V3fWmmBpW%2FxyLWx7vgoWDxduCH91Q098Lgdgso1WWqqfCf8Swcqo1V7CIAMNsO%2Ffui%2FQpFVs9GbRLd%2FaPgVwz6jkQMExn%2FbDNGnUaIdDxM4Xf5OwxWsf%2FN8d12g%2BQw7sMaYOAzMJUzGATUC2gJz5byuEnH88xca0FA8bfiG8fagqvI2gjhDxsr2uWJbfVqJll4Rm6yT3aLMZAuUX9mf4xdwu%2B76rwGYO%2Bs0ZgVJVrzb844GIvuBk%2BzX1sXOBjOdkqTAfpLTg3ibmGckQQM1cCivdpuaJJhtF%2Fhkk%2FfvfMw%2BgIfX%2BFAmFEdYg6wm0oXT7ldhfKhpsya%2F5pMKvhgcAGOqUBwA7PwpV628TwTM8GoJqQoH%2BKV1jvdMXV9BNKZgCYUEKiDf17J%2BrZRRUBMJIzn2W5vMp6tzlbcU4Gh7tUJuzx%2BZt4XCMavZEEMpOZXtMAiXDERY%2B7dsbgelvCuRXMY3rhxG6Bo1HaIog8Sc7bC5qv5kTxJrPfb9sMtTMheQjQtkEwjvbdoEG1otRi57%2FwrLSqqrHkvo2aaFHskknA3P9o3G8EK8Jo&X-Amz-Signature=fdb9663b7f5c04b9bc86b2c44c1ba2080f5139fb8d2b5bf4874bacbb2a09eb25&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBOFDCE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qtc8gWw8iPEU2mjo6BGCBJvBDE9d9wrMlBYOfREG2AIgEGfSiyZuocXWdeRu8MboDA0vA%2BIiRnKwoEJGO7OBZmQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNIQns3t%2BFLsjngEfyrcAz0otQrSVsykyVzdYstTnW0mRkhccG01M9zJoQakW8%2BYcnenuaHn6pJjV1BpUUNNVprAwxQH6MteGrmldPo4tLTgmtGMaATkI0D22CA%2FTHPiW%2FRJSKMTzV53%2BuzpB8Uigk%2BFcQnAlJ0XQJmUEFgQeRAmrazbGQfu0hQ4ixM8LQr1UVnV4ZTXekewivxjbD1k7dgQr2ao62bGay1PRYbaqzxNBhG5IL3bgQbzVu8I1JiSADEIX34tNSn2N3jdGtCBFUYOFACsC8EfB5VYshhH88o8Otpd%2FFWYPnhC%2BBoOQZarNT9V3fWmmBpW%2FxyLWx7vgoWDxduCH91Q098Lgdgso1WWqqfCf8Swcqo1V7CIAMNsO%2Ffui%2FQpFVs9GbRLd%2FaPgVwz6jkQMExn%2FbDNGnUaIdDxM4Xf5OwxWsf%2FN8d12g%2BQw7sMaYOAzMJUzGATUC2gJz5byuEnH88xca0FA8bfiG8fagqvI2gjhDxsr2uWJbfVqJll4Rm6yT3aLMZAuUX9mf4xdwu%2B76rwGYO%2Bs0ZgVJVrzb844GIvuBk%2BzX1sXOBjOdkqTAfpLTg3ibmGckQQM1cCivdpuaJJhtF%2Fhkk%2FfvfMw%2BgIfX%2BFAmFEdYg6wm0oXT7ldhfKhpsya%2F5pMKvhgcAGOqUBwA7PwpV628TwTM8GoJqQoH%2BKV1jvdMXV9BNKZgCYUEKiDf17J%2BrZRRUBMJIzn2W5vMp6tzlbcU4Gh7tUJuzx%2BZt4XCMavZEEMpOZXtMAiXDERY%2B7dsbgelvCuRXMY3rhxG6Bo1HaIog8Sc7bC5qv5kTxJrPfb9sMtTMheQjQtkEwjvbdoEG1otRi57%2FwrLSqqrHkvo2aaFHskknA3P9o3G8EK8Jo&X-Amz-Signature=e4bdc93a42ae35a532f000f4575418de7efed018bdc36c326b4edd9de0974144&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBOFDCE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qtc8gWw8iPEU2mjo6BGCBJvBDE9d9wrMlBYOfREG2AIgEGfSiyZuocXWdeRu8MboDA0vA%2BIiRnKwoEJGO7OBZmQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNIQns3t%2BFLsjngEfyrcAz0otQrSVsykyVzdYstTnW0mRkhccG01M9zJoQakW8%2BYcnenuaHn6pJjV1BpUUNNVprAwxQH6MteGrmldPo4tLTgmtGMaATkI0D22CA%2FTHPiW%2FRJSKMTzV53%2BuzpB8Uigk%2BFcQnAlJ0XQJmUEFgQeRAmrazbGQfu0hQ4ixM8LQr1UVnV4ZTXekewivxjbD1k7dgQr2ao62bGay1PRYbaqzxNBhG5IL3bgQbzVu8I1JiSADEIX34tNSn2N3jdGtCBFUYOFACsC8EfB5VYshhH88o8Otpd%2FFWYPnhC%2BBoOQZarNT9V3fWmmBpW%2FxyLWx7vgoWDxduCH91Q098Lgdgso1WWqqfCf8Swcqo1V7CIAMNsO%2Ffui%2FQpFVs9GbRLd%2FaPgVwz6jkQMExn%2FbDNGnUaIdDxM4Xf5OwxWsf%2FN8d12g%2BQw7sMaYOAzMJUzGATUC2gJz5byuEnH88xca0FA8bfiG8fagqvI2gjhDxsr2uWJbfVqJll4Rm6yT3aLMZAuUX9mf4xdwu%2B76rwGYO%2Bs0ZgVJVrzb844GIvuBk%2BzX1sXOBjOdkqTAfpLTg3ibmGckQQM1cCivdpuaJJhtF%2Fhkk%2FfvfMw%2BgIfX%2BFAmFEdYg6wm0oXT7ldhfKhpsya%2F5pMKvhgcAGOqUBwA7PwpV628TwTM8GoJqQoH%2BKV1jvdMXV9BNKZgCYUEKiDf17J%2BrZRRUBMJIzn2W5vMp6tzlbcU4Gh7tUJuzx%2BZt4XCMavZEEMpOZXtMAiXDERY%2B7dsbgelvCuRXMY3rhxG6Bo1HaIog8Sc7bC5qv5kTxJrPfb9sMtTMheQjQtkEwjvbdoEG1otRi57%2FwrLSqqrHkvo2aaFHskknA3P9o3G8EK8Jo&X-Amz-Signature=891e2302cc84e89344aad8332992598388429039c1f4bb0acd16116fa386aca0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBOFDCE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qtc8gWw8iPEU2mjo6BGCBJvBDE9d9wrMlBYOfREG2AIgEGfSiyZuocXWdeRu8MboDA0vA%2BIiRnKwoEJGO7OBZmQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNIQns3t%2BFLsjngEfyrcAz0otQrSVsykyVzdYstTnW0mRkhccG01M9zJoQakW8%2BYcnenuaHn6pJjV1BpUUNNVprAwxQH6MteGrmldPo4tLTgmtGMaATkI0D22CA%2FTHPiW%2FRJSKMTzV53%2BuzpB8Uigk%2BFcQnAlJ0XQJmUEFgQeRAmrazbGQfu0hQ4ixM8LQr1UVnV4ZTXekewivxjbD1k7dgQr2ao62bGay1PRYbaqzxNBhG5IL3bgQbzVu8I1JiSADEIX34tNSn2N3jdGtCBFUYOFACsC8EfB5VYshhH88o8Otpd%2FFWYPnhC%2BBoOQZarNT9V3fWmmBpW%2FxyLWx7vgoWDxduCH91Q098Lgdgso1WWqqfCf8Swcqo1V7CIAMNsO%2Ffui%2FQpFVs9GbRLd%2FaPgVwz6jkQMExn%2FbDNGnUaIdDxM4Xf5OwxWsf%2FN8d12g%2BQw7sMaYOAzMJUzGATUC2gJz5byuEnH88xca0FA8bfiG8fagqvI2gjhDxsr2uWJbfVqJll4Rm6yT3aLMZAuUX9mf4xdwu%2B76rwGYO%2Bs0ZgVJVrzb844GIvuBk%2BzX1sXOBjOdkqTAfpLTg3ibmGckQQM1cCivdpuaJJhtF%2Fhkk%2FfvfMw%2BgIfX%2BFAmFEdYg6wm0oXT7ldhfKhpsya%2F5pMKvhgcAGOqUBwA7PwpV628TwTM8GoJqQoH%2BKV1jvdMXV9BNKZgCYUEKiDf17J%2BrZRRUBMJIzn2W5vMp6tzlbcU4Gh7tUJuzx%2BZt4XCMavZEEMpOZXtMAiXDERY%2B7dsbgelvCuRXMY3rhxG6Bo1HaIog8Sc7bC5qv5kTxJrPfb9sMtTMheQjQtkEwjvbdoEG1otRi57%2FwrLSqqrHkvo2aaFHskknA3P9o3G8EK8Jo&X-Amz-Signature=eedde5d989e8e3cf6c27a79cb88246079a1b4c4a0ba59cc23557852c14c901fd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBOFDCE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qtc8gWw8iPEU2mjo6BGCBJvBDE9d9wrMlBYOfREG2AIgEGfSiyZuocXWdeRu8MboDA0vA%2BIiRnKwoEJGO7OBZmQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNIQns3t%2BFLsjngEfyrcAz0otQrSVsykyVzdYstTnW0mRkhccG01M9zJoQakW8%2BYcnenuaHn6pJjV1BpUUNNVprAwxQH6MteGrmldPo4tLTgmtGMaATkI0D22CA%2FTHPiW%2FRJSKMTzV53%2BuzpB8Uigk%2BFcQnAlJ0XQJmUEFgQeRAmrazbGQfu0hQ4ixM8LQr1UVnV4ZTXekewivxjbD1k7dgQr2ao62bGay1PRYbaqzxNBhG5IL3bgQbzVu8I1JiSADEIX34tNSn2N3jdGtCBFUYOFACsC8EfB5VYshhH88o8Otpd%2FFWYPnhC%2BBoOQZarNT9V3fWmmBpW%2FxyLWx7vgoWDxduCH91Q098Lgdgso1WWqqfCf8Swcqo1V7CIAMNsO%2Ffui%2FQpFVs9GbRLd%2FaPgVwz6jkQMExn%2FbDNGnUaIdDxM4Xf5OwxWsf%2FN8d12g%2BQw7sMaYOAzMJUzGATUC2gJz5byuEnH88xca0FA8bfiG8fagqvI2gjhDxsr2uWJbfVqJll4Rm6yT3aLMZAuUX9mf4xdwu%2B76rwGYO%2Bs0ZgVJVrzb844GIvuBk%2BzX1sXOBjOdkqTAfpLTg3ibmGckQQM1cCivdpuaJJhtF%2Fhkk%2FfvfMw%2BgIfX%2BFAmFEdYg6wm0oXT7ldhfKhpsya%2F5pMKvhgcAGOqUBwA7PwpV628TwTM8GoJqQoH%2BKV1jvdMXV9BNKZgCYUEKiDf17J%2BrZRRUBMJIzn2W5vMp6tzlbcU4Gh7tUJuzx%2BZt4XCMavZEEMpOZXtMAiXDERY%2B7dsbgelvCuRXMY3rhxG6Bo1HaIog8Sc7bC5qv5kTxJrPfb9sMtTMheQjQtkEwjvbdoEG1otRi57%2FwrLSqqrHkvo2aaFHskknA3P9o3G8EK8Jo&X-Amz-Signature=85c2a5ac01d3a4582e6e4f1a4cdab9b948c6d1a340fb58b9c32b3290247852ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBOFDCE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qtc8gWw8iPEU2mjo6BGCBJvBDE9d9wrMlBYOfREG2AIgEGfSiyZuocXWdeRu8MboDA0vA%2BIiRnKwoEJGO7OBZmQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNIQns3t%2BFLsjngEfyrcAz0otQrSVsykyVzdYstTnW0mRkhccG01M9zJoQakW8%2BYcnenuaHn6pJjV1BpUUNNVprAwxQH6MteGrmldPo4tLTgmtGMaATkI0D22CA%2FTHPiW%2FRJSKMTzV53%2BuzpB8Uigk%2BFcQnAlJ0XQJmUEFgQeRAmrazbGQfu0hQ4ixM8LQr1UVnV4ZTXekewivxjbD1k7dgQr2ao62bGay1PRYbaqzxNBhG5IL3bgQbzVu8I1JiSADEIX34tNSn2N3jdGtCBFUYOFACsC8EfB5VYshhH88o8Otpd%2FFWYPnhC%2BBoOQZarNT9V3fWmmBpW%2FxyLWx7vgoWDxduCH91Q098Lgdgso1WWqqfCf8Swcqo1V7CIAMNsO%2Ffui%2FQpFVs9GbRLd%2FaPgVwz6jkQMExn%2FbDNGnUaIdDxM4Xf5OwxWsf%2FN8d12g%2BQw7sMaYOAzMJUzGATUC2gJz5byuEnH88xca0FA8bfiG8fagqvI2gjhDxsr2uWJbfVqJll4Rm6yT3aLMZAuUX9mf4xdwu%2B76rwGYO%2Bs0ZgVJVrzb844GIvuBk%2BzX1sXOBjOdkqTAfpLTg3ibmGckQQM1cCivdpuaJJhtF%2Fhkk%2FfvfMw%2BgIfX%2BFAmFEdYg6wm0oXT7ldhfKhpsya%2F5pMKvhgcAGOqUBwA7PwpV628TwTM8GoJqQoH%2BKV1jvdMXV9BNKZgCYUEKiDf17J%2BrZRRUBMJIzn2W5vMp6tzlbcU4Gh7tUJuzx%2BZt4XCMavZEEMpOZXtMAiXDERY%2B7dsbgelvCuRXMY3rhxG6Bo1HaIog8Sc7bC5qv5kTxJrPfb9sMtTMheQjQtkEwjvbdoEG1otRi57%2FwrLSqqrHkvo2aaFHskknA3P9o3G8EK8Jo&X-Amz-Signature=75fa0d63b34898f3a251580dc03ffed0c3b98f0df37ec6c218f94ec13e8c8e54&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

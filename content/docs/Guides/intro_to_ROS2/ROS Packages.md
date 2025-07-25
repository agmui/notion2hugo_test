---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5GQTV3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICkC318fOc%2Ft10fcY5qWpKusBovuFx0IU49ga6LSrN%2F2AiAY1Cq9lR2dBeBcF9qnv48sQ6t%2FVp6AsJYbfgHsSNJrNCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMlrJ9Kq7F0TMXH9D6KtwDNCgoMajVIx%2FtqlQYYWw8EIsRX8oVJ8SB7eVG%2FenamISOctg%2F%2Ftbals7HuFAM5j%2F4evFq4cv8vujmmnwgrN5fK4slnHR75lhvHncpy8y%2F3ccHdHYf%2BnARMSkopULNk22LUS8HAphXSdWbHlLWBLWMBm%2BZOQhSDlboXLIY9qS%2ByRdJW0imIXLd3M00NKrRJ%2BXsly4mA1P07nk3WaBhDLvVGxI%2FpWjLQfV9Zp7Z1bH4Y5bE10vrV4pFsCi0x8HXTbt%2B4iGERI6h%2Bt51sE8sdbptDHdUdBkugZuwgtt%2FiqJP3a1tjUCcvcjoeiyP77Zo2y7aWJw%2BKaxZGmshxFfqDyLRa63cVpEe1vkQub3PtXhGJV8clRTD6TcME3sM2wvBqX%2Ba5np9rN8FQI4YFNHTJLLFVv2pyHUwaifuIH13jVqwOic%2Bb1BNj%2F76LHjYR8VzpnwcmLj%2FflBsjuxjBVhuJ6lFfOC7T1LPlsx4J6H9m1y9da14MYdYG6Z88sqsXJ8iJLpqryfTb6iJmuRwE9HUtHU1dRv5UgkVWndYyT5T96z6t0TrlhzCmzQdu8Pfp%2FFFlj2EYFIStfCyi0bK1Wf7VCBTXcfaYrXlMmrt1W2G%2BNrZkdIn%2BFNlXQ2X1HH4KQowyIaPxAY6pgGCeQLBeeTLHrDxMh77XyvYYXLkl%2FDxuWWVnlralKoAtJfIFYawNdp0XDFjk69vj2HmXORpqnVyO8tL3SG6me8CRXhgYI6KvfyHe7rvqhzK4I%2Bc7BLLUGJajVC1WaoSsNMV8AE8gQEZ3sDUCdZgRZfIaPeAwwIHkRCp6AvVXSI95o%2BqNzxEjQhZDDk%2FTgyev5VBrzsShsM1T32QakaswBKg%2Blg0VGBK&X-Amz-Signature=06c71a9976293dc051f5e5a01a6a80f7d172651e9d061a2fe9dc824d31d8ed01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5GQTV3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICkC318fOc%2Ft10fcY5qWpKusBovuFx0IU49ga6LSrN%2F2AiAY1Cq9lR2dBeBcF9qnv48sQ6t%2FVp6AsJYbfgHsSNJrNCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMlrJ9Kq7F0TMXH9D6KtwDNCgoMajVIx%2FtqlQYYWw8EIsRX8oVJ8SB7eVG%2FenamISOctg%2F%2Ftbals7HuFAM5j%2F4evFq4cv8vujmmnwgrN5fK4slnHR75lhvHncpy8y%2F3ccHdHYf%2BnARMSkopULNk22LUS8HAphXSdWbHlLWBLWMBm%2BZOQhSDlboXLIY9qS%2ByRdJW0imIXLd3M00NKrRJ%2BXsly4mA1P07nk3WaBhDLvVGxI%2FpWjLQfV9Zp7Z1bH4Y5bE10vrV4pFsCi0x8HXTbt%2B4iGERI6h%2Bt51sE8sdbptDHdUdBkugZuwgtt%2FiqJP3a1tjUCcvcjoeiyP77Zo2y7aWJw%2BKaxZGmshxFfqDyLRa63cVpEe1vkQub3PtXhGJV8clRTD6TcME3sM2wvBqX%2Ba5np9rN8FQI4YFNHTJLLFVv2pyHUwaifuIH13jVqwOic%2Bb1BNj%2F76LHjYR8VzpnwcmLj%2FflBsjuxjBVhuJ6lFfOC7T1LPlsx4J6H9m1y9da14MYdYG6Z88sqsXJ8iJLpqryfTb6iJmuRwE9HUtHU1dRv5UgkVWndYyT5T96z6t0TrlhzCmzQdu8Pfp%2FFFlj2EYFIStfCyi0bK1Wf7VCBTXcfaYrXlMmrt1W2G%2BNrZkdIn%2BFNlXQ2X1HH4KQowyIaPxAY6pgGCeQLBeeTLHrDxMh77XyvYYXLkl%2FDxuWWVnlralKoAtJfIFYawNdp0XDFjk69vj2HmXORpqnVyO8tL3SG6me8CRXhgYI6KvfyHe7rvqhzK4I%2Bc7BLLUGJajVC1WaoSsNMV8AE8gQEZ3sDUCdZgRZfIaPeAwwIHkRCp6AvVXSI95o%2BqNzxEjQhZDDk%2FTgyev5VBrzsShsM1T32QakaswBKg%2Blg0VGBK&X-Amz-Signature=2c7d7c86051e3f094cc45315d538e85c1af1dfaf8536bd245156a52df14523d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5GQTV3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICkC318fOc%2Ft10fcY5qWpKusBovuFx0IU49ga6LSrN%2F2AiAY1Cq9lR2dBeBcF9qnv48sQ6t%2FVp6AsJYbfgHsSNJrNCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMlrJ9Kq7F0TMXH9D6KtwDNCgoMajVIx%2FtqlQYYWw8EIsRX8oVJ8SB7eVG%2FenamISOctg%2F%2Ftbals7HuFAM5j%2F4evFq4cv8vujmmnwgrN5fK4slnHR75lhvHncpy8y%2F3ccHdHYf%2BnARMSkopULNk22LUS8HAphXSdWbHlLWBLWMBm%2BZOQhSDlboXLIY9qS%2ByRdJW0imIXLd3M00NKrRJ%2BXsly4mA1P07nk3WaBhDLvVGxI%2FpWjLQfV9Zp7Z1bH4Y5bE10vrV4pFsCi0x8HXTbt%2B4iGERI6h%2Bt51sE8sdbptDHdUdBkugZuwgtt%2FiqJP3a1tjUCcvcjoeiyP77Zo2y7aWJw%2BKaxZGmshxFfqDyLRa63cVpEe1vkQub3PtXhGJV8clRTD6TcME3sM2wvBqX%2Ba5np9rN8FQI4YFNHTJLLFVv2pyHUwaifuIH13jVqwOic%2Bb1BNj%2F76LHjYR8VzpnwcmLj%2FflBsjuxjBVhuJ6lFfOC7T1LPlsx4J6H9m1y9da14MYdYG6Z88sqsXJ8iJLpqryfTb6iJmuRwE9HUtHU1dRv5UgkVWndYyT5T96z6t0TrlhzCmzQdu8Pfp%2FFFlj2EYFIStfCyi0bK1Wf7VCBTXcfaYrXlMmrt1W2G%2BNrZkdIn%2BFNlXQ2X1HH4KQowyIaPxAY6pgGCeQLBeeTLHrDxMh77XyvYYXLkl%2FDxuWWVnlralKoAtJfIFYawNdp0XDFjk69vj2HmXORpqnVyO8tL3SG6me8CRXhgYI6KvfyHe7rvqhzK4I%2Bc7BLLUGJajVC1WaoSsNMV8AE8gQEZ3sDUCdZgRZfIaPeAwwIHkRCp6AvVXSI95o%2BqNzxEjQhZDDk%2FTgyev5VBrzsShsM1T32QakaswBKg%2Blg0VGBK&X-Amz-Signature=8996d246483b5facbfffb18d5ab82bda88fb5bdd40209fa712ab6c6c30c9c920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5GQTV3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICkC318fOc%2Ft10fcY5qWpKusBovuFx0IU49ga6LSrN%2F2AiAY1Cq9lR2dBeBcF9qnv48sQ6t%2FVp6AsJYbfgHsSNJrNCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMlrJ9Kq7F0TMXH9D6KtwDNCgoMajVIx%2FtqlQYYWw8EIsRX8oVJ8SB7eVG%2FenamISOctg%2F%2Ftbals7HuFAM5j%2F4evFq4cv8vujmmnwgrN5fK4slnHR75lhvHncpy8y%2F3ccHdHYf%2BnARMSkopULNk22LUS8HAphXSdWbHlLWBLWMBm%2BZOQhSDlboXLIY9qS%2ByRdJW0imIXLd3M00NKrRJ%2BXsly4mA1P07nk3WaBhDLvVGxI%2FpWjLQfV9Zp7Z1bH4Y5bE10vrV4pFsCi0x8HXTbt%2B4iGERI6h%2Bt51sE8sdbptDHdUdBkugZuwgtt%2FiqJP3a1tjUCcvcjoeiyP77Zo2y7aWJw%2BKaxZGmshxFfqDyLRa63cVpEe1vkQub3PtXhGJV8clRTD6TcME3sM2wvBqX%2Ba5np9rN8FQI4YFNHTJLLFVv2pyHUwaifuIH13jVqwOic%2Bb1BNj%2F76LHjYR8VzpnwcmLj%2FflBsjuxjBVhuJ6lFfOC7T1LPlsx4J6H9m1y9da14MYdYG6Z88sqsXJ8iJLpqryfTb6iJmuRwE9HUtHU1dRv5UgkVWndYyT5T96z6t0TrlhzCmzQdu8Pfp%2FFFlj2EYFIStfCyi0bK1Wf7VCBTXcfaYrXlMmrt1W2G%2BNrZkdIn%2BFNlXQ2X1HH4KQowyIaPxAY6pgGCeQLBeeTLHrDxMh77XyvYYXLkl%2FDxuWWVnlralKoAtJfIFYawNdp0XDFjk69vj2HmXORpqnVyO8tL3SG6me8CRXhgYI6KvfyHe7rvqhzK4I%2Bc7BLLUGJajVC1WaoSsNMV8AE8gQEZ3sDUCdZgRZfIaPeAwwIHkRCp6AvVXSI95o%2BqNzxEjQhZDDk%2FTgyev5VBrzsShsM1T32QakaswBKg%2Blg0VGBK&X-Amz-Signature=096463b66deab3410f9c0f6136348235cd4ddb0f854beac633b0dc115be7a6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5GQTV3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICkC318fOc%2Ft10fcY5qWpKusBovuFx0IU49ga6LSrN%2F2AiAY1Cq9lR2dBeBcF9qnv48sQ6t%2FVp6AsJYbfgHsSNJrNCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMlrJ9Kq7F0TMXH9D6KtwDNCgoMajVIx%2FtqlQYYWw8EIsRX8oVJ8SB7eVG%2FenamISOctg%2F%2Ftbals7HuFAM5j%2F4evFq4cv8vujmmnwgrN5fK4slnHR75lhvHncpy8y%2F3ccHdHYf%2BnARMSkopULNk22LUS8HAphXSdWbHlLWBLWMBm%2BZOQhSDlboXLIY9qS%2ByRdJW0imIXLd3M00NKrRJ%2BXsly4mA1P07nk3WaBhDLvVGxI%2FpWjLQfV9Zp7Z1bH4Y5bE10vrV4pFsCi0x8HXTbt%2B4iGERI6h%2Bt51sE8sdbptDHdUdBkugZuwgtt%2FiqJP3a1tjUCcvcjoeiyP77Zo2y7aWJw%2BKaxZGmshxFfqDyLRa63cVpEe1vkQub3PtXhGJV8clRTD6TcME3sM2wvBqX%2Ba5np9rN8FQI4YFNHTJLLFVv2pyHUwaifuIH13jVqwOic%2Bb1BNj%2F76LHjYR8VzpnwcmLj%2FflBsjuxjBVhuJ6lFfOC7T1LPlsx4J6H9m1y9da14MYdYG6Z88sqsXJ8iJLpqryfTb6iJmuRwE9HUtHU1dRv5UgkVWndYyT5T96z6t0TrlhzCmzQdu8Pfp%2FFFlj2EYFIStfCyi0bK1Wf7VCBTXcfaYrXlMmrt1W2G%2BNrZkdIn%2BFNlXQ2X1HH4KQowyIaPxAY6pgGCeQLBeeTLHrDxMh77XyvYYXLkl%2FDxuWWVnlralKoAtJfIFYawNdp0XDFjk69vj2HmXORpqnVyO8tL3SG6me8CRXhgYI6KvfyHe7rvqhzK4I%2Bc7BLLUGJajVC1WaoSsNMV8AE8gQEZ3sDUCdZgRZfIaPeAwwIHkRCp6AvVXSI95o%2BqNzxEjQhZDDk%2FTgyev5VBrzsShsM1T32QakaswBKg%2Blg0VGBK&X-Amz-Signature=8388b87f43f62bcab4a5aa229192ea5baea6ebab8b461e23bd3333184ba89b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5GQTV3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICkC318fOc%2Ft10fcY5qWpKusBovuFx0IU49ga6LSrN%2F2AiAY1Cq9lR2dBeBcF9qnv48sQ6t%2FVp6AsJYbfgHsSNJrNCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMlrJ9Kq7F0TMXH9D6KtwDNCgoMajVIx%2FtqlQYYWw8EIsRX8oVJ8SB7eVG%2FenamISOctg%2F%2Ftbals7HuFAM5j%2F4evFq4cv8vujmmnwgrN5fK4slnHR75lhvHncpy8y%2F3ccHdHYf%2BnARMSkopULNk22LUS8HAphXSdWbHlLWBLWMBm%2BZOQhSDlboXLIY9qS%2ByRdJW0imIXLd3M00NKrRJ%2BXsly4mA1P07nk3WaBhDLvVGxI%2FpWjLQfV9Zp7Z1bH4Y5bE10vrV4pFsCi0x8HXTbt%2B4iGERI6h%2Bt51sE8sdbptDHdUdBkugZuwgtt%2FiqJP3a1tjUCcvcjoeiyP77Zo2y7aWJw%2BKaxZGmshxFfqDyLRa63cVpEe1vkQub3PtXhGJV8clRTD6TcME3sM2wvBqX%2Ba5np9rN8FQI4YFNHTJLLFVv2pyHUwaifuIH13jVqwOic%2Bb1BNj%2F76LHjYR8VzpnwcmLj%2FflBsjuxjBVhuJ6lFfOC7T1LPlsx4J6H9m1y9da14MYdYG6Z88sqsXJ8iJLpqryfTb6iJmuRwE9HUtHU1dRv5UgkVWndYyT5T96z6t0TrlhzCmzQdu8Pfp%2FFFlj2EYFIStfCyi0bK1Wf7VCBTXcfaYrXlMmrt1W2G%2BNrZkdIn%2BFNlXQ2X1HH4KQowyIaPxAY6pgGCeQLBeeTLHrDxMh77XyvYYXLkl%2FDxuWWVnlralKoAtJfIFYawNdp0XDFjk69vj2HmXORpqnVyO8tL3SG6me8CRXhgYI6KvfyHe7rvqhzK4I%2Bc7BLLUGJajVC1WaoSsNMV8AE8gQEZ3sDUCdZgRZfIaPeAwwIHkRCp6AvVXSI95o%2BqNzxEjQhZDDk%2FTgyev5VBrzsShsM1T32QakaswBKg%2Blg0VGBK&X-Amz-Signature=ac96ae87adae64efdbb9d80ec7e4fd23d687fe8dfd2b1f0ebac2c029632e9434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5GQTV3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICkC318fOc%2Ft10fcY5qWpKusBovuFx0IU49ga6LSrN%2F2AiAY1Cq9lR2dBeBcF9qnv48sQ6t%2FVp6AsJYbfgHsSNJrNCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMlrJ9Kq7F0TMXH9D6KtwDNCgoMajVIx%2FtqlQYYWw8EIsRX8oVJ8SB7eVG%2FenamISOctg%2F%2Ftbals7HuFAM5j%2F4evFq4cv8vujmmnwgrN5fK4slnHR75lhvHncpy8y%2F3ccHdHYf%2BnARMSkopULNk22LUS8HAphXSdWbHlLWBLWMBm%2BZOQhSDlboXLIY9qS%2ByRdJW0imIXLd3M00NKrRJ%2BXsly4mA1P07nk3WaBhDLvVGxI%2FpWjLQfV9Zp7Z1bH4Y5bE10vrV4pFsCi0x8HXTbt%2B4iGERI6h%2Bt51sE8sdbptDHdUdBkugZuwgtt%2FiqJP3a1tjUCcvcjoeiyP77Zo2y7aWJw%2BKaxZGmshxFfqDyLRa63cVpEe1vkQub3PtXhGJV8clRTD6TcME3sM2wvBqX%2Ba5np9rN8FQI4YFNHTJLLFVv2pyHUwaifuIH13jVqwOic%2Bb1BNj%2F76LHjYR8VzpnwcmLj%2FflBsjuxjBVhuJ6lFfOC7T1LPlsx4J6H9m1y9da14MYdYG6Z88sqsXJ8iJLpqryfTb6iJmuRwE9HUtHU1dRv5UgkVWndYyT5T96z6t0TrlhzCmzQdu8Pfp%2FFFlj2EYFIStfCyi0bK1Wf7VCBTXcfaYrXlMmrt1W2G%2BNrZkdIn%2BFNlXQ2X1HH4KQowyIaPxAY6pgGCeQLBeeTLHrDxMh77XyvYYXLkl%2FDxuWWVnlralKoAtJfIFYawNdp0XDFjk69vj2HmXORpqnVyO8tL3SG6me8CRXhgYI6KvfyHe7rvqhzK4I%2Bc7BLLUGJajVC1WaoSsNMV8AE8gQEZ3sDUCdZgRZfIaPeAwwIHkRCp6AvVXSI95o%2BqNzxEjQhZDDk%2FTgyev5VBrzsShsM1T32QakaswBKg%2Blg0VGBK&X-Amz-Signature=f9498ced96091615da2f64316723eb4c76c432fc41d5ae378367582428a217c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

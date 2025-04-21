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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFYGEL3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAUjh2JzZ1yaHNiWXQMi4h7eO0DlOwrS96IaKBQIO4VMAiEA5Vg%2FSdT5nqMl4fNIeq2n8%2BFgNOtnocGTenoKd%2Bik6MUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGCdn64QZnOJwra%2FircA8yufrx5XISKU2c4k%2BhKEx%2BrM%2FgPCriwqZyRuD0vDj0HE5sgUNVoWh528ndSh2bEZa%2B3%2BC2mOEW9HPsKPWTIuMyaxQunCyEFC%2BEPGS%2Fua%2B09l9PYs6v6eyU%2Fw52Y%2B0%2Ba4WOKgjO5ypezYT7eAr%2F76hWkthDs589u3P5j7XvztdDan%2FnG0V%2BmTpTTzMg2AGuhSRbj5mpqp0rPhjamlmxXhImXInoD3SovSO6iiFd4neMnTOocqmfQCJ1ZKh3gmMG5Ebhftp38wAQ16iyzJLnhbXOXZd%2FdlNpuMUb0RLdK1D1CsvLt70wtx3jzBINiGjrVhhXDREHCURgLRC%2BmK0d8S9IE3WA6kzYpURzlxsM2p6w0zXmmJE%2FaMHQcv2gaL%2BUWKPbjKQsTaX%2BX7E0drFpQChMBVfw5bar%2Fc01Uxh%2FK8HNdAT6UYPgx0vHWGJ%2BC5ETGPt7ntUeKuqKBWOV7XR6YqbwgSeea8D6qdhDuAGajDQEPhK4hOYPBvQbRbrQS%2FrD4FqdWca5e6pVrIvpwWpAUlOJQRFmGSYOBd6tYS25e3ns%2FUqNEVHcH4j907KhbGcculf9gUwRRwewtbEP2aAIXEzdMjUHPqdCVFnzYONYy62TsKT3%2BwrKKKagY4G5qMPO7mMAGOqUBCnZ4bzLo%2FMllguiMwNQq6jmz3SCQgh7TmagVUW9%2FHQ12JBW7hHD%2BWKyQv%2F2AgAOSviMydUbJveSJ2ypZJfadqoJ4MaO0qscxDd0LrgIdhGQgRtDNtUryX1oL7wMmnwxvo7YvwT%2BqGcx4cWMCWY%2F6L%2BOZq7A2ZVhW%2FhPCDwtNLQmsdNyz8BlXrDD8e%2BdlPSSAp3wcV3FDLkaBVHiitccMW8fWXm5a&X-Amz-Signature=a2f95e17d48a16c5e7332b1f110ef073741e8e63bf3db601c1955cc85ff7e9b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFYGEL3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAUjh2JzZ1yaHNiWXQMi4h7eO0DlOwrS96IaKBQIO4VMAiEA5Vg%2FSdT5nqMl4fNIeq2n8%2BFgNOtnocGTenoKd%2Bik6MUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGCdn64QZnOJwra%2FircA8yufrx5XISKU2c4k%2BhKEx%2BrM%2FgPCriwqZyRuD0vDj0HE5sgUNVoWh528ndSh2bEZa%2B3%2BC2mOEW9HPsKPWTIuMyaxQunCyEFC%2BEPGS%2Fua%2B09l9PYs6v6eyU%2Fw52Y%2B0%2Ba4WOKgjO5ypezYT7eAr%2F76hWkthDs589u3P5j7XvztdDan%2FnG0V%2BmTpTTzMg2AGuhSRbj5mpqp0rPhjamlmxXhImXInoD3SovSO6iiFd4neMnTOocqmfQCJ1ZKh3gmMG5Ebhftp38wAQ16iyzJLnhbXOXZd%2FdlNpuMUb0RLdK1D1CsvLt70wtx3jzBINiGjrVhhXDREHCURgLRC%2BmK0d8S9IE3WA6kzYpURzlxsM2p6w0zXmmJE%2FaMHQcv2gaL%2BUWKPbjKQsTaX%2BX7E0drFpQChMBVfw5bar%2Fc01Uxh%2FK8HNdAT6UYPgx0vHWGJ%2BC5ETGPt7ntUeKuqKBWOV7XR6YqbwgSeea8D6qdhDuAGajDQEPhK4hOYPBvQbRbrQS%2FrD4FqdWca5e6pVrIvpwWpAUlOJQRFmGSYOBd6tYS25e3ns%2FUqNEVHcH4j907KhbGcculf9gUwRRwewtbEP2aAIXEzdMjUHPqdCVFnzYONYy62TsKT3%2BwrKKKagY4G5qMPO7mMAGOqUBCnZ4bzLo%2FMllguiMwNQq6jmz3SCQgh7TmagVUW9%2FHQ12JBW7hHD%2BWKyQv%2F2AgAOSviMydUbJveSJ2ypZJfadqoJ4MaO0qscxDd0LrgIdhGQgRtDNtUryX1oL7wMmnwxvo7YvwT%2BqGcx4cWMCWY%2F6L%2BOZq7A2ZVhW%2FhPCDwtNLQmsdNyz8BlXrDD8e%2BdlPSSAp3wcV3FDLkaBVHiitccMW8fWXm5a&X-Amz-Signature=f84918693b04c8739c068f6de99534d9afaeda999108e72b7f880c88a7baab54&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFYGEL3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAUjh2JzZ1yaHNiWXQMi4h7eO0DlOwrS96IaKBQIO4VMAiEA5Vg%2FSdT5nqMl4fNIeq2n8%2BFgNOtnocGTenoKd%2Bik6MUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGCdn64QZnOJwra%2FircA8yufrx5XISKU2c4k%2BhKEx%2BrM%2FgPCriwqZyRuD0vDj0HE5sgUNVoWh528ndSh2bEZa%2B3%2BC2mOEW9HPsKPWTIuMyaxQunCyEFC%2BEPGS%2Fua%2B09l9PYs6v6eyU%2Fw52Y%2B0%2Ba4WOKgjO5ypezYT7eAr%2F76hWkthDs589u3P5j7XvztdDan%2FnG0V%2BmTpTTzMg2AGuhSRbj5mpqp0rPhjamlmxXhImXInoD3SovSO6iiFd4neMnTOocqmfQCJ1ZKh3gmMG5Ebhftp38wAQ16iyzJLnhbXOXZd%2FdlNpuMUb0RLdK1D1CsvLt70wtx3jzBINiGjrVhhXDREHCURgLRC%2BmK0d8S9IE3WA6kzYpURzlxsM2p6w0zXmmJE%2FaMHQcv2gaL%2BUWKPbjKQsTaX%2BX7E0drFpQChMBVfw5bar%2Fc01Uxh%2FK8HNdAT6UYPgx0vHWGJ%2BC5ETGPt7ntUeKuqKBWOV7XR6YqbwgSeea8D6qdhDuAGajDQEPhK4hOYPBvQbRbrQS%2FrD4FqdWca5e6pVrIvpwWpAUlOJQRFmGSYOBd6tYS25e3ns%2FUqNEVHcH4j907KhbGcculf9gUwRRwewtbEP2aAIXEzdMjUHPqdCVFnzYONYy62TsKT3%2BwrKKKagY4G5qMPO7mMAGOqUBCnZ4bzLo%2FMllguiMwNQq6jmz3SCQgh7TmagVUW9%2FHQ12JBW7hHD%2BWKyQv%2F2AgAOSviMydUbJveSJ2ypZJfadqoJ4MaO0qscxDd0LrgIdhGQgRtDNtUryX1oL7wMmnwxvo7YvwT%2BqGcx4cWMCWY%2F6L%2BOZq7A2ZVhW%2FhPCDwtNLQmsdNyz8BlXrDD8e%2BdlPSSAp3wcV3FDLkaBVHiitccMW8fWXm5a&X-Amz-Signature=c5f7739774809656d51f2011555c8e425cd4863754ab2b893339e06947cab714&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFYGEL3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAUjh2JzZ1yaHNiWXQMi4h7eO0DlOwrS96IaKBQIO4VMAiEA5Vg%2FSdT5nqMl4fNIeq2n8%2BFgNOtnocGTenoKd%2Bik6MUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGCdn64QZnOJwra%2FircA8yufrx5XISKU2c4k%2BhKEx%2BrM%2FgPCriwqZyRuD0vDj0HE5sgUNVoWh528ndSh2bEZa%2B3%2BC2mOEW9HPsKPWTIuMyaxQunCyEFC%2BEPGS%2Fua%2B09l9PYs6v6eyU%2Fw52Y%2B0%2Ba4WOKgjO5ypezYT7eAr%2F76hWkthDs589u3P5j7XvztdDan%2FnG0V%2BmTpTTzMg2AGuhSRbj5mpqp0rPhjamlmxXhImXInoD3SovSO6iiFd4neMnTOocqmfQCJ1ZKh3gmMG5Ebhftp38wAQ16iyzJLnhbXOXZd%2FdlNpuMUb0RLdK1D1CsvLt70wtx3jzBINiGjrVhhXDREHCURgLRC%2BmK0d8S9IE3WA6kzYpURzlxsM2p6w0zXmmJE%2FaMHQcv2gaL%2BUWKPbjKQsTaX%2BX7E0drFpQChMBVfw5bar%2Fc01Uxh%2FK8HNdAT6UYPgx0vHWGJ%2BC5ETGPt7ntUeKuqKBWOV7XR6YqbwgSeea8D6qdhDuAGajDQEPhK4hOYPBvQbRbrQS%2FrD4FqdWca5e6pVrIvpwWpAUlOJQRFmGSYOBd6tYS25e3ns%2FUqNEVHcH4j907KhbGcculf9gUwRRwewtbEP2aAIXEzdMjUHPqdCVFnzYONYy62TsKT3%2BwrKKKagY4G5qMPO7mMAGOqUBCnZ4bzLo%2FMllguiMwNQq6jmz3SCQgh7TmagVUW9%2FHQ12JBW7hHD%2BWKyQv%2F2AgAOSviMydUbJveSJ2ypZJfadqoJ4MaO0qscxDd0LrgIdhGQgRtDNtUryX1oL7wMmnwxvo7YvwT%2BqGcx4cWMCWY%2F6L%2BOZq7A2ZVhW%2FhPCDwtNLQmsdNyz8BlXrDD8e%2BdlPSSAp3wcV3FDLkaBVHiitccMW8fWXm5a&X-Amz-Signature=46925acd13f65f7320fbb2f10a4d49cb8a79ab3f0f61c82c7a0a683fe4df1a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFYGEL3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAUjh2JzZ1yaHNiWXQMi4h7eO0DlOwrS96IaKBQIO4VMAiEA5Vg%2FSdT5nqMl4fNIeq2n8%2BFgNOtnocGTenoKd%2Bik6MUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGCdn64QZnOJwra%2FircA8yufrx5XISKU2c4k%2BhKEx%2BrM%2FgPCriwqZyRuD0vDj0HE5sgUNVoWh528ndSh2bEZa%2B3%2BC2mOEW9HPsKPWTIuMyaxQunCyEFC%2BEPGS%2Fua%2B09l9PYs6v6eyU%2Fw52Y%2B0%2Ba4WOKgjO5ypezYT7eAr%2F76hWkthDs589u3P5j7XvztdDan%2FnG0V%2BmTpTTzMg2AGuhSRbj5mpqp0rPhjamlmxXhImXInoD3SovSO6iiFd4neMnTOocqmfQCJ1ZKh3gmMG5Ebhftp38wAQ16iyzJLnhbXOXZd%2FdlNpuMUb0RLdK1D1CsvLt70wtx3jzBINiGjrVhhXDREHCURgLRC%2BmK0d8S9IE3WA6kzYpURzlxsM2p6w0zXmmJE%2FaMHQcv2gaL%2BUWKPbjKQsTaX%2BX7E0drFpQChMBVfw5bar%2Fc01Uxh%2FK8HNdAT6UYPgx0vHWGJ%2BC5ETGPt7ntUeKuqKBWOV7XR6YqbwgSeea8D6qdhDuAGajDQEPhK4hOYPBvQbRbrQS%2FrD4FqdWca5e6pVrIvpwWpAUlOJQRFmGSYOBd6tYS25e3ns%2FUqNEVHcH4j907KhbGcculf9gUwRRwewtbEP2aAIXEzdMjUHPqdCVFnzYONYy62TsKT3%2BwrKKKagY4G5qMPO7mMAGOqUBCnZ4bzLo%2FMllguiMwNQq6jmz3SCQgh7TmagVUW9%2FHQ12JBW7hHD%2BWKyQv%2F2AgAOSviMydUbJveSJ2ypZJfadqoJ4MaO0qscxDd0LrgIdhGQgRtDNtUryX1oL7wMmnwxvo7YvwT%2BqGcx4cWMCWY%2F6L%2BOZq7A2ZVhW%2FhPCDwtNLQmsdNyz8BlXrDD8e%2BdlPSSAp3wcV3FDLkaBVHiitccMW8fWXm5a&X-Amz-Signature=6d0a09c20fe64f745eb7c2b550cea25ec67d69eade9a19c16402b18650b5eb4b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFYGEL3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAUjh2JzZ1yaHNiWXQMi4h7eO0DlOwrS96IaKBQIO4VMAiEA5Vg%2FSdT5nqMl4fNIeq2n8%2BFgNOtnocGTenoKd%2Bik6MUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGCdn64QZnOJwra%2FircA8yufrx5XISKU2c4k%2BhKEx%2BrM%2FgPCriwqZyRuD0vDj0HE5sgUNVoWh528ndSh2bEZa%2B3%2BC2mOEW9HPsKPWTIuMyaxQunCyEFC%2BEPGS%2Fua%2B09l9PYs6v6eyU%2Fw52Y%2B0%2Ba4WOKgjO5ypezYT7eAr%2F76hWkthDs589u3P5j7XvztdDan%2FnG0V%2BmTpTTzMg2AGuhSRbj5mpqp0rPhjamlmxXhImXInoD3SovSO6iiFd4neMnTOocqmfQCJ1ZKh3gmMG5Ebhftp38wAQ16iyzJLnhbXOXZd%2FdlNpuMUb0RLdK1D1CsvLt70wtx3jzBINiGjrVhhXDREHCURgLRC%2BmK0d8S9IE3WA6kzYpURzlxsM2p6w0zXmmJE%2FaMHQcv2gaL%2BUWKPbjKQsTaX%2BX7E0drFpQChMBVfw5bar%2Fc01Uxh%2FK8HNdAT6UYPgx0vHWGJ%2BC5ETGPt7ntUeKuqKBWOV7XR6YqbwgSeea8D6qdhDuAGajDQEPhK4hOYPBvQbRbrQS%2FrD4FqdWca5e6pVrIvpwWpAUlOJQRFmGSYOBd6tYS25e3ns%2FUqNEVHcH4j907KhbGcculf9gUwRRwewtbEP2aAIXEzdMjUHPqdCVFnzYONYy62TsKT3%2BwrKKKagY4G5qMPO7mMAGOqUBCnZ4bzLo%2FMllguiMwNQq6jmz3SCQgh7TmagVUW9%2FHQ12JBW7hHD%2BWKyQv%2F2AgAOSviMydUbJveSJ2ypZJfadqoJ4MaO0qscxDd0LrgIdhGQgRtDNtUryX1oL7wMmnwxvo7YvwT%2BqGcx4cWMCWY%2F6L%2BOZq7A2ZVhW%2FhPCDwtNLQmsdNyz8BlXrDD8e%2BdlPSSAp3wcV3FDLkaBVHiitccMW8fWXm5a&X-Amz-Signature=65b0ce18fe4af9b6b4fcf21ed3ba2a6cae3a90e2f2bd46e69650f01c91a02315&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFYGEL3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAUjh2JzZ1yaHNiWXQMi4h7eO0DlOwrS96IaKBQIO4VMAiEA5Vg%2FSdT5nqMl4fNIeq2n8%2BFgNOtnocGTenoKd%2Bik6MUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGCdn64QZnOJwra%2FircA8yufrx5XISKU2c4k%2BhKEx%2BrM%2FgPCriwqZyRuD0vDj0HE5sgUNVoWh528ndSh2bEZa%2B3%2BC2mOEW9HPsKPWTIuMyaxQunCyEFC%2BEPGS%2Fua%2B09l9PYs6v6eyU%2Fw52Y%2B0%2Ba4WOKgjO5ypezYT7eAr%2F76hWkthDs589u3P5j7XvztdDan%2FnG0V%2BmTpTTzMg2AGuhSRbj5mpqp0rPhjamlmxXhImXInoD3SovSO6iiFd4neMnTOocqmfQCJ1ZKh3gmMG5Ebhftp38wAQ16iyzJLnhbXOXZd%2FdlNpuMUb0RLdK1D1CsvLt70wtx3jzBINiGjrVhhXDREHCURgLRC%2BmK0d8S9IE3WA6kzYpURzlxsM2p6w0zXmmJE%2FaMHQcv2gaL%2BUWKPbjKQsTaX%2BX7E0drFpQChMBVfw5bar%2Fc01Uxh%2FK8HNdAT6UYPgx0vHWGJ%2BC5ETGPt7ntUeKuqKBWOV7XR6YqbwgSeea8D6qdhDuAGajDQEPhK4hOYPBvQbRbrQS%2FrD4FqdWca5e6pVrIvpwWpAUlOJQRFmGSYOBd6tYS25e3ns%2FUqNEVHcH4j907KhbGcculf9gUwRRwewtbEP2aAIXEzdMjUHPqdCVFnzYONYy62TsKT3%2BwrKKKagY4G5qMPO7mMAGOqUBCnZ4bzLo%2FMllguiMwNQq6jmz3SCQgh7TmagVUW9%2FHQ12JBW7hHD%2BWKyQv%2F2AgAOSviMydUbJveSJ2ypZJfadqoJ4MaO0qscxDd0LrgIdhGQgRtDNtUryX1oL7wMmnwxvo7YvwT%2BqGcx4cWMCWY%2F6L%2BOZq7A2ZVhW%2FhPCDwtNLQmsdNyz8BlXrDD8e%2BdlPSSAp3wcV3FDLkaBVHiitccMW8fWXm5a&X-Amz-Signature=ea3a69025a51681cb0b7422db0036f9be2225b55b3f82ab5981ac28d818a6a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

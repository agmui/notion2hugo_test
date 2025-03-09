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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZENWZ5I%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDzAu79T53mrl3WaK%2B3D%2FWLcwQQ76%2FOXLg1om0yEDcOwIgcngjzOwZ3S1G2R0TnF27vtpvwzQstAl98y36Xohj1nUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG%2F0vEW7n88xdxmUPCrcAz3dt98DpK0ei8r0MkmKtEz4%2FJ%2FyrarrVHh2Pa4iWP4L%2FRoUr3oaROnGV2%2BPwXy35GSShlWos2Q2C9q%2FDW%2FGdBhmC2WBXs5uHyve9W%2FZ5Zs%2BgDAPmbdRtqERuZ8DgFFBvIIpXgGA4QJtiywCm07rLTpwkVcAOl%2Fc8QG%2FHOy6XOT0dxFt3%2Fp9ZK0NPP4os%2BshT4fe7QjG9uPGBR4%2FSnvRMiXCa9O1WFLMlsoWo8Lzp%2FUa4XTsovGVCedqRWzGk0fAFxXG3NPOBB1VNJlcWdqSsobfNAjxFoPGL5qXailh%2FAG%2BOChWrgazFd1Z1NwhLlhWWbbARkYGIySVYgTBWi4ehUEJ2hiRotANc510z5rEz4mZUMmBBqLLdioiTDD4t6EjF0rHIKcv4g9g7%2FlVqvXm%2B1NYjEoIkFzNeSk4BIAbT2qH1ADExYvMr3CvL3ZDBso%2B37GzBq%2FMcbobPcJg7S6%2BoVoGgN2tXPfqathD8xtSTvHIslGpv25Xia7Alw3sx1%2Bl9rAjHWthRnQ2nMzpJ%2F7n5RAm3MUUCk6RyV%2BRltzYIfCOnDN6ZvVyfI55v0PE3Ac%2BujfHwonxnVnTcihySnZXhL8l%2BovPOl0z4Lrq5IDS1ueiJPq6d3U94Cu2m3PpMKWPtr4GOqUBoBA6Qa%2FFWarQzEiAnLOLypTH3fJd%2BMXZVE2fSIQrpygO9aajxVbnqAoqSQbVoUTL55%2BwXPlKy%2FP3xMFWBoaBroLkAbZ8kBa1jJp5WAy0juh1cFqGbcgzqIHuRbMHUUj%2BeZU%2Fsz7zd%2BPvs82l%2BTZQn17YY6WfKwqkOXWURmd7d6CJBopx%2Fk0HAFGQTfH6bGYGyCY0W6wtd8t972nZiBkwT8cA%2BT80&X-Amz-Signature=8b3684af2d61953a4cd966e09684203a5d21d7408264a46c13810527c122298d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZENWZ5I%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDzAu79T53mrl3WaK%2B3D%2FWLcwQQ76%2FOXLg1om0yEDcOwIgcngjzOwZ3S1G2R0TnF27vtpvwzQstAl98y36Xohj1nUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG%2F0vEW7n88xdxmUPCrcAz3dt98DpK0ei8r0MkmKtEz4%2FJ%2FyrarrVHh2Pa4iWP4L%2FRoUr3oaROnGV2%2BPwXy35GSShlWos2Q2C9q%2FDW%2FGdBhmC2WBXs5uHyve9W%2FZ5Zs%2BgDAPmbdRtqERuZ8DgFFBvIIpXgGA4QJtiywCm07rLTpwkVcAOl%2Fc8QG%2FHOy6XOT0dxFt3%2Fp9ZK0NPP4os%2BshT4fe7QjG9uPGBR4%2FSnvRMiXCa9O1WFLMlsoWo8Lzp%2FUa4XTsovGVCedqRWzGk0fAFxXG3NPOBB1VNJlcWdqSsobfNAjxFoPGL5qXailh%2FAG%2BOChWrgazFd1Z1NwhLlhWWbbARkYGIySVYgTBWi4ehUEJ2hiRotANc510z5rEz4mZUMmBBqLLdioiTDD4t6EjF0rHIKcv4g9g7%2FlVqvXm%2B1NYjEoIkFzNeSk4BIAbT2qH1ADExYvMr3CvL3ZDBso%2B37GzBq%2FMcbobPcJg7S6%2BoVoGgN2tXPfqathD8xtSTvHIslGpv25Xia7Alw3sx1%2Bl9rAjHWthRnQ2nMzpJ%2F7n5RAm3MUUCk6RyV%2BRltzYIfCOnDN6ZvVyfI55v0PE3Ac%2BujfHwonxnVnTcihySnZXhL8l%2BovPOl0z4Lrq5IDS1ueiJPq6d3U94Cu2m3PpMKWPtr4GOqUBoBA6Qa%2FFWarQzEiAnLOLypTH3fJd%2BMXZVE2fSIQrpygO9aajxVbnqAoqSQbVoUTL55%2BwXPlKy%2FP3xMFWBoaBroLkAbZ8kBa1jJp5WAy0juh1cFqGbcgzqIHuRbMHUUj%2BeZU%2Fsz7zd%2BPvs82l%2BTZQn17YY6WfKwqkOXWURmd7d6CJBopx%2Fk0HAFGQTfH6bGYGyCY0W6wtd8t972nZiBkwT8cA%2BT80&X-Amz-Signature=fd4b10c6dafbe3e353737d3a6c80d7149c01a972058eabb0676a5954ab35b2ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZENWZ5I%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDzAu79T53mrl3WaK%2B3D%2FWLcwQQ76%2FOXLg1om0yEDcOwIgcngjzOwZ3S1G2R0TnF27vtpvwzQstAl98y36Xohj1nUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG%2F0vEW7n88xdxmUPCrcAz3dt98DpK0ei8r0MkmKtEz4%2FJ%2FyrarrVHh2Pa4iWP4L%2FRoUr3oaROnGV2%2BPwXy35GSShlWos2Q2C9q%2FDW%2FGdBhmC2WBXs5uHyve9W%2FZ5Zs%2BgDAPmbdRtqERuZ8DgFFBvIIpXgGA4QJtiywCm07rLTpwkVcAOl%2Fc8QG%2FHOy6XOT0dxFt3%2Fp9ZK0NPP4os%2BshT4fe7QjG9uPGBR4%2FSnvRMiXCa9O1WFLMlsoWo8Lzp%2FUa4XTsovGVCedqRWzGk0fAFxXG3NPOBB1VNJlcWdqSsobfNAjxFoPGL5qXailh%2FAG%2BOChWrgazFd1Z1NwhLlhWWbbARkYGIySVYgTBWi4ehUEJ2hiRotANc510z5rEz4mZUMmBBqLLdioiTDD4t6EjF0rHIKcv4g9g7%2FlVqvXm%2B1NYjEoIkFzNeSk4BIAbT2qH1ADExYvMr3CvL3ZDBso%2B37GzBq%2FMcbobPcJg7S6%2BoVoGgN2tXPfqathD8xtSTvHIslGpv25Xia7Alw3sx1%2Bl9rAjHWthRnQ2nMzpJ%2F7n5RAm3MUUCk6RyV%2BRltzYIfCOnDN6ZvVyfI55v0PE3Ac%2BujfHwonxnVnTcihySnZXhL8l%2BovPOl0z4Lrq5IDS1ueiJPq6d3U94Cu2m3PpMKWPtr4GOqUBoBA6Qa%2FFWarQzEiAnLOLypTH3fJd%2BMXZVE2fSIQrpygO9aajxVbnqAoqSQbVoUTL55%2BwXPlKy%2FP3xMFWBoaBroLkAbZ8kBa1jJp5WAy0juh1cFqGbcgzqIHuRbMHUUj%2BeZU%2Fsz7zd%2BPvs82l%2BTZQn17YY6WfKwqkOXWURmd7d6CJBopx%2Fk0HAFGQTfH6bGYGyCY0W6wtd8t972nZiBkwT8cA%2BT80&X-Amz-Signature=e9445150dc8b9a63414ebd2ed7ffa51cd117bdcf8a9d4c1db5a7e5f98d26ed90&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZENWZ5I%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDzAu79T53mrl3WaK%2B3D%2FWLcwQQ76%2FOXLg1om0yEDcOwIgcngjzOwZ3S1G2R0TnF27vtpvwzQstAl98y36Xohj1nUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG%2F0vEW7n88xdxmUPCrcAz3dt98DpK0ei8r0MkmKtEz4%2FJ%2FyrarrVHh2Pa4iWP4L%2FRoUr3oaROnGV2%2BPwXy35GSShlWos2Q2C9q%2FDW%2FGdBhmC2WBXs5uHyve9W%2FZ5Zs%2BgDAPmbdRtqERuZ8DgFFBvIIpXgGA4QJtiywCm07rLTpwkVcAOl%2Fc8QG%2FHOy6XOT0dxFt3%2Fp9ZK0NPP4os%2BshT4fe7QjG9uPGBR4%2FSnvRMiXCa9O1WFLMlsoWo8Lzp%2FUa4XTsovGVCedqRWzGk0fAFxXG3NPOBB1VNJlcWdqSsobfNAjxFoPGL5qXailh%2FAG%2BOChWrgazFd1Z1NwhLlhWWbbARkYGIySVYgTBWi4ehUEJ2hiRotANc510z5rEz4mZUMmBBqLLdioiTDD4t6EjF0rHIKcv4g9g7%2FlVqvXm%2B1NYjEoIkFzNeSk4BIAbT2qH1ADExYvMr3CvL3ZDBso%2B37GzBq%2FMcbobPcJg7S6%2BoVoGgN2tXPfqathD8xtSTvHIslGpv25Xia7Alw3sx1%2Bl9rAjHWthRnQ2nMzpJ%2F7n5RAm3MUUCk6RyV%2BRltzYIfCOnDN6ZvVyfI55v0PE3Ac%2BujfHwonxnVnTcihySnZXhL8l%2BovPOl0z4Lrq5IDS1ueiJPq6d3U94Cu2m3PpMKWPtr4GOqUBoBA6Qa%2FFWarQzEiAnLOLypTH3fJd%2BMXZVE2fSIQrpygO9aajxVbnqAoqSQbVoUTL55%2BwXPlKy%2FP3xMFWBoaBroLkAbZ8kBa1jJp5WAy0juh1cFqGbcgzqIHuRbMHUUj%2BeZU%2Fsz7zd%2BPvs82l%2BTZQn17YY6WfKwqkOXWURmd7d6CJBopx%2Fk0HAFGQTfH6bGYGyCY0W6wtd8t972nZiBkwT8cA%2BT80&X-Amz-Signature=447a5c18ddf575d56d7789f87b178ec475bf26e5c37426dedc28dafdd3c5e4ef&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZENWZ5I%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDzAu79T53mrl3WaK%2B3D%2FWLcwQQ76%2FOXLg1om0yEDcOwIgcngjzOwZ3S1G2R0TnF27vtpvwzQstAl98y36Xohj1nUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG%2F0vEW7n88xdxmUPCrcAz3dt98DpK0ei8r0MkmKtEz4%2FJ%2FyrarrVHh2Pa4iWP4L%2FRoUr3oaROnGV2%2BPwXy35GSShlWos2Q2C9q%2FDW%2FGdBhmC2WBXs5uHyve9W%2FZ5Zs%2BgDAPmbdRtqERuZ8DgFFBvIIpXgGA4QJtiywCm07rLTpwkVcAOl%2Fc8QG%2FHOy6XOT0dxFt3%2Fp9ZK0NPP4os%2BshT4fe7QjG9uPGBR4%2FSnvRMiXCa9O1WFLMlsoWo8Lzp%2FUa4XTsovGVCedqRWzGk0fAFxXG3NPOBB1VNJlcWdqSsobfNAjxFoPGL5qXailh%2FAG%2BOChWrgazFd1Z1NwhLlhWWbbARkYGIySVYgTBWi4ehUEJ2hiRotANc510z5rEz4mZUMmBBqLLdioiTDD4t6EjF0rHIKcv4g9g7%2FlVqvXm%2B1NYjEoIkFzNeSk4BIAbT2qH1ADExYvMr3CvL3ZDBso%2B37GzBq%2FMcbobPcJg7S6%2BoVoGgN2tXPfqathD8xtSTvHIslGpv25Xia7Alw3sx1%2Bl9rAjHWthRnQ2nMzpJ%2F7n5RAm3MUUCk6RyV%2BRltzYIfCOnDN6ZvVyfI55v0PE3Ac%2BujfHwonxnVnTcihySnZXhL8l%2BovPOl0z4Lrq5IDS1ueiJPq6d3U94Cu2m3PpMKWPtr4GOqUBoBA6Qa%2FFWarQzEiAnLOLypTH3fJd%2BMXZVE2fSIQrpygO9aajxVbnqAoqSQbVoUTL55%2BwXPlKy%2FP3xMFWBoaBroLkAbZ8kBa1jJp5WAy0juh1cFqGbcgzqIHuRbMHUUj%2BeZU%2Fsz7zd%2BPvs82l%2BTZQn17YY6WfKwqkOXWURmd7d6CJBopx%2Fk0HAFGQTfH6bGYGyCY0W6wtd8t972nZiBkwT8cA%2BT80&X-Amz-Signature=a19f007f02645e3e7ae3381a1d4345c78d8b04a3f0bf8239f00c7083af87a544&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZENWZ5I%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDzAu79T53mrl3WaK%2B3D%2FWLcwQQ76%2FOXLg1om0yEDcOwIgcngjzOwZ3S1G2R0TnF27vtpvwzQstAl98y36Xohj1nUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG%2F0vEW7n88xdxmUPCrcAz3dt98DpK0ei8r0MkmKtEz4%2FJ%2FyrarrVHh2Pa4iWP4L%2FRoUr3oaROnGV2%2BPwXy35GSShlWos2Q2C9q%2FDW%2FGdBhmC2WBXs5uHyve9W%2FZ5Zs%2BgDAPmbdRtqERuZ8DgFFBvIIpXgGA4QJtiywCm07rLTpwkVcAOl%2Fc8QG%2FHOy6XOT0dxFt3%2Fp9ZK0NPP4os%2BshT4fe7QjG9uPGBR4%2FSnvRMiXCa9O1WFLMlsoWo8Lzp%2FUa4XTsovGVCedqRWzGk0fAFxXG3NPOBB1VNJlcWdqSsobfNAjxFoPGL5qXailh%2FAG%2BOChWrgazFd1Z1NwhLlhWWbbARkYGIySVYgTBWi4ehUEJ2hiRotANc510z5rEz4mZUMmBBqLLdioiTDD4t6EjF0rHIKcv4g9g7%2FlVqvXm%2B1NYjEoIkFzNeSk4BIAbT2qH1ADExYvMr3CvL3ZDBso%2B37GzBq%2FMcbobPcJg7S6%2BoVoGgN2tXPfqathD8xtSTvHIslGpv25Xia7Alw3sx1%2Bl9rAjHWthRnQ2nMzpJ%2F7n5RAm3MUUCk6RyV%2BRltzYIfCOnDN6ZvVyfI55v0PE3Ac%2BujfHwonxnVnTcihySnZXhL8l%2BovPOl0z4Lrq5IDS1ueiJPq6d3U94Cu2m3PpMKWPtr4GOqUBoBA6Qa%2FFWarQzEiAnLOLypTH3fJd%2BMXZVE2fSIQrpygO9aajxVbnqAoqSQbVoUTL55%2BwXPlKy%2FP3xMFWBoaBroLkAbZ8kBa1jJp5WAy0juh1cFqGbcgzqIHuRbMHUUj%2BeZU%2Fsz7zd%2BPvs82l%2BTZQn17YY6WfKwqkOXWURmd7d6CJBopx%2Fk0HAFGQTfH6bGYGyCY0W6wtd8t972nZiBkwT8cA%2BT80&X-Amz-Signature=ea70df70f59b7fa2aa233adeb472ce06fcc7f510a19d0e38796dd1ccbcac6315&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZENWZ5I%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDzAu79T53mrl3WaK%2B3D%2FWLcwQQ76%2FOXLg1om0yEDcOwIgcngjzOwZ3S1G2R0TnF27vtpvwzQstAl98y36Xohj1nUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG%2F0vEW7n88xdxmUPCrcAz3dt98DpK0ei8r0MkmKtEz4%2FJ%2FyrarrVHh2Pa4iWP4L%2FRoUr3oaROnGV2%2BPwXy35GSShlWos2Q2C9q%2FDW%2FGdBhmC2WBXs5uHyve9W%2FZ5Zs%2BgDAPmbdRtqERuZ8DgFFBvIIpXgGA4QJtiywCm07rLTpwkVcAOl%2Fc8QG%2FHOy6XOT0dxFt3%2Fp9ZK0NPP4os%2BshT4fe7QjG9uPGBR4%2FSnvRMiXCa9O1WFLMlsoWo8Lzp%2FUa4XTsovGVCedqRWzGk0fAFxXG3NPOBB1VNJlcWdqSsobfNAjxFoPGL5qXailh%2FAG%2BOChWrgazFd1Z1NwhLlhWWbbARkYGIySVYgTBWi4ehUEJ2hiRotANc510z5rEz4mZUMmBBqLLdioiTDD4t6EjF0rHIKcv4g9g7%2FlVqvXm%2B1NYjEoIkFzNeSk4BIAbT2qH1ADExYvMr3CvL3ZDBso%2B37GzBq%2FMcbobPcJg7S6%2BoVoGgN2tXPfqathD8xtSTvHIslGpv25Xia7Alw3sx1%2Bl9rAjHWthRnQ2nMzpJ%2F7n5RAm3MUUCk6RyV%2BRltzYIfCOnDN6ZvVyfI55v0PE3Ac%2BujfHwonxnVnTcihySnZXhL8l%2BovPOl0z4Lrq5IDS1ueiJPq6d3U94Cu2m3PpMKWPtr4GOqUBoBA6Qa%2FFWarQzEiAnLOLypTH3fJd%2BMXZVE2fSIQrpygO9aajxVbnqAoqSQbVoUTL55%2BwXPlKy%2FP3xMFWBoaBroLkAbZ8kBa1jJp5WAy0juh1cFqGbcgzqIHuRbMHUUj%2BeZU%2Fsz7zd%2BPvs82l%2BTZQn17YY6WfKwqkOXWURmd7d6CJBopx%2Fk0HAFGQTfH6bGYGyCY0W6wtd8t972nZiBkwT8cA%2BT80&X-Amz-Signature=2d1ab027d3454ce84973131e94a8abb56922f6ca97a895a8ef6710d81cb5aba2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMSR6ER%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGN27X8Cj4NKU38l6SFDW3%2BQXWMiuaA5%2FSsLMeBqD59rAiEArKjB3%2BhSq%2BkbWjzaN0P7EShjkq%2BokoqdXLHhucre5PkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi0ZyfS1a7u4ulICrcAzFsvjgtgQjeGdizQuphK69jPr3sPTpuSQanGGdn1SwylTYZinSASNoIFHeoJzXw%2BxoObxF60pcgC30UTa%2BDbytdhW4ZF5M68fmLfjfMiYSrxHyTSlipfLWi4VHP86cdCXdSuekSFoloRQPu2dsqX08GshfGOAHPVO7EHwk6octLYjaYVsETCekIkJmrqUOfpqlRjBBxl%2Fi3JQ5Ov7I3q59%2Bxz5PdSPrt4W7T45j35YIK8P7ESksuqKrzAvdCfhqawFsscDAmVG7IttBqMkk31ipMzvtrkxeMtGLL8yCPaFRvj94z0ZclScW25ElzAL51SY%2BOUNHWoF1qU%2BQJhp4SUPgm2pxUwyufsszvGuBH%2F2pkm5zqAbwMX4u6c9bz%2BXJkRwNtIacuGeu%2F%2FOrtLnduSePVi8luMWmaKEYAFO9%2BT7x1O0bY3U7vCxU%2Bo1c16foQcr9b5X0UfVXNz38ZkUjGzJTdcRlpg6Sq6336GUTnA6tL7v0xJBAsFsS3Ki5UEaJmD0oRjo23bRBZO0Y4b0CTCLmNUMyX44tmI5maieoNnP8aQpWOjOArAy97lIMEJq%2BdgIyzb6tSjJuYqpiV8u%2FXY5le3RPaQxrmJHV48FwUnNd9R5s3p%2FnbBLQD5ANMLjgxr4GOqUB9Wj7Uc8lcfjuhj8B8RMkxTkgjUJACKn0XgVHV%2F2KQiTUEbRmnl4GMLhq5Wn7dtwxguy7oW9k%2Bi7q715hCJZrLR8oHMO%2FO1jd7NxcLVi%2B0SeffsKadjGKX1ZWkAvkJNWoy4x2uQ9SJ7X7kVKBGBHasK4d7PjqhSYu32rEnY70H%2Fmi18OfGpD7z3u2CPDpt1dn4lJnRZx3yaoMTkmAWd3fUKxvaHIB&X-Amz-Signature=44203846b5d3e3d36636e8b289c4a9a040deec395f521ebad115ccd0561fc77c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMSR6ER%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGN27X8Cj4NKU38l6SFDW3%2BQXWMiuaA5%2FSsLMeBqD59rAiEArKjB3%2BhSq%2BkbWjzaN0P7EShjkq%2BokoqdXLHhucre5PkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi0ZyfS1a7u4ulICrcAzFsvjgtgQjeGdizQuphK69jPr3sPTpuSQanGGdn1SwylTYZinSASNoIFHeoJzXw%2BxoObxF60pcgC30UTa%2BDbytdhW4ZF5M68fmLfjfMiYSrxHyTSlipfLWi4VHP86cdCXdSuekSFoloRQPu2dsqX08GshfGOAHPVO7EHwk6octLYjaYVsETCekIkJmrqUOfpqlRjBBxl%2Fi3JQ5Ov7I3q59%2Bxz5PdSPrt4W7T45j35YIK8P7ESksuqKrzAvdCfhqawFsscDAmVG7IttBqMkk31ipMzvtrkxeMtGLL8yCPaFRvj94z0ZclScW25ElzAL51SY%2BOUNHWoF1qU%2BQJhp4SUPgm2pxUwyufsszvGuBH%2F2pkm5zqAbwMX4u6c9bz%2BXJkRwNtIacuGeu%2F%2FOrtLnduSePVi8luMWmaKEYAFO9%2BT7x1O0bY3U7vCxU%2Bo1c16foQcr9b5X0UfVXNz38ZkUjGzJTdcRlpg6Sq6336GUTnA6tL7v0xJBAsFsS3Ki5UEaJmD0oRjo23bRBZO0Y4b0CTCLmNUMyX44tmI5maieoNnP8aQpWOjOArAy97lIMEJq%2BdgIyzb6tSjJuYqpiV8u%2FXY5le3RPaQxrmJHV48FwUnNd9R5s3p%2FnbBLQD5ANMLjgxr4GOqUB9Wj7Uc8lcfjuhj8B8RMkxTkgjUJACKn0XgVHV%2F2KQiTUEbRmnl4GMLhq5Wn7dtwxguy7oW9k%2Bi7q715hCJZrLR8oHMO%2FO1jd7NxcLVi%2B0SeffsKadjGKX1ZWkAvkJNWoy4x2uQ9SJ7X7kVKBGBHasK4d7PjqhSYu32rEnY70H%2Fmi18OfGpD7z3u2CPDpt1dn4lJnRZx3yaoMTkmAWd3fUKxvaHIB&X-Amz-Signature=46dfb8a62bec259425270aacd0d556ad9e3125a8247f749ced1870f86a79a27c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMSR6ER%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGN27X8Cj4NKU38l6SFDW3%2BQXWMiuaA5%2FSsLMeBqD59rAiEArKjB3%2BhSq%2BkbWjzaN0P7EShjkq%2BokoqdXLHhucre5PkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi0ZyfS1a7u4ulICrcAzFsvjgtgQjeGdizQuphK69jPr3sPTpuSQanGGdn1SwylTYZinSASNoIFHeoJzXw%2BxoObxF60pcgC30UTa%2BDbytdhW4ZF5M68fmLfjfMiYSrxHyTSlipfLWi4VHP86cdCXdSuekSFoloRQPu2dsqX08GshfGOAHPVO7EHwk6octLYjaYVsETCekIkJmrqUOfpqlRjBBxl%2Fi3JQ5Ov7I3q59%2Bxz5PdSPrt4W7T45j35YIK8P7ESksuqKrzAvdCfhqawFsscDAmVG7IttBqMkk31ipMzvtrkxeMtGLL8yCPaFRvj94z0ZclScW25ElzAL51SY%2BOUNHWoF1qU%2BQJhp4SUPgm2pxUwyufsszvGuBH%2F2pkm5zqAbwMX4u6c9bz%2BXJkRwNtIacuGeu%2F%2FOrtLnduSePVi8luMWmaKEYAFO9%2BT7x1O0bY3U7vCxU%2Bo1c16foQcr9b5X0UfVXNz38ZkUjGzJTdcRlpg6Sq6336GUTnA6tL7v0xJBAsFsS3Ki5UEaJmD0oRjo23bRBZO0Y4b0CTCLmNUMyX44tmI5maieoNnP8aQpWOjOArAy97lIMEJq%2BdgIyzb6tSjJuYqpiV8u%2FXY5le3RPaQxrmJHV48FwUnNd9R5s3p%2FnbBLQD5ANMLjgxr4GOqUB9Wj7Uc8lcfjuhj8B8RMkxTkgjUJACKn0XgVHV%2F2KQiTUEbRmnl4GMLhq5Wn7dtwxguy7oW9k%2Bi7q715hCJZrLR8oHMO%2FO1jd7NxcLVi%2B0SeffsKadjGKX1ZWkAvkJNWoy4x2uQ9SJ7X7kVKBGBHasK4d7PjqhSYu32rEnY70H%2Fmi18OfGpD7z3u2CPDpt1dn4lJnRZx3yaoMTkmAWd3fUKxvaHIB&X-Amz-Signature=3f85b1c0f8b8be0a4a8e0103832d815cb47419dd630870745101ee6bddfd472c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMSR6ER%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGN27X8Cj4NKU38l6SFDW3%2BQXWMiuaA5%2FSsLMeBqD59rAiEArKjB3%2BhSq%2BkbWjzaN0P7EShjkq%2BokoqdXLHhucre5PkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi0ZyfS1a7u4ulICrcAzFsvjgtgQjeGdizQuphK69jPr3sPTpuSQanGGdn1SwylTYZinSASNoIFHeoJzXw%2BxoObxF60pcgC30UTa%2BDbytdhW4ZF5M68fmLfjfMiYSrxHyTSlipfLWi4VHP86cdCXdSuekSFoloRQPu2dsqX08GshfGOAHPVO7EHwk6octLYjaYVsETCekIkJmrqUOfpqlRjBBxl%2Fi3JQ5Ov7I3q59%2Bxz5PdSPrt4W7T45j35YIK8P7ESksuqKrzAvdCfhqawFsscDAmVG7IttBqMkk31ipMzvtrkxeMtGLL8yCPaFRvj94z0ZclScW25ElzAL51SY%2BOUNHWoF1qU%2BQJhp4SUPgm2pxUwyufsszvGuBH%2F2pkm5zqAbwMX4u6c9bz%2BXJkRwNtIacuGeu%2F%2FOrtLnduSePVi8luMWmaKEYAFO9%2BT7x1O0bY3U7vCxU%2Bo1c16foQcr9b5X0UfVXNz38ZkUjGzJTdcRlpg6Sq6336GUTnA6tL7v0xJBAsFsS3Ki5UEaJmD0oRjo23bRBZO0Y4b0CTCLmNUMyX44tmI5maieoNnP8aQpWOjOArAy97lIMEJq%2BdgIyzb6tSjJuYqpiV8u%2FXY5le3RPaQxrmJHV48FwUnNd9R5s3p%2FnbBLQD5ANMLjgxr4GOqUB9Wj7Uc8lcfjuhj8B8RMkxTkgjUJACKn0XgVHV%2F2KQiTUEbRmnl4GMLhq5Wn7dtwxguy7oW9k%2Bi7q715hCJZrLR8oHMO%2FO1jd7NxcLVi%2B0SeffsKadjGKX1ZWkAvkJNWoy4x2uQ9SJ7X7kVKBGBHasK4d7PjqhSYu32rEnY70H%2Fmi18OfGpD7z3u2CPDpt1dn4lJnRZx3yaoMTkmAWd3fUKxvaHIB&X-Amz-Signature=a7a58eb02d7f5f0f8f243e32ae4e099413f2b86089d54566e9c3f9ab1f9ff668&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMSR6ER%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGN27X8Cj4NKU38l6SFDW3%2BQXWMiuaA5%2FSsLMeBqD59rAiEArKjB3%2BhSq%2BkbWjzaN0P7EShjkq%2BokoqdXLHhucre5PkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi0ZyfS1a7u4ulICrcAzFsvjgtgQjeGdizQuphK69jPr3sPTpuSQanGGdn1SwylTYZinSASNoIFHeoJzXw%2BxoObxF60pcgC30UTa%2BDbytdhW4ZF5M68fmLfjfMiYSrxHyTSlipfLWi4VHP86cdCXdSuekSFoloRQPu2dsqX08GshfGOAHPVO7EHwk6octLYjaYVsETCekIkJmrqUOfpqlRjBBxl%2Fi3JQ5Ov7I3q59%2Bxz5PdSPrt4W7T45j35YIK8P7ESksuqKrzAvdCfhqawFsscDAmVG7IttBqMkk31ipMzvtrkxeMtGLL8yCPaFRvj94z0ZclScW25ElzAL51SY%2BOUNHWoF1qU%2BQJhp4SUPgm2pxUwyufsszvGuBH%2F2pkm5zqAbwMX4u6c9bz%2BXJkRwNtIacuGeu%2F%2FOrtLnduSePVi8luMWmaKEYAFO9%2BT7x1O0bY3U7vCxU%2Bo1c16foQcr9b5X0UfVXNz38ZkUjGzJTdcRlpg6Sq6336GUTnA6tL7v0xJBAsFsS3Ki5UEaJmD0oRjo23bRBZO0Y4b0CTCLmNUMyX44tmI5maieoNnP8aQpWOjOArAy97lIMEJq%2BdgIyzb6tSjJuYqpiV8u%2FXY5le3RPaQxrmJHV48FwUnNd9R5s3p%2FnbBLQD5ANMLjgxr4GOqUB9Wj7Uc8lcfjuhj8B8RMkxTkgjUJACKn0XgVHV%2F2KQiTUEbRmnl4GMLhq5Wn7dtwxguy7oW9k%2Bi7q715hCJZrLR8oHMO%2FO1jd7NxcLVi%2B0SeffsKadjGKX1ZWkAvkJNWoy4x2uQ9SJ7X7kVKBGBHasK4d7PjqhSYu32rEnY70H%2Fmi18OfGpD7z3u2CPDpt1dn4lJnRZx3yaoMTkmAWd3fUKxvaHIB&X-Amz-Signature=031a4982ff8f6def7039323354f120d8a298abfcb2ab930af3c36ec7b6d038ee&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMSR6ER%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGN27X8Cj4NKU38l6SFDW3%2BQXWMiuaA5%2FSsLMeBqD59rAiEArKjB3%2BhSq%2BkbWjzaN0P7EShjkq%2BokoqdXLHhucre5PkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi0ZyfS1a7u4ulICrcAzFsvjgtgQjeGdizQuphK69jPr3sPTpuSQanGGdn1SwylTYZinSASNoIFHeoJzXw%2BxoObxF60pcgC30UTa%2BDbytdhW4ZF5M68fmLfjfMiYSrxHyTSlipfLWi4VHP86cdCXdSuekSFoloRQPu2dsqX08GshfGOAHPVO7EHwk6octLYjaYVsETCekIkJmrqUOfpqlRjBBxl%2Fi3JQ5Ov7I3q59%2Bxz5PdSPrt4W7T45j35YIK8P7ESksuqKrzAvdCfhqawFsscDAmVG7IttBqMkk31ipMzvtrkxeMtGLL8yCPaFRvj94z0ZclScW25ElzAL51SY%2BOUNHWoF1qU%2BQJhp4SUPgm2pxUwyufsszvGuBH%2F2pkm5zqAbwMX4u6c9bz%2BXJkRwNtIacuGeu%2F%2FOrtLnduSePVi8luMWmaKEYAFO9%2BT7x1O0bY3U7vCxU%2Bo1c16foQcr9b5X0UfVXNz38ZkUjGzJTdcRlpg6Sq6336GUTnA6tL7v0xJBAsFsS3Ki5UEaJmD0oRjo23bRBZO0Y4b0CTCLmNUMyX44tmI5maieoNnP8aQpWOjOArAy97lIMEJq%2BdgIyzb6tSjJuYqpiV8u%2FXY5le3RPaQxrmJHV48FwUnNd9R5s3p%2FnbBLQD5ANMLjgxr4GOqUB9Wj7Uc8lcfjuhj8B8RMkxTkgjUJACKn0XgVHV%2F2KQiTUEbRmnl4GMLhq5Wn7dtwxguy7oW9k%2Bi7q715hCJZrLR8oHMO%2FO1jd7NxcLVi%2B0SeffsKadjGKX1ZWkAvkJNWoy4x2uQ9SJ7X7kVKBGBHasK4d7PjqhSYu32rEnY70H%2Fmi18OfGpD7z3u2CPDpt1dn4lJnRZx3yaoMTkmAWd3fUKxvaHIB&X-Amz-Signature=568221a0ce40f45bd1fda252ec0bdda283440bce0dc440be32feb6c0d9d5041e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMSR6ER%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGN27X8Cj4NKU38l6SFDW3%2BQXWMiuaA5%2FSsLMeBqD59rAiEArKjB3%2BhSq%2BkbWjzaN0P7EShjkq%2BokoqdXLHhucre5PkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi0ZyfS1a7u4ulICrcAzFsvjgtgQjeGdizQuphK69jPr3sPTpuSQanGGdn1SwylTYZinSASNoIFHeoJzXw%2BxoObxF60pcgC30UTa%2BDbytdhW4ZF5M68fmLfjfMiYSrxHyTSlipfLWi4VHP86cdCXdSuekSFoloRQPu2dsqX08GshfGOAHPVO7EHwk6octLYjaYVsETCekIkJmrqUOfpqlRjBBxl%2Fi3JQ5Ov7I3q59%2Bxz5PdSPrt4W7T45j35YIK8P7ESksuqKrzAvdCfhqawFsscDAmVG7IttBqMkk31ipMzvtrkxeMtGLL8yCPaFRvj94z0ZclScW25ElzAL51SY%2BOUNHWoF1qU%2BQJhp4SUPgm2pxUwyufsszvGuBH%2F2pkm5zqAbwMX4u6c9bz%2BXJkRwNtIacuGeu%2F%2FOrtLnduSePVi8luMWmaKEYAFO9%2BT7x1O0bY3U7vCxU%2Bo1c16foQcr9b5X0UfVXNz38ZkUjGzJTdcRlpg6Sq6336GUTnA6tL7v0xJBAsFsS3Ki5UEaJmD0oRjo23bRBZO0Y4b0CTCLmNUMyX44tmI5maieoNnP8aQpWOjOArAy97lIMEJq%2BdgIyzb6tSjJuYqpiV8u%2FXY5le3RPaQxrmJHV48FwUnNd9R5s3p%2FnbBLQD5ANMLjgxr4GOqUB9Wj7Uc8lcfjuhj8B8RMkxTkgjUJACKn0XgVHV%2F2KQiTUEbRmnl4GMLhq5Wn7dtwxguy7oW9k%2Bi7q715hCJZrLR8oHMO%2FO1jd7NxcLVi%2B0SeffsKadjGKX1ZWkAvkJNWoy4x2uQ9SJ7X7kVKBGBHasK4d7PjqhSYu32rEnY70H%2Fmi18OfGpD7z3u2CPDpt1dn4lJnRZx3yaoMTkmAWd3fUKxvaHIB&X-Amz-Signature=dc184d13edef96e02362ee863ef22a0f885520d70cbd5ea59d865032fab10aed&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

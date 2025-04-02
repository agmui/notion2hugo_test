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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7O426HN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCFKiZJ1VTtYJM64wh%2BnCuIi9jqEfy8B2XfJeZA%2BXnhRgIhAMIMV3Di4tMxMNW2oRfv4XiiXlWw5q54vNSa%2BKfGPy9JKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QnZgNJDAYT9fLD4q3AM%2FLryHyPkVdp0wyn4yQdgyOPWT%2FCki63nI62w5WYCeCa5lv5Mpjkowh40t96dmg0oTDP1yI4xL6I28XKAFj7nwUkobZMjHkhEe1w8nQhteWuPz7BBwEnM3KlDJZdy64Ou%2BIGb75XJp1Oc3s35Fthsf5zRT1wKrje%2BVFScyF%2BMFe9MmZpTBJMZ%2FDmyH3cgxJbRsUH1t7XjHWGr5VTS4Rdk7nL3vvliIlAg48sB1GefXkvqQjphe5Fqy9N2CcRc4Eyn%2BVjlqJ8o8lj0wuXBpbNpRtM7O0P88pVJ0gw1Q6nlRkvn7BOx3wmladVmqPQTRTqlKqOVug8QzVpXyXJa4SZVsYLTEJHZPBIaNapATOAMkp9%2B6XxWYseapO6bdKExAwgHI%2BeWNNNdSfpBhqNV%2BeKidooZW5eLQ6u0Ojsy7V0BwKFWktDDaJ2B4hDfF3bxWEmXtoGYX2BGTsCZlPWfvQbCGkvI7Jedpd%2BxzBMy9%2FYAS%2FjH2ju0EL5uA7btyIRU9xOEQFGUCa%2Bs7S%2BOcDjdQIrP7LtRwg2slV1WKZXvx3GYZN2kojM8d%2FzDvOkJrC8KW%2BvPdzqYLzHj82K9XzJ84PzCtxexj6aawxOjTpHfI%2FVo4qEBcARZ1H9LHDUm4IzDHz7O%2FBjqkAZsPc1D0zHR2Sb8CVSWUSLwmgo3it6TbnR5xO1WtiIPurx9j8j21GzwiU4%2Fd1yF69FwhHEXdWQiBVEx2vBJQR18aLYjD%2BDxUaGD96upNGZsW9Ncsrx9BCVkTcgtD5iOtxLCd2hPPj2rI%2Ff08uEsS2qlRy8WX%2F7NH2ktD8%2FtRl7esXNkYOBUS39Q5IP8Mgke%2BTGcgm7F1aHtWcHqZXZphXHpp7HNb&X-Amz-Signature=c2cd1645d18429691fd5edab5b52475edb5d6813c2ebdc0401ef25179cd56e30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7O426HN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCFKiZJ1VTtYJM64wh%2BnCuIi9jqEfy8B2XfJeZA%2BXnhRgIhAMIMV3Di4tMxMNW2oRfv4XiiXlWw5q54vNSa%2BKfGPy9JKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QnZgNJDAYT9fLD4q3AM%2FLryHyPkVdp0wyn4yQdgyOPWT%2FCki63nI62w5WYCeCa5lv5Mpjkowh40t96dmg0oTDP1yI4xL6I28XKAFj7nwUkobZMjHkhEe1w8nQhteWuPz7BBwEnM3KlDJZdy64Ou%2BIGb75XJp1Oc3s35Fthsf5zRT1wKrje%2BVFScyF%2BMFe9MmZpTBJMZ%2FDmyH3cgxJbRsUH1t7XjHWGr5VTS4Rdk7nL3vvliIlAg48sB1GefXkvqQjphe5Fqy9N2CcRc4Eyn%2BVjlqJ8o8lj0wuXBpbNpRtM7O0P88pVJ0gw1Q6nlRkvn7BOx3wmladVmqPQTRTqlKqOVug8QzVpXyXJa4SZVsYLTEJHZPBIaNapATOAMkp9%2B6XxWYseapO6bdKExAwgHI%2BeWNNNdSfpBhqNV%2BeKidooZW5eLQ6u0Ojsy7V0BwKFWktDDaJ2B4hDfF3bxWEmXtoGYX2BGTsCZlPWfvQbCGkvI7Jedpd%2BxzBMy9%2FYAS%2FjH2ju0EL5uA7btyIRU9xOEQFGUCa%2Bs7S%2BOcDjdQIrP7LtRwg2slV1WKZXvx3GYZN2kojM8d%2FzDvOkJrC8KW%2BvPdzqYLzHj82K9XzJ84PzCtxexj6aawxOjTpHfI%2FVo4qEBcARZ1H9LHDUm4IzDHz7O%2FBjqkAZsPc1D0zHR2Sb8CVSWUSLwmgo3it6TbnR5xO1WtiIPurx9j8j21GzwiU4%2Fd1yF69FwhHEXdWQiBVEx2vBJQR18aLYjD%2BDxUaGD96upNGZsW9Ncsrx9BCVkTcgtD5iOtxLCd2hPPj2rI%2Ff08uEsS2qlRy8WX%2F7NH2ktD8%2FtRl7esXNkYOBUS39Q5IP8Mgke%2BTGcgm7F1aHtWcHqZXZphXHpp7HNb&X-Amz-Signature=d87fa29a8fbeb4a99f2a264826e820a0e0107dd7d40c4043e27671c8090f161c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7O426HN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCFKiZJ1VTtYJM64wh%2BnCuIi9jqEfy8B2XfJeZA%2BXnhRgIhAMIMV3Di4tMxMNW2oRfv4XiiXlWw5q54vNSa%2BKfGPy9JKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QnZgNJDAYT9fLD4q3AM%2FLryHyPkVdp0wyn4yQdgyOPWT%2FCki63nI62w5WYCeCa5lv5Mpjkowh40t96dmg0oTDP1yI4xL6I28XKAFj7nwUkobZMjHkhEe1w8nQhteWuPz7BBwEnM3KlDJZdy64Ou%2BIGb75XJp1Oc3s35Fthsf5zRT1wKrje%2BVFScyF%2BMFe9MmZpTBJMZ%2FDmyH3cgxJbRsUH1t7XjHWGr5VTS4Rdk7nL3vvliIlAg48sB1GefXkvqQjphe5Fqy9N2CcRc4Eyn%2BVjlqJ8o8lj0wuXBpbNpRtM7O0P88pVJ0gw1Q6nlRkvn7BOx3wmladVmqPQTRTqlKqOVug8QzVpXyXJa4SZVsYLTEJHZPBIaNapATOAMkp9%2B6XxWYseapO6bdKExAwgHI%2BeWNNNdSfpBhqNV%2BeKidooZW5eLQ6u0Ojsy7V0BwKFWktDDaJ2B4hDfF3bxWEmXtoGYX2BGTsCZlPWfvQbCGkvI7Jedpd%2BxzBMy9%2FYAS%2FjH2ju0EL5uA7btyIRU9xOEQFGUCa%2Bs7S%2BOcDjdQIrP7LtRwg2slV1WKZXvx3GYZN2kojM8d%2FzDvOkJrC8KW%2BvPdzqYLzHj82K9XzJ84PzCtxexj6aawxOjTpHfI%2FVo4qEBcARZ1H9LHDUm4IzDHz7O%2FBjqkAZsPc1D0zHR2Sb8CVSWUSLwmgo3it6TbnR5xO1WtiIPurx9j8j21GzwiU4%2Fd1yF69FwhHEXdWQiBVEx2vBJQR18aLYjD%2BDxUaGD96upNGZsW9Ncsrx9BCVkTcgtD5iOtxLCd2hPPj2rI%2Ff08uEsS2qlRy8WX%2F7NH2ktD8%2FtRl7esXNkYOBUS39Q5IP8Mgke%2BTGcgm7F1aHtWcHqZXZphXHpp7HNb&X-Amz-Signature=5c69c98e7999b431e31804773e06ab4eec23cd088dd78b6f2227da4f25ea4284&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7O426HN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCFKiZJ1VTtYJM64wh%2BnCuIi9jqEfy8B2XfJeZA%2BXnhRgIhAMIMV3Di4tMxMNW2oRfv4XiiXlWw5q54vNSa%2BKfGPy9JKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QnZgNJDAYT9fLD4q3AM%2FLryHyPkVdp0wyn4yQdgyOPWT%2FCki63nI62w5WYCeCa5lv5Mpjkowh40t96dmg0oTDP1yI4xL6I28XKAFj7nwUkobZMjHkhEe1w8nQhteWuPz7BBwEnM3KlDJZdy64Ou%2BIGb75XJp1Oc3s35Fthsf5zRT1wKrje%2BVFScyF%2BMFe9MmZpTBJMZ%2FDmyH3cgxJbRsUH1t7XjHWGr5VTS4Rdk7nL3vvliIlAg48sB1GefXkvqQjphe5Fqy9N2CcRc4Eyn%2BVjlqJ8o8lj0wuXBpbNpRtM7O0P88pVJ0gw1Q6nlRkvn7BOx3wmladVmqPQTRTqlKqOVug8QzVpXyXJa4SZVsYLTEJHZPBIaNapATOAMkp9%2B6XxWYseapO6bdKExAwgHI%2BeWNNNdSfpBhqNV%2BeKidooZW5eLQ6u0Ojsy7V0BwKFWktDDaJ2B4hDfF3bxWEmXtoGYX2BGTsCZlPWfvQbCGkvI7Jedpd%2BxzBMy9%2FYAS%2FjH2ju0EL5uA7btyIRU9xOEQFGUCa%2Bs7S%2BOcDjdQIrP7LtRwg2slV1WKZXvx3GYZN2kojM8d%2FzDvOkJrC8KW%2BvPdzqYLzHj82K9XzJ84PzCtxexj6aawxOjTpHfI%2FVo4qEBcARZ1H9LHDUm4IzDHz7O%2FBjqkAZsPc1D0zHR2Sb8CVSWUSLwmgo3it6TbnR5xO1WtiIPurx9j8j21GzwiU4%2Fd1yF69FwhHEXdWQiBVEx2vBJQR18aLYjD%2BDxUaGD96upNGZsW9Ncsrx9BCVkTcgtD5iOtxLCd2hPPj2rI%2Ff08uEsS2qlRy8WX%2F7NH2ktD8%2FtRl7esXNkYOBUS39Q5IP8Mgke%2BTGcgm7F1aHtWcHqZXZphXHpp7HNb&X-Amz-Signature=bf6474a16ff1d641fe2cabb1f4d83324d3c28c4bcadd6ab560558beaa84d9904&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7O426HN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCFKiZJ1VTtYJM64wh%2BnCuIi9jqEfy8B2XfJeZA%2BXnhRgIhAMIMV3Di4tMxMNW2oRfv4XiiXlWw5q54vNSa%2BKfGPy9JKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QnZgNJDAYT9fLD4q3AM%2FLryHyPkVdp0wyn4yQdgyOPWT%2FCki63nI62w5WYCeCa5lv5Mpjkowh40t96dmg0oTDP1yI4xL6I28XKAFj7nwUkobZMjHkhEe1w8nQhteWuPz7BBwEnM3KlDJZdy64Ou%2BIGb75XJp1Oc3s35Fthsf5zRT1wKrje%2BVFScyF%2BMFe9MmZpTBJMZ%2FDmyH3cgxJbRsUH1t7XjHWGr5VTS4Rdk7nL3vvliIlAg48sB1GefXkvqQjphe5Fqy9N2CcRc4Eyn%2BVjlqJ8o8lj0wuXBpbNpRtM7O0P88pVJ0gw1Q6nlRkvn7BOx3wmladVmqPQTRTqlKqOVug8QzVpXyXJa4SZVsYLTEJHZPBIaNapATOAMkp9%2B6XxWYseapO6bdKExAwgHI%2BeWNNNdSfpBhqNV%2BeKidooZW5eLQ6u0Ojsy7V0BwKFWktDDaJ2B4hDfF3bxWEmXtoGYX2BGTsCZlPWfvQbCGkvI7Jedpd%2BxzBMy9%2FYAS%2FjH2ju0EL5uA7btyIRU9xOEQFGUCa%2Bs7S%2BOcDjdQIrP7LtRwg2slV1WKZXvx3GYZN2kojM8d%2FzDvOkJrC8KW%2BvPdzqYLzHj82K9XzJ84PzCtxexj6aawxOjTpHfI%2FVo4qEBcARZ1H9LHDUm4IzDHz7O%2FBjqkAZsPc1D0zHR2Sb8CVSWUSLwmgo3it6TbnR5xO1WtiIPurx9j8j21GzwiU4%2Fd1yF69FwhHEXdWQiBVEx2vBJQR18aLYjD%2BDxUaGD96upNGZsW9Ncsrx9BCVkTcgtD5iOtxLCd2hPPj2rI%2Ff08uEsS2qlRy8WX%2F7NH2ktD8%2FtRl7esXNkYOBUS39Q5IP8Mgke%2BTGcgm7F1aHtWcHqZXZphXHpp7HNb&X-Amz-Signature=3b7f7d871c7fcc7c61e43b58d3343fa1a3247d9c854d9614d9ae1c14391f6c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7O426HN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCFKiZJ1VTtYJM64wh%2BnCuIi9jqEfy8B2XfJeZA%2BXnhRgIhAMIMV3Di4tMxMNW2oRfv4XiiXlWw5q54vNSa%2BKfGPy9JKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QnZgNJDAYT9fLD4q3AM%2FLryHyPkVdp0wyn4yQdgyOPWT%2FCki63nI62w5WYCeCa5lv5Mpjkowh40t96dmg0oTDP1yI4xL6I28XKAFj7nwUkobZMjHkhEe1w8nQhteWuPz7BBwEnM3KlDJZdy64Ou%2BIGb75XJp1Oc3s35Fthsf5zRT1wKrje%2BVFScyF%2BMFe9MmZpTBJMZ%2FDmyH3cgxJbRsUH1t7XjHWGr5VTS4Rdk7nL3vvliIlAg48sB1GefXkvqQjphe5Fqy9N2CcRc4Eyn%2BVjlqJ8o8lj0wuXBpbNpRtM7O0P88pVJ0gw1Q6nlRkvn7BOx3wmladVmqPQTRTqlKqOVug8QzVpXyXJa4SZVsYLTEJHZPBIaNapATOAMkp9%2B6XxWYseapO6bdKExAwgHI%2BeWNNNdSfpBhqNV%2BeKidooZW5eLQ6u0Ojsy7V0BwKFWktDDaJ2B4hDfF3bxWEmXtoGYX2BGTsCZlPWfvQbCGkvI7Jedpd%2BxzBMy9%2FYAS%2FjH2ju0EL5uA7btyIRU9xOEQFGUCa%2Bs7S%2BOcDjdQIrP7LtRwg2slV1WKZXvx3GYZN2kojM8d%2FzDvOkJrC8KW%2BvPdzqYLzHj82K9XzJ84PzCtxexj6aawxOjTpHfI%2FVo4qEBcARZ1H9LHDUm4IzDHz7O%2FBjqkAZsPc1D0zHR2Sb8CVSWUSLwmgo3it6TbnR5xO1WtiIPurx9j8j21GzwiU4%2Fd1yF69FwhHEXdWQiBVEx2vBJQR18aLYjD%2BDxUaGD96upNGZsW9Ncsrx9BCVkTcgtD5iOtxLCd2hPPj2rI%2Ff08uEsS2qlRy8WX%2F7NH2ktD8%2FtRl7esXNkYOBUS39Q5IP8Mgke%2BTGcgm7F1aHtWcHqZXZphXHpp7HNb&X-Amz-Signature=a9fcec2126f8db548f6915e209ef703710fca1925e030a68cadeaaedf196bc0b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7O426HN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCFKiZJ1VTtYJM64wh%2BnCuIi9jqEfy8B2XfJeZA%2BXnhRgIhAMIMV3Di4tMxMNW2oRfv4XiiXlWw5q54vNSa%2BKfGPy9JKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QnZgNJDAYT9fLD4q3AM%2FLryHyPkVdp0wyn4yQdgyOPWT%2FCki63nI62w5WYCeCa5lv5Mpjkowh40t96dmg0oTDP1yI4xL6I28XKAFj7nwUkobZMjHkhEe1w8nQhteWuPz7BBwEnM3KlDJZdy64Ou%2BIGb75XJp1Oc3s35Fthsf5zRT1wKrje%2BVFScyF%2BMFe9MmZpTBJMZ%2FDmyH3cgxJbRsUH1t7XjHWGr5VTS4Rdk7nL3vvliIlAg48sB1GefXkvqQjphe5Fqy9N2CcRc4Eyn%2BVjlqJ8o8lj0wuXBpbNpRtM7O0P88pVJ0gw1Q6nlRkvn7BOx3wmladVmqPQTRTqlKqOVug8QzVpXyXJa4SZVsYLTEJHZPBIaNapATOAMkp9%2B6XxWYseapO6bdKExAwgHI%2BeWNNNdSfpBhqNV%2BeKidooZW5eLQ6u0Ojsy7V0BwKFWktDDaJ2B4hDfF3bxWEmXtoGYX2BGTsCZlPWfvQbCGkvI7Jedpd%2BxzBMy9%2FYAS%2FjH2ju0EL5uA7btyIRU9xOEQFGUCa%2Bs7S%2BOcDjdQIrP7LtRwg2slV1WKZXvx3GYZN2kojM8d%2FzDvOkJrC8KW%2BvPdzqYLzHj82K9XzJ84PzCtxexj6aawxOjTpHfI%2FVo4qEBcARZ1H9LHDUm4IzDHz7O%2FBjqkAZsPc1D0zHR2Sb8CVSWUSLwmgo3it6TbnR5xO1WtiIPurx9j8j21GzwiU4%2Fd1yF69FwhHEXdWQiBVEx2vBJQR18aLYjD%2BDxUaGD96upNGZsW9Ncsrx9BCVkTcgtD5iOtxLCd2hPPj2rI%2Ff08uEsS2qlRy8WX%2F7NH2ktD8%2FtRl7esXNkYOBUS39Q5IP8Mgke%2BTGcgm7F1aHtWcHqZXZphXHpp7HNb&X-Amz-Signature=d7f9d90d76361f24e53562960962dbd2d19fbfd5c8c84430b05903e012e6dbed&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

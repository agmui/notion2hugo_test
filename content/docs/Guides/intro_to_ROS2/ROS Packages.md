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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4K73VLD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi6CGW47X%2F5%2FZJhrly3Hu9yMaQhGuTJgLCdFtPPh85qAiAzQGhgmI2AEGOihrgaSqrCDhNYesjUgegFZjX6eYgc%2BCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufskmWbKkewCTwcUKtwDPf7dhnPPIGLVnVtIRhN9NnMZ%2Bo4WGNqCacFiTg2UQw7w9uVI4HBDTI6Uw6a7k5%2FwuhAqO7m19l%2F60izBKCGh6gePKoE1Loy163Xk7xTzyBvAT6imcriIr98zcdL8JLzUl2OS8PaauzpwACEDDFPpDBD04HbLvx33A5PhuP1TavMMf06BeIv1F9KdYOGCDLscjquQn3lOmiiyfLyARTTF4VkJ76uuQRikXbRk1ZFOzyQIHHZ6iK4zWWKS2ECJKvAyEPe4cAM2bESMW%2Feo4lGQKY%2FL%2FkySvQz2b4JLBQTQLQPeHVSJscNUHUAWb7OlwJBoD5ribJsPAfiqrZoYiUcwd7Y67mXbMa1YXoo1sHkUBnkemTcCndI67NlL3N1vIgqDRIHrZyxf8o6t8bFspFLyvQ6mmf9vmcbB2TA85HqeLRHr4XY531O%2BRThXyHTmjB2Dz7eXg05TgPK9vs60NcgQMaY63NaH%2FzMB9qZOulWgDTAmepQYXx3Vl8HacPuRKGDUDQMybbpgCb8ZBiKbMmcL28%2FarOpyUghUjPxZwfj7uc2FkSEwqmhKoYuT6xB8UFIWJRvSEfo9V8PLsU06I8w9T1tlY9JMuGc67lyD%2ByNJNbJPqLIc66dJvsd%2F10swj6%2FyvwY6pgFufWi7JrpAsJFoKPnygt7UKpU7UMIUPRwqp3f74KSQXbw6atX7iS0HNBFmQx9ACUM3XsFqLcozvE%2F4S06mMb8gXTU10uA4tbpyjVZN%2BXiuJSh2hzYFuMCN4%2BXKYoXhgMHmFDOkIWlz0%2BQb1H60Uz18FMGLhlwGbditlZoWM0uBckoLDQZsOpA46D9s%2F35wLSmHBNpuon3hSALOo87%2FWnG4KnNpiiMM&X-Amz-Signature=28c2072a40b27acdf5223c537d83365c7cc4a8928ebefa25b784f953ec3be708&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4K73VLD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi6CGW47X%2F5%2FZJhrly3Hu9yMaQhGuTJgLCdFtPPh85qAiAzQGhgmI2AEGOihrgaSqrCDhNYesjUgegFZjX6eYgc%2BCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufskmWbKkewCTwcUKtwDPf7dhnPPIGLVnVtIRhN9NnMZ%2Bo4WGNqCacFiTg2UQw7w9uVI4HBDTI6Uw6a7k5%2FwuhAqO7m19l%2F60izBKCGh6gePKoE1Loy163Xk7xTzyBvAT6imcriIr98zcdL8JLzUl2OS8PaauzpwACEDDFPpDBD04HbLvx33A5PhuP1TavMMf06BeIv1F9KdYOGCDLscjquQn3lOmiiyfLyARTTF4VkJ76uuQRikXbRk1ZFOzyQIHHZ6iK4zWWKS2ECJKvAyEPe4cAM2bESMW%2Feo4lGQKY%2FL%2FkySvQz2b4JLBQTQLQPeHVSJscNUHUAWb7OlwJBoD5ribJsPAfiqrZoYiUcwd7Y67mXbMa1YXoo1sHkUBnkemTcCndI67NlL3N1vIgqDRIHrZyxf8o6t8bFspFLyvQ6mmf9vmcbB2TA85HqeLRHr4XY531O%2BRThXyHTmjB2Dz7eXg05TgPK9vs60NcgQMaY63NaH%2FzMB9qZOulWgDTAmepQYXx3Vl8HacPuRKGDUDQMybbpgCb8ZBiKbMmcL28%2FarOpyUghUjPxZwfj7uc2FkSEwqmhKoYuT6xB8UFIWJRvSEfo9V8PLsU06I8w9T1tlY9JMuGc67lyD%2ByNJNbJPqLIc66dJvsd%2F10swj6%2FyvwY6pgFufWi7JrpAsJFoKPnygt7UKpU7UMIUPRwqp3f74KSQXbw6atX7iS0HNBFmQx9ACUM3XsFqLcozvE%2F4S06mMb8gXTU10uA4tbpyjVZN%2BXiuJSh2hzYFuMCN4%2BXKYoXhgMHmFDOkIWlz0%2BQb1H60Uz18FMGLhlwGbditlZoWM0uBckoLDQZsOpA46D9s%2F35wLSmHBNpuon3hSALOo87%2FWnG4KnNpiiMM&X-Amz-Signature=66fc38de54464ada6ac0f19cbc383e8362cdf076d2e4a12bf51a0150fe55b325&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4K73VLD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi6CGW47X%2F5%2FZJhrly3Hu9yMaQhGuTJgLCdFtPPh85qAiAzQGhgmI2AEGOihrgaSqrCDhNYesjUgegFZjX6eYgc%2BCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufskmWbKkewCTwcUKtwDPf7dhnPPIGLVnVtIRhN9NnMZ%2Bo4WGNqCacFiTg2UQw7w9uVI4HBDTI6Uw6a7k5%2FwuhAqO7m19l%2F60izBKCGh6gePKoE1Loy163Xk7xTzyBvAT6imcriIr98zcdL8JLzUl2OS8PaauzpwACEDDFPpDBD04HbLvx33A5PhuP1TavMMf06BeIv1F9KdYOGCDLscjquQn3lOmiiyfLyARTTF4VkJ76uuQRikXbRk1ZFOzyQIHHZ6iK4zWWKS2ECJKvAyEPe4cAM2bESMW%2Feo4lGQKY%2FL%2FkySvQz2b4JLBQTQLQPeHVSJscNUHUAWb7OlwJBoD5ribJsPAfiqrZoYiUcwd7Y67mXbMa1YXoo1sHkUBnkemTcCndI67NlL3N1vIgqDRIHrZyxf8o6t8bFspFLyvQ6mmf9vmcbB2TA85HqeLRHr4XY531O%2BRThXyHTmjB2Dz7eXg05TgPK9vs60NcgQMaY63NaH%2FzMB9qZOulWgDTAmepQYXx3Vl8HacPuRKGDUDQMybbpgCb8ZBiKbMmcL28%2FarOpyUghUjPxZwfj7uc2FkSEwqmhKoYuT6xB8UFIWJRvSEfo9V8PLsU06I8w9T1tlY9JMuGc67lyD%2ByNJNbJPqLIc66dJvsd%2F10swj6%2FyvwY6pgFufWi7JrpAsJFoKPnygt7UKpU7UMIUPRwqp3f74KSQXbw6atX7iS0HNBFmQx9ACUM3XsFqLcozvE%2F4S06mMb8gXTU10uA4tbpyjVZN%2BXiuJSh2hzYFuMCN4%2BXKYoXhgMHmFDOkIWlz0%2BQb1H60Uz18FMGLhlwGbditlZoWM0uBckoLDQZsOpA46D9s%2F35wLSmHBNpuon3hSALOo87%2FWnG4KnNpiiMM&X-Amz-Signature=5d3e947ef369b4b251f174e78a5c8eccd3f3f1188a6350f429ba3644c14c0890&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4K73VLD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi6CGW47X%2F5%2FZJhrly3Hu9yMaQhGuTJgLCdFtPPh85qAiAzQGhgmI2AEGOihrgaSqrCDhNYesjUgegFZjX6eYgc%2BCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufskmWbKkewCTwcUKtwDPf7dhnPPIGLVnVtIRhN9NnMZ%2Bo4WGNqCacFiTg2UQw7w9uVI4HBDTI6Uw6a7k5%2FwuhAqO7m19l%2F60izBKCGh6gePKoE1Loy163Xk7xTzyBvAT6imcriIr98zcdL8JLzUl2OS8PaauzpwACEDDFPpDBD04HbLvx33A5PhuP1TavMMf06BeIv1F9KdYOGCDLscjquQn3lOmiiyfLyARTTF4VkJ76uuQRikXbRk1ZFOzyQIHHZ6iK4zWWKS2ECJKvAyEPe4cAM2bESMW%2Feo4lGQKY%2FL%2FkySvQz2b4JLBQTQLQPeHVSJscNUHUAWb7OlwJBoD5ribJsPAfiqrZoYiUcwd7Y67mXbMa1YXoo1sHkUBnkemTcCndI67NlL3N1vIgqDRIHrZyxf8o6t8bFspFLyvQ6mmf9vmcbB2TA85HqeLRHr4XY531O%2BRThXyHTmjB2Dz7eXg05TgPK9vs60NcgQMaY63NaH%2FzMB9qZOulWgDTAmepQYXx3Vl8HacPuRKGDUDQMybbpgCb8ZBiKbMmcL28%2FarOpyUghUjPxZwfj7uc2FkSEwqmhKoYuT6xB8UFIWJRvSEfo9V8PLsU06I8w9T1tlY9JMuGc67lyD%2ByNJNbJPqLIc66dJvsd%2F10swj6%2FyvwY6pgFufWi7JrpAsJFoKPnygt7UKpU7UMIUPRwqp3f74KSQXbw6atX7iS0HNBFmQx9ACUM3XsFqLcozvE%2F4S06mMb8gXTU10uA4tbpyjVZN%2BXiuJSh2hzYFuMCN4%2BXKYoXhgMHmFDOkIWlz0%2BQb1H60Uz18FMGLhlwGbditlZoWM0uBckoLDQZsOpA46D9s%2F35wLSmHBNpuon3hSALOo87%2FWnG4KnNpiiMM&X-Amz-Signature=ed7087f12c27d13a1016742779156c6b7576df078a17808bb7ee547771042a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4K73VLD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi6CGW47X%2F5%2FZJhrly3Hu9yMaQhGuTJgLCdFtPPh85qAiAzQGhgmI2AEGOihrgaSqrCDhNYesjUgegFZjX6eYgc%2BCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufskmWbKkewCTwcUKtwDPf7dhnPPIGLVnVtIRhN9NnMZ%2Bo4WGNqCacFiTg2UQw7w9uVI4HBDTI6Uw6a7k5%2FwuhAqO7m19l%2F60izBKCGh6gePKoE1Loy163Xk7xTzyBvAT6imcriIr98zcdL8JLzUl2OS8PaauzpwACEDDFPpDBD04HbLvx33A5PhuP1TavMMf06BeIv1F9KdYOGCDLscjquQn3lOmiiyfLyARTTF4VkJ76uuQRikXbRk1ZFOzyQIHHZ6iK4zWWKS2ECJKvAyEPe4cAM2bESMW%2Feo4lGQKY%2FL%2FkySvQz2b4JLBQTQLQPeHVSJscNUHUAWb7OlwJBoD5ribJsPAfiqrZoYiUcwd7Y67mXbMa1YXoo1sHkUBnkemTcCndI67NlL3N1vIgqDRIHrZyxf8o6t8bFspFLyvQ6mmf9vmcbB2TA85HqeLRHr4XY531O%2BRThXyHTmjB2Dz7eXg05TgPK9vs60NcgQMaY63NaH%2FzMB9qZOulWgDTAmepQYXx3Vl8HacPuRKGDUDQMybbpgCb8ZBiKbMmcL28%2FarOpyUghUjPxZwfj7uc2FkSEwqmhKoYuT6xB8UFIWJRvSEfo9V8PLsU06I8w9T1tlY9JMuGc67lyD%2ByNJNbJPqLIc66dJvsd%2F10swj6%2FyvwY6pgFufWi7JrpAsJFoKPnygt7UKpU7UMIUPRwqp3f74KSQXbw6atX7iS0HNBFmQx9ACUM3XsFqLcozvE%2F4S06mMb8gXTU10uA4tbpyjVZN%2BXiuJSh2hzYFuMCN4%2BXKYoXhgMHmFDOkIWlz0%2BQb1H60Uz18FMGLhlwGbditlZoWM0uBckoLDQZsOpA46D9s%2F35wLSmHBNpuon3hSALOo87%2FWnG4KnNpiiMM&X-Amz-Signature=967e936140944bdff0e3c51917e70b869c5909b8ddf3824367d7f5975df328db&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4K73VLD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi6CGW47X%2F5%2FZJhrly3Hu9yMaQhGuTJgLCdFtPPh85qAiAzQGhgmI2AEGOihrgaSqrCDhNYesjUgegFZjX6eYgc%2BCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufskmWbKkewCTwcUKtwDPf7dhnPPIGLVnVtIRhN9NnMZ%2Bo4WGNqCacFiTg2UQw7w9uVI4HBDTI6Uw6a7k5%2FwuhAqO7m19l%2F60izBKCGh6gePKoE1Loy163Xk7xTzyBvAT6imcriIr98zcdL8JLzUl2OS8PaauzpwACEDDFPpDBD04HbLvx33A5PhuP1TavMMf06BeIv1F9KdYOGCDLscjquQn3lOmiiyfLyARTTF4VkJ76uuQRikXbRk1ZFOzyQIHHZ6iK4zWWKS2ECJKvAyEPe4cAM2bESMW%2Feo4lGQKY%2FL%2FkySvQz2b4JLBQTQLQPeHVSJscNUHUAWb7OlwJBoD5ribJsPAfiqrZoYiUcwd7Y67mXbMa1YXoo1sHkUBnkemTcCndI67NlL3N1vIgqDRIHrZyxf8o6t8bFspFLyvQ6mmf9vmcbB2TA85HqeLRHr4XY531O%2BRThXyHTmjB2Dz7eXg05TgPK9vs60NcgQMaY63NaH%2FzMB9qZOulWgDTAmepQYXx3Vl8HacPuRKGDUDQMybbpgCb8ZBiKbMmcL28%2FarOpyUghUjPxZwfj7uc2FkSEwqmhKoYuT6xB8UFIWJRvSEfo9V8PLsU06I8w9T1tlY9JMuGc67lyD%2ByNJNbJPqLIc66dJvsd%2F10swj6%2FyvwY6pgFufWi7JrpAsJFoKPnygt7UKpU7UMIUPRwqp3f74KSQXbw6atX7iS0HNBFmQx9ACUM3XsFqLcozvE%2F4S06mMb8gXTU10uA4tbpyjVZN%2BXiuJSh2hzYFuMCN4%2BXKYoXhgMHmFDOkIWlz0%2BQb1H60Uz18FMGLhlwGbditlZoWM0uBckoLDQZsOpA46D9s%2F35wLSmHBNpuon3hSALOo87%2FWnG4KnNpiiMM&X-Amz-Signature=ea0163d650727de09cdaad31f2c750b5064933f0414261d37308ad253a1954fb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4K73VLD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi6CGW47X%2F5%2FZJhrly3Hu9yMaQhGuTJgLCdFtPPh85qAiAzQGhgmI2AEGOihrgaSqrCDhNYesjUgegFZjX6eYgc%2BCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufskmWbKkewCTwcUKtwDPf7dhnPPIGLVnVtIRhN9NnMZ%2Bo4WGNqCacFiTg2UQw7w9uVI4HBDTI6Uw6a7k5%2FwuhAqO7m19l%2F60izBKCGh6gePKoE1Loy163Xk7xTzyBvAT6imcriIr98zcdL8JLzUl2OS8PaauzpwACEDDFPpDBD04HbLvx33A5PhuP1TavMMf06BeIv1F9KdYOGCDLscjquQn3lOmiiyfLyARTTF4VkJ76uuQRikXbRk1ZFOzyQIHHZ6iK4zWWKS2ECJKvAyEPe4cAM2bESMW%2Feo4lGQKY%2FL%2FkySvQz2b4JLBQTQLQPeHVSJscNUHUAWb7OlwJBoD5ribJsPAfiqrZoYiUcwd7Y67mXbMa1YXoo1sHkUBnkemTcCndI67NlL3N1vIgqDRIHrZyxf8o6t8bFspFLyvQ6mmf9vmcbB2TA85HqeLRHr4XY531O%2BRThXyHTmjB2Dz7eXg05TgPK9vs60NcgQMaY63NaH%2FzMB9qZOulWgDTAmepQYXx3Vl8HacPuRKGDUDQMybbpgCb8ZBiKbMmcL28%2FarOpyUghUjPxZwfj7uc2FkSEwqmhKoYuT6xB8UFIWJRvSEfo9V8PLsU06I8w9T1tlY9JMuGc67lyD%2ByNJNbJPqLIc66dJvsd%2F10swj6%2FyvwY6pgFufWi7JrpAsJFoKPnygt7UKpU7UMIUPRwqp3f74KSQXbw6atX7iS0HNBFmQx9ACUM3XsFqLcozvE%2F4S06mMb8gXTU10uA4tbpyjVZN%2BXiuJSh2hzYFuMCN4%2BXKYoXhgMHmFDOkIWlz0%2BQb1H60Uz18FMGLhlwGbditlZoWM0uBckoLDQZsOpA46D9s%2F35wLSmHBNpuon3hSALOo87%2FWnG4KnNpiiMM&X-Amz-Signature=e04980afd066734705a4235dfaa45bf06a4b6d7ab1d242a3f02763d82c795f84&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

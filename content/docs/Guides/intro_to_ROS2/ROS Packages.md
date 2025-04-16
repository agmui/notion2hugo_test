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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MOTWY6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNOjUZymsjeoEXpj2IQWJsNcGzMG9v8MSueBsA%2FhIxWwIhAPzFtSqfOodZzaUJy4mU%2F41KhZTaO5nL3usKrF9stgGsKv8DCEsQABoMNjM3NDIzMTgzODA1Igyk%2FTCHfxvwFurVWfkq3ANj5fHUsWr0KMcDWr1W9lhwny0z13BUFfgc%2Fb%2Bqpq8wgRxIPiCeIKCIEbPxSpdKEm1mzzutaQu%2FZsEOFXUVfmGMIpQgJsMviXIcxrmi80U4hf1NsfMourvkocETUqX%2F%2BJmHhHCA%2BPIqIKy%2FDHw8NUW9yiaNDzbGDV8l06Rm06Z1ClPJQmicqfTfEhFcgMCy4uGgZcKelW4qoWDkE0xyzjE05mdWb%2B8ceTOV%2FJfjD8GFdFFBbzPFjicfXnxYBu%2FoeJdqozOuZFbks82AIgMNKw8M2i0AHrsKnwsVUWP7b%2FEtbg84vfYWCfRM1msgzS6j1vxbH7V24ssGPKEs5wjHA6zjMlCflMAo3zezhocPnIbeJhkSEWezUvf%2B%2Fivy6TfJNBoa74zPBoLUAGfyMbT0bQEA84%2BII4Mct%2Bf9NEvmhmBGBq6Dz0fxvHXkuzOaJ%2FFwiu0gb5yRrllYm2JpphIfacOQJ6MOdaNo%2BrX5j4hc53eD%2FXnz4P4SmA4AeiFcJ8zVrKY46bYGqG19FVouyT%2BQ4s0PALsEvTXTxxtaLXEKwVAtlaM22mxlUfQxsAKNLgO32CnsWECcea%2ByJQwTabfZDlEfSqCr%2Fpykn1GFWeggMDXntCwOWfLINQ4NSyUVjzCo3%2F%2B%2FBjqkAUyM8Z2hXka5kBL4BX7jlt5hhTgFg4taZfwXuReWn4F4hqk02v7hNwDlyUL2PglAlwiSwZWFA3g2D%2BT%2FWNGpEcbM4hEwz7su%2F0pr2GLGydl9JKuoIrk1DnamJTVPHUTpf8yZnaT5e95cx1BXJcaF6dh0JPYUaCjMzQgPX2%2FJEaWIoPdApmajTGcuhDAxZXQmZY6TzNYvKeYXpTR5eWnXpYw%2FciGW&X-Amz-Signature=c2572d9d4db5dbd09c87eb7706afb7c1704073bef04b4e09c8e1f85169980d34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MOTWY6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNOjUZymsjeoEXpj2IQWJsNcGzMG9v8MSueBsA%2FhIxWwIhAPzFtSqfOodZzaUJy4mU%2F41KhZTaO5nL3usKrF9stgGsKv8DCEsQABoMNjM3NDIzMTgzODA1Igyk%2FTCHfxvwFurVWfkq3ANj5fHUsWr0KMcDWr1W9lhwny0z13BUFfgc%2Fb%2Bqpq8wgRxIPiCeIKCIEbPxSpdKEm1mzzutaQu%2FZsEOFXUVfmGMIpQgJsMviXIcxrmi80U4hf1NsfMourvkocETUqX%2F%2BJmHhHCA%2BPIqIKy%2FDHw8NUW9yiaNDzbGDV8l06Rm06Z1ClPJQmicqfTfEhFcgMCy4uGgZcKelW4qoWDkE0xyzjE05mdWb%2B8ceTOV%2FJfjD8GFdFFBbzPFjicfXnxYBu%2FoeJdqozOuZFbks82AIgMNKw8M2i0AHrsKnwsVUWP7b%2FEtbg84vfYWCfRM1msgzS6j1vxbH7V24ssGPKEs5wjHA6zjMlCflMAo3zezhocPnIbeJhkSEWezUvf%2B%2Fivy6TfJNBoa74zPBoLUAGfyMbT0bQEA84%2BII4Mct%2Bf9NEvmhmBGBq6Dz0fxvHXkuzOaJ%2FFwiu0gb5yRrllYm2JpphIfacOQJ6MOdaNo%2BrX5j4hc53eD%2FXnz4P4SmA4AeiFcJ8zVrKY46bYGqG19FVouyT%2BQ4s0PALsEvTXTxxtaLXEKwVAtlaM22mxlUfQxsAKNLgO32CnsWECcea%2ByJQwTabfZDlEfSqCr%2Fpykn1GFWeggMDXntCwOWfLINQ4NSyUVjzCo3%2F%2B%2FBjqkAUyM8Z2hXka5kBL4BX7jlt5hhTgFg4taZfwXuReWn4F4hqk02v7hNwDlyUL2PglAlwiSwZWFA3g2D%2BT%2FWNGpEcbM4hEwz7su%2F0pr2GLGydl9JKuoIrk1DnamJTVPHUTpf8yZnaT5e95cx1BXJcaF6dh0JPYUaCjMzQgPX2%2FJEaWIoPdApmajTGcuhDAxZXQmZY6TzNYvKeYXpTR5eWnXpYw%2FciGW&X-Amz-Signature=c902835e7f11ae3677e5489d6d1e6ed584333978d308a29eccf19e324b811bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MOTWY6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNOjUZymsjeoEXpj2IQWJsNcGzMG9v8MSueBsA%2FhIxWwIhAPzFtSqfOodZzaUJy4mU%2F41KhZTaO5nL3usKrF9stgGsKv8DCEsQABoMNjM3NDIzMTgzODA1Igyk%2FTCHfxvwFurVWfkq3ANj5fHUsWr0KMcDWr1W9lhwny0z13BUFfgc%2Fb%2Bqpq8wgRxIPiCeIKCIEbPxSpdKEm1mzzutaQu%2FZsEOFXUVfmGMIpQgJsMviXIcxrmi80U4hf1NsfMourvkocETUqX%2F%2BJmHhHCA%2BPIqIKy%2FDHw8NUW9yiaNDzbGDV8l06Rm06Z1ClPJQmicqfTfEhFcgMCy4uGgZcKelW4qoWDkE0xyzjE05mdWb%2B8ceTOV%2FJfjD8GFdFFBbzPFjicfXnxYBu%2FoeJdqozOuZFbks82AIgMNKw8M2i0AHrsKnwsVUWP7b%2FEtbg84vfYWCfRM1msgzS6j1vxbH7V24ssGPKEs5wjHA6zjMlCflMAo3zezhocPnIbeJhkSEWezUvf%2B%2Fivy6TfJNBoa74zPBoLUAGfyMbT0bQEA84%2BII4Mct%2Bf9NEvmhmBGBq6Dz0fxvHXkuzOaJ%2FFwiu0gb5yRrllYm2JpphIfacOQJ6MOdaNo%2BrX5j4hc53eD%2FXnz4P4SmA4AeiFcJ8zVrKY46bYGqG19FVouyT%2BQ4s0PALsEvTXTxxtaLXEKwVAtlaM22mxlUfQxsAKNLgO32CnsWECcea%2ByJQwTabfZDlEfSqCr%2Fpykn1GFWeggMDXntCwOWfLINQ4NSyUVjzCo3%2F%2B%2FBjqkAUyM8Z2hXka5kBL4BX7jlt5hhTgFg4taZfwXuReWn4F4hqk02v7hNwDlyUL2PglAlwiSwZWFA3g2D%2BT%2FWNGpEcbM4hEwz7su%2F0pr2GLGydl9JKuoIrk1DnamJTVPHUTpf8yZnaT5e95cx1BXJcaF6dh0JPYUaCjMzQgPX2%2FJEaWIoPdApmajTGcuhDAxZXQmZY6TzNYvKeYXpTR5eWnXpYw%2FciGW&X-Amz-Signature=b8eb9b143e0dc1ef10c62133f7ec40fe593f2dacb61fa9e5a6b9a7af826bb328&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MOTWY6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNOjUZymsjeoEXpj2IQWJsNcGzMG9v8MSueBsA%2FhIxWwIhAPzFtSqfOodZzaUJy4mU%2F41KhZTaO5nL3usKrF9stgGsKv8DCEsQABoMNjM3NDIzMTgzODA1Igyk%2FTCHfxvwFurVWfkq3ANj5fHUsWr0KMcDWr1W9lhwny0z13BUFfgc%2Fb%2Bqpq8wgRxIPiCeIKCIEbPxSpdKEm1mzzutaQu%2FZsEOFXUVfmGMIpQgJsMviXIcxrmi80U4hf1NsfMourvkocETUqX%2F%2BJmHhHCA%2BPIqIKy%2FDHw8NUW9yiaNDzbGDV8l06Rm06Z1ClPJQmicqfTfEhFcgMCy4uGgZcKelW4qoWDkE0xyzjE05mdWb%2B8ceTOV%2FJfjD8GFdFFBbzPFjicfXnxYBu%2FoeJdqozOuZFbks82AIgMNKw8M2i0AHrsKnwsVUWP7b%2FEtbg84vfYWCfRM1msgzS6j1vxbH7V24ssGPKEs5wjHA6zjMlCflMAo3zezhocPnIbeJhkSEWezUvf%2B%2Fivy6TfJNBoa74zPBoLUAGfyMbT0bQEA84%2BII4Mct%2Bf9NEvmhmBGBq6Dz0fxvHXkuzOaJ%2FFwiu0gb5yRrllYm2JpphIfacOQJ6MOdaNo%2BrX5j4hc53eD%2FXnz4P4SmA4AeiFcJ8zVrKY46bYGqG19FVouyT%2BQ4s0PALsEvTXTxxtaLXEKwVAtlaM22mxlUfQxsAKNLgO32CnsWECcea%2ByJQwTabfZDlEfSqCr%2Fpykn1GFWeggMDXntCwOWfLINQ4NSyUVjzCo3%2F%2B%2FBjqkAUyM8Z2hXka5kBL4BX7jlt5hhTgFg4taZfwXuReWn4F4hqk02v7hNwDlyUL2PglAlwiSwZWFA3g2D%2BT%2FWNGpEcbM4hEwz7su%2F0pr2GLGydl9JKuoIrk1DnamJTVPHUTpf8yZnaT5e95cx1BXJcaF6dh0JPYUaCjMzQgPX2%2FJEaWIoPdApmajTGcuhDAxZXQmZY6TzNYvKeYXpTR5eWnXpYw%2FciGW&X-Amz-Signature=be23529d334c6a8e6e9a3b384e4f35a83ee534874810f07092a9813eff2d3cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MOTWY6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNOjUZymsjeoEXpj2IQWJsNcGzMG9v8MSueBsA%2FhIxWwIhAPzFtSqfOodZzaUJy4mU%2F41KhZTaO5nL3usKrF9stgGsKv8DCEsQABoMNjM3NDIzMTgzODA1Igyk%2FTCHfxvwFurVWfkq3ANj5fHUsWr0KMcDWr1W9lhwny0z13BUFfgc%2Fb%2Bqpq8wgRxIPiCeIKCIEbPxSpdKEm1mzzutaQu%2FZsEOFXUVfmGMIpQgJsMviXIcxrmi80U4hf1NsfMourvkocETUqX%2F%2BJmHhHCA%2BPIqIKy%2FDHw8NUW9yiaNDzbGDV8l06Rm06Z1ClPJQmicqfTfEhFcgMCy4uGgZcKelW4qoWDkE0xyzjE05mdWb%2B8ceTOV%2FJfjD8GFdFFBbzPFjicfXnxYBu%2FoeJdqozOuZFbks82AIgMNKw8M2i0AHrsKnwsVUWP7b%2FEtbg84vfYWCfRM1msgzS6j1vxbH7V24ssGPKEs5wjHA6zjMlCflMAo3zezhocPnIbeJhkSEWezUvf%2B%2Fivy6TfJNBoa74zPBoLUAGfyMbT0bQEA84%2BII4Mct%2Bf9NEvmhmBGBq6Dz0fxvHXkuzOaJ%2FFwiu0gb5yRrllYm2JpphIfacOQJ6MOdaNo%2BrX5j4hc53eD%2FXnz4P4SmA4AeiFcJ8zVrKY46bYGqG19FVouyT%2BQ4s0PALsEvTXTxxtaLXEKwVAtlaM22mxlUfQxsAKNLgO32CnsWECcea%2ByJQwTabfZDlEfSqCr%2Fpykn1GFWeggMDXntCwOWfLINQ4NSyUVjzCo3%2F%2B%2FBjqkAUyM8Z2hXka5kBL4BX7jlt5hhTgFg4taZfwXuReWn4F4hqk02v7hNwDlyUL2PglAlwiSwZWFA3g2D%2BT%2FWNGpEcbM4hEwz7su%2F0pr2GLGydl9JKuoIrk1DnamJTVPHUTpf8yZnaT5e95cx1BXJcaF6dh0JPYUaCjMzQgPX2%2FJEaWIoPdApmajTGcuhDAxZXQmZY6TzNYvKeYXpTR5eWnXpYw%2FciGW&X-Amz-Signature=2071d7f17142f93fbc1782df9e09b2e0f07012d3d412f94733544ad4429bdc52&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MOTWY6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNOjUZymsjeoEXpj2IQWJsNcGzMG9v8MSueBsA%2FhIxWwIhAPzFtSqfOodZzaUJy4mU%2F41KhZTaO5nL3usKrF9stgGsKv8DCEsQABoMNjM3NDIzMTgzODA1Igyk%2FTCHfxvwFurVWfkq3ANj5fHUsWr0KMcDWr1W9lhwny0z13BUFfgc%2Fb%2Bqpq8wgRxIPiCeIKCIEbPxSpdKEm1mzzutaQu%2FZsEOFXUVfmGMIpQgJsMviXIcxrmi80U4hf1NsfMourvkocETUqX%2F%2BJmHhHCA%2BPIqIKy%2FDHw8NUW9yiaNDzbGDV8l06Rm06Z1ClPJQmicqfTfEhFcgMCy4uGgZcKelW4qoWDkE0xyzjE05mdWb%2B8ceTOV%2FJfjD8GFdFFBbzPFjicfXnxYBu%2FoeJdqozOuZFbks82AIgMNKw8M2i0AHrsKnwsVUWP7b%2FEtbg84vfYWCfRM1msgzS6j1vxbH7V24ssGPKEs5wjHA6zjMlCflMAo3zezhocPnIbeJhkSEWezUvf%2B%2Fivy6TfJNBoa74zPBoLUAGfyMbT0bQEA84%2BII4Mct%2Bf9NEvmhmBGBq6Dz0fxvHXkuzOaJ%2FFwiu0gb5yRrllYm2JpphIfacOQJ6MOdaNo%2BrX5j4hc53eD%2FXnz4P4SmA4AeiFcJ8zVrKY46bYGqG19FVouyT%2BQ4s0PALsEvTXTxxtaLXEKwVAtlaM22mxlUfQxsAKNLgO32CnsWECcea%2ByJQwTabfZDlEfSqCr%2Fpykn1GFWeggMDXntCwOWfLINQ4NSyUVjzCo3%2F%2B%2FBjqkAUyM8Z2hXka5kBL4BX7jlt5hhTgFg4taZfwXuReWn4F4hqk02v7hNwDlyUL2PglAlwiSwZWFA3g2D%2BT%2FWNGpEcbM4hEwz7su%2F0pr2GLGydl9JKuoIrk1DnamJTVPHUTpf8yZnaT5e95cx1BXJcaF6dh0JPYUaCjMzQgPX2%2FJEaWIoPdApmajTGcuhDAxZXQmZY6TzNYvKeYXpTR5eWnXpYw%2FciGW&X-Amz-Signature=be5f6deec4cc2b7d5679f737dbf59e20381a0eab0718a001601d86ccbf0d801a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MOTWY6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNOjUZymsjeoEXpj2IQWJsNcGzMG9v8MSueBsA%2FhIxWwIhAPzFtSqfOodZzaUJy4mU%2F41KhZTaO5nL3usKrF9stgGsKv8DCEsQABoMNjM3NDIzMTgzODA1Igyk%2FTCHfxvwFurVWfkq3ANj5fHUsWr0KMcDWr1W9lhwny0z13BUFfgc%2Fb%2Bqpq8wgRxIPiCeIKCIEbPxSpdKEm1mzzutaQu%2FZsEOFXUVfmGMIpQgJsMviXIcxrmi80U4hf1NsfMourvkocETUqX%2F%2BJmHhHCA%2BPIqIKy%2FDHw8NUW9yiaNDzbGDV8l06Rm06Z1ClPJQmicqfTfEhFcgMCy4uGgZcKelW4qoWDkE0xyzjE05mdWb%2B8ceTOV%2FJfjD8GFdFFBbzPFjicfXnxYBu%2FoeJdqozOuZFbks82AIgMNKw8M2i0AHrsKnwsVUWP7b%2FEtbg84vfYWCfRM1msgzS6j1vxbH7V24ssGPKEs5wjHA6zjMlCflMAo3zezhocPnIbeJhkSEWezUvf%2B%2Fivy6TfJNBoa74zPBoLUAGfyMbT0bQEA84%2BII4Mct%2Bf9NEvmhmBGBq6Dz0fxvHXkuzOaJ%2FFwiu0gb5yRrllYm2JpphIfacOQJ6MOdaNo%2BrX5j4hc53eD%2FXnz4P4SmA4AeiFcJ8zVrKY46bYGqG19FVouyT%2BQ4s0PALsEvTXTxxtaLXEKwVAtlaM22mxlUfQxsAKNLgO32CnsWECcea%2ByJQwTabfZDlEfSqCr%2Fpykn1GFWeggMDXntCwOWfLINQ4NSyUVjzCo3%2F%2B%2FBjqkAUyM8Z2hXka5kBL4BX7jlt5hhTgFg4taZfwXuReWn4F4hqk02v7hNwDlyUL2PglAlwiSwZWFA3g2D%2BT%2FWNGpEcbM4hEwz7su%2F0pr2GLGydl9JKuoIrk1DnamJTVPHUTpf8yZnaT5e95cx1BXJcaF6dh0JPYUaCjMzQgPX2%2FJEaWIoPdApmajTGcuhDAxZXQmZY6TzNYvKeYXpTR5eWnXpYw%2FciGW&X-Amz-Signature=28f4e513902234bcb77953a3b47c63039880d2ce1d2cf9958e05f0812fa7d341&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

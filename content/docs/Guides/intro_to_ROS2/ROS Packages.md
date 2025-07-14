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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VZF4A6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCHuF75W8d3kuvpU7Cskv5HpX0j00IY1rq5SsWhjcsKnwIhAObAOJAXvHjQfNBo1yTMXcfmRiOFXlv4mmGvg%2F2PHZv8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwuJIrhjO0zv3Wrer0q3APq7lIpIWyMtF2y1U4jVAfLJvJDbTcLhdWkNjOfIIh1sTopiuONAulWYeUINY7eNB7E%2FBH%2FATUIZpstlXpaMohih3DwjYvKwLx8LDNalhrNPRuG6ngmCtr5DvFNlsQxTrcP6d9hSUm7JitijPhaQCC44npB3qikGap0xY36%2FHBmZQnZbzwtS%2FWKx8UnBVoXAXQdyZ1HlprJryDOfh4Oki%2FCwBAkV6Ot%2F47j166f0OXGjCVoja4hjxd4yAXUKv2FADaBDaCt7VZ7SgHuTXrapvmSv6aURHXKpAMbz5z3MXWXNl2VEI8HbLW3dV70aIx%2BGif2OcLeihmUkpqtMvfQGXEmhfj5im7E%2FOEyzgsgeCOqevN%2BiGo0x7GpwjkMtkwZx9fsMksgbsJhcwOqUwyRaA5jN7rOHWpeRSlYY7vUFAbV5NbHkGqtEOTUeP8RDLABOumqX4ZxoiyPcwlvm8ho0y%2BuQbyIY16Acih2lf%2Fxkd6ghO6Xl7ZQE3oxIZ18SpdaP5zzFP6NkDUVqkLYuFsPf5cDs6u%2FRog6Qkh6RNrPR5l9JJojFNsjhqGaMrSMpD2j3C3F3oiN0Klq83MvQh1dkDVGZNpgIGA0Lm7jEwqwN5uw%2FQKEm%2BTr2xsYzquUcjDx99XDBjqkASTMcXoe%2FgqX4gQhjK6YkO1asXwik7j9QEUEhXoXGSmb0hmjUgB1N5%2Bk4UJxUz84Lw2rfbdcdv8R9NrhSisWTYf%2BhqOnoYeIIKlXdfM86tjsc1iRoJEMntRPJb35VdtunCcGt5BuVKm7sJTO22S1YZFWOkbG9NioV7X163iyQW%2Bg%2BdlWdhznTI9CZulgFA7zhijGGz17FVYWPxOTo12o2llNZ2%2Bo&X-Amz-Signature=8344eda0da4d2b39e8d58f48dad9890db5af331d411b12b2952a422fd6d4ca47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VZF4A6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCHuF75W8d3kuvpU7Cskv5HpX0j00IY1rq5SsWhjcsKnwIhAObAOJAXvHjQfNBo1yTMXcfmRiOFXlv4mmGvg%2F2PHZv8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwuJIrhjO0zv3Wrer0q3APq7lIpIWyMtF2y1U4jVAfLJvJDbTcLhdWkNjOfIIh1sTopiuONAulWYeUINY7eNB7E%2FBH%2FATUIZpstlXpaMohih3DwjYvKwLx8LDNalhrNPRuG6ngmCtr5DvFNlsQxTrcP6d9hSUm7JitijPhaQCC44npB3qikGap0xY36%2FHBmZQnZbzwtS%2FWKx8UnBVoXAXQdyZ1HlprJryDOfh4Oki%2FCwBAkV6Ot%2F47j166f0OXGjCVoja4hjxd4yAXUKv2FADaBDaCt7VZ7SgHuTXrapvmSv6aURHXKpAMbz5z3MXWXNl2VEI8HbLW3dV70aIx%2BGif2OcLeihmUkpqtMvfQGXEmhfj5im7E%2FOEyzgsgeCOqevN%2BiGo0x7GpwjkMtkwZx9fsMksgbsJhcwOqUwyRaA5jN7rOHWpeRSlYY7vUFAbV5NbHkGqtEOTUeP8RDLABOumqX4ZxoiyPcwlvm8ho0y%2BuQbyIY16Acih2lf%2Fxkd6ghO6Xl7ZQE3oxIZ18SpdaP5zzFP6NkDUVqkLYuFsPf5cDs6u%2FRog6Qkh6RNrPR5l9JJojFNsjhqGaMrSMpD2j3C3F3oiN0Klq83MvQh1dkDVGZNpgIGA0Lm7jEwqwN5uw%2FQKEm%2BTr2xsYzquUcjDx99XDBjqkASTMcXoe%2FgqX4gQhjK6YkO1asXwik7j9QEUEhXoXGSmb0hmjUgB1N5%2Bk4UJxUz84Lw2rfbdcdv8R9NrhSisWTYf%2BhqOnoYeIIKlXdfM86tjsc1iRoJEMntRPJb35VdtunCcGt5BuVKm7sJTO22S1YZFWOkbG9NioV7X163iyQW%2Bg%2BdlWdhznTI9CZulgFA7zhijGGz17FVYWPxOTo12o2llNZ2%2Bo&X-Amz-Signature=0fa62952139be1733f90ba76e402642b34752583fcdedd30f627420607a0f843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VZF4A6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCHuF75W8d3kuvpU7Cskv5HpX0j00IY1rq5SsWhjcsKnwIhAObAOJAXvHjQfNBo1yTMXcfmRiOFXlv4mmGvg%2F2PHZv8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwuJIrhjO0zv3Wrer0q3APq7lIpIWyMtF2y1U4jVAfLJvJDbTcLhdWkNjOfIIh1sTopiuONAulWYeUINY7eNB7E%2FBH%2FATUIZpstlXpaMohih3DwjYvKwLx8LDNalhrNPRuG6ngmCtr5DvFNlsQxTrcP6d9hSUm7JitijPhaQCC44npB3qikGap0xY36%2FHBmZQnZbzwtS%2FWKx8UnBVoXAXQdyZ1HlprJryDOfh4Oki%2FCwBAkV6Ot%2F47j166f0OXGjCVoja4hjxd4yAXUKv2FADaBDaCt7VZ7SgHuTXrapvmSv6aURHXKpAMbz5z3MXWXNl2VEI8HbLW3dV70aIx%2BGif2OcLeihmUkpqtMvfQGXEmhfj5im7E%2FOEyzgsgeCOqevN%2BiGo0x7GpwjkMtkwZx9fsMksgbsJhcwOqUwyRaA5jN7rOHWpeRSlYY7vUFAbV5NbHkGqtEOTUeP8RDLABOumqX4ZxoiyPcwlvm8ho0y%2BuQbyIY16Acih2lf%2Fxkd6ghO6Xl7ZQE3oxIZ18SpdaP5zzFP6NkDUVqkLYuFsPf5cDs6u%2FRog6Qkh6RNrPR5l9JJojFNsjhqGaMrSMpD2j3C3F3oiN0Klq83MvQh1dkDVGZNpgIGA0Lm7jEwqwN5uw%2FQKEm%2BTr2xsYzquUcjDx99XDBjqkASTMcXoe%2FgqX4gQhjK6YkO1asXwik7j9QEUEhXoXGSmb0hmjUgB1N5%2Bk4UJxUz84Lw2rfbdcdv8R9NrhSisWTYf%2BhqOnoYeIIKlXdfM86tjsc1iRoJEMntRPJb35VdtunCcGt5BuVKm7sJTO22S1YZFWOkbG9NioV7X163iyQW%2Bg%2BdlWdhznTI9CZulgFA7zhijGGz17FVYWPxOTo12o2llNZ2%2Bo&X-Amz-Signature=865dc2209aee99035fbbf3b5cd81b31d09c2785d0b54a1994984ea52da677ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VZF4A6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCHuF75W8d3kuvpU7Cskv5HpX0j00IY1rq5SsWhjcsKnwIhAObAOJAXvHjQfNBo1yTMXcfmRiOFXlv4mmGvg%2F2PHZv8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwuJIrhjO0zv3Wrer0q3APq7lIpIWyMtF2y1U4jVAfLJvJDbTcLhdWkNjOfIIh1sTopiuONAulWYeUINY7eNB7E%2FBH%2FATUIZpstlXpaMohih3DwjYvKwLx8LDNalhrNPRuG6ngmCtr5DvFNlsQxTrcP6d9hSUm7JitijPhaQCC44npB3qikGap0xY36%2FHBmZQnZbzwtS%2FWKx8UnBVoXAXQdyZ1HlprJryDOfh4Oki%2FCwBAkV6Ot%2F47j166f0OXGjCVoja4hjxd4yAXUKv2FADaBDaCt7VZ7SgHuTXrapvmSv6aURHXKpAMbz5z3MXWXNl2VEI8HbLW3dV70aIx%2BGif2OcLeihmUkpqtMvfQGXEmhfj5im7E%2FOEyzgsgeCOqevN%2BiGo0x7GpwjkMtkwZx9fsMksgbsJhcwOqUwyRaA5jN7rOHWpeRSlYY7vUFAbV5NbHkGqtEOTUeP8RDLABOumqX4ZxoiyPcwlvm8ho0y%2BuQbyIY16Acih2lf%2Fxkd6ghO6Xl7ZQE3oxIZ18SpdaP5zzFP6NkDUVqkLYuFsPf5cDs6u%2FRog6Qkh6RNrPR5l9JJojFNsjhqGaMrSMpD2j3C3F3oiN0Klq83MvQh1dkDVGZNpgIGA0Lm7jEwqwN5uw%2FQKEm%2BTr2xsYzquUcjDx99XDBjqkASTMcXoe%2FgqX4gQhjK6YkO1asXwik7j9QEUEhXoXGSmb0hmjUgB1N5%2Bk4UJxUz84Lw2rfbdcdv8R9NrhSisWTYf%2BhqOnoYeIIKlXdfM86tjsc1iRoJEMntRPJb35VdtunCcGt5BuVKm7sJTO22S1YZFWOkbG9NioV7X163iyQW%2Bg%2BdlWdhznTI9CZulgFA7zhijGGz17FVYWPxOTo12o2llNZ2%2Bo&X-Amz-Signature=47031e37fcd431c65e924c94dcb2a5ab5342fc52ffb808de2076df1380cbda00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VZF4A6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCHuF75W8d3kuvpU7Cskv5HpX0j00IY1rq5SsWhjcsKnwIhAObAOJAXvHjQfNBo1yTMXcfmRiOFXlv4mmGvg%2F2PHZv8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwuJIrhjO0zv3Wrer0q3APq7lIpIWyMtF2y1U4jVAfLJvJDbTcLhdWkNjOfIIh1sTopiuONAulWYeUINY7eNB7E%2FBH%2FATUIZpstlXpaMohih3DwjYvKwLx8LDNalhrNPRuG6ngmCtr5DvFNlsQxTrcP6d9hSUm7JitijPhaQCC44npB3qikGap0xY36%2FHBmZQnZbzwtS%2FWKx8UnBVoXAXQdyZ1HlprJryDOfh4Oki%2FCwBAkV6Ot%2F47j166f0OXGjCVoja4hjxd4yAXUKv2FADaBDaCt7VZ7SgHuTXrapvmSv6aURHXKpAMbz5z3MXWXNl2VEI8HbLW3dV70aIx%2BGif2OcLeihmUkpqtMvfQGXEmhfj5im7E%2FOEyzgsgeCOqevN%2BiGo0x7GpwjkMtkwZx9fsMksgbsJhcwOqUwyRaA5jN7rOHWpeRSlYY7vUFAbV5NbHkGqtEOTUeP8RDLABOumqX4ZxoiyPcwlvm8ho0y%2BuQbyIY16Acih2lf%2Fxkd6ghO6Xl7ZQE3oxIZ18SpdaP5zzFP6NkDUVqkLYuFsPf5cDs6u%2FRog6Qkh6RNrPR5l9JJojFNsjhqGaMrSMpD2j3C3F3oiN0Klq83MvQh1dkDVGZNpgIGA0Lm7jEwqwN5uw%2FQKEm%2BTr2xsYzquUcjDx99XDBjqkASTMcXoe%2FgqX4gQhjK6YkO1asXwik7j9QEUEhXoXGSmb0hmjUgB1N5%2Bk4UJxUz84Lw2rfbdcdv8R9NrhSisWTYf%2BhqOnoYeIIKlXdfM86tjsc1iRoJEMntRPJb35VdtunCcGt5BuVKm7sJTO22S1YZFWOkbG9NioV7X163iyQW%2Bg%2BdlWdhznTI9CZulgFA7zhijGGz17FVYWPxOTo12o2llNZ2%2Bo&X-Amz-Signature=ac05a32a02d887b965fbd3b352124e06ca201ffacdcc22e0fbce9e89309eb6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VZF4A6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCHuF75W8d3kuvpU7Cskv5HpX0j00IY1rq5SsWhjcsKnwIhAObAOJAXvHjQfNBo1yTMXcfmRiOFXlv4mmGvg%2F2PHZv8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwuJIrhjO0zv3Wrer0q3APq7lIpIWyMtF2y1U4jVAfLJvJDbTcLhdWkNjOfIIh1sTopiuONAulWYeUINY7eNB7E%2FBH%2FATUIZpstlXpaMohih3DwjYvKwLx8LDNalhrNPRuG6ngmCtr5DvFNlsQxTrcP6d9hSUm7JitijPhaQCC44npB3qikGap0xY36%2FHBmZQnZbzwtS%2FWKx8UnBVoXAXQdyZ1HlprJryDOfh4Oki%2FCwBAkV6Ot%2F47j166f0OXGjCVoja4hjxd4yAXUKv2FADaBDaCt7VZ7SgHuTXrapvmSv6aURHXKpAMbz5z3MXWXNl2VEI8HbLW3dV70aIx%2BGif2OcLeihmUkpqtMvfQGXEmhfj5im7E%2FOEyzgsgeCOqevN%2BiGo0x7GpwjkMtkwZx9fsMksgbsJhcwOqUwyRaA5jN7rOHWpeRSlYY7vUFAbV5NbHkGqtEOTUeP8RDLABOumqX4ZxoiyPcwlvm8ho0y%2BuQbyIY16Acih2lf%2Fxkd6ghO6Xl7ZQE3oxIZ18SpdaP5zzFP6NkDUVqkLYuFsPf5cDs6u%2FRog6Qkh6RNrPR5l9JJojFNsjhqGaMrSMpD2j3C3F3oiN0Klq83MvQh1dkDVGZNpgIGA0Lm7jEwqwN5uw%2FQKEm%2BTr2xsYzquUcjDx99XDBjqkASTMcXoe%2FgqX4gQhjK6YkO1asXwik7j9QEUEhXoXGSmb0hmjUgB1N5%2Bk4UJxUz84Lw2rfbdcdv8R9NrhSisWTYf%2BhqOnoYeIIKlXdfM86tjsc1iRoJEMntRPJb35VdtunCcGt5BuVKm7sJTO22S1YZFWOkbG9NioV7X163iyQW%2Bg%2BdlWdhznTI9CZulgFA7zhijGGz17FVYWPxOTo12o2llNZ2%2Bo&X-Amz-Signature=bd27590d314311dd8fbfc42c980b4dd37664197e85f5a9498b1c0205336ea187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VZF4A6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCHuF75W8d3kuvpU7Cskv5HpX0j00IY1rq5SsWhjcsKnwIhAObAOJAXvHjQfNBo1yTMXcfmRiOFXlv4mmGvg%2F2PHZv8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwuJIrhjO0zv3Wrer0q3APq7lIpIWyMtF2y1U4jVAfLJvJDbTcLhdWkNjOfIIh1sTopiuONAulWYeUINY7eNB7E%2FBH%2FATUIZpstlXpaMohih3DwjYvKwLx8LDNalhrNPRuG6ngmCtr5DvFNlsQxTrcP6d9hSUm7JitijPhaQCC44npB3qikGap0xY36%2FHBmZQnZbzwtS%2FWKx8UnBVoXAXQdyZ1HlprJryDOfh4Oki%2FCwBAkV6Ot%2F47j166f0OXGjCVoja4hjxd4yAXUKv2FADaBDaCt7VZ7SgHuTXrapvmSv6aURHXKpAMbz5z3MXWXNl2VEI8HbLW3dV70aIx%2BGif2OcLeihmUkpqtMvfQGXEmhfj5im7E%2FOEyzgsgeCOqevN%2BiGo0x7GpwjkMtkwZx9fsMksgbsJhcwOqUwyRaA5jN7rOHWpeRSlYY7vUFAbV5NbHkGqtEOTUeP8RDLABOumqX4ZxoiyPcwlvm8ho0y%2BuQbyIY16Acih2lf%2Fxkd6ghO6Xl7ZQE3oxIZ18SpdaP5zzFP6NkDUVqkLYuFsPf5cDs6u%2FRog6Qkh6RNrPR5l9JJojFNsjhqGaMrSMpD2j3C3F3oiN0Klq83MvQh1dkDVGZNpgIGA0Lm7jEwqwN5uw%2FQKEm%2BTr2xsYzquUcjDx99XDBjqkASTMcXoe%2FgqX4gQhjK6YkO1asXwik7j9QEUEhXoXGSmb0hmjUgB1N5%2Bk4UJxUz84Lw2rfbdcdv8R9NrhSisWTYf%2BhqOnoYeIIKlXdfM86tjsc1iRoJEMntRPJb35VdtunCcGt5BuVKm7sJTO22S1YZFWOkbG9NioV7X163iyQW%2Bg%2BdlWdhznTI9CZulgFA7zhijGGz17FVYWPxOTo12o2llNZ2%2Bo&X-Amz-Signature=60287a91a378140e87bcca3c472b25bbe0438ac1ff9c540324e7e678f6b38588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

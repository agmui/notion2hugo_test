---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEXXZCO%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDIJOAwCn64ZOCcrQehlD895dZlCCmWrtm5iYZeSiIWwAiEA7HHzIx5IiQfg8jXBBflxcdN53Y%2FR8Ho281KWyL33d98qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvhWu2%2BulS8tsnKIircA%2BTrL0p2MHsYmfvZvyPzbdOf4E5uTDfhJZ0z%2FpGgHwvvuHfGJ6lFyOM7n90wYC6xFx39cNx4qVKISigzgGvTnvaHhsNUxNEnnTD8O6D5zGK%2FTKMaJfRTzRHYK0Y7k6TyDT18hFRX6rucfHOgKVr4uCtGF7HuSpwZisN025VLSWSMAGUSPW1oaaY8fNO8MFyP8nFmW9dFIt%2FEIPk2wlXiNB5x6pxP5nGBW5TkTnVZAustsJ70VwOBePI9krPuUdS1C%2FxTPjHMLIIwFiP2V4AhQjg903XS1A%2Bg5mruGpoQOfKWddW%2BxUVMWTs9R%2BO6BS%2BEJNX4nUTS1WKAPGvSwqfdvTOUSE1b9MAc%2BMbvbqLCJ9GAn%2F%2BuPBO%2BiyYj4RYu6Vhw2mdcDRs%2Bta7OUooqZtdZo%2BENFmOBVXKcw3uXUAUWQNrmXXYXhDx3akBqCx658HmTQUKdMBCLmWCBWJmW09BBZ%2B%2FZe8orPreMKBh84uQqLB5D%2F1vvZjN18RRW%2BYPUqCEi7LxRNXZ5rawBAV9AW2iawp9QVoF3j3OEZ7ne54tjRe7B7euCuc9CxBQ7g8LN2gCZa98Jp3n%2Bh8f39LbtC%2BPeTcgI%2FKrjyRBb7DNJ91Q8WCWS4XuXVlclawlgUrWWMOSM1scGOqUBliDxC1xGwglJbRnJRE1IqiqS%2BcmcXhoNUu3knZLTAvBtql0cbe4jWQrdh%2FEgAlfymwnuU603QZQkSYqtWIXbMa%2FW8sRgjFWGl4TV1Ebh4tfjw3JWxlhRX1rSS82MLfnfhjD2kMGzNtRc4ySwtB31GDFPatSwweHfttBIr6SG2espVNRCkVOJzkb3ubkzYxY4g3I%2FvX4ffHGjLYwLI2M7weZouSVF&X-Amz-Signature=f94856d733ed806b19455b139d8415b7e608c10d9e15d46763ff5343a131667b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEXXZCO%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDIJOAwCn64ZOCcrQehlD895dZlCCmWrtm5iYZeSiIWwAiEA7HHzIx5IiQfg8jXBBflxcdN53Y%2FR8Ho281KWyL33d98qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvhWu2%2BulS8tsnKIircA%2BTrL0p2MHsYmfvZvyPzbdOf4E5uTDfhJZ0z%2FpGgHwvvuHfGJ6lFyOM7n90wYC6xFx39cNx4qVKISigzgGvTnvaHhsNUxNEnnTD8O6D5zGK%2FTKMaJfRTzRHYK0Y7k6TyDT18hFRX6rucfHOgKVr4uCtGF7HuSpwZisN025VLSWSMAGUSPW1oaaY8fNO8MFyP8nFmW9dFIt%2FEIPk2wlXiNB5x6pxP5nGBW5TkTnVZAustsJ70VwOBePI9krPuUdS1C%2FxTPjHMLIIwFiP2V4AhQjg903XS1A%2Bg5mruGpoQOfKWddW%2BxUVMWTs9R%2BO6BS%2BEJNX4nUTS1WKAPGvSwqfdvTOUSE1b9MAc%2BMbvbqLCJ9GAn%2F%2BuPBO%2BiyYj4RYu6Vhw2mdcDRs%2Bta7OUooqZtdZo%2BENFmOBVXKcw3uXUAUWQNrmXXYXhDx3akBqCx658HmTQUKdMBCLmWCBWJmW09BBZ%2B%2FZe8orPreMKBh84uQqLB5D%2F1vvZjN18RRW%2BYPUqCEi7LxRNXZ5rawBAV9AW2iawp9QVoF3j3OEZ7ne54tjRe7B7euCuc9CxBQ7g8LN2gCZa98Jp3n%2Bh8f39LbtC%2BPeTcgI%2FKrjyRBb7DNJ91Q8WCWS4XuXVlclawlgUrWWMOSM1scGOqUBliDxC1xGwglJbRnJRE1IqiqS%2BcmcXhoNUu3knZLTAvBtql0cbe4jWQrdh%2FEgAlfymwnuU603QZQkSYqtWIXbMa%2FW8sRgjFWGl4TV1Ebh4tfjw3JWxlhRX1rSS82MLfnfhjD2kMGzNtRc4ySwtB31GDFPatSwweHfttBIr6SG2espVNRCkVOJzkb3ubkzYxY4g3I%2FvX4ffHGjLYwLI2M7weZouSVF&X-Amz-Signature=9db2701f939fec88c68a2630a0d6e3db01ac331a0e4f569739099243ea29c909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEXXZCO%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDIJOAwCn64ZOCcrQehlD895dZlCCmWrtm5iYZeSiIWwAiEA7HHzIx5IiQfg8jXBBflxcdN53Y%2FR8Ho281KWyL33d98qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvhWu2%2BulS8tsnKIircA%2BTrL0p2MHsYmfvZvyPzbdOf4E5uTDfhJZ0z%2FpGgHwvvuHfGJ6lFyOM7n90wYC6xFx39cNx4qVKISigzgGvTnvaHhsNUxNEnnTD8O6D5zGK%2FTKMaJfRTzRHYK0Y7k6TyDT18hFRX6rucfHOgKVr4uCtGF7HuSpwZisN025VLSWSMAGUSPW1oaaY8fNO8MFyP8nFmW9dFIt%2FEIPk2wlXiNB5x6pxP5nGBW5TkTnVZAustsJ70VwOBePI9krPuUdS1C%2FxTPjHMLIIwFiP2V4AhQjg903XS1A%2Bg5mruGpoQOfKWddW%2BxUVMWTs9R%2BO6BS%2BEJNX4nUTS1WKAPGvSwqfdvTOUSE1b9MAc%2BMbvbqLCJ9GAn%2F%2BuPBO%2BiyYj4RYu6Vhw2mdcDRs%2Bta7OUooqZtdZo%2BENFmOBVXKcw3uXUAUWQNrmXXYXhDx3akBqCx658HmTQUKdMBCLmWCBWJmW09BBZ%2B%2FZe8orPreMKBh84uQqLB5D%2F1vvZjN18RRW%2BYPUqCEi7LxRNXZ5rawBAV9AW2iawp9QVoF3j3OEZ7ne54tjRe7B7euCuc9CxBQ7g8LN2gCZa98Jp3n%2Bh8f39LbtC%2BPeTcgI%2FKrjyRBb7DNJ91Q8WCWS4XuXVlclawlgUrWWMOSM1scGOqUBliDxC1xGwglJbRnJRE1IqiqS%2BcmcXhoNUu3knZLTAvBtql0cbe4jWQrdh%2FEgAlfymwnuU603QZQkSYqtWIXbMa%2FW8sRgjFWGl4TV1Ebh4tfjw3JWxlhRX1rSS82MLfnfhjD2kMGzNtRc4ySwtB31GDFPatSwweHfttBIr6SG2espVNRCkVOJzkb3ubkzYxY4g3I%2FvX4ffHGjLYwLI2M7weZouSVF&X-Amz-Signature=582b4aa888e1e7d8909cd28108454f04e08ddf73574f810fcc9e6ddb69f118a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEXXZCO%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDIJOAwCn64ZOCcrQehlD895dZlCCmWrtm5iYZeSiIWwAiEA7HHzIx5IiQfg8jXBBflxcdN53Y%2FR8Ho281KWyL33d98qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvhWu2%2BulS8tsnKIircA%2BTrL0p2MHsYmfvZvyPzbdOf4E5uTDfhJZ0z%2FpGgHwvvuHfGJ6lFyOM7n90wYC6xFx39cNx4qVKISigzgGvTnvaHhsNUxNEnnTD8O6D5zGK%2FTKMaJfRTzRHYK0Y7k6TyDT18hFRX6rucfHOgKVr4uCtGF7HuSpwZisN025VLSWSMAGUSPW1oaaY8fNO8MFyP8nFmW9dFIt%2FEIPk2wlXiNB5x6pxP5nGBW5TkTnVZAustsJ70VwOBePI9krPuUdS1C%2FxTPjHMLIIwFiP2V4AhQjg903XS1A%2Bg5mruGpoQOfKWddW%2BxUVMWTs9R%2BO6BS%2BEJNX4nUTS1WKAPGvSwqfdvTOUSE1b9MAc%2BMbvbqLCJ9GAn%2F%2BuPBO%2BiyYj4RYu6Vhw2mdcDRs%2Bta7OUooqZtdZo%2BENFmOBVXKcw3uXUAUWQNrmXXYXhDx3akBqCx658HmTQUKdMBCLmWCBWJmW09BBZ%2B%2FZe8orPreMKBh84uQqLB5D%2F1vvZjN18RRW%2BYPUqCEi7LxRNXZ5rawBAV9AW2iawp9QVoF3j3OEZ7ne54tjRe7B7euCuc9CxBQ7g8LN2gCZa98Jp3n%2Bh8f39LbtC%2BPeTcgI%2FKrjyRBb7DNJ91Q8WCWS4XuXVlclawlgUrWWMOSM1scGOqUBliDxC1xGwglJbRnJRE1IqiqS%2BcmcXhoNUu3knZLTAvBtql0cbe4jWQrdh%2FEgAlfymwnuU603QZQkSYqtWIXbMa%2FW8sRgjFWGl4TV1Ebh4tfjw3JWxlhRX1rSS82MLfnfhjD2kMGzNtRc4ySwtB31GDFPatSwweHfttBIr6SG2espVNRCkVOJzkb3ubkzYxY4g3I%2FvX4ffHGjLYwLI2M7weZouSVF&X-Amz-Signature=78c37f09cf55bc355f2096989372f137488f19fbad43e177962de5724c5d0fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEXXZCO%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDIJOAwCn64ZOCcrQehlD895dZlCCmWrtm5iYZeSiIWwAiEA7HHzIx5IiQfg8jXBBflxcdN53Y%2FR8Ho281KWyL33d98qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvhWu2%2BulS8tsnKIircA%2BTrL0p2MHsYmfvZvyPzbdOf4E5uTDfhJZ0z%2FpGgHwvvuHfGJ6lFyOM7n90wYC6xFx39cNx4qVKISigzgGvTnvaHhsNUxNEnnTD8O6D5zGK%2FTKMaJfRTzRHYK0Y7k6TyDT18hFRX6rucfHOgKVr4uCtGF7HuSpwZisN025VLSWSMAGUSPW1oaaY8fNO8MFyP8nFmW9dFIt%2FEIPk2wlXiNB5x6pxP5nGBW5TkTnVZAustsJ70VwOBePI9krPuUdS1C%2FxTPjHMLIIwFiP2V4AhQjg903XS1A%2Bg5mruGpoQOfKWddW%2BxUVMWTs9R%2BO6BS%2BEJNX4nUTS1WKAPGvSwqfdvTOUSE1b9MAc%2BMbvbqLCJ9GAn%2F%2BuPBO%2BiyYj4RYu6Vhw2mdcDRs%2Bta7OUooqZtdZo%2BENFmOBVXKcw3uXUAUWQNrmXXYXhDx3akBqCx658HmTQUKdMBCLmWCBWJmW09BBZ%2B%2FZe8orPreMKBh84uQqLB5D%2F1vvZjN18RRW%2BYPUqCEi7LxRNXZ5rawBAV9AW2iawp9QVoF3j3OEZ7ne54tjRe7B7euCuc9CxBQ7g8LN2gCZa98Jp3n%2Bh8f39LbtC%2BPeTcgI%2FKrjyRBb7DNJ91Q8WCWS4XuXVlclawlgUrWWMOSM1scGOqUBliDxC1xGwglJbRnJRE1IqiqS%2BcmcXhoNUu3knZLTAvBtql0cbe4jWQrdh%2FEgAlfymwnuU603QZQkSYqtWIXbMa%2FW8sRgjFWGl4TV1Ebh4tfjw3JWxlhRX1rSS82MLfnfhjD2kMGzNtRc4ySwtB31GDFPatSwweHfttBIr6SG2espVNRCkVOJzkb3ubkzYxY4g3I%2FvX4ffHGjLYwLI2M7weZouSVF&X-Amz-Signature=1b314ed864d0fbb6f06fd61e117bdb136889115772a67567d2a6d14aae09ffef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEXXZCO%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDIJOAwCn64ZOCcrQehlD895dZlCCmWrtm5iYZeSiIWwAiEA7HHzIx5IiQfg8jXBBflxcdN53Y%2FR8Ho281KWyL33d98qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvhWu2%2BulS8tsnKIircA%2BTrL0p2MHsYmfvZvyPzbdOf4E5uTDfhJZ0z%2FpGgHwvvuHfGJ6lFyOM7n90wYC6xFx39cNx4qVKISigzgGvTnvaHhsNUxNEnnTD8O6D5zGK%2FTKMaJfRTzRHYK0Y7k6TyDT18hFRX6rucfHOgKVr4uCtGF7HuSpwZisN025VLSWSMAGUSPW1oaaY8fNO8MFyP8nFmW9dFIt%2FEIPk2wlXiNB5x6pxP5nGBW5TkTnVZAustsJ70VwOBePI9krPuUdS1C%2FxTPjHMLIIwFiP2V4AhQjg903XS1A%2Bg5mruGpoQOfKWddW%2BxUVMWTs9R%2BO6BS%2BEJNX4nUTS1WKAPGvSwqfdvTOUSE1b9MAc%2BMbvbqLCJ9GAn%2F%2BuPBO%2BiyYj4RYu6Vhw2mdcDRs%2Bta7OUooqZtdZo%2BENFmOBVXKcw3uXUAUWQNrmXXYXhDx3akBqCx658HmTQUKdMBCLmWCBWJmW09BBZ%2B%2FZe8orPreMKBh84uQqLB5D%2F1vvZjN18RRW%2BYPUqCEi7LxRNXZ5rawBAV9AW2iawp9QVoF3j3OEZ7ne54tjRe7B7euCuc9CxBQ7g8LN2gCZa98Jp3n%2Bh8f39LbtC%2BPeTcgI%2FKrjyRBb7DNJ91Q8WCWS4XuXVlclawlgUrWWMOSM1scGOqUBliDxC1xGwglJbRnJRE1IqiqS%2BcmcXhoNUu3knZLTAvBtql0cbe4jWQrdh%2FEgAlfymwnuU603QZQkSYqtWIXbMa%2FW8sRgjFWGl4TV1Ebh4tfjw3JWxlhRX1rSS82MLfnfhjD2kMGzNtRc4ySwtB31GDFPatSwweHfttBIr6SG2espVNRCkVOJzkb3ubkzYxY4g3I%2FvX4ffHGjLYwLI2M7weZouSVF&X-Amz-Signature=19baa93ab7079c225b6765fe1760bb2f15d761e7b381a26ebf6a8ce045599631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEXXZCO%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDIJOAwCn64ZOCcrQehlD895dZlCCmWrtm5iYZeSiIWwAiEA7HHzIx5IiQfg8jXBBflxcdN53Y%2FR8Ho281KWyL33d98qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvhWu2%2BulS8tsnKIircA%2BTrL0p2MHsYmfvZvyPzbdOf4E5uTDfhJZ0z%2FpGgHwvvuHfGJ6lFyOM7n90wYC6xFx39cNx4qVKISigzgGvTnvaHhsNUxNEnnTD8O6D5zGK%2FTKMaJfRTzRHYK0Y7k6TyDT18hFRX6rucfHOgKVr4uCtGF7HuSpwZisN025VLSWSMAGUSPW1oaaY8fNO8MFyP8nFmW9dFIt%2FEIPk2wlXiNB5x6pxP5nGBW5TkTnVZAustsJ70VwOBePI9krPuUdS1C%2FxTPjHMLIIwFiP2V4AhQjg903XS1A%2Bg5mruGpoQOfKWddW%2BxUVMWTs9R%2BO6BS%2BEJNX4nUTS1WKAPGvSwqfdvTOUSE1b9MAc%2BMbvbqLCJ9GAn%2F%2BuPBO%2BiyYj4RYu6Vhw2mdcDRs%2Bta7OUooqZtdZo%2BENFmOBVXKcw3uXUAUWQNrmXXYXhDx3akBqCx658HmTQUKdMBCLmWCBWJmW09BBZ%2B%2FZe8orPreMKBh84uQqLB5D%2F1vvZjN18RRW%2BYPUqCEi7LxRNXZ5rawBAV9AW2iawp9QVoF3j3OEZ7ne54tjRe7B7euCuc9CxBQ7g8LN2gCZa98Jp3n%2Bh8f39LbtC%2BPeTcgI%2FKrjyRBb7DNJ91Q8WCWS4XuXVlclawlgUrWWMOSM1scGOqUBliDxC1xGwglJbRnJRE1IqiqS%2BcmcXhoNUu3knZLTAvBtql0cbe4jWQrdh%2FEgAlfymwnuU603QZQkSYqtWIXbMa%2FW8sRgjFWGl4TV1Ebh4tfjw3JWxlhRX1rSS82MLfnfhjD2kMGzNtRc4ySwtB31GDFPatSwweHfttBIr6SG2espVNRCkVOJzkb3ubkzYxY4g3I%2FvX4ffHGjLYwLI2M7weZouSVF&X-Amz-Signature=be1d79be2426fef63d510917285d6f4e2948b3d31a958712063d1a163d54657f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

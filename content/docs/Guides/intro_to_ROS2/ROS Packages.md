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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7Z725IZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGHcBvq5hKF1iDb%2BfFAqJUtGPIll40agk5MbLV74i56oAiBbfAs%2BRVozi5wHiZx3miUXgUns7UK%2B1SJAOg3d4WRojSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMRi02gjUOOQRQo27qKtwDBtdo01%2FtjhWkcvMtW%2BXFkeWczHYYaI6rY5lAeq%2F%2BeGh92pn0vrmdcDjV1gnEHQq1PCVo6FJilwphqfBx%2FO%2FoK%2BMXFJCpNvUvBCr4hMH0HGUjZ72fzKdzYH33LFYJY03KkRp8NF2nZF4BJU7qAiTX2iPKCe5zhDy0kD8uqcx8ne87ZQEn20OineoTk5Qb86PLgDXKnh1LAoHtjv7Dji%2FLuxk%2BK11HafcAlArIub9gBnNAxqqa7Oc5hd6lMn78CyGOYVCz87%2BO1Ib6xmkHTD63KzMTU8cSgg6y%2FImSidMgk2oFiaO%2Fns99lqW5iKz9aigaO%2Bsnyfdkxg4q9fmxGFpa9XmuQpdMYE%2BTnxbAjAHq%2FTl8B%2BRUt95xYXrYyJqPAaJNysWZAi2X2yBfCvE5Ab43g3OJzQQyihuYBuYBWcgfWzpiePzORgR15TA60syXN2zNPXHVyMRhLmVuwKYRM58uNpf%2ByP0hvBP6tMephEPPxM5C2xjOIsRHWQGAEvoFZW787NBX9aqR0ILFSix%2FnXpgqiPu4BwBBDFn1YW%2FMuiuENHeTAP31zxQYkz2DZNOVIOI6az1Em5SDPRT9FFUjWoJ1f87tmkvMUh5MQA26ysXrYGvDrukfwpWukQMfgcw3bz5vQY6pgEWB0Hr0SM9nFlzqZDI23SqBK3ifdy2Iz10MirDtvss42TfzKjdkoaRHq16L1lL8S6mpWmjZVPXeGpWgcHax0xeMgOlUcM%2Frpvn5LomJSTtFrPkcMltGleSRlE16jnXdPcxmhv5Ye%2F5Thh3OlWnXThwKigagDNYw6rE87ihMboCZsi8OFUEMPyJKcVIgS186pTfPbqOu4d5J9IEW9G9GBeps4Mcgp%2FS&X-Amz-Signature=8957a345dbc7d2aeef961b9ae30aedc880f81bdbbe99a53027d7b70636ce071d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7Z725IZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGHcBvq5hKF1iDb%2BfFAqJUtGPIll40agk5MbLV74i56oAiBbfAs%2BRVozi5wHiZx3miUXgUns7UK%2B1SJAOg3d4WRojSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMRi02gjUOOQRQo27qKtwDBtdo01%2FtjhWkcvMtW%2BXFkeWczHYYaI6rY5lAeq%2F%2BeGh92pn0vrmdcDjV1gnEHQq1PCVo6FJilwphqfBx%2FO%2FoK%2BMXFJCpNvUvBCr4hMH0HGUjZ72fzKdzYH33LFYJY03KkRp8NF2nZF4BJU7qAiTX2iPKCe5zhDy0kD8uqcx8ne87ZQEn20OineoTk5Qb86PLgDXKnh1LAoHtjv7Dji%2FLuxk%2BK11HafcAlArIub9gBnNAxqqa7Oc5hd6lMn78CyGOYVCz87%2BO1Ib6xmkHTD63KzMTU8cSgg6y%2FImSidMgk2oFiaO%2Fns99lqW5iKz9aigaO%2Bsnyfdkxg4q9fmxGFpa9XmuQpdMYE%2BTnxbAjAHq%2FTl8B%2BRUt95xYXrYyJqPAaJNysWZAi2X2yBfCvE5Ab43g3OJzQQyihuYBuYBWcgfWzpiePzORgR15TA60syXN2zNPXHVyMRhLmVuwKYRM58uNpf%2ByP0hvBP6tMephEPPxM5C2xjOIsRHWQGAEvoFZW787NBX9aqR0ILFSix%2FnXpgqiPu4BwBBDFn1YW%2FMuiuENHeTAP31zxQYkz2DZNOVIOI6az1Em5SDPRT9FFUjWoJ1f87tmkvMUh5MQA26ysXrYGvDrukfwpWukQMfgcw3bz5vQY6pgEWB0Hr0SM9nFlzqZDI23SqBK3ifdy2Iz10MirDtvss42TfzKjdkoaRHq16L1lL8S6mpWmjZVPXeGpWgcHax0xeMgOlUcM%2Frpvn5LomJSTtFrPkcMltGleSRlE16jnXdPcxmhv5Ye%2F5Thh3OlWnXThwKigagDNYw6rE87ihMboCZsi8OFUEMPyJKcVIgS186pTfPbqOu4d5J9IEW9G9GBeps4Mcgp%2FS&X-Amz-Signature=c38bd4b2fbadbbaad4ec9c79a47d1c28107d1139fb36e6e6e59e5d197bc79acb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7Z725IZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGHcBvq5hKF1iDb%2BfFAqJUtGPIll40agk5MbLV74i56oAiBbfAs%2BRVozi5wHiZx3miUXgUns7UK%2B1SJAOg3d4WRojSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMRi02gjUOOQRQo27qKtwDBtdo01%2FtjhWkcvMtW%2BXFkeWczHYYaI6rY5lAeq%2F%2BeGh92pn0vrmdcDjV1gnEHQq1PCVo6FJilwphqfBx%2FO%2FoK%2BMXFJCpNvUvBCr4hMH0HGUjZ72fzKdzYH33LFYJY03KkRp8NF2nZF4BJU7qAiTX2iPKCe5zhDy0kD8uqcx8ne87ZQEn20OineoTk5Qb86PLgDXKnh1LAoHtjv7Dji%2FLuxk%2BK11HafcAlArIub9gBnNAxqqa7Oc5hd6lMn78CyGOYVCz87%2BO1Ib6xmkHTD63KzMTU8cSgg6y%2FImSidMgk2oFiaO%2Fns99lqW5iKz9aigaO%2Bsnyfdkxg4q9fmxGFpa9XmuQpdMYE%2BTnxbAjAHq%2FTl8B%2BRUt95xYXrYyJqPAaJNysWZAi2X2yBfCvE5Ab43g3OJzQQyihuYBuYBWcgfWzpiePzORgR15TA60syXN2zNPXHVyMRhLmVuwKYRM58uNpf%2ByP0hvBP6tMephEPPxM5C2xjOIsRHWQGAEvoFZW787NBX9aqR0ILFSix%2FnXpgqiPu4BwBBDFn1YW%2FMuiuENHeTAP31zxQYkz2DZNOVIOI6az1Em5SDPRT9FFUjWoJ1f87tmkvMUh5MQA26ysXrYGvDrukfwpWukQMfgcw3bz5vQY6pgEWB0Hr0SM9nFlzqZDI23SqBK3ifdy2Iz10MirDtvss42TfzKjdkoaRHq16L1lL8S6mpWmjZVPXeGpWgcHax0xeMgOlUcM%2Frpvn5LomJSTtFrPkcMltGleSRlE16jnXdPcxmhv5Ye%2F5Thh3OlWnXThwKigagDNYw6rE87ihMboCZsi8OFUEMPyJKcVIgS186pTfPbqOu4d5J9IEW9G9GBeps4Mcgp%2FS&X-Amz-Signature=a8f103290a5f01e340ad78d27b8e5b03145ef92152cd3da3de5dcba3321d0d54&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7Z725IZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGHcBvq5hKF1iDb%2BfFAqJUtGPIll40agk5MbLV74i56oAiBbfAs%2BRVozi5wHiZx3miUXgUns7UK%2B1SJAOg3d4WRojSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMRi02gjUOOQRQo27qKtwDBtdo01%2FtjhWkcvMtW%2BXFkeWczHYYaI6rY5lAeq%2F%2BeGh92pn0vrmdcDjV1gnEHQq1PCVo6FJilwphqfBx%2FO%2FoK%2BMXFJCpNvUvBCr4hMH0HGUjZ72fzKdzYH33LFYJY03KkRp8NF2nZF4BJU7qAiTX2iPKCe5zhDy0kD8uqcx8ne87ZQEn20OineoTk5Qb86PLgDXKnh1LAoHtjv7Dji%2FLuxk%2BK11HafcAlArIub9gBnNAxqqa7Oc5hd6lMn78CyGOYVCz87%2BO1Ib6xmkHTD63KzMTU8cSgg6y%2FImSidMgk2oFiaO%2Fns99lqW5iKz9aigaO%2Bsnyfdkxg4q9fmxGFpa9XmuQpdMYE%2BTnxbAjAHq%2FTl8B%2BRUt95xYXrYyJqPAaJNysWZAi2X2yBfCvE5Ab43g3OJzQQyihuYBuYBWcgfWzpiePzORgR15TA60syXN2zNPXHVyMRhLmVuwKYRM58uNpf%2ByP0hvBP6tMephEPPxM5C2xjOIsRHWQGAEvoFZW787NBX9aqR0ILFSix%2FnXpgqiPu4BwBBDFn1YW%2FMuiuENHeTAP31zxQYkz2DZNOVIOI6az1Em5SDPRT9FFUjWoJ1f87tmkvMUh5MQA26ysXrYGvDrukfwpWukQMfgcw3bz5vQY6pgEWB0Hr0SM9nFlzqZDI23SqBK3ifdy2Iz10MirDtvss42TfzKjdkoaRHq16L1lL8S6mpWmjZVPXeGpWgcHax0xeMgOlUcM%2Frpvn5LomJSTtFrPkcMltGleSRlE16jnXdPcxmhv5Ye%2F5Thh3OlWnXThwKigagDNYw6rE87ihMboCZsi8OFUEMPyJKcVIgS186pTfPbqOu4d5J9IEW9G9GBeps4Mcgp%2FS&X-Amz-Signature=4c8b06914ea6091d83b2824bce2697bca09ed8bb6e273866eeff89b7d88e061e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7Z725IZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGHcBvq5hKF1iDb%2BfFAqJUtGPIll40agk5MbLV74i56oAiBbfAs%2BRVozi5wHiZx3miUXgUns7UK%2B1SJAOg3d4WRojSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMRi02gjUOOQRQo27qKtwDBtdo01%2FtjhWkcvMtW%2BXFkeWczHYYaI6rY5lAeq%2F%2BeGh92pn0vrmdcDjV1gnEHQq1PCVo6FJilwphqfBx%2FO%2FoK%2BMXFJCpNvUvBCr4hMH0HGUjZ72fzKdzYH33LFYJY03KkRp8NF2nZF4BJU7qAiTX2iPKCe5zhDy0kD8uqcx8ne87ZQEn20OineoTk5Qb86PLgDXKnh1LAoHtjv7Dji%2FLuxk%2BK11HafcAlArIub9gBnNAxqqa7Oc5hd6lMn78CyGOYVCz87%2BO1Ib6xmkHTD63KzMTU8cSgg6y%2FImSidMgk2oFiaO%2Fns99lqW5iKz9aigaO%2Bsnyfdkxg4q9fmxGFpa9XmuQpdMYE%2BTnxbAjAHq%2FTl8B%2BRUt95xYXrYyJqPAaJNysWZAi2X2yBfCvE5Ab43g3OJzQQyihuYBuYBWcgfWzpiePzORgR15TA60syXN2zNPXHVyMRhLmVuwKYRM58uNpf%2ByP0hvBP6tMephEPPxM5C2xjOIsRHWQGAEvoFZW787NBX9aqR0ILFSix%2FnXpgqiPu4BwBBDFn1YW%2FMuiuENHeTAP31zxQYkz2DZNOVIOI6az1Em5SDPRT9FFUjWoJ1f87tmkvMUh5MQA26ysXrYGvDrukfwpWukQMfgcw3bz5vQY6pgEWB0Hr0SM9nFlzqZDI23SqBK3ifdy2Iz10MirDtvss42TfzKjdkoaRHq16L1lL8S6mpWmjZVPXeGpWgcHax0xeMgOlUcM%2Frpvn5LomJSTtFrPkcMltGleSRlE16jnXdPcxmhv5Ye%2F5Thh3OlWnXThwKigagDNYw6rE87ihMboCZsi8OFUEMPyJKcVIgS186pTfPbqOu4d5J9IEW9G9GBeps4Mcgp%2FS&X-Amz-Signature=4a193082fd65ff0d614cff55802a3d4b15cf11a65768b4f7f2f1672283b9fa79&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7Z725IZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGHcBvq5hKF1iDb%2BfFAqJUtGPIll40agk5MbLV74i56oAiBbfAs%2BRVozi5wHiZx3miUXgUns7UK%2B1SJAOg3d4WRojSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMRi02gjUOOQRQo27qKtwDBtdo01%2FtjhWkcvMtW%2BXFkeWczHYYaI6rY5lAeq%2F%2BeGh92pn0vrmdcDjV1gnEHQq1PCVo6FJilwphqfBx%2FO%2FoK%2BMXFJCpNvUvBCr4hMH0HGUjZ72fzKdzYH33LFYJY03KkRp8NF2nZF4BJU7qAiTX2iPKCe5zhDy0kD8uqcx8ne87ZQEn20OineoTk5Qb86PLgDXKnh1LAoHtjv7Dji%2FLuxk%2BK11HafcAlArIub9gBnNAxqqa7Oc5hd6lMn78CyGOYVCz87%2BO1Ib6xmkHTD63KzMTU8cSgg6y%2FImSidMgk2oFiaO%2Fns99lqW5iKz9aigaO%2Bsnyfdkxg4q9fmxGFpa9XmuQpdMYE%2BTnxbAjAHq%2FTl8B%2BRUt95xYXrYyJqPAaJNysWZAi2X2yBfCvE5Ab43g3OJzQQyihuYBuYBWcgfWzpiePzORgR15TA60syXN2zNPXHVyMRhLmVuwKYRM58uNpf%2ByP0hvBP6tMephEPPxM5C2xjOIsRHWQGAEvoFZW787NBX9aqR0ILFSix%2FnXpgqiPu4BwBBDFn1YW%2FMuiuENHeTAP31zxQYkz2DZNOVIOI6az1Em5SDPRT9FFUjWoJ1f87tmkvMUh5MQA26ysXrYGvDrukfwpWukQMfgcw3bz5vQY6pgEWB0Hr0SM9nFlzqZDI23SqBK3ifdy2Iz10MirDtvss42TfzKjdkoaRHq16L1lL8S6mpWmjZVPXeGpWgcHax0xeMgOlUcM%2Frpvn5LomJSTtFrPkcMltGleSRlE16jnXdPcxmhv5Ye%2F5Thh3OlWnXThwKigagDNYw6rE87ihMboCZsi8OFUEMPyJKcVIgS186pTfPbqOu4d5J9IEW9G9GBeps4Mcgp%2FS&X-Amz-Signature=e95f6890d0e989631a884f2311640c3bca2f311d15e40e2c85e24fedc3b07555&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7Z725IZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGHcBvq5hKF1iDb%2BfFAqJUtGPIll40agk5MbLV74i56oAiBbfAs%2BRVozi5wHiZx3miUXgUns7UK%2B1SJAOg3d4WRojSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMRi02gjUOOQRQo27qKtwDBtdo01%2FtjhWkcvMtW%2BXFkeWczHYYaI6rY5lAeq%2F%2BeGh92pn0vrmdcDjV1gnEHQq1PCVo6FJilwphqfBx%2FO%2FoK%2BMXFJCpNvUvBCr4hMH0HGUjZ72fzKdzYH33LFYJY03KkRp8NF2nZF4BJU7qAiTX2iPKCe5zhDy0kD8uqcx8ne87ZQEn20OineoTk5Qb86PLgDXKnh1LAoHtjv7Dji%2FLuxk%2BK11HafcAlArIub9gBnNAxqqa7Oc5hd6lMn78CyGOYVCz87%2BO1Ib6xmkHTD63KzMTU8cSgg6y%2FImSidMgk2oFiaO%2Fns99lqW5iKz9aigaO%2Bsnyfdkxg4q9fmxGFpa9XmuQpdMYE%2BTnxbAjAHq%2FTl8B%2BRUt95xYXrYyJqPAaJNysWZAi2X2yBfCvE5Ab43g3OJzQQyihuYBuYBWcgfWzpiePzORgR15TA60syXN2zNPXHVyMRhLmVuwKYRM58uNpf%2ByP0hvBP6tMephEPPxM5C2xjOIsRHWQGAEvoFZW787NBX9aqR0ILFSix%2FnXpgqiPu4BwBBDFn1YW%2FMuiuENHeTAP31zxQYkz2DZNOVIOI6az1Em5SDPRT9FFUjWoJ1f87tmkvMUh5MQA26ysXrYGvDrukfwpWukQMfgcw3bz5vQY6pgEWB0Hr0SM9nFlzqZDI23SqBK3ifdy2Iz10MirDtvss42TfzKjdkoaRHq16L1lL8S6mpWmjZVPXeGpWgcHax0xeMgOlUcM%2Frpvn5LomJSTtFrPkcMltGleSRlE16jnXdPcxmhv5Ye%2F5Thh3OlWnXThwKigagDNYw6rE87ihMboCZsi8OFUEMPyJKcVIgS186pTfPbqOu4d5J9IEW9G9GBeps4Mcgp%2FS&X-Amz-Signature=090ba72feb403341ef9e2d20bbb75c6235f49a08527246aaf241c22c5ae20ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

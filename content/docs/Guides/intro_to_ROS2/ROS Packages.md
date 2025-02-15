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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTM77GU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDezS6ClS%2Fp8AV8RCUL96Vq8pPB%2B1YMIfKbqpjBfxSLRQIgF2kZJNFjrCgonkCBook2wF3fzgxHXunG0eWXOX9T780q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAEVEMenbD5PFoNx8ircAykmkPTtbpN0JsvVMY8ifa4KffnKda24xnUDdpwM52iUkwtzVOVrRVowMAbyrCxjiEMyhGCFNKxURfoDh7Be%2FscMpOHgUIOBwHcxf2YyJyQJ4Qh1EGFGLr5Opvu5ycc5%2F7gG49rEzilkEfDaj%2B%2BE2c43OrraAcS7p1sUwZP3g9AYkXE%2ByTt8MXjkc2T3XIpyAggGcPKCARQkor14gzaDwRn2KtA6GXIUq4V1EmFE85L17a5tOKdH%2F6n2Yu26PdWRs3uWSzaZzBBY8%2F4k3IFhFIGCxDNMt%2FYVFXz3mMxc1g0vxwrXOcEWM2DL1rxsh0W%2FZSbOl39v%2BRCi8KxKDBSM%2BZkmz31v2ryv3HUGoDVe4DoUgi%2FHnUbZd461YZ8UrYN%2BGaCcFrUE7eQpP5VH0oR7pWVF%2FOeioeVMMwxwOpWKnunaFEtvGOF0QQ1dWXWxhYENfOXq3AGfwT631QuF0lfFLtfQriptLoJX%2F1mNref6KcRNmQ0nRaY%2FXWiHaZWCuS08tqy5X3fHvVq6420GGT1ZNCeCkEpW5tQ5LrT%2FQm3zDzkyzp3V%2BqYy%2F%2Bxx7IwjWnqX1aYwmiCuRDFs1AG1zQsBBo%2F0nqfd5UigfvzHF%2FmdW%2FOaLWwDZjedu1iYieOrMLiwwL0GOqUBz2c3WMBjfcRs0zzyyI3pTSvEDq9wSskEkuQdJewpY%2BkuBCfUCUekxG2nSN2qIc63mPL6g4tJxEpVMNqHO%2BOIn%2FVntaalstxGa1ZzZ%2F%2BUs416Y1VAuDwgdFVRPkh1vypFeLMRkUZ5NdylS2jPbjPRn21fdiF%2BvZ6rFCrYKX%2FKHO%2Frx%2BKrRmbVaQIwM5SvN1OEkRuIXxbJ05EcdBtWwiXhdMJReJoC&X-Amz-Signature=ab787f3dd05c6efa58fa8341f8d894e69dcd5bd624d5f9af8e2534f74fa4f2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTM77GU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDezS6ClS%2Fp8AV8RCUL96Vq8pPB%2B1YMIfKbqpjBfxSLRQIgF2kZJNFjrCgonkCBook2wF3fzgxHXunG0eWXOX9T780q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAEVEMenbD5PFoNx8ircAykmkPTtbpN0JsvVMY8ifa4KffnKda24xnUDdpwM52iUkwtzVOVrRVowMAbyrCxjiEMyhGCFNKxURfoDh7Be%2FscMpOHgUIOBwHcxf2YyJyQJ4Qh1EGFGLr5Opvu5ycc5%2F7gG49rEzilkEfDaj%2B%2BE2c43OrraAcS7p1sUwZP3g9AYkXE%2ByTt8MXjkc2T3XIpyAggGcPKCARQkor14gzaDwRn2KtA6GXIUq4V1EmFE85L17a5tOKdH%2F6n2Yu26PdWRs3uWSzaZzBBY8%2F4k3IFhFIGCxDNMt%2FYVFXz3mMxc1g0vxwrXOcEWM2DL1rxsh0W%2FZSbOl39v%2BRCi8KxKDBSM%2BZkmz31v2ryv3HUGoDVe4DoUgi%2FHnUbZd461YZ8UrYN%2BGaCcFrUE7eQpP5VH0oR7pWVF%2FOeioeVMMwxwOpWKnunaFEtvGOF0QQ1dWXWxhYENfOXq3AGfwT631QuF0lfFLtfQriptLoJX%2F1mNref6KcRNmQ0nRaY%2FXWiHaZWCuS08tqy5X3fHvVq6420GGT1ZNCeCkEpW5tQ5LrT%2FQm3zDzkyzp3V%2BqYy%2F%2Bxx7IwjWnqX1aYwmiCuRDFs1AG1zQsBBo%2F0nqfd5UigfvzHF%2FmdW%2FOaLWwDZjedu1iYieOrMLiwwL0GOqUBz2c3WMBjfcRs0zzyyI3pTSvEDq9wSskEkuQdJewpY%2BkuBCfUCUekxG2nSN2qIc63mPL6g4tJxEpVMNqHO%2BOIn%2FVntaalstxGa1ZzZ%2F%2BUs416Y1VAuDwgdFVRPkh1vypFeLMRkUZ5NdylS2jPbjPRn21fdiF%2BvZ6rFCrYKX%2FKHO%2Frx%2BKrRmbVaQIwM5SvN1OEkRuIXxbJ05EcdBtWwiXhdMJReJoC&X-Amz-Signature=a7eeb9a39b45a668f938a185b1e574673ecddc7b57ffa235aaae1446bf076f02&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTM77GU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDezS6ClS%2Fp8AV8RCUL96Vq8pPB%2B1YMIfKbqpjBfxSLRQIgF2kZJNFjrCgonkCBook2wF3fzgxHXunG0eWXOX9T780q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAEVEMenbD5PFoNx8ircAykmkPTtbpN0JsvVMY8ifa4KffnKda24xnUDdpwM52iUkwtzVOVrRVowMAbyrCxjiEMyhGCFNKxURfoDh7Be%2FscMpOHgUIOBwHcxf2YyJyQJ4Qh1EGFGLr5Opvu5ycc5%2F7gG49rEzilkEfDaj%2B%2BE2c43OrraAcS7p1sUwZP3g9AYkXE%2ByTt8MXjkc2T3XIpyAggGcPKCARQkor14gzaDwRn2KtA6GXIUq4V1EmFE85L17a5tOKdH%2F6n2Yu26PdWRs3uWSzaZzBBY8%2F4k3IFhFIGCxDNMt%2FYVFXz3mMxc1g0vxwrXOcEWM2DL1rxsh0W%2FZSbOl39v%2BRCi8KxKDBSM%2BZkmz31v2ryv3HUGoDVe4DoUgi%2FHnUbZd461YZ8UrYN%2BGaCcFrUE7eQpP5VH0oR7pWVF%2FOeioeVMMwxwOpWKnunaFEtvGOF0QQ1dWXWxhYENfOXq3AGfwT631QuF0lfFLtfQriptLoJX%2F1mNref6KcRNmQ0nRaY%2FXWiHaZWCuS08tqy5X3fHvVq6420GGT1ZNCeCkEpW5tQ5LrT%2FQm3zDzkyzp3V%2BqYy%2F%2Bxx7IwjWnqX1aYwmiCuRDFs1AG1zQsBBo%2F0nqfd5UigfvzHF%2FmdW%2FOaLWwDZjedu1iYieOrMLiwwL0GOqUBz2c3WMBjfcRs0zzyyI3pTSvEDq9wSskEkuQdJewpY%2BkuBCfUCUekxG2nSN2qIc63mPL6g4tJxEpVMNqHO%2BOIn%2FVntaalstxGa1ZzZ%2F%2BUs416Y1VAuDwgdFVRPkh1vypFeLMRkUZ5NdylS2jPbjPRn21fdiF%2BvZ6rFCrYKX%2FKHO%2Frx%2BKrRmbVaQIwM5SvN1OEkRuIXxbJ05EcdBtWwiXhdMJReJoC&X-Amz-Signature=d152168e3044d99acd10dad495c39a8ebe31382a32dd0da55437351a380728b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTM77GU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDezS6ClS%2Fp8AV8RCUL96Vq8pPB%2B1YMIfKbqpjBfxSLRQIgF2kZJNFjrCgonkCBook2wF3fzgxHXunG0eWXOX9T780q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAEVEMenbD5PFoNx8ircAykmkPTtbpN0JsvVMY8ifa4KffnKda24xnUDdpwM52iUkwtzVOVrRVowMAbyrCxjiEMyhGCFNKxURfoDh7Be%2FscMpOHgUIOBwHcxf2YyJyQJ4Qh1EGFGLr5Opvu5ycc5%2F7gG49rEzilkEfDaj%2B%2BE2c43OrraAcS7p1sUwZP3g9AYkXE%2ByTt8MXjkc2T3XIpyAggGcPKCARQkor14gzaDwRn2KtA6GXIUq4V1EmFE85L17a5tOKdH%2F6n2Yu26PdWRs3uWSzaZzBBY8%2F4k3IFhFIGCxDNMt%2FYVFXz3mMxc1g0vxwrXOcEWM2DL1rxsh0W%2FZSbOl39v%2BRCi8KxKDBSM%2BZkmz31v2ryv3HUGoDVe4DoUgi%2FHnUbZd461YZ8UrYN%2BGaCcFrUE7eQpP5VH0oR7pWVF%2FOeioeVMMwxwOpWKnunaFEtvGOF0QQ1dWXWxhYENfOXq3AGfwT631QuF0lfFLtfQriptLoJX%2F1mNref6KcRNmQ0nRaY%2FXWiHaZWCuS08tqy5X3fHvVq6420GGT1ZNCeCkEpW5tQ5LrT%2FQm3zDzkyzp3V%2BqYy%2F%2Bxx7IwjWnqX1aYwmiCuRDFs1AG1zQsBBo%2F0nqfd5UigfvzHF%2FmdW%2FOaLWwDZjedu1iYieOrMLiwwL0GOqUBz2c3WMBjfcRs0zzyyI3pTSvEDq9wSskEkuQdJewpY%2BkuBCfUCUekxG2nSN2qIc63mPL6g4tJxEpVMNqHO%2BOIn%2FVntaalstxGa1ZzZ%2F%2BUs416Y1VAuDwgdFVRPkh1vypFeLMRkUZ5NdylS2jPbjPRn21fdiF%2BvZ6rFCrYKX%2FKHO%2Frx%2BKrRmbVaQIwM5SvN1OEkRuIXxbJ05EcdBtWwiXhdMJReJoC&X-Amz-Signature=9bc5a4007cc6b777d72b9dfdfc4751367b18c5910ce82e162b73b5f979489a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTM77GU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDezS6ClS%2Fp8AV8RCUL96Vq8pPB%2B1YMIfKbqpjBfxSLRQIgF2kZJNFjrCgonkCBook2wF3fzgxHXunG0eWXOX9T780q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAEVEMenbD5PFoNx8ircAykmkPTtbpN0JsvVMY8ifa4KffnKda24xnUDdpwM52iUkwtzVOVrRVowMAbyrCxjiEMyhGCFNKxURfoDh7Be%2FscMpOHgUIOBwHcxf2YyJyQJ4Qh1EGFGLr5Opvu5ycc5%2F7gG49rEzilkEfDaj%2B%2BE2c43OrraAcS7p1sUwZP3g9AYkXE%2ByTt8MXjkc2T3XIpyAggGcPKCARQkor14gzaDwRn2KtA6GXIUq4V1EmFE85L17a5tOKdH%2F6n2Yu26PdWRs3uWSzaZzBBY8%2F4k3IFhFIGCxDNMt%2FYVFXz3mMxc1g0vxwrXOcEWM2DL1rxsh0W%2FZSbOl39v%2BRCi8KxKDBSM%2BZkmz31v2ryv3HUGoDVe4DoUgi%2FHnUbZd461YZ8UrYN%2BGaCcFrUE7eQpP5VH0oR7pWVF%2FOeioeVMMwxwOpWKnunaFEtvGOF0QQ1dWXWxhYENfOXq3AGfwT631QuF0lfFLtfQriptLoJX%2F1mNref6KcRNmQ0nRaY%2FXWiHaZWCuS08tqy5X3fHvVq6420GGT1ZNCeCkEpW5tQ5LrT%2FQm3zDzkyzp3V%2BqYy%2F%2Bxx7IwjWnqX1aYwmiCuRDFs1AG1zQsBBo%2F0nqfd5UigfvzHF%2FmdW%2FOaLWwDZjedu1iYieOrMLiwwL0GOqUBz2c3WMBjfcRs0zzyyI3pTSvEDq9wSskEkuQdJewpY%2BkuBCfUCUekxG2nSN2qIc63mPL6g4tJxEpVMNqHO%2BOIn%2FVntaalstxGa1ZzZ%2F%2BUs416Y1VAuDwgdFVRPkh1vypFeLMRkUZ5NdylS2jPbjPRn21fdiF%2BvZ6rFCrYKX%2FKHO%2Frx%2BKrRmbVaQIwM5SvN1OEkRuIXxbJ05EcdBtWwiXhdMJReJoC&X-Amz-Signature=2c870be47a7d3b7a5200fea3a445555ce31909a67974f2c426ad35339fb4d769&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTM77GU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDezS6ClS%2Fp8AV8RCUL96Vq8pPB%2B1YMIfKbqpjBfxSLRQIgF2kZJNFjrCgonkCBook2wF3fzgxHXunG0eWXOX9T780q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAEVEMenbD5PFoNx8ircAykmkPTtbpN0JsvVMY8ifa4KffnKda24xnUDdpwM52iUkwtzVOVrRVowMAbyrCxjiEMyhGCFNKxURfoDh7Be%2FscMpOHgUIOBwHcxf2YyJyQJ4Qh1EGFGLr5Opvu5ycc5%2F7gG49rEzilkEfDaj%2B%2BE2c43OrraAcS7p1sUwZP3g9AYkXE%2ByTt8MXjkc2T3XIpyAggGcPKCARQkor14gzaDwRn2KtA6GXIUq4V1EmFE85L17a5tOKdH%2F6n2Yu26PdWRs3uWSzaZzBBY8%2F4k3IFhFIGCxDNMt%2FYVFXz3mMxc1g0vxwrXOcEWM2DL1rxsh0W%2FZSbOl39v%2BRCi8KxKDBSM%2BZkmz31v2ryv3HUGoDVe4DoUgi%2FHnUbZd461YZ8UrYN%2BGaCcFrUE7eQpP5VH0oR7pWVF%2FOeioeVMMwxwOpWKnunaFEtvGOF0QQ1dWXWxhYENfOXq3AGfwT631QuF0lfFLtfQriptLoJX%2F1mNref6KcRNmQ0nRaY%2FXWiHaZWCuS08tqy5X3fHvVq6420GGT1ZNCeCkEpW5tQ5LrT%2FQm3zDzkyzp3V%2BqYy%2F%2Bxx7IwjWnqX1aYwmiCuRDFs1AG1zQsBBo%2F0nqfd5UigfvzHF%2FmdW%2FOaLWwDZjedu1iYieOrMLiwwL0GOqUBz2c3WMBjfcRs0zzyyI3pTSvEDq9wSskEkuQdJewpY%2BkuBCfUCUekxG2nSN2qIc63mPL6g4tJxEpVMNqHO%2BOIn%2FVntaalstxGa1ZzZ%2F%2BUs416Y1VAuDwgdFVRPkh1vypFeLMRkUZ5NdylS2jPbjPRn21fdiF%2BvZ6rFCrYKX%2FKHO%2Frx%2BKrRmbVaQIwM5SvN1OEkRuIXxbJ05EcdBtWwiXhdMJReJoC&X-Amz-Signature=d337afd78ebaaa92cc7599afbeebc9de2a4054947ae829d1df925616324f6c68&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTM77GU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDezS6ClS%2Fp8AV8RCUL96Vq8pPB%2B1YMIfKbqpjBfxSLRQIgF2kZJNFjrCgonkCBook2wF3fzgxHXunG0eWXOX9T780q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAEVEMenbD5PFoNx8ircAykmkPTtbpN0JsvVMY8ifa4KffnKda24xnUDdpwM52iUkwtzVOVrRVowMAbyrCxjiEMyhGCFNKxURfoDh7Be%2FscMpOHgUIOBwHcxf2YyJyQJ4Qh1EGFGLr5Opvu5ycc5%2F7gG49rEzilkEfDaj%2B%2BE2c43OrraAcS7p1sUwZP3g9AYkXE%2ByTt8MXjkc2T3XIpyAggGcPKCARQkor14gzaDwRn2KtA6GXIUq4V1EmFE85L17a5tOKdH%2F6n2Yu26PdWRs3uWSzaZzBBY8%2F4k3IFhFIGCxDNMt%2FYVFXz3mMxc1g0vxwrXOcEWM2DL1rxsh0W%2FZSbOl39v%2BRCi8KxKDBSM%2BZkmz31v2ryv3HUGoDVe4DoUgi%2FHnUbZd461YZ8UrYN%2BGaCcFrUE7eQpP5VH0oR7pWVF%2FOeioeVMMwxwOpWKnunaFEtvGOF0QQ1dWXWxhYENfOXq3AGfwT631QuF0lfFLtfQriptLoJX%2F1mNref6KcRNmQ0nRaY%2FXWiHaZWCuS08tqy5X3fHvVq6420GGT1ZNCeCkEpW5tQ5LrT%2FQm3zDzkyzp3V%2BqYy%2F%2Bxx7IwjWnqX1aYwmiCuRDFs1AG1zQsBBo%2F0nqfd5UigfvzHF%2FmdW%2FOaLWwDZjedu1iYieOrMLiwwL0GOqUBz2c3WMBjfcRs0zzyyI3pTSvEDq9wSskEkuQdJewpY%2BkuBCfUCUekxG2nSN2qIc63mPL6g4tJxEpVMNqHO%2BOIn%2FVntaalstxGa1ZzZ%2F%2BUs416Y1VAuDwgdFVRPkh1vypFeLMRkUZ5NdylS2jPbjPRn21fdiF%2BvZ6rFCrYKX%2FKHO%2Frx%2BKrRmbVaQIwM5SvN1OEkRuIXxbJ05EcdBtWwiXhdMJReJoC&X-Amz-Signature=623c31f40111a76a35b6ecb5105210fb64bc81515131200c64ca581b17ff0a54&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

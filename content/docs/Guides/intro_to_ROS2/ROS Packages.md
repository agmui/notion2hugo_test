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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VHS7DA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDrDAxQvBxHRbMZA71CXV9jepiDzPze6mOHWejIUYja4AiAKtt719GZEevHdrZ6puVU8BNvTSOo8Bt5s8SBQXYt%2F2yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcjUVgHrlYblxq6ZKtwDf28iwhMZW1f2CMlyHhSj5og4PQD0LprPCIjwr9gAj%2BbVv73bD%2B46PA2TPz7JTXamNXsltLRa8FD0gPN509twzTWxel1YlNHrRyObRkV%2FQrrB0lF%2BOX8AKpQg9gKFaffvZ%2FCH4oEG%2BHjyxwPiA2voVifmvY9lUxex7pPgn7a1HEDyudoDARGm3oeFTSTdPfW2ZZWRg3L042XkXkcjkls7fghu2LUH%2Bu6SKvXAIkqNRbJIOG%2FMBZ80fl1Jg16uo1IejDAK16V2KhSLcTIbHtg7nuhitsUb%2Bn9sva5oTdlXMtNi1VljVIPhvHqZJfsUV1p7d5f4qztEaux0LivlRTMhgZx7HLY2XSxIaylAR3GBgzTSzq2qD3XTXoVMxEBC9WFnc5UHPeV%2BSB8Yd6mlGkg%2Bs0msrgpS5Nvuy16tUWsXcqDwJiNA%2FEHpcaOmhgrxd%2FvgYMiOZlCQLzwzDUb18p6Yhl5fPwcB%2FBB4FLUe1X0DUGPYvcTzOa8Vv69ntOqgRc2NEVUg9wyEHudKze0Hl1L%2FGGPqfxG55fSJYriuIjBpcCa9mqNpPPnyXnpVBAHqWK5Juijh1LM5fUvl2sIelx%2FRbn7W%2BaosU%2FOFIRVnIJq3%2FbngjMbigQriM4FNHNIwnfjRvQY6pgH50s7gDpe3xacYMPwywsFCKy2WQCEEFwkiFuqwEC1zAV%2BbMXDNEQYEw6h%2F0j%2B9JBzJd%2B49ldDEjexeHBf1gLUxSVfuOR80cywrllLyvW0121FIHhCIz%2Bj0gXcqGyGwjBuyvV8%2FfXGiwH8BGtk2SksqPDFOLa%2BCqyMsPbqloqJyKa%2Fra7CO7%2BBKFnjNyw5OhYOccBrOse2JqJgnwuAaHDXIiHQ5R194&X-Amz-Signature=192c2ae53bacac095060f43bf9a1b7ae8e1b433c4d2b913fd4a1407e712db26f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VHS7DA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDrDAxQvBxHRbMZA71CXV9jepiDzPze6mOHWejIUYja4AiAKtt719GZEevHdrZ6puVU8BNvTSOo8Bt5s8SBQXYt%2F2yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcjUVgHrlYblxq6ZKtwDf28iwhMZW1f2CMlyHhSj5og4PQD0LprPCIjwr9gAj%2BbVv73bD%2B46PA2TPz7JTXamNXsltLRa8FD0gPN509twzTWxel1YlNHrRyObRkV%2FQrrB0lF%2BOX8AKpQg9gKFaffvZ%2FCH4oEG%2BHjyxwPiA2voVifmvY9lUxex7pPgn7a1HEDyudoDARGm3oeFTSTdPfW2ZZWRg3L042XkXkcjkls7fghu2LUH%2Bu6SKvXAIkqNRbJIOG%2FMBZ80fl1Jg16uo1IejDAK16V2KhSLcTIbHtg7nuhitsUb%2Bn9sva5oTdlXMtNi1VljVIPhvHqZJfsUV1p7d5f4qztEaux0LivlRTMhgZx7HLY2XSxIaylAR3GBgzTSzq2qD3XTXoVMxEBC9WFnc5UHPeV%2BSB8Yd6mlGkg%2Bs0msrgpS5Nvuy16tUWsXcqDwJiNA%2FEHpcaOmhgrxd%2FvgYMiOZlCQLzwzDUb18p6Yhl5fPwcB%2FBB4FLUe1X0DUGPYvcTzOa8Vv69ntOqgRc2NEVUg9wyEHudKze0Hl1L%2FGGPqfxG55fSJYriuIjBpcCa9mqNpPPnyXnpVBAHqWK5Juijh1LM5fUvl2sIelx%2FRbn7W%2BaosU%2FOFIRVnIJq3%2FbngjMbigQriM4FNHNIwnfjRvQY6pgH50s7gDpe3xacYMPwywsFCKy2WQCEEFwkiFuqwEC1zAV%2BbMXDNEQYEw6h%2F0j%2B9JBzJd%2B49ldDEjexeHBf1gLUxSVfuOR80cywrllLyvW0121FIHhCIz%2Bj0gXcqGyGwjBuyvV8%2FfXGiwH8BGtk2SksqPDFOLa%2BCqyMsPbqloqJyKa%2Fra7CO7%2BBKFnjNyw5OhYOccBrOse2JqJgnwuAaHDXIiHQ5R194&X-Amz-Signature=69b498e8812648fd889bbd96524d0a6d76bafd2ca39e5d855591eca4c954e15b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VHS7DA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDrDAxQvBxHRbMZA71CXV9jepiDzPze6mOHWejIUYja4AiAKtt719GZEevHdrZ6puVU8BNvTSOo8Bt5s8SBQXYt%2F2yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcjUVgHrlYblxq6ZKtwDf28iwhMZW1f2CMlyHhSj5og4PQD0LprPCIjwr9gAj%2BbVv73bD%2B46PA2TPz7JTXamNXsltLRa8FD0gPN509twzTWxel1YlNHrRyObRkV%2FQrrB0lF%2BOX8AKpQg9gKFaffvZ%2FCH4oEG%2BHjyxwPiA2voVifmvY9lUxex7pPgn7a1HEDyudoDARGm3oeFTSTdPfW2ZZWRg3L042XkXkcjkls7fghu2LUH%2Bu6SKvXAIkqNRbJIOG%2FMBZ80fl1Jg16uo1IejDAK16V2KhSLcTIbHtg7nuhitsUb%2Bn9sva5oTdlXMtNi1VljVIPhvHqZJfsUV1p7d5f4qztEaux0LivlRTMhgZx7HLY2XSxIaylAR3GBgzTSzq2qD3XTXoVMxEBC9WFnc5UHPeV%2BSB8Yd6mlGkg%2Bs0msrgpS5Nvuy16tUWsXcqDwJiNA%2FEHpcaOmhgrxd%2FvgYMiOZlCQLzwzDUb18p6Yhl5fPwcB%2FBB4FLUe1X0DUGPYvcTzOa8Vv69ntOqgRc2NEVUg9wyEHudKze0Hl1L%2FGGPqfxG55fSJYriuIjBpcCa9mqNpPPnyXnpVBAHqWK5Juijh1LM5fUvl2sIelx%2FRbn7W%2BaosU%2FOFIRVnIJq3%2FbngjMbigQriM4FNHNIwnfjRvQY6pgH50s7gDpe3xacYMPwywsFCKy2WQCEEFwkiFuqwEC1zAV%2BbMXDNEQYEw6h%2F0j%2B9JBzJd%2B49ldDEjexeHBf1gLUxSVfuOR80cywrllLyvW0121FIHhCIz%2Bj0gXcqGyGwjBuyvV8%2FfXGiwH8BGtk2SksqPDFOLa%2BCqyMsPbqloqJyKa%2Fra7CO7%2BBKFnjNyw5OhYOccBrOse2JqJgnwuAaHDXIiHQ5R194&X-Amz-Signature=748a6b6363b6512aaec2554cb3ef579b4a35405cd4fe1fb9803485a765baf503&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VHS7DA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDrDAxQvBxHRbMZA71CXV9jepiDzPze6mOHWejIUYja4AiAKtt719GZEevHdrZ6puVU8BNvTSOo8Bt5s8SBQXYt%2F2yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcjUVgHrlYblxq6ZKtwDf28iwhMZW1f2CMlyHhSj5og4PQD0LprPCIjwr9gAj%2BbVv73bD%2B46PA2TPz7JTXamNXsltLRa8FD0gPN509twzTWxel1YlNHrRyObRkV%2FQrrB0lF%2BOX8AKpQg9gKFaffvZ%2FCH4oEG%2BHjyxwPiA2voVifmvY9lUxex7pPgn7a1HEDyudoDARGm3oeFTSTdPfW2ZZWRg3L042XkXkcjkls7fghu2LUH%2Bu6SKvXAIkqNRbJIOG%2FMBZ80fl1Jg16uo1IejDAK16V2KhSLcTIbHtg7nuhitsUb%2Bn9sva5oTdlXMtNi1VljVIPhvHqZJfsUV1p7d5f4qztEaux0LivlRTMhgZx7HLY2XSxIaylAR3GBgzTSzq2qD3XTXoVMxEBC9WFnc5UHPeV%2BSB8Yd6mlGkg%2Bs0msrgpS5Nvuy16tUWsXcqDwJiNA%2FEHpcaOmhgrxd%2FvgYMiOZlCQLzwzDUb18p6Yhl5fPwcB%2FBB4FLUe1X0DUGPYvcTzOa8Vv69ntOqgRc2NEVUg9wyEHudKze0Hl1L%2FGGPqfxG55fSJYriuIjBpcCa9mqNpPPnyXnpVBAHqWK5Juijh1LM5fUvl2sIelx%2FRbn7W%2BaosU%2FOFIRVnIJq3%2FbngjMbigQriM4FNHNIwnfjRvQY6pgH50s7gDpe3xacYMPwywsFCKy2WQCEEFwkiFuqwEC1zAV%2BbMXDNEQYEw6h%2F0j%2B9JBzJd%2B49ldDEjexeHBf1gLUxSVfuOR80cywrllLyvW0121FIHhCIz%2Bj0gXcqGyGwjBuyvV8%2FfXGiwH8BGtk2SksqPDFOLa%2BCqyMsPbqloqJyKa%2Fra7CO7%2BBKFnjNyw5OhYOccBrOse2JqJgnwuAaHDXIiHQ5R194&X-Amz-Signature=9a7223ca61e58c84d296f22804ae427042c3c08f74b563a4c268ff05f9ba3d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VHS7DA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDrDAxQvBxHRbMZA71CXV9jepiDzPze6mOHWejIUYja4AiAKtt719GZEevHdrZ6puVU8BNvTSOo8Bt5s8SBQXYt%2F2yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcjUVgHrlYblxq6ZKtwDf28iwhMZW1f2CMlyHhSj5og4PQD0LprPCIjwr9gAj%2BbVv73bD%2B46PA2TPz7JTXamNXsltLRa8FD0gPN509twzTWxel1YlNHrRyObRkV%2FQrrB0lF%2BOX8AKpQg9gKFaffvZ%2FCH4oEG%2BHjyxwPiA2voVifmvY9lUxex7pPgn7a1HEDyudoDARGm3oeFTSTdPfW2ZZWRg3L042XkXkcjkls7fghu2LUH%2Bu6SKvXAIkqNRbJIOG%2FMBZ80fl1Jg16uo1IejDAK16V2KhSLcTIbHtg7nuhitsUb%2Bn9sva5oTdlXMtNi1VljVIPhvHqZJfsUV1p7d5f4qztEaux0LivlRTMhgZx7HLY2XSxIaylAR3GBgzTSzq2qD3XTXoVMxEBC9WFnc5UHPeV%2BSB8Yd6mlGkg%2Bs0msrgpS5Nvuy16tUWsXcqDwJiNA%2FEHpcaOmhgrxd%2FvgYMiOZlCQLzwzDUb18p6Yhl5fPwcB%2FBB4FLUe1X0DUGPYvcTzOa8Vv69ntOqgRc2NEVUg9wyEHudKze0Hl1L%2FGGPqfxG55fSJYriuIjBpcCa9mqNpPPnyXnpVBAHqWK5Juijh1LM5fUvl2sIelx%2FRbn7W%2BaosU%2FOFIRVnIJq3%2FbngjMbigQriM4FNHNIwnfjRvQY6pgH50s7gDpe3xacYMPwywsFCKy2WQCEEFwkiFuqwEC1zAV%2BbMXDNEQYEw6h%2F0j%2B9JBzJd%2B49ldDEjexeHBf1gLUxSVfuOR80cywrllLyvW0121FIHhCIz%2Bj0gXcqGyGwjBuyvV8%2FfXGiwH8BGtk2SksqPDFOLa%2BCqyMsPbqloqJyKa%2Fra7CO7%2BBKFnjNyw5OhYOccBrOse2JqJgnwuAaHDXIiHQ5R194&X-Amz-Signature=bb342f296251d96ca057a4ffca9de55c2415618a728df41e6ac1d5b080074df9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VHS7DA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDrDAxQvBxHRbMZA71CXV9jepiDzPze6mOHWejIUYja4AiAKtt719GZEevHdrZ6puVU8BNvTSOo8Bt5s8SBQXYt%2F2yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcjUVgHrlYblxq6ZKtwDf28iwhMZW1f2CMlyHhSj5og4PQD0LprPCIjwr9gAj%2BbVv73bD%2B46PA2TPz7JTXamNXsltLRa8FD0gPN509twzTWxel1YlNHrRyObRkV%2FQrrB0lF%2BOX8AKpQg9gKFaffvZ%2FCH4oEG%2BHjyxwPiA2voVifmvY9lUxex7pPgn7a1HEDyudoDARGm3oeFTSTdPfW2ZZWRg3L042XkXkcjkls7fghu2LUH%2Bu6SKvXAIkqNRbJIOG%2FMBZ80fl1Jg16uo1IejDAK16V2KhSLcTIbHtg7nuhitsUb%2Bn9sva5oTdlXMtNi1VljVIPhvHqZJfsUV1p7d5f4qztEaux0LivlRTMhgZx7HLY2XSxIaylAR3GBgzTSzq2qD3XTXoVMxEBC9WFnc5UHPeV%2BSB8Yd6mlGkg%2Bs0msrgpS5Nvuy16tUWsXcqDwJiNA%2FEHpcaOmhgrxd%2FvgYMiOZlCQLzwzDUb18p6Yhl5fPwcB%2FBB4FLUe1X0DUGPYvcTzOa8Vv69ntOqgRc2NEVUg9wyEHudKze0Hl1L%2FGGPqfxG55fSJYriuIjBpcCa9mqNpPPnyXnpVBAHqWK5Juijh1LM5fUvl2sIelx%2FRbn7W%2BaosU%2FOFIRVnIJq3%2FbngjMbigQriM4FNHNIwnfjRvQY6pgH50s7gDpe3xacYMPwywsFCKy2WQCEEFwkiFuqwEC1zAV%2BbMXDNEQYEw6h%2F0j%2B9JBzJd%2B49ldDEjexeHBf1gLUxSVfuOR80cywrllLyvW0121FIHhCIz%2Bj0gXcqGyGwjBuyvV8%2FfXGiwH8BGtk2SksqPDFOLa%2BCqyMsPbqloqJyKa%2Fra7CO7%2BBKFnjNyw5OhYOccBrOse2JqJgnwuAaHDXIiHQ5R194&X-Amz-Signature=fbff026d25def641793ed60f9b2ec235ae4a7226168cb239bafdcf60909a96c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VHS7DA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDrDAxQvBxHRbMZA71CXV9jepiDzPze6mOHWejIUYja4AiAKtt719GZEevHdrZ6puVU8BNvTSOo8Bt5s8SBQXYt%2F2yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcjUVgHrlYblxq6ZKtwDf28iwhMZW1f2CMlyHhSj5og4PQD0LprPCIjwr9gAj%2BbVv73bD%2B46PA2TPz7JTXamNXsltLRa8FD0gPN509twzTWxel1YlNHrRyObRkV%2FQrrB0lF%2BOX8AKpQg9gKFaffvZ%2FCH4oEG%2BHjyxwPiA2voVifmvY9lUxex7pPgn7a1HEDyudoDARGm3oeFTSTdPfW2ZZWRg3L042XkXkcjkls7fghu2LUH%2Bu6SKvXAIkqNRbJIOG%2FMBZ80fl1Jg16uo1IejDAK16V2KhSLcTIbHtg7nuhitsUb%2Bn9sva5oTdlXMtNi1VljVIPhvHqZJfsUV1p7d5f4qztEaux0LivlRTMhgZx7HLY2XSxIaylAR3GBgzTSzq2qD3XTXoVMxEBC9WFnc5UHPeV%2BSB8Yd6mlGkg%2Bs0msrgpS5Nvuy16tUWsXcqDwJiNA%2FEHpcaOmhgrxd%2FvgYMiOZlCQLzwzDUb18p6Yhl5fPwcB%2FBB4FLUe1X0DUGPYvcTzOa8Vv69ntOqgRc2NEVUg9wyEHudKze0Hl1L%2FGGPqfxG55fSJYriuIjBpcCa9mqNpPPnyXnpVBAHqWK5Juijh1LM5fUvl2sIelx%2FRbn7W%2BaosU%2FOFIRVnIJq3%2FbngjMbigQriM4FNHNIwnfjRvQY6pgH50s7gDpe3xacYMPwywsFCKy2WQCEEFwkiFuqwEC1zAV%2BbMXDNEQYEw6h%2F0j%2B9JBzJd%2B49ldDEjexeHBf1gLUxSVfuOR80cywrllLyvW0121FIHhCIz%2Bj0gXcqGyGwjBuyvV8%2FfXGiwH8BGtk2SksqPDFOLa%2BCqyMsPbqloqJyKa%2Fra7CO7%2BBKFnjNyw5OhYOccBrOse2JqJgnwuAaHDXIiHQ5R194&X-Amz-Signature=75975834dafcf0ede97bd52b56a5bad0b3e654e5517bdfa04cf1b417436bad63&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

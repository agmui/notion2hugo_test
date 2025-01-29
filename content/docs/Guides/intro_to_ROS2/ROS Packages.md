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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN25ADKT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG73yjU39gSFii1cF%2F3V%2BJS09KFLo4xunz7OBsiTLA6gAiEAzBngtJ1UypA5WJYo%2BCZqtB9OYykfyF8G0S5wXzJV%2BB0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcAeYMe80B2ZqWE0yrcA32F0vzxrxO2x2yTumNPkxlRD2MJCdfJqk7vgRc2OFscY4I6kZ0KL4rnsLt317aw%2B%2F4T3WDCgCFFJ2vK31KqFBvrqk%2BHipneOKPOZKPjm56CXOsdieLi%2BX4qQi0wqm464za7nEi5hcU8fGUBJoNgnRE6A7TkVIBu5wE1vhwaWH4KyKk%2FOdxgq04IMzOkHOfqGdpapPv86CZCchJpGX3ncnp%2BNah41qQXQI%2FZ%2FBDFGJnt7MzLRHfBBw5ePg63W%2BdIa53KgtRTyZH1Yk7FI%2FEqUXgycPhtodGf6%2BfftAaQFtz7tZ5J0NQB11xwaeCHHsKv5vY6wbGlAtzznzD2DaBgKtnO0IN9P%2BNsS4kooJ5ePPy01J0y6lO%2F%2BLGiMSfWdUkYlOHB3icKPSPsMVUfkCeYJ9UneFjIPTY4toiLXllj1haTlPMZnutb0r1v9w04qjfEg6S2HxUo5HvNjSAi11l1xR3I2ryBoc45VKLJYeQWVpR47GlYpu1f6dcG48BSyNRuW9M95inwEanPQg11IIOzeHebCbk6rUceD769YI7QHIqKzp%2BMtNyP%2F3P4YgHCQtJ%2B%2Bpx9WELg3JJFmDViSTSeBwIDz8XTyssO12LzXER0oS91C22Enn88JiX0oev1MP6E6bwGOqUBN09eXzU8Up7plnbXeRHm4Kz7BFy%2BSBCXDYiX5Q7FOfreD5LsH%2FmP2SODovMFxpcnHH1cXpF%2FfWOsaQ0X2LSUllBGrS%2Fdno3x6cSrdYrBqB9ReZwEktUqgaSbipVY3LLXHn2rwqhbl7bmoBzhgdW%2Fq%2BF9Rd0glTySfaEKb3kxK%2FVVE2pyjzPXl7Opy%2BmQzM0iMgGmk2Out7ut2jw8XYLnxG4hy9VZ&X-Amz-Signature=b81126cb57ed4697b0526423f45c02a32431e36b2c052fba18159685a9fa7fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN25ADKT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG73yjU39gSFii1cF%2F3V%2BJS09KFLo4xunz7OBsiTLA6gAiEAzBngtJ1UypA5WJYo%2BCZqtB9OYykfyF8G0S5wXzJV%2BB0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcAeYMe80B2ZqWE0yrcA32F0vzxrxO2x2yTumNPkxlRD2MJCdfJqk7vgRc2OFscY4I6kZ0KL4rnsLt317aw%2B%2F4T3WDCgCFFJ2vK31KqFBvrqk%2BHipneOKPOZKPjm56CXOsdieLi%2BX4qQi0wqm464za7nEi5hcU8fGUBJoNgnRE6A7TkVIBu5wE1vhwaWH4KyKk%2FOdxgq04IMzOkHOfqGdpapPv86CZCchJpGX3ncnp%2BNah41qQXQI%2FZ%2FBDFGJnt7MzLRHfBBw5ePg63W%2BdIa53KgtRTyZH1Yk7FI%2FEqUXgycPhtodGf6%2BfftAaQFtz7tZ5J0NQB11xwaeCHHsKv5vY6wbGlAtzznzD2DaBgKtnO0IN9P%2BNsS4kooJ5ePPy01J0y6lO%2F%2BLGiMSfWdUkYlOHB3icKPSPsMVUfkCeYJ9UneFjIPTY4toiLXllj1haTlPMZnutb0r1v9w04qjfEg6S2HxUo5HvNjSAi11l1xR3I2ryBoc45VKLJYeQWVpR47GlYpu1f6dcG48BSyNRuW9M95inwEanPQg11IIOzeHebCbk6rUceD769YI7QHIqKzp%2BMtNyP%2F3P4YgHCQtJ%2B%2Bpx9WELg3JJFmDViSTSeBwIDz8XTyssO12LzXER0oS91C22Enn88JiX0oev1MP6E6bwGOqUBN09eXzU8Up7plnbXeRHm4Kz7BFy%2BSBCXDYiX5Q7FOfreD5LsH%2FmP2SODovMFxpcnHH1cXpF%2FfWOsaQ0X2LSUllBGrS%2Fdno3x6cSrdYrBqB9ReZwEktUqgaSbipVY3LLXHn2rwqhbl7bmoBzhgdW%2Fq%2BF9Rd0glTySfaEKb3kxK%2FVVE2pyjzPXl7Opy%2BmQzM0iMgGmk2Out7ut2jw8XYLnxG4hy9VZ&X-Amz-Signature=f5d1e24624f01680eb0eed74262d00a9e84f8d270952123fc6de96289d2370b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN25ADKT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG73yjU39gSFii1cF%2F3V%2BJS09KFLo4xunz7OBsiTLA6gAiEAzBngtJ1UypA5WJYo%2BCZqtB9OYykfyF8G0S5wXzJV%2BB0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcAeYMe80B2ZqWE0yrcA32F0vzxrxO2x2yTumNPkxlRD2MJCdfJqk7vgRc2OFscY4I6kZ0KL4rnsLt317aw%2B%2F4T3WDCgCFFJ2vK31KqFBvrqk%2BHipneOKPOZKPjm56CXOsdieLi%2BX4qQi0wqm464za7nEi5hcU8fGUBJoNgnRE6A7TkVIBu5wE1vhwaWH4KyKk%2FOdxgq04IMzOkHOfqGdpapPv86CZCchJpGX3ncnp%2BNah41qQXQI%2FZ%2FBDFGJnt7MzLRHfBBw5ePg63W%2BdIa53KgtRTyZH1Yk7FI%2FEqUXgycPhtodGf6%2BfftAaQFtz7tZ5J0NQB11xwaeCHHsKv5vY6wbGlAtzznzD2DaBgKtnO0IN9P%2BNsS4kooJ5ePPy01J0y6lO%2F%2BLGiMSfWdUkYlOHB3icKPSPsMVUfkCeYJ9UneFjIPTY4toiLXllj1haTlPMZnutb0r1v9w04qjfEg6S2HxUo5HvNjSAi11l1xR3I2ryBoc45VKLJYeQWVpR47GlYpu1f6dcG48BSyNRuW9M95inwEanPQg11IIOzeHebCbk6rUceD769YI7QHIqKzp%2BMtNyP%2F3P4YgHCQtJ%2B%2Bpx9WELg3JJFmDViSTSeBwIDz8XTyssO12LzXER0oS91C22Enn88JiX0oev1MP6E6bwGOqUBN09eXzU8Up7plnbXeRHm4Kz7BFy%2BSBCXDYiX5Q7FOfreD5LsH%2FmP2SODovMFxpcnHH1cXpF%2FfWOsaQ0X2LSUllBGrS%2Fdno3x6cSrdYrBqB9ReZwEktUqgaSbipVY3LLXHn2rwqhbl7bmoBzhgdW%2Fq%2BF9Rd0glTySfaEKb3kxK%2FVVE2pyjzPXl7Opy%2BmQzM0iMgGmk2Out7ut2jw8XYLnxG4hy9VZ&X-Amz-Signature=914988584f501339cd1b366c67d8955811b711ad4f1c538d52c28071dec9500f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN25ADKT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG73yjU39gSFii1cF%2F3V%2BJS09KFLo4xunz7OBsiTLA6gAiEAzBngtJ1UypA5WJYo%2BCZqtB9OYykfyF8G0S5wXzJV%2BB0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcAeYMe80B2ZqWE0yrcA32F0vzxrxO2x2yTumNPkxlRD2MJCdfJqk7vgRc2OFscY4I6kZ0KL4rnsLt317aw%2B%2F4T3WDCgCFFJ2vK31KqFBvrqk%2BHipneOKPOZKPjm56CXOsdieLi%2BX4qQi0wqm464za7nEi5hcU8fGUBJoNgnRE6A7TkVIBu5wE1vhwaWH4KyKk%2FOdxgq04IMzOkHOfqGdpapPv86CZCchJpGX3ncnp%2BNah41qQXQI%2FZ%2FBDFGJnt7MzLRHfBBw5ePg63W%2BdIa53KgtRTyZH1Yk7FI%2FEqUXgycPhtodGf6%2BfftAaQFtz7tZ5J0NQB11xwaeCHHsKv5vY6wbGlAtzznzD2DaBgKtnO0IN9P%2BNsS4kooJ5ePPy01J0y6lO%2F%2BLGiMSfWdUkYlOHB3icKPSPsMVUfkCeYJ9UneFjIPTY4toiLXllj1haTlPMZnutb0r1v9w04qjfEg6S2HxUo5HvNjSAi11l1xR3I2ryBoc45VKLJYeQWVpR47GlYpu1f6dcG48BSyNRuW9M95inwEanPQg11IIOzeHebCbk6rUceD769YI7QHIqKzp%2BMtNyP%2F3P4YgHCQtJ%2B%2Bpx9WELg3JJFmDViSTSeBwIDz8XTyssO12LzXER0oS91C22Enn88JiX0oev1MP6E6bwGOqUBN09eXzU8Up7plnbXeRHm4Kz7BFy%2BSBCXDYiX5Q7FOfreD5LsH%2FmP2SODovMFxpcnHH1cXpF%2FfWOsaQ0X2LSUllBGrS%2Fdno3x6cSrdYrBqB9ReZwEktUqgaSbipVY3LLXHn2rwqhbl7bmoBzhgdW%2Fq%2BF9Rd0glTySfaEKb3kxK%2FVVE2pyjzPXl7Opy%2BmQzM0iMgGmk2Out7ut2jw8XYLnxG4hy9VZ&X-Amz-Signature=72282900d599385cfd1be5d1374ffac5415c039b19133ecd53b79c4ea17d2009&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN25ADKT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG73yjU39gSFii1cF%2F3V%2BJS09KFLo4xunz7OBsiTLA6gAiEAzBngtJ1UypA5WJYo%2BCZqtB9OYykfyF8G0S5wXzJV%2BB0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcAeYMe80B2ZqWE0yrcA32F0vzxrxO2x2yTumNPkxlRD2MJCdfJqk7vgRc2OFscY4I6kZ0KL4rnsLt317aw%2B%2F4T3WDCgCFFJ2vK31KqFBvrqk%2BHipneOKPOZKPjm56CXOsdieLi%2BX4qQi0wqm464za7nEi5hcU8fGUBJoNgnRE6A7TkVIBu5wE1vhwaWH4KyKk%2FOdxgq04IMzOkHOfqGdpapPv86CZCchJpGX3ncnp%2BNah41qQXQI%2FZ%2FBDFGJnt7MzLRHfBBw5ePg63W%2BdIa53KgtRTyZH1Yk7FI%2FEqUXgycPhtodGf6%2BfftAaQFtz7tZ5J0NQB11xwaeCHHsKv5vY6wbGlAtzznzD2DaBgKtnO0IN9P%2BNsS4kooJ5ePPy01J0y6lO%2F%2BLGiMSfWdUkYlOHB3icKPSPsMVUfkCeYJ9UneFjIPTY4toiLXllj1haTlPMZnutb0r1v9w04qjfEg6S2HxUo5HvNjSAi11l1xR3I2ryBoc45VKLJYeQWVpR47GlYpu1f6dcG48BSyNRuW9M95inwEanPQg11IIOzeHebCbk6rUceD769YI7QHIqKzp%2BMtNyP%2F3P4YgHCQtJ%2B%2Bpx9WELg3JJFmDViSTSeBwIDz8XTyssO12LzXER0oS91C22Enn88JiX0oev1MP6E6bwGOqUBN09eXzU8Up7plnbXeRHm4Kz7BFy%2BSBCXDYiX5Q7FOfreD5LsH%2FmP2SODovMFxpcnHH1cXpF%2FfWOsaQ0X2LSUllBGrS%2Fdno3x6cSrdYrBqB9ReZwEktUqgaSbipVY3LLXHn2rwqhbl7bmoBzhgdW%2Fq%2BF9Rd0glTySfaEKb3kxK%2FVVE2pyjzPXl7Opy%2BmQzM0iMgGmk2Out7ut2jw8XYLnxG4hy9VZ&X-Amz-Signature=301e3f71bcab6af566f7b9d9547007bdb9619b1887c9e0378e61e8f138909173&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN25ADKT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG73yjU39gSFii1cF%2F3V%2BJS09KFLo4xunz7OBsiTLA6gAiEAzBngtJ1UypA5WJYo%2BCZqtB9OYykfyF8G0S5wXzJV%2BB0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcAeYMe80B2ZqWE0yrcA32F0vzxrxO2x2yTumNPkxlRD2MJCdfJqk7vgRc2OFscY4I6kZ0KL4rnsLt317aw%2B%2F4T3WDCgCFFJ2vK31KqFBvrqk%2BHipneOKPOZKPjm56CXOsdieLi%2BX4qQi0wqm464za7nEi5hcU8fGUBJoNgnRE6A7TkVIBu5wE1vhwaWH4KyKk%2FOdxgq04IMzOkHOfqGdpapPv86CZCchJpGX3ncnp%2BNah41qQXQI%2FZ%2FBDFGJnt7MzLRHfBBw5ePg63W%2BdIa53KgtRTyZH1Yk7FI%2FEqUXgycPhtodGf6%2BfftAaQFtz7tZ5J0NQB11xwaeCHHsKv5vY6wbGlAtzznzD2DaBgKtnO0IN9P%2BNsS4kooJ5ePPy01J0y6lO%2F%2BLGiMSfWdUkYlOHB3icKPSPsMVUfkCeYJ9UneFjIPTY4toiLXllj1haTlPMZnutb0r1v9w04qjfEg6S2HxUo5HvNjSAi11l1xR3I2ryBoc45VKLJYeQWVpR47GlYpu1f6dcG48BSyNRuW9M95inwEanPQg11IIOzeHebCbk6rUceD769YI7QHIqKzp%2BMtNyP%2F3P4YgHCQtJ%2B%2Bpx9WELg3JJFmDViSTSeBwIDz8XTyssO12LzXER0oS91C22Enn88JiX0oev1MP6E6bwGOqUBN09eXzU8Up7plnbXeRHm4Kz7BFy%2BSBCXDYiX5Q7FOfreD5LsH%2FmP2SODovMFxpcnHH1cXpF%2FfWOsaQ0X2LSUllBGrS%2Fdno3x6cSrdYrBqB9ReZwEktUqgaSbipVY3LLXHn2rwqhbl7bmoBzhgdW%2Fq%2BF9Rd0glTySfaEKb3kxK%2FVVE2pyjzPXl7Opy%2BmQzM0iMgGmk2Out7ut2jw8XYLnxG4hy9VZ&X-Amz-Signature=a05ac513475dd4792a5f4e931ad9f4633f27cba8de8837dd72f7d9864a5e982f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN25ADKT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG73yjU39gSFii1cF%2F3V%2BJS09KFLo4xunz7OBsiTLA6gAiEAzBngtJ1UypA5WJYo%2BCZqtB9OYykfyF8G0S5wXzJV%2BB0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcAeYMe80B2ZqWE0yrcA32F0vzxrxO2x2yTumNPkxlRD2MJCdfJqk7vgRc2OFscY4I6kZ0KL4rnsLt317aw%2B%2F4T3WDCgCFFJ2vK31KqFBvrqk%2BHipneOKPOZKPjm56CXOsdieLi%2BX4qQi0wqm464za7nEi5hcU8fGUBJoNgnRE6A7TkVIBu5wE1vhwaWH4KyKk%2FOdxgq04IMzOkHOfqGdpapPv86CZCchJpGX3ncnp%2BNah41qQXQI%2FZ%2FBDFGJnt7MzLRHfBBw5ePg63W%2BdIa53KgtRTyZH1Yk7FI%2FEqUXgycPhtodGf6%2BfftAaQFtz7tZ5J0NQB11xwaeCHHsKv5vY6wbGlAtzznzD2DaBgKtnO0IN9P%2BNsS4kooJ5ePPy01J0y6lO%2F%2BLGiMSfWdUkYlOHB3icKPSPsMVUfkCeYJ9UneFjIPTY4toiLXllj1haTlPMZnutb0r1v9w04qjfEg6S2HxUo5HvNjSAi11l1xR3I2ryBoc45VKLJYeQWVpR47GlYpu1f6dcG48BSyNRuW9M95inwEanPQg11IIOzeHebCbk6rUceD769YI7QHIqKzp%2BMtNyP%2F3P4YgHCQtJ%2B%2Bpx9WELg3JJFmDViSTSeBwIDz8XTyssO12LzXER0oS91C22Enn88JiX0oev1MP6E6bwGOqUBN09eXzU8Up7plnbXeRHm4Kz7BFy%2BSBCXDYiX5Q7FOfreD5LsH%2FmP2SODovMFxpcnHH1cXpF%2FfWOsaQ0X2LSUllBGrS%2Fdno3x6cSrdYrBqB9ReZwEktUqgaSbipVY3LLXHn2rwqhbl7bmoBzhgdW%2Fq%2BF9Rd0glTySfaEKb3kxK%2FVVE2pyjzPXl7Opy%2BmQzM0iMgGmk2Out7ut2jw8XYLnxG4hy9VZ&X-Amz-Signature=54b1e7cd9447299bb56e577b5ea316617e9d4054b7054e84acb033654d401719&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

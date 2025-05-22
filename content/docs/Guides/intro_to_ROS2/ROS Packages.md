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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHKV4UJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLyOEmmfrq31WwoiXZGkxfiG6L2MipjYHevSXwxW9RkwIhAL3cJXMh84Dwle2OsprTjeenO%2BpcheKoAVwO7RHlBWdTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxla5EvnatO30Nj8B8q3APd2h26G7OVPwDuQugCIiHS05SB0obaqbis2SRSLODTguno6HHO2n1g5KiX%2F5ILoUcWpqFKoc1MEKWU6s9rK1zRNO48hCXSW3hyGz6VTAcBgW24wc6xRagxW3JYubPbR%2BHM%2FceQYCilFUPfjKxL0ZZTDMY8TDD4X1Xh4BUPBcD0yk%2BcIPoykh0v06vA4cl4oqjArg%2FHBrsu6IJJONk8LOcSEULwigcSwV9bhCcFM0XENCNKUjdWSZK8LCDG4pPQamjyZEvVrrxbPiAktAb6QltteN4aJlXeQbMzi7vsIthsi4S9BmpQwAiPmpB13DYqmttHVtM9pR44GqgR8dYK65ehTL9wO93IRkafbnX4GLxe8BydfIQcsZ4lv%2B0OXW5uBteGM3i12pc10ljsOaO8FICL5qWNgoFymN8WIErp4yN%2FVo%2BVEOAIH1VFWSVI2SQFRio6WO%2FtkTgTY%2FJ68kblpzIfKUlELNENOv4PPNB4srboAhlYi2L2NKFlTwKmwYHXAJma2F50CYkEcGqXoIyQEoSqjPmnmhYRVTjcyi69yz9Fc0B%2Br5bE%2Bj%2BDTgTgZr8jy7EJn%2FGyAVfCEGnruPTmki9y4nA9RO4vBeqF0D1fQKKFRyMiSU9THQ0FE8wEuzDE4bzBBjqkAdAM9jwKu%2BhzDRWx9n3cnIuAwQqf9xVXG4m%2FIz%2BxmX4SSYht3piZg9vHxzuCaTDkCyeNWkjmw5S0JgpIBesVdLswTkq2RewZO1KWWbFOJ4w4lxaAb%2FJq0SIh%2FoeXRwIl4CT%2B67sWJ%2B0DDifFc4pEv1QEsH1wQUXCSCAnr%2BBnQsza1XwubeBfgElBum6JbzazMbYavBqdXolaI%2BSGw2bp5pwjbfls&X-Amz-Signature=26a580aadc50f469d23ee2ac85f3f9d012ea20aef9d094fae1a76e43295bb223&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHKV4UJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLyOEmmfrq31WwoiXZGkxfiG6L2MipjYHevSXwxW9RkwIhAL3cJXMh84Dwle2OsprTjeenO%2BpcheKoAVwO7RHlBWdTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxla5EvnatO30Nj8B8q3APd2h26G7OVPwDuQugCIiHS05SB0obaqbis2SRSLODTguno6HHO2n1g5KiX%2F5ILoUcWpqFKoc1MEKWU6s9rK1zRNO48hCXSW3hyGz6VTAcBgW24wc6xRagxW3JYubPbR%2BHM%2FceQYCilFUPfjKxL0ZZTDMY8TDD4X1Xh4BUPBcD0yk%2BcIPoykh0v06vA4cl4oqjArg%2FHBrsu6IJJONk8LOcSEULwigcSwV9bhCcFM0XENCNKUjdWSZK8LCDG4pPQamjyZEvVrrxbPiAktAb6QltteN4aJlXeQbMzi7vsIthsi4S9BmpQwAiPmpB13DYqmttHVtM9pR44GqgR8dYK65ehTL9wO93IRkafbnX4GLxe8BydfIQcsZ4lv%2B0OXW5uBteGM3i12pc10ljsOaO8FICL5qWNgoFymN8WIErp4yN%2FVo%2BVEOAIH1VFWSVI2SQFRio6WO%2FtkTgTY%2FJ68kblpzIfKUlELNENOv4PPNB4srboAhlYi2L2NKFlTwKmwYHXAJma2F50CYkEcGqXoIyQEoSqjPmnmhYRVTjcyi69yz9Fc0B%2Br5bE%2Bj%2BDTgTgZr8jy7EJn%2FGyAVfCEGnruPTmki9y4nA9RO4vBeqF0D1fQKKFRyMiSU9THQ0FE8wEuzDE4bzBBjqkAdAM9jwKu%2BhzDRWx9n3cnIuAwQqf9xVXG4m%2FIz%2BxmX4SSYht3piZg9vHxzuCaTDkCyeNWkjmw5S0JgpIBesVdLswTkq2RewZO1KWWbFOJ4w4lxaAb%2FJq0SIh%2FoeXRwIl4CT%2B67sWJ%2B0DDifFc4pEv1QEsH1wQUXCSCAnr%2BBnQsza1XwubeBfgElBum6JbzazMbYavBqdXolaI%2BSGw2bp5pwjbfls&X-Amz-Signature=c1d8930f65002392832d9d0186ac7f99b7852c00d13d10a7a001428df4ae500d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHKV4UJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLyOEmmfrq31WwoiXZGkxfiG6L2MipjYHevSXwxW9RkwIhAL3cJXMh84Dwle2OsprTjeenO%2BpcheKoAVwO7RHlBWdTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxla5EvnatO30Nj8B8q3APd2h26G7OVPwDuQugCIiHS05SB0obaqbis2SRSLODTguno6HHO2n1g5KiX%2F5ILoUcWpqFKoc1MEKWU6s9rK1zRNO48hCXSW3hyGz6VTAcBgW24wc6xRagxW3JYubPbR%2BHM%2FceQYCilFUPfjKxL0ZZTDMY8TDD4X1Xh4BUPBcD0yk%2BcIPoykh0v06vA4cl4oqjArg%2FHBrsu6IJJONk8LOcSEULwigcSwV9bhCcFM0XENCNKUjdWSZK8LCDG4pPQamjyZEvVrrxbPiAktAb6QltteN4aJlXeQbMzi7vsIthsi4S9BmpQwAiPmpB13DYqmttHVtM9pR44GqgR8dYK65ehTL9wO93IRkafbnX4GLxe8BydfIQcsZ4lv%2B0OXW5uBteGM3i12pc10ljsOaO8FICL5qWNgoFymN8WIErp4yN%2FVo%2BVEOAIH1VFWSVI2SQFRio6WO%2FtkTgTY%2FJ68kblpzIfKUlELNENOv4PPNB4srboAhlYi2L2NKFlTwKmwYHXAJma2F50CYkEcGqXoIyQEoSqjPmnmhYRVTjcyi69yz9Fc0B%2Br5bE%2Bj%2BDTgTgZr8jy7EJn%2FGyAVfCEGnruPTmki9y4nA9RO4vBeqF0D1fQKKFRyMiSU9THQ0FE8wEuzDE4bzBBjqkAdAM9jwKu%2BhzDRWx9n3cnIuAwQqf9xVXG4m%2FIz%2BxmX4SSYht3piZg9vHxzuCaTDkCyeNWkjmw5S0JgpIBesVdLswTkq2RewZO1KWWbFOJ4w4lxaAb%2FJq0SIh%2FoeXRwIl4CT%2B67sWJ%2B0DDifFc4pEv1QEsH1wQUXCSCAnr%2BBnQsza1XwubeBfgElBum6JbzazMbYavBqdXolaI%2BSGw2bp5pwjbfls&X-Amz-Signature=27dfa1bdc195f4b73609192462f9b814d9204a23ee4c72b4e885f0ef8fe666f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHKV4UJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLyOEmmfrq31WwoiXZGkxfiG6L2MipjYHevSXwxW9RkwIhAL3cJXMh84Dwle2OsprTjeenO%2BpcheKoAVwO7RHlBWdTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxla5EvnatO30Nj8B8q3APd2h26G7OVPwDuQugCIiHS05SB0obaqbis2SRSLODTguno6HHO2n1g5KiX%2F5ILoUcWpqFKoc1MEKWU6s9rK1zRNO48hCXSW3hyGz6VTAcBgW24wc6xRagxW3JYubPbR%2BHM%2FceQYCilFUPfjKxL0ZZTDMY8TDD4X1Xh4BUPBcD0yk%2BcIPoykh0v06vA4cl4oqjArg%2FHBrsu6IJJONk8LOcSEULwigcSwV9bhCcFM0XENCNKUjdWSZK8LCDG4pPQamjyZEvVrrxbPiAktAb6QltteN4aJlXeQbMzi7vsIthsi4S9BmpQwAiPmpB13DYqmttHVtM9pR44GqgR8dYK65ehTL9wO93IRkafbnX4GLxe8BydfIQcsZ4lv%2B0OXW5uBteGM3i12pc10ljsOaO8FICL5qWNgoFymN8WIErp4yN%2FVo%2BVEOAIH1VFWSVI2SQFRio6WO%2FtkTgTY%2FJ68kblpzIfKUlELNENOv4PPNB4srboAhlYi2L2NKFlTwKmwYHXAJma2F50CYkEcGqXoIyQEoSqjPmnmhYRVTjcyi69yz9Fc0B%2Br5bE%2Bj%2BDTgTgZr8jy7EJn%2FGyAVfCEGnruPTmki9y4nA9RO4vBeqF0D1fQKKFRyMiSU9THQ0FE8wEuzDE4bzBBjqkAdAM9jwKu%2BhzDRWx9n3cnIuAwQqf9xVXG4m%2FIz%2BxmX4SSYht3piZg9vHxzuCaTDkCyeNWkjmw5S0JgpIBesVdLswTkq2RewZO1KWWbFOJ4w4lxaAb%2FJq0SIh%2FoeXRwIl4CT%2B67sWJ%2B0DDifFc4pEv1QEsH1wQUXCSCAnr%2BBnQsza1XwubeBfgElBum6JbzazMbYavBqdXolaI%2BSGw2bp5pwjbfls&X-Amz-Signature=297937e5352abea5a113689a7c37cd96bf8eb33a56c202078eb09af911c716cb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHKV4UJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLyOEmmfrq31WwoiXZGkxfiG6L2MipjYHevSXwxW9RkwIhAL3cJXMh84Dwle2OsprTjeenO%2BpcheKoAVwO7RHlBWdTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxla5EvnatO30Nj8B8q3APd2h26G7OVPwDuQugCIiHS05SB0obaqbis2SRSLODTguno6HHO2n1g5KiX%2F5ILoUcWpqFKoc1MEKWU6s9rK1zRNO48hCXSW3hyGz6VTAcBgW24wc6xRagxW3JYubPbR%2BHM%2FceQYCilFUPfjKxL0ZZTDMY8TDD4X1Xh4BUPBcD0yk%2BcIPoykh0v06vA4cl4oqjArg%2FHBrsu6IJJONk8LOcSEULwigcSwV9bhCcFM0XENCNKUjdWSZK8LCDG4pPQamjyZEvVrrxbPiAktAb6QltteN4aJlXeQbMzi7vsIthsi4S9BmpQwAiPmpB13DYqmttHVtM9pR44GqgR8dYK65ehTL9wO93IRkafbnX4GLxe8BydfIQcsZ4lv%2B0OXW5uBteGM3i12pc10ljsOaO8FICL5qWNgoFymN8WIErp4yN%2FVo%2BVEOAIH1VFWSVI2SQFRio6WO%2FtkTgTY%2FJ68kblpzIfKUlELNENOv4PPNB4srboAhlYi2L2NKFlTwKmwYHXAJma2F50CYkEcGqXoIyQEoSqjPmnmhYRVTjcyi69yz9Fc0B%2Br5bE%2Bj%2BDTgTgZr8jy7EJn%2FGyAVfCEGnruPTmki9y4nA9RO4vBeqF0D1fQKKFRyMiSU9THQ0FE8wEuzDE4bzBBjqkAdAM9jwKu%2BhzDRWx9n3cnIuAwQqf9xVXG4m%2FIz%2BxmX4SSYht3piZg9vHxzuCaTDkCyeNWkjmw5S0JgpIBesVdLswTkq2RewZO1KWWbFOJ4w4lxaAb%2FJq0SIh%2FoeXRwIl4CT%2B67sWJ%2B0DDifFc4pEv1QEsH1wQUXCSCAnr%2BBnQsza1XwubeBfgElBum6JbzazMbYavBqdXolaI%2BSGw2bp5pwjbfls&X-Amz-Signature=5c5fd2f5ac67767dd736cdc4eeeac90845d6c1f5bd97143d649192e275f13490&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHKV4UJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLyOEmmfrq31WwoiXZGkxfiG6L2MipjYHevSXwxW9RkwIhAL3cJXMh84Dwle2OsprTjeenO%2BpcheKoAVwO7RHlBWdTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxla5EvnatO30Nj8B8q3APd2h26G7OVPwDuQugCIiHS05SB0obaqbis2SRSLODTguno6HHO2n1g5KiX%2F5ILoUcWpqFKoc1MEKWU6s9rK1zRNO48hCXSW3hyGz6VTAcBgW24wc6xRagxW3JYubPbR%2BHM%2FceQYCilFUPfjKxL0ZZTDMY8TDD4X1Xh4BUPBcD0yk%2BcIPoykh0v06vA4cl4oqjArg%2FHBrsu6IJJONk8LOcSEULwigcSwV9bhCcFM0XENCNKUjdWSZK8LCDG4pPQamjyZEvVrrxbPiAktAb6QltteN4aJlXeQbMzi7vsIthsi4S9BmpQwAiPmpB13DYqmttHVtM9pR44GqgR8dYK65ehTL9wO93IRkafbnX4GLxe8BydfIQcsZ4lv%2B0OXW5uBteGM3i12pc10ljsOaO8FICL5qWNgoFymN8WIErp4yN%2FVo%2BVEOAIH1VFWSVI2SQFRio6WO%2FtkTgTY%2FJ68kblpzIfKUlELNENOv4PPNB4srboAhlYi2L2NKFlTwKmwYHXAJma2F50CYkEcGqXoIyQEoSqjPmnmhYRVTjcyi69yz9Fc0B%2Br5bE%2Bj%2BDTgTgZr8jy7EJn%2FGyAVfCEGnruPTmki9y4nA9RO4vBeqF0D1fQKKFRyMiSU9THQ0FE8wEuzDE4bzBBjqkAdAM9jwKu%2BhzDRWx9n3cnIuAwQqf9xVXG4m%2FIz%2BxmX4SSYht3piZg9vHxzuCaTDkCyeNWkjmw5S0JgpIBesVdLswTkq2RewZO1KWWbFOJ4w4lxaAb%2FJq0SIh%2FoeXRwIl4CT%2B67sWJ%2B0DDifFc4pEv1QEsH1wQUXCSCAnr%2BBnQsza1XwubeBfgElBum6JbzazMbYavBqdXolaI%2BSGw2bp5pwjbfls&X-Amz-Signature=915619f79875b51bcd0c4c796b643bb94cc2a8772d0cb5dc7016c75af83ad0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHKV4UJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLyOEmmfrq31WwoiXZGkxfiG6L2MipjYHevSXwxW9RkwIhAL3cJXMh84Dwle2OsprTjeenO%2BpcheKoAVwO7RHlBWdTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxla5EvnatO30Nj8B8q3APd2h26G7OVPwDuQugCIiHS05SB0obaqbis2SRSLODTguno6HHO2n1g5KiX%2F5ILoUcWpqFKoc1MEKWU6s9rK1zRNO48hCXSW3hyGz6VTAcBgW24wc6xRagxW3JYubPbR%2BHM%2FceQYCilFUPfjKxL0ZZTDMY8TDD4X1Xh4BUPBcD0yk%2BcIPoykh0v06vA4cl4oqjArg%2FHBrsu6IJJONk8LOcSEULwigcSwV9bhCcFM0XENCNKUjdWSZK8LCDG4pPQamjyZEvVrrxbPiAktAb6QltteN4aJlXeQbMzi7vsIthsi4S9BmpQwAiPmpB13DYqmttHVtM9pR44GqgR8dYK65ehTL9wO93IRkafbnX4GLxe8BydfIQcsZ4lv%2B0OXW5uBteGM3i12pc10ljsOaO8FICL5qWNgoFymN8WIErp4yN%2FVo%2BVEOAIH1VFWSVI2SQFRio6WO%2FtkTgTY%2FJ68kblpzIfKUlELNENOv4PPNB4srboAhlYi2L2NKFlTwKmwYHXAJma2F50CYkEcGqXoIyQEoSqjPmnmhYRVTjcyi69yz9Fc0B%2Br5bE%2Bj%2BDTgTgZr8jy7EJn%2FGyAVfCEGnruPTmki9y4nA9RO4vBeqF0D1fQKKFRyMiSU9THQ0FE8wEuzDE4bzBBjqkAdAM9jwKu%2BhzDRWx9n3cnIuAwQqf9xVXG4m%2FIz%2BxmX4SSYht3piZg9vHxzuCaTDkCyeNWkjmw5S0JgpIBesVdLswTkq2RewZO1KWWbFOJ4w4lxaAb%2FJq0SIh%2FoeXRwIl4CT%2B67sWJ%2B0DDifFc4pEv1QEsH1wQUXCSCAnr%2BBnQsza1XwubeBfgElBum6JbzazMbYavBqdXolaI%2BSGw2bp5pwjbfls&X-Amz-Signature=57e6714aaaa5f6c515dc8e81ffee59a420ab502c1bcc5eee11b3cd7fbedc87d3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

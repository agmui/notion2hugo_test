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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVPAHZJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCoboFnbbsOkM2fi3yvH3opiu4t8A3kWNxqfbhL3lb1QwIge1sx8eRl0PtKGI89Ei3ApeW82pBFoaVslqVg3FloxWcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeQ%2BWi0EVua91TWxircA1aI930aU1guZ9eqZ%2F%2BN9YBNp89q6EOmPLNQ%2FTlOkc2rhSU%2BpQxIg4exO4PpD58o3wawxIVJuMzPvsY4E2rXcgHgFzWd4BuLeARtYjH7QN%2FZ5ebDB1CzianKkQarvrsCryiWwhQ%2Fwm2YEd%2BCUOseXp2jldm81sAqK8iTb26dvifhnEDFMdgLauIriEIA5LLb8FxfSjTGYr5ANp%2FYeCRp5zJRXutOCsH1z2Lszv09s18MRtOUyepEAiU53fDvo2ht8lGz60nk%2B0bAv1%2Bd0LClLbVl2N4z48HRpGeobJTkzOdMYAYc4Z%2FkJ2mm2EyQCDpOC62KPCkbPx1TrnvUMbUWP4MYxS9c0erSg6p%2B1atMGbqXpe2%2FRXfZ3D3KQ4Icwd9QIaDMdMG7VdXV6V7uHWO3V0jEgA80y6IzEAX4glAkoglyHJKojRyJGV%2FlxkFpeCnRrYbq5DoiouV3Pg3s9zQnoC5cPYQm8NhKUuFa62WSMRL41cTBk8t4W6vx%2BdqK4zlqIv5gEmztl2MRv03QLsTLgrOar%2FAWoddSFX06U5PqRtHzGkNIaL2k8Ozb3VXdWedNzMELtQo14YuwbAeU3Q24GfPde3mAXFx6KKwYngvbFbUYhzqSxtWfYeParysuMKHXpMAGOqUBSYfNxow%2Fb%2Fbhy0K94ZWYqGahdQK1JWzZgt%2BE9DDULTKX1QuFd1Y%2BS9yTtfOPvi29gSusx%2FQT%2Fizfbw2ieQ6hdbJULZC%2Bvsw6hu7QSsbIe7qumrYqn1zKQ6jPt%2FtHcolmqyfbTDqqRTpwU1kBLpVJyhGIuqIDu8N%2BB5i2892aqch9vmzh7NIDlzEk%2Flyrv10E7ftXyPU8vCTKaUMsufLptGzQSEQE&X-Amz-Signature=ab1818264cb0f218085f396067f75d40204385981a21e74ba33ddf1c7e336d50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVPAHZJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCoboFnbbsOkM2fi3yvH3opiu4t8A3kWNxqfbhL3lb1QwIge1sx8eRl0PtKGI89Ei3ApeW82pBFoaVslqVg3FloxWcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeQ%2BWi0EVua91TWxircA1aI930aU1guZ9eqZ%2F%2BN9YBNp89q6EOmPLNQ%2FTlOkc2rhSU%2BpQxIg4exO4PpD58o3wawxIVJuMzPvsY4E2rXcgHgFzWd4BuLeARtYjH7QN%2FZ5ebDB1CzianKkQarvrsCryiWwhQ%2Fwm2YEd%2BCUOseXp2jldm81sAqK8iTb26dvifhnEDFMdgLauIriEIA5LLb8FxfSjTGYr5ANp%2FYeCRp5zJRXutOCsH1z2Lszv09s18MRtOUyepEAiU53fDvo2ht8lGz60nk%2B0bAv1%2Bd0LClLbVl2N4z48HRpGeobJTkzOdMYAYc4Z%2FkJ2mm2EyQCDpOC62KPCkbPx1TrnvUMbUWP4MYxS9c0erSg6p%2B1atMGbqXpe2%2FRXfZ3D3KQ4Icwd9QIaDMdMG7VdXV6V7uHWO3V0jEgA80y6IzEAX4glAkoglyHJKojRyJGV%2FlxkFpeCnRrYbq5DoiouV3Pg3s9zQnoC5cPYQm8NhKUuFa62WSMRL41cTBk8t4W6vx%2BdqK4zlqIv5gEmztl2MRv03QLsTLgrOar%2FAWoddSFX06U5PqRtHzGkNIaL2k8Ozb3VXdWedNzMELtQo14YuwbAeU3Q24GfPde3mAXFx6KKwYngvbFbUYhzqSxtWfYeParysuMKHXpMAGOqUBSYfNxow%2Fb%2Fbhy0K94ZWYqGahdQK1JWzZgt%2BE9DDULTKX1QuFd1Y%2BS9yTtfOPvi29gSusx%2FQT%2Fizfbw2ieQ6hdbJULZC%2Bvsw6hu7QSsbIe7qumrYqn1zKQ6jPt%2FtHcolmqyfbTDqqRTpwU1kBLpVJyhGIuqIDu8N%2BB5i2892aqch9vmzh7NIDlzEk%2Flyrv10E7ftXyPU8vCTKaUMsufLptGzQSEQE&X-Amz-Signature=d77951d1d9af75755fd294a20a8cde3323296673d7ed80e93108fc7c4ef2540c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVPAHZJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCoboFnbbsOkM2fi3yvH3opiu4t8A3kWNxqfbhL3lb1QwIge1sx8eRl0PtKGI89Ei3ApeW82pBFoaVslqVg3FloxWcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeQ%2BWi0EVua91TWxircA1aI930aU1guZ9eqZ%2F%2BN9YBNp89q6EOmPLNQ%2FTlOkc2rhSU%2BpQxIg4exO4PpD58o3wawxIVJuMzPvsY4E2rXcgHgFzWd4BuLeARtYjH7QN%2FZ5ebDB1CzianKkQarvrsCryiWwhQ%2Fwm2YEd%2BCUOseXp2jldm81sAqK8iTb26dvifhnEDFMdgLauIriEIA5LLb8FxfSjTGYr5ANp%2FYeCRp5zJRXutOCsH1z2Lszv09s18MRtOUyepEAiU53fDvo2ht8lGz60nk%2B0bAv1%2Bd0LClLbVl2N4z48HRpGeobJTkzOdMYAYc4Z%2FkJ2mm2EyQCDpOC62KPCkbPx1TrnvUMbUWP4MYxS9c0erSg6p%2B1atMGbqXpe2%2FRXfZ3D3KQ4Icwd9QIaDMdMG7VdXV6V7uHWO3V0jEgA80y6IzEAX4glAkoglyHJKojRyJGV%2FlxkFpeCnRrYbq5DoiouV3Pg3s9zQnoC5cPYQm8NhKUuFa62WSMRL41cTBk8t4W6vx%2BdqK4zlqIv5gEmztl2MRv03QLsTLgrOar%2FAWoddSFX06U5PqRtHzGkNIaL2k8Ozb3VXdWedNzMELtQo14YuwbAeU3Q24GfPde3mAXFx6KKwYngvbFbUYhzqSxtWfYeParysuMKHXpMAGOqUBSYfNxow%2Fb%2Fbhy0K94ZWYqGahdQK1JWzZgt%2BE9DDULTKX1QuFd1Y%2BS9yTtfOPvi29gSusx%2FQT%2Fizfbw2ieQ6hdbJULZC%2Bvsw6hu7QSsbIe7qumrYqn1zKQ6jPt%2FtHcolmqyfbTDqqRTpwU1kBLpVJyhGIuqIDu8N%2BB5i2892aqch9vmzh7NIDlzEk%2Flyrv10E7ftXyPU8vCTKaUMsufLptGzQSEQE&X-Amz-Signature=455da9a0fac0a2b277c67ec7e5c9714a6d6ecc4f5901b23e0662ea5a98ed61a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVPAHZJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCoboFnbbsOkM2fi3yvH3opiu4t8A3kWNxqfbhL3lb1QwIge1sx8eRl0PtKGI89Ei3ApeW82pBFoaVslqVg3FloxWcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeQ%2BWi0EVua91TWxircA1aI930aU1guZ9eqZ%2F%2BN9YBNp89q6EOmPLNQ%2FTlOkc2rhSU%2BpQxIg4exO4PpD58o3wawxIVJuMzPvsY4E2rXcgHgFzWd4BuLeARtYjH7QN%2FZ5ebDB1CzianKkQarvrsCryiWwhQ%2Fwm2YEd%2BCUOseXp2jldm81sAqK8iTb26dvifhnEDFMdgLauIriEIA5LLb8FxfSjTGYr5ANp%2FYeCRp5zJRXutOCsH1z2Lszv09s18MRtOUyepEAiU53fDvo2ht8lGz60nk%2B0bAv1%2Bd0LClLbVl2N4z48HRpGeobJTkzOdMYAYc4Z%2FkJ2mm2EyQCDpOC62KPCkbPx1TrnvUMbUWP4MYxS9c0erSg6p%2B1atMGbqXpe2%2FRXfZ3D3KQ4Icwd9QIaDMdMG7VdXV6V7uHWO3V0jEgA80y6IzEAX4glAkoglyHJKojRyJGV%2FlxkFpeCnRrYbq5DoiouV3Pg3s9zQnoC5cPYQm8NhKUuFa62WSMRL41cTBk8t4W6vx%2BdqK4zlqIv5gEmztl2MRv03QLsTLgrOar%2FAWoddSFX06U5PqRtHzGkNIaL2k8Ozb3VXdWedNzMELtQo14YuwbAeU3Q24GfPde3mAXFx6KKwYngvbFbUYhzqSxtWfYeParysuMKHXpMAGOqUBSYfNxow%2Fb%2Fbhy0K94ZWYqGahdQK1JWzZgt%2BE9DDULTKX1QuFd1Y%2BS9yTtfOPvi29gSusx%2FQT%2Fizfbw2ieQ6hdbJULZC%2Bvsw6hu7QSsbIe7qumrYqn1zKQ6jPt%2FtHcolmqyfbTDqqRTpwU1kBLpVJyhGIuqIDu8N%2BB5i2892aqch9vmzh7NIDlzEk%2Flyrv10E7ftXyPU8vCTKaUMsufLptGzQSEQE&X-Amz-Signature=8a40a73bea2a9582df3e1b661f6d3a1e1ea3c7b6cd9731d7d5cfa7093de357a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVPAHZJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCoboFnbbsOkM2fi3yvH3opiu4t8A3kWNxqfbhL3lb1QwIge1sx8eRl0PtKGI89Ei3ApeW82pBFoaVslqVg3FloxWcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeQ%2BWi0EVua91TWxircA1aI930aU1guZ9eqZ%2F%2BN9YBNp89q6EOmPLNQ%2FTlOkc2rhSU%2BpQxIg4exO4PpD58o3wawxIVJuMzPvsY4E2rXcgHgFzWd4BuLeARtYjH7QN%2FZ5ebDB1CzianKkQarvrsCryiWwhQ%2Fwm2YEd%2BCUOseXp2jldm81sAqK8iTb26dvifhnEDFMdgLauIriEIA5LLb8FxfSjTGYr5ANp%2FYeCRp5zJRXutOCsH1z2Lszv09s18MRtOUyepEAiU53fDvo2ht8lGz60nk%2B0bAv1%2Bd0LClLbVl2N4z48HRpGeobJTkzOdMYAYc4Z%2FkJ2mm2EyQCDpOC62KPCkbPx1TrnvUMbUWP4MYxS9c0erSg6p%2B1atMGbqXpe2%2FRXfZ3D3KQ4Icwd9QIaDMdMG7VdXV6V7uHWO3V0jEgA80y6IzEAX4glAkoglyHJKojRyJGV%2FlxkFpeCnRrYbq5DoiouV3Pg3s9zQnoC5cPYQm8NhKUuFa62WSMRL41cTBk8t4W6vx%2BdqK4zlqIv5gEmztl2MRv03QLsTLgrOar%2FAWoddSFX06U5PqRtHzGkNIaL2k8Ozb3VXdWedNzMELtQo14YuwbAeU3Q24GfPde3mAXFx6KKwYngvbFbUYhzqSxtWfYeParysuMKHXpMAGOqUBSYfNxow%2Fb%2Fbhy0K94ZWYqGahdQK1JWzZgt%2BE9DDULTKX1QuFd1Y%2BS9yTtfOPvi29gSusx%2FQT%2Fizfbw2ieQ6hdbJULZC%2Bvsw6hu7QSsbIe7qumrYqn1zKQ6jPt%2FtHcolmqyfbTDqqRTpwU1kBLpVJyhGIuqIDu8N%2BB5i2892aqch9vmzh7NIDlzEk%2Flyrv10E7ftXyPU8vCTKaUMsufLptGzQSEQE&X-Amz-Signature=e793ad8c2754b4cb28a7fb84ba79ebbf13f35dc30ccf168bcd14080dfdff7184&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVPAHZJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCoboFnbbsOkM2fi3yvH3opiu4t8A3kWNxqfbhL3lb1QwIge1sx8eRl0PtKGI89Ei3ApeW82pBFoaVslqVg3FloxWcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeQ%2BWi0EVua91TWxircA1aI930aU1guZ9eqZ%2F%2BN9YBNp89q6EOmPLNQ%2FTlOkc2rhSU%2BpQxIg4exO4PpD58o3wawxIVJuMzPvsY4E2rXcgHgFzWd4BuLeARtYjH7QN%2FZ5ebDB1CzianKkQarvrsCryiWwhQ%2Fwm2YEd%2BCUOseXp2jldm81sAqK8iTb26dvifhnEDFMdgLauIriEIA5LLb8FxfSjTGYr5ANp%2FYeCRp5zJRXutOCsH1z2Lszv09s18MRtOUyepEAiU53fDvo2ht8lGz60nk%2B0bAv1%2Bd0LClLbVl2N4z48HRpGeobJTkzOdMYAYc4Z%2FkJ2mm2EyQCDpOC62KPCkbPx1TrnvUMbUWP4MYxS9c0erSg6p%2B1atMGbqXpe2%2FRXfZ3D3KQ4Icwd9QIaDMdMG7VdXV6V7uHWO3V0jEgA80y6IzEAX4glAkoglyHJKojRyJGV%2FlxkFpeCnRrYbq5DoiouV3Pg3s9zQnoC5cPYQm8NhKUuFa62WSMRL41cTBk8t4W6vx%2BdqK4zlqIv5gEmztl2MRv03QLsTLgrOar%2FAWoddSFX06U5PqRtHzGkNIaL2k8Ozb3VXdWedNzMELtQo14YuwbAeU3Q24GfPde3mAXFx6KKwYngvbFbUYhzqSxtWfYeParysuMKHXpMAGOqUBSYfNxow%2Fb%2Fbhy0K94ZWYqGahdQK1JWzZgt%2BE9DDULTKX1QuFd1Y%2BS9yTtfOPvi29gSusx%2FQT%2Fizfbw2ieQ6hdbJULZC%2Bvsw6hu7QSsbIe7qumrYqn1zKQ6jPt%2FtHcolmqyfbTDqqRTpwU1kBLpVJyhGIuqIDu8N%2BB5i2892aqch9vmzh7NIDlzEk%2Flyrv10E7ftXyPU8vCTKaUMsufLptGzQSEQE&X-Amz-Signature=81c4496773ebb2c63f55814236b1b15f8aa558f39133881ada639ed50aa36c17&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVPAHZJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCoboFnbbsOkM2fi3yvH3opiu4t8A3kWNxqfbhL3lb1QwIge1sx8eRl0PtKGI89Ei3ApeW82pBFoaVslqVg3FloxWcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeQ%2BWi0EVua91TWxircA1aI930aU1guZ9eqZ%2F%2BN9YBNp89q6EOmPLNQ%2FTlOkc2rhSU%2BpQxIg4exO4PpD58o3wawxIVJuMzPvsY4E2rXcgHgFzWd4BuLeARtYjH7QN%2FZ5ebDB1CzianKkQarvrsCryiWwhQ%2Fwm2YEd%2BCUOseXp2jldm81sAqK8iTb26dvifhnEDFMdgLauIriEIA5LLb8FxfSjTGYr5ANp%2FYeCRp5zJRXutOCsH1z2Lszv09s18MRtOUyepEAiU53fDvo2ht8lGz60nk%2B0bAv1%2Bd0LClLbVl2N4z48HRpGeobJTkzOdMYAYc4Z%2FkJ2mm2EyQCDpOC62KPCkbPx1TrnvUMbUWP4MYxS9c0erSg6p%2B1atMGbqXpe2%2FRXfZ3D3KQ4Icwd9QIaDMdMG7VdXV6V7uHWO3V0jEgA80y6IzEAX4glAkoglyHJKojRyJGV%2FlxkFpeCnRrYbq5DoiouV3Pg3s9zQnoC5cPYQm8NhKUuFa62WSMRL41cTBk8t4W6vx%2BdqK4zlqIv5gEmztl2MRv03QLsTLgrOar%2FAWoddSFX06U5PqRtHzGkNIaL2k8Ozb3VXdWedNzMELtQo14YuwbAeU3Q24GfPde3mAXFx6KKwYngvbFbUYhzqSxtWfYeParysuMKHXpMAGOqUBSYfNxow%2Fb%2Fbhy0K94ZWYqGahdQK1JWzZgt%2BE9DDULTKX1QuFd1Y%2BS9yTtfOPvi29gSusx%2FQT%2Fizfbw2ieQ6hdbJULZC%2Bvsw6hu7QSsbIe7qumrYqn1zKQ6jPt%2FtHcolmqyfbTDqqRTpwU1kBLpVJyhGIuqIDu8N%2BB5i2892aqch9vmzh7NIDlzEk%2Flyrv10E7ftXyPU8vCTKaUMsufLptGzQSEQE&X-Amz-Signature=652e55579abde86afecc437867b32f7771b9dfd58c9cd4d6b505233ef45709b1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF7PLQFJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCi4j7AzCEFaiDVRUrm1zKReDClXIF0G9yOL2lV2t%2FV7QIgcR1ib2gau%2Bz6mLXTt%2BvDSPuQ8OmRmvqanTQ9qfCQ5IEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFrjED6llnIob2SG%2FyrcA6ZJjKtRwXOJGgMi0btAhZVGIBlgz7LVVrmNqYJLLSHuwhrxFCrDWdGC5toxOJW3k%2Bon%2BQs9G1t6BHBQ93lP8GQczttaA5d8QSLtyZnb6HdPAD17NPDll4sNH2obo5nPeifZG87Glq3yDjMAJ7Pn7QhspEDYD%2F8EPMGMl%2F%2FZuJwbWYl3LokmdFp21Ca60bjZL5V2NAY%2Bp5FysoGTEcB9VbUz9xGoWv4fZCos6AKk7VhQucFKPmgt2WQcradMC2UhnsFRRjeARIb%2FXZDq5qJk13xfehcjMmnzpbHsoxDQrrGe3nH8l2ls5S%2Fb1Mf%2FiG6wGZlFqKG0rxrwMGTPuDN%2B%2F4LRRIz32NhtN0GL1jkaD%2B9EgF0t5LMu7eTasoUoiGVZRgB8m8HnVlvhSQG3UBAA0Ec9mL1Ey0Q2t6I9ud9AawTpRj%2BFYGmbTNtGU9fNctjM%2FZAqliKs5sHq3qun9WHDN8%2FXcBSXjiExZEd%2F8hnSi54v%2FjwWng%2F4MwJDaPBjJtT7Rt3z0VncW%2FIasRFHYGmsZPNpfSVlakwkWyk2dJPcVe8ANYqJ53Xny7EQAiket5htG7lovpk5gW%2FFCtE%2BYykSPSQ%2FlUyqROuyTxMNBhdZZ%2Btyh8TIMASaCFTl41lMMJKTisIGOqUBvl9c03Qu9OBCesL9huuk9kkrbRmK3oUujlCR9U9cWArt9vbUdBP5VK1uHsXhIo7%2BaBXsG2rx%2Fjs3OMIiSuNZfdk8NYBqxOMVXNCAJh0god5CUKglYRMFf6FVkLZIfApAICSAbdqifrNZ2MA5wcsrgp13SbBgm%2BbMY0I7UVxBpMoLkB6UZEa5oYXj6y0obqlN2TkZmPsEprffS6AQKWZhLE4Z66h0&X-Amz-Signature=4c3549a8fe7be48550608d3302a57fe281459922753bbd406c1f63af2a4e0dee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF7PLQFJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCi4j7AzCEFaiDVRUrm1zKReDClXIF0G9yOL2lV2t%2FV7QIgcR1ib2gau%2Bz6mLXTt%2BvDSPuQ8OmRmvqanTQ9qfCQ5IEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFrjED6llnIob2SG%2FyrcA6ZJjKtRwXOJGgMi0btAhZVGIBlgz7LVVrmNqYJLLSHuwhrxFCrDWdGC5toxOJW3k%2Bon%2BQs9G1t6BHBQ93lP8GQczttaA5d8QSLtyZnb6HdPAD17NPDll4sNH2obo5nPeifZG87Glq3yDjMAJ7Pn7QhspEDYD%2F8EPMGMl%2F%2FZuJwbWYl3LokmdFp21Ca60bjZL5V2NAY%2Bp5FysoGTEcB9VbUz9xGoWv4fZCos6AKk7VhQucFKPmgt2WQcradMC2UhnsFRRjeARIb%2FXZDq5qJk13xfehcjMmnzpbHsoxDQrrGe3nH8l2ls5S%2Fb1Mf%2FiG6wGZlFqKG0rxrwMGTPuDN%2B%2F4LRRIz32NhtN0GL1jkaD%2B9EgF0t5LMu7eTasoUoiGVZRgB8m8HnVlvhSQG3UBAA0Ec9mL1Ey0Q2t6I9ud9AawTpRj%2BFYGmbTNtGU9fNctjM%2FZAqliKs5sHq3qun9WHDN8%2FXcBSXjiExZEd%2F8hnSi54v%2FjwWng%2F4MwJDaPBjJtT7Rt3z0VncW%2FIasRFHYGmsZPNpfSVlakwkWyk2dJPcVe8ANYqJ53Xny7EQAiket5htG7lovpk5gW%2FFCtE%2BYykSPSQ%2FlUyqROuyTxMNBhdZZ%2Btyh8TIMASaCFTl41lMMJKTisIGOqUBvl9c03Qu9OBCesL9huuk9kkrbRmK3oUujlCR9U9cWArt9vbUdBP5VK1uHsXhIo7%2BaBXsG2rx%2Fjs3OMIiSuNZfdk8NYBqxOMVXNCAJh0god5CUKglYRMFf6FVkLZIfApAICSAbdqifrNZ2MA5wcsrgp13SbBgm%2BbMY0I7UVxBpMoLkB6UZEa5oYXj6y0obqlN2TkZmPsEprffS6AQKWZhLE4Z66h0&X-Amz-Signature=e16b036bbc2d297664e0593ef26e1498e37664b84abfb10185e4ad89aecf4aba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF7PLQFJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCi4j7AzCEFaiDVRUrm1zKReDClXIF0G9yOL2lV2t%2FV7QIgcR1ib2gau%2Bz6mLXTt%2BvDSPuQ8OmRmvqanTQ9qfCQ5IEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFrjED6llnIob2SG%2FyrcA6ZJjKtRwXOJGgMi0btAhZVGIBlgz7LVVrmNqYJLLSHuwhrxFCrDWdGC5toxOJW3k%2Bon%2BQs9G1t6BHBQ93lP8GQczttaA5d8QSLtyZnb6HdPAD17NPDll4sNH2obo5nPeifZG87Glq3yDjMAJ7Pn7QhspEDYD%2F8EPMGMl%2F%2FZuJwbWYl3LokmdFp21Ca60bjZL5V2NAY%2Bp5FysoGTEcB9VbUz9xGoWv4fZCos6AKk7VhQucFKPmgt2WQcradMC2UhnsFRRjeARIb%2FXZDq5qJk13xfehcjMmnzpbHsoxDQrrGe3nH8l2ls5S%2Fb1Mf%2FiG6wGZlFqKG0rxrwMGTPuDN%2B%2F4LRRIz32NhtN0GL1jkaD%2B9EgF0t5LMu7eTasoUoiGVZRgB8m8HnVlvhSQG3UBAA0Ec9mL1Ey0Q2t6I9ud9AawTpRj%2BFYGmbTNtGU9fNctjM%2FZAqliKs5sHq3qun9WHDN8%2FXcBSXjiExZEd%2F8hnSi54v%2FjwWng%2F4MwJDaPBjJtT7Rt3z0VncW%2FIasRFHYGmsZPNpfSVlakwkWyk2dJPcVe8ANYqJ53Xny7EQAiket5htG7lovpk5gW%2FFCtE%2BYykSPSQ%2FlUyqROuyTxMNBhdZZ%2Btyh8TIMASaCFTl41lMMJKTisIGOqUBvl9c03Qu9OBCesL9huuk9kkrbRmK3oUujlCR9U9cWArt9vbUdBP5VK1uHsXhIo7%2BaBXsG2rx%2Fjs3OMIiSuNZfdk8NYBqxOMVXNCAJh0god5CUKglYRMFf6FVkLZIfApAICSAbdqifrNZ2MA5wcsrgp13SbBgm%2BbMY0I7UVxBpMoLkB6UZEa5oYXj6y0obqlN2TkZmPsEprffS6AQKWZhLE4Z66h0&X-Amz-Signature=abea7f366c2354ee1f9c50a7a2d2e321536ba8cc8fc3de735107027beaf6d44a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF7PLQFJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCi4j7AzCEFaiDVRUrm1zKReDClXIF0G9yOL2lV2t%2FV7QIgcR1ib2gau%2Bz6mLXTt%2BvDSPuQ8OmRmvqanTQ9qfCQ5IEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFrjED6llnIob2SG%2FyrcA6ZJjKtRwXOJGgMi0btAhZVGIBlgz7LVVrmNqYJLLSHuwhrxFCrDWdGC5toxOJW3k%2Bon%2BQs9G1t6BHBQ93lP8GQczttaA5d8QSLtyZnb6HdPAD17NPDll4sNH2obo5nPeifZG87Glq3yDjMAJ7Pn7QhspEDYD%2F8EPMGMl%2F%2FZuJwbWYl3LokmdFp21Ca60bjZL5V2NAY%2Bp5FysoGTEcB9VbUz9xGoWv4fZCos6AKk7VhQucFKPmgt2WQcradMC2UhnsFRRjeARIb%2FXZDq5qJk13xfehcjMmnzpbHsoxDQrrGe3nH8l2ls5S%2Fb1Mf%2FiG6wGZlFqKG0rxrwMGTPuDN%2B%2F4LRRIz32NhtN0GL1jkaD%2B9EgF0t5LMu7eTasoUoiGVZRgB8m8HnVlvhSQG3UBAA0Ec9mL1Ey0Q2t6I9ud9AawTpRj%2BFYGmbTNtGU9fNctjM%2FZAqliKs5sHq3qun9WHDN8%2FXcBSXjiExZEd%2F8hnSi54v%2FjwWng%2F4MwJDaPBjJtT7Rt3z0VncW%2FIasRFHYGmsZPNpfSVlakwkWyk2dJPcVe8ANYqJ53Xny7EQAiket5htG7lovpk5gW%2FFCtE%2BYykSPSQ%2FlUyqROuyTxMNBhdZZ%2Btyh8TIMASaCFTl41lMMJKTisIGOqUBvl9c03Qu9OBCesL9huuk9kkrbRmK3oUujlCR9U9cWArt9vbUdBP5VK1uHsXhIo7%2BaBXsG2rx%2Fjs3OMIiSuNZfdk8NYBqxOMVXNCAJh0god5CUKglYRMFf6FVkLZIfApAICSAbdqifrNZ2MA5wcsrgp13SbBgm%2BbMY0I7UVxBpMoLkB6UZEa5oYXj6y0obqlN2TkZmPsEprffS6AQKWZhLE4Z66h0&X-Amz-Signature=379baaef29e7651524b91c6fa765fb0b1121d72a18e7da198c2877cfea8b43b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF7PLQFJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCi4j7AzCEFaiDVRUrm1zKReDClXIF0G9yOL2lV2t%2FV7QIgcR1ib2gau%2Bz6mLXTt%2BvDSPuQ8OmRmvqanTQ9qfCQ5IEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFrjED6llnIob2SG%2FyrcA6ZJjKtRwXOJGgMi0btAhZVGIBlgz7LVVrmNqYJLLSHuwhrxFCrDWdGC5toxOJW3k%2Bon%2BQs9G1t6BHBQ93lP8GQczttaA5d8QSLtyZnb6HdPAD17NPDll4sNH2obo5nPeifZG87Glq3yDjMAJ7Pn7QhspEDYD%2F8EPMGMl%2F%2FZuJwbWYl3LokmdFp21Ca60bjZL5V2NAY%2Bp5FysoGTEcB9VbUz9xGoWv4fZCos6AKk7VhQucFKPmgt2WQcradMC2UhnsFRRjeARIb%2FXZDq5qJk13xfehcjMmnzpbHsoxDQrrGe3nH8l2ls5S%2Fb1Mf%2FiG6wGZlFqKG0rxrwMGTPuDN%2B%2F4LRRIz32NhtN0GL1jkaD%2B9EgF0t5LMu7eTasoUoiGVZRgB8m8HnVlvhSQG3UBAA0Ec9mL1Ey0Q2t6I9ud9AawTpRj%2BFYGmbTNtGU9fNctjM%2FZAqliKs5sHq3qun9WHDN8%2FXcBSXjiExZEd%2F8hnSi54v%2FjwWng%2F4MwJDaPBjJtT7Rt3z0VncW%2FIasRFHYGmsZPNpfSVlakwkWyk2dJPcVe8ANYqJ53Xny7EQAiket5htG7lovpk5gW%2FFCtE%2BYykSPSQ%2FlUyqROuyTxMNBhdZZ%2Btyh8TIMASaCFTl41lMMJKTisIGOqUBvl9c03Qu9OBCesL9huuk9kkrbRmK3oUujlCR9U9cWArt9vbUdBP5VK1uHsXhIo7%2BaBXsG2rx%2Fjs3OMIiSuNZfdk8NYBqxOMVXNCAJh0god5CUKglYRMFf6FVkLZIfApAICSAbdqifrNZ2MA5wcsrgp13SbBgm%2BbMY0I7UVxBpMoLkB6UZEa5oYXj6y0obqlN2TkZmPsEprffS6AQKWZhLE4Z66h0&X-Amz-Signature=841086fa4cdafd932252a1e5da0991eb4155c8735f36d032c4ee9a92dfbdf889&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF7PLQFJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCi4j7AzCEFaiDVRUrm1zKReDClXIF0G9yOL2lV2t%2FV7QIgcR1ib2gau%2Bz6mLXTt%2BvDSPuQ8OmRmvqanTQ9qfCQ5IEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFrjED6llnIob2SG%2FyrcA6ZJjKtRwXOJGgMi0btAhZVGIBlgz7LVVrmNqYJLLSHuwhrxFCrDWdGC5toxOJW3k%2Bon%2BQs9G1t6BHBQ93lP8GQczttaA5d8QSLtyZnb6HdPAD17NPDll4sNH2obo5nPeifZG87Glq3yDjMAJ7Pn7QhspEDYD%2F8EPMGMl%2F%2FZuJwbWYl3LokmdFp21Ca60bjZL5V2NAY%2Bp5FysoGTEcB9VbUz9xGoWv4fZCos6AKk7VhQucFKPmgt2WQcradMC2UhnsFRRjeARIb%2FXZDq5qJk13xfehcjMmnzpbHsoxDQrrGe3nH8l2ls5S%2Fb1Mf%2FiG6wGZlFqKG0rxrwMGTPuDN%2B%2F4LRRIz32NhtN0GL1jkaD%2B9EgF0t5LMu7eTasoUoiGVZRgB8m8HnVlvhSQG3UBAA0Ec9mL1Ey0Q2t6I9ud9AawTpRj%2BFYGmbTNtGU9fNctjM%2FZAqliKs5sHq3qun9WHDN8%2FXcBSXjiExZEd%2F8hnSi54v%2FjwWng%2F4MwJDaPBjJtT7Rt3z0VncW%2FIasRFHYGmsZPNpfSVlakwkWyk2dJPcVe8ANYqJ53Xny7EQAiket5htG7lovpk5gW%2FFCtE%2BYykSPSQ%2FlUyqROuyTxMNBhdZZ%2Btyh8TIMASaCFTl41lMMJKTisIGOqUBvl9c03Qu9OBCesL9huuk9kkrbRmK3oUujlCR9U9cWArt9vbUdBP5VK1uHsXhIo7%2BaBXsG2rx%2Fjs3OMIiSuNZfdk8NYBqxOMVXNCAJh0god5CUKglYRMFf6FVkLZIfApAICSAbdqifrNZ2MA5wcsrgp13SbBgm%2BbMY0I7UVxBpMoLkB6UZEa5oYXj6y0obqlN2TkZmPsEprffS6AQKWZhLE4Z66h0&X-Amz-Signature=71bed117179006e7551e7886473757086efa62edcf12e34d8c27c184b62e699c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF7PLQFJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCi4j7AzCEFaiDVRUrm1zKReDClXIF0G9yOL2lV2t%2FV7QIgcR1ib2gau%2Bz6mLXTt%2BvDSPuQ8OmRmvqanTQ9qfCQ5IEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFrjED6llnIob2SG%2FyrcA6ZJjKtRwXOJGgMi0btAhZVGIBlgz7LVVrmNqYJLLSHuwhrxFCrDWdGC5toxOJW3k%2Bon%2BQs9G1t6BHBQ93lP8GQczttaA5d8QSLtyZnb6HdPAD17NPDll4sNH2obo5nPeifZG87Glq3yDjMAJ7Pn7QhspEDYD%2F8EPMGMl%2F%2FZuJwbWYl3LokmdFp21Ca60bjZL5V2NAY%2Bp5FysoGTEcB9VbUz9xGoWv4fZCos6AKk7VhQucFKPmgt2WQcradMC2UhnsFRRjeARIb%2FXZDq5qJk13xfehcjMmnzpbHsoxDQrrGe3nH8l2ls5S%2Fb1Mf%2FiG6wGZlFqKG0rxrwMGTPuDN%2B%2F4LRRIz32NhtN0GL1jkaD%2B9EgF0t5LMu7eTasoUoiGVZRgB8m8HnVlvhSQG3UBAA0Ec9mL1Ey0Q2t6I9ud9AawTpRj%2BFYGmbTNtGU9fNctjM%2FZAqliKs5sHq3qun9WHDN8%2FXcBSXjiExZEd%2F8hnSi54v%2FjwWng%2F4MwJDaPBjJtT7Rt3z0VncW%2FIasRFHYGmsZPNpfSVlakwkWyk2dJPcVe8ANYqJ53Xny7EQAiket5htG7lovpk5gW%2FFCtE%2BYykSPSQ%2FlUyqROuyTxMNBhdZZ%2Btyh8TIMASaCFTl41lMMJKTisIGOqUBvl9c03Qu9OBCesL9huuk9kkrbRmK3oUujlCR9U9cWArt9vbUdBP5VK1uHsXhIo7%2BaBXsG2rx%2Fjs3OMIiSuNZfdk8NYBqxOMVXNCAJh0god5CUKglYRMFf6FVkLZIfApAICSAbdqifrNZ2MA5wcsrgp13SbBgm%2BbMY0I7UVxBpMoLkB6UZEa5oYXj6y0obqlN2TkZmPsEprffS6AQKWZhLE4Z66h0&X-Amz-Signature=6b72d9852f825c5156034ceaa28c60f884d2d28b78ff296cb89b35af8aa663c0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

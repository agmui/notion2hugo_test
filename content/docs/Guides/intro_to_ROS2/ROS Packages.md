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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINBWPD5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqWRngdjWj7X%2BWgoc1qx5Y8nzjyndNfsjSv5leAFkzuAiBN2qZN76O8Eo8g2zXP1%2FOkd4vtAZzSDu4T4Zuuejk9OSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJBGRYXP%2BIV315JHKtwDamjRBoMiJmqKEqQGR1Xf1U9f7tB%2Bq7FNZEbaKD2x5go0rakrdYQtZX5lG%2FhZLBcaQ4Wxsxw1Lcoj7VkRL%2FzF%2BX5Yy2dYneTjqDeh8TtPDqpwpqWpPg4v33qVpSbwpgXf1FuGXtU1pvQomuc9Z0I0oWPwBDiE6YrbM%2FAvApL4AhoLtUjumiHNwiXxH1OelbidTbHFkJzlkFWSBnV4Ldq01PY%2B4hwxvaNoRu%2BfomgVHkoWjLNtWLMcf2qve2XVV45vKfyj7mvFPKN5EybxMEjTjF0oAD4lg5U7BY9cegGMBTjP7VaAq3XpLyOItRflJH9VjLJTAttkG3WNWTEWohD0TecqGckYrBl5ulRO7xjSEZB68%2BgbrUqjWvBwzFqy02ZytjzdugcPpFUNLCwhsIHf40QxpuNrrPSTQsMxUVnsoSVSa7%2BpX5fDI0Qtqvg7mb8oRfIAiFGGHav2KTAGrzaglVN4qg2LOjfxhY%2FDlv1SUrh9kKZmbZp%2B0NZ9nYK39hO4p75%2BBmm04IyuTdVXIg4%2BJBg8YCtC7LxKGfVhMU3t10bS%2BLgnI0%2FHm1znDMD9wSJ8XJyR1cqZTWtml%2FRSuEUAmOVp5WIXNa1CkFHGZUEYQfLdECpZMMXxvh8vWwYw4a2xwQY6pgGNhfpTg%2FB5db9GQMyC4wl2WdNU754U66vd8dmM%2FPWAndn837bzjCJ3bnSeVFpsR%2BfgwtKE6bhojDgV%2FKxbV2a1oL0HPCP%2Fbm0zlyFr4Uqot8FDoJ7cyxqFqaoTomtAjnzMh5ySEQeaREHXIs8o4VU7yc4pTk%2B7VGK7ZyJKNDR5SSj%2ByZgpmI2a4HRqcOqwEwBQUiWThc7Mfs6Yng%2BMM0wlX4XcN5hh&X-Amz-Signature=a0233db21743c613a32e295641bafb491548128a6edc607a3cf20c4634e86f28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINBWPD5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqWRngdjWj7X%2BWgoc1qx5Y8nzjyndNfsjSv5leAFkzuAiBN2qZN76O8Eo8g2zXP1%2FOkd4vtAZzSDu4T4Zuuejk9OSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJBGRYXP%2BIV315JHKtwDamjRBoMiJmqKEqQGR1Xf1U9f7tB%2Bq7FNZEbaKD2x5go0rakrdYQtZX5lG%2FhZLBcaQ4Wxsxw1Lcoj7VkRL%2FzF%2BX5Yy2dYneTjqDeh8TtPDqpwpqWpPg4v33qVpSbwpgXf1FuGXtU1pvQomuc9Z0I0oWPwBDiE6YrbM%2FAvApL4AhoLtUjumiHNwiXxH1OelbidTbHFkJzlkFWSBnV4Ldq01PY%2B4hwxvaNoRu%2BfomgVHkoWjLNtWLMcf2qve2XVV45vKfyj7mvFPKN5EybxMEjTjF0oAD4lg5U7BY9cegGMBTjP7VaAq3XpLyOItRflJH9VjLJTAttkG3WNWTEWohD0TecqGckYrBl5ulRO7xjSEZB68%2BgbrUqjWvBwzFqy02ZytjzdugcPpFUNLCwhsIHf40QxpuNrrPSTQsMxUVnsoSVSa7%2BpX5fDI0Qtqvg7mb8oRfIAiFGGHav2KTAGrzaglVN4qg2LOjfxhY%2FDlv1SUrh9kKZmbZp%2B0NZ9nYK39hO4p75%2BBmm04IyuTdVXIg4%2BJBg8YCtC7LxKGfVhMU3t10bS%2BLgnI0%2FHm1znDMD9wSJ8XJyR1cqZTWtml%2FRSuEUAmOVp5WIXNa1CkFHGZUEYQfLdECpZMMXxvh8vWwYw4a2xwQY6pgGNhfpTg%2FB5db9GQMyC4wl2WdNU754U66vd8dmM%2FPWAndn837bzjCJ3bnSeVFpsR%2BfgwtKE6bhojDgV%2FKxbV2a1oL0HPCP%2Fbm0zlyFr4Uqot8FDoJ7cyxqFqaoTomtAjnzMh5ySEQeaREHXIs8o4VU7yc4pTk%2B7VGK7ZyJKNDR5SSj%2ByZgpmI2a4HRqcOqwEwBQUiWThc7Mfs6Yng%2BMM0wlX4XcN5hh&X-Amz-Signature=9cdc4c378a0722c5291bac9ee8de8452f07f2ad2bbaa68ab5f31882ca4042f30&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINBWPD5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqWRngdjWj7X%2BWgoc1qx5Y8nzjyndNfsjSv5leAFkzuAiBN2qZN76O8Eo8g2zXP1%2FOkd4vtAZzSDu4T4Zuuejk9OSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJBGRYXP%2BIV315JHKtwDamjRBoMiJmqKEqQGR1Xf1U9f7tB%2Bq7FNZEbaKD2x5go0rakrdYQtZX5lG%2FhZLBcaQ4Wxsxw1Lcoj7VkRL%2FzF%2BX5Yy2dYneTjqDeh8TtPDqpwpqWpPg4v33qVpSbwpgXf1FuGXtU1pvQomuc9Z0I0oWPwBDiE6YrbM%2FAvApL4AhoLtUjumiHNwiXxH1OelbidTbHFkJzlkFWSBnV4Ldq01PY%2B4hwxvaNoRu%2BfomgVHkoWjLNtWLMcf2qve2XVV45vKfyj7mvFPKN5EybxMEjTjF0oAD4lg5U7BY9cegGMBTjP7VaAq3XpLyOItRflJH9VjLJTAttkG3WNWTEWohD0TecqGckYrBl5ulRO7xjSEZB68%2BgbrUqjWvBwzFqy02ZytjzdugcPpFUNLCwhsIHf40QxpuNrrPSTQsMxUVnsoSVSa7%2BpX5fDI0Qtqvg7mb8oRfIAiFGGHav2KTAGrzaglVN4qg2LOjfxhY%2FDlv1SUrh9kKZmbZp%2B0NZ9nYK39hO4p75%2BBmm04IyuTdVXIg4%2BJBg8YCtC7LxKGfVhMU3t10bS%2BLgnI0%2FHm1znDMD9wSJ8XJyR1cqZTWtml%2FRSuEUAmOVp5WIXNa1CkFHGZUEYQfLdECpZMMXxvh8vWwYw4a2xwQY6pgGNhfpTg%2FB5db9GQMyC4wl2WdNU754U66vd8dmM%2FPWAndn837bzjCJ3bnSeVFpsR%2BfgwtKE6bhojDgV%2FKxbV2a1oL0HPCP%2Fbm0zlyFr4Uqot8FDoJ7cyxqFqaoTomtAjnzMh5ySEQeaREHXIs8o4VU7yc4pTk%2B7VGK7ZyJKNDR5SSj%2ByZgpmI2a4HRqcOqwEwBQUiWThc7Mfs6Yng%2BMM0wlX4XcN5hh&X-Amz-Signature=2a43505fa284557a115f070df000e6959118203d8361654ccbad37afee676dec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINBWPD5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqWRngdjWj7X%2BWgoc1qx5Y8nzjyndNfsjSv5leAFkzuAiBN2qZN76O8Eo8g2zXP1%2FOkd4vtAZzSDu4T4Zuuejk9OSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJBGRYXP%2BIV315JHKtwDamjRBoMiJmqKEqQGR1Xf1U9f7tB%2Bq7FNZEbaKD2x5go0rakrdYQtZX5lG%2FhZLBcaQ4Wxsxw1Lcoj7VkRL%2FzF%2BX5Yy2dYneTjqDeh8TtPDqpwpqWpPg4v33qVpSbwpgXf1FuGXtU1pvQomuc9Z0I0oWPwBDiE6YrbM%2FAvApL4AhoLtUjumiHNwiXxH1OelbidTbHFkJzlkFWSBnV4Ldq01PY%2B4hwxvaNoRu%2BfomgVHkoWjLNtWLMcf2qve2XVV45vKfyj7mvFPKN5EybxMEjTjF0oAD4lg5U7BY9cegGMBTjP7VaAq3XpLyOItRflJH9VjLJTAttkG3WNWTEWohD0TecqGckYrBl5ulRO7xjSEZB68%2BgbrUqjWvBwzFqy02ZytjzdugcPpFUNLCwhsIHf40QxpuNrrPSTQsMxUVnsoSVSa7%2BpX5fDI0Qtqvg7mb8oRfIAiFGGHav2KTAGrzaglVN4qg2LOjfxhY%2FDlv1SUrh9kKZmbZp%2B0NZ9nYK39hO4p75%2BBmm04IyuTdVXIg4%2BJBg8YCtC7LxKGfVhMU3t10bS%2BLgnI0%2FHm1znDMD9wSJ8XJyR1cqZTWtml%2FRSuEUAmOVp5WIXNa1CkFHGZUEYQfLdECpZMMXxvh8vWwYw4a2xwQY6pgGNhfpTg%2FB5db9GQMyC4wl2WdNU754U66vd8dmM%2FPWAndn837bzjCJ3bnSeVFpsR%2BfgwtKE6bhojDgV%2FKxbV2a1oL0HPCP%2Fbm0zlyFr4Uqot8FDoJ7cyxqFqaoTomtAjnzMh5ySEQeaREHXIs8o4VU7yc4pTk%2B7VGK7ZyJKNDR5SSj%2ByZgpmI2a4HRqcOqwEwBQUiWThc7Mfs6Yng%2BMM0wlX4XcN5hh&X-Amz-Signature=4eb850c85cd99c10da4d8862883b6892fed8b0bf86c5225346ac46f3836fac77&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINBWPD5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqWRngdjWj7X%2BWgoc1qx5Y8nzjyndNfsjSv5leAFkzuAiBN2qZN76O8Eo8g2zXP1%2FOkd4vtAZzSDu4T4Zuuejk9OSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJBGRYXP%2BIV315JHKtwDamjRBoMiJmqKEqQGR1Xf1U9f7tB%2Bq7FNZEbaKD2x5go0rakrdYQtZX5lG%2FhZLBcaQ4Wxsxw1Lcoj7VkRL%2FzF%2BX5Yy2dYneTjqDeh8TtPDqpwpqWpPg4v33qVpSbwpgXf1FuGXtU1pvQomuc9Z0I0oWPwBDiE6YrbM%2FAvApL4AhoLtUjumiHNwiXxH1OelbidTbHFkJzlkFWSBnV4Ldq01PY%2B4hwxvaNoRu%2BfomgVHkoWjLNtWLMcf2qve2XVV45vKfyj7mvFPKN5EybxMEjTjF0oAD4lg5U7BY9cegGMBTjP7VaAq3XpLyOItRflJH9VjLJTAttkG3WNWTEWohD0TecqGckYrBl5ulRO7xjSEZB68%2BgbrUqjWvBwzFqy02ZytjzdugcPpFUNLCwhsIHf40QxpuNrrPSTQsMxUVnsoSVSa7%2BpX5fDI0Qtqvg7mb8oRfIAiFGGHav2KTAGrzaglVN4qg2LOjfxhY%2FDlv1SUrh9kKZmbZp%2B0NZ9nYK39hO4p75%2BBmm04IyuTdVXIg4%2BJBg8YCtC7LxKGfVhMU3t10bS%2BLgnI0%2FHm1znDMD9wSJ8XJyR1cqZTWtml%2FRSuEUAmOVp5WIXNa1CkFHGZUEYQfLdECpZMMXxvh8vWwYw4a2xwQY6pgGNhfpTg%2FB5db9GQMyC4wl2WdNU754U66vd8dmM%2FPWAndn837bzjCJ3bnSeVFpsR%2BfgwtKE6bhojDgV%2FKxbV2a1oL0HPCP%2Fbm0zlyFr4Uqot8FDoJ7cyxqFqaoTomtAjnzMh5ySEQeaREHXIs8o4VU7yc4pTk%2B7VGK7ZyJKNDR5SSj%2ByZgpmI2a4HRqcOqwEwBQUiWThc7Mfs6Yng%2BMM0wlX4XcN5hh&X-Amz-Signature=f8f0af446b13c7420ed160667320b55efcb078683c263fcbb4e31f109f819ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINBWPD5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqWRngdjWj7X%2BWgoc1qx5Y8nzjyndNfsjSv5leAFkzuAiBN2qZN76O8Eo8g2zXP1%2FOkd4vtAZzSDu4T4Zuuejk9OSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJBGRYXP%2BIV315JHKtwDamjRBoMiJmqKEqQGR1Xf1U9f7tB%2Bq7FNZEbaKD2x5go0rakrdYQtZX5lG%2FhZLBcaQ4Wxsxw1Lcoj7VkRL%2FzF%2BX5Yy2dYneTjqDeh8TtPDqpwpqWpPg4v33qVpSbwpgXf1FuGXtU1pvQomuc9Z0I0oWPwBDiE6YrbM%2FAvApL4AhoLtUjumiHNwiXxH1OelbidTbHFkJzlkFWSBnV4Ldq01PY%2B4hwxvaNoRu%2BfomgVHkoWjLNtWLMcf2qve2XVV45vKfyj7mvFPKN5EybxMEjTjF0oAD4lg5U7BY9cegGMBTjP7VaAq3XpLyOItRflJH9VjLJTAttkG3WNWTEWohD0TecqGckYrBl5ulRO7xjSEZB68%2BgbrUqjWvBwzFqy02ZytjzdugcPpFUNLCwhsIHf40QxpuNrrPSTQsMxUVnsoSVSa7%2BpX5fDI0Qtqvg7mb8oRfIAiFGGHav2KTAGrzaglVN4qg2LOjfxhY%2FDlv1SUrh9kKZmbZp%2B0NZ9nYK39hO4p75%2BBmm04IyuTdVXIg4%2BJBg8YCtC7LxKGfVhMU3t10bS%2BLgnI0%2FHm1znDMD9wSJ8XJyR1cqZTWtml%2FRSuEUAmOVp5WIXNa1CkFHGZUEYQfLdECpZMMXxvh8vWwYw4a2xwQY6pgGNhfpTg%2FB5db9GQMyC4wl2WdNU754U66vd8dmM%2FPWAndn837bzjCJ3bnSeVFpsR%2BfgwtKE6bhojDgV%2FKxbV2a1oL0HPCP%2Fbm0zlyFr4Uqot8FDoJ7cyxqFqaoTomtAjnzMh5ySEQeaREHXIs8o4VU7yc4pTk%2B7VGK7ZyJKNDR5SSj%2ByZgpmI2a4HRqcOqwEwBQUiWThc7Mfs6Yng%2BMM0wlX4XcN5hh&X-Amz-Signature=8fe97a77ef34c9f3ab2105b118fdeaa7526c39c0d1ec4c4a2ef6328c7d19b126&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINBWPD5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqWRngdjWj7X%2BWgoc1qx5Y8nzjyndNfsjSv5leAFkzuAiBN2qZN76O8Eo8g2zXP1%2FOkd4vtAZzSDu4T4Zuuejk9OSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJBGRYXP%2BIV315JHKtwDamjRBoMiJmqKEqQGR1Xf1U9f7tB%2Bq7FNZEbaKD2x5go0rakrdYQtZX5lG%2FhZLBcaQ4Wxsxw1Lcoj7VkRL%2FzF%2BX5Yy2dYneTjqDeh8TtPDqpwpqWpPg4v33qVpSbwpgXf1FuGXtU1pvQomuc9Z0I0oWPwBDiE6YrbM%2FAvApL4AhoLtUjumiHNwiXxH1OelbidTbHFkJzlkFWSBnV4Ldq01PY%2B4hwxvaNoRu%2BfomgVHkoWjLNtWLMcf2qve2XVV45vKfyj7mvFPKN5EybxMEjTjF0oAD4lg5U7BY9cegGMBTjP7VaAq3XpLyOItRflJH9VjLJTAttkG3WNWTEWohD0TecqGckYrBl5ulRO7xjSEZB68%2BgbrUqjWvBwzFqy02ZytjzdugcPpFUNLCwhsIHf40QxpuNrrPSTQsMxUVnsoSVSa7%2BpX5fDI0Qtqvg7mb8oRfIAiFGGHav2KTAGrzaglVN4qg2LOjfxhY%2FDlv1SUrh9kKZmbZp%2B0NZ9nYK39hO4p75%2BBmm04IyuTdVXIg4%2BJBg8YCtC7LxKGfVhMU3t10bS%2BLgnI0%2FHm1znDMD9wSJ8XJyR1cqZTWtml%2FRSuEUAmOVp5WIXNa1CkFHGZUEYQfLdECpZMMXxvh8vWwYw4a2xwQY6pgGNhfpTg%2FB5db9GQMyC4wl2WdNU754U66vd8dmM%2FPWAndn837bzjCJ3bnSeVFpsR%2BfgwtKE6bhojDgV%2FKxbV2a1oL0HPCP%2Fbm0zlyFr4Uqot8FDoJ7cyxqFqaoTomtAjnzMh5ySEQeaREHXIs8o4VU7yc4pTk%2B7VGK7ZyJKNDR5SSj%2ByZgpmI2a4HRqcOqwEwBQUiWThc7Mfs6Yng%2BMM0wlX4XcN5hh&X-Amz-Signature=2afad67eda5def9589982e23b4baacc39280336a29851e34a5e461d994eabc7e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

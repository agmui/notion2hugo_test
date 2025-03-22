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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CLQIH5X%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDo2TisiDcQH5N76dUEQbhVHe5rrnuV4vXCrh0VSu1h%2BAIhAOe1t6UMHx9x3%2FDdrC%2BovmRTKtmrK4i2Wbl4OVgdnAYqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxby%2BIiWVcHebIovD8q3AO6IUJFFrNZWHJB9p0UbBfB2GVO78guVJsDhne%2BVivvIQUOs%2FhBRe%2F4bdFjPSeZsIBWNnalEBAWuoM70nJWC8vBFPMgXI0hmgRBpD5UEXqVHInp9sx1wbMWSy9Rjy2%2B89Jn8x0I4TD27BExl1TJcLX5kQuzpmWuD2CHAtITy59pP9vqZ6iA%2Bf16SRhVu4SLnDjvW%2B4CnnT9%2FCnzkwO9E58nPP7wKordVIVCk%2FBi20g2adAw27dupjnYMlGTNmFGIalAy9YzHZ86mhuA0jcQFUuVpSJqb5aGosYVcxfyfJcQv6gK1GZgF4IJYI0iVeHwDSJTO0pwO2tkabP0ZPq00IfmQUZ%2FMtclZ2y%2FDs8fDjsbyXMh0MhCz09rz3DT2KqsWTDkxRsOS5zVcSaWos%2FoFVcho6YuQ%2F9W%2BtnK4A2vp1dSNJDbxJ5YwcHK00g0fWADROuXr%2FDPGhtWkLFm0HhkGoUaINwO9FN1SHH%2Fv4SrYxKsvrBP5Haz5o8QXSnM0HNEAugzfRVbD0p%2FQB%2F6DkRq1GbFmnRuipYZPG3Yc7BCJ0l%2BGjCyDMDa8%2FjTj1KpHOd1LIqoqK%2BywL5ke%2FeGhx79sw5Vcsr05xTH9XnM4ZTFEfqkq%2Fhz0rV4fXX7ZkI8mDD0mfi%2BBjqkAZ8Xpqo4R3uOEBhLZRNbr%2BGYeqwXcsuS9B3Yi9SFm7QLk4U709neeDzF57otKAEV2elcWLP9FdhW0rO960aqNV%2F%2FmDgUNGuAcEI9%2BHj%2F4HEdnEdUgG0NSTYebP4TPtUtZ7SV3VQA1VvvHfnIzF10Z7I71G7M7oR1x6aiRKffHcD0J6z058adrDYyP9zjrZIPlw1GoF9AvYv6JgIOg5dYPJ%2FuLQm0&X-Amz-Signature=d432fe0090703d4c1fa019f74a49f7af7922238cffb9a5293ba7d1db2198fbf1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CLQIH5X%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDo2TisiDcQH5N76dUEQbhVHe5rrnuV4vXCrh0VSu1h%2BAIhAOe1t6UMHx9x3%2FDdrC%2BovmRTKtmrK4i2Wbl4OVgdnAYqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxby%2BIiWVcHebIovD8q3AO6IUJFFrNZWHJB9p0UbBfB2GVO78guVJsDhne%2BVivvIQUOs%2FhBRe%2F4bdFjPSeZsIBWNnalEBAWuoM70nJWC8vBFPMgXI0hmgRBpD5UEXqVHInp9sx1wbMWSy9Rjy2%2B89Jn8x0I4TD27BExl1TJcLX5kQuzpmWuD2CHAtITy59pP9vqZ6iA%2Bf16SRhVu4SLnDjvW%2B4CnnT9%2FCnzkwO9E58nPP7wKordVIVCk%2FBi20g2adAw27dupjnYMlGTNmFGIalAy9YzHZ86mhuA0jcQFUuVpSJqb5aGosYVcxfyfJcQv6gK1GZgF4IJYI0iVeHwDSJTO0pwO2tkabP0ZPq00IfmQUZ%2FMtclZ2y%2FDs8fDjsbyXMh0MhCz09rz3DT2KqsWTDkxRsOS5zVcSaWos%2FoFVcho6YuQ%2F9W%2BtnK4A2vp1dSNJDbxJ5YwcHK00g0fWADROuXr%2FDPGhtWkLFm0HhkGoUaINwO9FN1SHH%2Fv4SrYxKsvrBP5Haz5o8QXSnM0HNEAugzfRVbD0p%2FQB%2F6DkRq1GbFmnRuipYZPG3Yc7BCJ0l%2BGjCyDMDa8%2FjTj1KpHOd1LIqoqK%2BywL5ke%2FeGhx79sw5Vcsr05xTH9XnM4ZTFEfqkq%2Fhz0rV4fXX7ZkI8mDD0mfi%2BBjqkAZ8Xpqo4R3uOEBhLZRNbr%2BGYeqwXcsuS9B3Yi9SFm7QLk4U709neeDzF57otKAEV2elcWLP9FdhW0rO960aqNV%2F%2FmDgUNGuAcEI9%2BHj%2F4HEdnEdUgG0NSTYebP4TPtUtZ7SV3VQA1VvvHfnIzF10Z7I71G7M7oR1x6aiRKffHcD0J6z058adrDYyP9zjrZIPlw1GoF9AvYv6JgIOg5dYPJ%2FuLQm0&X-Amz-Signature=535d936edac7f948840319239d066c8d9f117b03c624fb92c11275e94c7cac6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CLQIH5X%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDo2TisiDcQH5N76dUEQbhVHe5rrnuV4vXCrh0VSu1h%2BAIhAOe1t6UMHx9x3%2FDdrC%2BovmRTKtmrK4i2Wbl4OVgdnAYqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxby%2BIiWVcHebIovD8q3AO6IUJFFrNZWHJB9p0UbBfB2GVO78guVJsDhne%2BVivvIQUOs%2FhBRe%2F4bdFjPSeZsIBWNnalEBAWuoM70nJWC8vBFPMgXI0hmgRBpD5UEXqVHInp9sx1wbMWSy9Rjy2%2B89Jn8x0I4TD27BExl1TJcLX5kQuzpmWuD2CHAtITy59pP9vqZ6iA%2Bf16SRhVu4SLnDjvW%2B4CnnT9%2FCnzkwO9E58nPP7wKordVIVCk%2FBi20g2adAw27dupjnYMlGTNmFGIalAy9YzHZ86mhuA0jcQFUuVpSJqb5aGosYVcxfyfJcQv6gK1GZgF4IJYI0iVeHwDSJTO0pwO2tkabP0ZPq00IfmQUZ%2FMtclZ2y%2FDs8fDjsbyXMh0MhCz09rz3DT2KqsWTDkxRsOS5zVcSaWos%2FoFVcho6YuQ%2F9W%2BtnK4A2vp1dSNJDbxJ5YwcHK00g0fWADROuXr%2FDPGhtWkLFm0HhkGoUaINwO9FN1SHH%2Fv4SrYxKsvrBP5Haz5o8QXSnM0HNEAugzfRVbD0p%2FQB%2F6DkRq1GbFmnRuipYZPG3Yc7BCJ0l%2BGjCyDMDa8%2FjTj1KpHOd1LIqoqK%2BywL5ke%2FeGhx79sw5Vcsr05xTH9XnM4ZTFEfqkq%2Fhz0rV4fXX7ZkI8mDD0mfi%2BBjqkAZ8Xpqo4R3uOEBhLZRNbr%2BGYeqwXcsuS9B3Yi9SFm7QLk4U709neeDzF57otKAEV2elcWLP9FdhW0rO960aqNV%2F%2FmDgUNGuAcEI9%2BHj%2F4HEdnEdUgG0NSTYebP4TPtUtZ7SV3VQA1VvvHfnIzF10Z7I71G7M7oR1x6aiRKffHcD0J6z058adrDYyP9zjrZIPlw1GoF9AvYv6JgIOg5dYPJ%2FuLQm0&X-Amz-Signature=8c3f5108098df16486b61d44f73ca39e8ad68797e4ab0bea25e2cbc0e2f91c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CLQIH5X%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDo2TisiDcQH5N76dUEQbhVHe5rrnuV4vXCrh0VSu1h%2BAIhAOe1t6UMHx9x3%2FDdrC%2BovmRTKtmrK4i2Wbl4OVgdnAYqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxby%2BIiWVcHebIovD8q3AO6IUJFFrNZWHJB9p0UbBfB2GVO78guVJsDhne%2BVivvIQUOs%2FhBRe%2F4bdFjPSeZsIBWNnalEBAWuoM70nJWC8vBFPMgXI0hmgRBpD5UEXqVHInp9sx1wbMWSy9Rjy2%2B89Jn8x0I4TD27BExl1TJcLX5kQuzpmWuD2CHAtITy59pP9vqZ6iA%2Bf16SRhVu4SLnDjvW%2B4CnnT9%2FCnzkwO9E58nPP7wKordVIVCk%2FBi20g2adAw27dupjnYMlGTNmFGIalAy9YzHZ86mhuA0jcQFUuVpSJqb5aGosYVcxfyfJcQv6gK1GZgF4IJYI0iVeHwDSJTO0pwO2tkabP0ZPq00IfmQUZ%2FMtclZ2y%2FDs8fDjsbyXMh0MhCz09rz3DT2KqsWTDkxRsOS5zVcSaWos%2FoFVcho6YuQ%2F9W%2BtnK4A2vp1dSNJDbxJ5YwcHK00g0fWADROuXr%2FDPGhtWkLFm0HhkGoUaINwO9FN1SHH%2Fv4SrYxKsvrBP5Haz5o8QXSnM0HNEAugzfRVbD0p%2FQB%2F6DkRq1GbFmnRuipYZPG3Yc7BCJ0l%2BGjCyDMDa8%2FjTj1KpHOd1LIqoqK%2BywL5ke%2FeGhx79sw5Vcsr05xTH9XnM4ZTFEfqkq%2Fhz0rV4fXX7ZkI8mDD0mfi%2BBjqkAZ8Xpqo4R3uOEBhLZRNbr%2BGYeqwXcsuS9B3Yi9SFm7QLk4U709neeDzF57otKAEV2elcWLP9FdhW0rO960aqNV%2F%2FmDgUNGuAcEI9%2BHj%2F4HEdnEdUgG0NSTYebP4TPtUtZ7SV3VQA1VvvHfnIzF10Z7I71G7M7oR1x6aiRKffHcD0J6z058adrDYyP9zjrZIPlw1GoF9AvYv6JgIOg5dYPJ%2FuLQm0&X-Amz-Signature=1a3a6e5cf8cc331cabecccd94c3e41b367f20665e5b693c5cb8a0a75b76478bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CLQIH5X%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDo2TisiDcQH5N76dUEQbhVHe5rrnuV4vXCrh0VSu1h%2BAIhAOe1t6UMHx9x3%2FDdrC%2BovmRTKtmrK4i2Wbl4OVgdnAYqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxby%2BIiWVcHebIovD8q3AO6IUJFFrNZWHJB9p0UbBfB2GVO78guVJsDhne%2BVivvIQUOs%2FhBRe%2F4bdFjPSeZsIBWNnalEBAWuoM70nJWC8vBFPMgXI0hmgRBpD5UEXqVHInp9sx1wbMWSy9Rjy2%2B89Jn8x0I4TD27BExl1TJcLX5kQuzpmWuD2CHAtITy59pP9vqZ6iA%2Bf16SRhVu4SLnDjvW%2B4CnnT9%2FCnzkwO9E58nPP7wKordVIVCk%2FBi20g2adAw27dupjnYMlGTNmFGIalAy9YzHZ86mhuA0jcQFUuVpSJqb5aGosYVcxfyfJcQv6gK1GZgF4IJYI0iVeHwDSJTO0pwO2tkabP0ZPq00IfmQUZ%2FMtclZ2y%2FDs8fDjsbyXMh0MhCz09rz3DT2KqsWTDkxRsOS5zVcSaWos%2FoFVcho6YuQ%2F9W%2BtnK4A2vp1dSNJDbxJ5YwcHK00g0fWADROuXr%2FDPGhtWkLFm0HhkGoUaINwO9FN1SHH%2Fv4SrYxKsvrBP5Haz5o8QXSnM0HNEAugzfRVbD0p%2FQB%2F6DkRq1GbFmnRuipYZPG3Yc7BCJ0l%2BGjCyDMDa8%2FjTj1KpHOd1LIqoqK%2BywL5ke%2FeGhx79sw5Vcsr05xTH9XnM4ZTFEfqkq%2Fhz0rV4fXX7ZkI8mDD0mfi%2BBjqkAZ8Xpqo4R3uOEBhLZRNbr%2BGYeqwXcsuS9B3Yi9SFm7QLk4U709neeDzF57otKAEV2elcWLP9FdhW0rO960aqNV%2F%2FmDgUNGuAcEI9%2BHj%2F4HEdnEdUgG0NSTYebP4TPtUtZ7SV3VQA1VvvHfnIzF10Z7I71G7M7oR1x6aiRKffHcD0J6z058adrDYyP9zjrZIPlw1GoF9AvYv6JgIOg5dYPJ%2FuLQm0&X-Amz-Signature=efc9b6c7d4d6c6c31a250070e457cd599351d6acf9921b06825fc9bad0400527&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CLQIH5X%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDo2TisiDcQH5N76dUEQbhVHe5rrnuV4vXCrh0VSu1h%2BAIhAOe1t6UMHx9x3%2FDdrC%2BovmRTKtmrK4i2Wbl4OVgdnAYqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxby%2BIiWVcHebIovD8q3AO6IUJFFrNZWHJB9p0UbBfB2GVO78guVJsDhne%2BVivvIQUOs%2FhBRe%2F4bdFjPSeZsIBWNnalEBAWuoM70nJWC8vBFPMgXI0hmgRBpD5UEXqVHInp9sx1wbMWSy9Rjy2%2B89Jn8x0I4TD27BExl1TJcLX5kQuzpmWuD2CHAtITy59pP9vqZ6iA%2Bf16SRhVu4SLnDjvW%2B4CnnT9%2FCnzkwO9E58nPP7wKordVIVCk%2FBi20g2adAw27dupjnYMlGTNmFGIalAy9YzHZ86mhuA0jcQFUuVpSJqb5aGosYVcxfyfJcQv6gK1GZgF4IJYI0iVeHwDSJTO0pwO2tkabP0ZPq00IfmQUZ%2FMtclZ2y%2FDs8fDjsbyXMh0MhCz09rz3DT2KqsWTDkxRsOS5zVcSaWos%2FoFVcho6YuQ%2F9W%2BtnK4A2vp1dSNJDbxJ5YwcHK00g0fWADROuXr%2FDPGhtWkLFm0HhkGoUaINwO9FN1SHH%2Fv4SrYxKsvrBP5Haz5o8QXSnM0HNEAugzfRVbD0p%2FQB%2F6DkRq1GbFmnRuipYZPG3Yc7BCJ0l%2BGjCyDMDa8%2FjTj1KpHOd1LIqoqK%2BywL5ke%2FeGhx79sw5Vcsr05xTH9XnM4ZTFEfqkq%2Fhz0rV4fXX7ZkI8mDD0mfi%2BBjqkAZ8Xpqo4R3uOEBhLZRNbr%2BGYeqwXcsuS9B3Yi9SFm7QLk4U709neeDzF57otKAEV2elcWLP9FdhW0rO960aqNV%2F%2FmDgUNGuAcEI9%2BHj%2F4HEdnEdUgG0NSTYebP4TPtUtZ7SV3VQA1VvvHfnIzF10Z7I71G7M7oR1x6aiRKffHcD0J6z058adrDYyP9zjrZIPlw1GoF9AvYv6JgIOg5dYPJ%2FuLQm0&X-Amz-Signature=71b35e55caa6727a997abdc146456e6e270d98f4791f0e3bd31cf0b1695d18f9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CLQIH5X%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDo2TisiDcQH5N76dUEQbhVHe5rrnuV4vXCrh0VSu1h%2BAIhAOe1t6UMHx9x3%2FDdrC%2BovmRTKtmrK4i2Wbl4OVgdnAYqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxby%2BIiWVcHebIovD8q3AO6IUJFFrNZWHJB9p0UbBfB2GVO78guVJsDhne%2BVivvIQUOs%2FhBRe%2F4bdFjPSeZsIBWNnalEBAWuoM70nJWC8vBFPMgXI0hmgRBpD5UEXqVHInp9sx1wbMWSy9Rjy2%2B89Jn8x0I4TD27BExl1TJcLX5kQuzpmWuD2CHAtITy59pP9vqZ6iA%2Bf16SRhVu4SLnDjvW%2B4CnnT9%2FCnzkwO9E58nPP7wKordVIVCk%2FBi20g2adAw27dupjnYMlGTNmFGIalAy9YzHZ86mhuA0jcQFUuVpSJqb5aGosYVcxfyfJcQv6gK1GZgF4IJYI0iVeHwDSJTO0pwO2tkabP0ZPq00IfmQUZ%2FMtclZ2y%2FDs8fDjsbyXMh0MhCz09rz3DT2KqsWTDkxRsOS5zVcSaWos%2FoFVcho6YuQ%2F9W%2BtnK4A2vp1dSNJDbxJ5YwcHK00g0fWADROuXr%2FDPGhtWkLFm0HhkGoUaINwO9FN1SHH%2Fv4SrYxKsvrBP5Haz5o8QXSnM0HNEAugzfRVbD0p%2FQB%2F6DkRq1GbFmnRuipYZPG3Yc7BCJ0l%2BGjCyDMDa8%2FjTj1KpHOd1LIqoqK%2BywL5ke%2FeGhx79sw5Vcsr05xTH9XnM4ZTFEfqkq%2Fhz0rV4fXX7ZkI8mDD0mfi%2BBjqkAZ8Xpqo4R3uOEBhLZRNbr%2BGYeqwXcsuS9B3Yi9SFm7QLk4U709neeDzF57otKAEV2elcWLP9FdhW0rO960aqNV%2F%2FmDgUNGuAcEI9%2BHj%2F4HEdnEdUgG0NSTYebP4TPtUtZ7SV3VQA1VvvHfnIzF10Z7I71G7M7oR1x6aiRKffHcD0J6z058adrDYyP9zjrZIPlw1GoF9AvYv6JgIOg5dYPJ%2FuLQm0&X-Amz-Signature=4c8ba5a5e59dd8653bf9aa1791d6538fc1c464b37da56b0e56a3624aaa5a590a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

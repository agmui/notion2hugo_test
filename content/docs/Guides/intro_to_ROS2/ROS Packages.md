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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSQJRKO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIH0gkCMQ7xVLVFf0P4B6MUqW7YI7XL1ouh%2FGCFu%2B88L5AiBEaUwTQvte4O4G17JNlov%2B2YgNkKsiWUoUSnfy62u1qiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNw%2FtJor7VMwlk2rKtwDpEar0J0f%2FX8kEq5YzeUDSzaKJTw%2FVR2NGna9Ggd2%2BUd8GCIUgSWd1j5%2Bl25h1IRlVvu6Ks6x%2FcEXt6ba5z2jJxHBXg3zEk5qZRBCmagK2%2Bj%2FvOPgRvD1nCihLlVKAskCLGnrnrtDeQJFwlFVW9gJirboS9iDUNgxEOW9dkYWf5MRPvOwEFkvldjHcjJ9NjIZiyRaABi3egOKWV51RHPNsSLNry4x7jykJHCjYMlt39DRl%2F5YlkjR58LU1hmB9wsERHcg8NnW%2Fjww255ag32F1FDVZBFRSrD2Hf0Xn6FohL24Vi4woY%2F4%2FvJxzBB%2BTSFdwmSYkiXXKBMesEsVf55qvMFGI3vcmYsd30M%2Bre0Q59OYyFw8YAzju3DYfByPLec1jWrxG%2B5kPwgVHf4MaA%2Bsa3CWQF81UicGNaUp%2FevAO76v2OnoUkV1t5isq4ZZ%2FlsC3p%2FOUklllOMsywU%2FTH%2FWvW1C2h9SOKUuIbfNuvHq2VspCCJ0EwaZaSmv49HXDp93VeFdSMFwiGP2ZC9WlDfLx7ij%2FvLKCdwLsUnjTi1Ml8mb6AxT6fcsk561ut6qqGebzqewd0fh%2FK10O%2FGIee1igEPoemChosJ%2F6Yt3xHTzT1ymx9i9vgKFN0h8LBUwm%2BPbvwY6pgGMy%2FW7CPxB%2BwyBJsGEy3o0qviC%2BbJvbP95HK%2FV0EOcbsGXCtsse2v20WAVkn0o8Vk6Wgnf14ROTrLkhgL%2FBi5AyS8R6gEK0JwaGcp0K5OXw4W261IyNsvQlw1aOvGT3%2FTOWVJr77QJFCEzIvy5n0yHOfvkuAtAvqO%2BAiT3e6cWq%2BXD9QprfJsjHIyo%2B%2BxfI8F%2BEHu%2B2EsoXgLuoVuWgHai3YYj4q4F&X-Amz-Signature=e3f6e1db7d7604e822ef9d254cec2fa8dfae8ccd8e6a1c897ae9ac436e00dec5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSQJRKO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIH0gkCMQ7xVLVFf0P4B6MUqW7YI7XL1ouh%2FGCFu%2B88L5AiBEaUwTQvte4O4G17JNlov%2B2YgNkKsiWUoUSnfy62u1qiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNw%2FtJor7VMwlk2rKtwDpEar0J0f%2FX8kEq5YzeUDSzaKJTw%2FVR2NGna9Ggd2%2BUd8GCIUgSWd1j5%2Bl25h1IRlVvu6Ks6x%2FcEXt6ba5z2jJxHBXg3zEk5qZRBCmagK2%2Bj%2FvOPgRvD1nCihLlVKAskCLGnrnrtDeQJFwlFVW9gJirboS9iDUNgxEOW9dkYWf5MRPvOwEFkvldjHcjJ9NjIZiyRaABi3egOKWV51RHPNsSLNry4x7jykJHCjYMlt39DRl%2F5YlkjR58LU1hmB9wsERHcg8NnW%2Fjww255ag32F1FDVZBFRSrD2Hf0Xn6FohL24Vi4woY%2F4%2FvJxzBB%2BTSFdwmSYkiXXKBMesEsVf55qvMFGI3vcmYsd30M%2Bre0Q59OYyFw8YAzju3DYfByPLec1jWrxG%2B5kPwgVHf4MaA%2Bsa3CWQF81UicGNaUp%2FevAO76v2OnoUkV1t5isq4ZZ%2FlsC3p%2FOUklllOMsywU%2FTH%2FWvW1C2h9SOKUuIbfNuvHq2VspCCJ0EwaZaSmv49HXDp93VeFdSMFwiGP2ZC9WlDfLx7ij%2FvLKCdwLsUnjTi1Ml8mb6AxT6fcsk561ut6qqGebzqewd0fh%2FK10O%2FGIee1igEPoemChosJ%2F6Yt3xHTzT1ymx9i9vgKFN0h8LBUwm%2BPbvwY6pgGMy%2FW7CPxB%2BwyBJsGEy3o0qviC%2BbJvbP95HK%2FV0EOcbsGXCtsse2v20WAVkn0o8Vk6Wgnf14ROTrLkhgL%2FBi5AyS8R6gEK0JwaGcp0K5OXw4W261IyNsvQlw1aOvGT3%2FTOWVJr77QJFCEzIvy5n0yHOfvkuAtAvqO%2BAiT3e6cWq%2BXD9QprfJsjHIyo%2B%2BxfI8F%2BEHu%2B2EsoXgLuoVuWgHai3YYj4q4F&X-Amz-Signature=f0375a0eff3e5fc9344717a583084edc8e7e8c9cd1f8580894112f4030b9e875&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSQJRKO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIH0gkCMQ7xVLVFf0P4B6MUqW7YI7XL1ouh%2FGCFu%2B88L5AiBEaUwTQvte4O4G17JNlov%2B2YgNkKsiWUoUSnfy62u1qiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNw%2FtJor7VMwlk2rKtwDpEar0J0f%2FX8kEq5YzeUDSzaKJTw%2FVR2NGna9Ggd2%2BUd8GCIUgSWd1j5%2Bl25h1IRlVvu6Ks6x%2FcEXt6ba5z2jJxHBXg3zEk5qZRBCmagK2%2Bj%2FvOPgRvD1nCihLlVKAskCLGnrnrtDeQJFwlFVW9gJirboS9iDUNgxEOW9dkYWf5MRPvOwEFkvldjHcjJ9NjIZiyRaABi3egOKWV51RHPNsSLNry4x7jykJHCjYMlt39DRl%2F5YlkjR58LU1hmB9wsERHcg8NnW%2Fjww255ag32F1FDVZBFRSrD2Hf0Xn6FohL24Vi4woY%2F4%2FvJxzBB%2BTSFdwmSYkiXXKBMesEsVf55qvMFGI3vcmYsd30M%2Bre0Q59OYyFw8YAzju3DYfByPLec1jWrxG%2B5kPwgVHf4MaA%2Bsa3CWQF81UicGNaUp%2FevAO76v2OnoUkV1t5isq4ZZ%2FlsC3p%2FOUklllOMsywU%2FTH%2FWvW1C2h9SOKUuIbfNuvHq2VspCCJ0EwaZaSmv49HXDp93VeFdSMFwiGP2ZC9WlDfLx7ij%2FvLKCdwLsUnjTi1Ml8mb6AxT6fcsk561ut6qqGebzqewd0fh%2FK10O%2FGIee1igEPoemChosJ%2F6Yt3xHTzT1ymx9i9vgKFN0h8LBUwm%2BPbvwY6pgGMy%2FW7CPxB%2BwyBJsGEy3o0qviC%2BbJvbP95HK%2FV0EOcbsGXCtsse2v20WAVkn0o8Vk6Wgnf14ROTrLkhgL%2FBi5AyS8R6gEK0JwaGcp0K5OXw4W261IyNsvQlw1aOvGT3%2FTOWVJr77QJFCEzIvy5n0yHOfvkuAtAvqO%2BAiT3e6cWq%2BXD9QprfJsjHIyo%2B%2BxfI8F%2BEHu%2B2EsoXgLuoVuWgHai3YYj4q4F&X-Amz-Signature=31c92661a87627efe8a3a32aa119b76574d557634c478893f78391fea7f50aff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSQJRKO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIH0gkCMQ7xVLVFf0P4B6MUqW7YI7XL1ouh%2FGCFu%2B88L5AiBEaUwTQvte4O4G17JNlov%2B2YgNkKsiWUoUSnfy62u1qiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNw%2FtJor7VMwlk2rKtwDpEar0J0f%2FX8kEq5YzeUDSzaKJTw%2FVR2NGna9Ggd2%2BUd8GCIUgSWd1j5%2Bl25h1IRlVvu6Ks6x%2FcEXt6ba5z2jJxHBXg3zEk5qZRBCmagK2%2Bj%2FvOPgRvD1nCihLlVKAskCLGnrnrtDeQJFwlFVW9gJirboS9iDUNgxEOW9dkYWf5MRPvOwEFkvldjHcjJ9NjIZiyRaABi3egOKWV51RHPNsSLNry4x7jykJHCjYMlt39DRl%2F5YlkjR58LU1hmB9wsERHcg8NnW%2Fjww255ag32F1FDVZBFRSrD2Hf0Xn6FohL24Vi4woY%2F4%2FvJxzBB%2BTSFdwmSYkiXXKBMesEsVf55qvMFGI3vcmYsd30M%2Bre0Q59OYyFw8YAzju3DYfByPLec1jWrxG%2B5kPwgVHf4MaA%2Bsa3CWQF81UicGNaUp%2FevAO76v2OnoUkV1t5isq4ZZ%2FlsC3p%2FOUklllOMsywU%2FTH%2FWvW1C2h9SOKUuIbfNuvHq2VspCCJ0EwaZaSmv49HXDp93VeFdSMFwiGP2ZC9WlDfLx7ij%2FvLKCdwLsUnjTi1Ml8mb6AxT6fcsk561ut6qqGebzqewd0fh%2FK10O%2FGIee1igEPoemChosJ%2F6Yt3xHTzT1ymx9i9vgKFN0h8LBUwm%2BPbvwY6pgGMy%2FW7CPxB%2BwyBJsGEy3o0qviC%2BbJvbP95HK%2FV0EOcbsGXCtsse2v20WAVkn0o8Vk6Wgnf14ROTrLkhgL%2FBi5AyS8R6gEK0JwaGcp0K5OXw4W261IyNsvQlw1aOvGT3%2FTOWVJr77QJFCEzIvy5n0yHOfvkuAtAvqO%2BAiT3e6cWq%2BXD9QprfJsjHIyo%2B%2BxfI8F%2BEHu%2B2EsoXgLuoVuWgHai3YYj4q4F&X-Amz-Signature=74a7a07e3fad555555dfca9082b97c3dd45a055db2e199806605401ec985a916&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSQJRKO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIH0gkCMQ7xVLVFf0P4B6MUqW7YI7XL1ouh%2FGCFu%2B88L5AiBEaUwTQvte4O4G17JNlov%2B2YgNkKsiWUoUSnfy62u1qiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNw%2FtJor7VMwlk2rKtwDpEar0J0f%2FX8kEq5YzeUDSzaKJTw%2FVR2NGna9Ggd2%2BUd8GCIUgSWd1j5%2Bl25h1IRlVvu6Ks6x%2FcEXt6ba5z2jJxHBXg3zEk5qZRBCmagK2%2Bj%2FvOPgRvD1nCihLlVKAskCLGnrnrtDeQJFwlFVW9gJirboS9iDUNgxEOW9dkYWf5MRPvOwEFkvldjHcjJ9NjIZiyRaABi3egOKWV51RHPNsSLNry4x7jykJHCjYMlt39DRl%2F5YlkjR58LU1hmB9wsERHcg8NnW%2Fjww255ag32F1FDVZBFRSrD2Hf0Xn6FohL24Vi4woY%2F4%2FvJxzBB%2BTSFdwmSYkiXXKBMesEsVf55qvMFGI3vcmYsd30M%2Bre0Q59OYyFw8YAzju3DYfByPLec1jWrxG%2B5kPwgVHf4MaA%2Bsa3CWQF81UicGNaUp%2FevAO76v2OnoUkV1t5isq4ZZ%2FlsC3p%2FOUklllOMsywU%2FTH%2FWvW1C2h9SOKUuIbfNuvHq2VspCCJ0EwaZaSmv49HXDp93VeFdSMFwiGP2ZC9WlDfLx7ij%2FvLKCdwLsUnjTi1Ml8mb6AxT6fcsk561ut6qqGebzqewd0fh%2FK10O%2FGIee1igEPoemChosJ%2F6Yt3xHTzT1ymx9i9vgKFN0h8LBUwm%2BPbvwY6pgGMy%2FW7CPxB%2BwyBJsGEy3o0qviC%2BbJvbP95HK%2FV0EOcbsGXCtsse2v20WAVkn0o8Vk6Wgnf14ROTrLkhgL%2FBi5AyS8R6gEK0JwaGcp0K5OXw4W261IyNsvQlw1aOvGT3%2FTOWVJr77QJFCEzIvy5n0yHOfvkuAtAvqO%2BAiT3e6cWq%2BXD9QprfJsjHIyo%2B%2BxfI8F%2BEHu%2B2EsoXgLuoVuWgHai3YYj4q4F&X-Amz-Signature=a6c70bd75c854a5c7716900c27b56f63229798a2c5d8df45b2f475ddf64c7748&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSQJRKO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIH0gkCMQ7xVLVFf0P4B6MUqW7YI7XL1ouh%2FGCFu%2B88L5AiBEaUwTQvte4O4G17JNlov%2B2YgNkKsiWUoUSnfy62u1qiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNw%2FtJor7VMwlk2rKtwDpEar0J0f%2FX8kEq5YzeUDSzaKJTw%2FVR2NGna9Ggd2%2BUd8GCIUgSWd1j5%2Bl25h1IRlVvu6Ks6x%2FcEXt6ba5z2jJxHBXg3zEk5qZRBCmagK2%2Bj%2FvOPgRvD1nCihLlVKAskCLGnrnrtDeQJFwlFVW9gJirboS9iDUNgxEOW9dkYWf5MRPvOwEFkvldjHcjJ9NjIZiyRaABi3egOKWV51RHPNsSLNry4x7jykJHCjYMlt39DRl%2F5YlkjR58LU1hmB9wsERHcg8NnW%2Fjww255ag32F1FDVZBFRSrD2Hf0Xn6FohL24Vi4woY%2F4%2FvJxzBB%2BTSFdwmSYkiXXKBMesEsVf55qvMFGI3vcmYsd30M%2Bre0Q59OYyFw8YAzju3DYfByPLec1jWrxG%2B5kPwgVHf4MaA%2Bsa3CWQF81UicGNaUp%2FevAO76v2OnoUkV1t5isq4ZZ%2FlsC3p%2FOUklllOMsywU%2FTH%2FWvW1C2h9SOKUuIbfNuvHq2VspCCJ0EwaZaSmv49HXDp93VeFdSMFwiGP2ZC9WlDfLx7ij%2FvLKCdwLsUnjTi1Ml8mb6AxT6fcsk561ut6qqGebzqewd0fh%2FK10O%2FGIee1igEPoemChosJ%2F6Yt3xHTzT1ymx9i9vgKFN0h8LBUwm%2BPbvwY6pgGMy%2FW7CPxB%2BwyBJsGEy3o0qviC%2BbJvbP95HK%2FV0EOcbsGXCtsse2v20WAVkn0o8Vk6Wgnf14ROTrLkhgL%2FBi5AyS8R6gEK0JwaGcp0K5OXw4W261IyNsvQlw1aOvGT3%2FTOWVJr77QJFCEzIvy5n0yHOfvkuAtAvqO%2BAiT3e6cWq%2BXD9QprfJsjHIyo%2B%2BxfI8F%2BEHu%2B2EsoXgLuoVuWgHai3YYj4q4F&X-Amz-Signature=26abc3933cd98b392560c0f99970c4a71df6d37c952a679ddae7b4ec5b8a5376&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSQJRKO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIH0gkCMQ7xVLVFf0P4B6MUqW7YI7XL1ouh%2FGCFu%2B88L5AiBEaUwTQvte4O4G17JNlov%2B2YgNkKsiWUoUSnfy62u1qiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNw%2FtJor7VMwlk2rKtwDpEar0J0f%2FX8kEq5YzeUDSzaKJTw%2FVR2NGna9Ggd2%2BUd8GCIUgSWd1j5%2Bl25h1IRlVvu6Ks6x%2FcEXt6ba5z2jJxHBXg3zEk5qZRBCmagK2%2Bj%2FvOPgRvD1nCihLlVKAskCLGnrnrtDeQJFwlFVW9gJirboS9iDUNgxEOW9dkYWf5MRPvOwEFkvldjHcjJ9NjIZiyRaABi3egOKWV51RHPNsSLNry4x7jykJHCjYMlt39DRl%2F5YlkjR58LU1hmB9wsERHcg8NnW%2Fjww255ag32F1FDVZBFRSrD2Hf0Xn6FohL24Vi4woY%2F4%2FvJxzBB%2BTSFdwmSYkiXXKBMesEsVf55qvMFGI3vcmYsd30M%2Bre0Q59OYyFw8YAzju3DYfByPLec1jWrxG%2B5kPwgVHf4MaA%2Bsa3CWQF81UicGNaUp%2FevAO76v2OnoUkV1t5isq4ZZ%2FlsC3p%2FOUklllOMsywU%2FTH%2FWvW1C2h9SOKUuIbfNuvHq2VspCCJ0EwaZaSmv49HXDp93VeFdSMFwiGP2ZC9WlDfLx7ij%2FvLKCdwLsUnjTi1Ml8mb6AxT6fcsk561ut6qqGebzqewd0fh%2FK10O%2FGIee1igEPoemChosJ%2F6Yt3xHTzT1ymx9i9vgKFN0h8LBUwm%2BPbvwY6pgGMy%2FW7CPxB%2BwyBJsGEy3o0qviC%2BbJvbP95HK%2FV0EOcbsGXCtsse2v20WAVkn0o8Vk6Wgnf14ROTrLkhgL%2FBi5AyS8R6gEK0JwaGcp0K5OXw4W261IyNsvQlw1aOvGT3%2FTOWVJr77QJFCEzIvy5n0yHOfvkuAtAvqO%2BAiT3e6cWq%2BXD9QprfJsjHIyo%2B%2BxfI8F%2BEHu%2B2EsoXgLuoVuWgHai3YYj4q4F&X-Amz-Signature=6a2dd87e2583ce424be34a6cb466e875717f4e902ab4055538ce185e408ca46b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

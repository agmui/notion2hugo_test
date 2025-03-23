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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WVYLZJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFMAmSxkTBI09DwPf7FKAeX4UEaFd%2F6sZ1%2FvYtKE00NeAiBbGDro%2BBdYhEC%2BrzvpWj0qAQjOHED165sqz%2FKtrU2VZCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtBFgMxCfm7IW62GKtwDBAdnw531IAWWuA39B56ZrUcD7qQfCAV9kMJkfID2qBieDQl8%2BaQa7p6vreWG92YAH6Xcl94wcJQcnfNDKBNN2IGtvsFpsrRx%2B8hhtJJ3LMizi1DLDvMK38x99pLuexwahLOShVuU%2Bv991ZHdpLkF96CJCYtzw5kZEvp3N%2B5jrZ69Oh1tZTuYncrrTyFBKv7r%2BaS%2BWODeclOZbsDm9C0CmS35tjh8d5zd%2FysBwW6sEOzzPHOwQBhr7m9aZr3ohaWV4zMhc2Lp8qmkOwJzn3A%2B4RsHHU0atqVwFnRTKNbgwvCA66j1AfacLfa1SP1zdHaSfj3xSY%2FQTtU1f%2FRYmPjJ5OT2lsqRTvAEgc2RnNbHEWwgm2wx4DK3lcARvzyRqbuQIpCcmfOM28dmoWWzZCv06%2BPPsL0RpPyi90nMKF%2FWL3JY%2BUgKBMwiPkHfr7A8a15cQOYeLJpifTC1AZYcxUJJf6XH8lK89QWv4Q18g3fdOwK%2F6iXWkxXPx5YlPotNh1gtTYSiJ%2F8OjS3tdDXIX9Lk1CM38qNRXQAzWQbBtoveaIUKdzAPyh%2FIWAITYFh31Ij85lZR0YSs5ACUDjo0esuEpuqDfh%2Fs5HGQyxOqvDVLzbPVUOEVcjblagLmd0IwreP9vgY6pgHLwlmCCrMlsu84oVwro3uNZyQP71NnMamwYlCmEBcFp6g%2B%2BYy53zxIQUX9sWl%2FSPbAGh%2BFvNOiEtwcCahZ%2FgseYv7tMzzwSFWGEL0uOS%2BeGq5euT6YcMeY6%2BSDmSLBRb%2FtV3vrrBp9YZlh%2FdBqAlNf3emtNYoNsiZC59r74dFNJI9GB%2Fd2XqYu76Yw%2FwFUvvkpAc5PRrznwkCRgdgphHtbZBhoBriy&X-Amz-Signature=c864699423d9ef8d9761c7481a0112ef2861651b7d53f9bbc8a66a21af0dc429&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WVYLZJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFMAmSxkTBI09DwPf7FKAeX4UEaFd%2F6sZ1%2FvYtKE00NeAiBbGDro%2BBdYhEC%2BrzvpWj0qAQjOHED165sqz%2FKtrU2VZCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtBFgMxCfm7IW62GKtwDBAdnw531IAWWuA39B56ZrUcD7qQfCAV9kMJkfID2qBieDQl8%2BaQa7p6vreWG92YAH6Xcl94wcJQcnfNDKBNN2IGtvsFpsrRx%2B8hhtJJ3LMizi1DLDvMK38x99pLuexwahLOShVuU%2Bv991ZHdpLkF96CJCYtzw5kZEvp3N%2B5jrZ69Oh1tZTuYncrrTyFBKv7r%2BaS%2BWODeclOZbsDm9C0CmS35tjh8d5zd%2FysBwW6sEOzzPHOwQBhr7m9aZr3ohaWV4zMhc2Lp8qmkOwJzn3A%2B4RsHHU0atqVwFnRTKNbgwvCA66j1AfacLfa1SP1zdHaSfj3xSY%2FQTtU1f%2FRYmPjJ5OT2lsqRTvAEgc2RnNbHEWwgm2wx4DK3lcARvzyRqbuQIpCcmfOM28dmoWWzZCv06%2BPPsL0RpPyi90nMKF%2FWL3JY%2BUgKBMwiPkHfr7A8a15cQOYeLJpifTC1AZYcxUJJf6XH8lK89QWv4Q18g3fdOwK%2F6iXWkxXPx5YlPotNh1gtTYSiJ%2F8OjS3tdDXIX9Lk1CM38qNRXQAzWQbBtoveaIUKdzAPyh%2FIWAITYFh31Ij85lZR0YSs5ACUDjo0esuEpuqDfh%2Fs5HGQyxOqvDVLzbPVUOEVcjblagLmd0IwreP9vgY6pgHLwlmCCrMlsu84oVwro3uNZyQP71NnMamwYlCmEBcFp6g%2B%2BYy53zxIQUX9sWl%2FSPbAGh%2BFvNOiEtwcCahZ%2FgseYv7tMzzwSFWGEL0uOS%2BeGq5euT6YcMeY6%2BSDmSLBRb%2FtV3vrrBp9YZlh%2FdBqAlNf3emtNYoNsiZC59r74dFNJI9GB%2Fd2XqYu76Yw%2FwFUvvkpAc5PRrznwkCRgdgphHtbZBhoBriy&X-Amz-Signature=f30cd9c844469ed9f20755253ed715c6f06fd340fd35534f0d91320894a26652&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WVYLZJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFMAmSxkTBI09DwPf7FKAeX4UEaFd%2F6sZ1%2FvYtKE00NeAiBbGDro%2BBdYhEC%2BrzvpWj0qAQjOHED165sqz%2FKtrU2VZCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtBFgMxCfm7IW62GKtwDBAdnw531IAWWuA39B56ZrUcD7qQfCAV9kMJkfID2qBieDQl8%2BaQa7p6vreWG92YAH6Xcl94wcJQcnfNDKBNN2IGtvsFpsrRx%2B8hhtJJ3LMizi1DLDvMK38x99pLuexwahLOShVuU%2Bv991ZHdpLkF96CJCYtzw5kZEvp3N%2B5jrZ69Oh1tZTuYncrrTyFBKv7r%2BaS%2BWODeclOZbsDm9C0CmS35tjh8d5zd%2FysBwW6sEOzzPHOwQBhr7m9aZr3ohaWV4zMhc2Lp8qmkOwJzn3A%2B4RsHHU0atqVwFnRTKNbgwvCA66j1AfacLfa1SP1zdHaSfj3xSY%2FQTtU1f%2FRYmPjJ5OT2lsqRTvAEgc2RnNbHEWwgm2wx4DK3lcARvzyRqbuQIpCcmfOM28dmoWWzZCv06%2BPPsL0RpPyi90nMKF%2FWL3JY%2BUgKBMwiPkHfr7A8a15cQOYeLJpifTC1AZYcxUJJf6XH8lK89QWv4Q18g3fdOwK%2F6iXWkxXPx5YlPotNh1gtTYSiJ%2F8OjS3tdDXIX9Lk1CM38qNRXQAzWQbBtoveaIUKdzAPyh%2FIWAITYFh31Ij85lZR0YSs5ACUDjo0esuEpuqDfh%2Fs5HGQyxOqvDVLzbPVUOEVcjblagLmd0IwreP9vgY6pgHLwlmCCrMlsu84oVwro3uNZyQP71NnMamwYlCmEBcFp6g%2B%2BYy53zxIQUX9sWl%2FSPbAGh%2BFvNOiEtwcCahZ%2FgseYv7tMzzwSFWGEL0uOS%2BeGq5euT6YcMeY6%2BSDmSLBRb%2FtV3vrrBp9YZlh%2FdBqAlNf3emtNYoNsiZC59r74dFNJI9GB%2Fd2XqYu76Yw%2FwFUvvkpAc5PRrznwkCRgdgphHtbZBhoBriy&X-Amz-Signature=7d4f9dfa0e4b232eec4fbe6383a10122a7c124a9cfbc45030aaf6530f96bc8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WVYLZJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFMAmSxkTBI09DwPf7FKAeX4UEaFd%2F6sZ1%2FvYtKE00NeAiBbGDro%2BBdYhEC%2BrzvpWj0qAQjOHED165sqz%2FKtrU2VZCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtBFgMxCfm7IW62GKtwDBAdnw531IAWWuA39B56ZrUcD7qQfCAV9kMJkfID2qBieDQl8%2BaQa7p6vreWG92YAH6Xcl94wcJQcnfNDKBNN2IGtvsFpsrRx%2B8hhtJJ3LMizi1DLDvMK38x99pLuexwahLOShVuU%2Bv991ZHdpLkF96CJCYtzw5kZEvp3N%2B5jrZ69Oh1tZTuYncrrTyFBKv7r%2BaS%2BWODeclOZbsDm9C0CmS35tjh8d5zd%2FysBwW6sEOzzPHOwQBhr7m9aZr3ohaWV4zMhc2Lp8qmkOwJzn3A%2B4RsHHU0atqVwFnRTKNbgwvCA66j1AfacLfa1SP1zdHaSfj3xSY%2FQTtU1f%2FRYmPjJ5OT2lsqRTvAEgc2RnNbHEWwgm2wx4DK3lcARvzyRqbuQIpCcmfOM28dmoWWzZCv06%2BPPsL0RpPyi90nMKF%2FWL3JY%2BUgKBMwiPkHfr7A8a15cQOYeLJpifTC1AZYcxUJJf6XH8lK89QWv4Q18g3fdOwK%2F6iXWkxXPx5YlPotNh1gtTYSiJ%2F8OjS3tdDXIX9Lk1CM38qNRXQAzWQbBtoveaIUKdzAPyh%2FIWAITYFh31Ij85lZR0YSs5ACUDjo0esuEpuqDfh%2Fs5HGQyxOqvDVLzbPVUOEVcjblagLmd0IwreP9vgY6pgHLwlmCCrMlsu84oVwro3uNZyQP71NnMamwYlCmEBcFp6g%2B%2BYy53zxIQUX9sWl%2FSPbAGh%2BFvNOiEtwcCahZ%2FgseYv7tMzzwSFWGEL0uOS%2BeGq5euT6YcMeY6%2BSDmSLBRb%2FtV3vrrBp9YZlh%2FdBqAlNf3emtNYoNsiZC59r74dFNJI9GB%2Fd2XqYu76Yw%2FwFUvvkpAc5PRrznwkCRgdgphHtbZBhoBriy&X-Amz-Signature=364c7b0e6b019add1cfac57784a97df9a31ada4ffeb9e9464fe6f0f54d8c5b93&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WVYLZJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFMAmSxkTBI09DwPf7FKAeX4UEaFd%2F6sZ1%2FvYtKE00NeAiBbGDro%2BBdYhEC%2BrzvpWj0qAQjOHED165sqz%2FKtrU2VZCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtBFgMxCfm7IW62GKtwDBAdnw531IAWWuA39B56ZrUcD7qQfCAV9kMJkfID2qBieDQl8%2BaQa7p6vreWG92YAH6Xcl94wcJQcnfNDKBNN2IGtvsFpsrRx%2B8hhtJJ3LMizi1DLDvMK38x99pLuexwahLOShVuU%2Bv991ZHdpLkF96CJCYtzw5kZEvp3N%2B5jrZ69Oh1tZTuYncrrTyFBKv7r%2BaS%2BWODeclOZbsDm9C0CmS35tjh8d5zd%2FysBwW6sEOzzPHOwQBhr7m9aZr3ohaWV4zMhc2Lp8qmkOwJzn3A%2B4RsHHU0atqVwFnRTKNbgwvCA66j1AfacLfa1SP1zdHaSfj3xSY%2FQTtU1f%2FRYmPjJ5OT2lsqRTvAEgc2RnNbHEWwgm2wx4DK3lcARvzyRqbuQIpCcmfOM28dmoWWzZCv06%2BPPsL0RpPyi90nMKF%2FWL3JY%2BUgKBMwiPkHfr7A8a15cQOYeLJpifTC1AZYcxUJJf6XH8lK89QWv4Q18g3fdOwK%2F6iXWkxXPx5YlPotNh1gtTYSiJ%2F8OjS3tdDXIX9Lk1CM38qNRXQAzWQbBtoveaIUKdzAPyh%2FIWAITYFh31Ij85lZR0YSs5ACUDjo0esuEpuqDfh%2Fs5HGQyxOqvDVLzbPVUOEVcjblagLmd0IwreP9vgY6pgHLwlmCCrMlsu84oVwro3uNZyQP71NnMamwYlCmEBcFp6g%2B%2BYy53zxIQUX9sWl%2FSPbAGh%2BFvNOiEtwcCahZ%2FgseYv7tMzzwSFWGEL0uOS%2BeGq5euT6YcMeY6%2BSDmSLBRb%2FtV3vrrBp9YZlh%2FdBqAlNf3emtNYoNsiZC59r74dFNJI9GB%2Fd2XqYu76Yw%2FwFUvvkpAc5PRrznwkCRgdgphHtbZBhoBriy&X-Amz-Signature=155ba0d6e04d582a95b143fee2b7fa021a853f050da2175ed774c4016a4ed0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WVYLZJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFMAmSxkTBI09DwPf7FKAeX4UEaFd%2F6sZ1%2FvYtKE00NeAiBbGDro%2BBdYhEC%2BrzvpWj0qAQjOHED165sqz%2FKtrU2VZCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtBFgMxCfm7IW62GKtwDBAdnw531IAWWuA39B56ZrUcD7qQfCAV9kMJkfID2qBieDQl8%2BaQa7p6vreWG92YAH6Xcl94wcJQcnfNDKBNN2IGtvsFpsrRx%2B8hhtJJ3LMizi1DLDvMK38x99pLuexwahLOShVuU%2Bv991ZHdpLkF96CJCYtzw5kZEvp3N%2B5jrZ69Oh1tZTuYncrrTyFBKv7r%2BaS%2BWODeclOZbsDm9C0CmS35tjh8d5zd%2FysBwW6sEOzzPHOwQBhr7m9aZr3ohaWV4zMhc2Lp8qmkOwJzn3A%2B4RsHHU0atqVwFnRTKNbgwvCA66j1AfacLfa1SP1zdHaSfj3xSY%2FQTtU1f%2FRYmPjJ5OT2lsqRTvAEgc2RnNbHEWwgm2wx4DK3lcARvzyRqbuQIpCcmfOM28dmoWWzZCv06%2BPPsL0RpPyi90nMKF%2FWL3JY%2BUgKBMwiPkHfr7A8a15cQOYeLJpifTC1AZYcxUJJf6XH8lK89QWv4Q18g3fdOwK%2F6iXWkxXPx5YlPotNh1gtTYSiJ%2F8OjS3tdDXIX9Lk1CM38qNRXQAzWQbBtoveaIUKdzAPyh%2FIWAITYFh31Ij85lZR0YSs5ACUDjo0esuEpuqDfh%2Fs5HGQyxOqvDVLzbPVUOEVcjblagLmd0IwreP9vgY6pgHLwlmCCrMlsu84oVwro3uNZyQP71NnMamwYlCmEBcFp6g%2B%2BYy53zxIQUX9sWl%2FSPbAGh%2BFvNOiEtwcCahZ%2FgseYv7tMzzwSFWGEL0uOS%2BeGq5euT6YcMeY6%2BSDmSLBRb%2FtV3vrrBp9YZlh%2FdBqAlNf3emtNYoNsiZC59r74dFNJI9GB%2Fd2XqYu76Yw%2FwFUvvkpAc5PRrznwkCRgdgphHtbZBhoBriy&X-Amz-Signature=95585148640d3a9e9f331304636e83be8e10c590558be5bca7463c22c0581d80&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WVYLZJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFMAmSxkTBI09DwPf7FKAeX4UEaFd%2F6sZ1%2FvYtKE00NeAiBbGDro%2BBdYhEC%2BrzvpWj0qAQjOHED165sqz%2FKtrU2VZCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtBFgMxCfm7IW62GKtwDBAdnw531IAWWuA39B56ZrUcD7qQfCAV9kMJkfID2qBieDQl8%2BaQa7p6vreWG92YAH6Xcl94wcJQcnfNDKBNN2IGtvsFpsrRx%2B8hhtJJ3LMizi1DLDvMK38x99pLuexwahLOShVuU%2Bv991ZHdpLkF96CJCYtzw5kZEvp3N%2B5jrZ69Oh1tZTuYncrrTyFBKv7r%2BaS%2BWODeclOZbsDm9C0CmS35tjh8d5zd%2FysBwW6sEOzzPHOwQBhr7m9aZr3ohaWV4zMhc2Lp8qmkOwJzn3A%2B4RsHHU0atqVwFnRTKNbgwvCA66j1AfacLfa1SP1zdHaSfj3xSY%2FQTtU1f%2FRYmPjJ5OT2lsqRTvAEgc2RnNbHEWwgm2wx4DK3lcARvzyRqbuQIpCcmfOM28dmoWWzZCv06%2BPPsL0RpPyi90nMKF%2FWL3JY%2BUgKBMwiPkHfr7A8a15cQOYeLJpifTC1AZYcxUJJf6XH8lK89QWv4Q18g3fdOwK%2F6iXWkxXPx5YlPotNh1gtTYSiJ%2F8OjS3tdDXIX9Lk1CM38qNRXQAzWQbBtoveaIUKdzAPyh%2FIWAITYFh31Ij85lZR0YSs5ACUDjo0esuEpuqDfh%2Fs5HGQyxOqvDVLzbPVUOEVcjblagLmd0IwreP9vgY6pgHLwlmCCrMlsu84oVwro3uNZyQP71NnMamwYlCmEBcFp6g%2B%2BYy53zxIQUX9sWl%2FSPbAGh%2BFvNOiEtwcCahZ%2FgseYv7tMzzwSFWGEL0uOS%2BeGq5euT6YcMeY6%2BSDmSLBRb%2FtV3vrrBp9YZlh%2FdBqAlNf3emtNYoNsiZC59r74dFNJI9GB%2Fd2XqYu76Yw%2FwFUvvkpAc5PRrznwkCRgdgphHtbZBhoBriy&X-Amz-Signature=49ee2778a3ad996f8e99f2511ef5d727787522fa378422a0340cf2cd61e0c53a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VMJNDC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjMLWV5ZFpN2NqXfVcpbXRZnMoUIkwac%2ByZx7aiVAsTAiEApFkFxKdiuibjxuYTzAv5ma%2FcFgDira2rel67165VhBEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuXsAFLfilKtZ%2BPpircAyx3BNBBWq%2FGpaLUrhqXXkujnpF8ENPOGuMRPRiJtbQaITHt5S8QPsJieIa0G%2BkfUoDfVliarZ4HRPSWCH57WnJP7g7u%2BkmZ%2BasxPx5uRoWuQsOwtFMNgAltOMj1p%2By7AVPBr%2FRtEOEfVPgV%2Ffe26Gv%2BcIp05cj6NbRNOc5WwmgrURYK7W6%2FP96C5rklKyaJI0YSYon8R4i1HMo9J2ocOz5efv%2B1ed2V2qFOHMWQV1oqtctw%2FLXGTucoGBT2IhkJ%2FmaBLhUhHokktJKxFZnZ%2BGun4ktNJ6qDLydH%2F1U0WWHFFMgo747ipviE9VBsc%2BKgrsbq5lPv8GcS6vvX69AK8nJi5AoqiPGismpmUa2nbHBLbBqE2opZSq0qZ4lLfcHAKWwiwtcdSZ7ud5Qnu81m9qeL7xveyzHd3uH0e8G53BJz5C%2FQbRjCLymiUnjh58StZn9EwLRwKNkpvNLn5i4rYlZp0mj3c8y9nWsv0M%2BDJUNU5zHwvT%2FqH9BTaBJYRjvVCu66NsteZTZtRQ8J1TUyr3qUFG3wNDk%2BOKKaespBd3SE4fd1L3gq%2FieX079sIXuMG9WGVrnc02e3GFLhz7LFMvQuGAPiaXZrrxCnSeXI1XvT4dVap2Bb%2FN0xdOKQMPf0%2B8AGOqUBbLt%2FDC20m3d%2FpE6gRtjZzsW1GQb8pp7VJf3OYHysh75uZwfF%2FBcC71qfvDdFI9IEmoTMtomCLg7ijpweZffI3pfK1oyeTTXrVTqjWMbgCtNBfP9blZVGqW83mcJ0Us5EGveOW7p4X1p6C4AzsakisMyVnFPMnfezWGsuKB2tTYfOcuuNGoF9QCaC6tGPN1fiqryrhPnnFXtxN5AS%2FnIK%2Bi6xqZ%2BF&X-Amz-Signature=292aefb1cd7c8fd20d4e5ed53679cddd885174e284b72539cc14ae20d84e7f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VMJNDC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjMLWV5ZFpN2NqXfVcpbXRZnMoUIkwac%2ByZx7aiVAsTAiEApFkFxKdiuibjxuYTzAv5ma%2FcFgDira2rel67165VhBEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuXsAFLfilKtZ%2BPpircAyx3BNBBWq%2FGpaLUrhqXXkujnpF8ENPOGuMRPRiJtbQaITHt5S8QPsJieIa0G%2BkfUoDfVliarZ4HRPSWCH57WnJP7g7u%2BkmZ%2BasxPx5uRoWuQsOwtFMNgAltOMj1p%2By7AVPBr%2FRtEOEfVPgV%2Ffe26Gv%2BcIp05cj6NbRNOc5WwmgrURYK7W6%2FP96C5rklKyaJI0YSYon8R4i1HMo9J2ocOz5efv%2B1ed2V2qFOHMWQV1oqtctw%2FLXGTucoGBT2IhkJ%2FmaBLhUhHokktJKxFZnZ%2BGun4ktNJ6qDLydH%2F1U0WWHFFMgo747ipviE9VBsc%2BKgrsbq5lPv8GcS6vvX69AK8nJi5AoqiPGismpmUa2nbHBLbBqE2opZSq0qZ4lLfcHAKWwiwtcdSZ7ud5Qnu81m9qeL7xveyzHd3uH0e8G53BJz5C%2FQbRjCLymiUnjh58StZn9EwLRwKNkpvNLn5i4rYlZp0mj3c8y9nWsv0M%2BDJUNU5zHwvT%2FqH9BTaBJYRjvVCu66NsteZTZtRQ8J1TUyr3qUFG3wNDk%2BOKKaespBd3SE4fd1L3gq%2FieX079sIXuMG9WGVrnc02e3GFLhz7LFMvQuGAPiaXZrrxCnSeXI1XvT4dVap2Bb%2FN0xdOKQMPf0%2B8AGOqUBbLt%2FDC20m3d%2FpE6gRtjZzsW1GQb8pp7VJf3OYHysh75uZwfF%2FBcC71qfvDdFI9IEmoTMtomCLg7ijpweZffI3pfK1oyeTTXrVTqjWMbgCtNBfP9blZVGqW83mcJ0Us5EGveOW7p4X1p6C4AzsakisMyVnFPMnfezWGsuKB2tTYfOcuuNGoF9QCaC6tGPN1fiqryrhPnnFXtxN5AS%2FnIK%2Bi6xqZ%2BF&X-Amz-Signature=f7b20d910e51a3d058a97a985ecab6b30f0367040c03a7cb0dfdc8ac5ae81b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VMJNDC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjMLWV5ZFpN2NqXfVcpbXRZnMoUIkwac%2ByZx7aiVAsTAiEApFkFxKdiuibjxuYTzAv5ma%2FcFgDira2rel67165VhBEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuXsAFLfilKtZ%2BPpircAyx3BNBBWq%2FGpaLUrhqXXkujnpF8ENPOGuMRPRiJtbQaITHt5S8QPsJieIa0G%2BkfUoDfVliarZ4HRPSWCH57WnJP7g7u%2BkmZ%2BasxPx5uRoWuQsOwtFMNgAltOMj1p%2By7AVPBr%2FRtEOEfVPgV%2Ffe26Gv%2BcIp05cj6NbRNOc5WwmgrURYK7W6%2FP96C5rklKyaJI0YSYon8R4i1HMo9J2ocOz5efv%2B1ed2V2qFOHMWQV1oqtctw%2FLXGTucoGBT2IhkJ%2FmaBLhUhHokktJKxFZnZ%2BGun4ktNJ6qDLydH%2F1U0WWHFFMgo747ipviE9VBsc%2BKgrsbq5lPv8GcS6vvX69AK8nJi5AoqiPGismpmUa2nbHBLbBqE2opZSq0qZ4lLfcHAKWwiwtcdSZ7ud5Qnu81m9qeL7xveyzHd3uH0e8G53BJz5C%2FQbRjCLymiUnjh58StZn9EwLRwKNkpvNLn5i4rYlZp0mj3c8y9nWsv0M%2BDJUNU5zHwvT%2FqH9BTaBJYRjvVCu66NsteZTZtRQ8J1TUyr3qUFG3wNDk%2BOKKaespBd3SE4fd1L3gq%2FieX079sIXuMG9WGVrnc02e3GFLhz7LFMvQuGAPiaXZrrxCnSeXI1XvT4dVap2Bb%2FN0xdOKQMPf0%2B8AGOqUBbLt%2FDC20m3d%2FpE6gRtjZzsW1GQb8pp7VJf3OYHysh75uZwfF%2FBcC71qfvDdFI9IEmoTMtomCLg7ijpweZffI3pfK1oyeTTXrVTqjWMbgCtNBfP9blZVGqW83mcJ0Us5EGveOW7p4X1p6C4AzsakisMyVnFPMnfezWGsuKB2tTYfOcuuNGoF9QCaC6tGPN1fiqryrhPnnFXtxN5AS%2FnIK%2Bi6xqZ%2BF&X-Amz-Signature=5d220a5ce80f2d7f42f0ac0365a8d59b30132ecd49a041e5d3031589fa3f71ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VMJNDC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjMLWV5ZFpN2NqXfVcpbXRZnMoUIkwac%2ByZx7aiVAsTAiEApFkFxKdiuibjxuYTzAv5ma%2FcFgDira2rel67165VhBEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuXsAFLfilKtZ%2BPpircAyx3BNBBWq%2FGpaLUrhqXXkujnpF8ENPOGuMRPRiJtbQaITHt5S8QPsJieIa0G%2BkfUoDfVliarZ4HRPSWCH57WnJP7g7u%2BkmZ%2BasxPx5uRoWuQsOwtFMNgAltOMj1p%2By7AVPBr%2FRtEOEfVPgV%2Ffe26Gv%2BcIp05cj6NbRNOc5WwmgrURYK7W6%2FP96C5rklKyaJI0YSYon8R4i1HMo9J2ocOz5efv%2B1ed2V2qFOHMWQV1oqtctw%2FLXGTucoGBT2IhkJ%2FmaBLhUhHokktJKxFZnZ%2BGun4ktNJ6qDLydH%2F1U0WWHFFMgo747ipviE9VBsc%2BKgrsbq5lPv8GcS6vvX69AK8nJi5AoqiPGismpmUa2nbHBLbBqE2opZSq0qZ4lLfcHAKWwiwtcdSZ7ud5Qnu81m9qeL7xveyzHd3uH0e8G53BJz5C%2FQbRjCLymiUnjh58StZn9EwLRwKNkpvNLn5i4rYlZp0mj3c8y9nWsv0M%2BDJUNU5zHwvT%2FqH9BTaBJYRjvVCu66NsteZTZtRQ8J1TUyr3qUFG3wNDk%2BOKKaespBd3SE4fd1L3gq%2FieX079sIXuMG9WGVrnc02e3GFLhz7LFMvQuGAPiaXZrrxCnSeXI1XvT4dVap2Bb%2FN0xdOKQMPf0%2B8AGOqUBbLt%2FDC20m3d%2FpE6gRtjZzsW1GQb8pp7VJf3OYHysh75uZwfF%2FBcC71qfvDdFI9IEmoTMtomCLg7ijpweZffI3pfK1oyeTTXrVTqjWMbgCtNBfP9blZVGqW83mcJ0Us5EGveOW7p4X1p6C4AzsakisMyVnFPMnfezWGsuKB2tTYfOcuuNGoF9QCaC6tGPN1fiqryrhPnnFXtxN5AS%2FnIK%2Bi6xqZ%2BF&X-Amz-Signature=cb5882ddbe9e45510b17262a16494c3d54d56f7d27425f673cb4f0c66d62c404&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VMJNDC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjMLWV5ZFpN2NqXfVcpbXRZnMoUIkwac%2ByZx7aiVAsTAiEApFkFxKdiuibjxuYTzAv5ma%2FcFgDira2rel67165VhBEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuXsAFLfilKtZ%2BPpircAyx3BNBBWq%2FGpaLUrhqXXkujnpF8ENPOGuMRPRiJtbQaITHt5S8QPsJieIa0G%2BkfUoDfVliarZ4HRPSWCH57WnJP7g7u%2BkmZ%2BasxPx5uRoWuQsOwtFMNgAltOMj1p%2By7AVPBr%2FRtEOEfVPgV%2Ffe26Gv%2BcIp05cj6NbRNOc5WwmgrURYK7W6%2FP96C5rklKyaJI0YSYon8R4i1HMo9J2ocOz5efv%2B1ed2V2qFOHMWQV1oqtctw%2FLXGTucoGBT2IhkJ%2FmaBLhUhHokktJKxFZnZ%2BGun4ktNJ6qDLydH%2F1U0WWHFFMgo747ipviE9VBsc%2BKgrsbq5lPv8GcS6vvX69AK8nJi5AoqiPGismpmUa2nbHBLbBqE2opZSq0qZ4lLfcHAKWwiwtcdSZ7ud5Qnu81m9qeL7xveyzHd3uH0e8G53BJz5C%2FQbRjCLymiUnjh58StZn9EwLRwKNkpvNLn5i4rYlZp0mj3c8y9nWsv0M%2BDJUNU5zHwvT%2FqH9BTaBJYRjvVCu66NsteZTZtRQ8J1TUyr3qUFG3wNDk%2BOKKaespBd3SE4fd1L3gq%2FieX079sIXuMG9WGVrnc02e3GFLhz7LFMvQuGAPiaXZrrxCnSeXI1XvT4dVap2Bb%2FN0xdOKQMPf0%2B8AGOqUBbLt%2FDC20m3d%2FpE6gRtjZzsW1GQb8pp7VJf3OYHysh75uZwfF%2FBcC71qfvDdFI9IEmoTMtomCLg7ijpweZffI3pfK1oyeTTXrVTqjWMbgCtNBfP9blZVGqW83mcJ0Us5EGveOW7p4X1p6C4AzsakisMyVnFPMnfezWGsuKB2tTYfOcuuNGoF9QCaC6tGPN1fiqryrhPnnFXtxN5AS%2FnIK%2Bi6xqZ%2BF&X-Amz-Signature=ef784adc1ffb5173011a8ae01d1835fdb78c6116d6fc47e160ee7a9df86e67b7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VMJNDC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjMLWV5ZFpN2NqXfVcpbXRZnMoUIkwac%2ByZx7aiVAsTAiEApFkFxKdiuibjxuYTzAv5ma%2FcFgDira2rel67165VhBEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuXsAFLfilKtZ%2BPpircAyx3BNBBWq%2FGpaLUrhqXXkujnpF8ENPOGuMRPRiJtbQaITHt5S8QPsJieIa0G%2BkfUoDfVliarZ4HRPSWCH57WnJP7g7u%2BkmZ%2BasxPx5uRoWuQsOwtFMNgAltOMj1p%2By7AVPBr%2FRtEOEfVPgV%2Ffe26Gv%2BcIp05cj6NbRNOc5WwmgrURYK7W6%2FP96C5rklKyaJI0YSYon8R4i1HMo9J2ocOz5efv%2B1ed2V2qFOHMWQV1oqtctw%2FLXGTucoGBT2IhkJ%2FmaBLhUhHokktJKxFZnZ%2BGun4ktNJ6qDLydH%2F1U0WWHFFMgo747ipviE9VBsc%2BKgrsbq5lPv8GcS6vvX69AK8nJi5AoqiPGismpmUa2nbHBLbBqE2opZSq0qZ4lLfcHAKWwiwtcdSZ7ud5Qnu81m9qeL7xveyzHd3uH0e8G53BJz5C%2FQbRjCLymiUnjh58StZn9EwLRwKNkpvNLn5i4rYlZp0mj3c8y9nWsv0M%2BDJUNU5zHwvT%2FqH9BTaBJYRjvVCu66NsteZTZtRQ8J1TUyr3qUFG3wNDk%2BOKKaespBd3SE4fd1L3gq%2FieX079sIXuMG9WGVrnc02e3GFLhz7LFMvQuGAPiaXZrrxCnSeXI1XvT4dVap2Bb%2FN0xdOKQMPf0%2B8AGOqUBbLt%2FDC20m3d%2FpE6gRtjZzsW1GQb8pp7VJf3OYHysh75uZwfF%2FBcC71qfvDdFI9IEmoTMtomCLg7ijpweZffI3pfK1oyeTTXrVTqjWMbgCtNBfP9blZVGqW83mcJ0Us5EGveOW7p4X1p6C4AzsakisMyVnFPMnfezWGsuKB2tTYfOcuuNGoF9QCaC6tGPN1fiqryrhPnnFXtxN5AS%2FnIK%2Bi6xqZ%2BF&X-Amz-Signature=b4738b3b1444b973ede002e644a655738f8caa4302c9f881574e80f2a6661730&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VMJNDC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjMLWV5ZFpN2NqXfVcpbXRZnMoUIkwac%2ByZx7aiVAsTAiEApFkFxKdiuibjxuYTzAv5ma%2FcFgDira2rel67165VhBEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuXsAFLfilKtZ%2BPpircAyx3BNBBWq%2FGpaLUrhqXXkujnpF8ENPOGuMRPRiJtbQaITHt5S8QPsJieIa0G%2BkfUoDfVliarZ4HRPSWCH57WnJP7g7u%2BkmZ%2BasxPx5uRoWuQsOwtFMNgAltOMj1p%2By7AVPBr%2FRtEOEfVPgV%2Ffe26Gv%2BcIp05cj6NbRNOc5WwmgrURYK7W6%2FP96C5rklKyaJI0YSYon8R4i1HMo9J2ocOz5efv%2B1ed2V2qFOHMWQV1oqtctw%2FLXGTucoGBT2IhkJ%2FmaBLhUhHokktJKxFZnZ%2BGun4ktNJ6qDLydH%2F1U0WWHFFMgo747ipviE9VBsc%2BKgrsbq5lPv8GcS6vvX69AK8nJi5AoqiPGismpmUa2nbHBLbBqE2opZSq0qZ4lLfcHAKWwiwtcdSZ7ud5Qnu81m9qeL7xveyzHd3uH0e8G53BJz5C%2FQbRjCLymiUnjh58StZn9EwLRwKNkpvNLn5i4rYlZp0mj3c8y9nWsv0M%2BDJUNU5zHwvT%2FqH9BTaBJYRjvVCu66NsteZTZtRQ8J1TUyr3qUFG3wNDk%2BOKKaespBd3SE4fd1L3gq%2FieX079sIXuMG9WGVrnc02e3GFLhz7LFMvQuGAPiaXZrrxCnSeXI1XvT4dVap2Bb%2FN0xdOKQMPf0%2B8AGOqUBbLt%2FDC20m3d%2FpE6gRtjZzsW1GQb8pp7VJf3OYHysh75uZwfF%2FBcC71qfvDdFI9IEmoTMtomCLg7ijpweZffI3pfK1oyeTTXrVTqjWMbgCtNBfP9blZVGqW83mcJ0Us5EGveOW7p4X1p6C4AzsakisMyVnFPMnfezWGsuKB2tTYfOcuuNGoF9QCaC6tGPN1fiqryrhPnnFXtxN5AS%2FnIK%2Bi6xqZ%2BF&X-Amz-Signature=f8bc865cbe7f92837396e56c5692dd52b9dc5b8afb7f6b4b55458c6c235561c8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

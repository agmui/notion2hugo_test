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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652677VC2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC3mlakAEh%2F1jeL3qHgOjYpSA9urMnfTCc7B2eYFHKWGAIhAPndWjMg7eo856G%2B%2BNRIJzydwKjToAd%2FmiCUjgCHcFfxKv8DCB4QABoMNjM3NDIzMTgzODA1Igw82E1GogssIZj%2FU8Yq3APzwXiyFFC9yJqxMDKpzz0DMnnZAji15NVu2p6r3Y8GxgA2W9eBwOedA0c%2Bu%2FWUzDn%2B13BFXNsEHMC9iyxFT%2BhzHdDta07%2BtZuQ8aaLT8Ym3KDvGQpbKGXhfP6OHftBho7We92Kus0b28arc%2F1cTNQtUn%2B%2FtpLBQX2jY9wthVbx5%2BK6sGoK21pa4gLqCv4hABqi1JIm4dQjN1OcqwKMiXG7Gf5vpFOg3juIREwqiUY8ykJxb9ETvfGmlnUwrxSw%2Fv3givlObc%2B22x5hY1R%2FJw1wKXvDfuLVofPiI%2FC1RYwz13OSiDQPN7HwZdHDRHyQJTv3qxotyJuOmzi%2FtFxOKWv%2F2nZt%2B0qRDekJfZmK%2FOfFn6gqLaBM5mHi7Kwip0wpKCAp9mMu%2Fmgx9sQkuoVjJnOkvxJtvsLuDC4VpHoC%2BGsjAoSngKH5Luatk0yMbgjxiNz24PudslfZg0jGFTwKExcEIbM5ztRt%2F7NPv91FqB3ne%2BpJg8bsOC7hdZClucnz6xMto4KgckIi7qTV8lYLmPgs0ujMIWck0ngeyaXeVGh6mfs4FjcX2cgPWO4Kk8U%2Fm05FoHFB7LEtIJbzl%2FCC8bohd%2Fu%2FFwSv2M4UiVkkRTHh2zHPxhXlDqRIrxP62TDDrN%2FABjqkAZzbp1NrcSmET5Dn3WqEkJ4uJ26z%2Bf3X0%2Bzj%2BhajtJErVmZ3mpmQvIFn5rrd9WaGVm2MlsdwxBWpHWkm2XiITnbAYx4XGW6Nf6PW4Tp7VsKQVGk7AKvLsKqEji5eQK7nvDZO0MKJAwbxicunrcurTpW1M8pm%2Bns%2BcXyAMsccIcW45hYNEIMQh9hvy%2BiecaBoEApPrfdIhuAxxO1%2BMsclEnTDOnkP&X-Amz-Signature=509fb765c2267fc09ae3b165ea25b2ddc2adc25927c6a78c27b6d06a6961a565&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652677VC2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC3mlakAEh%2F1jeL3qHgOjYpSA9urMnfTCc7B2eYFHKWGAIhAPndWjMg7eo856G%2B%2BNRIJzydwKjToAd%2FmiCUjgCHcFfxKv8DCB4QABoMNjM3NDIzMTgzODA1Igw82E1GogssIZj%2FU8Yq3APzwXiyFFC9yJqxMDKpzz0DMnnZAji15NVu2p6r3Y8GxgA2W9eBwOedA0c%2Bu%2FWUzDn%2B13BFXNsEHMC9iyxFT%2BhzHdDta07%2BtZuQ8aaLT8Ym3KDvGQpbKGXhfP6OHftBho7We92Kus0b28arc%2F1cTNQtUn%2B%2FtpLBQX2jY9wthVbx5%2BK6sGoK21pa4gLqCv4hABqi1JIm4dQjN1OcqwKMiXG7Gf5vpFOg3juIREwqiUY8ykJxb9ETvfGmlnUwrxSw%2Fv3givlObc%2B22x5hY1R%2FJw1wKXvDfuLVofPiI%2FC1RYwz13OSiDQPN7HwZdHDRHyQJTv3qxotyJuOmzi%2FtFxOKWv%2F2nZt%2B0qRDekJfZmK%2FOfFn6gqLaBM5mHi7Kwip0wpKCAp9mMu%2Fmgx9sQkuoVjJnOkvxJtvsLuDC4VpHoC%2BGsjAoSngKH5Luatk0yMbgjxiNz24PudslfZg0jGFTwKExcEIbM5ztRt%2F7NPv91FqB3ne%2BpJg8bsOC7hdZClucnz6xMto4KgckIi7qTV8lYLmPgs0ujMIWck0ngeyaXeVGh6mfs4FjcX2cgPWO4Kk8U%2Fm05FoHFB7LEtIJbzl%2FCC8bohd%2Fu%2FFwSv2M4UiVkkRTHh2zHPxhXlDqRIrxP62TDDrN%2FABjqkAZzbp1NrcSmET5Dn3WqEkJ4uJ26z%2Bf3X0%2Bzj%2BhajtJErVmZ3mpmQvIFn5rrd9WaGVm2MlsdwxBWpHWkm2XiITnbAYx4XGW6Nf6PW4Tp7VsKQVGk7AKvLsKqEji5eQK7nvDZO0MKJAwbxicunrcurTpW1M8pm%2Bns%2BcXyAMsccIcW45hYNEIMQh9hvy%2BiecaBoEApPrfdIhuAxxO1%2BMsclEnTDOnkP&X-Amz-Signature=51f8713d1cc88d38e98a8e88aa2cdd1009fa73eee0810572fe3ea3ad8d9c6ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652677VC2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC3mlakAEh%2F1jeL3qHgOjYpSA9urMnfTCc7B2eYFHKWGAIhAPndWjMg7eo856G%2B%2BNRIJzydwKjToAd%2FmiCUjgCHcFfxKv8DCB4QABoMNjM3NDIzMTgzODA1Igw82E1GogssIZj%2FU8Yq3APzwXiyFFC9yJqxMDKpzz0DMnnZAji15NVu2p6r3Y8GxgA2W9eBwOedA0c%2Bu%2FWUzDn%2B13BFXNsEHMC9iyxFT%2BhzHdDta07%2BtZuQ8aaLT8Ym3KDvGQpbKGXhfP6OHftBho7We92Kus0b28arc%2F1cTNQtUn%2B%2FtpLBQX2jY9wthVbx5%2BK6sGoK21pa4gLqCv4hABqi1JIm4dQjN1OcqwKMiXG7Gf5vpFOg3juIREwqiUY8ykJxb9ETvfGmlnUwrxSw%2Fv3givlObc%2B22x5hY1R%2FJw1wKXvDfuLVofPiI%2FC1RYwz13OSiDQPN7HwZdHDRHyQJTv3qxotyJuOmzi%2FtFxOKWv%2F2nZt%2B0qRDekJfZmK%2FOfFn6gqLaBM5mHi7Kwip0wpKCAp9mMu%2Fmgx9sQkuoVjJnOkvxJtvsLuDC4VpHoC%2BGsjAoSngKH5Luatk0yMbgjxiNz24PudslfZg0jGFTwKExcEIbM5ztRt%2F7NPv91FqB3ne%2BpJg8bsOC7hdZClucnz6xMto4KgckIi7qTV8lYLmPgs0ujMIWck0ngeyaXeVGh6mfs4FjcX2cgPWO4Kk8U%2Fm05FoHFB7LEtIJbzl%2FCC8bohd%2Fu%2FFwSv2M4UiVkkRTHh2zHPxhXlDqRIrxP62TDDrN%2FABjqkAZzbp1NrcSmET5Dn3WqEkJ4uJ26z%2Bf3X0%2Bzj%2BhajtJErVmZ3mpmQvIFn5rrd9WaGVm2MlsdwxBWpHWkm2XiITnbAYx4XGW6Nf6PW4Tp7VsKQVGk7AKvLsKqEji5eQK7nvDZO0MKJAwbxicunrcurTpW1M8pm%2Bns%2BcXyAMsccIcW45hYNEIMQh9hvy%2BiecaBoEApPrfdIhuAxxO1%2BMsclEnTDOnkP&X-Amz-Signature=2441a3a995940e83c2bb4809ac3fe87cb910fe0c44224a07ca98e2bad5312f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652677VC2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC3mlakAEh%2F1jeL3qHgOjYpSA9urMnfTCc7B2eYFHKWGAIhAPndWjMg7eo856G%2B%2BNRIJzydwKjToAd%2FmiCUjgCHcFfxKv8DCB4QABoMNjM3NDIzMTgzODA1Igw82E1GogssIZj%2FU8Yq3APzwXiyFFC9yJqxMDKpzz0DMnnZAji15NVu2p6r3Y8GxgA2W9eBwOedA0c%2Bu%2FWUzDn%2B13BFXNsEHMC9iyxFT%2BhzHdDta07%2BtZuQ8aaLT8Ym3KDvGQpbKGXhfP6OHftBho7We92Kus0b28arc%2F1cTNQtUn%2B%2FtpLBQX2jY9wthVbx5%2BK6sGoK21pa4gLqCv4hABqi1JIm4dQjN1OcqwKMiXG7Gf5vpFOg3juIREwqiUY8ykJxb9ETvfGmlnUwrxSw%2Fv3givlObc%2B22x5hY1R%2FJw1wKXvDfuLVofPiI%2FC1RYwz13OSiDQPN7HwZdHDRHyQJTv3qxotyJuOmzi%2FtFxOKWv%2F2nZt%2B0qRDekJfZmK%2FOfFn6gqLaBM5mHi7Kwip0wpKCAp9mMu%2Fmgx9sQkuoVjJnOkvxJtvsLuDC4VpHoC%2BGsjAoSngKH5Luatk0yMbgjxiNz24PudslfZg0jGFTwKExcEIbM5ztRt%2F7NPv91FqB3ne%2BpJg8bsOC7hdZClucnz6xMto4KgckIi7qTV8lYLmPgs0ujMIWck0ngeyaXeVGh6mfs4FjcX2cgPWO4Kk8U%2Fm05FoHFB7LEtIJbzl%2FCC8bohd%2Fu%2FFwSv2M4UiVkkRTHh2zHPxhXlDqRIrxP62TDDrN%2FABjqkAZzbp1NrcSmET5Dn3WqEkJ4uJ26z%2Bf3X0%2Bzj%2BhajtJErVmZ3mpmQvIFn5rrd9WaGVm2MlsdwxBWpHWkm2XiITnbAYx4XGW6Nf6PW4Tp7VsKQVGk7AKvLsKqEji5eQK7nvDZO0MKJAwbxicunrcurTpW1M8pm%2Bns%2BcXyAMsccIcW45hYNEIMQh9hvy%2BiecaBoEApPrfdIhuAxxO1%2BMsclEnTDOnkP&X-Amz-Signature=d75842f5a3432f6271a4862f808e768bf805abbb52e97d0d89b168c1e941c961&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652677VC2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC3mlakAEh%2F1jeL3qHgOjYpSA9urMnfTCc7B2eYFHKWGAIhAPndWjMg7eo856G%2B%2BNRIJzydwKjToAd%2FmiCUjgCHcFfxKv8DCB4QABoMNjM3NDIzMTgzODA1Igw82E1GogssIZj%2FU8Yq3APzwXiyFFC9yJqxMDKpzz0DMnnZAji15NVu2p6r3Y8GxgA2W9eBwOedA0c%2Bu%2FWUzDn%2B13BFXNsEHMC9iyxFT%2BhzHdDta07%2BtZuQ8aaLT8Ym3KDvGQpbKGXhfP6OHftBho7We92Kus0b28arc%2F1cTNQtUn%2B%2FtpLBQX2jY9wthVbx5%2BK6sGoK21pa4gLqCv4hABqi1JIm4dQjN1OcqwKMiXG7Gf5vpFOg3juIREwqiUY8ykJxb9ETvfGmlnUwrxSw%2Fv3givlObc%2B22x5hY1R%2FJw1wKXvDfuLVofPiI%2FC1RYwz13OSiDQPN7HwZdHDRHyQJTv3qxotyJuOmzi%2FtFxOKWv%2F2nZt%2B0qRDekJfZmK%2FOfFn6gqLaBM5mHi7Kwip0wpKCAp9mMu%2Fmgx9sQkuoVjJnOkvxJtvsLuDC4VpHoC%2BGsjAoSngKH5Luatk0yMbgjxiNz24PudslfZg0jGFTwKExcEIbM5ztRt%2F7NPv91FqB3ne%2BpJg8bsOC7hdZClucnz6xMto4KgckIi7qTV8lYLmPgs0ujMIWck0ngeyaXeVGh6mfs4FjcX2cgPWO4Kk8U%2Fm05FoHFB7LEtIJbzl%2FCC8bohd%2Fu%2FFwSv2M4UiVkkRTHh2zHPxhXlDqRIrxP62TDDrN%2FABjqkAZzbp1NrcSmET5Dn3WqEkJ4uJ26z%2Bf3X0%2Bzj%2BhajtJErVmZ3mpmQvIFn5rrd9WaGVm2MlsdwxBWpHWkm2XiITnbAYx4XGW6Nf6PW4Tp7VsKQVGk7AKvLsKqEji5eQK7nvDZO0MKJAwbxicunrcurTpW1M8pm%2Bns%2BcXyAMsccIcW45hYNEIMQh9hvy%2BiecaBoEApPrfdIhuAxxO1%2BMsclEnTDOnkP&X-Amz-Signature=745b578c9a39868c843d5564a9817e6abfe9c97805bc73c0c4288088e7c64e73&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652677VC2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC3mlakAEh%2F1jeL3qHgOjYpSA9urMnfTCc7B2eYFHKWGAIhAPndWjMg7eo856G%2B%2BNRIJzydwKjToAd%2FmiCUjgCHcFfxKv8DCB4QABoMNjM3NDIzMTgzODA1Igw82E1GogssIZj%2FU8Yq3APzwXiyFFC9yJqxMDKpzz0DMnnZAji15NVu2p6r3Y8GxgA2W9eBwOedA0c%2Bu%2FWUzDn%2B13BFXNsEHMC9iyxFT%2BhzHdDta07%2BtZuQ8aaLT8Ym3KDvGQpbKGXhfP6OHftBho7We92Kus0b28arc%2F1cTNQtUn%2B%2FtpLBQX2jY9wthVbx5%2BK6sGoK21pa4gLqCv4hABqi1JIm4dQjN1OcqwKMiXG7Gf5vpFOg3juIREwqiUY8ykJxb9ETvfGmlnUwrxSw%2Fv3givlObc%2B22x5hY1R%2FJw1wKXvDfuLVofPiI%2FC1RYwz13OSiDQPN7HwZdHDRHyQJTv3qxotyJuOmzi%2FtFxOKWv%2F2nZt%2B0qRDekJfZmK%2FOfFn6gqLaBM5mHi7Kwip0wpKCAp9mMu%2Fmgx9sQkuoVjJnOkvxJtvsLuDC4VpHoC%2BGsjAoSngKH5Luatk0yMbgjxiNz24PudslfZg0jGFTwKExcEIbM5ztRt%2F7NPv91FqB3ne%2BpJg8bsOC7hdZClucnz6xMto4KgckIi7qTV8lYLmPgs0ujMIWck0ngeyaXeVGh6mfs4FjcX2cgPWO4Kk8U%2Fm05FoHFB7LEtIJbzl%2FCC8bohd%2Fu%2FFwSv2M4UiVkkRTHh2zHPxhXlDqRIrxP62TDDrN%2FABjqkAZzbp1NrcSmET5Dn3WqEkJ4uJ26z%2Bf3X0%2Bzj%2BhajtJErVmZ3mpmQvIFn5rrd9WaGVm2MlsdwxBWpHWkm2XiITnbAYx4XGW6Nf6PW4Tp7VsKQVGk7AKvLsKqEji5eQK7nvDZO0MKJAwbxicunrcurTpW1M8pm%2Bns%2BcXyAMsccIcW45hYNEIMQh9hvy%2BiecaBoEApPrfdIhuAxxO1%2BMsclEnTDOnkP&X-Amz-Signature=3897286df57d433f6ec96ff85b59933c68e82096eae5531ec688ea5c12d02bba&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652677VC2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC3mlakAEh%2F1jeL3qHgOjYpSA9urMnfTCc7B2eYFHKWGAIhAPndWjMg7eo856G%2B%2BNRIJzydwKjToAd%2FmiCUjgCHcFfxKv8DCB4QABoMNjM3NDIzMTgzODA1Igw82E1GogssIZj%2FU8Yq3APzwXiyFFC9yJqxMDKpzz0DMnnZAji15NVu2p6r3Y8GxgA2W9eBwOedA0c%2Bu%2FWUzDn%2B13BFXNsEHMC9iyxFT%2BhzHdDta07%2BtZuQ8aaLT8Ym3KDvGQpbKGXhfP6OHftBho7We92Kus0b28arc%2F1cTNQtUn%2B%2FtpLBQX2jY9wthVbx5%2BK6sGoK21pa4gLqCv4hABqi1JIm4dQjN1OcqwKMiXG7Gf5vpFOg3juIREwqiUY8ykJxb9ETvfGmlnUwrxSw%2Fv3givlObc%2B22x5hY1R%2FJw1wKXvDfuLVofPiI%2FC1RYwz13OSiDQPN7HwZdHDRHyQJTv3qxotyJuOmzi%2FtFxOKWv%2F2nZt%2B0qRDekJfZmK%2FOfFn6gqLaBM5mHi7Kwip0wpKCAp9mMu%2Fmgx9sQkuoVjJnOkvxJtvsLuDC4VpHoC%2BGsjAoSngKH5Luatk0yMbgjxiNz24PudslfZg0jGFTwKExcEIbM5ztRt%2F7NPv91FqB3ne%2BpJg8bsOC7hdZClucnz6xMto4KgckIi7qTV8lYLmPgs0ujMIWck0ngeyaXeVGh6mfs4FjcX2cgPWO4Kk8U%2Fm05FoHFB7LEtIJbzl%2FCC8bohd%2Fu%2FFwSv2M4UiVkkRTHh2zHPxhXlDqRIrxP62TDDrN%2FABjqkAZzbp1NrcSmET5Dn3WqEkJ4uJ26z%2Bf3X0%2Bzj%2BhajtJErVmZ3mpmQvIFn5rrd9WaGVm2MlsdwxBWpHWkm2XiITnbAYx4XGW6Nf6PW4Tp7VsKQVGk7AKvLsKqEji5eQK7nvDZO0MKJAwbxicunrcurTpW1M8pm%2Bns%2BcXyAMsccIcW45hYNEIMQh9hvy%2BiecaBoEApPrfdIhuAxxO1%2BMsclEnTDOnkP&X-Amz-Signature=7a6685b1f85a83c25169c74e6dd7b4b688fd592aff926fbd0b117a70ed86fd94&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEP3CM2T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICtFxctVP8Sw8J0PGR%2FRbwSieCmshpo%2FnKK90RB%2FeLx5AiBxme7PDxnXl4LSA5%2Fd0jHnqeh%2BHzgk3mli8EILN5KtSiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmm60TZVrftZAhXCKtwD0gRa0LOyYANARKELiMtM0CCIfZCp8GfAOfVWPfgeOEkOh2jCRH%2F%2BNO7ucaVcnWD0wUN2dadd%2FEo4jicml6ky9vryXSeryKQqKGY4GL9WpatU5XWhGXkOytHyahr%2BFH9h0Q%2Bb%2B32QwddPfOMxhgm1Uw6fScPv66%2B%2FJbjmi9nBdW7B%2F3kO1p7XHIACMtC2XmJ9eBhbaqn3yu3O4nTHLIHkrEb0zPhshzsI79UddjpLBJrfWjp8DgcDeBYIv%2BY0KeQQx2N%2BQA%2FqFwot90NbZhGnjhY%2BCedBAsHxMXowQotBLwTWJ6dkRbKiRwoIxuQ0ecfd%2FZxx37xjKB6t8txqpMrsKANIZlz3xgree4TKt5Ex9Cfx2O7sOi7%2Bxzx6YOOUKL%2FOi0yYpzGhkH3mv4nz5o%2Bq3NLUudYI%2BIpGPuruOvicNegSMbMfqvlLDBp5duC44yFalEQI%2F2vECknBHQmhH6VkRgRa4V4DNFN3eLZ0HO47RYTMDcfwA9NhiLJe4FXdeh4WQCradSvFp7a1BPo2aJ0UhUbbpWjpUCwRL6d9o5qKlujHKUVlpACiY1pTzpnZGMk1RFyHLL0uzlNBboNu8OLuIoRiI4bH6EQvNRCRnOQwn%2F2dfA3n1ufVHtI1eAcw%2BYbWwAY6pgElAJueVdGrkA8ShEMuiyvPRiBgMyNZ4GqVJtbT7DDmuuD81Pj1o5YXJWylSKCGMyz0BbCX%2FWIRg7x6QTesdX4A%2FlsAL5hyanUaSIrgAMTQOa5bNtGm3osjL9K6jUBBfqScjssz3%2FguHhJS7YJX3fZhGk4yod7KKDoj1O9HkDDwFBghqrMQQ1yQ23bffp2hJclFfRD1fmYJJY5cfQcn%2Fr83oSRi7DA%2F&X-Amz-Signature=c470700bfa42dda3893463aef36316f2be0e0ba9b62481da4d44c869277f8cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEP3CM2T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICtFxctVP8Sw8J0PGR%2FRbwSieCmshpo%2FnKK90RB%2FeLx5AiBxme7PDxnXl4LSA5%2Fd0jHnqeh%2BHzgk3mli8EILN5KtSiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmm60TZVrftZAhXCKtwD0gRa0LOyYANARKELiMtM0CCIfZCp8GfAOfVWPfgeOEkOh2jCRH%2F%2BNO7ucaVcnWD0wUN2dadd%2FEo4jicml6ky9vryXSeryKQqKGY4GL9WpatU5XWhGXkOytHyahr%2BFH9h0Q%2Bb%2B32QwddPfOMxhgm1Uw6fScPv66%2B%2FJbjmi9nBdW7B%2F3kO1p7XHIACMtC2XmJ9eBhbaqn3yu3O4nTHLIHkrEb0zPhshzsI79UddjpLBJrfWjp8DgcDeBYIv%2BY0KeQQx2N%2BQA%2FqFwot90NbZhGnjhY%2BCedBAsHxMXowQotBLwTWJ6dkRbKiRwoIxuQ0ecfd%2FZxx37xjKB6t8txqpMrsKANIZlz3xgree4TKt5Ex9Cfx2O7sOi7%2Bxzx6YOOUKL%2FOi0yYpzGhkH3mv4nz5o%2Bq3NLUudYI%2BIpGPuruOvicNegSMbMfqvlLDBp5duC44yFalEQI%2F2vECknBHQmhH6VkRgRa4V4DNFN3eLZ0HO47RYTMDcfwA9NhiLJe4FXdeh4WQCradSvFp7a1BPo2aJ0UhUbbpWjpUCwRL6d9o5qKlujHKUVlpACiY1pTzpnZGMk1RFyHLL0uzlNBboNu8OLuIoRiI4bH6EQvNRCRnOQwn%2F2dfA3n1ufVHtI1eAcw%2BYbWwAY6pgElAJueVdGrkA8ShEMuiyvPRiBgMyNZ4GqVJtbT7DDmuuD81Pj1o5YXJWylSKCGMyz0BbCX%2FWIRg7x6QTesdX4A%2FlsAL5hyanUaSIrgAMTQOa5bNtGm3osjL9K6jUBBfqScjssz3%2FguHhJS7YJX3fZhGk4yod7KKDoj1O9HkDDwFBghqrMQQ1yQ23bffp2hJclFfRD1fmYJJY5cfQcn%2Fr83oSRi7DA%2F&X-Amz-Signature=29d203ab3daa4fd4271a17abea4b094a4f1266e2dce5a31eb96f6914accaa286&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEP3CM2T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICtFxctVP8Sw8J0PGR%2FRbwSieCmshpo%2FnKK90RB%2FeLx5AiBxme7PDxnXl4LSA5%2Fd0jHnqeh%2BHzgk3mli8EILN5KtSiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmm60TZVrftZAhXCKtwD0gRa0LOyYANARKELiMtM0CCIfZCp8GfAOfVWPfgeOEkOh2jCRH%2F%2BNO7ucaVcnWD0wUN2dadd%2FEo4jicml6ky9vryXSeryKQqKGY4GL9WpatU5XWhGXkOytHyahr%2BFH9h0Q%2Bb%2B32QwddPfOMxhgm1Uw6fScPv66%2B%2FJbjmi9nBdW7B%2F3kO1p7XHIACMtC2XmJ9eBhbaqn3yu3O4nTHLIHkrEb0zPhshzsI79UddjpLBJrfWjp8DgcDeBYIv%2BY0KeQQx2N%2BQA%2FqFwot90NbZhGnjhY%2BCedBAsHxMXowQotBLwTWJ6dkRbKiRwoIxuQ0ecfd%2FZxx37xjKB6t8txqpMrsKANIZlz3xgree4TKt5Ex9Cfx2O7sOi7%2Bxzx6YOOUKL%2FOi0yYpzGhkH3mv4nz5o%2Bq3NLUudYI%2BIpGPuruOvicNegSMbMfqvlLDBp5duC44yFalEQI%2F2vECknBHQmhH6VkRgRa4V4DNFN3eLZ0HO47RYTMDcfwA9NhiLJe4FXdeh4WQCradSvFp7a1BPo2aJ0UhUbbpWjpUCwRL6d9o5qKlujHKUVlpACiY1pTzpnZGMk1RFyHLL0uzlNBboNu8OLuIoRiI4bH6EQvNRCRnOQwn%2F2dfA3n1ufVHtI1eAcw%2BYbWwAY6pgElAJueVdGrkA8ShEMuiyvPRiBgMyNZ4GqVJtbT7DDmuuD81Pj1o5YXJWylSKCGMyz0BbCX%2FWIRg7x6QTesdX4A%2FlsAL5hyanUaSIrgAMTQOa5bNtGm3osjL9K6jUBBfqScjssz3%2FguHhJS7YJX3fZhGk4yod7KKDoj1O9HkDDwFBghqrMQQ1yQ23bffp2hJclFfRD1fmYJJY5cfQcn%2Fr83oSRi7DA%2F&X-Amz-Signature=dfef1b0558c6372467a910b8c18d1d7a2ed372a9dc05e88f6384dba164a118ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEP3CM2T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICtFxctVP8Sw8J0PGR%2FRbwSieCmshpo%2FnKK90RB%2FeLx5AiBxme7PDxnXl4LSA5%2Fd0jHnqeh%2BHzgk3mli8EILN5KtSiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmm60TZVrftZAhXCKtwD0gRa0LOyYANARKELiMtM0CCIfZCp8GfAOfVWPfgeOEkOh2jCRH%2F%2BNO7ucaVcnWD0wUN2dadd%2FEo4jicml6ky9vryXSeryKQqKGY4GL9WpatU5XWhGXkOytHyahr%2BFH9h0Q%2Bb%2B32QwddPfOMxhgm1Uw6fScPv66%2B%2FJbjmi9nBdW7B%2F3kO1p7XHIACMtC2XmJ9eBhbaqn3yu3O4nTHLIHkrEb0zPhshzsI79UddjpLBJrfWjp8DgcDeBYIv%2BY0KeQQx2N%2BQA%2FqFwot90NbZhGnjhY%2BCedBAsHxMXowQotBLwTWJ6dkRbKiRwoIxuQ0ecfd%2FZxx37xjKB6t8txqpMrsKANIZlz3xgree4TKt5Ex9Cfx2O7sOi7%2Bxzx6YOOUKL%2FOi0yYpzGhkH3mv4nz5o%2Bq3NLUudYI%2BIpGPuruOvicNegSMbMfqvlLDBp5duC44yFalEQI%2F2vECknBHQmhH6VkRgRa4V4DNFN3eLZ0HO47RYTMDcfwA9NhiLJe4FXdeh4WQCradSvFp7a1BPo2aJ0UhUbbpWjpUCwRL6d9o5qKlujHKUVlpACiY1pTzpnZGMk1RFyHLL0uzlNBboNu8OLuIoRiI4bH6EQvNRCRnOQwn%2F2dfA3n1ufVHtI1eAcw%2BYbWwAY6pgElAJueVdGrkA8ShEMuiyvPRiBgMyNZ4GqVJtbT7DDmuuD81Pj1o5YXJWylSKCGMyz0BbCX%2FWIRg7x6QTesdX4A%2FlsAL5hyanUaSIrgAMTQOa5bNtGm3osjL9K6jUBBfqScjssz3%2FguHhJS7YJX3fZhGk4yod7KKDoj1O9HkDDwFBghqrMQQ1yQ23bffp2hJclFfRD1fmYJJY5cfQcn%2Fr83oSRi7DA%2F&X-Amz-Signature=0a2c83f1921dcefba40dbbe174ead82c7aabfc8d5260b21c6c3e75f5e9e93ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEP3CM2T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICtFxctVP8Sw8J0PGR%2FRbwSieCmshpo%2FnKK90RB%2FeLx5AiBxme7PDxnXl4LSA5%2Fd0jHnqeh%2BHzgk3mli8EILN5KtSiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmm60TZVrftZAhXCKtwD0gRa0LOyYANARKELiMtM0CCIfZCp8GfAOfVWPfgeOEkOh2jCRH%2F%2BNO7ucaVcnWD0wUN2dadd%2FEo4jicml6ky9vryXSeryKQqKGY4GL9WpatU5XWhGXkOytHyahr%2BFH9h0Q%2Bb%2B32QwddPfOMxhgm1Uw6fScPv66%2B%2FJbjmi9nBdW7B%2F3kO1p7XHIACMtC2XmJ9eBhbaqn3yu3O4nTHLIHkrEb0zPhshzsI79UddjpLBJrfWjp8DgcDeBYIv%2BY0KeQQx2N%2BQA%2FqFwot90NbZhGnjhY%2BCedBAsHxMXowQotBLwTWJ6dkRbKiRwoIxuQ0ecfd%2FZxx37xjKB6t8txqpMrsKANIZlz3xgree4TKt5Ex9Cfx2O7sOi7%2Bxzx6YOOUKL%2FOi0yYpzGhkH3mv4nz5o%2Bq3NLUudYI%2BIpGPuruOvicNegSMbMfqvlLDBp5duC44yFalEQI%2F2vECknBHQmhH6VkRgRa4V4DNFN3eLZ0HO47RYTMDcfwA9NhiLJe4FXdeh4WQCradSvFp7a1BPo2aJ0UhUbbpWjpUCwRL6d9o5qKlujHKUVlpACiY1pTzpnZGMk1RFyHLL0uzlNBboNu8OLuIoRiI4bH6EQvNRCRnOQwn%2F2dfA3n1ufVHtI1eAcw%2BYbWwAY6pgElAJueVdGrkA8ShEMuiyvPRiBgMyNZ4GqVJtbT7DDmuuD81Pj1o5YXJWylSKCGMyz0BbCX%2FWIRg7x6QTesdX4A%2FlsAL5hyanUaSIrgAMTQOa5bNtGm3osjL9K6jUBBfqScjssz3%2FguHhJS7YJX3fZhGk4yod7KKDoj1O9HkDDwFBghqrMQQ1yQ23bffp2hJclFfRD1fmYJJY5cfQcn%2Fr83oSRi7DA%2F&X-Amz-Signature=3aa1e360bd43159f99cd296a15436a447d2645a07a02aa6a205ad82898c57913&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEP3CM2T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICtFxctVP8Sw8J0PGR%2FRbwSieCmshpo%2FnKK90RB%2FeLx5AiBxme7PDxnXl4LSA5%2Fd0jHnqeh%2BHzgk3mli8EILN5KtSiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmm60TZVrftZAhXCKtwD0gRa0LOyYANARKELiMtM0CCIfZCp8GfAOfVWPfgeOEkOh2jCRH%2F%2BNO7ucaVcnWD0wUN2dadd%2FEo4jicml6ky9vryXSeryKQqKGY4GL9WpatU5XWhGXkOytHyahr%2BFH9h0Q%2Bb%2B32QwddPfOMxhgm1Uw6fScPv66%2B%2FJbjmi9nBdW7B%2F3kO1p7XHIACMtC2XmJ9eBhbaqn3yu3O4nTHLIHkrEb0zPhshzsI79UddjpLBJrfWjp8DgcDeBYIv%2BY0KeQQx2N%2BQA%2FqFwot90NbZhGnjhY%2BCedBAsHxMXowQotBLwTWJ6dkRbKiRwoIxuQ0ecfd%2FZxx37xjKB6t8txqpMrsKANIZlz3xgree4TKt5Ex9Cfx2O7sOi7%2Bxzx6YOOUKL%2FOi0yYpzGhkH3mv4nz5o%2Bq3NLUudYI%2BIpGPuruOvicNegSMbMfqvlLDBp5duC44yFalEQI%2F2vECknBHQmhH6VkRgRa4V4DNFN3eLZ0HO47RYTMDcfwA9NhiLJe4FXdeh4WQCradSvFp7a1BPo2aJ0UhUbbpWjpUCwRL6d9o5qKlujHKUVlpACiY1pTzpnZGMk1RFyHLL0uzlNBboNu8OLuIoRiI4bH6EQvNRCRnOQwn%2F2dfA3n1ufVHtI1eAcw%2BYbWwAY6pgElAJueVdGrkA8ShEMuiyvPRiBgMyNZ4GqVJtbT7DDmuuD81Pj1o5YXJWylSKCGMyz0BbCX%2FWIRg7x6QTesdX4A%2FlsAL5hyanUaSIrgAMTQOa5bNtGm3osjL9K6jUBBfqScjssz3%2FguHhJS7YJX3fZhGk4yod7KKDoj1O9HkDDwFBghqrMQQ1yQ23bffp2hJclFfRD1fmYJJY5cfQcn%2Fr83oSRi7DA%2F&X-Amz-Signature=cd4a7b7da19ed8e5c0341b1daa37d6cc76e40bb12a777e98d17d50d2e1f23766&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEP3CM2T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICtFxctVP8Sw8J0PGR%2FRbwSieCmshpo%2FnKK90RB%2FeLx5AiBxme7PDxnXl4LSA5%2Fd0jHnqeh%2BHzgk3mli8EILN5KtSiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmm60TZVrftZAhXCKtwD0gRa0LOyYANARKELiMtM0CCIfZCp8GfAOfVWPfgeOEkOh2jCRH%2F%2BNO7ucaVcnWD0wUN2dadd%2FEo4jicml6ky9vryXSeryKQqKGY4GL9WpatU5XWhGXkOytHyahr%2BFH9h0Q%2Bb%2B32QwddPfOMxhgm1Uw6fScPv66%2B%2FJbjmi9nBdW7B%2F3kO1p7XHIACMtC2XmJ9eBhbaqn3yu3O4nTHLIHkrEb0zPhshzsI79UddjpLBJrfWjp8DgcDeBYIv%2BY0KeQQx2N%2BQA%2FqFwot90NbZhGnjhY%2BCedBAsHxMXowQotBLwTWJ6dkRbKiRwoIxuQ0ecfd%2FZxx37xjKB6t8txqpMrsKANIZlz3xgree4TKt5Ex9Cfx2O7sOi7%2Bxzx6YOOUKL%2FOi0yYpzGhkH3mv4nz5o%2Bq3NLUudYI%2BIpGPuruOvicNegSMbMfqvlLDBp5duC44yFalEQI%2F2vECknBHQmhH6VkRgRa4V4DNFN3eLZ0HO47RYTMDcfwA9NhiLJe4FXdeh4WQCradSvFp7a1BPo2aJ0UhUbbpWjpUCwRL6d9o5qKlujHKUVlpACiY1pTzpnZGMk1RFyHLL0uzlNBboNu8OLuIoRiI4bH6EQvNRCRnOQwn%2F2dfA3n1ufVHtI1eAcw%2BYbWwAY6pgElAJueVdGrkA8ShEMuiyvPRiBgMyNZ4GqVJtbT7DDmuuD81Pj1o5YXJWylSKCGMyz0BbCX%2FWIRg7x6QTesdX4A%2FlsAL5hyanUaSIrgAMTQOa5bNtGm3osjL9K6jUBBfqScjssz3%2FguHhJS7YJX3fZhGk4yod7KKDoj1O9HkDDwFBghqrMQQ1yQ23bffp2hJclFfRD1fmYJJY5cfQcn%2Fr83oSRi7DA%2F&X-Amz-Signature=b35837bb30052102990acf245d4570f0d0ad2baf6d2cd3ad903d8292764286ed&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

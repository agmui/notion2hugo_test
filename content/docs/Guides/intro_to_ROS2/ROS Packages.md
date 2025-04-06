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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAU3UEVP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQGIJMi1WSILadRAzCxfiAwdvnBX1E3YC0EN%2Bqye%2FXHAiBX9ipdA8Kz%2FFv7oMAaKUP4zNmIdDkJHYg3hUFbyxCcnir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMig0xBvCLy7gHtpjwKtwDvMOkjVC%2FWfdseleUNWyHjYOb2tsUTDjl4VCpIRGLngRUPwAPDpeblo96rLSBLOb%2FdxuQOfcHYsPBJN3Dm1bpguVH4rJvQU5N2XR3J8Nght430DKDV95oCXYlBE%2B5E127MIidwnV%2FREaSDqobziH7egqTlI632pY25CfTd0pddNIaIS6oLKqZ%2BbLgnGzEbtZR3Z71AmfyAdA%2BG661HvQXJno0F0AjOm54I7IP2pmof2rPv2AgXnyqsPpeLJcim9QFbr5lz2R2f3yEWrsEuIOQy7b%2Bftpm3v%2BOrLJHewlEh92WVK%2FdzYdkk7wJO28la2Ps1toInqnopdQSrmfU69uVQrt1Kl0z%2FQdz40VLWlfInll3axPW%2Bkrd6q1qNxXLvmWDeTtxQ2C1piZ771aaI4ZX93TXq0MRvGdZfE4VAHWHjoD6C5nPmJF1HwDmJ6dWfEbRc6Y6qNZGEAgu05zrVJzinW0LKibrQV2eoT1w1UNSEMNypuxxzh9KY2LHpa%2F%2F%2BV9XQ118lntkhMDRvgrVd6OnYS29PL%2BvrlGEeIzwihGr%2B5snflHyn3a5OJCtD2sUCwGZWiDQWZlEHAGELV1gi3tizdi1f6tuN0UWHkyXECneiBoMcZGUXeFVGyKMEW8wluHHvwY6pgEuIt8Qd3RerzxgCTFCd0okk1Iwhb4%2BegnBEKi7YKik9xGKCKpwASSN5P0LRj24C%2B8rWuVoXtAWjxzph4J%2F0E9UxXv0I5sppN5PYGmzAbmiOi84sgIZB5Ax3Y8%2BNrFYqrjCtQNdy%2FeTwtP6SVtkgbp5ZpRWiI7T5YQicPjO8sF3kTvki351wPyYwlyqDlUtwI0r9esi1ZixnGKhyNFX1F0OtcLmDm60&X-Amz-Signature=ce0e54c8c3d4a2050abec6a594fa1ce7c33a1017cf03e39a4d84d54fe6539b97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAU3UEVP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQGIJMi1WSILadRAzCxfiAwdvnBX1E3YC0EN%2Bqye%2FXHAiBX9ipdA8Kz%2FFv7oMAaKUP4zNmIdDkJHYg3hUFbyxCcnir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMig0xBvCLy7gHtpjwKtwDvMOkjVC%2FWfdseleUNWyHjYOb2tsUTDjl4VCpIRGLngRUPwAPDpeblo96rLSBLOb%2FdxuQOfcHYsPBJN3Dm1bpguVH4rJvQU5N2XR3J8Nght430DKDV95oCXYlBE%2B5E127MIidwnV%2FREaSDqobziH7egqTlI632pY25CfTd0pddNIaIS6oLKqZ%2BbLgnGzEbtZR3Z71AmfyAdA%2BG661HvQXJno0F0AjOm54I7IP2pmof2rPv2AgXnyqsPpeLJcim9QFbr5lz2R2f3yEWrsEuIOQy7b%2Bftpm3v%2BOrLJHewlEh92WVK%2FdzYdkk7wJO28la2Ps1toInqnopdQSrmfU69uVQrt1Kl0z%2FQdz40VLWlfInll3axPW%2Bkrd6q1qNxXLvmWDeTtxQ2C1piZ771aaI4ZX93TXq0MRvGdZfE4VAHWHjoD6C5nPmJF1HwDmJ6dWfEbRc6Y6qNZGEAgu05zrVJzinW0LKibrQV2eoT1w1UNSEMNypuxxzh9KY2LHpa%2F%2F%2BV9XQ118lntkhMDRvgrVd6OnYS29PL%2BvrlGEeIzwihGr%2B5snflHyn3a5OJCtD2sUCwGZWiDQWZlEHAGELV1gi3tizdi1f6tuN0UWHkyXECneiBoMcZGUXeFVGyKMEW8wluHHvwY6pgEuIt8Qd3RerzxgCTFCd0okk1Iwhb4%2BegnBEKi7YKik9xGKCKpwASSN5P0LRj24C%2B8rWuVoXtAWjxzph4J%2F0E9UxXv0I5sppN5PYGmzAbmiOi84sgIZB5Ax3Y8%2BNrFYqrjCtQNdy%2FeTwtP6SVtkgbp5ZpRWiI7T5YQicPjO8sF3kTvki351wPyYwlyqDlUtwI0r9esi1ZixnGKhyNFX1F0OtcLmDm60&X-Amz-Signature=7f5c31757c55bda183d7c9dc95dcccbd43e4f5f83baf28c5916913470f90687f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAU3UEVP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQGIJMi1WSILadRAzCxfiAwdvnBX1E3YC0EN%2Bqye%2FXHAiBX9ipdA8Kz%2FFv7oMAaKUP4zNmIdDkJHYg3hUFbyxCcnir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMig0xBvCLy7gHtpjwKtwDvMOkjVC%2FWfdseleUNWyHjYOb2tsUTDjl4VCpIRGLngRUPwAPDpeblo96rLSBLOb%2FdxuQOfcHYsPBJN3Dm1bpguVH4rJvQU5N2XR3J8Nght430DKDV95oCXYlBE%2B5E127MIidwnV%2FREaSDqobziH7egqTlI632pY25CfTd0pddNIaIS6oLKqZ%2BbLgnGzEbtZR3Z71AmfyAdA%2BG661HvQXJno0F0AjOm54I7IP2pmof2rPv2AgXnyqsPpeLJcim9QFbr5lz2R2f3yEWrsEuIOQy7b%2Bftpm3v%2BOrLJHewlEh92WVK%2FdzYdkk7wJO28la2Ps1toInqnopdQSrmfU69uVQrt1Kl0z%2FQdz40VLWlfInll3axPW%2Bkrd6q1qNxXLvmWDeTtxQ2C1piZ771aaI4ZX93TXq0MRvGdZfE4VAHWHjoD6C5nPmJF1HwDmJ6dWfEbRc6Y6qNZGEAgu05zrVJzinW0LKibrQV2eoT1w1UNSEMNypuxxzh9KY2LHpa%2F%2F%2BV9XQ118lntkhMDRvgrVd6OnYS29PL%2BvrlGEeIzwihGr%2B5snflHyn3a5OJCtD2sUCwGZWiDQWZlEHAGELV1gi3tizdi1f6tuN0UWHkyXECneiBoMcZGUXeFVGyKMEW8wluHHvwY6pgEuIt8Qd3RerzxgCTFCd0okk1Iwhb4%2BegnBEKi7YKik9xGKCKpwASSN5P0LRj24C%2B8rWuVoXtAWjxzph4J%2F0E9UxXv0I5sppN5PYGmzAbmiOi84sgIZB5Ax3Y8%2BNrFYqrjCtQNdy%2FeTwtP6SVtkgbp5ZpRWiI7T5YQicPjO8sF3kTvki351wPyYwlyqDlUtwI0r9esi1ZixnGKhyNFX1F0OtcLmDm60&X-Amz-Signature=3a0e88d88e7b639295676da32e2a73572c49a7cb5ec57e39710e0cdc849e61fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAU3UEVP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQGIJMi1WSILadRAzCxfiAwdvnBX1E3YC0EN%2Bqye%2FXHAiBX9ipdA8Kz%2FFv7oMAaKUP4zNmIdDkJHYg3hUFbyxCcnir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMig0xBvCLy7gHtpjwKtwDvMOkjVC%2FWfdseleUNWyHjYOb2tsUTDjl4VCpIRGLngRUPwAPDpeblo96rLSBLOb%2FdxuQOfcHYsPBJN3Dm1bpguVH4rJvQU5N2XR3J8Nght430DKDV95oCXYlBE%2B5E127MIidwnV%2FREaSDqobziH7egqTlI632pY25CfTd0pddNIaIS6oLKqZ%2BbLgnGzEbtZR3Z71AmfyAdA%2BG661HvQXJno0F0AjOm54I7IP2pmof2rPv2AgXnyqsPpeLJcim9QFbr5lz2R2f3yEWrsEuIOQy7b%2Bftpm3v%2BOrLJHewlEh92WVK%2FdzYdkk7wJO28la2Ps1toInqnopdQSrmfU69uVQrt1Kl0z%2FQdz40VLWlfInll3axPW%2Bkrd6q1qNxXLvmWDeTtxQ2C1piZ771aaI4ZX93TXq0MRvGdZfE4VAHWHjoD6C5nPmJF1HwDmJ6dWfEbRc6Y6qNZGEAgu05zrVJzinW0LKibrQV2eoT1w1UNSEMNypuxxzh9KY2LHpa%2F%2F%2BV9XQ118lntkhMDRvgrVd6OnYS29PL%2BvrlGEeIzwihGr%2B5snflHyn3a5OJCtD2sUCwGZWiDQWZlEHAGELV1gi3tizdi1f6tuN0UWHkyXECneiBoMcZGUXeFVGyKMEW8wluHHvwY6pgEuIt8Qd3RerzxgCTFCd0okk1Iwhb4%2BegnBEKi7YKik9xGKCKpwASSN5P0LRj24C%2B8rWuVoXtAWjxzph4J%2F0E9UxXv0I5sppN5PYGmzAbmiOi84sgIZB5Ax3Y8%2BNrFYqrjCtQNdy%2FeTwtP6SVtkgbp5ZpRWiI7T5YQicPjO8sF3kTvki351wPyYwlyqDlUtwI0r9esi1ZixnGKhyNFX1F0OtcLmDm60&X-Amz-Signature=3f91d5ca3e5d27a0ffcb145c8358e415414ad2d39782dacfad9178955c50c49b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAU3UEVP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQGIJMi1WSILadRAzCxfiAwdvnBX1E3YC0EN%2Bqye%2FXHAiBX9ipdA8Kz%2FFv7oMAaKUP4zNmIdDkJHYg3hUFbyxCcnir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMig0xBvCLy7gHtpjwKtwDvMOkjVC%2FWfdseleUNWyHjYOb2tsUTDjl4VCpIRGLngRUPwAPDpeblo96rLSBLOb%2FdxuQOfcHYsPBJN3Dm1bpguVH4rJvQU5N2XR3J8Nght430DKDV95oCXYlBE%2B5E127MIidwnV%2FREaSDqobziH7egqTlI632pY25CfTd0pddNIaIS6oLKqZ%2BbLgnGzEbtZR3Z71AmfyAdA%2BG661HvQXJno0F0AjOm54I7IP2pmof2rPv2AgXnyqsPpeLJcim9QFbr5lz2R2f3yEWrsEuIOQy7b%2Bftpm3v%2BOrLJHewlEh92WVK%2FdzYdkk7wJO28la2Ps1toInqnopdQSrmfU69uVQrt1Kl0z%2FQdz40VLWlfInll3axPW%2Bkrd6q1qNxXLvmWDeTtxQ2C1piZ771aaI4ZX93TXq0MRvGdZfE4VAHWHjoD6C5nPmJF1HwDmJ6dWfEbRc6Y6qNZGEAgu05zrVJzinW0LKibrQV2eoT1w1UNSEMNypuxxzh9KY2LHpa%2F%2F%2BV9XQ118lntkhMDRvgrVd6OnYS29PL%2BvrlGEeIzwihGr%2B5snflHyn3a5OJCtD2sUCwGZWiDQWZlEHAGELV1gi3tizdi1f6tuN0UWHkyXECneiBoMcZGUXeFVGyKMEW8wluHHvwY6pgEuIt8Qd3RerzxgCTFCd0okk1Iwhb4%2BegnBEKi7YKik9xGKCKpwASSN5P0LRj24C%2B8rWuVoXtAWjxzph4J%2F0E9UxXv0I5sppN5PYGmzAbmiOi84sgIZB5Ax3Y8%2BNrFYqrjCtQNdy%2FeTwtP6SVtkgbp5ZpRWiI7T5YQicPjO8sF3kTvki351wPyYwlyqDlUtwI0r9esi1ZixnGKhyNFX1F0OtcLmDm60&X-Amz-Signature=66f26001a919a2c3bdc40a46c5799e39b1ccf674cd440db7cb0dfeec7a37be5f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAU3UEVP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQGIJMi1WSILadRAzCxfiAwdvnBX1E3YC0EN%2Bqye%2FXHAiBX9ipdA8Kz%2FFv7oMAaKUP4zNmIdDkJHYg3hUFbyxCcnir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMig0xBvCLy7gHtpjwKtwDvMOkjVC%2FWfdseleUNWyHjYOb2tsUTDjl4VCpIRGLngRUPwAPDpeblo96rLSBLOb%2FdxuQOfcHYsPBJN3Dm1bpguVH4rJvQU5N2XR3J8Nght430DKDV95oCXYlBE%2B5E127MIidwnV%2FREaSDqobziH7egqTlI632pY25CfTd0pddNIaIS6oLKqZ%2BbLgnGzEbtZR3Z71AmfyAdA%2BG661HvQXJno0F0AjOm54I7IP2pmof2rPv2AgXnyqsPpeLJcim9QFbr5lz2R2f3yEWrsEuIOQy7b%2Bftpm3v%2BOrLJHewlEh92WVK%2FdzYdkk7wJO28la2Ps1toInqnopdQSrmfU69uVQrt1Kl0z%2FQdz40VLWlfInll3axPW%2Bkrd6q1qNxXLvmWDeTtxQ2C1piZ771aaI4ZX93TXq0MRvGdZfE4VAHWHjoD6C5nPmJF1HwDmJ6dWfEbRc6Y6qNZGEAgu05zrVJzinW0LKibrQV2eoT1w1UNSEMNypuxxzh9KY2LHpa%2F%2F%2BV9XQ118lntkhMDRvgrVd6OnYS29PL%2BvrlGEeIzwihGr%2B5snflHyn3a5OJCtD2sUCwGZWiDQWZlEHAGELV1gi3tizdi1f6tuN0UWHkyXECneiBoMcZGUXeFVGyKMEW8wluHHvwY6pgEuIt8Qd3RerzxgCTFCd0okk1Iwhb4%2BegnBEKi7YKik9xGKCKpwASSN5P0LRj24C%2B8rWuVoXtAWjxzph4J%2F0E9UxXv0I5sppN5PYGmzAbmiOi84sgIZB5Ax3Y8%2BNrFYqrjCtQNdy%2FeTwtP6SVtkgbp5ZpRWiI7T5YQicPjO8sF3kTvki351wPyYwlyqDlUtwI0r9esi1ZixnGKhyNFX1F0OtcLmDm60&X-Amz-Signature=8514ffba94220d1ac6a3761375edbff96ccccc57e7df7405ec0d492baf38a177&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAU3UEVP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQGIJMi1WSILadRAzCxfiAwdvnBX1E3YC0EN%2Bqye%2FXHAiBX9ipdA8Kz%2FFv7oMAaKUP4zNmIdDkJHYg3hUFbyxCcnir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMig0xBvCLy7gHtpjwKtwDvMOkjVC%2FWfdseleUNWyHjYOb2tsUTDjl4VCpIRGLngRUPwAPDpeblo96rLSBLOb%2FdxuQOfcHYsPBJN3Dm1bpguVH4rJvQU5N2XR3J8Nght430DKDV95oCXYlBE%2B5E127MIidwnV%2FREaSDqobziH7egqTlI632pY25CfTd0pddNIaIS6oLKqZ%2BbLgnGzEbtZR3Z71AmfyAdA%2BG661HvQXJno0F0AjOm54I7IP2pmof2rPv2AgXnyqsPpeLJcim9QFbr5lz2R2f3yEWrsEuIOQy7b%2Bftpm3v%2BOrLJHewlEh92WVK%2FdzYdkk7wJO28la2Ps1toInqnopdQSrmfU69uVQrt1Kl0z%2FQdz40VLWlfInll3axPW%2Bkrd6q1qNxXLvmWDeTtxQ2C1piZ771aaI4ZX93TXq0MRvGdZfE4VAHWHjoD6C5nPmJF1HwDmJ6dWfEbRc6Y6qNZGEAgu05zrVJzinW0LKibrQV2eoT1w1UNSEMNypuxxzh9KY2LHpa%2F%2F%2BV9XQ118lntkhMDRvgrVd6OnYS29PL%2BvrlGEeIzwihGr%2B5snflHyn3a5OJCtD2sUCwGZWiDQWZlEHAGELV1gi3tizdi1f6tuN0UWHkyXECneiBoMcZGUXeFVGyKMEW8wluHHvwY6pgEuIt8Qd3RerzxgCTFCd0okk1Iwhb4%2BegnBEKi7YKik9xGKCKpwASSN5P0LRj24C%2B8rWuVoXtAWjxzph4J%2F0E9UxXv0I5sppN5PYGmzAbmiOi84sgIZB5Ax3Y8%2BNrFYqrjCtQNdy%2FeTwtP6SVtkgbp5ZpRWiI7T5YQicPjO8sF3kTvki351wPyYwlyqDlUtwI0r9esi1ZixnGKhyNFX1F0OtcLmDm60&X-Amz-Signature=6f53509cf1226c6e66084a48f4c0b2b6642a3a3609a99f661d79a62dae051943&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

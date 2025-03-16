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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4763AV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo2LyaYKWYWhQEm1aHFOPhhbITebOB%2BsZe81mOA3mi3QIhAIxh6YrpPtl89fbF1Nnzw6Ij7VHw3H3GaXYurMrGiJfcKv8DCDUQABoMNjM3NDIzMTgzODA1IgzetmZiNebcHnc8%2Ft8q3AMk8miugF0XVsT8tDoNmSGY%2Ba5ag8wiR18MM5qC2HejyWFEkDIr1GiyZUEYR9ZkrPEvLqFTnzp9%2BQQ%2F4Q1cVS%2BNhdhHc2bXXA8f03x39OgkZxbJELVVzmPujS2KjwM5up%2FU4gKuwRHCCo3UtZ3p8ua8k4m6WjU%2B%2BaYzE1ARq8V7LLJkWUN6wgjsNDWkzjjzgkkkvLlvweejF2uFZMIncc7sVdSaqaCjmULBXjNUHXVJb877HIEu%2Fn73N4iSQ5JnazPh2OlCpFTEQWnPMuv3PPRIpn%2BTugF9K3A3PEO5lb%2F2kwxrSPZRN8vXNfcbDPDMAHQaSGtNCv4iVQZMzUJhmlHS3Tfa9DXoj6p1kIqfSrk%2BtfyUAabLMubA1lOwEotnVyZdwI5%2FOYv1CKCQsO2NpgXkzWazZZdhJ0l%2BBS%2BoUWfp8sXlpUgrJIIXBTUlSr0a6Ark36zJET5ehxf%2FTIviL8SOUghpeOcacBZpM%2F2TMs1G6CwAVmAaCTW19tlzKZ58xiVuAnleoYQEua5sR8f2Csc6immv0Eel5oXK%2B4l5zLBK4W5VL1pnWVjN3%2B268gYS0VJX3DAuCZ%2F%2BVdGuzQNIj0GbTE%2BLi5mkfNLFx5MXqqcXYaVu6ToDtVFly%2BqnEjCq3Ny%2BBjqkAd5aD8TAmy4ApiGTMU1RECyZyNwOhiGq9tB1%2FdMO01%2BaN89%2B81G7WyYcp7YGF27KZn5LqqbDrUTN0WGDmtB%2F2Mzxw%2F9qpmafpRSUPTgUo3bKGGcKrkKvfgnGfNZT1DSNsvkO%2FTPtFUxFygmGcKEmWgEdomUN32jYNIgydzMmy6aATCmDrgmjiVR5Nza8doZi6ZDDcTjyNWm4SZai1au6mmw2h1vp&X-Amz-Signature=d392d04a63ffa3205bbc5921bd6221d252191e065fb2480ba017485bc53de0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4763AV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo2LyaYKWYWhQEm1aHFOPhhbITebOB%2BsZe81mOA3mi3QIhAIxh6YrpPtl89fbF1Nnzw6Ij7VHw3H3GaXYurMrGiJfcKv8DCDUQABoMNjM3NDIzMTgzODA1IgzetmZiNebcHnc8%2Ft8q3AMk8miugF0XVsT8tDoNmSGY%2Ba5ag8wiR18MM5qC2HejyWFEkDIr1GiyZUEYR9ZkrPEvLqFTnzp9%2BQQ%2F4Q1cVS%2BNhdhHc2bXXA8f03x39OgkZxbJELVVzmPujS2KjwM5up%2FU4gKuwRHCCo3UtZ3p8ua8k4m6WjU%2B%2BaYzE1ARq8V7LLJkWUN6wgjsNDWkzjjzgkkkvLlvweejF2uFZMIncc7sVdSaqaCjmULBXjNUHXVJb877HIEu%2Fn73N4iSQ5JnazPh2OlCpFTEQWnPMuv3PPRIpn%2BTugF9K3A3PEO5lb%2F2kwxrSPZRN8vXNfcbDPDMAHQaSGtNCv4iVQZMzUJhmlHS3Tfa9DXoj6p1kIqfSrk%2BtfyUAabLMubA1lOwEotnVyZdwI5%2FOYv1CKCQsO2NpgXkzWazZZdhJ0l%2BBS%2BoUWfp8sXlpUgrJIIXBTUlSr0a6Ark36zJET5ehxf%2FTIviL8SOUghpeOcacBZpM%2F2TMs1G6CwAVmAaCTW19tlzKZ58xiVuAnleoYQEua5sR8f2Csc6immv0Eel5oXK%2B4l5zLBK4W5VL1pnWVjN3%2B268gYS0VJX3DAuCZ%2F%2BVdGuzQNIj0GbTE%2BLi5mkfNLFx5MXqqcXYaVu6ToDtVFly%2BqnEjCq3Ny%2BBjqkAd5aD8TAmy4ApiGTMU1RECyZyNwOhiGq9tB1%2FdMO01%2BaN89%2B81G7WyYcp7YGF27KZn5LqqbDrUTN0WGDmtB%2F2Mzxw%2F9qpmafpRSUPTgUo3bKGGcKrkKvfgnGfNZT1DSNsvkO%2FTPtFUxFygmGcKEmWgEdomUN32jYNIgydzMmy6aATCmDrgmjiVR5Nza8doZi6ZDDcTjyNWm4SZai1au6mmw2h1vp&X-Amz-Signature=3e4230291d144fb091704d7b1f241b639267cda1becb773553bb6dc0ca9eb1ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4763AV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo2LyaYKWYWhQEm1aHFOPhhbITebOB%2BsZe81mOA3mi3QIhAIxh6YrpPtl89fbF1Nnzw6Ij7VHw3H3GaXYurMrGiJfcKv8DCDUQABoMNjM3NDIzMTgzODA1IgzetmZiNebcHnc8%2Ft8q3AMk8miugF0XVsT8tDoNmSGY%2Ba5ag8wiR18MM5qC2HejyWFEkDIr1GiyZUEYR9ZkrPEvLqFTnzp9%2BQQ%2F4Q1cVS%2BNhdhHc2bXXA8f03x39OgkZxbJELVVzmPujS2KjwM5up%2FU4gKuwRHCCo3UtZ3p8ua8k4m6WjU%2B%2BaYzE1ARq8V7LLJkWUN6wgjsNDWkzjjzgkkkvLlvweejF2uFZMIncc7sVdSaqaCjmULBXjNUHXVJb877HIEu%2Fn73N4iSQ5JnazPh2OlCpFTEQWnPMuv3PPRIpn%2BTugF9K3A3PEO5lb%2F2kwxrSPZRN8vXNfcbDPDMAHQaSGtNCv4iVQZMzUJhmlHS3Tfa9DXoj6p1kIqfSrk%2BtfyUAabLMubA1lOwEotnVyZdwI5%2FOYv1CKCQsO2NpgXkzWazZZdhJ0l%2BBS%2BoUWfp8sXlpUgrJIIXBTUlSr0a6Ark36zJET5ehxf%2FTIviL8SOUghpeOcacBZpM%2F2TMs1G6CwAVmAaCTW19tlzKZ58xiVuAnleoYQEua5sR8f2Csc6immv0Eel5oXK%2B4l5zLBK4W5VL1pnWVjN3%2B268gYS0VJX3DAuCZ%2F%2BVdGuzQNIj0GbTE%2BLi5mkfNLFx5MXqqcXYaVu6ToDtVFly%2BqnEjCq3Ny%2BBjqkAd5aD8TAmy4ApiGTMU1RECyZyNwOhiGq9tB1%2FdMO01%2BaN89%2B81G7WyYcp7YGF27KZn5LqqbDrUTN0WGDmtB%2F2Mzxw%2F9qpmafpRSUPTgUo3bKGGcKrkKvfgnGfNZT1DSNsvkO%2FTPtFUxFygmGcKEmWgEdomUN32jYNIgydzMmy6aATCmDrgmjiVR5Nza8doZi6ZDDcTjyNWm4SZai1au6mmw2h1vp&X-Amz-Signature=9caf91f955fd7182f2af2a9277e954fc882b7ce9f9c6d373247ec92d6cdda90c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4763AV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo2LyaYKWYWhQEm1aHFOPhhbITebOB%2BsZe81mOA3mi3QIhAIxh6YrpPtl89fbF1Nnzw6Ij7VHw3H3GaXYurMrGiJfcKv8DCDUQABoMNjM3NDIzMTgzODA1IgzetmZiNebcHnc8%2Ft8q3AMk8miugF0XVsT8tDoNmSGY%2Ba5ag8wiR18MM5qC2HejyWFEkDIr1GiyZUEYR9ZkrPEvLqFTnzp9%2BQQ%2F4Q1cVS%2BNhdhHc2bXXA8f03x39OgkZxbJELVVzmPujS2KjwM5up%2FU4gKuwRHCCo3UtZ3p8ua8k4m6WjU%2B%2BaYzE1ARq8V7LLJkWUN6wgjsNDWkzjjzgkkkvLlvweejF2uFZMIncc7sVdSaqaCjmULBXjNUHXVJb877HIEu%2Fn73N4iSQ5JnazPh2OlCpFTEQWnPMuv3PPRIpn%2BTugF9K3A3PEO5lb%2F2kwxrSPZRN8vXNfcbDPDMAHQaSGtNCv4iVQZMzUJhmlHS3Tfa9DXoj6p1kIqfSrk%2BtfyUAabLMubA1lOwEotnVyZdwI5%2FOYv1CKCQsO2NpgXkzWazZZdhJ0l%2BBS%2BoUWfp8sXlpUgrJIIXBTUlSr0a6Ark36zJET5ehxf%2FTIviL8SOUghpeOcacBZpM%2F2TMs1G6CwAVmAaCTW19tlzKZ58xiVuAnleoYQEua5sR8f2Csc6immv0Eel5oXK%2B4l5zLBK4W5VL1pnWVjN3%2B268gYS0VJX3DAuCZ%2F%2BVdGuzQNIj0GbTE%2BLi5mkfNLFx5MXqqcXYaVu6ToDtVFly%2BqnEjCq3Ny%2BBjqkAd5aD8TAmy4ApiGTMU1RECyZyNwOhiGq9tB1%2FdMO01%2BaN89%2B81G7WyYcp7YGF27KZn5LqqbDrUTN0WGDmtB%2F2Mzxw%2F9qpmafpRSUPTgUo3bKGGcKrkKvfgnGfNZT1DSNsvkO%2FTPtFUxFygmGcKEmWgEdomUN32jYNIgydzMmy6aATCmDrgmjiVR5Nza8doZi6ZDDcTjyNWm4SZai1au6mmw2h1vp&X-Amz-Signature=aff8279daae638da35d656949f23dd0e6a54ecf29c8e27da35b6ea3ed4fc89bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4763AV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo2LyaYKWYWhQEm1aHFOPhhbITebOB%2BsZe81mOA3mi3QIhAIxh6YrpPtl89fbF1Nnzw6Ij7VHw3H3GaXYurMrGiJfcKv8DCDUQABoMNjM3NDIzMTgzODA1IgzetmZiNebcHnc8%2Ft8q3AMk8miugF0XVsT8tDoNmSGY%2Ba5ag8wiR18MM5qC2HejyWFEkDIr1GiyZUEYR9ZkrPEvLqFTnzp9%2BQQ%2F4Q1cVS%2BNhdhHc2bXXA8f03x39OgkZxbJELVVzmPujS2KjwM5up%2FU4gKuwRHCCo3UtZ3p8ua8k4m6WjU%2B%2BaYzE1ARq8V7LLJkWUN6wgjsNDWkzjjzgkkkvLlvweejF2uFZMIncc7sVdSaqaCjmULBXjNUHXVJb877HIEu%2Fn73N4iSQ5JnazPh2OlCpFTEQWnPMuv3PPRIpn%2BTugF9K3A3PEO5lb%2F2kwxrSPZRN8vXNfcbDPDMAHQaSGtNCv4iVQZMzUJhmlHS3Tfa9DXoj6p1kIqfSrk%2BtfyUAabLMubA1lOwEotnVyZdwI5%2FOYv1CKCQsO2NpgXkzWazZZdhJ0l%2BBS%2BoUWfp8sXlpUgrJIIXBTUlSr0a6Ark36zJET5ehxf%2FTIviL8SOUghpeOcacBZpM%2F2TMs1G6CwAVmAaCTW19tlzKZ58xiVuAnleoYQEua5sR8f2Csc6immv0Eel5oXK%2B4l5zLBK4W5VL1pnWVjN3%2B268gYS0VJX3DAuCZ%2F%2BVdGuzQNIj0GbTE%2BLi5mkfNLFx5MXqqcXYaVu6ToDtVFly%2BqnEjCq3Ny%2BBjqkAd5aD8TAmy4ApiGTMU1RECyZyNwOhiGq9tB1%2FdMO01%2BaN89%2B81G7WyYcp7YGF27KZn5LqqbDrUTN0WGDmtB%2F2Mzxw%2F9qpmafpRSUPTgUo3bKGGcKrkKvfgnGfNZT1DSNsvkO%2FTPtFUxFygmGcKEmWgEdomUN32jYNIgydzMmy6aATCmDrgmjiVR5Nza8doZi6ZDDcTjyNWm4SZai1au6mmw2h1vp&X-Amz-Signature=0ea291c2125833351f2423ed2d8ff4fbe9717d1c9595a949fd7f5d1653941ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4763AV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo2LyaYKWYWhQEm1aHFOPhhbITebOB%2BsZe81mOA3mi3QIhAIxh6YrpPtl89fbF1Nnzw6Ij7VHw3H3GaXYurMrGiJfcKv8DCDUQABoMNjM3NDIzMTgzODA1IgzetmZiNebcHnc8%2Ft8q3AMk8miugF0XVsT8tDoNmSGY%2Ba5ag8wiR18MM5qC2HejyWFEkDIr1GiyZUEYR9ZkrPEvLqFTnzp9%2BQQ%2F4Q1cVS%2BNhdhHc2bXXA8f03x39OgkZxbJELVVzmPujS2KjwM5up%2FU4gKuwRHCCo3UtZ3p8ua8k4m6WjU%2B%2BaYzE1ARq8V7LLJkWUN6wgjsNDWkzjjzgkkkvLlvweejF2uFZMIncc7sVdSaqaCjmULBXjNUHXVJb877HIEu%2Fn73N4iSQ5JnazPh2OlCpFTEQWnPMuv3PPRIpn%2BTugF9K3A3PEO5lb%2F2kwxrSPZRN8vXNfcbDPDMAHQaSGtNCv4iVQZMzUJhmlHS3Tfa9DXoj6p1kIqfSrk%2BtfyUAabLMubA1lOwEotnVyZdwI5%2FOYv1CKCQsO2NpgXkzWazZZdhJ0l%2BBS%2BoUWfp8sXlpUgrJIIXBTUlSr0a6Ark36zJET5ehxf%2FTIviL8SOUghpeOcacBZpM%2F2TMs1G6CwAVmAaCTW19tlzKZ58xiVuAnleoYQEua5sR8f2Csc6immv0Eel5oXK%2B4l5zLBK4W5VL1pnWVjN3%2B268gYS0VJX3DAuCZ%2F%2BVdGuzQNIj0GbTE%2BLi5mkfNLFx5MXqqcXYaVu6ToDtVFly%2BqnEjCq3Ny%2BBjqkAd5aD8TAmy4ApiGTMU1RECyZyNwOhiGq9tB1%2FdMO01%2BaN89%2B81G7WyYcp7YGF27KZn5LqqbDrUTN0WGDmtB%2F2Mzxw%2F9qpmafpRSUPTgUo3bKGGcKrkKvfgnGfNZT1DSNsvkO%2FTPtFUxFygmGcKEmWgEdomUN32jYNIgydzMmy6aATCmDrgmjiVR5Nza8doZi6ZDDcTjyNWm4SZai1au6mmw2h1vp&X-Amz-Signature=386875acad31311172af913089bb56a5c7872457e519b1e968a2cc741dda60b3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4763AV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo2LyaYKWYWhQEm1aHFOPhhbITebOB%2BsZe81mOA3mi3QIhAIxh6YrpPtl89fbF1Nnzw6Ij7VHw3H3GaXYurMrGiJfcKv8DCDUQABoMNjM3NDIzMTgzODA1IgzetmZiNebcHnc8%2Ft8q3AMk8miugF0XVsT8tDoNmSGY%2Ba5ag8wiR18MM5qC2HejyWFEkDIr1GiyZUEYR9ZkrPEvLqFTnzp9%2BQQ%2F4Q1cVS%2BNhdhHc2bXXA8f03x39OgkZxbJELVVzmPujS2KjwM5up%2FU4gKuwRHCCo3UtZ3p8ua8k4m6WjU%2B%2BaYzE1ARq8V7LLJkWUN6wgjsNDWkzjjzgkkkvLlvweejF2uFZMIncc7sVdSaqaCjmULBXjNUHXVJb877HIEu%2Fn73N4iSQ5JnazPh2OlCpFTEQWnPMuv3PPRIpn%2BTugF9K3A3PEO5lb%2F2kwxrSPZRN8vXNfcbDPDMAHQaSGtNCv4iVQZMzUJhmlHS3Tfa9DXoj6p1kIqfSrk%2BtfyUAabLMubA1lOwEotnVyZdwI5%2FOYv1CKCQsO2NpgXkzWazZZdhJ0l%2BBS%2BoUWfp8sXlpUgrJIIXBTUlSr0a6Ark36zJET5ehxf%2FTIviL8SOUghpeOcacBZpM%2F2TMs1G6CwAVmAaCTW19tlzKZ58xiVuAnleoYQEua5sR8f2Csc6immv0Eel5oXK%2B4l5zLBK4W5VL1pnWVjN3%2B268gYS0VJX3DAuCZ%2F%2BVdGuzQNIj0GbTE%2BLi5mkfNLFx5MXqqcXYaVu6ToDtVFly%2BqnEjCq3Ny%2BBjqkAd5aD8TAmy4ApiGTMU1RECyZyNwOhiGq9tB1%2FdMO01%2BaN89%2B81G7WyYcp7YGF27KZn5LqqbDrUTN0WGDmtB%2F2Mzxw%2F9qpmafpRSUPTgUo3bKGGcKrkKvfgnGfNZT1DSNsvkO%2FTPtFUxFygmGcKEmWgEdomUN32jYNIgydzMmy6aATCmDrgmjiVR5Nza8doZi6ZDDcTjyNWm4SZai1au6mmw2h1vp&X-Amz-Signature=737afbc58956a8b946c422ee85e4562b9645c7416ec863997522f39236e5aa74&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

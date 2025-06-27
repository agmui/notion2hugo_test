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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6Q3KMA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChXfqH0UjIu6lLaSTrJrU4qrdy7ZYbTYLbC6WpgpOf%2BwIhAIVZ33JgEEZ%2FepYCBzc3Gv%2BRUEq%2F447Mx8UkS2crYyQbKv8DCHwQABoMNjM3NDIzMTgzODA1IgzGoPloLIWYH4lMoJgq3APxgXnyfua7eF8AoAFmJ9lyq%2Fo2G6Eo8T2m9Hze%2B%2BpF4ldACE9oshtiSUOWmdRFbDGd0jQ9nsiQEyd4CSUm%2BYtr1wjfhhK%2Fp34YHGBDuf%2FVQ7eTpqHBE5fGq4tPjrf%2BcxTTqACNG37AEVn7ukpWFTYUI1e5IFIAe63lFW8kZs4aADtU%2BSK9pwsweMgUPX29n9EnmgHiE88qtsVQhK25emAlN7vJNefoWJ4re9gJYTcELCekALXMvwHkGLk%2BdmWneMI7fjP1MLg53pS4S7v9FgW1AfJM9rdKjUsl99MIezYfRKEh56eTAs73VtdMqrxMTkQzit%2FUJ4e%2FB%2Fhg8JekGiTKLT9UWoTk2GNIPCvHbOmMjQyYrYxBbPSX1M6kq%2FlL7fM3%2FYSrYXg2Sghaoet2o7Qp51unMmB7lChC2Cn0POXsdKF7nIND40A1djmo8HqN8C0XfYXHZu1pR2imh79xS98ycyquqcxD1b7JepFD6HRCFOVj4wCqGbhdImg5xqQTc1o%2B7C7g1wgqx7Uk59wxwh335B%2F32y9LV5Pb%2BkZ3d7i5fJlmqIOrFT3foXGqxwJFty05IId1IiLZ6KUrwtsdC7c4CNLtULBbi%2Fil%2BPA3fLLd4bZEQqD%2BOZ1etIyW8DDBy%2FvCBjqkAbDV67BQJ6raHNd6TCyG%2F4UagrHIEhFulxkslVXTQa9r56X%2FUfxR90at0NkM%2B%2Bi0oEA%2BPU46NFAImL2GtPDLB8NfMONqcf2vGhznP3Im0M%2BaQMGSrJdReDbNOFWN6zC1S3ox2bwbyXX%2BWL8MTmAEyG4P9BehbWaDty16Rxpi5ixbRcBndtzQA2L3eznStqQz4%2Blc25ddunwJ0t0GHZ1YjvHMZxV3&X-Amz-Signature=1436988951bb013378cf6dd9ff709644ce9a9913c3e36f2d8d6c6a29f5e142ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6Q3KMA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChXfqH0UjIu6lLaSTrJrU4qrdy7ZYbTYLbC6WpgpOf%2BwIhAIVZ33JgEEZ%2FepYCBzc3Gv%2BRUEq%2F447Mx8UkS2crYyQbKv8DCHwQABoMNjM3NDIzMTgzODA1IgzGoPloLIWYH4lMoJgq3APxgXnyfua7eF8AoAFmJ9lyq%2Fo2G6Eo8T2m9Hze%2B%2BpF4ldACE9oshtiSUOWmdRFbDGd0jQ9nsiQEyd4CSUm%2BYtr1wjfhhK%2Fp34YHGBDuf%2FVQ7eTpqHBE5fGq4tPjrf%2BcxTTqACNG37AEVn7ukpWFTYUI1e5IFIAe63lFW8kZs4aADtU%2BSK9pwsweMgUPX29n9EnmgHiE88qtsVQhK25emAlN7vJNefoWJ4re9gJYTcELCekALXMvwHkGLk%2BdmWneMI7fjP1MLg53pS4S7v9FgW1AfJM9rdKjUsl99MIezYfRKEh56eTAs73VtdMqrxMTkQzit%2FUJ4e%2FB%2Fhg8JekGiTKLT9UWoTk2GNIPCvHbOmMjQyYrYxBbPSX1M6kq%2FlL7fM3%2FYSrYXg2Sghaoet2o7Qp51unMmB7lChC2Cn0POXsdKF7nIND40A1djmo8HqN8C0XfYXHZu1pR2imh79xS98ycyquqcxD1b7JepFD6HRCFOVj4wCqGbhdImg5xqQTc1o%2B7C7g1wgqx7Uk59wxwh335B%2F32y9LV5Pb%2BkZ3d7i5fJlmqIOrFT3foXGqxwJFty05IId1IiLZ6KUrwtsdC7c4CNLtULBbi%2Fil%2BPA3fLLd4bZEQqD%2BOZ1etIyW8DDBy%2FvCBjqkAbDV67BQJ6raHNd6TCyG%2F4UagrHIEhFulxkslVXTQa9r56X%2FUfxR90at0NkM%2B%2Bi0oEA%2BPU46NFAImL2GtPDLB8NfMONqcf2vGhznP3Im0M%2BaQMGSrJdReDbNOFWN6zC1S3ox2bwbyXX%2BWL8MTmAEyG4P9BehbWaDty16Rxpi5ixbRcBndtzQA2L3eznStqQz4%2Blc25ddunwJ0t0GHZ1YjvHMZxV3&X-Amz-Signature=553dcef5ca2f1f3d102a27397b1428a0e255d18c838c9aa4f89c5fe444cba03e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6Q3KMA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChXfqH0UjIu6lLaSTrJrU4qrdy7ZYbTYLbC6WpgpOf%2BwIhAIVZ33JgEEZ%2FepYCBzc3Gv%2BRUEq%2F447Mx8UkS2crYyQbKv8DCHwQABoMNjM3NDIzMTgzODA1IgzGoPloLIWYH4lMoJgq3APxgXnyfua7eF8AoAFmJ9lyq%2Fo2G6Eo8T2m9Hze%2B%2BpF4ldACE9oshtiSUOWmdRFbDGd0jQ9nsiQEyd4CSUm%2BYtr1wjfhhK%2Fp34YHGBDuf%2FVQ7eTpqHBE5fGq4tPjrf%2BcxTTqACNG37AEVn7ukpWFTYUI1e5IFIAe63lFW8kZs4aADtU%2BSK9pwsweMgUPX29n9EnmgHiE88qtsVQhK25emAlN7vJNefoWJ4re9gJYTcELCekALXMvwHkGLk%2BdmWneMI7fjP1MLg53pS4S7v9FgW1AfJM9rdKjUsl99MIezYfRKEh56eTAs73VtdMqrxMTkQzit%2FUJ4e%2FB%2Fhg8JekGiTKLT9UWoTk2GNIPCvHbOmMjQyYrYxBbPSX1M6kq%2FlL7fM3%2FYSrYXg2Sghaoet2o7Qp51unMmB7lChC2Cn0POXsdKF7nIND40A1djmo8HqN8C0XfYXHZu1pR2imh79xS98ycyquqcxD1b7JepFD6HRCFOVj4wCqGbhdImg5xqQTc1o%2B7C7g1wgqx7Uk59wxwh335B%2F32y9LV5Pb%2BkZ3d7i5fJlmqIOrFT3foXGqxwJFty05IId1IiLZ6KUrwtsdC7c4CNLtULBbi%2Fil%2BPA3fLLd4bZEQqD%2BOZ1etIyW8DDBy%2FvCBjqkAbDV67BQJ6raHNd6TCyG%2F4UagrHIEhFulxkslVXTQa9r56X%2FUfxR90at0NkM%2B%2Bi0oEA%2BPU46NFAImL2GtPDLB8NfMONqcf2vGhznP3Im0M%2BaQMGSrJdReDbNOFWN6zC1S3ox2bwbyXX%2BWL8MTmAEyG4P9BehbWaDty16Rxpi5ixbRcBndtzQA2L3eznStqQz4%2Blc25ddunwJ0t0GHZ1YjvHMZxV3&X-Amz-Signature=622d01fbb8974e693dcc80fb05a9247882120413e197758b0853e3d7083f746b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6Q3KMA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChXfqH0UjIu6lLaSTrJrU4qrdy7ZYbTYLbC6WpgpOf%2BwIhAIVZ33JgEEZ%2FepYCBzc3Gv%2BRUEq%2F447Mx8UkS2crYyQbKv8DCHwQABoMNjM3NDIzMTgzODA1IgzGoPloLIWYH4lMoJgq3APxgXnyfua7eF8AoAFmJ9lyq%2Fo2G6Eo8T2m9Hze%2B%2BpF4ldACE9oshtiSUOWmdRFbDGd0jQ9nsiQEyd4CSUm%2BYtr1wjfhhK%2Fp34YHGBDuf%2FVQ7eTpqHBE5fGq4tPjrf%2BcxTTqACNG37AEVn7ukpWFTYUI1e5IFIAe63lFW8kZs4aADtU%2BSK9pwsweMgUPX29n9EnmgHiE88qtsVQhK25emAlN7vJNefoWJ4re9gJYTcELCekALXMvwHkGLk%2BdmWneMI7fjP1MLg53pS4S7v9FgW1AfJM9rdKjUsl99MIezYfRKEh56eTAs73VtdMqrxMTkQzit%2FUJ4e%2FB%2Fhg8JekGiTKLT9UWoTk2GNIPCvHbOmMjQyYrYxBbPSX1M6kq%2FlL7fM3%2FYSrYXg2Sghaoet2o7Qp51unMmB7lChC2Cn0POXsdKF7nIND40A1djmo8HqN8C0XfYXHZu1pR2imh79xS98ycyquqcxD1b7JepFD6HRCFOVj4wCqGbhdImg5xqQTc1o%2B7C7g1wgqx7Uk59wxwh335B%2F32y9LV5Pb%2BkZ3d7i5fJlmqIOrFT3foXGqxwJFty05IId1IiLZ6KUrwtsdC7c4CNLtULBbi%2Fil%2BPA3fLLd4bZEQqD%2BOZ1etIyW8DDBy%2FvCBjqkAbDV67BQJ6raHNd6TCyG%2F4UagrHIEhFulxkslVXTQa9r56X%2FUfxR90at0NkM%2B%2Bi0oEA%2BPU46NFAImL2GtPDLB8NfMONqcf2vGhznP3Im0M%2BaQMGSrJdReDbNOFWN6zC1S3ox2bwbyXX%2BWL8MTmAEyG4P9BehbWaDty16Rxpi5ixbRcBndtzQA2L3eznStqQz4%2Blc25ddunwJ0t0GHZ1YjvHMZxV3&X-Amz-Signature=a73297b800d7882be98208c1b0fd13c9023e044153ca976c2b7c5762d8692d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6Q3KMA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChXfqH0UjIu6lLaSTrJrU4qrdy7ZYbTYLbC6WpgpOf%2BwIhAIVZ33JgEEZ%2FepYCBzc3Gv%2BRUEq%2F447Mx8UkS2crYyQbKv8DCHwQABoMNjM3NDIzMTgzODA1IgzGoPloLIWYH4lMoJgq3APxgXnyfua7eF8AoAFmJ9lyq%2Fo2G6Eo8T2m9Hze%2B%2BpF4ldACE9oshtiSUOWmdRFbDGd0jQ9nsiQEyd4CSUm%2BYtr1wjfhhK%2Fp34YHGBDuf%2FVQ7eTpqHBE5fGq4tPjrf%2BcxTTqACNG37AEVn7ukpWFTYUI1e5IFIAe63lFW8kZs4aADtU%2BSK9pwsweMgUPX29n9EnmgHiE88qtsVQhK25emAlN7vJNefoWJ4re9gJYTcELCekALXMvwHkGLk%2BdmWneMI7fjP1MLg53pS4S7v9FgW1AfJM9rdKjUsl99MIezYfRKEh56eTAs73VtdMqrxMTkQzit%2FUJ4e%2FB%2Fhg8JekGiTKLT9UWoTk2GNIPCvHbOmMjQyYrYxBbPSX1M6kq%2FlL7fM3%2FYSrYXg2Sghaoet2o7Qp51unMmB7lChC2Cn0POXsdKF7nIND40A1djmo8HqN8C0XfYXHZu1pR2imh79xS98ycyquqcxD1b7JepFD6HRCFOVj4wCqGbhdImg5xqQTc1o%2B7C7g1wgqx7Uk59wxwh335B%2F32y9LV5Pb%2BkZ3d7i5fJlmqIOrFT3foXGqxwJFty05IId1IiLZ6KUrwtsdC7c4CNLtULBbi%2Fil%2BPA3fLLd4bZEQqD%2BOZ1etIyW8DDBy%2FvCBjqkAbDV67BQJ6raHNd6TCyG%2F4UagrHIEhFulxkslVXTQa9r56X%2FUfxR90at0NkM%2B%2Bi0oEA%2BPU46NFAImL2GtPDLB8NfMONqcf2vGhznP3Im0M%2BaQMGSrJdReDbNOFWN6zC1S3ox2bwbyXX%2BWL8MTmAEyG4P9BehbWaDty16Rxpi5ixbRcBndtzQA2L3eznStqQz4%2Blc25ddunwJ0t0GHZ1YjvHMZxV3&X-Amz-Signature=b3c6d1ab5ba525bbc5bcb31ecb81fb12a3006eb94a91a303314562e184fb98cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6Q3KMA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChXfqH0UjIu6lLaSTrJrU4qrdy7ZYbTYLbC6WpgpOf%2BwIhAIVZ33JgEEZ%2FepYCBzc3Gv%2BRUEq%2F447Mx8UkS2crYyQbKv8DCHwQABoMNjM3NDIzMTgzODA1IgzGoPloLIWYH4lMoJgq3APxgXnyfua7eF8AoAFmJ9lyq%2Fo2G6Eo8T2m9Hze%2B%2BpF4ldACE9oshtiSUOWmdRFbDGd0jQ9nsiQEyd4CSUm%2BYtr1wjfhhK%2Fp34YHGBDuf%2FVQ7eTpqHBE5fGq4tPjrf%2BcxTTqACNG37AEVn7ukpWFTYUI1e5IFIAe63lFW8kZs4aADtU%2BSK9pwsweMgUPX29n9EnmgHiE88qtsVQhK25emAlN7vJNefoWJ4re9gJYTcELCekALXMvwHkGLk%2BdmWneMI7fjP1MLg53pS4S7v9FgW1AfJM9rdKjUsl99MIezYfRKEh56eTAs73VtdMqrxMTkQzit%2FUJ4e%2FB%2Fhg8JekGiTKLT9UWoTk2GNIPCvHbOmMjQyYrYxBbPSX1M6kq%2FlL7fM3%2FYSrYXg2Sghaoet2o7Qp51unMmB7lChC2Cn0POXsdKF7nIND40A1djmo8HqN8C0XfYXHZu1pR2imh79xS98ycyquqcxD1b7JepFD6HRCFOVj4wCqGbhdImg5xqQTc1o%2B7C7g1wgqx7Uk59wxwh335B%2F32y9LV5Pb%2BkZ3d7i5fJlmqIOrFT3foXGqxwJFty05IId1IiLZ6KUrwtsdC7c4CNLtULBbi%2Fil%2BPA3fLLd4bZEQqD%2BOZ1etIyW8DDBy%2FvCBjqkAbDV67BQJ6raHNd6TCyG%2F4UagrHIEhFulxkslVXTQa9r56X%2FUfxR90at0NkM%2B%2Bi0oEA%2BPU46NFAImL2GtPDLB8NfMONqcf2vGhznP3Im0M%2BaQMGSrJdReDbNOFWN6zC1S3ox2bwbyXX%2BWL8MTmAEyG4P9BehbWaDty16Rxpi5ixbRcBndtzQA2L3eznStqQz4%2Blc25ddunwJ0t0GHZ1YjvHMZxV3&X-Amz-Signature=f81ea5d68dd3aedf1ed3251a944e1398eee54413a3fbe1c1b171378a1cefef0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6Q3KMA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChXfqH0UjIu6lLaSTrJrU4qrdy7ZYbTYLbC6WpgpOf%2BwIhAIVZ33JgEEZ%2FepYCBzc3Gv%2BRUEq%2F447Mx8UkS2crYyQbKv8DCHwQABoMNjM3NDIzMTgzODA1IgzGoPloLIWYH4lMoJgq3APxgXnyfua7eF8AoAFmJ9lyq%2Fo2G6Eo8T2m9Hze%2B%2BpF4ldACE9oshtiSUOWmdRFbDGd0jQ9nsiQEyd4CSUm%2BYtr1wjfhhK%2Fp34YHGBDuf%2FVQ7eTpqHBE5fGq4tPjrf%2BcxTTqACNG37AEVn7ukpWFTYUI1e5IFIAe63lFW8kZs4aADtU%2BSK9pwsweMgUPX29n9EnmgHiE88qtsVQhK25emAlN7vJNefoWJ4re9gJYTcELCekALXMvwHkGLk%2BdmWneMI7fjP1MLg53pS4S7v9FgW1AfJM9rdKjUsl99MIezYfRKEh56eTAs73VtdMqrxMTkQzit%2FUJ4e%2FB%2Fhg8JekGiTKLT9UWoTk2GNIPCvHbOmMjQyYrYxBbPSX1M6kq%2FlL7fM3%2FYSrYXg2Sghaoet2o7Qp51unMmB7lChC2Cn0POXsdKF7nIND40A1djmo8HqN8C0XfYXHZu1pR2imh79xS98ycyquqcxD1b7JepFD6HRCFOVj4wCqGbhdImg5xqQTc1o%2B7C7g1wgqx7Uk59wxwh335B%2F32y9LV5Pb%2BkZ3d7i5fJlmqIOrFT3foXGqxwJFty05IId1IiLZ6KUrwtsdC7c4CNLtULBbi%2Fil%2BPA3fLLd4bZEQqD%2BOZ1etIyW8DDBy%2FvCBjqkAbDV67BQJ6raHNd6TCyG%2F4UagrHIEhFulxkslVXTQa9r56X%2FUfxR90at0NkM%2B%2Bi0oEA%2BPU46NFAImL2GtPDLB8NfMONqcf2vGhznP3Im0M%2BaQMGSrJdReDbNOFWN6zC1S3ox2bwbyXX%2BWL8MTmAEyG4P9BehbWaDty16Rxpi5ixbRcBndtzQA2L3eznStqQz4%2Blc25ddunwJ0t0GHZ1YjvHMZxV3&X-Amz-Signature=97ae1b9b15d8821136df4502cab0929e1e5630f402efbeb9dd71a8baf9df9fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

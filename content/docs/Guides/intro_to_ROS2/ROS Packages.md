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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHJ5QKQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu%2F%2FgnC6yPzUi4z4KXysQ3xwalBsVC6hRWEVZe6tvs6wIhALOXMopObuPY%2Bx2Cdj8uniJ4iM2UTh2nA4H2j%2FisST0%2BKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeuCusVf%2BEjQVPOZ8q3ANnnpPCrcgFo1w%2B2D4kAhQ0CxjlgRt2QpxE6pTtH1cicasUt7s8zWcxtVg%2BtF8%2Fexyha89xK41or5smOeX28mW1J55Waorb%2BJi4rrv0SDRzFxAL5jz4GCqIoiSALKj9Wbs72QvF%2FcaitidroG6i%2Bx7EougCmkHYUR1c9aJXbkiCS1lzLPG2IObY1in3KmvmkWQRs%2Fq2qlRymlz5jyVcm%2FT9i7dp9WQLOrQBLyq2qMxSjs%2BndRNemdu%2FDUmXSZXKJGE2gJ%2FMVVi0BgL761CCtxaBBtDpgfnPVnLEwrDvQ0V1Q4YzXoG30vEtJIFSyxSYBC2hs2k%2BWayeT5k77SERhF6HHLeGKMKtkYHM%2BIJPlU56vetY4JR%2F3ED3GymA%2FUWKX2AJtEp9i1HW5Ypd4neQygfhXiAdsl7hJuOeOrLwf8Lak35cNXHRykM5JaZx3LvTBsF6HboUTJvTheISo2xrbjsYShkniJvS8AUM8i3Zl0XJG1H%2Fv4Se5ubunCyDm0uuimH6sxzxHjSzbKhlZCZnbftR58KomI1T5awUa6VJAlSpAltL19W8DBiwUHW2eEqcccla2VUJKpZytB0i8zKTpI9gpjpS5SgQU0p1ntXZOzkml%2BKquNzDWvznUkdgNDCby7PBBjqkAX1UB3EdkPUJKpJ1R3yC2uhAv2PPUqOy%2FvlAdCUurgEbYvHvqySDTAQd2rq1H5LVpp6T7Xcja1c2ZCsL7e03ZZNx0ThNdOetzQRbKjAeL8T%2FxaryfLQHECg7ures%2FUkxUFp8gBdb%2BFIs8WDMs6wTwWKlDL91H0Mx68Ar%2FAXLIRuLWa13uybYDis8BpNcDWiRIqC3FgNiLGEK1VdT3a77IzkvqZI3&X-Amz-Signature=69dce8b3ed30a6f3e738820922c41cfd7cc79319b21bf2004cd6c9fdb7a8f5e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHJ5QKQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu%2F%2FgnC6yPzUi4z4KXysQ3xwalBsVC6hRWEVZe6tvs6wIhALOXMopObuPY%2Bx2Cdj8uniJ4iM2UTh2nA4H2j%2FisST0%2BKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeuCusVf%2BEjQVPOZ8q3ANnnpPCrcgFo1w%2B2D4kAhQ0CxjlgRt2QpxE6pTtH1cicasUt7s8zWcxtVg%2BtF8%2Fexyha89xK41or5smOeX28mW1J55Waorb%2BJi4rrv0SDRzFxAL5jz4GCqIoiSALKj9Wbs72QvF%2FcaitidroG6i%2Bx7EougCmkHYUR1c9aJXbkiCS1lzLPG2IObY1in3KmvmkWQRs%2Fq2qlRymlz5jyVcm%2FT9i7dp9WQLOrQBLyq2qMxSjs%2BndRNemdu%2FDUmXSZXKJGE2gJ%2FMVVi0BgL761CCtxaBBtDpgfnPVnLEwrDvQ0V1Q4YzXoG30vEtJIFSyxSYBC2hs2k%2BWayeT5k77SERhF6HHLeGKMKtkYHM%2BIJPlU56vetY4JR%2F3ED3GymA%2FUWKX2AJtEp9i1HW5Ypd4neQygfhXiAdsl7hJuOeOrLwf8Lak35cNXHRykM5JaZx3LvTBsF6HboUTJvTheISo2xrbjsYShkniJvS8AUM8i3Zl0XJG1H%2Fv4Se5ubunCyDm0uuimH6sxzxHjSzbKhlZCZnbftR58KomI1T5awUa6VJAlSpAltL19W8DBiwUHW2eEqcccla2VUJKpZytB0i8zKTpI9gpjpS5SgQU0p1ntXZOzkml%2BKquNzDWvznUkdgNDCby7PBBjqkAX1UB3EdkPUJKpJ1R3yC2uhAv2PPUqOy%2FvlAdCUurgEbYvHvqySDTAQd2rq1H5LVpp6T7Xcja1c2ZCsL7e03ZZNx0ThNdOetzQRbKjAeL8T%2FxaryfLQHECg7ures%2FUkxUFp8gBdb%2BFIs8WDMs6wTwWKlDL91H0Mx68Ar%2FAXLIRuLWa13uybYDis8BpNcDWiRIqC3FgNiLGEK1VdT3a77IzkvqZI3&X-Amz-Signature=adf35fcaaf6da6635b46db57935f3e2a76cc05b42f522206a5e2cb000114a66a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHJ5QKQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu%2F%2FgnC6yPzUi4z4KXysQ3xwalBsVC6hRWEVZe6tvs6wIhALOXMopObuPY%2Bx2Cdj8uniJ4iM2UTh2nA4H2j%2FisST0%2BKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeuCusVf%2BEjQVPOZ8q3ANnnpPCrcgFo1w%2B2D4kAhQ0CxjlgRt2QpxE6pTtH1cicasUt7s8zWcxtVg%2BtF8%2Fexyha89xK41or5smOeX28mW1J55Waorb%2BJi4rrv0SDRzFxAL5jz4GCqIoiSALKj9Wbs72QvF%2FcaitidroG6i%2Bx7EougCmkHYUR1c9aJXbkiCS1lzLPG2IObY1in3KmvmkWQRs%2Fq2qlRymlz5jyVcm%2FT9i7dp9WQLOrQBLyq2qMxSjs%2BndRNemdu%2FDUmXSZXKJGE2gJ%2FMVVi0BgL761CCtxaBBtDpgfnPVnLEwrDvQ0V1Q4YzXoG30vEtJIFSyxSYBC2hs2k%2BWayeT5k77SERhF6HHLeGKMKtkYHM%2BIJPlU56vetY4JR%2F3ED3GymA%2FUWKX2AJtEp9i1HW5Ypd4neQygfhXiAdsl7hJuOeOrLwf8Lak35cNXHRykM5JaZx3LvTBsF6HboUTJvTheISo2xrbjsYShkniJvS8AUM8i3Zl0XJG1H%2Fv4Se5ubunCyDm0uuimH6sxzxHjSzbKhlZCZnbftR58KomI1T5awUa6VJAlSpAltL19W8DBiwUHW2eEqcccla2VUJKpZytB0i8zKTpI9gpjpS5SgQU0p1ntXZOzkml%2BKquNzDWvznUkdgNDCby7PBBjqkAX1UB3EdkPUJKpJ1R3yC2uhAv2PPUqOy%2FvlAdCUurgEbYvHvqySDTAQd2rq1H5LVpp6T7Xcja1c2ZCsL7e03ZZNx0ThNdOetzQRbKjAeL8T%2FxaryfLQHECg7ures%2FUkxUFp8gBdb%2BFIs8WDMs6wTwWKlDL91H0Mx68Ar%2FAXLIRuLWa13uybYDis8BpNcDWiRIqC3FgNiLGEK1VdT3a77IzkvqZI3&X-Amz-Signature=093aa13b595d40209876798f3f3c99ce60937a966fbbd7667d38591ffe3f70a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHJ5QKQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu%2F%2FgnC6yPzUi4z4KXysQ3xwalBsVC6hRWEVZe6tvs6wIhALOXMopObuPY%2Bx2Cdj8uniJ4iM2UTh2nA4H2j%2FisST0%2BKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeuCusVf%2BEjQVPOZ8q3ANnnpPCrcgFo1w%2B2D4kAhQ0CxjlgRt2QpxE6pTtH1cicasUt7s8zWcxtVg%2BtF8%2Fexyha89xK41or5smOeX28mW1J55Waorb%2BJi4rrv0SDRzFxAL5jz4GCqIoiSALKj9Wbs72QvF%2FcaitidroG6i%2Bx7EougCmkHYUR1c9aJXbkiCS1lzLPG2IObY1in3KmvmkWQRs%2Fq2qlRymlz5jyVcm%2FT9i7dp9WQLOrQBLyq2qMxSjs%2BndRNemdu%2FDUmXSZXKJGE2gJ%2FMVVi0BgL761CCtxaBBtDpgfnPVnLEwrDvQ0V1Q4YzXoG30vEtJIFSyxSYBC2hs2k%2BWayeT5k77SERhF6HHLeGKMKtkYHM%2BIJPlU56vetY4JR%2F3ED3GymA%2FUWKX2AJtEp9i1HW5Ypd4neQygfhXiAdsl7hJuOeOrLwf8Lak35cNXHRykM5JaZx3LvTBsF6HboUTJvTheISo2xrbjsYShkniJvS8AUM8i3Zl0XJG1H%2Fv4Se5ubunCyDm0uuimH6sxzxHjSzbKhlZCZnbftR58KomI1T5awUa6VJAlSpAltL19W8DBiwUHW2eEqcccla2VUJKpZytB0i8zKTpI9gpjpS5SgQU0p1ntXZOzkml%2BKquNzDWvznUkdgNDCby7PBBjqkAX1UB3EdkPUJKpJ1R3yC2uhAv2PPUqOy%2FvlAdCUurgEbYvHvqySDTAQd2rq1H5LVpp6T7Xcja1c2ZCsL7e03ZZNx0ThNdOetzQRbKjAeL8T%2FxaryfLQHECg7ures%2FUkxUFp8gBdb%2BFIs8WDMs6wTwWKlDL91H0Mx68Ar%2FAXLIRuLWa13uybYDis8BpNcDWiRIqC3FgNiLGEK1VdT3a77IzkvqZI3&X-Amz-Signature=e9910754286af8ba8193a5a4ddea77788f11093c09bf346844381b07a7e87bec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHJ5QKQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu%2F%2FgnC6yPzUi4z4KXysQ3xwalBsVC6hRWEVZe6tvs6wIhALOXMopObuPY%2Bx2Cdj8uniJ4iM2UTh2nA4H2j%2FisST0%2BKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeuCusVf%2BEjQVPOZ8q3ANnnpPCrcgFo1w%2B2D4kAhQ0CxjlgRt2QpxE6pTtH1cicasUt7s8zWcxtVg%2BtF8%2Fexyha89xK41or5smOeX28mW1J55Waorb%2BJi4rrv0SDRzFxAL5jz4GCqIoiSALKj9Wbs72QvF%2FcaitidroG6i%2Bx7EougCmkHYUR1c9aJXbkiCS1lzLPG2IObY1in3KmvmkWQRs%2Fq2qlRymlz5jyVcm%2FT9i7dp9WQLOrQBLyq2qMxSjs%2BndRNemdu%2FDUmXSZXKJGE2gJ%2FMVVi0BgL761CCtxaBBtDpgfnPVnLEwrDvQ0V1Q4YzXoG30vEtJIFSyxSYBC2hs2k%2BWayeT5k77SERhF6HHLeGKMKtkYHM%2BIJPlU56vetY4JR%2F3ED3GymA%2FUWKX2AJtEp9i1HW5Ypd4neQygfhXiAdsl7hJuOeOrLwf8Lak35cNXHRykM5JaZx3LvTBsF6HboUTJvTheISo2xrbjsYShkniJvS8AUM8i3Zl0XJG1H%2Fv4Se5ubunCyDm0uuimH6sxzxHjSzbKhlZCZnbftR58KomI1T5awUa6VJAlSpAltL19W8DBiwUHW2eEqcccla2VUJKpZytB0i8zKTpI9gpjpS5SgQU0p1ntXZOzkml%2BKquNzDWvznUkdgNDCby7PBBjqkAX1UB3EdkPUJKpJ1R3yC2uhAv2PPUqOy%2FvlAdCUurgEbYvHvqySDTAQd2rq1H5LVpp6T7Xcja1c2ZCsL7e03ZZNx0ThNdOetzQRbKjAeL8T%2FxaryfLQHECg7ures%2FUkxUFp8gBdb%2BFIs8WDMs6wTwWKlDL91H0Mx68Ar%2FAXLIRuLWa13uybYDis8BpNcDWiRIqC3FgNiLGEK1VdT3a77IzkvqZI3&X-Amz-Signature=d0cf4b28a0d3fa8521e764f211ca8841c4d640e55f8bd31743d66c707538a89d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHJ5QKQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu%2F%2FgnC6yPzUi4z4KXysQ3xwalBsVC6hRWEVZe6tvs6wIhALOXMopObuPY%2Bx2Cdj8uniJ4iM2UTh2nA4H2j%2FisST0%2BKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeuCusVf%2BEjQVPOZ8q3ANnnpPCrcgFo1w%2B2D4kAhQ0CxjlgRt2QpxE6pTtH1cicasUt7s8zWcxtVg%2BtF8%2Fexyha89xK41or5smOeX28mW1J55Waorb%2BJi4rrv0SDRzFxAL5jz4GCqIoiSALKj9Wbs72QvF%2FcaitidroG6i%2Bx7EougCmkHYUR1c9aJXbkiCS1lzLPG2IObY1in3KmvmkWQRs%2Fq2qlRymlz5jyVcm%2FT9i7dp9WQLOrQBLyq2qMxSjs%2BndRNemdu%2FDUmXSZXKJGE2gJ%2FMVVi0BgL761CCtxaBBtDpgfnPVnLEwrDvQ0V1Q4YzXoG30vEtJIFSyxSYBC2hs2k%2BWayeT5k77SERhF6HHLeGKMKtkYHM%2BIJPlU56vetY4JR%2F3ED3GymA%2FUWKX2AJtEp9i1HW5Ypd4neQygfhXiAdsl7hJuOeOrLwf8Lak35cNXHRykM5JaZx3LvTBsF6HboUTJvTheISo2xrbjsYShkniJvS8AUM8i3Zl0XJG1H%2Fv4Se5ubunCyDm0uuimH6sxzxHjSzbKhlZCZnbftR58KomI1T5awUa6VJAlSpAltL19W8DBiwUHW2eEqcccla2VUJKpZytB0i8zKTpI9gpjpS5SgQU0p1ntXZOzkml%2BKquNzDWvznUkdgNDCby7PBBjqkAX1UB3EdkPUJKpJ1R3yC2uhAv2PPUqOy%2FvlAdCUurgEbYvHvqySDTAQd2rq1H5LVpp6T7Xcja1c2ZCsL7e03ZZNx0ThNdOetzQRbKjAeL8T%2FxaryfLQHECg7ures%2FUkxUFp8gBdb%2BFIs8WDMs6wTwWKlDL91H0Mx68Ar%2FAXLIRuLWa13uybYDis8BpNcDWiRIqC3FgNiLGEK1VdT3a77IzkvqZI3&X-Amz-Signature=ca33e3bed2d4968a101dace6102fbfb89ceb0326845e7ab92468a3d15999f3df&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHJ5QKQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu%2F%2FgnC6yPzUi4z4KXysQ3xwalBsVC6hRWEVZe6tvs6wIhALOXMopObuPY%2Bx2Cdj8uniJ4iM2UTh2nA4H2j%2FisST0%2BKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeuCusVf%2BEjQVPOZ8q3ANnnpPCrcgFo1w%2B2D4kAhQ0CxjlgRt2QpxE6pTtH1cicasUt7s8zWcxtVg%2BtF8%2Fexyha89xK41or5smOeX28mW1J55Waorb%2BJi4rrv0SDRzFxAL5jz4GCqIoiSALKj9Wbs72QvF%2FcaitidroG6i%2Bx7EougCmkHYUR1c9aJXbkiCS1lzLPG2IObY1in3KmvmkWQRs%2Fq2qlRymlz5jyVcm%2FT9i7dp9WQLOrQBLyq2qMxSjs%2BndRNemdu%2FDUmXSZXKJGE2gJ%2FMVVi0BgL761CCtxaBBtDpgfnPVnLEwrDvQ0V1Q4YzXoG30vEtJIFSyxSYBC2hs2k%2BWayeT5k77SERhF6HHLeGKMKtkYHM%2BIJPlU56vetY4JR%2F3ED3GymA%2FUWKX2AJtEp9i1HW5Ypd4neQygfhXiAdsl7hJuOeOrLwf8Lak35cNXHRykM5JaZx3LvTBsF6HboUTJvTheISo2xrbjsYShkniJvS8AUM8i3Zl0XJG1H%2Fv4Se5ubunCyDm0uuimH6sxzxHjSzbKhlZCZnbftR58KomI1T5awUa6VJAlSpAltL19W8DBiwUHW2eEqcccla2VUJKpZytB0i8zKTpI9gpjpS5SgQU0p1ntXZOzkml%2BKquNzDWvznUkdgNDCby7PBBjqkAX1UB3EdkPUJKpJ1R3yC2uhAv2PPUqOy%2FvlAdCUurgEbYvHvqySDTAQd2rq1H5LVpp6T7Xcja1c2ZCsL7e03ZZNx0ThNdOetzQRbKjAeL8T%2FxaryfLQHECg7ures%2FUkxUFp8gBdb%2BFIs8WDMs6wTwWKlDL91H0Mx68Ar%2FAXLIRuLWa13uybYDis8BpNcDWiRIqC3FgNiLGEK1VdT3a77IzkvqZI3&X-Amz-Signature=851f56c79fbbf1f6bfce8cdad8200c82f84f384f42c0d1d975d6e43ae46c273a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

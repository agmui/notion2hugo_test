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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MX6Q7N4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSgCOOTItLEZCyhtoYOAqu4OzouRFPkS%2B2hwlB9%2BXGKAiBvo5i2wkkTcbj%2F726u9r1zI6kskR2geZgjJ9y4XcDrziqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcniSdQzXbPUT6wvIKtwDVCk1CSHxOLUvtd26x1dRnApW7UIG3ETbYN%2F1DvDdkMFyHyQYT64LStN7%2F6wuCCaALRyVL9B%2Be%2B8DxPJzoF10UZlxpL%2Byaad7nB1JG%2BHaibtJ9hR6a5FoPYuZ%2BSJVn2yK6VC6jXb%2FsZRbeDt3IUOPBoItqXp%2FpEIj%2FiI8%2BJ7phxRyFClGBxAzG%2FvUAKGRVLXSxzJAnPMjS7WiBbneTfaHLP%2B5B%2FJ2f0nCWKJc8qPxWy%2BU1CvB3%2BW3Np2aqc%2BIGayjIIiiGMEFoN5wC%2Fb64kNaAwbjKRrY%2BG%2BO2zFTaWLgaoJINb7QwXQND%2F0KV062tzlv1Dnf6hKEZ2FCYYZyZO9N2hWWhcHK8UqnEiw4%2BmLM9awvzafW7zkM42FE3AUSdt88RFhdz2BygtDR25lllvJeNOG%2F%2BRopsCKADG5zZ5Qyf0kKoBq7k2iqEks4YoCOTDmI3n%2B7bvqecUuAJJAftf7B5%2F22L1umY2jD%2Bg8J1LvvwRMupLcOBWKC8%2FW9dj%2BkMBezjcvFVMX9m2mI5EaxqL2drNH6L4pJQ%2B5BVJ1rZM9mzh%2BgOWhK5VN2dVI%2BcthMH3OuEt6EJdDhT0gURWHr9H1mAkv%2BQcLP6RSBgaRaumBmJHB%2B4kNtIsYjxCg0x6IwnuWiwgY6pgEURPxhijCz4uKmY6evkU66L8v3yJv%2FQjae8Z3F4k8DSJVP%2B4jZiwRCe%2FKogBRJvtniaPCAB9E%2BcbgZK1t7jMsaDcGW3E5482Uvg8LFXvolpuAD1VWPODnf9CaDuLezcQDC0%2Bv72gEp731SZ9RIsd%2FIt7TtpcjY66CiYTv8wVYBPSn1oSWarptfFwm7CUz7tkvma87hEhWxgDtdtJnLCR4Yj1EdpbCJ&X-Amz-Signature=b83f74ae2791c26d87bb734c9466796eceb3631c94fb865d3b8875bdb24bbec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MX6Q7N4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSgCOOTItLEZCyhtoYOAqu4OzouRFPkS%2B2hwlB9%2BXGKAiBvo5i2wkkTcbj%2F726u9r1zI6kskR2geZgjJ9y4XcDrziqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcniSdQzXbPUT6wvIKtwDVCk1CSHxOLUvtd26x1dRnApW7UIG3ETbYN%2F1DvDdkMFyHyQYT64LStN7%2F6wuCCaALRyVL9B%2Be%2B8DxPJzoF10UZlxpL%2Byaad7nB1JG%2BHaibtJ9hR6a5FoPYuZ%2BSJVn2yK6VC6jXb%2FsZRbeDt3IUOPBoItqXp%2FpEIj%2FiI8%2BJ7phxRyFClGBxAzG%2FvUAKGRVLXSxzJAnPMjS7WiBbneTfaHLP%2B5B%2FJ2f0nCWKJc8qPxWy%2BU1CvB3%2BW3Np2aqc%2BIGayjIIiiGMEFoN5wC%2Fb64kNaAwbjKRrY%2BG%2BO2zFTaWLgaoJINb7QwXQND%2F0KV062tzlv1Dnf6hKEZ2FCYYZyZO9N2hWWhcHK8UqnEiw4%2BmLM9awvzafW7zkM42FE3AUSdt88RFhdz2BygtDR25lllvJeNOG%2F%2BRopsCKADG5zZ5Qyf0kKoBq7k2iqEks4YoCOTDmI3n%2B7bvqecUuAJJAftf7B5%2F22L1umY2jD%2Bg8J1LvvwRMupLcOBWKC8%2FW9dj%2BkMBezjcvFVMX9m2mI5EaxqL2drNH6L4pJQ%2B5BVJ1rZM9mzh%2BgOWhK5VN2dVI%2BcthMH3OuEt6EJdDhT0gURWHr9H1mAkv%2BQcLP6RSBgaRaumBmJHB%2B4kNtIsYjxCg0x6IwnuWiwgY6pgEURPxhijCz4uKmY6evkU66L8v3yJv%2FQjae8Z3F4k8DSJVP%2B4jZiwRCe%2FKogBRJvtniaPCAB9E%2BcbgZK1t7jMsaDcGW3E5482Uvg8LFXvolpuAD1VWPODnf9CaDuLezcQDC0%2Bv72gEp731SZ9RIsd%2FIt7TtpcjY66CiYTv8wVYBPSn1oSWarptfFwm7CUz7tkvma87hEhWxgDtdtJnLCR4Yj1EdpbCJ&X-Amz-Signature=85b2bdfc8c9254496f854a799b40152b8cb6f6244ccc1cdd091eadd9a82c7d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MX6Q7N4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSgCOOTItLEZCyhtoYOAqu4OzouRFPkS%2B2hwlB9%2BXGKAiBvo5i2wkkTcbj%2F726u9r1zI6kskR2geZgjJ9y4XcDrziqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcniSdQzXbPUT6wvIKtwDVCk1CSHxOLUvtd26x1dRnApW7UIG3ETbYN%2F1DvDdkMFyHyQYT64LStN7%2F6wuCCaALRyVL9B%2Be%2B8DxPJzoF10UZlxpL%2Byaad7nB1JG%2BHaibtJ9hR6a5FoPYuZ%2BSJVn2yK6VC6jXb%2FsZRbeDt3IUOPBoItqXp%2FpEIj%2FiI8%2BJ7phxRyFClGBxAzG%2FvUAKGRVLXSxzJAnPMjS7WiBbneTfaHLP%2B5B%2FJ2f0nCWKJc8qPxWy%2BU1CvB3%2BW3Np2aqc%2BIGayjIIiiGMEFoN5wC%2Fb64kNaAwbjKRrY%2BG%2BO2zFTaWLgaoJINb7QwXQND%2F0KV062tzlv1Dnf6hKEZ2FCYYZyZO9N2hWWhcHK8UqnEiw4%2BmLM9awvzafW7zkM42FE3AUSdt88RFhdz2BygtDR25lllvJeNOG%2F%2BRopsCKADG5zZ5Qyf0kKoBq7k2iqEks4YoCOTDmI3n%2B7bvqecUuAJJAftf7B5%2F22L1umY2jD%2Bg8J1LvvwRMupLcOBWKC8%2FW9dj%2BkMBezjcvFVMX9m2mI5EaxqL2drNH6L4pJQ%2B5BVJ1rZM9mzh%2BgOWhK5VN2dVI%2BcthMH3OuEt6EJdDhT0gURWHr9H1mAkv%2BQcLP6RSBgaRaumBmJHB%2B4kNtIsYjxCg0x6IwnuWiwgY6pgEURPxhijCz4uKmY6evkU66L8v3yJv%2FQjae8Z3F4k8DSJVP%2B4jZiwRCe%2FKogBRJvtniaPCAB9E%2BcbgZK1t7jMsaDcGW3E5482Uvg8LFXvolpuAD1VWPODnf9CaDuLezcQDC0%2Bv72gEp731SZ9RIsd%2FIt7TtpcjY66CiYTv8wVYBPSn1oSWarptfFwm7CUz7tkvma87hEhWxgDtdtJnLCR4Yj1EdpbCJ&X-Amz-Signature=8eafda9225823fbd4791a3fc746fd2e7745b368c37a477f9b63bad92568721cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MX6Q7N4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSgCOOTItLEZCyhtoYOAqu4OzouRFPkS%2B2hwlB9%2BXGKAiBvo5i2wkkTcbj%2F726u9r1zI6kskR2geZgjJ9y4XcDrziqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcniSdQzXbPUT6wvIKtwDVCk1CSHxOLUvtd26x1dRnApW7UIG3ETbYN%2F1DvDdkMFyHyQYT64LStN7%2F6wuCCaALRyVL9B%2Be%2B8DxPJzoF10UZlxpL%2Byaad7nB1JG%2BHaibtJ9hR6a5FoPYuZ%2BSJVn2yK6VC6jXb%2FsZRbeDt3IUOPBoItqXp%2FpEIj%2FiI8%2BJ7phxRyFClGBxAzG%2FvUAKGRVLXSxzJAnPMjS7WiBbneTfaHLP%2B5B%2FJ2f0nCWKJc8qPxWy%2BU1CvB3%2BW3Np2aqc%2BIGayjIIiiGMEFoN5wC%2Fb64kNaAwbjKRrY%2BG%2BO2zFTaWLgaoJINb7QwXQND%2F0KV062tzlv1Dnf6hKEZ2FCYYZyZO9N2hWWhcHK8UqnEiw4%2BmLM9awvzafW7zkM42FE3AUSdt88RFhdz2BygtDR25lllvJeNOG%2F%2BRopsCKADG5zZ5Qyf0kKoBq7k2iqEks4YoCOTDmI3n%2B7bvqecUuAJJAftf7B5%2F22L1umY2jD%2Bg8J1LvvwRMupLcOBWKC8%2FW9dj%2BkMBezjcvFVMX9m2mI5EaxqL2drNH6L4pJQ%2B5BVJ1rZM9mzh%2BgOWhK5VN2dVI%2BcthMH3OuEt6EJdDhT0gURWHr9H1mAkv%2BQcLP6RSBgaRaumBmJHB%2B4kNtIsYjxCg0x6IwnuWiwgY6pgEURPxhijCz4uKmY6evkU66L8v3yJv%2FQjae8Z3F4k8DSJVP%2B4jZiwRCe%2FKogBRJvtniaPCAB9E%2BcbgZK1t7jMsaDcGW3E5482Uvg8LFXvolpuAD1VWPODnf9CaDuLezcQDC0%2Bv72gEp731SZ9RIsd%2FIt7TtpcjY66CiYTv8wVYBPSn1oSWarptfFwm7CUz7tkvma87hEhWxgDtdtJnLCR4Yj1EdpbCJ&X-Amz-Signature=fb6dca46ec0394dbe5804e00f2e762aff036292f7d06fb23d6a776af1ed34032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MX6Q7N4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSgCOOTItLEZCyhtoYOAqu4OzouRFPkS%2B2hwlB9%2BXGKAiBvo5i2wkkTcbj%2F726u9r1zI6kskR2geZgjJ9y4XcDrziqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcniSdQzXbPUT6wvIKtwDVCk1CSHxOLUvtd26x1dRnApW7UIG3ETbYN%2F1DvDdkMFyHyQYT64LStN7%2F6wuCCaALRyVL9B%2Be%2B8DxPJzoF10UZlxpL%2Byaad7nB1JG%2BHaibtJ9hR6a5FoPYuZ%2BSJVn2yK6VC6jXb%2FsZRbeDt3IUOPBoItqXp%2FpEIj%2FiI8%2BJ7phxRyFClGBxAzG%2FvUAKGRVLXSxzJAnPMjS7WiBbneTfaHLP%2B5B%2FJ2f0nCWKJc8qPxWy%2BU1CvB3%2BW3Np2aqc%2BIGayjIIiiGMEFoN5wC%2Fb64kNaAwbjKRrY%2BG%2BO2zFTaWLgaoJINb7QwXQND%2F0KV062tzlv1Dnf6hKEZ2FCYYZyZO9N2hWWhcHK8UqnEiw4%2BmLM9awvzafW7zkM42FE3AUSdt88RFhdz2BygtDR25lllvJeNOG%2F%2BRopsCKADG5zZ5Qyf0kKoBq7k2iqEks4YoCOTDmI3n%2B7bvqecUuAJJAftf7B5%2F22L1umY2jD%2Bg8J1LvvwRMupLcOBWKC8%2FW9dj%2BkMBezjcvFVMX9m2mI5EaxqL2drNH6L4pJQ%2B5BVJ1rZM9mzh%2BgOWhK5VN2dVI%2BcthMH3OuEt6EJdDhT0gURWHr9H1mAkv%2BQcLP6RSBgaRaumBmJHB%2B4kNtIsYjxCg0x6IwnuWiwgY6pgEURPxhijCz4uKmY6evkU66L8v3yJv%2FQjae8Z3F4k8DSJVP%2B4jZiwRCe%2FKogBRJvtniaPCAB9E%2BcbgZK1t7jMsaDcGW3E5482Uvg8LFXvolpuAD1VWPODnf9CaDuLezcQDC0%2Bv72gEp731SZ9RIsd%2FIt7TtpcjY66CiYTv8wVYBPSn1oSWarptfFwm7CUz7tkvma87hEhWxgDtdtJnLCR4Yj1EdpbCJ&X-Amz-Signature=f178ec3a6e9129bb6f2c72f71ef857c5bdeb435350c2f2d75b20c49676f7b6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MX6Q7N4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSgCOOTItLEZCyhtoYOAqu4OzouRFPkS%2B2hwlB9%2BXGKAiBvo5i2wkkTcbj%2F726u9r1zI6kskR2geZgjJ9y4XcDrziqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcniSdQzXbPUT6wvIKtwDVCk1CSHxOLUvtd26x1dRnApW7UIG3ETbYN%2F1DvDdkMFyHyQYT64LStN7%2F6wuCCaALRyVL9B%2Be%2B8DxPJzoF10UZlxpL%2Byaad7nB1JG%2BHaibtJ9hR6a5FoPYuZ%2BSJVn2yK6VC6jXb%2FsZRbeDt3IUOPBoItqXp%2FpEIj%2FiI8%2BJ7phxRyFClGBxAzG%2FvUAKGRVLXSxzJAnPMjS7WiBbneTfaHLP%2B5B%2FJ2f0nCWKJc8qPxWy%2BU1CvB3%2BW3Np2aqc%2BIGayjIIiiGMEFoN5wC%2Fb64kNaAwbjKRrY%2BG%2BO2zFTaWLgaoJINb7QwXQND%2F0KV062tzlv1Dnf6hKEZ2FCYYZyZO9N2hWWhcHK8UqnEiw4%2BmLM9awvzafW7zkM42FE3AUSdt88RFhdz2BygtDR25lllvJeNOG%2F%2BRopsCKADG5zZ5Qyf0kKoBq7k2iqEks4YoCOTDmI3n%2B7bvqecUuAJJAftf7B5%2F22L1umY2jD%2Bg8J1LvvwRMupLcOBWKC8%2FW9dj%2BkMBezjcvFVMX9m2mI5EaxqL2drNH6L4pJQ%2B5BVJ1rZM9mzh%2BgOWhK5VN2dVI%2BcthMH3OuEt6EJdDhT0gURWHr9H1mAkv%2BQcLP6RSBgaRaumBmJHB%2B4kNtIsYjxCg0x6IwnuWiwgY6pgEURPxhijCz4uKmY6evkU66L8v3yJv%2FQjae8Z3F4k8DSJVP%2B4jZiwRCe%2FKogBRJvtniaPCAB9E%2BcbgZK1t7jMsaDcGW3E5482Uvg8LFXvolpuAD1VWPODnf9CaDuLezcQDC0%2Bv72gEp731SZ9RIsd%2FIt7TtpcjY66CiYTv8wVYBPSn1oSWarptfFwm7CUz7tkvma87hEhWxgDtdtJnLCR4Yj1EdpbCJ&X-Amz-Signature=471599ab841e113debd227cb06facc3ff6dad4cbcf73cc96b4788281e5504fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MX6Q7N4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSgCOOTItLEZCyhtoYOAqu4OzouRFPkS%2B2hwlB9%2BXGKAiBvo5i2wkkTcbj%2F726u9r1zI6kskR2geZgjJ9y4XcDrziqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcniSdQzXbPUT6wvIKtwDVCk1CSHxOLUvtd26x1dRnApW7UIG3ETbYN%2F1DvDdkMFyHyQYT64LStN7%2F6wuCCaALRyVL9B%2Be%2B8DxPJzoF10UZlxpL%2Byaad7nB1JG%2BHaibtJ9hR6a5FoPYuZ%2BSJVn2yK6VC6jXb%2FsZRbeDt3IUOPBoItqXp%2FpEIj%2FiI8%2BJ7phxRyFClGBxAzG%2FvUAKGRVLXSxzJAnPMjS7WiBbneTfaHLP%2B5B%2FJ2f0nCWKJc8qPxWy%2BU1CvB3%2BW3Np2aqc%2BIGayjIIiiGMEFoN5wC%2Fb64kNaAwbjKRrY%2BG%2BO2zFTaWLgaoJINb7QwXQND%2F0KV062tzlv1Dnf6hKEZ2FCYYZyZO9N2hWWhcHK8UqnEiw4%2BmLM9awvzafW7zkM42FE3AUSdt88RFhdz2BygtDR25lllvJeNOG%2F%2BRopsCKADG5zZ5Qyf0kKoBq7k2iqEks4YoCOTDmI3n%2B7bvqecUuAJJAftf7B5%2F22L1umY2jD%2Bg8J1LvvwRMupLcOBWKC8%2FW9dj%2BkMBezjcvFVMX9m2mI5EaxqL2drNH6L4pJQ%2B5BVJ1rZM9mzh%2BgOWhK5VN2dVI%2BcthMH3OuEt6EJdDhT0gURWHr9H1mAkv%2BQcLP6RSBgaRaumBmJHB%2B4kNtIsYjxCg0x6IwnuWiwgY6pgEURPxhijCz4uKmY6evkU66L8v3yJv%2FQjae8Z3F4k8DSJVP%2B4jZiwRCe%2FKogBRJvtniaPCAB9E%2BcbgZK1t7jMsaDcGW3E5482Uvg8LFXvolpuAD1VWPODnf9CaDuLezcQDC0%2Bv72gEp731SZ9RIsd%2FIt7TtpcjY66CiYTv8wVYBPSn1oSWarptfFwm7CUz7tkvma87hEhWxgDtdtJnLCR4Yj1EdpbCJ&X-Amz-Signature=725c9a3c206225bb92a98b3e05a5537c4b4e63c43ac5a97740ab87fdfa5ec04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

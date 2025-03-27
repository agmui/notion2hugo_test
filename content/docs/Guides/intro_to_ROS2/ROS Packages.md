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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZRRYQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyHjL924PSp2TlHvs964nmWrlxYxA2o5NPCAq3fddnugIgW%2Fd4GZmiVt%2FS2eRn2Y2Y7pAKPr1E7byfngalrcVn8UAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJa8DIsSu4LTgQdjhircAxA62JWxLlIQxJA27RE1r4GihZ4TRLv6n54kOPKgU%2F%2FwFVgMrnPXI%2Fg6moDU4Vz5qAANDLvbCfeKDhTABAnioISQ6O5ta32dWmjtFwyNNwc2cqjap45YfxAvHJHEPocVRWxJX8xBcyeIvOr81ZLK9a%2FUiCOTvlljCfm%2B%2B0CCS2cdJCdcZm%2FRzsV2mJYVEdErV8xqQ%2FVSh8tZAbwq9AxdSnI9xnUy77iPxZtQq7XtuxF8%2ByZZLAdy7ajVgxqVQOMA1wOToFu6vAKaQbYllz7ql%2BFlpa2fmN1yStXwrXBDDTiS6112mLMsq13Vhylgbtl7vf%2FozuepwYnTIMwo4p6DXSllcjdwPlBLj6r6XCjZDVzJFN5TQjAeISEP9M9jVxWTspDzzEIS1mPoTf7n5AEell3Z51HMaTio9bZKZ8R6pusw4s6jwkLU4hoGyXhIIA2tMbCP0FywW0fxX4%2FYEQJNh8013HcsSdtt%2F1seGqVInm1t%2BWqj7ZpZFa8UJ80EzfsQLFJ8OHPEQYwtllBo9b3s9pUSHpek9CKEjgaqw3UI1SurrYFb4JaEvIsjTcZi%2BVCwpVDLQN4VmBlPASisnqqlYo3JoeklTVdJFlR7mfB9jQNYwnYFAQ4%2FsAX5l8tgMIT4lL8GOqUBetnjbvM5SGfGgj9%2BtODVw863rv%2B0vi%2F8uUS%2BQ8L655jyNHm%2BErG%2BX11WE7VPE6%2Fmqc6XB9sW%2BtXge5taX9%2Ft8v8xYvgLhb87Od83I9xnQb%2FywddsaYukRu85Y%2FhghVT8B7jfvy%2Ff%2FvyBTv8wtjOG3gABi%2B69Km4V%2BkcYekOsb%2BAljyTyUeK5yaKGvOFskE7JS0ewmk4Beay7n2hMt5tXF1PIbUEV&X-Amz-Signature=806bafa6402b51b6b475fea597c2ee716985a4dbabfa1bea65b6746b63b73916&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZRRYQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyHjL924PSp2TlHvs964nmWrlxYxA2o5NPCAq3fddnugIgW%2Fd4GZmiVt%2FS2eRn2Y2Y7pAKPr1E7byfngalrcVn8UAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJa8DIsSu4LTgQdjhircAxA62JWxLlIQxJA27RE1r4GihZ4TRLv6n54kOPKgU%2F%2FwFVgMrnPXI%2Fg6moDU4Vz5qAANDLvbCfeKDhTABAnioISQ6O5ta32dWmjtFwyNNwc2cqjap45YfxAvHJHEPocVRWxJX8xBcyeIvOr81ZLK9a%2FUiCOTvlljCfm%2B%2B0CCS2cdJCdcZm%2FRzsV2mJYVEdErV8xqQ%2FVSh8tZAbwq9AxdSnI9xnUy77iPxZtQq7XtuxF8%2ByZZLAdy7ajVgxqVQOMA1wOToFu6vAKaQbYllz7ql%2BFlpa2fmN1yStXwrXBDDTiS6112mLMsq13Vhylgbtl7vf%2FozuepwYnTIMwo4p6DXSllcjdwPlBLj6r6XCjZDVzJFN5TQjAeISEP9M9jVxWTspDzzEIS1mPoTf7n5AEell3Z51HMaTio9bZKZ8R6pusw4s6jwkLU4hoGyXhIIA2tMbCP0FywW0fxX4%2FYEQJNh8013HcsSdtt%2F1seGqVInm1t%2BWqj7ZpZFa8UJ80EzfsQLFJ8OHPEQYwtllBo9b3s9pUSHpek9CKEjgaqw3UI1SurrYFb4JaEvIsjTcZi%2BVCwpVDLQN4VmBlPASisnqqlYo3JoeklTVdJFlR7mfB9jQNYwnYFAQ4%2FsAX5l8tgMIT4lL8GOqUBetnjbvM5SGfGgj9%2BtODVw863rv%2B0vi%2F8uUS%2BQ8L655jyNHm%2BErG%2BX11WE7VPE6%2Fmqc6XB9sW%2BtXge5taX9%2Ft8v8xYvgLhb87Od83I9xnQb%2FywddsaYukRu85Y%2FhghVT8B7jfvy%2Ff%2FvyBTv8wtjOG3gABi%2B69Km4V%2BkcYekOsb%2BAljyTyUeK5yaKGvOFskE7JS0ewmk4Beay7n2hMt5tXF1PIbUEV&X-Amz-Signature=dc54e39ebaae186869f8ed81f9baf63f69829561299ded706ff4e7780d25a576&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZRRYQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyHjL924PSp2TlHvs964nmWrlxYxA2o5NPCAq3fddnugIgW%2Fd4GZmiVt%2FS2eRn2Y2Y7pAKPr1E7byfngalrcVn8UAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJa8DIsSu4LTgQdjhircAxA62JWxLlIQxJA27RE1r4GihZ4TRLv6n54kOPKgU%2F%2FwFVgMrnPXI%2Fg6moDU4Vz5qAANDLvbCfeKDhTABAnioISQ6O5ta32dWmjtFwyNNwc2cqjap45YfxAvHJHEPocVRWxJX8xBcyeIvOr81ZLK9a%2FUiCOTvlljCfm%2B%2B0CCS2cdJCdcZm%2FRzsV2mJYVEdErV8xqQ%2FVSh8tZAbwq9AxdSnI9xnUy77iPxZtQq7XtuxF8%2ByZZLAdy7ajVgxqVQOMA1wOToFu6vAKaQbYllz7ql%2BFlpa2fmN1yStXwrXBDDTiS6112mLMsq13Vhylgbtl7vf%2FozuepwYnTIMwo4p6DXSllcjdwPlBLj6r6XCjZDVzJFN5TQjAeISEP9M9jVxWTspDzzEIS1mPoTf7n5AEell3Z51HMaTio9bZKZ8R6pusw4s6jwkLU4hoGyXhIIA2tMbCP0FywW0fxX4%2FYEQJNh8013HcsSdtt%2F1seGqVInm1t%2BWqj7ZpZFa8UJ80EzfsQLFJ8OHPEQYwtllBo9b3s9pUSHpek9CKEjgaqw3UI1SurrYFb4JaEvIsjTcZi%2BVCwpVDLQN4VmBlPASisnqqlYo3JoeklTVdJFlR7mfB9jQNYwnYFAQ4%2FsAX5l8tgMIT4lL8GOqUBetnjbvM5SGfGgj9%2BtODVw863rv%2B0vi%2F8uUS%2BQ8L655jyNHm%2BErG%2BX11WE7VPE6%2Fmqc6XB9sW%2BtXge5taX9%2Ft8v8xYvgLhb87Od83I9xnQb%2FywddsaYukRu85Y%2FhghVT8B7jfvy%2Ff%2FvyBTv8wtjOG3gABi%2B69Km4V%2BkcYekOsb%2BAljyTyUeK5yaKGvOFskE7JS0ewmk4Beay7n2hMt5tXF1PIbUEV&X-Amz-Signature=d7286d8ea260265686c356336aa4f4ff1a05f41bb0c97102863c809b4c064571&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZRRYQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyHjL924PSp2TlHvs964nmWrlxYxA2o5NPCAq3fddnugIgW%2Fd4GZmiVt%2FS2eRn2Y2Y7pAKPr1E7byfngalrcVn8UAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJa8DIsSu4LTgQdjhircAxA62JWxLlIQxJA27RE1r4GihZ4TRLv6n54kOPKgU%2F%2FwFVgMrnPXI%2Fg6moDU4Vz5qAANDLvbCfeKDhTABAnioISQ6O5ta32dWmjtFwyNNwc2cqjap45YfxAvHJHEPocVRWxJX8xBcyeIvOr81ZLK9a%2FUiCOTvlljCfm%2B%2B0CCS2cdJCdcZm%2FRzsV2mJYVEdErV8xqQ%2FVSh8tZAbwq9AxdSnI9xnUy77iPxZtQq7XtuxF8%2ByZZLAdy7ajVgxqVQOMA1wOToFu6vAKaQbYllz7ql%2BFlpa2fmN1yStXwrXBDDTiS6112mLMsq13Vhylgbtl7vf%2FozuepwYnTIMwo4p6DXSllcjdwPlBLj6r6XCjZDVzJFN5TQjAeISEP9M9jVxWTspDzzEIS1mPoTf7n5AEell3Z51HMaTio9bZKZ8R6pusw4s6jwkLU4hoGyXhIIA2tMbCP0FywW0fxX4%2FYEQJNh8013HcsSdtt%2F1seGqVInm1t%2BWqj7ZpZFa8UJ80EzfsQLFJ8OHPEQYwtllBo9b3s9pUSHpek9CKEjgaqw3UI1SurrYFb4JaEvIsjTcZi%2BVCwpVDLQN4VmBlPASisnqqlYo3JoeklTVdJFlR7mfB9jQNYwnYFAQ4%2FsAX5l8tgMIT4lL8GOqUBetnjbvM5SGfGgj9%2BtODVw863rv%2B0vi%2F8uUS%2BQ8L655jyNHm%2BErG%2BX11WE7VPE6%2Fmqc6XB9sW%2BtXge5taX9%2Ft8v8xYvgLhb87Od83I9xnQb%2FywddsaYukRu85Y%2FhghVT8B7jfvy%2Ff%2FvyBTv8wtjOG3gABi%2B69Km4V%2BkcYekOsb%2BAljyTyUeK5yaKGvOFskE7JS0ewmk4Beay7n2hMt5tXF1PIbUEV&X-Amz-Signature=3db83cb8e57955be2b0c708975c6809425338b4694eb432dea6a197502782abb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZRRYQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyHjL924PSp2TlHvs964nmWrlxYxA2o5NPCAq3fddnugIgW%2Fd4GZmiVt%2FS2eRn2Y2Y7pAKPr1E7byfngalrcVn8UAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJa8DIsSu4LTgQdjhircAxA62JWxLlIQxJA27RE1r4GihZ4TRLv6n54kOPKgU%2F%2FwFVgMrnPXI%2Fg6moDU4Vz5qAANDLvbCfeKDhTABAnioISQ6O5ta32dWmjtFwyNNwc2cqjap45YfxAvHJHEPocVRWxJX8xBcyeIvOr81ZLK9a%2FUiCOTvlljCfm%2B%2B0CCS2cdJCdcZm%2FRzsV2mJYVEdErV8xqQ%2FVSh8tZAbwq9AxdSnI9xnUy77iPxZtQq7XtuxF8%2ByZZLAdy7ajVgxqVQOMA1wOToFu6vAKaQbYllz7ql%2BFlpa2fmN1yStXwrXBDDTiS6112mLMsq13Vhylgbtl7vf%2FozuepwYnTIMwo4p6DXSllcjdwPlBLj6r6XCjZDVzJFN5TQjAeISEP9M9jVxWTspDzzEIS1mPoTf7n5AEell3Z51HMaTio9bZKZ8R6pusw4s6jwkLU4hoGyXhIIA2tMbCP0FywW0fxX4%2FYEQJNh8013HcsSdtt%2F1seGqVInm1t%2BWqj7ZpZFa8UJ80EzfsQLFJ8OHPEQYwtllBo9b3s9pUSHpek9CKEjgaqw3UI1SurrYFb4JaEvIsjTcZi%2BVCwpVDLQN4VmBlPASisnqqlYo3JoeklTVdJFlR7mfB9jQNYwnYFAQ4%2FsAX5l8tgMIT4lL8GOqUBetnjbvM5SGfGgj9%2BtODVw863rv%2B0vi%2F8uUS%2BQ8L655jyNHm%2BErG%2BX11WE7VPE6%2Fmqc6XB9sW%2BtXge5taX9%2Ft8v8xYvgLhb87Od83I9xnQb%2FywddsaYukRu85Y%2FhghVT8B7jfvy%2Ff%2FvyBTv8wtjOG3gABi%2B69Km4V%2BkcYekOsb%2BAljyTyUeK5yaKGvOFskE7JS0ewmk4Beay7n2hMt5tXF1PIbUEV&X-Amz-Signature=b0329b41ae61818739ef58a6fd7e1603f780aa983e6a3681bafa508be6ad4881&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZRRYQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyHjL924PSp2TlHvs964nmWrlxYxA2o5NPCAq3fddnugIgW%2Fd4GZmiVt%2FS2eRn2Y2Y7pAKPr1E7byfngalrcVn8UAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJa8DIsSu4LTgQdjhircAxA62JWxLlIQxJA27RE1r4GihZ4TRLv6n54kOPKgU%2F%2FwFVgMrnPXI%2Fg6moDU4Vz5qAANDLvbCfeKDhTABAnioISQ6O5ta32dWmjtFwyNNwc2cqjap45YfxAvHJHEPocVRWxJX8xBcyeIvOr81ZLK9a%2FUiCOTvlljCfm%2B%2B0CCS2cdJCdcZm%2FRzsV2mJYVEdErV8xqQ%2FVSh8tZAbwq9AxdSnI9xnUy77iPxZtQq7XtuxF8%2ByZZLAdy7ajVgxqVQOMA1wOToFu6vAKaQbYllz7ql%2BFlpa2fmN1yStXwrXBDDTiS6112mLMsq13Vhylgbtl7vf%2FozuepwYnTIMwo4p6DXSllcjdwPlBLj6r6XCjZDVzJFN5TQjAeISEP9M9jVxWTspDzzEIS1mPoTf7n5AEell3Z51HMaTio9bZKZ8R6pusw4s6jwkLU4hoGyXhIIA2tMbCP0FywW0fxX4%2FYEQJNh8013HcsSdtt%2F1seGqVInm1t%2BWqj7ZpZFa8UJ80EzfsQLFJ8OHPEQYwtllBo9b3s9pUSHpek9CKEjgaqw3UI1SurrYFb4JaEvIsjTcZi%2BVCwpVDLQN4VmBlPASisnqqlYo3JoeklTVdJFlR7mfB9jQNYwnYFAQ4%2FsAX5l8tgMIT4lL8GOqUBetnjbvM5SGfGgj9%2BtODVw863rv%2B0vi%2F8uUS%2BQ8L655jyNHm%2BErG%2BX11WE7VPE6%2Fmqc6XB9sW%2BtXge5taX9%2Ft8v8xYvgLhb87Od83I9xnQb%2FywddsaYukRu85Y%2FhghVT8B7jfvy%2Ff%2FvyBTv8wtjOG3gABi%2B69Km4V%2BkcYekOsb%2BAljyTyUeK5yaKGvOFskE7JS0ewmk4Beay7n2hMt5tXF1PIbUEV&X-Amz-Signature=80b940e1cd710bc68423a11fbaabcfda029850431a4e7c9b59e5c900792bc2f3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZRRYQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyHjL924PSp2TlHvs964nmWrlxYxA2o5NPCAq3fddnugIgW%2Fd4GZmiVt%2FS2eRn2Y2Y7pAKPr1E7byfngalrcVn8UAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJa8DIsSu4LTgQdjhircAxA62JWxLlIQxJA27RE1r4GihZ4TRLv6n54kOPKgU%2F%2FwFVgMrnPXI%2Fg6moDU4Vz5qAANDLvbCfeKDhTABAnioISQ6O5ta32dWmjtFwyNNwc2cqjap45YfxAvHJHEPocVRWxJX8xBcyeIvOr81ZLK9a%2FUiCOTvlljCfm%2B%2B0CCS2cdJCdcZm%2FRzsV2mJYVEdErV8xqQ%2FVSh8tZAbwq9AxdSnI9xnUy77iPxZtQq7XtuxF8%2ByZZLAdy7ajVgxqVQOMA1wOToFu6vAKaQbYllz7ql%2BFlpa2fmN1yStXwrXBDDTiS6112mLMsq13Vhylgbtl7vf%2FozuepwYnTIMwo4p6DXSllcjdwPlBLj6r6XCjZDVzJFN5TQjAeISEP9M9jVxWTspDzzEIS1mPoTf7n5AEell3Z51HMaTio9bZKZ8R6pusw4s6jwkLU4hoGyXhIIA2tMbCP0FywW0fxX4%2FYEQJNh8013HcsSdtt%2F1seGqVInm1t%2BWqj7ZpZFa8UJ80EzfsQLFJ8OHPEQYwtllBo9b3s9pUSHpek9CKEjgaqw3UI1SurrYFb4JaEvIsjTcZi%2BVCwpVDLQN4VmBlPASisnqqlYo3JoeklTVdJFlR7mfB9jQNYwnYFAQ4%2FsAX5l8tgMIT4lL8GOqUBetnjbvM5SGfGgj9%2BtODVw863rv%2B0vi%2F8uUS%2BQ8L655jyNHm%2BErG%2BX11WE7VPE6%2Fmqc6XB9sW%2BtXge5taX9%2Ft8v8xYvgLhb87Od83I9xnQb%2FywddsaYukRu85Y%2FhghVT8B7jfvy%2Ff%2FvyBTv8wtjOG3gABi%2B69Km4V%2BkcYekOsb%2BAljyTyUeK5yaKGvOFskE7JS0ewmk4Beay7n2hMt5tXF1PIbUEV&X-Amz-Signature=54a6eacdbb1250a285bff198a438a4173b4d6fd53992404c281ed61a4b5bb17b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

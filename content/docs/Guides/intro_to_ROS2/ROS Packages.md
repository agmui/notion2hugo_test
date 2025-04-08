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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6YO4KMU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ4h8wuQx%2FPYPKpfcKgG9qpfU8vVHV4uN7jls55gZRiwIhALAeYzHOnHKeT3iZXXaiIcceZiausSVpmNIy%2FDmW7JZ1Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyHm0GNBSv9s0B7Mn0q3AOZLYaBAWCpWZCK%2FUnp4PHPg9HfmsOSRym0iOVdKTP3YfaUxBXoPz3ueA8E7u5%2BzWwodKoKLalXseNKkcqAzxIx6YhcfBEr9pHE1JGL4voItCDBabLfQBCNvRqosTWDpoeOPpIVS8Gi77lklnWrMtBsyT1y8kmVEgGjj2NXJaqmMdAMERODr9P66ZcnLFZ%2FUUOKwMx0pVCViSxMFyriqlVxON4pEbU8i5J5mpHmRIh4D7ckhn851Anhzeps7PP49oOdoYxmGQ6hvRdhUdET%2FuifIX70daCYc%2FqzKXUwbNENduU8F1m7kMhwnElw3v0NPxkUZifBD4fq9mtzTw5McYBCGgEvKTJlaTj5ip%2Bl9RW1zZLi90bjmWK%2FnFsAyhpga%2FlntxzOJ0Ao0jiVLWFs5A1o80%2FOuZ7af1no025g46aYX%2Bd%2B7kTeB2oAvU4WlMNlkD2i2MtBhR970Hbet7hbUmiq0iayh6hJMPuD4sabhxRVd37ngXXnN02xqImICYvj5TLt2Qow4VZc7PHG7exdcZ%2F38i8kzbXPoC39X0ct5D6P5Ua3b0X5jErfjp0D2zu5kX1swjkaiBe8hBHu8LefTN8eILPLl%2FKe3AofHTH4D%2F9q5AxCpSAK99ire82JsTDphdO%2FBjqkAeyuOOZHKd%2FRJrUcatxYg8vH8CxfvsnGaonka%2BsxEQGwKErw2Qm8o3TtpKVvJc6IPytxVzikahDKXzQ2BYidnpDCDpCwX5I3kWf34PpJ4eyOBc150V8XUAtTfzMKRD6B4R8DHNqedbZJfFt9JJ4Un1yiQK8XAYqXeHJ1sWbmLysQmseAIlb3v70TBUZAOmGO1LPzFRjukB6L9Yr8hX83GAb6119h&X-Amz-Signature=215b48175a3219c02caa043e2148be7ff807044212fcd5745405c9dc6e22f9b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6YO4KMU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ4h8wuQx%2FPYPKpfcKgG9qpfU8vVHV4uN7jls55gZRiwIhALAeYzHOnHKeT3iZXXaiIcceZiausSVpmNIy%2FDmW7JZ1Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyHm0GNBSv9s0B7Mn0q3AOZLYaBAWCpWZCK%2FUnp4PHPg9HfmsOSRym0iOVdKTP3YfaUxBXoPz3ueA8E7u5%2BzWwodKoKLalXseNKkcqAzxIx6YhcfBEr9pHE1JGL4voItCDBabLfQBCNvRqosTWDpoeOPpIVS8Gi77lklnWrMtBsyT1y8kmVEgGjj2NXJaqmMdAMERODr9P66ZcnLFZ%2FUUOKwMx0pVCViSxMFyriqlVxON4pEbU8i5J5mpHmRIh4D7ckhn851Anhzeps7PP49oOdoYxmGQ6hvRdhUdET%2FuifIX70daCYc%2FqzKXUwbNENduU8F1m7kMhwnElw3v0NPxkUZifBD4fq9mtzTw5McYBCGgEvKTJlaTj5ip%2Bl9RW1zZLi90bjmWK%2FnFsAyhpga%2FlntxzOJ0Ao0jiVLWFs5A1o80%2FOuZ7af1no025g46aYX%2Bd%2B7kTeB2oAvU4WlMNlkD2i2MtBhR970Hbet7hbUmiq0iayh6hJMPuD4sabhxRVd37ngXXnN02xqImICYvj5TLt2Qow4VZc7PHG7exdcZ%2F38i8kzbXPoC39X0ct5D6P5Ua3b0X5jErfjp0D2zu5kX1swjkaiBe8hBHu8LefTN8eILPLl%2FKe3AofHTH4D%2F9q5AxCpSAK99ire82JsTDphdO%2FBjqkAeyuOOZHKd%2FRJrUcatxYg8vH8CxfvsnGaonka%2BsxEQGwKErw2Qm8o3TtpKVvJc6IPytxVzikahDKXzQ2BYidnpDCDpCwX5I3kWf34PpJ4eyOBc150V8XUAtTfzMKRD6B4R8DHNqedbZJfFt9JJ4Un1yiQK8XAYqXeHJ1sWbmLysQmseAIlb3v70TBUZAOmGO1LPzFRjukB6L9Yr8hX83GAb6119h&X-Amz-Signature=77e2a789e4d10c9a94fb76c2fa518195db695099ca6e7da2cb975c2aed831cda&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6YO4KMU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ4h8wuQx%2FPYPKpfcKgG9qpfU8vVHV4uN7jls55gZRiwIhALAeYzHOnHKeT3iZXXaiIcceZiausSVpmNIy%2FDmW7JZ1Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyHm0GNBSv9s0B7Mn0q3AOZLYaBAWCpWZCK%2FUnp4PHPg9HfmsOSRym0iOVdKTP3YfaUxBXoPz3ueA8E7u5%2BzWwodKoKLalXseNKkcqAzxIx6YhcfBEr9pHE1JGL4voItCDBabLfQBCNvRqosTWDpoeOPpIVS8Gi77lklnWrMtBsyT1y8kmVEgGjj2NXJaqmMdAMERODr9P66ZcnLFZ%2FUUOKwMx0pVCViSxMFyriqlVxON4pEbU8i5J5mpHmRIh4D7ckhn851Anhzeps7PP49oOdoYxmGQ6hvRdhUdET%2FuifIX70daCYc%2FqzKXUwbNENduU8F1m7kMhwnElw3v0NPxkUZifBD4fq9mtzTw5McYBCGgEvKTJlaTj5ip%2Bl9RW1zZLi90bjmWK%2FnFsAyhpga%2FlntxzOJ0Ao0jiVLWFs5A1o80%2FOuZ7af1no025g46aYX%2Bd%2B7kTeB2oAvU4WlMNlkD2i2MtBhR970Hbet7hbUmiq0iayh6hJMPuD4sabhxRVd37ngXXnN02xqImICYvj5TLt2Qow4VZc7PHG7exdcZ%2F38i8kzbXPoC39X0ct5D6P5Ua3b0X5jErfjp0D2zu5kX1swjkaiBe8hBHu8LefTN8eILPLl%2FKe3AofHTH4D%2F9q5AxCpSAK99ire82JsTDphdO%2FBjqkAeyuOOZHKd%2FRJrUcatxYg8vH8CxfvsnGaonka%2BsxEQGwKErw2Qm8o3TtpKVvJc6IPytxVzikahDKXzQ2BYidnpDCDpCwX5I3kWf34PpJ4eyOBc150V8XUAtTfzMKRD6B4R8DHNqedbZJfFt9JJ4Un1yiQK8XAYqXeHJ1sWbmLysQmseAIlb3v70TBUZAOmGO1LPzFRjukB6L9Yr8hX83GAb6119h&X-Amz-Signature=9624bd995b4ee71899990e1ccc09f76a912236d3630b78a299565d4bc95f3805&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6YO4KMU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ4h8wuQx%2FPYPKpfcKgG9qpfU8vVHV4uN7jls55gZRiwIhALAeYzHOnHKeT3iZXXaiIcceZiausSVpmNIy%2FDmW7JZ1Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyHm0GNBSv9s0B7Mn0q3AOZLYaBAWCpWZCK%2FUnp4PHPg9HfmsOSRym0iOVdKTP3YfaUxBXoPz3ueA8E7u5%2BzWwodKoKLalXseNKkcqAzxIx6YhcfBEr9pHE1JGL4voItCDBabLfQBCNvRqosTWDpoeOPpIVS8Gi77lklnWrMtBsyT1y8kmVEgGjj2NXJaqmMdAMERODr9P66ZcnLFZ%2FUUOKwMx0pVCViSxMFyriqlVxON4pEbU8i5J5mpHmRIh4D7ckhn851Anhzeps7PP49oOdoYxmGQ6hvRdhUdET%2FuifIX70daCYc%2FqzKXUwbNENduU8F1m7kMhwnElw3v0NPxkUZifBD4fq9mtzTw5McYBCGgEvKTJlaTj5ip%2Bl9RW1zZLi90bjmWK%2FnFsAyhpga%2FlntxzOJ0Ao0jiVLWFs5A1o80%2FOuZ7af1no025g46aYX%2Bd%2B7kTeB2oAvU4WlMNlkD2i2MtBhR970Hbet7hbUmiq0iayh6hJMPuD4sabhxRVd37ngXXnN02xqImICYvj5TLt2Qow4VZc7PHG7exdcZ%2F38i8kzbXPoC39X0ct5D6P5Ua3b0X5jErfjp0D2zu5kX1swjkaiBe8hBHu8LefTN8eILPLl%2FKe3AofHTH4D%2F9q5AxCpSAK99ire82JsTDphdO%2FBjqkAeyuOOZHKd%2FRJrUcatxYg8vH8CxfvsnGaonka%2BsxEQGwKErw2Qm8o3TtpKVvJc6IPytxVzikahDKXzQ2BYidnpDCDpCwX5I3kWf34PpJ4eyOBc150V8XUAtTfzMKRD6B4R8DHNqedbZJfFt9JJ4Un1yiQK8XAYqXeHJ1sWbmLysQmseAIlb3v70TBUZAOmGO1LPzFRjukB6L9Yr8hX83GAb6119h&X-Amz-Signature=00f8b8d7411dfe687f135f4ac5f7cfb9248622195e4ba9d8c35236792a2076f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6YO4KMU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ4h8wuQx%2FPYPKpfcKgG9qpfU8vVHV4uN7jls55gZRiwIhALAeYzHOnHKeT3iZXXaiIcceZiausSVpmNIy%2FDmW7JZ1Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyHm0GNBSv9s0B7Mn0q3AOZLYaBAWCpWZCK%2FUnp4PHPg9HfmsOSRym0iOVdKTP3YfaUxBXoPz3ueA8E7u5%2BzWwodKoKLalXseNKkcqAzxIx6YhcfBEr9pHE1JGL4voItCDBabLfQBCNvRqosTWDpoeOPpIVS8Gi77lklnWrMtBsyT1y8kmVEgGjj2NXJaqmMdAMERODr9P66ZcnLFZ%2FUUOKwMx0pVCViSxMFyriqlVxON4pEbU8i5J5mpHmRIh4D7ckhn851Anhzeps7PP49oOdoYxmGQ6hvRdhUdET%2FuifIX70daCYc%2FqzKXUwbNENduU8F1m7kMhwnElw3v0NPxkUZifBD4fq9mtzTw5McYBCGgEvKTJlaTj5ip%2Bl9RW1zZLi90bjmWK%2FnFsAyhpga%2FlntxzOJ0Ao0jiVLWFs5A1o80%2FOuZ7af1no025g46aYX%2Bd%2B7kTeB2oAvU4WlMNlkD2i2MtBhR970Hbet7hbUmiq0iayh6hJMPuD4sabhxRVd37ngXXnN02xqImICYvj5TLt2Qow4VZc7PHG7exdcZ%2F38i8kzbXPoC39X0ct5D6P5Ua3b0X5jErfjp0D2zu5kX1swjkaiBe8hBHu8LefTN8eILPLl%2FKe3AofHTH4D%2F9q5AxCpSAK99ire82JsTDphdO%2FBjqkAeyuOOZHKd%2FRJrUcatxYg8vH8CxfvsnGaonka%2BsxEQGwKErw2Qm8o3TtpKVvJc6IPytxVzikahDKXzQ2BYidnpDCDpCwX5I3kWf34PpJ4eyOBc150V8XUAtTfzMKRD6B4R8DHNqedbZJfFt9JJ4Un1yiQK8XAYqXeHJ1sWbmLysQmseAIlb3v70TBUZAOmGO1LPzFRjukB6L9Yr8hX83GAb6119h&X-Amz-Signature=61c0b9eb57ae152d54d9d269d8300686998c2cccaca00b366556e6be9f2309ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6YO4KMU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ4h8wuQx%2FPYPKpfcKgG9qpfU8vVHV4uN7jls55gZRiwIhALAeYzHOnHKeT3iZXXaiIcceZiausSVpmNIy%2FDmW7JZ1Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyHm0GNBSv9s0B7Mn0q3AOZLYaBAWCpWZCK%2FUnp4PHPg9HfmsOSRym0iOVdKTP3YfaUxBXoPz3ueA8E7u5%2BzWwodKoKLalXseNKkcqAzxIx6YhcfBEr9pHE1JGL4voItCDBabLfQBCNvRqosTWDpoeOPpIVS8Gi77lklnWrMtBsyT1y8kmVEgGjj2NXJaqmMdAMERODr9P66ZcnLFZ%2FUUOKwMx0pVCViSxMFyriqlVxON4pEbU8i5J5mpHmRIh4D7ckhn851Anhzeps7PP49oOdoYxmGQ6hvRdhUdET%2FuifIX70daCYc%2FqzKXUwbNENduU8F1m7kMhwnElw3v0NPxkUZifBD4fq9mtzTw5McYBCGgEvKTJlaTj5ip%2Bl9RW1zZLi90bjmWK%2FnFsAyhpga%2FlntxzOJ0Ao0jiVLWFs5A1o80%2FOuZ7af1no025g46aYX%2Bd%2B7kTeB2oAvU4WlMNlkD2i2MtBhR970Hbet7hbUmiq0iayh6hJMPuD4sabhxRVd37ngXXnN02xqImICYvj5TLt2Qow4VZc7PHG7exdcZ%2F38i8kzbXPoC39X0ct5D6P5Ua3b0X5jErfjp0D2zu5kX1swjkaiBe8hBHu8LefTN8eILPLl%2FKe3AofHTH4D%2F9q5AxCpSAK99ire82JsTDphdO%2FBjqkAeyuOOZHKd%2FRJrUcatxYg8vH8CxfvsnGaonka%2BsxEQGwKErw2Qm8o3TtpKVvJc6IPytxVzikahDKXzQ2BYidnpDCDpCwX5I3kWf34PpJ4eyOBc150V8XUAtTfzMKRD6B4R8DHNqedbZJfFt9JJ4Un1yiQK8XAYqXeHJ1sWbmLysQmseAIlb3v70TBUZAOmGO1LPzFRjukB6L9Yr8hX83GAb6119h&X-Amz-Signature=50177ff01b0941fa7790c65aaa4c16d3b92dda42b1b5dff010f3e29e5e6ad2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6YO4KMU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ4h8wuQx%2FPYPKpfcKgG9qpfU8vVHV4uN7jls55gZRiwIhALAeYzHOnHKeT3iZXXaiIcceZiausSVpmNIy%2FDmW7JZ1Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyHm0GNBSv9s0B7Mn0q3AOZLYaBAWCpWZCK%2FUnp4PHPg9HfmsOSRym0iOVdKTP3YfaUxBXoPz3ueA8E7u5%2BzWwodKoKLalXseNKkcqAzxIx6YhcfBEr9pHE1JGL4voItCDBabLfQBCNvRqosTWDpoeOPpIVS8Gi77lklnWrMtBsyT1y8kmVEgGjj2NXJaqmMdAMERODr9P66ZcnLFZ%2FUUOKwMx0pVCViSxMFyriqlVxON4pEbU8i5J5mpHmRIh4D7ckhn851Anhzeps7PP49oOdoYxmGQ6hvRdhUdET%2FuifIX70daCYc%2FqzKXUwbNENduU8F1m7kMhwnElw3v0NPxkUZifBD4fq9mtzTw5McYBCGgEvKTJlaTj5ip%2Bl9RW1zZLi90bjmWK%2FnFsAyhpga%2FlntxzOJ0Ao0jiVLWFs5A1o80%2FOuZ7af1no025g46aYX%2Bd%2B7kTeB2oAvU4WlMNlkD2i2MtBhR970Hbet7hbUmiq0iayh6hJMPuD4sabhxRVd37ngXXnN02xqImICYvj5TLt2Qow4VZc7PHG7exdcZ%2F38i8kzbXPoC39X0ct5D6P5Ua3b0X5jErfjp0D2zu5kX1swjkaiBe8hBHu8LefTN8eILPLl%2FKe3AofHTH4D%2F9q5AxCpSAK99ire82JsTDphdO%2FBjqkAeyuOOZHKd%2FRJrUcatxYg8vH8CxfvsnGaonka%2BsxEQGwKErw2Qm8o3TtpKVvJc6IPytxVzikahDKXzQ2BYidnpDCDpCwX5I3kWf34PpJ4eyOBc150V8XUAtTfzMKRD6B4R8DHNqedbZJfFt9JJ4Un1yiQK8XAYqXeHJ1sWbmLysQmseAIlb3v70TBUZAOmGO1LPzFRjukB6L9Yr8hX83GAb6119h&X-Amz-Signature=e59b5e0fa8f561e0b328557911def5d79a9ea4692758757861dc55a70fcf5038&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

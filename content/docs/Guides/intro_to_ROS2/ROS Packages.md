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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOVLMEW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDIFKNyx%2FWsidiRHA40X%2B%2Br5Bxik1BR14TqjCHUZhB32wIgS4bv58FELq2stnrZ9PPIpMXHcaxYPgcrnGttNrX7AXcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDF1lZgIm4GwnHawUSircA4sgEdHPI8OCxvliGr%2Ff3iqquuPrTpe63ml74TBREbdt489bhhUvfl57rZtuy3Coa%2Fl%2BJ3oG%2FzQHVySazAKA6SmMCCSe%2FIPCCaFv%2Fjyv0uSUZju%2FD9jv7UUmiNdbF%2B%2FT718%2Bph3exfIrLSjAAD7qrRMN8J34g5VWac%2FFS3G5XINQ5CHMdxGWXdaxCKp4lajQFo5hkeWBs30zs6dfpk86CmMfsFr87M%2B5cZ%2FWP7Puev8Az136VDzU6%2B9ANUj3YrxXSvs6zfWxBNRGJD1bHpJ2YzReQFQ0d8PNEt3RiAAl8xkRMe7yCumkh0hAl6L%2FL8F6PiBTST4HnsnIxKHgZLkSvKVID1oSfHM4nRBxyA%2FC6Olf5eGmlJcjdwsMF4BgfcxB7JUY7Z0ZcAFUxi5PH8sZYFdLJ98ZLx4X0T5WBhcZyZ8uXfZB4FIjz5a%2FYHqeIWc2hrbXSvNanDH52%2Bkxd5z20x53avQ94zgCKRr3%2BO1%2BfbxBzdmavHWJj89XqI1yThuA864VWRqdfp%2FhGjUZE9g3SUnrGB2pBL1wOGlc57VEW5y%2F5V45XKdsRpH1PLM%2Bf4mhRkTWqxTk2T7REG%2Fgceg2VG0u9GhO9n5N4yHkKAzHF2GjNYcFl0RvH5q20OYWMMGNnsMGOqUBPQpJNa89DqVNPC%2BEcyzXqmVncDFy%2B8go7p8z0AAhYrMmNmysHRZFOYtAjntWT1BoM7tYXllvH7xuwpZ6eiZH6bulCsTjsJc6htYf6xt8KV%2BjVZEIn1%2FOTviMsHV3xePLTj6FeheLdn1mCpe3yfjcfPHc6Fz%2BSr9Pb2aVpBp8OkL8iz3Hk65kLZwhjo098PzPGxtLctBd0079L9ss7sLveWXf%2FRjJ&X-Amz-Signature=a5a87b90b7ea47b6ce28e82ef465d769ced6d4c214ceae2cd186eb27ef693381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOVLMEW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDIFKNyx%2FWsidiRHA40X%2B%2Br5Bxik1BR14TqjCHUZhB32wIgS4bv58FELq2stnrZ9PPIpMXHcaxYPgcrnGttNrX7AXcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDF1lZgIm4GwnHawUSircA4sgEdHPI8OCxvliGr%2Ff3iqquuPrTpe63ml74TBREbdt489bhhUvfl57rZtuy3Coa%2Fl%2BJ3oG%2FzQHVySazAKA6SmMCCSe%2FIPCCaFv%2Fjyv0uSUZju%2FD9jv7UUmiNdbF%2B%2FT718%2Bph3exfIrLSjAAD7qrRMN8J34g5VWac%2FFS3G5XINQ5CHMdxGWXdaxCKp4lajQFo5hkeWBs30zs6dfpk86CmMfsFr87M%2B5cZ%2FWP7Puev8Az136VDzU6%2B9ANUj3YrxXSvs6zfWxBNRGJD1bHpJ2YzReQFQ0d8PNEt3RiAAl8xkRMe7yCumkh0hAl6L%2FL8F6PiBTST4HnsnIxKHgZLkSvKVID1oSfHM4nRBxyA%2FC6Olf5eGmlJcjdwsMF4BgfcxB7JUY7Z0ZcAFUxi5PH8sZYFdLJ98ZLx4X0T5WBhcZyZ8uXfZB4FIjz5a%2FYHqeIWc2hrbXSvNanDH52%2Bkxd5z20x53avQ94zgCKRr3%2BO1%2BfbxBzdmavHWJj89XqI1yThuA864VWRqdfp%2FhGjUZE9g3SUnrGB2pBL1wOGlc57VEW5y%2F5V45XKdsRpH1PLM%2Bf4mhRkTWqxTk2T7REG%2Fgceg2VG0u9GhO9n5N4yHkKAzHF2GjNYcFl0RvH5q20OYWMMGNnsMGOqUBPQpJNa89DqVNPC%2BEcyzXqmVncDFy%2B8go7p8z0AAhYrMmNmysHRZFOYtAjntWT1BoM7tYXllvH7xuwpZ6eiZH6bulCsTjsJc6htYf6xt8KV%2BjVZEIn1%2FOTviMsHV3xePLTj6FeheLdn1mCpe3yfjcfPHc6Fz%2BSr9Pb2aVpBp8OkL8iz3Hk65kLZwhjo098PzPGxtLctBd0079L9ss7sLveWXf%2FRjJ&X-Amz-Signature=15d2af2411688ae657089dfd2bdfb9cd10771b5a174fee3499ce227d0b91a41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOVLMEW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDIFKNyx%2FWsidiRHA40X%2B%2Br5Bxik1BR14TqjCHUZhB32wIgS4bv58FELq2stnrZ9PPIpMXHcaxYPgcrnGttNrX7AXcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDF1lZgIm4GwnHawUSircA4sgEdHPI8OCxvliGr%2Ff3iqquuPrTpe63ml74TBREbdt489bhhUvfl57rZtuy3Coa%2Fl%2BJ3oG%2FzQHVySazAKA6SmMCCSe%2FIPCCaFv%2Fjyv0uSUZju%2FD9jv7UUmiNdbF%2B%2FT718%2Bph3exfIrLSjAAD7qrRMN8J34g5VWac%2FFS3G5XINQ5CHMdxGWXdaxCKp4lajQFo5hkeWBs30zs6dfpk86CmMfsFr87M%2B5cZ%2FWP7Puev8Az136VDzU6%2B9ANUj3YrxXSvs6zfWxBNRGJD1bHpJ2YzReQFQ0d8PNEt3RiAAl8xkRMe7yCumkh0hAl6L%2FL8F6PiBTST4HnsnIxKHgZLkSvKVID1oSfHM4nRBxyA%2FC6Olf5eGmlJcjdwsMF4BgfcxB7JUY7Z0ZcAFUxi5PH8sZYFdLJ98ZLx4X0T5WBhcZyZ8uXfZB4FIjz5a%2FYHqeIWc2hrbXSvNanDH52%2Bkxd5z20x53avQ94zgCKRr3%2BO1%2BfbxBzdmavHWJj89XqI1yThuA864VWRqdfp%2FhGjUZE9g3SUnrGB2pBL1wOGlc57VEW5y%2F5V45XKdsRpH1PLM%2Bf4mhRkTWqxTk2T7REG%2Fgceg2VG0u9GhO9n5N4yHkKAzHF2GjNYcFl0RvH5q20OYWMMGNnsMGOqUBPQpJNa89DqVNPC%2BEcyzXqmVncDFy%2B8go7p8z0AAhYrMmNmysHRZFOYtAjntWT1BoM7tYXllvH7xuwpZ6eiZH6bulCsTjsJc6htYf6xt8KV%2BjVZEIn1%2FOTviMsHV3xePLTj6FeheLdn1mCpe3yfjcfPHc6Fz%2BSr9Pb2aVpBp8OkL8iz3Hk65kLZwhjo098PzPGxtLctBd0079L9ss7sLveWXf%2FRjJ&X-Amz-Signature=ed60cd55ce58ef772bd48766a9ca0513b6dd9d402e56f5d88fefde6da52da66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOVLMEW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDIFKNyx%2FWsidiRHA40X%2B%2Br5Bxik1BR14TqjCHUZhB32wIgS4bv58FELq2stnrZ9PPIpMXHcaxYPgcrnGttNrX7AXcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDF1lZgIm4GwnHawUSircA4sgEdHPI8OCxvliGr%2Ff3iqquuPrTpe63ml74TBREbdt489bhhUvfl57rZtuy3Coa%2Fl%2BJ3oG%2FzQHVySazAKA6SmMCCSe%2FIPCCaFv%2Fjyv0uSUZju%2FD9jv7UUmiNdbF%2B%2FT718%2Bph3exfIrLSjAAD7qrRMN8J34g5VWac%2FFS3G5XINQ5CHMdxGWXdaxCKp4lajQFo5hkeWBs30zs6dfpk86CmMfsFr87M%2B5cZ%2FWP7Puev8Az136VDzU6%2B9ANUj3YrxXSvs6zfWxBNRGJD1bHpJ2YzReQFQ0d8PNEt3RiAAl8xkRMe7yCumkh0hAl6L%2FL8F6PiBTST4HnsnIxKHgZLkSvKVID1oSfHM4nRBxyA%2FC6Olf5eGmlJcjdwsMF4BgfcxB7JUY7Z0ZcAFUxi5PH8sZYFdLJ98ZLx4X0T5WBhcZyZ8uXfZB4FIjz5a%2FYHqeIWc2hrbXSvNanDH52%2Bkxd5z20x53avQ94zgCKRr3%2BO1%2BfbxBzdmavHWJj89XqI1yThuA864VWRqdfp%2FhGjUZE9g3SUnrGB2pBL1wOGlc57VEW5y%2F5V45XKdsRpH1PLM%2Bf4mhRkTWqxTk2T7REG%2Fgceg2VG0u9GhO9n5N4yHkKAzHF2GjNYcFl0RvH5q20OYWMMGNnsMGOqUBPQpJNa89DqVNPC%2BEcyzXqmVncDFy%2B8go7p8z0AAhYrMmNmysHRZFOYtAjntWT1BoM7tYXllvH7xuwpZ6eiZH6bulCsTjsJc6htYf6xt8KV%2BjVZEIn1%2FOTviMsHV3xePLTj6FeheLdn1mCpe3yfjcfPHc6Fz%2BSr9Pb2aVpBp8OkL8iz3Hk65kLZwhjo098PzPGxtLctBd0079L9ss7sLveWXf%2FRjJ&X-Amz-Signature=66f2902f9a6caa98fab3c3047f329a7ac2dce2c12f64eda54f3fc1b5fdb4f9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOVLMEW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDIFKNyx%2FWsidiRHA40X%2B%2Br5Bxik1BR14TqjCHUZhB32wIgS4bv58FELq2stnrZ9PPIpMXHcaxYPgcrnGttNrX7AXcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDF1lZgIm4GwnHawUSircA4sgEdHPI8OCxvliGr%2Ff3iqquuPrTpe63ml74TBREbdt489bhhUvfl57rZtuy3Coa%2Fl%2BJ3oG%2FzQHVySazAKA6SmMCCSe%2FIPCCaFv%2Fjyv0uSUZju%2FD9jv7UUmiNdbF%2B%2FT718%2Bph3exfIrLSjAAD7qrRMN8J34g5VWac%2FFS3G5XINQ5CHMdxGWXdaxCKp4lajQFo5hkeWBs30zs6dfpk86CmMfsFr87M%2B5cZ%2FWP7Puev8Az136VDzU6%2B9ANUj3YrxXSvs6zfWxBNRGJD1bHpJ2YzReQFQ0d8PNEt3RiAAl8xkRMe7yCumkh0hAl6L%2FL8F6PiBTST4HnsnIxKHgZLkSvKVID1oSfHM4nRBxyA%2FC6Olf5eGmlJcjdwsMF4BgfcxB7JUY7Z0ZcAFUxi5PH8sZYFdLJ98ZLx4X0T5WBhcZyZ8uXfZB4FIjz5a%2FYHqeIWc2hrbXSvNanDH52%2Bkxd5z20x53avQ94zgCKRr3%2BO1%2BfbxBzdmavHWJj89XqI1yThuA864VWRqdfp%2FhGjUZE9g3SUnrGB2pBL1wOGlc57VEW5y%2F5V45XKdsRpH1PLM%2Bf4mhRkTWqxTk2T7REG%2Fgceg2VG0u9GhO9n5N4yHkKAzHF2GjNYcFl0RvH5q20OYWMMGNnsMGOqUBPQpJNa89DqVNPC%2BEcyzXqmVncDFy%2B8go7p8z0AAhYrMmNmysHRZFOYtAjntWT1BoM7tYXllvH7xuwpZ6eiZH6bulCsTjsJc6htYf6xt8KV%2BjVZEIn1%2FOTviMsHV3xePLTj6FeheLdn1mCpe3yfjcfPHc6Fz%2BSr9Pb2aVpBp8OkL8iz3Hk65kLZwhjo098PzPGxtLctBd0079L9ss7sLveWXf%2FRjJ&X-Amz-Signature=7fb278993462eaf163e071985aea328dd457b8804aded08b01362d6218b3f278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOVLMEW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDIFKNyx%2FWsidiRHA40X%2B%2Br5Bxik1BR14TqjCHUZhB32wIgS4bv58FELq2stnrZ9PPIpMXHcaxYPgcrnGttNrX7AXcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDF1lZgIm4GwnHawUSircA4sgEdHPI8OCxvliGr%2Ff3iqquuPrTpe63ml74TBREbdt489bhhUvfl57rZtuy3Coa%2Fl%2BJ3oG%2FzQHVySazAKA6SmMCCSe%2FIPCCaFv%2Fjyv0uSUZju%2FD9jv7UUmiNdbF%2B%2FT718%2Bph3exfIrLSjAAD7qrRMN8J34g5VWac%2FFS3G5XINQ5CHMdxGWXdaxCKp4lajQFo5hkeWBs30zs6dfpk86CmMfsFr87M%2B5cZ%2FWP7Puev8Az136VDzU6%2B9ANUj3YrxXSvs6zfWxBNRGJD1bHpJ2YzReQFQ0d8PNEt3RiAAl8xkRMe7yCumkh0hAl6L%2FL8F6PiBTST4HnsnIxKHgZLkSvKVID1oSfHM4nRBxyA%2FC6Olf5eGmlJcjdwsMF4BgfcxB7JUY7Z0ZcAFUxi5PH8sZYFdLJ98ZLx4X0T5WBhcZyZ8uXfZB4FIjz5a%2FYHqeIWc2hrbXSvNanDH52%2Bkxd5z20x53avQ94zgCKRr3%2BO1%2BfbxBzdmavHWJj89XqI1yThuA864VWRqdfp%2FhGjUZE9g3SUnrGB2pBL1wOGlc57VEW5y%2F5V45XKdsRpH1PLM%2Bf4mhRkTWqxTk2T7REG%2Fgceg2VG0u9GhO9n5N4yHkKAzHF2GjNYcFl0RvH5q20OYWMMGNnsMGOqUBPQpJNa89DqVNPC%2BEcyzXqmVncDFy%2B8go7p8z0AAhYrMmNmysHRZFOYtAjntWT1BoM7tYXllvH7xuwpZ6eiZH6bulCsTjsJc6htYf6xt8KV%2BjVZEIn1%2FOTviMsHV3xePLTj6FeheLdn1mCpe3yfjcfPHc6Fz%2BSr9Pb2aVpBp8OkL8iz3Hk65kLZwhjo098PzPGxtLctBd0079L9ss7sLveWXf%2FRjJ&X-Amz-Signature=52abd2fdac622be1b62a7e540a7178d6cd5edb8895f57cb95185ea43d46e4206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOVLMEW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDIFKNyx%2FWsidiRHA40X%2B%2Br5Bxik1BR14TqjCHUZhB32wIgS4bv58FELq2stnrZ9PPIpMXHcaxYPgcrnGttNrX7AXcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDF1lZgIm4GwnHawUSircA4sgEdHPI8OCxvliGr%2Ff3iqquuPrTpe63ml74TBREbdt489bhhUvfl57rZtuy3Coa%2Fl%2BJ3oG%2FzQHVySazAKA6SmMCCSe%2FIPCCaFv%2Fjyv0uSUZju%2FD9jv7UUmiNdbF%2B%2FT718%2Bph3exfIrLSjAAD7qrRMN8J34g5VWac%2FFS3G5XINQ5CHMdxGWXdaxCKp4lajQFo5hkeWBs30zs6dfpk86CmMfsFr87M%2B5cZ%2FWP7Puev8Az136VDzU6%2B9ANUj3YrxXSvs6zfWxBNRGJD1bHpJ2YzReQFQ0d8PNEt3RiAAl8xkRMe7yCumkh0hAl6L%2FL8F6PiBTST4HnsnIxKHgZLkSvKVID1oSfHM4nRBxyA%2FC6Olf5eGmlJcjdwsMF4BgfcxB7JUY7Z0ZcAFUxi5PH8sZYFdLJ98ZLx4X0T5WBhcZyZ8uXfZB4FIjz5a%2FYHqeIWc2hrbXSvNanDH52%2Bkxd5z20x53avQ94zgCKRr3%2BO1%2BfbxBzdmavHWJj89XqI1yThuA864VWRqdfp%2FhGjUZE9g3SUnrGB2pBL1wOGlc57VEW5y%2F5V45XKdsRpH1PLM%2Bf4mhRkTWqxTk2T7REG%2Fgceg2VG0u9GhO9n5N4yHkKAzHF2GjNYcFl0RvH5q20OYWMMGNnsMGOqUBPQpJNa89DqVNPC%2BEcyzXqmVncDFy%2B8go7p8z0AAhYrMmNmysHRZFOYtAjntWT1BoM7tYXllvH7xuwpZ6eiZH6bulCsTjsJc6htYf6xt8KV%2BjVZEIn1%2FOTviMsHV3xePLTj6FeheLdn1mCpe3yfjcfPHc6Fz%2BSr9Pb2aVpBp8OkL8iz3Hk65kLZwhjo098PzPGxtLctBd0079L9ss7sLveWXf%2FRjJ&X-Amz-Signature=61a0f691c22b3b1e5863ee9d9f38a61df43fd533b4705b025dc391e7e1b6c538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

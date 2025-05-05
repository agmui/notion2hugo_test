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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P32OZ5F%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCClgfMkrqKav8UDs2xqJ%2F5iwtBgsB6aCYjEgM3yHMd%2FgIgHwabmnRnzzWpyA1TKKcbU%2BtTThv7pDGIKMzGiqehSqUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJzXhHMbWOFOYKdOCyrcA41VGnTnzrHg9VSfjlvfGaYIW3K0Z27gBSBlk%2FW11nIpxCb9ofbDxRHY8MHwFBCRp%2FXA%2BNAXViAip5KqpaU%2BPP%2Fa%2FyCATvMi7NFsMg4Et1BgibsWczi4mUqDCpyKquvosFE4z0ZJeAG4%2BOnHv3QHrSKeJ0CZ9%2F0%2BiYXdUJzTAbOSqS55qMyq6%2FNJuoMpvTlQh6H4Eb6sEBa1h%2FL9gLVeQX1nePCc0611w9TWXD9G6CxdhNs4QplpO55oECgebQNm9M3Rp7BOs%2FZPnYA7aOvDdz1p0q2DJtqjtHid59WZpiaTl2NhNaiNZ2FBfnqcXg29J%2Bu%2BYRc9Hf9U7jH8lySAvqU2Jdfu2h1ApRAr5eIcgImrDqtjlPoJQCoQiUtlB1BEqJe%2BGZhAlgkghYjI8xt2yzoZlRtDwW0EH5XUTcCM5O6HNpy2XLBolzw%2BL%2BOy7zrLMgFE4X2Narqv4QaLV5T599vVz8ljjAW9kbt3swTZpjGPK6xI%2FC%2Fq0XOYKUdbSEBdFOi6bUkOPbT%2BEqMWLdcqHVstqtHQadn4vAZEQgKl%2BdTUT7LO6%2FiHDkquM%2FhvqkUavknysEzAgonjU%2FFByy6lxdSgb8IHm4zMS5eXqHZZsw9TW3AhQHNPEIto4ShEMKD%2F4sAGOqUBhB2gx9Nm4EotyIsqBPyHjglrP%2BqPb6IQ%2BTA5%2FrYLtFvwKydFjTpklif62GDA9kHsZCLRG5n9VsPoFUfgkWISfEPmzSbNy7vIkGgZz834cHiSPHBW3VoQCUctzzbRQx4IQVMpnbHF7lWTHUKhnyTNksctHK1wBnZf1HYdcHzKmWEMQ0fj5y2jmM5DKjIKfOq9jfxPsycZzDgrV7wlxxqvilxFad85&X-Amz-Signature=e8b2b6e7250e936b1517eaec88fb7de8b31a3a1f6c28e191f6bf5594757dd853&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P32OZ5F%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCClgfMkrqKav8UDs2xqJ%2F5iwtBgsB6aCYjEgM3yHMd%2FgIgHwabmnRnzzWpyA1TKKcbU%2BtTThv7pDGIKMzGiqehSqUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJzXhHMbWOFOYKdOCyrcA41VGnTnzrHg9VSfjlvfGaYIW3K0Z27gBSBlk%2FW11nIpxCb9ofbDxRHY8MHwFBCRp%2FXA%2BNAXViAip5KqpaU%2BPP%2Fa%2FyCATvMi7NFsMg4Et1BgibsWczi4mUqDCpyKquvosFE4z0ZJeAG4%2BOnHv3QHrSKeJ0CZ9%2F0%2BiYXdUJzTAbOSqS55qMyq6%2FNJuoMpvTlQh6H4Eb6sEBa1h%2FL9gLVeQX1nePCc0611w9TWXD9G6CxdhNs4QplpO55oECgebQNm9M3Rp7BOs%2FZPnYA7aOvDdz1p0q2DJtqjtHid59WZpiaTl2NhNaiNZ2FBfnqcXg29J%2Bu%2BYRc9Hf9U7jH8lySAvqU2Jdfu2h1ApRAr5eIcgImrDqtjlPoJQCoQiUtlB1BEqJe%2BGZhAlgkghYjI8xt2yzoZlRtDwW0EH5XUTcCM5O6HNpy2XLBolzw%2BL%2BOy7zrLMgFE4X2Narqv4QaLV5T599vVz8ljjAW9kbt3swTZpjGPK6xI%2FC%2Fq0XOYKUdbSEBdFOi6bUkOPbT%2BEqMWLdcqHVstqtHQadn4vAZEQgKl%2BdTUT7LO6%2FiHDkquM%2FhvqkUavknysEzAgonjU%2FFByy6lxdSgb8IHm4zMS5eXqHZZsw9TW3AhQHNPEIto4ShEMKD%2F4sAGOqUBhB2gx9Nm4EotyIsqBPyHjglrP%2BqPb6IQ%2BTA5%2FrYLtFvwKydFjTpklif62GDA9kHsZCLRG5n9VsPoFUfgkWISfEPmzSbNy7vIkGgZz834cHiSPHBW3VoQCUctzzbRQx4IQVMpnbHF7lWTHUKhnyTNksctHK1wBnZf1HYdcHzKmWEMQ0fj5y2jmM5DKjIKfOq9jfxPsycZzDgrV7wlxxqvilxFad85&X-Amz-Signature=168e464442e4331b4fd7430076b02c9fa749c33af04634bfb393f7b9090db0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P32OZ5F%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCClgfMkrqKav8UDs2xqJ%2F5iwtBgsB6aCYjEgM3yHMd%2FgIgHwabmnRnzzWpyA1TKKcbU%2BtTThv7pDGIKMzGiqehSqUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJzXhHMbWOFOYKdOCyrcA41VGnTnzrHg9VSfjlvfGaYIW3K0Z27gBSBlk%2FW11nIpxCb9ofbDxRHY8MHwFBCRp%2FXA%2BNAXViAip5KqpaU%2BPP%2Fa%2FyCATvMi7NFsMg4Et1BgibsWczi4mUqDCpyKquvosFE4z0ZJeAG4%2BOnHv3QHrSKeJ0CZ9%2F0%2BiYXdUJzTAbOSqS55qMyq6%2FNJuoMpvTlQh6H4Eb6sEBa1h%2FL9gLVeQX1nePCc0611w9TWXD9G6CxdhNs4QplpO55oECgebQNm9M3Rp7BOs%2FZPnYA7aOvDdz1p0q2DJtqjtHid59WZpiaTl2NhNaiNZ2FBfnqcXg29J%2Bu%2BYRc9Hf9U7jH8lySAvqU2Jdfu2h1ApRAr5eIcgImrDqtjlPoJQCoQiUtlB1BEqJe%2BGZhAlgkghYjI8xt2yzoZlRtDwW0EH5XUTcCM5O6HNpy2XLBolzw%2BL%2BOy7zrLMgFE4X2Narqv4QaLV5T599vVz8ljjAW9kbt3swTZpjGPK6xI%2FC%2Fq0XOYKUdbSEBdFOi6bUkOPbT%2BEqMWLdcqHVstqtHQadn4vAZEQgKl%2BdTUT7LO6%2FiHDkquM%2FhvqkUavknysEzAgonjU%2FFByy6lxdSgb8IHm4zMS5eXqHZZsw9TW3AhQHNPEIto4ShEMKD%2F4sAGOqUBhB2gx9Nm4EotyIsqBPyHjglrP%2BqPb6IQ%2BTA5%2FrYLtFvwKydFjTpklif62GDA9kHsZCLRG5n9VsPoFUfgkWISfEPmzSbNy7vIkGgZz834cHiSPHBW3VoQCUctzzbRQx4IQVMpnbHF7lWTHUKhnyTNksctHK1wBnZf1HYdcHzKmWEMQ0fj5y2jmM5DKjIKfOq9jfxPsycZzDgrV7wlxxqvilxFad85&X-Amz-Signature=0ef258c0fe454841d60babe9d86bbb2f57a5b1970a892159be5a96d139c59577&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P32OZ5F%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCClgfMkrqKav8UDs2xqJ%2F5iwtBgsB6aCYjEgM3yHMd%2FgIgHwabmnRnzzWpyA1TKKcbU%2BtTThv7pDGIKMzGiqehSqUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJzXhHMbWOFOYKdOCyrcA41VGnTnzrHg9VSfjlvfGaYIW3K0Z27gBSBlk%2FW11nIpxCb9ofbDxRHY8MHwFBCRp%2FXA%2BNAXViAip5KqpaU%2BPP%2Fa%2FyCATvMi7NFsMg4Et1BgibsWczi4mUqDCpyKquvosFE4z0ZJeAG4%2BOnHv3QHrSKeJ0CZ9%2F0%2BiYXdUJzTAbOSqS55qMyq6%2FNJuoMpvTlQh6H4Eb6sEBa1h%2FL9gLVeQX1nePCc0611w9TWXD9G6CxdhNs4QplpO55oECgebQNm9M3Rp7BOs%2FZPnYA7aOvDdz1p0q2DJtqjtHid59WZpiaTl2NhNaiNZ2FBfnqcXg29J%2Bu%2BYRc9Hf9U7jH8lySAvqU2Jdfu2h1ApRAr5eIcgImrDqtjlPoJQCoQiUtlB1BEqJe%2BGZhAlgkghYjI8xt2yzoZlRtDwW0EH5XUTcCM5O6HNpy2XLBolzw%2BL%2BOy7zrLMgFE4X2Narqv4QaLV5T599vVz8ljjAW9kbt3swTZpjGPK6xI%2FC%2Fq0XOYKUdbSEBdFOi6bUkOPbT%2BEqMWLdcqHVstqtHQadn4vAZEQgKl%2BdTUT7LO6%2FiHDkquM%2FhvqkUavknysEzAgonjU%2FFByy6lxdSgb8IHm4zMS5eXqHZZsw9TW3AhQHNPEIto4ShEMKD%2F4sAGOqUBhB2gx9Nm4EotyIsqBPyHjglrP%2BqPb6IQ%2BTA5%2FrYLtFvwKydFjTpklif62GDA9kHsZCLRG5n9VsPoFUfgkWISfEPmzSbNy7vIkGgZz834cHiSPHBW3VoQCUctzzbRQx4IQVMpnbHF7lWTHUKhnyTNksctHK1wBnZf1HYdcHzKmWEMQ0fj5y2jmM5DKjIKfOq9jfxPsycZzDgrV7wlxxqvilxFad85&X-Amz-Signature=d76c4cdcf47dd5a448e43db93d9708e901dd2738f4ac6ed53bcdd136b2bcb76f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P32OZ5F%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCClgfMkrqKav8UDs2xqJ%2F5iwtBgsB6aCYjEgM3yHMd%2FgIgHwabmnRnzzWpyA1TKKcbU%2BtTThv7pDGIKMzGiqehSqUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJzXhHMbWOFOYKdOCyrcA41VGnTnzrHg9VSfjlvfGaYIW3K0Z27gBSBlk%2FW11nIpxCb9ofbDxRHY8MHwFBCRp%2FXA%2BNAXViAip5KqpaU%2BPP%2Fa%2FyCATvMi7NFsMg4Et1BgibsWczi4mUqDCpyKquvosFE4z0ZJeAG4%2BOnHv3QHrSKeJ0CZ9%2F0%2BiYXdUJzTAbOSqS55qMyq6%2FNJuoMpvTlQh6H4Eb6sEBa1h%2FL9gLVeQX1nePCc0611w9TWXD9G6CxdhNs4QplpO55oECgebQNm9M3Rp7BOs%2FZPnYA7aOvDdz1p0q2DJtqjtHid59WZpiaTl2NhNaiNZ2FBfnqcXg29J%2Bu%2BYRc9Hf9U7jH8lySAvqU2Jdfu2h1ApRAr5eIcgImrDqtjlPoJQCoQiUtlB1BEqJe%2BGZhAlgkghYjI8xt2yzoZlRtDwW0EH5XUTcCM5O6HNpy2XLBolzw%2BL%2BOy7zrLMgFE4X2Narqv4QaLV5T599vVz8ljjAW9kbt3swTZpjGPK6xI%2FC%2Fq0XOYKUdbSEBdFOi6bUkOPbT%2BEqMWLdcqHVstqtHQadn4vAZEQgKl%2BdTUT7LO6%2FiHDkquM%2FhvqkUavknysEzAgonjU%2FFByy6lxdSgb8IHm4zMS5eXqHZZsw9TW3AhQHNPEIto4ShEMKD%2F4sAGOqUBhB2gx9Nm4EotyIsqBPyHjglrP%2BqPb6IQ%2BTA5%2FrYLtFvwKydFjTpklif62GDA9kHsZCLRG5n9VsPoFUfgkWISfEPmzSbNy7vIkGgZz834cHiSPHBW3VoQCUctzzbRQx4IQVMpnbHF7lWTHUKhnyTNksctHK1wBnZf1HYdcHzKmWEMQ0fj5y2jmM5DKjIKfOq9jfxPsycZzDgrV7wlxxqvilxFad85&X-Amz-Signature=a6a681182c31b54350d827e7e2e87fb447c5300098e92d9d2d922de2d0331d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P32OZ5F%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCClgfMkrqKav8UDs2xqJ%2F5iwtBgsB6aCYjEgM3yHMd%2FgIgHwabmnRnzzWpyA1TKKcbU%2BtTThv7pDGIKMzGiqehSqUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJzXhHMbWOFOYKdOCyrcA41VGnTnzrHg9VSfjlvfGaYIW3K0Z27gBSBlk%2FW11nIpxCb9ofbDxRHY8MHwFBCRp%2FXA%2BNAXViAip5KqpaU%2BPP%2Fa%2FyCATvMi7NFsMg4Et1BgibsWczi4mUqDCpyKquvosFE4z0ZJeAG4%2BOnHv3QHrSKeJ0CZ9%2F0%2BiYXdUJzTAbOSqS55qMyq6%2FNJuoMpvTlQh6H4Eb6sEBa1h%2FL9gLVeQX1nePCc0611w9TWXD9G6CxdhNs4QplpO55oECgebQNm9M3Rp7BOs%2FZPnYA7aOvDdz1p0q2DJtqjtHid59WZpiaTl2NhNaiNZ2FBfnqcXg29J%2Bu%2BYRc9Hf9U7jH8lySAvqU2Jdfu2h1ApRAr5eIcgImrDqtjlPoJQCoQiUtlB1BEqJe%2BGZhAlgkghYjI8xt2yzoZlRtDwW0EH5XUTcCM5O6HNpy2XLBolzw%2BL%2BOy7zrLMgFE4X2Narqv4QaLV5T599vVz8ljjAW9kbt3swTZpjGPK6xI%2FC%2Fq0XOYKUdbSEBdFOi6bUkOPbT%2BEqMWLdcqHVstqtHQadn4vAZEQgKl%2BdTUT7LO6%2FiHDkquM%2FhvqkUavknysEzAgonjU%2FFByy6lxdSgb8IHm4zMS5eXqHZZsw9TW3AhQHNPEIto4ShEMKD%2F4sAGOqUBhB2gx9Nm4EotyIsqBPyHjglrP%2BqPb6IQ%2BTA5%2FrYLtFvwKydFjTpklif62GDA9kHsZCLRG5n9VsPoFUfgkWISfEPmzSbNy7vIkGgZz834cHiSPHBW3VoQCUctzzbRQx4IQVMpnbHF7lWTHUKhnyTNksctHK1wBnZf1HYdcHzKmWEMQ0fj5y2jmM5DKjIKfOq9jfxPsycZzDgrV7wlxxqvilxFad85&X-Amz-Signature=5e36abb79136d2e894fb2a730a26e18a95a5750377e2bfb8baf87902fed6adb6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P32OZ5F%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCClgfMkrqKav8UDs2xqJ%2F5iwtBgsB6aCYjEgM3yHMd%2FgIgHwabmnRnzzWpyA1TKKcbU%2BtTThv7pDGIKMzGiqehSqUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJzXhHMbWOFOYKdOCyrcA41VGnTnzrHg9VSfjlvfGaYIW3K0Z27gBSBlk%2FW11nIpxCb9ofbDxRHY8MHwFBCRp%2FXA%2BNAXViAip5KqpaU%2BPP%2Fa%2FyCATvMi7NFsMg4Et1BgibsWczi4mUqDCpyKquvosFE4z0ZJeAG4%2BOnHv3QHrSKeJ0CZ9%2F0%2BiYXdUJzTAbOSqS55qMyq6%2FNJuoMpvTlQh6H4Eb6sEBa1h%2FL9gLVeQX1nePCc0611w9TWXD9G6CxdhNs4QplpO55oECgebQNm9M3Rp7BOs%2FZPnYA7aOvDdz1p0q2DJtqjtHid59WZpiaTl2NhNaiNZ2FBfnqcXg29J%2Bu%2BYRc9Hf9U7jH8lySAvqU2Jdfu2h1ApRAr5eIcgImrDqtjlPoJQCoQiUtlB1BEqJe%2BGZhAlgkghYjI8xt2yzoZlRtDwW0EH5XUTcCM5O6HNpy2XLBolzw%2BL%2BOy7zrLMgFE4X2Narqv4QaLV5T599vVz8ljjAW9kbt3swTZpjGPK6xI%2FC%2Fq0XOYKUdbSEBdFOi6bUkOPbT%2BEqMWLdcqHVstqtHQadn4vAZEQgKl%2BdTUT7LO6%2FiHDkquM%2FhvqkUavknysEzAgonjU%2FFByy6lxdSgb8IHm4zMS5eXqHZZsw9TW3AhQHNPEIto4ShEMKD%2F4sAGOqUBhB2gx9Nm4EotyIsqBPyHjglrP%2BqPb6IQ%2BTA5%2FrYLtFvwKydFjTpklif62GDA9kHsZCLRG5n9VsPoFUfgkWISfEPmzSbNy7vIkGgZz834cHiSPHBW3VoQCUctzzbRQx4IQVMpnbHF7lWTHUKhnyTNksctHK1wBnZf1HYdcHzKmWEMQ0fj5y2jmM5DKjIKfOq9jfxPsycZzDgrV7wlxxqvilxFad85&X-Amz-Signature=574726dc9217a7e4e9c811b6bdbd397e1425daaea74010baf13a669abfac5f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

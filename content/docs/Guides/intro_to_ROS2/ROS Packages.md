---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6W2RVP%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBXPoWFTJJZIKYHULOYmjzs5TQ2giytDiitCp07ym7DgIhAMk%2F%2BgTwgTaTjDYLVXuSIkp30kx3ZCR5CdaYrlFy3DFmKv8DCG4QABoMNjM3NDIzMTgzODA1IgwxfxAZEInVxJTwkHwq3AMVT7b3n4OCrGcrcClQnaPX0kDoPB0qNtpKJXvzzF%2FHRr4Ayc%2BsGNeYQQad8%2BJG8vjVCikvFFfAG22dp1Bfrq%2FGYPOQNphXgCjBdaxe2dgsKj%2BIwPXzqvG41LhlBbsOk4EAzCDAXCcZVrLblGE8zKQ39dn8qqQj%2BVY3WjzsD7pFH8Bdu%2Bx9YcvOJKrQQt0zMhFwrGXsMDDxIXuI9rzkxvp%2Bz2YAVpYrpbmWAZVu2rX4F6LE0rSMa7%2Fy4ImZzyE5H%2BNj%2FRvzD1Pioi1ddoAvAJIaSFdmOQQ0hYQOPcoObxSZCQUGY%2BToNqqD8Znz8r97H9IaXszeCePDQqVjl1zRMUcwuGR9aL76Zmr7%2BsWVRhHWPguPN9jCjNlXLHDzIVYKz4AiCWaJsRvSJ82BbEjjLTqhqSEoIJgnur5ESpe68oHiporHJ0%2BxfjjXgQEDCC%2FXVSFm4%2BtrRUWHGifgnnTVRcwjSP0%2BRq%2FdcSk%2F1tPoLupYQBRr86IIQeGE5SP8M%2BoRJyl1wvb7ntyte89cS7pSw52xxyynQzVMNHHtCdXrh4wLFSJq6QtYSKTDZ047XU7C0%2Fs0lUrsJcswY9nwcoJ95L5Um1bJO1VhSoE0Jtuj7a3PjVQjjZeJAoyFKItxzTDcjKrPBjqkATDBn2dDqzC5c996mqLqx3G9plTPEM0rfv1kW2XnRtZZTh2cknswf8fomyxmdNPGDUX9pXhz1vwvHf9JiGvKnH4nOd0NA%2FSgrsC2FXTrosNVmdtDmr8YfWWEmlYXFmH8QbTiNAxPMpUEvOTl1K0f8dXfE4NENcPuxabBUeNXpf5cU16SVpNV6H5XOPdwPldwTb2nFINkF8Rds6Xnh7pSBJw7rUyY&X-Amz-Signature=de8cb088d66805eee40922b0385dbf20a3da13be45d32678476550001f021385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6W2RVP%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBXPoWFTJJZIKYHULOYmjzs5TQ2giytDiitCp07ym7DgIhAMk%2F%2BgTwgTaTjDYLVXuSIkp30kx3ZCR5CdaYrlFy3DFmKv8DCG4QABoMNjM3NDIzMTgzODA1IgwxfxAZEInVxJTwkHwq3AMVT7b3n4OCrGcrcClQnaPX0kDoPB0qNtpKJXvzzF%2FHRr4Ayc%2BsGNeYQQad8%2BJG8vjVCikvFFfAG22dp1Bfrq%2FGYPOQNphXgCjBdaxe2dgsKj%2BIwPXzqvG41LhlBbsOk4EAzCDAXCcZVrLblGE8zKQ39dn8qqQj%2BVY3WjzsD7pFH8Bdu%2Bx9YcvOJKrQQt0zMhFwrGXsMDDxIXuI9rzkxvp%2Bz2YAVpYrpbmWAZVu2rX4F6LE0rSMa7%2Fy4ImZzyE5H%2BNj%2FRvzD1Pioi1ddoAvAJIaSFdmOQQ0hYQOPcoObxSZCQUGY%2BToNqqD8Znz8r97H9IaXszeCePDQqVjl1zRMUcwuGR9aL76Zmr7%2BsWVRhHWPguPN9jCjNlXLHDzIVYKz4AiCWaJsRvSJ82BbEjjLTqhqSEoIJgnur5ESpe68oHiporHJ0%2BxfjjXgQEDCC%2FXVSFm4%2BtrRUWHGifgnnTVRcwjSP0%2BRq%2FdcSk%2F1tPoLupYQBRr86IIQeGE5SP8M%2BoRJyl1wvb7ntyte89cS7pSw52xxyynQzVMNHHtCdXrh4wLFSJq6QtYSKTDZ047XU7C0%2Fs0lUrsJcswY9nwcoJ95L5Um1bJO1VhSoE0Jtuj7a3PjVQjjZeJAoyFKItxzTDcjKrPBjqkATDBn2dDqzC5c996mqLqx3G9plTPEM0rfv1kW2XnRtZZTh2cknswf8fomyxmdNPGDUX9pXhz1vwvHf9JiGvKnH4nOd0NA%2FSgrsC2FXTrosNVmdtDmr8YfWWEmlYXFmH8QbTiNAxPMpUEvOTl1K0f8dXfE4NENcPuxabBUeNXpf5cU16SVpNV6H5XOPdwPldwTb2nFINkF8Rds6Xnh7pSBJw7rUyY&X-Amz-Signature=6914e44020b9f12d0c9509d32f838cd251ebabafc471c1f0f71af6e660762621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6W2RVP%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBXPoWFTJJZIKYHULOYmjzs5TQ2giytDiitCp07ym7DgIhAMk%2F%2BgTwgTaTjDYLVXuSIkp30kx3ZCR5CdaYrlFy3DFmKv8DCG4QABoMNjM3NDIzMTgzODA1IgwxfxAZEInVxJTwkHwq3AMVT7b3n4OCrGcrcClQnaPX0kDoPB0qNtpKJXvzzF%2FHRr4Ayc%2BsGNeYQQad8%2BJG8vjVCikvFFfAG22dp1Bfrq%2FGYPOQNphXgCjBdaxe2dgsKj%2BIwPXzqvG41LhlBbsOk4EAzCDAXCcZVrLblGE8zKQ39dn8qqQj%2BVY3WjzsD7pFH8Bdu%2Bx9YcvOJKrQQt0zMhFwrGXsMDDxIXuI9rzkxvp%2Bz2YAVpYrpbmWAZVu2rX4F6LE0rSMa7%2Fy4ImZzyE5H%2BNj%2FRvzD1Pioi1ddoAvAJIaSFdmOQQ0hYQOPcoObxSZCQUGY%2BToNqqD8Znz8r97H9IaXszeCePDQqVjl1zRMUcwuGR9aL76Zmr7%2BsWVRhHWPguPN9jCjNlXLHDzIVYKz4AiCWaJsRvSJ82BbEjjLTqhqSEoIJgnur5ESpe68oHiporHJ0%2BxfjjXgQEDCC%2FXVSFm4%2BtrRUWHGifgnnTVRcwjSP0%2BRq%2FdcSk%2F1tPoLupYQBRr86IIQeGE5SP8M%2BoRJyl1wvb7ntyte89cS7pSw52xxyynQzVMNHHtCdXrh4wLFSJq6QtYSKTDZ047XU7C0%2Fs0lUrsJcswY9nwcoJ95L5Um1bJO1VhSoE0Jtuj7a3PjVQjjZeJAoyFKItxzTDcjKrPBjqkATDBn2dDqzC5c996mqLqx3G9plTPEM0rfv1kW2XnRtZZTh2cknswf8fomyxmdNPGDUX9pXhz1vwvHf9JiGvKnH4nOd0NA%2FSgrsC2FXTrosNVmdtDmr8YfWWEmlYXFmH8QbTiNAxPMpUEvOTl1K0f8dXfE4NENcPuxabBUeNXpf5cU16SVpNV6H5XOPdwPldwTb2nFINkF8Rds6Xnh7pSBJw7rUyY&X-Amz-Signature=78e2e5b30fe8fa38f524273f4363dca8a108a87fca1cdc5b11d26460b4bd26fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6W2RVP%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBXPoWFTJJZIKYHULOYmjzs5TQ2giytDiitCp07ym7DgIhAMk%2F%2BgTwgTaTjDYLVXuSIkp30kx3ZCR5CdaYrlFy3DFmKv8DCG4QABoMNjM3NDIzMTgzODA1IgwxfxAZEInVxJTwkHwq3AMVT7b3n4OCrGcrcClQnaPX0kDoPB0qNtpKJXvzzF%2FHRr4Ayc%2BsGNeYQQad8%2BJG8vjVCikvFFfAG22dp1Bfrq%2FGYPOQNphXgCjBdaxe2dgsKj%2BIwPXzqvG41LhlBbsOk4EAzCDAXCcZVrLblGE8zKQ39dn8qqQj%2BVY3WjzsD7pFH8Bdu%2Bx9YcvOJKrQQt0zMhFwrGXsMDDxIXuI9rzkxvp%2Bz2YAVpYrpbmWAZVu2rX4F6LE0rSMa7%2Fy4ImZzyE5H%2BNj%2FRvzD1Pioi1ddoAvAJIaSFdmOQQ0hYQOPcoObxSZCQUGY%2BToNqqD8Znz8r97H9IaXszeCePDQqVjl1zRMUcwuGR9aL76Zmr7%2BsWVRhHWPguPN9jCjNlXLHDzIVYKz4AiCWaJsRvSJ82BbEjjLTqhqSEoIJgnur5ESpe68oHiporHJ0%2BxfjjXgQEDCC%2FXVSFm4%2BtrRUWHGifgnnTVRcwjSP0%2BRq%2FdcSk%2F1tPoLupYQBRr86IIQeGE5SP8M%2BoRJyl1wvb7ntyte89cS7pSw52xxyynQzVMNHHtCdXrh4wLFSJq6QtYSKTDZ047XU7C0%2Fs0lUrsJcswY9nwcoJ95L5Um1bJO1VhSoE0Jtuj7a3PjVQjjZeJAoyFKItxzTDcjKrPBjqkATDBn2dDqzC5c996mqLqx3G9plTPEM0rfv1kW2XnRtZZTh2cknswf8fomyxmdNPGDUX9pXhz1vwvHf9JiGvKnH4nOd0NA%2FSgrsC2FXTrosNVmdtDmr8YfWWEmlYXFmH8QbTiNAxPMpUEvOTl1K0f8dXfE4NENcPuxabBUeNXpf5cU16SVpNV6H5XOPdwPldwTb2nFINkF8Rds6Xnh7pSBJw7rUyY&X-Amz-Signature=a1887439d88115a03815fc47e99ff8293515a7ed1efea62c07fb2b47217e2b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6W2RVP%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBXPoWFTJJZIKYHULOYmjzs5TQ2giytDiitCp07ym7DgIhAMk%2F%2BgTwgTaTjDYLVXuSIkp30kx3ZCR5CdaYrlFy3DFmKv8DCG4QABoMNjM3NDIzMTgzODA1IgwxfxAZEInVxJTwkHwq3AMVT7b3n4OCrGcrcClQnaPX0kDoPB0qNtpKJXvzzF%2FHRr4Ayc%2BsGNeYQQad8%2BJG8vjVCikvFFfAG22dp1Bfrq%2FGYPOQNphXgCjBdaxe2dgsKj%2BIwPXzqvG41LhlBbsOk4EAzCDAXCcZVrLblGE8zKQ39dn8qqQj%2BVY3WjzsD7pFH8Bdu%2Bx9YcvOJKrQQt0zMhFwrGXsMDDxIXuI9rzkxvp%2Bz2YAVpYrpbmWAZVu2rX4F6LE0rSMa7%2Fy4ImZzyE5H%2BNj%2FRvzD1Pioi1ddoAvAJIaSFdmOQQ0hYQOPcoObxSZCQUGY%2BToNqqD8Znz8r97H9IaXszeCePDQqVjl1zRMUcwuGR9aL76Zmr7%2BsWVRhHWPguPN9jCjNlXLHDzIVYKz4AiCWaJsRvSJ82BbEjjLTqhqSEoIJgnur5ESpe68oHiporHJ0%2BxfjjXgQEDCC%2FXVSFm4%2BtrRUWHGifgnnTVRcwjSP0%2BRq%2FdcSk%2F1tPoLupYQBRr86IIQeGE5SP8M%2BoRJyl1wvb7ntyte89cS7pSw52xxyynQzVMNHHtCdXrh4wLFSJq6QtYSKTDZ047XU7C0%2Fs0lUrsJcswY9nwcoJ95L5Um1bJO1VhSoE0Jtuj7a3PjVQjjZeJAoyFKItxzTDcjKrPBjqkATDBn2dDqzC5c996mqLqx3G9plTPEM0rfv1kW2XnRtZZTh2cknswf8fomyxmdNPGDUX9pXhz1vwvHf9JiGvKnH4nOd0NA%2FSgrsC2FXTrosNVmdtDmr8YfWWEmlYXFmH8QbTiNAxPMpUEvOTl1K0f8dXfE4NENcPuxabBUeNXpf5cU16SVpNV6H5XOPdwPldwTb2nFINkF8Rds6Xnh7pSBJw7rUyY&X-Amz-Signature=007eccb3075f84583a1200ea4cc9db76700dd32aaebc995c042637f966c95656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6W2RVP%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBXPoWFTJJZIKYHULOYmjzs5TQ2giytDiitCp07ym7DgIhAMk%2F%2BgTwgTaTjDYLVXuSIkp30kx3ZCR5CdaYrlFy3DFmKv8DCG4QABoMNjM3NDIzMTgzODA1IgwxfxAZEInVxJTwkHwq3AMVT7b3n4OCrGcrcClQnaPX0kDoPB0qNtpKJXvzzF%2FHRr4Ayc%2BsGNeYQQad8%2BJG8vjVCikvFFfAG22dp1Bfrq%2FGYPOQNphXgCjBdaxe2dgsKj%2BIwPXzqvG41LhlBbsOk4EAzCDAXCcZVrLblGE8zKQ39dn8qqQj%2BVY3WjzsD7pFH8Bdu%2Bx9YcvOJKrQQt0zMhFwrGXsMDDxIXuI9rzkxvp%2Bz2YAVpYrpbmWAZVu2rX4F6LE0rSMa7%2Fy4ImZzyE5H%2BNj%2FRvzD1Pioi1ddoAvAJIaSFdmOQQ0hYQOPcoObxSZCQUGY%2BToNqqD8Znz8r97H9IaXszeCePDQqVjl1zRMUcwuGR9aL76Zmr7%2BsWVRhHWPguPN9jCjNlXLHDzIVYKz4AiCWaJsRvSJ82BbEjjLTqhqSEoIJgnur5ESpe68oHiporHJ0%2BxfjjXgQEDCC%2FXVSFm4%2BtrRUWHGifgnnTVRcwjSP0%2BRq%2FdcSk%2F1tPoLupYQBRr86IIQeGE5SP8M%2BoRJyl1wvb7ntyte89cS7pSw52xxyynQzVMNHHtCdXrh4wLFSJq6QtYSKTDZ047XU7C0%2Fs0lUrsJcswY9nwcoJ95L5Um1bJO1VhSoE0Jtuj7a3PjVQjjZeJAoyFKItxzTDcjKrPBjqkATDBn2dDqzC5c996mqLqx3G9plTPEM0rfv1kW2XnRtZZTh2cknswf8fomyxmdNPGDUX9pXhz1vwvHf9JiGvKnH4nOd0NA%2FSgrsC2FXTrosNVmdtDmr8YfWWEmlYXFmH8QbTiNAxPMpUEvOTl1K0f8dXfE4NENcPuxabBUeNXpf5cU16SVpNV6H5XOPdwPldwTb2nFINkF8Rds6Xnh7pSBJw7rUyY&X-Amz-Signature=f50e09ef5a28f58bf607986782e56ee72a981e1fd1db67a67d781ca3b7a389da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6W2RVP%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBXPoWFTJJZIKYHULOYmjzs5TQ2giytDiitCp07ym7DgIhAMk%2F%2BgTwgTaTjDYLVXuSIkp30kx3ZCR5CdaYrlFy3DFmKv8DCG4QABoMNjM3NDIzMTgzODA1IgwxfxAZEInVxJTwkHwq3AMVT7b3n4OCrGcrcClQnaPX0kDoPB0qNtpKJXvzzF%2FHRr4Ayc%2BsGNeYQQad8%2BJG8vjVCikvFFfAG22dp1Bfrq%2FGYPOQNphXgCjBdaxe2dgsKj%2BIwPXzqvG41LhlBbsOk4EAzCDAXCcZVrLblGE8zKQ39dn8qqQj%2BVY3WjzsD7pFH8Bdu%2Bx9YcvOJKrQQt0zMhFwrGXsMDDxIXuI9rzkxvp%2Bz2YAVpYrpbmWAZVu2rX4F6LE0rSMa7%2Fy4ImZzyE5H%2BNj%2FRvzD1Pioi1ddoAvAJIaSFdmOQQ0hYQOPcoObxSZCQUGY%2BToNqqD8Znz8r97H9IaXszeCePDQqVjl1zRMUcwuGR9aL76Zmr7%2BsWVRhHWPguPN9jCjNlXLHDzIVYKz4AiCWaJsRvSJ82BbEjjLTqhqSEoIJgnur5ESpe68oHiporHJ0%2BxfjjXgQEDCC%2FXVSFm4%2BtrRUWHGifgnnTVRcwjSP0%2BRq%2FdcSk%2F1tPoLupYQBRr86IIQeGE5SP8M%2BoRJyl1wvb7ntyte89cS7pSw52xxyynQzVMNHHtCdXrh4wLFSJq6QtYSKTDZ047XU7C0%2Fs0lUrsJcswY9nwcoJ95L5Um1bJO1VhSoE0Jtuj7a3PjVQjjZeJAoyFKItxzTDcjKrPBjqkATDBn2dDqzC5c996mqLqx3G9plTPEM0rfv1kW2XnRtZZTh2cknswf8fomyxmdNPGDUX9pXhz1vwvHf9JiGvKnH4nOd0NA%2FSgrsC2FXTrosNVmdtDmr8YfWWEmlYXFmH8QbTiNAxPMpUEvOTl1K0f8dXfE4NENcPuxabBUeNXpf5cU16SVpNV6H5XOPdwPldwTb2nFINkF8Rds6Xnh7pSBJw7rUyY&X-Amz-Signature=5841d3f9ae96fe80ae97afb01b45fb0687adf59a6ddd54b2973c27fdc8f39f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

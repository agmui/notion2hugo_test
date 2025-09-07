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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BO743WI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5Xjk87xBjmYmfMa%2BEApEAjR3%2FdfsD%2BigNlJktPqcRPAiEArt66LRsosnm3TJ0%2BCJVwI7WVoU8cHOG0RpJsXWv%2FDHEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItRlWAX3Tc%2FUKQ8%2BSrcAysBi0s2sVCo%2FRDp2Lz5VRFPnjH%2FtPka1Q8Junmsp775lbM3SodhTdc1MOl8cgbm%2FX%2F2tL4LxTRiKkOMkwoZ9qfzLTHjEzrogj4piXPjy7OJkMefr2toDigZ%2Fwb%2F0lwBBueeBPfVaR%2BOJ6IIzgKmPD0q2VLEKHs2QX%2FEYN5AhbefmHtj%2BM2wUGLaBTmG0f9CZ1GzaM55cTErAdl7l79YPXHAq2pIlWpWX4NISuDoEMOC9bLsv%2F6mIoLaiEXG0snpd%2FLVKDR5qXKW5hY4x8Urt1h%2BwROdkEWSWS1sS38CIhW24vJg4h5ziau2t1LppvfVmxBTQ%2Fsa%2F8vAmM57PG5vsa%2FcxC5kvz2phKBag22oyIHAjD1rlSdNZ%2Fa84UgJKXPo6BaklxNqZ%2FWnfzvkaPu23TP1eSKGvRy2CoJ4H%2BHRcXWYnOsXGBY3UuADCNkjtE2nPHrENCjGkMBWfCJrBUBtnJz7CcfNBFYgkNtL7fv3OBWRoQdI7SYbm3aCZ5Lwk1%2FKh9dlk0pfMFvcy%2FPZcCnbDOKv8zwXhXCdSOnb8OvE0K3HWe%2BbuNIy7I%2F9YDtcE5vQfbEb1vctF0VVHYM%2FMJSV5fj6jlOOaoZ%2B182NM7vFZ1eMzZwMq9Mf0vsnUminMJ%2FE8sUGOqUBK%2BJ8MHp9XgFexTKBcwWjVePpLxSdvax9m0i1LRnu%2BwdeC%2Fz%2FIFkGbKyf4Y3RVTf7W2IzhMyzoouXydAslKxZqayFvcNtIHDmOp0NpwAcD%2BHd3qmBH4ALsp%2FVXmffTfFoq9MDx3B%2F3V5kke0LB%2BVqy2gPw6%2BMWvcg05Q7ICg7ME16fTYEebzSFJ5yeg8fqbfOLqn2PfSAj%2BXBKB3hw2VZfbP42rWH&X-Amz-Signature=2cbdd79148fbe326c3a0d107ce13e5c1316005e877db1585c27cca734f27ad6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BO743WI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5Xjk87xBjmYmfMa%2BEApEAjR3%2FdfsD%2BigNlJktPqcRPAiEArt66LRsosnm3TJ0%2BCJVwI7WVoU8cHOG0RpJsXWv%2FDHEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItRlWAX3Tc%2FUKQ8%2BSrcAysBi0s2sVCo%2FRDp2Lz5VRFPnjH%2FtPka1Q8Junmsp775lbM3SodhTdc1MOl8cgbm%2FX%2F2tL4LxTRiKkOMkwoZ9qfzLTHjEzrogj4piXPjy7OJkMefr2toDigZ%2Fwb%2F0lwBBueeBPfVaR%2BOJ6IIzgKmPD0q2VLEKHs2QX%2FEYN5AhbefmHtj%2BM2wUGLaBTmG0f9CZ1GzaM55cTErAdl7l79YPXHAq2pIlWpWX4NISuDoEMOC9bLsv%2F6mIoLaiEXG0snpd%2FLVKDR5qXKW5hY4x8Urt1h%2BwROdkEWSWS1sS38CIhW24vJg4h5ziau2t1LppvfVmxBTQ%2Fsa%2F8vAmM57PG5vsa%2FcxC5kvz2phKBag22oyIHAjD1rlSdNZ%2Fa84UgJKXPo6BaklxNqZ%2FWnfzvkaPu23TP1eSKGvRy2CoJ4H%2BHRcXWYnOsXGBY3UuADCNkjtE2nPHrENCjGkMBWfCJrBUBtnJz7CcfNBFYgkNtL7fv3OBWRoQdI7SYbm3aCZ5Lwk1%2FKh9dlk0pfMFvcy%2FPZcCnbDOKv8zwXhXCdSOnb8OvE0K3HWe%2BbuNIy7I%2F9YDtcE5vQfbEb1vctF0VVHYM%2FMJSV5fj6jlOOaoZ%2B182NM7vFZ1eMzZwMq9Mf0vsnUminMJ%2FE8sUGOqUBK%2BJ8MHp9XgFexTKBcwWjVePpLxSdvax9m0i1LRnu%2BwdeC%2Fz%2FIFkGbKyf4Y3RVTf7W2IzhMyzoouXydAslKxZqayFvcNtIHDmOp0NpwAcD%2BHd3qmBH4ALsp%2FVXmffTfFoq9MDx3B%2F3V5kke0LB%2BVqy2gPw6%2BMWvcg05Q7ICg7ME16fTYEebzSFJ5yeg8fqbfOLqn2PfSAj%2BXBKB3hw2VZfbP42rWH&X-Amz-Signature=ef2ab4c978d6f96b959fb93db5f816ff84c932146401ac7411107988cf08f831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BO743WI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5Xjk87xBjmYmfMa%2BEApEAjR3%2FdfsD%2BigNlJktPqcRPAiEArt66LRsosnm3TJ0%2BCJVwI7WVoU8cHOG0RpJsXWv%2FDHEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItRlWAX3Tc%2FUKQ8%2BSrcAysBi0s2sVCo%2FRDp2Lz5VRFPnjH%2FtPka1Q8Junmsp775lbM3SodhTdc1MOl8cgbm%2FX%2F2tL4LxTRiKkOMkwoZ9qfzLTHjEzrogj4piXPjy7OJkMefr2toDigZ%2Fwb%2F0lwBBueeBPfVaR%2BOJ6IIzgKmPD0q2VLEKHs2QX%2FEYN5AhbefmHtj%2BM2wUGLaBTmG0f9CZ1GzaM55cTErAdl7l79YPXHAq2pIlWpWX4NISuDoEMOC9bLsv%2F6mIoLaiEXG0snpd%2FLVKDR5qXKW5hY4x8Urt1h%2BwROdkEWSWS1sS38CIhW24vJg4h5ziau2t1LppvfVmxBTQ%2Fsa%2F8vAmM57PG5vsa%2FcxC5kvz2phKBag22oyIHAjD1rlSdNZ%2Fa84UgJKXPo6BaklxNqZ%2FWnfzvkaPu23TP1eSKGvRy2CoJ4H%2BHRcXWYnOsXGBY3UuADCNkjtE2nPHrENCjGkMBWfCJrBUBtnJz7CcfNBFYgkNtL7fv3OBWRoQdI7SYbm3aCZ5Lwk1%2FKh9dlk0pfMFvcy%2FPZcCnbDOKv8zwXhXCdSOnb8OvE0K3HWe%2BbuNIy7I%2F9YDtcE5vQfbEb1vctF0VVHYM%2FMJSV5fj6jlOOaoZ%2B182NM7vFZ1eMzZwMq9Mf0vsnUminMJ%2FE8sUGOqUBK%2BJ8MHp9XgFexTKBcwWjVePpLxSdvax9m0i1LRnu%2BwdeC%2Fz%2FIFkGbKyf4Y3RVTf7W2IzhMyzoouXydAslKxZqayFvcNtIHDmOp0NpwAcD%2BHd3qmBH4ALsp%2FVXmffTfFoq9MDx3B%2F3V5kke0LB%2BVqy2gPw6%2BMWvcg05Q7ICg7ME16fTYEebzSFJ5yeg8fqbfOLqn2PfSAj%2BXBKB3hw2VZfbP42rWH&X-Amz-Signature=35214fbd958556fab7f6bc6d27026e2e8594221bb6977940f2686da794140d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BO743WI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5Xjk87xBjmYmfMa%2BEApEAjR3%2FdfsD%2BigNlJktPqcRPAiEArt66LRsosnm3TJ0%2BCJVwI7WVoU8cHOG0RpJsXWv%2FDHEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItRlWAX3Tc%2FUKQ8%2BSrcAysBi0s2sVCo%2FRDp2Lz5VRFPnjH%2FtPka1Q8Junmsp775lbM3SodhTdc1MOl8cgbm%2FX%2F2tL4LxTRiKkOMkwoZ9qfzLTHjEzrogj4piXPjy7OJkMefr2toDigZ%2Fwb%2F0lwBBueeBPfVaR%2BOJ6IIzgKmPD0q2VLEKHs2QX%2FEYN5AhbefmHtj%2BM2wUGLaBTmG0f9CZ1GzaM55cTErAdl7l79YPXHAq2pIlWpWX4NISuDoEMOC9bLsv%2F6mIoLaiEXG0snpd%2FLVKDR5qXKW5hY4x8Urt1h%2BwROdkEWSWS1sS38CIhW24vJg4h5ziau2t1LppvfVmxBTQ%2Fsa%2F8vAmM57PG5vsa%2FcxC5kvz2phKBag22oyIHAjD1rlSdNZ%2Fa84UgJKXPo6BaklxNqZ%2FWnfzvkaPu23TP1eSKGvRy2CoJ4H%2BHRcXWYnOsXGBY3UuADCNkjtE2nPHrENCjGkMBWfCJrBUBtnJz7CcfNBFYgkNtL7fv3OBWRoQdI7SYbm3aCZ5Lwk1%2FKh9dlk0pfMFvcy%2FPZcCnbDOKv8zwXhXCdSOnb8OvE0K3HWe%2BbuNIy7I%2F9YDtcE5vQfbEb1vctF0VVHYM%2FMJSV5fj6jlOOaoZ%2B182NM7vFZ1eMzZwMq9Mf0vsnUminMJ%2FE8sUGOqUBK%2BJ8MHp9XgFexTKBcwWjVePpLxSdvax9m0i1LRnu%2BwdeC%2Fz%2FIFkGbKyf4Y3RVTf7W2IzhMyzoouXydAslKxZqayFvcNtIHDmOp0NpwAcD%2BHd3qmBH4ALsp%2FVXmffTfFoq9MDx3B%2F3V5kke0LB%2BVqy2gPw6%2BMWvcg05Q7ICg7ME16fTYEebzSFJ5yeg8fqbfOLqn2PfSAj%2BXBKB3hw2VZfbP42rWH&X-Amz-Signature=1841e07f93fadd73ad6b17b3f79c31324239ca4c27d9eb64b2b9bb4bf32d688e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BO743WI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5Xjk87xBjmYmfMa%2BEApEAjR3%2FdfsD%2BigNlJktPqcRPAiEArt66LRsosnm3TJ0%2BCJVwI7WVoU8cHOG0RpJsXWv%2FDHEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItRlWAX3Tc%2FUKQ8%2BSrcAysBi0s2sVCo%2FRDp2Lz5VRFPnjH%2FtPka1Q8Junmsp775lbM3SodhTdc1MOl8cgbm%2FX%2F2tL4LxTRiKkOMkwoZ9qfzLTHjEzrogj4piXPjy7OJkMefr2toDigZ%2Fwb%2F0lwBBueeBPfVaR%2BOJ6IIzgKmPD0q2VLEKHs2QX%2FEYN5AhbefmHtj%2BM2wUGLaBTmG0f9CZ1GzaM55cTErAdl7l79YPXHAq2pIlWpWX4NISuDoEMOC9bLsv%2F6mIoLaiEXG0snpd%2FLVKDR5qXKW5hY4x8Urt1h%2BwROdkEWSWS1sS38CIhW24vJg4h5ziau2t1LppvfVmxBTQ%2Fsa%2F8vAmM57PG5vsa%2FcxC5kvz2phKBag22oyIHAjD1rlSdNZ%2Fa84UgJKXPo6BaklxNqZ%2FWnfzvkaPu23TP1eSKGvRy2CoJ4H%2BHRcXWYnOsXGBY3UuADCNkjtE2nPHrENCjGkMBWfCJrBUBtnJz7CcfNBFYgkNtL7fv3OBWRoQdI7SYbm3aCZ5Lwk1%2FKh9dlk0pfMFvcy%2FPZcCnbDOKv8zwXhXCdSOnb8OvE0K3HWe%2BbuNIy7I%2F9YDtcE5vQfbEb1vctF0VVHYM%2FMJSV5fj6jlOOaoZ%2B182NM7vFZ1eMzZwMq9Mf0vsnUminMJ%2FE8sUGOqUBK%2BJ8MHp9XgFexTKBcwWjVePpLxSdvax9m0i1LRnu%2BwdeC%2Fz%2FIFkGbKyf4Y3RVTf7W2IzhMyzoouXydAslKxZqayFvcNtIHDmOp0NpwAcD%2BHd3qmBH4ALsp%2FVXmffTfFoq9MDx3B%2F3V5kke0LB%2BVqy2gPw6%2BMWvcg05Q7ICg7ME16fTYEebzSFJ5yeg8fqbfOLqn2PfSAj%2BXBKB3hw2VZfbP42rWH&X-Amz-Signature=c53e3b37a775bce8c5dd5623c3fd30b6413a16b299ac752d5a886690789e2476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BO743WI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5Xjk87xBjmYmfMa%2BEApEAjR3%2FdfsD%2BigNlJktPqcRPAiEArt66LRsosnm3TJ0%2BCJVwI7WVoU8cHOG0RpJsXWv%2FDHEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItRlWAX3Tc%2FUKQ8%2BSrcAysBi0s2sVCo%2FRDp2Lz5VRFPnjH%2FtPka1Q8Junmsp775lbM3SodhTdc1MOl8cgbm%2FX%2F2tL4LxTRiKkOMkwoZ9qfzLTHjEzrogj4piXPjy7OJkMefr2toDigZ%2Fwb%2F0lwBBueeBPfVaR%2BOJ6IIzgKmPD0q2VLEKHs2QX%2FEYN5AhbefmHtj%2BM2wUGLaBTmG0f9CZ1GzaM55cTErAdl7l79YPXHAq2pIlWpWX4NISuDoEMOC9bLsv%2F6mIoLaiEXG0snpd%2FLVKDR5qXKW5hY4x8Urt1h%2BwROdkEWSWS1sS38CIhW24vJg4h5ziau2t1LppvfVmxBTQ%2Fsa%2F8vAmM57PG5vsa%2FcxC5kvz2phKBag22oyIHAjD1rlSdNZ%2Fa84UgJKXPo6BaklxNqZ%2FWnfzvkaPu23TP1eSKGvRy2CoJ4H%2BHRcXWYnOsXGBY3UuADCNkjtE2nPHrENCjGkMBWfCJrBUBtnJz7CcfNBFYgkNtL7fv3OBWRoQdI7SYbm3aCZ5Lwk1%2FKh9dlk0pfMFvcy%2FPZcCnbDOKv8zwXhXCdSOnb8OvE0K3HWe%2BbuNIy7I%2F9YDtcE5vQfbEb1vctF0VVHYM%2FMJSV5fj6jlOOaoZ%2B182NM7vFZ1eMzZwMq9Mf0vsnUminMJ%2FE8sUGOqUBK%2BJ8MHp9XgFexTKBcwWjVePpLxSdvax9m0i1LRnu%2BwdeC%2Fz%2FIFkGbKyf4Y3RVTf7W2IzhMyzoouXydAslKxZqayFvcNtIHDmOp0NpwAcD%2BHd3qmBH4ALsp%2FVXmffTfFoq9MDx3B%2F3V5kke0LB%2BVqy2gPw6%2BMWvcg05Q7ICg7ME16fTYEebzSFJ5yeg8fqbfOLqn2PfSAj%2BXBKB3hw2VZfbP42rWH&X-Amz-Signature=7d8bec9ca232f76c818bf24c31916bf4d7ce20a574320e0ceb7a95c64e5b37ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BO743WI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5Xjk87xBjmYmfMa%2BEApEAjR3%2FdfsD%2BigNlJktPqcRPAiEArt66LRsosnm3TJ0%2BCJVwI7WVoU8cHOG0RpJsXWv%2FDHEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItRlWAX3Tc%2FUKQ8%2BSrcAysBi0s2sVCo%2FRDp2Lz5VRFPnjH%2FtPka1Q8Junmsp775lbM3SodhTdc1MOl8cgbm%2FX%2F2tL4LxTRiKkOMkwoZ9qfzLTHjEzrogj4piXPjy7OJkMefr2toDigZ%2Fwb%2F0lwBBueeBPfVaR%2BOJ6IIzgKmPD0q2VLEKHs2QX%2FEYN5AhbefmHtj%2BM2wUGLaBTmG0f9CZ1GzaM55cTErAdl7l79YPXHAq2pIlWpWX4NISuDoEMOC9bLsv%2F6mIoLaiEXG0snpd%2FLVKDR5qXKW5hY4x8Urt1h%2BwROdkEWSWS1sS38CIhW24vJg4h5ziau2t1LppvfVmxBTQ%2Fsa%2F8vAmM57PG5vsa%2FcxC5kvz2phKBag22oyIHAjD1rlSdNZ%2Fa84UgJKXPo6BaklxNqZ%2FWnfzvkaPu23TP1eSKGvRy2CoJ4H%2BHRcXWYnOsXGBY3UuADCNkjtE2nPHrENCjGkMBWfCJrBUBtnJz7CcfNBFYgkNtL7fv3OBWRoQdI7SYbm3aCZ5Lwk1%2FKh9dlk0pfMFvcy%2FPZcCnbDOKv8zwXhXCdSOnb8OvE0K3HWe%2BbuNIy7I%2F9YDtcE5vQfbEb1vctF0VVHYM%2FMJSV5fj6jlOOaoZ%2B182NM7vFZ1eMzZwMq9Mf0vsnUminMJ%2FE8sUGOqUBK%2BJ8MHp9XgFexTKBcwWjVePpLxSdvax9m0i1LRnu%2BwdeC%2Fz%2FIFkGbKyf4Y3RVTf7W2IzhMyzoouXydAslKxZqayFvcNtIHDmOp0NpwAcD%2BHd3qmBH4ALsp%2FVXmffTfFoq9MDx3B%2F3V5kke0LB%2BVqy2gPw6%2BMWvcg05Q7ICg7ME16fTYEebzSFJ5yeg8fqbfOLqn2PfSAj%2BXBKB3hw2VZfbP42rWH&X-Amz-Signature=ad9d308e878c4ad8da5002ca0305589443c9b94289466fcbe7f07acc3a36cba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

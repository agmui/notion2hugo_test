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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMGHELG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfYKvCBNi7qOqZGc5wYS9LLecFJd3%2F3aAjDcjnNAGAvAIgJtc9kehL5ahe42r4w0Yqs791qzx14fBTl50AVGOmbxAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYyWYVjaBqu%2BRxOhSrcAwkBNko82cmP7FQY3Os2dBBKzU8htQBb592wp0p5nYoAUhbMoepwxIFRpdhVFhJ6U8J0pk%2F4vEPpSIWzo5nANWZohAhvDruDTTb8ovl3Nvmmfok7ymjJkN%2Ft4s6mJcmsxBLO3x5ejUD7hAegVw0rgDIrEDegahYIePD3j07jQk%2BCeukBytc%2BdPzIve6GKFGEItYWAzUe%2FaqxOGN4SYQ20bVEWHQCUfXmjHxjIJd2x83wSNH9LddnubhL5LquPVy2Lw9TrUHBK73LO4WxbtXYaKIOdbxxY2%2BhVPQYOIPjFEkynPPEjA5iMA0DApLhheazl8mt24K6y%2Bbi3WNajJ3A1ZPXZdODpRNnekdl2Jo6dRg9EFHEgaKmRwZfJOLmLNLJqP7%2F46v%2B2nlwA0ysnAmV%2BVLt97wUVNI8z2k9C0OxB%2BS9vjvGHaZCOoyb%2B49edQuovuNkFT61e27zBQl5tdjNSajsjkFHW4dWkHNu1vBFQ%2FZEcmb9t2MhC6yJJ%2BC5oDgoMCvmSHqQJjbma2CYwlU9JTYXAjuKe1Etv9chuKQchtJ%2BQkT%2BsHoTXA47MMqtp3j5tXAnhKUVG1%2FyNt5pQ9DPKT%2B3mxMrFLyZT5Fdu00N2woVyH3KAJr08yZx36ymMJev2MIGOqUBVwMgL8jDjupYeKb%2FbpQP8abSqVMPPMMfwPbZz%2BkfnlRy%2BscOJ0G9YsjVRITqc4k8tWhb4mgJgbKrz23Lsdj5v6DLr1fsdooMpdkZ93%2BI2LKTmfCIQR869xPLbVUlAaC8DeBLkcPW6Gl%2BnnkfeWxD6%2FwtONVgO4q%2BBo1%2B%2FHbHqZZ%2B8DcKJqq3dw4GttLOcPuA95p43wMFYbsEVnwEC29Q6ce57qLm&X-Amz-Signature=0bc4ebfa3353692804edcdb614df40f449083aabb12b25c9f32fb7421cd6f47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMGHELG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfYKvCBNi7qOqZGc5wYS9LLecFJd3%2F3aAjDcjnNAGAvAIgJtc9kehL5ahe42r4w0Yqs791qzx14fBTl50AVGOmbxAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYyWYVjaBqu%2BRxOhSrcAwkBNko82cmP7FQY3Os2dBBKzU8htQBb592wp0p5nYoAUhbMoepwxIFRpdhVFhJ6U8J0pk%2F4vEPpSIWzo5nANWZohAhvDruDTTb8ovl3Nvmmfok7ymjJkN%2Ft4s6mJcmsxBLO3x5ejUD7hAegVw0rgDIrEDegahYIePD3j07jQk%2BCeukBytc%2BdPzIve6GKFGEItYWAzUe%2FaqxOGN4SYQ20bVEWHQCUfXmjHxjIJd2x83wSNH9LddnubhL5LquPVy2Lw9TrUHBK73LO4WxbtXYaKIOdbxxY2%2BhVPQYOIPjFEkynPPEjA5iMA0DApLhheazl8mt24K6y%2Bbi3WNajJ3A1ZPXZdODpRNnekdl2Jo6dRg9EFHEgaKmRwZfJOLmLNLJqP7%2F46v%2B2nlwA0ysnAmV%2BVLt97wUVNI8z2k9C0OxB%2BS9vjvGHaZCOoyb%2B49edQuovuNkFT61e27zBQl5tdjNSajsjkFHW4dWkHNu1vBFQ%2FZEcmb9t2MhC6yJJ%2BC5oDgoMCvmSHqQJjbma2CYwlU9JTYXAjuKe1Etv9chuKQchtJ%2BQkT%2BsHoTXA47MMqtp3j5tXAnhKUVG1%2FyNt5pQ9DPKT%2B3mxMrFLyZT5Fdu00N2woVyH3KAJr08yZx36ymMJev2MIGOqUBVwMgL8jDjupYeKb%2FbpQP8abSqVMPPMMfwPbZz%2BkfnlRy%2BscOJ0G9YsjVRITqc4k8tWhb4mgJgbKrz23Lsdj5v6DLr1fsdooMpdkZ93%2BI2LKTmfCIQR869xPLbVUlAaC8DeBLkcPW6Gl%2BnnkfeWxD6%2FwtONVgO4q%2BBo1%2B%2FHbHqZZ%2B8DcKJqq3dw4GttLOcPuA95p43wMFYbsEVnwEC29Q6ce57qLm&X-Amz-Signature=af6516e1fd571b67934592eeaaf0bc19da21f1c0b5974435841dd5831d7ca038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMGHELG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfYKvCBNi7qOqZGc5wYS9LLecFJd3%2F3aAjDcjnNAGAvAIgJtc9kehL5ahe42r4w0Yqs791qzx14fBTl50AVGOmbxAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYyWYVjaBqu%2BRxOhSrcAwkBNko82cmP7FQY3Os2dBBKzU8htQBb592wp0p5nYoAUhbMoepwxIFRpdhVFhJ6U8J0pk%2F4vEPpSIWzo5nANWZohAhvDruDTTb8ovl3Nvmmfok7ymjJkN%2Ft4s6mJcmsxBLO3x5ejUD7hAegVw0rgDIrEDegahYIePD3j07jQk%2BCeukBytc%2BdPzIve6GKFGEItYWAzUe%2FaqxOGN4SYQ20bVEWHQCUfXmjHxjIJd2x83wSNH9LddnubhL5LquPVy2Lw9TrUHBK73LO4WxbtXYaKIOdbxxY2%2BhVPQYOIPjFEkynPPEjA5iMA0DApLhheazl8mt24K6y%2Bbi3WNajJ3A1ZPXZdODpRNnekdl2Jo6dRg9EFHEgaKmRwZfJOLmLNLJqP7%2F46v%2B2nlwA0ysnAmV%2BVLt97wUVNI8z2k9C0OxB%2BS9vjvGHaZCOoyb%2B49edQuovuNkFT61e27zBQl5tdjNSajsjkFHW4dWkHNu1vBFQ%2FZEcmb9t2MhC6yJJ%2BC5oDgoMCvmSHqQJjbma2CYwlU9JTYXAjuKe1Etv9chuKQchtJ%2BQkT%2BsHoTXA47MMqtp3j5tXAnhKUVG1%2FyNt5pQ9DPKT%2B3mxMrFLyZT5Fdu00N2woVyH3KAJr08yZx36ymMJev2MIGOqUBVwMgL8jDjupYeKb%2FbpQP8abSqVMPPMMfwPbZz%2BkfnlRy%2BscOJ0G9YsjVRITqc4k8tWhb4mgJgbKrz23Lsdj5v6DLr1fsdooMpdkZ93%2BI2LKTmfCIQR869xPLbVUlAaC8DeBLkcPW6Gl%2BnnkfeWxD6%2FwtONVgO4q%2BBo1%2B%2FHbHqZZ%2B8DcKJqq3dw4GttLOcPuA95p43wMFYbsEVnwEC29Q6ce57qLm&X-Amz-Signature=a9d08669355e1abd826ced592e33f8b3ec1680270afed380872f12ae8848e1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMGHELG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfYKvCBNi7qOqZGc5wYS9LLecFJd3%2F3aAjDcjnNAGAvAIgJtc9kehL5ahe42r4w0Yqs791qzx14fBTl50AVGOmbxAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYyWYVjaBqu%2BRxOhSrcAwkBNko82cmP7FQY3Os2dBBKzU8htQBb592wp0p5nYoAUhbMoepwxIFRpdhVFhJ6U8J0pk%2F4vEPpSIWzo5nANWZohAhvDruDTTb8ovl3Nvmmfok7ymjJkN%2Ft4s6mJcmsxBLO3x5ejUD7hAegVw0rgDIrEDegahYIePD3j07jQk%2BCeukBytc%2BdPzIve6GKFGEItYWAzUe%2FaqxOGN4SYQ20bVEWHQCUfXmjHxjIJd2x83wSNH9LddnubhL5LquPVy2Lw9TrUHBK73LO4WxbtXYaKIOdbxxY2%2BhVPQYOIPjFEkynPPEjA5iMA0DApLhheazl8mt24K6y%2Bbi3WNajJ3A1ZPXZdODpRNnekdl2Jo6dRg9EFHEgaKmRwZfJOLmLNLJqP7%2F46v%2B2nlwA0ysnAmV%2BVLt97wUVNI8z2k9C0OxB%2BS9vjvGHaZCOoyb%2B49edQuovuNkFT61e27zBQl5tdjNSajsjkFHW4dWkHNu1vBFQ%2FZEcmb9t2MhC6yJJ%2BC5oDgoMCvmSHqQJjbma2CYwlU9JTYXAjuKe1Etv9chuKQchtJ%2BQkT%2BsHoTXA47MMqtp3j5tXAnhKUVG1%2FyNt5pQ9DPKT%2B3mxMrFLyZT5Fdu00N2woVyH3KAJr08yZx36ymMJev2MIGOqUBVwMgL8jDjupYeKb%2FbpQP8abSqVMPPMMfwPbZz%2BkfnlRy%2BscOJ0G9YsjVRITqc4k8tWhb4mgJgbKrz23Lsdj5v6DLr1fsdooMpdkZ93%2BI2LKTmfCIQR869xPLbVUlAaC8DeBLkcPW6Gl%2BnnkfeWxD6%2FwtONVgO4q%2BBo1%2B%2FHbHqZZ%2B8DcKJqq3dw4GttLOcPuA95p43wMFYbsEVnwEC29Q6ce57qLm&X-Amz-Signature=dfca8014e84c20d1e03b2601f20e65a9c24060e76db1605b0ce4ade2ca402ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMGHELG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfYKvCBNi7qOqZGc5wYS9LLecFJd3%2F3aAjDcjnNAGAvAIgJtc9kehL5ahe42r4w0Yqs791qzx14fBTl50AVGOmbxAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYyWYVjaBqu%2BRxOhSrcAwkBNko82cmP7FQY3Os2dBBKzU8htQBb592wp0p5nYoAUhbMoepwxIFRpdhVFhJ6U8J0pk%2F4vEPpSIWzo5nANWZohAhvDruDTTb8ovl3Nvmmfok7ymjJkN%2Ft4s6mJcmsxBLO3x5ejUD7hAegVw0rgDIrEDegahYIePD3j07jQk%2BCeukBytc%2BdPzIve6GKFGEItYWAzUe%2FaqxOGN4SYQ20bVEWHQCUfXmjHxjIJd2x83wSNH9LddnubhL5LquPVy2Lw9TrUHBK73LO4WxbtXYaKIOdbxxY2%2BhVPQYOIPjFEkynPPEjA5iMA0DApLhheazl8mt24K6y%2Bbi3WNajJ3A1ZPXZdODpRNnekdl2Jo6dRg9EFHEgaKmRwZfJOLmLNLJqP7%2F46v%2B2nlwA0ysnAmV%2BVLt97wUVNI8z2k9C0OxB%2BS9vjvGHaZCOoyb%2B49edQuovuNkFT61e27zBQl5tdjNSajsjkFHW4dWkHNu1vBFQ%2FZEcmb9t2MhC6yJJ%2BC5oDgoMCvmSHqQJjbma2CYwlU9JTYXAjuKe1Etv9chuKQchtJ%2BQkT%2BsHoTXA47MMqtp3j5tXAnhKUVG1%2FyNt5pQ9DPKT%2B3mxMrFLyZT5Fdu00N2woVyH3KAJr08yZx36ymMJev2MIGOqUBVwMgL8jDjupYeKb%2FbpQP8abSqVMPPMMfwPbZz%2BkfnlRy%2BscOJ0G9YsjVRITqc4k8tWhb4mgJgbKrz23Lsdj5v6DLr1fsdooMpdkZ93%2BI2LKTmfCIQR869xPLbVUlAaC8DeBLkcPW6Gl%2BnnkfeWxD6%2FwtONVgO4q%2BBo1%2B%2FHbHqZZ%2B8DcKJqq3dw4GttLOcPuA95p43wMFYbsEVnwEC29Q6ce57qLm&X-Amz-Signature=e93f5e902e21844d05c6e25bfaf1f3c7835efe21bb598341045d4c1b93e7fe4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMGHELG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfYKvCBNi7qOqZGc5wYS9LLecFJd3%2F3aAjDcjnNAGAvAIgJtc9kehL5ahe42r4w0Yqs791qzx14fBTl50AVGOmbxAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYyWYVjaBqu%2BRxOhSrcAwkBNko82cmP7FQY3Os2dBBKzU8htQBb592wp0p5nYoAUhbMoepwxIFRpdhVFhJ6U8J0pk%2F4vEPpSIWzo5nANWZohAhvDruDTTb8ovl3Nvmmfok7ymjJkN%2Ft4s6mJcmsxBLO3x5ejUD7hAegVw0rgDIrEDegahYIePD3j07jQk%2BCeukBytc%2BdPzIve6GKFGEItYWAzUe%2FaqxOGN4SYQ20bVEWHQCUfXmjHxjIJd2x83wSNH9LddnubhL5LquPVy2Lw9TrUHBK73LO4WxbtXYaKIOdbxxY2%2BhVPQYOIPjFEkynPPEjA5iMA0DApLhheazl8mt24K6y%2Bbi3WNajJ3A1ZPXZdODpRNnekdl2Jo6dRg9EFHEgaKmRwZfJOLmLNLJqP7%2F46v%2B2nlwA0ysnAmV%2BVLt97wUVNI8z2k9C0OxB%2BS9vjvGHaZCOoyb%2B49edQuovuNkFT61e27zBQl5tdjNSajsjkFHW4dWkHNu1vBFQ%2FZEcmb9t2MhC6yJJ%2BC5oDgoMCvmSHqQJjbma2CYwlU9JTYXAjuKe1Etv9chuKQchtJ%2BQkT%2BsHoTXA47MMqtp3j5tXAnhKUVG1%2FyNt5pQ9DPKT%2B3mxMrFLyZT5Fdu00N2woVyH3KAJr08yZx36ymMJev2MIGOqUBVwMgL8jDjupYeKb%2FbpQP8abSqVMPPMMfwPbZz%2BkfnlRy%2BscOJ0G9YsjVRITqc4k8tWhb4mgJgbKrz23Lsdj5v6DLr1fsdooMpdkZ93%2BI2LKTmfCIQR869xPLbVUlAaC8DeBLkcPW6Gl%2BnnkfeWxD6%2FwtONVgO4q%2BBo1%2B%2FHbHqZZ%2B8DcKJqq3dw4GttLOcPuA95p43wMFYbsEVnwEC29Q6ce57qLm&X-Amz-Signature=abb7e86e2e2fc302ab9a68fadc6d8004c6b4896c52e81d1ee229034a893f6b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMGHELG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfYKvCBNi7qOqZGc5wYS9LLecFJd3%2F3aAjDcjnNAGAvAIgJtc9kehL5ahe42r4w0Yqs791qzx14fBTl50AVGOmbxAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYyWYVjaBqu%2BRxOhSrcAwkBNko82cmP7FQY3Os2dBBKzU8htQBb592wp0p5nYoAUhbMoepwxIFRpdhVFhJ6U8J0pk%2F4vEPpSIWzo5nANWZohAhvDruDTTb8ovl3Nvmmfok7ymjJkN%2Ft4s6mJcmsxBLO3x5ejUD7hAegVw0rgDIrEDegahYIePD3j07jQk%2BCeukBytc%2BdPzIve6GKFGEItYWAzUe%2FaqxOGN4SYQ20bVEWHQCUfXmjHxjIJd2x83wSNH9LddnubhL5LquPVy2Lw9TrUHBK73LO4WxbtXYaKIOdbxxY2%2BhVPQYOIPjFEkynPPEjA5iMA0DApLhheazl8mt24K6y%2Bbi3WNajJ3A1ZPXZdODpRNnekdl2Jo6dRg9EFHEgaKmRwZfJOLmLNLJqP7%2F46v%2B2nlwA0ysnAmV%2BVLt97wUVNI8z2k9C0OxB%2BS9vjvGHaZCOoyb%2B49edQuovuNkFT61e27zBQl5tdjNSajsjkFHW4dWkHNu1vBFQ%2FZEcmb9t2MhC6yJJ%2BC5oDgoMCvmSHqQJjbma2CYwlU9JTYXAjuKe1Etv9chuKQchtJ%2BQkT%2BsHoTXA47MMqtp3j5tXAnhKUVG1%2FyNt5pQ9DPKT%2B3mxMrFLyZT5Fdu00N2woVyH3KAJr08yZx36ymMJev2MIGOqUBVwMgL8jDjupYeKb%2FbpQP8abSqVMPPMMfwPbZz%2BkfnlRy%2BscOJ0G9YsjVRITqc4k8tWhb4mgJgbKrz23Lsdj5v6DLr1fsdooMpdkZ93%2BI2LKTmfCIQR869xPLbVUlAaC8DeBLkcPW6Gl%2BnnkfeWxD6%2FwtONVgO4q%2BBo1%2B%2FHbHqZZ%2B8DcKJqq3dw4GttLOcPuA95p43wMFYbsEVnwEC29Q6ce57qLm&X-Amz-Signature=57f7b3d44cc936f54b2c6ce766c51e170290f81309724bfee9605d54974183a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

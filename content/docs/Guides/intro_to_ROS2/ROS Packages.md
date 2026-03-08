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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2R5DA2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIG5r%2Fmn9%2BqX7rz1Bw3alB%2FdXXurTwIAcnB0hxtiAYzN%2BAiBN1g%2Fbwtin158Ei%2B09OGsH7XHq%2BWA1kUF4C%2FuAtOjhQyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMXvBnUGBgYlwi%2Bjl8KtwD0dMbLuOjt44mhY9VljLS0Wjsi23E5mmp4V69BuagonIC5x%2FHowiSakj5mtrY22lmG0B7AGAE3oeDQqt6XZci%2FRJe7Wacr5hCYSZ4e%2Fiz8bHp9CIVBI1CWZK1OsWpfp3r%2Bsc%2Btylh1xNGpvdp%2FsCOVzNvnQ5uQxgq8GgH3j%2F06B9FzAuuU6AC14rJMbIDY3wk6eV1TIIt%2FB7ASaVBZ6tjGfvFr1yQk%2BiJXgPyi%2BfUuRfSbpG0zw5yFz6cn1mEyYC2MmdhDONisiJ9FZAl0AIKEYfczgmtE0%2F%2BQZmzHELyskc5mGUZUycNND0r8ButdIAEew29SkckQvblmVc%2FrpnDY5tMyDuxDvh%2FJTC%2F4UvFceIlbhgq%2F5h1YaVxqvqNDvYUwsDE5st%2B7%2Bynh4XINEjY8G9G7YylmhvcwkOA01H5GbUkh2bvd3yDfyIg8iXri5nJesD%2ByliXfqIDRyjQtrZ1jDw0Z4Mi6NDjYD6rdZbbfcIoqHj7GRhthKb61eNpDibb2RnJPIRi1d%2B9LTg6XvrrxgHGTykE8S2ZrhqHKvfYIe3doSlB%2Fnw9Mqs2yIsttoxae5Id8HYVDK55Zr24rC9v5T1%2BeyDxolIQTMSRTHfcoEK%2FLdiL9stkb%2BB%2BICAw2J2zzQY6pgHcmNfEWsM%2F0evpE%2BopwvEsW2QHS%2FRoNBn6GiD3rbrkj%2BUBoAWWfy8iiZFU1ZbRh2M95Hki1FT0Q1kS5vqRlhwIHBrm9koV%2Fli7PSN6SpDiKS2NxhTgkWwjtezTsxIQcFvN4drVugBgnu%2Bv9wHQEKCsUdUKDVxq2pr7nCEG4Br60Q7Y%2BeKvYCKh0%2BqB8lSYQKjNYvx0kvWtqb9g2nO6hmA%2By0TkRMnC&X-Amz-Signature=5e25c1bb77df42b99124154132fdf60ab0319f4c5c07e922ca5c281f9a91edc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2R5DA2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIG5r%2Fmn9%2BqX7rz1Bw3alB%2FdXXurTwIAcnB0hxtiAYzN%2BAiBN1g%2Fbwtin158Ei%2B09OGsH7XHq%2BWA1kUF4C%2FuAtOjhQyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMXvBnUGBgYlwi%2Bjl8KtwD0dMbLuOjt44mhY9VljLS0Wjsi23E5mmp4V69BuagonIC5x%2FHowiSakj5mtrY22lmG0B7AGAE3oeDQqt6XZci%2FRJe7Wacr5hCYSZ4e%2Fiz8bHp9CIVBI1CWZK1OsWpfp3r%2Bsc%2Btylh1xNGpvdp%2FsCOVzNvnQ5uQxgq8GgH3j%2F06B9FzAuuU6AC14rJMbIDY3wk6eV1TIIt%2FB7ASaVBZ6tjGfvFr1yQk%2BiJXgPyi%2BfUuRfSbpG0zw5yFz6cn1mEyYC2MmdhDONisiJ9FZAl0AIKEYfczgmtE0%2F%2BQZmzHELyskc5mGUZUycNND0r8ButdIAEew29SkckQvblmVc%2FrpnDY5tMyDuxDvh%2FJTC%2F4UvFceIlbhgq%2F5h1YaVxqvqNDvYUwsDE5st%2B7%2Bynh4XINEjY8G9G7YylmhvcwkOA01H5GbUkh2bvd3yDfyIg8iXri5nJesD%2ByliXfqIDRyjQtrZ1jDw0Z4Mi6NDjYD6rdZbbfcIoqHj7GRhthKb61eNpDibb2RnJPIRi1d%2B9LTg6XvrrxgHGTykE8S2ZrhqHKvfYIe3doSlB%2Fnw9Mqs2yIsttoxae5Id8HYVDK55Zr24rC9v5T1%2BeyDxolIQTMSRTHfcoEK%2FLdiL9stkb%2BB%2BICAw2J2zzQY6pgHcmNfEWsM%2F0evpE%2BopwvEsW2QHS%2FRoNBn6GiD3rbrkj%2BUBoAWWfy8iiZFU1ZbRh2M95Hki1FT0Q1kS5vqRlhwIHBrm9koV%2Fli7PSN6SpDiKS2NxhTgkWwjtezTsxIQcFvN4drVugBgnu%2Bv9wHQEKCsUdUKDVxq2pr7nCEG4Br60Q7Y%2BeKvYCKh0%2BqB8lSYQKjNYvx0kvWtqb9g2nO6hmA%2By0TkRMnC&X-Amz-Signature=566ca530dc5df923761b4798ebd1acfcda700a5deec3468812cc05b742ec3fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2R5DA2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIG5r%2Fmn9%2BqX7rz1Bw3alB%2FdXXurTwIAcnB0hxtiAYzN%2BAiBN1g%2Fbwtin158Ei%2B09OGsH7XHq%2BWA1kUF4C%2FuAtOjhQyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMXvBnUGBgYlwi%2Bjl8KtwD0dMbLuOjt44mhY9VljLS0Wjsi23E5mmp4V69BuagonIC5x%2FHowiSakj5mtrY22lmG0B7AGAE3oeDQqt6XZci%2FRJe7Wacr5hCYSZ4e%2Fiz8bHp9CIVBI1CWZK1OsWpfp3r%2Bsc%2Btylh1xNGpvdp%2FsCOVzNvnQ5uQxgq8GgH3j%2F06B9FzAuuU6AC14rJMbIDY3wk6eV1TIIt%2FB7ASaVBZ6tjGfvFr1yQk%2BiJXgPyi%2BfUuRfSbpG0zw5yFz6cn1mEyYC2MmdhDONisiJ9FZAl0AIKEYfczgmtE0%2F%2BQZmzHELyskc5mGUZUycNND0r8ButdIAEew29SkckQvblmVc%2FrpnDY5tMyDuxDvh%2FJTC%2F4UvFceIlbhgq%2F5h1YaVxqvqNDvYUwsDE5st%2B7%2Bynh4XINEjY8G9G7YylmhvcwkOA01H5GbUkh2bvd3yDfyIg8iXri5nJesD%2ByliXfqIDRyjQtrZ1jDw0Z4Mi6NDjYD6rdZbbfcIoqHj7GRhthKb61eNpDibb2RnJPIRi1d%2B9LTg6XvrrxgHGTykE8S2ZrhqHKvfYIe3doSlB%2Fnw9Mqs2yIsttoxae5Id8HYVDK55Zr24rC9v5T1%2BeyDxolIQTMSRTHfcoEK%2FLdiL9stkb%2BB%2BICAw2J2zzQY6pgHcmNfEWsM%2F0evpE%2BopwvEsW2QHS%2FRoNBn6GiD3rbrkj%2BUBoAWWfy8iiZFU1ZbRh2M95Hki1FT0Q1kS5vqRlhwIHBrm9koV%2Fli7PSN6SpDiKS2NxhTgkWwjtezTsxIQcFvN4drVugBgnu%2Bv9wHQEKCsUdUKDVxq2pr7nCEG4Br60Q7Y%2BeKvYCKh0%2BqB8lSYQKjNYvx0kvWtqb9g2nO6hmA%2By0TkRMnC&X-Amz-Signature=64b1474c31c3ba9ccfc0eb559bf492f8f1c416b1e4e1755c81e1092b642e24f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2R5DA2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIG5r%2Fmn9%2BqX7rz1Bw3alB%2FdXXurTwIAcnB0hxtiAYzN%2BAiBN1g%2Fbwtin158Ei%2B09OGsH7XHq%2BWA1kUF4C%2FuAtOjhQyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMXvBnUGBgYlwi%2Bjl8KtwD0dMbLuOjt44mhY9VljLS0Wjsi23E5mmp4V69BuagonIC5x%2FHowiSakj5mtrY22lmG0B7AGAE3oeDQqt6XZci%2FRJe7Wacr5hCYSZ4e%2Fiz8bHp9CIVBI1CWZK1OsWpfp3r%2Bsc%2Btylh1xNGpvdp%2FsCOVzNvnQ5uQxgq8GgH3j%2F06B9FzAuuU6AC14rJMbIDY3wk6eV1TIIt%2FB7ASaVBZ6tjGfvFr1yQk%2BiJXgPyi%2BfUuRfSbpG0zw5yFz6cn1mEyYC2MmdhDONisiJ9FZAl0AIKEYfczgmtE0%2F%2BQZmzHELyskc5mGUZUycNND0r8ButdIAEew29SkckQvblmVc%2FrpnDY5tMyDuxDvh%2FJTC%2F4UvFceIlbhgq%2F5h1YaVxqvqNDvYUwsDE5st%2B7%2Bynh4XINEjY8G9G7YylmhvcwkOA01H5GbUkh2bvd3yDfyIg8iXri5nJesD%2ByliXfqIDRyjQtrZ1jDw0Z4Mi6NDjYD6rdZbbfcIoqHj7GRhthKb61eNpDibb2RnJPIRi1d%2B9LTg6XvrrxgHGTykE8S2ZrhqHKvfYIe3doSlB%2Fnw9Mqs2yIsttoxae5Id8HYVDK55Zr24rC9v5T1%2BeyDxolIQTMSRTHfcoEK%2FLdiL9stkb%2BB%2BICAw2J2zzQY6pgHcmNfEWsM%2F0evpE%2BopwvEsW2QHS%2FRoNBn6GiD3rbrkj%2BUBoAWWfy8iiZFU1ZbRh2M95Hki1FT0Q1kS5vqRlhwIHBrm9koV%2Fli7PSN6SpDiKS2NxhTgkWwjtezTsxIQcFvN4drVugBgnu%2Bv9wHQEKCsUdUKDVxq2pr7nCEG4Br60Q7Y%2BeKvYCKh0%2BqB8lSYQKjNYvx0kvWtqb9g2nO6hmA%2By0TkRMnC&X-Amz-Signature=a4af4e37a9cf8d3a4a232bdcaf73546f2b225d68a50422c542bcbc16837a139e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2R5DA2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIG5r%2Fmn9%2BqX7rz1Bw3alB%2FdXXurTwIAcnB0hxtiAYzN%2BAiBN1g%2Fbwtin158Ei%2B09OGsH7XHq%2BWA1kUF4C%2FuAtOjhQyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMXvBnUGBgYlwi%2Bjl8KtwD0dMbLuOjt44mhY9VljLS0Wjsi23E5mmp4V69BuagonIC5x%2FHowiSakj5mtrY22lmG0B7AGAE3oeDQqt6XZci%2FRJe7Wacr5hCYSZ4e%2Fiz8bHp9CIVBI1CWZK1OsWpfp3r%2Bsc%2Btylh1xNGpvdp%2FsCOVzNvnQ5uQxgq8GgH3j%2F06B9FzAuuU6AC14rJMbIDY3wk6eV1TIIt%2FB7ASaVBZ6tjGfvFr1yQk%2BiJXgPyi%2BfUuRfSbpG0zw5yFz6cn1mEyYC2MmdhDONisiJ9FZAl0AIKEYfczgmtE0%2F%2BQZmzHELyskc5mGUZUycNND0r8ButdIAEew29SkckQvblmVc%2FrpnDY5tMyDuxDvh%2FJTC%2F4UvFceIlbhgq%2F5h1YaVxqvqNDvYUwsDE5st%2B7%2Bynh4XINEjY8G9G7YylmhvcwkOA01H5GbUkh2bvd3yDfyIg8iXri5nJesD%2ByliXfqIDRyjQtrZ1jDw0Z4Mi6NDjYD6rdZbbfcIoqHj7GRhthKb61eNpDibb2RnJPIRi1d%2B9LTg6XvrrxgHGTykE8S2ZrhqHKvfYIe3doSlB%2Fnw9Mqs2yIsttoxae5Id8HYVDK55Zr24rC9v5T1%2BeyDxolIQTMSRTHfcoEK%2FLdiL9stkb%2BB%2BICAw2J2zzQY6pgHcmNfEWsM%2F0evpE%2BopwvEsW2QHS%2FRoNBn6GiD3rbrkj%2BUBoAWWfy8iiZFU1ZbRh2M95Hki1FT0Q1kS5vqRlhwIHBrm9koV%2Fli7PSN6SpDiKS2NxhTgkWwjtezTsxIQcFvN4drVugBgnu%2Bv9wHQEKCsUdUKDVxq2pr7nCEG4Br60Q7Y%2BeKvYCKh0%2BqB8lSYQKjNYvx0kvWtqb9g2nO6hmA%2By0TkRMnC&X-Amz-Signature=2c2b20ba1533dd496af8b3f0b744487737c60e2924d11c75f784e3e8c94420ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2R5DA2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIG5r%2Fmn9%2BqX7rz1Bw3alB%2FdXXurTwIAcnB0hxtiAYzN%2BAiBN1g%2Fbwtin158Ei%2B09OGsH7XHq%2BWA1kUF4C%2FuAtOjhQyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMXvBnUGBgYlwi%2Bjl8KtwD0dMbLuOjt44mhY9VljLS0Wjsi23E5mmp4V69BuagonIC5x%2FHowiSakj5mtrY22lmG0B7AGAE3oeDQqt6XZci%2FRJe7Wacr5hCYSZ4e%2Fiz8bHp9CIVBI1CWZK1OsWpfp3r%2Bsc%2Btylh1xNGpvdp%2FsCOVzNvnQ5uQxgq8GgH3j%2F06B9FzAuuU6AC14rJMbIDY3wk6eV1TIIt%2FB7ASaVBZ6tjGfvFr1yQk%2BiJXgPyi%2BfUuRfSbpG0zw5yFz6cn1mEyYC2MmdhDONisiJ9FZAl0AIKEYfczgmtE0%2F%2BQZmzHELyskc5mGUZUycNND0r8ButdIAEew29SkckQvblmVc%2FrpnDY5tMyDuxDvh%2FJTC%2F4UvFceIlbhgq%2F5h1YaVxqvqNDvYUwsDE5st%2B7%2Bynh4XINEjY8G9G7YylmhvcwkOA01H5GbUkh2bvd3yDfyIg8iXri5nJesD%2ByliXfqIDRyjQtrZ1jDw0Z4Mi6NDjYD6rdZbbfcIoqHj7GRhthKb61eNpDibb2RnJPIRi1d%2B9LTg6XvrrxgHGTykE8S2ZrhqHKvfYIe3doSlB%2Fnw9Mqs2yIsttoxae5Id8HYVDK55Zr24rC9v5T1%2BeyDxolIQTMSRTHfcoEK%2FLdiL9stkb%2BB%2BICAw2J2zzQY6pgHcmNfEWsM%2F0evpE%2BopwvEsW2QHS%2FRoNBn6GiD3rbrkj%2BUBoAWWfy8iiZFU1ZbRh2M95Hki1FT0Q1kS5vqRlhwIHBrm9koV%2Fli7PSN6SpDiKS2NxhTgkWwjtezTsxIQcFvN4drVugBgnu%2Bv9wHQEKCsUdUKDVxq2pr7nCEG4Br60Q7Y%2BeKvYCKh0%2BqB8lSYQKjNYvx0kvWtqb9g2nO6hmA%2By0TkRMnC&X-Amz-Signature=2f35678915428893695d122836dd0734e083b31e6f127756b52d242a99ce6ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2R5DA2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIG5r%2Fmn9%2BqX7rz1Bw3alB%2FdXXurTwIAcnB0hxtiAYzN%2BAiBN1g%2Fbwtin158Ei%2B09OGsH7XHq%2BWA1kUF4C%2FuAtOjhQyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMXvBnUGBgYlwi%2Bjl8KtwD0dMbLuOjt44mhY9VljLS0Wjsi23E5mmp4V69BuagonIC5x%2FHowiSakj5mtrY22lmG0B7AGAE3oeDQqt6XZci%2FRJe7Wacr5hCYSZ4e%2Fiz8bHp9CIVBI1CWZK1OsWpfp3r%2Bsc%2Btylh1xNGpvdp%2FsCOVzNvnQ5uQxgq8GgH3j%2F06B9FzAuuU6AC14rJMbIDY3wk6eV1TIIt%2FB7ASaVBZ6tjGfvFr1yQk%2BiJXgPyi%2BfUuRfSbpG0zw5yFz6cn1mEyYC2MmdhDONisiJ9FZAl0AIKEYfczgmtE0%2F%2BQZmzHELyskc5mGUZUycNND0r8ButdIAEew29SkckQvblmVc%2FrpnDY5tMyDuxDvh%2FJTC%2F4UvFceIlbhgq%2F5h1YaVxqvqNDvYUwsDE5st%2B7%2Bynh4XINEjY8G9G7YylmhvcwkOA01H5GbUkh2bvd3yDfyIg8iXri5nJesD%2ByliXfqIDRyjQtrZ1jDw0Z4Mi6NDjYD6rdZbbfcIoqHj7GRhthKb61eNpDibb2RnJPIRi1d%2B9LTg6XvrrxgHGTykE8S2ZrhqHKvfYIe3doSlB%2Fnw9Mqs2yIsttoxae5Id8HYVDK55Zr24rC9v5T1%2BeyDxolIQTMSRTHfcoEK%2FLdiL9stkb%2BB%2BICAw2J2zzQY6pgHcmNfEWsM%2F0evpE%2BopwvEsW2QHS%2FRoNBn6GiD3rbrkj%2BUBoAWWfy8iiZFU1ZbRh2M95Hki1FT0Q1kS5vqRlhwIHBrm9koV%2Fli7PSN6SpDiKS2NxhTgkWwjtezTsxIQcFvN4drVugBgnu%2Bv9wHQEKCsUdUKDVxq2pr7nCEG4Br60Q7Y%2BeKvYCKh0%2BqB8lSYQKjNYvx0kvWtqb9g2nO6hmA%2By0TkRMnC&X-Amz-Signature=6ecf6e7f49d07234069684f6e62d8552024dd02a439ec82150ab404deec25cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

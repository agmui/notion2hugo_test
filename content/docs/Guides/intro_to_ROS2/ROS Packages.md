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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHTAFZP5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAGUR7eDNME9T7cASkVluhoK1AGc2wl8jwjQvxqJjANKAiAB9Gs4kjlwBIKxII9B0Xib3GzdlY5j50QdD%2BhMNJLPryr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMjujGRfkUYnIIzQYdKtwDULuqYeCWRXaSytrvlbYH4Qxva%2FJ%2BhpgR8aM%2FeF%2FvTC0beQqzOql%2BcXDLy9nQm6ZHXZLnLPF%2FrFegBnPXVPghq4nBaRz9s%2FbGTCd%2BSr86fvkd04O5GfE028QrafSMqycoZplFORpGR3ctyXhTSMSMFj0XTWuGcnPZxMV2i0w%2FqiRVrocQJ6QGMW%2BMawBvAIvgMXXMmPlgM2Bh%2F36sGdS4YN2R2eXUMTH6TAqPToFmXtTMeokJDveFKbrRlVpXEXBv0tle2kmj3Ouhs42TDUkmPuiOnK5VIn%2FFO92S79yxMET72to1HW%2FRntX3hd2OWFQEkzhm1v7QYI7GZYtNZZ2%2F9KMJ8cD%2BHDk5aYKoll4EU6wG3%2ByY39caWcQA2%2FyzyJUc7fKSYhQZ%2BawZ%2F4EpuEVhVqEtabGK8J%2B0LkRGSEkO9wa754Qgfh6VjOx5MSuE5qHRgKVCrLmi%2FGstJ7P1YajsyUAkzRBF6%2FLfhzWJZ4vBD%2BKBvRWeTsYvcAzfgak8bOZRWu35CwrL5%2BrbijyRgjiGUePJetFpRftvTZmmZM8%2B4MdlwPNA05kvhfRWFZH0WL5BU97It7oNrBHJNt%2FUwS%2B2CK27QGgEbntPb7EDjQdpmmVPyH9YOyYG5LaGe7AwvbvDvQY6pgEBHejtkgNbP0isjsgojF2xq4vA1ErzeuH93c3qm%2Fb3vdXwV2eYqj%2BdcLPJOWA5ar%2B%2BhwKYUk6KUwCTepCItlqFIXUyTSziJKcB3q1z1DzYhNt3eCWY5oZggnq511OSGOxjfx%2BXifK3cOpfXVhq0s2Haf5x6li%2B1EocFunxueGPM2eGqWChpsnWSbLltD2VCCPOJhdDB6J4cmlIWulLgdeT1uohKhSx&X-Amz-Signature=5cd4293d364129cc0029c25ce6e15ef339e315c21bcc8e7b9c5a6de64d586578&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHTAFZP5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAGUR7eDNME9T7cASkVluhoK1AGc2wl8jwjQvxqJjANKAiAB9Gs4kjlwBIKxII9B0Xib3GzdlY5j50QdD%2BhMNJLPryr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMjujGRfkUYnIIzQYdKtwDULuqYeCWRXaSytrvlbYH4Qxva%2FJ%2BhpgR8aM%2FeF%2FvTC0beQqzOql%2BcXDLy9nQm6ZHXZLnLPF%2FrFegBnPXVPghq4nBaRz9s%2FbGTCd%2BSr86fvkd04O5GfE028QrafSMqycoZplFORpGR3ctyXhTSMSMFj0XTWuGcnPZxMV2i0w%2FqiRVrocQJ6QGMW%2BMawBvAIvgMXXMmPlgM2Bh%2F36sGdS4YN2R2eXUMTH6TAqPToFmXtTMeokJDveFKbrRlVpXEXBv0tle2kmj3Ouhs42TDUkmPuiOnK5VIn%2FFO92S79yxMET72to1HW%2FRntX3hd2OWFQEkzhm1v7QYI7GZYtNZZ2%2F9KMJ8cD%2BHDk5aYKoll4EU6wG3%2ByY39caWcQA2%2FyzyJUc7fKSYhQZ%2BawZ%2F4EpuEVhVqEtabGK8J%2B0LkRGSEkO9wa754Qgfh6VjOx5MSuE5qHRgKVCrLmi%2FGstJ7P1YajsyUAkzRBF6%2FLfhzWJZ4vBD%2BKBvRWeTsYvcAzfgak8bOZRWu35CwrL5%2BrbijyRgjiGUePJetFpRftvTZmmZM8%2B4MdlwPNA05kvhfRWFZH0WL5BU97It7oNrBHJNt%2FUwS%2B2CK27QGgEbntPb7EDjQdpmmVPyH9YOyYG5LaGe7AwvbvDvQY6pgEBHejtkgNbP0isjsgojF2xq4vA1ErzeuH93c3qm%2Fb3vdXwV2eYqj%2BdcLPJOWA5ar%2B%2BhwKYUk6KUwCTepCItlqFIXUyTSziJKcB3q1z1DzYhNt3eCWY5oZggnq511OSGOxjfx%2BXifK3cOpfXVhq0s2Haf5x6li%2B1EocFunxueGPM2eGqWChpsnWSbLltD2VCCPOJhdDB6J4cmlIWulLgdeT1uohKhSx&X-Amz-Signature=a7aea71cb5ce3ba04b6c17f9cb980bc5a14edc74360c7e82db4058532f29a72e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHTAFZP5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAGUR7eDNME9T7cASkVluhoK1AGc2wl8jwjQvxqJjANKAiAB9Gs4kjlwBIKxII9B0Xib3GzdlY5j50QdD%2BhMNJLPryr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMjujGRfkUYnIIzQYdKtwDULuqYeCWRXaSytrvlbYH4Qxva%2FJ%2BhpgR8aM%2FeF%2FvTC0beQqzOql%2BcXDLy9nQm6ZHXZLnLPF%2FrFegBnPXVPghq4nBaRz9s%2FbGTCd%2BSr86fvkd04O5GfE028QrafSMqycoZplFORpGR3ctyXhTSMSMFj0XTWuGcnPZxMV2i0w%2FqiRVrocQJ6QGMW%2BMawBvAIvgMXXMmPlgM2Bh%2F36sGdS4YN2R2eXUMTH6TAqPToFmXtTMeokJDveFKbrRlVpXEXBv0tle2kmj3Ouhs42TDUkmPuiOnK5VIn%2FFO92S79yxMET72to1HW%2FRntX3hd2OWFQEkzhm1v7QYI7GZYtNZZ2%2F9KMJ8cD%2BHDk5aYKoll4EU6wG3%2ByY39caWcQA2%2FyzyJUc7fKSYhQZ%2BawZ%2F4EpuEVhVqEtabGK8J%2B0LkRGSEkO9wa754Qgfh6VjOx5MSuE5qHRgKVCrLmi%2FGstJ7P1YajsyUAkzRBF6%2FLfhzWJZ4vBD%2BKBvRWeTsYvcAzfgak8bOZRWu35CwrL5%2BrbijyRgjiGUePJetFpRftvTZmmZM8%2B4MdlwPNA05kvhfRWFZH0WL5BU97It7oNrBHJNt%2FUwS%2B2CK27QGgEbntPb7EDjQdpmmVPyH9YOyYG5LaGe7AwvbvDvQY6pgEBHejtkgNbP0isjsgojF2xq4vA1ErzeuH93c3qm%2Fb3vdXwV2eYqj%2BdcLPJOWA5ar%2B%2BhwKYUk6KUwCTepCItlqFIXUyTSziJKcB3q1z1DzYhNt3eCWY5oZggnq511OSGOxjfx%2BXifK3cOpfXVhq0s2Haf5x6li%2B1EocFunxueGPM2eGqWChpsnWSbLltD2VCCPOJhdDB6J4cmlIWulLgdeT1uohKhSx&X-Amz-Signature=c7c8ce998119cbb41b8adfa7f787fd9bcf182d38b0035f107ff359825e053941&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHTAFZP5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAGUR7eDNME9T7cASkVluhoK1AGc2wl8jwjQvxqJjANKAiAB9Gs4kjlwBIKxII9B0Xib3GzdlY5j50QdD%2BhMNJLPryr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMjujGRfkUYnIIzQYdKtwDULuqYeCWRXaSytrvlbYH4Qxva%2FJ%2BhpgR8aM%2FeF%2FvTC0beQqzOql%2BcXDLy9nQm6ZHXZLnLPF%2FrFegBnPXVPghq4nBaRz9s%2FbGTCd%2BSr86fvkd04O5GfE028QrafSMqycoZplFORpGR3ctyXhTSMSMFj0XTWuGcnPZxMV2i0w%2FqiRVrocQJ6QGMW%2BMawBvAIvgMXXMmPlgM2Bh%2F36sGdS4YN2R2eXUMTH6TAqPToFmXtTMeokJDveFKbrRlVpXEXBv0tle2kmj3Ouhs42TDUkmPuiOnK5VIn%2FFO92S79yxMET72to1HW%2FRntX3hd2OWFQEkzhm1v7QYI7GZYtNZZ2%2F9KMJ8cD%2BHDk5aYKoll4EU6wG3%2ByY39caWcQA2%2FyzyJUc7fKSYhQZ%2BawZ%2F4EpuEVhVqEtabGK8J%2B0LkRGSEkO9wa754Qgfh6VjOx5MSuE5qHRgKVCrLmi%2FGstJ7P1YajsyUAkzRBF6%2FLfhzWJZ4vBD%2BKBvRWeTsYvcAzfgak8bOZRWu35CwrL5%2BrbijyRgjiGUePJetFpRftvTZmmZM8%2B4MdlwPNA05kvhfRWFZH0WL5BU97It7oNrBHJNt%2FUwS%2B2CK27QGgEbntPb7EDjQdpmmVPyH9YOyYG5LaGe7AwvbvDvQY6pgEBHejtkgNbP0isjsgojF2xq4vA1ErzeuH93c3qm%2Fb3vdXwV2eYqj%2BdcLPJOWA5ar%2B%2BhwKYUk6KUwCTepCItlqFIXUyTSziJKcB3q1z1DzYhNt3eCWY5oZggnq511OSGOxjfx%2BXifK3cOpfXVhq0s2Haf5x6li%2B1EocFunxueGPM2eGqWChpsnWSbLltD2VCCPOJhdDB6J4cmlIWulLgdeT1uohKhSx&X-Amz-Signature=5bda45c224f8c05a8fee8696038fefdfa6a6e6b49669745f3391956bfe7cda90&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHTAFZP5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAGUR7eDNME9T7cASkVluhoK1AGc2wl8jwjQvxqJjANKAiAB9Gs4kjlwBIKxII9B0Xib3GzdlY5j50QdD%2BhMNJLPryr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMjujGRfkUYnIIzQYdKtwDULuqYeCWRXaSytrvlbYH4Qxva%2FJ%2BhpgR8aM%2FeF%2FvTC0beQqzOql%2BcXDLy9nQm6ZHXZLnLPF%2FrFegBnPXVPghq4nBaRz9s%2FbGTCd%2BSr86fvkd04O5GfE028QrafSMqycoZplFORpGR3ctyXhTSMSMFj0XTWuGcnPZxMV2i0w%2FqiRVrocQJ6QGMW%2BMawBvAIvgMXXMmPlgM2Bh%2F36sGdS4YN2R2eXUMTH6TAqPToFmXtTMeokJDveFKbrRlVpXEXBv0tle2kmj3Ouhs42TDUkmPuiOnK5VIn%2FFO92S79yxMET72to1HW%2FRntX3hd2OWFQEkzhm1v7QYI7GZYtNZZ2%2F9KMJ8cD%2BHDk5aYKoll4EU6wG3%2ByY39caWcQA2%2FyzyJUc7fKSYhQZ%2BawZ%2F4EpuEVhVqEtabGK8J%2B0LkRGSEkO9wa754Qgfh6VjOx5MSuE5qHRgKVCrLmi%2FGstJ7P1YajsyUAkzRBF6%2FLfhzWJZ4vBD%2BKBvRWeTsYvcAzfgak8bOZRWu35CwrL5%2BrbijyRgjiGUePJetFpRftvTZmmZM8%2B4MdlwPNA05kvhfRWFZH0WL5BU97It7oNrBHJNt%2FUwS%2B2CK27QGgEbntPb7EDjQdpmmVPyH9YOyYG5LaGe7AwvbvDvQY6pgEBHejtkgNbP0isjsgojF2xq4vA1ErzeuH93c3qm%2Fb3vdXwV2eYqj%2BdcLPJOWA5ar%2B%2BhwKYUk6KUwCTepCItlqFIXUyTSziJKcB3q1z1DzYhNt3eCWY5oZggnq511OSGOxjfx%2BXifK3cOpfXVhq0s2Haf5x6li%2B1EocFunxueGPM2eGqWChpsnWSbLltD2VCCPOJhdDB6J4cmlIWulLgdeT1uohKhSx&X-Amz-Signature=f13def2df9e5fed8130753a8358961b610138e3a3d3a1bee5bb3df41eed503d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHTAFZP5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAGUR7eDNME9T7cASkVluhoK1AGc2wl8jwjQvxqJjANKAiAB9Gs4kjlwBIKxII9B0Xib3GzdlY5j50QdD%2BhMNJLPryr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMjujGRfkUYnIIzQYdKtwDULuqYeCWRXaSytrvlbYH4Qxva%2FJ%2BhpgR8aM%2FeF%2FvTC0beQqzOql%2BcXDLy9nQm6ZHXZLnLPF%2FrFegBnPXVPghq4nBaRz9s%2FbGTCd%2BSr86fvkd04O5GfE028QrafSMqycoZplFORpGR3ctyXhTSMSMFj0XTWuGcnPZxMV2i0w%2FqiRVrocQJ6QGMW%2BMawBvAIvgMXXMmPlgM2Bh%2F36sGdS4YN2R2eXUMTH6TAqPToFmXtTMeokJDveFKbrRlVpXEXBv0tle2kmj3Ouhs42TDUkmPuiOnK5VIn%2FFO92S79yxMET72to1HW%2FRntX3hd2OWFQEkzhm1v7QYI7GZYtNZZ2%2F9KMJ8cD%2BHDk5aYKoll4EU6wG3%2ByY39caWcQA2%2FyzyJUc7fKSYhQZ%2BawZ%2F4EpuEVhVqEtabGK8J%2B0LkRGSEkO9wa754Qgfh6VjOx5MSuE5qHRgKVCrLmi%2FGstJ7P1YajsyUAkzRBF6%2FLfhzWJZ4vBD%2BKBvRWeTsYvcAzfgak8bOZRWu35CwrL5%2BrbijyRgjiGUePJetFpRftvTZmmZM8%2B4MdlwPNA05kvhfRWFZH0WL5BU97It7oNrBHJNt%2FUwS%2B2CK27QGgEbntPb7EDjQdpmmVPyH9YOyYG5LaGe7AwvbvDvQY6pgEBHejtkgNbP0isjsgojF2xq4vA1ErzeuH93c3qm%2Fb3vdXwV2eYqj%2BdcLPJOWA5ar%2B%2BhwKYUk6KUwCTepCItlqFIXUyTSziJKcB3q1z1DzYhNt3eCWY5oZggnq511OSGOxjfx%2BXifK3cOpfXVhq0s2Haf5x6li%2B1EocFunxueGPM2eGqWChpsnWSbLltD2VCCPOJhdDB6J4cmlIWulLgdeT1uohKhSx&X-Amz-Signature=5c6ec7d9fbda1f913714016e1ff0db408389c6d68e31b6843161d0efb60cef17&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHTAFZP5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAGUR7eDNME9T7cASkVluhoK1AGc2wl8jwjQvxqJjANKAiAB9Gs4kjlwBIKxII9B0Xib3GzdlY5j50QdD%2BhMNJLPryr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMjujGRfkUYnIIzQYdKtwDULuqYeCWRXaSytrvlbYH4Qxva%2FJ%2BhpgR8aM%2FeF%2FvTC0beQqzOql%2BcXDLy9nQm6ZHXZLnLPF%2FrFegBnPXVPghq4nBaRz9s%2FbGTCd%2BSr86fvkd04O5GfE028QrafSMqycoZplFORpGR3ctyXhTSMSMFj0XTWuGcnPZxMV2i0w%2FqiRVrocQJ6QGMW%2BMawBvAIvgMXXMmPlgM2Bh%2F36sGdS4YN2R2eXUMTH6TAqPToFmXtTMeokJDveFKbrRlVpXEXBv0tle2kmj3Ouhs42TDUkmPuiOnK5VIn%2FFO92S79yxMET72to1HW%2FRntX3hd2OWFQEkzhm1v7QYI7GZYtNZZ2%2F9KMJ8cD%2BHDk5aYKoll4EU6wG3%2ByY39caWcQA2%2FyzyJUc7fKSYhQZ%2BawZ%2F4EpuEVhVqEtabGK8J%2B0LkRGSEkO9wa754Qgfh6VjOx5MSuE5qHRgKVCrLmi%2FGstJ7P1YajsyUAkzRBF6%2FLfhzWJZ4vBD%2BKBvRWeTsYvcAzfgak8bOZRWu35CwrL5%2BrbijyRgjiGUePJetFpRftvTZmmZM8%2B4MdlwPNA05kvhfRWFZH0WL5BU97It7oNrBHJNt%2FUwS%2B2CK27QGgEbntPb7EDjQdpmmVPyH9YOyYG5LaGe7AwvbvDvQY6pgEBHejtkgNbP0isjsgojF2xq4vA1ErzeuH93c3qm%2Fb3vdXwV2eYqj%2BdcLPJOWA5ar%2B%2BhwKYUk6KUwCTepCItlqFIXUyTSziJKcB3q1z1DzYhNt3eCWY5oZggnq511OSGOxjfx%2BXifK3cOpfXVhq0s2Haf5x6li%2B1EocFunxueGPM2eGqWChpsnWSbLltD2VCCPOJhdDB6J4cmlIWulLgdeT1uohKhSx&X-Amz-Signature=2f846223522c0ae4627c44bc545f4fcc23848f56d119d0dd73ff192c4198c417&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

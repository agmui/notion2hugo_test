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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z37EAQT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzFYA%2BQ%2B8ifZFOF4wBuUKXRfqhvjAyBaJyrdFVQph9VgIgSmnC4kgEPCVjcI4FEZ4ep85XKV0dtNa3VjAgAXvFC9cqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJV6Vvvzflx6DIGPyrcA4CxHKOwwLPbh19ivri0Cqd9oSdUVd5NwkQNFwE4EiIxAd5qKzCt6CYCnOlngccUz%2BhHgp4ygjsve6C03HJCZTXULOfXInXiKl%2BEwV5w4K1j5jx1zB5wlUHAFnkjdhuljvfoap1PoocVHyZQ2kduXKLruyENLzni7TdkfMfMautTpnY3VrD6KveguX4rVyRK%2FtaWSo9LjfsVEUizK6EbQW26XoiFUZr%2BE6MzKaXuHw09C0BMgJyBLxHJECpyJ13QL1AWYM3s9avhq5Kin3dTo3t9ZxcMkhhBnnPa6i16zkIPTHO7%2BdP838T15x14oNlS7LSmy7c1Bur0mVYdt7RbcHTxgYQS4yuHXN1M5zCqBcgtkrDInXbKu5D%2F%2BTmiP60I3mF3lt4G54HWAgtyBuDLhRn9B0%2FfO9Zfn56YSlAQ9yU%2Fj%2FVuV7oFLi4x%2FvjaASYM2Qa5rT8yfBHs8PR1FWV0GjibzTM4kJfHZIvNAUROefbIRtUkJO%2FasgOvF373BMNMWsryp%2F10Fe8Dav4gNYKhq2Cp64PoN6FYOJVCTt6cfNVlne96p9XsSbbCB%2Bnug3MucBLekgbHmz05jDLz5KmDgOmpreEC7W8vO2M4stASjN%2BJOFZihzC3wGPTj%2BCuMPOP%2FMAGOqUBLTMwa2Bx6x0mLMk0pa2f5UTtqAHFr8xlTjMqQVRc1e%2F7Bo20I1ffNV0UKTpGOi%2Fzjjhfbp3mvl25kQk5hnGjsaN%2Byh5mLOZcNQDcYn2pdUydMgicoFpglWvdFjsnDGsn7YA1B3ioDmOQef%2FuPsSJ%2Fna1Z0eSMkxz%2FMnvybsEC%2Fw14pr8zh7HFjsI6Ux3akw7o8bdEMJDeGoH3Vdf1TXnPSzvqDsE&X-Amz-Signature=7115776f43ced899903920562ca63f12c7e90bd212f727e8e75ed7092942e122&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z37EAQT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzFYA%2BQ%2B8ifZFOF4wBuUKXRfqhvjAyBaJyrdFVQph9VgIgSmnC4kgEPCVjcI4FEZ4ep85XKV0dtNa3VjAgAXvFC9cqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJV6Vvvzflx6DIGPyrcA4CxHKOwwLPbh19ivri0Cqd9oSdUVd5NwkQNFwE4EiIxAd5qKzCt6CYCnOlngccUz%2BhHgp4ygjsve6C03HJCZTXULOfXInXiKl%2BEwV5w4K1j5jx1zB5wlUHAFnkjdhuljvfoap1PoocVHyZQ2kduXKLruyENLzni7TdkfMfMautTpnY3VrD6KveguX4rVyRK%2FtaWSo9LjfsVEUizK6EbQW26XoiFUZr%2BE6MzKaXuHw09C0BMgJyBLxHJECpyJ13QL1AWYM3s9avhq5Kin3dTo3t9ZxcMkhhBnnPa6i16zkIPTHO7%2BdP838T15x14oNlS7LSmy7c1Bur0mVYdt7RbcHTxgYQS4yuHXN1M5zCqBcgtkrDInXbKu5D%2F%2BTmiP60I3mF3lt4G54HWAgtyBuDLhRn9B0%2FfO9Zfn56YSlAQ9yU%2Fj%2FVuV7oFLi4x%2FvjaASYM2Qa5rT8yfBHs8PR1FWV0GjibzTM4kJfHZIvNAUROefbIRtUkJO%2FasgOvF373BMNMWsryp%2F10Fe8Dav4gNYKhq2Cp64PoN6FYOJVCTt6cfNVlne96p9XsSbbCB%2Bnug3MucBLekgbHmz05jDLz5KmDgOmpreEC7W8vO2M4stASjN%2BJOFZihzC3wGPTj%2BCuMPOP%2FMAGOqUBLTMwa2Bx6x0mLMk0pa2f5UTtqAHFr8xlTjMqQVRc1e%2F7Bo20I1ffNV0UKTpGOi%2Fzjjhfbp3mvl25kQk5hnGjsaN%2Byh5mLOZcNQDcYn2pdUydMgicoFpglWvdFjsnDGsn7YA1B3ioDmOQef%2FuPsSJ%2Fna1Z0eSMkxz%2FMnvybsEC%2Fw14pr8zh7HFjsI6Ux3akw7o8bdEMJDeGoH3Vdf1TXnPSzvqDsE&X-Amz-Signature=d039241f07b1928ab417b07db9306db9b3ba0160f1a3edbceb4b1f8f2deac7af&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z37EAQT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzFYA%2BQ%2B8ifZFOF4wBuUKXRfqhvjAyBaJyrdFVQph9VgIgSmnC4kgEPCVjcI4FEZ4ep85XKV0dtNa3VjAgAXvFC9cqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJV6Vvvzflx6DIGPyrcA4CxHKOwwLPbh19ivri0Cqd9oSdUVd5NwkQNFwE4EiIxAd5qKzCt6CYCnOlngccUz%2BhHgp4ygjsve6C03HJCZTXULOfXInXiKl%2BEwV5w4K1j5jx1zB5wlUHAFnkjdhuljvfoap1PoocVHyZQ2kduXKLruyENLzni7TdkfMfMautTpnY3VrD6KveguX4rVyRK%2FtaWSo9LjfsVEUizK6EbQW26XoiFUZr%2BE6MzKaXuHw09C0BMgJyBLxHJECpyJ13QL1AWYM3s9avhq5Kin3dTo3t9ZxcMkhhBnnPa6i16zkIPTHO7%2BdP838T15x14oNlS7LSmy7c1Bur0mVYdt7RbcHTxgYQS4yuHXN1M5zCqBcgtkrDInXbKu5D%2F%2BTmiP60I3mF3lt4G54HWAgtyBuDLhRn9B0%2FfO9Zfn56YSlAQ9yU%2Fj%2FVuV7oFLi4x%2FvjaASYM2Qa5rT8yfBHs8PR1FWV0GjibzTM4kJfHZIvNAUROefbIRtUkJO%2FasgOvF373BMNMWsryp%2F10Fe8Dav4gNYKhq2Cp64PoN6FYOJVCTt6cfNVlne96p9XsSbbCB%2Bnug3MucBLekgbHmz05jDLz5KmDgOmpreEC7W8vO2M4stASjN%2BJOFZihzC3wGPTj%2BCuMPOP%2FMAGOqUBLTMwa2Bx6x0mLMk0pa2f5UTtqAHFr8xlTjMqQVRc1e%2F7Bo20I1ffNV0UKTpGOi%2Fzjjhfbp3mvl25kQk5hnGjsaN%2Byh5mLOZcNQDcYn2pdUydMgicoFpglWvdFjsnDGsn7YA1B3ioDmOQef%2FuPsSJ%2Fna1Z0eSMkxz%2FMnvybsEC%2Fw14pr8zh7HFjsI6Ux3akw7o8bdEMJDeGoH3Vdf1TXnPSzvqDsE&X-Amz-Signature=3d5a59afa941a765b153183b96e64807f4379d8e47211a5a26b3f75bd5ac3c25&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z37EAQT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzFYA%2BQ%2B8ifZFOF4wBuUKXRfqhvjAyBaJyrdFVQph9VgIgSmnC4kgEPCVjcI4FEZ4ep85XKV0dtNa3VjAgAXvFC9cqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJV6Vvvzflx6DIGPyrcA4CxHKOwwLPbh19ivri0Cqd9oSdUVd5NwkQNFwE4EiIxAd5qKzCt6CYCnOlngccUz%2BhHgp4ygjsve6C03HJCZTXULOfXInXiKl%2BEwV5w4K1j5jx1zB5wlUHAFnkjdhuljvfoap1PoocVHyZQ2kduXKLruyENLzni7TdkfMfMautTpnY3VrD6KveguX4rVyRK%2FtaWSo9LjfsVEUizK6EbQW26XoiFUZr%2BE6MzKaXuHw09C0BMgJyBLxHJECpyJ13QL1AWYM3s9avhq5Kin3dTo3t9ZxcMkhhBnnPa6i16zkIPTHO7%2BdP838T15x14oNlS7LSmy7c1Bur0mVYdt7RbcHTxgYQS4yuHXN1M5zCqBcgtkrDInXbKu5D%2F%2BTmiP60I3mF3lt4G54HWAgtyBuDLhRn9B0%2FfO9Zfn56YSlAQ9yU%2Fj%2FVuV7oFLi4x%2FvjaASYM2Qa5rT8yfBHs8PR1FWV0GjibzTM4kJfHZIvNAUROefbIRtUkJO%2FasgOvF373BMNMWsryp%2F10Fe8Dav4gNYKhq2Cp64PoN6FYOJVCTt6cfNVlne96p9XsSbbCB%2Bnug3MucBLekgbHmz05jDLz5KmDgOmpreEC7W8vO2M4stASjN%2BJOFZihzC3wGPTj%2BCuMPOP%2FMAGOqUBLTMwa2Bx6x0mLMk0pa2f5UTtqAHFr8xlTjMqQVRc1e%2F7Bo20I1ffNV0UKTpGOi%2Fzjjhfbp3mvl25kQk5hnGjsaN%2Byh5mLOZcNQDcYn2pdUydMgicoFpglWvdFjsnDGsn7YA1B3ioDmOQef%2FuPsSJ%2Fna1Z0eSMkxz%2FMnvybsEC%2Fw14pr8zh7HFjsI6Ux3akw7o8bdEMJDeGoH3Vdf1TXnPSzvqDsE&X-Amz-Signature=bef828b12975d0231f54c82c7a8e5253d2a4d40f37903c8fb6f2cd20dfd04b44&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z37EAQT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzFYA%2BQ%2B8ifZFOF4wBuUKXRfqhvjAyBaJyrdFVQph9VgIgSmnC4kgEPCVjcI4FEZ4ep85XKV0dtNa3VjAgAXvFC9cqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJV6Vvvzflx6DIGPyrcA4CxHKOwwLPbh19ivri0Cqd9oSdUVd5NwkQNFwE4EiIxAd5qKzCt6CYCnOlngccUz%2BhHgp4ygjsve6C03HJCZTXULOfXInXiKl%2BEwV5w4K1j5jx1zB5wlUHAFnkjdhuljvfoap1PoocVHyZQ2kduXKLruyENLzni7TdkfMfMautTpnY3VrD6KveguX4rVyRK%2FtaWSo9LjfsVEUizK6EbQW26XoiFUZr%2BE6MzKaXuHw09C0BMgJyBLxHJECpyJ13QL1AWYM3s9avhq5Kin3dTo3t9ZxcMkhhBnnPa6i16zkIPTHO7%2BdP838T15x14oNlS7LSmy7c1Bur0mVYdt7RbcHTxgYQS4yuHXN1M5zCqBcgtkrDInXbKu5D%2F%2BTmiP60I3mF3lt4G54HWAgtyBuDLhRn9B0%2FfO9Zfn56YSlAQ9yU%2Fj%2FVuV7oFLi4x%2FvjaASYM2Qa5rT8yfBHs8PR1FWV0GjibzTM4kJfHZIvNAUROefbIRtUkJO%2FasgOvF373BMNMWsryp%2F10Fe8Dav4gNYKhq2Cp64PoN6FYOJVCTt6cfNVlne96p9XsSbbCB%2Bnug3MucBLekgbHmz05jDLz5KmDgOmpreEC7W8vO2M4stASjN%2BJOFZihzC3wGPTj%2BCuMPOP%2FMAGOqUBLTMwa2Bx6x0mLMk0pa2f5UTtqAHFr8xlTjMqQVRc1e%2F7Bo20I1ffNV0UKTpGOi%2Fzjjhfbp3mvl25kQk5hnGjsaN%2Byh5mLOZcNQDcYn2pdUydMgicoFpglWvdFjsnDGsn7YA1B3ioDmOQef%2FuPsSJ%2Fna1Z0eSMkxz%2FMnvybsEC%2Fw14pr8zh7HFjsI6Ux3akw7o8bdEMJDeGoH3Vdf1TXnPSzvqDsE&X-Amz-Signature=ab83ccea509554642dcffd0889e6dbd0a1e076a235406f21078cc776020e065a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z37EAQT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzFYA%2BQ%2B8ifZFOF4wBuUKXRfqhvjAyBaJyrdFVQph9VgIgSmnC4kgEPCVjcI4FEZ4ep85XKV0dtNa3VjAgAXvFC9cqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJV6Vvvzflx6DIGPyrcA4CxHKOwwLPbh19ivri0Cqd9oSdUVd5NwkQNFwE4EiIxAd5qKzCt6CYCnOlngccUz%2BhHgp4ygjsve6C03HJCZTXULOfXInXiKl%2BEwV5w4K1j5jx1zB5wlUHAFnkjdhuljvfoap1PoocVHyZQ2kduXKLruyENLzni7TdkfMfMautTpnY3VrD6KveguX4rVyRK%2FtaWSo9LjfsVEUizK6EbQW26XoiFUZr%2BE6MzKaXuHw09C0BMgJyBLxHJECpyJ13QL1AWYM3s9avhq5Kin3dTo3t9ZxcMkhhBnnPa6i16zkIPTHO7%2BdP838T15x14oNlS7LSmy7c1Bur0mVYdt7RbcHTxgYQS4yuHXN1M5zCqBcgtkrDInXbKu5D%2F%2BTmiP60I3mF3lt4G54HWAgtyBuDLhRn9B0%2FfO9Zfn56YSlAQ9yU%2Fj%2FVuV7oFLi4x%2FvjaASYM2Qa5rT8yfBHs8PR1FWV0GjibzTM4kJfHZIvNAUROefbIRtUkJO%2FasgOvF373BMNMWsryp%2F10Fe8Dav4gNYKhq2Cp64PoN6FYOJVCTt6cfNVlne96p9XsSbbCB%2Bnug3MucBLekgbHmz05jDLz5KmDgOmpreEC7W8vO2M4stASjN%2BJOFZihzC3wGPTj%2BCuMPOP%2FMAGOqUBLTMwa2Bx6x0mLMk0pa2f5UTtqAHFr8xlTjMqQVRc1e%2F7Bo20I1ffNV0UKTpGOi%2Fzjjhfbp3mvl25kQk5hnGjsaN%2Byh5mLOZcNQDcYn2pdUydMgicoFpglWvdFjsnDGsn7YA1B3ioDmOQef%2FuPsSJ%2Fna1Z0eSMkxz%2FMnvybsEC%2Fw14pr8zh7HFjsI6Ux3akw7o8bdEMJDeGoH3Vdf1TXnPSzvqDsE&X-Amz-Signature=6cd70b1090f9e549f630b6c5a5d49a7584ad53adbb1bbf8e0adf6825f547e362&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z37EAQT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzFYA%2BQ%2B8ifZFOF4wBuUKXRfqhvjAyBaJyrdFVQph9VgIgSmnC4kgEPCVjcI4FEZ4ep85XKV0dtNa3VjAgAXvFC9cqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJV6Vvvzflx6DIGPyrcA4CxHKOwwLPbh19ivri0Cqd9oSdUVd5NwkQNFwE4EiIxAd5qKzCt6CYCnOlngccUz%2BhHgp4ygjsve6C03HJCZTXULOfXInXiKl%2BEwV5w4K1j5jx1zB5wlUHAFnkjdhuljvfoap1PoocVHyZQ2kduXKLruyENLzni7TdkfMfMautTpnY3VrD6KveguX4rVyRK%2FtaWSo9LjfsVEUizK6EbQW26XoiFUZr%2BE6MzKaXuHw09C0BMgJyBLxHJECpyJ13QL1AWYM3s9avhq5Kin3dTo3t9ZxcMkhhBnnPa6i16zkIPTHO7%2BdP838T15x14oNlS7LSmy7c1Bur0mVYdt7RbcHTxgYQS4yuHXN1M5zCqBcgtkrDInXbKu5D%2F%2BTmiP60I3mF3lt4G54HWAgtyBuDLhRn9B0%2FfO9Zfn56YSlAQ9yU%2Fj%2FVuV7oFLi4x%2FvjaASYM2Qa5rT8yfBHs8PR1FWV0GjibzTM4kJfHZIvNAUROefbIRtUkJO%2FasgOvF373BMNMWsryp%2F10Fe8Dav4gNYKhq2Cp64PoN6FYOJVCTt6cfNVlne96p9XsSbbCB%2Bnug3MucBLekgbHmz05jDLz5KmDgOmpreEC7W8vO2M4stASjN%2BJOFZihzC3wGPTj%2BCuMPOP%2FMAGOqUBLTMwa2Bx6x0mLMk0pa2f5UTtqAHFr8xlTjMqQVRc1e%2F7Bo20I1ffNV0UKTpGOi%2Fzjjhfbp3mvl25kQk5hnGjsaN%2Byh5mLOZcNQDcYn2pdUydMgicoFpglWvdFjsnDGsn7YA1B3ioDmOQef%2FuPsSJ%2Fna1Z0eSMkxz%2FMnvybsEC%2Fw14pr8zh7HFjsI6Ux3akw7o8bdEMJDeGoH3Vdf1TXnPSzvqDsE&X-Amz-Signature=9cddca7d74b801bd6790d35f20e6146b5e5693b8122050ba7e91ae42346917ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

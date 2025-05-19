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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSNLQ6P%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrhaSL5Hx9fN3QX68Sc7sWAdAg4w%2FlcEerWtZKpD5CkAIhAKjNUfDfHTP1gKi0vYzCJQyWMOB05qAxQAIDl%2FM%2FInV0KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtI7E7X0HwGSR%2FJqYq3AN7PXdJqQcMU1FlON9xZfzlouMd2jm6xPR6h2P5ukBwcKsgmjR9cTZDj2x9Xa6i%2F6W9wmlggq7%2B5dBl%2BtEr9NLhAQzO4L8LZNGdiyw3hXFTyHEnXtAyRhSR8X%2BjKOU95hEZnZibg815hftupuihbq0L9MknOcLMLA5Uohhkr0OA0%2FXxvezLWIK%2FpC7eodV0wcoCeVCU7frF7bRv5e23jOdDKiJzEcR6mMWUgCZxeKEedMPN%2FkDkf4E1sRWXQ3v2VR7xemIKaBQA51JMpMbIKgPbNaZlTVwNpdou7WkKoVUTzy3TotfhjDeJL%2Fi7WuNceXT7B4b0gk8EwQLycZt8EXK0U8CIhzJ0qfuM%2BqB%2FZaC9P4h0WtVs3RPMZ%2BubttwHiZpZ2Dq5wXQKi9a7lZi99HjqTjx73I6Jr8%2FEPGC0u567NhjQZu3ybWN3vh%2FUBXXzUZWIhMuiNHuX08PKB3NRSfvs%2FdZH6yiKY3pNhYftOb4t0gXOgt41p1YU3T7ZqwuJiFfDkw%2BZgg8%2B1EoGEW3tT2QZrTeWxCNIhi7hrZBHKpyoFDNZ3xv%2Beqg0EMAiHiA61uz6NHUBr8BfuaAUFlxlUZkxBhH8OCOGvnCQVEDokLX876eMIupAR%2Ff8dvwHtzCs3arBBjqkAZP6E3Wvgr8gxyEXAoQO1YPj7gkF25mWk%2FDNN8bm9R0juWxt0TQCwQahua%2BHz%2Fhh%2BgcO2ClnEikGb5%2BxRS71BP%2BUHUTE2toag6uXiQYalLyl30Vgh6dpcQz1Ci7ZnYQXaLuNrJDm%2FnhT9kMOP%2Bv6A0jicBgNVVEKNizkDM%2F%2FhNTOLrz9wwIrZSquATXIKW4Uampc2PipwJWcfpW1m6y7Xok4Qaak&X-Amz-Signature=8a517ce1f967be06955a834733e5e3185d04833613f9a324ffea0f8658fcfab0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSNLQ6P%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrhaSL5Hx9fN3QX68Sc7sWAdAg4w%2FlcEerWtZKpD5CkAIhAKjNUfDfHTP1gKi0vYzCJQyWMOB05qAxQAIDl%2FM%2FInV0KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtI7E7X0HwGSR%2FJqYq3AN7PXdJqQcMU1FlON9xZfzlouMd2jm6xPR6h2P5ukBwcKsgmjR9cTZDj2x9Xa6i%2F6W9wmlggq7%2B5dBl%2BtEr9NLhAQzO4L8LZNGdiyw3hXFTyHEnXtAyRhSR8X%2BjKOU95hEZnZibg815hftupuihbq0L9MknOcLMLA5Uohhkr0OA0%2FXxvezLWIK%2FpC7eodV0wcoCeVCU7frF7bRv5e23jOdDKiJzEcR6mMWUgCZxeKEedMPN%2FkDkf4E1sRWXQ3v2VR7xemIKaBQA51JMpMbIKgPbNaZlTVwNpdou7WkKoVUTzy3TotfhjDeJL%2Fi7WuNceXT7B4b0gk8EwQLycZt8EXK0U8CIhzJ0qfuM%2BqB%2FZaC9P4h0WtVs3RPMZ%2BubttwHiZpZ2Dq5wXQKi9a7lZi99HjqTjx73I6Jr8%2FEPGC0u567NhjQZu3ybWN3vh%2FUBXXzUZWIhMuiNHuX08PKB3NRSfvs%2FdZH6yiKY3pNhYftOb4t0gXOgt41p1YU3T7ZqwuJiFfDkw%2BZgg8%2B1EoGEW3tT2QZrTeWxCNIhi7hrZBHKpyoFDNZ3xv%2Beqg0EMAiHiA61uz6NHUBr8BfuaAUFlxlUZkxBhH8OCOGvnCQVEDokLX876eMIupAR%2Ff8dvwHtzCs3arBBjqkAZP6E3Wvgr8gxyEXAoQO1YPj7gkF25mWk%2FDNN8bm9R0juWxt0TQCwQahua%2BHz%2Fhh%2BgcO2ClnEikGb5%2BxRS71BP%2BUHUTE2toag6uXiQYalLyl30Vgh6dpcQz1Ci7ZnYQXaLuNrJDm%2FnhT9kMOP%2Bv6A0jicBgNVVEKNizkDM%2F%2FhNTOLrz9wwIrZSquATXIKW4Uampc2PipwJWcfpW1m6y7Xok4Qaak&X-Amz-Signature=f6dd3b33a60396478c619ae034dbb14b9c32cd71b81565cd21deaf4a4fbc4ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSNLQ6P%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrhaSL5Hx9fN3QX68Sc7sWAdAg4w%2FlcEerWtZKpD5CkAIhAKjNUfDfHTP1gKi0vYzCJQyWMOB05qAxQAIDl%2FM%2FInV0KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtI7E7X0HwGSR%2FJqYq3AN7PXdJqQcMU1FlON9xZfzlouMd2jm6xPR6h2P5ukBwcKsgmjR9cTZDj2x9Xa6i%2F6W9wmlggq7%2B5dBl%2BtEr9NLhAQzO4L8LZNGdiyw3hXFTyHEnXtAyRhSR8X%2BjKOU95hEZnZibg815hftupuihbq0L9MknOcLMLA5Uohhkr0OA0%2FXxvezLWIK%2FpC7eodV0wcoCeVCU7frF7bRv5e23jOdDKiJzEcR6mMWUgCZxeKEedMPN%2FkDkf4E1sRWXQ3v2VR7xemIKaBQA51JMpMbIKgPbNaZlTVwNpdou7WkKoVUTzy3TotfhjDeJL%2Fi7WuNceXT7B4b0gk8EwQLycZt8EXK0U8CIhzJ0qfuM%2BqB%2FZaC9P4h0WtVs3RPMZ%2BubttwHiZpZ2Dq5wXQKi9a7lZi99HjqTjx73I6Jr8%2FEPGC0u567NhjQZu3ybWN3vh%2FUBXXzUZWIhMuiNHuX08PKB3NRSfvs%2FdZH6yiKY3pNhYftOb4t0gXOgt41p1YU3T7ZqwuJiFfDkw%2BZgg8%2B1EoGEW3tT2QZrTeWxCNIhi7hrZBHKpyoFDNZ3xv%2Beqg0EMAiHiA61uz6NHUBr8BfuaAUFlxlUZkxBhH8OCOGvnCQVEDokLX876eMIupAR%2Ff8dvwHtzCs3arBBjqkAZP6E3Wvgr8gxyEXAoQO1YPj7gkF25mWk%2FDNN8bm9R0juWxt0TQCwQahua%2BHz%2Fhh%2BgcO2ClnEikGb5%2BxRS71BP%2BUHUTE2toag6uXiQYalLyl30Vgh6dpcQz1Ci7ZnYQXaLuNrJDm%2FnhT9kMOP%2Bv6A0jicBgNVVEKNizkDM%2F%2FhNTOLrz9wwIrZSquATXIKW4Uampc2PipwJWcfpW1m6y7Xok4Qaak&X-Amz-Signature=f51c90f6b1d1abb047b42e5667cdf798e3b5f2697ceae90c96901a730fb8fe60&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSNLQ6P%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrhaSL5Hx9fN3QX68Sc7sWAdAg4w%2FlcEerWtZKpD5CkAIhAKjNUfDfHTP1gKi0vYzCJQyWMOB05qAxQAIDl%2FM%2FInV0KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtI7E7X0HwGSR%2FJqYq3AN7PXdJqQcMU1FlON9xZfzlouMd2jm6xPR6h2P5ukBwcKsgmjR9cTZDj2x9Xa6i%2F6W9wmlggq7%2B5dBl%2BtEr9NLhAQzO4L8LZNGdiyw3hXFTyHEnXtAyRhSR8X%2BjKOU95hEZnZibg815hftupuihbq0L9MknOcLMLA5Uohhkr0OA0%2FXxvezLWIK%2FpC7eodV0wcoCeVCU7frF7bRv5e23jOdDKiJzEcR6mMWUgCZxeKEedMPN%2FkDkf4E1sRWXQ3v2VR7xemIKaBQA51JMpMbIKgPbNaZlTVwNpdou7WkKoVUTzy3TotfhjDeJL%2Fi7WuNceXT7B4b0gk8EwQLycZt8EXK0U8CIhzJ0qfuM%2BqB%2FZaC9P4h0WtVs3RPMZ%2BubttwHiZpZ2Dq5wXQKi9a7lZi99HjqTjx73I6Jr8%2FEPGC0u567NhjQZu3ybWN3vh%2FUBXXzUZWIhMuiNHuX08PKB3NRSfvs%2FdZH6yiKY3pNhYftOb4t0gXOgt41p1YU3T7ZqwuJiFfDkw%2BZgg8%2B1EoGEW3tT2QZrTeWxCNIhi7hrZBHKpyoFDNZ3xv%2Beqg0EMAiHiA61uz6NHUBr8BfuaAUFlxlUZkxBhH8OCOGvnCQVEDokLX876eMIupAR%2Ff8dvwHtzCs3arBBjqkAZP6E3Wvgr8gxyEXAoQO1YPj7gkF25mWk%2FDNN8bm9R0juWxt0TQCwQahua%2BHz%2Fhh%2BgcO2ClnEikGb5%2BxRS71BP%2BUHUTE2toag6uXiQYalLyl30Vgh6dpcQz1Ci7ZnYQXaLuNrJDm%2FnhT9kMOP%2Bv6A0jicBgNVVEKNizkDM%2F%2FhNTOLrz9wwIrZSquATXIKW4Uampc2PipwJWcfpW1m6y7Xok4Qaak&X-Amz-Signature=2c55d1e7cdb6d382dcd7f1ecbedc51dc39946809f2ea2036c59eb91e517b3b43&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSNLQ6P%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrhaSL5Hx9fN3QX68Sc7sWAdAg4w%2FlcEerWtZKpD5CkAIhAKjNUfDfHTP1gKi0vYzCJQyWMOB05qAxQAIDl%2FM%2FInV0KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtI7E7X0HwGSR%2FJqYq3AN7PXdJqQcMU1FlON9xZfzlouMd2jm6xPR6h2P5ukBwcKsgmjR9cTZDj2x9Xa6i%2F6W9wmlggq7%2B5dBl%2BtEr9NLhAQzO4L8LZNGdiyw3hXFTyHEnXtAyRhSR8X%2BjKOU95hEZnZibg815hftupuihbq0L9MknOcLMLA5Uohhkr0OA0%2FXxvezLWIK%2FpC7eodV0wcoCeVCU7frF7bRv5e23jOdDKiJzEcR6mMWUgCZxeKEedMPN%2FkDkf4E1sRWXQ3v2VR7xemIKaBQA51JMpMbIKgPbNaZlTVwNpdou7WkKoVUTzy3TotfhjDeJL%2Fi7WuNceXT7B4b0gk8EwQLycZt8EXK0U8CIhzJ0qfuM%2BqB%2FZaC9P4h0WtVs3RPMZ%2BubttwHiZpZ2Dq5wXQKi9a7lZi99HjqTjx73I6Jr8%2FEPGC0u567NhjQZu3ybWN3vh%2FUBXXzUZWIhMuiNHuX08PKB3NRSfvs%2FdZH6yiKY3pNhYftOb4t0gXOgt41p1YU3T7ZqwuJiFfDkw%2BZgg8%2B1EoGEW3tT2QZrTeWxCNIhi7hrZBHKpyoFDNZ3xv%2Beqg0EMAiHiA61uz6NHUBr8BfuaAUFlxlUZkxBhH8OCOGvnCQVEDokLX876eMIupAR%2Ff8dvwHtzCs3arBBjqkAZP6E3Wvgr8gxyEXAoQO1YPj7gkF25mWk%2FDNN8bm9R0juWxt0TQCwQahua%2BHz%2Fhh%2BgcO2ClnEikGb5%2BxRS71BP%2BUHUTE2toag6uXiQYalLyl30Vgh6dpcQz1Ci7ZnYQXaLuNrJDm%2FnhT9kMOP%2Bv6A0jicBgNVVEKNizkDM%2F%2FhNTOLrz9wwIrZSquATXIKW4Uampc2PipwJWcfpW1m6y7Xok4Qaak&X-Amz-Signature=0f53b661d01e395db6ce7db93a2f767ab95100bb8c02e95bc4bc477827be5301&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSNLQ6P%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrhaSL5Hx9fN3QX68Sc7sWAdAg4w%2FlcEerWtZKpD5CkAIhAKjNUfDfHTP1gKi0vYzCJQyWMOB05qAxQAIDl%2FM%2FInV0KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtI7E7X0HwGSR%2FJqYq3AN7PXdJqQcMU1FlON9xZfzlouMd2jm6xPR6h2P5ukBwcKsgmjR9cTZDj2x9Xa6i%2F6W9wmlggq7%2B5dBl%2BtEr9NLhAQzO4L8LZNGdiyw3hXFTyHEnXtAyRhSR8X%2BjKOU95hEZnZibg815hftupuihbq0L9MknOcLMLA5Uohhkr0OA0%2FXxvezLWIK%2FpC7eodV0wcoCeVCU7frF7bRv5e23jOdDKiJzEcR6mMWUgCZxeKEedMPN%2FkDkf4E1sRWXQ3v2VR7xemIKaBQA51JMpMbIKgPbNaZlTVwNpdou7WkKoVUTzy3TotfhjDeJL%2Fi7WuNceXT7B4b0gk8EwQLycZt8EXK0U8CIhzJ0qfuM%2BqB%2FZaC9P4h0WtVs3RPMZ%2BubttwHiZpZ2Dq5wXQKi9a7lZi99HjqTjx73I6Jr8%2FEPGC0u567NhjQZu3ybWN3vh%2FUBXXzUZWIhMuiNHuX08PKB3NRSfvs%2FdZH6yiKY3pNhYftOb4t0gXOgt41p1YU3T7ZqwuJiFfDkw%2BZgg8%2B1EoGEW3tT2QZrTeWxCNIhi7hrZBHKpyoFDNZ3xv%2Beqg0EMAiHiA61uz6NHUBr8BfuaAUFlxlUZkxBhH8OCOGvnCQVEDokLX876eMIupAR%2Ff8dvwHtzCs3arBBjqkAZP6E3Wvgr8gxyEXAoQO1YPj7gkF25mWk%2FDNN8bm9R0juWxt0TQCwQahua%2BHz%2Fhh%2BgcO2ClnEikGb5%2BxRS71BP%2BUHUTE2toag6uXiQYalLyl30Vgh6dpcQz1Ci7ZnYQXaLuNrJDm%2FnhT9kMOP%2Bv6A0jicBgNVVEKNizkDM%2F%2FhNTOLrz9wwIrZSquATXIKW4Uampc2PipwJWcfpW1m6y7Xok4Qaak&X-Amz-Signature=de1c78b1444f65e3552f184478dd721140b049655571c1a69e81b999b3f80a48&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSNLQ6P%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrhaSL5Hx9fN3QX68Sc7sWAdAg4w%2FlcEerWtZKpD5CkAIhAKjNUfDfHTP1gKi0vYzCJQyWMOB05qAxQAIDl%2FM%2FInV0KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtI7E7X0HwGSR%2FJqYq3AN7PXdJqQcMU1FlON9xZfzlouMd2jm6xPR6h2P5ukBwcKsgmjR9cTZDj2x9Xa6i%2F6W9wmlggq7%2B5dBl%2BtEr9NLhAQzO4L8LZNGdiyw3hXFTyHEnXtAyRhSR8X%2BjKOU95hEZnZibg815hftupuihbq0L9MknOcLMLA5Uohhkr0OA0%2FXxvezLWIK%2FpC7eodV0wcoCeVCU7frF7bRv5e23jOdDKiJzEcR6mMWUgCZxeKEedMPN%2FkDkf4E1sRWXQ3v2VR7xemIKaBQA51JMpMbIKgPbNaZlTVwNpdou7WkKoVUTzy3TotfhjDeJL%2Fi7WuNceXT7B4b0gk8EwQLycZt8EXK0U8CIhzJ0qfuM%2BqB%2FZaC9P4h0WtVs3RPMZ%2BubttwHiZpZ2Dq5wXQKi9a7lZi99HjqTjx73I6Jr8%2FEPGC0u567NhjQZu3ybWN3vh%2FUBXXzUZWIhMuiNHuX08PKB3NRSfvs%2FdZH6yiKY3pNhYftOb4t0gXOgt41p1YU3T7ZqwuJiFfDkw%2BZgg8%2B1EoGEW3tT2QZrTeWxCNIhi7hrZBHKpyoFDNZ3xv%2Beqg0EMAiHiA61uz6NHUBr8BfuaAUFlxlUZkxBhH8OCOGvnCQVEDokLX876eMIupAR%2Ff8dvwHtzCs3arBBjqkAZP6E3Wvgr8gxyEXAoQO1YPj7gkF25mWk%2FDNN8bm9R0juWxt0TQCwQahua%2BHz%2Fhh%2BgcO2ClnEikGb5%2BxRS71BP%2BUHUTE2toag6uXiQYalLyl30Vgh6dpcQz1Ci7ZnYQXaLuNrJDm%2FnhT9kMOP%2Bv6A0jicBgNVVEKNizkDM%2F%2FhNTOLrz9wwIrZSquATXIKW4Uampc2PipwJWcfpW1m6y7Xok4Qaak&X-Amz-Signature=2f066c54faeb1082c170818328489c517e0a025c9c65c0c60f96b4979968678d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

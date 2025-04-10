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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAKUDNR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCdI8DOo5mMMpp6ydNl7eGWmg20oWahSC%2BdV8N1fJxlowIhAL7c3NzrbHTr2bjjySxKi3bjNoqCroax%2BpW3EuhB6nCOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGNp%2FtCLLXnKiejxIq3AMUnqrKWqNxkxW8bkShbmQ8Yh1S3OeNMwdU4dZ17efe0oeBjYQ65EKztoMuFKO61yOKX1500VDP2Icq3s3ppAAhaPvRVhfJ3x5xjS%2BLUPmA6GUcJPTFViW%2FUhulq4wslQrfzpOev752X9MJ%2FGzbMxdtjtaBz2CQVBQETRIQ%2B77rQ44992nfGWxoYsqMzex7ycyqHNrl1q8vD4wI97y0F3SA0HmLN9mpW85YNRwvcde1jNoVNoYx1rLmspwvdq%2FQ4c6xHqDCgm1UviiHYAxGflsK%2BJY6jBQ7QVfCIAB7NWZsZtBe%2BVTTinqSRQ1Am5V%2BXeq%2BuTQfDyWA4yfbRDpLOAK%2FizdEM%2BX%2Bl7%2FFba9oNj41NRHCvwtYrpr1w9jA9zi8i19o6JT7txjGWfMxvAVa7zS94iLRV4wOtL3o1JhrR5MWPMqkEyFfamdo2oBgWYxL1uIcTjrZe%2Bm1Ki%2FjUMCmrFG2fka8Gwx0v4ChckCSAtfWSfsNoB%2Fh4wo0eN3rUUjieRKQ8HxkMTziIX0r1WCjirMm8IxxUaHrGIDvNjb%2BDRiNyR5Yh7ly47Yidcffq6%2F51C%2FfDhJB1J%2FvEsRofZ60yXL2uq1Z9BnIerPXMTFLGrsgu9pXATXYpUlszuPZYTDwpN6%2FBjqkAVl%2BtREjNvjQixuih%2Bg6i%2FO2zLaHiJv1uoyTQhxJVmak71oo%2BPjAY4ZMaKuFGclnMg7RxeK6m%2BhPk9sXw7s%2Fx5WSay%2BdDiZNjnjGWpMsqZN3i3hRF%2FLgvrEKgewGUau2t6U52IvCJBYpnTafI0kbojTGZZP0DtGVMvRMuf29bqGjGx5DjI%2FwsyiT%2FQVFC96xzXcIzBHWBqYElkuKBgwDn0ngIzvI&X-Amz-Signature=1d12dc3822550d5c55178ecbc719da48861017e2cb3c82e69e36490a6d6cc7bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAKUDNR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCdI8DOo5mMMpp6ydNl7eGWmg20oWahSC%2BdV8N1fJxlowIhAL7c3NzrbHTr2bjjySxKi3bjNoqCroax%2BpW3EuhB6nCOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGNp%2FtCLLXnKiejxIq3AMUnqrKWqNxkxW8bkShbmQ8Yh1S3OeNMwdU4dZ17efe0oeBjYQ65EKztoMuFKO61yOKX1500VDP2Icq3s3ppAAhaPvRVhfJ3x5xjS%2BLUPmA6GUcJPTFViW%2FUhulq4wslQrfzpOev752X9MJ%2FGzbMxdtjtaBz2CQVBQETRIQ%2B77rQ44992nfGWxoYsqMzex7ycyqHNrl1q8vD4wI97y0F3SA0HmLN9mpW85YNRwvcde1jNoVNoYx1rLmspwvdq%2FQ4c6xHqDCgm1UviiHYAxGflsK%2BJY6jBQ7QVfCIAB7NWZsZtBe%2BVTTinqSRQ1Am5V%2BXeq%2BuTQfDyWA4yfbRDpLOAK%2FizdEM%2BX%2Bl7%2FFba9oNj41NRHCvwtYrpr1w9jA9zi8i19o6JT7txjGWfMxvAVa7zS94iLRV4wOtL3o1JhrR5MWPMqkEyFfamdo2oBgWYxL1uIcTjrZe%2Bm1Ki%2FjUMCmrFG2fka8Gwx0v4ChckCSAtfWSfsNoB%2Fh4wo0eN3rUUjieRKQ8HxkMTziIX0r1WCjirMm8IxxUaHrGIDvNjb%2BDRiNyR5Yh7ly47Yidcffq6%2F51C%2FfDhJB1J%2FvEsRofZ60yXL2uq1Z9BnIerPXMTFLGrsgu9pXATXYpUlszuPZYTDwpN6%2FBjqkAVl%2BtREjNvjQixuih%2Bg6i%2FO2zLaHiJv1uoyTQhxJVmak71oo%2BPjAY4ZMaKuFGclnMg7RxeK6m%2BhPk9sXw7s%2Fx5WSay%2BdDiZNjnjGWpMsqZN3i3hRF%2FLgvrEKgewGUau2t6U52IvCJBYpnTafI0kbojTGZZP0DtGVMvRMuf29bqGjGx5DjI%2FwsyiT%2FQVFC96xzXcIzBHWBqYElkuKBgwDn0ngIzvI&X-Amz-Signature=f32e1b78f7d4c3e1e5fe5e3f9128e67f23924d3293fc2e9076a59e1d88f7df72&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAKUDNR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCdI8DOo5mMMpp6ydNl7eGWmg20oWahSC%2BdV8N1fJxlowIhAL7c3NzrbHTr2bjjySxKi3bjNoqCroax%2BpW3EuhB6nCOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGNp%2FtCLLXnKiejxIq3AMUnqrKWqNxkxW8bkShbmQ8Yh1S3OeNMwdU4dZ17efe0oeBjYQ65EKztoMuFKO61yOKX1500VDP2Icq3s3ppAAhaPvRVhfJ3x5xjS%2BLUPmA6GUcJPTFViW%2FUhulq4wslQrfzpOev752X9MJ%2FGzbMxdtjtaBz2CQVBQETRIQ%2B77rQ44992nfGWxoYsqMzex7ycyqHNrl1q8vD4wI97y0F3SA0HmLN9mpW85YNRwvcde1jNoVNoYx1rLmspwvdq%2FQ4c6xHqDCgm1UviiHYAxGflsK%2BJY6jBQ7QVfCIAB7NWZsZtBe%2BVTTinqSRQ1Am5V%2BXeq%2BuTQfDyWA4yfbRDpLOAK%2FizdEM%2BX%2Bl7%2FFba9oNj41NRHCvwtYrpr1w9jA9zi8i19o6JT7txjGWfMxvAVa7zS94iLRV4wOtL3o1JhrR5MWPMqkEyFfamdo2oBgWYxL1uIcTjrZe%2Bm1Ki%2FjUMCmrFG2fka8Gwx0v4ChckCSAtfWSfsNoB%2Fh4wo0eN3rUUjieRKQ8HxkMTziIX0r1WCjirMm8IxxUaHrGIDvNjb%2BDRiNyR5Yh7ly47Yidcffq6%2F51C%2FfDhJB1J%2FvEsRofZ60yXL2uq1Z9BnIerPXMTFLGrsgu9pXATXYpUlszuPZYTDwpN6%2FBjqkAVl%2BtREjNvjQixuih%2Bg6i%2FO2zLaHiJv1uoyTQhxJVmak71oo%2BPjAY4ZMaKuFGclnMg7RxeK6m%2BhPk9sXw7s%2Fx5WSay%2BdDiZNjnjGWpMsqZN3i3hRF%2FLgvrEKgewGUau2t6U52IvCJBYpnTafI0kbojTGZZP0DtGVMvRMuf29bqGjGx5DjI%2FwsyiT%2FQVFC96xzXcIzBHWBqYElkuKBgwDn0ngIzvI&X-Amz-Signature=88af8eb33d783f7e5de7462fc31fb72a5561bd54e5c5756b1d347eee65ed62e1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAKUDNR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCdI8DOo5mMMpp6ydNl7eGWmg20oWahSC%2BdV8N1fJxlowIhAL7c3NzrbHTr2bjjySxKi3bjNoqCroax%2BpW3EuhB6nCOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGNp%2FtCLLXnKiejxIq3AMUnqrKWqNxkxW8bkShbmQ8Yh1S3OeNMwdU4dZ17efe0oeBjYQ65EKztoMuFKO61yOKX1500VDP2Icq3s3ppAAhaPvRVhfJ3x5xjS%2BLUPmA6GUcJPTFViW%2FUhulq4wslQrfzpOev752X9MJ%2FGzbMxdtjtaBz2CQVBQETRIQ%2B77rQ44992nfGWxoYsqMzex7ycyqHNrl1q8vD4wI97y0F3SA0HmLN9mpW85YNRwvcde1jNoVNoYx1rLmspwvdq%2FQ4c6xHqDCgm1UviiHYAxGflsK%2BJY6jBQ7QVfCIAB7NWZsZtBe%2BVTTinqSRQ1Am5V%2BXeq%2BuTQfDyWA4yfbRDpLOAK%2FizdEM%2BX%2Bl7%2FFba9oNj41NRHCvwtYrpr1w9jA9zi8i19o6JT7txjGWfMxvAVa7zS94iLRV4wOtL3o1JhrR5MWPMqkEyFfamdo2oBgWYxL1uIcTjrZe%2Bm1Ki%2FjUMCmrFG2fka8Gwx0v4ChckCSAtfWSfsNoB%2Fh4wo0eN3rUUjieRKQ8HxkMTziIX0r1WCjirMm8IxxUaHrGIDvNjb%2BDRiNyR5Yh7ly47Yidcffq6%2F51C%2FfDhJB1J%2FvEsRofZ60yXL2uq1Z9BnIerPXMTFLGrsgu9pXATXYpUlszuPZYTDwpN6%2FBjqkAVl%2BtREjNvjQixuih%2Bg6i%2FO2zLaHiJv1uoyTQhxJVmak71oo%2BPjAY4ZMaKuFGclnMg7RxeK6m%2BhPk9sXw7s%2Fx5WSay%2BdDiZNjnjGWpMsqZN3i3hRF%2FLgvrEKgewGUau2t6U52IvCJBYpnTafI0kbojTGZZP0DtGVMvRMuf29bqGjGx5DjI%2FwsyiT%2FQVFC96xzXcIzBHWBqYElkuKBgwDn0ngIzvI&X-Amz-Signature=26519ee58b86a11d7cba27498560915a0084fe69b1ffd966914198393b29e0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAKUDNR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCdI8DOo5mMMpp6ydNl7eGWmg20oWahSC%2BdV8N1fJxlowIhAL7c3NzrbHTr2bjjySxKi3bjNoqCroax%2BpW3EuhB6nCOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGNp%2FtCLLXnKiejxIq3AMUnqrKWqNxkxW8bkShbmQ8Yh1S3OeNMwdU4dZ17efe0oeBjYQ65EKztoMuFKO61yOKX1500VDP2Icq3s3ppAAhaPvRVhfJ3x5xjS%2BLUPmA6GUcJPTFViW%2FUhulq4wslQrfzpOev752X9MJ%2FGzbMxdtjtaBz2CQVBQETRIQ%2B77rQ44992nfGWxoYsqMzex7ycyqHNrl1q8vD4wI97y0F3SA0HmLN9mpW85YNRwvcde1jNoVNoYx1rLmspwvdq%2FQ4c6xHqDCgm1UviiHYAxGflsK%2BJY6jBQ7QVfCIAB7NWZsZtBe%2BVTTinqSRQ1Am5V%2BXeq%2BuTQfDyWA4yfbRDpLOAK%2FizdEM%2BX%2Bl7%2FFba9oNj41NRHCvwtYrpr1w9jA9zi8i19o6JT7txjGWfMxvAVa7zS94iLRV4wOtL3o1JhrR5MWPMqkEyFfamdo2oBgWYxL1uIcTjrZe%2Bm1Ki%2FjUMCmrFG2fka8Gwx0v4ChckCSAtfWSfsNoB%2Fh4wo0eN3rUUjieRKQ8HxkMTziIX0r1WCjirMm8IxxUaHrGIDvNjb%2BDRiNyR5Yh7ly47Yidcffq6%2F51C%2FfDhJB1J%2FvEsRofZ60yXL2uq1Z9BnIerPXMTFLGrsgu9pXATXYpUlszuPZYTDwpN6%2FBjqkAVl%2BtREjNvjQixuih%2Bg6i%2FO2zLaHiJv1uoyTQhxJVmak71oo%2BPjAY4ZMaKuFGclnMg7RxeK6m%2BhPk9sXw7s%2Fx5WSay%2BdDiZNjnjGWpMsqZN3i3hRF%2FLgvrEKgewGUau2t6U52IvCJBYpnTafI0kbojTGZZP0DtGVMvRMuf29bqGjGx5DjI%2FwsyiT%2FQVFC96xzXcIzBHWBqYElkuKBgwDn0ngIzvI&X-Amz-Signature=b2fe6d68a5c7556cf5a0953fd20333ee7b974e2fd9e19148648b3d46cfeb6003&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAKUDNR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCdI8DOo5mMMpp6ydNl7eGWmg20oWahSC%2BdV8N1fJxlowIhAL7c3NzrbHTr2bjjySxKi3bjNoqCroax%2BpW3EuhB6nCOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGNp%2FtCLLXnKiejxIq3AMUnqrKWqNxkxW8bkShbmQ8Yh1S3OeNMwdU4dZ17efe0oeBjYQ65EKztoMuFKO61yOKX1500VDP2Icq3s3ppAAhaPvRVhfJ3x5xjS%2BLUPmA6GUcJPTFViW%2FUhulq4wslQrfzpOev752X9MJ%2FGzbMxdtjtaBz2CQVBQETRIQ%2B77rQ44992nfGWxoYsqMzex7ycyqHNrl1q8vD4wI97y0F3SA0HmLN9mpW85YNRwvcde1jNoVNoYx1rLmspwvdq%2FQ4c6xHqDCgm1UviiHYAxGflsK%2BJY6jBQ7QVfCIAB7NWZsZtBe%2BVTTinqSRQ1Am5V%2BXeq%2BuTQfDyWA4yfbRDpLOAK%2FizdEM%2BX%2Bl7%2FFba9oNj41NRHCvwtYrpr1w9jA9zi8i19o6JT7txjGWfMxvAVa7zS94iLRV4wOtL3o1JhrR5MWPMqkEyFfamdo2oBgWYxL1uIcTjrZe%2Bm1Ki%2FjUMCmrFG2fka8Gwx0v4ChckCSAtfWSfsNoB%2Fh4wo0eN3rUUjieRKQ8HxkMTziIX0r1WCjirMm8IxxUaHrGIDvNjb%2BDRiNyR5Yh7ly47Yidcffq6%2F51C%2FfDhJB1J%2FvEsRofZ60yXL2uq1Z9BnIerPXMTFLGrsgu9pXATXYpUlszuPZYTDwpN6%2FBjqkAVl%2BtREjNvjQixuih%2Bg6i%2FO2zLaHiJv1uoyTQhxJVmak71oo%2BPjAY4ZMaKuFGclnMg7RxeK6m%2BhPk9sXw7s%2Fx5WSay%2BdDiZNjnjGWpMsqZN3i3hRF%2FLgvrEKgewGUau2t6U52IvCJBYpnTafI0kbojTGZZP0DtGVMvRMuf29bqGjGx5DjI%2FwsyiT%2FQVFC96xzXcIzBHWBqYElkuKBgwDn0ngIzvI&X-Amz-Signature=590a9b83e6c72691c94b39905db79f0ca7281fbbdb15b42dd965e381c759d8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAKUDNR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCdI8DOo5mMMpp6ydNl7eGWmg20oWahSC%2BdV8N1fJxlowIhAL7c3NzrbHTr2bjjySxKi3bjNoqCroax%2BpW3EuhB6nCOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGNp%2FtCLLXnKiejxIq3AMUnqrKWqNxkxW8bkShbmQ8Yh1S3OeNMwdU4dZ17efe0oeBjYQ65EKztoMuFKO61yOKX1500VDP2Icq3s3ppAAhaPvRVhfJ3x5xjS%2BLUPmA6GUcJPTFViW%2FUhulq4wslQrfzpOev752X9MJ%2FGzbMxdtjtaBz2CQVBQETRIQ%2B77rQ44992nfGWxoYsqMzex7ycyqHNrl1q8vD4wI97y0F3SA0HmLN9mpW85YNRwvcde1jNoVNoYx1rLmspwvdq%2FQ4c6xHqDCgm1UviiHYAxGflsK%2BJY6jBQ7QVfCIAB7NWZsZtBe%2BVTTinqSRQ1Am5V%2BXeq%2BuTQfDyWA4yfbRDpLOAK%2FizdEM%2BX%2Bl7%2FFba9oNj41NRHCvwtYrpr1w9jA9zi8i19o6JT7txjGWfMxvAVa7zS94iLRV4wOtL3o1JhrR5MWPMqkEyFfamdo2oBgWYxL1uIcTjrZe%2Bm1Ki%2FjUMCmrFG2fka8Gwx0v4ChckCSAtfWSfsNoB%2Fh4wo0eN3rUUjieRKQ8HxkMTziIX0r1WCjirMm8IxxUaHrGIDvNjb%2BDRiNyR5Yh7ly47Yidcffq6%2F51C%2FfDhJB1J%2FvEsRofZ60yXL2uq1Z9BnIerPXMTFLGrsgu9pXATXYpUlszuPZYTDwpN6%2FBjqkAVl%2BtREjNvjQixuih%2Bg6i%2FO2zLaHiJv1uoyTQhxJVmak71oo%2BPjAY4ZMaKuFGclnMg7RxeK6m%2BhPk9sXw7s%2Fx5WSay%2BdDiZNjnjGWpMsqZN3i3hRF%2FLgvrEKgewGUau2t6U52IvCJBYpnTafI0kbojTGZZP0DtGVMvRMuf29bqGjGx5DjI%2FwsyiT%2FQVFC96xzXcIzBHWBqYElkuKBgwDn0ngIzvI&X-Amz-Signature=8a3a5183b76999b4878a009ddeb1357f0a63138cbc4b6bac648383608baf908a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

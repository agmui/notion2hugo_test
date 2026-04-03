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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNI3OBI%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKSiWSjhYe2W8WLOiHe2jbOgkI4J4KGsAZkrrPg7tyQAIhAOvuKiFmPabMCsaiEAWp4NCZa3dZXqmTqucgXkE25A6xKv8DCHcQABoMNjM3NDIzMTgzODA1IgwJ216SBfI6ZwySlmsq3AOpi5oHEUTujxQ6sE1WqIHN8%2Fr1skuwss3VEFEMVKres%2FwXIia115m%2BFeop%2BL3EvUzvjmI3tRO4eIKKh2ETiPcp%2BMGqWwqCqHzjzQfxqewUbvRqLTJ0XPmFI7bCOHDQx%2BuiH%2FzkAjdPQHapho70VyWqVk5uDWFhzSTfJTQ%2B0LZ9dU0QKaHmz%2BLxblwh2IFWLoGyP8d%2Fr64nFFm2pwt8dGxJiF4EIIVF0RkjGJRgIV3eKF4KPtb3WXg3r%2F1LGWoCW%2FF70PXSmQLZpYEalu%2Fwve7HYEQMK89e3hTZYWk1ycJK8WnlecjFz8A7EtcahxEYV%2Ftl6F9An2tEmXY47zKUvbCycy0qPzZRHY66HmhmNOl6rH0DSp6XZEw7LP%2BDjIg6%2FDz%2Bx5UXmH63xTTlVjJ0aDCqseulZ7TeV%2FNecy8%2BPnWxYWZdYhzW2Q8LFTTMWN2%2F5rJ%2F1ExFIz43NdNhoDcq%2BehDye%2BWs2PZ%2FGUa8DPeb3P0NUnhPfhWF%2FCRBwjQtDMUFtLbkhmz%2BRFyPnDzldXtAVG5i%2FaxpDX7%2F7gNFDBdjm%2Bv0PsHqWg0Ij4BAWP9PszEoGzcL2ZtyifNncCiOExisll6O27ntsXrOF%2FDeBL4ekJ7V4X1F0I9mcEgXrViwTDwxrvOBjqkAcsLuqK7LkSsb%2F8pVBR8yr3hzakqGExtvlFwwPDATaAOtHpnSSydGXYeO6N%2FEjdPrlhjK1%2FH9%2B%2BjfuTPG7RYzCDn7xX4BCQ3qxZR5pZ16IvpKn%2FVhxAp%2FfsHiOJd0eTwAhNFmqHuKLNVfAe5QhzuAih%2BKECYGJ0P1tH8Net37nd39ATLOIDLVaOqtEl7cjmk%2BtOhtLiLJxNsD1XH3j6hw1rEOsdu&X-Amz-Signature=9d33662d1b719cd501b7475f5b7fbfa3d43f58a01da007deea1b01d2f830dcac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNI3OBI%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKSiWSjhYe2W8WLOiHe2jbOgkI4J4KGsAZkrrPg7tyQAIhAOvuKiFmPabMCsaiEAWp4NCZa3dZXqmTqucgXkE25A6xKv8DCHcQABoMNjM3NDIzMTgzODA1IgwJ216SBfI6ZwySlmsq3AOpi5oHEUTujxQ6sE1WqIHN8%2Fr1skuwss3VEFEMVKres%2FwXIia115m%2BFeop%2BL3EvUzvjmI3tRO4eIKKh2ETiPcp%2BMGqWwqCqHzjzQfxqewUbvRqLTJ0XPmFI7bCOHDQx%2BuiH%2FzkAjdPQHapho70VyWqVk5uDWFhzSTfJTQ%2B0LZ9dU0QKaHmz%2BLxblwh2IFWLoGyP8d%2Fr64nFFm2pwt8dGxJiF4EIIVF0RkjGJRgIV3eKF4KPtb3WXg3r%2F1LGWoCW%2FF70PXSmQLZpYEalu%2Fwve7HYEQMK89e3hTZYWk1ycJK8WnlecjFz8A7EtcahxEYV%2Ftl6F9An2tEmXY47zKUvbCycy0qPzZRHY66HmhmNOl6rH0DSp6XZEw7LP%2BDjIg6%2FDz%2Bx5UXmH63xTTlVjJ0aDCqseulZ7TeV%2FNecy8%2BPnWxYWZdYhzW2Q8LFTTMWN2%2F5rJ%2F1ExFIz43NdNhoDcq%2BehDye%2BWs2PZ%2FGUa8DPeb3P0NUnhPfhWF%2FCRBwjQtDMUFtLbkhmz%2BRFyPnDzldXtAVG5i%2FaxpDX7%2F7gNFDBdjm%2Bv0PsHqWg0Ij4BAWP9PszEoGzcL2ZtyifNncCiOExisll6O27ntsXrOF%2FDeBL4ekJ7V4X1F0I9mcEgXrViwTDwxrvOBjqkAcsLuqK7LkSsb%2F8pVBR8yr3hzakqGExtvlFwwPDATaAOtHpnSSydGXYeO6N%2FEjdPrlhjK1%2FH9%2B%2BjfuTPG7RYzCDn7xX4BCQ3qxZR5pZ16IvpKn%2FVhxAp%2FfsHiOJd0eTwAhNFmqHuKLNVfAe5QhzuAih%2BKECYGJ0P1tH8Net37nd39ATLOIDLVaOqtEl7cjmk%2BtOhtLiLJxNsD1XH3j6hw1rEOsdu&X-Amz-Signature=9a275e52c230c99cc784e4a6cf592005a0b9d0ca0bf8189ee0611eb00e10d11d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNI3OBI%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKSiWSjhYe2W8WLOiHe2jbOgkI4J4KGsAZkrrPg7tyQAIhAOvuKiFmPabMCsaiEAWp4NCZa3dZXqmTqucgXkE25A6xKv8DCHcQABoMNjM3NDIzMTgzODA1IgwJ216SBfI6ZwySlmsq3AOpi5oHEUTujxQ6sE1WqIHN8%2Fr1skuwss3VEFEMVKres%2FwXIia115m%2BFeop%2BL3EvUzvjmI3tRO4eIKKh2ETiPcp%2BMGqWwqCqHzjzQfxqewUbvRqLTJ0XPmFI7bCOHDQx%2BuiH%2FzkAjdPQHapho70VyWqVk5uDWFhzSTfJTQ%2B0LZ9dU0QKaHmz%2BLxblwh2IFWLoGyP8d%2Fr64nFFm2pwt8dGxJiF4EIIVF0RkjGJRgIV3eKF4KPtb3WXg3r%2F1LGWoCW%2FF70PXSmQLZpYEalu%2Fwve7HYEQMK89e3hTZYWk1ycJK8WnlecjFz8A7EtcahxEYV%2Ftl6F9An2tEmXY47zKUvbCycy0qPzZRHY66HmhmNOl6rH0DSp6XZEw7LP%2BDjIg6%2FDz%2Bx5UXmH63xTTlVjJ0aDCqseulZ7TeV%2FNecy8%2BPnWxYWZdYhzW2Q8LFTTMWN2%2F5rJ%2F1ExFIz43NdNhoDcq%2BehDye%2BWs2PZ%2FGUa8DPeb3P0NUnhPfhWF%2FCRBwjQtDMUFtLbkhmz%2BRFyPnDzldXtAVG5i%2FaxpDX7%2F7gNFDBdjm%2Bv0PsHqWg0Ij4BAWP9PszEoGzcL2ZtyifNncCiOExisll6O27ntsXrOF%2FDeBL4ekJ7V4X1F0I9mcEgXrViwTDwxrvOBjqkAcsLuqK7LkSsb%2F8pVBR8yr3hzakqGExtvlFwwPDATaAOtHpnSSydGXYeO6N%2FEjdPrlhjK1%2FH9%2B%2BjfuTPG7RYzCDn7xX4BCQ3qxZR5pZ16IvpKn%2FVhxAp%2FfsHiOJd0eTwAhNFmqHuKLNVfAe5QhzuAih%2BKECYGJ0P1tH8Net37nd39ATLOIDLVaOqtEl7cjmk%2BtOhtLiLJxNsD1XH3j6hw1rEOsdu&X-Amz-Signature=4f6747d7c80a6feb2ddf029c0477f792f86fd0735b1f4378308220d63d0f3daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNI3OBI%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKSiWSjhYe2W8WLOiHe2jbOgkI4J4KGsAZkrrPg7tyQAIhAOvuKiFmPabMCsaiEAWp4NCZa3dZXqmTqucgXkE25A6xKv8DCHcQABoMNjM3NDIzMTgzODA1IgwJ216SBfI6ZwySlmsq3AOpi5oHEUTujxQ6sE1WqIHN8%2Fr1skuwss3VEFEMVKres%2FwXIia115m%2BFeop%2BL3EvUzvjmI3tRO4eIKKh2ETiPcp%2BMGqWwqCqHzjzQfxqewUbvRqLTJ0XPmFI7bCOHDQx%2BuiH%2FzkAjdPQHapho70VyWqVk5uDWFhzSTfJTQ%2B0LZ9dU0QKaHmz%2BLxblwh2IFWLoGyP8d%2Fr64nFFm2pwt8dGxJiF4EIIVF0RkjGJRgIV3eKF4KPtb3WXg3r%2F1LGWoCW%2FF70PXSmQLZpYEalu%2Fwve7HYEQMK89e3hTZYWk1ycJK8WnlecjFz8A7EtcahxEYV%2Ftl6F9An2tEmXY47zKUvbCycy0qPzZRHY66HmhmNOl6rH0DSp6XZEw7LP%2BDjIg6%2FDz%2Bx5UXmH63xTTlVjJ0aDCqseulZ7TeV%2FNecy8%2BPnWxYWZdYhzW2Q8LFTTMWN2%2F5rJ%2F1ExFIz43NdNhoDcq%2BehDye%2BWs2PZ%2FGUa8DPeb3P0NUnhPfhWF%2FCRBwjQtDMUFtLbkhmz%2BRFyPnDzldXtAVG5i%2FaxpDX7%2F7gNFDBdjm%2Bv0PsHqWg0Ij4BAWP9PszEoGzcL2ZtyifNncCiOExisll6O27ntsXrOF%2FDeBL4ekJ7V4X1F0I9mcEgXrViwTDwxrvOBjqkAcsLuqK7LkSsb%2F8pVBR8yr3hzakqGExtvlFwwPDATaAOtHpnSSydGXYeO6N%2FEjdPrlhjK1%2FH9%2B%2BjfuTPG7RYzCDn7xX4BCQ3qxZR5pZ16IvpKn%2FVhxAp%2FfsHiOJd0eTwAhNFmqHuKLNVfAe5QhzuAih%2BKECYGJ0P1tH8Net37nd39ATLOIDLVaOqtEl7cjmk%2BtOhtLiLJxNsD1XH3j6hw1rEOsdu&X-Amz-Signature=51eb1b5da77e2eba1a8229b495bd1412c056dd1bbff139155b7e95980d64335d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNI3OBI%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKSiWSjhYe2W8WLOiHe2jbOgkI4J4KGsAZkrrPg7tyQAIhAOvuKiFmPabMCsaiEAWp4NCZa3dZXqmTqucgXkE25A6xKv8DCHcQABoMNjM3NDIzMTgzODA1IgwJ216SBfI6ZwySlmsq3AOpi5oHEUTujxQ6sE1WqIHN8%2Fr1skuwss3VEFEMVKres%2FwXIia115m%2BFeop%2BL3EvUzvjmI3tRO4eIKKh2ETiPcp%2BMGqWwqCqHzjzQfxqewUbvRqLTJ0XPmFI7bCOHDQx%2BuiH%2FzkAjdPQHapho70VyWqVk5uDWFhzSTfJTQ%2B0LZ9dU0QKaHmz%2BLxblwh2IFWLoGyP8d%2Fr64nFFm2pwt8dGxJiF4EIIVF0RkjGJRgIV3eKF4KPtb3WXg3r%2F1LGWoCW%2FF70PXSmQLZpYEalu%2Fwve7HYEQMK89e3hTZYWk1ycJK8WnlecjFz8A7EtcahxEYV%2Ftl6F9An2tEmXY47zKUvbCycy0qPzZRHY66HmhmNOl6rH0DSp6XZEw7LP%2BDjIg6%2FDz%2Bx5UXmH63xTTlVjJ0aDCqseulZ7TeV%2FNecy8%2BPnWxYWZdYhzW2Q8LFTTMWN2%2F5rJ%2F1ExFIz43NdNhoDcq%2BehDye%2BWs2PZ%2FGUa8DPeb3P0NUnhPfhWF%2FCRBwjQtDMUFtLbkhmz%2BRFyPnDzldXtAVG5i%2FaxpDX7%2F7gNFDBdjm%2Bv0PsHqWg0Ij4BAWP9PszEoGzcL2ZtyifNncCiOExisll6O27ntsXrOF%2FDeBL4ekJ7V4X1F0I9mcEgXrViwTDwxrvOBjqkAcsLuqK7LkSsb%2F8pVBR8yr3hzakqGExtvlFwwPDATaAOtHpnSSydGXYeO6N%2FEjdPrlhjK1%2FH9%2B%2BjfuTPG7RYzCDn7xX4BCQ3qxZR5pZ16IvpKn%2FVhxAp%2FfsHiOJd0eTwAhNFmqHuKLNVfAe5QhzuAih%2BKECYGJ0P1tH8Net37nd39ATLOIDLVaOqtEl7cjmk%2BtOhtLiLJxNsD1XH3j6hw1rEOsdu&X-Amz-Signature=dd731d955159d295b01c26158f30c89ac5d2d8a4a0ec8fac78285f51c4ed5fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNI3OBI%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKSiWSjhYe2W8WLOiHe2jbOgkI4J4KGsAZkrrPg7tyQAIhAOvuKiFmPabMCsaiEAWp4NCZa3dZXqmTqucgXkE25A6xKv8DCHcQABoMNjM3NDIzMTgzODA1IgwJ216SBfI6ZwySlmsq3AOpi5oHEUTujxQ6sE1WqIHN8%2Fr1skuwss3VEFEMVKres%2FwXIia115m%2BFeop%2BL3EvUzvjmI3tRO4eIKKh2ETiPcp%2BMGqWwqCqHzjzQfxqewUbvRqLTJ0XPmFI7bCOHDQx%2BuiH%2FzkAjdPQHapho70VyWqVk5uDWFhzSTfJTQ%2B0LZ9dU0QKaHmz%2BLxblwh2IFWLoGyP8d%2Fr64nFFm2pwt8dGxJiF4EIIVF0RkjGJRgIV3eKF4KPtb3WXg3r%2F1LGWoCW%2FF70PXSmQLZpYEalu%2Fwve7HYEQMK89e3hTZYWk1ycJK8WnlecjFz8A7EtcahxEYV%2Ftl6F9An2tEmXY47zKUvbCycy0qPzZRHY66HmhmNOl6rH0DSp6XZEw7LP%2BDjIg6%2FDz%2Bx5UXmH63xTTlVjJ0aDCqseulZ7TeV%2FNecy8%2BPnWxYWZdYhzW2Q8LFTTMWN2%2F5rJ%2F1ExFIz43NdNhoDcq%2BehDye%2BWs2PZ%2FGUa8DPeb3P0NUnhPfhWF%2FCRBwjQtDMUFtLbkhmz%2BRFyPnDzldXtAVG5i%2FaxpDX7%2F7gNFDBdjm%2Bv0PsHqWg0Ij4BAWP9PszEoGzcL2ZtyifNncCiOExisll6O27ntsXrOF%2FDeBL4ekJ7V4X1F0I9mcEgXrViwTDwxrvOBjqkAcsLuqK7LkSsb%2F8pVBR8yr3hzakqGExtvlFwwPDATaAOtHpnSSydGXYeO6N%2FEjdPrlhjK1%2FH9%2B%2BjfuTPG7RYzCDn7xX4BCQ3qxZR5pZ16IvpKn%2FVhxAp%2FfsHiOJd0eTwAhNFmqHuKLNVfAe5QhzuAih%2BKECYGJ0P1tH8Net37nd39ATLOIDLVaOqtEl7cjmk%2BtOhtLiLJxNsD1XH3j6hw1rEOsdu&X-Amz-Signature=2cfebd199edbfb929ce6ceb340cccb7d2b98d87aaaad411cda4a64c24216f62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNI3OBI%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKSiWSjhYe2W8WLOiHe2jbOgkI4J4KGsAZkrrPg7tyQAIhAOvuKiFmPabMCsaiEAWp4NCZa3dZXqmTqucgXkE25A6xKv8DCHcQABoMNjM3NDIzMTgzODA1IgwJ216SBfI6ZwySlmsq3AOpi5oHEUTujxQ6sE1WqIHN8%2Fr1skuwss3VEFEMVKres%2FwXIia115m%2BFeop%2BL3EvUzvjmI3tRO4eIKKh2ETiPcp%2BMGqWwqCqHzjzQfxqewUbvRqLTJ0XPmFI7bCOHDQx%2BuiH%2FzkAjdPQHapho70VyWqVk5uDWFhzSTfJTQ%2B0LZ9dU0QKaHmz%2BLxblwh2IFWLoGyP8d%2Fr64nFFm2pwt8dGxJiF4EIIVF0RkjGJRgIV3eKF4KPtb3WXg3r%2F1LGWoCW%2FF70PXSmQLZpYEalu%2Fwve7HYEQMK89e3hTZYWk1ycJK8WnlecjFz8A7EtcahxEYV%2Ftl6F9An2tEmXY47zKUvbCycy0qPzZRHY66HmhmNOl6rH0DSp6XZEw7LP%2BDjIg6%2FDz%2Bx5UXmH63xTTlVjJ0aDCqseulZ7TeV%2FNecy8%2BPnWxYWZdYhzW2Q8LFTTMWN2%2F5rJ%2F1ExFIz43NdNhoDcq%2BehDye%2BWs2PZ%2FGUa8DPeb3P0NUnhPfhWF%2FCRBwjQtDMUFtLbkhmz%2BRFyPnDzldXtAVG5i%2FaxpDX7%2F7gNFDBdjm%2Bv0PsHqWg0Ij4BAWP9PszEoGzcL2ZtyifNncCiOExisll6O27ntsXrOF%2FDeBL4ekJ7V4X1F0I9mcEgXrViwTDwxrvOBjqkAcsLuqK7LkSsb%2F8pVBR8yr3hzakqGExtvlFwwPDATaAOtHpnSSydGXYeO6N%2FEjdPrlhjK1%2FH9%2B%2BjfuTPG7RYzCDn7xX4BCQ3qxZR5pZ16IvpKn%2FVhxAp%2FfsHiOJd0eTwAhNFmqHuKLNVfAe5QhzuAih%2BKECYGJ0P1tH8Net37nd39ATLOIDLVaOqtEl7cjmk%2BtOhtLiLJxNsD1XH3j6hw1rEOsdu&X-Amz-Signature=75bf38bbd84475c084c6ee401a21ecb814f6e3e51eee075d6d0fe78a24b4bd4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQN7ACT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2royO%2Bed0pTOkJdv4nPz4PMFHKgCnB6r%2FJso31o0OAIgBum5A03jMNA4veWKb19u9um3uLETzwDNPW9c6NqryTUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbYpsrpuAfH8jKAkircA4gpU3cxWj9EvlHk1lxG10ZscPv1J4QuOpxyn4eqsEUrxlqe%2B9tOvYp9GbqXQSH8LhjkecNvh1wCM6zQcrVz5byYmNyR2YsDhiAnvgmdrXX9H0Ci5K1qlul3D%2BEjPfZ%2BRDawR1uYkSSNG6eaeuLop1ilL7cVUPGcqoS%2F55gaACbPvh3HyZGpsn9Ysne6jPLpIuw4eg0hMYhIY5akbuVvW2XEROyAViN%2FsW0s%2BwjGhLxbO%2FPr3nW170uSPxrnviMBcBoqco8tnBJyfIIDzuCbCcfaGrbYZszdZrblC1OKByo9cpWAeH7CPMjPhaF1Oz6bf0rqd8m21yl3aQ3Js9mIV7MI9l1dQd0mE29Y7N1tuYDYwL%2B0RGYWg84lMEWjC2CFIn6FqfIGJY6Opu%2B5huWVPJXD5SYB4TwShJtRkwZKSN3aThAN1w09SmMofTokdVUSjEgpvEhnx1KRYhk7PbpfgQ0VnVJ03Ar2DLKAfM7mhW60r7DxU5L67y3TAw3bKHu8PL83ZN40k2pZoiMZ4CCjjS1arGh78WrVmLx4Q1GIg4xgHyVldvTnFLsyMnvg22u1ACBdQggoGUjMzCCamtIIm5kGY7ztXPzChOWklow6BH7GWWZRGPkapTDyMd7uMKGGjsMGOqUBKKiHrkN%2F3f%2BG51sg%2BkZU0lPJdlxpkiUYn5VXeQD%2Bb8%2B3qrczhithGtI1WRGtJ3k0y3pYndCdjIGtU%2B%2FwGStZhxLAOyNSOk7IvmoNhhSHsZI1DaF0D0rSC6hPmbtgaTCr%2F%2FM6ldkLkrB0L5HJqcFNUxGEJFWR8ndYFPww5EdfF3tAJYN01lgSvV6AdmQHy9P5Zh77aGQpH2ImY%2F8F6FiaHc1TF9tV&X-Amz-Signature=52132d83afce8f21f1a8b1db1d39e28060ae34bdec23765e8468e562222995d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQN7ACT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2royO%2Bed0pTOkJdv4nPz4PMFHKgCnB6r%2FJso31o0OAIgBum5A03jMNA4veWKb19u9um3uLETzwDNPW9c6NqryTUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbYpsrpuAfH8jKAkircA4gpU3cxWj9EvlHk1lxG10ZscPv1J4QuOpxyn4eqsEUrxlqe%2B9tOvYp9GbqXQSH8LhjkecNvh1wCM6zQcrVz5byYmNyR2YsDhiAnvgmdrXX9H0Ci5K1qlul3D%2BEjPfZ%2BRDawR1uYkSSNG6eaeuLop1ilL7cVUPGcqoS%2F55gaACbPvh3HyZGpsn9Ysne6jPLpIuw4eg0hMYhIY5akbuVvW2XEROyAViN%2FsW0s%2BwjGhLxbO%2FPr3nW170uSPxrnviMBcBoqco8tnBJyfIIDzuCbCcfaGrbYZszdZrblC1OKByo9cpWAeH7CPMjPhaF1Oz6bf0rqd8m21yl3aQ3Js9mIV7MI9l1dQd0mE29Y7N1tuYDYwL%2B0RGYWg84lMEWjC2CFIn6FqfIGJY6Opu%2B5huWVPJXD5SYB4TwShJtRkwZKSN3aThAN1w09SmMofTokdVUSjEgpvEhnx1KRYhk7PbpfgQ0VnVJ03Ar2DLKAfM7mhW60r7DxU5L67y3TAw3bKHu8PL83ZN40k2pZoiMZ4CCjjS1arGh78WrVmLx4Q1GIg4xgHyVldvTnFLsyMnvg22u1ACBdQggoGUjMzCCamtIIm5kGY7ztXPzChOWklow6BH7GWWZRGPkapTDyMd7uMKGGjsMGOqUBKKiHrkN%2F3f%2BG51sg%2BkZU0lPJdlxpkiUYn5VXeQD%2Bb8%2B3qrczhithGtI1WRGtJ3k0y3pYndCdjIGtU%2B%2FwGStZhxLAOyNSOk7IvmoNhhSHsZI1DaF0D0rSC6hPmbtgaTCr%2F%2FM6ldkLkrB0L5HJqcFNUxGEJFWR8ndYFPww5EdfF3tAJYN01lgSvV6AdmQHy9P5Zh77aGQpH2ImY%2F8F6FiaHc1TF9tV&X-Amz-Signature=2928123aecb8f82e4bb00e9843a03d9abbf1d1ddf084a9c565bda612c5a1865c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQN7ACT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2royO%2Bed0pTOkJdv4nPz4PMFHKgCnB6r%2FJso31o0OAIgBum5A03jMNA4veWKb19u9um3uLETzwDNPW9c6NqryTUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbYpsrpuAfH8jKAkircA4gpU3cxWj9EvlHk1lxG10ZscPv1J4QuOpxyn4eqsEUrxlqe%2B9tOvYp9GbqXQSH8LhjkecNvh1wCM6zQcrVz5byYmNyR2YsDhiAnvgmdrXX9H0Ci5K1qlul3D%2BEjPfZ%2BRDawR1uYkSSNG6eaeuLop1ilL7cVUPGcqoS%2F55gaACbPvh3HyZGpsn9Ysne6jPLpIuw4eg0hMYhIY5akbuVvW2XEROyAViN%2FsW0s%2BwjGhLxbO%2FPr3nW170uSPxrnviMBcBoqco8tnBJyfIIDzuCbCcfaGrbYZszdZrblC1OKByo9cpWAeH7CPMjPhaF1Oz6bf0rqd8m21yl3aQ3Js9mIV7MI9l1dQd0mE29Y7N1tuYDYwL%2B0RGYWg84lMEWjC2CFIn6FqfIGJY6Opu%2B5huWVPJXD5SYB4TwShJtRkwZKSN3aThAN1w09SmMofTokdVUSjEgpvEhnx1KRYhk7PbpfgQ0VnVJ03Ar2DLKAfM7mhW60r7DxU5L67y3TAw3bKHu8PL83ZN40k2pZoiMZ4CCjjS1arGh78WrVmLx4Q1GIg4xgHyVldvTnFLsyMnvg22u1ACBdQggoGUjMzCCamtIIm5kGY7ztXPzChOWklow6BH7GWWZRGPkapTDyMd7uMKGGjsMGOqUBKKiHrkN%2F3f%2BG51sg%2BkZU0lPJdlxpkiUYn5VXeQD%2Bb8%2B3qrczhithGtI1WRGtJ3k0y3pYndCdjIGtU%2B%2FwGStZhxLAOyNSOk7IvmoNhhSHsZI1DaF0D0rSC6hPmbtgaTCr%2F%2FM6ldkLkrB0L5HJqcFNUxGEJFWR8ndYFPww5EdfF3tAJYN01lgSvV6AdmQHy9P5Zh77aGQpH2ImY%2F8F6FiaHc1TF9tV&X-Amz-Signature=3d643763452f5746969521be95e17512e2146bc304037875ef628a4718afefc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQN7ACT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2royO%2Bed0pTOkJdv4nPz4PMFHKgCnB6r%2FJso31o0OAIgBum5A03jMNA4veWKb19u9um3uLETzwDNPW9c6NqryTUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbYpsrpuAfH8jKAkircA4gpU3cxWj9EvlHk1lxG10ZscPv1J4QuOpxyn4eqsEUrxlqe%2B9tOvYp9GbqXQSH8LhjkecNvh1wCM6zQcrVz5byYmNyR2YsDhiAnvgmdrXX9H0Ci5K1qlul3D%2BEjPfZ%2BRDawR1uYkSSNG6eaeuLop1ilL7cVUPGcqoS%2F55gaACbPvh3HyZGpsn9Ysne6jPLpIuw4eg0hMYhIY5akbuVvW2XEROyAViN%2FsW0s%2BwjGhLxbO%2FPr3nW170uSPxrnviMBcBoqco8tnBJyfIIDzuCbCcfaGrbYZszdZrblC1OKByo9cpWAeH7CPMjPhaF1Oz6bf0rqd8m21yl3aQ3Js9mIV7MI9l1dQd0mE29Y7N1tuYDYwL%2B0RGYWg84lMEWjC2CFIn6FqfIGJY6Opu%2B5huWVPJXD5SYB4TwShJtRkwZKSN3aThAN1w09SmMofTokdVUSjEgpvEhnx1KRYhk7PbpfgQ0VnVJ03Ar2DLKAfM7mhW60r7DxU5L67y3TAw3bKHu8PL83ZN40k2pZoiMZ4CCjjS1arGh78WrVmLx4Q1GIg4xgHyVldvTnFLsyMnvg22u1ACBdQggoGUjMzCCamtIIm5kGY7ztXPzChOWklow6BH7GWWZRGPkapTDyMd7uMKGGjsMGOqUBKKiHrkN%2F3f%2BG51sg%2BkZU0lPJdlxpkiUYn5VXeQD%2Bb8%2B3qrczhithGtI1WRGtJ3k0y3pYndCdjIGtU%2B%2FwGStZhxLAOyNSOk7IvmoNhhSHsZI1DaF0D0rSC6hPmbtgaTCr%2F%2FM6ldkLkrB0L5HJqcFNUxGEJFWR8ndYFPww5EdfF3tAJYN01lgSvV6AdmQHy9P5Zh77aGQpH2ImY%2F8F6FiaHc1TF9tV&X-Amz-Signature=0d7dbddaea77059e281336c1a9aff73fc08f861e3ac5515b2349520af46cba1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQN7ACT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2royO%2Bed0pTOkJdv4nPz4PMFHKgCnB6r%2FJso31o0OAIgBum5A03jMNA4veWKb19u9um3uLETzwDNPW9c6NqryTUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbYpsrpuAfH8jKAkircA4gpU3cxWj9EvlHk1lxG10ZscPv1J4QuOpxyn4eqsEUrxlqe%2B9tOvYp9GbqXQSH8LhjkecNvh1wCM6zQcrVz5byYmNyR2YsDhiAnvgmdrXX9H0Ci5K1qlul3D%2BEjPfZ%2BRDawR1uYkSSNG6eaeuLop1ilL7cVUPGcqoS%2F55gaACbPvh3HyZGpsn9Ysne6jPLpIuw4eg0hMYhIY5akbuVvW2XEROyAViN%2FsW0s%2BwjGhLxbO%2FPr3nW170uSPxrnviMBcBoqco8tnBJyfIIDzuCbCcfaGrbYZszdZrblC1OKByo9cpWAeH7CPMjPhaF1Oz6bf0rqd8m21yl3aQ3Js9mIV7MI9l1dQd0mE29Y7N1tuYDYwL%2B0RGYWg84lMEWjC2CFIn6FqfIGJY6Opu%2B5huWVPJXD5SYB4TwShJtRkwZKSN3aThAN1w09SmMofTokdVUSjEgpvEhnx1KRYhk7PbpfgQ0VnVJ03Ar2DLKAfM7mhW60r7DxU5L67y3TAw3bKHu8PL83ZN40k2pZoiMZ4CCjjS1arGh78WrVmLx4Q1GIg4xgHyVldvTnFLsyMnvg22u1ACBdQggoGUjMzCCamtIIm5kGY7ztXPzChOWklow6BH7GWWZRGPkapTDyMd7uMKGGjsMGOqUBKKiHrkN%2F3f%2BG51sg%2BkZU0lPJdlxpkiUYn5VXeQD%2Bb8%2B3qrczhithGtI1WRGtJ3k0y3pYndCdjIGtU%2B%2FwGStZhxLAOyNSOk7IvmoNhhSHsZI1DaF0D0rSC6hPmbtgaTCr%2F%2FM6ldkLkrB0L5HJqcFNUxGEJFWR8ndYFPww5EdfF3tAJYN01lgSvV6AdmQHy9P5Zh77aGQpH2ImY%2F8F6FiaHc1TF9tV&X-Amz-Signature=21b89576aa969bdb94d74c5ee590bfebc8ab25c2622fb1364a604287f4bf9c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQN7ACT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2royO%2Bed0pTOkJdv4nPz4PMFHKgCnB6r%2FJso31o0OAIgBum5A03jMNA4veWKb19u9um3uLETzwDNPW9c6NqryTUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbYpsrpuAfH8jKAkircA4gpU3cxWj9EvlHk1lxG10ZscPv1J4QuOpxyn4eqsEUrxlqe%2B9tOvYp9GbqXQSH8LhjkecNvh1wCM6zQcrVz5byYmNyR2YsDhiAnvgmdrXX9H0Ci5K1qlul3D%2BEjPfZ%2BRDawR1uYkSSNG6eaeuLop1ilL7cVUPGcqoS%2F55gaACbPvh3HyZGpsn9Ysne6jPLpIuw4eg0hMYhIY5akbuVvW2XEROyAViN%2FsW0s%2BwjGhLxbO%2FPr3nW170uSPxrnviMBcBoqco8tnBJyfIIDzuCbCcfaGrbYZszdZrblC1OKByo9cpWAeH7CPMjPhaF1Oz6bf0rqd8m21yl3aQ3Js9mIV7MI9l1dQd0mE29Y7N1tuYDYwL%2B0RGYWg84lMEWjC2CFIn6FqfIGJY6Opu%2B5huWVPJXD5SYB4TwShJtRkwZKSN3aThAN1w09SmMofTokdVUSjEgpvEhnx1KRYhk7PbpfgQ0VnVJ03Ar2DLKAfM7mhW60r7DxU5L67y3TAw3bKHu8PL83ZN40k2pZoiMZ4CCjjS1arGh78WrVmLx4Q1GIg4xgHyVldvTnFLsyMnvg22u1ACBdQggoGUjMzCCamtIIm5kGY7ztXPzChOWklow6BH7GWWZRGPkapTDyMd7uMKGGjsMGOqUBKKiHrkN%2F3f%2BG51sg%2BkZU0lPJdlxpkiUYn5VXeQD%2Bb8%2B3qrczhithGtI1WRGtJ3k0y3pYndCdjIGtU%2B%2FwGStZhxLAOyNSOk7IvmoNhhSHsZI1DaF0D0rSC6hPmbtgaTCr%2F%2FM6ldkLkrB0L5HJqcFNUxGEJFWR8ndYFPww5EdfF3tAJYN01lgSvV6AdmQHy9P5Zh77aGQpH2ImY%2F8F6FiaHc1TF9tV&X-Amz-Signature=1fe4f3d0b89aef5fa0e8f2afcbf252a8325cb8508dabe33611007ae08a0f3834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQN7ACT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2royO%2Bed0pTOkJdv4nPz4PMFHKgCnB6r%2FJso31o0OAIgBum5A03jMNA4veWKb19u9um3uLETzwDNPW9c6NqryTUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbYpsrpuAfH8jKAkircA4gpU3cxWj9EvlHk1lxG10ZscPv1J4QuOpxyn4eqsEUrxlqe%2B9tOvYp9GbqXQSH8LhjkecNvh1wCM6zQcrVz5byYmNyR2YsDhiAnvgmdrXX9H0Ci5K1qlul3D%2BEjPfZ%2BRDawR1uYkSSNG6eaeuLop1ilL7cVUPGcqoS%2F55gaACbPvh3HyZGpsn9Ysne6jPLpIuw4eg0hMYhIY5akbuVvW2XEROyAViN%2FsW0s%2BwjGhLxbO%2FPr3nW170uSPxrnviMBcBoqco8tnBJyfIIDzuCbCcfaGrbYZszdZrblC1OKByo9cpWAeH7CPMjPhaF1Oz6bf0rqd8m21yl3aQ3Js9mIV7MI9l1dQd0mE29Y7N1tuYDYwL%2B0RGYWg84lMEWjC2CFIn6FqfIGJY6Opu%2B5huWVPJXD5SYB4TwShJtRkwZKSN3aThAN1w09SmMofTokdVUSjEgpvEhnx1KRYhk7PbpfgQ0VnVJ03Ar2DLKAfM7mhW60r7DxU5L67y3TAw3bKHu8PL83ZN40k2pZoiMZ4CCjjS1arGh78WrVmLx4Q1GIg4xgHyVldvTnFLsyMnvg22u1ACBdQggoGUjMzCCamtIIm5kGY7ztXPzChOWklow6BH7GWWZRGPkapTDyMd7uMKGGjsMGOqUBKKiHrkN%2F3f%2BG51sg%2BkZU0lPJdlxpkiUYn5VXeQD%2Bb8%2B3qrczhithGtI1WRGtJ3k0y3pYndCdjIGtU%2B%2FwGStZhxLAOyNSOk7IvmoNhhSHsZI1DaF0D0rSC6hPmbtgaTCr%2F%2FM6ldkLkrB0L5HJqcFNUxGEJFWR8ndYFPww5EdfF3tAJYN01lgSvV6AdmQHy9P5Zh77aGQpH2ImY%2F8F6FiaHc1TF9tV&X-Amz-Signature=6bdfb90961b172c57911985a88411cb3f1a66ba3f1084763474013e37f5aa2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

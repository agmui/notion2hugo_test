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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXHQA7V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLhZmEJIPQddD1xGNrqBvbdhnjJ3eamC8ojfY7%2FWrpwIgcmOZKxo9me6Z%2FTnB%2F4l5b%2BdS%2FtAIXDeSmAJadquTBrgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGUEGv%2BbSoPbrFA6zircA7%2B6C87plJp1UXrtaQwQR4cVEmwsvY91F3a9e3N4aYxE7%2Fyg04TAf3WgeHwZV%2BZJmexhInoy9CMXwwkErohOH%2BnwNRFLoJdZhTrfhEixBKfqrj0VU7iZEDfBJYEfF6hAZ5beTef8DbhygtRnLB0m3gqvrkrEwzmHraiZ6E8N1J8f%2FvOYFqbzzFHrwMP4JvtNi8UJ4K6i7AeTpqpmjFU4QkKjnHI7ktGc4rvs02kNeKGg2HHDViyWV6J64gFL%2FY48kjdD9QHFEdG%2BhTXwsRdzQ8tg6KV%2BaWr5l6uFTcxJc0HC410U9ma%2Bg23C33a%2FvMp8%2FRWNAGkm26nH8QDwIHe7xSMi8YecEcMgjHXTFWN5aeYghPvluCA4mNR2adNtMhL7MGpz1u3P%2BhsHeeQGviMvbj%2BUY%2FJCHziEEF%2Fo%2FE2fiLRir2dJEiZcFMWPQP96pFN%2FZ1TNNViFIS8pzLeI3udOvsg3YDfqcPj6U4v7asXyCzswzFckXwfYX9K5KNoKdH9z%2BSNc36k1Ru%2B3otXD2eDLXHVYwfhy1yO2dEE71WOfRodSxjuPxeXRxVLdhxI6apoUAGOu2Yv3VACXHlltOIv4RLrhqng8vc3kMM6Wfi9qV9ZAGOGAglY%2FDYLCM6SVMPO5xsIGOqUB%2FPrbuvzban%2BN0URjVDfSfjV45OwsFMbHUVEWNhZEG2y862bj9Xmoouv0TWqlJUdZB55ZG9SLub1HgpLfdb9hFgAeoqY%2BsaT7gdIpZQFfj7bhBluyZ5WiPWWPJ8lL%2BeH4Vw6SLdG5Gkq%2BFf2ZVPdthbk1P9l5sxkCVd9V5AVvHyL3fZjSGih48sKZY45VsNIWaD2eOfq5mNsBPcT6vcTn4sxyjwOM&X-Amz-Signature=6b8284bb0e81dd4c95b328110750cab91750fef3a5318ff9c0e7b7ca5b7a0cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXHQA7V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLhZmEJIPQddD1xGNrqBvbdhnjJ3eamC8ojfY7%2FWrpwIgcmOZKxo9me6Z%2FTnB%2F4l5b%2BdS%2FtAIXDeSmAJadquTBrgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGUEGv%2BbSoPbrFA6zircA7%2B6C87plJp1UXrtaQwQR4cVEmwsvY91F3a9e3N4aYxE7%2Fyg04TAf3WgeHwZV%2BZJmexhInoy9CMXwwkErohOH%2BnwNRFLoJdZhTrfhEixBKfqrj0VU7iZEDfBJYEfF6hAZ5beTef8DbhygtRnLB0m3gqvrkrEwzmHraiZ6E8N1J8f%2FvOYFqbzzFHrwMP4JvtNi8UJ4K6i7AeTpqpmjFU4QkKjnHI7ktGc4rvs02kNeKGg2HHDViyWV6J64gFL%2FY48kjdD9QHFEdG%2BhTXwsRdzQ8tg6KV%2BaWr5l6uFTcxJc0HC410U9ma%2Bg23C33a%2FvMp8%2FRWNAGkm26nH8QDwIHe7xSMi8YecEcMgjHXTFWN5aeYghPvluCA4mNR2adNtMhL7MGpz1u3P%2BhsHeeQGviMvbj%2BUY%2FJCHziEEF%2Fo%2FE2fiLRir2dJEiZcFMWPQP96pFN%2FZ1TNNViFIS8pzLeI3udOvsg3YDfqcPj6U4v7asXyCzswzFckXwfYX9K5KNoKdH9z%2BSNc36k1Ru%2B3otXD2eDLXHVYwfhy1yO2dEE71WOfRodSxjuPxeXRxVLdhxI6apoUAGOu2Yv3VACXHlltOIv4RLrhqng8vc3kMM6Wfi9qV9ZAGOGAglY%2FDYLCM6SVMPO5xsIGOqUB%2FPrbuvzban%2BN0URjVDfSfjV45OwsFMbHUVEWNhZEG2y862bj9Xmoouv0TWqlJUdZB55ZG9SLub1HgpLfdb9hFgAeoqY%2BsaT7gdIpZQFfj7bhBluyZ5WiPWWPJ8lL%2BeH4Vw6SLdG5Gkq%2BFf2ZVPdthbk1P9l5sxkCVd9V5AVvHyL3fZjSGih48sKZY45VsNIWaD2eOfq5mNsBPcT6vcTn4sxyjwOM&X-Amz-Signature=eeee8aba9b120a5d25b344c2d728b1da4881709fbc076766329e906f3997a626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXHQA7V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLhZmEJIPQddD1xGNrqBvbdhnjJ3eamC8ojfY7%2FWrpwIgcmOZKxo9me6Z%2FTnB%2F4l5b%2BdS%2FtAIXDeSmAJadquTBrgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGUEGv%2BbSoPbrFA6zircA7%2B6C87plJp1UXrtaQwQR4cVEmwsvY91F3a9e3N4aYxE7%2Fyg04TAf3WgeHwZV%2BZJmexhInoy9CMXwwkErohOH%2BnwNRFLoJdZhTrfhEixBKfqrj0VU7iZEDfBJYEfF6hAZ5beTef8DbhygtRnLB0m3gqvrkrEwzmHraiZ6E8N1J8f%2FvOYFqbzzFHrwMP4JvtNi8UJ4K6i7AeTpqpmjFU4QkKjnHI7ktGc4rvs02kNeKGg2HHDViyWV6J64gFL%2FY48kjdD9QHFEdG%2BhTXwsRdzQ8tg6KV%2BaWr5l6uFTcxJc0HC410U9ma%2Bg23C33a%2FvMp8%2FRWNAGkm26nH8QDwIHe7xSMi8YecEcMgjHXTFWN5aeYghPvluCA4mNR2adNtMhL7MGpz1u3P%2BhsHeeQGviMvbj%2BUY%2FJCHziEEF%2Fo%2FE2fiLRir2dJEiZcFMWPQP96pFN%2FZ1TNNViFIS8pzLeI3udOvsg3YDfqcPj6U4v7asXyCzswzFckXwfYX9K5KNoKdH9z%2BSNc36k1Ru%2B3otXD2eDLXHVYwfhy1yO2dEE71WOfRodSxjuPxeXRxVLdhxI6apoUAGOu2Yv3VACXHlltOIv4RLrhqng8vc3kMM6Wfi9qV9ZAGOGAglY%2FDYLCM6SVMPO5xsIGOqUB%2FPrbuvzban%2BN0URjVDfSfjV45OwsFMbHUVEWNhZEG2y862bj9Xmoouv0TWqlJUdZB55ZG9SLub1HgpLfdb9hFgAeoqY%2BsaT7gdIpZQFfj7bhBluyZ5WiPWWPJ8lL%2BeH4Vw6SLdG5Gkq%2BFf2ZVPdthbk1P9l5sxkCVd9V5AVvHyL3fZjSGih48sKZY45VsNIWaD2eOfq5mNsBPcT6vcTn4sxyjwOM&X-Amz-Signature=53ffdd86a29541b8e08eaf603a9a9bbe57241a2d0cb0f410bf6c94d9bcdeb67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXHQA7V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLhZmEJIPQddD1xGNrqBvbdhnjJ3eamC8ojfY7%2FWrpwIgcmOZKxo9me6Z%2FTnB%2F4l5b%2BdS%2FtAIXDeSmAJadquTBrgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGUEGv%2BbSoPbrFA6zircA7%2B6C87plJp1UXrtaQwQR4cVEmwsvY91F3a9e3N4aYxE7%2Fyg04TAf3WgeHwZV%2BZJmexhInoy9CMXwwkErohOH%2BnwNRFLoJdZhTrfhEixBKfqrj0VU7iZEDfBJYEfF6hAZ5beTef8DbhygtRnLB0m3gqvrkrEwzmHraiZ6E8N1J8f%2FvOYFqbzzFHrwMP4JvtNi8UJ4K6i7AeTpqpmjFU4QkKjnHI7ktGc4rvs02kNeKGg2HHDViyWV6J64gFL%2FY48kjdD9QHFEdG%2BhTXwsRdzQ8tg6KV%2BaWr5l6uFTcxJc0HC410U9ma%2Bg23C33a%2FvMp8%2FRWNAGkm26nH8QDwIHe7xSMi8YecEcMgjHXTFWN5aeYghPvluCA4mNR2adNtMhL7MGpz1u3P%2BhsHeeQGviMvbj%2BUY%2FJCHziEEF%2Fo%2FE2fiLRir2dJEiZcFMWPQP96pFN%2FZ1TNNViFIS8pzLeI3udOvsg3YDfqcPj6U4v7asXyCzswzFckXwfYX9K5KNoKdH9z%2BSNc36k1Ru%2B3otXD2eDLXHVYwfhy1yO2dEE71WOfRodSxjuPxeXRxVLdhxI6apoUAGOu2Yv3VACXHlltOIv4RLrhqng8vc3kMM6Wfi9qV9ZAGOGAglY%2FDYLCM6SVMPO5xsIGOqUB%2FPrbuvzban%2BN0URjVDfSfjV45OwsFMbHUVEWNhZEG2y862bj9Xmoouv0TWqlJUdZB55ZG9SLub1HgpLfdb9hFgAeoqY%2BsaT7gdIpZQFfj7bhBluyZ5WiPWWPJ8lL%2BeH4Vw6SLdG5Gkq%2BFf2ZVPdthbk1P9l5sxkCVd9V5AVvHyL3fZjSGih48sKZY45VsNIWaD2eOfq5mNsBPcT6vcTn4sxyjwOM&X-Amz-Signature=e4df82a9c59e78c6073ef4dde726cbc9b4221e553eea22c97d983cb8d97b4e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXHQA7V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLhZmEJIPQddD1xGNrqBvbdhnjJ3eamC8ojfY7%2FWrpwIgcmOZKxo9me6Z%2FTnB%2F4l5b%2BdS%2FtAIXDeSmAJadquTBrgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGUEGv%2BbSoPbrFA6zircA7%2B6C87plJp1UXrtaQwQR4cVEmwsvY91F3a9e3N4aYxE7%2Fyg04TAf3WgeHwZV%2BZJmexhInoy9CMXwwkErohOH%2BnwNRFLoJdZhTrfhEixBKfqrj0VU7iZEDfBJYEfF6hAZ5beTef8DbhygtRnLB0m3gqvrkrEwzmHraiZ6E8N1J8f%2FvOYFqbzzFHrwMP4JvtNi8UJ4K6i7AeTpqpmjFU4QkKjnHI7ktGc4rvs02kNeKGg2HHDViyWV6J64gFL%2FY48kjdD9QHFEdG%2BhTXwsRdzQ8tg6KV%2BaWr5l6uFTcxJc0HC410U9ma%2Bg23C33a%2FvMp8%2FRWNAGkm26nH8QDwIHe7xSMi8YecEcMgjHXTFWN5aeYghPvluCA4mNR2adNtMhL7MGpz1u3P%2BhsHeeQGviMvbj%2BUY%2FJCHziEEF%2Fo%2FE2fiLRir2dJEiZcFMWPQP96pFN%2FZ1TNNViFIS8pzLeI3udOvsg3YDfqcPj6U4v7asXyCzswzFckXwfYX9K5KNoKdH9z%2BSNc36k1Ru%2B3otXD2eDLXHVYwfhy1yO2dEE71WOfRodSxjuPxeXRxVLdhxI6apoUAGOu2Yv3VACXHlltOIv4RLrhqng8vc3kMM6Wfi9qV9ZAGOGAglY%2FDYLCM6SVMPO5xsIGOqUB%2FPrbuvzban%2BN0URjVDfSfjV45OwsFMbHUVEWNhZEG2y862bj9Xmoouv0TWqlJUdZB55ZG9SLub1HgpLfdb9hFgAeoqY%2BsaT7gdIpZQFfj7bhBluyZ5WiPWWPJ8lL%2BeH4Vw6SLdG5Gkq%2BFf2ZVPdthbk1P9l5sxkCVd9V5AVvHyL3fZjSGih48sKZY45VsNIWaD2eOfq5mNsBPcT6vcTn4sxyjwOM&X-Amz-Signature=12feb317ff60ddf0fd8d65a0ec9a24cc8eff70e13f1310d23021bf015c9e3dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXHQA7V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLhZmEJIPQddD1xGNrqBvbdhnjJ3eamC8ojfY7%2FWrpwIgcmOZKxo9me6Z%2FTnB%2F4l5b%2BdS%2FtAIXDeSmAJadquTBrgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGUEGv%2BbSoPbrFA6zircA7%2B6C87plJp1UXrtaQwQR4cVEmwsvY91F3a9e3N4aYxE7%2Fyg04TAf3WgeHwZV%2BZJmexhInoy9CMXwwkErohOH%2BnwNRFLoJdZhTrfhEixBKfqrj0VU7iZEDfBJYEfF6hAZ5beTef8DbhygtRnLB0m3gqvrkrEwzmHraiZ6E8N1J8f%2FvOYFqbzzFHrwMP4JvtNi8UJ4K6i7AeTpqpmjFU4QkKjnHI7ktGc4rvs02kNeKGg2HHDViyWV6J64gFL%2FY48kjdD9QHFEdG%2BhTXwsRdzQ8tg6KV%2BaWr5l6uFTcxJc0HC410U9ma%2Bg23C33a%2FvMp8%2FRWNAGkm26nH8QDwIHe7xSMi8YecEcMgjHXTFWN5aeYghPvluCA4mNR2adNtMhL7MGpz1u3P%2BhsHeeQGviMvbj%2BUY%2FJCHziEEF%2Fo%2FE2fiLRir2dJEiZcFMWPQP96pFN%2FZ1TNNViFIS8pzLeI3udOvsg3YDfqcPj6U4v7asXyCzswzFckXwfYX9K5KNoKdH9z%2BSNc36k1Ru%2B3otXD2eDLXHVYwfhy1yO2dEE71WOfRodSxjuPxeXRxVLdhxI6apoUAGOu2Yv3VACXHlltOIv4RLrhqng8vc3kMM6Wfi9qV9ZAGOGAglY%2FDYLCM6SVMPO5xsIGOqUB%2FPrbuvzban%2BN0URjVDfSfjV45OwsFMbHUVEWNhZEG2y862bj9Xmoouv0TWqlJUdZB55ZG9SLub1HgpLfdb9hFgAeoqY%2BsaT7gdIpZQFfj7bhBluyZ5WiPWWPJ8lL%2BeH4Vw6SLdG5Gkq%2BFf2ZVPdthbk1P9l5sxkCVd9V5AVvHyL3fZjSGih48sKZY45VsNIWaD2eOfq5mNsBPcT6vcTn4sxyjwOM&X-Amz-Signature=fb572f99ab3b98b7add9f2595582bea6b1d5a15014ef3f1464986313930f7ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXHQA7V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLhZmEJIPQddD1xGNrqBvbdhnjJ3eamC8ojfY7%2FWrpwIgcmOZKxo9me6Z%2FTnB%2F4l5b%2BdS%2FtAIXDeSmAJadquTBrgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGUEGv%2BbSoPbrFA6zircA7%2B6C87plJp1UXrtaQwQR4cVEmwsvY91F3a9e3N4aYxE7%2Fyg04TAf3WgeHwZV%2BZJmexhInoy9CMXwwkErohOH%2BnwNRFLoJdZhTrfhEixBKfqrj0VU7iZEDfBJYEfF6hAZ5beTef8DbhygtRnLB0m3gqvrkrEwzmHraiZ6E8N1J8f%2FvOYFqbzzFHrwMP4JvtNi8UJ4K6i7AeTpqpmjFU4QkKjnHI7ktGc4rvs02kNeKGg2HHDViyWV6J64gFL%2FY48kjdD9QHFEdG%2BhTXwsRdzQ8tg6KV%2BaWr5l6uFTcxJc0HC410U9ma%2Bg23C33a%2FvMp8%2FRWNAGkm26nH8QDwIHe7xSMi8YecEcMgjHXTFWN5aeYghPvluCA4mNR2adNtMhL7MGpz1u3P%2BhsHeeQGviMvbj%2BUY%2FJCHziEEF%2Fo%2FE2fiLRir2dJEiZcFMWPQP96pFN%2FZ1TNNViFIS8pzLeI3udOvsg3YDfqcPj6U4v7asXyCzswzFckXwfYX9K5KNoKdH9z%2BSNc36k1Ru%2B3otXD2eDLXHVYwfhy1yO2dEE71WOfRodSxjuPxeXRxVLdhxI6apoUAGOu2Yv3VACXHlltOIv4RLrhqng8vc3kMM6Wfi9qV9ZAGOGAglY%2FDYLCM6SVMPO5xsIGOqUB%2FPrbuvzban%2BN0URjVDfSfjV45OwsFMbHUVEWNhZEG2y862bj9Xmoouv0TWqlJUdZB55ZG9SLub1HgpLfdb9hFgAeoqY%2BsaT7gdIpZQFfj7bhBluyZ5WiPWWPJ8lL%2BeH4Vw6SLdG5Gkq%2BFf2ZVPdthbk1P9l5sxkCVd9V5AVvHyL3fZjSGih48sKZY45VsNIWaD2eOfq5mNsBPcT6vcTn4sxyjwOM&X-Amz-Signature=d69a3c717afdfa3e1970d56070778865d55191bcadc349af2413e8c0df9c8dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

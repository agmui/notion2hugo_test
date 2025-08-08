---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZXLMBF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDzWOpXuTw5sKWVpBv1jJ6T6V1LjWP%2BZII9Q%2FM6bblVggIgPJ7Yist%2Fxc79evipSwexcKZirKtXLuDhgwuSQMDRI14qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsaOO91%2Blt%2BX%2FkczSrcA5zv3DjD8oM1CpryJ80Mx9DQtHiljfuS7LUXE3NN06zIdHUbXtfa66dA7wPvSF9oLYL%2FTAEi9CJXrXkKJog3A3jzvAUmHOrjEO4XLvfAJBBIHCFyjCXX6PkVg%2Bm8RlsmXyDqmXskHaAnJDglYxufb5AsSSZZT%2BRa4tkvAwGEs6e2N1JlN9yFZbFT3EbUpKQRYvN5HCREhQGct%2B%2FYH5AkeLP5AbiFuo56nwHO8YLK6R%2FnXtw%2FCmXw9FCSMq7sB2y%2F0gaaWEeU9dYHfj3IMh40Jf34r6Vfs3LacA2GlnzbW26nFkbzhA825QLXCsABFgXVHUEA7i3cOulP6LvKiiKyTh0zvAUHrF6FZNSnRslWBMbIrUSlk1mZJdNc6Pusij9INwcLfZlsCrnjygEziR8wl0%2Ff9QRdtJQrzYxup%2BlqUtKAvsYwar4q6E1mYev3i6CBAoNk3Zq1IqL%2F96%2BqvNeVVMnCyHT0PcsQjuFw9DkNbCdT8hxRQqjjHp2eWTKLFltiHPUOUiwnlFzEwNlh2TCsjRYjHND1RekVRWZYzDunaRPRE2%2BtrTpD%2BrjL3MVfWQyfsUlDAeggUDNCHawZlDM5Wi9URJIiyJZyBa0SIjE1P7ThOil%2Bx4fRMQ91ocNRMOTG1sQGOqUBG6VJbdb5y7%2F6GzlXfNFlt%2B4bL2JHHJriSZwwMDdnQMf%2FS9RLKNisRSSk1v1Gzm%2BdDHwhDzjfwNQoxULddBjyf3WarauWnAu6d1C%2BNJfqueH%2B3vZkvNu%2BDqvGevWvlTIKbhKz2ApUl5gy7ihdJ8itOtho7sOKvnp69L98Z3YhOJeGpD2krglWshcIyIWt%2Fd2o%2BrQdsA5ivAe95sQVTx5IApj8rm8D&X-Amz-Signature=4cc271d53699f59bed3b5607214c6d2ead47ec344c7f90d56f5901eaf52f3db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZXLMBF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDzWOpXuTw5sKWVpBv1jJ6T6V1LjWP%2BZII9Q%2FM6bblVggIgPJ7Yist%2Fxc79evipSwexcKZirKtXLuDhgwuSQMDRI14qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsaOO91%2Blt%2BX%2FkczSrcA5zv3DjD8oM1CpryJ80Mx9DQtHiljfuS7LUXE3NN06zIdHUbXtfa66dA7wPvSF9oLYL%2FTAEi9CJXrXkKJog3A3jzvAUmHOrjEO4XLvfAJBBIHCFyjCXX6PkVg%2Bm8RlsmXyDqmXskHaAnJDglYxufb5AsSSZZT%2BRa4tkvAwGEs6e2N1JlN9yFZbFT3EbUpKQRYvN5HCREhQGct%2B%2FYH5AkeLP5AbiFuo56nwHO8YLK6R%2FnXtw%2FCmXw9FCSMq7sB2y%2F0gaaWEeU9dYHfj3IMh40Jf34r6Vfs3LacA2GlnzbW26nFkbzhA825QLXCsABFgXVHUEA7i3cOulP6LvKiiKyTh0zvAUHrF6FZNSnRslWBMbIrUSlk1mZJdNc6Pusij9INwcLfZlsCrnjygEziR8wl0%2Ff9QRdtJQrzYxup%2BlqUtKAvsYwar4q6E1mYev3i6CBAoNk3Zq1IqL%2F96%2BqvNeVVMnCyHT0PcsQjuFw9DkNbCdT8hxRQqjjHp2eWTKLFltiHPUOUiwnlFzEwNlh2TCsjRYjHND1RekVRWZYzDunaRPRE2%2BtrTpD%2BrjL3MVfWQyfsUlDAeggUDNCHawZlDM5Wi9URJIiyJZyBa0SIjE1P7ThOil%2Bx4fRMQ91ocNRMOTG1sQGOqUBG6VJbdb5y7%2F6GzlXfNFlt%2B4bL2JHHJriSZwwMDdnQMf%2FS9RLKNisRSSk1v1Gzm%2BdDHwhDzjfwNQoxULddBjyf3WarauWnAu6d1C%2BNJfqueH%2B3vZkvNu%2BDqvGevWvlTIKbhKz2ApUl5gy7ihdJ8itOtho7sOKvnp69L98Z3YhOJeGpD2krglWshcIyIWt%2Fd2o%2BrQdsA5ivAe95sQVTx5IApj8rm8D&X-Amz-Signature=125b0035682113bdaabb23fbebb20a80a5ce076f721b41a15702689689e2c7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZXLMBF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDzWOpXuTw5sKWVpBv1jJ6T6V1LjWP%2BZII9Q%2FM6bblVggIgPJ7Yist%2Fxc79evipSwexcKZirKtXLuDhgwuSQMDRI14qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsaOO91%2Blt%2BX%2FkczSrcA5zv3DjD8oM1CpryJ80Mx9DQtHiljfuS7LUXE3NN06zIdHUbXtfa66dA7wPvSF9oLYL%2FTAEi9CJXrXkKJog3A3jzvAUmHOrjEO4XLvfAJBBIHCFyjCXX6PkVg%2Bm8RlsmXyDqmXskHaAnJDglYxufb5AsSSZZT%2BRa4tkvAwGEs6e2N1JlN9yFZbFT3EbUpKQRYvN5HCREhQGct%2B%2FYH5AkeLP5AbiFuo56nwHO8YLK6R%2FnXtw%2FCmXw9FCSMq7sB2y%2F0gaaWEeU9dYHfj3IMh40Jf34r6Vfs3LacA2GlnzbW26nFkbzhA825QLXCsABFgXVHUEA7i3cOulP6LvKiiKyTh0zvAUHrF6FZNSnRslWBMbIrUSlk1mZJdNc6Pusij9INwcLfZlsCrnjygEziR8wl0%2Ff9QRdtJQrzYxup%2BlqUtKAvsYwar4q6E1mYev3i6CBAoNk3Zq1IqL%2F96%2BqvNeVVMnCyHT0PcsQjuFw9DkNbCdT8hxRQqjjHp2eWTKLFltiHPUOUiwnlFzEwNlh2TCsjRYjHND1RekVRWZYzDunaRPRE2%2BtrTpD%2BrjL3MVfWQyfsUlDAeggUDNCHawZlDM5Wi9URJIiyJZyBa0SIjE1P7ThOil%2Bx4fRMQ91ocNRMOTG1sQGOqUBG6VJbdb5y7%2F6GzlXfNFlt%2B4bL2JHHJriSZwwMDdnQMf%2FS9RLKNisRSSk1v1Gzm%2BdDHwhDzjfwNQoxULddBjyf3WarauWnAu6d1C%2BNJfqueH%2B3vZkvNu%2BDqvGevWvlTIKbhKz2ApUl5gy7ihdJ8itOtho7sOKvnp69L98Z3YhOJeGpD2krglWshcIyIWt%2Fd2o%2BrQdsA5ivAe95sQVTx5IApj8rm8D&X-Amz-Signature=80a2ffc669529bc8b39024cab2c070e48543f580e0a76d9e404cd8113bc2184d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZXLMBF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDzWOpXuTw5sKWVpBv1jJ6T6V1LjWP%2BZII9Q%2FM6bblVggIgPJ7Yist%2Fxc79evipSwexcKZirKtXLuDhgwuSQMDRI14qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsaOO91%2Blt%2BX%2FkczSrcA5zv3DjD8oM1CpryJ80Mx9DQtHiljfuS7LUXE3NN06zIdHUbXtfa66dA7wPvSF9oLYL%2FTAEi9CJXrXkKJog3A3jzvAUmHOrjEO4XLvfAJBBIHCFyjCXX6PkVg%2Bm8RlsmXyDqmXskHaAnJDglYxufb5AsSSZZT%2BRa4tkvAwGEs6e2N1JlN9yFZbFT3EbUpKQRYvN5HCREhQGct%2B%2FYH5AkeLP5AbiFuo56nwHO8YLK6R%2FnXtw%2FCmXw9FCSMq7sB2y%2F0gaaWEeU9dYHfj3IMh40Jf34r6Vfs3LacA2GlnzbW26nFkbzhA825QLXCsABFgXVHUEA7i3cOulP6LvKiiKyTh0zvAUHrF6FZNSnRslWBMbIrUSlk1mZJdNc6Pusij9INwcLfZlsCrnjygEziR8wl0%2Ff9QRdtJQrzYxup%2BlqUtKAvsYwar4q6E1mYev3i6CBAoNk3Zq1IqL%2F96%2BqvNeVVMnCyHT0PcsQjuFw9DkNbCdT8hxRQqjjHp2eWTKLFltiHPUOUiwnlFzEwNlh2TCsjRYjHND1RekVRWZYzDunaRPRE2%2BtrTpD%2BrjL3MVfWQyfsUlDAeggUDNCHawZlDM5Wi9URJIiyJZyBa0SIjE1P7ThOil%2Bx4fRMQ91ocNRMOTG1sQGOqUBG6VJbdb5y7%2F6GzlXfNFlt%2B4bL2JHHJriSZwwMDdnQMf%2FS9RLKNisRSSk1v1Gzm%2BdDHwhDzjfwNQoxULddBjyf3WarauWnAu6d1C%2BNJfqueH%2B3vZkvNu%2BDqvGevWvlTIKbhKz2ApUl5gy7ihdJ8itOtho7sOKvnp69L98Z3YhOJeGpD2krglWshcIyIWt%2Fd2o%2BrQdsA5ivAe95sQVTx5IApj8rm8D&X-Amz-Signature=7953c4737a2fff31fcd055bac1a64608b64cb809371ceb73de40f864e8453b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZXLMBF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDzWOpXuTw5sKWVpBv1jJ6T6V1LjWP%2BZII9Q%2FM6bblVggIgPJ7Yist%2Fxc79evipSwexcKZirKtXLuDhgwuSQMDRI14qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsaOO91%2Blt%2BX%2FkczSrcA5zv3DjD8oM1CpryJ80Mx9DQtHiljfuS7LUXE3NN06zIdHUbXtfa66dA7wPvSF9oLYL%2FTAEi9CJXrXkKJog3A3jzvAUmHOrjEO4XLvfAJBBIHCFyjCXX6PkVg%2Bm8RlsmXyDqmXskHaAnJDglYxufb5AsSSZZT%2BRa4tkvAwGEs6e2N1JlN9yFZbFT3EbUpKQRYvN5HCREhQGct%2B%2FYH5AkeLP5AbiFuo56nwHO8YLK6R%2FnXtw%2FCmXw9FCSMq7sB2y%2F0gaaWEeU9dYHfj3IMh40Jf34r6Vfs3LacA2GlnzbW26nFkbzhA825QLXCsABFgXVHUEA7i3cOulP6LvKiiKyTh0zvAUHrF6FZNSnRslWBMbIrUSlk1mZJdNc6Pusij9INwcLfZlsCrnjygEziR8wl0%2Ff9QRdtJQrzYxup%2BlqUtKAvsYwar4q6E1mYev3i6CBAoNk3Zq1IqL%2F96%2BqvNeVVMnCyHT0PcsQjuFw9DkNbCdT8hxRQqjjHp2eWTKLFltiHPUOUiwnlFzEwNlh2TCsjRYjHND1RekVRWZYzDunaRPRE2%2BtrTpD%2BrjL3MVfWQyfsUlDAeggUDNCHawZlDM5Wi9URJIiyJZyBa0SIjE1P7ThOil%2Bx4fRMQ91ocNRMOTG1sQGOqUBG6VJbdb5y7%2F6GzlXfNFlt%2B4bL2JHHJriSZwwMDdnQMf%2FS9RLKNisRSSk1v1Gzm%2BdDHwhDzjfwNQoxULddBjyf3WarauWnAu6d1C%2BNJfqueH%2B3vZkvNu%2BDqvGevWvlTIKbhKz2ApUl5gy7ihdJ8itOtho7sOKvnp69L98Z3YhOJeGpD2krglWshcIyIWt%2Fd2o%2BrQdsA5ivAe95sQVTx5IApj8rm8D&X-Amz-Signature=ea714e26c506ac44767e9fd07184520a180c2718c9e62d05cb73e478452a4607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZXLMBF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDzWOpXuTw5sKWVpBv1jJ6T6V1LjWP%2BZII9Q%2FM6bblVggIgPJ7Yist%2Fxc79evipSwexcKZirKtXLuDhgwuSQMDRI14qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsaOO91%2Blt%2BX%2FkczSrcA5zv3DjD8oM1CpryJ80Mx9DQtHiljfuS7LUXE3NN06zIdHUbXtfa66dA7wPvSF9oLYL%2FTAEi9CJXrXkKJog3A3jzvAUmHOrjEO4XLvfAJBBIHCFyjCXX6PkVg%2Bm8RlsmXyDqmXskHaAnJDglYxufb5AsSSZZT%2BRa4tkvAwGEs6e2N1JlN9yFZbFT3EbUpKQRYvN5HCREhQGct%2B%2FYH5AkeLP5AbiFuo56nwHO8YLK6R%2FnXtw%2FCmXw9FCSMq7sB2y%2F0gaaWEeU9dYHfj3IMh40Jf34r6Vfs3LacA2GlnzbW26nFkbzhA825QLXCsABFgXVHUEA7i3cOulP6LvKiiKyTh0zvAUHrF6FZNSnRslWBMbIrUSlk1mZJdNc6Pusij9INwcLfZlsCrnjygEziR8wl0%2Ff9QRdtJQrzYxup%2BlqUtKAvsYwar4q6E1mYev3i6CBAoNk3Zq1IqL%2F96%2BqvNeVVMnCyHT0PcsQjuFw9DkNbCdT8hxRQqjjHp2eWTKLFltiHPUOUiwnlFzEwNlh2TCsjRYjHND1RekVRWZYzDunaRPRE2%2BtrTpD%2BrjL3MVfWQyfsUlDAeggUDNCHawZlDM5Wi9URJIiyJZyBa0SIjE1P7ThOil%2Bx4fRMQ91ocNRMOTG1sQGOqUBG6VJbdb5y7%2F6GzlXfNFlt%2B4bL2JHHJriSZwwMDdnQMf%2FS9RLKNisRSSk1v1Gzm%2BdDHwhDzjfwNQoxULddBjyf3WarauWnAu6d1C%2BNJfqueH%2B3vZkvNu%2BDqvGevWvlTIKbhKz2ApUl5gy7ihdJ8itOtho7sOKvnp69L98Z3YhOJeGpD2krglWshcIyIWt%2Fd2o%2BrQdsA5ivAe95sQVTx5IApj8rm8D&X-Amz-Signature=6ac20a4cc50c91b14f33fd30061403fc62bfd63f8309b75ea8f89a2ed940c6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZXLMBF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDzWOpXuTw5sKWVpBv1jJ6T6V1LjWP%2BZII9Q%2FM6bblVggIgPJ7Yist%2Fxc79evipSwexcKZirKtXLuDhgwuSQMDRI14qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsaOO91%2Blt%2BX%2FkczSrcA5zv3DjD8oM1CpryJ80Mx9DQtHiljfuS7LUXE3NN06zIdHUbXtfa66dA7wPvSF9oLYL%2FTAEi9CJXrXkKJog3A3jzvAUmHOrjEO4XLvfAJBBIHCFyjCXX6PkVg%2Bm8RlsmXyDqmXskHaAnJDglYxufb5AsSSZZT%2BRa4tkvAwGEs6e2N1JlN9yFZbFT3EbUpKQRYvN5HCREhQGct%2B%2FYH5AkeLP5AbiFuo56nwHO8YLK6R%2FnXtw%2FCmXw9FCSMq7sB2y%2F0gaaWEeU9dYHfj3IMh40Jf34r6Vfs3LacA2GlnzbW26nFkbzhA825QLXCsABFgXVHUEA7i3cOulP6LvKiiKyTh0zvAUHrF6FZNSnRslWBMbIrUSlk1mZJdNc6Pusij9INwcLfZlsCrnjygEziR8wl0%2Ff9QRdtJQrzYxup%2BlqUtKAvsYwar4q6E1mYev3i6CBAoNk3Zq1IqL%2F96%2BqvNeVVMnCyHT0PcsQjuFw9DkNbCdT8hxRQqjjHp2eWTKLFltiHPUOUiwnlFzEwNlh2TCsjRYjHND1RekVRWZYzDunaRPRE2%2BtrTpD%2BrjL3MVfWQyfsUlDAeggUDNCHawZlDM5Wi9URJIiyJZyBa0SIjE1P7ThOil%2Bx4fRMQ91ocNRMOTG1sQGOqUBG6VJbdb5y7%2F6GzlXfNFlt%2B4bL2JHHJriSZwwMDdnQMf%2FS9RLKNisRSSk1v1Gzm%2BdDHwhDzjfwNQoxULddBjyf3WarauWnAu6d1C%2BNJfqueH%2B3vZkvNu%2BDqvGevWvlTIKbhKz2ApUl5gy7ihdJ8itOtho7sOKvnp69L98Z3YhOJeGpD2krglWshcIyIWt%2Fd2o%2BrQdsA5ivAe95sQVTx5IApj8rm8D&X-Amz-Signature=17b8593b89de6c03dffbeef79801260a289fe2bd51e9f53191eb7f69ef9eaa99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

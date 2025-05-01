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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFRUEFR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDhfHSBhYkS1OPv9qrUGQDHmkvustHpbdluynVgbBheLwIhAMATmYjxx9Ic2LZTDWeG3NRo%2FZCFNU7MVim%2BfUtKtSkQKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1T%2FfMV6ictWjlFg0q3AOeaKqrCqZUqbnN6OInZjcZbAlVdBz3b%2B0USzex6WwKLF3gbqHdIRGLESIEJLIdI8xRd%2Fizq3i9hO8tUSQ8xCoz7gCcZf%2FcLolfbSViiYLiCLvTGBfl7RpAVNTMaqRqRBuLE%2FYW%2FzEyCf1WSscLcCs5LkSHXb9DwhIBLbiTE9ShrLWDj%2BBy09Mfu7psTnA5mvhc7NA%2F0Cka%2Fyq83c%2F1%2FmMbUzmhYEjAAw0LXuDCSsqYe2Kmf3NDyTtmIQx%2BmxQwK%2B4WsaYs5UyYR9pH7R7YStUHJxlH2EsECPxWiu%2FojW%2FTPT1hF1HXGoQ7UyPJMhFq1p8mviDb2kXWlqSzc73y4YaW%2B%2BmpNNrY56eREf%2B6daN6Xx%2F4U0PdyA7nyQQTXmZFoVadc2%2BzQpwDz%2Fysd%2BYLVBsgpka0JXHE%2FufAdPcTarEgkR3Gw7i1CCaJbFEdDfhpi1nGM%2B7r0a2xdUv6d5nUjVmog%2BNSlTaR6XlUhgzg%2Bg%2Fd5Vl7yeG5%2F1AiSfPnqsH9mRzDlUnW6jfB60bbL7wqTeGaRc134kqvQ0Aqxu6t%2BAjw2bsr6Z3B3EQfQkowKAwbxFRKPUK%2F1eeZMjG2BF0ydZ6HCnYrtTh%2FiPews3Nhs7MnRbUTwV8ZDHYtEwshkjCNns3ABjqkAT8hpB6cxWr2MLr4BkFRiIjURb%2FyTHWhLrQJadzWr8Z0kN35kJe3wX7ZKpWLe7uCjNKbG%2FiOfjsm9P8NyuwZkgT1PCrVtNKWlFxQR7wC6efcQg3SANig2apGYtGNrpH44Tg%2BKZwgyYGjAASv3Lc1Ky9kMylqaxx6dla6xpqEOEpM%2B4CUGicmlwan2xHbQQegg71kr7QCPffJS0L%2FtEVadacfR6Su&X-Amz-Signature=73c6e7f92b436f0a5a6e74db90afe785b2c115d5a1c5bab0235468f6a3989339&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFRUEFR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDhfHSBhYkS1OPv9qrUGQDHmkvustHpbdluynVgbBheLwIhAMATmYjxx9Ic2LZTDWeG3NRo%2FZCFNU7MVim%2BfUtKtSkQKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1T%2FfMV6ictWjlFg0q3AOeaKqrCqZUqbnN6OInZjcZbAlVdBz3b%2B0USzex6WwKLF3gbqHdIRGLESIEJLIdI8xRd%2Fizq3i9hO8tUSQ8xCoz7gCcZf%2FcLolfbSViiYLiCLvTGBfl7RpAVNTMaqRqRBuLE%2FYW%2FzEyCf1WSscLcCs5LkSHXb9DwhIBLbiTE9ShrLWDj%2BBy09Mfu7psTnA5mvhc7NA%2F0Cka%2Fyq83c%2F1%2FmMbUzmhYEjAAw0LXuDCSsqYe2Kmf3NDyTtmIQx%2BmxQwK%2B4WsaYs5UyYR9pH7R7YStUHJxlH2EsECPxWiu%2FojW%2FTPT1hF1HXGoQ7UyPJMhFq1p8mviDb2kXWlqSzc73y4YaW%2B%2BmpNNrY56eREf%2B6daN6Xx%2F4U0PdyA7nyQQTXmZFoVadc2%2BzQpwDz%2Fysd%2BYLVBsgpka0JXHE%2FufAdPcTarEgkR3Gw7i1CCaJbFEdDfhpi1nGM%2B7r0a2xdUv6d5nUjVmog%2BNSlTaR6XlUhgzg%2Bg%2Fd5Vl7yeG5%2F1AiSfPnqsH9mRzDlUnW6jfB60bbL7wqTeGaRc134kqvQ0Aqxu6t%2BAjw2bsr6Z3B3EQfQkowKAwbxFRKPUK%2F1eeZMjG2BF0ydZ6HCnYrtTh%2FiPews3Nhs7MnRbUTwV8ZDHYtEwshkjCNns3ABjqkAT8hpB6cxWr2MLr4BkFRiIjURb%2FyTHWhLrQJadzWr8Z0kN35kJe3wX7ZKpWLe7uCjNKbG%2FiOfjsm9P8NyuwZkgT1PCrVtNKWlFxQR7wC6efcQg3SANig2apGYtGNrpH44Tg%2BKZwgyYGjAASv3Lc1Ky9kMylqaxx6dla6xpqEOEpM%2B4CUGicmlwan2xHbQQegg71kr7QCPffJS0L%2FtEVadacfR6Su&X-Amz-Signature=58cd1998b5e9d90538cb14b488c5318dc6ed965f1f9e182f3623802e4b4b4e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFRUEFR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDhfHSBhYkS1OPv9qrUGQDHmkvustHpbdluynVgbBheLwIhAMATmYjxx9Ic2LZTDWeG3NRo%2FZCFNU7MVim%2BfUtKtSkQKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1T%2FfMV6ictWjlFg0q3AOeaKqrCqZUqbnN6OInZjcZbAlVdBz3b%2B0USzex6WwKLF3gbqHdIRGLESIEJLIdI8xRd%2Fizq3i9hO8tUSQ8xCoz7gCcZf%2FcLolfbSViiYLiCLvTGBfl7RpAVNTMaqRqRBuLE%2FYW%2FzEyCf1WSscLcCs5LkSHXb9DwhIBLbiTE9ShrLWDj%2BBy09Mfu7psTnA5mvhc7NA%2F0Cka%2Fyq83c%2F1%2FmMbUzmhYEjAAw0LXuDCSsqYe2Kmf3NDyTtmIQx%2BmxQwK%2B4WsaYs5UyYR9pH7R7YStUHJxlH2EsECPxWiu%2FojW%2FTPT1hF1HXGoQ7UyPJMhFq1p8mviDb2kXWlqSzc73y4YaW%2B%2BmpNNrY56eREf%2B6daN6Xx%2F4U0PdyA7nyQQTXmZFoVadc2%2BzQpwDz%2Fysd%2BYLVBsgpka0JXHE%2FufAdPcTarEgkR3Gw7i1CCaJbFEdDfhpi1nGM%2B7r0a2xdUv6d5nUjVmog%2BNSlTaR6XlUhgzg%2Bg%2Fd5Vl7yeG5%2F1AiSfPnqsH9mRzDlUnW6jfB60bbL7wqTeGaRc134kqvQ0Aqxu6t%2BAjw2bsr6Z3B3EQfQkowKAwbxFRKPUK%2F1eeZMjG2BF0ydZ6HCnYrtTh%2FiPews3Nhs7MnRbUTwV8ZDHYtEwshkjCNns3ABjqkAT8hpB6cxWr2MLr4BkFRiIjURb%2FyTHWhLrQJadzWr8Z0kN35kJe3wX7ZKpWLe7uCjNKbG%2FiOfjsm9P8NyuwZkgT1PCrVtNKWlFxQR7wC6efcQg3SANig2apGYtGNrpH44Tg%2BKZwgyYGjAASv3Lc1Ky9kMylqaxx6dla6xpqEOEpM%2B4CUGicmlwan2xHbQQegg71kr7QCPffJS0L%2FtEVadacfR6Su&X-Amz-Signature=57896f7df8533080f452e1791bf2ec37f150a4f76499f9674645dba671f88d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFRUEFR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDhfHSBhYkS1OPv9qrUGQDHmkvustHpbdluynVgbBheLwIhAMATmYjxx9Ic2LZTDWeG3NRo%2FZCFNU7MVim%2BfUtKtSkQKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1T%2FfMV6ictWjlFg0q3AOeaKqrCqZUqbnN6OInZjcZbAlVdBz3b%2B0USzex6WwKLF3gbqHdIRGLESIEJLIdI8xRd%2Fizq3i9hO8tUSQ8xCoz7gCcZf%2FcLolfbSViiYLiCLvTGBfl7RpAVNTMaqRqRBuLE%2FYW%2FzEyCf1WSscLcCs5LkSHXb9DwhIBLbiTE9ShrLWDj%2BBy09Mfu7psTnA5mvhc7NA%2F0Cka%2Fyq83c%2F1%2FmMbUzmhYEjAAw0LXuDCSsqYe2Kmf3NDyTtmIQx%2BmxQwK%2B4WsaYs5UyYR9pH7R7YStUHJxlH2EsECPxWiu%2FojW%2FTPT1hF1HXGoQ7UyPJMhFq1p8mviDb2kXWlqSzc73y4YaW%2B%2BmpNNrY56eREf%2B6daN6Xx%2F4U0PdyA7nyQQTXmZFoVadc2%2BzQpwDz%2Fysd%2BYLVBsgpka0JXHE%2FufAdPcTarEgkR3Gw7i1CCaJbFEdDfhpi1nGM%2B7r0a2xdUv6d5nUjVmog%2BNSlTaR6XlUhgzg%2Bg%2Fd5Vl7yeG5%2F1AiSfPnqsH9mRzDlUnW6jfB60bbL7wqTeGaRc134kqvQ0Aqxu6t%2BAjw2bsr6Z3B3EQfQkowKAwbxFRKPUK%2F1eeZMjG2BF0ydZ6HCnYrtTh%2FiPews3Nhs7MnRbUTwV8ZDHYtEwshkjCNns3ABjqkAT8hpB6cxWr2MLr4BkFRiIjURb%2FyTHWhLrQJadzWr8Z0kN35kJe3wX7ZKpWLe7uCjNKbG%2FiOfjsm9P8NyuwZkgT1PCrVtNKWlFxQR7wC6efcQg3SANig2apGYtGNrpH44Tg%2BKZwgyYGjAASv3Lc1Ky9kMylqaxx6dla6xpqEOEpM%2B4CUGicmlwan2xHbQQegg71kr7QCPffJS0L%2FtEVadacfR6Su&X-Amz-Signature=eceb42c766f3995b94a6a3bd15fa3feb6efc9c9381a6bdd12243ab7fa8cc94bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFRUEFR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDhfHSBhYkS1OPv9qrUGQDHmkvustHpbdluynVgbBheLwIhAMATmYjxx9Ic2LZTDWeG3NRo%2FZCFNU7MVim%2BfUtKtSkQKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1T%2FfMV6ictWjlFg0q3AOeaKqrCqZUqbnN6OInZjcZbAlVdBz3b%2B0USzex6WwKLF3gbqHdIRGLESIEJLIdI8xRd%2Fizq3i9hO8tUSQ8xCoz7gCcZf%2FcLolfbSViiYLiCLvTGBfl7RpAVNTMaqRqRBuLE%2FYW%2FzEyCf1WSscLcCs5LkSHXb9DwhIBLbiTE9ShrLWDj%2BBy09Mfu7psTnA5mvhc7NA%2F0Cka%2Fyq83c%2F1%2FmMbUzmhYEjAAw0LXuDCSsqYe2Kmf3NDyTtmIQx%2BmxQwK%2B4WsaYs5UyYR9pH7R7YStUHJxlH2EsECPxWiu%2FojW%2FTPT1hF1HXGoQ7UyPJMhFq1p8mviDb2kXWlqSzc73y4YaW%2B%2BmpNNrY56eREf%2B6daN6Xx%2F4U0PdyA7nyQQTXmZFoVadc2%2BzQpwDz%2Fysd%2BYLVBsgpka0JXHE%2FufAdPcTarEgkR3Gw7i1CCaJbFEdDfhpi1nGM%2B7r0a2xdUv6d5nUjVmog%2BNSlTaR6XlUhgzg%2Bg%2Fd5Vl7yeG5%2F1AiSfPnqsH9mRzDlUnW6jfB60bbL7wqTeGaRc134kqvQ0Aqxu6t%2BAjw2bsr6Z3B3EQfQkowKAwbxFRKPUK%2F1eeZMjG2BF0ydZ6HCnYrtTh%2FiPews3Nhs7MnRbUTwV8ZDHYtEwshkjCNns3ABjqkAT8hpB6cxWr2MLr4BkFRiIjURb%2FyTHWhLrQJadzWr8Z0kN35kJe3wX7ZKpWLe7uCjNKbG%2FiOfjsm9P8NyuwZkgT1PCrVtNKWlFxQR7wC6efcQg3SANig2apGYtGNrpH44Tg%2BKZwgyYGjAASv3Lc1Ky9kMylqaxx6dla6xpqEOEpM%2B4CUGicmlwan2xHbQQegg71kr7QCPffJS0L%2FtEVadacfR6Su&X-Amz-Signature=228f2baaa88f0b29b97574e51d6c00db02fc79ee664a719286a74b9064fac545&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFRUEFR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDhfHSBhYkS1OPv9qrUGQDHmkvustHpbdluynVgbBheLwIhAMATmYjxx9Ic2LZTDWeG3NRo%2FZCFNU7MVim%2BfUtKtSkQKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1T%2FfMV6ictWjlFg0q3AOeaKqrCqZUqbnN6OInZjcZbAlVdBz3b%2B0USzex6WwKLF3gbqHdIRGLESIEJLIdI8xRd%2Fizq3i9hO8tUSQ8xCoz7gCcZf%2FcLolfbSViiYLiCLvTGBfl7RpAVNTMaqRqRBuLE%2FYW%2FzEyCf1WSscLcCs5LkSHXb9DwhIBLbiTE9ShrLWDj%2BBy09Mfu7psTnA5mvhc7NA%2F0Cka%2Fyq83c%2F1%2FmMbUzmhYEjAAw0LXuDCSsqYe2Kmf3NDyTtmIQx%2BmxQwK%2B4WsaYs5UyYR9pH7R7YStUHJxlH2EsECPxWiu%2FojW%2FTPT1hF1HXGoQ7UyPJMhFq1p8mviDb2kXWlqSzc73y4YaW%2B%2BmpNNrY56eREf%2B6daN6Xx%2F4U0PdyA7nyQQTXmZFoVadc2%2BzQpwDz%2Fysd%2BYLVBsgpka0JXHE%2FufAdPcTarEgkR3Gw7i1CCaJbFEdDfhpi1nGM%2B7r0a2xdUv6d5nUjVmog%2BNSlTaR6XlUhgzg%2Bg%2Fd5Vl7yeG5%2F1AiSfPnqsH9mRzDlUnW6jfB60bbL7wqTeGaRc134kqvQ0Aqxu6t%2BAjw2bsr6Z3B3EQfQkowKAwbxFRKPUK%2F1eeZMjG2BF0ydZ6HCnYrtTh%2FiPews3Nhs7MnRbUTwV8ZDHYtEwshkjCNns3ABjqkAT8hpB6cxWr2MLr4BkFRiIjURb%2FyTHWhLrQJadzWr8Z0kN35kJe3wX7ZKpWLe7uCjNKbG%2FiOfjsm9P8NyuwZkgT1PCrVtNKWlFxQR7wC6efcQg3SANig2apGYtGNrpH44Tg%2BKZwgyYGjAASv3Lc1Ky9kMylqaxx6dla6xpqEOEpM%2B4CUGicmlwan2xHbQQegg71kr7QCPffJS0L%2FtEVadacfR6Su&X-Amz-Signature=ed68baeb3a0492f28001bb603deb2baaaafa9e4035eb7f2cdb20c6e7528c21c8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFRUEFR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDhfHSBhYkS1OPv9qrUGQDHmkvustHpbdluynVgbBheLwIhAMATmYjxx9Ic2LZTDWeG3NRo%2FZCFNU7MVim%2BfUtKtSkQKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1T%2FfMV6ictWjlFg0q3AOeaKqrCqZUqbnN6OInZjcZbAlVdBz3b%2B0USzex6WwKLF3gbqHdIRGLESIEJLIdI8xRd%2Fizq3i9hO8tUSQ8xCoz7gCcZf%2FcLolfbSViiYLiCLvTGBfl7RpAVNTMaqRqRBuLE%2FYW%2FzEyCf1WSscLcCs5LkSHXb9DwhIBLbiTE9ShrLWDj%2BBy09Mfu7psTnA5mvhc7NA%2F0Cka%2Fyq83c%2F1%2FmMbUzmhYEjAAw0LXuDCSsqYe2Kmf3NDyTtmIQx%2BmxQwK%2B4WsaYs5UyYR9pH7R7YStUHJxlH2EsECPxWiu%2FojW%2FTPT1hF1HXGoQ7UyPJMhFq1p8mviDb2kXWlqSzc73y4YaW%2B%2BmpNNrY56eREf%2B6daN6Xx%2F4U0PdyA7nyQQTXmZFoVadc2%2BzQpwDz%2Fysd%2BYLVBsgpka0JXHE%2FufAdPcTarEgkR3Gw7i1CCaJbFEdDfhpi1nGM%2B7r0a2xdUv6d5nUjVmog%2BNSlTaR6XlUhgzg%2Bg%2Fd5Vl7yeG5%2F1AiSfPnqsH9mRzDlUnW6jfB60bbL7wqTeGaRc134kqvQ0Aqxu6t%2BAjw2bsr6Z3B3EQfQkowKAwbxFRKPUK%2F1eeZMjG2BF0ydZ6HCnYrtTh%2FiPews3Nhs7MnRbUTwV8ZDHYtEwshkjCNns3ABjqkAT8hpB6cxWr2MLr4BkFRiIjURb%2FyTHWhLrQJadzWr8Z0kN35kJe3wX7ZKpWLe7uCjNKbG%2FiOfjsm9P8NyuwZkgT1PCrVtNKWlFxQR7wC6efcQg3SANig2apGYtGNrpH44Tg%2BKZwgyYGjAASv3Lc1Ky9kMylqaxx6dla6xpqEOEpM%2B4CUGicmlwan2xHbQQegg71kr7QCPffJS0L%2FtEVadacfR6Su&X-Amz-Signature=21570595e0cf11058762da3e8a78876ecbe8226b834f2e5926ef6677e5b8b060&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

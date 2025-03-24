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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAI5F6Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZSBF%2Ff3iTlEA8hd7b1UWAW%2Fyh1FwelUEvTXOc9b8V5AiBJjTRLwEq5uSUf2c4tKaxY35JDAs3bbESr4EWAG%2BeyjSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEWPFj%2Bkl2%2FLOkwZKtwDNTvhDqxTm922uj3o3%2BGA3Y5rNsQgCwsTUxoLrjfhcZVzU8THZHANjwoOMpsRPfkko%2F5QHgAbdXdHBlvp%2F197owAYjXL5lCADvlJyPrpTcKd6QvUkRfxZFjNdlGqsvBgO9uVReoPC8R6ldzVqAcY%2FjC69sf6fIDEP5S3obtfYyv0uK2p9vGjgodcf7GfhY4Aa94XsdvRDEIkU0uZ8G%2BsFXe13Jeh%2Fi2AdSjTMajU7Un9Buyj%2BAZ3NHtLXcG8dZu6lAd2eGMulRoujvKwNZBoEe1aMUL%2Bx2sALg4DPIEcycdPV5AICwUx2W5QfMoxdjAzGg%2FcYbY1kG1op3HWtD%2BLaPdHImzjgDaPUh8FLtlJ30jLbMels4xHddwTR5ZavUTYJpsgMf5fLn5bDyi6xKvfeUPFhhl9HNSK6gi81wIDZdif7bm9NhxpOv0SUHb9rlFnpg7AeTh7Wn%2B4dYGSIPj20j6s1SkVEf%2FAcCmKaEgaArgIULNGp1IBlXUEtQ0jagmzrM%2ByFIWbk9R5T381VI52aPM2wjrU9QFTWz%2BmOXK%2B%2F%2BOObOVgiqEcks4ObTTDK1a%2F0fXyGkowjPu6lNcjoCmkYBOtgbb%2FgT45%2FrRCm1gb5ugWmtAAVR%2FUiyLigmbww%2B4%2BFvwY6pgF1EhS53Ltg8DVijLNin%2BtVFDS507jBCJa82SeU3ldubnGw030xQ9TXDXWVzqus4JbBx0lEROul7Fck4j8t4taeSmgu36RhrVvbSMpsNbmw1HJ%2FvmBa4OLGaLyYPwTss99%2BNu04HjUPScKBjkRSPrUyapN8yh36IQIKIc7LwTkOOegi40%2FkVKF6rRR8JmOJZ1k5FfLbgyz%2B2c3hCD5pRzLS4wrTuWX4&X-Amz-Signature=1aacfaa45435f21d909c9493f9d38afeef23c48a3b4b2cdb9e6fad133c5c96d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAI5F6Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZSBF%2Ff3iTlEA8hd7b1UWAW%2Fyh1FwelUEvTXOc9b8V5AiBJjTRLwEq5uSUf2c4tKaxY35JDAs3bbESr4EWAG%2BeyjSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEWPFj%2Bkl2%2FLOkwZKtwDNTvhDqxTm922uj3o3%2BGA3Y5rNsQgCwsTUxoLrjfhcZVzU8THZHANjwoOMpsRPfkko%2F5QHgAbdXdHBlvp%2F197owAYjXL5lCADvlJyPrpTcKd6QvUkRfxZFjNdlGqsvBgO9uVReoPC8R6ldzVqAcY%2FjC69sf6fIDEP5S3obtfYyv0uK2p9vGjgodcf7GfhY4Aa94XsdvRDEIkU0uZ8G%2BsFXe13Jeh%2Fi2AdSjTMajU7Un9Buyj%2BAZ3NHtLXcG8dZu6lAd2eGMulRoujvKwNZBoEe1aMUL%2Bx2sALg4DPIEcycdPV5AICwUx2W5QfMoxdjAzGg%2FcYbY1kG1op3HWtD%2BLaPdHImzjgDaPUh8FLtlJ30jLbMels4xHddwTR5ZavUTYJpsgMf5fLn5bDyi6xKvfeUPFhhl9HNSK6gi81wIDZdif7bm9NhxpOv0SUHb9rlFnpg7AeTh7Wn%2B4dYGSIPj20j6s1SkVEf%2FAcCmKaEgaArgIULNGp1IBlXUEtQ0jagmzrM%2ByFIWbk9R5T381VI52aPM2wjrU9QFTWz%2BmOXK%2B%2F%2BOObOVgiqEcks4ObTTDK1a%2F0fXyGkowjPu6lNcjoCmkYBOtgbb%2FgT45%2FrRCm1gb5ugWmtAAVR%2FUiyLigmbww%2B4%2BFvwY6pgF1EhS53Ltg8DVijLNin%2BtVFDS507jBCJa82SeU3ldubnGw030xQ9TXDXWVzqus4JbBx0lEROul7Fck4j8t4taeSmgu36RhrVvbSMpsNbmw1HJ%2FvmBa4OLGaLyYPwTss99%2BNu04HjUPScKBjkRSPrUyapN8yh36IQIKIc7LwTkOOegi40%2FkVKF6rRR8JmOJZ1k5FfLbgyz%2B2c3hCD5pRzLS4wrTuWX4&X-Amz-Signature=5b723b2c30eea3fd9e10486b0eb3ae7dfcfcf760a7a70d71b0dffa94aba6ebd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAI5F6Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZSBF%2Ff3iTlEA8hd7b1UWAW%2Fyh1FwelUEvTXOc9b8V5AiBJjTRLwEq5uSUf2c4tKaxY35JDAs3bbESr4EWAG%2BeyjSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEWPFj%2Bkl2%2FLOkwZKtwDNTvhDqxTm922uj3o3%2BGA3Y5rNsQgCwsTUxoLrjfhcZVzU8THZHANjwoOMpsRPfkko%2F5QHgAbdXdHBlvp%2F197owAYjXL5lCADvlJyPrpTcKd6QvUkRfxZFjNdlGqsvBgO9uVReoPC8R6ldzVqAcY%2FjC69sf6fIDEP5S3obtfYyv0uK2p9vGjgodcf7GfhY4Aa94XsdvRDEIkU0uZ8G%2BsFXe13Jeh%2Fi2AdSjTMajU7Un9Buyj%2BAZ3NHtLXcG8dZu6lAd2eGMulRoujvKwNZBoEe1aMUL%2Bx2sALg4DPIEcycdPV5AICwUx2W5QfMoxdjAzGg%2FcYbY1kG1op3HWtD%2BLaPdHImzjgDaPUh8FLtlJ30jLbMels4xHddwTR5ZavUTYJpsgMf5fLn5bDyi6xKvfeUPFhhl9HNSK6gi81wIDZdif7bm9NhxpOv0SUHb9rlFnpg7AeTh7Wn%2B4dYGSIPj20j6s1SkVEf%2FAcCmKaEgaArgIULNGp1IBlXUEtQ0jagmzrM%2ByFIWbk9R5T381VI52aPM2wjrU9QFTWz%2BmOXK%2B%2F%2BOObOVgiqEcks4ObTTDK1a%2F0fXyGkowjPu6lNcjoCmkYBOtgbb%2FgT45%2FrRCm1gb5ugWmtAAVR%2FUiyLigmbww%2B4%2BFvwY6pgF1EhS53Ltg8DVijLNin%2BtVFDS507jBCJa82SeU3ldubnGw030xQ9TXDXWVzqus4JbBx0lEROul7Fck4j8t4taeSmgu36RhrVvbSMpsNbmw1HJ%2FvmBa4OLGaLyYPwTss99%2BNu04HjUPScKBjkRSPrUyapN8yh36IQIKIc7LwTkOOegi40%2FkVKF6rRR8JmOJZ1k5FfLbgyz%2B2c3hCD5pRzLS4wrTuWX4&X-Amz-Signature=cd51133f990adbbcea947360c0b93dc175c7d0e123f3a343781cc43bf830771c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAI5F6Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZSBF%2Ff3iTlEA8hd7b1UWAW%2Fyh1FwelUEvTXOc9b8V5AiBJjTRLwEq5uSUf2c4tKaxY35JDAs3bbESr4EWAG%2BeyjSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEWPFj%2Bkl2%2FLOkwZKtwDNTvhDqxTm922uj3o3%2BGA3Y5rNsQgCwsTUxoLrjfhcZVzU8THZHANjwoOMpsRPfkko%2F5QHgAbdXdHBlvp%2F197owAYjXL5lCADvlJyPrpTcKd6QvUkRfxZFjNdlGqsvBgO9uVReoPC8R6ldzVqAcY%2FjC69sf6fIDEP5S3obtfYyv0uK2p9vGjgodcf7GfhY4Aa94XsdvRDEIkU0uZ8G%2BsFXe13Jeh%2Fi2AdSjTMajU7Un9Buyj%2BAZ3NHtLXcG8dZu6lAd2eGMulRoujvKwNZBoEe1aMUL%2Bx2sALg4DPIEcycdPV5AICwUx2W5QfMoxdjAzGg%2FcYbY1kG1op3HWtD%2BLaPdHImzjgDaPUh8FLtlJ30jLbMels4xHddwTR5ZavUTYJpsgMf5fLn5bDyi6xKvfeUPFhhl9HNSK6gi81wIDZdif7bm9NhxpOv0SUHb9rlFnpg7AeTh7Wn%2B4dYGSIPj20j6s1SkVEf%2FAcCmKaEgaArgIULNGp1IBlXUEtQ0jagmzrM%2ByFIWbk9R5T381VI52aPM2wjrU9QFTWz%2BmOXK%2B%2F%2BOObOVgiqEcks4ObTTDK1a%2F0fXyGkowjPu6lNcjoCmkYBOtgbb%2FgT45%2FrRCm1gb5ugWmtAAVR%2FUiyLigmbww%2B4%2BFvwY6pgF1EhS53Ltg8DVijLNin%2BtVFDS507jBCJa82SeU3ldubnGw030xQ9TXDXWVzqus4JbBx0lEROul7Fck4j8t4taeSmgu36RhrVvbSMpsNbmw1HJ%2FvmBa4OLGaLyYPwTss99%2BNu04HjUPScKBjkRSPrUyapN8yh36IQIKIc7LwTkOOegi40%2FkVKF6rRR8JmOJZ1k5FfLbgyz%2B2c3hCD5pRzLS4wrTuWX4&X-Amz-Signature=c7d36f955b2c2bde2ad52a85ce5589b91ebdf42423b1ca0551144954d31c8f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAI5F6Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZSBF%2Ff3iTlEA8hd7b1UWAW%2Fyh1FwelUEvTXOc9b8V5AiBJjTRLwEq5uSUf2c4tKaxY35JDAs3bbESr4EWAG%2BeyjSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEWPFj%2Bkl2%2FLOkwZKtwDNTvhDqxTm922uj3o3%2BGA3Y5rNsQgCwsTUxoLrjfhcZVzU8THZHANjwoOMpsRPfkko%2F5QHgAbdXdHBlvp%2F197owAYjXL5lCADvlJyPrpTcKd6QvUkRfxZFjNdlGqsvBgO9uVReoPC8R6ldzVqAcY%2FjC69sf6fIDEP5S3obtfYyv0uK2p9vGjgodcf7GfhY4Aa94XsdvRDEIkU0uZ8G%2BsFXe13Jeh%2Fi2AdSjTMajU7Un9Buyj%2BAZ3NHtLXcG8dZu6lAd2eGMulRoujvKwNZBoEe1aMUL%2Bx2sALg4DPIEcycdPV5AICwUx2W5QfMoxdjAzGg%2FcYbY1kG1op3HWtD%2BLaPdHImzjgDaPUh8FLtlJ30jLbMels4xHddwTR5ZavUTYJpsgMf5fLn5bDyi6xKvfeUPFhhl9HNSK6gi81wIDZdif7bm9NhxpOv0SUHb9rlFnpg7AeTh7Wn%2B4dYGSIPj20j6s1SkVEf%2FAcCmKaEgaArgIULNGp1IBlXUEtQ0jagmzrM%2ByFIWbk9R5T381VI52aPM2wjrU9QFTWz%2BmOXK%2B%2F%2BOObOVgiqEcks4ObTTDK1a%2F0fXyGkowjPu6lNcjoCmkYBOtgbb%2FgT45%2FrRCm1gb5ugWmtAAVR%2FUiyLigmbww%2B4%2BFvwY6pgF1EhS53Ltg8DVijLNin%2BtVFDS507jBCJa82SeU3ldubnGw030xQ9TXDXWVzqus4JbBx0lEROul7Fck4j8t4taeSmgu36RhrVvbSMpsNbmw1HJ%2FvmBa4OLGaLyYPwTss99%2BNu04HjUPScKBjkRSPrUyapN8yh36IQIKIc7LwTkOOegi40%2FkVKF6rRR8JmOJZ1k5FfLbgyz%2B2c3hCD5pRzLS4wrTuWX4&X-Amz-Signature=998c580f96c7e66470e90c052aeaccc94dcb644cac88d550fe9f7807ecb436a3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAI5F6Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZSBF%2Ff3iTlEA8hd7b1UWAW%2Fyh1FwelUEvTXOc9b8V5AiBJjTRLwEq5uSUf2c4tKaxY35JDAs3bbESr4EWAG%2BeyjSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEWPFj%2Bkl2%2FLOkwZKtwDNTvhDqxTm922uj3o3%2BGA3Y5rNsQgCwsTUxoLrjfhcZVzU8THZHANjwoOMpsRPfkko%2F5QHgAbdXdHBlvp%2F197owAYjXL5lCADvlJyPrpTcKd6QvUkRfxZFjNdlGqsvBgO9uVReoPC8R6ldzVqAcY%2FjC69sf6fIDEP5S3obtfYyv0uK2p9vGjgodcf7GfhY4Aa94XsdvRDEIkU0uZ8G%2BsFXe13Jeh%2Fi2AdSjTMajU7Un9Buyj%2BAZ3NHtLXcG8dZu6lAd2eGMulRoujvKwNZBoEe1aMUL%2Bx2sALg4DPIEcycdPV5AICwUx2W5QfMoxdjAzGg%2FcYbY1kG1op3HWtD%2BLaPdHImzjgDaPUh8FLtlJ30jLbMels4xHddwTR5ZavUTYJpsgMf5fLn5bDyi6xKvfeUPFhhl9HNSK6gi81wIDZdif7bm9NhxpOv0SUHb9rlFnpg7AeTh7Wn%2B4dYGSIPj20j6s1SkVEf%2FAcCmKaEgaArgIULNGp1IBlXUEtQ0jagmzrM%2ByFIWbk9R5T381VI52aPM2wjrU9QFTWz%2BmOXK%2B%2F%2BOObOVgiqEcks4ObTTDK1a%2F0fXyGkowjPu6lNcjoCmkYBOtgbb%2FgT45%2FrRCm1gb5ugWmtAAVR%2FUiyLigmbww%2B4%2BFvwY6pgF1EhS53Ltg8DVijLNin%2BtVFDS507jBCJa82SeU3ldubnGw030xQ9TXDXWVzqus4JbBx0lEROul7Fck4j8t4taeSmgu36RhrVvbSMpsNbmw1HJ%2FvmBa4OLGaLyYPwTss99%2BNu04HjUPScKBjkRSPrUyapN8yh36IQIKIc7LwTkOOegi40%2FkVKF6rRR8JmOJZ1k5FfLbgyz%2B2c3hCD5pRzLS4wrTuWX4&X-Amz-Signature=e5449979c022f0e95b8eedddfa6ef5d9a33a037f2a58fe7c0e0181fcfe66f6be&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAI5F6Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZSBF%2Ff3iTlEA8hd7b1UWAW%2Fyh1FwelUEvTXOc9b8V5AiBJjTRLwEq5uSUf2c4tKaxY35JDAs3bbESr4EWAG%2BeyjSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEWPFj%2Bkl2%2FLOkwZKtwDNTvhDqxTm922uj3o3%2BGA3Y5rNsQgCwsTUxoLrjfhcZVzU8THZHANjwoOMpsRPfkko%2F5QHgAbdXdHBlvp%2F197owAYjXL5lCADvlJyPrpTcKd6QvUkRfxZFjNdlGqsvBgO9uVReoPC8R6ldzVqAcY%2FjC69sf6fIDEP5S3obtfYyv0uK2p9vGjgodcf7GfhY4Aa94XsdvRDEIkU0uZ8G%2BsFXe13Jeh%2Fi2AdSjTMajU7Un9Buyj%2BAZ3NHtLXcG8dZu6lAd2eGMulRoujvKwNZBoEe1aMUL%2Bx2sALg4DPIEcycdPV5AICwUx2W5QfMoxdjAzGg%2FcYbY1kG1op3HWtD%2BLaPdHImzjgDaPUh8FLtlJ30jLbMels4xHddwTR5ZavUTYJpsgMf5fLn5bDyi6xKvfeUPFhhl9HNSK6gi81wIDZdif7bm9NhxpOv0SUHb9rlFnpg7AeTh7Wn%2B4dYGSIPj20j6s1SkVEf%2FAcCmKaEgaArgIULNGp1IBlXUEtQ0jagmzrM%2ByFIWbk9R5T381VI52aPM2wjrU9QFTWz%2BmOXK%2B%2F%2BOObOVgiqEcks4ObTTDK1a%2F0fXyGkowjPu6lNcjoCmkYBOtgbb%2FgT45%2FrRCm1gb5ugWmtAAVR%2FUiyLigmbww%2B4%2BFvwY6pgF1EhS53Ltg8DVijLNin%2BtVFDS507jBCJa82SeU3ldubnGw030xQ9TXDXWVzqus4JbBx0lEROul7Fck4j8t4taeSmgu36RhrVvbSMpsNbmw1HJ%2FvmBa4OLGaLyYPwTss99%2BNu04HjUPScKBjkRSPrUyapN8yh36IQIKIc7LwTkOOegi40%2FkVKF6rRR8JmOJZ1k5FfLbgyz%2B2c3hCD5pRzLS4wrTuWX4&X-Amz-Signature=86e26943b7b9b6c4335f8f0025e3b6ab0218fce4c9c4ecfaf4a40dbd9d431d16&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

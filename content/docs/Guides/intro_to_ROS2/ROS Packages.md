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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWIQYKX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwPw0HPjknEvMEviY9usfb0rvhDcPXZS3Z8KtVOzcCZAiBo63YoMJMBGrjPgVWnwKlUoACmyBAOL0CqiOVQPCcYLyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMGFj%2BX%2B2DIw9miindKtwDZ8fOyvPEnrSq2nB9Vavj9Gm%2FEijVSCI5pW%2Fn2FNal6VpFnTVbvHBuKc1makTmsDbDWljEnn2lQltKpQyXpP276k8dfp8cXUeHP3e45RzvW95a7RQ2OS9hTnwamYcYm6xyDgKR0nZ35sLDNFivjp149yTiSfnt8iuwwne%2BhTNCEuMuL3Dy%2BjVrXLFbbdrvOonoS8C4LuKwUiqKyHPn6NP9esuqQV4euYGP16Nte6ZVEiesR8dE3MsWhdvFr5h5DuRpibseeiM6bJBLZA%2BusnuoVX5%2FMyUuAMfFefSmEEX%2Ft0Kg3MtatNAlS5bI3ZVDH2IK1B9k0yeUNIQNqnFsY%2B5UXRHA64fNGxxeutmIdzAlkWRb09ltv8qUjmOglemTJmPG7VZ8Vx1JnY9aitnM8pci7b%2B8xcJgcrp%2FluiXbSTSHdsGd0lqcNNjoQ5CeCFfTUWSxHm2awXMKvdXXJRyaPJgeRXWR0Lf3G38q%2BHGiU35FzkeiPIUInBQVDqFCV6ogZEu5UvrygOj2xiUziDOZS7My6K0oXVc3HHQnU5jfcCo4%2BIoRWVZA4aS8MKzxZglFu7XOInI1Omx40Hkj3KXhV4wpxGY%2FDcAxM9unT9G7jVUA6nQMjKDEttdiG7AxUwgoaUvwY6pgEV13S%2BVMr1S1paC4eChEXFjKRaKBY6HWs4O8U%2FOfM1uVarvxNtKSPjEpgW9Gvwmv6BP3ag8lyICjPC3cObmmbuec7apZNKufekEvl4MrDwbZ%2FgmaIHQaIEeS0fmT%2FbutqbZPIF82tSCF7AmF%2FIamb2eia%2B1wPLf40ExKsphJ8QhUXrF4ik9W3iiCG6zUR3hzmAF0Qiv5Tg3xiMG9ZFNtnokfGx4B0s&X-Amz-Signature=6b72efe97caaf5774780025b57ff19323ebe3a1b904c04bff37577b7f27e3c24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWIQYKX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwPw0HPjknEvMEviY9usfb0rvhDcPXZS3Z8KtVOzcCZAiBo63YoMJMBGrjPgVWnwKlUoACmyBAOL0CqiOVQPCcYLyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMGFj%2BX%2B2DIw9miindKtwDZ8fOyvPEnrSq2nB9Vavj9Gm%2FEijVSCI5pW%2Fn2FNal6VpFnTVbvHBuKc1makTmsDbDWljEnn2lQltKpQyXpP276k8dfp8cXUeHP3e45RzvW95a7RQ2OS9hTnwamYcYm6xyDgKR0nZ35sLDNFivjp149yTiSfnt8iuwwne%2BhTNCEuMuL3Dy%2BjVrXLFbbdrvOonoS8C4LuKwUiqKyHPn6NP9esuqQV4euYGP16Nte6ZVEiesR8dE3MsWhdvFr5h5DuRpibseeiM6bJBLZA%2BusnuoVX5%2FMyUuAMfFefSmEEX%2Ft0Kg3MtatNAlS5bI3ZVDH2IK1B9k0yeUNIQNqnFsY%2B5UXRHA64fNGxxeutmIdzAlkWRb09ltv8qUjmOglemTJmPG7VZ8Vx1JnY9aitnM8pci7b%2B8xcJgcrp%2FluiXbSTSHdsGd0lqcNNjoQ5CeCFfTUWSxHm2awXMKvdXXJRyaPJgeRXWR0Lf3G38q%2BHGiU35FzkeiPIUInBQVDqFCV6ogZEu5UvrygOj2xiUziDOZS7My6K0oXVc3HHQnU5jfcCo4%2BIoRWVZA4aS8MKzxZglFu7XOInI1Omx40Hkj3KXhV4wpxGY%2FDcAxM9unT9G7jVUA6nQMjKDEttdiG7AxUwgoaUvwY6pgEV13S%2BVMr1S1paC4eChEXFjKRaKBY6HWs4O8U%2FOfM1uVarvxNtKSPjEpgW9Gvwmv6BP3ag8lyICjPC3cObmmbuec7apZNKufekEvl4MrDwbZ%2FgmaIHQaIEeS0fmT%2FbutqbZPIF82tSCF7AmF%2FIamb2eia%2B1wPLf40ExKsphJ8QhUXrF4ik9W3iiCG6zUR3hzmAF0Qiv5Tg3xiMG9ZFNtnokfGx4B0s&X-Amz-Signature=b87b6db4cc4f5da514cf981d7fdc393ab02a462ecd2a75a145dd8b8344764cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWIQYKX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwPw0HPjknEvMEviY9usfb0rvhDcPXZS3Z8KtVOzcCZAiBo63YoMJMBGrjPgVWnwKlUoACmyBAOL0CqiOVQPCcYLyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMGFj%2BX%2B2DIw9miindKtwDZ8fOyvPEnrSq2nB9Vavj9Gm%2FEijVSCI5pW%2Fn2FNal6VpFnTVbvHBuKc1makTmsDbDWljEnn2lQltKpQyXpP276k8dfp8cXUeHP3e45RzvW95a7RQ2OS9hTnwamYcYm6xyDgKR0nZ35sLDNFivjp149yTiSfnt8iuwwne%2BhTNCEuMuL3Dy%2BjVrXLFbbdrvOonoS8C4LuKwUiqKyHPn6NP9esuqQV4euYGP16Nte6ZVEiesR8dE3MsWhdvFr5h5DuRpibseeiM6bJBLZA%2BusnuoVX5%2FMyUuAMfFefSmEEX%2Ft0Kg3MtatNAlS5bI3ZVDH2IK1B9k0yeUNIQNqnFsY%2B5UXRHA64fNGxxeutmIdzAlkWRb09ltv8qUjmOglemTJmPG7VZ8Vx1JnY9aitnM8pci7b%2B8xcJgcrp%2FluiXbSTSHdsGd0lqcNNjoQ5CeCFfTUWSxHm2awXMKvdXXJRyaPJgeRXWR0Lf3G38q%2BHGiU35FzkeiPIUInBQVDqFCV6ogZEu5UvrygOj2xiUziDOZS7My6K0oXVc3HHQnU5jfcCo4%2BIoRWVZA4aS8MKzxZglFu7XOInI1Omx40Hkj3KXhV4wpxGY%2FDcAxM9unT9G7jVUA6nQMjKDEttdiG7AxUwgoaUvwY6pgEV13S%2BVMr1S1paC4eChEXFjKRaKBY6HWs4O8U%2FOfM1uVarvxNtKSPjEpgW9Gvwmv6BP3ag8lyICjPC3cObmmbuec7apZNKufekEvl4MrDwbZ%2FgmaIHQaIEeS0fmT%2FbutqbZPIF82tSCF7AmF%2FIamb2eia%2B1wPLf40ExKsphJ8QhUXrF4ik9W3iiCG6zUR3hzmAF0Qiv5Tg3xiMG9ZFNtnokfGx4B0s&X-Amz-Signature=26dd0716ad11810decf8bcf56055a430fad5b7bf9ce79edcf04d93dfe2bf270e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWIQYKX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwPw0HPjknEvMEviY9usfb0rvhDcPXZS3Z8KtVOzcCZAiBo63YoMJMBGrjPgVWnwKlUoACmyBAOL0CqiOVQPCcYLyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMGFj%2BX%2B2DIw9miindKtwDZ8fOyvPEnrSq2nB9Vavj9Gm%2FEijVSCI5pW%2Fn2FNal6VpFnTVbvHBuKc1makTmsDbDWljEnn2lQltKpQyXpP276k8dfp8cXUeHP3e45RzvW95a7RQ2OS9hTnwamYcYm6xyDgKR0nZ35sLDNFivjp149yTiSfnt8iuwwne%2BhTNCEuMuL3Dy%2BjVrXLFbbdrvOonoS8C4LuKwUiqKyHPn6NP9esuqQV4euYGP16Nte6ZVEiesR8dE3MsWhdvFr5h5DuRpibseeiM6bJBLZA%2BusnuoVX5%2FMyUuAMfFefSmEEX%2Ft0Kg3MtatNAlS5bI3ZVDH2IK1B9k0yeUNIQNqnFsY%2B5UXRHA64fNGxxeutmIdzAlkWRb09ltv8qUjmOglemTJmPG7VZ8Vx1JnY9aitnM8pci7b%2B8xcJgcrp%2FluiXbSTSHdsGd0lqcNNjoQ5CeCFfTUWSxHm2awXMKvdXXJRyaPJgeRXWR0Lf3G38q%2BHGiU35FzkeiPIUInBQVDqFCV6ogZEu5UvrygOj2xiUziDOZS7My6K0oXVc3HHQnU5jfcCo4%2BIoRWVZA4aS8MKzxZglFu7XOInI1Omx40Hkj3KXhV4wpxGY%2FDcAxM9unT9G7jVUA6nQMjKDEttdiG7AxUwgoaUvwY6pgEV13S%2BVMr1S1paC4eChEXFjKRaKBY6HWs4O8U%2FOfM1uVarvxNtKSPjEpgW9Gvwmv6BP3ag8lyICjPC3cObmmbuec7apZNKufekEvl4MrDwbZ%2FgmaIHQaIEeS0fmT%2FbutqbZPIF82tSCF7AmF%2FIamb2eia%2B1wPLf40ExKsphJ8QhUXrF4ik9W3iiCG6zUR3hzmAF0Qiv5Tg3xiMG9ZFNtnokfGx4B0s&X-Amz-Signature=2446799bf3163abf904f3933ec738a43e91029301f81219148ba1835015ab554&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWIQYKX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwPw0HPjknEvMEviY9usfb0rvhDcPXZS3Z8KtVOzcCZAiBo63YoMJMBGrjPgVWnwKlUoACmyBAOL0CqiOVQPCcYLyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMGFj%2BX%2B2DIw9miindKtwDZ8fOyvPEnrSq2nB9Vavj9Gm%2FEijVSCI5pW%2Fn2FNal6VpFnTVbvHBuKc1makTmsDbDWljEnn2lQltKpQyXpP276k8dfp8cXUeHP3e45RzvW95a7RQ2OS9hTnwamYcYm6xyDgKR0nZ35sLDNFivjp149yTiSfnt8iuwwne%2BhTNCEuMuL3Dy%2BjVrXLFbbdrvOonoS8C4LuKwUiqKyHPn6NP9esuqQV4euYGP16Nte6ZVEiesR8dE3MsWhdvFr5h5DuRpibseeiM6bJBLZA%2BusnuoVX5%2FMyUuAMfFefSmEEX%2Ft0Kg3MtatNAlS5bI3ZVDH2IK1B9k0yeUNIQNqnFsY%2B5UXRHA64fNGxxeutmIdzAlkWRb09ltv8qUjmOglemTJmPG7VZ8Vx1JnY9aitnM8pci7b%2B8xcJgcrp%2FluiXbSTSHdsGd0lqcNNjoQ5CeCFfTUWSxHm2awXMKvdXXJRyaPJgeRXWR0Lf3G38q%2BHGiU35FzkeiPIUInBQVDqFCV6ogZEu5UvrygOj2xiUziDOZS7My6K0oXVc3HHQnU5jfcCo4%2BIoRWVZA4aS8MKzxZglFu7XOInI1Omx40Hkj3KXhV4wpxGY%2FDcAxM9unT9G7jVUA6nQMjKDEttdiG7AxUwgoaUvwY6pgEV13S%2BVMr1S1paC4eChEXFjKRaKBY6HWs4O8U%2FOfM1uVarvxNtKSPjEpgW9Gvwmv6BP3ag8lyICjPC3cObmmbuec7apZNKufekEvl4MrDwbZ%2FgmaIHQaIEeS0fmT%2FbutqbZPIF82tSCF7AmF%2FIamb2eia%2B1wPLf40ExKsphJ8QhUXrF4ik9W3iiCG6zUR3hzmAF0Qiv5Tg3xiMG9ZFNtnokfGx4B0s&X-Amz-Signature=f2cedca4f6704375b26fbe0f72cbcb9177f58d38306e7e8272de145e0b8c04f2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWIQYKX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwPw0HPjknEvMEviY9usfb0rvhDcPXZS3Z8KtVOzcCZAiBo63YoMJMBGrjPgVWnwKlUoACmyBAOL0CqiOVQPCcYLyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMGFj%2BX%2B2DIw9miindKtwDZ8fOyvPEnrSq2nB9Vavj9Gm%2FEijVSCI5pW%2Fn2FNal6VpFnTVbvHBuKc1makTmsDbDWljEnn2lQltKpQyXpP276k8dfp8cXUeHP3e45RzvW95a7RQ2OS9hTnwamYcYm6xyDgKR0nZ35sLDNFivjp149yTiSfnt8iuwwne%2BhTNCEuMuL3Dy%2BjVrXLFbbdrvOonoS8C4LuKwUiqKyHPn6NP9esuqQV4euYGP16Nte6ZVEiesR8dE3MsWhdvFr5h5DuRpibseeiM6bJBLZA%2BusnuoVX5%2FMyUuAMfFefSmEEX%2Ft0Kg3MtatNAlS5bI3ZVDH2IK1B9k0yeUNIQNqnFsY%2B5UXRHA64fNGxxeutmIdzAlkWRb09ltv8qUjmOglemTJmPG7VZ8Vx1JnY9aitnM8pci7b%2B8xcJgcrp%2FluiXbSTSHdsGd0lqcNNjoQ5CeCFfTUWSxHm2awXMKvdXXJRyaPJgeRXWR0Lf3G38q%2BHGiU35FzkeiPIUInBQVDqFCV6ogZEu5UvrygOj2xiUziDOZS7My6K0oXVc3HHQnU5jfcCo4%2BIoRWVZA4aS8MKzxZglFu7XOInI1Omx40Hkj3KXhV4wpxGY%2FDcAxM9unT9G7jVUA6nQMjKDEttdiG7AxUwgoaUvwY6pgEV13S%2BVMr1S1paC4eChEXFjKRaKBY6HWs4O8U%2FOfM1uVarvxNtKSPjEpgW9Gvwmv6BP3ag8lyICjPC3cObmmbuec7apZNKufekEvl4MrDwbZ%2FgmaIHQaIEeS0fmT%2FbutqbZPIF82tSCF7AmF%2FIamb2eia%2B1wPLf40ExKsphJ8QhUXrF4ik9W3iiCG6zUR3hzmAF0Qiv5Tg3xiMG9ZFNtnokfGx4B0s&X-Amz-Signature=873bd57b5da154fbdc5c4be16cc811edda493153b108ea3a9ec6829e3265dfe8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWIQYKX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwPw0HPjknEvMEviY9usfb0rvhDcPXZS3Z8KtVOzcCZAiBo63YoMJMBGrjPgVWnwKlUoACmyBAOL0CqiOVQPCcYLyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMGFj%2BX%2B2DIw9miindKtwDZ8fOyvPEnrSq2nB9Vavj9Gm%2FEijVSCI5pW%2Fn2FNal6VpFnTVbvHBuKc1makTmsDbDWljEnn2lQltKpQyXpP276k8dfp8cXUeHP3e45RzvW95a7RQ2OS9hTnwamYcYm6xyDgKR0nZ35sLDNFivjp149yTiSfnt8iuwwne%2BhTNCEuMuL3Dy%2BjVrXLFbbdrvOonoS8C4LuKwUiqKyHPn6NP9esuqQV4euYGP16Nte6ZVEiesR8dE3MsWhdvFr5h5DuRpibseeiM6bJBLZA%2BusnuoVX5%2FMyUuAMfFefSmEEX%2Ft0Kg3MtatNAlS5bI3ZVDH2IK1B9k0yeUNIQNqnFsY%2B5UXRHA64fNGxxeutmIdzAlkWRb09ltv8qUjmOglemTJmPG7VZ8Vx1JnY9aitnM8pci7b%2B8xcJgcrp%2FluiXbSTSHdsGd0lqcNNjoQ5CeCFfTUWSxHm2awXMKvdXXJRyaPJgeRXWR0Lf3G38q%2BHGiU35FzkeiPIUInBQVDqFCV6ogZEu5UvrygOj2xiUziDOZS7My6K0oXVc3HHQnU5jfcCo4%2BIoRWVZA4aS8MKzxZglFu7XOInI1Omx40Hkj3KXhV4wpxGY%2FDcAxM9unT9G7jVUA6nQMjKDEttdiG7AxUwgoaUvwY6pgEV13S%2BVMr1S1paC4eChEXFjKRaKBY6HWs4O8U%2FOfM1uVarvxNtKSPjEpgW9Gvwmv6BP3ag8lyICjPC3cObmmbuec7apZNKufekEvl4MrDwbZ%2FgmaIHQaIEeS0fmT%2FbutqbZPIF82tSCF7AmF%2FIamb2eia%2B1wPLf40ExKsphJ8QhUXrF4ik9W3iiCG6zUR3hzmAF0Qiv5Tg3xiMG9ZFNtnokfGx4B0s&X-Amz-Signature=be9daeca10779e3698742dc53aa6458499a27a348582eff767bfdc9a606aeb78&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

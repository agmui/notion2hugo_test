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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAT2TXSH%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD9R2NxFdQncud2N2%2Fn5OxQJDKzIRkzStCYMf3ScEdD2gIgBLiKqoTLtNeUZnoyFOlJKCMUNcvOwYOjDArZbw%2FmzuEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP3uNsLlYHZzxvHoSrcA9WnrzQ7lsY%2BolaQV0jeJFxKwc6vJeHF1IytQG3mo3GwbTQrrHAV%2BMzxB64egXQCVWjrqSIr4spEVvp0geNIlDbuwOyRuBisE6PL2tg7spmeTvf16jyUjuNMIRzUriliAjri2blWBnp4NNuWF0FuEFOATnatjZSbi9Yb1BnQUxDUpfytDec3wfDaFPRdF%2FXa5sY%2BKJ%2FYPeZCCHZYKktLR2x0Su9KTktH34ocFFWoKiBNWwd%2FsrSaGIzlftht7Xc4DYkScOqqRRoWUWLWDwo2p5ozP4fEq8dAnI2cuxj2mpcc02Kxiz29PabZFY9nSL8mYp3m1T1GCw88QGE6Tb184bBN8Wjshyra5W%2BYVE0rgnqhHS%2BMQDmsmj1GIvt5g5Lsn9YpJlyc1JSA1%2BqeFOwIQ6QJdxYWyi11GbTOHogV%2BII8e9L4o9DhomoH8C9WXkMjjVf%2B6Pws%2FQh8njxDM4%2BzM5%2FhQt4TLT1AKcm00Ok%2BG%2BDF6PJm6ec9vuzz5Osx3oXOjsQ5n25wGWFOYy%2BDv3qVydhKUZTnjjhjKHsxfrjNcDOKDt3YvjEp9aF3mxNg%2FlLWAmIMLeYG77z%2FVXf5ZFfq3s%2FJ%2Bq8PIR1Kbr4hKWjJriaJKZjxBXhOF%2FZ6xcmdMJ6%2F4cYGOqUBEQL0ZF0x%2FmxPBALzvcNWGP9Ze1vAePzhQ8H%2BAEM2kFtX8Ph7YHjBGG3%2FwamX80LMt2tTCLptLCeaw0UweRDP7pZ%2F5U2lA1cN4fYlMrlakOBw6xKVAen7nSd1%2BVRdvo53dtABjd1XwHSSnIeQvMl8gUeJ2Y5ROl2fTgVxmJnqfigYWbi3gj8K9fOtPwjNp6p77jwhU339YgFxIpDozi1iioK%2FqvaI&X-Amz-Signature=537b8f0fa1059bf6ec1c1c5e186fdadfeb7ee045cc8c09287f63d370e20570df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAT2TXSH%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD9R2NxFdQncud2N2%2Fn5OxQJDKzIRkzStCYMf3ScEdD2gIgBLiKqoTLtNeUZnoyFOlJKCMUNcvOwYOjDArZbw%2FmzuEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP3uNsLlYHZzxvHoSrcA9WnrzQ7lsY%2BolaQV0jeJFxKwc6vJeHF1IytQG3mo3GwbTQrrHAV%2BMzxB64egXQCVWjrqSIr4spEVvp0geNIlDbuwOyRuBisE6PL2tg7spmeTvf16jyUjuNMIRzUriliAjri2blWBnp4NNuWF0FuEFOATnatjZSbi9Yb1BnQUxDUpfytDec3wfDaFPRdF%2FXa5sY%2BKJ%2FYPeZCCHZYKktLR2x0Su9KTktH34ocFFWoKiBNWwd%2FsrSaGIzlftht7Xc4DYkScOqqRRoWUWLWDwo2p5ozP4fEq8dAnI2cuxj2mpcc02Kxiz29PabZFY9nSL8mYp3m1T1GCw88QGE6Tb184bBN8Wjshyra5W%2BYVE0rgnqhHS%2BMQDmsmj1GIvt5g5Lsn9YpJlyc1JSA1%2BqeFOwIQ6QJdxYWyi11GbTOHogV%2BII8e9L4o9DhomoH8C9WXkMjjVf%2B6Pws%2FQh8njxDM4%2BzM5%2FhQt4TLT1AKcm00Ok%2BG%2BDF6PJm6ec9vuzz5Osx3oXOjsQ5n25wGWFOYy%2BDv3qVydhKUZTnjjhjKHsxfrjNcDOKDt3YvjEp9aF3mxNg%2FlLWAmIMLeYG77z%2FVXf5ZFfq3s%2FJ%2Bq8PIR1Kbr4hKWjJriaJKZjxBXhOF%2FZ6xcmdMJ6%2F4cYGOqUBEQL0ZF0x%2FmxPBALzvcNWGP9Ze1vAePzhQ8H%2BAEM2kFtX8Ph7YHjBGG3%2FwamX80LMt2tTCLptLCeaw0UweRDP7pZ%2F5U2lA1cN4fYlMrlakOBw6xKVAen7nSd1%2BVRdvo53dtABjd1XwHSSnIeQvMl8gUeJ2Y5ROl2fTgVxmJnqfigYWbi3gj8K9fOtPwjNp6p77jwhU339YgFxIpDozi1iioK%2FqvaI&X-Amz-Signature=0d04808389f5533db7edcd2505e8e5f599e29cb5f69ebc762f0159cb85f200e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAT2TXSH%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD9R2NxFdQncud2N2%2Fn5OxQJDKzIRkzStCYMf3ScEdD2gIgBLiKqoTLtNeUZnoyFOlJKCMUNcvOwYOjDArZbw%2FmzuEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP3uNsLlYHZzxvHoSrcA9WnrzQ7lsY%2BolaQV0jeJFxKwc6vJeHF1IytQG3mo3GwbTQrrHAV%2BMzxB64egXQCVWjrqSIr4spEVvp0geNIlDbuwOyRuBisE6PL2tg7spmeTvf16jyUjuNMIRzUriliAjri2blWBnp4NNuWF0FuEFOATnatjZSbi9Yb1BnQUxDUpfytDec3wfDaFPRdF%2FXa5sY%2BKJ%2FYPeZCCHZYKktLR2x0Su9KTktH34ocFFWoKiBNWwd%2FsrSaGIzlftht7Xc4DYkScOqqRRoWUWLWDwo2p5ozP4fEq8dAnI2cuxj2mpcc02Kxiz29PabZFY9nSL8mYp3m1T1GCw88QGE6Tb184bBN8Wjshyra5W%2BYVE0rgnqhHS%2BMQDmsmj1GIvt5g5Lsn9YpJlyc1JSA1%2BqeFOwIQ6QJdxYWyi11GbTOHogV%2BII8e9L4o9DhomoH8C9WXkMjjVf%2B6Pws%2FQh8njxDM4%2BzM5%2FhQt4TLT1AKcm00Ok%2BG%2BDF6PJm6ec9vuzz5Osx3oXOjsQ5n25wGWFOYy%2BDv3qVydhKUZTnjjhjKHsxfrjNcDOKDt3YvjEp9aF3mxNg%2FlLWAmIMLeYG77z%2FVXf5ZFfq3s%2FJ%2Bq8PIR1Kbr4hKWjJriaJKZjxBXhOF%2FZ6xcmdMJ6%2F4cYGOqUBEQL0ZF0x%2FmxPBALzvcNWGP9Ze1vAePzhQ8H%2BAEM2kFtX8Ph7YHjBGG3%2FwamX80LMt2tTCLptLCeaw0UweRDP7pZ%2F5U2lA1cN4fYlMrlakOBw6xKVAen7nSd1%2BVRdvo53dtABjd1XwHSSnIeQvMl8gUeJ2Y5ROl2fTgVxmJnqfigYWbi3gj8K9fOtPwjNp6p77jwhU339YgFxIpDozi1iioK%2FqvaI&X-Amz-Signature=f8afc86551b7aa0c53cb158a0cfa9a792d0bdce6950f2fe91a63841f70185f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAT2TXSH%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD9R2NxFdQncud2N2%2Fn5OxQJDKzIRkzStCYMf3ScEdD2gIgBLiKqoTLtNeUZnoyFOlJKCMUNcvOwYOjDArZbw%2FmzuEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP3uNsLlYHZzxvHoSrcA9WnrzQ7lsY%2BolaQV0jeJFxKwc6vJeHF1IytQG3mo3GwbTQrrHAV%2BMzxB64egXQCVWjrqSIr4spEVvp0geNIlDbuwOyRuBisE6PL2tg7spmeTvf16jyUjuNMIRzUriliAjri2blWBnp4NNuWF0FuEFOATnatjZSbi9Yb1BnQUxDUpfytDec3wfDaFPRdF%2FXa5sY%2BKJ%2FYPeZCCHZYKktLR2x0Su9KTktH34ocFFWoKiBNWwd%2FsrSaGIzlftht7Xc4DYkScOqqRRoWUWLWDwo2p5ozP4fEq8dAnI2cuxj2mpcc02Kxiz29PabZFY9nSL8mYp3m1T1GCw88QGE6Tb184bBN8Wjshyra5W%2BYVE0rgnqhHS%2BMQDmsmj1GIvt5g5Lsn9YpJlyc1JSA1%2BqeFOwIQ6QJdxYWyi11GbTOHogV%2BII8e9L4o9DhomoH8C9WXkMjjVf%2B6Pws%2FQh8njxDM4%2BzM5%2FhQt4TLT1AKcm00Ok%2BG%2BDF6PJm6ec9vuzz5Osx3oXOjsQ5n25wGWFOYy%2BDv3qVydhKUZTnjjhjKHsxfrjNcDOKDt3YvjEp9aF3mxNg%2FlLWAmIMLeYG77z%2FVXf5ZFfq3s%2FJ%2Bq8PIR1Kbr4hKWjJriaJKZjxBXhOF%2FZ6xcmdMJ6%2F4cYGOqUBEQL0ZF0x%2FmxPBALzvcNWGP9Ze1vAePzhQ8H%2BAEM2kFtX8Ph7YHjBGG3%2FwamX80LMt2tTCLptLCeaw0UweRDP7pZ%2F5U2lA1cN4fYlMrlakOBw6xKVAen7nSd1%2BVRdvo53dtABjd1XwHSSnIeQvMl8gUeJ2Y5ROl2fTgVxmJnqfigYWbi3gj8K9fOtPwjNp6p77jwhU339YgFxIpDozi1iioK%2FqvaI&X-Amz-Signature=4e4ce00d12b9ed5fc7d224c57c244c9954a25d605fcf271138f28f0447131917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAT2TXSH%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD9R2NxFdQncud2N2%2Fn5OxQJDKzIRkzStCYMf3ScEdD2gIgBLiKqoTLtNeUZnoyFOlJKCMUNcvOwYOjDArZbw%2FmzuEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP3uNsLlYHZzxvHoSrcA9WnrzQ7lsY%2BolaQV0jeJFxKwc6vJeHF1IytQG3mo3GwbTQrrHAV%2BMzxB64egXQCVWjrqSIr4spEVvp0geNIlDbuwOyRuBisE6PL2tg7spmeTvf16jyUjuNMIRzUriliAjri2blWBnp4NNuWF0FuEFOATnatjZSbi9Yb1BnQUxDUpfytDec3wfDaFPRdF%2FXa5sY%2BKJ%2FYPeZCCHZYKktLR2x0Su9KTktH34ocFFWoKiBNWwd%2FsrSaGIzlftht7Xc4DYkScOqqRRoWUWLWDwo2p5ozP4fEq8dAnI2cuxj2mpcc02Kxiz29PabZFY9nSL8mYp3m1T1GCw88QGE6Tb184bBN8Wjshyra5W%2BYVE0rgnqhHS%2BMQDmsmj1GIvt5g5Lsn9YpJlyc1JSA1%2BqeFOwIQ6QJdxYWyi11GbTOHogV%2BII8e9L4o9DhomoH8C9WXkMjjVf%2B6Pws%2FQh8njxDM4%2BzM5%2FhQt4TLT1AKcm00Ok%2BG%2BDF6PJm6ec9vuzz5Osx3oXOjsQ5n25wGWFOYy%2BDv3qVydhKUZTnjjhjKHsxfrjNcDOKDt3YvjEp9aF3mxNg%2FlLWAmIMLeYG77z%2FVXf5ZFfq3s%2FJ%2Bq8PIR1Kbr4hKWjJriaJKZjxBXhOF%2FZ6xcmdMJ6%2F4cYGOqUBEQL0ZF0x%2FmxPBALzvcNWGP9Ze1vAePzhQ8H%2BAEM2kFtX8Ph7YHjBGG3%2FwamX80LMt2tTCLptLCeaw0UweRDP7pZ%2F5U2lA1cN4fYlMrlakOBw6xKVAen7nSd1%2BVRdvo53dtABjd1XwHSSnIeQvMl8gUeJ2Y5ROl2fTgVxmJnqfigYWbi3gj8K9fOtPwjNp6p77jwhU339YgFxIpDozi1iioK%2FqvaI&X-Amz-Signature=2ca8c8d514a5f2025577f2801688013910b703afc52372be91628175c739260e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAT2TXSH%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD9R2NxFdQncud2N2%2Fn5OxQJDKzIRkzStCYMf3ScEdD2gIgBLiKqoTLtNeUZnoyFOlJKCMUNcvOwYOjDArZbw%2FmzuEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP3uNsLlYHZzxvHoSrcA9WnrzQ7lsY%2BolaQV0jeJFxKwc6vJeHF1IytQG3mo3GwbTQrrHAV%2BMzxB64egXQCVWjrqSIr4spEVvp0geNIlDbuwOyRuBisE6PL2tg7spmeTvf16jyUjuNMIRzUriliAjri2blWBnp4NNuWF0FuEFOATnatjZSbi9Yb1BnQUxDUpfytDec3wfDaFPRdF%2FXa5sY%2BKJ%2FYPeZCCHZYKktLR2x0Su9KTktH34ocFFWoKiBNWwd%2FsrSaGIzlftht7Xc4DYkScOqqRRoWUWLWDwo2p5ozP4fEq8dAnI2cuxj2mpcc02Kxiz29PabZFY9nSL8mYp3m1T1GCw88QGE6Tb184bBN8Wjshyra5W%2BYVE0rgnqhHS%2BMQDmsmj1GIvt5g5Lsn9YpJlyc1JSA1%2BqeFOwIQ6QJdxYWyi11GbTOHogV%2BII8e9L4o9DhomoH8C9WXkMjjVf%2B6Pws%2FQh8njxDM4%2BzM5%2FhQt4TLT1AKcm00Ok%2BG%2BDF6PJm6ec9vuzz5Osx3oXOjsQ5n25wGWFOYy%2BDv3qVydhKUZTnjjhjKHsxfrjNcDOKDt3YvjEp9aF3mxNg%2FlLWAmIMLeYG77z%2FVXf5ZFfq3s%2FJ%2Bq8PIR1Kbr4hKWjJriaJKZjxBXhOF%2FZ6xcmdMJ6%2F4cYGOqUBEQL0ZF0x%2FmxPBALzvcNWGP9Ze1vAePzhQ8H%2BAEM2kFtX8Ph7YHjBGG3%2FwamX80LMt2tTCLptLCeaw0UweRDP7pZ%2F5U2lA1cN4fYlMrlakOBw6xKVAen7nSd1%2BVRdvo53dtABjd1XwHSSnIeQvMl8gUeJ2Y5ROl2fTgVxmJnqfigYWbi3gj8K9fOtPwjNp6p77jwhU339YgFxIpDozi1iioK%2FqvaI&X-Amz-Signature=efb363fb9abc8041ad627f731e838010a794be51842ae69232fb20e67d3bc3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAT2TXSH%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD9R2NxFdQncud2N2%2Fn5OxQJDKzIRkzStCYMf3ScEdD2gIgBLiKqoTLtNeUZnoyFOlJKCMUNcvOwYOjDArZbw%2FmzuEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP3uNsLlYHZzxvHoSrcA9WnrzQ7lsY%2BolaQV0jeJFxKwc6vJeHF1IytQG3mo3GwbTQrrHAV%2BMzxB64egXQCVWjrqSIr4spEVvp0geNIlDbuwOyRuBisE6PL2tg7spmeTvf16jyUjuNMIRzUriliAjri2blWBnp4NNuWF0FuEFOATnatjZSbi9Yb1BnQUxDUpfytDec3wfDaFPRdF%2FXa5sY%2BKJ%2FYPeZCCHZYKktLR2x0Su9KTktH34ocFFWoKiBNWwd%2FsrSaGIzlftht7Xc4DYkScOqqRRoWUWLWDwo2p5ozP4fEq8dAnI2cuxj2mpcc02Kxiz29PabZFY9nSL8mYp3m1T1GCw88QGE6Tb184bBN8Wjshyra5W%2BYVE0rgnqhHS%2BMQDmsmj1GIvt5g5Lsn9YpJlyc1JSA1%2BqeFOwIQ6QJdxYWyi11GbTOHogV%2BII8e9L4o9DhomoH8C9WXkMjjVf%2B6Pws%2FQh8njxDM4%2BzM5%2FhQt4TLT1AKcm00Ok%2BG%2BDF6PJm6ec9vuzz5Osx3oXOjsQ5n25wGWFOYy%2BDv3qVydhKUZTnjjhjKHsxfrjNcDOKDt3YvjEp9aF3mxNg%2FlLWAmIMLeYG77z%2FVXf5ZFfq3s%2FJ%2Bq8PIR1Kbr4hKWjJriaJKZjxBXhOF%2FZ6xcmdMJ6%2F4cYGOqUBEQL0ZF0x%2FmxPBALzvcNWGP9Ze1vAePzhQ8H%2BAEM2kFtX8Ph7YHjBGG3%2FwamX80LMt2tTCLptLCeaw0UweRDP7pZ%2F5U2lA1cN4fYlMrlakOBw6xKVAen7nSd1%2BVRdvo53dtABjd1XwHSSnIeQvMl8gUeJ2Y5ROl2fTgVxmJnqfigYWbi3gj8K9fOtPwjNp6p77jwhU339YgFxIpDozi1iioK%2FqvaI&X-Amz-Signature=e19e724aeda17570b395ece108dbaf3ba7725a6d03ca0c8760579554b562af1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYIDR5T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCeSRAz3bEsbDPZMG1aKXgm1utJYevtPsIKrxT0atF%2FFgIgEOXKTIK%2B%2F1Q5ckP5na4Ud%2Bhw3m7B7lhIaZMyjp%2B8gtoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJeG4iBq7TVcf5VRPyrcA1biJj53DgKuo6SrwfBmSjm6zewD4pG1GVp1Sh5euTvGOgDz3R2VXBfbl1DoUgEWESyCExP%2Bx3qdQc4RVVvlL%2F7iszFVptcKUGAPjvDrqGCvOQR7pApmAHiC0PqGB7BRdZMTgYghhMBHkc%2F8BKSyW8GDLPBGPFNzb%2B51tOjfUbICh75nfV6h4ZZHx4WxTyK0EddzcAre3Z%2F5iEzyY4yKbcfidMbpte8gfHAlu71UPt7UL0p44%2FSKmlqlyHbgayJCpGr3Z6rSbcC3%2FNBcd0DG09K8tHy9L3FyBesgA5LOTukx96nscX9do5sLBrJ%2F6zzgaFneo2y%2BqvUx2BxNfQi%2B6P6Hs3sRVS12bLBBZ4T7givLlRBfTj7WEHcs2FsNiEHWzQMWX60cLCIbO3VDU5d8RhJRFl2oKt2rjgbHMD0vb5Dw8wJTl8Qnyuf%2FZuIBh9%2FWxV3ZUdBrvLhYh6WrkRYA%2BjYqsN45%2BXdeKU9423GbQ0LeEQwWyKYwu5xzr7rK08VCWevdWv99AXOL7m%2BWGzDw%2F1HZvamheIEv%2Bp8n7dkGCvKRWvYNe3Kpc9LaUCN1Yi2y2FXixjlmMr2Fi2sB6pXxgEU7MCq%2BwiPOUNbaLvlejYOU8wSl5chr7rKnOboeML%2FYh8IGOqUBN4rB6WeHmLYdgNbPr0ormCQo8Z8mEptzYkpx0jey9llABx9A5AmDvqGtyxYWiP1tOic2zodoD7gK7ODWqtoa5gkk4aMOoMdTiKngQOA%2BklnwAC8deBXZQMlKcCmbVmwAD12b5xcvYYZrQiUDIOrKfU2%2FEW90mjUpxkUQLOvUGR4n6iP%2B8K9DNWqDds2RxYtRDa5hpPTLqvJwFS7WzMBt9%2BdNZXMl&X-Amz-Signature=43961997003e640e4c8f42ffd20c6fbd9977dd2fbbccb530fc43e6d6b1f4ac8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYIDR5T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCeSRAz3bEsbDPZMG1aKXgm1utJYevtPsIKrxT0atF%2FFgIgEOXKTIK%2B%2F1Q5ckP5na4Ud%2Bhw3m7B7lhIaZMyjp%2B8gtoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJeG4iBq7TVcf5VRPyrcA1biJj53DgKuo6SrwfBmSjm6zewD4pG1GVp1Sh5euTvGOgDz3R2VXBfbl1DoUgEWESyCExP%2Bx3qdQc4RVVvlL%2F7iszFVptcKUGAPjvDrqGCvOQR7pApmAHiC0PqGB7BRdZMTgYghhMBHkc%2F8BKSyW8GDLPBGPFNzb%2B51tOjfUbICh75nfV6h4ZZHx4WxTyK0EddzcAre3Z%2F5iEzyY4yKbcfidMbpte8gfHAlu71UPt7UL0p44%2FSKmlqlyHbgayJCpGr3Z6rSbcC3%2FNBcd0DG09K8tHy9L3FyBesgA5LOTukx96nscX9do5sLBrJ%2F6zzgaFneo2y%2BqvUx2BxNfQi%2B6P6Hs3sRVS12bLBBZ4T7givLlRBfTj7WEHcs2FsNiEHWzQMWX60cLCIbO3VDU5d8RhJRFl2oKt2rjgbHMD0vb5Dw8wJTl8Qnyuf%2FZuIBh9%2FWxV3ZUdBrvLhYh6WrkRYA%2BjYqsN45%2BXdeKU9423GbQ0LeEQwWyKYwu5xzr7rK08VCWevdWv99AXOL7m%2BWGzDw%2F1HZvamheIEv%2Bp8n7dkGCvKRWvYNe3Kpc9LaUCN1Yi2y2FXixjlmMr2Fi2sB6pXxgEU7MCq%2BwiPOUNbaLvlejYOU8wSl5chr7rKnOboeML%2FYh8IGOqUBN4rB6WeHmLYdgNbPr0ormCQo8Z8mEptzYkpx0jey9llABx9A5AmDvqGtyxYWiP1tOic2zodoD7gK7ODWqtoa5gkk4aMOoMdTiKngQOA%2BklnwAC8deBXZQMlKcCmbVmwAD12b5xcvYYZrQiUDIOrKfU2%2FEW90mjUpxkUQLOvUGR4n6iP%2B8K9DNWqDds2RxYtRDa5hpPTLqvJwFS7WzMBt9%2BdNZXMl&X-Amz-Signature=efde0afa5e6126387fc0f2f1d93b4ac4d90cb742427bd470ba484b27ffa7e60e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYIDR5T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCeSRAz3bEsbDPZMG1aKXgm1utJYevtPsIKrxT0atF%2FFgIgEOXKTIK%2B%2F1Q5ckP5na4Ud%2Bhw3m7B7lhIaZMyjp%2B8gtoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJeG4iBq7TVcf5VRPyrcA1biJj53DgKuo6SrwfBmSjm6zewD4pG1GVp1Sh5euTvGOgDz3R2VXBfbl1DoUgEWESyCExP%2Bx3qdQc4RVVvlL%2F7iszFVptcKUGAPjvDrqGCvOQR7pApmAHiC0PqGB7BRdZMTgYghhMBHkc%2F8BKSyW8GDLPBGPFNzb%2B51tOjfUbICh75nfV6h4ZZHx4WxTyK0EddzcAre3Z%2F5iEzyY4yKbcfidMbpte8gfHAlu71UPt7UL0p44%2FSKmlqlyHbgayJCpGr3Z6rSbcC3%2FNBcd0DG09K8tHy9L3FyBesgA5LOTukx96nscX9do5sLBrJ%2F6zzgaFneo2y%2BqvUx2BxNfQi%2B6P6Hs3sRVS12bLBBZ4T7givLlRBfTj7WEHcs2FsNiEHWzQMWX60cLCIbO3VDU5d8RhJRFl2oKt2rjgbHMD0vb5Dw8wJTl8Qnyuf%2FZuIBh9%2FWxV3ZUdBrvLhYh6WrkRYA%2BjYqsN45%2BXdeKU9423GbQ0LeEQwWyKYwu5xzr7rK08VCWevdWv99AXOL7m%2BWGzDw%2F1HZvamheIEv%2Bp8n7dkGCvKRWvYNe3Kpc9LaUCN1Yi2y2FXixjlmMr2Fi2sB6pXxgEU7MCq%2BwiPOUNbaLvlejYOU8wSl5chr7rKnOboeML%2FYh8IGOqUBN4rB6WeHmLYdgNbPr0ormCQo8Z8mEptzYkpx0jey9llABx9A5AmDvqGtyxYWiP1tOic2zodoD7gK7ODWqtoa5gkk4aMOoMdTiKngQOA%2BklnwAC8deBXZQMlKcCmbVmwAD12b5xcvYYZrQiUDIOrKfU2%2FEW90mjUpxkUQLOvUGR4n6iP%2B8K9DNWqDds2RxYtRDa5hpPTLqvJwFS7WzMBt9%2BdNZXMl&X-Amz-Signature=0521bc64af412361c4d7077a5e29ed7440f9731f8a50bfac281093ba73cb0ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYIDR5T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCeSRAz3bEsbDPZMG1aKXgm1utJYevtPsIKrxT0atF%2FFgIgEOXKTIK%2B%2F1Q5ckP5na4Ud%2Bhw3m7B7lhIaZMyjp%2B8gtoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJeG4iBq7TVcf5VRPyrcA1biJj53DgKuo6SrwfBmSjm6zewD4pG1GVp1Sh5euTvGOgDz3R2VXBfbl1DoUgEWESyCExP%2Bx3qdQc4RVVvlL%2F7iszFVptcKUGAPjvDrqGCvOQR7pApmAHiC0PqGB7BRdZMTgYghhMBHkc%2F8BKSyW8GDLPBGPFNzb%2B51tOjfUbICh75nfV6h4ZZHx4WxTyK0EddzcAre3Z%2F5iEzyY4yKbcfidMbpte8gfHAlu71UPt7UL0p44%2FSKmlqlyHbgayJCpGr3Z6rSbcC3%2FNBcd0DG09K8tHy9L3FyBesgA5LOTukx96nscX9do5sLBrJ%2F6zzgaFneo2y%2BqvUx2BxNfQi%2B6P6Hs3sRVS12bLBBZ4T7givLlRBfTj7WEHcs2FsNiEHWzQMWX60cLCIbO3VDU5d8RhJRFl2oKt2rjgbHMD0vb5Dw8wJTl8Qnyuf%2FZuIBh9%2FWxV3ZUdBrvLhYh6WrkRYA%2BjYqsN45%2BXdeKU9423GbQ0LeEQwWyKYwu5xzr7rK08VCWevdWv99AXOL7m%2BWGzDw%2F1HZvamheIEv%2Bp8n7dkGCvKRWvYNe3Kpc9LaUCN1Yi2y2FXixjlmMr2Fi2sB6pXxgEU7MCq%2BwiPOUNbaLvlejYOU8wSl5chr7rKnOboeML%2FYh8IGOqUBN4rB6WeHmLYdgNbPr0ormCQo8Z8mEptzYkpx0jey9llABx9A5AmDvqGtyxYWiP1tOic2zodoD7gK7ODWqtoa5gkk4aMOoMdTiKngQOA%2BklnwAC8deBXZQMlKcCmbVmwAD12b5xcvYYZrQiUDIOrKfU2%2FEW90mjUpxkUQLOvUGR4n6iP%2B8K9DNWqDds2RxYtRDa5hpPTLqvJwFS7WzMBt9%2BdNZXMl&X-Amz-Signature=e7d7a919dd7c05adc5edc1ef93edd5079e543ef7ac3e6df6d9330035a2cfd5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYIDR5T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCeSRAz3bEsbDPZMG1aKXgm1utJYevtPsIKrxT0atF%2FFgIgEOXKTIK%2B%2F1Q5ckP5na4Ud%2Bhw3m7B7lhIaZMyjp%2B8gtoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJeG4iBq7TVcf5VRPyrcA1biJj53DgKuo6SrwfBmSjm6zewD4pG1GVp1Sh5euTvGOgDz3R2VXBfbl1DoUgEWESyCExP%2Bx3qdQc4RVVvlL%2F7iszFVptcKUGAPjvDrqGCvOQR7pApmAHiC0PqGB7BRdZMTgYghhMBHkc%2F8BKSyW8GDLPBGPFNzb%2B51tOjfUbICh75nfV6h4ZZHx4WxTyK0EddzcAre3Z%2F5iEzyY4yKbcfidMbpte8gfHAlu71UPt7UL0p44%2FSKmlqlyHbgayJCpGr3Z6rSbcC3%2FNBcd0DG09K8tHy9L3FyBesgA5LOTukx96nscX9do5sLBrJ%2F6zzgaFneo2y%2BqvUx2BxNfQi%2B6P6Hs3sRVS12bLBBZ4T7givLlRBfTj7WEHcs2FsNiEHWzQMWX60cLCIbO3VDU5d8RhJRFl2oKt2rjgbHMD0vb5Dw8wJTl8Qnyuf%2FZuIBh9%2FWxV3ZUdBrvLhYh6WrkRYA%2BjYqsN45%2BXdeKU9423GbQ0LeEQwWyKYwu5xzr7rK08VCWevdWv99AXOL7m%2BWGzDw%2F1HZvamheIEv%2Bp8n7dkGCvKRWvYNe3Kpc9LaUCN1Yi2y2FXixjlmMr2Fi2sB6pXxgEU7MCq%2BwiPOUNbaLvlejYOU8wSl5chr7rKnOboeML%2FYh8IGOqUBN4rB6WeHmLYdgNbPr0ormCQo8Z8mEptzYkpx0jey9llABx9A5AmDvqGtyxYWiP1tOic2zodoD7gK7ODWqtoa5gkk4aMOoMdTiKngQOA%2BklnwAC8deBXZQMlKcCmbVmwAD12b5xcvYYZrQiUDIOrKfU2%2FEW90mjUpxkUQLOvUGR4n6iP%2B8K9DNWqDds2RxYtRDa5hpPTLqvJwFS7WzMBt9%2BdNZXMl&X-Amz-Signature=5283ee69c2896a80d3b3b7b66e47baec8dddcaab63a3d907c5504f511c41be8b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYIDR5T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCeSRAz3bEsbDPZMG1aKXgm1utJYevtPsIKrxT0atF%2FFgIgEOXKTIK%2B%2F1Q5ckP5na4Ud%2Bhw3m7B7lhIaZMyjp%2B8gtoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJeG4iBq7TVcf5VRPyrcA1biJj53DgKuo6SrwfBmSjm6zewD4pG1GVp1Sh5euTvGOgDz3R2VXBfbl1DoUgEWESyCExP%2Bx3qdQc4RVVvlL%2F7iszFVptcKUGAPjvDrqGCvOQR7pApmAHiC0PqGB7BRdZMTgYghhMBHkc%2F8BKSyW8GDLPBGPFNzb%2B51tOjfUbICh75nfV6h4ZZHx4WxTyK0EddzcAre3Z%2F5iEzyY4yKbcfidMbpte8gfHAlu71UPt7UL0p44%2FSKmlqlyHbgayJCpGr3Z6rSbcC3%2FNBcd0DG09K8tHy9L3FyBesgA5LOTukx96nscX9do5sLBrJ%2F6zzgaFneo2y%2BqvUx2BxNfQi%2B6P6Hs3sRVS12bLBBZ4T7givLlRBfTj7WEHcs2FsNiEHWzQMWX60cLCIbO3VDU5d8RhJRFl2oKt2rjgbHMD0vb5Dw8wJTl8Qnyuf%2FZuIBh9%2FWxV3ZUdBrvLhYh6WrkRYA%2BjYqsN45%2BXdeKU9423GbQ0LeEQwWyKYwu5xzr7rK08VCWevdWv99AXOL7m%2BWGzDw%2F1HZvamheIEv%2Bp8n7dkGCvKRWvYNe3Kpc9LaUCN1Yi2y2FXixjlmMr2Fi2sB6pXxgEU7MCq%2BwiPOUNbaLvlejYOU8wSl5chr7rKnOboeML%2FYh8IGOqUBN4rB6WeHmLYdgNbPr0ormCQo8Z8mEptzYkpx0jey9llABx9A5AmDvqGtyxYWiP1tOic2zodoD7gK7ODWqtoa5gkk4aMOoMdTiKngQOA%2BklnwAC8deBXZQMlKcCmbVmwAD12b5xcvYYZrQiUDIOrKfU2%2FEW90mjUpxkUQLOvUGR4n6iP%2B8K9DNWqDds2RxYtRDa5hpPTLqvJwFS7WzMBt9%2BdNZXMl&X-Amz-Signature=47b63c9a67ea7318c9ee41021832df41b628de4f7eb93a6f0ec9c28b3ed3a0fb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYIDR5T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCeSRAz3bEsbDPZMG1aKXgm1utJYevtPsIKrxT0atF%2FFgIgEOXKTIK%2B%2F1Q5ckP5na4Ud%2Bhw3m7B7lhIaZMyjp%2B8gtoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJeG4iBq7TVcf5VRPyrcA1biJj53DgKuo6SrwfBmSjm6zewD4pG1GVp1Sh5euTvGOgDz3R2VXBfbl1DoUgEWESyCExP%2Bx3qdQc4RVVvlL%2F7iszFVptcKUGAPjvDrqGCvOQR7pApmAHiC0PqGB7BRdZMTgYghhMBHkc%2F8BKSyW8GDLPBGPFNzb%2B51tOjfUbICh75nfV6h4ZZHx4WxTyK0EddzcAre3Z%2F5iEzyY4yKbcfidMbpte8gfHAlu71UPt7UL0p44%2FSKmlqlyHbgayJCpGr3Z6rSbcC3%2FNBcd0DG09K8tHy9L3FyBesgA5LOTukx96nscX9do5sLBrJ%2F6zzgaFneo2y%2BqvUx2BxNfQi%2B6P6Hs3sRVS12bLBBZ4T7givLlRBfTj7WEHcs2FsNiEHWzQMWX60cLCIbO3VDU5d8RhJRFl2oKt2rjgbHMD0vb5Dw8wJTl8Qnyuf%2FZuIBh9%2FWxV3ZUdBrvLhYh6WrkRYA%2BjYqsN45%2BXdeKU9423GbQ0LeEQwWyKYwu5xzr7rK08VCWevdWv99AXOL7m%2BWGzDw%2F1HZvamheIEv%2Bp8n7dkGCvKRWvYNe3Kpc9LaUCN1Yi2y2FXixjlmMr2Fi2sB6pXxgEU7MCq%2BwiPOUNbaLvlejYOU8wSl5chr7rKnOboeML%2FYh8IGOqUBN4rB6WeHmLYdgNbPr0ormCQo8Z8mEptzYkpx0jey9llABx9A5AmDvqGtyxYWiP1tOic2zodoD7gK7ODWqtoa5gkk4aMOoMdTiKngQOA%2BklnwAC8deBXZQMlKcCmbVmwAD12b5xcvYYZrQiUDIOrKfU2%2FEW90mjUpxkUQLOvUGR4n6iP%2B8K9DNWqDds2RxYtRDa5hpPTLqvJwFS7WzMBt9%2BdNZXMl&X-Amz-Signature=9ff78b946b7020aa27e5fd8979c3520e71531669c440a9692e2537dde23cd341&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

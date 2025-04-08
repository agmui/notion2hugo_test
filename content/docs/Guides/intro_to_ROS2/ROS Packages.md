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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIJ34IQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CmdNtzcgQcEheWOmpQrSDDyeYDaYeWYnSUNWLKL6HwIhAJAlQcRvZkS0JBQGHYZlCc740evMql7fOhL%2FOK9%2FtYUOKv8DCGwQABoMNjM3NDIzMTgzODA1Igy80FjXPChYsB%2F2fzsq3APol%2FrZNN%2Ffv7ssP%2Ffb8W7RWlNapw2Z7YHfz3Dv1EeA136KJwYQGBrfU5wi9DvIMUX8MK%2B5puCS1qrpweIc%2FYc6UHdp5xqAvk6DJX0zGXDtnx1ABZFdbz4vxiFd%2ByIVSAUfdvI%2FNviqHmHuckg3W8yBqb9oRSLE7a2bYXSl%2BHLzlKSXva%2BFBy8GM2NR1917pnLMjyLwPoHOG8R8wwhqs5POs1SfMqwnobmDIXgZom1TTQj1ntaTpMnnhj%2FIS1R5%2BwByiQ%2FEK%2FZrf7ZPh2NSlHR3ISRl%2FFaljTH17GOkZ%2BU%2BD%2FdZd43Q06X7vC8q3%2BVbv1JLs2wCWHJSBm2DbFHHkMwzyuOMuPbViO9wrQqD%2Fcb4CCn8uQcT%2Bf4GcnXAKzeDM1siPYTvamSoHORMbnmKxquxYV1CI%2BByi%2FNmZFvCrhzaWxTu%2BhHklr4aqzKLbIx971z02HfM%2BrTd76qXfbtqQk7Ofa%2BuyPO0N7vzBoCjNSzmWak36SBR6axf7%2Bgq31KWsYOP34swaJN%2FAirHQzkJiQOGq1lht0Md5ZvkExIo264TSr4fId4C%2B%2BM3jPFB4605OX9hmDJuo%2BzpOR19fyu6ERUGXtPTKnZn4dmfKrJ8Ajlghow9heJY73OkhpBgMTDen9K%2FBjqkAcFRtX3Xn9AN%2Bm6imPFAsxz2N9%2F0ihz9PT2Mog%2F1bOENFU3zEUHohmKk1Ydy2jLVKwBuYneJ3DIo0pecLHbfg7%2FTQqr4XIJQcPxSk%2BIJ4UsTJWwxxpmJRNLuypoafEL4hhQ6D1nWVao8rOBLjhGQ3we1dbhJnZT95Nrvst4VWdE66GnOkdyp7KU4E5NsZXl0XWWVKZ9PvGfPGzWUk%2B4U370cHqAy&X-Amz-Signature=07ffbc58e3c6113b3285e8ebf52e10f4e219b42ae1ab885b22a13cf5d9cb47c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIJ34IQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CmdNtzcgQcEheWOmpQrSDDyeYDaYeWYnSUNWLKL6HwIhAJAlQcRvZkS0JBQGHYZlCc740evMql7fOhL%2FOK9%2FtYUOKv8DCGwQABoMNjM3NDIzMTgzODA1Igy80FjXPChYsB%2F2fzsq3APol%2FrZNN%2Ffv7ssP%2Ffb8W7RWlNapw2Z7YHfz3Dv1EeA136KJwYQGBrfU5wi9DvIMUX8MK%2B5puCS1qrpweIc%2FYc6UHdp5xqAvk6DJX0zGXDtnx1ABZFdbz4vxiFd%2ByIVSAUfdvI%2FNviqHmHuckg3W8yBqb9oRSLE7a2bYXSl%2BHLzlKSXva%2BFBy8GM2NR1917pnLMjyLwPoHOG8R8wwhqs5POs1SfMqwnobmDIXgZom1TTQj1ntaTpMnnhj%2FIS1R5%2BwByiQ%2FEK%2FZrf7ZPh2NSlHR3ISRl%2FFaljTH17GOkZ%2BU%2BD%2FdZd43Q06X7vC8q3%2BVbv1JLs2wCWHJSBm2DbFHHkMwzyuOMuPbViO9wrQqD%2Fcb4CCn8uQcT%2Bf4GcnXAKzeDM1siPYTvamSoHORMbnmKxquxYV1CI%2BByi%2FNmZFvCrhzaWxTu%2BhHklr4aqzKLbIx971z02HfM%2BrTd76qXfbtqQk7Ofa%2BuyPO0N7vzBoCjNSzmWak36SBR6axf7%2Bgq31KWsYOP34swaJN%2FAirHQzkJiQOGq1lht0Md5ZvkExIo264TSr4fId4C%2B%2BM3jPFB4605OX9hmDJuo%2BzpOR19fyu6ERUGXtPTKnZn4dmfKrJ8Ajlghow9heJY73OkhpBgMTDen9K%2FBjqkAcFRtX3Xn9AN%2Bm6imPFAsxz2N9%2F0ihz9PT2Mog%2F1bOENFU3zEUHohmKk1Ydy2jLVKwBuYneJ3DIo0pecLHbfg7%2FTQqr4XIJQcPxSk%2BIJ4UsTJWwxxpmJRNLuypoafEL4hhQ6D1nWVao8rOBLjhGQ3we1dbhJnZT95Nrvst4VWdE66GnOkdyp7KU4E5NsZXl0XWWVKZ9PvGfPGzWUk%2B4U370cHqAy&X-Amz-Signature=a00cfa025cf2f9371a5aca1726c02314fc091f07a6b999fdfbc5c9ecc3752cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIJ34IQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CmdNtzcgQcEheWOmpQrSDDyeYDaYeWYnSUNWLKL6HwIhAJAlQcRvZkS0JBQGHYZlCc740evMql7fOhL%2FOK9%2FtYUOKv8DCGwQABoMNjM3NDIzMTgzODA1Igy80FjXPChYsB%2F2fzsq3APol%2FrZNN%2Ffv7ssP%2Ffb8W7RWlNapw2Z7YHfz3Dv1EeA136KJwYQGBrfU5wi9DvIMUX8MK%2B5puCS1qrpweIc%2FYc6UHdp5xqAvk6DJX0zGXDtnx1ABZFdbz4vxiFd%2ByIVSAUfdvI%2FNviqHmHuckg3W8yBqb9oRSLE7a2bYXSl%2BHLzlKSXva%2BFBy8GM2NR1917pnLMjyLwPoHOG8R8wwhqs5POs1SfMqwnobmDIXgZom1TTQj1ntaTpMnnhj%2FIS1R5%2BwByiQ%2FEK%2FZrf7ZPh2NSlHR3ISRl%2FFaljTH17GOkZ%2BU%2BD%2FdZd43Q06X7vC8q3%2BVbv1JLs2wCWHJSBm2DbFHHkMwzyuOMuPbViO9wrQqD%2Fcb4CCn8uQcT%2Bf4GcnXAKzeDM1siPYTvamSoHORMbnmKxquxYV1CI%2BByi%2FNmZFvCrhzaWxTu%2BhHklr4aqzKLbIx971z02HfM%2BrTd76qXfbtqQk7Ofa%2BuyPO0N7vzBoCjNSzmWak36SBR6axf7%2Bgq31KWsYOP34swaJN%2FAirHQzkJiQOGq1lht0Md5ZvkExIo264TSr4fId4C%2B%2BM3jPFB4605OX9hmDJuo%2BzpOR19fyu6ERUGXtPTKnZn4dmfKrJ8Ajlghow9heJY73OkhpBgMTDen9K%2FBjqkAcFRtX3Xn9AN%2Bm6imPFAsxz2N9%2F0ihz9PT2Mog%2F1bOENFU3zEUHohmKk1Ydy2jLVKwBuYneJ3DIo0pecLHbfg7%2FTQqr4XIJQcPxSk%2BIJ4UsTJWwxxpmJRNLuypoafEL4hhQ6D1nWVao8rOBLjhGQ3we1dbhJnZT95Nrvst4VWdE66GnOkdyp7KU4E5NsZXl0XWWVKZ9PvGfPGzWUk%2B4U370cHqAy&X-Amz-Signature=62772296aa1614b06074d202cc0c46754f37e62c2f1db646cf310ca122a0d995&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIJ34IQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CmdNtzcgQcEheWOmpQrSDDyeYDaYeWYnSUNWLKL6HwIhAJAlQcRvZkS0JBQGHYZlCc740evMql7fOhL%2FOK9%2FtYUOKv8DCGwQABoMNjM3NDIzMTgzODA1Igy80FjXPChYsB%2F2fzsq3APol%2FrZNN%2Ffv7ssP%2Ffb8W7RWlNapw2Z7YHfz3Dv1EeA136KJwYQGBrfU5wi9DvIMUX8MK%2B5puCS1qrpweIc%2FYc6UHdp5xqAvk6DJX0zGXDtnx1ABZFdbz4vxiFd%2ByIVSAUfdvI%2FNviqHmHuckg3W8yBqb9oRSLE7a2bYXSl%2BHLzlKSXva%2BFBy8GM2NR1917pnLMjyLwPoHOG8R8wwhqs5POs1SfMqwnobmDIXgZom1TTQj1ntaTpMnnhj%2FIS1R5%2BwByiQ%2FEK%2FZrf7ZPh2NSlHR3ISRl%2FFaljTH17GOkZ%2BU%2BD%2FdZd43Q06X7vC8q3%2BVbv1JLs2wCWHJSBm2DbFHHkMwzyuOMuPbViO9wrQqD%2Fcb4CCn8uQcT%2Bf4GcnXAKzeDM1siPYTvamSoHORMbnmKxquxYV1CI%2BByi%2FNmZFvCrhzaWxTu%2BhHklr4aqzKLbIx971z02HfM%2BrTd76qXfbtqQk7Ofa%2BuyPO0N7vzBoCjNSzmWak36SBR6axf7%2Bgq31KWsYOP34swaJN%2FAirHQzkJiQOGq1lht0Md5ZvkExIo264TSr4fId4C%2B%2BM3jPFB4605OX9hmDJuo%2BzpOR19fyu6ERUGXtPTKnZn4dmfKrJ8Ajlghow9heJY73OkhpBgMTDen9K%2FBjqkAcFRtX3Xn9AN%2Bm6imPFAsxz2N9%2F0ihz9PT2Mog%2F1bOENFU3zEUHohmKk1Ydy2jLVKwBuYneJ3DIo0pecLHbfg7%2FTQqr4XIJQcPxSk%2BIJ4UsTJWwxxpmJRNLuypoafEL4hhQ6D1nWVao8rOBLjhGQ3we1dbhJnZT95Nrvst4VWdE66GnOkdyp7KU4E5NsZXl0XWWVKZ9PvGfPGzWUk%2B4U370cHqAy&X-Amz-Signature=9d1050e98c719bf2f117e8163231c95a19588abb09cd556aa9855c51c4ae9406&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIJ34IQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CmdNtzcgQcEheWOmpQrSDDyeYDaYeWYnSUNWLKL6HwIhAJAlQcRvZkS0JBQGHYZlCc740evMql7fOhL%2FOK9%2FtYUOKv8DCGwQABoMNjM3NDIzMTgzODA1Igy80FjXPChYsB%2F2fzsq3APol%2FrZNN%2Ffv7ssP%2Ffb8W7RWlNapw2Z7YHfz3Dv1EeA136KJwYQGBrfU5wi9DvIMUX8MK%2B5puCS1qrpweIc%2FYc6UHdp5xqAvk6DJX0zGXDtnx1ABZFdbz4vxiFd%2ByIVSAUfdvI%2FNviqHmHuckg3W8yBqb9oRSLE7a2bYXSl%2BHLzlKSXva%2BFBy8GM2NR1917pnLMjyLwPoHOG8R8wwhqs5POs1SfMqwnobmDIXgZom1TTQj1ntaTpMnnhj%2FIS1R5%2BwByiQ%2FEK%2FZrf7ZPh2NSlHR3ISRl%2FFaljTH17GOkZ%2BU%2BD%2FdZd43Q06X7vC8q3%2BVbv1JLs2wCWHJSBm2DbFHHkMwzyuOMuPbViO9wrQqD%2Fcb4CCn8uQcT%2Bf4GcnXAKzeDM1siPYTvamSoHORMbnmKxquxYV1CI%2BByi%2FNmZFvCrhzaWxTu%2BhHklr4aqzKLbIx971z02HfM%2BrTd76qXfbtqQk7Ofa%2BuyPO0N7vzBoCjNSzmWak36SBR6axf7%2Bgq31KWsYOP34swaJN%2FAirHQzkJiQOGq1lht0Md5ZvkExIo264TSr4fId4C%2B%2BM3jPFB4605OX9hmDJuo%2BzpOR19fyu6ERUGXtPTKnZn4dmfKrJ8Ajlghow9heJY73OkhpBgMTDen9K%2FBjqkAcFRtX3Xn9AN%2Bm6imPFAsxz2N9%2F0ihz9PT2Mog%2F1bOENFU3zEUHohmKk1Ydy2jLVKwBuYneJ3DIo0pecLHbfg7%2FTQqr4XIJQcPxSk%2BIJ4UsTJWwxxpmJRNLuypoafEL4hhQ6D1nWVao8rOBLjhGQ3we1dbhJnZT95Nrvst4VWdE66GnOkdyp7KU4E5NsZXl0XWWVKZ9PvGfPGzWUk%2B4U370cHqAy&X-Amz-Signature=063851acf243f629246426e2f160de5d6717d6e70fc9408d3819f57e1853af21&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIJ34IQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CmdNtzcgQcEheWOmpQrSDDyeYDaYeWYnSUNWLKL6HwIhAJAlQcRvZkS0JBQGHYZlCc740evMql7fOhL%2FOK9%2FtYUOKv8DCGwQABoMNjM3NDIzMTgzODA1Igy80FjXPChYsB%2F2fzsq3APol%2FrZNN%2Ffv7ssP%2Ffb8W7RWlNapw2Z7YHfz3Dv1EeA136KJwYQGBrfU5wi9DvIMUX8MK%2B5puCS1qrpweIc%2FYc6UHdp5xqAvk6DJX0zGXDtnx1ABZFdbz4vxiFd%2ByIVSAUfdvI%2FNviqHmHuckg3W8yBqb9oRSLE7a2bYXSl%2BHLzlKSXva%2BFBy8GM2NR1917pnLMjyLwPoHOG8R8wwhqs5POs1SfMqwnobmDIXgZom1TTQj1ntaTpMnnhj%2FIS1R5%2BwByiQ%2FEK%2FZrf7ZPh2NSlHR3ISRl%2FFaljTH17GOkZ%2BU%2BD%2FdZd43Q06X7vC8q3%2BVbv1JLs2wCWHJSBm2DbFHHkMwzyuOMuPbViO9wrQqD%2Fcb4CCn8uQcT%2Bf4GcnXAKzeDM1siPYTvamSoHORMbnmKxquxYV1CI%2BByi%2FNmZFvCrhzaWxTu%2BhHklr4aqzKLbIx971z02HfM%2BrTd76qXfbtqQk7Ofa%2BuyPO0N7vzBoCjNSzmWak36SBR6axf7%2Bgq31KWsYOP34swaJN%2FAirHQzkJiQOGq1lht0Md5ZvkExIo264TSr4fId4C%2B%2BM3jPFB4605OX9hmDJuo%2BzpOR19fyu6ERUGXtPTKnZn4dmfKrJ8Ajlghow9heJY73OkhpBgMTDen9K%2FBjqkAcFRtX3Xn9AN%2Bm6imPFAsxz2N9%2F0ihz9PT2Mog%2F1bOENFU3zEUHohmKk1Ydy2jLVKwBuYneJ3DIo0pecLHbfg7%2FTQqr4XIJQcPxSk%2BIJ4UsTJWwxxpmJRNLuypoafEL4hhQ6D1nWVao8rOBLjhGQ3we1dbhJnZT95Nrvst4VWdE66GnOkdyp7KU4E5NsZXl0XWWVKZ9PvGfPGzWUk%2B4U370cHqAy&X-Amz-Signature=d9dfa1824471a3bb3427dbba29dfae4e145784f476ea927a2cfd15bd4f306937&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIJ34IQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CmdNtzcgQcEheWOmpQrSDDyeYDaYeWYnSUNWLKL6HwIhAJAlQcRvZkS0JBQGHYZlCc740evMql7fOhL%2FOK9%2FtYUOKv8DCGwQABoMNjM3NDIzMTgzODA1Igy80FjXPChYsB%2F2fzsq3APol%2FrZNN%2Ffv7ssP%2Ffb8W7RWlNapw2Z7YHfz3Dv1EeA136KJwYQGBrfU5wi9DvIMUX8MK%2B5puCS1qrpweIc%2FYc6UHdp5xqAvk6DJX0zGXDtnx1ABZFdbz4vxiFd%2ByIVSAUfdvI%2FNviqHmHuckg3W8yBqb9oRSLE7a2bYXSl%2BHLzlKSXva%2BFBy8GM2NR1917pnLMjyLwPoHOG8R8wwhqs5POs1SfMqwnobmDIXgZom1TTQj1ntaTpMnnhj%2FIS1R5%2BwByiQ%2FEK%2FZrf7ZPh2NSlHR3ISRl%2FFaljTH17GOkZ%2BU%2BD%2FdZd43Q06X7vC8q3%2BVbv1JLs2wCWHJSBm2DbFHHkMwzyuOMuPbViO9wrQqD%2Fcb4CCn8uQcT%2Bf4GcnXAKzeDM1siPYTvamSoHORMbnmKxquxYV1CI%2BByi%2FNmZFvCrhzaWxTu%2BhHklr4aqzKLbIx971z02HfM%2BrTd76qXfbtqQk7Ofa%2BuyPO0N7vzBoCjNSzmWak36SBR6axf7%2Bgq31KWsYOP34swaJN%2FAirHQzkJiQOGq1lht0Md5ZvkExIo264TSr4fId4C%2B%2BM3jPFB4605OX9hmDJuo%2BzpOR19fyu6ERUGXtPTKnZn4dmfKrJ8Ajlghow9heJY73OkhpBgMTDen9K%2FBjqkAcFRtX3Xn9AN%2Bm6imPFAsxz2N9%2F0ihz9PT2Mog%2F1bOENFU3zEUHohmKk1Ydy2jLVKwBuYneJ3DIo0pecLHbfg7%2FTQqr4XIJQcPxSk%2BIJ4UsTJWwxxpmJRNLuypoafEL4hhQ6D1nWVao8rOBLjhGQ3we1dbhJnZT95Nrvst4VWdE66GnOkdyp7KU4E5NsZXl0XWWVKZ9PvGfPGzWUk%2B4U370cHqAy&X-Amz-Signature=545a7e63e54fa1d2fc4badb0dcd73c8595e45a7cff72616b220daeffb01abe9a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

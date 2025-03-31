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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAXWKZ6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDGumcT%2BfGM3%2BAf7CRGJNTsSaYDqVkDZIPEKchz43WSJQIgU4roOBlJjvENWtIQLGeJWaSTdW8udijlof64aIgZn28qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBvRDn6thf6u4f7MyrcA5kOhoSteVM%2F8wCN36RIME5yI9zZSbf3UbY0gAwrr03rNOjjYtYiqX3%2BchKis%2BpKlscWXUr5IQgY2sGUOK%2F%2FCoGM7xtMH%2FixlIggVD%2BRATn5YukiAA2iBnCRFSCF%2FMauWuJ4ioFsbRVyk5fB2eoVQSx9o3YurrgD3SkkZfhqRtQ%2F3ScmZEaFDc%2BbK%2FTvzfCoNBhEGgTHg%2FGJb82agkFxCYPstFpQUNYGj5Fzi9cYTUIoqxWkPDiziulhzq197rljO4ser1GJ6%2F4jznHhu%2FvT8FX2Q5B98iCgC4miM3s5I9%2Fntl%2BFYVvkZmOVeDVqd2eVVuJPY025rFcz9FoNUxEjvVbEUm90XMLsxZ7f%2BDT%2BbmdstCNWGg%2FipkHuEJaRUPodT2O9PDnwoTsnPIHCScyXaGe0x4PMK1QAid6mFi7fuM1pV6SoBWMCd1xnt%2BrTW%2FX%2BBU%2B9a2s1s7KyRdaAP6lh9ol%2BADKYWT49oPbD%2BGjyInUjMmoF4xWiHL3iSZddMTYPvjzaBib%2BRxkQTDHYBcfNz4rcQT%2BFFcwN1NC4qGmi3lwzV9M5xO8aoLr9C049rRC2%2BGDMLB5C2T5ztGihPN5jlHBZNVc77rSHNurhrlOGauXTEvDn0UR8mq3lrsZ3MLaIqr8GOqUBVkiPNQIWFTwbBjOLI5g3nvmOmq9HugWjZz5d8z56dbLQH1LNsSuCDcGxhsu7e3SdFy6lg%2FhIMRrZrJQ5fjtBQPL%2FFIgM8aWnnPjaR139QW7eXx9YM7RiTFmYOp2%2Fj8fOgxTS63IIXdQQrBS35A05TXlWOWiDT8XCRMZcuUilW8lxSSqTEuYpcEHet8gThQklBlf7IHl2SNHCsGL7sVpXJ4oF0A5V&X-Amz-Signature=ae0a1782c6ce44f90f83287a190a6c560170cda1e6754cab36dca6310cf9ea59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAXWKZ6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDGumcT%2BfGM3%2BAf7CRGJNTsSaYDqVkDZIPEKchz43WSJQIgU4roOBlJjvENWtIQLGeJWaSTdW8udijlof64aIgZn28qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBvRDn6thf6u4f7MyrcA5kOhoSteVM%2F8wCN36RIME5yI9zZSbf3UbY0gAwrr03rNOjjYtYiqX3%2BchKis%2BpKlscWXUr5IQgY2sGUOK%2F%2FCoGM7xtMH%2FixlIggVD%2BRATn5YukiAA2iBnCRFSCF%2FMauWuJ4ioFsbRVyk5fB2eoVQSx9o3YurrgD3SkkZfhqRtQ%2F3ScmZEaFDc%2BbK%2FTvzfCoNBhEGgTHg%2FGJb82agkFxCYPstFpQUNYGj5Fzi9cYTUIoqxWkPDiziulhzq197rljO4ser1GJ6%2F4jznHhu%2FvT8FX2Q5B98iCgC4miM3s5I9%2Fntl%2BFYVvkZmOVeDVqd2eVVuJPY025rFcz9FoNUxEjvVbEUm90XMLsxZ7f%2BDT%2BbmdstCNWGg%2FipkHuEJaRUPodT2O9PDnwoTsnPIHCScyXaGe0x4PMK1QAid6mFi7fuM1pV6SoBWMCd1xnt%2BrTW%2FX%2BBU%2B9a2s1s7KyRdaAP6lh9ol%2BADKYWT49oPbD%2BGjyInUjMmoF4xWiHL3iSZddMTYPvjzaBib%2BRxkQTDHYBcfNz4rcQT%2BFFcwN1NC4qGmi3lwzV9M5xO8aoLr9C049rRC2%2BGDMLB5C2T5ztGihPN5jlHBZNVc77rSHNurhrlOGauXTEvDn0UR8mq3lrsZ3MLaIqr8GOqUBVkiPNQIWFTwbBjOLI5g3nvmOmq9HugWjZz5d8z56dbLQH1LNsSuCDcGxhsu7e3SdFy6lg%2FhIMRrZrJQ5fjtBQPL%2FFIgM8aWnnPjaR139QW7eXx9YM7RiTFmYOp2%2Fj8fOgxTS63IIXdQQrBS35A05TXlWOWiDT8XCRMZcuUilW8lxSSqTEuYpcEHet8gThQklBlf7IHl2SNHCsGL7sVpXJ4oF0A5V&X-Amz-Signature=c01766afab9cc3663ec13c18b1711620dd88fabe080119688bc811718be5c24b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAXWKZ6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDGumcT%2BfGM3%2BAf7CRGJNTsSaYDqVkDZIPEKchz43WSJQIgU4roOBlJjvENWtIQLGeJWaSTdW8udijlof64aIgZn28qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBvRDn6thf6u4f7MyrcA5kOhoSteVM%2F8wCN36RIME5yI9zZSbf3UbY0gAwrr03rNOjjYtYiqX3%2BchKis%2BpKlscWXUr5IQgY2sGUOK%2F%2FCoGM7xtMH%2FixlIggVD%2BRATn5YukiAA2iBnCRFSCF%2FMauWuJ4ioFsbRVyk5fB2eoVQSx9o3YurrgD3SkkZfhqRtQ%2F3ScmZEaFDc%2BbK%2FTvzfCoNBhEGgTHg%2FGJb82agkFxCYPstFpQUNYGj5Fzi9cYTUIoqxWkPDiziulhzq197rljO4ser1GJ6%2F4jznHhu%2FvT8FX2Q5B98iCgC4miM3s5I9%2Fntl%2BFYVvkZmOVeDVqd2eVVuJPY025rFcz9FoNUxEjvVbEUm90XMLsxZ7f%2BDT%2BbmdstCNWGg%2FipkHuEJaRUPodT2O9PDnwoTsnPIHCScyXaGe0x4PMK1QAid6mFi7fuM1pV6SoBWMCd1xnt%2BrTW%2FX%2BBU%2B9a2s1s7KyRdaAP6lh9ol%2BADKYWT49oPbD%2BGjyInUjMmoF4xWiHL3iSZddMTYPvjzaBib%2BRxkQTDHYBcfNz4rcQT%2BFFcwN1NC4qGmi3lwzV9M5xO8aoLr9C049rRC2%2BGDMLB5C2T5ztGihPN5jlHBZNVc77rSHNurhrlOGauXTEvDn0UR8mq3lrsZ3MLaIqr8GOqUBVkiPNQIWFTwbBjOLI5g3nvmOmq9HugWjZz5d8z56dbLQH1LNsSuCDcGxhsu7e3SdFy6lg%2FhIMRrZrJQ5fjtBQPL%2FFIgM8aWnnPjaR139QW7eXx9YM7RiTFmYOp2%2Fj8fOgxTS63IIXdQQrBS35A05TXlWOWiDT8XCRMZcuUilW8lxSSqTEuYpcEHet8gThQklBlf7IHl2SNHCsGL7sVpXJ4oF0A5V&X-Amz-Signature=2f328ed3dbff2649038408c5baf2cef5c45e3f9d2b01929c072433d64dcd5d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAXWKZ6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDGumcT%2BfGM3%2BAf7CRGJNTsSaYDqVkDZIPEKchz43WSJQIgU4roOBlJjvENWtIQLGeJWaSTdW8udijlof64aIgZn28qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBvRDn6thf6u4f7MyrcA5kOhoSteVM%2F8wCN36RIME5yI9zZSbf3UbY0gAwrr03rNOjjYtYiqX3%2BchKis%2BpKlscWXUr5IQgY2sGUOK%2F%2FCoGM7xtMH%2FixlIggVD%2BRATn5YukiAA2iBnCRFSCF%2FMauWuJ4ioFsbRVyk5fB2eoVQSx9o3YurrgD3SkkZfhqRtQ%2F3ScmZEaFDc%2BbK%2FTvzfCoNBhEGgTHg%2FGJb82agkFxCYPstFpQUNYGj5Fzi9cYTUIoqxWkPDiziulhzq197rljO4ser1GJ6%2F4jznHhu%2FvT8FX2Q5B98iCgC4miM3s5I9%2Fntl%2BFYVvkZmOVeDVqd2eVVuJPY025rFcz9FoNUxEjvVbEUm90XMLsxZ7f%2BDT%2BbmdstCNWGg%2FipkHuEJaRUPodT2O9PDnwoTsnPIHCScyXaGe0x4PMK1QAid6mFi7fuM1pV6SoBWMCd1xnt%2BrTW%2FX%2BBU%2B9a2s1s7KyRdaAP6lh9ol%2BADKYWT49oPbD%2BGjyInUjMmoF4xWiHL3iSZddMTYPvjzaBib%2BRxkQTDHYBcfNz4rcQT%2BFFcwN1NC4qGmi3lwzV9M5xO8aoLr9C049rRC2%2BGDMLB5C2T5ztGihPN5jlHBZNVc77rSHNurhrlOGauXTEvDn0UR8mq3lrsZ3MLaIqr8GOqUBVkiPNQIWFTwbBjOLI5g3nvmOmq9HugWjZz5d8z56dbLQH1LNsSuCDcGxhsu7e3SdFy6lg%2FhIMRrZrJQ5fjtBQPL%2FFIgM8aWnnPjaR139QW7eXx9YM7RiTFmYOp2%2Fj8fOgxTS63IIXdQQrBS35A05TXlWOWiDT8XCRMZcuUilW8lxSSqTEuYpcEHet8gThQklBlf7IHl2SNHCsGL7sVpXJ4oF0A5V&X-Amz-Signature=e84603fe1a19a73f0ec4d4bb70cbd366b7f93fdb20e52c4e46edcdf2436378e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAXWKZ6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDGumcT%2BfGM3%2BAf7CRGJNTsSaYDqVkDZIPEKchz43WSJQIgU4roOBlJjvENWtIQLGeJWaSTdW8udijlof64aIgZn28qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBvRDn6thf6u4f7MyrcA5kOhoSteVM%2F8wCN36RIME5yI9zZSbf3UbY0gAwrr03rNOjjYtYiqX3%2BchKis%2BpKlscWXUr5IQgY2sGUOK%2F%2FCoGM7xtMH%2FixlIggVD%2BRATn5YukiAA2iBnCRFSCF%2FMauWuJ4ioFsbRVyk5fB2eoVQSx9o3YurrgD3SkkZfhqRtQ%2F3ScmZEaFDc%2BbK%2FTvzfCoNBhEGgTHg%2FGJb82agkFxCYPstFpQUNYGj5Fzi9cYTUIoqxWkPDiziulhzq197rljO4ser1GJ6%2F4jznHhu%2FvT8FX2Q5B98iCgC4miM3s5I9%2Fntl%2BFYVvkZmOVeDVqd2eVVuJPY025rFcz9FoNUxEjvVbEUm90XMLsxZ7f%2BDT%2BbmdstCNWGg%2FipkHuEJaRUPodT2O9PDnwoTsnPIHCScyXaGe0x4PMK1QAid6mFi7fuM1pV6SoBWMCd1xnt%2BrTW%2FX%2BBU%2B9a2s1s7KyRdaAP6lh9ol%2BADKYWT49oPbD%2BGjyInUjMmoF4xWiHL3iSZddMTYPvjzaBib%2BRxkQTDHYBcfNz4rcQT%2BFFcwN1NC4qGmi3lwzV9M5xO8aoLr9C049rRC2%2BGDMLB5C2T5ztGihPN5jlHBZNVc77rSHNurhrlOGauXTEvDn0UR8mq3lrsZ3MLaIqr8GOqUBVkiPNQIWFTwbBjOLI5g3nvmOmq9HugWjZz5d8z56dbLQH1LNsSuCDcGxhsu7e3SdFy6lg%2FhIMRrZrJQ5fjtBQPL%2FFIgM8aWnnPjaR139QW7eXx9YM7RiTFmYOp2%2Fj8fOgxTS63IIXdQQrBS35A05TXlWOWiDT8XCRMZcuUilW8lxSSqTEuYpcEHet8gThQklBlf7IHl2SNHCsGL7sVpXJ4oF0A5V&X-Amz-Signature=d222604c7f2204af2d0b6818b0f41817244dbbb0abe830979f8644059cf96a51&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAXWKZ6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDGumcT%2BfGM3%2BAf7CRGJNTsSaYDqVkDZIPEKchz43WSJQIgU4roOBlJjvENWtIQLGeJWaSTdW8udijlof64aIgZn28qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBvRDn6thf6u4f7MyrcA5kOhoSteVM%2F8wCN36RIME5yI9zZSbf3UbY0gAwrr03rNOjjYtYiqX3%2BchKis%2BpKlscWXUr5IQgY2sGUOK%2F%2FCoGM7xtMH%2FixlIggVD%2BRATn5YukiAA2iBnCRFSCF%2FMauWuJ4ioFsbRVyk5fB2eoVQSx9o3YurrgD3SkkZfhqRtQ%2F3ScmZEaFDc%2BbK%2FTvzfCoNBhEGgTHg%2FGJb82agkFxCYPstFpQUNYGj5Fzi9cYTUIoqxWkPDiziulhzq197rljO4ser1GJ6%2F4jznHhu%2FvT8FX2Q5B98iCgC4miM3s5I9%2Fntl%2BFYVvkZmOVeDVqd2eVVuJPY025rFcz9FoNUxEjvVbEUm90XMLsxZ7f%2BDT%2BbmdstCNWGg%2FipkHuEJaRUPodT2O9PDnwoTsnPIHCScyXaGe0x4PMK1QAid6mFi7fuM1pV6SoBWMCd1xnt%2BrTW%2FX%2BBU%2B9a2s1s7KyRdaAP6lh9ol%2BADKYWT49oPbD%2BGjyInUjMmoF4xWiHL3iSZddMTYPvjzaBib%2BRxkQTDHYBcfNz4rcQT%2BFFcwN1NC4qGmi3lwzV9M5xO8aoLr9C049rRC2%2BGDMLB5C2T5ztGihPN5jlHBZNVc77rSHNurhrlOGauXTEvDn0UR8mq3lrsZ3MLaIqr8GOqUBVkiPNQIWFTwbBjOLI5g3nvmOmq9HugWjZz5d8z56dbLQH1LNsSuCDcGxhsu7e3SdFy6lg%2FhIMRrZrJQ5fjtBQPL%2FFIgM8aWnnPjaR139QW7eXx9YM7RiTFmYOp2%2Fj8fOgxTS63IIXdQQrBS35A05TXlWOWiDT8XCRMZcuUilW8lxSSqTEuYpcEHet8gThQklBlf7IHl2SNHCsGL7sVpXJ4oF0A5V&X-Amz-Signature=5036e08a53ceb3ffb4c9e42cb91a98ba7621d7f4beda4ef71785009ff13ed87a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAXWKZ6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDGumcT%2BfGM3%2BAf7CRGJNTsSaYDqVkDZIPEKchz43WSJQIgU4roOBlJjvENWtIQLGeJWaSTdW8udijlof64aIgZn28qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBvRDn6thf6u4f7MyrcA5kOhoSteVM%2F8wCN36RIME5yI9zZSbf3UbY0gAwrr03rNOjjYtYiqX3%2BchKis%2BpKlscWXUr5IQgY2sGUOK%2F%2FCoGM7xtMH%2FixlIggVD%2BRATn5YukiAA2iBnCRFSCF%2FMauWuJ4ioFsbRVyk5fB2eoVQSx9o3YurrgD3SkkZfhqRtQ%2F3ScmZEaFDc%2BbK%2FTvzfCoNBhEGgTHg%2FGJb82agkFxCYPstFpQUNYGj5Fzi9cYTUIoqxWkPDiziulhzq197rljO4ser1GJ6%2F4jznHhu%2FvT8FX2Q5B98iCgC4miM3s5I9%2Fntl%2BFYVvkZmOVeDVqd2eVVuJPY025rFcz9FoNUxEjvVbEUm90XMLsxZ7f%2BDT%2BbmdstCNWGg%2FipkHuEJaRUPodT2O9PDnwoTsnPIHCScyXaGe0x4PMK1QAid6mFi7fuM1pV6SoBWMCd1xnt%2BrTW%2FX%2BBU%2B9a2s1s7KyRdaAP6lh9ol%2BADKYWT49oPbD%2BGjyInUjMmoF4xWiHL3iSZddMTYPvjzaBib%2BRxkQTDHYBcfNz4rcQT%2BFFcwN1NC4qGmi3lwzV9M5xO8aoLr9C049rRC2%2BGDMLB5C2T5ztGihPN5jlHBZNVc77rSHNurhrlOGauXTEvDn0UR8mq3lrsZ3MLaIqr8GOqUBVkiPNQIWFTwbBjOLI5g3nvmOmq9HugWjZz5d8z56dbLQH1LNsSuCDcGxhsu7e3SdFy6lg%2FhIMRrZrJQ5fjtBQPL%2FFIgM8aWnnPjaR139QW7eXx9YM7RiTFmYOp2%2Fj8fOgxTS63IIXdQQrBS35A05TXlWOWiDT8XCRMZcuUilW8lxSSqTEuYpcEHet8gThQklBlf7IHl2SNHCsGL7sVpXJ4oF0A5V&X-Amz-Signature=66d2da0817ce3d02e433d62f8152b49bd37d5ebd55008328df62b78b349944f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

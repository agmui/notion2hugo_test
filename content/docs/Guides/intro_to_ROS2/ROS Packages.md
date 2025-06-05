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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4MGNVU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCFfZ1mMFVDo3K4uJVavV25OsrbDq3XsjBiuWA9SQtXWwIgZ%2FgAJf11eg1gLFC6uusY8lV3qicSz6mxQt%2Fj%2FQsq0E8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDz6bhp7N08qXY9IHCrcA4xZvS4sgVVzfyaXBjp2uATOaCIGmnCekyor2Cx128sW%2BTV8Q7Bjxc1IIZH%2FimBW1E6DA%2FkDsr9y7AZSes%2FUosfa02CqE5LdhJW9K8sdBnW6Ot706Q06CoSFasTDh2KOf6zpVp8Ymk5WgtzvcJx5kawoNeQGXsxMUpRtnGHPziWKrP%2FQhjk8up31%2FhhZm190bTriMh60EaE9oMO3jKK40dNrRalV%2BEGmGMKY12iDkrnKQX9dD73qPhojcOnAG1kdYPO506FjrROI03K0Z%2F%2Bof8oXJcBLcNO1KlaXAvRgG%2FOwgKpC4LwmwJtsXW3s1fQL7Bl1ktM45ljqg31zK0P8DbauOZ5jrtUdai50hu482r1KD0hUVhTpPFQ1APUcF72Xj6SycxVW1KhA58ilOyDj1aCBBAtvCSB9%2FHTkAaGkctovN%2B5Eo17NAWBQ6wjee8fqj9mFKdCH%2Bnmh3E9jiwAn%2FctompCZIUSGlPqFoxnxk8nF7KEO2gR7IImuFEpW5qGzYpDakw%2FG3%2BJJT2TL8deZ3rmpfL%2Bc8vORKAjxIg8pi%2B66HMnMko05EeFc3jDcEz7YysYGzUybY3oeuG%2FKQIYzCAkqLMBKMEYlsZVmomgeuBXDDw4QWcRZKiHQVYl2MP%2BMhsIGOqUB59c%2FyWKOElSzEIl80MgTvwsb9BPFxg6E3r9EU4up7hZpcGIqyBQ0Sss%2BdPaCazbO9F3LJlgnXISdIVfrDPFH%2BZDGr94lRz94H1fVRVf5ivOgsBXaH5MZe6KCwF4uHZs5Ls%2Bu12O4w0DXgaeEwE6LxYMqb1exyPt1FPHIV9qpGK5LfuehvXBYx2Y%2FBrjj5JlAO1p203OkF0NETzP4X6Sn5Vt%2BTOBX&X-Amz-Signature=192baf30278665307c96e13c33115de37413eb561b70c7b9c8e91c11b68b8ccb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4MGNVU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCFfZ1mMFVDo3K4uJVavV25OsrbDq3XsjBiuWA9SQtXWwIgZ%2FgAJf11eg1gLFC6uusY8lV3qicSz6mxQt%2Fj%2FQsq0E8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDz6bhp7N08qXY9IHCrcA4xZvS4sgVVzfyaXBjp2uATOaCIGmnCekyor2Cx128sW%2BTV8Q7Bjxc1IIZH%2FimBW1E6DA%2FkDsr9y7AZSes%2FUosfa02CqE5LdhJW9K8sdBnW6Ot706Q06CoSFasTDh2KOf6zpVp8Ymk5WgtzvcJx5kawoNeQGXsxMUpRtnGHPziWKrP%2FQhjk8up31%2FhhZm190bTriMh60EaE9oMO3jKK40dNrRalV%2BEGmGMKY12iDkrnKQX9dD73qPhojcOnAG1kdYPO506FjrROI03K0Z%2F%2Bof8oXJcBLcNO1KlaXAvRgG%2FOwgKpC4LwmwJtsXW3s1fQL7Bl1ktM45ljqg31zK0P8DbauOZ5jrtUdai50hu482r1KD0hUVhTpPFQ1APUcF72Xj6SycxVW1KhA58ilOyDj1aCBBAtvCSB9%2FHTkAaGkctovN%2B5Eo17NAWBQ6wjee8fqj9mFKdCH%2Bnmh3E9jiwAn%2FctompCZIUSGlPqFoxnxk8nF7KEO2gR7IImuFEpW5qGzYpDakw%2FG3%2BJJT2TL8deZ3rmpfL%2Bc8vORKAjxIg8pi%2B66HMnMko05EeFc3jDcEz7YysYGzUybY3oeuG%2FKQIYzCAkqLMBKMEYlsZVmomgeuBXDDw4QWcRZKiHQVYl2MP%2BMhsIGOqUB59c%2FyWKOElSzEIl80MgTvwsb9BPFxg6E3r9EU4up7hZpcGIqyBQ0Sss%2BdPaCazbO9F3LJlgnXISdIVfrDPFH%2BZDGr94lRz94H1fVRVf5ivOgsBXaH5MZe6KCwF4uHZs5Ls%2Bu12O4w0DXgaeEwE6LxYMqb1exyPt1FPHIV9qpGK5LfuehvXBYx2Y%2FBrjj5JlAO1p203OkF0NETzP4X6Sn5Vt%2BTOBX&X-Amz-Signature=1f6e3fd714c6dc1c6e16d17b8c0faeb06b7c97f97a175c143a6a7a354a1a6312&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4MGNVU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCFfZ1mMFVDo3K4uJVavV25OsrbDq3XsjBiuWA9SQtXWwIgZ%2FgAJf11eg1gLFC6uusY8lV3qicSz6mxQt%2Fj%2FQsq0E8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDz6bhp7N08qXY9IHCrcA4xZvS4sgVVzfyaXBjp2uATOaCIGmnCekyor2Cx128sW%2BTV8Q7Bjxc1IIZH%2FimBW1E6DA%2FkDsr9y7AZSes%2FUosfa02CqE5LdhJW9K8sdBnW6Ot706Q06CoSFasTDh2KOf6zpVp8Ymk5WgtzvcJx5kawoNeQGXsxMUpRtnGHPziWKrP%2FQhjk8up31%2FhhZm190bTriMh60EaE9oMO3jKK40dNrRalV%2BEGmGMKY12iDkrnKQX9dD73qPhojcOnAG1kdYPO506FjrROI03K0Z%2F%2Bof8oXJcBLcNO1KlaXAvRgG%2FOwgKpC4LwmwJtsXW3s1fQL7Bl1ktM45ljqg31zK0P8DbauOZ5jrtUdai50hu482r1KD0hUVhTpPFQ1APUcF72Xj6SycxVW1KhA58ilOyDj1aCBBAtvCSB9%2FHTkAaGkctovN%2B5Eo17NAWBQ6wjee8fqj9mFKdCH%2Bnmh3E9jiwAn%2FctompCZIUSGlPqFoxnxk8nF7KEO2gR7IImuFEpW5qGzYpDakw%2FG3%2BJJT2TL8deZ3rmpfL%2Bc8vORKAjxIg8pi%2B66HMnMko05EeFc3jDcEz7YysYGzUybY3oeuG%2FKQIYzCAkqLMBKMEYlsZVmomgeuBXDDw4QWcRZKiHQVYl2MP%2BMhsIGOqUB59c%2FyWKOElSzEIl80MgTvwsb9BPFxg6E3r9EU4up7hZpcGIqyBQ0Sss%2BdPaCazbO9F3LJlgnXISdIVfrDPFH%2BZDGr94lRz94H1fVRVf5ivOgsBXaH5MZe6KCwF4uHZs5Ls%2Bu12O4w0DXgaeEwE6LxYMqb1exyPt1FPHIV9qpGK5LfuehvXBYx2Y%2FBrjj5JlAO1p203OkF0NETzP4X6Sn5Vt%2BTOBX&X-Amz-Signature=6c09328a19a385fac63a76de4ffc3d689bfdf63c8142c39962e1c74b36d0352b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4MGNVU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCFfZ1mMFVDo3K4uJVavV25OsrbDq3XsjBiuWA9SQtXWwIgZ%2FgAJf11eg1gLFC6uusY8lV3qicSz6mxQt%2Fj%2FQsq0E8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDz6bhp7N08qXY9IHCrcA4xZvS4sgVVzfyaXBjp2uATOaCIGmnCekyor2Cx128sW%2BTV8Q7Bjxc1IIZH%2FimBW1E6DA%2FkDsr9y7AZSes%2FUosfa02CqE5LdhJW9K8sdBnW6Ot706Q06CoSFasTDh2KOf6zpVp8Ymk5WgtzvcJx5kawoNeQGXsxMUpRtnGHPziWKrP%2FQhjk8up31%2FhhZm190bTriMh60EaE9oMO3jKK40dNrRalV%2BEGmGMKY12iDkrnKQX9dD73qPhojcOnAG1kdYPO506FjrROI03K0Z%2F%2Bof8oXJcBLcNO1KlaXAvRgG%2FOwgKpC4LwmwJtsXW3s1fQL7Bl1ktM45ljqg31zK0P8DbauOZ5jrtUdai50hu482r1KD0hUVhTpPFQ1APUcF72Xj6SycxVW1KhA58ilOyDj1aCBBAtvCSB9%2FHTkAaGkctovN%2B5Eo17NAWBQ6wjee8fqj9mFKdCH%2Bnmh3E9jiwAn%2FctompCZIUSGlPqFoxnxk8nF7KEO2gR7IImuFEpW5qGzYpDakw%2FG3%2BJJT2TL8deZ3rmpfL%2Bc8vORKAjxIg8pi%2B66HMnMko05EeFc3jDcEz7YysYGzUybY3oeuG%2FKQIYzCAkqLMBKMEYlsZVmomgeuBXDDw4QWcRZKiHQVYl2MP%2BMhsIGOqUB59c%2FyWKOElSzEIl80MgTvwsb9BPFxg6E3r9EU4up7hZpcGIqyBQ0Sss%2BdPaCazbO9F3LJlgnXISdIVfrDPFH%2BZDGr94lRz94H1fVRVf5ivOgsBXaH5MZe6KCwF4uHZs5Ls%2Bu12O4w0DXgaeEwE6LxYMqb1exyPt1FPHIV9qpGK5LfuehvXBYx2Y%2FBrjj5JlAO1p203OkF0NETzP4X6Sn5Vt%2BTOBX&X-Amz-Signature=9c268bae6d9f4103c4670f699f37757df96454655de99e728cbc262f1b16f5de&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4MGNVU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCFfZ1mMFVDo3K4uJVavV25OsrbDq3XsjBiuWA9SQtXWwIgZ%2FgAJf11eg1gLFC6uusY8lV3qicSz6mxQt%2Fj%2FQsq0E8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDz6bhp7N08qXY9IHCrcA4xZvS4sgVVzfyaXBjp2uATOaCIGmnCekyor2Cx128sW%2BTV8Q7Bjxc1IIZH%2FimBW1E6DA%2FkDsr9y7AZSes%2FUosfa02CqE5LdhJW9K8sdBnW6Ot706Q06CoSFasTDh2KOf6zpVp8Ymk5WgtzvcJx5kawoNeQGXsxMUpRtnGHPziWKrP%2FQhjk8up31%2FhhZm190bTriMh60EaE9oMO3jKK40dNrRalV%2BEGmGMKY12iDkrnKQX9dD73qPhojcOnAG1kdYPO506FjrROI03K0Z%2F%2Bof8oXJcBLcNO1KlaXAvRgG%2FOwgKpC4LwmwJtsXW3s1fQL7Bl1ktM45ljqg31zK0P8DbauOZ5jrtUdai50hu482r1KD0hUVhTpPFQ1APUcF72Xj6SycxVW1KhA58ilOyDj1aCBBAtvCSB9%2FHTkAaGkctovN%2B5Eo17NAWBQ6wjee8fqj9mFKdCH%2Bnmh3E9jiwAn%2FctompCZIUSGlPqFoxnxk8nF7KEO2gR7IImuFEpW5qGzYpDakw%2FG3%2BJJT2TL8deZ3rmpfL%2Bc8vORKAjxIg8pi%2B66HMnMko05EeFc3jDcEz7YysYGzUybY3oeuG%2FKQIYzCAkqLMBKMEYlsZVmomgeuBXDDw4QWcRZKiHQVYl2MP%2BMhsIGOqUB59c%2FyWKOElSzEIl80MgTvwsb9BPFxg6E3r9EU4up7hZpcGIqyBQ0Sss%2BdPaCazbO9F3LJlgnXISdIVfrDPFH%2BZDGr94lRz94H1fVRVf5ivOgsBXaH5MZe6KCwF4uHZs5Ls%2Bu12O4w0DXgaeEwE6LxYMqb1exyPt1FPHIV9qpGK5LfuehvXBYx2Y%2FBrjj5JlAO1p203OkF0NETzP4X6Sn5Vt%2BTOBX&X-Amz-Signature=c1422330a3b90d07a032d13783d167a9ed84944150dc3f607d75320b2cfb84ad&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4MGNVU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCFfZ1mMFVDo3K4uJVavV25OsrbDq3XsjBiuWA9SQtXWwIgZ%2FgAJf11eg1gLFC6uusY8lV3qicSz6mxQt%2Fj%2FQsq0E8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDz6bhp7N08qXY9IHCrcA4xZvS4sgVVzfyaXBjp2uATOaCIGmnCekyor2Cx128sW%2BTV8Q7Bjxc1IIZH%2FimBW1E6DA%2FkDsr9y7AZSes%2FUosfa02CqE5LdhJW9K8sdBnW6Ot706Q06CoSFasTDh2KOf6zpVp8Ymk5WgtzvcJx5kawoNeQGXsxMUpRtnGHPziWKrP%2FQhjk8up31%2FhhZm190bTriMh60EaE9oMO3jKK40dNrRalV%2BEGmGMKY12iDkrnKQX9dD73qPhojcOnAG1kdYPO506FjrROI03K0Z%2F%2Bof8oXJcBLcNO1KlaXAvRgG%2FOwgKpC4LwmwJtsXW3s1fQL7Bl1ktM45ljqg31zK0P8DbauOZ5jrtUdai50hu482r1KD0hUVhTpPFQ1APUcF72Xj6SycxVW1KhA58ilOyDj1aCBBAtvCSB9%2FHTkAaGkctovN%2B5Eo17NAWBQ6wjee8fqj9mFKdCH%2Bnmh3E9jiwAn%2FctompCZIUSGlPqFoxnxk8nF7KEO2gR7IImuFEpW5qGzYpDakw%2FG3%2BJJT2TL8deZ3rmpfL%2Bc8vORKAjxIg8pi%2B66HMnMko05EeFc3jDcEz7YysYGzUybY3oeuG%2FKQIYzCAkqLMBKMEYlsZVmomgeuBXDDw4QWcRZKiHQVYl2MP%2BMhsIGOqUB59c%2FyWKOElSzEIl80MgTvwsb9BPFxg6E3r9EU4up7hZpcGIqyBQ0Sss%2BdPaCazbO9F3LJlgnXISdIVfrDPFH%2BZDGr94lRz94H1fVRVf5ivOgsBXaH5MZe6KCwF4uHZs5Ls%2Bu12O4w0DXgaeEwE6LxYMqb1exyPt1FPHIV9qpGK5LfuehvXBYx2Y%2FBrjj5JlAO1p203OkF0NETzP4X6Sn5Vt%2BTOBX&X-Amz-Signature=c3792c9a86880f8f5c6a2fc072313cc9e5f7c5b1e45f9a6db89f0c931360b4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4MGNVU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCFfZ1mMFVDo3K4uJVavV25OsrbDq3XsjBiuWA9SQtXWwIgZ%2FgAJf11eg1gLFC6uusY8lV3qicSz6mxQt%2Fj%2FQsq0E8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDz6bhp7N08qXY9IHCrcA4xZvS4sgVVzfyaXBjp2uATOaCIGmnCekyor2Cx128sW%2BTV8Q7Bjxc1IIZH%2FimBW1E6DA%2FkDsr9y7AZSes%2FUosfa02CqE5LdhJW9K8sdBnW6Ot706Q06CoSFasTDh2KOf6zpVp8Ymk5WgtzvcJx5kawoNeQGXsxMUpRtnGHPziWKrP%2FQhjk8up31%2FhhZm190bTriMh60EaE9oMO3jKK40dNrRalV%2BEGmGMKY12iDkrnKQX9dD73qPhojcOnAG1kdYPO506FjrROI03K0Z%2F%2Bof8oXJcBLcNO1KlaXAvRgG%2FOwgKpC4LwmwJtsXW3s1fQL7Bl1ktM45ljqg31zK0P8DbauOZ5jrtUdai50hu482r1KD0hUVhTpPFQ1APUcF72Xj6SycxVW1KhA58ilOyDj1aCBBAtvCSB9%2FHTkAaGkctovN%2B5Eo17NAWBQ6wjee8fqj9mFKdCH%2Bnmh3E9jiwAn%2FctompCZIUSGlPqFoxnxk8nF7KEO2gR7IImuFEpW5qGzYpDakw%2FG3%2BJJT2TL8deZ3rmpfL%2Bc8vORKAjxIg8pi%2B66HMnMko05EeFc3jDcEz7YysYGzUybY3oeuG%2FKQIYzCAkqLMBKMEYlsZVmomgeuBXDDw4QWcRZKiHQVYl2MP%2BMhsIGOqUB59c%2FyWKOElSzEIl80MgTvwsb9BPFxg6E3r9EU4up7hZpcGIqyBQ0Sss%2BdPaCazbO9F3LJlgnXISdIVfrDPFH%2BZDGr94lRz94H1fVRVf5ivOgsBXaH5MZe6KCwF4uHZs5Ls%2Bu12O4w0DXgaeEwE6LxYMqb1exyPt1FPHIV9qpGK5LfuehvXBYx2Y%2FBrjj5JlAO1p203OkF0NETzP4X6Sn5Vt%2BTOBX&X-Amz-Signature=7ee37ceeead85a5789b640815887446fc49489d95c4601ee988b1d64419ca010&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

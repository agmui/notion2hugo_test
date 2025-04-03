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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSBKGNH2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFlnveOLxd9T%2F15HGk5l2SbTixqaZxG8lovcNie2NlqwIhALVTFg8D7WXJVMIj%2FblRSdM3gyBN0NmClpoQb9IVhjz4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhfV3BEWwUWiv1Dzoq3AOvhrf2UXzNYN9m%2B71MTKP8j1JzdGPMCcpYmp9Nz4rCNYkG7PglwobrBIzKV1di3M%2FAYpJ2iZ4cu5ioz1Pf3GWz%2BQnVStmMfFdQqUKJf4qy9AIvHFjcGHPyGWm6T2o1JpOyOR4EKsh%2BYIE87VnCaejj2qPl%2BBGCEwF%2FMsezLBwOYu%2FbVSWRFFQrekJab0CznX2lYPwLzvBQ%2BaWYQ6n3u1X2FBEmiLxbUzNZN5xSCHtP%2FCR4iHlkvD28FNTLJ2%2F%2F%2B6dXWry0eiLBI%2FX5gd4s9yDAOoc43yGoi%2F4dSEln4Z%2B7vkwoj%2B5lUaVo1tBeMvxFVygYmldUEkPXwjcxcXYeGbnC42KMPjJniOIkxphuYzAlXedrtgSNgqFgJ23vo%2B4jyqbSSsMbNq0dtDudqz0ZLOO98ISUXTxi2NMmh8heVdxCTCZMpuZlGXa5FyDZh9F0E%2FkXbaGpMWnceXiHBI0UpscqWON4TqAneBAvji%2Bu%2BtaI3KAyh06lGxCQ6u3OFo9gTuPLeoYPJlZENGL%2Bfx0ISn11NN6ScUimsmpH9hj72xk6gmstWujHyBs5fUTzc0LeBmaacqftEJrvH63PTTHzBGpFz7VKQXJ%2BODGgFuTr3Oue1SrNskugArZxbXfiIDC4y7m%2FBjqkAUNIlgc3WiueN%2FnZgK%2BnY5agk27u%2BG9OVBCnXyAXbcLaD5HxqxmRPfB1C%2B0OowbtSpFpL2VWklvJ22xoc9TaZnQJR3riMpmVCzP627KegGMJLEUVYNJj02bzuV%2F9f4YeD3RPL8UovVSMgT1Vw83yILcypmLTHf09qz4Nl4cN9btrCMAxqxGM8JkT0LQvwBi0qz9jSKo785yNl0HvhBjh8ms1Kqp0&X-Amz-Signature=b14b233826f3f4908e8d1b87f8f0cf46bbccb16f9412e29c6797e5398ad4bd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSBKGNH2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFlnveOLxd9T%2F15HGk5l2SbTixqaZxG8lovcNie2NlqwIhALVTFg8D7WXJVMIj%2FblRSdM3gyBN0NmClpoQb9IVhjz4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhfV3BEWwUWiv1Dzoq3AOvhrf2UXzNYN9m%2B71MTKP8j1JzdGPMCcpYmp9Nz4rCNYkG7PglwobrBIzKV1di3M%2FAYpJ2iZ4cu5ioz1Pf3GWz%2BQnVStmMfFdQqUKJf4qy9AIvHFjcGHPyGWm6T2o1JpOyOR4EKsh%2BYIE87VnCaejj2qPl%2BBGCEwF%2FMsezLBwOYu%2FbVSWRFFQrekJab0CznX2lYPwLzvBQ%2BaWYQ6n3u1X2FBEmiLxbUzNZN5xSCHtP%2FCR4iHlkvD28FNTLJ2%2F%2F%2B6dXWry0eiLBI%2FX5gd4s9yDAOoc43yGoi%2F4dSEln4Z%2B7vkwoj%2B5lUaVo1tBeMvxFVygYmldUEkPXwjcxcXYeGbnC42KMPjJniOIkxphuYzAlXedrtgSNgqFgJ23vo%2B4jyqbSSsMbNq0dtDudqz0ZLOO98ISUXTxi2NMmh8heVdxCTCZMpuZlGXa5FyDZh9F0E%2FkXbaGpMWnceXiHBI0UpscqWON4TqAneBAvji%2Bu%2BtaI3KAyh06lGxCQ6u3OFo9gTuPLeoYPJlZENGL%2Bfx0ISn11NN6ScUimsmpH9hj72xk6gmstWujHyBs5fUTzc0LeBmaacqftEJrvH63PTTHzBGpFz7VKQXJ%2BODGgFuTr3Oue1SrNskugArZxbXfiIDC4y7m%2FBjqkAUNIlgc3WiueN%2FnZgK%2BnY5agk27u%2BG9OVBCnXyAXbcLaD5HxqxmRPfB1C%2B0OowbtSpFpL2VWklvJ22xoc9TaZnQJR3riMpmVCzP627KegGMJLEUVYNJj02bzuV%2F9f4YeD3RPL8UovVSMgT1Vw83yILcypmLTHf09qz4Nl4cN9btrCMAxqxGM8JkT0LQvwBi0qz9jSKo785yNl0HvhBjh8ms1Kqp0&X-Amz-Signature=d115dd94ad90a654d5876b7d7ffdb8d1bf6c814d492dd708ff16fa68bc532607&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSBKGNH2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFlnveOLxd9T%2F15HGk5l2SbTixqaZxG8lovcNie2NlqwIhALVTFg8D7WXJVMIj%2FblRSdM3gyBN0NmClpoQb9IVhjz4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhfV3BEWwUWiv1Dzoq3AOvhrf2UXzNYN9m%2B71MTKP8j1JzdGPMCcpYmp9Nz4rCNYkG7PglwobrBIzKV1di3M%2FAYpJ2iZ4cu5ioz1Pf3GWz%2BQnVStmMfFdQqUKJf4qy9AIvHFjcGHPyGWm6T2o1JpOyOR4EKsh%2BYIE87VnCaejj2qPl%2BBGCEwF%2FMsezLBwOYu%2FbVSWRFFQrekJab0CznX2lYPwLzvBQ%2BaWYQ6n3u1X2FBEmiLxbUzNZN5xSCHtP%2FCR4iHlkvD28FNTLJ2%2F%2F%2B6dXWry0eiLBI%2FX5gd4s9yDAOoc43yGoi%2F4dSEln4Z%2B7vkwoj%2B5lUaVo1tBeMvxFVygYmldUEkPXwjcxcXYeGbnC42KMPjJniOIkxphuYzAlXedrtgSNgqFgJ23vo%2B4jyqbSSsMbNq0dtDudqz0ZLOO98ISUXTxi2NMmh8heVdxCTCZMpuZlGXa5FyDZh9F0E%2FkXbaGpMWnceXiHBI0UpscqWON4TqAneBAvji%2Bu%2BtaI3KAyh06lGxCQ6u3OFo9gTuPLeoYPJlZENGL%2Bfx0ISn11NN6ScUimsmpH9hj72xk6gmstWujHyBs5fUTzc0LeBmaacqftEJrvH63PTTHzBGpFz7VKQXJ%2BODGgFuTr3Oue1SrNskugArZxbXfiIDC4y7m%2FBjqkAUNIlgc3WiueN%2FnZgK%2BnY5agk27u%2BG9OVBCnXyAXbcLaD5HxqxmRPfB1C%2B0OowbtSpFpL2VWklvJ22xoc9TaZnQJR3riMpmVCzP627KegGMJLEUVYNJj02bzuV%2F9f4YeD3RPL8UovVSMgT1Vw83yILcypmLTHf09qz4Nl4cN9btrCMAxqxGM8JkT0LQvwBi0qz9jSKo785yNl0HvhBjh8ms1Kqp0&X-Amz-Signature=ed476840f785b982f8e8b6bf76dfa7aa6e723f18187c8d86045b549f25d07e59&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSBKGNH2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFlnveOLxd9T%2F15HGk5l2SbTixqaZxG8lovcNie2NlqwIhALVTFg8D7WXJVMIj%2FblRSdM3gyBN0NmClpoQb9IVhjz4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhfV3BEWwUWiv1Dzoq3AOvhrf2UXzNYN9m%2B71MTKP8j1JzdGPMCcpYmp9Nz4rCNYkG7PglwobrBIzKV1di3M%2FAYpJ2iZ4cu5ioz1Pf3GWz%2BQnVStmMfFdQqUKJf4qy9AIvHFjcGHPyGWm6T2o1JpOyOR4EKsh%2BYIE87VnCaejj2qPl%2BBGCEwF%2FMsezLBwOYu%2FbVSWRFFQrekJab0CznX2lYPwLzvBQ%2BaWYQ6n3u1X2FBEmiLxbUzNZN5xSCHtP%2FCR4iHlkvD28FNTLJ2%2F%2F%2B6dXWry0eiLBI%2FX5gd4s9yDAOoc43yGoi%2F4dSEln4Z%2B7vkwoj%2B5lUaVo1tBeMvxFVygYmldUEkPXwjcxcXYeGbnC42KMPjJniOIkxphuYzAlXedrtgSNgqFgJ23vo%2B4jyqbSSsMbNq0dtDudqz0ZLOO98ISUXTxi2NMmh8heVdxCTCZMpuZlGXa5FyDZh9F0E%2FkXbaGpMWnceXiHBI0UpscqWON4TqAneBAvji%2Bu%2BtaI3KAyh06lGxCQ6u3OFo9gTuPLeoYPJlZENGL%2Bfx0ISn11NN6ScUimsmpH9hj72xk6gmstWujHyBs5fUTzc0LeBmaacqftEJrvH63PTTHzBGpFz7VKQXJ%2BODGgFuTr3Oue1SrNskugArZxbXfiIDC4y7m%2FBjqkAUNIlgc3WiueN%2FnZgK%2BnY5agk27u%2BG9OVBCnXyAXbcLaD5HxqxmRPfB1C%2B0OowbtSpFpL2VWklvJ22xoc9TaZnQJR3riMpmVCzP627KegGMJLEUVYNJj02bzuV%2F9f4YeD3RPL8UovVSMgT1Vw83yILcypmLTHf09qz4Nl4cN9btrCMAxqxGM8JkT0LQvwBi0qz9jSKo785yNl0HvhBjh8ms1Kqp0&X-Amz-Signature=cc2d4ea778dbe469ae303e18a746485978facd3939871d186c0aac6806be3f11&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSBKGNH2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFlnveOLxd9T%2F15HGk5l2SbTixqaZxG8lovcNie2NlqwIhALVTFg8D7WXJVMIj%2FblRSdM3gyBN0NmClpoQb9IVhjz4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhfV3BEWwUWiv1Dzoq3AOvhrf2UXzNYN9m%2B71MTKP8j1JzdGPMCcpYmp9Nz4rCNYkG7PglwobrBIzKV1di3M%2FAYpJ2iZ4cu5ioz1Pf3GWz%2BQnVStmMfFdQqUKJf4qy9AIvHFjcGHPyGWm6T2o1JpOyOR4EKsh%2BYIE87VnCaejj2qPl%2BBGCEwF%2FMsezLBwOYu%2FbVSWRFFQrekJab0CznX2lYPwLzvBQ%2BaWYQ6n3u1X2FBEmiLxbUzNZN5xSCHtP%2FCR4iHlkvD28FNTLJ2%2F%2F%2B6dXWry0eiLBI%2FX5gd4s9yDAOoc43yGoi%2F4dSEln4Z%2B7vkwoj%2B5lUaVo1tBeMvxFVygYmldUEkPXwjcxcXYeGbnC42KMPjJniOIkxphuYzAlXedrtgSNgqFgJ23vo%2B4jyqbSSsMbNq0dtDudqz0ZLOO98ISUXTxi2NMmh8heVdxCTCZMpuZlGXa5FyDZh9F0E%2FkXbaGpMWnceXiHBI0UpscqWON4TqAneBAvji%2Bu%2BtaI3KAyh06lGxCQ6u3OFo9gTuPLeoYPJlZENGL%2Bfx0ISn11NN6ScUimsmpH9hj72xk6gmstWujHyBs5fUTzc0LeBmaacqftEJrvH63PTTHzBGpFz7VKQXJ%2BODGgFuTr3Oue1SrNskugArZxbXfiIDC4y7m%2FBjqkAUNIlgc3WiueN%2FnZgK%2BnY5agk27u%2BG9OVBCnXyAXbcLaD5HxqxmRPfB1C%2B0OowbtSpFpL2VWklvJ22xoc9TaZnQJR3riMpmVCzP627KegGMJLEUVYNJj02bzuV%2F9f4YeD3RPL8UovVSMgT1Vw83yILcypmLTHf09qz4Nl4cN9btrCMAxqxGM8JkT0LQvwBi0qz9jSKo785yNl0HvhBjh8ms1Kqp0&X-Amz-Signature=c9ef588d7ba499cdbcc6e2ef8d61b5bee357db706b159d1bd576655f38afb997&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSBKGNH2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFlnveOLxd9T%2F15HGk5l2SbTixqaZxG8lovcNie2NlqwIhALVTFg8D7WXJVMIj%2FblRSdM3gyBN0NmClpoQb9IVhjz4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhfV3BEWwUWiv1Dzoq3AOvhrf2UXzNYN9m%2B71MTKP8j1JzdGPMCcpYmp9Nz4rCNYkG7PglwobrBIzKV1di3M%2FAYpJ2iZ4cu5ioz1Pf3GWz%2BQnVStmMfFdQqUKJf4qy9AIvHFjcGHPyGWm6T2o1JpOyOR4EKsh%2BYIE87VnCaejj2qPl%2BBGCEwF%2FMsezLBwOYu%2FbVSWRFFQrekJab0CznX2lYPwLzvBQ%2BaWYQ6n3u1X2FBEmiLxbUzNZN5xSCHtP%2FCR4iHlkvD28FNTLJ2%2F%2F%2B6dXWry0eiLBI%2FX5gd4s9yDAOoc43yGoi%2F4dSEln4Z%2B7vkwoj%2B5lUaVo1tBeMvxFVygYmldUEkPXwjcxcXYeGbnC42KMPjJniOIkxphuYzAlXedrtgSNgqFgJ23vo%2B4jyqbSSsMbNq0dtDudqz0ZLOO98ISUXTxi2NMmh8heVdxCTCZMpuZlGXa5FyDZh9F0E%2FkXbaGpMWnceXiHBI0UpscqWON4TqAneBAvji%2Bu%2BtaI3KAyh06lGxCQ6u3OFo9gTuPLeoYPJlZENGL%2Bfx0ISn11NN6ScUimsmpH9hj72xk6gmstWujHyBs5fUTzc0LeBmaacqftEJrvH63PTTHzBGpFz7VKQXJ%2BODGgFuTr3Oue1SrNskugArZxbXfiIDC4y7m%2FBjqkAUNIlgc3WiueN%2FnZgK%2BnY5agk27u%2BG9OVBCnXyAXbcLaD5HxqxmRPfB1C%2B0OowbtSpFpL2VWklvJ22xoc9TaZnQJR3riMpmVCzP627KegGMJLEUVYNJj02bzuV%2F9f4YeD3RPL8UovVSMgT1Vw83yILcypmLTHf09qz4Nl4cN9btrCMAxqxGM8JkT0LQvwBi0qz9jSKo785yNl0HvhBjh8ms1Kqp0&X-Amz-Signature=09ce9a982eb4011d6a27a49ee4a67aed3cb8d183ba828d5377124dede6b891b6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSBKGNH2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFlnveOLxd9T%2F15HGk5l2SbTixqaZxG8lovcNie2NlqwIhALVTFg8D7WXJVMIj%2FblRSdM3gyBN0NmClpoQb9IVhjz4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhfV3BEWwUWiv1Dzoq3AOvhrf2UXzNYN9m%2B71MTKP8j1JzdGPMCcpYmp9Nz4rCNYkG7PglwobrBIzKV1di3M%2FAYpJ2iZ4cu5ioz1Pf3GWz%2BQnVStmMfFdQqUKJf4qy9AIvHFjcGHPyGWm6T2o1JpOyOR4EKsh%2BYIE87VnCaejj2qPl%2BBGCEwF%2FMsezLBwOYu%2FbVSWRFFQrekJab0CznX2lYPwLzvBQ%2BaWYQ6n3u1X2FBEmiLxbUzNZN5xSCHtP%2FCR4iHlkvD28FNTLJ2%2F%2F%2B6dXWry0eiLBI%2FX5gd4s9yDAOoc43yGoi%2F4dSEln4Z%2B7vkwoj%2B5lUaVo1tBeMvxFVygYmldUEkPXwjcxcXYeGbnC42KMPjJniOIkxphuYzAlXedrtgSNgqFgJ23vo%2B4jyqbSSsMbNq0dtDudqz0ZLOO98ISUXTxi2NMmh8heVdxCTCZMpuZlGXa5FyDZh9F0E%2FkXbaGpMWnceXiHBI0UpscqWON4TqAneBAvji%2Bu%2BtaI3KAyh06lGxCQ6u3OFo9gTuPLeoYPJlZENGL%2Bfx0ISn11NN6ScUimsmpH9hj72xk6gmstWujHyBs5fUTzc0LeBmaacqftEJrvH63PTTHzBGpFz7VKQXJ%2BODGgFuTr3Oue1SrNskugArZxbXfiIDC4y7m%2FBjqkAUNIlgc3WiueN%2FnZgK%2BnY5agk27u%2BG9OVBCnXyAXbcLaD5HxqxmRPfB1C%2B0OowbtSpFpL2VWklvJ22xoc9TaZnQJR3riMpmVCzP627KegGMJLEUVYNJj02bzuV%2F9f4YeD3RPL8UovVSMgT1Vw83yILcypmLTHf09qz4Nl4cN9btrCMAxqxGM8JkT0LQvwBi0qz9jSKo785yNl0HvhBjh8ms1Kqp0&X-Amz-Signature=e48f7801b65d31b4f806647b4cd6e13f3e0245dc4a624ca2be1919f407757e77&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

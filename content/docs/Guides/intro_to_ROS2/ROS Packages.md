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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NXG3Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID40%2B8%2BIVmT6BMCaqsrboGiBIPJk3%2Bx30yTZV%2BPqUiGdAiA%2BcsuIcRP5gwSGQMw8DXhey1DObefN6NNWpd1NKwrKvCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA3jpWw2dxsrsv5RKtwDdDUL7g%2FqEkhUrM1FN%2BCmidxNPsX0sDlAjl%2BX3Ix%2Fi8UVz4UyXB3a6Wu8xa3M1pnGrujJKtBX1mR4jEoWgd3he7wg6IfOESbYKorrVMZ8QPSdMGjzMWV7uuaxO8DX7lDKp9ASV383oT1ndPBdhTZzlNO9hXeW6LVP%2BwBnpg5OsfXsHeT6nSS66DppMrEClV1gNvOk%2FXWUgJ7eGIPEC9cAz0msSkMBxvxOQhUOyVkfg4DZuwesFWmSb2v4%2FTc0XnNUZB0LneQnAW%2F9Ku58yzK8pDkmpWv1X7yP2qIsTm%2B7svpIQ8AAE1ssRVw8OzvGG0VMjNsDzQvcQ%2BAdEYfjpfhtOqSi%2BlTLPtYAfzLMLZPdHVnwsFZwOXRSFBomPy4NvICg%2BaXLwK429w8akgmsh4ceDZ6WgnEXjChelqUGLZ%2FyhTmuzFPKxD0NENrkWaBGWXpMZugTBoXpPXMRLZnoPjGTmiO3TX0x0xmPUI%2FS3Z%2FTcHEoHdVgDe%2FB8G7uGZa5XoKpaQjcdA%2FYLFxTt%2FL18ZjXd6fMLEpF0nD5wEoTQr%2FUnq0VzMG02tFnsJ1SFIThH5Or0TQ9lSD2ekWgUHtqANUTjx%2Fip0h3EcouUjRSNo2xO6RxiiDnqI7iw8WKcI8wp6i%2FwwY6pgGNG%2BRducJR4OVI759X%2BJ%2Fc4dFpC4MOEbv6QaE0SjbO%2BILshTTqZCQSMSMzqjp4itMCBDRprzJGK%2BCOwC6cVscf9y8n%2FfS%2BRIagvZn0MzVpWN%2B705jLmreJajmtFXeTAFhb1DQLxWQ8BFgrsOH8vBXnotuPjZFtICDd3T0OR5ZLX9EobGuphQdF0lumeSsMspsX5UZTa0I0Ie4MNNxFLBHQtgxW35zQ&X-Amz-Signature=0a220dacc348ccc6d7bd537550d905e4d2fb5b36df949d5fe02758965295b989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NXG3Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID40%2B8%2BIVmT6BMCaqsrboGiBIPJk3%2Bx30yTZV%2BPqUiGdAiA%2BcsuIcRP5gwSGQMw8DXhey1DObefN6NNWpd1NKwrKvCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA3jpWw2dxsrsv5RKtwDdDUL7g%2FqEkhUrM1FN%2BCmidxNPsX0sDlAjl%2BX3Ix%2Fi8UVz4UyXB3a6Wu8xa3M1pnGrujJKtBX1mR4jEoWgd3he7wg6IfOESbYKorrVMZ8QPSdMGjzMWV7uuaxO8DX7lDKp9ASV383oT1ndPBdhTZzlNO9hXeW6LVP%2BwBnpg5OsfXsHeT6nSS66DppMrEClV1gNvOk%2FXWUgJ7eGIPEC9cAz0msSkMBxvxOQhUOyVkfg4DZuwesFWmSb2v4%2FTc0XnNUZB0LneQnAW%2F9Ku58yzK8pDkmpWv1X7yP2qIsTm%2B7svpIQ8AAE1ssRVw8OzvGG0VMjNsDzQvcQ%2BAdEYfjpfhtOqSi%2BlTLPtYAfzLMLZPdHVnwsFZwOXRSFBomPy4NvICg%2BaXLwK429w8akgmsh4ceDZ6WgnEXjChelqUGLZ%2FyhTmuzFPKxD0NENrkWaBGWXpMZugTBoXpPXMRLZnoPjGTmiO3TX0x0xmPUI%2FS3Z%2FTcHEoHdVgDe%2FB8G7uGZa5XoKpaQjcdA%2FYLFxTt%2FL18ZjXd6fMLEpF0nD5wEoTQr%2FUnq0VzMG02tFnsJ1SFIThH5Or0TQ9lSD2ekWgUHtqANUTjx%2Fip0h3EcouUjRSNo2xO6RxiiDnqI7iw8WKcI8wp6i%2FwwY6pgGNG%2BRducJR4OVI759X%2BJ%2Fc4dFpC4MOEbv6QaE0SjbO%2BILshTTqZCQSMSMzqjp4itMCBDRprzJGK%2BCOwC6cVscf9y8n%2FfS%2BRIagvZn0MzVpWN%2B705jLmreJajmtFXeTAFhb1DQLxWQ8BFgrsOH8vBXnotuPjZFtICDd3T0OR5ZLX9EobGuphQdF0lumeSsMspsX5UZTa0I0Ie4MNNxFLBHQtgxW35zQ&X-Amz-Signature=2b5006d923619c6cb5d33ec1d2714853186b6274fd1b0bc9f7a1863a8a01a04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NXG3Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID40%2B8%2BIVmT6BMCaqsrboGiBIPJk3%2Bx30yTZV%2BPqUiGdAiA%2BcsuIcRP5gwSGQMw8DXhey1DObefN6NNWpd1NKwrKvCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA3jpWw2dxsrsv5RKtwDdDUL7g%2FqEkhUrM1FN%2BCmidxNPsX0sDlAjl%2BX3Ix%2Fi8UVz4UyXB3a6Wu8xa3M1pnGrujJKtBX1mR4jEoWgd3he7wg6IfOESbYKorrVMZ8QPSdMGjzMWV7uuaxO8DX7lDKp9ASV383oT1ndPBdhTZzlNO9hXeW6LVP%2BwBnpg5OsfXsHeT6nSS66DppMrEClV1gNvOk%2FXWUgJ7eGIPEC9cAz0msSkMBxvxOQhUOyVkfg4DZuwesFWmSb2v4%2FTc0XnNUZB0LneQnAW%2F9Ku58yzK8pDkmpWv1X7yP2qIsTm%2B7svpIQ8AAE1ssRVw8OzvGG0VMjNsDzQvcQ%2BAdEYfjpfhtOqSi%2BlTLPtYAfzLMLZPdHVnwsFZwOXRSFBomPy4NvICg%2BaXLwK429w8akgmsh4ceDZ6WgnEXjChelqUGLZ%2FyhTmuzFPKxD0NENrkWaBGWXpMZugTBoXpPXMRLZnoPjGTmiO3TX0x0xmPUI%2FS3Z%2FTcHEoHdVgDe%2FB8G7uGZa5XoKpaQjcdA%2FYLFxTt%2FL18ZjXd6fMLEpF0nD5wEoTQr%2FUnq0VzMG02tFnsJ1SFIThH5Or0TQ9lSD2ekWgUHtqANUTjx%2Fip0h3EcouUjRSNo2xO6RxiiDnqI7iw8WKcI8wp6i%2FwwY6pgGNG%2BRducJR4OVI759X%2BJ%2Fc4dFpC4MOEbv6QaE0SjbO%2BILshTTqZCQSMSMzqjp4itMCBDRprzJGK%2BCOwC6cVscf9y8n%2FfS%2BRIagvZn0MzVpWN%2B705jLmreJajmtFXeTAFhb1DQLxWQ8BFgrsOH8vBXnotuPjZFtICDd3T0OR5ZLX9EobGuphQdF0lumeSsMspsX5UZTa0I0Ie4MNNxFLBHQtgxW35zQ&X-Amz-Signature=b2871bdcc4840a2d15f96fd7f241d4c2d99ff3722c822e82b45676b8f3b1945b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NXG3Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID40%2B8%2BIVmT6BMCaqsrboGiBIPJk3%2Bx30yTZV%2BPqUiGdAiA%2BcsuIcRP5gwSGQMw8DXhey1DObefN6NNWpd1NKwrKvCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA3jpWw2dxsrsv5RKtwDdDUL7g%2FqEkhUrM1FN%2BCmidxNPsX0sDlAjl%2BX3Ix%2Fi8UVz4UyXB3a6Wu8xa3M1pnGrujJKtBX1mR4jEoWgd3he7wg6IfOESbYKorrVMZ8QPSdMGjzMWV7uuaxO8DX7lDKp9ASV383oT1ndPBdhTZzlNO9hXeW6LVP%2BwBnpg5OsfXsHeT6nSS66DppMrEClV1gNvOk%2FXWUgJ7eGIPEC9cAz0msSkMBxvxOQhUOyVkfg4DZuwesFWmSb2v4%2FTc0XnNUZB0LneQnAW%2F9Ku58yzK8pDkmpWv1X7yP2qIsTm%2B7svpIQ8AAE1ssRVw8OzvGG0VMjNsDzQvcQ%2BAdEYfjpfhtOqSi%2BlTLPtYAfzLMLZPdHVnwsFZwOXRSFBomPy4NvICg%2BaXLwK429w8akgmsh4ceDZ6WgnEXjChelqUGLZ%2FyhTmuzFPKxD0NENrkWaBGWXpMZugTBoXpPXMRLZnoPjGTmiO3TX0x0xmPUI%2FS3Z%2FTcHEoHdVgDe%2FB8G7uGZa5XoKpaQjcdA%2FYLFxTt%2FL18ZjXd6fMLEpF0nD5wEoTQr%2FUnq0VzMG02tFnsJ1SFIThH5Or0TQ9lSD2ekWgUHtqANUTjx%2Fip0h3EcouUjRSNo2xO6RxiiDnqI7iw8WKcI8wp6i%2FwwY6pgGNG%2BRducJR4OVI759X%2BJ%2Fc4dFpC4MOEbv6QaE0SjbO%2BILshTTqZCQSMSMzqjp4itMCBDRprzJGK%2BCOwC6cVscf9y8n%2FfS%2BRIagvZn0MzVpWN%2B705jLmreJajmtFXeTAFhb1DQLxWQ8BFgrsOH8vBXnotuPjZFtICDd3T0OR5ZLX9EobGuphQdF0lumeSsMspsX5UZTa0I0Ie4MNNxFLBHQtgxW35zQ&X-Amz-Signature=bf6885a86d200b9e852932b1eb8972a28d44188d494ef1da189647fd1c330fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NXG3Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID40%2B8%2BIVmT6BMCaqsrboGiBIPJk3%2Bx30yTZV%2BPqUiGdAiA%2BcsuIcRP5gwSGQMw8DXhey1DObefN6NNWpd1NKwrKvCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA3jpWw2dxsrsv5RKtwDdDUL7g%2FqEkhUrM1FN%2BCmidxNPsX0sDlAjl%2BX3Ix%2Fi8UVz4UyXB3a6Wu8xa3M1pnGrujJKtBX1mR4jEoWgd3he7wg6IfOESbYKorrVMZ8QPSdMGjzMWV7uuaxO8DX7lDKp9ASV383oT1ndPBdhTZzlNO9hXeW6LVP%2BwBnpg5OsfXsHeT6nSS66DppMrEClV1gNvOk%2FXWUgJ7eGIPEC9cAz0msSkMBxvxOQhUOyVkfg4DZuwesFWmSb2v4%2FTc0XnNUZB0LneQnAW%2F9Ku58yzK8pDkmpWv1X7yP2qIsTm%2B7svpIQ8AAE1ssRVw8OzvGG0VMjNsDzQvcQ%2BAdEYfjpfhtOqSi%2BlTLPtYAfzLMLZPdHVnwsFZwOXRSFBomPy4NvICg%2BaXLwK429w8akgmsh4ceDZ6WgnEXjChelqUGLZ%2FyhTmuzFPKxD0NENrkWaBGWXpMZugTBoXpPXMRLZnoPjGTmiO3TX0x0xmPUI%2FS3Z%2FTcHEoHdVgDe%2FB8G7uGZa5XoKpaQjcdA%2FYLFxTt%2FL18ZjXd6fMLEpF0nD5wEoTQr%2FUnq0VzMG02tFnsJ1SFIThH5Or0TQ9lSD2ekWgUHtqANUTjx%2Fip0h3EcouUjRSNo2xO6RxiiDnqI7iw8WKcI8wp6i%2FwwY6pgGNG%2BRducJR4OVI759X%2BJ%2Fc4dFpC4MOEbv6QaE0SjbO%2BILshTTqZCQSMSMzqjp4itMCBDRprzJGK%2BCOwC6cVscf9y8n%2FfS%2BRIagvZn0MzVpWN%2B705jLmreJajmtFXeTAFhb1DQLxWQ8BFgrsOH8vBXnotuPjZFtICDd3T0OR5ZLX9EobGuphQdF0lumeSsMspsX5UZTa0I0Ie4MNNxFLBHQtgxW35zQ&X-Amz-Signature=f790433075748d81537db298cf719632c068dbfac63820e3e0e1bb18c75f0557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NXG3Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID40%2B8%2BIVmT6BMCaqsrboGiBIPJk3%2Bx30yTZV%2BPqUiGdAiA%2BcsuIcRP5gwSGQMw8DXhey1DObefN6NNWpd1NKwrKvCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA3jpWw2dxsrsv5RKtwDdDUL7g%2FqEkhUrM1FN%2BCmidxNPsX0sDlAjl%2BX3Ix%2Fi8UVz4UyXB3a6Wu8xa3M1pnGrujJKtBX1mR4jEoWgd3he7wg6IfOESbYKorrVMZ8QPSdMGjzMWV7uuaxO8DX7lDKp9ASV383oT1ndPBdhTZzlNO9hXeW6LVP%2BwBnpg5OsfXsHeT6nSS66DppMrEClV1gNvOk%2FXWUgJ7eGIPEC9cAz0msSkMBxvxOQhUOyVkfg4DZuwesFWmSb2v4%2FTc0XnNUZB0LneQnAW%2F9Ku58yzK8pDkmpWv1X7yP2qIsTm%2B7svpIQ8AAE1ssRVw8OzvGG0VMjNsDzQvcQ%2BAdEYfjpfhtOqSi%2BlTLPtYAfzLMLZPdHVnwsFZwOXRSFBomPy4NvICg%2BaXLwK429w8akgmsh4ceDZ6WgnEXjChelqUGLZ%2FyhTmuzFPKxD0NENrkWaBGWXpMZugTBoXpPXMRLZnoPjGTmiO3TX0x0xmPUI%2FS3Z%2FTcHEoHdVgDe%2FB8G7uGZa5XoKpaQjcdA%2FYLFxTt%2FL18ZjXd6fMLEpF0nD5wEoTQr%2FUnq0VzMG02tFnsJ1SFIThH5Or0TQ9lSD2ekWgUHtqANUTjx%2Fip0h3EcouUjRSNo2xO6RxiiDnqI7iw8WKcI8wp6i%2FwwY6pgGNG%2BRducJR4OVI759X%2BJ%2Fc4dFpC4MOEbv6QaE0SjbO%2BILshTTqZCQSMSMzqjp4itMCBDRprzJGK%2BCOwC6cVscf9y8n%2FfS%2BRIagvZn0MzVpWN%2B705jLmreJajmtFXeTAFhb1DQLxWQ8BFgrsOH8vBXnotuPjZFtICDd3T0OR5ZLX9EobGuphQdF0lumeSsMspsX5UZTa0I0Ie4MNNxFLBHQtgxW35zQ&X-Amz-Signature=4cd698341fd02cd50c314f81a9b4af813a21f4a853f1336c15cb1fa9f73be362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NXG3Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID40%2B8%2BIVmT6BMCaqsrboGiBIPJk3%2Bx30yTZV%2BPqUiGdAiA%2BcsuIcRP5gwSGQMw8DXhey1DObefN6NNWpd1NKwrKvCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA3jpWw2dxsrsv5RKtwDdDUL7g%2FqEkhUrM1FN%2BCmidxNPsX0sDlAjl%2BX3Ix%2Fi8UVz4UyXB3a6Wu8xa3M1pnGrujJKtBX1mR4jEoWgd3he7wg6IfOESbYKorrVMZ8QPSdMGjzMWV7uuaxO8DX7lDKp9ASV383oT1ndPBdhTZzlNO9hXeW6LVP%2BwBnpg5OsfXsHeT6nSS66DppMrEClV1gNvOk%2FXWUgJ7eGIPEC9cAz0msSkMBxvxOQhUOyVkfg4DZuwesFWmSb2v4%2FTc0XnNUZB0LneQnAW%2F9Ku58yzK8pDkmpWv1X7yP2qIsTm%2B7svpIQ8AAE1ssRVw8OzvGG0VMjNsDzQvcQ%2BAdEYfjpfhtOqSi%2BlTLPtYAfzLMLZPdHVnwsFZwOXRSFBomPy4NvICg%2BaXLwK429w8akgmsh4ceDZ6WgnEXjChelqUGLZ%2FyhTmuzFPKxD0NENrkWaBGWXpMZugTBoXpPXMRLZnoPjGTmiO3TX0x0xmPUI%2FS3Z%2FTcHEoHdVgDe%2FB8G7uGZa5XoKpaQjcdA%2FYLFxTt%2FL18ZjXd6fMLEpF0nD5wEoTQr%2FUnq0VzMG02tFnsJ1SFIThH5Or0TQ9lSD2ekWgUHtqANUTjx%2Fip0h3EcouUjRSNo2xO6RxiiDnqI7iw8WKcI8wp6i%2FwwY6pgGNG%2BRducJR4OVI759X%2BJ%2Fc4dFpC4MOEbv6QaE0SjbO%2BILshTTqZCQSMSMzqjp4itMCBDRprzJGK%2BCOwC6cVscf9y8n%2FfS%2BRIagvZn0MzVpWN%2B705jLmreJajmtFXeTAFhb1DQLxWQ8BFgrsOH8vBXnotuPjZFtICDd3T0OR5ZLX9EobGuphQdF0lumeSsMspsX5UZTa0I0Ie4MNNxFLBHQtgxW35zQ&X-Amz-Signature=5dccd2dd2f47b388cb94523252a5277696a08e8bba85b0c55085001d1af6b46d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

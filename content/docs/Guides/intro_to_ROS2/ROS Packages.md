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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWEGCPK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvbhwHVe8KOCEW%2Fg3eiUJsctdsgA2OoTYhhkHQGd689gIgUvVAIZiXst%2B75EtuPgartN7ViKPWsSIWhRZZYRtJutsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDi6NALo1zjksEYKyrcA36B0tYtiezTDtembcrMr2%2BhCpPLQEODcKhuHD%2FfBJvPXTVLeOdwUyd1PjyyLut%2FYDaXAOdSzJgPPAVHrHjOYL2FgGmkgLRZ1MlM%2Fsa35FyzE2AT0UEV1tMn7mL%2BfDNcE5IJhuHtbUIwtanKANFL1H9h12e8clAlG8gijzLXcvJpQmrKZMdxtrAUTxDCBgRHr2QfIF4EwuBAEpdC4k14XKtnndlxgiVIFIp3TtJhoihrscWpfIGBO8XVp9qUxAZ13slaNA8KM8U4sysggTNOtaEQa4QkTp8K47xVG43wbeNBzA%2BLBUwYk2jYhTZ1icnHDcXaAHeGtNHwlSQm4L%2FQCXrFPFvo63rqRN%2FMgZoYR8rYc%2Big39huqIk1LMSKl4KaQvmMsFG%2FnHrj2f%2FzCUFPXXZ8reW3ySOfEIoBsQxpdL7kLLitwUCragaqkcKD%2FBHJijfOix6gFyRNBIpsjs3GMKFrVGcswF5IKu%2BRPfpFRS7HWE8yILIs9uGLskfcSF66ZrYIuakPMLUMOU7Lxs9K6ThtiDKcevT198VWBh4GW0M9qIGWiSJ1%2F3sWuVzRfsYa%2Ft6mgpBkNayjMQzZWD9Lkqk39eJ%2B%2FL78K2g%2BdmAmmagWbXWG%2BJ3UlNqV8b%2BJMIrz%2Fr4GOqUBHySmtX1klXU8IpKWj0kSCBjT6FK0pXqAzgFTzT0oyvtwNcRTHgduE7CH%2F5iF0JtKSvBZxbJ9lvBiEbDDKSMNLYugL9JOJqYnmtDvNvOqRPeE0l4%2BQqt0C5d7zFW7ZxjEyvm%2BU4pk9b2f9QmdyPqP43mBJw4NIIynoEFtTvWaMBeg923u2rzRK7gUPhITxgEoL0m419JZIG1n%2BAXDV3YqeFiYW2uG&X-Amz-Signature=d565920e2b5c716ab256707a79414241b04f0ea0371d65157e913fc743a47a49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWEGCPK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvbhwHVe8KOCEW%2Fg3eiUJsctdsgA2OoTYhhkHQGd689gIgUvVAIZiXst%2B75EtuPgartN7ViKPWsSIWhRZZYRtJutsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDi6NALo1zjksEYKyrcA36B0tYtiezTDtembcrMr2%2BhCpPLQEODcKhuHD%2FfBJvPXTVLeOdwUyd1PjyyLut%2FYDaXAOdSzJgPPAVHrHjOYL2FgGmkgLRZ1MlM%2Fsa35FyzE2AT0UEV1tMn7mL%2BfDNcE5IJhuHtbUIwtanKANFL1H9h12e8clAlG8gijzLXcvJpQmrKZMdxtrAUTxDCBgRHr2QfIF4EwuBAEpdC4k14XKtnndlxgiVIFIp3TtJhoihrscWpfIGBO8XVp9qUxAZ13slaNA8KM8U4sysggTNOtaEQa4QkTp8K47xVG43wbeNBzA%2BLBUwYk2jYhTZ1icnHDcXaAHeGtNHwlSQm4L%2FQCXrFPFvo63rqRN%2FMgZoYR8rYc%2Big39huqIk1LMSKl4KaQvmMsFG%2FnHrj2f%2FzCUFPXXZ8reW3ySOfEIoBsQxpdL7kLLitwUCragaqkcKD%2FBHJijfOix6gFyRNBIpsjs3GMKFrVGcswF5IKu%2BRPfpFRS7HWE8yILIs9uGLskfcSF66ZrYIuakPMLUMOU7Lxs9K6ThtiDKcevT198VWBh4GW0M9qIGWiSJ1%2F3sWuVzRfsYa%2Ft6mgpBkNayjMQzZWD9Lkqk39eJ%2B%2FL78K2g%2BdmAmmagWbXWG%2BJ3UlNqV8b%2BJMIrz%2Fr4GOqUBHySmtX1klXU8IpKWj0kSCBjT6FK0pXqAzgFTzT0oyvtwNcRTHgduE7CH%2F5iF0JtKSvBZxbJ9lvBiEbDDKSMNLYugL9JOJqYnmtDvNvOqRPeE0l4%2BQqt0C5d7zFW7ZxjEyvm%2BU4pk9b2f9QmdyPqP43mBJw4NIIynoEFtTvWaMBeg923u2rzRK7gUPhITxgEoL0m419JZIG1n%2BAXDV3YqeFiYW2uG&X-Amz-Signature=8546ad68be0bf8af8f97b9e40ed6c1c5f7379c57bbc44335ff84894dac74877b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWEGCPK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvbhwHVe8KOCEW%2Fg3eiUJsctdsgA2OoTYhhkHQGd689gIgUvVAIZiXst%2B75EtuPgartN7ViKPWsSIWhRZZYRtJutsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDi6NALo1zjksEYKyrcA36B0tYtiezTDtembcrMr2%2BhCpPLQEODcKhuHD%2FfBJvPXTVLeOdwUyd1PjyyLut%2FYDaXAOdSzJgPPAVHrHjOYL2FgGmkgLRZ1MlM%2Fsa35FyzE2AT0UEV1tMn7mL%2BfDNcE5IJhuHtbUIwtanKANFL1H9h12e8clAlG8gijzLXcvJpQmrKZMdxtrAUTxDCBgRHr2QfIF4EwuBAEpdC4k14XKtnndlxgiVIFIp3TtJhoihrscWpfIGBO8XVp9qUxAZ13slaNA8KM8U4sysggTNOtaEQa4QkTp8K47xVG43wbeNBzA%2BLBUwYk2jYhTZ1icnHDcXaAHeGtNHwlSQm4L%2FQCXrFPFvo63rqRN%2FMgZoYR8rYc%2Big39huqIk1LMSKl4KaQvmMsFG%2FnHrj2f%2FzCUFPXXZ8reW3ySOfEIoBsQxpdL7kLLitwUCragaqkcKD%2FBHJijfOix6gFyRNBIpsjs3GMKFrVGcswF5IKu%2BRPfpFRS7HWE8yILIs9uGLskfcSF66ZrYIuakPMLUMOU7Lxs9K6ThtiDKcevT198VWBh4GW0M9qIGWiSJ1%2F3sWuVzRfsYa%2Ft6mgpBkNayjMQzZWD9Lkqk39eJ%2B%2FL78K2g%2BdmAmmagWbXWG%2BJ3UlNqV8b%2BJMIrz%2Fr4GOqUBHySmtX1klXU8IpKWj0kSCBjT6FK0pXqAzgFTzT0oyvtwNcRTHgduE7CH%2F5iF0JtKSvBZxbJ9lvBiEbDDKSMNLYugL9JOJqYnmtDvNvOqRPeE0l4%2BQqt0C5d7zFW7ZxjEyvm%2BU4pk9b2f9QmdyPqP43mBJw4NIIynoEFtTvWaMBeg923u2rzRK7gUPhITxgEoL0m419JZIG1n%2BAXDV3YqeFiYW2uG&X-Amz-Signature=e18330354fc448b3ae642028814375962f04b069ba242b78ab1039cd3598e1f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWEGCPK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvbhwHVe8KOCEW%2Fg3eiUJsctdsgA2OoTYhhkHQGd689gIgUvVAIZiXst%2B75EtuPgartN7ViKPWsSIWhRZZYRtJutsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDi6NALo1zjksEYKyrcA36B0tYtiezTDtembcrMr2%2BhCpPLQEODcKhuHD%2FfBJvPXTVLeOdwUyd1PjyyLut%2FYDaXAOdSzJgPPAVHrHjOYL2FgGmkgLRZ1MlM%2Fsa35FyzE2AT0UEV1tMn7mL%2BfDNcE5IJhuHtbUIwtanKANFL1H9h12e8clAlG8gijzLXcvJpQmrKZMdxtrAUTxDCBgRHr2QfIF4EwuBAEpdC4k14XKtnndlxgiVIFIp3TtJhoihrscWpfIGBO8XVp9qUxAZ13slaNA8KM8U4sysggTNOtaEQa4QkTp8K47xVG43wbeNBzA%2BLBUwYk2jYhTZ1icnHDcXaAHeGtNHwlSQm4L%2FQCXrFPFvo63rqRN%2FMgZoYR8rYc%2Big39huqIk1LMSKl4KaQvmMsFG%2FnHrj2f%2FzCUFPXXZ8reW3ySOfEIoBsQxpdL7kLLitwUCragaqkcKD%2FBHJijfOix6gFyRNBIpsjs3GMKFrVGcswF5IKu%2BRPfpFRS7HWE8yILIs9uGLskfcSF66ZrYIuakPMLUMOU7Lxs9K6ThtiDKcevT198VWBh4GW0M9qIGWiSJ1%2F3sWuVzRfsYa%2Ft6mgpBkNayjMQzZWD9Lkqk39eJ%2B%2FL78K2g%2BdmAmmagWbXWG%2BJ3UlNqV8b%2BJMIrz%2Fr4GOqUBHySmtX1klXU8IpKWj0kSCBjT6FK0pXqAzgFTzT0oyvtwNcRTHgduE7CH%2F5iF0JtKSvBZxbJ9lvBiEbDDKSMNLYugL9JOJqYnmtDvNvOqRPeE0l4%2BQqt0C5d7zFW7ZxjEyvm%2BU4pk9b2f9QmdyPqP43mBJw4NIIynoEFtTvWaMBeg923u2rzRK7gUPhITxgEoL0m419JZIG1n%2BAXDV3YqeFiYW2uG&X-Amz-Signature=f0ed24dcf202ccd458a6c076768f15c37807629698e8acc8e4b660427ce55cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWEGCPK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvbhwHVe8KOCEW%2Fg3eiUJsctdsgA2OoTYhhkHQGd689gIgUvVAIZiXst%2B75EtuPgartN7ViKPWsSIWhRZZYRtJutsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDi6NALo1zjksEYKyrcA36B0tYtiezTDtembcrMr2%2BhCpPLQEODcKhuHD%2FfBJvPXTVLeOdwUyd1PjyyLut%2FYDaXAOdSzJgPPAVHrHjOYL2FgGmkgLRZ1MlM%2Fsa35FyzE2AT0UEV1tMn7mL%2BfDNcE5IJhuHtbUIwtanKANFL1H9h12e8clAlG8gijzLXcvJpQmrKZMdxtrAUTxDCBgRHr2QfIF4EwuBAEpdC4k14XKtnndlxgiVIFIp3TtJhoihrscWpfIGBO8XVp9qUxAZ13slaNA8KM8U4sysggTNOtaEQa4QkTp8K47xVG43wbeNBzA%2BLBUwYk2jYhTZ1icnHDcXaAHeGtNHwlSQm4L%2FQCXrFPFvo63rqRN%2FMgZoYR8rYc%2Big39huqIk1LMSKl4KaQvmMsFG%2FnHrj2f%2FzCUFPXXZ8reW3ySOfEIoBsQxpdL7kLLitwUCragaqkcKD%2FBHJijfOix6gFyRNBIpsjs3GMKFrVGcswF5IKu%2BRPfpFRS7HWE8yILIs9uGLskfcSF66ZrYIuakPMLUMOU7Lxs9K6ThtiDKcevT198VWBh4GW0M9qIGWiSJ1%2F3sWuVzRfsYa%2Ft6mgpBkNayjMQzZWD9Lkqk39eJ%2B%2FL78K2g%2BdmAmmagWbXWG%2BJ3UlNqV8b%2BJMIrz%2Fr4GOqUBHySmtX1klXU8IpKWj0kSCBjT6FK0pXqAzgFTzT0oyvtwNcRTHgduE7CH%2F5iF0JtKSvBZxbJ9lvBiEbDDKSMNLYugL9JOJqYnmtDvNvOqRPeE0l4%2BQqt0C5d7zFW7ZxjEyvm%2BU4pk9b2f9QmdyPqP43mBJw4NIIynoEFtTvWaMBeg923u2rzRK7gUPhITxgEoL0m419JZIG1n%2BAXDV3YqeFiYW2uG&X-Amz-Signature=cd96c4fa0ca5765c97222a8b5404ca3a0db78f77f8d4c23de92c05b56398b208&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWEGCPK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvbhwHVe8KOCEW%2Fg3eiUJsctdsgA2OoTYhhkHQGd689gIgUvVAIZiXst%2B75EtuPgartN7ViKPWsSIWhRZZYRtJutsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDi6NALo1zjksEYKyrcA36B0tYtiezTDtembcrMr2%2BhCpPLQEODcKhuHD%2FfBJvPXTVLeOdwUyd1PjyyLut%2FYDaXAOdSzJgPPAVHrHjOYL2FgGmkgLRZ1MlM%2Fsa35FyzE2AT0UEV1tMn7mL%2BfDNcE5IJhuHtbUIwtanKANFL1H9h12e8clAlG8gijzLXcvJpQmrKZMdxtrAUTxDCBgRHr2QfIF4EwuBAEpdC4k14XKtnndlxgiVIFIp3TtJhoihrscWpfIGBO8XVp9qUxAZ13slaNA8KM8U4sysggTNOtaEQa4QkTp8K47xVG43wbeNBzA%2BLBUwYk2jYhTZ1icnHDcXaAHeGtNHwlSQm4L%2FQCXrFPFvo63rqRN%2FMgZoYR8rYc%2Big39huqIk1LMSKl4KaQvmMsFG%2FnHrj2f%2FzCUFPXXZ8reW3ySOfEIoBsQxpdL7kLLitwUCragaqkcKD%2FBHJijfOix6gFyRNBIpsjs3GMKFrVGcswF5IKu%2BRPfpFRS7HWE8yILIs9uGLskfcSF66ZrYIuakPMLUMOU7Lxs9K6ThtiDKcevT198VWBh4GW0M9qIGWiSJ1%2F3sWuVzRfsYa%2Ft6mgpBkNayjMQzZWD9Lkqk39eJ%2B%2FL78K2g%2BdmAmmagWbXWG%2BJ3UlNqV8b%2BJMIrz%2Fr4GOqUBHySmtX1klXU8IpKWj0kSCBjT6FK0pXqAzgFTzT0oyvtwNcRTHgduE7CH%2F5iF0JtKSvBZxbJ9lvBiEbDDKSMNLYugL9JOJqYnmtDvNvOqRPeE0l4%2BQqt0C5d7zFW7ZxjEyvm%2BU4pk9b2f9QmdyPqP43mBJw4NIIynoEFtTvWaMBeg923u2rzRK7gUPhITxgEoL0m419JZIG1n%2BAXDV3YqeFiYW2uG&X-Amz-Signature=cad6b8a77f2db51476b49cb52267251ed5652256c3686bc0b64a393d8216d398&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWEGCPK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvbhwHVe8KOCEW%2Fg3eiUJsctdsgA2OoTYhhkHQGd689gIgUvVAIZiXst%2B75EtuPgartN7ViKPWsSIWhRZZYRtJutsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDi6NALo1zjksEYKyrcA36B0tYtiezTDtembcrMr2%2BhCpPLQEODcKhuHD%2FfBJvPXTVLeOdwUyd1PjyyLut%2FYDaXAOdSzJgPPAVHrHjOYL2FgGmkgLRZ1MlM%2Fsa35FyzE2AT0UEV1tMn7mL%2BfDNcE5IJhuHtbUIwtanKANFL1H9h12e8clAlG8gijzLXcvJpQmrKZMdxtrAUTxDCBgRHr2QfIF4EwuBAEpdC4k14XKtnndlxgiVIFIp3TtJhoihrscWpfIGBO8XVp9qUxAZ13slaNA8KM8U4sysggTNOtaEQa4QkTp8K47xVG43wbeNBzA%2BLBUwYk2jYhTZ1icnHDcXaAHeGtNHwlSQm4L%2FQCXrFPFvo63rqRN%2FMgZoYR8rYc%2Big39huqIk1LMSKl4KaQvmMsFG%2FnHrj2f%2FzCUFPXXZ8reW3ySOfEIoBsQxpdL7kLLitwUCragaqkcKD%2FBHJijfOix6gFyRNBIpsjs3GMKFrVGcswF5IKu%2BRPfpFRS7HWE8yILIs9uGLskfcSF66ZrYIuakPMLUMOU7Lxs9K6ThtiDKcevT198VWBh4GW0M9qIGWiSJ1%2F3sWuVzRfsYa%2Ft6mgpBkNayjMQzZWD9Lkqk39eJ%2B%2FL78K2g%2BdmAmmagWbXWG%2BJ3UlNqV8b%2BJMIrz%2Fr4GOqUBHySmtX1klXU8IpKWj0kSCBjT6FK0pXqAzgFTzT0oyvtwNcRTHgduE7CH%2F5iF0JtKSvBZxbJ9lvBiEbDDKSMNLYugL9JOJqYnmtDvNvOqRPeE0l4%2BQqt0C5d7zFW7ZxjEyvm%2BU4pk9b2f9QmdyPqP43mBJw4NIIynoEFtTvWaMBeg923u2rzRK7gUPhITxgEoL0m419JZIG1n%2BAXDV3YqeFiYW2uG&X-Amz-Signature=e38cfb290337598c41fe4c0906af741773a4390a51d2036e5f93c182b97dfd5f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

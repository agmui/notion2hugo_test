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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMHHMIO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH9%2FguldJcra7VEsDWpUDANX3B6eeCru%2BfFgaWFPa2PAiEAh%2FP0C7JaiZR%2FJp4Z2e35jx7qUEtL3J1qXyt9D5gZan4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBULGkWZVq85%2BQ%2Fw7SrcAxiNM6mvM4UxCMl5WVDOE2Xfn4jR83Y6qvC6WxYjSDGENK7WGGxONdL2LlQyl27xvHIO9w5l4mb0qN4%2FbcJcbAy6Oou5xeE7tg%2FGiuhbmml68GSZrpp2QRhd0lOTP1qc5TPw0xVDHAZiSrL%2BKUKgI1KSsc7fLM7z%2FrgWjBxHcYB9kax4e6bPvI%2Bw3rl%2FIL4MZIVs%2B7mKgwYvSlk%2FqAFl9OlnQ5ATBJiKKEeBmSeoGgE%2FtVw9CqysPeSG7B%2FfuNihcSMb64qUNkf8Mzio%2BwsVlEJCJLCZ0LKvk%2FFxdMdXZikVna6gAGS3Und7dpZSV5bTOErQzXKsGjUJ3yISXOSLhIHlyz2i09Rh88QG8GYg5nuOLXqMu1kKpnp0PIFzlKf7Keu4adE5x2aU8JBORwgYw9jNHTccMvxEOen0StCAYDRg0kvudIxWFbIXsWWKOAFC9g8PAx%2BfD3IKm4ay0gyINZA%2BaH7ujA%2F10Iix6xz4QnyyiBPdJCPAbAqsALKQwgykBOlf346qIj2eqW%2Bl%2F2gES10GR8RVZD2yO1Qcb5NMGdC96wSnzS9w5SwKqNMrzL7Pl93J%2B%2F7IyBISwu3dHfvBCumH%2FghyPaLJ5wAMsTDhYho42ypELy7xyXWqfcG7MKzF%2BLwGOqUBwrOb2gM5v%2BfbwJOwytQItamNAsnnotE4cC3U0kK%2FmrJEVb8jE4hTFRa4v2yaHuGKSMA41gnDj78oqyTis5eB0HTiGBcm9QzTbthvgIxXaewxGsms5gxOCHCiIUWhShkAMapy%2Fl0gOK%2BKaYpF46furT8DDkCLkfjPOvhnvhguQN409roywYbt4M0qP2CAGZPjKVwio%2B4XKV0iyPfNMwo7cAh%2BFU0q&X-Amz-Signature=27a5adb6feed0dc0cb934a449d47b59172fed74a753f5bc0f2d7906eb4251ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMHHMIO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH9%2FguldJcra7VEsDWpUDANX3B6eeCru%2BfFgaWFPa2PAiEAh%2FP0C7JaiZR%2FJp4Z2e35jx7qUEtL3J1qXyt9D5gZan4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBULGkWZVq85%2BQ%2Fw7SrcAxiNM6mvM4UxCMl5WVDOE2Xfn4jR83Y6qvC6WxYjSDGENK7WGGxONdL2LlQyl27xvHIO9w5l4mb0qN4%2FbcJcbAy6Oou5xeE7tg%2FGiuhbmml68GSZrpp2QRhd0lOTP1qc5TPw0xVDHAZiSrL%2BKUKgI1KSsc7fLM7z%2FrgWjBxHcYB9kax4e6bPvI%2Bw3rl%2FIL4MZIVs%2B7mKgwYvSlk%2FqAFl9OlnQ5ATBJiKKEeBmSeoGgE%2FtVw9CqysPeSG7B%2FfuNihcSMb64qUNkf8Mzio%2BwsVlEJCJLCZ0LKvk%2FFxdMdXZikVna6gAGS3Und7dpZSV5bTOErQzXKsGjUJ3yISXOSLhIHlyz2i09Rh88QG8GYg5nuOLXqMu1kKpnp0PIFzlKf7Keu4adE5x2aU8JBORwgYw9jNHTccMvxEOen0StCAYDRg0kvudIxWFbIXsWWKOAFC9g8PAx%2BfD3IKm4ay0gyINZA%2BaH7ujA%2F10Iix6xz4QnyyiBPdJCPAbAqsALKQwgykBOlf346qIj2eqW%2Bl%2F2gES10GR8RVZD2yO1Qcb5NMGdC96wSnzS9w5SwKqNMrzL7Pl93J%2B%2F7IyBISwu3dHfvBCumH%2FghyPaLJ5wAMsTDhYho42ypELy7xyXWqfcG7MKzF%2BLwGOqUBwrOb2gM5v%2BfbwJOwytQItamNAsnnotE4cC3U0kK%2FmrJEVb8jE4hTFRa4v2yaHuGKSMA41gnDj78oqyTis5eB0HTiGBcm9QzTbthvgIxXaewxGsms5gxOCHCiIUWhShkAMapy%2Fl0gOK%2BKaYpF46furT8DDkCLkfjPOvhnvhguQN409roywYbt4M0qP2CAGZPjKVwio%2B4XKV0iyPfNMwo7cAh%2BFU0q&X-Amz-Signature=39ecebbdaed76bc0a4db42fbbec623eedb1974d37748b6c50125fb5380a04664&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMHHMIO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH9%2FguldJcra7VEsDWpUDANX3B6eeCru%2BfFgaWFPa2PAiEAh%2FP0C7JaiZR%2FJp4Z2e35jx7qUEtL3J1qXyt9D5gZan4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBULGkWZVq85%2BQ%2Fw7SrcAxiNM6mvM4UxCMl5WVDOE2Xfn4jR83Y6qvC6WxYjSDGENK7WGGxONdL2LlQyl27xvHIO9w5l4mb0qN4%2FbcJcbAy6Oou5xeE7tg%2FGiuhbmml68GSZrpp2QRhd0lOTP1qc5TPw0xVDHAZiSrL%2BKUKgI1KSsc7fLM7z%2FrgWjBxHcYB9kax4e6bPvI%2Bw3rl%2FIL4MZIVs%2B7mKgwYvSlk%2FqAFl9OlnQ5ATBJiKKEeBmSeoGgE%2FtVw9CqysPeSG7B%2FfuNihcSMb64qUNkf8Mzio%2BwsVlEJCJLCZ0LKvk%2FFxdMdXZikVna6gAGS3Und7dpZSV5bTOErQzXKsGjUJ3yISXOSLhIHlyz2i09Rh88QG8GYg5nuOLXqMu1kKpnp0PIFzlKf7Keu4adE5x2aU8JBORwgYw9jNHTccMvxEOen0StCAYDRg0kvudIxWFbIXsWWKOAFC9g8PAx%2BfD3IKm4ay0gyINZA%2BaH7ujA%2F10Iix6xz4QnyyiBPdJCPAbAqsALKQwgykBOlf346qIj2eqW%2Bl%2F2gES10GR8RVZD2yO1Qcb5NMGdC96wSnzS9w5SwKqNMrzL7Pl93J%2B%2F7IyBISwu3dHfvBCumH%2FghyPaLJ5wAMsTDhYho42ypELy7xyXWqfcG7MKzF%2BLwGOqUBwrOb2gM5v%2BfbwJOwytQItamNAsnnotE4cC3U0kK%2FmrJEVb8jE4hTFRa4v2yaHuGKSMA41gnDj78oqyTis5eB0HTiGBcm9QzTbthvgIxXaewxGsms5gxOCHCiIUWhShkAMapy%2Fl0gOK%2BKaYpF46furT8DDkCLkfjPOvhnvhguQN409roywYbt4M0qP2CAGZPjKVwio%2B4XKV0iyPfNMwo7cAh%2BFU0q&X-Amz-Signature=d9fc066d8395c1d1c380a97540960b62e838b03dc9d8ff00e9129eabaa144f17&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMHHMIO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH9%2FguldJcra7VEsDWpUDANX3B6eeCru%2BfFgaWFPa2PAiEAh%2FP0C7JaiZR%2FJp4Z2e35jx7qUEtL3J1qXyt9D5gZan4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBULGkWZVq85%2BQ%2Fw7SrcAxiNM6mvM4UxCMl5WVDOE2Xfn4jR83Y6qvC6WxYjSDGENK7WGGxONdL2LlQyl27xvHIO9w5l4mb0qN4%2FbcJcbAy6Oou5xeE7tg%2FGiuhbmml68GSZrpp2QRhd0lOTP1qc5TPw0xVDHAZiSrL%2BKUKgI1KSsc7fLM7z%2FrgWjBxHcYB9kax4e6bPvI%2Bw3rl%2FIL4MZIVs%2B7mKgwYvSlk%2FqAFl9OlnQ5ATBJiKKEeBmSeoGgE%2FtVw9CqysPeSG7B%2FfuNihcSMb64qUNkf8Mzio%2BwsVlEJCJLCZ0LKvk%2FFxdMdXZikVna6gAGS3Und7dpZSV5bTOErQzXKsGjUJ3yISXOSLhIHlyz2i09Rh88QG8GYg5nuOLXqMu1kKpnp0PIFzlKf7Keu4adE5x2aU8JBORwgYw9jNHTccMvxEOen0StCAYDRg0kvudIxWFbIXsWWKOAFC9g8PAx%2BfD3IKm4ay0gyINZA%2BaH7ujA%2F10Iix6xz4QnyyiBPdJCPAbAqsALKQwgykBOlf346qIj2eqW%2Bl%2F2gES10GR8RVZD2yO1Qcb5NMGdC96wSnzS9w5SwKqNMrzL7Pl93J%2B%2F7IyBISwu3dHfvBCumH%2FghyPaLJ5wAMsTDhYho42ypELy7xyXWqfcG7MKzF%2BLwGOqUBwrOb2gM5v%2BfbwJOwytQItamNAsnnotE4cC3U0kK%2FmrJEVb8jE4hTFRa4v2yaHuGKSMA41gnDj78oqyTis5eB0HTiGBcm9QzTbthvgIxXaewxGsms5gxOCHCiIUWhShkAMapy%2Fl0gOK%2BKaYpF46furT8DDkCLkfjPOvhnvhguQN409roywYbt4M0qP2CAGZPjKVwio%2B4XKV0iyPfNMwo7cAh%2BFU0q&X-Amz-Signature=e7f62428b4c297a19afc10b0dedcefe761dee121cf0c0a95878a9e8fb3edb860&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMHHMIO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH9%2FguldJcra7VEsDWpUDANX3B6eeCru%2BfFgaWFPa2PAiEAh%2FP0C7JaiZR%2FJp4Z2e35jx7qUEtL3J1qXyt9D5gZan4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBULGkWZVq85%2BQ%2Fw7SrcAxiNM6mvM4UxCMl5WVDOE2Xfn4jR83Y6qvC6WxYjSDGENK7WGGxONdL2LlQyl27xvHIO9w5l4mb0qN4%2FbcJcbAy6Oou5xeE7tg%2FGiuhbmml68GSZrpp2QRhd0lOTP1qc5TPw0xVDHAZiSrL%2BKUKgI1KSsc7fLM7z%2FrgWjBxHcYB9kax4e6bPvI%2Bw3rl%2FIL4MZIVs%2B7mKgwYvSlk%2FqAFl9OlnQ5ATBJiKKEeBmSeoGgE%2FtVw9CqysPeSG7B%2FfuNihcSMb64qUNkf8Mzio%2BwsVlEJCJLCZ0LKvk%2FFxdMdXZikVna6gAGS3Und7dpZSV5bTOErQzXKsGjUJ3yISXOSLhIHlyz2i09Rh88QG8GYg5nuOLXqMu1kKpnp0PIFzlKf7Keu4adE5x2aU8JBORwgYw9jNHTccMvxEOen0StCAYDRg0kvudIxWFbIXsWWKOAFC9g8PAx%2BfD3IKm4ay0gyINZA%2BaH7ujA%2F10Iix6xz4QnyyiBPdJCPAbAqsALKQwgykBOlf346qIj2eqW%2Bl%2F2gES10GR8RVZD2yO1Qcb5NMGdC96wSnzS9w5SwKqNMrzL7Pl93J%2B%2F7IyBISwu3dHfvBCumH%2FghyPaLJ5wAMsTDhYho42ypELy7xyXWqfcG7MKzF%2BLwGOqUBwrOb2gM5v%2BfbwJOwytQItamNAsnnotE4cC3U0kK%2FmrJEVb8jE4hTFRa4v2yaHuGKSMA41gnDj78oqyTis5eB0HTiGBcm9QzTbthvgIxXaewxGsms5gxOCHCiIUWhShkAMapy%2Fl0gOK%2BKaYpF46furT8DDkCLkfjPOvhnvhguQN409roywYbt4M0qP2CAGZPjKVwio%2B4XKV0iyPfNMwo7cAh%2BFU0q&X-Amz-Signature=d349bb616953ce105cc862a0031ef0f622cbaf78884acd88e9009f38a48a3b46&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMHHMIO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH9%2FguldJcra7VEsDWpUDANX3B6eeCru%2BfFgaWFPa2PAiEAh%2FP0C7JaiZR%2FJp4Z2e35jx7qUEtL3J1qXyt9D5gZan4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBULGkWZVq85%2BQ%2Fw7SrcAxiNM6mvM4UxCMl5WVDOE2Xfn4jR83Y6qvC6WxYjSDGENK7WGGxONdL2LlQyl27xvHIO9w5l4mb0qN4%2FbcJcbAy6Oou5xeE7tg%2FGiuhbmml68GSZrpp2QRhd0lOTP1qc5TPw0xVDHAZiSrL%2BKUKgI1KSsc7fLM7z%2FrgWjBxHcYB9kax4e6bPvI%2Bw3rl%2FIL4MZIVs%2B7mKgwYvSlk%2FqAFl9OlnQ5ATBJiKKEeBmSeoGgE%2FtVw9CqysPeSG7B%2FfuNihcSMb64qUNkf8Mzio%2BwsVlEJCJLCZ0LKvk%2FFxdMdXZikVna6gAGS3Und7dpZSV5bTOErQzXKsGjUJ3yISXOSLhIHlyz2i09Rh88QG8GYg5nuOLXqMu1kKpnp0PIFzlKf7Keu4adE5x2aU8JBORwgYw9jNHTccMvxEOen0StCAYDRg0kvudIxWFbIXsWWKOAFC9g8PAx%2BfD3IKm4ay0gyINZA%2BaH7ujA%2F10Iix6xz4QnyyiBPdJCPAbAqsALKQwgykBOlf346qIj2eqW%2Bl%2F2gES10GR8RVZD2yO1Qcb5NMGdC96wSnzS9w5SwKqNMrzL7Pl93J%2B%2F7IyBISwu3dHfvBCumH%2FghyPaLJ5wAMsTDhYho42ypELy7xyXWqfcG7MKzF%2BLwGOqUBwrOb2gM5v%2BfbwJOwytQItamNAsnnotE4cC3U0kK%2FmrJEVb8jE4hTFRa4v2yaHuGKSMA41gnDj78oqyTis5eB0HTiGBcm9QzTbthvgIxXaewxGsms5gxOCHCiIUWhShkAMapy%2Fl0gOK%2BKaYpF46furT8DDkCLkfjPOvhnvhguQN409roywYbt4M0qP2CAGZPjKVwio%2B4XKV0iyPfNMwo7cAh%2BFU0q&X-Amz-Signature=7085832f7064f0ce9f86cbf160bc8c2c29b4e7861e71831d0b65776ace48b120&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMHHMIO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH9%2FguldJcra7VEsDWpUDANX3B6eeCru%2BfFgaWFPa2PAiEAh%2FP0C7JaiZR%2FJp4Z2e35jx7qUEtL3J1qXyt9D5gZan4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBULGkWZVq85%2BQ%2Fw7SrcAxiNM6mvM4UxCMl5WVDOE2Xfn4jR83Y6qvC6WxYjSDGENK7WGGxONdL2LlQyl27xvHIO9w5l4mb0qN4%2FbcJcbAy6Oou5xeE7tg%2FGiuhbmml68GSZrpp2QRhd0lOTP1qc5TPw0xVDHAZiSrL%2BKUKgI1KSsc7fLM7z%2FrgWjBxHcYB9kax4e6bPvI%2Bw3rl%2FIL4MZIVs%2B7mKgwYvSlk%2FqAFl9OlnQ5ATBJiKKEeBmSeoGgE%2FtVw9CqysPeSG7B%2FfuNihcSMb64qUNkf8Mzio%2BwsVlEJCJLCZ0LKvk%2FFxdMdXZikVna6gAGS3Und7dpZSV5bTOErQzXKsGjUJ3yISXOSLhIHlyz2i09Rh88QG8GYg5nuOLXqMu1kKpnp0PIFzlKf7Keu4adE5x2aU8JBORwgYw9jNHTccMvxEOen0StCAYDRg0kvudIxWFbIXsWWKOAFC9g8PAx%2BfD3IKm4ay0gyINZA%2BaH7ujA%2F10Iix6xz4QnyyiBPdJCPAbAqsALKQwgykBOlf346qIj2eqW%2Bl%2F2gES10GR8RVZD2yO1Qcb5NMGdC96wSnzS9w5SwKqNMrzL7Pl93J%2B%2F7IyBISwu3dHfvBCumH%2FghyPaLJ5wAMsTDhYho42ypELy7xyXWqfcG7MKzF%2BLwGOqUBwrOb2gM5v%2BfbwJOwytQItamNAsnnotE4cC3U0kK%2FmrJEVb8jE4hTFRa4v2yaHuGKSMA41gnDj78oqyTis5eB0HTiGBcm9QzTbthvgIxXaewxGsms5gxOCHCiIUWhShkAMapy%2Fl0gOK%2BKaYpF46furT8DDkCLkfjPOvhnvhguQN409roywYbt4M0qP2CAGZPjKVwio%2B4XKV0iyPfNMwo7cAh%2BFU0q&X-Amz-Signature=7d8e82ff43cd2daf226466b9597cc3daabb111611c724e246ee6c0b743c807a6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

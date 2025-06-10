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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCJYSYV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvBI3%2BXT%2BHUEWvYzNPzz1H90VcaPpCgRDYfi2O7xg9FAiEAvz86qCwAGDoU5buVoel8iNOLi5eyMpoqk5ktAGc4hOEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYPzp4oHlvfvx8a5SrcA93ZKl%2BqrjKViRA3OKrtZnBGD%2FXz2YcTVzB4q9r0691bOyDCXPgK%2FTTUvRZVXhnPrlrHA0MkJ0dvCzn%2Bw4AjejUl7SYNZ%2Bsq%2FhLhWwurY83KgNlD%2Bqc7EAiATHCmltlOCWr%2F2MEv5TlmrCVzb10oM0KhfTM38N9a99XXVg1g7ClAszbEgYsZjnLwuGGZ%2FFqtESyXukJjrG5meeAKTCBxS2SbQ%2BSwsKfM%2F%2BUJssPk0uCGscDmSJSt5jct6eCI1IIgXfS58RTN%2F7PWnLIj1LEto6NIZUWS%2BexMklaaN0FVH%2FG8oOvlzt%2BMFepc0zeG31z1vRozoLka3L4RGSmFntZ%2BlL9c%2BloBWhml8jApc%2Fb7yOBLuIUjGDI6KYzbEDBujah5TGxW4U5CLccBGpQ1bfYpNuy4hQDGcC4BKPsdB%2FH4sY6Qf24UOxtQezj6w34yv6Xq31MQSL4Ym6qvVpftTkoTeCqEB9%2FAgxKkSjkyVM%2FWEhFpbAL5kQCW2BIAv6hgqwSlFdCdXKbNbNoJaQTAWMJYDJXfa79FXXsR36lW2wit5MPR%2FYKviLFTQGBIkEyCClXsfeBhacR4bS%2BOH2RWBEGTBzo5E4m0eTYBNpU3cjbzCI1fyV5bitdUOOS4kTKvMP7en8IGOqUBpmg4NDjjeypcKJ4uIiBL6T2aEBHygY%2FN5MggyRvJ%2FmAvE6mRrIFJ%2F2Cf7p%2BOQYTxZx%2BBV%2Fy8r9x%2BBsx%2BtYVRFc9AI8muIOMyvMIenWTkMOTSCvqxjYoCLtiDvLM5sL%2FvZnDHep6QuQl6agedaGI4erIc2sYEgVroi3qJdOmXpos6fXVUA53CrnPVhIZNKErnm25cMnr2W7Wk0VHDhrSNm9DJ6OwC&X-Amz-Signature=b1429d3c1fdf51cfbb57ade6ddf1041bacbd636b2499e66c6b46697a38eb169b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCJYSYV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvBI3%2BXT%2BHUEWvYzNPzz1H90VcaPpCgRDYfi2O7xg9FAiEAvz86qCwAGDoU5buVoel8iNOLi5eyMpoqk5ktAGc4hOEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYPzp4oHlvfvx8a5SrcA93ZKl%2BqrjKViRA3OKrtZnBGD%2FXz2YcTVzB4q9r0691bOyDCXPgK%2FTTUvRZVXhnPrlrHA0MkJ0dvCzn%2Bw4AjejUl7SYNZ%2Bsq%2FhLhWwurY83KgNlD%2Bqc7EAiATHCmltlOCWr%2F2MEv5TlmrCVzb10oM0KhfTM38N9a99XXVg1g7ClAszbEgYsZjnLwuGGZ%2FFqtESyXukJjrG5meeAKTCBxS2SbQ%2BSwsKfM%2F%2BUJssPk0uCGscDmSJSt5jct6eCI1IIgXfS58RTN%2F7PWnLIj1LEto6NIZUWS%2BexMklaaN0FVH%2FG8oOvlzt%2BMFepc0zeG31z1vRozoLka3L4RGSmFntZ%2BlL9c%2BloBWhml8jApc%2Fb7yOBLuIUjGDI6KYzbEDBujah5TGxW4U5CLccBGpQ1bfYpNuy4hQDGcC4BKPsdB%2FH4sY6Qf24UOxtQezj6w34yv6Xq31MQSL4Ym6qvVpftTkoTeCqEB9%2FAgxKkSjkyVM%2FWEhFpbAL5kQCW2BIAv6hgqwSlFdCdXKbNbNoJaQTAWMJYDJXfa79FXXsR36lW2wit5MPR%2FYKviLFTQGBIkEyCClXsfeBhacR4bS%2BOH2RWBEGTBzo5E4m0eTYBNpU3cjbzCI1fyV5bitdUOOS4kTKvMP7en8IGOqUBpmg4NDjjeypcKJ4uIiBL6T2aEBHygY%2FN5MggyRvJ%2FmAvE6mRrIFJ%2F2Cf7p%2BOQYTxZx%2BBV%2Fy8r9x%2BBsx%2BtYVRFc9AI8muIOMyvMIenWTkMOTSCvqxjYoCLtiDvLM5sL%2FvZnDHep6QuQl6agedaGI4erIc2sYEgVroi3qJdOmXpos6fXVUA53CrnPVhIZNKErnm25cMnr2W7Wk0VHDhrSNm9DJ6OwC&X-Amz-Signature=39675fe2342d3cdc9f6f966319443483bf4da0778cb719f2a03484c9f2888b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCJYSYV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvBI3%2BXT%2BHUEWvYzNPzz1H90VcaPpCgRDYfi2O7xg9FAiEAvz86qCwAGDoU5buVoel8iNOLi5eyMpoqk5ktAGc4hOEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYPzp4oHlvfvx8a5SrcA93ZKl%2BqrjKViRA3OKrtZnBGD%2FXz2YcTVzB4q9r0691bOyDCXPgK%2FTTUvRZVXhnPrlrHA0MkJ0dvCzn%2Bw4AjejUl7SYNZ%2Bsq%2FhLhWwurY83KgNlD%2Bqc7EAiATHCmltlOCWr%2F2MEv5TlmrCVzb10oM0KhfTM38N9a99XXVg1g7ClAszbEgYsZjnLwuGGZ%2FFqtESyXukJjrG5meeAKTCBxS2SbQ%2BSwsKfM%2F%2BUJssPk0uCGscDmSJSt5jct6eCI1IIgXfS58RTN%2F7PWnLIj1LEto6NIZUWS%2BexMklaaN0FVH%2FG8oOvlzt%2BMFepc0zeG31z1vRozoLka3L4RGSmFntZ%2BlL9c%2BloBWhml8jApc%2Fb7yOBLuIUjGDI6KYzbEDBujah5TGxW4U5CLccBGpQ1bfYpNuy4hQDGcC4BKPsdB%2FH4sY6Qf24UOxtQezj6w34yv6Xq31MQSL4Ym6qvVpftTkoTeCqEB9%2FAgxKkSjkyVM%2FWEhFpbAL5kQCW2BIAv6hgqwSlFdCdXKbNbNoJaQTAWMJYDJXfa79FXXsR36lW2wit5MPR%2FYKviLFTQGBIkEyCClXsfeBhacR4bS%2BOH2RWBEGTBzo5E4m0eTYBNpU3cjbzCI1fyV5bitdUOOS4kTKvMP7en8IGOqUBpmg4NDjjeypcKJ4uIiBL6T2aEBHygY%2FN5MggyRvJ%2FmAvE6mRrIFJ%2F2Cf7p%2BOQYTxZx%2BBV%2Fy8r9x%2BBsx%2BtYVRFc9AI8muIOMyvMIenWTkMOTSCvqxjYoCLtiDvLM5sL%2FvZnDHep6QuQl6agedaGI4erIc2sYEgVroi3qJdOmXpos6fXVUA53CrnPVhIZNKErnm25cMnr2W7Wk0VHDhrSNm9DJ6OwC&X-Amz-Signature=35459d7a2fc36279177cc4d1e9db976d5a21747b4123b8ba4102a8e7b9ea630d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCJYSYV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvBI3%2BXT%2BHUEWvYzNPzz1H90VcaPpCgRDYfi2O7xg9FAiEAvz86qCwAGDoU5buVoel8iNOLi5eyMpoqk5ktAGc4hOEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYPzp4oHlvfvx8a5SrcA93ZKl%2BqrjKViRA3OKrtZnBGD%2FXz2YcTVzB4q9r0691bOyDCXPgK%2FTTUvRZVXhnPrlrHA0MkJ0dvCzn%2Bw4AjejUl7SYNZ%2Bsq%2FhLhWwurY83KgNlD%2Bqc7EAiATHCmltlOCWr%2F2MEv5TlmrCVzb10oM0KhfTM38N9a99XXVg1g7ClAszbEgYsZjnLwuGGZ%2FFqtESyXukJjrG5meeAKTCBxS2SbQ%2BSwsKfM%2F%2BUJssPk0uCGscDmSJSt5jct6eCI1IIgXfS58RTN%2F7PWnLIj1LEto6NIZUWS%2BexMklaaN0FVH%2FG8oOvlzt%2BMFepc0zeG31z1vRozoLka3L4RGSmFntZ%2BlL9c%2BloBWhml8jApc%2Fb7yOBLuIUjGDI6KYzbEDBujah5TGxW4U5CLccBGpQ1bfYpNuy4hQDGcC4BKPsdB%2FH4sY6Qf24UOxtQezj6w34yv6Xq31MQSL4Ym6qvVpftTkoTeCqEB9%2FAgxKkSjkyVM%2FWEhFpbAL5kQCW2BIAv6hgqwSlFdCdXKbNbNoJaQTAWMJYDJXfa79FXXsR36lW2wit5MPR%2FYKviLFTQGBIkEyCClXsfeBhacR4bS%2BOH2RWBEGTBzo5E4m0eTYBNpU3cjbzCI1fyV5bitdUOOS4kTKvMP7en8IGOqUBpmg4NDjjeypcKJ4uIiBL6T2aEBHygY%2FN5MggyRvJ%2FmAvE6mRrIFJ%2F2Cf7p%2BOQYTxZx%2BBV%2Fy8r9x%2BBsx%2BtYVRFc9AI8muIOMyvMIenWTkMOTSCvqxjYoCLtiDvLM5sL%2FvZnDHep6QuQl6agedaGI4erIc2sYEgVroi3qJdOmXpos6fXVUA53CrnPVhIZNKErnm25cMnr2W7Wk0VHDhrSNm9DJ6OwC&X-Amz-Signature=4d01ce012a6335886ea2f40f45750fd60093ef468fc922d1b970f2fd4346e7e3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCJYSYV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvBI3%2BXT%2BHUEWvYzNPzz1H90VcaPpCgRDYfi2O7xg9FAiEAvz86qCwAGDoU5buVoel8iNOLi5eyMpoqk5ktAGc4hOEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYPzp4oHlvfvx8a5SrcA93ZKl%2BqrjKViRA3OKrtZnBGD%2FXz2YcTVzB4q9r0691bOyDCXPgK%2FTTUvRZVXhnPrlrHA0MkJ0dvCzn%2Bw4AjejUl7SYNZ%2Bsq%2FhLhWwurY83KgNlD%2Bqc7EAiATHCmltlOCWr%2F2MEv5TlmrCVzb10oM0KhfTM38N9a99XXVg1g7ClAszbEgYsZjnLwuGGZ%2FFqtESyXukJjrG5meeAKTCBxS2SbQ%2BSwsKfM%2F%2BUJssPk0uCGscDmSJSt5jct6eCI1IIgXfS58RTN%2F7PWnLIj1LEto6NIZUWS%2BexMklaaN0FVH%2FG8oOvlzt%2BMFepc0zeG31z1vRozoLka3L4RGSmFntZ%2BlL9c%2BloBWhml8jApc%2Fb7yOBLuIUjGDI6KYzbEDBujah5TGxW4U5CLccBGpQ1bfYpNuy4hQDGcC4BKPsdB%2FH4sY6Qf24UOxtQezj6w34yv6Xq31MQSL4Ym6qvVpftTkoTeCqEB9%2FAgxKkSjkyVM%2FWEhFpbAL5kQCW2BIAv6hgqwSlFdCdXKbNbNoJaQTAWMJYDJXfa79FXXsR36lW2wit5MPR%2FYKviLFTQGBIkEyCClXsfeBhacR4bS%2BOH2RWBEGTBzo5E4m0eTYBNpU3cjbzCI1fyV5bitdUOOS4kTKvMP7en8IGOqUBpmg4NDjjeypcKJ4uIiBL6T2aEBHygY%2FN5MggyRvJ%2FmAvE6mRrIFJ%2F2Cf7p%2BOQYTxZx%2BBV%2Fy8r9x%2BBsx%2BtYVRFc9AI8muIOMyvMIenWTkMOTSCvqxjYoCLtiDvLM5sL%2FvZnDHep6QuQl6agedaGI4erIc2sYEgVroi3qJdOmXpos6fXVUA53CrnPVhIZNKErnm25cMnr2W7Wk0VHDhrSNm9DJ6OwC&X-Amz-Signature=a025c8145daa68faabbbdca339a726584d3d85b225f08369417e261a7b4f8ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCJYSYV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvBI3%2BXT%2BHUEWvYzNPzz1H90VcaPpCgRDYfi2O7xg9FAiEAvz86qCwAGDoU5buVoel8iNOLi5eyMpoqk5ktAGc4hOEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYPzp4oHlvfvx8a5SrcA93ZKl%2BqrjKViRA3OKrtZnBGD%2FXz2YcTVzB4q9r0691bOyDCXPgK%2FTTUvRZVXhnPrlrHA0MkJ0dvCzn%2Bw4AjejUl7SYNZ%2Bsq%2FhLhWwurY83KgNlD%2Bqc7EAiATHCmltlOCWr%2F2MEv5TlmrCVzb10oM0KhfTM38N9a99XXVg1g7ClAszbEgYsZjnLwuGGZ%2FFqtESyXukJjrG5meeAKTCBxS2SbQ%2BSwsKfM%2F%2BUJssPk0uCGscDmSJSt5jct6eCI1IIgXfS58RTN%2F7PWnLIj1LEto6NIZUWS%2BexMklaaN0FVH%2FG8oOvlzt%2BMFepc0zeG31z1vRozoLka3L4RGSmFntZ%2BlL9c%2BloBWhml8jApc%2Fb7yOBLuIUjGDI6KYzbEDBujah5TGxW4U5CLccBGpQ1bfYpNuy4hQDGcC4BKPsdB%2FH4sY6Qf24UOxtQezj6w34yv6Xq31MQSL4Ym6qvVpftTkoTeCqEB9%2FAgxKkSjkyVM%2FWEhFpbAL5kQCW2BIAv6hgqwSlFdCdXKbNbNoJaQTAWMJYDJXfa79FXXsR36lW2wit5MPR%2FYKviLFTQGBIkEyCClXsfeBhacR4bS%2BOH2RWBEGTBzo5E4m0eTYBNpU3cjbzCI1fyV5bitdUOOS4kTKvMP7en8IGOqUBpmg4NDjjeypcKJ4uIiBL6T2aEBHygY%2FN5MggyRvJ%2FmAvE6mRrIFJ%2F2Cf7p%2BOQYTxZx%2BBV%2Fy8r9x%2BBsx%2BtYVRFc9AI8muIOMyvMIenWTkMOTSCvqxjYoCLtiDvLM5sL%2FvZnDHep6QuQl6agedaGI4erIc2sYEgVroi3qJdOmXpos6fXVUA53CrnPVhIZNKErnm25cMnr2W7Wk0VHDhrSNm9DJ6OwC&X-Amz-Signature=d629aaf4592423a482b0156a88364318e11ff807d895a75cb8a328546ea43474&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCJYSYV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvBI3%2BXT%2BHUEWvYzNPzz1H90VcaPpCgRDYfi2O7xg9FAiEAvz86qCwAGDoU5buVoel8iNOLi5eyMpoqk5ktAGc4hOEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYPzp4oHlvfvx8a5SrcA93ZKl%2BqrjKViRA3OKrtZnBGD%2FXz2YcTVzB4q9r0691bOyDCXPgK%2FTTUvRZVXhnPrlrHA0MkJ0dvCzn%2Bw4AjejUl7SYNZ%2Bsq%2FhLhWwurY83KgNlD%2Bqc7EAiATHCmltlOCWr%2F2MEv5TlmrCVzb10oM0KhfTM38N9a99XXVg1g7ClAszbEgYsZjnLwuGGZ%2FFqtESyXukJjrG5meeAKTCBxS2SbQ%2BSwsKfM%2F%2BUJssPk0uCGscDmSJSt5jct6eCI1IIgXfS58RTN%2F7PWnLIj1LEto6NIZUWS%2BexMklaaN0FVH%2FG8oOvlzt%2BMFepc0zeG31z1vRozoLka3L4RGSmFntZ%2BlL9c%2BloBWhml8jApc%2Fb7yOBLuIUjGDI6KYzbEDBujah5TGxW4U5CLccBGpQ1bfYpNuy4hQDGcC4BKPsdB%2FH4sY6Qf24UOxtQezj6w34yv6Xq31MQSL4Ym6qvVpftTkoTeCqEB9%2FAgxKkSjkyVM%2FWEhFpbAL5kQCW2BIAv6hgqwSlFdCdXKbNbNoJaQTAWMJYDJXfa79FXXsR36lW2wit5MPR%2FYKviLFTQGBIkEyCClXsfeBhacR4bS%2BOH2RWBEGTBzo5E4m0eTYBNpU3cjbzCI1fyV5bitdUOOS4kTKvMP7en8IGOqUBpmg4NDjjeypcKJ4uIiBL6T2aEBHygY%2FN5MggyRvJ%2FmAvE6mRrIFJ%2F2Cf7p%2BOQYTxZx%2BBV%2Fy8r9x%2BBsx%2BtYVRFc9AI8muIOMyvMIenWTkMOTSCvqxjYoCLtiDvLM5sL%2FvZnDHep6QuQl6agedaGI4erIc2sYEgVroi3qJdOmXpos6fXVUA53CrnPVhIZNKErnm25cMnr2W7Wk0VHDhrSNm9DJ6OwC&X-Amz-Signature=fa5a902bce79ae66b4853ddaed1aed726a4522675aa56644f7f55be21becfc02&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

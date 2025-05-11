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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK23QL4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBV7aufk2PcNTG%2FVqE4n0P%2FSjdDcjJUY%2BQ0UfWECdJbEAiEAwSnNTzD2ItxA02Jtx88Zq8Q0lZIY66f%2BUYx%2FGpTWXv4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcNCXCXeoeOLGQwJSrcAyhS2dIDqaBkXbwhjKQADEs65TrbwSxdmc%2BevddUwt8yt4uFKaayk47EK28VtLT7W0IySlJBXYN2AscXXO5xCAv0jpKC%2BbXo2B4IAaPrO0cp%2FXb8QX8m6R6PsydRo2BGSKNQ%2B4wUaVOOcJtNAWgnifax4OvyRO4miQYLy%2FPPJPadRWcLJy6KQsyGvucYclhCsFuGlLWLr50TU6mPAGpLWw1OF8ULT8y0zhEWQWipsLs%2B9zw3yPtuzuC813kwiZSP3PZ5Ujzxmgi4hzZAb7ott3YrsveL7UI9%2BVOC4Ybn258F4E0KaRMHofZorg%2F6lM1xNYWzgvpaqL1%2Bc3fWdbcXndrRnG16C3Wfm93NrfG5TtfhgAVkDt83ootc1fQ65BclxBxpFguUyGQxW2wzhBYT1qG3ZaqWBC8kRJTGL3dU9TNH0k4Cm4x5ZCiuAaRPfpVYpHMZbGbp63Q81ujlOIufdprnEe1QB8yBmCddfBC81hfQXtOKlV5%2BrdWwSRsls2cWuq4Xx1re3d9Z8vngIURWqmCVUf6t2KleBfPI0jvwJdPykuF8qvEDwz7OEXaZ%2FCBOny7ORTVnbDuhl9UnSKEoylosC9CkVV%2FFhtv9AKCiZFueMTpr4MEOifF5YQIXMMjS%2F8AGOqUBPFSM8JUZcrFU95ElUJ3zPRTANxH%2FkhOgh9RRthWHhsAwA%2Fl2KCVcfxONfVTreVjT0sVWfkXdJcIIIksudFgE%2B3qFh4Cx4w1CkaHTryiB%2FDyAod8%2FyAL2icuaNfLV%2B0OSYhJ68hWb4Jz8EAy45pJ8pkc%2BEsG57k6JD%2B7a%2BWT8f117wisz96WHSf6t9ZImVR3PXJ%2FFGFh5wCqW%2BfO%2FnAkXk2RpF%2BdO&X-Amz-Signature=ac8ce653a373ef5b728f78fac9b0992e555c41334b13826883e26bbd68440d39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK23QL4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBV7aufk2PcNTG%2FVqE4n0P%2FSjdDcjJUY%2BQ0UfWECdJbEAiEAwSnNTzD2ItxA02Jtx88Zq8Q0lZIY66f%2BUYx%2FGpTWXv4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcNCXCXeoeOLGQwJSrcAyhS2dIDqaBkXbwhjKQADEs65TrbwSxdmc%2BevddUwt8yt4uFKaayk47EK28VtLT7W0IySlJBXYN2AscXXO5xCAv0jpKC%2BbXo2B4IAaPrO0cp%2FXb8QX8m6R6PsydRo2BGSKNQ%2B4wUaVOOcJtNAWgnifax4OvyRO4miQYLy%2FPPJPadRWcLJy6KQsyGvucYclhCsFuGlLWLr50TU6mPAGpLWw1OF8ULT8y0zhEWQWipsLs%2B9zw3yPtuzuC813kwiZSP3PZ5Ujzxmgi4hzZAb7ott3YrsveL7UI9%2BVOC4Ybn258F4E0KaRMHofZorg%2F6lM1xNYWzgvpaqL1%2Bc3fWdbcXndrRnG16C3Wfm93NrfG5TtfhgAVkDt83ootc1fQ65BclxBxpFguUyGQxW2wzhBYT1qG3ZaqWBC8kRJTGL3dU9TNH0k4Cm4x5ZCiuAaRPfpVYpHMZbGbp63Q81ujlOIufdprnEe1QB8yBmCddfBC81hfQXtOKlV5%2BrdWwSRsls2cWuq4Xx1re3d9Z8vngIURWqmCVUf6t2KleBfPI0jvwJdPykuF8qvEDwz7OEXaZ%2FCBOny7ORTVnbDuhl9UnSKEoylosC9CkVV%2FFhtv9AKCiZFueMTpr4MEOifF5YQIXMMjS%2F8AGOqUBPFSM8JUZcrFU95ElUJ3zPRTANxH%2FkhOgh9RRthWHhsAwA%2Fl2KCVcfxONfVTreVjT0sVWfkXdJcIIIksudFgE%2B3qFh4Cx4w1CkaHTryiB%2FDyAod8%2FyAL2icuaNfLV%2B0OSYhJ68hWb4Jz8EAy45pJ8pkc%2BEsG57k6JD%2B7a%2BWT8f117wisz96WHSf6t9ZImVR3PXJ%2FFGFh5wCqW%2BfO%2FnAkXk2RpF%2BdO&X-Amz-Signature=b925e77aa85f02afae0f934c42acc7088100635c259b29e0947fdd10475a3751&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK23QL4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBV7aufk2PcNTG%2FVqE4n0P%2FSjdDcjJUY%2BQ0UfWECdJbEAiEAwSnNTzD2ItxA02Jtx88Zq8Q0lZIY66f%2BUYx%2FGpTWXv4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcNCXCXeoeOLGQwJSrcAyhS2dIDqaBkXbwhjKQADEs65TrbwSxdmc%2BevddUwt8yt4uFKaayk47EK28VtLT7W0IySlJBXYN2AscXXO5xCAv0jpKC%2BbXo2B4IAaPrO0cp%2FXb8QX8m6R6PsydRo2BGSKNQ%2B4wUaVOOcJtNAWgnifax4OvyRO4miQYLy%2FPPJPadRWcLJy6KQsyGvucYclhCsFuGlLWLr50TU6mPAGpLWw1OF8ULT8y0zhEWQWipsLs%2B9zw3yPtuzuC813kwiZSP3PZ5Ujzxmgi4hzZAb7ott3YrsveL7UI9%2BVOC4Ybn258F4E0KaRMHofZorg%2F6lM1xNYWzgvpaqL1%2Bc3fWdbcXndrRnG16C3Wfm93NrfG5TtfhgAVkDt83ootc1fQ65BclxBxpFguUyGQxW2wzhBYT1qG3ZaqWBC8kRJTGL3dU9TNH0k4Cm4x5ZCiuAaRPfpVYpHMZbGbp63Q81ujlOIufdprnEe1QB8yBmCddfBC81hfQXtOKlV5%2BrdWwSRsls2cWuq4Xx1re3d9Z8vngIURWqmCVUf6t2KleBfPI0jvwJdPykuF8qvEDwz7OEXaZ%2FCBOny7ORTVnbDuhl9UnSKEoylosC9CkVV%2FFhtv9AKCiZFueMTpr4MEOifF5YQIXMMjS%2F8AGOqUBPFSM8JUZcrFU95ElUJ3zPRTANxH%2FkhOgh9RRthWHhsAwA%2Fl2KCVcfxONfVTreVjT0sVWfkXdJcIIIksudFgE%2B3qFh4Cx4w1CkaHTryiB%2FDyAod8%2FyAL2icuaNfLV%2B0OSYhJ68hWb4Jz8EAy45pJ8pkc%2BEsG57k6JD%2B7a%2BWT8f117wisz96WHSf6t9ZImVR3PXJ%2FFGFh5wCqW%2BfO%2FnAkXk2RpF%2BdO&X-Amz-Signature=8d794a3ba781620e93f1e5f688fc67ef31e67320b0002d483dabce588920e240&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK23QL4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBV7aufk2PcNTG%2FVqE4n0P%2FSjdDcjJUY%2BQ0UfWECdJbEAiEAwSnNTzD2ItxA02Jtx88Zq8Q0lZIY66f%2BUYx%2FGpTWXv4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcNCXCXeoeOLGQwJSrcAyhS2dIDqaBkXbwhjKQADEs65TrbwSxdmc%2BevddUwt8yt4uFKaayk47EK28VtLT7W0IySlJBXYN2AscXXO5xCAv0jpKC%2BbXo2B4IAaPrO0cp%2FXb8QX8m6R6PsydRo2BGSKNQ%2B4wUaVOOcJtNAWgnifax4OvyRO4miQYLy%2FPPJPadRWcLJy6KQsyGvucYclhCsFuGlLWLr50TU6mPAGpLWw1OF8ULT8y0zhEWQWipsLs%2B9zw3yPtuzuC813kwiZSP3PZ5Ujzxmgi4hzZAb7ott3YrsveL7UI9%2BVOC4Ybn258F4E0KaRMHofZorg%2F6lM1xNYWzgvpaqL1%2Bc3fWdbcXndrRnG16C3Wfm93NrfG5TtfhgAVkDt83ootc1fQ65BclxBxpFguUyGQxW2wzhBYT1qG3ZaqWBC8kRJTGL3dU9TNH0k4Cm4x5ZCiuAaRPfpVYpHMZbGbp63Q81ujlOIufdprnEe1QB8yBmCddfBC81hfQXtOKlV5%2BrdWwSRsls2cWuq4Xx1re3d9Z8vngIURWqmCVUf6t2KleBfPI0jvwJdPykuF8qvEDwz7OEXaZ%2FCBOny7ORTVnbDuhl9UnSKEoylosC9CkVV%2FFhtv9AKCiZFueMTpr4MEOifF5YQIXMMjS%2F8AGOqUBPFSM8JUZcrFU95ElUJ3zPRTANxH%2FkhOgh9RRthWHhsAwA%2Fl2KCVcfxONfVTreVjT0sVWfkXdJcIIIksudFgE%2B3qFh4Cx4w1CkaHTryiB%2FDyAod8%2FyAL2icuaNfLV%2B0OSYhJ68hWb4Jz8EAy45pJ8pkc%2BEsG57k6JD%2B7a%2BWT8f117wisz96WHSf6t9ZImVR3PXJ%2FFGFh5wCqW%2BfO%2FnAkXk2RpF%2BdO&X-Amz-Signature=339f6882a5c40c10f351004b1c80ace2cc5db1c7b4c137351c31ca1509e3fdcf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK23QL4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBV7aufk2PcNTG%2FVqE4n0P%2FSjdDcjJUY%2BQ0UfWECdJbEAiEAwSnNTzD2ItxA02Jtx88Zq8Q0lZIY66f%2BUYx%2FGpTWXv4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcNCXCXeoeOLGQwJSrcAyhS2dIDqaBkXbwhjKQADEs65TrbwSxdmc%2BevddUwt8yt4uFKaayk47EK28VtLT7W0IySlJBXYN2AscXXO5xCAv0jpKC%2BbXo2B4IAaPrO0cp%2FXb8QX8m6R6PsydRo2BGSKNQ%2B4wUaVOOcJtNAWgnifax4OvyRO4miQYLy%2FPPJPadRWcLJy6KQsyGvucYclhCsFuGlLWLr50TU6mPAGpLWw1OF8ULT8y0zhEWQWipsLs%2B9zw3yPtuzuC813kwiZSP3PZ5Ujzxmgi4hzZAb7ott3YrsveL7UI9%2BVOC4Ybn258F4E0KaRMHofZorg%2F6lM1xNYWzgvpaqL1%2Bc3fWdbcXndrRnG16C3Wfm93NrfG5TtfhgAVkDt83ootc1fQ65BclxBxpFguUyGQxW2wzhBYT1qG3ZaqWBC8kRJTGL3dU9TNH0k4Cm4x5ZCiuAaRPfpVYpHMZbGbp63Q81ujlOIufdprnEe1QB8yBmCddfBC81hfQXtOKlV5%2BrdWwSRsls2cWuq4Xx1re3d9Z8vngIURWqmCVUf6t2KleBfPI0jvwJdPykuF8qvEDwz7OEXaZ%2FCBOny7ORTVnbDuhl9UnSKEoylosC9CkVV%2FFhtv9AKCiZFueMTpr4MEOifF5YQIXMMjS%2F8AGOqUBPFSM8JUZcrFU95ElUJ3zPRTANxH%2FkhOgh9RRthWHhsAwA%2Fl2KCVcfxONfVTreVjT0sVWfkXdJcIIIksudFgE%2B3qFh4Cx4w1CkaHTryiB%2FDyAod8%2FyAL2icuaNfLV%2B0OSYhJ68hWb4Jz8EAy45pJ8pkc%2BEsG57k6JD%2B7a%2BWT8f117wisz96WHSf6t9ZImVR3PXJ%2FFGFh5wCqW%2BfO%2FnAkXk2RpF%2BdO&X-Amz-Signature=c5a995f1371130d91d90eeb6a5df559eb20047c816af3cb1fc27e900a6969047&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK23QL4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBV7aufk2PcNTG%2FVqE4n0P%2FSjdDcjJUY%2BQ0UfWECdJbEAiEAwSnNTzD2ItxA02Jtx88Zq8Q0lZIY66f%2BUYx%2FGpTWXv4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcNCXCXeoeOLGQwJSrcAyhS2dIDqaBkXbwhjKQADEs65TrbwSxdmc%2BevddUwt8yt4uFKaayk47EK28VtLT7W0IySlJBXYN2AscXXO5xCAv0jpKC%2BbXo2B4IAaPrO0cp%2FXb8QX8m6R6PsydRo2BGSKNQ%2B4wUaVOOcJtNAWgnifax4OvyRO4miQYLy%2FPPJPadRWcLJy6KQsyGvucYclhCsFuGlLWLr50TU6mPAGpLWw1OF8ULT8y0zhEWQWipsLs%2B9zw3yPtuzuC813kwiZSP3PZ5Ujzxmgi4hzZAb7ott3YrsveL7UI9%2BVOC4Ybn258F4E0KaRMHofZorg%2F6lM1xNYWzgvpaqL1%2Bc3fWdbcXndrRnG16C3Wfm93NrfG5TtfhgAVkDt83ootc1fQ65BclxBxpFguUyGQxW2wzhBYT1qG3ZaqWBC8kRJTGL3dU9TNH0k4Cm4x5ZCiuAaRPfpVYpHMZbGbp63Q81ujlOIufdprnEe1QB8yBmCddfBC81hfQXtOKlV5%2BrdWwSRsls2cWuq4Xx1re3d9Z8vngIURWqmCVUf6t2KleBfPI0jvwJdPykuF8qvEDwz7OEXaZ%2FCBOny7ORTVnbDuhl9UnSKEoylosC9CkVV%2FFhtv9AKCiZFueMTpr4MEOifF5YQIXMMjS%2F8AGOqUBPFSM8JUZcrFU95ElUJ3zPRTANxH%2FkhOgh9RRthWHhsAwA%2Fl2KCVcfxONfVTreVjT0sVWfkXdJcIIIksudFgE%2B3qFh4Cx4w1CkaHTryiB%2FDyAod8%2FyAL2icuaNfLV%2B0OSYhJ68hWb4Jz8EAy45pJ8pkc%2BEsG57k6JD%2B7a%2BWT8f117wisz96WHSf6t9ZImVR3PXJ%2FFGFh5wCqW%2BfO%2FnAkXk2RpF%2BdO&X-Amz-Signature=5a49bbd8e68dcad746b97dfa7387efca27b5fa8b7ef8c524a2a4b96947535fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK23QL4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBV7aufk2PcNTG%2FVqE4n0P%2FSjdDcjJUY%2BQ0UfWECdJbEAiEAwSnNTzD2ItxA02Jtx88Zq8Q0lZIY66f%2BUYx%2FGpTWXv4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcNCXCXeoeOLGQwJSrcAyhS2dIDqaBkXbwhjKQADEs65TrbwSxdmc%2BevddUwt8yt4uFKaayk47EK28VtLT7W0IySlJBXYN2AscXXO5xCAv0jpKC%2BbXo2B4IAaPrO0cp%2FXb8QX8m6R6PsydRo2BGSKNQ%2B4wUaVOOcJtNAWgnifax4OvyRO4miQYLy%2FPPJPadRWcLJy6KQsyGvucYclhCsFuGlLWLr50TU6mPAGpLWw1OF8ULT8y0zhEWQWipsLs%2B9zw3yPtuzuC813kwiZSP3PZ5Ujzxmgi4hzZAb7ott3YrsveL7UI9%2BVOC4Ybn258F4E0KaRMHofZorg%2F6lM1xNYWzgvpaqL1%2Bc3fWdbcXndrRnG16C3Wfm93NrfG5TtfhgAVkDt83ootc1fQ65BclxBxpFguUyGQxW2wzhBYT1qG3ZaqWBC8kRJTGL3dU9TNH0k4Cm4x5ZCiuAaRPfpVYpHMZbGbp63Q81ujlOIufdprnEe1QB8yBmCddfBC81hfQXtOKlV5%2BrdWwSRsls2cWuq4Xx1re3d9Z8vngIURWqmCVUf6t2KleBfPI0jvwJdPykuF8qvEDwz7OEXaZ%2FCBOny7ORTVnbDuhl9UnSKEoylosC9CkVV%2FFhtv9AKCiZFueMTpr4MEOifF5YQIXMMjS%2F8AGOqUBPFSM8JUZcrFU95ElUJ3zPRTANxH%2FkhOgh9RRthWHhsAwA%2Fl2KCVcfxONfVTreVjT0sVWfkXdJcIIIksudFgE%2B3qFh4Cx4w1CkaHTryiB%2FDyAod8%2FyAL2icuaNfLV%2B0OSYhJ68hWb4Jz8EAy45pJ8pkc%2BEsG57k6JD%2B7a%2BWT8f117wisz96WHSf6t9ZImVR3PXJ%2FFGFh5wCqW%2BfO%2FnAkXk2RpF%2BdO&X-Amz-Signature=dc5b74a5a489cc310cc969f92b599a396325ab12247e3809012fada90e5f701f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

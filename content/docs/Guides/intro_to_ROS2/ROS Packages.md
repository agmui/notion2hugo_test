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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFETT5JB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmp%2FyauKKFWFjiO9SQD8ozg908k0xSYo2RMIIWS4iDcwIgKzqDvKDtCMQ%2Fl%2BHVOaGs%2BwAK53Ol9cV91hnSwynPpScqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvucr%2FVp8I2G20MSyrcA9PS30YPc5jGB7S4nQSiXzb9rxqaXQDX1NcG%2F4ENvouWuBr0fqA62ZadB3efGeX79cBCm4iJ17V0Bjgk%2B1d3WmIVpTZEtmiDpe%2BUzPzirh356Ek8Jyxh%2BO2GtMVOGRtXzyVDlSqH3ndCGh1ulKqLSzYqkE%2FFegK0F%2BnOH0we9rcIhj%2BfPPqOCIGs%2BXcXw4qVQhMjhrelgiiX%2FacOKSFV8vlk0nGQIRnXig9yCpe7i%2F%2FmrUh1fKsQf8MHw0lKrGbJizoh2fZzzneFYdpxJ7xhUw6T3Rvm3aejjrO8RAaeGYEsSofEvK4FpiojG7Loivtlm2ha%2Fj4oEP5kCqtg7s9j2S4zcUNm9wsVy8PYr2gHiLT0He%2B4S0JgcoAEFgs8hOLWdolFyceABpy15mucDpB2M9ZMDCGvpgDVoEZ1h%2BFHhLm47y9RBp%2FR9lrFFmW19L8duLmi%2BemlsIrZf1hrI00lLI%2F0oTQd1mpLnk70L1ReK5QseAnEdt0JkqtM%2Bub6mU5ieof86R0NwNBwBsa7bswrqUQYO0hGfkXhT40M53qqAOy1VtAs6%2BYccFzqbGscyPdHsZmM1XLM9qR%2B%2F3f8SWnhYhoMQHRSk6hvckbHOaUaePSCALVBDDQMzoYpIj3cMMCvtcEGOqUBYRUKqGlzTg31yHXVcu%2Bc1oaPZFwYqxjSAHbe0u6DeTcj4K00Y12HjgeVdLAm%2BxcoUjuITIwXJbmyAISQzf7c5WRbfiMO%2B8A41pDGgJwq9o9jViuOFs3wjYlm5qUWqRvDwToX8o9O5GOONQUlh33%2B5Z95ZWE1bot%2Bm7ubqjo81tKyycUFNfT5n%2B%2F6O4v0cbW4njBo5yWoJRCmduCKMh4xj5K7CLN7&X-Amz-Signature=3e62b9db1299a67d204c74bc1cc4412ee1630565f9d12e89b2f3972d7979ef92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFETT5JB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmp%2FyauKKFWFjiO9SQD8ozg908k0xSYo2RMIIWS4iDcwIgKzqDvKDtCMQ%2Fl%2BHVOaGs%2BwAK53Ol9cV91hnSwynPpScqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvucr%2FVp8I2G20MSyrcA9PS30YPc5jGB7S4nQSiXzb9rxqaXQDX1NcG%2F4ENvouWuBr0fqA62ZadB3efGeX79cBCm4iJ17V0Bjgk%2B1d3WmIVpTZEtmiDpe%2BUzPzirh356Ek8Jyxh%2BO2GtMVOGRtXzyVDlSqH3ndCGh1ulKqLSzYqkE%2FFegK0F%2BnOH0we9rcIhj%2BfPPqOCIGs%2BXcXw4qVQhMjhrelgiiX%2FacOKSFV8vlk0nGQIRnXig9yCpe7i%2F%2FmrUh1fKsQf8MHw0lKrGbJizoh2fZzzneFYdpxJ7xhUw6T3Rvm3aejjrO8RAaeGYEsSofEvK4FpiojG7Loivtlm2ha%2Fj4oEP5kCqtg7s9j2S4zcUNm9wsVy8PYr2gHiLT0He%2B4S0JgcoAEFgs8hOLWdolFyceABpy15mucDpB2M9ZMDCGvpgDVoEZ1h%2BFHhLm47y9RBp%2FR9lrFFmW19L8duLmi%2BemlsIrZf1hrI00lLI%2F0oTQd1mpLnk70L1ReK5QseAnEdt0JkqtM%2Bub6mU5ieof86R0NwNBwBsa7bswrqUQYO0hGfkXhT40M53qqAOy1VtAs6%2BYccFzqbGscyPdHsZmM1XLM9qR%2B%2F3f8SWnhYhoMQHRSk6hvckbHOaUaePSCALVBDDQMzoYpIj3cMMCvtcEGOqUBYRUKqGlzTg31yHXVcu%2Bc1oaPZFwYqxjSAHbe0u6DeTcj4K00Y12HjgeVdLAm%2BxcoUjuITIwXJbmyAISQzf7c5WRbfiMO%2B8A41pDGgJwq9o9jViuOFs3wjYlm5qUWqRvDwToX8o9O5GOONQUlh33%2B5Z95ZWE1bot%2Bm7ubqjo81tKyycUFNfT5n%2B%2F6O4v0cbW4njBo5yWoJRCmduCKMh4xj5K7CLN7&X-Amz-Signature=071c2a51de9b482a313e80509829357267c8014c7acd4ffb5af488b13ea5d1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFETT5JB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmp%2FyauKKFWFjiO9SQD8ozg908k0xSYo2RMIIWS4iDcwIgKzqDvKDtCMQ%2Fl%2BHVOaGs%2BwAK53Ol9cV91hnSwynPpScqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvucr%2FVp8I2G20MSyrcA9PS30YPc5jGB7S4nQSiXzb9rxqaXQDX1NcG%2F4ENvouWuBr0fqA62ZadB3efGeX79cBCm4iJ17V0Bjgk%2B1d3WmIVpTZEtmiDpe%2BUzPzirh356Ek8Jyxh%2BO2GtMVOGRtXzyVDlSqH3ndCGh1ulKqLSzYqkE%2FFegK0F%2BnOH0we9rcIhj%2BfPPqOCIGs%2BXcXw4qVQhMjhrelgiiX%2FacOKSFV8vlk0nGQIRnXig9yCpe7i%2F%2FmrUh1fKsQf8MHw0lKrGbJizoh2fZzzneFYdpxJ7xhUw6T3Rvm3aejjrO8RAaeGYEsSofEvK4FpiojG7Loivtlm2ha%2Fj4oEP5kCqtg7s9j2S4zcUNm9wsVy8PYr2gHiLT0He%2B4S0JgcoAEFgs8hOLWdolFyceABpy15mucDpB2M9ZMDCGvpgDVoEZ1h%2BFHhLm47y9RBp%2FR9lrFFmW19L8duLmi%2BemlsIrZf1hrI00lLI%2F0oTQd1mpLnk70L1ReK5QseAnEdt0JkqtM%2Bub6mU5ieof86R0NwNBwBsa7bswrqUQYO0hGfkXhT40M53qqAOy1VtAs6%2BYccFzqbGscyPdHsZmM1XLM9qR%2B%2F3f8SWnhYhoMQHRSk6hvckbHOaUaePSCALVBDDQMzoYpIj3cMMCvtcEGOqUBYRUKqGlzTg31yHXVcu%2Bc1oaPZFwYqxjSAHbe0u6DeTcj4K00Y12HjgeVdLAm%2BxcoUjuITIwXJbmyAISQzf7c5WRbfiMO%2B8A41pDGgJwq9o9jViuOFs3wjYlm5qUWqRvDwToX8o9O5GOONQUlh33%2B5Z95ZWE1bot%2Bm7ubqjo81tKyycUFNfT5n%2B%2F6O4v0cbW4njBo5yWoJRCmduCKMh4xj5K7CLN7&X-Amz-Signature=bb717f9129f94f5731469590b715036a3f561562040a627556ac009cd0ea2fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFETT5JB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmp%2FyauKKFWFjiO9SQD8ozg908k0xSYo2RMIIWS4iDcwIgKzqDvKDtCMQ%2Fl%2BHVOaGs%2BwAK53Ol9cV91hnSwynPpScqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvucr%2FVp8I2G20MSyrcA9PS30YPc5jGB7S4nQSiXzb9rxqaXQDX1NcG%2F4ENvouWuBr0fqA62ZadB3efGeX79cBCm4iJ17V0Bjgk%2B1d3WmIVpTZEtmiDpe%2BUzPzirh356Ek8Jyxh%2BO2GtMVOGRtXzyVDlSqH3ndCGh1ulKqLSzYqkE%2FFegK0F%2BnOH0we9rcIhj%2BfPPqOCIGs%2BXcXw4qVQhMjhrelgiiX%2FacOKSFV8vlk0nGQIRnXig9yCpe7i%2F%2FmrUh1fKsQf8MHw0lKrGbJizoh2fZzzneFYdpxJ7xhUw6T3Rvm3aejjrO8RAaeGYEsSofEvK4FpiojG7Loivtlm2ha%2Fj4oEP5kCqtg7s9j2S4zcUNm9wsVy8PYr2gHiLT0He%2B4S0JgcoAEFgs8hOLWdolFyceABpy15mucDpB2M9ZMDCGvpgDVoEZ1h%2BFHhLm47y9RBp%2FR9lrFFmW19L8duLmi%2BemlsIrZf1hrI00lLI%2F0oTQd1mpLnk70L1ReK5QseAnEdt0JkqtM%2Bub6mU5ieof86R0NwNBwBsa7bswrqUQYO0hGfkXhT40M53qqAOy1VtAs6%2BYccFzqbGscyPdHsZmM1XLM9qR%2B%2F3f8SWnhYhoMQHRSk6hvckbHOaUaePSCALVBDDQMzoYpIj3cMMCvtcEGOqUBYRUKqGlzTg31yHXVcu%2Bc1oaPZFwYqxjSAHbe0u6DeTcj4K00Y12HjgeVdLAm%2BxcoUjuITIwXJbmyAISQzf7c5WRbfiMO%2B8A41pDGgJwq9o9jViuOFs3wjYlm5qUWqRvDwToX8o9O5GOONQUlh33%2B5Z95ZWE1bot%2Bm7ubqjo81tKyycUFNfT5n%2B%2F6O4v0cbW4njBo5yWoJRCmduCKMh4xj5K7CLN7&X-Amz-Signature=d8d4548af55b9d0f135e21258cc94c9f526ed23bc747e2a209d5c876a1f2801e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFETT5JB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmp%2FyauKKFWFjiO9SQD8ozg908k0xSYo2RMIIWS4iDcwIgKzqDvKDtCMQ%2Fl%2BHVOaGs%2BwAK53Ol9cV91hnSwynPpScqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvucr%2FVp8I2G20MSyrcA9PS30YPc5jGB7S4nQSiXzb9rxqaXQDX1NcG%2F4ENvouWuBr0fqA62ZadB3efGeX79cBCm4iJ17V0Bjgk%2B1d3WmIVpTZEtmiDpe%2BUzPzirh356Ek8Jyxh%2BO2GtMVOGRtXzyVDlSqH3ndCGh1ulKqLSzYqkE%2FFegK0F%2BnOH0we9rcIhj%2BfPPqOCIGs%2BXcXw4qVQhMjhrelgiiX%2FacOKSFV8vlk0nGQIRnXig9yCpe7i%2F%2FmrUh1fKsQf8MHw0lKrGbJizoh2fZzzneFYdpxJ7xhUw6T3Rvm3aejjrO8RAaeGYEsSofEvK4FpiojG7Loivtlm2ha%2Fj4oEP5kCqtg7s9j2S4zcUNm9wsVy8PYr2gHiLT0He%2B4S0JgcoAEFgs8hOLWdolFyceABpy15mucDpB2M9ZMDCGvpgDVoEZ1h%2BFHhLm47y9RBp%2FR9lrFFmW19L8duLmi%2BemlsIrZf1hrI00lLI%2F0oTQd1mpLnk70L1ReK5QseAnEdt0JkqtM%2Bub6mU5ieof86R0NwNBwBsa7bswrqUQYO0hGfkXhT40M53qqAOy1VtAs6%2BYccFzqbGscyPdHsZmM1XLM9qR%2B%2F3f8SWnhYhoMQHRSk6hvckbHOaUaePSCALVBDDQMzoYpIj3cMMCvtcEGOqUBYRUKqGlzTg31yHXVcu%2Bc1oaPZFwYqxjSAHbe0u6DeTcj4K00Y12HjgeVdLAm%2BxcoUjuITIwXJbmyAISQzf7c5WRbfiMO%2B8A41pDGgJwq9o9jViuOFs3wjYlm5qUWqRvDwToX8o9O5GOONQUlh33%2B5Z95ZWE1bot%2Bm7ubqjo81tKyycUFNfT5n%2B%2F6O4v0cbW4njBo5yWoJRCmduCKMh4xj5K7CLN7&X-Amz-Signature=cc29eb4ea6391de858779c18f50102d562418ffffb3a36d4581fadafaf29c3dd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFETT5JB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmp%2FyauKKFWFjiO9SQD8ozg908k0xSYo2RMIIWS4iDcwIgKzqDvKDtCMQ%2Fl%2BHVOaGs%2BwAK53Ol9cV91hnSwynPpScqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvucr%2FVp8I2G20MSyrcA9PS30YPc5jGB7S4nQSiXzb9rxqaXQDX1NcG%2F4ENvouWuBr0fqA62ZadB3efGeX79cBCm4iJ17V0Bjgk%2B1d3WmIVpTZEtmiDpe%2BUzPzirh356Ek8Jyxh%2BO2GtMVOGRtXzyVDlSqH3ndCGh1ulKqLSzYqkE%2FFegK0F%2BnOH0we9rcIhj%2BfPPqOCIGs%2BXcXw4qVQhMjhrelgiiX%2FacOKSFV8vlk0nGQIRnXig9yCpe7i%2F%2FmrUh1fKsQf8MHw0lKrGbJizoh2fZzzneFYdpxJ7xhUw6T3Rvm3aejjrO8RAaeGYEsSofEvK4FpiojG7Loivtlm2ha%2Fj4oEP5kCqtg7s9j2S4zcUNm9wsVy8PYr2gHiLT0He%2B4S0JgcoAEFgs8hOLWdolFyceABpy15mucDpB2M9ZMDCGvpgDVoEZ1h%2BFHhLm47y9RBp%2FR9lrFFmW19L8duLmi%2BemlsIrZf1hrI00lLI%2F0oTQd1mpLnk70L1ReK5QseAnEdt0JkqtM%2Bub6mU5ieof86R0NwNBwBsa7bswrqUQYO0hGfkXhT40M53qqAOy1VtAs6%2BYccFzqbGscyPdHsZmM1XLM9qR%2B%2F3f8SWnhYhoMQHRSk6hvckbHOaUaePSCALVBDDQMzoYpIj3cMMCvtcEGOqUBYRUKqGlzTg31yHXVcu%2Bc1oaPZFwYqxjSAHbe0u6DeTcj4K00Y12HjgeVdLAm%2BxcoUjuITIwXJbmyAISQzf7c5WRbfiMO%2B8A41pDGgJwq9o9jViuOFs3wjYlm5qUWqRvDwToX8o9O5GOONQUlh33%2B5Z95ZWE1bot%2Bm7ubqjo81tKyycUFNfT5n%2B%2F6O4v0cbW4njBo5yWoJRCmduCKMh4xj5K7CLN7&X-Amz-Signature=16442cd84931e590f278105a416ddbdfdbc40a2d11ad80db555bb268875e2d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFETT5JB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmp%2FyauKKFWFjiO9SQD8ozg908k0xSYo2RMIIWS4iDcwIgKzqDvKDtCMQ%2Fl%2BHVOaGs%2BwAK53Ol9cV91hnSwynPpScqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvucr%2FVp8I2G20MSyrcA9PS30YPc5jGB7S4nQSiXzb9rxqaXQDX1NcG%2F4ENvouWuBr0fqA62ZadB3efGeX79cBCm4iJ17V0Bjgk%2B1d3WmIVpTZEtmiDpe%2BUzPzirh356Ek8Jyxh%2BO2GtMVOGRtXzyVDlSqH3ndCGh1ulKqLSzYqkE%2FFegK0F%2BnOH0we9rcIhj%2BfPPqOCIGs%2BXcXw4qVQhMjhrelgiiX%2FacOKSFV8vlk0nGQIRnXig9yCpe7i%2F%2FmrUh1fKsQf8MHw0lKrGbJizoh2fZzzneFYdpxJ7xhUw6T3Rvm3aejjrO8RAaeGYEsSofEvK4FpiojG7Loivtlm2ha%2Fj4oEP5kCqtg7s9j2S4zcUNm9wsVy8PYr2gHiLT0He%2B4S0JgcoAEFgs8hOLWdolFyceABpy15mucDpB2M9ZMDCGvpgDVoEZ1h%2BFHhLm47y9RBp%2FR9lrFFmW19L8duLmi%2BemlsIrZf1hrI00lLI%2F0oTQd1mpLnk70L1ReK5QseAnEdt0JkqtM%2Bub6mU5ieof86R0NwNBwBsa7bswrqUQYO0hGfkXhT40M53qqAOy1VtAs6%2BYccFzqbGscyPdHsZmM1XLM9qR%2B%2F3f8SWnhYhoMQHRSk6hvckbHOaUaePSCALVBDDQMzoYpIj3cMMCvtcEGOqUBYRUKqGlzTg31yHXVcu%2Bc1oaPZFwYqxjSAHbe0u6DeTcj4K00Y12HjgeVdLAm%2BxcoUjuITIwXJbmyAISQzf7c5WRbfiMO%2B8A41pDGgJwq9o9jViuOFs3wjYlm5qUWqRvDwToX8o9O5GOONQUlh33%2B5Z95ZWE1bot%2Bm7ubqjo81tKyycUFNfT5n%2B%2F6O4v0cbW4njBo5yWoJRCmduCKMh4xj5K7CLN7&X-Amz-Signature=400a4a153123ec638ade40265ff6e9d1b1dead4d44c610ced021ffa5c3ded156&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

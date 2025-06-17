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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQY5MSZ3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtXA5s1utbvKsRKBWcwWFGFTodw%2FfmKwcyhQIkgKTe3AiEA1AT8ehez1RvUkXGVhqw%2B9n3MPUX2HRgN%2B3PujqROF%2B4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCVbnR%2FMWVT3qdJB8yrcAz3UMrJRiuxh8qC3RFYghafrz40eej3ZNgrPUGn%2FxNiO0i56F2k8RyDydiHtD5KCWNS3aALvLZ%2BdKe0s1DXakU2irWEhRJtRPmK5nK7TiWiFZhiA6CwZ5MqynyZvkybrU%2FBizh4cFLVNhFprOKbakoi8VN8FYVKWqv3%2BpxzhrTEAcJBWYyOHRL7DKUIlz0zjLaFn%2BnZmrCVIDPpfRABHrQPPehbnXERVb7Sw20DkSC6G8erBtJ0mIvcA3OdAvyaa1YSCmZBsS2EfBPxOCtFH4Jfb0cuToRgb55N2L3tIyhX7QmWrzrJYqACL1ba7lXAxg%2BsfMG8PpPJl39ox77xyFcpSXW4T140GSkBsXFZNnIMJxix3t07twQJMjq2f72cEDDVlQpm4PqQHAUd6BltVpmerO5j%2BHOyohid9STO7AUsKmeyP7dTVaOuXSKSGK%2BSCWTqYokAifr3%2FzpZkiKeGXXiDQFvIt62qNy0TFZjJGQLIEvXJn0fqsJzx7Alp8WNl%2FQIqkdL36J7fpuzdptpJCXE0i8wxX6iQSRQpW%2BhR1Bgith2Bj93vnQUeRGz3KCjl9WjqvB6NtpRppc%2FaEdptor78HWnLz%2BgV%2FOZBMijDwAHICRdrFp7sxDyIE%2BaiMN%2BLw8IGOqUBd59DvJdSCYnkUtgQ48i2KuPduaPANBtST47ru%2BmTSBbpjzgnhfoDpQYohEtHiOVpVCrFl9vEAHajKa8YSOi1YIYcPuItScFAvZptpyb7PiWdLK2z619GzjIThXMUHP24pmaEFLWgPeVULHyaLlYUL07zQR2E2ZXjqPgsNNW0q%2F%2BZp54GVmfuZQs6zTKjE0DrYpaqo5VAtQVhhFzFcFXYyI3jAssP&X-Amz-Signature=aa5c27ab429a07ffe85ded5e69108e3f196a9f1380aff80ed8eb4ee54a77776b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQY5MSZ3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtXA5s1utbvKsRKBWcwWFGFTodw%2FfmKwcyhQIkgKTe3AiEA1AT8ehez1RvUkXGVhqw%2B9n3MPUX2HRgN%2B3PujqROF%2B4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCVbnR%2FMWVT3qdJB8yrcAz3UMrJRiuxh8qC3RFYghafrz40eej3ZNgrPUGn%2FxNiO0i56F2k8RyDydiHtD5KCWNS3aALvLZ%2BdKe0s1DXakU2irWEhRJtRPmK5nK7TiWiFZhiA6CwZ5MqynyZvkybrU%2FBizh4cFLVNhFprOKbakoi8VN8FYVKWqv3%2BpxzhrTEAcJBWYyOHRL7DKUIlz0zjLaFn%2BnZmrCVIDPpfRABHrQPPehbnXERVb7Sw20DkSC6G8erBtJ0mIvcA3OdAvyaa1YSCmZBsS2EfBPxOCtFH4Jfb0cuToRgb55N2L3tIyhX7QmWrzrJYqACL1ba7lXAxg%2BsfMG8PpPJl39ox77xyFcpSXW4T140GSkBsXFZNnIMJxix3t07twQJMjq2f72cEDDVlQpm4PqQHAUd6BltVpmerO5j%2BHOyohid9STO7AUsKmeyP7dTVaOuXSKSGK%2BSCWTqYokAifr3%2FzpZkiKeGXXiDQFvIt62qNy0TFZjJGQLIEvXJn0fqsJzx7Alp8WNl%2FQIqkdL36J7fpuzdptpJCXE0i8wxX6iQSRQpW%2BhR1Bgith2Bj93vnQUeRGz3KCjl9WjqvB6NtpRppc%2FaEdptor78HWnLz%2BgV%2FOZBMijDwAHICRdrFp7sxDyIE%2BaiMN%2BLw8IGOqUBd59DvJdSCYnkUtgQ48i2KuPduaPANBtST47ru%2BmTSBbpjzgnhfoDpQYohEtHiOVpVCrFl9vEAHajKa8YSOi1YIYcPuItScFAvZptpyb7PiWdLK2z619GzjIThXMUHP24pmaEFLWgPeVULHyaLlYUL07zQR2E2ZXjqPgsNNW0q%2F%2BZp54GVmfuZQs6zTKjE0DrYpaqo5VAtQVhhFzFcFXYyI3jAssP&X-Amz-Signature=ce99fa1df559531ce9f8ce4d091df255909e6b2bf65883582c8f98292a49beaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQY5MSZ3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtXA5s1utbvKsRKBWcwWFGFTodw%2FfmKwcyhQIkgKTe3AiEA1AT8ehez1RvUkXGVhqw%2B9n3MPUX2HRgN%2B3PujqROF%2B4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCVbnR%2FMWVT3qdJB8yrcAz3UMrJRiuxh8qC3RFYghafrz40eej3ZNgrPUGn%2FxNiO0i56F2k8RyDydiHtD5KCWNS3aALvLZ%2BdKe0s1DXakU2irWEhRJtRPmK5nK7TiWiFZhiA6CwZ5MqynyZvkybrU%2FBizh4cFLVNhFprOKbakoi8VN8FYVKWqv3%2BpxzhrTEAcJBWYyOHRL7DKUIlz0zjLaFn%2BnZmrCVIDPpfRABHrQPPehbnXERVb7Sw20DkSC6G8erBtJ0mIvcA3OdAvyaa1YSCmZBsS2EfBPxOCtFH4Jfb0cuToRgb55N2L3tIyhX7QmWrzrJYqACL1ba7lXAxg%2BsfMG8PpPJl39ox77xyFcpSXW4T140GSkBsXFZNnIMJxix3t07twQJMjq2f72cEDDVlQpm4PqQHAUd6BltVpmerO5j%2BHOyohid9STO7AUsKmeyP7dTVaOuXSKSGK%2BSCWTqYokAifr3%2FzpZkiKeGXXiDQFvIt62qNy0TFZjJGQLIEvXJn0fqsJzx7Alp8WNl%2FQIqkdL36J7fpuzdptpJCXE0i8wxX6iQSRQpW%2BhR1Bgith2Bj93vnQUeRGz3KCjl9WjqvB6NtpRppc%2FaEdptor78HWnLz%2BgV%2FOZBMijDwAHICRdrFp7sxDyIE%2BaiMN%2BLw8IGOqUBd59DvJdSCYnkUtgQ48i2KuPduaPANBtST47ru%2BmTSBbpjzgnhfoDpQYohEtHiOVpVCrFl9vEAHajKa8YSOi1YIYcPuItScFAvZptpyb7PiWdLK2z619GzjIThXMUHP24pmaEFLWgPeVULHyaLlYUL07zQR2E2ZXjqPgsNNW0q%2F%2BZp54GVmfuZQs6zTKjE0DrYpaqo5VAtQVhhFzFcFXYyI3jAssP&X-Amz-Signature=0bc294d8e656450a088d7abc0315006f909937f24cf3f73c3a1f1ed6c1aa7506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQY5MSZ3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtXA5s1utbvKsRKBWcwWFGFTodw%2FfmKwcyhQIkgKTe3AiEA1AT8ehez1RvUkXGVhqw%2B9n3MPUX2HRgN%2B3PujqROF%2B4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCVbnR%2FMWVT3qdJB8yrcAz3UMrJRiuxh8qC3RFYghafrz40eej3ZNgrPUGn%2FxNiO0i56F2k8RyDydiHtD5KCWNS3aALvLZ%2BdKe0s1DXakU2irWEhRJtRPmK5nK7TiWiFZhiA6CwZ5MqynyZvkybrU%2FBizh4cFLVNhFprOKbakoi8VN8FYVKWqv3%2BpxzhrTEAcJBWYyOHRL7DKUIlz0zjLaFn%2BnZmrCVIDPpfRABHrQPPehbnXERVb7Sw20DkSC6G8erBtJ0mIvcA3OdAvyaa1YSCmZBsS2EfBPxOCtFH4Jfb0cuToRgb55N2L3tIyhX7QmWrzrJYqACL1ba7lXAxg%2BsfMG8PpPJl39ox77xyFcpSXW4T140GSkBsXFZNnIMJxix3t07twQJMjq2f72cEDDVlQpm4PqQHAUd6BltVpmerO5j%2BHOyohid9STO7AUsKmeyP7dTVaOuXSKSGK%2BSCWTqYokAifr3%2FzpZkiKeGXXiDQFvIt62qNy0TFZjJGQLIEvXJn0fqsJzx7Alp8WNl%2FQIqkdL36J7fpuzdptpJCXE0i8wxX6iQSRQpW%2BhR1Bgith2Bj93vnQUeRGz3KCjl9WjqvB6NtpRppc%2FaEdptor78HWnLz%2BgV%2FOZBMijDwAHICRdrFp7sxDyIE%2BaiMN%2BLw8IGOqUBd59DvJdSCYnkUtgQ48i2KuPduaPANBtST47ru%2BmTSBbpjzgnhfoDpQYohEtHiOVpVCrFl9vEAHajKa8YSOi1YIYcPuItScFAvZptpyb7PiWdLK2z619GzjIThXMUHP24pmaEFLWgPeVULHyaLlYUL07zQR2E2ZXjqPgsNNW0q%2F%2BZp54GVmfuZQs6zTKjE0DrYpaqo5VAtQVhhFzFcFXYyI3jAssP&X-Amz-Signature=3ed0edec3bfae73be24362bc38e50d2d4243b8c2d472771013aaadd9f3045482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQY5MSZ3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtXA5s1utbvKsRKBWcwWFGFTodw%2FfmKwcyhQIkgKTe3AiEA1AT8ehez1RvUkXGVhqw%2B9n3MPUX2HRgN%2B3PujqROF%2B4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCVbnR%2FMWVT3qdJB8yrcAz3UMrJRiuxh8qC3RFYghafrz40eej3ZNgrPUGn%2FxNiO0i56F2k8RyDydiHtD5KCWNS3aALvLZ%2BdKe0s1DXakU2irWEhRJtRPmK5nK7TiWiFZhiA6CwZ5MqynyZvkybrU%2FBizh4cFLVNhFprOKbakoi8VN8FYVKWqv3%2BpxzhrTEAcJBWYyOHRL7DKUIlz0zjLaFn%2BnZmrCVIDPpfRABHrQPPehbnXERVb7Sw20DkSC6G8erBtJ0mIvcA3OdAvyaa1YSCmZBsS2EfBPxOCtFH4Jfb0cuToRgb55N2L3tIyhX7QmWrzrJYqACL1ba7lXAxg%2BsfMG8PpPJl39ox77xyFcpSXW4T140GSkBsXFZNnIMJxix3t07twQJMjq2f72cEDDVlQpm4PqQHAUd6BltVpmerO5j%2BHOyohid9STO7AUsKmeyP7dTVaOuXSKSGK%2BSCWTqYokAifr3%2FzpZkiKeGXXiDQFvIt62qNy0TFZjJGQLIEvXJn0fqsJzx7Alp8WNl%2FQIqkdL36J7fpuzdptpJCXE0i8wxX6iQSRQpW%2BhR1Bgith2Bj93vnQUeRGz3KCjl9WjqvB6NtpRppc%2FaEdptor78HWnLz%2BgV%2FOZBMijDwAHICRdrFp7sxDyIE%2BaiMN%2BLw8IGOqUBd59DvJdSCYnkUtgQ48i2KuPduaPANBtST47ru%2BmTSBbpjzgnhfoDpQYohEtHiOVpVCrFl9vEAHajKa8YSOi1YIYcPuItScFAvZptpyb7PiWdLK2z619GzjIThXMUHP24pmaEFLWgPeVULHyaLlYUL07zQR2E2ZXjqPgsNNW0q%2F%2BZp54GVmfuZQs6zTKjE0DrYpaqo5VAtQVhhFzFcFXYyI3jAssP&X-Amz-Signature=cf0135f0d008ff3a5d20932577ebb6cb87253fd6b39bdbccd86f5c17c1ddae94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQY5MSZ3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtXA5s1utbvKsRKBWcwWFGFTodw%2FfmKwcyhQIkgKTe3AiEA1AT8ehez1RvUkXGVhqw%2B9n3MPUX2HRgN%2B3PujqROF%2B4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCVbnR%2FMWVT3qdJB8yrcAz3UMrJRiuxh8qC3RFYghafrz40eej3ZNgrPUGn%2FxNiO0i56F2k8RyDydiHtD5KCWNS3aALvLZ%2BdKe0s1DXakU2irWEhRJtRPmK5nK7TiWiFZhiA6CwZ5MqynyZvkybrU%2FBizh4cFLVNhFprOKbakoi8VN8FYVKWqv3%2BpxzhrTEAcJBWYyOHRL7DKUIlz0zjLaFn%2BnZmrCVIDPpfRABHrQPPehbnXERVb7Sw20DkSC6G8erBtJ0mIvcA3OdAvyaa1YSCmZBsS2EfBPxOCtFH4Jfb0cuToRgb55N2L3tIyhX7QmWrzrJYqACL1ba7lXAxg%2BsfMG8PpPJl39ox77xyFcpSXW4T140GSkBsXFZNnIMJxix3t07twQJMjq2f72cEDDVlQpm4PqQHAUd6BltVpmerO5j%2BHOyohid9STO7AUsKmeyP7dTVaOuXSKSGK%2BSCWTqYokAifr3%2FzpZkiKeGXXiDQFvIt62qNy0TFZjJGQLIEvXJn0fqsJzx7Alp8WNl%2FQIqkdL36J7fpuzdptpJCXE0i8wxX6iQSRQpW%2BhR1Bgith2Bj93vnQUeRGz3KCjl9WjqvB6NtpRppc%2FaEdptor78HWnLz%2BgV%2FOZBMijDwAHICRdrFp7sxDyIE%2BaiMN%2BLw8IGOqUBd59DvJdSCYnkUtgQ48i2KuPduaPANBtST47ru%2BmTSBbpjzgnhfoDpQYohEtHiOVpVCrFl9vEAHajKa8YSOi1YIYcPuItScFAvZptpyb7PiWdLK2z619GzjIThXMUHP24pmaEFLWgPeVULHyaLlYUL07zQR2E2ZXjqPgsNNW0q%2F%2BZp54GVmfuZQs6zTKjE0DrYpaqo5VAtQVhhFzFcFXYyI3jAssP&X-Amz-Signature=1562409a7c2d0eb07499723c31ab88c869e019740de2339f388bafde2be351d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQY5MSZ3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtXA5s1utbvKsRKBWcwWFGFTodw%2FfmKwcyhQIkgKTe3AiEA1AT8ehez1RvUkXGVhqw%2B9n3MPUX2HRgN%2B3PujqROF%2B4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCVbnR%2FMWVT3qdJB8yrcAz3UMrJRiuxh8qC3RFYghafrz40eej3ZNgrPUGn%2FxNiO0i56F2k8RyDydiHtD5KCWNS3aALvLZ%2BdKe0s1DXakU2irWEhRJtRPmK5nK7TiWiFZhiA6CwZ5MqynyZvkybrU%2FBizh4cFLVNhFprOKbakoi8VN8FYVKWqv3%2BpxzhrTEAcJBWYyOHRL7DKUIlz0zjLaFn%2BnZmrCVIDPpfRABHrQPPehbnXERVb7Sw20DkSC6G8erBtJ0mIvcA3OdAvyaa1YSCmZBsS2EfBPxOCtFH4Jfb0cuToRgb55N2L3tIyhX7QmWrzrJYqACL1ba7lXAxg%2BsfMG8PpPJl39ox77xyFcpSXW4T140GSkBsXFZNnIMJxix3t07twQJMjq2f72cEDDVlQpm4PqQHAUd6BltVpmerO5j%2BHOyohid9STO7AUsKmeyP7dTVaOuXSKSGK%2BSCWTqYokAifr3%2FzpZkiKeGXXiDQFvIt62qNy0TFZjJGQLIEvXJn0fqsJzx7Alp8WNl%2FQIqkdL36J7fpuzdptpJCXE0i8wxX6iQSRQpW%2BhR1Bgith2Bj93vnQUeRGz3KCjl9WjqvB6NtpRppc%2FaEdptor78HWnLz%2BgV%2FOZBMijDwAHICRdrFp7sxDyIE%2BaiMN%2BLw8IGOqUBd59DvJdSCYnkUtgQ48i2KuPduaPANBtST47ru%2BmTSBbpjzgnhfoDpQYohEtHiOVpVCrFl9vEAHajKa8YSOi1YIYcPuItScFAvZptpyb7PiWdLK2z619GzjIThXMUHP24pmaEFLWgPeVULHyaLlYUL07zQR2E2ZXjqPgsNNW0q%2F%2BZp54GVmfuZQs6zTKjE0DrYpaqo5VAtQVhhFzFcFXYyI3jAssP&X-Amz-Signature=f88c780282ca76643d5bf45af95b6d5230eedc6ac5163b7e717b0e4091b9160b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

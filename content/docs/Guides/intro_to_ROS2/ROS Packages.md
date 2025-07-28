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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2QWMM55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCQChUnTLWoEkyLT6vjnkTl0obHWoVTim%2FAdoSfcMEfowIgCp5qjR7GD7wnNNldDw63VofzBcLF%2BW58xkaSkXEbQD0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNWNSJLaQkqUXtvnircA1FX9jg4B2blwv3lR7okBXYdHrwkaBR1p115CXn5Rq2LL%2FPqDymoR7EAgA%2BObB%2BXfWY%2B1ESCLZ5D9v2lFzhBwPbu5qZOwW9Y24pn2%2BihOiVe%2F8krZdpqHyqjTzn3dG41d3wEYQ8%2BM%2BhIFrKX1aTq7boI4LsiMiAiXjIn5o1H8VW6FGE2Ccp0%2BLHXkFMg%2BmvPfsaiNMOKH1XcFf%2FetWMdZXB2BRADXXfz%2BkZTTRVY9LScdEG4dL6gpW4h1opCxMZzRtoqw7uaT8m%2B%2BmGwMbvu9m5vbDsOO3xc2BHDItHKvTrw20SyprgoYJHAV4eWMR%2BwdvaMgDbmzIdL3ZEJxUqWJ4DlqNSgjlY3ISGhAgv3LOnazARA4EG%2BIa1veohOy%2B5e0L91FnOuMUpiYNZnxApg2xVGzEIVoucEvVdjwEeAm8N1%2F9EqC6FhSc%2BDiFOU%2BdyEzy%2BWBYJmMqTFboisj7T22ymSTxxSIS9BLSVx8CJ8nFXEcaFOXpf8hRwSTIksN4r6Z1bcmAPlGCfYHIobfKVXaxcuODzkmLX9l330Vv2ichdTfz7Xv05YR%2B%2Bx2qvtAiC%2B86Bme%2FO0CUbSem8t509ygdYFh%2Foz%2B0wfg%2BM6RpBEVwlQhiY7DgXPBkMsJ8%2FnMIWQnMQGOqUBvOAZY5DYnmsvlXDytV5YrqZpy2IESlCSlx5n5eYadeNVr1E2%2B0Mlv4ZUTvn%2FxWLwNl9FJiyde5b4QMCANByHyTD7Y3i2HLkbt1nRnVzxgWh6aVNjE%2B1ocPwFScp8HS%2B9XoDfqKOnvauend0bZVxLS0zUj%2FadOCu9%2FiWqChX%2BMSyy2D4pR18OmbysbubstAhPQgaUc9Jd0GdOKT6M3Lm%2FN%2FIVAyoC&X-Amz-Signature=25162a4a8a64649303ffc94a3994fa4f42191afe63a9d9f8a2921724f56aacc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2QWMM55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCQChUnTLWoEkyLT6vjnkTl0obHWoVTim%2FAdoSfcMEfowIgCp5qjR7GD7wnNNldDw63VofzBcLF%2BW58xkaSkXEbQD0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNWNSJLaQkqUXtvnircA1FX9jg4B2blwv3lR7okBXYdHrwkaBR1p115CXn5Rq2LL%2FPqDymoR7EAgA%2BObB%2BXfWY%2B1ESCLZ5D9v2lFzhBwPbu5qZOwW9Y24pn2%2BihOiVe%2F8krZdpqHyqjTzn3dG41d3wEYQ8%2BM%2BhIFrKX1aTq7boI4LsiMiAiXjIn5o1H8VW6FGE2Ccp0%2BLHXkFMg%2BmvPfsaiNMOKH1XcFf%2FetWMdZXB2BRADXXfz%2BkZTTRVY9LScdEG4dL6gpW4h1opCxMZzRtoqw7uaT8m%2B%2BmGwMbvu9m5vbDsOO3xc2BHDItHKvTrw20SyprgoYJHAV4eWMR%2BwdvaMgDbmzIdL3ZEJxUqWJ4DlqNSgjlY3ISGhAgv3LOnazARA4EG%2BIa1veohOy%2B5e0L91FnOuMUpiYNZnxApg2xVGzEIVoucEvVdjwEeAm8N1%2F9EqC6FhSc%2BDiFOU%2BdyEzy%2BWBYJmMqTFboisj7T22ymSTxxSIS9BLSVx8CJ8nFXEcaFOXpf8hRwSTIksN4r6Z1bcmAPlGCfYHIobfKVXaxcuODzkmLX9l330Vv2ichdTfz7Xv05YR%2B%2Bx2qvtAiC%2B86Bme%2FO0CUbSem8t509ygdYFh%2Foz%2B0wfg%2BM6RpBEVwlQhiY7DgXPBkMsJ8%2FnMIWQnMQGOqUBvOAZY5DYnmsvlXDytV5YrqZpy2IESlCSlx5n5eYadeNVr1E2%2B0Mlv4ZUTvn%2FxWLwNl9FJiyde5b4QMCANByHyTD7Y3i2HLkbt1nRnVzxgWh6aVNjE%2B1ocPwFScp8HS%2B9XoDfqKOnvauend0bZVxLS0zUj%2FadOCu9%2FiWqChX%2BMSyy2D4pR18OmbysbubstAhPQgaUc9Jd0GdOKT6M3Lm%2FN%2FIVAyoC&X-Amz-Signature=6719a6f01ba3b39f4110dc98152afb5a001bc3056f619381cf6e04661848f774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2QWMM55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCQChUnTLWoEkyLT6vjnkTl0obHWoVTim%2FAdoSfcMEfowIgCp5qjR7GD7wnNNldDw63VofzBcLF%2BW58xkaSkXEbQD0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNWNSJLaQkqUXtvnircA1FX9jg4B2blwv3lR7okBXYdHrwkaBR1p115CXn5Rq2LL%2FPqDymoR7EAgA%2BObB%2BXfWY%2B1ESCLZ5D9v2lFzhBwPbu5qZOwW9Y24pn2%2BihOiVe%2F8krZdpqHyqjTzn3dG41d3wEYQ8%2BM%2BhIFrKX1aTq7boI4LsiMiAiXjIn5o1H8VW6FGE2Ccp0%2BLHXkFMg%2BmvPfsaiNMOKH1XcFf%2FetWMdZXB2BRADXXfz%2BkZTTRVY9LScdEG4dL6gpW4h1opCxMZzRtoqw7uaT8m%2B%2BmGwMbvu9m5vbDsOO3xc2BHDItHKvTrw20SyprgoYJHAV4eWMR%2BwdvaMgDbmzIdL3ZEJxUqWJ4DlqNSgjlY3ISGhAgv3LOnazARA4EG%2BIa1veohOy%2B5e0L91FnOuMUpiYNZnxApg2xVGzEIVoucEvVdjwEeAm8N1%2F9EqC6FhSc%2BDiFOU%2BdyEzy%2BWBYJmMqTFboisj7T22ymSTxxSIS9BLSVx8CJ8nFXEcaFOXpf8hRwSTIksN4r6Z1bcmAPlGCfYHIobfKVXaxcuODzkmLX9l330Vv2ichdTfz7Xv05YR%2B%2Bx2qvtAiC%2B86Bme%2FO0CUbSem8t509ygdYFh%2Foz%2B0wfg%2BM6RpBEVwlQhiY7DgXPBkMsJ8%2FnMIWQnMQGOqUBvOAZY5DYnmsvlXDytV5YrqZpy2IESlCSlx5n5eYadeNVr1E2%2B0Mlv4ZUTvn%2FxWLwNl9FJiyde5b4QMCANByHyTD7Y3i2HLkbt1nRnVzxgWh6aVNjE%2B1ocPwFScp8HS%2B9XoDfqKOnvauend0bZVxLS0zUj%2FadOCu9%2FiWqChX%2BMSyy2D4pR18OmbysbubstAhPQgaUc9Jd0GdOKT6M3Lm%2FN%2FIVAyoC&X-Amz-Signature=6c040016cdff6827bfb2fc7aa3f6aad7b968c0f67fea5c04e990e97ca1ba334a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2QWMM55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCQChUnTLWoEkyLT6vjnkTl0obHWoVTim%2FAdoSfcMEfowIgCp5qjR7GD7wnNNldDw63VofzBcLF%2BW58xkaSkXEbQD0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNWNSJLaQkqUXtvnircA1FX9jg4B2blwv3lR7okBXYdHrwkaBR1p115CXn5Rq2LL%2FPqDymoR7EAgA%2BObB%2BXfWY%2B1ESCLZ5D9v2lFzhBwPbu5qZOwW9Y24pn2%2BihOiVe%2F8krZdpqHyqjTzn3dG41d3wEYQ8%2BM%2BhIFrKX1aTq7boI4LsiMiAiXjIn5o1H8VW6FGE2Ccp0%2BLHXkFMg%2BmvPfsaiNMOKH1XcFf%2FetWMdZXB2BRADXXfz%2BkZTTRVY9LScdEG4dL6gpW4h1opCxMZzRtoqw7uaT8m%2B%2BmGwMbvu9m5vbDsOO3xc2BHDItHKvTrw20SyprgoYJHAV4eWMR%2BwdvaMgDbmzIdL3ZEJxUqWJ4DlqNSgjlY3ISGhAgv3LOnazARA4EG%2BIa1veohOy%2B5e0L91FnOuMUpiYNZnxApg2xVGzEIVoucEvVdjwEeAm8N1%2F9EqC6FhSc%2BDiFOU%2BdyEzy%2BWBYJmMqTFboisj7T22ymSTxxSIS9BLSVx8CJ8nFXEcaFOXpf8hRwSTIksN4r6Z1bcmAPlGCfYHIobfKVXaxcuODzkmLX9l330Vv2ichdTfz7Xv05YR%2B%2Bx2qvtAiC%2B86Bme%2FO0CUbSem8t509ygdYFh%2Foz%2B0wfg%2BM6RpBEVwlQhiY7DgXPBkMsJ8%2FnMIWQnMQGOqUBvOAZY5DYnmsvlXDytV5YrqZpy2IESlCSlx5n5eYadeNVr1E2%2B0Mlv4ZUTvn%2FxWLwNl9FJiyde5b4QMCANByHyTD7Y3i2HLkbt1nRnVzxgWh6aVNjE%2B1ocPwFScp8HS%2B9XoDfqKOnvauend0bZVxLS0zUj%2FadOCu9%2FiWqChX%2BMSyy2D4pR18OmbysbubstAhPQgaUc9Jd0GdOKT6M3Lm%2FN%2FIVAyoC&X-Amz-Signature=426ce6123a0056c3f1708041b01f391f8cf16327d959aa234bac00b79e36081c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2QWMM55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCQChUnTLWoEkyLT6vjnkTl0obHWoVTim%2FAdoSfcMEfowIgCp5qjR7GD7wnNNldDw63VofzBcLF%2BW58xkaSkXEbQD0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNWNSJLaQkqUXtvnircA1FX9jg4B2blwv3lR7okBXYdHrwkaBR1p115CXn5Rq2LL%2FPqDymoR7EAgA%2BObB%2BXfWY%2B1ESCLZ5D9v2lFzhBwPbu5qZOwW9Y24pn2%2BihOiVe%2F8krZdpqHyqjTzn3dG41d3wEYQ8%2BM%2BhIFrKX1aTq7boI4LsiMiAiXjIn5o1H8VW6FGE2Ccp0%2BLHXkFMg%2BmvPfsaiNMOKH1XcFf%2FetWMdZXB2BRADXXfz%2BkZTTRVY9LScdEG4dL6gpW4h1opCxMZzRtoqw7uaT8m%2B%2BmGwMbvu9m5vbDsOO3xc2BHDItHKvTrw20SyprgoYJHAV4eWMR%2BwdvaMgDbmzIdL3ZEJxUqWJ4DlqNSgjlY3ISGhAgv3LOnazARA4EG%2BIa1veohOy%2B5e0L91FnOuMUpiYNZnxApg2xVGzEIVoucEvVdjwEeAm8N1%2F9EqC6FhSc%2BDiFOU%2BdyEzy%2BWBYJmMqTFboisj7T22ymSTxxSIS9BLSVx8CJ8nFXEcaFOXpf8hRwSTIksN4r6Z1bcmAPlGCfYHIobfKVXaxcuODzkmLX9l330Vv2ichdTfz7Xv05YR%2B%2Bx2qvtAiC%2B86Bme%2FO0CUbSem8t509ygdYFh%2Foz%2B0wfg%2BM6RpBEVwlQhiY7DgXPBkMsJ8%2FnMIWQnMQGOqUBvOAZY5DYnmsvlXDytV5YrqZpy2IESlCSlx5n5eYadeNVr1E2%2B0Mlv4ZUTvn%2FxWLwNl9FJiyde5b4QMCANByHyTD7Y3i2HLkbt1nRnVzxgWh6aVNjE%2B1ocPwFScp8HS%2B9XoDfqKOnvauend0bZVxLS0zUj%2FadOCu9%2FiWqChX%2BMSyy2D4pR18OmbysbubstAhPQgaUc9Jd0GdOKT6M3Lm%2FN%2FIVAyoC&X-Amz-Signature=193698ca2d4cba692c46ac16c5174f7025f1d201ce0c8c5d0c2c44b859d4482a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2QWMM55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCQChUnTLWoEkyLT6vjnkTl0obHWoVTim%2FAdoSfcMEfowIgCp5qjR7GD7wnNNldDw63VofzBcLF%2BW58xkaSkXEbQD0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNWNSJLaQkqUXtvnircA1FX9jg4B2blwv3lR7okBXYdHrwkaBR1p115CXn5Rq2LL%2FPqDymoR7EAgA%2BObB%2BXfWY%2B1ESCLZ5D9v2lFzhBwPbu5qZOwW9Y24pn2%2BihOiVe%2F8krZdpqHyqjTzn3dG41d3wEYQ8%2BM%2BhIFrKX1aTq7boI4LsiMiAiXjIn5o1H8VW6FGE2Ccp0%2BLHXkFMg%2BmvPfsaiNMOKH1XcFf%2FetWMdZXB2BRADXXfz%2BkZTTRVY9LScdEG4dL6gpW4h1opCxMZzRtoqw7uaT8m%2B%2BmGwMbvu9m5vbDsOO3xc2BHDItHKvTrw20SyprgoYJHAV4eWMR%2BwdvaMgDbmzIdL3ZEJxUqWJ4DlqNSgjlY3ISGhAgv3LOnazARA4EG%2BIa1veohOy%2B5e0L91FnOuMUpiYNZnxApg2xVGzEIVoucEvVdjwEeAm8N1%2F9EqC6FhSc%2BDiFOU%2BdyEzy%2BWBYJmMqTFboisj7T22ymSTxxSIS9BLSVx8CJ8nFXEcaFOXpf8hRwSTIksN4r6Z1bcmAPlGCfYHIobfKVXaxcuODzkmLX9l330Vv2ichdTfz7Xv05YR%2B%2Bx2qvtAiC%2B86Bme%2FO0CUbSem8t509ygdYFh%2Foz%2B0wfg%2BM6RpBEVwlQhiY7DgXPBkMsJ8%2FnMIWQnMQGOqUBvOAZY5DYnmsvlXDytV5YrqZpy2IESlCSlx5n5eYadeNVr1E2%2B0Mlv4ZUTvn%2FxWLwNl9FJiyde5b4QMCANByHyTD7Y3i2HLkbt1nRnVzxgWh6aVNjE%2B1ocPwFScp8HS%2B9XoDfqKOnvauend0bZVxLS0zUj%2FadOCu9%2FiWqChX%2BMSyy2D4pR18OmbysbubstAhPQgaUc9Jd0GdOKT6M3Lm%2FN%2FIVAyoC&X-Amz-Signature=06082800190372cbe35b638942eeeddb1d4eab44dd33c2ac65fabf4fb723c912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2QWMM55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCQChUnTLWoEkyLT6vjnkTl0obHWoVTim%2FAdoSfcMEfowIgCp5qjR7GD7wnNNldDw63VofzBcLF%2BW58xkaSkXEbQD0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNWNSJLaQkqUXtvnircA1FX9jg4B2blwv3lR7okBXYdHrwkaBR1p115CXn5Rq2LL%2FPqDymoR7EAgA%2BObB%2BXfWY%2B1ESCLZ5D9v2lFzhBwPbu5qZOwW9Y24pn2%2BihOiVe%2F8krZdpqHyqjTzn3dG41d3wEYQ8%2BM%2BhIFrKX1aTq7boI4LsiMiAiXjIn5o1H8VW6FGE2Ccp0%2BLHXkFMg%2BmvPfsaiNMOKH1XcFf%2FetWMdZXB2BRADXXfz%2BkZTTRVY9LScdEG4dL6gpW4h1opCxMZzRtoqw7uaT8m%2B%2BmGwMbvu9m5vbDsOO3xc2BHDItHKvTrw20SyprgoYJHAV4eWMR%2BwdvaMgDbmzIdL3ZEJxUqWJ4DlqNSgjlY3ISGhAgv3LOnazARA4EG%2BIa1veohOy%2B5e0L91FnOuMUpiYNZnxApg2xVGzEIVoucEvVdjwEeAm8N1%2F9EqC6FhSc%2BDiFOU%2BdyEzy%2BWBYJmMqTFboisj7T22ymSTxxSIS9BLSVx8CJ8nFXEcaFOXpf8hRwSTIksN4r6Z1bcmAPlGCfYHIobfKVXaxcuODzkmLX9l330Vv2ichdTfz7Xv05YR%2B%2Bx2qvtAiC%2B86Bme%2FO0CUbSem8t509ygdYFh%2Foz%2B0wfg%2BM6RpBEVwlQhiY7DgXPBkMsJ8%2FnMIWQnMQGOqUBvOAZY5DYnmsvlXDytV5YrqZpy2IESlCSlx5n5eYadeNVr1E2%2B0Mlv4ZUTvn%2FxWLwNl9FJiyde5b4QMCANByHyTD7Y3i2HLkbt1nRnVzxgWh6aVNjE%2B1ocPwFScp8HS%2B9XoDfqKOnvauend0bZVxLS0zUj%2FadOCu9%2FiWqChX%2BMSyy2D4pR18OmbysbubstAhPQgaUc9Jd0GdOKT6M3Lm%2FN%2FIVAyoC&X-Amz-Signature=c768d1de346eaefd965fcfca0c1b8955e4040b2ef6211650fe09139a1e38c819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

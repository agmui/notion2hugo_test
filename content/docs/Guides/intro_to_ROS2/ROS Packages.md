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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQU7ZG5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7uFacVXvkCryEG6T7jOkoz7uXNIJg4bqGydkWS6T%2FewIhAIeBJxi1bAEeXsf%2BtvYeGPzKWtB72L%2FOk8CNdKB4GT3FKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdIEfc7j5WpBU656kq3AOBL1w9UHwzvd7F%2FtrLqIeZjk1ZvbXCEuTMMG4MIuq%2BpFscxVQ%2FgPCZ1qoYXYrhKKBJ%2BiyCoz8FdcxSyz5%2Bi%2BnUDKWzuknp121IHVBD%2BQ%2Bdj%2FnEIokXLIKHLvqtYOC4rQrhKS9dnWYvRd9UNC2LvXFg9yHWZeDtA%2Fz1LWUa108sNH3DystFdUAxU2Y%2BNQ48z0IBLcfNBKuClhPRVjwW9wHBj0f%2BFB4osJgX4%2Bt8fy5F%2BvFEOtmQjP0oEKo0NZRZEu%2B79dUeqOv67esZx%2FG7sMKoI7pN%2BD6L16nui8t0SJsaDV2CBhZoai5Wzoq2xBV53A68OuL9wUHH9d3RryO%2BZ3%2Fs47R8qF0ll2x3j7PvC0P%2FcvSF2toKJ02N4rEOrT1Pk2rDlLZZYzZVHYvOC9pokDIyYAal4PTdiB%2FBorMFqxjQvn6837BQo0Ww9NzK5jWfNJNf60ITwxF4vuxEaTyC03ezmOCGJQ%2BPXCQ2QEeyFQtvnZDlTW8jduM4v42%2Fs%2B%2Fehmb8V1LWFybl3iRwt7GFwZaHNmT5LdrxfNk7Ab6%2Fh2cx224Rh065Q0OiSnWVh1jv3PY5ZfSm7kk%2BOx2jPU%2FcyiMotHdvSxbb4MlaZ5ZVf4MVDQiMB1Th5bN5SI1BZTD%2Bk%2FfDBjqkAf7HEaGyEV1E%2BjDTuWFeBNW626mBKPGsSK%2FiVwZ87%2BxBKarTnnnLRg7CpdY%2BdvNEgtaunyTuhy0CDsQmqSXiL3Nz6KVUZ2E7Asz%2FgufESn3s8OlXLFBMVzmN2cHqoykCykvTSXk2CrMGl6RueBD6ISFL%2FKqi2E0smTjXbQiVbJuwjdVQwSNf1vaoiGshrsLvKBp3q6OHLIRIlDJp3Pl5q1ERr%2BAJ&X-Amz-Signature=052538e4c51c42150ff1a90d2875d381b89a23e2a68aea07a406628fcb258386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQU7ZG5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7uFacVXvkCryEG6T7jOkoz7uXNIJg4bqGydkWS6T%2FewIhAIeBJxi1bAEeXsf%2BtvYeGPzKWtB72L%2FOk8CNdKB4GT3FKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdIEfc7j5WpBU656kq3AOBL1w9UHwzvd7F%2FtrLqIeZjk1ZvbXCEuTMMG4MIuq%2BpFscxVQ%2FgPCZ1qoYXYrhKKBJ%2BiyCoz8FdcxSyz5%2Bi%2BnUDKWzuknp121IHVBD%2BQ%2Bdj%2FnEIokXLIKHLvqtYOC4rQrhKS9dnWYvRd9UNC2LvXFg9yHWZeDtA%2Fz1LWUa108sNH3DystFdUAxU2Y%2BNQ48z0IBLcfNBKuClhPRVjwW9wHBj0f%2BFB4osJgX4%2Bt8fy5F%2BvFEOtmQjP0oEKo0NZRZEu%2B79dUeqOv67esZx%2FG7sMKoI7pN%2BD6L16nui8t0SJsaDV2CBhZoai5Wzoq2xBV53A68OuL9wUHH9d3RryO%2BZ3%2Fs47R8qF0ll2x3j7PvC0P%2FcvSF2toKJ02N4rEOrT1Pk2rDlLZZYzZVHYvOC9pokDIyYAal4PTdiB%2FBorMFqxjQvn6837BQo0Ww9NzK5jWfNJNf60ITwxF4vuxEaTyC03ezmOCGJQ%2BPXCQ2QEeyFQtvnZDlTW8jduM4v42%2Fs%2B%2Fehmb8V1LWFybl3iRwt7GFwZaHNmT5LdrxfNk7Ab6%2Fh2cx224Rh065Q0OiSnWVh1jv3PY5ZfSm7kk%2BOx2jPU%2FcyiMotHdvSxbb4MlaZ5ZVf4MVDQiMB1Th5bN5SI1BZTD%2Bk%2FfDBjqkAf7HEaGyEV1E%2BjDTuWFeBNW626mBKPGsSK%2FiVwZ87%2BxBKarTnnnLRg7CpdY%2BdvNEgtaunyTuhy0CDsQmqSXiL3Nz6KVUZ2E7Asz%2FgufESn3s8OlXLFBMVzmN2cHqoykCykvTSXk2CrMGl6RueBD6ISFL%2FKqi2E0smTjXbQiVbJuwjdVQwSNf1vaoiGshrsLvKBp3q6OHLIRIlDJp3Pl5q1ERr%2BAJ&X-Amz-Signature=7e54c737e6bee291ab7008a05e44bbada9b896d94da2cdecb0fe978d4fe8f576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQU7ZG5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7uFacVXvkCryEG6T7jOkoz7uXNIJg4bqGydkWS6T%2FewIhAIeBJxi1bAEeXsf%2BtvYeGPzKWtB72L%2FOk8CNdKB4GT3FKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdIEfc7j5WpBU656kq3AOBL1w9UHwzvd7F%2FtrLqIeZjk1ZvbXCEuTMMG4MIuq%2BpFscxVQ%2FgPCZ1qoYXYrhKKBJ%2BiyCoz8FdcxSyz5%2Bi%2BnUDKWzuknp121IHVBD%2BQ%2Bdj%2FnEIokXLIKHLvqtYOC4rQrhKS9dnWYvRd9UNC2LvXFg9yHWZeDtA%2Fz1LWUa108sNH3DystFdUAxU2Y%2BNQ48z0IBLcfNBKuClhPRVjwW9wHBj0f%2BFB4osJgX4%2Bt8fy5F%2BvFEOtmQjP0oEKo0NZRZEu%2B79dUeqOv67esZx%2FG7sMKoI7pN%2BD6L16nui8t0SJsaDV2CBhZoai5Wzoq2xBV53A68OuL9wUHH9d3RryO%2BZ3%2Fs47R8qF0ll2x3j7PvC0P%2FcvSF2toKJ02N4rEOrT1Pk2rDlLZZYzZVHYvOC9pokDIyYAal4PTdiB%2FBorMFqxjQvn6837BQo0Ww9NzK5jWfNJNf60ITwxF4vuxEaTyC03ezmOCGJQ%2BPXCQ2QEeyFQtvnZDlTW8jduM4v42%2Fs%2B%2Fehmb8V1LWFybl3iRwt7GFwZaHNmT5LdrxfNk7Ab6%2Fh2cx224Rh065Q0OiSnWVh1jv3PY5ZfSm7kk%2BOx2jPU%2FcyiMotHdvSxbb4MlaZ5ZVf4MVDQiMB1Th5bN5SI1BZTD%2Bk%2FfDBjqkAf7HEaGyEV1E%2BjDTuWFeBNW626mBKPGsSK%2FiVwZ87%2BxBKarTnnnLRg7CpdY%2BdvNEgtaunyTuhy0CDsQmqSXiL3Nz6KVUZ2E7Asz%2FgufESn3s8OlXLFBMVzmN2cHqoykCykvTSXk2CrMGl6RueBD6ISFL%2FKqi2E0smTjXbQiVbJuwjdVQwSNf1vaoiGshrsLvKBp3q6OHLIRIlDJp3Pl5q1ERr%2BAJ&X-Amz-Signature=96717966fc637b041048b5868747a97c02002e15537a2998699396753854dbe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQU7ZG5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7uFacVXvkCryEG6T7jOkoz7uXNIJg4bqGydkWS6T%2FewIhAIeBJxi1bAEeXsf%2BtvYeGPzKWtB72L%2FOk8CNdKB4GT3FKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdIEfc7j5WpBU656kq3AOBL1w9UHwzvd7F%2FtrLqIeZjk1ZvbXCEuTMMG4MIuq%2BpFscxVQ%2FgPCZ1qoYXYrhKKBJ%2BiyCoz8FdcxSyz5%2Bi%2BnUDKWzuknp121IHVBD%2BQ%2Bdj%2FnEIokXLIKHLvqtYOC4rQrhKS9dnWYvRd9UNC2LvXFg9yHWZeDtA%2Fz1LWUa108sNH3DystFdUAxU2Y%2BNQ48z0IBLcfNBKuClhPRVjwW9wHBj0f%2BFB4osJgX4%2Bt8fy5F%2BvFEOtmQjP0oEKo0NZRZEu%2B79dUeqOv67esZx%2FG7sMKoI7pN%2BD6L16nui8t0SJsaDV2CBhZoai5Wzoq2xBV53A68OuL9wUHH9d3RryO%2BZ3%2Fs47R8qF0ll2x3j7PvC0P%2FcvSF2toKJ02N4rEOrT1Pk2rDlLZZYzZVHYvOC9pokDIyYAal4PTdiB%2FBorMFqxjQvn6837BQo0Ww9NzK5jWfNJNf60ITwxF4vuxEaTyC03ezmOCGJQ%2BPXCQ2QEeyFQtvnZDlTW8jduM4v42%2Fs%2B%2Fehmb8V1LWFybl3iRwt7GFwZaHNmT5LdrxfNk7Ab6%2Fh2cx224Rh065Q0OiSnWVh1jv3PY5ZfSm7kk%2BOx2jPU%2FcyiMotHdvSxbb4MlaZ5ZVf4MVDQiMB1Th5bN5SI1BZTD%2Bk%2FfDBjqkAf7HEaGyEV1E%2BjDTuWFeBNW626mBKPGsSK%2FiVwZ87%2BxBKarTnnnLRg7CpdY%2BdvNEgtaunyTuhy0CDsQmqSXiL3Nz6KVUZ2E7Asz%2FgufESn3s8OlXLFBMVzmN2cHqoykCykvTSXk2CrMGl6RueBD6ISFL%2FKqi2E0smTjXbQiVbJuwjdVQwSNf1vaoiGshrsLvKBp3q6OHLIRIlDJp3Pl5q1ERr%2BAJ&X-Amz-Signature=1899f489fa40769b27e7e4ef237b2a0dd8e8895e5db0025763955a08d6e92929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQU7ZG5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7uFacVXvkCryEG6T7jOkoz7uXNIJg4bqGydkWS6T%2FewIhAIeBJxi1bAEeXsf%2BtvYeGPzKWtB72L%2FOk8CNdKB4GT3FKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdIEfc7j5WpBU656kq3AOBL1w9UHwzvd7F%2FtrLqIeZjk1ZvbXCEuTMMG4MIuq%2BpFscxVQ%2FgPCZ1qoYXYrhKKBJ%2BiyCoz8FdcxSyz5%2Bi%2BnUDKWzuknp121IHVBD%2BQ%2Bdj%2FnEIokXLIKHLvqtYOC4rQrhKS9dnWYvRd9UNC2LvXFg9yHWZeDtA%2Fz1LWUa108sNH3DystFdUAxU2Y%2BNQ48z0IBLcfNBKuClhPRVjwW9wHBj0f%2BFB4osJgX4%2Bt8fy5F%2BvFEOtmQjP0oEKo0NZRZEu%2B79dUeqOv67esZx%2FG7sMKoI7pN%2BD6L16nui8t0SJsaDV2CBhZoai5Wzoq2xBV53A68OuL9wUHH9d3RryO%2BZ3%2Fs47R8qF0ll2x3j7PvC0P%2FcvSF2toKJ02N4rEOrT1Pk2rDlLZZYzZVHYvOC9pokDIyYAal4PTdiB%2FBorMFqxjQvn6837BQo0Ww9NzK5jWfNJNf60ITwxF4vuxEaTyC03ezmOCGJQ%2BPXCQ2QEeyFQtvnZDlTW8jduM4v42%2Fs%2B%2Fehmb8V1LWFybl3iRwt7GFwZaHNmT5LdrxfNk7Ab6%2Fh2cx224Rh065Q0OiSnWVh1jv3PY5ZfSm7kk%2BOx2jPU%2FcyiMotHdvSxbb4MlaZ5ZVf4MVDQiMB1Th5bN5SI1BZTD%2Bk%2FfDBjqkAf7HEaGyEV1E%2BjDTuWFeBNW626mBKPGsSK%2FiVwZ87%2BxBKarTnnnLRg7CpdY%2BdvNEgtaunyTuhy0CDsQmqSXiL3Nz6KVUZ2E7Asz%2FgufESn3s8OlXLFBMVzmN2cHqoykCykvTSXk2CrMGl6RueBD6ISFL%2FKqi2E0smTjXbQiVbJuwjdVQwSNf1vaoiGshrsLvKBp3q6OHLIRIlDJp3Pl5q1ERr%2BAJ&X-Amz-Signature=ab0cb4e98fe9f32a0b30f07f2a655c70c2a0d718783b8491c9a980f05ce9ddf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQU7ZG5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7uFacVXvkCryEG6T7jOkoz7uXNIJg4bqGydkWS6T%2FewIhAIeBJxi1bAEeXsf%2BtvYeGPzKWtB72L%2FOk8CNdKB4GT3FKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdIEfc7j5WpBU656kq3AOBL1w9UHwzvd7F%2FtrLqIeZjk1ZvbXCEuTMMG4MIuq%2BpFscxVQ%2FgPCZ1qoYXYrhKKBJ%2BiyCoz8FdcxSyz5%2Bi%2BnUDKWzuknp121IHVBD%2BQ%2Bdj%2FnEIokXLIKHLvqtYOC4rQrhKS9dnWYvRd9UNC2LvXFg9yHWZeDtA%2Fz1LWUa108sNH3DystFdUAxU2Y%2BNQ48z0IBLcfNBKuClhPRVjwW9wHBj0f%2BFB4osJgX4%2Bt8fy5F%2BvFEOtmQjP0oEKo0NZRZEu%2B79dUeqOv67esZx%2FG7sMKoI7pN%2BD6L16nui8t0SJsaDV2CBhZoai5Wzoq2xBV53A68OuL9wUHH9d3RryO%2BZ3%2Fs47R8qF0ll2x3j7PvC0P%2FcvSF2toKJ02N4rEOrT1Pk2rDlLZZYzZVHYvOC9pokDIyYAal4PTdiB%2FBorMFqxjQvn6837BQo0Ww9NzK5jWfNJNf60ITwxF4vuxEaTyC03ezmOCGJQ%2BPXCQ2QEeyFQtvnZDlTW8jduM4v42%2Fs%2B%2Fehmb8V1LWFybl3iRwt7GFwZaHNmT5LdrxfNk7Ab6%2Fh2cx224Rh065Q0OiSnWVh1jv3PY5ZfSm7kk%2BOx2jPU%2FcyiMotHdvSxbb4MlaZ5ZVf4MVDQiMB1Th5bN5SI1BZTD%2Bk%2FfDBjqkAf7HEaGyEV1E%2BjDTuWFeBNW626mBKPGsSK%2FiVwZ87%2BxBKarTnnnLRg7CpdY%2BdvNEgtaunyTuhy0CDsQmqSXiL3Nz6KVUZ2E7Asz%2FgufESn3s8OlXLFBMVzmN2cHqoykCykvTSXk2CrMGl6RueBD6ISFL%2FKqi2E0smTjXbQiVbJuwjdVQwSNf1vaoiGshrsLvKBp3q6OHLIRIlDJp3Pl5q1ERr%2BAJ&X-Amz-Signature=0b182a1b43cfd2dbc39f9c55444e8967d05f00865683e24ec0e7ecf4e2fd681f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQU7ZG5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7uFacVXvkCryEG6T7jOkoz7uXNIJg4bqGydkWS6T%2FewIhAIeBJxi1bAEeXsf%2BtvYeGPzKWtB72L%2FOk8CNdKB4GT3FKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdIEfc7j5WpBU656kq3AOBL1w9UHwzvd7F%2FtrLqIeZjk1ZvbXCEuTMMG4MIuq%2BpFscxVQ%2FgPCZ1qoYXYrhKKBJ%2BiyCoz8FdcxSyz5%2Bi%2BnUDKWzuknp121IHVBD%2BQ%2Bdj%2FnEIokXLIKHLvqtYOC4rQrhKS9dnWYvRd9UNC2LvXFg9yHWZeDtA%2Fz1LWUa108sNH3DystFdUAxU2Y%2BNQ48z0IBLcfNBKuClhPRVjwW9wHBj0f%2BFB4osJgX4%2Bt8fy5F%2BvFEOtmQjP0oEKo0NZRZEu%2B79dUeqOv67esZx%2FG7sMKoI7pN%2BD6L16nui8t0SJsaDV2CBhZoai5Wzoq2xBV53A68OuL9wUHH9d3RryO%2BZ3%2Fs47R8qF0ll2x3j7PvC0P%2FcvSF2toKJ02N4rEOrT1Pk2rDlLZZYzZVHYvOC9pokDIyYAal4PTdiB%2FBorMFqxjQvn6837BQo0Ww9NzK5jWfNJNf60ITwxF4vuxEaTyC03ezmOCGJQ%2BPXCQ2QEeyFQtvnZDlTW8jduM4v42%2Fs%2B%2Fehmb8V1LWFybl3iRwt7GFwZaHNmT5LdrxfNk7Ab6%2Fh2cx224Rh065Q0OiSnWVh1jv3PY5ZfSm7kk%2BOx2jPU%2FcyiMotHdvSxbb4MlaZ5ZVf4MVDQiMB1Th5bN5SI1BZTD%2Bk%2FfDBjqkAf7HEaGyEV1E%2BjDTuWFeBNW626mBKPGsSK%2FiVwZ87%2BxBKarTnnnLRg7CpdY%2BdvNEgtaunyTuhy0CDsQmqSXiL3Nz6KVUZ2E7Asz%2FgufESn3s8OlXLFBMVzmN2cHqoykCykvTSXk2CrMGl6RueBD6ISFL%2FKqi2E0smTjXbQiVbJuwjdVQwSNf1vaoiGshrsLvKBp3q6OHLIRIlDJp3Pl5q1ERr%2BAJ&X-Amz-Signature=cfb2e68b12c8fd958acf3d8a30728cb533ec495da51fe476b4fbfc81639a1aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

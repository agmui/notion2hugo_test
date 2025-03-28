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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE7CML6K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKsKoEzhrCHOEZR2LsLI7Hgmlu0H9lzcB6uoXWnssmlAiBO63AqMFfO%2FcHBNf0pauGLe4pNQWeoDmvcdq8eoLbxkir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJovTmoVg5ZL%2FYxdQKtwDAE86wmdI8lOPchiO1mLOpG%2BdxQUuj3QQDER9PWifuy5Sf61XcY8xvLlWpYDzEAn24GJmMrpqIlXdufrDZubWzIj5eWUcbc74C%2B3z8eQByXTRL9ulvgrIz2fHukDM1pWxTC6xndyND2LhvCw5MgvooytVChrvJURio9DQR2hhg%2BKIJgwtngPMA4ub%2FoiX8J4VLtU6a%2B%2ForiZs4beh6O7WM6yx2zepQWYwJtQy4J%2FJPGsffN0dWdTN40nPrd%2FbHQi90ywAI9htMGGGlqvUGr4A7wa6RQDJRb3rB1gZcOIlLS03Ux5cf7aJiiUIW%2BElRgMrpOJ67xyWjcYgofq5Y2%2FcjcOWsHl1AWbOl%2FdYesYkhsZQBC5Ro%2FfkMLiXgQNJlT2H4JKrGpaO4sbWTRlG%2BU1u6CVTKWFzYcHV%2FYKYUHdXeb7pEIisfwfwbHYHPH4lZGzddxq7aiAZpD5zSHevTzH7CUC671wE6sQpLaJThy3bzL1OqIG7GaV8j0237gzzH%2BcCEkZiUVpxmwIaK4XUDkykzjxMv%2BX8rzmiKqZiMDd%2F6rb7aPLLUTLzKNrfvrweJOis6qKIHzDSz68r9m83buGIRPqGRg8ik22jYY4qY8BRK2fRVwx0Ai0z40jAgkIwt5SYvwY6pgGK%2F0Jde3MeHuP6KjZfgLmhri2b17YprjOogQM4IYCITmD6CJqTNcUxW1%2BqQ53w1O6a%2FJljbuGrn4Ck8vVKukRKcHBNdrHQohwHOyetau7hMpWlW2DS9quxfqzkaCXpQv5a2KUi40BFqMhnviW7Ss2XDkGt4VzswBNgZfQ4rGT0Q8GIIy5V2hwgzQpDPWGMmvqCGk0UmtPkMMQdInLqTCZGEVFJMZf7&X-Amz-Signature=18934abd09f99b21fd6dfa578243fcd9b7d8fc48af84580f2cd360b29a04a4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE7CML6K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKsKoEzhrCHOEZR2LsLI7Hgmlu0H9lzcB6uoXWnssmlAiBO63AqMFfO%2FcHBNf0pauGLe4pNQWeoDmvcdq8eoLbxkir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJovTmoVg5ZL%2FYxdQKtwDAE86wmdI8lOPchiO1mLOpG%2BdxQUuj3QQDER9PWifuy5Sf61XcY8xvLlWpYDzEAn24GJmMrpqIlXdufrDZubWzIj5eWUcbc74C%2B3z8eQByXTRL9ulvgrIz2fHukDM1pWxTC6xndyND2LhvCw5MgvooytVChrvJURio9DQR2hhg%2BKIJgwtngPMA4ub%2FoiX8J4VLtU6a%2B%2ForiZs4beh6O7WM6yx2zepQWYwJtQy4J%2FJPGsffN0dWdTN40nPrd%2FbHQi90ywAI9htMGGGlqvUGr4A7wa6RQDJRb3rB1gZcOIlLS03Ux5cf7aJiiUIW%2BElRgMrpOJ67xyWjcYgofq5Y2%2FcjcOWsHl1AWbOl%2FdYesYkhsZQBC5Ro%2FfkMLiXgQNJlT2H4JKrGpaO4sbWTRlG%2BU1u6CVTKWFzYcHV%2FYKYUHdXeb7pEIisfwfwbHYHPH4lZGzddxq7aiAZpD5zSHevTzH7CUC671wE6sQpLaJThy3bzL1OqIG7GaV8j0237gzzH%2BcCEkZiUVpxmwIaK4XUDkykzjxMv%2BX8rzmiKqZiMDd%2F6rb7aPLLUTLzKNrfvrweJOis6qKIHzDSz68r9m83buGIRPqGRg8ik22jYY4qY8BRK2fRVwx0Ai0z40jAgkIwt5SYvwY6pgGK%2F0Jde3MeHuP6KjZfgLmhri2b17YprjOogQM4IYCITmD6CJqTNcUxW1%2BqQ53w1O6a%2FJljbuGrn4Ck8vVKukRKcHBNdrHQohwHOyetau7hMpWlW2DS9quxfqzkaCXpQv5a2KUi40BFqMhnviW7Ss2XDkGt4VzswBNgZfQ4rGT0Q8GIIy5V2hwgzQpDPWGMmvqCGk0UmtPkMMQdInLqTCZGEVFJMZf7&X-Amz-Signature=3bdad90f44314275cb276952e23a0da24a615c9fd3fcee280f64e185c40522b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE7CML6K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKsKoEzhrCHOEZR2LsLI7Hgmlu0H9lzcB6uoXWnssmlAiBO63AqMFfO%2FcHBNf0pauGLe4pNQWeoDmvcdq8eoLbxkir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJovTmoVg5ZL%2FYxdQKtwDAE86wmdI8lOPchiO1mLOpG%2BdxQUuj3QQDER9PWifuy5Sf61XcY8xvLlWpYDzEAn24GJmMrpqIlXdufrDZubWzIj5eWUcbc74C%2B3z8eQByXTRL9ulvgrIz2fHukDM1pWxTC6xndyND2LhvCw5MgvooytVChrvJURio9DQR2hhg%2BKIJgwtngPMA4ub%2FoiX8J4VLtU6a%2B%2ForiZs4beh6O7WM6yx2zepQWYwJtQy4J%2FJPGsffN0dWdTN40nPrd%2FbHQi90ywAI9htMGGGlqvUGr4A7wa6RQDJRb3rB1gZcOIlLS03Ux5cf7aJiiUIW%2BElRgMrpOJ67xyWjcYgofq5Y2%2FcjcOWsHl1AWbOl%2FdYesYkhsZQBC5Ro%2FfkMLiXgQNJlT2H4JKrGpaO4sbWTRlG%2BU1u6CVTKWFzYcHV%2FYKYUHdXeb7pEIisfwfwbHYHPH4lZGzddxq7aiAZpD5zSHevTzH7CUC671wE6sQpLaJThy3bzL1OqIG7GaV8j0237gzzH%2BcCEkZiUVpxmwIaK4XUDkykzjxMv%2BX8rzmiKqZiMDd%2F6rb7aPLLUTLzKNrfvrweJOis6qKIHzDSz68r9m83buGIRPqGRg8ik22jYY4qY8BRK2fRVwx0Ai0z40jAgkIwt5SYvwY6pgGK%2F0Jde3MeHuP6KjZfgLmhri2b17YprjOogQM4IYCITmD6CJqTNcUxW1%2BqQ53w1O6a%2FJljbuGrn4Ck8vVKukRKcHBNdrHQohwHOyetau7hMpWlW2DS9quxfqzkaCXpQv5a2KUi40BFqMhnviW7Ss2XDkGt4VzswBNgZfQ4rGT0Q8GIIy5V2hwgzQpDPWGMmvqCGk0UmtPkMMQdInLqTCZGEVFJMZf7&X-Amz-Signature=9e906eb64870c676a9457829d3c5a8aeb7a5b84a95f581ea93123507af71ef83&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE7CML6K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKsKoEzhrCHOEZR2LsLI7Hgmlu0H9lzcB6uoXWnssmlAiBO63AqMFfO%2FcHBNf0pauGLe4pNQWeoDmvcdq8eoLbxkir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJovTmoVg5ZL%2FYxdQKtwDAE86wmdI8lOPchiO1mLOpG%2BdxQUuj3QQDER9PWifuy5Sf61XcY8xvLlWpYDzEAn24GJmMrpqIlXdufrDZubWzIj5eWUcbc74C%2B3z8eQByXTRL9ulvgrIz2fHukDM1pWxTC6xndyND2LhvCw5MgvooytVChrvJURio9DQR2hhg%2BKIJgwtngPMA4ub%2FoiX8J4VLtU6a%2B%2ForiZs4beh6O7WM6yx2zepQWYwJtQy4J%2FJPGsffN0dWdTN40nPrd%2FbHQi90ywAI9htMGGGlqvUGr4A7wa6RQDJRb3rB1gZcOIlLS03Ux5cf7aJiiUIW%2BElRgMrpOJ67xyWjcYgofq5Y2%2FcjcOWsHl1AWbOl%2FdYesYkhsZQBC5Ro%2FfkMLiXgQNJlT2H4JKrGpaO4sbWTRlG%2BU1u6CVTKWFzYcHV%2FYKYUHdXeb7pEIisfwfwbHYHPH4lZGzddxq7aiAZpD5zSHevTzH7CUC671wE6sQpLaJThy3bzL1OqIG7GaV8j0237gzzH%2BcCEkZiUVpxmwIaK4XUDkykzjxMv%2BX8rzmiKqZiMDd%2F6rb7aPLLUTLzKNrfvrweJOis6qKIHzDSz68r9m83buGIRPqGRg8ik22jYY4qY8BRK2fRVwx0Ai0z40jAgkIwt5SYvwY6pgGK%2F0Jde3MeHuP6KjZfgLmhri2b17YprjOogQM4IYCITmD6CJqTNcUxW1%2BqQ53w1O6a%2FJljbuGrn4Ck8vVKukRKcHBNdrHQohwHOyetau7hMpWlW2DS9quxfqzkaCXpQv5a2KUi40BFqMhnviW7Ss2XDkGt4VzswBNgZfQ4rGT0Q8GIIy5V2hwgzQpDPWGMmvqCGk0UmtPkMMQdInLqTCZGEVFJMZf7&X-Amz-Signature=a9475df185021cd2b93414cdde737ecaa0d17700f1e38f84b0cef102a615a5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE7CML6K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKsKoEzhrCHOEZR2LsLI7Hgmlu0H9lzcB6uoXWnssmlAiBO63AqMFfO%2FcHBNf0pauGLe4pNQWeoDmvcdq8eoLbxkir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJovTmoVg5ZL%2FYxdQKtwDAE86wmdI8lOPchiO1mLOpG%2BdxQUuj3QQDER9PWifuy5Sf61XcY8xvLlWpYDzEAn24GJmMrpqIlXdufrDZubWzIj5eWUcbc74C%2B3z8eQByXTRL9ulvgrIz2fHukDM1pWxTC6xndyND2LhvCw5MgvooytVChrvJURio9DQR2hhg%2BKIJgwtngPMA4ub%2FoiX8J4VLtU6a%2B%2ForiZs4beh6O7WM6yx2zepQWYwJtQy4J%2FJPGsffN0dWdTN40nPrd%2FbHQi90ywAI9htMGGGlqvUGr4A7wa6RQDJRb3rB1gZcOIlLS03Ux5cf7aJiiUIW%2BElRgMrpOJ67xyWjcYgofq5Y2%2FcjcOWsHl1AWbOl%2FdYesYkhsZQBC5Ro%2FfkMLiXgQNJlT2H4JKrGpaO4sbWTRlG%2BU1u6CVTKWFzYcHV%2FYKYUHdXeb7pEIisfwfwbHYHPH4lZGzddxq7aiAZpD5zSHevTzH7CUC671wE6sQpLaJThy3bzL1OqIG7GaV8j0237gzzH%2BcCEkZiUVpxmwIaK4XUDkykzjxMv%2BX8rzmiKqZiMDd%2F6rb7aPLLUTLzKNrfvrweJOis6qKIHzDSz68r9m83buGIRPqGRg8ik22jYY4qY8BRK2fRVwx0Ai0z40jAgkIwt5SYvwY6pgGK%2F0Jde3MeHuP6KjZfgLmhri2b17YprjOogQM4IYCITmD6CJqTNcUxW1%2BqQ53w1O6a%2FJljbuGrn4Ck8vVKukRKcHBNdrHQohwHOyetau7hMpWlW2DS9quxfqzkaCXpQv5a2KUi40BFqMhnviW7Ss2XDkGt4VzswBNgZfQ4rGT0Q8GIIy5V2hwgzQpDPWGMmvqCGk0UmtPkMMQdInLqTCZGEVFJMZf7&X-Amz-Signature=3a8414b5f5fd07629658b94eb6edc433c579e6c3c4d445327cb7ef7ca8330a23&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE7CML6K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKsKoEzhrCHOEZR2LsLI7Hgmlu0H9lzcB6uoXWnssmlAiBO63AqMFfO%2FcHBNf0pauGLe4pNQWeoDmvcdq8eoLbxkir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJovTmoVg5ZL%2FYxdQKtwDAE86wmdI8lOPchiO1mLOpG%2BdxQUuj3QQDER9PWifuy5Sf61XcY8xvLlWpYDzEAn24GJmMrpqIlXdufrDZubWzIj5eWUcbc74C%2B3z8eQByXTRL9ulvgrIz2fHukDM1pWxTC6xndyND2LhvCw5MgvooytVChrvJURio9DQR2hhg%2BKIJgwtngPMA4ub%2FoiX8J4VLtU6a%2B%2ForiZs4beh6O7WM6yx2zepQWYwJtQy4J%2FJPGsffN0dWdTN40nPrd%2FbHQi90ywAI9htMGGGlqvUGr4A7wa6RQDJRb3rB1gZcOIlLS03Ux5cf7aJiiUIW%2BElRgMrpOJ67xyWjcYgofq5Y2%2FcjcOWsHl1AWbOl%2FdYesYkhsZQBC5Ro%2FfkMLiXgQNJlT2H4JKrGpaO4sbWTRlG%2BU1u6CVTKWFzYcHV%2FYKYUHdXeb7pEIisfwfwbHYHPH4lZGzddxq7aiAZpD5zSHevTzH7CUC671wE6sQpLaJThy3bzL1OqIG7GaV8j0237gzzH%2BcCEkZiUVpxmwIaK4XUDkykzjxMv%2BX8rzmiKqZiMDd%2F6rb7aPLLUTLzKNrfvrweJOis6qKIHzDSz68r9m83buGIRPqGRg8ik22jYY4qY8BRK2fRVwx0Ai0z40jAgkIwt5SYvwY6pgGK%2F0Jde3MeHuP6KjZfgLmhri2b17YprjOogQM4IYCITmD6CJqTNcUxW1%2BqQ53w1O6a%2FJljbuGrn4Ck8vVKukRKcHBNdrHQohwHOyetau7hMpWlW2DS9quxfqzkaCXpQv5a2KUi40BFqMhnviW7Ss2XDkGt4VzswBNgZfQ4rGT0Q8GIIy5V2hwgzQpDPWGMmvqCGk0UmtPkMMQdInLqTCZGEVFJMZf7&X-Amz-Signature=cd4d48208a68565b9ce477e66024d7931bad03235a16c27553f643b43735989f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE7CML6K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKsKoEzhrCHOEZR2LsLI7Hgmlu0H9lzcB6uoXWnssmlAiBO63AqMFfO%2FcHBNf0pauGLe4pNQWeoDmvcdq8eoLbxkir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJovTmoVg5ZL%2FYxdQKtwDAE86wmdI8lOPchiO1mLOpG%2BdxQUuj3QQDER9PWifuy5Sf61XcY8xvLlWpYDzEAn24GJmMrpqIlXdufrDZubWzIj5eWUcbc74C%2B3z8eQByXTRL9ulvgrIz2fHukDM1pWxTC6xndyND2LhvCw5MgvooytVChrvJURio9DQR2hhg%2BKIJgwtngPMA4ub%2FoiX8J4VLtU6a%2B%2ForiZs4beh6O7WM6yx2zepQWYwJtQy4J%2FJPGsffN0dWdTN40nPrd%2FbHQi90ywAI9htMGGGlqvUGr4A7wa6RQDJRb3rB1gZcOIlLS03Ux5cf7aJiiUIW%2BElRgMrpOJ67xyWjcYgofq5Y2%2FcjcOWsHl1AWbOl%2FdYesYkhsZQBC5Ro%2FfkMLiXgQNJlT2H4JKrGpaO4sbWTRlG%2BU1u6CVTKWFzYcHV%2FYKYUHdXeb7pEIisfwfwbHYHPH4lZGzddxq7aiAZpD5zSHevTzH7CUC671wE6sQpLaJThy3bzL1OqIG7GaV8j0237gzzH%2BcCEkZiUVpxmwIaK4XUDkykzjxMv%2BX8rzmiKqZiMDd%2F6rb7aPLLUTLzKNrfvrweJOis6qKIHzDSz68r9m83buGIRPqGRg8ik22jYY4qY8BRK2fRVwx0Ai0z40jAgkIwt5SYvwY6pgGK%2F0Jde3MeHuP6KjZfgLmhri2b17YprjOogQM4IYCITmD6CJqTNcUxW1%2BqQ53w1O6a%2FJljbuGrn4Ck8vVKukRKcHBNdrHQohwHOyetau7hMpWlW2DS9quxfqzkaCXpQv5a2KUi40BFqMhnviW7Ss2XDkGt4VzswBNgZfQ4rGT0Q8GIIy5V2hwgzQpDPWGMmvqCGk0UmtPkMMQdInLqTCZGEVFJMZf7&X-Amz-Signature=002f6d7153c67af4d6bdf8387b681e8b7263188757d205d33bd173b5c0d31160&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

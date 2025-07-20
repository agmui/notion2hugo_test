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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYE23W2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh9YQjx6YmSdOvwgYn1PWP0EAB3IHu7EwD5RZgEmyj6AiEAxZaySgIVe%2FpFv%2BfTC0zEN%2BrzjzGSQDf1e48R54sa%2BbgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn20WWpjYgQd2s3WyrcAxCLGdgNhfSf4Yv05iXETs9mLMC9rFMMsF%2B6PCKvb6TOh2dM6b9Q7gYJEcCiL8VOSvZ1GGe1w29THPL2%2FdUvb7pWZO30%2FWpBa7qc1yC6GjimRsblbjHULF90WjeFbsPA%2BYtAHzny5UtniBXzNOuAAH%2FWVtetuhFcmZZi0A6C6yDDFPBDhG2ncFMMa7OAJSjoE6Oi63HzylQ43YjsLSAp%2F1x4YMx39FatFzz6%2BPcBy4SJ%2FDtw4tU9SjEP6PI3erevVM9ur62x9%2BGYinv8JYFMLHmqJOk0qqZSqUN2bmPttQR%2Btcsce57J3YcZs4xSMYAOc6TAcTAT0bPcRxXyi6iGMnSngEflgoVWQVByHY6vyUjM97MzPAAV51rl4BjbM6ptWzFDheIW3c5wV9N%2BrU4ik4o5kQKSaTwXrgStR1U9yVLWwa6HcnqBTnq5NMWre%2BxPKdHjzKFPNTqq7gJouVBmxyp%2B3Jdk5yHqWmdL5A8XctBVoDTfMGgqw21mIp1juX9Lf3iIGHfdB8TSQbQ1VEjTf3iK%2BErUJ%2F2h9ZJ3%2B2FykpWFCF4Cm2R3LKMgG4WWVVRI%2FivocWmRUCDiAGuPgQcE6GaRosinWkNXH0GcY%2B3XqEYiQ6NxpEFzGiBd8B9OMKuS8cMGOqUBUa%2FCeQXeDj5wxAvsp%2FR5oLXOoV%2BXesUoiyUHF6FuedmEgmH1YMdR3Csslq8e2aRCOvqnvthgTuYs35sUjLqNc3KBTb%2FKLPNmYTMsoQ8WEhxq4Q2VXXFnlrbQ%2BozNpb8maXNpN4rpYcuFbJBvakT7J4kLqWBzEDKwxy%2BX4Tqid9UQkO%2FtN4Wjv4ySTi5ZHjY8afuoqvHFVk2kEoSxhv0XR4z4Tiad&X-Amz-Signature=80c222e5b96095cd27ee0a539cda9e5593633f5e0d2509f933684f8bee9a2c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYE23W2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh9YQjx6YmSdOvwgYn1PWP0EAB3IHu7EwD5RZgEmyj6AiEAxZaySgIVe%2FpFv%2BfTC0zEN%2BrzjzGSQDf1e48R54sa%2BbgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn20WWpjYgQd2s3WyrcAxCLGdgNhfSf4Yv05iXETs9mLMC9rFMMsF%2B6PCKvb6TOh2dM6b9Q7gYJEcCiL8VOSvZ1GGe1w29THPL2%2FdUvb7pWZO30%2FWpBa7qc1yC6GjimRsblbjHULF90WjeFbsPA%2BYtAHzny5UtniBXzNOuAAH%2FWVtetuhFcmZZi0A6C6yDDFPBDhG2ncFMMa7OAJSjoE6Oi63HzylQ43YjsLSAp%2F1x4YMx39FatFzz6%2BPcBy4SJ%2FDtw4tU9SjEP6PI3erevVM9ur62x9%2BGYinv8JYFMLHmqJOk0qqZSqUN2bmPttQR%2Btcsce57J3YcZs4xSMYAOc6TAcTAT0bPcRxXyi6iGMnSngEflgoVWQVByHY6vyUjM97MzPAAV51rl4BjbM6ptWzFDheIW3c5wV9N%2BrU4ik4o5kQKSaTwXrgStR1U9yVLWwa6HcnqBTnq5NMWre%2BxPKdHjzKFPNTqq7gJouVBmxyp%2B3Jdk5yHqWmdL5A8XctBVoDTfMGgqw21mIp1juX9Lf3iIGHfdB8TSQbQ1VEjTf3iK%2BErUJ%2F2h9ZJ3%2B2FykpWFCF4Cm2R3LKMgG4WWVVRI%2FivocWmRUCDiAGuPgQcE6GaRosinWkNXH0GcY%2B3XqEYiQ6NxpEFzGiBd8B9OMKuS8cMGOqUBUa%2FCeQXeDj5wxAvsp%2FR5oLXOoV%2BXesUoiyUHF6FuedmEgmH1YMdR3Csslq8e2aRCOvqnvthgTuYs35sUjLqNc3KBTb%2FKLPNmYTMsoQ8WEhxq4Q2VXXFnlrbQ%2BozNpb8maXNpN4rpYcuFbJBvakT7J4kLqWBzEDKwxy%2BX4Tqid9UQkO%2FtN4Wjv4ySTi5ZHjY8afuoqvHFVk2kEoSxhv0XR4z4Tiad&X-Amz-Signature=ac191944649e8b3ca63390551c8d06ac776de7a44353f64e868f6f49962a5112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYE23W2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh9YQjx6YmSdOvwgYn1PWP0EAB3IHu7EwD5RZgEmyj6AiEAxZaySgIVe%2FpFv%2BfTC0zEN%2BrzjzGSQDf1e48R54sa%2BbgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn20WWpjYgQd2s3WyrcAxCLGdgNhfSf4Yv05iXETs9mLMC9rFMMsF%2B6PCKvb6TOh2dM6b9Q7gYJEcCiL8VOSvZ1GGe1w29THPL2%2FdUvb7pWZO30%2FWpBa7qc1yC6GjimRsblbjHULF90WjeFbsPA%2BYtAHzny5UtniBXzNOuAAH%2FWVtetuhFcmZZi0A6C6yDDFPBDhG2ncFMMa7OAJSjoE6Oi63HzylQ43YjsLSAp%2F1x4YMx39FatFzz6%2BPcBy4SJ%2FDtw4tU9SjEP6PI3erevVM9ur62x9%2BGYinv8JYFMLHmqJOk0qqZSqUN2bmPttQR%2Btcsce57J3YcZs4xSMYAOc6TAcTAT0bPcRxXyi6iGMnSngEflgoVWQVByHY6vyUjM97MzPAAV51rl4BjbM6ptWzFDheIW3c5wV9N%2BrU4ik4o5kQKSaTwXrgStR1U9yVLWwa6HcnqBTnq5NMWre%2BxPKdHjzKFPNTqq7gJouVBmxyp%2B3Jdk5yHqWmdL5A8XctBVoDTfMGgqw21mIp1juX9Lf3iIGHfdB8TSQbQ1VEjTf3iK%2BErUJ%2F2h9ZJ3%2B2FykpWFCF4Cm2R3LKMgG4WWVVRI%2FivocWmRUCDiAGuPgQcE6GaRosinWkNXH0GcY%2B3XqEYiQ6NxpEFzGiBd8B9OMKuS8cMGOqUBUa%2FCeQXeDj5wxAvsp%2FR5oLXOoV%2BXesUoiyUHF6FuedmEgmH1YMdR3Csslq8e2aRCOvqnvthgTuYs35sUjLqNc3KBTb%2FKLPNmYTMsoQ8WEhxq4Q2VXXFnlrbQ%2BozNpb8maXNpN4rpYcuFbJBvakT7J4kLqWBzEDKwxy%2BX4Tqid9UQkO%2FtN4Wjv4ySTi5ZHjY8afuoqvHFVk2kEoSxhv0XR4z4Tiad&X-Amz-Signature=2934068da6e79ef91c08839a8645798a79e11cb7512c3bf89434ac86f49c6664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYE23W2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh9YQjx6YmSdOvwgYn1PWP0EAB3IHu7EwD5RZgEmyj6AiEAxZaySgIVe%2FpFv%2BfTC0zEN%2BrzjzGSQDf1e48R54sa%2BbgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn20WWpjYgQd2s3WyrcAxCLGdgNhfSf4Yv05iXETs9mLMC9rFMMsF%2B6PCKvb6TOh2dM6b9Q7gYJEcCiL8VOSvZ1GGe1w29THPL2%2FdUvb7pWZO30%2FWpBa7qc1yC6GjimRsblbjHULF90WjeFbsPA%2BYtAHzny5UtniBXzNOuAAH%2FWVtetuhFcmZZi0A6C6yDDFPBDhG2ncFMMa7OAJSjoE6Oi63HzylQ43YjsLSAp%2F1x4YMx39FatFzz6%2BPcBy4SJ%2FDtw4tU9SjEP6PI3erevVM9ur62x9%2BGYinv8JYFMLHmqJOk0qqZSqUN2bmPttQR%2Btcsce57J3YcZs4xSMYAOc6TAcTAT0bPcRxXyi6iGMnSngEflgoVWQVByHY6vyUjM97MzPAAV51rl4BjbM6ptWzFDheIW3c5wV9N%2BrU4ik4o5kQKSaTwXrgStR1U9yVLWwa6HcnqBTnq5NMWre%2BxPKdHjzKFPNTqq7gJouVBmxyp%2B3Jdk5yHqWmdL5A8XctBVoDTfMGgqw21mIp1juX9Lf3iIGHfdB8TSQbQ1VEjTf3iK%2BErUJ%2F2h9ZJ3%2B2FykpWFCF4Cm2R3LKMgG4WWVVRI%2FivocWmRUCDiAGuPgQcE6GaRosinWkNXH0GcY%2B3XqEYiQ6NxpEFzGiBd8B9OMKuS8cMGOqUBUa%2FCeQXeDj5wxAvsp%2FR5oLXOoV%2BXesUoiyUHF6FuedmEgmH1YMdR3Csslq8e2aRCOvqnvthgTuYs35sUjLqNc3KBTb%2FKLPNmYTMsoQ8WEhxq4Q2VXXFnlrbQ%2BozNpb8maXNpN4rpYcuFbJBvakT7J4kLqWBzEDKwxy%2BX4Tqid9UQkO%2FtN4Wjv4ySTi5ZHjY8afuoqvHFVk2kEoSxhv0XR4z4Tiad&X-Amz-Signature=0b4b6c247438f79fa193408c0e7f3d1fe60a1c58b41480c28f1525305f2251d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYE23W2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh9YQjx6YmSdOvwgYn1PWP0EAB3IHu7EwD5RZgEmyj6AiEAxZaySgIVe%2FpFv%2BfTC0zEN%2BrzjzGSQDf1e48R54sa%2BbgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn20WWpjYgQd2s3WyrcAxCLGdgNhfSf4Yv05iXETs9mLMC9rFMMsF%2B6PCKvb6TOh2dM6b9Q7gYJEcCiL8VOSvZ1GGe1w29THPL2%2FdUvb7pWZO30%2FWpBa7qc1yC6GjimRsblbjHULF90WjeFbsPA%2BYtAHzny5UtniBXzNOuAAH%2FWVtetuhFcmZZi0A6C6yDDFPBDhG2ncFMMa7OAJSjoE6Oi63HzylQ43YjsLSAp%2F1x4YMx39FatFzz6%2BPcBy4SJ%2FDtw4tU9SjEP6PI3erevVM9ur62x9%2BGYinv8JYFMLHmqJOk0qqZSqUN2bmPttQR%2Btcsce57J3YcZs4xSMYAOc6TAcTAT0bPcRxXyi6iGMnSngEflgoVWQVByHY6vyUjM97MzPAAV51rl4BjbM6ptWzFDheIW3c5wV9N%2BrU4ik4o5kQKSaTwXrgStR1U9yVLWwa6HcnqBTnq5NMWre%2BxPKdHjzKFPNTqq7gJouVBmxyp%2B3Jdk5yHqWmdL5A8XctBVoDTfMGgqw21mIp1juX9Lf3iIGHfdB8TSQbQ1VEjTf3iK%2BErUJ%2F2h9ZJ3%2B2FykpWFCF4Cm2R3LKMgG4WWVVRI%2FivocWmRUCDiAGuPgQcE6GaRosinWkNXH0GcY%2B3XqEYiQ6NxpEFzGiBd8B9OMKuS8cMGOqUBUa%2FCeQXeDj5wxAvsp%2FR5oLXOoV%2BXesUoiyUHF6FuedmEgmH1YMdR3Csslq8e2aRCOvqnvthgTuYs35sUjLqNc3KBTb%2FKLPNmYTMsoQ8WEhxq4Q2VXXFnlrbQ%2BozNpb8maXNpN4rpYcuFbJBvakT7J4kLqWBzEDKwxy%2BX4Tqid9UQkO%2FtN4Wjv4ySTi5ZHjY8afuoqvHFVk2kEoSxhv0XR4z4Tiad&X-Amz-Signature=d3deb277475e5c0cf3786fafdd5be7275fa687b5cc913b390d4e46e59f5100ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYE23W2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh9YQjx6YmSdOvwgYn1PWP0EAB3IHu7EwD5RZgEmyj6AiEAxZaySgIVe%2FpFv%2BfTC0zEN%2BrzjzGSQDf1e48R54sa%2BbgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn20WWpjYgQd2s3WyrcAxCLGdgNhfSf4Yv05iXETs9mLMC9rFMMsF%2B6PCKvb6TOh2dM6b9Q7gYJEcCiL8VOSvZ1GGe1w29THPL2%2FdUvb7pWZO30%2FWpBa7qc1yC6GjimRsblbjHULF90WjeFbsPA%2BYtAHzny5UtniBXzNOuAAH%2FWVtetuhFcmZZi0A6C6yDDFPBDhG2ncFMMa7OAJSjoE6Oi63HzylQ43YjsLSAp%2F1x4YMx39FatFzz6%2BPcBy4SJ%2FDtw4tU9SjEP6PI3erevVM9ur62x9%2BGYinv8JYFMLHmqJOk0qqZSqUN2bmPttQR%2Btcsce57J3YcZs4xSMYAOc6TAcTAT0bPcRxXyi6iGMnSngEflgoVWQVByHY6vyUjM97MzPAAV51rl4BjbM6ptWzFDheIW3c5wV9N%2BrU4ik4o5kQKSaTwXrgStR1U9yVLWwa6HcnqBTnq5NMWre%2BxPKdHjzKFPNTqq7gJouVBmxyp%2B3Jdk5yHqWmdL5A8XctBVoDTfMGgqw21mIp1juX9Lf3iIGHfdB8TSQbQ1VEjTf3iK%2BErUJ%2F2h9ZJ3%2B2FykpWFCF4Cm2R3LKMgG4WWVVRI%2FivocWmRUCDiAGuPgQcE6GaRosinWkNXH0GcY%2B3XqEYiQ6NxpEFzGiBd8B9OMKuS8cMGOqUBUa%2FCeQXeDj5wxAvsp%2FR5oLXOoV%2BXesUoiyUHF6FuedmEgmH1YMdR3Csslq8e2aRCOvqnvthgTuYs35sUjLqNc3KBTb%2FKLPNmYTMsoQ8WEhxq4Q2VXXFnlrbQ%2BozNpb8maXNpN4rpYcuFbJBvakT7J4kLqWBzEDKwxy%2BX4Tqid9UQkO%2FtN4Wjv4ySTi5ZHjY8afuoqvHFVk2kEoSxhv0XR4z4Tiad&X-Amz-Signature=7a784480a7fc710e3ca86666ce886e16587ac9436b6730206afa037d05f81f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYE23W2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh9YQjx6YmSdOvwgYn1PWP0EAB3IHu7EwD5RZgEmyj6AiEAxZaySgIVe%2FpFv%2BfTC0zEN%2BrzjzGSQDf1e48R54sa%2BbgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn20WWpjYgQd2s3WyrcAxCLGdgNhfSf4Yv05iXETs9mLMC9rFMMsF%2B6PCKvb6TOh2dM6b9Q7gYJEcCiL8VOSvZ1GGe1w29THPL2%2FdUvb7pWZO30%2FWpBa7qc1yC6GjimRsblbjHULF90WjeFbsPA%2BYtAHzny5UtniBXzNOuAAH%2FWVtetuhFcmZZi0A6C6yDDFPBDhG2ncFMMa7OAJSjoE6Oi63HzylQ43YjsLSAp%2F1x4YMx39FatFzz6%2BPcBy4SJ%2FDtw4tU9SjEP6PI3erevVM9ur62x9%2BGYinv8JYFMLHmqJOk0qqZSqUN2bmPttQR%2Btcsce57J3YcZs4xSMYAOc6TAcTAT0bPcRxXyi6iGMnSngEflgoVWQVByHY6vyUjM97MzPAAV51rl4BjbM6ptWzFDheIW3c5wV9N%2BrU4ik4o5kQKSaTwXrgStR1U9yVLWwa6HcnqBTnq5NMWre%2BxPKdHjzKFPNTqq7gJouVBmxyp%2B3Jdk5yHqWmdL5A8XctBVoDTfMGgqw21mIp1juX9Lf3iIGHfdB8TSQbQ1VEjTf3iK%2BErUJ%2F2h9ZJ3%2B2FykpWFCF4Cm2R3LKMgG4WWVVRI%2FivocWmRUCDiAGuPgQcE6GaRosinWkNXH0GcY%2B3XqEYiQ6NxpEFzGiBd8B9OMKuS8cMGOqUBUa%2FCeQXeDj5wxAvsp%2FR5oLXOoV%2BXesUoiyUHF6FuedmEgmH1YMdR3Csslq8e2aRCOvqnvthgTuYs35sUjLqNc3KBTb%2FKLPNmYTMsoQ8WEhxq4Q2VXXFnlrbQ%2BozNpb8maXNpN4rpYcuFbJBvakT7J4kLqWBzEDKwxy%2BX4Tqid9UQkO%2FtN4Wjv4ySTi5ZHjY8afuoqvHFVk2kEoSxhv0XR4z4Tiad&X-Amz-Signature=d805c11ff7508be9ceafc3607b381e5c3d92e05c3c395d529e01020fd2ec13b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

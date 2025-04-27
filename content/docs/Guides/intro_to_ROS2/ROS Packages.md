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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFVOMBP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEObt5rmWUt0Y0DsuM%2FkbmxDxQwy5mRv65GrFyIJfNXDAiA3bZUf7tHTjccNYOLNBIfEBvcRnNu6wbDgsB1ZRGfIbir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8WfGSeOH9LajElXHKtwDVEZYNxb1RM3YHmvVA46A%2Fnn8Mp%2Blbe28OwJg7J%2FfSgUHxZYpMFugo1Sa3qlpEnW8dHEPQ96moR5b5Gyt1RduDghZpuJm02xPVJjkLM47IDrETvU5VOoYhmNSRFfu2dlGSMBtmQGqtr7veICY0kXKBvbXVj%2FOlsRd%2BKHlcmLkp87YoBa5ZN8ZlKvAUFAkj02BXbCCgKaJZvwNbNdYOoBrb1uSp87ske8%2FW19RmxXV3YYXCKnLdU673tsyAzbN37FooS3H10yQRMLennpIsZ6ALRlC907VsCkOQszBFzGp%2BCYLxccRpWHo9Z5wwLIAJ9Zy6kTc2Kh7WY6FrEuUj1Ju6gaPi%2F5CFZ%2B1ZR%2BjxYdaJxtMCnqB1runcF6Ws1sy649zK93vGixJWtyUik1Fxdhyf19NKhgYspI5j2CmTYHUOfHm5%2BB0S1HPScXDty04vySt1PBJmHzWaXLItzlV08Ix466EkA41b%2BAivMcWy9%2BJ1Q48KQ%2BVgOloES0Z4oSI2DU%2FKKfRD6tF13ASqVVPe79IIHiwUh69GZ9Y7i%2Bgpe2SZ%2FjQIhzlKR8Q%2BOKrusFwGV6ikEyJY9rEQQR8RGUSqdQvFo953pmrLzwgg1cBfx8SlaJTtrIHK0TOBsmYqLYwx4y4wAY6pgF1wW5V%2FfV8DR5Hzh4aorDPmJiK8ADzA3i%2BWYrCc3KCQmGNW47OiyLRs9M6%2Bf3bKxrxg9cKWvPWq4qS%2FqXFrqPEEHJru2GJ02JjXCt4SAv5aRmDn1FX3kNQuOfQclHjlEvVHq0a9bOyKa0EcGlMMb9vSbMqA3JwKfl42Td%2BB5%2F4DSsEtFSgeHlu1ddGIYvj7aqtEoXmXyvYytrasDQMDuDaVhdXyA4G&X-Amz-Signature=a51958c2c5e8c72300241eaba206747f34503ede8070f2036047d6b156316ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFVOMBP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEObt5rmWUt0Y0DsuM%2FkbmxDxQwy5mRv65GrFyIJfNXDAiA3bZUf7tHTjccNYOLNBIfEBvcRnNu6wbDgsB1ZRGfIbir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8WfGSeOH9LajElXHKtwDVEZYNxb1RM3YHmvVA46A%2Fnn8Mp%2Blbe28OwJg7J%2FfSgUHxZYpMFugo1Sa3qlpEnW8dHEPQ96moR5b5Gyt1RduDghZpuJm02xPVJjkLM47IDrETvU5VOoYhmNSRFfu2dlGSMBtmQGqtr7veICY0kXKBvbXVj%2FOlsRd%2BKHlcmLkp87YoBa5ZN8ZlKvAUFAkj02BXbCCgKaJZvwNbNdYOoBrb1uSp87ske8%2FW19RmxXV3YYXCKnLdU673tsyAzbN37FooS3H10yQRMLennpIsZ6ALRlC907VsCkOQszBFzGp%2BCYLxccRpWHo9Z5wwLIAJ9Zy6kTc2Kh7WY6FrEuUj1Ju6gaPi%2F5CFZ%2B1ZR%2BjxYdaJxtMCnqB1runcF6Ws1sy649zK93vGixJWtyUik1Fxdhyf19NKhgYspI5j2CmTYHUOfHm5%2BB0S1HPScXDty04vySt1PBJmHzWaXLItzlV08Ix466EkA41b%2BAivMcWy9%2BJ1Q48KQ%2BVgOloES0Z4oSI2DU%2FKKfRD6tF13ASqVVPe79IIHiwUh69GZ9Y7i%2Bgpe2SZ%2FjQIhzlKR8Q%2BOKrusFwGV6ikEyJY9rEQQR8RGUSqdQvFo953pmrLzwgg1cBfx8SlaJTtrIHK0TOBsmYqLYwx4y4wAY6pgF1wW5V%2FfV8DR5Hzh4aorDPmJiK8ADzA3i%2BWYrCc3KCQmGNW47OiyLRs9M6%2Bf3bKxrxg9cKWvPWq4qS%2FqXFrqPEEHJru2GJ02JjXCt4SAv5aRmDn1FX3kNQuOfQclHjlEvVHq0a9bOyKa0EcGlMMb9vSbMqA3JwKfl42Td%2BB5%2F4DSsEtFSgeHlu1ddGIYvj7aqtEoXmXyvYytrasDQMDuDaVhdXyA4G&X-Amz-Signature=fba73c84e77d6a005399da264d3910a7bb7a1b58dc7c47e9668a403b1baa8259&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFVOMBP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEObt5rmWUt0Y0DsuM%2FkbmxDxQwy5mRv65GrFyIJfNXDAiA3bZUf7tHTjccNYOLNBIfEBvcRnNu6wbDgsB1ZRGfIbir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8WfGSeOH9LajElXHKtwDVEZYNxb1RM3YHmvVA46A%2Fnn8Mp%2Blbe28OwJg7J%2FfSgUHxZYpMFugo1Sa3qlpEnW8dHEPQ96moR5b5Gyt1RduDghZpuJm02xPVJjkLM47IDrETvU5VOoYhmNSRFfu2dlGSMBtmQGqtr7veICY0kXKBvbXVj%2FOlsRd%2BKHlcmLkp87YoBa5ZN8ZlKvAUFAkj02BXbCCgKaJZvwNbNdYOoBrb1uSp87ske8%2FW19RmxXV3YYXCKnLdU673tsyAzbN37FooS3H10yQRMLennpIsZ6ALRlC907VsCkOQszBFzGp%2BCYLxccRpWHo9Z5wwLIAJ9Zy6kTc2Kh7WY6FrEuUj1Ju6gaPi%2F5CFZ%2B1ZR%2BjxYdaJxtMCnqB1runcF6Ws1sy649zK93vGixJWtyUik1Fxdhyf19NKhgYspI5j2CmTYHUOfHm5%2BB0S1HPScXDty04vySt1PBJmHzWaXLItzlV08Ix466EkA41b%2BAivMcWy9%2BJ1Q48KQ%2BVgOloES0Z4oSI2DU%2FKKfRD6tF13ASqVVPe79IIHiwUh69GZ9Y7i%2Bgpe2SZ%2FjQIhzlKR8Q%2BOKrusFwGV6ikEyJY9rEQQR8RGUSqdQvFo953pmrLzwgg1cBfx8SlaJTtrIHK0TOBsmYqLYwx4y4wAY6pgF1wW5V%2FfV8DR5Hzh4aorDPmJiK8ADzA3i%2BWYrCc3KCQmGNW47OiyLRs9M6%2Bf3bKxrxg9cKWvPWq4qS%2FqXFrqPEEHJru2GJ02JjXCt4SAv5aRmDn1FX3kNQuOfQclHjlEvVHq0a9bOyKa0EcGlMMb9vSbMqA3JwKfl42Td%2BB5%2F4DSsEtFSgeHlu1ddGIYvj7aqtEoXmXyvYytrasDQMDuDaVhdXyA4G&X-Amz-Signature=9de1f4f5d409694a4838dfc6c07a033c0c226cd4868058243755532e225dde28&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFVOMBP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEObt5rmWUt0Y0DsuM%2FkbmxDxQwy5mRv65GrFyIJfNXDAiA3bZUf7tHTjccNYOLNBIfEBvcRnNu6wbDgsB1ZRGfIbir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8WfGSeOH9LajElXHKtwDVEZYNxb1RM3YHmvVA46A%2Fnn8Mp%2Blbe28OwJg7J%2FfSgUHxZYpMFugo1Sa3qlpEnW8dHEPQ96moR5b5Gyt1RduDghZpuJm02xPVJjkLM47IDrETvU5VOoYhmNSRFfu2dlGSMBtmQGqtr7veICY0kXKBvbXVj%2FOlsRd%2BKHlcmLkp87YoBa5ZN8ZlKvAUFAkj02BXbCCgKaJZvwNbNdYOoBrb1uSp87ske8%2FW19RmxXV3YYXCKnLdU673tsyAzbN37FooS3H10yQRMLennpIsZ6ALRlC907VsCkOQszBFzGp%2BCYLxccRpWHo9Z5wwLIAJ9Zy6kTc2Kh7WY6FrEuUj1Ju6gaPi%2F5CFZ%2B1ZR%2BjxYdaJxtMCnqB1runcF6Ws1sy649zK93vGixJWtyUik1Fxdhyf19NKhgYspI5j2CmTYHUOfHm5%2BB0S1HPScXDty04vySt1PBJmHzWaXLItzlV08Ix466EkA41b%2BAivMcWy9%2BJ1Q48KQ%2BVgOloES0Z4oSI2DU%2FKKfRD6tF13ASqVVPe79IIHiwUh69GZ9Y7i%2Bgpe2SZ%2FjQIhzlKR8Q%2BOKrusFwGV6ikEyJY9rEQQR8RGUSqdQvFo953pmrLzwgg1cBfx8SlaJTtrIHK0TOBsmYqLYwx4y4wAY6pgF1wW5V%2FfV8DR5Hzh4aorDPmJiK8ADzA3i%2BWYrCc3KCQmGNW47OiyLRs9M6%2Bf3bKxrxg9cKWvPWq4qS%2FqXFrqPEEHJru2GJ02JjXCt4SAv5aRmDn1FX3kNQuOfQclHjlEvVHq0a9bOyKa0EcGlMMb9vSbMqA3JwKfl42Td%2BB5%2F4DSsEtFSgeHlu1ddGIYvj7aqtEoXmXyvYytrasDQMDuDaVhdXyA4G&X-Amz-Signature=7d580971e817bbf32f424ca77ec450bb2894e97b2b9dd841909b59a737509997&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFVOMBP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEObt5rmWUt0Y0DsuM%2FkbmxDxQwy5mRv65GrFyIJfNXDAiA3bZUf7tHTjccNYOLNBIfEBvcRnNu6wbDgsB1ZRGfIbir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8WfGSeOH9LajElXHKtwDVEZYNxb1RM3YHmvVA46A%2Fnn8Mp%2Blbe28OwJg7J%2FfSgUHxZYpMFugo1Sa3qlpEnW8dHEPQ96moR5b5Gyt1RduDghZpuJm02xPVJjkLM47IDrETvU5VOoYhmNSRFfu2dlGSMBtmQGqtr7veICY0kXKBvbXVj%2FOlsRd%2BKHlcmLkp87YoBa5ZN8ZlKvAUFAkj02BXbCCgKaJZvwNbNdYOoBrb1uSp87ske8%2FW19RmxXV3YYXCKnLdU673tsyAzbN37FooS3H10yQRMLennpIsZ6ALRlC907VsCkOQszBFzGp%2BCYLxccRpWHo9Z5wwLIAJ9Zy6kTc2Kh7WY6FrEuUj1Ju6gaPi%2F5CFZ%2B1ZR%2BjxYdaJxtMCnqB1runcF6Ws1sy649zK93vGixJWtyUik1Fxdhyf19NKhgYspI5j2CmTYHUOfHm5%2BB0S1HPScXDty04vySt1PBJmHzWaXLItzlV08Ix466EkA41b%2BAivMcWy9%2BJ1Q48KQ%2BVgOloES0Z4oSI2DU%2FKKfRD6tF13ASqVVPe79IIHiwUh69GZ9Y7i%2Bgpe2SZ%2FjQIhzlKR8Q%2BOKrusFwGV6ikEyJY9rEQQR8RGUSqdQvFo953pmrLzwgg1cBfx8SlaJTtrIHK0TOBsmYqLYwx4y4wAY6pgF1wW5V%2FfV8DR5Hzh4aorDPmJiK8ADzA3i%2BWYrCc3KCQmGNW47OiyLRs9M6%2Bf3bKxrxg9cKWvPWq4qS%2FqXFrqPEEHJru2GJ02JjXCt4SAv5aRmDn1FX3kNQuOfQclHjlEvVHq0a9bOyKa0EcGlMMb9vSbMqA3JwKfl42Td%2BB5%2F4DSsEtFSgeHlu1ddGIYvj7aqtEoXmXyvYytrasDQMDuDaVhdXyA4G&X-Amz-Signature=f5bf98567e36506be64bad932269e5a645984e6eec4389fc5b0105c006320ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFVOMBP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEObt5rmWUt0Y0DsuM%2FkbmxDxQwy5mRv65GrFyIJfNXDAiA3bZUf7tHTjccNYOLNBIfEBvcRnNu6wbDgsB1ZRGfIbir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8WfGSeOH9LajElXHKtwDVEZYNxb1RM3YHmvVA46A%2Fnn8Mp%2Blbe28OwJg7J%2FfSgUHxZYpMFugo1Sa3qlpEnW8dHEPQ96moR5b5Gyt1RduDghZpuJm02xPVJjkLM47IDrETvU5VOoYhmNSRFfu2dlGSMBtmQGqtr7veICY0kXKBvbXVj%2FOlsRd%2BKHlcmLkp87YoBa5ZN8ZlKvAUFAkj02BXbCCgKaJZvwNbNdYOoBrb1uSp87ske8%2FW19RmxXV3YYXCKnLdU673tsyAzbN37FooS3H10yQRMLennpIsZ6ALRlC907VsCkOQszBFzGp%2BCYLxccRpWHo9Z5wwLIAJ9Zy6kTc2Kh7WY6FrEuUj1Ju6gaPi%2F5CFZ%2B1ZR%2BjxYdaJxtMCnqB1runcF6Ws1sy649zK93vGixJWtyUik1Fxdhyf19NKhgYspI5j2CmTYHUOfHm5%2BB0S1HPScXDty04vySt1PBJmHzWaXLItzlV08Ix466EkA41b%2BAivMcWy9%2BJ1Q48KQ%2BVgOloES0Z4oSI2DU%2FKKfRD6tF13ASqVVPe79IIHiwUh69GZ9Y7i%2Bgpe2SZ%2FjQIhzlKR8Q%2BOKrusFwGV6ikEyJY9rEQQR8RGUSqdQvFo953pmrLzwgg1cBfx8SlaJTtrIHK0TOBsmYqLYwx4y4wAY6pgF1wW5V%2FfV8DR5Hzh4aorDPmJiK8ADzA3i%2BWYrCc3KCQmGNW47OiyLRs9M6%2Bf3bKxrxg9cKWvPWq4qS%2FqXFrqPEEHJru2GJ02JjXCt4SAv5aRmDn1FX3kNQuOfQclHjlEvVHq0a9bOyKa0EcGlMMb9vSbMqA3JwKfl42Td%2BB5%2F4DSsEtFSgeHlu1ddGIYvj7aqtEoXmXyvYytrasDQMDuDaVhdXyA4G&X-Amz-Signature=a0c86be29d4748c574e2d821a97be063238a5d730feb40f1fed559009775078f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFVOMBP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEObt5rmWUt0Y0DsuM%2FkbmxDxQwy5mRv65GrFyIJfNXDAiA3bZUf7tHTjccNYOLNBIfEBvcRnNu6wbDgsB1ZRGfIbir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8WfGSeOH9LajElXHKtwDVEZYNxb1RM3YHmvVA46A%2Fnn8Mp%2Blbe28OwJg7J%2FfSgUHxZYpMFugo1Sa3qlpEnW8dHEPQ96moR5b5Gyt1RduDghZpuJm02xPVJjkLM47IDrETvU5VOoYhmNSRFfu2dlGSMBtmQGqtr7veICY0kXKBvbXVj%2FOlsRd%2BKHlcmLkp87YoBa5ZN8ZlKvAUFAkj02BXbCCgKaJZvwNbNdYOoBrb1uSp87ske8%2FW19RmxXV3YYXCKnLdU673tsyAzbN37FooS3H10yQRMLennpIsZ6ALRlC907VsCkOQszBFzGp%2BCYLxccRpWHo9Z5wwLIAJ9Zy6kTc2Kh7WY6FrEuUj1Ju6gaPi%2F5CFZ%2B1ZR%2BjxYdaJxtMCnqB1runcF6Ws1sy649zK93vGixJWtyUik1Fxdhyf19NKhgYspI5j2CmTYHUOfHm5%2BB0S1HPScXDty04vySt1PBJmHzWaXLItzlV08Ix466EkA41b%2BAivMcWy9%2BJ1Q48KQ%2BVgOloES0Z4oSI2DU%2FKKfRD6tF13ASqVVPe79IIHiwUh69GZ9Y7i%2Bgpe2SZ%2FjQIhzlKR8Q%2BOKrusFwGV6ikEyJY9rEQQR8RGUSqdQvFo953pmrLzwgg1cBfx8SlaJTtrIHK0TOBsmYqLYwx4y4wAY6pgF1wW5V%2FfV8DR5Hzh4aorDPmJiK8ADzA3i%2BWYrCc3KCQmGNW47OiyLRs9M6%2Bf3bKxrxg9cKWvPWq4qS%2FqXFrqPEEHJru2GJ02JjXCt4SAv5aRmDn1FX3kNQuOfQclHjlEvVHq0a9bOyKa0EcGlMMb9vSbMqA3JwKfl42Td%2BB5%2F4DSsEtFSgeHlu1ddGIYvj7aqtEoXmXyvYytrasDQMDuDaVhdXyA4G&X-Amz-Signature=3c5e6a6ed826f79870c165cec3e1fdf777769714cd2f02517be0e48785bb1d1f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

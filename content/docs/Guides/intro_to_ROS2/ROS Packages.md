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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZZD254%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYLkiBlc%2BoFMczFejUedAWZ7T3CpmJvtrnh%2F8y7l%2F8RAiAdToNGA7ZCFARu%2Bm4SwFNo8dWwxEQdJB8OoUsdCmqogCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM10osn%2Fo%2Fkng9fP2EKtwDjdDQRU7lZNub62edsJp9f49JhZ%2BPEdfx951psp8yJAX3IKTW02ZK7AGWUptRyniuy8PwymMN2pXGYwM5sHUzNwY4f5rGYYgcKzMgdwyoZsneF8ZH6lLM3fM0yAnGPwVvTaAAaY6W9GnJ6BOSu1gnM3VquzrOJQr5ixPI9ubXvtJpBcoLgCmnzB078JRTmsxOWqgAZ4ikfGFBRB3AET%2FVwVI08H8kqyDxnTCAKDVYN9A3Bi5Dx3fRSMbGXOGA3KbzCEiASIlRcVTnWA%2B%2BJS1yOiCQBURu%2FknMGf8dphqPWKAWqWUbOXQVZ0hz9vGD39BLjG7LEVXOzxojr2EWKEYNTCNqHVQ3nCN62pnnBcLaaS%2BBp02lqiiCSelFFTzu%2F4R1aR06b1Yws8t4cICPx23Xnu67uOzbWErLcGFBuY65m7EiMYbJLwpj8yg6gsKa4hUneb7L1jHVTAFfV%2BPy8jfeHGbzcXDW%2BdVdPqwPrfBATzURZKVowwD%2B2lVRXlqnz7zstHCR34yxo8lObKhWFhB1Orydk0UK4UnexX%2BWpO9lMfiJXocN1b60B8Wh5DZczyfRmzc4QHKnsQP6H4inCUaIXzjYmCjl6i0PnS23DE%2BQM4M4qln12%2BfYgZm2vJYwk%2FbawQY6pgE5vmIuPnHFkmhOTdlEN6sGeFpJGstqqfCLPYCwlA1i2mEIfgH66H9GOta4Nk8ANbufDRg0%2FK6KGKo%2Fi7Vqk9ChUTLEgrQjGJp%2B3%2BMj4EQ7PhUnw9IeRNKrQDyo5ZInEQVhzW8JwCzJyj1dDfqWRqMH%2FcehNl8hm5s%2Bhbn3N2cBVwHYukbqja3Jf9vrP0bRt%2Bmbq5zdQ2hdN087eiMNMWy2fSZdvWKk&X-Amz-Signature=1c8ad359248c48191b756800f4f4eb5199f198a7cd1b79e1ed6a359b909cbbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZZD254%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYLkiBlc%2BoFMczFejUedAWZ7T3CpmJvtrnh%2F8y7l%2F8RAiAdToNGA7ZCFARu%2Bm4SwFNo8dWwxEQdJB8OoUsdCmqogCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM10osn%2Fo%2Fkng9fP2EKtwDjdDQRU7lZNub62edsJp9f49JhZ%2BPEdfx951psp8yJAX3IKTW02ZK7AGWUptRyniuy8PwymMN2pXGYwM5sHUzNwY4f5rGYYgcKzMgdwyoZsneF8ZH6lLM3fM0yAnGPwVvTaAAaY6W9GnJ6BOSu1gnM3VquzrOJQr5ixPI9ubXvtJpBcoLgCmnzB078JRTmsxOWqgAZ4ikfGFBRB3AET%2FVwVI08H8kqyDxnTCAKDVYN9A3Bi5Dx3fRSMbGXOGA3KbzCEiASIlRcVTnWA%2B%2BJS1yOiCQBURu%2FknMGf8dphqPWKAWqWUbOXQVZ0hz9vGD39BLjG7LEVXOzxojr2EWKEYNTCNqHVQ3nCN62pnnBcLaaS%2BBp02lqiiCSelFFTzu%2F4R1aR06b1Yws8t4cICPx23Xnu67uOzbWErLcGFBuY65m7EiMYbJLwpj8yg6gsKa4hUneb7L1jHVTAFfV%2BPy8jfeHGbzcXDW%2BdVdPqwPrfBATzURZKVowwD%2B2lVRXlqnz7zstHCR34yxo8lObKhWFhB1Orydk0UK4UnexX%2BWpO9lMfiJXocN1b60B8Wh5DZczyfRmzc4QHKnsQP6H4inCUaIXzjYmCjl6i0PnS23DE%2BQM4M4qln12%2BfYgZm2vJYwk%2FbawQY6pgE5vmIuPnHFkmhOTdlEN6sGeFpJGstqqfCLPYCwlA1i2mEIfgH66H9GOta4Nk8ANbufDRg0%2FK6KGKo%2Fi7Vqk9ChUTLEgrQjGJp%2B3%2BMj4EQ7PhUnw9IeRNKrQDyo5ZInEQVhzW8JwCzJyj1dDfqWRqMH%2FcehNl8hm5s%2Bhbn3N2cBVwHYukbqja3Jf9vrP0bRt%2Bmbq5zdQ2hdN087eiMNMWy2fSZdvWKk&X-Amz-Signature=c42612dada33a247f1fa2551ef137854f3d9213270673f51370eb5f67b6ee1af&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZZD254%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYLkiBlc%2BoFMczFejUedAWZ7T3CpmJvtrnh%2F8y7l%2F8RAiAdToNGA7ZCFARu%2Bm4SwFNo8dWwxEQdJB8OoUsdCmqogCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM10osn%2Fo%2Fkng9fP2EKtwDjdDQRU7lZNub62edsJp9f49JhZ%2BPEdfx951psp8yJAX3IKTW02ZK7AGWUptRyniuy8PwymMN2pXGYwM5sHUzNwY4f5rGYYgcKzMgdwyoZsneF8ZH6lLM3fM0yAnGPwVvTaAAaY6W9GnJ6BOSu1gnM3VquzrOJQr5ixPI9ubXvtJpBcoLgCmnzB078JRTmsxOWqgAZ4ikfGFBRB3AET%2FVwVI08H8kqyDxnTCAKDVYN9A3Bi5Dx3fRSMbGXOGA3KbzCEiASIlRcVTnWA%2B%2BJS1yOiCQBURu%2FknMGf8dphqPWKAWqWUbOXQVZ0hz9vGD39BLjG7LEVXOzxojr2EWKEYNTCNqHVQ3nCN62pnnBcLaaS%2BBp02lqiiCSelFFTzu%2F4R1aR06b1Yws8t4cICPx23Xnu67uOzbWErLcGFBuY65m7EiMYbJLwpj8yg6gsKa4hUneb7L1jHVTAFfV%2BPy8jfeHGbzcXDW%2BdVdPqwPrfBATzURZKVowwD%2B2lVRXlqnz7zstHCR34yxo8lObKhWFhB1Orydk0UK4UnexX%2BWpO9lMfiJXocN1b60B8Wh5DZczyfRmzc4QHKnsQP6H4inCUaIXzjYmCjl6i0PnS23DE%2BQM4M4qln12%2BfYgZm2vJYwk%2FbawQY6pgE5vmIuPnHFkmhOTdlEN6sGeFpJGstqqfCLPYCwlA1i2mEIfgH66H9GOta4Nk8ANbufDRg0%2FK6KGKo%2Fi7Vqk9ChUTLEgrQjGJp%2B3%2BMj4EQ7PhUnw9IeRNKrQDyo5ZInEQVhzW8JwCzJyj1dDfqWRqMH%2FcehNl8hm5s%2Bhbn3N2cBVwHYukbqja3Jf9vrP0bRt%2Bmbq5zdQ2hdN087eiMNMWy2fSZdvWKk&X-Amz-Signature=5e33b51f08176a66f7a8fe0fa1546681817b2a65e34e577d351bdd2b10566bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZZD254%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYLkiBlc%2BoFMczFejUedAWZ7T3CpmJvtrnh%2F8y7l%2F8RAiAdToNGA7ZCFARu%2Bm4SwFNo8dWwxEQdJB8OoUsdCmqogCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM10osn%2Fo%2Fkng9fP2EKtwDjdDQRU7lZNub62edsJp9f49JhZ%2BPEdfx951psp8yJAX3IKTW02ZK7AGWUptRyniuy8PwymMN2pXGYwM5sHUzNwY4f5rGYYgcKzMgdwyoZsneF8ZH6lLM3fM0yAnGPwVvTaAAaY6W9GnJ6BOSu1gnM3VquzrOJQr5ixPI9ubXvtJpBcoLgCmnzB078JRTmsxOWqgAZ4ikfGFBRB3AET%2FVwVI08H8kqyDxnTCAKDVYN9A3Bi5Dx3fRSMbGXOGA3KbzCEiASIlRcVTnWA%2B%2BJS1yOiCQBURu%2FknMGf8dphqPWKAWqWUbOXQVZ0hz9vGD39BLjG7LEVXOzxojr2EWKEYNTCNqHVQ3nCN62pnnBcLaaS%2BBp02lqiiCSelFFTzu%2F4R1aR06b1Yws8t4cICPx23Xnu67uOzbWErLcGFBuY65m7EiMYbJLwpj8yg6gsKa4hUneb7L1jHVTAFfV%2BPy8jfeHGbzcXDW%2BdVdPqwPrfBATzURZKVowwD%2B2lVRXlqnz7zstHCR34yxo8lObKhWFhB1Orydk0UK4UnexX%2BWpO9lMfiJXocN1b60B8Wh5DZczyfRmzc4QHKnsQP6H4inCUaIXzjYmCjl6i0PnS23DE%2BQM4M4qln12%2BfYgZm2vJYwk%2FbawQY6pgE5vmIuPnHFkmhOTdlEN6sGeFpJGstqqfCLPYCwlA1i2mEIfgH66H9GOta4Nk8ANbufDRg0%2FK6KGKo%2Fi7Vqk9ChUTLEgrQjGJp%2B3%2BMj4EQ7PhUnw9IeRNKrQDyo5ZInEQVhzW8JwCzJyj1dDfqWRqMH%2FcehNl8hm5s%2Bhbn3N2cBVwHYukbqja3Jf9vrP0bRt%2Bmbq5zdQ2hdN087eiMNMWy2fSZdvWKk&X-Amz-Signature=da7b65a2f7eea13b60d37fa6023be76a8d57d12792c7d5ee5b097187e6acd5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZZD254%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYLkiBlc%2BoFMczFejUedAWZ7T3CpmJvtrnh%2F8y7l%2F8RAiAdToNGA7ZCFARu%2Bm4SwFNo8dWwxEQdJB8OoUsdCmqogCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM10osn%2Fo%2Fkng9fP2EKtwDjdDQRU7lZNub62edsJp9f49JhZ%2BPEdfx951psp8yJAX3IKTW02ZK7AGWUptRyniuy8PwymMN2pXGYwM5sHUzNwY4f5rGYYgcKzMgdwyoZsneF8ZH6lLM3fM0yAnGPwVvTaAAaY6W9GnJ6BOSu1gnM3VquzrOJQr5ixPI9ubXvtJpBcoLgCmnzB078JRTmsxOWqgAZ4ikfGFBRB3AET%2FVwVI08H8kqyDxnTCAKDVYN9A3Bi5Dx3fRSMbGXOGA3KbzCEiASIlRcVTnWA%2B%2BJS1yOiCQBURu%2FknMGf8dphqPWKAWqWUbOXQVZ0hz9vGD39BLjG7LEVXOzxojr2EWKEYNTCNqHVQ3nCN62pnnBcLaaS%2BBp02lqiiCSelFFTzu%2F4R1aR06b1Yws8t4cICPx23Xnu67uOzbWErLcGFBuY65m7EiMYbJLwpj8yg6gsKa4hUneb7L1jHVTAFfV%2BPy8jfeHGbzcXDW%2BdVdPqwPrfBATzURZKVowwD%2B2lVRXlqnz7zstHCR34yxo8lObKhWFhB1Orydk0UK4UnexX%2BWpO9lMfiJXocN1b60B8Wh5DZczyfRmzc4QHKnsQP6H4inCUaIXzjYmCjl6i0PnS23DE%2BQM4M4qln12%2BfYgZm2vJYwk%2FbawQY6pgE5vmIuPnHFkmhOTdlEN6sGeFpJGstqqfCLPYCwlA1i2mEIfgH66H9GOta4Nk8ANbufDRg0%2FK6KGKo%2Fi7Vqk9ChUTLEgrQjGJp%2B3%2BMj4EQ7PhUnw9IeRNKrQDyo5ZInEQVhzW8JwCzJyj1dDfqWRqMH%2FcehNl8hm5s%2Bhbn3N2cBVwHYukbqja3Jf9vrP0bRt%2Bmbq5zdQ2hdN087eiMNMWy2fSZdvWKk&X-Amz-Signature=9b01960f62719f950f2ec625a28eb0fd2642605ca914f386bd7b6eae54d3704e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZZD254%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYLkiBlc%2BoFMczFejUedAWZ7T3CpmJvtrnh%2F8y7l%2F8RAiAdToNGA7ZCFARu%2Bm4SwFNo8dWwxEQdJB8OoUsdCmqogCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM10osn%2Fo%2Fkng9fP2EKtwDjdDQRU7lZNub62edsJp9f49JhZ%2BPEdfx951psp8yJAX3IKTW02ZK7AGWUptRyniuy8PwymMN2pXGYwM5sHUzNwY4f5rGYYgcKzMgdwyoZsneF8ZH6lLM3fM0yAnGPwVvTaAAaY6W9GnJ6BOSu1gnM3VquzrOJQr5ixPI9ubXvtJpBcoLgCmnzB078JRTmsxOWqgAZ4ikfGFBRB3AET%2FVwVI08H8kqyDxnTCAKDVYN9A3Bi5Dx3fRSMbGXOGA3KbzCEiASIlRcVTnWA%2B%2BJS1yOiCQBURu%2FknMGf8dphqPWKAWqWUbOXQVZ0hz9vGD39BLjG7LEVXOzxojr2EWKEYNTCNqHVQ3nCN62pnnBcLaaS%2BBp02lqiiCSelFFTzu%2F4R1aR06b1Yws8t4cICPx23Xnu67uOzbWErLcGFBuY65m7EiMYbJLwpj8yg6gsKa4hUneb7L1jHVTAFfV%2BPy8jfeHGbzcXDW%2BdVdPqwPrfBATzURZKVowwD%2B2lVRXlqnz7zstHCR34yxo8lObKhWFhB1Orydk0UK4UnexX%2BWpO9lMfiJXocN1b60B8Wh5DZczyfRmzc4QHKnsQP6H4inCUaIXzjYmCjl6i0PnS23DE%2BQM4M4qln12%2BfYgZm2vJYwk%2FbawQY6pgE5vmIuPnHFkmhOTdlEN6sGeFpJGstqqfCLPYCwlA1i2mEIfgH66H9GOta4Nk8ANbufDRg0%2FK6KGKo%2Fi7Vqk9ChUTLEgrQjGJp%2B3%2BMj4EQ7PhUnw9IeRNKrQDyo5ZInEQVhzW8JwCzJyj1dDfqWRqMH%2FcehNl8hm5s%2Bhbn3N2cBVwHYukbqja3Jf9vrP0bRt%2Bmbq5zdQ2hdN087eiMNMWy2fSZdvWKk&X-Amz-Signature=887a67381a79c11b83960de0d61e1c32600a680783181550b01e8b965cca7ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZZD254%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYLkiBlc%2BoFMczFejUedAWZ7T3CpmJvtrnh%2F8y7l%2F8RAiAdToNGA7ZCFARu%2Bm4SwFNo8dWwxEQdJB8OoUsdCmqogCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM10osn%2Fo%2Fkng9fP2EKtwDjdDQRU7lZNub62edsJp9f49JhZ%2BPEdfx951psp8yJAX3IKTW02ZK7AGWUptRyniuy8PwymMN2pXGYwM5sHUzNwY4f5rGYYgcKzMgdwyoZsneF8ZH6lLM3fM0yAnGPwVvTaAAaY6W9GnJ6BOSu1gnM3VquzrOJQr5ixPI9ubXvtJpBcoLgCmnzB078JRTmsxOWqgAZ4ikfGFBRB3AET%2FVwVI08H8kqyDxnTCAKDVYN9A3Bi5Dx3fRSMbGXOGA3KbzCEiASIlRcVTnWA%2B%2BJS1yOiCQBURu%2FknMGf8dphqPWKAWqWUbOXQVZ0hz9vGD39BLjG7LEVXOzxojr2EWKEYNTCNqHVQ3nCN62pnnBcLaaS%2BBp02lqiiCSelFFTzu%2F4R1aR06b1Yws8t4cICPx23Xnu67uOzbWErLcGFBuY65m7EiMYbJLwpj8yg6gsKa4hUneb7L1jHVTAFfV%2BPy8jfeHGbzcXDW%2BdVdPqwPrfBATzURZKVowwD%2B2lVRXlqnz7zstHCR34yxo8lObKhWFhB1Orydk0UK4UnexX%2BWpO9lMfiJXocN1b60B8Wh5DZczyfRmzc4QHKnsQP6H4inCUaIXzjYmCjl6i0PnS23DE%2BQM4M4qln12%2BfYgZm2vJYwk%2FbawQY6pgE5vmIuPnHFkmhOTdlEN6sGeFpJGstqqfCLPYCwlA1i2mEIfgH66H9GOta4Nk8ANbufDRg0%2FK6KGKo%2Fi7Vqk9ChUTLEgrQjGJp%2B3%2BMj4EQ7PhUnw9IeRNKrQDyo5ZInEQVhzW8JwCzJyj1dDfqWRqMH%2FcehNl8hm5s%2Bhbn3N2cBVwHYukbqja3Jf9vrP0bRt%2Bmbq5zdQ2hdN087eiMNMWy2fSZdvWKk&X-Amz-Signature=8393d940085be90c995327c78574725342b3551e0d31449dbc8c16abb0f6313e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

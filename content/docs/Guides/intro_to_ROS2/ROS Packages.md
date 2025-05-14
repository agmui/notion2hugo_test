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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXAQSBH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICCn4fXVHRHhJOZWYzBuPMDsU5UXBu%2BtzKYVC3Jdg4mYAiAQ1pAFS8OhNQ2LpJ3Y1h98Zu0iSzayr0iyiylrBUU7qyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMrsA1KAZXfjXM%2FfmUKtwDNHcZaMpB%2BEd3upa0rgSHmJ3yFmrxvBYhcithWk8FWd%2BTl7%2Ff4XrUvf3MVjC3fmvK%2FVXxL8u4CUcx%2BOHgyNiLj3WIGWhn6ZPgYo%2B8%2BJpUGtl7ipM9cfSpZdV0EOF5DdWJMm50JJDNWqJ4W8y%2BL7CfnaGj6B%2FDCJH49PVFqEnJkBxwLplHSR3qGVht3QRD3GHK4QRsmxHVbSO7ds0Iu2d4WXYJ1sSCO0HHzExynDNuFYbxH7IwvX0fZPNLdWHDIi2seA4Yf1xD%2BMy96O8dIzfMbpTPEIhDkdo3u4FC6U0znbY8BzQ%2BE7QoWLCVAQ1Da%2BZeQUL77cupDc32tU0X%2FgArHsSLHoV4gJEIXOoCc%2Bgkiwo9nCgRDa3DVmNXUiww2ChSFazRTFnZHmzky2mNH4Xw7j79EhNoRcQcqnpS7t0DUfsCMqOEA0NUeHbbSJ6m4YV1eaKtBCpi4l7bqkQSwcbfDONSgaWdWLGksdDi0qHUeKS3ivsN9AkNvKcFwJLxi8anfAxzK8SkdeCt7jXXeVX%2BSq9Qx9NfTOiDuYlX%2F5z5XmW4yL7ckFWC9rMcu7BeZX9WEaHt%2F2pEgGf2XguDScaiS9TTbypAa%2ByTHUtJlAfYB7lLphk5RTbMPv4rfo8w3rqUwQY6pgFT62prMBHbV9mie2SG2P6INQOBBTx4JhUpYrl0cbLcWfvq5fJCwD4ABlh%2BFW0fhOUeWBykuDmJhiTYk%2ByiNmWD9kn1ZYN3T2pAf062wgvtSttJRlmU2e4vTTU7x0PIE1pmoA%2FgeGKynALIjJJq0Ba0S7SVnOsqo6wpZWaDd4Kvzx034aaNGLjnpLy5kIijqEaW4JDk6y7Ba4WVEgoNSXoFBbkIdiTQ&X-Amz-Signature=5e65b555a51db62f3c394e048a4c073e821dbf04f0fbb1e23c3ffcff66ec5f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXAQSBH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICCn4fXVHRHhJOZWYzBuPMDsU5UXBu%2BtzKYVC3Jdg4mYAiAQ1pAFS8OhNQ2LpJ3Y1h98Zu0iSzayr0iyiylrBUU7qyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMrsA1KAZXfjXM%2FfmUKtwDNHcZaMpB%2BEd3upa0rgSHmJ3yFmrxvBYhcithWk8FWd%2BTl7%2Ff4XrUvf3MVjC3fmvK%2FVXxL8u4CUcx%2BOHgyNiLj3WIGWhn6ZPgYo%2B8%2BJpUGtl7ipM9cfSpZdV0EOF5DdWJMm50JJDNWqJ4W8y%2BL7CfnaGj6B%2FDCJH49PVFqEnJkBxwLplHSR3qGVht3QRD3GHK4QRsmxHVbSO7ds0Iu2d4WXYJ1sSCO0HHzExynDNuFYbxH7IwvX0fZPNLdWHDIi2seA4Yf1xD%2BMy96O8dIzfMbpTPEIhDkdo3u4FC6U0znbY8BzQ%2BE7QoWLCVAQ1Da%2BZeQUL77cupDc32tU0X%2FgArHsSLHoV4gJEIXOoCc%2Bgkiwo9nCgRDa3DVmNXUiww2ChSFazRTFnZHmzky2mNH4Xw7j79EhNoRcQcqnpS7t0DUfsCMqOEA0NUeHbbSJ6m4YV1eaKtBCpi4l7bqkQSwcbfDONSgaWdWLGksdDi0qHUeKS3ivsN9AkNvKcFwJLxi8anfAxzK8SkdeCt7jXXeVX%2BSq9Qx9NfTOiDuYlX%2F5z5XmW4yL7ckFWC9rMcu7BeZX9WEaHt%2F2pEgGf2XguDScaiS9TTbypAa%2ByTHUtJlAfYB7lLphk5RTbMPv4rfo8w3rqUwQY6pgFT62prMBHbV9mie2SG2P6INQOBBTx4JhUpYrl0cbLcWfvq5fJCwD4ABlh%2BFW0fhOUeWBykuDmJhiTYk%2ByiNmWD9kn1ZYN3T2pAf062wgvtSttJRlmU2e4vTTU7x0PIE1pmoA%2FgeGKynALIjJJq0Ba0S7SVnOsqo6wpZWaDd4Kvzx034aaNGLjnpLy5kIijqEaW4JDk6y7Ba4WVEgoNSXoFBbkIdiTQ&X-Amz-Signature=46658d4292c8b7ff6beb10740eb2a0db83ded6e9045da8eab667f27cb4a813d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXAQSBH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICCn4fXVHRHhJOZWYzBuPMDsU5UXBu%2BtzKYVC3Jdg4mYAiAQ1pAFS8OhNQ2LpJ3Y1h98Zu0iSzayr0iyiylrBUU7qyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMrsA1KAZXfjXM%2FfmUKtwDNHcZaMpB%2BEd3upa0rgSHmJ3yFmrxvBYhcithWk8FWd%2BTl7%2Ff4XrUvf3MVjC3fmvK%2FVXxL8u4CUcx%2BOHgyNiLj3WIGWhn6ZPgYo%2B8%2BJpUGtl7ipM9cfSpZdV0EOF5DdWJMm50JJDNWqJ4W8y%2BL7CfnaGj6B%2FDCJH49PVFqEnJkBxwLplHSR3qGVht3QRD3GHK4QRsmxHVbSO7ds0Iu2d4WXYJ1sSCO0HHzExynDNuFYbxH7IwvX0fZPNLdWHDIi2seA4Yf1xD%2BMy96O8dIzfMbpTPEIhDkdo3u4FC6U0znbY8BzQ%2BE7QoWLCVAQ1Da%2BZeQUL77cupDc32tU0X%2FgArHsSLHoV4gJEIXOoCc%2Bgkiwo9nCgRDa3DVmNXUiww2ChSFazRTFnZHmzky2mNH4Xw7j79EhNoRcQcqnpS7t0DUfsCMqOEA0NUeHbbSJ6m4YV1eaKtBCpi4l7bqkQSwcbfDONSgaWdWLGksdDi0qHUeKS3ivsN9AkNvKcFwJLxi8anfAxzK8SkdeCt7jXXeVX%2BSq9Qx9NfTOiDuYlX%2F5z5XmW4yL7ckFWC9rMcu7BeZX9WEaHt%2F2pEgGf2XguDScaiS9TTbypAa%2ByTHUtJlAfYB7lLphk5RTbMPv4rfo8w3rqUwQY6pgFT62prMBHbV9mie2SG2P6INQOBBTx4JhUpYrl0cbLcWfvq5fJCwD4ABlh%2BFW0fhOUeWBykuDmJhiTYk%2ByiNmWD9kn1ZYN3T2pAf062wgvtSttJRlmU2e4vTTU7x0PIE1pmoA%2FgeGKynALIjJJq0Ba0S7SVnOsqo6wpZWaDd4Kvzx034aaNGLjnpLy5kIijqEaW4JDk6y7Ba4WVEgoNSXoFBbkIdiTQ&X-Amz-Signature=bf05115a4cb52239a0de3e38228c94d12790e870dcee4fccb94dc92574413e61&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXAQSBH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICCn4fXVHRHhJOZWYzBuPMDsU5UXBu%2BtzKYVC3Jdg4mYAiAQ1pAFS8OhNQ2LpJ3Y1h98Zu0iSzayr0iyiylrBUU7qyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMrsA1KAZXfjXM%2FfmUKtwDNHcZaMpB%2BEd3upa0rgSHmJ3yFmrxvBYhcithWk8FWd%2BTl7%2Ff4XrUvf3MVjC3fmvK%2FVXxL8u4CUcx%2BOHgyNiLj3WIGWhn6ZPgYo%2B8%2BJpUGtl7ipM9cfSpZdV0EOF5DdWJMm50JJDNWqJ4W8y%2BL7CfnaGj6B%2FDCJH49PVFqEnJkBxwLplHSR3qGVht3QRD3GHK4QRsmxHVbSO7ds0Iu2d4WXYJ1sSCO0HHzExynDNuFYbxH7IwvX0fZPNLdWHDIi2seA4Yf1xD%2BMy96O8dIzfMbpTPEIhDkdo3u4FC6U0znbY8BzQ%2BE7QoWLCVAQ1Da%2BZeQUL77cupDc32tU0X%2FgArHsSLHoV4gJEIXOoCc%2Bgkiwo9nCgRDa3DVmNXUiww2ChSFazRTFnZHmzky2mNH4Xw7j79EhNoRcQcqnpS7t0DUfsCMqOEA0NUeHbbSJ6m4YV1eaKtBCpi4l7bqkQSwcbfDONSgaWdWLGksdDi0qHUeKS3ivsN9AkNvKcFwJLxi8anfAxzK8SkdeCt7jXXeVX%2BSq9Qx9NfTOiDuYlX%2F5z5XmW4yL7ckFWC9rMcu7BeZX9WEaHt%2F2pEgGf2XguDScaiS9TTbypAa%2ByTHUtJlAfYB7lLphk5RTbMPv4rfo8w3rqUwQY6pgFT62prMBHbV9mie2SG2P6INQOBBTx4JhUpYrl0cbLcWfvq5fJCwD4ABlh%2BFW0fhOUeWBykuDmJhiTYk%2ByiNmWD9kn1ZYN3T2pAf062wgvtSttJRlmU2e4vTTU7x0PIE1pmoA%2FgeGKynALIjJJq0Ba0S7SVnOsqo6wpZWaDd4Kvzx034aaNGLjnpLy5kIijqEaW4JDk6y7Ba4WVEgoNSXoFBbkIdiTQ&X-Amz-Signature=da0692ece17f010da2f0e8b5aa3335db4642d53f32df29c61256099099564e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXAQSBH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICCn4fXVHRHhJOZWYzBuPMDsU5UXBu%2BtzKYVC3Jdg4mYAiAQ1pAFS8OhNQ2LpJ3Y1h98Zu0iSzayr0iyiylrBUU7qyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMrsA1KAZXfjXM%2FfmUKtwDNHcZaMpB%2BEd3upa0rgSHmJ3yFmrxvBYhcithWk8FWd%2BTl7%2Ff4XrUvf3MVjC3fmvK%2FVXxL8u4CUcx%2BOHgyNiLj3WIGWhn6ZPgYo%2B8%2BJpUGtl7ipM9cfSpZdV0EOF5DdWJMm50JJDNWqJ4W8y%2BL7CfnaGj6B%2FDCJH49PVFqEnJkBxwLplHSR3qGVht3QRD3GHK4QRsmxHVbSO7ds0Iu2d4WXYJ1sSCO0HHzExynDNuFYbxH7IwvX0fZPNLdWHDIi2seA4Yf1xD%2BMy96O8dIzfMbpTPEIhDkdo3u4FC6U0znbY8BzQ%2BE7QoWLCVAQ1Da%2BZeQUL77cupDc32tU0X%2FgArHsSLHoV4gJEIXOoCc%2Bgkiwo9nCgRDa3DVmNXUiww2ChSFazRTFnZHmzky2mNH4Xw7j79EhNoRcQcqnpS7t0DUfsCMqOEA0NUeHbbSJ6m4YV1eaKtBCpi4l7bqkQSwcbfDONSgaWdWLGksdDi0qHUeKS3ivsN9AkNvKcFwJLxi8anfAxzK8SkdeCt7jXXeVX%2BSq9Qx9NfTOiDuYlX%2F5z5XmW4yL7ckFWC9rMcu7BeZX9WEaHt%2F2pEgGf2XguDScaiS9TTbypAa%2ByTHUtJlAfYB7lLphk5RTbMPv4rfo8w3rqUwQY6pgFT62prMBHbV9mie2SG2P6INQOBBTx4JhUpYrl0cbLcWfvq5fJCwD4ABlh%2BFW0fhOUeWBykuDmJhiTYk%2ByiNmWD9kn1ZYN3T2pAf062wgvtSttJRlmU2e4vTTU7x0PIE1pmoA%2FgeGKynALIjJJq0Ba0S7SVnOsqo6wpZWaDd4Kvzx034aaNGLjnpLy5kIijqEaW4JDk6y7Ba4WVEgoNSXoFBbkIdiTQ&X-Amz-Signature=30419be9962e8cb99be1aac48b6464f36bc323de263f7dc300c64079ae5f812b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXAQSBH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICCn4fXVHRHhJOZWYzBuPMDsU5UXBu%2BtzKYVC3Jdg4mYAiAQ1pAFS8OhNQ2LpJ3Y1h98Zu0iSzayr0iyiylrBUU7qyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMrsA1KAZXfjXM%2FfmUKtwDNHcZaMpB%2BEd3upa0rgSHmJ3yFmrxvBYhcithWk8FWd%2BTl7%2Ff4XrUvf3MVjC3fmvK%2FVXxL8u4CUcx%2BOHgyNiLj3WIGWhn6ZPgYo%2B8%2BJpUGtl7ipM9cfSpZdV0EOF5DdWJMm50JJDNWqJ4W8y%2BL7CfnaGj6B%2FDCJH49PVFqEnJkBxwLplHSR3qGVht3QRD3GHK4QRsmxHVbSO7ds0Iu2d4WXYJ1sSCO0HHzExynDNuFYbxH7IwvX0fZPNLdWHDIi2seA4Yf1xD%2BMy96O8dIzfMbpTPEIhDkdo3u4FC6U0znbY8BzQ%2BE7QoWLCVAQ1Da%2BZeQUL77cupDc32tU0X%2FgArHsSLHoV4gJEIXOoCc%2Bgkiwo9nCgRDa3DVmNXUiww2ChSFazRTFnZHmzky2mNH4Xw7j79EhNoRcQcqnpS7t0DUfsCMqOEA0NUeHbbSJ6m4YV1eaKtBCpi4l7bqkQSwcbfDONSgaWdWLGksdDi0qHUeKS3ivsN9AkNvKcFwJLxi8anfAxzK8SkdeCt7jXXeVX%2BSq9Qx9NfTOiDuYlX%2F5z5XmW4yL7ckFWC9rMcu7BeZX9WEaHt%2F2pEgGf2XguDScaiS9TTbypAa%2ByTHUtJlAfYB7lLphk5RTbMPv4rfo8w3rqUwQY6pgFT62prMBHbV9mie2SG2P6INQOBBTx4JhUpYrl0cbLcWfvq5fJCwD4ABlh%2BFW0fhOUeWBykuDmJhiTYk%2ByiNmWD9kn1ZYN3T2pAf062wgvtSttJRlmU2e4vTTU7x0PIE1pmoA%2FgeGKynALIjJJq0Ba0S7SVnOsqo6wpZWaDd4Kvzx034aaNGLjnpLy5kIijqEaW4JDk6y7Ba4WVEgoNSXoFBbkIdiTQ&X-Amz-Signature=775d3e620f97e02f6d25de8dfb49285d6034835bd127f45c154d9fc18a567c72&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXAQSBH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICCn4fXVHRHhJOZWYzBuPMDsU5UXBu%2BtzKYVC3Jdg4mYAiAQ1pAFS8OhNQ2LpJ3Y1h98Zu0iSzayr0iyiylrBUU7qyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMrsA1KAZXfjXM%2FfmUKtwDNHcZaMpB%2BEd3upa0rgSHmJ3yFmrxvBYhcithWk8FWd%2BTl7%2Ff4XrUvf3MVjC3fmvK%2FVXxL8u4CUcx%2BOHgyNiLj3WIGWhn6ZPgYo%2B8%2BJpUGtl7ipM9cfSpZdV0EOF5DdWJMm50JJDNWqJ4W8y%2BL7CfnaGj6B%2FDCJH49PVFqEnJkBxwLplHSR3qGVht3QRD3GHK4QRsmxHVbSO7ds0Iu2d4WXYJ1sSCO0HHzExynDNuFYbxH7IwvX0fZPNLdWHDIi2seA4Yf1xD%2BMy96O8dIzfMbpTPEIhDkdo3u4FC6U0znbY8BzQ%2BE7QoWLCVAQ1Da%2BZeQUL77cupDc32tU0X%2FgArHsSLHoV4gJEIXOoCc%2Bgkiwo9nCgRDa3DVmNXUiww2ChSFazRTFnZHmzky2mNH4Xw7j79EhNoRcQcqnpS7t0DUfsCMqOEA0NUeHbbSJ6m4YV1eaKtBCpi4l7bqkQSwcbfDONSgaWdWLGksdDi0qHUeKS3ivsN9AkNvKcFwJLxi8anfAxzK8SkdeCt7jXXeVX%2BSq9Qx9NfTOiDuYlX%2F5z5XmW4yL7ckFWC9rMcu7BeZX9WEaHt%2F2pEgGf2XguDScaiS9TTbypAa%2ByTHUtJlAfYB7lLphk5RTbMPv4rfo8w3rqUwQY6pgFT62prMBHbV9mie2SG2P6INQOBBTx4JhUpYrl0cbLcWfvq5fJCwD4ABlh%2BFW0fhOUeWBykuDmJhiTYk%2ByiNmWD9kn1ZYN3T2pAf062wgvtSttJRlmU2e4vTTU7x0PIE1pmoA%2FgeGKynALIjJJq0Ba0S7SVnOsqo6wpZWaDd4Kvzx034aaNGLjnpLy5kIijqEaW4JDk6y7Ba4WVEgoNSXoFBbkIdiTQ&X-Amz-Signature=f1e89e8f8e9a39c9794fe5646a1f53a1295cd1fcbd7aaac053085c7542cd32b3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

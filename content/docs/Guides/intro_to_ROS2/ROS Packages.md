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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7AOH76%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6FEJp17HmT8DmjNVnvjtptrzwR5UCMG920KjIWkCaAIgfUfNgAa1V%2BcNEuKq%2BBSDAugIxyMRuPEBL4KiYKLYZ8MqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs2YMrK3lSf%2BiIrbSrcA1HvqrzgfIpj6WV8xjVs50zKBUT13M8uEQkjCeLWBM1mIfMnLANWe0PU7bu%2BtZmDHyxBLmgjoqfRQFhRGzPQdZ0m%2BfDAmdfsLNDWjw1tZTmkoeSdKIex32bVssQi79LrD97pmetGWKv7aHOANjXvscJvrrPl%2BeWpKtWgWth4wNgncRZU1dLKMhAFt23rDrrCaB9BFJRokry34q4jfhou%2BRG3GK8XH90QmGq6mtxgxET2jK3x83YUBTyUbOSSbRioBQkOVYsFEFFTjN%2BCf6sHDFKgRqfYR1xLWTQqkkFthNGv%2F%2BONaN2ZbGtF1upqE0GeJTYRssILNfL1TCDA4GZ%2BOLZXBtSongXR7njzU29qUTXC9NOY1%2F69%2B4qG62QUlyfuejOGNXtqGF0CXVnBUJh6AQWGKAgHfpyN1Vtp4nYpE%2B6S7Yq2jhyZM66MbxHLsqHwc056GIy6V5jIP2LEqUqrOzfysDbdKTsF9vLdiI3lChbFb3mEAhozwg4XEv7DJh95TAEiwW23Z6GFxcNMcMH8%2BEXTeDJ7pi0Kj9Upe1a5oGeMLK4SFQdQerLDkH25%2Fk282uhe9jZ2nCvLc9zhNahC%2FQdUsyBgYMqIZeJWRIDZeJJHYqSPNHRRgPTzYbRlMJaZ8cMGOqUBqLDWNCucrWv5AugSXCGxdDRMkOY%2F59%2FLeVDhOr9D3xzK3bTxWxdfwQQb%2FnvwaihqVEoxMJJdJI1yRmYJRf0NtZkqplqD1i5%2BMnRaNLBWS3pLBaBGq19ej9rRGwzQ4gSgkYdQlqLNEAx13GVJGeMxWQTbpvqAZjmuY5UavB5mMEG5aa8BuIDi%2BZMZjYgWk0WMQNQ%2BDW%2F%2FI2xR4WQhhEkUcQKP9vmN&X-Amz-Signature=6a0f607abc17bc191f86fdc249d51044f00b34e0b9f4c4d1016ef45578929773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7AOH76%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6FEJp17HmT8DmjNVnvjtptrzwR5UCMG920KjIWkCaAIgfUfNgAa1V%2BcNEuKq%2BBSDAugIxyMRuPEBL4KiYKLYZ8MqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs2YMrK3lSf%2BiIrbSrcA1HvqrzgfIpj6WV8xjVs50zKBUT13M8uEQkjCeLWBM1mIfMnLANWe0PU7bu%2BtZmDHyxBLmgjoqfRQFhRGzPQdZ0m%2BfDAmdfsLNDWjw1tZTmkoeSdKIex32bVssQi79LrD97pmetGWKv7aHOANjXvscJvrrPl%2BeWpKtWgWth4wNgncRZU1dLKMhAFt23rDrrCaB9BFJRokry34q4jfhou%2BRG3GK8XH90QmGq6mtxgxET2jK3x83YUBTyUbOSSbRioBQkOVYsFEFFTjN%2BCf6sHDFKgRqfYR1xLWTQqkkFthNGv%2F%2BONaN2ZbGtF1upqE0GeJTYRssILNfL1TCDA4GZ%2BOLZXBtSongXR7njzU29qUTXC9NOY1%2F69%2B4qG62QUlyfuejOGNXtqGF0CXVnBUJh6AQWGKAgHfpyN1Vtp4nYpE%2B6S7Yq2jhyZM66MbxHLsqHwc056GIy6V5jIP2LEqUqrOzfysDbdKTsF9vLdiI3lChbFb3mEAhozwg4XEv7DJh95TAEiwW23Z6GFxcNMcMH8%2BEXTeDJ7pi0Kj9Upe1a5oGeMLK4SFQdQerLDkH25%2Fk282uhe9jZ2nCvLc9zhNahC%2FQdUsyBgYMqIZeJWRIDZeJJHYqSPNHRRgPTzYbRlMJaZ8cMGOqUBqLDWNCucrWv5AugSXCGxdDRMkOY%2F59%2FLeVDhOr9D3xzK3bTxWxdfwQQb%2FnvwaihqVEoxMJJdJI1yRmYJRf0NtZkqplqD1i5%2BMnRaNLBWS3pLBaBGq19ej9rRGwzQ4gSgkYdQlqLNEAx13GVJGeMxWQTbpvqAZjmuY5UavB5mMEG5aa8BuIDi%2BZMZjYgWk0WMQNQ%2BDW%2F%2FI2xR4WQhhEkUcQKP9vmN&X-Amz-Signature=d4684cbca4595d6a348049215f570df5a0d4c5d1068d9a4c22f1bb5681416b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7AOH76%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6FEJp17HmT8DmjNVnvjtptrzwR5UCMG920KjIWkCaAIgfUfNgAa1V%2BcNEuKq%2BBSDAugIxyMRuPEBL4KiYKLYZ8MqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs2YMrK3lSf%2BiIrbSrcA1HvqrzgfIpj6WV8xjVs50zKBUT13M8uEQkjCeLWBM1mIfMnLANWe0PU7bu%2BtZmDHyxBLmgjoqfRQFhRGzPQdZ0m%2BfDAmdfsLNDWjw1tZTmkoeSdKIex32bVssQi79LrD97pmetGWKv7aHOANjXvscJvrrPl%2BeWpKtWgWth4wNgncRZU1dLKMhAFt23rDrrCaB9BFJRokry34q4jfhou%2BRG3GK8XH90QmGq6mtxgxET2jK3x83YUBTyUbOSSbRioBQkOVYsFEFFTjN%2BCf6sHDFKgRqfYR1xLWTQqkkFthNGv%2F%2BONaN2ZbGtF1upqE0GeJTYRssILNfL1TCDA4GZ%2BOLZXBtSongXR7njzU29qUTXC9NOY1%2F69%2B4qG62QUlyfuejOGNXtqGF0CXVnBUJh6AQWGKAgHfpyN1Vtp4nYpE%2B6S7Yq2jhyZM66MbxHLsqHwc056GIy6V5jIP2LEqUqrOzfysDbdKTsF9vLdiI3lChbFb3mEAhozwg4XEv7DJh95TAEiwW23Z6GFxcNMcMH8%2BEXTeDJ7pi0Kj9Upe1a5oGeMLK4SFQdQerLDkH25%2Fk282uhe9jZ2nCvLc9zhNahC%2FQdUsyBgYMqIZeJWRIDZeJJHYqSPNHRRgPTzYbRlMJaZ8cMGOqUBqLDWNCucrWv5AugSXCGxdDRMkOY%2F59%2FLeVDhOr9D3xzK3bTxWxdfwQQb%2FnvwaihqVEoxMJJdJI1yRmYJRf0NtZkqplqD1i5%2BMnRaNLBWS3pLBaBGq19ej9rRGwzQ4gSgkYdQlqLNEAx13GVJGeMxWQTbpvqAZjmuY5UavB5mMEG5aa8BuIDi%2BZMZjYgWk0WMQNQ%2BDW%2F%2FI2xR4WQhhEkUcQKP9vmN&X-Amz-Signature=2120e9f36aa62cda0be6d32d272b7c1477e7eeeee80384e40974e2e5f7557e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7AOH76%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6FEJp17HmT8DmjNVnvjtptrzwR5UCMG920KjIWkCaAIgfUfNgAa1V%2BcNEuKq%2BBSDAugIxyMRuPEBL4KiYKLYZ8MqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs2YMrK3lSf%2BiIrbSrcA1HvqrzgfIpj6WV8xjVs50zKBUT13M8uEQkjCeLWBM1mIfMnLANWe0PU7bu%2BtZmDHyxBLmgjoqfRQFhRGzPQdZ0m%2BfDAmdfsLNDWjw1tZTmkoeSdKIex32bVssQi79LrD97pmetGWKv7aHOANjXvscJvrrPl%2BeWpKtWgWth4wNgncRZU1dLKMhAFt23rDrrCaB9BFJRokry34q4jfhou%2BRG3GK8XH90QmGq6mtxgxET2jK3x83YUBTyUbOSSbRioBQkOVYsFEFFTjN%2BCf6sHDFKgRqfYR1xLWTQqkkFthNGv%2F%2BONaN2ZbGtF1upqE0GeJTYRssILNfL1TCDA4GZ%2BOLZXBtSongXR7njzU29qUTXC9NOY1%2F69%2B4qG62QUlyfuejOGNXtqGF0CXVnBUJh6AQWGKAgHfpyN1Vtp4nYpE%2B6S7Yq2jhyZM66MbxHLsqHwc056GIy6V5jIP2LEqUqrOzfysDbdKTsF9vLdiI3lChbFb3mEAhozwg4XEv7DJh95TAEiwW23Z6GFxcNMcMH8%2BEXTeDJ7pi0Kj9Upe1a5oGeMLK4SFQdQerLDkH25%2Fk282uhe9jZ2nCvLc9zhNahC%2FQdUsyBgYMqIZeJWRIDZeJJHYqSPNHRRgPTzYbRlMJaZ8cMGOqUBqLDWNCucrWv5AugSXCGxdDRMkOY%2F59%2FLeVDhOr9D3xzK3bTxWxdfwQQb%2FnvwaihqVEoxMJJdJI1yRmYJRf0NtZkqplqD1i5%2BMnRaNLBWS3pLBaBGq19ej9rRGwzQ4gSgkYdQlqLNEAx13GVJGeMxWQTbpvqAZjmuY5UavB5mMEG5aa8BuIDi%2BZMZjYgWk0WMQNQ%2BDW%2F%2FI2xR4WQhhEkUcQKP9vmN&X-Amz-Signature=41f104bdd16c489784093ff257da453ac56682ef5da5a553728d34e25d6e3e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7AOH76%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6FEJp17HmT8DmjNVnvjtptrzwR5UCMG920KjIWkCaAIgfUfNgAa1V%2BcNEuKq%2BBSDAugIxyMRuPEBL4KiYKLYZ8MqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs2YMrK3lSf%2BiIrbSrcA1HvqrzgfIpj6WV8xjVs50zKBUT13M8uEQkjCeLWBM1mIfMnLANWe0PU7bu%2BtZmDHyxBLmgjoqfRQFhRGzPQdZ0m%2BfDAmdfsLNDWjw1tZTmkoeSdKIex32bVssQi79LrD97pmetGWKv7aHOANjXvscJvrrPl%2BeWpKtWgWth4wNgncRZU1dLKMhAFt23rDrrCaB9BFJRokry34q4jfhou%2BRG3GK8XH90QmGq6mtxgxET2jK3x83YUBTyUbOSSbRioBQkOVYsFEFFTjN%2BCf6sHDFKgRqfYR1xLWTQqkkFthNGv%2F%2BONaN2ZbGtF1upqE0GeJTYRssILNfL1TCDA4GZ%2BOLZXBtSongXR7njzU29qUTXC9NOY1%2F69%2B4qG62QUlyfuejOGNXtqGF0CXVnBUJh6AQWGKAgHfpyN1Vtp4nYpE%2B6S7Yq2jhyZM66MbxHLsqHwc056GIy6V5jIP2LEqUqrOzfysDbdKTsF9vLdiI3lChbFb3mEAhozwg4XEv7DJh95TAEiwW23Z6GFxcNMcMH8%2BEXTeDJ7pi0Kj9Upe1a5oGeMLK4SFQdQerLDkH25%2Fk282uhe9jZ2nCvLc9zhNahC%2FQdUsyBgYMqIZeJWRIDZeJJHYqSPNHRRgPTzYbRlMJaZ8cMGOqUBqLDWNCucrWv5AugSXCGxdDRMkOY%2F59%2FLeVDhOr9D3xzK3bTxWxdfwQQb%2FnvwaihqVEoxMJJdJI1yRmYJRf0NtZkqplqD1i5%2BMnRaNLBWS3pLBaBGq19ej9rRGwzQ4gSgkYdQlqLNEAx13GVJGeMxWQTbpvqAZjmuY5UavB5mMEG5aa8BuIDi%2BZMZjYgWk0WMQNQ%2BDW%2F%2FI2xR4WQhhEkUcQKP9vmN&X-Amz-Signature=5c9a2f26b6b770a60100185f31edca37d6994a066ba644413ffbbfc524505c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7AOH76%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6FEJp17HmT8DmjNVnvjtptrzwR5UCMG920KjIWkCaAIgfUfNgAa1V%2BcNEuKq%2BBSDAugIxyMRuPEBL4KiYKLYZ8MqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs2YMrK3lSf%2BiIrbSrcA1HvqrzgfIpj6WV8xjVs50zKBUT13M8uEQkjCeLWBM1mIfMnLANWe0PU7bu%2BtZmDHyxBLmgjoqfRQFhRGzPQdZ0m%2BfDAmdfsLNDWjw1tZTmkoeSdKIex32bVssQi79LrD97pmetGWKv7aHOANjXvscJvrrPl%2BeWpKtWgWth4wNgncRZU1dLKMhAFt23rDrrCaB9BFJRokry34q4jfhou%2BRG3GK8XH90QmGq6mtxgxET2jK3x83YUBTyUbOSSbRioBQkOVYsFEFFTjN%2BCf6sHDFKgRqfYR1xLWTQqkkFthNGv%2F%2BONaN2ZbGtF1upqE0GeJTYRssILNfL1TCDA4GZ%2BOLZXBtSongXR7njzU29qUTXC9NOY1%2F69%2B4qG62QUlyfuejOGNXtqGF0CXVnBUJh6AQWGKAgHfpyN1Vtp4nYpE%2B6S7Yq2jhyZM66MbxHLsqHwc056GIy6V5jIP2LEqUqrOzfysDbdKTsF9vLdiI3lChbFb3mEAhozwg4XEv7DJh95TAEiwW23Z6GFxcNMcMH8%2BEXTeDJ7pi0Kj9Upe1a5oGeMLK4SFQdQerLDkH25%2Fk282uhe9jZ2nCvLc9zhNahC%2FQdUsyBgYMqIZeJWRIDZeJJHYqSPNHRRgPTzYbRlMJaZ8cMGOqUBqLDWNCucrWv5AugSXCGxdDRMkOY%2F59%2FLeVDhOr9D3xzK3bTxWxdfwQQb%2FnvwaihqVEoxMJJdJI1yRmYJRf0NtZkqplqD1i5%2BMnRaNLBWS3pLBaBGq19ej9rRGwzQ4gSgkYdQlqLNEAx13GVJGeMxWQTbpvqAZjmuY5UavB5mMEG5aa8BuIDi%2BZMZjYgWk0WMQNQ%2BDW%2F%2FI2xR4WQhhEkUcQKP9vmN&X-Amz-Signature=0cd2ef83625daa14dac8140aadf91e1d4bd3fc23e394c228bb4c25e2945647c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7AOH76%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6FEJp17HmT8DmjNVnvjtptrzwR5UCMG920KjIWkCaAIgfUfNgAa1V%2BcNEuKq%2BBSDAugIxyMRuPEBL4KiYKLYZ8MqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs2YMrK3lSf%2BiIrbSrcA1HvqrzgfIpj6WV8xjVs50zKBUT13M8uEQkjCeLWBM1mIfMnLANWe0PU7bu%2BtZmDHyxBLmgjoqfRQFhRGzPQdZ0m%2BfDAmdfsLNDWjw1tZTmkoeSdKIex32bVssQi79LrD97pmetGWKv7aHOANjXvscJvrrPl%2BeWpKtWgWth4wNgncRZU1dLKMhAFt23rDrrCaB9BFJRokry34q4jfhou%2BRG3GK8XH90QmGq6mtxgxET2jK3x83YUBTyUbOSSbRioBQkOVYsFEFFTjN%2BCf6sHDFKgRqfYR1xLWTQqkkFthNGv%2F%2BONaN2ZbGtF1upqE0GeJTYRssILNfL1TCDA4GZ%2BOLZXBtSongXR7njzU29qUTXC9NOY1%2F69%2B4qG62QUlyfuejOGNXtqGF0CXVnBUJh6AQWGKAgHfpyN1Vtp4nYpE%2B6S7Yq2jhyZM66MbxHLsqHwc056GIy6V5jIP2LEqUqrOzfysDbdKTsF9vLdiI3lChbFb3mEAhozwg4XEv7DJh95TAEiwW23Z6GFxcNMcMH8%2BEXTeDJ7pi0Kj9Upe1a5oGeMLK4SFQdQerLDkH25%2Fk282uhe9jZ2nCvLc9zhNahC%2FQdUsyBgYMqIZeJWRIDZeJJHYqSPNHRRgPTzYbRlMJaZ8cMGOqUBqLDWNCucrWv5AugSXCGxdDRMkOY%2F59%2FLeVDhOr9D3xzK3bTxWxdfwQQb%2FnvwaihqVEoxMJJdJI1yRmYJRf0NtZkqplqD1i5%2BMnRaNLBWS3pLBaBGq19ej9rRGwzQ4gSgkYdQlqLNEAx13GVJGeMxWQTbpvqAZjmuY5UavB5mMEG5aa8BuIDi%2BZMZjYgWk0WMQNQ%2BDW%2F%2FI2xR4WQhhEkUcQKP9vmN&X-Amz-Signature=06bf8d2c6e6850e4978090fa371a5c62a14b379912bb7fe48e0c90126cadf194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

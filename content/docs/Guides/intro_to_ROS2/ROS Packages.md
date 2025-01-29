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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6WQJR5W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHYNIpOatUgU51CauL6qBSaq4%2BO5LvGGHokUri4mWL66AiBl8zSMRihn4%2B%2FokDATUL5omxG1JzrQ8QzEqbWF%2F4nYKyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5llOXN0fIfdBZ2KIKtwDDVd1sgJWKB%2BLOjN5jRrjD5bpaI7NDGBc7GtrnSvCoLRmREdrE5v1WsRlyJunbIWkmoQGHqivDba139B3YrME3MDvMF3HBxX47a5voiRzbDw5uttDwSaYvDr%2Fu6RF4GP%2BfVBf8ieU5g9EM4HYSecHyFJ6hC2NKG5SYXWRYxv1XeSyswPUbA6vgGzAcxHkMX4VKHkoPQZSatzDm0UkcG8IZui%2FIHAMVLGZOTRVmKRReHHNLl%2FtsMJN2NlGJSj2SAq%2F9VS8dvubJe%2FP9yip08nZaBY4RrisQVm018IcFvOm1ph7If83qiZes4%2BCFLJXpoOAP4iaHLR1P%2FmkIfO8XqYBoPzz7YcXiNuegeUQdXOS2%2BBTRVR37XxOqeJzmoxenqDxDk0TBpcy6ZD8o95g06iPq0GrL98gfyUu5iNpmXvYA6MwY3pfTEndqJJSkhnDfZsUclb%2B%2Bq3WVvHM1ksvgwnyQrnIBH6Y8bDnxfmyLaiS5UmInoGFB66amus16gPJP27UXB42LuD3U0Ea8rrMA%2BAXVX2Rw8FUYCwUjpiyP45BWYBWQn2WENDW8UZKvLswO4Bbe%2BGWclgsDwu96rD76hotTZBWmJeSmVw7GUB0vJyNPQwCd6ynxXhHvqahUm8woenlvAY6pgGQdQRIMIbaUIInPQT3234MgNerXtHJPiU%2BhkwfAe8FaIYlkABMGZGOk5kxg8JeIOkdNMJyrUYMvecW6HchW0m8Sq21m8BKcCeQOv5yC5lMQwuNRDJoQOXmIyp715a%2FxmbvOWXaf8xLTfm6w%2FWQdfnPmXxQ7eBVag3U2FhhTw%2FAkH7GIFBz%2BTQfJjHX1bt7dfA%2FHiG5L49GCBCSJ%2BN73XNeQeZvB89e&X-Amz-Signature=a8897ed19b2cab532d8f6cdec51065e69daff9ddd6aac4768654ab6860653677&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6WQJR5W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHYNIpOatUgU51CauL6qBSaq4%2BO5LvGGHokUri4mWL66AiBl8zSMRihn4%2B%2FokDATUL5omxG1JzrQ8QzEqbWF%2F4nYKyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5llOXN0fIfdBZ2KIKtwDDVd1sgJWKB%2BLOjN5jRrjD5bpaI7NDGBc7GtrnSvCoLRmREdrE5v1WsRlyJunbIWkmoQGHqivDba139B3YrME3MDvMF3HBxX47a5voiRzbDw5uttDwSaYvDr%2Fu6RF4GP%2BfVBf8ieU5g9EM4HYSecHyFJ6hC2NKG5SYXWRYxv1XeSyswPUbA6vgGzAcxHkMX4VKHkoPQZSatzDm0UkcG8IZui%2FIHAMVLGZOTRVmKRReHHNLl%2FtsMJN2NlGJSj2SAq%2F9VS8dvubJe%2FP9yip08nZaBY4RrisQVm018IcFvOm1ph7If83qiZes4%2BCFLJXpoOAP4iaHLR1P%2FmkIfO8XqYBoPzz7YcXiNuegeUQdXOS2%2BBTRVR37XxOqeJzmoxenqDxDk0TBpcy6ZD8o95g06iPq0GrL98gfyUu5iNpmXvYA6MwY3pfTEndqJJSkhnDfZsUclb%2B%2Bq3WVvHM1ksvgwnyQrnIBH6Y8bDnxfmyLaiS5UmInoGFB66amus16gPJP27UXB42LuD3U0Ea8rrMA%2BAXVX2Rw8FUYCwUjpiyP45BWYBWQn2WENDW8UZKvLswO4Bbe%2BGWclgsDwu96rD76hotTZBWmJeSmVw7GUB0vJyNPQwCd6ynxXhHvqahUm8woenlvAY6pgGQdQRIMIbaUIInPQT3234MgNerXtHJPiU%2BhkwfAe8FaIYlkABMGZGOk5kxg8JeIOkdNMJyrUYMvecW6HchW0m8Sq21m8BKcCeQOv5yC5lMQwuNRDJoQOXmIyp715a%2FxmbvOWXaf8xLTfm6w%2FWQdfnPmXxQ7eBVag3U2FhhTw%2FAkH7GIFBz%2BTQfJjHX1bt7dfA%2FHiG5L49GCBCSJ%2BN73XNeQeZvB89e&X-Amz-Signature=023eba73ef235b29b0d51771e5c01e77d82b07175b9dab83fbfb2e7f403ecb46&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6WQJR5W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHYNIpOatUgU51CauL6qBSaq4%2BO5LvGGHokUri4mWL66AiBl8zSMRihn4%2B%2FokDATUL5omxG1JzrQ8QzEqbWF%2F4nYKyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5llOXN0fIfdBZ2KIKtwDDVd1sgJWKB%2BLOjN5jRrjD5bpaI7NDGBc7GtrnSvCoLRmREdrE5v1WsRlyJunbIWkmoQGHqivDba139B3YrME3MDvMF3HBxX47a5voiRzbDw5uttDwSaYvDr%2Fu6RF4GP%2BfVBf8ieU5g9EM4HYSecHyFJ6hC2NKG5SYXWRYxv1XeSyswPUbA6vgGzAcxHkMX4VKHkoPQZSatzDm0UkcG8IZui%2FIHAMVLGZOTRVmKRReHHNLl%2FtsMJN2NlGJSj2SAq%2F9VS8dvubJe%2FP9yip08nZaBY4RrisQVm018IcFvOm1ph7If83qiZes4%2BCFLJXpoOAP4iaHLR1P%2FmkIfO8XqYBoPzz7YcXiNuegeUQdXOS2%2BBTRVR37XxOqeJzmoxenqDxDk0TBpcy6ZD8o95g06iPq0GrL98gfyUu5iNpmXvYA6MwY3pfTEndqJJSkhnDfZsUclb%2B%2Bq3WVvHM1ksvgwnyQrnIBH6Y8bDnxfmyLaiS5UmInoGFB66amus16gPJP27UXB42LuD3U0Ea8rrMA%2BAXVX2Rw8FUYCwUjpiyP45BWYBWQn2WENDW8UZKvLswO4Bbe%2BGWclgsDwu96rD76hotTZBWmJeSmVw7GUB0vJyNPQwCd6ynxXhHvqahUm8woenlvAY6pgGQdQRIMIbaUIInPQT3234MgNerXtHJPiU%2BhkwfAe8FaIYlkABMGZGOk5kxg8JeIOkdNMJyrUYMvecW6HchW0m8Sq21m8BKcCeQOv5yC5lMQwuNRDJoQOXmIyp715a%2FxmbvOWXaf8xLTfm6w%2FWQdfnPmXxQ7eBVag3U2FhhTw%2FAkH7GIFBz%2BTQfJjHX1bt7dfA%2FHiG5L49GCBCSJ%2BN73XNeQeZvB89e&X-Amz-Signature=ea2bd5b8693856bd17d468fdd1b251ed5f07b8db0f092fa984d6017610fc3103&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6WQJR5W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHYNIpOatUgU51CauL6qBSaq4%2BO5LvGGHokUri4mWL66AiBl8zSMRihn4%2B%2FokDATUL5omxG1JzrQ8QzEqbWF%2F4nYKyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5llOXN0fIfdBZ2KIKtwDDVd1sgJWKB%2BLOjN5jRrjD5bpaI7NDGBc7GtrnSvCoLRmREdrE5v1WsRlyJunbIWkmoQGHqivDba139B3YrME3MDvMF3HBxX47a5voiRzbDw5uttDwSaYvDr%2Fu6RF4GP%2BfVBf8ieU5g9EM4HYSecHyFJ6hC2NKG5SYXWRYxv1XeSyswPUbA6vgGzAcxHkMX4VKHkoPQZSatzDm0UkcG8IZui%2FIHAMVLGZOTRVmKRReHHNLl%2FtsMJN2NlGJSj2SAq%2F9VS8dvubJe%2FP9yip08nZaBY4RrisQVm018IcFvOm1ph7If83qiZes4%2BCFLJXpoOAP4iaHLR1P%2FmkIfO8XqYBoPzz7YcXiNuegeUQdXOS2%2BBTRVR37XxOqeJzmoxenqDxDk0TBpcy6ZD8o95g06iPq0GrL98gfyUu5iNpmXvYA6MwY3pfTEndqJJSkhnDfZsUclb%2B%2Bq3WVvHM1ksvgwnyQrnIBH6Y8bDnxfmyLaiS5UmInoGFB66amus16gPJP27UXB42LuD3U0Ea8rrMA%2BAXVX2Rw8FUYCwUjpiyP45BWYBWQn2WENDW8UZKvLswO4Bbe%2BGWclgsDwu96rD76hotTZBWmJeSmVw7GUB0vJyNPQwCd6ynxXhHvqahUm8woenlvAY6pgGQdQRIMIbaUIInPQT3234MgNerXtHJPiU%2BhkwfAe8FaIYlkABMGZGOk5kxg8JeIOkdNMJyrUYMvecW6HchW0m8Sq21m8BKcCeQOv5yC5lMQwuNRDJoQOXmIyp715a%2FxmbvOWXaf8xLTfm6w%2FWQdfnPmXxQ7eBVag3U2FhhTw%2FAkH7GIFBz%2BTQfJjHX1bt7dfA%2FHiG5L49GCBCSJ%2BN73XNeQeZvB89e&X-Amz-Signature=1422ad6a624b32116ade60ead4ecf4c146bca4be3fe5ce08aa63be3ab511ea01&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6WQJR5W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHYNIpOatUgU51CauL6qBSaq4%2BO5LvGGHokUri4mWL66AiBl8zSMRihn4%2B%2FokDATUL5omxG1JzrQ8QzEqbWF%2F4nYKyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5llOXN0fIfdBZ2KIKtwDDVd1sgJWKB%2BLOjN5jRrjD5bpaI7NDGBc7GtrnSvCoLRmREdrE5v1WsRlyJunbIWkmoQGHqivDba139B3YrME3MDvMF3HBxX47a5voiRzbDw5uttDwSaYvDr%2Fu6RF4GP%2BfVBf8ieU5g9EM4HYSecHyFJ6hC2NKG5SYXWRYxv1XeSyswPUbA6vgGzAcxHkMX4VKHkoPQZSatzDm0UkcG8IZui%2FIHAMVLGZOTRVmKRReHHNLl%2FtsMJN2NlGJSj2SAq%2F9VS8dvubJe%2FP9yip08nZaBY4RrisQVm018IcFvOm1ph7If83qiZes4%2BCFLJXpoOAP4iaHLR1P%2FmkIfO8XqYBoPzz7YcXiNuegeUQdXOS2%2BBTRVR37XxOqeJzmoxenqDxDk0TBpcy6ZD8o95g06iPq0GrL98gfyUu5iNpmXvYA6MwY3pfTEndqJJSkhnDfZsUclb%2B%2Bq3WVvHM1ksvgwnyQrnIBH6Y8bDnxfmyLaiS5UmInoGFB66amus16gPJP27UXB42LuD3U0Ea8rrMA%2BAXVX2Rw8FUYCwUjpiyP45BWYBWQn2WENDW8UZKvLswO4Bbe%2BGWclgsDwu96rD76hotTZBWmJeSmVw7GUB0vJyNPQwCd6ynxXhHvqahUm8woenlvAY6pgGQdQRIMIbaUIInPQT3234MgNerXtHJPiU%2BhkwfAe8FaIYlkABMGZGOk5kxg8JeIOkdNMJyrUYMvecW6HchW0m8Sq21m8BKcCeQOv5yC5lMQwuNRDJoQOXmIyp715a%2FxmbvOWXaf8xLTfm6w%2FWQdfnPmXxQ7eBVag3U2FhhTw%2FAkH7GIFBz%2BTQfJjHX1bt7dfA%2FHiG5L49GCBCSJ%2BN73XNeQeZvB89e&X-Amz-Signature=cb3490c202bf8e901c5393c8f5d50fbe0f78636ecd546a2029fbc86282d41c97&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6WQJR5W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHYNIpOatUgU51CauL6qBSaq4%2BO5LvGGHokUri4mWL66AiBl8zSMRihn4%2B%2FokDATUL5omxG1JzrQ8QzEqbWF%2F4nYKyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5llOXN0fIfdBZ2KIKtwDDVd1sgJWKB%2BLOjN5jRrjD5bpaI7NDGBc7GtrnSvCoLRmREdrE5v1WsRlyJunbIWkmoQGHqivDba139B3YrME3MDvMF3HBxX47a5voiRzbDw5uttDwSaYvDr%2Fu6RF4GP%2BfVBf8ieU5g9EM4HYSecHyFJ6hC2NKG5SYXWRYxv1XeSyswPUbA6vgGzAcxHkMX4VKHkoPQZSatzDm0UkcG8IZui%2FIHAMVLGZOTRVmKRReHHNLl%2FtsMJN2NlGJSj2SAq%2F9VS8dvubJe%2FP9yip08nZaBY4RrisQVm018IcFvOm1ph7If83qiZes4%2BCFLJXpoOAP4iaHLR1P%2FmkIfO8XqYBoPzz7YcXiNuegeUQdXOS2%2BBTRVR37XxOqeJzmoxenqDxDk0TBpcy6ZD8o95g06iPq0GrL98gfyUu5iNpmXvYA6MwY3pfTEndqJJSkhnDfZsUclb%2B%2Bq3WVvHM1ksvgwnyQrnIBH6Y8bDnxfmyLaiS5UmInoGFB66amus16gPJP27UXB42LuD3U0Ea8rrMA%2BAXVX2Rw8FUYCwUjpiyP45BWYBWQn2WENDW8UZKvLswO4Bbe%2BGWclgsDwu96rD76hotTZBWmJeSmVw7GUB0vJyNPQwCd6ynxXhHvqahUm8woenlvAY6pgGQdQRIMIbaUIInPQT3234MgNerXtHJPiU%2BhkwfAe8FaIYlkABMGZGOk5kxg8JeIOkdNMJyrUYMvecW6HchW0m8Sq21m8BKcCeQOv5yC5lMQwuNRDJoQOXmIyp715a%2FxmbvOWXaf8xLTfm6w%2FWQdfnPmXxQ7eBVag3U2FhhTw%2FAkH7GIFBz%2BTQfJjHX1bt7dfA%2FHiG5L49GCBCSJ%2BN73XNeQeZvB89e&X-Amz-Signature=92afeed706cc21cdeda0d713b3a497075f399e0412d183e4c79342393c253c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6WQJR5W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHYNIpOatUgU51CauL6qBSaq4%2BO5LvGGHokUri4mWL66AiBl8zSMRihn4%2B%2FokDATUL5omxG1JzrQ8QzEqbWF%2F4nYKyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5llOXN0fIfdBZ2KIKtwDDVd1sgJWKB%2BLOjN5jRrjD5bpaI7NDGBc7GtrnSvCoLRmREdrE5v1WsRlyJunbIWkmoQGHqivDba139B3YrME3MDvMF3HBxX47a5voiRzbDw5uttDwSaYvDr%2Fu6RF4GP%2BfVBf8ieU5g9EM4HYSecHyFJ6hC2NKG5SYXWRYxv1XeSyswPUbA6vgGzAcxHkMX4VKHkoPQZSatzDm0UkcG8IZui%2FIHAMVLGZOTRVmKRReHHNLl%2FtsMJN2NlGJSj2SAq%2F9VS8dvubJe%2FP9yip08nZaBY4RrisQVm018IcFvOm1ph7If83qiZes4%2BCFLJXpoOAP4iaHLR1P%2FmkIfO8XqYBoPzz7YcXiNuegeUQdXOS2%2BBTRVR37XxOqeJzmoxenqDxDk0TBpcy6ZD8o95g06iPq0GrL98gfyUu5iNpmXvYA6MwY3pfTEndqJJSkhnDfZsUclb%2B%2Bq3WVvHM1ksvgwnyQrnIBH6Y8bDnxfmyLaiS5UmInoGFB66amus16gPJP27UXB42LuD3U0Ea8rrMA%2BAXVX2Rw8FUYCwUjpiyP45BWYBWQn2WENDW8UZKvLswO4Bbe%2BGWclgsDwu96rD76hotTZBWmJeSmVw7GUB0vJyNPQwCd6ynxXhHvqahUm8woenlvAY6pgGQdQRIMIbaUIInPQT3234MgNerXtHJPiU%2BhkwfAe8FaIYlkABMGZGOk5kxg8JeIOkdNMJyrUYMvecW6HchW0m8Sq21m8BKcCeQOv5yC5lMQwuNRDJoQOXmIyp715a%2FxmbvOWXaf8xLTfm6w%2FWQdfnPmXxQ7eBVag3U2FhhTw%2FAkH7GIFBz%2BTQfJjHX1bt7dfA%2FHiG5L49GCBCSJ%2BN73XNeQeZvB89e&X-Amz-Signature=4870d52be4e319a2540c98facc14c4b787b0d98a1d30862714142500e1e90b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4PEYQ4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXnlt47naX0rIsMLjBJkUpHsGnWEyVIHAJbO3Jmo6JxAiBBtcBcvkHEDuke7ToifFnySO38vnuffDRkRYgr7ziZfiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHqShrjlZ0VfD8PmJKtwDgw0RYsfOyNsRYUNcZkNA7uyLSUjQ6hW44FyUhXQooMtNWnmpmnGrZYl03PHh45%2FAWacplJNelMcH1%2BMqmNMVVg50vcJH%2BZzQYYFYfEJsXjvhP8Wg9VddAYuEvcu%2F4RXyMenALFeDtgNDki3hFyICCps51yxaEmyjNJ6LZM7reQlh5rHuwzWw7%2Bb7UV8jTrCnkQsSkx4entQsTVRdftUaEnCVE%2BTfM6GHhC03pK2%2FKbDMoLwEVljUuYf194DYb16B5iq9I%2BEyqdzoAiIK6nrWDUsP7ArWXpI%2Fxvk3kvL2o%2F8GEeSsLHICj2Rp0vVXdug6YXP%2FjCUOksuWa%2BJ0MrxQKTokqDqqnQti1rHXVXPiApVjjqHp8jvkEdXvT4RY9rv4CZv4DgLmAmq7WKQCwPDk8ZvcB4EQfOez28yUda7uwa%2FTL3hESbesE8EcT7SRftVrcvRXwi%2FvmoRpan00isJnihaqR1ZxxZFW8kqcCqPyHtFglxac1GxzO2NFv2ojtmRXqZ0RdPqNuJ29bIjoBUaTKstAUXi4OhwNUTensimYqXzie0bws5ufjdjGx0zcK5SCO7H4vHE8WBgqhw4qR%2BJL%2BwKO0E6NWcTf7TE8iyiwxPFhOnZzAHEJuhl7ynAwl7STwwY6pgEk2cI3%2B%2BJnipLcW1ECN4Wt7WPuO%2F7auhpQ3D63%2FUH1ADnigknc5Yrtg9QGkUKhUjQJrbkrxrpdjILdgn1Lp%2BUxXhz6E1v5JeGLkUO2bUTj8C7rqSZMT9DEn9JmWn99mDzUbqaKe%2FwafguenYHAczr64%2BBaeP9YdfraEBXfRTyxK5a8avuyJKU0n8Zqra1LfDTF0vccchrjs5or47qepYkqRKE2ro39&X-Amz-Signature=d6644af7211848b30d4f508f74792e8e6a63623dd9eb9164eff81a7d2c0334f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4PEYQ4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXnlt47naX0rIsMLjBJkUpHsGnWEyVIHAJbO3Jmo6JxAiBBtcBcvkHEDuke7ToifFnySO38vnuffDRkRYgr7ziZfiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHqShrjlZ0VfD8PmJKtwDgw0RYsfOyNsRYUNcZkNA7uyLSUjQ6hW44FyUhXQooMtNWnmpmnGrZYl03PHh45%2FAWacplJNelMcH1%2BMqmNMVVg50vcJH%2BZzQYYFYfEJsXjvhP8Wg9VddAYuEvcu%2F4RXyMenALFeDtgNDki3hFyICCps51yxaEmyjNJ6LZM7reQlh5rHuwzWw7%2Bb7UV8jTrCnkQsSkx4entQsTVRdftUaEnCVE%2BTfM6GHhC03pK2%2FKbDMoLwEVljUuYf194DYb16B5iq9I%2BEyqdzoAiIK6nrWDUsP7ArWXpI%2Fxvk3kvL2o%2F8GEeSsLHICj2Rp0vVXdug6YXP%2FjCUOksuWa%2BJ0MrxQKTokqDqqnQti1rHXVXPiApVjjqHp8jvkEdXvT4RY9rv4CZv4DgLmAmq7WKQCwPDk8ZvcB4EQfOez28yUda7uwa%2FTL3hESbesE8EcT7SRftVrcvRXwi%2FvmoRpan00isJnihaqR1ZxxZFW8kqcCqPyHtFglxac1GxzO2NFv2ojtmRXqZ0RdPqNuJ29bIjoBUaTKstAUXi4OhwNUTensimYqXzie0bws5ufjdjGx0zcK5SCO7H4vHE8WBgqhw4qR%2BJL%2BwKO0E6NWcTf7TE8iyiwxPFhOnZzAHEJuhl7ynAwl7STwwY6pgEk2cI3%2B%2BJnipLcW1ECN4Wt7WPuO%2F7auhpQ3D63%2FUH1ADnigknc5Yrtg9QGkUKhUjQJrbkrxrpdjILdgn1Lp%2BUxXhz6E1v5JeGLkUO2bUTj8C7rqSZMT9DEn9JmWn99mDzUbqaKe%2FwafguenYHAczr64%2BBaeP9YdfraEBXfRTyxK5a8avuyJKU0n8Zqra1LfDTF0vccchrjs5or47qepYkqRKE2ro39&X-Amz-Signature=2a4eeae6ddfe831a7f25783538d2665341629527dffca801eab3474f5f19031a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4PEYQ4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXnlt47naX0rIsMLjBJkUpHsGnWEyVIHAJbO3Jmo6JxAiBBtcBcvkHEDuke7ToifFnySO38vnuffDRkRYgr7ziZfiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHqShrjlZ0VfD8PmJKtwDgw0RYsfOyNsRYUNcZkNA7uyLSUjQ6hW44FyUhXQooMtNWnmpmnGrZYl03PHh45%2FAWacplJNelMcH1%2BMqmNMVVg50vcJH%2BZzQYYFYfEJsXjvhP8Wg9VddAYuEvcu%2F4RXyMenALFeDtgNDki3hFyICCps51yxaEmyjNJ6LZM7reQlh5rHuwzWw7%2Bb7UV8jTrCnkQsSkx4entQsTVRdftUaEnCVE%2BTfM6GHhC03pK2%2FKbDMoLwEVljUuYf194DYb16B5iq9I%2BEyqdzoAiIK6nrWDUsP7ArWXpI%2Fxvk3kvL2o%2F8GEeSsLHICj2Rp0vVXdug6YXP%2FjCUOksuWa%2BJ0MrxQKTokqDqqnQti1rHXVXPiApVjjqHp8jvkEdXvT4RY9rv4CZv4DgLmAmq7WKQCwPDk8ZvcB4EQfOez28yUda7uwa%2FTL3hESbesE8EcT7SRftVrcvRXwi%2FvmoRpan00isJnihaqR1ZxxZFW8kqcCqPyHtFglxac1GxzO2NFv2ojtmRXqZ0RdPqNuJ29bIjoBUaTKstAUXi4OhwNUTensimYqXzie0bws5ufjdjGx0zcK5SCO7H4vHE8WBgqhw4qR%2BJL%2BwKO0E6NWcTf7TE8iyiwxPFhOnZzAHEJuhl7ynAwl7STwwY6pgEk2cI3%2B%2BJnipLcW1ECN4Wt7WPuO%2F7auhpQ3D63%2FUH1ADnigknc5Yrtg9QGkUKhUjQJrbkrxrpdjILdgn1Lp%2BUxXhz6E1v5JeGLkUO2bUTj8C7rqSZMT9DEn9JmWn99mDzUbqaKe%2FwafguenYHAczr64%2BBaeP9YdfraEBXfRTyxK5a8avuyJKU0n8Zqra1LfDTF0vccchrjs5or47qepYkqRKE2ro39&X-Amz-Signature=a546d70818c1dcd3d323152ceb7d26c26c82bcd73153f3c6a40dd8ea9af39507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4PEYQ4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXnlt47naX0rIsMLjBJkUpHsGnWEyVIHAJbO3Jmo6JxAiBBtcBcvkHEDuke7ToifFnySO38vnuffDRkRYgr7ziZfiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHqShrjlZ0VfD8PmJKtwDgw0RYsfOyNsRYUNcZkNA7uyLSUjQ6hW44FyUhXQooMtNWnmpmnGrZYl03PHh45%2FAWacplJNelMcH1%2BMqmNMVVg50vcJH%2BZzQYYFYfEJsXjvhP8Wg9VddAYuEvcu%2F4RXyMenALFeDtgNDki3hFyICCps51yxaEmyjNJ6LZM7reQlh5rHuwzWw7%2Bb7UV8jTrCnkQsSkx4entQsTVRdftUaEnCVE%2BTfM6GHhC03pK2%2FKbDMoLwEVljUuYf194DYb16B5iq9I%2BEyqdzoAiIK6nrWDUsP7ArWXpI%2Fxvk3kvL2o%2F8GEeSsLHICj2Rp0vVXdug6YXP%2FjCUOksuWa%2BJ0MrxQKTokqDqqnQti1rHXVXPiApVjjqHp8jvkEdXvT4RY9rv4CZv4DgLmAmq7WKQCwPDk8ZvcB4EQfOez28yUda7uwa%2FTL3hESbesE8EcT7SRftVrcvRXwi%2FvmoRpan00isJnihaqR1ZxxZFW8kqcCqPyHtFglxac1GxzO2NFv2ojtmRXqZ0RdPqNuJ29bIjoBUaTKstAUXi4OhwNUTensimYqXzie0bws5ufjdjGx0zcK5SCO7H4vHE8WBgqhw4qR%2BJL%2BwKO0E6NWcTf7TE8iyiwxPFhOnZzAHEJuhl7ynAwl7STwwY6pgEk2cI3%2B%2BJnipLcW1ECN4Wt7WPuO%2F7auhpQ3D63%2FUH1ADnigknc5Yrtg9QGkUKhUjQJrbkrxrpdjILdgn1Lp%2BUxXhz6E1v5JeGLkUO2bUTj8C7rqSZMT9DEn9JmWn99mDzUbqaKe%2FwafguenYHAczr64%2BBaeP9YdfraEBXfRTyxK5a8avuyJKU0n8Zqra1LfDTF0vccchrjs5or47qepYkqRKE2ro39&X-Amz-Signature=3f4124c026f57ada4ec1372f732f56cad72cecd0c5cf9e3379bbf900bf9c7f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4PEYQ4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXnlt47naX0rIsMLjBJkUpHsGnWEyVIHAJbO3Jmo6JxAiBBtcBcvkHEDuke7ToifFnySO38vnuffDRkRYgr7ziZfiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHqShrjlZ0VfD8PmJKtwDgw0RYsfOyNsRYUNcZkNA7uyLSUjQ6hW44FyUhXQooMtNWnmpmnGrZYl03PHh45%2FAWacplJNelMcH1%2BMqmNMVVg50vcJH%2BZzQYYFYfEJsXjvhP8Wg9VddAYuEvcu%2F4RXyMenALFeDtgNDki3hFyICCps51yxaEmyjNJ6LZM7reQlh5rHuwzWw7%2Bb7UV8jTrCnkQsSkx4entQsTVRdftUaEnCVE%2BTfM6GHhC03pK2%2FKbDMoLwEVljUuYf194DYb16B5iq9I%2BEyqdzoAiIK6nrWDUsP7ArWXpI%2Fxvk3kvL2o%2F8GEeSsLHICj2Rp0vVXdug6YXP%2FjCUOksuWa%2BJ0MrxQKTokqDqqnQti1rHXVXPiApVjjqHp8jvkEdXvT4RY9rv4CZv4DgLmAmq7WKQCwPDk8ZvcB4EQfOez28yUda7uwa%2FTL3hESbesE8EcT7SRftVrcvRXwi%2FvmoRpan00isJnihaqR1ZxxZFW8kqcCqPyHtFglxac1GxzO2NFv2ojtmRXqZ0RdPqNuJ29bIjoBUaTKstAUXi4OhwNUTensimYqXzie0bws5ufjdjGx0zcK5SCO7H4vHE8WBgqhw4qR%2BJL%2BwKO0E6NWcTf7TE8iyiwxPFhOnZzAHEJuhl7ynAwl7STwwY6pgEk2cI3%2B%2BJnipLcW1ECN4Wt7WPuO%2F7auhpQ3D63%2FUH1ADnigknc5Yrtg9QGkUKhUjQJrbkrxrpdjILdgn1Lp%2BUxXhz6E1v5JeGLkUO2bUTj8C7rqSZMT9DEn9JmWn99mDzUbqaKe%2FwafguenYHAczr64%2BBaeP9YdfraEBXfRTyxK5a8avuyJKU0n8Zqra1LfDTF0vccchrjs5or47qepYkqRKE2ro39&X-Amz-Signature=0f246507495a4222ae4cdbd6d00e08b13a88afb2e27f2b8753275d72f880eb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4PEYQ4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXnlt47naX0rIsMLjBJkUpHsGnWEyVIHAJbO3Jmo6JxAiBBtcBcvkHEDuke7ToifFnySO38vnuffDRkRYgr7ziZfiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHqShrjlZ0VfD8PmJKtwDgw0RYsfOyNsRYUNcZkNA7uyLSUjQ6hW44FyUhXQooMtNWnmpmnGrZYl03PHh45%2FAWacplJNelMcH1%2BMqmNMVVg50vcJH%2BZzQYYFYfEJsXjvhP8Wg9VddAYuEvcu%2F4RXyMenALFeDtgNDki3hFyICCps51yxaEmyjNJ6LZM7reQlh5rHuwzWw7%2Bb7UV8jTrCnkQsSkx4entQsTVRdftUaEnCVE%2BTfM6GHhC03pK2%2FKbDMoLwEVljUuYf194DYb16B5iq9I%2BEyqdzoAiIK6nrWDUsP7ArWXpI%2Fxvk3kvL2o%2F8GEeSsLHICj2Rp0vVXdug6YXP%2FjCUOksuWa%2BJ0MrxQKTokqDqqnQti1rHXVXPiApVjjqHp8jvkEdXvT4RY9rv4CZv4DgLmAmq7WKQCwPDk8ZvcB4EQfOez28yUda7uwa%2FTL3hESbesE8EcT7SRftVrcvRXwi%2FvmoRpan00isJnihaqR1ZxxZFW8kqcCqPyHtFglxac1GxzO2NFv2ojtmRXqZ0RdPqNuJ29bIjoBUaTKstAUXi4OhwNUTensimYqXzie0bws5ufjdjGx0zcK5SCO7H4vHE8WBgqhw4qR%2BJL%2BwKO0E6NWcTf7TE8iyiwxPFhOnZzAHEJuhl7ynAwl7STwwY6pgEk2cI3%2B%2BJnipLcW1ECN4Wt7WPuO%2F7auhpQ3D63%2FUH1ADnigknc5Yrtg9QGkUKhUjQJrbkrxrpdjILdgn1Lp%2BUxXhz6E1v5JeGLkUO2bUTj8C7rqSZMT9DEn9JmWn99mDzUbqaKe%2FwafguenYHAczr64%2BBaeP9YdfraEBXfRTyxK5a8avuyJKU0n8Zqra1LfDTF0vccchrjs5or47qepYkqRKE2ro39&X-Amz-Signature=b9e0e1f0935743042a42b6b06c5febe3fcb7930e94edacf32ba33b0fdc12306c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4PEYQ4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXnlt47naX0rIsMLjBJkUpHsGnWEyVIHAJbO3Jmo6JxAiBBtcBcvkHEDuke7ToifFnySO38vnuffDRkRYgr7ziZfiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHqShrjlZ0VfD8PmJKtwDgw0RYsfOyNsRYUNcZkNA7uyLSUjQ6hW44FyUhXQooMtNWnmpmnGrZYl03PHh45%2FAWacplJNelMcH1%2BMqmNMVVg50vcJH%2BZzQYYFYfEJsXjvhP8Wg9VddAYuEvcu%2F4RXyMenALFeDtgNDki3hFyICCps51yxaEmyjNJ6LZM7reQlh5rHuwzWw7%2Bb7UV8jTrCnkQsSkx4entQsTVRdftUaEnCVE%2BTfM6GHhC03pK2%2FKbDMoLwEVljUuYf194DYb16B5iq9I%2BEyqdzoAiIK6nrWDUsP7ArWXpI%2Fxvk3kvL2o%2F8GEeSsLHICj2Rp0vVXdug6YXP%2FjCUOksuWa%2BJ0MrxQKTokqDqqnQti1rHXVXPiApVjjqHp8jvkEdXvT4RY9rv4CZv4DgLmAmq7WKQCwPDk8ZvcB4EQfOez28yUda7uwa%2FTL3hESbesE8EcT7SRftVrcvRXwi%2FvmoRpan00isJnihaqR1ZxxZFW8kqcCqPyHtFglxac1GxzO2NFv2ojtmRXqZ0RdPqNuJ29bIjoBUaTKstAUXi4OhwNUTensimYqXzie0bws5ufjdjGx0zcK5SCO7H4vHE8WBgqhw4qR%2BJL%2BwKO0E6NWcTf7TE8iyiwxPFhOnZzAHEJuhl7ynAwl7STwwY6pgEk2cI3%2B%2BJnipLcW1ECN4Wt7WPuO%2F7auhpQ3D63%2FUH1ADnigknc5Yrtg9QGkUKhUjQJrbkrxrpdjILdgn1Lp%2BUxXhz6E1v5JeGLkUO2bUTj8C7rqSZMT9DEn9JmWn99mDzUbqaKe%2FwafguenYHAczr64%2BBaeP9YdfraEBXfRTyxK5a8avuyJKU0n8Zqra1LfDTF0vccchrjs5or47qepYkqRKE2ro39&X-Amz-Signature=99f298dfed7d44b19841f008deb1447b28ede787cd69fd535b4301f7e7ff93ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

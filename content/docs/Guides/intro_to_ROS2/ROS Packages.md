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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEUM4UXJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCSwXECI0WGj12iJGlvPZDrULj5Pb%2Ba8mxyVRgx6lRogIhAOwlwIEPLIXzja2tzhrT4%2Bhx4QLxhYUTHh2E%2FyojQGuUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6jryGa1fgJA9xnXgq3AMeFmc%2BtLhwD%2Fj%2FiCjC8HIdk6bbD8az0%2BZz68RBGA53zrvCZRnla1JjvdXRA%2F%2FsM2kOwGHm2BGab5o2VxXHQfK%2Fx5S9rCxumxEm33jQI2djJGLW1VRBcqU%2FGlWfDtfNP4oh7dISJzErAiLIGpCVRk0rOj9nOZD9tmI35sb1uAucVlIg8iSsoZSWo9wOK%2FjK%2FOf0XyXW70kGbjmBGamji8aEBh70GzsoTWY1Cc4nFkr2I%2FNqIMh2olAqwQlllQhL5x7p26ag%2BmlW3CZ6spjk62o2X2Csg7idupLhkS0EnlD1TpsTMERJxSmw9uMWPQodMXt3mQdD3Pvqa30e0UmKg3s%2BtvTks%2FZ8rqdX6o9XopoeDmelaL4Gk19BQI7puwv8AVkXUfMT9JJ0HX3L30vL%2Fj5kJgu6L3X8xK84GWnAFvX7cFoUe5vt4cOR364hVQGgzped370m3sQ9s%2BVWIi7VLHm4iLrMe2qI7BtiWRzmOd2IkMz1IpiXeGnAnaV2ry54pdqce8wLGxHEVJ6ViTmMTtT7ExPx850W2vZDvN5jKLwHzQPRoCU%2FWCgho3P1IB%2FNnQZ496TBuKfbyjei6HSi%2B4SmCwqxU7E6Em8rRd%2FvmrsjJw14vcBCf0np36RcLjDByZ%2B%2BBjqkAemRHBlkwKczgRwym3t0IItUGYUtRgYdjYr7Phm6RtcvhWJmKmRRo8pv%2BREsO256rib0QIKmFM027uAGVorarOPeU1%2BEOF8n4Ai15TLlKHD%2FjVSnnZRyJkuj5kS20ndEUvL9jKHT64t6UvG3cApsgh6NmGX2gNquo3JNnQipnEWsV9IfuXcHyGL981%2BHer2t1Jg%2F0RDIeBh7zAFJ0idpTx8hDKLc&X-Amz-Signature=9c2fc05dcd2f27efe7415132aba4cb291e841b7603429bdc4dc4b1a5ef23b1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEUM4UXJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCSwXECI0WGj12iJGlvPZDrULj5Pb%2Ba8mxyVRgx6lRogIhAOwlwIEPLIXzja2tzhrT4%2Bhx4QLxhYUTHh2E%2FyojQGuUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6jryGa1fgJA9xnXgq3AMeFmc%2BtLhwD%2Fj%2FiCjC8HIdk6bbD8az0%2BZz68RBGA53zrvCZRnla1JjvdXRA%2F%2FsM2kOwGHm2BGab5o2VxXHQfK%2Fx5S9rCxumxEm33jQI2djJGLW1VRBcqU%2FGlWfDtfNP4oh7dISJzErAiLIGpCVRk0rOj9nOZD9tmI35sb1uAucVlIg8iSsoZSWo9wOK%2FjK%2FOf0XyXW70kGbjmBGamji8aEBh70GzsoTWY1Cc4nFkr2I%2FNqIMh2olAqwQlllQhL5x7p26ag%2BmlW3CZ6spjk62o2X2Csg7idupLhkS0EnlD1TpsTMERJxSmw9uMWPQodMXt3mQdD3Pvqa30e0UmKg3s%2BtvTks%2FZ8rqdX6o9XopoeDmelaL4Gk19BQI7puwv8AVkXUfMT9JJ0HX3L30vL%2Fj5kJgu6L3X8xK84GWnAFvX7cFoUe5vt4cOR364hVQGgzped370m3sQ9s%2BVWIi7VLHm4iLrMe2qI7BtiWRzmOd2IkMz1IpiXeGnAnaV2ry54pdqce8wLGxHEVJ6ViTmMTtT7ExPx850W2vZDvN5jKLwHzQPRoCU%2FWCgho3P1IB%2FNnQZ496TBuKfbyjei6HSi%2B4SmCwqxU7E6Em8rRd%2FvmrsjJw14vcBCf0np36RcLjDByZ%2B%2BBjqkAemRHBlkwKczgRwym3t0IItUGYUtRgYdjYr7Phm6RtcvhWJmKmRRo8pv%2BREsO256rib0QIKmFM027uAGVorarOPeU1%2BEOF8n4Ai15TLlKHD%2FjVSnnZRyJkuj5kS20ndEUvL9jKHT64t6UvG3cApsgh6NmGX2gNquo3JNnQipnEWsV9IfuXcHyGL981%2BHer2t1Jg%2F0RDIeBh7zAFJ0idpTx8hDKLc&X-Amz-Signature=c7459831a535c5097ceca195e5e1aeeb45f59d4867a5fe12a08050f3db270396&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEUM4UXJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCSwXECI0WGj12iJGlvPZDrULj5Pb%2Ba8mxyVRgx6lRogIhAOwlwIEPLIXzja2tzhrT4%2Bhx4QLxhYUTHh2E%2FyojQGuUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6jryGa1fgJA9xnXgq3AMeFmc%2BtLhwD%2Fj%2FiCjC8HIdk6bbD8az0%2BZz68RBGA53zrvCZRnla1JjvdXRA%2F%2FsM2kOwGHm2BGab5o2VxXHQfK%2Fx5S9rCxumxEm33jQI2djJGLW1VRBcqU%2FGlWfDtfNP4oh7dISJzErAiLIGpCVRk0rOj9nOZD9tmI35sb1uAucVlIg8iSsoZSWo9wOK%2FjK%2FOf0XyXW70kGbjmBGamji8aEBh70GzsoTWY1Cc4nFkr2I%2FNqIMh2olAqwQlllQhL5x7p26ag%2BmlW3CZ6spjk62o2X2Csg7idupLhkS0EnlD1TpsTMERJxSmw9uMWPQodMXt3mQdD3Pvqa30e0UmKg3s%2BtvTks%2FZ8rqdX6o9XopoeDmelaL4Gk19BQI7puwv8AVkXUfMT9JJ0HX3L30vL%2Fj5kJgu6L3X8xK84GWnAFvX7cFoUe5vt4cOR364hVQGgzped370m3sQ9s%2BVWIi7VLHm4iLrMe2qI7BtiWRzmOd2IkMz1IpiXeGnAnaV2ry54pdqce8wLGxHEVJ6ViTmMTtT7ExPx850W2vZDvN5jKLwHzQPRoCU%2FWCgho3P1IB%2FNnQZ496TBuKfbyjei6HSi%2B4SmCwqxU7E6Em8rRd%2FvmrsjJw14vcBCf0np36RcLjDByZ%2B%2BBjqkAemRHBlkwKczgRwym3t0IItUGYUtRgYdjYr7Phm6RtcvhWJmKmRRo8pv%2BREsO256rib0QIKmFM027uAGVorarOPeU1%2BEOF8n4Ai15TLlKHD%2FjVSnnZRyJkuj5kS20ndEUvL9jKHT64t6UvG3cApsgh6NmGX2gNquo3JNnQipnEWsV9IfuXcHyGL981%2BHer2t1Jg%2F0RDIeBh7zAFJ0idpTx8hDKLc&X-Amz-Signature=3bb1d891141e2acaecc73f1646889e96c3e06db2576522a1c0cd7005eb1e9cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEUM4UXJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCSwXECI0WGj12iJGlvPZDrULj5Pb%2Ba8mxyVRgx6lRogIhAOwlwIEPLIXzja2tzhrT4%2Bhx4QLxhYUTHh2E%2FyojQGuUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6jryGa1fgJA9xnXgq3AMeFmc%2BtLhwD%2Fj%2FiCjC8HIdk6bbD8az0%2BZz68RBGA53zrvCZRnla1JjvdXRA%2F%2FsM2kOwGHm2BGab5o2VxXHQfK%2Fx5S9rCxumxEm33jQI2djJGLW1VRBcqU%2FGlWfDtfNP4oh7dISJzErAiLIGpCVRk0rOj9nOZD9tmI35sb1uAucVlIg8iSsoZSWo9wOK%2FjK%2FOf0XyXW70kGbjmBGamji8aEBh70GzsoTWY1Cc4nFkr2I%2FNqIMh2olAqwQlllQhL5x7p26ag%2BmlW3CZ6spjk62o2X2Csg7idupLhkS0EnlD1TpsTMERJxSmw9uMWPQodMXt3mQdD3Pvqa30e0UmKg3s%2BtvTks%2FZ8rqdX6o9XopoeDmelaL4Gk19BQI7puwv8AVkXUfMT9JJ0HX3L30vL%2Fj5kJgu6L3X8xK84GWnAFvX7cFoUe5vt4cOR364hVQGgzped370m3sQ9s%2BVWIi7VLHm4iLrMe2qI7BtiWRzmOd2IkMz1IpiXeGnAnaV2ry54pdqce8wLGxHEVJ6ViTmMTtT7ExPx850W2vZDvN5jKLwHzQPRoCU%2FWCgho3P1IB%2FNnQZ496TBuKfbyjei6HSi%2B4SmCwqxU7E6Em8rRd%2FvmrsjJw14vcBCf0np36RcLjDByZ%2B%2BBjqkAemRHBlkwKczgRwym3t0IItUGYUtRgYdjYr7Phm6RtcvhWJmKmRRo8pv%2BREsO256rib0QIKmFM027uAGVorarOPeU1%2BEOF8n4Ai15TLlKHD%2FjVSnnZRyJkuj5kS20ndEUvL9jKHT64t6UvG3cApsgh6NmGX2gNquo3JNnQipnEWsV9IfuXcHyGL981%2BHer2t1Jg%2F0RDIeBh7zAFJ0idpTx8hDKLc&X-Amz-Signature=03f11b62e6201a89cc29534520f6903abfd8c3d719a351362ffc277f83169dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEUM4UXJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCSwXECI0WGj12iJGlvPZDrULj5Pb%2Ba8mxyVRgx6lRogIhAOwlwIEPLIXzja2tzhrT4%2Bhx4QLxhYUTHh2E%2FyojQGuUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6jryGa1fgJA9xnXgq3AMeFmc%2BtLhwD%2Fj%2FiCjC8HIdk6bbD8az0%2BZz68RBGA53zrvCZRnla1JjvdXRA%2F%2FsM2kOwGHm2BGab5o2VxXHQfK%2Fx5S9rCxumxEm33jQI2djJGLW1VRBcqU%2FGlWfDtfNP4oh7dISJzErAiLIGpCVRk0rOj9nOZD9tmI35sb1uAucVlIg8iSsoZSWo9wOK%2FjK%2FOf0XyXW70kGbjmBGamji8aEBh70GzsoTWY1Cc4nFkr2I%2FNqIMh2olAqwQlllQhL5x7p26ag%2BmlW3CZ6spjk62o2X2Csg7idupLhkS0EnlD1TpsTMERJxSmw9uMWPQodMXt3mQdD3Pvqa30e0UmKg3s%2BtvTks%2FZ8rqdX6o9XopoeDmelaL4Gk19BQI7puwv8AVkXUfMT9JJ0HX3L30vL%2Fj5kJgu6L3X8xK84GWnAFvX7cFoUe5vt4cOR364hVQGgzped370m3sQ9s%2BVWIi7VLHm4iLrMe2qI7BtiWRzmOd2IkMz1IpiXeGnAnaV2ry54pdqce8wLGxHEVJ6ViTmMTtT7ExPx850W2vZDvN5jKLwHzQPRoCU%2FWCgho3P1IB%2FNnQZ496TBuKfbyjei6HSi%2B4SmCwqxU7E6Em8rRd%2FvmrsjJw14vcBCf0np36RcLjDByZ%2B%2BBjqkAemRHBlkwKczgRwym3t0IItUGYUtRgYdjYr7Phm6RtcvhWJmKmRRo8pv%2BREsO256rib0QIKmFM027uAGVorarOPeU1%2BEOF8n4Ai15TLlKHD%2FjVSnnZRyJkuj5kS20ndEUvL9jKHT64t6UvG3cApsgh6NmGX2gNquo3JNnQipnEWsV9IfuXcHyGL981%2BHer2t1Jg%2F0RDIeBh7zAFJ0idpTx8hDKLc&X-Amz-Signature=d1197786e91b156fa812cc0be61a4650a832b2eb81927319984773b33f6f688f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEUM4UXJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCSwXECI0WGj12iJGlvPZDrULj5Pb%2Ba8mxyVRgx6lRogIhAOwlwIEPLIXzja2tzhrT4%2Bhx4QLxhYUTHh2E%2FyojQGuUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6jryGa1fgJA9xnXgq3AMeFmc%2BtLhwD%2Fj%2FiCjC8HIdk6bbD8az0%2BZz68RBGA53zrvCZRnla1JjvdXRA%2F%2FsM2kOwGHm2BGab5o2VxXHQfK%2Fx5S9rCxumxEm33jQI2djJGLW1VRBcqU%2FGlWfDtfNP4oh7dISJzErAiLIGpCVRk0rOj9nOZD9tmI35sb1uAucVlIg8iSsoZSWo9wOK%2FjK%2FOf0XyXW70kGbjmBGamji8aEBh70GzsoTWY1Cc4nFkr2I%2FNqIMh2olAqwQlllQhL5x7p26ag%2BmlW3CZ6spjk62o2X2Csg7idupLhkS0EnlD1TpsTMERJxSmw9uMWPQodMXt3mQdD3Pvqa30e0UmKg3s%2BtvTks%2FZ8rqdX6o9XopoeDmelaL4Gk19BQI7puwv8AVkXUfMT9JJ0HX3L30vL%2Fj5kJgu6L3X8xK84GWnAFvX7cFoUe5vt4cOR364hVQGgzped370m3sQ9s%2BVWIi7VLHm4iLrMe2qI7BtiWRzmOd2IkMz1IpiXeGnAnaV2ry54pdqce8wLGxHEVJ6ViTmMTtT7ExPx850W2vZDvN5jKLwHzQPRoCU%2FWCgho3P1IB%2FNnQZ496TBuKfbyjei6HSi%2B4SmCwqxU7E6Em8rRd%2FvmrsjJw14vcBCf0np36RcLjDByZ%2B%2BBjqkAemRHBlkwKczgRwym3t0IItUGYUtRgYdjYr7Phm6RtcvhWJmKmRRo8pv%2BREsO256rib0QIKmFM027uAGVorarOPeU1%2BEOF8n4Ai15TLlKHD%2FjVSnnZRyJkuj5kS20ndEUvL9jKHT64t6UvG3cApsgh6NmGX2gNquo3JNnQipnEWsV9IfuXcHyGL981%2BHer2t1Jg%2F0RDIeBh7zAFJ0idpTx8hDKLc&X-Amz-Signature=d1e65fa6182662e4f96b85eec2c339b71165561d4dd8024170eeb666b7467ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEUM4UXJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCSwXECI0WGj12iJGlvPZDrULj5Pb%2Ba8mxyVRgx6lRogIhAOwlwIEPLIXzja2tzhrT4%2Bhx4QLxhYUTHh2E%2FyojQGuUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6jryGa1fgJA9xnXgq3AMeFmc%2BtLhwD%2Fj%2FiCjC8HIdk6bbD8az0%2BZz68RBGA53zrvCZRnla1JjvdXRA%2F%2FsM2kOwGHm2BGab5o2VxXHQfK%2Fx5S9rCxumxEm33jQI2djJGLW1VRBcqU%2FGlWfDtfNP4oh7dISJzErAiLIGpCVRk0rOj9nOZD9tmI35sb1uAucVlIg8iSsoZSWo9wOK%2FjK%2FOf0XyXW70kGbjmBGamji8aEBh70GzsoTWY1Cc4nFkr2I%2FNqIMh2olAqwQlllQhL5x7p26ag%2BmlW3CZ6spjk62o2X2Csg7idupLhkS0EnlD1TpsTMERJxSmw9uMWPQodMXt3mQdD3Pvqa30e0UmKg3s%2BtvTks%2FZ8rqdX6o9XopoeDmelaL4Gk19BQI7puwv8AVkXUfMT9JJ0HX3L30vL%2Fj5kJgu6L3X8xK84GWnAFvX7cFoUe5vt4cOR364hVQGgzped370m3sQ9s%2BVWIi7VLHm4iLrMe2qI7BtiWRzmOd2IkMz1IpiXeGnAnaV2ry54pdqce8wLGxHEVJ6ViTmMTtT7ExPx850W2vZDvN5jKLwHzQPRoCU%2FWCgho3P1IB%2FNnQZ496TBuKfbyjei6HSi%2B4SmCwqxU7E6Em8rRd%2FvmrsjJw14vcBCf0np36RcLjDByZ%2B%2BBjqkAemRHBlkwKczgRwym3t0IItUGYUtRgYdjYr7Phm6RtcvhWJmKmRRo8pv%2BREsO256rib0QIKmFM027uAGVorarOPeU1%2BEOF8n4Ai15TLlKHD%2FjVSnnZRyJkuj5kS20ndEUvL9jKHT64t6UvG3cApsgh6NmGX2gNquo3JNnQipnEWsV9IfuXcHyGL981%2BHer2t1Jg%2F0RDIeBh7zAFJ0idpTx8hDKLc&X-Amz-Signature=697093f91f80abc3841f5f0703d83ee0af7ce9ef6539dd7807752dbc37aa21a9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

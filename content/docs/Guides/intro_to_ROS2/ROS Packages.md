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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNO77ZBL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOD3LGlGM65f%2FM9GwcxtPiAmNf9Qw2toAiCjUigQSGhwIgHlxYiPVw0aoaypuefeIJ%2FurEL1gRPWfMRHwJ5Fd3dV8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6yYTTAfnkn5mPd9SrcAwqpHMDYn%2BwPFgEdqLnaiJnnhhJtkCXAh24aImvrxYX084%2F0oq3D6794UU3DVRG9q%2Bh43za%2BJghjo%2Bm9aX7mxq5Wt3uHNa12KUM4%2Fk5BlEVv1zurwhcW9FV9NR0oUeXlgi8KSfBIBBBdNSufdykTcfpSmJNsQJsvbgQYTaCQ5vcR6JQ8TFP8MCtPMe7dFbJKr91AO2wJgaNN6XPCf%2FDDRHbckR9ExLaImyV6OgadO55AiV54M8e4kMWi9cS8IBll%2FvZRQ0wH0R%2Bx%2B4Vg9VVeaZaKdDuKNjyAI3sKNlj2wsdyqRxjMbfwqIT%2FS2HzGeyZwT38X1kuv5gMY2Jx3XpFKNhoOz6Hl5vQ9ntZvxf%2B4WER8n1JW%2FvIyQct3h9CvItsvMs4RnpIWkMvn%2FnwIvAng8j%2BE8O0ACslrhGw9qkbouSNOl415tMDWUMV8T8uokmDirBWXE2MO3C4t4lHuCIWihTPRchMkXxcFowiAuD7TIEOXPFfhc5BmOmUgmeJ9ymdrmZra79Q67g%2B44JyYdUdr4osqsSj3q0tXiRvmqr9pGcLUh0enyY5ZumyiZDc6AmvkoH0L8xcIFZuvExcZkerWZw6ImwFobh%2BvJKis7SFSvbCvVUZtSgxFqjDveIkMNv45sQGOqUBX7xI1ARBmQJzqLhr6i%2B57CSTlifKaRhx%2BGKnXf2OvxOeQ7mj2gjRts4tSJyYMZeGLKzuX26Xkmpm1dfgOxbxF29tBdOsGUsgThNYJgYAhJb%2FADzbWy9uw04yfkeIVGcM%2BXnR04JoYFFzoKx7iWg%2FcaxWlOG5Ad3PTdiKzo%2BfCN0i1hnbRvsXEUHneZBN4VojZ3YAY1LOcRWZ1qvEmEugctqiXnMW&X-Amz-Signature=756fb83893e652adec15006d3bff40028bff57de19e8cdb3d0c844197add5f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNO77ZBL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOD3LGlGM65f%2FM9GwcxtPiAmNf9Qw2toAiCjUigQSGhwIgHlxYiPVw0aoaypuefeIJ%2FurEL1gRPWfMRHwJ5Fd3dV8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6yYTTAfnkn5mPd9SrcAwqpHMDYn%2BwPFgEdqLnaiJnnhhJtkCXAh24aImvrxYX084%2F0oq3D6794UU3DVRG9q%2Bh43za%2BJghjo%2Bm9aX7mxq5Wt3uHNa12KUM4%2Fk5BlEVv1zurwhcW9FV9NR0oUeXlgi8KSfBIBBBdNSufdykTcfpSmJNsQJsvbgQYTaCQ5vcR6JQ8TFP8MCtPMe7dFbJKr91AO2wJgaNN6XPCf%2FDDRHbckR9ExLaImyV6OgadO55AiV54M8e4kMWi9cS8IBll%2FvZRQ0wH0R%2Bx%2B4Vg9VVeaZaKdDuKNjyAI3sKNlj2wsdyqRxjMbfwqIT%2FS2HzGeyZwT38X1kuv5gMY2Jx3XpFKNhoOz6Hl5vQ9ntZvxf%2B4WER8n1JW%2FvIyQct3h9CvItsvMs4RnpIWkMvn%2FnwIvAng8j%2BE8O0ACslrhGw9qkbouSNOl415tMDWUMV8T8uokmDirBWXE2MO3C4t4lHuCIWihTPRchMkXxcFowiAuD7TIEOXPFfhc5BmOmUgmeJ9ymdrmZra79Q67g%2B44JyYdUdr4osqsSj3q0tXiRvmqr9pGcLUh0enyY5ZumyiZDc6AmvkoH0L8xcIFZuvExcZkerWZw6ImwFobh%2BvJKis7SFSvbCvVUZtSgxFqjDveIkMNv45sQGOqUBX7xI1ARBmQJzqLhr6i%2B57CSTlifKaRhx%2BGKnXf2OvxOeQ7mj2gjRts4tSJyYMZeGLKzuX26Xkmpm1dfgOxbxF29tBdOsGUsgThNYJgYAhJb%2FADzbWy9uw04yfkeIVGcM%2BXnR04JoYFFzoKx7iWg%2FcaxWlOG5Ad3PTdiKzo%2BfCN0i1hnbRvsXEUHneZBN4VojZ3YAY1LOcRWZ1qvEmEugctqiXnMW&X-Amz-Signature=1196afc79ed34cac2349c0005898ed7369664cf17f1bd6ca6b355102cdbf05f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNO77ZBL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOD3LGlGM65f%2FM9GwcxtPiAmNf9Qw2toAiCjUigQSGhwIgHlxYiPVw0aoaypuefeIJ%2FurEL1gRPWfMRHwJ5Fd3dV8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6yYTTAfnkn5mPd9SrcAwqpHMDYn%2BwPFgEdqLnaiJnnhhJtkCXAh24aImvrxYX084%2F0oq3D6794UU3DVRG9q%2Bh43za%2BJghjo%2Bm9aX7mxq5Wt3uHNa12KUM4%2Fk5BlEVv1zurwhcW9FV9NR0oUeXlgi8KSfBIBBBdNSufdykTcfpSmJNsQJsvbgQYTaCQ5vcR6JQ8TFP8MCtPMe7dFbJKr91AO2wJgaNN6XPCf%2FDDRHbckR9ExLaImyV6OgadO55AiV54M8e4kMWi9cS8IBll%2FvZRQ0wH0R%2Bx%2B4Vg9VVeaZaKdDuKNjyAI3sKNlj2wsdyqRxjMbfwqIT%2FS2HzGeyZwT38X1kuv5gMY2Jx3XpFKNhoOz6Hl5vQ9ntZvxf%2B4WER8n1JW%2FvIyQct3h9CvItsvMs4RnpIWkMvn%2FnwIvAng8j%2BE8O0ACslrhGw9qkbouSNOl415tMDWUMV8T8uokmDirBWXE2MO3C4t4lHuCIWihTPRchMkXxcFowiAuD7TIEOXPFfhc5BmOmUgmeJ9ymdrmZra79Q67g%2B44JyYdUdr4osqsSj3q0tXiRvmqr9pGcLUh0enyY5ZumyiZDc6AmvkoH0L8xcIFZuvExcZkerWZw6ImwFobh%2BvJKis7SFSvbCvVUZtSgxFqjDveIkMNv45sQGOqUBX7xI1ARBmQJzqLhr6i%2B57CSTlifKaRhx%2BGKnXf2OvxOeQ7mj2gjRts4tSJyYMZeGLKzuX26Xkmpm1dfgOxbxF29tBdOsGUsgThNYJgYAhJb%2FADzbWy9uw04yfkeIVGcM%2BXnR04JoYFFzoKx7iWg%2FcaxWlOG5Ad3PTdiKzo%2BfCN0i1hnbRvsXEUHneZBN4VojZ3YAY1LOcRWZ1qvEmEugctqiXnMW&X-Amz-Signature=6dee6ec0a14565615de5f4257e03096ec206013f924053fb607481edd300115a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNO77ZBL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOD3LGlGM65f%2FM9GwcxtPiAmNf9Qw2toAiCjUigQSGhwIgHlxYiPVw0aoaypuefeIJ%2FurEL1gRPWfMRHwJ5Fd3dV8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6yYTTAfnkn5mPd9SrcAwqpHMDYn%2BwPFgEdqLnaiJnnhhJtkCXAh24aImvrxYX084%2F0oq3D6794UU3DVRG9q%2Bh43za%2BJghjo%2Bm9aX7mxq5Wt3uHNa12KUM4%2Fk5BlEVv1zurwhcW9FV9NR0oUeXlgi8KSfBIBBBdNSufdykTcfpSmJNsQJsvbgQYTaCQ5vcR6JQ8TFP8MCtPMe7dFbJKr91AO2wJgaNN6XPCf%2FDDRHbckR9ExLaImyV6OgadO55AiV54M8e4kMWi9cS8IBll%2FvZRQ0wH0R%2Bx%2B4Vg9VVeaZaKdDuKNjyAI3sKNlj2wsdyqRxjMbfwqIT%2FS2HzGeyZwT38X1kuv5gMY2Jx3XpFKNhoOz6Hl5vQ9ntZvxf%2B4WER8n1JW%2FvIyQct3h9CvItsvMs4RnpIWkMvn%2FnwIvAng8j%2BE8O0ACslrhGw9qkbouSNOl415tMDWUMV8T8uokmDirBWXE2MO3C4t4lHuCIWihTPRchMkXxcFowiAuD7TIEOXPFfhc5BmOmUgmeJ9ymdrmZra79Q67g%2B44JyYdUdr4osqsSj3q0tXiRvmqr9pGcLUh0enyY5ZumyiZDc6AmvkoH0L8xcIFZuvExcZkerWZw6ImwFobh%2BvJKis7SFSvbCvVUZtSgxFqjDveIkMNv45sQGOqUBX7xI1ARBmQJzqLhr6i%2B57CSTlifKaRhx%2BGKnXf2OvxOeQ7mj2gjRts4tSJyYMZeGLKzuX26Xkmpm1dfgOxbxF29tBdOsGUsgThNYJgYAhJb%2FADzbWy9uw04yfkeIVGcM%2BXnR04JoYFFzoKx7iWg%2FcaxWlOG5Ad3PTdiKzo%2BfCN0i1hnbRvsXEUHneZBN4VojZ3YAY1LOcRWZ1qvEmEugctqiXnMW&X-Amz-Signature=36bf944ae96463466979238ae778e8af11f196b4f17a5c233c4a7d8c4e7c0ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNO77ZBL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOD3LGlGM65f%2FM9GwcxtPiAmNf9Qw2toAiCjUigQSGhwIgHlxYiPVw0aoaypuefeIJ%2FurEL1gRPWfMRHwJ5Fd3dV8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6yYTTAfnkn5mPd9SrcAwqpHMDYn%2BwPFgEdqLnaiJnnhhJtkCXAh24aImvrxYX084%2F0oq3D6794UU3DVRG9q%2Bh43za%2BJghjo%2Bm9aX7mxq5Wt3uHNa12KUM4%2Fk5BlEVv1zurwhcW9FV9NR0oUeXlgi8KSfBIBBBdNSufdykTcfpSmJNsQJsvbgQYTaCQ5vcR6JQ8TFP8MCtPMe7dFbJKr91AO2wJgaNN6XPCf%2FDDRHbckR9ExLaImyV6OgadO55AiV54M8e4kMWi9cS8IBll%2FvZRQ0wH0R%2Bx%2B4Vg9VVeaZaKdDuKNjyAI3sKNlj2wsdyqRxjMbfwqIT%2FS2HzGeyZwT38X1kuv5gMY2Jx3XpFKNhoOz6Hl5vQ9ntZvxf%2B4WER8n1JW%2FvIyQct3h9CvItsvMs4RnpIWkMvn%2FnwIvAng8j%2BE8O0ACslrhGw9qkbouSNOl415tMDWUMV8T8uokmDirBWXE2MO3C4t4lHuCIWihTPRchMkXxcFowiAuD7TIEOXPFfhc5BmOmUgmeJ9ymdrmZra79Q67g%2B44JyYdUdr4osqsSj3q0tXiRvmqr9pGcLUh0enyY5ZumyiZDc6AmvkoH0L8xcIFZuvExcZkerWZw6ImwFobh%2BvJKis7SFSvbCvVUZtSgxFqjDveIkMNv45sQGOqUBX7xI1ARBmQJzqLhr6i%2B57CSTlifKaRhx%2BGKnXf2OvxOeQ7mj2gjRts4tSJyYMZeGLKzuX26Xkmpm1dfgOxbxF29tBdOsGUsgThNYJgYAhJb%2FADzbWy9uw04yfkeIVGcM%2BXnR04JoYFFzoKx7iWg%2FcaxWlOG5Ad3PTdiKzo%2BfCN0i1hnbRvsXEUHneZBN4VojZ3YAY1LOcRWZ1qvEmEugctqiXnMW&X-Amz-Signature=bc0463d2c0bd16ad3119a2535fd2f77493b0c1cb8ee70855798759922e185bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNO77ZBL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOD3LGlGM65f%2FM9GwcxtPiAmNf9Qw2toAiCjUigQSGhwIgHlxYiPVw0aoaypuefeIJ%2FurEL1gRPWfMRHwJ5Fd3dV8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6yYTTAfnkn5mPd9SrcAwqpHMDYn%2BwPFgEdqLnaiJnnhhJtkCXAh24aImvrxYX084%2F0oq3D6794UU3DVRG9q%2Bh43za%2BJghjo%2Bm9aX7mxq5Wt3uHNa12KUM4%2Fk5BlEVv1zurwhcW9FV9NR0oUeXlgi8KSfBIBBBdNSufdykTcfpSmJNsQJsvbgQYTaCQ5vcR6JQ8TFP8MCtPMe7dFbJKr91AO2wJgaNN6XPCf%2FDDRHbckR9ExLaImyV6OgadO55AiV54M8e4kMWi9cS8IBll%2FvZRQ0wH0R%2Bx%2B4Vg9VVeaZaKdDuKNjyAI3sKNlj2wsdyqRxjMbfwqIT%2FS2HzGeyZwT38X1kuv5gMY2Jx3XpFKNhoOz6Hl5vQ9ntZvxf%2B4WER8n1JW%2FvIyQct3h9CvItsvMs4RnpIWkMvn%2FnwIvAng8j%2BE8O0ACslrhGw9qkbouSNOl415tMDWUMV8T8uokmDirBWXE2MO3C4t4lHuCIWihTPRchMkXxcFowiAuD7TIEOXPFfhc5BmOmUgmeJ9ymdrmZra79Q67g%2B44JyYdUdr4osqsSj3q0tXiRvmqr9pGcLUh0enyY5ZumyiZDc6AmvkoH0L8xcIFZuvExcZkerWZw6ImwFobh%2BvJKis7SFSvbCvVUZtSgxFqjDveIkMNv45sQGOqUBX7xI1ARBmQJzqLhr6i%2B57CSTlifKaRhx%2BGKnXf2OvxOeQ7mj2gjRts4tSJyYMZeGLKzuX26Xkmpm1dfgOxbxF29tBdOsGUsgThNYJgYAhJb%2FADzbWy9uw04yfkeIVGcM%2BXnR04JoYFFzoKx7iWg%2FcaxWlOG5Ad3PTdiKzo%2BfCN0i1hnbRvsXEUHneZBN4VojZ3YAY1LOcRWZ1qvEmEugctqiXnMW&X-Amz-Signature=0f281c3d35820790bfb5092fae8db10f4fb7b7d5bda6af84090339a66dc4bb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNO77ZBL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOD3LGlGM65f%2FM9GwcxtPiAmNf9Qw2toAiCjUigQSGhwIgHlxYiPVw0aoaypuefeIJ%2FurEL1gRPWfMRHwJ5Fd3dV8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6yYTTAfnkn5mPd9SrcAwqpHMDYn%2BwPFgEdqLnaiJnnhhJtkCXAh24aImvrxYX084%2F0oq3D6794UU3DVRG9q%2Bh43za%2BJghjo%2Bm9aX7mxq5Wt3uHNa12KUM4%2Fk5BlEVv1zurwhcW9FV9NR0oUeXlgi8KSfBIBBBdNSufdykTcfpSmJNsQJsvbgQYTaCQ5vcR6JQ8TFP8MCtPMe7dFbJKr91AO2wJgaNN6XPCf%2FDDRHbckR9ExLaImyV6OgadO55AiV54M8e4kMWi9cS8IBll%2FvZRQ0wH0R%2Bx%2B4Vg9VVeaZaKdDuKNjyAI3sKNlj2wsdyqRxjMbfwqIT%2FS2HzGeyZwT38X1kuv5gMY2Jx3XpFKNhoOz6Hl5vQ9ntZvxf%2B4WER8n1JW%2FvIyQct3h9CvItsvMs4RnpIWkMvn%2FnwIvAng8j%2BE8O0ACslrhGw9qkbouSNOl415tMDWUMV8T8uokmDirBWXE2MO3C4t4lHuCIWihTPRchMkXxcFowiAuD7TIEOXPFfhc5BmOmUgmeJ9ymdrmZra79Q67g%2B44JyYdUdr4osqsSj3q0tXiRvmqr9pGcLUh0enyY5ZumyiZDc6AmvkoH0L8xcIFZuvExcZkerWZw6ImwFobh%2BvJKis7SFSvbCvVUZtSgxFqjDveIkMNv45sQGOqUBX7xI1ARBmQJzqLhr6i%2B57CSTlifKaRhx%2BGKnXf2OvxOeQ7mj2gjRts4tSJyYMZeGLKzuX26Xkmpm1dfgOxbxF29tBdOsGUsgThNYJgYAhJb%2FADzbWy9uw04yfkeIVGcM%2BXnR04JoYFFzoKx7iWg%2FcaxWlOG5Ad3PTdiKzo%2BfCN0i1hnbRvsXEUHneZBN4VojZ3YAY1LOcRWZ1qvEmEugctqiXnMW&X-Amz-Signature=05f09f268c04814e5d58e191201af1e0f69d5ed43c9358ba13ad25c6433d0072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

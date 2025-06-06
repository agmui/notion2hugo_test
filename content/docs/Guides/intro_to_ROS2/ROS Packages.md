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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPLOR2C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqnCLoePDLBxiU62LdbH9dOM5ciwGQxcvhVIH0tq5aPAiEA898brTpS5Gh%2FU5dKH8xq0c9SZsILvRUEUyEopvTnkywq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH9z19aOFH9wxwSJzSrcA1hDpTw7MTmzCid2rLQ02i%2FHz42tghUDtOBZY94ievTIZuhPf5HuwpMntnFxbI%2FFKjkn8PJRC8FEoAMwlLm19aYM42xDG57HYqlNJ01D%2FTy7l9idAtwcUfOBvLsj8lL0VStPWjD8FoQ4aZCymsx45XMIy%2BrLJ0ddpBA4MDBgcVgGtGxPlO3owHx6bkTrn00wKOTHHTpTk%2FBqn1YB4qLM5%2FgIn8amDz3zTmFQpCa9XfYNyoN4oHKdmRp8vSMgYUaX20C0YI48TfZYyUy%2FxR0U7DPeNB5d3N0REjg0p3RVieUwqWv3DYALhSFtU8J2%2BuZZ8AYS9X369GMlkblENnnicmk0PDUeHw38B9QwHe3RsQ8nn%2Fo7ZNcWmku0jiJCQ92R%2F2q2Y64EBOcRVwxfH3axfuI1Ck%2BoMwck2Oz8iYjh8S2vmeFY0g%2FGdycRqLB9ojzdWwBi9XgMj%2FUUOaio0vs4omrk3jRtc4JfOIcwbVLzJViiFKGSs%2BwzMrytAJbgdP0aTM3K4qYfYPGGyBvkfQJOfxN7stula66C86v%2BGYh1g5p1P6FrNqi3fxywdqoZlzIEf7F%2FUMF3FBXFp4UW%2Fflp5eRTcnEp7lPEIEs%2B%2FVjQ073fT1VnJuD25J34JRoRMMuhjMIGOqUBJZJturJWBUZEv1fOUnDblR%2FEMBOXnnHLVB5WJalHGIkNuPKIfWRWs3mxoCD4N4fA3kTu2sikISgB%2B281IzKLezrzq7YSRERuXTo4Bo5rB7aZ4XjhL12ob8zxUxH38DSVES3w0rZR9yf8Yrkr6xqHFJy2ykuH%2FcFp0ul9z2TRqXC1S1lkbrIOJ818E0qjtYvvuhq3jfWOTi19TD5bnPEpQyhBB1aR&X-Amz-Signature=0f7bebc29431eac38294cfabf0bfb1a327fe410f5445f3ac994bfa0558c0c08d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPLOR2C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqnCLoePDLBxiU62LdbH9dOM5ciwGQxcvhVIH0tq5aPAiEA898brTpS5Gh%2FU5dKH8xq0c9SZsILvRUEUyEopvTnkywq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH9z19aOFH9wxwSJzSrcA1hDpTw7MTmzCid2rLQ02i%2FHz42tghUDtOBZY94ievTIZuhPf5HuwpMntnFxbI%2FFKjkn8PJRC8FEoAMwlLm19aYM42xDG57HYqlNJ01D%2FTy7l9idAtwcUfOBvLsj8lL0VStPWjD8FoQ4aZCymsx45XMIy%2BrLJ0ddpBA4MDBgcVgGtGxPlO3owHx6bkTrn00wKOTHHTpTk%2FBqn1YB4qLM5%2FgIn8amDz3zTmFQpCa9XfYNyoN4oHKdmRp8vSMgYUaX20C0YI48TfZYyUy%2FxR0U7DPeNB5d3N0REjg0p3RVieUwqWv3DYALhSFtU8J2%2BuZZ8AYS9X369GMlkblENnnicmk0PDUeHw38B9QwHe3RsQ8nn%2Fo7ZNcWmku0jiJCQ92R%2F2q2Y64EBOcRVwxfH3axfuI1Ck%2BoMwck2Oz8iYjh8S2vmeFY0g%2FGdycRqLB9ojzdWwBi9XgMj%2FUUOaio0vs4omrk3jRtc4JfOIcwbVLzJViiFKGSs%2BwzMrytAJbgdP0aTM3K4qYfYPGGyBvkfQJOfxN7stula66C86v%2BGYh1g5p1P6FrNqi3fxywdqoZlzIEf7F%2FUMF3FBXFp4UW%2Fflp5eRTcnEp7lPEIEs%2B%2FVjQ073fT1VnJuD25J34JRoRMMuhjMIGOqUBJZJturJWBUZEv1fOUnDblR%2FEMBOXnnHLVB5WJalHGIkNuPKIfWRWs3mxoCD4N4fA3kTu2sikISgB%2B281IzKLezrzq7YSRERuXTo4Bo5rB7aZ4XjhL12ob8zxUxH38DSVES3w0rZR9yf8Yrkr6xqHFJy2ykuH%2FcFp0ul9z2TRqXC1S1lkbrIOJ818E0qjtYvvuhq3jfWOTi19TD5bnPEpQyhBB1aR&X-Amz-Signature=d7b425511fb7d994f43ff0adbc0192e075f7767d41316086b9dce6baeb970ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPLOR2C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqnCLoePDLBxiU62LdbH9dOM5ciwGQxcvhVIH0tq5aPAiEA898brTpS5Gh%2FU5dKH8xq0c9SZsILvRUEUyEopvTnkywq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH9z19aOFH9wxwSJzSrcA1hDpTw7MTmzCid2rLQ02i%2FHz42tghUDtOBZY94ievTIZuhPf5HuwpMntnFxbI%2FFKjkn8PJRC8FEoAMwlLm19aYM42xDG57HYqlNJ01D%2FTy7l9idAtwcUfOBvLsj8lL0VStPWjD8FoQ4aZCymsx45XMIy%2BrLJ0ddpBA4MDBgcVgGtGxPlO3owHx6bkTrn00wKOTHHTpTk%2FBqn1YB4qLM5%2FgIn8amDz3zTmFQpCa9XfYNyoN4oHKdmRp8vSMgYUaX20C0YI48TfZYyUy%2FxR0U7DPeNB5d3N0REjg0p3RVieUwqWv3DYALhSFtU8J2%2BuZZ8AYS9X369GMlkblENnnicmk0PDUeHw38B9QwHe3RsQ8nn%2Fo7ZNcWmku0jiJCQ92R%2F2q2Y64EBOcRVwxfH3axfuI1Ck%2BoMwck2Oz8iYjh8S2vmeFY0g%2FGdycRqLB9ojzdWwBi9XgMj%2FUUOaio0vs4omrk3jRtc4JfOIcwbVLzJViiFKGSs%2BwzMrytAJbgdP0aTM3K4qYfYPGGyBvkfQJOfxN7stula66C86v%2BGYh1g5p1P6FrNqi3fxywdqoZlzIEf7F%2FUMF3FBXFp4UW%2Fflp5eRTcnEp7lPEIEs%2B%2FVjQ073fT1VnJuD25J34JRoRMMuhjMIGOqUBJZJturJWBUZEv1fOUnDblR%2FEMBOXnnHLVB5WJalHGIkNuPKIfWRWs3mxoCD4N4fA3kTu2sikISgB%2B281IzKLezrzq7YSRERuXTo4Bo5rB7aZ4XjhL12ob8zxUxH38DSVES3w0rZR9yf8Yrkr6xqHFJy2ykuH%2FcFp0ul9z2TRqXC1S1lkbrIOJ818E0qjtYvvuhq3jfWOTi19TD5bnPEpQyhBB1aR&X-Amz-Signature=cda24b01a8688d16311c8a0c0d59286243316e855854e2eb0393b71521e0dc91&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPLOR2C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqnCLoePDLBxiU62LdbH9dOM5ciwGQxcvhVIH0tq5aPAiEA898brTpS5Gh%2FU5dKH8xq0c9SZsILvRUEUyEopvTnkywq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH9z19aOFH9wxwSJzSrcA1hDpTw7MTmzCid2rLQ02i%2FHz42tghUDtOBZY94ievTIZuhPf5HuwpMntnFxbI%2FFKjkn8PJRC8FEoAMwlLm19aYM42xDG57HYqlNJ01D%2FTy7l9idAtwcUfOBvLsj8lL0VStPWjD8FoQ4aZCymsx45XMIy%2BrLJ0ddpBA4MDBgcVgGtGxPlO3owHx6bkTrn00wKOTHHTpTk%2FBqn1YB4qLM5%2FgIn8amDz3zTmFQpCa9XfYNyoN4oHKdmRp8vSMgYUaX20C0YI48TfZYyUy%2FxR0U7DPeNB5d3N0REjg0p3RVieUwqWv3DYALhSFtU8J2%2BuZZ8AYS9X369GMlkblENnnicmk0PDUeHw38B9QwHe3RsQ8nn%2Fo7ZNcWmku0jiJCQ92R%2F2q2Y64EBOcRVwxfH3axfuI1Ck%2BoMwck2Oz8iYjh8S2vmeFY0g%2FGdycRqLB9ojzdWwBi9XgMj%2FUUOaio0vs4omrk3jRtc4JfOIcwbVLzJViiFKGSs%2BwzMrytAJbgdP0aTM3K4qYfYPGGyBvkfQJOfxN7stula66C86v%2BGYh1g5p1P6FrNqi3fxywdqoZlzIEf7F%2FUMF3FBXFp4UW%2Fflp5eRTcnEp7lPEIEs%2B%2FVjQ073fT1VnJuD25J34JRoRMMuhjMIGOqUBJZJturJWBUZEv1fOUnDblR%2FEMBOXnnHLVB5WJalHGIkNuPKIfWRWs3mxoCD4N4fA3kTu2sikISgB%2B281IzKLezrzq7YSRERuXTo4Bo5rB7aZ4XjhL12ob8zxUxH38DSVES3w0rZR9yf8Yrkr6xqHFJy2ykuH%2FcFp0ul9z2TRqXC1S1lkbrIOJ818E0qjtYvvuhq3jfWOTi19TD5bnPEpQyhBB1aR&X-Amz-Signature=531533cf223be7a31d7a812dfe33c277ebaa4b3bcd0723b42eac57d2324e2006&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPLOR2C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqnCLoePDLBxiU62LdbH9dOM5ciwGQxcvhVIH0tq5aPAiEA898brTpS5Gh%2FU5dKH8xq0c9SZsILvRUEUyEopvTnkywq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH9z19aOFH9wxwSJzSrcA1hDpTw7MTmzCid2rLQ02i%2FHz42tghUDtOBZY94ievTIZuhPf5HuwpMntnFxbI%2FFKjkn8PJRC8FEoAMwlLm19aYM42xDG57HYqlNJ01D%2FTy7l9idAtwcUfOBvLsj8lL0VStPWjD8FoQ4aZCymsx45XMIy%2BrLJ0ddpBA4MDBgcVgGtGxPlO3owHx6bkTrn00wKOTHHTpTk%2FBqn1YB4qLM5%2FgIn8amDz3zTmFQpCa9XfYNyoN4oHKdmRp8vSMgYUaX20C0YI48TfZYyUy%2FxR0U7DPeNB5d3N0REjg0p3RVieUwqWv3DYALhSFtU8J2%2BuZZ8AYS9X369GMlkblENnnicmk0PDUeHw38B9QwHe3RsQ8nn%2Fo7ZNcWmku0jiJCQ92R%2F2q2Y64EBOcRVwxfH3axfuI1Ck%2BoMwck2Oz8iYjh8S2vmeFY0g%2FGdycRqLB9ojzdWwBi9XgMj%2FUUOaio0vs4omrk3jRtc4JfOIcwbVLzJViiFKGSs%2BwzMrytAJbgdP0aTM3K4qYfYPGGyBvkfQJOfxN7stula66C86v%2BGYh1g5p1P6FrNqi3fxywdqoZlzIEf7F%2FUMF3FBXFp4UW%2Fflp5eRTcnEp7lPEIEs%2B%2FVjQ073fT1VnJuD25J34JRoRMMuhjMIGOqUBJZJturJWBUZEv1fOUnDblR%2FEMBOXnnHLVB5WJalHGIkNuPKIfWRWs3mxoCD4N4fA3kTu2sikISgB%2B281IzKLezrzq7YSRERuXTo4Bo5rB7aZ4XjhL12ob8zxUxH38DSVES3w0rZR9yf8Yrkr6xqHFJy2ykuH%2FcFp0ul9z2TRqXC1S1lkbrIOJ818E0qjtYvvuhq3jfWOTi19TD5bnPEpQyhBB1aR&X-Amz-Signature=d0533b133dd8a7f712b9c4a2c59fd53573a32f512f54268c8aafed2a52bf6699&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPLOR2C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqnCLoePDLBxiU62LdbH9dOM5ciwGQxcvhVIH0tq5aPAiEA898brTpS5Gh%2FU5dKH8xq0c9SZsILvRUEUyEopvTnkywq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH9z19aOFH9wxwSJzSrcA1hDpTw7MTmzCid2rLQ02i%2FHz42tghUDtOBZY94ievTIZuhPf5HuwpMntnFxbI%2FFKjkn8PJRC8FEoAMwlLm19aYM42xDG57HYqlNJ01D%2FTy7l9idAtwcUfOBvLsj8lL0VStPWjD8FoQ4aZCymsx45XMIy%2BrLJ0ddpBA4MDBgcVgGtGxPlO3owHx6bkTrn00wKOTHHTpTk%2FBqn1YB4qLM5%2FgIn8amDz3zTmFQpCa9XfYNyoN4oHKdmRp8vSMgYUaX20C0YI48TfZYyUy%2FxR0U7DPeNB5d3N0REjg0p3RVieUwqWv3DYALhSFtU8J2%2BuZZ8AYS9X369GMlkblENnnicmk0PDUeHw38B9QwHe3RsQ8nn%2Fo7ZNcWmku0jiJCQ92R%2F2q2Y64EBOcRVwxfH3axfuI1Ck%2BoMwck2Oz8iYjh8S2vmeFY0g%2FGdycRqLB9ojzdWwBi9XgMj%2FUUOaio0vs4omrk3jRtc4JfOIcwbVLzJViiFKGSs%2BwzMrytAJbgdP0aTM3K4qYfYPGGyBvkfQJOfxN7stula66C86v%2BGYh1g5p1P6FrNqi3fxywdqoZlzIEf7F%2FUMF3FBXFp4UW%2Fflp5eRTcnEp7lPEIEs%2B%2FVjQ073fT1VnJuD25J34JRoRMMuhjMIGOqUBJZJturJWBUZEv1fOUnDblR%2FEMBOXnnHLVB5WJalHGIkNuPKIfWRWs3mxoCD4N4fA3kTu2sikISgB%2B281IzKLezrzq7YSRERuXTo4Bo5rB7aZ4XjhL12ob8zxUxH38DSVES3w0rZR9yf8Yrkr6xqHFJy2ykuH%2FcFp0ul9z2TRqXC1S1lkbrIOJ818E0qjtYvvuhq3jfWOTi19TD5bnPEpQyhBB1aR&X-Amz-Signature=2f64c793c7992e1cc823eea47e5f04eeacd848df3ec9bfcd2f7c9e947313277c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPLOR2C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqnCLoePDLBxiU62LdbH9dOM5ciwGQxcvhVIH0tq5aPAiEA898brTpS5Gh%2FU5dKH8xq0c9SZsILvRUEUyEopvTnkywq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH9z19aOFH9wxwSJzSrcA1hDpTw7MTmzCid2rLQ02i%2FHz42tghUDtOBZY94ievTIZuhPf5HuwpMntnFxbI%2FFKjkn8PJRC8FEoAMwlLm19aYM42xDG57HYqlNJ01D%2FTy7l9idAtwcUfOBvLsj8lL0VStPWjD8FoQ4aZCymsx45XMIy%2BrLJ0ddpBA4MDBgcVgGtGxPlO3owHx6bkTrn00wKOTHHTpTk%2FBqn1YB4qLM5%2FgIn8amDz3zTmFQpCa9XfYNyoN4oHKdmRp8vSMgYUaX20C0YI48TfZYyUy%2FxR0U7DPeNB5d3N0REjg0p3RVieUwqWv3DYALhSFtU8J2%2BuZZ8AYS9X369GMlkblENnnicmk0PDUeHw38B9QwHe3RsQ8nn%2Fo7ZNcWmku0jiJCQ92R%2F2q2Y64EBOcRVwxfH3axfuI1Ck%2BoMwck2Oz8iYjh8S2vmeFY0g%2FGdycRqLB9ojzdWwBi9XgMj%2FUUOaio0vs4omrk3jRtc4JfOIcwbVLzJViiFKGSs%2BwzMrytAJbgdP0aTM3K4qYfYPGGyBvkfQJOfxN7stula66C86v%2BGYh1g5p1P6FrNqi3fxywdqoZlzIEf7F%2FUMF3FBXFp4UW%2Fflp5eRTcnEp7lPEIEs%2B%2FVjQ073fT1VnJuD25J34JRoRMMuhjMIGOqUBJZJturJWBUZEv1fOUnDblR%2FEMBOXnnHLVB5WJalHGIkNuPKIfWRWs3mxoCD4N4fA3kTu2sikISgB%2B281IzKLezrzq7YSRERuXTo4Bo5rB7aZ4XjhL12ob8zxUxH38DSVES3w0rZR9yf8Yrkr6xqHFJy2ykuH%2FcFp0ul9z2TRqXC1S1lkbrIOJ818E0qjtYvvuhq3jfWOTi19TD5bnPEpQyhBB1aR&X-Amz-Signature=cd3c0b1c978ef143eddcfa071e185d50c94da00c8dab4a75e4de2f6ab34260d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

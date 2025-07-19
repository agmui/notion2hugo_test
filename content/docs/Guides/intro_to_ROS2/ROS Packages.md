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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OH2X26T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH%2FKzVji2h%2FY0qth%2BWTmiKhIWRVXldyCWM6yvA3dN%2F7AiEAqRvVNjkcGerBz2CwwlQ%2FjRuYfE6CH4LEoyJJ2%2FVEacwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRSlKV3k4%2BpyvmfryrcA7J3MkauS%2Byr49sio%2F5%2BlBFfCbR0JIJXaRHtdnKnV35J1G342cSt%2BhW2SFaCyPBvUOB4KII74uTbPp5hdA6RpBe86ta0oQ9jDoboRZ0L3WBxYMl71yeNUkdZNsVgmLiGsARBsp4mIYxKChmvRxMwbGEyGzEKzyCE7gnwXJjIz4WtpzcpSfwD1OWgTg0GAoLyALhXVEV6q%2B4toLrq07yrdDl%2Fc2nx2pnvTC39W%2BwpQz8zk0Rf0iZL1kr0xewRu4B%2FGdfuzMN%2BpJ9nrIcp3XHGfnv4NxFtfAwrOeGQ%2Bb%2FBKbPpbB04kXQHzHnpLJBmEi8fBqmKBXldbz43tEbSfj2LkznkRpdBIC8p9zIF6Fbu4AlQGyTeSLbukGLM2SkQvDfhkj0cbmLXCtT%2BOeyaw3%2BZPTcMj0OxQ1TFTZB6WGbgOjSoJzaQhb6ogaHFLRiVkXvd0f2betHG21mrzK57a%2BsL3U6DaLbEqit3wX5Cw8YCtT0rMJdeQp86oWE22Ntw1Au2XgURHwKKJvUEbxGqhYbKlYKbqimwGlOldwRvA%2Fk4Mx7CWCLtPel%2FpGUX1RZ3RWIby0CxxqsqjNTwiFankq7tjHOC91l3oFoJBk6VdyeZw1hNO9XcyTkMqsM6t5bJMPf178MGOqUBKzWBRDoddPXTa52FeEvtWtY4I1iuFGdh1Ku7VqO8X3hyMB5PuLvlgIdhAfWbLf3j6Glx7owqxGrmu6nZLbhmK3NE%2FXszUItrEcMkoR0ojfraDkU2AajoeaBg0v0r2LmaBnH9fNCQ5e5KG6Uy%2FR4KfS3m5JGFrXuomSJh9ZWSXbiK%2BqV8M31EHo6zqIq21OEk%2FCsLzK6%2FfKF1%2BYTcxnR9XcTQFZGI&X-Amz-Signature=b0228963446ee4e527d3f736465e69c2657bb1f61d27a1754a73ae907f7297df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OH2X26T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH%2FKzVji2h%2FY0qth%2BWTmiKhIWRVXldyCWM6yvA3dN%2F7AiEAqRvVNjkcGerBz2CwwlQ%2FjRuYfE6CH4LEoyJJ2%2FVEacwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRSlKV3k4%2BpyvmfryrcA7J3MkauS%2Byr49sio%2F5%2BlBFfCbR0JIJXaRHtdnKnV35J1G342cSt%2BhW2SFaCyPBvUOB4KII74uTbPp5hdA6RpBe86ta0oQ9jDoboRZ0L3WBxYMl71yeNUkdZNsVgmLiGsARBsp4mIYxKChmvRxMwbGEyGzEKzyCE7gnwXJjIz4WtpzcpSfwD1OWgTg0GAoLyALhXVEV6q%2B4toLrq07yrdDl%2Fc2nx2pnvTC39W%2BwpQz8zk0Rf0iZL1kr0xewRu4B%2FGdfuzMN%2BpJ9nrIcp3XHGfnv4NxFtfAwrOeGQ%2Bb%2FBKbPpbB04kXQHzHnpLJBmEi8fBqmKBXldbz43tEbSfj2LkznkRpdBIC8p9zIF6Fbu4AlQGyTeSLbukGLM2SkQvDfhkj0cbmLXCtT%2BOeyaw3%2BZPTcMj0OxQ1TFTZB6WGbgOjSoJzaQhb6ogaHFLRiVkXvd0f2betHG21mrzK57a%2BsL3U6DaLbEqit3wX5Cw8YCtT0rMJdeQp86oWE22Ntw1Au2XgURHwKKJvUEbxGqhYbKlYKbqimwGlOldwRvA%2Fk4Mx7CWCLtPel%2FpGUX1RZ3RWIby0CxxqsqjNTwiFankq7tjHOC91l3oFoJBk6VdyeZw1hNO9XcyTkMqsM6t5bJMPf178MGOqUBKzWBRDoddPXTa52FeEvtWtY4I1iuFGdh1Ku7VqO8X3hyMB5PuLvlgIdhAfWbLf3j6Glx7owqxGrmu6nZLbhmK3NE%2FXszUItrEcMkoR0ojfraDkU2AajoeaBg0v0r2LmaBnH9fNCQ5e5KG6Uy%2FR4KfS3m5JGFrXuomSJh9ZWSXbiK%2BqV8M31EHo6zqIq21OEk%2FCsLzK6%2FfKF1%2BYTcxnR9XcTQFZGI&X-Amz-Signature=9a219050c762dec9ca70389b5e2c35a5fb0c5a5d972904655ee3cac3cddff733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OH2X26T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH%2FKzVji2h%2FY0qth%2BWTmiKhIWRVXldyCWM6yvA3dN%2F7AiEAqRvVNjkcGerBz2CwwlQ%2FjRuYfE6CH4LEoyJJ2%2FVEacwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRSlKV3k4%2BpyvmfryrcA7J3MkauS%2Byr49sio%2F5%2BlBFfCbR0JIJXaRHtdnKnV35J1G342cSt%2BhW2SFaCyPBvUOB4KII74uTbPp5hdA6RpBe86ta0oQ9jDoboRZ0L3WBxYMl71yeNUkdZNsVgmLiGsARBsp4mIYxKChmvRxMwbGEyGzEKzyCE7gnwXJjIz4WtpzcpSfwD1OWgTg0GAoLyALhXVEV6q%2B4toLrq07yrdDl%2Fc2nx2pnvTC39W%2BwpQz8zk0Rf0iZL1kr0xewRu4B%2FGdfuzMN%2BpJ9nrIcp3XHGfnv4NxFtfAwrOeGQ%2Bb%2FBKbPpbB04kXQHzHnpLJBmEi8fBqmKBXldbz43tEbSfj2LkznkRpdBIC8p9zIF6Fbu4AlQGyTeSLbukGLM2SkQvDfhkj0cbmLXCtT%2BOeyaw3%2BZPTcMj0OxQ1TFTZB6WGbgOjSoJzaQhb6ogaHFLRiVkXvd0f2betHG21mrzK57a%2BsL3U6DaLbEqit3wX5Cw8YCtT0rMJdeQp86oWE22Ntw1Au2XgURHwKKJvUEbxGqhYbKlYKbqimwGlOldwRvA%2Fk4Mx7CWCLtPel%2FpGUX1RZ3RWIby0CxxqsqjNTwiFankq7tjHOC91l3oFoJBk6VdyeZw1hNO9XcyTkMqsM6t5bJMPf178MGOqUBKzWBRDoddPXTa52FeEvtWtY4I1iuFGdh1Ku7VqO8X3hyMB5PuLvlgIdhAfWbLf3j6Glx7owqxGrmu6nZLbhmK3NE%2FXszUItrEcMkoR0ojfraDkU2AajoeaBg0v0r2LmaBnH9fNCQ5e5KG6Uy%2FR4KfS3m5JGFrXuomSJh9ZWSXbiK%2BqV8M31EHo6zqIq21OEk%2FCsLzK6%2FfKF1%2BYTcxnR9XcTQFZGI&X-Amz-Signature=f4e9e1ddec29f791a3e9724a1bc98e8366c7eafadc07b99112de157b52c3f724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OH2X26T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH%2FKzVji2h%2FY0qth%2BWTmiKhIWRVXldyCWM6yvA3dN%2F7AiEAqRvVNjkcGerBz2CwwlQ%2FjRuYfE6CH4LEoyJJ2%2FVEacwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRSlKV3k4%2BpyvmfryrcA7J3MkauS%2Byr49sio%2F5%2BlBFfCbR0JIJXaRHtdnKnV35J1G342cSt%2BhW2SFaCyPBvUOB4KII74uTbPp5hdA6RpBe86ta0oQ9jDoboRZ0L3WBxYMl71yeNUkdZNsVgmLiGsARBsp4mIYxKChmvRxMwbGEyGzEKzyCE7gnwXJjIz4WtpzcpSfwD1OWgTg0GAoLyALhXVEV6q%2B4toLrq07yrdDl%2Fc2nx2pnvTC39W%2BwpQz8zk0Rf0iZL1kr0xewRu4B%2FGdfuzMN%2BpJ9nrIcp3XHGfnv4NxFtfAwrOeGQ%2Bb%2FBKbPpbB04kXQHzHnpLJBmEi8fBqmKBXldbz43tEbSfj2LkznkRpdBIC8p9zIF6Fbu4AlQGyTeSLbukGLM2SkQvDfhkj0cbmLXCtT%2BOeyaw3%2BZPTcMj0OxQ1TFTZB6WGbgOjSoJzaQhb6ogaHFLRiVkXvd0f2betHG21mrzK57a%2BsL3U6DaLbEqit3wX5Cw8YCtT0rMJdeQp86oWE22Ntw1Au2XgURHwKKJvUEbxGqhYbKlYKbqimwGlOldwRvA%2Fk4Mx7CWCLtPel%2FpGUX1RZ3RWIby0CxxqsqjNTwiFankq7tjHOC91l3oFoJBk6VdyeZw1hNO9XcyTkMqsM6t5bJMPf178MGOqUBKzWBRDoddPXTa52FeEvtWtY4I1iuFGdh1Ku7VqO8X3hyMB5PuLvlgIdhAfWbLf3j6Glx7owqxGrmu6nZLbhmK3NE%2FXszUItrEcMkoR0ojfraDkU2AajoeaBg0v0r2LmaBnH9fNCQ5e5KG6Uy%2FR4KfS3m5JGFrXuomSJh9ZWSXbiK%2BqV8M31EHo6zqIq21OEk%2FCsLzK6%2FfKF1%2BYTcxnR9XcTQFZGI&X-Amz-Signature=b15f444751fdb8bba72ea368e3d886f43034c3dacbb5264a6f06467c0bb75d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OH2X26T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH%2FKzVji2h%2FY0qth%2BWTmiKhIWRVXldyCWM6yvA3dN%2F7AiEAqRvVNjkcGerBz2CwwlQ%2FjRuYfE6CH4LEoyJJ2%2FVEacwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRSlKV3k4%2BpyvmfryrcA7J3MkauS%2Byr49sio%2F5%2BlBFfCbR0JIJXaRHtdnKnV35J1G342cSt%2BhW2SFaCyPBvUOB4KII74uTbPp5hdA6RpBe86ta0oQ9jDoboRZ0L3WBxYMl71yeNUkdZNsVgmLiGsARBsp4mIYxKChmvRxMwbGEyGzEKzyCE7gnwXJjIz4WtpzcpSfwD1OWgTg0GAoLyALhXVEV6q%2B4toLrq07yrdDl%2Fc2nx2pnvTC39W%2BwpQz8zk0Rf0iZL1kr0xewRu4B%2FGdfuzMN%2BpJ9nrIcp3XHGfnv4NxFtfAwrOeGQ%2Bb%2FBKbPpbB04kXQHzHnpLJBmEi8fBqmKBXldbz43tEbSfj2LkznkRpdBIC8p9zIF6Fbu4AlQGyTeSLbukGLM2SkQvDfhkj0cbmLXCtT%2BOeyaw3%2BZPTcMj0OxQ1TFTZB6WGbgOjSoJzaQhb6ogaHFLRiVkXvd0f2betHG21mrzK57a%2BsL3U6DaLbEqit3wX5Cw8YCtT0rMJdeQp86oWE22Ntw1Au2XgURHwKKJvUEbxGqhYbKlYKbqimwGlOldwRvA%2Fk4Mx7CWCLtPel%2FpGUX1RZ3RWIby0CxxqsqjNTwiFankq7tjHOC91l3oFoJBk6VdyeZw1hNO9XcyTkMqsM6t5bJMPf178MGOqUBKzWBRDoddPXTa52FeEvtWtY4I1iuFGdh1Ku7VqO8X3hyMB5PuLvlgIdhAfWbLf3j6Glx7owqxGrmu6nZLbhmK3NE%2FXszUItrEcMkoR0ojfraDkU2AajoeaBg0v0r2LmaBnH9fNCQ5e5KG6Uy%2FR4KfS3m5JGFrXuomSJh9ZWSXbiK%2BqV8M31EHo6zqIq21OEk%2FCsLzK6%2FfKF1%2BYTcxnR9XcTQFZGI&X-Amz-Signature=f6a9f3467787d60d01976addf79e83c7135aa6c00a338b5b2ad47826e9ff85d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OH2X26T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH%2FKzVji2h%2FY0qth%2BWTmiKhIWRVXldyCWM6yvA3dN%2F7AiEAqRvVNjkcGerBz2CwwlQ%2FjRuYfE6CH4LEoyJJ2%2FVEacwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRSlKV3k4%2BpyvmfryrcA7J3MkauS%2Byr49sio%2F5%2BlBFfCbR0JIJXaRHtdnKnV35J1G342cSt%2BhW2SFaCyPBvUOB4KII74uTbPp5hdA6RpBe86ta0oQ9jDoboRZ0L3WBxYMl71yeNUkdZNsVgmLiGsARBsp4mIYxKChmvRxMwbGEyGzEKzyCE7gnwXJjIz4WtpzcpSfwD1OWgTg0GAoLyALhXVEV6q%2B4toLrq07yrdDl%2Fc2nx2pnvTC39W%2BwpQz8zk0Rf0iZL1kr0xewRu4B%2FGdfuzMN%2BpJ9nrIcp3XHGfnv4NxFtfAwrOeGQ%2Bb%2FBKbPpbB04kXQHzHnpLJBmEi8fBqmKBXldbz43tEbSfj2LkznkRpdBIC8p9zIF6Fbu4AlQGyTeSLbukGLM2SkQvDfhkj0cbmLXCtT%2BOeyaw3%2BZPTcMj0OxQ1TFTZB6WGbgOjSoJzaQhb6ogaHFLRiVkXvd0f2betHG21mrzK57a%2BsL3U6DaLbEqit3wX5Cw8YCtT0rMJdeQp86oWE22Ntw1Au2XgURHwKKJvUEbxGqhYbKlYKbqimwGlOldwRvA%2Fk4Mx7CWCLtPel%2FpGUX1RZ3RWIby0CxxqsqjNTwiFankq7tjHOC91l3oFoJBk6VdyeZw1hNO9XcyTkMqsM6t5bJMPf178MGOqUBKzWBRDoddPXTa52FeEvtWtY4I1iuFGdh1Ku7VqO8X3hyMB5PuLvlgIdhAfWbLf3j6Glx7owqxGrmu6nZLbhmK3NE%2FXszUItrEcMkoR0ojfraDkU2AajoeaBg0v0r2LmaBnH9fNCQ5e5KG6Uy%2FR4KfS3m5JGFrXuomSJh9ZWSXbiK%2BqV8M31EHo6zqIq21OEk%2FCsLzK6%2FfKF1%2BYTcxnR9XcTQFZGI&X-Amz-Signature=7af1f40f82dcacd3d9a668612977ac2bba288910e441f31eec2d6c54908e9b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OH2X26T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH%2FKzVji2h%2FY0qth%2BWTmiKhIWRVXldyCWM6yvA3dN%2F7AiEAqRvVNjkcGerBz2CwwlQ%2FjRuYfE6CH4LEoyJJ2%2FVEacwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRSlKV3k4%2BpyvmfryrcA7J3MkauS%2Byr49sio%2F5%2BlBFfCbR0JIJXaRHtdnKnV35J1G342cSt%2BhW2SFaCyPBvUOB4KII74uTbPp5hdA6RpBe86ta0oQ9jDoboRZ0L3WBxYMl71yeNUkdZNsVgmLiGsARBsp4mIYxKChmvRxMwbGEyGzEKzyCE7gnwXJjIz4WtpzcpSfwD1OWgTg0GAoLyALhXVEV6q%2B4toLrq07yrdDl%2Fc2nx2pnvTC39W%2BwpQz8zk0Rf0iZL1kr0xewRu4B%2FGdfuzMN%2BpJ9nrIcp3XHGfnv4NxFtfAwrOeGQ%2Bb%2FBKbPpbB04kXQHzHnpLJBmEi8fBqmKBXldbz43tEbSfj2LkznkRpdBIC8p9zIF6Fbu4AlQGyTeSLbukGLM2SkQvDfhkj0cbmLXCtT%2BOeyaw3%2BZPTcMj0OxQ1TFTZB6WGbgOjSoJzaQhb6ogaHFLRiVkXvd0f2betHG21mrzK57a%2BsL3U6DaLbEqit3wX5Cw8YCtT0rMJdeQp86oWE22Ntw1Au2XgURHwKKJvUEbxGqhYbKlYKbqimwGlOldwRvA%2Fk4Mx7CWCLtPel%2FpGUX1RZ3RWIby0CxxqsqjNTwiFankq7tjHOC91l3oFoJBk6VdyeZw1hNO9XcyTkMqsM6t5bJMPf178MGOqUBKzWBRDoddPXTa52FeEvtWtY4I1iuFGdh1Ku7VqO8X3hyMB5PuLvlgIdhAfWbLf3j6Glx7owqxGrmu6nZLbhmK3NE%2FXszUItrEcMkoR0ojfraDkU2AajoeaBg0v0r2LmaBnH9fNCQ5e5KG6Uy%2FR4KfS3m5JGFrXuomSJh9ZWSXbiK%2BqV8M31EHo6zqIq21OEk%2FCsLzK6%2FfKF1%2BYTcxnR9XcTQFZGI&X-Amz-Signature=a0659c9ce1c47f0a6126969bf36809a9e3e71e7ceac717facd945dd953fd839e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

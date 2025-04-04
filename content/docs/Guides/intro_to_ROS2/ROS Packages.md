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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTVVA62%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfivszeQ7Qu7ExIF0tXfdaHa58mxRAiAhTBk49iJXpAAIgFr2Ts6YQWfr5zXvA0pU7dG7Ylgk45rDP%2BdtdRoij0wMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIXzGbrXSYPoScEISrcAwnQ9hvlbDOE2zj%2BBRH%2BgJksVqC4KBdFa6ZHcP2X4AlYOgmlqYwS4QXo5gZx3gTa7e2eNjcnOLTdUIkUDz4bXifM0EJgLPwGDgTXQGw%2B2Jhxj81O3y1GoZ9N3pzg8cnDq%2BsKTWCRHbzmaXK0eMyNWeffft0pEtsAD7bqKRecqfe5jfGvDbRXmoyF9SAm4GFhRp%2BZTvttRM%2FC4R9a%2BDOn%2FqXpE8srD%2FVal9IRIrHShiPQKS3ewRx%2FWUIQY2QLcib4sfi8jjFQyAfAbm7bGDiYLpXvlG9srSPf8yVbrxnu%2B%2Bujf6cXHbUspSFAPuAebr0fcF0zjLPLEF2gYOvhHdTZ9gS%2FsGWV3QhsiMQoYqOUFS1qKElUH6DoeV63e9mUkfUiWRNJayoTZuQmLsbSt894BRiMbUBDCP0Cw9nxHaasTiJbzUpl2nkykAnGjr%2Frio2icnJoNE0VLcLqK7h1eIqfTb0lZvw%2FDfjDAJ01r7ew15LUnRlOWcIpzZYZbHq%2FRSl80UBEal0vu8gdgf%2B1I1EG5GeNKcGsm7d7bd54S%2B02vtgIy3NwN%2Bbs5QHddlrY1nj%2Fe3Y2%2FcHb6SSTtAD6f4kCMkHxxqhEVI25aS7N8IfLVXnH6ay%2FZ4qdOvtatN7GMIStvb8GOqUB3z1TXGfsRx%2Bh2FF%2BBLQ7jLBZ8X6GGNF%2FbO52AHxjKBdUnJnioH1QW3odoR4CYitPquf%2FZQC1qxcc2JPBVCucL7ZkJucT4XA3OxsS0WAld3Ftq%2B%2FxAxU81zCzmaWjIW3luF%2FdGOOk19%2B5g2egx46rnO2ouTyCMtP8Yg44IzMMtqu1kFw%2BjjOBrkQzMh3wD4VuaUsRhFlYaKaIpq1HRQRmds1kb0Z6&X-Amz-Signature=2cc180f2129a1c3e2ee4c3ee9879f558f8b9a3831dc885fe8ef26cf90a6f26d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTVVA62%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfivszeQ7Qu7ExIF0tXfdaHa58mxRAiAhTBk49iJXpAAIgFr2Ts6YQWfr5zXvA0pU7dG7Ylgk45rDP%2BdtdRoij0wMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIXzGbrXSYPoScEISrcAwnQ9hvlbDOE2zj%2BBRH%2BgJksVqC4KBdFa6ZHcP2X4AlYOgmlqYwS4QXo5gZx3gTa7e2eNjcnOLTdUIkUDz4bXifM0EJgLPwGDgTXQGw%2B2Jhxj81O3y1GoZ9N3pzg8cnDq%2BsKTWCRHbzmaXK0eMyNWeffft0pEtsAD7bqKRecqfe5jfGvDbRXmoyF9SAm4GFhRp%2BZTvttRM%2FC4R9a%2BDOn%2FqXpE8srD%2FVal9IRIrHShiPQKS3ewRx%2FWUIQY2QLcib4sfi8jjFQyAfAbm7bGDiYLpXvlG9srSPf8yVbrxnu%2B%2Bujf6cXHbUspSFAPuAebr0fcF0zjLPLEF2gYOvhHdTZ9gS%2FsGWV3QhsiMQoYqOUFS1qKElUH6DoeV63e9mUkfUiWRNJayoTZuQmLsbSt894BRiMbUBDCP0Cw9nxHaasTiJbzUpl2nkykAnGjr%2Frio2icnJoNE0VLcLqK7h1eIqfTb0lZvw%2FDfjDAJ01r7ew15LUnRlOWcIpzZYZbHq%2FRSl80UBEal0vu8gdgf%2B1I1EG5GeNKcGsm7d7bd54S%2B02vtgIy3NwN%2Bbs5QHddlrY1nj%2Fe3Y2%2FcHb6SSTtAD6f4kCMkHxxqhEVI25aS7N8IfLVXnH6ay%2FZ4qdOvtatN7GMIStvb8GOqUB3z1TXGfsRx%2Bh2FF%2BBLQ7jLBZ8X6GGNF%2FbO52AHxjKBdUnJnioH1QW3odoR4CYitPquf%2FZQC1qxcc2JPBVCucL7ZkJucT4XA3OxsS0WAld3Ftq%2B%2FxAxU81zCzmaWjIW3luF%2FdGOOk19%2B5g2egx46rnO2ouTyCMtP8Yg44IzMMtqu1kFw%2BjjOBrkQzMh3wD4VuaUsRhFlYaKaIpq1HRQRmds1kb0Z6&X-Amz-Signature=4e20ceb228e9f70f90d79f4a1e776fbd68d7c2b3f973cc70283dc1f8a388a96a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTVVA62%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfivszeQ7Qu7ExIF0tXfdaHa58mxRAiAhTBk49iJXpAAIgFr2Ts6YQWfr5zXvA0pU7dG7Ylgk45rDP%2BdtdRoij0wMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIXzGbrXSYPoScEISrcAwnQ9hvlbDOE2zj%2BBRH%2BgJksVqC4KBdFa6ZHcP2X4AlYOgmlqYwS4QXo5gZx3gTa7e2eNjcnOLTdUIkUDz4bXifM0EJgLPwGDgTXQGw%2B2Jhxj81O3y1GoZ9N3pzg8cnDq%2BsKTWCRHbzmaXK0eMyNWeffft0pEtsAD7bqKRecqfe5jfGvDbRXmoyF9SAm4GFhRp%2BZTvttRM%2FC4R9a%2BDOn%2FqXpE8srD%2FVal9IRIrHShiPQKS3ewRx%2FWUIQY2QLcib4sfi8jjFQyAfAbm7bGDiYLpXvlG9srSPf8yVbrxnu%2B%2Bujf6cXHbUspSFAPuAebr0fcF0zjLPLEF2gYOvhHdTZ9gS%2FsGWV3QhsiMQoYqOUFS1qKElUH6DoeV63e9mUkfUiWRNJayoTZuQmLsbSt894BRiMbUBDCP0Cw9nxHaasTiJbzUpl2nkykAnGjr%2Frio2icnJoNE0VLcLqK7h1eIqfTb0lZvw%2FDfjDAJ01r7ew15LUnRlOWcIpzZYZbHq%2FRSl80UBEal0vu8gdgf%2B1I1EG5GeNKcGsm7d7bd54S%2B02vtgIy3NwN%2Bbs5QHddlrY1nj%2Fe3Y2%2FcHb6SSTtAD6f4kCMkHxxqhEVI25aS7N8IfLVXnH6ay%2FZ4qdOvtatN7GMIStvb8GOqUB3z1TXGfsRx%2Bh2FF%2BBLQ7jLBZ8X6GGNF%2FbO52AHxjKBdUnJnioH1QW3odoR4CYitPquf%2FZQC1qxcc2JPBVCucL7ZkJucT4XA3OxsS0WAld3Ftq%2B%2FxAxU81zCzmaWjIW3luF%2FdGOOk19%2B5g2egx46rnO2ouTyCMtP8Yg44IzMMtqu1kFw%2BjjOBrkQzMh3wD4VuaUsRhFlYaKaIpq1HRQRmds1kb0Z6&X-Amz-Signature=4c23203e95cce1a292afc2515d9c351c78789ea21bfc4c7e3167f3a66e4938db&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTVVA62%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfivszeQ7Qu7ExIF0tXfdaHa58mxRAiAhTBk49iJXpAAIgFr2Ts6YQWfr5zXvA0pU7dG7Ylgk45rDP%2BdtdRoij0wMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIXzGbrXSYPoScEISrcAwnQ9hvlbDOE2zj%2BBRH%2BgJksVqC4KBdFa6ZHcP2X4AlYOgmlqYwS4QXo5gZx3gTa7e2eNjcnOLTdUIkUDz4bXifM0EJgLPwGDgTXQGw%2B2Jhxj81O3y1GoZ9N3pzg8cnDq%2BsKTWCRHbzmaXK0eMyNWeffft0pEtsAD7bqKRecqfe5jfGvDbRXmoyF9SAm4GFhRp%2BZTvttRM%2FC4R9a%2BDOn%2FqXpE8srD%2FVal9IRIrHShiPQKS3ewRx%2FWUIQY2QLcib4sfi8jjFQyAfAbm7bGDiYLpXvlG9srSPf8yVbrxnu%2B%2Bujf6cXHbUspSFAPuAebr0fcF0zjLPLEF2gYOvhHdTZ9gS%2FsGWV3QhsiMQoYqOUFS1qKElUH6DoeV63e9mUkfUiWRNJayoTZuQmLsbSt894BRiMbUBDCP0Cw9nxHaasTiJbzUpl2nkykAnGjr%2Frio2icnJoNE0VLcLqK7h1eIqfTb0lZvw%2FDfjDAJ01r7ew15LUnRlOWcIpzZYZbHq%2FRSl80UBEal0vu8gdgf%2B1I1EG5GeNKcGsm7d7bd54S%2B02vtgIy3NwN%2Bbs5QHddlrY1nj%2Fe3Y2%2FcHb6SSTtAD6f4kCMkHxxqhEVI25aS7N8IfLVXnH6ay%2FZ4qdOvtatN7GMIStvb8GOqUB3z1TXGfsRx%2Bh2FF%2BBLQ7jLBZ8X6GGNF%2FbO52AHxjKBdUnJnioH1QW3odoR4CYitPquf%2FZQC1qxcc2JPBVCucL7ZkJucT4XA3OxsS0WAld3Ftq%2B%2FxAxU81zCzmaWjIW3luF%2FdGOOk19%2B5g2egx46rnO2ouTyCMtP8Yg44IzMMtqu1kFw%2BjjOBrkQzMh3wD4VuaUsRhFlYaKaIpq1HRQRmds1kb0Z6&X-Amz-Signature=97d39e920f7eefddc32da60a582d0e5feca31b70e6e36206ef698af5c6c02897&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTVVA62%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfivszeQ7Qu7ExIF0tXfdaHa58mxRAiAhTBk49iJXpAAIgFr2Ts6YQWfr5zXvA0pU7dG7Ylgk45rDP%2BdtdRoij0wMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIXzGbrXSYPoScEISrcAwnQ9hvlbDOE2zj%2BBRH%2BgJksVqC4KBdFa6ZHcP2X4AlYOgmlqYwS4QXo5gZx3gTa7e2eNjcnOLTdUIkUDz4bXifM0EJgLPwGDgTXQGw%2B2Jhxj81O3y1GoZ9N3pzg8cnDq%2BsKTWCRHbzmaXK0eMyNWeffft0pEtsAD7bqKRecqfe5jfGvDbRXmoyF9SAm4GFhRp%2BZTvttRM%2FC4R9a%2BDOn%2FqXpE8srD%2FVal9IRIrHShiPQKS3ewRx%2FWUIQY2QLcib4sfi8jjFQyAfAbm7bGDiYLpXvlG9srSPf8yVbrxnu%2B%2Bujf6cXHbUspSFAPuAebr0fcF0zjLPLEF2gYOvhHdTZ9gS%2FsGWV3QhsiMQoYqOUFS1qKElUH6DoeV63e9mUkfUiWRNJayoTZuQmLsbSt894BRiMbUBDCP0Cw9nxHaasTiJbzUpl2nkykAnGjr%2Frio2icnJoNE0VLcLqK7h1eIqfTb0lZvw%2FDfjDAJ01r7ew15LUnRlOWcIpzZYZbHq%2FRSl80UBEal0vu8gdgf%2B1I1EG5GeNKcGsm7d7bd54S%2B02vtgIy3NwN%2Bbs5QHddlrY1nj%2Fe3Y2%2FcHb6SSTtAD6f4kCMkHxxqhEVI25aS7N8IfLVXnH6ay%2FZ4qdOvtatN7GMIStvb8GOqUB3z1TXGfsRx%2Bh2FF%2BBLQ7jLBZ8X6GGNF%2FbO52AHxjKBdUnJnioH1QW3odoR4CYitPquf%2FZQC1qxcc2JPBVCucL7ZkJucT4XA3OxsS0WAld3Ftq%2B%2FxAxU81zCzmaWjIW3luF%2FdGOOk19%2B5g2egx46rnO2ouTyCMtP8Yg44IzMMtqu1kFw%2BjjOBrkQzMh3wD4VuaUsRhFlYaKaIpq1HRQRmds1kb0Z6&X-Amz-Signature=1b2738a5fea43b70f2a22e5e91c4536bb64cb141c61d6d6b67d9403b026b03d3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTVVA62%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfivszeQ7Qu7ExIF0tXfdaHa58mxRAiAhTBk49iJXpAAIgFr2Ts6YQWfr5zXvA0pU7dG7Ylgk45rDP%2BdtdRoij0wMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIXzGbrXSYPoScEISrcAwnQ9hvlbDOE2zj%2BBRH%2BgJksVqC4KBdFa6ZHcP2X4AlYOgmlqYwS4QXo5gZx3gTa7e2eNjcnOLTdUIkUDz4bXifM0EJgLPwGDgTXQGw%2B2Jhxj81O3y1GoZ9N3pzg8cnDq%2BsKTWCRHbzmaXK0eMyNWeffft0pEtsAD7bqKRecqfe5jfGvDbRXmoyF9SAm4GFhRp%2BZTvttRM%2FC4R9a%2BDOn%2FqXpE8srD%2FVal9IRIrHShiPQKS3ewRx%2FWUIQY2QLcib4sfi8jjFQyAfAbm7bGDiYLpXvlG9srSPf8yVbrxnu%2B%2Bujf6cXHbUspSFAPuAebr0fcF0zjLPLEF2gYOvhHdTZ9gS%2FsGWV3QhsiMQoYqOUFS1qKElUH6DoeV63e9mUkfUiWRNJayoTZuQmLsbSt894BRiMbUBDCP0Cw9nxHaasTiJbzUpl2nkykAnGjr%2Frio2icnJoNE0VLcLqK7h1eIqfTb0lZvw%2FDfjDAJ01r7ew15LUnRlOWcIpzZYZbHq%2FRSl80UBEal0vu8gdgf%2B1I1EG5GeNKcGsm7d7bd54S%2B02vtgIy3NwN%2Bbs5QHddlrY1nj%2Fe3Y2%2FcHb6SSTtAD6f4kCMkHxxqhEVI25aS7N8IfLVXnH6ay%2FZ4qdOvtatN7GMIStvb8GOqUB3z1TXGfsRx%2Bh2FF%2BBLQ7jLBZ8X6GGNF%2FbO52AHxjKBdUnJnioH1QW3odoR4CYitPquf%2FZQC1qxcc2JPBVCucL7ZkJucT4XA3OxsS0WAld3Ftq%2B%2FxAxU81zCzmaWjIW3luF%2FdGOOk19%2B5g2egx46rnO2ouTyCMtP8Yg44IzMMtqu1kFw%2BjjOBrkQzMh3wD4VuaUsRhFlYaKaIpq1HRQRmds1kb0Z6&X-Amz-Signature=ed5281af526e9806e6ac5d36b6d9b81dbfe0f02d414713483d9ac32fd7e8d0d4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTVVA62%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfivszeQ7Qu7ExIF0tXfdaHa58mxRAiAhTBk49iJXpAAIgFr2Ts6YQWfr5zXvA0pU7dG7Ylgk45rDP%2BdtdRoij0wMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIXzGbrXSYPoScEISrcAwnQ9hvlbDOE2zj%2BBRH%2BgJksVqC4KBdFa6ZHcP2X4AlYOgmlqYwS4QXo5gZx3gTa7e2eNjcnOLTdUIkUDz4bXifM0EJgLPwGDgTXQGw%2B2Jhxj81O3y1GoZ9N3pzg8cnDq%2BsKTWCRHbzmaXK0eMyNWeffft0pEtsAD7bqKRecqfe5jfGvDbRXmoyF9SAm4GFhRp%2BZTvttRM%2FC4R9a%2BDOn%2FqXpE8srD%2FVal9IRIrHShiPQKS3ewRx%2FWUIQY2QLcib4sfi8jjFQyAfAbm7bGDiYLpXvlG9srSPf8yVbrxnu%2B%2Bujf6cXHbUspSFAPuAebr0fcF0zjLPLEF2gYOvhHdTZ9gS%2FsGWV3QhsiMQoYqOUFS1qKElUH6DoeV63e9mUkfUiWRNJayoTZuQmLsbSt894BRiMbUBDCP0Cw9nxHaasTiJbzUpl2nkykAnGjr%2Frio2icnJoNE0VLcLqK7h1eIqfTb0lZvw%2FDfjDAJ01r7ew15LUnRlOWcIpzZYZbHq%2FRSl80UBEal0vu8gdgf%2B1I1EG5GeNKcGsm7d7bd54S%2B02vtgIy3NwN%2Bbs5QHddlrY1nj%2Fe3Y2%2FcHb6SSTtAD6f4kCMkHxxqhEVI25aS7N8IfLVXnH6ay%2FZ4qdOvtatN7GMIStvb8GOqUB3z1TXGfsRx%2Bh2FF%2BBLQ7jLBZ8X6GGNF%2FbO52AHxjKBdUnJnioH1QW3odoR4CYitPquf%2FZQC1qxcc2JPBVCucL7ZkJucT4XA3OxsS0WAld3Ftq%2B%2FxAxU81zCzmaWjIW3luF%2FdGOOk19%2B5g2egx46rnO2ouTyCMtP8Yg44IzMMtqu1kFw%2BjjOBrkQzMh3wD4VuaUsRhFlYaKaIpq1HRQRmds1kb0Z6&X-Amz-Signature=60b5d371eefc2fbf3a9f09849789bdb5c2ffe66a57f96277961b421799e75369&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

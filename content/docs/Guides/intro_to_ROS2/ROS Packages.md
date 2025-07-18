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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG2KUDNM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEC6Zptiq1PDxUghK0BclwR7%2BrMUGCrSc1kk9d78HmqvAiEA9AtPbVz87806ktTeuqtC%2BeqQR%2BseBCtJbpnl6nxg6%2FMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmLOFUQWPwXC3DelircAxUyl6PDu2R%2FMRZJ4sf93%2FaENVTv7pHAXkHFpAc7aOjvIUTc1UvC6GGgDwiSzTDQvc54Mj%2B68cBN%2BflOyJo1Unp3S25n1cU2bRn6lGE1qFStbdxfDYSfTpY1UP9SDH%2Fi9ig40CXhfTSrJIgbK24YkOAGx1N%2FNpOQ2qrA0QW3ihHBViZB9ajwmyHWNU6AEzXaJtsTJxOlD5JYmxKUtkE8AqqYDqAuaLPr6RpI7msKNtPf7qUj4NwaarevXrJ4jaPQg9Tx%2FpdXS3hyNsOR858ssfcPXN1ofSIWquJE%2FLwq%2BhI%2BVyirGWtRA5MZUiBpwJ42VjR7SAbw32apKjk9jcGKkKbxKeAx9fElLTLtqDiw9kpjwcQmfYkc%2FAD1WJYv0qSOnVHYVVNQ5Hv6AFoDxWK%2Fwz3p5IbftK4z3xAEgUGIWq9wcE9beELXRiD5N5y2PMcMaYB7aChOKsKZxok6Zggo%2FK8C5B0iRD7Ksy14rIkFBERnKKX6pjn8QXYflmWES24NZ%2Fzdgnlh8p5hOZe%2Bz4a1a05G5Ho7RiH6ZxsLdKiH%2FIL4ApPCp%2F3Dhw9Y11adiU%2Ftub0SP7RzDuM5qR9Y6lER4rWUb1MemaZFxa09Q88U9noOopTGYFRxt%2BbNiXXiMILr6cMGOqUBwCbuff3GAoxCRp7HSsr7xlaaaVh4qdkSSFC%2FR42MWKrhSLdsCncbnpOzqXWU%2B%2ByYh0VMuh%2FAG8%2FKLuPWpMMX74gz1n1FJaHNcN%2BwxNLq2JAFGftWl48VwqI19W63Tf374mlFTemMkaFswJqq5ic%2FsVRl4udiQ8qIY26nijfHDvXkBucgBgBQqy1VJ1y5uTuSwf3LAqb8t2tOC02tYbF4mB8RaJya&X-Amz-Signature=f703d07c15e5b2b6b5a4edf8f17074f1c5e8881415aad7df7fa97510a1ba1b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG2KUDNM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEC6Zptiq1PDxUghK0BclwR7%2BrMUGCrSc1kk9d78HmqvAiEA9AtPbVz87806ktTeuqtC%2BeqQR%2BseBCtJbpnl6nxg6%2FMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmLOFUQWPwXC3DelircAxUyl6PDu2R%2FMRZJ4sf93%2FaENVTv7pHAXkHFpAc7aOjvIUTc1UvC6GGgDwiSzTDQvc54Mj%2B68cBN%2BflOyJo1Unp3S25n1cU2bRn6lGE1qFStbdxfDYSfTpY1UP9SDH%2Fi9ig40CXhfTSrJIgbK24YkOAGx1N%2FNpOQ2qrA0QW3ihHBViZB9ajwmyHWNU6AEzXaJtsTJxOlD5JYmxKUtkE8AqqYDqAuaLPr6RpI7msKNtPf7qUj4NwaarevXrJ4jaPQg9Tx%2FpdXS3hyNsOR858ssfcPXN1ofSIWquJE%2FLwq%2BhI%2BVyirGWtRA5MZUiBpwJ42VjR7SAbw32apKjk9jcGKkKbxKeAx9fElLTLtqDiw9kpjwcQmfYkc%2FAD1WJYv0qSOnVHYVVNQ5Hv6AFoDxWK%2Fwz3p5IbftK4z3xAEgUGIWq9wcE9beELXRiD5N5y2PMcMaYB7aChOKsKZxok6Zggo%2FK8C5B0iRD7Ksy14rIkFBERnKKX6pjn8QXYflmWES24NZ%2Fzdgnlh8p5hOZe%2Bz4a1a05G5Ho7RiH6ZxsLdKiH%2FIL4ApPCp%2F3Dhw9Y11adiU%2Ftub0SP7RzDuM5qR9Y6lER4rWUb1MemaZFxa09Q88U9noOopTGYFRxt%2BbNiXXiMILr6cMGOqUBwCbuff3GAoxCRp7HSsr7xlaaaVh4qdkSSFC%2FR42MWKrhSLdsCncbnpOzqXWU%2B%2ByYh0VMuh%2FAG8%2FKLuPWpMMX74gz1n1FJaHNcN%2BwxNLq2JAFGftWl48VwqI19W63Tf374mlFTemMkaFswJqq5ic%2FsVRl4udiQ8qIY26nijfHDvXkBucgBgBQqy1VJ1y5uTuSwf3LAqb8t2tOC02tYbF4mB8RaJya&X-Amz-Signature=26c7f635bdc099e0738f0dd9230d655dafe5540a9ff83618e10bb60522ddb83b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG2KUDNM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEC6Zptiq1PDxUghK0BclwR7%2BrMUGCrSc1kk9d78HmqvAiEA9AtPbVz87806ktTeuqtC%2BeqQR%2BseBCtJbpnl6nxg6%2FMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmLOFUQWPwXC3DelircAxUyl6PDu2R%2FMRZJ4sf93%2FaENVTv7pHAXkHFpAc7aOjvIUTc1UvC6GGgDwiSzTDQvc54Mj%2B68cBN%2BflOyJo1Unp3S25n1cU2bRn6lGE1qFStbdxfDYSfTpY1UP9SDH%2Fi9ig40CXhfTSrJIgbK24YkOAGx1N%2FNpOQ2qrA0QW3ihHBViZB9ajwmyHWNU6AEzXaJtsTJxOlD5JYmxKUtkE8AqqYDqAuaLPr6RpI7msKNtPf7qUj4NwaarevXrJ4jaPQg9Tx%2FpdXS3hyNsOR858ssfcPXN1ofSIWquJE%2FLwq%2BhI%2BVyirGWtRA5MZUiBpwJ42VjR7SAbw32apKjk9jcGKkKbxKeAx9fElLTLtqDiw9kpjwcQmfYkc%2FAD1WJYv0qSOnVHYVVNQ5Hv6AFoDxWK%2Fwz3p5IbftK4z3xAEgUGIWq9wcE9beELXRiD5N5y2PMcMaYB7aChOKsKZxok6Zggo%2FK8C5B0iRD7Ksy14rIkFBERnKKX6pjn8QXYflmWES24NZ%2Fzdgnlh8p5hOZe%2Bz4a1a05G5Ho7RiH6ZxsLdKiH%2FIL4ApPCp%2F3Dhw9Y11adiU%2Ftub0SP7RzDuM5qR9Y6lER4rWUb1MemaZFxa09Q88U9noOopTGYFRxt%2BbNiXXiMILr6cMGOqUBwCbuff3GAoxCRp7HSsr7xlaaaVh4qdkSSFC%2FR42MWKrhSLdsCncbnpOzqXWU%2B%2ByYh0VMuh%2FAG8%2FKLuPWpMMX74gz1n1FJaHNcN%2BwxNLq2JAFGftWl48VwqI19W63Tf374mlFTemMkaFswJqq5ic%2FsVRl4udiQ8qIY26nijfHDvXkBucgBgBQqy1VJ1y5uTuSwf3LAqb8t2tOC02tYbF4mB8RaJya&X-Amz-Signature=5ec0f61d93178e39f243a958f6a76783484ea1b596ee80b3e4781ec923006bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG2KUDNM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEC6Zptiq1PDxUghK0BclwR7%2BrMUGCrSc1kk9d78HmqvAiEA9AtPbVz87806ktTeuqtC%2BeqQR%2BseBCtJbpnl6nxg6%2FMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmLOFUQWPwXC3DelircAxUyl6PDu2R%2FMRZJ4sf93%2FaENVTv7pHAXkHFpAc7aOjvIUTc1UvC6GGgDwiSzTDQvc54Mj%2B68cBN%2BflOyJo1Unp3S25n1cU2bRn6lGE1qFStbdxfDYSfTpY1UP9SDH%2Fi9ig40CXhfTSrJIgbK24YkOAGx1N%2FNpOQ2qrA0QW3ihHBViZB9ajwmyHWNU6AEzXaJtsTJxOlD5JYmxKUtkE8AqqYDqAuaLPr6RpI7msKNtPf7qUj4NwaarevXrJ4jaPQg9Tx%2FpdXS3hyNsOR858ssfcPXN1ofSIWquJE%2FLwq%2BhI%2BVyirGWtRA5MZUiBpwJ42VjR7SAbw32apKjk9jcGKkKbxKeAx9fElLTLtqDiw9kpjwcQmfYkc%2FAD1WJYv0qSOnVHYVVNQ5Hv6AFoDxWK%2Fwz3p5IbftK4z3xAEgUGIWq9wcE9beELXRiD5N5y2PMcMaYB7aChOKsKZxok6Zggo%2FK8C5B0iRD7Ksy14rIkFBERnKKX6pjn8QXYflmWES24NZ%2Fzdgnlh8p5hOZe%2Bz4a1a05G5Ho7RiH6ZxsLdKiH%2FIL4ApPCp%2F3Dhw9Y11adiU%2Ftub0SP7RzDuM5qR9Y6lER4rWUb1MemaZFxa09Q88U9noOopTGYFRxt%2BbNiXXiMILr6cMGOqUBwCbuff3GAoxCRp7HSsr7xlaaaVh4qdkSSFC%2FR42MWKrhSLdsCncbnpOzqXWU%2B%2ByYh0VMuh%2FAG8%2FKLuPWpMMX74gz1n1FJaHNcN%2BwxNLq2JAFGftWl48VwqI19W63Tf374mlFTemMkaFswJqq5ic%2FsVRl4udiQ8qIY26nijfHDvXkBucgBgBQqy1VJ1y5uTuSwf3LAqb8t2tOC02tYbF4mB8RaJya&X-Amz-Signature=4f0d3052be694ba73e790b9c53a8d8244ed05927769ede39b65fe2481bbd156c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG2KUDNM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEC6Zptiq1PDxUghK0BclwR7%2BrMUGCrSc1kk9d78HmqvAiEA9AtPbVz87806ktTeuqtC%2BeqQR%2BseBCtJbpnl6nxg6%2FMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmLOFUQWPwXC3DelircAxUyl6PDu2R%2FMRZJ4sf93%2FaENVTv7pHAXkHFpAc7aOjvIUTc1UvC6GGgDwiSzTDQvc54Mj%2B68cBN%2BflOyJo1Unp3S25n1cU2bRn6lGE1qFStbdxfDYSfTpY1UP9SDH%2Fi9ig40CXhfTSrJIgbK24YkOAGx1N%2FNpOQ2qrA0QW3ihHBViZB9ajwmyHWNU6AEzXaJtsTJxOlD5JYmxKUtkE8AqqYDqAuaLPr6RpI7msKNtPf7qUj4NwaarevXrJ4jaPQg9Tx%2FpdXS3hyNsOR858ssfcPXN1ofSIWquJE%2FLwq%2BhI%2BVyirGWtRA5MZUiBpwJ42VjR7SAbw32apKjk9jcGKkKbxKeAx9fElLTLtqDiw9kpjwcQmfYkc%2FAD1WJYv0qSOnVHYVVNQ5Hv6AFoDxWK%2Fwz3p5IbftK4z3xAEgUGIWq9wcE9beELXRiD5N5y2PMcMaYB7aChOKsKZxok6Zggo%2FK8C5B0iRD7Ksy14rIkFBERnKKX6pjn8QXYflmWES24NZ%2Fzdgnlh8p5hOZe%2Bz4a1a05G5Ho7RiH6ZxsLdKiH%2FIL4ApPCp%2F3Dhw9Y11adiU%2Ftub0SP7RzDuM5qR9Y6lER4rWUb1MemaZFxa09Q88U9noOopTGYFRxt%2BbNiXXiMILr6cMGOqUBwCbuff3GAoxCRp7HSsr7xlaaaVh4qdkSSFC%2FR42MWKrhSLdsCncbnpOzqXWU%2B%2ByYh0VMuh%2FAG8%2FKLuPWpMMX74gz1n1FJaHNcN%2BwxNLq2JAFGftWl48VwqI19W63Tf374mlFTemMkaFswJqq5ic%2FsVRl4udiQ8qIY26nijfHDvXkBucgBgBQqy1VJ1y5uTuSwf3LAqb8t2tOC02tYbF4mB8RaJya&X-Amz-Signature=422310e1d2aaed1e13a8690ffac3b340c41e9ccf64ed3d581e48acc175a2eefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG2KUDNM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEC6Zptiq1PDxUghK0BclwR7%2BrMUGCrSc1kk9d78HmqvAiEA9AtPbVz87806ktTeuqtC%2BeqQR%2BseBCtJbpnl6nxg6%2FMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmLOFUQWPwXC3DelircAxUyl6PDu2R%2FMRZJ4sf93%2FaENVTv7pHAXkHFpAc7aOjvIUTc1UvC6GGgDwiSzTDQvc54Mj%2B68cBN%2BflOyJo1Unp3S25n1cU2bRn6lGE1qFStbdxfDYSfTpY1UP9SDH%2Fi9ig40CXhfTSrJIgbK24YkOAGx1N%2FNpOQ2qrA0QW3ihHBViZB9ajwmyHWNU6AEzXaJtsTJxOlD5JYmxKUtkE8AqqYDqAuaLPr6RpI7msKNtPf7qUj4NwaarevXrJ4jaPQg9Tx%2FpdXS3hyNsOR858ssfcPXN1ofSIWquJE%2FLwq%2BhI%2BVyirGWtRA5MZUiBpwJ42VjR7SAbw32apKjk9jcGKkKbxKeAx9fElLTLtqDiw9kpjwcQmfYkc%2FAD1WJYv0qSOnVHYVVNQ5Hv6AFoDxWK%2Fwz3p5IbftK4z3xAEgUGIWq9wcE9beELXRiD5N5y2PMcMaYB7aChOKsKZxok6Zggo%2FK8C5B0iRD7Ksy14rIkFBERnKKX6pjn8QXYflmWES24NZ%2Fzdgnlh8p5hOZe%2Bz4a1a05G5Ho7RiH6ZxsLdKiH%2FIL4ApPCp%2F3Dhw9Y11adiU%2Ftub0SP7RzDuM5qR9Y6lER4rWUb1MemaZFxa09Q88U9noOopTGYFRxt%2BbNiXXiMILr6cMGOqUBwCbuff3GAoxCRp7HSsr7xlaaaVh4qdkSSFC%2FR42MWKrhSLdsCncbnpOzqXWU%2B%2ByYh0VMuh%2FAG8%2FKLuPWpMMX74gz1n1FJaHNcN%2BwxNLq2JAFGftWl48VwqI19W63Tf374mlFTemMkaFswJqq5ic%2FsVRl4udiQ8qIY26nijfHDvXkBucgBgBQqy1VJ1y5uTuSwf3LAqb8t2tOC02tYbF4mB8RaJya&X-Amz-Signature=123f09e0d9efa5c2fbf2c1849944017265e71f6b6262488e42133e7320455461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG2KUDNM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEC6Zptiq1PDxUghK0BclwR7%2BrMUGCrSc1kk9d78HmqvAiEA9AtPbVz87806ktTeuqtC%2BeqQR%2BseBCtJbpnl6nxg6%2FMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmLOFUQWPwXC3DelircAxUyl6PDu2R%2FMRZJ4sf93%2FaENVTv7pHAXkHFpAc7aOjvIUTc1UvC6GGgDwiSzTDQvc54Mj%2B68cBN%2BflOyJo1Unp3S25n1cU2bRn6lGE1qFStbdxfDYSfTpY1UP9SDH%2Fi9ig40CXhfTSrJIgbK24YkOAGx1N%2FNpOQ2qrA0QW3ihHBViZB9ajwmyHWNU6AEzXaJtsTJxOlD5JYmxKUtkE8AqqYDqAuaLPr6RpI7msKNtPf7qUj4NwaarevXrJ4jaPQg9Tx%2FpdXS3hyNsOR858ssfcPXN1ofSIWquJE%2FLwq%2BhI%2BVyirGWtRA5MZUiBpwJ42VjR7SAbw32apKjk9jcGKkKbxKeAx9fElLTLtqDiw9kpjwcQmfYkc%2FAD1WJYv0qSOnVHYVVNQ5Hv6AFoDxWK%2Fwz3p5IbftK4z3xAEgUGIWq9wcE9beELXRiD5N5y2PMcMaYB7aChOKsKZxok6Zggo%2FK8C5B0iRD7Ksy14rIkFBERnKKX6pjn8QXYflmWES24NZ%2Fzdgnlh8p5hOZe%2Bz4a1a05G5Ho7RiH6ZxsLdKiH%2FIL4ApPCp%2F3Dhw9Y11adiU%2Ftub0SP7RzDuM5qR9Y6lER4rWUb1MemaZFxa09Q88U9noOopTGYFRxt%2BbNiXXiMILr6cMGOqUBwCbuff3GAoxCRp7HSsr7xlaaaVh4qdkSSFC%2FR42MWKrhSLdsCncbnpOzqXWU%2B%2ByYh0VMuh%2FAG8%2FKLuPWpMMX74gz1n1FJaHNcN%2BwxNLq2JAFGftWl48VwqI19W63Tf374mlFTemMkaFswJqq5ic%2FsVRl4udiQ8qIY26nijfHDvXkBucgBgBQqy1VJ1y5uTuSwf3LAqb8t2tOC02tYbF4mB8RaJya&X-Amz-Signature=f40da18f30d5699ade718758e0a9b2d0465651c9acfab7e30066566afda7fc97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

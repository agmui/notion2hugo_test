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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTYUMCJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAFGfN4fe%2F6E27NLU26%2B4je9DIOSxE3rbI7jIly4yi%2BiAiEA62X2akO6OZPTU5%2FOdmHXBaaAi%2FLz%2B8l6LqSdoYtTeQgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLze7KDijktL6gWazSrcAzL6xSAvVMaL4bz%2FccJM5fxQE1UCQ9%2FpjhzsUoeClTBpU9Zg0NKJ98%2BqDTPfrYQQy7k72kMvWoTnQHVxdEvm%2B4TdOjnaIpoSey2VN340IHwfeUgNeLogujtPqdQFmuiPIpD0Iz9A6Zi6w5J%2FQ6LXFteOpY3wtT63nKdxm79xtsvDdWan2eIW9uNG8gh2uPHYmS8h7vEqsVD4Q%2BD5k4iJEz9clWtwi%2BJssMlCZgP%2Bs4poajcUg0e71QvHOZcXZDaKAutGdYaxp9xK33H81xnGSL32M0xk%2BTNhZdiD3EqIlscm7ANrzAN7YAZ%2FSFCpcs1%2FrKKh4m4L2Fg5dCTJCoT1PzcqoPcpsjAETQ7cQ7I2GR2drzSJH%2FG3aPxiQpky500%2FAVQHXr%2FfZcD%2FyKLeL%2FNBS%2Fbp1ycA7rsVGgw5lXeBPPNPo8juTIjAsv5rKXcun3T6sJ%2FLK9LJfVo0n7U8VI%2BS3RxMyc%2Fgd6iY8ZGSpIjmxM7NvqWDqg6K9Txl2J3k6i5VnagN0UfcE7SC%2FASjzn9%2FWdHpzvBCdbodQfDKwW5S8taE5VovzmNp3tm6DjsiYOahYZUgWERC95tKeB7epNl6MnsqCdTxXcM8DH%2BpBiOK3Q0j06g1mDEqoE3sRawkMIGNjcEGOqUBsomzWksL2qXuF1veI8dngXKWEY1QGTeFzbizLcPr%2Bkq5m29sR1XdAz3n6CeqmwU1yOzlJGOYtnaCTGfysyP8suDfNdFCUCtzBB%2FaeCG%2FOL6CpH1r%2Bk5%2BOWPTw0bZfhGZC7L423VNDAsEwvAmSFUN2Y5H8EXiBiXhmIHl3f7tPA7K%2FUvc%2BmMqfU1R4XvhsS5%2Br5pyNHUUcSbKJ%2FQt06Bsq2BanEMs&X-Amz-Signature=8b139a6b55b186ea164a2d594127ad3b0ab8107bcde264e5e97fbe9538fc46b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTYUMCJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAFGfN4fe%2F6E27NLU26%2B4je9DIOSxE3rbI7jIly4yi%2BiAiEA62X2akO6OZPTU5%2FOdmHXBaaAi%2FLz%2B8l6LqSdoYtTeQgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLze7KDijktL6gWazSrcAzL6xSAvVMaL4bz%2FccJM5fxQE1UCQ9%2FpjhzsUoeClTBpU9Zg0NKJ98%2BqDTPfrYQQy7k72kMvWoTnQHVxdEvm%2B4TdOjnaIpoSey2VN340IHwfeUgNeLogujtPqdQFmuiPIpD0Iz9A6Zi6w5J%2FQ6LXFteOpY3wtT63nKdxm79xtsvDdWan2eIW9uNG8gh2uPHYmS8h7vEqsVD4Q%2BD5k4iJEz9clWtwi%2BJssMlCZgP%2Bs4poajcUg0e71QvHOZcXZDaKAutGdYaxp9xK33H81xnGSL32M0xk%2BTNhZdiD3EqIlscm7ANrzAN7YAZ%2FSFCpcs1%2FrKKh4m4L2Fg5dCTJCoT1PzcqoPcpsjAETQ7cQ7I2GR2drzSJH%2FG3aPxiQpky500%2FAVQHXr%2FfZcD%2FyKLeL%2FNBS%2Fbp1ycA7rsVGgw5lXeBPPNPo8juTIjAsv5rKXcun3T6sJ%2FLK9LJfVo0n7U8VI%2BS3RxMyc%2Fgd6iY8ZGSpIjmxM7NvqWDqg6K9Txl2J3k6i5VnagN0UfcE7SC%2FASjzn9%2FWdHpzvBCdbodQfDKwW5S8taE5VovzmNp3tm6DjsiYOahYZUgWERC95tKeB7epNl6MnsqCdTxXcM8DH%2BpBiOK3Q0j06g1mDEqoE3sRawkMIGNjcEGOqUBsomzWksL2qXuF1veI8dngXKWEY1QGTeFzbizLcPr%2Bkq5m29sR1XdAz3n6CeqmwU1yOzlJGOYtnaCTGfysyP8suDfNdFCUCtzBB%2FaeCG%2FOL6CpH1r%2Bk5%2BOWPTw0bZfhGZC7L423VNDAsEwvAmSFUN2Y5H8EXiBiXhmIHl3f7tPA7K%2FUvc%2BmMqfU1R4XvhsS5%2Br5pyNHUUcSbKJ%2FQt06Bsq2BanEMs&X-Amz-Signature=174d40ea350714d1858ea3b5b0f446a1039104dd086349624cacb7ecc2fbb170&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTYUMCJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAFGfN4fe%2F6E27NLU26%2B4je9DIOSxE3rbI7jIly4yi%2BiAiEA62X2akO6OZPTU5%2FOdmHXBaaAi%2FLz%2B8l6LqSdoYtTeQgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLze7KDijktL6gWazSrcAzL6xSAvVMaL4bz%2FccJM5fxQE1UCQ9%2FpjhzsUoeClTBpU9Zg0NKJ98%2BqDTPfrYQQy7k72kMvWoTnQHVxdEvm%2B4TdOjnaIpoSey2VN340IHwfeUgNeLogujtPqdQFmuiPIpD0Iz9A6Zi6w5J%2FQ6LXFteOpY3wtT63nKdxm79xtsvDdWan2eIW9uNG8gh2uPHYmS8h7vEqsVD4Q%2BD5k4iJEz9clWtwi%2BJssMlCZgP%2Bs4poajcUg0e71QvHOZcXZDaKAutGdYaxp9xK33H81xnGSL32M0xk%2BTNhZdiD3EqIlscm7ANrzAN7YAZ%2FSFCpcs1%2FrKKh4m4L2Fg5dCTJCoT1PzcqoPcpsjAETQ7cQ7I2GR2drzSJH%2FG3aPxiQpky500%2FAVQHXr%2FfZcD%2FyKLeL%2FNBS%2Fbp1ycA7rsVGgw5lXeBPPNPo8juTIjAsv5rKXcun3T6sJ%2FLK9LJfVo0n7U8VI%2BS3RxMyc%2Fgd6iY8ZGSpIjmxM7NvqWDqg6K9Txl2J3k6i5VnagN0UfcE7SC%2FASjzn9%2FWdHpzvBCdbodQfDKwW5S8taE5VovzmNp3tm6DjsiYOahYZUgWERC95tKeB7epNl6MnsqCdTxXcM8DH%2BpBiOK3Q0j06g1mDEqoE3sRawkMIGNjcEGOqUBsomzWksL2qXuF1veI8dngXKWEY1QGTeFzbizLcPr%2Bkq5m29sR1XdAz3n6CeqmwU1yOzlJGOYtnaCTGfysyP8suDfNdFCUCtzBB%2FaeCG%2FOL6CpH1r%2Bk5%2BOWPTw0bZfhGZC7L423VNDAsEwvAmSFUN2Y5H8EXiBiXhmIHl3f7tPA7K%2FUvc%2BmMqfU1R4XvhsS5%2Br5pyNHUUcSbKJ%2FQt06Bsq2BanEMs&X-Amz-Signature=83243f56fcb03e54ecabe42da5761c5b623d697972ecc30a3a29afdaa4011ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTYUMCJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAFGfN4fe%2F6E27NLU26%2B4je9DIOSxE3rbI7jIly4yi%2BiAiEA62X2akO6OZPTU5%2FOdmHXBaaAi%2FLz%2B8l6LqSdoYtTeQgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLze7KDijktL6gWazSrcAzL6xSAvVMaL4bz%2FccJM5fxQE1UCQ9%2FpjhzsUoeClTBpU9Zg0NKJ98%2BqDTPfrYQQy7k72kMvWoTnQHVxdEvm%2B4TdOjnaIpoSey2VN340IHwfeUgNeLogujtPqdQFmuiPIpD0Iz9A6Zi6w5J%2FQ6LXFteOpY3wtT63nKdxm79xtsvDdWan2eIW9uNG8gh2uPHYmS8h7vEqsVD4Q%2BD5k4iJEz9clWtwi%2BJssMlCZgP%2Bs4poajcUg0e71QvHOZcXZDaKAutGdYaxp9xK33H81xnGSL32M0xk%2BTNhZdiD3EqIlscm7ANrzAN7YAZ%2FSFCpcs1%2FrKKh4m4L2Fg5dCTJCoT1PzcqoPcpsjAETQ7cQ7I2GR2drzSJH%2FG3aPxiQpky500%2FAVQHXr%2FfZcD%2FyKLeL%2FNBS%2Fbp1ycA7rsVGgw5lXeBPPNPo8juTIjAsv5rKXcun3T6sJ%2FLK9LJfVo0n7U8VI%2BS3RxMyc%2Fgd6iY8ZGSpIjmxM7NvqWDqg6K9Txl2J3k6i5VnagN0UfcE7SC%2FASjzn9%2FWdHpzvBCdbodQfDKwW5S8taE5VovzmNp3tm6DjsiYOahYZUgWERC95tKeB7epNl6MnsqCdTxXcM8DH%2BpBiOK3Q0j06g1mDEqoE3sRawkMIGNjcEGOqUBsomzWksL2qXuF1veI8dngXKWEY1QGTeFzbizLcPr%2Bkq5m29sR1XdAz3n6CeqmwU1yOzlJGOYtnaCTGfysyP8suDfNdFCUCtzBB%2FaeCG%2FOL6CpH1r%2Bk5%2BOWPTw0bZfhGZC7L423VNDAsEwvAmSFUN2Y5H8EXiBiXhmIHl3f7tPA7K%2FUvc%2BmMqfU1R4XvhsS5%2Br5pyNHUUcSbKJ%2FQt06Bsq2BanEMs&X-Amz-Signature=64b59cdc0a6d03c7b7fa87d0b0864285cff7954aca0bb1dbfc80ac12910b568f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTYUMCJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAFGfN4fe%2F6E27NLU26%2B4je9DIOSxE3rbI7jIly4yi%2BiAiEA62X2akO6OZPTU5%2FOdmHXBaaAi%2FLz%2B8l6LqSdoYtTeQgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLze7KDijktL6gWazSrcAzL6xSAvVMaL4bz%2FccJM5fxQE1UCQ9%2FpjhzsUoeClTBpU9Zg0NKJ98%2BqDTPfrYQQy7k72kMvWoTnQHVxdEvm%2B4TdOjnaIpoSey2VN340IHwfeUgNeLogujtPqdQFmuiPIpD0Iz9A6Zi6w5J%2FQ6LXFteOpY3wtT63nKdxm79xtsvDdWan2eIW9uNG8gh2uPHYmS8h7vEqsVD4Q%2BD5k4iJEz9clWtwi%2BJssMlCZgP%2Bs4poajcUg0e71QvHOZcXZDaKAutGdYaxp9xK33H81xnGSL32M0xk%2BTNhZdiD3EqIlscm7ANrzAN7YAZ%2FSFCpcs1%2FrKKh4m4L2Fg5dCTJCoT1PzcqoPcpsjAETQ7cQ7I2GR2drzSJH%2FG3aPxiQpky500%2FAVQHXr%2FfZcD%2FyKLeL%2FNBS%2Fbp1ycA7rsVGgw5lXeBPPNPo8juTIjAsv5rKXcun3T6sJ%2FLK9LJfVo0n7U8VI%2BS3RxMyc%2Fgd6iY8ZGSpIjmxM7NvqWDqg6K9Txl2J3k6i5VnagN0UfcE7SC%2FASjzn9%2FWdHpzvBCdbodQfDKwW5S8taE5VovzmNp3tm6DjsiYOahYZUgWERC95tKeB7epNl6MnsqCdTxXcM8DH%2BpBiOK3Q0j06g1mDEqoE3sRawkMIGNjcEGOqUBsomzWksL2qXuF1veI8dngXKWEY1QGTeFzbizLcPr%2Bkq5m29sR1XdAz3n6CeqmwU1yOzlJGOYtnaCTGfysyP8suDfNdFCUCtzBB%2FaeCG%2FOL6CpH1r%2Bk5%2BOWPTw0bZfhGZC7L423VNDAsEwvAmSFUN2Y5H8EXiBiXhmIHl3f7tPA7K%2FUvc%2BmMqfU1R4XvhsS5%2Br5pyNHUUcSbKJ%2FQt06Bsq2BanEMs&X-Amz-Signature=bdcbcde28448bee25869edbc835ef258fd89929bb6d7d9b903e81cc6fbc227a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTYUMCJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAFGfN4fe%2F6E27NLU26%2B4je9DIOSxE3rbI7jIly4yi%2BiAiEA62X2akO6OZPTU5%2FOdmHXBaaAi%2FLz%2B8l6LqSdoYtTeQgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLze7KDijktL6gWazSrcAzL6xSAvVMaL4bz%2FccJM5fxQE1UCQ9%2FpjhzsUoeClTBpU9Zg0NKJ98%2BqDTPfrYQQy7k72kMvWoTnQHVxdEvm%2B4TdOjnaIpoSey2VN340IHwfeUgNeLogujtPqdQFmuiPIpD0Iz9A6Zi6w5J%2FQ6LXFteOpY3wtT63nKdxm79xtsvDdWan2eIW9uNG8gh2uPHYmS8h7vEqsVD4Q%2BD5k4iJEz9clWtwi%2BJssMlCZgP%2Bs4poajcUg0e71QvHOZcXZDaKAutGdYaxp9xK33H81xnGSL32M0xk%2BTNhZdiD3EqIlscm7ANrzAN7YAZ%2FSFCpcs1%2FrKKh4m4L2Fg5dCTJCoT1PzcqoPcpsjAETQ7cQ7I2GR2drzSJH%2FG3aPxiQpky500%2FAVQHXr%2FfZcD%2FyKLeL%2FNBS%2Fbp1ycA7rsVGgw5lXeBPPNPo8juTIjAsv5rKXcun3T6sJ%2FLK9LJfVo0n7U8VI%2BS3RxMyc%2Fgd6iY8ZGSpIjmxM7NvqWDqg6K9Txl2J3k6i5VnagN0UfcE7SC%2FASjzn9%2FWdHpzvBCdbodQfDKwW5S8taE5VovzmNp3tm6DjsiYOahYZUgWERC95tKeB7epNl6MnsqCdTxXcM8DH%2BpBiOK3Q0j06g1mDEqoE3sRawkMIGNjcEGOqUBsomzWksL2qXuF1veI8dngXKWEY1QGTeFzbizLcPr%2Bkq5m29sR1XdAz3n6CeqmwU1yOzlJGOYtnaCTGfysyP8suDfNdFCUCtzBB%2FaeCG%2FOL6CpH1r%2Bk5%2BOWPTw0bZfhGZC7L423VNDAsEwvAmSFUN2Y5H8EXiBiXhmIHl3f7tPA7K%2FUvc%2BmMqfU1R4XvhsS5%2Br5pyNHUUcSbKJ%2FQt06Bsq2BanEMs&X-Amz-Signature=1363984df137a4c863fc1b609e144044a7db8f9e8d98898f0ea232b4ba91229d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTYUMCJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAFGfN4fe%2F6E27NLU26%2B4je9DIOSxE3rbI7jIly4yi%2BiAiEA62X2akO6OZPTU5%2FOdmHXBaaAi%2FLz%2B8l6LqSdoYtTeQgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLze7KDijktL6gWazSrcAzL6xSAvVMaL4bz%2FccJM5fxQE1UCQ9%2FpjhzsUoeClTBpU9Zg0NKJ98%2BqDTPfrYQQy7k72kMvWoTnQHVxdEvm%2B4TdOjnaIpoSey2VN340IHwfeUgNeLogujtPqdQFmuiPIpD0Iz9A6Zi6w5J%2FQ6LXFteOpY3wtT63nKdxm79xtsvDdWan2eIW9uNG8gh2uPHYmS8h7vEqsVD4Q%2BD5k4iJEz9clWtwi%2BJssMlCZgP%2Bs4poajcUg0e71QvHOZcXZDaKAutGdYaxp9xK33H81xnGSL32M0xk%2BTNhZdiD3EqIlscm7ANrzAN7YAZ%2FSFCpcs1%2FrKKh4m4L2Fg5dCTJCoT1PzcqoPcpsjAETQ7cQ7I2GR2drzSJH%2FG3aPxiQpky500%2FAVQHXr%2FfZcD%2FyKLeL%2FNBS%2Fbp1ycA7rsVGgw5lXeBPPNPo8juTIjAsv5rKXcun3T6sJ%2FLK9LJfVo0n7U8VI%2BS3RxMyc%2Fgd6iY8ZGSpIjmxM7NvqWDqg6K9Txl2J3k6i5VnagN0UfcE7SC%2FASjzn9%2FWdHpzvBCdbodQfDKwW5S8taE5VovzmNp3tm6DjsiYOahYZUgWERC95tKeB7epNl6MnsqCdTxXcM8DH%2BpBiOK3Q0j06g1mDEqoE3sRawkMIGNjcEGOqUBsomzWksL2qXuF1veI8dngXKWEY1QGTeFzbizLcPr%2Bkq5m29sR1XdAz3n6CeqmwU1yOzlJGOYtnaCTGfysyP8suDfNdFCUCtzBB%2FaeCG%2FOL6CpH1r%2Bk5%2BOWPTw0bZfhGZC7L423VNDAsEwvAmSFUN2Y5H8EXiBiXhmIHl3f7tPA7K%2FUvc%2BmMqfU1R4XvhsS5%2Br5pyNHUUcSbKJ%2FQt06Bsq2BanEMs&X-Amz-Signature=c763ac36f66e1ea8a6d56812d5e68c6857534d2ce11cba2fc4a571fec6b0bc27&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

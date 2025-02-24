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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPB6HYCQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt2tUPxx4xhLUX7VOb1Udrgj0wIcMNPTIiybTBGYQCIAiEAj%2FHRgySA2hcTMckrGUU45SuJzV4UWnL0ZuHOjErpc6wq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCPZGgFODh8nyHLiuircA8S4lNHeeeSB%2FZhucI6AlbOBrMzKFo%2FjbvJscuOBpNVqBOWQwyWtqHygU%2FQimmAXG0bVIeLDKODLzFFTbmimVOT8dxSC7ezdqFbbV5R%2FpoKEwdk6rkZGRER4Bs5dHr1ONxCqf%2FGJlHCMcX9YuX2Os0pnzIgqhZu8jSKKeZkJE1KQf%2BeXj0LdppApj%2B8miNUHrfo6nKP9TBQLh3KzJ3o5p%2B7W4dQkMNPQWXt0BdzD64VaxKFX8SkE2vyz8q0qTX18ImovyLITNkJxTYjFRfjW3H%2FAIMbXzpz%2BxFBYitfC1Q%2FKKefcZfS8CWLXcBoF2C12Sv%2BYov0OOrp%2FSn%2F6B%2FgX8lNNWVhnwrucE1i0VMiIl3WeVs%2Fou6mjsGDCzhHA%2FyDPr%2Bn432wO3YTIAQFr12CZDOjUVZWzEtf3rKsXUoQOh%2BTJX3TR36YU4HlmIdrWIxxNwIbL4fT6BuV374vWfh1tiAaX438kp350BWJRCmSqq%2BpNZCIJ516gn%2FxMdYLuRgKd3zFRxIneFkxhXVijq7eK4B3dRP3qp3P5X6ViD6tc0uchKyZhoqBFUOK0qAqEqUVUSpPWzL%2FqAdqvZbeN90Hr2J1bswIoLYkFhtTHrS%2FkSDWmPXp7%2FpdqeJdzUCK0MOf88r0GOqUBQlVZcnys3J7T6t6a5NngeQirsfZos2nohOimzlKhjrHzpF9f%2FXE1V7qaIUph4WBfEPg5IYwojckr6tGS19qx61IQYNtFsgm1AekshIOL6rlQEMqHrRB%2B1Qtt5EIorweeQz4w5ahX%2BMtJkWePI68vhPD9Xv%2BKZk1j6SavjJrmWGEVopZnCFBIHEXli6gqDMghTP9GCD7eQjDJOUTUEqcLMHPqaaVC&X-Amz-Signature=ea7b6ade20a5f16b33a20318f8e6c43969acc0b9cbcee0a81605b3eeed00b304&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPB6HYCQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt2tUPxx4xhLUX7VOb1Udrgj0wIcMNPTIiybTBGYQCIAiEAj%2FHRgySA2hcTMckrGUU45SuJzV4UWnL0ZuHOjErpc6wq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCPZGgFODh8nyHLiuircA8S4lNHeeeSB%2FZhucI6AlbOBrMzKFo%2FjbvJscuOBpNVqBOWQwyWtqHygU%2FQimmAXG0bVIeLDKODLzFFTbmimVOT8dxSC7ezdqFbbV5R%2FpoKEwdk6rkZGRER4Bs5dHr1ONxCqf%2FGJlHCMcX9YuX2Os0pnzIgqhZu8jSKKeZkJE1KQf%2BeXj0LdppApj%2B8miNUHrfo6nKP9TBQLh3KzJ3o5p%2B7W4dQkMNPQWXt0BdzD64VaxKFX8SkE2vyz8q0qTX18ImovyLITNkJxTYjFRfjW3H%2FAIMbXzpz%2BxFBYitfC1Q%2FKKefcZfS8CWLXcBoF2C12Sv%2BYov0OOrp%2FSn%2F6B%2FgX8lNNWVhnwrucE1i0VMiIl3WeVs%2Fou6mjsGDCzhHA%2FyDPr%2Bn432wO3YTIAQFr12CZDOjUVZWzEtf3rKsXUoQOh%2BTJX3TR36YU4HlmIdrWIxxNwIbL4fT6BuV374vWfh1tiAaX438kp350BWJRCmSqq%2BpNZCIJ516gn%2FxMdYLuRgKd3zFRxIneFkxhXVijq7eK4B3dRP3qp3P5X6ViD6tc0uchKyZhoqBFUOK0qAqEqUVUSpPWzL%2FqAdqvZbeN90Hr2J1bswIoLYkFhtTHrS%2FkSDWmPXp7%2FpdqeJdzUCK0MOf88r0GOqUBQlVZcnys3J7T6t6a5NngeQirsfZos2nohOimzlKhjrHzpF9f%2FXE1V7qaIUph4WBfEPg5IYwojckr6tGS19qx61IQYNtFsgm1AekshIOL6rlQEMqHrRB%2B1Qtt5EIorweeQz4w5ahX%2BMtJkWePI68vhPD9Xv%2BKZk1j6SavjJrmWGEVopZnCFBIHEXli6gqDMghTP9GCD7eQjDJOUTUEqcLMHPqaaVC&X-Amz-Signature=d3382c84a7be45773e472d192a3223cb5c29335fd34a1929a399cbdcae8109a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPB6HYCQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt2tUPxx4xhLUX7VOb1Udrgj0wIcMNPTIiybTBGYQCIAiEAj%2FHRgySA2hcTMckrGUU45SuJzV4UWnL0ZuHOjErpc6wq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCPZGgFODh8nyHLiuircA8S4lNHeeeSB%2FZhucI6AlbOBrMzKFo%2FjbvJscuOBpNVqBOWQwyWtqHygU%2FQimmAXG0bVIeLDKODLzFFTbmimVOT8dxSC7ezdqFbbV5R%2FpoKEwdk6rkZGRER4Bs5dHr1ONxCqf%2FGJlHCMcX9YuX2Os0pnzIgqhZu8jSKKeZkJE1KQf%2BeXj0LdppApj%2B8miNUHrfo6nKP9TBQLh3KzJ3o5p%2B7W4dQkMNPQWXt0BdzD64VaxKFX8SkE2vyz8q0qTX18ImovyLITNkJxTYjFRfjW3H%2FAIMbXzpz%2BxFBYitfC1Q%2FKKefcZfS8CWLXcBoF2C12Sv%2BYov0OOrp%2FSn%2F6B%2FgX8lNNWVhnwrucE1i0VMiIl3WeVs%2Fou6mjsGDCzhHA%2FyDPr%2Bn432wO3YTIAQFr12CZDOjUVZWzEtf3rKsXUoQOh%2BTJX3TR36YU4HlmIdrWIxxNwIbL4fT6BuV374vWfh1tiAaX438kp350BWJRCmSqq%2BpNZCIJ516gn%2FxMdYLuRgKd3zFRxIneFkxhXVijq7eK4B3dRP3qp3P5X6ViD6tc0uchKyZhoqBFUOK0qAqEqUVUSpPWzL%2FqAdqvZbeN90Hr2J1bswIoLYkFhtTHrS%2FkSDWmPXp7%2FpdqeJdzUCK0MOf88r0GOqUBQlVZcnys3J7T6t6a5NngeQirsfZos2nohOimzlKhjrHzpF9f%2FXE1V7qaIUph4WBfEPg5IYwojckr6tGS19qx61IQYNtFsgm1AekshIOL6rlQEMqHrRB%2B1Qtt5EIorweeQz4w5ahX%2BMtJkWePI68vhPD9Xv%2BKZk1j6SavjJrmWGEVopZnCFBIHEXli6gqDMghTP9GCD7eQjDJOUTUEqcLMHPqaaVC&X-Amz-Signature=fd52800fa4cdb70f8764f0ea81794e0cf7454477c9717c294eb51f851424f934&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPB6HYCQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt2tUPxx4xhLUX7VOb1Udrgj0wIcMNPTIiybTBGYQCIAiEAj%2FHRgySA2hcTMckrGUU45SuJzV4UWnL0ZuHOjErpc6wq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCPZGgFODh8nyHLiuircA8S4lNHeeeSB%2FZhucI6AlbOBrMzKFo%2FjbvJscuOBpNVqBOWQwyWtqHygU%2FQimmAXG0bVIeLDKODLzFFTbmimVOT8dxSC7ezdqFbbV5R%2FpoKEwdk6rkZGRER4Bs5dHr1ONxCqf%2FGJlHCMcX9YuX2Os0pnzIgqhZu8jSKKeZkJE1KQf%2BeXj0LdppApj%2B8miNUHrfo6nKP9TBQLh3KzJ3o5p%2B7W4dQkMNPQWXt0BdzD64VaxKFX8SkE2vyz8q0qTX18ImovyLITNkJxTYjFRfjW3H%2FAIMbXzpz%2BxFBYitfC1Q%2FKKefcZfS8CWLXcBoF2C12Sv%2BYov0OOrp%2FSn%2F6B%2FgX8lNNWVhnwrucE1i0VMiIl3WeVs%2Fou6mjsGDCzhHA%2FyDPr%2Bn432wO3YTIAQFr12CZDOjUVZWzEtf3rKsXUoQOh%2BTJX3TR36YU4HlmIdrWIxxNwIbL4fT6BuV374vWfh1tiAaX438kp350BWJRCmSqq%2BpNZCIJ516gn%2FxMdYLuRgKd3zFRxIneFkxhXVijq7eK4B3dRP3qp3P5X6ViD6tc0uchKyZhoqBFUOK0qAqEqUVUSpPWzL%2FqAdqvZbeN90Hr2J1bswIoLYkFhtTHrS%2FkSDWmPXp7%2FpdqeJdzUCK0MOf88r0GOqUBQlVZcnys3J7T6t6a5NngeQirsfZos2nohOimzlKhjrHzpF9f%2FXE1V7qaIUph4WBfEPg5IYwojckr6tGS19qx61IQYNtFsgm1AekshIOL6rlQEMqHrRB%2B1Qtt5EIorweeQz4w5ahX%2BMtJkWePI68vhPD9Xv%2BKZk1j6SavjJrmWGEVopZnCFBIHEXli6gqDMghTP9GCD7eQjDJOUTUEqcLMHPqaaVC&X-Amz-Signature=bb7d7a5126b45843bfee530ac7f704c7cf45ce27ce60d0d73ec70a9b90193a95&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPB6HYCQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt2tUPxx4xhLUX7VOb1Udrgj0wIcMNPTIiybTBGYQCIAiEAj%2FHRgySA2hcTMckrGUU45SuJzV4UWnL0ZuHOjErpc6wq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCPZGgFODh8nyHLiuircA8S4lNHeeeSB%2FZhucI6AlbOBrMzKFo%2FjbvJscuOBpNVqBOWQwyWtqHygU%2FQimmAXG0bVIeLDKODLzFFTbmimVOT8dxSC7ezdqFbbV5R%2FpoKEwdk6rkZGRER4Bs5dHr1ONxCqf%2FGJlHCMcX9YuX2Os0pnzIgqhZu8jSKKeZkJE1KQf%2BeXj0LdppApj%2B8miNUHrfo6nKP9TBQLh3KzJ3o5p%2B7W4dQkMNPQWXt0BdzD64VaxKFX8SkE2vyz8q0qTX18ImovyLITNkJxTYjFRfjW3H%2FAIMbXzpz%2BxFBYitfC1Q%2FKKefcZfS8CWLXcBoF2C12Sv%2BYov0OOrp%2FSn%2F6B%2FgX8lNNWVhnwrucE1i0VMiIl3WeVs%2Fou6mjsGDCzhHA%2FyDPr%2Bn432wO3YTIAQFr12CZDOjUVZWzEtf3rKsXUoQOh%2BTJX3TR36YU4HlmIdrWIxxNwIbL4fT6BuV374vWfh1tiAaX438kp350BWJRCmSqq%2BpNZCIJ516gn%2FxMdYLuRgKd3zFRxIneFkxhXVijq7eK4B3dRP3qp3P5X6ViD6tc0uchKyZhoqBFUOK0qAqEqUVUSpPWzL%2FqAdqvZbeN90Hr2J1bswIoLYkFhtTHrS%2FkSDWmPXp7%2FpdqeJdzUCK0MOf88r0GOqUBQlVZcnys3J7T6t6a5NngeQirsfZos2nohOimzlKhjrHzpF9f%2FXE1V7qaIUph4WBfEPg5IYwojckr6tGS19qx61IQYNtFsgm1AekshIOL6rlQEMqHrRB%2B1Qtt5EIorweeQz4w5ahX%2BMtJkWePI68vhPD9Xv%2BKZk1j6SavjJrmWGEVopZnCFBIHEXli6gqDMghTP9GCD7eQjDJOUTUEqcLMHPqaaVC&X-Amz-Signature=4c58b605bd350af1989c41474d27c58a958cd921bdedc77cd7faf2969579ad14&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPB6HYCQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt2tUPxx4xhLUX7VOb1Udrgj0wIcMNPTIiybTBGYQCIAiEAj%2FHRgySA2hcTMckrGUU45SuJzV4UWnL0ZuHOjErpc6wq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCPZGgFODh8nyHLiuircA8S4lNHeeeSB%2FZhucI6AlbOBrMzKFo%2FjbvJscuOBpNVqBOWQwyWtqHygU%2FQimmAXG0bVIeLDKODLzFFTbmimVOT8dxSC7ezdqFbbV5R%2FpoKEwdk6rkZGRER4Bs5dHr1ONxCqf%2FGJlHCMcX9YuX2Os0pnzIgqhZu8jSKKeZkJE1KQf%2BeXj0LdppApj%2B8miNUHrfo6nKP9TBQLh3KzJ3o5p%2B7W4dQkMNPQWXt0BdzD64VaxKFX8SkE2vyz8q0qTX18ImovyLITNkJxTYjFRfjW3H%2FAIMbXzpz%2BxFBYitfC1Q%2FKKefcZfS8CWLXcBoF2C12Sv%2BYov0OOrp%2FSn%2F6B%2FgX8lNNWVhnwrucE1i0VMiIl3WeVs%2Fou6mjsGDCzhHA%2FyDPr%2Bn432wO3YTIAQFr12CZDOjUVZWzEtf3rKsXUoQOh%2BTJX3TR36YU4HlmIdrWIxxNwIbL4fT6BuV374vWfh1tiAaX438kp350BWJRCmSqq%2BpNZCIJ516gn%2FxMdYLuRgKd3zFRxIneFkxhXVijq7eK4B3dRP3qp3P5X6ViD6tc0uchKyZhoqBFUOK0qAqEqUVUSpPWzL%2FqAdqvZbeN90Hr2J1bswIoLYkFhtTHrS%2FkSDWmPXp7%2FpdqeJdzUCK0MOf88r0GOqUBQlVZcnys3J7T6t6a5NngeQirsfZos2nohOimzlKhjrHzpF9f%2FXE1V7qaIUph4WBfEPg5IYwojckr6tGS19qx61IQYNtFsgm1AekshIOL6rlQEMqHrRB%2B1Qtt5EIorweeQz4w5ahX%2BMtJkWePI68vhPD9Xv%2BKZk1j6SavjJrmWGEVopZnCFBIHEXli6gqDMghTP9GCD7eQjDJOUTUEqcLMHPqaaVC&X-Amz-Signature=7b04866000d0c626f5dd5533c23dfc040e21951c65ca40fb7362b578b3e0fde6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPB6HYCQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt2tUPxx4xhLUX7VOb1Udrgj0wIcMNPTIiybTBGYQCIAiEAj%2FHRgySA2hcTMckrGUU45SuJzV4UWnL0ZuHOjErpc6wq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCPZGgFODh8nyHLiuircA8S4lNHeeeSB%2FZhucI6AlbOBrMzKFo%2FjbvJscuOBpNVqBOWQwyWtqHygU%2FQimmAXG0bVIeLDKODLzFFTbmimVOT8dxSC7ezdqFbbV5R%2FpoKEwdk6rkZGRER4Bs5dHr1ONxCqf%2FGJlHCMcX9YuX2Os0pnzIgqhZu8jSKKeZkJE1KQf%2BeXj0LdppApj%2B8miNUHrfo6nKP9TBQLh3KzJ3o5p%2B7W4dQkMNPQWXt0BdzD64VaxKFX8SkE2vyz8q0qTX18ImovyLITNkJxTYjFRfjW3H%2FAIMbXzpz%2BxFBYitfC1Q%2FKKefcZfS8CWLXcBoF2C12Sv%2BYov0OOrp%2FSn%2F6B%2FgX8lNNWVhnwrucE1i0VMiIl3WeVs%2Fou6mjsGDCzhHA%2FyDPr%2Bn432wO3YTIAQFr12CZDOjUVZWzEtf3rKsXUoQOh%2BTJX3TR36YU4HlmIdrWIxxNwIbL4fT6BuV374vWfh1tiAaX438kp350BWJRCmSqq%2BpNZCIJ516gn%2FxMdYLuRgKd3zFRxIneFkxhXVijq7eK4B3dRP3qp3P5X6ViD6tc0uchKyZhoqBFUOK0qAqEqUVUSpPWzL%2FqAdqvZbeN90Hr2J1bswIoLYkFhtTHrS%2FkSDWmPXp7%2FpdqeJdzUCK0MOf88r0GOqUBQlVZcnys3J7T6t6a5NngeQirsfZos2nohOimzlKhjrHzpF9f%2FXE1V7qaIUph4WBfEPg5IYwojckr6tGS19qx61IQYNtFsgm1AekshIOL6rlQEMqHrRB%2B1Qtt5EIorweeQz4w5ahX%2BMtJkWePI68vhPD9Xv%2BKZk1j6SavjJrmWGEVopZnCFBIHEXli6gqDMghTP9GCD7eQjDJOUTUEqcLMHPqaaVC&X-Amz-Signature=d8e7a39167b0fb41298f64d8e41441cb98e57d3c531255a96ca57adf69c4976e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

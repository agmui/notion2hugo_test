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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MQ5IZQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDpl%2FQ%2BT%2FbhgfKhSDxk8HParq4KTMthuO2EVccGoyaFCgIgHd7MgMnnMQvrQqxnvHvOMQSLiRyCRclhk2orfe347pEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEMCHXGjSmIBdiQiQSrcA1vSYAlnorAd0DH11lXa%2BChzlayA8E%2FSJQOx%2FvgflzJa56R51pF1yYRMkYus1f5XNmqLDURHWil4MNi8S4SWiJF8Fy3T%2BBrkR6Jg73yM1DUhJ2n5lS260Ir6whh44ANaRMQwYnyLuWceyqrdIKcsuvhfmMj1y7Nc%2FLQhmk%2BrrNwKQtRJ7gAt1zt4OxOkW8HojRJQUo%2FCc4hccihNZUMc%2FjVmSW0ZdgJ2%2B0SjTKPjcn0XuHem4o8B%2FbECEiOkkhxm2tVx4TMCTs8Vbo7DzjZD7IPO8mF44UrS8fdejUfMJnDLwO9P%2ByV60m2WJ5dX3DJATGtQI%2FPtCb3EsFAtojs87txg5YvV4sUwEdn1R3r8WrRwNir4SvpoGrEnOHKFHNJIDRgdZPIuWyiGP%2BCtBCmuXhvHxqAgMa%2By5zUdQbMeW9werZovJD%2FNaAAILBvgGdCUEmxBXp4DaKMxlJFuYzIAjZ0C9%2FcMjKHyE%2BBRVw1lchAA2T9VH13Y5qHL6kYsIErzaVSZQXxN6IpKFA71yJdP1wXcV0NsZSbx%2Fw3w3aBv%2FzS%2F6JBWrUqd%2BX1djqTe9KRJRnCK06EKdIJXbC16L7Tm2PkOrlFx3T5x0q44kNcQHA4pkUKTf%2F8%2BgS6PgZ7gMO6QxL0GOqUB8M3PXd4IddwAow7BCV4g0iS2bwwsccS926cHO2XyX9UEgKIRFuX103Znn%2FkCHD4Fka%2FA4YuofFOYxXocXvucww%2BwibpjRPbDcREQxJHVIhp7H3KZH%2FudbyzuAdTf3SuFxuTMdJHqmr%2FtoiexEoLcoCGJZfXQC%2Bk7s01d2s2sh0PfozYq6BZmZ982SNsLXluHuDJsnUlWD52%2Bekkxf0QE5nDMrXaZ&X-Amz-Signature=8f5dda0fdac0780e96579c4d21900abdd5fd9c9d0641e8d89d716b2cd074c3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MQ5IZQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDpl%2FQ%2BT%2FbhgfKhSDxk8HParq4KTMthuO2EVccGoyaFCgIgHd7MgMnnMQvrQqxnvHvOMQSLiRyCRclhk2orfe347pEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEMCHXGjSmIBdiQiQSrcA1vSYAlnorAd0DH11lXa%2BChzlayA8E%2FSJQOx%2FvgflzJa56R51pF1yYRMkYus1f5XNmqLDURHWil4MNi8S4SWiJF8Fy3T%2BBrkR6Jg73yM1DUhJ2n5lS260Ir6whh44ANaRMQwYnyLuWceyqrdIKcsuvhfmMj1y7Nc%2FLQhmk%2BrrNwKQtRJ7gAt1zt4OxOkW8HojRJQUo%2FCc4hccihNZUMc%2FjVmSW0ZdgJ2%2B0SjTKPjcn0XuHem4o8B%2FbECEiOkkhxm2tVx4TMCTs8Vbo7DzjZD7IPO8mF44UrS8fdejUfMJnDLwO9P%2ByV60m2WJ5dX3DJATGtQI%2FPtCb3EsFAtojs87txg5YvV4sUwEdn1R3r8WrRwNir4SvpoGrEnOHKFHNJIDRgdZPIuWyiGP%2BCtBCmuXhvHxqAgMa%2By5zUdQbMeW9werZovJD%2FNaAAILBvgGdCUEmxBXp4DaKMxlJFuYzIAjZ0C9%2FcMjKHyE%2BBRVw1lchAA2T9VH13Y5qHL6kYsIErzaVSZQXxN6IpKFA71yJdP1wXcV0NsZSbx%2Fw3w3aBv%2FzS%2F6JBWrUqd%2BX1djqTe9KRJRnCK06EKdIJXbC16L7Tm2PkOrlFx3T5x0q44kNcQHA4pkUKTf%2F8%2BgS6PgZ7gMO6QxL0GOqUB8M3PXd4IddwAow7BCV4g0iS2bwwsccS926cHO2XyX9UEgKIRFuX103Znn%2FkCHD4Fka%2FA4YuofFOYxXocXvucww%2BwibpjRPbDcREQxJHVIhp7H3KZH%2FudbyzuAdTf3SuFxuTMdJHqmr%2FtoiexEoLcoCGJZfXQC%2Bk7s01d2s2sh0PfozYq6BZmZ982SNsLXluHuDJsnUlWD52%2Bekkxf0QE5nDMrXaZ&X-Amz-Signature=aa091e28f7c8ab33357cb734e47f8c99ef5dd0d5fc7c7977cf91ff92267cbdb2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MQ5IZQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDpl%2FQ%2BT%2FbhgfKhSDxk8HParq4KTMthuO2EVccGoyaFCgIgHd7MgMnnMQvrQqxnvHvOMQSLiRyCRclhk2orfe347pEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEMCHXGjSmIBdiQiQSrcA1vSYAlnorAd0DH11lXa%2BChzlayA8E%2FSJQOx%2FvgflzJa56R51pF1yYRMkYus1f5XNmqLDURHWil4MNi8S4SWiJF8Fy3T%2BBrkR6Jg73yM1DUhJ2n5lS260Ir6whh44ANaRMQwYnyLuWceyqrdIKcsuvhfmMj1y7Nc%2FLQhmk%2BrrNwKQtRJ7gAt1zt4OxOkW8HojRJQUo%2FCc4hccihNZUMc%2FjVmSW0ZdgJ2%2B0SjTKPjcn0XuHem4o8B%2FbECEiOkkhxm2tVx4TMCTs8Vbo7DzjZD7IPO8mF44UrS8fdejUfMJnDLwO9P%2ByV60m2WJ5dX3DJATGtQI%2FPtCb3EsFAtojs87txg5YvV4sUwEdn1R3r8WrRwNir4SvpoGrEnOHKFHNJIDRgdZPIuWyiGP%2BCtBCmuXhvHxqAgMa%2By5zUdQbMeW9werZovJD%2FNaAAILBvgGdCUEmxBXp4DaKMxlJFuYzIAjZ0C9%2FcMjKHyE%2BBRVw1lchAA2T9VH13Y5qHL6kYsIErzaVSZQXxN6IpKFA71yJdP1wXcV0NsZSbx%2Fw3w3aBv%2FzS%2F6JBWrUqd%2BX1djqTe9KRJRnCK06EKdIJXbC16L7Tm2PkOrlFx3T5x0q44kNcQHA4pkUKTf%2F8%2BgS6PgZ7gMO6QxL0GOqUB8M3PXd4IddwAow7BCV4g0iS2bwwsccS926cHO2XyX9UEgKIRFuX103Znn%2FkCHD4Fka%2FA4YuofFOYxXocXvucww%2BwibpjRPbDcREQxJHVIhp7H3KZH%2FudbyzuAdTf3SuFxuTMdJHqmr%2FtoiexEoLcoCGJZfXQC%2Bk7s01d2s2sh0PfozYq6BZmZ982SNsLXluHuDJsnUlWD52%2Bekkxf0QE5nDMrXaZ&X-Amz-Signature=e6e8e547c31eef968ead98a3205a3f85ac42aff0e49e98b186a3b21b7df8542b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MQ5IZQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDpl%2FQ%2BT%2FbhgfKhSDxk8HParq4KTMthuO2EVccGoyaFCgIgHd7MgMnnMQvrQqxnvHvOMQSLiRyCRclhk2orfe347pEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEMCHXGjSmIBdiQiQSrcA1vSYAlnorAd0DH11lXa%2BChzlayA8E%2FSJQOx%2FvgflzJa56R51pF1yYRMkYus1f5XNmqLDURHWil4MNi8S4SWiJF8Fy3T%2BBrkR6Jg73yM1DUhJ2n5lS260Ir6whh44ANaRMQwYnyLuWceyqrdIKcsuvhfmMj1y7Nc%2FLQhmk%2BrrNwKQtRJ7gAt1zt4OxOkW8HojRJQUo%2FCc4hccihNZUMc%2FjVmSW0ZdgJ2%2B0SjTKPjcn0XuHem4o8B%2FbECEiOkkhxm2tVx4TMCTs8Vbo7DzjZD7IPO8mF44UrS8fdejUfMJnDLwO9P%2ByV60m2WJ5dX3DJATGtQI%2FPtCb3EsFAtojs87txg5YvV4sUwEdn1R3r8WrRwNir4SvpoGrEnOHKFHNJIDRgdZPIuWyiGP%2BCtBCmuXhvHxqAgMa%2By5zUdQbMeW9werZovJD%2FNaAAILBvgGdCUEmxBXp4DaKMxlJFuYzIAjZ0C9%2FcMjKHyE%2BBRVw1lchAA2T9VH13Y5qHL6kYsIErzaVSZQXxN6IpKFA71yJdP1wXcV0NsZSbx%2Fw3w3aBv%2FzS%2F6JBWrUqd%2BX1djqTe9KRJRnCK06EKdIJXbC16L7Tm2PkOrlFx3T5x0q44kNcQHA4pkUKTf%2F8%2BgS6PgZ7gMO6QxL0GOqUB8M3PXd4IddwAow7BCV4g0iS2bwwsccS926cHO2XyX9UEgKIRFuX103Znn%2FkCHD4Fka%2FA4YuofFOYxXocXvucww%2BwibpjRPbDcREQxJHVIhp7H3KZH%2FudbyzuAdTf3SuFxuTMdJHqmr%2FtoiexEoLcoCGJZfXQC%2Bk7s01d2s2sh0PfozYq6BZmZ982SNsLXluHuDJsnUlWD52%2Bekkxf0QE5nDMrXaZ&X-Amz-Signature=afc300ff0be1b82092f7f313c0f6b7a040bc486d9a0d94d7a6010d0b5dd1a142&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MQ5IZQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDpl%2FQ%2BT%2FbhgfKhSDxk8HParq4KTMthuO2EVccGoyaFCgIgHd7MgMnnMQvrQqxnvHvOMQSLiRyCRclhk2orfe347pEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEMCHXGjSmIBdiQiQSrcA1vSYAlnorAd0DH11lXa%2BChzlayA8E%2FSJQOx%2FvgflzJa56R51pF1yYRMkYus1f5XNmqLDURHWil4MNi8S4SWiJF8Fy3T%2BBrkR6Jg73yM1DUhJ2n5lS260Ir6whh44ANaRMQwYnyLuWceyqrdIKcsuvhfmMj1y7Nc%2FLQhmk%2BrrNwKQtRJ7gAt1zt4OxOkW8HojRJQUo%2FCc4hccihNZUMc%2FjVmSW0ZdgJ2%2B0SjTKPjcn0XuHem4o8B%2FbECEiOkkhxm2tVx4TMCTs8Vbo7DzjZD7IPO8mF44UrS8fdejUfMJnDLwO9P%2ByV60m2WJ5dX3DJATGtQI%2FPtCb3EsFAtojs87txg5YvV4sUwEdn1R3r8WrRwNir4SvpoGrEnOHKFHNJIDRgdZPIuWyiGP%2BCtBCmuXhvHxqAgMa%2By5zUdQbMeW9werZovJD%2FNaAAILBvgGdCUEmxBXp4DaKMxlJFuYzIAjZ0C9%2FcMjKHyE%2BBRVw1lchAA2T9VH13Y5qHL6kYsIErzaVSZQXxN6IpKFA71yJdP1wXcV0NsZSbx%2Fw3w3aBv%2FzS%2F6JBWrUqd%2BX1djqTe9KRJRnCK06EKdIJXbC16L7Tm2PkOrlFx3T5x0q44kNcQHA4pkUKTf%2F8%2BgS6PgZ7gMO6QxL0GOqUB8M3PXd4IddwAow7BCV4g0iS2bwwsccS926cHO2XyX9UEgKIRFuX103Znn%2FkCHD4Fka%2FA4YuofFOYxXocXvucww%2BwibpjRPbDcREQxJHVIhp7H3KZH%2FudbyzuAdTf3SuFxuTMdJHqmr%2FtoiexEoLcoCGJZfXQC%2Bk7s01d2s2sh0PfozYq6BZmZ982SNsLXluHuDJsnUlWD52%2Bekkxf0QE5nDMrXaZ&X-Amz-Signature=9148db65c46e584e4daafde75d1c1fb3d78a605b33c461fcaecc8c4cb26c989a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MQ5IZQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDpl%2FQ%2BT%2FbhgfKhSDxk8HParq4KTMthuO2EVccGoyaFCgIgHd7MgMnnMQvrQqxnvHvOMQSLiRyCRclhk2orfe347pEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEMCHXGjSmIBdiQiQSrcA1vSYAlnorAd0DH11lXa%2BChzlayA8E%2FSJQOx%2FvgflzJa56R51pF1yYRMkYus1f5XNmqLDURHWil4MNi8S4SWiJF8Fy3T%2BBrkR6Jg73yM1DUhJ2n5lS260Ir6whh44ANaRMQwYnyLuWceyqrdIKcsuvhfmMj1y7Nc%2FLQhmk%2BrrNwKQtRJ7gAt1zt4OxOkW8HojRJQUo%2FCc4hccihNZUMc%2FjVmSW0ZdgJ2%2B0SjTKPjcn0XuHem4o8B%2FbECEiOkkhxm2tVx4TMCTs8Vbo7DzjZD7IPO8mF44UrS8fdejUfMJnDLwO9P%2ByV60m2WJ5dX3DJATGtQI%2FPtCb3EsFAtojs87txg5YvV4sUwEdn1R3r8WrRwNir4SvpoGrEnOHKFHNJIDRgdZPIuWyiGP%2BCtBCmuXhvHxqAgMa%2By5zUdQbMeW9werZovJD%2FNaAAILBvgGdCUEmxBXp4DaKMxlJFuYzIAjZ0C9%2FcMjKHyE%2BBRVw1lchAA2T9VH13Y5qHL6kYsIErzaVSZQXxN6IpKFA71yJdP1wXcV0NsZSbx%2Fw3w3aBv%2FzS%2F6JBWrUqd%2BX1djqTe9KRJRnCK06EKdIJXbC16L7Tm2PkOrlFx3T5x0q44kNcQHA4pkUKTf%2F8%2BgS6PgZ7gMO6QxL0GOqUB8M3PXd4IddwAow7BCV4g0iS2bwwsccS926cHO2XyX9UEgKIRFuX103Znn%2FkCHD4Fka%2FA4YuofFOYxXocXvucww%2BwibpjRPbDcREQxJHVIhp7H3KZH%2FudbyzuAdTf3SuFxuTMdJHqmr%2FtoiexEoLcoCGJZfXQC%2Bk7s01d2s2sh0PfozYq6BZmZ982SNsLXluHuDJsnUlWD52%2Bekkxf0QE5nDMrXaZ&X-Amz-Signature=b12dda099733bf8f8a9ff40328efebe9ea9f734d2d1cc07da4525fa68cd58157&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MQ5IZQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDpl%2FQ%2BT%2FbhgfKhSDxk8HParq4KTMthuO2EVccGoyaFCgIgHd7MgMnnMQvrQqxnvHvOMQSLiRyCRclhk2orfe347pEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEMCHXGjSmIBdiQiQSrcA1vSYAlnorAd0DH11lXa%2BChzlayA8E%2FSJQOx%2FvgflzJa56R51pF1yYRMkYus1f5XNmqLDURHWil4MNi8S4SWiJF8Fy3T%2BBrkR6Jg73yM1DUhJ2n5lS260Ir6whh44ANaRMQwYnyLuWceyqrdIKcsuvhfmMj1y7Nc%2FLQhmk%2BrrNwKQtRJ7gAt1zt4OxOkW8HojRJQUo%2FCc4hccihNZUMc%2FjVmSW0ZdgJ2%2B0SjTKPjcn0XuHem4o8B%2FbECEiOkkhxm2tVx4TMCTs8Vbo7DzjZD7IPO8mF44UrS8fdejUfMJnDLwO9P%2ByV60m2WJ5dX3DJATGtQI%2FPtCb3EsFAtojs87txg5YvV4sUwEdn1R3r8WrRwNir4SvpoGrEnOHKFHNJIDRgdZPIuWyiGP%2BCtBCmuXhvHxqAgMa%2By5zUdQbMeW9werZovJD%2FNaAAILBvgGdCUEmxBXp4DaKMxlJFuYzIAjZ0C9%2FcMjKHyE%2BBRVw1lchAA2T9VH13Y5qHL6kYsIErzaVSZQXxN6IpKFA71yJdP1wXcV0NsZSbx%2Fw3w3aBv%2FzS%2F6JBWrUqd%2BX1djqTe9KRJRnCK06EKdIJXbC16L7Tm2PkOrlFx3T5x0q44kNcQHA4pkUKTf%2F8%2BgS6PgZ7gMO6QxL0GOqUB8M3PXd4IddwAow7BCV4g0iS2bwwsccS926cHO2XyX9UEgKIRFuX103Znn%2FkCHD4Fka%2FA4YuofFOYxXocXvucww%2BwibpjRPbDcREQxJHVIhp7H3KZH%2FudbyzuAdTf3SuFxuTMdJHqmr%2FtoiexEoLcoCGJZfXQC%2Bk7s01d2s2sh0PfozYq6BZmZ982SNsLXluHuDJsnUlWD52%2Bekkxf0QE5nDMrXaZ&X-Amz-Signature=58914208a1133773adb6cb58e07b5f9a300cbdf8f472519539c41d08d3ba650d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

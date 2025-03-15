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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6FCUZX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfAp6%2FCHi0AqcKqHrW2A4qgpOEdtpixaJEYuG7UnfeCgIgWQsFAJJaKbN8WcMEo9bOr1Vw8hfQGVGZdXHQ%2B2zkVWgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDClmP%2F5peFAAH%2FZiBircAy3%2Biotzs%2BIu9N9OPSSE36UuLcBR01AIh%2FHfInb%2FZYVs1XKLejJ7roRaDwGMIYYAgxcVXf6ZGhCO2FVL5clchxcvExwQLaSuuhjgrCl%2Bnw2jvhbpfhJP2o93c7sAEvOwGQ%2FmRJhObXw6qV9JpeGLYQ0iu1Y2CGxpopViWHA76u8Jf8RKAjuHs1RrnjUvR6R0KVUGr%2FXHg%2FP6OLYodfaVHZ5jQtbP4HBFk3iyb6Q9NN%2Fb1lzZq%2F2yJQtLb6R36pw%2B%2FY01bhZXkCWhG7OjLUeOOM1V13zvJ10gfNc%2BaOQ6n3AcTIyQ%2BwC29dOezzGaiFDrBLVkXIJttOa%2BdgNxYkH3Ws3EscOgd%2BBMyRGO8zmhl4Ksh14Jvjlm21tiAWCQZpm64pgkCs5pWVneSdKzXIuVb1rTQrMla%2FdCmI8UjSS%2BsAo1xO62ebFjHqxmdO6%2B4TdFGYdL8moWRPwmxLbt0WnlMMTFphyz%2B0hNOIzylK66qhDVlxN0t%2F6N821gw8d4HVscsVY%2F5JDWfU0TwVJ4dQ7QRcNU2WUMJXx6wQAgbeWh5MM7PUFOLQd143AGyxgWYaDBUIiHn%2FStWhBKsYX2hDLZb2w7zA4i%2FUaxnDCC9VtUB418w4NtMOjqO3YPFEitMLCy1b4GOqUBqb7QTP7QDO6PUflUjydhtHteHlY9sYaFpS4NOY0NERWxCjAnPP5rxN8sVuvS88vQzBsHuak3Srp26wPMPNOgvtSfPwQnInvdoFhgKN1NhWK7ew4MPz64hRVPIPnB7P%2BVsRCwPCFqPY8Xd7ReJJ5BZhFsm6yq3VFurh4Fx522TbrMdEeKSd%2BcA%2FrZYb9IpMenLMMxW91hYP9Rt6DmjgzM%2BdG9Q6P9&X-Amz-Signature=4daf3c2977a7ed4a8cf20151870b29549dd648e9beb5805352b9c620f3a5971a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6FCUZX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfAp6%2FCHi0AqcKqHrW2A4qgpOEdtpixaJEYuG7UnfeCgIgWQsFAJJaKbN8WcMEo9bOr1Vw8hfQGVGZdXHQ%2B2zkVWgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDClmP%2F5peFAAH%2FZiBircAy3%2Biotzs%2BIu9N9OPSSE36UuLcBR01AIh%2FHfInb%2FZYVs1XKLejJ7roRaDwGMIYYAgxcVXf6ZGhCO2FVL5clchxcvExwQLaSuuhjgrCl%2Bnw2jvhbpfhJP2o93c7sAEvOwGQ%2FmRJhObXw6qV9JpeGLYQ0iu1Y2CGxpopViWHA76u8Jf8RKAjuHs1RrnjUvR6R0KVUGr%2FXHg%2FP6OLYodfaVHZ5jQtbP4HBFk3iyb6Q9NN%2Fb1lzZq%2F2yJQtLb6R36pw%2B%2FY01bhZXkCWhG7OjLUeOOM1V13zvJ10gfNc%2BaOQ6n3AcTIyQ%2BwC29dOezzGaiFDrBLVkXIJttOa%2BdgNxYkH3Ws3EscOgd%2BBMyRGO8zmhl4Ksh14Jvjlm21tiAWCQZpm64pgkCs5pWVneSdKzXIuVb1rTQrMla%2FdCmI8UjSS%2BsAo1xO62ebFjHqxmdO6%2B4TdFGYdL8moWRPwmxLbt0WnlMMTFphyz%2B0hNOIzylK66qhDVlxN0t%2F6N821gw8d4HVscsVY%2F5JDWfU0TwVJ4dQ7QRcNU2WUMJXx6wQAgbeWh5MM7PUFOLQd143AGyxgWYaDBUIiHn%2FStWhBKsYX2hDLZb2w7zA4i%2FUaxnDCC9VtUB418w4NtMOjqO3YPFEitMLCy1b4GOqUBqb7QTP7QDO6PUflUjydhtHteHlY9sYaFpS4NOY0NERWxCjAnPP5rxN8sVuvS88vQzBsHuak3Srp26wPMPNOgvtSfPwQnInvdoFhgKN1NhWK7ew4MPz64hRVPIPnB7P%2BVsRCwPCFqPY8Xd7ReJJ5BZhFsm6yq3VFurh4Fx522TbrMdEeKSd%2BcA%2FrZYb9IpMenLMMxW91hYP9Rt6DmjgzM%2BdG9Q6P9&X-Amz-Signature=5e67a65330826324124fff1bc0fa67bce605433dbd9c28624330115d39b95921&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6FCUZX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfAp6%2FCHi0AqcKqHrW2A4qgpOEdtpixaJEYuG7UnfeCgIgWQsFAJJaKbN8WcMEo9bOr1Vw8hfQGVGZdXHQ%2B2zkVWgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDClmP%2F5peFAAH%2FZiBircAy3%2Biotzs%2BIu9N9OPSSE36UuLcBR01AIh%2FHfInb%2FZYVs1XKLejJ7roRaDwGMIYYAgxcVXf6ZGhCO2FVL5clchxcvExwQLaSuuhjgrCl%2Bnw2jvhbpfhJP2o93c7sAEvOwGQ%2FmRJhObXw6qV9JpeGLYQ0iu1Y2CGxpopViWHA76u8Jf8RKAjuHs1RrnjUvR6R0KVUGr%2FXHg%2FP6OLYodfaVHZ5jQtbP4HBFk3iyb6Q9NN%2Fb1lzZq%2F2yJQtLb6R36pw%2B%2FY01bhZXkCWhG7OjLUeOOM1V13zvJ10gfNc%2BaOQ6n3AcTIyQ%2BwC29dOezzGaiFDrBLVkXIJttOa%2BdgNxYkH3Ws3EscOgd%2BBMyRGO8zmhl4Ksh14Jvjlm21tiAWCQZpm64pgkCs5pWVneSdKzXIuVb1rTQrMla%2FdCmI8UjSS%2BsAo1xO62ebFjHqxmdO6%2B4TdFGYdL8moWRPwmxLbt0WnlMMTFphyz%2B0hNOIzylK66qhDVlxN0t%2F6N821gw8d4HVscsVY%2F5JDWfU0TwVJ4dQ7QRcNU2WUMJXx6wQAgbeWh5MM7PUFOLQd143AGyxgWYaDBUIiHn%2FStWhBKsYX2hDLZb2w7zA4i%2FUaxnDCC9VtUB418w4NtMOjqO3YPFEitMLCy1b4GOqUBqb7QTP7QDO6PUflUjydhtHteHlY9sYaFpS4NOY0NERWxCjAnPP5rxN8sVuvS88vQzBsHuak3Srp26wPMPNOgvtSfPwQnInvdoFhgKN1NhWK7ew4MPz64hRVPIPnB7P%2BVsRCwPCFqPY8Xd7ReJJ5BZhFsm6yq3VFurh4Fx522TbrMdEeKSd%2BcA%2FrZYb9IpMenLMMxW91hYP9Rt6DmjgzM%2BdG9Q6P9&X-Amz-Signature=b4ace17bfe8010c9da808b4abd3967ab2d679f6cebcb9ca1d57452f9c9417086&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6FCUZX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfAp6%2FCHi0AqcKqHrW2A4qgpOEdtpixaJEYuG7UnfeCgIgWQsFAJJaKbN8WcMEo9bOr1Vw8hfQGVGZdXHQ%2B2zkVWgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDClmP%2F5peFAAH%2FZiBircAy3%2Biotzs%2BIu9N9OPSSE36UuLcBR01AIh%2FHfInb%2FZYVs1XKLejJ7roRaDwGMIYYAgxcVXf6ZGhCO2FVL5clchxcvExwQLaSuuhjgrCl%2Bnw2jvhbpfhJP2o93c7sAEvOwGQ%2FmRJhObXw6qV9JpeGLYQ0iu1Y2CGxpopViWHA76u8Jf8RKAjuHs1RrnjUvR6R0KVUGr%2FXHg%2FP6OLYodfaVHZ5jQtbP4HBFk3iyb6Q9NN%2Fb1lzZq%2F2yJQtLb6R36pw%2B%2FY01bhZXkCWhG7OjLUeOOM1V13zvJ10gfNc%2BaOQ6n3AcTIyQ%2BwC29dOezzGaiFDrBLVkXIJttOa%2BdgNxYkH3Ws3EscOgd%2BBMyRGO8zmhl4Ksh14Jvjlm21tiAWCQZpm64pgkCs5pWVneSdKzXIuVb1rTQrMla%2FdCmI8UjSS%2BsAo1xO62ebFjHqxmdO6%2B4TdFGYdL8moWRPwmxLbt0WnlMMTFphyz%2B0hNOIzylK66qhDVlxN0t%2F6N821gw8d4HVscsVY%2F5JDWfU0TwVJ4dQ7QRcNU2WUMJXx6wQAgbeWh5MM7PUFOLQd143AGyxgWYaDBUIiHn%2FStWhBKsYX2hDLZb2w7zA4i%2FUaxnDCC9VtUB418w4NtMOjqO3YPFEitMLCy1b4GOqUBqb7QTP7QDO6PUflUjydhtHteHlY9sYaFpS4NOY0NERWxCjAnPP5rxN8sVuvS88vQzBsHuak3Srp26wPMPNOgvtSfPwQnInvdoFhgKN1NhWK7ew4MPz64hRVPIPnB7P%2BVsRCwPCFqPY8Xd7ReJJ5BZhFsm6yq3VFurh4Fx522TbrMdEeKSd%2BcA%2FrZYb9IpMenLMMxW91hYP9Rt6DmjgzM%2BdG9Q6P9&X-Amz-Signature=06aad40fa5986694ad4b9ad2787237d915d769c9fb62409954a76252051af2da&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6FCUZX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfAp6%2FCHi0AqcKqHrW2A4qgpOEdtpixaJEYuG7UnfeCgIgWQsFAJJaKbN8WcMEo9bOr1Vw8hfQGVGZdXHQ%2B2zkVWgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDClmP%2F5peFAAH%2FZiBircAy3%2Biotzs%2BIu9N9OPSSE36UuLcBR01AIh%2FHfInb%2FZYVs1XKLejJ7roRaDwGMIYYAgxcVXf6ZGhCO2FVL5clchxcvExwQLaSuuhjgrCl%2Bnw2jvhbpfhJP2o93c7sAEvOwGQ%2FmRJhObXw6qV9JpeGLYQ0iu1Y2CGxpopViWHA76u8Jf8RKAjuHs1RrnjUvR6R0KVUGr%2FXHg%2FP6OLYodfaVHZ5jQtbP4HBFk3iyb6Q9NN%2Fb1lzZq%2F2yJQtLb6R36pw%2B%2FY01bhZXkCWhG7OjLUeOOM1V13zvJ10gfNc%2BaOQ6n3AcTIyQ%2BwC29dOezzGaiFDrBLVkXIJttOa%2BdgNxYkH3Ws3EscOgd%2BBMyRGO8zmhl4Ksh14Jvjlm21tiAWCQZpm64pgkCs5pWVneSdKzXIuVb1rTQrMla%2FdCmI8UjSS%2BsAo1xO62ebFjHqxmdO6%2B4TdFGYdL8moWRPwmxLbt0WnlMMTFphyz%2B0hNOIzylK66qhDVlxN0t%2F6N821gw8d4HVscsVY%2F5JDWfU0TwVJ4dQ7QRcNU2WUMJXx6wQAgbeWh5MM7PUFOLQd143AGyxgWYaDBUIiHn%2FStWhBKsYX2hDLZb2w7zA4i%2FUaxnDCC9VtUB418w4NtMOjqO3YPFEitMLCy1b4GOqUBqb7QTP7QDO6PUflUjydhtHteHlY9sYaFpS4NOY0NERWxCjAnPP5rxN8sVuvS88vQzBsHuak3Srp26wPMPNOgvtSfPwQnInvdoFhgKN1NhWK7ew4MPz64hRVPIPnB7P%2BVsRCwPCFqPY8Xd7ReJJ5BZhFsm6yq3VFurh4Fx522TbrMdEeKSd%2BcA%2FrZYb9IpMenLMMxW91hYP9Rt6DmjgzM%2BdG9Q6P9&X-Amz-Signature=a3fe11676059785cc24526bee89e385a63d220a2ffc4077d7dc0c7419cfbcfaa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6FCUZX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfAp6%2FCHi0AqcKqHrW2A4qgpOEdtpixaJEYuG7UnfeCgIgWQsFAJJaKbN8WcMEo9bOr1Vw8hfQGVGZdXHQ%2B2zkVWgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDClmP%2F5peFAAH%2FZiBircAy3%2Biotzs%2BIu9N9OPSSE36UuLcBR01AIh%2FHfInb%2FZYVs1XKLejJ7roRaDwGMIYYAgxcVXf6ZGhCO2FVL5clchxcvExwQLaSuuhjgrCl%2Bnw2jvhbpfhJP2o93c7sAEvOwGQ%2FmRJhObXw6qV9JpeGLYQ0iu1Y2CGxpopViWHA76u8Jf8RKAjuHs1RrnjUvR6R0KVUGr%2FXHg%2FP6OLYodfaVHZ5jQtbP4HBFk3iyb6Q9NN%2Fb1lzZq%2F2yJQtLb6R36pw%2B%2FY01bhZXkCWhG7OjLUeOOM1V13zvJ10gfNc%2BaOQ6n3AcTIyQ%2BwC29dOezzGaiFDrBLVkXIJttOa%2BdgNxYkH3Ws3EscOgd%2BBMyRGO8zmhl4Ksh14Jvjlm21tiAWCQZpm64pgkCs5pWVneSdKzXIuVb1rTQrMla%2FdCmI8UjSS%2BsAo1xO62ebFjHqxmdO6%2B4TdFGYdL8moWRPwmxLbt0WnlMMTFphyz%2B0hNOIzylK66qhDVlxN0t%2F6N821gw8d4HVscsVY%2F5JDWfU0TwVJ4dQ7QRcNU2WUMJXx6wQAgbeWh5MM7PUFOLQd143AGyxgWYaDBUIiHn%2FStWhBKsYX2hDLZb2w7zA4i%2FUaxnDCC9VtUB418w4NtMOjqO3YPFEitMLCy1b4GOqUBqb7QTP7QDO6PUflUjydhtHteHlY9sYaFpS4NOY0NERWxCjAnPP5rxN8sVuvS88vQzBsHuak3Srp26wPMPNOgvtSfPwQnInvdoFhgKN1NhWK7ew4MPz64hRVPIPnB7P%2BVsRCwPCFqPY8Xd7ReJJ5BZhFsm6yq3VFurh4Fx522TbrMdEeKSd%2BcA%2FrZYb9IpMenLMMxW91hYP9Rt6DmjgzM%2BdG9Q6P9&X-Amz-Signature=580dddaeebc5e5a5488760aef23d876233286a350f366c93a635e260afa41af1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6FCUZX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfAp6%2FCHi0AqcKqHrW2A4qgpOEdtpixaJEYuG7UnfeCgIgWQsFAJJaKbN8WcMEo9bOr1Vw8hfQGVGZdXHQ%2B2zkVWgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDClmP%2F5peFAAH%2FZiBircAy3%2Biotzs%2BIu9N9OPSSE36UuLcBR01AIh%2FHfInb%2FZYVs1XKLejJ7roRaDwGMIYYAgxcVXf6ZGhCO2FVL5clchxcvExwQLaSuuhjgrCl%2Bnw2jvhbpfhJP2o93c7sAEvOwGQ%2FmRJhObXw6qV9JpeGLYQ0iu1Y2CGxpopViWHA76u8Jf8RKAjuHs1RrnjUvR6R0KVUGr%2FXHg%2FP6OLYodfaVHZ5jQtbP4HBFk3iyb6Q9NN%2Fb1lzZq%2F2yJQtLb6R36pw%2B%2FY01bhZXkCWhG7OjLUeOOM1V13zvJ10gfNc%2BaOQ6n3AcTIyQ%2BwC29dOezzGaiFDrBLVkXIJttOa%2BdgNxYkH3Ws3EscOgd%2BBMyRGO8zmhl4Ksh14Jvjlm21tiAWCQZpm64pgkCs5pWVneSdKzXIuVb1rTQrMla%2FdCmI8UjSS%2BsAo1xO62ebFjHqxmdO6%2B4TdFGYdL8moWRPwmxLbt0WnlMMTFphyz%2B0hNOIzylK66qhDVlxN0t%2F6N821gw8d4HVscsVY%2F5JDWfU0TwVJ4dQ7QRcNU2WUMJXx6wQAgbeWh5MM7PUFOLQd143AGyxgWYaDBUIiHn%2FStWhBKsYX2hDLZb2w7zA4i%2FUaxnDCC9VtUB418w4NtMOjqO3YPFEitMLCy1b4GOqUBqb7QTP7QDO6PUflUjydhtHteHlY9sYaFpS4NOY0NERWxCjAnPP5rxN8sVuvS88vQzBsHuak3Srp26wPMPNOgvtSfPwQnInvdoFhgKN1NhWK7ew4MPz64hRVPIPnB7P%2BVsRCwPCFqPY8Xd7ReJJ5BZhFsm6yq3VFurh4Fx522TbrMdEeKSd%2BcA%2FrZYb9IpMenLMMxW91hYP9Rt6DmjgzM%2BdG9Q6P9&X-Amz-Signature=e304ad7bcb2f6b0c902209a02049ae7d00263602d142de5a01ef13601bfc54a7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

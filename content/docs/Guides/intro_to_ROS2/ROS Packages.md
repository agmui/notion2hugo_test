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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPVYILR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHYCEH9lvAZNe7GdsldRACw%2FWR0t76DM%2BnQoVNU31sEPAiEA2ufYVllBj8U%2BJHTcIzpsOWtg%2FV%2F%2BoI4gp5v9vUWDXa0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa%2B11TbrX9swJ0sDSrcA7Dq1trZbmcCQaDhw11qtBjXzyOjMpylEPxbT4IMInZKg75JO%2Bxm%2FD6bcjoJb4DvYCcj1bf6A%2FzYdQs7LrLToTZn21%2FanFUG1GHhQ89CG8JPe5KX8Ic3QHpurdbJUI5CDawLIBGm3kXT8TKexaqkBcyBMYtxKtwziO%2BgggLqLFxpLMP8BkSPp%2FXlMRou4J%2B2f1NjYDg2r6T%2BYxYA%2FxDfvw3WmpfPMWgtYtAza%2FYfhpyOBjENk0ogn8BVU0ne4Y%2FUZAgP4jR3YcVRRC5eB3KCSKXPwHITmVRkWfhoLIAVAqo2d3rlJqntRq9AGNkxAsQmifLHoRFWIiomQu%2BgeGaUUN3krYE5joz5VZLA%2FYnxoLQ%2FWOp7iXN9gr57wreMc5yDv3jfLy4LgWWSAxcmgcjfqRw%2Fw3i1uLVg3vtzeru6t7e%2BmHuAN6AoCOK6fLFblvK7tsjP%2BB8DRKeOe29ig6D0n1%2B0IDYR5j1HE8tFM7GcS8acKaoKe3Q%2F0tWeiA3W%2Fv5K2BLMgHoVyN4S2YwPtdYaIfLBCo9bACJnn2A2bxc5xge6cyCtRU0QfBvy%2FK2hHF2tPNQvXQ7kSytDYq16SEKQtVakV2Hgf2cE2cDB4QM75ONtTFSldm7aV3IuMlFVMN3HuL8GOqUBGEzas6Z7dQi6bYoaPZ6ZHLw1uPYjXtOEuUPOMJUADYmzgbYm%2B61ddGFfklpB%2F%2BnToABameyXIKRHS3uPN6%2BUGj7YHNMuc3J1R4wahXGmv5ZsmJGofNF3Vj6y9tewOqEcLvJBVwSJaSEg4OD3jqzmihkRjqdvqXTWET%2Fd79KKbHSzrCHY%2Bb3%2F3XkfbqftYf9Pdz%2FAL%2BZW2DqVD9ALAY7jouLJDAZN&X-Amz-Signature=361c188a1922f8ba79907b34f2a3cbaee7b54b0999e1ea7a0a1cc1fa1070b21a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPVYILR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHYCEH9lvAZNe7GdsldRACw%2FWR0t76DM%2BnQoVNU31sEPAiEA2ufYVllBj8U%2BJHTcIzpsOWtg%2FV%2F%2BoI4gp5v9vUWDXa0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa%2B11TbrX9swJ0sDSrcA7Dq1trZbmcCQaDhw11qtBjXzyOjMpylEPxbT4IMInZKg75JO%2Bxm%2FD6bcjoJb4DvYCcj1bf6A%2FzYdQs7LrLToTZn21%2FanFUG1GHhQ89CG8JPe5KX8Ic3QHpurdbJUI5CDawLIBGm3kXT8TKexaqkBcyBMYtxKtwziO%2BgggLqLFxpLMP8BkSPp%2FXlMRou4J%2B2f1NjYDg2r6T%2BYxYA%2FxDfvw3WmpfPMWgtYtAza%2FYfhpyOBjENk0ogn8BVU0ne4Y%2FUZAgP4jR3YcVRRC5eB3KCSKXPwHITmVRkWfhoLIAVAqo2d3rlJqntRq9AGNkxAsQmifLHoRFWIiomQu%2BgeGaUUN3krYE5joz5VZLA%2FYnxoLQ%2FWOp7iXN9gr57wreMc5yDv3jfLy4LgWWSAxcmgcjfqRw%2Fw3i1uLVg3vtzeru6t7e%2BmHuAN6AoCOK6fLFblvK7tsjP%2BB8DRKeOe29ig6D0n1%2B0IDYR5j1HE8tFM7GcS8acKaoKe3Q%2F0tWeiA3W%2Fv5K2BLMgHoVyN4S2YwPtdYaIfLBCo9bACJnn2A2bxc5xge6cyCtRU0QfBvy%2FK2hHF2tPNQvXQ7kSytDYq16SEKQtVakV2Hgf2cE2cDB4QM75ONtTFSldm7aV3IuMlFVMN3HuL8GOqUBGEzas6Z7dQi6bYoaPZ6ZHLw1uPYjXtOEuUPOMJUADYmzgbYm%2B61ddGFfklpB%2F%2BnToABameyXIKRHS3uPN6%2BUGj7YHNMuc3J1R4wahXGmv5ZsmJGofNF3Vj6y9tewOqEcLvJBVwSJaSEg4OD3jqzmihkRjqdvqXTWET%2Fd79KKbHSzrCHY%2Bb3%2F3XkfbqftYf9Pdz%2FAL%2BZW2DqVD9ALAY7jouLJDAZN&X-Amz-Signature=962bb38c98410567fad909bf3b36bfb28d68c15232786924a8a3b33c6c851f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPVYILR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHYCEH9lvAZNe7GdsldRACw%2FWR0t76DM%2BnQoVNU31sEPAiEA2ufYVllBj8U%2BJHTcIzpsOWtg%2FV%2F%2BoI4gp5v9vUWDXa0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa%2B11TbrX9swJ0sDSrcA7Dq1trZbmcCQaDhw11qtBjXzyOjMpylEPxbT4IMInZKg75JO%2Bxm%2FD6bcjoJb4DvYCcj1bf6A%2FzYdQs7LrLToTZn21%2FanFUG1GHhQ89CG8JPe5KX8Ic3QHpurdbJUI5CDawLIBGm3kXT8TKexaqkBcyBMYtxKtwziO%2BgggLqLFxpLMP8BkSPp%2FXlMRou4J%2B2f1NjYDg2r6T%2BYxYA%2FxDfvw3WmpfPMWgtYtAza%2FYfhpyOBjENk0ogn8BVU0ne4Y%2FUZAgP4jR3YcVRRC5eB3KCSKXPwHITmVRkWfhoLIAVAqo2d3rlJqntRq9AGNkxAsQmifLHoRFWIiomQu%2BgeGaUUN3krYE5joz5VZLA%2FYnxoLQ%2FWOp7iXN9gr57wreMc5yDv3jfLy4LgWWSAxcmgcjfqRw%2Fw3i1uLVg3vtzeru6t7e%2BmHuAN6AoCOK6fLFblvK7tsjP%2BB8DRKeOe29ig6D0n1%2B0IDYR5j1HE8tFM7GcS8acKaoKe3Q%2F0tWeiA3W%2Fv5K2BLMgHoVyN4S2YwPtdYaIfLBCo9bACJnn2A2bxc5xge6cyCtRU0QfBvy%2FK2hHF2tPNQvXQ7kSytDYq16SEKQtVakV2Hgf2cE2cDB4QM75ONtTFSldm7aV3IuMlFVMN3HuL8GOqUBGEzas6Z7dQi6bYoaPZ6ZHLw1uPYjXtOEuUPOMJUADYmzgbYm%2B61ddGFfklpB%2F%2BnToABameyXIKRHS3uPN6%2BUGj7YHNMuc3J1R4wahXGmv5ZsmJGofNF3Vj6y9tewOqEcLvJBVwSJaSEg4OD3jqzmihkRjqdvqXTWET%2Fd79KKbHSzrCHY%2Bb3%2F3XkfbqftYf9Pdz%2FAL%2BZW2DqVD9ALAY7jouLJDAZN&X-Amz-Signature=1ad26e569911aaa5667bbd3fa21e24ce78a2be547de99ace871bf98b7b54a5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPVYILR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHYCEH9lvAZNe7GdsldRACw%2FWR0t76DM%2BnQoVNU31sEPAiEA2ufYVllBj8U%2BJHTcIzpsOWtg%2FV%2F%2BoI4gp5v9vUWDXa0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa%2B11TbrX9swJ0sDSrcA7Dq1trZbmcCQaDhw11qtBjXzyOjMpylEPxbT4IMInZKg75JO%2Bxm%2FD6bcjoJb4DvYCcj1bf6A%2FzYdQs7LrLToTZn21%2FanFUG1GHhQ89CG8JPe5KX8Ic3QHpurdbJUI5CDawLIBGm3kXT8TKexaqkBcyBMYtxKtwziO%2BgggLqLFxpLMP8BkSPp%2FXlMRou4J%2B2f1NjYDg2r6T%2BYxYA%2FxDfvw3WmpfPMWgtYtAza%2FYfhpyOBjENk0ogn8BVU0ne4Y%2FUZAgP4jR3YcVRRC5eB3KCSKXPwHITmVRkWfhoLIAVAqo2d3rlJqntRq9AGNkxAsQmifLHoRFWIiomQu%2BgeGaUUN3krYE5joz5VZLA%2FYnxoLQ%2FWOp7iXN9gr57wreMc5yDv3jfLy4LgWWSAxcmgcjfqRw%2Fw3i1uLVg3vtzeru6t7e%2BmHuAN6AoCOK6fLFblvK7tsjP%2BB8DRKeOe29ig6D0n1%2B0IDYR5j1HE8tFM7GcS8acKaoKe3Q%2F0tWeiA3W%2Fv5K2BLMgHoVyN4S2YwPtdYaIfLBCo9bACJnn2A2bxc5xge6cyCtRU0QfBvy%2FK2hHF2tPNQvXQ7kSytDYq16SEKQtVakV2Hgf2cE2cDB4QM75ONtTFSldm7aV3IuMlFVMN3HuL8GOqUBGEzas6Z7dQi6bYoaPZ6ZHLw1uPYjXtOEuUPOMJUADYmzgbYm%2B61ddGFfklpB%2F%2BnToABameyXIKRHS3uPN6%2BUGj7YHNMuc3J1R4wahXGmv5ZsmJGofNF3Vj6y9tewOqEcLvJBVwSJaSEg4OD3jqzmihkRjqdvqXTWET%2Fd79KKbHSzrCHY%2Bb3%2F3XkfbqftYf9Pdz%2FAL%2BZW2DqVD9ALAY7jouLJDAZN&X-Amz-Signature=a5e9aeabc3582e8c2dc78a5110fc956031e0ee9826c61a2d28becbebcab8dd10&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPVYILR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHYCEH9lvAZNe7GdsldRACw%2FWR0t76DM%2BnQoVNU31sEPAiEA2ufYVllBj8U%2BJHTcIzpsOWtg%2FV%2F%2BoI4gp5v9vUWDXa0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa%2B11TbrX9swJ0sDSrcA7Dq1trZbmcCQaDhw11qtBjXzyOjMpylEPxbT4IMInZKg75JO%2Bxm%2FD6bcjoJb4DvYCcj1bf6A%2FzYdQs7LrLToTZn21%2FanFUG1GHhQ89CG8JPe5KX8Ic3QHpurdbJUI5CDawLIBGm3kXT8TKexaqkBcyBMYtxKtwziO%2BgggLqLFxpLMP8BkSPp%2FXlMRou4J%2B2f1NjYDg2r6T%2BYxYA%2FxDfvw3WmpfPMWgtYtAza%2FYfhpyOBjENk0ogn8BVU0ne4Y%2FUZAgP4jR3YcVRRC5eB3KCSKXPwHITmVRkWfhoLIAVAqo2d3rlJqntRq9AGNkxAsQmifLHoRFWIiomQu%2BgeGaUUN3krYE5joz5VZLA%2FYnxoLQ%2FWOp7iXN9gr57wreMc5yDv3jfLy4LgWWSAxcmgcjfqRw%2Fw3i1uLVg3vtzeru6t7e%2BmHuAN6AoCOK6fLFblvK7tsjP%2BB8DRKeOe29ig6D0n1%2B0IDYR5j1HE8tFM7GcS8acKaoKe3Q%2F0tWeiA3W%2Fv5K2BLMgHoVyN4S2YwPtdYaIfLBCo9bACJnn2A2bxc5xge6cyCtRU0QfBvy%2FK2hHF2tPNQvXQ7kSytDYq16SEKQtVakV2Hgf2cE2cDB4QM75ONtTFSldm7aV3IuMlFVMN3HuL8GOqUBGEzas6Z7dQi6bYoaPZ6ZHLw1uPYjXtOEuUPOMJUADYmzgbYm%2B61ddGFfklpB%2F%2BnToABameyXIKRHS3uPN6%2BUGj7YHNMuc3J1R4wahXGmv5ZsmJGofNF3Vj6y9tewOqEcLvJBVwSJaSEg4OD3jqzmihkRjqdvqXTWET%2Fd79KKbHSzrCHY%2Bb3%2F3XkfbqftYf9Pdz%2FAL%2BZW2DqVD9ALAY7jouLJDAZN&X-Amz-Signature=0ef841f6784d6044d58673d200140db9dfdcf9c96aec40827a0ec27eae10bee3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPVYILR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHYCEH9lvAZNe7GdsldRACw%2FWR0t76DM%2BnQoVNU31sEPAiEA2ufYVllBj8U%2BJHTcIzpsOWtg%2FV%2F%2BoI4gp5v9vUWDXa0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa%2B11TbrX9swJ0sDSrcA7Dq1trZbmcCQaDhw11qtBjXzyOjMpylEPxbT4IMInZKg75JO%2Bxm%2FD6bcjoJb4DvYCcj1bf6A%2FzYdQs7LrLToTZn21%2FanFUG1GHhQ89CG8JPe5KX8Ic3QHpurdbJUI5CDawLIBGm3kXT8TKexaqkBcyBMYtxKtwziO%2BgggLqLFxpLMP8BkSPp%2FXlMRou4J%2B2f1NjYDg2r6T%2BYxYA%2FxDfvw3WmpfPMWgtYtAza%2FYfhpyOBjENk0ogn8BVU0ne4Y%2FUZAgP4jR3YcVRRC5eB3KCSKXPwHITmVRkWfhoLIAVAqo2d3rlJqntRq9AGNkxAsQmifLHoRFWIiomQu%2BgeGaUUN3krYE5joz5VZLA%2FYnxoLQ%2FWOp7iXN9gr57wreMc5yDv3jfLy4LgWWSAxcmgcjfqRw%2Fw3i1uLVg3vtzeru6t7e%2BmHuAN6AoCOK6fLFblvK7tsjP%2BB8DRKeOe29ig6D0n1%2B0IDYR5j1HE8tFM7GcS8acKaoKe3Q%2F0tWeiA3W%2Fv5K2BLMgHoVyN4S2YwPtdYaIfLBCo9bACJnn2A2bxc5xge6cyCtRU0QfBvy%2FK2hHF2tPNQvXQ7kSytDYq16SEKQtVakV2Hgf2cE2cDB4QM75ONtTFSldm7aV3IuMlFVMN3HuL8GOqUBGEzas6Z7dQi6bYoaPZ6ZHLw1uPYjXtOEuUPOMJUADYmzgbYm%2B61ddGFfklpB%2F%2BnToABameyXIKRHS3uPN6%2BUGj7YHNMuc3J1R4wahXGmv5ZsmJGofNF3Vj6y9tewOqEcLvJBVwSJaSEg4OD3jqzmihkRjqdvqXTWET%2Fd79KKbHSzrCHY%2Bb3%2F3XkfbqftYf9Pdz%2FAL%2BZW2DqVD9ALAY7jouLJDAZN&X-Amz-Signature=04d51a52b36baf2c51dd366b05e7fe3f33a486b723e93dc199170d51cd64afc9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPVYILR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHYCEH9lvAZNe7GdsldRACw%2FWR0t76DM%2BnQoVNU31sEPAiEA2ufYVllBj8U%2BJHTcIzpsOWtg%2FV%2F%2BoI4gp5v9vUWDXa0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa%2B11TbrX9swJ0sDSrcA7Dq1trZbmcCQaDhw11qtBjXzyOjMpylEPxbT4IMInZKg75JO%2Bxm%2FD6bcjoJb4DvYCcj1bf6A%2FzYdQs7LrLToTZn21%2FanFUG1GHhQ89CG8JPe5KX8Ic3QHpurdbJUI5CDawLIBGm3kXT8TKexaqkBcyBMYtxKtwziO%2BgggLqLFxpLMP8BkSPp%2FXlMRou4J%2B2f1NjYDg2r6T%2BYxYA%2FxDfvw3WmpfPMWgtYtAza%2FYfhpyOBjENk0ogn8BVU0ne4Y%2FUZAgP4jR3YcVRRC5eB3KCSKXPwHITmVRkWfhoLIAVAqo2d3rlJqntRq9AGNkxAsQmifLHoRFWIiomQu%2BgeGaUUN3krYE5joz5VZLA%2FYnxoLQ%2FWOp7iXN9gr57wreMc5yDv3jfLy4LgWWSAxcmgcjfqRw%2Fw3i1uLVg3vtzeru6t7e%2BmHuAN6AoCOK6fLFblvK7tsjP%2BB8DRKeOe29ig6D0n1%2B0IDYR5j1HE8tFM7GcS8acKaoKe3Q%2F0tWeiA3W%2Fv5K2BLMgHoVyN4S2YwPtdYaIfLBCo9bACJnn2A2bxc5xge6cyCtRU0QfBvy%2FK2hHF2tPNQvXQ7kSytDYq16SEKQtVakV2Hgf2cE2cDB4QM75ONtTFSldm7aV3IuMlFVMN3HuL8GOqUBGEzas6Z7dQi6bYoaPZ6ZHLw1uPYjXtOEuUPOMJUADYmzgbYm%2B61ddGFfklpB%2F%2BnToABameyXIKRHS3uPN6%2BUGj7YHNMuc3J1R4wahXGmv5ZsmJGofNF3Vj6y9tewOqEcLvJBVwSJaSEg4OD3jqzmihkRjqdvqXTWET%2Fd79KKbHSzrCHY%2Bb3%2F3XkfbqftYf9Pdz%2FAL%2BZW2DqVD9ALAY7jouLJDAZN&X-Amz-Signature=6c58b2fc30e4d72341fda04a9e74d7a4c5d8ea5447e078c15a6c9c840997f973&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

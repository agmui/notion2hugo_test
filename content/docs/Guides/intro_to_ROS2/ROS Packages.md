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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6VUON%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCOccAxCI1Lh837lFEAQA4gGjeUL3OYyKzDp2UVKJdzeAIgCSEmXhO2kybBZS4uw3lmPxnL9SYOndQUaPG1vNcocK0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMOVopo3siDhoKijfSrcA1Pd20GOGwQZ0%2FUE2SuMyRXCetvb%2FKMOWm1rzJABPERWmqn1Kx0hQl57wRtHbz49hLSPOzxB8tMytJkzZuRPhL1iwYd6Wj9R6EoTOoAYUbWl5rZm86xGw0uVvD54%2BF61%2BMVvb7D00NlI%2B7QBMIbfc%2FJieizsxX8aw6jXlvdX7W91yD%2BTQrGm8mM%2FGOOIRWMF%2FHpRhqkXuhqb1TbYOuEI8Za1rWFdDDe5vwX2v7BlpMXYhTkszA3xD0jMj5eeWPSd3LIrd%2Fy4iLyNctEw9QqBhA7stfs3rZKbmyyn76ywbN%2BdxND%2FnYxRylXJPY3dq6IWR6BNIjoi0EH1qbhJ0K7q0Lgv%2F0KpYVQ3fLkfLIjqFP1OFzu94kvf%2F80GPpuYzzuxKMDUBLsXC42aVfPYiKXgW9S8p%2BEjQaKta4TAy%2Fu7VMpd1rczUwtUvobrb6lqYARpBqEFvXgC%2F1YIu9n54F1cqLJb%2FyzWUHrYi86qlfn3bcbdmW6y6x4WEJw3nBG8lFOK4MPCB1BBotL28L3UB6B2F8A%2B6EYYIcuBH8YamXxX6R8LdZh23kY0ENi5UKuq0XctEsn2JppLT6doysm7MYjlZ%2BpUV%2BNgKibW3XzgdV74h3dTN1fzZt9rhZJpB35zMNLBk8QGOqUBIjz0jcapwELijL6FhrUVJW2ZbFfW9Wppsx7Z76fIcZduS9AZwIGhsQIueIcd3KDRrJ1U9EKgGv7pUa3C4kFiiZ8JN5QjDoEYrHWmp4Wy8h%2BxUrhrMFJgw5L6sy%2Bno9JU2JKcUp0LvXAUMVm51u4RrTT9hB%2FmJyJMkmGtapG5YQocV2YbrpghAMTFZ6WtYKOfQHahaRAL15aGqdKNI%2BJ9Wq4EGodo&X-Amz-Signature=5c201b1597e650c1a4104a8f2a9089f9f0fc2be3c68ec8003a5a39d8b1e06ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6VUON%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCOccAxCI1Lh837lFEAQA4gGjeUL3OYyKzDp2UVKJdzeAIgCSEmXhO2kybBZS4uw3lmPxnL9SYOndQUaPG1vNcocK0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMOVopo3siDhoKijfSrcA1Pd20GOGwQZ0%2FUE2SuMyRXCetvb%2FKMOWm1rzJABPERWmqn1Kx0hQl57wRtHbz49hLSPOzxB8tMytJkzZuRPhL1iwYd6Wj9R6EoTOoAYUbWl5rZm86xGw0uVvD54%2BF61%2BMVvb7D00NlI%2B7QBMIbfc%2FJieizsxX8aw6jXlvdX7W91yD%2BTQrGm8mM%2FGOOIRWMF%2FHpRhqkXuhqb1TbYOuEI8Za1rWFdDDe5vwX2v7BlpMXYhTkszA3xD0jMj5eeWPSd3LIrd%2Fy4iLyNctEw9QqBhA7stfs3rZKbmyyn76ywbN%2BdxND%2FnYxRylXJPY3dq6IWR6BNIjoi0EH1qbhJ0K7q0Lgv%2F0KpYVQ3fLkfLIjqFP1OFzu94kvf%2F80GPpuYzzuxKMDUBLsXC42aVfPYiKXgW9S8p%2BEjQaKta4TAy%2Fu7VMpd1rczUwtUvobrb6lqYARpBqEFvXgC%2F1YIu9n54F1cqLJb%2FyzWUHrYi86qlfn3bcbdmW6y6x4WEJw3nBG8lFOK4MPCB1BBotL28L3UB6B2F8A%2B6EYYIcuBH8YamXxX6R8LdZh23kY0ENi5UKuq0XctEsn2JppLT6doysm7MYjlZ%2BpUV%2BNgKibW3XzgdV74h3dTN1fzZt9rhZJpB35zMNLBk8QGOqUBIjz0jcapwELijL6FhrUVJW2ZbFfW9Wppsx7Z76fIcZduS9AZwIGhsQIueIcd3KDRrJ1U9EKgGv7pUa3C4kFiiZ8JN5QjDoEYrHWmp4Wy8h%2BxUrhrMFJgw5L6sy%2Bno9JU2JKcUp0LvXAUMVm51u4RrTT9hB%2FmJyJMkmGtapG5YQocV2YbrpghAMTFZ6WtYKOfQHahaRAL15aGqdKNI%2BJ9Wq4EGodo&X-Amz-Signature=936aa600172e760028acab06c1bf41c34e5e1199e047301a03520c0415873eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6VUON%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCOccAxCI1Lh837lFEAQA4gGjeUL3OYyKzDp2UVKJdzeAIgCSEmXhO2kybBZS4uw3lmPxnL9SYOndQUaPG1vNcocK0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMOVopo3siDhoKijfSrcA1Pd20GOGwQZ0%2FUE2SuMyRXCetvb%2FKMOWm1rzJABPERWmqn1Kx0hQl57wRtHbz49hLSPOzxB8tMytJkzZuRPhL1iwYd6Wj9R6EoTOoAYUbWl5rZm86xGw0uVvD54%2BF61%2BMVvb7D00NlI%2B7QBMIbfc%2FJieizsxX8aw6jXlvdX7W91yD%2BTQrGm8mM%2FGOOIRWMF%2FHpRhqkXuhqb1TbYOuEI8Za1rWFdDDe5vwX2v7BlpMXYhTkszA3xD0jMj5eeWPSd3LIrd%2Fy4iLyNctEw9QqBhA7stfs3rZKbmyyn76ywbN%2BdxND%2FnYxRylXJPY3dq6IWR6BNIjoi0EH1qbhJ0K7q0Lgv%2F0KpYVQ3fLkfLIjqFP1OFzu94kvf%2F80GPpuYzzuxKMDUBLsXC42aVfPYiKXgW9S8p%2BEjQaKta4TAy%2Fu7VMpd1rczUwtUvobrb6lqYARpBqEFvXgC%2F1YIu9n54F1cqLJb%2FyzWUHrYi86qlfn3bcbdmW6y6x4WEJw3nBG8lFOK4MPCB1BBotL28L3UB6B2F8A%2B6EYYIcuBH8YamXxX6R8LdZh23kY0ENi5UKuq0XctEsn2JppLT6doysm7MYjlZ%2BpUV%2BNgKibW3XzgdV74h3dTN1fzZt9rhZJpB35zMNLBk8QGOqUBIjz0jcapwELijL6FhrUVJW2ZbFfW9Wppsx7Z76fIcZduS9AZwIGhsQIueIcd3KDRrJ1U9EKgGv7pUa3C4kFiiZ8JN5QjDoEYrHWmp4Wy8h%2BxUrhrMFJgw5L6sy%2Bno9JU2JKcUp0LvXAUMVm51u4RrTT9hB%2FmJyJMkmGtapG5YQocV2YbrpghAMTFZ6WtYKOfQHahaRAL15aGqdKNI%2BJ9Wq4EGodo&X-Amz-Signature=3339f6d4e9c9e4049fdaf3a66804245a7205289c21a02e4d8336107f8d385a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6VUON%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCOccAxCI1Lh837lFEAQA4gGjeUL3OYyKzDp2UVKJdzeAIgCSEmXhO2kybBZS4uw3lmPxnL9SYOndQUaPG1vNcocK0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMOVopo3siDhoKijfSrcA1Pd20GOGwQZ0%2FUE2SuMyRXCetvb%2FKMOWm1rzJABPERWmqn1Kx0hQl57wRtHbz49hLSPOzxB8tMytJkzZuRPhL1iwYd6Wj9R6EoTOoAYUbWl5rZm86xGw0uVvD54%2BF61%2BMVvb7D00NlI%2B7QBMIbfc%2FJieizsxX8aw6jXlvdX7W91yD%2BTQrGm8mM%2FGOOIRWMF%2FHpRhqkXuhqb1TbYOuEI8Za1rWFdDDe5vwX2v7BlpMXYhTkszA3xD0jMj5eeWPSd3LIrd%2Fy4iLyNctEw9QqBhA7stfs3rZKbmyyn76ywbN%2BdxND%2FnYxRylXJPY3dq6IWR6BNIjoi0EH1qbhJ0K7q0Lgv%2F0KpYVQ3fLkfLIjqFP1OFzu94kvf%2F80GPpuYzzuxKMDUBLsXC42aVfPYiKXgW9S8p%2BEjQaKta4TAy%2Fu7VMpd1rczUwtUvobrb6lqYARpBqEFvXgC%2F1YIu9n54F1cqLJb%2FyzWUHrYi86qlfn3bcbdmW6y6x4WEJw3nBG8lFOK4MPCB1BBotL28L3UB6B2F8A%2B6EYYIcuBH8YamXxX6R8LdZh23kY0ENi5UKuq0XctEsn2JppLT6doysm7MYjlZ%2BpUV%2BNgKibW3XzgdV74h3dTN1fzZt9rhZJpB35zMNLBk8QGOqUBIjz0jcapwELijL6FhrUVJW2ZbFfW9Wppsx7Z76fIcZduS9AZwIGhsQIueIcd3KDRrJ1U9EKgGv7pUa3C4kFiiZ8JN5QjDoEYrHWmp4Wy8h%2BxUrhrMFJgw5L6sy%2Bno9JU2JKcUp0LvXAUMVm51u4RrTT9hB%2FmJyJMkmGtapG5YQocV2YbrpghAMTFZ6WtYKOfQHahaRAL15aGqdKNI%2BJ9Wq4EGodo&X-Amz-Signature=cd3ba2ea2767e119ac68fd788a9c9716f2b3a1ff60b1b60058f14d4658a6b0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6VUON%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCOccAxCI1Lh837lFEAQA4gGjeUL3OYyKzDp2UVKJdzeAIgCSEmXhO2kybBZS4uw3lmPxnL9SYOndQUaPG1vNcocK0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMOVopo3siDhoKijfSrcA1Pd20GOGwQZ0%2FUE2SuMyRXCetvb%2FKMOWm1rzJABPERWmqn1Kx0hQl57wRtHbz49hLSPOzxB8tMytJkzZuRPhL1iwYd6Wj9R6EoTOoAYUbWl5rZm86xGw0uVvD54%2BF61%2BMVvb7D00NlI%2B7QBMIbfc%2FJieizsxX8aw6jXlvdX7W91yD%2BTQrGm8mM%2FGOOIRWMF%2FHpRhqkXuhqb1TbYOuEI8Za1rWFdDDe5vwX2v7BlpMXYhTkszA3xD0jMj5eeWPSd3LIrd%2Fy4iLyNctEw9QqBhA7stfs3rZKbmyyn76ywbN%2BdxND%2FnYxRylXJPY3dq6IWR6BNIjoi0EH1qbhJ0K7q0Lgv%2F0KpYVQ3fLkfLIjqFP1OFzu94kvf%2F80GPpuYzzuxKMDUBLsXC42aVfPYiKXgW9S8p%2BEjQaKta4TAy%2Fu7VMpd1rczUwtUvobrb6lqYARpBqEFvXgC%2F1YIu9n54F1cqLJb%2FyzWUHrYi86qlfn3bcbdmW6y6x4WEJw3nBG8lFOK4MPCB1BBotL28L3UB6B2F8A%2B6EYYIcuBH8YamXxX6R8LdZh23kY0ENi5UKuq0XctEsn2JppLT6doysm7MYjlZ%2BpUV%2BNgKibW3XzgdV74h3dTN1fzZt9rhZJpB35zMNLBk8QGOqUBIjz0jcapwELijL6FhrUVJW2ZbFfW9Wppsx7Z76fIcZduS9AZwIGhsQIueIcd3KDRrJ1U9EKgGv7pUa3C4kFiiZ8JN5QjDoEYrHWmp4Wy8h%2BxUrhrMFJgw5L6sy%2Bno9JU2JKcUp0LvXAUMVm51u4RrTT9hB%2FmJyJMkmGtapG5YQocV2YbrpghAMTFZ6WtYKOfQHahaRAL15aGqdKNI%2BJ9Wq4EGodo&X-Amz-Signature=5d179258212a0b0311cb3c31de20d90502481786eab0730b1360a6e0ef4a6b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6VUON%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCOccAxCI1Lh837lFEAQA4gGjeUL3OYyKzDp2UVKJdzeAIgCSEmXhO2kybBZS4uw3lmPxnL9SYOndQUaPG1vNcocK0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMOVopo3siDhoKijfSrcA1Pd20GOGwQZ0%2FUE2SuMyRXCetvb%2FKMOWm1rzJABPERWmqn1Kx0hQl57wRtHbz49hLSPOzxB8tMytJkzZuRPhL1iwYd6Wj9R6EoTOoAYUbWl5rZm86xGw0uVvD54%2BF61%2BMVvb7D00NlI%2B7QBMIbfc%2FJieizsxX8aw6jXlvdX7W91yD%2BTQrGm8mM%2FGOOIRWMF%2FHpRhqkXuhqb1TbYOuEI8Za1rWFdDDe5vwX2v7BlpMXYhTkszA3xD0jMj5eeWPSd3LIrd%2Fy4iLyNctEw9QqBhA7stfs3rZKbmyyn76ywbN%2BdxND%2FnYxRylXJPY3dq6IWR6BNIjoi0EH1qbhJ0K7q0Lgv%2F0KpYVQ3fLkfLIjqFP1OFzu94kvf%2F80GPpuYzzuxKMDUBLsXC42aVfPYiKXgW9S8p%2BEjQaKta4TAy%2Fu7VMpd1rczUwtUvobrb6lqYARpBqEFvXgC%2F1YIu9n54F1cqLJb%2FyzWUHrYi86qlfn3bcbdmW6y6x4WEJw3nBG8lFOK4MPCB1BBotL28L3UB6B2F8A%2B6EYYIcuBH8YamXxX6R8LdZh23kY0ENi5UKuq0XctEsn2JppLT6doysm7MYjlZ%2BpUV%2BNgKibW3XzgdV74h3dTN1fzZt9rhZJpB35zMNLBk8QGOqUBIjz0jcapwELijL6FhrUVJW2ZbFfW9Wppsx7Z76fIcZduS9AZwIGhsQIueIcd3KDRrJ1U9EKgGv7pUa3C4kFiiZ8JN5QjDoEYrHWmp4Wy8h%2BxUrhrMFJgw5L6sy%2Bno9JU2JKcUp0LvXAUMVm51u4RrTT9hB%2FmJyJMkmGtapG5YQocV2YbrpghAMTFZ6WtYKOfQHahaRAL15aGqdKNI%2BJ9Wq4EGodo&X-Amz-Signature=3afa9c20a8441086548e9b0410c5724ad9fdf6dbd3fcf7c403b7608f6486663f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6VUON%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCOccAxCI1Lh837lFEAQA4gGjeUL3OYyKzDp2UVKJdzeAIgCSEmXhO2kybBZS4uw3lmPxnL9SYOndQUaPG1vNcocK0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMOVopo3siDhoKijfSrcA1Pd20GOGwQZ0%2FUE2SuMyRXCetvb%2FKMOWm1rzJABPERWmqn1Kx0hQl57wRtHbz49hLSPOzxB8tMytJkzZuRPhL1iwYd6Wj9R6EoTOoAYUbWl5rZm86xGw0uVvD54%2BF61%2BMVvb7D00NlI%2B7QBMIbfc%2FJieizsxX8aw6jXlvdX7W91yD%2BTQrGm8mM%2FGOOIRWMF%2FHpRhqkXuhqb1TbYOuEI8Za1rWFdDDe5vwX2v7BlpMXYhTkszA3xD0jMj5eeWPSd3LIrd%2Fy4iLyNctEw9QqBhA7stfs3rZKbmyyn76ywbN%2BdxND%2FnYxRylXJPY3dq6IWR6BNIjoi0EH1qbhJ0K7q0Lgv%2F0KpYVQ3fLkfLIjqFP1OFzu94kvf%2F80GPpuYzzuxKMDUBLsXC42aVfPYiKXgW9S8p%2BEjQaKta4TAy%2Fu7VMpd1rczUwtUvobrb6lqYARpBqEFvXgC%2F1YIu9n54F1cqLJb%2FyzWUHrYi86qlfn3bcbdmW6y6x4WEJw3nBG8lFOK4MPCB1BBotL28L3UB6B2F8A%2B6EYYIcuBH8YamXxX6R8LdZh23kY0ENi5UKuq0XctEsn2JppLT6doysm7MYjlZ%2BpUV%2BNgKibW3XzgdV74h3dTN1fzZt9rhZJpB35zMNLBk8QGOqUBIjz0jcapwELijL6FhrUVJW2ZbFfW9Wppsx7Z76fIcZduS9AZwIGhsQIueIcd3KDRrJ1U9EKgGv7pUa3C4kFiiZ8JN5QjDoEYrHWmp4Wy8h%2BxUrhrMFJgw5L6sy%2Bno9JU2JKcUp0LvXAUMVm51u4RrTT9hB%2FmJyJMkmGtapG5YQocV2YbrpghAMTFZ6WtYKOfQHahaRAL15aGqdKNI%2BJ9Wq4EGodo&X-Amz-Signature=42f6c28df0d2ee35cb128f8a1cfc99180ab02ac2cc389093e10ef0dc471279bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

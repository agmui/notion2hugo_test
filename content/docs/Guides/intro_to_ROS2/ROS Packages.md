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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRRROK5I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1qaueE5QQq3GF9AeCEhxSghhSYUChMakop365rJsO5wIgTl2K0gqkupFkt%2BiRWSxNkE2%2Fi44P%2B%2BFgtnlGy4IZc%2F4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCkRXYH5MS%2B813r7qircA2I16794m5fNsZYn%2FRhChHyJ9xBudoV3xKJoosYkd7%2FetHRsgqS%2B%2FLQ0bK%2FCLBCAnHybDRruWr7RoAD18e1SDItFwwoOk8Y4leIxoOge%2BiGjAq0B4IRcMkqW2kjtx4phBIoOopr4aEk5YnuwqlOx%2F0h%2BydG3%2BEzxbNRwu9EoKCE0C%2BTNaHtRkwBRRgm1IzOGcdY1LXrZfEsgBwaA9dtcs1RL9iz82V3vR7HcG%2FK8MZqAjgRR127ZFWHZzxNS67zF4irOKVNykOxTH8GtsGhkzrM%2BD4isVkArVSQkVJgE1U5JtszT0ENmjysLQSvVSGvH5QAj0fJihYcSnNUzaIcA9Qq4HW9%2BuA%2F7rODxE3NwVu5KKY31nj0cbEEGEeyAmabSfB4xKF6%2BZcW1gt0Jp7jodrxp2tusJwbjTL96%2BP1KOo2f2sEp3zaRCJlw3BIo1uPfKmHB7SMRMVINjjocPQkcSm1t2%2Bj%2FnXCB%2F1FTDpgIYWO8GWd7wAtIGpgiWdnoY3ExjbDhSu6TNhHuRQB0gpo17uUbzCPGtlDSceHYDUi7RIoFwv2LS129s1Fc7JxKYVE5DphoIFzTkfZbVno7VZ8bnwLVf9eSGuqp49lAwW9wjV4Uc%2F0oXSdx3YZjCmptMJid3b4GOqUBEfGvtv9L7dQH744LunWez1%2FliRRRhoegFv497OxidkaRgWwekpHQGnpBDDCCQg6c5CjY3hWnAuU3LXk5irkJOcS%2BesZ1d0ITz2FhdNa6F7fIeUbng8FrSn%2Bcsf9iHKXpkYkMBwlSUxhXvjKEb273ifGQ9TIHDl1jCUPR7vXGN%2F%2FY57B6%2Bwk%2BvYiUsJXasOje4PMDRxbDQf31cePIdnHosdXrYYWN&X-Amz-Signature=fdb51d545e9ff282106a53d547df874f0aff872a9fc5e46e703fbb578af386ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRRROK5I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1qaueE5QQq3GF9AeCEhxSghhSYUChMakop365rJsO5wIgTl2K0gqkupFkt%2BiRWSxNkE2%2Fi44P%2B%2BFgtnlGy4IZc%2F4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCkRXYH5MS%2B813r7qircA2I16794m5fNsZYn%2FRhChHyJ9xBudoV3xKJoosYkd7%2FetHRsgqS%2B%2FLQ0bK%2FCLBCAnHybDRruWr7RoAD18e1SDItFwwoOk8Y4leIxoOge%2BiGjAq0B4IRcMkqW2kjtx4phBIoOopr4aEk5YnuwqlOx%2F0h%2BydG3%2BEzxbNRwu9EoKCE0C%2BTNaHtRkwBRRgm1IzOGcdY1LXrZfEsgBwaA9dtcs1RL9iz82V3vR7HcG%2FK8MZqAjgRR127ZFWHZzxNS67zF4irOKVNykOxTH8GtsGhkzrM%2BD4isVkArVSQkVJgE1U5JtszT0ENmjysLQSvVSGvH5QAj0fJihYcSnNUzaIcA9Qq4HW9%2BuA%2F7rODxE3NwVu5KKY31nj0cbEEGEeyAmabSfB4xKF6%2BZcW1gt0Jp7jodrxp2tusJwbjTL96%2BP1KOo2f2sEp3zaRCJlw3BIo1uPfKmHB7SMRMVINjjocPQkcSm1t2%2Bj%2FnXCB%2F1FTDpgIYWO8GWd7wAtIGpgiWdnoY3ExjbDhSu6TNhHuRQB0gpo17uUbzCPGtlDSceHYDUi7RIoFwv2LS129s1Fc7JxKYVE5DphoIFzTkfZbVno7VZ8bnwLVf9eSGuqp49lAwW9wjV4Uc%2F0oXSdx3YZjCmptMJid3b4GOqUBEfGvtv9L7dQH744LunWez1%2FliRRRhoegFv497OxidkaRgWwekpHQGnpBDDCCQg6c5CjY3hWnAuU3LXk5irkJOcS%2BesZ1d0ITz2FhdNa6F7fIeUbng8FrSn%2Bcsf9iHKXpkYkMBwlSUxhXvjKEb273ifGQ9TIHDl1jCUPR7vXGN%2F%2FY57B6%2Bwk%2BvYiUsJXasOje4PMDRxbDQf31cePIdnHosdXrYYWN&X-Amz-Signature=d3c4a36cbc0e66e6d9cc2ddee7b51fd47c8715e84db8679d3f51f90a2d9d1375&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRRROK5I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1qaueE5QQq3GF9AeCEhxSghhSYUChMakop365rJsO5wIgTl2K0gqkupFkt%2BiRWSxNkE2%2Fi44P%2B%2BFgtnlGy4IZc%2F4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCkRXYH5MS%2B813r7qircA2I16794m5fNsZYn%2FRhChHyJ9xBudoV3xKJoosYkd7%2FetHRsgqS%2B%2FLQ0bK%2FCLBCAnHybDRruWr7RoAD18e1SDItFwwoOk8Y4leIxoOge%2BiGjAq0B4IRcMkqW2kjtx4phBIoOopr4aEk5YnuwqlOx%2F0h%2BydG3%2BEzxbNRwu9EoKCE0C%2BTNaHtRkwBRRgm1IzOGcdY1LXrZfEsgBwaA9dtcs1RL9iz82V3vR7HcG%2FK8MZqAjgRR127ZFWHZzxNS67zF4irOKVNykOxTH8GtsGhkzrM%2BD4isVkArVSQkVJgE1U5JtszT0ENmjysLQSvVSGvH5QAj0fJihYcSnNUzaIcA9Qq4HW9%2BuA%2F7rODxE3NwVu5KKY31nj0cbEEGEeyAmabSfB4xKF6%2BZcW1gt0Jp7jodrxp2tusJwbjTL96%2BP1KOo2f2sEp3zaRCJlw3BIo1uPfKmHB7SMRMVINjjocPQkcSm1t2%2Bj%2FnXCB%2F1FTDpgIYWO8GWd7wAtIGpgiWdnoY3ExjbDhSu6TNhHuRQB0gpo17uUbzCPGtlDSceHYDUi7RIoFwv2LS129s1Fc7JxKYVE5DphoIFzTkfZbVno7VZ8bnwLVf9eSGuqp49lAwW9wjV4Uc%2F0oXSdx3YZjCmptMJid3b4GOqUBEfGvtv9L7dQH744LunWez1%2FliRRRhoegFv497OxidkaRgWwekpHQGnpBDDCCQg6c5CjY3hWnAuU3LXk5irkJOcS%2BesZ1d0ITz2FhdNa6F7fIeUbng8FrSn%2Bcsf9iHKXpkYkMBwlSUxhXvjKEb273ifGQ9TIHDl1jCUPR7vXGN%2F%2FY57B6%2Bwk%2BvYiUsJXasOje4PMDRxbDQf31cePIdnHosdXrYYWN&X-Amz-Signature=533b1e3c488cf69632bb6a2012c57cee313ed5205346916c3dbe8c37e05ca296&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRRROK5I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1qaueE5QQq3GF9AeCEhxSghhSYUChMakop365rJsO5wIgTl2K0gqkupFkt%2BiRWSxNkE2%2Fi44P%2B%2BFgtnlGy4IZc%2F4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCkRXYH5MS%2B813r7qircA2I16794m5fNsZYn%2FRhChHyJ9xBudoV3xKJoosYkd7%2FetHRsgqS%2B%2FLQ0bK%2FCLBCAnHybDRruWr7RoAD18e1SDItFwwoOk8Y4leIxoOge%2BiGjAq0B4IRcMkqW2kjtx4phBIoOopr4aEk5YnuwqlOx%2F0h%2BydG3%2BEzxbNRwu9EoKCE0C%2BTNaHtRkwBRRgm1IzOGcdY1LXrZfEsgBwaA9dtcs1RL9iz82V3vR7HcG%2FK8MZqAjgRR127ZFWHZzxNS67zF4irOKVNykOxTH8GtsGhkzrM%2BD4isVkArVSQkVJgE1U5JtszT0ENmjysLQSvVSGvH5QAj0fJihYcSnNUzaIcA9Qq4HW9%2BuA%2F7rODxE3NwVu5KKY31nj0cbEEGEeyAmabSfB4xKF6%2BZcW1gt0Jp7jodrxp2tusJwbjTL96%2BP1KOo2f2sEp3zaRCJlw3BIo1uPfKmHB7SMRMVINjjocPQkcSm1t2%2Bj%2FnXCB%2F1FTDpgIYWO8GWd7wAtIGpgiWdnoY3ExjbDhSu6TNhHuRQB0gpo17uUbzCPGtlDSceHYDUi7RIoFwv2LS129s1Fc7JxKYVE5DphoIFzTkfZbVno7VZ8bnwLVf9eSGuqp49lAwW9wjV4Uc%2F0oXSdx3YZjCmptMJid3b4GOqUBEfGvtv9L7dQH744LunWez1%2FliRRRhoegFv497OxidkaRgWwekpHQGnpBDDCCQg6c5CjY3hWnAuU3LXk5irkJOcS%2BesZ1d0ITz2FhdNa6F7fIeUbng8FrSn%2Bcsf9iHKXpkYkMBwlSUxhXvjKEb273ifGQ9TIHDl1jCUPR7vXGN%2F%2FY57B6%2Bwk%2BvYiUsJXasOje4PMDRxbDQf31cePIdnHosdXrYYWN&X-Amz-Signature=de257c912cd53ec4493ef2c4c8fcbd6a2046a07e43466525c3576bef1f21bb48&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRRROK5I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1qaueE5QQq3GF9AeCEhxSghhSYUChMakop365rJsO5wIgTl2K0gqkupFkt%2BiRWSxNkE2%2Fi44P%2B%2BFgtnlGy4IZc%2F4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCkRXYH5MS%2B813r7qircA2I16794m5fNsZYn%2FRhChHyJ9xBudoV3xKJoosYkd7%2FetHRsgqS%2B%2FLQ0bK%2FCLBCAnHybDRruWr7RoAD18e1SDItFwwoOk8Y4leIxoOge%2BiGjAq0B4IRcMkqW2kjtx4phBIoOopr4aEk5YnuwqlOx%2F0h%2BydG3%2BEzxbNRwu9EoKCE0C%2BTNaHtRkwBRRgm1IzOGcdY1LXrZfEsgBwaA9dtcs1RL9iz82V3vR7HcG%2FK8MZqAjgRR127ZFWHZzxNS67zF4irOKVNykOxTH8GtsGhkzrM%2BD4isVkArVSQkVJgE1U5JtszT0ENmjysLQSvVSGvH5QAj0fJihYcSnNUzaIcA9Qq4HW9%2BuA%2F7rODxE3NwVu5KKY31nj0cbEEGEeyAmabSfB4xKF6%2BZcW1gt0Jp7jodrxp2tusJwbjTL96%2BP1KOo2f2sEp3zaRCJlw3BIo1uPfKmHB7SMRMVINjjocPQkcSm1t2%2Bj%2FnXCB%2F1FTDpgIYWO8GWd7wAtIGpgiWdnoY3ExjbDhSu6TNhHuRQB0gpo17uUbzCPGtlDSceHYDUi7RIoFwv2LS129s1Fc7JxKYVE5DphoIFzTkfZbVno7VZ8bnwLVf9eSGuqp49lAwW9wjV4Uc%2F0oXSdx3YZjCmptMJid3b4GOqUBEfGvtv9L7dQH744LunWez1%2FliRRRhoegFv497OxidkaRgWwekpHQGnpBDDCCQg6c5CjY3hWnAuU3LXk5irkJOcS%2BesZ1d0ITz2FhdNa6F7fIeUbng8FrSn%2Bcsf9iHKXpkYkMBwlSUxhXvjKEb273ifGQ9TIHDl1jCUPR7vXGN%2F%2FY57B6%2Bwk%2BvYiUsJXasOje4PMDRxbDQf31cePIdnHosdXrYYWN&X-Amz-Signature=11730d8f348ce70ef6fe469216721200b272ae449f31dcb1385444b9717b73d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRRROK5I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1qaueE5QQq3GF9AeCEhxSghhSYUChMakop365rJsO5wIgTl2K0gqkupFkt%2BiRWSxNkE2%2Fi44P%2B%2BFgtnlGy4IZc%2F4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCkRXYH5MS%2B813r7qircA2I16794m5fNsZYn%2FRhChHyJ9xBudoV3xKJoosYkd7%2FetHRsgqS%2B%2FLQ0bK%2FCLBCAnHybDRruWr7RoAD18e1SDItFwwoOk8Y4leIxoOge%2BiGjAq0B4IRcMkqW2kjtx4phBIoOopr4aEk5YnuwqlOx%2F0h%2BydG3%2BEzxbNRwu9EoKCE0C%2BTNaHtRkwBRRgm1IzOGcdY1LXrZfEsgBwaA9dtcs1RL9iz82V3vR7HcG%2FK8MZqAjgRR127ZFWHZzxNS67zF4irOKVNykOxTH8GtsGhkzrM%2BD4isVkArVSQkVJgE1U5JtszT0ENmjysLQSvVSGvH5QAj0fJihYcSnNUzaIcA9Qq4HW9%2BuA%2F7rODxE3NwVu5KKY31nj0cbEEGEeyAmabSfB4xKF6%2BZcW1gt0Jp7jodrxp2tusJwbjTL96%2BP1KOo2f2sEp3zaRCJlw3BIo1uPfKmHB7SMRMVINjjocPQkcSm1t2%2Bj%2FnXCB%2F1FTDpgIYWO8GWd7wAtIGpgiWdnoY3ExjbDhSu6TNhHuRQB0gpo17uUbzCPGtlDSceHYDUi7RIoFwv2LS129s1Fc7JxKYVE5DphoIFzTkfZbVno7VZ8bnwLVf9eSGuqp49lAwW9wjV4Uc%2F0oXSdx3YZjCmptMJid3b4GOqUBEfGvtv9L7dQH744LunWez1%2FliRRRhoegFv497OxidkaRgWwekpHQGnpBDDCCQg6c5CjY3hWnAuU3LXk5irkJOcS%2BesZ1d0ITz2FhdNa6F7fIeUbng8FrSn%2Bcsf9iHKXpkYkMBwlSUxhXvjKEb273ifGQ9TIHDl1jCUPR7vXGN%2F%2FY57B6%2Bwk%2BvYiUsJXasOje4PMDRxbDQf31cePIdnHosdXrYYWN&X-Amz-Signature=36e13e935f39aaeb84b0272e126c409414d24f5f7d9989c33cebae03d772dd14&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRRROK5I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1qaueE5QQq3GF9AeCEhxSghhSYUChMakop365rJsO5wIgTl2K0gqkupFkt%2BiRWSxNkE2%2Fi44P%2B%2BFgtnlGy4IZc%2F4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCkRXYH5MS%2B813r7qircA2I16794m5fNsZYn%2FRhChHyJ9xBudoV3xKJoosYkd7%2FetHRsgqS%2B%2FLQ0bK%2FCLBCAnHybDRruWr7RoAD18e1SDItFwwoOk8Y4leIxoOge%2BiGjAq0B4IRcMkqW2kjtx4phBIoOopr4aEk5YnuwqlOx%2F0h%2BydG3%2BEzxbNRwu9EoKCE0C%2BTNaHtRkwBRRgm1IzOGcdY1LXrZfEsgBwaA9dtcs1RL9iz82V3vR7HcG%2FK8MZqAjgRR127ZFWHZzxNS67zF4irOKVNykOxTH8GtsGhkzrM%2BD4isVkArVSQkVJgE1U5JtszT0ENmjysLQSvVSGvH5QAj0fJihYcSnNUzaIcA9Qq4HW9%2BuA%2F7rODxE3NwVu5KKY31nj0cbEEGEeyAmabSfB4xKF6%2BZcW1gt0Jp7jodrxp2tusJwbjTL96%2BP1KOo2f2sEp3zaRCJlw3BIo1uPfKmHB7SMRMVINjjocPQkcSm1t2%2Bj%2FnXCB%2F1FTDpgIYWO8GWd7wAtIGpgiWdnoY3ExjbDhSu6TNhHuRQB0gpo17uUbzCPGtlDSceHYDUi7RIoFwv2LS129s1Fc7JxKYVE5DphoIFzTkfZbVno7VZ8bnwLVf9eSGuqp49lAwW9wjV4Uc%2F0oXSdx3YZjCmptMJid3b4GOqUBEfGvtv9L7dQH744LunWez1%2FliRRRhoegFv497OxidkaRgWwekpHQGnpBDDCCQg6c5CjY3hWnAuU3LXk5irkJOcS%2BesZ1d0ITz2FhdNa6F7fIeUbng8FrSn%2Bcsf9iHKXpkYkMBwlSUxhXvjKEb273ifGQ9TIHDl1jCUPR7vXGN%2F%2FY57B6%2Bwk%2BvYiUsJXasOje4PMDRxbDQf31cePIdnHosdXrYYWN&X-Amz-Signature=69c5d548762bcb411f96a957fb83469b8977789eb43c6c712beb4a207defab32&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

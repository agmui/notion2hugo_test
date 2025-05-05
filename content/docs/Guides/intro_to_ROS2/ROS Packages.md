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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAI6PRT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEUwILLvwnd5vD%2F7PcyQZeSjI51SjMiiKKdoiKf0mt4VAiEAxY7HtIf3zt7x%2FuUiw7Fu7FERInAblB4432iamYg0pQkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOQXNNhqGyvyICzwtSrcA1UFEoCsnYEO9XCpeuC2LsYZWnP1Wp9VUxXLoBBR%2BjI9Bz5r8uSLMnQHmN9CjJ3tkRUyjaJXxjT9YWEXV3hV6EOnSyVyYM%2Fu%2BNN37Msj1Vc9cSUdsx2dmkUQI4beKW54W5rA9X57YtlrqUNpF1DvAmpBcbt9e%2Fzi9lNkgpHAzBX27yTMyRFkTySart1VjWbiOWnqblxQlhzQpBC5Nwunl%2B1pSe7OAlguUH3LsCdErxgO2hgLAK5gsagYCh3ebUbEBkgZv3YgifUpfSqWJxDP5CTtNqEv%2F880rtVxi7M3btKEPjwRDVIg5oAiTVZn2b3Utp7Gych5Xny7d8lAZ7N51c25otztWHJsO0WHOu44Gayc1dytvpbTYYJIyZQzw7aotXaGRPAzB42%2BAakQMjSHLDbZkr7vvuTOyopLR5Kkus7tXlVm7OMXkPEHt1QylWgXkQhuywNyboigwOeau7hA89yjWcwRwF93soG%2FYWfEdbSN4h%2BwGe7XquzItDA6mSiFohSAY2FwMd6UQZmfyj5FXN6sw2fg979kpmpkKstteCd86DJNmrngsutiG77TyWLBKgo5kh9I8OjU%2FOvQawjmfYRyoR5gaWee31YjeUD1YYV91udnUlvmYS7PoTBGMM%2Fp4MAGOqUB5momPHDiBtMeGe67MG%2BTMqWim0kUqvLQHOfwHU8XqOj8sONIbuS6ImytbMX7fjxB0FMPcSberB%2FkyBar%2FRpL2nO0bILdsPnfEkaJ95WOfuJQkqHuYDtvuIFxT5%2B2sd%2FlBc2p4OHLMsRJhhw5lgtEW58VXOJIRANimAXndIyYfZw%2FgnN2HLQzFOOxau8wcq7ZG8wmNbLIMdFEQfOCoWt9OZy6PV8s&X-Amz-Signature=d0c6d7171f30a1eb1ea25e9309c8621b2f2c2aa61e73560dc05616bf4b882caf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAI6PRT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEUwILLvwnd5vD%2F7PcyQZeSjI51SjMiiKKdoiKf0mt4VAiEAxY7HtIf3zt7x%2FuUiw7Fu7FERInAblB4432iamYg0pQkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOQXNNhqGyvyICzwtSrcA1UFEoCsnYEO9XCpeuC2LsYZWnP1Wp9VUxXLoBBR%2BjI9Bz5r8uSLMnQHmN9CjJ3tkRUyjaJXxjT9YWEXV3hV6EOnSyVyYM%2Fu%2BNN37Msj1Vc9cSUdsx2dmkUQI4beKW54W5rA9X57YtlrqUNpF1DvAmpBcbt9e%2Fzi9lNkgpHAzBX27yTMyRFkTySart1VjWbiOWnqblxQlhzQpBC5Nwunl%2B1pSe7OAlguUH3LsCdErxgO2hgLAK5gsagYCh3ebUbEBkgZv3YgifUpfSqWJxDP5CTtNqEv%2F880rtVxi7M3btKEPjwRDVIg5oAiTVZn2b3Utp7Gych5Xny7d8lAZ7N51c25otztWHJsO0WHOu44Gayc1dytvpbTYYJIyZQzw7aotXaGRPAzB42%2BAakQMjSHLDbZkr7vvuTOyopLR5Kkus7tXlVm7OMXkPEHt1QylWgXkQhuywNyboigwOeau7hA89yjWcwRwF93soG%2FYWfEdbSN4h%2BwGe7XquzItDA6mSiFohSAY2FwMd6UQZmfyj5FXN6sw2fg979kpmpkKstteCd86DJNmrngsutiG77TyWLBKgo5kh9I8OjU%2FOvQawjmfYRyoR5gaWee31YjeUD1YYV91udnUlvmYS7PoTBGMM%2Fp4MAGOqUB5momPHDiBtMeGe67MG%2BTMqWim0kUqvLQHOfwHU8XqOj8sONIbuS6ImytbMX7fjxB0FMPcSberB%2FkyBar%2FRpL2nO0bILdsPnfEkaJ95WOfuJQkqHuYDtvuIFxT5%2B2sd%2FlBc2p4OHLMsRJhhw5lgtEW58VXOJIRANimAXndIyYfZw%2FgnN2HLQzFOOxau8wcq7ZG8wmNbLIMdFEQfOCoWt9OZy6PV8s&X-Amz-Signature=22dbc38659f21f5c63afb973750c556ecf903f630741b4201f334e9c36cf6059&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAI6PRT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEUwILLvwnd5vD%2F7PcyQZeSjI51SjMiiKKdoiKf0mt4VAiEAxY7HtIf3zt7x%2FuUiw7Fu7FERInAblB4432iamYg0pQkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOQXNNhqGyvyICzwtSrcA1UFEoCsnYEO9XCpeuC2LsYZWnP1Wp9VUxXLoBBR%2BjI9Bz5r8uSLMnQHmN9CjJ3tkRUyjaJXxjT9YWEXV3hV6EOnSyVyYM%2Fu%2BNN37Msj1Vc9cSUdsx2dmkUQI4beKW54W5rA9X57YtlrqUNpF1DvAmpBcbt9e%2Fzi9lNkgpHAzBX27yTMyRFkTySart1VjWbiOWnqblxQlhzQpBC5Nwunl%2B1pSe7OAlguUH3LsCdErxgO2hgLAK5gsagYCh3ebUbEBkgZv3YgifUpfSqWJxDP5CTtNqEv%2F880rtVxi7M3btKEPjwRDVIg5oAiTVZn2b3Utp7Gych5Xny7d8lAZ7N51c25otztWHJsO0WHOu44Gayc1dytvpbTYYJIyZQzw7aotXaGRPAzB42%2BAakQMjSHLDbZkr7vvuTOyopLR5Kkus7tXlVm7OMXkPEHt1QylWgXkQhuywNyboigwOeau7hA89yjWcwRwF93soG%2FYWfEdbSN4h%2BwGe7XquzItDA6mSiFohSAY2FwMd6UQZmfyj5FXN6sw2fg979kpmpkKstteCd86DJNmrngsutiG77TyWLBKgo5kh9I8OjU%2FOvQawjmfYRyoR5gaWee31YjeUD1YYV91udnUlvmYS7PoTBGMM%2Fp4MAGOqUB5momPHDiBtMeGe67MG%2BTMqWim0kUqvLQHOfwHU8XqOj8sONIbuS6ImytbMX7fjxB0FMPcSberB%2FkyBar%2FRpL2nO0bILdsPnfEkaJ95WOfuJQkqHuYDtvuIFxT5%2B2sd%2FlBc2p4OHLMsRJhhw5lgtEW58VXOJIRANimAXndIyYfZw%2FgnN2HLQzFOOxau8wcq7ZG8wmNbLIMdFEQfOCoWt9OZy6PV8s&X-Amz-Signature=b93cab8d85ef4da6cc6b6308fe0a776777e702ab8151d5abf0d5d74735f5d322&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAI6PRT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEUwILLvwnd5vD%2F7PcyQZeSjI51SjMiiKKdoiKf0mt4VAiEAxY7HtIf3zt7x%2FuUiw7Fu7FERInAblB4432iamYg0pQkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOQXNNhqGyvyICzwtSrcA1UFEoCsnYEO9XCpeuC2LsYZWnP1Wp9VUxXLoBBR%2BjI9Bz5r8uSLMnQHmN9CjJ3tkRUyjaJXxjT9YWEXV3hV6EOnSyVyYM%2Fu%2BNN37Msj1Vc9cSUdsx2dmkUQI4beKW54W5rA9X57YtlrqUNpF1DvAmpBcbt9e%2Fzi9lNkgpHAzBX27yTMyRFkTySart1VjWbiOWnqblxQlhzQpBC5Nwunl%2B1pSe7OAlguUH3LsCdErxgO2hgLAK5gsagYCh3ebUbEBkgZv3YgifUpfSqWJxDP5CTtNqEv%2F880rtVxi7M3btKEPjwRDVIg5oAiTVZn2b3Utp7Gych5Xny7d8lAZ7N51c25otztWHJsO0WHOu44Gayc1dytvpbTYYJIyZQzw7aotXaGRPAzB42%2BAakQMjSHLDbZkr7vvuTOyopLR5Kkus7tXlVm7OMXkPEHt1QylWgXkQhuywNyboigwOeau7hA89yjWcwRwF93soG%2FYWfEdbSN4h%2BwGe7XquzItDA6mSiFohSAY2FwMd6UQZmfyj5FXN6sw2fg979kpmpkKstteCd86DJNmrngsutiG77TyWLBKgo5kh9I8OjU%2FOvQawjmfYRyoR5gaWee31YjeUD1YYV91udnUlvmYS7PoTBGMM%2Fp4MAGOqUB5momPHDiBtMeGe67MG%2BTMqWim0kUqvLQHOfwHU8XqOj8sONIbuS6ImytbMX7fjxB0FMPcSberB%2FkyBar%2FRpL2nO0bILdsPnfEkaJ95WOfuJQkqHuYDtvuIFxT5%2B2sd%2FlBc2p4OHLMsRJhhw5lgtEW58VXOJIRANimAXndIyYfZw%2FgnN2HLQzFOOxau8wcq7ZG8wmNbLIMdFEQfOCoWt9OZy6PV8s&X-Amz-Signature=6515a297ae11bed678e5a039fbce48a6c101803ab86f91c99f137ff5d4526912&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAI6PRT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEUwILLvwnd5vD%2F7PcyQZeSjI51SjMiiKKdoiKf0mt4VAiEAxY7HtIf3zt7x%2FuUiw7Fu7FERInAblB4432iamYg0pQkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOQXNNhqGyvyICzwtSrcA1UFEoCsnYEO9XCpeuC2LsYZWnP1Wp9VUxXLoBBR%2BjI9Bz5r8uSLMnQHmN9CjJ3tkRUyjaJXxjT9YWEXV3hV6EOnSyVyYM%2Fu%2BNN37Msj1Vc9cSUdsx2dmkUQI4beKW54W5rA9X57YtlrqUNpF1DvAmpBcbt9e%2Fzi9lNkgpHAzBX27yTMyRFkTySart1VjWbiOWnqblxQlhzQpBC5Nwunl%2B1pSe7OAlguUH3LsCdErxgO2hgLAK5gsagYCh3ebUbEBkgZv3YgifUpfSqWJxDP5CTtNqEv%2F880rtVxi7M3btKEPjwRDVIg5oAiTVZn2b3Utp7Gych5Xny7d8lAZ7N51c25otztWHJsO0WHOu44Gayc1dytvpbTYYJIyZQzw7aotXaGRPAzB42%2BAakQMjSHLDbZkr7vvuTOyopLR5Kkus7tXlVm7OMXkPEHt1QylWgXkQhuywNyboigwOeau7hA89yjWcwRwF93soG%2FYWfEdbSN4h%2BwGe7XquzItDA6mSiFohSAY2FwMd6UQZmfyj5FXN6sw2fg979kpmpkKstteCd86DJNmrngsutiG77TyWLBKgo5kh9I8OjU%2FOvQawjmfYRyoR5gaWee31YjeUD1YYV91udnUlvmYS7PoTBGMM%2Fp4MAGOqUB5momPHDiBtMeGe67MG%2BTMqWim0kUqvLQHOfwHU8XqOj8sONIbuS6ImytbMX7fjxB0FMPcSberB%2FkyBar%2FRpL2nO0bILdsPnfEkaJ95WOfuJQkqHuYDtvuIFxT5%2B2sd%2FlBc2p4OHLMsRJhhw5lgtEW58VXOJIRANimAXndIyYfZw%2FgnN2HLQzFOOxau8wcq7ZG8wmNbLIMdFEQfOCoWt9OZy6PV8s&X-Amz-Signature=e818d7d9d58a09b76ac98a323b9ce3eab57536779dd8245c7dc6e76c3d4353f3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAI6PRT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEUwILLvwnd5vD%2F7PcyQZeSjI51SjMiiKKdoiKf0mt4VAiEAxY7HtIf3zt7x%2FuUiw7Fu7FERInAblB4432iamYg0pQkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOQXNNhqGyvyICzwtSrcA1UFEoCsnYEO9XCpeuC2LsYZWnP1Wp9VUxXLoBBR%2BjI9Bz5r8uSLMnQHmN9CjJ3tkRUyjaJXxjT9YWEXV3hV6EOnSyVyYM%2Fu%2BNN37Msj1Vc9cSUdsx2dmkUQI4beKW54W5rA9X57YtlrqUNpF1DvAmpBcbt9e%2Fzi9lNkgpHAzBX27yTMyRFkTySart1VjWbiOWnqblxQlhzQpBC5Nwunl%2B1pSe7OAlguUH3LsCdErxgO2hgLAK5gsagYCh3ebUbEBkgZv3YgifUpfSqWJxDP5CTtNqEv%2F880rtVxi7M3btKEPjwRDVIg5oAiTVZn2b3Utp7Gych5Xny7d8lAZ7N51c25otztWHJsO0WHOu44Gayc1dytvpbTYYJIyZQzw7aotXaGRPAzB42%2BAakQMjSHLDbZkr7vvuTOyopLR5Kkus7tXlVm7OMXkPEHt1QylWgXkQhuywNyboigwOeau7hA89yjWcwRwF93soG%2FYWfEdbSN4h%2BwGe7XquzItDA6mSiFohSAY2FwMd6UQZmfyj5FXN6sw2fg979kpmpkKstteCd86DJNmrngsutiG77TyWLBKgo5kh9I8OjU%2FOvQawjmfYRyoR5gaWee31YjeUD1YYV91udnUlvmYS7PoTBGMM%2Fp4MAGOqUB5momPHDiBtMeGe67MG%2BTMqWim0kUqvLQHOfwHU8XqOj8sONIbuS6ImytbMX7fjxB0FMPcSberB%2FkyBar%2FRpL2nO0bILdsPnfEkaJ95WOfuJQkqHuYDtvuIFxT5%2B2sd%2FlBc2p4OHLMsRJhhw5lgtEW58VXOJIRANimAXndIyYfZw%2FgnN2HLQzFOOxau8wcq7ZG8wmNbLIMdFEQfOCoWt9OZy6PV8s&X-Amz-Signature=0e4d9066607a07122e1d837385d46a1b7ce51d98152a78e6712bb5870ca080c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAI6PRT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEUwILLvwnd5vD%2F7PcyQZeSjI51SjMiiKKdoiKf0mt4VAiEAxY7HtIf3zt7x%2FuUiw7Fu7FERInAblB4432iamYg0pQkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOQXNNhqGyvyICzwtSrcA1UFEoCsnYEO9XCpeuC2LsYZWnP1Wp9VUxXLoBBR%2BjI9Bz5r8uSLMnQHmN9CjJ3tkRUyjaJXxjT9YWEXV3hV6EOnSyVyYM%2Fu%2BNN37Msj1Vc9cSUdsx2dmkUQI4beKW54W5rA9X57YtlrqUNpF1DvAmpBcbt9e%2Fzi9lNkgpHAzBX27yTMyRFkTySart1VjWbiOWnqblxQlhzQpBC5Nwunl%2B1pSe7OAlguUH3LsCdErxgO2hgLAK5gsagYCh3ebUbEBkgZv3YgifUpfSqWJxDP5CTtNqEv%2F880rtVxi7M3btKEPjwRDVIg5oAiTVZn2b3Utp7Gych5Xny7d8lAZ7N51c25otztWHJsO0WHOu44Gayc1dytvpbTYYJIyZQzw7aotXaGRPAzB42%2BAakQMjSHLDbZkr7vvuTOyopLR5Kkus7tXlVm7OMXkPEHt1QylWgXkQhuywNyboigwOeau7hA89yjWcwRwF93soG%2FYWfEdbSN4h%2BwGe7XquzItDA6mSiFohSAY2FwMd6UQZmfyj5FXN6sw2fg979kpmpkKstteCd86DJNmrngsutiG77TyWLBKgo5kh9I8OjU%2FOvQawjmfYRyoR5gaWee31YjeUD1YYV91udnUlvmYS7PoTBGMM%2Fp4MAGOqUB5momPHDiBtMeGe67MG%2BTMqWim0kUqvLQHOfwHU8XqOj8sONIbuS6ImytbMX7fjxB0FMPcSberB%2FkyBar%2FRpL2nO0bILdsPnfEkaJ95WOfuJQkqHuYDtvuIFxT5%2B2sd%2FlBc2p4OHLMsRJhhw5lgtEW58VXOJIRANimAXndIyYfZw%2FgnN2HLQzFOOxau8wcq7ZG8wmNbLIMdFEQfOCoWt9OZy6PV8s&X-Amz-Signature=7224597b3964cd586003999cd629f48e12b963ffa824bac760a824e958957435&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

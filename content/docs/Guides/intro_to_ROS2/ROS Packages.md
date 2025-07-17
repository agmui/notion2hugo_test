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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2NOGNT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHMgyyNOlnV6uuAX%2FwNpGVRvC8%2BeDsP%2FTAkeOm9AlY%2BTAiEArztrSPGbq3ofKRA19slZVxp5z1JbwaNx2zJcnQ8Vrvcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDL4xhcuXLVDzzXp2yircAz4SQjDd%2B2KtK2utRguRLymyG1XVXsjOalUc7Yaa%2F7DNKuPRlf6tUM9H%2BSPe4xoceXr%2FZI7PpusDABBS%2FG6SUh0D9mvVZyylwUpkROQsvjN9YHRKghIZ%2BQiUPaR%2BQK%2FfhoL0YBKqo5EffdFD1taywUF0f5lh73jTDOeSkEc8Zods9OJFwLQDmSZw0A4UBgBLNucAXzQ6mtAmjgm9z05EehRTrXlQgXhG5ncLIbc4Qywop2pFlHfeuqj9yMoZKmMJ1icEGasEmUPNQJup5zhgmqBtet35RyHtSQPWFYSaTIGlwlQozeLSav1WprhmSVw%2Fla7j%2F1bIjvJ%2BX76C33Vajs40VAMY4JARzUh2ai2P8%2Bzs3Y6dWWGs9WCi6UjhikMFBF64w881TH9I6Jcswka0mZyg5n1lx0u2nXlb%2FDhtEu7un416roDhvvOjFLMHxLhWkl571Um46%2BSjoT%2FgENENRPAvLCqStIkrbbF4bkskO9b1KRQRruktPRmUHITIWGdbn2HELuikYzGw5KgbEBZ7%2FQOnueVrQVAuyKxsTC4sZuvcl9EMdlqq6EdwpWxqSysSvXOSw4ZrXnnaLssv7HuNwr4AVrxnE8X5NH54CEOaS7VbqjfhAVpQ119oBuieML%2Fi48MGOqUBcKpbo7aM7hGBK4UfUkQrKNaysI7LWnsNMNLYgAqhrP0UJa4sa%2FA%2FS%2BHyVfxlNbeSCVvs9pvYl1GXjs7bOzhcauz0FJaiAjLrAKS7Rr2KaDVCwadJOHPYatNs%2BzzeyGCmyZZmBxySkWUU96TUbdzF5k4KeTVEY6aKiR%2B8qBUNDm1u9BagEGmNW10oDONVZGjKYyMf8BlFlPiCjjiwhUzotOPlz7x1&X-Amz-Signature=2c75ebf553d8a8fdfaaf57064853f5bec25901a1d9ef97e83184a9073a29f14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2NOGNT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHMgyyNOlnV6uuAX%2FwNpGVRvC8%2BeDsP%2FTAkeOm9AlY%2BTAiEArztrSPGbq3ofKRA19slZVxp5z1JbwaNx2zJcnQ8Vrvcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDL4xhcuXLVDzzXp2yircAz4SQjDd%2B2KtK2utRguRLymyG1XVXsjOalUc7Yaa%2F7DNKuPRlf6tUM9H%2BSPe4xoceXr%2FZI7PpusDABBS%2FG6SUh0D9mvVZyylwUpkROQsvjN9YHRKghIZ%2BQiUPaR%2BQK%2FfhoL0YBKqo5EffdFD1taywUF0f5lh73jTDOeSkEc8Zods9OJFwLQDmSZw0A4UBgBLNucAXzQ6mtAmjgm9z05EehRTrXlQgXhG5ncLIbc4Qywop2pFlHfeuqj9yMoZKmMJ1icEGasEmUPNQJup5zhgmqBtet35RyHtSQPWFYSaTIGlwlQozeLSav1WprhmSVw%2Fla7j%2F1bIjvJ%2BX76C33Vajs40VAMY4JARzUh2ai2P8%2Bzs3Y6dWWGs9WCi6UjhikMFBF64w881TH9I6Jcswka0mZyg5n1lx0u2nXlb%2FDhtEu7un416roDhvvOjFLMHxLhWkl571Um46%2BSjoT%2FgENENRPAvLCqStIkrbbF4bkskO9b1KRQRruktPRmUHITIWGdbn2HELuikYzGw5KgbEBZ7%2FQOnueVrQVAuyKxsTC4sZuvcl9EMdlqq6EdwpWxqSysSvXOSw4ZrXnnaLssv7HuNwr4AVrxnE8X5NH54CEOaS7VbqjfhAVpQ119oBuieML%2Fi48MGOqUBcKpbo7aM7hGBK4UfUkQrKNaysI7LWnsNMNLYgAqhrP0UJa4sa%2FA%2FS%2BHyVfxlNbeSCVvs9pvYl1GXjs7bOzhcauz0FJaiAjLrAKS7Rr2KaDVCwadJOHPYatNs%2BzzeyGCmyZZmBxySkWUU96TUbdzF5k4KeTVEY6aKiR%2B8qBUNDm1u9BagEGmNW10oDONVZGjKYyMf8BlFlPiCjjiwhUzotOPlz7x1&X-Amz-Signature=481471e9f81de5aa81b6f3d7d9a988a1658e2bbb3b108f5371bc5bf93cb97c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2NOGNT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHMgyyNOlnV6uuAX%2FwNpGVRvC8%2BeDsP%2FTAkeOm9AlY%2BTAiEArztrSPGbq3ofKRA19slZVxp5z1JbwaNx2zJcnQ8Vrvcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDL4xhcuXLVDzzXp2yircAz4SQjDd%2B2KtK2utRguRLymyG1XVXsjOalUc7Yaa%2F7DNKuPRlf6tUM9H%2BSPe4xoceXr%2FZI7PpusDABBS%2FG6SUh0D9mvVZyylwUpkROQsvjN9YHRKghIZ%2BQiUPaR%2BQK%2FfhoL0YBKqo5EffdFD1taywUF0f5lh73jTDOeSkEc8Zods9OJFwLQDmSZw0A4UBgBLNucAXzQ6mtAmjgm9z05EehRTrXlQgXhG5ncLIbc4Qywop2pFlHfeuqj9yMoZKmMJ1icEGasEmUPNQJup5zhgmqBtet35RyHtSQPWFYSaTIGlwlQozeLSav1WprhmSVw%2Fla7j%2F1bIjvJ%2BX76C33Vajs40VAMY4JARzUh2ai2P8%2Bzs3Y6dWWGs9WCi6UjhikMFBF64w881TH9I6Jcswka0mZyg5n1lx0u2nXlb%2FDhtEu7un416roDhvvOjFLMHxLhWkl571Um46%2BSjoT%2FgENENRPAvLCqStIkrbbF4bkskO9b1KRQRruktPRmUHITIWGdbn2HELuikYzGw5KgbEBZ7%2FQOnueVrQVAuyKxsTC4sZuvcl9EMdlqq6EdwpWxqSysSvXOSw4ZrXnnaLssv7HuNwr4AVrxnE8X5NH54CEOaS7VbqjfhAVpQ119oBuieML%2Fi48MGOqUBcKpbo7aM7hGBK4UfUkQrKNaysI7LWnsNMNLYgAqhrP0UJa4sa%2FA%2FS%2BHyVfxlNbeSCVvs9pvYl1GXjs7bOzhcauz0FJaiAjLrAKS7Rr2KaDVCwadJOHPYatNs%2BzzeyGCmyZZmBxySkWUU96TUbdzF5k4KeTVEY6aKiR%2B8qBUNDm1u9BagEGmNW10oDONVZGjKYyMf8BlFlPiCjjiwhUzotOPlz7x1&X-Amz-Signature=5f9360f08940bea0d4c360e5df1d74cf157e6f8e9ae2ceda81baa4359242b539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2NOGNT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHMgyyNOlnV6uuAX%2FwNpGVRvC8%2BeDsP%2FTAkeOm9AlY%2BTAiEArztrSPGbq3ofKRA19slZVxp5z1JbwaNx2zJcnQ8Vrvcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDL4xhcuXLVDzzXp2yircAz4SQjDd%2B2KtK2utRguRLymyG1XVXsjOalUc7Yaa%2F7DNKuPRlf6tUM9H%2BSPe4xoceXr%2FZI7PpusDABBS%2FG6SUh0D9mvVZyylwUpkROQsvjN9YHRKghIZ%2BQiUPaR%2BQK%2FfhoL0YBKqo5EffdFD1taywUF0f5lh73jTDOeSkEc8Zods9OJFwLQDmSZw0A4UBgBLNucAXzQ6mtAmjgm9z05EehRTrXlQgXhG5ncLIbc4Qywop2pFlHfeuqj9yMoZKmMJ1icEGasEmUPNQJup5zhgmqBtet35RyHtSQPWFYSaTIGlwlQozeLSav1WprhmSVw%2Fla7j%2F1bIjvJ%2BX76C33Vajs40VAMY4JARzUh2ai2P8%2Bzs3Y6dWWGs9WCi6UjhikMFBF64w881TH9I6Jcswka0mZyg5n1lx0u2nXlb%2FDhtEu7un416roDhvvOjFLMHxLhWkl571Um46%2BSjoT%2FgENENRPAvLCqStIkrbbF4bkskO9b1KRQRruktPRmUHITIWGdbn2HELuikYzGw5KgbEBZ7%2FQOnueVrQVAuyKxsTC4sZuvcl9EMdlqq6EdwpWxqSysSvXOSw4ZrXnnaLssv7HuNwr4AVrxnE8X5NH54CEOaS7VbqjfhAVpQ119oBuieML%2Fi48MGOqUBcKpbo7aM7hGBK4UfUkQrKNaysI7LWnsNMNLYgAqhrP0UJa4sa%2FA%2FS%2BHyVfxlNbeSCVvs9pvYl1GXjs7bOzhcauz0FJaiAjLrAKS7Rr2KaDVCwadJOHPYatNs%2BzzeyGCmyZZmBxySkWUU96TUbdzF5k4KeTVEY6aKiR%2B8qBUNDm1u9BagEGmNW10oDONVZGjKYyMf8BlFlPiCjjiwhUzotOPlz7x1&X-Amz-Signature=0c521cc61773540c96f43b6f2539651257ca99d870f87288d6df7052f5c4f896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2NOGNT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHMgyyNOlnV6uuAX%2FwNpGVRvC8%2BeDsP%2FTAkeOm9AlY%2BTAiEArztrSPGbq3ofKRA19slZVxp5z1JbwaNx2zJcnQ8Vrvcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDL4xhcuXLVDzzXp2yircAz4SQjDd%2B2KtK2utRguRLymyG1XVXsjOalUc7Yaa%2F7DNKuPRlf6tUM9H%2BSPe4xoceXr%2FZI7PpusDABBS%2FG6SUh0D9mvVZyylwUpkROQsvjN9YHRKghIZ%2BQiUPaR%2BQK%2FfhoL0YBKqo5EffdFD1taywUF0f5lh73jTDOeSkEc8Zods9OJFwLQDmSZw0A4UBgBLNucAXzQ6mtAmjgm9z05EehRTrXlQgXhG5ncLIbc4Qywop2pFlHfeuqj9yMoZKmMJ1icEGasEmUPNQJup5zhgmqBtet35RyHtSQPWFYSaTIGlwlQozeLSav1WprhmSVw%2Fla7j%2F1bIjvJ%2BX76C33Vajs40VAMY4JARzUh2ai2P8%2Bzs3Y6dWWGs9WCi6UjhikMFBF64w881TH9I6Jcswka0mZyg5n1lx0u2nXlb%2FDhtEu7un416roDhvvOjFLMHxLhWkl571Um46%2BSjoT%2FgENENRPAvLCqStIkrbbF4bkskO9b1KRQRruktPRmUHITIWGdbn2HELuikYzGw5KgbEBZ7%2FQOnueVrQVAuyKxsTC4sZuvcl9EMdlqq6EdwpWxqSysSvXOSw4ZrXnnaLssv7HuNwr4AVrxnE8X5NH54CEOaS7VbqjfhAVpQ119oBuieML%2Fi48MGOqUBcKpbo7aM7hGBK4UfUkQrKNaysI7LWnsNMNLYgAqhrP0UJa4sa%2FA%2FS%2BHyVfxlNbeSCVvs9pvYl1GXjs7bOzhcauz0FJaiAjLrAKS7Rr2KaDVCwadJOHPYatNs%2BzzeyGCmyZZmBxySkWUU96TUbdzF5k4KeTVEY6aKiR%2B8qBUNDm1u9BagEGmNW10oDONVZGjKYyMf8BlFlPiCjjiwhUzotOPlz7x1&X-Amz-Signature=c54ecedb0da3dc21056505b184f92a72daaadd6adee0aa0a5e93c58eeac88be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2NOGNT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHMgyyNOlnV6uuAX%2FwNpGVRvC8%2BeDsP%2FTAkeOm9AlY%2BTAiEArztrSPGbq3ofKRA19slZVxp5z1JbwaNx2zJcnQ8Vrvcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDL4xhcuXLVDzzXp2yircAz4SQjDd%2B2KtK2utRguRLymyG1XVXsjOalUc7Yaa%2F7DNKuPRlf6tUM9H%2BSPe4xoceXr%2FZI7PpusDABBS%2FG6SUh0D9mvVZyylwUpkROQsvjN9YHRKghIZ%2BQiUPaR%2BQK%2FfhoL0YBKqo5EffdFD1taywUF0f5lh73jTDOeSkEc8Zods9OJFwLQDmSZw0A4UBgBLNucAXzQ6mtAmjgm9z05EehRTrXlQgXhG5ncLIbc4Qywop2pFlHfeuqj9yMoZKmMJ1icEGasEmUPNQJup5zhgmqBtet35RyHtSQPWFYSaTIGlwlQozeLSav1WprhmSVw%2Fla7j%2F1bIjvJ%2BX76C33Vajs40VAMY4JARzUh2ai2P8%2Bzs3Y6dWWGs9WCi6UjhikMFBF64w881TH9I6Jcswka0mZyg5n1lx0u2nXlb%2FDhtEu7un416roDhvvOjFLMHxLhWkl571Um46%2BSjoT%2FgENENRPAvLCqStIkrbbF4bkskO9b1KRQRruktPRmUHITIWGdbn2HELuikYzGw5KgbEBZ7%2FQOnueVrQVAuyKxsTC4sZuvcl9EMdlqq6EdwpWxqSysSvXOSw4ZrXnnaLssv7HuNwr4AVrxnE8X5NH54CEOaS7VbqjfhAVpQ119oBuieML%2Fi48MGOqUBcKpbo7aM7hGBK4UfUkQrKNaysI7LWnsNMNLYgAqhrP0UJa4sa%2FA%2FS%2BHyVfxlNbeSCVvs9pvYl1GXjs7bOzhcauz0FJaiAjLrAKS7Rr2KaDVCwadJOHPYatNs%2BzzeyGCmyZZmBxySkWUU96TUbdzF5k4KeTVEY6aKiR%2B8qBUNDm1u9BagEGmNW10oDONVZGjKYyMf8BlFlPiCjjiwhUzotOPlz7x1&X-Amz-Signature=8a409984dc554c2e296f6abf65b46585b9c4b2fce75e1e242de042fca5d9e2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2NOGNT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHMgyyNOlnV6uuAX%2FwNpGVRvC8%2BeDsP%2FTAkeOm9AlY%2BTAiEArztrSPGbq3ofKRA19slZVxp5z1JbwaNx2zJcnQ8Vrvcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDL4xhcuXLVDzzXp2yircAz4SQjDd%2B2KtK2utRguRLymyG1XVXsjOalUc7Yaa%2F7DNKuPRlf6tUM9H%2BSPe4xoceXr%2FZI7PpusDABBS%2FG6SUh0D9mvVZyylwUpkROQsvjN9YHRKghIZ%2BQiUPaR%2BQK%2FfhoL0YBKqo5EffdFD1taywUF0f5lh73jTDOeSkEc8Zods9OJFwLQDmSZw0A4UBgBLNucAXzQ6mtAmjgm9z05EehRTrXlQgXhG5ncLIbc4Qywop2pFlHfeuqj9yMoZKmMJ1icEGasEmUPNQJup5zhgmqBtet35RyHtSQPWFYSaTIGlwlQozeLSav1WprhmSVw%2Fla7j%2F1bIjvJ%2BX76C33Vajs40VAMY4JARzUh2ai2P8%2Bzs3Y6dWWGs9WCi6UjhikMFBF64w881TH9I6Jcswka0mZyg5n1lx0u2nXlb%2FDhtEu7un416roDhvvOjFLMHxLhWkl571Um46%2BSjoT%2FgENENRPAvLCqStIkrbbF4bkskO9b1KRQRruktPRmUHITIWGdbn2HELuikYzGw5KgbEBZ7%2FQOnueVrQVAuyKxsTC4sZuvcl9EMdlqq6EdwpWxqSysSvXOSw4ZrXnnaLssv7HuNwr4AVrxnE8X5NH54CEOaS7VbqjfhAVpQ119oBuieML%2Fi48MGOqUBcKpbo7aM7hGBK4UfUkQrKNaysI7LWnsNMNLYgAqhrP0UJa4sa%2FA%2FS%2BHyVfxlNbeSCVvs9pvYl1GXjs7bOzhcauz0FJaiAjLrAKS7Rr2KaDVCwadJOHPYatNs%2BzzeyGCmyZZmBxySkWUU96TUbdzF5k4KeTVEY6aKiR%2B8qBUNDm1u9BagEGmNW10oDONVZGjKYyMf8BlFlPiCjjiwhUzotOPlz7x1&X-Amz-Signature=9332eb0d0fc8db56130ae242e6c72a3751d3f2b6ccb6e8971a03ce32395ffd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

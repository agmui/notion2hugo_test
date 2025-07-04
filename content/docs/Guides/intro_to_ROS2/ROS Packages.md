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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXW2XJI7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIG8dFpiXCV9gIoeSq%2BZ5x4HsntR0V7zUIPR%2Ft7FRYca%2BAiBBlSvIbvAhUFlwKf4K4BPP%2F0AJzSW%2F1Po3yvsPROhp4yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMWb5i2OOIYJP3Yg8FKtwDP33EKCUR1ia2B1ArIFpRfgM651glaQm7UapZi6QHgv6sta15ZGubTpvBfrEvEGOQZqWjtjXVKnYoLdJYJXTMZvMSwE1pO1TeXUZjeb7e78jTVQlE%2Bs4Kf7BguxtdxofDkGa3Z5ed8PbaomNplVsW6xcp3fhVX4t94CwMYli%2FFl5wVoM69k8I972yEpdfscBoOohMPnmcNmP06mfaVQPJepXs6G%2F5ZL1q0Yk07haBIRhUsIW6Z%2FRvC3bstAoDFoR0YFLmZMpbVJ3lo6Mw%2FuoU2ee8I9Ap%2FQ0l%2BwagaviIkqgwbLO7kpwnGuS1ZVmQxo1ljiNNZIqqJ1DsFsgeniEs0GslYW%2BakkkinnsjArznQm5YrEzOrOAKQBteN1Stk4Cmq3iWk0lZIkP4vuWmca3%2FDt42Uw4ku1n0yjpLGR0QOqRYIzyYTi5TIaIz%2F%2FCPl1%2FwAfAn8CYZOE2PnN9ug4jhmNpWvtD3TB3vVyWCOd6fNDkymUm%2Bh5gE3nlMod0E6pA%2FZWoqxin9dDIlr1L0Q6%2FpAVOm01zInn7HHnA6NlIJeYtcfH2h7Cl7Yf8kZPpPKuubTmRZhxLwHk%2BvNUSSh9%2FGJt8PkWmIcSVWPrord94o9Xg8rI3ErpWg7tLzQlgw1%2BCdwwY6pgGewPoeUuK6qSQCivSvjrOz0A3xT69VJEpIZUbiE%2BUF%2BPmHysqqOMqeo%2BAq6peBX%2FP78QX5ofWFh0ChAjHX%2F771jD8LB%2FA1c29OTNsbEGQfJN%2FyHyEpk3Wz42lVrOoYSvxuAnzrsEO4B22rJqPh54blzf65nZbARp%2FD8hIwxNgjcNu1AHRJYyehJ%2BlZuIZjny5%2BMf0c1bGHm2cMEmFyiMj1B%2BdryKml&X-Amz-Signature=8c42a636776fe9cb8053820def496b173a5dabef011b77bd8b19b895358777e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXW2XJI7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIG8dFpiXCV9gIoeSq%2BZ5x4HsntR0V7zUIPR%2Ft7FRYca%2BAiBBlSvIbvAhUFlwKf4K4BPP%2F0AJzSW%2F1Po3yvsPROhp4yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMWb5i2OOIYJP3Yg8FKtwDP33EKCUR1ia2B1ArIFpRfgM651glaQm7UapZi6QHgv6sta15ZGubTpvBfrEvEGOQZqWjtjXVKnYoLdJYJXTMZvMSwE1pO1TeXUZjeb7e78jTVQlE%2Bs4Kf7BguxtdxofDkGa3Z5ed8PbaomNplVsW6xcp3fhVX4t94CwMYli%2FFl5wVoM69k8I972yEpdfscBoOohMPnmcNmP06mfaVQPJepXs6G%2F5ZL1q0Yk07haBIRhUsIW6Z%2FRvC3bstAoDFoR0YFLmZMpbVJ3lo6Mw%2FuoU2ee8I9Ap%2FQ0l%2BwagaviIkqgwbLO7kpwnGuS1ZVmQxo1ljiNNZIqqJ1DsFsgeniEs0GslYW%2BakkkinnsjArznQm5YrEzOrOAKQBteN1Stk4Cmq3iWk0lZIkP4vuWmca3%2FDt42Uw4ku1n0yjpLGR0QOqRYIzyYTi5TIaIz%2F%2FCPl1%2FwAfAn8CYZOE2PnN9ug4jhmNpWvtD3TB3vVyWCOd6fNDkymUm%2Bh5gE3nlMod0E6pA%2FZWoqxin9dDIlr1L0Q6%2FpAVOm01zInn7HHnA6NlIJeYtcfH2h7Cl7Yf8kZPpPKuubTmRZhxLwHk%2BvNUSSh9%2FGJt8PkWmIcSVWPrord94o9Xg8rI3ErpWg7tLzQlgw1%2BCdwwY6pgGewPoeUuK6qSQCivSvjrOz0A3xT69VJEpIZUbiE%2BUF%2BPmHysqqOMqeo%2BAq6peBX%2FP78QX5ofWFh0ChAjHX%2F771jD8LB%2FA1c29OTNsbEGQfJN%2FyHyEpk3Wz42lVrOoYSvxuAnzrsEO4B22rJqPh54blzf65nZbARp%2FD8hIwxNgjcNu1AHRJYyehJ%2BlZuIZjny5%2BMf0c1bGHm2cMEmFyiMj1B%2BdryKml&X-Amz-Signature=fb6d7a4f919ca8636166b33c7b87bda1203fedd35e88844e1b09365a109172fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXW2XJI7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIG8dFpiXCV9gIoeSq%2BZ5x4HsntR0V7zUIPR%2Ft7FRYca%2BAiBBlSvIbvAhUFlwKf4K4BPP%2F0AJzSW%2F1Po3yvsPROhp4yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMWb5i2OOIYJP3Yg8FKtwDP33EKCUR1ia2B1ArIFpRfgM651glaQm7UapZi6QHgv6sta15ZGubTpvBfrEvEGOQZqWjtjXVKnYoLdJYJXTMZvMSwE1pO1TeXUZjeb7e78jTVQlE%2Bs4Kf7BguxtdxofDkGa3Z5ed8PbaomNplVsW6xcp3fhVX4t94CwMYli%2FFl5wVoM69k8I972yEpdfscBoOohMPnmcNmP06mfaVQPJepXs6G%2F5ZL1q0Yk07haBIRhUsIW6Z%2FRvC3bstAoDFoR0YFLmZMpbVJ3lo6Mw%2FuoU2ee8I9Ap%2FQ0l%2BwagaviIkqgwbLO7kpwnGuS1ZVmQxo1ljiNNZIqqJ1DsFsgeniEs0GslYW%2BakkkinnsjArznQm5YrEzOrOAKQBteN1Stk4Cmq3iWk0lZIkP4vuWmca3%2FDt42Uw4ku1n0yjpLGR0QOqRYIzyYTi5TIaIz%2F%2FCPl1%2FwAfAn8CYZOE2PnN9ug4jhmNpWvtD3TB3vVyWCOd6fNDkymUm%2Bh5gE3nlMod0E6pA%2FZWoqxin9dDIlr1L0Q6%2FpAVOm01zInn7HHnA6NlIJeYtcfH2h7Cl7Yf8kZPpPKuubTmRZhxLwHk%2BvNUSSh9%2FGJt8PkWmIcSVWPrord94o9Xg8rI3ErpWg7tLzQlgw1%2BCdwwY6pgGewPoeUuK6qSQCivSvjrOz0A3xT69VJEpIZUbiE%2BUF%2BPmHysqqOMqeo%2BAq6peBX%2FP78QX5ofWFh0ChAjHX%2F771jD8LB%2FA1c29OTNsbEGQfJN%2FyHyEpk3Wz42lVrOoYSvxuAnzrsEO4B22rJqPh54blzf65nZbARp%2FD8hIwxNgjcNu1AHRJYyehJ%2BlZuIZjny5%2BMf0c1bGHm2cMEmFyiMj1B%2BdryKml&X-Amz-Signature=4f6a8f81e94cb5f301221b9e3f0f2ba6742ddd93c44eaf7d46ba23511857b9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXW2XJI7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIG8dFpiXCV9gIoeSq%2BZ5x4HsntR0V7zUIPR%2Ft7FRYca%2BAiBBlSvIbvAhUFlwKf4K4BPP%2F0AJzSW%2F1Po3yvsPROhp4yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMWb5i2OOIYJP3Yg8FKtwDP33EKCUR1ia2B1ArIFpRfgM651glaQm7UapZi6QHgv6sta15ZGubTpvBfrEvEGOQZqWjtjXVKnYoLdJYJXTMZvMSwE1pO1TeXUZjeb7e78jTVQlE%2Bs4Kf7BguxtdxofDkGa3Z5ed8PbaomNplVsW6xcp3fhVX4t94CwMYli%2FFl5wVoM69k8I972yEpdfscBoOohMPnmcNmP06mfaVQPJepXs6G%2F5ZL1q0Yk07haBIRhUsIW6Z%2FRvC3bstAoDFoR0YFLmZMpbVJ3lo6Mw%2FuoU2ee8I9Ap%2FQ0l%2BwagaviIkqgwbLO7kpwnGuS1ZVmQxo1ljiNNZIqqJ1DsFsgeniEs0GslYW%2BakkkinnsjArznQm5YrEzOrOAKQBteN1Stk4Cmq3iWk0lZIkP4vuWmca3%2FDt42Uw4ku1n0yjpLGR0QOqRYIzyYTi5TIaIz%2F%2FCPl1%2FwAfAn8CYZOE2PnN9ug4jhmNpWvtD3TB3vVyWCOd6fNDkymUm%2Bh5gE3nlMod0E6pA%2FZWoqxin9dDIlr1L0Q6%2FpAVOm01zInn7HHnA6NlIJeYtcfH2h7Cl7Yf8kZPpPKuubTmRZhxLwHk%2BvNUSSh9%2FGJt8PkWmIcSVWPrord94o9Xg8rI3ErpWg7tLzQlgw1%2BCdwwY6pgGewPoeUuK6qSQCivSvjrOz0A3xT69VJEpIZUbiE%2BUF%2BPmHysqqOMqeo%2BAq6peBX%2FP78QX5ofWFh0ChAjHX%2F771jD8LB%2FA1c29OTNsbEGQfJN%2FyHyEpk3Wz42lVrOoYSvxuAnzrsEO4B22rJqPh54blzf65nZbARp%2FD8hIwxNgjcNu1AHRJYyehJ%2BlZuIZjny5%2BMf0c1bGHm2cMEmFyiMj1B%2BdryKml&X-Amz-Signature=4615a16f2d11ade6371efdf8de11f466e9f12bfe60f81e02974bc3a0bb8336ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXW2XJI7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIG8dFpiXCV9gIoeSq%2BZ5x4HsntR0V7zUIPR%2Ft7FRYca%2BAiBBlSvIbvAhUFlwKf4K4BPP%2F0AJzSW%2F1Po3yvsPROhp4yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMWb5i2OOIYJP3Yg8FKtwDP33EKCUR1ia2B1ArIFpRfgM651glaQm7UapZi6QHgv6sta15ZGubTpvBfrEvEGOQZqWjtjXVKnYoLdJYJXTMZvMSwE1pO1TeXUZjeb7e78jTVQlE%2Bs4Kf7BguxtdxofDkGa3Z5ed8PbaomNplVsW6xcp3fhVX4t94CwMYli%2FFl5wVoM69k8I972yEpdfscBoOohMPnmcNmP06mfaVQPJepXs6G%2F5ZL1q0Yk07haBIRhUsIW6Z%2FRvC3bstAoDFoR0YFLmZMpbVJ3lo6Mw%2FuoU2ee8I9Ap%2FQ0l%2BwagaviIkqgwbLO7kpwnGuS1ZVmQxo1ljiNNZIqqJ1DsFsgeniEs0GslYW%2BakkkinnsjArznQm5YrEzOrOAKQBteN1Stk4Cmq3iWk0lZIkP4vuWmca3%2FDt42Uw4ku1n0yjpLGR0QOqRYIzyYTi5TIaIz%2F%2FCPl1%2FwAfAn8CYZOE2PnN9ug4jhmNpWvtD3TB3vVyWCOd6fNDkymUm%2Bh5gE3nlMod0E6pA%2FZWoqxin9dDIlr1L0Q6%2FpAVOm01zInn7HHnA6NlIJeYtcfH2h7Cl7Yf8kZPpPKuubTmRZhxLwHk%2BvNUSSh9%2FGJt8PkWmIcSVWPrord94o9Xg8rI3ErpWg7tLzQlgw1%2BCdwwY6pgGewPoeUuK6qSQCivSvjrOz0A3xT69VJEpIZUbiE%2BUF%2BPmHysqqOMqeo%2BAq6peBX%2FP78QX5ofWFh0ChAjHX%2F771jD8LB%2FA1c29OTNsbEGQfJN%2FyHyEpk3Wz42lVrOoYSvxuAnzrsEO4B22rJqPh54blzf65nZbARp%2FD8hIwxNgjcNu1AHRJYyehJ%2BlZuIZjny5%2BMf0c1bGHm2cMEmFyiMj1B%2BdryKml&X-Amz-Signature=57979d1460939b618ef70617c0b60dbbeeea390b8d567ba4b59539214e24bfa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXW2XJI7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIG8dFpiXCV9gIoeSq%2BZ5x4HsntR0V7zUIPR%2Ft7FRYca%2BAiBBlSvIbvAhUFlwKf4K4BPP%2F0AJzSW%2F1Po3yvsPROhp4yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMWb5i2OOIYJP3Yg8FKtwDP33EKCUR1ia2B1ArIFpRfgM651glaQm7UapZi6QHgv6sta15ZGubTpvBfrEvEGOQZqWjtjXVKnYoLdJYJXTMZvMSwE1pO1TeXUZjeb7e78jTVQlE%2Bs4Kf7BguxtdxofDkGa3Z5ed8PbaomNplVsW6xcp3fhVX4t94CwMYli%2FFl5wVoM69k8I972yEpdfscBoOohMPnmcNmP06mfaVQPJepXs6G%2F5ZL1q0Yk07haBIRhUsIW6Z%2FRvC3bstAoDFoR0YFLmZMpbVJ3lo6Mw%2FuoU2ee8I9Ap%2FQ0l%2BwagaviIkqgwbLO7kpwnGuS1ZVmQxo1ljiNNZIqqJ1DsFsgeniEs0GslYW%2BakkkinnsjArznQm5YrEzOrOAKQBteN1Stk4Cmq3iWk0lZIkP4vuWmca3%2FDt42Uw4ku1n0yjpLGR0QOqRYIzyYTi5TIaIz%2F%2FCPl1%2FwAfAn8CYZOE2PnN9ug4jhmNpWvtD3TB3vVyWCOd6fNDkymUm%2Bh5gE3nlMod0E6pA%2FZWoqxin9dDIlr1L0Q6%2FpAVOm01zInn7HHnA6NlIJeYtcfH2h7Cl7Yf8kZPpPKuubTmRZhxLwHk%2BvNUSSh9%2FGJt8PkWmIcSVWPrord94o9Xg8rI3ErpWg7tLzQlgw1%2BCdwwY6pgGewPoeUuK6qSQCivSvjrOz0A3xT69VJEpIZUbiE%2BUF%2BPmHysqqOMqeo%2BAq6peBX%2FP78QX5ofWFh0ChAjHX%2F771jD8LB%2FA1c29OTNsbEGQfJN%2FyHyEpk3Wz42lVrOoYSvxuAnzrsEO4B22rJqPh54blzf65nZbARp%2FD8hIwxNgjcNu1AHRJYyehJ%2BlZuIZjny5%2BMf0c1bGHm2cMEmFyiMj1B%2BdryKml&X-Amz-Signature=a99f3d93a517097296ec6447e077bf7d020b20498a19b806aa8da32b10eff2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXW2XJI7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIG8dFpiXCV9gIoeSq%2BZ5x4HsntR0V7zUIPR%2Ft7FRYca%2BAiBBlSvIbvAhUFlwKf4K4BPP%2F0AJzSW%2F1Po3yvsPROhp4yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMWb5i2OOIYJP3Yg8FKtwDP33EKCUR1ia2B1ArIFpRfgM651glaQm7UapZi6QHgv6sta15ZGubTpvBfrEvEGOQZqWjtjXVKnYoLdJYJXTMZvMSwE1pO1TeXUZjeb7e78jTVQlE%2Bs4Kf7BguxtdxofDkGa3Z5ed8PbaomNplVsW6xcp3fhVX4t94CwMYli%2FFl5wVoM69k8I972yEpdfscBoOohMPnmcNmP06mfaVQPJepXs6G%2F5ZL1q0Yk07haBIRhUsIW6Z%2FRvC3bstAoDFoR0YFLmZMpbVJ3lo6Mw%2FuoU2ee8I9Ap%2FQ0l%2BwagaviIkqgwbLO7kpwnGuS1ZVmQxo1ljiNNZIqqJ1DsFsgeniEs0GslYW%2BakkkinnsjArznQm5YrEzOrOAKQBteN1Stk4Cmq3iWk0lZIkP4vuWmca3%2FDt42Uw4ku1n0yjpLGR0QOqRYIzyYTi5TIaIz%2F%2FCPl1%2FwAfAn8CYZOE2PnN9ug4jhmNpWvtD3TB3vVyWCOd6fNDkymUm%2Bh5gE3nlMod0E6pA%2FZWoqxin9dDIlr1L0Q6%2FpAVOm01zInn7HHnA6NlIJeYtcfH2h7Cl7Yf8kZPpPKuubTmRZhxLwHk%2BvNUSSh9%2FGJt8PkWmIcSVWPrord94o9Xg8rI3ErpWg7tLzQlgw1%2BCdwwY6pgGewPoeUuK6qSQCivSvjrOz0A3xT69VJEpIZUbiE%2BUF%2BPmHysqqOMqeo%2BAq6peBX%2FP78QX5ofWFh0ChAjHX%2F771jD8LB%2FA1c29OTNsbEGQfJN%2FyHyEpk3Wz42lVrOoYSvxuAnzrsEO4B22rJqPh54blzf65nZbARp%2FD8hIwxNgjcNu1AHRJYyehJ%2BlZuIZjny5%2BMf0c1bGHm2cMEmFyiMj1B%2BdryKml&X-Amz-Signature=a58bd83e0353b9e1f469d4774e34fecfd091173fb0af3528492e81068699466a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

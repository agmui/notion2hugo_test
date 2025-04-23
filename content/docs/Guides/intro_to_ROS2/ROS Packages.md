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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVMZTRL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAv%2FBS07DdgDHuWDjHyuicQIUKLRSu9oiggyIyA2SLlwAiBDZPwBQimEaesIxM4TAp%2Br1IjKcFugZ6YctpGDPxM1SSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2rr4DCM12pRlKNzKtwDsufRzkSMmB5MNdjR2eNUm%2FF0aQof5LETpCLDaGHa7wl0GVWXxrepTF4mbcGpglzpwreTxAm35fSBUfxrOQA0FneFSahDlr%2BCDyB99VEWufdYtI7Y2WBMlJHW7xe7LO%2BTnQgL81fVm6KB6qbU5i9UmrVIMTha%2F7X%2F4C3Spu4EHbzWg0fgh5bFU2c7SAVJGoSaBWWwzlYELiYfv%2BwPkLgP%2Byjl44WdxKjqdZNPG7uZW8thsx6w3oNw4svk9m8xtQo08VIHPQ0B7cDFwMJxSHx6Jo5krzk6KASZDpvd4dnHxOYEPTfTquMzbcVLtYxXLQBoXwUBZXzNSTGJn6hKJ05bSgqIjnC601g5TLTgHVZK2Fc9DFpVqWAG1KGBwC7C24ejzr83GtYNrh2Uu9biPZxHQ3eUhr0tNolhDxXZlmJwFfV6My8a5a1Jb%2BqXhn7oWjIQ39AO7kXAOcfy5Q77PoVPkgF7nGOFuf%2FopI3OhGOngRe%2FjEb4zFDXTHyKdVG11uX9M9CMATFw2TJZfc1RNTCdJDIvgDoWy9csj7Kvgb0Wnq1XaTB%2BxZAUxKjTO1%2FZX5ABR9pyghOf%2F9IkKei6iUFYMweefkhhq80nNi3d67fnvV8Dp3%2BNGHj7jyHGPRswjPOgwAY6pgHKeR1t5GW6kGaCFsGr3x%2BdpqbiTbOr0zKpghcaCVLbJY2Hrxho7IJyg%2BpypIzx1NGaVV2g4ChvaBV4CsW8bBEVo8kXzBDkdD6EM07NqvNjk6jfUxsVghHlTxYfDDnkDoEX%2FS1Thv5MWk%2FQnPashhbkRtbOPQ%2BubZ0p0UECd3TB4jNmV3KPKFlgHnOYLF7fI4OqobmzO%2FoYjuuj7EnrvI9Neoc0TCbT&X-Amz-Signature=f9e598591849ef700ac85568b2d590d2be107066d095f018272866557701536d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVMZTRL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAv%2FBS07DdgDHuWDjHyuicQIUKLRSu9oiggyIyA2SLlwAiBDZPwBQimEaesIxM4TAp%2Br1IjKcFugZ6YctpGDPxM1SSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2rr4DCM12pRlKNzKtwDsufRzkSMmB5MNdjR2eNUm%2FF0aQof5LETpCLDaGHa7wl0GVWXxrepTF4mbcGpglzpwreTxAm35fSBUfxrOQA0FneFSahDlr%2BCDyB99VEWufdYtI7Y2WBMlJHW7xe7LO%2BTnQgL81fVm6KB6qbU5i9UmrVIMTha%2F7X%2F4C3Spu4EHbzWg0fgh5bFU2c7SAVJGoSaBWWwzlYELiYfv%2BwPkLgP%2Byjl44WdxKjqdZNPG7uZW8thsx6w3oNw4svk9m8xtQo08VIHPQ0B7cDFwMJxSHx6Jo5krzk6KASZDpvd4dnHxOYEPTfTquMzbcVLtYxXLQBoXwUBZXzNSTGJn6hKJ05bSgqIjnC601g5TLTgHVZK2Fc9DFpVqWAG1KGBwC7C24ejzr83GtYNrh2Uu9biPZxHQ3eUhr0tNolhDxXZlmJwFfV6My8a5a1Jb%2BqXhn7oWjIQ39AO7kXAOcfy5Q77PoVPkgF7nGOFuf%2FopI3OhGOngRe%2FjEb4zFDXTHyKdVG11uX9M9CMATFw2TJZfc1RNTCdJDIvgDoWy9csj7Kvgb0Wnq1XaTB%2BxZAUxKjTO1%2FZX5ABR9pyghOf%2F9IkKei6iUFYMweefkhhq80nNi3d67fnvV8Dp3%2BNGHj7jyHGPRswjPOgwAY6pgHKeR1t5GW6kGaCFsGr3x%2BdpqbiTbOr0zKpghcaCVLbJY2Hrxho7IJyg%2BpypIzx1NGaVV2g4ChvaBV4CsW8bBEVo8kXzBDkdD6EM07NqvNjk6jfUxsVghHlTxYfDDnkDoEX%2FS1Thv5MWk%2FQnPashhbkRtbOPQ%2BubZ0p0UECd3TB4jNmV3KPKFlgHnOYLF7fI4OqobmzO%2FoYjuuj7EnrvI9Neoc0TCbT&X-Amz-Signature=141d5ece45a0dcdb5cc0c068f7513f426f070fe8e07120d50e3d893fc90bc056&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVMZTRL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAv%2FBS07DdgDHuWDjHyuicQIUKLRSu9oiggyIyA2SLlwAiBDZPwBQimEaesIxM4TAp%2Br1IjKcFugZ6YctpGDPxM1SSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2rr4DCM12pRlKNzKtwDsufRzkSMmB5MNdjR2eNUm%2FF0aQof5LETpCLDaGHa7wl0GVWXxrepTF4mbcGpglzpwreTxAm35fSBUfxrOQA0FneFSahDlr%2BCDyB99VEWufdYtI7Y2WBMlJHW7xe7LO%2BTnQgL81fVm6KB6qbU5i9UmrVIMTha%2F7X%2F4C3Spu4EHbzWg0fgh5bFU2c7SAVJGoSaBWWwzlYELiYfv%2BwPkLgP%2Byjl44WdxKjqdZNPG7uZW8thsx6w3oNw4svk9m8xtQo08VIHPQ0B7cDFwMJxSHx6Jo5krzk6KASZDpvd4dnHxOYEPTfTquMzbcVLtYxXLQBoXwUBZXzNSTGJn6hKJ05bSgqIjnC601g5TLTgHVZK2Fc9DFpVqWAG1KGBwC7C24ejzr83GtYNrh2Uu9biPZxHQ3eUhr0tNolhDxXZlmJwFfV6My8a5a1Jb%2BqXhn7oWjIQ39AO7kXAOcfy5Q77PoVPkgF7nGOFuf%2FopI3OhGOngRe%2FjEb4zFDXTHyKdVG11uX9M9CMATFw2TJZfc1RNTCdJDIvgDoWy9csj7Kvgb0Wnq1XaTB%2BxZAUxKjTO1%2FZX5ABR9pyghOf%2F9IkKei6iUFYMweefkhhq80nNi3d67fnvV8Dp3%2BNGHj7jyHGPRswjPOgwAY6pgHKeR1t5GW6kGaCFsGr3x%2BdpqbiTbOr0zKpghcaCVLbJY2Hrxho7IJyg%2BpypIzx1NGaVV2g4ChvaBV4CsW8bBEVo8kXzBDkdD6EM07NqvNjk6jfUxsVghHlTxYfDDnkDoEX%2FS1Thv5MWk%2FQnPashhbkRtbOPQ%2BubZ0p0UECd3TB4jNmV3KPKFlgHnOYLF7fI4OqobmzO%2FoYjuuj7EnrvI9Neoc0TCbT&X-Amz-Signature=ef2a03533884b29eb7e59d13522a210a8ded0a2797e0b86084bab2c09aabff2d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVMZTRL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAv%2FBS07DdgDHuWDjHyuicQIUKLRSu9oiggyIyA2SLlwAiBDZPwBQimEaesIxM4TAp%2Br1IjKcFugZ6YctpGDPxM1SSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2rr4DCM12pRlKNzKtwDsufRzkSMmB5MNdjR2eNUm%2FF0aQof5LETpCLDaGHa7wl0GVWXxrepTF4mbcGpglzpwreTxAm35fSBUfxrOQA0FneFSahDlr%2BCDyB99VEWufdYtI7Y2WBMlJHW7xe7LO%2BTnQgL81fVm6KB6qbU5i9UmrVIMTha%2F7X%2F4C3Spu4EHbzWg0fgh5bFU2c7SAVJGoSaBWWwzlYELiYfv%2BwPkLgP%2Byjl44WdxKjqdZNPG7uZW8thsx6w3oNw4svk9m8xtQo08VIHPQ0B7cDFwMJxSHx6Jo5krzk6KASZDpvd4dnHxOYEPTfTquMzbcVLtYxXLQBoXwUBZXzNSTGJn6hKJ05bSgqIjnC601g5TLTgHVZK2Fc9DFpVqWAG1KGBwC7C24ejzr83GtYNrh2Uu9biPZxHQ3eUhr0tNolhDxXZlmJwFfV6My8a5a1Jb%2BqXhn7oWjIQ39AO7kXAOcfy5Q77PoVPkgF7nGOFuf%2FopI3OhGOngRe%2FjEb4zFDXTHyKdVG11uX9M9CMATFw2TJZfc1RNTCdJDIvgDoWy9csj7Kvgb0Wnq1XaTB%2BxZAUxKjTO1%2FZX5ABR9pyghOf%2F9IkKei6iUFYMweefkhhq80nNi3d67fnvV8Dp3%2BNGHj7jyHGPRswjPOgwAY6pgHKeR1t5GW6kGaCFsGr3x%2BdpqbiTbOr0zKpghcaCVLbJY2Hrxho7IJyg%2BpypIzx1NGaVV2g4ChvaBV4CsW8bBEVo8kXzBDkdD6EM07NqvNjk6jfUxsVghHlTxYfDDnkDoEX%2FS1Thv5MWk%2FQnPashhbkRtbOPQ%2BubZ0p0UECd3TB4jNmV3KPKFlgHnOYLF7fI4OqobmzO%2FoYjuuj7EnrvI9Neoc0TCbT&X-Amz-Signature=8e7659a06b3318925197405fafde0fbb998451514bb48002cdff585eb954fdd7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVMZTRL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAv%2FBS07DdgDHuWDjHyuicQIUKLRSu9oiggyIyA2SLlwAiBDZPwBQimEaesIxM4TAp%2Br1IjKcFugZ6YctpGDPxM1SSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2rr4DCM12pRlKNzKtwDsufRzkSMmB5MNdjR2eNUm%2FF0aQof5LETpCLDaGHa7wl0GVWXxrepTF4mbcGpglzpwreTxAm35fSBUfxrOQA0FneFSahDlr%2BCDyB99VEWufdYtI7Y2WBMlJHW7xe7LO%2BTnQgL81fVm6KB6qbU5i9UmrVIMTha%2F7X%2F4C3Spu4EHbzWg0fgh5bFU2c7SAVJGoSaBWWwzlYELiYfv%2BwPkLgP%2Byjl44WdxKjqdZNPG7uZW8thsx6w3oNw4svk9m8xtQo08VIHPQ0B7cDFwMJxSHx6Jo5krzk6KASZDpvd4dnHxOYEPTfTquMzbcVLtYxXLQBoXwUBZXzNSTGJn6hKJ05bSgqIjnC601g5TLTgHVZK2Fc9DFpVqWAG1KGBwC7C24ejzr83GtYNrh2Uu9biPZxHQ3eUhr0tNolhDxXZlmJwFfV6My8a5a1Jb%2BqXhn7oWjIQ39AO7kXAOcfy5Q77PoVPkgF7nGOFuf%2FopI3OhGOngRe%2FjEb4zFDXTHyKdVG11uX9M9CMATFw2TJZfc1RNTCdJDIvgDoWy9csj7Kvgb0Wnq1XaTB%2BxZAUxKjTO1%2FZX5ABR9pyghOf%2F9IkKei6iUFYMweefkhhq80nNi3d67fnvV8Dp3%2BNGHj7jyHGPRswjPOgwAY6pgHKeR1t5GW6kGaCFsGr3x%2BdpqbiTbOr0zKpghcaCVLbJY2Hrxho7IJyg%2BpypIzx1NGaVV2g4ChvaBV4CsW8bBEVo8kXzBDkdD6EM07NqvNjk6jfUxsVghHlTxYfDDnkDoEX%2FS1Thv5MWk%2FQnPashhbkRtbOPQ%2BubZ0p0UECd3TB4jNmV3KPKFlgHnOYLF7fI4OqobmzO%2FoYjuuj7EnrvI9Neoc0TCbT&X-Amz-Signature=80088dc07a874c0592c25f96acc13f48084038b8942d68fc10e0352ffc5608ab&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVMZTRL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAv%2FBS07DdgDHuWDjHyuicQIUKLRSu9oiggyIyA2SLlwAiBDZPwBQimEaesIxM4TAp%2Br1IjKcFugZ6YctpGDPxM1SSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2rr4DCM12pRlKNzKtwDsufRzkSMmB5MNdjR2eNUm%2FF0aQof5LETpCLDaGHa7wl0GVWXxrepTF4mbcGpglzpwreTxAm35fSBUfxrOQA0FneFSahDlr%2BCDyB99VEWufdYtI7Y2WBMlJHW7xe7LO%2BTnQgL81fVm6KB6qbU5i9UmrVIMTha%2F7X%2F4C3Spu4EHbzWg0fgh5bFU2c7SAVJGoSaBWWwzlYELiYfv%2BwPkLgP%2Byjl44WdxKjqdZNPG7uZW8thsx6w3oNw4svk9m8xtQo08VIHPQ0B7cDFwMJxSHx6Jo5krzk6KASZDpvd4dnHxOYEPTfTquMzbcVLtYxXLQBoXwUBZXzNSTGJn6hKJ05bSgqIjnC601g5TLTgHVZK2Fc9DFpVqWAG1KGBwC7C24ejzr83GtYNrh2Uu9biPZxHQ3eUhr0tNolhDxXZlmJwFfV6My8a5a1Jb%2BqXhn7oWjIQ39AO7kXAOcfy5Q77PoVPkgF7nGOFuf%2FopI3OhGOngRe%2FjEb4zFDXTHyKdVG11uX9M9CMATFw2TJZfc1RNTCdJDIvgDoWy9csj7Kvgb0Wnq1XaTB%2BxZAUxKjTO1%2FZX5ABR9pyghOf%2F9IkKei6iUFYMweefkhhq80nNi3d67fnvV8Dp3%2BNGHj7jyHGPRswjPOgwAY6pgHKeR1t5GW6kGaCFsGr3x%2BdpqbiTbOr0zKpghcaCVLbJY2Hrxho7IJyg%2BpypIzx1NGaVV2g4ChvaBV4CsW8bBEVo8kXzBDkdD6EM07NqvNjk6jfUxsVghHlTxYfDDnkDoEX%2FS1Thv5MWk%2FQnPashhbkRtbOPQ%2BubZ0p0UECd3TB4jNmV3KPKFlgHnOYLF7fI4OqobmzO%2FoYjuuj7EnrvI9Neoc0TCbT&X-Amz-Signature=28a75831426a04a2c90054eaed1510024e418739d9b9412de47fcc2f122464fb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVMZTRL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAv%2FBS07DdgDHuWDjHyuicQIUKLRSu9oiggyIyA2SLlwAiBDZPwBQimEaesIxM4TAp%2Br1IjKcFugZ6YctpGDPxM1SSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2rr4DCM12pRlKNzKtwDsufRzkSMmB5MNdjR2eNUm%2FF0aQof5LETpCLDaGHa7wl0GVWXxrepTF4mbcGpglzpwreTxAm35fSBUfxrOQA0FneFSahDlr%2BCDyB99VEWufdYtI7Y2WBMlJHW7xe7LO%2BTnQgL81fVm6KB6qbU5i9UmrVIMTha%2F7X%2F4C3Spu4EHbzWg0fgh5bFU2c7SAVJGoSaBWWwzlYELiYfv%2BwPkLgP%2Byjl44WdxKjqdZNPG7uZW8thsx6w3oNw4svk9m8xtQo08VIHPQ0B7cDFwMJxSHx6Jo5krzk6KASZDpvd4dnHxOYEPTfTquMzbcVLtYxXLQBoXwUBZXzNSTGJn6hKJ05bSgqIjnC601g5TLTgHVZK2Fc9DFpVqWAG1KGBwC7C24ejzr83GtYNrh2Uu9biPZxHQ3eUhr0tNolhDxXZlmJwFfV6My8a5a1Jb%2BqXhn7oWjIQ39AO7kXAOcfy5Q77PoVPkgF7nGOFuf%2FopI3OhGOngRe%2FjEb4zFDXTHyKdVG11uX9M9CMATFw2TJZfc1RNTCdJDIvgDoWy9csj7Kvgb0Wnq1XaTB%2BxZAUxKjTO1%2FZX5ABR9pyghOf%2F9IkKei6iUFYMweefkhhq80nNi3d67fnvV8Dp3%2BNGHj7jyHGPRswjPOgwAY6pgHKeR1t5GW6kGaCFsGr3x%2BdpqbiTbOr0zKpghcaCVLbJY2Hrxho7IJyg%2BpypIzx1NGaVV2g4ChvaBV4CsW8bBEVo8kXzBDkdD6EM07NqvNjk6jfUxsVghHlTxYfDDnkDoEX%2FS1Thv5MWk%2FQnPashhbkRtbOPQ%2BubZ0p0UECd3TB4jNmV3KPKFlgHnOYLF7fI4OqobmzO%2FoYjuuj7EnrvI9Neoc0TCbT&X-Amz-Signature=d1ccac61321a165436dfef8db584864e3d0084dc396689f63483a7174697740d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

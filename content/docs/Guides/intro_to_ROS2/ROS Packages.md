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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOAWD2O6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE6VcjyyBUuIGVW8MbTPtSEmGEGbQU%2BiaoqE9NsVGkjnAiAMeho00yVovQXmuatdFWZ9QnKDgHqk2Bx1%2FT1U%2BcyqIiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmKGH%2FwPlP%2FUvUTCKtwDELisbO9elEJoRkKb13oZFpFw%2BT%2BWNC57wZk6wd8SyWioKzvZ379u5ImdPV6FLml4%2B4kQbA9Wzdz7TtdK7UQ%2BCTG8WTDLZeEXycR2W4%2FG6f5UtzzIz9lNsCB5f4p2CjEFn%2FuLUVKekP6ifeMfPxbU7WsGetYJwod7jebv2BoJ%2FnPsC0pG5L9vSyznKKbX6BeycAifaPYcuFeSkLnSV0ChiNFpSQLp8AFAMGv3E%2FW25TAAJlYrFapn7I9iCRVtXrCot2nRZRI5CelD7IcuRk1eex2uyqlD0XqqJrsOui9sZFZuFH26hO3LV9v604h%2BI8ro2xi5v7e3Ai4MPA5fKq15OQE0uBQ%2BhYbRlUpyPsDYsjyrgkvhAHZAp6YNnPNtVi0nQYNcsqlLmHxdnE7k5Eeeii1YTEP45TRm%2BqogFlY9HQXdvnpg4Ek07nvm8vcbopkcyLgBXn%2B0FQ0vPKVAM0fHHACLHhZCgsmGontOZujU4LNxfKGYb4s23U6peyQCA%2BcLODipwGdORmSO8Ns9a1o5noxJVBGkKlQPNpzEW50JcqvMFm9MkM5XwMDiMfu64Dx45a3D5cQJIen5gMZsYtCZOue1PbCPt5gjr3qAfnls2jjk9mR4aArlo%2B%2FwuXQwtfGfxAY6pgG8HgqKEDTOX11tNObip1Cleio2pjSSj30MvX28byr0PkZNHfXEpzZC94smx4yu%2BFsJTP2UVl16nUweCGCvae4PRDUhOU8g%2BDm1FcfA6vZu5y3RKtAfpKn3nA8uARP9nelgHUAZEcs%2BrzDHxbDuRFHyPjfg1TzV%2BUMO95F88ng%2BJOVdyekHAlk1lc6TfpG%2BiSyKvfj3kquMciFp%2F3xGgp6g2GxNYwP8&X-Amz-Signature=41e3a8c041a021fbdc87ef3781272a029f0b7e09d281512ab51e2e6101e30bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOAWD2O6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE6VcjyyBUuIGVW8MbTPtSEmGEGbQU%2BiaoqE9NsVGkjnAiAMeho00yVovQXmuatdFWZ9QnKDgHqk2Bx1%2FT1U%2BcyqIiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmKGH%2FwPlP%2FUvUTCKtwDELisbO9elEJoRkKb13oZFpFw%2BT%2BWNC57wZk6wd8SyWioKzvZ379u5ImdPV6FLml4%2B4kQbA9Wzdz7TtdK7UQ%2BCTG8WTDLZeEXycR2W4%2FG6f5UtzzIz9lNsCB5f4p2CjEFn%2FuLUVKekP6ifeMfPxbU7WsGetYJwod7jebv2BoJ%2FnPsC0pG5L9vSyznKKbX6BeycAifaPYcuFeSkLnSV0ChiNFpSQLp8AFAMGv3E%2FW25TAAJlYrFapn7I9iCRVtXrCot2nRZRI5CelD7IcuRk1eex2uyqlD0XqqJrsOui9sZFZuFH26hO3LV9v604h%2BI8ro2xi5v7e3Ai4MPA5fKq15OQE0uBQ%2BhYbRlUpyPsDYsjyrgkvhAHZAp6YNnPNtVi0nQYNcsqlLmHxdnE7k5Eeeii1YTEP45TRm%2BqogFlY9HQXdvnpg4Ek07nvm8vcbopkcyLgBXn%2B0FQ0vPKVAM0fHHACLHhZCgsmGontOZujU4LNxfKGYb4s23U6peyQCA%2BcLODipwGdORmSO8Ns9a1o5noxJVBGkKlQPNpzEW50JcqvMFm9MkM5XwMDiMfu64Dx45a3D5cQJIen5gMZsYtCZOue1PbCPt5gjr3qAfnls2jjk9mR4aArlo%2B%2FwuXQwtfGfxAY6pgG8HgqKEDTOX11tNObip1Cleio2pjSSj30MvX28byr0PkZNHfXEpzZC94smx4yu%2BFsJTP2UVl16nUweCGCvae4PRDUhOU8g%2BDm1FcfA6vZu5y3RKtAfpKn3nA8uARP9nelgHUAZEcs%2BrzDHxbDuRFHyPjfg1TzV%2BUMO95F88ng%2BJOVdyekHAlk1lc6TfpG%2BiSyKvfj3kquMciFp%2F3xGgp6g2GxNYwP8&X-Amz-Signature=a38011cf4efc06e6e48aacffbd4bce315d37996e53305a08ee7870721f086f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOAWD2O6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE6VcjyyBUuIGVW8MbTPtSEmGEGbQU%2BiaoqE9NsVGkjnAiAMeho00yVovQXmuatdFWZ9QnKDgHqk2Bx1%2FT1U%2BcyqIiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmKGH%2FwPlP%2FUvUTCKtwDELisbO9elEJoRkKb13oZFpFw%2BT%2BWNC57wZk6wd8SyWioKzvZ379u5ImdPV6FLml4%2B4kQbA9Wzdz7TtdK7UQ%2BCTG8WTDLZeEXycR2W4%2FG6f5UtzzIz9lNsCB5f4p2CjEFn%2FuLUVKekP6ifeMfPxbU7WsGetYJwod7jebv2BoJ%2FnPsC0pG5L9vSyznKKbX6BeycAifaPYcuFeSkLnSV0ChiNFpSQLp8AFAMGv3E%2FW25TAAJlYrFapn7I9iCRVtXrCot2nRZRI5CelD7IcuRk1eex2uyqlD0XqqJrsOui9sZFZuFH26hO3LV9v604h%2BI8ro2xi5v7e3Ai4MPA5fKq15OQE0uBQ%2BhYbRlUpyPsDYsjyrgkvhAHZAp6YNnPNtVi0nQYNcsqlLmHxdnE7k5Eeeii1YTEP45TRm%2BqogFlY9HQXdvnpg4Ek07nvm8vcbopkcyLgBXn%2B0FQ0vPKVAM0fHHACLHhZCgsmGontOZujU4LNxfKGYb4s23U6peyQCA%2BcLODipwGdORmSO8Ns9a1o5noxJVBGkKlQPNpzEW50JcqvMFm9MkM5XwMDiMfu64Dx45a3D5cQJIen5gMZsYtCZOue1PbCPt5gjr3qAfnls2jjk9mR4aArlo%2B%2FwuXQwtfGfxAY6pgG8HgqKEDTOX11tNObip1Cleio2pjSSj30MvX28byr0PkZNHfXEpzZC94smx4yu%2BFsJTP2UVl16nUweCGCvae4PRDUhOU8g%2BDm1FcfA6vZu5y3RKtAfpKn3nA8uARP9nelgHUAZEcs%2BrzDHxbDuRFHyPjfg1TzV%2BUMO95F88ng%2BJOVdyekHAlk1lc6TfpG%2BiSyKvfj3kquMciFp%2F3xGgp6g2GxNYwP8&X-Amz-Signature=11f25e5384f0e7f968d77bd9360b1efb7b60130f42884af431e179cbe2a7de65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOAWD2O6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE6VcjyyBUuIGVW8MbTPtSEmGEGbQU%2BiaoqE9NsVGkjnAiAMeho00yVovQXmuatdFWZ9QnKDgHqk2Bx1%2FT1U%2BcyqIiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmKGH%2FwPlP%2FUvUTCKtwDELisbO9elEJoRkKb13oZFpFw%2BT%2BWNC57wZk6wd8SyWioKzvZ379u5ImdPV6FLml4%2B4kQbA9Wzdz7TtdK7UQ%2BCTG8WTDLZeEXycR2W4%2FG6f5UtzzIz9lNsCB5f4p2CjEFn%2FuLUVKekP6ifeMfPxbU7WsGetYJwod7jebv2BoJ%2FnPsC0pG5L9vSyznKKbX6BeycAifaPYcuFeSkLnSV0ChiNFpSQLp8AFAMGv3E%2FW25TAAJlYrFapn7I9iCRVtXrCot2nRZRI5CelD7IcuRk1eex2uyqlD0XqqJrsOui9sZFZuFH26hO3LV9v604h%2BI8ro2xi5v7e3Ai4MPA5fKq15OQE0uBQ%2BhYbRlUpyPsDYsjyrgkvhAHZAp6YNnPNtVi0nQYNcsqlLmHxdnE7k5Eeeii1YTEP45TRm%2BqogFlY9HQXdvnpg4Ek07nvm8vcbopkcyLgBXn%2B0FQ0vPKVAM0fHHACLHhZCgsmGontOZujU4LNxfKGYb4s23U6peyQCA%2BcLODipwGdORmSO8Ns9a1o5noxJVBGkKlQPNpzEW50JcqvMFm9MkM5XwMDiMfu64Dx45a3D5cQJIen5gMZsYtCZOue1PbCPt5gjr3qAfnls2jjk9mR4aArlo%2B%2FwuXQwtfGfxAY6pgG8HgqKEDTOX11tNObip1Cleio2pjSSj30MvX28byr0PkZNHfXEpzZC94smx4yu%2BFsJTP2UVl16nUweCGCvae4PRDUhOU8g%2BDm1FcfA6vZu5y3RKtAfpKn3nA8uARP9nelgHUAZEcs%2BrzDHxbDuRFHyPjfg1TzV%2BUMO95F88ng%2BJOVdyekHAlk1lc6TfpG%2BiSyKvfj3kquMciFp%2F3xGgp6g2GxNYwP8&X-Amz-Signature=2db0f424c2b35022ef8a3950f1a78a250a704d76c0ce62b1f1a0f110f48226ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOAWD2O6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE6VcjyyBUuIGVW8MbTPtSEmGEGbQU%2BiaoqE9NsVGkjnAiAMeho00yVovQXmuatdFWZ9QnKDgHqk2Bx1%2FT1U%2BcyqIiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmKGH%2FwPlP%2FUvUTCKtwDELisbO9elEJoRkKb13oZFpFw%2BT%2BWNC57wZk6wd8SyWioKzvZ379u5ImdPV6FLml4%2B4kQbA9Wzdz7TtdK7UQ%2BCTG8WTDLZeEXycR2W4%2FG6f5UtzzIz9lNsCB5f4p2CjEFn%2FuLUVKekP6ifeMfPxbU7WsGetYJwod7jebv2BoJ%2FnPsC0pG5L9vSyznKKbX6BeycAifaPYcuFeSkLnSV0ChiNFpSQLp8AFAMGv3E%2FW25TAAJlYrFapn7I9iCRVtXrCot2nRZRI5CelD7IcuRk1eex2uyqlD0XqqJrsOui9sZFZuFH26hO3LV9v604h%2BI8ro2xi5v7e3Ai4MPA5fKq15OQE0uBQ%2BhYbRlUpyPsDYsjyrgkvhAHZAp6YNnPNtVi0nQYNcsqlLmHxdnE7k5Eeeii1YTEP45TRm%2BqogFlY9HQXdvnpg4Ek07nvm8vcbopkcyLgBXn%2B0FQ0vPKVAM0fHHACLHhZCgsmGontOZujU4LNxfKGYb4s23U6peyQCA%2BcLODipwGdORmSO8Ns9a1o5noxJVBGkKlQPNpzEW50JcqvMFm9MkM5XwMDiMfu64Dx45a3D5cQJIen5gMZsYtCZOue1PbCPt5gjr3qAfnls2jjk9mR4aArlo%2B%2FwuXQwtfGfxAY6pgG8HgqKEDTOX11tNObip1Cleio2pjSSj30MvX28byr0PkZNHfXEpzZC94smx4yu%2BFsJTP2UVl16nUweCGCvae4PRDUhOU8g%2BDm1FcfA6vZu5y3RKtAfpKn3nA8uARP9nelgHUAZEcs%2BrzDHxbDuRFHyPjfg1TzV%2BUMO95F88ng%2BJOVdyekHAlk1lc6TfpG%2BiSyKvfj3kquMciFp%2F3xGgp6g2GxNYwP8&X-Amz-Signature=d29d426666138b44adcd41f75fa046a0d4de7368c23bb94aa2df12cb6eb3c21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOAWD2O6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE6VcjyyBUuIGVW8MbTPtSEmGEGbQU%2BiaoqE9NsVGkjnAiAMeho00yVovQXmuatdFWZ9QnKDgHqk2Bx1%2FT1U%2BcyqIiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmKGH%2FwPlP%2FUvUTCKtwDELisbO9elEJoRkKb13oZFpFw%2BT%2BWNC57wZk6wd8SyWioKzvZ379u5ImdPV6FLml4%2B4kQbA9Wzdz7TtdK7UQ%2BCTG8WTDLZeEXycR2W4%2FG6f5UtzzIz9lNsCB5f4p2CjEFn%2FuLUVKekP6ifeMfPxbU7WsGetYJwod7jebv2BoJ%2FnPsC0pG5L9vSyznKKbX6BeycAifaPYcuFeSkLnSV0ChiNFpSQLp8AFAMGv3E%2FW25TAAJlYrFapn7I9iCRVtXrCot2nRZRI5CelD7IcuRk1eex2uyqlD0XqqJrsOui9sZFZuFH26hO3LV9v604h%2BI8ro2xi5v7e3Ai4MPA5fKq15OQE0uBQ%2BhYbRlUpyPsDYsjyrgkvhAHZAp6YNnPNtVi0nQYNcsqlLmHxdnE7k5Eeeii1YTEP45TRm%2BqogFlY9HQXdvnpg4Ek07nvm8vcbopkcyLgBXn%2B0FQ0vPKVAM0fHHACLHhZCgsmGontOZujU4LNxfKGYb4s23U6peyQCA%2BcLODipwGdORmSO8Ns9a1o5noxJVBGkKlQPNpzEW50JcqvMFm9MkM5XwMDiMfu64Dx45a3D5cQJIen5gMZsYtCZOue1PbCPt5gjr3qAfnls2jjk9mR4aArlo%2B%2FwuXQwtfGfxAY6pgG8HgqKEDTOX11tNObip1Cleio2pjSSj30MvX28byr0PkZNHfXEpzZC94smx4yu%2BFsJTP2UVl16nUweCGCvae4PRDUhOU8g%2BDm1FcfA6vZu5y3RKtAfpKn3nA8uARP9nelgHUAZEcs%2BrzDHxbDuRFHyPjfg1TzV%2BUMO95F88ng%2BJOVdyekHAlk1lc6TfpG%2BiSyKvfj3kquMciFp%2F3xGgp6g2GxNYwP8&X-Amz-Signature=bc2676359c1203bf060d2c4adb90cd0a0aa0ca3682d1a2c7018f5d0f6a60a75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOAWD2O6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE6VcjyyBUuIGVW8MbTPtSEmGEGbQU%2BiaoqE9NsVGkjnAiAMeho00yVovQXmuatdFWZ9QnKDgHqk2Bx1%2FT1U%2BcyqIiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmKGH%2FwPlP%2FUvUTCKtwDELisbO9elEJoRkKb13oZFpFw%2BT%2BWNC57wZk6wd8SyWioKzvZ379u5ImdPV6FLml4%2B4kQbA9Wzdz7TtdK7UQ%2BCTG8WTDLZeEXycR2W4%2FG6f5UtzzIz9lNsCB5f4p2CjEFn%2FuLUVKekP6ifeMfPxbU7WsGetYJwod7jebv2BoJ%2FnPsC0pG5L9vSyznKKbX6BeycAifaPYcuFeSkLnSV0ChiNFpSQLp8AFAMGv3E%2FW25TAAJlYrFapn7I9iCRVtXrCot2nRZRI5CelD7IcuRk1eex2uyqlD0XqqJrsOui9sZFZuFH26hO3LV9v604h%2BI8ro2xi5v7e3Ai4MPA5fKq15OQE0uBQ%2BhYbRlUpyPsDYsjyrgkvhAHZAp6YNnPNtVi0nQYNcsqlLmHxdnE7k5Eeeii1YTEP45TRm%2BqogFlY9HQXdvnpg4Ek07nvm8vcbopkcyLgBXn%2B0FQ0vPKVAM0fHHACLHhZCgsmGontOZujU4LNxfKGYb4s23U6peyQCA%2BcLODipwGdORmSO8Ns9a1o5noxJVBGkKlQPNpzEW50JcqvMFm9MkM5XwMDiMfu64Dx45a3D5cQJIen5gMZsYtCZOue1PbCPt5gjr3qAfnls2jjk9mR4aArlo%2B%2FwuXQwtfGfxAY6pgG8HgqKEDTOX11tNObip1Cleio2pjSSj30MvX28byr0PkZNHfXEpzZC94smx4yu%2BFsJTP2UVl16nUweCGCvae4PRDUhOU8g%2BDm1FcfA6vZu5y3RKtAfpKn3nA8uARP9nelgHUAZEcs%2BrzDHxbDuRFHyPjfg1TzV%2BUMO95F88ng%2BJOVdyekHAlk1lc6TfpG%2BiSyKvfj3kquMciFp%2F3xGgp6g2GxNYwP8&X-Amz-Signature=c8cfbc149ac83b25a2565d59fcdb288cc8bc14a363c27b18492dd7b545b0c1cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

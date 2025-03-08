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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIKM7AV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFlE1TyoWShWsyw7Vjeq2ZcxXWrcfgr8Qvrua71qFjzqAiEAvAcYx3Ki%2B0wPK%2B%2BddgbjrhGpXHJwD6Fu5Ft90r7WeWwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDy12bVeixAvr7W0FCrcA%2BPccZQ%2BQnPs1mCeJPqN1hz9nFyYQpNUyT9EaRlLfT5DwdKVUg%2Fl%2BsBsRrSg%2BosUS8sadatDLoZnVY%2BN6ULLserms3pmPmWElIpW2zEtJizybUbIv1Zv2hYhl%2Bg8qcpMwg1%2BrURLZkpI8kD1Nr2WF0IJIQ9gOKH6oMD7xbb23hmSJCyjFrnQ9E0p4oW2FUdf5%2F%2BY5L0O8jAWNjbir9fyvobgTGmCGbS0EzcOBGg0gqvXrhaO6F%2B9yg%2BxraJzdaVvAgZnsnPibWkBq3VBwaziT0IIq9HzJcpCMwgUecNTOGSjiXQp1OmA9DbPGmOd6oOlv51Ax1FJCyH62y5Fcfemf3gWU8Ua3Brkd1IXSGVpbbXi1yVx4sFVBxQkv4pjAAVQayZxI9oieUI0FP0XODhfySK76lSuJhlyI6YEa23GGfKXE2zpX7aSqdWW6zBZNbfFGcag3T%2BK0xTnSD9LNn7tU3axpj5S9D5DpdZe1L34aNj3l7GJ5eti%2FshT1Xx4RJ%2B3ZA1GjBdilZ64PQACT0fn8vhOTMJIVDVqOHjuUTrJSbq%2FAU1ZhAdmTpEdaG2AFIXcH767eWhQ8GOXqZy6iwZqRd1nBeJha7gHnXNM38pCnVaMQ8aSxjiaDjtYFC1dMO3FsL4GOqUBWKU5tgFsLVcd611DQ%2BaiHinKI9lWJF3IqDMLPztN1j485fyqQqPrd3ZY9a41sPXljITc29Eqy6MkNL8OrcyIwCdbxfmUUHJ%2BaG4hk5EORa%2BOOqD0Nj7C0lPfNLq%2FH9jUql7le%2B1BZZtoOYmtT0nI%2B2SjCuCVTY3O%2F3B9XTn60BU0sFwOVjAUoMpRMY9RRdiSM0xGAAh1ST779UQVAse7G4j9lZQ8&X-Amz-Signature=c51b57ad0910dcddb755c29f995e384d1b5e2a28c0430d9b374aa5facc8a605e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIKM7AV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFlE1TyoWShWsyw7Vjeq2ZcxXWrcfgr8Qvrua71qFjzqAiEAvAcYx3Ki%2B0wPK%2B%2BddgbjrhGpXHJwD6Fu5Ft90r7WeWwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDy12bVeixAvr7W0FCrcA%2BPccZQ%2BQnPs1mCeJPqN1hz9nFyYQpNUyT9EaRlLfT5DwdKVUg%2Fl%2BsBsRrSg%2BosUS8sadatDLoZnVY%2BN6ULLserms3pmPmWElIpW2zEtJizybUbIv1Zv2hYhl%2Bg8qcpMwg1%2BrURLZkpI8kD1Nr2WF0IJIQ9gOKH6oMD7xbb23hmSJCyjFrnQ9E0p4oW2FUdf5%2F%2BY5L0O8jAWNjbir9fyvobgTGmCGbS0EzcOBGg0gqvXrhaO6F%2B9yg%2BxraJzdaVvAgZnsnPibWkBq3VBwaziT0IIq9HzJcpCMwgUecNTOGSjiXQp1OmA9DbPGmOd6oOlv51Ax1FJCyH62y5Fcfemf3gWU8Ua3Brkd1IXSGVpbbXi1yVx4sFVBxQkv4pjAAVQayZxI9oieUI0FP0XODhfySK76lSuJhlyI6YEa23GGfKXE2zpX7aSqdWW6zBZNbfFGcag3T%2BK0xTnSD9LNn7tU3axpj5S9D5DpdZe1L34aNj3l7GJ5eti%2FshT1Xx4RJ%2B3ZA1GjBdilZ64PQACT0fn8vhOTMJIVDVqOHjuUTrJSbq%2FAU1ZhAdmTpEdaG2AFIXcH767eWhQ8GOXqZy6iwZqRd1nBeJha7gHnXNM38pCnVaMQ8aSxjiaDjtYFC1dMO3FsL4GOqUBWKU5tgFsLVcd611DQ%2BaiHinKI9lWJF3IqDMLPztN1j485fyqQqPrd3ZY9a41sPXljITc29Eqy6MkNL8OrcyIwCdbxfmUUHJ%2BaG4hk5EORa%2BOOqD0Nj7C0lPfNLq%2FH9jUql7le%2B1BZZtoOYmtT0nI%2B2SjCuCVTY3O%2F3B9XTn60BU0sFwOVjAUoMpRMY9RRdiSM0xGAAh1ST779UQVAse7G4j9lZQ8&X-Amz-Signature=68106d347477827be251441375227dcb13b10a86ec59f3d48bfb2ce8ac1c6b74&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIKM7AV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFlE1TyoWShWsyw7Vjeq2ZcxXWrcfgr8Qvrua71qFjzqAiEAvAcYx3Ki%2B0wPK%2B%2BddgbjrhGpXHJwD6Fu5Ft90r7WeWwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDy12bVeixAvr7W0FCrcA%2BPccZQ%2BQnPs1mCeJPqN1hz9nFyYQpNUyT9EaRlLfT5DwdKVUg%2Fl%2BsBsRrSg%2BosUS8sadatDLoZnVY%2BN6ULLserms3pmPmWElIpW2zEtJizybUbIv1Zv2hYhl%2Bg8qcpMwg1%2BrURLZkpI8kD1Nr2WF0IJIQ9gOKH6oMD7xbb23hmSJCyjFrnQ9E0p4oW2FUdf5%2F%2BY5L0O8jAWNjbir9fyvobgTGmCGbS0EzcOBGg0gqvXrhaO6F%2B9yg%2BxraJzdaVvAgZnsnPibWkBq3VBwaziT0IIq9HzJcpCMwgUecNTOGSjiXQp1OmA9DbPGmOd6oOlv51Ax1FJCyH62y5Fcfemf3gWU8Ua3Brkd1IXSGVpbbXi1yVx4sFVBxQkv4pjAAVQayZxI9oieUI0FP0XODhfySK76lSuJhlyI6YEa23GGfKXE2zpX7aSqdWW6zBZNbfFGcag3T%2BK0xTnSD9LNn7tU3axpj5S9D5DpdZe1L34aNj3l7GJ5eti%2FshT1Xx4RJ%2B3ZA1GjBdilZ64PQACT0fn8vhOTMJIVDVqOHjuUTrJSbq%2FAU1ZhAdmTpEdaG2AFIXcH767eWhQ8GOXqZy6iwZqRd1nBeJha7gHnXNM38pCnVaMQ8aSxjiaDjtYFC1dMO3FsL4GOqUBWKU5tgFsLVcd611DQ%2BaiHinKI9lWJF3IqDMLPztN1j485fyqQqPrd3ZY9a41sPXljITc29Eqy6MkNL8OrcyIwCdbxfmUUHJ%2BaG4hk5EORa%2BOOqD0Nj7C0lPfNLq%2FH9jUql7le%2B1BZZtoOYmtT0nI%2B2SjCuCVTY3O%2F3B9XTn60BU0sFwOVjAUoMpRMY9RRdiSM0xGAAh1ST779UQVAse7G4j9lZQ8&X-Amz-Signature=8db5ce869430a1beb586c8c875d500de8d93cc4ab18fefbe4bdacb666fe296f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIKM7AV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFlE1TyoWShWsyw7Vjeq2ZcxXWrcfgr8Qvrua71qFjzqAiEAvAcYx3Ki%2B0wPK%2B%2BddgbjrhGpXHJwD6Fu5Ft90r7WeWwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDy12bVeixAvr7W0FCrcA%2BPccZQ%2BQnPs1mCeJPqN1hz9nFyYQpNUyT9EaRlLfT5DwdKVUg%2Fl%2BsBsRrSg%2BosUS8sadatDLoZnVY%2BN6ULLserms3pmPmWElIpW2zEtJizybUbIv1Zv2hYhl%2Bg8qcpMwg1%2BrURLZkpI8kD1Nr2WF0IJIQ9gOKH6oMD7xbb23hmSJCyjFrnQ9E0p4oW2FUdf5%2F%2BY5L0O8jAWNjbir9fyvobgTGmCGbS0EzcOBGg0gqvXrhaO6F%2B9yg%2BxraJzdaVvAgZnsnPibWkBq3VBwaziT0IIq9HzJcpCMwgUecNTOGSjiXQp1OmA9DbPGmOd6oOlv51Ax1FJCyH62y5Fcfemf3gWU8Ua3Brkd1IXSGVpbbXi1yVx4sFVBxQkv4pjAAVQayZxI9oieUI0FP0XODhfySK76lSuJhlyI6YEa23GGfKXE2zpX7aSqdWW6zBZNbfFGcag3T%2BK0xTnSD9LNn7tU3axpj5S9D5DpdZe1L34aNj3l7GJ5eti%2FshT1Xx4RJ%2B3ZA1GjBdilZ64PQACT0fn8vhOTMJIVDVqOHjuUTrJSbq%2FAU1ZhAdmTpEdaG2AFIXcH767eWhQ8GOXqZy6iwZqRd1nBeJha7gHnXNM38pCnVaMQ8aSxjiaDjtYFC1dMO3FsL4GOqUBWKU5tgFsLVcd611DQ%2BaiHinKI9lWJF3IqDMLPztN1j485fyqQqPrd3ZY9a41sPXljITc29Eqy6MkNL8OrcyIwCdbxfmUUHJ%2BaG4hk5EORa%2BOOqD0Nj7C0lPfNLq%2FH9jUql7le%2B1BZZtoOYmtT0nI%2B2SjCuCVTY3O%2F3B9XTn60BU0sFwOVjAUoMpRMY9RRdiSM0xGAAh1ST779UQVAse7G4j9lZQ8&X-Amz-Signature=7ad7fabd099ddd53899daa795dd9dda2dc35697fedf293fdbfe21a000da92966&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIKM7AV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFlE1TyoWShWsyw7Vjeq2ZcxXWrcfgr8Qvrua71qFjzqAiEAvAcYx3Ki%2B0wPK%2B%2BddgbjrhGpXHJwD6Fu5Ft90r7WeWwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDy12bVeixAvr7W0FCrcA%2BPccZQ%2BQnPs1mCeJPqN1hz9nFyYQpNUyT9EaRlLfT5DwdKVUg%2Fl%2BsBsRrSg%2BosUS8sadatDLoZnVY%2BN6ULLserms3pmPmWElIpW2zEtJizybUbIv1Zv2hYhl%2Bg8qcpMwg1%2BrURLZkpI8kD1Nr2WF0IJIQ9gOKH6oMD7xbb23hmSJCyjFrnQ9E0p4oW2FUdf5%2F%2BY5L0O8jAWNjbir9fyvobgTGmCGbS0EzcOBGg0gqvXrhaO6F%2B9yg%2BxraJzdaVvAgZnsnPibWkBq3VBwaziT0IIq9HzJcpCMwgUecNTOGSjiXQp1OmA9DbPGmOd6oOlv51Ax1FJCyH62y5Fcfemf3gWU8Ua3Brkd1IXSGVpbbXi1yVx4sFVBxQkv4pjAAVQayZxI9oieUI0FP0XODhfySK76lSuJhlyI6YEa23GGfKXE2zpX7aSqdWW6zBZNbfFGcag3T%2BK0xTnSD9LNn7tU3axpj5S9D5DpdZe1L34aNj3l7GJ5eti%2FshT1Xx4RJ%2B3ZA1GjBdilZ64PQACT0fn8vhOTMJIVDVqOHjuUTrJSbq%2FAU1ZhAdmTpEdaG2AFIXcH767eWhQ8GOXqZy6iwZqRd1nBeJha7gHnXNM38pCnVaMQ8aSxjiaDjtYFC1dMO3FsL4GOqUBWKU5tgFsLVcd611DQ%2BaiHinKI9lWJF3IqDMLPztN1j485fyqQqPrd3ZY9a41sPXljITc29Eqy6MkNL8OrcyIwCdbxfmUUHJ%2BaG4hk5EORa%2BOOqD0Nj7C0lPfNLq%2FH9jUql7le%2B1BZZtoOYmtT0nI%2B2SjCuCVTY3O%2F3B9XTn60BU0sFwOVjAUoMpRMY9RRdiSM0xGAAh1ST779UQVAse7G4j9lZQ8&X-Amz-Signature=17b379e64e4a2df65a83de98885971b4120032cbc600f3191b46594b65db9935&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIKM7AV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFlE1TyoWShWsyw7Vjeq2ZcxXWrcfgr8Qvrua71qFjzqAiEAvAcYx3Ki%2B0wPK%2B%2BddgbjrhGpXHJwD6Fu5Ft90r7WeWwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDy12bVeixAvr7W0FCrcA%2BPccZQ%2BQnPs1mCeJPqN1hz9nFyYQpNUyT9EaRlLfT5DwdKVUg%2Fl%2BsBsRrSg%2BosUS8sadatDLoZnVY%2BN6ULLserms3pmPmWElIpW2zEtJizybUbIv1Zv2hYhl%2Bg8qcpMwg1%2BrURLZkpI8kD1Nr2WF0IJIQ9gOKH6oMD7xbb23hmSJCyjFrnQ9E0p4oW2FUdf5%2F%2BY5L0O8jAWNjbir9fyvobgTGmCGbS0EzcOBGg0gqvXrhaO6F%2B9yg%2BxraJzdaVvAgZnsnPibWkBq3VBwaziT0IIq9HzJcpCMwgUecNTOGSjiXQp1OmA9DbPGmOd6oOlv51Ax1FJCyH62y5Fcfemf3gWU8Ua3Brkd1IXSGVpbbXi1yVx4sFVBxQkv4pjAAVQayZxI9oieUI0FP0XODhfySK76lSuJhlyI6YEa23GGfKXE2zpX7aSqdWW6zBZNbfFGcag3T%2BK0xTnSD9LNn7tU3axpj5S9D5DpdZe1L34aNj3l7GJ5eti%2FshT1Xx4RJ%2B3ZA1GjBdilZ64PQACT0fn8vhOTMJIVDVqOHjuUTrJSbq%2FAU1ZhAdmTpEdaG2AFIXcH767eWhQ8GOXqZy6iwZqRd1nBeJha7gHnXNM38pCnVaMQ8aSxjiaDjtYFC1dMO3FsL4GOqUBWKU5tgFsLVcd611DQ%2BaiHinKI9lWJF3IqDMLPztN1j485fyqQqPrd3ZY9a41sPXljITc29Eqy6MkNL8OrcyIwCdbxfmUUHJ%2BaG4hk5EORa%2BOOqD0Nj7C0lPfNLq%2FH9jUql7le%2B1BZZtoOYmtT0nI%2B2SjCuCVTY3O%2F3B9XTn60BU0sFwOVjAUoMpRMY9RRdiSM0xGAAh1ST779UQVAse7G4j9lZQ8&X-Amz-Signature=0d7c15fec7f92030bede576357c9c48f9e11f8cb01f779659f9d217069b91d40&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIKM7AV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFlE1TyoWShWsyw7Vjeq2ZcxXWrcfgr8Qvrua71qFjzqAiEAvAcYx3Ki%2B0wPK%2B%2BddgbjrhGpXHJwD6Fu5Ft90r7WeWwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDy12bVeixAvr7W0FCrcA%2BPccZQ%2BQnPs1mCeJPqN1hz9nFyYQpNUyT9EaRlLfT5DwdKVUg%2Fl%2BsBsRrSg%2BosUS8sadatDLoZnVY%2BN6ULLserms3pmPmWElIpW2zEtJizybUbIv1Zv2hYhl%2Bg8qcpMwg1%2BrURLZkpI8kD1Nr2WF0IJIQ9gOKH6oMD7xbb23hmSJCyjFrnQ9E0p4oW2FUdf5%2F%2BY5L0O8jAWNjbir9fyvobgTGmCGbS0EzcOBGg0gqvXrhaO6F%2B9yg%2BxraJzdaVvAgZnsnPibWkBq3VBwaziT0IIq9HzJcpCMwgUecNTOGSjiXQp1OmA9DbPGmOd6oOlv51Ax1FJCyH62y5Fcfemf3gWU8Ua3Brkd1IXSGVpbbXi1yVx4sFVBxQkv4pjAAVQayZxI9oieUI0FP0XODhfySK76lSuJhlyI6YEa23GGfKXE2zpX7aSqdWW6zBZNbfFGcag3T%2BK0xTnSD9LNn7tU3axpj5S9D5DpdZe1L34aNj3l7GJ5eti%2FshT1Xx4RJ%2B3ZA1GjBdilZ64PQACT0fn8vhOTMJIVDVqOHjuUTrJSbq%2FAU1ZhAdmTpEdaG2AFIXcH767eWhQ8GOXqZy6iwZqRd1nBeJha7gHnXNM38pCnVaMQ8aSxjiaDjtYFC1dMO3FsL4GOqUBWKU5tgFsLVcd611DQ%2BaiHinKI9lWJF3IqDMLPztN1j485fyqQqPrd3ZY9a41sPXljITc29Eqy6MkNL8OrcyIwCdbxfmUUHJ%2BaG4hk5EORa%2BOOqD0Nj7C0lPfNLq%2FH9jUql7le%2B1BZZtoOYmtT0nI%2B2SjCuCVTY3O%2F3B9XTn60BU0sFwOVjAUoMpRMY9RRdiSM0xGAAh1ST779UQVAse7G4j9lZQ8&X-Amz-Signature=40a8b3b39a9454f3516fcf99307c607485f7df317f840045e8ff49f6b51222ce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ72YWYS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcftD9KXOpu0ItQECOYRzBMAKz9sxkO1pFM3Lz4jTNagIhAL9jNPIF%2F3nTW3PZENxCDjEJQ9XUazxO5m1da1m%2BUYiIKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV5ij38%2Fekx2F5POgq3AMqhF6N8YDdvBJLWqbS3LRrDfqOZr0XW6%2Fovd07EhZHHruiUIk3vovXAb6Tw9FHjbk8dQeDDLmQIuzbXblJZGmbys0ek7hy%2BB7IL41ttsm0qD0pJEICT8m6Ak59%2B7KEwfGwGImE67G6HtLeoTt5CL35MMC%2FgrEtlwb8tIcSpznN2aMDxaORPGaPsSIUU8iE7T18vi4bgJOIcviBET3b99ZQE6JnAGUE0HeK9bIktiN%2FV5fLILp5NYohgGnw0VyI6wSI%2BURV18KTD8Va0N1n1t%2BM6fyHyEOdxTdIBeFzVnDpmljUHXG6lkgUIGwPpweNpj50dLsgUi85NnM5mr2RRrzlCwAA7F2lR%2Fr9uPOEJXYI8QVOLWoUYcpgNuYb4IumNjI5kjp%2ByDuWIeY%2BFAP%2Fgy%2Bhd0yQkLid%2B94hevbxcmbAoc9Ed9QW2pLqWSAxiTKo5vfq1YyhEjc7pmX73%2Fwga3nmLRaAjVqJ6IrL%2B16wBkB8d1n0qz%2BL6xm80qUiJtqTyXjdHo3QKXRiV8ga0Rpx68FqWEQzkMWYkGj9PPQGEx8%2Bhfxl1I%2Ff5EotSD4M7egB%2Bsawj3AirKaJYo6KahDMU%2BTerCCy%2FA424dV35zZojjl6f9sdnoz%2FMF9vMjjCMTD98dnCBjqkARQ8%2FDPfIXiMLxgSWGzUGLcgKrJWRsYkY8vxm%2FyVdAwlFzN%2F7ISAjN7%2F5zR8GHlvPCZ7ESNm7stfoYGiSY3G819NgYy8BTw7AW1GgD2QM8FPjqymAMbHL8RL1RMGGPWG8zuM%2FMqNBGpfkFqc3Wvs7ge6TU93eXoiif8dW5vs4G4AU9j4y8o17FY8GbgF3RLvmo1y8D8soo1Io9CfYSKx3z7FZB3u&X-Amz-Signature=c8915a6aa2e428030a7fd631a2e42490b7a39529ddc47601498ea674bc59c1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ72YWYS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcftD9KXOpu0ItQECOYRzBMAKz9sxkO1pFM3Lz4jTNagIhAL9jNPIF%2F3nTW3PZENxCDjEJQ9XUazxO5m1da1m%2BUYiIKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV5ij38%2Fekx2F5POgq3AMqhF6N8YDdvBJLWqbS3LRrDfqOZr0XW6%2Fovd07EhZHHruiUIk3vovXAb6Tw9FHjbk8dQeDDLmQIuzbXblJZGmbys0ek7hy%2BB7IL41ttsm0qD0pJEICT8m6Ak59%2B7KEwfGwGImE67G6HtLeoTt5CL35MMC%2FgrEtlwb8tIcSpznN2aMDxaORPGaPsSIUU8iE7T18vi4bgJOIcviBET3b99ZQE6JnAGUE0HeK9bIktiN%2FV5fLILp5NYohgGnw0VyI6wSI%2BURV18KTD8Va0N1n1t%2BM6fyHyEOdxTdIBeFzVnDpmljUHXG6lkgUIGwPpweNpj50dLsgUi85NnM5mr2RRrzlCwAA7F2lR%2Fr9uPOEJXYI8QVOLWoUYcpgNuYb4IumNjI5kjp%2ByDuWIeY%2BFAP%2Fgy%2Bhd0yQkLid%2B94hevbxcmbAoc9Ed9QW2pLqWSAxiTKo5vfq1YyhEjc7pmX73%2Fwga3nmLRaAjVqJ6IrL%2B16wBkB8d1n0qz%2BL6xm80qUiJtqTyXjdHo3QKXRiV8ga0Rpx68FqWEQzkMWYkGj9PPQGEx8%2Bhfxl1I%2Ff5EotSD4M7egB%2Bsawj3AirKaJYo6KahDMU%2BTerCCy%2FA424dV35zZojjl6f9sdnoz%2FMF9vMjjCMTD98dnCBjqkARQ8%2FDPfIXiMLxgSWGzUGLcgKrJWRsYkY8vxm%2FyVdAwlFzN%2F7ISAjN7%2F5zR8GHlvPCZ7ESNm7stfoYGiSY3G819NgYy8BTw7AW1GgD2QM8FPjqymAMbHL8RL1RMGGPWG8zuM%2FMqNBGpfkFqc3Wvs7ge6TU93eXoiif8dW5vs4G4AU9j4y8o17FY8GbgF3RLvmo1y8D8soo1Io9CfYSKx3z7FZB3u&X-Amz-Signature=27532809f02aa337ba056eac88d26cb563665d09ad5326a640e0232f1596978a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ72YWYS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcftD9KXOpu0ItQECOYRzBMAKz9sxkO1pFM3Lz4jTNagIhAL9jNPIF%2F3nTW3PZENxCDjEJQ9XUazxO5m1da1m%2BUYiIKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV5ij38%2Fekx2F5POgq3AMqhF6N8YDdvBJLWqbS3LRrDfqOZr0XW6%2Fovd07EhZHHruiUIk3vovXAb6Tw9FHjbk8dQeDDLmQIuzbXblJZGmbys0ek7hy%2BB7IL41ttsm0qD0pJEICT8m6Ak59%2B7KEwfGwGImE67G6HtLeoTt5CL35MMC%2FgrEtlwb8tIcSpznN2aMDxaORPGaPsSIUU8iE7T18vi4bgJOIcviBET3b99ZQE6JnAGUE0HeK9bIktiN%2FV5fLILp5NYohgGnw0VyI6wSI%2BURV18KTD8Va0N1n1t%2BM6fyHyEOdxTdIBeFzVnDpmljUHXG6lkgUIGwPpweNpj50dLsgUi85NnM5mr2RRrzlCwAA7F2lR%2Fr9uPOEJXYI8QVOLWoUYcpgNuYb4IumNjI5kjp%2ByDuWIeY%2BFAP%2Fgy%2Bhd0yQkLid%2B94hevbxcmbAoc9Ed9QW2pLqWSAxiTKo5vfq1YyhEjc7pmX73%2Fwga3nmLRaAjVqJ6IrL%2B16wBkB8d1n0qz%2BL6xm80qUiJtqTyXjdHo3QKXRiV8ga0Rpx68FqWEQzkMWYkGj9PPQGEx8%2Bhfxl1I%2Ff5EotSD4M7egB%2Bsawj3AirKaJYo6KahDMU%2BTerCCy%2FA424dV35zZojjl6f9sdnoz%2FMF9vMjjCMTD98dnCBjqkARQ8%2FDPfIXiMLxgSWGzUGLcgKrJWRsYkY8vxm%2FyVdAwlFzN%2F7ISAjN7%2F5zR8GHlvPCZ7ESNm7stfoYGiSY3G819NgYy8BTw7AW1GgD2QM8FPjqymAMbHL8RL1RMGGPWG8zuM%2FMqNBGpfkFqc3Wvs7ge6TU93eXoiif8dW5vs4G4AU9j4y8o17FY8GbgF3RLvmo1y8D8soo1Io9CfYSKx3z7FZB3u&X-Amz-Signature=4caf9f57b80346086db9e929e1d52f8fabb9a95db0e0c89335e45bd1f4be4814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ72YWYS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcftD9KXOpu0ItQECOYRzBMAKz9sxkO1pFM3Lz4jTNagIhAL9jNPIF%2F3nTW3PZENxCDjEJQ9XUazxO5m1da1m%2BUYiIKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV5ij38%2Fekx2F5POgq3AMqhF6N8YDdvBJLWqbS3LRrDfqOZr0XW6%2Fovd07EhZHHruiUIk3vovXAb6Tw9FHjbk8dQeDDLmQIuzbXblJZGmbys0ek7hy%2BB7IL41ttsm0qD0pJEICT8m6Ak59%2B7KEwfGwGImE67G6HtLeoTt5CL35MMC%2FgrEtlwb8tIcSpznN2aMDxaORPGaPsSIUU8iE7T18vi4bgJOIcviBET3b99ZQE6JnAGUE0HeK9bIktiN%2FV5fLILp5NYohgGnw0VyI6wSI%2BURV18KTD8Va0N1n1t%2BM6fyHyEOdxTdIBeFzVnDpmljUHXG6lkgUIGwPpweNpj50dLsgUi85NnM5mr2RRrzlCwAA7F2lR%2Fr9uPOEJXYI8QVOLWoUYcpgNuYb4IumNjI5kjp%2ByDuWIeY%2BFAP%2Fgy%2Bhd0yQkLid%2B94hevbxcmbAoc9Ed9QW2pLqWSAxiTKo5vfq1YyhEjc7pmX73%2Fwga3nmLRaAjVqJ6IrL%2B16wBkB8d1n0qz%2BL6xm80qUiJtqTyXjdHo3QKXRiV8ga0Rpx68FqWEQzkMWYkGj9PPQGEx8%2Bhfxl1I%2Ff5EotSD4M7egB%2Bsawj3AirKaJYo6KahDMU%2BTerCCy%2FA424dV35zZojjl6f9sdnoz%2FMF9vMjjCMTD98dnCBjqkARQ8%2FDPfIXiMLxgSWGzUGLcgKrJWRsYkY8vxm%2FyVdAwlFzN%2F7ISAjN7%2F5zR8GHlvPCZ7ESNm7stfoYGiSY3G819NgYy8BTw7AW1GgD2QM8FPjqymAMbHL8RL1RMGGPWG8zuM%2FMqNBGpfkFqc3Wvs7ge6TU93eXoiif8dW5vs4G4AU9j4y8o17FY8GbgF3RLvmo1y8D8soo1Io9CfYSKx3z7FZB3u&X-Amz-Signature=a40c237fdcece6891eb5a9f1aa5472483106cda6fe48190145ea16a72d2d4054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ72YWYS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcftD9KXOpu0ItQECOYRzBMAKz9sxkO1pFM3Lz4jTNagIhAL9jNPIF%2F3nTW3PZENxCDjEJQ9XUazxO5m1da1m%2BUYiIKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV5ij38%2Fekx2F5POgq3AMqhF6N8YDdvBJLWqbS3LRrDfqOZr0XW6%2Fovd07EhZHHruiUIk3vovXAb6Tw9FHjbk8dQeDDLmQIuzbXblJZGmbys0ek7hy%2BB7IL41ttsm0qD0pJEICT8m6Ak59%2B7KEwfGwGImE67G6HtLeoTt5CL35MMC%2FgrEtlwb8tIcSpznN2aMDxaORPGaPsSIUU8iE7T18vi4bgJOIcviBET3b99ZQE6JnAGUE0HeK9bIktiN%2FV5fLILp5NYohgGnw0VyI6wSI%2BURV18KTD8Va0N1n1t%2BM6fyHyEOdxTdIBeFzVnDpmljUHXG6lkgUIGwPpweNpj50dLsgUi85NnM5mr2RRrzlCwAA7F2lR%2Fr9uPOEJXYI8QVOLWoUYcpgNuYb4IumNjI5kjp%2ByDuWIeY%2BFAP%2Fgy%2Bhd0yQkLid%2B94hevbxcmbAoc9Ed9QW2pLqWSAxiTKo5vfq1YyhEjc7pmX73%2Fwga3nmLRaAjVqJ6IrL%2B16wBkB8d1n0qz%2BL6xm80qUiJtqTyXjdHo3QKXRiV8ga0Rpx68FqWEQzkMWYkGj9PPQGEx8%2Bhfxl1I%2Ff5EotSD4M7egB%2Bsawj3AirKaJYo6KahDMU%2BTerCCy%2FA424dV35zZojjl6f9sdnoz%2FMF9vMjjCMTD98dnCBjqkARQ8%2FDPfIXiMLxgSWGzUGLcgKrJWRsYkY8vxm%2FyVdAwlFzN%2F7ISAjN7%2F5zR8GHlvPCZ7ESNm7stfoYGiSY3G819NgYy8BTw7AW1GgD2QM8FPjqymAMbHL8RL1RMGGPWG8zuM%2FMqNBGpfkFqc3Wvs7ge6TU93eXoiif8dW5vs4G4AU9j4y8o17FY8GbgF3RLvmo1y8D8soo1Io9CfYSKx3z7FZB3u&X-Amz-Signature=f5ded39fb3034dc24decc3151a307150f62d9b5c8ee1f36c25f9c9b7308dec34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ72YWYS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcftD9KXOpu0ItQECOYRzBMAKz9sxkO1pFM3Lz4jTNagIhAL9jNPIF%2F3nTW3PZENxCDjEJQ9XUazxO5m1da1m%2BUYiIKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV5ij38%2Fekx2F5POgq3AMqhF6N8YDdvBJLWqbS3LRrDfqOZr0XW6%2Fovd07EhZHHruiUIk3vovXAb6Tw9FHjbk8dQeDDLmQIuzbXblJZGmbys0ek7hy%2BB7IL41ttsm0qD0pJEICT8m6Ak59%2B7KEwfGwGImE67G6HtLeoTt5CL35MMC%2FgrEtlwb8tIcSpznN2aMDxaORPGaPsSIUU8iE7T18vi4bgJOIcviBET3b99ZQE6JnAGUE0HeK9bIktiN%2FV5fLILp5NYohgGnw0VyI6wSI%2BURV18KTD8Va0N1n1t%2BM6fyHyEOdxTdIBeFzVnDpmljUHXG6lkgUIGwPpweNpj50dLsgUi85NnM5mr2RRrzlCwAA7F2lR%2Fr9uPOEJXYI8QVOLWoUYcpgNuYb4IumNjI5kjp%2ByDuWIeY%2BFAP%2Fgy%2Bhd0yQkLid%2B94hevbxcmbAoc9Ed9QW2pLqWSAxiTKo5vfq1YyhEjc7pmX73%2Fwga3nmLRaAjVqJ6IrL%2B16wBkB8d1n0qz%2BL6xm80qUiJtqTyXjdHo3QKXRiV8ga0Rpx68FqWEQzkMWYkGj9PPQGEx8%2Bhfxl1I%2Ff5EotSD4M7egB%2Bsawj3AirKaJYo6KahDMU%2BTerCCy%2FA424dV35zZojjl6f9sdnoz%2FMF9vMjjCMTD98dnCBjqkARQ8%2FDPfIXiMLxgSWGzUGLcgKrJWRsYkY8vxm%2FyVdAwlFzN%2F7ISAjN7%2F5zR8GHlvPCZ7ESNm7stfoYGiSY3G819NgYy8BTw7AW1GgD2QM8FPjqymAMbHL8RL1RMGGPWG8zuM%2FMqNBGpfkFqc3Wvs7ge6TU93eXoiif8dW5vs4G4AU9j4y8o17FY8GbgF3RLvmo1y8D8soo1Io9CfYSKx3z7FZB3u&X-Amz-Signature=b039a123e6d6c0c6aefcd8c3aebd4c1349636e1ddf2655112a6d2a90cb117d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ72YWYS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcftD9KXOpu0ItQECOYRzBMAKz9sxkO1pFM3Lz4jTNagIhAL9jNPIF%2F3nTW3PZENxCDjEJQ9XUazxO5m1da1m%2BUYiIKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV5ij38%2Fekx2F5POgq3AMqhF6N8YDdvBJLWqbS3LRrDfqOZr0XW6%2Fovd07EhZHHruiUIk3vovXAb6Tw9FHjbk8dQeDDLmQIuzbXblJZGmbys0ek7hy%2BB7IL41ttsm0qD0pJEICT8m6Ak59%2B7KEwfGwGImE67G6HtLeoTt5CL35MMC%2FgrEtlwb8tIcSpznN2aMDxaORPGaPsSIUU8iE7T18vi4bgJOIcviBET3b99ZQE6JnAGUE0HeK9bIktiN%2FV5fLILp5NYohgGnw0VyI6wSI%2BURV18KTD8Va0N1n1t%2BM6fyHyEOdxTdIBeFzVnDpmljUHXG6lkgUIGwPpweNpj50dLsgUi85NnM5mr2RRrzlCwAA7F2lR%2Fr9uPOEJXYI8QVOLWoUYcpgNuYb4IumNjI5kjp%2ByDuWIeY%2BFAP%2Fgy%2Bhd0yQkLid%2B94hevbxcmbAoc9Ed9QW2pLqWSAxiTKo5vfq1YyhEjc7pmX73%2Fwga3nmLRaAjVqJ6IrL%2B16wBkB8d1n0qz%2BL6xm80qUiJtqTyXjdHo3QKXRiV8ga0Rpx68FqWEQzkMWYkGj9PPQGEx8%2Bhfxl1I%2Ff5EotSD4M7egB%2Bsawj3AirKaJYo6KahDMU%2BTerCCy%2FA424dV35zZojjl6f9sdnoz%2FMF9vMjjCMTD98dnCBjqkARQ8%2FDPfIXiMLxgSWGzUGLcgKrJWRsYkY8vxm%2FyVdAwlFzN%2F7ISAjN7%2F5zR8GHlvPCZ7ESNm7stfoYGiSY3G819NgYy8BTw7AW1GgD2QM8FPjqymAMbHL8RL1RMGGPWG8zuM%2FMqNBGpfkFqc3Wvs7ge6TU93eXoiif8dW5vs4G4AU9j4y8o17FY8GbgF3RLvmo1y8D8soo1Io9CfYSKx3z7FZB3u&X-Amz-Signature=4d5321275875921a567b22639e3c860c31015c0240a27c7609a6b3f98ee1788c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

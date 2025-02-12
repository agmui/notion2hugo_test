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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV5SRUK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtOS8QwKmkdmF5caujMMSrCO6%2FrnL27LtGxd3lkvPn5AiEA2n84em%2BAepctr3ioNMAIcHGcxTHfynRDAM0zLVsVR9oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ4p%2BLmBIJiafnHcSrcAzav2C3Fkxndh0gaD3xNahv3Nu8t3n3q%2Fl6lrhOaTJtxXcweqx9Wp8uWX1tNdt7%2FcPfVHIzwrZSo3F5yPoFkR%2BYSrK1Yw18LOTTXNnGQLQT5mhaKmF9Gqgf8i2gCki6szR2d7q4iibo%2FvuWPIOBUd%2FKJEpmry8H5wDVmbMW4%2FXakUaGBJcJNGdC504XEYJEEgkMuhRlu18mHpqt0kYm3LXE%2B9tajZRuLWZ2TvZAPVhousxLt%2FTg8h8RWj5ualb9eDKoC1UPqXUhf2yXFnG49ShSck8CYFL2HQ%2BMr%2BBgwUcUeJrO2szTXG7Y1gaxhneklrv4Gx5RbU%2BI0ZWNAGWOErTBERnb9bXqphtH6ma56Rok8Q6728XXHxyXdbB9KNANgO5A4AyDlAIi96QuEi0m7JVGGRxVdByUN7C8wLfNUx%2BH09MA7PRNpgXGm8ri98eegK%2BhrIw5Ajd0QW4XSo6kB3GF7CIOr4rlpneWiIHF0NiTyBOxUHz23lOKmdpdkiTK%2BSCT%2FLpPwdFbRwJHd1sFIai85sDPan62%2BTzqX3r67ACeG84nj5XGmA6%2Ba67HHP2bjAmw3I1VfV03jiWYiJsj1946Jpa0HrHTmfBRwdwwl36Y4N6QLIminzBCRFuLeMNeotL0GOqUBOYWz2hWsIknOnwKyVhpNr0LanUmF1i%2BMJt9yyJ%2FErbHsryWfcJvhV8KCSCXkxKS58Vnj53ZJ58e7ZxmO%2BlStgNYrmAUzJoZ336vtcrD8byhgCb3NK2UVeYCVYE2%2Bm94gL7RXmgNy60oH54bvbgXqbUhJFvnGozL9LGMWpI6O4tOrnvy4VhGmog4X6%2FbDGHrxaL9J8f7YMisObboGAvAAWxutVXvH&X-Amz-Signature=47ab8286c28df8650b45c71e8ee2d01114f279765410484661b60d4043486a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV5SRUK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtOS8QwKmkdmF5caujMMSrCO6%2FrnL27LtGxd3lkvPn5AiEA2n84em%2BAepctr3ioNMAIcHGcxTHfynRDAM0zLVsVR9oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ4p%2BLmBIJiafnHcSrcAzav2C3Fkxndh0gaD3xNahv3Nu8t3n3q%2Fl6lrhOaTJtxXcweqx9Wp8uWX1tNdt7%2FcPfVHIzwrZSo3F5yPoFkR%2BYSrK1Yw18LOTTXNnGQLQT5mhaKmF9Gqgf8i2gCki6szR2d7q4iibo%2FvuWPIOBUd%2FKJEpmry8H5wDVmbMW4%2FXakUaGBJcJNGdC504XEYJEEgkMuhRlu18mHpqt0kYm3LXE%2B9tajZRuLWZ2TvZAPVhousxLt%2FTg8h8RWj5ualb9eDKoC1UPqXUhf2yXFnG49ShSck8CYFL2HQ%2BMr%2BBgwUcUeJrO2szTXG7Y1gaxhneklrv4Gx5RbU%2BI0ZWNAGWOErTBERnb9bXqphtH6ma56Rok8Q6728XXHxyXdbB9KNANgO5A4AyDlAIi96QuEi0m7JVGGRxVdByUN7C8wLfNUx%2BH09MA7PRNpgXGm8ri98eegK%2BhrIw5Ajd0QW4XSo6kB3GF7CIOr4rlpneWiIHF0NiTyBOxUHz23lOKmdpdkiTK%2BSCT%2FLpPwdFbRwJHd1sFIai85sDPan62%2BTzqX3r67ACeG84nj5XGmA6%2Ba67HHP2bjAmw3I1VfV03jiWYiJsj1946Jpa0HrHTmfBRwdwwl36Y4N6QLIminzBCRFuLeMNeotL0GOqUBOYWz2hWsIknOnwKyVhpNr0LanUmF1i%2BMJt9yyJ%2FErbHsryWfcJvhV8KCSCXkxKS58Vnj53ZJ58e7ZxmO%2BlStgNYrmAUzJoZ336vtcrD8byhgCb3NK2UVeYCVYE2%2Bm94gL7RXmgNy60oH54bvbgXqbUhJFvnGozL9LGMWpI6O4tOrnvy4VhGmog4X6%2FbDGHrxaL9J8f7YMisObboGAvAAWxutVXvH&X-Amz-Signature=fbb1cbcd0fb202724ee24d6145269b24e1f24f4324360038c5256a69e2dd7d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV5SRUK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtOS8QwKmkdmF5caujMMSrCO6%2FrnL27LtGxd3lkvPn5AiEA2n84em%2BAepctr3ioNMAIcHGcxTHfynRDAM0zLVsVR9oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ4p%2BLmBIJiafnHcSrcAzav2C3Fkxndh0gaD3xNahv3Nu8t3n3q%2Fl6lrhOaTJtxXcweqx9Wp8uWX1tNdt7%2FcPfVHIzwrZSo3F5yPoFkR%2BYSrK1Yw18LOTTXNnGQLQT5mhaKmF9Gqgf8i2gCki6szR2d7q4iibo%2FvuWPIOBUd%2FKJEpmry8H5wDVmbMW4%2FXakUaGBJcJNGdC504XEYJEEgkMuhRlu18mHpqt0kYm3LXE%2B9tajZRuLWZ2TvZAPVhousxLt%2FTg8h8RWj5ualb9eDKoC1UPqXUhf2yXFnG49ShSck8CYFL2HQ%2BMr%2BBgwUcUeJrO2szTXG7Y1gaxhneklrv4Gx5RbU%2BI0ZWNAGWOErTBERnb9bXqphtH6ma56Rok8Q6728XXHxyXdbB9KNANgO5A4AyDlAIi96QuEi0m7JVGGRxVdByUN7C8wLfNUx%2BH09MA7PRNpgXGm8ri98eegK%2BhrIw5Ajd0QW4XSo6kB3GF7CIOr4rlpneWiIHF0NiTyBOxUHz23lOKmdpdkiTK%2BSCT%2FLpPwdFbRwJHd1sFIai85sDPan62%2BTzqX3r67ACeG84nj5XGmA6%2Ba67HHP2bjAmw3I1VfV03jiWYiJsj1946Jpa0HrHTmfBRwdwwl36Y4N6QLIminzBCRFuLeMNeotL0GOqUBOYWz2hWsIknOnwKyVhpNr0LanUmF1i%2BMJt9yyJ%2FErbHsryWfcJvhV8KCSCXkxKS58Vnj53ZJ58e7ZxmO%2BlStgNYrmAUzJoZ336vtcrD8byhgCb3NK2UVeYCVYE2%2Bm94gL7RXmgNy60oH54bvbgXqbUhJFvnGozL9LGMWpI6O4tOrnvy4VhGmog4X6%2FbDGHrxaL9J8f7YMisObboGAvAAWxutVXvH&X-Amz-Signature=e2c45e2b518041b0b943a6abe6b66c3ad60fe92ca46f940d679f9c958bbedb96&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV5SRUK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtOS8QwKmkdmF5caujMMSrCO6%2FrnL27LtGxd3lkvPn5AiEA2n84em%2BAepctr3ioNMAIcHGcxTHfynRDAM0zLVsVR9oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ4p%2BLmBIJiafnHcSrcAzav2C3Fkxndh0gaD3xNahv3Nu8t3n3q%2Fl6lrhOaTJtxXcweqx9Wp8uWX1tNdt7%2FcPfVHIzwrZSo3F5yPoFkR%2BYSrK1Yw18LOTTXNnGQLQT5mhaKmF9Gqgf8i2gCki6szR2d7q4iibo%2FvuWPIOBUd%2FKJEpmry8H5wDVmbMW4%2FXakUaGBJcJNGdC504XEYJEEgkMuhRlu18mHpqt0kYm3LXE%2B9tajZRuLWZ2TvZAPVhousxLt%2FTg8h8RWj5ualb9eDKoC1UPqXUhf2yXFnG49ShSck8CYFL2HQ%2BMr%2BBgwUcUeJrO2szTXG7Y1gaxhneklrv4Gx5RbU%2BI0ZWNAGWOErTBERnb9bXqphtH6ma56Rok8Q6728XXHxyXdbB9KNANgO5A4AyDlAIi96QuEi0m7JVGGRxVdByUN7C8wLfNUx%2BH09MA7PRNpgXGm8ri98eegK%2BhrIw5Ajd0QW4XSo6kB3GF7CIOr4rlpneWiIHF0NiTyBOxUHz23lOKmdpdkiTK%2BSCT%2FLpPwdFbRwJHd1sFIai85sDPan62%2BTzqX3r67ACeG84nj5XGmA6%2Ba67HHP2bjAmw3I1VfV03jiWYiJsj1946Jpa0HrHTmfBRwdwwl36Y4N6QLIminzBCRFuLeMNeotL0GOqUBOYWz2hWsIknOnwKyVhpNr0LanUmF1i%2BMJt9yyJ%2FErbHsryWfcJvhV8KCSCXkxKS58Vnj53ZJ58e7ZxmO%2BlStgNYrmAUzJoZ336vtcrD8byhgCb3NK2UVeYCVYE2%2Bm94gL7RXmgNy60oH54bvbgXqbUhJFvnGozL9LGMWpI6O4tOrnvy4VhGmog4X6%2FbDGHrxaL9J8f7YMisObboGAvAAWxutVXvH&X-Amz-Signature=e2fbb8f5954bfdba221963364fe5584d0fc0d3b6283ce4932569bafbd560823b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV5SRUK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtOS8QwKmkdmF5caujMMSrCO6%2FrnL27LtGxd3lkvPn5AiEA2n84em%2BAepctr3ioNMAIcHGcxTHfynRDAM0zLVsVR9oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ4p%2BLmBIJiafnHcSrcAzav2C3Fkxndh0gaD3xNahv3Nu8t3n3q%2Fl6lrhOaTJtxXcweqx9Wp8uWX1tNdt7%2FcPfVHIzwrZSo3F5yPoFkR%2BYSrK1Yw18LOTTXNnGQLQT5mhaKmF9Gqgf8i2gCki6szR2d7q4iibo%2FvuWPIOBUd%2FKJEpmry8H5wDVmbMW4%2FXakUaGBJcJNGdC504XEYJEEgkMuhRlu18mHpqt0kYm3LXE%2B9tajZRuLWZ2TvZAPVhousxLt%2FTg8h8RWj5ualb9eDKoC1UPqXUhf2yXFnG49ShSck8CYFL2HQ%2BMr%2BBgwUcUeJrO2szTXG7Y1gaxhneklrv4Gx5RbU%2BI0ZWNAGWOErTBERnb9bXqphtH6ma56Rok8Q6728XXHxyXdbB9KNANgO5A4AyDlAIi96QuEi0m7JVGGRxVdByUN7C8wLfNUx%2BH09MA7PRNpgXGm8ri98eegK%2BhrIw5Ajd0QW4XSo6kB3GF7CIOr4rlpneWiIHF0NiTyBOxUHz23lOKmdpdkiTK%2BSCT%2FLpPwdFbRwJHd1sFIai85sDPan62%2BTzqX3r67ACeG84nj5XGmA6%2Ba67HHP2bjAmw3I1VfV03jiWYiJsj1946Jpa0HrHTmfBRwdwwl36Y4N6QLIminzBCRFuLeMNeotL0GOqUBOYWz2hWsIknOnwKyVhpNr0LanUmF1i%2BMJt9yyJ%2FErbHsryWfcJvhV8KCSCXkxKS58Vnj53ZJ58e7ZxmO%2BlStgNYrmAUzJoZ336vtcrD8byhgCb3NK2UVeYCVYE2%2Bm94gL7RXmgNy60oH54bvbgXqbUhJFvnGozL9LGMWpI6O4tOrnvy4VhGmog4X6%2FbDGHrxaL9J8f7YMisObboGAvAAWxutVXvH&X-Amz-Signature=940a5bbe4023af01127ea23473119296dbfddb0d46ddac3a63a490489ee60d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV5SRUK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtOS8QwKmkdmF5caujMMSrCO6%2FrnL27LtGxd3lkvPn5AiEA2n84em%2BAepctr3ioNMAIcHGcxTHfynRDAM0zLVsVR9oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ4p%2BLmBIJiafnHcSrcAzav2C3Fkxndh0gaD3xNahv3Nu8t3n3q%2Fl6lrhOaTJtxXcweqx9Wp8uWX1tNdt7%2FcPfVHIzwrZSo3F5yPoFkR%2BYSrK1Yw18LOTTXNnGQLQT5mhaKmF9Gqgf8i2gCki6szR2d7q4iibo%2FvuWPIOBUd%2FKJEpmry8H5wDVmbMW4%2FXakUaGBJcJNGdC504XEYJEEgkMuhRlu18mHpqt0kYm3LXE%2B9tajZRuLWZ2TvZAPVhousxLt%2FTg8h8RWj5ualb9eDKoC1UPqXUhf2yXFnG49ShSck8CYFL2HQ%2BMr%2BBgwUcUeJrO2szTXG7Y1gaxhneklrv4Gx5RbU%2BI0ZWNAGWOErTBERnb9bXqphtH6ma56Rok8Q6728XXHxyXdbB9KNANgO5A4AyDlAIi96QuEi0m7JVGGRxVdByUN7C8wLfNUx%2BH09MA7PRNpgXGm8ri98eegK%2BhrIw5Ajd0QW4XSo6kB3GF7CIOr4rlpneWiIHF0NiTyBOxUHz23lOKmdpdkiTK%2BSCT%2FLpPwdFbRwJHd1sFIai85sDPan62%2BTzqX3r67ACeG84nj5XGmA6%2Ba67HHP2bjAmw3I1VfV03jiWYiJsj1946Jpa0HrHTmfBRwdwwl36Y4N6QLIminzBCRFuLeMNeotL0GOqUBOYWz2hWsIknOnwKyVhpNr0LanUmF1i%2BMJt9yyJ%2FErbHsryWfcJvhV8KCSCXkxKS58Vnj53ZJ58e7ZxmO%2BlStgNYrmAUzJoZ336vtcrD8byhgCb3NK2UVeYCVYE2%2Bm94gL7RXmgNy60oH54bvbgXqbUhJFvnGozL9LGMWpI6O4tOrnvy4VhGmog4X6%2FbDGHrxaL9J8f7YMisObboGAvAAWxutVXvH&X-Amz-Signature=5d5be01684f02b23341b1ece7424890e25253a3b6b5267daa00916c40658b226&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV5SRUK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtOS8QwKmkdmF5caujMMSrCO6%2FrnL27LtGxd3lkvPn5AiEA2n84em%2BAepctr3ioNMAIcHGcxTHfynRDAM0zLVsVR9oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ4p%2BLmBIJiafnHcSrcAzav2C3Fkxndh0gaD3xNahv3Nu8t3n3q%2Fl6lrhOaTJtxXcweqx9Wp8uWX1tNdt7%2FcPfVHIzwrZSo3F5yPoFkR%2BYSrK1Yw18LOTTXNnGQLQT5mhaKmF9Gqgf8i2gCki6szR2d7q4iibo%2FvuWPIOBUd%2FKJEpmry8H5wDVmbMW4%2FXakUaGBJcJNGdC504XEYJEEgkMuhRlu18mHpqt0kYm3LXE%2B9tajZRuLWZ2TvZAPVhousxLt%2FTg8h8RWj5ualb9eDKoC1UPqXUhf2yXFnG49ShSck8CYFL2HQ%2BMr%2BBgwUcUeJrO2szTXG7Y1gaxhneklrv4Gx5RbU%2BI0ZWNAGWOErTBERnb9bXqphtH6ma56Rok8Q6728XXHxyXdbB9KNANgO5A4AyDlAIi96QuEi0m7JVGGRxVdByUN7C8wLfNUx%2BH09MA7PRNpgXGm8ri98eegK%2BhrIw5Ajd0QW4XSo6kB3GF7CIOr4rlpneWiIHF0NiTyBOxUHz23lOKmdpdkiTK%2BSCT%2FLpPwdFbRwJHd1sFIai85sDPan62%2BTzqX3r67ACeG84nj5XGmA6%2Ba67HHP2bjAmw3I1VfV03jiWYiJsj1946Jpa0HrHTmfBRwdwwl36Y4N6QLIminzBCRFuLeMNeotL0GOqUBOYWz2hWsIknOnwKyVhpNr0LanUmF1i%2BMJt9yyJ%2FErbHsryWfcJvhV8KCSCXkxKS58Vnj53ZJ58e7ZxmO%2BlStgNYrmAUzJoZ336vtcrD8byhgCb3NK2UVeYCVYE2%2Bm94gL7RXmgNy60oH54bvbgXqbUhJFvnGozL9LGMWpI6O4tOrnvy4VhGmog4X6%2FbDGHrxaL9J8f7YMisObboGAvAAWxutVXvH&X-Amz-Signature=c4f3638579af8368632e6ced3bf389b2cf512cae2abfdea54a4c35c5442cdd04&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

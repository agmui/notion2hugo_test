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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIC4ESJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbc7d7l5k2d7gowWaxdXO9exfpr4phlMHj%2BvlpmQWjPgIhAMDBOui8tGeGgwYn9YQRmnVdrBV1CFsOCRgcP3%2BDeOJnKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxauBRvKDnc1rZ2h44q3APamKzv2Hs%2FyUZOuUoW%2FFaAXKu%2Fcplol2J1iqG089AvsFA5Kn2G2JZGDSA5W6q%2BX2Q466l%2Bm0WtdBY2KkEPnRTbgw7PH%2FRQsJckULn61niyROuPHeuU8UHGvmLK21hUWsj7bGvUsZikBkPv8eNdzvKBNxX4urA7xgkIEEvQR1HOQiEIkoxjAkwf3j2KkiXwzZvbrGhgfbThHcqTe3C33U%2FBpWd%2FPk8yIuH%2BOqFIiou52SElq%2Bm89BX8Ln35wY5xFvVN8FnfM64rqwwF0TEwzr%2Br7POC8z7n6jdinwr5mPcqGhtsa9e8NWCfjI7L27Mz%2FtBjy5c%2FtnHU%2BUoykrQ9PIfqXg3tFkX1ghEJdixcocTJDAbVUfShCjKLMGseeOyv9rMcGnxIQ4ahKOF0aNrlU%2F3ZyG4LLgXIc%2BGLN5Ax8pncjMQzPJ8FraBtMxljb1Ko%2BtO%2BErb8y9HtIlzceFMiD%2FqcB%2FQfbg%2BJD48uEuEuEMbmFnWzC2ovQrY35Z6pazuOuJgU%2B0gQhhBL4LC7e%2FauZGobv19BZeJ75SQMRcY%2BO9CZES4Wfvt%2FCjmtzdGgTgyJGABEAD36I2eKakISzcxiFHxaKzJ2ahHInGK6wspRCfAz7Gw01EIP%2BTLZTKPiSTDO15vCBjqkARYxbjKxxgrFz9rHZ4yRf5iAycyXXEqSEIFBE1PF5T0ByE3iJb1eWj1kjkt1%2FtmBloicpX3uiZ1zR7tLYa4zCqVe%2Fzjjx44Q6Ak3tytHuX8UA11e%2BmOGLyv6TTRXKfnCa00h55j8G8bSFhvntft5xwcz4Z96w9ac9awhzBCYXid0FKZTYtHo6a%2F7NO4lEJjPtk2FCYyLWKoYFRZYD%2BRkDmRl1Xk%2F&X-Amz-Signature=04b9d42b194988f01de50dcdc5b9a5d8b47b9cbd6590458cab911831e5866cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIC4ESJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbc7d7l5k2d7gowWaxdXO9exfpr4phlMHj%2BvlpmQWjPgIhAMDBOui8tGeGgwYn9YQRmnVdrBV1CFsOCRgcP3%2BDeOJnKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxauBRvKDnc1rZ2h44q3APamKzv2Hs%2FyUZOuUoW%2FFaAXKu%2Fcplol2J1iqG089AvsFA5Kn2G2JZGDSA5W6q%2BX2Q466l%2Bm0WtdBY2KkEPnRTbgw7PH%2FRQsJckULn61niyROuPHeuU8UHGvmLK21hUWsj7bGvUsZikBkPv8eNdzvKBNxX4urA7xgkIEEvQR1HOQiEIkoxjAkwf3j2KkiXwzZvbrGhgfbThHcqTe3C33U%2FBpWd%2FPk8yIuH%2BOqFIiou52SElq%2Bm89BX8Ln35wY5xFvVN8FnfM64rqwwF0TEwzr%2Br7POC8z7n6jdinwr5mPcqGhtsa9e8NWCfjI7L27Mz%2FtBjy5c%2FtnHU%2BUoykrQ9PIfqXg3tFkX1ghEJdixcocTJDAbVUfShCjKLMGseeOyv9rMcGnxIQ4ahKOF0aNrlU%2F3ZyG4LLgXIc%2BGLN5Ax8pncjMQzPJ8FraBtMxljb1Ko%2BtO%2BErb8y9HtIlzceFMiD%2FqcB%2FQfbg%2BJD48uEuEuEMbmFnWzC2ovQrY35Z6pazuOuJgU%2B0gQhhBL4LC7e%2FauZGobv19BZeJ75SQMRcY%2BO9CZES4Wfvt%2FCjmtzdGgTgyJGABEAD36I2eKakISzcxiFHxaKzJ2ahHInGK6wspRCfAz7Gw01EIP%2BTLZTKPiSTDO15vCBjqkARYxbjKxxgrFz9rHZ4yRf5iAycyXXEqSEIFBE1PF5T0ByE3iJb1eWj1kjkt1%2FtmBloicpX3uiZ1zR7tLYa4zCqVe%2Fzjjx44Q6Ak3tytHuX8UA11e%2BmOGLyv6TTRXKfnCa00h55j8G8bSFhvntft5xwcz4Z96w9ac9awhzBCYXid0FKZTYtHo6a%2F7NO4lEJjPtk2FCYyLWKoYFRZYD%2BRkDmRl1Xk%2F&X-Amz-Signature=1c382dc9a781384ad6d0a149c15bd7651fcf58d895c880d924d98d910343d3b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIC4ESJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbc7d7l5k2d7gowWaxdXO9exfpr4phlMHj%2BvlpmQWjPgIhAMDBOui8tGeGgwYn9YQRmnVdrBV1CFsOCRgcP3%2BDeOJnKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxauBRvKDnc1rZ2h44q3APamKzv2Hs%2FyUZOuUoW%2FFaAXKu%2Fcplol2J1iqG089AvsFA5Kn2G2JZGDSA5W6q%2BX2Q466l%2Bm0WtdBY2KkEPnRTbgw7PH%2FRQsJckULn61niyROuPHeuU8UHGvmLK21hUWsj7bGvUsZikBkPv8eNdzvKBNxX4urA7xgkIEEvQR1HOQiEIkoxjAkwf3j2KkiXwzZvbrGhgfbThHcqTe3C33U%2FBpWd%2FPk8yIuH%2BOqFIiou52SElq%2Bm89BX8Ln35wY5xFvVN8FnfM64rqwwF0TEwzr%2Br7POC8z7n6jdinwr5mPcqGhtsa9e8NWCfjI7L27Mz%2FtBjy5c%2FtnHU%2BUoykrQ9PIfqXg3tFkX1ghEJdixcocTJDAbVUfShCjKLMGseeOyv9rMcGnxIQ4ahKOF0aNrlU%2F3ZyG4LLgXIc%2BGLN5Ax8pncjMQzPJ8FraBtMxljb1Ko%2BtO%2BErb8y9HtIlzceFMiD%2FqcB%2FQfbg%2BJD48uEuEuEMbmFnWzC2ovQrY35Z6pazuOuJgU%2B0gQhhBL4LC7e%2FauZGobv19BZeJ75SQMRcY%2BO9CZES4Wfvt%2FCjmtzdGgTgyJGABEAD36I2eKakISzcxiFHxaKzJ2ahHInGK6wspRCfAz7Gw01EIP%2BTLZTKPiSTDO15vCBjqkARYxbjKxxgrFz9rHZ4yRf5iAycyXXEqSEIFBE1PF5T0ByE3iJb1eWj1kjkt1%2FtmBloicpX3uiZ1zR7tLYa4zCqVe%2Fzjjx44Q6Ak3tytHuX8UA11e%2BmOGLyv6TTRXKfnCa00h55j8G8bSFhvntft5xwcz4Z96w9ac9awhzBCYXid0FKZTYtHo6a%2F7NO4lEJjPtk2FCYyLWKoYFRZYD%2BRkDmRl1Xk%2F&X-Amz-Signature=74c645608fc7580fc8626502bbda63a010d424f59197ded9d875101c32709ded&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIC4ESJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbc7d7l5k2d7gowWaxdXO9exfpr4phlMHj%2BvlpmQWjPgIhAMDBOui8tGeGgwYn9YQRmnVdrBV1CFsOCRgcP3%2BDeOJnKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxauBRvKDnc1rZ2h44q3APamKzv2Hs%2FyUZOuUoW%2FFaAXKu%2Fcplol2J1iqG089AvsFA5Kn2G2JZGDSA5W6q%2BX2Q466l%2Bm0WtdBY2KkEPnRTbgw7PH%2FRQsJckULn61niyROuPHeuU8UHGvmLK21hUWsj7bGvUsZikBkPv8eNdzvKBNxX4urA7xgkIEEvQR1HOQiEIkoxjAkwf3j2KkiXwzZvbrGhgfbThHcqTe3C33U%2FBpWd%2FPk8yIuH%2BOqFIiou52SElq%2Bm89BX8Ln35wY5xFvVN8FnfM64rqwwF0TEwzr%2Br7POC8z7n6jdinwr5mPcqGhtsa9e8NWCfjI7L27Mz%2FtBjy5c%2FtnHU%2BUoykrQ9PIfqXg3tFkX1ghEJdixcocTJDAbVUfShCjKLMGseeOyv9rMcGnxIQ4ahKOF0aNrlU%2F3ZyG4LLgXIc%2BGLN5Ax8pncjMQzPJ8FraBtMxljb1Ko%2BtO%2BErb8y9HtIlzceFMiD%2FqcB%2FQfbg%2BJD48uEuEuEMbmFnWzC2ovQrY35Z6pazuOuJgU%2B0gQhhBL4LC7e%2FauZGobv19BZeJ75SQMRcY%2BO9CZES4Wfvt%2FCjmtzdGgTgyJGABEAD36I2eKakISzcxiFHxaKzJ2ahHInGK6wspRCfAz7Gw01EIP%2BTLZTKPiSTDO15vCBjqkARYxbjKxxgrFz9rHZ4yRf5iAycyXXEqSEIFBE1PF5T0ByE3iJb1eWj1kjkt1%2FtmBloicpX3uiZ1zR7tLYa4zCqVe%2Fzjjx44Q6Ak3tytHuX8UA11e%2BmOGLyv6TTRXKfnCa00h55j8G8bSFhvntft5xwcz4Z96w9ac9awhzBCYXid0FKZTYtHo6a%2F7NO4lEJjPtk2FCYyLWKoYFRZYD%2BRkDmRl1Xk%2F&X-Amz-Signature=4a798910027c9a8e0d7d2fb5d620a423fb9e3d091541055520f664b9ed45c078&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIC4ESJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbc7d7l5k2d7gowWaxdXO9exfpr4phlMHj%2BvlpmQWjPgIhAMDBOui8tGeGgwYn9YQRmnVdrBV1CFsOCRgcP3%2BDeOJnKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxauBRvKDnc1rZ2h44q3APamKzv2Hs%2FyUZOuUoW%2FFaAXKu%2Fcplol2J1iqG089AvsFA5Kn2G2JZGDSA5W6q%2BX2Q466l%2Bm0WtdBY2KkEPnRTbgw7PH%2FRQsJckULn61niyROuPHeuU8UHGvmLK21hUWsj7bGvUsZikBkPv8eNdzvKBNxX4urA7xgkIEEvQR1HOQiEIkoxjAkwf3j2KkiXwzZvbrGhgfbThHcqTe3C33U%2FBpWd%2FPk8yIuH%2BOqFIiou52SElq%2Bm89BX8Ln35wY5xFvVN8FnfM64rqwwF0TEwzr%2Br7POC8z7n6jdinwr5mPcqGhtsa9e8NWCfjI7L27Mz%2FtBjy5c%2FtnHU%2BUoykrQ9PIfqXg3tFkX1ghEJdixcocTJDAbVUfShCjKLMGseeOyv9rMcGnxIQ4ahKOF0aNrlU%2F3ZyG4LLgXIc%2BGLN5Ax8pncjMQzPJ8FraBtMxljb1Ko%2BtO%2BErb8y9HtIlzceFMiD%2FqcB%2FQfbg%2BJD48uEuEuEMbmFnWzC2ovQrY35Z6pazuOuJgU%2B0gQhhBL4LC7e%2FauZGobv19BZeJ75SQMRcY%2BO9CZES4Wfvt%2FCjmtzdGgTgyJGABEAD36I2eKakISzcxiFHxaKzJ2ahHInGK6wspRCfAz7Gw01EIP%2BTLZTKPiSTDO15vCBjqkARYxbjKxxgrFz9rHZ4yRf5iAycyXXEqSEIFBE1PF5T0ByE3iJb1eWj1kjkt1%2FtmBloicpX3uiZ1zR7tLYa4zCqVe%2Fzjjx44Q6Ak3tytHuX8UA11e%2BmOGLyv6TTRXKfnCa00h55j8G8bSFhvntft5xwcz4Z96w9ac9awhzBCYXid0FKZTYtHo6a%2F7NO4lEJjPtk2FCYyLWKoYFRZYD%2BRkDmRl1Xk%2F&X-Amz-Signature=016846b273e376cec08d20c70cef5d4ab866d80b9de725fd3239bb9e8a0d4a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIC4ESJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbc7d7l5k2d7gowWaxdXO9exfpr4phlMHj%2BvlpmQWjPgIhAMDBOui8tGeGgwYn9YQRmnVdrBV1CFsOCRgcP3%2BDeOJnKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxauBRvKDnc1rZ2h44q3APamKzv2Hs%2FyUZOuUoW%2FFaAXKu%2Fcplol2J1iqG089AvsFA5Kn2G2JZGDSA5W6q%2BX2Q466l%2Bm0WtdBY2KkEPnRTbgw7PH%2FRQsJckULn61niyROuPHeuU8UHGvmLK21hUWsj7bGvUsZikBkPv8eNdzvKBNxX4urA7xgkIEEvQR1HOQiEIkoxjAkwf3j2KkiXwzZvbrGhgfbThHcqTe3C33U%2FBpWd%2FPk8yIuH%2BOqFIiou52SElq%2Bm89BX8Ln35wY5xFvVN8FnfM64rqwwF0TEwzr%2Br7POC8z7n6jdinwr5mPcqGhtsa9e8NWCfjI7L27Mz%2FtBjy5c%2FtnHU%2BUoykrQ9PIfqXg3tFkX1ghEJdixcocTJDAbVUfShCjKLMGseeOyv9rMcGnxIQ4ahKOF0aNrlU%2F3ZyG4LLgXIc%2BGLN5Ax8pncjMQzPJ8FraBtMxljb1Ko%2BtO%2BErb8y9HtIlzceFMiD%2FqcB%2FQfbg%2BJD48uEuEuEMbmFnWzC2ovQrY35Z6pazuOuJgU%2B0gQhhBL4LC7e%2FauZGobv19BZeJ75SQMRcY%2BO9CZES4Wfvt%2FCjmtzdGgTgyJGABEAD36I2eKakISzcxiFHxaKzJ2ahHInGK6wspRCfAz7Gw01EIP%2BTLZTKPiSTDO15vCBjqkARYxbjKxxgrFz9rHZ4yRf5iAycyXXEqSEIFBE1PF5T0ByE3iJb1eWj1kjkt1%2FtmBloicpX3uiZ1zR7tLYa4zCqVe%2Fzjjx44Q6Ak3tytHuX8UA11e%2BmOGLyv6TTRXKfnCa00h55j8G8bSFhvntft5xwcz4Z96w9ac9awhzBCYXid0FKZTYtHo6a%2F7NO4lEJjPtk2FCYyLWKoYFRZYD%2BRkDmRl1Xk%2F&X-Amz-Signature=7c4ed5c3e5b67718d2588d0b8bbd447adaa60a1a894833511fd9c2658af3a39d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIC4ESJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbc7d7l5k2d7gowWaxdXO9exfpr4phlMHj%2BvlpmQWjPgIhAMDBOui8tGeGgwYn9YQRmnVdrBV1CFsOCRgcP3%2BDeOJnKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxauBRvKDnc1rZ2h44q3APamKzv2Hs%2FyUZOuUoW%2FFaAXKu%2Fcplol2J1iqG089AvsFA5Kn2G2JZGDSA5W6q%2BX2Q466l%2Bm0WtdBY2KkEPnRTbgw7PH%2FRQsJckULn61niyROuPHeuU8UHGvmLK21hUWsj7bGvUsZikBkPv8eNdzvKBNxX4urA7xgkIEEvQR1HOQiEIkoxjAkwf3j2KkiXwzZvbrGhgfbThHcqTe3C33U%2FBpWd%2FPk8yIuH%2BOqFIiou52SElq%2Bm89BX8Ln35wY5xFvVN8FnfM64rqwwF0TEwzr%2Br7POC8z7n6jdinwr5mPcqGhtsa9e8NWCfjI7L27Mz%2FtBjy5c%2FtnHU%2BUoykrQ9PIfqXg3tFkX1ghEJdixcocTJDAbVUfShCjKLMGseeOyv9rMcGnxIQ4ahKOF0aNrlU%2F3ZyG4LLgXIc%2BGLN5Ax8pncjMQzPJ8FraBtMxljb1Ko%2BtO%2BErb8y9HtIlzceFMiD%2FqcB%2FQfbg%2BJD48uEuEuEMbmFnWzC2ovQrY35Z6pazuOuJgU%2B0gQhhBL4LC7e%2FauZGobv19BZeJ75SQMRcY%2BO9CZES4Wfvt%2FCjmtzdGgTgyJGABEAD36I2eKakISzcxiFHxaKzJ2ahHInGK6wspRCfAz7Gw01EIP%2BTLZTKPiSTDO15vCBjqkARYxbjKxxgrFz9rHZ4yRf5iAycyXXEqSEIFBE1PF5T0ByE3iJb1eWj1kjkt1%2FtmBloicpX3uiZ1zR7tLYa4zCqVe%2Fzjjx44Q6Ak3tytHuX8UA11e%2BmOGLyv6TTRXKfnCa00h55j8G8bSFhvntft5xwcz4Z96w9ac9awhzBCYXid0FKZTYtHo6a%2F7NO4lEJjPtk2FCYyLWKoYFRZYD%2BRkDmRl1Xk%2F&X-Amz-Signature=c1b4e94e3bea573b8766f09b6ffc71400c0eeb55869a5ac594cb96af52e14b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

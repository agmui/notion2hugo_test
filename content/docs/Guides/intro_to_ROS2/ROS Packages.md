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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYURLZDQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCh2UUX5vaantP7a53XkrTgocAbA7YKtp4tRxhFNdjtjgIhAJ7eUmDvrPrPRHZIit2ci7RAvCtitxQX5KOwjPtl1qtDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIfJf6k5KfuwYIi30q3AOF2b7oJYCpIfRs4O6wPziDLJ909rJ7BrSm7fXRAONbr8BxrLctiV6GYczk%2BDf%2FV3fqhaKnore8gzMWYp9aZ0ZtWpgnv3WILiYK8A7gyUT7CFjOjII49utGtyDtZjh72NQtywQ6HJG7cAR7ZeI%2BYmSOK%2F3J7ZF%2Fql%2BdIzP7Acu5yQyuvw5iHAUQstOmYehtob2FJTUTW2ZmvnZ5TyZTXjitnSZmAnW0elZmXk5uC2r65TG8skpXlwgw9M0coWYw65JVvNDaFyf5t8am2xdICb3e3aB1HDwEeMuteZXxm%2FusGeSCDZVXiW9k2t7B75B92KAjoXUn1ShEb%2FJvD8b9%2B2uD1BusmSW5vQOk5ngITuUAYkum3UvgXJ8Rrvg8wRDB813BA%2FaLjMCacvuzD%2BcM%2BWLwHS%2Bv0lrh3Faewdo14oiWn6MRgqGgyJ3zKdAGaJ5vYSdLHbbInxeZQcvTMv2j9CrnGf3Zb9vwyEyQwB20LIfINEdSp04TAStai9dXz%2F6RyK7ecF7Jg7Z3dKqJS08f96e2ReNKFoqTt6q8owwgPlAKVxTjoymCWRZh%2FR7xhB1BTA2%2Fy0Sm%2BxPOEl%2BQRAwSbEj6rHEbGKwWeLxPQwkGx1zKHdjQG5OIHpcDFY7JNjD%2B2pXABjqkAVT5g9tz3mT4DxD2ZKGiAIGPo%2B3Rfa%2F5pzU97jeB2EYMgxAGiFEfh6RVIOjCBLwVw3xe61KudXOFKiSaRcYXRqasmB1jR2TB%2BGyKFFsLzGS6a8FUHMM1usTNkorXJnPTjch%2BKCd79ts5u316Nk9OJ0rhcrUbClSu7HulhhzIGHIOr1KtT%2F%2B1wKVcqZpMg3UybDzf104nvHOg%2BWkL0wvWmW2D1hmR&X-Amz-Signature=6fd92aff548a7c708829ecb5a4087a7fb9487f1ffc7eb78d32f2480dbf812eac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYURLZDQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCh2UUX5vaantP7a53XkrTgocAbA7YKtp4tRxhFNdjtjgIhAJ7eUmDvrPrPRHZIit2ci7RAvCtitxQX5KOwjPtl1qtDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIfJf6k5KfuwYIi30q3AOF2b7oJYCpIfRs4O6wPziDLJ909rJ7BrSm7fXRAONbr8BxrLctiV6GYczk%2BDf%2FV3fqhaKnore8gzMWYp9aZ0ZtWpgnv3WILiYK8A7gyUT7CFjOjII49utGtyDtZjh72NQtywQ6HJG7cAR7ZeI%2BYmSOK%2F3J7ZF%2Fql%2BdIzP7Acu5yQyuvw5iHAUQstOmYehtob2FJTUTW2ZmvnZ5TyZTXjitnSZmAnW0elZmXk5uC2r65TG8skpXlwgw9M0coWYw65JVvNDaFyf5t8am2xdICb3e3aB1HDwEeMuteZXxm%2FusGeSCDZVXiW9k2t7B75B92KAjoXUn1ShEb%2FJvD8b9%2B2uD1BusmSW5vQOk5ngITuUAYkum3UvgXJ8Rrvg8wRDB813BA%2FaLjMCacvuzD%2BcM%2BWLwHS%2Bv0lrh3Faewdo14oiWn6MRgqGgyJ3zKdAGaJ5vYSdLHbbInxeZQcvTMv2j9CrnGf3Zb9vwyEyQwB20LIfINEdSp04TAStai9dXz%2F6RyK7ecF7Jg7Z3dKqJS08f96e2ReNKFoqTt6q8owwgPlAKVxTjoymCWRZh%2FR7xhB1BTA2%2Fy0Sm%2BxPOEl%2BQRAwSbEj6rHEbGKwWeLxPQwkGx1zKHdjQG5OIHpcDFY7JNjD%2B2pXABjqkAVT5g9tz3mT4DxD2ZKGiAIGPo%2B3Rfa%2F5pzU97jeB2EYMgxAGiFEfh6RVIOjCBLwVw3xe61KudXOFKiSaRcYXRqasmB1jR2TB%2BGyKFFsLzGS6a8FUHMM1usTNkorXJnPTjch%2BKCd79ts5u316Nk9OJ0rhcrUbClSu7HulhhzIGHIOr1KtT%2F%2B1wKVcqZpMg3UybDzf104nvHOg%2BWkL0wvWmW2D1hmR&X-Amz-Signature=72deb4171b01972125a9681921d20233b6de4637326636c8dfdfcefd25ef5647&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYURLZDQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCh2UUX5vaantP7a53XkrTgocAbA7YKtp4tRxhFNdjtjgIhAJ7eUmDvrPrPRHZIit2ci7RAvCtitxQX5KOwjPtl1qtDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIfJf6k5KfuwYIi30q3AOF2b7oJYCpIfRs4O6wPziDLJ909rJ7BrSm7fXRAONbr8BxrLctiV6GYczk%2BDf%2FV3fqhaKnore8gzMWYp9aZ0ZtWpgnv3WILiYK8A7gyUT7CFjOjII49utGtyDtZjh72NQtywQ6HJG7cAR7ZeI%2BYmSOK%2F3J7ZF%2Fql%2BdIzP7Acu5yQyuvw5iHAUQstOmYehtob2FJTUTW2ZmvnZ5TyZTXjitnSZmAnW0elZmXk5uC2r65TG8skpXlwgw9M0coWYw65JVvNDaFyf5t8am2xdICb3e3aB1HDwEeMuteZXxm%2FusGeSCDZVXiW9k2t7B75B92KAjoXUn1ShEb%2FJvD8b9%2B2uD1BusmSW5vQOk5ngITuUAYkum3UvgXJ8Rrvg8wRDB813BA%2FaLjMCacvuzD%2BcM%2BWLwHS%2Bv0lrh3Faewdo14oiWn6MRgqGgyJ3zKdAGaJ5vYSdLHbbInxeZQcvTMv2j9CrnGf3Zb9vwyEyQwB20LIfINEdSp04TAStai9dXz%2F6RyK7ecF7Jg7Z3dKqJS08f96e2ReNKFoqTt6q8owwgPlAKVxTjoymCWRZh%2FR7xhB1BTA2%2Fy0Sm%2BxPOEl%2BQRAwSbEj6rHEbGKwWeLxPQwkGx1zKHdjQG5OIHpcDFY7JNjD%2B2pXABjqkAVT5g9tz3mT4DxD2ZKGiAIGPo%2B3Rfa%2F5pzU97jeB2EYMgxAGiFEfh6RVIOjCBLwVw3xe61KudXOFKiSaRcYXRqasmB1jR2TB%2BGyKFFsLzGS6a8FUHMM1usTNkorXJnPTjch%2BKCd79ts5u316Nk9OJ0rhcrUbClSu7HulhhzIGHIOr1KtT%2F%2B1wKVcqZpMg3UybDzf104nvHOg%2BWkL0wvWmW2D1hmR&X-Amz-Signature=6d385d7446e90bb568a92597c83f3fdda86237e3117b76aa8681572e1e164c50&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYURLZDQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCh2UUX5vaantP7a53XkrTgocAbA7YKtp4tRxhFNdjtjgIhAJ7eUmDvrPrPRHZIit2ci7RAvCtitxQX5KOwjPtl1qtDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIfJf6k5KfuwYIi30q3AOF2b7oJYCpIfRs4O6wPziDLJ909rJ7BrSm7fXRAONbr8BxrLctiV6GYczk%2BDf%2FV3fqhaKnore8gzMWYp9aZ0ZtWpgnv3WILiYK8A7gyUT7CFjOjII49utGtyDtZjh72NQtywQ6HJG7cAR7ZeI%2BYmSOK%2F3J7ZF%2Fql%2BdIzP7Acu5yQyuvw5iHAUQstOmYehtob2FJTUTW2ZmvnZ5TyZTXjitnSZmAnW0elZmXk5uC2r65TG8skpXlwgw9M0coWYw65JVvNDaFyf5t8am2xdICb3e3aB1HDwEeMuteZXxm%2FusGeSCDZVXiW9k2t7B75B92KAjoXUn1ShEb%2FJvD8b9%2B2uD1BusmSW5vQOk5ngITuUAYkum3UvgXJ8Rrvg8wRDB813BA%2FaLjMCacvuzD%2BcM%2BWLwHS%2Bv0lrh3Faewdo14oiWn6MRgqGgyJ3zKdAGaJ5vYSdLHbbInxeZQcvTMv2j9CrnGf3Zb9vwyEyQwB20LIfINEdSp04TAStai9dXz%2F6RyK7ecF7Jg7Z3dKqJS08f96e2ReNKFoqTt6q8owwgPlAKVxTjoymCWRZh%2FR7xhB1BTA2%2Fy0Sm%2BxPOEl%2BQRAwSbEj6rHEbGKwWeLxPQwkGx1zKHdjQG5OIHpcDFY7JNjD%2B2pXABjqkAVT5g9tz3mT4DxD2ZKGiAIGPo%2B3Rfa%2F5pzU97jeB2EYMgxAGiFEfh6RVIOjCBLwVw3xe61KudXOFKiSaRcYXRqasmB1jR2TB%2BGyKFFsLzGS6a8FUHMM1usTNkorXJnPTjch%2BKCd79ts5u316Nk9OJ0rhcrUbClSu7HulhhzIGHIOr1KtT%2F%2B1wKVcqZpMg3UybDzf104nvHOg%2BWkL0wvWmW2D1hmR&X-Amz-Signature=b2779027d2d1730c805eadfcf6614ab15365c5712edc00c84a4c7cf9de9b319c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYURLZDQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCh2UUX5vaantP7a53XkrTgocAbA7YKtp4tRxhFNdjtjgIhAJ7eUmDvrPrPRHZIit2ci7RAvCtitxQX5KOwjPtl1qtDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIfJf6k5KfuwYIi30q3AOF2b7oJYCpIfRs4O6wPziDLJ909rJ7BrSm7fXRAONbr8BxrLctiV6GYczk%2BDf%2FV3fqhaKnore8gzMWYp9aZ0ZtWpgnv3WILiYK8A7gyUT7CFjOjII49utGtyDtZjh72NQtywQ6HJG7cAR7ZeI%2BYmSOK%2F3J7ZF%2Fql%2BdIzP7Acu5yQyuvw5iHAUQstOmYehtob2FJTUTW2ZmvnZ5TyZTXjitnSZmAnW0elZmXk5uC2r65TG8skpXlwgw9M0coWYw65JVvNDaFyf5t8am2xdICb3e3aB1HDwEeMuteZXxm%2FusGeSCDZVXiW9k2t7B75B92KAjoXUn1ShEb%2FJvD8b9%2B2uD1BusmSW5vQOk5ngITuUAYkum3UvgXJ8Rrvg8wRDB813BA%2FaLjMCacvuzD%2BcM%2BWLwHS%2Bv0lrh3Faewdo14oiWn6MRgqGgyJ3zKdAGaJ5vYSdLHbbInxeZQcvTMv2j9CrnGf3Zb9vwyEyQwB20LIfINEdSp04TAStai9dXz%2F6RyK7ecF7Jg7Z3dKqJS08f96e2ReNKFoqTt6q8owwgPlAKVxTjoymCWRZh%2FR7xhB1BTA2%2Fy0Sm%2BxPOEl%2BQRAwSbEj6rHEbGKwWeLxPQwkGx1zKHdjQG5OIHpcDFY7JNjD%2B2pXABjqkAVT5g9tz3mT4DxD2ZKGiAIGPo%2B3Rfa%2F5pzU97jeB2EYMgxAGiFEfh6RVIOjCBLwVw3xe61KudXOFKiSaRcYXRqasmB1jR2TB%2BGyKFFsLzGS6a8FUHMM1usTNkorXJnPTjch%2BKCd79ts5u316Nk9OJ0rhcrUbClSu7HulhhzIGHIOr1KtT%2F%2B1wKVcqZpMg3UybDzf104nvHOg%2BWkL0wvWmW2D1hmR&X-Amz-Signature=a84df82f3e6cc147c3874a138ec1f71f1af39bbbd5a8e1711b52e1ef68a115f6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYURLZDQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCh2UUX5vaantP7a53XkrTgocAbA7YKtp4tRxhFNdjtjgIhAJ7eUmDvrPrPRHZIit2ci7RAvCtitxQX5KOwjPtl1qtDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIfJf6k5KfuwYIi30q3AOF2b7oJYCpIfRs4O6wPziDLJ909rJ7BrSm7fXRAONbr8BxrLctiV6GYczk%2BDf%2FV3fqhaKnore8gzMWYp9aZ0ZtWpgnv3WILiYK8A7gyUT7CFjOjII49utGtyDtZjh72NQtywQ6HJG7cAR7ZeI%2BYmSOK%2F3J7ZF%2Fql%2BdIzP7Acu5yQyuvw5iHAUQstOmYehtob2FJTUTW2ZmvnZ5TyZTXjitnSZmAnW0elZmXk5uC2r65TG8skpXlwgw9M0coWYw65JVvNDaFyf5t8am2xdICb3e3aB1HDwEeMuteZXxm%2FusGeSCDZVXiW9k2t7B75B92KAjoXUn1ShEb%2FJvD8b9%2B2uD1BusmSW5vQOk5ngITuUAYkum3UvgXJ8Rrvg8wRDB813BA%2FaLjMCacvuzD%2BcM%2BWLwHS%2Bv0lrh3Faewdo14oiWn6MRgqGgyJ3zKdAGaJ5vYSdLHbbInxeZQcvTMv2j9CrnGf3Zb9vwyEyQwB20LIfINEdSp04TAStai9dXz%2F6RyK7ecF7Jg7Z3dKqJS08f96e2ReNKFoqTt6q8owwgPlAKVxTjoymCWRZh%2FR7xhB1BTA2%2Fy0Sm%2BxPOEl%2BQRAwSbEj6rHEbGKwWeLxPQwkGx1zKHdjQG5OIHpcDFY7JNjD%2B2pXABjqkAVT5g9tz3mT4DxD2ZKGiAIGPo%2B3Rfa%2F5pzU97jeB2EYMgxAGiFEfh6RVIOjCBLwVw3xe61KudXOFKiSaRcYXRqasmB1jR2TB%2BGyKFFsLzGS6a8FUHMM1usTNkorXJnPTjch%2BKCd79ts5u316Nk9OJ0rhcrUbClSu7HulhhzIGHIOr1KtT%2F%2B1wKVcqZpMg3UybDzf104nvHOg%2BWkL0wvWmW2D1hmR&X-Amz-Signature=3a6b96989961eb0d24c71b08c8af0f80b9438d256a8050e3b325e3c326ad4761&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYURLZDQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCh2UUX5vaantP7a53XkrTgocAbA7YKtp4tRxhFNdjtjgIhAJ7eUmDvrPrPRHZIit2ci7RAvCtitxQX5KOwjPtl1qtDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIfJf6k5KfuwYIi30q3AOF2b7oJYCpIfRs4O6wPziDLJ909rJ7BrSm7fXRAONbr8BxrLctiV6GYczk%2BDf%2FV3fqhaKnore8gzMWYp9aZ0ZtWpgnv3WILiYK8A7gyUT7CFjOjII49utGtyDtZjh72NQtywQ6HJG7cAR7ZeI%2BYmSOK%2F3J7ZF%2Fql%2BdIzP7Acu5yQyuvw5iHAUQstOmYehtob2FJTUTW2ZmvnZ5TyZTXjitnSZmAnW0elZmXk5uC2r65TG8skpXlwgw9M0coWYw65JVvNDaFyf5t8am2xdICb3e3aB1HDwEeMuteZXxm%2FusGeSCDZVXiW9k2t7B75B92KAjoXUn1ShEb%2FJvD8b9%2B2uD1BusmSW5vQOk5ngITuUAYkum3UvgXJ8Rrvg8wRDB813BA%2FaLjMCacvuzD%2BcM%2BWLwHS%2Bv0lrh3Faewdo14oiWn6MRgqGgyJ3zKdAGaJ5vYSdLHbbInxeZQcvTMv2j9CrnGf3Zb9vwyEyQwB20LIfINEdSp04TAStai9dXz%2F6RyK7ecF7Jg7Z3dKqJS08f96e2ReNKFoqTt6q8owwgPlAKVxTjoymCWRZh%2FR7xhB1BTA2%2Fy0Sm%2BxPOEl%2BQRAwSbEj6rHEbGKwWeLxPQwkGx1zKHdjQG5OIHpcDFY7JNjD%2B2pXABjqkAVT5g9tz3mT4DxD2ZKGiAIGPo%2B3Rfa%2F5pzU97jeB2EYMgxAGiFEfh6RVIOjCBLwVw3xe61KudXOFKiSaRcYXRqasmB1jR2TB%2BGyKFFsLzGS6a8FUHMM1usTNkorXJnPTjch%2BKCd79ts5u316Nk9OJ0rhcrUbClSu7HulhhzIGHIOr1KtT%2F%2B1wKVcqZpMg3UybDzf104nvHOg%2BWkL0wvWmW2D1hmR&X-Amz-Signature=53671fe4d44b7d5b3f1a7b940f4dd8035a832f1429f7f5f6b0706f28eb3c5f52&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

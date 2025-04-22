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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NU257ZA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDYhy32LfE5KnFvsnGz37bHcmMQDkuw38PlTRsb1xTUyAiEAlV1DwLeFtY%2FXP1LISAghirPj15t2CVoYUKpzPWCHUREqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrR%2BUt54M7naO8NRyrcA640pz%2FfgJdIf0j40X8RQZcYPQHljxTfODLtEEQqyKJMf0VVk3VTPKT6vtJ7dXF7qzPIliJ7wHhvX5P8zXsQf3lqrPbbWBZth4kqy1Pov4xK3RcL%2BGdzbrz5I3v9GGEej%2Fum3gFkdnwIJyAjp%2FyYz60Ds9GqU8vPYLDogo5ASh%2F46k1lbAPUyrHSVb6QRFNBNAs76NURqP%2BvRvN9Gi36ZcCfryNvAEXAixsX1YmJ0U%2Bsa0SuLyp3DIF00M%2FXpKPBKwDlLbN0NRkbGSgZM2hY9vUOlXs9G6wIn1voaxl%2BaZDasjR0CnAUl3qCwsiDy5L2bnJZv17pX36A7I49cgJ%2F0BVH8MiOokOZ0YoxVcObPeCeQWxirYhq4ncegs4nAXqfJzIWJiJ9%2BehZYq4aFkXKmjDOp%2BYIGxatV%2F2CKwaVr1yM9VtgaBTNG94peDTDfcV%2Fjv7A6T2sfVa2gW8Nf3Kd6mtP4prvSTs5vvgnxBXbWsLuhws0%2FQ%2BcMBgd%2Fjwm5h4euDego%2FBzd4jTY7Gp%2FeaOELMKOeXGcB%2Bi1lQLCt9IfFfECxfedDd6SZ9azv1sCe%2F9%2BwpT467d8LzInn0DWah56Ym3NE7q1OOGY1Aqh8QnuBNEoF6L0ZGbX8fs4fDdMKaqnsAGOqUB29FpANwKQh8XRlrJP7HzG3nPKYfCqBbk%2BbJOpeokzjLiSzdfuXfe1VPLUcmWn0GbFvnjgV0Bk5VjyKDJ8opTfOY6YYi1a2oumw6DfVtsLh%2BG8UIfEvJkL9R0sgELCNVtpW8iwxVa50oRl4svCXstXcI8XpD8KRRnIw8eNbT2sDIvqf1r4aUlL0%2BeL57qJtGWmRsoCKp%2FBf1TBkrdo754q91xZG7H&X-Amz-Signature=06ef0cf92b777319684a010e630cf369783e9552ef4e2b5879b6c5e2bcaf9c97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NU257ZA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDYhy32LfE5KnFvsnGz37bHcmMQDkuw38PlTRsb1xTUyAiEAlV1DwLeFtY%2FXP1LISAghirPj15t2CVoYUKpzPWCHUREqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrR%2BUt54M7naO8NRyrcA640pz%2FfgJdIf0j40X8RQZcYPQHljxTfODLtEEQqyKJMf0VVk3VTPKT6vtJ7dXF7qzPIliJ7wHhvX5P8zXsQf3lqrPbbWBZth4kqy1Pov4xK3RcL%2BGdzbrz5I3v9GGEej%2Fum3gFkdnwIJyAjp%2FyYz60Ds9GqU8vPYLDogo5ASh%2F46k1lbAPUyrHSVb6QRFNBNAs76NURqP%2BvRvN9Gi36ZcCfryNvAEXAixsX1YmJ0U%2Bsa0SuLyp3DIF00M%2FXpKPBKwDlLbN0NRkbGSgZM2hY9vUOlXs9G6wIn1voaxl%2BaZDasjR0CnAUl3qCwsiDy5L2bnJZv17pX36A7I49cgJ%2F0BVH8MiOokOZ0YoxVcObPeCeQWxirYhq4ncegs4nAXqfJzIWJiJ9%2BehZYq4aFkXKmjDOp%2BYIGxatV%2F2CKwaVr1yM9VtgaBTNG94peDTDfcV%2Fjv7A6T2sfVa2gW8Nf3Kd6mtP4prvSTs5vvgnxBXbWsLuhws0%2FQ%2BcMBgd%2Fjwm5h4euDego%2FBzd4jTY7Gp%2FeaOELMKOeXGcB%2Bi1lQLCt9IfFfECxfedDd6SZ9azv1sCe%2F9%2BwpT467d8LzInn0DWah56Ym3NE7q1OOGY1Aqh8QnuBNEoF6L0ZGbX8fs4fDdMKaqnsAGOqUB29FpANwKQh8XRlrJP7HzG3nPKYfCqBbk%2BbJOpeokzjLiSzdfuXfe1VPLUcmWn0GbFvnjgV0Bk5VjyKDJ8opTfOY6YYi1a2oumw6DfVtsLh%2BG8UIfEvJkL9R0sgELCNVtpW8iwxVa50oRl4svCXstXcI8XpD8KRRnIw8eNbT2sDIvqf1r4aUlL0%2BeL57qJtGWmRsoCKp%2FBf1TBkrdo754q91xZG7H&X-Amz-Signature=fb958e0e80d39cbaf5f49ea678758bce7687adb2ce042b7c3ed820a5feadfee9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NU257ZA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDYhy32LfE5KnFvsnGz37bHcmMQDkuw38PlTRsb1xTUyAiEAlV1DwLeFtY%2FXP1LISAghirPj15t2CVoYUKpzPWCHUREqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrR%2BUt54M7naO8NRyrcA640pz%2FfgJdIf0j40X8RQZcYPQHljxTfODLtEEQqyKJMf0VVk3VTPKT6vtJ7dXF7qzPIliJ7wHhvX5P8zXsQf3lqrPbbWBZth4kqy1Pov4xK3RcL%2BGdzbrz5I3v9GGEej%2Fum3gFkdnwIJyAjp%2FyYz60Ds9GqU8vPYLDogo5ASh%2F46k1lbAPUyrHSVb6QRFNBNAs76NURqP%2BvRvN9Gi36ZcCfryNvAEXAixsX1YmJ0U%2Bsa0SuLyp3DIF00M%2FXpKPBKwDlLbN0NRkbGSgZM2hY9vUOlXs9G6wIn1voaxl%2BaZDasjR0CnAUl3qCwsiDy5L2bnJZv17pX36A7I49cgJ%2F0BVH8MiOokOZ0YoxVcObPeCeQWxirYhq4ncegs4nAXqfJzIWJiJ9%2BehZYq4aFkXKmjDOp%2BYIGxatV%2F2CKwaVr1yM9VtgaBTNG94peDTDfcV%2Fjv7A6T2sfVa2gW8Nf3Kd6mtP4prvSTs5vvgnxBXbWsLuhws0%2FQ%2BcMBgd%2Fjwm5h4euDego%2FBzd4jTY7Gp%2FeaOELMKOeXGcB%2Bi1lQLCt9IfFfECxfedDd6SZ9azv1sCe%2F9%2BwpT467d8LzInn0DWah56Ym3NE7q1OOGY1Aqh8QnuBNEoF6L0ZGbX8fs4fDdMKaqnsAGOqUB29FpANwKQh8XRlrJP7HzG3nPKYfCqBbk%2BbJOpeokzjLiSzdfuXfe1VPLUcmWn0GbFvnjgV0Bk5VjyKDJ8opTfOY6YYi1a2oumw6DfVtsLh%2BG8UIfEvJkL9R0sgELCNVtpW8iwxVa50oRl4svCXstXcI8XpD8KRRnIw8eNbT2sDIvqf1r4aUlL0%2BeL57qJtGWmRsoCKp%2FBf1TBkrdo754q91xZG7H&X-Amz-Signature=832de629a36f1c6d698f9c77caaf5444f85b2408eb76f95c3982905353436bee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NU257ZA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDYhy32LfE5KnFvsnGz37bHcmMQDkuw38PlTRsb1xTUyAiEAlV1DwLeFtY%2FXP1LISAghirPj15t2CVoYUKpzPWCHUREqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrR%2BUt54M7naO8NRyrcA640pz%2FfgJdIf0j40X8RQZcYPQHljxTfODLtEEQqyKJMf0VVk3VTPKT6vtJ7dXF7qzPIliJ7wHhvX5P8zXsQf3lqrPbbWBZth4kqy1Pov4xK3RcL%2BGdzbrz5I3v9GGEej%2Fum3gFkdnwIJyAjp%2FyYz60Ds9GqU8vPYLDogo5ASh%2F46k1lbAPUyrHSVb6QRFNBNAs76NURqP%2BvRvN9Gi36ZcCfryNvAEXAixsX1YmJ0U%2Bsa0SuLyp3DIF00M%2FXpKPBKwDlLbN0NRkbGSgZM2hY9vUOlXs9G6wIn1voaxl%2BaZDasjR0CnAUl3qCwsiDy5L2bnJZv17pX36A7I49cgJ%2F0BVH8MiOokOZ0YoxVcObPeCeQWxirYhq4ncegs4nAXqfJzIWJiJ9%2BehZYq4aFkXKmjDOp%2BYIGxatV%2F2CKwaVr1yM9VtgaBTNG94peDTDfcV%2Fjv7A6T2sfVa2gW8Nf3Kd6mtP4prvSTs5vvgnxBXbWsLuhws0%2FQ%2BcMBgd%2Fjwm5h4euDego%2FBzd4jTY7Gp%2FeaOELMKOeXGcB%2Bi1lQLCt9IfFfECxfedDd6SZ9azv1sCe%2F9%2BwpT467d8LzInn0DWah56Ym3NE7q1OOGY1Aqh8QnuBNEoF6L0ZGbX8fs4fDdMKaqnsAGOqUB29FpANwKQh8XRlrJP7HzG3nPKYfCqBbk%2BbJOpeokzjLiSzdfuXfe1VPLUcmWn0GbFvnjgV0Bk5VjyKDJ8opTfOY6YYi1a2oumw6DfVtsLh%2BG8UIfEvJkL9R0sgELCNVtpW8iwxVa50oRl4svCXstXcI8XpD8KRRnIw8eNbT2sDIvqf1r4aUlL0%2BeL57qJtGWmRsoCKp%2FBf1TBkrdo754q91xZG7H&X-Amz-Signature=45b2df0943ca3cc310d41aab5a2db0b91353a11d6b8fa85dc5c33cdcedad4408&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NU257ZA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDYhy32LfE5KnFvsnGz37bHcmMQDkuw38PlTRsb1xTUyAiEAlV1DwLeFtY%2FXP1LISAghirPj15t2CVoYUKpzPWCHUREqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrR%2BUt54M7naO8NRyrcA640pz%2FfgJdIf0j40X8RQZcYPQHljxTfODLtEEQqyKJMf0VVk3VTPKT6vtJ7dXF7qzPIliJ7wHhvX5P8zXsQf3lqrPbbWBZth4kqy1Pov4xK3RcL%2BGdzbrz5I3v9GGEej%2Fum3gFkdnwIJyAjp%2FyYz60Ds9GqU8vPYLDogo5ASh%2F46k1lbAPUyrHSVb6QRFNBNAs76NURqP%2BvRvN9Gi36ZcCfryNvAEXAixsX1YmJ0U%2Bsa0SuLyp3DIF00M%2FXpKPBKwDlLbN0NRkbGSgZM2hY9vUOlXs9G6wIn1voaxl%2BaZDasjR0CnAUl3qCwsiDy5L2bnJZv17pX36A7I49cgJ%2F0BVH8MiOokOZ0YoxVcObPeCeQWxirYhq4ncegs4nAXqfJzIWJiJ9%2BehZYq4aFkXKmjDOp%2BYIGxatV%2F2CKwaVr1yM9VtgaBTNG94peDTDfcV%2Fjv7A6T2sfVa2gW8Nf3Kd6mtP4prvSTs5vvgnxBXbWsLuhws0%2FQ%2BcMBgd%2Fjwm5h4euDego%2FBzd4jTY7Gp%2FeaOELMKOeXGcB%2Bi1lQLCt9IfFfECxfedDd6SZ9azv1sCe%2F9%2BwpT467d8LzInn0DWah56Ym3NE7q1OOGY1Aqh8QnuBNEoF6L0ZGbX8fs4fDdMKaqnsAGOqUB29FpANwKQh8XRlrJP7HzG3nPKYfCqBbk%2BbJOpeokzjLiSzdfuXfe1VPLUcmWn0GbFvnjgV0Bk5VjyKDJ8opTfOY6YYi1a2oumw6DfVtsLh%2BG8UIfEvJkL9R0sgELCNVtpW8iwxVa50oRl4svCXstXcI8XpD8KRRnIw8eNbT2sDIvqf1r4aUlL0%2BeL57qJtGWmRsoCKp%2FBf1TBkrdo754q91xZG7H&X-Amz-Signature=463d8e1500624ab3ad899e0d8d458b02bf011676b6c624a101c791b834e1edfa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NU257ZA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDYhy32LfE5KnFvsnGz37bHcmMQDkuw38PlTRsb1xTUyAiEAlV1DwLeFtY%2FXP1LISAghirPj15t2CVoYUKpzPWCHUREqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrR%2BUt54M7naO8NRyrcA640pz%2FfgJdIf0j40X8RQZcYPQHljxTfODLtEEQqyKJMf0VVk3VTPKT6vtJ7dXF7qzPIliJ7wHhvX5P8zXsQf3lqrPbbWBZth4kqy1Pov4xK3RcL%2BGdzbrz5I3v9GGEej%2Fum3gFkdnwIJyAjp%2FyYz60Ds9GqU8vPYLDogo5ASh%2F46k1lbAPUyrHSVb6QRFNBNAs76NURqP%2BvRvN9Gi36ZcCfryNvAEXAixsX1YmJ0U%2Bsa0SuLyp3DIF00M%2FXpKPBKwDlLbN0NRkbGSgZM2hY9vUOlXs9G6wIn1voaxl%2BaZDasjR0CnAUl3qCwsiDy5L2bnJZv17pX36A7I49cgJ%2F0BVH8MiOokOZ0YoxVcObPeCeQWxirYhq4ncegs4nAXqfJzIWJiJ9%2BehZYq4aFkXKmjDOp%2BYIGxatV%2F2CKwaVr1yM9VtgaBTNG94peDTDfcV%2Fjv7A6T2sfVa2gW8Nf3Kd6mtP4prvSTs5vvgnxBXbWsLuhws0%2FQ%2BcMBgd%2Fjwm5h4euDego%2FBzd4jTY7Gp%2FeaOELMKOeXGcB%2Bi1lQLCt9IfFfECxfedDd6SZ9azv1sCe%2F9%2BwpT467d8LzInn0DWah56Ym3NE7q1OOGY1Aqh8QnuBNEoF6L0ZGbX8fs4fDdMKaqnsAGOqUB29FpANwKQh8XRlrJP7HzG3nPKYfCqBbk%2BbJOpeokzjLiSzdfuXfe1VPLUcmWn0GbFvnjgV0Bk5VjyKDJ8opTfOY6YYi1a2oumw6DfVtsLh%2BG8UIfEvJkL9R0sgELCNVtpW8iwxVa50oRl4svCXstXcI8XpD8KRRnIw8eNbT2sDIvqf1r4aUlL0%2BeL57qJtGWmRsoCKp%2FBf1TBkrdo754q91xZG7H&X-Amz-Signature=f4c3fff710c64b730204a22ad3baa22ec963ca31f4696e6bc14b21991dd02b04&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NU257ZA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDYhy32LfE5KnFvsnGz37bHcmMQDkuw38PlTRsb1xTUyAiEAlV1DwLeFtY%2FXP1LISAghirPj15t2CVoYUKpzPWCHUREqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrR%2BUt54M7naO8NRyrcA640pz%2FfgJdIf0j40X8RQZcYPQHljxTfODLtEEQqyKJMf0VVk3VTPKT6vtJ7dXF7qzPIliJ7wHhvX5P8zXsQf3lqrPbbWBZth4kqy1Pov4xK3RcL%2BGdzbrz5I3v9GGEej%2Fum3gFkdnwIJyAjp%2FyYz60Ds9GqU8vPYLDogo5ASh%2F46k1lbAPUyrHSVb6QRFNBNAs76NURqP%2BvRvN9Gi36ZcCfryNvAEXAixsX1YmJ0U%2Bsa0SuLyp3DIF00M%2FXpKPBKwDlLbN0NRkbGSgZM2hY9vUOlXs9G6wIn1voaxl%2BaZDasjR0CnAUl3qCwsiDy5L2bnJZv17pX36A7I49cgJ%2F0BVH8MiOokOZ0YoxVcObPeCeQWxirYhq4ncegs4nAXqfJzIWJiJ9%2BehZYq4aFkXKmjDOp%2BYIGxatV%2F2CKwaVr1yM9VtgaBTNG94peDTDfcV%2Fjv7A6T2sfVa2gW8Nf3Kd6mtP4prvSTs5vvgnxBXbWsLuhws0%2FQ%2BcMBgd%2Fjwm5h4euDego%2FBzd4jTY7Gp%2FeaOELMKOeXGcB%2Bi1lQLCt9IfFfECxfedDd6SZ9azv1sCe%2F9%2BwpT467d8LzInn0DWah56Ym3NE7q1OOGY1Aqh8QnuBNEoF6L0ZGbX8fs4fDdMKaqnsAGOqUB29FpANwKQh8XRlrJP7HzG3nPKYfCqBbk%2BbJOpeokzjLiSzdfuXfe1VPLUcmWn0GbFvnjgV0Bk5VjyKDJ8opTfOY6YYi1a2oumw6DfVtsLh%2BG8UIfEvJkL9R0sgELCNVtpW8iwxVa50oRl4svCXstXcI8XpD8KRRnIw8eNbT2sDIvqf1r4aUlL0%2BeL57qJtGWmRsoCKp%2FBf1TBkrdo754q91xZG7H&X-Amz-Signature=1a4a0dc30755b7cdc970cdaef0cbb9c49adf7b82f95405ce7dbfa3b8ac94fcb8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

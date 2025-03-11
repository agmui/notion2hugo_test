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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYOZAUB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBOWJLu4vFF9a69yCujgaOfLI2JpvzLy4F7%2F3AU1P4RNAiEAl7K6lyJbwRnj5ynreZ98SY%2FGYVWvzfFC%2F4qS5b7UTyYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGwi8P%2F7ENOMFBaZCrcA%2Frf75Cr8DlYPPAWcU4RyrmhMAd3HjrXmJVcpoYt2j4n2h71TiNtHegZF1fl3KxbH397k5BkXsvOtFukZPrbRcSGXCzLPn1eQy3hlpeWv5NLiPAspGDRGCFZ%2FQyeN6vMQLZ6yf%2F0f91BFV3mud%2B%2BxyXv17It3n69WLs6eTZTX6wsoQY85WyiDOaEmIzjRHkrSdZKF7u%2FNgdSayqODwwbuhmktLL88bL%2B2tBPA7C%2F%2BYpIoCPsHLMVakp6ZCJfiii7%2BYgU%2BWTHp%2FmBNLqQDmJ0e2DZBra8K8YEiYURh%2BWJsHiBJz4ikV35ThvSgAn2mF0qANVsUb6fwnWYKUU8dVWjluyLniQQRStmYO5O9qHfQ23aASwYJNauTWUP9DZkd0hAB7ozJjk8%2BylkpXQk6sy%2B%2BdavRsLlue5QlYzAMHA6E2qWcpcY4H5x%2F5fIWz7ni0G%2BxHq5K4nhy632FIs2%2BkNSr2reN%2F9RJMEIFmXZhq71qaxvFy%2BZHF6Ub6s9mYNoakBRVP0BiQHZZrNJ0GH%2BNrE7ZllYVGD%2Bviov2GBusF%2BxCFY30gViH3Luc9ieiOG3Avca2xyG9XYp4vuZTyDMg22gEQrB4tJtpgQYzoDEbwD4wt9gWf5%2FWzI0yJyJL%2FDsMOKuvr4GOqUBVqfrG%2FtKYl35br8OtXTTgb2dViViYQ%2BxDs9U4wUPPlDE0ji8t3ozos5UVu3Yg9r6yWgGFGguLQYcU5GjMs6WDu0cL5ZUwZSxg%2FP1aXhzY58Op8e8JGr1fGFfvJA6NW1aL5M9n%2FiQfd%2Faka8gEJJiG4ai8zX8Hb1%2BXrk6jatq0g8L5pN6av4KoW5WqIiYfUCtKp5u8G3UW2Gr4%2BrBBcq1hQKtrIJB&X-Amz-Signature=72fde0a503d7dc6d0120ca44696b74c300dcdca1d91ceb64127b7757353f6e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYOZAUB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBOWJLu4vFF9a69yCujgaOfLI2JpvzLy4F7%2F3AU1P4RNAiEAl7K6lyJbwRnj5ynreZ98SY%2FGYVWvzfFC%2F4qS5b7UTyYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGwi8P%2F7ENOMFBaZCrcA%2Frf75Cr8DlYPPAWcU4RyrmhMAd3HjrXmJVcpoYt2j4n2h71TiNtHegZF1fl3KxbH397k5BkXsvOtFukZPrbRcSGXCzLPn1eQy3hlpeWv5NLiPAspGDRGCFZ%2FQyeN6vMQLZ6yf%2F0f91BFV3mud%2B%2BxyXv17It3n69WLs6eTZTX6wsoQY85WyiDOaEmIzjRHkrSdZKF7u%2FNgdSayqODwwbuhmktLL88bL%2B2tBPA7C%2F%2BYpIoCPsHLMVakp6ZCJfiii7%2BYgU%2BWTHp%2FmBNLqQDmJ0e2DZBra8K8YEiYURh%2BWJsHiBJz4ikV35ThvSgAn2mF0qANVsUb6fwnWYKUU8dVWjluyLniQQRStmYO5O9qHfQ23aASwYJNauTWUP9DZkd0hAB7ozJjk8%2BylkpXQk6sy%2B%2BdavRsLlue5QlYzAMHA6E2qWcpcY4H5x%2F5fIWz7ni0G%2BxHq5K4nhy632FIs2%2BkNSr2reN%2F9RJMEIFmXZhq71qaxvFy%2BZHF6Ub6s9mYNoakBRVP0BiQHZZrNJ0GH%2BNrE7ZllYVGD%2Bviov2GBusF%2BxCFY30gViH3Luc9ieiOG3Avca2xyG9XYp4vuZTyDMg22gEQrB4tJtpgQYzoDEbwD4wt9gWf5%2FWzI0yJyJL%2FDsMOKuvr4GOqUBVqfrG%2FtKYl35br8OtXTTgb2dViViYQ%2BxDs9U4wUPPlDE0ji8t3ozos5UVu3Yg9r6yWgGFGguLQYcU5GjMs6WDu0cL5ZUwZSxg%2FP1aXhzY58Op8e8JGr1fGFfvJA6NW1aL5M9n%2FiQfd%2Faka8gEJJiG4ai8zX8Hb1%2BXrk6jatq0g8L5pN6av4KoW5WqIiYfUCtKp5u8G3UW2Gr4%2BrBBcq1hQKtrIJB&X-Amz-Signature=130bf66ac66fe9b061cbc4ef631b93030dd0a22a57e9e33c303d5bc9ad21f277&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYOZAUB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBOWJLu4vFF9a69yCujgaOfLI2JpvzLy4F7%2F3AU1P4RNAiEAl7K6lyJbwRnj5ynreZ98SY%2FGYVWvzfFC%2F4qS5b7UTyYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGwi8P%2F7ENOMFBaZCrcA%2Frf75Cr8DlYPPAWcU4RyrmhMAd3HjrXmJVcpoYt2j4n2h71TiNtHegZF1fl3KxbH397k5BkXsvOtFukZPrbRcSGXCzLPn1eQy3hlpeWv5NLiPAspGDRGCFZ%2FQyeN6vMQLZ6yf%2F0f91BFV3mud%2B%2BxyXv17It3n69WLs6eTZTX6wsoQY85WyiDOaEmIzjRHkrSdZKF7u%2FNgdSayqODwwbuhmktLL88bL%2B2tBPA7C%2F%2BYpIoCPsHLMVakp6ZCJfiii7%2BYgU%2BWTHp%2FmBNLqQDmJ0e2DZBra8K8YEiYURh%2BWJsHiBJz4ikV35ThvSgAn2mF0qANVsUb6fwnWYKUU8dVWjluyLniQQRStmYO5O9qHfQ23aASwYJNauTWUP9DZkd0hAB7ozJjk8%2BylkpXQk6sy%2B%2BdavRsLlue5QlYzAMHA6E2qWcpcY4H5x%2F5fIWz7ni0G%2BxHq5K4nhy632FIs2%2BkNSr2reN%2F9RJMEIFmXZhq71qaxvFy%2BZHF6Ub6s9mYNoakBRVP0BiQHZZrNJ0GH%2BNrE7ZllYVGD%2Bviov2GBusF%2BxCFY30gViH3Luc9ieiOG3Avca2xyG9XYp4vuZTyDMg22gEQrB4tJtpgQYzoDEbwD4wt9gWf5%2FWzI0yJyJL%2FDsMOKuvr4GOqUBVqfrG%2FtKYl35br8OtXTTgb2dViViYQ%2BxDs9U4wUPPlDE0ji8t3ozos5UVu3Yg9r6yWgGFGguLQYcU5GjMs6WDu0cL5ZUwZSxg%2FP1aXhzY58Op8e8JGr1fGFfvJA6NW1aL5M9n%2FiQfd%2Faka8gEJJiG4ai8zX8Hb1%2BXrk6jatq0g8L5pN6av4KoW5WqIiYfUCtKp5u8G3UW2Gr4%2BrBBcq1hQKtrIJB&X-Amz-Signature=6402bb7658c9d89f2f33fea678d2086af6bd2944ac2d0ca432ebafc533d3cbbb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYOZAUB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBOWJLu4vFF9a69yCujgaOfLI2JpvzLy4F7%2F3AU1P4RNAiEAl7K6lyJbwRnj5ynreZ98SY%2FGYVWvzfFC%2F4qS5b7UTyYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGwi8P%2F7ENOMFBaZCrcA%2Frf75Cr8DlYPPAWcU4RyrmhMAd3HjrXmJVcpoYt2j4n2h71TiNtHegZF1fl3KxbH397k5BkXsvOtFukZPrbRcSGXCzLPn1eQy3hlpeWv5NLiPAspGDRGCFZ%2FQyeN6vMQLZ6yf%2F0f91BFV3mud%2B%2BxyXv17It3n69WLs6eTZTX6wsoQY85WyiDOaEmIzjRHkrSdZKF7u%2FNgdSayqODwwbuhmktLL88bL%2B2tBPA7C%2F%2BYpIoCPsHLMVakp6ZCJfiii7%2BYgU%2BWTHp%2FmBNLqQDmJ0e2DZBra8K8YEiYURh%2BWJsHiBJz4ikV35ThvSgAn2mF0qANVsUb6fwnWYKUU8dVWjluyLniQQRStmYO5O9qHfQ23aASwYJNauTWUP9DZkd0hAB7ozJjk8%2BylkpXQk6sy%2B%2BdavRsLlue5QlYzAMHA6E2qWcpcY4H5x%2F5fIWz7ni0G%2BxHq5K4nhy632FIs2%2BkNSr2reN%2F9RJMEIFmXZhq71qaxvFy%2BZHF6Ub6s9mYNoakBRVP0BiQHZZrNJ0GH%2BNrE7ZllYVGD%2Bviov2GBusF%2BxCFY30gViH3Luc9ieiOG3Avca2xyG9XYp4vuZTyDMg22gEQrB4tJtpgQYzoDEbwD4wt9gWf5%2FWzI0yJyJL%2FDsMOKuvr4GOqUBVqfrG%2FtKYl35br8OtXTTgb2dViViYQ%2BxDs9U4wUPPlDE0ji8t3ozos5UVu3Yg9r6yWgGFGguLQYcU5GjMs6WDu0cL5ZUwZSxg%2FP1aXhzY58Op8e8JGr1fGFfvJA6NW1aL5M9n%2FiQfd%2Faka8gEJJiG4ai8zX8Hb1%2BXrk6jatq0g8L5pN6av4KoW5WqIiYfUCtKp5u8G3UW2Gr4%2BrBBcq1hQKtrIJB&X-Amz-Signature=1f19dba9fe56d16ee14eaf0834450d5152447233ba02cdd0fefded007434a4b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYOZAUB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBOWJLu4vFF9a69yCujgaOfLI2JpvzLy4F7%2F3AU1P4RNAiEAl7K6lyJbwRnj5ynreZ98SY%2FGYVWvzfFC%2F4qS5b7UTyYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGwi8P%2F7ENOMFBaZCrcA%2Frf75Cr8DlYPPAWcU4RyrmhMAd3HjrXmJVcpoYt2j4n2h71TiNtHegZF1fl3KxbH397k5BkXsvOtFukZPrbRcSGXCzLPn1eQy3hlpeWv5NLiPAspGDRGCFZ%2FQyeN6vMQLZ6yf%2F0f91BFV3mud%2B%2BxyXv17It3n69WLs6eTZTX6wsoQY85WyiDOaEmIzjRHkrSdZKF7u%2FNgdSayqODwwbuhmktLL88bL%2B2tBPA7C%2F%2BYpIoCPsHLMVakp6ZCJfiii7%2BYgU%2BWTHp%2FmBNLqQDmJ0e2DZBra8K8YEiYURh%2BWJsHiBJz4ikV35ThvSgAn2mF0qANVsUb6fwnWYKUU8dVWjluyLniQQRStmYO5O9qHfQ23aASwYJNauTWUP9DZkd0hAB7ozJjk8%2BylkpXQk6sy%2B%2BdavRsLlue5QlYzAMHA6E2qWcpcY4H5x%2F5fIWz7ni0G%2BxHq5K4nhy632FIs2%2BkNSr2reN%2F9RJMEIFmXZhq71qaxvFy%2BZHF6Ub6s9mYNoakBRVP0BiQHZZrNJ0GH%2BNrE7ZllYVGD%2Bviov2GBusF%2BxCFY30gViH3Luc9ieiOG3Avca2xyG9XYp4vuZTyDMg22gEQrB4tJtpgQYzoDEbwD4wt9gWf5%2FWzI0yJyJL%2FDsMOKuvr4GOqUBVqfrG%2FtKYl35br8OtXTTgb2dViViYQ%2BxDs9U4wUPPlDE0ji8t3ozos5UVu3Yg9r6yWgGFGguLQYcU5GjMs6WDu0cL5ZUwZSxg%2FP1aXhzY58Op8e8JGr1fGFfvJA6NW1aL5M9n%2FiQfd%2Faka8gEJJiG4ai8zX8Hb1%2BXrk6jatq0g8L5pN6av4KoW5WqIiYfUCtKp5u8G3UW2Gr4%2BrBBcq1hQKtrIJB&X-Amz-Signature=cf340f283126f5ac05308613261078ff2f98167239c0ad06c4934008ea9094ad&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYOZAUB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBOWJLu4vFF9a69yCujgaOfLI2JpvzLy4F7%2F3AU1P4RNAiEAl7K6lyJbwRnj5ynreZ98SY%2FGYVWvzfFC%2F4qS5b7UTyYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGwi8P%2F7ENOMFBaZCrcA%2Frf75Cr8DlYPPAWcU4RyrmhMAd3HjrXmJVcpoYt2j4n2h71TiNtHegZF1fl3KxbH397k5BkXsvOtFukZPrbRcSGXCzLPn1eQy3hlpeWv5NLiPAspGDRGCFZ%2FQyeN6vMQLZ6yf%2F0f91BFV3mud%2B%2BxyXv17It3n69WLs6eTZTX6wsoQY85WyiDOaEmIzjRHkrSdZKF7u%2FNgdSayqODwwbuhmktLL88bL%2B2tBPA7C%2F%2BYpIoCPsHLMVakp6ZCJfiii7%2BYgU%2BWTHp%2FmBNLqQDmJ0e2DZBra8K8YEiYURh%2BWJsHiBJz4ikV35ThvSgAn2mF0qANVsUb6fwnWYKUU8dVWjluyLniQQRStmYO5O9qHfQ23aASwYJNauTWUP9DZkd0hAB7ozJjk8%2BylkpXQk6sy%2B%2BdavRsLlue5QlYzAMHA6E2qWcpcY4H5x%2F5fIWz7ni0G%2BxHq5K4nhy632FIs2%2BkNSr2reN%2F9RJMEIFmXZhq71qaxvFy%2BZHF6Ub6s9mYNoakBRVP0BiQHZZrNJ0GH%2BNrE7ZllYVGD%2Bviov2GBusF%2BxCFY30gViH3Luc9ieiOG3Avca2xyG9XYp4vuZTyDMg22gEQrB4tJtpgQYzoDEbwD4wt9gWf5%2FWzI0yJyJL%2FDsMOKuvr4GOqUBVqfrG%2FtKYl35br8OtXTTgb2dViViYQ%2BxDs9U4wUPPlDE0ji8t3ozos5UVu3Yg9r6yWgGFGguLQYcU5GjMs6WDu0cL5ZUwZSxg%2FP1aXhzY58Op8e8JGr1fGFfvJA6NW1aL5M9n%2FiQfd%2Faka8gEJJiG4ai8zX8Hb1%2BXrk6jatq0g8L5pN6av4KoW5WqIiYfUCtKp5u8G3UW2Gr4%2BrBBcq1hQKtrIJB&X-Amz-Signature=2eed86aaf0527f1312487562886d713195548f6e551289db2c8498fb2d6bad11&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYOZAUB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBOWJLu4vFF9a69yCujgaOfLI2JpvzLy4F7%2F3AU1P4RNAiEAl7K6lyJbwRnj5ynreZ98SY%2FGYVWvzfFC%2F4qS5b7UTyYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGwi8P%2F7ENOMFBaZCrcA%2Frf75Cr8DlYPPAWcU4RyrmhMAd3HjrXmJVcpoYt2j4n2h71TiNtHegZF1fl3KxbH397k5BkXsvOtFukZPrbRcSGXCzLPn1eQy3hlpeWv5NLiPAspGDRGCFZ%2FQyeN6vMQLZ6yf%2F0f91BFV3mud%2B%2BxyXv17It3n69WLs6eTZTX6wsoQY85WyiDOaEmIzjRHkrSdZKF7u%2FNgdSayqODwwbuhmktLL88bL%2B2tBPA7C%2F%2BYpIoCPsHLMVakp6ZCJfiii7%2BYgU%2BWTHp%2FmBNLqQDmJ0e2DZBra8K8YEiYURh%2BWJsHiBJz4ikV35ThvSgAn2mF0qANVsUb6fwnWYKUU8dVWjluyLniQQRStmYO5O9qHfQ23aASwYJNauTWUP9DZkd0hAB7ozJjk8%2BylkpXQk6sy%2B%2BdavRsLlue5QlYzAMHA6E2qWcpcY4H5x%2F5fIWz7ni0G%2BxHq5K4nhy632FIs2%2BkNSr2reN%2F9RJMEIFmXZhq71qaxvFy%2BZHF6Ub6s9mYNoakBRVP0BiQHZZrNJ0GH%2BNrE7ZllYVGD%2Bviov2GBusF%2BxCFY30gViH3Luc9ieiOG3Avca2xyG9XYp4vuZTyDMg22gEQrB4tJtpgQYzoDEbwD4wt9gWf5%2FWzI0yJyJL%2FDsMOKuvr4GOqUBVqfrG%2FtKYl35br8OtXTTgb2dViViYQ%2BxDs9U4wUPPlDE0ji8t3ozos5UVu3Yg9r6yWgGFGguLQYcU5GjMs6WDu0cL5ZUwZSxg%2FP1aXhzY58Op8e8JGr1fGFfvJA6NW1aL5M9n%2FiQfd%2Faka8gEJJiG4ai8zX8Hb1%2BXrk6jatq0g8L5pN6av4KoW5WqIiYfUCtKp5u8G3UW2Gr4%2BrBBcq1hQKtrIJB&X-Amz-Signature=f415c3563008d0807120f763e3efcd9e464caf4c0052b76e1da4a5fc38707847&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

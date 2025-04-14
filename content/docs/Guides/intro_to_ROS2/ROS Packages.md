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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAXJ4MT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGocBGqFNOhDienWM5o0yt%2FJEPeB0ZkOAYf2QBFT7YuwAiEAiOwzma47OJIVC9OmN8A4a%2BRqubyQlvIkOKfN6yDfQdQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDA1cVaeWzxSfJZCxESrcA7T95nel88fxQDGgN1H6zwWfmyDHaojZ%2B08YUFKQT%2FQmpdhl23dDFg9lUDJx8%2Ft1MXRoR8FuWCokoLK7hMnYpteCzU2qTweKFTm7TM01FVKa%2B9ulWEco5n88kgpUvFtphQU1DdzD%2Bwj6JFQXzYFmzZEqSE8yYUY1wRnhLis9RFr03%2BlJsO9GKPk4gM5gm8N7WFqfWVIxFSDUd7XOf2ahYs7liVJH1wR%2BT2nwVWprONZpEzB5mCZo8%2F%2FA4xCvBbiofyEHRhGirt%2F8GIRIkLGiJmGC3Yqkm82TwVbxLWuyVEDCTKb8AK0GbjJqJawrRr71aP4RVfQHWT7TD%2Bh24Eb1l2pwSO3sYrQJbkp%2B2Gniu8gaSb8uDvUvmFnDtxPonUA456Ekw3euY3Ms0wVUk8C76GIrm5q45onc1Pka6AKE64zLlxRFbBClV9TXArKvCI0iRo8wS2FxDpJf5NQhiG4rog5XiQksRPciwgV8t17hWuz1ro8ahGE%2BBm7UypuHpAS%2Bxtcn9I%2BK6QNQ%2FO8IDt3wqTvolV3iS34nQi9K7x9etAotX%2F3ApmiRkJkWVG%2FRf7gVf0iaA8CmhiFirL22%2BAa1OMM2mOKhpcOc3OQ%2FHjmiUK1SZaoHrWQEOZpLcBc2MIr69L8GOqUB56tG3NBFbjWWEHHJKMt8gDd1qmUH%2F15OGaLA0YPwNtiMDLUk7B5SnNlYMeqB1hLR3acFZk9p%2BCpKBfRBtpoeTudm807T9vZpoNPmNO3VlBIZcTK3cx7b815UWODOgfPcWRcBdKs5TmyRCMCHe7nGB2Ly8DA9IHuxJw937%2Fbr1Kuaocg1cnGxqXFZ3jK%2BPMfHPvda06F4Nyp3%2Beojp6uzW2UaORL%2F&X-Amz-Signature=75edf53749945c66af3e4f2ba2bc870fb4f87988c144b046f25a4f5df6c5b8b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAXJ4MT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGocBGqFNOhDienWM5o0yt%2FJEPeB0ZkOAYf2QBFT7YuwAiEAiOwzma47OJIVC9OmN8A4a%2BRqubyQlvIkOKfN6yDfQdQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDA1cVaeWzxSfJZCxESrcA7T95nel88fxQDGgN1H6zwWfmyDHaojZ%2B08YUFKQT%2FQmpdhl23dDFg9lUDJx8%2Ft1MXRoR8FuWCokoLK7hMnYpteCzU2qTweKFTm7TM01FVKa%2B9ulWEco5n88kgpUvFtphQU1DdzD%2Bwj6JFQXzYFmzZEqSE8yYUY1wRnhLis9RFr03%2BlJsO9GKPk4gM5gm8N7WFqfWVIxFSDUd7XOf2ahYs7liVJH1wR%2BT2nwVWprONZpEzB5mCZo8%2F%2FA4xCvBbiofyEHRhGirt%2F8GIRIkLGiJmGC3Yqkm82TwVbxLWuyVEDCTKb8AK0GbjJqJawrRr71aP4RVfQHWT7TD%2Bh24Eb1l2pwSO3sYrQJbkp%2B2Gniu8gaSb8uDvUvmFnDtxPonUA456Ekw3euY3Ms0wVUk8C76GIrm5q45onc1Pka6AKE64zLlxRFbBClV9TXArKvCI0iRo8wS2FxDpJf5NQhiG4rog5XiQksRPciwgV8t17hWuz1ro8ahGE%2BBm7UypuHpAS%2Bxtcn9I%2BK6QNQ%2FO8IDt3wqTvolV3iS34nQi9K7x9etAotX%2F3ApmiRkJkWVG%2FRf7gVf0iaA8CmhiFirL22%2BAa1OMM2mOKhpcOc3OQ%2FHjmiUK1SZaoHrWQEOZpLcBc2MIr69L8GOqUB56tG3NBFbjWWEHHJKMt8gDd1qmUH%2F15OGaLA0YPwNtiMDLUk7B5SnNlYMeqB1hLR3acFZk9p%2BCpKBfRBtpoeTudm807T9vZpoNPmNO3VlBIZcTK3cx7b815UWODOgfPcWRcBdKs5TmyRCMCHe7nGB2Ly8DA9IHuxJw937%2Fbr1Kuaocg1cnGxqXFZ3jK%2BPMfHPvda06F4Nyp3%2Beojp6uzW2UaORL%2F&X-Amz-Signature=177377dbdc959be5ff16723dcee0cdebbd3c8014196b67b9d9e6605befc33eda&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAXJ4MT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGocBGqFNOhDienWM5o0yt%2FJEPeB0ZkOAYf2QBFT7YuwAiEAiOwzma47OJIVC9OmN8A4a%2BRqubyQlvIkOKfN6yDfQdQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDA1cVaeWzxSfJZCxESrcA7T95nel88fxQDGgN1H6zwWfmyDHaojZ%2B08YUFKQT%2FQmpdhl23dDFg9lUDJx8%2Ft1MXRoR8FuWCokoLK7hMnYpteCzU2qTweKFTm7TM01FVKa%2B9ulWEco5n88kgpUvFtphQU1DdzD%2Bwj6JFQXzYFmzZEqSE8yYUY1wRnhLis9RFr03%2BlJsO9GKPk4gM5gm8N7WFqfWVIxFSDUd7XOf2ahYs7liVJH1wR%2BT2nwVWprONZpEzB5mCZo8%2F%2FA4xCvBbiofyEHRhGirt%2F8GIRIkLGiJmGC3Yqkm82TwVbxLWuyVEDCTKb8AK0GbjJqJawrRr71aP4RVfQHWT7TD%2Bh24Eb1l2pwSO3sYrQJbkp%2B2Gniu8gaSb8uDvUvmFnDtxPonUA456Ekw3euY3Ms0wVUk8C76GIrm5q45onc1Pka6AKE64zLlxRFbBClV9TXArKvCI0iRo8wS2FxDpJf5NQhiG4rog5XiQksRPciwgV8t17hWuz1ro8ahGE%2BBm7UypuHpAS%2Bxtcn9I%2BK6QNQ%2FO8IDt3wqTvolV3iS34nQi9K7x9etAotX%2F3ApmiRkJkWVG%2FRf7gVf0iaA8CmhiFirL22%2BAa1OMM2mOKhpcOc3OQ%2FHjmiUK1SZaoHrWQEOZpLcBc2MIr69L8GOqUB56tG3NBFbjWWEHHJKMt8gDd1qmUH%2F15OGaLA0YPwNtiMDLUk7B5SnNlYMeqB1hLR3acFZk9p%2BCpKBfRBtpoeTudm807T9vZpoNPmNO3VlBIZcTK3cx7b815UWODOgfPcWRcBdKs5TmyRCMCHe7nGB2Ly8DA9IHuxJw937%2Fbr1Kuaocg1cnGxqXFZ3jK%2BPMfHPvda06F4Nyp3%2Beojp6uzW2UaORL%2F&X-Amz-Signature=85b0256719c174d72a737096cbd99f6feb10a6fc050235a34b93aecab067174d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAXJ4MT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGocBGqFNOhDienWM5o0yt%2FJEPeB0ZkOAYf2QBFT7YuwAiEAiOwzma47OJIVC9OmN8A4a%2BRqubyQlvIkOKfN6yDfQdQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDA1cVaeWzxSfJZCxESrcA7T95nel88fxQDGgN1H6zwWfmyDHaojZ%2B08YUFKQT%2FQmpdhl23dDFg9lUDJx8%2Ft1MXRoR8FuWCokoLK7hMnYpteCzU2qTweKFTm7TM01FVKa%2B9ulWEco5n88kgpUvFtphQU1DdzD%2Bwj6JFQXzYFmzZEqSE8yYUY1wRnhLis9RFr03%2BlJsO9GKPk4gM5gm8N7WFqfWVIxFSDUd7XOf2ahYs7liVJH1wR%2BT2nwVWprONZpEzB5mCZo8%2F%2FA4xCvBbiofyEHRhGirt%2F8GIRIkLGiJmGC3Yqkm82TwVbxLWuyVEDCTKb8AK0GbjJqJawrRr71aP4RVfQHWT7TD%2Bh24Eb1l2pwSO3sYrQJbkp%2B2Gniu8gaSb8uDvUvmFnDtxPonUA456Ekw3euY3Ms0wVUk8C76GIrm5q45onc1Pka6AKE64zLlxRFbBClV9TXArKvCI0iRo8wS2FxDpJf5NQhiG4rog5XiQksRPciwgV8t17hWuz1ro8ahGE%2BBm7UypuHpAS%2Bxtcn9I%2BK6QNQ%2FO8IDt3wqTvolV3iS34nQi9K7x9etAotX%2F3ApmiRkJkWVG%2FRf7gVf0iaA8CmhiFirL22%2BAa1OMM2mOKhpcOc3OQ%2FHjmiUK1SZaoHrWQEOZpLcBc2MIr69L8GOqUB56tG3NBFbjWWEHHJKMt8gDd1qmUH%2F15OGaLA0YPwNtiMDLUk7B5SnNlYMeqB1hLR3acFZk9p%2BCpKBfRBtpoeTudm807T9vZpoNPmNO3VlBIZcTK3cx7b815UWODOgfPcWRcBdKs5TmyRCMCHe7nGB2Ly8DA9IHuxJw937%2Fbr1Kuaocg1cnGxqXFZ3jK%2BPMfHPvda06F4Nyp3%2Beojp6uzW2UaORL%2F&X-Amz-Signature=59229db5bf78948615c8cab37c8ea37533e8cfb0121e4a37332d65fbb91d898e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAXJ4MT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGocBGqFNOhDienWM5o0yt%2FJEPeB0ZkOAYf2QBFT7YuwAiEAiOwzma47OJIVC9OmN8A4a%2BRqubyQlvIkOKfN6yDfQdQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDA1cVaeWzxSfJZCxESrcA7T95nel88fxQDGgN1H6zwWfmyDHaojZ%2B08YUFKQT%2FQmpdhl23dDFg9lUDJx8%2Ft1MXRoR8FuWCokoLK7hMnYpteCzU2qTweKFTm7TM01FVKa%2B9ulWEco5n88kgpUvFtphQU1DdzD%2Bwj6JFQXzYFmzZEqSE8yYUY1wRnhLis9RFr03%2BlJsO9GKPk4gM5gm8N7WFqfWVIxFSDUd7XOf2ahYs7liVJH1wR%2BT2nwVWprONZpEzB5mCZo8%2F%2FA4xCvBbiofyEHRhGirt%2F8GIRIkLGiJmGC3Yqkm82TwVbxLWuyVEDCTKb8AK0GbjJqJawrRr71aP4RVfQHWT7TD%2Bh24Eb1l2pwSO3sYrQJbkp%2B2Gniu8gaSb8uDvUvmFnDtxPonUA456Ekw3euY3Ms0wVUk8C76GIrm5q45onc1Pka6AKE64zLlxRFbBClV9TXArKvCI0iRo8wS2FxDpJf5NQhiG4rog5XiQksRPciwgV8t17hWuz1ro8ahGE%2BBm7UypuHpAS%2Bxtcn9I%2BK6QNQ%2FO8IDt3wqTvolV3iS34nQi9K7x9etAotX%2F3ApmiRkJkWVG%2FRf7gVf0iaA8CmhiFirL22%2BAa1OMM2mOKhpcOc3OQ%2FHjmiUK1SZaoHrWQEOZpLcBc2MIr69L8GOqUB56tG3NBFbjWWEHHJKMt8gDd1qmUH%2F15OGaLA0YPwNtiMDLUk7B5SnNlYMeqB1hLR3acFZk9p%2BCpKBfRBtpoeTudm807T9vZpoNPmNO3VlBIZcTK3cx7b815UWODOgfPcWRcBdKs5TmyRCMCHe7nGB2Ly8DA9IHuxJw937%2Fbr1Kuaocg1cnGxqXFZ3jK%2BPMfHPvda06F4Nyp3%2Beojp6uzW2UaORL%2F&X-Amz-Signature=23ee6b70a6991239cb5c99153e242dbc7332963ea9a097016a17fb44eb2835cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAXJ4MT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGocBGqFNOhDienWM5o0yt%2FJEPeB0ZkOAYf2QBFT7YuwAiEAiOwzma47OJIVC9OmN8A4a%2BRqubyQlvIkOKfN6yDfQdQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDA1cVaeWzxSfJZCxESrcA7T95nel88fxQDGgN1H6zwWfmyDHaojZ%2B08YUFKQT%2FQmpdhl23dDFg9lUDJx8%2Ft1MXRoR8FuWCokoLK7hMnYpteCzU2qTweKFTm7TM01FVKa%2B9ulWEco5n88kgpUvFtphQU1DdzD%2Bwj6JFQXzYFmzZEqSE8yYUY1wRnhLis9RFr03%2BlJsO9GKPk4gM5gm8N7WFqfWVIxFSDUd7XOf2ahYs7liVJH1wR%2BT2nwVWprONZpEzB5mCZo8%2F%2FA4xCvBbiofyEHRhGirt%2F8GIRIkLGiJmGC3Yqkm82TwVbxLWuyVEDCTKb8AK0GbjJqJawrRr71aP4RVfQHWT7TD%2Bh24Eb1l2pwSO3sYrQJbkp%2B2Gniu8gaSb8uDvUvmFnDtxPonUA456Ekw3euY3Ms0wVUk8C76GIrm5q45onc1Pka6AKE64zLlxRFbBClV9TXArKvCI0iRo8wS2FxDpJf5NQhiG4rog5XiQksRPciwgV8t17hWuz1ro8ahGE%2BBm7UypuHpAS%2Bxtcn9I%2BK6QNQ%2FO8IDt3wqTvolV3iS34nQi9K7x9etAotX%2F3ApmiRkJkWVG%2FRf7gVf0iaA8CmhiFirL22%2BAa1OMM2mOKhpcOc3OQ%2FHjmiUK1SZaoHrWQEOZpLcBc2MIr69L8GOqUB56tG3NBFbjWWEHHJKMt8gDd1qmUH%2F15OGaLA0YPwNtiMDLUk7B5SnNlYMeqB1hLR3acFZk9p%2BCpKBfRBtpoeTudm807T9vZpoNPmNO3VlBIZcTK3cx7b815UWODOgfPcWRcBdKs5TmyRCMCHe7nGB2Ly8DA9IHuxJw937%2Fbr1Kuaocg1cnGxqXFZ3jK%2BPMfHPvda06F4Nyp3%2Beojp6uzW2UaORL%2F&X-Amz-Signature=271b2e134b6ba93c21af86e3ff189a364f6216d40500d9f03463ba253d8a593d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAXJ4MT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGocBGqFNOhDienWM5o0yt%2FJEPeB0ZkOAYf2QBFT7YuwAiEAiOwzma47OJIVC9OmN8A4a%2BRqubyQlvIkOKfN6yDfQdQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDA1cVaeWzxSfJZCxESrcA7T95nel88fxQDGgN1H6zwWfmyDHaojZ%2B08YUFKQT%2FQmpdhl23dDFg9lUDJx8%2Ft1MXRoR8FuWCokoLK7hMnYpteCzU2qTweKFTm7TM01FVKa%2B9ulWEco5n88kgpUvFtphQU1DdzD%2Bwj6JFQXzYFmzZEqSE8yYUY1wRnhLis9RFr03%2BlJsO9GKPk4gM5gm8N7WFqfWVIxFSDUd7XOf2ahYs7liVJH1wR%2BT2nwVWprONZpEzB5mCZo8%2F%2FA4xCvBbiofyEHRhGirt%2F8GIRIkLGiJmGC3Yqkm82TwVbxLWuyVEDCTKb8AK0GbjJqJawrRr71aP4RVfQHWT7TD%2Bh24Eb1l2pwSO3sYrQJbkp%2B2Gniu8gaSb8uDvUvmFnDtxPonUA456Ekw3euY3Ms0wVUk8C76GIrm5q45onc1Pka6AKE64zLlxRFbBClV9TXArKvCI0iRo8wS2FxDpJf5NQhiG4rog5XiQksRPciwgV8t17hWuz1ro8ahGE%2BBm7UypuHpAS%2Bxtcn9I%2BK6QNQ%2FO8IDt3wqTvolV3iS34nQi9K7x9etAotX%2F3ApmiRkJkWVG%2FRf7gVf0iaA8CmhiFirL22%2BAa1OMM2mOKhpcOc3OQ%2FHjmiUK1SZaoHrWQEOZpLcBc2MIr69L8GOqUB56tG3NBFbjWWEHHJKMt8gDd1qmUH%2F15OGaLA0YPwNtiMDLUk7B5SnNlYMeqB1hLR3acFZk9p%2BCpKBfRBtpoeTudm807T9vZpoNPmNO3VlBIZcTK3cx7b815UWODOgfPcWRcBdKs5TmyRCMCHe7nGB2Ly8DA9IHuxJw937%2Fbr1Kuaocg1cnGxqXFZ3jK%2BPMfHPvda06F4Nyp3%2Beojp6uzW2UaORL%2F&X-Amz-Signature=fee95d5c0aa7a9dcebe5dc979c93e3f3bee9efa6637b999e2e930b1ba2f4e9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

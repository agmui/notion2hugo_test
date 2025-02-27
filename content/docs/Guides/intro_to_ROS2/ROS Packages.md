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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNUQVPQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDtV%2BuYvOmfVoR8BwaREWdl274Nw5litpXkEymxyrGLWAIgGOuF%2B%2FN%2Fx0hhkoPoKvDt944C9fPaG3iKMw9nJOtuFQoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDC1LIeul4CbYykrSOSrcA553lvpMfoaZQEoMQVjgosS%2FkzVyeW0ia0AeiT6LRKGeOHcGhrz%2Fr5PKjhnvCYg4DE%2FS1%2BPZZ988gq7FQOarybjvCK%2BRot5Zd3fHaUE2eaMBPk6PaqDliEL%2BgPvN8YCYEH%2BPpiGarjDeLEckOKTogTRgtbUxld87E1PvlXXNk%2B2A4c0dkigJyIiZjiCxr6TC%2BJEzOgAdLPf03byTHcYLc%2FxzX1MpZ9VKcCGvTU5mnMR8%2BxpHDp6ywlOPm6lMnqCuAnNgULp2hil3qK%2BPSZOpgwKkpTpyBE%2Bges2Im0%2BHkXJ4yX65yeMhgsTKUknqqi5U0iJsJlPsbBoBJ%2FgVHC0%2FU03Q8inQQ7YM9smvX1yeJ%2B70d56rvGRevH7xjXt4Pl7jLL1brhVYCWrso0FBRSWsXT16midvWF8YOqAPYkRW1v8bS8X%2FFcIFIebdg%2FYJAjjEi4KiYQ%2FPvvlSTlhu6hyqRTcHu235%2FTfKhxx6FaPKtqPCAYNmad1%2F9j4o5ea3XTpYc0%2BtS54Sv%2BXp4sbtJyTEmhzaBuCdKKNoHErGdlHpEo6I6SrGX3pKCTgweA6tK5NpfZiP3nby%2BKykCU0Ex6gp9MAyo6BMGsMzdM%2BSybjROREhV0PVh9RpnnBuMRyfMI%2FNgb4GOqUB4%2Fy%2FXqoM4XA%2Bb2quzJUJEaaC8z5sGlg%2BJQQzml1262YJGTghkFr3G7s46rRY2X3LR%2F9MH98%2BQo%2ByFM1I24NYvuOcJ%2FM%2BdRkKHdTtYOoKnpRzcV1JuSTlvRTUV5IQd8%2BT%2Bp0aVRFLij%2Fad0or7IdB5Ut8JivqEOr7BdDvOTErheA3HCI3cam2wdbjsc7%2FHO3gBrcBTJQVdeoZ4G%2BqXWVc54RbF%2Bx8&X-Amz-Signature=effca43460d4f42f39d787418c89364353296f069d7a1b0305d06d80335a9cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNUQVPQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDtV%2BuYvOmfVoR8BwaREWdl274Nw5litpXkEymxyrGLWAIgGOuF%2B%2FN%2Fx0hhkoPoKvDt944C9fPaG3iKMw9nJOtuFQoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDC1LIeul4CbYykrSOSrcA553lvpMfoaZQEoMQVjgosS%2FkzVyeW0ia0AeiT6LRKGeOHcGhrz%2Fr5PKjhnvCYg4DE%2FS1%2BPZZ988gq7FQOarybjvCK%2BRot5Zd3fHaUE2eaMBPk6PaqDliEL%2BgPvN8YCYEH%2BPpiGarjDeLEckOKTogTRgtbUxld87E1PvlXXNk%2B2A4c0dkigJyIiZjiCxr6TC%2BJEzOgAdLPf03byTHcYLc%2FxzX1MpZ9VKcCGvTU5mnMR8%2BxpHDp6ywlOPm6lMnqCuAnNgULp2hil3qK%2BPSZOpgwKkpTpyBE%2Bges2Im0%2BHkXJ4yX65yeMhgsTKUknqqi5U0iJsJlPsbBoBJ%2FgVHC0%2FU03Q8inQQ7YM9smvX1yeJ%2B70d56rvGRevH7xjXt4Pl7jLL1brhVYCWrso0FBRSWsXT16midvWF8YOqAPYkRW1v8bS8X%2FFcIFIebdg%2FYJAjjEi4KiYQ%2FPvvlSTlhu6hyqRTcHu235%2FTfKhxx6FaPKtqPCAYNmad1%2F9j4o5ea3XTpYc0%2BtS54Sv%2BXp4sbtJyTEmhzaBuCdKKNoHErGdlHpEo6I6SrGX3pKCTgweA6tK5NpfZiP3nby%2BKykCU0Ex6gp9MAyo6BMGsMzdM%2BSybjROREhV0PVh9RpnnBuMRyfMI%2FNgb4GOqUB4%2Fy%2FXqoM4XA%2Bb2quzJUJEaaC8z5sGlg%2BJQQzml1262YJGTghkFr3G7s46rRY2X3LR%2F9MH98%2BQo%2ByFM1I24NYvuOcJ%2FM%2BdRkKHdTtYOoKnpRzcV1JuSTlvRTUV5IQd8%2BT%2Bp0aVRFLij%2Fad0or7IdB5Ut8JivqEOr7BdDvOTErheA3HCI3cam2wdbjsc7%2FHO3gBrcBTJQVdeoZ4G%2BqXWVc54RbF%2Bx8&X-Amz-Signature=29543e3eb9a2c8ef4598a6f4b50c142ec23d2b59cb48a8f0baa40a7440ed5a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNUQVPQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDtV%2BuYvOmfVoR8BwaREWdl274Nw5litpXkEymxyrGLWAIgGOuF%2B%2FN%2Fx0hhkoPoKvDt944C9fPaG3iKMw9nJOtuFQoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDC1LIeul4CbYykrSOSrcA553lvpMfoaZQEoMQVjgosS%2FkzVyeW0ia0AeiT6LRKGeOHcGhrz%2Fr5PKjhnvCYg4DE%2FS1%2BPZZ988gq7FQOarybjvCK%2BRot5Zd3fHaUE2eaMBPk6PaqDliEL%2BgPvN8YCYEH%2BPpiGarjDeLEckOKTogTRgtbUxld87E1PvlXXNk%2B2A4c0dkigJyIiZjiCxr6TC%2BJEzOgAdLPf03byTHcYLc%2FxzX1MpZ9VKcCGvTU5mnMR8%2BxpHDp6ywlOPm6lMnqCuAnNgULp2hil3qK%2BPSZOpgwKkpTpyBE%2Bges2Im0%2BHkXJ4yX65yeMhgsTKUknqqi5U0iJsJlPsbBoBJ%2FgVHC0%2FU03Q8inQQ7YM9smvX1yeJ%2B70d56rvGRevH7xjXt4Pl7jLL1brhVYCWrso0FBRSWsXT16midvWF8YOqAPYkRW1v8bS8X%2FFcIFIebdg%2FYJAjjEi4KiYQ%2FPvvlSTlhu6hyqRTcHu235%2FTfKhxx6FaPKtqPCAYNmad1%2F9j4o5ea3XTpYc0%2BtS54Sv%2BXp4sbtJyTEmhzaBuCdKKNoHErGdlHpEo6I6SrGX3pKCTgweA6tK5NpfZiP3nby%2BKykCU0Ex6gp9MAyo6BMGsMzdM%2BSybjROREhV0PVh9RpnnBuMRyfMI%2FNgb4GOqUB4%2Fy%2FXqoM4XA%2Bb2quzJUJEaaC8z5sGlg%2BJQQzml1262YJGTghkFr3G7s46rRY2X3LR%2F9MH98%2BQo%2ByFM1I24NYvuOcJ%2FM%2BdRkKHdTtYOoKnpRzcV1JuSTlvRTUV5IQd8%2BT%2Bp0aVRFLij%2Fad0or7IdB5Ut8JivqEOr7BdDvOTErheA3HCI3cam2wdbjsc7%2FHO3gBrcBTJQVdeoZ4G%2BqXWVc54RbF%2Bx8&X-Amz-Signature=be4586f7651647cf336a422167aa8af9a2dd86aea2b1f86175a2603ba2dffa35&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNUQVPQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDtV%2BuYvOmfVoR8BwaREWdl274Nw5litpXkEymxyrGLWAIgGOuF%2B%2FN%2Fx0hhkoPoKvDt944C9fPaG3iKMw9nJOtuFQoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDC1LIeul4CbYykrSOSrcA553lvpMfoaZQEoMQVjgosS%2FkzVyeW0ia0AeiT6LRKGeOHcGhrz%2Fr5PKjhnvCYg4DE%2FS1%2BPZZ988gq7FQOarybjvCK%2BRot5Zd3fHaUE2eaMBPk6PaqDliEL%2BgPvN8YCYEH%2BPpiGarjDeLEckOKTogTRgtbUxld87E1PvlXXNk%2B2A4c0dkigJyIiZjiCxr6TC%2BJEzOgAdLPf03byTHcYLc%2FxzX1MpZ9VKcCGvTU5mnMR8%2BxpHDp6ywlOPm6lMnqCuAnNgULp2hil3qK%2BPSZOpgwKkpTpyBE%2Bges2Im0%2BHkXJ4yX65yeMhgsTKUknqqi5U0iJsJlPsbBoBJ%2FgVHC0%2FU03Q8inQQ7YM9smvX1yeJ%2B70d56rvGRevH7xjXt4Pl7jLL1brhVYCWrso0FBRSWsXT16midvWF8YOqAPYkRW1v8bS8X%2FFcIFIebdg%2FYJAjjEi4KiYQ%2FPvvlSTlhu6hyqRTcHu235%2FTfKhxx6FaPKtqPCAYNmad1%2F9j4o5ea3XTpYc0%2BtS54Sv%2BXp4sbtJyTEmhzaBuCdKKNoHErGdlHpEo6I6SrGX3pKCTgweA6tK5NpfZiP3nby%2BKykCU0Ex6gp9MAyo6BMGsMzdM%2BSybjROREhV0PVh9RpnnBuMRyfMI%2FNgb4GOqUB4%2Fy%2FXqoM4XA%2Bb2quzJUJEaaC8z5sGlg%2BJQQzml1262YJGTghkFr3G7s46rRY2X3LR%2F9MH98%2BQo%2ByFM1I24NYvuOcJ%2FM%2BdRkKHdTtYOoKnpRzcV1JuSTlvRTUV5IQd8%2BT%2Bp0aVRFLij%2Fad0or7IdB5Ut8JivqEOr7BdDvOTErheA3HCI3cam2wdbjsc7%2FHO3gBrcBTJQVdeoZ4G%2BqXWVc54RbF%2Bx8&X-Amz-Signature=3efcd8031270d919e73a638a13bedae6dc984ec5b83ade18e469bf02b0fb2d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNUQVPQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDtV%2BuYvOmfVoR8BwaREWdl274Nw5litpXkEymxyrGLWAIgGOuF%2B%2FN%2Fx0hhkoPoKvDt944C9fPaG3iKMw9nJOtuFQoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDC1LIeul4CbYykrSOSrcA553lvpMfoaZQEoMQVjgosS%2FkzVyeW0ia0AeiT6LRKGeOHcGhrz%2Fr5PKjhnvCYg4DE%2FS1%2BPZZ988gq7FQOarybjvCK%2BRot5Zd3fHaUE2eaMBPk6PaqDliEL%2BgPvN8YCYEH%2BPpiGarjDeLEckOKTogTRgtbUxld87E1PvlXXNk%2B2A4c0dkigJyIiZjiCxr6TC%2BJEzOgAdLPf03byTHcYLc%2FxzX1MpZ9VKcCGvTU5mnMR8%2BxpHDp6ywlOPm6lMnqCuAnNgULp2hil3qK%2BPSZOpgwKkpTpyBE%2Bges2Im0%2BHkXJ4yX65yeMhgsTKUknqqi5U0iJsJlPsbBoBJ%2FgVHC0%2FU03Q8inQQ7YM9smvX1yeJ%2B70d56rvGRevH7xjXt4Pl7jLL1brhVYCWrso0FBRSWsXT16midvWF8YOqAPYkRW1v8bS8X%2FFcIFIebdg%2FYJAjjEi4KiYQ%2FPvvlSTlhu6hyqRTcHu235%2FTfKhxx6FaPKtqPCAYNmad1%2F9j4o5ea3XTpYc0%2BtS54Sv%2BXp4sbtJyTEmhzaBuCdKKNoHErGdlHpEo6I6SrGX3pKCTgweA6tK5NpfZiP3nby%2BKykCU0Ex6gp9MAyo6BMGsMzdM%2BSybjROREhV0PVh9RpnnBuMRyfMI%2FNgb4GOqUB4%2Fy%2FXqoM4XA%2Bb2quzJUJEaaC8z5sGlg%2BJQQzml1262YJGTghkFr3G7s46rRY2X3LR%2F9MH98%2BQo%2ByFM1I24NYvuOcJ%2FM%2BdRkKHdTtYOoKnpRzcV1JuSTlvRTUV5IQd8%2BT%2Bp0aVRFLij%2Fad0or7IdB5Ut8JivqEOr7BdDvOTErheA3HCI3cam2wdbjsc7%2FHO3gBrcBTJQVdeoZ4G%2BqXWVc54RbF%2Bx8&X-Amz-Signature=7abde3495197729a4e2a44c9215ce43d5ab1226c533f5072435c2b85400a10d2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNUQVPQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDtV%2BuYvOmfVoR8BwaREWdl274Nw5litpXkEymxyrGLWAIgGOuF%2B%2FN%2Fx0hhkoPoKvDt944C9fPaG3iKMw9nJOtuFQoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDC1LIeul4CbYykrSOSrcA553lvpMfoaZQEoMQVjgosS%2FkzVyeW0ia0AeiT6LRKGeOHcGhrz%2Fr5PKjhnvCYg4DE%2FS1%2BPZZ988gq7FQOarybjvCK%2BRot5Zd3fHaUE2eaMBPk6PaqDliEL%2BgPvN8YCYEH%2BPpiGarjDeLEckOKTogTRgtbUxld87E1PvlXXNk%2B2A4c0dkigJyIiZjiCxr6TC%2BJEzOgAdLPf03byTHcYLc%2FxzX1MpZ9VKcCGvTU5mnMR8%2BxpHDp6ywlOPm6lMnqCuAnNgULp2hil3qK%2BPSZOpgwKkpTpyBE%2Bges2Im0%2BHkXJ4yX65yeMhgsTKUknqqi5U0iJsJlPsbBoBJ%2FgVHC0%2FU03Q8inQQ7YM9smvX1yeJ%2B70d56rvGRevH7xjXt4Pl7jLL1brhVYCWrso0FBRSWsXT16midvWF8YOqAPYkRW1v8bS8X%2FFcIFIebdg%2FYJAjjEi4KiYQ%2FPvvlSTlhu6hyqRTcHu235%2FTfKhxx6FaPKtqPCAYNmad1%2F9j4o5ea3XTpYc0%2BtS54Sv%2BXp4sbtJyTEmhzaBuCdKKNoHErGdlHpEo6I6SrGX3pKCTgweA6tK5NpfZiP3nby%2BKykCU0Ex6gp9MAyo6BMGsMzdM%2BSybjROREhV0PVh9RpnnBuMRyfMI%2FNgb4GOqUB4%2Fy%2FXqoM4XA%2Bb2quzJUJEaaC8z5sGlg%2BJQQzml1262YJGTghkFr3G7s46rRY2X3LR%2F9MH98%2BQo%2ByFM1I24NYvuOcJ%2FM%2BdRkKHdTtYOoKnpRzcV1JuSTlvRTUV5IQd8%2BT%2Bp0aVRFLij%2Fad0or7IdB5Ut8JivqEOr7BdDvOTErheA3HCI3cam2wdbjsc7%2FHO3gBrcBTJQVdeoZ4G%2BqXWVc54RbF%2Bx8&X-Amz-Signature=dc48c00b98381829389b6a2b22b8d07807274d29fff02ba7f3a07163dad16c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNUQVPQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDtV%2BuYvOmfVoR8BwaREWdl274Nw5litpXkEymxyrGLWAIgGOuF%2B%2FN%2Fx0hhkoPoKvDt944C9fPaG3iKMw9nJOtuFQoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDC1LIeul4CbYykrSOSrcA553lvpMfoaZQEoMQVjgosS%2FkzVyeW0ia0AeiT6LRKGeOHcGhrz%2Fr5PKjhnvCYg4DE%2FS1%2BPZZ988gq7FQOarybjvCK%2BRot5Zd3fHaUE2eaMBPk6PaqDliEL%2BgPvN8YCYEH%2BPpiGarjDeLEckOKTogTRgtbUxld87E1PvlXXNk%2B2A4c0dkigJyIiZjiCxr6TC%2BJEzOgAdLPf03byTHcYLc%2FxzX1MpZ9VKcCGvTU5mnMR8%2BxpHDp6ywlOPm6lMnqCuAnNgULp2hil3qK%2BPSZOpgwKkpTpyBE%2Bges2Im0%2BHkXJ4yX65yeMhgsTKUknqqi5U0iJsJlPsbBoBJ%2FgVHC0%2FU03Q8inQQ7YM9smvX1yeJ%2B70d56rvGRevH7xjXt4Pl7jLL1brhVYCWrso0FBRSWsXT16midvWF8YOqAPYkRW1v8bS8X%2FFcIFIebdg%2FYJAjjEi4KiYQ%2FPvvlSTlhu6hyqRTcHu235%2FTfKhxx6FaPKtqPCAYNmad1%2F9j4o5ea3XTpYc0%2BtS54Sv%2BXp4sbtJyTEmhzaBuCdKKNoHErGdlHpEo6I6SrGX3pKCTgweA6tK5NpfZiP3nby%2BKykCU0Ex6gp9MAyo6BMGsMzdM%2BSybjROREhV0PVh9RpnnBuMRyfMI%2FNgb4GOqUB4%2Fy%2FXqoM4XA%2Bb2quzJUJEaaC8z5sGlg%2BJQQzml1262YJGTghkFr3G7s46rRY2X3LR%2F9MH98%2BQo%2ByFM1I24NYvuOcJ%2FM%2BdRkKHdTtYOoKnpRzcV1JuSTlvRTUV5IQd8%2BT%2Bp0aVRFLij%2Fad0or7IdB5Ut8JivqEOr7BdDvOTErheA3HCI3cam2wdbjsc7%2FHO3gBrcBTJQVdeoZ4G%2BqXWVc54RbF%2Bx8&X-Amz-Signature=d8a1541ebb111286b283999438f37927b961759182c282d3310dc62af4e76f16&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

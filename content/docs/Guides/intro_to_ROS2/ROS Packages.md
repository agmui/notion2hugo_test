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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAQANGO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD1fqX6hts%2BScKvBg8cj19UgxL8qzf6taWN67LGEPDWygIgVKUxnp1j3Av3So3NuxVKjhTyVqSp7N4OKh%2BOs7Kpu1MqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiThoJqOSaZ%2BEDWxCrcAxGYxk311A9U05%2FKb7ZUXsDcU5eLL3uS60LW72YJlpoyqrcHdYjOlMEI%2F1VFflYKE9sX4o53tOjuV3Rh3Dezzj6UP0v%2FbTpA7FUZTYtIO5aI7EmGjzWxiymNOXdaIs3ehtzJH%2ByHxeCI3wZkO5vBygscuKydATr2ZRN0sVJNAPgU%2FgvYbqU2TjY3eYZm5BYcIk%2FjoZtn0CWXWnA%2FHWUGHEypD1o9HtiVEQJT3ZyFDmv%2FEQL7jRpnEyg7dUrSYLcqK%2BLUGZmWB8zBjHIODWWI7KDAzRdmDXqDzjNUwh0VaIf%2Bbp7rbjDnQ5bXRmspQ6cwr%2FeviAIK4N6n8nycsQiP3YN%2FG2I7f5qzLW9b7ydi2%2B2jT1iY5lPnvCbxcXZdRfd7zF8RyP1mDTs%2FQ4FaWZkzoI1UH5s6EBiQVdsFRcQjLis90Px7WhJpBVGOURk902AMFUlUFz62x6WfLHbZ1Se4njS0dqjHxMbUTamCmRruzGjWnGrx68nqlBW5vd8hGtBBX5OSYVZue41oZ53uzaPsbF34mBl4pdZK6sxFlsa9ugkPCwvygm6PefOPbiXl3DBHi%2FbZoUr0w2VZjuhUCJurI%2B9ZAQ%2FhmLYQe4RAcXlQ2hgifJrPEeA%2FCw4WTIfmMILPzMAGOqUBhiJgWBDIKDpKp8cOaSQyzyZBDlAM03HznPpdZsmKRT%2Fc2khTJ4JZJMDXdczxny1ZVl1AEVb4aK3ibtK1xWfwzWHdAUBjww6RJhranbvZqaCftodJbpsD%2FElDt6jUCaPrS7wZnKhTZSaERbXtPR0tNaziouWNJVfBKRRePjfkQh%2BPea4YFLkEZl5VVXx7QaK5vbKhPKLlp%2BRtXZVEn1SUiGaj4KXx&X-Amz-Signature=1d560c9b716f611a523ac21e1de00a0a9f3aacfbca4b9342bfbe5bcfadb2dce7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAQANGO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD1fqX6hts%2BScKvBg8cj19UgxL8qzf6taWN67LGEPDWygIgVKUxnp1j3Av3So3NuxVKjhTyVqSp7N4OKh%2BOs7Kpu1MqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiThoJqOSaZ%2BEDWxCrcAxGYxk311A9U05%2FKb7ZUXsDcU5eLL3uS60LW72YJlpoyqrcHdYjOlMEI%2F1VFflYKE9sX4o53tOjuV3Rh3Dezzj6UP0v%2FbTpA7FUZTYtIO5aI7EmGjzWxiymNOXdaIs3ehtzJH%2ByHxeCI3wZkO5vBygscuKydATr2ZRN0sVJNAPgU%2FgvYbqU2TjY3eYZm5BYcIk%2FjoZtn0CWXWnA%2FHWUGHEypD1o9HtiVEQJT3ZyFDmv%2FEQL7jRpnEyg7dUrSYLcqK%2BLUGZmWB8zBjHIODWWI7KDAzRdmDXqDzjNUwh0VaIf%2Bbp7rbjDnQ5bXRmspQ6cwr%2FeviAIK4N6n8nycsQiP3YN%2FG2I7f5qzLW9b7ydi2%2B2jT1iY5lPnvCbxcXZdRfd7zF8RyP1mDTs%2FQ4FaWZkzoI1UH5s6EBiQVdsFRcQjLis90Px7WhJpBVGOURk902AMFUlUFz62x6WfLHbZ1Se4njS0dqjHxMbUTamCmRruzGjWnGrx68nqlBW5vd8hGtBBX5OSYVZue41oZ53uzaPsbF34mBl4pdZK6sxFlsa9ugkPCwvygm6PefOPbiXl3DBHi%2FbZoUr0w2VZjuhUCJurI%2B9ZAQ%2FhmLYQe4RAcXlQ2hgifJrPEeA%2FCw4WTIfmMILPzMAGOqUBhiJgWBDIKDpKp8cOaSQyzyZBDlAM03HznPpdZsmKRT%2Fc2khTJ4JZJMDXdczxny1ZVl1AEVb4aK3ibtK1xWfwzWHdAUBjww6RJhranbvZqaCftodJbpsD%2FElDt6jUCaPrS7wZnKhTZSaERbXtPR0tNaziouWNJVfBKRRePjfkQh%2BPea4YFLkEZl5VVXx7QaK5vbKhPKLlp%2BRtXZVEn1SUiGaj4KXx&X-Amz-Signature=380b4d83ea46a6481214652b5dddc2336793a3302116bbc969f062d95f622bde&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAQANGO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD1fqX6hts%2BScKvBg8cj19UgxL8qzf6taWN67LGEPDWygIgVKUxnp1j3Av3So3NuxVKjhTyVqSp7N4OKh%2BOs7Kpu1MqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiThoJqOSaZ%2BEDWxCrcAxGYxk311A9U05%2FKb7ZUXsDcU5eLL3uS60LW72YJlpoyqrcHdYjOlMEI%2F1VFflYKE9sX4o53tOjuV3Rh3Dezzj6UP0v%2FbTpA7FUZTYtIO5aI7EmGjzWxiymNOXdaIs3ehtzJH%2ByHxeCI3wZkO5vBygscuKydATr2ZRN0sVJNAPgU%2FgvYbqU2TjY3eYZm5BYcIk%2FjoZtn0CWXWnA%2FHWUGHEypD1o9HtiVEQJT3ZyFDmv%2FEQL7jRpnEyg7dUrSYLcqK%2BLUGZmWB8zBjHIODWWI7KDAzRdmDXqDzjNUwh0VaIf%2Bbp7rbjDnQ5bXRmspQ6cwr%2FeviAIK4N6n8nycsQiP3YN%2FG2I7f5qzLW9b7ydi2%2B2jT1iY5lPnvCbxcXZdRfd7zF8RyP1mDTs%2FQ4FaWZkzoI1UH5s6EBiQVdsFRcQjLis90Px7WhJpBVGOURk902AMFUlUFz62x6WfLHbZ1Se4njS0dqjHxMbUTamCmRruzGjWnGrx68nqlBW5vd8hGtBBX5OSYVZue41oZ53uzaPsbF34mBl4pdZK6sxFlsa9ugkPCwvygm6PefOPbiXl3DBHi%2FbZoUr0w2VZjuhUCJurI%2B9ZAQ%2FhmLYQe4RAcXlQ2hgifJrPEeA%2FCw4WTIfmMILPzMAGOqUBhiJgWBDIKDpKp8cOaSQyzyZBDlAM03HznPpdZsmKRT%2Fc2khTJ4JZJMDXdczxny1ZVl1AEVb4aK3ibtK1xWfwzWHdAUBjww6RJhranbvZqaCftodJbpsD%2FElDt6jUCaPrS7wZnKhTZSaERbXtPR0tNaziouWNJVfBKRRePjfkQh%2BPea4YFLkEZl5VVXx7QaK5vbKhPKLlp%2BRtXZVEn1SUiGaj4KXx&X-Amz-Signature=10d5d9a50ade30a71996eece3c401ec6ace890780cbdedb361143e0a0e575647&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAQANGO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD1fqX6hts%2BScKvBg8cj19UgxL8qzf6taWN67LGEPDWygIgVKUxnp1j3Av3So3NuxVKjhTyVqSp7N4OKh%2BOs7Kpu1MqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiThoJqOSaZ%2BEDWxCrcAxGYxk311A9U05%2FKb7ZUXsDcU5eLL3uS60LW72YJlpoyqrcHdYjOlMEI%2F1VFflYKE9sX4o53tOjuV3Rh3Dezzj6UP0v%2FbTpA7FUZTYtIO5aI7EmGjzWxiymNOXdaIs3ehtzJH%2ByHxeCI3wZkO5vBygscuKydATr2ZRN0sVJNAPgU%2FgvYbqU2TjY3eYZm5BYcIk%2FjoZtn0CWXWnA%2FHWUGHEypD1o9HtiVEQJT3ZyFDmv%2FEQL7jRpnEyg7dUrSYLcqK%2BLUGZmWB8zBjHIODWWI7KDAzRdmDXqDzjNUwh0VaIf%2Bbp7rbjDnQ5bXRmspQ6cwr%2FeviAIK4N6n8nycsQiP3YN%2FG2I7f5qzLW9b7ydi2%2B2jT1iY5lPnvCbxcXZdRfd7zF8RyP1mDTs%2FQ4FaWZkzoI1UH5s6EBiQVdsFRcQjLis90Px7WhJpBVGOURk902AMFUlUFz62x6WfLHbZ1Se4njS0dqjHxMbUTamCmRruzGjWnGrx68nqlBW5vd8hGtBBX5OSYVZue41oZ53uzaPsbF34mBl4pdZK6sxFlsa9ugkPCwvygm6PefOPbiXl3DBHi%2FbZoUr0w2VZjuhUCJurI%2B9ZAQ%2FhmLYQe4RAcXlQ2hgifJrPEeA%2FCw4WTIfmMILPzMAGOqUBhiJgWBDIKDpKp8cOaSQyzyZBDlAM03HznPpdZsmKRT%2Fc2khTJ4JZJMDXdczxny1ZVl1AEVb4aK3ibtK1xWfwzWHdAUBjww6RJhranbvZqaCftodJbpsD%2FElDt6jUCaPrS7wZnKhTZSaERbXtPR0tNaziouWNJVfBKRRePjfkQh%2BPea4YFLkEZl5VVXx7QaK5vbKhPKLlp%2BRtXZVEn1SUiGaj4KXx&X-Amz-Signature=4fd41295c0e7469fecf8205ecd2a0d568c7b3daef4065fcb7a434b1ae996d7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAQANGO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD1fqX6hts%2BScKvBg8cj19UgxL8qzf6taWN67LGEPDWygIgVKUxnp1j3Av3So3NuxVKjhTyVqSp7N4OKh%2BOs7Kpu1MqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiThoJqOSaZ%2BEDWxCrcAxGYxk311A9U05%2FKb7ZUXsDcU5eLL3uS60LW72YJlpoyqrcHdYjOlMEI%2F1VFflYKE9sX4o53tOjuV3Rh3Dezzj6UP0v%2FbTpA7FUZTYtIO5aI7EmGjzWxiymNOXdaIs3ehtzJH%2ByHxeCI3wZkO5vBygscuKydATr2ZRN0sVJNAPgU%2FgvYbqU2TjY3eYZm5BYcIk%2FjoZtn0CWXWnA%2FHWUGHEypD1o9HtiVEQJT3ZyFDmv%2FEQL7jRpnEyg7dUrSYLcqK%2BLUGZmWB8zBjHIODWWI7KDAzRdmDXqDzjNUwh0VaIf%2Bbp7rbjDnQ5bXRmspQ6cwr%2FeviAIK4N6n8nycsQiP3YN%2FG2I7f5qzLW9b7ydi2%2B2jT1iY5lPnvCbxcXZdRfd7zF8RyP1mDTs%2FQ4FaWZkzoI1UH5s6EBiQVdsFRcQjLis90Px7WhJpBVGOURk902AMFUlUFz62x6WfLHbZ1Se4njS0dqjHxMbUTamCmRruzGjWnGrx68nqlBW5vd8hGtBBX5OSYVZue41oZ53uzaPsbF34mBl4pdZK6sxFlsa9ugkPCwvygm6PefOPbiXl3DBHi%2FbZoUr0w2VZjuhUCJurI%2B9ZAQ%2FhmLYQe4RAcXlQ2hgifJrPEeA%2FCw4WTIfmMILPzMAGOqUBhiJgWBDIKDpKp8cOaSQyzyZBDlAM03HznPpdZsmKRT%2Fc2khTJ4JZJMDXdczxny1ZVl1AEVb4aK3ibtK1xWfwzWHdAUBjww6RJhranbvZqaCftodJbpsD%2FElDt6jUCaPrS7wZnKhTZSaERbXtPR0tNaziouWNJVfBKRRePjfkQh%2BPea4YFLkEZl5VVXx7QaK5vbKhPKLlp%2BRtXZVEn1SUiGaj4KXx&X-Amz-Signature=f33f959e03bbe78f374dbf0923d0f9eee05647e271d1a156df08c3b6447ac4e9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAQANGO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD1fqX6hts%2BScKvBg8cj19UgxL8qzf6taWN67LGEPDWygIgVKUxnp1j3Av3So3NuxVKjhTyVqSp7N4OKh%2BOs7Kpu1MqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiThoJqOSaZ%2BEDWxCrcAxGYxk311A9U05%2FKb7ZUXsDcU5eLL3uS60LW72YJlpoyqrcHdYjOlMEI%2F1VFflYKE9sX4o53tOjuV3Rh3Dezzj6UP0v%2FbTpA7FUZTYtIO5aI7EmGjzWxiymNOXdaIs3ehtzJH%2ByHxeCI3wZkO5vBygscuKydATr2ZRN0sVJNAPgU%2FgvYbqU2TjY3eYZm5BYcIk%2FjoZtn0CWXWnA%2FHWUGHEypD1o9HtiVEQJT3ZyFDmv%2FEQL7jRpnEyg7dUrSYLcqK%2BLUGZmWB8zBjHIODWWI7KDAzRdmDXqDzjNUwh0VaIf%2Bbp7rbjDnQ5bXRmspQ6cwr%2FeviAIK4N6n8nycsQiP3YN%2FG2I7f5qzLW9b7ydi2%2B2jT1iY5lPnvCbxcXZdRfd7zF8RyP1mDTs%2FQ4FaWZkzoI1UH5s6EBiQVdsFRcQjLis90Px7WhJpBVGOURk902AMFUlUFz62x6WfLHbZ1Se4njS0dqjHxMbUTamCmRruzGjWnGrx68nqlBW5vd8hGtBBX5OSYVZue41oZ53uzaPsbF34mBl4pdZK6sxFlsa9ugkPCwvygm6PefOPbiXl3DBHi%2FbZoUr0w2VZjuhUCJurI%2B9ZAQ%2FhmLYQe4RAcXlQ2hgifJrPEeA%2FCw4WTIfmMILPzMAGOqUBhiJgWBDIKDpKp8cOaSQyzyZBDlAM03HznPpdZsmKRT%2Fc2khTJ4JZJMDXdczxny1ZVl1AEVb4aK3ibtK1xWfwzWHdAUBjww6RJhranbvZqaCftodJbpsD%2FElDt6jUCaPrS7wZnKhTZSaERbXtPR0tNaziouWNJVfBKRRePjfkQh%2BPea4YFLkEZl5VVXx7QaK5vbKhPKLlp%2BRtXZVEn1SUiGaj4KXx&X-Amz-Signature=e12625c1ede15232e749c7797d52f09c8096df6a1a3fd9fdf7aa90b42fcdb1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAQANGO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD1fqX6hts%2BScKvBg8cj19UgxL8qzf6taWN67LGEPDWygIgVKUxnp1j3Av3So3NuxVKjhTyVqSp7N4OKh%2BOs7Kpu1MqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiThoJqOSaZ%2BEDWxCrcAxGYxk311A9U05%2FKb7ZUXsDcU5eLL3uS60LW72YJlpoyqrcHdYjOlMEI%2F1VFflYKE9sX4o53tOjuV3Rh3Dezzj6UP0v%2FbTpA7FUZTYtIO5aI7EmGjzWxiymNOXdaIs3ehtzJH%2ByHxeCI3wZkO5vBygscuKydATr2ZRN0sVJNAPgU%2FgvYbqU2TjY3eYZm5BYcIk%2FjoZtn0CWXWnA%2FHWUGHEypD1o9HtiVEQJT3ZyFDmv%2FEQL7jRpnEyg7dUrSYLcqK%2BLUGZmWB8zBjHIODWWI7KDAzRdmDXqDzjNUwh0VaIf%2Bbp7rbjDnQ5bXRmspQ6cwr%2FeviAIK4N6n8nycsQiP3YN%2FG2I7f5qzLW9b7ydi2%2B2jT1iY5lPnvCbxcXZdRfd7zF8RyP1mDTs%2FQ4FaWZkzoI1UH5s6EBiQVdsFRcQjLis90Px7WhJpBVGOURk902AMFUlUFz62x6WfLHbZ1Se4njS0dqjHxMbUTamCmRruzGjWnGrx68nqlBW5vd8hGtBBX5OSYVZue41oZ53uzaPsbF34mBl4pdZK6sxFlsa9ugkPCwvygm6PefOPbiXl3DBHi%2FbZoUr0w2VZjuhUCJurI%2B9ZAQ%2FhmLYQe4RAcXlQ2hgifJrPEeA%2FCw4WTIfmMILPzMAGOqUBhiJgWBDIKDpKp8cOaSQyzyZBDlAM03HznPpdZsmKRT%2Fc2khTJ4JZJMDXdczxny1ZVl1AEVb4aK3ibtK1xWfwzWHdAUBjww6RJhranbvZqaCftodJbpsD%2FElDt6jUCaPrS7wZnKhTZSaERbXtPR0tNaziouWNJVfBKRRePjfkQh%2BPea4YFLkEZl5VVXx7QaK5vbKhPKLlp%2BRtXZVEn1SUiGaj4KXx&X-Amz-Signature=df58f5ebe84930738535cb33487b61041004162c3543840418009a54dec335bb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

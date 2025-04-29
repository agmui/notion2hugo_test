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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSKA6ME%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzhn62hDT%2BUnIqjIwNoQfXlzxRpCzev%2B%2FUqkbWWYx5AAiEAjN2VBG63O705C16c%2FHVzAG8ovAYJob2uBlGrNXA%2BO3QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUDq3vG8hEXbsapiircAzbTuCDedcyC%2F%2FEZUXSSpUZgVNWrSWgkkzWcZ7V1TV51w4wGsqP%2F2Ny86h7715DVgm2DKTZCa9ogXyTZTJx9kyYgbIbKZF1OebC0do6I5bZTb%2FqkE94eagMvb8I925rR3WcQQ5iUsByBVnpcOIjaH1zvMhM%2FQXz91zG%2B3QZQD508LRcM3waMPE0vkVC%2FCV4ZWA5uZ9N3du4xQE4IqFbUQ4sTiWBOKxXLrpYlCwb2pclsjkkUKU3UT8M52R0nkFHZp7nom59BCIsccEQZeFfl46uwlhPlXQ%2Ff97WcjLgwi0YcXrWNOM3ZGcUKd6RJKpxuUc2SwOt16GT4rybUMCf6XCuZdV3rg%2FUIjAK0g8SM7Dh3Z1bMnP9pTPZHQir7QMMTjJuMtyO7GlpwZnjioeLYCD4TC%2Bmgem8lsSyv%2FPTQi%2BR3%2BgBVnvkkzQXouy9aa1vxWMFCVwaNrtw9knUz0MlN%2BWTtJzQHM1sxvvE1gTYbDsFxd%2BQevMqiuhY4AOsUa9Ab%2BAapSllJU%2FhzwFADp4XKh%2Bd64AFOapLC84KsYEve2Nh10E75H8q%2BpF03bU6qClUmZeEnf9bXpieIDHVppC%2F5%2BkPG8vZUfMtQNkgy1h2mcGkrvUtQpdVTBCDSTAvPMNrEwsAGOqUB1iS2kHuutnnUeqvbtcw8KNKfJvO1WdFZ47qX0lC5NM%2FjA%2FO5uQPRM0eTyZmMSI%2FmbS%2BE37tZUn3qx1T9LRw2G2d4qVusUOmPnh8mrtSiEaS5Mp6orveclyk52tP%2Fiz4tPo37PbYSDo07hFKq2%2FxbZgW1%2FnQO3SFJQFrBrB11FLi5%2BjAyo7c4pkSxZi%2BRINq3KMEtr9RvYJZ1H3o7aOddxOd4hNeK&X-Amz-Signature=2cf8a39d8f18b53b37766fefdc514e533c55066db99cd8334d29cd9338235a20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSKA6ME%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzhn62hDT%2BUnIqjIwNoQfXlzxRpCzev%2B%2FUqkbWWYx5AAiEAjN2VBG63O705C16c%2FHVzAG8ovAYJob2uBlGrNXA%2BO3QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUDq3vG8hEXbsapiircAzbTuCDedcyC%2F%2FEZUXSSpUZgVNWrSWgkkzWcZ7V1TV51w4wGsqP%2F2Ny86h7715DVgm2DKTZCa9ogXyTZTJx9kyYgbIbKZF1OebC0do6I5bZTb%2FqkE94eagMvb8I925rR3WcQQ5iUsByBVnpcOIjaH1zvMhM%2FQXz91zG%2B3QZQD508LRcM3waMPE0vkVC%2FCV4ZWA5uZ9N3du4xQE4IqFbUQ4sTiWBOKxXLrpYlCwb2pclsjkkUKU3UT8M52R0nkFHZp7nom59BCIsccEQZeFfl46uwlhPlXQ%2Ff97WcjLgwi0YcXrWNOM3ZGcUKd6RJKpxuUc2SwOt16GT4rybUMCf6XCuZdV3rg%2FUIjAK0g8SM7Dh3Z1bMnP9pTPZHQir7QMMTjJuMtyO7GlpwZnjioeLYCD4TC%2Bmgem8lsSyv%2FPTQi%2BR3%2BgBVnvkkzQXouy9aa1vxWMFCVwaNrtw9knUz0MlN%2BWTtJzQHM1sxvvE1gTYbDsFxd%2BQevMqiuhY4AOsUa9Ab%2BAapSllJU%2FhzwFADp4XKh%2Bd64AFOapLC84KsYEve2Nh10E75H8q%2BpF03bU6qClUmZeEnf9bXpieIDHVppC%2F5%2BkPG8vZUfMtQNkgy1h2mcGkrvUtQpdVTBCDSTAvPMNrEwsAGOqUB1iS2kHuutnnUeqvbtcw8KNKfJvO1WdFZ47qX0lC5NM%2FjA%2FO5uQPRM0eTyZmMSI%2FmbS%2BE37tZUn3qx1T9LRw2G2d4qVusUOmPnh8mrtSiEaS5Mp6orveclyk52tP%2Fiz4tPo37PbYSDo07hFKq2%2FxbZgW1%2FnQO3SFJQFrBrB11FLi5%2BjAyo7c4pkSxZi%2BRINq3KMEtr9RvYJZ1H3o7aOddxOd4hNeK&X-Amz-Signature=9d15e77e174720e6f3c7002079bfa8044b818fc3b33fe0ce834bea2e9c655b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSKA6ME%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzhn62hDT%2BUnIqjIwNoQfXlzxRpCzev%2B%2FUqkbWWYx5AAiEAjN2VBG63O705C16c%2FHVzAG8ovAYJob2uBlGrNXA%2BO3QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUDq3vG8hEXbsapiircAzbTuCDedcyC%2F%2FEZUXSSpUZgVNWrSWgkkzWcZ7V1TV51w4wGsqP%2F2Ny86h7715DVgm2DKTZCa9ogXyTZTJx9kyYgbIbKZF1OebC0do6I5bZTb%2FqkE94eagMvb8I925rR3WcQQ5iUsByBVnpcOIjaH1zvMhM%2FQXz91zG%2B3QZQD508LRcM3waMPE0vkVC%2FCV4ZWA5uZ9N3du4xQE4IqFbUQ4sTiWBOKxXLrpYlCwb2pclsjkkUKU3UT8M52R0nkFHZp7nom59BCIsccEQZeFfl46uwlhPlXQ%2Ff97WcjLgwi0YcXrWNOM3ZGcUKd6RJKpxuUc2SwOt16GT4rybUMCf6XCuZdV3rg%2FUIjAK0g8SM7Dh3Z1bMnP9pTPZHQir7QMMTjJuMtyO7GlpwZnjioeLYCD4TC%2Bmgem8lsSyv%2FPTQi%2BR3%2BgBVnvkkzQXouy9aa1vxWMFCVwaNrtw9knUz0MlN%2BWTtJzQHM1sxvvE1gTYbDsFxd%2BQevMqiuhY4AOsUa9Ab%2BAapSllJU%2FhzwFADp4XKh%2Bd64AFOapLC84KsYEve2Nh10E75H8q%2BpF03bU6qClUmZeEnf9bXpieIDHVppC%2F5%2BkPG8vZUfMtQNkgy1h2mcGkrvUtQpdVTBCDSTAvPMNrEwsAGOqUB1iS2kHuutnnUeqvbtcw8KNKfJvO1WdFZ47qX0lC5NM%2FjA%2FO5uQPRM0eTyZmMSI%2FmbS%2BE37tZUn3qx1T9LRw2G2d4qVusUOmPnh8mrtSiEaS5Mp6orveclyk52tP%2Fiz4tPo37PbYSDo07hFKq2%2FxbZgW1%2FnQO3SFJQFrBrB11FLi5%2BjAyo7c4pkSxZi%2BRINq3KMEtr9RvYJZ1H3o7aOddxOd4hNeK&X-Amz-Signature=a573a07c96bd69cb88a600ed728f5fa4989432c45543c9f9adf25aaac2ab5ced&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSKA6ME%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzhn62hDT%2BUnIqjIwNoQfXlzxRpCzev%2B%2FUqkbWWYx5AAiEAjN2VBG63O705C16c%2FHVzAG8ovAYJob2uBlGrNXA%2BO3QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUDq3vG8hEXbsapiircAzbTuCDedcyC%2F%2FEZUXSSpUZgVNWrSWgkkzWcZ7V1TV51w4wGsqP%2F2Ny86h7715DVgm2DKTZCa9ogXyTZTJx9kyYgbIbKZF1OebC0do6I5bZTb%2FqkE94eagMvb8I925rR3WcQQ5iUsByBVnpcOIjaH1zvMhM%2FQXz91zG%2B3QZQD508LRcM3waMPE0vkVC%2FCV4ZWA5uZ9N3du4xQE4IqFbUQ4sTiWBOKxXLrpYlCwb2pclsjkkUKU3UT8M52R0nkFHZp7nom59BCIsccEQZeFfl46uwlhPlXQ%2Ff97WcjLgwi0YcXrWNOM3ZGcUKd6RJKpxuUc2SwOt16GT4rybUMCf6XCuZdV3rg%2FUIjAK0g8SM7Dh3Z1bMnP9pTPZHQir7QMMTjJuMtyO7GlpwZnjioeLYCD4TC%2Bmgem8lsSyv%2FPTQi%2BR3%2BgBVnvkkzQXouy9aa1vxWMFCVwaNrtw9knUz0MlN%2BWTtJzQHM1sxvvE1gTYbDsFxd%2BQevMqiuhY4AOsUa9Ab%2BAapSllJU%2FhzwFADp4XKh%2Bd64AFOapLC84KsYEve2Nh10E75H8q%2BpF03bU6qClUmZeEnf9bXpieIDHVppC%2F5%2BkPG8vZUfMtQNkgy1h2mcGkrvUtQpdVTBCDSTAvPMNrEwsAGOqUB1iS2kHuutnnUeqvbtcw8KNKfJvO1WdFZ47qX0lC5NM%2FjA%2FO5uQPRM0eTyZmMSI%2FmbS%2BE37tZUn3qx1T9LRw2G2d4qVusUOmPnh8mrtSiEaS5Mp6orveclyk52tP%2Fiz4tPo37PbYSDo07hFKq2%2FxbZgW1%2FnQO3SFJQFrBrB11FLi5%2BjAyo7c4pkSxZi%2BRINq3KMEtr9RvYJZ1H3o7aOddxOd4hNeK&X-Amz-Signature=3280e141e11fda8096a82bbc76feab740424ad89f1b4bcbf9d0736a74db49f86&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSKA6ME%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzhn62hDT%2BUnIqjIwNoQfXlzxRpCzev%2B%2FUqkbWWYx5AAiEAjN2VBG63O705C16c%2FHVzAG8ovAYJob2uBlGrNXA%2BO3QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUDq3vG8hEXbsapiircAzbTuCDedcyC%2F%2FEZUXSSpUZgVNWrSWgkkzWcZ7V1TV51w4wGsqP%2F2Ny86h7715DVgm2DKTZCa9ogXyTZTJx9kyYgbIbKZF1OebC0do6I5bZTb%2FqkE94eagMvb8I925rR3WcQQ5iUsByBVnpcOIjaH1zvMhM%2FQXz91zG%2B3QZQD508LRcM3waMPE0vkVC%2FCV4ZWA5uZ9N3du4xQE4IqFbUQ4sTiWBOKxXLrpYlCwb2pclsjkkUKU3UT8M52R0nkFHZp7nom59BCIsccEQZeFfl46uwlhPlXQ%2Ff97WcjLgwi0YcXrWNOM3ZGcUKd6RJKpxuUc2SwOt16GT4rybUMCf6XCuZdV3rg%2FUIjAK0g8SM7Dh3Z1bMnP9pTPZHQir7QMMTjJuMtyO7GlpwZnjioeLYCD4TC%2Bmgem8lsSyv%2FPTQi%2BR3%2BgBVnvkkzQXouy9aa1vxWMFCVwaNrtw9knUz0MlN%2BWTtJzQHM1sxvvE1gTYbDsFxd%2BQevMqiuhY4AOsUa9Ab%2BAapSllJU%2FhzwFADp4XKh%2Bd64AFOapLC84KsYEve2Nh10E75H8q%2BpF03bU6qClUmZeEnf9bXpieIDHVppC%2F5%2BkPG8vZUfMtQNkgy1h2mcGkrvUtQpdVTBCDSTAvPMNrEwsAGOqUB1iS2kHuutnnUeqvbtcw8KNKfJvO1WdFZ47qX0lC5NM%2FjA%2FO5uQPRM0eTyZmMSI%2FmbS%2BE37tZUn3qx1T9LRw2G2d4qVusUOmPnh8mrtSiEaS5Mp6orveclyk52tP%2Fiz4tPo37PbYSDo07hFKq2%2FxbZgW1%2FnQO3SFJQFrBrB11FLi5%2BjAyo7c4pkSxZi%2BRINq3KMEtr9RvYJZ1H3o7aOddxOd4hNeK&X-Amz-Signature=e3599ab68b5e1035d4d82afe8b2322ec6ff97590bff1a3f92dcbe47a45f623d0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSKA6ME%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzhn62hDT%2BUnIqjIwNoQfXlzxRpCzev%2B%2FUqkbWWYx5AAiEAjN2VBG63O705C16c%2FHVzAG8ovAYJob2uBlGrNXA%2BO3QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUDq3vG8hEXbsapiircAzbTuCDedcyC%2F%2FEZUXSSpUZgVNWrSWgkkzWcZ7V1TV51w4wGsqP%2F2Ny86h7715DVgm2DKTZCa9ogXyTZTJx9kyYgbIbKZF1OebC0do6I5bZTb%2FqkE94eagMvb8I925rR3WcQQ5iUsByBVnpcOIjaH1zvMhM%2FQXz91zG%2B3QZQD508LRcM3waMPE0vkVC%2FCV4ZWA5uZ9N3du4xQE4IqFbUQ4sTiWBOKxXLrpYlCwb2pclsjkkUKU3UT8M52R0nkFHZp7nom59BCIsccEQZeFfl46uwlhPlXQ%2Ff97WcjLgwi0YcXrWNOM3ZGcUKd6RJKpxuUc2SwOt16GT4rybUMCf6XCuZdV3rg%2FUIjAK0g8SM7Dh3Z1bMnP9pTPZHQir7QMMTjJuMtyO7GlpwZnjioeLYCD4TC%2Bmgem8lsSyv%2FPTQi%2BR3%2BgBVnvkkzQXouy9aa1vxWMFCVwaNrtw9knUz0MlN%2BWTtJzQHM1sxvvE1gTYbDsFxd%2BQevMqiuhY4AOsUa9Ab%2BAapSllJU%2FhzwFADp4XKh%2Bd64AFOapLC84KsYEve2Nh10E75H8q%2BpF03bU6qClUmZeEnf9bXpieIDHVppC%2F5%2BkPG8vZUfMtQNkgy1h2mcGkrvUtQpdVTBCDSTAvPMNrEwsAGOqUB1iS2kHuutnnUeqvbtcw8KNKfJvO1WdFZ47qX0lC5NM%2FjA%2FO5uQPRM0eTyZmMSI%2FmbS%2BE37tZUn3qx1T9LRw2G2d4qVusUOmPnh8mrtSiEaS5Mp6orveclyk52tP%2Fiz4tPo37PbYSDo07hFKq2%2FxbZgW1%2FnQO3SFJQFrBrB11FLi5%2BjAyo7c4pkSxZi%2BRINq3KMEtr9RvYJZ1H3o7aOddxOd4hNeK&X-Amz-Signature=f5a7a5b6963c1feef347ecb4269c20a25fa9fa8fe26c10f91439002bb022c290&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSKA6ME%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzhn62hDT%2BUnIqjIwNoQfXlzxRpCzev%2B%2FUqkbWWYx5AAiEAjN2VBG63O705C16c%2FHVzAG8ovAYJob2uBlGrNXA%2BO3QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUDq3vG8hEXbsapiircAzbTuCDedcyC%2F%2FEZUXSSpUZgVNWrSWgkkzWcZ7V1TV51w4wGsqP%2F2Ny86h7715DVgm2DKTZCa9ogXyTZTJx9kyYgbIbKZF1OebC0do6I5bZTb%2FqkE94eagMvb8I925rR3WcQQ5iUsByBVnpcOIjaH1zvMhM%2FQXz91zG%2B3QZQD508LRcM3waMPE0vkVC%2FCV4ZWA5uZ9N3du4xQE4IqFbUQ4sTiWBOKxXLrpYlCwb2pclsjkkUKU3UT8M52R0nkFHZp7nom59BCIsccEQZeFfl46uwlhPlXQ%2Ff97WcjLgwi0YcXrWNOM3ZGcUKd6RJKpxuUc2SwOt16GT4rybUMCf6XCuZdV3rg%2FUIjAK0g8SM7Dh3Z1bMnP9pTPZHQir7QMMTjJuMtyO7GlpwZnjioeLYCD4TC%2Bmgem8lsSyv%2FPTQi%2BR3%2BgBVnvkkzQXouy9aa1vxWMFCVwaNrtw9knUz0MlN%2BWTtJzQHM1sxvvE1gTYbDsFxd%2BQevMqiuhY4AOsUa9Ab%2BAapSllJU%2FhzwFADp4XKh%2Bd64AFOapLC84KsYEve2Nh10E75H8q%2BpF03bU6qClUmZeEnf9bXpieIDHVppC%2F5%2BkPG8vZUfMtQNkgy1h2mcGkrvUtQpdVTBCDSTAvPMNrEwsAGOqUB1iS2kHuutnnUeqvbtcw8KNKfJvO1WdFZ47qX0lC5NM%2FjA%2FO5uQPRM0eTyZmMSI%2FmbS%2BE37tZUn3qx1T9LRw2G2d4qVusUOmPnh8mrtSiEaS5Mp6orveclyk52tP%2Fiz4tPo37PbYSDo07hFKq2%2FxbZgW1%2FnQO3SFJQFrBrB11FLi5%2BjAyo7c4pkSxZi%2BRINq3KMEtr9RvYJZ1H3o7aOddxOd4hNeK&X-Amz-Signature=0efae4412ef14e8641947d73243c65a846d77d459fc48b88912093fbec16b9d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

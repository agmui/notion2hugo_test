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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7KNK7I%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDNIribPpWLHfhJ9tlSZ8MSl2csfgZVCR%2FzUUAGdF0DywIgIF%2Ba7i21SPnJ3vzRM5ULRxqkU3g57nvHF%2FxL941H5vAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGxgwOSebDyIdY7p4ircA%2B9tn%2BhdR7ZxtN8%2BcFM1ccQrJtw96hTqJA8MQEYM5Gct0WpXk78DQqme%2BhPruF75ChA2rMK86c%2BRyVjTGw8xif89zL3Z%2F%2FpAGBL1Qa%2F9MZVzXr2xCkecQ2AD3IE1%2BOt14eN7m8jOJfIU5aGZSXlR8ySKAIuIL2D6kg3AfmoaA8kD1FAPtv82tjFjzb5W4AV5OtQ97gURf%2Fu0APNRVIehxvO7P0p9oAjZYDyYGePdAJhDi223XXC52ebs0ertB695qa%2B0jb1MAwf40LT74%2BAEU4FPD0rIL4PLB1BYtqYwiNg5XME9FiVcR%2FtiHlDyFyCLhT66elWodAYZeWf8J%2Ba6YfPaySgsoUMyDdFgr0FXYnn4iAqkDKqwWOPjLW0KqZyqWb1eUs2goBWLm%2F8PUA2owJS1poedvJikZwfg%2FIbC%2FuCX1xgcfSVRNInfDLO82e8yWRBSqa4OnGbwOlR5Ac1D4k1gAx8P3S%2Fl4Jwv%2BbFYwY23QLnTYYMg2MwGc4kddQ9sTZJqOA3Yc1BDtWX1Y9aLENXyrjwoWg7g2kgfhLlVhWWGKGL0zB97kZYRdP43ZB3yaxTSNVmJ8ceAeX%2B0MJ%2BlOg0dtrbqtLKIZh8YfcS%2Fs9K3h1JgoDcClIF2K25tMOL%2FzMEGOqUBhLtA28XH7Xos8IHS1WluXw8mW3UJtwLPzaqcovvnw%2FceQfwqejhn%2F%2BONOVvqzd47rlcNbhoBWIOqCYuvxkE%2BkARSCxrQlzKGIJcPoMgDTwdiD3QQz6q6UvrSX9Yo%2Bv%2Fhp4dOBy4lRMcbKxci0XWf49YdSDvYDuCQ8lDq0AJmYHVdRCgK8jFgA9KcFAHcE7w%2B7GouXlMDjJwxIpwUMofU7wiUCvL0&X-Amz-Signature=fb097121b29fce1f64c1e90f553916e9f76a188b165b855f10eb3b72dfdcd8db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7KNK7I%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDNIribPpWLHfhJ9tlSZ8MSl2csfgZVCR%2FzUUAGdF0DywIgIF%2Ba7i21SPnJ3vzRM5ULRxqkU3g57nvHF%2FxL941H5vAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGxgwOSebDyIdY7p4ircA%2B9tn%2BhdR7ZxtN8%2BcFM1ccQrJtw96hTqJA8MQEYM5Gct0WpXk78DQqme%2BhPruF75ChA2rMK86c%2BRyVjTGw8xif89zL3Z%2F%2FpAGBL1Qa%2F9MZVzXr2xCkecQ2AD3IE1%2BOt14eN7m8jOJfIU5aGZSXlR8ySKAIuIL2D6kg3AfmoaA8kD1FAPtv82tjFjzb5W4AV5OtQ97gURf%2Fu0APNRVIehxvO7P0p9oAjZYDyYGePdAJhDi223XXC52ebs0ertB695qa%2B0jb1MAwf40LT74%2BAEU4FPD0rIL4PLB1BYtqYwiNg5XME9FiVcR%2FtiHlDyFyCLhT66elWodAYZeWf8J%2Ba6YfPaySgsoUMyDdFgr0FXYnn4iAqkDKqwWOPjLW0KqZyqWb1eUs2goBWLm%2F8PUA2owJS1poedvJikZwfg%2FIbC%2FuCX1xgcfSVRNInfDLO82e8yWRBSqa4OnGbwOlR5Ac1D4k1gAx8P3S%2Fl4Jwv%2BbFYwY23QLnTYYMg2MwGc4kddQ9sTZJqOA3Yc1BDtWX1Y9aLENXyrjwoWg7g2kgfhLlVhWWGKGL0zB97kZYRdP43ZB3yaxTSNVmJ8ceAeX%2B0MJ%2BlOg0dtrbqtLKIZh8YfcS%2Fs9K3h1JgoDcClIF2K25tMOL%2FzMEGOqUBhLtA28XH7Xos8IHS1WluXw8mW3UJtwLPzaqcovvnw%2FceQfwqejhn%2F%2BONOVvqzd47rlcNbhoBWIOqCYuvxkE%2BkARSCxrQlzKGIJcPoMgDTwdiD3QQz6q6UvrSX9Yo%2Bv%2Fhp4dOBy4lRMcbKxci0XWf49YdSDvYDuCQ8lDq0AJmYHVdRCgK8jFgA9KcFAHcE7w%2B7GouXlMDjJwxIpwUMofU7wiUCvL0&X-Amz-Signature=3eb6f2fc086cae51b152ac5412ca67a81f3d9802a02ca909a415370b367792be&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7KNK7I%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDNIribPpWLHfhJ9tlSZ8MSl2csfgZVCR%2FzUUAGdF0DywIgIF%2Ba7i21SPnJ3vzRM5ULRxqkU3g57nvHF%2FxL941H5vAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGxgwOSebDyIdY7p4ircA%2B9tn%2BhdR7ZxtN8%2BcFM1ccQrJtw96hTqJA8MQEYM5Gct0WpXk78DQqme%2BhPruF75ChA2rMK86c%2BRyVjTGw8xif89zL3Z%2F%2FpAGBL1Qa%2F9MZVzXr2xCkecQ2AD3IE1%2BOt14eN7m8jOJfIU5aGZSXlR8ySKAIuIL2D6kg3AfmoaA8kD1FAPtv82tjFjzb5W4AV5OtQ97gURf%2Fu0APNRVIehxvO7P0p9oAjZYDyYGePdAJhDi223XXC52ebs0ertB695qa%2B0jb1MAwf40LT74%2BAEU4FPD0rIL4PLB1BYtqYwiNg5XME9FiVcR%2FtiHlDyFyCLhT66elWodAYZeWf8J%2Ba6YfPaySgsoUMyDdFgr0FXYnn4iAqkDKqwWOPjLW0KqZyqWb1eUs2goBWLm%2F8PUA2owJS1poedvJikZwfg%2FIbC%2FuCX1xgcfSVRNInfDLO82e8yWRBSqa4OnGbwOlR5Ac1D4k1gAx8P3S%2Fl4Jwv%2BbFYwY23QLnTYYMg2MwGc4kddQ9sTZJqOA3Yc1BDtWX1Y9aLENXyrjwoWg7g2kgfhLlVhWWGKGL0zB97kZYRdP43ZB3yaxTSNVmJ8ceAeX%2B0MJ%2BlOg0dtrbqtLKIZh8YfcS%2Fs9K3h1JgoDcClIF2K25tMOL%2FzMEGOqUBhLtA28XH7Xos8IHS1WluXw8mW3UJtwLPzaqcovvnw%2FceQfwqejhn%2F%2BONOVvqzd47rlcNbhoBWIOqCYuvxkE%2BkARSCxrQlzKGIJcPoMgDTwdiD3QQz6q6UvrSX9Yo%2Bv%2Fhp4dOBy4lRMcbKxci0XWf49YdSDvYDuCQ8lDq0AJmYHVdRCgK8jFgA9KcFAHcE7w%2B7GouXlMDjJwxIpwUMofU7wiUCvL0&X-Amz-Signature=bee2cb561c36743ff193b53bc659cbe8e5fb2a61544375bf6868447a55c8c28d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7KNK7I%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDNIribPpWLHfhJ9tlSZ8MSl2csfgZVCR%2FzUUAGdF0DywIgIF%2Ba7i21SPnJ3vzRM5ULRxqkU3g57nvHF%2FxL941H5vAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGxgwOSebDyIdY7p4ircA%2B9tn%2BhdR7ZxtN8%2BcFM1ccQrJtw96hTqJA8MQEYM5Gct0WpXk78DQqme%2BhPruF75ChA2rMK86c%2BRyVjTGw8xif89zL3Z%2F%2FpAGBL1Qa%2F9MZVzXr2xCkecQ2AD3IE1%2BOt14eN7m8jOJfIU5aGZSXlR8ySKAIuIL2D6kg3AfmoaA8kD1FAPtv82tjFjzb5W4AV5OtQ97gURf%2Fu0APNRVIehxvO7P0p9oAjZYDyYGePdAJhDi223XXC52ebs0ertB695qa%2B0jb1MAwf40LT74%2BAEU4FPD0rIL4PLB1BYtqYwiNg5XME9FiVcR%2FtiHlDyFyCLhT66elWodAYZeWf8J%2Ba6YfPaySgsoUMyDdFgr0FXYnn4iAqkDKqwWOPjLW0KqZyqWb1eUs2goBWLm%2F8PUA2owJS1poedvJikZwfg%2FIbC%2FuCX1xgcfSVRNInfDLO82e8yWRBSqa4OnGbwOlR5Ac1D4k1gAx8P3S%2Fl4Jwv%2BbFYwY23QLnTYYMg2MwGc4kddQ9sTZJqOA3Yc1BDtWX1Y9aLENXyrjwoWg7g2kgfhLlVhWWGKGL0zB97kZYRdP43ZB3yaxTSNVmJ8ceAeX%2B0MJ%2BlOg0dtrbqtLKIZh8YfcS%2Fs9K3h1JgoDcClIF2K25tMOL%2FzMEGOqUBhLtA28XH7Xos8IHS1WluXw8mW3UJtwLPzaqcovvnw%2FceQfwqejhn%2F%2BONOVvqzd47rlcNbhoBWIOqCYuvxkE%2BkARSCxrQlzKGIJcPoMgDTwdiD3QQz6q6UvrSX9Yo%2Bv%2Fhp4dOBy4lRMcbKxci0XWf49YdSDvYDuCQ8lDq0AJmYHVdRCgK8jFgA9KcFAHcE7w%2B7GouXlMDjJwxIpwUMofU7wiUCvL0&X-Amz-Signature=d73d619060273ef647185fd17504b98e6f5600d90bf36d84c96fa6e72dec1c72&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7KNK7I%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDNIribPpWLHfhJ9tlSZ8MSl2csfgZVCR%2FzUUAGdF0DywIgIF%2Ba7i21SPnJ3vzRM5ULRxqkU3g57nvHF%2FxL941H5vAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGxgwOSebDyIdY7p4ircA%2B9tn%2BhdR7ZxtN8%2BcFM1ccQrJtw96hTqJA8MQEYM5Gct0WpXk78DQqme%2BhPruF75ChA2rMK86c%2BRyVjTGw8xif89zL3Z%2F%2FpAGBL1Qa%2F9MZVzXr2xCkecQ2AD3IE1%2BOt14eN7m8jOJfIU5aGZSXlR8ySKAIuIL2D6kg3AfmoaA8kD1FAPtv82tjFjzb5W4AV5OtQ97gURf%2Fu0APNRVIehxvO7P0p9oAjZYDyYGePdAJhDi223XXC52ebs0ertB695qa%2B0jb1MAwf40LT74%2BAEU4FPD0rIL4PLB1BYtqYwiNg5XME9FiVcR%2FtiHlDyFyCLhT66elWodAYZeWf8J%2Ba6YfPaySgsoUMyDdFgr0FXYnn4iAqkDKqwWOPjLW0KqZyqWb1eUs2goBWLm%2F8PUA2owJS1poedvJikZwfg%2FIbC%2FuCX1xgcfSVRNInfDLO82e8yWRBSqa4OnGbwOlR5Ac1D4k1gAx8P3S%2Fl4Jwv%2BbFYwY23QLnTYYMg2MwGc4kddQ9sTZJqOA3Yc1BDtWX1Y9aLENXyrjwoWg7g2kgfhLlVhWWGKGL0zB97kZYRdP43ZB3yaxTSNVmJ8ceAeX%2B0MJ%2BlOg0dtrbqtLKIZh8YfcS%2Fs9K3h1JgoDcClIF2K25tMOL%2FzMEGOqUBhLtA28XH7Xos8IHS1WluXw8mW3UJtwLPzaqcovvnw%2FceQfwqejhn%2F%2BONOVvqzd47rlcNbhoBWIOqCYuvxkE%2BkARSCxrQlzKGIJcPoMgDTwdiD3QQz6q6UvrSX9Yo%2Bv%2Fhp4dOBy4lRMcbKxci0XWf49YdSDvYDuCQ8lDq0AJmYHVdRCgK8jFgA9KcFAHcE7w%2B7GouXlMDjJwxIpwUMofU7wiUCvL0&X-Amz-Signature=346dffcafbcd3c6416068b5c1afdeab88ec532188895ff0bcf6aa2fe3f2997f8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7KNK7I%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDNIribPpWLHfhJ9tlSZ8MSl2csfgZVCR%2FzUUAGdF0DywIgIF%2Ba7i21SPnJ3vzRM5ULRxqkU3g57nvHF%2FxL941H5vAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGxgwOSebDyIdY7p4ircA%2B9tn%2BhdR7ZxtN8%2BcFM1ccQrJtw96hTqJA8MQEYM5Gct0WpXk78DQqme%2BhPruF75ChA2rMK86c%2BRyVjTGw8xif89zL3Z%2F%2FpAGBL1Qa%2F9MZVzXr2xCkecQ2AD3IE1%2BOt14eN7m8jOJfIU5aGZSXlR8ySKAIuIL2D6kg3AfmoaA8kD1FAPtv82tjFjzb5W4AV5OtQ97gURf%2Fu0APNRVIehxvO7P0p9oAjZYDyYGePdAJhDi223XXC52ebs0ertB695qa%2B0jb1MAwf40LT74%2BAEU4FPD0rIL4PLB1BYtqYwiNg5XME9FiVcR%2FtiHlDyFyCLhT66elWodAYZeWf8J%2Ba6YfPaySgsoUMyDdFgr0FXYnn4iAqkDKqwWOPjLW0KqZyqWb1eUs2goBWLm%2F8PUA2owJS1poedvJikZwfg%2FIbC%2FuCX1xgcfSVRNInfDLO82e8yWRBSqa4OnGbwOlR5Ac1D4k1gAx8P3S%2Fl4Jwv%2BbFYwY23QLnTYYMg2MwGc4kddQ9sTZJqOA3Yc1BDtWX1Y9aLENXyrjwoWg7g2kgfhLlVhWWGKGL0zB97kZYRdP43ZB3yaxTSNVmJ8ceAeX%2B0MJ%2BlOg0dtrbqtLKIZh8YfcS%2Fs9K3h1JgoDcClIF2K25tMOL%2FzMEGOqUBhLtA28XH7Xos8IHS1WluXw8mW3UJtwLPzaqcovvnw%2FceQfwqejhn%2F%2BONOVvqzd47rlcNbhoBWIOqCYuvxkE%2BkARSCxrQlzKGIJcPoMgDTwdiD3QQz6q6UvrSX9Yo%2Bv%2Fhp4dOBy4lRMcbKxci0XWf49YdSDvYDuCQ8lDq0AJmYHVdRCgK8jFgA9KcFAHcE7w%2B7GouXlMDjJwxIpwUMofU7wiUCvL0&X-Amz-Signature=e7cece71acf8684e83aa7ca5c717a1ac9ba30add38aab5781ef7c410f4ef0f64&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7KNK7I%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDNIribPpWLHfhJ9tlSZ8MSl2csfgZVCR%2FzUUAGdF0DywIgIF%2Ba7i21SPnJ3vzRM5ULRxqkU3g57nvHF%2FxL941H5vAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGxgwOSebDyIdY7p4ircA%2B9tn%2BhdR7ZxtN8%2BcFM1ccQrJtw96hTqJA8MQEYM5Gct0WpXk78DQqme%2BhPruF75ChA2rMK86c%2BRyVjTGw8xif89zL3Z%2F%2FpAGBL1Qa%2F9MZVzXr2xCkecQ2AD3IE1%2BOt14eN7m8jOJfIU5aGZSXlR8ySKAIuIL2D6kg3AfmoaA8kD1FAPtv82tjFjzb5W4AV5OtQ97gURf%2Fu0APNRVIehxvO7P0p9oAjZYDyYGePdAJhDi223XXC52ebs0ertB695qa%2B0jb1MAwf40LT74%2BAEU4FPD0rIL4PLB1BYtqYwiNg5XME9FiVcR%2FtiHlDyFyCLhT66elWodAYZeWf8J%2Ba6YfPaySgsoUMyDdFgr0FXYnn4iAqkDKqwWOPjLW0KqZyqWb1eUs2goBWLm%2F8PUA2owJS1poedvJikZwfg%2FIbC%2FuCX1xgcfSVRNInfDLO82e8yWRBSqa4OnGbwOlR5Ac1D4k1gAx8P3S%2Fl4Jwv%2BbFYwY23QLnTYYMg2MwGc4kddQ9sTZJqOA3Yc1BDtWX1Y9aLENXyrjwoWg7g2kgfhLlVhWWGKGL0zB97kZYRdP43ZB3yaxTSNVmJ8ceAeX%2B0MJ%2BlOg0dtrbqtLKIZh8YfcS%2Fs9K3h1JgoDcClIF2K25tMOL%2FzMEGOqUBhLtA28XH7Xos8IHS1WluXw8mW3UJtwLPzaqcovvnw%2FceQfwqejhn%2F%2BONOVvqzd47rlcNbhoBWIOqCYuvxkE%2BkARSCxrQlzKGIJcPoMgDTwdiD3QQz6q6UvrSX9Yo%2Bv%2Fhp4dOBy4lRMcbKxci0XWf49YdSDvYDuCQ8lDq0AJmYHVdRCgK8jFgA9KcFAHcE7w%2B7GouXlMDjJwxIpwUMofU7wiUCvL0&X-Amz-Signature=e54b272b541e60f97e412ab3b7585efcb4a5907397e8f3759421acb60e5b212b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

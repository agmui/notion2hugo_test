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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645HWWBAR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc9PWMq6bzqa%2F4IAe8Hk%2BjkmPD%2Bclqq6AyVgCHL4vpvQIhAJhsD8m5Gb2%2BXH5zYXZc3Zv6kFHxNGxDrVd8W8ATJ33kKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1e%2FEsCrFVClqkNuIq3AM%2FEhqTVg0KBqkqx5UGD3eHfksyBrpWQzU8Rpc7Kj5UCnq4LRxMdUg962HjBnvgLpkr8Q7643yrXNHFG0NHSg5%2Bz3BZVmmBF2fmeOYz3Sf4hGNpCkQet8KAp301xuEwA3jW7oXSFobmhAhOAj%2BGEGUbyFKe0o%2F1ivmKE%2FyXxSneRq65Wdeldlxef9DVHfZecBZttFRumOqsm38USStkoIgYigoLyHAp2C9CnE%2BehPtvSgqF8jWW5uPOO4Y8viFFAZtiPZVgPt2H4mPVD1hC5YvYFbp8H4ZuQeJES1aXWzv7CiEcIY6Tw4%2FLQxhH6frEIgC5GP%2Bx8QBnQwfaiVx1iYC%2ByzXu6vS8MFk3Pu6B%2B9JW7vAPl09ZgB82EeyrHuTZY0UTTHFuV7UsSOP3YVzx%2BMNOg6zKDuwr7hFttY7kol5WjpOKFbb4IJSfH4C2VxQ21qH1PGCsJUZAVYmymINZU%2FxkZot%2BXPYAaqUg%2BPII28TBIiAwkIkVcJ9nsJLb3Lrek2n%2B9QBy%2FCmTtfvC3pSe1QZmgsz%2F9pFr1hygnTXErUP4bkqP59AtyF0BTf8ya7uRa4O%2FIjU5hgoHGb5QAvgl%2B0tFGGrIUz%2BG0C4rjSzWz9l68pvs1kULj4j0i3HUVjDXqrK9BjqkAenRPP8w76sXkO9o%2FnY%2FzDQP0LaseE7CqcTTF6pRT81BLQJIpvB3Mr%2BZJEN6kxtIMhMBfdMzU1cRYOGOcAAW%2BvVpUFVXDmKrQHTXmogcz1phcvO9ft6oGXHTrbfXoWP5g5%2B5ziOBtMgbRlM%2F4LL%2BjZFLjQPrBrfsOsgYPiDxSg%2Bgxaau%2F6E4%2BRG9MmoSKCMuQV0HbBhBU27mcolnu2DNlux1xgUR&X-Amz-Signature=5e34a750ffd47d562b564574c20762682f012e4b289fc6be43a6f0d64b277552&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645HWWBAR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc9PWMq6bzqa%2F4IAe8Hk%2BjkmPD%2Bclqq6AyVgCHL4vpvQIhAJhsD8m5Gb2%2BXH5zYXZc3Zv6kFHxNGxDrVd8W8ATJ33kKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1e%2FEsCrFVClqkNuIq3AM%2FEhqTVg0KBqkqx5UGD3eHfksyBrpWQzU8Rpc7Kj5UCnq4LRxMdUg962HjBnvgLpkr8Q7643yrXNHFG0NHSg5%2Bz3BZVmmBF2fmeOYz3Sf4hGNpCkQet8KAp301xuEwA3jW7oXSFobmhAhOAj%2BGEGUbyFKe0o%2F1ivmKE%2FyXxSneRq65Wdeldlxef9DVHfZecBZttFRumOqsm38USStkoIgYigoLyHAp2C9CnE%2BehPtvSgqF8jWW5uPOO4Y8viFFAZtiPZVgPt2H4mPVD1hC5YvYFbp8H4ZuQeJES1aXWzv7CiEcIY6Tw4%2FLQxhH6frEIgC5GP%2Bx8QBnQwfaiVx1iYC%2ByzXu6vS8MFk3Pu6B%2B9JW7vAPl09ZgB82EeyrHuTZY0UTTHFuV7UsSOP3YVzx%2BMNOg6zKDuwr7hFttY7kol5WjpOKFbb4IJSfH4C2VxQ21qH1PGCsJUZAVYmymINZU%2FxkZot%2BXPYAaqUg%2BPII28TBIiAwkIkVcJ9nsJLb3Lrek2n%2B9QBy%2FCmTtfvC3pSe1QZmgsz%2F9pFr1hygnTXErUP4bkqP59AtyF0BTf8ya7uRa4O%2FIjU5hgoHGb5QAvgl%2B0tFGGrIUz%2BG0C4rjSzWz9l68pvs1kULj4j0i3HUVjDXqrK9BjqkAenRPP8w76sXkO9o%2FnY%2FzDQP0LaseE7CqcTTF6pRT81BLQJIpvB3Mr%2BZJEN6kxtIMhMBfdMzU1cRYOGOcAAW%2BvVpUFVXDmKrQHTXmogcz1phcvO9ft6oGXHTrbfXoWP5g5%2B5ziOBtMgbRlM%2F4LL%2BjZFLjQPrBrfsOsgYPiDxSg%2Bgxaau%2F6E4%2BRG9MmoSKCMuQV0HbBhBU27mcolnu2DNlux1xgUR&X-Amz-Signature=b5d3164351cad45ea8e6d59c8ebfed6f25066b1bf38678074a9e237f060774cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645HWWBAR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc9PWMq6bzqa%2F4IAe8Hk%2BjkmPD%2Bclqq6AyVgCHL4vpvQIhAJhsD8m5Gb2%2BXH5zYXZc3Zv6kFHxNGxDrVd8W8ATJ33kKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1e%2FEsCrFVClqkNuIq3AM%2FEhqTVg0KBqkqx5UGD3eHfksyBrpWQzU8Rpc7Kj5UCnq4LRxMdUg962HjBnvgLpkr8Q7643yrXNHFG0NHSg5%2Bz3BZVmmBF2fmeOYz3Sf4hGNpCkQet8KAp301xuEwA3jW7oXSFobmhAhOAj%2BGEGUbyFKe0o%2F1ivmKE%2FyXxSneRq65Wdeldlxef9DVHfZecBZttFRumOqsm38USStkoIgYigoLyHAp2C9CnE%2BehPtvSgqF8jWW5uPOO4Y8viFFAZtiPZVgPt2H4mPVD1hC5YvYFbp8H4ZuQeJES1aXWzv7CiEcIY6Tw4%2FLQxhH6frEIgC5GP%2Bx8QBnQwfaiVx1iYC%2ByzXu6vS8MFk3Pu6B%2B9JW7vAPl09ZgB82EeyrHuTZY0UTTHFuV7UsSOP3YVzx%2BMNOg6zKDuwr7hFttY7kol5WjpOKFbb4IJSfH4C2VxQ21qH1PGCsJUZAVYmymINZU%2FxkZot%2BXPYAaqUg%2BPII28TBIiAwkIkVcJ9nsJLb3Lrek2n%2B9QBy%2FCmTtfvC3pSe1QZmgsz%2F9pFr1hygnTXErUP4bkqP59AtyF0BTf8ya7uRa4O%2FIjU5hgoHGb5QAvgl%2B0tFGGrIUz%2BG0C4rjSzWz9l68pvs1kULj4j0i3HUVjDXqrK9BjqkAenRPP8w76sXkO9o%2FnY%2FzDQP0LaseE7CqcTTF6pRT81BLQJIpvB3Mr%2BZJEN6kxtIMhMBfdMzU1cRYOGOcAAW%2BvVpUFVXDmKrQHTXmogcz1phcvO9ft6oGXHTrbfXoWP5g5%2B5ziOBtMgbRlM%2F4LL%2BjZFLjQPrBrfsOsgYPiDxSg%2Bgxaau%2F6E4%2BRG9MmoSKCMuQV0HbBhBU27mcolnu2DNlux1xgUR&X-Amz-Signature=8cf795432d37c962df0aff2b174f0d6a790f27ba813b2c04b8d40c37894821d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645HWWBAR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc9PWMq6bzqa%2F4IAe8Hk%2BjkmPD%2Bclqq6AyVgCHL4vpvQIhAJhsD8m5Gb2%2BXH5zYXZc3Zv6kFHxNGxDrVd8W8ATJ33kKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1e%2FEsCrFVClqkNuIq3AM%2FEhqTVg0KBqkqx5UGD3eHfksyBrpWQzU8Rpc7Kj5UCnq4LRxMdUg962HjBnvgLpkr8Q7643yrXNHFG0NHSg5%2Bz3BZVmmBF2fmeOYz3Sf4hGNpCkQet8KAp301xuEwA3jW7oXSFobmhAhOAj%2BGEGUbyFKe0o%2F1ivmKE%2FyXxSneRq65Wdeldlxef9DVHfZecBZttFRumOqsm38USStkoIgYigoLyHAp2C9CnE%2BehPtvSgqF8jWW5uPOO4Y8viFFAZtiPZVgPt2H4mPVD1hC5YvYFbp8H4ZuQeJES1aXWzv7CiEcIY6Tw4%2FLQxhH6frEIgC5GP%2Bx8QBnQwfaiVx1iYC%2ByzXu6vS8MFk3Pu6B%2B9JW7vAPl09ZgB82EeyrHuTZY0UTTHFuV7UsSOP3YVzx%2BMNOg6zKDuwr7hFttY7kol5WjpOKFbb4IJSfH4C2VxQ21qH1PGCsJUZAVYmymINZU%2FxkZot%2BXPYAaqUg%2BPII28TBIiAwkIkVcJ9nsJLb3Lrek2n%2B9QBy%2FCmTtfvC3pSe1QZmgsz%2F9pFr1hygnTXErUP4bkqP59AtyF0BTf8ya7uRa4O%2FIjU5hgoHGb5QAvgl%2B0tFGGrIUz%2BG0C4rjSzWz9l68pvs1kULj4j0i3HUVjDXqrK9BjqkAenRPP8w76sXkO9o%2FnY%2FzDQP0LaseE7CqcTTF6pRT81BLQJIpvB3Mr%2BZJEN6kxtIMhMBfdMzU1cRYOGOcAAW%2BvVpUFVXDmKrQHTXmogcz1phcvO9ft6oGXHTrbfXoWP5g5%2B5ziOBtMgbRlM%2F4LL%2BjZFLjQPrBrfsOsgYPiDxSg%2Bgxaau%2F6E4%2BRG9MmoSKCMuQV0HbBhBU27mcolnu2DNlux1xgUR&X-Amz-Signature=029a83d5de372551a415604407c632549eaa29bb0128e99cf7c809aabad40be7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645HWWBAR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc9PWMq6bzqa%2F4IAe8Hk%2BjkmPD%2Bclqq6AyVgCHL4vpvQIhAJhsD8m5Gb2%2BXH5zYXZc3Zv6kFHxNGxDrVd8W8ATJ33kKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1e%2FEsCrFVClqkNuIq3AM%2FEhqTVg0KBqkqx5UGD3eHfksyBrpWQzU8Rpc7Kj5UCnq4LRxMdUg962HjBnvgLpkr8Q7643yrXNHFG0NHSg5%2Bz3BZVmmBF2fmeOYz3Sf4hGNpCkQet8KAp301xuEwA3jW7oXSFobmhAhOAj%2BGEGUbyFKe0o%2F1ivmKE%2FyXxSneRq65Wdeldlxef9DVHfZecBZttFRumOqsm38USStkoIgYigoLyHAp2C9CnE%2BehPtvSgqF8jWW5uPOO4Y8viFFAZtiPZVgPt2H4mPVD1hC5YvYFbp8H4ZuQeJES1aXWzv7CiEcIY6Tw4%2FLQxhH6frEIgC5GP%2Bx8QBnQwfaiVx1iYC%2ByzXu6vS8MFk3Pu6B%2B9JW7vAPl09ZgB82EeyrHuTZY0UTTHFuV7UsSOP3YVzx%2BMNOg6zKDuwr7hFttY7kol5WjpOKFbb4IJSfH4C2VxQ21qH1PGCsJUZAVYmymINZU%2FxkZot%2BXPYAaqUg%2BPII28TBIiAwkIkVcJ9nsJLb3Lrek2n%2B9QBy%2FCmTtfvC3pSe1QZmgsz%2F9pFr1hygnTXErUP4bkqP59AtyF0BTf8ya7uRa4O%2FIjU5hgoHGb5QAvgl%2B0tFGGrIUz%2BG0C4rjSzWz9l68pvs1kULj4j0i3HUVjDXqrK9BjqkAenRPP8w76sXkO9o%2FnY%2FzDQP0LaseE7CqcTTF6pRT81BLQJIpvB3Mr%2BZJEN6kxtIMhMBfdMzU1cRYOGOcAAW%2BvVpUFVXDmKrQHTXmogcz1phcvO9ft6oGXHTrbfXoWP5g5%2B5ziOBtMgbRlM%2F4LL%2BjZFLjQPrBrfsOsgYPiDxSg%2Bgxaau%2F6E4%2BRG9MmoSKCMuQV0HbBhBU27mcolnu2DNlux1xgUR&X-Amz-Signature=5778a126110a062431beecebb951165ddb07f1d390799745814f45e12f3ac283&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645HWWBAR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc9PWMq6bzqa%2F4IAe8Hk%2BjkmPD%2Bclqq6AyVgCHL4vpvQIhAJhsD8m5Gb2%2BXH5zYXZc3Zv6kFHxNGxDrVd8W8ATJ33kKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1e%2FEsCrFVClqkNuIq3AM%2FEhqTVg0KBqkqx5UGD3eHfksyBrpWQzU8Rpc7Kj5UCnq4LRxMdUg962HjBnvgLpkr8Q7643yrXNHFG0NHSg5%2Bz3BZVmmBF2fmeOYz3Sf4hGNpCkQet8KAp301xuEwA3jW7oXSFobmhAhOAj%2BGEGUbyFKe0o%2F1ivmKE%2FyXxSneRq65Wdeldlxef9DVHfZecBZttFRumOqsm38USStkoIgYigoLyHAp2C9CnE%2BehPtvSgqF8jWW5uPOO4Y8viFFAZtiPZVgPt2H4mPVD1hC5YvYFbp8H4ZuQeJES1aXWzv7CiEcIY6Tw4%2FLQxhH6frEIgC5GP%2Bx8QBnQwfaiVx1iYC%2ByzXu6vS8MFk3Pu6B%2B9JW7vAPl09ZgB82EeyrHuTZY0UTTHFuV7UsSOP3YVzx%2BMNOg6zKDuwr7hFttY7kol5WjpOKFbb4IJSfH4C2VxQ21qH1PGCsJUZAVYmymINZU%2FxkZot%2BXPYAaqUg%2BPII28TBIiAwkIkVcJ9nsJLb3Lrek2n%2B9QBy%2FCmTtfvC3pSe1QZmgsz%2F9pFr1hygnTXErUP4bkqP59AtyF0BTf8ya7uRa4O%2FIjU5hgoHGb5QAvgl%2B0tFGGrIUz%2BG0C4rjSzWz9l68pvs1kULj4j0i3HUVjDXqrK9BjqkAenRPP8w76sXkO9o%2FnY%2FzDQP0LaseE7CqcTTF6pRT81BLQJIpvB3Mr%2BZJEN6kxtIMhMBfdMzU1cRYOGOcAAW%2BvVpUFVXDmKrQHTXmogcz1phcvO9ft6oGXHTrbfXoWP5g5%2B5ziOBtMgbRlM%2F4LL%2BjZFLjQPrBrfsOsgYPiDxSg%2Bgxaau%2F6E4%2BRG9MmoSKCMuQV0HbBhBU27mcolnu2DNlux1xgUR&X-Amz-Signature=db8ef5b215e81ea692db1d39af72c44b2ee7c505bd586518aa9d57b683da6a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645HWWBAR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc9PWMq6bzqa%2F4IAe8Hk%2BjkmPD%2Bclqq6AyVgCHL4vpvQIhAJhsD8m5Gb2%2BXH5zYXZc3Zv6kFHxNGxDrVd8W8ATJ33kKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1e%2FEsCrFVClqkNuIq3AM%2FEhqTVg0KBqkqx5UGD3eHfksyBrpWQzU8Rpc7Kj5UCnq4LRxMdUg962HjBnvgLpkr8Q7643yrXNHFG0NHSg5%2Bz3BZVmmBF2fmeOYz3Sf4hGNpCkQet8KAp301xuEwA3jW7oXSFobmhAhOAj%2BGEGUbyFKe0o%2F1ivmKE%2FyXxSneRq65Wdeldlxef9DVHfZecBZttFRumOqsm38USStkoIgYigoLyHAp2C9CnE%2BehPtvSgqF8jWW5uPOO4Y8viFFAZtiPZVgPt2H4mPVD1hC5YvYFbp8H4ZuQeJES1aXWzv7CiEcIY6Tw4%2FLQxhH6frEIgC5GP%2Bx8QBnQwfaiVx1iYC%2ByzXu6vS8MFk3Pu6B%2B9JW7vAPl09ZgB82EeyrHuTZY0UTTHFuV7UsSOP3YVzx%2BMNOg6zKDuwr7hFttY7kol5WjpOKFbb4IJSfH4C2VxQ21qH1PGCsJUZAVYmymINZU%2FxkZot%2BXPYAaqUg%2BPII28TBIiAwkIkVcJ9nsJLb3Lrek2n%2B9QBy%2FCmTtfvC3pSe1QZmgsz%2F9pFr1hygnTXErUP4bkqP59AtyF0BTf8ya7uRa4O%2FIjU5hgoHGb5QAvgl%2B0tFGGrIUz%2BG0C4rjSzWz9l68pvs1kULj4j0i3HUVjDXqrK9BjqkAenRPP8w76sXkO9o%2FnY%2FzDQP0LaseE7CqcTTF6pRT81BLQJIpvB3Mr%2BZJEN6kxtIMhMBfdMzU1cRYOGOcAAW%2BvVpUFVXDmKrQHTXmogcz1phcvO9ft6oGXHTrbfXoWP5g5%2B5ziOBtMgbRlM%2F4LL%2BjZFLjQPrBrfsOsgYPiDxSg%2Bgxaau%2F6E4%2BRG9MmoSKCMuQV0HbBhBU27mcolnu2DNlux1xgUR&X-Amz-Signature=151bd4e5fbe654d189869f96492e5375cf6aa20b6c25506f24e8413863bb895b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

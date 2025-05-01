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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZYWBG7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDD6bNX%2BRIILaazcGcXoo%2BdsdSxJJOiAN1qVW3L6IYNXAiEA9haI96zFDrZ6Y8TW5dLyYcu7wjgANWhJ22JwL1tBKpQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEMZ3xIGBqUuKklYyrcA0jiqBVTZiFeLeYR5GKMVrfT%2FQUUIjUXRnNUieMiYznbXxnBVluF%2FD%2BrADxP%2B4JjqPfGCfjRRdu58Q0NyXPbXqaslJUpiW7JleLaBnlXEEC58firCkpKuv8pOlKFFspkzSN5BXrT5%2BwZEvoHpKKhqSmc9Eeo9wi1zMzvAjHubjqxB9v4k7ZlWxohkd09kSF3T%2B2V1QRDfi6yM4bg9RCmhP0H7Hc71KZ0jbDZFCmRIsVhIfBBZwlUVS6oZ7V%2FMcWqr3zLz2qa6qRo1NN878GPvhBdUTT34sGdd2ItjFaaaIxlBsggTimfvnRSoihPtLBvuNWh7eQ4mzxCVvONCOfxUIdP3hZjB42XxNjLHAQU5rhrW6ekRZI2cz8E6yPZKqikwvecezyI7kAXlQZq17S4KToKAieCi35yTdog4bJLThbzVTlekqkfgwoNte06UvlyEb3c2w6AXNXj3UxfZfB%2FFEinLRlZnpoKi0rE47pgJK7xg9W8D3OnGlJupI%2Bp%2F8IxOmJF5Ki6r52wRCc%2FZHiAzz5XxJk%2BAKjHQOgLwcS4HdX8nKs84enGLl6elefG8w7qtrnRKfcATzbMh4n6EJ4PkiY2ezPOAz58nZkIMtDcOmTxuzHHXNl8HocBJ%2BslMPrHy8AGOqUBN97yiOdU8CFJa8GVQSKpIt1NJZSLBgnovN1qHGj3etwaWPUXAuhnPnTB63uvuCn4Tg66ofWBVbl3YgHG6dE7dY%2FgkkPDBbruBW2AMcpG3OGq1cwEC5eIy1Z416i6Wp29xZLNEtv8PtcAqMOPnpo0SIC7sECt%2FKnDoT61JRlDoX7YYO60fMzr378bJXP1NnuQN%2BS38hiFUgdNvFaAa0iHSeiEtoWM&X-Amz-Signature=b24e283f105a60a78eeaa1bcdc3cdd9cccc6b6945dd3e6d64541aa4e44fbc74d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZYWBG7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDD6bNX%2BRIILaazcGcXoo%2BdsdSxJJOiAN1qVW3L6IYNXAiEA9haI96zFDrZ6Y8TW5dLyYcu7wjgANWhJ22JwL1tBKpQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEMZ3xIGBqUuKklYyrcA0jiqBVTZiFeLeYR5GKMVrfT%2FQUUIjUXRnNUieMiYznbXxnBVluF%2FD%2BrADxP%2B4JjqPfGCfjRRdu58Q0NyXPbXqaslJUpiW7JleLaBnlXEEC58firCkpKuv8pOlKFFspkzSN5BXrT5%2BwZEvoHpKKhqSmc9Eeo9wi1zMzvAjHubjqxB9v4k7ZlWxohkd09kSF3T%2B2V1QRDfi6yM4bg9RCmhP0H7Hc71KZ0jbDZFCmRIsVhIfBBZwlUVS6oZ7V%2FMcWqr3zLz2qa6qRo1NN878GPvhBdUTT34sGdd2ItjFaaaIxlBsggTimfvnRSoihPtLBvuNWh7eQ4mzxCVvONCOfxUIdP3hZjB42XxNjLHAQU5rhrW6ekRZI2cz8E6yPZKqikwvecezyI7kAXlQZq17S4KToKAieCi35yTdog4bJLThbzVTlekqkfgwoNte06UvlyEb3c2w6AXNXj3UxfZfB%2FFEinLRlZnpoKi0rE47pgJK7xg9W8D3OnGlJupI%2Bp%2F8IxOmJF5Ki6r52wRCc%2FZHiAzz5XxJk%2BAKjHQOgLwcS4HdX8nKs84enGLl6elefG8w7qtrnRKfcATzbMh4n6EJ4PkiY2ezPOAz58nZkIMtDcOmTxuzHHXNl8HocBJ%2BslMPrHy8AGOqUBN97yiOdU8CFJa8GVQSKpIt1NJZSLBgnovN1qHGj3etwaWPUXAuhnPnTB63uvuCn4Tg66ofWBVbl3YgHG6dE7dY%2FgkkPDBbruBW2AMcpG3OGq1cwEC5eIy1Z416i6Wp29xZLNEtv8PtcAqMOPnpo0SIC7sECt%2FKnDoT61JRlDoX7YYO60fMzr378bJXP1NnuQN%2BS38hiFUgdNvFaAa0iHSeiEtoWM&X-Amz-Signature=6327be339bcb1e65c0f9544cf5b4b15a1f2c6258b7a8ddddcd4dfe5f521c58bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZYWBG7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDD6bNX%2BRIILaazcGcXoo%2BdsdSxJJOiAN1qVW3L6IYNXAiEA9haI96zFDrZ6Y8TW5dLyYcu7wjgANWhJ22JwL1tBKpQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEMZ3xIGBqUuKklYyrcA0jiqBVTZiFeLeYR5GKMVrfT%2FQUUIjUXRnNUieMiYznbXxnBVluF%2FD%2BrADxP%2B4JjqPfGCfjRRdu58Q0NyXPbXqaslJUpiW7JleLaBnlXEEC58firCkpKuv8pOlKFFspkzSN5BXrT5%2BwZEvoHpKKhqSmc9Eeo9wi1zMzvAjHubjqxB9v4k7ZlWxohkd09kSF3T%2B2V1QRDfi6yM4bg9RCmhP0H7Hc71KZ0jbDZFCmRIsVhIfBBZwlUVS6oZ7V%2FMcWqr3zLz2qa6qRo1NN878GPvhBdUTT34sGdd2ItjFaaaIxlBsggTimfvnRSoihPtLBvuNWh7eQ4mzxCVvONCOfxUIdP3hZjB42XxNjLHAQU5rhrW6ekRZI2cz8E6yPZKqikwvecezyI7kAXlQZq17S4KToKAieCi35yTdog4bJLThbzVTlekqkfgwoNte06UvlyEb3c2w6AXNXj3UxfZfB%2FFEinLRlZnpoKi0rE47pgJK7xg9W8D3OnGlJupI%2Bp%2F8IxOmJF5Ki6r52wRCc%2FZHiAzz5XxJk%2BAKjHQOgLwcS4HdX8nKs84enGLl6elefG8w7qtrnRKfcATzbMh4n6EJ4PkiY2ezPOAz58nZkIMtDcOmTxuzHHXNl8HocBJ%2BslMPrHy8AGOqUBN97yiOdU8CFJa8GVQSKpIt1NJZSLBgnovN1qHGj3etwaWPUXAuhnPnTB63uvuCn4Tg66ofWBVbl3YgHG6dE7dY%2FgkkPDBbruBW2AMcpG3OGq1cwEC5eIy1Z416i6Wp29xZLNEtv8PtcAqMOPnpo0SIC7sECt%2FKnDoT61JRlDoX7YYO60fMzr378bJXP1NnuQN%2BS38hiFUgdNvFaAa0iHSeiEtoWM&X-Amz-Signature=609cce3309e8cb3e53c300bdb28207cb7e8f4a13897c6e08fee6e3186befe63a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZYWBG7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDD6bNX%2BRIILaazcGcXoo%2BdsdSxJJOiAN1qVW3L6IYNXAiEA9haI96zFDrZ6Y8TW5dLyYcu7wjgANWhJ22JwL1tBKpQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEMZ3xIGBqUuKklYyrcA0jiqBVTZiFeLeYR5GKMVrfT%2FQUUIjUXRnNUieMiYznbXxnBVluF%2FD%2BrADxP%2B4JjqPfGCfjRRdu58Q0NyXPbXqaslJUpiW7JleLaBnlXEEC58firCkpKuv8pOlKFFspkzSN5BXrT5%2BwZEvoHpKKhqSmc9Eeo9wi1zMzvAjHubjqxB9v4k7ZlWxohkd09kSF3T%2B2V1QRDfi6yM4bg9RCmhP0H7Hc71KZ0jbDZFCmRIsVhIfBBZwlUVS6oZ7V%2FMcWqr3zLz2qa6qRo1NN878GPvhBdUTT34sGdd2ItjFaaaIxlBsggTimfvnRSoihPtLBvuNWh7eQ4mzxCVvONCOfxUIdP3hZjB42XxNjLHAQU5rhrW6ekRZI2cz8E6yPZKqikwvecezyI7kAXlQZq17S4KToKAieCi35yTdog4bJLThbzVTlekqkfgwoNte06UvlyEb3c2w6AXNXj3UxfZfB%2FFEinLRlZnpoKi0rE47pgJK7xg9W8D3OnGlJupI%2Bp%2F8IxOmJF5Ki6r52wRCc%2FZHiAzz5XxJk%2BAKjHQOgLwcS4HdX8nKs84enGLl6elefG8w7qtrnRKfcATzbMh4n6EJ4PkiY2ezPOAz58nZkIMtDcOmTxuzHHXNl8HocBJ%2BslMPrHy8AGOqUBN97yiOdU8CFJa8GVQSKpIt1NJZSLBgnovN1qHGj3etwaWPUXAuhnPnTB63uvuCn4Tg66ofWBVbl3YgHG6dE7dY%2FgkkPDBbruBW2AMcpG3OGq1cwEC5eIy1Z416i6Wp29xZLNEtv8PtcAqMOPnpo0SIC7sECt%2FKnDoT61JRlDoX7YYO60fMzr378bJXP1NnuQN%2BS38hiFUgdNvFaAa0iHSeiEtoWM&X-Amz-Signature=f0dc93883b7a5ec3dae192543c9f0e40aac6e9c9df516ce95a008cee7d923e15&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZYWBG7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDD6bNX%2BRIILaazcGcXoo%2BdsdSxJJOiAN1qVW3L6IYNXAiEA9haI96zFDrZ6Y8TW5dLyYcu7wjgANWhJ22JwL1tBKpQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEMZ3xIGBqUuKklYyrcA0jiqBVTZiFeLeYR5GKMVrfT%2FQUUIjUXRnNUieMiYznbXxnBVluF%2FD%2BrADxP%2B4JjqPfGCfjRRdu58Q0NyXPbXqaslJUpiW7JleLaBnlXEEC58firCkpKuv8pOlKFFspkzSN5BXrT5%2BwZEvoHpKKhqSmc9Eeo9wi1zMzvAjHubjqxB9v4k7ZlWxohkd09kSF3T%2B2V1QRDfi6yM4bg9RCmhP0H7Hc71KZ0jbDZFCmRIsVhIfBBZwlUVS6oZ7V%2FMcWqr3zLz2qa6qRo1NN878GPvhBdUTT34sGdd2ItjFaaaIxlBsggTimfvnRSoihPtLBvuNWh7eQ4mzxCVvONCOfxUIdP3hZjB42XxNjLHAQU5rhrW6ekRZI2cz8E6yPZKqikwvecezyI7kAXlQZq17S4KToKAieCi35yTdog4bJLThbzVTlekqkfgwoNte06UvlyEb3c2w6AXNXj3UxfZfB%2FFEinLRlZnpoKi0rE47pgJK7xg9W8D3OnGlJupI%2Bp%2F8IxOmJF5Ki6r52wRCc%2FZHiAzz5XxJk%2BAKjHQOgLwcS4HdX8nKs84enGLl6elefG8w7qtrnRKfcATzbMh4n6EJ4PkiY2ezPOAz58nZkIMtDcOmTxuzHHXNl8HocBJ%2BslMPrHy8AGOqUBN97yiOdU8CFJa8GVQSKpIt1NJZSLBgnovN1qHGj3etwaWPUXAuhnPnTB63uvuCn4Tg66ofWBVbl3YgHG6dE7dY%2FgkkPDBbruBW2AMcpG3OGq1cwEC5eIy1Z416i6Wp29xZLNEtv8PtcAqMOPnpo0SIC7sECt%2FKnDoT61JRlDoX7YYO60fMzr378bJXP1NnuQN%2BS38hiFUgdNvFaAa0iHSeiEtoWM&X-Amz-Signature=fdf270c7a4b0d8dd9973101daa05f99a20c48ebf5dadd23bbcc522a88bc4fa68&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZYWBG7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDD6bNX%2BRIILaazcGcXoo%2BdsdSxJJOiAN1qVW3L6IYNXAiEA9haI96zFDrZ6Y8TW5dLyYcu7wjgANWhJ22JwL1tBKpQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEMZ3xIGBqUuKklYyrcA0jiqBVTZiFeLeYR5GKMVrfT%2FQUUIjUXRnNUieMiYznbXxnBVluF%2FD%2BrADxP%2B4JjqPfGCfjRRdu58Q0NyXPbXqaslJUpiW7JleLaBnlXEEC58firCkpKuv8pOlKFFspkzSN5BXrT5%2BwZEvoHpKKhqSmc9Eeo9wi1zMzvAjHubjqxB9v4k7ZlWxohkd09kSF3T%2B2V1QRDfi6yM4bg9RCmhP0H7Hc71KZ0jbDZFCmRIsVhIfBBZwlUVS6oZ7V%2FMcWqr3zLz2qa6qRo1NN878GPvhBdUTT34sGdd2ItjFaaaIxlBsggTimfvnRSoihPtLBvuNWh7eQ4mzxCVvONCOfxUIdP3hZjB42XxNjLHAQU5rhrW6ekRZI2cz8E6yPZKqikwvecezyI7kAXlQZq17S4KToKAieCi35yTdog4bJLThbzVTlekqkfgwoNte06UvlyEb3c2w6AXNXj3UxfZfB%2FFEinLRlZnpoKi0rE47pgJK7xg9W8D3OnGlJupI%2Bp%2F8IxOmJF5Ki6r52wRCc%2FZHiAzz5XxJk%2BAKjHQOgLwcS4HdX8nKs84enGLl6elefG8w7qtrnRKfcATzbMh4n6EJ4PkiY2ezPOAz58nZkIMtDcOmTxuzHHXNl8HocBJ%2BslMPrHy8AGOqUBN97yiOdU8CFJa8GVQSKpIt1NJZSLBgnovN1qHGj3etwaWPUXAuhnPnTB63uvuCn4Tg66ofWBVbl3YgHG6dE7dY%2FgkkPDBbruBW2AMcpG3OGq1cwEC5eIy1Z416i6Wp29xZLNEtv8PtcAqMOPnpo0SIC7sECt%2FKnDoT61JRlDoX7YYO60fMzr378bJXP1NnuQN%2BS38hiFUgdNvFaAa0iHSeiEtoWM&X-Amz-Signature=84c400d263627c7a4390235647b1d849465d4f43011b75f96ae1016ee9499028&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZYWBG7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDD6bNX%2BRIILaazcGcXoo%2BdsdSxJJOiAN1qVW3L6IYNXAiEA9haI96zFDrZ6Y8TW5dLyYcu7wjgANWhJ22JwL1tBKpQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEMZ3xIGBqUuKklYyrcA0jiqBVTZiFeLeYR5GKMVrfT%2FQUUIjUXRnNUieMiYznbXxnBVluF%2FD%2BrADxP%2B4JjqPfGCfjRRdu58Q0NyXPbXqaslJUpiW7JleLaBnlXEEC58firCkpKuv8pOlKFFspkzSN5BXrT5%2BwZEvoHpKKhqSmc9Eeo9wi1zMzvAjHubjqxB9v4k7ZlWxohkd09kSF3T%2B2V1QRDfi6yM4bg9RCmhP0H7Hc71KZ0jbDZFCmRIsVhIfBBZwlUVS6oZ7V%2FMcWqr3zLz2qa6qRo1NN878GPvhBdUTT34sGdd2ItjFaaaIxlBsggTimfvnRSoihPtLBvuNWh7eQ4mzxCVvONCOfxUIdP3hZjB42XxNjLHAQU5rhrW6ekRZI2cz8E6yPZKqikwvecezyI7kAXlQZq17S4KToKAieCi35yTdog4bJLThbzVTlekqkfgwoNte06UvlyEb3c2w6AXNXj3UxfZfB%2FFEinLRlZnpoKi0rE47pgJK7xg9W8D3OnGlJupI%2Bp%2F8IxOmJF5Ki6r52wRCc%2FZHiAzz5XxJk%2BAKjHQOgLwcS4HdX8nKs84enGLl6elefG8w7qtrnRKfcATzbMh4n6EJ4PkiY2ezPOAz58nZkIMtDcOmTxuzHHXNl8HocBJ%2BslMPrHy8AGOqUBN97yiOdU8CFJa8GVQSKpIt1NJZSLBgnovN1qHGj3etwaWPUXAuhnPnTB63uvuCn4Tg66ofWBVbl3YgHG6dE7dY%2FgkkPDBbruBW2AMcpG3OGq1cwEC5eIy1Z416i6Wp29xZLNEtv8PtcAqMOPnpo0SIC7sECt%2FKnDoT61JRlDoX7YYO60fMzr378bJXP1NnuQN%2BS38hiFUgdNvFaAa0iHSeiEtoWM&X-Amz-Signature=b0b6ba4616876a76595daf85b27335dd75690e0117b761239aa88a404355efe9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

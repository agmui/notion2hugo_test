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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DREVXJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEjPSeaOkdT6MvMy7udD9IYZU2qET5iSzRJnIi8PPVraAiEAlpo7UWJrHrgH9Gf51WvIq%2BDn6alRzzv07Fq7J%2FTgxuIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPatR7ipFEmjHeS22SrcA6aKI%2BjefMaT5y2RnQDxvAMxPd1Oi7hxiFFhJk0ImjoBvMDEIsfZsIfB%2FqxHUu2lv3Cba%2F3bFfqm0CALAlPuADvIKW5AUW%2FgAasYiWKAXpEh%2FoQVFkR69mj%2FDZk247E2O7%2FO3VZ18ItLCzuGBEJ8v1Z%2Bai%2B8%2Bf5V1OvHBWFUYSa%2Fo6mKbJs7GxHXK6jzeDzivPq917ew95%2B8J%2B87qxPtNVz7BZfb40A7RN3hFkw%2BlEaNCkXX4OZXNCj5xCQa2%2FRM3Yf21vorszUFyccu31nBK87FmzdfILsh3SRtlAf%2BkV1UcB9RbBseyn%2FFFP2CwgohQWkKufHyAuo6cJc6PQ%2B3w9qlPJvo%2BNglluOrxM58qsPmFjgUD%2FMyyjTw9pWW9%2B99jqyEHABfVAzs3AsQtOU9lvV6xuN%2BAw5tEy%2BKBckGiDTGcaflslDyZmENXWxIqJyylXGvzYsTw8CL7XRvkkLRngXPFA5NWBuMfJGZuLDxxPty7gafgd4VUKErEDd%2F2DSYTSlxQky1Tb7%2Fk5CNHnRDx6KBUWcPGUmVPnKZvG6mJf8zt34Ec1fFkIgS7xHF1QYgmOX%2F5vPi5LlteEwrYeRwztabsq%2Bb7hpLMq3E81tyLncQy%2Bqu47M9hsG4o3K4MMGpsb8GOqUBUHEP3yas%2B1%2BFYXQlPba8XsUJ7kBVK2hlAtTlwgBw2tKSeRiRW9rTR5ARnZGwbYuNVeaE%2B8%2FH1MFpArAWupvB1NzLHn6Hvxe72UycM0ALIAYlCkR2PZS4M5xlGwQRzWf%2FQzxMv4JniCBCFkWVY1TeURKRnJs8YJOSvDgCbe%2FVEna5U5ZGQ%2FVmeUpifXkJJqDN0Tt3KI%2BMUtCW6l%2FpUa37bE5%2BXBeq&X-Amz-Signature=0e5457b6587d44ede13163af5afb9718f34fe5b1e2bf893ecc9d8c23da98e222&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DREVXJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEjPSeaOkdT6MvMy7udD9IYZU2qET5iSzRJnIi8PPVraAiEAlpo7UWJrHrgH9Gf51WvIq%2BDn6alRzzv07Fq7J%2FTgxuIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPatR7ipFEmjHeS22SrcA6aKI%2BjefMaT5y2RnQDxvAMxPd1Oi7hxiFFhJk0ImjoBvMDEIsfZsIfB%2FqxHUu2lv3Cba%2F3bFfqm0CALAlPuADvIKW5AUW%2FgAasYiWKAXpEh%2FoQVFkR69mj%2FDZk247E2O7%2FO3VZ18ItLCzuGBEJ8v1Z%2Bai%2B8%2Bf5V1OvHBWFUYSa%2Fo6mKbJs7GxHXK6jzeDzivPq917ew95%2B8J%2B87qxPtNVz7BZfb40A7RN3hFkw%2BlEaNCkXX4OZXNCj5xCQa2%2FRM3Yf21vorszUFyccu31nBK87FmzdfILsh3SRtlAf%2BkV1UcB9RbBseyn%2FFFP2CwgohQWkKufHyAuo6cJc6PQ%2B3w9qlPJvo%2BNglluOrxM58qsPmFjgUD%2FMyyjTw9pWW9%2B99jqyEHABfVAzs3AsQtOU9lvV6xuN%2BAw5tEy%2BKBckGiDTGcaflslDyZmENXWxIqJyylXGvzYsTw8CL7XRvkkLRngXPFA5NWBuMfJGZuLDxxPty7gafgd4VUKErEDd%2F2DSYTSlxQky1Tb7%2Fk5CNHnRDx6KBUWcPGUmVPnKZvG6mJf8zt34Ec1fFkIgS7xHF1QYgmOX%2F5vPi5LlteEwrYeRwztabsq%2Bb7hpLMq3E81tyLncQy%2Bqu47M9hsG4o3K4MMGpsb8GOqUBUHEP3yas%2B1%2BFYXQlPba8XsUJ7kBVK2hlAtTlwgBw2tKSeRiRW9rTR5ARnZGwbYuNVeaE%2B8%2FH1MFpArAWupvB1NzLHn6Hvxe72UycM0ALIAYlCkR2PZS4M5xlGwQRzWf%2FQzxMv4JniCBCFkWVY1TeURKRnJs8YJOSvDgCbe%2FVEna5U5ZGQ%2FVmeUpifXkJJqDN0Tt3KI%2BMUtCW6l%2FpUa37bE5%2BXBeq&X-Amz-Signature=4c06888ad47efcc4e26cba72a596ce5ed1e546c286592c735b4e99b91530de60&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DREVXJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEjPSeaOkdT6MvMy7udD9IYZU2qET5iSzRJnIi8PPVraAiEAlpo7UWJrHrgH9Gf51WvIq%2BDn6alRzzv07Fq7J%2FTgxuIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPatR7ipFEmjHeS22SrcA6aKI%2BjefMaT5y2RnQDxvAMxPd1Oi7hxiFFhJk0ImjoBvMDEIsfZsIfB%2FqxHUu2lv3Cba%2F3bFfqm0CALAlPuADvIKW5AUW%2FgAasYiWKAXpEh%2FoQVFkR69mj%2FDZk247E2O7%2FO3VZ18ItLCzuGBEJ8v1Z%2Bai%2B8%2Bf5V1OvHBWFUYSa%2Fo6mKbJs7GxHXK6jzeDzivPq917ew95%2B8J%2B87qxPtNVz7BZfb40A7RN3hFkw%2BlEaNCkXX4OZXNCj5xCQa2%2FRM3Yf21vorszUFyccu31nBK87FmzdfILsh3SRtlAf%2BkV1UcB9RbBseyn%2FFFP2CwgohQWkKufHyAuo6cJc6PQ%2B3w9qlPJvo%2BNglluOrxM58qsPmFjgUD%2FMyyjTw9pWW9%2B99jqyEHABfVAzs3AsQtOU9lvV6xuN%2BAw5tEy%2BKBckGiDTGcaflslDyZmENXWxIqJyylXGvzYsTw8CL7XRvkkLRngXPFA5NWBuMfJGZuLDxxPty7gafgd4VUKErEDd%2F2DSYTSlxQky1Tb7%2Fk5CNHnRDx6KBUWcPGUmVPnKZvG6mJf8zt34Ec1fFkIgS7xHF1QYgmOX%2F5vPi5LlteEwrYeRwztabsq%2Bb7hpLMq3E81tyLncQy%2Bqu47M9hsG4o3K4MMGpsb8GOqUBUHEP3yas%2B1%2BFYXQlPba8XsUJ7kBVK2hlAtTlwgBw2tKSeRiRW9rTR5ARnZGwbYuNVeaE%2B8%2FH1MFpArAWupvB1NzLHn6Hvxe72UycM0ALIAYlCkR2PZS4M5xlGwQRzWf%2FQzxMv4JniCBCFkWVY1TeURKRnJs8YJOSvDgCbe%2FVEna5U5ZGQ%2FVmeUpifXkJJqDN0Tt3KI%2BMUtCW6l%2FpUa37bE5%2BXBeq&X-Amz-Signature=b3d4c422c2744bd24e04896d988316567be5b96c880c03b641ddaacdf2e336ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DREVXJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEjPSeaOkdT6MvMy7udD9IYZU2qET5iSzRJnIi8PPVraAiEAlpo7UWJrHrgH9Gf51WvIq%2BDn6alRzzv07Fq7J%2FTgxuIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPatR7ipFEmjHeS22SrcA6aKI%2BjefMaT5y2RnQDxvAMxPd1Oi7hxiFFhJk0ImjoBvMDEIsfZsIfB%2FqxHUu2lv3Cba%2F3bFfqm0CALAlPuADvIKW5AUW%2FgAasYiWKAXpEh%2FoQVFkR69mj%2FDZk247E2O7%2FO3VZ18ItLCzuGBEJ8v1Z%2Bai%2B8%2Bf5V1OvHBWFUYSa%2Fo6mKbJs7GxHXK6jzeDzivPq917ew95%2B8J%2B87qxPtNVz7BZfb40A7RN3hFkw%2BlEaNCkXX4OZXNCj5xCQa2%2FRM3Yf21vorszUFyccu31nBK87FmzdfILsh3SRtlAf%2BkV1UcB9RbBseyn%2FFFP2CwgohQWkKufHyAuo6cJc6PQ%2B3w9qlPJvo%2BNglluOrxM58qsPmFjgUD%2FMyyjTw9pWW9%2B99jqyEHABfVAzs3AsQtOU9lvV6xuN%2BAw5tEy%2BKBckGiDTGcaflslDyZmENXWxIqJyylXGvzYsTw8CL7XRvkkLRngXPFA5NWBuMfJGZuLDxxPty7gafgd4VUKErEDd%2F2DSYTSlxQky1Tb7%2Fk5CNHnRDx6KBUWcPGUmVPnKZvG6mJf8zt34Ec1fFkIgS7xHF1QYgmOX%2F5vPi5LlteEwrYeRwztabsq%2Bb7hpLMq3E81tyLncQy%2Bqu47M9hsG4o3K4MMGpsb8GOqUBUHEP3yas%2B1%2BFYXQlPba8XsUJ7kBVK2hlAtTlwgBw2tKSeRiRW9rTR5ARnZGwbYuNVeaE%2B8%2FH1MFpArAWupvB1NzLHn6Hvxe72UycM0ALIAYlCkR2PZS4M5xlGwQRzWf%2FQzxMv4JniCBCFkWVY1TeURKRnJs8YJOSvDgCbe%2FVEna5U5ZGQ%2FVmeUpifXkJJqDN0Tt3KI%2BMUtCW6l%2FpUa37bE5%2BXBeq&X-Amz-Signature=dab872f336ff1eeafbd610061d535a43b91098ea4320f3a5a99e7c24712ff045&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DREVXJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEjPSeaOkdT6MvMy7udD9IYZU2qET5iSzRJnIi8PPVraAiEAlpo7UWJrHrgH9Gf51WvIq%2BDn6alRzzv07Fq7J%2FTgxuIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPatR7ipFEmjHeS22SrcA6aKI%2BjefMaT5y2RnQDxvAMxPd1Oi7hxiFFhJk0ImjoBvMDEIsfZsIfB%2FqxHUu2lv3Cba%2F3bFfqm0CALAlPuADvIKW5AUW%2FgAasYiWKAXpEh%2FoQVFkR69mj%2FDZk247E2O7%2FO3VZ18ItLCzuGBEJ8v1Z%2Bai%2B8%2Bf5V1OvHBWFUYSa%2Fo6mKbJs7GxHXK6jzeDzivPq917ew95%2B8J%2B87qxPtNVz7BZfb40A7RN3hFkw%2BlEaNCkXX4OZXNCj5xCQa2%2FRM3Yf21vorszUFyccu31nBK87FmzdfILsh3SRtlAf%2BkV1UcB9RbBseyn%2FFFP2CwgohQWkKufHyAuo6cJc6PQ%2B3w9qlPJvo%2BNglluOrxM58qsPmFjgUD%2FMyyjTw9pWW9%2B99jqyEHABfVAzs3AsQtOU9lvV6xuN%2BAw5tEy%2BKBckGiDTGcaflslDyZmENXWxIqJyylXGvzYsTw8CL7XRvkkLRngXPFA5NWBuMfJGZuLDxxPty7gafgd4VUKErEDd%2F2DSYTSlxQky1Tb7%2Fk5CNHnRDx6KBUWcPGUmVPnKZvG6mJf8zt34Ec1fFkIgS7xHF1QYgmOX%2F5vPi5LlteEwrYeRwztabsq%2Bb7hpLMq3E81tyLncQy%2Bqu47M9hsG4o3K4MMGpsb8GOqUBUHEP3yas%2B1%2BFYXQlPba8XsUJ7kBVK2hlAtTlwgBw2tKSeRiRW9rTR5ARnZGwbYuNVeaE%2B8%2FH1MFpArAWupvB1NzLHn6Hvxe72UycM0ALIAYlCkR2PZS4M5xlGwQRzWf%2FQzxMv4JniCBCFkWVY1TeURKRnJs8YJOSvDgCbe%2FVEna5U5ZGQ%2FVmeUpifXkJJqDN0Tt3KI%2BMUtCW6l%2FpUa37bE5%2BXBeq&X-Amz-Signature=81237514e0926e6ccf78bcab1ff02e90bcec211156e146ea7a35a2531a7893c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DREVXJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEjPSeaOkdT6MvMy7udD9IYZU2qET5iSzRJnIi8PPVraAiEAlpo7UWJrHrgH9Gf51WvIq%2BDn6alRzzv07Fq7J%2FTgxuIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPatR7ipFEmjHeS22SrcA6aKI%2BjefMaT5y2RnQDxvAMxPd1Oi7hxiFFhJk0ImjoBvMDEIsfZsIfB%2FqxHUu2lv3Cba%2F3bFfqm0CALAlPuADvIKW5AUW%2FgAasYiWKAXpEh%2FoQVFkR69mj%2FDZk247E2O7%2FO3VZ18ItLCzuGBEJ8v1Z%2Bai%2B8%2Bf5V1OvHBWFUYSa%2Fo6mKbJs7GxHXK6jzeDzivPq917ew95%2B8J%2B87qxPtNVz7BZfb40A7RN3hFkw%2BlEaNCkXX4OZXNCj5xCQa2%2FRM3Yf21vorszUFyccu31nBK87FmzdfILsh3SRtlAf%2BkV1UcB9RbBseyn%2FFFP2CwgohQWkKufHyAuo6cJc6PQ%2B3w9qlPJvo%2BNglluOrxM58qsPmFjgUD%2FMyyjTw9pWW9%2B99jqyEHABfVAzs3AsQtOU9lvV6xuN%2BAw5tEy%2BKBckGiDTGcaflslDyZmENXWxIqJyylXGvzYsTw8CL7XRvkkLRngXPFA5NWBuMfJGZuLDxxPty7gafgd4VUKErEDd%2F2DSYTSlxQky1Tb7%2Fk5CNHnRDx6KBUWcPGUmVPnKZvG6mJf8zt34Ec1fFkIgS7xHF1QYgmOX%2F5vPi5LlteEwrYeRwztabsq%2Bb7hpLMq3E81tyLncQy%2Bqu47M9hsG4o3K4MMGpsb8GOqUBUHEP3yas%2B1%2BFYXQlPba8XsUJ7kBVK2hlAtTlwgBw2tKSeRiRW9rTR5ARnZGwbYuNVeaE%2B8%2FH1MFpArAWupvB1NzLHn6Hvxe72UycM0ALIAYlCkR2PZS4M5xlGwQRzWf%2FQzxMv4JniCBCFkWVY1TeURKRnJs8YJOSvDgCbe%2FVEna5U5ZGQ%2FVmeUpifXkJJqDN0Tt3KI%2BMUtCW6l%2FpUa37bE5%2BXBeq&X-Amz-Signature=98517b3bb216ef106afae20808f53fac2d44b70ae79794b1ce430194e8fceeec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DREVXJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEjPSeaOkdT6MvMy7udD9IYZU2qET5iSzRJnIi8PPVraAiEAlpo7UWJrHrgH9Gf51WvIq%2BDn6alRzzv07Fq7J%2FTgxuIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPatR7ipFEmjHeS22SrcA6aKI%2BjefMaT5y2RnQDxvAMxPd1Oi7hxiFFhJk0ImjoBvMDEIsfZsIfB%2FqxHUu2lv3Cba%2F3bFfqm0CALAlPuADvIKW5AUW%2FgAasYiWKAXpEh%2FoQVFkR69mj%2FDZk247E2O7%2FO3VZ18ItLCzuGBEJ8v1Z%2Bai%2B8%2Bf5V1OvHBWFUYSa%2Fo6mKbJs7GxHXK6jzeDzivPq917ew95%2B8J%2B87qxPtNVz7BZfb40A7RN3hFkw%2BlEaNCkXX4OZXNCj5xCQa2%2FRM3Yf21vorszUFyccu31nBK87FmzdfILsh3SRtlAf%2BkV1UcB9RbBseyn%2FFFP2CwgohQWkKufHyAuo6cJc6PQ%2B3w9qlPJvo%2BNglluOrxM58qsPmFjgUD%2FMyyjTw9pWW9%2B99jqyEHABfVAzs3AsQtOU9lvV6xuN%2BAw5tEy%2BKBckGiDTGcaflslDyZmENXWxIqJyylXGvzYsTw8CL7XRvkkLRngXPFA5NWBuMfJGZuLDxxPty7gafgd4VUKErEDd%2F2DSYTSlxQky1Tb7%2Fk5CNHnRDx6KBUWcPGUmVPnKZvG6mJf8zt34Ec1fFkIgS7xHF1QYgmOX%2F5vPi5LlteEwrYeRwztabsq%2Bb7hpLMq3E81tyLncQy%2Bqu47M9hsG4o3K4MMGpsb8GOqUBUHEP3yas%2B1%2BFYXQlPba8XsUJ7kBVK2hlAtTlwgBw2tKSeRiRW9rTR5ARnZGwbYuNVeaE%2B8%2FH1MFpArAWupvB1NzLHn6Hvxe72UycM0ALIAYlCkR2PZS4M5xlGwQRzWf%2FQzxMv4JniCBCFkWVY1TeURKRnJs8YJOSvDgCbe%2FVEna5U5ZGQ%2FVmeUpifXkJJqDN0Tt3KI%2BMUtCW6l%2FpUa37bE5%2BXBeq&X-Amz-Signature=991e9e159e697ab08377a92d48760d2416a7484488348901c67054865f62d695&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

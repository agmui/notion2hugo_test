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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYMK5Y6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJByRiCOM6ck%2BbfaorEgcMzRM5MH6FgKDNJMNwpSNIlAiEAlhu0S9mJ36ZEKLsTdkvb%2BAw4mxGazqsm1ibWwHYNRngq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJeUclVj8wGKL8eR%2BSrcA2VdSnNSUsyFitjMUDB%2BlPEo1o4K3vZ8eXCYpi160nE3hHUT0YnxxdAiCpYE9CRsp6ED0TT6R%2F6AyJMq6r9o5NGH6vtYll9CCwSczQdLdmVdtJxkBrmskNIcBL4Yc1wA4BYDh0yRrhnaaCOP2Kv0yV81ZiAruUy7Xk5J5ESfvqmyT%2FF%2B1SYNWp7DYSYbPcL4J6N6ehIFwrR6I1IMzjHRBqiK2JGo%2FMLolihWI2eZPbkCy%2FoIv1RcijKOStDdHt9l6zKtnj0bpPXxiyroXcHGyxKxTYN%2F0pJ0vacpNC7Z3zmPA5hIkLBxoTzR1z%2Bq0x7tH3HFqEpSdTIio4JXnf%2BC%2BsRS59mLJ7GvvlJRwDuel9kDBXrY00SGdMZEscZXzKK6rYX7ojmVglr5dYoShWoypV4Qj1WzCWh50qBEp9%2FI9d6rIKA%2BKB7YMtOdfL9qNYtezi%2FvyFF59iLPvKQPkobApelh7Qad0KKmz6ozPBP2KCnMd1x68OACgM5SaXJDmY4OqKm4ghE1F7lBpu6CczKp2ftw2pbIiSB3gGPlHKKE6QgGXdwE9NyCCek69SR%2B8bJTnvuXh6wcc3o5tYjfv3FIJf3CymjnQgdwIfxrc%2BaLyFrBerj%2FmUxGKHWvErS%2FMNzBt70GOqUB06ooWMJgBz%2Beh56XQvRe5dlg08q4cmgB1V3ap%2BL3%2FTGUVGaCe3nGDQtNMKYdPNgXs5qMprUvrXkloWXHU7QtPQg%2BTDQ8N8NL%2FOQsQfwftQY98WFq%2FY%2FqVdEZxhy8VG6sgwLfKkOiOsT80lGw764sWGGaZAsAdsNHUtsJNAZcVqis2wNfEyNECofd0GhfT7CnS0dehCKF8YFqH5%2BF%2FrSY6t%2Bu%2BxtS&X-Amz-Signature=20023c5ebb04c0ad6f3fbbc203e75ae2db98c0a30237553746b67ff8df459ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYMK5Y6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJByRiCOM6ck%2BbfaorEgcMzRM5MH6FgKDNJMNwpSNIlAiEAlhu0S9mJ36ZEKLsTdkvb%2BAw4mxGazqsm1ibWwHYNRngq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJeUclVj8wGKL8eR%2BSrcA2VdSnNSUsyFitjMUDB%2BlPEo1o4K3vZ8eXCYpi160nE3hHUT0YnxxdAiCpYE9CRsp6ED0TT6R%2F6AyJMq6r9o5NGH6vtYll9CCwSczQdLdmVdtJxkBrmskNIcBL4Yc1wA4BYDh0yRrhnaaCOP2Kv0yV81ZiAruUy7Xk5J5ESfvqmyT%2FF%2B1SYNWp7DYSYbPcL4J6N6ehIFwrR6I1IMzjHRBqiK2JGo%2FMLolihWI2eZPbkCy%2FoIv1RcijKOStDdHt9l6zKtnj0bpPXxiyroXcHGyxKxTYN%2F0pJ0vacpNC7Z3zmPA5hIkLBxoTzR1z%2Bq0x7tH3HFqEpSdTIio4JXnf%2BC%2BsRS59mLJ7GvvlJRwDuel9kDBXrY00SGdMZEscZXzKK6rYX7ojmVglr5dYoShWoypV4Qj1WzCWh50qBEp9%2FI9d6rIKA%2BKB7YMtOdfL9qNYtezi%2FvyFF59iLPvKQPkobApelh7Qad0KKmz6ozPBP2KCnMd1x68OACgM5SaXJDmY4OqKm4ghE1F7lBpu6CczKp2ftw2pbIiSB3gGPlHKKE6QgGXdwE9NyCCek69SR%2B8bJTnvuXh6wcc3o5tYjfv3FIJf3CymjnQgdwIfxrc%2BaLyFrBerj%2FmUxGKHWvErS%2FMNzBt70GOqUB06ooWMJgBz%2Beh56XQvRe5dlg08q4cmgB1V3ap%2BL3%2FTGUVGaCe3nGDQtNMKYdPNgXs5qMprUvrXkloWXHU7QtPQg%2BTDQ8N8NL%2FOQsQfwftQY98WFq%2FY%2FqVdEZxhy8VG6sgwLfKkOiOsT80lGw764sWGGaZAsAdsNHUtsJNAZcVqis2wNfEyNECofd0GhfT7CnS0dehCKF8YFqH5%2BF%2FrSY6t%2Bu%2BxtS&X-Amz-Signature=d6a68ac615e354ec7ab2b47d264354c98bf5bba4a7cadd8b18b909a88eee40a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYMK5Y6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJByRiCOM6ck%2BbfaorEgcMzRM5MH6FgKDNJMNwpSNIlAiEAlhu0S9mJ36ZEKLsTdkvb%2BAw4mxGazqsm1ibWwHYNRngq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJeUclVj8wGKL8eR%2BSrcA2VdSnNSUsyFitjMUDB%2BlPEo1o4K3vZ8eXCYpi160nE3hHUT0YnxxdAiCpYE9CRsp6ED0TT6R%2F6AyJMq6r9o5NGH6vtYll9CCwSczQdLdmVdtJxkBrmskNIcBL4Yc1wA4BYDh0yRrhnaaCOP2Kv0yV81ZiAruUy7Xk5J5ESfvqmyT%2FF%2B1SYNWp7DYSYbPcL4J6N6ehIFwrR6I1IMzjHRBqiK2JGo%2FMLolihWI2eZPbkCy%2FoIv1RcijKOStDdHt9l6zKtnj0bpPXxiyroXcHGyxKxTYN%2F0pJ0vacpNC7Z3zmPA5hIkLBxoTzR1z%2Bq0x7tH3HFqEpSdTIio4JXnf%2BC%2BsRS59mLJ7GvvlJRwDuel9kDBXrY00SGdMZEscZXzKK6rYX7ojmVglr5dYoShWoypV4Qj1WzCWh50qBEp9%2FI9d6rIKA%2BKB7YMtOdfL9qNYtezi%2FvyFF59iLPvKQPkobApelh7Qad0KKmz6ozPBP2KCnMd1x68OACgM5SaXJDmY4OqKm4ghE1F7lBpu6CczKp2ftw2pbIiSB3gGPlHKKE6QgGXdwE9NyCCek69SR%2B8bJTnvuXh6wcc3o5tYjfv3FIJf3CymjnQgdwIfxrc%2BaLyFrBerj%2FmUxGKHWvErS%2FMNzBt70GOqUB06ooWMJgBz%2Beh56XQvRe5dlg08q4cmgB1V3ap%2BL3%2FTGUVGaCe3nGDQtNMKYdPNgXs5qMprUvrXkloWXHU7QtPQg%2BTDQ8N8NL%2FOQsQfwftQY98WFq%2FY%2FqVdEZxhy8VG6sgwLfKkOiOsT80lGw764sWGGaZAsAdsNHUtsJNAZcVqis2wNfEyNECofd0GhfT7CnS0dehCKF8YFqH5%2BF%2FrSY6t%2Bu%2BxtS&X-Amz-Signature=de1a795b90059e2e135a8b5b5c4fe159fa11727638c85beecbbd581a52f1a68b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYMK5Y6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJByRiCOM6ck%2BbfaorEgcMzRM5MH6FgKDNJMNwpSNIlAiEAlhu0S9mJ36ZEKLsTdkvb%2BAw4mxGazqsm1ibWwHYNRngq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJeUclVj8wGKL8eR%2BSrcA2VdSnNSUsyFitjMUDB%2BlPEo1o4K3vZ8eXCYpi160nE3hHUT0YnxxdAiCpYE9CRsp6ED0TT6R%2F6AyJMq6r9o5NGH6vtYll9CCwSczQdLdmVdtJxkBrmskNIcBL4Yc1wA4BYDh0yRrhnaaCOP2Kv0yV81ZiAruUy7Xk5J5ESfvqmyT%2FF%2B1SYNWp7DYSYbPcL4J6N6ehIFwrR6I1IMzjHRBqiK2JGo%2FMLolihWI2eZPbkCy%2FoIv1RcijKOStDdHt9l6zKtnj0bpPXxiyroXcHGyxKxTYN%2F0pJ0vacpNC7Z3zmPA5hIkLBxoTzR1z%2Bq0x7tH3HFqEpSdTIio4JXnf%2BC%2BsRS59mLJ7GvvlJRwDuel9kDBXrY00SGdMZEscZXzKK6rYX7ojmVglr5dYoShWoypV4Qj1WzCWh50qBEp9%2FI9d6rIKA%2BKB7YMtOdfL9qNYtezi%2FvyFF59iLPvKQPkobApelh7Qad0KKmz6ozPBP2KCnMd1x68OACgM5SaXJDmY4OqKm4ghE1F7lBpu6CczKp2ftw2pbIiSB3gGPlHKKE6QgGXdwE9NyCCek69SR%2B8bJTnvuXh6wcc3o5tYjfv3FIJf3CymjnQgdwIfxrc%2BaLyFrBerj%2FmUxGKHWvErS%2FMNzBt70GOqUB06ooWMJgBz%2Beh56XQvRe5dlg08q4cmgB1V3ap%2BL3%2FTGUVGaCe3nGDQtNMKYdPNgXs5qMprUvrXkloWXHU7QtPQg%2BTDQ8N8NL%2FOQsQfwftQY98WFq%2FY%2FqVdEZxhy8VG6sgwLfKkOiOsT80lGw764sWGGaZAsAdsNHUtsJNAZcVqis2wNfEyNECofd0GhfT7CnS0dehCKF8YFqH5%2BF%2FrSY6t%2Bu%2BxtS&X-Amz-Signature=77482ef649332e909aa16d784c1acc99e5ee9686ddb5708bb3d915dea77a37fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYMK5Y6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJByRiCOM6ck%2BbfaorEgcMzRM5MH6FgKDNJMNwpSNIlAiEAlhu0S9mJ36ZEKLsTdkvb%2BAw4mxGazqsm1ibWwHYNRngq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJeUclVj8wGKL8eR%2BSrcA2VdSnNSUsyFitjMUDB%2BlPEo1o4K3vZ8eXCYpi160nE3hHUT0YnxxdAiCpYE9CRsp6ED0TT6R%2F6AyJMq6r9o5NGH6vtYll9CCwSczQdLdmVdtJxkBrmskNIcBL4Yc1wA4BYDh0yRrhnaaCOP2Kv0yV81ZiAruUy7Xk5J5ESfvqmyT%2FF%2B1SYNWp7DYSYbPcL4J6N6ehIFwrR6I1IMzjHRBqiK2JGo%2FMLolihWI2eZPbkCy%2FoIv1RcijKOStDdHt9l6zKtnj0bpPXxiyroXcHGyxKxTYN%2F0pJ0vacpNC7Z3zmPA5hIkLBxoTzR1z%2Bq0x7tH3HFqEpSdTIio4JXnf%2BC%2BsRS59mLJ7GvvlJRwDuel9kDBXrY00SGdMZEscZXzKK6rYX7ojmVglr5dYoShWoypV4Qj1WzCWh50qBEp9%2FI9d6rIKA%2BKB7YMtOdfL9qNYtezi%2FvyFF59iLPvKQPkobApelh7Qad0KKmz6ozPBP2KCnMd1x68OACgM5SaXJDmY4OqKm4ghE1F7lBpu6CczKp2ftw2pbIiSB3gGPlHKKE6QgGXdwE9NyCCek69SR%2B8bJTnvuXh6wcc3o5tYjfv3FIJf3CymjnQgdwIfxrc%2BaLyFrBerj%2FmUxGKHWvErS%2FMNzBt70GOqUB06ooWMJgBz%2Beh56XQvRe5dlg08q4cmgB1V3ap%2BL3%2FTGUVGaCe3nGDQtNMKYdPNgXs5qMprUvrXkloWXHU7QtPQg%2BTDQ8N8NL%2FOQsQfwftQY98WFq%2FY%2FqVdEZxhy8VG6sgwLfKkOiOsT80lGw764sWGGaZAsAdsNHUtsJNAZcVqis2wNfEyNECofd0GhfT7CnS0dehCKF8YFqH5%2BF%2FrSY6t%2Bu%2BxtS&X-Amz-Signature=eaa1d8c70644ca2f9f8b80e6e20cd6917547845f9cb6b35b6e33a41a9b90de44&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYMK5Y6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJByRiCOM6ck%2BbfaorEgcMzRM5MH6FgKDNJMNwpSNIlAiEAlhu0S9mJ36ZEKLsTdkvb%2BAw4mxGazqsm1ibWwHYNRngq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJeUclVj8wGKL8eR%2BSrcA2VdSnNSUsyFitjMUDB%2BlPEo1o4K3vZ8eXCYpi160nE3hHUT0YnxxdAiCpYE9CRsp6ED0TT6R%2F6AyJMq6r9o5NGH6vtYll9CCwSczQdLdmVdtJxkBrmskNIcBL4Yc1wA4BYDh0yRrhnaaCOP2Kv0yV81ZiAruUy7Xk5J5ESfvqmyT%2FF%2B1SYNWp7DYSYbPcL4J6N6ehIFwrR6I1IMzjHRBqiK2JGo%2FMLolihWI2eZPbkCy%2FoIv1RcijKOStDdHt9l6zKtnj0bpPXxiyroXcHGyxKxTYN%2F0pJ0vacpNC7Z3zmPA5hIkLBxoTzR1z%2Bq0x7tH3HFqEpSdTIio4JXnf%2BC%2BsRS59mLJ7GvvlJRwDuel9kDBXrY00SGdMZEscZXzKK6rYX7ojmVglr5dYoShWoypV4Qj1WzCWh50qBEp9%2FI9d6rIKA%2BKB7YMtOdfL9qNYtezi%2FvyFF59iLPvKQPkobApelh7Qad0KKmz6ozPBP2KCnMd1x68OACgM5SaXJDmY4OqKm4ghE1F7lBpu6CczKp2ftw2pbIiSB3gGPlHKKE6QgGXdwE9NyCCek69SR%2B8bJTnvuXh6wcc3o5tYjfv3FIJf3CymjnQgdwIfxrc%2BaLyFrBerj%2FmUxGKHWvErS%2FMNzBt70GOqUB06ooWMJgBz%2Beh56XQvRe5dlg08q4cmgB1V3ap%2BL3%2FTGUVGaCe3nGDQtNMKYdPNgXs5qMprUvrXkloWXHU7QtPQg%2BTDQ8N8NL%2FOQsQfwftQY98WFq%2FY%2FqVdEZxhy8VG6sgwLfKkOiOsT80lGw764sWGGaZAsAdsNHUtsJNAZcVqis2wNfEyNECofd0GhfT7CnS0dehCKF8YFqH5%2BF%2FrSY6t%2Bu%2BxtS&X-Amz-Signature=4a4b0950849ec3cc7df5169a7e7811b82e0b5cb67f446cd89b1fe814bdf23184&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYMK5Y6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJByRiCOM6ck%2BbfaorEgcMzRM5MH6FgKDNJMNwpSNIlAiEAlhu0S9mJ36ZEKLsTdkvb%2BAw4mxGazqsm1ibWwHYNRngq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJeUclVj8wGKL8eR%2BSrcA2VdSnNSUsyFitjMUDB%2BlPEo1o4K3vZ8eXCYpi160nE3hHUT0YnxxdAiCpYE9CRsp6ED0TT6R%2F6AyJMq6r9o5NGH6vtYll9CCwSczQdLdmVdtJxkBrmskNIcBL4Yc1wA4BYDh0yRrhnaaCOP2Kv0yV81ZiAruUy7Xk5J5ESfvqmyT%2FF%2B1SYNWp7DYSYbPcL4J6N6ehIFwrR6I1IMzjHRBqiK2JGo%2FMLolihWI2eZPbkCy%2FoIv1RcijKOStDdHt9l6zKtnj0bpPXxiyroXcHGyxKxTYN%2F0pJ0vacpNC7Z3zmPA5hIkLBxoTzR1z%2Bq0x7tH3HFqEpSdTIio4JXnf%2BC%2BsRS59mLJ7GvvlJRwDuel9kDBXrY00SGdMZEscZXzKK6rYX7ojmVglr5dYoShWoypV4Qj1WzCWh50qBEp9%2FI9d6rIKA%2BKB7YMtOdfL9qNYtezi%2FvyFF59iLPvKQPkobApelh7Qad0KKmz6ozPBP2KCnMd1x68OACgM5SaXJDmY4OqKm4ghE1F7lBpu6CczKp2ftw2pbIiSB3gGPlHKKE6QgGXdwE9NyCCek69SR%2B8bJTnvuXh6wcc3o5tYjfv3FIJf3CymjnQgdwIfxrc%2BaLyFrBerj%2FmUxGKHWvErS%2FMNzBt70GOqUB06ooWMJgBz%2Beh56XQvRe5dlg08q4cmgB1V3ap%2BL3%2FTGUVGaCe3nGDQtNMKYdPNgXs5qMprUvrXkloWXHU7QtPQg%2BTDQ8N8NL%2FOQsQfwftQY98WFq%2FY%2FqVdEZxhy8VG6sgwLfKkOiOsT80lGw764sWGGaZAsAdsNHUtsJNAZcVqis2wNfEyNECofd0GhfT7CnS0dehCKF8YFqH5%2BF%2FrSY6t%2Bu%2BxtS&X-Amz-Signature=fa28e10845f181e5b813c895cfdcd4b4aa9453e219d45ba4577a6546ba5ad3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

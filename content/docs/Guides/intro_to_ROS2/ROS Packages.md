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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGBPDE6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCwqMtKt3B%2FvPjRTBxrDgCraMm7kamMsTyAVciK9Se4ZAIhAMfOyzOaik2PmsnWQHEU55QuJWqR6ddOsxvsQlNlFYY0Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyzJKcBdR3foUWqAi4q3AM6IMXr0AclsWUl%2F6CfRLezQPI4%2BnF7dkOCsqsRtQFYzy%2Bl1qxEtSF%2BJN3BtI%2BHRyFWuwGVnIS9jNk038OhTNqhtFtW635WNIE9Y6e3iJlvtGdMMyP4htMOtyA%2FqUhzApNgKz4w59%2FNivDiwmC4DKxyoNNsNpclKEh1qrDPFNzZwIYNQuL0RXdAa0eRAc1aGxhuEoWtqwpMEB2I90tdihuOd2cAzynywvU5o%2BFCZiUuIZCCyh2bjfTUDz%2BZ4s%2Bs6I7bRHTeWFn8S%2F1Nj2%2BKgKj1T5zrqejHurNG054GV7fuTLv%2B14CCrH6uAZF0GinsRsDKmXQK1C3AKx47eJav37xi7%2FtgMKHyF9m%2FgCs12R%2BEcAU1I8ycB28fUgB6bdCtZd9xFlHK3Ih1Ajs%2BLBsVrpTs%2BYeyLSLGE%2FgGtCroFgE3HPL2x1Y2Y1htpxM5%2F9eLtnK2DfqqtBlRzwyWvxZiMUoi1qh1cnVikeyerKguST4t7njGT7AOoXnCMoZXJlKA76yEaycNoyhU3nAQZ6ChoM7NRWWWGFZehMW3OC%2B5T8RXzjngFgn0S74uHthYSMiElV1giQzhgb3achzsv4VsXes%2FziWzvKDNDcOTewiQHevTh1oEOJCQfb62lMXkXzDLyqnDBjqkAUMpwZskQ0X2y7puzQoDL6n2SbKbYskWFcfHuAHuh9FLxqFPV1mxaW4%2FqWoRuupyNc44u0aZ%2FgBmkk40tb01%2FJ7x29nWwgTq%2FkOan0Z0l169ubQFsGe8OnOo%2BeBVFg12aHaHB0r0C2Ls72fIl9uERpLdY2vZsHOQ1LdKkzKtzJOpiG9Xt%2FvDWowXo%2FOjUdAUta7wv570uvu9wdVBvHmhpd%2FNQSe6&X-Amz-Signature=ba5f4ca19227f0ccf3c82ff4e8a0ffa1a6f9a6e263de0133b35c176cd103efd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGBPDE6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCwqMtKt3B%2FvPjRTBxrDgCraMm7kamMsTyAVciK9Se4ZAIhAMfOyzOaik2PmsnWQHEU55QuJWqR6ddOsxvsQlNlFYY0Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyzJKcBdR3foUWqAi4q3AM6IMXr0AclsWUl%2F6CfRLezQPI4%2BnF7dkOCsqsRtQFYzy%2Bl1qxEtSF%2BJN3BtI%2BHRyFWuwGVnIS9jNk038OhTNqhtFtW635WNIE9Y6e3iJlvtGdMMyP4htMOtyA%2FqUhzApNgKz4w59%2FNivDiwmC4DKxyoNNsNpclKEh1qrDPFNzZwIYNQuL0RXdAa0eRAc1aGxhuEoWtqwpMEB2I90tdihuOd2cAzynywvU5o%2BFCZiUuIZCCyh2bjfTUDz%2BZ4s%2Bs6I7bRHTeWFn8S%2F1Nj2%2BKgKj1T5zrqejHurNG054GV7fuTLv%2B14CCrH6uAZF0GinsRsDKmXQK1C3AKx47eJav37xi7%2FtgMKHyF9m%2FgCs12R%2BEcAU1I8ycB28fUgB6bdCtZd9xFlHK3Ih1Ajs%2BLBsVrpTs%2BYeyLSLGE%2FgGtCroFgE3HPL2x1Y2Y1htpxM5%2F9eLtnK2DfqqtBlRzwyWvxZiMUoi1qh1cnVikeyerKguST4t7njGT7AOoXnCMoZXJlKA76yEaycNoyhU3nAQZ6ChoM7NRWWWGFZehMW3OC%2B5T8RXzjngFgn0S74uHthYSMiElV1giQzhgb3achzsv4VsXes%2FziWzvKDNDcOTewiQHevTh1oEOJCQfb62lMXkXzDLyqnDBjqkAUMpwZskQ0X2y7puzQoDL6n2SbKbYskWFcfHuAHuh9FLxqFPV1mxaW4%2FqWoRuupyNc44u0aZ%2FgBmkk40tb01%2FJ7x29nWwgTq%2FkOan0Z0l169ubQFsGe8OnOo%2BeBVFg12aHaHB0r0C2Ls72fIl9uERpLdY2vZsHOQ1LdKkzKtzJOpiG9Xt%2FvDWowXo%2FOjUdAUta7wv570uvu9wdVBvHmhpd%2FNQSe6&X-Amz-Signature=3098a8653dcefbbc2349ca5b915ad869a6464cf8b5a123cfd59bb3854e0c5dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGBPDE6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCwqMtKt3B%2FvPjRTBxrDgCraMm7kamMsTyAVciK9Se4ZAIhAMfOyzOaik2PmsnWQHEU55QuJWqR6ddOsxvsQlNlFYY0Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyzJKcBdR3foUWqAi4q3AM6IMXr0AclsWUl%2F6CfRLezQPI4%2BnF7dkOCsqsRtQFYzy%2Bl1qxEtSF%2BJN3BtI%2BHRyFWuwGVnIS9jNk038OhTNqhtFtW635WNIE9Y6e3iJlvtGdMMyP4htMOtyA%2FqUhzApNgKz4w59%2FNivDiwmC4DKxyoNNsNpclKEh1qrDPFNzZwIYNQuL0RXdAa0eRAc1aGxhuEoWtqwpMEB2I90tdihuOd2cAzynywvU5o%2BFCZiUuIZCCyh2bjfTUDz%2BZ4s%2Bs6I7bRHTeWFn8S%2F1Nj2%2BKgKj1T5zrqejHurNG054GV7fuTLv%2B14CCrH6uAZF0GinsRsDKmXQK1C3AKx47eJav37xi7%2FtgMKHyF9m%2FgCs12R%2BEcAU1I8ycB28fUgB6bdCtZd9xFlHK3Ih1Ajs%2BLBsVrpTs%2BYeyLSLGE%2FgGtCroFgE3HPL2x1Y2Y1htpxM5%2F9eLtnK2DfqqtBlRzwyWvxZiMUoi1qh1cnVikeyerKguST4t7njGT7AOoXnCMoZXJlKA76yEaycNoyhU3nAQZ6ChoM7NRWWWGFZehMW3OC%2B5T8RXzjngFgn0S74uHthYSMiElV1giQzhgb3achzsv4VsXes%2FziWzvKDNDcOTewiQHevTh1oEOJCQfb62lMXkXzDLyqnDBjqkAUMpwZskQ0X2y7puzQoDL6n2SbKbYskWFcfHuAHuh9FLxqFPV1mxaW4%2FqWoRuupyNc44u0aZ%2FgBmkk40tb01%2FJ7x29nWwgTq%2FkOan0Z0l169ubQFsGe8OnOo%2BeBVFg12aHaHB0r0C2Ls72fIl9uERpLdY2vZsHOQ1LdKkzKtzJOpiG9Xt%2FvDWowXo%2FOjUdAUta7wv570uvu9wdVBvHmhpd%2FNQSe6&X-Amz-Signature=59ab2926e37839954e51c19ecb81cc28c7cc76e98487d11ce4eccf5ba3408e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGBPDE6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCwqMtKt3B%2FvPjRTBxrDgCraMm7kamMsTyAVciK9Se4ZAIhAMfOyzOaik2PmsnWQHEU55QuJWqR6ddOsxvsQlNlFYY0Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyzJKcBdR3foUWqAi4q3AM6IMXr0AclsWUl%2F6CfRLezQPI4%2BnF7dkOCsqsRtQFYzy%2Bl1qxEtSF%2BJN3BtI%2BHRyFWuwGVnIS9jNk038OhTNqhtFtW635WNIE9Y6e3iJlvtGdMMyP4htMOtyA%2FqUhzApNgKz4w59%2FNivDiwmC4DKxyoNNsNpclKEh1qrDPFNzZwIYNQuL0RXdAa0eRAc1aGxhuEoWtqwpMEB2I90tdihuOd2cAzynywvU5o%2BFCZiUuIZCCyh2bjfTUDz%2BZ4s%2Bs6I7bRHTeWFn8S%2F1Nj2%2BKgKj1T5zrqejHurNG054GV7fuTLv%2B14CCrH6uAZF0GinsRsDKmXQK1C3AKx47eJav37xi7%2FtgMKHyF9m%2FgCs12R%2BEcAU1I8ycB28fUgB6bdCtZd9xFlHK3Ih1Ajs%2BLBsVrpTs%2BYeyLSLGE%2FgGtCroFgE3HPL2x1Y2Y1htpxM5%2F9eLtnK2DfqqtBlRzwyWvxZiMUoi1qh1cnVikeyerKguST4t7njGT7AOoXnCMoZXJlKA76yEaycNoyhU3nAQZ6ChoM7NRWWWGFZehMW3OC%2B5T8RXzjngFgn0S74uHthYSMiElV1giQzhgb3achzsv4VsXes%2FziWzvKDNDcOTewiQHevTh1oEOJCQfb62lMXkXzDLyqnDBjqkAUMpwZskQ0X2y7puzQoDL6n2SbKbYskWFcfHuAHuh9FLxqFPV1mxaW4%2FqWoRuupyNc44u0aZ%2FgBmkk40tb01%2FJ7x29nWwgTq%2FkOan0Z0l169ubQFsGe8OnOo%2BeBVFg12aHaHB0r0C2Ls72fIl9uERpLdY2vZsHOQ1LdKkzKtzJOpiG9Xt%2FvDWowXo%2FOjUdAUta7wv570uvu9wdVBvHmhpd%2FNQSe6&X-Amz-Signature=e7483afef83a90b467d0d9f159f170a8ecf54d530f2aa0b1d02b33878276f542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGBPDE6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCwqMtKt3B%2FvPjRTBxrDgCraMm7kamMsTyAVciK9Se4ZAIhAMfOyzOaik2PmsnWQHEU55QuJWqR6ddOsxvsQlNlFYY0Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyzJKcBdR3foUWqAi4q3AM6IMXr0AclsWUl%2F6CfRLezQPI4%2BnF7dkOCsqsRtQFYzy%2Bl1qxEtSF%2BJN3BtI%2BHRyFWuwGVnIS9jNk038OhTNqhtFtW635WNIE9Y6e3iJlvtGdMMyP4htMOtyA%2FqUhzApNgKz4w59%2FNivDiwmC4DKxyoNNsNpclKEh1qrDPFNzZwIYNQuL0RXdAa0eRAc1aGxhuEoWtqwpMEB2I90tdihuOd2cAzynywvU5o%2BFCZiUuIZCCyh2bjfTUDz%2BZ4s%2Bs6I7bRHTeWFn8S%2F1Nj2%2BKgKj1T5zrqejHurNG054GV7fuTLv%2B14CCrH6uAZF0GinsRsDKmXQK1C3AKx47eJav37xi7%2FtgMKHyF9m%2FgCs12R%2BEcAU1I8ycB28fUgB6bdCtZd9xFlHK3Ih1Ajs%2BLBsVrpTs%2BYeyLSLGE%2FgGtCroFgE3HPL2x1Y2Y1htpxM5%2F9eLtnK2DfqqtBlRzwyWvxZiMUoi1qh1cnVikeyerKguST4t7njGT7AOoXnCMoZXJlKA76yEaycNoyhU3nAQZ6ChoM7NRWWWGFZehMW3OC%2B5T8RXzjngFgn0S74uHthYSMiElV1giQzhgb3achzsv4VsXes%2FziWzvKDNDcOTewiQHevTh1oEOJCQfb62lMXkXzDLyqnDBjqkAUMpwZskQ0X2y7puzQoDL6n2SbKbYskWFcfHuAHuh9FLxqFPV1mxaW4%2FqWoRuupyNc44u0aZ%2FgBmkk40tb01%2FJ7x29nWwgTq%2FkOan0Z0l169ubQFsGe8OnOo%2BeBVFg12aHaHB0r0C2Ls72fIl9uERpLdY2vZsHOQ1LdKkzKtzJOpiG9Xt%2FvDWowXo%2FOjUdAUta7wv570uvu9wdVBvHmhpd%2FNQSe6&X-Amz-Signature=540af94c17a1f325c0745a739f259bf6ff8ca5891ab322f537318025a6297a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGBPDE6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCwqMtKt3B%2FvPjRTBxrDgCraMm7kamMsTyAVciK9Se4ZAIhAMfOyzOaik2PmsnWQHEU55QuJWqR6ddOsxvsQlNlFYY0Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyzJKcBdR3foUWqAi4q3AM6IMXr0AclsWUl%2F6CfRLezQPI4%2BnF7dkOCsqsRtQFYzy%2Bl1qxEtSF%2BJN3BtI%2BHRyFWuwGVnIS9jNk038OhTNqhtFtW635WNIE9Y6e3iJlvtGdMMyP4htMOtyA%2FqUhzApNgKz4w59%2FNivDiwmC4DKxyoNNsNpclKEh1qrDPFNzZwIYNQuL0RXdAa0eRAc1aGxhuEoWtqwpMEB2I90tdihuOd2cAzynywvU5o%2BFCZiUuIZCCyh2bjfTUDz%2BZ4s%2Bs6I7bRHTeWFn8S%2F1Nj2%2BKgKj1T5zrqejHurNG054GV7fuTLv%2B14CCrH6uAZF0GinsRsDKmXQK1C3AKx47eJav37xi7%2FtgMKHyF9m%2FgCs12R%2BEcAU1I8ycB28fUgB6bdCtZd9xFlHK3Ih1Ajs%2BLBsVrpTs%2BYeyLSLGE%2FgGtCroFgE3HPL2x1Y2Y1htpxM5%2F9eLtnK2DfqqtBlRzwyWvxZiMUoi1qh1cnVikeyerKguST4t7njGT7AOoXnCMoZXJlKA76yEaycNoyhU3nAQZ6ChoM7NRWWWGFZehMW3OC%2B5T8RXzjngFgn0S74uHthYSMiElV1giQzhgb3achzsv4VsXes%2FziWzvKDNDcOTewiQHevTh1oEOJCQfb62lMXkXzDLyqnDBjqkAUMpwZskQ0X2y7puzQoDL6n2SbKbYskWFcfHuAHuh9FLxqFPV1mxaW4%2FqWoRuupyNc44u0aZ%2FgBmkk40tb01%2FJ7x29nWwgTq%2FkOan0Z0l169ubQFsGe8OnOo%2BeBVFg12aHaHB0r0C2Ls72fIl9uERpLdY2vZsHOQ1LdKkzKtzJOpiG9Xt%2FvDWowXo%2FOjUdAUta7wv570uvu9wdVBvHmhpd%2FNQSe6&X-Amz-Signature=cca85020ca38ca940fc7398ea3458b9053f585290ad4a7189728229aad2ed529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGBPDE6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCwqMtKt3B%2FvPjRTBxrDgCraMm7kamMsTyAVciK9Se4ZAIhAMfOyzOaik2PmsnWQHEU55QuJWqR6ddOsxvsQlNlFYY0Kv8DCF0QABoMNjM3NDIzMTgzODA1IgyzJKcBdR3foUWqAi4q3AM6IMXr0AclsWUl%2F6CfRLezQPI4%2BnF7dkOCsqsRtQFYzy%2Bl1qxEtSF%2BJN3BtI%2BHRyFWuwGVnIS9jNk038OhTNqhtFtW635WNIE9Y6e3iJlvtGdMMyP4htMOtyA%2FqUhzApNgKz4w59%2FNivDiwmC4DKxyoNNsNpclKEh1qrDPFNzZwIYNQuL0RXdAa0eRAc1aGxhuEoWtqwpMEB2I90tdihuOd2cAzynywvU5o%2BFCZiUuIZCCyh2bjfTUDz%2BZ4s%2Bs6I7bRHTeWFn8S%2F1Nj2%2BKgKj1T5zrqejHurNG054GV7fuTLv%2B14CCrH6uAZF0GinsRsDKmXQK1C3AKx47eJav37xi7%2FtgMKHyF9m%2FgCs12R%2BEcAU1I8ycB28fUgB6bdCtZd9xFlHK3Ih1Ajs%2BLBsVrpTs%2BYeyLSLGE%2FgGtCroFgE3HPL2x1Y2Y1htpxM5%2F9eLtnK2DfqqtBlRzwyWvxZiMUoi1qh1cnVikeyerKguST4t7njGT7AOoXnCMoZXJlKA76yEaycNoyhU3nAQZ6ChoM7NRWWWGFZehMW3OC%2B5T8RXzjngFgn0S74uHthYSMiElV1giQzhgb3achzsv4VsXes%2FziWzvKDNDcOTewiQHevTh1oEOJCQfb62lMXkXzDLyqnDBjqkAUMpwZskQ0X2y7puzQoDL6n2SbKbYskWFcfHuAHuh9FLxqFPV1mxaW4%2FqWoRuupyNc44u0aZ%2FgBmkk40tb01%2FJ7x29nWwgTq%2FkOan0Z0l169ubQFsGe8OnOo%2BeBVFg12aHaHB0r0C2Ls72fIl9uERpLdY2vZsHOQ1LdKkzKtzJOpiG9Xt%2FvDWowXo%2FOjUdAUta7wv570uvu9wdVBvHmhpd%2FNQSe6&X-Amz-Signature=225ec54604d49a087acdf2fd2a9bac366089b867237271e51246ceabb81daca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

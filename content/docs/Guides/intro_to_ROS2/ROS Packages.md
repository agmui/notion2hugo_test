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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUOAG53%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ%2FnikCfP186WzwaojJtpUePYX8%2Fz%2Bbq%2B6G4Lep%2BMOqgIhANWguIuLPFMEjKpJ%2FIRArEj36AzJM5sYoChvq82MiN4KKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGOC45gFZ%2BXD%2FKh0q3ANo753WvUs9sSmofnKDteuu5608ms0rQCOAbn%2F63ScJujuSoWWw2kqZAViO%2BqtHb076fRm9rpNd83zlsSr6iiuN6HMo1JFdI34WkbGkRj7b6%2FCTLDqx1CdoHut5GoIC1%2F6UTf6wtqD5BDOQr4S8DMcQ4shNGdbAooZConlORedcjP%2FTcZCkafMm%2FYslcHhQTElZ4NzVWj61yeBRN6XfdmR0r9PKKfx7A5%2FSqw0wa6BKki%2FgIz7YMuj9LCA4HchNLnVkZYW6gZ2lCsNL8RP5CUt4nGKie8NBiriF1se5Qp9HSnllIMMV4zVCubck0yltHmgYS1WLZewGE4YXi1lXm65OzasdVjRmBSDQA46ryTALqAIS2L40ejvfaZMRWyTWcGCOU9Dr%2FqdettpwpprHsS9zUUiGi15S%2F6buzESXxbzLM0NRkhMxfTt4h1byqk0DwNC2uyo5YDyqKvZwxqLo%2FtIg47lbTvTUKQcXnw8TQjMPsqYYJctu0Lexa%2BlOMPn0iNap5OOopMlfq7hh2ydRs95iNCri8k8Vlrf80hSzADx2gJRAiR%2FrWWWyOUDWkMAb9S5cy3DVN7o2%2FdnHggqr4u6tKZWK6HX0jheGXrtJRuGfL05B0w0%2Baas%2BzOtEijCGsuHBBjqkASMI0JBEpI0UPUOwL696d6sKgxqWBDgHPnTv3Zvgc1UQknc0jrB3eBtH1S9kbMvVNgg%2BaQYBIkyC31HeFkgVbe1JCW1V4Ktx3qSGUdnhu%2Fsy9ZLsb4v5HflBP4rXULQrkGRJqy4dTMNwDuTWjwiYIMTHH1de0wAGw%2FMhuKNHz9Y%2BzCCF7wtTT7gpViKnPRfbWViOSBVjJqt6lI596jt%2F%2FVmUPzfq&X-Amz-Signature=b6566f861115cff319b5474f609134cc39264e90b830427d82bb9101b1c6d9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUOAG53%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ%2FnikCfP186WzwaojJtpUePYX8%2Fz%2Bbq%2B6G4Lep%2BMOqgIhANWguIuLPFMEjKpJ%2FIRArEj36AzJM5sYoChvq82MiN4KKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGOC45gFZ%2BXD%2FKh0q3ANo753WvUs9sSmofnKDteuu5608ms0rQCOAbn%2F63ScJujuSoWWw2kqZAViO%2BqtHb076fRm9rpNd83zlsSr6iiuN6HMo1JFdI34WkbGkRj7b6%2FCTLDqx1CdoHut5GoIC1%2F6UTf6wtqD5BDOQr4S8DMcQ4shNGdbAooZConlORedcjP%2FTcZCkafMm%2FYslcHhQTElZ4NzVWj61yeBRN6XfdmR0r9PKKfx7A5%2FSqw0wa6BKki%2FgIz7YMuj9LCA4HchNLnVkZYW6gZ2lCsNL8RP5CUt4nGKie8NBiriF1se5Qp9HSnllIMMV4zVCubck0yltHmgYS1WLZewGE4YXi1lXm65OzasdVjRmBSDQA46ryTALqAIS2L40ejvfaZMRWyTWcGCOU9Dr%2FqdettpwpprHsS9zUUiGi15S%2F6buzESXxbzLM0NRkhMxfTt4h1byqk0DwNC2uyo5YDyqKvZwxqLo%2FtIg47lbTvTUKQcXnw8TQjMPsqYYJctu0Lexa%2BlOMPn0iNap5OOopMlfq7hh2ydRs95iNCri8k8Vlrf80hSzADx2gJRAiR%2FrWWWyOUDWkMAb9S5cy3DVN7o2%2FdnHggqr4u6tKZWK6HX0jheGXrtJRuGfL05B0w0%2Baas%2BzOtEijCGsuHBBjqkASMI0JBEpI0UPUOwL696d6sKgxqWBDgHPnTv3Zvgc1UQknc0jrB3eBtH1S9kbMvVNgg%2BaQYBIkyC31HeFkgVbe1JCW1V4Ktx3qSGUdnhu%2Fsy9ZLsb4v5HflBP4rXULQrkGRJqy4dTMNwDuTWjwiYIMTHH1de0wAGw%2FMhuKNHz9Y%2BzCCF7wtTT7gpViKnPRfbWViOSBVjJqt6lI596jt%2F%2FVmUPzfq&X-Amz-Signature=38d4e3527015513fb6af6105cea7e6f035dd84cc114b72fedf02d82309277aca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUOAG53%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ%2FnikCfP186WzwaojJtpUePYX8%2Fz%2Bbq%2B6G4Lep%2BMOqgIhANWguIuLPFMEjKpJ%2FIRArEj36AzJM5sYoChvq82MiN4KKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGOC45gFZ%2BXD%2FKh0q3ANo753WvUs9sSmofnKDteuu5608ms0rQCOAbn%2F63ScJujuSoWWw2kqZAViO%2BqtHb076fRm9rpNd83zlsSr6iiuN6HMo1JFdI34WkbGkRj7b6%2FCTLDqx1CdoHut5GoIC1%2F6UTf6wtqD5BDOQr4S8DMcQ4shNGdbAooZConlORedcjP%2FTcZCkafMm%2FYslcHhQTElZ4NzVWj61yeBRN6XfdmR0r9PKKfx7A5%2FSqw0wa6BKki%2FgIz7YMuj9LCA4HchNLnVkZYW6gZ2lCsNL8RP5CUt4nGKie8NBiriF1se5Qp9HSnllIMMV4zVCubck0yltHmgYS1WLZewGE4YXi1lXm65OzasdVjRmBSDQA46ryTALqAIS2L40ejvfaZMRWyTWcGCOU9Dr%2FqdettpwpprHsS9zUUiGi15S%2F6buzESXxbzLM0NRkhMxfTt4h1byqk0DwNC2uyo5YDyqKvZwxqLo%2FtIg47lbTvTUKQcXnw8TQjMPsqYYJctu0Lexa%2BlOMPn0iNap5OOopMlfq7hh2ydRs95iNCri8k8Vlrf80hSzADx2gJRAiR%2FrWWWyOUDWkMAb9S5cy3DVN7o2%2FdnHggqr4u6tKZWK6HX0jheGXrtJRuGfL05B0w0%2Baas%2BzOtEijCGsuHBBjqkASMI0JBEpI0UPUOwL696d6sKgxqWBDgHPnTv3Zvgc1UQknc0jrB3eBtH1S9kbMvVNgg%2BaQYBIkyC31HeFkgVbe1JCW1V4Ktx3qSGUdnhu%2Fsy9ZLsb4v5HflBP4rXULQrkGRJqy4dTMNwDuTWjwiYIMTHH1de0wAGw%2FMhuKNHz9Y%2BzCCF7wtTT7gpViKnPRfbWViOSBVjJqt6lI596jt%2F%2FVmUPzfq&X-Amz-Signature=fbb265f5a3c77245e38ea6ecb6363c3c384821f0d62f4a186d30f801ae2136b4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUOAG53%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ%2FnikCfP186WzwaojJtpUePYX8%2Fz%2Bbq%2B6G4Lep%2BMOqgIhANWguIuLPFMEjKpJ%2FIRArEj36AzJM5sYoChvq82MiN4KKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGOC45gFZ%2BXD%2FKh0q3ANo753WvUs9sSmofnKDteuu5608ms0rQCOAbn%2F63ScJujuSoWWw2kqZAViO%2BqtHb076fRm9rpNd83zlsSr6iiuN6HMo1JFdI34WkbGkRj7b6%2FCTLDqx1CdoHut5GoIC1%2F6UTf6wtqD5BDOQr4S8DMcQ4shNGdbAooZConlORedcjP%2FTcZCkafMm%2FYslcHhQTElZ4NzVWj61yeBRN6XfdmR0r9PKKfx7A5%2FSqw0wa6BKki%2FgIz7YMuj9LCA4HchNLnVkZYW6gZ2lCsNL8RP5CUt4nGKie8NBiriF1se5Qp9HSnllIMMV4zVCubck0yltHmgYS1WLZewGE4YXi1lXm65OzasdVjRmBSDQA46ryTALqAIS2L40ejvfaZMRWyTWcGCOU9Dr%2FqdettpwpprHsS9zUUiGi15S%2F6buzESXxbzLM0NRkhMxfTt4h1byqk0DwNC2uyo5YDyqKvZwxqLo%2FtIg47lbTvTUKQcXnw8TQjMPsqYYJctu0Lexa%2BlOMPn0iNap5OOopMlfq7hh2ydRs95iNCri8k8Vlrf80hSzADx2gJRAiR%2FrWWWyOUDWkMAb9S5cy3DVN7o2%2FdnHggqr4u6tKZWK6HX0jheGXrtJRuGfL05B0w0%2Baas%2BzOtEijCGsuHBBjqkASMI0JBEpI0UPUOwL696d6sKgxqWBDgHPnTv3Zvgc1UQknc0jrB3eBtH1S9kbMvVNgg%2BaQYBIkyC31HeFkgVbe1JCW1V4Ktx3qSGUdnhu%2Fsy9ZLsb4v5HflBP4rXULQrkGRJqy4dTMNwDuTWjwiYIMTHH1de0wAGw%2FMhuKNHz9Y%2BzCCF7wtTT7gpViKnPRfbWViOSBVjJqt6lI596jt%2F%2FVmUPzfq&X-Amz-Signature=7f2008dca035299b3dc8a723c3e4e1dd53563b218dbba0ea14e214e4786f3668&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUOAG53%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ%2FnikCfP186WzwaojJtpUePYX8%2Fz%2Bbq%2B6G4Lep%2BMOqgIhANWguIuLPFMEjKpJ%2FIRArEj36AzJM5sYoChvq82MiN4KKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGOC45gFZ%2BXD%2FKh0q3ANo753WvUs9sSmofnKDteuu5608ms0rQCOAbn%2F63ScJujuSoWWw2kqZAViO%2BqtHb076fRm9rpNd83zlsSr6iiuN6HMo1JFdI34WkbGkRj7b6%2FCTLDqx1CdoHut5GoIC1%2F6UTf6wtqD5BDOQr4S8DMcQ4shNGdbAooZConlORedcjP%2FTcZCkafMm%2FYslcHhQTElZ4NzVWj61yeBRN6XfdmR0r9PKKfx7A5%2FSqw0wa6BKki%2FgIz7YMuj9LCA4HchNLnVkZYW6gZ2lCsNL8RP5CUt4nGKie8NBiriF1se5Qp9HSnllIMMV4zVCubck0yltHmgYS1WLZewGE4YXi1lXm65OzasdVjRmBSDQA46ryTALqAIS2L40ejvfaZMRWyTWcGCOU9Dr%2FqdettpwpprHsS9zUUiGi15S%2F6buzESXxbzLM0NRkhMxfTt4h1byqk0DwNC2uyo5YDyqKvZwxqLo%2FtIg47lbTvTUKQcXnw8TQjMPsqYYJctu0Lexa%2BlOMPn0iNap5OOopMlfq7hh2ydRs95iNCri8k8Vlrf80hSzADx2gJRAiR%2FrWWWyOUDWkMAb9S5cy3DVN7o2%2FdnHggqr4u6tKZWK6HX0jheGXrtJRuGfL05B0w0%2Baas%2BzOtEijCGsuHBBjqkASMI0JBEpI0UPUOwL696d6sKgxqWBDgHPnTv3Zvgc1UQknc0jrB3eBtH1S9kbMvVNgg%2BaQYBIkyC31HeFkgVbe1JCW1V4Ktx3qSGUdnhu%2Fsy9ZLsb4v5HflBP4rXULQrkGRJqy4dTMNwDuTWjwiYIMTHH1de0wAGw%2FMhuKNHz9Y%2BzCCF7wtTT7gpViKnPRfbWViOSBVjJqt6lI596jt%2F%2FVmUPzfq&X-Amz-Signature=a9cb1f182112e867549cfaf2a7d5b7ef3333c44fa740b03cb6c1a0b93aa5bca7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUOAG53%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ%2FnikCfP186WzwaojJtpUePYX8%2Fz%2Bbq%2B6G4Lep%2BMOqgIhANWguIuLPFMEjKpJ%2FIRArEj36AzJM5sYoChvq82MiN4KKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGOC45gFZ%2BXD%2FKh0q3ANo753WvUs9sSmofnKDteuu5608ms0rQCOAbn%2F63ScJujuSoWWw2kqZAViO%2BqtHb076fRm9rpNd83zlsSr6iiuN6HMo1JFdI34WkbGkRj7b6%2FCTLDqx1CdoHut5GoIC1%2F6UTf6wtqD5BDOQr4S8DMcQ4shNGdbAooZConlORedcjP%2FTcZCkafMm%2FYslcHhQTElZ4NzVWj61yeBRN6XfdmR0r9PKKfx7A5%2FSqw0wa6BKki%2FgIz7YMuj9LCA4HchNLnVkZYW6gZ2lCsNL8RP5CUt4nGKie8NBiriF1se5Qp9HSnllIMMV4zVCubck0yltHmgYS1WLZewGE4YXi1lXm65OzasdVjRmBSDQA46ryTALqAIS2L40ejvfaZMRWyTWcGCOU9Dr%2FqdettpwpprHsS9zUUiGi15S%2F6buzESXxbzLM0NRkhMxfTt4h1byqk0DwNC2uyo5YDyqKvZwxqLo%2FtIg47lbTvTUKQcXnw8TQjMPsqYYJctu0Lexa%2BlOMPn0iNap5OOopMlfq7hh2ydRs95iNCri8k8Vlrf80hSzADx2gJRAiR%2FrWWWyOUDWkMAb9S5cy3DVN7o2%2FdnHggqr4u6tKZWK6HX0jheGXrtJRuGfL05B0w0%2Baas%2BzOtEijCGsuHBBjqkASMI0JBEpI0UPUOwL696d6sKgxqWBDgHPnTv3Zvgc1UQknc0jrB3eBtH1S9kbMvVNgg%2BaQYBIkyC31HeFkgVbe1JCW1V4Ktx3qSGUdnhu%2Fsy9ZLsb4v5HflBP4rXULQrkGRJqy4dTMNwDuTWjwiYIMTHH1de0wAGw%2FMhuKNHz9Y%2BzCCF7wtTT7gpViKnPRfbWViOSBVjJqt6lI596jt%2F%2FVmUPzfq&X-Amz-Signature=608065b212c97f4d504277910fd28e7c8d3f41954505b8615b785d558caee96a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUOAG53%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ%2FnikCfP186WzwaojJtpUePYX8%2Fz%2Bbq%2B6G4Lep%2BMOqgIhANWguIuLPFMEjKpJ%2FIRArEj36AzJM5sYoChvq82MiN4KKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGOC45gFZ%2BXD%2FKh0q3ANo753WvUs9sSmofnKDteuu5608ms0rQCOAbn%2F63ScJujuSoWWw2kqZAViO%2BqtHb076fRm9rpNd83zlsSr6iiuN6HMo1JFdI34WkbGkRj7b6%2FCTLDqx1CdoHut5GoIC1%2F6UTf6wtqD5BDOQr4S8DMcQ4shNGdbAooZConlORedcjP%2FTcZCkafMm%2FYslcHhQTElZ4NzVWj61yeBRN6XfdmR0r9PKKfx7A5%2FSqw0wa6BKki%2FgIz7YMuj9LCA4HchNLnVkZYW6gZ2lCsNL8RP5CUt4nGKie8NBiriF1se5Qp9HSnllIMMV4zVCubck0yltHmgYS1WLZewGE4YXi1lXm65OzasdVjRmBSDQA46ryTALqAIS2L40ejvfaZMRWyTWcGCOU9Dr%2FqdettpwpprHsS9zUUiGi15S%2F6buzESXxbzLM0NRkhMxfTt4h1byqk0DwNC2uyo5YDyqKvZwxqLo%2FtIg47lbTvTUKQcXnw8TQjMPsqYYJctu0Lexa%2BlOMPn0iNap5OOopMlfq7hh2ydRs95iNCri8k8Vlrf80hSzADx2gJRAiR%2FrWWWyOUDWkMAb9S5cy3DVN7o2%2FdnHggqr4u6tKZWK6HX0jheGXrtJRuGfL05B0w0%2Baas%2BzOtEijCGsuHBBjqkASMI0JBEpI0UPUOwL696d6sKgxqWBDgHPnTv3Zvgc1UQknc0jrB3eBtH1S9kbMvVNgg%2BaQYBIkyC31HeFkgVbe1JCW1V4Ktx3qSGUdnhu%2Fsy9ZLsb4v5HflBP4rXULQrkGRJqy4dTMNwDuTWjwiYIMTHH1de0wAGw%2FMhuKNHz9Y%2BzCCF7wtTT7gpViKnPRfbWViOSBVjJqt6lI596jt%2F%2FVmUPzfq&X-Amz-Signature=3c99aab9590502cd0b5cdf663c38835d863dba22b416b4dccb717d85aa201d22&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

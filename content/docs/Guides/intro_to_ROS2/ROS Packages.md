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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGE53EO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZczbHOsq98TX09icpzWAfdA%2B6f7iIkkwLUQB48J2hgIgcZRSi0muc5M6wn4fE7kA8R8E%2FyKSbqesizZvUdkcZH8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGktpnraxWdjIScHQCrcA0rUXrWHPvZmzaUQVV325fTElrvHcKruYYNUnRA2zcsPbSb0NtG2tOR5cF64MN4jWvVSdUepTEfqe7GbYxHWu0i%2Fq0XBDkxBBUkh5zoM98Tj1%2BwBfiEsD4Fz7qED%2Blqr%2FY0Ec2g4v%2FqBSTOpoysniaUITPQRpy0wdfE9bxS%2B9bmEHt%2FgDpGt%2F%2BTVypwlINHUesBkZ%2FNDWSnLo67sB8WE5Qd5sdRkQsUS2w4wEse9sZrWvAnmymIOM8Tj0sqys%2FKujwwwTcjIznPwkkqmD9Fe5YUMb9u4vw%2FOXA8ouvYtrk81fETFCnRtyNlVHjZavhu%2FTaph58JE3ZB8BeBgSOhSqjfu4YRDKQvIjFjFeWClE2L1I0AqUrNpcAbhMuwrBnt36hTPP%2FSTD6Ketn2hy0BC3zB4YP%2BkV69o1Y7R%2FFjp34rZZ9C6d4YdriE7Ls6OkoqzYscQTDZy2h9Z2%2F7H1GZ%2BNMFLROX1DKJqTD2cxGqUGs3IHTu4sxJzHtdeSSa02KoJ1p1OAWTAEh%2BgK0bEA3IYuBqLuy7PoF%2FgOo5tfaqYIPOE15OCN97MwenM3aQazO6tpgQPvJfSQCXxeilz5mtD8qsRbmHmI%2F7GmU6bqXIJTooh3Bswwy3nrVIxGs%2BMMMb9hb8GOqUBw5KHgGtIXHNCWVVUBCxwRnWlQNx%2BpM%2F0GAb9fhI8HQITgT5x9z2PFeJf%2FWk1jtyaz%2B5DBbHRXz7iVQntGUlbcW93om%2BAfti1F2nDhkTZC1501O7qOTT%2BbPgvRyCTzT5hxPERzbzzVUdniGWNdkx8w3rtZCLIg2LgxOb3WOUDQXggLXIqLyVlHm1%2F0AuG5fW22zgMjqKhrCkzwEB0pPtwo2Cr02%2Bv&X-Amz-Signature=2fb39a895cf4aad572042de674277b083a4d3d9b7a05c9f63fc63d8300883d10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGE53EO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZczbHOsq98TX09icpzWAfdA%2B6f7iIkkwLUQB48J2hgIgcZRSi0muc5M6wn4fE7kA8R8E%2FyKSbqesizZvUdkcZH8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGktpnraxWdjIScHQCrcA0rUXrWHPvZmzaUQVV325fTElrvHcKruYYNUnRA2zcsPbSb0NtG2tOR5cF64MN4jWvVSdUepTEfqe7GbYxHWu0i%2Fq0XBDkxBBUkh5zoM98Tj1%2BwBfiEsD4Fz7qED%2Blqr%2FY0Ec2g4v%2FqBSTOpoysniaUITPQRpy0wdfE9bxS%2B9bmEHt%2FgDpGt%2F%2BTVypwlINHUesBkZ%2FNDWSnLo67sB8WE5Qd5sdRkQsUS2w4wEse9sZrWvAnmymIOM8Tj0sqys%2FKujwwwTcjIznPwkkqmD9Fe5YUMb9u4vw%2FOXA8ouvYtrk81fETFCnRtyNlVHjZavhu%2FTaph58JE3ZB8BeBgSOhSqjfu4YRDKQvIjFjFeWClE2L1I0AqUrNpcAbhMuwrBnt36hTPP%2FSTD6Ketn2hy0BC3zB4YP%2BkV69o1Y7R%2FFjp34rZZ9C6d4YdriE7Ls6OkoqzYscQTDZy2h9Z2%2F7H1GZ%2BNMFLROX1DKJqTD2cxGqUGs3IHTu4sxJzHtdeSSa02KoJ1p1OAWTAEh%2BgK0bEA3IYuBqLuy7PoF%2FgOo5tfaqYIPOE15OCN97MwenM3aQazO6tpgQPvJfSQCXxeilz5mtD8qsRbmHmI%2F7GmU6bqXIJTooh3Bswwy3nrVIxGs%2BMMMb9hb8GOqUBw5KHgGtIXHNCWVVUBCxwRnWlQNx%2BpM%2F0GAb9fhI8HQITgT5x9z2PFeJf%2FWk1jtyaz%2B5DBbHRXz7iVQntGUlbcW93om%2BAfti1F2nDhkTZC1501O7qOTT%2BbPgvRyCTzT5hxPERzbzzVUdniGWNdkx8w3rtZCLIg2LgxOb3WOUDQXggLXIqLyVlHm1%2F0AuG5fW22zgMjqKhrCkzwEB0pPtwo2Cr02%2Bv&X-Amz-Signature=d3afcd17029fefd036d002cf9f0e3ba0cb244985a1205342a07fb7e1b7a8b31b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGE53EO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZczbHOsq98TX09icpzWAfdA%2B6f7iIkkwLUQB48J2hgIgcZRSi0muc5M6wn4fE7kA8R8E%2FyKSbqesizZvUdkcZH8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGktpnraxWdjIScHQCrcA0rUXrWHPvZmzaUQVV325fTElrvHcKruYYNUnRA2zcsPbSb0NtG2tOR5cF64MN4jWvVSdUepTEfqe7GbYxHWu0i%2Fq0XBDkxBBUkh5zoM98Tj1%2BwBfiEsD4Fz7qED%2Blqr%2FY0Ec2g4v%2FqBSTOpoysniaUITPQRpy0wdfE9bxS%2B9bmEHt%2FgDpGt%2F%2BTVypwlINHUesBkZ%2FNDWSnLo67sB8WE5Qd5sdRkQsUS2w4wEse9sZrWvAnmymIOM8Tj0sqys%2FKujwwwTcjIznPwkkqmD9Fe5YUMb9u4vw%2FOXA8ouvYtrk81fETFCnRtyNlVHjZavhu%2FTaph58JE3ZB8BeBgSOhSqjfu4YRDKQvIjFjFeWClE2L1I0AqUrNpcAbhMuwrBnt36hTPP%2FSTD6Ketn2hy0BC3zB4YP%2BkV69o1Y7R%2FFjp34rZZ9C6d4YdriE7Ls6OkoqzYscQTDZy2h9Z2%2F7H1GZ%2BNMFLROX1DKJqTD2cxGqUGs3IHTu4sxJzHtdeSSa02KoJ1p1OAWTAEh%2BgK0bEA3IYuBqLuy7PoF%2FgOo5tfaqYIPOE15OCN97MwenM3aQazO6tpgQPvJfSQCXxeilz5mtD8qsRbmHmI%2F7GmU6bqXIJTooh3Bswwy3nrVIxGs%2BMMMb9hb8GOqUBw5KHgGtIXHNCWVVUBCxwRnWlQNx%2BpM%2F0GAb9fhI8HQITgT5x9z2PFeJf%2FWk1jtyaz%2B5DBbHRXz7iVQntGUlbcW93om%2BAfti1F2nDhkTZC1501O7qOTT%2BbPgvRyCTzT5hxPERzbzzVUdniGWNdkx8w3rtZCLIg2LgxOb3WOUDQXggLXIqLyVlHm1%2F0AuG5fW22zgMjqKhrCkzwEB0pPtwo2Cr02%2Bv&X-Amz-Signature=96dd8169319f54edbcea3ca46f8d6b71e333a54a8d1ecd662f13164c732b8c06&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGE53EO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZczbHOsq98TX09icpzWAfdA%2B6f7iIkkwLUQB48J2hgIgcZRSi0muc5M6wn4fE7kA8R8E%2FyKSbqesizZvUdkcZH8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGktpnraxWdjIScHQCrcA0rUXrWHPvZmzaUQVV325fTElrvHcKruYYNUnRA2zcsPbSb0NtG2tOR5cF64MN4jWvVSdUepTEfqe7GbYxHWu0i%2Fq0XBDkxBBUkh5zoM98Tj1%2BwBfiEsD4Fz7qED%2Blqr%2FY0Ec2g4v%2FqBSTOpoysniaUITPQRpy0wdfE9bxS%2B9bmEHt%2FgDpGt%2F%2BTVypwlINHUesBkZ%2FNDWSnLo67sB8WE5Qd5sdRkQsUS2w4wEse9sZrWvAnmymIOM8Tj0sqys%2FKujwwwTcjIznPwkkqmD9Fe5YUMb9u4vw%2FOXA8ouvYtrk81fETFCnRtyNlVHjZavhu%2FTaph58JE3ZB8BeBgSOhSqjfu4YRDKQvIjFjFeWClE2L1I0AqUrNpcAbhMuwrBnt36hTPP%2FSTD6Ketn2hy0BC3zB4YP%2BkV69o1Y7R%2FFjp34rZZ9C6d4YdriE7Ls6OkoqzYscQTDZy2h9Z2%2F7H1GZ%2BNMFLROX1DKJqTD2cxGqUGs3IHTu4sxJzHtdeSSa02KoJ1p1OAWTAEh%2BgK0bEA3IYuBqLuy7PoF%2FgOo5tfaqYIPOE15OCN97MwenM3aQazO6tpgQPvJfSQCXxeilz5mtD8qsRbmHmI%2F7GmU6bqXIJTooh3Bswwy3nrVIxGs%2BMMMb9hb8GOqUBw5KHgGtIXHNCWVVUBCxwRnWlQNx%2BpM%2F0GAb9fhI8HQITgT5x9z2PFeJf%2FWk1jtyaz%2B5DBbHRXz7iVQntGUlbcW93om%2BAfti1F2nDhkTZC1501O7qOTT%2BbPgvRyCTzT5hxPERzbzzVUdniGWNdkx8w3rtZCLIg2LgxOb3WOUDQXggLXIqLyVlHm1%2F0AuG5fW22zgMjqKhrCkzwEB0pPtwo2Cr02%2Bv&X-Amz-Signature=5c401c1dd4f66a02b182d47ec0803273407c41c6f2fa7f96d898eeeb7bb4a40c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGE53EO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZczbHOsq98TX09icpzWAfdA%2B6f7iIkkwLUQB48J2hgIgcZRSi0muc5M6wn4fE7kA8R8E%2FyKSbqesizZvUdkcZH8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGktpnraxWdjIScHQCrcA0rUXrWHPvZmzaUQVV325fTElrvHcKruYYNUnRA2zcsPbSb0NtG2tOR5cF64MN4jWvVSdUepTEfqe7GbYxHWu0i%2Fq0XBDkxBBUkh5zoM98Tj1%2BwBfiEsD4Fz7qED%2Blqr%2FY0Ec2g4v%2FqBSTOpoysniaUITPQRpy0wdfE9bxS%2B9bmEHt%2FgDpGt%2F%2BTVypwlINHUesBkZ%2FNDWSnLo67sB8WE5Qd5sdRkQsUS2w4wEse9sZrWvAnmymIOM8Tj0sqys%2FKujwwwTcjIznPwkkqmD9Fe5YUMb9u4vw%2FOXA8ouvYtrk81fETFCnRtyNlVHjZavhu%2FTaph58JE3ZB8BeBgSOhSqjfu4YRDKQvIjFjFeWClE2L1I0AqUrNpcAbhMuwrBnt36hTPP%2FSTD6Ketn2hy0BC3zB4YP%2BkV69o1Y7R%2FFjp34rZZ9C6d4YdriE7Ls6OkoqzYscQTDZy2h9Z2%2F7H1GZ%2BNMFLROX1DKJqTD2cxGqUGs3IHTu4sxJzHtdeSSa02KoJ1p1OAWTAEh%2BgK0bEA3IYuBqLuy7PoF%2FgOo5tfaqYIPOE15OCN97MwenM3aQazO6tpgQPvJfSQCXxeilz5mtD8qsRbmHmI%2F7GmU6bqXIJTooh3Bswwy3nrVIxGs%2BMMMb9hb8GOqUBw5KHgGtIXHNCWVVUBCxwRnWlQNx%2BpM%2F0GAb9fhI8HQITgT5x9z2PFeJf%2FWk1jtyaz%2B5DBbHRXz7iVQntGUlbcW93om%2BAfti1F2nDhkTZC1501O7qOTT%2BbPgvRyCTzT5hxPERzbzzVUdniGWNdkx8w3rtZCLIg2LgxOb3WOUDQXggLXIqLyVlHm1%2F0AuG5fW22zgMjqKhrCkzwEB0pPtwo2Cr02%2Bv&X-Amz-Signature=ce883f1c2b30044959ef5b6a98e9b4fa902b7fdc44982c8eb58b45684e7ebd13&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGE53EO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZczbHOsq98TX09icpzWAfdA%2B6f7iIkkwLUQB48J2hgIgcZRSi0muc5M6wn4fE7kA8R8E%2FyKSbqesizZvUdkcZH8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGktpnraxWdjIScHQCrcA0rUXrWHPvZmzaUQVV325fTElrvHcKruYYNUnRA2zcsPbSb0NtG2tOR5cF64MN4jWvVSdUepTEfqe7GbYxHWu0i%2Fq0XBDkxBBUkh5zoM98Tj1%2BwBfiEsD4Fz7qED%2Blqr%2FY0Ec2g4v%2FqBSTOpoysniaUITPQRpy0wdfE9bxS%2B9bmEHt%2FgDpGt%2F%2BTVypwlINHUesBkZ%2FNDWSnLo67sB8WE5Qd5sdRkQsUS2w4wEse9sZrWvAnmymIOM8Tj0sqys%2FKujwwwTcjIznPwkkqmD9Fe5YUMb9u4vw%2FOXA8ouvYtrk81fETFCnRtyNlVHjZavhu%2FTaph58JE3ZB8BeBgSOhSqjfu4YRDKQvIjFjFeWClE2L1I0AqUrNpcAbhMuwrBnt36hTPP%2FSTD6Ketn2hy0BC3zB4YP%2BkV69o1Y7R%2FFjp34rZZ9C6d4YdriE7Ls6OkoqzYscQTDZy2h9Z2%2F7H1GZ%2BNMFLROX1DKJqTD2cxGqUGs3IHTu4sxJzHtdeSSa02KoJ1p1OAWTAEh%2BgK0bEA3IYuBqLuy7PoF%2FgOo5tfaqYIPOE15OCN97MwenM3aQazO6tpgQPvJfSQCXxeilz5mtD8qsRbmHmI%2F7GmU6bqXIJTooh3Bswwy3nrVIxGs%2BMMMb9hb8GOqUBw5KHgGtIXHNCWVVUBCxwRnWlQNx%2BpM%2F0GAb9fhI8HQITgT5x9z2PFeJf%2FWk1jtyaz%2B5DBbHRXz7iVQntGUlbcW93om%2BAfti1F2nDhkTZC1501O7qOTT%2BbPgvRyCTzT5hxPERzbzzVUdniGWNdkx8w3rtZCLIg2LgxOb3WOUDQXggLXIqLyVlHm1%2F0AuG5fW22zgMjqKhrCkzwEB0pPtwo2Cr02%2Bv&X-Amz-Signature=f0118b73ecab4a5066ebcc00578f07b28111e2d37f96483f64ea7ea504fe7203&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGE53EO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZczbHOsq98TX09icpzWAfdA%2B6f7iIkkwLUQB48J2hgIgcZRSi0muc5M6wn4fE7kA8R8E%2FyKSbqesizZvUdkcZH8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGktpnraxWdjIScHQCrcA0rUXrWHPvZmzaUQVV325fTElrvHcKruYYNUnRA2zcsPbSb0NtG2tOR5cF64MN4jWvVSdUepTEfqe7GbYxHWu0i%2Fq0XBDkxBBUkh5zoM98Tj1%2BwBfiEsD4Fz7qED%2Blqr%2FY0Ec2g4v%2FqBSTOpoysniaUITPQRpy0wdfE9bxS%2B9bmEHt%2FgDpGt%2F%2BTVypwlINHUesBkZ%2FNDWSnLo67sB8WE5Qd5sdRkQsUS2w4wEse9sZrWvAnmymIOM8Tj0sqys%2FKujwwwTcjIznPwkkqmD9Fe5YUMb9u4vw%2FOXA8ouvYtrk81fETFCnRtyNlVHjZavhu%2FTaph58JE3ZB8BeBgSOhSqjfu4YRDKQvIjFjFeWClE2L1I0AqUrNpcAbhMuwrBnt36hTPP%2FSTD6Ketn2hy0BC3zB4YP%2BkV69o1Y7R%2FFjp34rZZ9C6d4YdriE7Ls6OkoqzYscQTDZy2h9Z2%2F7H1GZ%2BNMFLROX1DKJqTD2cxGqUGs3IHTu4sxJzHtdeSSa02KoJ1p1OAWTAEh%2BgK0bEA3IYuBqLuy7PoF%2FgOo5tfaqYIPOE15OCN97MwenM3aQazO6tpgQPvJfSQCXxeilz5mtD8qsRbmHmI%2F7GmU6bqXIJTooh3Bswwy3nrVIxGs%2BMMMb9hb8GOqUBw5KHgGtIXHNCWVVUBCxwRnWlQNx%2BpM%2F0GAb9fhI8HQITgT5x9z2PFeJf%2FWk1jtyaz%2B5DBbHRXz7iVQntGUlbcW93om%2BAfti1F2nDhkTZC1501O7qOTT%2BbPgvRyCTzT5hxPERzbzzVUdniGWNdkx8w3rtZCLIg2LgxOb3WOUDQXggLXIqLyVlHm1%2F0AuG5fW22zgMjqKhrCkzwEB0pPtwo2Cr02%2Bv&X-Amz-Signature=1f7579b29944c092a932d1daf483a4b1c792972dbc2736ed061e9407427068a0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

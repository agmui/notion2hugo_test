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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJDWY3S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcoN6THz3zRABITkmf859soRpeX3Zqa%2F%2FoOH9iE5xHwIgQ%2FOBcaO7HinsjfyvynVGrt4bbbcp9riIjSdlWhaae9AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN50A2LpYSG1xZXVJircA%2BTQeojpAyZADLXDPvA04yy204qQ5fxxpHzKYPaVfibJSN9MWQeEAMqiMDUvAZITnj%2BZM8FlhOLKC3dKDXNGCniHlmu6ssfKeGKOlFgy%2Be7d3G8htz4xv0ZFqcvYUB14TvuVoaSkkjehaXwyOhsr%2F07IaupH4QNjG1A8cLSz4B1HcEpkqC4ILuR0xw%2Fb7%2FQSpHgpLMH0%2FATMMR1964rVNES8IB03ftF4CasObdV26DvvNWdBh0aCfk%2FwW7DR4dtTNaiMzYHvJX21zgu0qCz%2BTElUBPR7pu%2BDhO58cYBGYvWsW9Q%2F%2Brj8hg9AOvJbKwFchfIwu1%2BgzKpTvYmPi5QJbAtkW3EYLCrDjKg0lnfBGi5Yd0uYgI71r6e6BHx3raGwjGGbextZ38H0yk4ZBXhR4gQaMueTo95rgoYZ7tvlge3ujSsVFATDkJkoGVyWuNYOTylsnA8RWrVDX74tIWuPPBkhHEyUUoVLjrum%2BP8j1gCRbNLXWDxyr5Iql%2BeoZMAbELokcUjUgTZNQQnQOhjhys%2BDJzG08qJDquJkSmqhxfEoymfzER7TDlIkHyfju2HaAAYrR%2BEcUSALv6cSSY74nuXQad500AoDPg7ebwvUa1LBQHhWMq8zs%2BTzFOK1MOTjob0GOqUBatMmba5kOkRYO8i7cxhC5DKpkDHrJMe8fabvXbrs%2Bi1tpbJjvcgCxizotP6T%2B7C9XSNV4cHn8heaINwMMAWCwJnDnK1Nb1ICMkdfJN%2BBtADQLI8zmbLoMt8ydZJLbwfGb7J7Gn2oEbxG1XBRsxpXKpZ8T4aLRuOq4U0WuLSAp%2FtO%2Bk9sqx86iQQiQzE3m9jyGRvyru104ForjBwfKBZZ2y6LOumY&X-Amz-Signature=89b00ee0427d11b6f76a7e691022cd3c9d59fb7aa36e245573934cdb5e78a417&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJDWY3S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcoN6THz3zRABITkmf859soRpeX3Zqa%2F%2FoOH9iE5xHwIgQ%2FOBcaO7HinsjfyvynVGrt4bbbcp9riIjSdlWhaae9AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN50A2LpYSG1xZXVJircA%2BTQeojpAyZADLXDPvA04yy204qQ5fxxpHzKYPaVfibJSN9MWQeEAMqiMDUvAZITnj%2BZM8FlhOLKC3dKDXNGCniHlmu6ssfKeGKOlFgy%2Be7d3G8htz4xv0ZFqcvYUB14TvuVoaSkkjehaXwyOhsr%2F07IaupH4QNjG1A8cLSz4B1HcEpkqC4ILuR0xw%2Fb7%2FQSpHgpLMH0%2FATMMR1964rVNES8IB03ftF4CasObdV26DvvNWdBh0aCfk%2FwW7DR4dtTNaiMzYHvJX21zgu0qCz%2BTElUBPR7pu%2BDhO58cYBGYvWsW9Q%2F%2Brj8hg9AOvJbKwFchfIwu1%2BgzKpTvYmPi5QJbAtkW3EYLCrDjKg0lnfBGi5Yd0uYgI71r6e6BHx3raGwjGGbextZ38H0yk4ZBXhR4gQaMueTo95rgoYZ7tvlge3ujSsVFATDkJkoGVyWuNYOTylsnA8RWrVDX74tIWuPPBkhHEyUUoVLjrum%2BP8j1gCRbNLXWDxyr5Iql%2BeoZMAbELokcUjUgTZNQQnQOhjhys%2BDJzG08qJDquJkSmqhxfEoymfzER7TDlIkHyfju2HaAAYrR%2BEcUSALv6cSSY74nuXQad500AoDPg7ebwvUa1LBQHhWMq8zs%2BTzFOK1MOTjob0GOqUBatMmba5kOkRYO8i7cxhC5DKpkDHrJMe8fabvXbrs%2Bi1tpbJjvcgCxizotP6T%2B7C9XSNV4cHn8heaINwMMAWCwJnDnK1Nb1ICMkdfJN%2BBtADQLI8zmbLoMt8ydZJLbwfGb7J7Gn2oEbxG1XBRsxpXKpZ8T4aLRuOq4U0WuLSAp%2FtO%2Bk9sqx86iQQiQzE3m9jyGRvyru104ForjBwfKBZZ2y6LOumY&X-Amz-Signature=3f7e854a575dc8b81514d03a4e037e26e1a5fcb213bcdbfc9d7d85535f1c4f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJDWY3S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcoN6THz3zRABITkmf859soRpeX3Zqa%2F%2FoOH9iE5xHwIgQ%2FOBcaO7HinsjfyvynVGrt4bbbcp9riIjSdlWhaae9AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN50A2LpYSG1xZXVJircA%2BTQeojpAyZADLXDPvA04yy204qQ5fxxpHzKYPaVfibJSN9MWQeEAMqiMDUvAZITnj%2BZM8FlhOLKC3dKDXNGCniHlmu6ssfKeGKOlFgy%2Be7d3G8htz4xv0ZFqcvYUB14TvuVoaSkkjehaXwyOhsr%2F07IaupH4QNjG1A8cLSz4B1HcEpkqC4ILuR0xw%2Fb7%2FQSpHgpLMH0%2FATMMR1964rVNES8IB03ftF4CasObdV26DvvNWdBh0aCfk%2FwW7DR4dtTNaiMzYHvJX21zgu0qCz%2BTElUBPR7pu%2BDhO58cYBGYvWsW9Q%2F%2Brj8hg9AOvJbKwFchfIwu1%2BgzKpTvYmPi5QJbAtkW3EYLCrDjKg0lnfBGi5Yd0uYgI71r6e6BHx3raGwjGGbextZ38H0yk4ZBXhR4gQaMueTo95rgoYZ7tvlge3ujSsVFATDkJkoGVyWuNYOTylsnA8RWrVDX74tIWuPPBkhHEyUUoVLjrum%2BP8j1gCRbNLXWDxyr5Iql%2BeoZMAbELokcUjUgTZNQQnQOhjhys%2BDJzG08qJDquJkSmqhxfEoymfzER7TDlIkHyfju2HaAAYrR%2BEcUSALv6cSSY74nuXQad500AoDPg7ebwvUa1LBQHhWMq8zs%2BTzFOK1MOTjob0GOqUBatMmba5kOkRYO8i7cxhC5DKpkDHrJMe8fabvXbrs%2Bi1tpbJjvcgCxizotP6T%2B7C9XSNV4cHn8heaINwMMAWCwJnDnK1Nb1ICMkdfJN%2BBtADQLI8zmbLoMt8ydZJLbwfGb7J7Gn2oEbxG1XBRsxpXKpZ8T4aLRuOq4U0WuLSAp%2FtO%2Bk9sqx86iQQiQzE3m9jyGRvyru104ForjBwfKBZZ2y6LOumY&X-Amz-Signature=5a3f4d41d03343508b2f089d527676f4608772b488621813c9e6c0bac96316db&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJDWY3S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcoN6THz3zRABITkmf859soRpeX3Zqa%2F%2FoOH9iE5xHwIgQ%2FOBcaO7HinsjfyvynVGrt4bbbcp9riIjSdlWhaae9AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN50A2LpYSG1xZXVJircA%2BTQeojpAyZADLXDPvA04yy204qQ5fxxpHzKYPaVfibJSN9MWQeEAMqiMDUvAZITnj%2BZM8FlhOLKC3dKDXNGCniHlmu6ssfKeGKOlFgy%2Be7d3G8htz4xv0ZFqcvYUB14TvuVoaSkkjehaXwyOhsr%2F07IaupH4QNjG1A8cLSz4B1HcEpkqC4ILuR0xw%2Fb7%2FQSpHgpLMH0%2FATMMR1964rVNES8IB03ftF4CasObdV26DvvNWdBh0aCfk%2FwW7DR4dtTNaiMzYHvJX21zgu0qCz%2BTElUBPR7pu%2BDhO58cYBGYvWsW9Q%2F%2Brj8hg9AOvJbKwFchfIwu1%2BgzKpTvYmPi5QJbAtkW3EYLCrDjKg0lnfBGi5Yd0uYgI71r6e6BHx3raGwjGGbextZ38H0yk4ZBXhR4gQaMueTo95rgoYZ7tvlge3ujSsVFATDkJkoGVyWuNYOTylsnA8RWrVDX74tIWuPPBkhHEyUUoVLjrum%2BP8j1gCRbNLXWDxyr5Iql%2BeoZMAbELokcUjUgTZNQQnQOhjhys%2BDJzG08qJDquJkSmqhxfEoymfzER7TDlIkHyfju2HaAAYrR%2BEcUSALv6cSSY74nuXQad500AoDPg7ebwvUa1LBQHhWMq8zs%2BTzFOK1MOTjob0GOqUBatMmba5kOkRYO8i7cxhC5DKpkDHrJMe8fabvXbrs%2Bi1tpbJjvcgCxizotP6T%2B7C9XSNV4cHn8heaINwMMAWCwJnDnK1Nb1ICMkdfJN%2BBtADQLI8zmbLoMt8ydZJLbwfGb7J7Gn2oEbxG1XBRsxpXKpZ8T4aLRuOq4U0WuLSAp%2FtO%2Bk9sqx86iQQiQzE3m9jyGRvyru104ForjBwfKBZZ2y6LOumY&X-Amz-Signature=ad6194cd6cdddaf9566fa782b928dde9117a107c12ffe20778cd73249447dc9c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJDWY3S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcoN6THz3zRABITkmf859soRpeX3Zqa%2F%2FoOH9iE5xHwIgQ%2FOBcaO7HinsjfyvynVGrt4bbbcp9riIjSdlWhaae9AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN50A2LpYSG1xZXVJircA%2BTQeojpAyZADLXDPvA04yy204qQ5fxxpHzKYPaVfibJSN9MWQeEAMqiMDUvAZITnj%2BZM8FlhOLKC3dKDXNGCniHlmu6ssfKeGKOlFgy%2Be7d3G8htz4xv0ZFqcvYUB14TvuVoaSkkjehaXwyOhsr%2F07IaupH4QNjG1A8cLSz4B1HcEpkqC4ILuR0xw%2Fb7%2FQSpHgpLMH0%2FATMMR1964rVNES8IB03ftF4CasObdV26DvvNWdBh0aCfk%2FwW7DR4dtTNaiMzYHvJX21zgu0qCz%2BTElUBPR7pu%2BDhO58cYBGYvWsW9Q%2F%2Brj8hg9AOvJbKwFchfIwu1%2BgzKpTvYmPi5QJbAtkW3EYLCrDjKg0lnfBGi5Yd0uYgI71r6e6BHx3raGwjGGbextZ38H0yk4ZBXhR4gQaMueTo95rgoYZ7tvlge3ujSsVFATDkJkoGVyWuNYOTylsnA8RWrVDX74tIWuPPBkhHEyUUoVLjrum%2BP8j1gCRbNLXWDxyr5Iql%2BeoZMAbELokcUjUgTZNQQnQOhjhys%2BDJzG08qJDquJkSmqhxfEoymfzER7TDlIkHyfju2HaAAYrR%2BEcUSALv6cSSY74nuXQad500AoDPg7ebwvUa1LBQHhWMq8zs%2BTzFOK1MOTjob0GOqUBatMmba5kOkRYO8i7cxhC5DKpkDHrJMe8fabvXbrs%2Bi1tpbJjvcgCxizotP6T%2B7C9XSNV4cHn8heaINwMMAWCwJnDnK1Nb1ICMkdfJN%2BBtADQLI8zmbLoMt8ydZJLbwfGb7J7Gn2oEbxG1XBRsxpXKpZ8T4aLRuOq4U0WuLSAp%2FtO%2Bk9sqx86iQQiQzE3m9jyGRvyru104ForjBwfKBZZ2y6LOumY&X-Amz-Signature=40edb8c6c9bcac88ae47ae55e01d527d3b3409b7c93096b59aa6ca435d1193b2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJDWY3S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcoN6THz3zRABITkmf859soRpeX3Zqa%2F%2FoOH9iE5xHwIgQ%2FOBcaO7HinsjfyvynVGrt4bbbcp9riIjSdlWhaae9AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN50A2LpYSG1xZXVJircA%2BTQeojpAyZADLXDPvA04yy204qQ5fxxpHzKYPaVfibJSN9MWQeEAMqiMDUvAZITnj%2BZM8FlhOLKC3dKDXNGCniHlmu6ssfKeGKOlFgy%2Be7d3G8htz4xv0ZFqcvYUB14TvuVoaSkkjehaXwyOhsr%2F07IaupH4QNjG1A8cLSz4B1HcEpkqC4ILuR0xw%2Fb7%2FQSpHgpLMH0%2FATMMR1964rVNES8IB03ftF4CasObdV26DvvNWdBh0aCfk%2FwW7DR4dtTNaiMzYHvJX21zgu0qCz%2BTElUBPR7pu%2BDhO58cYBGYvWsW9Q%2F%2Brj8hg9AOvJbKwFchfIwu1%2BgzKpTvYmPi5QJbAtkW3EYLCrDjKg0lnfBGi5Yd0uYgI71r6e6BHx3raGwjGGbextZ38H0yk4ZBXhR4gQaMueTo95rgoYZ7tvlge3ujSsVFATDkJkoGVyWuNYOTylsnA8RWrVDX74tIWuPPBkhHEyUUoVLjrum%2BP8j1gCRbNLXWDxyr5Iql%2BeoZMAbELokcUjUgTZNQQnQOhjhys%2BDJzG08qJDquJkSmqhxfEoymfzER7TDlIkHyfju2HaAAYrR%2BEcUSALv6cSSY74nuXQad500AoDPg7ebwvUa1LBQHhWMq8zs%2BTzFOK1MOTjob0GOqUBatMmba5kOkRYO8i7cxhC5DKpkDHrJMe8fabvXbrs%2Bi1tpbJjvcgCxizotP6T%2B7C9XSNV4cHn8heaINwMMAWCwJnDnK1Nb1ICMkdfJN%2BBtADQLI8zmbLoMt8ydZJLbwfGb7J7Gn2oEbxG1XBRsxpXKpZ8T4aLRuOq4U0WuLSAp%2FtO%2Bk9sqx86iQQiQzE3m9jyGRvyru104ForjBwfKBZZ2y6LOumY&X-Amz-Signature=6ef4f18897b53cf32685703b1cc7dfc4fd292dff6573ad076c8ddab4942d0959&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJDWY3S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqcoN6THz3zRABITkmf859soRpeX3Zqa%2F%2FoOH9iE5xHwIgQ%2FOBcaO7HinsjfyvynVGrt4bbbcp9riIjSdlWhaae9AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN50A2LpYSG1xZXVJircA%2BTQeojpAyZADLXDPvA04yy204qQ5fxxpHzKYPaVfibJSN9MWQeEAMqiMDUvAZITnj%2BZM8FlhOLKC3dKDXNGCniHlmu6ssfKeGKOlFgy%2Be7d3G8htz4xv0ZFqcvYUB14TvuVoaSkkjehaXwyOhsr%2F07IaupH4QNjG1A8cLSz4B1HcEpkqC4ILuR0xw%2Fb7%2FQSpHgpLMH0%2FATMMR1964rVNES8IB03ftF4CasObdV26DvvNWdBh0aCfk%2FwW7DR4dtTNaiMzYHvJX21zgu0qCz%2BTElUBPR7pu%2BDhO58cYBGYvWsW9Q%2F%2Brj8hg9AOvJbKwFchfIwu1%2BgzKpTvYmPi5QJbAtkW3EYLCrDjKg0lnfBGi5Yd0uYgI71r6e6BHx3raGwjGGbextZ38H0yk4ZBXhR4gQaMueTo95rgoYZ7tvlge3ujSsVFATDkJkoGVyWuNYOTylsnA8RWrVDX74tIWuPPBkhHEyUUoVLjrum%2BP8j1gCRbNLXWDxyr5Iql%2BeoZMAbELokcUjUgTZNQQnQOhjhys%2BDJzG08qJDquJkSmqhxfEoymfzER7TDlIkHyfju2HaAAYrR%2BEcUSALv6cSSY74nuXQad500AoDPg7ebwvUa1LBQHhWMq8zs%2BTzFOK1MOTjob0GOqUBatMmba5kOkRYO8i7cxhC5DKpkDHrJMe8fabvXbrs%2Bi1tpbJjvcgCxizotP6T%2B7C9XSNV4cHn8heaINwMMAWCwJnDnK1Nb1ICMkdfJN%2BBtADQLI8zmbLoMt8ydZJLbwfGb7J7Gn2oEbxG1XBRsxpXKpZ8T4aLRuOq4U0WuLSAp%2FtO%2Bk9sqx86iQQiQzE3m9jyGRvyru104ForjBwfKBZZ2y6LOumY&X-Amz-Signature=610a156ec0fd5534dc1dfc1b40607c6b81a6ed40c17cdc9763b5a45a8e1dc07d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

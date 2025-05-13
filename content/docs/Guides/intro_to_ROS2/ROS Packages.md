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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6NAFHL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDdVikUDSe58QcxQUTh2Hwz4zVWYQRFm6lUfnIP1W6OwwIge4deebscxd4TMz6s%2FdM%2BQ%2FqufokuFNIs5TU4ehuZuW8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKehjx3%2BV6fOe85lvCrcAyGy7%2Fq%2F%2FmLHb19uCq1S%2BfsmX4QQ15QcNbsfOHm5RrZlG%2F9M6WGC4u9wVgz%2BhWimDodafJh76Ln%2B53xDVLJ0S6hWIKUoqTevRMiq%2FVT2Zfr4d74%2FKNIAS2WL%2Ffun8HTcN4CrlML2klvTaCmRso4no4FHbVPPrmgNntstaInlncNmvULT6HsylV1WWQDbvWyTrKLRXYCjLNxbHpDppBWNyCb2bxboOb6YrtWEklWgWQO5KlQIO6LGina22vY6Qzpmf0gxsK9FpnEWa7VC0Zbk3hnaeSZjIez0NgiRMrzapHV6jG4FeG13hgGia2p%2ByTcgJGq%2Fk2RepgCSWOsHts0c6oq7O%2Fp75nsO0UyFf%2FEAEr0onubR9JLYAKr7URb26X%2BKOKji8d6hYhPrXKK0ZFNlDbJv0RX6qYuSt7IDmWqf64dqVoyDLDLM53raP5xxT4kGGy4Mm08fbOg0B%2FkKKI78FupkulUvMfB3xJ1e4LcNFeuey%2FIwTzY6acYb5lJqh1de2H54lqz5xXz0%2BC4%2Bsr1uudLqnvyjjzB8iAHA9Ue8iOsyqQLrPlry7EDW1FBFhK7f8bc7t9FzS0ivuf7H%2BZOu8q6MC8f5CqF4wOAcaHcdHvemiuGEyd5Bgzw8c1nZMPGni8EGOqUBmBecjfTdL5GbuhVU%2BaJ1HVCE7lSvlhUFMQFUUzuI4mj7n3HGA01nW6Z9ISJa5nwAnB44Zfx%2FVXXyhqo5mTDoeBJ3hA2%2F18IHlqo4QiNUHAGtsCn2QLTDCSe5FZTBsPRl9jJJLhc6s%2FmQ3GK7fLIXbL3QdOX8OvWHda0jZO3UtogZSKb60BxN9wfbp8zYexrft3yGtTPnKm0htALIovppovuEki1M&X-Amz-Signature=6b7351b470dcc1a13e970b86a43f527ad400177f9b8779566a9009947d29a9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6NAFHL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDdVikUDSe58QcxQUTh2Hwz4zVWYQRFm6lUfnIP1W6OwwIge4deebscxd4TMz6s%2FdM%2BQ%2FqufokuFNIs5TU4ehuZuW8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKehjx3%2BV6fOe85lvCrcAyGy7%2Fq%2F%2FmLHb19uCq1S%2BfsmX4QQ15QcNbsfOHm5RrZlG%2F9M6WGC4u9wVgz%2BhWimDodafJh76Ln%2B53xDVLJ0S6hWIKUoqTevRMiq%2FVT2Zfr4d74%2FKNIAS2WL%2Ffun8HTcN4CrlML2klvTaCmRso4no4FHbVPPrmgNntstaInlncNmvULT6HsylV1WWQDbvWyTrKLRXYCjLNxbHpDppBWNyCb2bxboOb6YrtWEklWgWQO5KlQIO6LGina22vY6Qzpmf0gxsK9FpnEWa7VC0Zbk3hnaeSZjIez0NgiRMrzapHV6jG4FeG13hgGia2p%2ByTcgJGq%2Fk2RepgCSWOsHts0c6oq7O%2Fp75nsO0UyFf%2FEAEr0onubR9JLYAKr7URb26X%2BKOKji8d6hYhPrXKK0ZFNlDbJv0RX6qYuSt7IDmWqf64dqVoyDLDLM53raP5xxT4kGGy4Mm08fbOg0B%2FkKKI78FupkulUvMfB3xJ1e4LcNFeuey%2FIwTzY6acYb5lJqh1de2H54lqz5xXz0%2BC4%2Bsr1uudLqnvyjjzB8iAHA9Ue8iOsyqQLrPlry7EDW1FBFhK7f8bc7t9FzS0ivuf7H%2BZOu8q6MC8f5CqF4wOAcaHcdHvemiuGEyd5Bgzw8c1nZMPGni8EGOqUBmBecjfTdL5GbuhVU%2BaJ1HVCE7lSvlhUFMQFUUzuI4mj7n3HGA01nW6Z9ISJa5nwAnB44Zfx%2FVXXyhqo5mTDoeBJ3hA2%2F18IHlqo4QiNUHAGtsCn2QLTDCSe5FZTBsPRl9jJJLhc6s%2FmQ3GK7fLIXbL3QdOX8OvWHda0jZO3UtogZSKb60BxN9wfbp8zYexrft3yGtTPnKm0htALIovppovuEki1M&X-Amz-Signature=c8d17bbd4a902f3dd9ee4cdb5eadbf9fe75bfaaaa49f7d1dc5ab2ab952c9d537&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6NAFHL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDdVikUDSe58QcxQUTh2Hwz4zVWYQRFm6lUfnIP1W6OwwIge4deebscxd4TMz6s%2FdM%2BQ%2FqufokuFNIs5TU4ehuZuW8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKehjx3%2BV6fOe85lvCrcAyGy7%2Fq%2F%2FmLHb19uCq1S%2BfsmX4QQ15QcNbsfOHm5RrZlG%2F9M6WGC4u9wVgz%2BhWimDodafJh76Ln%2B53xDVLJ0S6hWIKUoqTevRMiq%2FVT2Zfr4d74%2FKNIAS2WL%2Ffun8HTcN4CrlML2klvTaCmRso4no4FHbVPPrmgNntstaInlncNmvULT6HsylV1WWQDbvWyTrKLRXYCjLNxbHpDppBWNyCb2bxboOb6YrtWEklWgWQO5KlQIO6LGina22vY6Qzpmf0gxsK9FpnEWa7VC0Zbk3hnaeSZjIez0NgiRMrzapHV6jG4FeG13hgGia2p%2ByTcgJGq%2Fk2RepgCSWOsHts0c6oq7O%2Fp75nsO0UyFf%2FEAEr0onubR9JLYAKr7URb26X%2BKOKji8d6hYhPrXKK0ZFNlDbJv0RX6qYuSt7IDmWqf64dqVoyDLDLM53raP5xxT4kGGy4Mm08fbOg0B%2FkKKI78FupkulUvMfB3xJ1e4LcNFeuey%2FIwTzY6acYb5lJqh1de2H54lqz5xXz0%2BC4%2Bsr1uudLqnvyjjzB8iAHA9Ue8iOsyqQLrPlry7EDW1FBFhK7f8bc7t9FzS0ivuf7H%2BZOu8q6MC8f5CqF4wOAcaHcdHvemiuGEyd5Bgzw8c1nZMPGni8EGOqUBmBecjfTdL5GbuhVU%2BaJ1HVCE7lSvlhUFMQFUUzuI4mj7n3HGA01nW6Z9ISJa5nwAnB44Zfx%2FVXXyhqo5mTDoeBJ3hA2%2F18IHlqo4QiNUHAGtsCn2QLTDCSe5FZTBsPRl9jJJLhc6s%2FmQ3GK7fLIXbL3QdOX8OvWHda0jZO3UtogZSKb60BxN9wfbp8zYexrft3yGtTPnKm0htALIovppovuEki1M&X-Amz-Signature=cc02afa769bddb726a96e73450a6225cd6bfef402838518b058b2f2a30dc9c32&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6NAFHL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDdVikUDSe58QcxQUTh2Hwz4zVWYQRFm6lUfnIP1W6OwwIge4deebscxd4TMz6s%2FdM%2BQ%2FqufokuFNIs5TU4ehuZuW8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKehjx3%2BV6fOe85lvCrcAyGy7%2Fq%2F%2FmLHb19uCq1S%2BfsmX4QQ15QcNbsfOHm5RrZlG%2F9M6WGC4u9wVgz%2BhWimDodafJh76Ln%2B53xDVLJ0S6hWIKUoqTevRMiq%2FVT2Zfr4d74%2FKNIAS2WL%2Ffun8HTcN4CrlML2klvTaCmRso4no4FHbVPPrmgNntstaInlncNmvULT6HsylV1WWQDbvWyTrKLRXYCjLNxbHpDppBWNyCb2bxboOb6YrtWEklWgWQO5KlQIO6LGina22vY6Qzpmf0gxsK9FpnEWa7VC0Zbk3hnaeSZjIez0NgiRMrzapHV6jG4FeG13hgGia2p%2ByTcgJGq%2Fk2RepgCSWOsHts0c6oq7O%2Fp75nsO0UyFf%2FEAEr0onubR9JLYAKr7URb26X%2BKOKji8d6hYhPrXKK0ZFNlDbJv0RX6qYuSt7IDmWqf64dqVoyDLDLM53raP5xxT4kGGy4Mm08fbOg0B%2FkKKI78FupkulUvMfB3xJ1e4LcNFeuey%2FIwTzY6acYb5lJqh1de2H54lqz5xXz0%2BC4%2Bsr1uudLqnvyjjzB8iAHA9Ue8iOsyqQLrPlry7EDW1FBFhK7f8bc7t9FzS0ivuf7H%2BZOu8q6MC8f5CqF4wOAcaHcdHvemiuGEyd5Bgzw8c1nZMPGni8EGOqUBmBecjfTdL5GbuhVU%2BaJ1HVCE7lSvlhUFMQFUUzuI4mj7n3HGA01nW6Z9ISJa5nwAnB44Zfx%2FVXXyhqo5mTDoeBJ3hA2%2F18IHlqo4QiNUHAGtsCn2QLTDCSe5FZTBsPRl9jJJLhc6s%2FmQ3GK7fLIXbL3QdOX8OvWHda0jZO3UtogZSKb60BxN9wfbp8zYexrft3yGtTPnKm0htALIovppovuEki1M&X-Amz-Signature=5be7db18a464de4b78ea77dacaabecdc2e8661e59ffb68d2e1574a66076d7568&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6NAFHL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDdVikUDSe58QcxQUTh2Hwz4zVWYQRFm6lUfnIP1W6OwwIge4deebscxd4TMz6s%2FdM%2BQ%2FqufokuFNIs5TU4ehuZuW8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKehjx3%2BV6fOe85lvCrcAyGy7%2Fq%2F%2FmLHb19uCq1S%2BfsmX4QQ15QcNbsfOHm5RrZlG%2F9M6WGC4u9wVgz%2BhWimDodafJh76Ln%2B53xDVLJ0S6hWIKUoqTevRMiq%2FVT2Zfr4d74%2FKNIAS2WL%2Ffun8HTcN4CrlML2klvTaCmRso4no4FHbVPPrmgNntstaInlncNmvULT6HsylV1WWQDbvWyTrKLRXYCjLNxbHpDppBWNyCb2bxboOb6YrtWEklWgWQO5KlQIO6LGina22vY6Qzpmf0gxsK9FpnEWa7VC0Zbk3hnaeSZjIez0NgiRMrzapHV6jG4FeG13hgGia2p%2ByTcgJGq%2Fk2RepgCSWOsHts0c6oq7O%2Fp75nsO0UyFf%2FEAEr0onubR9JLYAKr7URb26X%2BKOKji8d6hYhPrXKK0ZFNlDbJv0RX6qYuSt7IDmWqf64dqVoyDLDLM53raP5xxT4kGGy4Mm08fbOg0B%2FkKKI78FupkulUvMfB3xJ1e4LcNFeuey%2FIwTzY6acYb5lJqh1de2H54lqz5xXz0%2BC4%2Bsr1uudLqnvyjjzB8iAHA9Ue8iOsyqQLrPlry7EDW1FBFhK7f8bc7t9FzS0ivuf7H%2BZOu8q6MC8f5CqF4wOAcaHcdHvemiuGEyd5Bgzw8c1nZMPGni8EGOqUBmBecjfTdL5GbuhVU%2BaJ1HVCE7lSvlhUFMQFUUzuI4mj7n3HGA01nW6Z9ISJa5nwAnB44Zfx%2FVXXyhqo5mTDoeBJ3hA2%2F18IHlqo4QiNUHAGtsCn2QLTDCSe5FZTBsPRl9jJJLhc6s%2FmQ3GK7fLIXbL3QdOX8OvWHda0jZO3UtogZSKb60BxN9wfbp8zYexrft3yGtTPnKm0htALIovppovuEki1M&X-Amz-Signature=a3230980f574f47001aee10a3e4322a5d988406bdd9a467098e6b0210080b8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6NAFHL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDdVikUDSe58QcxQUTh2Hwz4zVWYQRFm6lUfnIP1W6OwwIge4deebscxd4TMz6s%2FdM%2BQ%2FqufokuFNIs5TU4ehuZuW8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKehjx3%2BV6fOe85lvCrcAyGy7%2Fq%2F%2FmLHb19uCq1S%2BfsmX4QQ15QcNbsfOHm5RrZlG%2F9M6WGC4u9wVgz%2BhWimDodafJh76Ln%2B53xDVLJ0S6hWIKUoqTevRMiq%2FVT2Zfr4d74%2FKNIAS2WL%2Ffun8HTcN4CrlML2klvTaCmRso4no4FHbVPPrmgNntstaInlncNmvULT6HsylV1WWQDbvWyTrKLRXYCjLNxbHpDppBWNyCb2bxboOb6YrtWEklWgWQO5KlQIO6LGina22vY6Qzpmf0gxsK9FpnEWa7VC0Zbk3hnaeSZjIez0NgiRMrzapHV6jG4FeG13hgGia2p%2ByTcgJGq%2Fk2RepgCSWOsHts0c6oq7O%2Fp75nsO0UyFf%2FEAEr0onubR9JLYAKr7URb26X%2BKOKji8d6hYhPrXKK0ZFNlDbJv0RX6qYuSt7IDmWqf64dqVoyDLDLM53raP5xxT4kGGy4Mm08fbOg0B%2FkKKI78FupkulUvMfB3xJ1e4LcNFeuey%2FIwTzY6acYb5lJqh1de2H54lqz5xXz0%2BC4%2Bsr1uudLqnvyjjzB8iAHA9Ue8iOsyqQLrPlry7EDW1FBFhK7f8bc7t9FzS0ivuf7H%2BZOu8q6MC8f5CqF4wOAcaHcdHvemiuGEyd5Bgzw8c1nZMPGni8EGOqUBmBecjfTdL5GbuhVU%2BaJ1HVCE7lSvlhUFMQFUUzuI4mj7n3HGA01nW6Z9ISJa5nwAnB44Zfx%2FVXXyhqo5mTDoeBJ3hA2%2F18IHlqo4QiNUHAGtsCn2QLTDCSe5FZTBsPRl9jJJLhc6s%2FmQ3GK7fLIXbL3QdOX8OvWHda0jZO3UtogZSKb60BxN9wfbp8zYexrft3yGtTPnKm0htALIovppovuEki1M&X-Amz-Signature=c05c51ea87b047b9fee8142ee442481bc8bf0e759912205c3277ee91bab4e6ed&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6NAFHL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDdVikUDSe58QcxQUTh2Hwz4zVWYQRFm6lUfnIP1W6OwwIge4deebscxd4TMz6s%2FdM%2BQ%2FqufokuFNIs5TU4ehuZuW8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKehjx3%2BV6fOe85lvCrcAyGy7%2Fq%2F%2FmLHb19uCq1S%2BfsmX4QQ15QcNbsfOHm5RrZlG%2F9M6WGC4u9wVgz%2BhWimDodafJh76Ln%2B53xDVLJ0S6hWIKUoqTevRMiq%2FVT2Zfr4d74%2FKNIAS2WL%2Ffun8HTcN4CrlML2klvTaCmRso4no4FHbVPPrmgNntstaInlncNmvULT6HsylV1WWQDbvWyTrKLRXYCjLNxbHpDppBWNyCb2bxboOb6YrtWEklWgWQO5KlQIO6LGina22vY6Qzpmf0gxsK9FpnEWa7VC0Zbk3hnaeSZjIez0NgiRMrzapHV6jG4FeG13hgGia2p%2ByTcgJGq%2Fk2RepgCSWOsHts0c6oq7O%2Fp75nsO0UyFf%2FEAEr0onubR9JLYAKr7URb26X%2BKOKji8d6hYhPrXKK0ZFNlDbJv0RX6qYuSt7IDmWqf64dqVoyDLDLM53raP5xxT4kGGy4Mm08fbOg0B%2FkKKI78FupkulUvMfB3xJ1e4LcNFeuey%2FIwTzY6acYb5lJqh1de2H54lqz5xXz0%2BC4%2Bsr1uudLqnvyjjzB8iAHA9Ue8iOsyqQLrPlry7EDW1FBFhK7f8bc7t9FzS0ivuf7H%2BZOu8q6MC8f5CqF4wOAcaHcdHvemiuGEyd5Bgzw8c1nZMPGni8EGOqUBmBecjfTdL5GbuhVU%2BaJ1HVCE7lSvlhUFMQFUUzuI4mj7n3HGA01nW6Z9ISJa5nwAnB44Zfx%2FVXXyhqo5mTDoeBJ3hA2%2F18IHlqo4QiNUHAGtsCn2QLTDCSe5FZTBsPRl9jJJLhc6s%2FmQ3GK7fLIXbL3QdOX8OvWHda0jZO3UtogZSKb60BxN9wfbp8zYexrft3yGtTPnKm0htALIovppovuEki1M&X-Amz-Signature=946146c6a24b6f59a86827ebfe759e765b9ccd2722f68ff4b47b3ff3c7bc8531&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

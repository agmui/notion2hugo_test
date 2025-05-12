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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEROZ2Q%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsugpu8dJShGmUit6V%2BxLDGYJvDPzHlfkMnj77GAPABgIhALm7GAlNmMoY2%2BPS9hVwtpU3EYQC%2Fbbs4umLdyQq2nPrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3RGZUpiJ6Qr%2BCfjAq3AO0XwVbwaVca%2B2LSZFCsxgYxgP2W9Zy%2FHkuMqRrLJ%2B5v6%2BzmYlIf6dEO68FbUsHCc6bXm3RRH51gzaMz%2FolklS7HToVmYD5H29DYaZrj4qMX21jT8JUD4JTr0gK0%2Fan0SuwpPMPaLvbvJ4h2VlHJr58tsB0jaU57OdKYqaR33YWr8pA0FD3%2BKIbvw5EfVXuIIT99fJDF1pzRAJ1aXN%2F5aPgzg5JR9n9YWOXtIjWmm9L9KPmw0KbLh8Wnz%2FE1Abd1whdS9eOASkC13fWHWDnwVmkYO%2Bx3ctG3pePU1H%2F27t%2BuqiR7ZQnXA%2BDr62k6BjJzesj2MS4oNFUHr8OP5XcBgSDR68mUTZvImhC52hyk13KfW9UEmihk1OJ81uJ1J6h2QHNVu48GQeeQyoY7%2BMIHhS93cbL8%2FkiMrQkmFiNnC67bO%2FYs8H6Vg3xaTTqAswPI8u7oGRXEN46Mdv4LfspMEyWMHtzS4Rnwdbyyjg79JGQ9NDjHk2XBH0pQKHwwUyohgLanbKJQZ4SwavCrS80kKGveEK3ej%2F7r9LcFk3qcv60ixeS9tjtMt92e8qEGuNlO6iG9eLBqLfZD6LqRP4ZuMOPtEIa6bTri2z5AgmAcncu5l8Er1BeXzk%2F%2BXqbizDb64fBBjqkAZw1L7xk6KK2tpvMz43wcJgSQ3Bzu8DG3uxoD92nx%2BwKQVgh2%2F5m0RjZK6frwHyLqoNP1J%2BF5Ce%2FhpPm4K%2F%2F1sghqbK3rl5QtG3Z1h5o4suCcPHVX81QmUgba7%2BkRGOpmC7u9WJ9DR24H7MIsgEvZ7wsl83dO4%2F3G8bhhE3ZhaFjVavsEWNdAaywtCaqh8AF39Id2TVFg8BBU6CYHwy3uSb%2FtYYp&X-Amz-Signature=a1ff3fb78e3a4940f999c21a508b7b774048726fa81d43f29ec110627ef553c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEROZ2Q%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsugpu8dJShGmUit6V%2BxLDGYJvDPzHlfkMnj77GAPABgIhALm7GAlNmMoY2%2BPS9hVwtpU3EYQC%2Fbbs4umLdyQq2nPrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3RGZUpiJ6Qr%2BCfjAq3AO0XwVbwaVca%2B2LSZFCsxgYxgP2W9Zy%2FHkuMqRrLJ%2B5v6%2BzmYlIf6dEO68FbUsHCc6bXm3RRH51gzaMz%2FolklS7HToVmYD5H29DYaZrj4qMX21jT8JUD4JTr0gK0%2Fan0SuwpPMPaLvbvJ4h2VlHJr58tsB0jaU57OdKYqaR33YWr8pA0FD3%2BKIbvw5EfVXuIIT99fJDF1pzRAJ1aXN%2F5aPgzg5JR9n9YWOXtIjWmm9L9KPmw0KbLh8Wnz%2FE1Abd1whdS9eOASkC13fWHWDnwVmkYO%2Bx3ctG3pePU1H%2F27t%2BuqiR7ZQnXA%2BDr62k6BjJzesj2MS4oNFUHr8OP5XcBgSDR68mUTZvImhC52hyk13KfW9UEmihk1OJ81uJ1J6h2QHNVu48GQeeQyoY7%2BMIHhS93cbL8%2FkiMrQkmFiNnC67bO%2FYs8H6Vg3xaTTqAswPI8u7oGRXEN46Mdv4LfspMEyWMHtzS4Rnwdbyyjg79JGQ9NDjHk2XBH0pQKHwwUyohgLanbKJQZ4SwavCrS80kKGveEK3ej%2F7r9LcFk3qcv60ixeS9tjtMt92e8qEGuNlO6iG9eLBqLfZD6LqRP4ZuMOPtEIa6bTri2z5AgmAcncu5l8Er1BeXzk%2F%2BXqbizDb64fBBjqkAZw1L7xk6KK2tpvMz43wcJgSQ3Bzu8DG3uxoD92nx%2BwKQVgh2%2F5m0RjZK6frwHyLqoNP1J%2BF5Ce%2FhpPm4K%2F%2F1sghqbK3rl5QtG3Z1h5o4suCcPHVX81QmUgba7%2BkRGOpmC7u9WJ9DR24H7MIsgEvZ7wsl83dO4%2F3G8bhhE3ZhaFjVavsEWNdAaywtCaqh8AF39Id2TVFg8BBU6CYHwy3uSb%2FtYYp&X-Amz-Signature=893faece44c8437174651ad129b54ff6724544c0c603991f2c7a3061e8915014&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEROZ2Q%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsugpu8dJShGmUit6V%2BxLDGYJvDPzHlfkMnj77GAPABgIhALm7GAlNmMoY2%2BPS9hVwtpU3EYQC%2Fbbs4umLdyQq2nPrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3RGZUpiJ6Qr%2BCfjAq3AO0XwVbwaVca%2B2LSZFCsxgYxgP2W9Zy%2FHkuMqRrLJ%2B5v6%2BzmYlIf6dEO68FbUsHCc6bXm3RRH51gzaMz%2FolklS7HToVmYD5H29DYaZrj4qMX21jT8JUD4JTr0gK0%2Fan0SuwpPMPaLvbvJ4h2VlHJr58tsB0jaU57OdKYqaR33YWr8pA0FD3%2BKIbvw5EfVXuIIT99fJDF1pzRAJ1aXN%2F5aPgzg5JR9n9YWOXtIjWmm9L9KPmw0KbLh8Wnz%2FE1Abd1whdS9eOASkC13fWHWDnwVmkYO%2Bx3ctG3pePU1H%2F27t%2BuqiR7ZQnXA%2BDr62k6BjJzesj2MS4oNFUHr8OP5XcBgSDR68mUTZvImhC52hyk13KfW9UEmihk1OJ81uJ1J6h2QHNVu48GQeeQyoY7%2BMIHhS93cbL8%2FkiMrQkmFiNnC67bO%2FYs8H6Vg3xaTTqAswPI8u7oGRXEN46Mdv4LfspMEyWMHtzS4Rnwdbyyjg79JGQ9NDjHk2XBH0pQKHwwUyohgLanbKJQZ4SwavCrS80kKGveEK3ej%2F7r9LcFk3qcv60ixeS9tjtMt92e8qEGuNlO6iG9eLBqLfZD6LqRP4ZuMOPtEIa6bTri2z5AgmAcncu5l8Er1BeXzk%2F%2BXqbizDb64fBBjqkAZw1L7xk6KK2tpvMz43wcJgSQ3Bzu8DG3uxoD92nx%2BwKQVgh2%2F5m0RjZK6frwHyLqoNP1J%2BF5Ce%2FhpPm4K%2F%2F1sghqbK3rl5QtG3Z1h5o4suCcPHVX81QmUgba7%2BkRGOpmC7u9WJ9DR24H7MIsgEvZ7wsl83dO4%2F3G8bhhE3ZhaFjVavsEWNdAaywtCaqh8AF39Id2TVFg8BBU6CYHwy3uSb%2FtYYp&X-Amz-Signature=cfcdfd33543e646447a13956002b13e837291be7a88c3525ca9ffb1395a3c82d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEROZ2Q%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsugpu8dJShGmUit6V%2BxLDGYJvDPzHlfkMnj77GAPABgIhALm7GAlNmMoY2%2BPS9hVwtpU3EYQC%2Fbbs4umLdyQq2nPrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3RGZUpiJ6Qr%2BCfjAq3AO0XwVbwaVca%2B2LSZFCsxgYxgP2W9Zy%2FHkuMqRrLJ%2B5v6%2BzmYlIf6dEO68FbUsHCc6bXm3RRH51gzaMz%2FolklS7HToVmYD5H29DYaZrj4qMX21jT8JUD4JTr0gK0%2Fan0SuwpPMPaLvbvJ4h2VlHJr58tsB0jaU57OdKYqaR33YWr8pA0FD3%2BKIbvw5EfVXuIIT99fJDF1pzRAJ1aXN%2F5aPgzg5JR9n9YWOXtIjWmm9L9KPmw0KbLh8Wnz%2FE1Abd1whdS9eOASkC13fWHWDnwVmkYO%2Bx3ctG3pePU1H%2F27t%2BuqiR7ZQnXA%2BDr62k6BjJzesj2MS4oNFUHr8OP5XcBgSDR68mUTZvImhC52hyk13KfW9UEmihk1OJ81uJ1J6h2QHNVu48GQeeQyoY7%2BMIHhS93cbL8%2FkiMrQkmFiNnC67bO%2FYs8H6Vg3xaTTqAswPI8u7oGRXEN46Mdv4LfspMEyWMHtzS4Rnwdbyyjg79JGQ9NDjHk2XBH0pQKHwwUyohgLanbKJQZ4SwavCrS80kKGveEK3ej%2F7r9LcFk3qcv60ixeS9tjtMt92e8qEGuNlO6iG9eLBqLfZD6LqRP4ZuMOPtEIa6bTri2z5AgmAcncu5l8Er1BeXzk%2F%2BXqbizDb64fBBjqkAZw1L7xk6KK2tpvMz43wcJgSQ3Bzu8DG3uxoD92nx%2BwKQVgh2%2F5m0RjZK6frwHyLqoNP1J%2BF5Ce%2FhpPm4K%2F%2F1sghqbK3rl5QtG3Z1h5o4suCcPHVX81QmUgba7%2BkRGOpmC7u9WJ9DR24H7MIsgEvZ7wsl83dO4%2F3G8bhhE3ZhaFjVavsEWNdAaywtCaqh8AF39Id2TVFg8BBU6CYHwy3uSb%2FtYYp&X-Amz-Signature=fa8b41ea07a193c8488286c95ac8f18e0fe96b82bcdfedd95c143fb753195d01&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEROZ2Q%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsugpu8dJShGmUit6V%2BxLDGYJvDPzHlfkMnj77GAPABgIhALm7GAlNmMoY2%2BPS9hVwtpU3EYQC%2Fbbs4umLdyQq2nPrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3RGZUpiJ6Qr%2BCfjAq3AO0XwVbwaVca%2B2LSZFCsxgYxgP2W9Zy%2FHkuMqRrLJ%2B5v6%2BzmYlIf6dEO68FbUsHCc6bXm3RRH51gzaMz%2FolklS7HToVmYD5H29DYaZrj4qMX21jT8JUD4JTr0gK0%2Fan0SuwpPMPaLvbvJ4h2VlHJr58tsB0jaU57OdKYqaR33YWr8pA0FD3%2BKIbvw5EfVXuIIT99fJDF1pzRAJ1aXN%2F5aPgzg5JR9n9YWOXtIjWmm9L9KPmw0KbLh8Wnz%2FE1Abd1whdS9eOASkC13fWHWDnwVmkYO%2Bx3ctG3pePU1H%2F27t%2BuqiR7ZQnXA%2BDr62k6BjJzesj2MS4oNFUHr8OP5XcBgSDR68mUTZvImhC52hyk13KfW9UEmihk1OJ81uJ1J6h2QHNVu48GQeeQyoY7%2BMIHhS93cbL8%2FkiMrQkmFiNnC67bO%2FYs8H6Vg3xaTTqAswPI8u7oGRXEN46Mdv4LfspMEyWMHtzS4Rnwdbyyjg79JGQ9NDjHk2XBH0pQKHwwUyohgLanbKJQZ4SwavCrS80kKGveEK3ej%2F7r9LcFk3qcv60ixeS9tjtMt92e8qEGuNlO6iG9eLBqLfZD6LqRP4ZuMOPtEIa6bTri2z5AgmAcncu5l8Er1BeXzk%2F%2BXqbizDb64fBBjqkAZw1L7xk6KK2tpvMz43wcJgSQ3Bzu8DG3uxoD92nx%2BwKQVgh2%2F5m0RjZK6frwHyLqoNP1J%2BF5Ce%2FhpPm4K%2F%2F1sghqbK3rl5QtG3Z1h5o4suCcPHVX81QmUgba7%2BkRGOpmC7u9WJ9DR24H7MIsgEvZ7wsl83dO4%2F3G8bhhE3ZhaFjVavsEWNdAaywtCaqh8AF39Id2TVFg8BBU6CYHwy3uSb%2FtYYp&X-Amz-Signature=4efb67dfef7689a52530f275accacb40a4c7e237cd202e801ae46ae9e23b5d94&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEROZ2Q%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsugpu8dJShGmUit6V%2BxLDGYJvDPzHlfkMnj77GAPABgIhALm7GAlNmMoY2%2BPS9hVwtpU3EYQC%2Fbbs4umLdyQq2nPrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3RGZUpiJ6Qr%2BCfjAq3AO0XwVbwaVca%2B2LSZFCsxgYxgP2W9Zy%2FHkuMqRrLJ%2B5v6%2BzmYlIf6dEO68FbUsHCc6bXm3RRH51gzaMz%2FolklS7HToVmYD5H29DYaZrj4qMX21jT8JUD4JTr0gK0%2Fan0SuwpPMPaLvbvJ4h2VlHJr58tsB0jaU57OdKYqaR33YWr8pA0FD3%2BKIbvw5EfVXuIIT99fJDF1pzRAJ1aXN%2F5aPgzg5JR9n9YWOXtIjWmm9L9KPmw0KbLh8Wnz%2FE1Abd1whdS9eOASkC13fWHWDnwVmkYO%2Bx3ctG3pePU1H%2F27t%2BuqiR7ZQnXA%2BDr62k6BjJzesj2MS4oNFUHr8OP5XcBgSDR68mUTZvImhC52hyk13KfW9UEmihk1OJ81uJ1J6h2QHNVu48GQeeQyoY7%2BMIHhS93cbL8%2FkiMrQkmFiNnC67bO%2FYs8H6Vg3xaTTqAswPI8u7oGRXEN46Mdv4LfspMEyWMHtzS4Rnwdbyyjg79JGQ9NDjHk2XBH0pQKHwwUyohgLanbKJQZ4SwavCrS80kKGveEK3ej%2F7r9LcFk3qcv60ixeS9tjtMt92e8qEGuNlO6iG9eLBqLfZD6LqRP4ZuMOPtEIa6bTri2z5AgmAcncu5l8Er1BeXzk%2F%2BXqbizDb64fBBjqkAZw1L7xk6KK2tpvMz43wcJgSQ3Bzu8DG3uxoD92nx%2BwKQVgh2%2F5m0RjZK6frwHyLqoNP1J%2BF5Ce%2FhpPm4K%2F%2F1sghqbK3rl5QtG3Z1h5o4suCcPHVX81QmUgba7%2BkRGOpmC7u9WJ9DR24H7MIsgEvZ7wsl83dO4%2F3G8bhhE3ZhaFjVavsEWNdAaywtCaqh8AF39Id2TVFg8BBU6CYHwy3uSb%2FtYYp&X-Amz-Signature=4792eeca1d0e6f217b03cc270d93c74acfa705f5ee40f72d144ac4cd3304a64b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEROZ2Q%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsugpu8dJShGmUit6V%2BxLDGYJvDPzHlfkMnj77GAPABgIhALm7GAlNmMoY2%2BPS9hVwtpU3EYQC%2Fbbs4umLdyQq2nPrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3RGZUpiJ6Qr%2BCfjAq3AO0XwVbwaVca%2B2LSZFCsxgYxgP2W9Zy%2FHkuMqRrLJ%2B5v6%2BzmYlIf6dEO68FbUsHCc6bXm3RRH51gzaMz%2FolklS7HToVmYD5H29DYaZrj4qMX21jT8JUD4JTr0gK0%2Fan0SuwpPMPaLvbvJ4h2VlHJr58tsB0jaU57OdKYqaR33YWr8pA0FD3%2BKIbvw5EfVXuIIT99fJDF1pzRAJ1aXN%2F5aPgzg5JR9n9YWOXtIjWmm9L9KPmw0KbLh8Wnz%2FE1Abd1whdS9eOASkC13fWHWDnwVmkYO%2Bx3ctG3pePU1H%2F27t%2BuqiR7ZQnXA%2BDr62k6BjJzesj2MS4oNFUHr8OP5XcBgSDR68mUTZvImhC52hyk13KfW9UEmihk1OJ81uJ1J6h2QHNVu48GQeeQyoY7%2BMIHhS93cbL8%2FkiMrQkmFiNnC67bO%2FYs8H6Vg3xaTTqAswPI8u7oGRXEN46Mdv4LfspMEyWMHtzS4Rnwdbyyjg79JGQ9NDjHk2XBH0pQKHwwUyohgLanbKJQZ4SwavCrS80kKGveEK3ej%2F7r9LcFk3qcv60ixeS9tjtMt92e8qEGuNlO6iG9eLBqLfZD6LqRP4ZuMOPtEIa6bTri2z5AgmAcncu5l8Er1BeXzk%2F%2BXqbizDb64fBBjqkAZw1L7xk6KK2tpvMz43wcJgSQ3Bzu8DG3uxoD92nx%2BwKQVgh2%2F5m0RjZK6frwHyLqoNP1J%2BF5Ce%2FhpPm4K%2F%2F1sghqbK3rl5QtG3Z1h5o4suCcPHVX81QmUgba7%2BkRGOpmC7u9WJ9DR24H7MIsgEvZ7wsl83dO4%2F3G8bhhE3ZhaFjVavsEWNdAaywtCaqh8AF39Id2TVFg8BBU6CYHwy3uSb%2FtYYp&X-Amz-Signature=e5d3310d738ce5ff1bfcd23c8dc2eea7fcbdec45fb7dad2a3e2dc134dd6134ab&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SZY3ZJ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjTsAW%2FishcTiYm9VUSlZw2bkh2q1%2FWbVG4%2FOoSocGLAiEA%2FYhq8cLDsq%2FazLLD0hkMCYRIKzWDkwOrq065Uv1K8D0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO%2FQiPK1b0UnJqXleCrcA0C3p62%2Bjk4UyiewKHkzRSGyhr4%2FxpPC7dv5Oz6LvrJrFJThJoPEtfjQspATyUic6YzWLUk5ezr0QFaGWZCq5PyTNqZ4FqKVZOJN74NyEmr6nxudhYnpFXosXHYKBbU1JwVY9UJvMjpk%2FyTfmhZJbD4RuUN4YZMrSoDux%2FJFlGszA6tg6H%2FN5CeJLWF%2F1JAWfA84RZ%2Bk2qKZ17blEEfElP4kTc0EjQTJ2%2FH4RYIp1tIA7lUBIyOqvY24ZLIPlfi033y6OimSHjXxxhEKXnvsRb5a3pzeTmplGFbLBnoPWeNaHaxECZxu5gRBvMibuGWZszOOYTHmFA7rH2Qpa82PLBCLUz%2BbYnhpQWQpq5rmdjSMX6r9nBlW0ZXhGobrT3Elpw5BuLZqup4LYr%2BQ59PD6MQVTz%2FXpwUb4qzUejNHTsBP0T%2F%2BuvrawebREU7Zv1bwOyA160f6kxrCjL4K0PWUpZcMiSJPev3JUNhuyk0DvACYbVzzlB5kz8%2FHawr5%2Bx5TaO7qhqeVtvjkOLrxKn1Fa%2FD33HgLgkbKN8VjO0WIuEo%2BJVGckb0IwjZJYvTRZRb3TXm%2FpYfjtiiecFXxTvnqs%2FRluV3UcP2zIqAs%2B%2FzJaKiLFxcb2OlQJyLQluJWMPzQydQGOqUBBDdmh5EHVODBvzsjn67od3%2Fos0%2FXVEvmTNP8qaBzo02DTNuOb4%2FEMDVfkmMlsLXpN3sHQ5lYgRUelHBK4hGWlRKvAzC3BF42851oGEOuPl05JhGq%2BtRdvZkfANjxmWYLLEYNpwNMsFDZGVpjJqbVsx5yMs2EWlnmJUBg%2BfK3yX5Gk%2FaH9Fr38ZU%2FrYP%2BK1hOj7X07QtZZ3rrAxulsT6Eq56dWQmL&X-Amz-Signature=d774a41d0d043090064a57c27bb4efaa850b59bbee5fe3734a6dfe3cadbf1aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SZY3ZJ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjTsAW%2FishcTiYm9VUSlZw2bkh2q1%2FWbVG4%2FOoSocGLAiEA%2FYhq8cLDsq%2FazLLD0hkMCYRIKzWDkwOrq065Uv1K8D0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO%2FQiPK1b0UnJqXleCrcA0C3p62%2Bjk4UyiewKHkzRSGyhr4%2FxpPC7dv5Oz6LvrJrFJThJoPEtfjQspATyUic6YzWLUk5ezr0QFaGWZCq5PyTNqZ4FqKVZOJN74NyEmr6nxudhYnpFXosXHYKBbU1JwVY9UJvMjpk%2FyTfmhZJbD4RuUN4YZMrSoDux%2FJFlGszA6tg6H%2FN5CeJLWF%2F1JAWfA84RZ%2Bk2qKZ17blEEfElP4kTc0EjQTJ2%2FH4RYIp1tIA7lUBIyOqvY24ZLIPlfi033y6OimSHjXxxhEKXnvsRb5a3pzeTmplGFbLBnoPWeNaHaxECZxu5gRBvMibuGWZszOOYTHmFA7rH2Qpa82PLBCLUz%2BbYnhpQWQpq5rmdjSMX6r9nBlW0ZXhGobrT3Elpw5BuLZqup4LYr%2BQ59PD6MQVTz%2FXpwUb4qzUejNHTsBP0T%2F%2BuvrawebREU7Zv1bwOyA160f6kxrCjL4K0PWUpZcMiSJPev3JUNhuyk0DvACYbVzzlB5kz8%2FHawr5%2Bx5TaO7qhqeVtvjkOLrxKn1Fa%2FD33HgLgkbKN8VjO0WIuEo%2BJVGckb0IwjZJYvTRZRb3TXm%2FpYfjtiiecFXxTvnqs%2FRluV3UcP2zIqAs%2B%2FzJaKiLFxcb2OlQJyLQluJWMPzQydQGOqUBBDdmh5EHVODBvzsjn67od3%2Fos0%2FXVEvmTNP8qaBzo02DTNuOb4%2FEMDVfkmMlsLXpN3sHQ5lYgRUelHBK4hGWlRKvAzC3BF42851oGEOuPl05JhGq%2BtRdvZkfANjxmWYLLEYNpwNMsFDZGVpjJqbVsx5yMs2EWlnmJUBg%2BfK3yX5Gk%2FaH9Fr38ZU%2FrYP%2BK1hOj7X07QtZZ3rrAxulsT6Eq56dWQmL&X-Amz-Signature=d57be7819c310ca01d1a242f9c5a5d364a1ebdccb4569d4e940210bf719712a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SZY3ZJ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjTsAW%2FishcTiYm9VUSlZw2bkh2q1%2FWbVG4%2FOoSocGLAiEA%2FYhq8cLDsq%2FazLLD0hkMCYRIKzWDkwOrq065Uv1K8D0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO%2FQiPK1b0UnJqXleCrcA0C3p62%2Bjk4UyiewKHkzRSGyhr4%2FxpPC7dv5Oz6LvrJrFJThJoPEtfjQspATyUic6YzWLUk5ezr0QFaGWZCq5PyTNqZ4FqKVZOJN74NyEmr6nxudhYnpFXosXHYKBbU1JwVY9UJvMjpk%2FyTfmhZJbD4RuUN4YZMrSoDux%2FJFlGszA6tg6H%2FN5CeJLWF%2F1JAWfA84RZ%2Bk2qKZ17blEEfElP4kTc0EjQTJ2%2FH4RYIp1tIA7lUBIyOqvY24ZLIPlfi033y6OimSHjXxxhEKXnvsRb5a3pzeTmplGFbLBnoPWeNaHaxECZxu5gRBvMibuGWZszOOYTHmFA7rH2Qpa82PLBCLUz%2BbYnhpQWQpq5rmdjSMX6r9nBlW0ZXhGobrT3Elpw5BuLZqup4LYr%2BQ59PD6MQVTz%2FXpwUb4qzUejNHTsBP0T%2F%2BuvrawebREU7Zv1bwOyA160f6kxrCjL4K0PWUpZcMiSJPev3JUNhuyk0DvACYbVzzlB5kz8%2FHawr5%2Bx5TaO7qhqeVtvjkOLrxKn1Fa%2FD33HgLgkbKN8VjO0WIuEo%2BJVGckb0IwjZJYvTRZRb3TXm%2FpYfjtiiecFXxTvnqs%2FRluV3UcP2zIqAs%2B%2FzJaKiLFxcb2OlQJyLQluJWMPzQydQGOqUBBDdmh5EHVODBvzsjn67od3%2Fos0%2FXVEvmTNP8qaBzo02DTNuOb4%2FEMDVfkmMlsLXpN3sHQ5lYgRUelHBK4hGWlRKvAzC3BF42851oGEOuPl05JhGq%2BtRdvZkfANjxmWYLLEYNpwNMsFDZGVpjJqbVsx5yMs2EWlnmJUBg%2BfK3yX5Gk%2FaH9Fr38ZU%2FrYP%2BK1hOj7X07QtZZ3rrAxulsT6Eq56dWQmL&X-Amz-Signature=f3ce27f06669c8a622889830693d5e646a18bae48cde277b0cae8370e1860369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SZY3ZJ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjTsAW%2FishcTiYm9VUSlZw2bkh2q1%2FWbVG4%2FOoSocGLAiEA%2FYhq8cLDsq%2FazLLD0hkMCYRIKzWDkwOrq065Uv1K8D0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO%2FQiPK1b0UnJqXleCrcA0C3p62%2Bjk4UyiewKHkzRSGyhr4%2FxpPC7dv5Oz6LvrJrFJThJoPEtfjQspATyUic6YzWLUk5ezr0QFaGWZCq5PyTNqZ4FqKVZOJN74NyEmr6nxudhYnpFXosXHYKBbU1JwVY9UJvMjpk%2FyTfmhZJbD4RuUN4YZMrSoDux%2FJFlGszA6tg6H%2FN5CeJLWF%2F1JAWfA84RZ%2Bk2qKZ17blEEfElP4kTc0EjQTJ2%2FH4RYIp1tIA7lUBIyOqvY24ZLIPlfi033y6OimSHjXxxhEKXnvsRb5a3pzeTmplGFbLBnoPWeNaHaxECZxu5gRBvMibuGWZszOOYTHmFA7rH2Qpa82PLBCLUz%2BbYnhpQWQpq5rmdjSMX6r9nBlW0ZXhGobrT3Elpw5BuLZqup4LYr%2BQ59PD6MQVTz%2FXpwUb4qzUejNHTsBP0T%2F%2BuvrawebREU7Zv1bwOyA160f6kxrCjL4K0PWUpZcMiSJPev3JUNhuyk0DvACYbVzzlB5kz8%2FHawr5%2Bx5TaO7qhqeVtvjkOLrxKn1Fa%2FD33HgLgkbKN8VjO0WIuEo%2BJVGckb0IwjZJYvTRZRb3TXm%2FpYfjtiiecFXxTvnqs%2FRluV3UcP2zIqAs%2B%2FzJaKiLFxcb2OlQJyLQluJWMPzQydQGOqUBBDdmh5EHVODBvzsjn67od3%2Fos0%2FXVEvmTNP8qaBzo02DTNuOb4%2FEMDVfkmMlsLXpN3sHQ5lYgRUelHBK4hGWlRKvAzC3BF42851oGEOuPl05JhGq%2BtRdvZkfANjxmWYLLEYNpwNMsFDZGVpjJqbVsx5yMs2EWlnmJUBg%2BfK3yX5Gk%2FaH9Fr38ZU%2FrYP%2BK1hOj7X07QtZZ3rrAxulsT6Eq56dWQmL&X-Amz-Signature=1dfb0e528af449d0a9b11071f81cc54dfca0594cf76f2fde55147b882460296b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SZY3ZJ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjTsAW%2FishcTiYm9VUSlZw2bkh2q1%2FWbVG4%2FOoSocGLAiEA%2FYhq8cLDsq%2FazLLD0hkMCYRIKzWDkwOrq065Uv1K8D0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO%2FQiPK1b0UnJqXleCrcA0C3p62%2Bjk4UyiewKHkzRSGyhr4%2FxpPC7dv5Oz6LvrJrFJThJoPEtfjQspATyUic6YzWLUk5ezr0QFaGWZCq5PyTNqZ4FqKVZOJN74NyEmr6nxudhYnpFXosXHYKBbU1JwVY9UJvMjpk%2FyTfmhZJbD4RuUN4YZMrSoDux%2FJFlGszA6tg6H%2FN5CeJLWF%2F1JAWfA84RZ%2Bk2qKZ17blEEfElP4kTc0EjQTJ2%2FH4RYIp1tIA7lUBIyOqvY24ZLIPlfi033y6OimSHjXxxhEKXnvsRb5a3pzeTmplGFbLBnoPWeNaHaxECZxu5gRBvMibuGWZszOOYTHmFA7rH2Qpa82PLBCLUz%2BbYnhpQWQpq5rmdjSMX6r9nBlW0ZXhGobrT3Elpw5BuLZqup4LYr%2BQ59PD6MQVTz%2FXpwUb4qzUejNHTsBP0T%2F%2BuvrawebREU7Zv1bwOyA160f6kxrCjL4K0PWUpZcMiSJPev3JUNhuyk0DvACYbVzzlB5kz8%2FHawr5%2Bx5TaO7qhqeVtvjkOLrxKn1Fa%2FD33HgLgkbKN8VjO0WIuEo%2BJVGckb0IwjZJYvTRZRb3TXm%2FpYfjtiiecFXxTvnqs%2FRluV3UcP2zIqAs%2B%2FzJaKiLFxcb2OlQJyLQluJWMPzQydQGOqUBBDdmh5EHVODBvzsjn67od3%2Fos0%2FXVEvmTNP8qaBzo02DTNuOb4%2FEMDVfkmMlsLXpN3sHQ5lYgRUelHBK4hGWlRKvAzC3BF42851oGEOuPl05JhGq%2BtRdvZkfANjxmWYLLEYNpwNMsFDZGVpjJqbVsx5yMs2EWlnmJUBg%2BfK3yX5Gk%2FaH9Fr38ZU%2FrYP%2BK1hOj7X07QtZZ3rrAxulsT6Eq56dWQmL&X-Amz-Signature=f5250472c655f88a11337d80c36b33af46e426beaf406cf92da668e83dbcbc52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SZY3ZJ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjTsAW%2FishcTiYm9VUSlZw2bkh2q1%2FWbVG4%2FOoSocGLAiEA%2FYhq8cLDsq%2FazLLD0hkMCYRIKzWDkwOrq065Uv1K8D0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO%2FQiPK1b0UnJqXleCrcA0C3p62%2Bjk4UyiewKHkzRSGyhr4%2FxpPC7dv5Oz6LvrJrFJThJoPEtfjQspATyUic6YzWLUk5ezr0QFaGWZCq5PyTNqZ4FqKVZOJN74NyEmr6nxudhYnpFXosXHYKBbU1JwVY9UJvMjpk%2FyTfmhZJbD4RuUN4YZMrSoDux%2FJFlGszA6tg6H%2FN5CeJLWF%2F1JAWfA84RZ%2Bk2qKZ17blEEfElP4kTc0EjQTJ2%2FH4RYIp1tIA7lUBIyOqvY24ZLIPlfi033y6OimSHjXxxhEKXnvsRb5a3pzeTmplGFbLBnoPWeNaHaxECZxu5gRBvMibuGWZszOOYTHmFA7rH2Qpa82PLBCLUz%2BbYnhpQWQpq5rmdjSMX6r9nBlW0ZXhGobrT3Elpw5BuLZqup4LYr%2BQ59PD6MQVTz%2FXpwUb4qzUejNHTsBP0T%2F%2BuvrawebREU7Zv1bwOyA160f6kxrCjL4K0PWUpZcMiSJPev3JUNhuyk0DvACYbVzzlB5kz8%2FHawr5%2Bx5TaO7qhqeVtvjkOLrxKn1Fa%2FD33HgLgkbKN8VjO0WIuEo%2BJVGckb0IwjZJYvTRZRb3TXm%2FpYfjtiiecFXxTvnqs%2FRluV3UcP2zIqAs%2B%2FzJaKiLFxcb2OlQJyLQluJWMPzQydQGOqUBBDdmh5EHVODBvzsjn67od3%2Fos0%2FXVEvmTNP8qaBzo02DTNuOb4%2FEMDVfkmMlsLXpN3sHQ5lYgRUelHBK4hGWlRKvAzC3BF42851oGEOuPl05JhGq%2BtRdvZkfANjxmWYLLEYNpwNMsFDZGVpjJqbVsx5yMs2EWlnmJUBg%2BfK3yX5Gk%2FaH9Fr38ZU%2FrYP%2BK1hOj7X07QtZZ3rrAxulsT6Eq56dWQmL&X-Amz-Signature=fc739c76259aed89f167da73c013fb6634fbe90769b32bedb5dc002dd0f9d534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SZY3ZJ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjTsAW%2FishcTiYm9VUSlZw2bkh2q1%2FWbVG4%2FOoSocGLAiEA%2FYhq8cLDsq%2FazLLD0hkMCYRIKzWDkwOrq065Uv1K8D0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO%2FQiPK1b0UnJqXleCrcA0C3p62%2Bjk4UyiewKHkzRSGyhr4%2FxpPC7dv5Oz6LvrJrFJThJoPEtfjQspATyUic6YzWLUk5ezr0QFaGWZCq5PyTNqZ4FqKVZOJN74NyEmr6nxudhYnpFXosXHYKBbU1JwVY9UJvMjpk%2FyTfmhZJbD4RuUN4YZMrSoDux%2FJFlGszA6tg6H%2FN5CeJLWF%2F1JAWfA84RZ%2Bk2qKZ17blEEfElP4kTc0EjQTJ2%2FH4RYIp1tIA7lUBIyOqvY24ZLIPlfi033y6OimSHjXxxhEKXnvsRb5a3pzeTmplGFbLBnoPWeNaHaxECZxu5gRBvMibuGWZszOOYTHmFA7rH2Qpa82PLBCLUz%2BbYnhpQWQpq5rmdjSMX6r9nBlW0ZXhGobrT3Elpw5BuLZqup4LYr%2BQ59PD6MQVTz%2FXpwUb4qzUejNHTsBP0T%2F%2BuvrawebREU7Zv1bwOyA160f6kxrCjL4K0PWUpZcMiSJPev3JUNhuyk0DvACYbVzzlB5kz8%2FHawr5%2Bx5TaO7qhqeVtvjkOLrxKn1Fa%2FD33HgLgkbKN8VjO0WIuEo%2BJVGckb0IwjZJYvTRZRb3TXm%2FpYfjtiiecFXxTvnqs%2FRluV3UcP2zIqAs%2B%2FzJaKiLFxcb2OlQJyLQluJWMPzQydQGOqUBBDdmh5EHVODBvzsjn67od3%2Fos0%2FXVEvmTNP8qaBzo02DTNuOb4%2FEMDVfkmMlsLXpN3sHQ5lYgRUelHBK4hGWlRKvAzC3BF42851oGEOuPl05JhGq%2BtRdvZkfANjxmWYLLEYNpwNMsFDZGVpjJqbVsx5yMs2EWlnmJUBg%2BfK3yX5Gk%2FaH9Fr38ZU%2FrYP%2BK1hOj7X07QtZZ3rrAxulsT6Eq56dWQmL&X-Amz-Signature=b639d0c4ba0b08128d41002ff42ebbe84e93bebe2c122f6779b628ba9407bcee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

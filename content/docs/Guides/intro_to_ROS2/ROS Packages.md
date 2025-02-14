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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTDAZAG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCelPbyxzQHRoO2wLmLJNCkVQ0TYkVRsOtVJqBd73slWQIgL7zUwpP6MWMhaOzOgzxvZM%2F8vUuCZFcyO4UnMfktJ%2FIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPMJn2Pyv9TBcbhdoCrcAzZ1JpZaNyPqGz3WTVC4IvaQcahND57OjX2xF9NYHE8lEkQHdxTtnIKoV2xrAzgrrLLcQUmfKxJoCFI3gbglZuBkTw57iupukfkISrNRlfJFFAZMljYk1I0TizLY7tgC8n5tPLePK14UxrK47sH%2FkHTQl1Z3NkYP37Y0qejkRwVK3T2pw7kziiVGmeavBLLuWcwqYXjCzCqVLJjY2EYgLrTgakepPRZsQ9zuodfa4rTko7U9a8SwqSKlTXQX1s9Om0UJlkhclscD8fTQrdtA7zUjH8ZoCmk%2BjP0ScWUWHtU%2FqUXVjpoKVf6ygQetI4VS%2FRLqWU2NPlWaSsAhfWQtzk7D4FbXV9ln0VqVB1P%2Fr2yOmRmUiWX6v5LJq2l8T7s11ALP5OkeWAU4QFXJ1DxBt%2FdjRPpgOT23LN7qTXX0oNpsQZmFqC8IuNM78ev5e7RGt2w71JaR%2FNiyjb1BpssDGwFlUcvss5LCp6SKQJoJajF0fUfFJoxCzL0MGjfSo2t69Svq2M5pdJFPQ%2BR6ut6h7WkhPc9o1J4vFQ39akxN%2FKSwCY3X0N5tiYFGrBJPFQpF893FrIIgK5PlUkWWi4ex29S3pq8FmMpHOX9DjA%2FGfiP16Uf5pPNwu4yMnMdqMOnRvr0GOqUB5tsbzJQCPvDOqhNSNcU98iKXRWt1yu9YZxIdeGDyuusl6%2Bg4sWsZ5EFS6Q2fgsxc38E3b5CfsKG192hzTdrzqlnj959WuUu4fCaA95Ph6tABMr8VZlCwlcNdRzA0rZEMUrMF6NkqhE%2Fb8B%2B3RkmzY%2FvdcKYWd9JjUd8uJyjksQQ9fk3fT1yuZppxYaNmZRcPrqRqE8GsPjL3qdKWIfywrs14okxB&X-Amz-Signature=0b061c608051bd5d846f864314d474187e2ee599054665fff102f783f50c1a17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTDAZAG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCelPbyxzQHRoO2wLmLJNCkVQ0TYkVRsOtVJqBd73slWQIgL7zUwpP6MWMhaOzOgzxvZM%2F8vUuCZFcyO4UnMfktJ%2FIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPMJn2Pyv9TBcbhdoCrcAzZ1JpZaNyPqGz3WTVC4IvaQcahND57OjX2xF9NYHE8lEkQHdxTtnIKoV2xrAzgrrLLcQUmfKxJoCFI3gbglZuBkTw57iupukfkISrNRlfJFFAZMljYk1I0TizLY7tgC8n5tPLePK14UxrK47sH%2FkHTQl1Z3NkYP37Y0qejkRwVK3T2pw7kziiVGmeavBLLuWcwqYXjCzCqVLJjY2EYgLrTgakepPRZsQ9zuodfa4rTko7U9a8SwqSKlTXQX1s9Om0UJlkhclscD8fTQrdtA7zUjH8ZoCmk%2BjP0ScWUWHtU%2FqUXVjpoKVf6ygQetI4VS%2FRLqWU2NPlWaSsAhfWQtzk7D4FbXV9ln0VqVB1P%2Fr2yOmRmUiWX6v5LJq2l8T7s11ALP5OkeWAU4QFXJ1DxBt%2FdjRPpgOT23LN7qTXX0oNpsQZmFqC8IuNM78ev5e7RGt2w71JaR%2FNiyjb1BpssDGwFlUcvss5LCp6SKQJoJajF0fUfFJoxCzL0MGjfSo2t69Svq2M5pdJFPQ%2BR6ut6h7WkhPc9o1J4vFQ39akxN%2FKSwCY3X0N5tiYFGrBJPFQpF893FrIIgK5PlUkWWi4ex29S3pq8FmMpHOX9DjA%2FGfiP16Uf5pPNwu4yMnMdqMOnRvr0GOqUB5tsbzJQCPvDOqhNSNcU98iKXRWt1yu9YZxIdeGDyuusl6%2Bg4sWsZ5EFS6Q2fgsxc38E3b5CfsKG192hzTdrzqlnj959WuUu4fCaA95Ph6tABMr8VZlCwlcNdRzA0rZEMUrMF6NkqhE%2Fb8B%2B3RkmzY%2FvdcKYWd9JjUd8uJyjksQQ9fk3fT1yuZppxYaNmZRcPrqRqE8GsPjL3qdKWIfywrs14okxB&X-Amz-Signature=5f74c3764840a360ee779ba55fd4f11fe12d6fec2344c121284776bb02fa9c69&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTDAZAG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCelPbyxzQHRoO2wLmLJNCkVQ0TYkVRsOtVJqBd73slWQIgL7zUwpP6MWMhaOzOgzxvZM%2F8vUuCZFcyO4UnMfktJ%2FIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPMJn2Pyv9TBcbhdoCrcAzZ1JpZaNyPqGz3WTVC4IvaQcahND57OjX2xF9NYHE8lEkQHdxTtnIKoV2xrAzgrrLLcQUmfKxJoCFI3gbglZuBkTw57iupukfkISrNRlfJFFAZMljYk1I0TizLY7tgC8n5tPLePK14UxrK47sH%2FkHTQl1Z3NkYP37Y0qejkRwVK3T2pw7kziiVGmeavBLLuWcwqYXjCzCqVLJjY2EYgLrTgakepPRZsQ9zuodfa4rTko7U9a8SwqSKlTXQX1s9Om0UJlkhclscD8fTQrdtA7zUjH8ZoCmk%2BjP0ScWUWHtU%2FqUXVjpoKVf6ygQetI4VS%2FRLqWU2NPlWaSsAhfWQtzk7D4FbXV9ln0VqVB1P%2Fr2yOmRmUiWX6v5LJq2l8T7s11ALP5OkeWAU4QFXJ1DxBt%2FdjRPpgOT23LN7qTXX0oNpsQZmFqC8IuNM78ev5e7RGt2w71JaR%2FNiyjb1BpssDGwFlUcvss5LCp6SKQJoJajF0fUfFJoxCzL0MGjfSo2t69Svq2M5pdJFPQ%2BR6ut6h7WkhPc9o1J4vFQ39akxN%2FKSwCY3X0N5tiYFGrBJPFQpF893FrIIgK5PlUkWWi4ex29S3pq8FmMpHOX9DjA%2FGfiP16Uf5pPNwu4yMnMdqMOnRvr0GOqUB5tsbzJQCPvDOqhNSNcU98iKXRWt1yu9YZxIdeGDyuusl6%2Bg4sWsZ5EFS6Q2fgsxc38E3b5CfsKG192hzTdrzqlnj959WuUu4fCaA95Ph6tABMr8VZlCwlcNdRzA0rZEMUrMF6NkqhE%2Fb8B%2B3RkmzY%2FvdcKYWd9JjUd8uJyjksQQ9fk3fT1yuZppxYaNmZRcPrqRqE8GsPjL3qdKWIfywrs14okxB&X-Amz-Signature=69de0fbc17dcdef351c1297fd6bcc2ec246ee73d3e0303941ca5eb13e2a4ce80&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTDAZAG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCelPbyxzQHRoO2wLmLJNCkVQ0TYkVRsOtVJqBd73slWQIgL7zUwpP6MWMhaOzOgzxvZM%2F8vUuCZFcyO4UnMfktJ%2FIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPMJn2Pyv9TBcbhdoCrcAzZ1JpZaNyPqGz3WTVC4IvaQcahND57OjX2xF9NYHE8lEkQHdxTtnIKoV2xrAzgrrLLcQUmfKxJoCFI3gbglZuBkTw57iupukfkISrNRlfJFFAZMljYk1I0TizLY7tgC8n5tPLePK14UxrK47sH%2FkHTQl1Z3NkYP37Y0qejkRwVK3T2pw7kziiVGmeavBLLuWcwqYXjCzCqVLJjY2EYgLrTgakepPRZsQ9zuodfa4rTko7U9a8SwqSKlTXQX1s9Om0UJlkhclscD8fTQrdtA7zUjH8ZoCmk%2BjP0ScWUWHtU%2FqUXVjpoKVf6ygQetI4VS%2FRLqWU2NPlWaSsAhfWQtzk7D4FbXV9ln0VqVB1P%2Fr2yOmRmUiWX6v5LJq2l8T7s11ALP5OkeWAU4QFXJ1DxBt%2FdjRPpgOT23LN7qTXX0oNpsQZmFqC8IuNM78ev5e7RGt2w71JaR%2FNiyjb1BpssDGwFlUcvss5LCp6SKQJoJajF0fUfFJoxCzL0MGjfSo2t69Svq2M5pdJFPQ%2BR6ut6h7WkhPc9o1J4vFQ39akxN%2FKSwCY3X0N5tiYFGrBJPFQpF893FrIIgK5PlUkWWi4ex29S3pq8FmMpHOX9DjA%2FGfiP16Uf5pPNwu4yMnMdqMOnRvr0GOqUB5tsbzJQCPvDOqhNSNcU98iKXRWt1yu9YZxIdeGDyuusl6%2Bg4sWsZ5EFS6Q2fgsxc38E3b5CfsKG192hzTdrzqlnj959WuUu4fCaA95Ph6tABMr8VZlCwlcNdRzA0rZEMUrMF6NkqhE%2Fb8B%2B3RkmzY%2FvdcKYWd9JjUd8uJyjksQQ9fk3fT1yuZppxYaNmZRcPrqRqE8GsPjL3qdKWIfywrs14okxB&X-Amz-Signature=17fc5d0e0baaac5a603981bb456d486ad68f7e92e4e0a848155a030fc451c2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTDAZAG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCelPbyxzQHRoO2wLmLJNCkVQ0TYkVRsOtVJqBd73slWQIgL7zUwpP6MWMhaOzOgzxvZM%2F8vUuCZFcyO4UnMfktJ%2FIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPMJn2Pyv9TBcbhdoCrcAzZ1JpZaNyPqGz3WTVC4IvaQcahND57OjX2xF9NYHE8lEkQHdxTtnIKoV2xrAzgrrLLcQUmfKxJoCFI3gbglZuBkTw57iupukfkISrNRlfJFFAZMljYk1I0TizLY7tgC8n5tPLePK14UxrK47sH%2FkHTQl1Z3NkYP37Y0qejkRwVK3T2pw7kziiVGmeavBLLuWcwqYXjCzCqVLJjY2EYgLrTgakepPRZsQ9zuodfa4rTko7U9a8SwqSKlTXQX1s9Om0UJlkhclscD8fTQrdtA7zUjH8ZoCmk%2BjP0ScWUWHtU%2FqUXVjpoKVf6ygQetI4VS%2FRLqWU2NPlWaSsAhfWQtzk7D4FbXV9ln0VqVB1P%2Fr2yOmRmUiWX6v5LJq2l8T7s11ALP5OkeWAU4QFXJ1DxBt%2FdjRPpgOT23LN7qTXX0oNpsQZmFqC8IuNM78ev5e7RGt2w71JaR%2FNiyjb1BpssDGwFlUcvss5LCp6SKQJoJajF0fUfFJoxCzL0MGjfSo2t69Svq2M5pdJFPQ%2BR6ut6h7WkhPc9o1J4vFQ39akxN%2FKSwCY3X0N5tiYFGrBJPFQpF893FrIIgK5PlUkWWi4ex29S3pq8FmMpHOX9DjA%2FGfiP16Uf5pPNwu4yMnMdqMOnRvr0GOqUB5tsbzJQCPvDOqhNSNcU98iKXRWt1yu9YZxIdeGDyuusl6%2Bg4sWsZ5EFS6Q2fgsxc38E3b5CfsKG192hzTdrzqlnj959WuUu4fCaA95Ph6tABMr8VZlCwlcNdRzA0rZEMUrMF6NkqhE%2Fb8B%2B3RkmzY%2FvdcKYWd9JjUd8uJyjksQQ9fk3fT1yuZppxYaNmZRcPrqRqE8GsPjL3qdKWIfywrs14okxB&X-Amz-Signature=d9cea549ee452778a4492126a4bad4fca3d90ed6a636724781a24d14c735c97f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTDAZAG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCelPbyxzQHRoO2wLmLJNCkVQ0TYkVRsOtVJqBd73slWQIgL7zUwpP6MWMhaOzOgzxvZM%2F8vUuCZFcyO4UnMfktJ%2FIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPMJn2Pyv9TBcbhdoCrcAzZ1JpZaNyPqGz3WTVC4IvaQcahND57OjX2xF9NYHE8lEkQHdxTtnIKoV2xrAzgrrLLcQUmfKxJoCFI3gbglZuBkTw57iupukfkISrNRlfJFFAZMljYk1I0TizLY7tgC8n5tPLePK14UxrK47sH%2FkHTQl1Z3NkYP37Y0qejkRwVK3T2pw7kziiVGmeavBLLuWcwqYXjCzCqVLJjY2EYgLrTgakepPRZsQ9zuodfa4rTko7U9a8SwqSKlTXQX1s9Om0UJlkhclscD8fTQrdtA7zUjH8ZoCmk%2BjP0ScWUWHtU%2FqUXVjpoKVf6ygQetI4VS%2FRLqWU2NPlWaSsAhfWQtzk7D4FbXV9ln0VqVB1P%2Fr2yOmRmUiWX6v5LJq2l8T7s11ALP5OkeWAU4QFXJ1DxBt%2FdjRPpgOT23LN7qTXX0oNpsQZmFqC8IuNM78ev5e7RGt2w71JaR%2FNiyjb1BpssDGwFlUcvss5LCp6SKQJoJajF0fUfFJoxCzL0MGjfSo2t69Svq2M5pdJFPQ%2BR6ut6h7WkhPc9o1J4vFQ39akxN%2FKSwCY3X0N5tiYFGrBJPFQpF893FrIIgK5PlUkWWi4ex29S3pq8FmMpHOX9DjA%2FGfiP16Uf5pPNwu4yMnMdqMOnRvr0GOqUB5tsbzJQCPvDOqhNSNcU98iKXRWt1yu9YZxIdeGDyuusl6%2Bg4sWsZ5EFS6Q2fgsxc38E3b5CfsKG192hzTdrzqlnj959WuUu4fCaA95Ph6tABMr8VZlCwlcNdRzA0rZEMUrMF6NkqhE%2Fb8B%2B3RkmzY%2FvdcKYWd9JjUd8uJyjksQQ9fk3fT1yuZppxYaNmZRcPrqRqE8GsPjL3qdKWIfywrs14okxB&X-Amz-Signature=02527afdb03eea604cfee90ec5095c187537e9b7eb1561c6a91f38b33550a88e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTDAZAG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCelPbyxzQHRoO2wLmLJNCkVQ0TYkVRsOtVJqBd73slWQIgL7zUwpP6MWMhaOzOgzxvZM%2F8vUuCZFcyO4UnMfktJ%2FIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPMJn2Pyv9TBcbhdoCrcAzZ1JpZaNyPqGz3WTVC4IvaQcahND57OjX2xF9NYHE8lEkQHdxTtnIKoV2xrAzgrrLLcQUmfKxJoCFI3gbglZuBkTw57iupukfkISrNRlfJFFAZMljYk1I0TizLY7tgC8n5tPLePK14UxrK47sH%2FkHTQl1Z3NkYP37Y0qejkRwVK3T2pw7kziiVGmeavBLLuWcwqYXjCzCqVLJjY2EYgLrTgakepPRZsQ9zuodfa4rTko7U9a8SwqSKlTXQX1s9Om0UJlkhclscD8fTQrdtA7zUjH8ZoCmk%2BjP0ScWUWHtU%2FqUXVjpoKVf6ygQetI4VS%2FRLqWU2NPlWaSsAhfWQtzk7D4FbXV9ln0VqVB1P%2Fr2yOmRmUiWX6v5LJq2l8T7s11ALP5OkeWAU4QFXJ1DxBt%2FdjRPpgOT23LN7qTXX0oNpsQZmFqC8IuNM78ev5e7RGt2w71JaR%2FNiyjb1BpssDGwFlUcvss5LCp6SKQJoJajF0fUfFJoxCzL0MGjfSo2t69Svq2M5pdJFPQ%2BR6ut6h7WkhPc9o1J4vFQ39akxN%2FKSwCY3X0N5tiYFGrBJPFQpF893FrIIgK5PlUkWWi4ex29S3pq8FmMpHOX9DjA%2FGfiP16Uf5pPNwu4yMnMdqMOnRvr0GOqUB5tsbzJQCPvDOqhNSNcU98iKXRWt1yu9YZxIdeGDyuusl6%2Bg4sWsZ5EFS6Q2fgsxc38E3b5CfsKG192hzTdrzqlnj959WuUu4fCaA95Ph6tABMr8VZlCwlcNdRzA0rZEMUrMF6NkqhE%2Fb8B%2B3RkmzY%2FvdcKYWd9JjUd8uJyjksQQ9fk3fT1yuZppxYaNmZRcPrqRqE8GsPjL3qdKWIfywrs14okxB&X-Amz-Signature=6a468d85ba1d77f224e302252e7436158160a29bf1b7ed9082816518f22208f4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

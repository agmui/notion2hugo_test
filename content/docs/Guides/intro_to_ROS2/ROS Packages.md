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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUTOXIB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDu9a%2FMDZKGRG%2B2CCnkWX%2FZbZkXwv%2BRogS21gvbebH8OQIhAIJrI%2FvtpKPTvk7ifPCsiJKT3v2VMBK7Egw%2FrQK9lodyKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyetCTzNeZGieZmQsgq3AOTFUuQGMjq5Eix6Ja5NMWk%2Bkrk8ta1OhX80kkqqeHlLxeDZzLJQ6Pth7RKLwx2Dtnkg9HUeHPBnj45crz6doqgD%2FrCwIw6o81paWYcaebQixPMosAqUc%2Fs1bqeupgjMKlCoDpT2Nl7ahzhIMufOiX7zwThgJYU9e0%2FIXB17Ck2BSVUsN1%2BHu0wScoO4p7%2Fd%2FHp%2BqzY7qs9hKBxKVLfMYRgzD%2FZgQ3znuMws4QmaditYwxbt%2Fo0tXm4HZZ%2FYuF9d9zS%2BdfsNpRhsy%2FqrxuSmzEkdgPvCj6Rue9WaLZ0142YS6d0Phb8d8iVblfnp7NEx4y5DgdY71rf89UATEk2GTN1qTVNJGeQ19%2BW17agtYjb%2FCSrJ249MtIGNcpXk0ME0nLYAVcPCpLFJD%2FuLOFpickrChcWgoNbDbrzhRQ76JsbP3t8jUiMlHhZgTyx7nP1oI1Y5m6jtr1Owy4cOZDtFXimPtDWHxma8jAAtT1ww0aA1SGoGHV9xvEzzjDnec68%2FABXJAgXdJ4Xc4MW9yeEpDLvPA%2BDb3OeHO84NGdKftmAwj%2B8cIxsy%2FEgM3mxZoz5k8a1M9KFWMtbKxnEPRULqt1bg8rLuIz53JkyT5eb7ND1x6IUlWTWRf80QSkcZzDg75%2FABjqkAS7v5dGC8U6Q3tx9wmP3TTzxsv9%2FVyzZQl2adW39Sv0S6HW2PXQYMzWEr4kIJl3%2FoqqK8vhBqNE9SkAIBJk8zLXpS6Cnhv0B8HQb4lcxdBOdWPQZLhkbIUkwMvywaI2VzsrASBRh7BwHtkq%2FNb%2BlP6jlnZBbn2DAemjwq%2Bihx%2FnerY2owcupA6ytf77obvbYTes7%2FFCHp6HARumuU7MEz3MX8X5%2B&X-Amz-Signature=13a7f529809988ce1250adceb488c638db51ad64fc0cdcf487c6676e3eba60aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUTOXIB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDu9a%2FMDZKGRG%2B2CCnkWX%2FZbZkXwv%2BRogS21gvbebH8OQIhAIJrI%2FvtpKPTvk7ifPCsiJKT3v2VMBK7Egw%2FrQK9lodyKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyetCTzNeZGieZmQsgq3AOTFUuQGMjq5Eix6Ja5NMWk%2Bkrk8ta1OhX80kkqqeHlLxeDZzLJQ6Pth7RKLwx2Dtnkg9HUeHPBnj45crz6doqgD%2FrCwIw6o81paWYcaebQixPMosAqUc%2Fs1bqeupgjMKlCoDpT2Nl7ahzhIMufOiX7zwThgJYU9e0%2FIXB17Ck2BSVUsN1%2BHu0wScoO4p7%2Fd%2FHp%2BqzY7qs9hKBxKVLfMYRgzD%2FZgQ3znuMws4QmaditYwxbt%2Fo0tXm4HZZ%2FYuF9d9zS%2BdfsNpRhsy%2FqrxuSmzEkdgPvCj6Rue9WaLZ0142YS6d0Phb8d8iVblfnp7NEx4y5DgdY71rf89UATEk2GTN1qTVNJGeQ19%2BW17agtYjb%2FCSrJ249MtIGNcpXk0ME0nLYAVcPCpLFJD%2FuLOFpickrChcWgoNbDbrzhRQ76JsbP3t8jUiMlHhZgTyx7nP1oI1Y5m6jtr1Owy4cOZDtFXimPtDWHxma8jAAtT1ww0aA1SGoGHV9xvEzzjDnec68%2FABXJAgXdJ4Xc4MW9yeEpDLvPA%2BDb3OeHO84NGdKftmAwj%2B8cIxsy%2FEgM3mxZoz5k8a1M9KFWMtbKxnEPRULqt1bg8rLuIz53JkyT5eb7ND1x6IUlWTWRf80QSkcZzDg75%2FABjqkAS7v5dGC8U6Q3tx9wmP3TTzxsv9%2FVyzZQl2adW39Sv0S6HW2PXQYMzWEr4kIJl3%2FoqqK8vhBqNE9SkAIBJk8zLXpS6Cnhv0B8HQb4lcxdBOdWPQZLhkbIUkwMvywaI2VzsrASBRh7BwHtkq%2FNb%2BlP6jlnZBbn2DAemjwq%2Bihx%2FnerY2owcupA6ytf77obvbYTes7%2FFCHp6HARumuU7MEz3MX8X5%2B&X-Amz-Signature=3d28ef4f385e52c265a6f73e57f081cd349ebb71bbefe67da04ca479691f3940&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUTOXIB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDu9a%2FMDZKGRG%2B2CCnkWX%2FZbZkXwv%2BRogS21gvbebH8OQIhAIJrI%2FvtpKPTvk7ifPCsiJKT3v2VMBK7Egw%2FrQK9lodyKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyetCTzNeZGieZmQsgq3AOTFUuQGMjq5Eix6Ja5NMWk%2Bkrk8ta1OhX80kkqqeHlLxeDZzLJQ6Pth7RKLwx2Dtnkg9HUeHPBnj45crz6doqgD%2FrCwIw6o81paWYcaebQixPMosAqUc%2Fs1bqeupgjMKlCoDpT2Nl7ahzhIMufOiX7zwThgJYU9e0%2FIXB17Ck2BSVUsN1%2BHu0wScoO4p7%2Fd%2FHp%2BqzY7qs9hKBxKVLfMYRgzD%2FZgQ3znuMws4QmaditYwxbt%2Fo0tXm4HZZ%2FYuF9d9zS%2BdfsNpRhsy%2FqrxuSmzEkdgPvCj6Rue9WaLZ0142YS6d0Phb8d8iVblfnp7NEx4y5DgdY71rf89UATEk2GTN1qTVNJGeQ19%2BW17agtYjb%2FCSrJ249MtIGNcpXk0ME0nLYAVcPCpLFJD%2FuLOFpickrChcWgoNbDbrzhRQ76JsbP3t8jUiMlHhZgTyx7nP1oI1Y5m6jtr1Owy4cOZDtFXimPtDWHxma8jAAtT1ww0aA1SGoGHV9xvEzzjDnec68%2FABXJAgXdJ4Xc4MW9yeEpDLvPA%2BDb3OeHO84NGdKftmAwj%2B8cIxsy%2FEgM3mxZoz5k8a1M9KFWMtbKxnEPRULqt1bg8rLuIz53JkyT5eb7ND1x6IUlWTWRf80QSkcZzDg75%2FABjqkAS7v5dGC8U6Q3tx9wmP3TTzxsv9%2FVyzZQl2adW39Sv0S6HW2PXQYMzWEr4kIJl3%2FoqqK8vhBqNE9SkAIBJk8zLXpS6Cnhv0B8HQb4lcxdBOdWPQZLhkbIUkwMvywaI2VzsrASBRh7BwHtkq%2FNb%2BlP6jlnZBbn2DAemjwq%2Bihx%2FnerY2owcupA6ytf77obvbYTes7%2FFCHp6HARumuU7MEz3MX8X5%2B&X-Amz-Signature=dc3ac56a534dc48c4a7cc49585b964168e4c197f1fc194b02487df9a8e6d8fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUTOXIB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDu9a%2FMDZKGRG%2B2CCnkWX%2FZbZkXwv%2BRogS21gvbebH8OQIhAIJrI%2FvtpKPTvk7ifPCsiJKT3v2VMBK7Egw%2FrQK9lodyKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyetCTzNeZGieZmQsgq3AOTFUuQGMjq5Eix6Ja5NMWk%2Bkrk8ta1OhX80kkqqeHlLxeDZzLJQ6Pth7RKLwx2Dtnkg9HUeHPBnj45crz6doqgD%2FrCwIw6o81paWYcaebQixPMosAqUc%2Fs1bqeupgjMKlCoDpT2Nl7ahzhIMufOiX7zwThgJYU9e0%2FIXB17Ck2BSVUsN1%2BHu0wScoO4p7%2Fd%2FHp%2BqzY7qs9hKBxKVLfMYRgzD%2FZgQ3znuMws4QmaditYwxbt%2Fo0tXm4HZZ%2FYuF9d9zS%2BdfsNpRhsy%2FqrxuSmzEkdgPvCj6Rue9WaLZ0142YS6d0Phb8d8iVblfnp7NEx4y5DgdY71rf89UATEk2GTN1qTVNJGeQ19%2BW17agtYjb%2FCSrJ249MtIGNcpXk0ME0nLYAVcPCpLFJD%2FuLOFpickrChcWgoNbDbrzhRQ76JsbP3t8jUiMlHhZgTyx7nP1oI1Y5m6jtr1Owy4cOZDtFXimPtDWHxma8jAAtT1ww0aA1SGoGHV9xvEzzjDnec68%2FABXJAgXdJ4Xc4MW9yeEpDLvPA%2BDb3OeHO84NGdKftmAwj%2B8cIxsy%2FEgM3mxZoz5k8a1M9KFWMtbKxnEPRULqt1bg8rLuIz53JkyT5eb7ND1x6IUlWTWRf80QSkcZzDg75%2FABjqkAS7v5dGC8U6Q3tx9wmP3TTzxsv9%2FVyzZQl2adW39Sv0S6HW2PXQYMzWEr4kIJl3%2FoqqK8vhBqNE9SkAIBJk8zLXpS6Cnhv0B8HQb4lcxdBOdWPQZLhkbIUkwMvywaI2VzsrASBRh7BwHtkq%2FNb%2BlP6jlnZBbn2DAemjwq%2Bihx%2FnerY2owcupA6ytf77obvbYTes7%2FFCHp6HARumuU7MEz3MX8X5%2B&X-Amz-Signature=a4e04ae7063218490b2b1f457a661076d8b9e0f270ddcd513d5b69ace44b17c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUTOXIB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDu9a%2FMDZKGRG%2B2CCnkWX%2FZbZkXwv%2BRogS21gvbebH8OQIhAIJrI%2FvtpKPTvk7ifPCsiJKT3v2VMBK7Egw%2FrQK9lodyKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyetCTzNeZGieZmQsgq3AOTFUuQGMjq5Eix6Ja5NMWk%2Bkrk8ta1OhX80kkqqeHlLxeDZzLJQ6Pth7RKLwx2Dtnkg9HUeHPBnj45crz6doqgD%2FrCwIw6o81paWYcaebQixPMosAqUc%2Fs1bqeupgjMKlCoDpT2Nl7ahzhIMufOiX7zwThgJYU9e0%2FIXB17Ck2BSVUsN1%2BHu0wScoO4p7%2Fd%2FHp%2BqzY7qs9hKBxKVLfMYRgzD%2FZgQ3znuMws4QmaditYwxbt%2Fo0tXm4HZZ%2FYuF9d9zS%2BdfsNpRhsy%2FqrxuSmzEkdgPvCj6Rue9WaLZ0142YS6d0Phb8d8iVblfnp7NEx4y5DgdY71rf89UATEk2GTN1qTVNJGeQ19%2BW17agtYjb%2FCSrJ249MtIGNcpXk0ME0nLYAVcPCpLFJD%2FuLOFpickrChcWgoNbDbrzhRQ76JsbP3t8jUiMlHhZgTyx7nP1oI1Y5m6jtr1Owy4cOZDtFXimPtDWHxma8jAAtT1ww0aA1SGoGHV9xvEzzjDnec68%2FABXJAgXdJ4Xc4MW9yeEpDLvPA%2BDb3OeHO84NGdKftmAwj%2B8cIxsy%2FEgM3mxZoz5k8a1M9KFWMtbKxnEPRULqt1bg8rLuIz53JkyT5eb7ND1x6IUlWTWRf80QSkcZzDg75%2FABjqkAS7v5dGC8U6Q3tx9wmP3TTzxsv9%2FVyzZQl2adW39Sv0S6HW2PXQYMzWEr4kIJl3%2FoqqK8vhBqNE9SkAIBJk8zLXpS6Cnhv0B8HQb4lcxdBOdWPQZLhkbIUkwMvywaI2VzsrASBRh7BwHtkq%2FNb%2BlP6jlnZBbn2DAemjwq%2Bihx%2FnerY2owcupA6ytf77obvbYTes7%2FFCHp6HARumuU7MEz3MX8X5%2B&X-Amz-Signature=59b84dbd57009d9901ce4892b5f675822cb761cb6d71d358538b3cf7ea973a99&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUTOXIB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDu9a%2FMDZKGRG%2B2CCnkWX%2FZbZkXwv%2BRogS21gvbebH8OQIhAIJrI%2FvtpKPTvk7ifPCsiJKT3v2VMBK7Egw%2FrQK9lodyKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyetCTzNeZGieZmQsgq3AOTFUuQGMjq5Eix6Ja5NMWk%2Bkrk8ta1OhX80kkqqeHlLxeDZzLJQ6Pth7RKLwx2Dtnkg9HUeHPBnj45crz6doqgD%2FrCwIw6o81paWYcaebQixPMosAqUc%2Fs1bqeupgjMKlCoDpT2Nl7ahzhIMufOiX7zwThgJYU9e0%2FIXB17Ck2BSVUsN1%2BHu0wScoO4p7%2Fd%2FHp%2BqzY7qs9hKBxKVLfMYRgzD%2FZgQ3znuMws4QmaditYwxbt%2Fo0tXm4HZZ%2FYuF9d9zS%2BdfsNpRhsy%2FqrxuSmzEkdgPvCj6Rue9WaLZ0142YS6d0Phb8d8iVblfnp7NEx4y5DgdY71rf89UATEk2GTN1qTVNJGeQ19%2BW17agtYjb%2FCSrJ249MtIGNcpXk0ME0nLYAVcPCpLFJD%2FuLOFpickrChcWgoNbDbrzhRQ76JsbP3t8jUiMlHhZgTyx7nP1oI1Y5m6jtr1Owy4cOZDtFXimPtDWHxma8jAAtT1ww0aA1SGoGHV9xvEzzjDnec68%2FABXJAgXdJ4Xc4MW9yeEpDLvPA%2BDb3OeHO84NGdKftmAwj%2B8cIxsy%2FEgM3mxZoz5k8a1M9KFWMtbKxnEPRULqt1bg8rLuIz53JkyT5eb7ND1x6IUlWTWRf80QSkcZzDg75%2FABjqkAS7v5dGC8U6Q3tx9wmP3TTzxsv9%2FVyzZQl2adW39Sv0S6HW2PXQYMzWEr4kIJl3%2FoqqK8vhBqNE9SkAIBJk8zLXpS6Cnhv0B8HQb4lcxdBOdWPQZLhkbIUkwMvywaI2VzsrASBRh7BwHtkq%2FNb%2BlP6jlnZBbn2DAemjwq%2Bihx%2FnerY2owcupA6ytf77obvbYTes7%2FFCHp6HARumuU7MEz3MX8X5%2B&X-Amz-Signature=7d12a91f29846de092b6965ca7e361e1ef9fa9e0018cf6f941e1d9f98274145e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUTOXIB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDu9a%2FMDZKGRG%2B2CCnkWX%2FZbZkXwv%2BRogS21gvbebH8OQIhAIJrI%2FvtpKPTvk7ifPCsiJKT3v2VMBK7Egw%2FrQK9lodyKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyetCTzNeZGieZmQsgq3AOTFUuQGMjq5Eix6Ja5NMWk%2Bkrk8ta1OhX80kkqqeHlLxeDZzLJQ6Pth7RKLwx2Dtnkg9HUeHPBnj45crz6doqgD%2FrCwIw6o81paWYcaebQixPMosAqUc%2Fs1bqeupgjMKlCoDpT2Nl7ahzhIMufOiX7zwThgJYU9e0%2FIXB17Ck2BSVUsN1%2BHu0wScoO4p7%2Fd%2FHp%2BqzY7qs9hKBxKVLfMYRgzD%2FZgQ3znuMws4QmaditYwxbt%2Fo0tXm4HZZ%2FYuF9d9zS%2BdfsNpRhsy%2FqrxuSmzEkdgPvCj6Rue9WaLZ0142YS6d0Phb8d8iVblfnp7NEx4y5DgdY71rf89UATEk2GTN1qTVNJGeQ19%2BW17agtYjb%2FCSrJ249MtIGNcpXk0ME0nLYAVcPCpLFJD%2FuLOFpickrChcWgoNbDbrzhRQ76JsbP3t8jUiMlHhZgTyx7nP1oI1Y5m6jtr1Owy4cOZDtFXimPtDWHxma8jAAtT1ww0aA1SGoGHV9xvEzzjDnec68%2FABXJAgXdJ4Xc4MW9yeEpDLvPA%2BDb3OeHO84NGdKftmAwj%2B8cIxsy%2FEgM3mxZoz5k8a1M9KFWMtbKxnEPRULqt1bg8rLuIz53JkyT5eb7ND1x6IUlWTWRf80QSkcZzDg75%2FABjqkAS7v5dGC8U6Q3tx9wmP3TTzxsv9%2FVyzZQl2adW39Sv0S6HW2PXQYMzWEr4kIJl3%2FoqqK8vhBqNE9SkAIBJk8zLXpS6Cnhv0B8HQb4lcxdBOdWPQZLhkbIUkwMvywaI2VzsrASBRh7BwHtkq%2FNb%2BlP6jlnZBbn2DAemjwq%2Bihx%2FnerY2owcupA6ytf77obvbYTes7%2FFCHp6HARumuU7MEz3MX8X5%2B&X-Amz-Signature=25866f93d05847eab858233e3507ca644b2819069440dda6cb7ca3c0ba98d0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

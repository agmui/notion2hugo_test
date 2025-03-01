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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDIRDOQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZ80%2BLHzL5YpbTmlxzxSafYxXrDdbhyg1zMl5kBXCc8gIhAM83FpMpU6yxg8k4oeSOYF9Lo0abI2ZBoogjNPSn9YLhKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBjkSuA8d3vMKS1G0q3APtRJScHoGVmUL9aBkQRoUn0ltemLuiqKLg5ivZ3BiJXeFawW4NmNyV%2FXOOXR2eU9c7645nFuVhjfjDFFk2hDiTadezrgEkupiX1NmAsfOQ%2Be2CdHs2dSOyBQJpXfTcKpvvYT28WsbX2dOxk0HdjL8EbAiGAvHdRqgFIhs4szZsA5sC5cBVtHwZHeZ2tBh3HdDgGfutSCoTrGcCdFW2CjuizhW3R1yIOkz0lHul34cXvmzfk8Cgzip0OsmKA%2BuBqj7%2FveS4xwv3UrNag3swfV4Noi1W3427cGR3L8pb9xkz2%2F77ymnfs%2BrIrSZ%2BSmfsX9qirwDcGJW571IY1IZtqzJRbiiJq2FfOyik8SzQnj55ggSNlkemT4s1ZWXAsXgAfrQF1oJ67RiY5M0ymhclAaJGFhzgUlb2SafnqnblYtyUVaXW4atfCj6UdGQeCz1%2Bgg1%2FyHjLoSBWXAfYofU8zCcGBAt4W6dBxEzLft1zf3QzRlun7gz%2FPp6sJWB%2FsDot%2BQKxl4NSFZcsTvNpKcMNQZmNxOXDcnGZ7nm7dafDoaU23LX0d0yTaj9rWVGizEA4XJ29ugeBFgTvbXsidcsa51KQvSm%2BpEqV5KgBc8IzwiYuOULKdKBTtydJibGG2TCIlYy%2BBjqkAWwwfvHdn6MNR24%2F%2BpYgY09umHDBbDTMhnkC706kOxkU7dcP4p0NpeBTmjIYWkJjASDEC1TEiSxuUTHeheP23PP7dI9bWApjYk1%2BoMyyrthh1by3KnW7lcbu8%2BZhPj14qYmaLhwARxyTiNALEwmduBo%2FpGtMav%2B8MBk16aJY%2FPPYD2OxA9vgD7W1PypfNPenoiMOIebO4kMb4g%2F6kxQi0XNEmPr%2F&X-Amz-Signature=49e614060dfa2dab1c03592f2758d1697bb1b5677d959126f4852b86c6fd7605&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDIRDOQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZ80%2BLHzL5YpbTmlxzxSafYxXrDdbhyg1zMl5kBXCc8gIhAM83FpMpU6yxg8k4oeSOYF9Lo0abI2ZBoogjNPSn9YLhKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBjkSuA8d3vMKS1G0q3APtRJScHoGVmUL9aBkQRoUn0ltemLuiqKLg5ivZ3BiJXeFawW4NmNyV%2FXOOXR2eU9c7645nFuVhjfjDFFk2hDiTadezrgEkupiX1NmAsfOQ%2Be2CdHs2dSOyBQJpXfTcKpvvYT28WsbX2dOxk0HdjL8EbAiGAvHdRqgFIhs4szZsA5sC5cBVtHwZHeZ2tBh3HdDgGfutSCoTrGcCdFW2CjuizhW3R1yIOkz0lHul34cXvmzfk8Cgzip0OsmKA%2BuBqj7%2FveS4xwv3UrNag3swfV4Noi1W3427cGR3L8pb9xkz2%2F77ymnfs%2BrIrSZ%2BSmfsX9qirwDcGJW571IY1IZtqzJRbiiJq2FfOyik8SzQnj55ggSNlkemT4s1ZWXAsXgAfrQF1oJ67RiY5M0ymhclAaJGFhzgUlb2SafnqnblYtyUVaXW4atfCj6UdGQeCz1%2Bgg1%2FyHjLoSBWXAfYofU8zCcGBAt4W6dBxEzLft1zf3QzRlun7gz%2FPp6sJWB%2FsDot%2BQKxl4NSFZcsTvNpKcMNQZmNxOXDcnGZ7nm7dafDoaU23LX0d0yTaj9rWVGizEA4XJ29ugeBFgTvbXsidcsa51KQvSm%2BpEqV5KgBc8IzwiYuOULKdKBTtydJibGG2TCIlYy%2BBjqkAWwwfvHdn6MNR24%2F%2BpYgY09umHDBbDTMhnkC706kOxkU7dcP4p0NpeBTmjIYWkJjASDEC1TEiSxuUTHeheP23PP7dI9bWApjYk1%2BoMyyrthh1by3KnW7lcbu8%2BZhPj14qYmaLhwARxyTiNALEwmduBo%2FpGtMav%2B8MBk16aJY%2FPPYD2OxA9vgD7W1PypfNPenoiMOIebO4kMb4g%2F6kxQi0XNEmPr%2F&X-Amz-Signature=5114b8299e5a261bda15d69525d488fc072bcc2c737329525c2aa4d7580c1a45&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDIRDOQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZ80%2BLHzL5YpbTmlxzxSafYxXrDdbhyg1zMl5kBXCc8gIhAM83FpMpU6yxg8k4oeSOYF9Lo0abI2ZBoogjNPSn9YLhKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBjkSuA8d3vMKS1G0q3APtRJScHoGVmUL9aBkQRoUn0ltemLuiqKLg5ivZ3BiJXeFawW4NmNyV%2FXOOXR2eU9c7645nFuVhjfjDFFk2hDiTadezrgEkupiX1NmAsfOQ%2Be2CdHs2dSOyBQJpXfTcKpvvYT28WsbX2dOxk0HdjL8EbAiGAvHdRqgFIhs4szZsA5sC5cBVtHwZHeZ2tBh3HdDgGfutSCoTrGcCdFW2CjuizhW3R1yIOkz0lHul34cXvmzfk8Cgzip0OsmKA%2BuBqj7%2FveS4xwv3UrNag3swfV4Noi1W3427cGR3L8pb9xkz2%2F77ymnfs%2BrIrSZ%2BSmfsX9qirwDcGJW571IY1IZtqzJRbiiJq2FfOyik8SzQnj55ggSNlkemT4s1ZWXAsXgAfrQF1oJ67RiY5M0ymhclAaJGFhzgUlb2SafnqnblYtyUVaXW4atfCj6UdGQeCz1%2Bgg1%2FyHjLoSBWXAfYofU8zCcGBAt4W6dBxEzLft1zf3QzRlun7gz%2FPp6sJWB%2FsDot%2BQKxl4NSFZcsTvNpKcMNQZmNxOXDcnGZ7nm7dafDoaU23LX0d0yTaj9rWVGizEA4XJ29ugeBFgTvbXsidcsa51KQvSm%2BpEqV5KgBc8IzwiYuOULKdKBTtydJibGG2TCIlYy%2BBjqkAWwwfvHdn6MNR24%2F%2BpYgY09umHDBbDTMhnkC706kOxkU7dcP4p0NpeBTmjIYWkJjASDEC1TEiSxuUTHeheP23PP7dI9bWApjYk1%2BoMyyrthh1by3KnW7lcbu8%2BZhPj14qYmaLhwARxyTiNALEwmduBo%2FpGtMav%2B8MBk16aJY%2FPPYD2OxA9vgD7W1PypfNPenoiMOIebO4kMb4g%2F6kxQi0XNEmPr%2F&X-Amz-Signature=7cb277a7dd8eff4ab246ae8d28c4cb39db4e32cf2eacaa1ff7400358a896c7c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDIRDOQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZ80%2BLHzL5YpbTmlxzxSafYxXrDdbhyg1zMl5kBXCc8gIhAM83FpMpU6yxg8k4oeSOYF9Lo0abI2ZBoogjNPSn9YLhKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBjkSuA8d3vMKS1G0q3APtRJScHoGVmUL9aBkQRoUn0ltemLuiqKLg5ivZ3BiJXeFawW4NmNyV%2FXOOXR2eU9c7645nFuVhjfjDFFk2hDiTadezrgEkupiX1NmAsfOQ%2Be2CdHs2dSOyBQJpXfTcKpvvYT28WsbX2dOxk0HdjL8EbAiGAvHdRqgFIhs4szZsA5sC5cBVtHwZHeZ2tBh3HdDgGfutSCoTrGcCdFW2CjuizhW3R1yIOkz0lHul34cXvmzfk8Cgzip0OsmKA%2BuBqj7%2FveS4xwv3UrNag3swfV4Noi1W3427cGR3L8pb9xkz2%2F77ymnfs%2BrIrSZ%2BSmfsX9qirwDcGJW571IY1IZtqzJRbiiJq2FfOyik8SzQnj55ggSNlkemT4s1ZWXAsXgAfrQF1oJ67RiY5M0ymhclAaJGFhzgUlb2SafnqnblYtyUVaXW4atfCj6UdGQeCz1%2Bgg1%2FyHjLoSBWXAfYofU8zCcGBAt4W6dBxEzLft1zf3QzRlun7gz%2FPp6sJWB%2FsDot%2BQKxl4NSFZcsTvNpKcMNQZmNxOXDcnGZ7nm7dafDoaU23LX0d0yTaj9rWVGizEA4XJ29ugeBFgTvbXsidcsa51KQvSm%2BpEqV5KgBc8IzwiYuOULKdKBTtydJibGG2TCIlYy%2BBjqkAWwwfvHdn6MNR24%2F%2BpYgY09umHDBbDTMhnkC706kOxkU7dcP4p0NpeBTmjIYWkJjASDEC1TEiSxuUTHeheP23PP7dI9bWApjYk1%2BoMyyrthh1by3KnW7lcbu8%2BZhPj14qYmaLhwARxyTiNALEwmduBo%2FpGtMav%2B8MBk16aJY%2FPPYD2OxA9vgD7W1PypfNPenoiMOIebO4kMb4g%2F6kxQi0XNEmPr%2F&X-Amz-Signature=1982a56faabaa2a14a7b3d6e33d90d5108b7b98d7828689c058248dda296b100&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDIRDOQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZ80%2BLHzL5YpbTmlxzxSafYxXrDdbhyg1zMl5kBXCc8gIhAM83FpMpU6yxg8k4oeSOYF9Lo0abI2ZBoogjNPSn9YLhKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBjkSuA8d3vMKS1G0q3APtRJScHoGVmUL9aBkQRoUn0ltemLuiqKLg5ivZ3BiJXeFawW4NmNyV%2FXOOXR2eU9c7645nFuVhjfjDFFk2hDiTadezrgEkupiX1NmAsfOQ%2Be2CdHs2dSOyBQJpXfTcKpvvYT28WsbX2dOxk0HdjL8EbAiGAvHdRqgFIhs4szZsA5sC5cBVtHwZHeZ2tBh3HdDgGfutSCoTrGcCdFW2CjuizhW3R1yIOkz0lHul34cXvmzfk8Cgzip0OsmKA%2BuBqj7%2FveS4xwv3UrNag3swfV4Noi1W3427cGR3L8pb9xkz2%2F77ymnfs%2BrIrSZ%2BSmfsX9qirwDcGJW571IY1IZtqzJRbiiJq2FfOyik8SzQnj55ggSNlkemT4s1ZWXAsXgAfrQF1oJ67RiY5M0ymhclAaJGFhzgUlb2SafnqnblYtyUVaXW4atfCj6UdGQeCz1%2Bgg1%2FyHjLoSBWXAfYofU8zCcGBAt4W6dBxEzLft1zf3QzRlun7gz%2FPp6sJWB%2FsDot%2BQKxl4NSFZcsTvNpKcMNQZmNxOXDcnGZ7nm7dafDoaU23LX0d0yTaj9rWVGizEA4XJ29ugeBFgTvbXsidcsa51KQvSm%2BpEqV5KgBc8IzwiYuOULKdKBTtydJibGG2TCIlYy%2BBjqkAWwwfvHdn6MNR24%2F%2BpYgY09umHDBbDTMhnkC706kOxkU7dcP4p0NpeBTmjIYWkJjASDEC1TEiSxuUTHeheP23PP7dI9bWApjYk1%2BoMyyrthh1by3KnW7lcbu8%2BZhPj14qYmaLhwARxyTiNALEwmduBo%2FpGtMav%2B8MBk16aJY%2FPPYD2OxA9vgD7W1PypfNPenoiMOIebO4kMb4g%2F6kxQi0XNEmPr%2F&X-Amz-Signature=b2cf4bb3686e7e798088ec4ea9278ca19605554668fa8535919a298e1596c33d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDIRDOQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZ80%2BLHzL5YpbTmlxzxSafYxXrDdbhyg1zMl5kBXCc8gIhAM83FpMpU6yxg8k4oeSOYF9Lo0abI2ZBoogjNPSn9YLhKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBjkSuA8d3vMKS1G0q3APtRJScHoGVmUL9aBkQRoUn0ltemLuiqKLg5ivZ3BiJXeFawW4NmNyV%2FXOOXR2eU9c7645nFuVhjfjDFFk2hDiTadezrgEkupiX1NmAsfOQ%2Be2CdHs2dSOyBQJpXfTcKpvvYT28WsbX2dOxk0HdjL8EbAiGAvHdRqgFIhs4szZsA5sC5cBVtHwZHeZ2tBh3HdDgGfutSCoTrGcCdFW2CjuizhW3R1yIOkz0lHul34cXvmzfk8Cgzip0OsmKA%2BuBqj7%2FveS4xwv3UrNag3swfV4Noi1W3427cGR3L8pb9xkz2%2F77ymnfs%2BrIrSZ%2BSmfsX9qirwDcGJW571IY1IZtqzJRbiiJq2FfOyik8SzQnj55ggSNlkemT4s1ZWXAsXgAfrQF1oJ67RiY5M0ymhclAaJGFhzgUlb2SafnqnblYtyUVaXW4atfCj6UdGQeCz1%2Bgg1%2FyHjLoSBWXAfYofU8zCcGBAt4W6dBxEzLft1zf3QzRlun7gz%2FPp6sJWB%2FsDot%2BQKxl4NSFZcsTvNpKcMNQZmNxOXDcnGZ7nm7dafDoaU23LX0d0yTaj9rWVGizEA4XJ29ugeBFgTvbXsidcsa51KQvSm%2BpEqV5KgBc8IzwiYuOULKdKBTtydJibGG2TCIlYy%2BBjqkAWwwfvHdn6MNR24%2F%2BpYgY09umHDBbDTMhnkC706kOxkU7dcP4p0NpeBTmjIYWkJjASDEC1TEiSxuUTHeheP23PP7dI9bWApjYk1%2BoMyyrthh1by3KnW7lcbu8%2BZhPj14qYmaLhwARxyTiNALEwmduBo%2FpGtMav%2B8MBk16aJY%2FPPYD2OxA9vgD7W1PypfNPenoiMOIebO4kMb4g%2F6kxQi0XNEmPr%2F&X-Amz-Signature=6ac7235d69c3b4e97c75e812fd18e2bd3eab8920da35d1d38fca8532e492c25b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDIRDOQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZ80%2BLHzL5YpbTmlxzxSafYxXrDdbhyg1zMl5kBXCc8gIhAM83FpMpU6yxg8k4oeSOYF9Lo0abI2ZBoogjNPSn9YLhKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBjkSuA8d3vMKS1G0q3APtRJScHoGVmUL9aBkQRoUn0ltemLuiqKLg5ivZ3BiJXeFawW4NmNyV%2FXOOXR2eU9c7645nFuVhjfjDFFk2hDiTadezrgEkupiX1NmAsfOQ%2Be2CdHs2dSOyBQJpXfTcKpvvYT28WsbX2dOxk0HdjL8EbAiGAvHdRqgFIhs4szZsA5sC5cBVtHwZHeZ2tBh3HdDgGfutSCoTrGcCdFW2CjuizhW3R1yIOkz0lHul34cXvmzfk8Cgzip0OsmKA%2BuBqj7%2FveS4xwv3UrNag3swfV4Noi1W3427cGR3L8pb9xkz2%2F77ymnfs%2BrIrSZ%2BSmfsX9qirwDcGJW571IY1IZtqzJRbiiJq2FfOyik8SzQnj55ggSNlkemT4s1ZWXAsXgAfrQF1oJ67RiY5M0ymhclAaJGFhzgUlb2SafnqnblYtyUVaXW4atfCj6UdGQeCz1%2Bgg1%2FyHjLoSBWXAfYofU8zCcGBAt4W6dBxEzLft1zf3QzRlun7gz%2FPp6sJWB%2FsDot%2BQKxl4NSFZcsTvNpKcMNQZmNxOXDcnGZ7nm7dafDoaU23LX0d0yTaj9rWVGizEA4XJ29ugeBFgTvbXsidcsa51KQvSm%2BpEqV5KgBc8IzwiYuOULKdKBTtydJibGG2TCIlYy%2BBjqkAWwwfvHdn6MNR24%2F%2BpYgY09umHDBbDTMhnkC706kOxkU7dcP4p0NpeBTmjIYWkJjASDEC1TEiSxuUTHeheP23PP7dI9bWApjYk1%2BoMyyrthh1by3KnW7lcbu8%2BZhPj14qYmaLhwARxyTiNALEwmduBo%2FpGtMav%2B8MBk16aJY%2FPPYD2OxA9vgD7W1PypfNPenoiMOIebO4kMb4g%2F6kxQi0XNEmPr%2F&X-Amz-Signature=767b84dab9208260c2cef0afb0ef7a8747c72aa8d9fe0df2185d807724859672&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

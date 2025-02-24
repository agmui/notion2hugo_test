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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQTI4PL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaW1lcv0aj57CQl%2BMudfdAkPQfk4xweE9WQvRqCCO0fQIhAPxLAxpXccXGxG6CMimoz8Mybdpty0yq%2BC6Y3XY7clN5Kv8DCDcQABoMNjM3NDIzMTgzODA1IgzFfhewd4QgTrPhYwcq3AOuqXRysx4dmekNOsn44mmwX0U%2BbSchPb2ro2RHB3c%2BF6YX4By9y9fNgOw3GE8DElR9amVvTLI9m2%2BMACVaUs7b7qIIpGr6RqcIQRpU4tDSSrXDfxijKYWRoOSI4fwgbJVyaoTj%2BAB5EMQEhld7ZLuk1%2BvApvwwRoExqQxofbVjis9gz%2B%2Fk7ww%2FvGvZyXWyiEZSYjkLf6XKzbBnZEW4lBU3oNMo5zIM6wB8A1cuqZgnYNqNbBOcXGkgKajtmF8zD%2F9IqQ8vT2j97ZGSK4%2F1yxO6AW7LN0kZZTO8Et1rCZs3ijhA54e6rKNqcOGS02xIrjwviesndLv8BdTPGjiLbJKKZBjeRFheDQViTBkln4j4qs1T9NIji44F%2FSQHxwVZ%2B5sAiux5XtBbaV0ZvPQ6N42hktXUz4LePIFrAoWFuQhMr6fdiNrLL%2FsL58dNT0%2F4mmISBgRVaTv%2FvtFukfbt6kGEpTqCuh0VCHD3rtuRfJDzFGihYk6f9RFtlaCHmERXxqaGqGyIkauqShQWWAu1t95Vpw1maccFqVmzFfmn5dGv3Hz%2BrJDCyqjeU20ZoRLj2EhyCkeiJgxoc0OY0bbhv1cNRnDoCg0Sl9gfG2RBE7YciOehWlFinv6J2XW74zDl1fO9BjqkATore1jJH3oZEmHgQiNRvKZBnKUWc95g%2BnVTiCc0sy4TPz2t54LHttTTpWUAGIGvpchw2Vun5V0kcJ3qTge699KsfujYxwmVKA7up7MCKDC450jfl6tlOK5JgO4mMgGIAwcs6bsDxYqrjUK6mtmeh8wPa6v8TbJeyubZnJDq2%2FCtOjBtXAtQ7XJaIC2fgxw9Ld9ETrm5jKRUyQHZ1EHgClI%2Bbd6t&X-Amz-Signature=1b47c47b3711fd9d68444f8d8a92855a225e2af5638e933c6f6bebfeca411eda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQTI4PL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaW1lcv0aj57CQl%2BMudfdAkPQfk4xweE9WQvRqCCO0fQIhAPxLAxpXccXGxG6CMimoz8Mybdpty0yq%2BC6Y3XY7clN5Kv8DCDcQABoMNjM3NDIzMTgzODA1IgzFfhewd4QgTrPhYwcq3AOuqXRysx4dmekNOsn44mmwX0U%2BbSchPb2ro2RHB3c%2BF6YX4By9y9fNgOw3GE8DElR9amVvTLI9m2%2BMACVaUs7b7qIIpGr6RqcIQRpU4tDSSrXDfxijKYWRoOSI4fwgbJVyaoTj%2BAB5EMQEhld7ZLuk1%2BvApvwwRoExqQxofbVjis9gz%2B%2Fk7ww%2FvGvZyXWyiEZSYjkLf6XKzbBnZEW4lBU3oNMo5zIM6wB8A1cuqZgnYNqNbBOcXGkgKajtmF8zD%2F9IqQ8vT2j97ZGSK4%2F1yxO6AW7LN0kZZTO8Et1rCZs3ijhA54e6rKNqcOGS02xIrjwviesndLv8BdTPGjiLbJKKZBjeRFheDQViTBkln4j4qs1T9NIji44F%2FSQHxwVZ%2B5sAiux5XtBbaV0ZvPQ6N42hktXUz4LePIFrAoWFuQhMr6fdiNrLL%2FsL58dNT0%2F4mmISBgRVaTv%2FvtFukfbt6kGEpTqCuh0VCHD3rtuRfJDzFGihYk6f9RFtlaCHmERXxqaGqGyIkauqShQWWAu1t95Vpw1maccFqVmzFfmn5dGv3Hz%2BrJDCyqjeU20ZoRLj2EhyCkeiJgxoc0OY0bbhv1cNRnDoCg0Sl9gfG2RBE7YciOehWlFinv6J2XW74zDl1fO9BjqkATore1jJH3oZEmHgQiNRvKZBnKUWc95g%2BnVTiCc0sy4TPz2t54LHttTTpWUAGIGvpchw2Vun5V0kcJ3qTge699KsfujYxwmVKA7up7MCKDC450jfl6tlOK5JgO4mMgGIAwcs6bsDxYqrjUK6mtmeh8wPa6v8TbJeyubZnJDq2%2FCtOjBtXAtQ7XJaIC2fgxw9Ld9ETrm5jKRUyQHZ1EHgClI%2Bbd6t&X-Amz-Signature=dccf6b56ce44984b7a8d5eb9cf76ed918cd0ff7f453802307452161904ce4a77&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQTI4PL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaW1lcv0aj57CQl%2BMudfdAkPQfk4xweE9WQvRqCCO0fQIhAPxLAxpXccXGxG6CMimoz8Mybdpty0yq%2BC6Y3XY7clN5Kv8DCDcQABoMNjM3NDIzMTgzODA1IgzFfhewd4QgTrPhYwcq3AOuqXRysx4dmekNOsn44mmwX0U%2BbSchPb2ro2RHB3c%2BF6YX4By9y9fNgOw3GE8DElR9amVvTLI9m2%2BMACVaUs7b7qIIpGr6RqcIQRpU4tDSSrXDfxijKYWRoOSI4fwgbJVyaoTj%2BAB5EMQEhld7ZLuk1%2BvApvwwRoExqQxofbVjis9gz%2B%2Fk7ww%2FvGvZyXWyiEZSYjkLf6XKzbBnZEW4lBU3oNMo5zIM6wB8A1cuqZgnYNqNbBOcXGkgKajtmF8zD%2F9IqQ8vT2j97ZGSK4%2F1yxO6AW7LN0kZZTO8Et1rCZs3ijhA54e6rKNqcOGS02xIrjwviesndLv8BdTPGjiLbJKKZBjeRFheDQViTBkln4j4qs1T9NIji44F%2FSQHxwVZ%2B5sAiux5XtBbaV0ZvPQ6N42hktXUz4LePIFrAoWFuQhMr6fdiNrLL%2FsL58dNT0%2F4mmISBgRVaTv%2FvtFukfbt6kGEpTqCuh0VCHD3rtuRfJDzFGihYk6f9RFtlaCHmERXxqaGqGyIkauqShQWWAu1t95Vpw1maccFqVmzFfmn5dGv3Hz%2BrJDCyqjeU20ZoRLj2EhyCkeiJgxoc0OY0bbhv1cNRnDoCg0Sl9gfG2RBE7YciOehWlFinv6J2XW74zDl1fO9BjqkATore1jJH3oZEmHgQiNRvKZBnKUWc95g%2BnVTiCc0sy4TPz2t54LHttTTpWUAGIGvpchw2Vun5V0kcJ3qTge699KsfujYxwmVKA7up7MCKDC450jfl6tlOK5JgO4mMgGIAwcs6bsDxYqrjUK6mtmeh8wPa6v8TbJeyubZnJDq2%2FCtOjBtXAtQ7XJaIC2fgxw9Ld9ETrm5jKRUyQHZ1EHgClI%2Bbd6t&X-Amz-Signature=d9a94b2156c3769fffe829c321eef2fdd9db5a9891686e7969549ad972fb99c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQTI4PL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaW1lcv0aj57CQl%2BMudfdAkPQfk4xweE9WQvRqCCO0fQIhAPxLAxpXccXGxG6CMimoz8Mybdpty0yq%2BC6Y3XY7clN5Kv8DCDcQABoMNjM3NDIzMTgzODA1IgzFfhewd4QgTrPhYwcq3AOuqXRysx4dmekNOsn44mmwX0U%2BbSchPb2ro2RHB3c%2BF6YX4By9y9fNgOw3GE8DElR9amVvTLI9m2%2BMACVaUs7b7qIIpGr6RqcIQRpU4tDSSrXDfxijKYWRoOSI4fwgbJVyaoTj%2BAB5EMQEhld7ZLuk1%2BvApvwwRoExqQxofbVjis9gz%2B%2Fk7ww%2FvGvZyXWyiEZSYjkLf6XKzbBnZEW4lBU3oNMo5zIM6wB8A1cuqZgnYNqNbBOcXGkgKajtmF8zD%2F9IqQ8vT2j97ZGSK4%2F1yxO6AW7LN0kZZTO8Et1rCZs3ijhA54e6rKNqcOGS02xIrjwviesndLv8BdTPGjiLbJKKZBjeRFheDQViTBkln4j4qs1T9NIji44F%2FSQHxwVZ%2B5sAiux5XtBbaV0ZvPQ6N42hktXUz4LePIFrAoWFuQhMr6fdiNrLL%2FsL58dNT0%2F4mmISBgRVaTv%2FvtFukfbt6kGEpTqCuh0VCHD3rtuRfJDzFGihYk6f9RFtlaCHmERXxqaGqGyIkauqShQWWAu1t95Vpw1maccFqVmzFfmn5dGv3Hz%2BrJDCyqjeU20ZoRLj2EhyCkeiJgxoc0OY0bbhv1cNRnDoCg0Sl9gfG2RBE7YciOehWlFinv6J2XW74zDl1fO9BjqkATore1jJH3oZEmHgQiNRvKZBnKUWc95g%2BnVTiCc0sy4TPz2t54LHttTTpWUAGIGvpchw2Vun5V0kcJ3qTge699KsfujYxwmVKA7up7MCKDC450jfl6tlOK5JgO4mMgGIAwcs6bsDxYqrjUK6mtmeh8wPa6v8TbJeyubZnJDq2%2FCtOjBtXAtQ7XJaIC2fgxw9Ld9ETrm5jKRUyQHZ1EHgClI%2Bbd6t&X-Amz-Signature=2726d43ca9004be4f8f5c64f1a8fe68997d609c9c568f5bf1f0fcb885a0cc6df&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQTI4PL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaW1lcv0aj57CQl%2BMudfdAkPQfk4xweE9WQvRqCCO0fQIhAPxLAxpXccXGxG6CMimoz8Mybdpty0yq%2BC6Y3XY7clN5Kv8DCDcQABoMNjM3NDIzMTgzODA1IgzFfhewd4QgTrPhYwcq3AOuqXRysx4dmekNOsn44mmwX0U%2BbSchPb2ro2RHB3c%2BF6YX4By9y9fNgOw3GE8DElR9amVvTLI9m2%2BMACVaUs7b7qIIpGr6RqcIQRpU4tDSSrXDfxijKYWRoOSI4fwgbJVyaoTj%2BAB5EMQEhld7ZLuk1%2BvApvwwRoExqQxofbVjis9gz%2B%2Fk7ww%2FvGvZyXWyiEZSYjkLf6XKzbBnZEW4lBU3oNMo5zIM6wB8A1cuqZgnYNqNbBOcXGkgKajtmF8zD%2F9IqQ8vT2j97ZGSK4%2F1yxO6AW7LN0kZZTO8Et1rCZs3ijhA54e6rKNqcOGS02xIrjwviesndLv8BdTPGjiLbJKKZBjeRFheDQViTBkln4j4qs1T9NIji44F%2FSQHxwVZ%2B5sAiux5XtBbaV0ZvPQ6N42hktXUz4LePIFrAoWFuQhMr6fdiNrLL%2FsL58dNT0%2F4mmISBgRVaTv%2FvtFukfbt6kGEpTqCuh0VCHD3rtuRfJDzFGihYk6f9RFtlaCHmERXxqaGqGyIkauqShQWWAu1t95Vpw1maccFqVmzFfmn5dGv3Hz%2BrJDCyqjeU20ZoRLj2EhyCkeiJgxoc0OY0bbhv1cNRnDoCg0Sl9gfG2RBE7YciOehWlFinv6J2XW74zDl1fO9BjqkATore1jJH3oZEmHgQiNRvKZBnKUWc95g%2BnVTiCc0sy4TPz2t54LHttTTpWUAGIGvpchw2Vun5V0kcJ3qTge699KsfujYxwmVKA7up7MCKDC450jfl6tlOK5JgO4mMgGIAwcs6bsDxYqrjUK6mtmeh8wPa6v8TbJeyubZnJDq2%2FCtOjBtXAtQ7XJaIC2fgxw9Ld9ETrm5jKRUyQHZ1EHgClI%2Bbd6t&X-Amz-Signature=e8ff53462bfceca7227d87333eace65818a50fb47682cdb19509c309a8d170f9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQTI4PL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaW1lcv0aj57CQl%2BMudfdAkPQfk4xweE9WQvRqCCO0fQIhAPxLAxpXccXGxG6CMimoz8Mybdpty0yq%2BC6Y3XY7clN5Kv8DCDcQABoMNjM3NDIzMTgzODA1IgzFfhewd4QgTrPhYwcq3AOuqXRysx4dmekNOsn44mmwX0U%2BbSchPb2ro2RHB3c%2BF6YX4By9y9fNgOw3GE8DElR9amVvTLI9m2%2BMACVaUs7b7qIIpGr6RqcIQRpU4tDSSrXDfxijKYWRoOSI4fwgbJVyaoTj%2BAB5EMQEhld7ZLuk1%2BvApvwwRoExqQxofbVjis9gz%2B%2Fk7ww%2FvGvZyXWyiEZSYjkLf6XKzbBnZEW4lBU3oNMo5zIM6wB8A1cuqZgnYNqNbBOcXGkgKajtmF8zD%2F9IqQ8vT2j97ZGSK4%2F1yxO6AW7LN0kZZTO8Et1rCZs3ijhA54e6rKNqcOGS02xIrjwviesndLv8BdTPGjiLbJKKZBjeRFheDQViTBkln4j4qs1T9NIji44F%2FSQHxwVZ%2B5sAiux5XtBbaV0ZvPQ6N42hktXUz4LePIFrAoWFuQhMr6fdiNrLL%2FsL58dNT0%2F4mmISBgRVaTv%2FvtFukfbt6kGEpTqCuh0VCHD3rtuRfJDzFGihYk6f9RFtlaCHmERXxqaGqGyIkauqShQWWAu1t95Vpw1maccFqVmzFfmn5dGv3Hz%2BrJDCyqjeU20ZoRLj2EhyCkeiJgxoc0OY0bbhv1cNRnDoCg0Sl9gfG2RBE7YciOehWlFinv6J2XW74zDl1fO9BjqkATore1jJH3oZEmHgQiNRvKZBnKUWc95g%2BnVTiCc0sy4TPz2t54LHttTTpWUAGIGvpchw2Vun5V0kcJ3qTge699KsfujYxwmVKA7up7MCKDC450jfl6tlOK5JgO4mMgGIAwcs6bsDxYqrjUK6mtmeh8wPa6v8TbJeyubZnJDq2%2FCtOjBtXAtQ7XJaIC2fgxw9Ld9ETrm5jKRUyQHZ1EHgClI%2Bbd6t&X-Amz-Signature=eadb9127d284c95c6d8a8a3e983fd8b3c6bdac15070526967280ee890b3ad55a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQTI4PL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaW1lcv0aj57CQl%2BMudfdAkPQfk4xweE9WQvRqCCO0fQIhAPxLAxpXccXGxG6CMimoz8Mybdpty0yq%2BC6Y3XY7clN5Kv8DCDcQABoMNjM3NDIzMTgzODA1IgzFfhewd4QgTrPhYwcq3AOuqXRysx4dmekNOsn44mmwX0U%2BbSchPb2ro2RHB3c%2BF6YX4By9y9fNgOw3GE8DElR9amVvTLI9m2%2BMACVaUs7b7qIIpGr6RqcIQRpU4tDSSrXDfxijKYWRoOSI4fwgbJVyaoTj%2BAB5EMQEhld7ZLuk1%2BvApvwwRoExqQxofbVjis9gz%2B%2Fk7ww%2FvGvZyXWyiEZSYjkLf6XKzbBnZEW4lBU3oNMo5zIM6wB8A1cuqZgnYNqNbBOcXGkgKajtmF8zD%2F9IqQ8vT2j97ZGSK4%2F1yxO6AW7LN0kZZTO8Et1rCZs3ijhA54e6rKNqcOGS02xIrjwviesndLv8BdTPGjiLbJKKZBjeRFheDQViTBkln4j4qs1T9NIji44F%2FSQHxwVZ%2B5sAiux5XtBbaV0ZvPQ6N42hktXUz4LePIFrAoWFuQhMr6fdiNrLL%2FsL58dNT0%2F4mmISBgRVaTv%2FvtFukfbt6kGEpTqCuh0VCHD3rtuRfJDzFGihYk6f9RFtlaCHmERXxqaGqGyIkauqShQWWAu1t95Vpw1maccFqVmzFfmn5dGv3Hz%2BrJDCyqjeU20ZoRLj2EhyCkeiJgxoc0OY0bbhv1cNRnDoCg0Sl9gfG2RBE7YciOehWlFinv6J2XW74zDl1fO9BjqkATore1jJH3oZEmHgQiNRvKZBnKUWc95g%2BnVTiCc0sy4TPz2t54LHttTTpWUAGIGvpchw2Vun5V0kcJ3qTge699KsfujYxwmVKA7up7MCKDC450jfl6tlOK5JgO4mMgGIAwcs6bsDxYqrjUK6mtmeh8wPa6v8TbJeyubZnJDq2%2FCtOjBtXAtQ7XJaIC2fgxw9Ld9ETrm5jKRUyQHZ1EHgClI%2Bbd6t&X-Amz-Signature=7f3377e9d203962edc89b1925925e531ba61587e593f86bdd1aca4fef8526d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

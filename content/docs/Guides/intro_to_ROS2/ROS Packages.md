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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55RY2ED%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDux%2Bl2StvCHxKZYAbQqZuZMgQ9lP1sogNqeid8C8fAKgIhANzveGloERmQGq1thDvprBADAjHRUjixrYyHVasRwY9eKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpwOjb3bfxHbv5ZXMq3AM%2F7EmVkmQX%2F8ClrCENFShQZxXT3zuElx%2BlBu4tSGwbi6BIxs6y%2BYZ%2B2fxtH98ib6vMYgFrJrZ1MiYkUAPPCCw0%2F4DVWdzirNsxE49Clxmn%2FGSJyPpVAucEj6TcqACWUgn7KMudslktkJcb5XB9rgcbjwGtFFuEpUPf7fc%2Bf2WfHtZ7Bx2TkSKLspqoFBLmGEso1cXqe9Lcv8n7lp5UTr73NSm0Hy5bUZfaPGccYUR%2F43kFnu9HfqKkAuHALd6ANp9DQdgTNfiv9pSuyjrucEHp%2BsITWvmNCJjM3zx%2FB2JND580Ggf3GJ3ZLhfJoHIR%2BJOBrU2FQqGBFk3%2BGM%2BjFiw3I2W1AFILMplXzVOXQsOC2a618sE2jtkE7ZpPHfOXepYfm4tx1oBAOpk0MMXiCz5IjHV77YrquvZnnaRs7TGt7OS1nd9i%2FDKNOhC5Kllysir4IN18Cmw6GWFpZ%2FG8r7gNlJh3TvWdwE9zX33HvblOtrCKKJpSEI5JitwU25ZkEf4PruyGbLSbfYFDXcVJxU8eJEhFomGZnFaJZgFK5PeOx98oWVFD0NIeRS6ZB8PhW3Da7R526YyORwk45MyHglVDINjfzz%2B1BjVzXGzTOHuHPr5HQTprQgOVZhCiTDCvy7PBBjqkAShW0cWlf9vj8vo0eBbDZ000QPBw7l8Qjk0MeRnOqdlCgLch%2BcrQZbLwQZOIlIgT5jSIYsRfxH6zU8O8dIRb3zbSAvVnrClpT8Ri4Z43W1zohSxbOhmFWiJ45VLzJdrU%2B6YrvRbt2b6VzRVIbjjClj8fPdE98obyfOyfGxqQ7bshvyZShVhQCr9oSMn2qe5JkW9RnNMwdw6p5MnTNDAOeNESNb49&X-Amz-Signature=8eeb8aee8b8a815b2a1a6047c64b2a92e865cb38d0f7014a23285f2dbb8098d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55RY2ED%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDux%2Bl2StvCHxKZYAbQqZuZMgQ9lP1sogNqeid8C8fAKgIhANzveGloERmQGq1thDvprBADAjHRUjixrYyHVasRwY9eKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpwOjb3bfxHbv5ZXMq3AM%2F7EmVkmQX%2F8ClrCENFShQZxXT3zuElx%2BlBu4tSGwbi6BIxs6y%2BYZ%2B2fxtH98ib6vMYgFrJrZ1MiYkUAPPCCw0%2F4DVWdzirNsxE49Clxmn%2FGSJyPpVAucEj6TcqACWUgn7KMudslktkJcb5XB9rgcbjwGtFFuEpUPf7fc%2Bf2WfHtZ7Bx2TkSKLspqoFBLmGEso1cXqe9Lcv8n7lp5UTr73NSm0Hy5bUZfaPGccYUR%2F43kFnu9HfqKkAuHALd6ANp9DQdgTNfiv9pSuyjrucEHp%2BsITWvmNCJjM3zx%2FB2JND580Ggf3GJ3ZLhfJoHIR%2BJOBrU2FQqGBFk3%2BGM%2BjFiw3I2W1AFILMplXzVOXQsOC2a618sE2jtkE7ZpPHfOXepYfm4tx1oBAOpk0MMXiCz5IjHV77YrquvZnnaRs7TGt7OS1nd9i%2FDKNOhC5Kllysir4IN18Cmw6GWFpZ%2FG8r7gNlJh3TvWdwE9zX33HvblOtrCKKJpSEI5JitwU25ZkEf4PruyGbLSbfYFDXcVJxU8eJEhFomGZnFaJZgFK5PeOx98oWVFD0NIeRS6ZB8PhW3Da7R526YyORwk45MyHglVDINjfzz%2B1BjVzXGzTOHuHPr5HQTprQgOVZhCiTDCvy7PBBjqkAShW0cWlf9vj8vo0eBbDZ000QPBw7l8Qjk0MeRnOqdlCgLch%2BcrQZbLwQZOIlIgT5jSIYsRfxH6zU8O8dIRb3zbSAvVnrClpT8Ri4Z43W1zohSxbOhmFWiJ45VLzJdrU%2B6YrvRbt2b6VzRVIbjjClj8fPdE98obyfOyfGxqQ7bshvyZShVhQCr9oSMn2qe5JkW9RnNMwdw6p5MnTNDAOeNESNb49&X-Amz-Signature=29bc70ccf31e0e0e3a86c3a37da5536e090cf5106da29bc3be1907b96c3cd52e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55RY2ED%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDux%2Bl2StvCHxKZYAbQqZuZMgQ9lP1sogNqeid8C8fAKgIhANzveGloERmQGq1thDvprBADAjHRUjixrYyHVasRwY9eKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpwOjb3bfxHbv5ZXMq3AM%2F7EmVkmQX%2F8ClrCENFShQZxXT3zuElx%2BlBu4tSGwbi6BIxs6y%2BYZ%2B2fxtH98ib6vMYgFrJrZ1MiYkUAPPCCw0%2F4DVWdzirNsxE49Clxmn%2FGSJyPpVAucEj6TcqACWUgn7KMudslktkJcb5XB9rgcbjwGtFFuEpUPf7fc%2Bf2WfHtZ7Bx2TkSKLspqoFBLmGEso1cXqe9Lcv8n7lp5UTr73NSm0Hy5bUZfaPGccYUR%2F43kFnu9HfqKkAuHALd6ANp9DQdgTNfiv9pSuyjrucEHp%2BsITWvmNCJjM3zx%2FB2JND580Ggf3GJ3ZLhfJoHIR%2BJOBrU2FQqGBFk3%2BGM%2BjFiw3I2W1AFILMplXzVOXQsOC2a618sE2jtkE7ZpPHfOXepYfm4tx1oBAOpk0MMXiCz5IjHV77YrquvZnnaRs7TGt7OS1nd9i%2FDKNOhC5Kllysir4IN18Cmw6GWFpZ%2FG8r7gNlJh3TvWdwE9zX33HvblOtrCKKJpSEI5JitwU25ZkEf4PruyGbLSbfYFDXcVJxU8eJEhFomGZnFaJZgFK5PeOx98oWVFD0NIeRS6ZB8PhW3Da7R526YyORwk45MyHglVDINjfzz%2B1BjVzXGzTOHuHPr5HQTprQgOVZhCiTDCvy7PBBjqkAShW0cWlf9vj8vo0eBbDZ000QPBw7l8Qjk0MeRnOqdlCgLch%2BcrQZbLwQZOIlIgT5jSIYsRfxH6zU8O8dIRb3zbSAvVnrClpT8Ri4Z43W1zohSxbOhmFWiJ45VLzJdrU%2B6YrvRbt2b6VzRVIbjjClj8fPdE98obyfOyfGxqQ7bshvyZShVhQCr9oSMn2qe5JkW9RnNMwdw6p5MnTNDAOeNESNb49&X-Amz-Signature=f63542651853037673822dbfc5eb0b7432ea0d317452bad35b556571e8daee2b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55RY2ED%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDux%2Bl2StvCHxKZYAbQqZuZMgQ9lP1sogNqeid8C8fAKgIhANzveGloERmQGq1thDvprBADAjHRUjixrYyHVasRwY9eKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpwOjb3bfxHbv5ZXMq3AM%2F7EmVkmQX%2F8ClrCENFShQZxXT3zuElx%2BlBu4tSGwbi6BIxs6y%2BYZ%2B2fxtH98ib6vMYgFrJrZ1MiYkUAPPCCw0%2F4DVWdzirNsxE49Clxmn%2FGSJyPpVAucEj6TcqACWUgn7KMudslktkJcb5XB9rgcbjwGtFFuEpUPf7fc%2Bf2WfHtZ7Bx2TkSKLspqoFBLmGEso1cXqe9Lcv8n7lp5UTr73NSm0Hy5bUZfaPGccYUR%2F43kFnu9HfqKkAuHALd6ANp9DQdgTNfiv9pSuyjrucEHp%2BsITWvmNCJjM3zx%2FB2JND580Ggf3GJ3ZLhfJoHIR%2BJOBrU2FQqGBFk3%2BGM%2BjFiw3I2W1AFILMplXzVOXQsOC2a618sE2jtkE7ZpPHfOXepYfm4tx1oBAOpk0MMXiCz5IjHV77YrquvZnnaRs7TGt7OS1nd9i%2FDKNOhC5Kllysir4IN18Cmw6GWFpZ%2FG8r7gNlJh3TvWdwE9zX33HvblOtrCKKJpSEI5JitwU25ZkEf4PruyGbLSbfYFDXcVJxU8eJEhFomGZnFaJZgFK5PeOx98oWVFD0NIeRS6ZB8PhW3Da7R526YyORwk45MyHglVDINjfzz%2B1BjVzXGzTOHuHPr5HQTprQgOVZhCiTDCvy7PBBjqkAShW0cWlf9vj8vo0eBbDZ000QPBw7l8Qjk0MeRnOqdlCgLch%2BcrQZbLwQZOIlIgT5jSIYsRfxH6zU8O8dIRb3zbSAvVnrClpT8Ri4Z43W1zohSxbOhmFWiJ45VLzJdrU%2B6YrvRbt2b6VzRVIbjjClj8fPdE98obyfOyfGxqQ7bshvyZShVhQCr9oSMn2qe5JkW9RnNMwdw6p5MnTNDAOeNESNb49&X-Amz-Signature=413d0b0a53b23ff1eda1393b9a75c29f24320a00d859a44c53da38b49a3e1c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55RY2ED%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDux%2Bl2StvCHxKZYAbQqZuZMgQ9lP1sogNqeid8C8fAKgIhANzveGloERmQGq1thDvprBADAjHRUjixrYyHVasRwY9eKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpwOjb3bfxHbv5ZXMq3AM%2F7EmVkmQX%2F8ClrCENFShQZxXT3zuElx%2BlBu4tSGwbi6BIxs6y%2BYZ%2B2fxtH98ib6vMYgFrJrZ1MiYkUAPPCCw0%2F4DVWdzirNsxE49Clxmn%2FGSJyPpVAucEj6TcqACWUgn7KMudslktkJcb5XB9rgcbjwGtFFuEpUPf7fc%2Bf2WfHtZ7Bx2TkSKLspqoFBLmGEso1cXqe9Lcv8n7lp5UTr73NSm0Hy5bUZfaPGccYUR%2F43kFnu9HfqKkAuHALd6ANp9DQdgTNfiv9pSuyjrucEHp%2BsITWvmNCJjM3zx%2FB2JND580Ggf3GJ3ZLhfJoHIR%2BJOBrU2FQqGBFk3%2BGM%2BjFiw3I2W1AFILMplXzVOXQsOC2a618sE2jtkE7ZpPHfOXepYfm4tx1oBAOpk0MMXiCz5IjHV77YrquvZnnaRs7TGt7OS1nd9i%2FDKNOhC5Kllysir4IN18Cmw6GWFpZ%2FG8r7gNlJh3TvWdwE9zX33HvblOtrCKKJpSEI5JitwU25ZkEf4PruyGbLSbfYFDXcVJxU8eJEhFomGZnFaJZgFK5PeOx98oWVFD0NIeRS6ZB8PhW3Da7R526YyORwk45MyHglVDINjfzz%2B1BjVzXGzTOHuHPr5HQTprQgOVZhCiTDCvy7PBBjqkAShW0cWlf9vj8vo0eBbDZ000QPBw7l8Qjk0MeRnOqdlCgLch%2BcrQZbLwQZOIlIgT5jSIYsRfxH6zU8O8dIRb3zbSAvVnrClpT8Ri4Z43W1zohSxbOhmFWiJ45VLzJdrU%2B6YrvRbt2b6VzRVIbjjClj8fPdE98obyfOyfGxqQ7bshvyZShVhQCr9oSMn2qe5JkW9RnNMwdw6p5MnTNDAOeNESNb49&X-Amz-Signature=1cddc2610f74f31e0aa4fd86bd3f037a1abb9f11fb6afa5dcb50c92ddacefb27&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55RY2ED%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDux%2Bl2StvCHxKZYAbQqZuZMgQ9lP1sogNqeid8C8fAKgIhANzveGloERmQGq1thDvprBADAjHRUjixrYyHVasRwY9eKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpwOjb3bfxHbv5ZXMq3AM%2F7EmVkmQX%2F8ClrCENFShQZxXT3zuElx%2BlBu4tSGwbi6BIxs6y%2BYZ%2B2fxtH98ib6vMYgFrJrZ1MiYkUAPPCCw0%2F4DVWdzirNsxE49Clxmn%2FGSJyPpVAucEj6TcqACWUgn7KMudslktkJcb5XB9rgcbjwGtFFuEpUPf7fc%2Bf2WfHtZ7Bx2TkSKLspqoFBLmGEso1cXqe9Lcv8n7lp5UTr73NSm0Hy5bUZfaPGccYUR%2F43kFnu9HfqKkAuHALd6ANp9DQdgTNfiv9pSuyjrucEHp%2BsITWvmNCJjM3zx%2FB2JND580Ggf3GJ3ZLhfJoHIR%2BJOBrU2FQqGBFk3%2BGM%2BjFiw3I2W1AFILMplXzVOXQsOC2a618sE2jtkE7ZpPHfOXepYfm4tx1oBAOpk0MMXiCz5IjHV77YrquvZnnaRs7TGt7OS1nd9i%2FDKNOhC5Kllysir4IN18Cmw6GWFpZ%2FG8r7gNlJh3TvWdwE9zX33HvblOtrCKKJpSEI5JitwU25ZkEf4PruyGbLSbfYFDXcVJxU8eJEhFomGZnFaJZgFK5PeOx98oWVFD0NIeRS6ZB8PhW3Da7R526YyORwk45MyHglVDINjfzz%2B1BjVzXGzTOHuHPr5HQTprQgOVZhCiTDCvy7PBBjqkAShW0cWlf9vj8vo0eBbDZ000QPBw7l8Qjk0MeRnOqdlCgLch%2BcrQZbLwQZOIlIgT5jSIYsRfxH6zU8O8dIRb3zbSAvVnrClpT8Ri4Z43W1zohSxbOhmFWiJ45VLzJdrU%2B6YrvRbt2b6VzRVIbjjClj8fPdE98obyfOyfGxqQ7bshvyZShVhQCr9oSMn2qe5JkW9RnNMwdw6p5MnTNDAOeNESNb49&X-Amz-Signature=0825abe0fbafc39638507c9a281f3c20598368751e2e60374e4ab03be8b711af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55RY2ED%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDux%2Bl2StvCHxKZYAbQqZuZMgQ9lP1sogNqeid8C8fAKgIhANzveGloERmQGq1thDvprBADAjHRUjixrYyHVasRwY9eKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpwOjb3bfxHbv5ZXMq3AM%2F7EmVkmQX%2F8ClrCENFShQZxXT3zuElx%2BlBu4tSGwbi6BIxs6y%2BYZ%2B2fxtH98ib6vMYgFrJrZ1MiYkUAPPCCw0%2F4DVWdzirNsxE49Clxmn%2FGSJyPpVAucEj6TcqACWUgn7KMudslktkJcb5XB9rgcbjwGtFFuEpUPf7fc%2Bf2WfHtZ7Bx2TkSKLspqoFBLmGEso1cXqe9Lcv8n7lp5UTr73NSm0Hy5bUZfaPGccYUR%2F43kFnu9HfqKkAuHALd6ANp9DQdgTNfiv9pSuyjrucEHp%2BsITWvmNCJjM3zx%2FB2JND580Ggf3GJ3ZLhfJoHIR%2BJOBrU2FQqGBFk3%2BGM%2BjFiw3I2W1AFILMplXzVOXQsOC2a618sE2jtkE7ZpPHfOXepYfm4tx1oBAOpk0MMXiCz5IjHV77YrquvZnnaRs7TGt7OS1nd9i%2FDKNOhC5Kllysir4IN18Cmw6GWFpZ%2FG8r7gNlJh3TvWdwE9zX33HvblOtrCKKJpSEI5JitwU25ZkEf4PruyGbLSbfYFDXcVJxU8eJEhFomGZnFaJZgFK5PeOx98oWVFD0NIeRS6ZB8PhW3Da7R526YyORwk45MyHglVDINjfzz%2B1BjVzXGzTOHuHPr5HQTprQgOVZhCiTDCvy7PBBjqkAShW0cWlf9vj8vo0eBbDZ000QPBw7l8Qjk0MeRnOqdlCgLch%2BcrQZbLwQZOIlIgT5jSIYsRfxH6zU8O8dIRb3zbSAvVnrClpT8Ri4Z43W1zohSxbOhmFWiJ45VLzJdrU%2B6YrvRbt2b6VzRVIbjjClj8fPdE98obyfOyfGxqQ7bshvyZShVhQCr9oSMn2qe5JkW9RnNMwdw6p5MnTNDAOeNESNb49&X-Amz-Signature=a79fe7d412aeaaee510fa55a6b128c05cf32999aa2682e4e1f6e9a42bd86be6f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJORCE4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFJF6Um4cto0u59D6KkVnDZ%2BuG5U5JBLqjgXhCwF0GuWAiBxGcVg1CHxxFyvp1aQVSzelaAdAt%2FmBXg%2BZAQYft50ICr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMKDjFOG0j7x1qZ6RPKtwD7Zoga0%2F68D3LVbn7iS8iTblLgB01OZHITwtFz3uPpJvf0p2qe%2Fj1maDnz0JmJgNM4VivC2sSHYpHtmlu7ncCUFdIxdWjxqYyupa9GS%2FWcoyDWbmPsYXXq5nTdTX77AgKdODzF29UafWMRqQUn%2BDmy0omGaJZ9nGDeYLrVYmm0cPBRg2zCiyn1O%2BVnHClHnzXKZJ5riD8%2BPWiRcNPzQwmsK5lUBBr00sDTObjlgP4haoHWzITFulqIMeScuQjiOotclnucgzNyMXmolu95rSB%2FlcjE6qOBFsnUvF%2BAakau%2BxL7rnv9fPTx3WkiXQM3sgEeIFW6YYRoqh9gjQC5SITvOe88XZp2%2FsVSiyTt9MuDDJXj3Hp5ijgFLx5KBLt0dUn3pPqqiTvBCwWe0Wv9q%2BESmXq9GEfpmvVJrIz9uAS30w3fE5A2Gz1dUhTBQW68HdfE0ywzjO%2FBmaII3S0%2F1g1YRp5H0le4clJbwpqji3D9g4MCQjz9Jg4d312M%2FfzkXNHl58aIsAjP%2FxFYOE4n4vivVLoTyISyT7xUe1%2BRztHM0lcZCxaSyXLyPRmRGnJW6cV0TTyD3HkTkfHszm3w%2FtE9%2FQhTE04RwJfvi2qTfw%2B4bwEFm4%2FAcp0CsOC61YwrsW5wgY6pgFMyPlB8p%2F5gDfZ%2BWB%2FN3Miz9F9agGwBQpgzba%2FMu6%2Ff0eKelPHcocguhhXNZC%2FK0qFqoWLok34PKWJsyWDOeQlJORnSSJMP1YDwRkDyle7HSA4XX2%2BzLwZWGOWctCKY5Vqt3EAbsr0ESzKAzbSq%2FX0U5NxT3Qb9gnikBd0tPLZ%2BsJjEk%2FwJpj%2BH6grk2ZnRI490SlpMXEv2P2btsN4CjVX4JAOKZ6w&X-Amz-Signature=b0cc819d2b489972dcfcc227db23d20697afaade54fd60af14407a2b55cb38f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJORCE4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFJF6Um4cto0u59D6KkVnDZ%2BuG5U5JBLqjgXhCwF0GuWAiBxGcVg1CHxxFyvp1aQVSzelaAdAt%2FmBXg%2BZAQYft50ICr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMKDjFOG0j7x1qZ6RPKtwD7Zoga0%2F68D3LVbn7iS8iTblLgB01OZHITwtFz3uPpJvf0p2qe%2Fj1maDnz0JmJgNM4VivC2sSHYpHtmlu7ncCUFdIxdWjxqYyupa9GS%2FWcoyDWbmPsYXXq5nTdTX77AgKdODzF29UafWMRqQUn%2BDmy0omGaJZ9nGDeYLrVYmm0cPBRg2zCiyn1O%2BVnHClHnzXKZJ5riD8%2BPWiRcNPzQwmsK5lUBBr00sDTObjlgP4haoHWzITFulqIMeScuQjiOotclnucgzNyMXmolu95rSB%2FlcjE6qOBFsnUvF%2BAakau%2BxL7rnv9fPTx3WkiXQM3sgEeIFW6YYRoqh9gjQC5SITvOe88XZp2%2FsVSiyTt9MuDDJXj3Hp5ijgFLx5KBLt0dUn3pPqqiTvBCwWe0Wv9q%2BESmXq9GEfpmvVJrIz9uAS30w3fE5A2Gz1dUhTBQW68HdfE0ywzjO%2FBmaII3S0%2F1g1YRp5H0le4clJbwpqji3D9g4MCQjz9Jg4d312M%2FfzkXNHl58aIsAjP%2FxFYOE4n4vivVLoTyISyT7xUe1%2BRztHM0lcZCxaSyXLyPRmRGnJW6cV0TTyD3HkTkfHszm3w%2FtE9%2FQhTE04RwJfvi2qTfw%2B4bwEFm4%2FAcp0CsOC61YwrsW5wgY6pgFMyPlB8p%2F5gDfZ%2BWB%2FN3Miz9F9agGwBQpgzba%2FMu6%2Ff0eKelPHcocguhhXNZC%2FK0qFqoWLok34PKWJsyWDOeQlJORnSSJMP1YDwRkDyle7HSA4XX2%2BzLwZWGOWctCKY5Vqt3EAbsr0ESzKAzbSq%2FX0U5NxT3Qb9gnikBd0tPLZ%2BsJjEk%2FwJpj%2BH6grk2ZnRI490SlpMXEv2P2btsN4CjVX4JAOKZ6w&X-Amz-Signature=86f97d0c9796a917e7483ca2eeb0e4c24544aeba8ec3b719224b5a306b6d7310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJORCE4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFJF6Um4cto0u59D6KkVnDZ%2BuG5U5JBLqjgXhCwF0GuWAiBxGcVg1CHxxFyvp1aQVSzelaAdAt%2FmBXg%2BZAQYft50ICr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMKDjFOG0j7x1qZ6RPKtwD7Zoga0%2F68D3LVbn7iS8iTblLgB01OZHITwtFz3uPpJvf0p2qe%2Fj1maDnz0JmJgNM4VivC2sSHYpHtmlu7ncCUFdIxdWjxqYyupa9GS%2FWcoyDWbmPsYXXq5nTdTX77AgKdODzF29UafWMRqQUn%2BDmy0omGaJZ9nGDeYLrVYmm0cPBRg2zCiyn1O%2BVnHClHnzXKZJ5riD8%2BPWiRcNPzQwmsK5lUBBr00sDTObjlgP4haoHWzITFulqIMeScuQjiOotclnucgzNyMXmolu95rSB%2FlcjE6qOBFsnUvF%2BAakau%2BxL7rnv9fPTx3WkiXQM3sgEeIFW6YYRoqh9gjQC5SITvOe88XZp2%2FsVSiyTt9MuDDJXj3Hp5ijgFLx5KBLt0dUn3pPqqiTvBCwWe0Wv9q%2BESmXq9GEfpmvVJrIz9uAS30w3fE5A2Gz1dUhTBQW68HdfE0ywzjO%2FBmaII3S0%2F1g1YRp5H0le4clJbwpqji3D9g4MCQjz9Jg4d312M%2FfzkXNHl58aIsAjP%2FxFYOE4n4vivVLoTyISyT7xUe1%2BRztHM0lcZCxaSyXLyPRmRGnJW6cV0TTyD3HkTkfHszm3w%2FtE9%2FQhTE04RwJfvi2qTfw%2B4bwEFm4%2FAcp0CsOC61YwrsW5wgY6pgFMyPlB8p%2F5gDfZ%2BWB%2FN3Miz9F9agGwBQpgzba%2FMu6%2Ff0eKelPHcocguhhXNZC%2FK0qFqoWLok34PKWJsyWDOeQlJORnSSJMP1YDwRkDyle7HSA4XX2%2BzLwZWGOWctCKY5Vqt3EAbsr0ESzKAzbSq%2FX0U5NxT3Qb9gnikBd0tPLZ%2BsJjEk%2FwJpj%2BH6grk2ZnRI490SlpMXEv2P2btsN4CjVX4JAOKZ6w&X-Amz-Signature=42ef2c88d8b17b92657c3010596bbb281fe5aab4dd446049db8f28af83834a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJORCE4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFJF6Um4cto0u59D6KkVnDZ%2BuG5U5JBLqjgXhCwF0GuWAiBxGcVg1CHxxFyvp1aQVSzelaAdAt%2FmBXg%2BZAQYft50ICr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMKDjFOG0j7x1qZ6RPKtwD7Zoga0%2F68D3LVbn7iS8iTblLgB01OZHITwtFz3uPpJvf0p2qe%2Fj1maDnz0JmJgNM4VivC2sSHYpHtmlu7ncCUFdIxdWjxqYyupa9GS%2FWcoyDWbmPsYXXq5nTdTX77AgKdODzF29UafWMRqQUn%2BDmy0omGaJZ9nGDeYLrVYmm0cPBRg2zCiyn1O%2BVnHClHnzXKZJ5riD8%2BPWiRcNPzQwmsK5lUBBr00sDTObjlgP4haoHWzITFulqIMeScuQjiOotclnucgzNyMXmolu95rSB%2FlcjE6qOBFsnUvF%2BAakau%2BxL7rnv9fPTx3WkiXQM3sgEeIFW6YYRoqh9gjQC5SITvOe88XZp2%2FsVSiyTt9MuDDJXj3Hp5ijgFLx5KBLt0dUn3pPqqiTvBCwWe0Wv9q%2BESmXq9GEfpmvVJrIz9uAS30w3fE5A2Gz1dUhTBQW68HdfE0ywzjO%2FBmaII3S0%2F1g1YRp5H0le4clJbwpqji3D9g4MCQjz9Jg4d312M%2FfzkXNHl58aIsAjP%2FxFYOE4n4vivVLoTyISyT7xUe1%2BRztHM0lcZCxaSyXLyPRmRGnJW6cV0TTyD3HkTkfHszm3w%2FtE9%2FQhTE04RwJfvi2qTfw%2B4bwEFm4%2FAcp0CsOC61YwrsW5wgY6pgFMyPlB8p%2F5gDfZ%2BWB%2FN3Miz9F9agGwBQpgzba%2FMu6%2Ff0eKelPHcocguhhXNZC%2FK0qFqoWLok34PKWJsyWDOeQlJORnSSJMP1YDwRkDyle7HSA4XX2%2BzLwZWGOWctCKY5Vqt3EAbsr0ESzKAzbSq%2FX0U5NxT3Qb9gnikBd0tPLZ%2BsJjEk%2FwJpj%2BH6grk2ZnRI490SlpMXEv2P2btsN4CjVX4JAOKZ6w&X-Amz-Signature=5ef22bd1ddcb9eb01d564ca0bb3728b05e7cbf957f629cc72dcc8ab31031137b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJORCE4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFJF6Um4cto0u59D6KkVnDZ%2BuG5U5JBLqjgXhCwF0GuWAiBxGcVg1CHxxFyvp1aQVSzelaAdAt%2FmBXg%2BZAQYft50ICr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMKDjFOG0j7x1qZ6RPKtwD7Zoga0%2F68D3LVbn7iS8iTblLgB01OZHITwtFz3uPpJvf0p2qe%2Fj1maDnz0JmJgNM4VivC2sSHYpHtmlu7ncCUFdIxdWjxqYyupa9GS%2FWcoyDWbmPsYXXq5nTdTX77AgKdODzF29UafWMRqQUn%2BDmy0omGaJZ9nGDeYLrVYmm0cPBRg2zCiyn1O%2BVnHClHnzXKZJ5riD8%2BPWiRcNPzQwmsK5lUBBr00sDTObjlgP4haoHWzITFulqIMeScuQjiOotclnucgzNyMXmolu95rSB%2FlcjE6qOBFsnUvF%2BAakau%2BxL7rnv9fPTx3WkiXQM3sgEeIFW6YYRoqh9gjQC5SITvOe88XZp2%2FsVSiyTt9MuDDJXj3Hp5ijgFLx5KBLt0dUn3pPqqiTvBCwWe0Wv9q%2BESmXq9GEfpmvVJrIz9uAS30w3fE5A2Gz1dUhTBQW68HdfE0ywzjO%2FBmaII3S0%2F1g1YRp5H0le4clJbwpqji3D9g4MCQjz9Jg4d312M%2FfzkXNHl58aIsAjP%2FxFYOE4n4vivVLoTyISyT7xUe1%2BRztHM0lcZCxaSyXLyPRmRGnJW6cV0TTyD3HkTkfHszm3w%2FtE9%2FQhTE04RwJfvi2qTfw%2B4bwEFm4%2FAcp0CsOC61YwrsW5wgY6pgFMyPlB8p%2F5gDfZ%2BWB%2FN3Miz9F9agGwBQpgzba%2FMu6%2Ff0eKelPHcocguhhXNZC%2FK0qFqoWLok34PKWJsyWDOeQlJORnSSJMP1YDwRkDyle7HSA4XX2%2BzLwZWGOWctCKY5Vqt3EAbsr0ESzKAzbSq%2FX0U5NxT3Qb9gnikBd0tPLZ%2BsJjEk%2FwJpj%2BH6grk2ZnRI490SlpMXEv2P2btsN4CjVX4JAOKZ6w&X-Amz-Signature=5351f2e2c16d1618e6f2eeeff888bc60ea507f6bad32b6a20b0332b44bdb0637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJORCE4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFJF6Um4cto0u59D6KkVnDZ%2BuG5U5JBLqjgXhCwF0GuWAiBxGcVg1CHxxFyvp1aQVSzelaAdAt%2FmBXg%2BZAQYft50ICr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMKDjFOG0j7x1qZ6RPKtwD7Zoga0%2F68D3LVbn7iS8iTblLgB01OZHITwtFz3uPpJvf0p2qe%2Fj1maDnz0JmJgNM4VivC2sSHYpHtmlu7ncCUFdIxdWjxqYyupa9GS%2FWcoyDWbmPsYXXq5nTdTX77AgKdODzF29UafWMRqQUn%2BDmy0omGaJZ9nGDeYLrVYmm0cPBRg2zCiyn1O%2BVnHClHnzXKZJ5riD8%2BPWiRcNPzQwmsK5lUBBr00sDTObjlgP4haoHWzITFulqIMeScuQjiOotclnucgzNyMXmolu95rSB%2FlcjE6qOBFsnUvF%2BAakau%2BxL7rnv9fPTx3WkiXQM3sgEeIFW6YYRoqh9gjQC5SITvOe88XZp2%2FsVSiyTt9MuDDJXj3Hp5ijgFLx5KBLt0dUn3pPqqiTvBCwWe0Wv9q%2BESmXq9GEfpmvVJrIz9uAS30w3fE5A2Gz1dUhTBQW68HdfE0ywzjO%2FBmaII3S0%2F1g1YRp5H0le4clJbwpqji3D9g4MCQjz9Jg4d312M%2FfzkXNHl58aIsAjP%2FxFYOE4n4vivVLoTyISyT7xUe1%2BRztHM0lcZCxaSyXLyPRmRGnJW6cV0TTyD3HkTkfHszm3w%2FtE9%2FQhTE04RwJfvi2qTfw%2B4bwEFm4%2FAcp0CsOC61YwrsW5wgY6pgFMyPlB8p%2F5gDfZ%2BWB%2FN3Miz9F9agGwBQpgzba%2FMu6%2Ff0eKelPHcocguhhXNZC%2FK0qFqoWLok34PKWJsyWDOeQlJORnSSJMP1YDwRkDyle7HSA4XX2%2BzLwZWGOWctCKY5Vqt3EAbsr0ESzKAzbSq%2FX0U5NxT3Qb9gnikBd0tPLZ%2BsJjEk%2FwJpj%2BH6grk2ZnRI490SlpMXEv2P2btsN4CjVX4JAOKZ6w&X-Amz-Signature=da7d2afe3754548b235dee274e4f96391e618b6171ed73c45929af8965ac8a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJORCE4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFJF6Um4cto0u59D6KkVnDZ%2BuG5U5JBLqjgXhCwF0GuWAiBxGcVg1CHxxFyvp1aQVSzelaAdAt%2FmBXg%2BZAQYft50ICr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMKDjFOG0j7x1qZ6RPKtwD7Zoga0%2F68D3LVbn7iS8iTblLgB01OZHITwtFz3uPpJvf0p2qe%2Fj1maDnz0JmJgNM4VivC2sSHYpHtmlu7ncCUFdIxdWjxqYyupa9GS%2FWcoyDWbmPsYXXq5nTdTX77AgKdODzF29UafWMRqQUn%2BDmy0omGaJZ9nGDeYLrVYmm0cPBRg2zCiyn1O%2BVnHClHnzXKZJ5riD8%2BPWiRcNPzQwmsK5lUBBr00sDTObjlgP4haoHWzITFulqIMeScuQjiOotclnucgzNyMXmolu95rSB%2FlcjE6qOBFsnUvF%2BAakau%2BxL7rnv9fPTx3WkiXQM3sgEeIFW6YYRoqh9gjQC5SITvOe88XZp2%2FsVSiyTt9MuDDJXj3Hp5ijgFLx5KBLt0dUn3pPqqiTvBCwWe0Wv9q%2BESmXq9GEfpmvVJrIz9uAS30w3fE5A2Gz1dUhTBQW68HdfE0ywzjO%2FBmaII3S0%2F1g1YRp5H0le4clJbwpqji3D9g4MCQjz9Jg4d312M%2FfzkXNHl58aIsAjP%2FxFYOE4n4vivVLoTyISyT7xUe1%2BRztHM0lcZCxaSyXLyPRmRGnJW6cV0TTyD3HkTkfHszm3w%2FtE9%2FQhTE04RwJfvi2qTfw%2B4bwEFm4%2FAcp0CsOC61YwrsW5wgY6pgFMyPlB8p%2F5gDfZ%2BWB%2FN3Miz9F9agGwBQpgzba%2FMu6%2Ff0eKelPHcocguhhXNZC%2FK0qFqoWLok34PKWJsyWDOeQlJORnSSJMP1YDwRkDyle7HSA4XX2%2BzLwZWGOWctCKY5Vqt3EAbsr0ESzKAzbSq%2FX0U5NxT3Qb9gnikBd0tPLZ%2BsJjEk%2FwJpj%2BH6grk2ZnRI490SlpMXEv2P2btsN4CjVX4JAOKZ6w&X-Amz-Signature=a43da708b97e4f78c1fc152cba3674aadb38d15f56c6482e56b7ad897a1602c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

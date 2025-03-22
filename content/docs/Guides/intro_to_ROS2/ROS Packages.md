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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKXWNM7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD89UUNtyg8ftUjBgjxpaTBTcWRYPx6pZja1tvopjKybwIhALspRIXiYXGlyrm0AsbYm4LS7t93Bpr8DLjq3c3yBbJ6KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv4YyPhGn5d1zAFbwq3AP2jz%2FLyFgIO6DEy5b2i%2F3u0zxGP0urh1Ob73r0r2cG3wb7yNbZtQ5teulFji69%2BBXmSwgo1J5z35oqZcFONkMc78NrOhkEVhqoCQgZvEChc7OfvZIlZsQyyUp3uVOWoOKO1nFlXcuy78CwUTf9JoNOMJY4eAY53wjGR7Ua0GUESFPvEZ7SX27XtEdtMSfM2L0aN0wlyQydcgMe8QVBHkyiEjWaDCuirGsCqk8gp%2Bgiq%2FvMfodMyXxQRfS3XcxVo2Yorx8xuaxVULpPQS9Cmhg7mTMtoGchiQI81N4ak9v68f5phQorg1H6k19Tk8TKvQgyF9ije%2FigqVwOSpfQGsn2aXkJDvJSf5NTCpXAhn8hKEQDqWpIbGVQ2DryYh3NKtwDulIfwseL01lN5XPnxCfqV4uA4j9%2Bbv5Irl7th77lZYkSXU2cIdBqkrySS5lh0ZlRJMGEY4KGg0G0rGxfMJ4vNB0fMqBAKniR3q8nkYxfUDFvoJ4fBWn6ffeSe8XyNuZ19%2FeGSfSOGAJu06WfCzMitlO6oAZX8Pe4B9XM7kqm43BzbMxQKGWX16LC8kurJAvS2yeE11eE4di8dSNAaOkdelLPUwzZxaUP0j5s310KklSTj1IPIbCbyfEzcTCP6fi%2BBjqkAWeJfIIRmmjQF7SN%2BOsZr2ZKFKPW29eqM351b94HkLtCqLgvZVf6i3t8xuZrubLk99ykv4ik9Tl9phTpmHTSpXqZ9eWwSyAb8hDur7myC5CEMRaAmP7Okl4cpPBnz1p7yg9FBhr9IDkwG5W94sf5cFT16I6nooS2yvXXNf8jxrqWvPWmmEjDLToAaveMQnCZIAQ8b56f5%2BEOLqRYOy%2FJ7a2UuLnj&X-Amz-Signature=ef146e45c4857a999731dc370bc0cdd59a4e992ffea3503304f70cfab2de5339&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKXWNM7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD89UUNtyg8ftUjBgjxpaTBTcWRYPx6pZja1tvopjKybwIhALspRIXiYXGlyrm0AsbYm4LS7t93Bpr8DLjq3c3yBbJ6KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv4YyPhGn5d1zAFbwq3AP2jz%2FLyFgIO6DEy5b2i%2F3u0zxGP0urh1Ob73r0r2cG3wb7yNbZtQ5teulFji69%2BBXmSwgo1J5z35oqZcFONkMc78NrOhkEVhqoCQgZvEChc7OfvZIlZsQyyUp3uVOWoOKO1nFlXcuy78CwUTf9JoNOMJY4eAY53wjGR7Ua0GUESFPvEZ7SX27XtEdtMSfM2L0aN0wlyQydcgMe8QVBHkyiEjWaDCuirGsCqk8gp%2Bgiq%2FvMfodMyXxQRfS3XcxVo2Yorx8xuaxVULpPQS9Cmhg7mTMtoGchiQI81N4ak9v68f5phQorg1H6k19Tk8TKvQgyF9ije%2FigqVwOSpfQGsn2aXkJDvJSf5NTCpXAhn8hKEQDqWpIbGVQ2DryYh3NKtwDulIfwseL01lN5XPnxCfqV4uA4j9%2Bbv5Irl7th77lZYkSXU2cIdBqkrySS5lh0ZlRJMGEY4KGg0G0rGxfMJ4vNB0fMqBAKniR3q8nkYxfUDFvoJ4fBWn6ffeSe8XyNuZ19%2FeGSfSOGAJu06WfCzMitlO6oAZX8Pe4B9XM7kqm43BzbMxQKGWX16LC8kurJAvS2yeE11eE4di8dSNAaOkdelLPUwzZxaUP0j5s310KklSTj1IPIbCbyfEzcTCP6fi%2BBjqkAWeJfIIRmmjQF7SN%2BOsZr2ZKFKPW29eqM351b94HkLtCqLgvZVf6i3t8xuZrubLk99ykv4ik9Tl9phTpmHTSpXqZ9eWwSyAb8hDur7myC5CEMRaAmP7Okl4cpPBnz1p7yg9FBhr9IDkwG5W94sf5cFT16I6nooS2yvXXNf8jxrqWvPWmmEjDLToAaveMQnCZIAQ8b56f5%2BEOLqRYOy%2FJ7a2UuLnj&X-Amz-Signature=617d0a8b9e73878374f7d5b97d0e2456d48dda9810492b3c668f168227433fea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKXWNM7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD89UUNtyg8ftUjBgjxpaTBTcWRYPx6pZja1tvopjKybwIhALspRIXiYXGlyrm0AsbYm4LS7t93Bpr8DLjq3c3yBbJ6KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv4YyPhGn5d1zAFbwq3AP2jz%2FLyFgIO6DEy5b2i%2F3u0zxGP0urh1Ob73r0r2cG3wb7yNbZtQ5teulFji69%2BBXmSwgo1J5z35oqZcFONkMc78NrOhkEVhqoCQgZvEChc7OfvZIlZsQyyUp3uVOWoOKO1nFlXcuy78CwUTf9JoNOMJY4eAY53wjGR7Ua0GUESFPvEZ7SX27XtEdtMSfM2L0aN0wlyQydcgMe8QVBHkyiEjWaDCuirGsCqk8gp%2Bgiq%2FvMfodMyXxQRfS3XcxVo2Yorx8xuaxVULpPQS9Cmhg7mTMtoGchiQI81N4ak9v68f5phQorg1H6k19Tk8TKvQgyF9ije%2FigqVwOSpfQGsn2aXkJDvJSf5NTCpXAhn8hKEQDqWpIbGVQ2DryYh3NKtwDulIfwseL01lN5XPnxCfqV4uA4j9%2Bbv5Irl7th77lZYkSXU2cIdBqkrySS5lh0ZlRJMGEY4KGg0G0rGxfMJ4vNB0fMqBAKniR3q8nkYxfUDFvoJ4fBWn6ffeSe8XyNuZ19%2FeGSfSOGAJu06WfCzMitlO6oAZX8Pe4B9XM7kqm43BzbMxQKGWX16LC8kurJAvS2yeE11eE4di8dSNAaOkdelLPUwzZxaUP0j5s310KklSTj1IPIbCbyfEzcTCP6fi%2BBjqkAWeJfIIRmmjQF7SN%2BOsZr2ZKFKPW29eqM351b94HkLtCqLgvZVf6i3t8xuZrubLk99ykv4ik9Tl9phTpmHTSpXqZ9eWwSyAb8hDur7myC5CEMRaAmP7Okl4cpPBnz1p7yg9FBhr9IDkwG5W94sf5cFT16I6nooS2yvXXNf8jxrqWvPWmmEjDLToAaveMQnCZIAQ8b56f5%2BEOLqRYOy%2FJ7a2UuLnj&X-Amz-Signature=ed0f7a15a23296608b34e79b30a767bce1f297d2d5b0a8d1b270cc9f62ebca02&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKXWNM7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD89UUNtyg8ftUjBgjxpaTBTcWRYPx6pZja1tvopjKybwIhALspRIXiYXGlyrm0AsbYm4LS7t93Bpr8DLjq3c3yBbJ6KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv4YyPhGn5d1zAFbwq3AP2jz%2FLyFgIO6DEy5b2i%2F3u0zxGP0urh1Ob73r0r2cG3wb7yNbZtQ5teulFji69%2BBXmSwgo1J5z35oqZcFONkMc78NrOhkEVhqoCQgZvEChc7OfvZIlZsQyyUp3uVOWoOKO1nFlXcuy78CwUTf9JoNOMJY4eAY53wjGR7Ua0GUESFPvEZ7SX27XtEdtMSfM2L0aN0wlyQydcgMe8QVBHkyiEjWaDCuirGsCqk8gp%2Bgiq%2FvMfodMyXxQRfS3XcxVo2Yorx8xuaxVULpPQS9Cmhg7mTMtoGchiQI81N4ak9v68f5phQorg1H6k19Tk8TKvQgyF9ije%2FigqVwOSpfQGsn2aXkJDvJSf5NTCpXAhn8hKEQDqWpIbGVQ2DryYh3NKtwDulIfwseL01lN5XPnxCfqV4uA4j9%2Bbv5Irl7th77lZYkSXU2cIdBqkrySS5lh0ZlRJMGEY4KGg0G0rGxfMJ4vNB0fMqBAKniR3q8nkYxfUDFvoJ4fBWn6ffeSe8XyNuZ19%2FeGSfSOGAJu06WfCzMitlO6oAZX8Pe4B9XM7kqm43BzbMxQKGWX16LC8kurJAvS2yeE11eE4di8dSNAaOkdelLPUwzZxaUP0j5s310KklSTj1IPIbCbyfEzcTCP6fi%2BBjqkAWeJfIIRmmjQF7SN%2BOsZr2ZKFKPW29eqM351b94HkLtCqLgvZVf6i3t8xuZrubLk99ykv4ik9Tl9phTpmHTSpXqZ9eWwSyAb8hDur7myC5CEMRaAmP7Okl4cpPBnz1p7yg9FBhr9IDkwG5W94sf5cFT16I6nooS2yvXXNf8jxrqWvPWmmEjDLToAaveMQnCZIAQ8b56f5%2BEOLqRYOy%2FJ7a2UuLnj&X-Amz-Signature=5d96c28a91666c775e9625ac8dc1724b7fb40406b63ae3363c9debb3c65c325b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKXWNM7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD89UUNtyg8ftUjBgjxpaTBTcWRYPx6pZja1tvopjKybwIhALspRIXiYXGlyrm0AsbYm4LS7t93Bpr8DLjq3c3yBbJ6KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv4YyPhGn5d1zAFbwq3AP2jz%2FLyFgIO6DEy5b2i%2F3u0zxGP0urh1Ob73r0r2cG3wb7yNbZtQ5teulFji69%2BBXmSwgo1J5z35oqZcFONkMc78NrOhkEVhqoCQgZvEChc7OfvZIlZsQyyUp3uVOWoOKO1nFlXcuy78CwUTf9JoNOMJY4eAY53wjGR7Ua0GUESFPvEZ7SX27XtEdtMSfM2L0aN0wlyQydcgMe8QVBHkyiEjWaDCuirGsCqk8gp%2Bgiq%2FvMfodMyXxQRfS3XcxVo2Yorx8xuaxVULpPQS9Cmhg7mTMtoGchiQI81N4ak9v68f5phQorg1H6k19Tk8TKvQgyF9ije%2FigqVwOSpfQGsn2aXkJDvJSf5NTCpXAhn8hKEQDqWpIbGVQ2DryYh3NKtwDulIfwseL01lN5XPnxCfqV4uA4j9%2Bbv5Irl7th77lZYkSXU2cIdBqkrySS5lh0ZlRJMGEY4KGg0G0rGxfMJ4vNB0fMqBAKniR3q8nkYxfUDFvoJ4fBWn6ffeSe8XyNuZ19%2FeGSfSOGAJu06WfCzMitlO6oAZX8Pe4B9XM7kqm43BzbMxQKGWX16LC8kurJAvS2yeE11eE4di8dSNAaOkdelLPUwzZxaUP0j5s310KklSTj1IPIbCbyfEzcTCP6fi%2BBjqkAWeJfIIRmmjQF7SN%2BOsZr2ZKFKPW29eqM351b94HkLtCqLgvZVf6i3t8xuZrubLk99ykv4ik9Tl9phTpmHTSpXqZ9eWwSyAb8hDur7myC5CEMRaAmP7Okl4cpPBnz1p7yg9FBhr9IDkwG5W94sf5cFT16I6nooS2yvXXNf8jxrqWvPWmmEjDLToAaveMQnCZIAQ8b56f5%2BEOLqRYOy%2FJ7a2UuLnj&X-Amz-Signature=db7ef6df2c68b85f89b975516056a91aa1056e6e8dc373dcedd82f2595a2d91f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKXWNM7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD89UUNtyg8ftUjBgjxpaTBTcWRYPx6pZja1tvopjKybwIhALspRIXiYXGlyrm0AsbYm4LS7t93Bpr8DLjq3c3yBbJ6KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv4YyPhGn5d1zAFbwq3AP2jz%2FLyFgIO6DEy5b2i%2F3u0zxGP0urh1Ob73r0r2cG3wb7yNbZtQ5teulFji69%2BBXmSwgo1J5z35oqZcFONkMc78NrOhkEVhqoCQgZvEChc7OfvZIlZsQyyUp3uVOWoOKO1nFlXcuy78CwUTf9JoNOMJY4eAY53wjGR7Ua0GUESFPvEZ7SX27XtEdtMSfM2L0aN0wlyQydcgMe8QVBHkyiEjWaDCuirGsCqk8gp%2Bgiq%2FvMfodMyXxQRfS3XcxVo2Yorx8xuaxVULpPQS9Cmhg7mTMtoGchiQI81N4ak9v68f5phQorg1H6k19Tk8TKvQgyF9ije%2FigqVwOSpfQGsn2aXkJDvJSf5NTCpXAhn8hKEQDqWpIbGVQ2DryYh3NKtwDulIfwseL01lN5XPnxCfqV4uA4j9%2Bbv5Irl7th77lZYkSXU2cIdBqkrySS5lh0ZlRJMGEY4KGg0G0rGxfMJ4vNB0fMqBAKniR3q8nkYxfUDFvoJ4fBWn6ffeSe8XyNuZ19%2FeGSfSOGAJu06WfCzMitlO6oAZX8Pe4B9XM7kqm43BzbMxQKGWX16LC8kurJAvS2yeE11eE4di8dSNAaOkdelLPUwzZxaUP0j5s310KklSTj1IPIbCbyfEzcTCP6fi%2BBjqkAWeJfIIRmmjQF7SN%2BOsZr2ZKFKPW29eqM351b94HkLtCqLgvZVf6i3t8xuZrubLk99ykv4ik9Tl9phTpmHTSpXqZ9eWwSyAb8hDur7myC5CEMRaAmP7Okl4cpPBnz1p7yg9FBhr9IDkwG5W94sf5cFT16I6nooS2yvXXNf8jxrqWvPWmmEjDLToAaveMQnCZIAQ8b56f5%2BEOLqRYOy%2FJ7a2UuLnj&X-Amz-Signature=0f4f6e497d0d8768d235b420958e1785719031ce8087bd249c1799aa6ddb2658&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKXWNM7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD89UUNtyg8ftUjBgjxpaTBTcWRYPx6pZja1tvopjKybwIhALspRIXiYXGlyrm0AsbYm4LS7t93Bpr8DLjq3c3yBbJ6KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv4YyPhGn5d1zAFbwq3AP2jz%2FLyFgIO6DEy5b2i%2F3u0zxGP0urh1Ob73r0r2cG3wb7yNbZtQ5teulFji69%2BBXmSwgo1J5z35oqZcFONkMc78NrOhkEVhqoCQgZvEChc7OfvZIlZsQyyUp3uVOWoOKO1nFlXcuy78CwUTf9JoNOMJY4eAY53wjGR7Ua0GUESFPvEZ7SX27XtEdtMSfM2L0aN0wlyQydcgMe8QVBHkyiEjWaDCuirGsCqk8gp%2Bgiq%2FvMfodMyXxQRfS3XcxVo2Yorx8xuaxVULpPQS9Cmhg7mTMtoGchiQI81N4ak9v68f5phQorg1H6k19Tk8TKvQgyF9ije%2FigqVwOSpfQGsn2aXkJDvJSf5NTCpXAhn8hKEQDqWpIbGVQ2DryYh3NKtwDulIfwseL01lN5XPnxCfqV4uA4j9%2Bbv5Irl7th77lZYkSXU2cIdBqkrySS5lh0ZlRJMGEY4KGg0G0rGxfMJ4vNB0fMqBAKniR3q8nkYxfUDFvoJ4fBWn6ffeSe8XyNuZ19%2FeGSfSOGAJu06WfCzMitlO6oAZX8Pe4B9XM7kqm43BzbMxQKGWX16LC8kurJAvS2yeE11eE4di8dSNAaOkdelLPUwzZxaUP0j5s310KklSTj1IPIbCbyfEzcTCP6fi%2BBjqkAWeJfIIRmmjQF7SN%2BOsZr2ZKFKPW29eqM351b94HkLtCqLgvZVf6i3t8xuZrubLk99ykv4ik9Tl9phTpmHTSpXqZ9eWwSyAb8hDur7myC5CEMRaAmP7Okl4cpPBnz1p7yg9FBhr9IDkwG5W94sf5cFT16I6nooS2yvXXNf8jxrqWvPWmmEjDLToAaveMQnCZIAQ8b56f5%2BEOLqRYOy%2FJ7a2UuLnj&X-Amz-Signature=3c4f7b2c0c74a04e0452db59e5f3320f21486fcfdb5a3986790b928767d1cf9f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

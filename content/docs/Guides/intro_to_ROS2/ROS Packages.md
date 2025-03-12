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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEGOKML%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAj3h2uBnuKgc%2BZTWMkIKsCe3uZ68nUmlS9PNJAzj%2BJGAiBnJTfOjRbfiUwr2ZdEMq6NwPdyjPGaGj0hhwjF9a5FXCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxW94gI6e5oXXkdeKtwDdVUYPA7ZDeTa%2BFCdCFeSHiLzTpk%2Fqna6kU02Gq%2FE%2FDTn4xvc63vEU5WGsFpY%2BCtIEWJ3J5kApokg9j%2Bf4%2BhTmlMIZahlAFzgq5XjgVvlMf2%2Bs%2FOAR5Q9R0fJZIjMAOKN%2BzC5KwK903FJcTvo9v8kiJ5qRgmS8SGerPGO8YEWRxm3nuhhASBP49%2F46qCrP6P%2B1bdV64OnmwuriH6s2WthYO%2Bwrqd51L%2BXKaAWLZD1ouMNC%2Fle0snGz5OvcWCIdSCunihpQXUpBROnV8i6zYwI%2BH1nHEIC3%2FXzOtUYL%2Frpa7koWqhF7H2w2nfS%2FfoWzYMsGlR6IZSOvfl7DDN1z2G91qqMfQ84JNJUAeJfQKX8SH71jJfUBbLipoNxFCrMVsG5GgPJCCxQ%2F36TmqnOPvUDub6hzkAf7OhtNqCL2xQM6uGPXwxOBCpRN%2BksAe7AimeKWVCT9DOc4OKHxxxb3n4aqCGbi53tY5qxeVjLFKk5Xu1keWDebJeCb4k3Sg6Vd%2FctKCYZMTebIwtSH76x9le4eDRap0989B5eWKC8fbL%2FXmfYPd%2FiWo89jaXXbwLpNSWB8gJSBjWhGJjq28bA6cN9YnEm9Aho5fW6s3Dw4rJbRvbOs5ziOue0cxgQawwwheHGvgY6pgGpi%2BxBsNzEGmY7np8PNKoSc%2BeJ5QSETBxFnU8nQBCDG8kvEYgwtGCtZvrIQnnk9CXbLWzuJTuvcpcME3dUqiPVi1x3umMwioxhvek2Ho63ibvJPwtj86A3c7TH2Mbt7SMoqdSdwoTOwVN1jW0bCSHnKgeAxaskemmnsm0VHe7SIzSsYRUlW%2F4dqCRGlx0hyzCijTdRayvnh9O8zdSXZEXWXYYOoeib&X-Amz-Signature=960996ba5512fa79c650415fe5d9b36d4105f5f44acd36b5ded55964fab726ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEGOKML%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAj3h2uBnuKgc%2BZTWMkIKsCe3uZ68nUmlS9PNJAzj%2BJGAiBnJTfOjRbfiUwr2ZdEMq6NwPdyjPGaGj0hhwjF9a5FXCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxW94gI6e5oXXkdeKtwDdVUYPA7ZDeTa%2BFCdCFeSHiLzTpk%2Fqna6kU02Gq%2FE%2FDTn4xvc63vEU5WGsFpY%2BCtIEWJ3J5kApokg9j%2Bf4%2BhTmlMIZahlAFzgq5XjgVvlMf2%2Bs%2FOAR5Q9R0fJZIjMAOKN%2BzC5KwK903FJcTvo9v8kiJ5qRgmS8SGerPGO8YEWRxm3nuhhASBP49%2F46qCrP6P%2B1bdV64OnmwuriH6s2WthYO%2Bwrqd51L%2BXKaAWLZD1ouMNC%2Fle0snGz5OvcWCIdSCunihpQXUpBROnV8i6zYwI%2BH1nHEIC3%2FXzOtUYL%2Frpa7koWqhF7H2w2nfS%2FfoWzYMsGlR6IZSOvfl7DDN1z2G91qqMfQ84JNJUAeJfQKX8SH71jJfUBbLipoNxFCrMVsG5GgPJCCxQ%2F36TmqnOPvUDub6hzkAf7OhtNqCL2xQM6uGPXwxOBCpRN%2BksAe7AimeKWVCT9DOc4OKHxxxb3n4aqCGbi53tY5qxeVjLFKk5Xu1keWDebJeCb4k3Sg6Vd%2FctKCYZMTebIwtSH76x9le4eDRap0989B5eWKC8fbL%2FXmfYPd%2FiWo89jaXXbwLpNSWB8gJSBjWhGJjq28bA6cN9YnEm9Aho5fW6s3Dw4rJbRvbOs5ziOue0cxgQawwwheHGvgY6pgGpi%2BxBsNzEGmY7np8PNKoSc%2BeJ5QSETBxFnU8nQBCDG8kvEYgwtGCtZvrIQnnk9CXbLWzuJTuvcpcME3dUqiPVi1x3umMwioxhvek2Ho63ibvJPwtj86A3c7TH2Mbt7SMoqdSdwoTOwVN1jW0bCSHnKgeAxaskemmnsm0VHe7SIzSsYRUlW%2F4dqCRGlx0hyzCijTdRayvnh9O8zdSXZEXWXYYOoeib&X-Amz-Signature=117fb006d3ba62db62c2acc85eef87988e8cccfc7de612ab2fc496dde468187f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEGOKML%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAj3h2uBnuKgc%2BZTWMkIKsCe3uZ68nUmlS9PNJAzj%2BJGAiBnJTfOjRbfiUwr2ZdEMq6NwPdyjPGaGj0hhwjF9a5FXCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxW94gI6e5oXXkdeKtwDdVUYPA7ZDeTa%2BFCdCFeSHiLzTpk%2Fqna6kU02Gq%2FE%2FDTn4xvc63vEU5WGsFpY%2BCtIEWJ3J5kApokg9j%2Bf4%2BhTmlMIZahlAFzgq5XjgVvlMf2%2Bs%2FOAR5Q9R0fJZIjMAOKN%2BzC5KwK903FJcTvo9v8kiJ5qRgmS8SGerPGO8YEWRxm3nuhhASBP49%2F46qCrP6P%2B1bdV64OnmwuriH6s2WthYO%2Bwrqd51L%2BXKaAWLZD1ouMNC%2Fle0snGz5OvcWCIdSCunihpQXUpBROnV8i6zYwI%2BH1nHEIC3%2FXzOtUYL%2Frpa7koWqhF7H2w2nfS%2FfoWzYMsGlR6IZSOvfl7DDN1z2G91qqMfQ84JNJUAeJfQKX8SH71jJfUBbLipoNxFCrMVsG5GgPJCCxQ%2F36TmqnOPvUDub6hzkAf7OhtNqCL2xQM6uGPXwxOBCpRN%2BksAe7AimeKWVCT9DOc4OKHxxxb3n4aqCGbi53tY5qxeVjLFKk5Xu1keWDebJeCb4k3Sg6Vd%2FctKCYZMTebIwtSH76x9le4eDRap0989B5eWKC8fbL%2FXmfYPd%2FiWo89jaXXbwLpNSWB8gJSBjWhGJjq28bA6cN9YnEm9Aho5fW6s3Dw4rJbRvbOs5ziOue0cxgQawwwheHGvgY6pgGpi%2BxBsNzEGmY7np8PNKoSc%2BeJ5QSETBxFnU8nQBCDG8kvEYgwtGCtZvrIQnnk9CXbLWzuJTuvcpcME3dUqiPVi1x3umMwioxhvek2Ho63ibvJPwtj86A3c7TH2Mbt7SMoqdSdwoTOwVN1jW0bCSHnKgeAxaskemmnsm0VHe7SIzSsYRUlW%2F4dqCRGlx0hyzCijTdRayvnh9O8zdSXZEXWXYYOoeib&X-Amz-Signature=276697c46a6def4d4664649184229560e79aeeda2109a9c6fffd34532bf0c3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEGOKML%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAj3h2uBnuKgc%2BZTWMkIKsCe3uZ68nUmlS9PNJAzj%2BJGAiBnJTfOjRbfiUwr2ZdEMq6NwPdyjPGaGj0hhwjF9a5FXCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxW94gI6e5oXXkdeKtwDdVUYPA7ZDeTa%2BFCdCFeSHiLzTpk%2Fqna6kU02Gq%2FE%2FDTn4xvc63vEU5WGsFpY%2BCtIEWJ3J5kApokg9j%2Bf4%2BhTmlMIZahlAFzgq5XjgVvlMf2%2Bs%2FOAR5Q9R0fJZIjMAOKN%2BzC5KwK903FJcTvo9v8kiJ5qRgmS8SGerPGO8YEWRxm3nuhhASBP49%2F46qCrP6P%2B1bdV64OnmwuriH6s2WthYO%2Bwrqd51L%2BXKaAWLZD1ouMNC%2Fle0snGz5OvcWCIdSCunihpQXUpBROnV8i6zYwI%2BH1nHEIC3%2FXzOtUYL%2Frpa7koWqhF7H2w2nfS%2FfoWzYMsGlR6IZSOvfl7DDN1z2G91qqMfQ84JNJUAeJfQKX8SH71jJfUBbLipoNxFCrMVsG5GgPJCCxQ%2F36TmqnOPvUDub6hzkAf7OhtNqCL2xQM6uGPXwxOBCpRN%2BksAe7AimeKWVCT9DOc4OKHxxxb3n4aqCGbi53tY5qxeVjLFKk5Xu1keWDebJeCb4k3Sg6Vd%2FctKCYZMTebIwtSH76x9le4eDRap0989B5eWKC8fbL%2FXmfYPd%2FiWo89jaXXbwLpNSWB8gJSBjWhGJjq28bA6cN9YnEm9Aho5fW6s3Dw4rJbRvbOs5ziOue0cxgQawwwheHGvgY6pgGpi%2BxBsNzEGmY7np8PNKoSc%2BeJ5QSETBxFnU8nQBCDG8kvEYgwtGCtZvrIQnnk9CXbLWzuJTuvcpcME3dUqiPVi1x3umMwioxhvek2Ho63ibvJPwtj86A3c7TH2Mbt7SMoqdSdwoTOwVN1jW0bCSHnKgeAxaskemmnsm0VHe7SIzSsYRUlW%2F4dqCRGlx0hyzCijTdRayvnh9O8zdSXZEXWXYYOoeib&X-Amz-Signature=5dc0c37a553ea1c1bd82cd3e6aac0268bd5ca057623379d98c47c38d0f7fb6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEGOKML%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAj3h2uBnuKgc%2BZTWMkIKsCe3uZ68nUmlS9PNJAzj%2BJGAiBnJTfOjRbfiUwr2ZdEMq6NwPdyjPGaGj0hhwjF9a5FXCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxW94gI6e5oXXkdeKtwDdVUYPA7ZDeTa%2BFCdCFeSHiLzTpk%2Fqna6kU02Gq%2FE%2FDTn4xvc63vEU5WGsFpY%2BCtIEWJ3J5kApokg9j%2Bf4%2BhTmlMIZahlAFzgq5XjgVvlMf2%2Bs%2FOAR5Q9R0fJZIjMAOKN%2BzC5KwK903FJcTvo9v8kiJ5qRgmS8SGerPGO8YEWRxm3nuhhASBP49%2F46qCrP6P%2B1bdV64OnmwuriH6s2WthYO%2Bwrqd51L%2BXKaAWLZD1ouMNC%2Fle0snGz5OvcWCIdSCunihpQXUpBROnV8i6zYwI%2BH1nHEIC3%2FXzOtUYL%2Frpa7koWqhF7H2w2nfS%2FfoWzYMsGlR6IZSOvfl7DDN1z2G91qqMfQ84JNJUAeJfQKX8SH71jJfUBbLipoNxFCrMVsG5GgPJCCxQ%2F36TmqnOPvUDub6hzkAf7OhtNqCL2xQM6uGPXwxOBCpRN%2BksAe7AimeKWVCT9DOc4OKHxxxb3n4aqCGbi53tY5qxeVjLFKk5Xu1keWDebJeCb4k3Sg6Vd%2FctKCYZMTebIwtSH76x9le4eDRap0989B5eWKC8fbL%2FXmfYPd%2FiWo89jaXXbwLpNSWB8gJSBjWhGJjq28bA6cN9YnEm9Aho5fW6s3Dw4rJbRvbOs5ziOue0cxgQawwwheHGvgY6pgGpi%2BxBsNzEGmY7np8PNKoSc%2BeJ5QSETBxFnU8nQBCDG8kvEYgwtGCtZvrIQnnk9CXbLWzuJTuvcpcME3dUqiPVi1x3umMwioxhvek2Ho63ibvJPwtj86A3c7TH2Mbt7SMoqdSdwoTOwVN1jW0bCSHnKgeAxaskemmnsm0VHe7SIzSsYRUlW%2F4dqCRGlx0hyzCijTdRayvnh9O8zdSXZEXWXYYOoeib&X-Amz-Signature=9a692ebfda0b03241702a865a0ddbaeade51305fb6805418fc19ec7434793035&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEGOKML%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAj3h2uBnuKgc%2BZTWMkIKsCe3uZ68nUmlS9PNJAzj%2BJGAiBnJTfOjRbfiUwr2ZdEMq6NwPdyjPGaGj0hhwjF9a5FXCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxW94gI6e5oXXkdeKtwDdVUYPA7ZDeTa%2BFCdCFeSHiLzTpk%2Fqna6kU02Gq%2FE%2FDTn4xvc63vEU5WGsFpY%2BCtIEWJ3J5kApokg9j%2Bf4%2BhTmlMIZahlAFzgq5XjgVvlMf2%2Bs%2FOAR5Q9R0fJZIjMAOKN%2BzC5KwK903FJcTvo9v8kiJ5qRgmS8SGerPGO8YEWRxm3nuhhASBP49%2F46qCrP6P%2B1bdV64OnmwuriH6s2WthYO%2Bwrqd51L%2BXKaAWLZD1ouMNC%2Fle0snGz5OvcWCIdSCunihpQXUpBROnV8i6zYwI%2BH1nHEIC3%2FXzOtUYL%2Frpa7koWqhF7H2w2nfS%2FfoWzYMsGlR6IZSOvfl7DDN1z2G91qqMfQ84JNJUAeJfQKX8SH71jJfUBbLipoNxFCrMVsG5GgPJCCxQ%2F36TmqnOPvUDub6hzkAf7OhtNqCL2xQM6uGPXwxOBCpRN%2BksAe7AimeKWVCT9DOc4OKHxxxb3n4aqCGbi53tY5qxeVjLFKk5Xu1keWDebJeCb4k3Sg6Vd%2FctKCYZMTebIwtSH76x9le4eDRap0989B5eWKC8fbL%2FXmfYPd%2FiWo89jaXXbwLpNSWB8gJSBjWhGJjq28bA6cN9YnEm9Aho5fW6s3Dw4rJbRvbOs5ziOue0cxgQawwwheHGvgY6pgGpi%2BxBsNzEGmY7np8PNKoSc%2BeJ5QSETBxFnU8nQBCDG8kvEYgwtGCtZvrIQnnk9CXbLWzuJTuvcpcME3dUqiPVi1x3umMwioxhvek2Ho63ibvJPwtj86A3c7TH2Mbt7SMoqdSdwoTOwVN1jW0bCSHnKgeAxaskemmnsm0VHe7SIzSsYRUlW%2F4dqCRGlx0hyzCijTdRayvnh9O8zdSXZEXWXYYOoeib&X-Amz-Signature=8ae41da2c228d1d4fb20e81afe90d32d57e761cdce9b720576fb5853de415cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEGOKML%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAj3h2uBnuKgc%2BZTWMkIKsCe3uZ68nUmlS9PNJAzj%2BJGAiBnJTfOjRbfiUwr2ZdEMq6NwPdyjPGaGj0hhwjF9a5FXCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxW94gI6e5oXXkdeKtwDdVUYPA7ZDeTa%2BFCdCFeSHiLzTpk%2Fqna6kU02Gq%2FE%2FDTn4xvc63vEU5WGsFpY%2BCtIEWJ3J5kApokg9j%2Bf4%2BhTmlMIZahlAFzgq5XjgVvlMf2%2Bs%2FOAR5Q9R0fJZIjMAOKN%2BzC5KwK903FJcTvo9v8kiJ5qRgmS8SGerPGO8YEWRxm3nuhhASBP49%2F46qCrP6P%2B1bdV64OnmwuriH6s2WthYO%2Bwrqd51L%2BXKaAWLZD1ouMNC%2Fle0snGz5OvcWCIdSCunihpQXUpBROnV8i6zYwI%2BH1nHEIC3%2FXzOtUYL%2Frpa7koWqhF7H2w2nfS%2FfoWzYMsGlR6IZSOvfl7DDN1z2G91qqMfQ84JNJUAeJfQKX8SH71jJfUBbLipoNxFCrMVsG5GgPJCCxQ%2F36TmqnOPvUDub6hzkAf7OhtNqCL2xQM6uGPXwxOBCpRN%2BksAe7AimeKWVCT9DOc4OKHxxxb3n4aqCGbi53tY5qxeVjLFKk5Xu1keWDebJeCb4k3Sg6Vd%2FctKCYZMTebIwtSH76x9le4eDRap0989B5eWKC8fbL%2FXmfYPd%2FiWo89jaXXbwLpNSWB8gJSBjWhGJjq28bA6cN9YnEm9Aho5fW6s3Dw4rJbRvbOs5ziOue0cxgQawwwheHGvgY6pgGpi%2BxBsNzEGmY7np8PNKoSc%2BeJ5QSETBxFnU8nQBCDG8kvEYgwtGCtZvrIQnnk9CXbLWzuJTuvcpcME3dUqiPVi1x3umMwioxhvek2Ho63ibvJPwtj86A3c7TH2Mbt7SMoqdSdwoTOwVN1jW0bCSHnKgeAxaskemmnsm0VHe7SIzSsYRUlW%2F4dqCRGlx0hyzCijTdRayvnh9O8zdSXZEXWXYYOoeib&X-Amz-Signature=5660dd9b5cc6159e09249263718709bbb9cf74ad7c665c324c5a2cc3b5da5f28&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

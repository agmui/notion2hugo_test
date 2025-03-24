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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVCD3KV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKco%2FMFn6ZbWa0%2Fv9cFreDyjwg08djDR0WDogAygLqygIhALFieMU3jZPvvdIOw1YS5Z3MX%2F8XZ50ITWLVgMMGwTXhKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIkTmqD8qE5Yel8W8q3AMeY1CGqF%2B2olBVMBMVOEn6r8ZocejgcF9dLAiQBpf%2Beh0e5HYdPYnTea3BrOkRQcLmvr03Inj%2FGHFiVcnzZVQpPzUbEc%2F8y%2FlRdHGIIWtghVxY9FueO0%2F438EC1Skel0grEkrNrPriA8mImeWgfsWsZPUagUPOPp6ym65rETP5pJs9zkCrfbjko6%2BXwQHymvMq%2FAcegJD9Vy5%2BsPeS9Nm2oNwjFsqUF3tSUjwJf8AFOPrBwpvU7YRCTnNySYCQNNfcI0ESm8wylfPM%2BJ4dhWubMRlxcIIyAAJBqUnOhxvUzLsbI6CLKHGpuVZO3a2TohvjGf9RLcnD%2BlDq9qRlZeAUFie1VfZWdmCMCZZ4%2BbQfqzacYI4NmeTo5sLqYl0DjMMDefUK25xsvJSXBZsPhYsWc%2BjlOQJ7wsqIUY%2F31oHdNYueH%2BEBDlfPw%2BZSg3pVOlgdCoyTuQpD5fhDAd95EMqW2Am0X2y1dAUOpvArRkoXEvuTgE2%2F5%2FKp8rhlfC07VQY4jh0wYYIQ%2Bgj6IIlHxEw74SFDGKDx%2FrZzTqHEeT3sWDQLaGlElejuiNG3NbeTJ0Sh%2F1zudQ3twSxY4FMNg5HRuwTcqs1WOZRExrh1hEbc0F1dob9Gq1FO9VHJxDDQ%2FYW%2FBjqkAfONl0z1u%2BkqsvPN8dPPiP%2FyDAhK9plwvEiQp6IRuFMz0Mo%2F16MC9wf2aUey6BBSoY8vZr0JE0AoZ4%2BGo2BJyBe9fp94WletuRbcqhvTNMk83arZVUFioWchmN98jCJzjByuLWa%2F1yys15yNnjr6NN0GHsq7TVN2jag%2Fq%2Fob0WovOjszb2i%2FYVHZZaEoMGqutvxS5gzZ6kMPqY3eljp765WJX9BS&X-Amz-Signature=6a4b73cd92d96188b430ad7fae5f7b654c3fbe81dc119f1a74ff273c8902d596&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVCD3KV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKco%2FMFn6ZbWa0%2Fv9cFreDyjwg08djDR0WDogAygLqygIhALFieMU3jZPvvdIOw1YS5Z3MX%2F8XZ50ITWLVgMMGwTXhKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIkTmqD8qE5Yel8W8q3AMeY1CGqF%2B2olBVMBMVOEn6r8ZocejgcF9dLAiQBpf%2Beh0e5HYdPYnTea3BrOkRQcLmvr03Inj%2FGHFiVcnzZVQpPzUbEc%2F8y%2FlRdHGIIWtghVxY9FueO0%2F438EC1Skel0grEkrNrPriA8mImeWgfsWsZPUagUPOPp6ym65rETP5pJs9zkCrfbjko6%2BXwQHymvMq%2FAcegJD9Vy5%2BsPeS9Nm2oNwjFsqUF3tSUjwJf8AFOPrBwpvU7YRCTnNySYCQNNfcI0ESm8wylfPM%2BJ4dhWubMRlxcIIyAAJBqUnOhxvUzLsbI6CLKHGpuVZO3a2TohvjGf9RLcnD%2BlDq9qRlZeAUFie1VfZWdmCMCZZ4%2BbQfqzacYI4NmeTo5sLqYl0DjMMDefUK25xsvJSXBZsPhYsWc%2BjlOQJ7wsqIUY%2F31oHdNYueH%2BEBDlfPw%2BZSg3pVOlgdCoyTuQpD5fhDAd95EMqW2Am0X2y1dAUOpvArRkoXEvuTgE2%2F5%2FKp8rhlfC07VQY4jh0wYYIQ%2Bgj6IIlHxEw74SFDGKDx%2FrZzTqHEeT3sWDQLaGlElejuiNG3NbeTJ0Sh%2F1zudQ3twSxY4FMNg5HRuwTcqs1WOZRExrh1hEbc0F1dob9Gq1FO9VHJxDDQ%2FYW%2FBjqkAfONl0z1u%2BkqsvPN8dPPiP%2FyDAhK9plwvEiQp6IRuFMz0Mo%2F16MC9wf2aUey6BBSoY8vZr0JE0AoZ4%2BGo2BJyBe9fp94WletuRbcqhvTNMk83arZVUFioWchmN98jCJzjByuLWa%2F1yys15yNnjr6NN0GHsq7TVN2jag%2Fq%2Fob0WovOjszb2i%2FYVHZZaEoMGqutvxS5gzZ6kMPqY3eljp765WJX9BS&X-Amz-Signature=9a731fda690243cb3a01b2adb3dbf17434fbf78b322b4d069e77b69e33ec883f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVCD3KV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKco%2FMFn6ZbWa0%2Fv9cFreDyjwg08djDR0WDogAygLqygIhALFieMU3jZPvvdIOw1YS5Z3MX%2F8XZ50ITWLVgMMGwTXhKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIkTmqD8qE5Yel8W8q3AMeY1CGqF%2B2olBVMBMVOEn6r8ZocejgcF9dLAiQBpf%2Beh0e5HYdPYnTea3BrOkRQcLmvr03Inj%2FGHFiVcnzZVQpPzUbEc%2F8y%2FlRdHGIIWtghVxY9FueO0%2F438EC1Skel0grEkrNrPriA8mImeWgfsWsZPUagUPOPp6ym65rETP5pJs9zkCrfbjko6%2BXwQHymvMq%2FAcegJD9Vy5%2BsPeS9Nm2oNwjFsqUF3tSUjwJf8AFOPrBwpvU7YRCTnNySYCQNNfcI0ESm8wylfPM%2BJ4dhWubMRlxcIIyAAJBqUnOhxvUzLsbI6CLKHGpuVZO3a2TohvjGf9RLcnD%2BlDq9qRlZeAUFie1VfZWdmCMCZZ4%2BbQfqzacYI4NmeTo5sLqYl0DjMMDefUK25xsvJSXBZsPhYsWc%2BjlOQJ7wsqIUY%2F31oHdNYueH%2BEBDlfPw%2BZSg3pVOlgdCoyTuQpD5fhDAd95EMqW2Am0X2y1dAUOpvArRkoXEvuTgE2%2F5%2FKp8rhlfC07VQY4jh0wYYIQ%2Bgj6IIlHxEw74SFDGKDx%2FrZzTqHEeT3sWDQLaGlElejuiNG3NbeTJ0Sh%2F1zudQ3twSxY4FMNg5HRuwTcqs1WOZRExrh1hEbc0F1dob9Gq1FO9VHJxDDQ%2FYW%2FBjqkAfONl0z1u%2BkqsvPN8dPPiP%2FyDAhK9plwvEiQp6IRuFMz0Mo%2F16MC9wf2aUey6BBSoY8vZr0JE0AoZ4%2BGo2BJyBe9fp94WletuRbcqhvTNMk83arZVUFioWchmN98jCJzjByuLWa%2F1yys15yNnjr6NN0GHsq7TVN2jag%2Fq%2Fob0WovOjszb2i%2FYVHZZaEoMGqutvxS5gzZ6kMPqY3eljp765WJX9BS&X-Amz-Signature=bc963e2f5dc805b365fa83ab327238ad7ef7685710829838a0c97067fddb7d35&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVCD3KV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKco%2FMFn6ZbWa0%2Fv9cFreDyjwg08djDR0WDogAygLqygIhALFieMU3jZPvvdIOw1YS5Z3MX%2F8XZ50ITWLVgMMGwTXhKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIkTmqD8qE5Yel8W8q3AMeY1CGqF%2B2olBVMBMVOEn6r8ZocejgcF9dLAiQBpf%2Beh0e5HYdPYnTea3BrOkRQcLmvr03Inj%2FGHFiVcnzZVQpPzUbEc%2F8y%2FlRdHGIIWtghVxY9FueO0%2F438EC1Skel0grEkrNrPriA8mImeWgfsWsZPUagUPOPp6ym65rETP5pJs9zkCrfbjko6%2BXwQHymvMq%2FAcegJD9Vy5%2BsPeS9Nm2oNwjFsqUF3tSUjwJf8AFOPrBwpvU7YRCTnNySYCQNNfcI0ESm8wylfPM%2BJ4dhWubMRlxcIIyAAJBqUnOhxvUzLsbI6CLKHGpuVZO3a2TohvjGf9RLcnD%2BlDq9qRlZeAUFie1VfZWdmCMCZZ4%2BbQfqzacYI4NmeTo5sLqYl0DjMMDefUK25xsvJSXBZsPhYsWc%2BjlOQJ7wsqIUY%2F31oHdNYueH%2BEBDlfPw%2BZSg3pVOlgdCoyTuQpD5fhDAd95EMqW2Am0X2y1dAUOpvArRkoXEvuTgE2%2F5%2FKp8rhlfC07VQY4jh0wYYIQ%2Bgj6IIlHxEw74SFDGKDx%2FrZzTqHEeT3sWDQLaGlElejuiNG3NbeTJ0Sh%2F1zudQ3twSxY4FMNg5HRuwTcqs1WOZRExrh1hEbc0F1dob9Gq1FO9VHJxDDQ%2FYW%2FBjqkAfONl0z1u%2BkqsvPN8dPPiP%2FyDAhK9plwvEiQp6IRuFMz0Mo%2F16MC9wf2aUey6BBSoY8vZr0JE0AoZ4%2BGo2BJyBe9fp94WletuRbcqhvTNMk83arZVUFioWchmN98jCJzjByuLWa%2F1yys15yNnjr6NN0GHsq7TVN2jag%2Fq%2Fob0WovOjszb2i%2FYVHZZaEoMGqutvxS5gzZ6kMPqY3eljp765WJX9BS&X-Amz-Signature=645764f3f637c32f67eede8e9a04add1af6f8478e54d0c09be71fe4d67b95fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVCD3KV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKco%2FMFn6ZbWa0%2Fv9cFreDyjwg08djDR0WDogAygLqygIhALFieMU3jZPvvdIOw1YS5Z3MX%2F8XZ50ITWLVgMMGwTXhKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIkTmqD8qE5Yel8W8q3AMeY1CGqF%2B2olBVMBMVOEn6r8ZocejgcF9dLAiQBpf%2Beh0e5HYdPYnTea3BrOkRQcLmvr03Inj%2FGHFiVcnzZVQpPzUbEc%2F8y%2FlRdHGIIWtghVxY9FueO0%2F438EC1Skel0grEkrNrPriA8mImeWgfsWsZPUagUPOPp6ym65rETP5pJs9zkCrfbjko6%2BXwQHymvMq%2FAcegJD9Vy5%2BsPeS9Nm2oNwjFsqUF3tSUjwJf8AFOPrBwpvU7YRCTnNySYCQNNfcI0ESm8wylfPM%2BJ4dhWubMRlxcIIyAAJBqUnOhxvUzLsbI6CLKHGpuVZO3a2TohvjGf9RLcnD%2BlDq9qRlZeAUFie1VfZWdmCMCZZ4%2BbQfqzacYI4NmeTo5sLqYl0DjMMDefUK25xsvJSXBZsPhYsWc%2BjlOQJ7wsqIUY%2F31oHdNYueH%2BEBDlfPw%2BZSg3pVOlgdCoyTuQpD5fhDAd95EMqW2Am0X2y1dAUOpvArRkoXEvuTgE2%2F5%2FKp8rhlfC07VQY4jh0wYYIQ%2Bgj6IIlHxEw74SFDGKDx%2FrZzTqHEeT3sWDQLaGlElejuiNG3NbeTJ0Sh%2F1zudQ3twSxY4FMNg5HRuwTcqs1WOZRExrh1hEbc0F1dob9Gq1FO9VHJxDDQ%2FYW%2FBjqkAfONl0z1u%2BkqsvPN8dPPiP%2FyDAhK9plwvEiQp6IRuFMz0Mo%2F16MC9wf2aUey6BBSoY8vZr0JE0AoZ4%2BGo2BJyBe9fp94WletuRbcqhvTNMk83arZVUFioWchmN98jCJzjByuLWa%2F1yys15yNnjr6NN0GHsq7TVN2jag%2Fq%2Fob0WovOjszb2i%2FYVHZZaEoMGqutvxS5gzZ6kMPqY3eljp765WJX9BS&X-Amz-Signature=7765b6fbef98e1c369a33b2f91ebe93ae76ad3bce12b597257fab179a2b68cef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVCD3KV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKco%2FMFn6ZbWa0%2Fv9cFreDyjwg08djDR0WDogAygLqygIhALFieMU3jZPvvdIOw1YS5Z3MX%2F8XZ50ITWLVgMMGwTXhKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIkTmqD8qE5Yel8W8q3AMeY1CGqF%2B2olBVMBMVOEn6r8ZocejgcF9dLAiQBpf%2Beh0e5HYdPYnTea3BrOkRQcLmvr03Inj%2FGHFiVcnzZVQpPzUbEc%2F8y%2FlRdHGIIWtghVxY9FueO0%2F438EC1Skel0grEkrNrPriA8mImeWgfsWsZPUagUPOPp6ym65rETP5pJs9zkCrfbjko6%2BXwQHymvMq%2FAcegJD9Vy5%2BsPeS9Nm2oNwjFsqUF3tSUjwJf8AFOPrBwpvU7YRCTnNySYCQNNfcI0ESm8wylfPM%2BJ4dhWubMRlxcIIyAAJBqUnOhxvUzLsbI6CLKHGpuVZO3a2TohvjGf9RLcnD%2BlDq9qRlZeAUFie1VfZWdmCMCZZ4%2BbQfqzacYI4NmeTo5sLqYl0DjMMDefUK25xsvJSXBZsPhYsWc%2BjlOQJ7wsqIUY%2F31oHdNYueH%2BEBDlfPw%2BZSg3pVOlgdCoyTuQpD5fhDAd95EMqW2Am0X2y1dAUOpvArRkoXEvuTgE2%2F5%2FKp8rhlfC07VQY4jh0wYYIQ%2Bgj6IIlHxEw74SFDGKDx%2FrZzTqHEeT3sWDQLaGlElejuiNG3NbeTJ0Sh%2F1zudQ3twSxY4FMNg5HRuwTcqs1WOZRExrh1hEbc0F1dob9Gq1FO9VHJxDDQ%2FYW%2FBjqkAfONl0z1u%2BkqsvPN8dPPiP%2FyDAhK9plwvEiQp6IRuFMz0Mo%2F16MC9wf2aUey6BBSoY8vZr0JE0AoZ4%2BGo2BJyBe9fp94WletuRbcqhvTNMk83arZVUFioWchmN98jCJzjByuLWa%2F1yys15yNnjr6NN0GHsq7TVN2jag%2Fq%2Fob0WovOjszb2i%2FYVHZZaEoMGqutvxS5gzZ6kMPqY3eljp765WJX9BS&X-Amz-Signature=fa8346be47791c2f9d402d7f1f21fc805a492c0a5dc110775b234fbb68369309&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVCD3KV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKco%2FMFn6ZbWa0%2Fv9cFreDyjwg08djDR0WDogAygLqygIhALFieMU3jZPvvdIOw1YS5Z3MX%2F8XZ50ITWLVgMMGwTXhKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIkTmqD8qE5Yel8W8q3AMeY1CGqF%2B2olBVMBMVOEn6r8ZocejgcF9dLAiQBpf%2Beh0e5HYdPYnTea3BrOkRQcLmvr03Inj%2FGHFiVcnzZVQpPzUbEc%2F8y%2FlRdHGIIWtghVxY9FueO0%2F438EC1Skel0grEkrNrPriA8mImeWgfsWsZPUagUPOPp6ym65rETP5pJs9zkCrfbjko6%2BXwQHymvMq%2FAcegJD9Vy5%2BsPeS9Nm2oNwjFsqUF3tSUjwJf8AFOPrBwpvU7YRCTnNySYCQNNfcI0ESm8wylfPM%2BJ4dhWubMRlxcIIyAAJBqUnOhxvUzLsbI6CLKHGpuVZO3a2TohvjGf9RLcnD%2BlDq9qRlZeAUFie1VfZWdmCMCZZ4%2BbQfqzacYI4NmeTo5sLqYl0DjMMDefUK25xsvJSXBZsPhYsWc%2BjlOQJ7wsqIUY%2F31oHdNYueH%2BEBDlfPw%2BZSg3pVOlgdCoyTuQpD5fhDAd95EMqW2Am0X2y1dAUOpvArRkoXEvuTgE2%2F5%2FKp8rhlfC07VQY4jh0wYYIQ%2Bgj6IIlHxEw74SFDGKDx%2FrZzTqHEeT3sWDQLaGlElejuiNG3NbeTJ0Sh%2F1zudQ3twSxY4FMNg5HRuwTcqs1WOZRExrh1hEbc0F1dob9Gq1FO9VHJxDDQ%2FYW%2FBjqkAfONl0z1u%2BkqsvPN8dPPiP%2FyDAhK9plwvEiQp6IRuFMz0Mo%2F16MC9wf2aUey6BBSoY8vZr0JE0AoZ4%2BGo2BJyBe9fp94WletuRbcqhvTNMk83arZVUFioWchmN98jCJzjByuLWa%2F1yys15yNnjr6NN0GHsq7TVN2jag%2Fq%2Fob0WovOjszb2i%2FYVHZZaEoMGqutvxS5gzZ6kMPqY3eljp765WJX9BS&X-Amz-Signature=3284bc0eb108d550fcd0e2dff5ae82be25b15e40ee40481cace9990ff2cd5046&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

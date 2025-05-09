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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQ6C5PF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7HOXIHOkHASmViiD%2FqNsaZ5cZChAO8%2FRSoSDFWhMV7wIgMgZtCGMTNFLI9k%2Bu0cyLeNd5Uj1Jaxyh6dq9kKDXKIcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4r3RoZu6x5B4ZXRCrcA0yA014TMSX5bU%2BZ%2BSODAcIM9nusjFQJ72rLIQelScEt%2FQlvv2nD8iThxI9%2BXO0FZzBpKt8kQ0HKrQLr1BFayYaePudyzWxZwZk%2BbpdM6Juvw%2FdIYA6NZx0pYYzEUEXbkhjvhDGL8zfRr0DuzxCPIfKmR1m0RJwLF6vw1zTxfG%2FTROGfbESMkocZrHSnDNRavBtBWsjkT66%2BmGUYsMPhAqE4dl%2BhixqbVHrNcDdCg9BtiVpQZDNjAeYBE%2B60pCngrRkRM%2F0Kgxx4CldcrUzSPBpZXifzQffzh%2BJ2Wc5Ra6ZFNsaq%2B%2FIqt%2FYeyvEaoB9Uwz%2FNkaasfk%2F70O30s4zKJyXv7WS0W2eQTo4NIlB4byKoI3L08JktXVtFF0AlPLILwDh8aQvtg2TzRs4RihZarE1uWxTIMsTUZQJZf%2BCkHPlJz9wL3bOObcSU%2FckWwd94jpjC9SbpOYX4tmC%2BnWSwxmmZtki2x2HnG63BlrwCeYPTTgDfYh5zIpxeO6MVv5vUkqBARQoVGd7SdT5TnmVQVITWp7m%2B%2FcMLia7RjyoO%2BfHzoIg6zkY8e9kiKZpfYbDumAqHn6nMNLn%2B4ifEs%2B8fokdTcJQarUELQARu7T001iK4dxpew%2BUnIpVJ1H7KMOLL9cAGOqUBKYy9qghJUUI0jPQ1%2FXKGiNvIUZVxHgzOvp1CHcQICsINN46InAJ65imaxwJL%2FtP7FIKfGLeep8wK0PFTJo0qjaC14IzEEH%2BBZE2BKvpARfMTRji84WgHWWXFiJWRrRSRlDdjy2%2B%2BfoK5tA2RHrMOOJ%2B5cO72PjJNljw96ujlakmhiZnJn1SYred7D%2Fe31cOuJUKFoZM%2BMvikVf94PqaFWFAmJJl%2B&X-Amz-Signature=b621ff00dde11f99db061ed306b0a3a8e59eb3b1696d7dfad26766d0422f368e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQ6C5PF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7HOXIHOkHASmViiD%2FqNsaZ5cZChAO8%2FRSoSDFWhMV7wIgMgZtCGMTNFLI9k%2Bu0cyLeNd5Uj1Jaxyh6dq9kKDXKIcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4r3RoZu6x5B4ZXRCrcA0yA014TMSX5bU%2BZ%2BSODAcIM9nusjFQJ72rLIQelScEt%2FQlvv2nD8iThxI9%2BXO0FZzBpKt8kQ0HKrQLr1BFayYaePudyzWxZwZk%2BbpdM6Juvw%2FdIYA6NZx0pYYzEUEXbkhjvhDGL8zfRr0DuzxCPIfKmR1m0RJwLF6vw1zTxfG%2FTROGfbESMkocZrHSnDNRavBtBWsjkT66%2BmGUYsMPhAqE4dl%2BhixqbVHrNcDdCg9BtiVpQZDNjAeYBE%2B60pCngrRkRM%2F0Kgxx4CldcrUzSPBpZXifzQffzh%2BJ2Wc5Ra6ZFNsaq%2B%2FIqt%2FYeyvEaoB9Uwz%2FNkaasfk%2F70O30s4zKJyXv7WS0W2eQTo4NIlB4byKoI3L08JktXVtFF0AlPLILwDh8aQvtg2TzRs4RihZarE1uWxTIMsTUZQJZf%2BCkHPlJz9wL3bOObcSU%2FckWwd94jpjC9SbpOYX4tmC%2BnWSwxmmZtki2x2HnG63BlrwCeYPTTgDfYh5zIpxeO6MVv5vUkqBARQoVGd7SdT5TnmVQVITWp7m%2B%2FcMLia7RjyoO%2BfHzoIg6zkY8e9kiKZpfYbDumAqHn6nMNLn%2B4ifEs%2B8fokdTcJQarUELQARu7T001iK4dxpew%2BUnIpVJ1H7KMOLL9cAGOqUBKYy9qghJUUI0jPQ1%2FXKGiNvIUZVxHgzOvp1CHcQICsINN46InAJ65imaxwJL%2FtP7FIKfGLeep8wK0PFTJo0qjaC14IzEEH%2BBZE2BKvpARfMTRji84WgHWWXFiJWRrRSRlDdjy2%2B%2BfoK5tA2RHrMOOJ%2B5cO72PjJNljw96ujlakmhiZnJn1SYred7D%2Fe31cOuJUKFoZM%2BMvikVf94PqaFWFAmJJl%2B&X-Amz-Signature=7c7dc9fdeeaba817d66bd1b064ad14c69ad8778f5cde1fd5739beb49ec103761&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQ6C5PF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7HOXIHOkHASmViiD%2FqNsaZ5cZChAO8%2FRSoSDFWhMV7wIgMgZtCGMTNFLI9k%2Bu0cyLeNd5Uj1Jaxyh6dq9kKDXKIcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4r3RoZu6x5B4ZXRCrcA0yA014TMSX5bU%2BZ%2BSODAcIM9nusjFQJ72rLIQelScEt%2FQlvv2nD8iThxI9%2BXO0FZzBpKt8kQ0HKrQLr1BFayYaePudyzWxZwZk%2BbpdM6Juvw%2FdIYA6NZx0pYYzEUEXbkhjvhDGL8zfRr0DuzxCPIfKmR1m0RJwLF6vw1zTxfG%2FTROGfbESMkocZrHSnDNRavBtBWsjkT66%2BmGUYsMPhAqE4dl%2BhixqbVHrNcDdCg9BtiVpQZDNjAeYBE%2B60pCngrRkRM%2F0Kgxx4CldcrUzSPBpZXifzQffzh%2BJ2Wc5Ra6ZFNsaq%2B%2FIqt%2FYeyvEaoB9Uwz%2FNkaasfk%2F70O30s4zKJyXv7WS0W2eQTo4NIlB4byKoI3L08JktXVtFF0AlPLILwDh8aQvtg2TzRs4RihZarE1uWxTIMsTUZQJZf%2BCkHPlJz9wL3bOObcSU%2FckWwd94jpjC9SbpOYX4tmC%2BnWSwxmmZtki2x2HnG63BlrwCeYPTTgDfYh5zIpxeO6MVv5vUkqBARQoVGd7SdT5TnmVQVITWp7m%2B%2FcMLia7RjyoO%2BfHzoIg6zkY8e9kiKZpfYbDumAqHn6nMNLn%2B4ifEs%2B8fokdTcJQarUELQARu7T001iK4dxpew%2BUnIpVJ1H7KMOLL9cAGOqUBKYy9qghJUUI0jPQ1%2FXKGiNvIUZVxHgzOvp1CHcQICsINN46InAJ65imaxwJL%2FtP7FIKfGLeep8wK0PFTJo0qjaC14IzEEH%2BBZE2BKvpARfMTRji84WgHWWXFiJWRrRSRlDdjy2%2B%2BfoK5tA2RHrMOOJ%2B5cO72PjJNljw96ujlakmhiZnJn1SYred7D%2Fe31cOuJUKFoZM%2BMvikVf94PqaFWFAmJJl%2B&X-Amz-Signature=6bfad0339d769287710f65f3472aff271e5586228ea97f8e475844f407582cac&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQ6C5PF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7HOXIHOkHASmViiD%2FqNsaZ5cZChAO8%2FRSoSDFWhMV7wIgMgZtCGMTNFLI9k%2Bu0cyLeNd5Uj1Jaxyh6dq9kKDXKIcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4r3RoZu6x5B4ZXRCrcA0yA014TMSX5bU%2BZ%2BSODAcIM9nusjFQJ72rLIQelScEt%2FQlvv2nD8iThxI9%2BXO0FZzBpKt8kQ0HKrQLr1BFayYaePudyzWxZwZk%2BbpdM6Juvw%2FdIYA6NZx0pYYzEUEXbkhjvhDGL8zfRr0DuzxCPIfKmR1m0RJwLF6vw1zTxfG%2FTROGfbESMkocZrHSnDNRavBtBWsjkT66%2BmGUYsMPhAqE4dl%2BhixqbVHrNcDdCg9BtiVpQZDNjAeYBE%2B60pCngrRkRM%2F0Kgxx4CldcrUzSPBpZXifzQffzh%2BJ2Wc5Ra6ZFNsaq%2B%2FIqt%2FYeyvEaoB9Uwz%2FNkaasfk%2F70O30s4zKJyXv7WS0W2eQTo4NIlB4byKoI3L08JktXVtFF0AlPLILwDh8aQvtg2TzRs4RihZarE1uWxTIMsTUZQJZf%2BCkHPlJz9wL3bOObcSU%2FckWwd94jpjC9SbpOYX4tmC%2BnWSwxmmZtki2x2HnG63BlrwCeYPTTgDfYh5zIpxeO6MVv5vUkqBARQoVGd7SdT5TnmVQVITWp7m%2B%2FcMLia7RjyoO%2BfHzoIg6zkY8e9kiKZpfYbDumAqHn6nMNLn%2B4ifEs%2B8fokdTcJQarUELQARu7T001iK4dxpew%2BUnIpVJ1H7KMOLL9cAGOqUBKYy9qghJUUI0jPQ1%2FXKGiNvIUZVxHgzOvp1CHcQICsINN46InAJ65imaxwJL%2FtP7FIKfGLeep8wK0PFTJo0qjaC14IzEEH%2BBZE2BKvpARfMTRji84WgHWWXFiJWRrRSRlDdjy2%2B%2BfoK5tA2RHrMOOJ%2B5cO72PjJNljw96ujlakmhiZnJn1SYred7D%2Fe31cOuJUKFoZM%2BMvikVf94PqaFWFAmJJl%2B&X-Amz-Signature=acfe2104ea756d94de774c81a11b9443175b042607b5a87b51bc8be94bc73b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQ6C5PF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7HOXIHOkHASmViiD%2FqNsaZ5cZChAO8%2FRSoSDFWhMV7wIgMgZtCGMTNFLI9k%2Bu0cyLeNd5Uj1Jaxyh6dq9kKDXKIcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4r3RoZu6x5B4ZXRCrcA0yA014TMSX5bU%2BZ%2BSODAcIM9nusjFQJ72rLIQelScEt%2FQlvv2nD8iThxI9%2BXO0FZzBpKt8kQ0HKrQLr1BFayYaePudyzWxZwZk%2BbpdM6Juvw%2FdIYA6NZx0pYYzEUEXbkhjvhDGL8zfRr0DuzxCPIfKmR1m0RJwLF6vw1zTxfG%2FTROGfbESMkocZrHSnDNRavBtBWsjkT66%2BmGUYsMPhAqE4dl%2BhixqbVHrNcDdCg9BtiVpQZDNjAeYBE%2B60pCngrRkRM%2F0Kgxx4CldcrUzSPBpZXifzQffzh%2BJ2Wc5Ra6ZFNsaq%2B%2FIqt%2FYeyvEaoB9Uwz%2FNkaasfk%2F70O30s4zKJyXv7WS0W2eQTo4NIlB4byKoI3L08JktXVtFF0AlPLILwDh8aQvtg2TzRs4RihZarE1uWxTIMsTUZQJZf%2BCkHPlJz9wL3bOObcSU%2FckWwd94jpjC9SbpOYX4tmC%2BnWSwxmmZtki2x2HnG63BlrwCeYPTTgDfYh5zIpxeO6MVv5vUkqBARQoVGd7SdT5TnmVQVITWp7m%2B%2FcMLia7RjyoO%2BfHzoIg6zkY8e9kiKZpfYbDumAqHn6nMNLn%2B4ifEs%2B8fokdTcJQarUELQARu7T001iK4dxpew%2BUnIpVJ1H7KMOLL9cAGOqUBKYy9qghJUUI0jPQ1%2FXKGiNvIUZVxHgzOvp1CHcQICsINN46InAJ65imaxwJL%2FtP7FIKfGLeep8wK0PFTJo0qjaC14IzEEH%2BBZE2BKvpARfMTRji84WgHWWXFiJWRrRSRlDdjy2%2B%2BfoK5tA2RHrMOOJ%2B5cO72PjJNljw96ujlakmhiZnJn1SYred7D%2Fe31cOuJUKFoZM%2BMvikVf94PqaFWFAmJJl%2B&X-Amz-Signature=7e804d6810acd75fa00522ed08b6ad9d66f266dc83dd799a1df7c7fc2cf4fe61&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQ6C5PF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7HOXIHOkHASmViiD%2FqNsaZ5cZChAO8%2FRSoSDFWhMV7wIgMgZtCGMTNFLI9k%2Bu0cyLeNd5Uj1Jaxyh6dq9kKDXKIcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4r3RoZu6x5B4ZXRCrcA0yA014TMSX5bU%2BZ%2BSODAcIM9nusjFQJ72rLIQelScEt%2FQlvv2nD8iThxI9%2BXO0FZzBpKt8kQ0HKrQLr1BFayYaePudyzWxZwZk%2BbpdM6Juvw%2FdIYA6NZx0pYYzEUEXbkhjvhDGL8zfRr0DuzxCPIfKmR1m0RJwLF6vw1zTxfG%2FTROGfbESMkocZrHSnDNRavBtBWsjkT66%2BmGUYsMPhAqE4dl%2BhixqbVHrNcDdCg9BtiVpQZDNjAeYBE%2B60pCngrRkRM%2F0Kgxx4CldcrUzSPBpZXifzQffzh%2BJ2Wc5Ra6ZFNsaq%2B%2FIqt%2FYeyvEaoB9Uwz%2FNkaasfk%2F70O30s4zKJyXv7WS0W2eQTo4NIlB4byKoI3L08JktXVtFF0AlPLILwDh8aQvtg2TzRs4RihZarE1uWxTIMsTUZQJZf%2BCkHPlJz9wL3bOObcSU%2FckWwd94jpjC9SbpOYX4tmC%2BnWSwxmmZtki2x2HnG63BlrwCeYPTTgDfYh5zIpxeO6MVv5vUkqBARQoVGd7SdT5TnmVQVITWp7m%2B%2FcMLia7RjyoO%2BfHzoIg6zkY8e9kiKZpfYbDumAqHn6nMNLn%2B4ifEs%2B8fokdTcJQarUELQARu7T001iK4dxpew%2BUnIpVJ1H7KMOLL9cAGOqUBKYy9qghJUUI0jPQ1%2FXKGiNvIUZVxHgzOvp1CHcQICsINN46InAJ65imaxwJL%2FtP7FIKfGLeep8wK0PFTJo0qjaC14IzEEH%2BBZE2BKvpARfMTRji84WgHWWXFiJWRrRSRlDdjy2%2B%2BfoK5tA2RHrMOOJ%2B5cO72PjJNljw96ujlakmhiZnJn1SYred7D%2Fe31cOuJUKFoZM%2BMvikVf94PqaFWFAmJJl%2B&X-Amz-Signature=baa8ccbb0b5d17bc13cbfc3b1286b757bddebc632bb9e61869ead7e4655bfd1e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQ6C5PF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7HOXIHOkHASmViiD%2FqNsaZ5cZChAO8%2FRSoSDFWhMV7wIgMgZtCGMTNFLI9k%2Bu0cyLeNd5Uj1Jaxyh6dq9kKDXKIcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4r3RoZu6x5B4ZXRCrcA0yA014TMSX5bU%2BZ%2BSODAcIM9nusjFQJ72rLIQelScEt%2FQlvv2nD8iThxI9%2BXO0FZzBpKt8kQ0HKrQLr1BFayYaePudyzWxZwZk%2BbpdM6Juvw%2FdIYA6NZx0pYYzEUEXbkhjvhDGL8zfRr0DuzxCPIfKmR1m0RJwLF6vw1zTxfG%2FTROGfbESMkocZrHSnDNRavBtBWsjkT66%2BmGUYsMPhAqE4dl%2BhixqbVHrNcDdCg9BtiVpQZDNjAeYBE%2B60pCngrRkRM%2F0Kgxx4CldcrUzSPBpZXifzQffzh%2BJ2Wc5Ra6ZFNsaq%2B%2FIqt%2FYeyvEaoB9Uwz%2FNkaasfk%2F70O30s4zKJyXv7WS0W2eQTo4NIlB4byKoI3L08JktXVtFF0AlPLILwDh8aQvtg2TzRs4RihZarE1uWxTIMsTUZQJZf%2BCkHPlJz9wL3bOObcSU%2FckWwd94jpjC9SbpOYX4tmC%2BnWSwxmmZtki2x2HnG63BlrwCeYPTTgDfYh5zIpxeO6MVv5vUkqBARQoVGd7SdT5TnmVQVITWp7m%2B%2FcMLia7RjyoO%2BfHzoIg6zkY8e9kiKZpfYbDumAqHn6nMNLn%2B4ifEs%2B8fokdTcJQarUELQARu7T001iK4dxpew%2BUnIpVJ1H7KMOLL9cAGOqUBKYy9qghJUUI0jPQ1%2FXKGiNvIUZVxHgzOvp1CHcQICsINN46InAJ65imaxwJL%2FtP7FIKfGLeep8wK0PFTJo0qjaC14IzEEH%2BBZE2BKvpARfMTRji84WgHWWXFiJWRrRSRlDdjy2%2B%2BfoK5tA2RHrMOOJ%2B5cO72PjJNljw96ujlakmhiZnJn1SYred7D%2Fe31cOuJUKFoZM%2BMvikVf94PqaFWFAmJJl%2B&X-Amz-Signature=d041d13be93cd801d4c4a9fd74a4efb540f36947de1d8b75a4785bc62e739295&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

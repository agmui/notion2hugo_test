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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCMPGJW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8zueiUAnH9%2B7Pq1ivUSRZpp9kleAqrOfi%2FSIstiQy%2BAiEAjPPEBp0d8IFGxVMjKdQ1z3D%2FUqCgKllJ09JKrpFNFEwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJw3fB6bAek8vIjwyrcA%2B5M2z7ZFL6MF%2BF%2BhIuoRwPj1cwRLg3Ex4fUkOP3a6yrW7MByqgZThaEHnClGatk6jR0RscrrDxX4wx9pExJrHife6nXsVKUQWcp290%2Ft%2BO3PT9aXR10zaRqZGpmAYRQq4Rf7x71igx198TuU9zaEfchE3aqBDok3zBfYteD0wnF8IboHrRkX5o4aip%2FKEjQaw7TYA9qhIx%2B7QNKi6GDcExyOzY6WUPQNnXH1%2FuLxN9R79kay1%2BHD46IV2DItihhtUDjSrEpc497L%2By%2FlO8kIRTmus8fKZSC6pWbHzOOixU4Cax4Pm0p4TC8BfpYo52tBwv6SjHhfvNR2ew%2BpXrKNSYLS5YCabYzW%2Fo2xFi0xIr565ss1uQcD%2BVEZejhOvFysxmlMpK4qNtZS%2FBCOxXySX4f1uupl9usrPVf3InO%2BptLwdA%2Bhe1deqetNzArXdZbbilljCZCxi%2Bz33f1Ni1vRgVBSjxvAr0a99BY4MD3MkoPAiofMHMSxpn8AF2YY%2FJ8aGugpD9MowXVfjxsPFK9IAfjURf9Xtmh69zC1RmBDGa5WX3AI9kvpGpMZ8Ge%2Fas%2Feie%2BE2tPowzAqkrWId7bKijtpGKKJxdvlok111COjhiTwezoxILhfOhNsKBdMIiLgMMGOqUBIF2IElJpO9kd5MzzucEwztxS7yLHdp4CRJCg1Ty%2FjwodZKImttSNBJzlj2Otgjhdzu9hR3iBCPBT9sP2T1FHSCCDN9uREs3uZhc3Mqh9ofoqq5P09FEkYuiyEQQr%2FnhItPE7yfXOz3DHh3%2BQSr1wRNzgS3JaGdZ%2FJt2rXuBBMQN3Mq8NB1v6ss5%2FRg5kX%2BYnTFGgAk3vRhlcLKmVzm1U9UYVWkWn&X-Amz-Signature=653164c21ad24e44f6059772718b7987a43392a55c4b6a777914b0b18c0acb2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCMPGJW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8zueiUAnH9%2B7Pq1ivUSRZpp9kleAqrOfi%2FSIstiQy%2BAiEAjPPEBp0d8IFGxVMjKdQ1z3D%2FUqCgKllJ09JKrpFNFEwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJw3fB6bAek8vIjwyrcA%2B5M2z7ZFL6MF%2BF%2BhIuoRwPj1cwRLg3Ex4fUkOP3a6yrW7MByqgZThaEHnClGatk6jR0RscrrDxX4wx9pExJrHife6nXsVKUQWcp290%2Ft%2BO3PT9aXR10zaRqZGpmAYRQq4Rf7x71igx198TuU9zaEfchE3aqBDok3zBfYteD0wnF8IboHrRkX5o4aip%2FKEjQaw7TYA9qhIx%2B7QNKi6GDcExyOzY6WUPQNnXH1%2FuLxN9R79kay1%2BHD46IV2DItihhtUDjSrEpc497L%2By%2FlO8kIRTmus8fKZSC6pWbHzOOixU4Cax4Pm0p4TC8BfpYo52tBwv6SjHhfvNR2ew%2BpXrKNSYLS5YCabYzW%2Fo2xFi0xIr565ss1uQcD%2BVEZejhOvFysxmlMpK4qNtZS%2FBCOxXySX4f1uupl9usrPVf3InO%2BptLwdA%2Bhe1deqetNzArXdZbbilljCZCxi%2Bz33f1Ni1vRgVBSjxvAr0a99BY4MD3MkoPAiofMHMSxpn8AF2YY%2FJ8aGugpD9MowXVfjxsPFK9IAfjURf9Xtmh69zC1RmBDGa5WX3AI9kvpGpMZ8Ge%2Fas%2Feie%2BE2tPowzAqkrWId7bKijtpGKKJxdvlok111COjhiTwezoxILhfOhNsKBdMIiLgMMGOqUBIF2IElJpO9kd5MzzucEwztxS7yLHdp4CRJCg1Ty%2FjwodZKImttSNBJzlj2Otgjhdzu9hR3iBCPBT9sP2T1FHSCCDN9uREs3uZhc3Mqh9ofoqq5P09FEkYuiyEQQr%2FnhItPE7yfXOz3DHh3%2BQSr1wRNzgS3JaGdZ%2FJt2rXuBBMQN3Mq8NB1v6ss5%2FRg5kX%2BYnTFGgAk3vRhlcLKmVzm1U9UYVWkWn&X-Amz-Signature=cdcfb8e7d93afca2a10bc93fe73e0f352af6424734a7e2c384873dde0c273856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCMPGJW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8zueiUAnH9%2B7Pq1ivUSRZpp9kleAqrOfi%2FSIstiQy%2BAiEAjPPEBp0d8IFGxVMjKdQ1z3D%2FUqCgKllJ09JKrpFNFEwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJw3fB6bAek8vIjwyrcA%2B5M2z7ZFL6MF%2BF%2BhIuoRwPj1cwRLg3Ex4fUkOP3a6yrW7MByqgZThaEHnClGatk6jR0RscrrDxX4wx9pExJrHife6nXsVKUQWcp290%2Ft%2BO3PT9aXR10zaRqZGpmAYRQq4Rf7x71igx198TuU9zaEfchE3aqBDok3zBfYteD0wnF8IboHrRkX5o4aip%2FKEjQaw7TYA9qhIx%2B7QNKi6GDcExyOzY6WUPQNnXH1%2FuLxN9R79kay1%2BHD46IV2DItihhtUDjSrEpc497L%2By%2FlO8kIRTmus8fKZSC6pWbHzOOixU4Cax4Pm0p4TC8BfpYo52tBwv6SjHhfvNR2ew%2BpXrKNSYLS5YCabYzW%2Fo2xFi0xIr565ss1uQcD%2BVEZejhOvFysxmlMpK4qNtZS%2FBCOxXySX4f1uupl9usrPVf3InO%2BptLwdA%2Bhe1deqetNzArXdZbbilljCZCxi%2Bz33f1Ni1vRgVBSjxvAr0a99BY4MD3MkoPAiofMHMSxpn8AF2YY%2FJ8aGugpD9MowXVfjxsPFK9IAfjURf9Xtmh69zC1RmBDGa5WX3AI9kvpGpMZ8Ge%2Fas%2Feie%2BE2tPowzAqkrWId7bKijtpGKKJxdvlok111COjhiTwezoxILhfOhNsKBdMIiLgMMGOqUBIF2IElJpO9kd5MzzucEwztxS7yLHdp4CRJCg1Ty%2FjwodZKImttSNBJzlj2Otgjhdzu9hR3iBCPBT9sP2T1FHSCCDN9uREs3uZhc3Mqh9ofoqq5P09FEkYuiyEQQr%2FnhItPE7yfXOz3DHh3%2BQSr1wRNzgS3JaGdZ%2FJt2rXuBBMQN3Mq8NB1v6ss5%2FRg5kX%2BYnTFGgAk3vRhlcLKmVzm1U9UYVWkWn&X-Amz-Signature=dfcd1c52fd41ca8b66aa337e7b8b3d5fb3645f92c7473fa3d9a6452daedcb329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCMPGJW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8zueiUAnH9%2B7Pq1ivUSRZpp9kleAqrOfi%2FSIstiQy%2BAiEAjPPEBp0d8IFGxVMjKdQ1z3D%2FUqCgKllJ09JKrpFNFEwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJw3fB6bAek8vIjwyrcA%2B5M2z7ZFL6MF%2BF%2BhIuoRwPj1cwRLg3Ex4fUkOP3a6yrW7MByqgZThaEHnClGatk6jR0RscrrDxX4wx9pExJrHife6nXsVKUQWcp290%2Ft%2BO3PT9aXR10zaRqZGpmAYRQq4Rf7x71igx198TuU9zaEfchE3aqBDok3zBfYteD0wnF8IboHrRkX5o4aip%2FKEjQaw7TYA9qhIx%2B7QNKi6GDcExyOzY6WUPQNnXH1%2FuLxN9R79kay1%2BHD46IV2DItihhtUDjSrEpc497L%2By%2FlO8kIRTmus8fKZSC6pWbHzOOixU4Cax4Pm0p4TC8BfpYo52tBwv6SjHhfvNR2ew%2BpXrKNSYLS5YCabYzW%2Fo2xFi0xIr565ss1uQcD%2BVEZejhOvFysxmlMpK4qNtZS%2FBCOxXySX4f1uupl9usrPVf3InO%2BptLwdA%2Bhe1deqetNzArXdZbbilljCZCxi%2Bz33f1Ni1vRgVBSjxvAr0a99BY4MD3MkoPAiofMHMSxpn8AF2YY%2FJ8aGugpD9MowXVfjxsPFK9IAfjURf9Xtmh69zC1RmBDGa5WX3AI9kvpGpMZ8Ge%2Fas%2Feie%2BE2tPowzAqkrWId7bKijtpGKKJxdvlok111COjhiTwezoxILhfOhNsKBdMIiLgMMGOqUBIF2IElJpO9kd5MzzucEwztxS7yLHdp4CRJCg1Ty%2FjwodZKImttSNBJzlj2Otgjhdzu9hR3iBCPBT9sP2T1FHSCCDN9uREs3uZhc3Mqh9ofoqq5P09FEkYuiyEQQr%2FnhItPE7yfXOz3DHh3%2BQSr1wRNzgS3JaGdZ%2FJt2rXuBBMQN3Mq8NB1v6ss5%2FRg5kX%2BYnTFGgAk3vRhlcLKmVzm1U9UYVWkWn&X-Amz-Signature=460cfa06f45cc184911f1ce93f76a0efc6562c95f181a45619d369c08cf5b400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCMPGJW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8zueiUAnH9%2B7Pq1ivUSRZpp9kleAqrOfi%2FSIstiQy%2BAiEAjPPEBp0d8IFGxVMjKdQ1z3D%2FUqCgKllJ09JKrpFNFEwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJw3fB6bAek8vIjwyrcA%2B5M2z7ZFL6MF%2BF%2BhIuoRwPj1cwRLg3Ex4fUkOP3a6yrW7MByqgZThaEHnClGatk6jR0RscrrDxX4wx9pExJrHife6nXsVKUQWcp290%2Ft%2BO3PT9aXR10zaRqZGpmAYRQq4Rf7x71igx198TuU9zaEfchE3aqBDok3zBfYteD0wnF8IboHrRkX5o4aip%2FKEjQaw7TYA9qhIx%2B7QNKi6GDcExyOzY6WUPQNnXH1%2FuLxN9R79kay1%2BHD46IV2DItihhtUDjSrEpc497L%2By%2FlO8kIRTmus8fKZSC6pWbHzOOixU4Cax4Pm0p4TC8BfpYo52tBwv6SjHhfvNR2ew%2BpXrKNSYLS5YCabYzW%2Fo2xFi0xIr565ss1uQcD%2BVEZejhOvFysxmlMpK4qNtZS%2FBCOxXySX4f1uupl9usrPVf3InO%2BptLwdA%2Bhe1deqetNzArXdZbbilljCZCxi%2Bz33f1Ni1vRgVBSjxvAr0a99BY4MD3MkoPAiofMHMSxpn8AF2YY%2FJ8aGugpD9MowXVfjxsPFK9IAfjURf9Xtmh69zC1RmBDGa5WX3AI9kvpGpMZ8Ge%2Fas%2Feie%2BE2tPowzAqkrWId7bKijtpGKKJxdvlok111COjhiTwezoxILhfOhNsKBdMIiLgMMGOqUBIF2IElJpO9kd5MzzucEwztxS7yLHdp4CRJCg1Ty%2FjwodZKImttSNBJzlj2Otgjhdzu9hR3iBCPBT9sP2T1FHSCCDN9uREs3uZhc3Mqh9ofoqq5P09FEkYuiyEQQr%2FnhItPE7yfXOz3DHh3%2BQSr1wRNzgS3JaGdZ%2FJt2rXuBBMQN3Mq8NB1v6ss5%2FRg5kX%2BYnTFGgAk3vRhlcLKmVzm1U9UYVWkWn&X-Amz-Signature=c2fe962b198c36e78ed70823920f110c89e1f808809df740eb60fdebaaf1ad25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCMPGJW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8zueiUAnH9%2B7Pq1ivUSRZpp9kleAqrOfi%2FSIstiQy%2BAiEAjPPEBp0d8IFGxVMjKdQ1z3D%2FUqCgKllJ09JKrpFNFEwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJw3fB6bAek8vIjwyrcA%2B5M2z7ZFL6MF%2BF%2BhIuoRwPj1cwRLg3Ex4fUkOP3a6yrW7MByqgZThaEHnClGatk6jR0RscrrDxX4wx9pExJrHife6nXsVKUQWcp290%2Ft%2BO3PT9aXR10zaRqZGpmAYRQq4Rf7x71igx198TuU9zaEfchE3aqBDok3zBfYteD0wnF8IboHrRkX5o4aip%2FKEjQaw7TYA9qhIx%2B7QNKi6GDcExyOzY6WUPQNnXH1%2FuLxN9R79kay1%2BHD46IV2DItihhtUDjSrEpc497L%2By%2FlO8kIRTmus8fKZSC6pWbHzOOixU4Cax4Pm0p4TC8BfpYo52tBwv6SjHhfvNR2ew%2BpXrKNSYLS5YCabYzW%2Fo2xFi0xIr565ss1uQcD%2BVEZejhOvFysxmlMpK4qNtZS%2FBCOxXySX4f1uupl9usrPVf3InO%2BptLwdA%2Bhe1deqetNzArXdZbbilljCZCxi%2Bz33f1Ni1vRgVBSjxvAr0a99BY4MD3MkoPAiofMHMSxpn8AF2YY%2FJ8aGugpD9MowXVfjxsPFK9IAfjURf9Xtmh69zC1RmBDGa5WX3AI9kvpGpMZ8Ge%2Fas%2Feie%2BE2tPowzAqkrWId7bKijtpGKKJxdvlok111COjhiTwezoxILhfOhNsKBdMIiLgMMGOqUBIF2IElJpO9kd5MzzucEwztxS7yLHdp4CRJCg1Ty%2FjwodZKImttSNBJzlj2Otgjhdzu9hR3iBCPBT9sP2T1FHSCCDN9uREs3uZhc3Mqh9ofoqq5P09FEkYuiyEQQr%2FnhItPE7yfXOz3DHh3%2BQSr1wRNzgS3JaGdZ%2FJt2rXuBBMQN3Mq8NB1v6ss5%2FRg5kX%2BYnTFGgAk3vRhlcLKmVzm1U9UYVWkWn&X-Amz-Signature=433c8d428f8c344544234a30708cb37b8ff0f9441012ecd68d7cc978491cbc3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCMPGJW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8zueiUAnH9%2B7Pq1ivUSRZpp9kleAqrOfi%2FSIstiQy%2BAiEAjPPEBp0d8IFGxVMjKdQ1z3D%2FUqCgKllJ09JKrpFNFEwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJw3fB6bAek8vIjwyrcA%2B5M2z7ZFL6MF%2BF%2BhIuoRwPj1cwRLg3Ex4fUkOP3a6yrW7MByqgZThaEHnClGatk6jR0RscrrDxX4wx9pExJrHife6nXsVKUQWcp290%2Ft%2BO3PT9aXR10zaRqZGpmAYRQq4Rf7x71igx198TuU9zaEfchE3aqBDok3zBfYteD0wnF8IboHrRkX5o4aip%2FKEjQaw7TYA9qhIx%2B7QNKi6GDcExyOzY6WUPQNnXH1%2FuLxN9R79kay1%2BHD46IV2DItihhtUDjSrEpc497L%2By%2FlO8kIRTmus8fKZSC6pWbHzOOixU4Cax4Pm0p4TC8BfpYo52tBwv6SjHhfvNR2ew%2BpXrKNSYLS5YCabYzW%2Fo2xFi0xIr565ss1uQcD%2BVEZejhOvFysxmlMpK4qNtZS%2FBCOxXySX4f1uupl9usrPVf3InO%2BptLwdA%2Bhe1deqetNzArXdZbbilljCZCxi%2Bz33f1Ni1vRgVBSjxvAr0a99BY4MD3MkoPAiofMHMSxpn8AF2YY%2FJ8aGugpD9MowXVfjxsPFK9IAfjURf9Xtmh69zC1RmBDGa5WX3AI9kvpGpMZ8Ge%2Fas%2Feie%2BE2tPowzAqkrWId7bKijtpGKKJxdvlok111COjhiTwezoxILhfOhNsKBdMIiLgMMGOqUBIF2IElJpO9kd5MzzucEwztxS7yLHdp4CRJCg1Ty%2FjwodZKImttSNBJzlj2Otgjhdzu9hR3iBCPBT9sP2T1FHSCCDN9uREs3uZhc3Mqh9ofoqq5P09FEkYuiyEQQr%2FnhItPE7yfXOz3DHh3%2BQSr1wRNzgS3JaGdZ%2FJt2rXuBBMQN3Mq8NB1v6ss5%2FRg5kX%2BYnTFGgAk3vRhlcLKmVzm1U9UYVWkWn&X-Amz-Signature=52cbc728ae76977cb82710cb7e05c6a9669f60058e503e10119ee762d77395a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

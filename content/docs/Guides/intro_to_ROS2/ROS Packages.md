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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIRY3HD%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCdhKF5AjK9FBUVnbjyuZVMt3odUFYXZXa0N85w36y0kAIhAPrV6R0yaYnOZLK7mOf6dK4bCz0Wfo9i2KHkzF4FjRa%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN2nQpdPNhPqGWNbAq3AMzFrAxeMIptycfRg5qwoyxbL2goygwnhJOf5cgdpSWXAMD9prtczb2uZG5DVmfDbqQLuWmHngB42YtKiODDPPTarEheKMqk5VlqXzUTupyHBhHKb0pfNB3v9A2lrGdB%2BwFM3J9PHfAH5VRpKClJDr%2BQXUj6nEMFQXY5HeMK4rVvUxvp5NPl0W9Sv82xE8xTO0L81jJsYZ9hrIcgpl6VDc3f7MVap7YuVs4r%2F5BMArwknTFx6E7d6siUwYSd2gI4g6QIzzIsawB5%2BE1P%2F4gJQ2ddHbayFd8Occt0trSErXG0zzQnjSzTmrFteGziLbPMAYgoclIllWdV8DnVR9UfusuOf8kF19SgcAK%2F8Fd3%2Bq1IqNUPSsgvpKRAQR3z72%2F%2BO80laCHlziEi9qQ2iU95bMsE3hxtFiEXZVSaoBYx5GUR8NulviHWsB%2Fi9YVvf6SAlE%2BOuLJt29Ly7oBuMbArufxGzR3O6GdSF3YX5%2FVxgyK7jPdDjxpYDnG7tiajvIPqh4taS0b9lgVagCNaSp2%2BjrGXr97oazrWSE8%2BGjeFGy8poMaHxEcuSUNChKJHtC3ZnAkInJJzXXYkTtBcjVYm61K81cPpEmdhMziWwAix1YOFn0QCX9waz9KnMSTtzCkyLe%2FBjqkAWs6S12MtigGox4RBd%2BgcnT8gt8hnhOvC0CtUPyhXOkeQqWZanFtygj7unUs18F9SDqmU7EFbNE0dj%2B6d0mA77FyacNCichBQ8QPWbwCetX9JaRnPjxiM2czBVXBk6blReOslT1%2FF7wMq1l7xtVHhIfeHO2Qhj2BAHRgZKffjB8iBCKIGQmYeefPpQmHntOlml6CXY8E5YsirW269ypjMef49DXd&X-Amz-Signature=34d31c35e15dd7d38d1c8fd518b84f04077303b9506a62b51cc4827b8d44466f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIRY3HD%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCdhKF5AjK9FBUVnbjyuZVMt3odUFYXZXa0N85w36y0kAIhAPrV6R0yaYnOZLK7mOf6dK4bCz0Wfo9i2KHkzF4FjRa%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN2nQpdPNhPqGWNbAq3AMzFrAxeMIptycfRg5qwoyxbL2goygwnhJOf5cgdpSWXAMD9prtczb2uZG5DVmfDbqQLuWmHngB42YtKiODDPPTarEheKMqk5VlqXzUTupyHBhHKb0pfNB3v9A2lrGdB%2BwFM3J9PHfAH5VRpKClJDr%2BQXUj6nEMFQXY5HeMK4rVvUxvp5NPl0W9Sv82xE8xTO0L81jJsYZ9hrIcgpl6VDc3f7MVap7YuVs4r%2F5BMArwknTFx6E7d6siUwYSd2gI4g6QIzzIsawB5%2BE1P%2F4gJQ2ddHbayFd8Occt0trSErXG0zzQnjSzTmrFteGziLbPMAYgoclIllWdV8DnVR9UfusuOf8kF19SgcAK%2F8Fd3%2Bq1IqNUPSsgvpKRAQR3z72%2F%2BO80laCHlziEi9qQ2iU95bMsE3hxtFiEXZVSaoBYx5GUR8NulviHWsB%2Fi9YVvf6SAlE%2BOuLJt29Ly7oBuMbArufxGzR3O6GdSF3YX5%2FVxgyK7jPdDjxpYDnG7tiajvIPqh4taS0b9lgVagCNaSp2%2BjrGXr97oazrWSE8%2BGjeFGy8poMaHxEcuSUNChKJHtC3ZnAkInJJzXXYkTtBcjVYm61K81cPpEmdhMziWwAix1YOFn0QCX9waz9KnMSTtzCkyLe%2FBjqkAWs6S12MtigGox4RBd%2BgcnT8gt8hnhOvC0CtUPyhXOkeQqWZanFtygj7unUs18F9SDqmU7EFbNE0dj%2B6d0mA77FyacNCichBQ8QPWbwCetX9JaRnPjxiM2czBVXBk6blReOslT1%2FF7wMq1l7xtVHhIfeHO2Qhj2BAHRgZKffjB8iBCKIGQmYeefPpQmHntOlml6CXY8E5YsirW269ypjMef49DXd&X-Amz-Signature=4ca9277369ad08577833f2920b503d0bdb5d30f8559cec2eb77978fcff2f95e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIRY3HD%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCdhKF5AjK9FBUVnbjyuZVMt3odUFYXZXa0N85w36y0kAIhAPrV6R0yaYnOZLK7mOf6dK4bCz0Wfo9i2KHkzF4FjRa%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN2nQpdPNhPqGWNbAq3AMzFrAxeMIptycfRg5qwoyxbL2goygwnhJOf5cgdpSWXAMD9prtczb2uZG5DVmfDbqQLuWmHngB42YtKiODDPPTarEheKMqk5VlqXzUTupyHBhHKb0pfNB3v9A2lrGdB%2BwFM3J9PHfAH5VRpKClJDr%2BQXUj6nEMFQXY5HeMK4rVvUxvp5NPl0W9Sv82xE8xTO0L81jJsYZ9hrIcgpl6VDc3f7MVap7YuVs4r%2F5BMArwknTFx6E7d6siUwYSd2gI4g6QIzzIsawB5%2BE1P%2F4gJQ2ddHbayFd8Occt0trSErXG0zzQnjSzTmrFteGziLbPMAYgoclIllWdV8DnVR9UfusuOf8kF19SgcAK%2F8Fd3%2Bq1IqNUPSsgvpKRAQR3z72%2F%2BO80laCHlziEi9qQ2iU95bMsE3hxtFiEXZVSaoBYx5GUR8NulviHWsB%2Fi9YVvf6SAlE%2BOuLJt29Ly7oBuMbArufxGzR3O6GdSF3YX5%2FVxgyK7jPdDjxpYDnG7tiajvIPqh4taS0b9lgVagCNaSp2%2BjrGXr97oazrWSE8%2BGjeFGy8poMaHxEcuSUNChKJHtC3ZnAkInJJzXXYkTtBcjVYm61K81cPpEmdhMziWwAix1YOFn0QCX9waz9KnMSTtzCkyLe%2FBjqkAWs6S12MtigGox4RBd%2BgcnT8gt8hnhOvC0CtUPyhXOkeQqWZanFtygj7unUs18F9SDqmU7EFbNE0dj%2B6d0mA77FyacNCichBQ8QPWbwCetX9JaRnPjxiM2czBVXBk6blReOslT1%2FF7wMq1l7xtVHhIfeHO2Qhj2BAHRgZKffjB8iBCKIGQmYeefPpQmHntOlml6CXY8E5YsirW269ypjMef49DXd&X-Amz-Signature=cb87dc0cebc08663eb1e3d80584f1133cfc8d03a1a77d73a4daa9d82302a4259&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIRY3HD%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCdhKF5AjK9FBUVnbjyuZVMt3odUFYXZXa0N85w36y0kAIhAPrV6R0yaYnOZLK7mOf6dK4bCz0Wfo9i2KHkzF4FjRa%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN2nQpdPNhPqGWNbAq3AMzFrAxeMIptycfRg5qwoyxbL2goygwnhJOf5cgdpSWXAMD9prtczb2uZG5DVmfDbqQLuWmHngB42YtKiODDPPTarEheKMqk5VlqXzUTupyHBhHKb0pfNB3v9A2lrGdB%2BwFM3J9PHfAH5VRpKClJDr%2BQXUj6nEMFQXY5HeMK4rVvUxvp5NPl0W9Sv82xE8xTO0L81jJsYZ9hrIcgpl6VDc3f7MVap7YuVs4r%2F5BMArwknTFx6E7d6siUwYSd2gI4g6QIzzIsawB5%2BE1P%2F4gJQ2ddHbayFd8Occt0trSErXG0zzQnjSzTmrFteGziLbPMAYgoclIllWdV8DnVR9UfusuOf8kF19SgcAK%2F8Fd3%2Bq1IqNUPSsgvpKRAQR3z72%2F%2BO80laCHlziEi9qQ2iU95bMsE3hxtFiEXZVSaoBYx5GUR8NulviHWsB%2Fi9YVvf6SAlE%2BOuLJt29Ly7oBuMbArufxGzR3O6GdSF3YX5%2FVxgyK7jPdDjxpYDnG7tiajvIPqh4taS0b9lgVagCNaSp2%2BjrGXr97oazrWSE8%2BGjeFGy8poMaHxEcuSUNChKJHtC3ZnAkInJJzXXYkTtBcjVYm61K81cPpEmdhMziWwAix1YOFn0QCX9waz9KnMSTtzCkyLe%2FBjqkAWs6S12MtigGox4RBd%2BgcnT8gt8hnhOvC0CtUPyhXOkeQqWZanFtygj7unUs18F9SDqmU7EFbNE0dj%2B6d0mA77FyacNCichBQ8QPWbwCetX9JaRnPjxiM2czBVXBk6blReOslT1%2FF7wMq1l7xtVHhIfeHO2Qhj2BAHRgZKffjB8iBCKIGQmYeefPpQmHntOlml6CXY8E5YsirW269ypjMef49DXd&X-Amz-Signature=535fe3fb5e387b8a65ffa4badce4eb5550b1db7dd0c979db03655f8fbb4aaa0b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIRY3HD%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCdhKF5AjK9FBUVnbjyuZVMt3odUFYXZXa0N85w36y0kAIhAPrV6R0yaYnOZLK7mOf6dK4bCz0Wfo9i2KHkzF4FjRa%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN2nQpdPNhPqGWNbAq3AMzFrAxeMIptycfRg5qwoyxbL2goygwnhJOf5cgdpSWXAMD9prtczb2uZG5DVmfDbqQLuWmHngB42YtKiODDPPTarEheKMqk5VlqXzUTupyHBhHKb0pfNB3v9A2lrGdB%2BwFM3J9PHfAH5VRpKClJDr%2BQXUj6nEMFQXY5HeMK4rVvUxvp5NPl0W9Sv82xE8xTO0L81jJsYZ9hrIcgpl6VDc3f7MVap7YuVs4r%2F5BMArwknTFx6E7d6siUwYSd2gI4g6QIzzIsawB5%2BE1P%2F4gJQ2ddHbayFd8Occt0trSErXG0zzQnjSzTmrFteGziLbPMAYgoclIllWdV8DnVR9UfusuOf8kF19SgcAK%2F8Fd3%2Bq1IqNUPSsgvpKRAQR3z72%2F%2BO80laCHlziEi9qQ2iU95bMsE3hxtFiEXZVSaoBYx5GUR8NulviHWsB%2Fi9YVvf6SAlE%2BOuLJt29Ly7oBuMbArufxGzR3O6GdSF3YX5%2FVxgyK7jPdDjxpYDnG7tiajvIPqh4taS0b9lgVagCNaSp2%2BjrGXr97oazrWSE8%2BGjeFGy8poMaHxEcuSUNChKJHtC3ZnAkInJJzXXYkTtBcjVYm61K81cPpEmdhMziWwAix1YOFn0QCX9waz9KnMSTtzCkyLe%2FBjqkAWs6S12MtigGox4RBd%2BgcnT8gt8hnhOvC0CtUPyhXOkeQqWZanFtygj7unUs18F9SDqmU7EFbNE0dj%2B6d0mA77FyacNCichBQ8QPWbwCetX9JaRnPjxiM2czBVXBk6blReOslT1%2FF7wMq1l7xtVHhIfeHO2Qhj2BAHRgZKffjB8iBCKIGQmYeefPpQmHntOlml6CXY8E5YsirW269ypjMef49DXd&X-Amz-Signature=ce0cd5b75714fe5afb06ff7df7972726ea685414aa5cd8516e6f68961cf91633&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIRY3HD%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCdhKF5AjK9FBUVnbjyuZVMt3odUFYXZXa0N85w36y0kAIhAPrV6R0yaYnOZLK7mOf6dK4bCz0Wfo9i2KHkzF4FjRa%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN2nQpdPNhPqGWNbAq3AMzFrAxeMIptycfRg5qwoyxbL2goygwnhJOf5cgdpSWXAMD9prtczb2uZG5DVmfDbqQLuWmHngB42YtKiODDPPTarEheKMqk5VlqXzUTupyHBhHKb0pfNB3v9A2lrGdB%2BwFM3J9PHfAH5VRpKClJDr%2BQXUj6nEMFQXY5HeMK4rVvUxvp5NPl0W9Sv82xE8xTO0L81jJsYZ9hrIcgpl6VDc3f7MVap7YuVs4r%2F5BMArwknTFx6E7d6siUwYSd2gI4g6QIzzIsawB5%2BE1P%2F4gJQ2ddHbayFd8Occt0trSErXG0zzQnjSzTmrFteGziLbPMAYgoclIllWdV8DnVR9UfusuOf8kF19SgcAK%2F8Fd3%2Bq1IqNUPSsgvpKRAQR3z72%2F%2BO80laCHlziEi9qQ2iU95bMsE3hxtFiEXZVSaoBYx5GUR8NulviHWsB%2Fi9YVvf6SAlE%2BOuLJt29Ly7oBuMbArufxGzR3O6GdSF3YX5%2FVxgyK7jPdDjxpYDnG7tiajvIPqh4taS0b9lgVagCNaSp2%2BjrGXr97oazrWSE8%2BGjeFGy8poMaHxEcuSUNChKJHtC3ZnAkInJJzXXYkTtBcjVYm61K81cPpEmdhMziWwAix1YOFn0QCX9waz9KnMSTtzCkyLe%2FBjqkAWs6S12MtigGox4RBd%2BgcnT8gt8hnhOvC0CtUPyhXOkeQqWZanFtygj7unUs18F9SDqmU7EFbNE0dj%2B6d0mA77FyacNCichBQ8QPWbwCetX9JaRnPjxiM2czBVXBk6blReOslT1%2FF7wMq1l7xtVHhIfeHO2Qhj2BAHRgZKffjB8iBCKIGQmYeefPpQmHntOlml6CXY8E5YsirW269ypjMef49DXd&X-Amz-Signature=34090c52c5c90b464a91419005708726e24c0be54faf103fe05ba073e3a0713a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIRY3HD%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCdhKF5AjK9FBUVnbjyuZVMt3odUFYXZXa0N85w36y0kAIhAPrV6R0yaYnOZLK7mOf6dK4bCz0Wfo9i2KHkzF4FjRa%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN2nQpdPNhPqGWNbAq3AMzFrAxeMIptycfRg5qwoyxbL2goygwnhJOf5cgdpSWXAMD9prtczb2uZG5DVmfDbqQLuWmHngB42YtKiODDPPTarEheKMqk5VlqXzUTupyHBhHKb0pfNB3v9A2lrGdB%2BwFM3J9PHfAH5VRpKClJDr%2BQXUj6nEMFQXY5HeMK4rVvUxvp5NPl0W9Sv82xE8xTO0L81jJsYZ9hrIcgpl6VDc3f7MVap7YuVs4r%2F5BMArwknTFx6E7d6siUwYSd2gI4g6QIzzIsawB5%2BE1P%2F4gJQ2ddHbayFd8Occt0trSErXG0zzQnjSzTmrFteGziLbPMAYgoclIllWdV8DnVR9UfusuOf8kF19SgcAK%2F8Fd3%2Bq1IqNUPSsgvpKRAQR3z72%2F%2BO80laCHlziEi9qQ2iU95bMsE3hxtFiEXZVSaoBYx5GUR8NulviHWsB%2Fi9YVvf6SAlE%2BOuLJt29Ly7oBuMbArufxGzR3O6GdSF3YX5%2FVxgyK7jPdDjxpYDnG7tiajvIPqh4taS0b9lgVagCNaSp2%2BjrGXr97oazrWSE8%2BGjeFGy8poMaHxEcuSUNChKJHtC3ZnAkInJJzXXYkTtBcjVYm61K81cPpEmdhMziWwAix1YOFn0QCX9waz9KnMSTtzCkyLe%2FBjqkAWs6S12MtigGox4RBd%2BgcnT8gt8hnhOvC0CtUPyhXOkeQqWZanFtygj7unUs18F9SDqmU7EFbNE0dj%2B6d0mA77FyacNCichBQ8QPWbwCetX9JaRnPjxiM2czBVXBk6blReOslT1%2FF7wMq1l7xtVHhIfeHO2Qhj2BAHRgZKffjB8iBCKIGQmYeefPpQmHntOlml6CXY8E5YsirW269ypjMef49DXd&X-Amz-Signature=abc841507a7e01c3129da68f58e40c922b43050e6390900a451dfba96fe16d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

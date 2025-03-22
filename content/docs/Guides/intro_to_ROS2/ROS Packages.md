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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD7SU47%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC3rseCTMZdhab52ZjOC7gajEO%2Bz5XFsHGiFTwBsv7SrQIgD5tE9iqv1ts9AYTkTi3wHHw65D8prxYhuZtKVc2BxI4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEJJvvLA0Ia197YfircA3sBWG87qePLaSuaIc3A4IVxBKcJBXjnW8U1StCEn8ugX65J9lmIGzavM2NwLv7LfalHhbfi9zXQ7alVtvFcCJfCXw%2Bp4L2S41keeNzxyP8zq7Ir1a%2FeLdKVUNNsuIPPfL4Xc%2BZ834GN7Cq18zIf8TagJjR7cmqwTnhGIos14vNcaUm9YrASZM08l9Dv83Z8wPbD1InwzBzFFthGc0qWkUxnmL0BGmsLdhvFKFZRoCmRmmEAkB0MrvTy6rRkrCzdo3xzR1TgKvW1r4RJk0FtTp5U0XOaFuZuAchCc8%2BxSofN5ir5WOfy8j056GuUqTljGr%2B34me0QJLMG9KKVGo4tzxtD9vKGvRSoaolyBU%2FE9VBtOrcKnsXEpqYp2b4P%2FmwvgKEUJX1Ey0W7sqfQWKdZ6d3XdD6JzmubSd21gQ%2BmNwIMU65YQeaW5LEezOIe4IxGoSWUEivnzZFCz%2FhvsIF6YKrukHDndHQdST59jjEkNwif7LPuThV2y5tNpTn%2FcZ7onpdWjBw2vJAsef8%2FbgmvGSyYDWMCKUXuK%2FZH%2BOe5OC8vor8doWBCtEPqH64IhFoax1EOtzvajR71FbCFSyYCdE6%2F2dvwFtb2jt8Jtx6u7LrPuyXG%2BP6RlSEq%2B8AMOeL%2Bb4GOqUBujXH4Vj6DlbFIbw6JEPlSUqXMtuXAGhaxkDGdWObvgOc9YnEUTPBqaOwy5ovAebasAv95EvX%2FH3ImxyVAUohOIDemr6QwJBCo2DfF3cKtc%2FItEAz03%2FddmZdYk4l9HOhLtKnVtCrax%2Bp52pFHZ0sEvi%2BmdMzEB6tFW5%2FZ8OSyG41hr6lpXJONCK%2F%2FRksoKHmRQupnQqz%2BVOUxcfKEvp0cQxJx3Iv&X-Amz-Signature=98b38708285bc74de96e9168757e2d58c8a09306c45323e6df8a8cd1d546727e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD7SU47%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC3rseCTMZdhab52ZjOC7gajEO%2Bz5XFsHGiFTwBsv7SrQIgD5tE9iqv1ts9AYTkTi3wHHw65D8prxYhuZtKVc2BxI4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEJJvvLA0Ia197YfircA3sBWG87qePLaSuaIc3A4IVxBKcJBXjnW8U1StCEn8ugX65J9lmIGzavM2NwLv7LfalHhbfi9zXQ7alVtvFcCJfCXw%2Bp4L2S41keeNzxyP8zq7Ir1a%2FeLdKVUNNsuIPPfL4Xc%2BZ834GN7Cq18zIf8TagJjR7cmqwTnhGIos14vNcaUm9YrASZM08l9Dv83Z8wPbD1InwzBzFFthGc0qWkUxnmL0BGmsLdhvFKFZRoCmRmmEAkB0MrvTy6rRkrCzdo3xzR1TgKvW1r4RJk0FtTp5U0XOaFuZuAchCc8%2BxSofN5ir5WOfy8j056GuUqTljGr%2B34me0QJLMG9KKVGo4tzxtD9vKGvRSoaolyBU%2FE9VBtOrcKnsXEpqYp2b4P%2FmwvgKEUJX1Ey0W7sqfQWKdZ6d3XdD6JzmubSd21gQ%2BmNwIMU65YQeaW5LEezOIe4IxGoSWUEivnzZFCz%2FhvsIF6YKrukHDndHQdST59jjEkNwif7LPuThV2y5tNpTn%2FcZ7onpdWjBw2vJAsef8%2FbgmvGSyYDWMCKUXuK%2FZH%2BOe5OC8vor8doWBCtEPqH64IhFoax1EOtzvajR71FbCFSyYCdE6%2F2dvwFtb2jt8Jtx6u7LrPuyXG%2BP6RlSEq%2B8AMOeL%2Bb4GOqUBujXH4Vj6DlbFIbw6JEPlSUqXMtuXAGhaxkDGdWObvgOc9YnEUTPBqaOwy5ovAebasAv95EvX%2FH3ImxyVAUohOIDemr6QwJBCo2DfF3cKtc%2FItEAz03%2FddmZdYk4l9HOhLtKnVtCrax%2Bp52pFHZ0sEvi%2BmdMzEB6tFW5%2FZ8OSyG41hr6lpXJONCK%2F%2FRksoKHmRQupnQqz%2BVOUxcfKEvp0cQxJx3Iv&X-Amz-Signature=0218417079c8ad4dbf4344e604c94193fa6f8fd844a22e7a98c180aef243ace4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD7SU47%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC3rseCTMZdhab52ZjOC7gajEO%2Bz5XFsHGiFTwBsv7SrQIgD5tE9iqv1ts9AYTkTi3wHHw65D8prxYhuZtKVc2BxI4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEJJvvLA0Ia197YfircA3sBWG87qePLaSuaIc3A4IVxBKcJBXjnW8U1StCEn8ugX65J9lmIGzavM2NwLv7LfalHhbfi9zXQ7alVtvFcCJfCXw%2Bp4L2S41keeNzxyP8zq7Ir1a%2FeLdKVUNNsuIPPfL4Xc%2BZ834GN7Cq18zIf8TagJjR7cmqwTnhGIos14vNcaUm9YrASZM08l9Dv83Z8wPbD1InwzBzFFthGc0qWkUxnmL0BGmsLdhvFKFZRoCmRmmEAkB0MrvTy6rRkrCzdo3xzR1TgKvW1r4RJk0FtTp5U0XOaFuZuAchCc8%2BxSofN5ir5WOfy8j056GuUqTljGr%2B34me0QJLMG9KKVGo4tzxtD9vKGvRSoaolyBU%2FE9VBtOrcKnsXEpqYp2b4P%2FmwvgKEUJX1Ey0W7sqfQWKdZ6d3XdD6JzmubSd21gQ%2BmNwIMU65YQeaW5LEezOIe4IxGoSWUEivnzZFCz%2FhvsIF6YKrukHDndHQdST59jjEkNwif7LPuThV2y5tNpTn%2FcZ7onpdWjBw2vJAsef8%2FbgmvGSyYDWMCKUXuK%2FZH%2BOe5OC8vor8doWBCtEPqH64IhFoax1EOtzvajR71FbCFSyYCdE6%2F2dvwFtb2jt8Jtx6u7LrPuyXG%2BP6RlSEq%2B8AMOeL%2Bb4GOqUBujXH4Vj6DlbFIbw6JEPlSUqXMtuXAGhaxkDGdWObvgOc9YnEUTPBqaOwy5ovAebasAv95EvX%2FH3ImxyVAUohOIDemr6QwJBCo2DfF3cKtc%2FItEAz03%2FddmZdYk4l9HOhLtKnVtCrax%2Bp52pFHZ0sEvi%2BmdMzEB6tFW5%2FZ8OSyG41hr6lpXJONCK%2F%2FRksoKHmRQupnQqz%2BVOUxcfKEvp0cQxJx3Iv&X-Amz-Signature=6f2f5a1aad13864d90a0ed1cc950f11be144a1ec47cd50f4f79627bda7139aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD7SU47%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC3rseCTMZdhab52ZjOC7gajEO%2Bz5XFsHGiFTwBsv7SrQIgD5tE9iqv1ts9AYTkTi3wHHw65D8prxYhuZtKVc2BxI4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEJJvvLA0Ia197YfircA3sBWG87qePLaSuaIc3A4IVxBKcJBXjnW8U1StCEn8ugX65J9lmIGzavM2NwLv7LfalHhbfi9zXQ7alVtvFcCJfCXw%2Bp4L2S41keeNzxyP8zq7Ir1a%2FeLdKVUNNsuIPPfL4Xc%2BZ834GN7Cq18zIf8TagJjR7cmqwTnhGIos14vNcaUm9YrASZM08l9Dv83Z8wPbD1InwzBzFFthGc0qWkUxnmL0BGmsLdhvFKFZRoCmRmmEAkB0MrvTy6rRkrCzdo3xzR1TgKvW1r4RJk0FtTp5U0XOaFuZuAchCc8%2BxSofN5ir5WOfy8j056GuUqTljGr%2B34me0QJLMG9KKVGo4tzxtD9vKGvRSoaolyBU%2FE9VBtOrcKnsXEpqYp2b4P%2FmwvgKEUJX1Ey0W7sqfQWKdZ6d3XdD6JzmubSd21gQ%2BmNwIMU65YQeaW5LEezOIe4IxGoSWUEivnzZFCz%2FhvsIF6YKrukHDndHQdST59jjEkNwif7LPuThV2y5tNpTn%2FcZ7onpdWjBw2vJAsef8%2FbgmvGSyYDWMCKUXuK%2FZH%2BOe5OC8vor8doWBCtEPqH64IhFoax1EOtzvajR71FbCFSyYCdE6%2F2dvwFtb2jt8Jtx6u7LrPuyXG%2BP6RlSEq%2B8AMOeL%2Bb4GOqUBujXH4Vj6DlbFIbw6JEPlSUqXMtuXAGhaxkDGdWObvgOc9YnEUTPBqaOwy5ovAebasAv95EvX%2FH3ImxyVAUohOIDemr6QwJBCo2DfF3cKtc%2FItEAz03%2FddmZdYk4l9HOhLtKnVtCrax%2Bp52pFHZ0sEvi%2BmdMzEB6tFW5%2FZ8OSyG41hr6lpXJONCK%2F%2FRksoKHmRQupnQqz%2BVOUxcfKEvp0cQxJx3Iv&X-Amz-Signature=eb19fa7f02dcdd175ffc4b1240e14b967f4b383ff234e715de21a622b52dd431&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD7SU47%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC3rseCTMZdhab52ZjOC7gajEO%2Bz5XFsHGiFTwBsv7SrQIgD5tE9iqv1ts9AYTkTi3wHHw65D8prxYhuZtKVc2BxI4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEJJvvLA0Ia197YfircA3sBWG87qePLaSuaIc3A4IVxBKcJBXjnW8U1StCEn8ugX65J9lmIGzavM2NwLv7LfalHhbfi9zXQ7alVtvFcCJfCXw%2Bp4L2S41keeNzxyP8zq7Ir1a%2FeLdKVUNNsuIPPfL4Xc%2BZ834GN7Cq18zIf8TagJjR7cmqwTnhGIos14vNcaUm9YrASZM08l9Dv83Z8wPbD1InwzBzFFthGc0qWkUxnmL0BGmsLdhvFKFZRoCmRmmEAkB0MrvTy6rRkrCzdo3xzR1TgKvW1r4RJk0FtTp5U0XOaFuZuAchCc8%2BxSofN5ir5WOfy8j056GuUqTljGr%2B34me0QJLMG9KKVGo4tzxtD9vKGvRSoaolyBU%2FE9VBtOrcKnsXEpqYp2b4P%2FmwvgKEUJX1Ey0W7sqfQWKdZ6d3XdD6JzmubSd21gQ%2BmNwIMU65YQeaW5LEezOIe4IxGoSWUEivnzZFCz%2FhvsIF6YKrukHDndHQdST59jjEkNwif7LPuThV2y5tNpTn%2FcZ7onpdWjBw2vJAsef8%2FbgmvGSyYDWMCKUXuK%2FZH%2BOe5OC8vor8doWBCtEPqH64IhFoax1EOtzvajR71FbCFSyYCdE6%2F2dvwFtb2jt8Jtx6u7LrPuyXG%2BP6RlSEq%2B8AMOeL%2Bb4GOqUBujXH4Vj6DlbFIbw6JEPlSUqXMtuXAGhaxkDGdWObvgOc9YnEUTPBqaOwy5ovAebasAv95EvX%2FH3ImxyVAUohOIDemr6QwJBCo2DfF3cKtc%2FItEAz03%2FddmZdYk4l9HOhLtKnVtCrax%2Bp52pFHZ0sEvi%2BmdMzEB6tFW5%2FZ8OSyG41hr6lpXJONCK%2F%2FRksoKHmRQupnQqz%2BVOUxcfKEvp0cQxJx3Iv&X-Amz-Signature=8538755120b76c75f0acadd13a822a8f3e78bf94f247835e0aac2e7aee11a6d0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD7SU47%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC3rseCTMZdhab52ZjOC7gajEO%2Bz5XFsHGiFTwBsv7SrQIgD5tE9iqv1ts9AYTkTi3wHHw65D8prxYhuZtKVc2BxI4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEJJvvLA0Ia197YfircA3sBWG87qePLaSuaIc3A4IVxBKcJBXjnW8U1StCEn8ugX65J9lmIGzavM2NwLv7LfalHhbfi9zXQ7alVtvFcCJfCXw%2Bp4L2S41keeNzxyP8zq7Ir1a%2FeLdKVUNNsuIPPfL4Xc%2BZ834GN7Cq18zIf8TagJjR7cmqwTnhGIos14vNcaUm9YrASZM08l9Dv83Z8wPbD1InwzBzFFthGc0qWkUxnmL0BGmsLdhvFKFZRoCmRmmEAkB0MrvTy6rRkrCzdo3xzR1TgKvW1r4RJk0FtTp5U0XOaFuZuAchCc8%2BxSofN5ir5WOfy8j056GuUqTljGr%2B34me0QJLMG9KKVGo4tzxtD9vKGvRSoaolyBU%2FE9VBtOrcKnsXEpqYp2b4P%2FmwvgKEUJX1Ey0W7sqfQWKdZ6d3XdD6JzmubSd21gQ%2BmNwIMU65YQeaW5LEezOIe4IxGoSWUEivnzZFCz%2FhvsIF6YKrukHDndHQdST59jjEkNwif7LPuThV2y5tNpTn%2FcZ7onpdWjBw2vJAsef8%2FbgmvGSyYDWMCKUXuK%2FZH%2BOe5OC8vor8doWBCtEPqH64IhFoax1EOtzvajR71FbCFSyYCdE6%2F2dvwFtb2jt8Jtx6u7LrPuyXG%2BP6RlSEq%2B8AMOeL%2Bb4GOqUBujXH4Vj6DlbFIbw6JEPlSUqXMtuXAGhaxkDGdWObvgOc9YnEUTPBqaOwy5ovAebasAv95EvX%2FH3ImxyVAUohOIDemr6QwJBCo2DfF3cKtc%2FItEAz03%2FddmZdYk4l9HOhLtKnVtCrax%2Bp52pFHZ0sEvi%2BmdMzEB6tFW5%2FZ8OSyG41hr6lpXJONCK%2F%2FRksoKHmRQupnQqz%2BVOUxcfKEvp0cQxJx3Iv&X-Amz-Signature=e1ee268c551e46e0b575760e5bbce43a7ff40a2eb096fe48415c42e12538678b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD7SU47%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC3rseCTMZdhab52ZjOC7gajEO%2Bz5XFsHGiFTwBsv7SrQIgD5tE9iqv1ts9AYTkTi3wHHw65D8prxYhuZtKVc2BxI4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEJJvvLA0Ia197YfircA3sBWG87qePLaSuaIc3A4IVxBKcJBXjnW8U1StCEn8ugX65J9lmIGzavM2NwLv7LfalHhbfi9zXQ7alVtvFcCJfCXw%2Bp4L2S41keeNzxyP8zq7Ir1a%2FeLdKVUNNsuIPPfL4Xc%2BZ834GN7Cq18zIf8TagJjR7cmqwTnhGIos14vNcaUm9YrASZM08l9Dv83Z8wPbD1InwzBzFFthGc0qWkUxnmL0BGmsLdhvFKFZRoCmRmmEAkB0MrvTy6rRkrCzdo3xzR1TgKvW1r4RJk0FtTp5U0XOaFuZuAchCc8%2BxSofN5ir5WOfy8j056GuUqTljGr%2B34me0QJLMG9KKVGo4tzxtD9vKGvRSoaolyBU%2FE9VBtOrcKnsXEpqYp2b4P%2FmwvgKEUJX1Ey0W7sqfQWKdZ6d3XdD6JzmubSd21gQ%2BmNwIMU65YQeaW5LEezOIe4IxGoSWUEivnzZFCz%2FhvsIF6YKrukHDndHQdST59jjEkNwif7LPuThV2y5tNpTn%2FcZ7onpdWjBw2vJAsef8%2FbgmvGSyYDWMCKUXuK%2FZH%2BOe5OC8vor8doWBCtEPqH64IhFoax1EOtzvajR71FbCFSyYCdE6%2F2dvwFtb2jt8Jtx6u7LrPuyXG%2BP6RlSEq%2B8AMOeL%2Bb4GOqUBujXH4Vj6DlbFIbw6JEPlSUqXMtuXAGhaxkDGdWObvgOc9YnEUTPBqaOwy5ovAebasAv95EvX%2FH3ImxyVAUohOIDemr6QwJBCo2DfF3cKtc%2FItEAz03%2FddmZdYk4l9HOhLtKnVtCrax%2Bp52pFHZ0sEvi%2BmdMzEB6tFW5%2FZ8OSyG41hr6lpXJONCK%2F%2FRksoKHmRQupnQqz%2BVOUxcfKEvp0cQxJx3Iv&X-Amz-Signature=110dcc16806d67d661196a3930934f0e214117e61d248b8c73e3a033d336bdff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

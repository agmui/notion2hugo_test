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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPPMOMY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJbeN%2Fd1UpXehqJAeKFO8KstYrIQNPmym%2FDQo390RO%2BQIhAJXicMLih8rN6HrrbvkMZR5TFOAJGvJxgJiAarYmAFLZKv8DCDEQABoMNjM3NDIzMTgzODA1Igzg3OsNTVOZuCJkgHwq3ANzWEe4bktemI6zL208NmVHlNVU6lNpelFq7O03C1p2dTmfhI5RVxsWW8PrC40ZyMSHXQ03R1ZD38eDb4qJh%2BgxvRs9mq%2Bo3pGke59NEjjFrHQ2EqpEgFSSTDwb9Q1iJLOfDZ00Kj%2FBYTdG7Z6xCOhrzKn5ReUfF8lY4VMJ6qzDgURiqBbiM3JIsj0cyvyoPu%2BOLLL%2Fi5ESMX5mcugG3RMyqF7BIPvvh9SXIeYKAFGcG3yOqVO2QLiTscTwOnlMQFXKUbZJkDglRj2YZIqosmQNCX%2BzQjngKvnrRIaVuaZfQ%2Fh1wxDNyE7meSW1AEVHxy9uq9sknDsVv%2BHDfzMtx%2FM6h67cZeMJBEoGmgoNi3M5RMXsE1ss0NXfdVZxmsL9t325Mbnsfby9fCD4dUaZOTlngMjGSBdRmltFW1eR6qtmX7lcXcO3e%2BzLxFHv%2BKV2dLgYfVlfQbioea%2BHpztJ8fUK%2BdiSaejB%2FCzxvjJOAWs4L0B30hE2gKGpbe9nm2hOIZNHvKCfovmsE7ATqXlhMSXv2%2Fok1z9wMMbast4jWqG4zWNwQOuFiQ6w7Zyn5j%2BIWqN7c6h2fi811xLw5EKh39gK0X5A1SU6S1QJ2RZ41nBjYZdnldU%2Bxunvx%2F9zZTCjj6e%2BBjqkAUff6KbGIIrZXBs1lTBf1b8SJLJe3bWMA5%2FpMOG0%2FeVfbWKNaJiw62WFPC2nzNWzvKkhT8kfSemKxGOYRG1wF51mrEto7zz80lc1R1KiNBwOOwkuaYUEg2fFs8kIx840uBX9icvh4J9Bg6i%2BOKa0DgGjvY9r9jBg6y8X%2BNDb2JVx8FJ3xqkcHYI9rYb7thYLinvHKXzV9HErwBA90VDJhzltGcSm&X-Amz-Signature=4140a0765abbc670866eea31a789e279d9eb717552ed93c94d5b54ee0d054a56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPPMOMY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJbeN%2Fd1UpXehqJAeKFO8KstYrIQNPmym%2FDQo390RO%2BQIhAJXicMLih8rN6HrrbvkMZR5TFOAJGvJxgJiAarYmAFLZKv8DCDEQABoMNjM3NDIzMTgzODA1Igzg3OsNTVOZuCJkgHwq3ANzWEe4bktemI6zL208NmVHlNVU6lNpelFq7O03C1p2dTmfhI5RVxsWW8PrC40ZyMSHXQ03R1ZD38eDb4qJh%2BgxvRs9mq%2Bo3pGke59NEjjFrHQ2EqpEgFSSTDwb9Q1iJLOfDZ00Kj%2FBYTdG7Z6xCOhrzKn5ReUfF8lY4VMJ6qzDgURiqBbiM3JIsj0cyvyoPu%2BOLLL%2Fi5ESMX5mcugG3RMyqF7BIPvvh9SXIeYKAFGcG3yOqVO2QLiTscTwOnlMQFXKUbZJkDglRj2YZIqosmQNCX%2BzQjngKvnrRIaVuaZfQ%2Fh1wxDNyE7meSW1AEVHxy9uq9sknDsVv%2BHDfzMtx%2FM6h67cZeMJBEoGmgoNi3M5RMXsE1ss0NXfdVZxmsL9t325Mbnsfby9fCD4dUaZOTlngMjGSBdRmltFW1eR6qtmX7lcXcO3e%2BzLxFHv%2BKV2dLgYfVlfQbioea%2BHpztJ8fUK%2BdiSaejB%2FCzxvjJOAWs4L0B30hE2gKGpbe9nm2hOIZNHvKCfovmsE7ATqXlhMSXv2%2Fok1z9wMMbast4jWqG4zWNwQOuFiQ6w7Zyn5j%2BIWqN7c6h2fi811xLw5EKh39gK0X5A1SU6S1QJ2RZ41nBjYZdnldU%2Bxunvx%2F9zZTCjj6e%2BBjqkAUff6KbGIIrZXBs1lTBf1b8SJLJe3bWMA5%2FpMOG0%2FeVfbWKNaJiw62WFPC2nzNWzvKkhT8kfSemKxGOYRG1wF51mrEto7zz80lc1R1KiNBwOOwkuaYUEg2fFs8kIx840uBX9icvh4J9Bg6i%2BOKa0DgGjvY9r9jBg6y8X%2BNDb2JVx8FJ3xqkcHYI9rYb7thYLinvHKXzV9HErwBA90VDJhzltGcSm&X-Amz-Signature=c2b9de57b4d155174a351e5ac4d6fee8d2483798928228035e9cad17f6b9b7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPPMOMY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJbeN%2Fd1UpXehqJAeKFO8KstYrIQNPmym%2FDQo390RO%2BQIhAJXicMLih8rN6HrrbvkMZR5TFOAJGvJxgJiAarYmAFLZKv8DCDEQABoMNjM3NDIzMTgzODA1Igzg3OsNTVOZuCJkgHwq3ANzWEe4bktemI6zL208NmVHlNVU6lNpelFq7O03C1p2dTmfhI5RVxsWW8PrC40ZyMSHXQ03R1ZD38eDb4qJh%2BgxvRs9mq%2Bo3pGke59NEjjFrHQ2EqpEgFSSTDwb9Q1iJLOfDZ00Kj%2FBYTdG7Z6xCOhrzKn5ReUfF8lY4VMJ6qzDgURiqBbiM3JIsj0cyvyoPu%2BOLLL%2Fi5ESMX5mcugG3RMyqF7BIPvvh9SXIeYKAFGcG3yOqVO2QLiTscTwOnlMQFXKUbZJkDglRj2YZIqosmQNCX%2BzQjngKvnrRIaVuaZfQ%2Fh1wxDNyE7meSW1AEVHxy9uq9sknDsVv%2BHDfzMtx%2FM6h67cZeMJBEoGmgoNi3M5RMXsE1ss0NXfdVZxmsL9t325Mbnsfby9fCD4dUaZOTlngMjGSBdRmltFW1eR6qtmX7lcXcO3e%2BzLxFHv%2BKV2dLgYfVlfQbioea%2BHpztJ8fUK%2BdiSaejB%2FCzxvjJOAWs4L0B30hE2gKGpbe9nm2hOIZNHvKCfovmsE7ATqXlhMSXv2%2Fok1z9wMMbast4jWqG4zWNwQOuFiQ6w7Zyn5j%2BIWqN7c6h2fi811xLw5EKh39gK0X5A1SU6S1QJ2RZ41nBjYZdnldU%2Bxunvx%2F9zZTCjj6e%2BBjqkAUff6KbGIIrZXBs1lTBf1b8SJLJe3bWMA5%2FpMOG0%2FeVfbWKNaJiw62WFPC2nzNWzvKkhT8kfSemKxGOYRG1wF51mrEto7zz80lc1R1KiNBwOOwkuaYUEg2fFs8kIx840uBX9icvh4J9Bg6i%2BOKa0DgGjvY9r9jBg6y8X%2BNDb2JVx8FJ3xqkcHYI9rYb7thYLinvHKXzV9HErwBA90VDJhzltGcSm&X-Amz-Signature=58c83e8e3040223dab6f0ea88ee1f604ee73552753b461bc4ca9f8d7ac715334&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPPMOMY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJbeN%2Fd1UpXehqJAeKFO8KstYrIQNPmym%2FDQo390RO%2BQIhAJXicMLih8rN6HrrbvkMZR5TFOAJGvJxgJiAarYmAFLZKv8DCDEQABoMNjM3NDIzMTgzODA1Igzg3OsNTVOZuCJkgHwq3ANzWEe4bktemI6zL208NmVHlNVU6lNpelFq7O03C1p2dTmfhI5RVxsWW8PrC40ZyMSHXQ03R1ZD38eDb4qJh%2BgxvRs9mq%2Bo3pGke59NEjjFrHQ2EqpEgFSSTDwb9Q1iJLOfDZ00Kj%2FBYTdG7Z6xCOhrzKn5ReUfF8lY4VMJ6qzDgURiqBbiM3JIsj0cyvyoPu%2BOLLL%2Fi5ESMX5mcugG3RMyqF7BIPvvh9SXIeYKAFGcG3yOqVO2QLiTscTwOnlMQFXKUbZJkDglRj2YZIqosmQNCX%2BzQjngKvnrRIaVuaZfQ%2Fh1wxDNyE7meSW1AEVHxy9uq9sknDsVv%2BHDfzMtx%2FM6h67cZeMJBEoGmgoNi3M5RMXsE1ss0NXfdVZxmsL9t325Mbnsfby9fCD4dUaZOTlngMjGSBdRmltFW1eR6qtmX7lcXcO3e%2BzLxFHv%2BKV2dLgYfVlfQbioea%2BHpztJ8fUK%2BdiSaejB%2FCzxvjJOAWs4L0B30hE2gKGpbe9nm2hOIZNHvKCfovmsE7ATqXlhMSXv2%2Fok1z9wMMbast4jWqG4zWNwQOuFiQ6w7Zyn5j%2BIWqN7c6h2fi811xLw5EKh39gK0X5A1SU6S1QJ2RZ41nBjYZdnldU%2Bxunvx%2F9zZTCjj6e%2BBjqkAUff6KbGIIrZXBs1lTBf1b8SJLJe3bWMA5%2FpMOG0%2FeVfbWKNaJiw62WFPC2nzNWzvKkhT8kfSemKxGOYRG1wF51mrEto7zz80lc1R1KiNBwOOwkuaYUEg2fFs8kIx840uBX9icvh4J9Bg6i%2BOKa0DgGjvY9r9jBg6y8X%2BNDb2JVx8FJ3xqkcHYI9rYb7thYLinvHKXzV9HErwBA90VDJhzltGcSm&X-Amz-Signature=b9d3ca154fa3d827e0bb2315f84ec9183196820d524dd04637c1ea27cf6c928c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPPMOMY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJbeN%2Fd1UpXehqJAeKFO8KstYrIQNPmym%2FDQo390RO%2BQIhAJXicMLih8rN6HrrbvkMZR5TFOAJGvJxgJiAarYmAFLZKv8DCDEQABoMNjM3NDIzMTgzODA1Igzg3OsNTVOZuCJkgHwq3ANzWEe4bktemI6zL208NmVHlNVU6lNpelFq7O03C1p2dTmfhI5RVxsWW8PrC40ZyMSHXQ03R1ZD38eDb4qJh%2BgxvRs9mq%2Bo3pGke59NEjjFrHQ2EqpEgFSSTDwb9Q1iJLOfDZ00Kj%2FBYTdG7Z6xCOhrzKn5ReUfF8lY4VMJ6qzDgURiqBbiM3JIsj0cyvyoPu%2BOLLL%2Fi5ESMX5mcugG3RMyqF7BIPvvh9SXIeYKAFGcG3yOqVO2QLiTscTwOnlMQFXKUbZJkDglRj2YZIqosmQNCX%2BzQjngKvnrRIaVuaZfQ%2Fh1wxDNyE7meSW1AEVHxy9uq9sknDsVv%2BHDfzMtx%2FM6h67cZeMJBEoGmgoNi3M5RMXsE1ss0NXfdVZxmsL9t325Mbnsfby9fCD4dUaZOTlngMjGSBdRmltFW1eR6qtmX7lcXcO3e%2BzLxFHv%2BKV2dLgYfVlfQbioea%2BHpztJ8fUK%2BdiSaejB%2FCzxvjJOAWs4L0B30hE2gKGpbe9nm2hOIZNHvKCfovmsE7ATqXlhMSXv2%2Fok1z9wMMbast4jWqG4zWNwQOuFiQ6w7Zyn5j%2BIWqN7c6h2fi811xLw5EKh39gK0X5A1SU6S1QJ2RZ41nBjYZdnldU%2Bxunvx%2F9zZTCjj6e%2BBjqkAUff6KbGIIrZXBs1lTBf1b8SJLJe3bWMA5%2FpMOG0%2FeVfbWKNaJiw62WFPC2nzNWzvKkhT8kfSemKxGOYRG1wF51mrEto7zz80lc1R1KiNBwOOwkuaYUEg2fFs8kIx840uBX9icvh4J9Bg6i%2BOKa0DgGjvY9r9jBg6y8X%2BNDb2JVx8FJ3xqkcHYI9rYb7thYLinvHKXzV9HErwBA90VDJhzltGcSm&X-Amz-Signature=6329e2e85ce948d1d5366f4a6f505d670f0bbd941d475f65f0a9534514f1e483&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPPMOMY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJbeN%2Fd1UpXehqJAeKFO8KstYrIQNPmym%2FDQo390RO%2BQIhAJXicMLih8rN6HrrbvkMZR5TFOAJGvJxgJiAarYmAFLZKv8DCDEQABoMNjM3NDIzMTgzODA1Igzg3OsNTVOZuCJkgHwq3ANzWEe4bktemI6zL208NmVHlNVU6lNpelFq7O03C1p2dTmfhI5RVxsWW8PrC40ZyMSHXQ03R1ZD38eDb4qJh%2BgxvRs9mq%2Bo3pGke59NEjjFrHQ2EqpEgFSSTDwb9Q1iJLOfDZ00Kj%2FBYTdG7Z6xCOhrzKn5ReUfF8lY4VMJ6qzDgURiqBbiM3JIsj0cyvyoPu%2BOLLL%2Fi5ESMX5mcugG3RMyqF7BIPvvh9SXIeYKAFGcG3yOqVO2QLiTscTwOnlMQFXKUbZJkDglRj2YZIqosmQNCX%2BzQjngKvnrRIaVuaZfQ%2Fh1wxDNyE7meSW1AEVHxy9uq9sknDsVv%2BHDfzMtx%2FM6h67cZeMJBEoGmgoNi3M5RMXsE1ss0NXfdVZxmsL9t325Mbnsfby9fCD4dUaZOTlngMjGSBdRmltFW1eR6qtmX7lcXcO3e%2BzLxFHv%2BKV2dLgYfVlfQbioea%2BHpztJ8fUK%2BdiSaejB%2FCzxvjJOAWs4L0B30hE2gKGpbe9nm2hOIZNHvKCfovmsE7ATqXlhMSXv2%2Fok1z9wMMbast4jWqG4zWNwQOuFiQ6w7Zyn5j%2BIWqN7c6h2fi811xLw5EKh39gK0X5A1SU6S1QJ2RZ41nBjYZdnldU%2Bxunvx%2F9zZTCjj6e%2BBjqkAUff6KbGIIrZXBs1lTBf1b8SJLJe3bWMA5%2FpMOG0%2FeVfbWKNaJiw62WFPC2nzNWzvKkhT8kfSemKxGOYRG1wF51mrEto7zz80lc1R1KiNBwOOwkuaYUEg2fFs8kIx840uBX9icvh4J9Bg6i%2BOKa0DgGjvY9r9jBg6y8X%2BNDb2JVx8FJ3xqkcHYI9rYb7thYLinvHKXzV9HErwBA90VDJhzltGcSm&X-Amz-Signature=1856623be8f84b3aa1d08b7b14744a5c09c9657c1f808655e2e050fce84ba039&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPPMOMY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJbeN%2Fd1UpXehqJAeKFO8KstYrIQNPmym%2FDQo390RO%2BQIhAJXicMLih8rN6HrrbvkMZR5TFOAJGvJxgJiAarYmAFLZKv8DCDEQABoMNjM3NDIzMTgzODA1Igzg3OsNTVOZuCJkgHwq3ANzWEe4bktemI6zL208NmVHlNVU6lNpelFq7O03C1p2dTmfhI5RVxsWW8PrC40ZyMSHXQ03R1ZD38eDb4qJh%2BgxvRs9mq%2Bo3pGke59NEjjFrHQ2EqpEgFSSTDwb9Q1iJLOfDZ00Kj%2FBYTdG7Z6xCOhrzKn5ReUfF8lY4VMJ6qzDgURiqBbiM3JIsj0cyvyoPu%2BOLLL%2Fi5ESMX5mcugG3RMyqF7BIPvvh9SXIeYKAFGcG3yOqVO2QLiTscTwOnlMQFXKUbZJkDglRj2YZIqosmQNCX%2BzQjngKvnrRIaVuaZfQ%2Fh1wxDNyE7meSW1AEVHxy9uq9sknDsVv%2BHDfzMtx%2FM6h67cZeMJBEoGmgoNi3M5RMXsE1ss0NXfdVZxmsL9t325Mbnsfby9fCD4dUaZOTlngMjGSBdRmltFW1eR6qtmX7lcXcO3e%2BzLxFHv%2BKV2dLgYfVlfQbioea%2BHpztJ8fUK%2BdiSaejB%2FCzxvjJOAWs4L0B30hE2gKGpbe9nm2hOIZNHvKCfovmsE7ATqXlhMSXv2%2Fok1z9wMMbast4jWqG4zWNwQOuFiQ6w7Zyn5j%2BIWqN7c6h2fi811xLw5EKh39gK0X5A1SU6S1QJ2RZ41nBjYZdnldU%2Bxunvx%2F9zZTCjj6e%2BBjqkAUff6KbGIIrZXBs1lTBf1b8SJLJe3bWMA5%2FpMOG0%2FeVfbWKNaJiw62WFPC2nzNWzvKkhT8kfSemKxGOYRG1wF51mrEto7zz80lc1R1KiNBwOOwkuaYUEg2fFs8kIx840uBX9icvh4J9Bg6i%2BOKa0DgGjvY9r9jBg6y8X%2BNDb2JVx8FJ3xqkcHYI9rYb7thYLinvHKXzV9HErwBA90VDJhzltGcSm&X-Amz-Signature=076b774115360cc0556f1218d864490e2d149e297203f4c41183825a94326249&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

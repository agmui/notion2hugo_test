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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSOAWQDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO4%2F22HxhUTkD4rh0%2BweU3iFtAYb1M2y2u37JJQ03kQAiEA5tuj142HJPvR1K0K7D7mfaatK3B4qGT%2B7gPtgBSHiLwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF%2Bu6WyWK6gmfOa8FircAweVaWhAkXO4nWQNc%2FNxSGGDRAV%2FZkkF8x93wweYYxoCk7NwhhXjyQvj1A18djZzSTRjbshM7RYazrFKXTxckzqJr8TxDH9ErPa%2BLYo9XVgo2kd5%2FzWfN3mFJt%2FARopMvMTUps1tLeI8OhV78g%2B8GSGI1k6hLUG2MKXEQUqXr7%2BBf6a0NETB5BBCICaIiP88hRMs2%2Bxb5YR9QTXNZhl6MbyOZ7qjvw5ql9bpapFIKGmNcg77gwzqZrYzSQSTYQeft8S9xgxstX4kkzCvBSwQR2qKmfGWuFGCF3GPHWzk41PnYhQ8SSmrtoRPuqWMuvtKmAoa%2ByctSoJhCzq53kN3QSssA5o8W69yrqpURZehL6dW%2FrxLwnCNLnCJob83qxeHgozJS81xASxRJzlUI1xBdq26VWie%2FUcX8HtBwK%2FOWoL7syTxiMCL4CTgF7iPoR1L4N7xC1PXuY3oVl1k7kWultAmcIavmjxhOgxstWBpkpjQQxIlB9l9n6o%2BChHW9Y6Mx2CDS98Qy92BLu7wbvFKvOWR3%2F5vehBIWR34VRJ1gXeX%2BIvUjqQF4yKyh9TAOuQYn%2Fo6zr0tvwgwP3Gv%2FJSSoREyi714OOLjlcTcust2RWM90UOgAaFxJCVnNnGNMOnqur0GOqUB0KWom5MwjcVNIgJPN6%2BmjMULIkYxA7U3ZrBjCYn9jfYfZ3q7XEY%2BUNdjVQGlx4jAQrVGlaZWh09JJrTiWvkadTM3BbGUP5mAHwwaCTZy7I6AP%2Fyg5%2Bl9Bkwf40OIwjbAaCnEH6pWabxo0PHl1F21Z9vrYC%2FLvaHnCbaJRQU3kCGHLh6okd7gfngUBphgH9DwkKW1c9zUhSrOmLic3FRw%2F3FCeHve&X-Amz-Signature=b68b38a4a8464d2e8afbb2a61ec7e7f1072a322f8f198b69173f6feb1de26df4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSOAWQDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO4%2F22HxhUTkD4rh0%2BweU3iFtAYb1M2y2u37JJQ03kQAiEA5tuj142HJPvR1K0K7D7mfaatK3B4qGT%2B7gPtgBSHiLwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF%2Bu6WyWK6gmfOa8FircAweVaWhAkXO4nWQNc%2FNxSGGDRAV%2FZkkF8x93wweYYxoCk7NwhhXjyQvj1A18djZzSTRjbshM7RYazrFKXTxckzqJr8TxDH9ErPa%2BLYo9XVgo2kd5%2FzWfN3mFJt%2FARopMvMTUps1tLeI8OhV78g%2B8GSGI1k6hLUG2MKXEQUqXr7%2BBf6a0NETB5BBCICaIiP88hRMs2%2Bxb5YR9QTXNZhl6MbyOZ7qjvw5ql9bpapFIKGmNcg77gwzqZrYzSQSTYQeft8S9xgxstX4kkzCvBSwQR2qKmfGWuFGCF3GPHWzk41PnYhQ8SSmrtoRPuqWMuvtKmAoa%2ByctSoJhCzq53kN3QSssA5o8W69yrqpURZehL6dW%2FrxLwnCNLnCJob83qxeHgozJS81xASxRJzlUI1xBdq26VWie%2FUcX8HtBwK%2FOWoL7syTxiMCL4CTgF7iPoR1L4N7xC1PXuY3oVl1k7kWultAmcIavmjxhOgxstWBpkpjQQxIlB9l9n6o%2BChHW9Y6Mx2CDS98Qy92BLu7wbvFKvOWR3%2F5vehBIWR34VRJ1gXeX%2BIvUjqQF4yKyh9TAOuQYn%2Fo6zr0tvwgwP3Gv%2FJSSoREyi714OOLjlcTcust2RWM90UOgAaFxJCVnNnGNMOnqur0GOqUB0KWom5MwjcVNIgJPN6%2BmjMULIkYxA7U3ZrBjCYn9jfYfZ3q7XEY%2BUNdjVQGlx4jAQrVGlaZWh09JJrTiWvkadTM3BbGUP5mAHwwaCTZy7I6AP%2Fyg5%2Bl9Bkwf40OIwjbAaCnEH6pWabxo0PHl1F21Z9vrYC%2FLvaHnCbaJRQU3kCGHLh6okd7gfngUBphgH9DwkKW1c9zUhSrOmLic3FRw%2F3FCeHve&X-Amz-Signature=6a3179650abe20656483f80eb7d43244425c96c57bada6829c4ef3901f36ab27&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSOAWQDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO4%2F22HxhUTkD4rh0%2BweU3iFtAYb1M2y2u37JJQ03kQAiEA5tuj142HJPvR1K0K7D7mfaatK3B4qGT%2B7gPtgBSHiLwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF%2Bu6WyWK6gmfOa8FircAweVaWhAkXO4nWQNc%2FNxSGGDRAV%2FZkkF8x93wweYYxoCk7NwhhXjyQvj1A18djZzSTRjbshM7RYazrFKXTxckzqJr8TxDH9ErPa%2BLYo9XVgo2kd5%2FzWfN3mFJt%2FARopMvMTUps1tLeI8OhV78g%2B8GSGI1k6hLUG2MKXEQUqXr7%2BBf6a0NETB5BBCICaIiP88hRMs2%2Bxb5YR9QTXNZhl6MbyOZ7qjvw5ql9bpapFIKGmNcg77gwzqZrYzSQSTYQeft8S9xgxstX4kkzCvBSwQR2qKmfGWuFGCF3GPHWzk41PnYhQ8SSmrtoRPuqWMuvtKmAoa%2ByctSoJhCzq53kN3QSssA5o8W69yrqpURZehL6dW%2FrxLwnCNLnCJob83qxeHgozJS81xASxRJzlUI1xBdq26VWie%2FUcX8HtBwK%2FOWoL7syTxiMCL4CTgF7iPoR1L4N7xC1PXuY3oVl1k7kWultAmcIavmjxhOgxstWBpkpjQQxIlB9l9n6o%2BChHW9Y6Mx2CDS98Qy92BLu7wbvFKvOWR3%2F5vehBIWR34VRJ1gXeX%2BIvUjqQF4yKyh9TAOuQYn%2Fo6zr0tvwgwP3Gv%2FJSSoREyi714OOLjlcTcust2RWM90UOgAaFxJCVnNnGNMOnqur0GOqUB0KWom5MwjcVNIgJPN6%2BmjMULIkYxA7U3ZrBjCYn9jfYfZ3q7XEY%2BUNdjVQGlx4jAQrVGlaZWh09JJrTiWvkadTM3BbGUP5mAHwwaCTZy7I6AP%2Fyg5%2Bl9Bkwf40OIwjbAaCnEH6pWabxo0PHl1F21Z9vrYC%2FLvaHnCbaJRQU3kCGHLh6okd7gfngUBphgH9DwkKW1c9zUhSrOmLic3FRw%2F3FCeHve&X-Amz-Signature=e1cafd32bc1c45eb8b3613e3ecd86ba40964caf9d98139f8a79b0e8358ba506e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSOAWQDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO4%2F22HxhUTkD4rh0%2BweU3iFtAYb1M2y2u37JJQ03kQAiEA5tuj142HJPvR1K0K7D7mfaatK3B4qGT%2B7gPtgBSHiLwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF%2Bu6WyWK6gmfOa8FircAweVaWhAkXO4nWQNc%2FNxSGGDRAV%2FZkkF8x93wweYYxoCk7NwhhXjyQvj1A18djZzSTRjbshM7RYazrFKXTxckzqJr8TxDH9ErPa%2BLYo9XVgo2kd5%2FzWfN3mFJt%2FARopMvMTUps1tLeI8OhV78g%2B8GSGI1k6hLUG2MKXEQUqXr7%2BBf6a0NETB5BBCICaIiP88hRMs2%2Bxb5YR9QTXNZhl6MbyOZ7qjvw5ql9bpapFIKGmNcg77gwzqZrYzSQSTYQeft8S9xgxstX4kkzCvBSwQR2qKmfGWuFGCF3GPHWzk41PnYhQ8SSmrtoRPuqWMuvtKmAoa%2ByctSoJhCzq53kN3QSssA5o8W69yrqpURZehL6dW%2FrxLwnCNLnCJob83qxeHgozJS81xASxRJzlUI1xBdq26VWie%2FUcX8HtBwK%2FOWoL7syTxiMCL4CTgF7iPoR1L4N7xC1PXuY3oVl1k7kWultAmcIavmjxhOgxstWBpkpjQQxIlB9l9n6o%2BChHW9Y6Mx2CDS98Qy92BLu7wbvFKvOWR3%2F5vehBIWR34VRJ1gXeX%2BIvUjqQF4yKyh9TAOuQYn%2Fo6zr0tvwgwP3Gv%2FJSSoREyi714OOLjlcTcust2RWM90UOgAaFxJCVnNnGNMOnqur0GOqUB0KWom5MwjcVNIgJPN6%2BmjMULIkYxA7U3ZrBjCYn9jfYfZ3q7XEY%2BUNdjVQGlx4jAQrVGlaZWh09JJrTiWvkadTM3BbGUP5mAHwwaCTZy7I6AP%2Fyg5%2Bl9Bkwf40OIwjbAaCnEH6pWabxo0PHl1F21Z9vrYC%2FLvaHnCbaJRQU3kCGHLh6okd7gfngUBphgH9DwkKW1c9zUhSrOmLic3FRw%2F3FCeHve&X-Amz-Signature=782aadee37e0dd744aa7a9ba68e4bac890150b7664bad844ae563a2af9548687&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSOAWQDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO4%2F22HxhUTkD4rh0%2BweU3iFtAYb1M2y2u37JJQ03kQAiEA5tuj142HJPvR1K0K7D7mfaatK3B4qGT%2B7gPtgBSHiLwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF%2Bu6WyWK6gmfOa8FircAweVaWhAkXO4nWQNc%2FNxSGGDRAV%2FZkkF8x93wweYYxoCk7NwhhXjyQvj1A18djZzSTRjbshM7RYazrFKXTxckzqJr8TxDH9ErPa%2BLYo9XVgo2kd5%2FzWfN3mFJt%2FARopMvMTUps1tLeI8OhV78g%2B8GSGI1k6hLUG2MKXEQUqXr7%2BBf6a0NETB5BBCICaIiP88hRMs2%2Bxb5YR9QTXNZhl6MbyOZ7qjvw5ql9bpapFIKGmNcg77gwzqZrYzSQSTYQeft8S9xgxstX4kkzCvBSwQR2qKmfGWuFGCF3GPHWzk41PnYhQ8SSmrtoRPuqWMuvtKmAoa%2ByctSoJhCzq53kN3QSssA5o8W69yrqpURZehL6dW%2FrxLwnCNLnCJob83qxeHgozJS81xASxRJzlUI1xBdq26VWie%2FUcX8HtBwK%2FOWoL7syTxiMCL4CTgF7iPoR1L4N7xC1PXuY3oVl1k7kWultAmcIavmjxhOgxstWBpkpjQQxIlB9l9n6o%2BChHW9Y6Mx2CDS98Qy92BLu7wbvFKvOWR3%2F5vehBIWR34VRJ1gXeX%2BIvUjqQF4yKyh9TAOuQYn%2Fo6zr0tvwgwP3Gv%2FJSSoREyi714OOLjlcTcust2RWM90UOgAaFxJCVnNnGNMOnqur0GOqUB0KWom5MwjcVNIgJPN6%2BmjMULIkYxA7U3ZrBjCYn9jfYfZ3q7XEY%2BUNdjVQGlx4jAQrVGlaZWh09JJrTiWvkadTM3BbGUP5mAHwwaCTZy7I6AP%2Fyg5%2Bl9Bkwf40OIwjbAaCnEH6pWabxo0PHl1F21Z9vrYC%2FLvaHnCbaJRQU3kCGHLh6okd7gfngUBphgH9DwkKW1c9zUhSrOmLic3FRw%2F3FCeHve&X-Amz-Signature=d92cfa5a8920c51a62474fee95781a539b106d7d361c14c728c729f4e4d3740f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSOAWQDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO4%2F22HxhUTkD4rh0%2BweU3iFtAYb1M2y2u37JJQ03kQAiEA5tuj142HJPvR1K0K7D7mfaatK3B4qGT%2B7gPtgBSHiLwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF%2Bu6WyWK6gmfOa8FircAweVaWhAkXO4nWQNc%2FNxSGGDRAV%2FZkkF8x93wweYYxoCk7NwhhXjyQvj1A18djZzSTRjbshM7RYazrFKXTxckzqJr8TxDH9ErPa%2BLYo9XVgo2kd5%2FzWfN3mFJt%2FARopMvMTUps1tLeI8OhV78g%2B8GSGI1k6hLUG2MKXEQUqXr7%2BBf6a0NETB5BBCICaIiP88hRMs2%2Bxb5YR9QTXNZhl6MbyOZ7qjvw5ql9bpapFIKGmNcg77gwzqZrYzSQSTYQeft8S9xgxstX4kkzCvBSwQR2qKmfGWuFGCF3GPHWzk41PnYhQ8SSmrtoRPuqWMuvtKmAoa%2ByctSoJhCzq53kN3QSssA5o8W69yrqpURZehL6dW%2FrxLwnCNLnCJob83qxeHgozJS81xASxRJzlUI1xBdq26VWie%2FUcX8HtBwK%2FOWoL7syTxiMCL4CTgF7iPoR1L4N7xC1PXuY3oVl1k7kWultAmcIavmjxhOgxstWBpkpjQQxIlB9l9n6o%2BChHW9Y6Mx2CDS98Qy92BLu7wbvFKvOWR3%2F5vehBIWR34VRJ1gXeX%2BIvUjqQF4yKyh9TAOuQYn%2Fo6zr0tvwgwP3Gv%2FJSSoREyi714OOLjlcTcust2RWM90UOgAaFxJCVnNnGNMOnqur0GOqUB0KWom5MwjcVNIgJPN6%2BmjMULIkYxA7U3ZrBjCYn9jfYfZ3q7XEY%2BUNdjVQGlx4jAQrVGlaZWh09JJrTiWvkadTM3BbGUP5mAHwwaCTZy7I6AP%2Fyg5%2Bl9Bkwf40OIwjbAaCnEH6pWabxo0PHl1F21Z9vrYC%2FLvaHnCbaJRQU3kCGHLh6okd7gfngUBphgH9DwkKW1c9zUhSrOmLic3FRw%2F3FCeHve&X-Amz-Signature=90dba7cfef500c40a8f1e442eea4890dac5734514eac669c923c15bf9629f109&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSOAWQDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO4%2F22HxhUTkD4rh0%2BweU3iFtAYb1M2y2u37JJQ03kQAiEA5tuj142HJPvR1K0K7D7mfaatK3B4qGT%2B7gPtgBSHiLwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF%2Bu6WyWK6gmfOa8FircAweVaWhAkXO4nWQNc%2FNxSGGDRAV%2FZkkF8x93wweYYxoCk7NwhhXjyQvj1A18djZzSTRjbshM7RYazrFKXTxckzqJr8TxDH9ErPa%2BLYo9XVgo2kd5%2FzWfN3mFJt%2FARopMvMTUps1tLeI8OhV78g%2B8GSGI1k6hLUG2MKXEQUqXr7%2BBf6a0NETB5BBCICaIiP88hRMs2%2Bxb5YR9QTXNZhl6MbyOZ7qjvw5ql9bpapFIKGmNcg77gwzqZrYzSQSTYQeft8S9xgxstX4kkzCvBSwQR2qKmfGWuFGCF3GPHWzk41PnYhQ8SSmrtoRPuqWMuvtKmAoa%2ByctSoJhCzq53kN3QSssA5o8W69yrqpURZehL6dW%2FrxLwnCNLnCJob83qxeHgozJS81xASxRJzlUI1xBdq26VWie%2FUcX8HtBwK%2FOWoL7syTxiMCL4CTgF7iPoR1L4N7xC1PXuY3oVl1k7kWultAmcIavmjxhOgxstWBpkpjQQxIlB9l9n6o%2BChHW9Y6Mx2CDS98Qy92BLu7wbvFKvOWR3%2F5vehBIWR34VRJ1gXeX%2BIvUjqQF4yKyh9TAOuQYn%2Fo6zr0tvwgwP3Gv%2FJSSoREyi714OOLjlcTcust2RWM90UOgAaFxJCVnNnGNMOnqur0GOqUB0KWom5MwjcVNIgJPN6%2BmjMULIkYxA7U3ZrBjCYn9jfYfZ3q7XEY%2BUNdjVQGlx4jAQrVGlaZWh09JJrTiWvkadTM3BbGUP5mAHwwaCTZy7I6AP%2Fyg5%2Bl9Bkwf40OIwjbAaCnEH6pWabxo0PHl1F21Z9vrYC%2FLvaHnCbaJRQU3kCGHLh6okd7gfngUBphgH9DwkKW1c9zUhSrOmLic3FRw%2F3FCeHve&X-Amz-Signature=481f12df35932090f2cf8db70b8b5753be829c8ea2ee3d3fe8cfe6504dad657e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

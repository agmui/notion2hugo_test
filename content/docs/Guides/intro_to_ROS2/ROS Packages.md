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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLK3BQL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDkV4teNDmPR6YHtGTiYofvO4yWhrx1mLgj87gaFYWJnQIgcBjxReL84%2BKZ3kaWsNZYrfaT4Rf%2FAsF7ohZurIrzO8EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlNH2i1QmgKOMdHcCrcA4JYrZzjWmBN8aUw7Z4IHgFg%2FMRx7e5Ks5SiWAHEZG83T9Wt9wZ%2FAp7qz3w%2B4WoC%2BkwMWNzKQdUKT5z%2FGzCUnQDIWYTmDktXo8%2BQGsD5u3dg90BthWVpBYLaP7YxxZNJti6C7sLLa1v8wOkL3MZH8mqx5y35DZwA7KUEkdglyzCx1WaBrRNnF5ixMIHeUwTbugQEuUiAsYK0yfEzlGlp0lf2lRoH7wMA9I9Wb%2B3zghNXIcZvIoHYoppfswA3Rco4rXrYT7MnaWPtlbNBxph2OWncZuD87U7hTHCa54Ub1Vum0vngNhHJLxa%2F2LG3JviMMoQY4BtKE0iYHGBcfeXJW8y%2BL2Zlb3LvnVfrYtHeehyxdWvkfdKqwT1biScbrbga9Ys48IC0jFh6Hsw%2FeYxeVQzJGRxPgzLvQOyiHoUg4NP0gI7h2SV64439MqXeXmrUVQSrurHdNGTvP6nAwbu9AWoNOVsA0%2FPzS4vMA6XQ%2F5teR3BmxbsvxnbCdKY7YtNLOmwYyqulYtS%2B7%2B20fPW18vy8vJ6kJ%2FasW%2BZyG1M5nusmmobXMOnCUID8Zvyj%2BGFygo7hsQW%2B8gR%2Byd%2Bi1Egei0aTY5dfwgkfC%2Bp3PEwecNn8fc7%2FRLEn94uxzMu4MJmi0b0GOqUB0vUBMSssPj7ASRl17pFWzlFfih2nDy%2FTKp5lM0a59SloUYhQ%2BTbETDSJ5VI2SbQvi3WEBjxr%2F0pd28CSKYFrY6FSL%2BSVQiPV6EOpUHKN%2BQS8wiXXdq3UlAjTFgI2%2B4ke1O%2BY3tVQNCnURB4lRt3Fb8kaoN1qnguQJpMaiNK3my2mAAxdBcpBeoOiY%2BG0KkbceGcdDXyAm1ymYMqYbQb60WzZCouB&X-Amz-Signature=d1430cf84ccef778b21250818ae91b3e84a14c8c4aa4534b9a3cbfca29cb3465&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLK3BQL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDkV4teNDmPR6YHtGTiYofvO4yWhrx1mLgj87gaFYWJnQIgcBjxReL84%2BKZ3kaWsNZYrfaT4Rf%2FAsF7ohZurIrzO8EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlNH2i1QmgKOMdHcCrcA4JYrZzjWmBN8aUw7Z4IHgFg%2FMRx7e5Ks5SiWAHEZG83T9Wt9wZ%2FAp7qz3w%2B4WoC%2BkwMWNzKQdUKT5z%2FGzCUnQDIWYTmDktXo8%2BQGsD5u3dg90BthWVpBYLaP7YxxZNJti6C7sLLa1v8wOkL3MZH8mqx5y35DZwA7KUEkdglyzCx1WaBrRNnF5ixMIHeUwTbugQEuUiAsYK0yfEzlGlp0lf2lRoH7wMA9I9Wb%2B3zghNXIcZvIoHYoppfswA3Rco4rXrYT7MnaWPtlbNBxph2OWncZuD87U7hTHCa54Ub1Vum0vngNhHJLxa%2F2LG3JviMMoQY4BtKE0iYHGBcfeXJW8y%2BL2Zlb3LvnVfrYtHeehyxdWvkfdKqwT1biScbrbga9Ys48IC0jFh6Hsw%2FeYxeVQzJGRxPgzLvQOyiHoUg4NP0gI7h2SV64439MqXeXmrUVQSrurHdNGTvP6nAwbu9AWoNOVsA0%2FPzS4vMA6XQ%2F5teR3BmxbsvxnbCdKY7YtNLOmwYyqulYtS%2B7%2B20fPW18vy8vJ6kJ%2FasW%2BZyG1M5nusmmobXMOnCUID8Zvyj%2BGFygo7hsQW%2B8gR%2Byd%2Bi1Egei0aTY5dfwgkfC%2Bp3PEwecNn8fc7%2FRLEn94uxzMu4MJmi0b0GOqUB0vUBMSssPj7ASRl17pFWzlFfih2nDy%2FTKp5lM0a59SloUYhQ%2BTbETDSJ5VI2SbQvi3WEBjxr%2F0pd28CSKYFrY6FSL%2BSVQiPV6EOpUHKN%2BQS8wiXXdq3UlAjTFgI2%2B4ke1O%2BY3tVQNCnURB4lRt3Fb8kaoN1qnguQJpMaiNK3my2mAAxdBcpBeoOiY%2BG0KkbceGcdDXyAm1ymYMqYbQb60WzZCouB&X-Amz-Signature=988668ce4301447b6c761956c3ecd38885436534d0bdf1ab1382d626a2a8b06e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLK3BQL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDkV4teNDmPR6YHtGTiYofvO4yWhrx1mLgj87gaFYWJnQIgcBjxReL84%2BKZ3kaWsNZYrfaT4Rf%2FAsF7ohZurIrzO8EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlNH2i1QmgKOMdHcCrcA4JYrZzjWmBN8aUw7Z4IHgFg%2FMRx7e5Ks5SiWAHEZG83T9Wt9wZ%2FAp7qz3w%2B4WoC%2BkwMWNzKQdUKT5z%2FGzCUnQDIWYTmDktXo8%2BQGsD5u3dg90BthWVpBYLaP7YxxZNJti6C7sLLa1v8wOkL3MZH8mqx5y35DZwA7KUEkdglyzCx1WaBrRNnF5ixMIHeUwTbugQEuUiAsYK0yfEzlGlp0lf2lRoH7wMA9I9Wb%2B3zghNXIcZvIoHYoppfswA3Rco4rXrYT7MnaWPtlbNBxph2OWncZuD87U7hTHCa54Ub1Vum0vngNhHJLxa%2F2LG3JviMMoQY4BtKE0iYHGBcfeXJW8y%2BL2Zlb3LvnVfrYtHeehyxdWvkfdKqwT1biScbrbga9Ys48IC0jFh6Hsw%2FeYxeVQzJGRxPgzLvQOyiHoUg4NP0gI7h2SV64439MqXeXmrUVQSrurHdNGTvP6nAwbu9AWoNOVsA0%2FPzS4vMA6XQ%2F5teR3BmxbsvxnbCdKY7YtNLOmwYyqulYtS%2B7%2B20fPW18vy8vJ6kJ%2FasW%2BZyG1M5nusmmobXMOnCUID8Zvyj%2BGFygo7hsQW%2B8gR%2Byd%2Bi1Egei0aTY5dfwgkfC%2Bp3PEwecNn8fc7%2FRLEn94uxzMu4MJmi0b0GOqUB0vUBMSssPj7ASRl17pFWzlFfih2nDy%2FTKp5lM0a59SloUYhQ%2BTbETDSJ5VI2SbQvi3WEBjxr%2F0pd28CSKYFrY6FSL%2BSVQiPV6EOpUHKN%2BQS8wiXXdq3UlAjTFgI2%2B4ke1O%2BY3tVQNCnURB4lRt3Fb8kaoN1qnguQJpMaiNK3my2mAAxdBcpBeoOiY%2BG0KkbceGcdDXyAm1ymYMqYbQb60WzZCouB&X-Amz-Signature=9516a9ba02a0ccc3c1e9273c5f4cc278def3150d765324f224b2e1bdee506eba&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLK3BQL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDkV4teNDmPR6YHtGTiYofvO4yWhrx1mLgj87gaFYWJnQIgcBjxReL84%2BKZ3kaWsNZYrfaT4Rf%2FAsF7ohZurIrzO8EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlNH2i1QmgKOMdHcCrcA4JYrZzjWmBN8aUw7Z4IHgFg%2FMRx7e5Ks5SiWAHEZG83T9Wt9wZ%2FAp7qz3w%2B4WoC%2BkwMWNzKQdUKT5z%2FGzCUnQDIWYTmDktXo8%2BQGsD5u3dg90BthWVpBYLaP7YxxZNJti6C7sLLa1v8wOkL3MZH8mqx5y35DZwA7KUEkdglyzCx1WaBrRNnF5ixMIHeUwTbugQEuUiAsYK0yfEzlGlp0lf2lRoH7wMA9I9Wb%2B3zghNXIcZvIoHYoppfswA3Rco4rXrYT7MnaWPtlbNBxph2OWncZuD87U7hTHCa54Ub1Vum0vngNhHJLxa%2F2LG3JviMMoQY4BtKE0iYHGBcfeXJW8y%2BL2Zlb3LvnVfrYtHeehyxdWvkfdKqwT1biScbrbga9Ys48IC0jFh6Hsw%2FeYxeVQzJGRxPgzLvQOyiHoUg4NP0gI7h2SV64439MqXeXmrUVQSrurHdNGTvP6nAwbu9AWoNOVsA0%2FPzS4vMA6XQ%2F5teR3BmxbsvxnbCdKY7YtNLOmwYyqulYtS%2B7%2B20fPW18vy8vJ6kJ%2FasW%2BZyG1M5nusmmobXMOnCUID8Zvyj%2BGFygo7hsQW%2B8gR%2Byd%2Bi1Egei0aTY5dfwgkfC%2Bp3PEwecNn8fc7%2FRLEn94uxzMu4MJmi0b0GOqUB0vUBMSssPj7ASRl17pFWzlFfih2nDy%2FTKp5lM0a59SloUYhQ%2BTbETDSJ5VI2SbQvi3WEBjxr%2F0pd28CSKYFrY6FSL%2BSVQiPV6EOpUHKN%2BQS8wiXXdq3UlAjTFgI2%2B4ke1O%2BY3tVQNCnURB4lRt3Fb8kaoN1qnguQJpMaiNK3my2mAAxdBcpBeoOiY%2BG0KkbceGcdDXyAm1ymYMqYbQb60WzZCouB&X-Amz-Signature=31df400d5f5345d6e2aa39bfdf35240e245fd6f96077b66f7b2733c320b7ada2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLK3BQL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDkV4teNDmPR6YHtGTiYofvO4yWhrx1mLgj87gaFYWJnQIgcBjxReL84%2BKZ3kaWsNZYrfaT4Rf%2FAsF7ohZurIrzO8EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlNH2i1QmgKOMdHcCrcA4JYrZzjWmBN8aUw7Z4IHgFg%2FMRx7e5Ks5SiWAHEZG83T9Wt9wZ%2FAp7qz3w%2B4WoC%2BkwMWNzKQdUKT5z%2FGzCUnQDIWYTmDktXo8%2BQGsD5u3dg90BthWVpBYLaP7YxxZNJti6C7sLLa1v8wOkL3MZH8mqx5y35DZwA7KUEkdglyzCx1WaBrRNnF5ixMIHeUwTbugQEuUiAsYK0yfEzlGlp0lf2lRoH7wMA9I9Wb%2B3zghNXIcZvIoHYoppfswA3Rco4rXrYT7MnaWPtlbNBxph2OWncZuD87U7hTHCa54Ub1Vum0vngNhHJLxa%2F2LG3JviMMoQY4BtKE0iYHGBcfeXJW8y%2BL2Zlb3LvnVfrYtHeehyxdWvkfdKqwT1biScbrbga9Ys48IC0jFh6Hsw%2FeYxeVQzJGRxPgzLvQOyiHoUg4NP0gI7h2SV64439MqXeXmrUVQSrurHdNGTvP6nAwbu9AWoNOVsA0%2FPzS4vMA6XQ%2F5teR3BmxbsvxnbCdKY7YtNLOmwYyqulYtS%2B7%2B20fPW18vy8vJ6kJ%2FasW%2BZyG1M5nusmmobXMOnCUID8Zvyj%2BGFygo7hsQW%2B8gR%2Byd%2Bi1Egei0aTY5dfwgkfC%2Bp3PEwecNn8fc7%2FRLEn94uxzMu4MJmi0b0GOqUB0vUBMSssPj7ASRl17pFWzlFfih2nDy%2FTKp5lM0a59SloUYhQ%2BTbETDSJ5VI2SbQvi3WEBjxr%2F0pd28CSKYFrY6FSL%2BSVQiPV6EOpUHKN%2BQS8wiXXdq3UlAjTFgI2%2B4ke1O%2BY3tVQNCnURB4lRt3Fb8kaoN1qnguQJpMaiNK3my2mAAxdBcpBeoOiY%2BG0KkbceGcdDXyAm1ymYMqYbQb60WzZCouB&X-Amz-Signature=bd4688d44e35e70bdbe4dea00f5d1d83773b45feb5b9934420b1e0474db2a663&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLK3BQL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDkV4teNDmPR6YHtGTiYofvO4yWhrx1mLgj87gaFYWJnQIgcBjxReL84%2BKZ3kaWsNZYrfaT4Rf%2FAsF7ohZurIrzO8EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlNH2i1QmgKOMdHcCrcA4JYrZzjWmBN8aUw7Z4IHgFg%2FMRx7e5Ks5SiWAHEZG83T9Wt9wZ%2FAp7qz3w%2B4WoC%2BkwMWNzKQdUKT5z%2FGzCUnQDIWYTmDktXo8%2BQGsD5u3dg90BthWVpBYLaP7YxxZNJti6C7sLLa1v8wOkL3MZH8mqx5y35DZwA7KUEkdglyzCx1WaBrRNnF5ixMIHeUwTbugQEuUiAsYK0yfEzlGlp0lf2lRoH7wMA9I9Wb%2B3zghNXIcZvIoHYoppfswA3Rco4rXrYT7MnaWPtlbNBxph2OWncZuD87U7hTHCa54Ub1Vum0vngNhHJLxa%2F2LG3JviMMoQY4BtKE0iYHGBcfeXJW8y%2BL2Zlb3LvnVfrYtHeehyxdWvkfdKqwT1biScbrbga9Ys48IC0jFh6Hsw%2FeYxeVQzJGRxPgzLvQOyiHoUg4NP0gI7h2SV64439MqXeXmrUVQSrurHdNGTvP6nAwbu9AWoNOVsA0%2FPzS4vMA6XQ%2F5teR3BmxbsvxnbCdKY7YtNLOmwYyqulYtS%2B7%2B20fPW18vy8vJ6kJ%2FasW%2BZyG1M5nusmmobXMOnCUID8Zvyj%2BGFygo7hsQW%2B8gR%2Byd%2Bi1Egei0aTY5dfwgkfC%2Bp3PEwecNn8fc7%2FRLEn94uxzMu4MJmi0b0GOqUB0vUBMSssPj7ASRl17pFWzlFfih2nDy%2FTKp5lM0a59SloUYhQ%2BTbETDSJ5VI2SbQvi3WEBjxr%2F0pd28CSKYFrY6FSL%2BSVQiPV6EOpUHKN%2BQS8wiXXdq3UlAjTFgI2%2B4ke1O%2BY3tVQNCnURB4lRt3Fb8kaoN1qnguQJpMaiNK3my2mAAxdBcpBeoOiY%2BG0KkbceGcdDXyAm1ymYMqYbQb60WzZCouB&X-Amz-Signature=1b65b86d7540c3d013a5e55a1ab10e4f181d11d4d86ca0681e7794323af6ee16&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLK3BQL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDkV4teNDmPR6YHtGTiYofvO4yWhrx1mLgj87gaFYWJnQIgcBjxReL84%2BKZ3kaWsNZYrfaT4Rf%2FAsF7ohZurIrzO8EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlNH2i1QmgKOMdHcCrcA4JYrZzjWmBN8aUw7Z4IHgFg%2FMRx7e5Ks5SiWAHEZG83T9Wt9wZ%2FAp7qz3w%2B4WoC%2BkwMWNzKQdUKT5z%2FGzCUnQDIWYTmDktXo8%2BQGsD5u3dg90BthWVpBYLaP7YxxZNJti6C7sLLa1v8wOkL3MZH8mqx5y35DZwA7KUEkdglyzCx1WaBrRNnF5ixMIHeUwTbugQEuUiAsYK0yfEzlGlp0lf2lRoH7wMA9I9Wb%2B3zghNXIcZvIoHYoppfswA3Rco4rXrYT7MnaWPtlbNBxph2OWncZuD87U7hTHCa54Ub1Vum0vngNhHJLxa%2F2LG3JviMMoQY4BtKE0iYHGBcfeXJW8y%2BL2Zlb3LvnVfrYtHeehyxdWvkfdKqwT1biScbrbga9Ys48IC0jFh6Hsw%2FeYxeVQzJGRxPgzLvQOyiHoUg4NP0gI7h2SV64439MqXeXmrUVQSrurHdNGTvP6nAwbu9AWoNOVsA0%2FPzS4vMA6XQ%2F5teR3BmxbsvxnbCdKY7YtNLOmwYyqulYtS%2B7%2B20fPW18vy8vJ6kJ%2FasW%2BZyG1M5nusmmobXMOnCUID8Zvyj%2BGFygo7hsQW%2B8gR%2Byd%2Bi1Egei0aTY5dfwgkfC%2Bp3PEwecNn8fc7%2FRLEn94uxzMu4MJmi0b0GOqUB0vUBMSssPj7ASRl17pFWzlFfih2nDy%2FTKp5lM0a59SloUYhQ%2BTbETDSJ5VI2SbQvi3WEBjxr%2F0pd28CSKYFrY6FSL%2BSVQiPV6EOpUHKN%2BQS8wiXXdq3UlAjTFgI2%2B4ke1O%2BY3tVQNCnURB4lRt3Fb8kaoN1qnguQJpMaiNK3my2mAAxdBcpBeoOiY%2BG0KkbceGcdDXyAm1ymYMqYbQb60WzZCouB&X-Amz-Signature=0ec7e7138366d935daaa8836ad7808c97880e4fdb6bc0ebd9fcd1be73caa5f62&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

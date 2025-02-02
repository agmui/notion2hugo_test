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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BIGYXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0JbVyHKZ3m33bgCC5dDt7Vu880tpvw7dXo%2BVuA7IIvAIgcQePv0vOv8MQWqS9htpRwRvUgg8%2Bt0t77PWOxw6IxJEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpaqRUCYSIvG6LBlSrcA5eALLCKax0nZywyNa8LHpwvhjG3hsPSk64a1xTbYLX%2Fr9FQKVdZlGf66dXAef%2FVe0UKT5efOfOlUwaovYhr90jvG8uvACjXF9JCSxZbSQaB7fwu0czMkS5hh%2FQi%2BNrUnPKZ2n9%2BIxs6BxGZt97NCaxrVqCpLFx0KYXnR3BZY595z0%2F0Af46mQI75lz01lI5TeOyitrcBKR0tpCfYbEMA63LQFyu3bgAW3ATw%2FvE7trieORM9ENABrkRFYoe8whKagZ0T%2BxdKtYbj47EpLUabMbvn4Tfm2TTfLVrBnRLytStt1ux0gb6Nu61%2BnsL8l%2BHcNZPKgX%2FZO2LAlK46cDy20yQP%2FgIrE9Id0OxoxBH7gIuK%2FcTLuSpVmw8tGs3Gj4LpgL3h%2FTD6d5nxjQ78p5uWc9fkUCEq3qz1Te38njzHHe7S0phenqDSZ9jHAawKuuGCUDYHhgEUqbPXix%2FYAKQOQ4hH7DufcgkCLKRlZL7PBgXbjbsxtXkn5hBQe6%2FJBHW%2B2TJEI0y59GKVPNO0QVwajLhFU5LfMCrxGExttHzEG8ntGIimhsDERzNW%2BFpshrQ68D3zopgP8xtCuSwQJVcu%2BGU%2FdeI4scJlAWEWQ8mFqCJ7HjN6G67Q59jcmAbMJ%2Bd%2FLwGOqUBzbHeJgGbZuP4auhu35J5vgLjCCqkADJfdQvc08GqqBQKmqRTbaO8gvHqXpV8tB5DYYujvw7nf%2F5tRCcsOoGfHh3Tgi4mjs3oOp5SJT9ZL4DGTbx%2BzvMN0wKuX79lzyppo0LOsMYzG0MQ88bq8atQK6ZCGELyogOMYiaW%2F8a9J0zq9OM0AiQ1Ex6wJcVcg1Ndb%2BKWdms5FZ5H3zvf0999pGyrhta1&X-Amz-Signature=a33334c0ddf7c8104932c97a36baf2e30b07feefe0316e312a7850571e53233e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BIGYXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0JbVyHKZ3m33bgCC5dDt7Vu880tpvw7dXo%2BVuA7IIvAIgcQePv0vOv8MQWqS9htpRwRvUgg8%2Bt0t77PWOxw6IxJEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpaqRUCYSIvG6LBlSrcA5eALLCKax0nZywyNa8LHpwvhjG3hsPSk64a1xTbYLX%2Fr9FQKVdZlGf66dXAef%2FVe0UKT5efOfOlUwaovYhr90jvG8uvACjXF9JCSxZbSQaB7fwu0czMkS5hh%2FQi%2BNrUnPKZ2n9%2BIxs6BxGZt97NCaxrVqCpLFx0KYXnR3BZY595z0%2F0Af46mQI75lz01lI5TeOyitrcBKR0tpCfYbEMA63LQFyu3bgAW3ATw%2FvE7trieORM9ENABrkRFYoe8whKagZ0T%2BxdKtYbj47EpLUabMbvn4Tfm2TTfLVrBnRLytStt1ux0gb6Nu61%2BnsL8l%2BHcNZPKgX%2FZO2LAlK46cDy20yQP%2FgIrE9Id0OxoxBH7gIuK%2FcTLuSpVmw8tGs3Gj4LpgL3h%2FTD6d5nxjQ78p5uWc9fkUCEq3qz1Te38njzHHe7S0phenqDSZ9jHAawKuuGCUDYHhgEUqbPXix%2FYAKQOQ4hH7DufcgkCLKRlZL7PBgXbjbsxtXkn5hBQe6%2FJBHW%2B2TJEI0y59GKVPNO0QVwajLhFU5LfMCrxGExttHzEG8ntGIimhsDERzNW%2BFpshrQ68D3zopgP8xtCuSwQJVcu%2BGU%2FdeI4scJlAWEWQ8mFqCJ7HjN6G67Q59jcmAbMJ%2Bd%2FLwGOqUBzbHeJgGbZuP4auhu35J5vgLjCCqkADJfdQvc08GqqBQKmqRTbaO8gvHqXpV8tB5DYYujvw7nf%2F5tRCcsOoGfHh3Tgi4mjs3oOp5SJT9ZL4DGTbx%2BzvMN0wKuX79lzyppo0LOsMYzG0MQ88bq8atQK6ZCGELyogOMYiaW%2F8a9J0zq9OM0AiQ1Ex6wJcVcg1Ndb%2BKWdms5FZ5H3zvf0999pGyrhta1&X-Amz-Signature=cf97c2c8a4d899b2df0179f868bd0b0e10363f8e3a5b8c935a78960b8a9cc381&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BIGYXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0JbVyHKZ3m33bgCC5dDt7Vu880tpvw7dXo%2BVuA7IIvAIgcQePv0vOv8MQWqS9htpRwRvUgg8%2Bt0t77PWOxw6IxJEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpaqRUCYSIvG6LBlSrcA5eALLCKax0nZywyNa8LHpwvhjG3hsPSk64a1xTbYLX%2Fr9FQKVdZlGf66dXAef%2FVe0UKT5efOfOlUwaovYhr90jvG8uvACjXF9JCSxZbSQaB7fwu0czMkS5hh%2FQi%2BNrUnPKZ2n9%2BIxs6BxGZt97NCaxrVqCpLFx0KYXnR3BZY595z0%2F0Af46mQI75lz01lI5TeOyitrcBKR0tpCfYbEMA63LQFyu3bgAW3ATw%2FvE7trieORM9ENABrkRFYoe8whKagZ0T%2BxdKtYbj47EpLUabMbvn4Tfm2TTfLVrBnRLytStt1ux0gb6Nu61%2BnsL8l%2BHcNZPKgX%2FZO2LAlK46cDy20yQP%2FgIrE9Id0OxoxBH7gIuK%2FcTLuSpVmw8tGs3Gj4LpgL3h%2FTD6d5nxjQ78p5uWc9fkUCEq3qz1Te38njzHHe7S0phenqDSZ9jHAawKuuGCUDYHhgEUqbPXix%2FYAKQOQ4hH7DufcgkCLKRlZL7PBgXbjbsxtXkn5hBQe6%2FJBHW%2B2TJEI0y59GKVPNO0QVwajLhFU5LfMCrxGExttHzEG8ntGIimhsDERzNW%2BFpshrQ68D3zopgP8xtCuSwQJVcu%2BGU%2FdeI4scJlAWEWQ8mFqCJ7HjN6G67Q59jcmAbMJ%2Bd%2FLwGOqUBzbHeJgGbZuP4auhu35J5vgLjCCqkADJfdQvc08GqqBQKmqRTbaO8gvHqXpV8tB5DYYujvw7nf%2F5tRCcsOoGfHh3Tgi4mjs3oOp5SJT9ZL4DGTbx%2BzvMN0wKuX79lzyppo0LOsMYzG0MQ88bq8atQK6ZCGELyogOMYiaW%2F8a9J0zq9OM0AiQ1Ex6wJcVcg1Ndb%2BKWdms5FZ5H3zvf0999pGyrhta1&X-Amz-Signature=dbc2865db274c9706991b521cfd826982c257b04c5c9e983411cc74bada83136&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BIGYXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0JbVyHKZ3m33bgCC5dDt7Vu880tpvw7dXo%2BVuA7IIvAIgcQePv0vOv8MQWqS9htpRwRvUgg8%2Bt0t77PWOxw6IxJEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpaqRUCYSIvG6LBlSrcA5eALLCKax0nZywyNa8LHpwvhjG3hsPSk64a1xTbYLX%2Fr9FQKVdZlGf66dXAef%2FVe0UKT5efOfOlUwaovYhr90jvG8uvACjXF9JCSxZbSQaB7fwu0czMkS5hh%2FQi%2BNrUnPKZ2n9%2BIxs6BxGZt97NCaxrVqCpLFx0KYXnR3BZY595z0%2F0Af46mQI75lz01lI5TeOyitrcBKR0tpCfYbEMA63LQFyu3bgAW3ATw%2FvE7trieORM9ENABrkRFYoe8whKagZ0T%2BxdKtYbj47EpLUabMbvn4Tfm2TTfLVrBnRLytStt1ux0gb6Nu61%2BnsL8l%2BHcNZPKgX%2FZO2LAlK46cDy20yQP%2FgIrE9Id0OxoxBH7gIuK%2FcTLuSpVmw8tGs3Gj4LpgL3h%2FTD6d5nxjQ78p5uWc9fkUCEq3qz1Te38njzHHe7S0phenqDSZ9jHAawKuuGCUDYHhgEUqbPXix%2FYAKQOQ4hH7DufcgkCLKRlZL7PBgXbjbsxtXkn5hBQe6%2FJBHW%2B2TJEI0y59GKVPNO0QVwajLhFU5LfMCrxGExttHzEG8ntGIimhsDERzNW%2BFpshrQ68D3zopgP8xtCuSwQJVcu%2BGU%2FdeI4scJlAWEWQ8mFqCJ7HjN6G67Q59jcmAbMJ%2Bd%2FLwGOqUBzbHeJgGbZuP4auhu35J5vgLjCCqkADJfdQvc08GqqBQKmqRTbaO8gvHqXpV8tB5DYYujvw7nf%2F5tRCcsOoGfHh3Tgi4mjs3oOp5SJT9ZL4DGTbx%2BzvMN0wKuX79lzyppo0LOsMYzG0MQ88bq8atQK6ZCGELyogOMYiaW%2F8a9J0zq9OM0AiQ1Ex6wJcVcg1Ndb%2BKWdms5FZ5H3zvf0999pGyrhta1&X-Amz-Signature=be33cf54489f23a1311ba8d24c0ac755a4fb3a20068a5dcbd36e24c49d7376cb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BIGYXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0JbVyHKZ3m33bgCC5dDt7Vu880tpvw7dXo%2BVuA7IIvAIgcQePv0vOv8MQWqS9htpRwRvUgg8%2Bt0t77PWOxw6IxJEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpaqRUCYSIvG6LBlSrcA5eALLCKax0nZywyNa8LHpwvhjG3hsPSk64a1xTbYLX%2Fr9FQKVdZlGf66dXAef%2FVe0UKT5efOfOlUwaovYhr90jvG8uvACjXF9JCSxZbSQaB7fwu0czMkS5hh%2FQi%2BNrUnPKZ2n9%2BIxs6BxGZt97NCaxrVqCpLFx0KYXnR3BZY595z0%2F0Af46mQI75lz01lI5TeOyitrcBKR0tpCfYbEMA63LQFyu3bgAW3ATw%2FvE7trieORM9ENABrkRFYoe8whKagZ0T%2BxdKtYbj47EpLUabMbvn4Tfm2TTfLVrBnRLytStt1ux0gb6Nu61%2BnsL8l%2BHcNZPKgX%2FZO2LAlK46cDy20yQP%2FgIrE9Id0OxoxBH7gIuK%2FcTLuSpVmw8tGs3Gj4LpgL3h%2FTD6d5nxjQ78p5uWc9fkUCEq3qz1Te38njzHHe7S0phenqDSZ9jHAawKuuGCUDYHhgEUqbPXix%2FYAKQOQ4hH7DufcgkCLKRlZL7PBgXbjbsxtXkn5hBQe6%2FJBHW%2B2TJEI0y59GKVPNO0QVwajLhFU5LfMCrxGExttHzEG8ntGIimhsDERzNW%2BFpshrQ68D3zopgP8xtCuSwQJVcu%2BGU%2FdeI4scJlAWEWQ8mFqCJ7HjN6G67Q59jcmAbMJ%2Bd%2FLwGOqUBzbHeJgGbZuP4auhu35J5vgLjCCqkADJfdQvc08GqqBQKmqRTbaO8gvHqXpV8tB5DYYujvw7nf%2F5tRCcsOoGfHh3Tgi4mjs3oOp5SJT9ZL4DGTbx%2BzvMN0wKuX79lzyppo0LOsMYzG0MQ88bq8atQK6ZCGELyogOMYiaW%2F8a9J0zq9OM0AiQ1Ex6wJcVcg1Ndb%2BKWdms5FZ5H3zvf0999pGyrhta1&X-Amz-Signature=7498d7b1c2cf5f498e32abd13062d124a14c93b8f88f074be700c4cc0b6a82bc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BIGYXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0JbVyHKZ3m33bgCC5dDt7Vu880tpvw7dXo%2BVuA7IIvAIgcQePv0vOv8MQWqS9htpRwRvUgg8%2Bt0t77PWOxw6IxJEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpaqRUCYSIvG6LBlSrcA5eALLCKax0nZywyNa8LHpwvhjG3hsPSk64a1xTbYLX%2Fr9FQKVdZlGf66dXAef%2FVe0UKT5efOfOlUwaovYhr90jvG8uvACjXF9JCSxZbSQaB7fwu0czMkS5hh%2FQi%2BNrUnPKZ2n9%2BIxs6BxGZt97NCaxrVqCpLFx0KYXnR3BZY595z0%2F0Af46mQI75lz01lI5TeOyitrcBKR0tpCfYbEMA63LQFyu3bgAW3ATw%2FvE7trieORM9ENABrkRFYoe8whKagZ0T%2BxdKtYbj47EpLUabMbvn4Tfm2TTfLVrBnRLytStt1ux0gb6Nu61%2BnsL8l%2BHcNZPKgX%2FZO2LAlK46cDy20yQP%2FgIrE9Id0OxoxBH7gIuK%2FcTLuSpVmw8tGs3Gj4LpgL3h%2FTD6d5nxjQ78p5uWc9fkUCEq3qz1Te38njzHHe7S0phenqDSZ9jHAawKuuGCUDYHhgEUqbPXix%2FYAKQOQ4hH7DufcgkCLKRlZL7PBgXbjbsxtXkn5hBQe6%2FJBHW%2B2TJEI0y59GKVPNO0QVwajLhFU5LfMCrxGExttHzEG8ntGIimhsDERzNW%2BFpshrQ68D3zopgP8xtCuSwQJVcu%2BGU%2FdeI4scJlAWEWQ8mFqCJ7HjN6G67Q59jcmAbMJ%2Bd%2FLwGOqUBzbHeJgGbZuP4auhu35J5vgLjCCqkADJfdQvc08GqqBQKmqRTbaO8gvHqXpV8tB5DYYujvw7nf%2F5tRCcsOoGfHh3Tgi4mjs3oOp5SJT9ZL4DGTbx%2BzvMN0wKuX79lzyppo0LOsMYzG0MQ88bq8atQK6ZCGELyogOMYiaW%2F8a9J0zq9OM0AiQ1Ex6wJcVcg1Ndb%2BKWdms5FZ5H3zvf0999pGyrhta1&X-Amz-Signature=0e3b0e4b8ad530dc9388f988f1a9aa67d69632a4799b9969d240708753519601&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BIGYXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0JbVyHKZ3m33bgCC5dDt7Vu880tpvw7dXo%2BVuA7IIvAIgcQePv0vOv8MQWqS9htpRwRvUgg8%2Bt0t77PWOxw6IxJEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpaqRUCYSIvG6LBlSrcA5eALLCKax0nZywyNa8LHpwvhjG3hsPSk64a1xTbYLX%2Fr9FQKVdZlGf66dXAef%2FVe0UKT5efOfOlUwaovYhr90jvG8uvACjXF9JCSxZbSQaB7fwu0czMkS5hh%2FQi%2BNrUnPKZ2n9%2BIxs6BxGZt97NCaxrVqCpLFx0KYXnR3BZY595z0%2F0Af46mQI75lz01lI5TeOyitrcBKR0tpCfYbEMA63LQFyu3bgAW3ATw%2FvE7trieORM9ENABrkRFYoe8whKagZ0T%2BxdKtYbj47EpLUabMbvn4Tfm2TTfLVrBnRLytStt1ux0gb6Nu61%2BnsL8l%2BHcNZPKgX%2FZO2LAlK46cDy20yQP%2FgIrE9Id0OxoxBH7gIuK%2FcTLuSpVmw8tGs3Gj4LpgL3h%2FTD6d5nxjQ78p5uWc9fkUCEq3qz1Te38njzHHe7S0phenqDSZ9jHAawKuuGCUDYHhgEUqbPXix%2FYAKQOQ4hH7DufcgkCLKRlZL7PBgXbjbsxtXkn5hBQe6%2FJBHW%2B2TJEI0y59GKVPNO0QVwajLhFU5LfMCrxGExttHzEG8ntGIimhsDERzNW%2BFpshrQ68D3zopgP8xtCuSwQJVcu%2BGU%2FdeI4scJlAWEWQ8mFqCJ7HjN6G67Q59jcmAbMJ%2Bd%2FLwGOqUBzbHeJgGbZuP4auhu35J5vgLjCCqkADJfdQvc08GqqBQKmqRTbaO8gvHqXpV8tB5DYYujvw7nf%2F5tRCcsOoGfHh3Tgi4mjs3oOp5SJT9ZL4DGTbx%2BzvMN0wKuX79lzyppo0LOsMYzG0MQ88bq8atQK6ZCGELyogOMYiaW%2F8a9J0zq9OM0AiQ1Ex6wJcVcg1Ndb%2BKWdms5FZ5H3zvf0999pGyrhta1&X-Amz-Signature=bac7387186c56908535af0a8472716fa10e8fda11583f6abdca97625c9d89aab&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

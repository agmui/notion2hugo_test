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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XZU2JJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrUf%2Bwakdw9g52ViVUJz8pA80LvjVU6F%2FGrDEwgc6IfAiBIwC%2BdIw3ECbINrWlMmI4FzkdT9lP9g3cXk902z%2BP7yCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz85E4fwB5H5byLHtKtwDg1i9t6gHGzzDfI7IFW%2FAWYeX%2B2yDicz570sVQbVcHiUKR9uXgCueJGRU9ErnZyKqpXhBES569s6yPUWFyKGvSDr9RKy6Wr1Mx80qDuUVifj9vjhPVGJFin1ZZTKiJHt%2B9jN4HoP3Kc2npHHVlKeeE5UznlDr9kL8B0NtWwqd%2F1wy0J3T9Io9iF%2F%2FyqgS7CMJLzTT%2Bm5Ca4t6RnH1CfYxSsMEAGdkihLtHGeBoRZA7f8FeAOyFotSRtX6FLisNTuyU8AYbtKWeZH%2FAMWNqj7MUTnRjgHDMyvzjGx%2FHjzAabHLkQtUTplNViQMEIv30yL6yASQIK4YhwDdp5ykMtqMfyJw3yiGp6vUx23g2f%2FrYLKT4LT9XavMDv8ZJz4y8tqsJQ6l0UUyEy9we2JjytBBLgovtbxN8rlkvtETNQ%2BaYV1GcOYp%2Bk7b%2BJ%2BZpwydPSmGkBLaWifcuEFjcuBoeGmLU9RP65z3JI%2Bx4hIx%2FR0q3oXaqguHvj3oc7mZxwquLPlDUeNq%2Fmk25KtwkFVVU7OhuuZhs7mFV9%2B3nKreigtnyIf5mZufikcmWNjUKW5yUAoiPqJjjym92SA%2BiKlMj5JMhKcuWeMdnN62t5pJ1KmKJ07FNxaRPEfe%2B8ZTT9cw8KLqwgY6pgFLdh0uIRHmCeVH1zYsr7kQCJCXhk8jkfOeZclBVTw56bDNdqEZ%2Fax8NiqSyv1fvPZb0urL6nK%2Fkxs7Rk3J99Tve952C8sM2vDocZbhVIsRhzOL6USZIR9sEh%2FfZ5g8Rrq1pnDv5hg1981u%2FGXlMuDRqbl9VJWWnUeCywMS5wd5kRcpxjG6Ocp2mJDEy%2Fle%2Foc2onEMkOuAZ%2B3xyz6UyM6F%2BdscjlAN&X-Amz-Signature=120c25a322489d00f2ef57b80f4d6952e5c651b48c37382217b94f89c063ddf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XZU2JJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrUf%2Bwakdw9g52ViVUJz8pA80LvjVU6F%2FGrDEwgc6IfAiBIwC%2BdIw3ECbINrWlMmI4FzkdT9lP9g3cXk902z%2BP7yCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz85E4fwB5H5byLHtKtwDg1i9t6gHGzzDfI7IFW%2FAWYeX%2B2yDicz570sVQbVcHiUKR9uXgCueJGRU9ErnZyKqpXhBES569s6yPUWFyKGvSDr9RKy6Wr1Mx80qDuUVifj9vjhPVGJFin1ZZTKiJHt%2B9jN4HoP3Kc2npHHVlKeeE5UznlDr9kL8B0NtWwqd%2F1wy0J3T9Io9iF%2F%2FyqgS7CMJLzTT%2Bm5Ca4t6RnH1CfYxSsMEAGdkihLtHGeBoRZA7f8FeAOyFotSRtX6FLisNTuyU8AYbtKWeZH%2FAMWNqj7MUTnRjgHDMyvzjGx%2FHjzAabHLkQtUTplNViQMEIv30yL6yASQIK4YhwDdp5ykMtqMfyJw3yiGp6vUx23g2f%2FrYLKT4LT9XavMDv8ZJz4y8tqsJQ6l0UUyEy9we2JjytBBLgovtbxN8rlkvtETNQ%2BaYV1GcOYp%2Bk7b%2BJ%2BZpwydPSmGkBLaWifcuEFjcuBoeGmLU9RP65z3JI%2Bx4hIx%2FR0q3oXaqguHvj3oc7mZxwquLPlDUeNq%2Fmk25KtwkFVVU7OhuuZhs7mFV9%2B3nKreigtnyIf5mZufikcmWNjUKW5yUAoiPqJjjym92SA%2BiKlMj5JMhKcuWeMdnN62t5pJ1KmKJ07FNxaRPEfe%2B8ZTT9cw8KLqwgY6pgFLdh0uIRHmCeVH1zYsr7kQCJCXhk8jkfOeZclBVTw56bDNdqEZ%2Fax8NiqSyv1fvPZb0urL6nK%2Fkxs7Rk3J99Tve952C8sM2vDocZbhVIsRhzOL6USZIR9sEh%2FfZ5g8Rrq1pnDv5hg1981u%2FGXlMuDRqbl9VJWWnUeCywMS5wd5kRcpxjG6Ocp2mJDEy%2Fle%2Foc2onEMkOuAZ%2B3xyz6UyM6F%2BdscjlAN&X-Amz-Signature=f5c43cbe66cf156f00079d731b3db8852aadfcd20e6ff73843bf2d10fe6b7585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XZU2JJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrUf%2Bwakdw9g52ViVUJz8pA80LvjVU6F%2FGrDEwgc6IfAiBIwC%2BdIw3ECbINrWlMmI4FzkdT9lP9g3cXk902z%2BP7yCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz85E4fwB5H5byLHtKtwDg1i9t6gHGzzDfI7IFW%2FAWYeX%2B2yDicz570sVQbVcHiUKR9uXgCueJGRU9ErnZyKqpXhBES569s6yPUWFyKGvSDr9RKy6Wr1Mx80qDuUVifj9vjhPVGJFin1ZZTKiJHt%2B9jN4HoP3Kc2npHHVlKeeE5UznlDr9kL8B0NtWwqd%2F1wy0J3T9Io9iF%2F%2FyqgS7CMJLzTT%2Bm5Ca4t6RnH1CfYxSsMEAGdkihLtHGeBoRZA7f8FeAOyFotSRtX6FLisNTuyU8AYbtKWeZH%2FAMWNqj7MUTnRjgHDMyvzjGx%2FHjzAabHLkQtUTplNViQMEIv30yL6yASQIK4YhwDdp5ykMtqMfyJw3yiGp6vUx23g2f%2FrYLKT4LT9XavMDv8ZJz4y8tqsJQ6l0UUyEy9we2JjytBBLgovtbxN8rlkvtETNQ%2BaYV1GcOYp%2Bk7b%2BJ%2BZpwydPSmGkBLaWifcuEFjcuBoeGmLU9RP65z3JI%2Bx4hIx%2FR0q3oXaqguHvj3oc7mZxwquLPlDUeNq%2Fmk25KtwkFVVU7OhuuZhs7mFV9%2B3nKreigtnyIf5mZufikcmWNjUKW5yUAoiPqJjjym92SA%2BiKlMj5JMhKcuWeMdnN62t5pJ1KmKJ07FNxaRPEfe%2B8ZTT9cw8KLqwgY6pgFLdh0uIRHmCeVH1zYsr7kQCJCXhk8jkfOeZclBVTw56bDNdqEZ%2Fax8NiqSyv1fvPZb0urL6nK%2Fkxs7Rk3J99Tve952C8sM2vDocZbhVIsRhzOL6USZIR9sEh%2FfZ5g8Rrq1pnDv5hg1981u%2FGXlMuDRqbl9VJWWnUeCywMS5wd5kRcpxjG6Ocp2mJDEy%2Fle%2Foc2onEMkOuAZ%2B3xyz6UyM6F%2BdscjlAN&X-Amz-Signature=b06a28eb5863c99df68dd584022bd30cdad5b0bd1ae8fa895203866e1ec3e29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XZU2JJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrUf%2Bwakdw9g52ViVUJz8pA80LvjVU6F%2FGrDEwgc6IfAiBIwC%2BdIw3ECbINrWlMmI4FzkdT9lP9g3cXk902z%2BP7yCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz85E4fwB5H5byLHtKtwDg1i9t6gHGzzDfI7IFW%2FAWYeX%2B2yDicz570sVQbVcHiUKR9uXgCueJGRU9ErnZyKqpXhBES569s6yPUWFyKGvSDr9RKy6Wr1Mx80qDuUVifj9vjhPVGJFin1ZZTKiJHt%2B9jN4HoP3Kc2npHHVlKeeE5UznlDr9kL8B0NtWwqd%2F1wy0J3T9Io9iF%2F%2FyqgS7CMJLzTT%2Bm5Ca4t6RnH1CfYxSsMEAGdkihLtHGeBoRZA7f8FeAOyFotSRtX6FLisNTuyU8AYbtKWeZH%2FAMWNqj7MUTnRjgHDMyvzjGx%2FHjzAabHLkQtUTplNViQMEIv30yL6yASQIK4YhwDdp5ykMtqMfyJw3yiGp6vUx23g2f%2FrYLKT4LT9XavMDv8ZJz4y8tqsJQ6l0UUyEy9we2JjytBBLgovtbxN8rlkvtETNQ%2BaYV1GcOYp%2Bk7b%2BJ%2BZpwydPSmGkBLaWifcuEFjcuBoeGmLU9RP65z3JI%2Bx4hIx%2FR0q3oXaqguHvj3oc7mZxwquLPlDUeNq%2Fmk25KtwkFVVU7OhuuZhs7mFV9%2B3nKreigtnyIf5mZufikcmWNjUKW5yUAoiPqJjjym92SA%2BiKlMj5JMhKcuWeMdnN62t5pJ1KmKJ07FNxaRPEfe%2B8ZTT9cw8KLqwgY6pgFLdh0uIRHmCeVH1zYsr7kQCJCXhk8jkfOeZclBVTw56bDNdqEZ%2Fax8NiqSyv1fvPZb0urL6nK%2Fkxs7Rk3J99Tve952C8sM2vDocZbhVIsRhzOL6USZIR9sEh%2FfZ5g8Rrq1pnDv5hg1981u%2FGXlMuDRqbl9VJWWnUeCywMS5wd5kRcpxjG6Ocp2mJDEy%2Fle%2Foc2onEMkOuAZ%2B3xyz6UyM6F%2BdscjlAN&X-Amz-Signature=b986af368d136d7bf36fb9106099dae501215e8d74079c2326d12222f66c9b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XZU2JJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrUf%2Bwakdw9g52ViVUJz8pA80LvjVU6F%2FGrDEwgc6IfAiBIwC%2BdIw3ECbINrWlMmI4FzkdT9lP9g3cXk902z%2BP7yCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz85E4fwB5H5byLHtKtwDg1i9t6gHGzzDfI7IFW%2FAWYeX%2B2yDicz570sVQbVcHiUKR9uXgCueJGRU9ErnZyKqpXhBES569s6yPUWFyKGvSDr9RKy6Wr1Mx80qDuUVifj9vjhPVGJFin1ZZTKiJHt%2B9jN4HoP3Kc2npHHVlKeeE5UznlDr9kL8B0NtWwqd%2F1wy0J3T9Io9iF%2F%2FyqgS7CMJLzTT%2Bm5Ca4t6RnH1CfYxSsMEAGdkihLtHGeBoRZA7f8FeAOyFotSRtX6FLisNTuyU8AYbtKWeZH%2FAMWNqj7MUTnRjgHDMyvzjGx%2FHjzAabHLkQtUTplNViQMEIv30yL6yASQIK4YhwDdp5ykMtqMfyJw3yiGp6vUx23g2f%2FrYLKT4LT9XavMDv8ZJz4y8tqsJQ6l0UUyEy9we2JjytBBLgovtbxN8rlkvtETNQ%2BaYV1GcOYp%2Bk7b%2BJ%2BZpwydPSmGkBLaWifcuEFjcuBoeGmLU9RP65z3JI%2Bx4hIx%2FR0q3oXaqguHvj3oc7mZxwquLPlDUeNq%2Fmk25KtwkFVVU7OhuuZhs7mFV9%2B3nKreigtnyIf5mZufikcmWNjUKW5yUAoiPqJjjym92SA%2BiKlMj5JMhKcuWeMdnN62t5pJ1KmKJ07FNxaRPEfe%2B8ZTT9cw8KLqwgY6pgFLdh0uIRHmCeVH1zYsr7kQCJCXhk8jkfOeZclBVTw56bDNdqEZ%2Fax8NiqSyv1fvPZb0urL6nK%2Fkxs7Rk3J99Tve952C8sM2vDocZbhVIsRhzOL6USZIR9sEh%2FfZ5g8Rrq1pnDv5hg1981u%2FGXlMuDRqbl9VJWWnUeCywMS5wd5kRcpxjG6Ocp2mJDEy%2Fle%2Foc2onEMkOuAZ%2B3xyz6UyM6F%2BdscjlAN&X-Amz-Signature=7fa1bbd2767224eeca71f4620d11d95045c3a582fbed603372f1304b2a7e95d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XZU2JJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrUf%2Bwakdw9g52ViVUJz8pA80LvjVU6F%2FGrDEwgc6IfAiBIwC%2BdIw3ECbINrWlMmI4FzkdT9lP9g3cXk902z%2BP7yCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz85E4fwB5H5byLHtKtwDg1i9t6gHGzzDfI7IFW%2FAWYeX%2B2yDicz570sVQbVcHiUKR9uXgCueJGRU9ErnZyKqpXhBES569s6yPUWFyKGvSDr9RKy6Wr1Mx80qDuUVifj9vjhPVGJFin1ZZTKiJHt%2B9jN4HoP3Kc2npHHVlKeeE5UznlDr9kL8B0NtWwqd%2F1wy0J3T9Io9iF%2F%2FyqgS7CMJLzTT%2Bm5Ca4t6RnH1CfYxSsMEAGdkihLtHGeBoRZA7f8FeAOyFotSRtX6FLisNTuyU8AYbtKWeZH%2FAMWNqj7MUTnRjgHDMyvzjGx%2FHjzAabHLkQtUTplNViQMEIv30yL6yASQIK4YhwDdp5ykMtqMfyJw3yiGp6vUx23g2f%2FrYLKT4LT9XavMDv8ZJz4y8tqsJQ6l0UUyEy9we2JjytBBLgovtbxN8rlkvtETNQ%2BaYV1GcOYp%2Bk7b%2BJ%2BZpwydPSmGkBLaWifcuEFjcuBoeGmLU9RP65z3JI%2Bx4hIx%2FR0q3oXaqguHvj3oc7mZxwquLPlDUeNq%2Fmk25KtwkFVVU7OhuuZhs7mFV9%2B3nKreigtnyIf5mZufikcmWNjUKW5yUAoiPqJjjym92SA%2BiKlMj5JMhKcuWeMdnN62t5pJ1KmKJ07FNxaRPEfe%2B8ZTT9cw8KLqwgY6pgFLdh0uIRHmCeVH1zYsr7kQCJCXhk8jkfOeZclBVTw56bDNdqEZ%2Fax8NiqSyv1fvPZb0urL6nK%2Fkxs7Rk3J99Tve952C8sM2vDocZbhVIsRhzOL6USZIR9sEh%2FfZ5g8Rrq1pnDv5hg1981u%2FGXlMuDRqbl9VJWWnUeCywMS5wd5kRcpxjG6Ocp2mJDEy%2Fle%2Foc2onEMkOuAZ%2B3xyz6UyM6F%2BdscjlAN&X-Amz-Signature=671e9c26e73762a337d0595fa9614c5dc42e5ed67e76526d62851f57ed6fa7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XZU2JJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrUf%2Bwakdw9g52ViVUJz8pA80LvjVU6F%2FGrDEwgc6IfAiBIwC%2BdIw3ECbINrWlMmI4FzkdT9lP9g3cXk902z%2BP7yCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz85E4fwB5H5byLHtKtwDg1i9t6gHGzzDfI7IFW%2FAWYeX%2B2yDicz570sVQbVcHiUKR9uXgCueJGRU9ErnZyKqpXhBES569s6yPUWFyKGvSDr9RKy6Wr1Mx80qDuUVifj9vjhPVGJFin1ZZTKiJHt%2B9jN4HoP3Kc2npHHVlKeeE5UznlDr9kL8B0NtWwqd%2F1wy0J3T9Io9iF%2F%2FyqgS7CMJLzTT%2Bm5Ca4t6RnH1CfYxSsMEAGdkihLtHGeBoRZA7f8FeAOyFotSRtX6FLisNTuyU8AYbtKWeZH%2FAMWNqj7MUTnRjgHDMyvzjGx%2FHjzAabHLkQtUTplNViQMEIv30yL6yASQIK4YhwDdp5ykMtqMfyJw3yiGp6vUx23g2f%2FrYLKT4LT9XavMDv8ZJz4y8tqsJQ6l0UUyEy9we2JjytBBLgovtbxN8rlkvtETNQ%2BaYV1GcOYp%2Bk7b%2BJ%2BZpwydPSmGkBLaWifcuEFjcuBoeGmLU9RP65z3JI%2Bx4hIx%2FR0q3oXaqguHvj3oc7mZxwquLPlDUeNq%2Fmk25KtwkFVVU7OhuuZhs7mFV9%2B3nKreigtnyIf5mZufikcmWNjUKW5yUAoiPqJjjym92SA%2BiKlMj5JMhKcuWeMdnN62t5pJ1KmKJ07FNxaRPEfe%2B8ZTT9cw8KLqwgY6pgFLdh0uIRHmCeVH1zYsr7kQCJCXhk8jkfOeZclBVTw56bDNdqEZ%2Fax8NiqSyv1fvPZb0urL6nK%2Fkxs7Rk3J99Tve952C8sM2vDocZbhVIsRhzOL6USZIR9sEh%2FfZ5g8Rrq1pnDv5hg1981u%2FGXlMuDRqbl9VJWWnUeCywMS5wd5kRcpxjG6Ocp2mJDEy%2Fle%2Foc2onEMkOuAZ%2B3xyz6UyM6F%2BdscjlAN&X-Amz-Signature=5758855c371b9e7e77d944d3da8ed88350e9116cd9753117fc40c4eea8cc3910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5YFGEX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIZYH5TkVka1rvs3R4bWjXRu%2Bf%2BNfUGKl8d2KoW%2BG1cAiEA2f31kOERrje1tpN%2FM0q6zCz22FQcnLNaLHiiL3jwZqkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfv%2F1cxen%2FUs6MWfCrcA%2BDixUDHON2NNk9nxkmpA6tbTvNYY26tiG44OPEYrVXcrtswYUEf8XMSlCW2QVVGeu9MhqGWDnbRT%2FOIrnL1cjR02l2uAUoWvo30ZqGtiIETp3Qlq9T%2BOo4ag2jBsz7BWwI2R4yU6TkwUH1jqYGk%2FMNu771dIaiwF%2FsptgNJjcb7kPSEJpN7PCLamSSl8KzSwRZq5Urnk2sEMsLOjy4xKK5y%2BHFzfxd0RyHtOUAEJVOaQeTgtcf5RvBzRVJr7cKwQd6iW1Bo7g9%2BdgIy9Ysw%2B7w%2FjLVb7Q42FoT4Ek2i28mkpGmE0PJpUdEIqLdRfy8%2F2iKI%2BvR8KlvB7g6M4T1TTke1ITIShyMHCxrwJmg1GRtXh62rg63FnX%2Bmw4q%2BIhzZNJ%2BSdmZ8irsFC%2BRPmoCilZug63YIZG2AJCfieZ2ZquNI3ZpIuoYSNSzOu%2BRcxek0JSgylBeDWRD%2B0L2l0w4g%2BHUwzwu3OuFAVW%2B93oxfxW2%2BRo1lEgJJpOTsJVJyzjNYH8eZxy0Ynehxj%2BwSjHTtQ3vKFempR6rBa%2F6fTG7PGGhgmR4WXoJT8QRm1dA9bDOYxjwQyrXa8f4k0fz9%2Bj6WqU2DBs0Esn2jrqCVeDjPjIIt41ncZiHB9G75nv55MOb%2Bhb8GOqUBfkKEO2%2Bbam1cuYBYIyTlT%2FniaZpQjPcGZ1FM5aogBMAhjnmxJf7CGVKIYEdaM9sJ4tdhW4Hulj%2FsOEYKu6oZBkEey9lpgALp7G6QX05DufQH2XCgv3HmgvV7DtzBkVVs5b7uNqGWHq6RH9OrDIguG28sQ9eSW3oF4fRlM3lPQhabijtAZFqmtvRvQS0CPjFuoMYDoXazO8c%2B%2FqgGNcuz2m8F3TxK&X-Amz-Signature=53e37ed55b4127b19ccf14483164165bd251f036364fcafb691540c2646aba02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5YFGEX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIZYH5TkVka1rvs3R4bWjXRu%2Bf%2BNfUGKl8d2KoW%2BG1cAiEA2f31kOERrje1tpN%2FM0q6zCz22FQcnLNaLHiiL3jwZqkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfv%2F1cxen%2FUs6MWfCrcA%2BDixUDHON2NNk9nxkmpA6tbTvNYY26tiG44OPEYrVXcrtswYUEf8XMSlCW2QVVGeu9MhqGWDnbRT%2FOIrnL1cjR02l2uAUoWvo30ZqGtiIETp3Qlq9T%2BOo4ag2jBsz7BWwI2R4yU6TkwUH1jqYGk%2FMNu771dIaiwF%2FsptgNJjcb7kPSEJpN7PCLamSSl8KzSwRZq5Urnk2sEMsLOjy4xKK5y%2BHFzfxd0RyHtOUAEJVOaQeTgtcf5RvBzRVJr7cKwQd6iW1Bo7g9%2BdgIy9Ysw%2B7w%2FjLVb7Q42FoT4Ek2i28mkpGmE0PJpUdEIqLdRfy8%2F2iKI%2BvR8KlvB7g6M4T1TTke1ITIShyMHCxrwJmg1GRtXh62rg63FnX%2Bmw4q%2BIhzZNJ%2BSdmZ8irsFC%2BRPmoCilZug63YIZG2AJCfieZ2ZquNI3ZpIuoYSNSzOu%2BRcxek0JSgylBeDWRD%2B0L2l0w4g%2BHUwzwu3OuFAVW%2B93oxfxW2%2BRo1lEgJJpOTsJVJyzjNYH8eZxy0Ynehxj%2BwSjHTtQ3vKFempR6rBa%2F6fTG7PGGhgmR4WXoJT8QRm1dA9bDOYxjwQyrXa8f4k0fz9%2Bj6WqU2DBs0Esn2jrqCVeDjPjIIt41ncZiHB9G75nv55MOb%2Bhb8GOqUBfkKEO2%2Bbam1cuYBYIyTlT%2FniaZpQjPcGZ1FM5aogBMAhjnmxJf7CGVKIYEdaM9sJ4tdhW4Hulj%2FsOEYKu6oZBkEey9lpgALp7G6QX05DufQH2XCgv3HmgvV7DtzBkVVs5b7uNqGWHq6RH9OrDIguG28sQ9eSW3oF4fRlM3lPQhabijtAZFqmtvRvQS0CPjFuoMYDoXazO8c%2B%2FqgGNcuz2m8F3TxK&X-Amz-Signature=c1a9efb6db4a0bd797e5820a3e2c84979fdf05b0283e6cccc9beaf4cc8c70886&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5YFGEX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIZYH5TkVka1rvs3R4bWjXRu%2Bf%2BNfUGKl8d2KoW%2BG1cAiEA2f31kOERrje1tpN%2FM0q6zCz22FQcnLNaLHiiL3jwZqkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfv%2F1cxen%2FUs6MWfCrcA%2BDixUDHON2NNk9nxkmpA6tbTvNYY26tiG44OPEYrVXcrtswYUEf8XMSlCW2QVVGeu9MhqGWDnbRT%2FOIrnL1cjR02l2uAUoWvo30ZqGtiIETp3Qlq9T%2BOo4ag2jBsz7BWwI2R4yU6TkwUH1jqYGk%2FMNu771dIaiwF%2FsptgNJjcb7kPSEJpN7PCLamSSl8KzSwRZq5Urnk2sEMsLOjy4xKK5y%2BHFzfxd0RyHtOUAEJVOaQeTgtcf5RvBzRVJr7cKwQd6iW1Bo7g9%2BdgIy9Ysw%2B7w%2FjLVb7Q42FoT4Ek2i28mkpGmE0PJpUdEIqLdRfy8%2F2iKI%2BvR8KlvB7g6M4T1TTke1ITIShyMHCxrwJmg1GRtXh62rg63FnX%2Bmw4q%2BIhzZNJ%2BSdmZ8irsFC%2BRPmoCilZug63YIZG2AJCfieZ2ZquNI3ZpIuoYSNSzOu%2BRcxek0JSgylBeDWRD%2B0L2l0w4g%2BHUwzwu3OuFAVW%2B93oxfxW2%2BRo1lEgJJpOTsJVJyzjNYH8eZxy0Ynehxj%2BwSjHTtQ3vKFempR6rBa%2F6fTG7PGGhgmR4WXoJT8QRm1dA9bDOYxjwQyrXa8f4k0fz9%2Bj6WqU2DBs0Esn2jrqCVeDjPjIIt41ncZiHB9G75nv55MOb%2Bhb8GOqUBfkKEO2%2Bbam1cuYBYIyTlT%2FniaZpQjPcGZ1FM5aogBMAhjnmxJf7CGVKIYEdaM9sJ4tdhW4Hulj%2FsOEYKu6oZBkEey9lpgALp7G6QX05DufQH2XCgv3HmgvV7DtzBkVVs5b7uNqGWHq6RH9OrDIguG28sQ9eSW3oF4fRlM3lPQhabijtAZFqmtvRvQS0CPjFuoMYDoXazO8c%2B%2FqgGNcuz2m8F3TxK&X-Amz-Signature=92ad580d18a49a65ebac23b12c030e2fd3fc4794dd95b6b4d6c8411a89b865d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5YFGEX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIZYH5TkVka1rvs3R4bWjXRu%2Bf%2BNfUGKl8d2KoW%2BG1cAiEA2f31kOERrje1tpN%2FM0q6zCz22FQcnLNaLHiiL3jwZqkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfv%2F1cxen%2FUs6MWfCrcA%2BDixUDHON2NNk9nxkmpA6tbTvNYY26tiG44OPEYrVXcrtswYUEf8XMSlCW2QVVGeu9MhqGWDnbRT%2FOIrnL1cjR02l2uAUoWvo30ZqGtiIETp3Qlq9T%2BOo4ag2jBsz7BWwI2R4yU6TkwUH1jqYGk%2FMNu771dIaiwF%2FsptgNJjcb7kPSEJpN7PCLamSSl8KzSwRZq5Urnk2sEMsLOjy4xKK5y%2BHFzfxd0RyHtOUAEJVOaQeTgtcf5RvBzRVJr7cKwQd6iW1Bo7g9%2BdgIy9Ysw%2B7w%2FjLVb7Q42FoT4Ek2i28mkpGmE0PJpUdEIqLdRfy8%2F2iKI%2BvR8KlvB7g6M4T1TTke1ITIShyMHCxrwJmg1GRtXh62rg63FnX%2Bmw4q%2BIhzZNJ%2BSdmZ8irsFC%2BRPmoCilZug63YIZG2AJCfieZ2ZquNI3ZpIuoYSNSzOu%2BRcxek0JSgylBeDWRD%2B0L2l0w4g%2BHUwzwu3OuFAVW%2B93oxfxW2%2BRo1lEgJJpOTsJVJyzjNYH8eZxy0Ynehxj%2BwSjHTtQ3vKFempR6rBa%2F6fTG7PGGhgmR4WXoJT8QRm1dA9bDOYxjwQyrXa8f4k0fz9%2Bj6WqU2DBs0Esn2jrqCVeDjPjIIt41ncZiHB9G75nv55MOb%2Bhb8GOqUBfkKEO2%2Bbam1cuYBYIyTlT%2FniaZpQjPcGZ1FM5aogBMAhjnmxJf7CGVKIYEdaM9sJ4tdhW4Hulj%2FsOEYKu6oZBkEey9lpgALp7G6QX05DufQH2XCgv3HmgvV7DtzBkVVs5b7uNqGWHq6RH9OrDIguG28sQ9eSW3oF4fRlM3lPQhabijtAZFqmtvRvQS0CPjFuoMYDoXazO8c%2B%2FqgGNcuz2m8F3TxK&X-Amz-Signature=bece7e69ec47cff4cbc1c3784db78174d1e85820ea38902da59235da08f260ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5YFGEX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIZYH5TkVka1rvs3R4bWjXRu%2Bf%2BNfUGKl8d2KoW%2BG1cAiEA2f31kOERrje1tpN%2FM0q6zCz22FQcnLNaLHiiL3jwZqkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfv%2F1cxen%2FUs6MWfCrcA%2BDixUDHON2NNk9nxkmpA6tbTvNYY26tiG44OPEYrVXcrtswYUEf8XMSlCW2QVVGeu9MhqGWDnbRT%2FOIrnL1cjR02l2uAUoWvo30ZqGtiIETp3Qlq9T%2BOo4ag2jBsz7BWwI2R4yU6TkwUH1jqYGk%2FMNu771dIaiwF%2FsptgNJjcb7kPSEJpN7PCLamSSl8KzSwRZq5Urnk2sEMsLOjy4xKK5y%2BHFzfxd0RyHtOUAEJVOaQeTgtcf5RvBzRVJr7cKwQd6iW1Bo7g9%2BdgIy9Ysw%2B7w%2FjLVb7Q42FoT4Ek2i28mkpGmE0PJpUdEIqLdRfy8%2F2iKI%2BvR8KlvB7g6M4T1TTke1ITIShyMHCxrwJmg1GRtXh62rg63FnX%2Bmw4q%2BIhzZNJ%2BSdmZ8irsFC%2BRPmoCilZug63YIZG2AJCfieZ2ZquNI3ZpIuoYSNSzOu%2BRcxek0JSgylBeDWRD%2B0L2l0w4g%2BHUwzwu3OuFAVW%2B93oxfxW2%2BRo1lEgJJpOTsJVJyzjNYH8eZxy0Ynehxj%2BwSjHTtQ3vKFempR6rBa%2F6fTG7PGGhgmR4WXoJT8QRm1dA9bDOYxjwQyrXa8f4k0fz9%2Bj6WqU2DBs0Esn2jrqCVeDjPjIIt41ncZiHB9G75nv55MOb%2Bhb8GOqUBfkKEO2%2Bbam1cuYBYIyTlT%2FniaZpQjPcGZ1FM5aogBMAhjnmxJf7CGVKIYEdaM9sJ4tdhW4Hulj%2FsOEYKu6oZBkEey9lpgALp7G6QX05DufQH2XCgv3HmgvV7DtzBkVVs5b7uNqGWHq6RH9OrDIguG28sQ9eSW3oF4fRlM3lPQhabijtAZFqmtvRvQS0CPjFuoMYDoXazO8c%2B%2FqgGNcuz2m8F3TxK&X-Amz-Signature=86fe54df5ebfd1e15a480c60c6308e4f4d36448f233d12b8fff1ac8a7a2c9809&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5YFGEX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIZYH5TkVka1rvs3R4bWjXRu%2Bf%2BNfUGKl8d2KoW%2BG1cAiEA2f31kOERrje1tpN%2FM0q6zCz22FQcnLNaLHiiL3jwZqkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfv%2F1cxen%2FUs6MWfCrcA%2BDixUDHON2NNk9nxkmpA6tbTvNYY26tiG44OPEYrVXcrtswYUEf8XMSlCW2QVVGeu9MhqGWDnbRT%2FOIrnL1cjR02l2uAUoWvo30ZqGtiIETp3Qlq9T%2BOo4ag2jBsz7BWwI2R4yU6TkwUH1jqYGk%2FMNu771dIaiwF%2FsptgNJjcb7kPSEJpN7PCLamSSl8KzSwRZq5Urnk2sEMsLOjy4xKK5y%2BHFzfxd0RyHtOUAEJVOaQeTgtcf5RvBzRVJr7cKwQd6iW1Bo7g9%2BdgIy9Ysw%2B7w%2FjLVb7Q42FoT4Ek2i28mkpGmE0PJpUdEIqLdRfy8%2F2iKI%2BvR8KlvB7g6M4T1TTke1ITIShyMHCxrwJmg1GRtXh62rg63FnX%2Bmw4q%2BIhzZNJ%2BSdmZ8irsFC%2BRPmoCilZug63YIZG2AJCfieZ2ZquNI3ZpIuoYSNSzOu%2BRcxek0JSgylBeDWRD%2B0L2l0w4g%2BHUwzwu3OuFAVW%2B93oxfxW2%2BRo1lEgJJpOTsJVJyzjNYH8eZxy0Ynehxj%2BwSjHTtQ3vKFempR6rBa%2F6fTG7PGGhgmR4WXoJT8QRm1dA9bDOYxjwQyrXa8f4k0fz9%2Bj6WqU2DBs0Esn2jrqCVeDjPjIIt41ncZiHB9G75nv55MOb%2Bhb8GOqUBfkKEO2%2Bbam1cuYBYIyTlT%2FniaZpQjPcGZ1FM5aogBMAhjnmxJf7CGVKIYEdaM9sJ4tdhW4Hulj%2FsOEYKu6oZBkEey9lpgALp7G6QX05DufQH2XCgv3HmgvV7DtzBkVVs5b7uNqGWHq6RH9OrDIguG28sQ9eSW3oF4fRlM3lPQhabijtAZFqmtvRvQS0CPjFuoMYDoXazO8c%2B%2FqgGNcuz2m8F3TxK&X-Amz-Signature=be1a38799670fbe3819f97bfbdb9a86976b0ec97542c5b36bacec27bf3f60e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5YFGEX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIZYH5TkVka1rvs3R4bWjXRu%2Bf%2BNfUGKl8d2KoW%2BG1cAiEA2f31kOERrje1tpN%2FM0q6zCz22FQcnLNaLHiiL3jwZqkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfv%2F1cxen%2FUs6MWfCrcA%2BDixUDHON2NNk9nxkmpA6tbTvNYY26tiG44OPEYrVXcrtswYUEf8XMSlCW2QVVGeu9MhqGWDnbRT%2FOIrnL1cjR02l2uAUoWvo30ZqGtiIETp3Qlq9T%2BOo4ag2jBsz7BWwI2R4yU6TkwUH1jqYGk%2FMNu771dIaiwF%2FsptgNJjcb7kPSEJpN7PCLamSSl8KzSwRZq5Urnk2sEMsLOjy4xKK5y%2BHFzfxd0RyHtOUAEJVOaQeTgtcf5RvBzRVJr7cKwQd6iW1Bo7g9%2BdgIy9Ysw%2B7w%2FjLVb7Q42FoT4Ek2i28mkpGmE0PJpUdEIqLdRfy8%2F2iKI%2BvR8KlvB7g6M4T1TTke1ITIShyMHCxrwJmg1GRtXh62rg63FnX%2Bmw4q%2BIhzZNJ%2BSdmZ8irsFC%2BRPmoCilZug63YIZG2AJCfieZ2ZquNI3ZpIuoYSNSzOu%2BRcxek0JSgylBeDWRD%2B0L2l0w4g%2BHUwzwu3OuFAVW%2B93oxfxW2%2BRo1lEgJJpOTsJVJyzjNYH8eZxy0Ynehxj%2BwSjHTtQ3vKFempR6rBa%2F6fTG7PGGhgmR4WXoJT8QRm1dA9bDOYxjwQyrXa8f4k0fz9%2Bj6WqU2DBs0Esn2jrqCVeDjPjIIt41ncZiHB9G75nv55MOb%2Bhb8GOqUBfkKEO2%2Bbam1cuYBYIyTlT%2FniaZpQjPcGZ1FM5aogBMAhjnmxJf7CGVKIYEdaM9sJ4tdhW4Hulj%2FsOEYKu6oZBkEey9lpgALp7G6QX05DufQH2XCgv3HmgvV7DtzBkVVs5b7uNqGWHq6RH9OrDIguG28sQ9eSW3oF4fRlM3lPQhabijtAZFqmtvRvQS0CPjFuoMYDoXazO8c%2B%2FqgGNcuz2m8F3TxK&X-Amz-Signature=cdba587ef95ceeca91f1f982b7a6eaf948fd827c329e51e61583c21ccfdd62ad&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

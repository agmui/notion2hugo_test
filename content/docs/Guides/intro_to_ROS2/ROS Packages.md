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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJKA4UB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDuh0E%2BoVOtwLfR6SwFxRzLp%2BPFOI9AxjbbHzETnMq9%2BgIgUJKQNhegdYDaRnZ0kjKn23PDJgE%2B1Grm0yXeSAWJ36UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPlLv3w5zTXVYkSircA1lA3ZwzovIDppVZJs7%2Bkwm2ahfJO5r7Le9Go2RTgfcOynJ6UmuQBO652C%2FB3dQupPYvbTe%2FoJaL00bGLOPllSYMGiE2%2BHzBEazpeuzqoYLfu7JLLDnbmRdU8L1ZaljNBtFkxV7kVD6jXiGEnPfatHOzUuHaM6ghPOGavG1kEIM6sCdMEy94qHmhtGysNmnJQFzknSKQZw%2BLMHgbsw6NNovfrxbsMldgN3RY72PcSSFIfiKMi5SDCcqmcKRIwuhDguwZe2hXj%2FaZHoZdpaaj3rvhnTjFCXulPNybQCnUGu7PS5Vd%2B9oxHVBPnZhsdWjWbPotsKtfsOeUE9RsUF5u%2FlfHUjWHCXX5bj6He7R%2FtZ%2FqbnTxHt6eMIbPYbTaQpCd0O72TTG%2FmweNCYoT%2BU9qn1hEubsAe9dshoaq7Sg%2Fk%2Bn77vzBpQUwpBI3g%2Ft20bR1nvecpKzG3SqWqaXOfLqzVWnjE0mX%2FlRkVqXHeA7uK%2BOPprEGVRPqxY0BW9TwC8thq4qKvWmiIS9%2BzIjKSw0de9qqXCjkymghWIB3IgARJEXepA3loiQGfgietXGwq4I9sw6PCFGOBtyZxFghSEZM%2BVukX5coxQ7OvQjltjJCC5kn6WwKVPvsZLIYny82MNTBj8AGOqUBayeiUN3ClTqfve92GgcNS7g0e2feF948LIHwKBcDDLXiIFePQB7BMCViABObugENWG0UwSk5JfpfL2ID6izTSnA9T14wLDj40XEqTxtxSP9bvH53U9sYT8VvlF4swUPe2aOJo8Kv%2BwU5UhHafFdEAdeYfyfz17ZWMhu910oez1%2FoPigoxk1dOd5URU5GnfsXjb9pT5fNQtKYAktxBqFOXpWNTBs9&X-Amz-Signature=95b9a2e61fbdf84c84a876726098a85ee932d08c06b6b1f0f8c84ea480f13d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJKA4UB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDuh0E%2BoVOtwLfR6SwFxRzLp%2BPFOI9AxjbbHzETnMq9%2BgIgUJKQNhegdYDaRnZ0kjKn23PDJgE%2B1Grm0yXeSAWJ36UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPlLv3w5zTXVYkSircA1lA3ZwzovIDppVZJs7%2Bkwm2ahfJO5r7Le9Go2RTgfcOynJ6UmuQBO652C%2FB3dQupPYvbTe%2FoJaL00bGLOPllSYMGiE2%2BHzBEazpeuzqoYLfu7JLLDnbmRdU8L1ZaljNBtFkxV7kVD6jXiGEnPfatHOzUuHaM6ghPOGavG1kEIM6sCdMEy94qHmhtGysNmnJQFzknSKQZw%2BLMHgbsw6NNovfrxbsMldgN3RY72PcSSFIfiKMi5SDCcqmcKRIwuhDguwZe2hXj%2FaZHoZdpaaj3rvhnTjFCXulPNybQCnUGu7PS5Vd%2B9oxHVBPnZhsdWjWbPotsKtfsOeUE9RsUF5u%2FlfHUjWHCXX5bj6He7R%2FtZ%2FqbnTxHt6eMIbPYbTaQpCd0O72TTG%2FmweNCYoT%2BU9qn1hEubsAe9dshoaq7Sg%2Fk%2Bn77vzBpQUwpBI3g%2Ft20bR1nvecpKzG3SqWqaXOfLqzVWnjE0mX%2FlRkVqXHeA7uK%2BOPprEGVRPqxY0BW9TwC8thq4qKvWmiIS9%2BzIjKSw0de9qqXCjkymghWIB3IgARJEXepA3loiQGfgietXGwq4I9sw6PCFGOBtyZxFghSEZM%2BVukX5coxQ7OvQjltjJCC5kn6WwKVPvsZLIYny82MNTBj8AGOqUBayeiUN3ClTqfve92GgcNS7g0e2feF948LIHwKBcDDLXiIFePQB7BMCViABObugENWG0UwSk5JfpfL2ID6izTSnA9T14wLDj40XEqTxtxSP9bvH53U9sYT8VvlF4swUPe2aOJo8Kv%2BwU5UhHafFdEAdeYfyfz17ZWMhu910oez1%2FoPigoxk1dOd5URU5GnfsXjb9pT5fNQtKYAktxBqFOXpWNTBs9&X-Amz-Signature=4009ff9b8c9c3346b382afaf0647b9005f8db29897361d390dd95eefe22eef56&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJKA4UB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDuh0E%2BoVOtwLfR6SwFxRzLp%2BPFOI9AxjbbHzETnMq9%2BgIgUJKQNhegdYDaRnZ0kjKn23PDJgE%2B1Grm0yXeSAWJ36UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPlLv3w5zTXVYkSircA1lA3ZwzovIDppVZJs7%2Bkwm2ahfJO5r7Le9Go2RTgfcOynJ6UmuQBO652C%2FB3dQupPYvbTe%2FoJaL00bGLOPllSYMGiE2%2BHzBEazpeuzqoYLfu7JLLDnbmRdU8L1ZaljNBtFkxV7kVD6jXiGEnPfatHOzUuHaM6ghPOGavG1kEIM6sCdMEy94qHmhtGysNmnJQFzknSKQZw%2BLMHgbsw6NNovfrxbsMldgN3RY72PcSSFIfiKMi5SDCcqmcKRIwuhDguwZe2hXj%2FaZHoZdpaaj3rvhnTjFCXulPNybQCnUGu7PS5Vd%2B9oxHVBPnZhsdWjWbPotsKtfsOeUE9RsUF5u%2FlfHUjWHCXX5bj6He7R%2FtZ%2FqbnTxHt6eMIbPYbTaQpCd0O72TTG%2FmweNCYoT%2BU9qn1hEubsAe9dshoaq7Sg%2Fk%2Bn77vzBpQUwpBI3g%2Ft20bR1nvecpKzG3SqWqaXOfLqzVWnjE0mX%2FlRkVqXHeA7uK%2BOPprEGVRPqxY0BW9TwC8thq4qKvWmiIS9%2BzIjKSw0de9qqXCjkymghWIB3IgARJEXepA3loiQGfgietXGwq4I9sw6PCFGOBtyZxFghSEZM%2BVukX5coxQ7OvQjltjJCC5kn6WwKVPvsZLIYny82MNTBj8AGOqUBayeiUN3ClTqfve92GgcNS7g0e2feF948LIHwKBcDDLXiIFePQB7BMCViABObugENWG0UwSk5JfpfL2ID6izTSnA9T14wLDj40XEqTxtxSP9bvH53U9sYT8VvlF4swUPe2aOJo8Kv%2BwU5UhHafFdEAdeYfyfz17ZWMhu910oez1%2FoPigoxk1dOd5URU5GnfsXjb9pT5fNQtKYAktxBqFOXpWNTBs9&X-Amz-Signature=84932e486f0725101736587049d64d819d62cd6d0e9f800586d9a4d8cc40658c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJKA4UB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDuh0E%2BoVOtwLfR6SwFxRzLp%2BPFOI9AxjbbHzETnMq9%2BgIgUJKQNhegdYDaRnZ0kjKn23PDJgE%2B1Grm0yXeSAWJ36UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPlLv3w5zTXVYkSircA1lA3ZwzovIDppVZJs7%2Bkwm2ahfJO5r7Le9Go2RTgfcOynJ6UmuQBO652C%2FB3dQupPYvbTe%2FoJaL00bGLOPllSYMGiE2%2BHzBEazpeuzqoYLfu7JLLDnbmRdU8L1ZaljNBtFkxV7kVD6jXiGEnPfatHOzUuHaM6ghPOGavG1kEIM6sCdMEy94qHmhtGysNmnJQFzknSKQZw%2BLMHgbsw6NNovfrxbsMldgN3RY72PcSSFIfiKMi5SDCcqmcKRIwuhDguwZe2hXj%2FaZHoZdpaaj3rvhnTjFCXulPNybQCnUGu7PS5Vd%2B9oxHVBPnZhsdWjWbPotsKtfsOeUE9RsUF5u%2FlfHUjWHCXX5bj6He7R%2FtZ%2FqbnTxHt6eMIbPYbTaQpCd0O72TTG%2FmweNCYoT%2BU9qn1hEubsAe9dshoaq7Sg%2Fk%2Bn77vzBpQUwpBI3g%2Ft20bR1nvecpKzG3SqWqaXOfLqzVWnjE0mX%2FlRkVqXHeA7uK%2BOPprEGVRPqxY0BW9TwC8thq4qKvWmiIS9%2BzIjKSw0de9qqXCjkymghWIB3IgARJEXepA3loiQGfgietXGwq4I9sw6PCFGOBtyZxFghSEZM%2BVukX5coxQ7OvQjltjJCC5kn6WwKVPvsZLIYny82MNTBj8AGOqUBayeiUN3ClTqfve92GgcNS7g0e2feF948LIHwKBcDDLXiIFePQB7BMCViABObugENWG0UwSk5JfpfL2ID6izTSnA9T14wLDj40XEqTxtxSP9bvH53U9sYT8VvlF4swUPe2aOJo8Kv%2BwU5UhHafFdEAdeYfyfz17ZWMhu910oez1%2FoPigoxk1dOd5URU5GnfsXjb9pT5fNQtKYAktxBqFOXpWNTBs9&X-Amz-Signature=4b528e31d6518050980754da2b22d68cefa2f29190ead4a456ebff3e510717ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJKA4UB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDuh0E%2BoVOtwLfR6SwFxRzLp%2BPFOI9AxjbbHzETnMq9%2BgIgUJKQNhegdYDaRnZ0kjKn23PDJgE%2B1Grm0yXeSAWJ36UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPlLv3w5zTXVYkSircA1lA3ZwzovIDppVZJs7%2Bkwm2ahfJO5r7Le9Go2RTgfcOynJ6UmuQBO652C%2FB3dQupPYvbTe%2FoJaL00bGLOPllSYMGiE2%2BHzBEazpeuzqoYLfu7JLLDnbmRdU8L1ZaljNBtFkxV7kVD6jXiGEnPfatHOzUuHaM6ghPOGavG1kEIM6sCdMEy94qHmhtGysNmnJQFzknSKQZw%2BLMHgbsw6NNovfrxbsMldgN3RY72PcSSFIfiKMi5SDCcqmcKRIwuhDguwZe2hXj%2FaZHoZdpaaj3rvhnTjFCXulPNybQCnUGu7PS5Vd%2B9oxHVBPnZhsdWjWbPotsKtfsOeUE9RsUF5u%2FlfHUjWHCXX5bj6He7R%2FtZ%2FqbnTxHt6eMIbPYbTaQpCd0O72TTG%2FmweNCYoT%2BU9qn1hEubsAe9dshoaq7Sg%2Fk%2Bn77vzBpQUwpBI3g%2Ft20bR1nvecpKzG3SqWqaXOfLqzVWnjE0mX%2FlRkVqXHeA7uK%2BOPprEGVRPqxY0BW9TwC8thq4qKvWmiIS9%2BzIjKSw0de9qqXCjkymghWIB3IgARJEXepA3loiQGfgietXGwq4I9sw6PCFGOBtyZxFghSEZM%2BVukX5coxQ7OvQjltjJCC5kn6WwKVPvsZLIYny82MNTBj8AGOqUBayeiUN3ClTqfve92GgcNS7g0e2feF948LIHwKBcDDLXiIFePQB7BMCViABObugENWG0UwSk5JfpfL2ID6izTSnA9T14wLDj40XEqTxtxSP9bvH53U9sYT8VvlF4swUPe2aOJo8Kv%2BwU5UhHafFdEAdeYfyfz17ZWMhu910oez1%2FoPigoxk1dOd5URU5GnfsXjb9pT5fNQtKYAktxBqFOXpWNTBs9&X-Amz-Signature=e83239ecfe7b7ecc5e00f2d94300af6317b3cf77dc5df35bd5a96ee1f5fad052&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJKA4UB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDuh0E%2BoVOtwLfR6SwFxRzLp%2BPFOI9AxjbbHzETnMq9%2BgIgUJKQNhegdYDaRnZ0kjKn23PDJgE%2B1Grm0yXeSAWJ36UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPlLv3w5zTXVYkSircA1lA3ZwzovIDppVZJs7%2Bkwm2ahfJO5r7Le9Go2RTgfcOynJ6UmuQBO652C%2FB3dQupPYvbTe%2FoJaL00bGLOPllSYMGiE2%2BHzBEazpeuzqoYLfu7JLLDnbmRdU8L1ZaljNBtFkxV7kVD6jXiGEnPfatHOzUuHaM6ghPOGavG1kEIM6sCdMEy94qHmhtGysNmnJQFzknSKQZw%2BLMHgbsw6NNovfrxbsMldgN3RY72PcSSFIfiKMi5SDCcqmcKRIwuhDguwZe2hXj%2FaZHoZdpaaj3rvhnTjFCXulPNybQCnUGu7PS5Vd%2B9oxHVBPnZhsdWjWbPotsKtfsOeUE9RsUF5u%2FlfHUjWHCXX5bj6He7R%2FtZ%2FqbnTxHt6eMIbPYbTaQpCd0O72TTG%2FmweNCYoT%2BU9qn1hEubsAe9dshoaq7Sg%2Fk%2Bn77vzBpQUwpBI3g%2Ft20bR1nvecpKzG3SqWqaXOfLqzVWnjE0mX%2FlRkVqXHeA7uK%2BOPprEGVRPqxY0BW9TwC8thq4qKvWmiIS9%2BzIjKSw0de9qqXCjkymghWIB3IgARJEXepA3loiQGfgietXGwq4I9sw6PCFGOBtyZxFghSEZM%2BVukX5coxQ7OvQjltjJCC5kn6WwKVPvsZLIYny82MNTBj8AGOqUBayeiUN3ClTqfve92GgcNS7g0e2feF948LIHwKBcDDLXiIFePQB7BMCViABObugENWG0UwSk5JfpfL2ID6izTSnA9T14wLDj40XEqTxtxSP9bvH53U9sYT8VvlF4swUPe2aOJo8Kv%2BwU5UhHafFdEAdeYfyfz17ZWMhu910oez1%2FoPigoxk1dOd5URU5GnfsXjb9pT5fNQtKYAktxBqFOXpWNTBs9&X-Amz-Signature=222ac50424159abf106fce52b98115a854532a19bf5223ca9887acebc691aee1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJKA4UB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDuh0E%2BoVOtwLfR6SwFxRzLp%2BPFOI9AxjbbHzETnMq9%2BgIgUJKQNhegdYDaRnZ0kjKn23PDJgE%2B1Grm0yXeSAWJ36UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPlLv3w5zTXVYkSircA1lA3ZwzovIDppVZJs7%2Bkwm2ahfJO5r7Le9Go2RTgfcOynJ6UmuQBO652C%2FB3dQupPYvbTe%2FoJaL00bGLOPllSYMGiE2%2BHzBEazpeuzqoYLfu7JLLDnbmRdU8L1ZaljNBtFkxV7kVD6jXiGEnPfatHOzUuHaM6ghPOGavG1kEIM6sCdMEy94qHmhtGysNmnJQFzknSKQZw%2BLMHgbsw6NNovfrxbsMldgN3RY72PcSSFIfiKMi5SDCcqmcKRIwuhDguwZe2hXj%2FaZHoZdpaaj3rvhnTjFCXulPNybQCnUGu7PS5Vd%2B9oxHVBPnZhsdWjWbPotsKtfsOeUE9RsUF5u%2FlfHUjWHCXX5bj6He7R%2FtZ%2FqbnTxHt6eMIbPYbTaQpCd0O72TTG%2FmweNCYoT%2BU9qn1hEubsAe9dshoaq7Sg%2Fk%2Bn77vzBpQUwpBI3g%2Ft20bR1nvecpKzG3SqWqaXOfLqzVWnjE0mX%2FlRkVqXHeA7uK%2BOPprEGVRPqxY0BW9TwC8thq4qKvWmiIS9%2BzIjKSw0de9qqXCjkymghWIB3IgARJEXepA3loiQGfgietXGwq4I9sw6PCFGOBtyZxFghSEZM%2BVukX5coxQ7OvQjltjJCC5kn6WwKVPvsZLIYny82MNTBj8AGOqUBayeiUN3ClTqfve92GgcNS7g0e2feF948LIHwKBcDDLXiIFePQB7BMCViABObugENWG0UwSk5JfpfL2ID6izTSnA9T14wLDj40XEqTxtxSP9bvH53U9sYT8VvlF4swUPe2aOJo8Kv%2BwU5UhHafFdEAdeYfyfz17ZWMhu910oez1%2FoPigoxk1dOd5URU5GnfsXjb9pT5fNQtKYAktxBqFOXpWNTBs9&X-Amz-Signature=0d28ee5ee9ae08c37bcd46e589bd0f1b2c4788c1e73276f2fb6d12aa1a00c704&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

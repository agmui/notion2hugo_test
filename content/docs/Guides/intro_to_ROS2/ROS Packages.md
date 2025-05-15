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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGJ22XK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCkUsjgCnCJtbFNp%2Byxq0q18cxlvA6QwAEGc6I%2BV9t%2F8AIhAIGKwyTAQvdzI%2Fc4cYcsYmaLWmHUx6GLluc85VcGgMjTKv8DCDEQABoMNjM3NDIzMTgzODA1IgzkIZQs8IvFU0fzrDAq3AOSnwcb5VeNFacErmHtJqKmumkXQGM9XzVFvEbLoXe8vq30uZ%2BxM8HK%2F3o0vN8F6ysf81uGQ4r4HZtSpTr6PSqKR5wddfv6tFQXsEzSdCI%2B5j7xaqpJ5NRmEBvE3AvjBDd9j2vPJA5KPrP1zspv%2BbQukr%2BZP6eu0AjZsFroJW7Tv6nnQY7Vp1q%2FMS8nOrEc%2BjdvxFnrQNUWKWeAgkEIJkR3rNbltG2WxBCkPri47kgN5H5gBdxzKRYuGAchbRa5jBoVckQ%2FiWGrgGqh96YhSA78N4FrxcFwyLMsiWVI4z%2BaqbZu%2BSmRP%2B50RA9mkhkPQzyQ7syZLvp6EREiQjU0N0qLy3h%2BjQYmRlSBXx5VMMoKvmH39ZkmkG07ASmXyHRSHZUoBvNkTFAD80vdZNj8BmmP1HHHvAiEEyLhHAhOXtcrwZFfZq8imoY7ySO3%2B3uDfr4IyqwreS75oFsb0ox3IwiYJ1Iz1WXAyk07IwScvbHaumbGwXM5F36577ogwZsTBjgd7peGfzGt6UQHkBT3nVHguOmkT4XuxJo4tg3xGWtoSaK5daEvaMlUTOCVsyZHpIcQiwqs2oTUJIePKbYgAxRqqebFtOlgsMmZZXiY4DG02NRxcvKb8TXVfRtizzCZkZjBBjqkASaf3P0ouFHEv94zdqgIC%2FaOMFQSg3AIYyWspFiHvkE2Suqb5o4%2FluctdiJCpwCJaZXbg3UXOdIumWoGvLuZgCSClfBP3pRoVdwY5cfS7Qfj4maJyF17wJmr4ok1UHCiblOQHbT8YnAnk8pBbeck70pmbGCs%2FMdnLr1MLBe7s3w8R%2BVAs%2FFdnG7h9x%2F10JJbNl9gEKMgk%2FD8No1oGqQ0BceWk6%2Fb&X-Amz-Signature=2ed09d1716111616f528690820ce50a5deb82a64e42751ddc3b79185fd523681&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGJ22XK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCkUsjgCnCJtbFNp%2Byxq0q18cxlvA6QwAEGc6I%2BV9t%2F8AIhAIGKwyTAQvdzI%2Fc4cYcsYmaLWmHUx6GLluc85VcGgMjTKv8DCDEQABoMNjM3NDIzMTgzODA1IgzkIZQs8IvFU0fzrDAq3AOSnwcb5VeNFacErmHtJqKmumkXQGM9XzVFvEbLoXe8vq30uZ%2BxM8HK%2F3o0vN8F6ysf81uGQ4r4HZtSpTr6PSqKR5wddfv6tFQXsEzSdCI%2B5j7xaqpJ5NRmEBvE3AvjBDd9j2vPJA5KPrP1zspv%2BbQukr%2BZP6eu0AjZsFroJW7Tv6nnQY7Vp1q%2FMS8nOrEc%2BjdvxFnrQNUWKWeAgkEIJkR3rNbltG2WxBCkPri47kgN5H5gBdxzKRYuGAchbRa5jBoVckQ%2FiWGrgGqh96YhSA78N4FrxcFwyLMsiWVI4z%2BaqbZu%2BSmRP%2B50RA9mkhkPQzyQ7syZLvp6EREiQjU0N0qLy3h%2BjQYmRlSBXx5VMMoKvmH39ZkmkG07ASmXyHRSHZUoBvNkTFAD80vdZNj8BmmP1HHHvAiEEyLhHAhOXtcrwZFfZq8imoY7ySO3%2B3uDfr4IyqwreS75oFsb0ox3IwiYJ1Iz1WXAyk07IwScvbHaumbGwXM5F36577ogwZsTBjgd7peGfzGt6UQHkBT3nVHguOmkT4XuxJo4tg3xGWtoSaK5daEvaMlUTOCVsyZHpIcQiwqs2oTUJIePKbYgAxRqqebFtOlgsMmZZXiY4DG02NRxcvKb8TXVfRtizzCZkZjBBjqkASaf3P0ouFHEv94zdqgIC%2FaOMFQSg3AIYyWspFiHvkE2Suqb5o4%2FluctdiJCpwCJaZXbg3UXOdIumWoGvLuZgCSClfBP3pRoVdwY5cfS7Qfj4maJyF17wJmr4ok1UHCiblOQHbT8YnAnk8pBbeck70pmbGCs%2FMdnLr1MLBe7s3w8R%2BVAs%2FFdnG7h9x%2F10JJbNl9gEKMgk%2FD8No1oGqQ0BceWk6%2Fb&X-Amz-Signature=5d05959c9d748036b5a07035b412638288bc6ace5504398d7000144671edd770&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGJ22XK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCkUsjgCnCJtbFNp%2Byxq0q18cxlvA6QwAEGc6I%2BV9t%2F8AIhAIGKwyTAQvdzI%2Fc4cYcsYmaLWmHUx6GLluc85VcGgMjTKv8DCDEQABoMNjM3NDIzMTgzODA1IgzkIZQs8IvFU0fzrDAq3AOSnwcb5VeNFacErmHtJqKmumkXQGM9XzVFvEbLoXe8vq30uZ%2BxM8HK%2F3o0vN8F6ysf81uGQ4r4HZtSpTr6PSqKR5wddfv6tFQXsEzSdCI%2B5j7xaqpJ5NRmEBvE3AvjBDd9j2vPJA5KPrP1zspv%2BbQukr%2BZP6eu0AjZsFroJW7Tv6nnQY7Vp1q%2FMS8nOrEc%2BjdvxFnrQNUWKWeAgkEIJkR3rNbltG2WxBCkPri47kgN5H5gBdxzKRYuGAchbRa5jBoVckQ%2FiWGrgGqh96YhSA78N4FrxcFwyLMsiWVI4z%2BaqbZu%2BSmRP%2B50RA9mkhkPQzyQ7syZLvp6EREiQjU0N0qLy3h%2BjQYmRlSBXx5VMMoKvmH39ZkmkG07ASmXyHRSHZUoBvNkTFAD80vdZNj8BmmP1HHHvAiEEyLhHAhOXtcrwZFfZq8imoY7ySO3%2B3uDfr4IyqwreS75oFsb0ox3IwiYJ1Iz1WXAyk07IwScvbHaumbGwXM5F36577ogwZsTBjgd7peGfzGt6UQHkBT3nVHguOmkT4XuxJo4tg3xGWtoSaK5daEvaMlUTOCVsyZHpIcQiwqs2oTUJIePKbYgAxRqqebFtOlgsMmZZXiY4DG02NRxcvKb8TXVfRtizzCZkZjBBjqkASaf3P0ouFHEv94zdqgIC%2FaOMFQSg3AIYyWspFiHvkE2Suqb5o4%2FluctdiJCpwCJaZXbg3UXOdIumWoGvLuZgCSClfBP3pRoVdwY5cfS7Qfj4maJyF17wJmr4ok1UHCiblOQHbT8YnAnk8pBbeck70pmbGCs%2FMdnLr1MLBe7s3w8R%2BVAs%2FFdnG7h9x%2F10JJbNl9gEKMgk%2FD8No1oGqQ0BceWk6%2Fb&X-Amz-Signature=3be1925b54365161b97e9343550bb9a49be8de9da5b4ac0a7b097e09bf6ef023&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGJ22XK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCkUsjgCnCJtbFNp%2Byxq0q18cxlvA6QwAEGc6I%2BV9t%2F8AIhAIGKwyTAQvdzI%2Fc4cYcsYmaLWmHUx6GLluc85VcGgMjTKv8DCDEQABoMNjM3NDIzMTgzODA1IgzkIZQs8IvFU0fzrDAq3AOSnwcb5VeNFacErmHtJqKmumkXQGM9XzVFvEbLoXe8vq30uZ%2BxM8HK%2F3o0vN8F6ysf81uGQ4r4HZtSpTr6PSqKR5wddfv6tFQXsEzSdCI%2B5j7xaqpJ5NRmEBvE3AvjBDd9j2vPJA5KPrP1zspv%2BbQukr%2BZP6eu0AjZsFroJW7Tv6nnQY7Vp1q%2FMS8nOrEc%2BjdvxFnrQNUWKWeAgkEIJkR3rNbltG2WxBCkPri47kgN5H5gBdxzKRYuGAchbRa5jBoVckQ%2FiWGrgGqh96YhSA78N4FrxcFwyLMsiWVI4z%2BaqbZu%2BSmRP%2B50RA9mkhkPQzyQ7syZLvp6EREiQjU0N0qLy3h%2BjQYmRlSBXx5VMMoKvmH39ZkmkG07ASmXyHRSHZUoBvNkTFAD80vdZNj8BmmP1HHHvAiEEyLhHAhOXtcrwZFfZq8imoY7ySO3%2B3uDfr4IyqwreS75oFsb0ox3IwiYJ1Iz1WXAyk07IwScvbHaumbGwXM5F36577ogwZsTBjgd7peGfzGt6UQHkBT3nVHguOmkT4XuxJo4tg3xGWtoSaK5daEvaMlUTOCVsyZHpIcQiwqs2oTUJIePKbYgAxRqqebFtOlgsMmZZXiY4DG02NRxcvKb8TXVfRtizzCZkZjBBjqkASaf3P0ouFHEv94zdqgIC%2FaOMFQSg3AIYyWspFiHvkE2Suqb5o4%2FluctdiJCpwCJaZXbg3UXOdIumWoGvLuZgCSClfBP3pRoVdwY5cfS7Qfj4maJyF17wJmr4ok1UHCiblOQHbT8YnAnk8pBbeck70pmbGCs%2FMdnLr1MLBe7s3w8R%2BVAs%2FFdnG7h9x%2F10JJbNl9gEKMgk%2FD8No1oGqQ0BceWk6%2Fb&X-Amz-Signature=c142462ccdba038ff49011689ef44e777a92a94059fd84ed059fcc8b42ce1fc6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGJ22XK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCkUsjgCnCJtbFNp%2Byxq0q18cxlvA6QwAEGc6I%2BV9t%2F8AIhAIGKwyTAQvdzI%2Fc4cYcsYmaLWmHUx6GLluc85VcGgMjTKv8DCDEQABoMNjM3NDIzMTgzODA1IgzkIZQs8IvFU0fzrDAq3AOSnwcb5VeNFacErmHtJqKmumkXQGM9XzVFvEbLoXe8vq30uZ%2BxM8HK%2F3o0vN8F6ysf81uGQ4r4HZtSpTr6PSqKR5wddfv6tFQXsEzSdCI%2B5j7xaqpJ5NRmEBvE3AvjBDd9j2vPJA5KPrP1zspv%2BbQukr%2BZP6eu0AjZsFroJW7Tv6nnQY7Vp1q%2FMS8nOrEc%2BjdvxFnrQNUWKWeAgkEIJkR3rNbltG2WxBCkPri47kgN5H5gBdxzKRYuGAchbRa5jBoVckQ%2FiWGrgGqh96YhSA78N4FrxcFwyLMsiWVI4z%2BaqbZu%2BSmRP%2B50RA9mkhkPQzyQ7syZLvp6EREiQjU0N0qLy3h%2BjQYmRlSBXx5VMMoKvmH39ZkmkG07ASmXyHRSHZUoBvNkTFAD80vdZNj8BmmP1HHHvAiEEyLhHAhOXtcrwZFfZq8imoY7ySO3%2B3uDfr4IyqwreS75oFsb0ox3IwiYJ1Iz1WXAyk07IwScvbHaumbGwXM5F36577ogwZsTBjgd7peGfzGt6UQHkBT3nVHguOmkT4XuxJo4tg3xGWtoSaK5daEvaMlUTOCVsyZHpIcQiwqs2oTUJIePKbYgAxRqqebFtOlgsMmZZXiY4DG02NRxcvKb8TXVfRtizzCZkZjBBjqkASaf3P0ouFHEv94zdqgIC%2FaOMFQSg3AIYyWspFiHvkE2Suqb5o4%2FluctdiJCpwCJaZXbg3UXOdIumWoGvLuZgCSClfBP3pRoVdwY5cfS7Qfj4maJyF17wJmr4ok1UHCiblOQHbT8YnAnk8pBbeck70pmbGCs%2FMdnLr1MLBe7s3w8R%2BVAs%2FFdnG7h9x%2F10JJbNl9gEKMgk%2FD8No1oGqQ0BceWk6%2Fb&X-Amz-Signature=a0fe3d99fb68b56b2cb633e5cfaceefb0842c22537d65869980b7e188fd4f96e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGJ22XK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCkUsjgCnCJtbFNp%2Byxq0q18cxlvA6QwAEGc6I%2BV9t%2F8AIhAIGKwyTAQvdzI%2Fc4cYcsYmaLWmHUx6GLluc85VcGgMjTKv8DCDEQABoMNjM3NDIzMTgzODA1IgzkIZQs8IvFU0fzrDAq3AOSnwcb5VeNFacErmHtJqKmumkXQGM9XzVFvEbLoXe8vq30uZ%2BxM8HK%2F3o0vN8F6ysf81uGQ4r4HZtSpTr6PSqKR5wddfv6tFQXsEzSdCI%2B5j7xaqpJ5NRmEBvE3AvjBDd9j2vPJA5KPrP1zspv%2BbQukr%2BZP6eu0AjZsFroJW7Tv6nnQY7Vp1q%2FMS8nOrEc%2BjdvxFnrQNUWKWeAgkEIJkR3rNbltG2WxBCkPri47kgN5H5gBdxzKRYuGAchbRa5jBoVckQ%2FiWGrgGqh96YhSA78N4FrxcFwyLMsiWVI4z%2BaqbZu%2BSmRP%2B50RA9mkhkPQzyQ7syZLvp6EREiQjU0N0qLy3h%2BjQYmRlSBXx5VMMoKvmH39ZkmkG07ASmXyHRSHZUoBvNkTFAD80vdZNj8BmmP1HHHvAiEEyLhHAhOXtcrwZFfZq8imoY7ySO3%2B3uDfr4IyqwreS75oFsb0ox3IwiYJ1Iz1WXAyk07IwScvbHaumbGwXM5F36577ogwZsTBjgd7peGfzGt6UQHkBT3nVHguOmkT4XuxJo4tg3xGWtoSaK5daEvaMlUTOCVsyZHpIcQiwqs2oTUJIePKbYgAxRqqebFtOlgsMmZZXiY4DG02NRxcvKb8TXVfRtizzCZkZjBBjqkASaf3P0ouFHEv94zdqgIC%2FaOMFQSg3AIYyWspFiHvkE2Suqb5o4%2FluctdiJCpwCJaZXbg3UXOdIumWoGvLuZgCSClfBP3pRoVdwY5cfS7Qfj4maJyF17wJmr4ok1UHCiblOQHbT8YnAnk8pBbeck70pmbGCs%2FMdnLr1MLBe7s3w8R%2BVAs%2FFdnG7h9x%2F10JJbNl9gEKMgk%2FD8No1oGqQ0BceWk6%2Fb&X-Amz-Signature=d54fa60f3aa5ff878136f54e353ce514cbfe805fd8d3eee4dbedee57ed5c07d7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGJ22XK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCkUsjgCnCJtbFNp%2Byxq0q18cxlvA6QwAEGc6I%2BV9t%2F8AIhAIGKwyTAQvdzI%2Fc4cYcsYmaLWmHUx6GLluc85VcGgMjTKv8DCDEQABoMNjM3NDIzMTgzODA1IgzkIZQs8IvFU0fzrDAq3AOSnwcb5VeNFacErmHtJqKmumkXQGM9XzVFvEbLoXe8vq30uZ%2BxM8HK%2F3o0vN8F6ysf81uGQ4r4HZtSpTr6PSqKR5wddfv6tFQXsEzSdCI%2B5j7xaqpJ5NRmEBvE3AvjBDd9j2vPJA5KPrP1zspv%2BbQukr%2BZP6eu0AjZsFroJW7Tv6nnQY7Vp1q%2FMS8nOrEc%2BjdvxFnrQNUWKWeAgkEIJkR3rNbltG2WxBCkPri47kgN5H5gBdxzKRYuGAchbRa5jBoVckQ%2FiWGrgGqh96YhSA78N4FrxcFwyLMsiWVI4z%2BaqbZu%2BSmRP%2B50RA9mkhkPQzyQ7syZLvp6EREiQjU0N0qLy3h%2BjQYmRlSBXx5VMMoKvmH39ZkmkG07ASmXyHRSHZUoBvNkTFAD80vdZNj8BmmP1HHHvAiEEyLhHAhOXtcrwZFfZq8imoY7ySO3%2B3uDfr4IyqwreS75oFsb0ox3IwiYJ1Iz1WXAyk07IwScvbHaumbGwXM5F36577ogwZsTBjgd7peGfzGt6UQHkBT3nVHguOmkT4XuxJo4tg3xGWtoSaK5daEvaMlUTOCVsyZHpIcQiwqs2oTUJIePKbYgAxRqqebFtOlgsMmZZXiY4DG02NRxcvKb8TXVfRtizzCZkZjBBjqkASaf3P0ouFHEv94zdqgIC%2FaOMFQSg3AIYyWspFiHvkE2Suqb5o4%2FluctdiJCpwCJaZXbg3UXOdIumWoGvLuZgCSClfBP3pRoVdwY5cfS7Qfj4maJyF17wJmr4ok1UHCiblOQHbT8YnAnk8pBbeck70pmbGCs%2FMdnLr1MLBe7s3w8R%2BVAs%2FFdnG7h9x%2F10JJbNl9gEKMgk%2FD8No1oGqQ0BceWk6%2Fb&X-Amz-Signature=43c8fa61554a3ac919243ff876b0012eb56394ff95153607ad7090ec3d5b5497&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

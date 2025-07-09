---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRLRBWE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9lD8BhNAhXsy6RQLO3LAs%2B8f%2BMNAM6gpOwX%2FoKC2q7AiEAk7CcAq96mbFIJCbkmtKKHpZyJpXXUdmPS4j%2B%2BIFHoG4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClweH%2BiT%2FTLWm8ngyrcA0jRbDgnquK6mqn3CHC%2FkumLR%2BDtCPvf8VnKFUb4XbdjzIWbzrDtqFgreubah1EIC1uu0s07DyVN%2BczOirIesTySoqucJ%2BCAQaDzDUnCY0uPyJX1RS6T23nML640hsl3FWG4bIUjJaA8WnkD4N%2Fh%2BMDSKcB%2BR%2FnAkdOnN0D3Dt1Suuevx9wUFejRDbpNCoQRifFaadMdj6d%2F%2BB5t%2F3%2FfdQ6kKa4u0Ejmw9BbcpK0IkCZPUY8Okj1EB0%2B8fIjXi5Q3PbpG3hLJAvT85TofgBg5tBx4m03dhub7JaaraITQkGif3Aco%2B3LsngpQ3N0PIeAvk7DgJw2LF3Rfc2NXNrP3mnd9fEux11uelwETkrGmqGl3RtU1xo%2F%2F90BKL81sZ5bPioPE4KLvYeJREex%2BqGAqkDpt8zvI7bDuqBvTrTQdMTgCZmJc1gBdJ0fYgVD81DYxi3xEfnsinreGZH8bgiMeAZz6OUGE9umdMBdx6Oi4%2FaAZ8WAKRnl0wLJ0zmykACgOv1Ix9sE6Dj49KD%2BI53SB7I69mORRaWpZBcrA1zhjxIYXAb32HpLpulJG75D20nLlBobqJ%2BdvBeyXtvldYrco0vK55%2FrDYMuwL8E8omENsTFQVOZKNhHmAO%2BTosZMLfKt8MGOqUBro%2FLAr7BWkDz8ibtLNwVwWcQ1iFWwfr1s35g%2BKEULD2b3kVBnXo11wdz3SYnMPwWa80cJkh5JTpZzt6C8d5HXuVbAhzzDa728yx3i688RSVHyJVqCxS2QrqG8m3xoMZDiFhwCzL6ZPXy2FrdWBQ9TBqyy8o9hTsdS4bocTtqiizbp7XpcxHHbJEVLrYpmtzwG4B9VJlLGzSfQtn7e1qmg1ORmrur&X-Amz-Signature=fffe4cc6ffc3c89af0948b1283a93bc804141f98b7f9761dfce7d2b0d9662216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRLRBWE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9lD8BhNAhXsy6RQLO3LAs%2B8f%2BMNAM6gpOwX%2FoKC2q7AiEAk7CcAq96mbFIJCbkmtKKHpZyJpXXUdmPS4j%2B%2BIFHoG4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClweH%2BiT%2FTLWm8ngyrcA0jRbDgnquK6mqn3CHC%2FkumLR%2BDtCPvf8VnKFUb4XbdjzIWbzrDtqFgreubah1EIC1uu0s07DyVN%2BczOirIesTySoqucJ%2BCAQaDzDUnCY0uPyJX1RS6T23nML640hsl3FWG4bIUjJaA8WnkD4N%2Fh%2BMDSKcB%2BR%2FnAkdOnN0D3Dt1Suuevx9wUFejRDbpNCoQRifFaadMdj6d%2F%2BB5t%2F3%2FfdQ6kKa4u0Ejmw9BbcpK0IkCZPUY8Okj1EB0%2B8fIjXi5Q3PbpG3hLJAvT85TofgBg5tBx4m03dhub7JaaraITQkGif3Aco%2B3LsngpQ3N0PIeAvk7DgJw2LF3Rfc2NXNrP3mnd9fEux11uelwETkrGmqGl3RtU1xo%2F%2F90BKL81sZ5bPioPE4KLvYeJREex%2BqGAqkDpt8zvI7bDuqBvTrTQdMTgCZmJc1gBdJ0fYgVD81DYxi3xEfnsinreGZH8bgiMeAZz6OUGE9umdMBdx6Oi4%2FaAZ8WAKRnl0wLJ0zmykACgOv1Ix9sE6Dj49KD%2BI53SB7I69mORRaWpZBcrA1zhjxIYXAb32HpLpulJG75D20nLlBobqJ%2BdvBeyXtvldYrco0vK55%2FrDYMuwL8E8omENsTFQVOZKNhHmAO%2BTosZMLfKt8MGOqUBro%2FLAr7BWkDz8ibtLNwVwWcQ1iFWwfr1s35g%2BKEULD2b3kVBnXo11wdz3SYnMPwWa80cJkh5JTpZzt6C8d5HXuVbAhzzDa728yx3i688RSVHyJVqCxS2QrqG8m3xoMZDiFhwCzL6ZPXy2FrdWBQ9TBqyy8o9hTsdS4bocTtqiizbp7XpcxHHbJEVLrYpmtzwG4B9VJlLGzSfQtn7e1qmg1ORmrur&X-Amz-Signature=251164cc27128ad7cd919dc492fafb818706d48b386c55517992509624f1a97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRLRBWE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9lD8BhNAhXsy6RQLO3LAs%2B8f%2BMNAM6gpOwX%2FoKC2q7AiEAk7CcAq96mbFIJCbkmtKKHpZyJpXXUdmPS4j%2B%2BIFHoG4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClweH%2BiT%2FTLWm8ngyrcA0jRbDgnquK6mqn3CHC%2FkumLR%2BDtCPvf8VnKFUb4XbdjzIWbzrDtqFgreubah1EIC1uu0s07DyVN%2BczOirIesTySoqucJ%2BCAQaDzDUnCY0uPyJX1RS6T23nML640hsl3FWG4bIUjJaA8WnkD4N%2Fh%2BMDSKcB%2BR%2FnAkdOnN0D3Dt1Suuevx9wUFejRDbpNCoQRifFaadMdj6d%2F%2BB5t%2F3%2FfdQ6kKa4u0Ejmw9BbcpK0IkCZPUY8Okj1EB0%2B8fIjXi5Q3PbpG3hLJAvT85TofgBg5tBx4m03dhub7JaaraITQkGif3Aco%2B3LsngpQ3N0PIeAvk7DgJw2LF3Rfc2NXNrP3mnd9fEux11uelwETkrGmqGl3RtU1xo%2F%2F90BKL81sZ5bPioPE4KLvYeJREex%2BqGAqkDpt8zvI7bDuqBvTrTQdMTgCZmJc1gBdJ0fYgVD81DYxi3xEfnsinreGZH8bgiMeAZz6OUGE9umdMBdx6Oi4%2FaAZ8WAKRnl0wLJ0zmykACgOv1Ix9sE6Dj49KD%2BI53SB7I69mORRaWpZBcrA1zhjxIYXAb32HpLpulJG75D20nLlBobqJ%2BdvBeyXtvldYrco0vK55%2FrDYMuwL8E8omENsTFQVOZKNhHmAO%2BTosZMLfKt8MGOqUBro%2FLAr7BWkDz8ibtLNwVwWcQ1iFWwfr1s35g%2BKEULD2b3kVBnXo11wdz3SYnMPwWa80cJkh5JTpZzt6C8d5HXuVbAhzzDa728yx3i688RSVHyJVqCxS2QrqG8m3xoMZDiFhwCzL6ZPXy2FrdWBQ9TBqyy8o9hTsdS4bocTtqiizbp7XpcxHHbJEVLrYpmtzwG4B9VJlLGzSfQtn7e1qmg1ORmrur&X-Amz-Signature=d6d575df3b78a3fc1e399a4300b26e4ce3a22a9a8bed18ae5124aeba7b918817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRLRBWE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9lD8BhNAhXsy6RQLO3LAs%2B8f%2BMNAM6gpOwX%2FoKC2q7AiEAk7CcAq96mbFIJCbkmtKKHpZyJpXXUdmPS4j%2B%2BIFHoG4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClweH%2BiT%2FTLWm8ngyrcA0jRbDgnquK6mqn3CHC%2FkumLR%2BDtCPvf8VnKFUb4XbdjzIWbzrDtqFgreubah1EIC1uu0s07DyVN%2BczOirIesTySoqucJ%2BCAQaDzDUnCY0uPyJX1RS6T23nML640hsl3FWG4bIUjJaA8WnkD4N%2Fh%2BMDSKcB%2BR%2FnAkdOnN0D3Dt1Suuevx9wUFejRDbpNCoQRifFaadMdj6d%2F%2BB5t%2F3%2FfdQ6kKa4u0Ejmw9BbcpK0IkCZPUY8Okj1EB0%2B8fIjXi5Q3PbpG3hLJAvT85TofgBg5tBx4m03dhub7JaaraITQkGif3Aco%2B3LsngpQ3N0PIeAvk7DgJw2LF3Rfc2NXNrP3mnd9fEux11uelwETkrGmqGl3RtU1xo%2F%2F90BKL81sZ5bPioPE4KLvYeJREex%2BqGAqkDpt8zvI7bDuqBvTrTQdMTgCZmJc1gBdJ0fYgVD81DYxi3xEfnsinreGZH8bgiMeAZz6OUGE9umdMBdx6Oi4%2FaAZ8WAKRnl0wLJ0zmykACgOv1Ix9sE6Dj49KD%2BI53SB7I69mORRaWpZBcrA1zhjxIYXAb32HpLpulJG75D20nLlBobqJ%2BdvBeyXtvldYrco0vK55%2FrDYMuwL8E8omENsTFQVOZKNhHmAO%2BTosZMLfKt8MGOqUBro%2FLAr7BWkDz8ibtLNwVwWcQ1iFWwfr1s35g%2BKEULD2b3kVBnXo11wdz3SYnMPwWa80cJkh5JTpZzt6C8d5HXuVbAhzzDa728yx3i688RSVHyJVqCxS2QrqG8m3xoMZDiFhwCzL6ZPXy2FrdWBQ9TBqyy8o9hTsdS4bocTtqiizbp7XpcxHHbJEVLrYpmtzwG4B9VJlLGzSfQtn7e1qmg1ORmrur&X-Amz-Signature=12920c7775da7309ecba44256635caa50e23a2e374edb9c9a8a89e938c2f120e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRLRBWE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9lD8BhNAhXsy6RQLO3LAs%2B8f%2BMNAM6gpOwX%2FoKC2q7AiEAk7CcAq96mbFIJCbkmtKKHpZyJpXXUdmPS4j%2B%2BIFHoG4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClweH%2BiT%2FTLWm8ngyrcA0jRbDgnquK6mqn3CHC%2FkumLR%2BDtCPvf8VnKFUb4XbdjzIWbzrDtqFgreubah1EIC1uu0s07DyVN%2BczOirIesTySoqucJ%2BCAQaDzDUnCY0uPyJX1RS6T23nML640hsl3FWG4bIUjJaA8WnkD4N%2Fh%2BMDSKcB%2BR%2FnAkdOnN0D3Dt1Suuevx9wUFejRDbpNCoQRifFaadMdj6d%2F%2BB5t%2F3%2FfdQ6kKa4u0Ejmw9BbcpK0IkCZPUY8Okj1EB0%2B8fIjXi5Q3PbpG3hLJAvT85TofgBg5tBx4m03dhub7JaaraITQkGif3Aco%2B3LsngpQ3N0PIeAvk7DgJw2LF3Rfc2NXNrP3mnd9fEux11uelwETkrGmqGl3RtU1xo%2F%2F90BKL81sZ5bPioPE4KLvYeJREex%2BqGAqkDpt8zvI7bDuqBvTrTQdMTgCZmJc1gBdJ0fYgVD81DYxi3xEfnsinreGZH8bgiMeAZz6OUGE9umdMBdx6Oi4%2FaAZ8WAKRnl0wLJ0zmykACgOv1Ix9sE6Dj49KD%2BI53SB7I69mORRaWpZBcrA1zhjxIYXAb32HpLpulJG75D20nLlBobqJ%2BdvBeyXtvldYrco0vK55%2FrDYMuwL8E8omENsTFQVOZKNhHmAO%2BTosZMLfKt8MGOqUBro%2FLAr7BWkDz8ibtLNwVwWcQ1iFWwfr1s35g%2BKEULD2b3kVBnXo11wdz3SYnMPwWa80cJkh5JTpZzt6C8d5HXuVbAhzzDa728yx3i688RSVHyJVqCxS2QrqG8m3xoMZDiFhwCzL6ZPXy2FrdWBQ9TBqyy8o9hTsdS4bocTtqiizbp7XpcxHHbJEVLrYpmtzwG4B9VJlLGzSfQtn7e1qmg1ORmrur&X-Amz-Signature=dd6ca8bda9fa1ee9618338c52eb6baf3527ee466597745b55d34b441ab86d031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRLRBWE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9lD8BhNAhXsy6RQLO3LAs%2B8f%2BMNAM6gpOwX%2FoKC2q7AiEAk7CcAq96mbFIJCbkmtKKHpZyJpXXUdmPS4j%2B%2BIFHoG4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClweH%2BiT%2FTLWm8ngyrcA0jRbDgnquK6mqn3CHC%2FkumLR%2BDtCPvf8VnKFUb4XbdjzIWbzrDtqFgreubah1EIC1uu0s07DyVN%2BczOirIesTySoqucJ%2BCAQaDzDUnCY0uPyJX1RS6T23nML640hsl3FWG4bIUjJaA8WnkD4N%2Fh%2BMDSKcB%2BR%2FnAkdOnN0D3Dt1Suuevx9wUFejRDbpNCoQRifFaadMdj6d%2F%2BB5t%2F3%2FfdQ6kKa4u0Ejmw9BbcpK0IkCZPUY8Okj1EB0%2B8fIjXi5Q3PbpG3hLJAvT85TofgBg5tBx4m03dhub7JaaraITQkGif3Aco%2B3LsngpQ3N0PIeAvk7DgJw2LF3Rfc2NXNrP3mnd9fEux11uelwETkrGmqGl3RtU1xo%2F%2F90BKL81sZ5bPioPE4KLvYeJREex%2BqGAqkDpt8zvI7bDuqBvTrTQdMTgCZmJc1gBdJ0fYgVD81DYxi3xEfnsinreGZH8bgiMeAZz6OUGE9umdMBdx6Oi4%2FaAZ8WAKRnl0wLJ0zmykACgOv1Ix9sE6Dj49KD%2BI53SB7I69mORRaWpZBcrA1zhjxIYXAb32HpLpulJG75D20nLlBobqJ%2BdvBeyXtvldYrco0vK55%2FrDYMuwL8E8omENsTFQVOZKNhHmAO%2BTosZMLfKt8MGOqUBro%2FLAr7BWkDz8ibtLNwVwWcQ1iFWwfr1s35g%2BKEULD2b3kVBnXo11wdz3SYnMPwWa80cJkh5JTpZzt6C8d5HXuVbAhzzDa728yx3i688RSVHyJVqCxS2QrqG8m3xoMZDiFhwCzL6ZPXy2FrdWBQ9TBqyy8o9hTsdS4bocTtqiizbp7XpcxHHbJEVLrYpmtzwG4B9VJlLGzSfQtn7e1qmg1ORmrur&X-Amz-Signature=001217c5f89a76a553569b64ee7e0f06c92d6ed56194d06dc30c64402ae4d60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRLRBWE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9lD8BhNAhXsy6RQLO3LAs%2B8f%2BMNAM6gpOwX%2FoKC2q7AiEAk7CcAq96mbFIJCbkmtKKHpZyJpXXUdmPS4j%2B%2BIFHoG4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClweH%2BiT%2FTLWm8ngyrcA0jRbDgnquK6mqn3CHC%2FkumLR%2BDtCPvf8VnKFUb4XbdjzIWbzrDtqFgreubah1EIC1uu0s07DyVN%2BczOirIesTySoqucJ%2BCAQaDzDUnCY0uPyJX1RS6T23nML640hsl3FWG4bIUjJaA8WnkD4N%2Fh%2BMDSKcB%2BR%2FnAkdOnN0D3Dt1Suuevx9wUFejRDbpNCoQRifFaadMdj6d%2F%2BB5t%2F3%2FfdQ6kKa4u0Ejmw9BbcpK0IkCZPUY8Okj1EB0%2B8fIjXi5Q3PbpG3hLJAvT85TofgBg5tBx4m03dhub7JaaraITQkGif3Aco%2B3LsngpQ3N0PIeAvk7DgJw2LF3Rfc2NXNrP3mnd9fEux11uelwETkrGmqGl3RtU1xo%2F%2F90BKL81sZ5bPioPE4KLvYeJREex%2BqGAqkDpt8zvI7bDuqBvTrTQdMTgCZmJc1gBdJ0fYgVD81DYxi3xEfnsinreGZH8bgiMeAZz6OUGE9umdMBdx6Oi4%2FaAZ8WAKRnl0wLJ0zmykACgOv1Ix9sE6Dj49KD%2BI53SB7I69mORRaWpZBcrA1zhjxIYXAb32HpLpulJG75D20nLlBobqJ%2BdvBeyXtvldYrco0vK55%2FrDYMuwL8E8omENsTFQVOZKNhHmAO%2BTosZMLfKt8MGOqUBro%2FLAr7BWkDz8ibtLNwVwWcQ1iFWwfr1s35g%2BKEULD2b3kVBnXo11wdz3SYnMPwWa80cJkh5JTpZzt6C8d5HXuVbAhzzDa728yx3i688RSVHyJVqCxS2QrqG8m3xoMZDiFhwCzL6ZPXy2FrdWBQ9TBqyy8o9hTsdS4bocTtqiizbp7XpcxHHbJEVLrYpmtzwG4B9VJlLGzSfQtn7e1qmg1ORmrur&X-Amz-Signature=0252dfa85a575f3e4e369f16604dffa09ab89d067fcbffacc02d0a51e7a7572f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

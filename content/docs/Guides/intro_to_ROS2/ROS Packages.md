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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MYEWF5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEthbxzdM%2FSAddBicqJK7NErT%2BWVHZ7RmFEgP4TCr%2F3AiEA%2Bubn8Z2O9txHIZtfZ1hBy9FQ4oExr3EhtITG7iBOAM0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlwp2i6tDatfyOrwSrcA7AIu1EZ9hpHAGVKZVbF632ZOZ%2B7iwLSxyyZyiPuQXtYIkRMBaoZtdqvke700oIg7laVNhfP4R9%2ByAoRSWPljvcGl6MYRtA5fODfH9pNWqfCx%2BKuvuNEv1iloKYsz2eMBhuPyWd75dw9Rc2gbhI8QcoaLVG4igeKG3xsL1x%2Bux%2Ff6ezofXQNaLjh%2B7YvjRStl0mt0FRCfqt9B9uagdRSGsDcAjQVpF4qPnSuwCWJ1SCJh11m%2BgaI00txoP%2BOmV8OBk9RANbziNxaMnaxfizlGS17btVeOGVmzYQ7rMgdq7bcDmtkh9moZt72dlXsIGZdao3E9zm%2F7RnR4kjRLdqkb4ykryQQ9AxhqJv%2BN9YCE%2FJiE1dNW9RSfdaiifGngHBTuHy%2Bce32Bv2tbXwVcVWtMXVWeP85dH3XD4tef59Ty8FhZAEGk5Vx5PRpxVfF2n2UCIqBOjIciPjY0mJDoRlXJruXInyzz65FOd2lg4tKxrytnNGa%2Bm76qh2nWh2EFQWk4yuSVFOfndZByZbg1uakoDLH71A7c89ZNH1utc9qygRNgTdVi6D2coqdw3FIZ8BjlR1%2FoO3LJcPWOfiHZ9tV4bx4rMaTtoL84FoosgDUhxXuHnTvKNqmt%2BBfmZOFMNa%2FtcAGOqUB96AdQ%2Fy3oeybcvL0uFcqOdOUhMXk%2FWb3R96ZHbHs%2FARgcqdOxTxqV98QiSihEGJDTCM31trHwS9F5ZGoqM90de51K5E28wYiaP4Y%2B1t1nNZQ9GcA8xBe5a%2BlYA1OIocSuicvmt4bTje0mBO71HNsmDCYctKHY7i25HAmmzqdO7LQUMg2T9zWt9FXpQOQwq1WHek9tNLh5c5P11NvxWcODJ4pDLnK&X-Amz-Signature=d50c7b52aa9ca3d0d5705b8e4e8db185f61a6e600943bfda43cb6c5d0d1b38e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MYEWF5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEthbxzdM%2FSAddBicqJK7NErT%2BWVHZ7RmFEgP4TCr%2F3AiEA%2Bubn8Z2O9txHIZtfZ1hBy9FQ4oExr3EhtITG7iBOAM0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlwp2i6tDatfyOrwSrcA7AIu1EZ9hpHAGVKZVbF632ZOZ%2B7iwLSxyyZyiPuQXtYIkRMBaoZtdqvke700oIg7laVNhfP4R9%2ByAoRSWPljvcGl6MYRtA5fODfH9pNWqfCx%2BKuvuNEv1iloKYsz2eMBhuPyWd75dw9Rc2gbhI8QcoaLVG4igeKG3xsL1x%2Bux%2Ff6ezofXQNaLjh%2B7YvjRStl0mt0FRCfqt9B9uagdRSGsDcAjQVpF4qPnSuwCWJ1SCJh11m%2BgaI00txoP%2BOmV8OBk9RANbziNxaMnaxfizlGS17btVeOGVmzYQ7rMgdq7bcDmtkh9moZt72dlXsIGZdao3E9zm%2F7RnR4kjRLdqkb4ykryQQ9AxhqJv%2BN9YCE%2FJiE1dNW9RSfdaiifGngHBTuHy%2Bce32Bv2tbXwVcVWtMXVWeP85dH3XD4tef59Ty8FhZAEGk5Vx5PRpxVfF2n2UCIqBOjIciPjY0mJDoRlXJruXInyzz65FOd2lg4tKxrytnNGa%2Bm76qh2nWh2EFQWk4yuSVFOfndZByZbg1uakoDLH71A7c89ZNH1utc9qygRNgTdVi6D2coqdw3FIZ8BjlR1%2FoO3LJcPWOfiHZ9tV4bx4rMaTtoL84FoosgDUhxXuHnTvKNqmt%2BBfmZOFMNa%2FtcAGOqUB96AdQ%2Fy3oeybcvL0uFcqOdOUhMXk%2FWb3R96ZHbHs%2FARgcqdOxTxqV98QiSihEGJDTCM31trHwS9F5ZGoqM90de51K5E28wYiaP4Y%2B1t1nNZQ9GcA8xBe5a%2BlYA1OIocSuicvmt4bTje0mBO71HNsmDCYctKHY7i25HAmmzqdO7LQUMg2T9zWt9FXpQOQwq1WHek9tNLh5c5P11NvxWcODJ4pDLnK&X-Amz-Signature=01472fd44af263e841f54d12572c17c0cd830b3a1e7325b7106eb676945c5816&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MYEWF5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEthbxzdM%2FSAddBicqJK7NErT%2BWVHZ7RmFEgP4TCr%2F3AiEA%2Bubn8Z2O9txHIZtfZ1hBy9FQ4oExr3EhtITG7iBOAM0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlwp2i6tDatfyOrwSrcA7AIu1EZ9hpHAGVKZVbF632ZOZ%2B7iwLSxyyZyiPuQXtYIkRMBaoZtdqvke700oIg7laVNhfP4R9%2ByAoRSWPljvcGl6MYRtA5fODfH9pNWqfCx%2BKuvuNEv1iloKYsz2eMBhuPyWd75dw9Rc2gbhI8QcoaLVG4igeKG3xsL1x%2Bux%2Ff6ezofXQNaLjh%2B7YvjRStl0mt0FRCfqt9B9uagdRSGsDcAjQVpF4qPnSuwCWJ1SCJh11m%2BgaI00txoP%2BOmV8OBk9RANbziNxaMnaxfizlGS17btVeOGVmzYQ7rMgdq7bcDmtkh9moZt72dlXsIGZdao3E9zm%2F7RnR4kjRLdqkb4ykryQQ9AxhqJv%2BN9YCE%2FJiE1dNW9RSfdaiifGngHBTuHy%2Bce32Bv2tbXwVcVWtMXVWeP85dH3XD4tef59Ty8FhZAEGk5Vx5PRpxVfF2n2UCIqBOjIciPjY0mJDoRlXJruXInyzz65FOd2lg4tKxrytnNGa%2Bm76qh2nWh2EFQWk4yuSVFOfndZByZbg1uakoDLH71A7c89ZNH1utc9qygRNgTdVi6D2coqdw3FIZ8BjlR1%2FoO3LJcPWOfiHZ9tV4bx4rMaTtoL84FoosgDUhxXuHnTvKNqmt%2BBfmZOFMNa%2FtcAGOqUB96AdQ%2Fy3oeybcvL0uFcqOdOUhMXk%2FWb3R96ZHbHs%2FARgcqdOxTxqV98QiSihEGJDTCM31trHwS9F5ZGoqM90de51K5E28wYiaP4Y%2B1t1nNZQ9GcA8xBe5a%2BlYA1OIocSuicvmt4bTje0mBO71HNsmDCYctKHY7i25HAmmzqdO7LQUMg2T9zWt9FXpQOQwq1WHek9tNLh5c5P11NvxWcODJ4pDLnK&X-Amz-Signature=678256b25acbd505921dac3181d326996792f3b662edce223a05aec7ca0f0b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MYEWF5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEthbxzdM%2FSAddBicqJK7NErT%2BWVHZ7RmFEgP4TCr%2F3AiEA%2Bubn8Z2O9txHIZtfZ1hBy9FQ4oExr3EhtITG7iBOAM0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlwp2i6tDatfyOrwSrcA7AIu1EZ9hpHAGVKZVbF632ZOZ%2B7iwLSxyyZyiPuQXtYIkRMBaoZtdqvke700oIg7laVNhfP4R9%2ByAoRSWPljvcGl6MYRtA5fODfH9pNWqfCx%2BKuvuNEv1iloKYsz2eMBhuPyWd75dw9Rc2gbhI8QcoaLVG4igeKG3xsL1x%2Bux%2Ff6ezofXQNaLjh%2B7YvjRStl0mt0FRCfqt9B9uagdRSGsDcAjQVpF4qPnSuwCWJ1SCJh11m%2BgaI00txoP%2BOmV8OBk9RANbziNxaMnaxfizlGS17btVeOGVmzYQ7rMgdq7bcDmtkh9moZt72dlXsIGZdao3E9zm%2F7RnR4kjRLdqkb4ykryQQ9AxhqJv%2BN9YCE%2FJiE1dNW9RSfdaiifGngHBTuHy%2Bce32Bv2tbXwVcVWtMXVWeP85dH3XD4tef59Ty8FhZAEGk5Vx5PRpxVfF2n2UCIqBOjIciPjY0mJDoRlXJruXInyzz65FOd2lg4tKxrytnNGa%2Bm76qh2nWh2EFQWk4yuSVFOfndZByZbg1uakoDLH71A7c89ZNH1utc9qygRNgTdVi6D2coqdw3FIZ8BjlR1%2FoO3LJcPWOfiHZ9tV4bx4rMaTtoL84FoosgDUhxXuHnTvKNqmt%2BBfmZOFMNa%2FtcAGOqUB96AdQ%2Fy3oeybcvL0uFcqOdOUhMXk%2FWb3R96ZHbHs%2FARgcqdOxTxqV98QiSihEGJDTCM31trHwS9F5ZGoqM90de51K5E28wYiaP4Y%2B1t1nNZQ9GcA8xBe5a%2BlYA1OIocSuicvmt4bTje0mBO71HNsmDCYctKHY7i25HAmmzqdO7LQUMg2T9zWt9FXpQOQwq1WHek9tNLh5c5P11NvxWcODJ4pDLnK&X-Amz-Signature=2533560b5268797d383e8a40f8c79e4e4630e6cd2b7fd7bfd881f3e9b97b2266&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MYEWF5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEthbxzdM%2FSAddBicqJK7NErT%2BWVHZ7RmFEgP4TCr%2F3AiEA%2Bubn8Z2O9txHIZtfZ1hBy9FQ4oExr3EhtITG7iBOAM0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlwp2i6tDatfyOrwSrcA7AIu1EZ9hpHAGVKZVbF632ZOZ%2B7iwLSxyyZyiPuQXtYIkRMBaoZtdqvke700oIg7laVNhfP4R9%2ByAoRSWPljvcGl6MYRtA5fODfH9pNWqfCx%2BKuvuNEv1iloKYsz2eMBhuPyWd75dw9Rc2gbhI8QcoaLVG4igeKG3xsL1x%2Bux%2Ff6ezofXQNaLjh%2B7YvjRStl0mt0FRCfqt9B9uagdRSGsDcAjQVpF4qPnSuwCWJ1SCJh11m%2BgaI00txoP%2BOmV8OBk9RANbziNxaMnaxfizlGS17btVeOGVmzYQ7rMgdq7bcDmtkh9moZt72dlXsIGZdao3E9zm%2F7RnR4kjRLdqkb4ykryQQ9AxhqJv%2BN9YCE%2FJiE1dNW9RSfdaiifGngHBTuHy%2Bce32Bv2tbXwVcVWtMXVWeP85dH3XD4tef59Ty8FhZAEGk5Vx5PRpxVfF2n2UCIqBOjIciPjY0mJDoRlXJruXInyzz65FOd2lg4tKxrytnNGa%2Bm76qh2nWh2EFQWk4yuSVFOfndZByZbg1uakoDLH71A7c89ZNH1utc9qygRNgTdVi6D2coqdw3FIZ8BjlR1%2FoO3LJcPWOfiHZ9tV4bx4rMaTtoL84FoosgDUhxXuHnTvKNqmt%2BBfmZOFMNa%2FtcAGOqUB96AdQ%2Fy3oeybcvL0uFcqOdOUhMXk%2FWb3R96ZHbHs%2FARgcqdOxTxqV98QiSihEGJDTCM31trHwS9F5ZGoqM90de51K5E28wYiaP4Y%2B1t1nNZQ9GcA8xBe5a%2BlYA1OIocSuicvmt4bTje0mBO71HNsmDCYctKHY7i25HAmmzqdO7LQUMg2T9zWt9FXpQOQwq1WHek9tNLh5c5P11NvxWcODJ4pDLnK&X-Amz-Signature=5b36f0664041f4d7eab802d9b798a89234f25334f5b622f10585ea49d542d6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MYEWF5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEthbxzdM%2FSAddBicqJK7NErT%2BWVHZ7RmFEgP4TCr%2F3AiEA%2Bubn8Z2O9txHIZtfZ1hBy9FQ4oExr3EhtITG7iBOAM0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlwp2i6tDatfyOrwSrcA7AIu1EZ9hpHAGVKZVbF632ZOZ%2B7iwLSxyyZyiPuQXtYIkRMBaoZtdqvke700oIg7laVNhfP4R9%2ByAoRSWPljvcGl6MYRtA5fODfH9pNWqfCx%2BKuvuNEv1iloKYsz2eMBhuPyWd75dw9Rc2gbhI8QcoaLVG4igeKG3xsL1x%2Bux%2Ff6ezofXQNaLjh%2B7YvjRStl0mt0FRCfqt9B9uagdRSGsDcAjQVpF4qPnSuwCWJ1SCJh11m%2BgaI00txoP%2BOmV8OBk9RANbziNxaMnaxfizlGS17btVeOGVmzYQ7rMgdq7bcDmtkh9moZt72dlXsIGZdao3E9zm%2F7RnR4kjRLdqkb4ykryQQ9AxhqJv%2BN9YCE%2FJiE1dNW9RSfdaiifGngHBTuHy%2Bce32Bv2tbXwVcVWtMXVWeP85dH3XD4tef59Ty8FhZAEGk5Vx5PRpxVfF2n2UCIqBOjIciPjY0mJDoRlXJruXInyzz65FOd2lg4tKxrytnNGa%2Bm76qh2nWh2EFQWk4yuSVFOfndZByZbg1uakoDLH71A7c89ZNH1utc9qygRNgTdVi6D2coqdw3FIZ8BjlR1%2FoO3LJcPWOfiHZ9tV4bx4rMaTtoL84FoosgDUhxXuHnTvKNqmt%2BBfmZOFMNa%2FtcAGOqUB96AdQ%2Fy3oeybcvL0uFcqOdOUhMXk%2FWb3R96ZHbHs%2FARgcqdOxTxqV98QiSihEGJDTCM31trHwS9F5ZGoqM90de51K5E28wYiaP4Y%2B1t1nNZQ9GcA8xBe5a%2BlYA1OIocSuicvmt4bTje0mBO71HNsmDCYctKHY7i25HAmmzqdO7LQUMg2T9zWt9FXpQOQwq1WHek9tNLh5c5P11NvxWcODJ4pDLnK&X-Amz-Signature=15e85cb568e4009250fe46c6ee104e1d3de81473c328c497da5bc9d3a82c1d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MYEWF5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEthbxzdM%2FSAddBicqJK7NErT%2BWVHZ7RmFEgP4TCr%2F3AiEA%2Bubn8Z2O9txHIZtfZ1hBy9FQ4oExr3EhtITG7iBOAM0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlwp2i6tDatfyOrwSrcA7AIu1EZ9hpHAGVKZVbF632ZOZ%2B7iwLSxyyZyiPuQXtYIkRMBaoZtdqvke700oIg7laVNhfP4R9%2ByAoRSWPljvcGl6MYRtA5fODfH9pNWqfCx%2BKuvuNEv1iloKYsz2eMBhuPyWd75dw9Rc2gbhI8QcoaLVG4igeKG3xsL1x%2Bux%2Ff6ezofXQNaLjh%2B7YvjRStl0mt0FRCfqt9B9uagdRSGsDcAjQVpF4qPnSuwCWJ1SCJh11m%2BgaI00txoP%2BOmV8OBk9RANbziNxaMnaxfizlGS17btVeOGVmzYQ7rMgdq7bcDmtkh9moZt72dlXsIGZdao3E9zm%2F7RnR4kjRLdqkb4ykryQQ9AxhqJv%2BN9YCE%2FJiE1dNW9RSfdaiifGngHBTuHy%2Bce32Bv2tbXwVcVWtMXVWeP85dH3XD4tef59Ty8FhZAEGk5Vx5PRpxVfF2n2UCIqBOjIciPjY0mJDoRlXJruXInyzz65FOd2lg4tKxrytnNGa%2Bm76qh2nWh2EFQWk4yuSVFOfndZByZbg1uakoDLH71A7c89ZNH1utc9qygRNgTdVi6D2coqdw3FIZ8BjlR1%2FoO3LJcPWOfiHZ9tV4bx4rMaTtoL84FoosgDUhxXuHnTvKNqmt%2BBfmZOFMNa%2FtcAGOqUB96AdQ%2Fy3oeybcvL0uFcqOdOUhMXk%2FWb3R96ZHbHs%2FARgcqdOxTxqV98QiSihEGJDTCM31trHwS9F5ZGoqM90de51K5E28wYiaP4Y%2B1t1nNZQ9GcA8xBe5a%2BlYA1OIocSuicvmt4bTje0mBO71HNsmDCYctKHY7i25HAmmzqdO7LQUMg2T9zWt9FXpQOQwq1WHek9tNLh5c5P11NvxWcODJ4pDLnK&X-Amz-Signature=0a0f4b54d590ed9b7751d95d900d543d47d95cdbced4b2b0c8ea4669c5833edd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

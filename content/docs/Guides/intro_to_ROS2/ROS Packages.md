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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQUTR6U%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXTzhSsx2hpfiqru6ArKHyJSSBwDene8UISZLNOFCzFwIgGRs4b8IaRcwUX1tGFASvVogl5xSIQLDwKm4vxc8HAiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHtGpTq2SV986W0ShCrcA5rvjFnVwgp9Ebso9fzdZbZWkYqXFyC4SbI7zOVXXfob7Itf3NdmjKvRT84R1ID5pgXTBm6AdJMxcSjgpTvxg9JzcaGwFdtPDBYDWKnek1LQxQDVoojShuPZ1ULghEItYAFS95yDwvVvuh8O%2FOGQd82Ww3dNHlweu4uezGve89Jbd8sb3S0t%2BDThczeLhwKEFxDff1LFeAK%2F0iZpOYrAq3xxLOWexkSCLP6W10CfB1wNZ%2F3KgYWnr9u1zYHXM0Pvw8r2o5%2BLt%2BVJwmVl%2FgBZvRklX%2FtfiKrNC7ZFLszZhMcBRKi88EWIZMAkxh3APbBx46hAfVWmlznP5u3U5No4tp429jSHjtKCvJaxUkxT9tcuE3d6UdCcCs9IvJ8xZitZZTyG1Uk%2BY%2Fn5aC4YS05ZLwDxlnuAwc0wKv7%2BGKTv6Kx5UPsCuwlZ5ixSUGZnX3xodPDSQnWULdLQiK3cF31Ymr2ApsKXpC8mwa%2BDxofP6ul4bOQK7AfcOPjiULE5hB89wb2yPrHjR4M0kUcQkZPvzPEa4QWoxkUEJWIPAzyEZuotWi4o66GwBEydbyHFiQsphYF4%2BQG59ozR63uRZ%2FauC%2BRViJcN7PmD5W4vaL5U5JD0b8NPG%2B28%2BltrEIgbMLe5kL8GOqUBeS%2FNJQ6V8Hymo%2FpSrUxdI2ScbYM%2BVz4TitzhgncLgCDug4wUZJunDzlqU%2BhwrZeQMSqAE1b7rU5G0AOGfP7fY9aJKWT5iC7wvbwW0A0%2FG4jwztotevxQ98wvtd1Xa6DZbcY%2FeCUwJqXnoQj%2Bo4CVwPrsQl5WeJ%2FdGcPthhPk4aNT08W%2BUtV98c681nRzvWjg08DvMkGuzDBQjovox7nuToupreCf&X-Amz-Signature=a36fe0f87f4b0e8197fe882d710860b49644a39b04f4d770925b52d993f0b715&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQUTR6U%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXTzhSsx2hpfiqru6ArKHyJSSBwDene8UISZLNOFCzFwIgGRs4b8IaRcwUX1tGFASvVogl5xSIQLDwKm4vxc8HAiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHtGpTq2SV986W0ShCrcA5rvjFnVwgp9Ebso9fzdZbZWkYqXFyC4SbI7zOVXXfob7Itf3NdmjKvRT84R1ID5pgXTBm6AdJMxcSjgpTvxg9JzcaGwFdtPDBYDWKnek1LQxQDVoojShuPZ1ULghEItYAFS95yDwvVvuh8O%2FOGQd82Ww3dNHlweu4uezGve89Jbd8sb3S0t%2BDThczeLhwKEFxDff1LFeAK%2F0iZpOYrAq3xxLOWexkSCLP6W10CfB1wNZ%2F3KgYWnr9u1zYHXM0Pvw8r2o5%2BLt%2BVJwmVl%2FgBZvRklX%2FtfiKrNC7ZFLszZhMcBRKi88EWIZMAkxh3APbBx46hAfVWmlznP5u3U5No4tp429jSHjtKCvJaxUkxT9tcuE3d6UdCcCs9IvJ8xZitZZTyG1Uk%2BY%2Fn5aC4YS05ZLwDxlnuAwc0wKv7%2BGKTv6Kx5UPsCuwlZ5ixSUGZnX3xodPDSQnWULdLQiK3cF31Ymr2ApsKXpC8mwa%2BDxofP6ul4bOQK7AfcOPjiULE5hB89wb2yPrHjR4M0kUcQkZPvzPEa4QWoxkUEJWIPAzyEZuotWi4o66GwBEydbyHFiQsphYF4%2BQG59ozR63uRZ%2FauC%2BRViJcN7PmD5W4vaL5U5JD0b8NPG%2B28%2BltrEIgbMLe5kL8GOqUBeS%2FNJQ6V8Hymo%2FpSrUxdI2ScbYM%2BVz4TitzhgncLgCDug4wUZJunDzlqU%2BhwrZeQMSqAE1b7rU5G0AOGfP7fY9aJKWT5iC7wvbwW0A0%2FG4jwztotevxQ98wvtd1Xa6DZbcY%2FeCUwJqXnoQj%2Bo4CVwPrsQl5WeJ%2FdGcPthhPk4aNT08W%2BUtV98c681nRzvWjg08DvMkGuzDBQjovox7nuToupreCf&X-Amz-Signature=77d08cce127e8d4e28ceb660e1be26b7fd56bc175a770488a5b5bad07d5430f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQUTR6U%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXTzhSsx2hpfiqru6ArKHyJSSBwDene8UISZLNOFCzFwIgGRs4b8IaRcwUX1tGFASvVogl5xSIQLDwKm4vxc8HAiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHtGpTq2SV986W0ShCrcA5rvjFnVwgp9Ebso9fzdZbZWkYqXFyC4SbI7zOVXXfob7Itf3NdmjKvRT84R1ID5pgXTBm6AdJMxcSjgpTvxg9JzcaGwFdtPDBYDWKnek1LQxQDVoojShuPZ1ULghEItYAFS95yDwvVvuh8O%2FOGQd82Ww3dNHlweu4uezGve89Jbd8sb3S0t%2BDThczeLhwKEFxDff1LFeAK%2F0iZpOYrAq3xxLOWexkSCLP6W10CfB1wNZ%2F3KgYWnr9u1zYHXM0Pvw8r2o5%2BLt%2BVJwmVl%2FgBZvRklX%2FtfiKrNC7ZFLszZhMcBRKi88EWIZMAkxh3APbBx46hAfVWmlznP5u3U5No4tp429jSHjtKCvJaxUkxT9tcuE3d6UdCcCs9IvJ8xZitZZTyG1Uk%2BY%2Fn5aC4YS05ZLwDxlnuAwc0wKv7%2BGKTv6Kx5UPsCuwlZ5ixSUGZnX3xodPDSQnWULdLQiK3cF31Ymr2ApsKXpC8mwa%2BDxofP6ul4bOQK7AfcOPjiULE5hB89wb2yPrHjR4M0kUcQkZPvzPEa4QWoxkUEJWIPAzyEZuotWi4o66GwBEydbyHFiQsphYF4%2BQG59ozR63uRZ%2FauC%2BRViJcN7PmD5W4vaL5U5JD0b8NPG%2B28%2BltrEIgbMLe5kL8GOqUBeS%2FNJQ6V8Hymo%2FpSrUxdI2ScbYM%2BVz4TitzhgncLgCDug4wUZJunDzlqU%2BhwrZeQMSqAE1b7rU5G0AOGfP7fY9aJKWT5iC7wvbwW0A0%2FG4jwztotevxQ98wvtd1Xa6DZbcY%2FeCUwJqXnoQj%2Bo4CVwPrsQl5WeJ%2FdGcPthhPk4aNT08W%2BUtV98c681nRzvWjg08DvMkGuzDBQjovox7nuToupreCf&X-Amz-Signature=72068d3e0acfd97034259d519623d60d352e08077239a49399a607b42d9a6a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQUTR6U%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXTzhSsx2hpfiqru6ArKHyJSSBwDene8UISZLNOFCzFwIgGRs4b8IaRcwUX1tGFASvVogl5xSIQLDwKm4vxc8HAiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHtGpTq2SV986W0ShCrcA5rvjFnVwgp9Ebso9fzdZbZWkYqXFyC4SbI7zOVXXfob7Itf3NdmjKvRT84R1ID5pgXTBm6AdJMxcSjgpTvxg9JzcaGwFdtPDBYDWKnek1LQxQDVoojShuPZ1ULghEItYAFS95yDwvVvuh8O%2FOGQd82Ww3dNHlweu4uezGve89Jbd8sb3S0t%2BDThczeLhwKEFxDff1LFeAK%2F0iZpOYrAq3xxLOWexkSCLP6W10CfB1wNZ%2F3KgYWnr9u1zYHXM0Pvw8r2o5%2BLt%2BVJwmVl%2FgBZvRklX%2FtfiKrNC7ZFLszZhMcBRKi88EWIZMAkxh3APbBx46hAfVWmlznP5u3U5No4tp429jSHjtKCvJaxUkxT9tcuE3d6UdCcCs9IvJ8xZitZZTyG1Uk%2BY%2Fn5aC4YS05ZLwDxlnuAwc0wKv7%2BGKTv6Kx5UPsCuwlZ5ixSUGZnX3xodPDSQnWULdLQiK3cF31Ymr2ApsKXpC8mwa%2BDxofP6ul4bOQK7AfcOPjiULE5hB89wb2yPrHjR4M0kUcQkZPvzPEa4QWoxkUEJWIPAzyEZuotWi4o66GwBEydbyHFiQsphYF4%2BQG59ozR63uRZ%2FauC%2BRViJcN7PmD5W4vaL5U5JD0b8NPG%2B28%2BltrEIgbMLe5kL8GOqUBeS%2FNJQ6V8Hymo%2FpSrUxdI2ScbYM%2BVz4TitzhgncLgCDug4wUZJunDzlqU%2BhwrZeQMSqAE1b7rU5G0AOGfP7fY9aJKWT5iC7wvbwW0A0%2FG4jwztotevxQ98wvtd1Xa6DZbcY%2FeCUwJqXnoQj%2Bo4CVwPrsQl5WeJ%2FdGcPthhPk4aNT08W%2BUtV98c681nRzvWjg08DvMkGuzDBQjovox7nuToupreCf&X-Amz-Signature=400da02744f52fccbdaf8c9367de5c2ef1219a1111fc93bdc0b0044153743d94&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQUTR6U%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXTzhSsx2hpfiqru6ArKHyJSSBwDene8UISZLNOFCzFwIgGRs4b8IaRcwUX1tGFASvVogl5xSIQLDwKm4vxc8HAiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHtGpTq2SV986W0ShCrcA5rvjFnVwgp9Ebso9fzdZbZWkYqXFyC4SbI7zOVXXfob7Itf3NdmjKvRT84R1ID5pgXTBm6AdJMxcSjgpTvxg9JzcaGwFdtPDBYDWKnek1LQxQDVoojShuPZ1ULghEItYAFS95yDwvVvuh8O%2FOGQd82Ww3dNHlweu4uezGve89Jbd8sb3S0t%2BDThczeLhwKEFxDff1LFeAK%2F0iZpOYrAq3xxLOWexkSCLP6W10CfB1wNZ%2F3KgYWnr9u1zYHXM0Pvw8r2o5%2BLt%2BVJwmVl%2FgBZvRklX%2FtfiKrNC7ZFLszZhMcBRKi88EWIZMAkxh3APbBx46hAfVWmlznP5u3U5No4tp429jSHjtKCvJaxUkxT9tcuE3d6UdCcCs9IvJ8xZitZZTyG1Uk%2BY%2Fn5aC4YS05ZLwDxlnuAwc0wKv7%2BGKTv6Kx5UPsCuwlZ5ixSUGZnX3xodPDSQnWULdLQiK3cF31Ymr2ApsKXpC8mwa%2BDxofP6ul4bOQK7AfcOPjiULE5hB89wb2yPrHjR4M0kUcQkZPvzPEa4QWoxkUEJWIPAzyEZuotWi4o66GwBEydbyHFiQsphYF4%2BQG59ozR63uRZ%2FauC%2BRViJcN7PmD5W4vaL5U5JD0b8NPG%2B28%2BltrEIgbMLe5kL8GOqUBeS%2FNJQ6V8Hymo%2FpSrUxdI2ScbYM%2BVz4TitzhgncLgCDug4wUZJunDzlqU%2BhwrZeQMSqAE1b7rU5G0AOGfP7fY9aJKWT5iC7wvbwW0A0%2FG4jwztotevxQ98wvtd1Xa6DZbcY%2FeCUwJqXnoQj%2Bo4CVwPrsQl5WeJ%2FdGcPthhPk4aNT08W%2BUtV98c681nRzvWjg08DvMkGuzDBQjovox7nuToupreCf&X-Amz-Signature=a2b6bb67fda649a5bb3dfbc93d4995f8743882a642d8b698c195ff802bce4d34&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQUTR6U%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXTzhSsx2hpfiqru6ArKHyJSSBwDene8UISZLNOFCzFwIgGRs4b8IaRcwUX1tGFASvVogl5xSIQLDwKm4vxc8HAiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHtGpTq2SV986W0ShCrcA5rvjFnVwgp9Ebso9fzdZbZWkYqXFyC4SbI7zOVXXfob7Itf3NdmjKvRT84R1ID5pgXTBm6AdJMxcSjgpTvxg9JzcaGwFdtPDBYDWKnek1LQxQDVoojShuPZ1ULghEItYAFS95yDwvVvuh8O%2FOGQd82Ww3dNHlweu4uezGve89Jbd8sb3S0t%2BDThczeLhwKEFxDff1LFeAK%2F0iZpOYrAq3xxLOWexkSCLP6W10CfB1wNZ%2F3KgYWnr9u1zYHXM0Pvw8r2o5%2BLt%2BVJwmVl%2FgBZvRklX%2FtfiKrNC7ZFLszZhMcBRKi88EWIZMAkxh3APbBx46hAfVWmlznP5u3U5No4tp429jSHjtKCvJaxUkxT9tcuE3d6UdCcCs9IvJ8xZitZZTyG1Uk%2BY%2Fn5aC4YS05ZLwDxlnuAwc0wKv7%2BGKTv6Kx5UPsCuwlZ5ixSUGZnX3xodPDSQnWULdLQiK3cF31Ymr2ApsKXpC8mwa%2BDxofP6ul4bOQK7AfcOPjiULE5hB89wb2yPrHjR4M0kUcQkZPvzPEa4QWoxkUEJWIPAzyEZuotWi4o66GwBEydbyHFiQsphYF4%2BQG59ozR63uRZ%2FauC%2BRViJcN7PmD5W4vaL5U5JD0b8NPG%2B28%2BltrEIgbMLe5kL8GOqUBeS%2FNJQ6V8Hymo%2FpSrUxdI2ScbYM%2BVz4TitzhgncLgCDug4wUZJunDzlqU%2BhwrZeQMSqAE1b7rU5G0AOGfP7fY9aJKWT5iC7wvbwW0A0%2FG4jwztotevxQ98wvtd1Xa6DZbcY%2FeCUwJqXnoQj%2Bo4CVwPrsQl5WeJ%2FdGcPthhPk4aNT08W%2BUtV98c681nRzvWjg08DvMkGuzDBQjovox7nuToupreCf&X-Amz-Signature=7ecd159746035373091fb8b3f7d674d44d4e193899dff01828b816612579a444&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQUTR6U%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXTzhSsx2hpfiqru6ArKHyJSSBwDene8UISZLNOFCzFwIgGRs4b8IaRcwUX1tGFASvVogl5xSIQLDwKm4vxc8HAiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHtGpTq2SV986W0ShCrcA5rvjFnVwgp9Ebso9fzdZbZWkYqXFyC4SbI7zOVXXfob7Itf3NdmjKvRT84R1ID5pgXTBm6AdJMxcSjgpTvxg9JzcaGwFdtPDBYDWKnek1LQxQDVoojShuPZ1ULghEItYAFS95yDwvVvuh8O%2FOGQd82Ww3dNHlweu4uezGve89Jbd8sb3S0t%2BDThczeLhwKEFxDff1LFeAK%2F0iZpOYrAq3xxLOWexkSCLP6W10CfB1wNZ%2F3KgYWnr9u1zYHXM0Pvw8r2o5%2BLt%2BVJwmVl%2FgBZvRklX%2FtfiKrNC7ZFLszZhMcBRKi88EWIZMAkxh3APbBx46hAfVWmlznP5u3U5No4tp429jSHjtKCvJaxUkxT9tcuE3d6UdCcCs9IvJ8xZitZZTyG1Uk%2BY%2Fn5aC4YS05ZLwDxlnuAwc0wKv7%2BGKTv6Kx5UPsCuwlZ5ixSUGZnX3xodPDSQnWULdLQiK3cF31Ymr2ApsKXpC8mwa%2BDxofP6ul4bOQK7AfcOPjiULE5hB89wb2yPrHjR4M0kUcQkZPvzPEa4QWoxkUEJWIPAzyEZuotWi4o66GwBEydbyHFiQsphYF4%2BQG59ozR63uRZ%2FauC%2BRViJcN7PmD5W4vaL5U5JD0b8NPG%2B28%2BltrEIgbMLe5kL8GOqUBeS%2FNJQ6V8Hymo%2FpSrUxdI2ScbYM%2BVz4TitzhgncLgCDug4wUZJunDzlqU%2BhwrZeQMSqAE1b7rU5G0AOGfP7fY9aJKWT5iC7wvbwW0A0%2FG4jwztotevxQ98wvtd1Xa6DZbcY%2FeCUwJqXnoQj%2Bo4CVwPrsQl5WeJ%2FdGcPthhPk4aNT08W%2BUtV98c681nRzvWjg08DvMkGuzDBQjovox7nuToupreCf&X-Amz-Signature=90eb9bd8639d73f6ca0b2703ef072d9c58a6c4cf2b963af8e91a73e948e788d6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

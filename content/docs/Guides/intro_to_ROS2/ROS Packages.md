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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRDPY46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdA%2BKKdV3wapBaVs10kkHxODbJEkfg7xhZ%2FaQl%2BXT5LgIgYmDimqGjjd8OBsMCYV7tQcRyM%2FFD%2BR8Fg%2B3Jy7YP2z4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAbOSxKn4oC1CubyCrcA1AHao4bDklVpFnEzX%2BcAliTk0fpwnEPaQ873tq6%2BYO1qbADV%2BmtsGA2qBM%2Fh%2BwCmzKW%2BtCYXxb7ACGaKb2eZxQodcgheoMoQHweCETyYF6Zs0j8fKFmAkWRos%2Bqs5%2BEb%2BM6FIsR864sz%2FqkZVjLW2tOR1nnDC3VYU762meDoeJS96dab6OoDNML9V8eI9tqHRytc6qJqOGKS7US6DHY6ur3ckDfHmX6ObkMYTJ667nwwG2Ja9Mdw0mUOzkAmX6JGzlZRBAZFIzD3HdQUz0qMUzR%2B8zM4tnSqZfCiOOc6F3YDEUZCYlQHivi4tUIv%2F6jY%2F38n9rz96C8Q9PM2D%2BVEVhnUt4FLtOPZSABvWZ7DSW2rTDZzGyo7%2FNlNUUg8NaWLAyN5qJ8f7XP2F%2FDNwZt02pbW%2FuCDXMXu5F3xSyHU9Dvr%2BeAIK5m0u2%2FVjAG2%2B5JF%2FJBo2w4oXIcPM5rGtKino3czLHFkA9xNU5Ej0po3b0rjpyErsP74FJX55Chmw4EggW9Bv0Ndhu2v9eFZw%2BMOeCVFoZiNnpLKt%2BrVb8yVb%2BuN0xWfqIp2zWL8Y54mDHnHzHyzgXWuCIfbju0Mgxo3900owkp2Ju6zyHZ6xo%2BBJB3NC7BP%2FibDthYdUuJMNW%2F4sQGOqUBcJY%2BArmuFVAmUR%2Fsuw7Imk%2F%2B99bMEVd%2B4UKPMy%2FMbfvd5HmwkSJ%2Fg04LmoQB9uv%2BKvNFAxsBOQ%2FgvMFriL%2Bqve%2BB5ZeNf5AF%2Bn0zKKSHTvZpJs8GTL7N69kiu%2Blx54ohi2fi4IqpjqRVwU8rSMqcr4dZGQel%2BPKEcLnq7IaWTeCtRfrLOfPZuwBzZJdSACCzhi7fXDtBl7w5cw%2FlkguhE4LveaHD&X-Amz-Signature=5eb0a41306f53bb73015e59aa7d7a0b228ebaf32de3895136730375ac75968df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRDPY46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdA%2BKKdV3wapBaVs10kkHxODbJEkfg7xhZ%2FaQl%2BXT5LgIgYmDimqGjjd8OBsMCYV7tQcRyM%2FFD%2BR8Fg%2B3Jy7YP2z4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAbOSxKn4oC1CubyCrcA1AHao4bDklVpFnEzX%2BcAliTk0fpwnEPaQ873tq6%2BYO1qbADV%2BmtsGA2qBM%2Fh%2BwCmzKW%2BtCYXxb7ACGaKb2eZxQodcgheoMoQHweCETyYF6Zs0j8fKFmAkWRos%2Bqs5%2BEb%2BM6FIsR864sz%2FqkZVjLW2tOR1nnDC3VYU762meDoeJS96dab6OoDNML9V8eI9tqHRytc6qJqOGKS7US6DHY6ur3ckDfHmX6ObkMYTJ667nwwG2Ja9Mdw0mUOzkAmX6JGzlZRBAZFIzD3HdQUz0qMUzR%2B8zM4tnSqZfCiOOc6F3YDEUZCYlQHivi4tUIv%2F6jY%2F38n9rz96C8Q9PM2D%2BVEVhnUt4FLtOPZSABvWZ7DSW2rTDZzGyo7%2FNlNUUg8NaWLAyN5qJ8f7XP2F%2FDNwZt02pbW%2FuCDXMXu5F3xSyHU9Dvr%2BeAIK5m0u2%2FVjAG2%2B5JF%2FJBo2w4oXIcPM5rGtKino3czLHFkA9xNU5Ej0po3b0rjpyErsP74FJX55Chmw4EggW9Bv0Ndhu2v9eFZw%2BMOeCVFoZiNnpLKt%2BrVb8yVb%2BuN0xWfqIp2zWL8Y54mDHnHzHyzgXWuCIfbju0Mgxo3900owkp2Ju6zyHZ6xo%2BBJB3NC7BP%2FibDthYdUuJMNW%2F4sQGOqUBcJY%2BArmuFVAmUR%2Fsuw7Imk%2F%2B99bMEVd%2B4UKPMy%2FMbfvd5HmwkSJ%2Fg04LmoQB9uv%2BKvNFAxsBOQ%2FgvMFriL%2Bqve%2BB5ZeNf5AF%2Bn0zKKSHTvZpJs8GTL7N69kiu%2Blx54ohi2fi4IqpjqRVwU8rSMqcr4dZGQel%2BPKEcLnq7IaWTeCtRfrLOfPZuwBzZJdSACCzhi7fXDtBl7w5cw%2FlkguhE4LveaHD&X-Amz-Signature=106b5faeab029f7fd93a110a269e6286344ef6ec9c39072a020be6ff2ca4f14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRDPY46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdA%2BKKdV3wapBaVs10kkHxODbJEkfg7xhZ%2FaQl%2BXT5LgIgYmDimqGjjd8OBsMCYV7tQcRyM%2FFD%2BR8Fg%2B3Jy7YP2z4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAbOSxKn4oC1CubyCrcA1AHao4bDklVpFnEzX%2BcAliTk0fpwnEPaQ873tq6%2BYO1qbADV%2BmtsGA2qBM%2Fh%2BwCmzKW%2BtCYXxb7ACGaKb2eZxQodcgheoMoQHweCETyYF6Zs0j8fKFmAkWRos%2Bqs5%2BEb%2BM6FIsR864sz%2FqkZVjLW2tOR1nnDC3VYU762meDoeJS96dab6OoDNML9V8eI9tqHRytc6qJqOGKS7US6DHY6ur3ckDfHmX6ObkMYTJ667nwwG2Ja9Mdw0mUOzkAmX6JGzlZRBAZFIzD3HdQUz0qMUzR%2B8zM4tnSqZfCiOOc6F3YDEUZCYlQHivi4tUIv%2F6jY%2F38n9rz96C8Q9PM2D%2BVEVhnUt4FLtOPZSABvWZ7DSW2rTDZzGyo7%2FNlNUUg8NaWLAyN5qJ8f7XP2F%2FDNwZt02pbW%2FuCDXMXu5F3xSyHU9Dvr%2BeAIK5m0u2%2FVjAG2%2B5JF%2FJBo2w4oXIcPM5rGtKino3czLHFkA9xNU5Ej0po3b0rjpyErsP74FJX55Chmw4EggW9Bv0Ndhu2v9eFZw%2BMOeCVFoZiNnpLKt%2BrVb8yVb%2BuN0xWfqIp2zWL8Y54mDHnHzHyzgXWuCIfbju0Mgxo3900owkp2Ju6zyHZ6xo%2BBJB3NC7BP%2FibDthYdUuJMNW%2F4sQGOqUBcJY%2BArmuFVAmUR%2Fsuw7Imk%2F%2B99bMEVd%2B4UKPMy%2FMbfvd5HmwkSJ%2Fg04LmoQB9uv%2BKvNFAxsBOQ%2FgvMFriL%2Bqve%2BB5ZeNf5AF%2Bn0zKKSHTvZpJs8GTL7N69kiu%2Blx54ohi2fi4IqpjqRVwU8rSMqcr4dZGQel%2BPKEcLnq7IaWTeCtRfrLOfPZuwBzZJdSACCzhi7fXDtBl7w5cw%2FlkguhE4LveaHD&X-Amz-Signature=e3615b8f63a935fe0e0b9a5cebac9012cf90cccf20070a266b2aaeb9cb30f44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRDPY46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdA%2BKKdV3wapBaVs10kkHxODbJEkfg7xhZ%2FaQl%2BXT5LgIgYmDimqGjjd8OBsMCYV7tQcRyM%2FFD%2BR8Fg%2B3Jy7YP2z4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAbOSxKn4oC1CubyCrcA1AHao4bDklVpFnEzX%2BcAliTk0fpwnEPaQ873tq6%2BYO1qbADV%2BmtsGA2qBM%2Fh%2BwCmzKW%2BtCYXxb7ACGaKb2eZxQodcgheoMoQHweCETyYF6Zs0j8fKFmAkWRos%2Bqs5%2BEb%2BM6FIsR864sz%2FqkZVjLW2tOR1nnDC3VYU762meDoeJS96dab6OoDNML9V8eI9tqHRytc6qJqOGKS7US6DHY6ur3ckDfHmX6ObkMYTJ667nwwG2Ja9Mdw0mUOzkAmX6JGzlZRBAZFIzD3HdQUz0qMUzR%2B8zM4tnSqZfCiOOc6F3YDEUZCYlQHivi4tUIv%2F6jY%2F38n9rz96C8Q9PM2D%2BVEVhnUt4FLtOPZSABvWZ7DSW2rTDZzGyo7%2FNlNUUg8NaWLAyN5qJ8f7XP2F%2FDNwZt02pbW%2FuCDXMXu5F3xSyHU9Dvr%2BeAIK5m0u2%2FVjAG2%2B5JF%2FJBo2w4oXIcPM5rGtKino3czLHFkA9xNU5Ej0po3b0rjpyErsP74FJX55Chmw4EggW9Bv0Ndhu2v9eFZw%2BMOeCVFoZiNnpLKt%2BrVb8yVb%2BuN0xWfqIp2zWL8Y54mDHnHzHyzgXWuCIfbju0Mgxo3900owkp2Ju6zyHZ6xo%2BBJB3NC7BP%2FibDthYdUuJMNW%2F4sQGOqUBcJY%2BArmuFVAmUR%2Fsuw7Imk%2F%2B99bMEVd%2B4UKPMy%2FMbfvd5HmwkSJ%2Fg04LmoQB9uv%2BKvNFAxsBOQ%2FgvMFriL%2Bqve%2BB5ZeNf5AF%2Bn0zKKSHTvZpJs8GTL7N69kiu%2Blx54ohi2fi4IqpjqRVwU8rSMqcr4dZGQel%2BPKEcLnq7IaWTeCtRfrLOfPZuwBzZJdSACCzhi7fXDtBl7w5cw%2FlkguhE4LveaHD&X-Amz-Signature=70be8e2d96d8b4be1db66f193ea6b5d9745a7853630163a3d949fde20ab79250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRDPY46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdA%2BKKdV3wapBaVs10kkHxODbJEkfg7xhZ%2FaQl%2BXT5LgIgYmDimqGjjd8OBsMCYV7tQcRyM%2FFD%2BR8Fg%2B3Jy7YP2z4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAbOSxKn4oC1CubyCrcA1AHao4bDklVpFnEzX%2BcAliTk0fpwnEPaQ873tq6%2BYO1qbADV%2BmtsGA2qBM%2Fh%2BwCmzKW%2BtCYXxb7ACGaKb2eZxQodcgheoMoQHweCETyYF6Zs0j8fKFmAkWRos%2Bqs5%2BEb%2BM6FIsR864sz%2FqkZVjLW2tOR1nnDC3VYU762meDoeJS96dab6OoDNML9V8eI9tqHRytc6qJqOGKS7US6DHY6ur3ckDfHmX6ObkMYTJ667nwwG2Ja9Mdw0mUOzkAmX6JGzlZRBAZFIzD3HdQUz0qMUzR%2B8zM4tnSqZfCiOOc6F3YDEUZCYlQHivi4tUIv%2F6jY%2F38n9rz96C8Q9PM2D%2BVEVhnUt4FLtOPZSABvWZ7DSW2rTDZzGyo7%2FNlNUUg8NaWLAyN5qJ8f7XP2F%2FDNwZt02pbW%2FuCDXMXu5F3xSyHU9Dvr%2BeAIK5m0u2%2FVjAG2%2B5JF%2FJBo2w4oXIcPM5rGtKino3czLHFkA9xNU5Ej0po3b0rjpyErsP74FJX55Chmw4EggW9Bv0Ndhu2v9eFZw%2BMOeCVFoZiNnpLKt%2BrVb8yVb%2BuN0xWfqIp2zWL8Y54mDHnHzHyzgXWuCIfbju0Mgxo3900owkp2Ju6zyHZ6xo%2BBJB3NC7BP%2FibDthYdUuJMNW%2F4sQGOqUBcJY%2BArmuFVAmUR%2Fsuw7Imk%2F%2B99bMEVd%2B4UKPMy%2FMbfvd5HmwkSJ%2Fg04LmoQB9uv%2BKvNFAxsBOQ%2FgvMFriL%2Bqve%2BB5ZeNf5AF%2Bn0zKKSHTvZpJs8GTL7N69kiu%2Blx54ohi2fi4IqpjqRVwU8rSMqcr4dZGQel%2BPKEcLnq7IaWTeCtRfrLOfPZuwBzZJdSACCzhi7fXDtBl7w5cw%2FlkguhE4LveaHD&X-Amz-Signature=0f1199a860fa86f7b783e38a8cf7913af1bba4e85fc5607410c98f45acd72079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRDPY46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdA%2BKKdV3wapBaVs10kkHxODbJEkfg7xhZ%2FaQl%2BXT5LgIgYmDimqGjjd8OBsMCYV7tQcRyM%2FFD%2BR8Fg%2B3Jy7YP2z4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAbOSxKn4oC1CubyCrcA1AHao4bDklVpFnEzX%2BcAliTk0fpwnEPaQ873tq6%2BYO1qbADV%2BmtsGA2qBM%2Fh%2BwCmzKW%2BtCYXxb7ACGaKb2eZxQodcgheoMoQHweCETyYF6Zs0j8fKFmAkWRos%2Bqs5%2BEb%2BM6FIsR864sz%2FqkZVjLW2tOR1nnDC3VYU762meDoeJS96dab6OoDNML9V8eI9tqHRytc6qJqOGKS7US6DHY6ur3ckDfHmX6ObkMYTJ667nwwG2Ja9Mdw0mUOzkAmX6JGzlZRBAZFIzD3HdQUz0qMUzR%2B8zM4tnSqZfCiOOc6F3YDEUZCYlQHivi4tUIv%2F6jY%2F38n9rz96C8Q9PM2D%2BVEVhnUt4FLtOPZSABvWZ7DSW2rTDZzGyo7%2FNlNUUg8NaWLAyN5qJ8f7XP2F%2FDNwZt02pbW%2FuCDXMXu5F3xSyHU9Dvr%2BeAIK5m0u2%2FVjAG2%2B5JF%2FJBo2w4oXIcPM5rGtKino3czLHFkA9xNU5Ej0po3b0rjpyErsP74FJX55Chmw4EggW9Bv0Ndhu2v9eFZw%2BMOeCVFoZiNnpLKt%2BrVb8yVb%2BuN0xWfqIp2zWL8Y54mDHnHzHyzgXWuCIfbju0Mgxo3900owkp2Ju6zyHZ6xo%2BBJB3NC7BP%2FibDthYdUuJMNW%2F4sQGOqUBcJY%2BArmuFVAmUR%2Fsuw7Imk%2F%2B99bMEVd%2B4UKPMy%2FMbfvd5HmwkSJ%2Fg04LmoQB9uv%2BKvNFAxsBOQ%2FgvMFriL%2Bqve%2BB5ZeNf5AF%2Bn0zKKSHTvZpJs8GTL7N69kiu%2Blx54ohi2fi4IqpjqRVwU8rSMqcr4dZGQel%2BPKEcLnq7IaWTeCtRfrLOfPZuwBzZJdSACCzhi7fXDtBl7w5cw%2FlkguhE4LveaHD&X-Amz-Signature=04dd65cf46bc1bb425cfa593d55d5f04d6cc33fc01df27391f7cb0bd095e569e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRDPY46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdA%2BKKdV3wapBaVs10kkHxODbJEkfg7xhZ%2FaQl%2BXT5LgIgYmDimqGjjd8OBsMCYV7tQcRyM%2FFD%2BR8Fg%2B3Jy7YP2z4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAbOSxKn4oC1CubyCrcA1AHao4bDklVpFnEzX%2BcAliTk0fpwnEPaQ873tq6%2BYO1qbADV%2BmtsGA2qBM%2Fh%2BwCmzKW%2BtCYXxb7ACGaKb2eZxQodcgheoMoQHweCETyYF6Zs0j8fKFmAkWRos%2Bqs5%2BEb%2BM6FIsR864sz%2FqkZVjLW2tOR1nnDC3VYU762meDoeJS96dab6OoDNML9V8eI9tqHRytc6qJqOGKS7US6DHY6ur3ckDfHmX6ObkMYTJ667nwwG2Ja9Mdw0mUOzkAmX6JGzlZRBAZFIzD3HdQUz0qMUzR%2B8zM4tnSqZfCiOOc6F3YDEUZCYlQHivi4tUIv%2F6jY%2F38n9rz96C8Q9PM2D%2BVEVhnUt4FLtOPZSABvWZ7DSW2rTDZzGyo7%2FNlNUUg8NaWLAyN5qJ8f7XP2F%2FDNwZt02pbW%2FuCDXMXu5F3xSyHU9Dvr%2BeAIK5m0u2%2FVjAG2%2B5JF%2FJBo2w4oXIcPM5rGtKino3czLHFkA9xNU5Ej0po3b0rjpyErsP74FJX55Chmw4EggW9Bv0Ndhu2v9eFZw%2BMOeCVFoZiNnpLKt%2BrVb8yVb%2BuN0xWfqIp2zWL8Y54mDHnHzHyzgXWuCIfbju0Mgxo3900owkp2Ju6zyHZ6xo%2BBJB3NC7BP%2FibDthYdUuJMNW%2F4sQGOqUBcJY%2BArmuFVAmUR%2Fsuw7Imk%2F%2B99bMEVd%2B4UKPMy%2FMbfvd5HmwkSJ%2Fg04LmoQB9uv%2BKvNFAxsBOQ%2FgvMFriL%2Bqve%2BB5ZeNf5AF%2Bn0zKKSHTvZpJs8GTL7N69kiu%2Blx54ohi2fi4IqpjqRVwU8rSMqcr4dZGQel%2BPKEcLnq7IaWTeCtRfrLOfPZuwBzZJdSACCzhi7fXDtBl7w5cw%2FlkguhE4LveaHD&X-Amz-Signature=dc1f61a41b45c0f5230329ae2b3717b3fc0350ff938b1bfeb51d1a65bef01788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

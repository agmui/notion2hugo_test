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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIC24RHX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVwcj1ysc2Dh6iRUKeZdOQgVrVsg3Xrkg5I94hCkn%2BrAIgPK%2FziBLSZDUoUeh3Bs%2B1c76EQESsyhY0PeY4FFsPc3Yq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHxevKdZzHoBrwRtbyrcA%2BcUr%2FHdduH8QXvMnvV6zglfzhyhzEK%2F6kE5W23OjSzAz1oIKXnMw5Z48cPnwDw3WGEhPPEdb3lVCysOEr51Kvi%2BQUBVyRUpYoEM36M2pfBN7dtnlxKMGGOPmlXWLsjui5K%2B7RSvhkXFK6DB6ZcBmRhQUJRL4pCBHH4qS2XkKmw7MVn5KD5ztHOTk3KZtSl4kv5h2prXwNby1V7UBLfHE3CrglnADQ%2FqZpknHmqSt3Zc9F1z1t%2FwTIB2eYOW24wGtHvapWhoz0LX05ckCdLZIXlS7L5DXjY70Ab07o31A04FnS0AV3M%2B%2FyVUc5%2FGR0AtNtZDUWJXOGcq3vk7bRqahVFKqe%2BBBx6qbCzQRap8iq42dLjtjZSLQ5sL%2FXjwNrOtuSRNaE9kWMC2Azpom7b3N0IkSDQDZpriKQ21sykYlV9OOrkEYISo6UXoCdYucu8BWpy%2BOJveRo32O01ACK49xj%2BkB4d9ivjHZFN0mD8yL3roi%2F%2BKyWxu3ZIcZ9EiV5larx2tQJu5Uj3pNQcDnNx1CVKA5YfgBaq%2BacRikkZqSoc3nQZQyHSGrDz74KaoDh4Q5FV4n%2BBSLe0J0q34JLyJug9FvYMCqTaUUELSCnmxATWKTOPzloOp14lsdklxML%2Blm78GOqUB0DxFfpHSHFLGG7mjQQnwZK5xuNBfp3%2Bp%2BgMarrb7tB8mQhvJvHDDxhkRehQOyJGYIeQP69N6uA0gL%2BEZuz0trwYg0X%2BJC5NWbTPRg%2BYvguiBcvS0FD2sxk0J2hOcu1zenJpUTWMEhN962eyEDiPebdQMlR55lp2tWQHN56s%2FM%2Ffz4j7JTZ8FwRmbNkrMOkvSBCXYwOZ11IZjT28cQpg1AO0lpRe9&X-Amz-Signature=3b890573d4fa5b0e329af94a8ba16a6bb98a28386da7ecfb96446def6f92bc04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIC24RHX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVwcj1ysc2Dh6iRUKeZdOQgVrVsg3Xrkg5I94hCkn%2BrAIgPK%2FziBLSZDUoUeh3Bs%2B1c76EQESsyhY0PeY4FFsPc3Yq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHxevKdZzHoBrwRtbyrcA%2BcUr%2FHdduH8QXvMnvV6zglfzhyhzEK%2F6kE5W23OjSzAz1oIKXnMw5Z48cPnwDw3WGEhPPEdb3lVCysOEr51Kvi%2BQUBVyRUpYoEM36M2pfBN7dtnlxKMGGOPmlXWLsjui5K%2B7RSvhkXFK6DB6ZcBmRhQUJRL4pCBHH4qS2XkKmw7MVn5KD5ztHOTk3KZtSl4kv5h2prXwNby1V7UBLfHE3CrglnADQ%2FqZpknHmqSt3Zc9F1z1t%2FwTIB2eYOW24wGtHvapWhoz0LX05ckCdLZIXlS7L5DXjY70Ab07o31A04FnS0AV3M%2B%2FyVUc5%2FGR0AtNtZDUWJXOGcq3vk7bRqahVFKqe%2BBBx6qbCzQRap8iq42dLjtjZSLQ5sL%2FXjwNrOtuSRNaE9kWMC2Azpom7b3N0IkSDQDZpriKQ21sykYlV9OOrkEYISo6UXoCdYucu8BWpy%2BOJveRo32O01ACK49xj%2BkB4d9ivjHZFN0mD8yL3roi%2F%2BKyWxu3ZIcZ9EiV5larx2tQJu5Uj3pNQcDnNx1CVKA5YfgBaq%2BacRikkZqSoc3nQZQyHSGrDz74KaoDh4Q5FV4n%2BBSLe0J0q34JLyJug9FvYMCqTaUUELSCnmxATWKTOPzloOp14lsdklxML%2Blm78GOqUB0DxFfpHSHFLGG7mjQQnwZK5xuNBfp3%2Bp%2BgMarrb7tB8mQhvJvHDDxhkRehQOyJGYIeQP69N6uA0gL%2BEZuz0trwYg0X%2BJC5NWbTPRg%2BYvguiBcvS0FD2sxk0J2hOcu1zenJpUTWMEhN962eyEDiPebdQMlR55lp2tWQHN56s%2FM%2Ffz4j7JTZ8FwRmbNkrMOkvSBCXYwOZ11IZjT28cQpg1AO0lpRe9&X-Amz-Signature=fe03be65553c3346ff01d5330f246f4db320f03a5fe5fe0cde199989f1313f7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIC24RHX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVwcj1ysc2Dh6iRUKeZdOQgVrVsg3Xrkg5I94hCkn%2BrAIgPK%2FziBLSZDUoUeh3Bs%2B1c76EQESsyhY0PeY4FFsPc3Yq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHxevKdZzHoBrwRtbyrcA%2BcUr%2FHdduH8QXvMnvV6zglfzhyhzEK%2F6kE5W23OjSzAz1oIKXnMw5Z48cPnwDw3WGEhPPEdb3lVCysOEr51Kvi%2BQUBVyRUpYoEM36M2pfBN7dtnlxKMGGOPmlXWLsjui5K%2B7RSvhkXFK6DB6ZcBmRhQUJRL4pCBHH4qS2XkKmw7MVn5KD5ztHOTk3KZtSl4kv5h2prXwNby1V7UBLfHE3CrglnADQ%2FqZpknHmqSt3Zc9F1z1t%2FwTIB2eYOW24wGtHvapWhoz0LX05ckCdLZIXlS7L5DXjY70Ab07o31A04FnS0AV3M%2B%2FyVUc5%2FGR0AtNtZDUWJXOGcq3vk7bRqahVFKqe%2BBBx6qbCzQRap8iq42dLjtjZSLQ5sL%2FXjwNrOtuSRNaE9kWMC2Azpom7b3N0IkSDQDZpriKQ21sykYlV9OOrkEYISo6UXoCdYucu8BWpy%2BOJveRo32O01ACK49xj%2BkB4d9ivjHZFN0mD8yL3roi%2F%2BKyWxu3ZIcZ9EiV5larx2tQJu5Uj3pNQcDnNx1CVKA5YfgBaq%2BacRikkZqSoc3nQZQyHSGrDz74KaoDh4Q5FV4n%2BBSLe0J0q34JLyJug9FvYMCqTaUUELSCnmxATWKTOPzloOp14lsdklxML%2Blm78GOqUB0DxFfpHSHFLGG7mjQQnwZK5xuNBfp3%2Bp%2BgMarrb7tB8mQhvJvHDDxhkRehQOyJGYIeQP69N6uA0gL%2BEZuz0trwYg0X%2BJC5NWbTPRg%2BYvguiBcvS0FD2sxk0J2hOcu1zenJpUTWMEhN962eyEDiPebdQMlR55lp2tWQHN56s%2FM%2Ffz4j7JTZ8FwRmbNkrMOkvSBCXYwOZ11IZjT28cQpg1AO0lpRe9&X-Amz-Signature=bf31d15e65b43c4f1dbb1317edd7f4b2819dd29e8803e3319ce4e69497f7d27b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIC24RHX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVwcj1ysc2Dh6iRUKeZdOQgVrVsg3Xrkg5I94hCkn%2BrAIgPK%2FziBLSZDUoUeh3Bs%2B1c76EQESsyhY0PeY4FFsPc3Yq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHxevKdZzHoBrwRtbyrcA%2BcUr%2FHdduH8QXvMnvV6zglfzhyhzEK%2F6kE5W23OjSzAz1oIKXnMw5Z48cPnwDw3WGEhPPEdb3lVCysOEr51Kvi%2BQUBVyRUpYoEM36M2pfBN7dtnlxKMGGOPmlXWLsjui5K%2B7RSvhkXFK6DB6ZcBmRhQUJRL4pCBHH4qS2XkKmw7MVn5KD5ztHOTk3KZtSl4kv5h2prXwNby1V7UBLfHE3CrglnADQ%2FqZpknHmqSt3Zc9F1z1t%2FwTIB2eYOW24wGtHvapWhoz0LX05ckCdLZIXlS7L5DXjY70Ab07o31A04FnS0AV3M%2B%2FyVUc5%2FGR0AtNtZDUWJXOGcq3vk7bRqahVFKqe%2BBBx6qbCzQRap8iq42dLjtjZSLQ5sL%2FXjwNrOtuSRNaE9kWMC2Azpom7b3N0IkSDQDZpriKQ21sykYlV9OOrkEYISo6UXoCdYucu8BWpy%2BOJveRo32O01ACK49xj%2BkB4d9ivjHZFN0mD8yL3roi%2F%2BKyWxu3ZIcZ9EiV5larx2tQJu5Uj3pNQcDnNx1CVKA5YfgBaq%2BacRikkZqSoc3nQZQyHSGrDz74KaoDh4Q5FV4n%2BBSLe0J0q34JLyJug9FvYMCqTaUUELSCnmxATWKTOPzloOp14lsdklxML%2Blm78GOqUB0DxFfpHSHFLGG7mjQQnwZK5xuNBfp3%2Bp%2BgMarrb7tB8mQhvJvHDDxhkRehQOyJGYIeQP69N6uA0gL%2BEZuz0trwYg0X%2BJC5NWbTPRg%2BYvguiBcvS0FD2sxk0J2hOcu1zenJpUTWMEhN962eyEDiPebdQMlR55lp2tWQHN56s%2FM%2Ffz4j7JTZ8FwRmbNkrMOkvSBCXYwOZ11IZjT28cQpg1AO0lpRe9&X-Amz-Signature=9af5360c666ba6ab2d248a68f567fa5a40e6b37bd74161fab877598487e064f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIC24RHX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVwcj1ysc2Dh6iRUKeZdOQgVrVsg3Xrkg5I94hCkn%2BrAIgPK%2FziBLSZDUoUeh3Bs%2B1c76EQESsyhY0PeY4FFsPc3Yq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHxevKdZzHoBrwRtbyrcA%2BcUr%2FHdduH8QXvMnvV6zglfzhyhzEK%2F6kE5W23OjSzAz1oIKXnMw5Z48cPnwDw3WGEhPPEdb3lVCysOEr51Kvi%2BQUBVyRUpYoEM36M2pfBN7dtnlxKMGGOPmlXWLsjui5K%2B7RSvhkXFK6DB6ZcBmRhQUJRL4pCBHH4qS2XkKmw7MVn5KD5ztHOTk3KZtSl4kv5h2prXwNby1V7UBLfHE3CrglnADQ%2FqZpknHmqSt3Zc9F1z1t%2FwTIB2eYOW24wGtHvapWhoz0LX05ckCdLZIXlS7L5DXjY70Ab07o31A04FnS0AV3M%2B%2FyVUc5%2FGR0AtNtZDUWJXOGcq3vk7bRqahVFKqe%2BBBx6qbCzQRap8iq42dLjtjZSLQ5sL%2FXjwNrOtuSRNaE9kWMC2Azpom7b3N0IkSDQDZpriKQ21sykYlV9OOrkEYISo6UXoCdYucu8BWpy%2BOJveRo32O01ACK49xj%2BkB4d9ivjHZFN0mD8yL3roi%2F%2BKyWxu3ZIcZ9EiV5larx2tQJu5Uj3pNQcDnNx1CVKA5YfgBaq%2BacRikkZqSoc3nQZQyHSGrDz74KaoDh4Q5FV4n%2BBSLe0J0q34JLyJug9FvYMCqTaUUELSCnmxATWKTOPzloOp14lsdklxML%2Blm78GOqUB0DxFfpHSHFLGG7mjQQnwZK5xuNBfp3%2Bp%2BgMarrb7tB8mQhvJvHDDxhkRehQOyJGYIeQP69N6uA0gL%2BEZuz0trwYg0X%2BJC5NWbTPRg%2BYvguiBcvS0FD2sxk0J2hOcu1zenJpUTWMEhN962eyEDiPebdQMlR55lp2tWQHN56s%2FM%2Ffz4j7JTZ8FwRmbNkrMOkvSBCXYwOZ11IZjT28cQpg1AO0lpRe9&X-Amz-Signature=beeb9f4cd32d3338d17255d3a94065e5312ceb4825f7ab607d4ac3a482505860&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIC24RHX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVwcj1ysc2Dh6iRUKeZdOQgVrVsg3Xrkg5I94hCkn%2BrAIgPK%2FziBLSZDUoUeh3Bs%2B1c76EQESsyhY0PeY4FFsPc3Yq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHxevKdZzHoBrwRtbyrcA%2BcUr%2FHdduH8QXvMnvV6zglfzhyhzEK%2F6kE5W23OjSzAz1oIKXnMw5Z48cPnwDw3WGEhPPEdb3lVCysOEr51Kvi%2BQUBVyRUpYoEM36M2pfBN7dtnlxKMGGOPmlXWLsjui5K%2B7RSvhkXFK6DB6ZcBmRhQUJRL4pCBHH4qS2XkKmw7MVn5KD5ztHOTk3KZtSl4kv5h2prXwNby1V7UBLfHE3CrglnADQ%2FqZpknHmqSt3Zc9F1z1t%2FwTIB2eYOW24wGtHvapWhoz0LX05ckCdLZIXlS7L5DXjY70Ab07o31A04FnS0AV3M%2B%2FyVUc5%2FGR0AtNtZDUWJXOGcq3vk7bRqahVFKqe%2BBBx6qbCzQRap8iq42dLjtjZSLQ5sL%2FXjwNrOtuSRNaE9kWMC2Azpom7b3N0IkSDQDZpriKQ21sykYlV9OOrkEYISo6UXoCdYucu8BWpy%2BOJveRo32O01ACK49xj%2BkB4d9ivjHZFN0mD8yL3roi%2F%2BKyWxu3ZIcZ9EiV5larx2tQJu5Uj3pNQcDnNx1CVKA5YfgBaq%2BacRikkZqSoc3nQZQyHSGrDz74KaoDh4Q5FV4n%2BBSLe0J0q34JLyJug9FvYMCqTaUUELSCnmxATWKTOPzloOp14lsdklxML%2Blm78GOqUB0DxFfpHSHFLGG7mjQQnwZK5xuNBfp3%2Bp%2BgMarrb7tB8mQhvJvHDDxhkRehQOyJGYIeQP69N6uA0gL%2BEZuz0trwYg0X%2BJC5NWbTPRg%2BYvguiBcvS0FD2sxk0J2hOcu1zenJpUTWMEhN962eyEDiPebdQMlR55lp2tWQHN56s%2FM%2Ffz4j7JTZ8FwRmbNkrMOkvSBCXYwOZ11IZjT28cQpg1AO0lpRe9&X-Amz-Signature=4c93eff048b0919fc02919c50e243b06242f5b87da9ae50f11ea57ac71a06aea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIC24RHX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVwcj1ysc2Dh6iRUKeZdOQgVrVsg3Xrkg5I94hCkn%2BrAIgPK%2FziBLSZDUoUeh3Bs%2B1c76EQESsyhY0PeY4FFsPc3Yq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHxevKdZzHoBrwRtbyrcA%2BcUr%2FHdduH8QXvMnvV6zglfzhyhzEK%2F6kE5W23OjSzAz1oIKXnMw5Z48cPnwDw3WGEhPPEdb3lVCysOEr51Kvi%2BQUBVyRUpYoEM36M2pfBN7dtnlxKMGGOPmlXWLsjui5K%2B7RSvhkXFK6DB6ZcBmRhQUJRL4pCBHH4qS2XkKmw7MVn5KD5ztHOTk3KZtSl4kv5h2prXwNby1V7UBLfHE3CrglnADQ%2FqZpknHmqSt3Zc9F1z1t%2FwTIB2eYOW24wGtHvapWhoz0LX05ckCdLZIXlS7L5DXjY70Ab07o31A04FnS0AV3M%2B%2FyVUc5%2FGR0AtNtZDUWJXOGcq3vk7bRqahVFKqe%2BBBx6qbCzQRap8iq42dLjtjZSLQ5sL%2FXjwNrOtuSRNaE9kWMC2Azpom7b3N0IkSDQDZpriKQ21sykYlV9OOrkEYISo6UXoCdYucu8BWpy%2BOJveRo32O01ACK49xj%2BkB4d9ivjHZFN0mD8yL3roi%2F%2BKyWxu3ZIcZ9EiV5larx2tQJu5Uj3pNQcDnNx1CVKA5YfgBaq%2BacRikkZqSoc3nQZQyHSGrDz74KaoDh4Q5FV4n%2BBSLe0J0q34JLyJug9FvYMCqTaUUELSCnmxATWKTOPzloOp14lsdklxML%2Blm78GOqUB0DxFfpHSHFLGG7mjQQnwZK5xuNBfp3%2Bp%2BgMarrb7tB8mQhvJvHDDxhkRehQOyJGYIeQP69N6uA0gL%2BEZuz0trwYg0X%2BJC5NWbTPRg%2BYvguiBcvS0FD2sxk0J2hOcu1zenJpUTWMEhN962eyEDiPebdQMlR55lp2tWQHN56s%2FM%2Ffz4j7JTZ8FwRmbNkrMOkvSBCXYwOZ11IZjT28cQpg1AO0lpRe9&X-Amz-Signature=8635bb96df01d1868fecb9175b4e1e1448f176320bdc7ca83857b9c0e5439542&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

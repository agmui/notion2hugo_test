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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOWA2I5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlLvR4UV%2BwsSeoIifKkL9lL9KCp%2B7SsfcMWAXZ3JgvkAiEA7tQuDTeRHabnlGHjLGDBMo6ksiAiUVhJ47SLUC%2B9xIUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDkqmyDBapaxkq5PqCrcA1%2BAKqNL7CEka1kIyHZ6BbRUBCJJtmU1mxYL7c279Vpf%2BHOPGNxj0BIaxf3TZghZhLAYZe5JGvZ3oqdlkGGK%2F27Qsu0X4fZoF2V31WdOWM0O0%2FUK4e9I2%2FPCcqjxag6SR%2FZD4yxnozdOS6%2F3QyQ8M50xO1wJrGM%2BtSbwVR2CrXVyGv3L4T%2F%2FDT%2Bzo7QfY4ZK%2BbxFmFH6PaF4OtLXlEqoPxW6CkdM8ilsoez%2FKlPSpgNr5mNV0Oa1VSiBrCOD%2FlU0diP%2BYlmj8CZ0tvTuuxqe0N1%2Ft4YoeK2L%2BlDLBnLDA4zoyb3oqHAscf%2BMUReRWxeXLykYuWsDEx%2BnGDP830ib8Adu%2FjOHHhRsqZ7vXbjcBA1ECPOT%2B1mW55KARZQmiy2gFfBQhOwLJEH6l5kNGgcH%2BScRHJ5S4M%2Bs8PKz%2B3ElP472zYyu0C3E5pMq8fC8jb3CH2tAJwHqnbuWMu9rqAq2YIwm27iVpPqXzQvm374UTM6MCAeom5HgUBBiIoXHXl3evHvapRymUd2w0QkXmIMtV4KDZRhpU1yzCXhX3reMzJniXcA71hYsY%2B%2FVHSJlc4KTXFO4StoBab7BKUARxuz9N6l8OOghlmlcNMgNvGXTGLd0EC7M7k3PaFQHEU7WMJuJx8IGOqUB4hR6yr9RzduKlt5ZdQwl4Bvjt7%2FchqnejZsYisJ3qS70amMOTiAkT1dvJmLsh4kGoFvVETx0vFtAKF4IcugDUtWEAo66bE5VXzVRazzGFOuKwrx8Of3bgtB0upBUKXW8TjNl3a75FCtlU647K8%2BxX0dRba%2FssiEZVoLhWWUodIT%2FlftNYSMSM%2ByoSlAId6KXBIpME5M7K0Np2Dcj5WpkWGJBOh%2F1&X-Amz-Signature=146a7fb213f83d97fc9f24fc22ac4ae42e962b0a7bcc5073ab1d19a1ca28a717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOWA2I5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlLvR4UV%2BwsSeoIifKkL9lL9KCp%2B7SsfcMWAXZ3JgvkAiEA7tQuDTeRHabnlGHjLGDBMo6ksiAiUVhJ47SLUC%2B9xIUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDkqmyDBapaxkq5PqCrcA1%2BAKqNL7CEka1kIyHZ6BbRUBCJJtmU1mxYL7c279Vpf%2BHOPGNxj0BIaxf3TZghZhLAYZe5JGvZ3oqdlkGGK%2F27Qsu0X4fZoF2V31WdOWM0O0%2FUK4e9I2%2FPCcqjxag6SR%2FZD4yxnozdOS6%2F3QyQ8M50xO1wJrGM%2BtSbwVR2CrXVyGv3L4T%2F%2FDT%2Bzo7QfY4ZK%2BbxFmFH6PaF4OtLXlEqoPxW6CkdM8ilsoez%2FKlPSpgNr5mNV0Oa1VSiBrCOD%2FlU0diP%2BYlmj8CZ0tvTuuxqe0N1%2Ft4YoeK2L%2BlDLBnLDA4zoyb3oqHAscf%2BMUReRWxeXLykYuWsDEx%2BnGDP830ib8Adu%2FjOHHhRsqZ7vXbjcBA1ECPOT%2B1mW55KARZQmiy2gFfBQhOwLJEH6l5kNGgcH%2BScRHJ5S4M%2Bs8PKz%2B3ElP472zYyu0C3E5pMq8fC8jb3CH2tAJwHqnbuWMu9rqAq2YIwm27iVpPqXzQvm374UTM6MCAeom5HgUBBiIoXHXl3evHvapRymUd2w0QkXmIMtV4KDZRhpU1yzCXhX3reMzJniXcA71hYsY%2B%2FVHSJlc4KTXFO4StoBab7BKUARxuz9N6l8OOghlmlcNMgNvGXTGLd0EC7M7k3PaFQHEU7WMJuJx8IGOqUB4hR6yr9RzduKlt5ZdQwl4Bvjt7%2FchqnejZsYisJ3qS70amMOTiAkT1dvJmLsh4kGoFvVETx0vFtAKF4IcugDUtWEAo66bE5VXzVRazzGFOuKwrx8Of3bgtB0upBUKXW8TjNl3a75FCtlU647K8%2BxX0dRba%2FssiEZVoLhWWUodIT%2FlftNYSMSM%2ByoSlAId6KXBIpME5M7K0Np2Dcj5WpkWGJBOh%2F1&X-Amz-Signature=ebfab66bf37ff03d7c79a055a5c26cf70fa973a3d35e8aab36e684b70053939d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOWA2I5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlLvR4UV%2BwsSeoIifKkL9lL9KCp%2B7SsfcMWAXZ3JgvkAiEA7tQuDTeRHabnlGHjLGDBMo6ksiAiUVhJ47SLUC%2B9xIUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDkqmyDBapaxkq5PqCrcA1%2BAKqNL7CEka1kIyHZ6BbRUBCJJtmU1mxYL7c279Vpf%2BHOPGNxj0BIaxf3TZghZhLAYZe5JGvZ3oqdlkGGK%2F27Qsu0X4fZoF2V31WdOWM0O0%2FUK4e9I2%2FPCcqjxag6SR%2FZD4yxnozdOS6%2F3QyQ8M50xO1wJrGM%2BtSbwVR2CrXVyGv3L4T%2F%2FDT%2Bzo7QfY4ZK%2BbxFmFH6PaF4OtLXlEqoPxW6CkdM8ilsoez%2FKlPSpgNr5mNV0Oa1VSiBrCOD%2FlU0diP%2BYlmj8CZ0tvTuuxqe0N1%2Ft4YoeK2L%2BlDLBnLDA4zoyb3oqHAscf%2BMUReRWxeXLykYuWsDEx%2BnGDP830ib8Adu%2FjOHHhRsqZ7vXbjcBA1ECPOT%2B1mW55KARZQmiy2gFfBQhOwLJEH6l5kNGgcH%2BScRHJ5S4M%2Bs8PKz%2B3ElP472zYyu0C3E5pMq8fC8jb3CH2tAJwHqnbuWMu9rqAq2YIwm27iVpPqXzQvm374UTM6MCAeom5HgUBBiIoXHXl3evHvapRymUd2w0QkXmIMtV4KDZRhpU1yzCXhX3reMzJniXcA71hYsY%2B%2FVHSJlc4KTXFO4StoBab7BKUARxuz9N6l8OOghlmlcNMgNvGXTGLd0EC7M7k3PaFQHEU7WMJuJx8IGOqUB4hR6yr9RzduKlt5ZdQwl4Bvjt7%2FchqnejZsYisJ3qS70amMOTiAkT1dvJmLsh4kGoFvVETx0vFtAKF4IcugDUtWEAo66bE5VXzVRazzGFOuKwrx8Of3bgtB0upBUKXW8TjNl3a75FCtlU647K8%2BxX0dRba%2FssiEZVoLhWWUodIT%2FlftNYSMSM%2ByoSlAId6KXBIpME5M7K0Np2Dcj5WpkWGJBOh%2F1&X-Amz-Signature=188d7ccced5c08b45216c0414918a1189d1b78e802319934c6e25367c4bdd2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOWA2I5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlLvR4UV%2BwsSeoIifKkL9lL9KCp%2B7SsfcMWAXZ3JgvkAiEA7tQuDTeRHabnlGHjLGDBMo6ksiAiUVhJ47SLUC%2B9xIUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDkqmyDBapaxkq5PqCrcA1%2BAKqNL7CEka1kIyHZ6BbRUBCJJtmU1mxYL7c279Vpf%2BHOPGNxj0BIaxf3TZghZhLAYZe5JGvZ3oqdlkGGK%2F27Qsu0X4fZoF2V31WdOWM0O0%2FUK4e9I2%2FPCcqjxag6SR%2FZD4yxnozdOS6%2F3QyQ8M50xO1wJrGM%2BtSbwVR2CrXVyGv3L4T%2F%2FDT%2Bzo7QfY4ZK%2BbxFmFH6PaF4OtLXlEqoPxW6CkdM8ilsoez%2FKlPSpgNr5mNV0Oa1VSiBrCOD%2FlU0diP%2BYlmj8CZ0tvTuuxqe0N1%2Ft4YoeK2L%2BlDLBnLDA4zoyb3oqHAscf%2BMUReRWxeXLykYuWsDEx%2BnGDP830ib8Adu%2FjOHHhRsqZ7vXbjcBA1ECPOT%2B1mW55KARZQmiy2gFfBQhOwLJEH6l5kNGgcH%2BScRHJ5S4M%2Bs8PKz%2B3ElP472zYyu0C3E5pMq8fC8jb3CH2tAJwHqnbuWMu9rqAq2YIwm27iVpPqXzQvm374UTM6MCAeom5HgUBBiIoXHXl3evHvapRymUd2w0QkXmIMtV4KDZRhpU1yzCXhX3reMzJniXcA71hYsY%2B%2FVHSJlc4KTXFO4StoBab7BKUARxuz9N6l8OOghlmlcNMgNvGXTGLd0EC7M7k3PaFQHEU7WMJuJx8IGOqUB4hR6yr9RzduKlt5ZdQwl4Bvjt7%2FchqnejZsYisJ3qS70amMOTiAkT1dvJmLsh4kGoFvVETx0vFtAKF4IcugDUtWEAo66bE5VXzVRazzGFOuKwrx8Of3bgtB0upBUKXW8TjNl3a75FCtlU647K8%2BxX0dRba%2FssiEZVoLhWWUodIT%2FlftNYSMSM%2ByoSlAId6KXBIpME5M7K0Np2Dcj5WpkWGJBOh%2F1&X-Amz-Signature=8b9212e3862dfe804d47992e2e8e9096de743bd983cd287c703311d7012b8a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOWA2I5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlLvR4UV%2BwsSeoIifKkL9lL9KCp%2B7SsfcMWAXZ3JgvkAiEA7tQuDTeRHabnlGHjLGDBMo6ksiAiUVhJ47SLUC%2B9xIUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDkqmyDBapaxkq5PqCrcA1%2BAKqNL7CEka1kIyHZ6BbRUBCJJtmU1mxYL7c279Vpf%2BHOPGNxj0BIaxf3TZghZhLAYZe5JGvZ3oqdlkGGK%2F27Qsu0X4fZoF2V31WdOWM0O0%2FUK4e9I2%2FPCcqjxag6SR%2FZD4yxnozdOS6%2F3QyQ8M50xO1wJrGM%2BtSbwVR2CrXVyGv3L4T%2F%2FDT%2Bzo7QfY4ZK%2BbxFmFH6PaF4OtLXlEqoPxW6CkdM8ilsoez%2FKlPSpgNr5mNV0Oa1VSiBrCOD%2FlU0diP%2BYlmj8CZ0tvTuuxqe0N1%2Ft4YoeK2L%2BlDLBnLDA4zoyb3oqHAscf%2BMUReRWxeXLykYuWsDEx%2BnGDP830ib8Adu%2FjOHHhRsqZ7vXbjcBA1ECPOT%2B1mW55KARZQmiy2gFfBQhOwLJEH6l5kNGgcH%2BScRHJ5S4M%2Bs8PKz%2B3ElP472zYyu0C3E5pMq8fC8jb3CH2tAJwHqnbuWMu9rqAq2YIwm27iVpPqXzQvm374UTM6MCAeom5HgUBBiIoXHXl3evHvapRymUd2w0QkXmIMtV4KDZRhpU1yzCXhX3reMzJniXcA71hYsY%2B%2FVHSJlc4KTXFO4StoBab7BKUARxuz9N6l8OOghlmlcNMgNvGXTGLd0EC7M7k3PaFQHEU7WMJuJx8IGOqUB4hR6yr9RzduKlt5ZdQwl4Bvjt7%2FchqnejZsYisJ3qS70amMOTiAkT1dvJmLsh4kGoFvVETx0vFtAKF4IcugDUtWEAo66bE5VXzVRazzGFOuKwrx8Of3bgtB0upBUKXW8TjNl3a75FCtlU647K8%2BxX0dRba%2FssiEZVoLhWWUodIT%2FlftNYSMSM%2ByoSlAId6KXBIpME5M7K0Np2Dcj5WpkWGJBOh%2F1&X-Amz-Signature=8fd7776471d7873bad6dd9fe30300b2abb8698975434d6487f029d82fe245e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOWA2I5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlLvR4UV%2BwsSeoIifKkL9lL9KCp%2B7SsfcMWAXZ3JgvkAiEA7tQuDTeRHabnlGHjLGDBMo6ksiAiUVhJ47SLUC%2B9xIUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDkqmyDBapaxkq5PqCrcA1%2BAKqNL7CEka1kIyHZ6BbRUBCJJtmU1mxYL7c279Vpf%2BHOPGNxj0BIaxf3TZghZhLAYZe5JGvZ3oqdlkGGK%2F27Qsu0X4fZoF2V31WdOWM0O0%2FUK4e9I2%2FPCcqjxag6SR%2FZD4yxnozdOS6%2F3QyQ8M50xO1wJrGM%2BtSbwVR2CrXVyGv3L4T%2F%2FDT%2Bzo7QfY4ZK%2BbxFmFH6PaF4OtLXlEqoPxW6CkdM8ilsoez%2FKlPSpgNr5mNV0Oa1VSiBrCOD%2FlU0diP%2BYlmj8CZ0tvTuuxqe0N1%2Ft4YoeK2L%2BlDLBnLDA4zoyb3oqHAscf%2BMUReRWxeXLykYuWsDEx%2BnGDP830ib8Adu%2FjOHHhRsqZ7vXbjcBA1ECPOT%2B1mW55KARZQmiy2gFfBQhOwLJEH6l5kNGgcH%2BScRHJ5S4M%2Bs8PKz%2B3ElP472zYyu0C3E5pMq8fC8jb3CH2tAJwHqnbuWMu9rqAq2YIwm27iVpPqXzQvm374UTM6MCAeom5HgUBBiIoXHXl3evHvapRymUd2w0QkXmIMtV4KDZRhpU1yzCXhX3reMzJniXcA71hYsY%2B%2FVHSJlc4KTXFO4StoBab7BKUARxuz9N6l8OOghlmlcNMgNvGXTGLd0EC7M7k3PaFQHEU7WMJuJx8IGOqUB4hR6yr9RzduKlt5ZdQwl4Bvjt7%2FchqnejZsYisJ3qS70amMOTiAkT1dvJmLsh4kGoFvVETx0vFtAKF4IcugDUtWEAo66bE5VXzVRazzGFOuKwrx8Of3bgtB0upBUKXW8TjNl3a75FCtlU647K8%2BxX0dRba%2FssiEZVoLhWWUodIT%2FlftNYSMSM%2ByoSlAId6KXBIpME5M7K0Np2Dcj5WpkWGJBOh%2F1&X-Amz-Signature=d84301563af82b7e06db61808f52f11bec9b882b6680564f44d0a18b95b36249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOWA2I5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlLvR4UV%2BwsSeoIifKkL9lL9KCp%2B7SsfcMWAXZ3JgvkAiEA7tQuDTeRHabnlGHjLGDBMo6ksiAiUVhJ47SLUC%2B9xIUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDkqmyDBapaxkq5PqCrcA1%2BAKqNL7CEka1kIyHZ6BbRUBCJJtmU1mxYL7c279Vpf%2BHOPGNxj0BIaxf3TZghZhLAYZe5JGvZ3oqdlkGGK%2F27Qsu0X4fZoF2V31WdOWM0O0%2FUK4e9I2%2FPCcqjxag6SR%2FZD4yxnozdOS6%2F3QyQ8M50xO1wJrGM%2BtSbwVR2CrXVyGv3L4T%2F%2FDT%2Bzo7QfY4ZK%2BbxFmFH6PaF4OtLXlEqoPxW6CkdM8ilsoez%2FKlPSpgNr5mNV0Oa1VSiBrCOD%2FlU0diP%2BYlmj8CZ0tvTuuxqe0N1%2Ft4YoeK2L%2BlDLBnLDA4zoyb3oqHAscf%2BMUReRWxeXLykYuWsDEx%2BnGDP830ib8Adu%2FjOHHhRsqZ7vXbjcBA1ECPOT%2B1mW55KARZQmiy2gFfBQhOwLJEH6l5kNGgcH%2BScRHJ5S4M%2Bs8PKz%2B3ElP472zYyu0C3E5pMq8fC8jb3CH2tAJwHqnbuWMu9rqAq2YIwm27iVpPqXzQvm374UTM6MCAeom5HgUBBiIoXHXl3evHvapRymUd2w0QkXmIMtV4KDZRhpU1yzCXhX3reMzJniXcA71hYsY%2B%2FVHSJlc4KTXFO4StoBab7BKUARxuz9N6l8OOghlmlcNMgNvGXTGLd0EC7M7k3PaFQHEU7WMJuJx8IGOqUB4hR6yr9RzduKlt5ZdQwl4Bvjt7%2FchqnejZsYisJ3qS70amMOTiAkT1dvJmLsh4kGoFvVETx0vFtAKF4IcugDUtWEAo66bE5VXzVRazzGFOuKwrx8Of3bgtB0upBUKXW8TjNl3a75FCtlU647K8%2BxX0dRba%2FssiEZVoLhWWUodIT%2FlftNYSMSM%2ByoSlAId6KXBIpME5M7K0Np2Dcj5WpkWGJBOh%2F1&X-Amz-Signature=acf29f2ea7840c0bb5e31e3301006c76f7f72518396a2a8faa300540a751c707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

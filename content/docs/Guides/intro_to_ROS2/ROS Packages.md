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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7D6Z5O%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGio67c34cJ7j5VNX9mbGWlwQClymZeJROswwt8%2FHyldAiBNodFirNpuZurg3cTmRo2E8fPoxeuc%2BgsumyVgDoDH9Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmc9lMX%2BZSFcFAokBKtwDkxIhPCmm9rpjYx6wdxef7DqEbs4Nbm4haW%2B5eKG5RUSY6J1t2%2BKFaTfPsHwFzRIXgCS1MZsys32cLAPaBcRsrGj1EwqD7B2FXWg6IWDv8U0rLm2rss3AFy215C6H3wKvOMz76jKn8i2SI4o%2FINz0fnJUwm5Pi0luIHExEo2%2FWIJt4obWYrv3FathX5aywpYHUi0%2FfEE56Sc8N4Rl5vHNMMCppLpwGUkBSspfGnA9KpZpLpRHZn1Me%2FgZ5TjOfAV3YdRjwtXMqEjdvL7r2WqBQjZ8x4irB8T5ixxVk%2FN8r%2B4e%2Bun%2BUBR6LYEzU0nNXMSf5Q4XlSj%2Fm84kn8t5Oo7uUxGN0PZKYFrYQ%2FPLI%2FQHaVxIMJ9A1iYjib%2BfX3Vt5vtFJS%2Fp9cy9mn366FrbJHvZ69eHhtJyhM5VMYvyhMeutj%2FwL%2Bkj2W1lZ4OfcPm%2FzKva3g84M9UVzMf2gWaR6dCsBSPLDUx8tgjE5YkoPkhGVvq3jH5biFofQ%2FPWzWGlwMGG%2FsvFyGQF%2B5BIYxMCY3DYAIwBh88qkjfhzZhoQgG2b%2BUiRWV9ToKGAsdYuQfYhYVLFGzlz%2BG2Om9m%2B4R87te4nSHbOCecbr0WI6qkSHRwrOO7NXUTv5tXw%2FaLSQww0fXNvQY6pgE9XEuFe0lYHg2AHgHQ6KkQzTqnA57c94YTBFdXREuqbW8853COm%2FiUqaisuZhoajpEErRe3V4UcrGkc2lWh0szfaefTTyNJK2o9PjAC9qQQtrZFiTSD2LU%2BLxhMBADnAgaiMuyOvdGeca6lcgH5ZNEVfwjfK0cxc1VVn8wA0p2gQSkHF%2FhEQmAaGuIJvt6dqa8qiWnJXGQSxmaMu%2BdtWT7K07HiDbc&X-Amz-Signature=2ffa12cba38ce1ff44ba5f957ed747531c770e198e1940cb18cfa3a336a55aed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7D6Z5O%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGio67c34cJ7j5VNX9mbGWlwQClymZeJROswwt8%2FHyldAiBNodFirNpuZurg3cTmRo2E8fPoxeuc%2BgsumyVgDoDH9Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmc9lMX%2BZSFcFAokBKtwDkxIhPCmm9rpjYx6wdxef7DqEbs4Nbm4haW%2B5eKG5RUSY6J1t2%2BKFaTfPsHwFzRIXgCS1MZsys32cLAPaBcRsrGj1EwqD7B2FXWg6IWDv8U0rLm2rss3AFy215C6H3wKvOMz76jKn8i2SI4o%2FINz0fnJUwm5Pi0luIHExEo2%2FWIJt4obWYrv3FathX5aywpYHUi0%2FfEE56Sc8N4Rl5vHNMMCppLpwGUkBSspfGnA9KpZpLpRHZn1Me%2FgZ5TjOfAV3YdRjwtXMqEjdvL7r2WqBQjZ8x4irB8T5ixxVk%2FN8r%2B4e%2Bun%2BUBR6LYEzU0nNXMSf5Q4XlSj%2Fm84kn8t5Oo7uUxGN0PZKYFrYQ%2FPLI%2FQHaVxIMJ9A1iYjib%2BfX3Vt5vtFJS%2Fp9cy9mn366FrbJHvZ69eHhtJyhM5VMYvyhMeutj%2FwL%2Bkj2W1lZ4OfcPm%2FzKva3g84M9UVzMf2gWaR6dCsBSPLDUx8tgjE5YkoPkhGVvq3jH5biFofQ%2FPWzWGlwMGG%2FsvFyGQF%2B5BIYxMCY3DYAIwBh88qkjfhzZhoQgG2b%2BUiRWV9ToKGAsdYuQfYhYVLFGzlz%2BG2Om9m%2B4R87te4nSHbOCecbr0WI6qkSHRwrOO7NXUTv5tXw%2FaLSQww0fXNvQY6pgE9XEuFe0lYHg2AHgHQ6KkQzTqnA57c94YTBFdXREuqbW8853COm%2FiUqaisuZhoajpEErRe3V4UcrGkc2lWh0szfaefTTyNJK2o9PjAC9qQQtrZFiTSD2LU%2BLxhMBADnAgaiMuyOvdGeca6lcgH5ZNEVfwjfK0cxc1VVn8wA0p2gQSkHF%2FhEQmAaGuIJvt6dqa8qiWnJXGQSxmaMu%2BdtWT7K07HiDbc&X-Amz-Signature=f935faef934ed3a94946fc66ecafed6b2829302b93403fcaf19c60f10f398440&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7D6Z5O%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGio67c34cJ7j5VNX9mbGWlwQClymZeJROswwt8%2FHyldAiBNodFirNpuZurg3cTmRo2E8fPoxeuc%2BgsumyVgDoDH9Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmc9lMX%2BZSFcFAokBKtwDkxIhPCmm9rpjYx6wdxef7DqEbs4Nbm4haW%2B5eKG5RUSY6J1t2%2BKFaTfPsHwFzRIXgCS1MZsys32cLAPaBcRsrGj1EwqD7B2FXWg6IWDv8U0rLm2rss3AFy215C6H3wKvOMz76jKn8i2SI4o%2FINz0fnJUwm5Pi0luIHExEo2%2FWIJt4obWYrv3FathX5aywpYHUi0%2FfEE56Sc8N4Rl5vHNMMCppLpwGUkBSspfGnA9KpZpLpRHZn1Me%2FgZ5TjOfAV3YdRjwtXMqEjdvL7r2WqBQjZ8x4irB8T5ixxVk%2FN8r%2B4e%2Bun%2BUBR6LYEzU0nNXMSf5Q4XlSj%2Fm84kn8t5Oo7uUxGN0PZKYFrYQ%2FPLI%2FQHaVxIMJ9A1iYjib%2BfX3Vt5vtFJS%2Fp9cy9mn366FrbJHvZ69eHhtJyhM5VMYvyhMeutj%2FwL%2Bkj2W1lZ4OfcPm%2FzKva3g84M9UVzMf2gWaR6dCsBSPLDUx8tgjE5YkoPkhGVvq3jH5biFofQ%2FPWzWGlwMGG%2FsvFyGQF%2B5BIYxMCY3DYAIwBh88qkjfhzZhoQgG2b%2BUiRWV9ToKGAsdYuQfYhYVLFGzlz%2BG2Om9m%2B4R87te4nSHbOCecbr0WI6qkSHRwrOO7NXUTv5tXw%2FaLSQww0fXNvQY6pgE9XEuFe0lYHg2AHgHQ6KkQzTqnA57c94YTBFdXREuqbW8853COm%2FiUqaisuZhoajpEErRe3V4UcrGkc2lWh0szfaefTTyNJK2o9PjAC9qQQtrZFiTSD2LU%2BLxhMBADnAgaiMuyOvdGeca6lcgH5ZNEVfwjfK0cxc1VVn8wA0p2gQSkHF%2FhEQmAaGuIJvt6dqa8qiWnJXGQSxmaMu%2BdtWT7K07HiDbc&X-Amz-Signature=a84d33e271470b29d71199185ec524fe7485c1353c00f4af2dba67d4dea9e332&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7D6Z5O%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGio67c34cJ7j5VNX9mbGWlwQClymZeJROswwt8%2FHyldAiBNodFirNpuZurg3cTmRo2E8fPoxeuc%2BgsumyVgDoDH9Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmc9lMX%2BZSFcFAokBKtwDkxIhPCmm9rpjYx6wdxef7DqEbs4Nbm4haW%2B5eKG5RUSY6J1t2%2BKFaTfPsHwFzRIXgCS1MZsys32cLAPaBcRsrGj1EwqD7B2FXWg6IWDv8U0rLm2rss3AFy215C6H3wKvOMz76jKn8i2SI4o%2FINz0fnJUwm5Pi0luIHExEo2%2FWIJt4obWYrv3FathX5aywpYHUi0%2FfEE56Sc8N4Rl5vHNMMCppLpwGUkBSspfGnA9KpZpLpRHZn1Me%2FgZ5TjOfAV3YdRjwtXMqEjdvL7r2WqBQjZ8x4irB8T5ixxVk%2FN8r%2B4e%2Bun%2BUBR6LYEzU0nNXMSf5Q4XlSj%2Fm84kn8t5Oo7uUxGN0PZKYFrYQ%2FPLI%2FQHaVxIMJ9A1iYjib%2BfX3Vt5vtFJS%2Fp9cy9mn366FrbJHvZ69eHhtJyhM5VMYvyhMeutj%2FwL%2Bkj2W1lZ4OfcPm%2FzKva3g84M9UVzMf2gWaR6dCsBSPLDUx8tgjE5YkoPkhGVvq3jH5biFofQ%2FPWzWGlwMGG%2FsvFyGQF%2B5BIYxMCY3DYAIwBh88qkjfhzZhoQgG2b%2BUiRWV9ToKGAsdYuQfYhYVLFGzlz%2BG2Om9m%2B4R87te4nSHbOCecbr0WI6qkSHRwrOO7NXUTv5tXw%2FaLSQww0fXNvQY6pgE9XEuFe0lYHg2AHgHQ6KkQzTqnA57c94YTBFdXREuqbW8853COm%2FiUqaisuZhoajpEErRe3V4UcrGkc2lWh0szfaefTTyNJK2o9PjAC9qQQtrZFiTSD2LU%2BLxhMBADnAgaiMuyOvdGeca6lcgH5ZNEVfwjfK0cxc1VVn8wA0p2gQSkHF%2FhEQmAaGuIJvt6dqa8qiWnJXGQSxmaMu%2BdtWT7K07HiDbc&X-Amz-Signature=60dde07303996952d5291424c7e965f1e4b1266c63ab16b6fa60b0fb9bc7e663&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7D6Z5O%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGio67c34cJ7j5VNX9mbGWlwQClymZeJROswwt8%2FHyldAiBNodFirNpuZurg3cTmRo2E8fPoxeuc%2BgsumyVgDoDH9Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmc9lMX%2BZSFcFAokBKtwDkxIhPCmm9rpjYx6wdxef7DqEbs4Nbm4haW%2B5eKG5RUSY6J1t2%2BKFaTfPsHwFzRIXgCS1MZsys32cLAPaBcRsrGj1EwqD7B2FXWg6IWDv8U0rLm2rss3AFy215C6H3wKvOMz76jKn8i2SI4o%2FINz0fnJUwm5Pi0luIHExEo2%2FWIJt4obWYrv3FathX5aywpYHUi0%2FfEE56Sc8N4Rl5vHNMMCppLpwGUkBSspfGnA9KpZpLpRHZn1Me%2FgZ5TjOfAV3YdRjwtXMqEjdvL7r2WqBQjZ8x4irB8T5ixxVk%2FN8r%2B4e%2Bun%2BUBR6LYEzU0nNXMSf5Q4XlSj%2Fm84kn8t5Oo7uUxGN0PZKYFrYQ%2FPLI%2FQHaVxIMJ9A1iYjib%2BfX3Vt5vtFJS%2Fp9cy9mn366FrbJHvZ69eHhtJyhM5VMYvyhMeutj%2FwL%2Bkj2W1lZ4OfcPm%2FzKva3g84M9UVzMf2gWaR6dCsBSPLDUx8tgjE5YkoPkhGVvq3jH5biFofQ%2FPWzWGlwMGG%2FsvFyGQF%2B5BIYxMCY3DYAIwBh88qkjfhzZhoQgG2b%2BUiRWV9ToKGAsdYuQfYhYVLFGzlz%2BG2Om9m%2B4R87te4nSHbOCecbr0WI6qkSHRwrOO7NXUTv5tXw%2FaLSQww0fXNvQY6pgE9XEuFe0lYHg2AHgHQ6KkQzTqnA57c94YTBFdXREuqbW8853COm%2FiUqaisuZhoajpEErRe3V4UcrGkc2lWh0szfaefTTyNJK2o9PjAC9qQQtrZFiTSD2LU%2BLxhMBADnAgaiMuyOvdGeca6lcgH5ZNEVfwjfK0cxc1VVn8wA0p2gQSkHF%2FhEQmAaGuIJvt6dqa8qiWnJXGQSxmaMu%2BdtWT7K07HiDbc&X-Amz-Signature=9d26fe016bcdb1ad11dc11437d33c7af5c29358cd0b6505de6c76bf8206a444a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7D6Z5O%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGio67c34cJ7j5VNX9mbGWlwQClymZeJROswwt8%2FHyldAiBNodFirNpuZurg3cTmRo2E8fPoxeuc%2BgsumyVgDoDH9Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmc9lMX%2BZSFcFAokBKtwDkxIhPCmm9rpjYx6wdxef7DqEbs4Nbm4haW%2B5eKG5RUSY6J1t2%2BKFaTfPsHwFzRIXgCS1MZsys32cLAPaBcRsrGj1EwqD7B2FXWg6IWDv8U0rLm2rss3AFy215C6H3wKvOMz76jKn8i2SI4o%2FINz0fnJUwm5Pi0luIHExEo2%2FWIJt4obWYrv3FathX5aywpYHUi0%2FfEE56Sc8N4Rl5vHNMMCppLpwGUkBSspfGnA9KpZpLpRHZn1Me%2FgZ5TjOfAV3YdRjwtXMqEjdvL7r2WqBQjZ8x4irB8T5ixxVk%2FN8r%2B4e%2Bun%2BUBR6LYEzU0nNXMSf5Q4XlSj%2Fm84kn8t5Oo7uUxGN0PZKYFrYQ%2FPLI%2FQHaVxIMJ9A1iYjib%2BfX3Vt5vtFJS%2Fp9cy9mn366FrbJHvZ69eHhtJyhM5VMYvyhMeutj%2FwL%2Bkj2W1lZ4OfcPm%2FzKva3g84M9UVzMf2gWaR6dCsBSPLDUx8tgjE5YkoPkhGVvq3jH5biFofQ%2FPWzWGlwMGG%2FsvFyGQF%2B5BIYxMCY3DYAIwBh88qkjfhzZhoQgG2b%2BUiRWV9ToKGAsdYuQfYhYVLFGzlz%2BG2Om9m%2B4R87te4nSHbOCecbr0WI6qkSHRwrOO7NXUTv5tXw%2FaLSQww0fXNvQY6pgE9XEuFe0lYHg2AHgHQ6KkQzTqnA57c94YTBFdXREuqbW8853COm%2FiUqaisuZhoajpEErRe3V4UcrGkc2lWh0szfaefTTyNJK2o9PjAC9qQQtrZFiTSD2LU%2BLxhMBADnAgaiMuyOvdGeca6lcgH5ZNEVfwjfK0cxc1VVn8wA0p2gQSkHF%2FhEQmAaGuIJvt6dqa8qiWnJXGQSxmaMu%2BdtWT7K07HiDbc&X-Amz-Signature=d97b963a30ef9357c2fd8e33fe734111abb817e50b1109819cf9fd052c09ec92&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7D6Z5O%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGio67c34cJ7j5VNX9mbGWlwQClymZeJROswwt8%2FHyldAiBNodFirNpuZurg3cTmRo2E8fPoxeuc%2BgsumyVgDoDH9Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmc9lMX%2BZSFcFAokBKtwDkxIhPCmm9rpjYx6wdxef7DqEbs4Nbm4haW%2B5eKG5RUSY6J1t2%2BKFaTfPsHwFzRIXgCS1MZsys32cLAPaBcRsrGj1EwqD7B2FXWg6IWDv8U0rLm2rss3AFy215C6H3wKvOMz76jKn8i2SI4o%2FINz0fnJUwm5Pi0luIHExEo2%2FWIJt4obWYrv3FathX5aywpYHUi0%2FfEE56Sc8N4Rl5vHNMMCppLpwGUkBSspfGnA9KpZpLpRHZn1Me%2FgZ5TjOfAV3YdRjwtXMqEjdvL7r2WqBQjZ8x4irB8T5ixxVk%2FN8r%2B4e%2Bun%2BUBR6LYEzU0nNXMSf5Q4XlSj%2Fm84kn8t5Oo7uUxGN0PZKYFrYQ%2FPLI%2FQHaVxIMJ9A1iYjib%2BfX3Vt5vtFJS%2Fp9cy9mn366FrbJHvZ69eHhtJyhM5VMYvyhMeutj%2FwL%2Bkj2W1lZ4OfcPm%2FzKva3g84M9UVzMf2gWaR6dCsBSPLDUx8tgjE5YkoPkhGVvq3jH5biFofQ%2FPWzWGlwMGG%2FsvFyGQF%2B5BIYxMCY3DYAIwBh88qkjfhzZhoQgG2b%2BUiRWV9ToKGAsdYuQfYhYVLFGzlz%2BG2Om9m%2B4R87te4nSHbOCecbr0WI6qkSHRwrOO7NXUTv5tXw%2FaLSQww0fXNvQY6pgE9XEuFe0lYHg2AHgHQ6KkQzTqnA57c94YTBFdXREuqbW8853COm%2FiUqaisuZhoajpEErRe3V4UcrGkc2lWh0szfaefTTyNJK2o9PjAC9qQQtrZFiTSD2LU%2BLxhMBADnAgaiMuyOvdGeca6lcgH5ZNEVfwjfK0cxc1VVn8wA0p2gQSkHF%2FhEQmAaGuIJvt6dqa8qiWnJXGQSxmaMu%2BdtWT7K07HiDbc&X-Amz-Signature=dff8a6d7adbf279c3704bb4f5d5bed5d7bcf50b97b9a6355396cef42af619b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

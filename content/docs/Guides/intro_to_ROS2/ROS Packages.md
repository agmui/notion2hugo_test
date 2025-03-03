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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=27dd1b023238130f7e6ab3528542150a3852f2f86a0a70aa410500e05dac1ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=95f4449f850426c45dce61e48df85feceb322b34ead6e24d48dd8babb6778cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=4aa4960caf2e7a2700b56d5bc10e7c2dfcdb087214271475de45553389c0c0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=806a0441632dbfec77d313da0c4c980a8a29ad482d7a727602e093b46eb4acb0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=5da52540d8446fca0aa9f73d1429ae5818fe63678c274a6981161d165df8fb90&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=42b9005a012afa55cd9397886540f6eb65ab1b65633d9885c39c4b2caaac56e7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=63bd8acc0d9b183edb2ea89299b477ef9b7853b851062d3f043843d40fb60192&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

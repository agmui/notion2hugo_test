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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PL2RM4R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOGE48oid0X3krAiAT8xkHD%2B2pljEhwSa3wSNey6E0QIgQpYqgchfe7uj2dueSjBFJYQ0IKT%2FmEvIXdH8AyH7f6kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr10RYWHCy7%2FStX%2FSrcAy15erN17JbgoMaRONkCVVWwKVyGcsYSUF5dfYG0%2BL83k3a9zlSB6YP1UgEwMpVXfdpmeY7xQ8%2BuIrKXJu%2Bo68IElyEyCEA%2BMxU0%2BHOvJNWuZsmSOQM4iRxPVzEQ%2FS1KASkDDmanGvPgmFpn7YX1sGK%2BWAO8PmRdNYpCDR8e%2FLmcwK6kMC4EhpnjzvlmEXpqoE0gXiGZtTRgrAJqqW7BNw%2FbdjXzl5mUxwbXOOkx4FUD6GrxutcasxEgzYQCLLJRwEkhqissYwLApnw9R7ObGkHJqORz%2BsXtVlc2u71IHKYlQa9IZdTi6%2BhDO%2FGTslij6lNJ1nC9YTJXushUSJZO1CpUsTS13GyTk55pOWrjcJkqaUvF4J5sRBpMTjbnOgBHAmDgPUC1t5%2FN5AuJa7sxRz6n5ZfwmEhuNdUP0BnItEZS5Ga7VDuW0%2B7FO2ky1RSYGxk%2FsxlOeA9Lb9uwV4o4%2BrDMius61H1UBzmiHqmOcQPLN6ask61zoBi5ckM%2F2KjTF6k9BmJRGc066tsU9v2Xs%2FOuIiL0QzRy2SkQ59LumwHtB12nTMkfC7GejjAY5uk0Fysrp2DNAT0jg5y39yn3vWc%2BG02uFMfBrOhoLZ10KhqJIt%2BF6eBDetM8dgPmMLGcz78GOqUBKG2%2FsoJBqvLQ6SHC0A8GfHS1%2B99Hrzigrtwlt3LDM9JIDyheeZpG30DU3E2tfmee6h1ZWCXSNk3KBzyaJN4A%2FKzLYETdgGf2dWJGvVUvPGi60OOO3skrqV4UwVdo53QX3ye7TSc56%2BZ4BNKNYHDvrE02JlAYptcSO9BM0NQOeY4VxvMm6YWi0GV2VQy%2BcO4S10dRhU7bv0jB2U6tGAZLPWOfZAen&X-Amz-Signature=ec1749c210d043b480c6bdf5973a84ff6beb39d01553de17e57149985aaa9871&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PL2RM4R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOGE48oid0X3krAiAT8xkHD%2B2pljEhwSa3wSNey6E0QIgQpYqgchfe7uj2dueSjBFJYQ0IKT%2FmEvIXdH8AyH7f6kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr10RYWHCy7%2FStX%2FSrcAy15erN17JbgoMaRONkCVVWwKVyGcsYSUF5dfYG0%2BL83k3a9zlSB6YP1UgEwMpVXfdpmeY7xQ8%2BuIrKXJu%2Bo68IElyEyCEA%2BMxU0%2BHOvJNWuZsmSOQM4iRxPVzEQ%2FS1KASkDDmanGvPgmFpn7YX1sGK%2BWAO8PmRdNYpCDR8e%2FLmcwK6kMC4EhpnjzvlmEXpqoE0gXiGZtTRgrAJqqW7BNw%2FbdjXzl5mUxwbXOOkx4FUD6GrxutcasxEgzYQCLLJRwEkhqissYwLApnw9R7ObGkHJqORz%2BsXtVlc2u71IHKYlQa9IZdTi6%2BhDO%2FGTslij6lNJ1nC9YTJXushUSJZO1CpUsTS13GyTk55pOWrjcJkqaUvF4J5sRBpMTjbnOgBHAmDgPUC1t5%2FN5AuJa7sxRz6n5ZfwmEhuNdUP0BnItEZS5Ga7VDuW0%2B7FO2ky1RSYGxk%2FsxlOeA9Lb9uwV4o4%2BrDMius61H1UBzmiHqmOcQPLN6ask61zoBi5ckM%2F2KjTF6k9BmJRGc066tsU9v2Xs%2FOuIiL0QzRy2SkQ59LumwHtB12nTMkfC7GejjAY5uk0Fysrp2DNAT0jg5y39yn3vWc%2BG02uFMfBrOhoLZ10KhqJIt%2BF6eBDetM8dgPmMLGcz78GOqUBKG2%2FsoJBqvLQ6SHC0A8GfHS1%2B99Hrzigrtwlt3LDM9JIDyheeZpG30DU3E2tfmee6h1ZWCXSNk3KBzyaJN4A%2FKzLYETdgGf2dWJGvVUvPGi60OOO3skrqV4UwVdo53QX3ye7TSc56%2BZ4BNKNYHDvrE02JlAYptcSO9BM0NQOeY4VxvMm6YWi0GV2VQy%2BcO4S10dRhU7bv0jB2U6tGAZLPWOfZAen&X-Amz-Signature=ec487c4125a8a325015ac8cabcbd4fdc3a65b8eac5b6318c4e2f2512c0c30551&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PL2RM4R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOGE48oid0X3krAiAT8xkHD%2B2pljEhwSa3wSNey6E0QIgQpYqgchfe7uj2dueSjBFJYQ0IKT%2FmEvIXdH8AyH7f6kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr10RYWHCy7%2FStX%2FSrcAy15erN17JbgoMaRONkCVVWwKVyGcsYSUF5dfYG0%2BL83k3a9zlSB6YP1UgEwMpVXfdpmeY7xQ8%2BuIrKXJu%2Bo68IElyEyCEA%2BMxU0%2BHOvJNWuZsmSOQM4iRxPVzEQ%2FS1KASkDDmanGvPgmFpn7YX1sGK%2BWAO8PmRdNYpCDR8e%2FLmcwK6kMC4EhpnjzvlmEXpqoE0gXiGZtTRgrAJqqW7BNw%2FbdjXzl5mUxwbXOOkx4FUD6GrxutcasxEgzYQCLLJRwEkhqissYwLApnw9R7ObGkHJqORz%2BsXtVlc2u71IHKYlQa9IZdTi6%2BhDO%2FGTslij6lNJ1nC9YTJXushUSJZO1CpUsTS13GyTk55pOWrjcJkqaUvF4J5sRBpMTjbnOgBHAmDgPUC1t5%2FN5AuJa7sxRz6n5ZfwmEhuNdUP0BnItEZS5Ga7VDuW0%2B7FO2ky1RSYGxk%2FsxlOeA9Lb9uwV4o4%2BrDMius61H1UBzmiHqmOcQPLN6ask61zoBi5ckM%2F2KjTF6k9BmJRGc066tsU9v2Xs%2FOuIiL0QzRy2SkQ59LumwHtB12nTMkfC7GejjAY5uk0Fysrp2DNAT0jg5y39yn3vWc%2BG02uFMfBrOhoLZ10KhqJIt%2BF6eBDetM8dgPmMLGcz78GOqUBKG2%2FsoJBqvLQ6SHC0A8GfHS1%2B99Hrzigrtwlt3LDM9JIDyheeZpG30DU3E2tfmee6h1ZWCXSNk3KBzyaJN4A%2FKzLYETdgGf2dWJGvVUvPGi60OOO3skrqV4UwVdo53QX3ye7TSc56%2BZ4BNKNYHDvrE02JlAYptcSO9BM0NQOeY4VxvMm6YWi0GV2VQy%2BcO4S10dRhU7bv0jB2U6tGAZLPWOfZAen&X-Amz-Signature=0f62956e55d143e0c1ad8cda6971c3d5130fa5b2be2db916fb57c25fe368ea71&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PL2RM4R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOGE48oid0X3krAiAT8xkHD%2B2pljEhwSa3wSNey6E0QIgQpYqgchfe7uj2dueSjBFJYQ0IKT%2FmEvIXdH8AyH7f6kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr10RYWHCy7%2FStX%2FSrcAy15erN17JbgoMaRONkCVVWwKVyGcsYSUF5dfYG0%2BL83k3a9zlSB6YP1UgEwMpVXfdpmeY7xQ8%2BuIrKXJu%2Bo68IElyEyCEA%2BMxU0%2BHOvJNWuZsmSOQM4iRxPVzEQ%2FS1KASkDDmanGvPgmFpn7YX1sGK%2BWAO8PmRdNYpCDR8e%2FLmcwK6kMC4EhpnjzvlmEXpqoE0gXiGZtTRgrAJqqW7BNw%2FbdjXzl5mUxwbXOOkx4FUD6GrxutcasxEgzYQCLLJRwEkhqissYwLApnw9R7ObGkHJqORz%2BsXtVlc2u71IHKYlQa9IZdTi6%2BhDO%2FGTslij6lNJ1nC9YTJXushUSJZO1CpUsTS13GyTk55pOWrjcJkqaUvF4J5sRBpMTjbnOgBHAmDgPUC1t5%2FN5AuJa7sxRz6n5ZfwmEhuNdUP0BnItEZS5Ga7VDuW0%2B7FO2ky1RSYGxk%2FsxlOeA9Lb9uwV4o4%2BrDMius61H1UBzmiHqmOcQPLN6ask61zoBi5ckM%2F2KjTF6k9BmJRGc066tsU9v2Xs%2FOuIiL0QzRy2SkQ59LumwHtB12nTMkfC7GejjAY5uk0Fysrp2DNAT0jg5y39yn3vWc%2BG02uFMfBrOhoLZ10KhqJIt%2BF6eBDetM8dgPmMLGcz78GOqUBKG2%2FsoJBqvLQ6SHC0A8GfHS1%2B99Hrzigrtwlt3LDM9JIDyheeZpG30DU3E2tfmee6h1ZWCXSNk3KBzyaJN4A%2FKzLYETdgGf2dWJGvVUvPGi60OOO3skrqV4UwVdo53QX3ye7TSc56%2BZ4BNKNYHDvrE02JlAYptcSO9BM0NQOeY4VxvMm6YWi0GV2VQy%2BcO4S10dRhU7bv0jB2U6tGAZLPWOfZAen&X-Amz-Signature=163001338dc55beb5875bedcae42029af9247d6a3a2198f5406ec0ffb7b3a631&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PL2RM4R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOGE48oid0X3krAiAT8xkHD%2B2pljEhwSa3wSNey6E0QIgQpYqgchfe7uj2dueSjBFJYQ0IKT%2FmEvIXdH8AyH7f6kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr10RYWHCy7%2FStX%2FSrcAy15erN17JbgoMaRONkCVVWwKVyGcsYSUF5dfYG0%2BL83k3a9zlSB6YP1UgEwMpVXfdpmeY7xQ8%2BuIrKXJu%2Bo68IElyEyCEA%2BMxU0%2BHOvJNWuZsmSOQM4iRxPVzEQ%2FS1KASkDDmanGvPgmFpn7YX1sGK%2BWAO8PmRdNYpCDR8e%2FLmcwK6kMC4EhpnjzvlmEXpqoE0gXiGZtTRgrAJqqW7BNw%2FbdjXzl5mUxwbXOOkx4FUD6GrxutcasxEgzYQCLLJRwEkhqissYwLApnw9R7ObGkHJqORz%2BsXtVlc2u71IHKYlQa9IZdTi6%2BhDO%2FGTslij6lNJ1nC9YTJXushUSJZO1CpUsTS13GyTk55pOWrjcJkqaUvF4J5sRBpMTjbnOgBHAmDgPUC1t5%2FN5AuJa7sxRz6n5ZfwmEhuNdUP0BnItEZS5Ga7VDuW0%2B7FO2ky1RSYGxk%2FsxlOeA9Lb9uwV4o4%2BrDMius61H1UBzmiHqmOcQPLN6ask61zoBi5ckM%2F2KjTF6k9BmJRGc066tsU9v2Xs%2FOuIiL0QzRy2SkQ59LumwHtB12nTMkfC7GejjAY5uk0Fysrp2DNAT0jg5y39yn3vWc%2BG02uFMfBrOhoLZ10KhqJIt%2BF6eBDetM8dgPmMLGcz78GOqUBKG2%2FsoJBqvLQ6SHC0A8GfHS1%2B99Hrzigrtwlt3LDM9JIDyheeZpG30DU3E2tfmee6h1ZWCXSNk3KBzyaJN4A%2FKzLYETdgGf2dWJGvVUvPGi60OOO3skrqV4UwVdo53QX3ye7TSc56%2BZ4BNKNYHDvrE02JlAYptcSO9BM0NQOeY4VxvMm6YWi0GV2VQy%2BcO4S10dRhU7bv0jB2U6tGAZLPWOfZAen&X-Amz-Signature=da4d99edb2763678a2dd758d1dfa11ee80fa6d4e3522aa122e637181b8ca27b5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PL2RM4R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOGE48oid0X3krAiAT8xkHD%2B2pljEhwSa3wSNey6E0QIgQpYqgchfe7uj2dueSjBFJYQ0IKT%2FmEvIXdH8AyH7f6kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr10RYWHCy7%2FStX%2FSrcAy15erN17JbgoMaRONkCVVWwKVyGcsYSUF5dfYG0%2BL83k3a9zlSB6YP1UgEwMpVXfdpmeY7xQ8%2BuIrKXJu%2Bo68IElyEyCEA%2BMxU0%2BHOvJNWuZsmSOQM4iRxPVzEQ%2FS1KASkDDmanGvPgmFpn7YX1sGK%2BWAO8PmRdNYpCDR8e%2FLmcwK6kMC4EhpnjzvlmEXpqoE0gXiGZtTRgrAJqqW7BNw%2FbdjXzl5mUxwbXOOkx4FUD6GrxutcasxEgzYQCLLJRwEkhqissYwLApnw9R7ObGkHJqORz%2BsXtVlc2u71IHKYlQa9IZdTi6%2BhDO%2FGTslij6lNJ1nC9YTJXushUSJZO1CpUsTS13GyTk55pOWrjcJkqaUvF4J5sRBpMTjbnOgBHAmDgPUC1t5%2FN5AuJa7sxRz6n5ZfwmEhuNdUP0BnItEZS5Ga7VDuW0%2B7FO2ky1RSYGxk%2FsxlOeA9Lb9uwV4o4%2BrDMius61H1UBzmiHqmOcQPLN6ask61zoBi5ckM%2F2KjTF6k9BmJRGc066tsU9v2Xs%2FOuIiL0QzRy2SkQ59LumwHtB12nTMkfC7GejjAY5uk0Fysrp2DNAT0jg5y39yn3vWc%2BG02uFMfBrOhoLZ10KhqJIt%2BF6eBDetM8dgPmMLGcz78GOqUBKG2%2FsoJBqvLQ6SHC0A8GfHS1%2B99Hrzigrtwlt3LDM9JIDyheeZpG30DU3E2tfmee6h1ZWCXSNk3KBzyaJN4A%2FKzLYETdgGf2dWJGvVUvPGi60OOO3skrqV4UwVdo53QX3ye7TSc56%2BZ4BNKNYHDvrE02JlAYptcSO9BM0NQOeY4VxvMm6YWi0GV2VQy%2BcO4S10dRhU7bv0jB2U6tGAZLPWOfZAen&X-Amz-Signature=be283fedd1f48120c57363689be0b772d2dbd041fd63b7c15dfd5a8ef7f586c1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PL2RM4R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOGE48oid0X3krAiAT8xkHD%2B2pljEhwSa3wSNey6E0QIgQpYqgchfe7uj2dueSjBFJYQ0IKT%2FmEvIXdH8AyH7f6kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr10RYWHCy7%2FStX%2FSrcAy15erN17JbgoMaRONkCVVWwKVyGcsYSUF5dfYG0%2BL83k3a9zlSB6YP1UgEwMpVXfdpmeY7xQ8%2BuIrKXJu%2Bo68IElyEyCEA%2BMxU0%2BHOvJNWuZsmSOQM4iRxPVzEQ%2FS1KASkDDmanGvPgmFpn7YX1sGK%2BWAO8PmRdNYpCDR8e%2FLmcwK6kMC4EhpnjzvlmEXpqoE0gXiGZtTRgrAJqqW7BNw%2FbdjXzl5mUxwbXOOkx4FUD6GrxutcasxEgzYQCLLJRwEkhqissYwLApnw9R7ObGkHJqORz%2BsXtVlc2u71IHKYlQa9IZdTi6%2BhDO%2FGTslij6lNJ1nC9YTJXushUSJZO1CpUsTS13GyTk55pOWrjcJkqaUvF4J5sRBpMTjbnOgBHAmDgPUC1t5%2FN5AuJa7sxRz6n5ZfwmEhuNdUP0BnItEZS5Ga7VDuW0%2B7FO2ky1RSYGxk%2FsxlOeA9Lb9uwV4o4%2BrDMius61H1UBzmiHqmOcQPLN6ask61zoBi5ckM%2F2KjTF6k9BmJRGc066tsU9v2Xs%2FOuIiL0QzRy2SkQ59LumwHtB12nTMkfC7GejjAY5uk0Fysrp2DNAT0jg5y39yn3vWc%2BG02uFMfBrOhoLZ10KhqJIt%2BF6eBDetM8dgPmMLGcz78GOqUBKG2%2FsoJBqvLQ6SHC0A8GfHS1%2B99Hrzigrtwlt3LDM9JIDyheeZpG30DU3E2tfmee6h1ZWCXSNk3KBzyaJN4A%2FKzLYETdgGf2dWJGvVUvPGi60OOO3skrqV4UwVdo53QX3ye7TSc56%2BZ4BNKNYHDvrE02JlAYptcSO9BM0NQOeY4VxvMm6YWi0GV2VQy%2BcO4S10dRhU7bv0jB2U6tGAZLPWOfZAen&X-Amz-Signature=ab7bc3d5f303c69f177f7fa0f7967c8720cf8dd30b8d84d0f3d7fe4d2747e9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

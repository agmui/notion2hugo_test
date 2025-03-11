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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNN5QHKS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFfEqiKyUboByYB57qmm9XWTyU4SD%2FG1hDTw6vxwsTmHAiEAmi5UcnWU0IimhzmkAjFoGYnQ5R%2Fcg3bRpFZNEO3FLUIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg1B6Aq6Ieiryw9SircAw2Y%2BzFtyo9uBHDED7mcIBIVzAOCU9pMwRfok9dzKKJGUw4BPcE0Du4YUGPWnQDgaYqvwY4Nscd%2B4Ik7BfYzxRxyUa7D9H6Fu2PPDQTHQgUbnSrcLH6oKVopstsGeyVEfvnRiGjXvoBSEqCCeopkoy2guvRyxLtQElNOCwt2Y3pQhh93bxg5AICcjh6%2BB%2Fxj5qDyDSi4TbQi0DHJ6zDuLvknivcAlL4DDq6b2%2BDGWd43hhzjS4J4wIZTm5f%2Fr7V5w4HmhiwexJivxRgEsg0DKhNQYSfS8r52lZ9PcLbyMKP3tPa%2BPnxPXuHS%2FIJS0R%2BKcZznlBtrPGZOG3llQQowTLKKSeCDGHFj9DdYcQ%2B%2FdVB3XUSdMbL1a%2FJyNmPUHVzeCctD6i6Ua4D4Rknxhzdr3oLwumGOZqsZgFAHA5n5EAx3egwG0s1SuEg3Qxi58B82jXnLGaHmeNaDvrZO1kJsr9wCPiouh3DJowBZbqW%2Ftx0EuxN6PRAjhxj%2BvHTixijchM0C2Z0G7cYovUifL7DgBXTXNbInqvTz0b6LudleNM2lklGzPbxzGy33mbtLxMSXUSLXHSgcGAEttAQAdv1YJ39Zv%2Fbb3xjfwQfbnpOlOEoMjEtcDdBjJuEiQjN9MMvQvr4GOqUBlKjoTrndSj2ZoZ%2FTSp77f9w1d%2FOsGWiRPmYhS9bHahPY4Uq%2BGYAIB0Fdve7Rl6yiDkjCDVqU3yGbKJdOREz4EKlXUdvHnN8XAwNZCQ5h8%2BCf9mkh6I0F9AWrWo6YCB1jONJk6mjwYnJ9AR90%2BrB8MUHZCXH5uPfmiT9PPF8p15fP0WKhMu1FrQj0Hq75khLd9%2FtOCx7%2BRyqKhP2h7A1AF%2B6Hlddo&X-Amz-Signature=a4ca53f5e51126bcc3bb22bcfb93dd1b0ed643f05ffad7cc53a82661a10b877e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNN5QHKS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFfEqiKyUboByYB57qmm9XWTyU4SD%2FG1hDTw6vxwsTmHAiEAmi5UcnWU0IimhzmkAjFoGYnQ5R%2Fcg3bRpFZNEO3FLUIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg1B6Aq6Ieiryw9SircAw2Y%2BzFtyo9uBHDED7mcIBIVzAOCU9pMwRfok9dzKKJGUw4BPcE0Du4YUGPWnQDgaYqvwY4Nscd%2B4Ik7BfYzxRxyUa7D9H6Fu2PPDQTHQgUbnSrcLH6oKVopstsGeyVEfvnRiGjXvoBSEqCCeopkoy2guvRyxLtQElNOCwt2Y3pQhh93bxg5AICcjh6%2BB%2Fxj5qDyDSi4TbQi0DHJ6zDuLvknivcAlL4DDq6b2%2BDGWd43hhzjS4J4wIZTm5f%2Fr7V5w4HmhiwexJivxRgEsg0DKhNQYSfS8r52lZ9PcLbyMKP3tPa%2BPnxPXuHS%2FIJS0R%2BKcZznlBtrPGZOG3llQQowTLKKSeCDGHFj9DdYcQ%2B%2FdVB3XUSdMbL1a%2FJyNmPUHVzeCctD6i6Ua4D4Rknxhzdr3oLwumGOZqsZgFAHA5n5EAx3egwG0s1SuEg3Qxi58B82jXnLGaHmeNaDvrZO1kJsr9wCPiouh3DJowBZbqW%2Ftx0EuxN6PRAjhxj%2BvHTixijchM0C2Z0G7cYovUifL7DgBXTXNbInqvTz0b6LudleNM2lklGzPbxzGy33mbtLxMSXUSLXHSgcGAEttAQAdv1YJ39Zv%2Fbb3xjfwQfbnpOlOEoMjEtcDdBjJuEiQjN9MMvQvr4GOqUBlKjoTrndSj2ZoZ%2FTSp77f9w1d%2FOsGWiRPmYhS9bHahPY4Uq%2BGYAIB0Fdve7Rl6yiDkjCDVqU3yGbKJdOREz4EKlXUdvHnN8XAwNZCQ5h8%2BCf9mkh6I0F9AWrWo6YCB1jONJk6mjwYnJ9AR90%2BrB8MUHZCXH5uPfmiT9PPF8p15fP0WKhMu1FrQj0Hq75khLd9%2FtOCx7%2BRyqKhP2h7A1AF%2B6Hlddo&X-Amz-Signature=cbc90ccb9a114dc7475a4bd400c111cdf4afdd2cd1adc4d40ca080a2458673a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNN5QHKS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFfEqiKyUboByYB57qmm9XWTyU4SD%2FG1hDTw6vxwsTmHAiEAmi5UcnWU0IimhzmkAjFoGYnQ5R%2Fcg3bRpFZNEO3FLUIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg1B6Aq6Ieiryw9SircAw2Y%2BzFtyo9uBHDED7mcIBIVzAOCU9pMwRfok9dzKKJGUw4BPcE0Du4YUGPWnQDgaYqvwY4Nscd%2B4Ik7BfYzxRxyUa7D9H6Fu2PPDQTHQgUbnSrcLH6oKVopstsGeyVEfvnRiGjXvoBSEqCCeopkoy2guvRyxLtQElNOCwt2Y3pQhh93bxg5AICcjh6%2BB%2Fxj5qDyDSi4TbQi0DHJ6zDuLvknivcAlL4DDq6b2%2BDGWd43hhzjS4J4wIZTm5f%2Fr7V5w4HmhiwexJivxRgEsg0DKhNQYSfS8r52lZ9PcLbyMKP3tPa%2BPnxPXuHS%2FIJS0R%2BKcZznlBtrPGZOG3llQQowTLKKSeCDGHFj9DdYcQ%2B%2FdVB3XUSdMbL1a%2FJyNmPUHVzeCctD6i6Ua4D4Rknxhzdr3oLwumGOZqsZgFAHA5n5EAx3egwG0s1SuEg3Qxi58B82jXnLGaHmeNaDvrZO1kJsr9wCPiouh3DJowBZbqW%2Ftx0EuxN6PRAjhxj%2BvHTixijchM0C2Z0G7cYovUifL7DgBXTXNbInqvTz0b6LudleNM2lklGzPbxzGy33mbtLxMSXUSLXHSgcGAEttAQAdv1YJ39Zv%2Fbb3xjfwQfbnpOlOEoMjEtcDdBjJuEiQjN9MMvQvr4GOqUBlKjoTrndSj2ZoZ%2FTSp77f9w1d%2FOsGWiRPmYhS9bHahPY4Uq%2BGYAIB0Fdve7Rl6yiDkjCDVqU3yGbKJdOREz4EKlXUdvHnN8XAwNZCQ5h8%2BCf9mkh6I0F9AWrWo6YCB1jONJk6mjwYnJ9AR90%2BrB8MUHZCXH5uPfmiT9PPF8p15fP0WKhMu1FrQj0Hq75khLd9%2FtOCx7%2BRyqKhP2h7A1AF%2B6Hlddo&X-Amz-Signature=552430d989569baa63385cb4216f99bc873c6ab05f14cd55219e6c324674dfc5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNN5QHKS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFfEqiKyUboByYB57qmm9XWTyU4SD%2FG1hDTw6vxwsTmHAiEAmi5UcnWU0IimhzmkAjFoGYnQ5R%2Fcg3bRpFZNEO3FLUIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg1B6Aq6Ieiryw9SircAw2Y%2BzFtyo9uBHDED7mcIBIVzAOCU9pMwRfok9dzKKJGUw4BPcE0Du4YUGPWnQDgaYqvwY4Nscd%2B4Ik7BfYzxRxyUa7D9H6Fu2PPDQTHQgUbnSrcLH6oKVopstsGeyVEfvnRiGjXvoBSEqCCeopkoy2guvRyxLtQElNOCwt2Y3pQhh93bxg5AICcjh6%2BB%2Fxj5qDyDSi4TbQi0DHJ6zDuLvknivcAlL4DDq6b2%2BDGWd43hhzjS4J4wIZTm5f%2Fr7V5w4HmhiwexJivxRgEsg0DKhNQYSfS8r52lZ9PcLbyMKP3tPa%2BPnxPXuHS%2FIJS0R%2BKcZznlBtrPGZOG3llQQowTLKKSeCDGHFj9DdYcQ%2B%2FdVB3XUSdMbL1a%2FJyNmPUHVzeCctD6i6Ua4D4Rknxhzdr3oLwumGOZqsZgFAHA5n5EAx3egwG0s1SuEg3Qxi58B82jXnLGaHmeNaDvrZO1kJsr9wCPiouh3DJowBZbqW%2Ftx0EuxN6PRAjhxj%2BvHTixijchM0C2Z0G7cYovUifL7DgBXTXNbInqvTz0b6LudleNM2lklGzPbxzGy33mbtLxMSXUSLXHSgcGAEttAQAdv1YJ39Zv%2Fbb3xjfwQfbnpOlOEoMjEtcDdBjJuEiQjN9MMvQvr4GOqUBlKjoTrndSj2ZoZ%2FTSp77f9w1d%2FOsGWiRPmYhS9bHahPY4Uq%2BGYAIB0Fdve7Rl6yiDkjCDVqU3yGbKJdOREz4EKlXUdvHnN8XAwNZCQ5h8%2BCf9mkh6I0F9AWrWo6YCB1jONJk6mjwYnJ9AR90%2BrB8MUHZCXH5uPfmiT9PPF8p15fP0WKhMu1FrQj0Hq75khLd9%2FtOCx7%2BRyqKhP2h7A1AF%2B6Hlddo&X-Amz-Signature=3ff3a8f0971fc46fdd087ba1dd6b734fa7e5b7738a736c04aec8454212c5a3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNN5QHKS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFfEqiKyUboByYB57qmm9XWTyU4SD%2FG1hDTw6vxwsTmHAiEAmi5UcnWU0IimhzmkAjFoGYnQ5R%2Fcg3bRpFZNEO3FLUIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg1B6Aq6Ieiryw9SircAw2Y%2BzFtyo9uBHDED7mcIBIVzAOCU9pMwRfok9dzKKJGUw4BPcE0Du4YUGPWnQDgaYqvwY4Nscd%2B4Ik7BfYzxRxyUa7D9H6Fu2PPDQTHQgUbnSrcLH6oKVopstsGeyVEfvnRiGjXvoBSEqCCeopkoy2guvRyxLtQElNOCwt2Y3pQhh93bxg5AICcjh6%2BB%2Fxj5qDyDSi4TbQi0DHJ6zDuLvknivcAlL4DDq6b2%2BDGWd43hhzjS4J4wIZTm5f%2Fr7V5w4HmhiwexJivxRgEsg0DKhNQYSfS8r52lZ9PcLbyMKP3tPa%2BPnxPXuHS%2FIJS0R%2BKcZznlBtrPGZOG3llQQowTLKKSeCDGHFj9DdYcQ%2B%2FdVB3XUSdMbL1a%2FJyNmPUHVzeCctD6i6Ua4D4Rknxhzdr3oLwumGOZqsZgFAHA5n5EAx3egwG0s1SuEg3Qxi58B82jXnLGaHmeNaDvrZO1kJsr9wCPiouh3DJowBZbqW%2Ftx0EuxN6PRAjhxj%2BvHTixijchM0C2Z0G7cYovUifL7DgBXTXNbInqvTz0b6LudleNM2lklGzPbxzGy33mbtLxMSXUSLXHSgcGAEttAQAdv1YJ39Zv%2Fbb3xjfwQfbnpOlOEoMjEtcDdBjJuEiQjN9MMvQvr4GOqUBlKjoTrndSj2ZoZ%2FTSp77f9w1d%2FOsGWiRPmYhS9bHahPY4Uq%2BGYAIB0Fdve7Rl6yiDkjCDVqU3yGbKJdOREz4EKlXUdvHnN8XAwNZCQ5h8%2BCf9mkh6I0F9AWrWo6YCB1jONJk6mjwYnJ9AR90%2BrB8MUHZCXH5uPfmiT9PPF8p15fP0WKhMu1FrQj0Hq75khLd9%2FtOCx7%2BRyqKhP2h7A1AF%2B6Hlddo&X-Amz-Signature=89f34cd2a8fcc3d48e743b0d96b326bb9c1bd5a3d90332f7adaec77c5e8794b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNN5QHKS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFfEqiKyUboByYB57qmm9XWTyU4SD%2FG1hDTw6vxwsTmHAiEAmi5UcnWU0IimhzmkAjFoGYnQ5R%2Fcg3bRpFZNEO3FLUIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg1B6Aq6Ieiryw9SircAw2Y%2BzFtyo9uBHDED7mcIBIVzAOCU9pMwRfok9dzKKJGUw4BPcE0Du4YUGPWnQDgaYqvwY4Nscd%2B4Ik7BfYzxRxyUa7D9H6Fu2PPDQTHQgUbnSrcLH6oKVopstsGeyVEfvnRiGjXvoBSEqCCeopkoy2guvRyxLtQElNOCwt2Y3pQhh93bxg5AICcjh6%2BB%2Fxj5qDyDSi4TbQi0DHJ6zDuLvknivcAlL4DDq6b2%2BDGWd43hhzjS4J4wIZTm5f%2Fr7V5w4HmhiwexJivxRgEsg0DKhNQYSfS8r52lZ9PcLbyMKP3tPa%2BPnxPXuHS%2FIJS0R%2BKcZznlBtrPGZOG3llQQowTLKKSeCDGHFj9DdYcQ%2B%2FdVB3XUSdMbL1a%2FJyNmPUHVzeCctD6i6Ua4D4Rknxhzdr3oLwumGOZqsZgFAHA5n5EAx3egwG0s1SuEg3Qxi58B82jXnLGaHmeNaDvrZO1kJsr9wCPiouh3DJowBZbqW%2Ftx0EuxN6PRAjhxj%2BvHTixijchM0C2Z0G7cYovUifL7DgBXTXNbInqvTz0b6LudleNM2lklGzPbxzGy33mbtLxMSXUSLXHSgcGAEttAQAdv1YJ39Zv%2Fbb3xjfwQfbnpOlOEoMjEtcDdBjJuEiQjN9MMvQvr4GOqUBlKjoTrndSj2ZoZ%2FTSp77f9w1d%2FOsGWiRPmYhS9bHahPY4Uq%2BGYAIB0Fdve7Rl6yiDkjCDVqU3yGbKJdOREz4EKlXUdvHnN8XAwNZCQ5h8%2BCf9mkh6I0F9AWrWo6YCB1jONJk6mjwYnJ9AR90%2BrB8MUHZCXH5uPfmiT9PPF8p15fP0WKhMu1FrQj0Hq75khLd9%2FtOCx7%2BRyqKhP2h7A1AF%2B6Hlddo&X-Amz-Signature=99236c2c906a3f63c02da8cd83f21ade6dc7d5a6bf844dc8450916a0cb3f494b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNN5QHKS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFfEqiKyUboByYB57qmm9XWTyU4SD%2FG1hDTw6vxwsTmHAiEAmi5UcnWU0IimhzmkAjFoGYnQ5R%2Fcg3bRpFZNEO3FLUIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg1B6Aq6Ieiryw9SircAw2Y%2BzFtyo9uBHDED7mcIBIVzAOCU9pMwRfok9dzKKJGUw4BPcE0Du4YUGPWnQDgaYqvwY4Nscd%2B4Ik7BfYzxRxyUa7D9H6Fu2PPDQTHQgUbnSrcLH6oKVopstsGeyVEfvnRiGjXvoBSEqCCeopkoy2guvRyxLtQElNOCwt2Y3pQhh93bxg5AICcjh6%2BB%2Fxj5qDyDSi4TbQi0DHJ6zDuLvknivcAlL4DDq6b2%2BDGWd43hhzjS4J4wIZTm5f%2Fr7V5w4HmhiwexJivxRgEsg0DKhNQYSfS8r52lZ9PcLbyMKP3tPa%2BPnxPXuHS%2FIJS0R%2BKcZznlBtrPGZOG3llQQowTLKKSeCDGHFj9DdYcQ%2B%2FdVB3XUSdMbL1a%2FJyNmPUHVzeCctD6i6Ua4D4Rknxhzdr3oLwumGOZqsZgFAHA5n5EAx3egwG0s1SuEg3Qxi58B82jXnLGaHmeNaDvrZO1kJsr9wCPiouh3DJowBZbqW%2Ftx0EuxN6PRAjhxj%2BvHTixijchM0C2Z0G7cYovUifL7DgBXTXNbInqvTz0b6LudleNM2lklGzPbxzGy33mbtLxMSXUSLXHSgcGAEttAQAdv1YJ39Zv%2Fbb3xjfwQfbnpOlOEoMjEtcDdBjJuEiQjN9MMvQvr4GOqUBlKjoTrndSj2ZoZ%2FTSp77f9w1d%2FOsGWiRPmYhS9bHahPY4Uq%2BGYAIB0Fdve7Rl6yiDkjCDVqU3yGbKJdOREz4EKlXUdvHnN8XAwNZCQ5h8%2BCf9mkh6I0F9AWrWo6YCB1jONJk6mjwYnJ9AR90%2BrB8MUHZCXH5uPfmiT9PPF8p15fP0WKhMu1FrQj0Hq75khLd9%2FtOCx7%2BRyqKhP2h7A1AF%2B6Hlddo&X-Amz-Signature=34c2ca7ab11f2b550a17261a5be549717fdf62dbc357e22e12884db83f225b45&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

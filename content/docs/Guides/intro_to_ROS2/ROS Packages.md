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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCDRDJN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDjZIrjMWG29paEIoowulhaVMgjFzD8wEdq33XrhEo9GQIhAJERgS%2BVxBmX3TS70Z2PN6dEKR%2BcI1CQPOT362h0S1OUKv8DCBoQABoMNjM3NDIzMTgzODA1IgykMG5oSrr20sJ00E4q3AP8dOW0JE2dvVoeIgR651mLM3tbJgiFLhBhPjqFKnvc0UQj1y5V1%2F5blNpw%2F3nvomHFCsFTAEfUa8IQ0VQz4lNXD9DkkDe1CquUMOjqmyraYfTgI%2BGweJp2%2FzSCoDXVp39sfYsyZfSlXtYMg%2Fn9mr78luVBQZNkBXMBnZaCX6%2Fos9fUORBvjF2cvkTzUDjZ6u9tXkYMAAZCUrU2DuLsVxWW%2Bhuyln12Gxt7TyfPBSNgOzPLq7rOKBAJxzHgypniTMXrMisiS7NDWlPdXfPdBClI%2FClDcQtayZ49LKYGumH%2BYbAFYyKpz2ZQ5aIJBYGUJZmWgq5VPZadU4r6M3PMREdbg0f%2F7KW3vtMOOAlvRk1lyC%2Ft3pzZt%2BRocT%2FPPZ9gueufckFX0ulZ%2BZuhOu3pM55jlgktuQE5npgN3ojaRS93Qp8OXDQ0PQnDoC%2BkmjqIjqIlENz%2BLbaS4LnGTkZ68i%2Byf2OrCRbNM4tJP5TD2pmNt02MGSiHfROZ7FWPtilZm6TtNWxJYkD4iGinq0goAyuoJZqmbeBpaB2RTzOAzPcxvPHs5ROhcHMBVgYXwLUvHSwQKINHeF%2Fr7AqjRM4MGZQkAGT7Njzh0%2Bq9ZBQt7bdVJAn6ZFDp4ivaDUZc0DC00vzBBjqkARibID9jpaeQFxPHFnv%2F135BxdSTNIoihxBYO7ieDK66tWltCLCDUWg8hOWsB6YuiOQbxIT9nTeEoXvAQ9DNp9WNHVagzYrTYzIFN%2Bmuk4K6xStKBAXxCrcpB2zAXu7lXuUye04L9HQiZlQs69Dj2%2FUVhSpGFIQDKIbtcHsIbOzmAX75eb%2FSzG2PexjfV%2Bi%2FoVJPMXHZ4h87M2fnPzA8qsySAw7y&X-Amz-Signature=9711f962ea2fbdf2bdbc6f47d94c1eb546ce0b7a6eeadf7ddc285942dd7a8c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCDRDJN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDjZIrjMWG29paEIoowulhaVMgjFzD8wEdq33XrhEo9GQIhAJERgS%2BVxBmX3TS70Z2PN6dEKR%2BcI1CQPOT362h0S1OUKv8DCBoQABoMNjM3NDIzMTgzODA1IgykMG5oSrr20sJ00E4q3AP8dOW0JE2dvVoeIgR651mLM3tbJgiFLhBhPjqFKnvc0UQj1y5V1%2F5blNpw%2F3nvomHFCsFTAEfUa8IQ0VQz4lNXD9DkkDe1CquUMOjqmyraYfTgI%2BGweJp2%2FzSCoDXVp39sfYsyZfSlXtYMg%2Fn9mr78luVBQZNkBXMBnZaCX6%2Fos9fUORBvjF2cvkTzUDjZ6u9tXkYMAAZCUrU2DuLsVxWW%2Bhuyln12Gxt7TyfPBSNgOzPLq7rOKBAJxzHgypniTMXrMisiS7NDWlPdXfPdBClI%2FClDcQtayZ49LKYGumH%2BYbAFYyKpz2ZQ5aIJBYGUJZmWgq5VPZadU4r6M3PMREdbg0f%2F7KW3vtMOOAlvRk1lyC%2Ft3pzZt%2BRocT%2FPPZ9gueufckFX0ulZ%2BZuhOu3pM55jlgktuQE5npgN3ojaRS93Qp8OXDQ0PQnDoC%2BkmjqIjqIlENz%2BLbaS4LnGTkZ68i%2Byf2OrCRbNM4tJP5TD2pmNt02MGSiHfROZ7FWPtilZm6TtNWxJYkD4iGinq0goAyuoJZqmbeBpaB2RTzOAzPcxvPHs5ROhcHMBVgYXwLUvHSwQKINHeF%2Fr7AqjRM4MGZQkAGT7Njzh0%2Bq9ZBQt7bdVJAn6ZFDp4ivaDUZc0DC00vzBBjqkARibID9jpaeQFxPHFnv%2F135BxdSTNIoihxBYO7ieDK66tWltCLCDUWg8hOWsB6YuiOQbxIT9nTeEoXvAQ9DNp9WNHVagzYrTYzIFN%2Bmuk4K6xStKBAXxCrcpB2zAXu7lXuUye04L9HQiZlQs69Dj2%2FUVhSpGFIQDKIbtcHsIbOzmAX75eb%2FSzG2PexjfV%2Bi%2FoVJPMXHZ4h87M2fnPzA8qsySAw7y&X-Amz-Signature=5492525eda23a32675b16e2b66f23f1e0716f37df0d583411f7ae23a83101103&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCDRDJN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDjZIrjMWG29paEIoowulhaVMgjFzD8wEdq33XrhEo9GQIhAJERgS%2BVxBmX3TS70Z2PN6dEKR%2BcI1CQPOT362h0S1OUKv8DCBoQABoMNjM3NDIzMTgzODA1IgykMG5oSrr20sJ00E4q3AP8dOW0JE2dvVoeIgR651mLM3tbJgiFLhBhPjqFKnvc0UQj1y5V1%2F5blNpw%2F3nvomHFCsFTAEfUa8IQ0VQz4lNXD9DkkDe1CquUMOjqmyraYfTgI%2BGweJp2%2FzSCoDXVp39sfYsyZfSlXtYMg%2Fn9mr78luVBQZNkBXMBnZaCX6%2Fos9fUORBvjF2cvkTzUDjZ6u9tXkYMAAZCUrU2DuLsVxWW%2Bhuyln12Gxt7TyfPBSNgOzPLq7rOKBAJxzHgypniTMXrMisiS7NDWlPdXfPdBClI%2FClDcQtayZ49LKYGumH%2BYbAFYyKpz2ZQ5aIJBYGUJZmWgq5VPZadU4r6M3PMREdbg0f%2F7KW3vtMOOAlvRk1lyC%2Ft3pzZt%2BRocT%2FPPZ9gueufckFX0ulZ%2BZuhOu3pM55jlgktuQE5npgN3ojaRS93Qp8OXDQ0PQnDoC%2BkmjqIjqIlENz%2BLbaS4LnGTkZ68i%2Byf2OrCRbNM4tJP5TD2pmNt02MGSiHfROZ7FWPtilZm6TtNWxJYkD4iGinq0goAyuoJZqmbeBpaB2RTzOAzPcxvPHs5ROhcHMBVgYXwLUvHSwQKINHeF%2Fr7AqjRM4MGZQkAGT7Njzh0%2Bq9ZBQt7bdVJAn6ZFDp4ivaDUZc0DC00vzBBjqkARibID9jpaeQFxPHFnv%2F135BxdSTNIoihxBYO7ieDK66tWltCLCDUWg8hOWsB6YuiOQbxIT9nTeEoXvAQ9DNp9WNHVagzYrTYzIFN%2Bmuk4K6xStKBAXxCrcpB2zAXu7lXuUye04L9HQiZlQs69Dj2%2FUVhSpGFIQDKIbtcHsIbOzmAX75eb%2FSzG2PexjfV%2Bi%2FoVJPMXHZ4h87M2fnPzA8qsySAw7y&X-Amz-Signature=81f24ae12bb5e3fda93dd2ca8232fd475776a36f7d622979761951c5d53fd518&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCDRDJN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDjZIrjMWG29paEIoowulhaVMgjFzD8wEdq33XrhEo9GQIhAJERgS%2BVxBmX3TS70Z2PN6dEKR%2BcI1CQPOT362h0S1OUKv8DCBoQABoMNjM3NDIzMTgzODA1IgykMG5oSrr20sJ00E4q3AP8dOW0JE2dvVoeIgR651mLM3tbJgiFLhBhPjqFKnvc0UQj1y5V1%2F5blNpw%2F3nvomHFCsFTAEfUa8IQ0VQz4lNXD9DkkDe1CquUMOjqmyraYfTgI%2BGweJp2%2FzSCoDXVp39sfYsyZfSlXtYMg%2Fn9mr78luVBQZNkBXMBnZaCX6%2Fos9fUORBvjF2cvkTzUDjZ6u9tXkYMAAZCUrU2DuLsVxWW%2Bhuyln12Gxt7TyfPBSNgOzPLq7rOKBAJxzHgypniTMXrMisiS7NDWlPdXfPdBClI%2FClDcQtayZ49LKYGumH%2BYbAFYyKpz2ZQ5aIJBYGUJZmWgq5VPZadU4r6M3PMREdbg0f%2F7KW3vtMOOAlvRk1lyC%2Ft3pzZt%2BRocT%2FPPZ9gueufckFX0ulZ%2BZuhOu3pM55jlgktuQE5npgN3ojaRS93Qp8OXDQ0PQnDoC%2BkmjqIjqIlENz%2BLbaS4LnGTkZ68i%2Byf2OrCRbNM4tJP5TD2pmNt02MGSiHfROZ7FWPtilZm6TtNWxJYkD4iGinq0goAyuoJZqmbeBpaB2RTzOAzPcxvPHs5ROhcHMBVgYXwLUvHSwQKINHeF%2Fr7AqjRM4MGZQkAGT7Njzh0%2Bq9ZBQt7bdVJAn6ZFDp4ivaDUZc0DC00vzBBjqkARibID9jpaeQFxPHFnv%2F135BxdSTNIoihxBYO7ieDK66tWltCLCDUWg8hOWsB6YuiOQbxIT9nTeEoXvAQ9DNp9WNHVagzYrTYzIFN%2Bmuk4K6xStKBAXxCrcpB2zAXu7lXuUye04L9HQiZlQs69Dj2%2FUVhSpGFIQDKIbtcHsIbOzmAX75eb%2FSzG2PexjfV%2Bi%2FoVJPMXHZ4h87M2fnPzA8qsySAw7y&X-Amz-Signature=ccfd599088d352cb5ef5f6342e98cb8acf4dca0d122483ddde1e802eceb4e427&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCDRDJN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDjZIrjMWG29paEIoowulhaVMgjFzD8wEdq33XrhEo9GQIhAJERgS%2BVxBmX3TS70Z2PN6dEKR%2BcI1CQPOT362h0S1OUKv8DCBoQABoMNjM3NDIzMTgzODA1IgykMG5oSrr20sJ00E4q3AP8dOW0JE2dvVoeIgR651mLM3tbJgiFLhBhPjqFKnvc0UQj1y5V1%2F5blNpw%2F3nvomHFCsFTAEfUa8IQ0VQz4lNXD9DkkDe1CquUMOjqmyraYfTgI%2BGweJp2%2FzSCoDXVp39sfYsyZfSlXtYMg%2Fn9mr78luVBQZNkBXMBnZaCX6%2Fos9fUORBvjF2cvkTzUDjZ6u9tXkYMAAZCUrU2DuLsVxWW%2Bhuyln12Gxt7TyfPBSNgOzPLq7rOKBAJxzHgypniTMXrMisiS7NDWlPdXfPdBClI%2FClDcQtayZ49LKYGumH%2BYbAFYyKpz2ZQ5aIJBYGUJZmWgq5VPZadU4r6M3PMREdbg0f%2F7KW3vtMOOAlvRk1lyC%2Ft3pzZt%2BRocT%2FPPZ9gueufckFX0ulZ%2BZuhOu3pM55jlgktuQE5npgN3ojaRS93Qp8OXDQ0PQnDoC%2BkmjqIjqIlENz%2BLbaS4LnGTkZ68i%2Byf2OrCRbNM4tJP5TD2pmNt02MGSiHfROZ7FWPtilZm6TtNWxJYkD4iGinq0goAyuoJZqmbeBpaB2RTzOAzPcxvPHs5ROhcHMBVgYXwLUvHSwQKINHeF%2Fr7AqjRM4MGZQkAGT7Njzh0%2Bq9ZBQt7bdVJAn6ZFDp4ivaDUZc0DC00vzBBjqkARibID9jpaeQFxPHFnv%2F135BxdSTNIoihxBYO7ieDK66tWltCLCDUWg8hOWsB6YuiOQbxIT9nTeEoXvAQ9DNp9WNHVagzYrTYzIFN%2Bmuk4K6xStKBAXxCrcpB2zAXu7lXuUye04L9HQiZlQs69Dj2%2FUVhSpGFIQDKIbtcHsIbOzmAX75eb%2FSzG2PexjfV%2Bi%2FoVJPMXHZ4h87M2fnPzA8qsySAw7y&X-Amz-Signature=c16d16e3ef1ba57fdd59776f5066a354669f80b2dc79690d7d05af92ac641862&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCDRDJN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDjZIrjMWG29paEIoowulhaVMgjFzD8wEdq33XrhEo9GQIhAJERgS%2BVxBmX3TS70Z2PN6dEKR%2BcI1CQPOT362h0S1OUKv8DCBoQABoMNjM3NDIzMTgzODA1IgykMG5oSrr20sJ00E4q3AP8dOW0JE2dvVoeIgR651mLM3tbJgiFLhBhPjqFKnvc0UQj1y5V1%2F5blNpw%2F3nvomHFCsFTAEfUa8IQ0VQz4lNXD9DkkDe1CquUMOjqmyraYfTgI%2BGweJp2%2FzSCoDXVp39sfYsyZfSlXtYMg%2Fn9mr78luVBQZNkBXMBnZaCX6%2Fos9fUORBvjF2cvkTzUDjZ6u9tXkYMAAZCUrU2DuLsVxWW%2Bhuyln12Gxt7TyfPBSNgOzPLq7rOKBAJxzHgypniTMXrMisiS7NDWlPdXfPdBClI%2FClDcQtayZ49LKYGumH%2BYbAFYyKpz2ZQ5aIJBYGUJZmWgq5VPZadU4r6M3PMREdbg0f%2F7KW3vtMOOAlvRk1lyC%2Ft3pzZt%2BRocT%2FPPZ9gueufckFX0ulZ%2BZuhOu3pM55jlgktuQE5npgN3ojaRS93Qp8OXDQ0PQnDoC%2BkmjqIjqIlENz%2BLbaS4LnGTkZ68i%2Byf2OrCRbNM4tJP5TD2pmNt02MGSiHfROZ7FWPtilZm6TtNWxJYkD4iGinq0goAyuoJZqmbeBpaB2RTzOAzPcxvPHs5ROhcHMBVgYXwLUvHSwQKINHeF%2Fr7AqjRM4MGZQkAGT7Njzh0%2Bq9ZBQt7bdVJAn6ZFDp4ivaDUZc0DC00vzBBjqkARibID9jpaeQFxPHFnv%2F135BxdSTNIoihxBYO7ieDK66tWltCLCDUWg8hOWsB6YuiOQbxIT9nTeEoXvAQ9DNp9WNHVagzYrTYzIFN%2Bmuk4K6xStKBAXxCrcpB2zAXu7lXuUye04L9HQiZlQs69Dj2%2FUVhSpGFIQDKIbtcHsIbOzmAX75eb%2FSzG2PexjfV%2Bi%2FoVJPMXHZ4h87M2fnPzA8qsySAw7y&X-Amz-Signature=4ab5d3283bdc2cd08781a5e269c082ba18a05c23ff9c66e36ed96206a5112be3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCDRDJN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDjZIrjMWG29paEIoowulhaVMgjFzD8wEdq33XrhEo9GQIhAJERgS%2BVxBmX3TS70Z2PN6dEKR%2BcI1CQPOT362h0S1OUKv8DCBoQABoMNjM3NDIzMTgzODA1IgykMG5oSrr20sJ00E4q3AP8dOW0JE2dvVoeIgR651mLM3tbJgiFLhBhPjqFKnvc0UQj1y5V1%2F5blNpw%2F3nvomHFCsFTAEfUa8IQ0VQz4lNXD9DkkDe1CquUMOjqmyraYfTgI%2BGweJp2%2FzSCoDXVp39sfYsyZfSlXtYMg%2Fn9mr78luVBQZNkBXMBnZaCX6%2Fos9fUORBvjF2cvkTzUDjZ6u9tXkYMAAZCUrU2DuLsVxWW%2Bhuyln12Gxt7TyfPBSNgOzPLq7rOKBAJxzHgypniTMXrMisiS7NDWlPdXfPdBClI%2FClDcQtayZ49LKYGumH%2BYbAFYyKpz2ZQ5aIJBYGUJZmWgq5VPZadU4r6M3PMREdbg0f%2F7KW3vtMOOAlvRk1lyC%2Ft3pzZt%2BRocT%2FPPZ9gueufckFX0ulZ%2BZuhOu3pM55jlgktuQE5npgN3ojaRS93Qp8OXDQ0PQnDoC%2BkmjqIjqIlENz%2BLbaS4LnGTkZ68i%2Byf2OrCRbNM4tJP5TD2pmNt02MGSiHfROZ7FWPtilZm6TtNWxJYkD4iGinq0goAyuoJZqmbeBpaB2RTzOAzPcxvPHs5ROhcHMBVgYXwLUvHSwQKINHeF%2Fr7AqjRM4MGZQkAGT7Njzh0%2Bq9ZBQt7bdVJAn6ZFDp4ivaDUZc0DC00vzBBjqkARibID9jpaeQFxPHFnv%2F135BxdSTNIoihxBYO7ieDK66tWltCLCDUWg8hOWsB6YuiOQbxIT9nTeEoXvAQ9DNp9WNHVagzYrTYzIFN%2Bmuk4K6xStKBAXxCrcpB2zAXu7lXuUye04L9HQiZlQs69Dj2%2FUVhSpGFIQDKIbtcHsIbOzmAX75eb%2FSzG2PexjfV%2Bi%2FoVJPMXHZ4h87M2fnPzA8qsySAw7y&X-Amz-Signature=a91d6bd79726a3a0053ad757a4059792dc55fa684a9aafb95e9b833b10dfcf87&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

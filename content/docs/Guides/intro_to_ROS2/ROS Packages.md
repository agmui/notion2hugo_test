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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZQTFWG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfqXEm8h1gtTTqu2Z%2BTWMy1xqo%2FmDZO75qb7sy6ltkrAiEA0%2BQfagjN1rrl0M8%2Fl7ERPFhlQKxmoR8IVNCCDW%2BPReUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzzLuxY7gLsW1aA0ircA4rwo%2BrMum6nbocUXa7QLPzchNF3fpZoUqVBoIuHtcfWhFRvHNQY1gq3Q9I7zOoBD3mY4BEZhFrtW5rUr%2FUY1GZeX870UF8UCH5u%2BfA77FeKLU%2FU%2Fe0%2BWs4as0zZdNx0wTEieAPm2wSG4XRDLnXnbeHqGHx%2BwLvuDxY5HhtGJaV2OfM8vA72uVS8ULwLhYgnXLsLbBbiOoOcyw8j73peRElKBSMuNFID9NiWl%2FLiBsa3DqH%2BiUJIcjUNLoDYn0%2BfiZF0b%2BN%2BWHptZR%2Fq5AwsHBZGp%2B8711IkMgMWSlsBbG760RRX282%2BeAkJ3gkE9NoDakwruJtbNcJqHRqDdpWXxDhjDB0Go%2BmTqfveyw87WoHYKctlxHokoWoL%2BD1N1OnbSrdoCpIiEs%2FLyoKcdQnYDXpQ59eDZjnczn7uSOiy496lGlqNZ3M2IpRkN1bUhSeCZT3BM6XpJqnUIBX95YzZ2Lsqma%2F6sYYs8XjnZIegnKgM1kypd4SORzX%2BNEgmlfonHl0FwTJQlmCJIzmvMtUqQSBVAm8%2FR5MZtrD4ryEw2%2FcXx9dUsSW0gjS%2FFC1D%2FBCfqnZEw4b3zBVj6HXczqU78FyUlaQWP4OuS1wBaKnp33QQWjsQ7ew4xhItw0M2MMiiyL4GOqUBrKAH6t7N2JgYAXaVT2Q%2BgYV70arl8svcY4pcoPUrmr8p%2B%2FvP3SIO2BgJm2%2F1xUja4%2FN2aCIuXYHW52UIT14PtaN2RXgPKOPxUx9jGVz%2FyaZltXf1Vh1aiQk%2FfLk3eKLntxIFwdMad5Hzkuu4GeKVcB3A0MAKSAVc6mVTZdidHE1nMgLPjgjtucJLX1o6n1mFEB1IIxtx20zrpE%2FomQ1vtPJLHYnt&X-Amz-Signature=a7c6eceb5b5128d848d00755c8937f8c5bddd9b57089a0b638523b533fd35b40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZQTFWG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfqXEm8h1gtTTqu2Z%2BTWMy1xqo%2FmDZO75qb7sy6ltkrAiEA0%2BQfagjN1rrl0M8%2Fl7ERPFhlQKxmoR8IVNCCDW%2BPReUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzzLuxY7gLsW1aA0ircA4rwo%2BrMum6nbocUXa7QLPzchNF3fpZoUqVBoIuHtcfWhFRvHNQY1gq3Q9I7zOoBD3mY4BEZhFrtW5rUr%2FUY1GZeX870UF8UCH5u%2BfA77FeKLU%2FU%2Fe0%2BWs4as0zZdNx0wTEieAPm2wSG4XRDLnXnbeHqGHx%2BwLvuDxY5HhtGJaV2OfM8vA72uVS8ULwLhYgnXLsLbBbiOoOcyw8j73peRElKBSMuNFID9NiWl%2FLiBsa3DqH%2BiUJIcjUNLoDYn0%2BfiZF0b%2BN%2BWHptZR%2Fq5AwsHBZGp%2B8711IkMgMWSlsBbG760RRX282%2BeAkJ3gkE9NoDakwruJtbNcJqHRqDdpWXxDhjDB0Go%2BmTqfveyw87WoHYKctlxHokoWoL%2BD1N1OnbSrdoCpIiEs%2FLyoKcdQnYDXpQ59eDZjnczn7uSOiy496lGlqNZ3M2IpRkN1bUhSeCZT3BM6XpJqnUIBX95YzZ2Lsqma%2F6sYYs8XjnZIegnKgM1kypd4SORzX%2BNEgmlfonHl0FwTJQlmCJIzmvMtUqQSBVAm8%2FR5MZtrD4ryEw2%2FcXx9dUsSW0gjS%2FFC1D%2FBCfqnZEw4b3zBVj6HXczqU78FyUlaQWP4OuS1wBaKnp33QQWjsQ7ew4xhItw0M2MMiiyL4GOqUBrKAH6t7N2JgYAXaVT2Q%2BgYV70arl8svcY4pcoPUrmr8p%2B%2FvP3SIO2BgJm2%2F1xUja4%2FN2aCIuXYHW52UIT14PtaN2RXgPKOPxUx9jGVz%2FyaZltXf1Vh1aiQk%2FfLk3eKLntxIFwdMad5Hzkuu4GeKVcB3A0MAKSAVc6mVTZdidHE1nMgLPjgjtucJLX1o6n1mFEB1IIxtx20zrpE%2FomQ1vtPJLHYnt&X-Amz-Signature=a5a620c046065759a460be2b8ff40acaa831497e9d70367b9cfa30fec1233eda&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZQTFWG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfqXEm8h1gtTTqu2Z%2BTWMy1xqo%2FmDZO75qb7sy6ltkrAiEA0%2BQfagjN1rrl0M8%2Fl7ERPFhlQKxmoR8IVNCCDW%2BPReUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzzLuxY7gLsW1aA0ircA4rwo%2BrMum6nbocUXa7QLPzchNF3fpZoUqVBoIuHtcfWhFRvHNQY1gq3Q9I7zOoBD3mY4BEZhFrtW5rUr%2FUY1GZeX870UF8UCH5u%2BfA77FeKLU%2FU%2Fe0%2BWs4as0zZdNx0wTEieAPm2wSG4XRDLnXnbeHqGHx%2BwLvuDxY5HhtGJaV2OfM8vA72uVS8ULwLhYgnXLsLbBbiOoOcyw8j73peRElKBSMuNFID9NiWl%2FLiBsa3DqH%2BiUJIcjUNLoDYn0%2BfiZF0b%2BN%2BWHptZR%2Fq5AwsHBZGp%2B8711IkMgMWSlsBbG760RRX282%2BeAkJ3gkE9NoDakwruJtbNcJqHRqDdpWXxDhjDB0Go%2BmTqfveyw87WoHYKctlxHokoWoL%2BD1N1OnbSrdoCpIiEs%2FLyoKcdQnYDXpQ59eDZjnczn7uSOiy496lGlqNZ3M2IpRkN1bUhSeCZT3BM6XpJqnUIBX95YzZ2Lsqma%2F6sYYs8XjnZIegnKgM1kypd4SORzX%2BNEgmlfonHl0FwTJQlmCJIzmvMtUqQSBVAm8%2FR5MZtrD4ryEw2%2FcXx9dUsSW0gjS%2FFC1D%2FBCfqnZEw4b3zBVj6HXczqU78FyUlaQWP4OuS1wBaKnp33QQWjsQ7ew4xhItw0M2MMiiyL4GOqUBrKAH6t7N2JgYAXaVT2Q%2BgYV70arl8svcY4pcoPUrmr8p%2B%2FvP3SIO2BgJm2%2F1xUja4%2FN2aCIuXYHW52UIT14PtaN2RXgPKOPxUx9jGVz%2FyaZltXf1Vh1aiQk%2FfLk3eKLntxIFwdMad5Hzkuu4GeKVcB3A0MAKSAVc6mVTZdidHE1nMgLPjgjtucJLX1o6n1mFEB1IIxtx20zrpE%2FomQ1vtPJLHYnt&X-Amz-Signature=ab9e4ebb4403fdc93613f14ccaf70e181dc87c70ceab1f63368c1ef362cd6e59&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZQTFWG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfqXEm8h1gtTTqu2Z%2BTWMy1xqo%2FmDZO75qb7sy6ltkrAiEA0%2BQfagjN1rrl0M8%2Fl7ERPFhlQKxmoR8IVNCCDW%2BPReUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzzLuxY7gLsW1aA0ircA4rwo%2BrMum6nbocUXa7QLPzchNF3fpZoUqVBoIuHtcfWhFRvHNQY1gq3Q9I7zOoBD3mY4BEZhFrtW5rUr%2FUY1GZeX870UF8UCH5u%2BfA77FeKLU%2FU%2Fe0%2BWs4as0zZdNx0wTEieAPm2wSG4XRDLnXnbeHqGHx%2BwLvuDxY5HhtGJaV2OfM8vA72uVS8ULwLhYgnXLsLbBbiOoOcyw8j73peRElKBSMuNFID9NiWl%2FLiBsa3DqH%2BiUJIcjUNLoDYn0%2BfiZF0b%2BN%2BWHptZR%2Fq5AwsHBZGp%2B8711IkMgMWSlsBbG760RRX282%2BeAkJ3gkE9NoDakwruJtbNcJqHRqDdpWXxDhjDB0Go%2BmTqfveyw87WoHYKctlxHokoWoL%2BD1N1OnbSrdoCpIiEs%2FLyoKcdQnYDXpQ59eDZjnczn7uSOiy496lGlqNZ3M2IpRkN1bUhSeCZT3BM6XpJqnUIBX95YzZ2Lsqma%2F6sYYs8XjnZIegnKgM1kypd4SORzX%2BNEgmlfonHl0FwTJQlmCJIzmvMtUqQSBVAm8%2FR5MZtrD4ryEw2%2FcXx9dUsSW0gjS%2FFC1D%2FBCfqnZEw4b3zBVj6HXczqU78FyUlaQWP4OuS1wBaKnp33QQWjsQ7ew4xhItw0M2MMiiyL4GOqUBrKAH6t7N2JgYAXaVT2Q%2BgYV70arl8svcY4pcoPUrmr8p%2B%2FvP3SIO2BgJm2%2F1xUja4%2FN2aCIuXYHW52UIT14PtaN2RXgPKOPxUx9jGVz%2FyaZltXf1Vh1aiQk%2FfLk3eKLntxIFwdMad5Hzkuu4GeKVcB3A0MAKSAVc6mVTZdidHE1nMgLPjgjtucJLX1o6n1mFEB1IIxtx20zrpE%2FomQ1vtPJLHYnt&X-Amz-Signature=da05649591d54d349886889b530d566c59e7748d7f1775f877bd505ddeb4e7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZQTFWG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfqXEm8h1gtTTqu2Z%2BTWMy1xqo%2FmDZO75qb7sy6ltkrAiEA0%2BQfagjN1rrl0M8%2Fl7ERPFhlQKxmoR8IVNCCDW%2BPReUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzzLuxY7gLsW1aA0ircA4rwo%2BrMum6nbocUXa7QLPzchNF3fpZoUqVBoIuHtcfWhFRvHNQY1gq3Q9I7zOoBD3mY4BEZhFrtW5rUr%2FUY1GZeX870UF8UCH5u%2BfA77FeKLU%2FU%2Fe0%2BWs4as0zZdNx0wTEieAPm2wSG4XRDLnXnbeHqGHx%2BwLvuDxY5HhtGJaV2OfM8vA72uVS8ULwLhYgnXLsLbBbiOoOcyw8j73peRElKBSMuNFID9NiWl%2FLiBsa3DqH%2BiUJIcjUNLoDYn0%2BfiZF0b%2BN%2BWHptZR%2Fq5AwsHBZGp%2B8711IkMgMWSlsBbG760RRX282%2BeAkJ3gkE9NoDakwruJtbNcJqHRqDdpWXxDhjDB0Go%2BmTqfveyw87WoHYKctlxHokoWoL%2BD1N1OnbSrdoCpIiEs%2FLyoKcdQnYDXpQ59eDZjnczn7uSOiy496lGlqNZ3M2IpRkN1bUhSeCZT3BM6XpJqnUIBX95YzZ2Lsqma%2F6sYYs8XjnZIegnKgM1kypd4SORzX%2BNEgmlfonHl0FwTJQlmCJIzmvMtUqQSBVAm8%2FR5MZtrD4ryEw2%2FcXx9dUsSW0gjS%2FFC1D%2FBCfqnZEw4b3zBVj6HXczqU78FyUlaQWP4OuS1wBaKnp33QQWjsQ7ew4xhItw0M2MMiiyL4GOqUBrKAH6t7N2JgYAXaVT2Q%2BgYV70arl8svcY4pcoPUrmr8p%2B%2FvP3SIO2BgJm2%2F1xUja4%2FN2aCIuXYHW52UIT14PtaN2RXgPKOPxUx9jGVz%2FyaZltXf1Vh1aiQk%2FfLk3eKLntxIFwdMad5Hzkuu4GeKVcB3A0MAKSAVc6mVTZdidHE1nMgLPjgjtucJLX1o6n1mFEB1IIxtx20zrpE%2FomQ1vtPJLHYnt&X-Amz-Signature=e516873dee1460d6574a5c5adead74ee02639647d498b8c9239f5ffe4da19fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZQTFWG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfqXEm8h1gtTTqu2Z%2BTWMy1xqo%2FmDZO75qb7sy6ltkrAiEA0%2BQfagjN1rrl0M8%2Fl7ERPFhlQKxmoR8IVNCCDW%2BPReUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzzLuxY7gLsW1aA0ircA4rwo%2BrMum6nbocUXa7QLPzchNF3fpZoUqVBoIuHtcfWhFRvHNQY1gq3Q9I7zOoBD3mY4BEZhFrtW5rUr%2FUY1GZeX870UF8UCH5u%2BfA77FeKLU%2FU%2Fe0%2BWs4as0zZdNx0wTEieAPm2wSG4XRDLnXnbeHqGHx%2BwLvuDxY5HhtGJaV2OfM8vA72uVS8ULwLhYgnXLsLbBbiOoOcyw8j73peRElKBSMuNFID9NiWl%2FLiBsa3DqH%2BiUJIcjUNLoDYn0%2BfiZF0b%2BN%2BWHptZR%2Fq5AwsHBZGp%2B8711IkMgMWSlsBbG760RRX282%2BeAkJ3gkE9NoDakwruJtbNcJqHRqDdpWXxDhjDB0Go%2BmTqfveyw87WoHYKctlxHokoWoL%2BD1N1OnbSrdoCpIiEs%2FLyoKcdQnYDXpQ59eDZjnczn7uSOiy496lGlqNZ3M2IpRkN1bUhSeCZT3BM6XpJqnUIBX95YzZ2Lsqma%2F6sYYs8XjnZIegnKgM1kypd4SORzX%2BNEgmlfonHl0FwTJQlmCJIzmvMtUqQSBVAm8%2FR5MZtrD4ryEw2%2FcXx9dUsSW0gjS%2FFC1D%2FBCfqnZEw4b3zBVj6HXczqU78FyUlaQWP4OuS1wBaKnp33QQWjsQ7ew4xhItw0M2MMiiyL4GOqUBrKAH6t7N2JgYAXaVT2Q%2BgYV70arl8svcY4pcoPUrmr8p%2B%2FvP3SIO2BgJm2%2F1xUja4%2FN2aCIuXYHW52UIT14PtaN2RXgPKOPxUx9jGVz%2FyaZltXf1Vh1aiQk%2FfLk3eKLntxIFwdMad5Hzkuu4GeKVcB3A0MAKSAVc6mVTZdidHE1nMgLPjgjtucJLX1o6n1mFEB1IIxtx20zrpE%2FomQ1vtPJLHYnt&X-Amz-Signature=bfc548296b3fb466c4086f01ac8ae503546c46b1dddbba98eafabe1ab61013c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZQTFWG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfqXEm8h1gtTTqu2Z%2BTWMy1xqo%2FmDZO75qb7sy6ltkrAiEA0%2BQfagjN1rrl0M8%2Fl7ERPFhlQKxmoR8IVNCCDW%2BPReUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzzLuxY7gLsW1aA0ircA4rwo%2BrMum6nbocUXa7QLPzchNF3fpZoUqVBoIuHtcfWhFRvHNQY1gq3Q9I7zOoBD3mY4BEZhFrtW5rUr%2FUY1GZeX870UF8UCH5u%2BfA77FeKLU%2FU%2Fe0%2BWs4as0zZdNx0wTEieAPm2wSG4XRDLnXnbeHqGHx%2BwLvuDxY5HhtGJaV2OfM8vA72uVS8ULwLhYgnXLsLbBbiOoOcyw8j73peRElKBSMuNFID9NiWl%2FLiBsa3DqH%2BiUJIcjUNLoDYn0%2BfiZF0b%2BN%2BWHptZR%2Fq5AwsHBZGp%2B8711IkMgMWSlsBbG760RRX282%2BeAkJ3gkE9NoDakwruJtbNcJqHRqDdpWXxDhjDB0Go%2BmTqfveyw87WoHYKctlxHokoWoL%2BD1N1OnbSrdoCpIiEs%2FLyoKcdQnYDXpQ59eDZjnczn7uSOiy496lGlqNZ3M2IpRkN1bUhSeCZT3BM6XpJqnUIBX95YzZ2Lsqma%2F6sYYs8XjnZIegnKgM1kypd4SORzX%2BNEgmlfonHl0FwTJQlmCJIzmvMtUqQSBVAm8%2FR5MZtrD4ryEw2%2FcXx9dUsSW0gjS%2FFC1D%2FBCfqnZEw4b3zBVj6HXczqU78FyUlaQWP4OuS1wBaKnp33QQWjsQ7ew4xhItw0M2MMiiyL4GOqUBrKAH6t7N2JgYAXaVT2Q%2BgYV70arl8svcY4pcoPUrmr8p%2B%2FvP3SIO2BgJm2%2F1xUja4%2FN2aCIuXYHW52UIT14PtaN2RXgPKOPxUx9jGVz%2FyaZltXf1Vh1aiQk%2FfLk3eKLntxIFwdMad5Hzkuu4GeKVcB3A0MAKSAVc6mVTZdidHE1nMgLPjgjtucJLX1o6n1mFEB1IIxtx20zrpE%2FomQ1vtPJLHYnt&X-Amz-Signature=66d929839a69d7a1c760992239367d60d8b8beea5309f6361b0780f04dfd27f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

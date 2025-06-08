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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRQLQF3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvL7bonf2z%2BM%2FJFa4mye9evksXApgzC8SGz80UWdfLFgIgVYEB31v9CpxNgCGFQ3UlN%2FKbE7HsUr4mF7jTtpJLxLsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FS5vjTQANgIYbXUyrcA2Topjhl%2BUpkBcVnZlL8feVy9oVh6K6wo3SqubyFbzGX9DSGiduDgsNHZdd9AYGotHpq7zFlUMbDk%2BgwE3XMB7%2FTVat5ONimDXEvwC6ODcR12Nqti%2FMpr0A%2F7FMzRNyFiKlP9pVMO19G2bG2Yr6T5qk9IOshR76YnMjK%2FCG9UXhVyB3Nr34%2BVTHCE1LPUzP29PKUPvQj5sPz02Pmt7Betx0h5%2FL0NoxRSwBaGp5Nh2Fnjswq5VS1uOO9MqqeT76YLqgIfAhoYF%2Flp7JH0%2BeyL5bDArAllw7ruZnM0R%2FE1elHpXGhquWx95%2BfFUpHgso7ol2eVAo0tjPW2EjqHvpYKSGDtuJv7peVHF6m5R%2FJnABxwsc4qCmJipBA6EvdVATRzlqH8%2FfMHQgq3E9R4Oydmunt2KlJRwqTtveyp37W3JhiI%2BiW7%2FZZ%2BDuf6AHO74XEE26RjxqfPOBmM40Nl8J6YFWoA14qEpP%2FLMKnowhpS1l3%2BmhdN3jkV3ckSLKuGZNwYt77Z8nOluZ%2BetxHXBCWxwldQAyjTm1YrbigiXw0awe7FU%2B5%2BNLQ7ywATSIKrtg8pR6GJXZg5ik%2F1ZMpVhEdm0MtBceeJoVfIDzv05%2FvQFTbw%2FLVBEidrfKU8IghMLymlcIGOqUB13t9qZunhDjnV4jlhHsHpBPvOQ3Mw4tnVp0YU2qRLF5fCmloGKIYnkHwMOituTc2aNCsBYqtwVzHrauGzg58iywdoylpb2er%2FRzNYXnYmfyQ5cOtqLoeJ6BqEJJQcPKmj1E8LHgPB8LwqWInt9WKbczS96710eppYtIScSo5jeyH5m%2BFEsVfGPcWyiVIw4lwoz63E%2FWovOUZnoOcZCU7NLJqpHwQ&X-Amz-Signature=5d70e47ffd6afb2d5b2567e36fa0ed6ce1b0c74fb87594232cfe10ccc5da4fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRQLQF3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvL7bonf2z%2BM%2FJFa4mye9evksXApgzC8SGz80UWdfLFgIgVYEB31v9CpxNgCGFQ3UlN%2FKbE7HsUr4mF7jTtpJLxLsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FS5vjTQANgIYbXUyrcA2Topjhl%2BUpkBcVnZlL8feVy9oVh6K6wo3SqubyFbzGX9DSGiduDgsNHZdd9AYGotHpq7zFlUMbDk%2BgwE3XMB7%2FTVat5ONimDXEvwC6ODcR12Nqti%2FMpr0A%2F7FMzRNyFiKlP9pVMO19G2bG2Yr6T5qk9IOshR76YnMjK%2FCG9UXhVyB3Nr34%2BVTHCE1LPUzP29PKUPvQj5sPz02Pmt7Betx0h5%2FL0NoxRSwBaGp5Nh2Fnjswq5VS1uOO9MqqeT76YLqgIfAhoYF%2Flp7JH0%2BeyL5bDArAllw7ruZnM0R%2FE1elHpXGhquWx95%2BfFUpHgso7ol2eVAo0tjPW2EjqHvpYKSGDtuJv7peVHF6m5R%2FJnABxwsc4qCmJipBA6EvdVATRzlqH8%2FfMHQgq3E9R4Oydmunt2KlJRwqTtveyp37W3JhiI%2BiW7%2FZZ%2BDuf6AHO74XEE26RjxqfPOBmM40Nl8J6YFWoA14qEpP%2FLMKnowhpS1l3%2BmhdN3jkV3ckSLKuGZNwYt77Z8nOluZ%2BetxHXBCWxwldQAyjTm1YrbigiXw0awe7FU%2B5%2BNLQ7ywATSIKrtg8pR6GJXZg5ik%2F1ZMpVhEdm0MtBceeJoVfIDzv05%2FvQFTbw%2FLVBEidrfKU8IghMLymlcIGOqUB13t9qZunhDjnV4jlhHsHpBPvOQ3Mw4tnVp0YU2qRLF5fCmloGKIYnkHwMOituTc2aNCsBYqtwVzHrauGzg58iywdoylpb2er%2FRzNYXnYmfyQ5cOtqLoeJ6BqEJJQcPKmj1E8LHgPB8LwqWInt9WKbczS96710eppYtIScSo5jeyH5m%2BFEsVfGPcWyiVIw4lwoz63E%2FWovOUZnoOcZCU7NLJqpHwQ&X-Amz-Signature=c05769ed101657993d524909e6c4a56f955b4d23380f6bb888f00deb630d74b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRQLQF3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvL7bonf2z%2BM%2FJFa4mye9evksXApgzC8SGz80UWdfLFgIgVYEB31v9CpxNgCGFQ3UlN%2FKbE7HsUr4mF7jTtpJLxLsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FS5vjTQANgIYbXUyrcA2Topjhl%2BUpkBcVnZlL8feVy9oVh6K6wo3SqubyFbzGX9DSGiduDgsNHZdd9AYGotHpq7zFlUMbDk%2BgwE3XMB7%2FTVat5ONimDXEvwC6ODcR12Nqti%2FMpr0A%2F7FMzRNyFiKlP9pVMO19G2bG2Yr6T5qk9IOshR76YnMjK%2FCG9UXhVyB3Nr34%2BVTHCE1LPUzP29PKUPvQj5sPz02Pmt7Betx0h5%2FL0NoxRSwBaGp5Nh2Fnjswq5VS1uOO9MqqeT76YLqgIfAhoYF%2Flp7JH0%2BeyL5bDArAllw7ruZnM0R%2FE1elHpXGhquWx95%2BfFUpHgso7ol2eVAo0tjPW2EjqHvpYKSGDtuJv7peVHF6m5R%2FJnABxwsc4qCmJipBA6EvdVATRzlqH8%2FfMHQgq3E9R4Oydmunt2KlJRwqTtveyp37W3JhiI%2BiW7%2FZZ%2BDuf6AHO74XEE26RjxqfPOBmM40Nl8J6YFWoA14qEpP%2FLMKnowhpS1l3%2BmhdN3jkV3ckSLKuGZNwYt77Z8nOluZ%2BetxHXBCWxwldQAyjTm1YrbigiXw0awe7FU%2B5%2BNLQ7ywATSIKrtg8pR6GJXZg5ik%2F1ZMpVhEdm0MtBceeJoVfIDzv05%2FvQFTbw%2FLVBEidrfKU8IghMLymlcIGOqUB13t9qZunhDjnV4jlhHsHpBPvOQ3Mw4tnVp0YU2qRLF5fCmloGKIYnkHwMOituTc2aNCsBYqtwVzHrauGzg58iywdoylpb2er%2FRzNYXnYmfyQ5cOtqLoeJ6BqEJJQcPKmj1E8LHgPB8LwqWInt9WKbczS96710eppYtIScSo5jeyH5m%2BFEsVfGPcWyiVIw4lwoz63E%2FWovOUZnoOcZCU7NLJqpHwQ&X-Amz-Signature=d4a988975a86e15dbe1c24d4978baaba1b1e20a15bda7df4c6f6f3c181183786&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRQLQF3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvL7bonf2z%2BM%2FJFa4mye9evksXApgzC8SGz80UWdfLFgIgVYEB31v9CpxNgCGFQ3UlN%2FKbE7HsUr4mF7jTtpJLxLsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FS5vjTQANgIYbXUyrcA2Topjhl%2BUpkBcVnZlL8feVy9oVh6K6wo3SqubyFbzGX9DSGiduDgsNHZdd9AYGotHpq7zFlUMbDk%2BgwE3XMB7%2FTVat5ONimDXEvwC6ODcR12Nqti%2FMpr0A%2F7FMzRNyFiKlP9pVMO19G2bG2Yr6T5qk9IOshR76YnMjK%2FCG9UXhVyB3Nr34%2BVTHCE1LPUzP29PKUPvQj5sPz02Pmt7Betx0h5%2FL0NoxRSwBaGp5Nh2Fnjswq5VS1uOO9MqqeT76YLqgIfAhoYF%2Flp7JH0%2BeyL5bDArAllw7ruZnM0R%2FE1elHpXGhquWx95%2BfFUpHgso7ol2eVAo0tjPW2EjqHvpYKSGDtuJv7peVHF6m5R%2FJnABxwsc4qCmJipBA6EvdVATRzlqH8%2FfMHQgq3E9R4Oydmunt2KlJRwqTtveyp37W3JhiI%2BiW7%2FZZ%2BDuf6AHO74XEE26RjxqfPOBmM40Nl8J6YFWoA14qEpP%2FLMKnowhpS1l3%2BmhdN3jkV3ckSLKuGZNwYt77Z8nOluZ%2BetxHXBCWxwldQAyjTm1YrbigiXw0awe7FU%2B5%2BNLQ7ywATSIKrtg8pR6GJXZg5ik%2F1ZMpVhEdm0MtBceeJoVfIDzv05%2FvQFTbw%2FLVBEidrfKU8IghMLymlcIGOqUB13t9qZunhDjnV4jlhHsHpBPvOQ3Mw4tnVp0YU2qRLF5fCmloGKIYnkHwMOituTc2aNCsBYqtwVzHrauGzg58iywdoylpb2er%2FRzNYXnYmfyQ5cOtqLoeJ6BqEJJQcPKmj1E8LHgPB8LwqWInt9WKbczS96710eppYtIScSo5jeyH5m%2BFEsVfGPcWyiVIw4lwoz63E%2FWovOUZnoOcZCU7NLJqpHwQ&X-Amz-Signature=f7429484c70e43d7093af01820cf3ff0c180438da86cb5c15bb5f6f1bbba6be9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRQLQF3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvL7bonf2z%2BM%2FJFa4mye9evksXApgzC8SGz80UWdfLFgIgVYEB31v9CpxNgCGFQ3UlN%2FKbE7HsUr4mF7jTtpJLxLsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FS5vjTQANgIYbXUyrcA2Topjhl%2BUpkBcVnZlL8feVy9oVh6K6wo3SqubyFbzGX9DSGiduDgsNHZdd9AYGotHpq7zFlUMbDk%2BgwE3XMB7%2FTVat5ONimDXEvwC6ODcR12Nqti%2FMpr0A%2F7FMzRNyFiKlP9pVMO19G2bG2Yr6T5qk9IOshR76YnMjK%2FCG9UXhVyB3Nr34%2BVTHCE1LPUzP29PKUPvQj5sPz02Pmt7Betx0h5%2FL0NoxRSwBaGp5Nh2Fnjswq5VS1uOO9MqqeT76YLqgIfAhoYF%2Flp7JH0%2BeyL5bDArAllw7ruZnM0R%2FE1elHpXGhquWx95%2BfFUpHgso7ol2eVAo0tjPW2EjqHvpYKSGDtuJv7peVHF6m5R%2FJnABxwsc4qCmJipBA6EvdVATRzlqH8%2FfMHQgq3E9R4Oydmunt2KlJRwqTtveyp37W3JhiI%2BiW7%2FZZ%2BDuf6AHO74XEE26RjxqfPOBmM40Nl8J6YFWoA14qEpP%2FLMKnowhpS1l3%2BmhdN3jkV3ckSLKuGZNwYt77Z8nOluZ%2BetxHXBCWxwldQAyjTm1YrbigiXw0awe7FU%2B5%2BNLQ7ywATSIKrtg8pR6GJXZg5ik%2F1ZMpVhEdm0MtBceeJoVfIDzv05%2FvQFTbw%2FLVBEidrfKU8IghMLymlcIGOqUB13t9qZunhDjnV4jlhHsHpBPvOQ3Mw4tnVp0YU2qRLF5fCmloGKIYnkHwMOituTc2aNCsBYqtwVzHrauGzg58iywdoylpb2er%2FRzNYXnYmfyQ5cOtqLoeJ6BqEJJQcPKmj1E8LHgPB8LwqWInt9WKbczS96710eppYtIScSo5jeyH5m%2BFEsVfGPcWyiVIw4lwoz63E%2FWovOUZnoOcZCU7NLJqpHwQ&X-Amz-Signature=4d826383d9ec13549cf5043dbd0c9fcf6b3bddcce2ef7d9bba0556147db5e0da&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRQLQF3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvL7bonf2z%2BM%2FJFa4mye9evksXApgzC8SGz80UWdfLFgIgVYEB31v9CpxNgCGFQ3UlN%2FKbE7HsUr4mF7jTtpJLxLsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FS5vjTQANgIYbXUyrcA2Topjhl%2BUpkBcVnZlL8feVy9oVh6K6wo3SqubyFbzGX9DSGiduDgsNHZdd9AYGotHpq7zFlUMbDk%2BgwE3XMB7%2FTVat5ONimDXEvwC6ODcR12Nqti%2FMpr0A%2F7FMzRNyFiKlP9pVMO19G2bG2Yr6T5qk9IOshR76YnMjK%2FCG9UXhVyB3Nr34%2BVTHCE1LPUzP29PKUPvQj5sPz02Pmt7Betx0h5%2FL0NoxRSwBaGp5Nh2Fnjswq5VS1uOO9MqqeT76YLqgIfAhoYF%2Flp7JH0%2BeyL5bDArAllw7ruZnM0R%2FE1elHpXGhquWx95%2BfFUpHgso7ol2eVAo0tjPW2EjqHvpYKSGDtuJv7peVHF6m5R%2FJnABxwsc4qCmJipBA6EvdVATRzlqH8%2FfMHQgq3E9R4Oydmunt2KlJRwqTtveyp37W3JhiI%2BiW7%2FZZ%2BDuf6AHO74XEE26RjxqfPOBmM40Nl8J6YFWoA14qEpP%2FLMKnowhpS1l3%2BmhdN3jkV3ckSLKuGZNwYt77Z8nOluZ%2BetxHXBCWxwldQAyjTm1YrbigiXw0awe7FU%2B5%2BNLQ7ywATSIKrtg8pR6GJXZg5ik%2F1ZMpVhEdm0MtBceeJoVfIDzv05%2FvQFTbw%2FLVBEidrfKU8IghMLymlcIGOqUB13t9qZunhDjnV4jlhHsHpBPvOQ3Mw4tnVp0YU2qRLF5fCmloGKIYnkHwMOituTc2aNCsBYqtwVzHrauGzg58iywdoylpb2er%2FRzNYXnYmfyQ5cOtqLoeJ6BqEJJQcPKmj1E8LHgPB8LwqWInt9WKbczS96710eppYtIScSo5jeyH5m%2BFEsVfGPcWyiVIw4lwoz63E%2FWovOUZnoOcZCU7NLJqpHwQ&X-Amz-Signature=cc0a821bb7afb759c1d47c3fc305f41d534d30844752852fb5f5457c80a3999f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRQLQF3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvL7bonf2z%2BM%2FJFa4mye9evksXApgzC8SGz80UWdfLFgIgVYEB31v9CpxNgCGFQ3UlN%2FKbE7HsUr4mF7jTtpJLxLsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FS5vjTQANgIYbXUyrcA2Topjhl%2BUpkBcVnZlL8feVy9oVh6K6wo3SqubyFbzGX9DSGiduDgsNHZdd9AYGotHpq7zFlUMbDk%2BgwE3XMB7%2FTVat5ONimDXEvwC6ODcR12Nqti%2FMpr0A%2F7FMzRNyFiKlP9pVMO19G2bG2Yr6T5qk9IOshR76YnMjK%2FCG9UXhVyB3Nr34%2BVTHCE1LPUzP29PKUPvQj5sPz02Pmt7Betx0h5%2FL0NoxRSwBaGp5Nh2Fnjswq5VS1uOO9MqqeT76YLqgIfAhoYF%2Flp7JH0%2BeyL5bDArAllw7ruZnM0R%2FE1elHpXGhquWx95%2BfFUpHgso7ol2eVAo0tjPW2EjqHvpYKSGDtuJv7peVHF6m5R%2FJnABxwsc4qCmJipBA6EvdVATRzlqH8%2FfMHQgq3E9R4Oydmunt2KlJRwqTtveyp37W3JhiI%2BiW7%2FZZ%2BDuf6AHO74XEE26RjxqfPOBmM40Nl8J6YFWoA14qEpP%2FLMKnowhpS1l3%2BmhdN3jkV3ckSLKuGZNwYt77Z8nOluZ%2BetxHXBCWxwldQAyjTm1YrbigiXw0awe7FU%2B5%2BNLQ7ywATSIKrtg8pR6GJXZg5ik%2F1ZMpVhEdm0MtBceeJoVfIDzv05%2FvQFTbw%2FLVBEidrfKU8IghMLymlcIGOqUB13t9qZunhDjnV4jlhHsHpBPvOQ3Mw4tnVp0YU2qRLF5fCmloGKIYnkHwMOituTc2aNCsBYqtwVzHrauGzg58iywdoylpb2er%2FRzNYXnYmfyQ5cOtqLoeJ6BqEJJQcPKmj1E8LHgPB8LwqWInt9WKbczS96710eppYtIScSo5jeyH5m%2BFEsVfGPcWyiVIw4lwoz63E%2FWovOUZnoOcZCU7NLJqpHwQ&X-Amz-Signature=6e18c2ec27c46a9db623ed539a77bf468d1f009607a0081106a32786593f556a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

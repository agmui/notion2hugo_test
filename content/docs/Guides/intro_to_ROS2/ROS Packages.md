---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSVSQ6X%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQM%2B%2BSE%2F9YLqcc8cr%2FZ0gsYENhZJptSwSqugEND2fmwAiBq5C%2Bc9EYQdwVdFqWg8vhQedf4l9pT0%2FvhVwRKtejJuyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqJ7cB8tJiZ8xHUeFKtwDjidtkvg8pGb9f0WvFueHE%2FxeNdPfWDqbR1jo1EZYlqdu4wjaEPUDEQWGQ63Fhpw%2BdnEUtB%2B4KW8G5eYxxF6u3h%2Bgv4D8H1jbWvO8wV54UBQcxvZnJYpmRRO8i%2FinhV923VwpdOAXWU2IjfTtKLj0XXMoxco9iqTwFqQbdHTWrMmnOd1GgcPWnXoKPF916eNe2LGE7Hb%2B9j6vypyj5SfjdTJoTvMispGmshIOa5znBNnGW0wNGx%2F%2FytLAGa%2FEmZRa02SkLoMAjmxopVTrkr9SZQs2vL3dZ1TwUkYA2UBuRarQy%2F1hihAmMdlZm40sKrnABKb%2F1HSpZISCHPC%2FRv5VQyo1kmfoJJzlUQ6zvG0KT9wDAkzdd%2FvIPq1LwPTUG25SIzogegwTMtbGGuLIkxuH6tNjGPVUinNILRIlGgRb0TFSubJ5WUwZ7Y9WftaIUVhdaa%2Fg8GTY9zNYKwoedBGHVXP1U41grLvUBrxjXBtqQQqyz58BVo5QbA4iJJ0HNbMc1zDp8CixkC0VdRrBqHrBGIkdQ%2FZuwt8n33aOtP3Y2zuUeHXcviC9XExuta8T93Lh6wUlxvt%2BbdmwnEZ7d2xTrY8p%2BTz7BZyevYNGAEEMODLD0zBpLOoI4l0M6uYwmZjvyAY6pgE7yYRlzhhmvTuJyf0ytyFXrFpeUySdS1j4UeVWI3NqEdXWGMKCV1oGQ0xXtGmbNNYIdI2nzYfa0W%2FBaZeBXDbnsZK%2BXWc%2FDKXFkPpbxGXAqZQls2p3%2Bk8G3U52C0NeiwAQ6Wx%2BZYQnhcXHyoSgCJ%2BWoELXM%2BBcNeHrVda1uBYoPr3o5ELNYqsqomeY3tPipAzKeTEWpI%2Fgm7hSjjk1y08jQAfBf50l&X-Amz-Signature=85f4d0ad09f0925b6edaa9d4f807dfd9ef5eed928c1119ed93cc056f00a324dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSVSQ6X%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQM%2B%2BSE%2F9YLqcc8cr%2FZ0gsYENhZJptSwSqugEND2fmwAiBq5C%2Bc9EYQdwVdFqWg8vhQedf4l9pT0%2FvhVwRKtejJuyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqJ7cB8tJiZ8xHUeFKtwDjidtkvg8pGb9f0WvFueHE%2FxeNdPfWDqbR1jo1EZYlqdu4wjaEPUDEQWGQ63Fhpw%2BdnEUtB%2B4KW8G5eYxxF6u3h%2Bgv4D8H1jbWvO8wV54UBQcxvZnJYpmRRO8i%2FinhV923VwpdOAXWU2IjfTtKLj0XXMoxco9iqTwFqQbdHTWrMmnOd1GgcPWnXoKPF916eNe2LGE7Hb%2B9j6vypyj5SfjdTJoTvMispGmshIOa5znBNnGW0wNGx%2F%2FytLAGa%2FEmZRa02SkLoMAjmxopVTrkr9SZQs2vL3dZ1TwUkYA2UBuRarQy%2F1hihAmMdlZm40sKrnABKb%2F1HSpZISCHPC%2FRv5VQyo1kmfoJJzlUQ6zvG0KT9wDAkzdd%2FvIPq1LwPTUG25SIzogegwTMtbGGuLIkxuH6tNjGPVUinNILRIlGgRb0TFSubJ5WUwZ7Y9WftaIUVhdaa%2Fg8GTY9zNYKwoedBGHVXP1U41grLvUBrxjXBtqQQqyz58BVo5QbA4iJJ0HNbMc1zDp8CixkC0VdRrBqHrBGIkdQ%2FZuwt8n33aOtP3Y2zuUeHXcviC9XExuta8T93Lh6wUlxvt%2BbdmwnEZ7d2xTrY8p%2BTz7BZyevYNGAEEMODLD0zBpLOoI4l0M6uYwmZjvyAY6pgE7yYRlzhhmvTuJyf0ytyFXrFpeUySdS1j4UeVWI3NqEdXWGMKCV1oGQ0xXtGmbNNYIdI2nzYfa0W%2FBaZeBXDbnsZK%2BXWc%2FDKXFkPpbxGXAqZQls2p3%2Bk8G3U52C0NeiwAQ6Wx%2BZYQnhcXHyoSgCJ%2BWoELXM%2BBcNeHrVda1uBYoPr3o5ELNYqsqomeY3tPipAzKeTEWpI%2Fgm7hSjjk1y08jQAfBf50l&X-Amz-Signature=f6ec26c7133947adad87980ae1d2d14e90877f59bd900e837bd3cb3f23af9b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSVSQ6X%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQM%2B%2BSE%2F9YLqcc8cr%2FZ0gsYENhZJptSwSqugEND2fmwAiBq5C%2Bc9EYQdwVdFqWg8vhQedf4l9pT0%2FvhVwRKtejJuyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqJ7cB8tJiZ8xHUeFKtwDjidtkvg8pGb9f0WvFueHE%2FxeNdPfWDqbR1jo1EZYlqdu4wjaEPUDEQWGQ63Fhpw%2BdnEUtB%2B4KW8G5eYxxF6u3h%2Bgv4D8H1jbWvO8wV54UBQcxvZnJYpmRRO8i%2FinhV923VwpdOAXWU2IjfTtKLj0XXMoxco9iqTwFqQbdHTWrMmnOd1GgcPWnXoKPF916eNe2LGE7Hb%2B9j6vypyj5SfjdTJoTvMispGmshIOa5znBNnGW0wNGx%2F%2FytLAGa%2FEmZRa02SkLoMAjmxopVTrkr9SZQs2vL3dZ1TwUkYA2UBuRarQy%2F1hihAmMdlZm40sKrnABKb%2F1HSpZISCHPC%2FRv5VQyo1kmfoJJzlUQ6zvG0KT9wDAkzdd%2FvIPq1LwPTUG25SIzogegwTMtbGGuLIkxuH6tNjGPVUinNILRIlGgRb0TFSubJ5WUwZ7Y9WftaIUVhdaa%2Fg8GTY9zNYKwoedBGHVXP1U41grLvUBrxjXBtqQQqyz58BVo5QbA4iJJ0HNbMc1zDp8CixkC0VdRrBqHrBGIkdQ%2FZuwt8n33aOtP3Y2zuUeHXcviC9XExuta8T93Lh6wUlxvt%2BbdmwnEZ7d2xTrY8p%2BTz7BZyevYNGAEEMODLD0zBpLOoI4l0M6uYwmZjvyAY6pgE7yYRlzhhmvTuJyf0ytyFXrFpeUySdS1j4UeVWI3NqEdXWGMKCV1oGQ0xXtGmbNNYIdI2nzYfa0W%2FBaZeBXDbnsZK%2BXWc%2FDKXFkPpbxGXAqZQls2p3%2Bk8G3U52C0NeiwAQ6Wx%2BZYQnhcXHyoSgCJ%2BWoELXM%2BBcNeHrVda1uBYoPr3o5ELNYqsqomeY3tPipAzKeTEWpI%2Fgm7hSjjk1y08jQAfBf50l&X-Amz-Signature=73948d53f15ded60ed4cb17c06837e4908709b560d089675c003b7fcb45c8eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSVSQ6X%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQM%2B%2BSE%2F9YLqcc8cr%2FZ0gsYENhZJptSwSqugEND2fmwAiBq5C%2Bc9EYQdwVdFqWg8vhQedf4l9pT0%2FvhVwRKtejJuyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqJ7cB8tJiZ8xHUeFKtwDjidtkvg8pGb9f0WvFueHE%2FxeNdPfWDqbR1jo1EZYlqdu4wjaEPUDEQWGQ63Fhpw%2BdnEUtB%2B4KW8G5eYxxF6u3h%2Bgv4D8H1jbWvO8wV54UBQcxvZnJYpmRRO8i%2FinhV923VwpdOAXWU2IjfTtKLj0XXMoxco9iqTwFqQbdHTWrMmnOd1GgcPWnXoKPF916eNe2LGE7Hb%2B9j6vypyj5SfjdTJoTvMispGmshIOa5znBNnGW0wNGx%2F%2FytLAGa%2FEmZRa02SkLoMAjmxopVTrkr9SZQs2vL3dZ1TwUkYA2UBuRarQy%2F1hihAmMdlZm40sKrnABKb%2F1HSpZISCHPC%2FRv5VQyo1kmfoJJzlUQ6zvG0KT9wDAkzdd%2FvIPq1LwPTUG25SIzogegwTMtbGGuLIkxuH6tNjGPVUinNILRIlGgRb0TFSubJ5WUwZ7Y9WftaIUVhdaa%2Fg8GTY9zNYKwoedBGHVXP1U41grLvUBrxjXBtqQQqyz58BVo5QbA4iJJ0HNbMc1zDp8CixkC0VdRrBqHrBGIkdQ%2FZuwt8n33aOtP3Y2zuUeHXcviC9XExuta8T93Lh6wUlxvt%2BbdmwnEZ7d2xTrY8p%2BTz7BZyevYNGAEEMODLD0zBpLOoI4l0M6uYwmZjvyAY6pgE7yYRlzhhmvTuJyf0ytyFXrFpeUySdS1j4UeVWI3NqEdXWGMKCV1oGQ0xXtGmbNNYIdI2nzYfa0W%2FBaZeBXDbnsZK%2BXWc%2FDKXFkPpbxGXAqZQls2p3%2Bk8G3U52C0NeiwAQ6Wx%2BZYQnhcXHyoSgCJ%2BWoELXM%2BBcNeHrVda1uBYoPr3o5ELNYqsqomeY3tPipAzKeTEWpI%2Fgm7hSjjk1y08jQAfBf50l&X-Amz-Signature=66531cb2d04df0feb590f7804d42daaecb79d79f8efb65b1bc8e8bf8659259d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSVSQ6X%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQM%2B%2BSE%2F9YLqcc8cr%2FZ0gsYENhZJptSwSqugEND2fmwAiBq5C%2Bc9EYQdwVdFqWg8vhQedf4l9pT0%2FvhVwRKtejJuyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqJ7cB8tJiZ8xHUeFKtwDjidtkvg8pGb9f0WvFueHE%2FxeNdPfWDqbR1jo1EZYlqdu4wjaEPUDEQWGQ63Fhpw%2BdnEUtB%2B4KW8G5eYxxF6u3h%2Bgv4D8H1jbWvO8wV54UBQcxvZnJYpmRRO8i%2FinhV923VwpdOAXWU2IjfTtKLj0XXMoxco9iqTwFqQbdHTWrMmnOd1GgcPWnXoKPF916eNe2LGE7Hb%2B9j6vypyj5SfjdTJoTvMispGmshIOa5znBNnGW0wNGx%2F%2FytLAGa%2FEmZRa02SkLoMAjmxopVTrkr9SZQs2vL3dZ1TwUkYA2UBuRarQy%2F1hihAmMdlZm40sKrnABKb%2F1HSpZISCHPC%2FRv5VQyo1kmfoJJzlUQ6zvG0KT9wDAkzdd%2FvIPq1LwPTUG25SIzogegwTMtbGGuLIkxuH6tNjGPVUinNILRIlGgRb0TFSubJ5WUwZ7Y9WftaIUVhdaa%2Fg8GTY9zNYKwoedBGHVXP1U41grLvUBrxjXBtqQQqyz58BVo5QbA4iJJ0HNbMc1zDp8CixkC0VdRrBqHrBGIkdQ%2FZuwt8n33aOtP3Y2zuUeHXcviC9XExuta8T93Lh6wUlxvt%2BbdmwnEZ7d2xTrY8p%2BTz7BZyevYNGAEEMODLD0zBpLOoI4l0M6uYwmZjvyAY6pgE7yYRlzhhmvTuJyf0ytyFXrFpeUySdS1j4UeVWI3NqEdXWGMKCV1oGQ0xXtGmbNNYIdI2nzYfa0W%2FBaZeBXDbnsZK%2BXWc%2FDKXFkPpbxGXAqZQls2p3%2Bk8G3U52C0NeiwAQ6Wx%2BZYQnhcXHyoSgCJ%2BWoELXM%2BBcNeHrVda1uBYoPr3o5ELNYqsqomeY3tPipAzKeTEWpI%2Fgm7hSjjk1y08jQAfBf50l&X-Amz-Signature=d2d955158b14ffd023149b3f38aa19f04c1d365d17ba95641015e0737f3ee001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSVSQ6X%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQM%2B%2BSE%2F9YLqcc8cr%2FZ0gsYENhZJptSwSqugEND2fmwAiBq5C%2Bc9EYQdwVdFqWg8vhQedf4l9pT0%2FvhVwRKtejJuyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqJ7cB8tJiZ8xHUeFKtwDjidtkvg8pGb9f0WvFueHE%2FxeNdPfWDqbR1jo1EZYlqdu4wjaEPUDEQWGQ63Fhpw%2BdnEUtB%2B4KW8G5eYxxF6u3h%2Bgv4D8H1jbWvO8wV54UBQcxvZnJYpmRRO8i%2FinhV923VwpdOAXWU2IjfTtKLj0XXMoxco9iqTwFqQbdHTWrMmnOd1GgcPWnXoKPF916eNe2LGE7Hb%2B9j6vypyj5SfjdTJoTvMispGmshIOa5znBNnGW0wNGx%2F%2FytLAGa%2FEmZRa02SkLoMAjmxopVTrkr9SZQs2vL3dZ1TwUkYA2UBuRarQy%2F1hihAmMdlZm40sKrnABKb%2F1HSpZISCHPC%2FRv5VQyo1kmfoJJzlUQ6zvG0KT9wDAkzdd%2FvIPq1LwPTUG25SIzogegwTMtbGGuLIkxuH6tNjGPVUinNILRIlGgRb0TFSubJ5WUwZ7Y9WftaIUVhdaa%2Fg8GTY9zNYKwoedBGHVXP1U41grLvUBrxjXBtqQQqyz58BVo5QbA4iJJ0HNbMc1zDp8CixkC0VdRrBqHrBGIkdQ%2FZuwt8n33aOtP3Y2zuUeHXcviC9XExuta8T93Lh6wUlxvt%2BbdmwnEZ7d2xTrY8p%2BTz7BZyevYNGAEEMODLD0zBpLOoI4l0M6uYwmZjvyAY6pgE7yYRlzhhmvTuJyf0ytyFXrFpeUySdS1j4UeVWI3NqEdXWGMKCV1oGQ0xXtGmbNNYIdI2nzYfa0W%2FBaZeBXDbnsZK%2BXWc%2FDKXFkPpbxGXAqZQls2p3%2Bk8G3U52C0NeiwAQ6Wx%2BZYQnhcXHyoSgCJ%2BWoELXM%2BBcNeHrVda1uBYoPr3o5ELNYqsqomeY3tPipAzKeTEWpI%2Fgm7hSjjk1y08jQAfBf50l&X-Amz-Signature=29c4a8bbaca273d32d988e7a44b029d830347708b355d7ab76c4b44221bad5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSVSQ6X%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQM%2B%2BSE%2F9YLqcc8cr%2FZ0gsYENhZJptSwSqugEND2fmwAiBq5C%2Bc9EYQdwVdFqWg8vhQedf4l9pT0%2FvhVwRKtejJuyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqJ7cB8tJiZ8xHUeFKtwDjidtkvg8pGb9f0WvFueHE%2FxeNdPfWDqbR1jo1EZYlqdu4wjaEPUDEQWGQ63Fhpw%2BdnEUtB%2B4KW8G5eYxxF6u3h%2Bgv4D8H1jbWvO8wV54UBQcxvZnJYpmRRO8i%2FinhV923VwpdOAXWU2IjfTtKLj0XXMoxco9iqTwFqQbdHTWrMmnOd1GgcPWnXoKPF916eNe2LGE7Hb%2B9j6vypyj5SfjdTJoTvMispGmshIOa5znBNnGW0wNGx%2F%2FytLAGa%2FEmZRa02SkLoMAjmxopVTrkr9SZQs2vL3dZ1TwUkYA2UBuRarQy%2F1hihAmMdlZm40sKrnABKb%2F1HSpZISCHPC%2FRv5VQyo1kmfoJJzlUQ6zvG0KT9wDAkzdd%2FvIPq1LwPTUG25SIzogegwTMtbGGuLIkxuH6tNjGPVUinNILRIlGgRb0TFSubJ5WUwZ7Y9WftaIUVhdaa%2Fg8GTY9zNYKwoedBGHVXP1U41grLvUBrxjXBtqQQqyz58BVo5QbA4iJJ0HNbMc1zDp8CixkC0VdRrBqHrBGIkdQ%2FZuwt8n33aOtP3Y2zuUeHXcviC9XExuta8T93Lh6wUlxvt%2BbdmwnEZ7d2xTrY8p%2BTz7BZyevYNGAEEMODLD0zBpLOoI4l0M6uYwmZjvyAY6pgE7yYRlzhhmvTuJyf0ytyFXrFpeUySdS1j4UeVWI3NqEdXWGMKCV1oGQ0xXtGmbNNYIdI2nzYfa0W%2FBaZeBXDbnsZK%2BXWc%2FDKXFkPpbxGXAqZQls2p3%2Bk8G3U52C0NeiwAQ6Wx%2BZYQnhcXHyoSgCJ%2BWoELXM%2BBcNeHrVda1uBYoPr3o5ELNYqsqomeY3tPipAzKeTEWpI%2Fgm7hSjjk1y08jQAfBf50l&X-Amz-Signature=df2ecc6e14ebf89464c3fcd7e7e03aab26d5a965fa2c5a83a157b0b2077aa7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

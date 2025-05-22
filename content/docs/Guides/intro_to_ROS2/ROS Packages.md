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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEUG6RU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcoGPYvwgUXXUM%2F1d2p1PXqrBJkbnG%2Fk7jSqK1OW7yxQIhAKrka%2Fa4DS8XmDL5TVh%2F%2BNzJO5ttkNr6Sx4xc6wyl8hKKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJbH%2BXcXyDaQgCmpAq3AP06SR89Kv9mecGEzBAbSq8D40QyItOvFsijvYM1OSe%2BtP%2Fn2xlucGuxGxlRFoHfjpQ01djSQanY14EZjwZNtxaMPCgRKSlWB%2BZqyGWvEUeV89ybmRmmvie6ZmcYwXAYFJNZEp7qIcSKsYFQfFXlppTIl6%2BSnkoIJkXKkfW99Aoms%2Bv2AZIL7G7uSU5xMNmm39JYGgVmZwfWUlPHj0JkIx8QghTiej8X8%2Fy%2Fq1ONBwGSbKmalTNmIN6JaLTajSpdM0TUupyRWpqgd6AiCazfLpfh2UgC2sET8ZJ52TqDqDriCs3P7LfkRKaNFAnPQQDIgYgowI6Zbmb4j6j3M0i%2FyScU9XgqpFu4ykxfUO7N%2BgpDABbpIGydtyKHuzszHtbpT7EodHT%2FfKT%2BTFzKJ6A3yI30wwOJ6qPAUqR5YJOj4g1CRipiHtpf9ZZuxSkvRIekcMbvAtfLDgo2zArImQFWPUO2BMrphYHdxIibJPk8zHBZmRYEmb8%2BslbR6bgDnNF5STzdaDW8yD7ies05ZKjNUy%2BZAqstjC0GPjmTOo2NNvVwb7STJGjuOzMNCPNUOMPIrhFgm3X7%2FOFwm2g9n4eHeTtjiaAAe7aIenVsazCQ0Lg34JPNk7VvVUF3ydAyTCXib3BBjqkAWub%2BYF%2ByYd4djTlspBzDKB4aTR%2BaATs8cPoEchgG3dCArdnXBCWTaqGDfqpX99YvvzlyYySkUkGo3z0me8Y5b9AbvofMv%2F0sFXg%2Brwq0xHClyqy281kYNmBOhDydy6A%2B%2BjTi%2F7MxqpGe7tdN3Prgf1ZV9APkHado7oBEUwGs7rJ7U%2FZBz%2FJ1bDm4juQ069C1OsocYa34uFXM%2FrJGQkffncjNJeJ&X-Amz-Signature=cb8e9e01ab75107be1aadcdebe15f38315f51a45787c148a2a7584ef8cbc3d13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEUG6RU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcoGPYvwgUXXUM%2F1d2p1PXqrBJkbnG%2Fk7jSqK1OW7yxQIhAKrka%2Fa4DS8XmDL5TVh%2F%2BNzJO5ttkNr6Sx4xc6wyl8hKKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJbH%2BXcXyDaQgCmpAq3AP06SR89Kv9mecGEzBAbSq8D40QyItOvFsijvYM1OSe%2BtP%2Fn2xlucGuxGxlRFoHfjpQ01djSQanY14EZjwZNtxaMPCgRKSlWB%2BZqyGWvEUeV89ybmRmmvie6ZmcYwXAYFJNZEp7qIcSKsYFQfFXlppTIl6%2BSnkoIJkXKkfW99Aoms%2Bv2AZIL7G7uSU5xMNmm39JYGgVmZwfWUlPHj0JkIx8QghTiej8X8%2Fy%2Fq1ONBwGSbKmalTNmIN6JaLTajSpdM0TUupyRWpqgd6AiCazfLpfh2UgC2sET8ZJ52TqDqDriCs3P7LfkRKaNFAnPQQDIgYgowI6Zbmb4j6j3M0i%2FyScU9XgqpFu4ykxfUO7N%2BgpDABbpIGydtyKHuzszHtbpT7EodHT%2FfKT%2BTFzKJ6A3yI30wwOJ6qPAUqR5YJOj4g1CRipiHtpf9ZZuxSkvRIekcMbvAtfLDgo2zArImQFWPUO2BMrphYHdxIibJPk8zHBZmRYEmb8%2BslbR6bgDnNF5STzdaDW8yD7ies05ZKjNUy%2BZAqstjC0GPjmTOo2NNvVwb7STJGjuOzMNCPNUOMPIrhFgm3X7%2FOFwm2g9n4eHeTtjiaAAe7aIenVsazCQ0Lg34JPNk7VvVUF3ydAyTCXib3BBjqkAWub%2BYF%2ByYd4djTlspBzDKB4aTR%2BaATs8cPoEchgG3dCArdnXBCWTaqGDfqpX99YvvzlyYySkUkGo3z0me8Y5b9AbvofMv%2F0sFXg%2Brwq0xHClyqy281kYNmBOhDydy6A%2B%2BjTi%2F7MxqpGe7tdN3Prgf1ZV9APkHado7oBEUwGs7rJ7U%2FZBz%2FJ1bDm4juQ069C1OsocYa34uFXM%2FrJGQkffncjNJeJ&X-Amz-Signature=04706d13e6b2ca69cca4ab56c661a621ab4c0da36b1628a86a6a8f8cfe69b0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEUG6RU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcoGPYvwgUXXUM%2F1d2p1PXqrBJkbnG%2Fk7jSqK1OW7yxQIhAKrka%2Fa4DS8XmDL5TVh%2F%2BNzJO5ttkNr6Sx4xc6wyl8hKKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJbH%2BXcXyDaQgCmpAq3AP06SR89Kv9mecGEzBAbSq8D40QyItOvFsijvYM1OSe%2BtP%2Fn2xlucGuxGxlRFoHfjpQ01djSQanY14EZjwZNtxaMPCgRKSlWB%2BZqyGWvEUeV89ybmRmmvie6ZmcYwXAYFJNZEp7qIcSKsYFQfFXlppTIl6%2BSnkoIJkXKkfW99Aoms%2Bv2AZIL7G7uSU5xMNmm39JYGgVmZwfWUlPHj0JkIx8QghTiej8X8%2Fy%2Fq1ONBwGSbKmalTNmIN6JaLTajSpdM0TUupyRWpqgd6AiCazfLpfh2UgC2sET8ZJ52TqDqDriCs3P7LfkRKaNFAnPQQDIgYgowI6Zbmb4j6j3M0i%2FyScU9XgqpFu4ykxfUO7N%2BgpDABbpIGydtyKHuzszHtbpT7EodHT%2FfKT%2BTFzKJ6A3yI30wwOJ6qPAUqR5YJOj4g1CRipiHtpf9ZZuxSkvRIekcMbvAtfLDgo2zArImQFWPUO2BMrphYHdxIibJPk8zHBZmRYEmb8%2BslbR6bgDnNF5STzdaDW8yD7ies05ZKjNUy%2BZAqstjC0GPjmTOo2NNvVwb7STJGjuOzMNCPNUOMPIrhFgm3X7%2FOFwm2g9n4eHeTtjiaAAe7aIenVsazCQ0Lg34JPNk7VvVUF3ydAyTCXib3BBjqkAWub%2BYF%2ByYd4djTlspBzDKB4aTR%2BaATs8cPoEchgG3dCArdnXBCWTaqGDfqpX99YvvzlyYySkUkGo3z0me8Y5b9AbvofMv%2F0sFXg%2Brwq0xHClyqy281kYNmBOhDydy6A%2B%2BjTi%2F7MxqpGe7tdN3Prgf1ZV9APkHado7oBEUwGs7rJ7U%2FZBz%2FJ1bDm4juQ069C1OsocYa34uFXM%2FrJGQkffncjNJeJ&X-Amz-Signature=84ba700b46d1491c19c795429e3f2c8db40728cd40ffcfe85c95eebcb281852c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEUG6RU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcoGPYvwgUXXUM%2F1d2p1PXqrBJkbnG%2Fk7jSqK1OW7yxQIhAKrka%2Fa4DS8XmDL5TVh%2F%2BNzJO5ttkNr6Sx4xc6wyl8hKKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJbH%2BXcXyDaQgCmpAq3AP06SR89Kv9mecGEzBAbSq8D40QyItOvFsijvYM1OSe%2BtP%2Fn2xlucGuxGxlRFoHfjpQ01djSQanY14EZjwZNtxaMPCgRKSlWB%2BZqyGWvEUeV89ybmRmmvie6ZmcYwXAYFJNZEp7qIcSKsYFQfFXlppTIl6%2BSnkoIJkXKkfW99Aoms%2Bv2AZIL7G7uSU5xMNmm39JYGgVmZwfWUlPHj0JkIx8QghTiej8X8%2Fy%2Fq1ONBwGSbKmalTNmIN6JaLTajSpdM0TUupyRWpqgd6AiCazfLpfh2UgC2sET8ZJ52TqDqDriCs3P7LfkRKaNFAnPQQDIgYgowI6Zbmb4j6j3M0i%2FyScU9XgqpFu4ykxfUO7N%2BgpDABbpIGydtyKHuzszHtbpT7EodHT%2FfKT%2BTFzKJ6A3yI30wwOJ6qPAUqR5YJOj4g1CRipiHtpf9ZZuxSkvRIekcMbvAtfLDgo2zArImQFWPUO2BMrphYHdxIibJPk8zHBZmRYEmb8%2BslbR6bgDnNF5STzdaDW8yD7ies05ZKjNUy%2BZAqstjC0GPjmTOo2NNvVwb7STJGjuOzMNCPNUOMPIrhFgm3X7%2FOFwm2g9n4eHeTtjiaAAe7aIenVsazCQ0Lg34JPNk7VvVUF3ydAyTCXib3BBjqkAWub%2BYF%2ByYd4djTlspBzDKB4aTR%2BaATs8cPoEchgG3dCArdnXBCWTaqGDfqpX99YvvzlyYySkUkGo3z0me8Y5b9AbvofMv%2F0sFXg%2Brwq0xHClyqy281kYNmBOhDydy6A%2B%2BjTi%2F7MxqpGe7tdN3Prgf1ZV9APkHado7oBEUwGs7rJ7U%2FZBz%2FJ1bDm4juQ069C1OsocYa34uFXM%2FrJGQkffncjNJeJ&X-Amz-Signature=c6ddf9b8ac19f92c5848c0426f922f1af58d9f2db83e23c099597510bd91bc39&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEUG6RU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcoGPYvwgUXXUM%2F1d2p1PXqrBJkbnG%2Fk7jSqK1OW7yxQIhAKrka%2Fa4DS8XmDL5TVh%2F%2BNzJO5ttkNr6Sx4xc6wyl8hKKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJbH%2BXcXyDaQgCmpAq3AP06SR89Kv9mecGEzBAbSq8D40QyItOvFsijvYM1OSe%2BtP%2Fn2xlucGuxGxlRFoHfjpQ01djSQanY14EZjwZNtxaMPCgRKSlWB%2BZqyGWvEUeV89ybmRmmvie6ZmcYwXAYFJNZEp7qIcSKsYFQfFXlppTIl6%2BSnkoIJkXKkfW99Aoms%2Bv2AZIL7G7uSU5xMNmm39JYGgVmZwfWUlPHj0JkIx8QghTiej8X8%2Fy%2Fq1ONBwGSbKmalTNmIN6JaLTajSpdM0TUupyRWpqgd6AiCazfLpfh2UgC2sET8ZJ52TqDqDriCs3P7LfkRKaNFAnPQQDIgYgowI6Zbmb4j6j3M0i%2FyScU9XgqpFu4ykxfUO7N%2BgpDABbpIGydtyKHuzszHtbpT7EodHT%2FfKT%2BTFzKJ6A3yI30wwOJ6qPAUqR5YJOj4g1CRipiHtpf9ZZuxSkvRIekcMbvAtfLDgo2zArImQFWPUO2BMrphYHdxIibJPk8zHBZmRYEmb8%2BslbR6bgDnNF5STzdaDW8yD7ies05ZKjNUy%2BZAqstjC0GPjmTOo2NNvVwb7STJGjuOzMNCPNUOMPIrhFgm3X7%2FOFwm2g9n4eHeTtjiaAAe7aIenVsazCQ0Lg34JPNk7VvVUF3ydAyTCXib3BBjqkAWub%2BYF%2ByYd4djTlspBzDKB4aTR%2BaATs8cPoEchgG3dCArdnXBCWTaqGDfqpX99YvvzlyYySkUkGo3z0me8Y5b9AbvofMv%2F0sFXg%2Brwq0xHClyqy281kYNmBOhDydy6A%2B%2BjTi%2F7MxqpGe7tdN3Prgf1ZV9APkHado7oBEUwGs7rJ7U%2FZBz%2FJ1bDm4juQ069C1OsocYa34uFXM%2FrJGQkffncjNJeJ&X-Amz-Signature=d30ef36a79c760626541ddd0e43fb9ad02ebd5b64e4e20c76b60fc51c34fd356&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEUG6RU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcoGPYvwgUXXUM%2F1d2p1PXqrBJkbnG%2Fk7jSqK1OW7yxQIhAKrka%2Fa4DS8XmDL5TVh%2F%2BNzJO5ttkNr6Sx4xc6wyl8hKKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJbH%2BXcXyDaQgCmpAq3AP06SR89Kv9mecGEzBAbSq8D40QyItOvFsijvYM1OSe%2BtP%2Fn2xlucGuxGxlRFoHfjpQ01djSQanY14EZjwZNtxaMPCgRKSlWB%2BZqyGWvEUeV89ybmRmmvie6ZmcYwXAYFJNZEp7qIcSKsYFQfFXlppTIl6%2BSnkoIJkXKkfW99Aoms%2Bv2AZIL7G7uSU5xMNmm39JYGgVmZwfWUlPHj0JkIx8QghTiej8X8%2Fy%2Fq1ONBwGSbKmalTNmIN6JaLTajSpdM0TUupyRWpqgd6AiCazfLpfh2UgC2sET8ZJ52TqDqDriCs3P7LfkRKaNFAnPQQDIgYgowI6Zbmb4j6j3M0i%2FyScU9XgqpFu4ykxfUO7N%2BgpDABbpIGydtyKHuzszHtbpT7EodHT%2FfKT%2BTFzKJ6A3yI30wwOJ6qPAUqR5YJOj4g1CRipiHtpf9ZZuxSkvRIekcMbvAtfLDgo2zArImQFWPUO2BMrphYHdxIibJPk8zHBZmRYEmb8%2BslbR6bgDnNF5STzdaDW8yD7ies05ZKjNUy%2BZAqstjC0GPjmTOo2NNvVwb7STJGjuOzMNCPNUOMPIrhFgm3X7%2FOFwm2g9n4eHeTtjiaAAe7aIenVsazCQ0Lg34JPNk7VvVUF3ydAyTCXib3BBjqkAWub%2BYF%2ByYd4djTlspBzDKB4aTR%2BaATs8cPoEchgG3dCArdnXBCWTaqGDfqpX99YvvzlyYySkUkGo3z0me8Y5b9AbvofMv%2F0sFXg%2Brwq0xHClyqy281kYNmBOhDydy6A%2B%2BjTi%2F7MxqpGe7tdN3Prgf1ZV9APkHado7oBEUwGs7rJ7U%2FZBz%2FJ1bDm4juQ069C1OsocYa34uFXM%2FrJGQkffncjNJeJ&X-Amz-Signature=3c8191a263adc3281a6499bce34e36585d8390b5a4f149dd1bbb4b12ce9dbfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEUG6RU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcoGPYvwgUXXUM%2F1d2p1PXqrBJkbnG%2Fk7jSqK1OW7yxQIhAKrka%2Fa4DS8XmDL5TVh%2F%2BNzJO5ttkNr6Sx4xc6wyl8hKKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJbH%2BXcXyDaQgCmpAq3AP06SR89Kv9mecGEzBAbSq8D40QyItOvFsijvYM1OSe%2BtP%2Fn2xlucGuxGxlRFoHfjpQ01djSQanY14EZjwZNtxaMPCgRKSlWB%2BZqyGWvEUeV89ybmRmmvie6ZmcYwXAYFJNZEp7qIcSKsYFQfFXlppTIl6%2BSnkoIJkXKkfW99Aoms%2Bv2AZIL7G7uSU5xMNmm39JYGgVmZwfWUlPHj0JkIx8QghTiej8X8%2Fy%2Fq1ONBwGSbKmalTNmIN6JaLTajSpdM0TUupyRWpqgd6AiCazfLpfh2UgC2sET8ZJ52TqDqDriCs3P7LfkRKaNFAnPQQDIgYgowI6Zbmb4j6j3M0i%2FyScU9XgqpFu4ykxfUO7N%2BgpDABbpIGydtyKHuzszHtbpT7EodHT%2FfKT%2BTFzKJ6A3yI30wwOJ6qPAUqR5YJOj4g1CRipiHtpf9ZZuxSkvRIekcMbvAtfLDgo2zArImQFWPUO2BMrphYHdxIibJPk8zHBZmRYEmb8%2BslbR6bgDnNF5STzdaDW8yD7ies05ZKjNUy%2BZAqstjC0GPjmTOo2NNvVwb7STJGjuOzMNCPNUOMPIrhFgm3X7%2FOFwm2g9n4eHeTtjiaAAe7aIenVsazCQ0Lg34JPNk7VvVUF3ydAyTCXib3BBjqkAWub%2BYF%2ByYd4djTlspBzDKB4aTR%2BaATs8cPoEchgG3dCArdnXBCWTaqGDfqpX99YvvzlyYySkUkGo3z0me8Y5b9AbvofMv%2F0sFXg%2Brwq0xHClyqy281kYNmBOhDydy6A%2B%2BjTi%2F7MxqpGe7tdN3Prgf1ZV9APkHado7oBEUwGs7rJ7U%2FZBz%2FJ1bDm4juQ069C1OsocYa34uFXM%2FrJGQkffncjNJeJ&X-Amz-Signature=427e6367fb2cbec4b5f331bb55d01c5a481e9a2f45031b76ef9fd69b06b83664&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

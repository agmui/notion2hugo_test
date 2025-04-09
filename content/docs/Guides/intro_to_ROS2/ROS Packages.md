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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUDVGPP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD7u%2FchEr4Q1ksWIKBPc5veEsu%2BaKbi%2FOlHB9JfX3DChQIgX8mQSAMXet2u%2BzfdFgRaEn9LtvwNfiSxEjRr8E3KT6gqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Bzh4T2oK%2F6zYYhyrcA1QF0hjnPdn80XxIFfyveonM9%2FqSJc9Pny12B9tggKTgX0v3iSJJNYPsKrxrbai3EH0D9ryVaQ0fCaez7HiVXhMzHJ7CmT0ViqX4yVVVf%2BAx19s0y5sYbnUwymLnIJiir5otyzC3osJywI7sufA6v%2FQGE%2Bdf1vvCOYZhbZ41gj7iStxxFoGYc4bF933nssPCoeW9vrR5HzSR2fv88MSNfBlx3xeta1bWBmH8Cp12W2pohW64mBcZ4JzJo4uz8Y3uEyoWiUTjGi8%2Fiu1y6XBqenC6Z18SpPWL39P6eHhUSuaxvy%2FxPUF6NS40fgH1XD0PeZyOW2i3tYRBWM3zZm0ljXAjVVuulpHIwyXa61F1lqhLZnFVaiNM17wqFH1DUsqTrjnF6p5DRfl%2FL%2FRG4ogzL1PkLArFNc6tV392DlDTc2vFEkdy%2B5Irfu6BIDhK7jsCQZeYhP%2B9CWcjh2sCeOOb9%2BtasTMTupeh3%2FXyko0pc2ZsVVQ7H9HzNOpPKCjoxI%2FhuBWLIudqUA2gQjhQXg7WISHj7ShFPIZgaY8GMX6uwLtszCOFtADdG1pMcj0oQJGpgmvcABOr9%2FkSkQkeUjGQ8GR6cHfjENMTQhU%2B2dhpry8WkUtIxWYtGTFc3hY8MNWV278GOqUB%2B3eqZQd09LyUSbYDg5gNRuCGtCxVAhcV5DLRwkd4ScmngqAKa01wOrK%2BaF%2BEuqDAjZ7Bng4kUtK9XvDeL5tvFChpJ44BBBqcZDWN%2BLck7%2F9pldzo%2Fha5QaSJ8gOdnSJS8xQYn3iQBjlpkDW7kQDqmmD8GSyhVt5Ld0BHW1pJmD318yI%2F9%2FNNZ6pNraVTWCPic3VUg2AkzOW8u68aDdjxUqC1jsUy&X-Amz-Signature=1aa35fd17a8ed83fec51164ca313afc013dee67bd8810fcb6d07ad517d7fcfd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUDVGPP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD7u%2FchEr4Q1ksWIKBPc5veEsu%2BaKbi%2FOlHB9JfX3DChQIgX8mQSAMXet2u%2BzfdFgRaEn9LtvwNfiSxEjRr8E3KT6gqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Bzh4T2oK%2F6zYYhyrcA1QF0hjnPdn80XxIFfyveonM9%2FqSJc9Pny12B9tggKTgX0v3iSJJNYPsKrxrbai3EH0D9ryVaQ0fCaez7HiVXhMzHJ7CmT0ViqX4yVVVf%2BAx19s0y5sYbnUwymLnIJiir5otyzC3osJywI7sufA6v%2FQGE%2Bdf1vvCOYZhbZ41gj7iStxxFoGYc4bF933nssPCoeW9vrR5HzSR2fv88MSNfBlx3xeta1bWBmH8Cp12W2pohW64mBcZ4JzJo4uz8Y3uEyoWiUTjGi8%2Fiu1y6XBqenC6Z18SpPWL39P6eHhUSuaxvy%2FxPUF6NS40fgH1XD0PeZyOW2i3tYRBWM3zZm0ljXAjVVuulpHIwyXa61F1lqhLZnFVaiNM17wqFH1DUsqTrjnF6p5DRfl%2FL%2FRG4ogzL1PkLArFNc6tV392DlDTc2vFEkdy%2B5Irfu6BIDhK7jsCQZeYhP%2B9CWcjh2sCeOOb9%2BtasTMTupeh3%2FXyko0pc2ZsVVQ7H9HzNOpPKCjoxI%2FhuBWLIudqUA2gQjhQXg7WISHj7ShFPIZgaY8GMX6uwLtszCOFtADdG1pMcj0oQJGpgmvcABOr9%2FkSkQkeUjGQ8GR6cHfjENMTQhU%2B2dhpry8WkUtIxWYtGTFc3hY8MNWV278GOqUB%2B3eqZQd09LyUSbYDg5gNRuCGtCxVAhcV5DLRwkd4ScmngqAKa01wOrK%2BaF%2BEuqDAjZ7Bng4kUtK9XvDeL5tvFChpJ44BBBqcZDWN%2BLck7%2F9pldzo%2Fha5QaSJ8gOdnSJS8xQYn3iQBjlpkDW7kQDqmmD8GSyhVt5Ld0BHW1pJmD318yI%2F9%2FNNZ6pNraVTWCPic3VUg2AkzOW8u68aDdjxUqC1jsUy&X-Amz-Signature=26b4cf15a9e7681969e2f476a96792a623941d9e17a8fa42c2aa8bde495985bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUDVGPP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD7u%2FchEr4Q1ksWIKBPc5veEsu%2BaKbi%2FOlHB9JfX3DChQIgX8mQSAMXet2u%2BzfdFgRaEn9LtvwNfiSxEjRr8E3KT6gqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Bzh4T2oK%2F6zYYhyrcA1QF0hjnPdn80XxIFfyveonM9%2FqSJc9Pny12B9tggKTgX0v3iSJJNYPsKrxrbai3EH0D9ryVaQ0fCaez7HiVXhMzHJ7CmT0ViqX4yVVVf%2BAx19s0y5sYbnUwymLnIJiir5otyzC3osJywI7sufA6v%2FQGE%2Bdf1vvCOYZhbZ41gj7iStxxFoGYc4bF933nssPCoeW9vrR5HzSR2fv88MSNfBlx3xeta1bWBmH8Cp12W2pohW64mBcZ4JzJo4uz8Y3uEyoWiUTjGi8%2Fiu1y6XBqenC6Z18SpPWL39P6eHhUSuaxvy%2FxPUF6NS40fgH1XD0PeZyOW2i3tYRBWM3zZm0ljXAjVVuulpHIwyXa61F1lqhLZnFVaiNM17wqFH1DUsqTrjnF6p5DRfl%2FL%2FRG4ogzL1PkLArFNc6tV392DlDTc2vFEkdy%2B5Irfu6BIDhK7jsCQZeYhP%2B9CWcjh2sCeOOb9%2BtasTMTupeh3%2FXyko0pc2ZsVVQ7H9HzNOpPKCjoxI%2FhuBWLIudqUA2gQjhQXg7WISHj7ShFPIZgaY8GMX6uwLtszCOFtADdG1pMcj0oQJGpgmvcABOr9%2FkSkQkeUjGQ8GR6cHfjENMTQhU%2B2dhpry8WkUtIxWYtGTFc3hY8MNWV278GOqUB%2B3eqZQd09LyUSbYDg5gNRuCGtCxVAhcV5DLRwkd4ScmngqAKa01wOrK%2BaF%2BEuqDAjZ7Bng4kUtK9XvDeL5tvFChpJ44BBBqcZDWN%2BLck7%2F9pldzo%2Fha5QaSJ8gOdnSJS8xQYn3iQBjlpkDW7kQDqmmD8GSyhVt5Ld0BHW1pJmD318yI%2F9%2FNNZ6pNraVTWCPic3VUg2AkzOW8u68aDdjxUqC1jsUy&X-Amz-Signature=0e3f1ff15ac6e5477d3d466ec27eb15e933b16c6f65d5ce20a7ca3457c49cc63&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUDVGPP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD7u%2FchEr4Q1ksWIKBPc5veEsu%2BaKbi%2FOlHB9JfX3DChQIgX8mQSAMXet2u%2BzfdFgRaEn9LtvwNfiSxEjRr8E3KT6gqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Bzh4T2oK%2F6zYYhyrcA1QF0hjnPdn80XxIFfyveonM9%2FqSJc9Pny12B9tggKTgX0v3iSJJNYPsKrxrbai3EH0D9ryVaQ0fCaez7HiVXhMzHJ7CmT0ViqX4yVVVf%2BAx19s0y5sYbnUwymLnIJiir5otyzC3osJywI7sufA6v%2FQGE%2Bdf1vvCOYZhbZ41gj7iStxxFoGYc4bF933nssPCoeW9vrR5HzSR2fv88MSNfBlx3xeta1bWBmH8Cp12W2pohW64mBcZ4JzJo4uz8Y3uEyoWiUTjGi8%2Fiu1y6XBqenC6Z18SpPWL39P6eHhUSuaxvy%2FxPUF6NS40fgH1XD0PeZyOW2i3tYRBWM3zZm0ljXAjVVuulpHIwyXa61F1lqhLZnFVaiNM17wqFH1DUsqTrjnF6p5DRfl%2FL%2FRG4ogzL1PkLArFNc6tV392DlDTc2vFEkdy%2B5Irfu6BIDhK7jsCQZeYhP%2B9CWcjh2sCeOOb9%2BtasTMTupeh3%2FXyko0pc2ZsVVQ7H9HzNOpPKCjoxI%2FhuBWLIudqUA2gQjhQXg7WISHj7ShFPIZgaY8GMX6uwLtszCOFtADdG1pMcj0oQJGpgmvcABOr9%2FkSkQkeUjGQ8GR6cHfjENMTQhU%2B2dhpry8WkUtIxWYtGTFc3hY8MNWV278GOqUB%2B3eqZQd09LyUSbYDg5gNRuCGtCxVAhcV5DLRwkd4ScmngqAKa01wOrK%2BaF%2BEuqDAjZ7Bng4kUtK9XvDeL5tvFChpJ44BBBqcZDWN%2BLck7%2F9pldzo%2Fha5QaSJ8gOdnSJS8xQYn3iQBjlpkDW7kQDqmmD8GSyhVt5Ld0BHW1pJmD318yI%2F9%2FNNZ6pNraVTWCPic3VUg2AkzOW8u68aDdjxUqC1jsUy&X-Amz-Signature=07891ea843bed873cd9007e6082ca0465b5b51ff4ce0bbbfb1d1970177a01f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUDVGPP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD7u%2FchEr4Q1ksWIKBPc5veEsu%2BaKbi%2FOlHB9JfX3DChQIgX8mQSAMXet2u%2BzfdFgRaEn9LtvwNfiSxEjRr8E3KT6gqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Bzh4T2oK%2F6zYYhyrcA1QF0hjnPdn80XxIFfyveonM9%2FqSJc9Pny12B9tggKTgX0v3iSJJNYPsKrxrbai3EH0D9ryVaQ0fCaez7HiVXhMzHJ7CmT0ViqX4yVVVf%2BAx19s0y5sYbnUwymLnIJiir5otyzC3osJywI7sufA6v%2FQGE%2Bdf1vvCOYZhbZ41gj7iStxxFoGYc4bF933nssPCoeW9vrR5HzSR2fv88MSNfBlx3xeta1bWBmH8Cp12W2pohW64mBcZ4JzJo4uz8Y3uEyoWiUTjGi8%2Fiu1y6XBqenC6Z18SpPWL39P6eHhUSuaxvy%2FxPUF6NS40fgH1XD0PeZyOW2i3tYRBWM3zZm0ljXAjVVuulpHIwyXa61F1lqhLZnFVaiNM17wqFH1DUsqTrjnF6p5DRfl%2FL%2FRG4ogzL1PkLArFNc6tV392DlDTc2vFEkdy%2B5Irfu6BIDhK7jsCQZeYhP%2B9CWcjh2sCeOOb9%2BtasTMTupeh3%2FXyko0pc2ZsVVQ7H9HzNOpPKCjoxI%2FhuBWLIudqUA2gQjhQXg7WISHj7ShFPIZgaY8GMX6uwLtszCOFtADdG1pMcj0oQJGpgmvcABOr9%2FkSkQkeUjGQ8GR6cHfjENMTQhU%2B2dhpry8WkUtIxWYtGTFc3hY8MNWV278GOqUB%2B3eqZQd09LyUSbYDg5gNRuCGtCxVAhcV5DLRwkd4ScmngqAKa01wOrK%2BaF%2BEuqDAjZ7Bng4kUtK9XvDeL5tvFChpJ44BBBqcZDWN%2BLck7%2F9pldzo%2Fha5QaSJ8gOdnSJS8xQYn3iQBjlpkDW7kQDqmmD8GSyhVt5Ld0BHW1pJmD318yI%2F9%2FNNZ6pNraVTWCPic3VUg2AkzOW8u68aDdjxUqC1jsUy&X-Amz-Signature=70bc4b2bd567879c640074766c3144bd2949e5d06f06933a6cac3bb9c5402528&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUDVGPP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD7u%2FchEr4Q1ksWIKBPc5veEsu%2BaKbi%2FOlHB9JfX3DChQIgX8mQSAMXet2u%2BzfdFgRaEn9LtvwNfiSxEjRr8E3KT6gqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Bzh4T2oK%2F6zYYhyrcA1QF0hjnPdn80XxIFfyveonM9%2FqSJc9Pny12B9tggKTgX0v3iSJJNYPsKrxrbai3EH0D9ryVaQ0fCaez7HiVXhMzHJ7CmT0ViqX4yVVVf%2BAx19s0y5sYbnUwymLnIJiir5otyzC3osJywI7sufA6v%2FQGE%2Bdf1vvCOYZhbZ41gj7iStxxFoGYc4bF933nssPCoeW9vrR5HzSR2fv88MSNfBlx3xeta1bWBmH8Cp12W2pohW64mBcZ4JzJo4uz8Y3uEyoWiUTjGi8%2Fiu1y6XBqenC6Z18SpPWL39P6eHhUSuaxvy%2FxPUF6NS40fgH1XD0PeZyOW2i3tYRBWM3zZm0ljXAjVVuulpHIwyXa61F1lqhLZnFVaiNM17wqFH1DUsqTrjnF6p5DRfl%2FL%2FRG4ogzL1PkLArFNc6tV392DlDTc2vFEkdy%2B5Irfu6BIDhK7jsCQZeYhP%2B9CWcjh2sCeOOb9%2BtasTMTupeh3%2FXyko0pc2ZsVVQ7H9HzNOpPKCjoxI%2FhuBWLIudqUA2gQjhQXg7WISHj7ShFPIZgaY8GMX6uwLtszCOFtADdG1pMcj0oQJGpgmvcABOr9%2FkSkQkeUjGQ8GR6cHfjENMTQhU%2B2dhpry8WkUtIxWYtGTFc3hY8MNWV278GOqUB%2B3eqZQd09LyUSbYDg5gNRuCGtCxVAhcV5DLRwkd4ScmngqAKa01wOrK%2BaF%2BEuqDAjZ7Bng4kUtK9XvDeL5tvFChpJ44BBBqcZDWN%2BLck7%2F9pldzo%2Fha5QaSJ8gOdnSJS8xQYn3iQBjlpkDW7kQDqmmD8GSyhVt5Ld0BHW1pJmD318yI%2F9%2FNNZ6pNraVTWCPic3VUg2AkzOW8u68aDdjxUqC1jsUy&X-Amz-Signature=dd245c56e4c60aee3eb2ae6bd692bb243d087e5e88210da56bc3e0f667d48bf6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUDVGPP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD7u%2FchEr4Q1ksWIKBPc5veEsu%2BaKbi%2FOlHB9JfX3DChQIgX8mQSAMXet2u%2BzfdFgRaEn9LtvwNfiSxEjRr8E3KT6gqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Bzh4T2oK%2F6zYYhyrcA1QF0hjnPdn80XxIFfyveonM9%2FqSJc9Pny12B9tggKTgX0v3iSJJNYPsKrxrbai3EH0D9ryVaQ0fCaez7HiVXhMzHJ7CmT0ViqX4yVVVf%2BAx19s0y5sYbnUwymLnIJiir5otyzC3osJywI7sufA6v%2FQGE%2Bdf1vvCOYZhbZ41gj7iStxxFoGYc4bF933nssPCoeW9vrR5HzSR2fv88MSNfBlx3xeta1bWBmH8Cp12W2pohW64mBcZ4JzJo4uz8Y3uEyoWiUTjGi8%2Fiu1y6XBqenC6Z18SpPWL39P6eHhUSuaxvy%2FxPUF6NS40fgH1XD0PeZyOW2i3tYRBWM3zZm0ljXAjVVuulpHIwyXa61F1lqhLZnFVaiNM17wqFH1DUsqTrjnF6p5DRfl%2FL%2FRG4ogzL1PkLArFNc6tV392DlDTc2vFEkdy%2B5Irfu6BIDhK7jsCQZeYhP%2B9CWcjh2sCeOOb9%2BtasTMTupeh3%2FXyko0pc2ZsVVQ7H9HzNOpPKCjoxI%2FhuBWLIudqUA2gQjhQXg7WISHj7ShFPIZgaY8GMX6uwLtszCOFtADdG1pMcj0oQJGpgmvcABOr9%2FkSkQkeUjGQ8GR6cHfjENMTQhU%2B2dhpry8WkUtIxWYtGTFc3hY8MNWV278GOqUB%2B3eqZQd09LyUSbYDg5gNRuCGtCxVAhcV5DLRwkd4ScmngqAKa01wOrK%2BaF%2BEuqDAjZ7Bng4kUtK9XvDeL5tvFChpJ44BBBqcZDWN%2BLck7%2F9pldzo%2Fha5QaSJ8gOdnSJS8xQYn3iQBjlpkDW7kQDqmmD8GSyhVt5Ld0BHW1pJmD318yI%2F9%2FNNZ6pNraVTWCPic3VUg2AkzOW8u68aDdjxUqC1jsUy&X-Amz-Signature=6c82362ec0c543c1b07ff1e5e1e297dc088926ece8891827e77e36b5498fcf40&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

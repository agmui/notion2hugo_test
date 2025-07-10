---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNDAY65%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfOLKVx6ntrLLapxH71g6k96FsDXXrWjiU7rkb6s0mLgIgcTZ2wgq12n6NyDtUpqkMyMqpvjy6CNCpjMVfz4sC6gUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3pgJI1tghg66AMFCrcA3h7dODrFmgvWkVmQ941TteczePhxOmWA1%2FLBWr2OfmcTeX6i3ziOEbkJJQbOC6foy95nKAN23zCaDMSe71OYQ5ji6KKoM07PN2TWnPR9CveP9D9INamwahMw297xv%2Fl%2FhQVV9qUkk3jkku2bQqK02uvxOwLQ1xnKdDHhpqzu6WrqPToEeKRoWfqvf3W4mPG%2BXpdX1o7lpGEL8mehm1rBrlgJ3a3BiKxizvYTDKM6JJVFgxtf6utgk1NUMkyf%2F7s0gTzDI0XlqUWlaGrjrypu6ysPEdEzhzyYA6I06qM85ODJzaLfJcz46QrOywconAhg2Cs9SIPiHd2oYDRr%2Bb9CA9mUQhw0Ecj%2BLp2QNltcWYSb7DP3jrTA8cxPs%2BDFO8zBE7OeHWR8M5juzB3fRraQjiibqKeegL8xn%2B5LE7yb8ytsjBA4RAPHlYjMfb8PLCfoHxawhfobXa%2B8d%2F0h9UZrgtYkRiki1X8R6fKuHSRBe4qpUP0Agu0foA7PJNkK92c6E2uJWcurTK%2FwfWrjN5gaqgKd9yOJrlt2sSTvs40YNlmm2UO64EjBwhIFZ5MXZ%2Bdv%2B9zeAR6eWuWYOfWRRJ0f%2BdjPRpl3YD%2B%2F29ofmbxtP9wiPPGibRIdr3cGGJUMMrPvMMGOqUBa1ns29Jd39MktxV1nVaiktL0C3Y3HvJbK6r1xg3gTg0Dp2PJ7AXH2Tszsj0PTeuWbs%2BtSiCjd5i%2BinQI%2FUrNhNpCSA98xtoXyOew75KNP6cEn900DUSAIUC5vg1dtYKCKEh9W0YG5YG0yd%2Bz4ZYbk0zkfJ8Y7W4%2FwyeEtRvm9DH5MUb1HC%2FVX0s9GXWJb9fLVimV%2BOXqw7X4XQ1%2BbEcBqqEIOzi0&X-Amz-Signature=d23d91f0242ac5ed4010000bcf08f86b67606bc229d33ad8e5e1d391ccedc17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNDAY65%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfOLKVx6ntrLLapxH71g6k96FsDXXrWjiU7rkb6s0mLgIgcTZ2wgq12n6NyDtUpqkMyMqpvjy6CNCpjMVfz4sC6gUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3pgJI1tghg66AMFCrcA3h7dODrFmgvWkVmQ941TteczePhxOmWA1%2FLBWr2OfmcTeX6i3ziOEbkJJQbOC6foy95nKAN23zCaDMSe71OYQ5ji6KKoM07PN2TWnPR9CveP9D9INamwahMw297xv%2Fl%2FhQVV9qUkk3jkku2bQqK02uvxOwLQ1xnKdDHhpqzu6WrqPToEeKRoWfqvf3W4mPG%2BXpdX1o7lpGEL8mehm1rBrlgJ3a3BiKxizvYTDKM6JJVFgxtf6utgk1NUMkyf%2F7s0gTzDI0XlqUWlaGrjrypu6ysPEdEzhzyYA6I06qM85ODJzaLfJcz46QrOywconAhg2Cs9SIPiHd2oYDRr%2Bb9CA9mUQhw0Ecj%2BLp2QNltcWYSb7DP3jrTA8cxPs%2BDFO8zBE7OeHWR8M5juzB3fRraQjiibqKeegL8xn%2B5LE7yb8ytsjBA4RAPHlYjMfb8PLCfoHxawhfobXa%2B8d%2F0h9UZrgtYkRiki1X8R6fKuHSRBe4qpUP0Agu0foA7PJNkK92c6E2uJWcurTK%2FwfWrjN5gaqgKd9yOJrlt2sSTvs40YNlmm2UO64EjBwhIFZ5MXZ%2Bdv%2B9zeAR6eWuWYOfWRRJ0f%2BdjPRpl3YD%2B%2F29ofmbxtP9wiPPGibRIdr3cGGJUMMrPvMMGOqUBa1ns29Jd39MktxV1nVaiktL0C3Y3HvJbK6r1xg3gTg0Dp2PJ7AXH2Tszsj0PTeuWbs%2BtSiCjd5i%2BinQI%2FUrNhNpCSA98xtoXyOew75KNP6cEn900DUSAIUC5vg1dtYKCKEh9W0YG5YG0yd%2Bz4ZYbk0zkfJ8Y7W4%2FwyeEtRvm9DH5MUb1HC%2FVX0s9GXWJb9fLVimV%2BOXqw7X4XQ1%2BbEcBqqEIOzi0&X-Amz-Signature=fb1b9398ce31b53123e068562e03e6359fc16e9fae00ae980c84010eb7799ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNDAY65%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfOLKVx6ntrLLapxH71g6k96FsDXXrWjiU7rkb6s0mLgIgcTZ2wgq12n6NyDtUpqkMyMqpvjy6CNCpjMVfz4sC6gUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3pgJI1tghg66AMFCrcA3h7dODrFmgvWkVmQ941TteczePhxOmWA1%2FLBWr2OfmcTeX6i3ziOEbkJJQbOC6foy95nKAN23zCaDMSe71OYQ5ji6KKoM07PN2TWnPR9CveP9D9INamwahMw297xv%2Fl%2FhQVV9qUkk3jkku2bQqK02uvxOwLQ1xnKdDHhpqzu6WrqPToEeKRoWfqvf3W4mPG%2BXpdX1o7lpGEL8mehm1rBrlgJ3a3BiKxizvYTDKM6JJVFgxtf6utgk1NUMkyf%2F7s0gTzDI0XlqUWlaGrjrypu6ysPEdEzhzyYA6I06qM85ODJzaLfJcz46QrOywconAhg2Cs9SIPiHd2oYDRr%2Bb9CA9mUQhw0Ecj%2BLp2QNltcWYSb7DP3jrTA8cxPs%2BDFO8zBE7OeHWR8M5juzB3fRraQjiibqKeegL8xn%2B5LE7yb8ytsjBA4RAPHlYjMfb8PLCfoHxawhfobXa%2B8d%2F0h9UZrgtYkRiki1X8R6fKuHSRBe4qpUP0Agu0foA7PJNkK92c6E2uJWcurTK%2FwfWrjN5gaqgKd9yOJrlt2sSTvs40YNlmm2UO64EjBwhIFZ5MXZ%2Bdv%2B9zeAR6eWuWYOfWRRJ0f%2BdjPRpl3YD%2B%2F29ofmbxtP9wiPPGibRIdr3cGGJUMMrPvMMGOqUBa1ns29Jd39MktxV1nVaiktL0C3Y3HvJbK6r1xg3gTg0Dp2PJ7AXH2Tszsj0PTeuWbs%2BtSiCjd5i%2BinQI%2FUrNhNpCSA98xtoXyOew75KNP6cEn900DUSAIUC5vg1dtYKCKEh9W0YG5YG0yd%2Bz4ZYbk0zkfJ8Y7W4%2FwyeEtRvm9DH5MUb1HC%2FVX0s9GXWJb9fLVimV%2BOXqw7X4XQ1%2BbEcBqqEIOzi0&X-Amz-Signature=43cfaf573f7a032f21684973d55152ba1ed78ea97e437633ee4eace6a5be5bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNDAY65%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfOLKVx6ntrLLapxH71g6k96FsDXXrWjiU7rkb6s0mLgIgcTZ2wgq12n6NyDtUpqkMyMqpvjy6CNCpjMVfz4sC6gUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3pgJI1tghg66AMFCrcA3h7dODrFmgvWkVmQ941TteczePhxOmWA1%2FLBWr2OfmcTeX6i3ziOEbkJJQbOC6foy95nKAN23zCaDMSe71OYQ5ji6KKoM07PN2TWnPR9CveP9D9INamwahMw297xv%2Fl%2FhQVV9qUkk3jkku2bQqK02uvxOwLQ1xnKdDHhpqzu6WrqPToEeKRoWfqvf3W4mPG%2BXpdX1o7lpGEL8mehm1rBrlgJ3a3BiKxizvYTDKM6JJVFgxtf6utgk1NUMkyf%2F7s0gTzDI0XlqUWlaGrjrypu6ysPEdEzhzyYA6I06qM85ODJzaLfJcz46QrOywconAhg2Cs9SIPiHd2oYDRr%2Bb9CA9mUQhw0Ecj%2BLp2QNltcWYSb7DP3jrTA8cxPs%2BDFO8zBE7OeHWR8M5juzB3fRraQjiibqKeegL8xn%2B5LE7yb8ytsjBA4RAPHlYjMfb8PLCfoHxawhfobXa%2B8d%2F0h9UZrgtYkRiki1X8R6fKuHSRBe4qpUP0Agu0foA7PJNkK92c6E2uJWcurTK%2FwfWrjN5gaqgKd9yOJrlt2sSTvs40YNlmm2UO64EjBwhIFZ5MXZ%2Bdv%2B9zeAR6eWuWYOfWRRJ0f%2BdjPRpl3YD%2B%2F29ofmbxtP9wiPPGibRIdr3cGGJUMMrPvMMGOqUBa1ns29Jd39MktxV1nVaiktL0C3Y3HvJbK6r1xg3gTg0Dp2PJ7AXH2Tszsj0PTeuWbs%2BtSiCjd5i%2BinQI%2FUrNhNpCSA98xtoXyOew75KNP6cEn900DUSAIUC5vg1dtYKCKEh9W0YG5YG0yd%2Bz4ZYbk0zkfJ8Y7W4%2FwyeEtRvm9DH5MUb1HC%2FVX0s9GXWJb9fLVimV%2BOXqw7X4XQ1%2BbEcBqqEIOzi0&X-Amz-Signature=54242e717d6b10c25f551f7617d0bc0e1e07010d16cd20cb0c456dcab95403c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNDAY65%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfOLKVx6ntrLLapxH71g6k96FsDXXrWjiU7rkb6s0mLgIgcTZ2wgq12n6NyDtUpqkMyMqpvjy6CNCpjMVfz4sC6gUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3pgJI1tghg66AMFCrcA3h7dODrFmgvWkVmQ941TteczePhxOmWA1%2FLBWr2OfmcTeX6i3ziOEbkJJQbOC6foy95nKAN23zCaDMSe71OYQ5ji6KKoM07PN2TWnPR9CveP9D9INamwahMw297xv%2Fl%2FhQVV9qUkk3jkku2bQqK02uvxOwLQ1xnKdDHhpqzu6WrqPToEeKRoWfqvf3W4mPG%2BXpdX1o7lpGEL8mehm1rBrlgJ3a3BiKxizvYTDKM6JJVFgxtf6utgk1NUMkyf%2F7s0gTzDI0XlqUWlaGrjrypu6ysPEdEzhzyYA6I06qM85ODJzaLfJcz46QrOywconAhg2Cs9SIPiHd2oYDRr%2Bb9CA9mUQhw0Ecj%2BLp2QNltcWYSb7DP3jrTA8cxPs%2BDFO8zBE7OeHWR8M5juzB3fRraQjiibqKeegL8xn%2B5LE7yb8ytsjBA4RAPHlYjMfb8PLCfoHxawhfobXa%2B8d%2F0h9UZrgtYkRiki1X8R6fKuHSRBe4qpUP0Agu0foA7PJNkK92c6E2uJWcurTK%2FwfWrjN5gaqgKd9yOJrlt2sSTvs40YNlmm2UO64EjBwhIFZ5MXZ%2Bdv%2B9zeAR6eWuWYOfWRRJ0f%2BdjPRpl3YD%2B%2F29ofmbxtP9wiPPGibRIdr3cGGJUMMrPvMMGOqUBa1ns29Jd39MktxV1nVaiktL0C3Y3HvJbK6r1xg3gTg0Dp2PJ7AXH2Tszsj0PTeuWbs%2BtSiCjd5i%2BinQI%2FUrNhNpCSA98xtoXyOew75KNP6cEn900DUSAIUC5vg1dtYKCKEh9W0YG5YG0yd%2Bz4ZYbk0zkfJ8Y7W4%2FwyeEtRvm9DH5MUb1HC%2FVX0s9GXWJb9fLVimV%2BOXqw7X4XQ1%2BbEcBqqEIOzi0&X-Amz-Signature=1b99a7def30fe81ec4ef2c62d2bfc6c0c7bd8b13a5f054f86999a6989d2080e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNDAY65%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfOLKVx6ntrLLapxH71g6k96FsDXXrWjiU7rkb6s0mLgIgcTZ2wgq12n6NyDtUpqkMyMqpvjy6CNCpjMVfz4sC6gUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3pgJI1tghg66AMFCrcA3h7dODrFmgvWkVmQ941TteczePhxOmWA1%2FLBWr2OfmcTeX6i3ziOEbkJJQbOC6foy95nKAN23zCaDMSe71OYQ5ji6KKoM07PN2TWnPR9CveP9D9INamwahMw297xv%2Fl%2FhQVV9qUkk3jkku2bQqK02uvxOwLQ1xnKdDHhpqzu6WrqPToEeKRoWfqvf3W4mPG%2BXpdX1o7lpGEL8mehm1rBrlgJ3a3BiKxizvYTDKM6JJVFgxtf6utgk1NUMkyf%2F7s0gTzDI0XlqUWlaGrjrypu6ysPEdEzhzyYA6I06qM85ODJzaLfJcz46QrOywconAhg2Cs9SIPiHd2oYDRr%2Bb9CA9mUQhw0Ecj%2BLp2QNltcWYSb7DP3jrTA8cxPs%2BDFO8zBE7OeHWR8M5juzB3fRraQjiibqKeegL8xn%2B5LE7yb8ytsjBA4RAPHlYjMfb8PLCfoHxawhfobXa%2B8d%2F0h9UZrgtYkRiki1X8R6fKuHSRBe4qpUP0Agu0foA7PJNkK92c6E2uJWcurTK%2FwfWrjN5gaqgKd9yOJrlt2sSTvs40YNlmm2UO64EjBwhIFZ5MXZ%2Bdv%2B9zeAR6eWuWYOfWRRJ0f%2BdjPRpl3YD%2B%2F29ofmbxtP9wiPPGibRIdr3cGGJUMMrPvMMGOqUBa1ns29Jd39MktxV1nVaiktL0C3Y3HvJbK6r1xg3gTg0Dp2PJ7AXH2Tszsj0PTeuWbs%2BtSiCjd5i%2BinQI%2FUrNhNpCSA98xtoXyOew75KNP6cEn900DUSAIUC5vg1dtYKCKEh9W0YG5YG0yd%2Bz4ZYbk0zkfJ8Y7W4%2FwyeEtRvm9DH5MUb1HC%2FVX0s9GXWJb9fLVimV%2BOXqw7X4XQ1%2BbEcBqqEIOzi0&X-Amz-Signature=71f63ad4aede518b1ee501897aa81c91531c95ecab9e37afffbe4075b07adf00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNDAY65%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfOLKVx6ntrLLapxH71g6k96FsDXXrWjiU7rkb6s0mLgIgcTZ2wgq12n6NyDtUpqkMyMqpvjy6CNCpjMVfz4sC6gUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3pgJI1tghg66AMFCrcA3h7dODrFmgvWkVmQ941TteczePhxOmWA1%2FLBWr2OfmcTeX6i3ziOEbkJJQbOC6foy95nKAN23zCaDMSe71OYQ5ji6KKoM07PN2TWnPR9CveP9D9INamwahMw297xv%2Fl%2FhQVV9qUkk3jkku2bQqK02uvxOwLQ1xnKdDHhpqzu6WrqPToEeKRoWfqvf3W4mPG%2BXpdX1o7lpGEL8mehm1rBrlgJ3a3BiKxizvYTDKM6JJVFgxtf6utgk1NUMkyf%2F7s0gTzDI0XlqUWlaGrjrypu6ysPEdEzhzyYA6I06qM85ODJzaLfJcz46QrOywconAhg2Cs9SIPiHd2oYDRr%2Bb9CA9mUQhw0Ecj%2BLp2QNltcWYSb7DP3jrTA8cxPs%2BDFO8zBE7OeHWR8M5juzB3fRraQjiibqKeegL8xn%2B5LE7yb8ytsjBA4RAPHlYjMfb8PLCfoHxawhfobXa%2B8d%2F0h9UZrgtYkRiki1X8R6fKuHSRBe4qpUP0Agu0foA7PJNkK92c6E2uJWcurTK%2FwfWrjN5gaqgKd9yOJrlt2sSTvs40YNlmm2UO64EjBwhIFZ5MXZ%2Bdv%2B9zeAR6eWuWYOfWRRJ0f%2BdjPRpl3YD%2B%2F29ofmbxtP9wiPPGibRIdr3cGGJUMMrPvMMGOqUBa1ns29Jd39MktxV1nVaiktL0C3Y3HvJbK6r1xg3gTg0Dp2PJ7AXH2Tszsj0PTeuWbs%2BtSiCjd5i%2BinQI%2FUrNhNpCSA98xtoXyOew75KNP6cEn900DUSAIUC5vg1dtYKCKEh9W0YG5YG0yd%2Bz4ZYbk0zkfJ8Y7W4%2FwyeEtRvm9DH5MUb1HC%2FVX0s9GXWJb9fLVimV%2BOXqw7X4XQ1%2BbEcBqqEIOzi0&X-Amz-Signature=8b7de562050ade2974dd875abc4923d07e4b2fec6186afdb60d68351b48272b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

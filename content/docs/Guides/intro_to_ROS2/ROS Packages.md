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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LP3YDL3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDENjbz07p2qi9uKx%2BUq73R3d62ouxGaeKzKA8Ma6n3XAiEAnW4pKOBO%2FC2wEO6AsQ5JBQYSOp5%2Bh%2B%2F5%2BI2Cf5lTMcQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1rYSRlH%2F4b71suoSrcA4kBpOq0XebLhqQG4nEzJu2oQCdBu5K11jv2VuaqkjoWbQPYuXlNGzc6UsraNaT%2FIVv4VZM1qTPWflojUDRTtPJIIRR4A9ij4vvtsSTVfi3S2tKMwxH7%2FGnivSqWZOoSt%2FI%2BOfoPOMRzH4gpxzW9ZjLkSsENIwY1Z4Cbn7UchD5y5ufTiZQEBrFiLWctOeaM9ANLEBKy%2FqyAJiVniYAIpunm7oOjMxCQ%2FVuGGH%2FGRmOyQd7q12n3RHz2iVYx2Y0tZi%2BMGX1YrNafOGs1KiLSzwnsWj6ZI1tAKJxT3%2F2QFB0oaNDqpG1rpqOdw%2BLCKvc3jnizGAjDLPvG3HztsTcAtbgK%2FII%2FMqYFbhLFP%2F4xt%2F%2FDnNbCjALrsD5v2JqyGmj2yCgkyFjGfnZlpUYwm4UlcjwwfetLHip2tH6MU8I%2BUBPdtiRiKCPs69pqpAMgi1JuaqUWC%2BCEkS2i0UIy3QUmisUsFv6hCQXIXF1tghfZuPi%2F4ib%2F3ilwO1%2FOzw5VfrFo4XkX0bSSvF%2Bjw%2BQYPkMw%2BlE%2Fiy4YLuSPsuVBs6z8xo6dN1cSjFPJWdxyVylB%2FcAPfzb6z3LO66RO4WIH1Y7UiFXIAXTsjQUVUgNFiFG1g7cZHRkl2ougJVZ3LQgAMPrE%2BcAGOqUBr3RpOfyu1S1ESaK1Byd%2Fo896H7FxJ0b3kAoGV%2F8vO%2Bg3SR06bT0%2BWdJtDkRzrWjmBn%2FucajCdCoAIrx7jtPg9LrzO6eqsbNQxA9Z0MPCSKizbtC9xyLgkTueUq0fTI9ZBKm4b2iO2PYoLC1jHTLi4vx0dnA07lHbBeiD2Y%2BIKP3w8ukqA%2FRHF0tOo5EqRR%2FLv8On2TEtUytaAPSn%2BNL1vo%2Bcv9HW&X-Amz-Signature=943780a34efc27e999d4350f0fe3ae01281b351e9e6e385358f9773dfc11d10d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LP3YDL3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDENjbz07p2qi9uKx%2BUq73R3d62ouxGaeKzKA8Ma6n3XAiEAnW4pKOBO%2FC2wEO6AsQ5JBQYSOp5%2Bh%2B%2F5%2BI2Cf5lTMcQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1rYSRlH%2F4b71suoSrcA4kBpOq0XebLhqQG4nEzJu2oQCdBu5K11jv2VuaqkjoWbQPYuXlNGzc6UsraNaT%2FIVv4VZM1qTPWflojUDRTtPJIIRR4A9ij4vvtsSTVfi3S2tKMwxH7%2FGnivSqWZOoSt%2FI%2BOfoPOMRzH4gpxzW9ZjLkSsENIwY1Z4Cbn7UchD5y5ufTiZQEBrFiLWctOeaM9ANLEBKy%2FqyAJiVniYAIpunm7oOjMxCQ%2FVuGGH%2FGRmOyQd7q12n3RHz2iVYx2Y0tZi%2BMGX1YrNafOGs1KiLSzwnsWj6ZI1tAKJxT3%2F2QFB0oaNDqpG1rpqOdw%2BLCKvc3jnizGAjDLPvG3HztsTcAtbgK%2FII%2FMqYFbhLFP%2F4xt%2F%2FDnNbCjALrsD5v2JqyGmj2yCgkyFjGfnZlpUYwm4UlcjwwfetLHip2tH6MU8I%2BUBPdtiRiKCPs69pqpAMgi1JuaqUWC%2BCEkS2i0UIy3QUmisUsFv6hCQXIXF1tghfZuPi%2F4ib%2F3ilwO1%2FOzw5VfrFo4XkX0bSSvF%2Bjw%2BQYPkMw%2BlE%2Fiy4YLuSPsuVBs6z8xo6dN1cSjFPJWdxyVylB%2FcAPfzb6z3LO66RO4WIH1Y7UiFXIAXTsjQUVUgNFiFG1g7cZHRkl2ougJVZ3LQgAMPrE%2BcAGOqUBr3RpOfyu1S1ESaK1Byd%2Fo896H7FxJ0b3kAoGV%2F8vO%2Bg3SR06bT0%2BWdJtDkRzrWjmBn%2FucajCdCoAIrx7jtPg9LrzO6eqsbNQxA9Z0MPCSKizbtC9xyLgkTueUq0fTI9ZBKm4b2iO2PYoLC1jHTLi4vx0dnA07lHbBeiD2Y%2BIKP3w8ukqA%2FRHF0tOo5EqRR%2FLv8On2TEtUytaAPSn%2BNL1vo%2Bcv9HW&X-Amz-Signature=c81b6ed9720d14f60713318e5d9ea929fa094a92bd3a2063851e5a3cab1aef59&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LP3YDL3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDENjbz07p2qi9uKx%2BUq73R3d62ouxGaeKzKA8Ma6n3XAiEAnW4pKOBO%2FC2wEO6AsQ5JBQYSOp5%2Bh%2B%2F5%2BI2Cf5lTMcQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1rYSRlH%2F4b71suoSrcA4kBpOq0XebLhqQG4nEzJu2oQCdBu5K11jv2VuaqkjoWbQPYuXlNGzc6UsraNaT%2FIVv4VZM1qTPWflojUDRTtPJIIRR4A9ij4vvtsSTVfi3S2tKMwxH7%2FGnivSqWZOoSt%2FI%2BOfoPOMRzH4gpxzW9ZjLkSsENIwY1Z4Cbn7UchD5y5ufTiZQEBrFiLWctOeaM9ANLEBKy%2FqyAJiVniYAIpunm7oOjMxCQ%2FVuGGH%2FGRmOyQd7q12n3RHz2iVYx2Y0tZi%2BMGX1YrNafOGs1KiLSzwnsWj6ZI1tAKJxT3%2F2QFB0oaNDqpG1rpqOdw%2BLCKvc3jnizGAjDLPvG3HztsTcAtbgK%2FII%2FMqYFbhLFP%2F4xt%2F%2FDnNbCjALrsD5v2JqyGmj2yCgkyFjGfnZlpUYwm4UlcjwwfetLHip2tH6MU8I%2BUBPdtiRiKCPs69pqpAMgi1JuaqUWC%2BCEkS2i0UIy3QUmisUsFv6hCQXIXF1tghfZuPi%2F4ib%2F3ilwO1%2FOzw5VfrFo4XkX0bSSvF%2Bjw%2BQYPkMw%2BlE%2Fiy4YLuSPsuVBs6z8xo6dN1cSjFPJWdxyVylB%2FcAPfzb6z3LO66RO4WIH1Y7UiFXIAXTsjQUVUgNFiFG1g7cZHRkl2ougJVZ3LQgAMPrE%2BcAGOqUBr3RpOfyu1S1ESaK1Byd%2Fo896H7FxJ0b3kAoGV%2F8vO%2Bg3SR06bT0%2BWdJtDkRzrWjmBn%2FucajCdCoAIrx7jtPg9LrzO6eqsbNQxA9Z0MPCSKizbtC9xyLgkTueUq0fTI9ZBKm4b2iO2PYoLC1jHTLi4vx0dnA07lHbBeiD2Y%2BIKP3w8ukqA%2FRHF0tOo5EqRR%2FLv8On2TEtUytaAPSn%2BNL1vo%2Bcv9HW&X-Amz-Signature=ddc2aad54610827e1dc810c70e153f9c25abf63cde1e070f8e8b03d326351a92&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LP3YDL3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDENjbz07p2qi9uKx%2BUq73R3d62ouxGaeKzKA8Ma6n3XAiEAnW4pKOBO%2FC2wEO6AsQ5JBQYSOp5%2Bh%2B%2F5%2BI2Cf5lTMcQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1rYSRlH%2F4b71suoSrcA4kBpOq0XebLhqQG4nEzJu2oQCdBu5K11jv2VuaqkjoWbQPYuXlNGzc6UsraNaT%2FIVv4VZM1qTPWflojUDRTtPJIIRR4A9ij4vvtsSTVfi3S2tKMwxH7%2FGnivSqWZOoSt%2FI%2BOfoPOMRzH4gpxzW9ZjLkSsENIwY1Z4Cbn7UchD5y5ufTiZQEBrFiLWctOeaM9ANLEBKy%2FqyAJiVniYAIpunm7oOjMxCQ%2FVuGGH%2FGRmOyQd7q12n3RHz2iVYx2Y0tZi%2BMGX1YrNafOGs1KiLSzwnsWj6ZI1tAKJxT3%2F2QFB0oaNDqpG1rpqOdw%2BLCKvc3jnizGAjDLPvG3HztsTcAtbgK%2FII%2FMqYFbhLFP%2F4xt%2F%2FDnNbCjALrsD5v2JqyGmj2yCgkyFjGfnZlpUYwm4UlcjwwfetLHip2tH6MU8I%2BUBPdtiRiKCPs69pqpAMgi1JuaqUWC%2BCEkS2i0UIy3QUmisUsFv6hCQXIXF1tghfZuPi%2F4ib%2F3ilwO1%2FOzw5VfrFo4XkX0bSSvF%2Bjw%2BQYPkMw%2BlE%2Fiy4YLuSPsuVBs6z8xo6dN1cSjFPJWdxyVylB%2FcAPfzb6z3LO66RO4WIH1Y7UiFXIAXTsjQUVUgNFiFG1g7cZHRkl2ougJVZ3LQgAMPrE%2BcAGOqUBr3RpOfyu1S1ESaK1Byd%2Fo896H7FxJ0b3kAoGV%2F8vO%2Bg3SR06bT0%2BWdJtDkRzrWjmBn%2FucajCdCoAIrx7jtPg9LrzO6eqsbNQxA9Z0MPCSKizbtC9xyLgkTueUq0fTI9ZBKm4b2iO2PYoLC1jHTLi4vx0dnA07lHbBeiD2Y%2BIKP3w8ukqA%2FRHF0tOo5EqRR%2FLv8On2TEtUytaAPSn%2BNL1vo%2Bcv9HW&X-Amz-Signature=018abe3858b38691efaad113ead7ee6dfee79ebf4ed0b7d3d405a5ebea556703&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LP3YDL3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDENjbz07p2qi9uKx%2BUq73R3d62ouxGaeKzKA8Ma6n3XAiEAnW4pKOBO%2FC2wEO6AsQ5JBQYSOp5%2Bh%2B%2F5%2BI2Cf5lTMcQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1rYSRlH%2F4b71suoSrcA4kBpOq0XebLhqQG4nEzJu2oQCdBu5K11jv2VuaqkjoWbQPYuXlNGzc6UsraNaT%2FIVv4VZM1qTPWflojUDRTtPJIIRR4A9ij4vvtsSTVfi3S2tKMwxH7%2FGnivSqWZOoSt%2FI%2BOfoPOMRzH4gpxzW9ZjLkSsENIwY1Z4Cbn7UchD5y5ufTiZQEBrFiLWctOeaM9ANLEBKy%2FqyAJiVniYAIpunm7oOjMxCQ%2FVuGGH%2FGRmOyQd7q12n3RHz2iVYx2Y0tZi%2BMGX1YrNafOGs1KiLSzwnsWj6ZI1tAKJxT3%2F2QFB0oaNDqpG1rpqOdw%2BLCKvc3jnizGAjDLPvG3HztsTcAtbgK%2FII%2FMqYFbhLFP%2F4xt%2F%2FDnNbCjALrsD5v2JqyGmj2yCgkyFjGfnZlpUYwm4UlcjwwfetLHip2tH6MU8I%2BUBPdtiRiKCPs69pqpAMgi1JuaqUWC%2BCEkS2i0UIy3QUmisUsFv6hCQXIXF1tghfZuPi%2F4ib%2F3ilwO1%2FOzw5VfrFo4XkX0bSSvF%2Bjw%2BQYPkMw%2BlE%2Fiy4YLuSPsuVBs6z8xo6dN1cSjFPJWdxyVylB%2FcAPfzb6z3LO66RO4WIH1Y7UiFXIAXTsjQUVUgNFiFG1g7cZHRkl2ougJVZ3LQgAMPrE%2BcAGOqUBr3RpOfyu1S1ESaK1Byd%2Fo896H7FxJ0b3kAoGV%2F8vO%2Bg3SR06bT0%2BWdJtDkRzrWjmBn%2FucajCdCoAIrx7jtPg9LrzO6eqsbNQxA9Z0MPCSKizbtC9xyLgkTueUq0fTI9ZBKm4b2iO2PYoLC1jHTLi4vx0dnA07lHbBeiD2Y%2BIKP3w8ukqA%2FRHF0tOo5EqRR%2FLv8On2TEtUytaAPSn%2BNL1vo%2Bcv9HW&X-Amz-Signature=231e51b79c287cd857057be7f90a776940ae018643f0e32b6c239d44df9aaa8d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LP3YDL3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDENjbz07p2qi9uKx%2BUq73R3d62ouxGaeKzKA8Ma6n3XAiEAnW4pKOBO%2FC2wEO6AsQ5JBQYSOp5%2Bh%2B%2F5%2BI2Cf5lTMcQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1rYSRlH%2F4b71suoSrcA4kBpOq0XebLhqQG4nEzJu2oQCdBu5K11jv2VuaqkjoWbQPYuXlNGzc6UsraNaT%2FIVv4VZM1qTPWflojUDRTtPJIIRR4A9ij4vvtsSTVfi3S2tKMwxH7%2FGnivSqWZOoSt%2FI%2BOfoPOMRzH4gpxzW9ZjLkSsENIwY1Z4Cbn7UchD5y5ufTiZQEBrFiLWctOeaM9ANLEBKy%2FqyAJiVniYAIpunm7oOjMxCQ%2FVuGGH%2FGRmOyQd7q12n3RHz2iVYx2Y0tZi%2BMGX1YrNafOGs1KiLSzwnsWj6ZI1tAKJxT3%2F2QFB0oaNDqpG1rpqOdw%2BLCKvc3jnizGAjDLPvG3HztsTcAtbgK%2FII%2FMqYFbhLFP%2F4xt%2F%2FDnNbCjALrsD5v2JqyGmj2yCgkyFjGfnZlpUYwm4UlcjwwfetLHip2tH6MU8I%2BUBPdtiRiKCPs69pqpAMgi1JuaqUWC%2BCEkS2i0UIy3QUmisUsFv6hCQXIXF1tghfZuPi%2F4ib%2F3ilwO1%2FOzw5VfrFo4XkX0bSSvF%2Bjw%2BQYPkMw%2BlE%2Fiy4YLuSPsuVBs6z8xo6dN1cSjFPJWdxyVylB%2FcAPfzb6z3LO66RO4WIH1Y7UiFXIAXTsjQUVUgNFiFG1g7cZHRkl2ougJVZ3LQgAMPrE%2BcAGOqUBr3RpOfyu1S1ESaK1Byd%2Fo896H7FxJ0b3kAoGV%2F8vO%2Bg3SR06bT0%2BWdJtDkRzrWjmBn%2FucajCdCoAIrx7jtPg9LrzO6eqsbNQxA9Z0MPCSKizbtC9xyLgkTueUq0fTI9ZBKm4b2iO2PYoLC1jHTLi4vx0dnA07lHbBeiD2Y%2BIKP3w8ukqA%2FRHF0tOo5EqRR%2FLv8On2TEtUytaAPSn%2BNL1vo%2Bcv9HW&X-Amz-Signature=8ec1d24b2cbf9f32c266049927e36b63e26dc4428040e703ba7f7608a51a8af0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LP3YDL3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDENjbz07p2qi9uKx%2BUq73R3d62ouxGaeKzKA8Ma6n3XAiEAnW4pKOBO%2FC2wEO6AsQ5JBQYSOp5%2Bh%2B%2F5%2BI2Cf5lTMcQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1rYSRlH%2F4b71suoSrcA4kBpOq0XebLhqQG4nEzJu2oQCdBu5K11jv2VuaqkjoWbQPYuXlNGzc6UsraNaT%2FIVv4VZM1qTPWflojUDRTtPJIIRR4A9ij4vvtsSTVfi3S2tKMwxH7%2FGnivSqWZOoSt%2FI%2BOfoPOMRzH4gpxzW9ZjLkSsENIwY1Z4Cbn7UchD5y5ufTiZQEBrFiLWctOeaM9ANLEBKy%2FqyAJiVniYAIpunm7oOjMxCQ%2FVuGGH%2FGRmOyQd7q12n3RHz2iVYx2Y0tZi%2BMGX1YrNafOGs1KiLSzwnsWj6ZI1tAKJxT3%2F2QFB0oaNDqpG1rpqOdw%2BLCKvc3jnizGAjDLPvG3HztsTcAtbgK%2FII%2FMqYFbhLFP%2F4xt%2F%2FDnNbCjALrsD5v2JqyGmj2yCgkyFjGfnZlpUYwm4UlcjwwfetLHip2tH6MU8I%2BUBPdtiRiKCPs69pqpAMgi1JuaqUWC%2BCEkS2i0UIy3QUmisUsFv6hCQXIXF1tghfZuPi%2F4ib%2F3ilwO1%2FOzw5VfrFo4XkX0bSSvF%2Bjw%2BQYPkMw%2BlE%2Fiy4YLuSPsuVBs6z8xo6dN1cSjFPJWdxyVylB%2FcAPfzb6z3LO66RO4WIH1Y7UiFXIAXTsjQUVUgNFiFG1g7cZHRkl2ougJVZ3LQgAMPrE%2BcAGOqUBr3RpOfyu1S1ESaK1Byd%2Fo896H7FxJ0b3kAoGV%2F8vO%2Bg3SR06bT0%2BWdJtDkRzrWjmBn%2FucajCdCoAIrx7jtPg9LrzO6eqsbNQxA9Z0MPCSKizbtC9xyLgkTueUq0fTI9ZBKm4b2iO2PYoLC1jHTLi4vx0dnA07lHbBeiD2Y%2BIKP3w8ukqA%2FRHF0tOo5EqRR%2FLv8On2TEtUytaAPSn%2BNL1vo%2Bcv9HW&X-Amz-Signature=9516bc31c8736134732668e3aa3b45f75d6142d261bd26af32510bdcdebca9b1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

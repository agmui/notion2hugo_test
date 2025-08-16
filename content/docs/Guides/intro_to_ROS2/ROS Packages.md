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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4KCHW3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCf8WgTGe2jkn20Xym%2Bp9af9tyV7gHRFlvgXWJDhcmN6AIgbo3jOSomQpQjZ1Nb18L5j%2BChTiHOJBNoqH%2BW5uKpzHQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEfVW5BLELoCTJDp0ircA5XQDqC2IUMktyE05B9mqGDRPFTD5z8QIRbrglxW80KPPqukn881byAFPOAAOJoD6czRkhB%2BhSY5XeyvUpJjrgv0bH2LdsjPqMXaX8hp5Evt9lr%2Fp4VV%2BSs43i%2BPm1MsbYlm8uJq0I2G0lqckF1YXn2QIN2iQDv18uEZTrsU4%2BiHqIf3yLhP%2FAIzkF%2B0eLL8wITSp5gK0cQNTtOWGiOqEXYBSnOKJqDYdl4gRBblVnaqEBFmJkGS0lGrRns7lkGVx%2Fe1ZR9JUpy9MoAgGGNj1EWVne2L4QV4wkFeGoh8BreTiOEvAPCqAusfff5pt1nWDyKYXHIMVSWMrZFOpuXiaF2JaXqRO9yJNSjmETT2mgemb6GtW1kqYm7l1%2FRAJ2bnsgK8EUZRQ0nXXefaDLUiLEpR4UyNOl51YeYhFk7qequqMXy%2B5TEtqYMGfDDFRBpQjkA0BvNhEwzOuwJdJ4C1Op4xXX1JvsNrxbRj7B7FY4Ty3Wht%2BUeOR2rtF1HLiZkTAq7c%2FB2%2FaZGWxw%2FQbTH5zYe%2FqJWvtBQBq78zMxyb6ra5JMcNQVXa1Li7HR8t9nQFgmGCBgVRIR0TLIKcE9DBghrfIX7jNPIPt4El4qyfpn5zo5AVz2tW9lfKmRwNMOz3gMUGOqUBHpqRDD2CIolLQcqh8X3XqKCwdkL9sctZBtsYVBHONifa%2B%2FeX%2BQWbEUrPKc%2FcJO4%2BHRV6ntmVwKVNa2mVY34hoZNu0xnnrI1QCzLUZiDqbdfSxcOVpNUMauvjptVsGJaZacvdmJA3nr86f1yqUGOOskDpOInQLaKh5WH0vZfEQbzDvVyO1vXi3W3IcgRib0WADPd9rgIUqdwgede7v6ETLLmHbndb&X-Amz-Signature=5bce81222f10a3985d864bd558cfa6aa5d1ce2098da33939ef8e5cd88d9dbcae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4KCHW3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCf8WgTGe2jkn20Xym%2Bp9af9tyV7gHRFlvgXWJDhcmN6AIgbo3jOSomQpQjZ1Nb18L5j%2BChTiHOJBNoqH%2BW5uKpzHQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEfVW5BLELoCTJDp0ircA5XQDqC2IUMktyE05B9mqGDRPFTD5z8QIRbrglxW80KPPqukn881byAFPOAAOJoD6czRkhB%2BhSY5XeyvUpJjrgv0bH2LdsjPqMXaX8hp5Evt9lr%2Fp4VV%2BSs43i%2BPm1MsbYlm8uJq0I2G0lqckF1YXn2QIN2iQDv18uEZTrsU4%2BiHqIf3yLhP%2FAIzkF%2B0eLL8wITSp5gK0cQNTtOWGiOqEXYBSnOKJqDYdl4gRBblVnaqEBFmJkGS0lGrRns7lkGVx%2Fe1ZR9JUpy9MoAgGGNj1EWVne2L4QV4wkFeGoh8BreTiOEvAPCqAusfff5pt1nWDyKYXHIMVSWMrZFOpuXiaF2JaXqRO9yJNSjmETT2mgemb6GtW1kqYm7l1%2FRAJ2bnsgK8EUZRQ0nXXefaDLUiLEpR4UyNOl51YeYhFk7qequqMXy%2B5TEtqYMGfDDFRBpQjkA0BvNhEwzOuwJdJ4C1Op4xXX1JvsNrxbRj7B7FY4Ty3Wht%2BUeOR2rtF1HLiZkTAq7c%2FB2%2FaZGWxw%2FQbTH5zYe%2FqJWvtBQBq78zMxyb6ra5JMcNQVXa1Li7HR8t9nQFgmGCBgVRIR0TLIKcE9DBghrfIX7jNPIPt4El4qyfpn5zo5AVz2tW9lfKmRwNMOz3gMUGOqUBHpqRDD2CIolLQcqh8X3XqKCwdkL9sctZBtsYVBHONifa%2B%2FeX%2BQWbEUrPKc%2FcJO4%2BHRV6ntmVwKVNa2mVY34hoZNu0xnnrI1QCzLUZiDqbdfSxcOVpNUMauvjptVsGJaZacvdmJA3nr86f1yqUGOOskDpOInQLaKh5WH0vZfEQbzDvVyO1vXi3W3IcgRib0WADPd9rgIUqdwgede7v6ETLLmHbndb&X-Amz-Signature=9dbec7dc337418afbb7dc5e23c35f9c0df619c49c1e8e9cc33de765ab2ffebb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4KCHW3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCf8WgTGe2jkn20Xym%2Bp9af9tyV7gHRFlvgXWJDhcmN6AIgbo3jOSomQpQjZ1Nb18L5j%2BChTiHOJBNoqH%2BW5uKpzHQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEfVW5BLELoCTJDp0ircA5XQDqC2IUMktyE05B9mqGDRPFTD5z8QIRbrglxW80KPPqukn881byAFPOAAOJoD6czRkhB%2BhSY5XeyvUpJjrgv0bH2LdsjPqMXaX8hp5Evt9lr%2Fp4VV%2BSs43i%2BPm1MsbYlm8uJq0I2G0lqckF1YXn2QIN2iQDv18uEZTrsU4%2BiHqIf3yLhP%2FAIzkF%2B0eLL8wITSp5gK0cQNTtOWGiOqEXYBSnOKJqDYdl4gRBblVnaqEBFmJkGS0lGrRns7lkGVx%2Fe1ZR9JUpy9MoAgGGNj1EWVne2L4QV4wkFeGoh8BreTiOEvAPCqAusfff5pt1nWDyKYXHIMVSWMrZFOpuXiaF2JaXqRO9yJNSjmETT2mgemb6GtW1kqYm7l1%2FRAJ2bnsgK8EUZRQ0nXXefaDLUiLEpR4UyNOl51YeYhFk7qequqMXy%2B5TEtqYMGfDDFRBpQjkA0BvNhEwzOuwJdJ4C1Op4xXX1JvsNrxbRj7B7FY4Ty3Wht%2BUeOR2rtF1HLiZkTAq7c%2FB2%2FaZGWxw%2FQbTH5zYe%2FqJWvtBQBq78zMxyb6ra5JMcNQVXa1Li7HR8t9nQFgmGCBgVRIR0TLIKcE9DBghrfIX7jNPIPt4El4qyfpn5zo5AVz2tW9lfKmRwNMOz3gMUGOqUBHpqRDD2CIolLQcqh8X3XqKCwdkL9sctZBtsYVBHONifa%2B%2FeX%2BQWbEUrPKc%2FcJO4%2BHRV6ntmVwKVNa2mVY34hoZNu0xnnrI1QCzLUZiDqbdfSxcOVpNUMauvjptVsGJaZacvdmJA3nr86f1yqUGOOskDpOInQLaKh5WH0vZfEQbzDvVyO1vXi3W3IcgRib0WADPd9rgIUqdwgede7v6ETLLmHbndb&X-Amz-Signature=97b833e57c2515f6114f8e79ab5ced2e60dac26f964f76b32de13bf5f2f39f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4KCHW3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCf8WgTGe2jkn20Xym%2Bp9af9tyV7gHRFlvgXWJDhcmN6AIgbo3jOSomQpQjZ1Nb18L5j%2BChTiHOJBNoqH%2BW5uKpzHQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEfVW5BLELoCTJDp0ircA5XQDqC2IUMktyE05B9mqGDRPFTD5z8QIRbrglxW80KPPqukn881byAFPOAAOJoD6czRkhB%2BhSY5XeyvUpJjrgv0bH2LdsjPqMXaX8hp5Evt9lr%2Fp4VV%2BSs43i%2BPm1MsbYlm8uJq0I2G0lqckF1YXn2QIN2iQDv18uEZTrsU4%2BiHqIf3yLhP%2FAIzkF%2B0eLL8wITSp5gK0cQNTtOWGiOqEXYBSnOKJqDYdl4gRBblVnaqEBFmJkGS0lGrRns7lkGVx%2Fe1ZR9JUpy9MoAgGGNj1EWVne2L4QV4wkFeGoh8BreTiOEvAPCqAusfff5pt1nWDyKYXHIMVSWMrZFOpuXiaF2JaXqRO9yJNSjmETT2mgemb6GtW1kqYm7l1%2FRAJ2bnsgK8EUZRQ0nXXefaDLUiLEpR4UyNOl51YeYhFk7qequqMXy%2B5TEtqYMGfDDFRBpQjkA0BvNhEwzOuwJdJ4C1Op4xXX1JvsNrxbRj7B7FY4Ty3Wht%2BUeOR2rtF1HLiZkTAq7c%2FB2%2FaZGWxw%2FQbTH5zYe%2FqJWvtBQBq78zMxyb6ra5JMcNQVXa1Li7HR8t9nQFgmGCBgVRIR0TLIKcE9DBghrfIX7jNPIPt4El4qyfpn5zo5AVz2tW9lfKmRwNMOz3gMUGOqUBHpqRDD2CIolLQcqh8X3XqKCwdkL9sctZBtsYVBHONifa%2B%2FeX%2BQWbEUrPKc%2FcJO4%2BHRV6ntmVwKVNa2mVY34hoZNu0xnnrI1QCzLUZiDqbdfSxcOVpNUMauvjptVsGJaZacvdmJA3nr86f1yqUGOOskDpOInQLaKh5WH0vZfEQbzDvVyO1vXi3W3IcgRib0WADPd9rgIUqdwgede7v6ETLLmHbndb&X-Amz-Signature=969c6ead6609a04bda85728d4c37261b26981e14f2d3d15bc3c6f42c74f54d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4KCHW3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCf8WgTGe2jkn20Xym%2Bp9af9tyV7gHRFlvgXWJDhcmN6AIgbo3jOSomQpQjZ1Nb18L5j%2BChTiHOJBNoqH%2BW5uKpzHQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEfVW5BLELoCTJDp0ircA5XQDqC2IUMktyE05B9mqGDRPFTD5z8QIRbrglxW80KPPqukn881byAFPOAAOJoD6czRkhB%2BhSY5XeyvUpJjrgv0bH2LdsjPqMXaX8hp5Evt9lr%2Fp4VV%2BSs43i%2BPm1MsbYlm8uJq0I2G0lqckF1YXn2QIN2iQDv18uEZTrsU4%2BiHqIf3yLhP%2FAIzkF%2B0eLL8wITSp5gK0cQNTtOWGiOqEXYBSnOKJqDYdl4gRBblVnaqEBFmJkGS0lGrRns7lkGVx%2Fe1ZR9JUpy9MoAgGGNj1EWVne2L4QV4wkFeGoh8BreTiOEvAPCqAusfff5pt1nWDyKYXHIMVSWMrZFOpuXiaF2JaXqRO9yJNSjmETT2mgemb6GtW1kqYm7l1%2FRAJ2bnsgK8EUZRQ0nXXefaDLUiLEpR4UyNOl51YeYhFk7qequqMXy%2B5TEtqYMGfDDFRBpQjkA0BvNhEwzOuwJdJ4C1Op4xXX1JvsNrxbRj7B7FY4Ty3Wht%2BUeOR2rtF1HLiZkTAq7c%2FB2%2FaZGWxw%2FQbTH5zYe%2FqJWvtBQBq78zMxyb6ra5JMcNQVXa1Li7HR8t9nQFgmGCBgVRIR0TLIKcE9DBghrfIX7jNPIPt4El4qyfpn5zo5AVz2tW9lfKmRwNMOz3gMUGOqUBHpqRDD2CIolLQcqh8X3XqKCwdkL9sctZBtsYVBHONifa%2B%2FeX%2BQWbEUrPKc%2FcJO4%2BHRV6ntmVwKVNa2mVY34hoZNu0xnnrI1QCzLUZiDqbdfSxcOVpNUMauvjptVsGJaZacvdmJA3nr86f1yqUGOOskDpOInQLaKh5WH0vZfEQbzDvVyO1vXi3W3IcgRib0WADPd9rgIUqdwgede7v6ETLLmHbndb&X-Amz-Signature=a2b40fd8dfa9e579e3eb603b4eaa3c44309674235703aff4b8fe337d60e88826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4KCHW3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCf8WgTGe2jkn20Xym%2Bp9af9tyV7gHRFlvgXWJDhcmN6AIgbo3jOSomQpQjZ1Nb18L5j%2BChTiHOJBNoqH%2BW5uKpzHQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEfVW5BLELoCTJDp0ircA5XQDqC2IUMktyE05B9mqGDRPFTD5z8QIRbrglxW80KPPqukn881byAFPOAAOJoD6czRkhB%2BhSY5XeyvUpJjrgv0bH2LdsjPqMXaX8hp5Evt9lr%2Fp4VV%2BSs43i%2BPm1MsbYlm8uJq0I2G0lqckF1YXn2QIN2iQDv18uEZTrsU4%2BiHqIf3yLhP%2FAIzkF%2B0eLL8wITSp5gK0cQNTtOWGiOqEXYBSnOKJqDYdl4gRBblVnaqEBFmJkGS0lGrRns7lkGVx%2Fe1ZR9JUpy9MoAgGGNj1EWVne2L4QV4wkFeGoh8BreTiOEvAPCqAusfff5pt1nWDyKYXHIMVSWMrZFOpuXiaF2JaXqRO9yJNSjmETT2mgemb6GtW1kqYm7l1%2FRAJ2bnsgK8EUZRQ0nXXefaDLUiLEpR4UyNOl51YeYhFk7qequqMXy%2B5TEtqYMGfDDFRBpQjkA0BvNhEwzOuwJdJ4C1Op4xXX1JvsNrxbRj7B7FY4Ty3Wht%2BUeOR2rtF1HLiZkTAq7c%2FB2%2FaZGWxw%2FQbTH5zYe%2FqJWvtBQBq78zMxyb6ra5JMcNQVXa1Li7HR8t9nQFgmGCBgVRIR0TLIKcE9DBghrfIX7jNPIPt4El4qyfpn5zo5AVz2tW9lfKmRwNMOz3gMUGOqUBHpqRDD2CIolLQcqh8X3XqKCwdkL9sctZBtsYVBHONifa%2B%2FeX%2BQWbEUrPKc%2FcJO4%2BHRV6ntmVwKVNa2mVY34hoZNu0xnnrI1QCzLUZiDqbdfSxcOVpNUMauvjptVsGJaZacvdmJA3nr86f1yqUGOOskDpOInQLaKh5WH0vZfEQbzDvVyO1vXi3W3IcgRib0WADPd9rgIUqdwgede7v6ETLLmHbndb&X-Amz-Signature=ceb98dbe883fffa7df76362345978fe0c64803a10ea0cfe20ec67956b6d2c33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4KCHW3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCf8WgTGe2jkn20Xym%2Bp9af9tyV7gHRFlvgXWJDhcmN6AIgbo3jOSomQpQjZ1Nb18L5j%2BChTiHOJBNoqH%2BW5uKpzHQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEfVW5BLELoCTJDp0ircA5XQDqC2IUMktyE05B9mqGDRPFTD5z8QIRbrglxW80KPPqukn881byAFPOAAOJoD6czRkhB%2BhSY5XeyvUpJjrgv0bH2LdsjPqMXaX8hp5Evt9lr%2Fp4VV%2BSs43i%2BPm1MsbYlm8uJq0I2G0lqckF1YXn2QIN2iQDv18uEZTrsU4%2BiHqIf3yLhP%2FAIzkF%2B0eLL8wITSp5gK0cQNTtOWGiOqEXYBSnOKJqDYdl4gRBblVnaqEBFmJkGS0lGrRns7lkGVx%2Fe1ZR9JUpy9MoAgGGNj1EWVne2L4QV4wkFeGoh8BreTiOEvAPCqAusfff5pt1nWDyKYXHIMVSWMrZFOpuXiaF2JaXqRO9yJNSjmETT2mgemb6GtW1kqYm7l1%2FRAJ2bnsgK8EUZRQ0nXXefaDLUiLEpR4UyNOl51YeYhFk7qequqMXy%2B5TEtqYMGfDDFRBpQjkA0BvNhEwzOuwJdJ4C1Op4xXX1JvsNrxbRj7B7FY4Ty3Wht%2BUeOR2rtF1HLiZkTAq7c%2FB2%2FaZGWxw%2FQbTH5zYe%2FqJWvtBQBq78zMxyb6ra5JMcNQVXa1Li7HR8t9nQFgmGCBgVRIR0TLIKcE9DBghrfIX7jNPIPt4El4qyfpn5zo5AVz2tW9lfKmRwNMOz3gMUGOqUBHpqRDD2CIolLQcqh8X3XqKCwdkL9sctZBtsYVBHONifa%2B%2FeX%2BQWbEUrPKc%2FcJO4%2BHRV6ntmVwKVNa2mVY34hoZNu0xnnrI1QCzLUZiDqbdfSxcOVpNUMauvjptVsGJaZacvdmJA3nr86f1yqUGOOskDpOInQLaKh5WH0vZfEQbzDvVyO1vXi3W3IcgRib0WADPd9rgIUqdwgede7v6ETLLmHbndb&X-Amz-Signature=d29540ccc5ce3c5fe80d0ea5004c935f228c9204369ded7955c9ab1d643e13d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

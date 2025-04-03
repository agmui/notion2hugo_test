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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4BTFLU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyZHE3PGX6rz%2BRhqTg3NetmxtrJgM1Jgn3GWBay2KFYAiBRvbM8YwptU%2FiR35jGU2N%2FGp8pW3FC%2FtcdcEgDZljDECqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2Fl5Ze5Pbw5jkoFAKtwDwCaRKk6i5iC4oBD0YQjkbr0RspK36OlmMUwWuF9dZ6ZTad9uTP4yJ9oxDuvozuJ1j%2B35FISiOpWIivuijHtqss6HaVykuKF4wZfW3i1ApVzcFVljkby73x7paV6aV5TJlmgnBpRFFry%2FJ3Jk9ho0Zk9ZxHsvr%2FX7ltVumBGWJO9FQDI3qORbQmWftQyLMaMNtGEz3N9hx9CSem2JW56IvA3QMicKsduw7BR%2BzVvlDuol2CsgIHQIaTZFtNFZ0xdnFzaoAFFHrX8rb8ImIfJgrYay0Ws9xoNVm4GiGgM8oO%2Bq9cBfVlq5DTw8xutSGojeXyXWByXlkkmlpIlyBBmUJFQ2OwVe4Q0c8gCB8ZV0kjXf2my8NRqAOezhFXIG4LEAGd2IHfnjDag22KfYpKpt%2BmiKlBn8johJYBLvH6oa0esQ8iXpnt8O70bdAfVxnywqnuYRt6pCCTNAkiPetSS2KQ6cQHxTtNkR%2FyDCHLQfiCU26vjVMo1zyRGu5%2FMjet8SAvgRbLIu0mey6tasBPk7XyQIdD7QfcfJ8dbdGiNBD5mvBBmLNRLp6hdrlg6iihohSvTtauy%2FVofpOWbKmj6BThpOi0Kl4ber%2FB%2BN1V%2FIG0YonclEJop2JfbZz5Iw%2Bf65vwY6pgFsRCEHYxcApVwpn5zcDXqdWJPk3aTpjhXmv15mouTKUZSTG%2BhHjGwmENx7wN7n9n79sibNhKI9qDGuZj4nuVMD6cnKLh4XSuRb44TPkkde5ROxlfLKk5W8dxPsg8wQ3ZTsAwqlJNDAHexx%2FST8tvjZoVfvJB4q1hBFuFgtDCmaMuYPropGOFJ5TA0eJVL%2FnamqdvOHS67X1S62ycYe7edX6ao3rBzq&X-Amz-Signature=9034ba76996436e0e43cd945c7b1b4aa55977e1e98f6218d7332d54a6e6ea1aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4BTFLU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyZHE3PGX6rz%2BRhqTg3NetmxtrJgM1Jgn3GWBay2KFYAiBRvbM8YwptU%2FiR35jGU2N%2FGp8pW3FC%2FtcdcEgDZljDECqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2Fl5Ze5Pbw5jkoFAKtwDwCaRKk6i5iC4oBD0YQjkbr0RspK36OlmMUwWuF9dZ6ZTad9uTP4yJ9oxDuvozuJ1j%2B35FISiOpWIivuijHtqss6HaVykuKF4wZfW3i1ApVzcFVljkby73x7paV6aV5TJlmgnBpRFFry%2FJ3Jk9ho0Zk9ZxHsvr%2FX7ltVumBGWJO9FQDI3qORbQmWftQyLMaMNtGEz3N9hx9CSem2JW56IvA3QMicKsduw7BR%2BzVvlDuol2CsgIHQIaTZFtNFZ0xdnFzaoAFFHrX8rb8ImIfJgrYay0Ws9xoNVm4GiGgM8oO%2Bq9cBfVlq5DTw8xutSGojeXyXWByXlkkmlpIlyBBmUJFQ2OwVe4Q0c8gCB8ZV0kjXf2my8NRqAOezhFXIG4LEAGd2IHfnjDag22KfYpKpt%2BmiKlBn8johJYBLvH6oa0esQ8iXpnt8O70bdAfVxnywqnuYRt6pCCTNAkiPetSS2KQ6cQHxTtNkR%2FyDCHLQfiCU26vjVMo1zyRGu5%2FMjet8SAvgRbLIu0mey6tasBPk7XyQIdD7QfcfJ8dbdGiNBD5mvBBmLNRLp6hdrlg6iihohSvTtauy%2FVofpOWbKmj6BThpOi0Kl4ber%2FB%2BN1V%2FIG0YonclEJop2JfbZz5Iw%2Bf65vwY6pgFsRCEHYxcApVwpn5zcDXqdWJPk3aTpjhXmv15mouTKUZSTG%2BhHjGwmENx7wN7n9n79sibNhKI9qDGuZj4nuVMD6cnKLh4XSuRb44TPkkde5ROxlfLKk5W8dxPsg8wQ3ZTsAwqlJNDAHexx%2FST8tvjZoVfvJB4q1hBFuFgtDCmaMuYPropGOFJ5TA0eJVL%2FnamqdvOHS67X1S62ycYe7edX6ao3rBzq&X-Amz-Signature=64f2a0c64d1c3f5ef185c8818bf4cb4e0de867fefbe6d01328d493e7c940232c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4BTFLU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyZHE3PGX6rz%2BRhqTg3NetmxtrJgM1Jgn3GWBay2KFYAiBRvbM8YwptU%2FiR35jGU2N%2FGp8pW3FC%2FtcdcEgDZljDECqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2Fl5Ze5Pbw5jkoFAKtwDwCaRKk6i5iC4oBD0YQjkbr0RspK36OlmMUwWuF9dZ6ZTad9uTP4yJ9oxDuvozuJ1j%2B35FISiOpWIivuijHtqss6HaVykuKF4wZfW3i1ApVzcFVljkby73x7paV6aV5TJlmgnBpRFFry%2FJ3Jk9ho0Zk9ZxHsvr%2FX7ltVumBGWJO9FQDI3qORbQmWftQyLMaMNtGEz3N9hx9CSem2JW56IvA3QMicKsduw7BR%2BzVvlDuol2CsgIHQIaTZFtNFZ0xdnFzaoAFFHrX8rb8ImIfJgrYay0Ws9xoNVm4GiGgM8oO%2Bq9cBfVlq5DTw8xutSGojeXyXWByXlkkmlpIlyBBmUJFQ2OwVe4Q0c8gCB8ZV0kjXf2my8NRqAOezhFXIG4LEAGd2IHfnjDag22KfYpKpt%2BmiKlBn8johJYBLvH6oa0esQ8iXpnt8O70bdAfVxnywqnuYRt6pCCTNAkiPetSS2KQ6cQHxTtNkR%2FyDCHLQfiCU26vjVMo1zyRGu5%2FMjet8SAvgRbLIu0mey6tasBPk7XyQIdD7QfcfJ8dbdGiNBD5mvBBmLNRLp6hdrlg6iihohSvTtauy%2FVofpOWbKmj6BThpOi0Kl4ber%2FB%2BN1V%2FIG0YonclEJop2JfbZz5Iw%2Bf65vwY6pgFsRCEHYxcApVwpn5zcDXqdWJPk3aTpjhXmv15mouTKUZSTG%2BhHjGwmENx7wN7n9n79sibNhKI9qDGuZj4nuVMD6cnKLh4XSuRb44TPkkde5ROxlfLKk5W8dxPsg8wQ3ZTsAwqlJNDAHexx%2FST8tvjZoVfvJB4q1hBFuFgtDCmaMuYPropGOFJ5TA0eJVL%2FnamqdvOHS67X1S62ycYe7edX6ao3rBzq&X-Amz-Signature=b2590122803e4a2af4528ba66ec7fccb3f8c7b9f86ba13241fc382b4e4e4be8c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4BTFLU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyZHE3PGX6rz%2BRhqTg3NetmxtrJgM1Jgn3GWBay2KFYAiBRvbM8YwptU%2FiR35jGU2N%2FGp8pW3FC%2FtcdcEgDZljDECqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2Fl5Ze5Pbw5jkoFAKtwDwCaRKk6i5iC4oBD0YQjkbr0RspK36OlmMUwWuF9dZ6ZTad9uTP4yJ9oxDuvozuJ1j%2B35FISiOpWIivuijHtqss6HaVykuKF4wZfW3i1ApVzcFVljkby73x7paV6aV5TJlmgnBpRFFry%2FJ3Jk9ho0Zk9ZxHsvr%2FX7ltVumBGWJO9FQDI3qORbQmWftQyLMaMNtGEz3N9hx9CSem2JW56IvA3QMicKsduw7BR%2BzVvlDuol2CsgIHQIaTZFtNFZ0xdnFzaoAFFHrX8rb8ImIfJgrYay0Ws9xoNVm4GiGgM8oO%2Bq9cBfVlq5DTw8xutSGojeXyXWByXlkkmlpIlyBBmUJFQ2OwVe4Q0c8gCB8ZV0kjXf2my8NRqAOezhFXIG4LEAGd2IHfnjDag22KfYpKpt%2BmiKlBn8johJYBLvH6oa0esQ8iXpnt8O70bdAfVxnywqnuYRt6pCCTNAkiPetSS2KQ6cQHxTtNkR%2FyDCHLQfiCU26vjVMo1zyRGu5%2FMjet8SAvgRbLIu0mey6tasBPk7XyQIdD7QfcfJ8dbdGiNBD5mvBBmLNRLp6hdrlg6iihohSvTtauy%2FVofpOWbKmj6BThpOi0Kl4ber%2FB%2BN1V%2FIG0YonclEJop2JfbZz5Iw%2Bf65vwY6pgFsRCEHYxcApVwpn5zcDXqdWJPk3aTpjhXmv15mouTKUZSTG%2BhHjGwmENx7wN7n9n79sibNhKI9qDGuZj4nuVMD6cnKLh4XSuRb44TPkkde5ROxlfLKk5W8dxPsg8wQ3ZTsAwqlJNDAHexx%2FST8tvjZoVfvJB4q1hBFuFgtDCmaMuYPropGOFJ5TA0eJVL%2FnamqdvOHS67X1S62ycYe7edX6ao3rBzq&X-Amz-Signature=df6511662dc5431c12100c53a5fd943d7b0107239e0338f50e0ff6db3403f2be&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4BTFLU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyZHE3PGX6rz%2BRhqTg3NetmxtrJgM1Jgn3GWBay2KFYAiBRvbM8YwptU%2FiR35jGU2N%2FGp8pW3FC%2FtcdcEgDZljDECqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2Fl5Ze5Pbw5jkoFAKtwDwCaRKk6i5iC4oBD0YQjkbr0RspK36OlmMUwWuF9dZ6ZTad9uTP4yJ9oxDuvozuJ1j%2B35FISiOpWIivuijHtqss6HaVykuKF4wZfW3i1ApVzcFVljkby73x7paV6aV5TJlmgnBpRFFry%2FJ3Jk9ho0Zk9ZxHsvr%2FX7ltVumBGWJO9FQDI3qORbQmWftQyLMaMNtGEz3N9hx9CSem2JW56IvA3QMicKsduw7BR%2BzVvlDuol2CsgIHQIaTZFtNFZ0xdnFzaoAFFHrX8rb8ImIfJgrYay0Ws9xoNVm4GiGgM8oO%2Bq9cBfVlq5DTw8xutSGojeXyXWByXlkkmlpIlyBBmUJFQ2OwVe4Q0c8gCB8ZV0kjXf2my8NRqAOezhFXIG4LEAGd2IHfnjDag22KfYpKpt%2BmiKlBn8johJYBLvH6oa0esQ8iXpnt8O70bdAfVxnywqnuYRt6pCCTNAkiPetSS2KQ6cQHxTtNkR%2FyDCHLQfiCU26vjVMo1zyRGu5%2FMjet8SAvgRbLIu0mey6tasBPk7XyQIdD7QfcfJ8dbdGiNBD5mvBBmLNRLp6hdrlg6iihohSvTtauy%2FVofpOWbKmj6BThpOi0Kl4ber%2FB%2BN1V%2FIG0YonclEJop2JfbZz5Iw%2Bf65vwY6pgFsRCEHYxcApVwpn5zcDXqdWJPk3aTpjhXmv15mouTKUZSTG%2BhHjGwmENx7wN7n9n79sibNhKI9qDGuZj4nuVMD6cnKLh4XSuRb44TPkkde5ROxlfLKk5W8dxPsg8wQ3ZTsAwqlJNDAHexx%2FST8tvjZoVfvJB4q1hBFuFgtDCmaMuYPropGOFJ5TA0eJVL%2FnamqdvOHS67X1S62ycYe7edX6ao3rBzq&X-Amz-Signature=61bd4edb6f793526752020b3b39e81cce2607bf2cc1829eb76059687619952dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4BTFLU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyZHE3PGX6rz%2BRhqTg3NetmxtrJgM1Jgn3GWBay2KFYAiBRvbM8YwptU%2FiR35jGU2N%2FGp8pW3FC%2FtcdcEgDZljDECqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2Fl5Ze5Pbw5jkoFAKtwDwCaRKk6i5iC4oBD0YQjkbr0RspK36OlmMUwWuF9dZ6ZTad9uTP4yJ9oxDuvozuJ1j%2B35FISiOpWIivuijHtqss6HaVykuKF4wZfW3i1ApVzcFVljkby73x7paV6aV5TJlmgnBpRFFry%2FJ3Jk9ho0Zk9ZxHsvr%2FX7ltVumBGWJO9FQDI3qORbQmWftQyLMaMNtGEz3N9hx9CSem2JW56IvA3QMicKsduw7BR%2BzVvlDuol2CsgIHQIaTZFtNFZ0xdnFzaoAFFHrX8rb8ImIfJgrYay0Ws9xoNVm4GiGgM8oO%2Bq9cBfVlq5DTw8xutSGojeXyXWByXlkkmlpIlyBBmUJFQ2OwVe4Q0c8gCB8ZV0kjXf2my8NRqAOezhFXIG4LEAGd2IHfnjDag22KfYpKpt%2BmiKlBn8johJYBLvH6oa0esQ8iXpnt8O70bdAfVxnywqnuYRt6pCCTNAkiPetSS2KQ6cQHxTtNkR%2FyDCHLQfiCU26vjVMo1zyRGu5%2FMjet8SAvgRbLIu0mey6tasBPk7XyQIdD7QfcfJ8dbdGiNBD5mvBBmLNRLp6hdrlg6iihohSvTtauy%2FVofpOWbKmj6BThpOi0Kl4ber%2FB%2BN1V%2FIG0YonclEJop2JfbZz5Iw%2Bf65vwY6pgFsRCEHYxcApVwpn5zcDXqdWJPk3aTpjhXmv15mouTKUZSTG%2BhHjGwmENx7wN7n9n79sibNhKI9qDGuZj4nuVMD6cnKLh4XSuRb44TPkkde5ROxlfLKk5W8dxPsg8wQ3ZTsAwqlJNDAHexx%2FST8tvjZoVfvJB4q1hBFuFgtDCmaMuYPropGOFJ5TA0eJVL%2FnamqdvOHS67X1S62ycYe7edX6ao3rBzq&X-Amz-Signature=9d502ac7adaeba4a8e8ac50253961eedb4d9666dc424a92ff4ce35345f8ee2be&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4BTFLU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyZHE3PGX6rz%2BRhqTg3NetmxtrJgM1Jgn3GWBay2KFYAiBRvbM8YwptU%2FiR35jGU2N%2FGp8pW3FC%2FtcdcEgDZljDECqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2Fl5Ze5Pbw5jkoFAKtwDwCaRKk6i5iC4oBD0YQjkbr0RspK36OlmMUwWuF9dZ6ZTad9uTP4yJ9oxDuvozuJ1j%2B35FISiOpWIivuijHtqss6HaVykuKF4wZfW3i1ApVzcFVljkby73x7paV6aV5TJlmgnBpRFFry%2FJ3Jk9ho0Zk9ZxHsvr%2FX7ltVumBGWJO9FQDI3qORbQmWftQyLMaMNtGEz3N9hx9CSem2JW56IvA3QMicKsduw7BR%2BzVvlDuol2CsgIHQIaTZFtNFZ0xdnFzaoAFFHrX8rb8ImIfJgrYay0Ws9xoNVm4GiGgM8oO%2Bq9cBfVlq5DTw8xutSGojeXyXWByXlkkmlpIlyBBmUJFQ2OwVe4Q0c8gCB8ZV0kjXf2my8NRqAOezhFXIG4LEAGd2IHfnjDag22KfYpKpt%2BmiKlBn8johJYBLvH6oa0esQ8iXpnt8O70bdAfVxnywqnuYRt6pCCTNAkiPetSS2KQ6cQHxTtNkR%2FyDCHLQfiCU26vjVMo1zyRGu5%2FMjet8SAvgRbLIu0mey6tasBPk7XyQIdD7QfcfJ8dbdGiNBD5mvBBmLNRLp6hdrlg6iihohSvTtauy%2FVofpOWbKmj6BThpOi0Kl4ber%2FB%2BN1V%2FIG0YonclEJop2JfbZz5Iw%2Bf65vwY6pgFsRCEHYxcApVwpn5zcDXqdWJPk3aTpjhXmv15mouTKUZSTG%2BhHjGwmENx7wN7n9n79sibNhKI9qDGuZj4nuVMD6cnKLh4XSuRb44TPkkde5ROxlfLKk5W8dxPsg8wQ3ZTsAwqlJNDAHexx%2FST8tvjZoVfvJB4q1hBFuFgtDCmaMuYPropGOFJ5TA0eJVL%2FnamqdvOHS67X1S62ycYe7edX6ao3rBzq&X-Amz-Signature=2e6a6b758b3b7690229fe61e8d012ef1d268090509043282b353548be0cce37e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XXTQKB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3glM9ZRIJFirYi8RF2uFi8eU9xdkgyDwY8MkaCvI9hAiEAxeSKdBWY3RSzM31YQq%2BHnfL82KPYgMAFQe7x0g3FSdYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMNdB%2Bm1SNtVC1j34CrcAxVTcPdX%2FXlKjOjHmsDPnbTTF3o%2FY%2BpEt4n83yPcVrA%2BlYIVyGieemcmZk5QRalcP2NPqbOddTg6VKXOLYvLxcSygfAPd1dCY4aZMLfGQx%2Fg72MkHsBv9osV05RoR61jU98aS8WGEiT6%2FH8Rwhcrxov4voJvA8S2dimXWqKiOpkR9KClGjVS5n%2B%2Fn%2FA9J%2FTs%2Ff1lD%2FI69R6eS%2Fk3EQ%2BWdq%2Fpe13ZAJXW4RdeteZwMnI3EWqom44rj9SbDUZUBNJC%2BfPHlzdZmjyXqQGgJkG0w%2FmXra0IC9HMbPwBoxoqTQ%2Bdxy%2FpwT819bWQF1NJYcUILxuB%2BKaA8R7Tfgupc0uMWAGTZ8IKLjaasA6zU%2FlkCrnAEVdgqMAHWevuzDOPqzMbZZiYYVapQtiUeghxHf1%2F%2BOINCfkAQ8olczWnQKW0qoe%2FQlWpO%2BCtlus4TNrRR4rJHGmwPB3hXZ%2FG04OVOy9oJv6stEm%2FRSks3NXgFx%2Fx2uWb8%2BeJPV0ipZhvwvHWRM%2B%2FE2CIPnpbJclGJhIRLLFSkgeHkDPNbrqvhUHfLO%2By9JX%2BaV%2FLRS55RV4ckMbVBCKTbbPUwCVTrbs%2BCeJxJuETKjnuQYO4uW69%2BGmRWAJfAYrQ8vqAK9qcSB1VF%2FY5MPib%2BL8GOqUBV9XaCXkMQ53LRujeA7wGExPo3E%2BFDjW7r9JC4msQMo0UHM624IH5ZKb6f%2BeS0NE%2Bi1G2j2%2FzS0x2ES7owIqDqs5k1YXi9KKtJ2EPfJammxrQZT7no2Zz9HsGRqSgtGs1u0JJ801XocP2Tr1kDz8EYqBO6Iy6dUv7nF20tdGoYxY47qv13TgWnM8%2F4mieJlU24SYSYuceH87%2BUDfN8w%2Fb4r7MLy%2Bm&X-Amz-Signature=72a199de98abbfbb210a32ee68f4611a9d93f4ca43963c6970984564df540e00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XXTQKB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3glM9ZRIJFirYi8RF2uFi8eU9xdkgyDwY8MkaCvI9hAiEAxeSKdBWY3RSzM31YQq%2BHnfL82KPYgMAFQe7x0g3FSdYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMNdB%2Bm1SNtVC1j34CrcAxVTcPdX%2FXlKjOjHmsDPnbTTF3o%2FY%2BpEt4n83yPcVrA%2BlYIVyGieemcmZk5QRalcP2NPqbOddTg6VKXOLYvLxcSygfAPd1dCY4aZMLfGQx%2Fg72MkHsBv9osV05RoR61jU98aS8WGEiT6%2FH8Rwhcrxov4voJvA8S2dimXWqKiOpkR9KClGjVS5n%2B%2Fn%2FA9J%2FTs%2Ff1lD%2FI69R6eS%2Fk3EQ%2BWdq%2Fpe13ZAJXW4RdeteZwMnI3EWqom44rj9SbDUZUBNJC%2BfPHlzdZmjyXqQGgJkG0w%2FmXra0IC9HMbPwBoxoqTQ%2Bdxy%2FpwT819bWQF1NJYcUILxuB%2BKaA8R7Tfgupc0uMWAGTZ8IKLjaasA6zU%2FlkCrnAEVdgqMAHWevuzDOPqzMbZZiYYVapQtiUeghxHf1%2F%2BOINCfkAQ8olczWnQKW0qoe%2FQlWpO%2BCtlus4TNrRR4rJHGmwPB3hXZ%2FG04OVOy9oJv6stEm%2FRSks3NXgFx%2Fx2uWb8%2BeJPV0ipZhvwvHWRM%2B%2FE2CIPnpbJclGJhIRLLFSkgeHkDPNbrqvhUHfLO%2By9JX%2BaV%2FLRS55RV4ckMbVBCKTbbPUwCVTrbs%2BCeJxJuETKjnuQYO4uW69%2BGmRWAJfAYrQ8vqAK9qcSB1VF%2FY5MPib%2BL8GOqUBV9XaCXkMQ53LRujeA7wGExPo3E%2BFDjW7r9JC4msQMo0UHM624IH5ZKb6f%2BeS0NE%2Bi1G2j2%2FzS0x2ES7owIqDqs5k1YXi9KKtJ2EPfJammxrQZT7no2Zz9HsGRqSgtGs1u0JJ801XocP2Tr1kDz8EYqBO6Iy6dUv7nF20tdGoYxY47qv13TgWnM8%2F4mieJlU24SYSYuceH87%2BUDfN8w%2Fb4r7MLy%2Bm&X-Amz-Signature=cc6ed86912a79dca89e898aed8ad7cf58d0c810ce07d03521fa8cbcafe8f8ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XXTQKB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3glM9ZRIJFirYi8RF2uFi8eU9xdkgyDwY8MkaCvI9hAiEAxeSKdBWY3RSzM31YQq%2BHnfL82KPYgMAFQe7x0g3FSdYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMNdB%2Bm1SNtVC1j34CrcAxVTcPdX%2FXlKjOjHmsDPnbTTF3o%2FY%2BpEt4n83yPcVrA%2BlYIVyGieemcmZk5QRalcP2NPqbOddTg6VKXOLYvLxcSygfAPd1dCY4aZMLfGQx%2Fg72MkHsBv9osV05RoR61jU98aS8WGEiT6%2FH8Rwhcrxov4voJvA8S2dimXWqKiOpkR9KClGjVS5n%2B%2Fn%2FA9J%2FTs%2Ff1lD%2FI69R6eS%2Fk3EQ%2BWdq%2Fpe13ZAJXW4RdeteZwMnI3EWqom44rj9SbDUZUBNJC%2BfPHlzdZmjyXqQGgJkG0w%2FmXra0IC9HMbPwBoxoqTQ%2Bdxy%2FpwT819bWQF1NJYcUILxuB%2BKaA8R7Tfgupc0uMWAGTZ8IKLjaasA6zU%2FlkCrnAEVdgqMAHWevuzDOPqzMbZZiYYVapQtiUeghxHf1%2F%2BOINCfkAQ8olczWnQKW0qoe%2FQlWpO%2BCtlus4TNrRR4rJHGmwPB3hXZ%2FG04OVOy9oJv6stEm%2FRSks3NXgFx%2Fx2uWb8%2BeJPV0ipZhvwvHWRM%2B%2FE2CIPnpbJclGJhIRLLFSkgeHkDPNbrqvhUHfLO%2By9JX%2BaV%2FLRS55RV4ckMbVBCKTbbPUwCVTrbs%2BCeJxJuETKjnuQYO4uW69%2BGmRWAJfAYrQ8vqAK9qcSB1VF%2FY5MPib%2BL8GOqUBV9XaCXkMQ53LRujeA7wGExPo3E%2BFDjW7r9JC4msQMo0UHM624IH5ZKb6f%2BeS0NE%2Bi1G2j2%2FzS0x2ES7owIqDqs5k1YXi9KKtJ2EPfJammxrQZT7no2Zz9HsGRqSgtGs1u0JJ801XocP2Tr1kDz8EYqBO6Iy6dUv7nF20tdGoYxY47qv13TgWnM8%2F4mieJlU24SYSYuceH87%2BUDfN8w%2Fb4r7MLy%2Bm&X-Amz-Signature=db447d37e92697186388af414ce62e3497b5bff560f239696aff41ca517da9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XXTQKB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3glM9ZRIJFirYi8RF2uFi8eU9xdkgyDwY8MkaCvI9hAiEAxeSKdBWY3RSzM31YQq%2BHnfL82KPYgMAFQe7x0g3FSdYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMNdB%2Bm1SNtVC1j34CrcAxVTcPdX%2FXlKjOjHmsDPnbTTF3o%2FY%2BpEt4n83yPcVrA%2BlYIVyGieemcmZk5QRalcP2NPqbOddTg6VKXOLYvLxcSygfAPd1dCY4aZMLfGQx%2Fg72MkHsBv9osV05RoR61jU98aS8WGEiT6%2FH8Rwhcrxov4voJvA8S2dimXWqKiOpkR9KClGjVS5n%2B%2Fn%2FA9J%2FTs%2Ff1lD%2FI69R6eS%2Fk3EQ%2BWdq%2Fpe13ZAJXW4RdeteZwMnI3EWqom44rj9SbDUZUBNJC%2BfPHlzdZmjyXqQGgJkG0w%2FmXra0IC9HMbPwBoxoqTQ%2Bdxy%2FpwT819bWQF1NJYcUILxuB%2BKaA8R7Tfgupc0uMWAGTZ8IKLjaasA6zU%2FlkCrnAEVdgqMAHWevuzDOPqzMbZZiYYVapQtiUeghxHf1%2F%2BOINCfkAQ8olczWnQKW0qoe%2FQlWpO%2BCtlus4TNrRR4rJHGmwPB3hXZ%2FG04OVOy9oJv6stEm%2FRSks3NXgFx%2Fx2uWb8%2BeJPV0ipZhvwvHWRM%2B%2FE2CIPnpbJclGJhIRLLFSkgeHkDPNbrqvhUHfLO%2By9JX%2BaV%2FLRS55RV4ckMbVBCKTbbPUwCVTrbs%2BCeJxJuETKjnuQYO4uW69%2BGmRWAJfAYrQ8vqAK9qcSB1VF%2FY5MPib%2BL8GOqUBV9XaCXkMQ53LRujeA7wGExPo3E%2BFDjW7r9JC4msQMo0UHM624IH5ZKb6f%2BeS0NE%2Bi1G2j2%2FzS0x2ES7owIqDqs5k1YXi9KKtJ2EPfJammxrQZT7no2Zz9HsGRqSgtGs1u0JJ801XocP2Tr1kDz8EYqBO6Iy6dUv7nF20tdGoYxY47qv13TgWnM8%2F4mieJlU24SYSYuceH87%2BUDfN8w%2Fb4r7MLy%2Bm&X-Amz-Signature=20705edf501f64d13a413e11777067ad57e04c0bcfdcf30db12b3c7523913f87&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XXTQKB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3glM9ZRIJFirYi8RF2uFi8eU9xdkgyDwY8MkaCvI9hAiEAxeSKdBWY3RSzM31YQq%2BHnfL82KPYgMAFQe7x0g3FSdYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMNdB%2Bm1SNtVC1j34CrcAxVTcPdX%2FXlKjOjHmsDPnbTTF3o%2FY%2BpEt4n83yPcVrA%2BlYIVyGieemcmZk5QRalcP2NPqbOddTg6VKXOLYvLxcSygfAPd1dCY4aZMLfGQx%2Fg72MkHsBv9osV05RoR61jU98aS8WGEiT6%2FH8Rwhcrxov4voJvA8S2dimXWqKiOpkR9KClGjVS5n%2B%2Fn%2FA9J%2FTs%2Ff1lD%2FI69R6eS%2Fk3EQ%2BWdq%2Fpe13ZAJXW4RdeteZwMnI3EWqom44rj9SbDUZUBNJC%2BfPHlzdZmjyXqQGgJkG0w%2FmXra0IC9HMbPwBoxoqTQ%2Bdxy%2FpwT819bWQF1NJYcUILxuB%2BKaA8R7Tfgupc0uMWAGTZ8IKLjaasA6zU%2FlkCrnAEVdgqMAHWevuzDOPqzMbZZiYYVapQtiUeghxHf1%2F%2BOINCfkAQ8olczWnQKW0qoe%2FQlWpO%2BCtlus4TNrRR4rJHGmwPB3hXZ%2FG04OVOy9oJv6stEm%2FRSks3NXgFx%2Fx2uWb8%2BeJPV0ipZhvwvHWRM%2B%2FE2CIPnpbJclGJhIRLLFSkgeHkDPNbrqvhUHfLO%2By9JX%2BaV%2FLRS55RV4ckMbVBCKTbbPUwCVTrbs%2BCeJxJuETKjnuQYO4uW69%2BGmRWAJfAYrQ8vqAK9qcSB1VF%2FY5MPib%2BL8GOqUBV9XaCXkMQ53LRujeA7wGExPo3E%2BFDjW7r9JC4msQMo0UHM624IH5ZKb6f%2BeS0NE%2Bi1G2j2%2FzS0x2ES7owIqDqs5k1YXi9KKtJ2EPfJammxrQZT7no2Zz9HsGRqSgtGs1u0JJ801XocP2Tr1kDz8EYqBO6Iy6dUv7nF20tdGoYxY47qv13TgWnM8%2F4mieJlU24SYSYuceH87%2BUDfN8w%2Fb4r7MLy%2Bm&X-Amz-Signature=b7e38d46109c695519a749f50fad2ee534b122f72aa6821e1f0276855123c5ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XXTQKB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3glM9ZRIJFirYi8RF2uFi8eU9xdkgyDwY8MkaCvI9hAiEAxeSKdBWY3RSzM31YQq%2BHnfL82KPYgMAFQe7x0g3FSdYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMNdB%2Bm1SNtVC1j34CrcAxVTcPdX%2FXlKjOjHmsDPnbTTF3o%2FY%2BpEt4n83yPcVrA%2BlYIVyGieemcmZk5QRalcP2NPqbOddTg6VKXOLYvLxcSygfAPd1dCY4aZMLfGQx%2Fg72MkHsBv9osV05RoR61jU98aS8WGEiT6%2FH8Rwhcrxov4voJvA8S2dimXWqKiOpkR9KClGjVS5n%2B%2Fn%2FA9J%2FTs%2Ff1lD%2FI69R6eS%2Fk3EQ%2BWdq%2Fpe13ZAJXW4RdeteZwMnI3EWqom44rj9SbDUZUBNJC%2BfPHlzdZmjyXqQGgJkG0w%2FmXra0IC9HMbPwBoxoqTQ%2Bdxy%2FpwT819bWQF1NJYcUILxuB%2BKaA8R7Tfgupc0uMWAGTZ8IKLjaasA6zU%2FlkCrnAEVdgqMAHWevuzDOPqzMbZZiYYVapQtiUeghxHf1%2F%2BOINCfkAQ8olczWnQKW0qoe%2FQlWpO%2BCtlus4TNrRR4rJHGmwPB3hXZ%2FG04OVOy9oJv6stEm%2FRSks3NXgFx%2Fx2uWb8%2BeJPV0ipZhvwvHWRM%2B%2FE2CIPnpbJclGJhIRLLFSkgeHkDPNbrqvhUHfLO%2By9JX%2BaV%2FLRS55RV4ckMbVBCKTbbPUwCVTrbs%2BCeJxJuETKjnuQYO4uW69%2BGmRWAJfAYrQ8vqAK9qcSB1VF%2FY5MPib%2BL8GOqUBV9XaCXkMQ53LRujeA7wGExPo3E%2BFDjW7r9JC4msQMo0UHM624IH5ZKb6f%2BeS0NE%2Bi1G2j2%2FzS0x2ES7owIqDqs5k1YXi9KKtJ2EPfJammxrQZT7no2Zz9HsGRqSgtGs1u0JJ801XocP2Tr1kDz8EYqBO6Iy6dUv7nF20tdGoYxY47qv13TgWnM8%2F4mieJlU24SYSYuceH87%2BUDfN8w%2Fb4r7MLy%2Bm&X-Amz-Signature=5e0da2c47ea32d5e87c3cb0b78b37cc2171403e3d8f6a4c9e12b8eb218d20b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XXTQKB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3glM9ZRIJFirYi8RF2uFi8eU9xdkgyDwY8MkaCvI9hAiEAxeSKdBWY3RSzM31YQq%2BHnfL82KPYgMAFQe7x0g3FSdYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMNdB%2Bm1SNtVC1j34CrcAxVTcPdX%2FXlKjOjHmsDPnbTTF3o%2FY%2BpEt4n83yPcVrA%2BlYIVyGieemcmZk5QRalcP2NPqbOddTg6VKXOLYvLxcSygfAPd1dCY4aZMLfGQx%2Fg72MkHsBv9osV05RoR61jU98aS8WGEiT6%2FH8Rwhcrxov4voJvA8S2dimXWqKiOpkR9KClGjVS5n%2B%2Fn%2FA9J%2FTs%2Ff1lD%2FI69R6eS%2Fk3EQ%2BWdq%2Fpe13ZAJXW4RdeteZwMnI3EWqom44rj9SbDUZUBNJC%2BfPHlzdZmjyXqQGgJkG0w%2FmXra0IC9HMbPwBoxoqTQ%2Bdxy%2FpwT819bWQF1NJYcUILxuB%2BKaA8R7Tfgupc0uMWAGTZ8IKLjaasA6zU%2FlkCrnAEVdgqMAHWevuzDOPqzMbZZiYYVapQtiUeghxHf1%2F%2BOINCfkAQ8olczWnQKW0qoe%2FQlWpO%2BCtlus4TNrRR4rJHGmwPB3hXZ%2FG04OVOy9oJv6stEm%2FRSks3NXgFx%2Fx2uWb8%2BeJPV0ipZhvwvHWRM%2B%2FE2CIPnpbJclGJhIRLLFSkgeHkDPNbrqvhUHfLO%2By9JX%2BaV%2FLRS55RV4ckMbVBCKTbbPUwCVTrbs%2BCeJxJuETKjnuQYO4uW69%2BGmRWAJfAYrQ8vqAK9qcSB1VF%2FY5MPib%2BL8GOqUBV9XaCXkMQ53LRujeA7wGExPo3E%2BFDjW7r9JC4msQMo0UHM624IH5ZKb6f%2BeS0NE%2Bi1G2j2%2FzS0x2ES7owIqDqs5k1YXi9KKtJ2EPfJammxrQZT7no2Zz9HsGRqSgtGs1u0JJ801XocP2Tr1kDz8EYqBO6Iy6dUv7nF20tdGoYxY47qv13TgWnM8%2F4mieJlU24SYSYuceH87%2BUDfN8w%2Fb4r7MLy%2Bm&X-Amz-Signature=4b8a7a1382041e3335ad0bbc17a74da95df0b7f9ffe10695926e2d03183a7dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

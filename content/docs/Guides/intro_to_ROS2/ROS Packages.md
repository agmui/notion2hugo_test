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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMHCWMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDOPBghGtfIOWjxmmJUlw4BbJou1x5PrVz6861%2Bby2FSAiEAxhizseRYRWvl82e2XasXgMrssQjcjKlEZdX18dpcYkAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0OWn90dc9hPc5uXircA2P2FQpGNyXRhhjghYrb5cYWJIXdqJv9oDSGxrKWg6h0cZ8NW9L7PN8DQlhMMlyNqqcco8tsMAjoVy59OdIoammGT9lQmPUo1SCxR2VWpe%2BLOqKPjUasvi35qMI0TVxbFUZ1usvpArM1Lo%2Bz2Au6my6T2p59h9TRWh%2BXI0agacLtgreW7%2Bl9m3zN7NeGHYqSZxb1Z8NKbQJVOH%2FVKez01A%2FkUQDvbRIt3kjQLs3Mrc%2FGRz7O2iTTIanfzqZnI7XM0mxwx8AuWyFlFwTl8gHXkhy3W%2F6yFMJYLXYKCTn%2B0AToal%2Flke6Qfv9aWpAmfviW61RWcaXYqcsQjLsNZkMwtZvpWEz2gto3%2F2I6RC31tQ9eqtvi8VaMMkNEQt58wjGycHlfHmxi%2F1mq3zxAp5RYuBuIWokp5Z59n%2BjLHbjWv3p4nK%2Beqv3exAKnTeRGI8GWbvTc22qvdgnliPkMWwubLCnvRPi%2BRjuIkcm8uOpj64LXLkNCpqwfXHAhcfPKPsE75fxjYJ2jPa0MX9MUV8Jt1BLP%2F8uy1BrlxwSyjLR701DhAn3f8iXHGLSNyG%2BltUpYxzxNQ6Oayx%2B3%2Fj%2Borbp%2BAlBRa9HgElLt8niTM9d0e0PubSMWe0ikAzdzoU0jMLfYwsEGOqUBjs453%2BRYji3rQewVh0cPaFOcmAidK7vJbEPhT8LKvT1RlugxOpgMG09eU%2Fcx6r1X%2FEMyerRb0raSfxV3CDtcWUdCIV0CHC3%2BsQ9cTBEEgqGO55dao%2FRgGaO68NJIx1MmNbo8vK553rwJnZi54Ee7ZvtAg%2BqGMSiaW45uB3zjS9UbvkdrTKFJEbM5yKH9Xt5AtI12zALVVnlf9sCoVCBc2dUeFrLU&X-Amz-Signature=c3667cf5055f8d924c715be78327d944dc62c044990e5389cc17721db0bf1b12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMHCWMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDOPBghGtfIOWjxmmJUlw4BbJou1x5PrVz6861%2Bby2FSAiEAxhizseRYRWvl82e2XasXgMrssQjcjKlEZdX18dpcYkAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0OWn90dc9hPc5uXircA2P2FQpGNyXRhhjghYrb5cYWJIXdqJv9oDSGxrKWg6h0cZ8NW9L7PN8DQlhMMlyNqqcco8tsMAjoVy59OdIoammGT9lQmPUo1SCxR2VWpe%2BLOqKPjUasvi35qMI0TVxbFUZ1usvpArM1Lo%2Bz2Au6my6T2p59h9TRWh%2BXI0agacLtgreW7%2Bl9m3zN7NeGHYqSZxb1Z8NKbQJVOH%2FVKez01A%2FkUQDvbRIt3kjQLs3Mrc%2FGRz7O2iTTIanfzqZnI7XM0mxwx8AuWyFlFwTl8gHXkhy3W%2F6yFMJYLXYKCTn%2B0AToal%2Flke6Qfv9aWpAmfviW61RWcaXYqcsQjLsNZkMwtZvpWEz2gto3%2F2I6RC31tQ9eqtvi8VaMMkNEQt58wjGycHlfHmxi%2F1mq3zxAp5RYuBuIWokp5Z59n%2BjLHbjWv3p4nK%2Beqv3exAKnTeRGI8GWbvTc22qvdgnliPkMWwubLCnvRPi%2BRjuIkcm8uOpj64LXLkNCpqwfXHAhcfPKPsE75fxjYJ2jPa0MX9MUV8Jt1BLP%2F8uy1BrlxwSyjLR701DhAn3f8iXHGLSNyG%2BltUpYxzxNQ6Oayx%2B3%2Fj%2Borbp%2BAlBRa9HgElLt8niTM9d0e0PubSMWe0ikAzdzoU0jMLfYwsEGOqUBjs453%2BRYji3rQewVh0cPaFOcmAidK7vJbEPhT8LKvT1RlugxOpgMG09eU%2Fcx6r1X%2FEMyerRb0raSfxV3CDtcWUdCIV0CHC3%2BsQ9cTBEEgqGO55dao%2FRgGaO68NJIx1MmNbo8vK553rwJnZi54Ee7ZvtAg%2BqGMSiaW45uB3zjS9UbvkdrTKFJEbM5yKH9Xt5AtI12zALVVnlf9sCoVCBc2dUeFrLU&X-Amz-Signature=725b5db055a26e782e71720b71c9f5fdc533f0e654a52fc7aae66001a7e5a28b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMHCWMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDOPBghGtfIOWjxmmJUlw4BbJou1x5PrVz6861%2Bby2FSAiEAxhizseRYRWvl82e2XasXgMrssQjcjKlEZdX18dpcYkAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0OWn90dc9hPc5uXircA2P2FQpGNyXRhhjghYrb5cYWJIXdqJv9oDSGxrKWg6h0cZ8NW9L7PN8DQlhMMlyNqqcco8tsMAjoVy59OdIoammGT9lQmPUo1SCxR2VWpe%2BLOqKPjUasvi35qMI0TVxbFUZ1usvpArM1Lo%2Bz2Au6my6T2p59h9TRWh%2BXI0agacLtgreW7%2Bl9m3zN7NeGHYqSZxb1Z8NKbQJVOH%2FVKez01A%2FkUQDvbRIt3kjQLs3Mrc%2FGRz7O2iTTIanfzqZnI7XM0mxwx8AuWyFlFwTl8gHXkhy3W%2F6yFMJYLXYKCTn%2B0AToal%2Flke6Qfv9aWpAmfviW61RWcaXYqcsQjLsNZkMwtZvpWEz2gto3%2F2I6RC31tQ9eqtvi8VaMMkNEQt58wjGycHlfHmxi%2F1mq3zxAp5RYuBuIWokp5Z59n%2BjLHbjWv3p4nK%2Beqv3exAKnTeRGI8GWbvTc22qvdgnliPkMWwubLCnvRPi%2BRjuIkcm8uOpj64LXLkNCpqwfXHAhcfPKPsE75fxjYJ2jPa0MX9MUV8Jt1BLP%2F8uy1BrlxwSyjLR701DhAn3f8iXHGLSNyG%2BltUpYxzxNQ6Oayx%2B3%2Fj%2Borbp%2BAlBRa9HgElLt8niTM9d0e0PubSMWe0ikAzdzoU0jMLfYwsEGOqUBjs453%2BRYji3rQewVh0cPaFOcmAidK7vJbEPhT8LKvT1RlugxOpgMG09eU%2Fcx6r1X%2FEMyerRb0raSfxV3CDtcWUdCIV0CHC3%2BsQ9cTBEEgqGO55dao%2FRgGaO68NJIx1MmNbo8vK553rwJnZi54Ee7ZvtAg%2BqGMSiaW45uB3zjS9UbvkdrTKFJEbM5yKH9Xt5AtI12zALVVnlf9sCoVCBc2dUeFrLU&X-Amz-Signature=58f00a5faf89d54d2073f195f1f062e2843af8c6466ec661cad94b081727086b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMHCWMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDOPBghGtfIOWjxmmJUlw4BbJou1x5PrVz6861%2Bby2FSAiEAxhizseRYRWvl82e2XasXgMrssQjcjKlEZdX18dpcYkAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0OWn90dc9hPc5uXircA2P2FQpGNyXRhhjghYrb5cYWJIXdqJv9oDSGxrKWg6h0cZ8NW9L7PN8DQlhMMlyNqqcco8tsMAjoVy59OdIoammGT9lQmPUo1SCxR2VWpe%2BLOqKPjUasvi35qMI0TVxbFUZ1usvpArM1Lo%2Bz2Au6my6T2p59h9TRWh%2BXI0agacLtgreW7%2Bl9m3zN7NeGHYqSZxb1Z8NKbQJVOH%2FVKez01A%2FkUQDvbRIt3kjQLs3Mrc%2FGRz7O2iTTIanfzqZnI7XM0mxwx8AuWyFlFwTl8gHXkhy3W%2F6yFMJYLXYKCTn%2B0AToal%2Flke6Qfv9aWpAmfviW61RWcaXYqcsQjLsNZkMwtZvpWEz2gto3%2F2I6RC31tQ9eqtvi8VaMMkNEQt58wjGycHlfHmxi%2F1mq3zxAp5RYuBuIWokp5Z59n%2BjLHbjWv3p4nK%2Beqv3exAKnTeRGI8GWbvTc22qvdgnliPkMWwubLCnvRPi%2BRjuIkcm8uOpj64LXLkNCpqwfXHAhcfPKPsE75fxjYJ2jPa0MX9MUV8Jt1BLP%2F8uy1BrlxwSyjLR701DhAn3f8iXHGLSNyG%2BltUpYxzxNQ6Oayx%2B3%2Fj%2Borbp%2BAlBRa9HgElLt8niTM9d0e0PubSMWe0ikAzdzoU0jMLfYwsEGOqUBjs453%2BRYji3rQewVh0cPaFOcmAidK7vJbEPhT8LKvT1RlugxOpgMG09eU%2Fcx6r1X%2FEMyerRb0raSfxV3CDtcWUdCIV0CHC3%2BsQ9cTBEEgqGO55dao%2FRgGaO68NJIx1MmNbo8vK553rwJnZi54Ee7ZvtAg%2BqGMSiaW45uB3zjS9UbvkdrTKFJEbM5yKH9Xt5AtI12zALVVnlf9sCoVCBc2dUeFrLU&X-Amz-Signature=f8cd8c67078facb63a00e210bf5f640a4a811f328f530323f5e571ade4d6c401&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMHCWMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDOPBghGtfIOWjxmmJUlw4BbJou1x5PrVz6861%2Bby2FSAiEAxhizseRYRWvl82e2XasXgMrssQjcjKlEZdX18dpcYkAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0OWn90dc9hPc5uXircA2P2FQpGNyXRhhjghYrb5cYWJIXdqJv9oDSGxrKWg6h0cZ8NW9L7PN8DQlhMMlyNqqcco8tsMAjoVy59OdIoammGT9lQmPUo1SCxR2VWpe%2BLOqKPjUasvi35qMI0TVxbFUZ1usvpArM1Lo%2Bz2Au6my6T2p59h9TRWh%2BXI0agacLtgreW7%2Bl9m3zN7NeGHYqSZxb1Z8NKbQJVOH%2FVKez01A%2FkUQDvbRIt3kjQLs3Mrc%2FGRz7O2iTTIanfzqZnI7XM0mxwx8AuWyFlFwTl8gHXkhy3W%2F6yFMJYLXYKCTn%2B0AToal%2Flke6Qfv9aWpAmfviW61RWcaXYqcsQjLsNZkMwtZvpWEz2gto3%2F2I6RC31tQ9eqtvi8VaMMkNEQt58wjGycHlfHmxi%2F1mq3zxAp5RYuBuIWokp5Z59n%2BjLHbjWv3p4nK%2Beqv3exAKnTeRGI8GWbvTc22qvdgnliPkMWwubLCnvRPi%2BRjuIkcm8uOpj64LXLkNCpqwfXHAhcfPKPsE75fxjYJ2jPa0MX9MUV8Jt1BLP%2F8uy1BrlxwSyjLR701DhAn3f8iXHGLSNyG%2BltUpYxzxNQ6Oayx%2B3%2Fj%2Borbp%2BAlBRa9HgElLt8niTM9d0e0PubSMWe0ikAzdzoU0jMLfYwsEGOqUBjs453%2BRYji3rQewVh0cPaFOcmAidK7vJbEPhT8LKvT1RlugxOpgMG09eU%2Fcx6r1X%2FEMyerRb0raSfxV3CDtcWUdCIV0CHC3%2BsQ9cTBEEgqGO55dao%2FRgGaO68NJIx1MmNbo8vK553rwJnZi54Ee7ZvtAg%2BqGMSiaW45uB3zjS9UbvkdrTKFJEbM5yKH9Xt5AtI12zALVVnlf9sCoVCBc2dUeFrLU&X-Amz-Signature=ea4cf4b99061f8dbcc11f1142784a3d6e4e296e0d1cd8bb44f0ab74feb7c5606&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMHCWMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDOPBghGtfIOWjxmmJUlw4BbJou1x5PrVz6861%2Bby2FSAiEAxhizseRYRWvl82e2XasXgMrssQjcjKlEZdX18dpcYkAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0OWn90dc9hPc5uXircA2P2FQpGNyXRhhjghYrb5cYWJIXdqJv9oDSGxrKWg6h0cZ8NW9L7PN8DQlhMMlyNqqcco8tsMAjoVy59OdIoammGT9lQmPUo1SCxR2VWpe%2BLOqKPjUasvi35qMI0TVxbFUZ1usvpArM1Lo%2Bz2Au6my6T2p59h9TRWh%2BXI0agacLtgreW7%2Bl9m3zN7NeGHYqSZxb1Z8NKbQJVOH%2FVKez01A%2FkUQDvbRIt3kjQLs3Mrc%2FGRz7O2iTTIanfzqZnI7XM0mxwx8AuWyFlFwTl8gHXkhy3W%2F6yFMJYLXYKCTn%2B0AToal%2Flke6Qfv9aWpAmfviW61RWcaXYqcsQjLsNZkMwtZvpWEz2gto3%2F2I6RC31tQ9eqtvi8VaMMkNEQt58wjGycHlfHmxi%2F1mq3zxAp5RYuBuIWokp5Z59n%2BjLHbjWv3p4nK%2Beqv3exAKnTeRGI8GWbvTc22qvdgnliPkMWwubLCnvRPi%2BRjuIkcm8uOpj64LXLkNCpqwfXHAhcfPKPsE75fxjYJ2jPa0MX9MUV8Jt1BLP%2F8uy1BrlxwSyjLR701DhAn3f8iXHGLSNyG%2BltUpYxzxNQ6Oayx%2B3%2Fj%2Borbp%2BAlBRa9HgElLt8niTM9d0e0PubSMWe0ikAzdzoU0jMLfYwsEGOqUBjs453%2BRYji3rQewVh0cPaFOcmAidK7vJbEPhT8LKvT1RlugxOpgMG09eU%2Fcx6r1X%2FEMyerRb0raSfxV3CDtcWUdCIV0CHC3%2BsQ9cTBEEgqGO55dao%2FRgGaO68NJIx1MmNbo8vK553rwJnZi54Ee7ZvtAg%2BqGMSiaW45uB3zjS9UbvkdrTKFJEbM5yKH9Xt5AtI12zALVVnlf9sCoVCBc2dUeFrLU&X-Amz-Signature=0e4632b6b4610a521fcc6cfd566062ea5c86da4a8cb5321e10890ad4b27e398b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMHCWMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDOPBghGtfIOWjxmmJUlw4BbJou1x5PrVz6861%2Bby2FSAiEAxhizseRYRWvl82e2XasXgMrssQjcjKlEZdX18dpcYkAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0OWn90dc9hPc5uXircA2P2FQpGNyXRhhjghYrb5cYWJIXdqJv9oDSGxrKWg6h0cZ8NW9L7PN8DQlhMMlyNqqcco8tsMAjoVy59OdIoammGT9lQmPUo1SCxR2VWpe%2BLOqKPjUasvi35qMI0TVxbFUZ1usvpArM1Lo%2Bz2Au6my6T2p59h9TRWh%2BXI0agacLtgreW7%2Bl9m3zN7NeGHYqSZxb1Z8NKbQJVOH%2FVKez01A%2FkUQDvbRIt3kjQLs3Mrc%2FGRz7O2iTTIanfzqZnI7XM0mxwx8AuWyFlFwTl8gHXkhy3W%2F6yFMJYLXYKCTn%2B0AToal%2Flke6Qfv9aWpAmfviW61RWcaXYqcsQjLsNZkMwtZvpWEz2gto3%2F2I6RC31tQ9eqtvi8VaMMkNEQt58wjGycHlfHmxi%2F1mq3zxAp5RYuBuIWokp5Z59n%2BjLHbjWv3p4nK%2Beqv3exAKnTeRGI8GWbvTc22qvdgnliPkMWwubLCnvRPi%2BRjuIkcm8uOpj64LXLkNCpqwfXHAhcfPKPsE75fxjYJ2jPa0MX9MUV8Jt1BLP%2F8uy1BrlxwSyjLR701DhAn3f8iXHGLSNyG%2BltUpYxzxNQ6Oayx%2B3%2Fj%2Borbp%2BAlBRa9HgElLt8niTM9d0e0PubSMWe0ikAzdzoU0jMLfYwsEGOqUBjs453%2BRYji3rQewVh0cPaFOcmAidK7vJbEPhT8LKvT1RlugxOpgMG09eU%2Fcx6r1X%2FEMyerRb0raSfxV3CDtcWUdCIV0CHC3%2BsQ9cTBEEgqGO55dao%2FRgGaO68NJIx1MmNbo8vK553rwJnZi54Ee7ZvtAg%2BqGMSiaW45uB3zjS9UbvkdrTKFJEbM5yKH9Xt5AtI12zALVVnlf9sCoVCBc2dUeFrLU&X-Amz-Signature=2b8b545dfb5e3163f8de10b75cfed59118c065ff4f688eb0f8662f9cb79dfb53&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

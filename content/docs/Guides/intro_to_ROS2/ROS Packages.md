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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJ46VF6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICgVIPqxCyBs%2F%2BsvM0qZUxuzd24LsmUWQ9it2UrbSN5PAiEA7souKs7h6TR%2BDkJzkmaHDGMcdiCZKqLB1xpImGSYZ%2BYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuMjUMYp0KXUDJRKyrcA%2FIDm8PzFToa6czMZQvyxcCg%2BO6hdvb9N%2FYWMVHBFttDvqc4ZCKrkx%2FU9e0Q27bdW7LSVT6U1uLBaWGXBw5W5Ho5PxwB84aDE0k3aP2f5jwywInJD%2Fg8cP%2FDCqwpfLdIOMEPGmEu7%2B7bjg3uZCoqgzs4cmN3zJmrqHORPfq%2BjKuxibsYdLRcAu7B%2F8bv4XQ%2BvAtPYa601EIR24sTr8bmXaJrOxeYOF5NALqrGZGR1XP6GJd8Zu7IitVHJQANX9bzb3CSLtov86eOO8Pmi7b2RWntFGP%2FDMQUwY8dZDtbRq3X4n3xcfURnQ9%2BOqDYV3fTUmftUZkqVJ67OzKx%2BJwZswdRvumSbhylhS9atoEum4%2FUyr4zRq7OQh1J2J6j67ATqVaqHFqx8AYU3I03VT03JlKI03XnMsFW5zec6WZ8Z7zlkLhX5ppX%2BJfT4OziDiWXDXJcV78Fh3hYn0dblBOHD%2BhnoQN19ARQ6m7VuFbEeyqpn1FsVLY6BhzdRK27m4WhPqR%2BAiPpCRw9hFs%2BuRC0C4c0Xl68DKPqcvASfiD96iGUht43fEqGl8vxBlbGgI3X2Sf28NcI5sKlZwwdxfMdorKYjlUpvGY8PPr1NpTwFl1kuwHT96EIUA9gqwbWMK7P6MMGOqUBCFKxraCyadneqbX4MGVBvDu%2Fm83NjoD%2FmkfsMxlcZVeOw%2Bs86HZBS3Lf7wuVCM%2Ftaz7vGLQrs0zndVDk7N6JnqnfWwbw9RudSALWZ6QO23dM7WHCt6OEn89ZCCDbUXPMI2IbvwogkNhoJ7M8YEP%2FJ%2F1Ua%2Bw6BZvR2ANCUx2zXWO325NrfY6UZp7fg9K%2FIfgnbcB28lis8v929OC11ib1khi2YBNM&X-Amz-Signature=478a63e6daa0ddf8d0807a67dbfd73df8233e26d27b5ab6eca6c4a8e106cbe45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJ46VF6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICgVIPqxCyBs%2F%2BsvM0qZUxuzd24LsmUWQ9it2UrbSN5PAiEA7souKs7h6TR%2BDkJzkmaHDGMcdiCZKqLB1xpImGSYZ%2BYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuMjUMYp0KXUDJRKyrcA%2FIDm8PzFToa6czMZQvyxcCg%2BO6hdvb9N%2FYWMVHBFttDvqc4ZCKrkx%2FU9e0Q27bdW7LSVT6U1uLBaWGXBw5W5Ho5PxwB84aDE0k3aP2f5jwywInJD%2Fg8cP%2FDCqwpfLdIOMEPGmEu7%2B7bjg3uZCoqgzs4cmN3zJmrqHORPfq%2BjKuxibsYdLRcAu7B%2F8bv4XQ%2BvAtPYa601EIR24sTr8bmXaJrOxeYOF5NALqrGZGR1XP6GJd8Zu7IitVHJQANX9bzb3CSLtov86eOO8Pmi7b2RWntFGP%2FDMQUwY8dZDtbRq3X4n3xcfURnQ9%2BOqDYV3fTUmftUZkqVJ67OzKx%2BJwZswdRvumSbhylhS9atoEum4%2FUyr4zRq7OQh1J2J6j67ATqVaqHFqx8AYU3I03VT03JlKI03XnMsFW5zec6WZ8Z7zlkLhX5ppX%2BJfT4OziDiWXDXJcV78Fh3hYn0dblBOHD%2BhnoQN19ARQ6m7VuFbEeyqpn1FsVLY6BhzdRK27m4WhPqR%2BAiPpCRw9hFs%2BuRC0C4c0Xl68DKPqcvASfiD96iGUht43fEqGl8vxBlbGgI3X2Sf28NcI5sKlZwwdxfMdorKYjlUpvGY8PPr1NpTwFl1kuwHT96EIUA9gqwbWMK7P6MMGOqUBCFKxraCyadneqbX4MGVBvDu%2Fm83NjoD%2FmkfsMxlcZVeOw%2Bs86HZBS3Lf7wuVCM%2Ftaz7vGLQrs0zndVDk7N6JnqnfWwbw9RudSALWZ6QO23dM7WHCt6OEn89ZCCDbUXPMI2IbvwogkNhoJ7M8YEP%2FJ%2F1Ua%2Bw6BZvR2ANCUx2zXWO325NrfY6UZp7fg9K%2FIfgnbcB28lis8v929OC11ib1khi2YBNM&X-Amz-Signature=e7bddfbf63937c493431302fb72e9cc4feb423efa454225afbc9b2021b454e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJ46VF6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICgVIPqxCyBs%2F%2BsvM0qZUxuzd24LsmUWQ9it2UrbSN5PAiEA7souKs7h6TR%2BDkJzkmaHDGMcdiCZKqLB1xpImGSYZ%2BYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuMjUMYp0KXUDJRKyrcA%2FIDm8PzFToa6czMZQvyxcCg%2BO6hdvb9N%2FYWMVHBFttDvqc4ZCKrkx%2FU9e0Q27bdW7LSVT6U1uLBaWGXBw5W5Ho5PxwB84aDE0k3aP2f5jwywInJD%2Fg8cP%2FDCqwpfLdIOMEPGmEu7%2B7bjg3uZCoqgzs4cmN3zJmrqHORPfq%2BjKuxibsYdLRcAu7B%2F8bv4XQ%2BvAtPYa601EIR24sTr8bmXaJrOxeYOF5NALqrGZGR1XP6GJd8Zu7IitVHJQANX9bzb3CSLtov86eOO8Pmi7b2RWntFGP%2FDMQUwY8dZDtbRq3X4n3xcfURnQ9%2BOqDYV3fTUmftUZkqVJ67OzKx%2BJwZswdRvumSbhylhS9atoEum4%2FUyr4zRq7OQh1J2J6j67ATqVaqHFqx8AYU3I03VT03JlKI03XnMsFW5zec6WZ8Z7zlkLhX5ppX%2BJfT4OziDiWXDXJcV78Fh3hYn0dblBOHD%2BhnoQN19ARQ6m7VuFbEeyqpn1FsVLY6BhzdRK27m4WhPqR%2BAiPpCRw9hFs%2BuRC0C4c0Xl68DKPqcvASfiD96iGUht43fEqGl8vxBlbGgI3X2Sf28NcI5sKlZwwdxfMdorKYjlUpvGY8PPr1NpTwFl1kuwHT96EIUA9gqwbWMK7P6MMGOqUBCFKxraCyadneqbX4MGVBvDu%2Fm83NjoD%2FmkfsMxlcZVeOw%2Bs86HZBS3Lf7wuVCM%2Ftaz7vGLQrs0zndVDk7N6JnqnfWwbw9RudSALWZ6QO23dM7WHCt6OEn89ZCCDbUXPMI2IbvwogkNhoJ7M8YEP%2FJ%2F1Ua%2Bw6BZvR2ANCUx2zXWO325NrfY6UZp7fg9K%2FIfgnbcB28lis8v929OC11ib1khi2YBNM&X-Amz-Signature=3d27f11f08b92a164a6a38d45ce8e176a520c202792fb7e01f6c3fe9d213506f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJ46VF6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICgVIPqxCyBs%2F%2BsvM0qZUxuzd24LsmUWQ9it2UrbSN5PAiEA7souKs7h6TR%2BDkJzkmaHDGMcdiCZKqLB1xpImGSYZ%2BYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuMjUMYp0KXUDJRKyrcA%2FIDm8PzFToa6czMZQvyxcCg%2BO6hdvb9N%2FYWMVHBFttDvqc4ZCKrkx%2FU9e0Q27bdW7LSVT6U1uLBaWGXBw5W5Ho5PxwB84aDE0k3aP2f5jwywInJD%2Fg8cP%2FDCqwpfLdIOMEPGmEu7%2B7bjg3uZCoqgzs4cmN3zJmrqHORPfq%2BjKuxibsYdLRcAu7B%2F8bv4XQ%2BvAtPYa601EIR24sTr8bmXaJrOxeYOF5NALqrGZGR1XP6GJd8Zu7IitVHJQANX9bzb3CSLtov86eOO8Pmi7b2RWntFGP%2FDMQUwY8dZDtbRq3X4n3xcfURnQ9%2BOqDYV3fTUmftUZkqVJ67OzKx%2BJwZswdRvumSbhylhS9atoEum4%2FUyr4zRq7OQh1J2J6j67ATqVaqHFqx8AYU3I03VT03JlKI03XnMsFW5zec6WZ8Z7zlkLhX5ppX%2BJfT4OziDiWXDXJcV78Fh3hYn0dblBOHD%2BhnoQN19ARQ6m7VuFbEeyqpn1FsVLY6BhzdRK27m4WhPqR%2BAiPpCRw9hFs%2BuRC0C4c0Xl68DKPqcvASfiD96iGUht43fEqGl8vxBlbGgI3X2Sf28NcI5sKlZwwdxfMdorKYjlUpvGY8PPr1NpTwFl1kuwHT96EIUA9gqwbWMK7P6MMGOqUBCFKxraCyadneqbX4MGVBvDu%2Fm83NjoD%2FmkfsMxlcZVeOw%2Bs86HZBS3Lf7wuVCM%2Ftaz7vGLQrs0zndVDk7N6JnqnfWwbw9RudSALWZ6QO23dM7WHCt6OEn89ZCCDbUXPMI2IbvwogkNhoJ7M8YEP%2FJ%2F1Ua%2Bw6BZvR2ANCUx2zXWO325NrfY6UZp7fg9K%2FIfgnbcB28lis8v929OC11ib1khi2YBNM&X-Amz-Signature=eca321ef5991d773cff6c1872c07a05c2dc1d5b4e434c5e99c61db0c3c3dae6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJ46VF6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICgVIPqxCyBs%2F%2BsvM0qZUxuzd24LsmUWQ9it2UrbSN5PAiEA7souKs7h6TR%2BDkJzkmaHDGMcdiCZKqLB1xpImGSYZ%2BYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuMjUMYp0KXUDJRKyrcA%2FIDm8PzFToa6czMZQvyxcCg%2BO6hdvb9N%2FYWMVHBFttDvqc4ZCKrkx%2FU9e0Q27bdW7LSVT6U1uLBaWGXBw5W5Ho5PxwB84aDE0k3aP2f5jwywInJD%2Fg8cP%2FDCqwpfLdIOMEPGmEu7%2B7bjg3uZCoqgzs4cmN3zJmrqHORPfq%2BjKuxibsYdLRcAu7B%2F8bv4XQ%2BvAtPYa601EIR24sTr8bmXaJrOxeYOF5NALqrGZGR1XP6GJd8Zu7IitVHJQANX9bzb3CSLtov86eOO8Pmi7b2RWntFGP%2FDMQUwY8dZDtbRq3X4n3xcfURnQ9%2BOqDYV3fTUmftUZkqVJ67OzKx%2BJwZswdRvumSbhylhS9atoEum4%2FUyr4zRq7OQh1J2J6j67ATqVaqHFqx8AYU3I03VT03JlKI03XnMsFW5zec6WZ8Z7zlkLhX5ppX%2BJfT4OziDiWXDXJcV78Fh3hYn0dblBOHD%2BhnoQN19ARQ6m7VuFbEeyqpn1FsVLY6BhzdRK27m4WhPqR%2BAiPpCRw9hFs%2BuRC0C4c0Xl68DKPqcvASfiD96iGUht43fEqGl8vxBlbGgI3X2Sf28NcI5sKlZwwdxfMdorKYjlUpvGY8PPr1NpTwFl1kuwHT96EIUA9gqwbWMK7P6MMGOqUBCFKxraCyadneqbX4MGVBvDu%2Fm83NjoD%2FmkfsMxlcZVeOw%2Bs86HZBS3Lf7wuVCM%2Ftaz7vGLQrs0zndVDk7N6JnqnfWwbw9RudSALWZ6QO23dM7WHCt6OEn89ZCCDbUXPMI2IbvwogkNhoJ7M8YEP%2FJ%2F1Ua%2Bw6BZvR2ANCUx2zXWO325NrfY6UZp7fg9K%2FIfgnbcB28lis8v929OC11ib1khi2YBNM&X-Amz-Signature=d88eca4f66862cdf273d53d623ea31936cd91115f72a6d8111b46429b0f2658f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJ46VF6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICgVIPqxCyBs%2F%2BsvM0qZUxuzd24LsmUWQ9it2UrbSN5PAiEA7souKs7h6TR%2BDkJzkmaHDGMcdiCZKqLB1xpImGSYZ%2BYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuMjUMYp0KXUDJRKyrcA%2FIDm8PzFToa6czMZQvyxcCg%2BO6hdvb9N%2FYWMVHBFttDvqc4ZCKrkx%2FU9e0Q27bdW7LSVT6U1uLBaWGXBw5W5Ho5PxwB84aDE0k3aP2f5jwywInJD%2Fg8cP%2FDCqwpfLdIOMEPGmEu7%2B7bjg3uZCoqgzs4cmN3zJmrqHORPfq%2BjKuxibsYdLRcAu7B%2F8bv4XQ%2BvAtPYa601EIR24sTr8bmXaJrOxeYOF5NALqrGZGR1XP6GJd8Zu7IitVHJQANX9bzb3CSLtov86eOO8Pmi7b2RWntFGP%2FDMQUwY8dZDtbRq3X4n3xcfURnQ9%2BOqDYV3fTUmftUZkqVJ67OzKx%2BJwZswdRvumSbhylhS9atoEum4%2FUyr4zRq7OQh1J2J6j67ATqVaqHFqx8AYU3I03VT03JlKI03XnMsFW5zec6WZ8Z7zlkLhX5ppX%2BJfT4OziDiWXDXJcV78Fh3hYn0dblBOHD%2BhnoQN19ARQ6m7VuFbEeyqpn1FsVLY6BhzdRK27m4WhPqR%2BAiPpCRw9hFs%2BuRC0C4c0Xl68DKPqcvASfiD96iGUht43fEqGl8vxBlbGgI3X2Sf28NcI5sKlZwwdxfMdorKYjlUpvGY8PPr1NpTwFl1kuwHT96EIUA9gqwbWMK7P6MMGOqUBCFKxraCyadneqbX4MGVBvDu%2Fm83NjoD%2FmkfsMxlcZVeOw%2Bs86HZBS3Lf7wuVCM%2Ftaz7vGLQrs0zndVDk7N6JnqnfWwbw9RudSALWZ6QO23dM7WHCt6OEn89ZCCDbUXPMI2IbvwogkNhoJ7M8YEP%2FJ%2F1Ua%2Bw6BZvR2ANCUx2zXWO325NrfY6UZp7fg9K%2FIfgnbcB28lis8v929OC11ib1khi2YBNM&X-Amz-Signature=e22d9f464c97d8683863c83575da2986a0e2b9b20b7f433290e512e3f60c04ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJ46VF6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICgVIPqxCyBs%2F%2BsvM0qZUxuzd24LsmUWQ9it2UrbSN5PAiEA7souKs7h6TR%2BDkJzkmaHDGMcdiCZKqLB1xpImGSYZ%2BYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuMjUMYp0KXUDJRKyrcA%2FIDm8PzFToa6czMZQvyxcCg%2BO6hdvb9N%2FYWMVHBFttDvqc4ZCKrkx%2FU9e0Q27bdW7LSVT6U1uLBaWGXBw5W5Ho5PxwB84aDE0k3aP2f5jwywInJD%2Fg8cP%2FDCqwpfLdIOMEPGmEu7%2B7bjg3uZCoqgzs4cmN3zJmrqHORPfq%2BjKuxibsYdLRcAu7B%2F8bv4XQ%2BvAtPYa601EIR24sTr8bmXaJrOxeYOF5NALqrGZGR1XP6GJd8Zu7IitVHJQANX9bzb3CSLtov86eOO8Pmi7b2RWntFGP%2FDMQUwY8dZDtbRq3X4n3xcfURnQ9%2BOqDYV3fTUmftUZkqVJ67OzKx%2BJwZswdRvumSbhylhS9atoEum4%2FUyr4zRq7OQh1J2J6j67ATqVaqHFqx8AYU3I03VT03JlKI03XnMsFW5zec6WZ8Z7zlkLhX5ppX%2BJfT4OziDiWXDXJcV78Fh3hYn0dblBOHD%2BhnoQN19ARQ6m7VuFbEeyqpn1FsVLY6BhzdRK27m4WhPqR%2BAiPpCRw9hFs%2BuRC0C4c0Xl68DKPqcvASfiD96iGUht43fEqGl8vxBlbGgI3X2Sf28NcI5sKlZwwdxfMdorKYjlUpvGY8PPr1NpTwFl1kuwHT96EIUA9gqwbWMK7P6MMGOqUBCFKxraCyadneqbX4MGVBvDu%2Fm83NjoD%2FmkfsMxlcZVeOw%2Bs86HZBS3Lf7wuVCM%2Ftaz7vGLQrs0zndVDk7N6JnqnfWwbw9RudSALWZ6QO23dM7WHCt6OEn89ZCCDbUXPMI2IbvwogkNhoJ7M8YEP%2FJ%2F1Ua%2Bw6BZvR2ANCUx2zXWO325NrfY6UZp7fg9K%2FIfgnbcB28lis8v929OC11ib1khi2YBNM&X-Amz-Signature=1579ffef866119c81ac035d6e994fc1e3cee3837970d98bcb40b0bdbcbe6b7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

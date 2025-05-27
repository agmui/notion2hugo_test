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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIU4BIAZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1hOV%2F91Mxvg3HaRTe4UsZ2fi2PCoE9LFNDHRM1UwiBAiEA9y8sxj2blWb%2FQ6BnVefbxNQIva%2BmS63kThugpEpIj4cq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOl33TOpV0w90Q%2B%2FdyrcA4PePUskOD6GGmEVaOOgm2IW%2F4Qa15Ru76LHdWL%2Fkj0vk6uZ8898XlaSl1We7wiqsF4BhCalmR40QjduGOvjwo3n0dyZYTAa0xZN6MtnTqUnBceLnstgmNk72m5fEH3P1zeXPiPMQcsxgKlbrsoSZLTCXNGyVfaQfraBzU0JB%2BOgrHzOabIlQ9ph%2FJFRzxn%2BooPhdC6%2FCwgy9kIaNKAlu4nVS5fs5U8ozVWc8N2NgnLloRDphj%2BbsSB8AVM5tBgEoKLZI4nm59nxc%2Ff6sdWM9hB1ReeCZYW3Q5H8z6joT%2B3J7ATaYL6rx2R9FlOL1BWq%2FfckkY%2FHBYv3FWH7%2Bq5WR789JXZi%2Br5ChbfaqGuz8DCbBKIM%2BoCR9kDjTbduAtG83rScXnw%2BpYm3wjDeXNbt0s%2FJr%2Bm%2BWSxnvARKkl5Lid6%2BUSnsxnN%2FTkYZF2rmNdRRc9d5o52MigHmOSwXI0dZS3Vh02S%2FqfKhxLLdYckyamLzO652XYNGWNFcRkoaXQ6pizopJkmSwi2v3wuDEXcJRr%2F%2By7xJUXflfGIMh0HdMwCbMzpl65qd%2BqNQU%2FomrHGNi%2BE%2B1LZX3y20hFLEeE6hwsWk%2B4e8%2BEZCQpILsiTuca%2BEZpqawh88K1NONC3wMOOW1MEGOqUBJbk31SeDI0%2F0IuUt%2Byqi4r0hLmtGzJgeBRoNG7nBO5iyjTkgxiaJYddf4Dy61JcwULE3LFsZ4BiRDd%2FPafSpGrIewqcItjNY1tYHTuKLOLPr9jOesUTEklLufCUGTEAsG4bGBzd91tUM1CQAgaivnYnEtiSn5JwFgeVgZ%2BLHIrekUS9VU2rGqFEqADW0w5jmjxJkgMRnAUUr8UDNADqYVR5RTwx0&X-Amz-Signature=5cc92ea05093c5d02cf7ccc6c722864246350937f1d213236b91468cbad66119&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIU4BIAZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1hOV%2F91Mxvg3HaRTe4UsZ2fi2PCoE9LFNDHRM1UwiBAiEA9y8sxj2blWb%2FQ6BnVefbxNQIva%2BmS63kThugpEpIj4cq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOl33TOpV0w90Q%2B%2FdyrcA4PePUskOD6GGmEVaOOgm2IW%2F4Qa15Ru76LHdWL%2Fkj0vk6uZ8898XlaSl1We7wiqsF4BhCalmR40QjduGOvjwo3n0dyZYTAa0xZN6MtnTqUnBceLnstgmNk72m5fEH3P1zeXPiPMQcsxgKlbrsoSZLTCXNGyVfaQfraBzU0JB%2BOgrHzOabIlQ9ph%2FJFRzxn%2BooPhdC6%2FCwgy9kIaNKAlu4nVS5fs5U8ozVWc8N2NgnLloRDphj%2BbsSB8AVM5tBgEoKLZI4nm59nxc%2Ff6sdWM9hB1ReeCZYW3Q5H8z6joT%2B3J7ATaYL6rx2R9FlOL1BWq%2FfckkY%2FHBYv3FWH7%2Bq5WR789JXZi%2Br5ChbfaqGuz8DCbBKIM%2BoCR9kDjTbduAtG83rScXnw%2BpYm3wjDeXNbt0s%2FJr%2Bm%2BWSxnvARKkl5Lid6%2BUSnsxnN%2FTkYZF2rmNdRRc9d5o52MigHmOSwXI0dZS3Vh02S%2FqfKhxLLdYckyamLzO652XYNGWNFcRkoaXQ6pizopJkmSwi2v3wuDEXcJRr%2F%2By7xJUXflfGIMh0HdMwCbMzpl65qd%2BqNQU%2FomrHGNi%2BE%2B1LZX3y20hFLEeE6hwsWk%2B4e8%2BEZCQpILsiTuca%2BEZpqawh88K1NONC3wMOOW1MEGOqUBJbk31SeDI0%2F0IuUt%2Byqi4r0hLmtGzJgeBRoNG7nBO5iyjTkgxiaJYddf4Dy61JcwULE3LFsZ4BiRDd%2FPafSpGrIewqcItjNY1tYHTuKLOLPr9jOesUTEklLufCUGTEAsG4bGBzd91tUM1CQAgaivnYnEtiSn5JwFgeVgZ%2BLHIrekUS9VU2rGqFEqADW0w5jmjxJkgMRnAUUr8UDNADqYVR5RTwx0&X-Amz-Signature=a44e798ec2a85939578a181f928342c6dc2faea2b157d599f033a77728c1bbc6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIU4BIAZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1hOV%2F91Mxvg3HaRTe4UsZ2fi2PCoE9LFNDHRM1UwiBAiEA9y8sxj2blWb%2FQ6BnVefbxNQIva%2BmS63kThugpEpIj4cq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOl33TOpV0w90Q%2B%2FdyrcA4PePUskOD6GGmEVaOOgm2IW%2F4Qa15Ru76LHdWL%2Fkj0vk6uZ8898XlaSl1We7wiqsF4BhCalmR40QjduGOvjwo3n0dyZYTAa0xZN6MtnTqUnBceLnstgmNk72m5fEH3P1zeXPiPMQcsxgKlbrsoSZLTCXNGyVfaQfraBzU0JB%2BOgrHzOabIlQ9ph%2FJFRzxn%2BooPhdC6%2FCwgy9kIaNKAlu4nVS5fs5U8ozVWc8N2NgnLloRDphj%2BbsSB8AVM5tBgEoKLZI4nm59nxc%2Ff6sdWM9hB1ReeCZYW3Q5H8z6joT%2B3J7ATaYL6rx2R9FlOL1BWq%2FfckkY%2FHBYv3FWH7%2Bq5WR789JXZi%2Br5ChbfaqGuz8DCbBKIM%2BoCR9kDjTbduAtG83rScXnw%2BpYm3wjDeXNbt0s%2FJr%2Bm%2BWSxnvARKkl5Lid6%2BUSnsxnN%2FTkYZF2rmNdRRc9d5o52MigHmOSwXI0dZS3Vh02S%2FqfKhxLLdYckyamLzO652XYNGWNFcRkoaXQ6pizopJkmSwi2v3wuDEXcJRr%2F%2By7xJUXflfGIMh0HdMwCbMzpl65qd%2BqNQU%2FomrHGNi%2BE%2B1LZX3y20hFLEeE6hwsWk%2B4e8%2BEZCQpILsiTuca%2BEZpqawh88K1NONC3wMOOW1MEGOqUBJbk31SeDI0%2F0IuUt%2Byqi4r0hLmtGzJgeBRoNG7nBO5iyjTkgxiaJYddf4Dy61JcwULE3LFsZ4BiRDd%2FPafSpGrIewqcItjNY1tYHTuKLOLPr9jOesUTEklLufCUGTEAsG4bGBzd91tUM1CQAgaivnYnEtiSn5JwFgeVgZ%2BLHIrekUS9VU2rGqFEqADW0w5jmjxJkgMRnAUUr8UDNADqYVR5RTwx0&X-Amz-Signature=09bdd4ef13c295a54e57bcddaa231d8a1518dfaf08cc7ea4c803f99b141c6324&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIU4BIAZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1hOV%2F91Mxvg3HaRTe4UsZ2fi2PCoE9LFNDHRM1UwiBAiEA9y8sxj2blWb%2FQ6BnVefbxNQIva%2BmS63kThugpEpIj4cq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOl33TOpV0w90Q%2B%2FdyrcA4PePUskOD6GGmEVaOOgm2IW%2F4Qa15Ru76LHdWL%2Fkj0vk6uZ8898XlaSl1We7wiqsF4BhCalmR40QjduGOvjwo3n0dyZYTAa0xZN6MtnTqUnBceLnstgmNk72m5fEH3P1zeXPiPMQcsxgKlbrsoSZLTCXNGyVfaQfraBzU0JB%2BOgrHzOabIlQ9ph%2FJFRzxn%2BooPhdC6%2FCwgy9kIaNKAlu4nVS5fs5U8ozVWc8N2NgnLloRDphj%2BbsSB8AVM5tBgEoKLZI4nm59nxc%2Ff6sdWM9hB1ReeCZYW3Q5H8z6joT%2B3J7ATaYL6rx2R9FlOL1BWq%2FfckkY%2FHBYv3FWH7%2Bq5WR789JXZi%2Br5ChbfaqGuz8DCbBKIM%2BoCR9kDjTbduAtG83rScXnw%2BpYm3wjDeXNbt0s%2FJr%2Bm%2BWSxnvARKkl5Lid6%2BUSnsxnN%2FTkYZF2rmNdRRc9d5o52MigHmOSwXI0dZS3Vh02S%2FqfKhxLLdYckyamLzO652XYNGWNFcRkoaXQ6pizopJkmSwi2v3wuDEXcJRr%2F%2By7xJUXflfGIMh0HdMwCbMzpl65qd%2BqNQU%2FomrHGNi%2BE%2B1LZX3y20hFLEeE6hwsWk%2B4e8%2BEZCQpILsiTuca%2BEZpqawh88K1NONC3wMOOW1MEGOqUBJbk31SeDI0%2F0IuUt%2Byqi4r0hLmtGzJgeBRoNG7nBO5iyjTkgxiaJYddf4Dy61JcwULE3LFsZ4BiRDd%2FPafSpGrIewqcItjNY1tYHTuKLOLPr9jOesUTEklLufCUGTEAsG4bGBzd91tUM1CQAgaivnYnEtiSn5JwFgeVgZ%2BLHIrekUS9VU2rGqFEqADW0w5jmjxJkgMRnAUUr8UDNADqYVR5RTwx0&X-Amz-Signature=45ead75d4a25281f9e6bba10eccd7c235755590e97b769bc38abd04e7683c3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIU4BIAZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1hOV%2F91Mxvg3HaRTe4UsZ2fi2PCoE9LFNDHRM1UwiBAiEA9y8sxj2blWb%2FQ6BnVefbxNQIva%2BmS63kThugpEpIj4cq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOl33TOpV0w90Q%2B%2FdyrcA4PePUskOD6GGmEVaOOgm2IW%2F4Qa15Ru76LHdWL%2Fkj0vk6uZ8898XlaSl1We7wiqsF4BhCalmR40QjduGOvjwo3n0dyZYTAa0xZN6MtnTqUnBceLnstgmNk72m5fEH3P1zeXPiPMQcsxgKlbrsoSZLTCXNGyVfaQfraBzU0JB%2BOgrHzOabIlQ9ph%2FJFRzxn%2BooPhdC6%2FCwgy9kIaNKAlu4nVS5fs5U8ozVWc8N2NgnLloRDphj%2BbsSB8AVM5tBgEoKLZI4nm59nxc%2Ff6sdWM9hB1ReeCZYW3Q5H8z6joT%2B3J7ATaYL6rx2R9FlOL1BWq%2FfckkY%2FHBYv3FWH7%2Bq5WR789JXZi%2Br5ChbfaqGuz8DCbBKIM%2BoCR9kDjTbduAtG83rScXnw%2BpYm3wjDeXNbt0s%2FJr%2Bm%2BWSxnvARKkl5Lid6%2BUSnsxnN%2FTkYZF2rmNdRRc9d5o52MigHmOSwXI0dZS3Vh02S%2FqfKhxLLdYckyamLzO652XYNGWNFcRkoaXQ6pizopJkmSwi2v3wuDEXcJRr%2F%2By7xJUXflfGIMh0HdMwCbMzpl65qd%2BqNQU%2FomrHGNi%2BE%2B1LZX3y20hFLEeE6hwsWk%2B4e8%2BEZCQpILsiTuca%2BEZpqawh88K1NONC3wMOOW1MEGOqUBJbk31SeDI0%2F0IuUt%2Byqi4r0hLmtGzJgeBRoNG7nBO5iyjTkgxiaJYddf4Dy61JcwULE3LFsZ4BiRDd%2FPafSpGrIewqcItjNY1tYHTuKLOLPr9jOesUTEklLufCUGTEAsG4bGBzd91tUM1CQAgaivnYnEtiSn5JwFgeVgZ%2BLHIrekUS9VU2rGqFEqADW0w5jmjxJkgMRnAUUr8UDNADqYVR5RTwx0&X-Amz-Signature=5bcbafea327487287b785a83561ab3b7abe9cbab67c039a62510cfa9cf4e496e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIU4BIAZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1hOV%2F91Mxvg3HaRTe4UsZ2fi2PCoE9LFNDHRM1UwiBAiEA9y8sxj2blWb%2FQ6BnVefbxNQIva%2BmS63kThugpEpIj4cq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOl33TOpV0w90Q%2B%2FdyrcA4PePUskOD6GGmEVaOOgm2IW%2F4Qa15Ru76LHdWL%2Fkj0vk6uZ8898XlaSl1We7wiqsF4BhCalmR40QjduGOvjwo3n0dyZYTAa0xZN6MtnTqUnBceLnstgmNk72m5fEH3P1zeXPiPMQcsxgKlbrsoSZLTCXNGyVfaQfraBzU0JB%2BOgrHzOabIlQ9ph%2FJFRzxn%2BooPhdC6%2FCwgy9kIaNKAlu4nVS5fs5U8ozVWc8N2NgnLloRDphj%2BbsSB8AVM5tBgEoKLZI4nm59nxc%2Ff6sdWM9hB1ReeCZYW3Q5H8z6joT%2B3J7ATaYL6rx2R9FlOL1BWq%2FfckkY%2FHBYv3FWH7%2Bq5WR789JXZi%2Br5ChbfaqGuz8DCbBKIM%2BoCR9kDjTbduAtG83rScXnw%2BpYm3wjDeXNbt0s%2FJr%2Bm%2BWSxnvARKkl5Lid6%2BUSnsxnN%2FTkYZF2rmNdRRc9d5o52MigHmOSwXI0dZS3Vh02S%2FqfKhxLLdYckyamLzO652XYNGWNFcRkoaXQ6pizopJkmSwi2v3wuDEXcJRr%2F%2By7xJUXflfGIMh0HdMwCbMzpl65qd%2BqNQU%2FomrHGNi%2BE%2B1LZX3y20hFLEeE6hwsWk%2B4e8%2BEZCQpILsiTuca%2BEZpqawh88K1NONC3wMOOW1MEGOqUBJbk31SeDI0%2F0IuUt%2Byqi4r0hLmtGzJgeBRoNG7nBO5iyjTkgxiaJYddf4Dy61JcwULE3LFsZ4BiRDd%2FPafSpGrIewqcItjNY1tYHTuKLOLPr9jOesUTEklLufCUGTEAsG4bGBzd91tUM1CQAgaivnYnEtiSn5JwFgeVgZ%2BLHIrekUS9VU2rGqFEqADW0w5jmjxJkgMRnAUUr8UDNADqYVR5RTwx0&X-Amz-Signature=20fb6aad8ebccb8da1f4c5990b86ed8133162067c7e007523925f802ad0f7be2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIU4BIAZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1hOV%2F91Mxvg3HaRTe4UsZ2fi2PCoE9LFNDHRM1UwiBAiEA9y8sxj2blWb%2FQ6BnVefbxNQIva%2BmS63kThugpEpIj4cq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOl33TOpV0w90Q%2B%2FdyrcA4PePUskOD6GGmEVaOOgm2IW%2F4Qa15Ru76LHdWL%2Fkj0vk6uZ8898XlaSl1We7wiqsF4BhCalmR40QjduGOvjwo3n0dyZYTAa0xZN6MtnTqUnBceLnstgmNk72m5fEH3P1zeXPiPMQcsxgKlbrsoSZLTCXNGyVfaQfraBzU0JB%2BOgrHzOabIlQ9ph%2FJFRzxn%2BooPhdC6%2FCwgy9kIaNKAlu4nVS5fs5U8ozVWc8N2NgnLloRDphj%2BbsSB8AVM5tBgEoKLZI4nm59nxc%2Ff6sdWM9hB1ReeCZYW3Q5H8z6joT%2B3J7ATaYL6rx2R9FlOL1BWq%2FfckkY%2FHBYv3FWH7%2Bq5WR789JXZi%2Br5ChbfaqGuz8DCbBKIM%2BoCR9kDjTbduAtG83rScXnw%2BpYm3wjDeXNbt0s%2FJr%2Bm%2BWSxnvARKkl5Lid6%2BUSnsxnN%2FTkYZF2rmNdRRc9d5o52MigHmOSwXI0dZS3Vh02S%2FqfKhxLLdYckyamLzO652XYNGWNFcRkoaXQ6pizopJkmSwi2v3wuDEXcJRr%2F%2By7xJUXflfGIMh0HdMwCbMzpl65qd%2BqNQU%2FomrHGNi%2BE%2B1LZX3y20hFLEeE6hwsWk%2B4e8%2BEZCQpILsiTuca%2BEZpqawh88K1NONC3wMOOW1MEGOqUBJbk31SeDI0%2F0IuUt%2Byqi4r0hLmtGzJgeBRoNG7nBO5iyjTkgxiaJYddf4Dy61JcwULE3LFsZ4BiRDd%2FPafSpGrIewqcItjNY1tYHTuKLOLPr9jOesUTEklLufCUGTEAsG4bGBzd91tUM1CQAgaivnYnEtiSn5JwFgeVgZ%2BLHIrekUS9VU2rGqFEqADW0w5jmjxJkgMRnAUUr8UDNADqYVR5RTwx0&X-Amz-Signature=f00b67a52ee21e73c6603b9d8dbcdca14f20405e53823024e32eb89fdc6c1969&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

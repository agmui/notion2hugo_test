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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTJQRHM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEL1yhRXedpd%2Fi7pHgIAtxWCe1tKxkWERUbEhk61QwkjAiEAz8LVIvW%2BpIHbFFDAk%2FMSmlu10YzWUAP6FvZ9%2Babo7M0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIj3GmbZknwq1KLySrcAzdjek86rZhaFIrqo2TLwPnDmo0SW5L9%2BHjNC0Z8QWvfeegaHcTuDtYResXmvxKjd0SgyjvTJ9%2BQBZrUjJ413oWW9uuUTC8F2cXaDPS1e6rfe4u3rl2UmOM50ZFTaTORAWwjIg5l1yv9ahTVd%2Bv24JS7sp5WaV9%2BRVLYsr8pk2xfwaVNcXqoRHtkALmjfvr%2B5fVOhuq3L%2FahVbjyTO56GARgrPypJRdBJ4W%2BFPIyX6OA4betNl54cRVDmaJlhXtXn%2FDSgXs0%2BlDdBUkLY8RhqGbvcA56qunObirRUeZO%2Fp0DoGVHUlmFqjnrg8Sr0yCWCMFg2zxaiP65k%2FomXb4dSUbJTtOWFJ%2F0yUBGYhP59t7voe4%2Bp1L0uF8YBS%2BGyH4gq6bwhvllvuTG5OAxo6anaE6Ud4pqsS%2FsbdC%2B1IsorPs%2FazYwhbXb8P26xOsLW9gFlqmVdVhVkOcyMgO2aDvly%2BavInGQXiUcumQhmt5hCKZ81GW1ovHHxxSFK%2Bo9YK0o1Ly1Vxlwc860oKeKq97x9ipTrRCzdkdbfzCLn4AnJNZAsS88PAh0uPJGXN3jKHg0S2YVt0Vf4FhF6ALaTPbuCulYldWpjEfbDT%2FVzHjJGK8%2FgH0p3Rkb5IAgdUfhMNGvmMMGOqUB2XX%2BzV7vP%2BsMdZLR7ZVNtSCe%2B4Ciywfz18AwMU5pHs52gyKGs7TmCidgkAodnNhquvFAkFjbTyhzn21f3Bb7wms4%2FHyGzlmiIQKk4w1j7s5s60vGcPN4aU6t7kWUOxpPeSB0ZLHQB1eFrCl5EaVH2yP%2FiW8oRYJn7NjaVheI4hpNPsYIdrOFB0QNpL630B%2BCi023UBwGXbdyC7a7X43fHU5ja6R6&X-Amz-Signature=b0a4b04ea25fda8261ffb89b4b275e561b659be1d53a96cc558c4b4ccfdc45e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTJQRHM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEL1yhRXedpd%2Fi7pHgIAtxWCe1tKxkWERUbEhk61QwkjAiEAz8LVIvW%2BpIHbFFDAk%2FMSmlu10YzWUAP6FvZ9%2Babo7M0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIj3GmbZknwq1KLySrcAzdjek86rZhaFIrqo2TLwPnDmo0SW5L9%2BHjNC0Z8QWvfeegaHcTuDtYResXmvxKjd0SgyjvTJ9%2BQBZrUjJ413oWW9uuUTC8F2cXaDPS1e6rfe4u3rl2UmOM50ZFTaTORAWwjIg5l1yv9ahTVd%2Bv24JS7sp5WaV9%2BRVLYsr8pk2xfwaVNcXqoRHtkALmjfvr%2B5fVOhuq3L%2FahVbjyTO56GARgrPypJRdBJ4W%2BFPIyX6OA4betNl54cRVDmaJlhXtXn%2FDSgXs0%2BlDdBUkLY8RhqGbvcA56qunObirRUeZO%2Fp0DoGVHUlmFqjnrg8Sr0yCWCMFg2zxaiP65k%2FomXb4dSUbJTtOWFJ%2F0yUBGYhP59t7voe4%2Bp1L0uF8YBS%2BGyH4gq6bwhvllvuTG5OAxo6anaE6Ud4pqsS%2FsbdC%2B1IsorPs%2FazYwhbXb8P26xOsLW9gFlqmVdVhVkOcyMgO2aDvly%2BavInGQXiUcumQhmt5hCKZ81GW1ovHHxxSFK%2Bo9YK0o1Ly1Vxlwc860oKeKq97x9ipTrRCzdkdbfzCLn4AnJNZAsS88PAh0uPJGXN3jKHg0S2YVt0Vf4FhF6ALaTPbuCulYldWpjEfbDT%2FVzHjJGK8%2FgH0p3Rkb5IAgdUfhMNGvmMMGOqUB2XX%2BzV7vP%2BsMdZLR7ZVNtSCe%2B4Ciywfz18AwMU5pHs52gyKGs7TmCidgkAodnNhquvFAkFjbTyhzn21f3Bb7wms4%2FHyGzlmiIQKk4w1j7s5s60vGcPN4aU6t7kWUOxpPeSB0ZLHQB1eFrCl5EaVH2yP%2FiW8oRYJn7NjaVheI4hpNPsYIdrOFB0QNpL630B%2BCi023UBwGXbdyC7a7X43fHU5ja6R6&X-Amz-Signature=dca15242f3552f4f2b4883a68d7354990614dbae5fdc06f72b9f366a28ee3f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTJQRHM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEL1yhRXedpd%2Fi7pHgIAtxWCe1tKxkWERUbEhk61QwkjAiEAz8LVIvW%2BpIHbFFDAk%2FMSmlu10YzWUAP6FvZ9%2Babo7M0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIj3GmbZknwq1KLySrcAzdjek86rZhaFIrqo2TLwPnDmo0SW5L9%2BHjNC0Z8QWvfeegaHcTuDtYResXmvxKjd0SgyjvTJ9%2BQBZrUjJ413oWW9uuUTC8F2cXaDPS1e6rfe4u3rl2UmOM50ZFTaTORAWwjIg5l1yv9ahTVd%2Bv24JS7sp5WaV9%2BRVLYsr8pk2xfwaVNcXqoRHtkALmjfvr%2B5fVOhuq3L%2FahVbjyTO56GARgrPypJRdBJ4W%2BFPIyX6OA4betNl54cRVDmaJlhXtXn%2FDSgXs0%2BlDdBUkLY8RhqGbvcA56qunObirRUeZO%2Fp0DoGVHUlmFqjnrg8Sr0yCWCMFg2zxaiP65k%2FomXb4dSUbJTtOWFJ%2F0yUBGYhP59t7voe4%2Bp1L0uF8YBS%2BGyH4gq6bwhvllvuTG5OAxo6anaE6Ud4pqsS%2FsbdC%2B1IsorPs%2FazYwhbXb8P26xOsLW9gFlqmVdVhVkOcyMgO2aDvly%2BavInGQXiUcumQhmt5hCKZ81GW1ovHHxxSFK%2Bo9YK0o1Ly1Vxlwc860oKeKq97x9ipTrRCzdkdbfzCLn4AnJNZAsS88PAh0uPJGXN3jKHg0S2YVt0Vf4FhF6ALaTPbuCulYldWpjEfbDT%2FVzHjJGK8%2FgH0p3Rkb5IAgdUfhMNGvmMMGOqUB2XX%2BzV7vP%2BsMdZLR7ZVNtSCe%2B4Ciywfz18AwMU5pHs52gyKGs7TmCidgkAodnNhquvFAkFjbTyhzn21f3Bb7wms4%2FHyGzlmiIQKk4w1j7s5s60vGcPN4aU6t7kWUOxpPeSB0ZLHQB1eFrCl5EaVH2yP%2FiW8oRYJn7NjaVheI4hpNPsYIdrOFB0QNpL630B%2BCi023UBwGXbdyC7a7X43fHU5ja6R6&X-Amz-Signature=4e6fdf53756ae3be6fd78c09ddef00e52c204de120f73909de60ad0174a5abe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTJQRHM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEL1yhRXedpd%2Fi7pHgIAtxWCe1tKxkWERUbEhk61QwkjAiEAz8LVIvW%2BpIHbFFDAk%2FMSmlu10YzWUAP6FvZ9%2Babo7M0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIj3GmbZknwq1KLySrcAzdjek86rZhaFIrqo2TLwPnDmo0SW5L9%2BHjNC0Z8QWvfeegaHcTuDtYResXmvxKjd0SgyjvTJ9%2BQBZrUjJ413oWW9uuUTC8F2cXaDPS1e6rfe4u3rl2UmOM50ZFTaTORAWwjIg5l1yv9ahTVd%2Bv24JS7sp5WaV9%2BRVLYsr8pk2xfwaVNcXqoRHtkALmjfvr%2B5fVOhuq3L%2FahVbjyTO56GARgrPypJRdBJ4W%2BFPIyX6OA4betNl54cRVDmaJlhXtXn%2FDSgXs0%2BlDdBUkLY8RhqGbvcA56qunObirRUeZO%2Fp0DoGVHUlmFqjnrg8Sr0yCWCMFg2zxaiP65k%2FomXb4dSUbJTtOWFJ%2F0yUBGYhP59t7voe4%2Bp1L0uF8YBS%2BGyH4gq6bwhvllvuTG5OAxo6anaE6Ud4pqsS%2FsbdC%2B1IsorPs%2FazYwhbXb8P26xOsLW9gFlqmVdVhVkOcyMgO2aDvly%2BavInGQXiUcumQhmt5hCKZ81GW1ovHHxxSFK%2Bo9YK0o1Ly1Vxlwc860oKeKq97x9ipTrRCzdkdbfzCLn4AnJNZAsS88PAh0uPJGXN3jKHg0S2YVt0Vf4FhF6ALaTPbuCulYldWpjEfbDT%2FVzHjJGK8%2FgH0p3Rkb5IAgdUfhMNGvmMMGOqUB2XX%2BzV7vP%2BsMdZLR7ZVNtSCe%2B4Ciywfz18AwMU5pHs52gyKGs7TmCidgkAodnNhquvFAkFjbTyhzn21f3Bb7wms4%2FHyGzlmiIQKk4w1j7s5s60vGcPN4aU6t7kWUOxpPeSB0ZLHQB1eFrCl5EaVH2yP%2FiW8oRYJn7NjaVheI4hpNPsYIdrOFB0QNpL630B%2BCi023UBwGXbdyC7a7X43fHU5ja6R6&X-Amz-Signature=c013f9219c10402dc641a30f93ca4f0b2bcb4af03592e1ad1e88618180920443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTJQRHM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEL1yhRXedpd%2Fi7pHgIAtxWCe1tKxkWERUbEhk61QwkjAiEAz8LVIvW%2BpIHbFFDAk%2FMSmlu10YzWUAP6FvZ9%2Babo7M0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIj3GmbZknwq1KLySrcAzdjek86rZhaFIrqo2TLwPnDmo0SW5L9%2BHjNC0Z8QWvfeegaHcTuDtYResXmvxKjd0SgyjvTJ9%2BQBZrUjJ413oWW9uuUTC8F2cXaDPS1e6rfe4u3rl2UmOM50ZFTaTORAWwjIg5l1yv9ahTVd%2Bv24JS7sp5WaV9%2BRVLYsr8pk2xfwaVNcXqoRHtkALmjfvr%2B5fVOhuq3L%2FahVbjyTO56GARgrPypJRdBJ4W%2BFPIyX6OA4betNl54cRVDmaJlhXtXn%2FDSgXs0%2BlDdBUkLY8RhqGbvcA56qunObirRUeZO%2Fp0DoGVHUlmFqjnrg8Sr0yCWCMFg2zxaiP65k%2FomXb4dSUbJTtOWFJ%2F0yUBGYhP59t7voe4%2Bp1L0uF8YBS%2BGyH4gq6bwhvllvuTG5OAxo6anaE6Ud4pqsS%2FsbdC%2B1IsorPs%2FazYwhbXb8P26xOsLW9gFlqmVdVhVkOcyMgO2aDvly%2BavInGQXiUcumQhmt5hCKZ81GW1ovHHxxSFK%2Bo9YK0o1Ly1Vxlwc860oKeKq97x9ipTrRCzdkdbfzCLn4AnJNZAsS88PAh0uPJGXN3jKHg0S2YVt0Vf4FhF6ALaTPbuCulYldWpjEfbDT%2FVzHjJGK8%2FgH0p3Rkb5IAgdUfhMNGvmMMGOqUB2XX%2BzV7vP%2BsMdZLR7ZVNtSCe%2B4Ciywfz18AwMU5pHs52gyKGs7TmCidgkAodnNhquvFAkFjbTyhzn21f3Bb7wms4%2FHyGzlmiIQKk4w1j7s5s60vGcPN4aU6t7kWUOxpPeSB0ZLHQB1eFrCl5EaVH2yP%2FiW8oRYJn7NjaVheI4hpNPsYIdrOFB0QNpL630B%2BCi023UBwGXbdyC7a7X43fHU5ja6R6&X-Amz-Signature=d4b24d7b9e90db98c285dfc1c879c6a9ebe1f2cc756aca76d159e3e2e90e8b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTJQRHM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEL1yhRXedpd%2Fi7pHgIAtxWCe1tKxkWERUbEhk61QwkjAiEAz8LVIvW%2BpIHbFFDAk%2FMSmlu10YzWUAP6FvZ9%2Babo7M0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIj3GmbZknwq1KLySrcAzdjek86rZhaFIrqo2TLwPnDmo0SW5L9%2BHjNC0Z8QWvfeegaHcTuDtYResXmvxKjd0SgyjvTJ9%2BQBZrUjJ413oWW9uuUTC8F2cXaDPS1e6rfe4u3rl2UmOM50ZFTaTORAWwjIg5l1yv9ahTVd%2Bv24JS7sp5WaV9%2BRVLYsr8pk2xfwaVNcXqoRHtkALmjfvr%2B5fVOhuq3L%2FahVbjyTO56GARgrPypJRdBJ4W%2BFPIyX6OA4betNl54cRVDmaJlhXtXn%2FDSgXs0%2BlDdBUkLY8RhqGbvcA56qunObirRUeZO%2Fp0DoGVHUlmFqjnrg8Sr0yCWCMFg2zxaiP65k%2FomXb4dSUbJTtOWFJ%2F0yUBGYhP59t7voe4%2Bp1L0uF8YBS%2BGyH4gq6bwhvllvuTG5OAxo6anaE6Ud4pqsS%2FsbdC%2B1IsorPs%2FazYwhbXb8P26xOsLW9gFlqmVdVhVkOcyMgO2aDvly%2BavInGQXiUcumQhmt5hCKZ81GW1ovHHxxSFK%2Bo9YK0o1Ly1Vxlwc860oKeKq97x9ipTrRCzdkdbfzCLn4AnJNZAsS88PAh0uPJGXN3jKHg0S2YVt0Vf4FhF6ALaTPbuCulYldWpjEfbDT%2FVzHjJGK8%2FgH0p3Rkb5IAgdUfhMNGvmMMGOqUB2XX%2BzV7vP%2BsMdZLR7ZVNtSCe%2B4Ciywfz18AwMU5pHs52gyKGs7TmCidgkAodnNhquvFAkFjbTyhzn21f3Bb7wms4%2FHyGzlmiIQKk4w1j7s5s60vGcPN4aU6t7kWUOxpPeSB0ZLHQB1eFrCl5EaVH2yP%2FiW8oRYJn7NjaVheI4hpNPsYIdrOFB0QNpL630B%2BCi023UBwGXbdyC7a7X43fHU5ja6R6&X-Amz-Signature=2ef23e0e01b6b5a004f7d40464616a2c0cdde21884ebaed00c859b911814347c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTJQRHM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEL1yhRXedpd%2Fi7pHgIAtxWCe1tKxkWERUbEhk61QwkjAiEAz8LVIvW%2BpIHbFFDAk%2FMSmlu10YzWUAP6FvZ9%2Babo7M0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIj3GmbZknwq1KLySrcAzdjek86rZhaFIrqo2TLwPnDmo0SW5L9%2BHjNC0Z8QWvfeegaHcTuDtYResXmvxKjd0SgyjvTJ9%2BQBZrUjJ413oWW9uuUTC8F2cXaDPS1e6rfe4u3rl2UmOM50ZFTaTORAWwjIg5l1yv9ahTVd%2Bv24JS7sp5WaV9%2BRVLYsr8pk2xfwaVNcXqoRHtkALmjfvr%2B5fVOhuq3L%2FahVbjyTO56GARgrPypJRdBJ4W%2BFPIyX6OA4betNl54cRVDmaJlhXtXn%2FDSgXs0%2BlDdBUkLY8RhqGbvcA56qunObirRUeZO%2Fp0DoGVHUlmFqjnrg8Sr0yCWCMFg2zxaiP65k%2FomXb4dSUbJTtOWFJ%2F0yUBGYhP59t7voe4%2Bp1L0uF8YBS%2BGyH4gq6bwhvllvuTG5OAxo6anaE6Ud4pqsS%2FsbdC%2B1IsorPs%2FazYwhbXb8P26xOsLW9gFlqmVdVhVkOcyMgO2aDvly%2BavInGQXiUcumQhmt5hCKZ81GW1ovHHxxSFK%2Bo9YK0o1Ly1Vxlwc860oKeKq97x9ipTrRCzdkdbfzCLn4AnJNZAsS88PAh0uPJGXN3jKHg0S2YVt0Vf4FhF6ALaTPbuCulYldWpjEfbDT%2FVzHjJGK8%2FgH0p3Rkb5IAgdUfhMNGvmMMGOqUB2XX%2BzV7vP%2BsMdZLR7ZVNtSCe%2B4Ciywfz18AwMU5pHs52gyKGs7TmCidgkAodnNhquvFAkFjbTyhzn21f3Bb7wms4%2FHyGzlmiIQKk4w1j7s5s60vGcPN4aU6t7kWUOxpPeSB0ZLHQB1eFrCl5EaVH2yP%2FiW8oRYJn7NjaVheI4hpNPsYIdrOFB0QNpL630B%2BCi023UBwGXbdyC7a7X43fHU5ja6R6&X-Amz-Signature=4251261d3c5e4543657a5fe477eb47099e4314cf1bb9b04768f10bb44cd01841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

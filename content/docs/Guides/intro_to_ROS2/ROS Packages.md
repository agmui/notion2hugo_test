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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMINJJQJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4JW8Wm5yzEr8rUzfYJqOvNJw8c4utO%2BJHK13b8tFO7AiEAoYgAgd2HLuhMd0WT295m027A6oKA7ZdSWmMDrrLwQZQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzCEzlqK6Ip%2Bek5lyrcA85DkEu6TnRLyFsdMxPYt5kunbWgw5m9GVREHg3qZL1yrDFzRVpnDfOKps0HdznRxfnsNgpsc0FsilQ5jiCAVeL2Ei1DPRpCgKcyaZtqMJ7kA%2FNz%2BAXX49ml1HbBnOe6tQshyBoeCctm1YTtqPGrTvKZuLG7hXBUj41R1g10r920Dn3xn8mUp%2FBMaIyuvW3x25p3vvFs8nkOPYi6ktu4KhGp51PdvbRF6sLumkhJ%2BnNAO%2BE%2BxAR0Oo6fsv%2BaHdyfzKujDzO%2BZ%2Fwmo1wOr1RoGObKONnGno8sZazJBbOPxezLaBr0zgB9qV%2BztpK%2BOPoro8W6ZKgsGVtIEslDk1JMwtmr%2BQz3GwRGsUCVxKBLJFcPODqLBnoG9lkmD8GKOIsK8XBIzca9KnMNeWXc81bmIqXznBGZbWmeLvNVUu0qhW3cP7hb1GtDQfNwQ%2BMj7idbe7rl82odBj8m%2BLmRLNAhGtS%2FR2r32MDaC%2BpchNX1Aj8AojDp9g5NCXoaiZs93%2FP9nkzZDHVMIkhAgUgw10%2BSAK2LtkKWsBHKE5gcrfzF%2BXQm0QNx7tTLmiHuvQaKCoUWYIpcflc3zSFsVnVI9QV%2BzEo0Jc8MsLaaXbXjqU%2FtfHm8V5qViKI%2BHg6KwO1JMIvZ8rwGOqUBw5TG%2B0KYmagulAxh6GARvJkea%2FFewcg4N4IzFsa%2B9e7leN2gxqbUBBDYcaIIWBIQPqIlox%2FiJiN6yl%2FnEILe19a9FnbUxXyQRfsGUNZy0xxIgyDvTJoKdFNm0pCy0VvUkMK2BtXf5hJz55%2BedLbK1q78eRri0K8F1caBf627HIOrduXZ1wx3r1vMcMvia%2FnZrp7cGOFEBNp7KZkHyoBeZUJfzRvB&X-Amz-Signature=67011df8b6dcd5acc02746fa322c8b5e763ef28b481f501833563ce8d0779b41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMINJJQJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4JW8Wm5yzEr8rUzfYJqOvNJw8c4utO%2BJHK13b8tFO7AiEAoYgAgd2HLuhMd0WT295m027A6oKA7ZdSWmMDrrLwQZQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzCEzlqK6Ip%2Bek5lyrcA85DkEu6TnRLyFsdMxPYt5kunbWgw5m9GVREHg3qZL1yrDFzRVpnDfOKps0HdznRxfnsNgpsc0FsilQ5jiCAVeL2Ei1DPRpCgKcyaZtqMJ7kA%2FNz%2BAXX49ml1HbBnOe6tQshyBoeCctm1YTtqPGrTvKZuLG7hXBUj41R1g10r920Dn3xn8mUp%2FBMaIyuvW3x25p3vvFs8nkOPYi6ktu4KhGp51PdvbRF6sLumkhJ%2BnNAO%2BE%2BxAR0Oo6fsv%2BaHdyfzKujDzO%2BZ%2Fwmo1wOr1RoGObKONnGno8sZazJBbOPxezLaBr0zgB9qV%2BztpK%2BOPoro8W6ZKgsGVtIEslDk1JMwtmr%2BQz3GwRGsUCVxKBLJFcPODqLBnoG9lkmD8GKOIsK8XBIzca9KnMNeWXc81bmIqXznBGZbWmeLvNVUu0qhW3cP7hb1GtDQfNwQ%2BMj7idbe7rl82odBj8m%2BLmRLNAhGtS%2FR2r32MDaC%2BpchNX1Aj8AojDp9g5NCXoaiZs93%2FP9nkzZDHVMIkhAgUgw10%2BSAK2LtkKWsBHKE5gcrfzF%2BXQm0QNx7tTLmiHuvQaKCoUWYIpcflc3zSFsVnVI9QV%2BzEo0Jc8MsLaaXbXjqU%2FtfHm8V5qViKI%2BHg6KwO1JMIvZ8rwGOqUBw5TG%2B0KYmagulAxh6GARvJkea%2FFewcg4N4IzFsa%2B9e7leN2gxqbUBBDYcaIIWBIQPqIlox%2FiJiN6yl%2FnEILe19a9FnbUxXyQRfsGUNZy0xxIgyDvTJoKdFNm0pCy0VvUkMK2BtXf5hJz55%2BedLbK1q78eRri0K8F1caBf627HIOrduXZ1wx3r1vMcMvia%2FnZrp7cGOFEBNp7KZkHyoBeZUJfzRvB&X-Amz-Signature=9e7183f5f3a1e6fdd4b1a9de186fefff8508e02dbb76c2c66b4c3d5b56240622&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMINJJQJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4JW8Wm5yzEr8rUzfYJqOvNJw8c4utO%2BJHK13b8tFO7AiEAoYgAgd2HLuhMd0WT295m027A6oKA7ZdSWmMDrrLwQZQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzCEzlqK6Ip%2Bek5lyrcA85DkEu6TnRLyFsdMxPYt5kunbWgw5m9GVREHg3qZL1yrDFzRVpnDfOKps0HdznRxfnsNgpsc0FsilQ5jiCAVeL2Ei1DPRpCgKcyaZtqMJ7kA%2FNz%2BAXX49ml1HbBnOe6tQshyBoeCctm1YTtqPGrTvKZuLG7hXBUj41R1g10r920Dn3xn8mUp%2FBMaIyuvW3x25p3vvFs8nkOPYi6ktu4KhGp51PdvbRF6sLumkhJ%2BnNAO%2BE%2BxAR0Oo6fsv%2BaHdyfzKujDzO%2BZ%2Fwmo1wOr1RoGObKONnGno8sZazJBbOPxezLaBr0zgB9qV%2BztpK%2BOPoro8W6ZKgsGVtIEslDk1JMwtmr%2BQz3GwRGsUCVxKBLJFcPODqLBnoG9lkmD8GKOIsK8XBIzca9KnMNeWXc81bmIqXznBGZbWmeLvNVUu0qhW3cP7hb1GtDQfNwQ%2BMj7idbe7rl82odBj8m%2BLmRLNAhGtS%2FR2r32MDaC%2BpchNX1Aj8AojDp9g5NCXoaiZs93%2FP9nkzZDHVMIkhAgUgw10%2BSAK2LtkKWsBHKE5gcrfzF%2BXQm0QNx7tTLmiHuvQaKCoUWYIpcflc3zSFsVnVI9QV%2BzEo0Jc8MsLaaXbXjqU%2FtfHm8V5qViKI%2BHg6KwO1JMIvZ8rwGOqUBw5TG%2B0KYmagulAxh6GARvJkea%2FFewcg4N4IzFsa%2B9e7leN2gxqbUBBDYcaIIWBIQPqIlox%2FiJiN6yl%2FnEILe19a9FnbUxXyQRfsGUNZy0xxIgyDvTJoKdFNm0pCy0VvUkMK2BtXf5hJz55%2BedLbK1q78eRri0K8F1caBf627HIOrduXZ1wx3r1vMcMvia%2FnZrp7cGOFEBNp7KZkHyoBeZUJfzRvB&X-Amz-Signature=ff641f719b755b1adc54c229d26e820679b982399c3484e3ed90c9d1321dbe86&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMINJJQJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4JW8Wm5yzEr8rUzfYJqOvNJw8c4utO%2BJHK13b8tFO7AiEAoYgAgd2HLuhMd0WT295m027A6oKA7ZdSWmMDrrLwQZQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzCEzlqK6Ip%2Bek5lyrcA85DkEu6TnRLyFsdMxPYt5kunbWgw5m9GVREHg3qZL1yrDFzRVpnDfOKps0HdznRxfnsNgpsc0FsilQ5jiCAVeL2Ei1DPRpCgKcyaZtqMJ7kA%2FNz%2BAXX49ml1HbBnOe6tQshyBoeCctm1YTtqPGrTvKZuLG7hXBUj41R1g10r920Dn3xn8mUp%2FBMaIyuvW3x25p3vvFs8nkOPYi6ktu4KhGp51PdvbRF6sLumkhJ%2BnNAO%2BE%2BxAR0Oo6fsv%2BaHdyfzKujDzO%2BZ%2Fwmo1wOr1RoGObKONnGno8sZazJBbOPxezLaBr0zgB9qV%2BztpK%2BOPoro8W6ZKgsGVtIEslDk1JMwtmr%2BQz3GwRGsUCVxKBLJFcPODqLBnoG9lkmD8GKOIsK8XBIzca9KnMNeWXc81bmIqXznBGZbWmeLvNVUu0qhW3cP7hb1GtDQfNwQ%2BMj7idbe7rl82odBj8m%2BLmRLNAhGtS%2FR2r32MDaC%2BpchNX1Aj8AojDp9g5NCXoaiZs93%2FP9nkzZDHVMIkhAgUgw10%2BSAK2LtkKWsBHKE5gcrfzF%2BXQm0QNx7tTLmiHuvQaKCoUWYIpcflc3zSFsVnVI9QV%2BzEo0Jc8MsLaaXbXjqU%2FtfHm8V5qViKI%2BHg6KwO1JMIvZ8rwGOqUBw5TG%2B0KYmagulAxh6GARvJkea%2FFewcg4N4IzFsa%2B9e7leN2gxqbUBBDYcaIIWBIQPqIlox%2FiJiN6yl%2FnEILe19a9FnbUxXyQRfsGUNZy0xxIgyDvTJoKdFNm0pCy0VvUkMK2BtXf5hJz55%2BedLbK1q78eRri0K8F1caBf627HIOrduXZ1wx3r1vMcMvia%2FnZrp7cGOFEBNp7KZkHyoBeZUJfzRvB&X-Amz-Signature=7eb145e752059ff37bebf38748d7dd9e38a87f3c353e316a76a85f7ef4a81d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMINJJQJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4JW8Wm5yzEr8rUzfYJqOvNJw8c4utO%2BJHK13b8tFO7AiEAoYgAgd2HLuhMd0WT295m027A6oKA7ZdSWmMDrrLwQZQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzCEzlqK6Ip%2Bek5lyrcA85DkEu6TnRLyFsdMxPYt5kunbWgw5m9GVREHg3qZL1yrDFzRVpnDfOKps0HdznRxfnsNgpsc0FsilQ5jiCAVeL2Ei1DPRpCgKcyaZtqMJ7kA%2FNz%2BAXX49ml1HbBnOe6tQshyBoeCctm1YTtqPGrTvKZuLG7hXBUj41R1g10r920Dn3xn8mUp%2FBMaIyuvW3x25p3vvFs8nkOPYi6ktu4KhGp51PdvbRF6sLumkhJ%2BnNAO%2BE%2BxAR0Oo6fsv%2BaHdyfzKujDzO%2BZ%2Fwmo1wOr1RoGObKONnGno8sZazJBbOPxezLaBr0zgB9qV%2BztpK%2BOPoro8W6ZKgsGVtIEslDk1JMwtmr%2BQz3GwRGsUCVxKBLJFcPODqLBnoG9lkmD8GKOIsK8XBIzca9KnMNeWXc81bmIqXznBGZbWmeLvNVUu0qhW3cP7hb1GtDQfNwQ%2BMj7idbe7rl82odBj8m%2BLmRLNAhGtS%2FR2r32MDaC%2BpchNX1Aj8AojDp9g5NCXoaiZs93%2FP9nkzZDHVMIkhAgUgw10%2BSAK2LtkKWsBHKE5gcrfzF%2BXQm0QNx7tTLmiHuvQaKCoUWYIpcflc3zSFsVnVI9QV%2BzEo0Jc8MsLaaXbXjqU%2FtfHm8V5qViKI%2BHg6KwO1JMIvZ8rwGOqUBw5TG%2B0KYmagulAxh6GARvJkea%2FFewcg4N4IzFsa%2B9e7leN2gxqbUBBDYcaIIWBIQPqIlox%2FiJiN6yl%2FnEILe19a9FnbUxXyQRfsGUNZy0xxIgyDvTJoKdFNm0pCy0VvUkMK2BtXf5hJz55%2BedLbK1q78eRri0K8F1caBf627HIOrduXZ1wx3r1vMcMvia%2FnZrp7cGOFEBNp7KZkHyoBeZUJfzRvB&X-Amz-Signature=91493e8bccf78b91b565e4140755cc12d8a1e2c5bac46982838151264154e22a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMINJJQJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4JW8Wm5yzEr8rUzfYJqOvNJw8c4utO%2BJHK13b8tFO7AiEAoYgAgd2HLuhMd0WT295m027A6oKA7ZdSWmMDrrLwQZQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzCEzlqK6Ip%2Bek5lyrcA85DkEu6TnRLyFsdMxPYt5kunbWgw5m9GVREHg3qZL1yrDFzRVpnDfOKps0HdznRxfnsNgpsc0FsilQ5jiCAVeL2Ei1DPRpCgKcyaZtqMJ7kA%2FNz%2BAXX49ml1HbBnOe6tQshyBoeCctm1YTtqPGrTvKZuLG7hXBUj41R1g10r920Dn3xn8mUp%2FBMaIyuvW3x25p3vvFs8nkOPYi6ktu4KhGp51PdvbRF6sLumkhJ%2BnNAO%2BE%2BxAR0Oo6fsv%2BaHdyfzKujDzO%2BZ%2Fwmo1wOr1RoGObKONnGno8sZazJBbOPxezLaBr0zgB9qV%2BztpK%2BOPoro8W6ZKgsGVtIEslDk1JMwtmr%2BQz3GwRGsUCVxKBLJFcPODqLBnoG9lkmD8GKOIsK8XBIzca9KnMNeWXc81bmIqXznBGZbWmeLvNVUu0qhW3cP7hb1GtDQfNwQ%2BMj7idbe7rl82odBj8m%2BLmRLNAhGtS%2FR2r32MDaC%2BpchNX1Aj8AojDp9g5NCXoaiZs93%2FP9nkzZDHVMIkhAgUgw10%2BSAK2LtkKWsBHKE5gcrfzF%2BXQm0QNx7tTLmiHuvQaKCoUWYIpcflc3zSFsVnVI9QV%2BzEo0Jc8MsLaaXbXjqU%2FtfHm8V5qViKI%2BHg6KwO1JMIvZ8rwGOqUBw5TG%2B0KYmagulAxh6GARvJkea%2FFewcg4N4IzFsa%2B9e7leN2gxqbUBBDYcaIIWBIQPqIlox%2FiJiN6yl%2FnEILe19a9FnbUxXyQRfsGUNZy0xxIgyDvTJoKdFNm0pCy0VvUkMK2BtXf5hJz55%2BedLbK1q78eRri0K8F1caBf627HIOrduXZ1wx3r1vMcMvia%2FnZrp7cGOFEBNp7KZkHyoBeZUJfzRvB&X-Amz-Signature=612bf0b4b668ddbdde9a833637746ad9e50844f008c43da2de6bcdbcedaed16b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMINJJQJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4JW8Wm5yzEr8rUzfYJqOvNJw8c4utO%2BJHK13b8tFO7AiEAoYgAgd2HLuhMd0WT295m027A6oKA7ZdSWmMDrrLwQZQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzCEzlqK6Ip%2Bek5lyrcA85DkEu6TnRLyFsdMxPYt5kunbWgw5m9GVREHg3qZL1yrDFzRVpnDfOKps0HdznRxfnsNgpsc0FsilQ5jiCAVeL2Ei1DPRpCgKcyaZtqMJ7kA%2FNz%2BAXX49ml1HbBnOe6tQshyBoeCctm1YTtqPGrTvKZuLG7hXBUj41R1g10r920Dn3xn8mUp%2FBMaIyuvW3x25p3vvFs8nkOPYi6ktu4KhGp51PdvbRF6sLumkhJ%2BnNAO%2BE%2BxAR0Oo6fsv%2BaHdyfzKujDzO%2BZ%2Fwmo1wOr1RoGObKONnGno8sZazJBbOPxezLaBr0zgB9qV%2BztpK%2BOPoro8W6ZKgsGVtIEslDk1JMwtmr%2BQz3GwRGsUCVxKBLJFcPODqLBnoG9lkmD8GKOIsK8XBIzca9KnMNeWXc81bmIqXznBGZbWmeLvNVUu0qhW3cP7hb1GtDQfNwQ%2BMj7idbe7rl82odBj8m%2BLmRLNAhGtS%2FR2r32MDaC%2BpchNX1Aj8AojDp9g5NCXoaiZs93%2FP9nkzZDHVMIkhAgUgw10%2BSAK2LtkKWsBHKE5gcrfzF%2BXQm0QNx7tTLmiHuvQaKCoUWYIpcflc3zSFsVnVI9QV%2BzEo0Jc8MsLaaXbXjqU%2FtfHm8V5qViKI%2BHg6KwO1JMIvZ8rwGOqUBw5TG%2B0KYmagulAxh6GARvJkea%2FFewcg4N4IzFsa%2B9e7leN2gxqbUBBDYcaIIWBIQPqIlox%2FiJiN6yl%2FnEILe19a9FnbUxXyQRfsGUNZy0xxIgyDvTJoKdFNm0pCy0VvUkMK2BtXf5hJz55%2BedLbK1q78eRri0K8F1caBf627HIOrduXZ1wx3r1vMcMvia%2FnZrp7cGOFEBNp7KZkHyoBeZUJfzRvB&X-Amz-Signature=8f4c82c2a7f131b28f322a852235558fc1cd45f013ab30aca29b1aff9f623e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

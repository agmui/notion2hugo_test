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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRW6B2HD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCrs%2BUR%2BYObAjq6u5Txxqzc0R1OebzXjefDwGawJvsDwQIgKXsZ%2FkkglTNuSiiI1a3lZ3b2b25g4n%2BsrudZOgf0XjAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED%2FABQe7ReF0ccRCyrcA%2B4ZLblWzSUd3zdSx3KDiCIGMdW50GW88%2FcLZrhMumGCYbv1xcu%2Bl1FEwyTH6ib8jquVWR0mVB92ic9d4TUGj%2BVcdGEeXkWtTPQQFYnrSPLpfZYg5WFNtOE6M0GeDjP4JGRzrYaE%2FHtzyMawxWxNNogiHqOarcE%2FogyMQqxgLIKki466cSUHUtdSl3%2BhJYN9ofbAk4rixO%2BzJedvH%2BJZyVLSJ5PGCS03R2w6XKXepsxENHB3%2FKp12Pdi987Ay0%2BhbfnUEsYGb5dM6xS407I9K%2Blqwyqkt2fqsKlXj6d5m5mWbzPwF%2BFzJqmeqS9LqGLQd8Z%2Bcbdj52P1IEyX6oRFAT1Dby5EHjuNJFFDbPSpbS7S0xz%2BaTEpBeAo%2BS74su8X4wX%2FCv4%2F9azxaRyJ7LS5dMrehav6fajqgoiCSfvNYbIV0ku8H%2BOrWz6UBCNtxnfdU2ocu%2B%2B3%2FoanjAD%2FiGvFaEPJ9rSZp12fxwfyDOp8iOh9hnVRefatHQPbyblcDVZ6oVkUPDymVdxbeLzykN%2B8LJORwR6kko0l%2BcKYN9pYywqapgAy3VDEEc%2F13cE4IWgCT%2FUxgFZ4edVxakfOhwl9vtrurDnj3t%2BzLdAALUwtiLCVvBPDrZlvQvAkgltDMOGE8b4GOqUBPezvmHN63VSU2tIk8O4fOIycS6dVNjGtQ3vITA136Ckm4eSjrbWopOWcOfG%2BC93UFndIwoGjnYPxuDJLkfYjqaReANx11UJ2ZhW3A2LqfwW0285qGO4gAVN68ZbtOYcViJ%2Bpm2%2FmfOUWp9FQNgY2b457ixC5Y4ErhuZT47%2BkaMNlObrfH5c3kTDlXduMejNveDJimJLvmvWM0lluQDPUwq4czRHJ&X-Amz-Signature=97d8981be223740d07927cc55b36784fcf1045d201f11ec6d643cb3813c311c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRW6B2HD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCrs%2BUR%2BYObAjq6u5Txxqzc0R1OebzXjefDwGawJvsDwQIgKXsZ%2FkkglTNuSiiI1a3lZ3b2b25g4n%2BsrudZOgf0XjAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED%2FABQe7ReF0ccRCyrcA%2B4ZLblWzSUd3zdSx3KDiCIGMdW50GW88%2FcLZrhMumGCYbv1xcu%2Bl1FEwyTH6ib8jquVWR0mVB92ic9d4TUGj%2BVcdGEeXkWtTPQQFYnrSPLpfZYg5WFNtOE6M0GeDjP4JGRzrYaE%2FHtzyMawxWxNNogiHqOarcE%2FogyMQqxgLIKki466cSUHUtdSl3%2BhJYN9ofbAk4rixO%2BzJedvH%2BJZyVLSJ5PGCS03R2w6XKXepsxENHB3%2FKp12Pdi987Ay0%2BhbfnUEsYGb5dM6xS407I9K%2Blqwyqkt2fqsKlXj6d5m5mWbzPwF%2BFzJqmeqS9LqGLQd8Z%2Bcbdj52P1IEyX6oRFAT1Dby5EHjuNJFFDbPSpbS7S0xz%2BaTEpBeAo%2BS74su8X4wX%2FCv4%2F9azxaRyJ7LS5dMrehav6fajqgoiCSfvNYbIV0ku8H%2BOrWz6UBCNtxnfdU2ocu%2B%2B3%2FoanjAD%2FiGvFaEPJ9rSZp12fxwfyDOp8iOh9hnVRefatHQPbyblcDVZ6oVkUPDymVdxbeLzykN%2B8LJORwR6kko0l%2BcKYN9pYywqapgAy3VDEEc%2F13cE4IWgCT%2FUxgFZ4edVxakfOhwl9vtrurDnj3t%2BzLdAALUwtiLCVvBPDrZlvQvAkgltDMOGE8b4GOqUBPezvmHN63VSU2tIk8O4fOIycS6dVNjGtQ3vITA136Ckm4eSjrbWopOWcOfG%2BC93UFndIwoGjnYPxuDJLkfYjqaReANx11UJ2ZhW3A2LqfwW0285qGO4gAVN68ZbtOYcViJ%2Bpm2%2FmfOUWp9FQNgY2b457ixC5Y4ErhuZT47%2BkaMNlObrfH5c3kTDlXduMejNveDJimJLvmvWM0lluQDPUwq4czRHJ&X-Amz-Signature=d8d17ad00fab3c207f9d34cd41a6d8856a6285e6e45148d81e8a970f5d7aa22b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRW6B2HD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCrs%2BUR%2BYObAjq6u5Txxqzc0R1OebzXjefDwGawJvsDwQIgKXsZ%2FkkglTNuSiiI1a3lZ3b2b25g4n%2BsrudZOgf0XjAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED%2FABQe7ReF0ccRCyrcA%2B4ZLblWzSUd3zdSx3KDiCIGMdW50GW88%2FcLZrhMumGCYbv1xcu%2Bl1FEwyTH6ib8jquVWR0mVB92ic9d4TUGj%2BVcdGEeXkWtTPQQFYnrSPLpfZYg5WFNtOE6M0GeDjP4JGRzrYaE%2FHtzyMawxWxNNogiHqOarcE%2FogyMQqxgLIKki466cSUHUtdSl3%2BhJYN9ofbAk4rixO%2BzJedvH%2BJZyVLSJ5PGCS03R2w6XKXepsxENHB3%2FKp12Pdi987Ay0%2BhbfnUEsYGb5dM6xS407I9K%2Blqwyqkt2fqsKlXj6d5m5mWbzPwF%2BFzJqmeqS9LqGLQd8Z%2Bcbdj52P1IEyX6oRFAT1Dby5EHjuNJFFDbPSpbS7S0xz%2BaTEpBeAo%2BS74su8X4wX%2FCv4%2F9azxaRyJ7LS5dMrehav6fajqgoiCSfvNYbIV0ku8H%2BOrWz6UBCNtxnfdU2ocu%2B%2B3%2FoanjAD%2FiGvFaEPJ9rSZp12fxwfyDOp8iOh9hnVRefatHQPbyblcDVZ6oVkUPDymVdxbeLzykN%2B8LJORwR6kko0l%2BcKYN9pYywqapgAy3VDEEc%2F13cE4IWgCT%2FUxgFZ4edVxakfOhwl9vtrurDnj3t%2BzLdAALUwtiLCVvBPDrZlvQvAkgltDMOGE8b4GOqUBPezvmHN63VSU2tIk8O4fOIycS6dVNjGtQ3vITA136Ckm4eSjrbWopOWcOfG%2BC93UFndIwoGjnYPxuDJLkfYjqaReANx11UJ2ZhW3A2LqfwW0285qGO4gAVN68ZbtOYcViJ%2Bpm2%2FmfOUWp9FQNgY2b457ixC5Y4ErhuZT47%2BkaMNlObrfH5c3kTDlXduMejNveDJimJLvmvWM0lluQDPUwq4czRHJ&X-Amz-Signature=de828e3c2fe378014608837589ee2d553c40d53f7da6c95ea150811eae778e34&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRW6B2HD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCrs%2BUR%2BYObAjq6u5Txxqzc0R1OebzXjefDwGawJvsDwQIgKXsZ%2FkkglTNuSiiI1a3lZ3b2b25g4n%2BsrudZOgf0XjAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED%2FABQe7ReF0ccRCyrcA%2B4ZLblWzSUd3zdSx3KDiCIGMdW50GW88%2FcLZrhMumGCYbv1xcu%2Bl1FEwyTH6ib8jquVWR0mVB92ic9d4TUGj%2BVcdGEeXkWtTPQQFYnrSPLpfZYg5WFNtOE6M0GeDjP4JGRzrYaE%2FHtzyMawxWxNNogiHqOarcE%2FogyMQqxgLIKki466cSUHUtdSl3%2BhJYN9ofbAk4rixO%2BzJedvH%2BJZyVLSJ5PGCS03R2w6XKXepsxENHB3%2FKp12Pdi987Ay0%2BhbfnUEsYGb5dM6xS407I9K%2Blqwyqkt2fqsKlXj6d5m5mWbzPwF%2BFzJqmeqS9LqGLQd8Z%2Bcbdj52P1IEyX6oRFAT1Dby5EHjuNJFFDbPSpbS7S0xz%2BaTEpBeAo%2BS74su8X4wX%2FCv4%2F9azxaRyJ7LS5dMrehav6fajqgoiCSfvNYbIV0ku8H%2BOrWz6UBCNtxnfdU2ocu%2B%2B3%2FoanjAD%2FiGvFaEPJ9rSZp12fxwfyDOp8iOh9hnVRefatHQPbyblcDVZ6oVkUPDymVdxbeLzykN%2B8LJORwR6kko0l%2BcKYN9pYywqapgAy3VDEEc%2F13cE4IWgCT%2FUxgFZ4edVxakfOhwl9vtrurDnj3t%2BzLdAALUwtiLCVvBPDrZlvQvAkgltDMOGE8b4GOqUBPezvmHN63VSU2tIk8O4fOIycS6dVNjGtQ3vITA136Ckm4eSjrbWopOWcOfG%2BC93UFndIwoGjnYPxuDJLkfYjqaReANx11UJ2ZhW3A2LqfwW0285qGO4gAVN68ZbtOYcViJ%2Bpm2%2FmfOUWp9FQNgY2b457ixC5Y4ErhuZT47%2BkaMNlObrfH5c3kTDlXduMejNveDJimJLvmvWM0lluQDPUwq4czRHJ&X-Amz-Signature=c0cca3f5c7c9fd5e259ea6ac81f192bdf05a2496445b199c6c6193b464340355&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRW6B2HD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCrs%2BUR%2BYObAjq6u5Txxqzc0R1OebzXjefDwGawJvsDwQIgKXsZ%2FkkglTNuSiiI1a3lZ3b2b25g4n%2BsrudZOgf0XjAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED%2FABQe7ReF0ccRCyrcA%2B4ZLblWzSUd3zdSx3KDiCIGMdW50GW88%2FcLZrhMumGCYbv1xcu%2Bl1FEwyTH6ib8jquVWR0mVB92ic9d4TUGj%2BVcdGEeXkWtTPQQFYnrSPLpfZYg5WFNtOE6M0GeDjP4JGRzrYaE%2FHtzyMawxWxNNogiHqOarcE%2FogyMQqxgLIKki466cSUHUtdSl3%2BhJYN9ofbAk4rixO%2BzJedvH%2BJZyVLSJ5PGCS03R2w6XKXepsxENHB3%2FKp12Pdi987Ay0%2BhbfnUEsYGb5dM6xS407I9K%2Blqwyqkt2fqsKlXj6d5m5mWbzPwF%2BFzJqmeqS9LqGLQd8Z%2Bcbdj52P1IEyX6oRFAT1Dby5EHjuNJFFDbPSpbS7S0xz%2BaTEpBeAo%2BS74su8X4wX%2FCv4%2F9azxaRyJ7LS5dMrehav6fajqgoiCSfvNYbIV0ku8H%2BOrWz6UBCNtxnfdU2ocu%2B%2B3%2FoanjAD%2FiGvFaEPJ9rSZp12fxwfyDOp8iOh9hnVRefatHQPbyblcDVZ6oVkUPDymVdxbeLzykN%2B8LJORwR6kko0l%2BcKYN9pYywqapgAy3VDEEc%2F13cE4IWgCT%2FUxgFZ4edVxakfOhwl9vtrurDnj3t%2BzLdAALUwtiLCVvBPDrZlvQvAkgltDMOGE8b4GOqUBPezvmHN63VSU2tIk8O4fOIycS6dVNjGtQ3vITA136Ckm4eSjrbWopOWcOfG%2BC93UFndIwoGjnYPxuDJLkfYjqaReANx11UJ2ZhW3A2LqfwW0285qGO4gAVN68ZbtOYcViJ%2Bpm2%2FmfOUWp9FQNgY2b457ixC5Y4ErhuZT47%2BkaMNlObrfH5c3kTDlXduMejNveDJimJLvmvWM0lluQDPUwq4czRHJ&X-Amz-Signature=a519cc04c4c170418d98ab019eba485b7435bce5a83dc4513a4de714e52ef9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRW6B2HD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCrs%2BUR%2BYObAjq6u5Txxqzc0R1OebzXjefDwGawJvsDwQIgKXsZ%2FkkglTNuSiiI1a3lZ3b2b25g4n%2BsrudZOgf0XjAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED%2FABQe7ReF0ccRCyrcA%2B4ZLblWzSUd3zdSx3KDiCIGMdW50GW88%2FcLZrhMumGCYbv1xcu%2Bl1FEwyTH6ib8jquVWR0mVB92ic9d4TUGj%2BVcdGEeXkWtTPQQFYnrSPLpfZYg5WFNtOE6M0GeDjP4JGRzrYaE%2FHtzyMawxWxNNogiHqOarcE%2FogyMQqxgLIKki466cSUHUtdSl3%2BhJYN9ofbAk4rixO%2BzJedvH%2BJZyVLSJ5PGCS03R2w6XKXepsxENHB3%2FKp12Pdi987Ay0%2BhbfnUEsYGb5dM6xS407I9K%2Blqwyqkt2fqsKlXj6d5m5mWbzPwF%2BFzJqmeqS9LqGLQd8Z%2Bcbdj52P1IEyX6oRFAT1Dby5EHjuNJFFDbPSpbS7S0xz%2BaTEpBeAo%2BS74su8X4wX%2FCv4%2F9azxaRyJ7LS5dMrehav6fajqgoiCSfvNYbIV0ku8H%2BOrWz6UBCNtxnfdU2ocu%2B%2B3%2FoanjAD%2FiGvFaEPJ9rSZp12fxwfyDOp8iOh9hnVRefatHQPbyblcDVZ6oVkUPDymVdxbeLzykN%2B8LJORwR6kko0l%2BcKYN9pYywqapgAy3VDEEc%2F13cE4IWgCT%2FUxgFZ4edVxakfOhwl9vtrurDnj3t%2BzLdAALUwtiLCVvBPDrZlvQvAkgltDMOGE8b4GOqUBPezvmHN63VSU2tIk8O4fOIycS6dVNjGtQ3vITA136Ckm4eSjrbWopOWcOfG%2BC93UFndIwoGjnYPxuDJLkfYjqaReANx11UJ2ZhW3A2LqfwW0285qGO4gAVN68ZbtOYcViJ%2Bpm2%2FmfOUWp9FQNgY2b457ixC5Y4ErhuZT47%2BkaMNlObrfH5c3kTDlXduMejNveDJimJLvmvWM0lluQDPUwq4czRHJ&X-Amz-Signature=edf24b45330ff4b8e20b682b3a858904f67ed8f68c01d78e4b029ca046b9acfc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRW6B2HD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCrs%2BUR%2BYObAjq6u5Txxqzc0R1OebzXjefDwGawJvsDwQIgKXsZ%2FkkglTNuSiiI1a3lZ3b2b25g4n%2BsrudZOgf0XjAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED%2FABQe7ReF0ccRCyrcA%2B4ZLblWzSUd3zdSx3KDiCIGMdW50GW88%2FcLZrhMumGCYbv1xcu%2Bl1FEwyTH6ib8jquVWR0mVB92ic9d4TUGj%2BVcdGEeXkWtTPQQFYnrSPLpfZYg5WFNtOE6M0GeDjP4JGRzrYaE%2FHtzyMawxWxNNogiHqOarcE%2FogyMQqxgLIKki466cSUHUtdSl3%2BhJYN9ofbAk4rixO%2BzJedvH%2BJZyVLSJ5PGCS03R2w6XKXepsxENHB3%2FKp12Pdi987Ay0%2BhbfnUEsYGb5dM6xS407I9K%2Blqwyqkt2fqsKlXj6d5m5mWbzPwF%2BFzJqmeqS9LqGLQd8Z%2Bcbdj52P1IEyX6oRFAT1Dby5EHjuNJFFDbPSpbS7S0xz%2BaTEpBeAo%2BS74su8X4wX%2FCv4%2F9azxaRyJ7LS5dMrehav6fajqgoiCSfvNYbIV0ku8H%2BOrWz6UBCNtxnfdU2ocu%2B%2B3%2FoanjAD%2FiGvFaEPJ9rSZp12fxwfyDOp8iOh9hnVRefatHQPbyblcDVZ6oVkUPDymVdxbeLzykN%2B8LJORwR6kko0l%2BcKYN9pYywqapgAy3VDEEc%2F13cE4IWgCT%2FUxgFZ4edVxakfOhwl9vtrurDnj3t%2BzLdAALUwtiLCVvBPDrZlvQvAkgltDMOGE8b4GOqUBPezvmHN63VSU2tIk8O4fOIycS6dVNjGtQ3vITA136Ckm4eSjrbWopOWcOfG%2BC93UFndIwoGjnYPxuDJLkfYjqaReANx11UJ2ZhW3A2LqfwW0285qGO4gAVN68ZbtOYcViJ%2Bpm2%2FmfOUWp9FQNgY2b457ixC5Y4ErhuZT47%2BkaMNlObrfH5c3kTDlXduMejNveDJimJLvmvWM0lluQDPUwq4czRHJ&X-Amz-Signature=46512d7ae974ad790fabc1c3a8de60bc1fd7e03828828e29376f5c3a6e09402e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

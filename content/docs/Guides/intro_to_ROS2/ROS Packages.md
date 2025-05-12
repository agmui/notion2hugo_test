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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZN3CWG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDtvJVm7rHApmt62VyZ3DknJMhyxsaICjwE9Mq1P1OSfAiEA7IIbso24nG4Ujib9ys2nqjnX2skflqruAP0tlmKMqYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvxkzItvb50tBz4%2BCrcA0ZD76unmy5CylDn6BBFi4YK9hISJ47tZPKIAurEsA7MHMZJE%2FRlvU34AFJ2TbyLrBiphs77XfRoPrlK%2BWcqcaVBOei7c%2BRDfivlrh%2FljHfNnxBKzVRsEpbuA6SINiwPamogSzD77Z%2F6kmMQkEk0VLQLNZoA0zPAGzyPQiW0Q6k17Rp8voNVkT%2FE3F26gS8ESBUtSCfGWuEyGfXC7MwblcYxYpRZXuIaY8h%2Fpjyd5m4z3ShK2KoP4YARlfP1eYLPRTiQ67%2BbRhW4btJ76oWdwHikeYW2uAUa6IpWgkY5YRpzJigE3BD%2FDSjo7C%2F89pdJ6KvRJ%2Bo3vpmtOoyKng2agxuwx3vx%2Fd7U%2Fx6iqE%2FDiN7x5Gv3UjdsyU1p7RB%2F8Ztg2Huv%2BubazLcZhoNNxC3zjff1QHUhrRiMuGXmt%2BDX7LYewIR0d6u41AMwMtcq8rC%2FRS3y%2Bq2%2FzRdOwRdDTk%2FrP6H3w4FP13a2QCPyyPeyhrjheSr%2F0Sb%2BnIz14K4%2FSC%2FaemqZ0kizayWJBQz4fu97AZDQdtBzg9gBdC3ztLf4OOs5%2BeGzamz74NCIvqfUNaLnll37eUa1lctSdJtNW%2Fy0awVV4O1t%2FNS03bD4Z67BlZBFciaI1DhxzK1oX3A2MJKEhsEGOqUBhXwI86t6NwJ4kN8CaoySpbJzvQWBQxphMMAnLoiCAXIXgpAfoppak5WOc6Z816cIoJHjR64Iu1FNGY1qu2phNt5tK%2B28NAeQ2Jln4E9j5R7eIPw%2FECV8YGt9LnLMuYGAizCc%2F%2Ba00cMRklQ8PAyw7DlbWET9yESQJXeCscdRxyUTXX8z%2B5zzgh6DGfrAcoEPBx%2FWviMH8EMNbNt138DxZzhTHgrR&X-Amz-Signature=5bf35607036a71bb5020611d144b2cd998b1172cb16d0b794dd724e4d989b25d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZN3CWG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDtvJVm7rHApmt62VyZ3DknJMhyxsaICjwE9Mq1P1OSfAiEA7IIbso24nG4Ujib9ys2nqjnX2skflqruAP0tlmKMqYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvxkzItvb50tBz4%2BCrcA0ZD76unmy5CylDn6BBFi4YK9hISJ47tZPKIAurEsA7MHMZJE%2FRlvU34AFJ2TbyLrBiphs77XfRoPrlK%2BWcqcaVBOei7c%2BRDfivlrh%2FljHfNnxBKzVRsEpbuA6SINiwPamogSzD77Z%2F6kmMQkEk0VLQLNZoA0zPAGzyPQiW0Q6k17Rp8voNVkT%2FE3F26gS8ESBUtSCfGWuEyGfXC7MwblcYxYpRZXuIaY8h%2Fpjyd5m4z3ShK2KoP4YARlfP1eYLPRTiQ67%2BbRhW4btJ76oWdwHikeYW2uAUa6IpWgkY5YRpzJigE3BD%2FDSjo7C%2F89pdJ6KvRJ%2Bo3vpmtOoyKng2agxuwx3vx%2Fd7U%2Fx6iqE%2FDiN7x5Gv3UjdsyU1p7RB%2F8Ztg2Huv%2BubazLcZhoNNxC3zjff1QHUhrRiMuGXmt%2BDX7LYewIR0d6u41AMwMtcq8rC%2FRS3y%2Bq2%2FzRdOwRdDTk%2FrP6H3w4FP13a2QCPyyPeyhrjheSr%2F0Sb%2BnIz14K4%2FSC%2FaemqZ0kizayWJBQz4fu97AZDQdtBzg9gBdC3ztLf4OOs5%2BeGzamz74NCIvqfUNaLnll37eUa1lctSdJtNW%2Fy0awVV4O1t%2FNS03bD4Z67BlZBFciaI1DhxzK1oX3A2MJKEhsEGOqUBhXwI86t6NwJ4kN8CaoySpbJzvQWBQxphMMAnLoiCAXIXgpAfoppak5WOc6Z816cIoJHjR64Iu1FNGY1qu2phNt5tK%2B28NAeQ2Jln4E9j5R7eIPw%2FECV8YGt9LnLMuYGAizCc%2F%2Ba00cMRklQ8PAyw7DlbWET9yESQJXeCscdRxyUTXX8z%2B5zzgh6DGfrAcoEPBx%2FWviMH8EMNbNt138DxZzhTHgrR&X-Amz-Signature=da69f8f1350332d64282c90d519f29c4bef8dd12f527b615a35976435abc960c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZN3CWG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDtvJVm7rHApmt62VyZ3DknJMhyxsaICjwE9Mq1P1OSfAiEA7IIbso24nG4Ujib9ys2nqjnX2skflqruAP0tlmKMqYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvxkzItvb50tBz4%2BCrcA0ZD76unmy5CylDn6BBFi4YK9hISJ47tZPKIAurEsA7MHMZJE%2FRlvU34AFJ2TbyLrBiphs77XfRoPrlK%2BWcqcaVBOei7c%2BRDfivlrh%2FljHfNnxBKzVRsEpbuA6SINiwPamogSzD77Z%2F6kmMQkEk0VLQLNZoA0zPAGzyPQiW0Q6k17Rp8voNVkT%2FE3F26gS8ESBUtSCfGWuEyGfXC7MwblcYxYpRZXuIaY8h%2Fpjyd5m4z3ShK2KoP4YARlfP1eYLPRTiQ67%2BbRhW4btJ76oWdwHikeYW2uAUa6IpWgkY5YRpzJigE3BD%2FDSjo7C%2F89pdJ6KvRJ%2Bo3vpmtOoyKng2agxuwx3vx%2Fd7U%2Fx6iqE%2FDiN7x5Gv3UjdsyU1p7RB%2F8Ztg2Huv%2BubazLcZhoNNxC3zjff1QHUhrRiMuGXmt%2BDX7LYewIR0d6u41AMwMtcq8rC%2FRS3y%2Bq2%2FzRdOwRdDTk%2FrP6H3w4FP13a2QCPyyPeyhrjheSr%2F0Sb%2BnIz14K4%2FSC%2FaemqZ0kizayWJBQz4fu97AZDQdtBzg9gBdC3ztLf4OOs5%2BeGzamz74NCIvqfUNaLnll37eUa1lctSdJtNW%2Fy0awVV4O1t%2FNS03bD4Z67BlZBFciaI1DhxzK1oX3A2MJKEhsEGOqUBhXwI86t6NwJ4kN8CaoySpbJzvQWBQxphMMAnLoiCAXIXgpAfoppak5WOc6Z816cIoJHjR64Iu1FNGY1qu2phNt5tK%2B28NAeQ2Jln4E9j5R7eIPw%2FECV8YGt9LnLMuYGAizCc%2F%2Ba00cMRklQ8PAyw7DlbWET9yESQJXeCscdRxyUTXX8z%2B5zzgh6DGfrAcoEPBx%2FWviMH8EMNbNt138DxZzhTHgrR&X-Amz-Signature=6024977f26db8dbf10a70e41070adc4e0e489d62e04cf7b263e856a55aa9adee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZN3CWG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDtvJVm7rHApmt62VyZ3DknJMhyxsaICjwE9Mq1P1OSfAiEA7IIbso24nG4Ujib9ys2nqjnX2skflqruAP0tlmKMqYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvxkzItvb50tBz4%2BCrcA0ZD76unmy5CylDn6BBFi4YK9hISJ47tZPKIAurEsA7MHMZJE%2FRlvU34AFJ2TbyLrBiphs77XfRoPrlK%2BWcqcaVBOei7c%2BRDfivlrh%2FljHfNnxBKzVRsEpbuA6SINiwPamogSzD77Z%2F6kmMQkEk0VLQLNZoA0zPAGzyPQiW0Q6k17Rp8voNVkT%2FE3F26gS8ESBUtSCfGWuEyGfXC7MwblcYxYpRZXuIaY8h%2Fpjyd5m4z3ShK2KoP4YARlfP1eYLPRTiQ67%2BbRhW4btJ76oWdwHikeYW2uAUa6IpWgkY5YRpzJigE3BD%2FDSjo7C%2F89pdJ6KvRJ%2Bo3vpmtOoyKng2agxuwx3vx%2Fd7U%2Fx6iqE%2FDiN7x5Gv3UjdsyU1p7RB%2F8Ztg2Huv%2BubazLcZhoNNxC3zjff1QHUhrRiMuGXmt%2BDX7LYewIR0d6u41AMwMtcq8rC%2FRS3y%2Bq2%2FzRdOwRdDTk%2FrP6H3w4FP13a2QCPyyPeyhrjheSr%2F0Sb%2BnIz14K4%2FSC%2FaemqZ0kizayWJBQz4fu97AZDQdtBzg9gBdC3ztLf4OOs5%2BeGzamz74NCIvqfUNaLnll37eUa1lctSdJtNW%2Fy0awVV4O1t%2FNS03bD4Z67BlZBFciaI1DhxzK1oX3A2MJKEhsEGOqUBhXwI86t6NwJ4kN8CaoySpbJzvQWBQxphMMAnLoiCAXIXgpAfoppak5WOc6Z816cIoJHjR64Iu1FNGY1qu2phNt5tK%2B28NAeQ2Jln4E9j5R7eIPw%2FECV8YGt9LnLMuYGAizCc%2F%2Ba00cMRklQ8PAyw7DlbWET9yESQJXeCscdRxyUTXX8z%2B5zzgh6DGfrAcoEPBx%2FWviMH8EMNbNt138DxZzhTHgrR&X-Amz-Signature=2be4d1395193e35ba68132b8577937e90b950fa78f588abddb4ea6ddc3f9fe6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZN3CWG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDtvJVm7rHApmt62VyZ3DknJMhyxsaICjwE9Mq1P1OSfAiEA7IIbso24nG4Ujib9ys2nqjnX2skflqruAP0tlmKMqYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvxkzItvb50tBz4%2BCrcA0ZD76unmy5CylDn6BBFi4YK9hISJ47tZPKIAurEsA7MHMZJE%2FRlvU34AFJ2TbyLrBiphs77XfRoPrlK%2BWcqcaVBOei7c%2BRDfivlrh%2FljHfNnxBKzVRsEpbuA6SINiwPamogSzD77Z%2F6kmMQkEk0VLQLNZoA0zPAGzyPQiW0Q6k17Rp8voNVkT%2FE3F26gS8ESBUtSCfGWuEyGfXC7MwblcYxYpRZXuIaY8h%2Fpjyd5m4z3ShK2KoP4YARlfP1eYLPRTiQ67%2BbRhW4btJ76oWdwHikeYW2uAUa6IpWgkY5YRpzJigE3BD%2FDSjo7C%2F89pdJ6KvRJ%2Bo3vpmtOoyKng2agxuwx3vx%2Fd7U%2Fx6iqE%2FDiN7x5Gv3UjdsyU1p7RB%2F8Ztg2Huv%2BubazLcZhoNNxC3zjff1QHUhrRiMuGXmt%2BDX7LYewIR0d6u41AMwMtcq8rC%2FRS3y%2Bq2%2FzRdOwRdDTk%2FrP6H3w4FP13a2QCPyyPeyhrjheSr%2F0Sb%2BnIz14K4%2FSC%2FaemqZ0kizayWJBQz4fu97AZDQdtBzg9gBdC3ztLf4OOs5%2BeGzamz74NCIvqfUNaLnll37eUa1lctSdJtNW%2Fy0awVV4O1t%2FNS03bD4Z67BlZBFciaI1DhxzK1oX3A2MJKEhsEGOqUBhXwI86t6NwJ4kN8CaoySpbJzvQWBQxphMMAnLoiCAXIXgpAfoppak5WOc6Z816cIoJHjR64Iu1FNGY1qu2phNt5tK%2B28NAeQ2Jln4E9j5R7eIPw%2FECV8YGt9LnLMuYGAizCc%2F%2Ba00cMRklQ8PAyw7DlbWET9yESQJXeCscdRxyUTXX8z%2B5zzgh6DGfrAcoEPBx%2FWviMH8EMNbNt138DxZzhTHgrR&X-Amz-Signature=a68ecd00eb7c9397ac08ff7ec28b9f92d1dbacb41af0040dba638b07a27274b8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZN3CWG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDtvJVm7rHApmt62VyZ3DknJMhyxsaICjwE9Mq1P1OSfAiEA7IIbso24nG4Ujib9ys2nqjnX2skflqruAP0tlmKMqYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvxkzItvb50tBz4%2BCrcA0ZD76unmy5CylDn6BBFi4YK9hISJ47tZPKIAurEsA7MHMZJE%2FRlvU34AFJ2TbyLrBiphs77XfRoPrlK%2BWcqcaVBOei7c%2BRDfivlrh%2FljHfNnxBKzVRsEpbuA6SINiwPamogSzD77Z%2F6kmMQkEk0VLQLNZoA0zPAGzyPQiW0Q6k17Rp8voNVkT%2FE3F26gS8ESBUtSCfGWuEyGfXC7MwblcYxYpRZXuIaY8h%2Fpjyd5m4z3ShK2KoP4YARlfP1eYLPRTiQ67%2BbRhW4btJ76oWdwHikeYW2uAUa6IpWgkY5YRpzJigE3BD%2FDSjo7C%2F89pdJ6KvRJ%2Bo3vpmtOoyKng2agxuwx3vx%2Fd7U%2Fx6iqE%2FDiN7x5Gv3UjdsyU1p7RB%2F8Ztg2Huv%2BubazLcZhoNNxC3zjff1QHUhrRiMuGXmt%2BDX7LYewIR0d6u41AMwMtcq8rC%2FRS3y%2Bq2%2FzRdOwRdDTk%2FrP6H3w4FP13a2QCPyyPeyhrjheSr%2F0Sb%2BnIz14K4%2FSC%2FaemqZ0kizayWJBQz4fu97AZDQdtBzg9gBdC3ztLf4OOs5%2BeGzamz74NCIvqfUNaLnll37eUa1lctSdJtNW%2Fy0awVV4O1t%2FNS03bD4Z67BlZBFciaI1DhxzK1oX3A2MJKEhsEGOqUBhXwI86t6NwJ4kN8CaoySpbJzvQWBQxphMMAnLoiCAXIXgpAfoppak5WOc6Z816cIoJHjR64Iu1FNGY1qu2phNt5tK%2B28NAeQ2Jln4E9j5R7eIPw%2FECV8YGt9LnLMuYGAizCc%2F%2Ba00cMRklQ8PAyw7DlbWET9yESQJXeCscdRxyUTXX8z%2B5zzgh6DGfrAcoEPBx%2FWviMH8EMNbNt138DxZzhTHgrR&X-Amz-Signature=a47dbcaba36b2bb17c777e15253a1cff303b131f6d1049a3702a22a0457e20bc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZN3CWG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDtvJVm7rHApmt62VyZ3DknJMhyxsaICjwE9Mq1P1OSfAiEA7IIbso24nG4Ujib9ys2nqjnX2skflqruAP0tlmKMqYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvxkzItvb50tBz4%2BCrcA0ZD76unmy5CylDn6BBFi4YK9hISJ47tZPKIAurEsA7MHMZJE%2FRlvU34AFJ2TbyLrBiphs77XfRoPrlK%2BWcqcaVBOei7c%2BRDfivlrh%2FljHfNnxBKzVRsEpbuA6SINiwPamogSzD77Z%2F6kmMQkEk0VLQLNZoA0zPAGzyPQiW0Q6k17Rp8voNVkT%2FE3F26gS8ESBUtSCfGWuEyGfXC7MwblcYxYpRZXuIaY8h%2Fpjyd5m4z3ShK2KoP4YARlfP1eYLPRTiQ67%2BbRhW4btJ76oWdwHikeYW2uAUa6IpWgkY5YRpzJigE3BD%2FDSjo7C%2F89pdJ6KvRJ%2Bo3vpmtOoyKng2agxuwx3vx%2Fd7U%2Fx6iqE%2FDiN7x5Gv3UjdsyU1p7RB%2F8Ztg2Huv%2BubazLcZhoNNxC3zjff1QHUhrRiMuGXmt%2BDX7LYewIR0d6u41AMwMtcq8rC%2FRS3y%2Bq2%2FzRdOwRdDTk%2FrP6H3w4FP13a2QCPyyPeyhrjheSr%2F0Sb%2BnIz14K4%2FSC%2FaemqZ0kizayWJBQz4fu97AZDQdtBzg9gBdC3ztLf4OOs5%2BeGzamz74NCIvqfUNaLnll37eUa1lctSdJtNW%2Fy0awVV4O1t%2FNS03bD4Z67BlZBFciaI1DhxzK1oX3A2MJKEhsEGOqUBhXwI86t6NwJ4kN8CaoySpbJzvQWBQxphMMAnLoiCAXIXgpAfoppak5WOc6Z816cIoJHjR64Iu1FNGY1qu2phNt5tK%2B28NAeQ2Jln4E9j5R7eIPw%2FECV8YGt9LnLMuYGAizCc%2F%2Ba00cMRklQ8PAyw7DlbWET9yESQJXeCscdRxyUTXX8z%2B5zzgh6DGfrAcoEPBx%2FWviMH8EMNbNt138DxZzhTHgrR&X-Amz-Signature=ef4cf4fc01130feec15c087274854da84d7359b7f6535dd598078488b9193bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

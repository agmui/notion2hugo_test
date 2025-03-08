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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U7WQJB6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC0%2F4vOijLjco3vn9Ug4flI6kF40Bj19B4AvUvmbGOi3QIgTZEThyvkRYOeRodGeEvU9nJtxjt5t7MuPGZam2CT1gYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPawBcYqi%2FebUs0OnSrcA0mDk%2F%2F8SxJZCnWbkUyDrupTzwhqgMVn7n66Pmf%2F00s3vNH9auX90gaQPTGMCoYYdeqRwqvuIPt3ke6X0OMoNRGnMBT05%2FmJLFXRjM9wEbmICjRhkSxLkK7eSW3tqb6dvq%2BHAdTC%2Bu8OjtmFQkQj7xTCsf%2BtcRysUbDJT%2BLvpUL1qgUpjvLIneoXIY6ppRzPlUA6mD9lTF4S5Vhv4sy0P%2FazXRAYPd6P26LpDZ%2BH8vQbUQONkljWhQT2OqKsCAL2r44BqSjp3olCmRWj3b%2BE%2Fu3vvzRviyPJUXnmcLR5aVvgHKNgVo5KFZg6CRkXcikEJU1SI%2Bs6Fuhu3wuIyXLpILPIOnt5zKMKpozO0rTLrl9IkHKXlLS1uNcdXIR8HZPBxF%2BumXnQXAN7Q2r8QVNU4tF32Va3aa7ai2MoGhghreInnR1lcKFCU2r8Zlra7oMiEhKUS8pAzTIjHjL1Po8IJwENbh2qDtcR8sm0ia506OQlf0551VHgwwMudW6RT2WveY9y9%2BwirygMeKiFtNneUM%2Fb3uXc5fnMYtM6flcBLP%2Brwb%2FzEvoqQCyIF6hoCfftTQJQ5GMZ%2BRmD9LViMtoGuKugeKvUxb%2F99R6zvSyAM6GhvcLjeyQUddvusS2aMJvgr74GOqUBtWsfBKhc5N2vhKFCLwFFutBLmPUT0wcRY3WtKQMVHSNBwUJ1Lv9q3MDsKo4HY08JQAeTo%2FwFKUozxyGXyveBS%2B4i9eeWlvJ925ejBU09vHyD84rNdpC616QKvGhmpTCYHiDbXy3blM%2FtcRfdLHnMXSHcbAvOouRCCzGees%2BTwUdzkvVFr%2B1RJt7LyDVCVcatA5itMZ3UVPndEt01bzNwqz6NHVke&X-Amz-Signature=f1d3a18545778e0c6a32e660dc386de086dbf0ceb34ecca2a2f2f40df9f4e288&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U7WQJB6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC0%2F4vOijLjco3vn9Ug4flI6kF40Bj19B4AvUvmbGOi3QIgTZEThyvkRYOeRodGeEvU9nJtxjt5t7MuPGZam2CT1gYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPawBcYqi%2FebUs0OnSrcA0mDk%2F%2F8SxJZCnWbkUyDrupTzwhqgMVn7n66Pmf%2F00s3vNH9auX90gaQPTGMCoYYdeqRwqvuIPt3ke6X0OMoNRGnMBT05%2FmJLFXRjM9wEbmICjRhkSxLkK7eSW3tqb6dvq%2BHAdTC%2Bu8OjtmFQkQj7xTCsf%2BtcRysUbDJT%2BLvpUL1qgUpjvLIneoXIY6ppRzPlUA6mD9lTF4S5Vhv4sy0P%2FazXRAYPd6P26LpDZ%2BH8vQbUQONkljWhQT2OqKsCAL2r44BqSjp3olCmRWj3b%2BE%2Fu3vvzRviyPJUXnmcLR5aVvgHKNgVo5KFZg6CRkXcikEJU1SI%2Bs6Fuhu3wuIyXLpILPIOnt5zKMKpozO0rTLrl9IkHKXlLS1uNcdXIR8HZPBxF%2BumXnQXAN7Q2r8QVNU4tF32Va3aa7ai2MoGhghreInnR1lcKFCU2r8Zlra7oMiEhKUS8pAzTIjHjL1Po8IJwENbh2qDtcR8sm0ia506OQlf0551VHgwwMudW6RT2WveY9y9%2BwirygMeKiFtNneUM%2Fb3uXc5fnMYtM6flcBLP%2Brwb%2FzEvoqQCyIF6hoCfftTQJQ5GMZ%2BRmD9LViMtoGuKugeKvUxb%2F99R6zvSyAM6GhvcLjeyQUddvusS2aMJvgr74GOqUBtWsfBKhc5N2vhKFCLwFFutBLmPUT0wcRY3WtKQMVHSNBwUJ1Lv9q3MDsKo4HY08JQAeTo%2FwFKUozxyGXyveBS%2B4i9eeWlvJ925ejBU09vHyD84rNdpC616QKvGhmpTCYHiDbXy3blM%2FtcRfdLHnMXSHcbAvOouRCCzGees%2BTwUdzkvVFr%2B1RJt7LyDVCVcatA5itMZ3UVPndEt01bzNwqz6NHVke&X-Amz-Signature=d7295ee9878f25d8b6dc1c6d4715919192e1caed668f2a02a1cf156515e939d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U7WQJB6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC0%2F4vOijLjco3vn9Ug4flI6kF40Bj19B4AvUvmbGOi3QIgTZEThyvkRYOeRodGeEvU9nJtxjt5t7MuPGZam2CT1gYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPawBcYqi%2FebUs0OnSrcA0mDk%2F%2F8SxJZCnWbkUyDrupTzwhqgMVn7n66Pmf%2F00s3vNH9auX90gaQPTGMCoYYdeqRwqvuIPt3ke6X0OMoNRGnMBT05%2FmJLFXRjM9wEbmICjRhkSxLkK7eSW3tqb6dvq%2BHAdTC%2Bu8OjtmFQkQj7xTCsf%2BtcRysUbDJT%2BLvpUL1qgUpjvLIneoXIY6ppRzPlUA6mD9lTF4S5Vhv4sy0P%2FazXRAYPd6P26LpDZ%2BH8vQbUQONkljWhQT2OqKsCAL2r44BqSjp3olCmRWj3b%2BE%2Fu3vvzRviyPJUXnmcLR5aVvgHKNgVo5KFZg6CRkXcikEJU1SI%2Bs6Fuhu3wuIyXLpILPIOnt5zKMKpozO0rTLrl9IkHKXlLS1uNcdXIR8HZPBxF%2BumXnQXAN7Q2r8QVNU4tF32Va3aa7ai2MoGhghreInnR1lcKFCU2r8Zlra7oMiEhKUS8pAzTIjHjL1Po8IJwENbh2qDtcR8sm0ia506OQlf0551VHgwwMudW6RT2WveY9y9%2BwirygMeKiFtNneUM%2Fb3uXc5fnMYtM6flcBLP%2Brwb%2FzEvoqQCyIF6hoCfftTQJQ5GMZ%2BRmD9LViMtoGuKugeKvUxb%2F99R6zvSyAM6GhvcLjeyQUddvusS2aMJvgr74GOqUBtWsfBKhc5N2vhKFCLwFFutBLmPUT0wcRY3WtKQMVHSNBwUJ1Lv9q3MDsKo4HY08JQAeTo%2FwFKUozxyGXyveBS%2B4i9eeWlvJ925ejBU09vHyD84rNdpC616QKvGhmpTCYHiDbXy3blM%2FtcRfdLHnMXSHcbAvOouRCCzGees%2BTwUdzkvVFr%2B1RJt7LyDVCVcatA5itMZ3UVPndEt01bzNwqz6NHVke&X-Amz-Signature=1f52887ce617bd4d51fa6f1c885548e473dbe763026eca34f8fdc829057fc590&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U7WQJB6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC0%2F4vOijLjco3vn9Ug4flI6kF40Bj19B4AvUvmbGOi3QIgTZEThyvkRYOeRodGeEvU9nJtxjt5t7MuPGZam2CT1gYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPawBcYqi%2FebUs0OnSrcA0mDk%2F%2F8SxJZCnWbkUyDrupTzwhqgMVn7n66Pmf%2F00s3vNH9auX90gaQPTGMCoYYdeqRwqvuIPt3ke6X0OMoNRGnMBT05%2FmJLFXRjM9wEbmICjRhkSxLkK7eSW3tqb6dvq%2BHAdTC%2Bu8OjtmFQkQj7xTCsf%2BtcRysUbDJT%2BLvpUL1qgUpjvLIneoXIY6ppRzPlUA6mD9lTF4S5Vhv4sy0P%2FazXRAYPd6P26LpDZ%2BH8vQbUQONkljWhQT2OqKsCAL2r44BqSjp3olCmRWj3b%2BE%2Fu3vvzRviyPJUXnmcLR5aVvgHKNgVo5KFZg6CRkXcikEJU1SI%2Bs6Fuhu3wuIyXLpILPIOnt5zKMKpozO0rTLrl9IkHKXlLS1uNcdXIR8HZPBxF%2BumXnQXAN7Q2r8QVNU4tF32Va3aa7ai2MoGhghreInnR1lcKFCU2r8Zlra7oMiEhKUS8pAzTIjHjL1Po8IJwENbh2qDtcR8sm0ia506OQlf0551VHgwwMudW6RT2WveY9y9%2BwirygMeKiFtNneUM%2Fb3uXc5fnMYtM6flcBLP%2Brwb%2FzEvoqQCyIF6hoCfftTQJQ5GMZ%2BRmD9LViMtoGuKugeKvUxb%2F99R6zvSyAM6GhvcLjeyQUddvusS2aMJvgr74GOqUBtWsfBKhc5N2vhKFCLwFFutBLmPUT0wcRY3WtKQMVHSNBwUJ1Lv9q3MDsKo4HY08JQAeTo%2FwFKUozxyGXyveBS%2B4i9eeWlvJ925ejBU09vHyD84rNdpC616QKvGhmpTCYHiDbXy3blM%2FtcRfdLHnMXSHcbAvOouRCCzGees%2BTwUdzkvVFr%2B1RJt7LyDVCVcatA5itMZ3UVPndEt01bzNwqz6NHVke&X-Amz-Signature=c3139760d184b5273ef60111345811a4944babec2097d77d5d9e4acaae541093&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U7WQJB6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC0%2F4vOijLjco3vn9Ug4flI6kF40Bj19B4AvUvmbGOi3QIgTZEThyvkRYOeRodGeEvU9nJtxjt5t7MuPGZam2CT1gYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPawBcYqi%2FebUs0OnSrcA0mDk%2F%2F8SxJZCnWbkUyDrupTzwhqgMVn7n66Pmf%2F00s3vNH9auX90gaQPTGMCoYYdeqRwqvuIPt3ke6X0OMoNRGnMBT05%2FmJLFXRjM9wEbmICjRhkSxLkK7eSW3tqb6dvq%2BHAdTC%2Bu8OjtmFQkQj7xTCsf%2BtcRysUbDJT%2BLvpUL1qgUpjvLIneoXIY6ppRzPlUA6mD9lTF4S5Vhv4sy0P%2FazXRAYPd6P26LpDZ%2BH8vQbUQONkljWhQT2OqKsCAL2r44BqSjp3olCmRWj3b%2BE%2Fu3vvzRviyPJUXnmcLR5aVvgHKNgVo5KFZg6CRkXcikEJU1SI%2Bs6Fuhu3wuIyXLpILPIOnt5zKMKpozO0rTLrl9IkHKXlLS1uNcdXIR8HZPBxF%2BumXnQXAN7Q2r8QVNU4tF32Va3aa7ai2MoGhghreInnR1lcKFCU2r8Zlra7oMiEhKUS8pAzTIjHjL1Po8IJwENbh2qDtcR8sm0ia506OQlf0551VHgwwMudW6RT2WveY9y9%2BwirygMeKiFtNneUM%2Fb3uXc5fnMYtM6flcBLP%2Brwb%2FzEvoqQCyIF6hoCfftTQJQ5GMZ%2BRmD9LViMtoGuKugeKvUxb%2F99R6zvSyAM6GhvcLjeyQUddvusS2aMJvgr74GOqUBtWsfBKhc5N2vhKFCLwFFutBLmPUT0wcRY3WtKQMVHSNBwUJ1Lv9q3MDsKo4HY08JQAeTo%2FwFKUozxyGXyveBS%2B4i9eeWlvJ925ejBU09vHyD84rNdpC616QKvGhmpTCYHiDbXy3blM%2FtcRfdLHnMXSHcbAvOouRCCzGees%2BTwUdzkvVFr%2B1RJt7LyDVCVcatA5itMZ3UVPndEt01bzNwqz6NHVke&X-Amz-Signature=b3536d41ce084096c6286c24a15fe1c7a0757c5e665dfdfcd5e58ea5c1b2b59b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U7WQJB6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC0%2F4vOijLjco3vn9Ug4flI6kF40Bj19B4AvUvmbGOi3QIgTZEThyvkRYOeRodGeEvU9nJtxjt5t7MuPGZam2CT1gYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPawBcYqi%2FebUs0OnSrcA0mDk%2F%2F8SxJZCnWbkUyDrupTzwhqgMVn7n66Pmf%2F00s3vNH9auX90gaQPTGMCoYYdeqRwqvuIPt3ke6X0OMoNRGnMBT05%2FmJLFXRjM9wEbmICjRhkSxLkK7eSW3tqb6dvq%2BHAdTC%2Bu8OjtmFQkQj7xTCsf%2BtcRysUbDJT%2BLvpUL1qgUpjvLIneoXIY6ppRzPlUA6mD9lTF4S5Vhv4sy0P%2FazXRAYPd6P26LpDZ%2BH8vQbUQONkljWhQT2OqKsCAL2r44BqSjp3olCmRWj3b%2BE%2Fu3vvzRviyPJUXnmcLR5aVvgHKNgVo5KFZg6CRkXcikEJU1SI%2Bs6Fuhu3wuIyXLpILPIOnt5zKMKpozO0rTLrl9IkHKXlLS1uNcdXIR8HZPBxF%2BumXnQXAN7Q2r8QVNU4tF32Va3aa7ai2MoGhghreInnR1lcKFCU2r8Zlra7oMiEhKUS8pAzTIjHjL1Po8IJwENbh2qDtcR8sm0ia506OQlf0551VHgwwMudW6RT2WveY9y9%2BwirygMeKiFtNneUM%2Fb3uXc5fnMYtM6flcBLP%2Brwb%2FzEvoqQCyIF6hoCfftTQJQ5GMZ%2BRmD9LViMtoGuKugeKvUxb%2F99R6zvSyAM6GhvcLjeyQUddvusS2aMJvgr74GOqUBtWsfBKhc5N2vhKFCLwFFutBLmPUT0wcRY3WtKQMVHSNBwUJ1Lv9q3MDsKo4HY08JQAeTo%2FwFKUozxyGXyveBS%2B4i9eeWlvJ925ejBU09vHyD84rNdpC616QKvGhmpTCYHiDbXy3blM%2FtcRfdLHnMXSHcbAvOouRCCzGees%2BTwUdzkvVFr%2B1RJt7LyDVCVcatA5itMZ3UVPndEt01bzNwqz6NHVke&X-Amz-Signature=9f9c67e33e051c7de8a2ce8dbaebcf23d97b8abb7f2782899f0e311a5d5e0d38&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U7WQJB6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC0%2F4vOijLjco3vn9Ug4flI6kF40Bj19B4AvUvmbGOi3QIgTZEThyvkRYOeRodGeEvU9nJtxjt5t7MuPGZam2CT1gYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPawBcYqi%2FebUs0OnSrcA0mDk%2F%2F8SxJZCnWbkUyDrupTzwhqgMVn7n66Pmf%2F00s3vNH9auX90gaQPTGMCoYYdeqRwqvuIPt3ke6X0OMoNRGnMBT05%2FmJLFXRjM9wEbmICjRhkSxLkK7eSW3tqb6dvq%2BHAdTC%2Bu8OjtmFQkQj7xTCsf%2BtcRysUbDJT%2BLvpUL1qgUpjvLIneoXIY6ppRzPlUA6mD9lTF4S5Vhv4sy0P%2FazXRAYPd6P26LpDZ%2BH8vQbUQONkljWhQT2OqKsCAL2r44BqSjp3olCmRWj3b%2BE%2Fu3vvzRviyPJUXnmcLR5aVvgHKNgVo5KFZg6CRkXcikEJU1SI%2Bs6Fuhu3wuIyXLpILPIOnt5zKMKpozO0rTLrl9IkHKXlLS1uNcdXIR8HZPBxF%2BumXnQXAN7Q2r8QVNU4tF32Va3aa7ai2MoGhghreInnR1lcKFCU2r8Zlra7oMiEhKUS8pAzTIjHjL1Po8IJwENbh2qDtcR8sm0ia506OQlf0551VHgwwMudW6RT2WveY9y9%2BwirygMeKiFtNneUM%2Fb3uXc5fnMYtM6flcBLP%2Brwb%2FzEvoqQCyIF6hoCfftTQJQ5GMZ%2BRmD9LViMtoGuKugeKvUxb%2F99R6zvSyAM6GhvcLjeyQUddvusS2aMJvgr74GOqUBtWsfBKhc5N2vhKFCLwFFutBLmPUT0wcRY3WtKQMVHSNBwUJ1Lv9q3MDsKo4HY08JQAeTo%2FwFKUozxyGXyveBS%2B4i9eeWlvJ925ejBU09vHyD84rNdpC616QKvGhmpTCYHiDbXy3blM%2FtcRfdLHnMXSHcbAvOouRCCzGees%2BTwUdzkvVFr%2B1RJt7LyDVCVcatA5itMZ3UVPndEt01bzNwqz6NHVke&X-Amz-Signature=052624f4defae078e5506a006340157f3db5dc70eff2b8e9ee279203644c9622&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

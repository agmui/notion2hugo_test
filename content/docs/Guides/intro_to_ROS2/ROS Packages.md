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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNNLRBCF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGwC2c5z288vWhyn5TyMIonGEv4Y%2FI%2F7arPzPisgTF4RAiEAggnO4sMEAn0PxpY3jKWMgloBHoR0DLHLqilz7TqiuygqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxyrLiWELXJKoWGtSrcA2aBIEM37Kq8%2FVqLSf20a3DHcBkgWAR72phw4uT0sPIDbnPAkoOS8PlD2SG4bf1N%2FJ%2BGguiCjLCr1XJcfdJujLAJY4q8yxY98z8crgpnq%2F%2FTMLqPLFsgucNZGTcBNGcj7oOwy18fH9GEgNJJxOE5G84pBY8DWnSkEpASjXC0rTTQzUBP%2BPgFipYoa3tL94L01UJa9PNmlPDhMDP3yPdB7WZqX%2B2fYd9OAnU6BevWeJVh0RYgEUAAMBWRZiNlwc2YiOBIKsaVdujJ7yAoVda9PsI0oQKCHYmL6Hpaz58xSWfoQnHDqzwZ6Ob%2B8GjznEZKV0o4WkRpLXnXUp9kfd1OLHs69vxdvjLofK0pKslBLAsuQ35STdKZcYac0%2F566uPQhWr6BCHrpfJqbIuwud7fyXqssDFGe0JjpOtNjaB6QCpj35JasTslVKG%2BhJ993Z5%2B1YOtnkAZchg%2F2%2B0ONnt0Jv6PjRoKU7ZIZS8GU1Oh1%2BLfYi%2Faoh1wg0rSjrmapXaDzADocuFqAhNMAOL8pRpoDQFbG8fhI3KUMItosECMknx%2FGLhRVIYdYSQsKw6%2FvwlfpyA%2BwQXw4K79TlGVLTxWtzO1AJtkZHGW%2BHRKhyPuoDqIrnteFSX77qkVyN78MKyp0sAGOqUBJ56qj%2FhoGxHc5WZ5I%2B9VcxM5klEPfuQoi0EAlS4Lbp6mfW6rblC17%2FHAaP7YUDbL%2FPfYKfFPko%2F1SpUpnpA7HptqPKSYiHaIyx4ofLseaN95WWJuZILGNrKpXyYnhhCHZ1zLa1U0hdaGSSBN%2B6JMCXV3%2BPv%2BHZcgf8Sril1U5UZKs4JxaCIReWuQhPxirIGnTxLbpsryzTCniisjVm21Vk%2FA2x%2Bl&X-Amz-Signature=1323693532b720a13dcb685b1bbdcda6d0de8ec0459beae9b110b764a2776fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNNLRBCF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGwC2c5z288vWhyn5TyMIonGEv4Y%2FI%2F7arPzPisgTF4RAiEAggnO4sMEAn0PxpY3jKWMgloBHoR0DLHLqilz7TqiuygqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxyrLiWELXJKoWGtSrcA2aBIEM37Kq8%2FVqLSf20a3DHcBkgWAR72phw4uT0sPIDbnPAkoOS8PlD2SG4bf1N%2FJ%2BGguiCjLCr1XJcfdJujLAJY4q8yxY98z8crgpnq%2F%2FTMLqPLFsgucNZGTcBNGcj7oOwy18fH9GEgNJJxOE5G84pBY8DWnSkEpASjXC0rTTQzUBP%2BPgFipYoa3tL94L01UJa9PNmlPDhMDP3yPdB7WZqX%2B2fYd9OAnU6BevWeJVh0RYgEUAAMBWRZiNlwc2YiOBIKsaVdujJ7yAoVda9PsI0oQKCHYmL6Hpaz58xSWfoQnHDqzwZ6Ob%2B8GjznEZKV0o4WkRpLXnXUp9kfd1OLHs69vxdvjLofK0pKslBLAsuQ35STdKZcYac0%2F566uPQhWr6BCHrpfJqbIuwud7fyXqssDFGe0JjpOtNjaB6QCpj35JasTslVKG%2BhJ993Z5%2B1YOtnkAZchg%2F2%2B0ONnt0Jv6PjRoKU7ZIZS8GU1Oh1%2BLfYi%2Faoh1wg0rSjrmapXaDzADocuFqAhNMAOL8pRpoDQFbG8fhI3KUMItosECMknx%2FGLhRVIYdYSQsKw6%2FvwlfpyA%2BwQXw4K79TlGVLTxWtzO1AJtkZHGW%2BHRKhyPuoDqIrnteFSX77qkVyN78MKyp0sAGOqUBJ56qj%2FhoGxHc5WZ5I%2B9VcxM5klEPfuQoi0EAlS4Lbp6mfW6rblC17%2FHAaP7YUDbL%2FPfYKfFPko%2F1SpUpnpA7HptqPKSYiHaIyx4ofLseaN95WWJuZILGNrKpXyYnhhCHZ1zLa1U0hdaGSSBN%2B6JMCXV3%2BPv%2BHZcgf8Sril1U5UZKs4JxaCIReWuQhPxirIGnTxLbpsryzTCniisjVm21Vk%2FA2x%2Bl&X-Amz-Signature=e208bd1a21643ef2c84d521be823ec191e57c791992b752a105bb838fd95ce38&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNNLRBCF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGwC2c5z288vWhyn5TyMIonGEv4Y%2FI%2F7arPzPisgTF4RAiEAggnO4sMEAn0PxpY3jKWMgloBHoR0DLHLqilz7TqiuygqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxyrLiWELXJKoWGtSrcA2aBIEM37Kq8%2FVqLSf20a3DHcBkgWAR72phw4uT0sPIDbnPAkoOS8PlD2SG4bf1N%2FJ%2BGguiCjLCr1XJcfdJujLAJY4q8yxY98z8crgpnq%2F%2FTMLqPLFsgucNZGTcBNGcj7oOwy18fH9GEgNJJxOE5G84pBY8DWnSkEpASjXC0rTTQzUBP%2BPgFipYoa3tL94L01UJa9PNmlPDhMDP3yPdB7WZqX%2B2fYd9OAnU6BevWeJVh0RYgEUAAMBWRZiNlwc2YiOBIKsaVdujJ7yAoVda9PsI0oQKCHYmL6Hpaz58xSWfoQnHDqzwZ6Ob%2B8GjznEZKV0o4WkRpLXnXUp9kfd1OLHs69vxdvjLofK0pKslBLAsuQ35STdKZcYac0%2F566uPQhWr6BCHrpfJqbIuwud7fyXqssDFGe0JjpOtNjaB6QCpj35JasTslVKG%2BhJ993Z5%2B1YOtnkAZchg%2F2%2B0ONnt0Jv6PjRoKU7ZIZS8GU1Oh1%2BLfYi%2Faoh1wg0rSjrmapXaDzADocuFqAhNMAOL8pRpoDQFbG8fhI3KUMItosECMknx%2FGLhRVIYdYSQsKw6%2FvwlfpyA%2BwQXw4K79TlGVLTxWtzO1AJtkZHGW%2BHRKhyPuoDqIrnteFSX77qkVyN78MKyp0sAGOqUBJ56qj%2FhoGxHc5WZ5I%2B9VcxM5klEPfuQoi0EAlS4Lbp6mfW6rblC17%2FHAaP7YUDbL%2FPfYKfFPko%2F1SpUpnpA7HptqPKSYiHaIyx4ofLseaN95WWJuZILGNrKpXyYnhhCHZ1zLa1U0hdaGSSBN%2B6JMCXV3%2BPv%2BHZcgf8Sril1U5UZKs4JxaCIReWuQhPxirIGnTxLbpsryzTCniisjVm21Vk%2FA2x%2Bl&X-Amz-Signature=8aec10bdad9d0540a5d82afefcb048f91f7a50e9475f2e4225f27bf816e0b778&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNNLRBCF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGwC2c5z288vWhyn5TyMIonGEv4Y%2FI%2F7arPzPisgTF4RAiEAggnO4sMEAn0PxpY3jKWMgloBHoR0DLHLqilz7TqiuygqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxyrLiWELXJKoWGtSrcA2aBIEM37Kq8%2FVqLSf20a3DHcBkgWAR72phw4uT0sPIDbnPAkoOS8PlD2SG4bf1N%2FJ%2BGguiCjLCr1XJcfdJujLAJY4q8yxY98z8crgpnq%2F%2FTMLqPLFsgucNZGTcBNGcj7oOwy18fH9GEgNJJxOE5G84pBY8DWnSkEpASjXC0rTTQzUBP%2BPgFipYoa3tL94L01UJa9PNmlPDhMDP3yPdB7WZqX%2B2fYd9OAnU6BevWeJVh0RYgEUAAMBWRZiNlwc2YiOBIKsaVdujJ7yAoVda9PsI0oQKCHYmL6Hpaz58xSWfoQnHDqzwZ6Ob%2B8GjznEZKV0o4WkRpLXnXUp9kfd1OLHs69vxdvjLofK0pKslBLAsuQ35STdKZcYac0%2F566uPQhWr6BCHrpfJqbIuwud7fyXqssDFGe0JjpOtNjaB6QCpj35JasTslVKG%2BhJ993Z5%2B1YOtnkAZchg%2F2%2B0ONnt0Jv6PjRoKU7ZIZS8GU1Oh1%2BLfYi%2Faoh1wg0rSjrmapXaDzADocuFqAhNMAOL8pRpoDQFbG8fhI3KUMItosECMknx%2FGLhRVIYdYSQsKw6%2FvwlfpyA%2BwQXw4K79TlGVLTxWtzO1AJtkZHGW%2BHRKhyPuoDqIrnteFSX77qkVyN78MKyp0sAGOqUBJ56qj%2FhoGxHc5WZ5I%2B9VcxM5klEPfuQoi0EAlS4Lbp6mfW6rblC17%2FHAaP7YUDbL%2FPfYKfFPko%2F1SpUpnpA7HptqPKSYiHaIyx4ofLseaN95WWJuZILGNrKpXyYnhhCHZ1zLa1U0hdaGSSBN%2B6JMCXV3%2BPv%2BHZcgf8Sril1U5UZKs4JxaCIReWuQhPxirIGnTxLbpsryzTCniisjVm21Vk%2FA2x%2Bl&X-Amz-Signature=ab1e611872fe81c72118341ec2156fe9f6ac79f737c2b9fdce2dc16ab4836bff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNNLRBCF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGwC2c5z288vWhyn5TyMIonGEv4Y%2FI%2F7arPzPisgTF4RAiEAggnO4sMEAn0PxpY3jKWMgloBHoR0DLHLqilz7TqiuygqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxyrLiWELXJKoWGtSrcA2aBIEM37Kq8%2FVqLSf20a3DHcBkgWAR72phw4uT0sPIDbnPAkoOS8PlD2SG4bf1N%2FJ%2BGguiCjLCr1XJcfdJujLAJY4q8yxY98z8crgpnq%2F%2FTMLqPLFsgucNZGTcBNGcj7oOwy18fH9GEgNJJxOE5G84pBY8DWnSkEpASjXC0rTTQzUBP%2BPgFipYoa3tL94L01UJa9PNmlPDhMDP3yPdB7WZqX%2B2fYd9OAnU6BevWeJVh0RYgEUAAMBWRZiNlwc2YiOBIKsaVdujJ7yAoVda9PsI0oQKCHYmL6Hpaz58xSWfoQnHDqzwZ6Ob%2B8GjznEZKV0o4WkRpLXnXUp9kfd1OLHs69vxdvjLofK0pKslBLAsuQ35STdKZcYac0%2F566uPQhWr6BCHrpfJqbIuwud7fyXqssDFGe0JjpOtNjaB6QCpj35JasTslVKG%2BhJ993Z5%2B1YOtnkAZchg%2F2%2B0ONnt0Jv6PjRoKU7ZIZS8GU1Oh1%2BLfYi%2Faoh1wg0rSjrmapXaDzADocuFqAhNMAOL8pRpoDQFbG8fhI3KUMItosECMknx%2FGLhRVIYdYSQsKw6%2FvwlfpyA%2BwQXw4K79TlGVLTxWtzO1AJtkZHGW%2BHRKhyPuoDqIrnteFSX77qkVyN78MKyp0sAGOqUBJ56qj%2FhoGxHc5WZ5I%2B9VcxM5klEPfuQoi0EAlS4Lbp6mfW6rblC17%2FHAaP7YUDbL%2FPfYKfFPko%2F1SpUpnpA7HptqPKSYiHaIyx4ofLseaN95WWJuZILGNrKpXyYnhhCHZ1zLa1U0hdaGSSBN%2B6JMCXV3%2BPv%2BHZcgf8Sril1U5UZKs4JxaCIReWuQhPxirIGnTxLbpsryzTCniisjVm21Vk%2FA2x%2Bl&X-Amz-Signature=d91a13c27aefcdf288c41cf1fb4c2a4f7754ddc1c99b45c4099035a0445eec96&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNNLRBCF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGwC2c5z288vWhyn5TyMIonGEv4Y%2FI%2F7arPzPisgTF4RAiEAggnO4sMEAn0PxpY3jKWMgloBHoR0DLHLqilz7TqiuygqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxyrLiWELXJKoWGtSrcA2aBIEM37Kq8%2FVqLSf20a3DHcBkgWAR72phw4uT0sPIDbnPAkoOS8PlD2SG4bf1N%2FJ%2BGguiCjLCr1XJcfdJujLAJY4q8yxY98z8crgpnq%2F%2FTMLqPLFsgucNZGTcBNGcj7oOwy18fH9GEgNJJxOE5G84pBY8DWnSkEpASjXC0rTTQzUBP%2BPgFipYoa3tL94L01UJa9PNmlPDhMDP3yPdB7WZqX%2B2fYd9OAnU6BevWeJVh0RYgEUAAMBWRZiNlwc2YiOBIKsaVdujJ7yAoVda9PsI0oQKCHYmL6Hpaz58xSWfoQnHDqzwZ6Ob%2B8GjznEZKV0o4WkRpLXnXUp9kfd1OLHs69vxdvjLofK0pKslBLAsuQ35STdKZcYac0%2F566uPQhWr6BCHrpfJqbIuwud7fyXqssDFGe0JjpOtNjaB6QCpj35JasTslVKG%2BhJ993Z5%2B1YOtnkAZchg%2F2%2B0ONnt0Jv6PjRoKU7ZIZS8GU1Oh1%2BLfYi%2Faoh1wg0rSjrmapXaDzADocuFqAhNMAOL8pRpoDQFbG8fhI3KUMItosECMknx%2FGLhRVIYdYSQsKw6%2FvwlfpyA%2BwQXw4K79TlGVLTxWtzO1AJtkZHGW%2BHRKhyPuoDqIrnteFSX77qkVyN78MKyp0sAGOqUBJ56qj%2FhoGxHc5WZ5I%2B9VcxM5klEPfuQoi0EAlS4Lbp6mfW6rblC17%2FHAaP7YUDbL%2FPfYKfFPko%2F1SpUpnpA7HptqPKSYiHaIyx4ofLseaN95WWJuZILGNrKpXyYnhhCHZ1zLa1U0hdaGSSBN%2B6JMCXV3%2BPv%2BHZcgf8Sril1U5UZKs4JxaCIReWuQhPxirIGnTxLbpsryzTCniisjVm21Vk%2FA2x%2Bl&X-Amz-Signature=b16eb28142357b281c128b7c18eb0126cc0ea1151c4d814f7346b194a38f6a26&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNNLRBCF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGwC2c5z288vWhyn5TyMIonGEv4Y%2FI%2F7arPzPisgTF4RAiEAggnO4sMEAn0PxpY3jKWMgloBHoR0DLHLqilz7TqiuygqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxyrLiWELXJKoWGtSrcA2aBIEM37Kq8%2FVqLSf20a3DHcBkgWAR72phw4uT0sPIDbnPAkoOS8PlD2SG4bf1N%2FJ%2BGguiCjLCr1XJcfdJujLAJY4q8yxY98z8crgpnq%2F%2FTMLqPLFsgucNZGTcBNGcj7oOwy18fH9GEgNJJxOE5G84pBY8DWnSkEpASjXC0rTTQzUBP%2BPgFipYoa3tL94L01UJa9PNmlPDhMDP3yPdB7WZqX%2B2fYd9OAnU6BevWeJVh0RYgEUAAMBWRZiNlwc2YiOBIKsaVdujJ7yAoVda9PsI0oQKCHYmL6Hpaz58xSWfoQnHDqzwZ6Ob%2B8GjznEZKV0o4WkRpLXnXUp9kfd1OLHs69vxdvjLofK0pKslBLAsuQ35STdKZcYac0%2F566uPQhWr6BCHrpfJqbIuwud7fyXqssDFGe0JjpOtNjaB6QCpj35JasTslVKG%2BhJ993Z5%2B1YOtnkAZchg%2F2%2B0ONnt0Jv6PjRoKU7ZIZS8GU1Oh1%2BLfYi%2Faoh1wg0rSjrmapXaDzADocuFqAhNMAOL8pRpoDQFbG8fhI3KUMItosECMknx%2FGLhRVIYdYSQsKw6%2FvwlfpyA%2BwQXw4K79TlGVLTxWtzO1AJtkZHGW%2BHRKhyPuoDqIrnteFSX77qkVyN78MKyp0sAGOqUBJ56qj%2FhoGxHc5WZ5I%2B9VcxM5klEPfuQoi0EAlS4Lbp6mfW6rblC17%2FHAaP7YUDbL%2FPfYKfFPko%2F1SpUpnpA7HptqPKSYiHaIyx4ofLseaN95WWJuZILGNrKpXyYnhhCHZ1zLa1U0hdaGSSBN%2B6JMCXV3%2BPv%2BHZcgf8Sril1U5UZKs4JxaCIReWuQhPxirIGnTxLbpsryzTCniisjVm21Vk%2FA2x%2Bl&X-Amz-Signature=5d4a403c7b9813db59dd0b39877b987c0eac25ee7f185e571e1c6395d57a546b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

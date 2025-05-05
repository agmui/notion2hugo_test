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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBWVSWS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvC83Gsfegky2nAKv3po0FAOh%2BAl7wfSZEQWsk1lQlGAIgDeYz3uIdXLyU67Lm0Al5edarQArRRn6fHzvssPNhWTwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGYad%2FKXIBzSgU8oGircAzVh0rp3bCq0ou2p4z64HBFcN0CMRdPxB5r0LZC6Exm64dWBSPl8GqMiYBZIkv4%2Bm1IR9Bx5dpoyQPhEp5aPcfPVRFmALsRfO%2BrVaP7CxrkEElA2JAT30AFXdu6%2Ftn6b36TRCiEbS84S5nfJGVtGuxh3uhH8FNOV2Md%2FOVqP2zAJEB9unia7HbSIYAvkEVQy%2FUAAr0rx2myW2mDBsFacTX0iSxPRXxnRpOzHrH4TXcdQbwygB7NNPLRrxMODhk%2BjZnYsaBYNDIVOytTyuU7IHHM9TcdcoeC45U51ndbUYUt%2F%2BuDCaFVAQ4ySu8iFiD1K8ucbKnvgTBSl%2B3vtMBkVTSGno2tyI4P8XAOdmvowM0kUbg29ObAOJhjBrUgESNhKA8cEVbuKLJVlY7Aq9uKczFTyZ%2FRSH5Z4LaG0F8dSe4XMnRmp9RW0hYobFiJW5c8FfkwlAtbPLfgGcsOue%2FB0JWYbiy9bbIWawG21cORcCKtydyaQ3l%2FAxpGMEpGGg%2FOT70Pz9wzyiprdiZey3vZ9l5%2FpNRM5G9OxY8xZOrhxpcn68Vis%2FOVTlC3GG8NKID%2BFRR2m31IbgWV4t%2F6YrMSmvnWhQt1YCYNkyIE9cL4BUtYsyik6Xo5tBaKHw%2FcWMMuy5MAGOqUBTiX1WU4X7OW1oIQATFShN1exqOHyH1z3DcFRFcffxkJD1blmKx1ijBD3vW1EarkgQgY8xpDonZnvgvk%2FHnbmXqWgX9o1Y1BAVJsv0ysHGwdsILgswtb8CgBm3g4h%2FdP%2FKiZU0wBD6hJuDX1R7KUvyKkL%2BYv7FEwB1KnLFnkyvxxmV0rdAOYE7XQM8h4%2BJN0K0tOVhpF345sTmSuhFiGCo%2FTPTtVF&X-Amz-Signature=ee7f8198179626e2f506c9f34eb455f86c073a26f7b12dc063829912c3228bec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBWVSWS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvC83Gsfegky2nAKv3po0FAOh%2BAl7wfSZEQWsk1lQlGAIgDeYz3uIdXLyU67Lm0Al5edarQArRRn6fHzvssPNhWTwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGYad%2FKXIBzSgU8oGircAzVh0rp3bCq0ou2p4z64HBFcN0CMRdPxB5r0LZC6Exm64dWBSPl8GqMiYBZIkv4%2Bm1IR9Bx5dpoyQPhEp5aPcfPVRFmALsRfO%2BrVaP7CxrkEElA2JAT30AFXdu6%2Ftn6b36TRCiEbS84S5nfJGVtGuxh3uhH8FNOV2Md%2FOVqP2zAJEB9unia7HbSIYAvkEVQy%2FUAAr0rx2myW2mDBsFacTX0iSxPRXxnRpOzHrH4TXcdQbwygB7NNPLRrxMODhk%2BjZnYsaBYNDIVOytTyuU7IHHM9TcdcoeC45U51ndbUYUt%2F%2BuDCaFVAQ4ySu8iFiD1K8ucbKnvgTBSl%2B3vtMBkVTSGno2tyI4P8XAOdmvowM0kUbg29ObAOJhjBrUgESNhKA8cEVbuKLJVlY7Aq9uKczFTyZ%2FRSH5Z4LaG0F8dSe4XMnRmp9RW0hYobFiJW5c8FfkwlAtbPLfgGcsOue%2FB0JWYbiy9bbIWawG21cORcCKtydyaQ3l%2FAxpGMEpGGg%2FOT70Pz9wzyiprdiZey3vZ9l5%2FpNRM5G9OxY8xZOrhxpcn68Vis%2FOVTlC3GG8NKID%2BFRR2m31IbgWV4t%2F6YrMSmvnWhQt1YCYNkyIE9cL4BUtYsyik6Xo5tBaKHw%2FcWMMuy5MAGOqUBTiX1WU4X7OW1oIQATFShN1exqOHyH1z3DcFRFcffxkJD1blmKx1ijBD3vW1EarkgQgY8xpDonZnvgvk%2FHnbmXqWgX9o1Y1BAVJsv0ysHGwdsILgswtb8CgBm3g4h%2FdP%2FKiZU0wBD6hJuDX1R7KUvyKkL%2BYv7FEwB1KnLFnkyvxxmV0rdAOYE7XQM8h4%2BJN0K0tOVhpF345sTmSuhFiGCo%2FTPTtVF&X-Amz-Signature=368331b18e3c1de3cf184a1453da060361d13bd78c67d4851c9755471686a8ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBWVSWS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvC83Gsfegky2nAKv3po0FAOh%2BAl7wfSZEQWsk1lQlGAIgDeYz3uIdXLyU67Lm0Al5edarQArRRn6fHzvssPNhWTwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGYad%2FKXIBzSgU8oGircAzVh0rp3bCq0ou2p4z64HBFcN0CMRdPxB5r0LZC6Exm64dWBSPl8GqMiYBZIkv4%2Bm1IR9Bx5dpoyQPhEp5aPcfPVRFmALsRfO%2BrVaP7CxrkEElA2JAT30AFXdu6%2Ftn6b36TRCiEbS84S5nfJGVtGuxh3uhH8FNOV2Md%2FOVqP2zAJEB9unia7HbSIYAvkEVQy%2FUAAr0rx2myW2mDBsFacTX0iSxPRXxnRpOzHrH4TXcdQbwygB7NNPLRrxMODhk%2BjZnYsaBYNDIVOytTyuU7IHHM9TcdcoeC45U51ndbUYUt%2F%2BuDCaFVAQ4ySu8iFiD1K8ucbKnvgTBSl%2B3vtMBkVTSGno2tyI4P8XAOdmvowM0kUbg29ObAOJhjBrUgESNhKA8cEVbuKLJVlY7Aq9uKczFTyZ%2FRSH5Z4LaG0F8dSe4XMnRmp9RW0hYobFiJW5c8FfkwlAtbPLfgGcsOue%2FB0JWYbiy9bbIWawG21cORcCKtydyaQ3l%2FAxpGMEpGGg%2FOT70Pz9wzyiprdiZey3vZ9l5%2FpNRM5G9OxY8xZOrhxpcn68Vis%2FOVTlC3GG8NKID%2BFRR2m31IbgWV4t%2F6YrMSmvnWhQt1YCYNkyIE9cL4BUtYsyik6Xo5tBaKHw%2FcWMMuy5MAGOqUBTiX1WU4X7OW1oIQATFShN1exqOHyH1z3DcFRFcffxkJD1blmKx1ijBD3vW1EarkgQgY8xpDonZnvgvk%2FHnbmXqWgX9o1Y1BAVJsv0ysHGwdsILgswtb8CgBm3g4h%2FdP%2FKiZU0wBD6hJuDX1R7KUvyKkL%2BYv7FEwB1KnLFnkyvxxmV0rdAOYE7XQM8h4%2BJN0K0tOVhpF345sTmSuhFiGCo%2FTPTtVF&X-Amz-Signature=26a539eb4c883900c9f57dccc5d8bce2bd63750bf460c5f6b849e6a42bce6d55&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBWVSWS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvC83Gsfegky2nAKv3po0FAOh%2BAl7wfSZEQWsk1lQlGAIgDeYz3uIdXLyU67Lm0Al5edarQArRRn6fHzvssPNhWTwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGYad%2FKXIBzSgU8oGircAzVh0rp3bCq0ou2p4z64HBFcN0CMRdPxB5r0LZC6Exm64dWBSPl8GqMiYBZIkv4%2Bm1IR9Bx5dpoyQPhEp5aPcfPVRFmALsRfO%2BrVaP7CxrkEElA2JAT30AFXdu6%2Ftn6b36TRCiEbS84S5nfJGVtGuxh3uhH8FNOV2Md%2FOVqP2zAJEB9unia7HbSIYAvkEVQy%2FUAAr0rx2myW2mDBsFacTX0iSxPRXxnRpOzHrH4TXcdQbwygB7NNPLRrxMODhk%2BjZnYsaBYNDIVOytTyuU7IHHM9TcdcoeC45U51ndbUYUt%2F%2BuDCaFVAQ4ySu8iFiD1K8ucbKnvgTBSl%2B3vtMBkVTSGno2tyI4P8XAOdmvowM0kUbg29ObAOJhjBrUgESNhKA8cEVbuKLJVlY7Aq9uKczFTyZ%2FRSH5Z4LaG0F8dSe4XMnRmp9RW0hYobFiJW5c8FfkwlAtbPLfgGcsOue%2FB0JWYbiy9bbIWawG21cORcCKtydyaQ3l%2FAxpGMEpGGg%2FOT70Pz9wzyiprdiZey3vZ9l5%2FpNRM5G9OxY8xZOrhxpcn68Vis%2FOVTlC3GG8NKID%2BFRR2m31IbgWV4t%2F6YrMSmvnWhQt1YCYNkyIE9cL4BUtYsyik6Xo5tBaKHw%2FcWMMuy5MAGOqUBTiX1WU4X7OW1oIQATFShN1exqOHyH1z3DcFRFcffxkJD1blmKx1ijBD3vW1EarkgQgY8xpDonZnvgvk%2FHnbmXqWgX9o1Y1BAVJsv0ysHGwdsILgswtb8CgBm3g4h%2FdP%2FKiZU0wBD6hJuDX1R7KUvyKkL%2BYv7FEwB1KnLFnkyvxxmV0rdAOYE7XQM8h4%2BJN0K0tOVhpF345sTmSuhFiGCo%2FTPTtVF&X-Amz-Signature=35d4fedfc29099592ff00241cb8fb1eaf83f62d2929772aaf70bf0d888d60a28&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBWVSWS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvC83Gsfegky2nAKv3po0FAOh%2BAl7wfSZEQWsk1lQlGAIgDeYz3uIdXLyU67Lm0Al5edarQArRRn6fHzvssPNhWTwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGYad%2FKXIBzSgU8oGircAzVh0rp3bCq0ou2p4z64HBFcN0CMRdPxB5r0LZC6Exm64dWBSPl8GqMiYBZIkv4%2Bm1IR9Bx5dpoyQPhEp5aPcfPVRFmALsRfO%2BrVaP7CxrkEElA2JAT30AFXdu6%2Ftn6b36TRCiEbS84S5nfJGVtGuxh3uhH8FNOV2Md%2FOVqP2zAJEB9unia7HbSIYAvkEVQy%2FUAAr0rx2myW2mDBsFacTX0iSxPRXxnRpOzHrH4TXcdQbwygB7NNPLRrxMODhk%2BjZnYsaBYNDIVOytTyuU7IHHM9TcdcoeC45U51ndbUYUt%2F%2BuDCaFVAQ4ySu8iFiD1K8ucbKnvgTBSl%2B3vtMBkVTSGno2tyI4P8XAOdmvowM0kUbg29ObAOJhjBrUgESNhKA8cEVbuKLJVlY7Aq9uKczFTyZ%2FRSH5Z4LaG0F8dSe4XMnRmp9RW0hYobFiJW5c8FfkwlAtbPLfgGcsOue%2FB0JWYbiy9bbIWawG21cORcCKtydyaQ3l%2FAxpGMEpGGg%2FOT70Pz9wzyiprdiZey3vZ9l5%2FpNRM5G9OxY8xZOrhxpcn68Vis%2FOVTlC3GG8NKID%2BFRR2m31IbgWV4t%2F6YrMSmvnWhQt1YCYNkyIE9cL4BUtYsyik6Xo5tBaKHw%2FcWMMuy5MAGOqUBTiX1WU4X7OW1oIQATFShN1exqOHyH1z3DcFRFcffxkJD1blmKx1ijBD3vW1EarkgQgY8xpDonZnvgvk%2FHnbmXqWgX9o1Y1BAVJsv0ysHGwdsILgswtb8CgBm3g4h%2FdP%2FKiZU0wBD6hJuDX1R7KUvyKkL%2BYv7FEwB1KnLFnkyvxxmV0rdAOYE7XQM8h4%2BJN0K0tOVhpF345sTmSuhFiGCo%2FTPTtVF&X-Amz-Signature=39d80ba6cb3c901e3ae1019f4ead58d8fae0200f98f65a7c8eac0262f9859abf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBWVSWS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvC83Gsfegky2nAKv3po0FAOh%2BAl7wfSZEQWsk1lQlGAIgDeYz3uIdXLyU67Lm0Al5edarQArRRn6fHzvssPNhWTwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGYad%2FKXIBzSgU8oGircAzVh0rp3bCq0ou2p4z64HBFcN0CMRdPxB5r0LZC6Exm64dWBSPl8GqMiYBZIkv4%2Bm1IR9Bx5dpoyQPhEp5aPcfPVRFmALsRfO%2BrVaP7CxrkEElA2JAT30AFXdu6%2Ftn6b36TRCiEbS84S5nfJGVtGuxh3uhH8FNOV2Md%2FOVqP2zAJEB9unia7HbSIYAvkEVQy%2FUAAr0rx2myW2mDBsFacTX0iSxPRXxnRpOzHrH4TXcdQbwygB7NNPLRrxMODhk%2BjZnYsaBYNDIVOytTyuU7IHHM9TcdcoeC45U51ndbUYUt%2F%2BuDCaFVAQ4ySu8iFiD1K8ucbKnvgTBSl%2B3vtMBkVTSGno2tyI4P8XAOdmvowM0kUbg29ObAOJhjBrUgESNhKA8cEVbuKLJVlY7Aq9uKczFTyZ%2FRSH5Z4LaG0F8dSe4XMnRmp9RW0hYobFiJW5c8FfkwlAtbPLfgGcsOue%2FB0JWYbiy9bbIWawG21cORcCKtydyaQ3l%2FAxpGMEpGGg%2FOT70Pz9wzyiprdiZey3vZ9l5%2FpNRM5G9OxY8xZOrhxpcn68Vis%2FOVTlC3GG8NKID%2BFRR2m31IbgWV4t%2F6YrMSmvnWhQt1YCYNkyIE9cL4BUtYsyik6Xo5tBaKHw%2FcWMMuy5MAGOqUBTiX1WU4X7OW1oIQATFShN1exqOHyH1z3DcFRFcffxkJD1blmKx1ijBD3vW1EarkgQgY8xpDonZnvgvk%2FHnbmXqWgX9o1Y1BAVJsv0ysHGwdsILgswtb8CgBm3g4h%2FdP%2FKiZU0wBD6hJuDX1R7KUvyKkL%2BYv7FEwB1KnLFnkyvxxmV0rdAOYE7XQM8h4%2BJN0K0tOVhpF345sTmSuhFiGCo%2FTPTtVF&X-Amz-Signature=f1ba17a049ecc2f48c2b941a37550bc320f6e0dcc0e7ceefe6f97c67d9c5955e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBWVSWS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvC83Gsfegky2nAKv3po0FAOh%2BAl7wfSZEQWsk1lQlGAIgDeYz3uIdXLyU67Lm0Al5edarQArRRn6fHzvssPNhWTwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGYad%2FKXIBzSgU8oGircAzVh0rp3bCq0ou2p4z64HBFcN0CMRdPxB5r0LZC6Exm64dWBSPl8GqMiYBZIkv4%2Bm1IR9Bx5dpoyQPhEp5aPcfPVRFmALsRfO%2BrVaP7CxrkEElA2JAT30AFXdu6%2Ftn6b36TRCiEbS84S5nfJGVtGuxh3uhH8FNOV2Md%2FOVqP2zAJEB9unia7HbSIYAvkEVQy%2FUAAr0rx2myW2mDBsFacTX0iSxPRXxnRpOzHrH4TXcdQbwygB7NNPLRrxMODhk%2BjZnYsaBYNDIVOytTyuU7IHHM9TcdcoeC45U51ndbUYUt%2F%2BuDCaFVAQ4ySu8iFiD1K8ucbKnvgTBSl%2B3vtMBkVTSGno2tyI4P8XAOdmvowM0kUbg29ObAOJhjBrUgESNhKA8cEVbuKLJVlY7Aq9uKczFTyZ%2FRSH5Z4LaG0F8dSe4XMnRmp9RW0hYobFiJW5c8FfkwlAtbPLfgGcsOue%2FB0JWYbiy9bbIWawG21cORcCKtydyaQ3l%2FAxpGMEpGGg%2FOT70Pz9wzyiprdiZey3vZ9l5%2FpNRM5G9OxY8xZOrhxpcn68Vis%2FOVTlC3GG8NKID%2BFRR2m31IbgWV4t%2F6YrMSmvnWhQt1YCYNkyIE9cL4BUtYsyik6Xo5tBaKHw%2FcWMMuy5MAGOqUBTiX1WU4X7OW1oIQATFShN1exqOHyH1z3DcFRFcffxkJD1blmKx1ijBD3vW1EarkgQgY8xpDonZnvgvk%2FHnbmXqWgX9o1Y1BAVJsv0ysHGwdsILgswtb8CgBm3g4h%2FdP%2FKiZU0wBD6hJuDX1R7KUvyKkL%2BYv7FEwB1KnLFnkyvxxmV0rdAOYE7XQM8h4%2BJN0K0tOVhpF345sTmSuhFiGCo%2FTPTtVF&X-Amz-Signature=b69d6778e42d5ee87c3147d79403a9ef90b9599be6a212f6ae7c42e617d826e7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

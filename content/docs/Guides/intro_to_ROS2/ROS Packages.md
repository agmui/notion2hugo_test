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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV5GMOR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxnTxoFMZJW0HFndUuyulqB0D%2FgVmdeqO3kVRTVTJZHwIgO6Hu2mukwN3g8NefwbVyo5TWaWi8XkRoAFUTl2x7lXYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDABmqxDK2MmkTRgrkCrcA7h%2FD5NOuO3KniqfhtQhwQyq%2FP6wAs6pKnEi6Z1qrdDnPxcUpAsaEkX86xk98tmPPsfTrdOgQ%2FoX0MTOkRMpuWTWU5hXW9zu1hdqHVOjeG%2FYGKcKeoJjr1zN2%2BLyJVqKNRtzJ8eAnS39AlZPRizTdxvZU4oCegD0aazTeggzzkUL1IoC2aWiUEk0NyPPxd0vHlUZcrXBeffqJzJWEWbH1VHfYY2b3%2BFZRBVO%2FgBWKrdxjImhVS6gAS30IQMhMQ2tTJh8TBRC26YaTWN%2Bc80A%2BlwBrHBg8ICClIqJESXu%2FvMK%2BZQFJUZlFEWhcjgP%2FG%2Fx%2Fhey626hMaQknWaGTu1XV9yIVOY2XZzkNr3J4ncFahSW3uRiNubfuGpmKO8xfCCRysREelo5wna0O6LpmvHyuQJCsbXyqa0KLhlzoVjQ7DxpaCljB8D0PVTLK%2BPQ%2Fjag4s2QgCtWPSr3m0pxfNdI9VbxdHq6AUAYxDiQpNIp5iNkspdRdZH1ekyRNjiTnSkmk85QrbOMe85kccFE7Y5mMuKFvI3tsYAhIp6sKgSLB1NkB2U8t8hWhCRL6v8qiTGaFTjEO3oj%2BCoIYAgqVDt5BXoY6%2BhLbNNRFZ3TMRY3MU5cuuxdmGnDFjoh9rJGMNTbssIGOqUBvLj1ilSRJQzizoZ53fa%2B%2BF4XbPradCnqiRMlXL2YFInOf2uAmalI8xWYfx0VATcCZPN6B03DFK5kWAixvzieSm0VHJKMjXt2sqqDb99AVeiF95g3ZC7fbsOrF6kHK6weRg7zjyOe%2BS8UylVbnMZsyTmtrU0Z8tmJ6DAvJ02wFdCh4gt0ioI6LY%2Bl1ciDJcbNDekiZHDGb1cMGNtL%2BffJHoFJ%2BBb8&X-Amz-Signature=79b5711b89e68a9162e2db8292feb3d8777589fa20c56e0e8adfb10ef0e5387c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV5GMOR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxnTxoFMZJW0HFndUuyulqB0D%2FgVmdeqO3kVRTVTJZHwIgO6Hu2mukwN3g8NefwbVyo5TWaWi8XkRoAFUTl2x7lXYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDABmqxDK2MmkTRgrkCrcA7h%2FD5NOuO3KniqfhtQhwQyq%2FP6wAs6pKnEi6Z1qrdDnPxcUpAsaEkX86xk98tmPPsfTrdOgQ%2FoX0MTOkRMpuWTWU5hXW9zu1hdqHVOjeG%2FYGKcKeoJjr1zN2%2BLyJVqKNRtzJ8eAnS39AlZPRizTdxvZU4oCegD0aazTeggzzkUL1IoC2aWiUEk0NyPPxd0vHlUZcrXBeffqJzJWEWbH1VHfYY2b3%2BFZRBVO%2FgBWKrdxjImhVS6gAS30IQMhMQ2tTJh8TBRC26YaTWN%2Bc80A%2BlwBrHBg8ICClIqJESXu%2FvMK%2BZQFJUZlFEWhcjgP%2FG%2Fx%2Fhey626hMaQknWaGTu1XV9yIVOY2XZzkNr3J4ncFahSW3uRiNubfuGpmKO8xfCCRysREelo5wna0O6LpmvHyuQJCsbXyqa0KLhlzoVjQ7DxpaCljB8D0PVTLK%2BPQ%2Fjag4s2QgCtWPSr3m0pxfNdI9VbxdHq6AUAYxDiQpNIp5iNkspdRdZH1ekyRNjiTnSkmk85QrbOMe85kccFE7Y5mMuKFvI3tsYAhIp6sKgSLB1NkB2U8t8hWhCRL6v8qiTGaFTjEO3oj%2BCoIYAgqVDt5BXoY6%2BhLbNNRFZ3TMRY3MU5cuuxdmGnDFjoh9rJGMNTbssIGOqUBvLj1ilSRJQzizoZ53fa%2B%2BF4XbPradCnqiRMlXL2YFInOf2uAmalI8xWYfx0VATcCZPN6B03DFK5kWAixvzieSm0VHJKMjXt2sqqDb99AVeiF95g3ZC7fbsOrF6kHK6weRg7zjyOe%2BS8UylVbnMZsyTmtrU0Z8tmJ6DAvJ02wFdCh4gt0ioI6LY%2Bl1ciDJcbNDekiZHDGb1cMGNtL%2BffJHoFJ%2BBb8&X-Amz-Signature=266b9877ca03b58209d69c6ce26a357988f48d9119ad3021e5d322b18bc58a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV5GMOR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxnTxoFMZJW0HFndUuyulqB0D%2FgVmdeqO3kVRTVTJZHwIgO6Hu2mukwN3g8NefwbVyo5TWaWi8XkRoAFUTl2x7lXYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDABmqxDK2MmkTRgrkCrcA7h%2FD5NOuO3KniqfhtQhwQyq%2FP6wAs6pKnEi6Z1qrdDnPxcUpAsaEkX86xk98tmPPsfTrdOgQ%2FoX0MTOkRMpuWTWU5hXW9zu1hdqHVOjeG%2FYGKcKeoJjr1zN2%2BLyJVqKNRtzJ8eAnS39AlZPRizTdxvZU4oCegD0aazTeggzzkUL1IoC2aWiUEk0NyPPxd0vHlUZcrXBeffqJzJWEWbH1VHfYY2b3%2BFZRBVO%2FgBWKrdxjImhVS6gAS30IQMhMQ2tTJh8TBRC26YaTWN%2Bc80A%2BlwBrHBg8ICClIqJESXu%2FvMK%2BZQFJUZlFEWhcjgP%2FG%2Fx%2Fhey626hMaQknWaGTu1XV9yIVOY2XZzkNr3J4ncFahSW3uRiNubfuGpmKO8xfCCRysREelo5wna0O6LpmvHyuQJCsbXyqa0KLhlzoVjQ7DxpaCljB8D0PVTLK%2BPQ%2Fjag4s2QgCtWPSr3m0pxfNdI9VbxdHq6AUAYxDiQpNIp5iNkspdRdZH1ekyRNjiTnSkmk85QrbOMe85kccFE7Y5mMuKFvI3tsYAhIp6sKgSLB1NkB2U8t8hWhCRL6v8qiTGaFTjEO3oj%2BCoIYAgqVDt5BXoY6%2BhLbNNRFZ3TMRY3MU5cuuxdmGnDFjoh9rJGMNTbssIGOqUBvLj1ilSRJQzizoZ53fa%2B%2BF4XbPradCnqiRMlXL2YFInOf2uAmalI8xWYfx0VATcCZPN6B03DFK5kWAixvzieSm0VHJKMjXt2sqqDb99AVeiF95g3ZC7fbsOrF6kHK6weRg7zjyOe%2BS8UylVbnMZsyTmtrU0Z8tmJ6DAvJ02wFdCh4gt0ioI6LY%2Bl1ciDJcbNDekiZHDGb1cMGNtL%2BffJHoFJ%2BBb8&X-Amz-Signature=c9e8b0025e5f4cb40e92b7731015c19a4e200838de593caffbb21326617f9f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV5GMOR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxnTxoFMZJW0HFndUuyulqB0D%2FgVmdeqO3kVRTVTJZHwIgO6Hu2mukwN3g8NefwbVyo5TWaWi8XkRoAFUTl2x7lXYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDABmqxDK2MmkTRgrkCrcA7h%2FD5NOuO3KniqfhtQhwQyq%2FP6wAs6pKnEi6Z1qrdDnPxcUpAsaEkX86xk98tmPPsfTrdOgQ%2FoX0MTOkRMpuWTWU5hXW9zu1hdqHVOjeG%2FYGKcKeoJjr1zN2%2BLyJVqKNRtzJ8eAnS39AlZPRizTdxvZU4oCegD0aazTeggzzkUL1IoC2aWiUEk0NyPPxd0vHlUZcrXBeffqJzJWEWbH1VHfYY2b3%2BFZRBVO%2FgBWKrdxjImhVS6gAS30IQMhMQ2tTJh8TBRC26YaTWN%2Bc80A%2BlwBrHBg8ICClIqJESXu%2FvMK%2BZQFJUZlFEWhcjgP%2FG%2Fx%2Fhey626hMaQknWaGTu1XV9yIVOY2XZzkNr3J4ncFahSW3uRiNubfuGpmKO8xfCCRysREelo5wna0O6LpmvHyuQJCsbXyqa0KLhlzoVjQ7DxpaCljB8D0PVTLK%2BPQ%2Fjag4s2QgCtWPSr3m0pxfNdI9VbxdHq6AUAYxDiQpNIp5iNkspdRdZH1ekyRNjiTnSkmk85QrbOMe85kccFE7Y5mMuKFvI3tsYAhIp6sKgSLB1NkB2U8t8hWhCRL6v8qiTGaFTjEO3oj%2BCoIYAgqVDt5BXoY6%2BhLbNNRFZ3TMRY3MU5cuuxdmGnDFjoh9rJGMNTbssIGOqUBvLj1ilSRJQzizoZ53fa%2B%2BF4XbPradCnqiRMlXL2YFInOf2uAmalI8xWYfx0VATcCZPN6B03DFK5kWAixvzieSm0VHJKMjXt2sqqDb99AVeiF95g3ZC7fbsOrF6kHK6weRg7zjyOe%2BS8UylVbnMZsyTmtrU0Z8tmJ6DAvJ02wFdCh4gt0ioI6LY%2Bl1ciDJcbNDekiZHDGb1cMGNtL%2BffJHoFJ%2BBb8&X-Amz-Signature=4e427930436916731ce3a5d7139ee4758b3fd0e1df01e0b797eea9b32014ad74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV5GMOR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxnTxoFMZJW0HFndUuyulqB0D%2FgVmdeqO3kVRTVTJZHwIgO6Hu2mukwN3g8NefwbVyo5TWaWi8XkRoAFUTl2x7lXYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDABmqxDK2MmkTRgrkCrcA7h%2FD5NOuO3KniqfhtQhwQyq%2FP6wAs6pKnEi6Z1qrdDnPxcUpAsaEkX86xk98tmPPsfTrdOgQ%2FoX0MTOkRMpuWTWU5hXW9zu1hdqHVOjeG%2FYGKcKeoJjr1zN2%2BLyJVqKNRtzJ8eAnS39AlZPRizTdxvZU4oCegD0aazTeggzzkUL1IoC2aWiUEk0NyPPxd0vHlUZcrXBeffqJzJWEWbH1VHfYY2b3%2BFZRBVO%2FgBWKrdxjImhVS6gAS30IQMhMQ2tTJh8TBRC26YaTWN%2Bc80A%2BlwBrHBg8ICClIqJESXu%2FvMK%2BZQFJUZlFEWhcjgP%2FG%2Fx%2Fhey626hMaQknWaGTu1XV9yIVOY2XZzkNr3J4ncFahSW3uRiNubfuGpmKO8xfCCRysREelo5wna0O6LpmvHyuQJCsbXyqa0KLhlzoVjQ7DxpaCljB8D0PVTLK%2BPQ%2Fjag4s2QgCtWPSr3m0pxfNdI9VbxdHq6AUAYxDiQpNIp5iNkspdRdZH1ekyRNjiTnSkmk85QrbOMe85kccFE7Y5mMuKFvI3tsYAhIp6sKgSLB1NkB2U8t8hWhCRL6v8qiTGaFTjEO3oj%2BCoIYAgqVDt5BXoY6%2BhLbNNRFZ3TMRY3MU5cuuxdmGnDFjoh9rJGMNTbssIGOqUBvLj1ilSRJQzizoZ53fa%2B%2BF4XbPradCnqiRMlXL2YFInOf2uAmalI8xWYfx0VATcCZPN6B03DFK5kWAixvzieSm0VHJKMjXt2sqqDb99AVeiF95g3ZC7fbsOrF6kHK6weRg7zjyOe%2BS8UylVbnMZsyTmtrU0Z8tmJ6DAvJ02wFdCh4gt0ioI6LY%2Bl1ciDJcbNDekiZHDGb1cMGNtL%2BffJHoFJ%2BBb8&X-Amz-Signature=3c257c4d3a3bcdb762492891fc36bced4022c433d18deb47ac057b1fd94b68b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV5GMOR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxnTxoFMZJW0HFndUuyulqB0D%2FgVmdeqO3kVRTVTJZHwIgO6Hu2mukwN3g8NefwbVyo5TWaWi8XkRoAFUTl2x7lXYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDABmqxDK2MmkTRgrkCrcA7h%2FD5NOuO3KniqfhtQhwQyq%2FP6wAs6pKnEi6Z1qrdDnPxcUpAsaEkX86xk98tmPPsfTrdOgQ%2FoX0MTOkRMpuWTWU5hXW9zu1hdqHVOjeG%2FYGKcKeoJjr1zN2%2BLyJVqKNRtzJ8eAnS39AlZPRizTdxvZU4oCegD0aazTeggzzkUL1IoC2aWiUEk0NyPPxd0vHlUZcrXBeffqJzJWEWbH1VHfYY2b3%2BFZRBVO%2FgBWKrdxjImhVS6gAS30IQMhMQ2tTJh8TBRC26YaTWN%2Bc80A%2BlwBrHBg8ICClIqJESXu%2FvMK%2BZQFJUZlFEWhcjgP%2FG%2Fx%2Fhey626hMaQknWaGTu1XV9yIVOY2XZzkNr3J4ncFahSW3uRiNubfuGpmKO8xfCCRysREelo5wna0O6LpmvHyuQJCsbXyqa0KLhlzoVjQ7DxpaCljB8D0PVTLK%2BPQ%2Fjag4s2QgCtWPSr3m0pxfNdI9VbxdHq6AUAYxDiQpNIp5iNkspdRdZH1ekyRNjiTnSkmk85QrbOMe85kccFE7Y5mMuKFvI3tsYAhIp6sKgSLB1NkB2U8t8hWhCRL6v8qiTGaFTjEO3oj%2BCoIYAgqVDt5BXoY6%2BhLbNNRFZ3TMRY3MU5cuuxdmGnDFjoh9rJGMNTbssIGOqUBvLj1ilSRJQzizoZ53fa%2B%2BF4XbPradCnqiRMlXL2YFInOf2uAmalI8xWYfx0VATcCZPN6B03DFK5kWAixvzieSm0VHJKMjXt2sqqDb99AVeiF95g3ZC7fbsOrF6kHK6weRg7zjyOe%2BS8UylVbnMZsyTmtrU0Z8tmJ6DAvJ02wFdCh4gt0ioI6LY%2Bl1ciDJcbNDekiZHDGb1cMGNtL%2BffJHoFJ%2BBb8&X-Amz-Signature=ebf7c47d7c15db60772c4c6d74bfe32098fe2b84a526cef5244885f01b45c645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV5GMOR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxnTxoFMZJW0HFndUuyulqB0D%2FgVmdeqO3kVRTVTJZHwIgO6Hu2mukwN3g8NefwbVyo5TWaWi8XkRoAFUTl2x7lXYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDABmqxDK2MmkTRgrkCrcA7h%2FD5NOuO3KniqfhtQhwQyq%2FP6wAs6pKnEi6Z1qrdDnPxcUpAsaEkX86xk98tmPPsfTrdOgQ%2FoX0MTOkRMpuWTWU5hXW9zu1hdqHVOjeG%2FYGKcKeoJjr1zN2%2BLyJVqKNRtzJ8eAnS39AlZPRizTdxvZU4oCegD0aazTeggzzkUL1IoC2aWiUEk0NyPPxd0vHlUZcrXBeffqJzJWEWbH1VHfYY2b3%2BFZRBVO%2FgBWKrdxjImhVS6gAS30IQMhMQ2tTJh8TBRC26YaTWN%2Bc80A%2BlwBrHBg8ICClIqJESXu%2FvMK%2BZQFJUZlFEWhcjgP%2FG%2Fx%2Fhey626hMaQknWaGTu1XV9yIVOY2XZzkNr3J4ncFahSW3uRiNubfuGpmKO8xfCCRysREelo5wna0O6LpmvHyuQJCsbXyqa0KLhlzoVjQ7DxpaCljB8D0PVTLK%2BPQ%2Fjag4s2QgCtWPSr3m0pxfNdI9VbxdHq6AUAYxDiQpNIp5iNkspdRdZH1ekyRNjiTnSkmk85QrbOMe85kccFE7Y5mMuKFvI3tsYAhIp6sKgSLB1NkB2U8t8hWhCRL6v8qiTGaFTjEO3oj%2BCoIYAgqVDt5BXoY6%2BhLbNNRFZ3TMRY3MU5cuuxdmGnDFjoh9rJGMNTbssIGOqUBvLj1ilSRJQzizoZ53fa%2B%2BF4XbPradCnqiRMlXL2YFInOf2uAmalI8xWYfx0VATcCZPN6B03DFK5kWAixvzieSm0VHJKMjXt2sqqDb99AVeiF95g3ZC7fbsOrF6kHK6weRg7zjyOe%2BS8UylVbnMZsyTmtrU0Z8tmJ6DAvJ02wFdCh4gt0ioI6LY%2Bl1ciDJcbNDekiZHDGb1cMGNtL%2BffJHoFJ%2BBb8&X-Amz-Signature=c4c2497f9d4cafec13753d4d503a8ae9d7c9673944a405fff3f1bfdb6cb7f0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

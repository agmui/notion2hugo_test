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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXV6MYB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMf3U%2FBISrsoKNxA06%2FHWeFOuSivKA1IUXFsJ9UJG4aAiBk%2BJ6qWcqs6zNRvT3Ur31CcaCvWB1rw5allZRoExqjKiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwL5Vi3SwG2FnaUvKtwDvc%2FGYSkQpg599oYsOCbzTyzmEvGd0wnAJ%2FU8uKzv%2BXHTQexQqSUsPzCiGnMvD8w%2B2hdcynNYTcqyyH5evu9rhDML78JkT3lLpXVFDfMSgDGPhfLIwwhxnYqEUWkgbSaxfOoHji2nIwasmnPCpuhF6zrGuEJDovAUBI4dtcJ%2Fa%2Bpz9nqxuBHuHdCik3tg5FImu1csKzJCpduB2MD6XEdTN%2BsP%2FBta7lDVv6CI6DO7NZsEACrTJwYC37jeuSWs0kbOYGlj9PzEhbj%2FlQABp1lXEeB1EirrIptPcOq1Pt4jLmNJCwHGK7GXBiBX0mCB5pqH5fAYsu1sYcGOlINR8P3aa4boSCUbYDB6tROSD7XYVYXThXfr4qCwFWXSqFoyZvtV%2BDbLeK0EIgS%2F8LGUYn1BMSLN32uXbzIXO087PhKvkhT64yHDTYbHbqDLuCVSWUTjc7kY%2FHM0J3N5f9JspjcmJsK2UKpsUT9JnxLwP%2F0Z2q3LTfCPta3OWGkksI76qmC0DyOWnMjvu3%2B%2BuNnIapgBQGMQ6O3BVS6dBB%2Bh482WjBaLTROWH8o%2FgE%2BNpKqwcc6BtgsKFQDFszfBuFlYPk3u625u4Rmx5ORDcJiFAlx1yJx5n2futlfbEM%2FA2GgwqbOLwAY6pgF0ov8GOgxecuS0qi96vI6gryXee940%2BtD9lwte6tEybM2bMKPqFfxnGSp%2BO5d6v2A7TF6pqzNw2P2%2FRctkze9%2FvgBHIxxpTdPGATPiB0e8EA91oW16Gqw4tF6OkeVF3EyarTDPOFxa4RRrsEtlNnkkELtZDW9TOgRni2igsWXRnqd8cJ1vcFPC8gnLQThRq06QdTHfSxza7M90FeTdh399qJLpqCI%2F&X-Amz-Signature=2c913f633809c292a81d234ee82c13e77148b582f604e92abbb3710ecaf9cbb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXV6MYB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMf3U%2FBISrsoKNxA06%2FHWeFOuSivKA1IUXFsJ9UJG4aAiBk%2BJ6qWcqs6zNRvT3Ur31CcaCvWB1rw5allZRoExqjKiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwL5Vi3SwG2FnaUvKtwDvc%2FGYSkQpg599oYsOCbzTyzmEvGd0wnAJ%2FU8uKzv%2BXHTQexQqSUsPzCiGnMvD8w%2B2hdcynNYTcqyyH5evu9rhDML78JkT3lLpXVFDfMSgDGPhfLIwwhxnYqEUWkgbSaxfOoHji2nIwasmnPCpuhF6zrGuEJDovAUBI4dtcJ%2Fa%2Bpz9nqxuBHuHdCik3tg5FImu1csKzJCpduB2MD6XEdTN%2BsP%2FBta7lDVv6CI6DO7NZsEACrTJwYC37jeuSWs0kbOYGlj9PzEhbj%2FlQABp1lXEeB1EirrIptPcOq1Pt4jLmNJCwHGK7GXBiBX0mCB5pqH5fAYsu1sYcGOlINR8P3aa4boSCUbYDB6tROSD7XYVYXThXfr4qCwFWXSqFoyZvtV%2BDbLeK0EIgS%2F8LGUYn1BMSLN32uXbzIXO087PhKvkhT64yHDTYbHbqDLuCVSWUTjc7kY%2FHM0J3N5f9JspjcmJsK2UKpsUT9JnxLwP%2F0Z2q3LTfCPta3OWGkksI76qmC0DyOWnMjvu3%2B%2BuNnIapgBQGMQ6O3BVS6dBB%2Bh482WjBaLTROWH8o%2FgE%2BNpKqwcc6BtgsKFQDFszfBuFlYPk3u625u4Rmx5ORDcJiFAlx1yJx5n2futlfbEM%2FA2GgwqbOLwAY6pgF0ov8GOgxecuS0qi96vI6gryXee940%2BtD9lwte6tEybM2bMKPqFfxnGSp%2BO5d6v2A7TF6pqzNw2P2%2FRctkze9%2FvgBHIxxpTdPGATPiB0e8EA91oW16Gqw4tF6OkeVF3EyarTDPOFxa4RRrsEtlNnkkELtZDW9TOgRni2igsWXRnqd8cJ1vcFPC8gnLQThRq06QdTHfSxza7M90FeTdh399qJLpqCI%2F&X-Amz-Signature=24b5073f8089c614128e8db9deaff8315ac350994ebef7299dc473d636cf7d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXV6MYB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMf3U%2FBISrsoKNxA06%2FHWeFOuSivKA1IUXFsJ9UJG4aAiBk%2BJ6qWcqs6zNRvT3Ur31CcaCvWB1rw5allZRoExqjKiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwL5Vi3SwG2FnaUvKtwDvc%2FGYSkQpg599oYsOCbzTyzmEvGd0wnAJ%2FU8uKzv%2BXHTQexQqSUsPzCiGnMvD8w%2B2hdcynNYTcqyyH5evu9rhDML78JkT3lLpXVFDfMSgDGPhfLIwwhxnYqEUWkgbSaxfOoHji2nIwasmnPCpuhF6zrGuEJDovAUBI4dtcJ%2Fa%2Bpz9nqxuBHuHdCik3tg5FImu1csKzJCpduB2MD6XEdTN%2BsP%2FBta7lDVv6CI6DO7NZsEACrTJwYC37jeuSWs0kbOYGlj9PzEhbj%2FlQABp1lXEeB1EirrIptPcOq1Pt4jLmNJCwHGK7GXBiBX0mCB5pqH5fAYsu1sYcGOlINR8P3aa4boSCUbYDB6tROSD7XYVYXThXfr4qCwFWXSqFoyZvtV%2BDbLeK0EIgS%2F8LGUYn1BMSLN32uXbzIXO087PhKvkhT64yHDTYbHbqDLuCVSWUTjc7kY%2FHM0J3N5f9JspjcmJsK2UKpsUT9JnxLwP%2F0Z2q3LTfCPta3OWGkksI76qmC0DyOWnMjvu3%2B%2BuNnIapgBQGMQ6O3BVS6dBB%2Bh482WjBaLTROWH8o%2FgE%2BNpKqwcc6BtgsKFQDFszfBuFlYPk3u625u4Rmx5ORDcJiFAlx1yJx5n2futlfbEM%2FA2GgwqbOLwAY6pgF0ov8GOgxecuS0qi96vI6gryXee940%2BtD9lwte6tEybM2bMKPqFfxnGSp%2BO5d6v2A7TF6pqzNw2P2%2FRctkze9%2FvgBHIxxpTdPGATPiB0e8EA91oW16Gqw4tF6OkeVF3EyarTDPOFxa4RRrsEtlNnkkELtZDW9TOgRni2igsWXRnqd8cJ1vcFPC8gnLQThRq06QdTHfSxza7M90FeTdh399qJLpqCI%2F&X-Amz-Signature=bf272a7d92216ca0098805b9ccc6da83783411d5a43639ed82ab2b76d3256823&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXV6MYB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMf3U%2FBISrsoKNxA06%2FHWeFOuSivKA1IUXFsJ9UJG4aAiBk%2BJ6qWcqs6zNRvT3Ur31CcaCvWB1rw5allZRoExqjKiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwL5Vi3SwG2FnaUvKtwDvc%2FGYSkQpg599oYsOCbzTyzmEvGd0wnAJ%2FU8uKzv%2BXHTQexQqSUsPzCiGnMvD8w%2B2hdcynNYTcqyyH5evu9rhDML78JkT3lLpXVFDfMSgDGPhfLIwwhxnYqEUWkgbSaxfOoHji2nIwasmnPCpuhF6zrGuEJDovAUBI4dtcJ%2Fa%2Bpz9nqxuBHuHdCik3tg5FImu1csKzJCpduB2MD6XEdTN%2BsP%2FBta7lDVv6CI6DO7NZsEACrTJwYC37jeuSWs0kbOYGlj9PzEhbj%2FlQABp1lXEeB1EirrIptPcOq1Pt4jLmNJCwHGK7GXBiBX0mCB5pqH5fAYsu1sYcGOlINR8P3aa4boSCUbYDB6tROSD7XYVYXThXfr4qCwFWXSqFoyZvtV%2BDbLeK0EIgS%2F8LGUYn1BMSLN32uXbzIXO087PhKvkhT64yHDTYbHbqDLuCVSWUTjc7kY%2FHM0J3N5f9JspjcmJsK2UKpsUT9JnxLwP%2F0Z2q3LTfCPta3OWGkksI76qmC0DyOWnMjvu3%2B%2BuNnIapgBQGMQ6O3BVS6dBB%2Bh482WjBaLTROWH8o%2FgE%2BNpKqwcc6BtgsKFQDFszfBuFlYPk3u625u4Rmx5ORDcJiFAlx1yJx5n2futlfbEM%2FA2GgwqbOLwAY6pgF0ov8GOgxecuS0qi96vI6gryXee940%2BtD9lwte6tEybM2bMKPqFfxnGSp%2BO5d6v2A7TF6pqzNw2P2%2FRctkze9%2FvgBHIxxpTdPGATPiB0e8EA91oW16Gqw4tF6OkeVF3EyarTDPOFxa4RRrsEtlNnkkELtZDW9TOgRni2igsWXRnqd8cJ1vcFPC8gnLQThRq06QdTHfSxza7M90FeTdh399qJLpqCI%2F&X-Amz-Signature=57317dff8c126de9bcd12f0119a9f12d92739734269d45eb9f06f07b5edd371b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXV6MYB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMf3U%2FBISrsoKNxA06%2FHWeFOuSivKA1IUXFsJ9UJG4aAiBk%2BJ6qWcqs6zNRvT3Ur31CcaCvWB1rw5allZRoExqjKiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwL5Vi3SwG2FnaUvKtwDvc%2FGYSkQpg599oYsOCbzTyzmEvGd0wnAJ%2FU8uKzv%2BXHTQexQqSUsPzCiGnMvD8w%2B2hdcynNYTcqyyH5evu9rhDML78JkT3lLpXVFDfMSgDGPhfLIwwhxnYqEUWkgbSaxfOoHji2nIwasmnPCpuhF6zrGuEJDovAUBI4dtcJ%2Fa%2Bpz9nqxuBHuHdCik3tg5FImu1csKzJCpduB2MD6XEdTN%2BsP%2FBta7lDVv6CI6DO7NZsEACrTJwYC37jeuSWs0kbOYGlj9PzEhbj%2FlQABp1lXEeB1EirrIptPcOq1Pt4jLmNJCwHGK7GXBiBX0mCB5pqH5fAYsu1sYcGOlINR8P3aa4boSCUbYDB6tROSD7XYVYXThXfr4qCwFWXSqFoyZvtV%2BDbLeK0EIgS%2F8LGUYn1BMSLN32uXbzIXO087PhKvkhT64yHDTYbHbqDLuCVSWUTjc7kY%2FHM0J3N5f9JspjcmJsK2UKpsUT9JnxLwP%2F0Z2q3LTfCPta3OWGkksI76qmC0DyOWnMjvu3%2B%2BuNnIapgBQGMQ6O3BVS6dBB%2Bh482WjBaLTROWH8o%2FgE%2BNpKqwcc6BtgsKFQDFszfBuFlYPk3u625u4Rmx5ORDcJiFAlx1yJx5n2futlfbEM%2FA2GgwqbOLwAY6pgF0ov8GOgxecuS0qi96vI6gryXee940%2BtD9lwte6tEybM2bMKPqFfxnGSp%2BO5d6v2A7TF6pqzNw2P2%2FRctkze9%2FvgBHIxxpTdPGATPiB0e8EA91oW16Gqw4tF6OkeVF3EyarTDPOFxa4RRrsEtlNnkkELtZDW9TOgRni2igsWXRnqd8cJ1vcFPC8gnLQThRq06QdTHfSxza7M90FeTdh399qJLpqCI%2F&X-Amz-Signature=30b5fc57aa5568e58baa2b26567d3bab47a03d02eef5733cec3e223cea3fc9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXV6MYB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMf3U%2FBISrsoKNxA06%2FHWeFOuSivKA1IUXFsJ9UJG4aAiBk%2BJ6qWcqs6zNRvT3Ur31CcaCvWB1rw5allZRoExqjKiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwL5Vi3SwG2FnaUvKtwDvc%2FGYSkQpg599oYsOCbzTyzmEvGd0wnAJ%2FU8uKzv%2BXHTQexQqSUsPzCiGnMvD8w%2B2hdcynNYTcqyyH5evu9rhDML78JkT3lLpXVFDfMSgDGPhfLIwwhxnYqEUWkgbSaxfOoHji2nIwasmnPCpuhF6zrGuEJDovAUBI4dtcJ%2Fa%2Bpz9nqxuBHuHdCik3tg5FImu1csKzJCpduB2MD6XEdTN%2BsP%2FBta7lDVv6CI6DO7NZsEACrTJwYC37jeuSWs0kbOYGlj9PzEhbj%2FlQABp1lXEeB1EirrIptPcOq1Pt4jLmNJCwHGK7GXBiBX0mCB5pqH5fAYsu1sYcGOlINR8P3aa4boSCUbYDB6tROSD7XYVYXThXfr4qCwFWXSqFoyZvtV%2BDbLeK0EIgS%2F8LGUYn1BMSLN32uXbzIXO087PhKvkhT64yHDTYbHbqDLuCVSWUTjc7kY%2FHM0J3N5f9JspjcmJsK2UKpsUT9JnxLwP%2F0Z2q3LTfCPta3OWGkksI76qmC0DyOWnMjvu3%2B%2BuNnIapgBQGMQ6O3BVS6dBB%2Bh482WjBaLTROWH8o%2FgE%2BNpKqwcc6BtgsKFQDFszfBuFlYPk3u625u4Rmx5ORDcJiFAlx1yJx5n2futlfbEM%2FA2GgwqbOLwAY6pgF0ov8GOgxecuS0qi96vI6gryXee940%2BtD9lwte6tEybM2bMKPqFfxnGSp%2BO5d6v2A7TF6pqzNw2P2%2FRctkze9%2FvgBHIxxpTdPGATPiB0e8EA91oW16Gqw4tF6OkeVF3EyarTDPOFxa4RRrsEtlNnkkELtZDW9TOgRni2igsWXRnqd8cJ1vcFPC8gnLQThRq06QdTHfSxza7M90FeTdh399qJLpqCI%2F&X-Amz-Signature=b15be15c6dfa35734088cc3b4fa592ad0b24f2a4b455b6cf7f33fbeffc1a4813&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXV6MYB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMf3U%2FBISrsoKNxA06%2FHWeFOuSivKA1IUXFsJ9UJG4aAiBk%2BJ6qWcqs6zNRvT3Ur31CcaCvWB1rw5allZRoExqjKiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwL5Vi3SwG2FnaUvKtwDvc%2FGYSkQpg599oYsOCbzTyzmEvGd0wnAJ%2FU8uKzv%2BXHTQexQqSUsPzCiGnMvD8w%2B2hdcynNYTcqyyH5evu9rhDML78JkT3lLpXVFDfMSgDGPhfLIwwhxnYqEUWkgbSaxfOoHji2nIwasmnPCpuhF6zrGuEJDovAUBI4dtcJ%2Fa%2Bpz9nqxuBHuHdCik3tg5FImu1csKzJCpduB2MD6XEdTN%2BsP%2FBta7lDVv6CI6DO7NZsEACrTJwYC37jeuSWs0kbOYGlj9PzEhbj%2FlQABp1lXEeB1EirrIptPcOq1Pt4jLmNJCwHGK7GXBiBX0mCB5pqH5fAYsu1sYcGOlINR8P3aa4boSCUbYDB6tROSD7XYVYXThXfr4qCwFWXSqFoyZvtV%2BDbLeK0EIgS%2F8LGUYn1BMSLN32uXbzIXO087PhKvkhT64yHDTYbHbqDLuCVSWUTjc7kY%2FHM0J3N5f9JspjcmJsK2UKpsUT9JnxLwP%2F0Z2q3LTfCPta3OWGkksI76qmC0DyOWnMjvu3%2B%2BuNnIapgBQGMQ6O3BVS6dBB%2Bh482WjBaLTROWH8o%2FgE%2BNpKqwcc6BtgsKFQDFszfBuFlYPk3u625u4Rmx5ORDcJiFAlx1yJx5n2futlfbEM%2FA2GgwqbOLwAY6pgF0ov8GOgxecuS0qi96vI6gryXee940%2BtD9lwte6tEybM2bMKPqFfxnGSp%2BO5d6v2A7TF6pqzNw2P2%2FRctkze9%2FvgBHIxxpTdPGATPiB0e8EA91oW16Gqw4tF6OkeVF3EyarTDPOFxa4RRrsEtlNnkkELtZDW9TOgRni2igsWXRnqd8cJ1vcFPC8gnLQThRq06QdTHfSxza7M90FeTdh399qJLpqCI%2F&X-Amz-Signature=13accdfe95f13bb2abf681cf7db9fd294a2d1271f5b758931614ea16cb392889&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

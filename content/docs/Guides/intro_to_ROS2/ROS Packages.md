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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMMCMZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCr%2FEzIrlUa8PFk009MPux2crHe86SFEgVi%2BFOsLUpsggIhAO4tdIrmL%2FdDuFrvnrysvQPOystEC4O0%2BXjwTklOqslFKv8DCCAQABoMNjM3NDIzMTgzODA1IgynK6AAvOitaSDX3Mcq3ANzNqRvjIkpAgRJqkdaA2d1oqMgDURrC489t2AyjE5aUMDkHy%2FhaOAlEKNOfuUmYcFqqbMyYAkKvW3YX9uPmYAc6URPBVtHlrJPoj5EEPY85ohNRN4UwNYucE2qDyl0ovIInc%2FhtBGk2oL3kstfEr8XdKZMPZ1b2VUEcGM%2Bmuiw1s9amcTC56LMLxxgXWiUDIi7CNCOFtSKDxVy2cuUUN4F21tE701g%2BSy8bKjIMZdn65lag5YOy1Q9txKAUGgmzi%2FxEmLc3B1R4XAkkx6QuSZaYZCjWx%2FdpquFnPN7NNsvk104Cr4fqM6%2B0REVGFZ%2FpomW6W6iVnDmjQjWj5Sak5H6pIopJu24pAfUseWT05YHe3iyxANmGAh79sosoJx5RuigIid2Ev8IFPTM7hwox01rL2ss2DF%2BtQwBQcLf2k1I7ZbuCOJrD4S2HQmtQsRWvKScG2o7mKrNJVJoP9VCK7%2FSLhWAUThWK0tjhmart81IDpXdBzX5goW%2FEcSv%2BToPLtviVCS2FFziMLBJxf%2BBzEFW01iGykoqS8jYpneqOCaovmIhhhIqM5qn%2BEJK9ptRev6AhW2LXzGC%2Bus5GGYzoNwChB3OswxpCEec8eOQFgJrsOzqxH1ofCFhm%2B6e2jD99v3BBjqkAZ5kS0m3LTVd0kYf1m35NHpnJXq3GHUZ5N0EAzpkxqpBCmdJ1dz8h3ISuB6IH1JM%2BYhaJDkvWQHIdhbi0DaXIcY%2B0G4o4%2BYGKiVLm03EFseNg0a9mNyAmU0e4PRkWCpIJouwNIc6y4Jy7fvzng0mFyckupVCmswegX2%2Ba62HYHt3En9nHFaQHeOAZwHyYSwtHK9830LueMpuz%2BdEzpvB4i%2FsGZ1B&X-Amz-Signature=13ebc1fd651aadc6e7fdc7a87323f1102c9754988c48df06d77709d94f0c73b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMMCMZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCr%2FEzIrlUa8PFk009MPux2crHe86SFEgVi%2BFOsLUpsggIhAO4tdIrmL%2FdDuFrvnrysvQPOystEC4O0%2BXjwTklOqslFKv8DCCAQABoMNjM3NDIzMTgzODA1IgynK6AAvOitaSDX3Mcq3ANzNqRvjIkpAgRJqkdaA2d1oqMgDURrC489t2AyjE5aUMDkHy%2FhaOAlEKNOfuUmYcFqqbMyYAkKvW3YX9uPmYAc6URPBVtHlrJPoj5EEPY85ohNRN4UwNYucE2qDyl0ovIInc%2FhtBGk2oL3kstfEr8XdKZMPZ1b2VUEcGM%2Bmuiw1s9amcTC56LMLxxgXWiUDIi7CNCOFtSKDxVy2cuUUN4F21tE701g%2BSy8bKjIMZdn65lag5YOy1Q9txKAUGgmzi%2FxEmLc3B1R4XAkkx6QuSZaYZCjWx%2FdpquFnPN7NNsvk104Cr4fqM6%2B0REVGFZ%2FpomW6W6iVnDmjQjWj5Sak5H6pIopJu24pAfUseWT05YHe3iyxANmGAh79sosoJx5RuigIid2Ev8IFPTM7hwox01rL2ss2DF%2BtQwBQcLf2k1I7ZbuCOJrD4S2HQmtQsRWvKScG2o7mKrNJVJoP9VCK7%2FSLhWAUThWK0tjhmart81IDpXdBzX5goW%2FEcSv%2BToPLtviVCS2FFziMLBJxf%2BBzEFW01iGykoqS8jYpneqOCaovmIhhhIqM5qn%2BEJK9ptRev6AhW2LXzGC%2Bus5GGYzoNwChB3OswxpCEec8eOQFgJrsOzqxH1ofCFhm%2B6e2jD99v3BBjqkAZ5kS0m3LTVd0kYf1m35NHpnJXq3GHUZ5N0EAzpkxqpBCmdJ1dz8h3ISuB6IH1JM%2BYhaJDkvWQHIdhbi0DaXIcY%2B0G4o4%2BYGKiVLm03EFseNg0a9mNyAmU0e4PRkWCpIJouwNIc6y4Jy7fvzng0mFyckupVCmswegX2%2Ba62HYHt3En9nHFaQHeOAZwHyYSwtHK9830LueMpuz%2BdEzpvB4i%2FsGZ1B&X-Amz-Signature=5ead2b83b6ed7117fae5c262604ed3baeb141c70d8810de93ac0a72102281af2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMMCMZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCr%2FEzIrlUa8PFk009MPux2crHe86SFEgVi%2BFOsLUpsggIhAO4tdIrmL%2FdDuFrvnrysvQPOystEC4O0%2BXjwTklOqslFKv8DCCAQABoMNjM3NDIzMTgzODA1IgynK6AAvOitaSDX3Mcq3ANzNqRvjIkpAgRJqkdaA2d1oqMgDURrC489t2AyjE5aUMDkHy%2FhaOAlEKNOfuUmYcFqqbMyYAkKvW3YX9uPmYAc6URPBVtHlrJPoj5EEPY85ohNRN4UwNYucE2qDyl0ovIInc%2FhtBGk2oL3kstfEr8XdKZMPZ1b2VUEcGM%2Bmuiw1s9amcTC56LMLxxgXWiUDIi7CNCOFtSKDxVy2cuUUN4F21tE701g%2BSy8bKjIMZdn65lag5YOy1Q9txKAUGgmzi%2FxEmLc3B1R4XAkkx6QuSZaYZCjWx%2FdpquFnPN7NNsvk104Cr4fqM6%2B0REVGFZ%2FpomW6W6iVnDmjQjWj5Sak5H6pIopJu24pAfUseWT05YHe3iyxANmGAh79sosoJx5RuigIid2Ev8IFPTM7hwox01rL2ss2DF%2BtQwBQcLf2k1I7ZbuCOJrD4S2HQmtQsRWvKScG2o7mKrNJVJoP9VCK7%2FSLhWAUThWK0tjhmart81IDpXdBzX5goW%2FEcSv%2BToPLtviVCS2FFziMLBJxf%2BBzEFW01iGykoqS8jYpneqOCaovmIhhhIqM5qn%2BEJK9ptRev6AhW2LXzGC%2Bus5GGYzoNwChB3OswxpCEec8eOQFgJrsOzqxH1ofCFhm%2B6e2jD99v3BBjqkAZ5kS0m3LTVd0kYf1m35NHpnJXq3GHUZ5N0EAzpkxqpBCmdJ1dz8h3ISuB6IH1JM%2BYhaJDkvWQHIdhbi0DaXIcY%2B0G4o4%2BYGKiVLm03EFseNg0a9mNyAmU0e4PRkWCpIJouwNIc6y4Jy7fvzng0mFyckupVCmswegX2%2Ba62HYHt3En9nHFaQHeOAZwHyYSwtHK9830LueMpuz%2BdEzpvB4i%2FsGZ1B&X-Amz-Signature=de2eb6cf79d9c3b03af082688fbc09544e24b009dd36cfc02f62f03b8831dc77&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMMCMZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCr%2FEzIrlUa8PFk009MPux2crHe86SFEgVi%2BFOsLUpsggIhAO4tdIrmL%2FdDuFrvnrysvQPOystEC4O0%2BXjwTklOqslFKv8DCCAQABoMNjM3NDIzMTgzODA1IgynK6AAvOitaSDX3Mcq3ANzNqRvjIkpAgRJqkdaA2d1oqMgDURrC489t2AyjE5aUMDkHy%2FhaOAlEKNOfuUmYcFqqbMyYAkKvW3YX9uPmYAc6URPBVtHlrJPoj5EEPY85ohNRN4UwNYucE2qDyl0ovIInc%2FhtBGk2oL3kstfEr8XdKZMPZ1b2VUEcGM%2Bmuiw1s9amcTC56LMLxxgXWiUDIi7CNCOFtSKDxVy2cuUUN4F21tE701g%2BSy8bKjIMZdn65lag5YOy1Q9txKAUGgmzi%2FxEmLc3B1R4XAkkx6QuSZaYZCjWx%2FdpquFnPN7NNsvk104Cr4fqM6%2B0REVGFZ%2FpomW6W6iVnDmjQjWj5Sak5H6pIopJu24pAfUseWT05YHe3iyxANmGAh79sosoJx5RuigIid2Ev8IFPTM7hwox01rL2ss2DF%2BtQwBQcLf2k1I7ZbuCOJrD4S2HQmtQsRWvKScG2o7mKrNJVJoP9VCK7%2FSLhWAUThWK0tjhmart81IDpXdBzX5goW%2FEcSv%2BToPLtviVCS2FFziMLBJxf%2BBzEFW01iGykoqS8jYpneqOCaovmIhhhIqM5qn%2BEJK9ptRev6AhW2LXzGC%2Bus5GGYzoNwChB3OswxpCEec8eOQFgJrsOzqxH1ofCFhm%2B6e2jD99v3BBjqkAZ5kS0m3LTVd0kYf1m35NHpnJXq3GHUZ5N0EAzpkxqpBCmdJ1dz8h3ISuB6IH1JM%2BYhaJDkvWQHIdhbi0DaXIcY%2B0G4o4%2BYGKiVLm03EFseNg0a9mNyAmU0e4PRkWCpIJouwNIc6y4Jy7fvzng0mFyckupVCmswegX2%2Ba62HYHt3En9nHFaQHeOAZwHyYSwtHK9830LueMpuz%2BdEzpvB4i%2FsGZ1B&X-Amz-Signature=14c6d1e6eaa56d1d77cd455c01c20aa08dfd5ef2243fae96e86f21d406d78dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMMCMZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCr%2FEzIrlUa8PFk009MPux2crHe86SFEgVi%2BFOsLUpsggIhAO4tdIrmL%2FdDuFrvnrysvQPOystEC4O0%2BXjwTklOqslFKv8DCCAQABoMNjM3NDIzMTgzODA1IgynK6AAvOitaSDX3Mcq3ANzNqRvjIkpAgRJqkdaA2d1oqMgDURrC489t2AyjE5aUMDkHy%2FhaOAlEKNOfuUmYcFqqbMyYAkKvW3YX9uPmYAc6URPBVtHlrJPoj5EEPY85ohNRN4UwNYucE2qDyl0ovIInc%2FhtBGk2oL3kstfEr8XdKZMPZ1b2VUEcGM%2Bmuiw1s9amcTC56LMLxxgXWiUDIi7CNCOFtSKDxVy2cuUUN4F21tE701g%2BSy8bKjIMZdn65lag5YOy1Q9txKAUGgmzi%2FxEmLc3B1R4XAkkx6QuSZaYZCjWx%2FdpquFnPN7NNsvk104Cr4fqM6%2B0REVGFZ%2FpomW6W6iVnDmjQjWj5Sak5H6pIopJu24pAfUseWT05YHe3iyxANmGAh79sosoJx5RuigIid2Ev8IFPTM7hwox01rL2ss2DF%2BtQwBQcLf2k1I7ZbuCOJrD4S2HQmtQsRWvKScG2o7mKrNJVJoP9VCK7%2FSLhWAUThWK0tjhmart81IDpXdBzX5goW%2FEcSv%2BToPLtviVCS2FFziMLBJxf%2BBzEFW01iGykoqS8jYpneqOCaovmIhhhIqM5qn%2BEJK9ptRev6AhW2LXzGC%2Bus5GGYzoNwChB3OswxpCEec8eOQFgJrsOzqxH1ofCFhm%2B6e2jD99v3BBjqkAZ5kS0m3LTVd0kYf1m35NHpnJXq3GHUZ5N0EAzpkxqpBCmdJ1dz8h3ISuB6IH1JM%2BYhaJDkvWQHIdhbi0DaXIcY%2B0G4o4%2BYGKiVLm03EFseNg0a9mNyAmU0e4PRkWCpIJouwNIc6y4Jy7fvzng0mFyckupVCmswegX2%2Ba62HYHt3En9nHFaQHeOAZwHyYSwtHK9830LueMpuz%2BdEzpvB4i%2FsGZ1B&X-Amz-Signature=05c5629abd1ffea4d4f2351d3562963fbfdc87389dcbee8046209db3bb5c8ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMMCMZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCr%2FEzIrlUa8PFk009MPux2crHe86SFEgVi%2BFOsLUpsggIhAO4tdIrmL%2FdDuFrvnrysvQPOystEC4O0%2BXjwTklOqslFKv8DCCAQABoMNjM3NDIzMTgzODA1IgynK6AAvOitaSDX3Mcq3ANzNqRvjIkpAgRJqkdaA2d1oqMgDURrC489t2AyjE5aUMDkHy%2FhaOAlEKNOfuUmYcFqqbMyYAkKvW3YX9uPmYAc6URPBVtHlrJPoj5EEPY85ohNRN4UwNYucE2qDyl0ovIInc%2FhtBGk2oL3kstfEr8XdKZMPZ1b2VUEcGM%2Bmuiw1s9amcTC56LMLxxgXWiUDIi7CNCOFtSKDxVy2cuUUN4F21tE701g%2BSy8bKjIMZdn65lag5YOy1Q9txKAUGgmzi%2FxEmLc3B1R4XAkkx6QuSZaYZCjWx%2FdpquFnPN7NNsvk104Cr4fqM6%2B0REVGFZ%2FpomW6W6iVnDmjQjWj5Sak5H6pIopJu24pAfUseWT05YHe3iyxANmGAh79sosoJx5RuigIid2Ev8IFPTM7hwox01rL2ss2DF%2BtQwBQcLf2k1I7ZbuCOJrD4S2HQmtQsRWvKScG2o7mKrNJVJoP9VCK7%2FSLhWAUThWK0tjhmart81IDpXdBzX5goW%2FEcSv%2BToPLtviVCS2FFziMLBJxf%2BBzEFW01iGykoqS8jYpneqOCaovmIhhhIqM5qn%2BEJK9ptRev6AhW2LXzGC%2Bus5GGYzoNwChB3OswxpCEec8eOQFgJrsOzqxH1ofCFhm%2B6e2jD99v3BBjqkAZ5kS0m3LTVd0kYf1m35NHpnJXq3GHUZ5N0EAzpkxqpBCmdJ1dz8h3ISuB6IH1JM%2BYhaJDkvWQHIdhbi0DaXIcY%2B0G4o4%2BYGKiVLm03EFseNg0a9mNyAmU0e4PRkWCpIJouwNIc6y4Jy7fvzng0mFyckupVCmswegX2%2Ba62HYHt3En9nHFaQHeOAZwHyYSwtHK9830LueMpuz%2BdEzpvB4i%2FsGZ1B&X-Amz-Signature=aa84695596f7ce143603410e2c31fee1844c1667081027e552136e3e4e5c0a01&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMMCMZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCr%2FEzIrlUa8PFk009MPux2crHe86SFEgVi%2BFOsLUpsggIhAO4tdIrmL%2FdDuFrvnrysvQPOystEC4O0%2BXjwTklOqslFKv8DCCAQABoMNjM3NDIzMTgzODA1IgynK6AAvOitaSDX3Mcq3ANzNqRvjIkpAgRJqkdaA2d1oqMgDURrC489t2AyjE5aUMDkHy%2FhaOAlEKNOfuUmYcFqqbMyYAkKvW3YX9uPmYAc6URPBVtHlrJPoj5EEPY85ohNRN4UwNYucE2qDyl0ovIInc%2FhtBGk2oL3kstfEr8XdKZMPZ1b2VUEcGM%2Bmuiw1s9amcTC56LMLxxgXWiUDIi7CNCOFtSKDxVy2cuUUN4F21tE701g%2BSy8bKjIMZdn65lag5YOy1Q9txKAUGgmzi%2FxEmLc3B1R4XAkkx6QuSZaYZCjWx%2FdpquFnPN7NNsvk104Cr4fqM6%2B0REVGFZ%2FpomW6W6iVnDmjQjWj5Sak5H6pIopJu24pAfUseWT05YHe3iyxANmGAh79sosoJx5RuigIid2Ev8IFPTM7hwox01rL2ss2DF%2BtQwBQcLf2k1I7ZbuCOJrD4S2HQmtQsRWvKScG2o7mKrNJVJoP9VCK7%2FSLhWAUThWK0tjhmart81IDpXdBzX5goW%2FEcSv%2BToPLtviVCS2FFziMLBJxf%2BBzEFW01iGykoqS8jYpneqOCaovmIhhhIqM5qn%2BEJK9ptRev6AhW2LXzGC%2Bus5GGYzoNwChB3OswxpCEec8eOQFgJrsOzqxH1ofCFhm%2B6e2jD99v3BBjqkAZ5kS0m3LTVd0kYf1m35NHpnJXq3GHUZ5N0EAzpkxqpBCmdJ1dz8h3ISuB6IH1JM%2BYhaJDkvWQHIdhbi0DaXIcY%2B0G4o4%2BYGKiVLm03EFseNg0a9mNyAmU0e4PRkWCpIJouwNIc6y4Jy7fvzng0mFyckupVCmswegX2%2Ba62HYHt3En9nHFaQHeOAZwHyYSwtHK9830LueMpuz%2BdEzpvB4i%2FsGZ1B&X-Amz-Signature=b15592697cb99ee5881c267baabd300c29fbb7fd427dff2702529d243cbe858b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

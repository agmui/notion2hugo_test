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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWTDP7G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIFsWKSRAAg3bFHpwASQ7FP%2FfmcVYOiqtISL9HMJQr3XZAiEAqyy4Is%2FJk7o11AT1j%2FyExwMB3ZueKIS6GqFU7eQYNnAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDyxjMTI9YtXpohUXCrcA1uFqasjO6jCTQoqAZakWz8L8UlH7uPBvR2Ld8dIAZUyNXFBxTd7CxtQEp%2BU56YShVp%2FUiI9VjwXYIus1BpXPRklmCyKISO2hJg3vs9IZ98NoR5Ix%2B0Ui0Qg63n%2FMKWJ%2BOVRBrfNfP3RQrkseGHn8NkLp7pLvxI6T6pbMP1aO7S7bGvBhmj2mcH8bR3sxWwr7SHRPRL61kdCf7SUzxoBztp7CMWZZXmLa3uWy%2FzekLVVAGej7%2FMSiLsnPXyyic5pXLYslfDKTbxSHK6jOb4kR9pP68RNij1e72Y9amsNi907PDwTI3o7bcqlsHfs07ENaJUz0G73UDQ8HvAm7GJHeJ8jtw30IgMYPO4VNtfJ9PerdXoy5066q%2BjeGT38%2B4sG5vKljwQe24vAysyGKRUvGhYEaQjxx5UlJc%2BVyk%2FV0GArja6mLrtetUgIKH9C0sUJ55cI8W4e4%2F319%2BPivk%2BkNAcW6D59Ewz%2BwebA9r5D0WrwSPzKNbh1qdCzxdzZT01TWp4Ik8Jt908T%2FfWRh8ka46cQZOJNwzRP0UE38I4CeGnUkeB4mF3qNfrs6kD%2BuAkbHD1T6boXG0tS3cVVrjlGxn1auwwONTNvvY6hDDEOhKz1tyrpMawf0IIm%2F8ApMO3ynsMGOqUBkQgWb%2Bx3MkKeBrtKE15VoUaqyxG%2Bd0Epay2VSqMuYrikqdjA7KIce4j1wZDtmVLIb13S0hszWKtWPaSQJH8W6pXODVGvLYdfwKw9so5Iu3z9nyScy4FMkxHRn4ENByLvW7PdWDk61qZCNRjeKIq1LuSPJuhFs8Mj10LoYzMcWAUBOP%2BBvsSQ38aQSapSVW3FVKe3tAiVGdLF8u5EtztfNUVdIOlN&X-Amz-Signature=2593dc5c2c01a276f951adb1e2e8f194341c35ee6dfa18a00eaaca08414af00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWTDP7G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIFsWKSRAAg3bFHpwASQ7FP%2FfmcVYOiqtISL9HMJQr3XZAiEAqyy4Is%2FJk7o11AT1j%2FyExwMB3ZueKIS6GqFU7eQYNnAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDyxjMTI9YtXpohUXCrcA1uFqasjO6jCTQoqAZakWz8L8UlH7uPBvR2Ld8dIAZUyNXFBxTd7CxtQEp%2BU56YShVp%2FUiI9VjwXYIus1BpXPRklmCyKISO2hJg3vs9IZ98NoR5Ix%2B0Ui0Qg63n%2FMKWJ%2BOVRBrfNfP3RQrkseGHn8NkLp7pLvxI6T6pbMP1aO7S7bGvBhmj2mcH8bR3sxWwr7SHRPRL61kdCf7SUzxoBztp7CMWZZXmLa3uWy%2FzekLVVAGej7%2FMSiLsnPXyyic5pXLYslfDKTbxSHK6jOb4kR9pP68RNij1e72Y9amsNi907PDwTI3o7bcqlsHfs07ENaJUz0G73UDQ8HvAm7GJHeJ8jtw30IgMYPO4VNtfJ9PerdXoy5066q%2BjeGT38%2B4sG5vKljwQe24vAysyGKRUvGhYEaQjxx5UlJc%2BVyk%2FV0GArja6mLrtetUgIKH9C0sUJ55cI8W4e4%2F319%2BPivk%2BkNAcW6D59Ewz%2BwebA9r5D0WrwSPzKNbh1qdCzxdzZT01TWp4Ik8Jt908T%2FfWRh8ka46cQZOJNwzRP0UE38I4CeGnUkeB4mF3qNfrs6kD%2BuAkbHD1T6boXG0tS3cVVrjlGxn1auwwONTNvvY6hDDEOhKz1tyrpMawf0IIm%2F8ApMO3ynsMGOqUBkQgWb%2Bx3MkKeBrtKE15VoUaqyxG%2Bd0Epay2VSqMuYrikqdjA7KIce4j1wZDtmVLIb13S0hszWKtWPaSQJH8W6pXODVGvLYdfwKw9so5Iu3z9nyScy4FMkxHRn4ENByLvW7PdWDk61qZCNRjeKIq1LuSPJuhFs8Mj10LoYzMcWAUBOP%2BBvsSQ38aQSapSVW3FVKe3tAiVGdLF8u5EtztfNUVdIOlN&X-Amz-Signature=54e2a4c9ac7ca163d523fef3195727965489887464cddbb2e56811aa15e09e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWTDP7G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIFsWKSRAAg3bFHpwASQ7FP%2FfmcVYOiqtISL9HMJQr3XZAiEAqyy4Is%2FJk7o11AT1j%2FyExwMB3ZueKIS6GqFU7eQYNnAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDyxjMTI9YtXpohUXCrcA1uFqasjO6jCTQoqAZakWz8L8UlH7uPBvR2Ld8dIAZUyNXFBxTd7CxtQEp%2BU56YShVp%2FUiI9VjwXYIus1BpXPRklmCyKISO2hJg3vs9IZ98NoR5Ix%2B0Ui0Qg63n%2FMKWJ%2BOVRBrfNfP3RQrkseGHn8NkLp7pLvxI6T6pbMP1aO7S7bGvBhmj2mcH8bR3sxWwr7SHRPRL61kdCf7SUzxoBztp7CMWZZXmLa3uWy%2FzekLVVAGej7%2FMSiLsnPXyyic5pXLYslfDKTbxSHK6jOb4kR9pP68RNij1e72Y9amsNi907PDwTI3o7bcqlsHfs07ENaJUz0G73UDQ8HvAm7GJHeJ8jtw30IgMYPO4VNtfJ9PerdXoy5066q%2BjeGT38%2B4sG5vKljwQe24vAysyGKRUvGhYEaQjxx5UlJc%2BVyk%2FV0GArja6mLrtetUgIKH9C0sUJ55cI8W4e4%2F319%2BPivk%2BkNAcW6D59Ewz%2BwebA9r5D0WrwSPzKNbh1qdCzxdzZT01TWp4Ik8Jt908T%2FfWRh8ka46cQZOJNwzRP0UE38I4CeGnUkeB4mF3qNfrs6kD%2BuAkbHD1T6boXG0tS3cVVrjlGxn1auwwONTNvvY6hDDEOhKz1tyrpMawf0IIm%2F8ApMO3ynsMGOqUBkQgWb%2Bx3MkKeBrtKE15VoUaqyxG%2Bd0Epay2VSqMuYrikqdjA7KIce4j1wZDtmVLIb13S0hszWKtWPaSQJH8W6pXODVGvLYdfwKw9so5Iu3z9nyScy4FMkxHRn4ENByLvW7PdWDk61qZCNRjeKIq1LuSPJuhFs8Mj10LoYzMcWAUBOP%2BBvsSQ38aQSapSVW3FVKe3tAiVGdLF8u5EtztfNUVdIOlN&X-Amz-Signature=3c447c91d7ec60688ce37ec6fd5d9cef3feafbf64a493e05b486b31f73dddfab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWTDP7G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIFsWKSRAAg3bFHpwASQ7FP%2FfmcVYOiqtISL9HMJQr3XZAiEAqyy4Is%2FJk7o11AT1j%2FyExwMB3ZueKIS6GqFU7eQYNnAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDyxjMTI9YtXpohUXCrcA1uFqasjO6jCTQoqAZakWz8L8UlH7uPBvR2Ld8dIAZUyNXFBxTd7CxtQEp%2BU56YShVp%2FUiI9VjwXYIus1BpXPRklmCyKISO2hJg3vs9IZ98NoR5Ix%2B0Ui0Qg63n%2FMKWJ%2BOVRBrfNfP3RQrkseGHn8NkLp7pLvxI6T6pbMP1aO7S7bGvBhmj2mcH8bR3sxWwr7SHRPRL61kdCf7SUzxoBztp7CMWZZXmLa3uWy%2FzekLVVAGej7%2FMSiLsnPXyyic5pXLYslfDKTbxSHK6jOb4kR9pP68RNij1e72Y9amsNi907PDwTI3o7bcqlsHfs07ENaJUz0G73UDQ8HvAm7GJHeJ8jtw30IgMYPO4VNtfJ9PerdXoy5066q%2BjeGT38%2B4sG5vKljwQe24vAysyGKRUvGhYEaQjxx5UlJc%2BVyk%2FV0GArja6mLrtetUgIKH9C0sUJ55cI8W4e4%2F319%2BPivk%2BkNAcW6D59Ewz%2BwebA9r5D0WrwSPzKNbh1qdCzxdzZT01TWp4Ik8Jt908T%2FfWRh8ka46cQZOJNwzRP0UE38I4CeGnUkeB4mF3qNfrs6kD%2BuAkbHD1T6boXG0tS3cVVrjlGxn1auwwONTNvvY6hDDEOhKz1tyrpMawf0IIm%2F8ApMO3ynsMGOqUBkQgWb%2Bx3MkKeBrtKE15VoUaqyxG%2Bd0Epay2VSqMuYrikqdjA7KIce4j1wZDtmVLIb13S0hszWKtWPaSQJH8W6pXODVGvLYdfwKw9so5Iu3z9nyScy4FMkxHRn4ENByLvW7PdWDk61qZCNRjeKIq1LuSPJuhFs8Mj10LoYzMcWAUBOP%2BBvsSQ38aQSapSVW3FVKe3tAiVGdLF8u5EtztfNUVdIOlN&X-Amz-Signature=8631f01ef85ccf9656a46fa1be66a8fd78402155009db2ab3ae5648173fe8776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWTDP7G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIFsWKSRAAg3bFHpwASQ7FP%2FfmcVYOiqtISL9HMJQr3XZAiEAqyy4Is%2FJk7o11AT1j%2FyExwMB3ZueKIS6GqFU7eQYNnAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDyxjMTI9YtXpohUXCrcA1uFqasjO6jCTQoqAZakWz8L8UlH7uPBvR2Ld8dIAZUyNXFBxTd7CxtQEp%2BU56YShVp%2FUiI9VjwXYIus1BpXPRklmCyKISO2hJg3vs9IZ98NoR5Ix%2B0Ui0Qg63n%2FMKWJ%2BOVRBrfNfP3RQrkseGHn8NkLp7pLvxI6T6pbMP1aO7S7bGvBhmj2mcH8bR3sxWwr7SHRPRL61kdCf7SUzxoBztp7CMWZZXmLa3uWy%2FzekLVVAGej7%2FMSiLsnPXyyic5pXLYslfDKTbxSHK6jOb4kR9pP68RNij1e72Y9amsNi907PDwTI3o7bcqlsHfs07ENaJUz0G73UDQ8HvAm7GJHeJ8jtw30IgMYPO4VNtfJ9PerdXoy5066q%2BjeGT38%2B4sG5vKljwQe24vAysyGKRUvGhYEaQjxx5UlJc%2BVyk%2FV0GArja6mLrtetUgIKH9C0sUJ55cI8W4e4%2F319%2BPivk%2BkNAcW6D59Ewz%2BwebA9r5D0WrwSPzKNbh1qdCzxdzZT01TWp4Ik8Jt908T%2FfWRh8ka46cQZOJNwzRP0UE38I4CeGnUkeB4mF3qNfrs6kD%2BuAkbHD1T6boXG0tS3cVVrjlGxn1auwwONTNvvY6hDDEOhKz1tyrpMawf0IIm%2F8ApMO3ynsMGOqUBkQgWb%2Bx3MkKeBrtKE15VoUaqyxG%2Bd0Epay2VSqMuYrikqdjA7KIce4j1wZDtmVLIb13S0hszWKtWPaSQJH8W6pXODVGvLYdfwKw9so5Iu3z9nyScy4FMkxHRn4ENByLvW7PdWDk61qZCNRjeKIq1LuSPJuhFs8Mj10LoYzMcWAUBOP%2BBvsSQ38aQSapSVW3FVKe3tAiVGdLF8u5EtztfNUVdIOlN&X-Amz-Signature=97540495564cd388f2b17e39d38165da32eaeb159a98efb5a4c3c3701c3de07f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWTDP7G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIFsWKSRAAg3bFHpwASQ7FP%2FfmcVYOiqtISL9HMJQr3XZAiEAqyy4Is%2FJk7o11AT1j%2FyExwMB3ZueKIS6GqFU7eQYNnAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDyxjMTI9YtXpohUXCrcA1uFqasjO6jCTQoqAZakWz8L8UlH7uPBvR2Ld8dIAZUyNXFBxTd7CxtQEp%2BU56YShVp%2FUiI9VjwXYIus1BpXPRklmCyKISO2hJg3vs9IZ98NoR5Ix%2B0Ui0Qg63n%2FMKWJ%2BOVRBrfNfP3RQrkseGHn8NkLp7pLvxI6T6pbMP1aO7S7bGvBhmj2mcH8bR3sxWwr7SHRPRL61kdCf7SUzxoBztp7CMWZZXmLa3uWy%2FzekLVVAGej7%2FMSiLsnPXyyic5pXLYslfDKTbxSHK6jOb4kR9pP68RNij1e72Y9amsNi907PDwTI3o7bcqlsHfs07ENaJUz0G73UDQ8HvAm7GJHeJ8jtw30IgMYPO4VNtfJ9PerdXoy5066q%2BjeGT38%2B4sG5vKljwQe24vAysyGKRUvGhYEaQjxx5UlJc%2BVyk%2FV0GArja6mLrtetUgIKH9C0sUJ55cI8W4e4%2F319%2BPivk%2BkNAcW6D59Ewz%2BwebA9r5D0WrwSPzKNbh1qdCzxdzZT01TWp4Ik8Jt908T%2FfWRh8ka46cQZOJNwzRP0UE38I4CeGnUkeB4mF3qNfrs6kD%2BuAkbHD1T6boXG0tS3cVVrjlGxn1auwwONTNvvY6hDDEOhKz1tyrpMawf0IIm%2F8ApMO3ynsMGOqUBkQgWb%2Bx3MkKeBrtKE15VoUaqyxG%2Bd0Epay2VSqMuYrikqdjA7KIce4j1wZDtmVLIb13S0hszWKtWPaSQJH8W6pXODVGvLYdfwKw9so5Iu3z9nyScy4FMkxHRn4ENByLvW7PdWDk61qZCNRjeKIq1LuSPJuhFs8Mj10LoYzMcWAUBOP%2BBvsSQ38aQSapSVW3FVKe3tAiVGdLF8u5EtztfNUVdIOlN&X-Amz-Signature=a1a6306266ebf1ba9eb398c435d9d83ce369f1da2ebf439360d3acdd536bf041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWTDP7G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIFsWKSRAAg3bFHpwASQ7FP%2FfmcVYOiqtISL9HMJQr3XZAiEAqyy4Is%2FJk7o11AT1j%2FyExwMB3ZueKIS6GqFU7eQYNnAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDyxjMTI9YtXpohUXCrcA1uFqasjO6jCTQoqAZakWz8L8UlH7uPBvR2Ld8dIAZUyNXFBxTd7CxtQEp%2BU56YShVp%2FUiI9VjwXYIus1BpXPRklmCyKISO2hJg3vs9IZ98NoR5Ix%2B0Ui0Qg63n%2FMKWJ%2BOVRBrfNfP3RQrkseGHn8NkLp7pLvxI6T6pbMP1aO7S7bGvBhmj2mcH8bR3sxWwr7SHRPRL61kdCf7SUzxoBztp7CMWZZXmLa3uWy%2FzekLVVAGej7%2FMSiLsnPXyyic5pXLYslfDKTbxSHK6jOb4kR9pP68RNij1e72Y9amsNi907PDwTI3o7bcqlsHfs07ENaJUz0G73UDQ8HvAm7GJHeJ8jtw30IgMYPO4VNtfJ9PerdXoy5066q%2BjeGT38%2B4sG5vKljwQe24vAysyGKRUvGhYEaQjxx5UlJc%2BVyk%2FV0GArja6mLrtetUgIKH9C0sUJ55cI8W4e4%2F319%2BPivk%2BkNAcW6D59Ewz%2BwebA9r5D0WrwSPzKNbh1qdCzxdzZT01TWp4Ik8Jt908T%2FfWRh8ka46cQZOJNwzRP0UE38I4CeGnUkeB4mF3qNfrs6kD%2BuAkbHD1T6boXG0tS3cVVrjlGxn1auwwONTNvvY6hDDEOhKz1tyrpMawf0IIm%2F8ApMO3ynsMGOqUBkQgWb%2Bx3MkKeBrtKE15VoUaqyxG%2Bd0Epay2VSqMuYrikqdjA7KIce4j1wZDtmVLIb13S0hszWKtWPaSQJH8W6pXODVGvLYdfwKw9so5Iu3z9nyScy4FMkxHRn4ENByLvW7PdWDk61qZCNRjeKIq1LuSPJuhFs8Mj10LoYzMcWAUBOP%2BBvsSQ38aQSapSVW3FVKe3tAiVGdLF8u5EtztfNUVdIOlN&X-Amz-Signature=c76361d397bd705263df77b836ad697d7f216018b84ed8eafb0617da7d0f3a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

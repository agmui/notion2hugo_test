---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNZFV2BK%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9F2X9qmc2GTw6PrjXMhTm6BrONTF4TsQJRcoTiQJsoQIhAOv9uSlqHUmMvE71cCm0o9%2FuPuKvvCifO0ekRdRJ09zMKv8DCCMQABoMNjM3NDIzMTgzODA1IgwxSc3RyK8AXqgoNIQq3AM3PB1MNySYBmIzwZmMXNbazWf5OJb2bV42HQ7KCA8tMn9Q67fIf5XWe%2B1MnCHvccdBBiNnhHRbqScH3F3M902p4dmoIEPTgyRivXmaRP30dvmSMmruUbMiM2Zqh%2BdlWAFTShu%2Bz7uoC2slSU1L0%2FABviY42pbtsXAFHQWvf6b8dD%2FztAE5znV%2B4HTG3u6yewV1F4k23t4Glc%2FSFU1KHo9MUcypobgYDctY0lnX2JMJrhhXEb2MtZyVxi7GGU8DFPdgk4j%2FAFB7ORlxyPpjRC9BeGfFSAHAV5tFBWUctZD2iHpPrXlHrpROQyHlqb477wJwYGG9w35kiOAp%2FKB8PzDtDoFn677%2BFkwiKOvhulTW0pA5EyQIhWC3ts7%2BM54wVgL%2F%2BygzX0j4qmAqH2T%2Flkxv0sVfo1XZyetdVg8LHWbuYonCFFR3JhoqyyWYMyv0FEKKd3Hj%2FNNyHmHYbniHkUZhgulLeLqdhbJyIoKC18UIh6%2FEOQ1WMNZ27yphUu5K4aCSwfyvkSHRNpvdpka2aXWqXX6m3%2F6Zt3P5fFjgW1hE%2BLkkoSB5Swp6ks%2FdzD5bcCaMp6Pccmt1BBCZ1puXN83km7jFOedNN6kn4%2FTj0dYEREF1xT6e%2FrXf0CGKyTDK%2FLLRBjqkAZK%2Bnas%2BxCwMaMUeOTZpWoQuREWc4iw1PGKfNx5LKTp8V0sVGNDiwuQWZ5cZvWtTz%2F9cnFeSPBH1zgAMWy7YE%2BLdAb8thbi8hdZZKso0s2dbxBX1Rz5YpMOfaLmGFTpKrmFeS%2BdJ2IcqchD0RhX%2BiwFJoq5i0fkAXt9QPzhuq04VhPbkQ7%2B3k%2BvmpiaqEVpIaGPFdKa3cGkFtW%2FVWkqcE2VxgYp3&X-Amz-Signature=957b730cd9cb53f7550b0ad43b12822936f60efc582c4b33d1de7e2d48663fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNZFV2BK%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9F2X9qmc2GTw6PrjXMhTm6BrONTF4TsQJRcoTiQJsoQIhAOv9uSlqHUmMvE71cCm0o9%2FuPuKvvCifO0ekRdRJ09zMKv8DCCMQABoMNjM3NDIzMTgzODA1IgwxSc3RyK8AXqgoNIQq3AM3PB1MNySYBmIzwZmMXNbazWf5OJb2bV42HQ7KCA8tMn9Q67fIf5XWe%2B1MnCHvccdBBiNnhHRbqScH3F3M902p4dmoIEPTgyRivXmaRP30dvmSMmruUbMiM2Zqh%2BdlWAFTShu%2Bz7uoC2slSU1L0%2FABviY42pbtsXAFHQWvf6b8dD%2FztAE5znV%2B4HTG3u6yewV1F4k23t4Glc%2FSFU1KHo9MUcypobgYDctY0lnX2JMJrhhXEb2MtZyVxi7GGU8DFPdgk4j%2FAFB7ORlxyPpjRC9BeGfFSAHAV5tFBWUctZD2iHpPrXlHrpROQyHlqb477wJwYGG9w35kiOAp%2FKB8PzDtDoFn677%2BFkwiKOvhulTW0pA5EyQIhWC3ts7%2BM54wVgL%2F%2BygzX0j4qmAqH2T%2Flkxv0sVfo1XZyetdVg8LHWbuYonCFFR3JhoqyyWYMyv0FEKKd3Hj%2FNNyHmHYbniHkUZhgulLeLqdhbJyIoKC18UIh6%2FEOQ1WMNZ27yphUu5K4aCSwfyvkSHRNpvdpka2aXWqXX6m3%2F6Zt3P5fFjgW1hE%2BLkkoSB5Swp6ks%2FdzD5bcCaMp6Pccmt1BBCZ1puXN83km7jFOedNN6kn4%2FTj0dYEREF1xT6e%2FrXf0CGKyTDK%2FLLRBjqkAZK%2Bnas%2BxCwMaMUeOTZpWoQuREWc4iw1PGKfNx5LKTp8V0sVGNDiwuQWZ5cZvWtTz%2F9cnFeSPBH1zgAMWy7YE%2BLdAb8thbi8hdZZKso0s2dbxBX1Rz5YpMOfaLmGFTpKrmFeS%2BdJ2IcqchD0RhX%2BiwFJoq5i0fkAXt9QPzhuq04VhPbkQ7%2B3k%2BvmpiaqEVpIaGPFdKa3cGkFtW%2FVWkqcE2VxgYp3&X-Amz-Signature=6b3cf756753a7f7eb02e65d06330b058c60911c8291c04a670cfc6aa06eaac4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNZFV2BK%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9F2X9qmc2GTw6PrjXMhTm6BrONTF4TsQJRcoTiQJsoQIhAOv9uSlqHUmMvE71cCm0o9%2FuPuKvvCifO0ekRdRJ09zMKv8DCCMQABoMNjM3NDIzMTgzODA1IgwxSc3RyK8AXqgoNIQq3AM3PB1MNySYBmIzwZmMXNbazWf5OJb2bV42HQ7KCA8tMn9Q67fIf5XWe%2B1MnCHvccdBBiNnhHRbqScH3F3M902p4dmoIEPTgyRivXmaRP30dvmSMmruUbMiM2Zqh%2BdlWAFTShu%2Bz7uoC2slSU1L0%2FABviY42pbtsXAFHQWvf6b8dD%2FztAE5znV%2B4HTG3u6yewV1F4k23t4Glc%2FSFU1KHo9MUcypobgYDctY0lnX2JMJrhhXEb2MtZyVxi7GGU8DFPdgk4j%2FAFB7ORlxyPpjRC9BeGfFSAHAV5tFBWUctZD2iHpPrXlHrpROQyHlqb477wJwYGG9w35kiOAp%2FKB8PzDtDoFn677%2BFkwiKOvhulTW0pA5EyQIhWC3ts7%2BM54wVgL%2F%2BygzX0j4qmAqH2T%2Flkxv0sVfo1XZyetdVg8LHWbuYonCFFR3JhoqyyWYMyv0FEKKd3Hj%2FNNyHmHYbniHkUZhgulLeLqdhbJyIoKC18UIh6%2FEOQ1WMNZ27yphUu5K4aCSwfyvkSHRNpvdpka2aXWqXX6m3%2F6Zt3P5fFjgW1hE%2BLkkoSB5Swp6ks%2FdzD5bcCaMp6Pccmt1BBCZ1puXN83km7jFOedNN6kn4%2FTj0dYEREF1xT6e%2FrXf0CGKyTDK%2FLLRBjqkAZK%2Bnas%2BxCwMaMUeOTZpWoQuREWc4iw1PGKfNx5LKTp8V0sVGNDiwuQWZ5cZvWtTz%2F9cnFeSPBH1zgAMWy7YE%2BLdAb8thbi8hdZZKso0s2dbxBX1Rz5YpMOfaLmGFTpKrmFeS%2BdJ2IcqchD0RhX%2BiwFJoq5i0fkAXt9QPzhuq04VhPbkQ7%2B3k%2BvmpiaqEVpIaGPFdKa3cGkFtW%2FVWkqcE2VxgYp3&X-Amz-Signature=a8d8328d07ac08d6a734faaf5664aa0c9b0bd804eb6db8b0acc47cf43e14da55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNZFV2BK%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9F2X9qmc2GTw6PrjXMhTm6BrONTF4TsQJRcoTiQJsoQIhAOv9uSlqHUmMvE71cCm0o9%2FuPuKvvCifO0ekRdRJ09zMKv8DCCMQABoMNjM3NDIzMTgzODA1IgwxSc3RyK8AXqgoNIQq3AM3PB1MNySYBmIzwZmMXNbazWf5OJb2bV42HQ7KCA8tMn9Q67fIf5XWe%2B1MnCHvccdBBiNnhHRbqScH3F3M902p4dmoIEPTgyRivXmaRP30dvmSMmruUbMiM2Zqh%2BdlWAFTShu%2Bz7uoC2slSU1L0%2FABviY42pbtsXAFHQWvf6b8dD%2FztAE5znV%2B4HTG3u6yewV1F4k23t4Glc%2FSFU1KHo9MUcypobgYDctY0lnX2JMJrhhXEb2MtZyVxi7GGU8DFPdgk4j%2FAFB7ORlxyPpjRC9BeGfFSAHAV5tFBWUctZD2iHpPrXlHrpROQyHlqb477wJwYGG9w35kiOAp%2FKB8PzDtDoFn677%2BFkwiKOvhulTW0pA5EyQIhWC3ts7%2BM54wVgL%2F%2BygzX0j4qmAqH2T%2Flkxv0sVfo1XZyetdVg8LHWbuYonCFFR3JhoqyyWYMyv0FEKKd3Hj%2FNNyHmHYbniHkUZhgulLeLqdhbJyIoKC18UIh6%2FEOQ1WMNZ27yphUu5K4aCSwfyvkSHRNpvdpka2aXWqXX6m3%2F6Zt3P5fFjgW1hE%2BLkkoSB5Swp6ks%2FdzD5bcCaMp6Pccmt1BBCZ1puXN83km7jFOedNN6kn4%2FTj0dYEREF1xT6e%2FrXf0CGKyTDK%2FLLRBjqkAZK%2Bnas%2BxCwMaMUeOTZpWoQuREWc4iw1PGKfNx5LKTp8V0sVGNDiwuQWZ5cZvWtTz%2F9cnFeSPBH1zgAMWy7YE%2BLdAb8thbi8hdZZKso0s2dbxBX1Rz5YpMOfaLmGFTpKrmFeS%2BdJ2IcqchD0RhX%2BiwFJoq5i0fkAXt9QPzhuq04VhPbkQ7%2B3k%2BvmpiaqEVpIaGPFdKa3cGkFtW%2FVWkqcE2VxgYp3&X-Amz-Signature=f5ebc8d2e7f4166344d6076f8c5ee932725426af9370419959723208f2b84485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNZFV2BK%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9F2X9qmc2GTw6PrjXMhTm6BrONTF4TsQJRcoTiQJsoQIhAOv9uSlqHUmMvE71cCm0o9%2FuPuKvvCifO0ekRdRJ09zMKv8DCCMQABoMNjM3NDIzMTgzODA1IgwxSc3RyK8AXqgoNIQq3AM3PB1MNySYBmIzwZmMXNbazWf5OJb2bV42HQ7KCA8tMn9Q67fIf5XWe%2B1MnCHvccdBBiNnhHRbqScH3F3M902p4dmoIEPTgyRivXmaRP30dvmSMmruUbMiM2Zqh%2BdlWAFTShu%2Bz7uoC2slSU1L0%2FABviY42pbtsXAFHQWvf6b8dD%2FztAE5znV%2B4HTG3u6yewV1F4k23t4Glc%2FSFU1KHo9MUcypobgYDctY0lnX2JMJrhhXEb2MtZyVxi7GGU8DFPdgk4j%2FAFB7ORlxyPpjRC9BeGfFSAHAV5tFBWUctZD2iHpPrXlHrpROQyHlqb477wJwYGG9w35kiOAp%2FKB8PzDtDoFn677%2BFkwiKOvhulTW0pA5EyQIhWC3ts7%2BM54wVgL%2F%2BygzX0j4qmAqH2T%2Flkxv0sVfo1XZyetdVg8LHWbuYonCFFR3JhoqyyWYMyv0FEKKd3Hj%2FNNyHmHYbniHkUZhgulLeLqdhbJyIoKC18UIh6%2FEOQ1WMNZ27yphUu5K4aCSwfyvkSHRNpvdpka2aXWqXX6m3%2F6Zt3P5fFjgW1hE%2BLkkoSB5Swp6ks%2FdzD5bcCaMp6Pccmt1BBCZ1puXN83km7jFOedNN6kn4%2FTj0dYEREF1xT6e%2FrXf0CGKyTDK%2FLLRBjqkAZK%2Bnas%2BxCwMaMUeOTZpWoQuREWc4iw1PGKfNx5LKTp8V0sVGNDiwuQWZ5cZvWtTz%2F9cnFeSPBH1zgAMWy7YE%2BLdAb8thbi8hdZZKso0s2dbxBX1Rz5YpMOfaLmGFTpKrmFeS%2BdJ2IcqchD0RhX%2BiwFJoq5i0fkAXt9QPzhuq04VhPbkQ7%2B3k%2BvmpiaqEVpIaGPFdKa3cGkFtW%2FVWkqcE2VxgYp3&X-Amz-Signature=7586048bd7d8e7dde618c40c99ac8881d7aac33e0a27668c969a42f0365d02a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNZFV2BK%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9F2X9qmc2GTw6PrjXMhTm6BrONTF4TsQJRcoTiQJsoQIhAOv9uSlqHUmMvE71cCm0o9%2FuPuKvvCifO0ekRdRJ09zMKv8DCCMQABoMNjM3NDIzMTgzODA1IgwxSc3RyK8AXqgoNIQq3AM3PB1MNySYBmIzwZmMXNbazWf5OJb2bV42HQ7KCA8tMn9Q67fIf5XWe%2B1MnCHvccdBBiNnhHRbqScH3F3M902p4dmoIEPTgyRivXmaRP30dvmSMmruUbMiM2Zqh%2BdlWAFTShu%2Bz7uoC2slSU1L0%2FABviY42pbtsXAFHQWvf6b8dD%2FztAE5znV%2B4HTG3u6yewV1F4k23t4Glc%2FSFU1KHo9MUcypobgYDctY0lnX2JMJrhhXEb2MtZyVxi7GGU8DFPdgk4j%2FAFB7ORlxyPpjRC9BeGfFSAHAV5tFBWUctZD2iHpPrXlHrpROQyHlqb477wJwYGG9w35kiOAp%2FKB8PzDtDoFn677%2BFkwiKOvhulTW0pA5EyQIhWC3ts7%2BM54wVgL%2F%2BygzX0j4qmAqH2T%2Flkxv0sVfo1XZyetdVg8LHWbuYonCFFR3JhoqyyWYMyv0FEKKd3Hj%2FNNyHmHYbniHkUZhgulLeLqdhbJyIoKC18UIh6%2FEOQ1WMNZ27yphUu5K4aCSwfyvkSHRNpvdpka2aXWqXX6m3%2F6Zt3P5fFjgW1hE%2BLkkoSB5Swp6ks%2FdzD5bcCaMp6Pccmt1BBCZ1puXN83km7jFOedNN6kn4%2FTj0dYEREF1xT6e%2FrXf0CGKyTDK%2FLLRBjqkAZK%2Bnas%2BxCwMaMUeOTZpWoQuREWc4iw1PGKfNx5LKTp8V0sVGNDiwuQWZ5cZvWtTz%2F9cnFeSPBH1zgAMWy7YE%2BLdAb8thbi8hdZZKso0s2dbxBX1Rz5YpMOfaLmGFTpKrmFeS%2BdJ2IcqchD0RhX%2BiwFJoq5i0fkAXt9QPzhuq04VhPbkQ7%2B3k%2BvmpiaqEVpIaGPFdKa3cGkFtW%2FVWkqcE2VxgYp3&X-Amz-Signature=4e5d834b6de2017ddb9a2f163e71b288cedf8505f064491af137500e10e810c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNZFV2BK%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9F2X9qmc2GTw6PrjXMhTm6BrONTF4TsQJRcoTiQJsoQIhAOv9uSlqHUmMvE71cCm0o9%2FuPuKvvCifO0ekRdRJ09zMKv8DCCMQABoMNjM3NDIzMTgzODA1IgwxSc3RyK8AXqgoNIQq3AM3PB1MNySYBmIzwZmMXNbazWf5OJb2bV42HQ7KCA8tMn9Q67fIf5XWe%2B1MnCHvccdBBiNnhHRbqScH3F3M902p4dmoIEPTgyRivXmaRP30dvmSMmruUbMiM2Zqh%2BdlWAFTShu%2Bz7uoC2slSU1L0%2FABviY42pbtsXAFHQWvf6b8dD%2FztAE5znV%2B4HTG3u6yewV1F4k23t4Glc%2FSFU1KHo9MUcypobgYDctY0lnX2JMJrhhXEb2MtZyVxi7GGU8DFPdgk4j%2FAFB7ORlxyPpjRC9BeGfFSAHAV5tFBWUctZD2iHpPrXlHrpROQyHlqb477wJwYGG9w35kiOAp%2FKB8PzDtDoFn677%2BFkwiKOvhulTW0pA5EyQIhWC3ts7%2BM54wVgL%2F%2BygzX0j4qmAqH2T%2Flkxv0sVfo1XZyetdVg8LHWbuYonCFFR3JhoqyyWYMyv0FEKKd3Hj%2FNNyHmHYbniHkUZhgulLeLqdhbJyIoKC18UIh6%2FEOQ1WMNZ27yphUu5K4aCSwfyvkSHRNpvdpka2aXWqXX6m3%2F6Zt3P5fFjgW1hE%2BLkkoSB5Swp6ks%2FdzD5bcCaMp6Pccmt1BBCZ1puXN83km7jFOedNN6kn4%2FTj0dYEREF1xT6e%2FrXf0CGKyTDK%2FLLRBjqkAZK%2Bnas%2BxCwMaMUeOTZpWoQuREWc4iw1PGKfNx5LKTp8V0sVGNDiwuQWZ5cZvWtTz%2F9cnFeSPBH1zgAMWy7YE%2BLdAb8thbi8hdZZKso0s2dbxBX1Rz5YpMOfaLmGFTpKrmFeS%2BdJ2IcqchD0RhX%2BiwFJoq5i0fkAXt9QPzhuq04VhPbkQ7%2B3k%2BvmpiaqEVpIaGPFdKa3cGkFtW%2FVWkqcE2VxgYp3&X-Amz-Signature=8e96e139786deb976855ecd3d227300d83cbb154fe8b56499b03ba419ed3315a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

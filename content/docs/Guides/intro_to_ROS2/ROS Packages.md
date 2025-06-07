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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3H2L5Y%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAG3i7BBNb0QiEYODShxbDhgIL2Dv%2FWIbHsFL9dFMOkAiEA9HB3doY6EtxKh38mTMt1Kru3N3dGO2tjQ%2BbS%2BCPpOVIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA6oUFMoZFdueNx8mSrcA0QESrGRUcXIhHeXo2odiUhsgKtohOHPVTVF528eVeEympWpWQV39HWwZ7n7bFyquW4MtH63pAsYGkAG4JS4cNSVdeFNaAKE1To%2B4dyeXaV%2BtYVmzQSBZt8TjrJ6XXmWC%2Fu%2BolNroWMArLJMdm%2BorEb3rM9C4kJF2yYltpi2v7vyOhnq%2BFdEw3Mhzn6c0RUbYyaa0HWp0UTnDbMdFW9sQnxwolh%2FXJgk7k%2F0TDxfgUHipev2Q7gzIWi8NKPOZeA5eW82j0qRdWUP2%2FgI7OOQpPduqWLoI0i8IN5N36kGioJbDKPWaqHoPBTsWZyoGptMoDYVLYkQvboAMOL%2BDARQs6Ejp6y470dXQPnUfZ8zh2es%2FBRs6jjwmXkM6Tb9gaL3K32b%2Fm1X%2BhKbLqArksGH9MO803AsxJtfETx6FAPotj6BHvell1cD%2BGzono5OtY5VWe1j2wb6e4QKAg%2FDzSHlrFY5QW6VIvigiTuIVa2Qo%2BO0UOrA%2BZdjI2ilvI%2F%2BqLohLoDKJQeNY9b2hg15qbJG6odMbhL1EitDRkyueA3uq7t3pWniVBw9NzF9%2Fvmo13Zsvrqt48XrlvjQ%2F%2FrmIiYTVeqDJggoRFufl4zZH9boysdjvFTVt65%2FG5VhkmgQMI7TksIGOqUBBhy1RknRHlFTQG%2Fq6OWnhBrAiw93UUUIHuu0n0eyCH1dVB0US%2FbbjRjeFdMWolAQZfXAtvIsEc6cAc6HNACudkj18uUbATCw6mn6LFfpG5OmdHfPXgO3uK0WslY8zQDaSMS2NZBK1WAqFmQVUbrhmstysaRy5jTjiTV3ZFv2BRyjzjuad4Kmm8cXOC4ZQ9Xlmd3ArGJBUfWBIcgbj%2BXjRUIlDJv5&X-Amz-Signature=74ed93ec3266a64caecb09f2a7506bab0f9df2815a56237a4273742b82d19e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3H2L5Y%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAG3i7BBNb0QiEYODShxbDhgIL2Dv%2FWIbHsFL9dFMOkAiEA9HB3doY6EtxKh38mTMt1Kru3N3dGO2tjQ%2BbS%2BCPpOVIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA6oUFMoZFdueNx8mSrcA0QESrGRUcXIhHeXo2odiUhsgKtohOHPVTVF528eVeEympWpWQV39HWwZ7n7bFyquW4MtH63pAsYGkAG4JS4cNSVdeFNaAKE1To%2B4dyeXaV%2BtYVmzQSBZt8TjrJ6XXmWC%2Fu%2BolNroWMArLJMdm%2BorEb3rM9C4kJF2yYltpi2v7vyOhnq%2BFdEw3Mhzn6c0RUbYyaa0HWp0UTnDbMdFW9sQnxwolh%2FXJgk7k%2F0TDxfgUHipev2Q7gzIWi8NKPOZeA5eW82j0qRdWUP2%2FgI7OOQpPduqWLoI0i8IN5N36kGioJbDKPWaqHoPBTsWZyoGptMoDYVLYkQvboAMOL%2BDARQs6Ejp6y470dXQPnUfZ8zh2es%2FBRs6jjwmXkM6Tb9gaL3K32b%2Fm1X%2BhKbLqArksGH9MO803AsxJtfETx6FAPotj6BHvell1cD%2BGzono5OtY5VWe1j2wb6e4QKAg%2FDzSHlrFY5QW6VIvigiTuIVa2Qo%2BO0UOrA%2BZdjI2ilvI%2F%2BqLohLoDKJQeNY9b2hg15qbJG6odMbhL1EitDRkyueA3uq7t3pWniVBw9NzF9%2Fvmo13Zsvrqt48XrlvjQ%2F%2FrmIiYTVeqDJggoRFufl4zZH9boysdjvFTVt65%2FG5VhkmgQMI7TksIGOqUBBhy1RknRHlFTQG%2Fq6OWnhBrAiw93UUUIHuu0n0eyCH1dVB0US%2FbbjRjeFdMWolAQZfXAtvIsEc6cAc6HNACudkj18uUbATCw6mn6LFfpG5OmdHfPXgO3uK0WslY8zQDaSMS2NZBK1WAqFmQVUbrhmstysaRy5jTjiTV3ZFv2BRyjzjuad4Kmm8cXOC4ZQ9Xlmd3ArGJBUfWBIcgbj%2BXjRUIlDJv5&X-Amz-Signature=2647f09934e1ce6016ab5feacd8715c43a157526909fdd2bc905219c8cc22f48&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3H2L5Y%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAG3i7BBNb0QiEYODShxbDhgIL2Dv%2FWIbHsFL9dFMOkAiEA9HB3doY6EtxKh38mTMt1Kru3N3dGO2tjQ%2BbS%2BCPpOVIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA6oUFMoZFdueNx8mSrcA0QESrGRUcXIhHeXo2odiUhsgKtohOHPVTVF528eVeEympWpWQV39HWwZ7n7bFyquW4MtH63pAsYGkAG4JS4cNSVdeFNaAKE1To%2B4dyeXaV%2BtYVmzQSBZt8TjrJ6XXmWC%2Fu%2BolNroWMArLJMdm%2BorEb3rM9C4kJF2yYltpi2v7vyOhnq%2BFdEw3Mhzn6c0RUbYyaa0HWp0UTnDbMdFW9sQnxwolh%2FXJgk7k%2F0TDxfgUHipev2Q7gzIWi8NKPOZeA5eW82j0qRdWUP2%2FgI7OOQpPduqWLoI0i8IN5N36kGioJbDKPWaqHoPBTsWZyoGptMoDYVLYkQvboAMOL%2BDARQs6Ejp6y470dXQPnUfZ8zh2es%2FBRs6jjwmXkM6Tb9gaL3K32b%2Fm1X%2BhKbLqArksGH9MO803AsxJtfETx6FAPotj6BHvell1cD%2BGzono5OtY5VWe1j2wb6e4QKAg%2FDzSHlrFY5QW6VIvigiTuIVa2Qo%2BO0UOrA%2BZdjI2ilvI%2F%2BqLohLoDKJQeNY9b2hg15qbJG6odMbhL1EitDRkyueA3uq7t3pWniVBw9NzF9%2Fvmo13Zsvrqt48XrlvjQ%2F%2FrmIiYTVeqDJggoRFufl4zZH9boysdjvFTVt65%2FG5VhkmgQMI7TksIGOqUBBhy1RknRHlFTQG%2Fq6OWnhBrAiw93UUUIHuu0n0eyCH1dVB0US%2FbbjRjeFdMWolAQZfXAtvIsEc6cAc6HNACudkj18uUbATCw6mn6LFfpG5OmdHfPXgO3uK0WslY8zQDaSMS2NZBK1WAqFmQVUbrhmstysaRy5jTjiTV3ZFv2BRyjzjuad4Kmm8cXOC4ZQ9Xlmd3ArGJBUfWBIcgbj%2BXjRUIlDJv5&X-Amz-Signature=ee9f6726c2346f9d2a42870f7bba079d7566b5a5108b7ef7c53b9a0407a534c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3H2L5Y%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAG3i7BBNb0QiEYODShxbDhgIL2Dv%2FWIbHsFL9dFMOkAiEA9HB3doY6EtxKh38mTMt1Kru3N3dGO2tjQ%2BbS%2BCPpOVIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA6oUFMoZFdueNx8mSrcA0QESrGRUcXIhHeXo2odiUhsgKtohOHPVTVF528eVeEympWpWQV39HWwZ7n7bFyquW4MtH63pAsYGkAG4JS4cNSVdeFNaAKE1To%2B4dyeXaV%2BtYVmzQSBZt8TjrJ6XXmWC%2Fu%2BolNroWMArLJMdm%2BorEb3rM9C4kJF2yYltpi2v7vyOhnq%2BFdEw3Mhzn6c0RUbYyaa0HWp0UTnDbMdFW9sQnxwolh%2FXJgk7k%2F0TDxfgUHipev2Q7gzIWi8NKPOZeA5eW82j0qRdWUP2%2FgI7OOQpPduqWLoI0i8IN5N36kGioJbDKPWaqHoPBTsWZyoGptMoDYVLYkQvboAMOL%2BDARQs6Ejp6y470dXQPnUfZ8zh2es%2FBRs6jjwmXkM6Tb9gaL3K32b%2Fm1X%2BhKbLqArksGH9MO803AsxJtfETx6FAPotj6BHvell1cD%2BGzono5OtY5VWe1j2wb6e4QKAg%2FDzSHlrFY5QW6VIvigiTuIVa2Qo%2BO0UOrA%2BZdjI2ilvI%2F%2BqLohLoDKJQeNY9b2hg15qbJG6odMbhL1EitDRkyueA3uq7t3pWniVBw9NzF9%2Fvmo13Zsvrqt48XrlvjQ%2F%2FrmIiYTVeqDJggoRFufl4zZH9boysdjvFTVt65%2FG5VhkmgQMI7TksIGOqUBBhy1RknRHlFTQG%2Fq6OWnhBrAiw93UUUIHuu0n0eyCH1dVB0US%2FbbjRjeFdMWolAQZfXAtvIsEc6cAc6HNACudkj18uUbATCw6mn6LFfpG5OmdHfPXgO3uK0WslY8zQDaSMS2NZBK1WAqFmQVUbrhmstysaRy5jTjiTV3ZFv2BRyjzjuad4Kmm8cXOC4ZQ9Xlmd3ArGJBUfWBIcgbj%2BXjRUIlDJv5&X-Amz-Signature=ffa348f491333718f18f0b5454d052aa1f3f45273346cf5532b016607c8ea7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3H2L5Y%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAG3i7BBNb0QiEYODShxbDhgIL2Dv%2FWIbHsFL9dFMOkAiEA9HB3doY6EtxKh38mTMt1Kru3N3dGO2tjQ%2BbS%2BCPpOVIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA6oUFMoZFdueNx8mSrcA0QESrGRUcXIhHeXo2odiUhsgKtohOHPVTVF528eVeEympWpWQV39HWwZ7n7bFyquW4MtH63pAsYGkAG4JS4cNSVdeFNaAKE1To%2B4dyeXaV%2BtYVmzQSBZt8TjrJ6XXmWC%2Fu%2BolNroWMArLJMdm%2BorEb3rM9C4kJF2yYltpi2v7vyOhnq%2BFdEw3Mhzn6c0RUbYyaa0HWp0UTnDbMdFW9sQnxwolh%2FXJgk7k%2F0TDxfgUHipev2Q7gzIWi8NKPOZeA5eW82j0qRdWUP2%2FgI7OOQpPduqWLoI0i8IN5N36kGioJbDKPWaqHoPBTsWZyoGptMoDYVLYkQvboAMOL%2BDARQs6Ejp6y470dXQPnUfZ8zh2es%2FBRs6jjwmXkM6Tb9gaL3K32b%2Fm1X%2BhKbLqArksGH9MO803AsxJtfETx6FAPotj6BHvell1cD%2BGzono5OtY5VWe1j2wb6e4QKAg%2FDzSHlrFY5QW6VIvigiTuIVa2Qo%2BO0UOrA%2BZdjI2ilvI%2F%2BqLohLoDKJQeNY9b2hg15qbJG6odMbhL1EitDRkyueA3uq7t3pWniVBw9NzF9%2Fvmo13Zsvrqt48XrlvjQ%2F%2FrmIiYTVeqDJggoRFufl4zZH9boysdjvFTVt65%2FG5VhkmgQMI7TksIGOqUBBhy1RknRHlFTQG%2Fq6OWnhBrAiw93UUUIHuu0n0eyCH1dVB0US%2FbbjRjeFdMWolAQZfXAtvIsEc6cAc6HNACudkj18uUbATCw6mn6LFfpG5OmdHfPXgO3uK0WslY8zQDaSMS2NZBK1WAqFmQVUbrhmstysaRy5jTjiTV3ZFv2BRyjzjuad4Kmm8cXOC4ZQ9Xlmd3ArGJBUfWBIcgbj%2BXjRUIlDJv5&X-Amz-Signature=09188e75cf58c304b9bd9458857f7e5bfa85546f481ad99993e7e8fd556f6540&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3H2L5Y%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAG3i7BBNb0QiEYODShxbDhgIL2Dv%2FWIbHsFL9dFMOkAiEA9HB3doY6EtxKh38mTMt1Kru3N3dGO2tjQ%2BbS%2BCPpOVIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA6oUFMoZFdueNx8mSrcA0QESrGRUcXIhHeXo2odiUhsgKtohOHPVTVF528eVeEympWpWQV39HWwZ7n7bFyquW4MtH63pAsYGkAG4JS4cNSVdeFNaAKE1To%2B4dyeXaV%2BtYVmzQSBZt8TjrJ6XXmWC%2Fu%2BolNroWMArLJMdm%2BorEb3rM9C4kJF2yYltpi2v7vyOhnq%2BFdEw3Mhzn6c0RUbYyaa0HWp0UTnDbMdFW9sQnxwolh%2FXJgk7k%2F0TDxfgUHipev2Q7gzIWi8NKPOZeA5eW82j0qRdWUP2%2FgI7OOQpPduqWLoI0i8IN5N36kGioJbDKPWaqHoPBTsWZyoGptMoDYVLYkQvboAMOL%2BDARQs6Ejp6y470dXQPnUfZ8zh2es%2FBRs6jjwmXkM6Tb9gaL3K32b%2Fm1X%2BhKbLqArksGH9MO803AsxJtfETx6FAPotj6BHvell1cD%2BGzono5OtY5VWe1j2wb6e4QKAg%2FDzSHlrFY5QW6VIvigiTuIVa2Qo%2BO0UOrA%2BZdjI2ilvI%2F%2BqLohLoDKJQeNY9b2hg15qbJG6odMbhL1EitDRkyueA3uq7t3pWniVBw9NzF9%2Fvmo13Zsvrqt48XrlvjQ%2F%2FrmIiYTVeqDJggoRFufl4zZH9boysdjvFTVt65%2FG5VhkmgQMI7TksIGOqUBBhy1RknRHlFTQG%2Fq6OWnhBrAiw93UUUIHuu0n0eyCH1dVB0US%2FbbjRjeFdMWolAQZfXAtvIsEc6cAc6HNACudkj18uUbATCw6mn6LFfpG5OmdHfPXgO3uK0WslY8zQDaSMS2NZBK1WAqFmQVUbrhmstysaRy5jTjiTV3ZFv2BRyjzjuad4Kmm8cXOC4ZQ9Xlmd3ArGJBUfWBIcgbj%2BXjRUIlDJv5&X-Amz-Signature=8d042bd5c9e855f73c7c19ef57cae2d0c3af4fd2694d6f1ba1c7c6d25eb5676c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3H2L5Y%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAG3i7BBNb0QiEYODShxbDhgIL2Dv%2FWIbHsFL9dFMOkAiEA9HB3doY6EtxKh38mTMt1Kru3N3dGO2tjQ%2BbS%2BCPpOVIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA6oUFMoZFdueNx8mSrcA0QESrGRUcXIhHeXo2odiUhsgKtohOHPVTVF528eVeEympWpWQV39HWwZ7n7bFyquW4MtH63pAsYGkAG4JS4cNSVdeFNaAKE1To%2B4dyeXaV%2BtYVmzQSBZt8TjrJ6XXmWC%2Fu%2BolNroWMArLJMdm%2BorEb3rM9C4kJF2yYltpi2v7vyOhnq%2BFdEw3Mhzn6c0RUbYyaa0HWp0UTnDbMdFW9sQnxwolh%2FXJgk7k%2F0TDxfgUHipev2Q7gzIWi8NKPOZeA5eW82j0qRdWUP2%2FgI7OOQpPduqWLoI0i8IN5N36kGioJbDKPWaqHoPBTsWZyoGptMoDYVLYkQvboAMOL%2BDARQs6Ejp6y470dXQPnUfZ8zh2es%2FBRs6jjwmXkM6Tb9gaL3K32b%2Fm1X%2BhKbLqArksGH9MO803AsxJtfETx6FAPotj6BHvell1cD%2BGzono5OtY5VWe1j2wb6e4QKAg%2FDzSHlrFY5QW6VIvigiTuIVa2Qo%2BO0UOrA%2BZdjI2ilvI%2F%2BqLohLoDKJQeNY9b2hg15qbJG6odMbhL1EitDRkyueA3uq7t3pWniVBw9NzF9%2Fvmo13Zsvrqt48XrlvjQ%2F%2FrmIiYTVeqDJggoRFufl4zZH9boysdjvFTVt65%2FG5VhkmgQMI7TksIGOqUBBhy1RknRHlFTQG%2Fq6OWnhBrAiw93UUUIHuu0n0eyCH1dVB0US%2FbbjRjeFdMWolAQZfXAtvIsEc6cAc6HNACudkj18uUbATCw6mn6LFfpG5OmdHfPXgO3uK0WslY8zQDaSMS2NZBK1WAqFmQVUbrhmstysaRy5jTjiTV3ZFv2BRyjzjuad4Kmm8cXOC4ZQ9Xlmd3ArGJBUfWBIcgbj%2BXjRUIlDJv5&X-Amz-Signature=66b45f6d136ae1c8e34589ccb2ff8e7d672bcd0e8481f593443a7195eb0642f7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

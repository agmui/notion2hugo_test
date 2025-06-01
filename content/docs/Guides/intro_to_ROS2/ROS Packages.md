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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYH6I7E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJd9NknnTIHaRRRMWGQNeLHx8RXqQcix9VWD%2FQsOKlWwIgEKTtwnV%2FiwxmhRI6%2B18AcKxIKwSNQG%2F0GbETHsoNCXwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7hvPgLYTkQn%2BHYIyrcA4pdj0%2BSGC%2FtkVje%2Bax84ImDtryvU4Abb6XdcBOL%2BjIr1rAT%2FI3k7hKUTLAPUCTzRP0yOn7PDN%2BR2uvlbVCOFYyIuk0QI%2FbNy0PMOG%2BqXi8QPmgkJ5at2WuVTvdKoMQwOPNUgjkWyKFAetZ7CZYKGjIpz7dDUuSDNJn75N7PiKcHVoXrzZrR6tdltsd3fne6PfHmuXeCZJUr9Pd5KoHP1CfI7x%2F%2FIQqsbPO8ebZAEIt7YaOSYCyUPQiI5QdsGQIcR5UsmHgZ7%2BEoh2Iu8TDAOrl3eYA9QMx0l1RRzbs3j%2BB%2FUJkM%2Bw070fVFKsdZ926Iulv2teKg9sdu3nxESXa4X6xwvM27Xa7scOy%2FNP%2Beuq7qZjOi7%2B%2F%2B1%2BCEO6gILbmAI0uzX2AAyBjDkFZH81Zililovuj8bQKcGQos92i%2FN1CSD1wZZRqDiTqL8Mh0w7x6fMH5ttkZht7QsLV3HSzUU2i5I5QqtZ2OBmw3VwrKHBDMRZ3CKop5pZhWDIJizpUQCZL%2F3ZJ0hvIIDXFeiZzBvuL5TAW1U6DSQbb2FcTcWnLNR6Ni8APnxKjjco1miK%2BA%2BpPi%2BEuPNp0qNUMujSRKSK%2BrQpJnkK5FB7n9QReWpS20iAfg%2Bw2RHBy6AB6BMJSG7sEGOqUBftrIOllsbDQ9h6kaNM7hzC83ZJdJd26gdD6%2FQNjqG2WympbUDYdXCuwlo6yf3kLBViFSY9o9tMa7RyXkANDzk622Y6MBYG6eHlJwIpEv%2FUNlDGX55yP6En7YdJ5NkhTe8XdjkQLkoTtWXOygKeFUZDEVhlDpgEQ3r2yO8z8oB218zk%2BPzysNwINZbQBd02Y%2FaCIlSvZ9%2FHfP03%2BmHVVx4otLVEky&X-Amz-Signature=5046657e6a0f81ab751015f02d95d164188f5e9c2118a6e9989f5294524e67be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYH6I7E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJd9NknnTIHaRRRMWGQNeLHx8RXqQcix9VWD%2FQsOKlWwIgEKTtwnV%2FiwxmhRI6%2B18AcKxIKwSNQG%2F0GbETHsoNCXwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7hvPgLYTkQn%2BHYIyrcA4pdj0%2BSGC%2FtkVje%2Bax84ImDtryvU4Abb6XdcBOL%2BjIr1rAT%2FI3k7hKUTLAPUCTzRP0yOn7PDN%2BR2uvlbVCOFYyIuk0QI%2FbNy0PMOG%2BqXi8QPmgkJ5at2WuVTvdKoMQwOPNUgjkWyKFAetZ7CZYKGjIpz7dDUuSDNJn75N7PiKcHVoXrzZrR6tdltsd3fne6PfHmuXeCZJUr9Pd5KoHP1CfI7x%2F%2FIQqsbPO8ebZAEIt7YaOSYCyUPQiI5QdsGQIcR5UsmHgZ7%2BEoh2Iu8TDAOrl3eYA9QMx0l1RRzbs3j%2BB%2FUJkM%2Bw070fVFKsdZ926Iulv2teKg9sdu3nxESXa4X6xwvM27Xa7scOy%2FNP%2Beuq7qZjOi7%2B%2F%2B1%2BCEO6gILbmAI0uzX2AAyBjDkFZH81Zililovuj8bQKcGQos92i%2FN1CSD1wZZRqDiTqL8Mh0w7x6fMH5ttkZht7QsLV3HSzUU2i5I5QqtZ2OBmw3VwrKHBDMRZ3CKop5pZhWDIJizpUQCZL%2F3ZJ0hvIIDXFeiZzBvuL5TAW1U6DSQbb2FcTcWnLNR6Ni8APnxKjjco1miK%2BA%2BpPi%2BEuPNp0qNUMujSRKSK%2BrQpJnkK5FB7n9QReWpS20iAfg%2Bw2RHBy6AB6BMJSG7sEGOqUBftrIOllsbDQ9h6kaNM7hzC83ZJdJd26gdD6%2FQNjqG2WympbUDYdXCuwlo6yf3kLBViFSY9o9tMa7RyXkANDzk622Y6MBYG6eHlJwIpEv%2FUNlDGX55yP6En7YdJ5NkhTe8XdjkQLkoTtWXOygKeFUZDEVhlDpgEQ3r2yO8z8oB218zk%2BPzysNwINZbQBd02Y%2FaCIlSvZ9%2FHfP03%2BmHVVx4otLVEky&X-Amz-Signature=f84fc87af79a7683a1c25c8622522ef53a0c1660f4cd08585104d64770a6820a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYH6I7E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJd9NknnTIHaRRRMWGQNeLHx8RXqQcix9VWD%2FQsOKlWwIgEKTtwnV%2FiwxmhRI6%2B18AcKxIKwSNQG%2F0GbETHsoNCXwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7hvPgLYTkQn%2BHYIyrcA4pdj0%2BSGC%2FtkVje%2Bax84ImDtryvU4Abb6XdcBOL%2BjIr1rAT%2FI3k7hKUTLAPUCTzRP0yOn7PDN%2BR2uvlbVCOFYyIuk0QI%2FbNy0PMOG%2BqXi8QPmgkJ5at2WuVTvdKoMQwOPNUgjkWyKFAetZ7CZYKGjIpz7dDUuSDNJn75N7PiKcHVoXrzZrR6tdltsd3fne6PfHmuXeCZJUr9Pd5KoHP1CfI7x%2F%2FIQqsbPO8ebZAEIt7YaOSYCyUPQiI5QdsGQIcR5UsmHgZ7%2BEoh2Iu8TDAOrl3eYA9QMx0l1RRzbs3j%2BB%2FUJkM%2Bw070fVFKsdZ926Iulv2teKg9sdu3nxESXa4X6xwvM27Xa7scOy%2FNP%2Beuq7qZjOi7%2B%2F%2B1%2BCEO6gILbmAI0uzX2AAyBjDkFZH81Zililovuj8bQKcGQos92i%2FN1CSD1wZZRqDiTqL8Mh0w7x6fMH5ttkZht7QsLV3HSzUU2i5I5QqtZ2OBmw3VwrKHBDMRZ3CKop5pZhWDIJizpUQCZL%2F3ZJ0hvIIDXFeiZzBvuL5TAW1U6DSQbb2FcTcWnLNR6Ni8APnxKjjco1miK%2BA%2BpPi%2BEuPNp0qNUMujSRKSK%2BrQpJnkK5FB7n9QReWpS20iAfg%2Bw2RHBy6AB6BMJSG7sEGOqUBftrIOllsbDQ9h6kaNM7hzC83ZJdJd26gdD6%2FQNjqG2WympbUDYdXCuwlo6yf3kLBViFSY9o9tMa7RyXkANDzk622Y6MBYG6eHlJwIpEv%2FUNlDGX55yP6En7YdJ5NkhTe8XdjkQLkoTtWXOygKeFUZDEVhlDpgEQ3r2yO8z8oB218zk%2BPzysNwINZbQBd02Y%2FaCIlSvZ9%2FHfP03%2BmHVVx4otLVEky&X-Amz-Signature=91fc643a7c57accddbec0a80ced1b17763148a986a9cc2dd0a092455122d9312&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYH6I7E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJd9NknnTIHaRRRMWGQNeLHx8RXqQcix9VWD%2FQsOKlWwIgEKTtwnV%2FiwxmhRI6%2B18AcKxIKwSNQG%2F0GbETHsoNCXwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7hvPgLYTkQn%2BHYIyrcA4pdj0%2BSGC%2FtkVje%2Bax84ImDtryvU4Abb6XdcBOL%2BjIr1rAT%2FI3k7hKUTLAPUCTzRP0yOn7PDN%2BR2uvlbVCOFYyIuk0QI%2FbNy0PMOG%2BqXi8QPmgkJ5at2WuVTvdKoMQwOPNUgjkWyKFAetZ7CZYKGjIpz7dDUuSDNJn75N7PiKcHVoXrzZrR6tdltsd3fne6PfHmuXeCZJUr9Pd5KoHP1CfI7x%2F%2FIQqsbPO8ebZAEIt7YaOSYCyUPQiI5QdsGQIcR5UsmHgZ7%2BEoh2Iu8TDAOrl3eYA9QMx0l1RRzbs3j%2BB%2FUJkM%2Bw070fVFKsdZ926Iulv2teKg9sdu3nxESXa4X6xwvM27Xa7scOy%2FNP%2Beuq7qZjOi7%2B%2F%2B1%2BCEO6gILbmAI0uzX2AAyBjDkFZH81Zililovuj8bQKcGQos92i%2FN1CSD1wZZRqDiTqL8Mh0w7x6fMH5ttkZht7QsLV3HSzUU2i5I5QqtZ2OBmw3VwrKHBDMRZ3CKop5pZhWDIJizpUQCZL%2F3ZJ0hvIIDXFeiZzBvuL5TAW1U6DSQbb2FcTcWnLNR6Ni8APnxKjjco1miK%2BA%2BpPi%2BEuPNp0qNUMujSRKSK%2BrQpJnkK5FB7n9QReWpS20iAfg%2Bw2RHBy6AB6BMJSG7sEGOqUBftrIOllsbDQ9h6kaNM7hzC83ZJdJd26gdD6%2FQNjqG2WympbUDYdXCuwlo6yf3kLBViFSY9o9tMa7RyXkANDzk622Y6MBYG6eHlJwIpEv%2FUNlDGX55yP6En7YdJ5NkhTe8XdjkQLkoTtWXOygKeFUZDEVhlDpgEQ3r2yO8z8oB218zk%2BPzysNwINZbQBd02Y%2FaCIlSvZ9%2FHfP03%2BmHVVx4otLVEky&X-Amz-Signature=11491c3c31572b0d3ca217f5470bc8c091eef6804e06bcf0f75348bc52c330ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYH6I7E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJd9NknnTIHaRRRMWGQNeLHx8RXqQcix9VWD%2FQsOKlWwIgEKTtwnV%2FiwxmhRI6%2B18AcKxIKwSNQG%2F0GbETHsoNCXwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7hvPgLYTkQn%2BHYIyrcA4pdj0%2BSGC%2FtkVje%2Bax84ImDtryvU4Abb6XdcBOL%2BjIr1rAT%2FI3k7hKUTLAPUCTzRP0yOn7PDN%2BR2uvlbVCOFYyIuk0QI%2FbNy0PMOG%2BqXi8QPmgkJ5at2WuVTvdKoMQwOPNUgjkWyKFAetZ7CZYKGjIpz7dDUuSDNJn75N7PiKcHVoXrzZrR6tdltsd3fne6PfHmuXeCZJUr9Pd5KoHP1CfI7x%2F%2FIQqsbPO8ebZAEIt7YaOSYCyUPQiI5QdsGQIcR5UsmHgZ7%2BEoh2Iu8TDAOrl3eYA9QMx0l1RRzbs3j%2BB%2FUJkM%2Bw070fVFKsdZ926Iulv2teKg9sdu3nxESXa4X6xwvM27Xa7scOy%2FNP%2Beuq7qZjOi7%2B%2F%2B1%2BCEO6gILbmAI0uzX2AAyBjDkFZH81Zililovuj8bQKcGQos92i%2FN1CSD1wZZRqDiTqL8Mh0w7x6fMH5ttkZht7QsLV3HSzUU2i5I5QqtZ2OBmw3VwrKHBDMRZ3CKop5pZhWDIJizpUQCZL%2F3ZJ0hvIIDXFeiZzBvuL5TAW1U6DSQbb2FcTcWnLNR6Ni8APnxKjjco1miK%2BA%2BpPi%2BEuPNp0qNUMujSRKSK%2BrQpJnkK5FB7n9QReWpS20iAfg%2Bw2RHBy6AB6BMJSG7sEGOqUBftrIOllsbDQ9h6kaNM7hzC83ZJdJd26gdD6%2FQNjqG2WympbUDYdXCuwlo6yf3kLBViFSY9o9tMa7RyXkANDzk622Y6MBYG6eHlJwIpEv%2FUNlDGX55yP6En7YdJ5NkhTe8XdjkQLkoTtWXOygKeFUZDEVhlDpgEQ3r2yO8z8oB218zk%2BPzysNwINZbQBd02Y%2FaCIlSvZ9%2FHfP03%2BmHVVx4otLVEky&X-Amz-Signature=17b2ca2adac2a78dbffc922b9772376591c9dda9e73f1de2ce4f351c5f0b457f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYH6I7E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJd9NknnTIHaRRRMWGQNeLHx8RXqQcix9VWD%2FQsOKlWwIgEKTtwnV%2FiwxmhRI6%2B18AcKxIKwSNQG%2F0GbETHsoNCXwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7hvPgLYTkQn%2BHYIyrcA4pdj0%2BSGC%2FtkVje%2Bax84ImDtryvU4Abb6XdcBOL%2BjIr1rAT%2FI3k7hKUTLAPUCTzRP0yOn7PDN%2BR2uvlbVCOFYyIuk0QI%2FbNy0PMOG%2BqXi8QPmgkJ5at2WuVTvdKoMQwOPNUgjkWyKFAetZ7CZYKGjIpz7dDUuSDNJn75N7PiKcHVoXrzZrR6tdltsd3fne6PfHmuXeCZJUr9Pd5KoHP1CfI7x%2F%2FIQqsbPO8ebZAEIt7YaOSYCyUPQiI5QdsGQIcR5UsmHgZ7%2BEoh2Iu8TDAOrl3eYA9QMx0l1RRzbs3j%2BB%2FUJkM%2Bw070fVFKsdZ926Iulv2teKg9sdu3nxESXa4X6xwvM27Xa7scOy%2FNP%2Beuq7qZjOi7%2B%2F%2B1%2BCEO6gILbmAI0uzX2AAyBjDkFZH81Zililovuj8bQKcGQos92i%2FN1CSD1wZZRqDiTqL8Mh0w7x6fMH5ttkZht7QsLV3HSzUU2i5I5QqtZ2OBmw3VwrKHBDMRZ3CKop5pZhWDIJizpUQCZL%2F3ZJ0hvIIDXFeiZzBvuL5TAW1U6DSQbb2FcTcWnLNR6Ni8APnxKjjco1miK%2BA%2BpPi%2BEuPNp0qNUMujSRKSK%2BrQpJnkK5FB7n9QReWpS20iAfg%2Bw2RHBy6AB6BMJSG7sEGOqUBftrIOllsbDQ9h6kaNM7hzC83ZJdJd26gdD6%2FQNjqG2WympbUDYdXCuwlo6yf3kLBViFSY9o9tMa7RyXkANDzk622Y6MBYG6eHlJwIpEv%2FUNlDGX55yP6En7YdJ5NkhTe8XdjkQLkoTtWXOygKeFUZDEVhlDpgEQ3r2yO8z8oB218zk%2BPzysNwINZbQBd02Y%2FaCIlSvZ9%2FHfP03%2BmHVVx4otLVEky&X-Amz-Signature=b123a6df997f231048a4fa3b80237c47f030aeb6e7fbde409a1820a94e1f6177&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYH6I7E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJd9NknnTIHaRRRMWGQNeLHx8RXqQcix9VWD%2FQsOKlWwIgEKTtwnV%2FiwxmhRI6%2B18AcKxIKwSNQG%2F0GbETHsoNCXwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7hvPgLYTkQn%2BHYIyrcA4pdj0%2BSGC%2FtkVje%2Bax84ImDtryvU4Abb6XdcBOL%2BjIr1rAT%2FI3k7hKUTLAPUCTzRP0yOn7PDN%2BR2uvlbVCOFYyIuk0QI%2FbNy0PMOG%2BqXi8QPmgkJ5at2WuVTvdKoMQwOPNUgjkWyKFAetZ7CZYKGjIpz7dDUuSDNJn75N7PiKcHVoXrzZrR6tdltsd3fne6PfHmuXeCZJUr9Pd5KoHP1CfI7x%2F%2FIQqsbPO8ebZAEIt7YaOSYCyUPQiI5QdsGQIcR5UsmHgZ7%2BEoh2Iu8TDAOrl3eYA9QMx0l1RRzbs3j%2BB%2FUJkM%2Bw070fVFKsdZ926Iulv2teKg9sdu3nxESXa4X6xwvM27Xa7scOy%2FNP%2Beuq7qZjOi7%2B%2F%2B1%2BCEO6gILbmAI0uzX2AAyBjDkFZH81Zililovuj8bQKcGQos92i%2FN1CSD1wZZRqDiTqL8Mh0w7x6fMH5ttkZht7QsLV3HSzUU2i5I5QqtZ2OBmw3VwrKHBDMRZ3CKop5pZhWDIJizpUQCZL%2F3ZJ0hvIIDXFeiZzBvuL5TAW1U6DSQbb2FcTcWnLNR6Ni8APnxKjjco1miK%2BA%2BpPi%2BEuPNp0qNUMujSRKSK%2BrQpJnkK5FB7n9QReWpS20iAfg%2Bw2RHBy6AB6BMJSG7sEGOqUBftrIOllsbDQ9h6kaNM7hzC83ZJdJd26gdD6%2FQNjqG2WympbUDYdXCuwlo6yf3kLBViFSY9o9tMa7RyXkANDzk622Y6MBYG6eHlJwIpEv%2FUNlDGX55yP6En7YdJ5NkhTe8XdjkQLkoTtWXOygKeFUZDEVhlDpgEQ3r2yO8z8oB218zk%2BPzysNwINZbQBd02Y%2FaCIlSvZ9%2FHfP03%2BmHVVx4otLVEky&X-Amz-Signature=4aecbdd1dde7e8e2fa2f91f1e2b776925bee4cff4652e51914bc8ffc2dbe0ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

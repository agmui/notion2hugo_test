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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JJ3MZTV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGu7%2Bbn0xh0Z%2F2yI%2Bu7R3n0nfCe%2FA0Qs6FUaVF4167gIgOVP1QTtA8dmihTzDAtOL9WqayljqumDl1TJD2jH7J6kqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwEAu4g9Bk6ynaJ3SrcA%2BPefcgzoHtq4Pajq9GiBkYmZShqLI7UTJL7vpa9H6HfRLj5%2BhDslbpQSsSxvY1jyvzbpnli9LlJp%2Fb1QMFLpNqHOJff9xmrDzMCuWe2GI7kOzBe%2ByvDDmQugrA6g51d4O4GxNXEQBk74x7ylutXGCgvm18UnN2YHM%2BqMfpaScclJ4tkLin%2BwpGKIc9yCj%2BI2pwcIh6OPTI%2FpEVnDggwyOmYngsLMKBs%2BjYE8QqZPn92bwLcFdR2k8tBWsTOIviU4hQn0uXTYt4eznpr2SqP2atVQL5CDRAvJ7VYs38%2FX7NUN0r%2BfTW9nbgQ8zILfvcONe2PhF%2FyFD51jlQjK9NsIpkZhyqt7LFt0Ji88p6wVGcX6xxjOfN7PTUyKwI4VG5W81Orok52GeqDIJ2yYAU7Eh1cRQ6plWNXKxHf6xIhT34%2FJ4fN1Y1RYrCzbxUDIyto0cJ%2Bgl8z%2B966IO3dOL%2FHuEGDpPr1juQU7DIOdaH3x8aJBiCngOgxSWRELzrsu1kZqRarlLJlAoXm8blk%2BVI6TDHJ0Uf%2FTwnDWispZ8dxWDoxtTEDtotcSQuVZHiwvdA3lOgxG8YvdF82UXVk%2BlWRX0vhxbcILUn%2BU06djaK1P57mowrYtU8A%2BE8Fl6ceMK7JocIGOqUBXClE0Fg7tE6pJjdjNsvSQomsd9ME5%2BJi6pyWMfbax9VTn1E67QEh2190fIJ9Wro%2FbwKrwuGW1kKsnze74qxiv9YiE1%2FUubIUqesk2%2B0mZrazphIjZ5BhryX5am9RA%2FcAGdhGWCg%2Bb4u6PrQC8ycDDPn06qph5rSi%2F6%2F8tKdaowyqMxKb7Lqk4C9jyrOl6lICqj%2FD7aHtt%2BP%2BTOFU%2Fw04YogM2ST6&X-Amz-Signature=f348c16f8e19a15f68e80f141061de29ff338bc1e0eefb7c7127345a7528e9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JJ3MZTV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGu7%2Bbn0xh0Z%2F2yI%2Bu7R3n0nfCe%2FA0Qs6FUaVF4167gIgOVP1QTtA8dmihTzDAtOL9WqayljqumDl1TJD2jH7J6kqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwEAu4g9Bk6ynaJ3SrcA%2BPefcgzoHtq4Pajq9GiBkYmZShqLI7UTJL7vpa9H6HfRLj5%2BhDslbpQSsSxvY1jyvzbpnli9LlJp%2Fb1QMFLpNqHOJff9xmrDzMCuWe2GI7kOzBe%2ByvDDmQugrA6g51d4O4GxNXEQBk74x7ylutXGCgvm18UnN2YHM%2BqMfpaScclJ4tkLin%2BwpGKIc9yCj%2BI2pwcIh6OPTI%2FpEVnDggwyOmYngsLMKBs%2BjYE8QqZPn92bwLcFdR2k8tBWsTOIviU4hQn0uXTYt4eznpr2SqP2atVQL5CDRAvJ7VYs38%2FX7NUN0r%2BfTW9nbgQ8zILfvcONe2PhF%2FyFD51jlQjK9NsIpkZhyqt7LFt0Ji88p6wVGcX6xxjOfN7PTUyKwI4VG5W81Orok52GeqDIJ2yYAU7Eh1cRQ6plWNXKxHf6xIhT34%2FJ4fN1Y1RYrCzbxUDIyto0cJ%2Bgl8z%2B966IO3dOL%2FHuEGDpPr1juQU7DIOdaH3x8aJBiCngOgxSWRELzrsu1kZqRarlLJlAoXm8blk%2BVI6TDHJ0Uf%2FTwnDWispZ8dxWDoxtTEDtotcSQuVZHiwvdA3lOgxG8YvdF82UXVk%2BlWRX0vhxbcILUn%2BU06djaK1P57mowrYtU8A%2BE8Fl6ceMK7JocIGOqUBXClE0Fg7tE6pJjdjNsvSQomsd9ME5%2BJi6pyWMfbax9VTn1E67QEh2190fIJ9Wro%2FbwKrwuGW1kKsnze74qxiv9YiE1%2FUubIUqesk2%2B0mZrazphIjZ5BhryX5am9RA%2FcAGdhGWCg%2Bb4u6PrQC8ycDDPn06qph5rSi%2F6%2F8tKdaowyqMxKb7Lqk4C9jyrOl6lICqj%2FD7aHtt%2BP%2BTOFU%2Fw04YogM2ST6&X-Amz-Signature=2ffe1e82d5a6974994cb923ea2db13b19f7a56e3a72d044aa9fb06d6aaa944c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JJ3MZTV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGu7%2Bbn0xh0Z%2F2yI%2Bu7R3n0nfCe%2FA0Qs6FUaVF4167gIgOVP1QTtA8dmihTzDAtOL9WqayljqumDl1TJD2jH7J6kqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwEAu4g9Bk6ynaJ3SrcA%2BPefcgzoHtq4Pajq9GiBkYmZShqLI7UTJL7vpa9H6HfRLj5%2BhDslbpQSsSxvY1jyvzbpnli9LlJp%2Fb1QMFLpNqHOJff9xmrDzMCuWe2GI7kOzBe%2ByvDDmQugrA6g51d4O4GxNXEQBk74x7ylutXGCgvm18UnN2YHM%2BqMfpaScclJ4tkLin%2BwpGKIc9yCj%2BI2pwcIh6OPTI%2FpEVnDggwyOmYngsLMKBs%2BjYE8QqZPn92bwLcFdR2k8tBWsTOIviU4hQn0uXTYt4eznpr2SqP2atVQL5CDRAvJ7VYs38%2FX7NUN0r%2BfTW9nbgQ8zILfvcONe2PhF%2FyFD51jlQjK9NsIpkZhyqt7LFt0Ji88p6wVGcX6xxjOfN7PTUyKwI4VG5W81Orok52GeqDIJ2yYAU7Eh1cRQ6plWNXKxHf6xIhT34%2FJ4fN1Y1RYrCzbxUDIyto0cJ%2Bgl8z%2B966IO3dOL%2FHuEGDpPr1juQU7DIOdaH3x8aJBiCngOgxSWRELzrsu1kZqRarlLJlAoXm8blk%2BVI6TDHJ0Uf%2FTwnDWispZ8dxWDoxtTEDtotcSQuVZHiwvdA3lOgxG8YvdF82UXVk%2BlWRX0vhxbcILUn%2BU06djaK1P57mowrYtU8A%2BE8Fl6ceMK7JocIGOqUBXClE0Fg7tE6pJjdjNsvSQomsd9ME5%2BJi6pyWMfbax9VTn1E67QEh2190fIJ9Wro%2FbwKrwuGW1kKsnze74qxiv9YiE1%2FUubIUqesk2%2B0mZrazphIjZ5BhryX5am9RA%2FcAGdhGWCg%2Bb4u6PrQC8ycDDPn06qph5rSi%2F6%2F8tKdaowyqMxKb7Lqk4C9jyrOl6lICqj%2FD7aHtt%2BP%2BTOFU%2Fw04YogM2ST6&X-Amz-Signature=ba23fca76ae7440f8e837d91304e40048bbeec48e2ba687fcd34faca6b9e5eca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JJ3MZTV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGu7%2Bbn0xh0Z%2F2yI%2Bu7R3n0nfCe%2FA0Qs6FUaVF4167gIgOVP1QTtA8dmihTzDAtOL9WqayljqumDl1TJD2jH7J6kqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwEAu4g9Bk6ynaJ3SrcA%2BPefcgzoHtq4Pajq9GiBkYmZShqLI7UTJL7vpa9H6HfRLj5%2BhDslbpQSsSxvY1jyvzbpnli9LlJp%2Fb1QMFLpNqHOJff9xmrDzMCuWe2GI7kOzBe%2ByvDDmQugrA6g51d4O4GxNXEQBk74x7ylutXGCgvm18UnN2YHM%2BqMfpaScclJ4tkLin%2BwpGKIc9yCj%2BI2pwcIh6OPTI%2FpEVnDggwyOmYngsLMKBs%2BjYE8QqZPn92bwLcFdR2k8tBWsTOIviU4hQn0uXTYt4eznpr2SqP2atVQL5CDRAvJ7VYs38%2FX7NUN0r%2BfTW9nbgQ8zILfvcONe2PhF%2FyFD51jlQjK9NsIpkZhyqt7LFt0Ji88p6wVGcX6xxjOfN7PTUyKwI4VG5W81Orok52GeqDIJ2yYAU7Eh1cRQ6plWNXKxHf6xIhT34%2FJ4fN1Y1RYrCzbxUDIyto0cJ%2Bgl8z%2B966IO3dOL%2FHuEGDpPr1juQU7DIOdaH3x8aJBiCngOgxSWRELzrsu1kZqRarlLJlAoXm8blk%2BVI6TDHJ0Uf%2FTwnDWispZ8dxWDoxtTEDtotcSQuVZHiwvdA3lOgxG8YvdF82UXVk%2BlWRX0vhxbcILUn%2BU06djaK1P57mowrYtU8A%2BE8Fl6ceMK7JocIGOqUBXClE0Fg7tE6pJjdjNsvSQomsd9ME5%2BJi6pyWMfbax9VTn1E67QEh2190fIJ9Wro%2FbwKrwuGW1kKsnze74qxiv9YiE1%2FUubIUqesk2%2B0mZrazphIjZ5BhryX5am9RA%2FcAGdhGWCg%2Bb4u6PrQC8ycDDPn06qph5rSi%2F6%2F8tKdaowyqMxKb7Lqk4C9jyrOl6lICqj%2FD7aHtt%2BP%2BTOFU%2Fw04YogM2ST6&X-Amz-Signature=e2fb72a474ec38c5009467c417c77e6f3bc63b3599fcc925bb67bd3cbeecd5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JJ3MZTV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGu7%2Bbn0xh0Z%2F2yI%2Bu7R3n0nfCe%2FA0Qs6FUaVF4167gIgOVP1QTtA8dmihTzDAtOL9WqayljqumDl1TJD2jH7J6kqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwEAu4g9Bk6ynaJ3SrcA%2BPefcgzoHtq4Pajq9GiBkYmZShqLI7UTJL7vpa9H6HfRLj5%2BhDslbpQSsSxvY1jyvzbpnli9LlJp%2Fb1QMFLpNqHOJff9xmrDzMCuWe2GI7kOzBe%2ByvDDmQugrA6g51d4O4GxNXEQBk74x7ylutXGCgvm18UnN2YHM%2BqMfpaScclJ4tkLin%2BwpGKIc9yCj%2BI2pwcIh6OPTI%2FpEVnDggwyOmYngsLMKBs%2BjYE8QqZPn92bwLcFdR2k8tBWsTOIviU4hQn0uXTYt4eznpr2SqP2atVQL5CDRAvJ7VYs38%2FX7NUN0r%2BfTW9nbgQ8zILfvcONe2PhF%2FyFD51jlQjK9NsIpkZhyqt7LFt0Ji88p6wVGcX6xxjOfN7PTUyKwI4VG5W81Orok52GeqDIJ2yYAU7Eh1cRQ6plWNXKxHf6xIhT34%2FJ4fN1Y1RYrCzbxUDIyto0cJ%2Bgl8z%2B966IO3dOL%2FHuEGDpPr1juQU7DIOdaH3x8aJBiCngOgxSWRELzrsu1kZqRarlLJlAoXm8blk%2BVI6TDHJ0Uf%2FTwnDWispZ8dxWDoxtTEDtotcSQuVZHiwvdA3lOgxG8YvdF82UXVk%2BlWRX0vhxbcILUn%2BU06djaK1P57mowrYtU8A%2BE8Fl6ceMK7JocIGOqUBXClE0Fg7tE6pJjdjNsvSQomsd9ME5%2BJi6pyWMfbax9VTn1E67QEh2190fIJ9Wro%2FbwKrwuGW1kKsnze74qxiv9YiE1%2FUubIUqesk2%2B0mZrazphIjZ5BhryX5am9RA%2FcAGdhGWCg%2Bb4u6PrQC8ycDDPn06qph5rSi%2F6%2F8tKdaowyqMxKb7Lqk4C9jyrOl6lICqj%2FD7aHtt%2BP%2BTOFU%2Fw04YogM2ST6&X-Amz-Signature=c9e7150f606976c97f6e16e35caf41b6a3b84ea9856a986105edb51002fd3c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JJ3MZTV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGu7%2Bbn0xh0Z%2F2yI%2Bu7R3n0nfCe%2FA0Qs6FUaVF4167gIgOVP1QTtA8dmihTzDAtOL9WqayljqumDl1TJD2jH7J6kqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwEAu4g9Bk6ynaJ3SrcA%2BPefcgzoHtq4Pajq9GiBkYmZShqLI7UTJL7vpa9H6HfRLj5%2BhDslbpQSsSxvY1jyvzbpnli9LlJp%2Fb1QMFLpNqHOJff9xmrDzMCuWe2GI7kOzBe%2ByvDDmQugrA6g51d4O4GxNXEQBk74x7ylutXGCgvm18UnN2YHM%2BqMfpaScclJ4tkLin%2BwpGKIc9yCj%2BI2pwcIh6OPTI%2FpEVnDggwyOmYngsLMKBs%2BjYE8QqZPn92bwLcFdR2k8tBWsTOIviU4hQn0uXTYt4eznpr2SqP2atVQL5CDRAvJ7VYs38%2FX7NUN0r%2BfTW9nbgQ8zILfvcONe2PhF%2FyFD51jlQjK9NsIpkZhyqt7LFt0Ji88p6wVGcX6xxjOfN7PTUyKwI4VG5W81Orok52GeqDIJ2yYAU7Eh1cRQ6plWNXKxHf6xIhT34%2FJ4fN1Y1RYrCzbxUDIyto0cJ%2Bgl8z%2B966IO3dOL%2FHuEGDpPr1juQU7DIOdaH3x8aJBiCngOgxSWRELzrsu1kZqRarlLJlAoXm8blk%2BVI6TDHJ0Uf%2FTwnDWispZ8dxWDoxtTEDtotcSQuVZHiwvdA3lOgxG8YvdF82UXVk%2BlWRX0vhxbcILUn%2BU06djaK1P57mowrYtU8A%2BE8Fl6ceMK7JocIGOqUBXClE0Fg7tE6pJjdjNsvSQomsd9ME5%2BJi6pyWMfbax9VTn1E67QEh2190fIJ9Wro%2FbwKrwuGW1kKsnze74qxiv9YiE1%2FUubIUqesk2%2B0mZrazphIjZ5BhryX5am9RA%2FcAGdhGWCg%2Bb4u6PrQC8ycDDPn06qph5rSi%2F6%2F8tKdaowyqMxKb7Lqk4C9jyrOl6lICqj%2FD7aHtt%2BP%2BTOFU%2Fw04YogM2ST6&X-Amz-Signature=7064567aa07d173562481611277fab203f137dd0978f635c048d6c0574c7c201&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JJ3MZTV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGu7%2Bbn0xh0Z%2F2yI%2Bu7R3n0nfCe%2FA0Qs6FUaVF4167gIgOVP1QTtA8dmihTzDAtOL9WqayljqumDl1TJD2jH7J6kqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwEAu4g9Bk6ynaJ3SrcA%2BPefcgzoHtq4Pajq9GiBkYmZShqLI7UTJL7vpa9H6HfRLj5%2BhDslbpQSsSxvY1jyvzbpnli9LlJp%2Fb1QMFLpNqHOJff9xmrDzMCuWe2GI7kOzBe%2ByvDDmQugrA6g51d4O4GxNXEQBk74x7ylutXGCgvm18UnN2YHM%2BqMfpaScclJ4tkLin%2BwpGKIc9yCj%2BI2pwcIh6OPTI%2FpEVnDggwyOmYngsLMKBs%2BjYE8QqZPn92bwLcFdR2k8tBWsTOIviU4hQn0uXTYt4eznpr2SqP2atVQL5CDRAvJ7VYs38%2FX7NUN0r%2BfTW9nbgQ8zILfvcONe2PhF%2FyFD51jlQjK9NsIpkZhyqt7LFt0Ji88p6wVGcX6xxjOfN7PTUyKwI4VG5W81Orok52GeqDIJ2yYAU7Eh1cRQ6plWNXKxHf6xIhT34%2FJ4fN1Y1RYrCzbxUDIyto0cJ%2Bgl8z%2B966IO3dOL%2FHuEGDpPr1juQU7DIOdaH3x8aJBiCngOgxSWRELzrsu1kZqRarlLJlAoXm8blk%2BVI6TDHJ0Uf%2FTwnDWispZ8dxWDoxtTEDtotcSQuVZHiwvdA3lOgxG8YvdF82UXVk%2BlWRX0vhxbcILUn%2BU06djaK1P57mowrYtU8A%2BE8Fl6ceMK7JocIGOqUBXClE0Fg7tE6pJjdjNsvSQomsd9ME5%2BJi6pyWMfbax9VTn1E67QEh2190fIJ9Wro%2FbwKrwuGW1kKsnze74qxiv9YiE1%2FUubIUqesk2%2B0mZrazphIjZ5BhryX5am9RA%2FcAGdhGWCg%2Bb4u6PrQC8ycDDPn06qph5rSi%2F6%2F8tKdaowyqMxKb7Lqk4C9jyrOl6lICqj%2FD7aHtt%2BP%2BTOFU%2Fw04YogM2ST6&X-Amz-Signature=d79f13cce6b9e544fc3332e41bb69baffb12cec75ced4999194df0fc43cdeb6e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

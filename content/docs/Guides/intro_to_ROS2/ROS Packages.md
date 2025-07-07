---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2LDDV6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHX9OQaX7jmyDvEdOuZ2EWCaoHFfl5ucf%2B9eUdSgAqgwAiBytSoctCcS8jbkpiEmdwSzQx%2B1f%2F5bT0eS8D%2FDdL4dEir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMNPzF9R2Uq90N%2B5XRKtwDXQcl3VDqwnsCtvV09Y%2BRYvLXQN5bUqZ7ZPNPeyMfUHKruxhF7SssXPTUflpCy6Tz2p2rHz%2Buu0jZxeNfxI%2FV2lqaPG6m6I0PVNqsdV%2FFJTZJXhN%2F%2BH%2FPpoYQExVWOUDkmL9OqNVg6QFVpELyXknC9dD2fhUF8vp6S37GKebO31ZRcrnTVwQ9fByxETXfuCPdM1aENg4Z17Nf25Z4PetcfY%2BVO5LQKtLK0AOtdUmqxmDKjULQFZAWxvLRC6mFeaA2G%2BWnDEe4s4jOK5VzJix0itsUBNAFRylgPnMp5e%2F52Mqm1y8%2Fe6jcDLXttU%2B8KImUCbPj%2BIz9WtOYSlgq7SZf9qk8X2NC%2B%2FcKN10hqsoZKs3b9catRoLjodXpDklfGcplZuh2fVpsR5GiKwqlGOQ6FcTgdk9Eozim9UD0zMtuiGYJXBLnXOoYUZ8K9vVmmxKRH0J4tGh19Pqk9h9dND1Yf%2B3gJHU%2BnwCQb9fFP%2FJ5bodruCRn8N%2FTAelrlZ2k7I%2FicAigfqAn%2FtoZ153agY8Dcfcl6Sy928%2FturXpG0Ze26qosW9y6K2OO2gdKbtLjPJiH9hZdHE3brCAjFOtNlJRCKxDmn3oE7zzlg0jyW8PNneUNuTgdVBXBmc%2FmXYwsYKswwY6pgE8gHrvi3kLEB%2Fy9PYaLf1OywRZsvXOf7KfmRgwplqFEnSBu0G8wYcYBLtFGZgOr%2F%2BHxErdBXBlwSpmm13da4GAWxUOAQLLw5TfktJ%2ByYmF3%2Bg8bT7aZmH76LRP3Bf0j3CqYwEzYmfi5fh6F1Q1GF4JPUqIZvqcl4TEEewhWDjNHtkBKzWdJPm7P3p6S33Ocf96tChFMPQddhSNZtPRasygSxA0tLa8&X-Amz-Signature=ff9355927f474be546127d693c84fb8d33ea109244d911daef2114d422da698b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2LDDV6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHX9OQaX7jmyDvEdOuZ2EWCaoHFfl5ucf%2B9eUdSgAqgwAiBytSoctCcS8jbkpiEmdwSzQx%2B1f%2F5bT0eS8D%2FDdL4dEir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMNPzF9R2Uq90N%2B5XRKtwDXQcl3VDqwnsCtvV09Y%2BRYvLXQN5bUqZ7ZPNPeyMfUHKruxhF7SssXPTUflpCy6Tz2p2rHz%2Buu0jZxeNfxI%2FV2lqaPG6m6I0PVNqsdV%2FFJTZJXhN%2F%2BH%2FPpoYQExVWOUDkmL9OqNVg6QFVpELyXknC9dD2fhUF8vp6S37GKebO31ZRcrnTVwQ9fByxETXfuCPdM1aENg4Z17Nf25Z4PetcfY%2BVO5LQKtLK0AOtdUmqxmDKjULQFZAWxvLRC6mFeaA2G%2BWnDEe4s4jOK5VzJix0itsUBNAFRylgPnMp5e%2F52Mqm1y8%2Fe6jcDLXttU%2B8KImUCbPj%2BIz9WtOYSlgq7SZf9qk8X2NC%2B%2FcKN10hqsoZKs3b9catRoLjodXpDklfGcplZuh2fVpsR5GiKwqlGOQ6FcTgdk9Eozim9UD0zMtuiGYJXBLnXOoYUZ8K9vVmmxKRH0J4tGh19Pqk9h9dND1Yf%2B3gJHU%2BnwCQb9fFP%2FJ5bodruCRn8N%2FTAelrlZ2k7I%2FicAigfqAn%2FtoZ153agY8Dcfcl6Sy928%2FturXpG0Ze26qosW9y6K2OO2gdKbtLjPJiH9hZdHE3brCAjFOtNlJRCKxDmn3oE7zzlg0jyW8PNneUNuTgdVBXBmc%2FmXYwsYKswwY6pgE8gHrvi3kLEB%2Fy9PYaLf1OywRZsvXOf7KfmRgwplqFEnSBu0G8wYcYBLtFGZgOr%2F%2BHxErdBXBlwSpmm13da4GAWxUOAQLLw5TfktJ%2ByYmF3%2Bg8bT7aZmH76LRP3Bf0j3CqYwEzYmfi5fh6F1Q1GF4JPUqIZvqcl4TEEewhWDjNHtkBKzWdJPm7P3p6S33Ocf96tChFMPQddhSNZtPRasygSxA0tLa8&X-Amz-Signature=b75b507a6ff72d29a09d9e43bab4c7c4b9080b8e27bad9843073cad9bd92f311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2LDDV6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHX9OQaX7jmyDvEdOuZ2EWCaoHFfl5ucf%2B9eUdSgAqgwAiBytSoctCcS8jbkpiEmdwSzQx%2B1f%2F5bT0eS8D%2FDdL4dEir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMNPzF9R2Uq90N%2B5XRKtwDXQcl3VDqwnsCtvV09Y%2BRYvLXQN5bUqZ7ZPNPeyMfUHKruxhF7SssXPTUflpCy6Tz2p2rHz%2Buu0jZxeNfxI%2FV2lqaPG6m6I0PVNqsdV%2FFJTZJXhN%2F%2BH%2FPpoYQExVWOUDkmL9OqNVg6QFVpELyXknC9dD2fhUF8vp6S37GKebO31ZRcrnTVwQ9fByxETXfuCPdM1aENg4Z17Nf25Z4PetcfY%2BVO5LQKtLK0AOtdUmqxmDKjULQFZAWxvLRC6mFeaA2G%2BWnDEe4s4jOK5VzJix0itsUBNAFRylgPnMp5e%2F52Mqm1y8%2Fe6jcDLXttU%2B8KImUCbPj%2BIz9WtOYSlgq7SZf9qk8X2NC%2B%2FcKN10hqsoZKs3b9catRoLjodXpDklfGcplZuh2fVpsR5GiKwqlGOQ6FcTgdk9Eozim9UD0zMtuiGYJXBLnXOoYUZ8K9vVmmxKRH0J4tGh19Pqk9h9dND1Yf%2B3gJHU%2BnwCQb9fFP%2FJ5bodruCRn8N%2FTAelrlZ2k7I%2FicAigfqAn%2FtoZ153agY8Dcfcl6Sy928%2FturXpG0Ze26qosW9y6K2OO2gdKbtLjPJiH9hZdHE3brCAjFOtNlJRCKxDmn3oE7zzlg0jyW8PNneUNuTgdVBXBmc%2FmXYwsYKswwY6pgE8gHrvi3kLEB%2Fy9PYaLf1OywRZsvXOf7KfmRgwplqFEnSBu0G8wYcYBLtFGZgOr%2F%2BHxErdBXBlwSpmm13da4GAWxUOAQLLw5TfktJ%2ByYmF3%2Bg8bT7aZmH76LRP3Bf0j3CqYwEzYmfi5fh6F1Q1GF4JPUqIZvqcl4TEEewhWDjNHtkBKzWdJPm7P3p6S33Ocf96tChFMPQddhSNZtPRasygSxA0tLa8&X-Amz-Signature=cdfcc46989b4b6c96c39233c1a8a465be417325443d1d757c5199a0b58857546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2LDDV6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHX9OQaX7jmyDvEdOuZ2EWCaoHFfl5ucf%2B9eUdSgAqgwAiBytSoctCcS8jbkpiEmdwSzQx%2B1f%2F5bT0eS8D%2FDdL4dEir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMNPzF9R2Uq90N%2B5XRKtwDXQcl3VDqwnsCtvV09Y%2BRYvLXQN5bUqZ7ZPNPeyMfUHKruxhF7SssXPTUflpCy6Tz2p2rHz%2Buu0jZxeNfxI%2FV2lqaPG6m6I0PVNqsdV%2FFJTZJXhN%2F%2BH%2FPpoYQExVWOUDkmL9OqNVg6QFVpELyXknC9dD2fhUF8vp6S37GKebO31ZRcrnTVwQ9fByxETXfuCPdM1aENg4Z17Nf25Z4PetcfY%2BVO5LQKtLK0AOtdUmqxmDKjULQFZAWxvLRC6mFeaA2G%2BWnDEe4s4jOK5VzJix0itsUBNAFRylgPnMp5e%2F52Mqm1y8%2Fe6jcDLXttU%2B8KImUCbPj%2BIz9WtOYSlgq7SZf9qk8X2NC%2B%2FcKN10hqsoZKs3b9catRoLjodXpDklfGcplZuh2fVpsR5GiKwqlGOQ6FcTgdk9Eozim9UD0zMtuiGYJXBLnXOoYUZ8K9vVmmxKRH0J4tGh19Pqk9h9dND1Yf%2B3gJHU%2BnwCQb9fFP%2FJ5bodruCRn8N%2FTAelrlZ2k7I%2FicAigfqAn%2FtoZ153agY8Dcfcl6Sy928%2FturXpG0Ze26qosW9y6K2OO2gdKbtLjPJiH9hZdHE3brCAjFOtNlJRCKxDmn3oE7zzlg0jyW8PNneUNuTgdVBXBmc%2FmXYwsYKswwY6pgE8gHrvi3kLEB%2Fy9PYaLf1OywRZsvXOf7KfmRgwplqFEnSBu0G8wYcYBLtFGZgOr%2F%2BHxErdBXBlwSpmm13da4GAWxUOAQLLw5TfktJ%2ByYmF3%2Bg8bT7aZmH76LRP3Bf0j3CqYwEzYmfi5fh6F1Q1GF4JPUqIZvqcl4TEEewhWDjNHtkBKzWdJPm7P3p6S33Ocf96tChFMPQddhSNZtPRasygSxA0tLa8&X-Amz-Signature=f9729638c1ef0439b32bc601c6073603dc92e412b45b013947cf3a21f687b641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2LDDV6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHX9OQaX7jmyDvEdOuZ2EWCaoHFfl5ucf%2B9eUdSgAqgwAiBytSoctCcS8jbkpiEmdwSzQx%2B1f%2F5bT0eS8D%2FDdL4dEir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMNPzF9R2Uq90N%2B5XRKtwDXQcl3VDqwnsCtvV09Y%2BRYvLXQN5bUqZ7ZPNPeyMfUHKruxhF7SssXPTUflpCy6Tz2p2rHz%2Buu0jZxeNfxI%2FV2lqaPG6m6I0PVNqsdV%2FFJTZJXhN%2F%2BH%2FPpoYQExVWOUDkmL9OqNVg6QFVpELyXknC9dD2fhUF8vp6S37GKebO31ZRcrnTVwQ9fByxETXfuCPdM1aENg4Z17Nf25Z4PetcfY%2BVO5LQKtLK0AOtdUmqxmDKjULQFZAWxvLRC6mFeaA2G%2BWnDEe4s4jOK5VzJix0itsUBNAFRylgPnMp5e%2F52Mqm1y8%2Fe6jcDLXttU%2B8KImUCbPj%2BIz9WtOYSlgq7SZf9qk8X2NC%2B%2FcKN10hqsoZKs3b9catRoLjodXpDklfGcplZuh2fVpsR5GiKwqlGOQ6FcTgdk9Eozim9UD0zMtuiGYJXBLnXOoYUZ8K9vVmmxKRH0J4tGh19Pqk9h9dND1Yf%2B3gJHU%2BnwCQb9fFP%2FJ5bodruCRn8N%2FTAelrlZ2k7I%2FicAigfqAn%2FtoZ153agY8Dcfcl6Sy928%2FturXpG0Ze26qosW9y6K2OO2gdKbtLjPJiH9hZdHE3brCAjFOtNlJRCKxDmn3oE7zzlg0jyW8PNneUNuTgdVBXBmc%2FmXYwsYKswwY6pgE8gHrvi3kLEB%2Fy9PYaLf1OywRZsvXOf7KfmRgwplqFEnSBu0G8wYcYBLtFGZgOr%2F%2BHxErdBXBlwSpmm13da4GAWxUOAQLLw5TfktJ%2ByYmF3%2Bg8bT7aZmH76LRP3Bf0j3CqYwEzYmfi5fh6F1Q1GF4JPUqIZvqcl4TEEewhWDjNHtkBKzWdJPm7P3p6S33Ocf96tChFMPQddhSNZtPRasygSxA0tLa8&X-Amz-Signature=f1f476e100c92fc6967b520bf2ad5c8751f373cbc560e6c9ab7243a82e0a7bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2LDDV6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHX9OQaX7jmyDvEdOuZ2EWCaoHFfl5ucf%2B9eUdSgAqgwAiBytSoctCcS8jbkpiEmdwSzQx%2B1f%2F5bT0eS8D%2FDdL4dEir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMNPzF9R2Uq90N%2B5XRKtwDXQcl3VDqwnsCtvV09Y%2BRYvLXQN5bUqZ7ZPNPeyMfUHKruxhF7SssXPTUflpCy6Tz2p2rHz%2Buu0jZxeNfxI%2FV2lqaPG6m6I0PVNqsdV%2FFJTZJXhN%2F%2BH%2FPpoYQExVWOUDkmL9OqNVg6QFVpELyXknC9dD2fhUF8vp6S37GKebO31ZRcrnTVwQ9fByxETXfuCPdM1aENg4Z17Nf25Z4PetcfY%2BVO5LQKtLK0AOtdUmqxmDKjULQFZAWxvLRC6mFeaA2G%2BWnDEe4s4jOK5VzJix0itsUBNAFRylgPnMp5e%2F52Mqm1y8%2Fe6jcDLXttU%2B8KImUCbPj%2BIz9WtOYSlgq7SZf9qk8X2NC%2B%2FcKN10hqsoZKs3b9catRoLjodXpDklfGcplZuh2fVpsR5GiKwqlGOQ6FcTgdk9Eozim9UD0zMtuiGYJXBLnXOoYUZ8K9vVmmxKRH0J4tGh19Pqk9h9dND1Yf%2B3gJHU%2BnwCQb9fFP%2FJ5bodruCRn8N%2FTAelrlZ2k7I%2FicAigfqAn%2FtoZ153agY8Dcfcl6Sy928%2FturXpG0Ze26qosW9y6K2OO2gdKbtLjPJiH9hZdHE3brCAjFOtNlJRCKxDmn3oE7zzlg0jyW8PNneUNuTgdVBXBmc%2FmXYwsYKswwY6pgE8gHrvi3kLEB%2Fy9PYaLf1OywRZsvXOf7KfmRgwplqFEnSBu0G8wYcYBLtFGZgOr%2F%2BHxErdBXBlwSpmm13da4GAWxUOAQLLw5TfktJ%2ByYmF3%2Bg8bT7aZmH76LRP3Bf0j3CqYwEzYmfi5fh6F1Q1GF4JPUqIZvqcl4TEEewhWDjNHtkBKzWdJPm7P3p6S33Ocf96tChFMPQddhSNZtPRasygSxA0tLa8&X-Amz-Signature=52acaa28ead69f460ba09eb22daa130c5a8831c1dfa8feb03c9fbec2a5c84945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2LDDV6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHX9OQaX7jmyDvEdOuZ2EWCaoHFfl5ucf%2B9eUdSgAqgwAiBytSoctCcS8jbkpiEmdwSzQx%2B1f%2F5bT0eS8D%2FDdL4dEir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMNPzF9R2Uq90N%2B5XRKtwDXQcl3VDqwnsCtvV09Y%2BRYvLXQN5bUqZ7ZPNPeyMfUHKruxhF7SssXPTUflpCy6Tz2p2rHz%2Buu0jZxeNfxI%2FV2lqaPG6m6I0PVNqsdV%2FFJTZJXhN%2F%2BH%2FPpoYQExVWOUDkmL9OqNVg6QFVpELyXknC9dD2fhUF8vp6S37GKebO31ZRcrnTVwQ9fByxETXfuCPdM1aENg4Z17Nf25Z4PetcfY%2BVO5LQKtLK0AOtdUmqxmDKjULQFZAWxvLRC6mFeaA2G%2BWnDEe4s4jOK5VzJix0itsUBNAFRylgPnMp5e%2F52Mqm1y8%2Fe6jcDLXttU%2B8KImUCbPj%2BIz9WtOYSlgq7SZf9qk8X2NC%2B%2FcKN10hqsoZKs3b9catRoLjodXpDklfGcplZuh2fVpsR5GiKwqlGOQ6FcTgdk9Eozim9UD0zMtuiGYJXBLnXOoYUZ8K9vVmmxKRH0J4tGh19Pqk9h9dND1Yf%2B3gJHU%2BnwCQb9fFP%2FJ5bodruCRn8N%2FTAelrlZ2k7I%2FicAigfqAn%2FtoZ153agY8Dcfcl6Sy928%2FturXpG0Ze26qosW9y6K2OO2gdKbtLjPJiH9hZdHE3brCAjFOtNlJRCKxDmn3oE7zzlg0jyW8PNneUNuTgdVBXBmc%2FmXYwsYKswwY6pgE8gHrvi3kLEB%2Fy9PYaLf1OywRZsvXOf7KfmRgwplqFEnSBu0G8wYcYBLtFGZgOr%2F%2BHxErdBXBlwSpmm13da4GAWxUOAQLLw5TfktJ%2ByYmF3%2Bg8bT7aZmH76LRP3Bf0j3CqYwEzYmfi5fh6F1Q1GF4JPUqIZvqcl4TEEewhWDjNHtkBKzWdJPm7P3p6S33Ocf96tChFMPQddhSNZtPRasygSxA0tLa8&X-Amz-Signature=eecc808bdbd3b0883d03243ac0c7c99759fedc53f218d37f917e5fc60243dd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

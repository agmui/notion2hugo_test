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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAQRQXZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAWAJj17hzjC5xY%2FW2wy%2BpZF5mLmZTFS9HfX1xB79OaCAiAJy4jLnhSd4wb%2F%2BWgOdS0w%2BuLoXULO5cRZjzskqgwwCSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaVt1kxYtnhtuZo4yKtwDWCECFXWMaMq0ssuidbhXO89yfBq6Rvwd0CdWWNSYIstiOlzOmfupGcxwAGuapyup5UxQU7UP5F9z%2FwpJ042X%2Fqenyva7D9d0JJ8si4LtTGRMdfRg0Io39hWvh4UA7BzBdqHAyL%2FHyofsDAFC6fja3wp2xX8hOD0EB3lSFCbDHg4rSCnpphPTW3NKY%2FogjYqYqYvkma1SnjphZdJ9sN7EQqXZHl5QSX%2BS0%2FnkABVe0o1YKQPw7nyNn0elkCLSjCNlx18Zr%2FqMlkEA7GNRYiNkBcZsJnNTWCjaBiNKuMl%2Bfvk0ENX4u2OqJy6LV6MSJ5bIHFwZx3GEYmmwkT%2B7Rt%2BSyOWsLD69ySjMf1RGGQ%2BJWPw%2FUibLF140AECyijNjBQfpVrINL2zSS2j6jPtPfZTwz82OKpKiuRYCDT7PF%2Bt9prZOwGYRDGc5Oo%2BiC9ODRYubu6c6x0BB9C%2FihACkTQZZF9m8bcNDT9R%2B5xTC1UrEBz5OuZVLrfLDrCwwa8YoqUZXAkXrQFUnbFz9Qt%2FgbqsVTCpqFIT5ymi58Nd5vJQ2BUzUBdDiSwbtUCWAT59DaRUKWiPkrXph7ZBVvCLw9GvloaDMWIKQhufBWt7mIN5z%2Bc0eDbo9JMkmb4WEbFsw5LPawAY6pgEOcjWfI9ADufGzy9FL8lsDjMlPCP7eBLTo5DY4bFQZyP8Ty48XF9LQ3oM97AyZr%2B8o9tCJiNb3%2FNRBUu8yhfep9ajYp6qQaKQQcl%2BZZfM77H7%2BV3dScVYzTQFoJg6chZCwIgL16Ekz6pxGAW8YAVxzAvx4ySwHhJ34KrHN8KY33gwSqx4bI49%2FHEmlL9qa68rymLS7u2H48Dfcdufh0%2BDLHhkTDyyQ&X-Amz-Signature=85dd58f26a28d371e65d4d2454434e97a587d10c4e7baf91a5b0b7ed33ae74c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAQRQXZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAWAJj17hzjC5xY%2FW2wy%2BpZF5mLmZTFS9HfX1xB79OaCAiAJy4jLnhSd4wb%2F%2BWgOdS0w%2BuLoXULO5cRZjzskqgwwCSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaVt1kxYtnhtuZo4yKtwDWCECFXWMaMq0ssuidbhXO89yfBq6Rvwd0CdWWNSYIstiOlzOmfupGcxwAGuapyup5UxQU7UP5F9z%2FwpJ042X%2Fqenyva7D9d0JJ8si4LtTGRMdfRg0Io39hWvh4UA7BzBdqHAyL%2FHyofsDAFC6fja3wp2xX8hOD0EB3lSFCbDHg4rSCnpphPTW3NKY%2FogjYqYqYvkma1SnjphZdJ9sN7EQqXZHl5QSX%2BS0%2FnkABVe0o1YKQPw7nyNn0elkCLSjCNlx18Zr%2FqMlkEA7GNRYiNkBcZsJnNTWCjaBiNKuMl%2Bfvk0ENX4u2OqJy6LV6MSJ5bIHFwZx3GEYmmwkT%2B7Rt%2BSyOWsLD69ySjMf1RGGQ%2BJWPw%2FUibLF140AECyijNjBQfpVrINL2zSS2j6jPtPfZTwz82OKpKiuRYCDT7PF%2Bt9prZOwGYRDGc5Oo%2BiC9ODRYubu6c6x0BB9C%2FihACkTQZZF9m8bcNDT9R%2B5xTC1UrEBz5OuZVLrfLDrCwwa8YoqUZXAkXrQFUnbFz9Qt%2FgbqsVTCpqFIT5ymi58Nd5vJQ2BUzUBdDiSwbtUCWAT59DaRUKWiPkrXph7ZBVvCLw9GvloaDMWIKQhufBWt7mIN5z%2Bc0eDbo9JMkmb4WEbFsw5LPawAY6pgEOcjWfI9ADufGzy9FL8lsDjMlPCP7eBLTo5DY4bFQZyP8Ty48XF9LQ3oM97AyZr%2B8o9tCJiNb3%2FNRBUu8yhfep9ajYp6qQaKQQcl%2BZZfM77H7%2BV3dScVYzTQFoJg6chZCwIgL16Ekz6pxGAW8YAVxzAvx4ySwHhJ34KrHN8KY33gwSqx4bI49%2FHEmlL9qa68rymLS7u2H48Dfcdufh0%2BDLHhkTDyyQ&X-Amz-Signature=de691f703711144aeca3cb86e7b5ec4c342aae069089699dfe71dc7b188157e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAQRQXZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAWAJj17hzjC5xY%2FW2wy%2BpZF5mLmZTFS9HfX1xB79OaCAiAJy4jLnhSd4wb%2F%2BWgOdS0w%2BuLoXULO5cRZjzskqgwwCSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaVt1kxYtnhtuZo4yKtwDWCECFXWMaMq0ssuidbhXO89yfBq6Rvwd0CdWWNSYIstiOlzOmfupGcxwAGuapyup5UxQU7UP5F9z%2FwpJ042X%2Fqenyva7D9d0JJ8si4LtTGRMdfRg0Io39hWvh4UA7BzBdqHAyL%2FHyofsDAFC6fja3wp2xX8hOD0EB3lSFCbDHg4rSCnpphPTW3NKY%2FogjYqYqYvkma1SnjphZdJ9sN7EQqXZHl5QSX%2BS0%2FnkABVe0o1YKQPw7nyNn0elkCLSjCNlx18Zr%2FqMlkEA7GNRYiNkBcZsJnNTWCjaBiNKuMl%2Bfvk0ENX4u2OqJy6LV6MSJ5bIHFwZx3GEYmmwkT%2B7Rt%2BSyOWsLD69ySjMf1RGGQ%2BJWPw%2FUibLF140AECyijNjBQfpVrINL2zSS2j6jPtPfZTwz82OKpKiuRYCDT7PF%2Bt9prZOwGYRDGc5Oo%2BiC9ODRYubu6c6x0BB9C%2FihACkTQZZF9m8bcNDT9R%2B5xTC1UrEBz5OuZVLrfLDrCwwa8YoqUZXAkXrQFUnbFz9Qt%2FgbqsVTCpqFIT5ymi58Nd5vJQ2BUzUBdDiSwbtUCWAT59DaRUKWiPkrXph7ZBVvCLw9GvloaDMWIKQhufBWt7mIN5z%2Bc0eDbo9JMkmb4WEbFsw5LPawAY6pgEOcjWfI9ADufGzy9FL8lsDjMlPCP7eBLTo5DY4bFQZyP8Ty48XF9LQ3oM97AyZr%2B8o9tCJiNb3%2FNRBUu8yhfep9ajYp6qQaKQQcl%2BZZfM77H7%2BV3dScVYzTQFoJg6chZCwIgL16Ekz6pxGAW8YAVxzAvx4ySwHhJ34KrHN8KY33gwSqx4bI49%2FHEmlL9qa68rymLS7u2H48Dfcdufh0%2BDLHhkTDyyQ&X-Amz-Signature=81aea4b2f0e016841cefaaa84f8d76b34e576292a9d9cfc91ecba573e3405743&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAQRQXZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAWAJj17hzjC5xY%2FW2wy%2BpZF5mLmZTFS9HfX1xB79OaCAiAJy4jLnhSd4wb%2F%2BWgOdS0w%2BuLoXULO5cRZjzskqgwwCSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaVt1kxYtnhtuZo4yKtwDWCECFXWMaMq0ssuidbhXO89yfBq6Rvwd0CdWWNSYIstiOlzOmfupGcxwAGuapyup5UxQU7UP5F9z%2FwpJ042X%2Fqenyva7D9d0JJ8si4LtTGRMdfRg0Io39hWvh4UA7BzBdqHAyL%2FHyofsDAFC6fja3wp2xX8hOD0EB3lSFCbDHg4rSCnpphPTW3NKY%2FogjYqYqYvkma1SnjphZdJ9sN7EQqXZHl5QSX%2BS0%2FnkABVe0o1YKQPw7nyNn0elkCLSjCNlx18Zr%2FqMlkEA7GNRYiNkBcZsJnNTWCjaBiNKuMl%2Bfvk0ENX4u2OqJy6LV6MSJ5bIHFwZx3GEYmmwkT%2B7Rt%2BSyOWsLD69ySjMf1RGGQ%2BJWPw%2FUibLF140AECyijNjBQfpVrINL2zSS2j6jPtPfZTwz82OKpKiuRYCDT7PF%2Bt9prZOwGYRDGc5Oo%2BiC9ODRYubu6c6x0BB9C%2FihACkTQZZF9m8bcNDT9R%2B5xTC1UrEBz5OuZVLrfLDrCwwa8YoqUZXAkXrQFUnbFz9Qt%2FgbqsVTCpqFIT5ymi58Nd5vJQ2BUzUBdDiSwbtUCWAT59DaRUKWiPkrXph7ZBVvCLw9GvloaDMWIKQhufBWt7mIN5z%2Bc0eDbo9JMkmb4WEbFsw5LPawAY6pgEOcjWfI9ADufGzy9FL8lsDjMlPCP7eBLTo5DY4bFQZyP8Ty48XF9LQ3oM97AyZr%2B8o9tCJiNb3%2FNRBUu8yhfep9ajYp6qQaKQQcl%2BZZfM77H7%2BV3dScVYzTQFoJg6chZCwIgL16Ekz6pxGAW8YAVxzAvx4ySwHhJ34KrHN8KY33gwSqx4bI49%2FHEmlL9qa68rymLS7u2H48Dfcdufh0%2BDLHhkTDyyQ&X-Amz-Signature=b4abaf9154977080fa2f84103765a0851daa7562cfbdceaa1cd190b24c6bdf2e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAQRQXZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAWAJj17hzjC5xY%2FW2wy%2BpZF5mLmZTFS9HfX1xB79OaCAiAJy4jLnhSd4wb%2F%2BWgOdS0w%2BuLoXULO5cRZjzskqgwwCSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaVt1kxYtnhtuZo4yKtwDWCECFXWMaMq0ssuidbhXO89yfBq6Rvwd0CdWWNSYIstiOlzOmfupGcxwAGuapyup5UxQU7UP5F9z%2FwpJ042X%2Fqenyva7D9d0JJ8si4LtTGRMdfRg0Io39hWvh4UA7BzBdqHAyL%2FHyofsDAFC6fja3wp2xX8hOD0EB3lSFCbDHg4rSCnpphPTW3NKY%2FogjYqYqYvkma1SnjphZdJ9sN7EQqXZHl5QSX%2BS0%2FnkABVe0o1YKQPw7nyNn0elkCLSjCNlx18Zr%2FqMlkEA7GNRYiNkBcZsJnNTWCjaBiNKuMl%2Bfvk0ENX4u2OqJy6LV6MSJ5bIHFwZx3GEYmmwkT%2B7Rt%2BSyOWsLD69ySjMf1RGGQ%2BJWPw%2FUibLF140AECyijNjBQfpVrINL2zSS2j6jPtPfZTwz82OKpKiuRYCDT7PF%2Bt9prZOwGYRDGc5Oo%2BiC9ODRYubu6c6x0BB9C%2FihACkTQZZF9m8bcNDT9R%2B5xTC1UrEBz5OuZVLrfLDrCwwa8YoqUZXAkXrQFUnbFz9Qt%2FgbqsVTCpqFIT5ymi58Nd5vJQ2BUzUBdDiSwbtUCWAT59DaRUKWiPkrXph7ZBVvCLw9GvloaDMWIKQhufBWt7mIN5z%2Bc0eDbo9JMkmb4WEbFsw5LPawAY6pgEOcjWfI9ADufGzy9FL8lsDjMlPCP7eBLTo5DY4bFQZyP8Ty48XF9LQ3oM97AyZr%2B8o9tCJiNb3%2FNRBUu8yhfep9ajYp6qQaKQQcl%2BZZfM77H7%2BV3dScVYzTQFoJg6chZCwIgL16Ekz6pxGAW8YAVxzAvx4ySwHhJ34KrHN8KY33gwSqx4bI49%2FHEmlL9qa68rymLS7u2H48Dfcdufh0%2BDLHhkTDyyQ&X-Amz-Signature=e9c7242090604fc849da003aaf7573cf52cc4fc112866671acd7f30a9a643ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAQRQXZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAWAJj17hzjC5xY%2FW2wy%2BpZF5mLmZTFS9HfX1xB79OaCAiAJy4jLnhSd4wb%2F%2BWgOdS0w%2BuLoXULO5cRZjzskqgwwCSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaVt1kxYtnhtuZo4yKtwDWCECFXWMaMq0ssuidbhXO89yfBq6Rvwd0CdWWNSYIstiOlzOmfupGcxwAGuapyup5UxQU7UP5F9z%2FwpJ042X%2Fqenyva7D9d0JJ8si4LtTGRMdfRg0Io39hWvh4UA7BzBdqHAyL%2FHyofsDAFC6fja3wp2xX8hOD0EB3lSFCbDHg4rSCnpphPTW3NKY%2FogjYqYqYvkma1SnjphZdJ9sN7EQqXZHl5QSX%2BS0%2FnkABVe0o1YKQPw7nyNn0elkCLSjCNlx18Zr%2FqMlkEA7GNRYiNkBcZsJnNTWCjaBiNKuMl%2Bfvk0ENX4u2OqJy6LV6MSJ5bIHFwZx3GEYmmwkT%2B7Rt%2BSyOWsLD69ySjMf1RGGQ%2BJWPw%2FUibLF140AECyijNjBQfpVrINL2zSS2j6jPtPfZTwz82OKpKiuRYCDT7PF%2Bt9prZOwGYRDGc5Oo%2BiC9ODRYubu6c6x0BB9C%2FihACkTQZZF9m8bcNDT9R%2B5xTC1UrEBz5OuZVLrfLDrCwwa8YoqUZXAkXrQFUnbFz9Qt%2FgbqsVTCpqFIT5ymi58Nd5vJQ2BUzUBdDiSwbtUCWAT59DaRUKWiPkrXph7ZBVvCLw9GvloaDMWIKQhufBWt7mIN5z%2Bc0eDbo9JMkmb4WEbFsw5LPawAY6pgEOcjWfI9ADufGzy9FL8lsDjMlPCP7eBLTo5DY4bFQZyP8Ty48XF9LQ3oM97AyZr%2B8o9tCJiNb3%2FNRBUu8yhfep9ajYp6qQaKQQcl%2BZZfM77H7%2BV3dScVYzTQFoJg6chZCwIgL16Ekz6pxGAW8YAVxzAvx4ySwHhJ34KrHN8KY33gwSqx4bI49%2FHEmlL9qa68rymLS7u2H48Dfcdufh0%2BDLHhkTDyyQ&X-Amz-Signature=73659e55fa7ff779ee1278580834823eb2138009720e8f7599a81fa4ae3a7562&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAQRQXZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAWAJj17hzjC5xY%2FW2wy%2BpZF5mLmZTFS9HfX1xB79OaCAiAJy4jLnhSd4wb%2F%2BWgOdS0w%2BuLoXULO5cRZjzskqgwwCSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaVt1kxYtnhtuZo4yKtwDWCECFXWMaMq0ssuidbhXO89yfBq6Rvwd0CdWWNSYIstiOlzOmfupGcxwAGuapyup5UxQU7UP5F9z%2FwpJ042X%2Fqenyva7D9d0JJ8si4LtTGRMdfRg0Io39hWvh4UA7BzBdqHAyL%2FHyofsDAFC6fja3wp2xX8hOD0EB3lSFCbDHg4rSCnpphPTW3NKY%2FogjYqYqYvkma1SnjphZdJ9sN7EQqXZHl5QSX%2BS0%2FnkABVe0o1YKQPw7nyNn0elkCLSjCNlx18Zr%2FqMlkEA7GNRYiNkBcZsJnNTWCjaBiNKuMl%2Bfvk0ENX4u2OqJy6LV6MSJ5bIHFwZx3GEYmmwkT%2B7Rt%2BSyOWsLD69ySjMf1RGGQ%2BJWPw%2FUibLF140AECyijNjBQfpVrINL2zSS2j6jPtPfZTwz82OKpKiuRYCDT7PF%2Bt9prZOwGYRDGc5Oo%2BiC9ODRYubu6c6x0BB9C%2FihACkTQZZF9m8bcNDT9R%2B5xTC1UrEBz5OuZVLrfLDrCwwa8YoqUZXAkXrQFUnbFz9Qt%2FgbqsVTCpqFIT5ymi58Nd5vJQ2BUzUBdDiSwbtUCWAT59DaRUKWiPkrXph7ZBVvCLw9GvloaDMWIKQhufBWt7mIN5z%2Bc0eDbo9JMkmb4WEbFsw5LPawAY6pgEOcjWfI9ADufGzy9FL8lsDjMlPCP7eBLTo5DY4bFQZyP8Ty48XF9LQ3oM97AyZr%2B8o9tCJiNb3%2FNRBUu8yhfep9ajYp6qQaKQQcl%2BZZfM77H7%2BV3dScVYzTQFoJg6chZCwIgL16Ekz6pxGAW8YAVxzAvx4ySwHhJ34KrHN8KY33gwSqx4bI49%2FHEmlL9qa68rymLS7u2H48Dfcdufh0%2BDLHhkTDyyQ&X-Amz-Signature=c379bdc9d6b0ff73dcbaa5bc1091e80ff6137170111f083507b2fdc32a9d3a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

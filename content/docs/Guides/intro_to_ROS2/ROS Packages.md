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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVQIZHQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClYmmQPzm71GAL52D96YubMNqTI7SYFkisDLEggc6n3AiBOnKGjuNXCQja61TCUxrhi3VZkf0XuHo%2BYv0MaQW9HUSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJX%2BDIQCOaoef67lFKtwDF3iVWOhH8ldA7g0HXEGkxud4IwV6nAztsvn8WeqjXyNq%2FqI%2BhW7oF2T9eS0gmytvGQFrLF5ljqGwtZf7rnSpFwuRBZAPZnVxsNZhKe0jGs129N2dkWiSzUqegR3msPpoYIVa1MBjvhX7fSJoDlRikLb%2FNMfAYEruRTJo4umWVbnMJXvM2zCtBBOKHKB6WySs31fviu9AAzd0JYQV195gUKObec3j8OFOLflJDGHQao2dAOlxQleCEkxCKhs4KgOEeHTuK1Bi7L2pkp0YAxS79dKdnPw5CcMzWpNy14QfDMv8rvwVCnykGxPka2c%2FjMZNZOuZFS6fcF%2FHeOeDaB68YYz4dT5%2Fkho%2FuY8ykU32Mk7mo38KrlBVLj5ZDYxf6tY8km5jmRVXKS93jtVM06wsF2Hyd%2Bxo123%2BFDL8nQ49l2cpfnIBNARtsdIE4aUcazRmbV5scHBRLrg%2Bf3%2BpznSkahruIYZkGueRtRcIIUavWxFoX5e6CwDF1tc5%2FJyx%2Fd8oxEgbD%2F9eyp0aFA%2BMDigWccLD6aHPT5Y9oJlb%2Fi2RKkRI2v5d66GlIWw%2FvIIZ1CNlDwU74E9R9L%2FGgu0MuvltkzcysH2nhvoc2JP09hirmhOe9Y71SRDzt6E%2BX64wspi1vQY6pgHhxC8n5FRF1XeiCw9YkWJz%2BUIZKKPjtg0PjPj%2F85tA%2BPi%2Ba%2BnljfWufNLf6yQfuxeqPS6jrF5G2Ha%2FJg2v9iFYpcY1jNyghoA%2B0B4KRz1RTQnmDHKQQVy01stjQQ%2BlYc6X74RAQT7L%2BY%2BPzhsZvTGGD9BX%2BUUBRaIibJ3yswKRnih9nzrlkWlTinV8PUH%2FBFVbEn0greSLn%2FYFDfZDJbawoJuaCZN0&X-Amz-Signature=e9a4cf428f6abbc375b50ca0e55a9dea3ec3f981c608923ee02ef100e6c59667&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVQIZHQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClYmmQPzm71GAL52D96YubMNqTI7SYFkisDLEggc6n3AiBOnKGjuNXCQja61TCUxrhi3VZkf0XuHo%2BYv0MaQW9HUSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJX%2BDIQCOaoef67lFKtwDF3iVWOhH8ldA7g0HXEGkxud4IwV6nAztsvn8WeqjXyNq%2FqI%2BhW7oF2T9eS0gmytvGQFrLF5ljqGwtZf7rnSpFwuRBZAPZnVxsNZhKe0jGs129N2dkWiSzUqegR3msPpoYIVa1MBjvhX7fSJoDlRikLb%2FNMfAYEruRTJo4umWVbnMJXvM2zCtBBOKHKB6WySs31fviu9AAzd0JYQV195gUKObec3j8OFOLflJDGHQao2dAOlxQleCEkxCKhs4KgOEeHTuK1Bi7L2pkp0YAxS79dKdnPw5CcMzWpNy14QfDMv8rvwVCnykGxPka2c%2FjMZNZOuZFS6fcF%2FHeOeDaB68YYz4dT5%2Fkho%2FuY8ykU32Mk7mo38KrlBVLj5ZDYxf6tY8km5jmRVXKS93jtVM06wsF2Hyd%2Bxo123%2BFDL8nQ49l2cpfnIBNARtsdIE4aUcazRmbV5scHBRLrg%2Bf3%2BpznSkahruIYZkGueRtRcIIUavWxFoX5e6CwDF1tc5%2FJyx%2Fd8oxEgbD%2F9eyp0aFA%2BMDigWccLD6aHPT5Y9oJlb%2Fi2RKkRI2v5d66GlIWw%2FvIIZ1CNlDwU74E9R9L%2FGgu0MuvltkzcysH2nhvoc2JP09hirmhOe9Y71SRDzt6E%2BX64wspi1vQY6pgHhxC8n5FRF1XeiCw9YkWJz%2BUIZKKPjtg0PjPj%2F85tA%2BPi%2Ba%2BnljfWufNLf6yQfuxeqPS6jrF5G2Ha%2FJg2v9iFYpcY1jNyghoA%2B0B4KRz1RTQnmDHKQQVy01stjQQ%2BlYc6X74RAQT7L%2BY%2BPzhsZvTGGD9BX%2BUUBRaIibJ3yswKRnih9nzrlkWlTinV8PUH%2FBFVbEn0greSLn%2FYFDfZDJbawoJuaCZN0&X-Amz-Signature=aadb33154fed096be7e8e4a06fd85c4867da7cf1c189179f982dd8d57c32622d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVQIZHQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClYmmQPzm71GAL52D96YubMNqTI7SYFkisDLEggc6n3AiBOnKGjuNXCQja61TCUxrhi3VZkf0XuHo%2BYv0MaQW9HUSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJX%2BDIQCOaoef67lFKtwDF3iVWOhH8ldA7g0HXEGkxud4IwV6nAztsvn8WeqjXyNq%2FqI%2BhW7oF2T9eS0gmytvGQFrLF5ljqGwtZf7rnSpFwuRBZAPZnVxsNZhKe0jGs129N2dkWiSzUqegR3msPpoYIVa1MBjvhX7fSJoDlRikLb%2FNMfAYEruRTJo4umWVbnMJXvM2zCtBBOKHKB6WySs31fviu9AAzd0JYQV195gUKObec3j8OFOLflJDGHQao2dAOlxQleCEkxCKhs4KgOEeHTuK1Bi7L2pkp0YAxS79dKdnPw5CcMzWpNy14QfDMv8rvwVCnykGxPka2c%2FjMZNZOuZFS6fcF%2FHeOeDaB68YYz4dT5%2Fkho%2FuY8ykU32Mk7mo38KrlBVLj5ZDYxf6tY8km5jmRVXKS93jtVM06wsF2Hyd%2Bxo123%2BFDL8nQ49l2cpfnIBNARtsdIE4aUcazRmbV5scHBRLrg%2Bf3%2BpznSkahruIYZkGueRtRcIIUavWxFoX5e6CwDF1tc5%2FJyx%2Fd8oxEgbD%2F9eyp0aFA%2BMDigWccLD6aHPT5Y9oJlb%2Fi2RKkRI2v5d66GlIWw%2FvIIZ1CNlDwU74E9R9L%2FGgu0MuvltkzcysH2nhvoc2JP09hirmhOe9Y71SRDzt6E%2BX64wspi1vQY6pgHhxC8n5FRF1XeiCw9YkWJz%2BUIZKKPjtg0PjPj%2F85tA%2BPi%2Ba%2BnljfWufNLf6yQfuxeqPS6jrF5G2Ha%2FJg2v9iFYpcY1jNyghoA%2B0B4KRz1RTQnmDHKQQVy01stjQQ%2BlYc6X74RAQT7L%2BY%2BPzhsZvTGGD9BX%2BUUBRaIibJ3yswKRnih9nzrlkWlTinV8PUH%2FBFVbEn0greSLn%2FYFDfZDJbawoJuaCZN0&X-Amz-Signature=31ecf26f12e6876d0c6dcb4e0f168de5f89d9b91a0f2b9422ee8d6849e054f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVQIZHQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClYmmQPzm71GAL52D96YubMNqTI7SYFkisDLEggc6n3AiBOnKGjuNXCQja61TCUxrhi3VZkf0XuHo%2BYv0MaQW9HUSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJX%2BDIQCOaoef67lFKtwDF3iVWOhH8ldA7g0HXEGkxud4IwV6nAztsvn8WeqjXyNq%2FqI%2BhW7oF2T9eS0gmytvGQFrLF5ljqGwtZf7rnSpFwuRBZAPZnVxsNZhKe0jGs129N2dkWiSzUqegR3msPpoYIVa1MBjvhX7fSJoDlRikLb%2FNMfAYEruRTJo4umWVbnMJXvM2zCtBBOKHKB6WySs31fviu9AAzd0JYQV195gUKObec3j8OFOLflJDGHQao2dAOlxQleCEkxCKhs4KgOEeHTuK1Bi7L2pkp0YAxS79dKdnPw5CcMzWpNy14QfDMv8rvwVCnykGxPka2c%2FjMZNZOuZFS6fcF%2FHeOeDaB68YYz4dT5%2Fkho%2FuY8ykU32Mk7mo38KrlBVLj5ZDYxf6tY8km5jmRVXKS93jtVM06wsF2Hyd%2Bxo123%2BFDL8nQ49l2cpfnIBNARtsdIE4aUcazRmbV5scHBRLrg%2Bf3%2BpznSkahruIYZkGueRtRcIIUavWxFoX5e6CwDF1tc5%2FJyx%2Fd8oxEgbD%2F9eyp0aFA%2BMDigWccLD6aHPT5Y9oJlb%2Fi2RKkRI2v5d66GlIWw%2FvIIZ1CNlDwU74E9R9L%2FGgu0MuvltkzcysH2nhvoc2JP09hirmhOe9Y71SRDzt6E%2BX64wspi1vQY6pgHhxC8n5FRF1XeiCw9YkWJz%2BUIZKKPjtg0PjPj%2F85tA%2BPi%2Ba%2BnljfWufNLf6yQfuxeqPS6jrF5G2Ha%2FJg2v9iFYpcY1jNyghoA%2B0B4KRz1RTQnmDHKQQVy01stjQQ%2BlYc6X74RAQT7L%2BY%2BPzhsZvTGGD9BX%2BUUBRaIibJ3yswKRnih9nzrlkWlTinV8PUH%2FBFVbEn0greSLn%2FYFDfZDJbawoJuaCZN0&X-Amz-Signature=19af553892e872574025ce5190d4022958cccc927328b92644df04f546f9bbb0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVQIZHQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClYmmQPzm71GAL52D96YubMNqTI7SYFkisDLEggc6n3AiBOnKGjuNXCQja61TCUxrhi3VZkf0XuHo%2BYv0MaQW9HUSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJX%2BDIQCOaoef67lFKtwDF3iVWOhH8ldA7g0HXEGkxud4IwV6nAztsvn8WeqjXyNq%2FqI%2BhW7oF2T9eS0gmytvGQFrLF5ljqGwtZf7rnSpFwuRBZAPZnVxsNZhKe0jGs129N2dkWiSzUqegR3msPpoYIVa1MBjvhX7fSJoDlRikLb%2FNMfAYEruRTJo4umWVbnMJXvM2zCtBBOKHKB6WySs31fviu9AAzd0JYQV195gUKObec3j8OFOLflJDGHQao2dAOlxQleCEkxCKhs4KgOEeHTuK1Bi7L2pkp0YAxS79dKdnPw5CcMzWpNy14QfDMv8rvwVCnykGxPka2c%2FjMZNZOuZFS6fcF%2FHeOeDaB68YYz4dT5%2Fkho%2FuY8ykU32Mk7mo38KrlBVLj5ZDYxf6tY8km5jmRVXKS93jtVM06wsF2Hyd%2Bxo123%2BFDL8nQ49l2cpfnIBNARtsdIE4aUcazRmbV5scHBRLrg%2Bf3%2BpznSkahruIYZkGueRtRcIIUavWxFoX5e6CwDF1tc5%2FJyx%2Fd8oxEgbD%2F9eyp0aFA%2BMDigWccLD6aHPT5Y9oJlb%2Fi2RKkRI2v5d66GlIWw%2FvIIZ1CNlDwU74E9R9L%2FGgu0MuvltkzcysH2nhvoc2JP09hirmhOe9Y71SRDzt6E%2BX64wspi1vQY6pgHhxC8n5FRF1XeiCw9YkWJz%2BUIZKKPjtg0PjPj%2F85tA%2BPi%2Ba%2BnljfWufNLf6yQfuxeqPS6jrF5G2Ha%2FJg2v9iFYpcY1jNyghoA%2B0B4KRz1RTQnmDHKQQVy01stjQQ%2BlYc6X74RAQT7L%2BY%2BPzhsZvTGGD9BX%2BUUBRaIibJ3yswKRnih9nzrlkWlTinV8PUH%2FBFVbEn0greSLn%2FYFDfZDJbawoJuaCZN0&X-Amz-Signature=691bbefab4c9803330b77825e69acc525bd033d51179e6ce7a0119703db6b415&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVQIZHQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClYmmQPzm71GAL52D96YubMNqTI7SYFkisDLEggc6n3AiBOnKGjuNXCQja61TCUxrhi3VZkf0XuHo%2BYv0MaQW9HUSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJX%2BDIQCOaoef67lFKtwDF3iVWOhH8ldA7g0HXEGkxud4IwV6nAztsvn8WeqjXyNq%2FqI%2BhW7oF2T9eS0gmytvGQFrLF5ljqGwtZf7rnSpFwuRBZAPZnVxsNZhKe0jGs129N2dkWiSzUqegR3msPpoYIVa1MBjvhX7fSJoDlRikLb%2FNMfAYEruRTJo4umWVbnMJXvM2zCtBBOKHKB6WySs31fviu9AAzd0JYQV195gUKObec3j8OFOLflJDGHQao2dAOlxQleCEkxCKhs4KgOEeHTuK1Bi7L2pkp0YAxS79dKdnPw5CcMzWpNy14QfDMv8rvwVCnykGxPka2c%2FjMZNZOuZFS6fcF%2FHeOeDaB68YYz4dT5%2Fkho%2FuY8ykU32Mk7mo38KrlBVLj5ZDYxf6tY8km5jmRVXKS93jtVM06wsF2Hyd%2Bxo123%2BFDL8nQ49l2cpfnIBNARtsdIE4aUcazRmbV5scHBRLrg%2Bf3%2BpznSkahruIYZkGueRtRcIIUavWxFoX5e6CwDF1tc5%2FJyx%2Fd8oxEgbD%2F9eyp0aFA%2BMDigWccLD6aHPT5Y9oJlb%2Fi2RKkRI2v5d66GlIWw%2FvIIZ1CNlDwU74E9R9L%2FGgu0MuvltkzcysH2nhvoc2JP09hirmhOe9Y71SRDzt6E%2BX64wspi1vQY6pgHhxC8n5FRF1XeiCw9YkWJz%2BUIZKKPjtg0PjPj%2F85tA%2BPi%2Ba%2BnljfWufNLf6yQfuxeqPS6jrF5G2Ha%2FJg2v9iFYpcY1jNyghoA%2B0B4KRz1RTQnmDHKQQVy01stjQQ%2BlYc6X74RAQT7L%2BY%2BPzhsZvTGGD9BX%2BUUBRaIibJ3yswKRnih9nzrlkWlTinV8PUH%2FBFVbEn0greSLn%2FYFDfZDJbawoJuaCZN0&X-Amz-Signature=665ea74ca1692b776be47bd441210a6b107b6cfff76672d4cb5bd5fe79c72cef&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVQIZHQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClYmmQPzm71GAL52D96YubMNqTI7SYFkisDLEggc6n3AiBOnKGjuNXCQja61TCUxrhi3VZkf0XuHo%2BYv0MaQW9HUSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJX%2BDIQCOaoef67lFKtwDF3iVWOhH8ldA7g0HXEGkxud4IwV6nAztsvn8WeqjXyNq%2FqI%2BhW7oF2T9eS0gmytvGQFrLF5ljqGwtZf7rnSpFwuRBZAPZnVxsNZhKe0jGs129N2dkWiSzUqegR3msPpoYIVa1MBjvhX7fSJoDlRikLb%2FNMfAYEruRTJo4umWVbnMJXvM2zCtBBOKHKB6WySs31fviu9AAzd0JYQV195gUKObec3j8OFOLflJDGHQao2dAOlxQleCEkxCKhs4KgOEeHTuK1Bi7L2pkp0YAxS79dKdnPw5CcMzWpNy14QfDMv8rvwVCnykGxPka2c%2FjMZNZOuZFS6fcF%2FHeOeDaB68YYz4dT5%2Fkho%2FuY8ykU32Mk7mo38KrlBVLj5ZDYxf6tY8km5jmRVXKS93jtVM06wsF2Hyd%2Bxo123%2BFDL8nQ49l2cpfnIBNARtsdIE4aUcazRmbV5scHBRLrg%2Bf3%2BpznSkahruIYZkGueRtRcIIUavWxFoX5e6CwDF1tc5%2FJyx%2Fd8oxEgbD%2F9eyp0aFA%2BMDigWccLD6aHPT5Y9oJlb%2Fi2RKkRI2v5d66GlIWw%2FvIIZ1CNlDwU74E9R9L%2FGgu0MuvltkzcysH2nhvoc2JP09hirmhOe9Y71SRDzt6E%2BX64wspi1vQY6pgHhxC8n5FRF1XeiCw9YkWJz%2BUIZKKPjtg0PjPj%2F85tA%2BPi%2Ba%2BnljfWufNLf6yQfuxeqPS6jrF5G2Ha%2FJg2v9iFYpcY1jNyghoA%2B0B4KRz1RTQnmDHKQQVy01stjQQ%2BlYc6X74RAQT7L%2BY%2BPzhsZvTGGD9BX%2BUUBRaIibJ3yswKRnih9nzrlkWlTinV8PUH%2FBFVbEn0greSLn%2FYFDfZDJbawoJuaCZN0&X-Amz-Signature=17b4102beb3b184ab0c930602e62b07fbfc798521c6694c699a2e86947ed5ade&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

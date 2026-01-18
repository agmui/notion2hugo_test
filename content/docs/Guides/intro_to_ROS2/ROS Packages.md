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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHDVFAP%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk5WBqOMQtE7YKE1ivtKNYSu01cBwdPcSjIG3TMaOqSAiAEI1Ko0ANInkqEa3h2bYjz4394aUAObIcMmmxh%2BZn47yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtNL%2FWUOrKy5efK7kKtwDaNnbQx%2FZlqUVyJmzfdhVNH1TYfVyiWbd5eg2u7USIOKHzt0jPGlg5OxdJcktCpHFjKHlUpJYZ5e29d4OeRvisyE%2F1oejT3iDk6MYun%2F1std1Fm2J6IP7KZSkogNtO0MrOtMRxEEBNktoZ9st8wjKTYbet2p0vOGQgUUzHXERaXkpwUpaXXuTVgEIJ0qFPnLv5j0ux5G5p0nKUdhK8msd51bfFjY2XoOKjOkUbJPWtMLZ5HJjhLURDQDOKK%2BDnnYIekzyZMU3UJ%2Fjx6kYt%2BFsPrcMMtfsY%2F1HBSDz4qcoUX2zCQQf8zCf9p5MzTCRECrsUGbWUYc5Afqm%2BqQ02im%2FIDR3rMH3CJtqlQIy%2FVikejLhZilOunQJ4vfqeiYDtr%2FoDzdM7T0utqimfk11yBKe1WLli0MeP83pxgV1%2BZ4kg4Khx8icaSAtPnOl6jMSX2mx5uD%2Ff6V5s3jipmzh5MtPS1vbTeb91ddmjrfUTxS7EgBv951yF%2BbCd2q3xikLyW2muvCO15opZy6wkrVqpPWJ9IK4f3ITXBmDHphuGShtAc9XX3dG3Z9NrB61J6edYR5Ic%2Fg%2Fn%2BgCEeKAQc%2F35GhYzUt35OfLAwedp7z5a9S6cbr3y2iQ%2BBQJ2o3eA2Mwt5ywywY6pgFMrpAz2%2BsrdjvULx7LE6SHol8wO3b%2BWLkcbhZHzLtKXyHo%2BhJ%2FvtWr%2Fno6OQ1y3WoeidFxKOH0IblU66LsZMnc9VDaWkV6lmbcz3NrTWolQrs%2FOjoQ9TFQGEkUQG9C8SxylgYfu%2BUwYztUzQBq66u1%2B5TukblDXxH2tqYbR%2FtYpeCcjzmN2KdK%2BmsmLKEJJSVWp1Z6VVLvt9VfbZyTOcikYE3KOZPg&X-Amz-Signature=fe4d9e43eed3d3bdd1050f926e3613dcb467403ec8057971fd71d475f4c146cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHDVFAP%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk5WBqOMQtE7YKE1ivtKNYSu01cBwdPcSjIG3TMaOqSAiAEI1Ko0ANInkqEa3h2bYjz4394aUAObIcMmmxh%2BZn47yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtNL%2FWUOrKy5efK7kKtwDaNnbQx%2FZlqUVyJmzfdhVNH1TYfVyiWbd5eg2u7USIOKHzt0jPGlg5OxdJcktCpHFjKHlUpJYZ5e29d4OeRvisyE%2F1oejT3iDk6MYun%2F1std1Fm2J6IP7KZSkogNtO0MrOtMRxEEBNktoZ9st8wjKTYbet2p0vOGQgUUzHXERaXkpwUpaXXuTVgEIJ0qFPnLv5j0ux5G5p0nKUdhK8msd51bfFjY2XoOKjOkUbJPWtMLZ5HJjhLURDQDOKK%2BDnnYIekzyZMU3UJ%2Fjx6kYt%2BFsPrcMMtfsY%2F1HBSDz4qcoUX2zCQQf8zCf9p5MzTCRECrsUGbWUYc5Afqm%2BqQ02im%2FIDR3rMH3CJtqlQIy%2FVikejLhZilOunQJ4vfqeiYDtr%2FoDzdM7T0utqimfk11yBKe1WLli0MeP83pxgV1%2BZ4kg4Khx8icaSAtPnOl6jMSX2mx5uD%2Ff6V5s3jipmzh5MtPS1vbTeb91ddmjrfUTxS7EgBv951yF%2BbCd2q3xikLyW2muvCO15opZy6wkrVqpPWJ9IK4f3ITXBmDHphuGShtAc9XX3dG3Z9NrB61J6edYR5Ic%2Fg%2Fn%2BgCEeKAQc%2F35GhYzUt35OfLAwedp7z5a9S6cbr3y2iQ%2BBQJ2o3eA2Mwt5ywywY6pgFMrpAz2%2BsrdjvULx7LE6SHol8wO3b%2BWLkcbhZHzLtKXyHo%2BhJ%2FvtWr%2Fno6OQ1y3WoeidFxKOH0IblU66LsZMnc9VDaWkV6lmbcz3NrTWolQrs%2FOjoQ9TFQGEkUQG9C8SxylgYfu%2BUwYztUzQBq66u1%2B5TukblDXxH2tqYbR%2FtYpeCcjzmN2KdK%2BmsmLKEJJSVWp1Z6VVLvt9VfbZyTOcikYE3KOZPg&X-Amz-Signature=f24b7fce9f350fbcf80c41f8cb3f39821c99678361901ef0a47460a65faa17a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHDVFAP%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk5WBqOMQtE7YKE1ivtKNYSu01cBwdPcSjIG3TMaOqSAiAEI1Ko0ANInkqEa3h2bYjz4394aUAObIcMmmxh%2BZn47yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtNL%2FWUOrKy5efK7kKtwDaNnbQx%2FZlqUVyJmzfdhVNH1TYfVyiWbd5eg2u7USIOKHzt0jPGlg5OxdJcktCpHFjKHlUpJYZ5e29d4OeRvisyE%2F1oejT3iDk6MYun%2F1std1Fm2J6IP7KZSkogNtO0MrOtMRxEEBNktoZ9st8wjKTYbet2p0vOGQgUUzHXERaXkpwUpaXXuTVgEIJ0qFPnLv5j0ux5G5p0nKUdhK8msd51bfFjY2XoOKjOkUbJPWtMLZ5HJjhLURDQDOKK%2BDnnYIekzyZMU3UJ%2Fjx6kYt%2BFsPrcMMtfsY%2F1HBSDz4qcoUX2zCQQf8zCf9p5MzTCRECrsUGbWUYc5Afqm%2BqQ02im%2FIDR3rMH3CJtqlQIy%2FVikejLhZilOunQJ4vfqeiYDtr%2FoDzdM7T0utqimfk11yBKe1WLli0MeP83pxgV1%2BZ4kg4Khx8icaSAtPnOl6jMSX2mx5uD%2Ff6V5s3jipmzh5MtPS1vbTeb91ddmjrfUTxS7EgBv951yF%2BbCd2q3xikLyW2muvCO15opZy6wkrVqpPWJ9IK4f3ITXBmDHphuGShtAc9XX3dG3Z9NrB61J6edYR5Ic%2Fg%2Fn%2BgCEeKAQc%2F35GhYzUt35OfLAwedp7z5a9S6cbr3y2iQ%2BBQJ2o3eA2Mwt5ywywY6pgFMrpAz2%2BsrdjvULx7LE6SHol8wO3b%2BWLkcbhZHzLtKXyHo%2BhJ%2FvtWr%2Fno6OQ1y3WoeidFxKOH0IblU66LsZMnc9VDaWkV6lmbcz3NrTWolQrs%2FOjoQ9TFQGEkUQG9C8SxylgYfu%2BUwYztUzQBq66u1%2B5TukblDXxH2tqYbR%2FtYpeCcjzmN2KdK%2BmsmLKEJJSVWp1Z6VVLvt9VfbZyTOcikYE3KOZPg&X-Amz-Signature=24303cbca7c012a80c61e32288d5092b60c81d645255fc4369341b84d64d7c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHDVFAP%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk5WBqOMQtE7YKE1ivtKNYSu01cBwdPcSjIG3TMaOqSAiAEI1Ko0ANInkqEa3h2bYjz4394aUAObIcMmmxh%2BZn47yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtNL%2FWUOrKy5efK7kKtwDaNnbQx%2FZlqUVyJmzfdhVNH1TYfVyiWbd5eg2u7USIOKHzt0jPGlg5OxdJcktCpHFjKHlUpJYZ5e29d4OeRvisyE%2F1oejT3iDk6MYun%2F1std1Fm2J6IP7KZSkogNtO0MrOtMRxEEBNktoZ9st8wjKTYbet2p0vOGQgUUzHXERaXkpwUpaXXuTVgEIJ0qFPnLv5j0ux5G5p0nKUdhK8msd51bfFjY2XoOKjOkUbJPWtMLZ5HJjhLURDQDOKK%2BDnnYIekzyZMU3UJ%2Fjx6kYt%2BFsPrcMMtfsY%2F1HBSDz4qcoUX2zCQQf8zCf9p5MzTCRECrsUGbWUYc5Afqm%2BqQ02im%2FIDR3rMH3CJtqlQIy%2FVikejLhZilOunQJ4vfqeiYDtr%2FoDzdM7T0utqimfk11yBKe1WLli0MeP83pxgV1%2BZ4kg4Khx8icaSAtPnOl6jMSX2mx5uD%2Ff6V5s3jipmzh5MtPS1vbTeb91ddmjrfUTxS7EgBv951yF%2BbCd2q3xikLyW2muvCO15opZy6wkrVqpPWJ9IK4f3ITXBmDHphuGShtAc9XX3dG3Z9NrB61J6edYR5Ic%2Fg%2Fn%2BgCEeKAQc%2F35GhYzUt35OfLAwedp7z5a9S6cbr3y2iQ%2BBQJ2o3eA2Mwt5ywywY6pgFMrpAz2%2BsrdjvULx7LE6SHol8wO3b%2BWLkcbhZHzLtKXyHo%2BhJ%2FvtWr%2Fno6OQ1y3WoeidFxKOH0IblU66LsZMnc9VDaWkV6lmbcz3NrTWolQrs%2FOjoQ9TFQGEkUQG9C8SxylgYfu%2BUwYztUzQBq66u1%2B5TukblDXxH2tqYbR%2FtYpeCcjzmN2KdK%2BmsmLKEJJSVWp1Z6VVLvt9VfbZyTOcikYE3KOZPg&X-Amz-Signature=3f0390363bbe6b4d4d6e0511db372912e7885fe6a5c84ddb4d8ab48fd707b38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHDVFAP%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk5WBqOMQtE7YKE1ivtKNYSu01cBwdPcSjIG3TMaOqSAiAEI1Ko0ANInkqEa3h2bYjz4394aUAObIcMmmxh%2BZn47yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtNL%2FWUOrKy5efK7kKtwDaNnbQx%2FZlqUVyJmzfdhVNH1TYfVyiWbd5eg2u7USIOKHzt0jPGlg5OxdJcktCpHFjKHlUpJYZ5e29d4OeRvisyE%2F1oejT3iDk6MYun%2F1std1Fm2J6IP7KZSkogNtO0MrOtMRxEEBNktoZ9st8wjKTYbet2p0vOGQgUUzHXERaXkpwUpaXXuTVgEIJ0qFPnLv5j0ux5G5p0nKUdhK8msd51bfFjY2XoOKjOkUbJPWtMLZ5HJjhLURDQDOKK%2BDnnYIekzyZMU3UJ%2Fjx6kYt%2BFsPrcMMtfsY%2F1HBSDz4qcoUX2zCQQf8zCf9p5MzTCRECrsUGbWUYc5Afqm%2BqQ02im%2FIDR3rMH3CJtqlQIy%2FVikejLhZilOunQJ4vfqeiYDtr%2FoDzdM7T0utqimfk11yBKe1WLli0MeP83pxgV1%2BZ4kg4Khx8icaSAtPnOl6jMSX2mx5uD%2Ff6V5s3jipmzh5MtPS1vbTeb91ddmjrfUTxS7EgBv951yF%2BbCd2q3xikLyW2muvCO15opZy6wkrVqpPWJ9IK4f3ITXBmDHphuGShtAc9XX3dG3Z9NrB61J6edYR5Ic%2Fg%2Fn%2BgCEeKAQc%2F35GhYzUt35OfLAwedp7z5a9S6cbr3y2iQ%2BBQJ2o3eA2Mwt5ywywY6pgFMrpAz2%2BsrdjvULx7LE6SHol8wO3b%2BWLkcbhZHzLtKXyHo%2BhJ%2FvtWr%2Fno6OQ1y3WoeidFxKOH0IblU66LsZMnc9VDaWkV6lmbcz3NrTWolQrs%2FOjoQ9TFQGEkUQG9C8SxylgYfu%2BUwYztUzQBq66u1%2B5TukblDXxH2tqYbR%2FtYpeCcjzmN2KdK%2BmsmLKEJJSVWp1Z6VVLvt9VfbZyTOcikYE3KOZPg&X-Amz-Signature=2579c550685b4d4f494bf71dcd8f94e4e8e16a3a38c2c18112a4e16588deb118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHDVFAP%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk5WBqOMQtE7YKE1ivtKNYSu01cBwdPcSjIG3TMaOqSAiAEI1Ko0ANInkqEa3h2bYjz4394aUAObIcMmmxh%2BZn47yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtNL%2FWUOrKy5efK7kKtwDaNnbQx%2FZlqUVyJmzfdhVNH1TYfVyiWbd5eg2u7USIOKHzt0jPGlg5OxdJcktCpHFjKHlUpJYZ5e29d4OeRvisyE%2F1oejT3iDk6MYun%2F1std1Fm2J6IP7KZSkogNtO0MrOtMRxEEBNktoZ9st8wjKTYbet2p0vOGQgUUzHXERaXkpwUpaXXuTVgEIJ0qFPnLv5j0ux5G5p0nKUdhK8msd51bfFjY2XoOKjOkUbJPWtMLZ5HJjhLURDQDOKK%2BDnnYIekzyZMU3UJ%2Fjx6kYt%2BFsPrcMMtfsY%2F1HBSDz4qcoUX2zCQQf8zCf9p5MzTCRECrsUGbWUYc5Afqm%2BqQ02im%2FIDR3rMH3CJtqlQIy%2FVikejLhZilOunQJ4vfqeiYDtr%2FoDzdM7T0utqimfk11yBKe1WLli0MeP83pxgV1%2BZ4kg4Khx8icaSAtPnOl6jMSX2mx5uD%2Ff6V5s3jipmzh5MtPS1vbTeb91ddmjrfUTxS7EgBv951yF%2BbCd2q3xikLyW2muvCO15opZy6wkrVqpPWJ9IK4f3ITXBmDHphuGShtAc9XX3dG3Z9NrB61J6edYR5Ic%2Fg%2Fn%2BgCEeKAQc%2F35GhYzUt35OfLAwedp7z5a9S6cbr3y2iQ%2BBQJ2o3eA2Mwt5ywywY6pgFMrpAz2%2BsrdjvULx7LE6SHol8wO3b%2BWLkcbhZHzLtKXyHo%2BhJ%2FvtWr%2Fno6OQ1y3WoeidFxKOH0IblU66LsZMnc9VDaWkV6lmbcz3NrTWolQrs%2FOjoQ9TFQGEkUQG9C8SxylgYfu%2BUwYztUzQBq66u1%2B5TukblDXxH2tqYbR%2FtYpeCcjzmN2KdK%2BmsmLKEJJSVWp1Z6VVLvt9VfbZyTOcikYE3KOZPg&X-Amz-Signature=3895be14fe17e8e01ee968ef4bdf2fec6c192ca81e575dd7f2d64b4b13b3d0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHDVFAP%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk5WBqOMQtE7YKE1ivtKNYSu01cBwdPcSjIG3TMaOqSAiAEI1Ko0ANInkqEa3h2bYjz4394aUAObIcMmmxh%2BZn47yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtNL%2FWUOrKy5efK7kKtwDaNnbQx%2FZlqUVyJmzfdhVNH1TYfVyiWbd5eg2u7USIOKHzt0jPGlg5OxdJcktCpHFjKHlUpJYZ5e29d4OeRvisyE%2F1oejT3iDk6MYun%2F1std1Fm2J6IP7KZSkogNtO0MrOtMRxEEBNktoZ9st8wjKTYbet2p0vOGQgUUzHXERaXkpwUpaXXuTVgEIJ0qFPnLv5j0ux5G5p0nKUdhK8msd51bfFjY2XoOKjOkUbJPWtMLZ5HJjhLURDQDOKK%2BDnnYIekzyZMU3UJ%2Fjx6kYt%2BFsPrcMMtfsY%2F1HBSDz4qcoUX2zCQQf8zCf9p5MzTCRECrsUGbWUYc5Afqm%2BqQ02im%2FIDR3rMH3CJtqlQIy%2FVikejLhZilOunQJ4vfqeiYDtr%2FoDzdM7T0utqimfk11yBKe1WLli0MeP83pxgV1%2BZ4kg4Khx8icaSAtPnOl6jMSX2mx5uD%2Ff6V5s3jipmzh5MtPS1vbTeb91ddmjrfUTxS7EgBv951yF%2BbCd2q3xikLyW2muvCO15opZy6wkrVqpPWJ9IK4f3ITXBmDHphuGShtAc9XX3dG3Z9NrB61J6edYR5Ic%2Fg%2Fn%2BgCEeKAQc%2F35GhYzUt35OfLAwedp7z5a9S6cbr3y2iQ%2BBQJ2o3eA2Mwt5ywywY6pgFMrpAz2%2BsrdjvULx7LE6SHol8wO3b%2BWLkcbhZHzLtKXyHo%2BhJ%2FvtWr%2Fno6OQ1y3WoeidFxKOH0IblU66LsZMnc9VDaWkV6lmbcz3NrTWolQrs%2FOjoQ9TFQGEkUQG9C8SxylgYfu%2BUwYztUzQBq66u1%2B5TukblDXxH2tqYbR%2FtYpeCcjzmN2KdK%2BmsmLKEJJSVWp1Z6VVLvt9VfbZyTOcikYE3KOZPg&X-Amz-Signature=fec492f6a9e36be2bafaf21c5775db254a1605a4aae132a8264324be48edd399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

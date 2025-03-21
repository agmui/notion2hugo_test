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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLGE4OS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIA%2BKE%2BYpe3rMOgecjgHZAe4WMzvuBMoPbhC5ujNhU21iAiA3EKY3UOhMFFeVCfTw0o7MYDkgwXx5s0SxbIyI0AlFcSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs83xiiTUkxwZbxIsKtwDc%2FHS8YlGNwG0C9LpF3QycOPHj46PJRe8YiBZiaps3uRGH%2BsKDE36Wqkbf9MiIbqDPcMcJcrJzwh3V2EVmAiQ1kKxgOFdobB2i9%2F8qotfthqOKPl1K9jOxEM%2FDHsgK7q9R4q30GOe4rZPqaGWaONs1IN7Ch3h6ahZ0084WH0S0RLiJfpLB6LtQOKYjhWPbY%2BiYrtpe%2B%2BZzGokbJounr6kOBsnK4055I%2BDpZQHxTjJ6w40SUi1QPl%2B9neHkgZD%2BPo0cnMep8S92z2XHYRF9hsL6eInRlj8sPrpnKG8ivEe%2FqtCeKbbOVEzYsRBUB8gXgNwoIcDx9NI0SoJzIM%2F9MYSEEHuCHSkCfQDsO1MS1JFQTw6EmZmcO3X6sE9oYTmCyaBZt%2BHsZrE6CXLaQNl1AuaQvYfueriogVU9aZG%2BuB4JcNAhJoF0j3HfQiI3rldiy3B%2BZtUfoxQjY%2BrF3Dim7fqmKu02lJX%2BwWIyaNJzgHK4JSgYkKtw%2Bo1d8kR64gO7NjlOyMh34L%2FR2ZO%2FvWwctTNkZRkYGBsLnko4Ehpr6CJQfG7b8PKCqSvDAM8PkZjg22gzwIVQE7%2F5EtWKpIcYk5vFolUYnlWQy12EynlF1iacDiRTiretVQx0326WHEwtbr2vgY6pgHKwbb7%2BSaHY1cpIKl4XSxyWMcfIftKPhx2UJbaT%2FOABJwuFeb9fZOO5CaxV8muy01POdUSAklO%2BrLsFmQIZs%2Bpf4PyxB%2BdAydf%2B8mE7v6olR%2FfGdYfGj%2B%2FvwN3OchcrhExfB9Z%2Bo5jegRz%2Fu9X7dDceZRm%2FKbUsjZRUc0wEeg13xGiLTk65y5fWmD6OHLwGPD5TCIkDWr4JKLidIZbVzcLkSAgXtpp&X-Amz-Signature=ba6db8d26dd5fe876b1cfa2325b90e6be8e40b606cc93bb7abe1b9534bfb8e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLGE4OS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIA%2BKE%2BYpe3rMOgecjgHZAe4WMzvuBMoPbhC5ujNhU21iAiA3EKY3UOhMFFeVCfTw0o7MYDkgwXx5s0SxbIyI0AlFcSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs83xiiTUkxwZbxIsKtwDc%2FHS8YlGNwG0C9LpF3QycOPHj46PJRe8YiBZiaps3uRGH%2BsKDE36Wqkbf9MiIbqDPcMcJcrJzwh3V2EVmAiQ1kKxgOFdobB2i9%2F8qotfthqOKPl1K9jOxEM%2FDHsgK7q9R4q30GOe4rZPqaGWaONs1IN7Ch3h6ahZ0084WH0S0RLiJfpLB6LtQOKYjhWPbY%2BiYrtpe%2B%2BZzGokbJounr6kOBsnK4055I%2BDpZQHxTjJ6w40SUi1QPl%2B9neHkgZD%2BPo0cnMep8S92z2XHYRF9hsL6eInRlj8sPrpnKG8ivEe%2FqtCeKbbOVEzYsRBUB8gXgNwoIcDx9NI0SoJzIM%2F9MYSEEHuCHSkCfQDsO1MS1JFQTw6EmZmcO3X6sE9oYTmCyaBZt%2BHsZrE6CXLaQNl1AuaQvYfueriogVU9aZG%2BuB4JcNAhJoF0j3HfQiI3rldiy3B%2BZtUfoxQjY%2BrF3Dim7fqmKu02lJX%2BwWIyaNJzgHK4JSgYkKtw%2Bo1d8kR64gO7NjlOyMh34L%2FR2ZO%2FvWwctTNkZRkYGBsLnko4Ehpr6CJQfG7b8PKCqSvDAM8PkZjg22gzwIVQE7%2F5EtWKpIcYk5vFolUYnlWQy12EynlF1iacDiRTiretVQx0326WHEwtbr2vgY6pgHKwbb7%2BSaHY1cpIKl4XSxyWMcfIftKPhx2UJbaT%2FOABJwuFeb9fZOO5CaxV8muy01POdUSAklO%2BrLsFmQIZs%2Bpf4PyxB%2BdAydf%2B8mE7v6olR%2FfGdYfGj%2B%2FvwN3OchcrhExfB9Z%2Bo5jegRz%2Fu9X7dDceZRm%2FKbUsjZRUc0wEeg13xGiLTk65y5fWmD6OHLwGPD5TCIkDWr4JKLidIZbVzcLkSAgXtpp&X-Amz-Signature=ca3906781c8a4256e94b96a2478a3c5d87cff04a679f61d25c401d3f10fb09a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLGE4OS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIA%2BKE%2BYpe3rMOgecjgHZAe4WMzvuBMoPbhC5ujNhU21iAiA3EKY3UOhMFFeVCfTw0o7MYDkgwXx5s0SxbIyI0AlFcSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs83xiiTUkxwZbxIsKtwDc%2FHS8YlGNwG0C9LpF3QycOPHj46PJRe8YiBZiaps3uRGH%2BsKDE36Wqkbf9MiIbqDPcMcJcrJzwh3V2EVmAiQ1kKxgOFdobB2i9%2F8qotfthqOKPl1K9jOxEM%2FDHsgK7q9R4q30GOe4rZPqaGWaONs1IN7Ch3h6ahZ0084WH0S0RLiJfpLB6LtQOKYjhWPbY%2BiYrtpe%2B%2BZzGokbJounr6kOBsnK4055I%2BDpZQHxTjJ6w40SUi1QPl%2B9neHkgZD%2BPo0cnMep8S92z2XHYRF9hsL6eInRlj8sPrpnKG8ivEe%2FqtCeKbbOVEzYsRBUB8gXgNwoIcDx9NI0SoJzIM%2F9MYSEEHuCHSkCfQDsO1MS1JFQTw6EmZmcO3X6sE9oYTmCyaBZt%2BHsZrE6CXLaQNl1AuaQvYfueriogVU9aZG%2BuB4JcNAhJoF0j3HfQiI3rldiy3B%2BZtUfoxQjY%2BrF3Dim7fqmKu02lJX%2BwWIyaNJzgHK4JSgYkKtw%2Bo1d8kR64gO7NjlOyMh34L%2FR2ZO%2FvWwctTNkZRkYGBsLnko4Ehpr6CJQfG7b8PKCqSvDAM8PkZjg22gzwIVQE7%2F5EtWKpIcYk5vFolUYnlWQy12EynlF1iacDiRTiretVQx0326WHEwtbr2vgY6pgHKwbb7%2BSaHY1cpIKl4XSxyWMcfIftKPhx2UJbaT%2FOABJwuFeb9fZOO5CaxV8muy01POdUSAklO%2BrLsFmQIZs%2Bpf4PyxB%2BdAydf%2B8mE7v6olR%2FfGdYfGj%2B%2FvwN3OchcrhExfB9Z%2Bo5jegRz%2Fu9X7dDceZRm%2FKbUsjZRUc0wEeg13xGiLTk65y5fWmD6OHLwGPD5TCIkDWr4JKLidIZbVzcLkSAgXtpp&X-Amz-Signature=42973b8878d1e6f4010c75868a15224ffff42b4809fbb5d0c9a7323730925f57&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLGE4OS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIA%2BKE%2BYpe3rMOgecjgHZAe4WMzvuBMoPbhC5ujNhU21iAiA3EKY3UOhMFFeVCfTw0o7MYDkgwXx5s0SxbIyI0AlFcSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs83xiiTUkxwZbxIsKtwDc%2FHS8YlGNwG0C9LpF3QycOPHj46PJRe8YiBZiaps3uRGH%2BsKDE36Wqkbf9MiIbqDPcMcJcrJzwh3V2EVmAiQ1kKxgOFdobB2i9%2F8qotfthqOKPl1K9jOxEM%2FDHsgK7q9R4q30GOe4rZPqaGWaONs1IN7Ch3h6ahZ0084WH0S0RLiJfpLB6LtQOKYjhWPbY%2BiYrtpe%2B%2BZzGokbJounr6kOBsnK4055I%2BDpZQHxTjJ6w40SUi1QPl%2B9neHkgZD%2BPo0cnMep8S92z2XHYRF9hsL6eInRlj8sPrpnKG8ivEe%2FqtCeKbbOVEzYsRBUB8gXgNwoIcDx9NI0SoJzIM%2F9MYSEEHuCHSkCfQDsO1MS1JFQTw6EmZmcO3X6sE9oYTmCyaBZt%2BHsZrE6CXLaQNl1AuaQvYfueriogVU9aZG%2BuB4JcNAhJoF0j3HfQiI3rldiy3B%2BZtUfoxQjY%2BrF3Dim7fqmKu02lJX%2BwWIyaNJzgHK4JSgYkKtw%2Bo1d8kR64gO7NjlOyMh34L%2FR2ZO%2FvWwctTNkZRkYGBsLnko4Ehpr6CJQfG7b8PKCqSvDAM8PkZjg22gzwIVQE7%2F5EtWKpIcYk5vFolUYnlWQy12EynlF1iacDiRTiretVQx0326WHEwtbr2vgY6pgHKwbb7%2BSaHY1cpIKl4XSxyWMcfIftKPhx2UJbaT%2FOABJwuFeb9fZOO5CaxV8muy01POdUSAklO%2BrLsFmQIZs%2Bpf4PyxB%2BdAydf%2B8mE7v6olR%2FfGdYfGj%2B%2FvwN3OchcrhExfB9Z%2Bo5jegRz%2Fu9X7dDceZRm%2FKbUsjZRUc0wEeg13xGiLTk65y5fWmD6OHLwGPD5TCIkDWr4JKLidIZbVzcLkSAgXtpp&X-Amz-Signature=8e506bd5c6347097efb61dba11e92098bfcb9a3b8b26ad22fafb41bfb58b2200&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLGE4OS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIA%2BKE%2BYpe3rMOgecjgHZAe4WMzvuBMoPbhC5ujNhU21iAiA3EKY3UOhMFFeVCfTw0o7MYDkgwXx5s0SxbIyI0AlFcSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs83xiiTUkxwZbxIsKtwDc%2FHS8YlGNwG0C9LpF3QycOPHj46PJRe8YiBZiaps3uRGH%2BsKDE36Wqkbf9MiIbqDPcMcJcrJzwh3V2EVmAiQ1kKxgOFdobB2i9%2F8qotfthqOKPl1K9jOxEM%2FDHsgK7q9R4q30GOe4rZPqaGWaONs1IN7Ch3h6ahZ0084WH0S0RLiJfpLB6LtQOKYjhWPbY%2BiYrtpe%2B%2BZzGokbJounr6kOBsnK4055I%2BDpZQHxTjJ6w40SUi1QPl%2B9neHkgZD%2BPo0cnMep8S92z2XHYRF9hsL6eInRlj8sPrpnKG8ivEe%2FqtCeKbbOVEzYsRBUB8gXgNwoIcDx9NI0SoJzIM%2F9MYSEEHuCHSkCfQDsO1MS1JFQTw6EmZmcO3X6sE9oYTmCyaBZt%2BHsZrE6CXLaQNl1AuaQvYfueriogVU9aZG%2BuB4JcNAhJoF0j3HfQiI3rldiy3B%2BZtUfoxQjY%2BrF3Dim7fqmKu02lJX%2BwWIyaNJzgHK4JSgYkKtw%2Bo1d8kR64gO7NjlOyMh34L%2FR2ZO%2FvWwctTNkZRkYGBsLnko4Ehpr6CJQfG7b8PKCqSvDAM8PkZjg22gzwIVQE7%2F5EtWKpIcYk5vFolUYnlWQy12EynlF1iacDiRTiretVQx0326WHEwtbr2vgY6pgHKwbb7%2BSaHY1cpIKl4XSxyWMcfIftKPhx2UJbaT%2FOABJwuFeb9fZOO5CaxV8muy01POdUSAklO%2BrLsFmQIZs%2Bpf4PyxB%2BdAydf%2B8mE7v6olR%2FfGdYfGj%2B%2FvwN3OchcrhExfB9Z%2Bo5jegRz%2Fu9X7dDceZRm%2FKbUsjZRUc0wEeg13xGiLTk65y5fWmD6OHLwGPD5TCIkDWr4JKLidIZbVzcLkSAgXtpp&X-Amz-Signature=781e81b0555c3884a0f699d3dcc8706f4f1910d4bc02ef98471a2f53662e1a11&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLGE4OS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIA%2BKE%2BYpe3rMOgecjgHZAe4WMzvuBMoPbhC5ujNhU21iAiA3EKY3UOhMFFeVCfTw0o7MYDkgwXx5s0SxbIyI0AlFcSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs83xiiTUkxwZbxIsKtwDc%2FHS8YlGNwG0C9LpF3QycOPHj46PJRe8YiBZiaps3uRGH%2BsKDE36Wqkbf9MiIbqDPcMcJcrJzwh3V2EVmAiQ1kKxgOFdobB2i9%2F8qotfthqOKPl1K9jOxEM%2FDHsgK7q9R4q30GOe4rZPqaGWaONs1IN7Ch3h6ahZ0084WH0S0RLiJfpLB6LtQOKYjhWPbY%2BiYrtpe%2B%2BZzGokbJounr6kOBsnK4055I%2BDpZQHxTjJ6w40SUi1QPl%2B9neHkgZD%2BPo0cnMep8S92z2XHYRF9hsL6eInRlj8sPrpnKG8ivEe%2FqtCeKbbOVEzYsRBUB8gXgNwoIcDx9NI0SoJzIM%2F9MYSEEHuCHSkCfQDsO1MS1JFQTw6EmZmcO3X6sE9oYTmCyaBZt%2BHsZrE6CXLaQNl1AuaQvYfueriogVU9aZG%2BuB4JcNAhJoF0j3HfQiI3rldiy3B%2BZtUfoxQjY%2BrF3Dim7fqmKu02lJX%2BwWIyaNJzgHK4JSgYkKtw%2Bo1d8kR64gO7NjlOyMh34L%2FR2ZO%2FvWwctTNkZRkYGBsLnko4Ehpr6CJQfG7b8PKCqSvDAM8PkZjg22gzwIVQE7%2F5EtWKpIcYk5vFolUYnlWQy12EynlF1iacDiRTiretVQx0326WHEwtbr2vgY6pgHKwbb7%2BSaHY1cpIKl4XSxyWMcfIftKPhx2UJbaT%2FOABJwuFeb9fZOO5CaxV8muy01POdUSAklO%2BrLsFmQIZs%2Bpf4PyxB%2BdAydf%2B8mE7v6olR%2FfGdYfGj%2B%2FvwN3OchcrhExfB9Z%2Bo5jegRz%2Fu9X7dDceZRm%2FKbUsjZRUc0wEeg13xGiLTk65y5fWmD6OHLwGPD5TCIkDWr4JKLidIZbVzcLkSAgXtpp&X-Amz-Signature=f96cc8bc4228a9cf476a3715ef9236512e850af40f067efb0308fbfe7f7b6bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLGE4OS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIA%2BKE%2BYpe3rMOgecjgHZAe4WMzvuBMoPbhC5ujNhU21iAiA3EKY3UOhMFFeVCfTw0o7MYDkgwXx5s0SxbIyI0AlFcSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs83xiiTUkxwZbxIsKtwDc%2FHS8YlGNwG0C9LpF3QycOPHj46PJRe8YiBZiaps3uRGH%2BsKDE36Wqkbf9MiIbqDPcMcJcrJzwh3V2EVmAiQ1kKxgOFdobB2i9%2F8qotfthqOKPl1K9jOxEM%2FDHsgK7q9R4q30GOe4rZPqaGWaONs1IN7Ch3h6ahZ0084WH0S0RLiJfpLB6LtQOKYjhWPbY%2BiYrtpe%2B%2BZzGokbJounr6kOBsnK4055I%2BDpZQHxTjJ6w40SUi1QPl%2B9neHkgZD%2BPo0cnMep8S92z2XHYRF9hsL6eInRlj8sPrpnKG8ivEe%2FqtCeKbbOVEzYsRBUB8gXgNwoIcDx9NI0SoJzIM%2F9MYSEEHuCHSkCfQDsO1MS1JFQTw6EmZmcO3X6sE9oYTmCyaBZt%2BHsZrE6CXLaQNl1AuaQvYfueriogVU9aZG%2BuB4JcNAhJoF0j3HfQiI3rldiy3B%2BZtUfoxQjY%2BrF3Dim7fqmKu02lJX%2BwWIyaNJzgHK4JSgYkKtw%2Bo1d8kR64gO7NjlOyMh34L%2FR2ZO%2FvWwctTNkZRkYGBsLnko4Ehpr6CJQfG7b8PKCqSvDAM8PkZjg22gzwIVQE7%2F5EtWKpIcYk5vFolUYnlWQy12EynlF1iacDiRTiretVQx0326WHEwtbr2vgY6pgHKwbb7%2BSaHY1cpIKl4XSxyWMcfIftKPhx2UJbaT%2FOABJwuFeb9fZOO5CaxV8muy01POdUSAklO%2BrLsFmQIZs%2Bpf4PyxB%2BdAydf%2B8mE7v6olR%2FfGdYfGj%2B%2FvwN3OchcrhExfB9Z%2Bo5jegRz%2Fu9X7dDceZRm%2FKbUsjZRUc0wEeg13xGiLTk65y5fWmD6OHLwGPD5TCIkDWr4JKLidIZbVzcLkSAgXtpp&X-Amz-Signature=e6bac1d17c780265c0537680124d000b4d24f55eceae0448a7be79704a7232df&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

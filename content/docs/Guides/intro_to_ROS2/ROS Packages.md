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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYM6W37%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtIEleOmwVn0HMIUOUKc0Pg3rhqrO8l87kELu6OLNOhgIhAPVf55%2BCOhKWM3kygrFRjlF7FcykAd3uPFuOg087O7fxKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jfkbV5cjgrqgIv8q3APPq7tXVKfHNYP8LoRveMtAj7nyYPDn4iFs7iWFCOIcFJ46kURCqhy8sznywv4TZsAgv%2FOAshI0t%2FM8sGbY6Af1vlwnLKGKoqUrPQdFTV8XOUI96Uv5vl2zK7JUYWc6hpM5hB7y4mKvY8E4bWb2zPCSN%2Btxz4YosgzQDgrOekIRyoN1lf1u4tQWXz1%2BeIbeHITmy6awk18ech%2FGgoIoaBF2qsUHs8%2BMI0Sasr6POjP%2F7bTDs7Xku8a7ERsBcPgKcpw1N%2B0zbn8XO6lpMWGXuZ3R%2FSaPPVcMcoYQ9EBRQ1gkc9AOy3D0Ap6NZEaLuCMxnvxwDF1MAEHrt57BJ0bawhiXcYzS0Nq9SUY48RRg3GNhre24%2F8MeWl5pIKXaTIj%2BATGBYoLCMfKlmudUVY5t4aU9DaGGQIOGSPYsNnkAs1j6Ffaz8x9RwJL85uCSWazxG5sc7%2F7%2BdknFSZ66l1Nb1Bq50KlLjh2Cpjow2fK3sFXOmXHVj%2FVHBqMJUcK%2B%2BSyn%2BO2Ckz0UsSUEKLUxnyvSTbGH3bm59k7BZQQUi82xyYhbkuzyw838fVqzHh4NI5uhxbzl5i8ZWuvNE0jPYA7xHDbR23GGdyouxkN%2FrriJyXUwWS2N7ictOvptH9e6kzC23tDCBjqkAWO7ai5xZxgnQfBSABS0wqZAz5AXQCMSwXTdN8MIgxw40SxyIULWbUwchVzx0I0LlzBfYDKsMPH5jLjJRKsRYYhmDpM6eEcnBQE0bY%2BW6wbW8I30Wazhi%2BUSfgiQOzzeI8ksvjFDEIplW%2F75s7cT%2FgvPzkhXKkobB3yaqxlSOwz3%2B4EQu%2BJyXxpBruMT4uzKDYy3QxETyr5wkhtsMeMWnDcl8AEW&X-Amz-Signature=00c4b26e9a7999e8b45be3944ca47d5636b6bbd8912565584d32f0e689b662e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYM6W37%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtIEleOmwVn0HMIUOUKc0Pg3rhqrO8l87kELu6OLNOhgIhAPVf55%2BCOhKWM3kygrFRjlF7FcykAd3uPFuOg087O7fxKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jfkbV5cjgrqgIv8q3APPq7tXVKfHNYP8LoRveMtAj7nyYPDn4iFs7iWFCOIcFJ46kURCqhy8sznywv4TZsAgv%2FOAshI0t%2FM8sGbY6Af1vlwnLKGKoqUrPQdFTV8XOUI96Uv5vl2zK7JUYWc6hpM5hB7y4mKvY8E4bWb2zPCSN%2Btxz4YosgzQDgrOekIRyoN1lf1u4tQWXz1%2BeIbeHITmy6awk18ech%2FGgoIoaBF2qsUHs8%2BMI0Sasr6POjP%2F7bTDs7Xku8a7ERsBcPgKcpw1N%2B0zbn8XO6lpMWGXuZ3R%2FSaPPVcMcoYQ9EBRQ1gkc9AOy3D0Ap6NZEaLuCMxnvxwDF1MAEHrt57BJ0bawhiXcYzS0Nq9SUY48RRg3GNhre24%2F8MeWl5pIKXaTIj%2BATGBYoLCMfKlmudUVY5t4aU9DaGGQIOGSPYsNnkAs1j6Ffaz8x9RwJL85uCSWazxG5sc7%2F7%2BdknFSZ66l1Nb1Bq50KlLjh2Cpjow2fK3sFXOmXHVj%2FVHBqMJUcK%2B%2BSyn%2BO2Ckz0UsSUEKLUxnyvSTbGH3bm59k7BZQQUi82xyYhbkuzyw838fVqzHh4NI5uhxbzl5i8ZWuvNE0jPYA7xHDbR23GGdyouxkN%2FrriJyXUwWS2N7ictOvptH9e6kzC23tDCBjqkAWO7ai5xZxgnQfBSABS0wqZAz5AXQCMSwXTdN8MIgxw40SxyIULWbUwchVzx0I0LlzBfYDKsMPH5jLjJRKsRYYhmDpM6eEcnBQE0bY%2BW6wbW8I30Wazhi%2BUSfgiQOzzeI8ksvjFDEIplW%2F75s7cT%2FgvPzkhXKkobB3yaqxlSOwz3%2B4EQu%2BJyXxpBruMT4uzKDYy3QxETyr5wkhtsMeMWnDcl8AEW&X-Amz-Signature=39ff6dc02c008ea3f984d196c144b70f9e6d41c662671ad04364346a05cae43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYM6W37%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtIEleOmwVn0HMIUOUKc0Pg3rhqrO8l87kELu6OLNOhgIhAPVf55%2BCOhKWM3kygrFRjlF7FcykAd3uPFuOg087O7fxKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jfkbV5cjgrqgIv8q3APPq7tXVKfHNYP8LoRveMtAj7nyYPDn4iFs7iWFCOIcFJ46kURCqhy8sznywv4TZsAgv%2FOAshI0t%2FM8sGbY6Af1vlwnLKGKoqUrPQdFTV8XOUI96Uv5vl2zK7JUYWc6hpM5hB7y4mKvY8E4bWb2zPCSN%2Btxz4YosgzQDgrOekIRyoN1lf1u4tQWXz1%2BeIbeHITmy6awk18ech%2FGgoIoaBF2qsUHs8%2BMI0Sasr6POjP%2F7bTDs7Xku8a7ERsBcPgKcpw1N%2B0zbn8XO6lpMWGXuZ3R%2FSaPPVcMcoYQ9EBRQ1gkc9AOy3D0Ap6NZEaLuCMxnvxwDF1MAEHrt57BJ0bawhiXcYzS0Nq9SUY48RRg3GNhre24%2F8MeWl5pIKXaTIj%2BATGBYoLCMfKlmudUVY5t4aU9DaGGQIOGSPYsNnkAs1j6Ffaz8x9RwJL85uCSWazxG5sc7%2F7%2BdknFSZ66l1Nb1Bq50KlLjh2Cpjow2fK3sFXOmXHVj%2FVHBqMJUcK%2B%2BSyn%2BO2Ckz0UsSUEKLUxnyvSTbGH3bm59k7BZQQUi82xyYhbkuzyw838fVqzHh4NI5uhxbzl5i8ZWuvNE0jPYA7xHDbR23GGdyouxkN%2FrriJyXUwWS2N7ictOvptH9e6kzC23tDCBjqkAWO7ai5xZxgnQfBSABS0wqZAz5AXQCMSwXTdN8MIgxw40SxyIULWbUwchVzx0I0LlzBfYDKsMPH5jLjJRKsRYYhmDpM6eEcnBQE0bY%2BW6wbW8I30Wazhi%2BUSfgiQOzzeI8ksvjFDEIplW%2F75s7cT%2FgvPzkhXKkobB3yaqxlSOwz3%2B4EQu%2BJyXxpBruMT4uzKDYy3QxETyr5wkhtsMeMWnDcl8AEW&X-Amz-Signature=7a8cafa7c5a74094219b8740d89430b17e67acabe3f76e097876ff79c5b0ec4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYM6W37%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtIEleOmwVn0HMIUOUKc0Pg3rhqrO8l87kELu6OLNOhgIhAPVf55%2BCOhKWM3kygrFRjlF7FcykAd3uPFuOg087O7fxKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jfkbV5cjgrqgIv8q3APPq7tXVKfHNYP8LoRveMtAj7nyYPDn4iFs7iWFCOIcFJ46kURCqhy8sznywv4TZsAgv%2FOAshI0t%2FM8sGbY6Af1vlwnLKGKoqUrPQdFTV8XOUI96Uv5vl2zK7JUYWc6hpM5hB7y4mKvY8E4bWb2zPCSN%2Btxz4YosgzQDgrOekIRyoN1lf1u4tQWXz1%2BeIbeHITmy6awk18ech%2FGgoIoaBF2qsUHs8%2BMI0Sasr6POjP%2F7bTDs7Xku8a7ERsBcPgKcpw1N%2B0zbn8XO6lpMWGXuZ3R%2FSaPPVcMcoYQ9EBRQ1gkc9AOy3D0Ap6NZEaLuCMxnvxwDF1MAEHrt57BJ0bawhiXcYzS0Nq9SUY48RRg3GNhre24%2F8MeWl5pIKXaTIj%2BATGBYoLCMfKlmudUVY5t4aU9DaGGQIOGSPYsNnkAs1j6Ffaz8x9RwJL85uCSWazxG5sc7%2F7%2BdknFSZ66l1Nb1Bq50KlLjh2Cpjow2fK3sFXOmXHVj%2FVHBqMJUcK%2B%2BSyn%2BO2Ckz0UsSUEKLUxnyvSTbGH3bm59k7BZQQUi82xyYhbkuzyw838fVqzHh4NI5uhxbzl5i8ZWuvNE0jPYA7xHDbR23GGdyouxkN%2FrriJyXUwWS2N7ictOvptH9e6kzC23tDCBjqkAWO7ai5xZxgnQfBSABS0wqZAz5AXQCMSwXTdN8MIgxw40SxyIULWbUwchVzx0I0LlzBfYDKsMPH5jLjJRKsRYYhmDpM6eEcnBQE0bY%2BW6wbW8I30Wazhi%2BUSfgiQOzzeI8ksvjFDEIplW%2F75s7cT%2FgvPzkhXKkobB3yaqxlSOwz3%2B4EQu%2BJyXxpBruMT4uzKDYy3QxETyr5wkhtsMeMWnDcl8AEW&X-Amz-Signature=6edaa31f3968ff3136b6c41650a85eb625d302f4c8c78e5d1712979968e947cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYM6W37%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtIEleOmwVn0HMIUOUKc0Pg3rhqrO8l87kELu6OLNOhgIhAPVf55%2BCOhKWM3kygrFRjlF7FcykAd3uPFuOg087O7fxKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jfkbV5cjgrqgIv8q3APPq7tXVKfHNYP8LoRveMtAj7nyYPDn4iFs7iWFCOIcFJ46kURCqhy8sznywv4TZsAgv%2FOAshI0t%2FM8sGbY6Af1vlwnLKGKoqUrPQdFTV8XOUI96Uv5vl2zK7JUYWc6hpM5hB7y4mKvY8E4bWb2zPCSN%2Btxz4YosgzQDgrOekIRyoN1lf1u4tQWXz1%2BeIbeHITmy6awk18ech%2FGgoIoaBF2qsUHs8%2BMI0Sasr6POjP%2F7bTDs7Xku8a7ERsBcPgKcpw1N%2B0zbn8XO6lpMWGXuZ3R%2FSaPPVcMcoYQ9EBRQ1gkc9AOy3D0Ap6NZEaLuCMxnvxwDF1MAEHrt57BJ0bawhiXcYzS0Nq9SUY48RRg3GNhre24%2F8MeWl5pIKXaTIj%2BATGBYoLCMfKlmudUVY5t4aU9DaGGQIOGSPYsNnkAs1j6Ffaz8x9RwJL85uCSWazxG5sc7%2F7%2BdknFSZ66l1Nb1Bq50KlLjh2Cpjow2fK3sFXOmXHVj%2FVHBqMJUcK%2B%2BSyn%2BO2Ckz0UsSUEKLUxnyvSTbGH3bm59k7BZQQUi82xyYhbkuzyw838fVqzHh4NI5uhxbzl5i8ZWuvNE0jPYA7xHDbR23GGdyouxkN%2FrriJyXUwWS2N7ictOvptH9e6kzC23tDCBjqkAWO7ai5xZxgnQfBSABS0wqZAz5AXQCMSwXTdN8MIgxw40SxyIULWbUwchVzx0I0LlzBfYDKsMPH5jLjJRKsRYYhmDpM6eEcnBQE0bY%2BW6wbW8I30Wazhi%2BUSfgiQOzzeI8ksvjFDEIplW%2F75s7cT%2FgvPzkhXKkobB3yaqxlSOwz3%2B4EQu%2BJyXxpBruMT4uzKDYy3QxETyr5wkhtsMeMWnDcl8AEW&X-Amz-Signature=4ee4b4e2e8f7d77c2df7821cc41ca45c05e976878b281b1df027b9611537453e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYM6W37%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtIEleOmwVn0HMIUOUKc0Pg3rhqrO8l87kELu6OLNOhgIhAPVf55%2BCOhKWM3kygrFRjlF7FcykAd3uPFuOg087O7fxKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jfkbV5cjgrqgIv8q3APPq7tXVKfHNYP8LoRveMtAj7nyYPDn4iFs7iWFCOIcFJ46kURCqhy8sznywv4TZsAgv%2FOAshI0t%2FM8sGbY6Af1vlwnLKGKoqUrPQdFTV8XOUI96Uv5vl2zK7JUYWc6hpM5hB7y4mKvY8E4bWb2zPCSN%2Btxz4YosgzQDgrOekIRyoN1lf1u4tQWXz1%2BeIbeHITmy6awk18ech%2FGgoIoaBF2qsUHs8%2BMI0Sasr6POjP%2F7bTDs7Xku8a7ERsBcPgKcpw1N%2B0zbn8XO6lpMWGXuZ3R%2FSaPPVcMcoYQ9EBRQ1gkc9AOy3D0Ap6NZEaLuCMxnvxwDF1MAEHrt57BJ0bawhiXcYzS0Nq9SUY48RRg3GNhre24%2F8MeWl5pIKXaTIj%2BATGBYoLCMfKlmudUVY5t4aU9DaGGQIOGSPYsNnkAs1j6Ffaz8x9RwJL85uCSWazxG5sc7%2F7%2BdknFSZ66l1Nb1Bq50KlLjh2Cpjow2fK3sFXOmXHVj%2FVHBqMJUcK%2B%2BSyn%2BO2Ckz0UsSUEKLUxnyvSTbGH3bm59k7BZQQUi82xyYhbkuzyw838fVqzHh4NI5uhxbzl5i8ZWuvNE0jPYA7xHDbR23GGdyouxkN%2FrriJyXUwWS2N7ictOvptH9e6kzC23tDCBjqkAWO7ai5xZxgnQfBSABS0wqZAz5AXQCMSwXTdN8MIgxw40SxyIULWbUwchVzx0I0LlzBfYDKsMPH5jLjJRKsRYYhmDpM6eEcnBQE0bY%2BW6wbW8I30Wazhi%2BUSfgiQOzzeI8ksvjFDEIplW%2F75s7cT%2FgvPzkhXKkobB3yaqxlSOwz3%2B4EQu%2BJyXxpBruMT4uzKDYy3QxETyr5wkhtsMeMWnDcl8AEW&X-Amz-Signature=361285f958e646180c0d97630127914778388b17b7037ee75ba3b73f67b11a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYM6W37%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtIEleOmwVn0HMIUOUKc0Pg3rhqrO8l87kELu6OLNOhgIhAPVf55%2BCOhKWM3kygrFRjlF7FcykAd3uPFuOg087O7fxKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jfkbV5cjgrqgIv8q3APPq7tXVKfHNYP8LoRveMtAj7nyYPDn4iFs7iWFCOIcFJ46kURCqhy8sznywv4TZsAgv%2FOAshI0t%2FM8sGbY6Af1vlwnLKGKoqUrPQdFTV8XOUI96Uv5vl2zK7JUYWc6hpM5hB7y4mKvY8E4bWb2zPCSN%2Btxz4YosgzQDgrOekIRyoN1lf1u4tQWXz1%2BeIbeHITmy6awk18ech%2FGgoIoaBF2qsUHs8%2BMI0Sasr6POjP%2F7bTDs7Xku8a7ERsBcPgKcpw1N%2B0zbn8XO6lpMWGXuZ3R%2FSaPPVcMcoYQ9EBRQ1gkc9AOy3D0Ap6NZEaLuCMxnvxwDF1MAEHrt57BJ0bawhiXcYzS0Nq9SUY48RRg3GNhre24%2F8MeWl5pIKXaTIj%2BATGBYoLCMfKlmudUVY5t4aU9DaGGQIOGSPYsNnkAs1j6Ffaz8x9RwJL85uCSWazxG5sc7%2F7%2BdknFSZ66l1Nb1Bq50KlLjh2Cpjow2fK3sFXOmXHVj%2FVHBqMJUcK%2B%2BSyn%2BO2Ckz0UsSUEKLUxnyvSTbGH3bm59k7BZQQUi82xyYhbkuzyw838fVqzHh4NI5uhxbzl5i8ZWuvNE0jPYA7xHDbR23GGdyouxkN%2FrriJyXUwWS2N7ictOvptH9e6kzC23tDCBjqkAWO7ai5xZxgnQfBSABS0wqZAz5AXQCMSwXTdN8MIgxw40SxyIULWbUwchVzx0I0LlzBfYDKsMPH5jLjJRKsRYYhmDpM6eEcnBQE0bY%2BW6wbW8I30Wazhi%2BUSfgiQOzzeI8ksvjFDEIplW%2F75s7cT%2FgvPzkhXKkobB3yaqxlSOwz3%2B4EQu%2BJyXxpBruMT4uzKDYy3QxETyr5wkhtsMeMWnDcl8AEW&X-Amz-Signature=8fda2d7bccb4b19dc2d38b8564dae46a95206af13683a49973397d6300b07adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

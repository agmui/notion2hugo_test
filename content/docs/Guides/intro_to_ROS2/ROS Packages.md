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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUBA46J%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2BIka7jyvccdtkPAuSlpXe73wS%2BORlI93DbHoygWzSqQIhAKbMLUHWZqiV0odyQu6bidMPv%2Bxx08wIG45srsDTW6dHKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYoAhepw4u5dzeBIq3ANjG1y4UtknCqYEi5vg%2FmxsFnPu1y8HBOTHU34PFyig7B9SSs9Np6mpE1rYzzPfZjSR6Ohy3Y0ARb7vhkFIw3gOjQs0LqVj4NGVrP%2B9oAst4LymFWorH8nHL9%2Fsp%2FIuROLo1rePcjNb2H1zZ7DQs6AJuL7Put7V78pmqh%2B3o%2F1zFyeY5MHYivPGSBAYOMKvLcz%2FA2m6folhoFJfs3%2FgO0Xyu%2F6MKWaQkZVOAJ46bGa2F4qCNWq%2FsGltbcX6EIEyKL8%2FSlfcyVQb%2FhGagmo0txRA80oExz9HNiowSNJerAOwSD%2Fq1d1iqdj3Ni1iCPQlsZcPEaIuIjlrGC%2BJP65S2AW4FpJ4vBfzDD8kp49ZYNAMDcsSK9f1WXgvsxsSeDLGvLdNr%2BvE%2B3IzfhDxsqUckYPoV5ngWQyfrzmclmZiTcT1MW7fuu3ZTC1U9YGivu1AB4%2FGD23IKMcwIevgcw%2BkEy%2B9KntAYMNW60OyUo5u%2FUeRlWkaITwnkVjf3gngxJY5UJhUAs1NhPN70J8giCdYtu7f%2BgKInEexPoIZVw5GWoP%2F%2BOxQGG7krKZG46hnphwR%2FpbVtW5smPV0%2BfjEXHIbYFqQlPLlPl6OJtqh%2FUgmQEglJyZV8gPKDHOFfcksSDDEvOa8BjqkAT8t%2BWRjYokei5bsmnvhf%2F64gb8A2x%2FTl3WpzLaY1qYVsA78BLLVcnO3MvxKsblVMJlKTNbc5dc70shAPNJfdwoKagqwm3XcTUbz4ApLzqo99DhdqSO6jkVN4TRY7zSXxiNTLOd2qyvP9HQgNuFpu8p1zMx778TkulywHVU6Y%2FHWcAr1VEuaPl57S3gjHZ7IsdcW4opmRA52wkm4U0%2BBf%2B9x6Dv1&X-Amz-Signature=1e56566425ae15389b171ea0dcb5809302198713ed06d238f25c5c57ce6ee4f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUBA46J%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2BIka7jyvccdtkPAuSlpXe73wS%2BORlI93DbHoygWzSqQIhAKbMLUHWZqiV0odyQu6bidMPv%2Bxx08wIG45srsDTW6dHKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYoAhepw4u5dzeBIq3ANjG1y4UtknCqYEi5vg%2FmxsFnPu1y8HBOTHU34PFyig7B9SSs9Np6mpE1rYzzPfZjSR6Ohy3Y0ARb7vhkFIw3gOjQs0LqVj4NGVrP%2B9oAst4LymFWorH8nHL9%2Fsp%2FIuROLo1rePcjNb2H1zZ7DQs6AJuL7Put7V78pmqh%2B3o%2F1zFyeY5MHYivPGSBAYOMKvLcz%2FA2m6folhoFJfs3%2FgO0Xyu%2F6MKWaQkZVOAJ46bGa2F4qCNWq%2FsGltbcX6EIEyKL8%2FSlfcyVQb%2FhGagmo0txRA80oExz9HNiowSNJerAOwSD%2Fq1d1iqdj3Ni1iCPQlsZcPEaIuIjlrGC%2BJP65S2AW4FpJ4vBfzDD8kp49ZYNAMDcsSK9f1WXgvsxsSeDLGvLdNr%2BvE%2B3IzfhDxsqUckYPoV5ngWQyfrzmclmZiTcT1MW7fuu3ZTC1U9YGivu1AB4%2FGD23IKMcwIevgcw%2BkEy%2B9KntAYMNW60OyUo5u%2FUeRlWkaITwnkVjf3gngxJY5UJhUAs1NhPN70J8giCdYtu7f%2BgKInEexPoIZVw5GWoP%2F%2BOxQGG7krKZG46hnphwR%2FpbVtW5smPV0%2BfjEXHIbYFqQlPLlPl6OJtqh%2FUgmQEglJyZV8gPKDHOFfcksSDDEvOa8BjqkAT8t%2BWRjYokei5bsmnvhf%2F64gb8A2x%2FTl3WpzLaY1qYVsA78BLLVcnO3MvxKsblVMJlKTNbc5dc70shAPNJfdwoKagqwm3XcTUbz4ApLzqo99DhdqSO6jkVN4TRY7zSXxiNTLOd2qyvP9HQgNuFpu8p1zMx778TkulywHVU6Y%2FHWcAr1VEuaPl57S3gjHZ7IsdcW4opmRA52wkm4U0%2BBf%2B9x6Dv1&X-Amz-Signature=c75c19531506120077ccb35ae56ed302e6f0afc47f3da16eb9cd9c70598f2322&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUBA46J%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2BIka7jyvccdtkPAuSlpXe73wS%2BORlI93DbHoygWzSqQIhAKbMLUHWZqiV0odyQu6bidMPv%2Bxx08wIG45srsDTW6dHKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYoAhepw4u5dzeBIq3ANjG1y4UtknCqYEi5vg%2FmxsFnPu1y8HBOTHU34PFyig7B9SSs9Np6mpE1rYzzPfZjSR6Ohy3Y0ARb7vhkFIw3gOjQs0LqVj4NGVrP%2B9oAst4LymFWorH8nHL9%2Fsp%2FIuROLo1rePcjNb2H1zZ7DQs6AJuL7Put7V78pmqh%2B3o%2F1zFyeY5MHYivPGSBAYOMKvLcz%2FA2m6folhoFJfs3%2FgO0Xyu%2F6MKWaQkZVOAJ46bGa2F4qCNWq%2FsGltbcX6EIEyKL8%2FSlfcyVQb%2FhGagmo0txRA80oExz9HNiowSNJerAOwSD%2Fq1d1iqdj3Ni1iCPQlsZcPEaIuIjlrGC%2BJP65S2AW4FpJ4vBfzDD8kp49ZYNAMDcsSK9f1WXgvsxsSeDLGvLdNr%2BvE%2B3IzfhDxsqUckYPoV5ngWQyfrzmclmZiTcT1MW7fuu3ZTC1U9YGivu1AB4%2FGD23IKMcwIevgcw%2BkEy%2B9KntAYMNW60OyUo5u%2FUeRlWkaITwnkVjf3gngxJY5UJhUAs1NhPN70J8giCdYtu7f%2BgKInEexPoIZVw5GWoP%2F%2BOxQGG7krKZG46hnphwR%2FpbVtW5smPV0%2BfjEXHIbYFqQlPLlPl6OJtqh%2FUgmQEglJyZV8gPKDHOFfcksSDDEvOa8BjqkAT8t%2BWRjYokei5bsmnvhf%2F64gb8A2x%2FTl3WpzLaY1qYVsA78BLLVcnO3MvxKsblVMJlKTNbc5dc70shAPNJfdwoKagqwm3XcTUbz4ApLzqo99DhdqSO6jkVN4TRY7zSXxiNTLOd2qyvP9HQgNuFpu8p1zMx778TkulywHVU6Y%2FHWcAr1VEuaPl57S3gjHZ7IsdcW4opmRA52wkm4U0%2BBf%2B9x6Dv1&X-Amz-Signature=bb5ab7e5da8fb083ca2bbb05938d00de096b996f7ab4406207a65bd9cd56cdbd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUBA46J%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2BIka7jyvccdtkPAuSlpXe73wS%2BORlI93DbHoygWzSqQIhAKbMLUHWZqiV0odyQu6bidMPv%2Bxx08wIG45srsDTW6dHKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYoAhepw4u5dzeBIq3ANjG1y4UtknCqYEi5vg%2FmxsFnPu1y8HBOTHU34PFyig7B9SSs9Np6mpE1rYzzPfZjSR6Ohy3Y0ARb7vhkFIw3gOjQs0LqVj4NGVrP%2B9oAst4LymFWorH8nHL9%2Fsp%2FIuROLo1rePcjNb2H1zZ7DQs6AJuL7Put7V78pmqh%2B3o%2F1zFyeY5MHYivPGSBAYOMKvLcz%2FA2m6folhoFJfs3%2FgO0Xyu%2F6MKWaQkZVOAJ46bGa2F4qCNWq%2FsGltbcX6EIEyKL8%2FSlfcyVQb%2FhGagmo0txRA80oExz9HNiowSNJerAOwSD%2Fq1d1iqdj3Ni1iCPQlsZcPEaIuIjlrGC%2BJP65S2AW4FpJ4vBfzDD8kp49ZYNAMDcsSK9f1WXgvsxsSeDLGvLdNr%2BvE%2B3IzfhDxsqUckYPoV5ngWQyfrzmclmZiTcT1MW7fuu3ZTC1U9YGivu1AB4%2FGD23IKMcwIevgcw%2BkEy%2B9KntAYMNW60OyUo5u%2FUeRlWkaITwnkVjf3gngxJY5UJhUAs1NhPN70J8giCdYtu7f%2BgKInEexPoIZVw5GWoP%2F%2BOxQGG7krKZG46hnphwR%2FpbVtW5smPV0%2BfjEXHIbYFqQlPLlPl6OJtqh%2FUgmQEglJyZV8gPKDHOFfcksSDDEvOa8BjqkAT8t%2BWRjYokei5bsmnvhf%2F64gb8A2x%2FTl3WpzLaY1qYVsA78BLLVcnO3MvxKsblVMJlKTNbc5dc70shAPNJfdwoKagqwm3XcTUbz4ApLzqo99DhdqSO6jkVN4TRY7zSXxiNTLOd2qyvP9HQgNuFpu8p1zMx778TkulywHVU6Y%2FHWcAr1VEuaPl57S3gjHZ7IsdcW4opmRA52wkm4U0%2BBf%2B9x6Dv1&X-Amz-Signature=95d2595ecd10c56db2afcbe467660371653246d34c3e004920fca5682e659f60&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUBA46J%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2BIka7jyvccdtkPAuSlpXe73wS%2BORlI93DbHoygWzSqQIhAKbMLUHWZqiV0odyQu6bidMPv%2Bxx08wIG45srsDTW6dHKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYoAhepw4u5dzeBIq3ANjG1y4UtknCqYEi5vg%2FmxsFnPu1y8HBOTHU34PFyig7B9SSs9Np6mpE1rYzzPfZjSR6Ohy3Y0ARb7vhkFIw3gOjQs0LqVj4NGVrP%2B9oAst4LymFWorH8nHL9%2Fsp%2FIuROLo1rePcjNb2H1zZ7DQs6AJuL7Put7V78pmqh%2B3o%2F1zFyeY5MHYivPGSBAYOMKvLcz%2FA2m6folhoFJfs3%2FgO0Xyu%2F6MKWaQkZVOAJ46bGa2F4qCNWq%2FsGltbcX6EIEyKL8%2FSlfcyVQb%2FhGagmo0txRA80oExz9HNiowSNJerAOwSD%2Fq1d1iqdj3Ni1iCPQlsZcPEaIuIjlrGC%2BJP65S2AW4FpJ4vBfzDD8kp49ZYNAMDcsSK9f1WXgvsxsSeDLGvLdNr%2BvE%2B3IzfhDxsqUckYPoV5ngWQyfrzmclmZiTcT1MW7fuu3ZTC1U9YGivu1AB4%2FGD23IKMcwIevgcw%2BkEy%2B9KntAYMNW60OyUo5u%2FUeRlWkaITwnkVjf3gngxJY5UJhUAs1NhPN70J8giCdYtu7f%2BgKInEexPoIZVw5GWoP%2F%2BOxQGG7krKZG46hnphwR%2FpbVtW5smPV0%2BfjEXHIbYFqQlPLlPl6OJtqh%2FUgmQEglJyZV8gPKDHOFfcksSDDEvOa8BjqkAT8t%2BWRjYokei5bsmnvhf%2F64gb8A2x%2FTl3WpzLaY1qYVsA78BLLVcnO3MvxKsblVMJlKTNbc5dc70shAPNJfdwoKagqwm3XcTUbz4ApLzqo99DhdqSO6jkVN4TRY7zSXxiNTLOd2qyvP9HQgNuFpu8p1zMx778TkulywHVU6Y%2FHWcAr1VEuaPl57S3gjHZ7IsdcW4opmRA52wkm4U0%2BBf%2B9x6Dv1&X-Amz-Signature=5874e50745cbf805892598413d1d3d017a58ce049c83eac6ae83b283eb2803d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUBA46J%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2BIka7jyvccdtkPAuSlpXe73wS%2BORlI93DbHoygWzSqQIhAKbMLUHWZqiV0odyQu6bidMPv%2Bxx08wIG45srsDTW6dHKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYoAhepw4u5dzeBIq3ANjG1y4UtknCqYEi5vg%2FmxsFnPu1y8HBOTHU34PFyig7B9SSs9Np6mpE1rYzzPfZjSR6Ohy3Y0ARb7vhkFIw3gOjQs0LqVj4NGVrP%2B9oAst4LymFWorH8nHL9%2Fsp%2FIuROLo1rePcjNb2H1zZ7DQs6AJuL7Put7V78pmqh%2B3o%2F1zFyeY5MHYivPGSBAYOMKvLcz%2FA2m6folhoFJfs3%2FgO0Xyu%2F6MKWaQkZVOAJ46bGa2F4qCNWq%2FsGltbcX6EIEyKL8%2FSlfcyVQb%2FhGagmo0txRA80oExz9HNiowSNJerAOwSD%2Fq1d1iqdj3Ni1iCPQlsZcPEaIuIjlrGC%2BJP65S2AW4FpJ4vBfzDD8kp49ZYNAMDcsSK9f1WXgvsxsSeDLGvLdNr%2BvE%2B3IzfhDxsqUckYPoV5ngWQyfrzmclmZiTcT1MW7fuu3ZTC1U9YGivu1AB4%2FGD23IKMcwIevgcw%2BkEy%2B9KntAYMNW60OyUo5u%2FUeRlWkaITwnkVjf3gngxJY5UJhUAs1NhPN70J8giCdYtu7f%2BgKInEexPoIZVw5GWoP%2F%2BOxQGG7krKZG46hnphwR%2FpbVtW5smPV0%2BfjEXHIbYFqQlPLlPl6OJtqh%2FUgmQEglJyZV8gPKDHOFfcksSDDEvOa8BjqkAT8t%2BWRjYokei5bsmnvhf%2F64gb8A2x%2FTl3WpzLaY1qYVsA78BLLVcnO3MvxKsblVMJlKTNbc5dc70shAPNJfdwoKagqwm3XcTUbz4ApLzqo99DhdqSO6jkVN4TRY7zSXxiNTLOd2qyvP9HQgNuFpu8p1zMx778TkulywHVU6Y%2FHWcAr1VEuaPl57S3gjHZ7IsdcW4opmRA52wkm4U0%2BBf%2B9x6Dv1&X-Amz-Signature=bbdac2c836643d2fe7b9a1a897e245f67b48e251114c83154951f3eca3874f56&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUBA46J%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2BIka7jyvccdtkPAuSlpXe73wS%2BORlI93DbHoygWzSqQIhAKbMLUHWZqiV0odyQu6bidMPv%2Bxx08wIG45srsDTW6dHKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYoAhepw4u5dzeBIq3ANjG1y4UtknCqYEi5vg%2FmxsFnPu1y8HBOTHU34PFyig7B9SSs9Np6mpE1rYzzPfZjSR6Ohy3Y0ARb7vhkFIw3gOjQs0LqVj4NGVrP%2B9oAst4LymFWorH8nHL9%2Fsp%2FIuROLo1rePcjNb2H1zZ7DQs6AJuL7Put7V78pmqh%2B3o%2F1zFyeY5MHYivPGSBAYOMKvLcz%2FA2m6folhoFJfs3%2FgO0Xyu%2F6MKWaQkZVOAJ46bGa2F4qCNWq%2FsGltbcX6EIEyKL8%2FSlfcyVQb%2FhGagmo0txRA80oExz9HNiowSNJerAOwSD%2Fq1d1iqdj3Ni1iCPQlsZcPEaIuIjlrGC%2BJP65S2AW4FpJ4vBfzDD8kp49ZYNAMDcsSK9f1WXgvsxsSeDLGvLdNr%2BvE%2B3IzfhDxsqUckYPoV5ngWQyfrzmclmZiTcT1MW7fuu3ZTC1U9YGivu1AB4%2FGD23IKMcwIevgcw%2BkEy%2B9KntAYMNW60OyUo5u%2FUeRlWkaITwnkVjf3gngxJY5UJhUAs1NhPN70J8giCdYtu7f%2BgKInEexPoIZVw5GWoP%2F%2BOxQGG7krKZG46hnphwR%2FpbVtW5smPV0%2BfjEXHIbYFqQlPLlPl6OJtqh%2FUgmQEglJyZV8gPKDHOFfcksSDDEvOa8BjqkAT8t%2BWRjYokei5bsmnvhf%2F64gb8A2x%2FTl3WpzLaY1qYVsA78BLLVcnO3MvxKsblVMJlKTNbc5dc70shAPNJfdwoKagqwm3XcTUbz4ApLzqo99DhdqSO6jkVN4TRY7zSXxiNTLOd2qyvP9HQgNuFpu8p1zMx778TkulywHVU6Y%2FHWcAr1VEuaPl57S3gjHZ7IsdcW4opmRA52wkm4U0%2BBf%2B9x6Dv1&X-Amz-Signature=069d3addf6d27980f4a65f4ec5f90744c9742b32c565c46e225ea066d4a0587e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

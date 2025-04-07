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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3IM2XF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pDxbxGyv7xOPWJP06iPGK4uvZxKb%2FEvc62I9d3wUdgIgfo%2FYsQW53gQA0OZOQG%2BsdNkZUjf9i4SL4cCi888bRVYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIvshnDbJOScnvSk5yrcA3CePaqiKfL4lywRJZbK49DCgi41hmK8A3C3keIkSA3iWAfFkD48vl7JO37iJasP3A0OfBbsEyxKmX9bkVsgnavBCq1LxvXg5iXSmwYorBpcFV0vEKBN%2BsFebL3jjDYhsRbHrPaFZDS4DR2qOxXu0v0SIJ99iEFHMY%2Fwq8UKkbj%2BlxpG4Ul6h7HNKYMZOaSMe12H0yzmwDVi91pKGtzXDE8GKXv4fFq7WbyXaI5e9jea7%2BXsq5m5VDrOTNBrR3SMhCrY8fUGI5tVaaJ%2F7B5FOesLOOWROZsdwfC9erEHrUzVEV4fop0LKocsyU1L%2BbN7LPhALsyJa1EicF9ixp11m%2F9gOmQjepFMab1hhcDgMVbCn%2B8wEgz%2F5kZMJnLy4x5m18beCXdOqNgaQZxWqZ7E5a%2FQR448bJiutxyqentNXbey2K8FY15fv2vx5zpAH3mSg8lCtyYEP5hbnCRB7dRHtLqeiA7ZFUxM57z4SkT%2FUs%2F5o6%2F3%2FdLoaezMign5UilYxHcrmhF3vLezt4XvOdAZRUnZPv6o2VZuBUTmwoX9QLptQSjJq%2F0yxOcLkwLpqazhG10VYBGCRXODtOHW4xv03FnEN%2BSBHtFqUhOlbdHqTCHgAIf2eoveZlOzrZNiML%2B0zL8GOqUB5IFQNb8MhwPc0WaXLsC6C0HMA6rXpw8cmU%2Fh5BECADBNN%2BMB5eKLXddh1AU%2BF90KIQ90%2FmXCrlLPxxtkJp30RUMhR9yhJlD%2B5ueMroaWAlaBTj6s2kMzyBiZUAKKcHJf9yOOyZ0rbl5ERy8FVyknh%2F8bqH9UtXFfnHjAaRhCy%2FqwNu57XjYfz6jmwf%2FNOQkqtQ6056TDtGvG1Eq4s6oJHtfG7M0S&X-Amz-Signature=e97b8e80cd3fb8453536911d5f56fba02100dbc7902a15ff8a04cc2d71bc0faa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3IM2XF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pDxbxGyv7xOPWJP06iPGK4uvZxKb%2FEvc62I9d3wUdgIgfo%2FYsQW53gQA0OZOQG%2BsdNkZUjf9i4SL4cCi888bRVYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIvshnDbJOScnvSk5yrcA3CePaqiKfL4lywRJZbK49DCgi41hmK8A3C3keIkSA3iWAfFkD48vl7JO37iJasP3A0OfBbsEyxKmX9bkVsgnavBCq1LxvXg5iXSmwYorBpcFV0vEKBN%2BsFebL3jjDYhsRbHrPaFZDS4DR2qOxXu0v0SIJ99iEFHMY%2Fwq8UKkbj%2BlxpG4Ul6h7HNKYMZOaSMe12H0yzmwDVi91pKGtzXDE8GKXv4fFq7WbyXaI5e9jea7%2BXsq5m5VDrOTNBrR3SMhCrY8fUGI5tVaaJ%2F7B5FOesLOOWROZsdwfC9erEHrUzVEV4fop0LKocsyU1L%2BbN7LPhALsyJa1EicF9ixp11m%2F9gOmQjepFMab1hhcDgMVbCn%2B8wEgz%2F5kZMJnLy4x5m18beCXdOqNgaQZxWqZ7E5a%2FQR448bJiutxyqentNXbey2K8FY15fv2vx5zpAH3mSg8lCtyYEP5hbnCRB7dRHtLqeiA7ZFUxM57z4SkT%2FUs%2F5o6%2F3%2FdLoaezMign5UilYxHcrmhF3vLezt4XvOdAZRUnZPv6o2VZuBUTmwoX9QLptQSjJq%2F0yxOcLkwLpqazhG10VYBGCRXODtOHW4xv03FnEN%2BSBHtFqUhOlbdHqTCHgAIf2eoveZlOzrZNiML%2B0zL8GOqUB5IFQNb8MhwPc0WaXLsC6C0HMA6rXpw8cmU%2Fh5BECADBNN%2BMB5eKLXddh1AU%2BF90KIQ90%2FmXCrlLPxxtkJp30RUMhR9yhJlD%2B5ueMroaWAlaBTj6s2kMzyBiZUAKKcHJf9yOOyZ0rbl5ERy8FVyknh%2F8bqH9UtXFfnHjAaRhCy%2FqwNu57XjYfz6jmwf%2FNOQkqtQ6056TDtGvG1Eq4s6oJHtfG7M0S&X-Amz-Signature=2b15681209d101bd2c65d9c9a8e0cbeaa9918fb0acfeeb7ec018a4f70782a82f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3IM2XF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pDxbxGyv7xOPWJP06iPGK4uvZxKb%2FEvc62I9d3wUdgIgfo%2FYsQW53gQA0OZOQG%2BsdNkZUjf9i4SL4cCi888bRVYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIvshnDbJOScnvSk5yrcA3CePaqiKfL4lywRJZbK49DCgi41hmK8A3C3keIkSA3iWAfFkD48vl7JO37iJasP3A0OfBbsEyxKmX9bkVsgnavBCq1LxvXg5iXSmwYorBpcFV0vEKBN%2BsFebL3jjDYhsRbHrPaFZDS4DR2qOxXu0v0SIJ99iEFHMY%2Fwq8UKkbj%2BlxpG4Ul6h7HNKYMZOaSMe12H0yzmwDVi91pKGtzXDE8GKXv4fFq7WbyXaI5e9jea7%2BXsq5m5VDrOTNBrR3SMhCrY8fUGI5tVaaJ%2F7B5FOesLOOWROZsdwfC9erEHrUzVEV4fop0LKocsyU1L%2BbN7LPhALsyJa1EicF9ixp11m%2F9gOmQjepFMab1hhcDgMVbCn%2B8wEgz%2F5kZMJnLy4x5m18beCXdOqNgaQZxWqZ7E5a%2FQR448bJiutxyqentNXbey2K8FY15fv2vx5zpAH3mSg8lCtyYEP5hbnCRB7dRHtLqeiA7ZFUxM57z4SkT%2FUs%2F5o6%2F3%2FdLoaezMign5UilYxHcrmhF3vLezt4XvOdAZRUnZPv6o2VZuBUTmwoX9QLptQSjJq%2F0yxOcLkwLpqazhG10VYBGCRXODtOHW4xv03FnEN%2BSBHtFqUhOlbdHqTCHgAIf2eoveZlOzrZNiML%2B0zL8GOqUB5IFQNb8MhwPc0WaXLsC6C0HMA6rXpw8cmU%2Fh5BECADBNN%2BMB5eKLXddh1AU%2BF90KIQ90%2FmXCrlLPxxtkJp30RUMhR9yhJlD%2B5ueMroaWAlaBTj6s2kMzyBiZUAKKcHJf9yOOyZ0rbl5ERy8FVyknh%2F8bqH9UtXFfnHjAaRhCy%2FqwNu57XjYfz6jmwf%2FNOQkqtQ6056TDtGvG1Eq4s6oJHtfG7M0S&X-Amz-Signature=d3f3b69d505966e60fc24c3cf6e2287e4e3e0b4660cca4aa1be51c540384a38c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3IM2XF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pDxbxGyv7xOPWJP06iPGK4uvZxKb%2FEvc62I9d3wUdgIgfo%2FYsQW53gQA0OZOQG%2BsdNkZUjf9i4SL4cCi888bRVYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIvshnDbJOScnvSk5yrcA3CePaqiKfL4lywRJZbK49DCgi41hmK8A3C3keIkSA3iWAfFkD48vl7JO37iJasP3A0OfBbsEyxKmX9bkVsgnavBCq1LxvXg5iXSmwYorBpcFV0vEKBN%2BsFebL3jjDYhsRbHrPaFZDS4DR2qOxXu0v0SIJ99iEFHMY%2Fwq8UKkbj%2BlxpG4Ul6h7HNKYMZOaSMe12H0yzmwDVi91pKGtzXDE8GKXv4fFq7WbyXaI5e9jea7%2BXsq5m5VDrOTNBrR3SMhCrY8fUGI5tVaaJ%2F7B5FOesLOOWROZsdwfC9erEHrUzVEV4fop0LKocsyU1L%2BbN7LPhALsyJa1EicF9ixp11m%2F9gOmQjepFMab1hhcDgMVbCn%2B8wEgz%2F5kZMJnLy4x5m18beCXdOqNgaQZxWqZ7E5a%2FQR448bJiutxyqentNXbey2K8FY15fv2vx5zpAH3mSg8lCtyYEP5hbnCRB7dRHtLqeiA7ZFUxM57z4SkT%2FUs%2F5o6%2F3%2FdLoaezMign5UilYxHcrmhF3vLezt4XvOdAZRUnZPv6o2VZuBUTmwoX9QLptQSjJq%2F0yxOcLkwLpqazhG10VYBGCRXODtOHW4xv03FnEN%2BSBHtFqUhOlbdHqTCHgAIf2eoveZlOzrZNiML%2B0zL8GOqUB5IFQNb8MhwPc0WaXLsC6C0HMA6rXpw8cmU%2Fh5BECADBNN%2BMB5eKLXddh1AU%2BF90KIQ90%2FmXCrlLPxxtkJp30RUMhR9yhJlD%2B5ueMroaWAlaBTj6s2kMzyBiZUAKKcHJf9yOOyZ0rbl5ERy8FVyknh%2F8bqH9UtXFfnHjAaRhCy%2FqwNu57XjYfz6jmwf%2FNOQkqtQ6056TDtGvG1Eq4s6oJHtfG7M0S&X-Amz-Signature=d2ab7e7a90d704221147d686831986ac95f639613d7885e718457b1ba3c2dfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3IM2XF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pDxbxGyv7xOPWJP06iPGK4uvZxKb%2FEvc62I9d3wUdgIgfo%2FYsQW53gQA0OZOQG%2BsdNkZUjf9i4SL4cCi888bRVYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIvshnDbJOScnvSk5yrcA3CePaqiKfL4lywRJZbK49DCgi41hmK8A3C3keIkSA3iWAfFkD48vl7JO37iJasP3A0OfBbsEyxKmX9bkVsgnavBCq1LxvXg5iXSmwYorBpcFV0vEKBN%2BsFebL3jjDYhsRbHrPaFZDS4DR2qOxXu0v0SIJ99iEFHMY%2Fwq8UKkbj%2BlxpG4Ul6h7HNKYMZOaSMe12H0yzmwDVi91pKGtzXDE8GKXv4fFq7WbyXaI5e9jea7%2BXsq5m5VDrOTNBrR3SMhCrY8fUGI5tVaaJ%2F7B5FOesLOOWROZsdwfC9erEHrUzVEV4fop0LKocsyU1L%2BbN7LPhALsyJa1EicF9ixp11m%2F9gOmQjepFMab1hhcDgMVbCn%2B8wEgz%2F5kZMJnLy4x5m18beCXdOqNgaQZxWqZ7E5a%2FQR448bJiutxyqentNXbey2K8FY15fv2vx5zpAH3mSg8lCtyYEP5hbnCRB7dRHtLqeiA7ZFUxM57z4SkT%2FUs%2F5o6%2F3%2FdLoaezMign5UilYxHcrmhF3vLezt4XvOdAZRUnZPv6o2VZuBUTmwoX9QLptQSjJq%2F0yxOcLkwLpqazhG10VYBGCRXODtOHW4xv03FnEN%2BSBHtFqUhOlbdHqTCHgAIf2eoveZlOzrZNiML%2B0zL8GOqUB5IFQNb8MhwPc0WaXLsC6C0HMA6rXpw8cmU%2Fh5BECADBNN%2BMB5eKLXddh1AU%2BF90KIQ90%2FmXCrlLPxxtkJp30RUMhR9yhJlD%2B5ueMroaWAlaBTj6s2kMzyBiZUAKKcHJf9yOOyZ0rbl5ERy8FVyknh%2F8bqH9UtXFfnHjAaRhCy%2FqwNu57XjYfz6jmwf%2FNOQkqtQ6056TDtGvG1Eq4s6oJHtfG7M0S&X-Amz-Signature=7312aabbd9d9818bbcefc97fd2fb641f19ac460f76d2314bdbb41ae8f826da16&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3IM2XF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pDxbxGyv7xOPWJP06iPGK4uvZxKb%2FEvc62I9d3wUdgIgfo%2FYsQW53gQA0OZOQG%2BsdNkZUjf9i4SL4cCi888bRVYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIvshnDbJOScnvSk5yrcA3CePaqiKfL4lywRJZbK49DCgi41hmK8A3C3keIkSA3iWAfFkD48vl7JO37iJasP3A0OfBbsEyxKmX9bkVsgnavBCq1LxvXg5iXSmwYorBpcFV0vEKBN%2BsFebL3jjDYhsRbHrPaFZDS4DR2qOxXu0v0SIJ99iEFHMY%2Fwq8UKkbj%2BlxpG4Ul6h7HNKYMZOaSMe12H0yzmwDVi91pKGtzXDE8GKXv4fFq7WbyXaI5e9jea7%2BXsq5m5VDrOTNBrR3SMhCrY8fUGI5tVaaJ%2F7B5FOesLOOWROZsdwfC9erEHrUzVEV4fop0LKocsyU1L%2BbN7LPhALsyJa1EicF9ixp11m%2F9gOmQjepFMab1hhcDgMVbCn%2B8wEgz%2F5kZMJnLy4x5m18beCXdOqNgaQZxWqZ7E5a%2FQR448bJiutxyqentNXbey2K8FY15fv2vx5zpAH3mSg8lCtyYEP5hbnCRB7dRHtLqeiA7ZFUxM57z4SkT%2FUs%2F5o6%2F3%2FdLoaezMign5UilYxHcrmhF3vLezt4XvOdAZRUnZPv6o2VZuBUTmwoX9QLptQSjJq%2F0yxOcLkwLpqazhG10VYBGCRXODtOHW4xv03FnEN%2BSBHtFqUhOlbdHqTCHgAIf2eoveZlOzrZNiML%2B0zL8GOqUB5IFQNb8MhwPc0WaXLsC6C0HMA6rXpw8cmU%2Fh5BECADBNN%2BMB5eKLXddh1AU%2BF90KIQ90%2FmXCrlLPxxtkJp30RUMhR9yhJlD%2B5ueMroaWAlaBTj6s2kMzyBiZUAKKcHJf9yOOyZ0rbl5ERy8FVyknh%2F8bqH9UtXFfnHjAaRhCy%2FqwNu57XjYfz6jmwf%2FNOQkqtQ6056TDtGvG1Eq4s6oJHtfG7M0S&X-Amz-Signature=22b623c7448bb4843a3a8075736d615e4b314382d1b5439b6589b807259b5584&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3IM2XF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pDxbxGyv7xOPWJP06iPGK4uvZxKb%2FEvc62I9d3wUdgIgfo%2FYsQW53gQA0OZOQG%2BsdNkZUjf9i4SL4cCi888bRVYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIvshnDbJOScnvSk5yrcA3CePaqiKfL4lywRJZbK49DCgi41hmK8A3C3keIkSA3iWAfFkD48vl7JO37iJasP3A0OfBbsEyxKmX9bkVsgnavBCq1LxvXg5iXSmwYorBpcFV0vEKBN%2BsFebL3jjDYhsRbHrPaFZDS4DR2qOxXu0v0SIJ99iEFHMY%2Fwq8UKkbj%2BlxpG4Ul6h7HNKYMZOaSMe12H0yzmwDVi91pKGtzXDE8GKXv4fFq7WbyXaI5e9jea7%2BXsq5m5VDrOTNBrR3SMhCrY8fUGI5tVaaJ%2F7B5FOesLOOWROZsdwfC9erEHrUzVEV4fop0LKocsyU1L%2BbN7LPhALsyJa1EicF9ixp11m%2F9gOmQjepFMab1hhcDgMVbCn%2B8wEgz%2F5kZMJnLy4x5m18beCXdOqNgaQZxWqZ7E5a%2FQR448bJiutxyqentNXbey2K8FY15fv2vx5zpAH3mSg8lCtyYEP5hbnCRB7dRHtLqeiA7ZFUxM57z4SkT%2FUs%2F5o6%2F3%2FdLoaezMign5UilYxHcrmhF3vLezt4XvOdAZRUnZPv6o2VZuBUTmwoX9QLptQSjJq%2F0yxOcLkwLpqazhG10VYBGCRXODtOHW4xv03FnEN%2BSBHtFqUhOlbdHqTCHgAIf2eoveZlOzrZNiML%2B0zL8GOqUB5IFQNb8MhwPc0WaXLsC6C0HMA6rXpw8cmU%2Fh5BECADBNN%2BMB5eKLXddh1AU%2BF90KIQ90%2FmXCrlLPxxtkJp30RUMhR9yhJlD%2B5ueMroaWAlaBTj6s2kMzyBiZUAKKcHJf9yOOyZ0rbl5ERy8FVyknh%2F8bqH9UtXFfnHjAaRhCy%2FqwNu57XjYfz6jmwf%2FNOQkqtQ6056TDtGvG1Eq4s6oJHtfG7M0S&X-Amz-Signature=0586fb262f343058975294b21f227492eca4c4995e8cc051d672f86e0bc49fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

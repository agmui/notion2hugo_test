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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOVRGTK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCmgkiPze4o4LCM4vnVELRDsFgREJTvBYu5AdEQu7s4gIhAL0DFzRzkn0nmmyn2zD0eD%2F59pd5w6CWXHNCyAPylbuFKv8DCHsQABoMNjM3NDIzMTgzODA1IgzQAj4WsYvQF0jss6Mq3APXjK2pgeR1qfVs%2B4VjRDEgmNosXkD9jYOMN3kQYm8qa3BLJalYiHsHdXpRNJmG7gdE0NNMo1DllpW7pM1tLHFg2d0tUqkanZ4wjdz4e45lu%2BxxnRzWdvpSrwD1oPMVFYG2%2FT7Is1E2u2L%2BPxWyhWbctwgJqjf%2FijtTK9hwGizBaPkiYJ25Y50E7Yam5Z0PswV8MwTd467BLTcOr1WoDgn2Lw59wMw7E3w0WmwcTTM1iM72HyUcvmCxF9XDjdtKBLuyH9bOxThb6vGw77v1BBMmgaBFYLmTYX2Aubz0380JXjcTQM0izXvcmXEjFmuFImmaZBmFH%2FR0LQ1CrOBD0KDseug3unSh8sYdH2YKjkR0Pu9HDG9fsrr7H2UtXtgff%2Bqj3%2F4%2Fr0imgalz0BJW9AHqFlzph2dx8xxoTWvAIOA1q26d8%2F0dpYAB77soMNwzBFNo3uxTtmHS7aA%2BzuK5%2F4hET2UsDwDqV1aBeBx6EMlZIjTEXu%2FqHmLI7%2BJ1xEIWLJd0NbavqnVVctidYcqAGQij%2Ft1U81GlRSxH36FdfCZaTeSIlP7lpktuzt3wUJlIB7vdqh8yRLNPjipG60nJh9ZYQ0lKnNg4Dt1VLaT7V0FfHOwBuJImjEHbMkKNnjDUu9W%2FBjqkAeC69rJdySSrW2cgQCJYdgbZzLlQ5byx1mklvHzgRgm5dx5laqFP1SzZU4va6eUQekapjUE%2BVHIzcjko1zVFUUrNtQFAtjItwNoyyYg8z0BGBMeFIPdgDCjlvxtVIE%2B0A149dcRH1ne3fRflZBGJxNE65aDK7YHqnIcOajpzHAiy%2F0vAr5T2%2Bu9njor%2BcTozSomfQr7rHrt7jV4jGIGPqXztFlVg&X-Amz-Signature=abfb9c930630c3ebdbd9fa621544940ed7d16c6cea2bd09f3424420efd5e5505&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOVRGTK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCmgkiPze4o4LCM4vnVELRDsFgREJTvBYu5AdEQu7s4gIhAL0DFzRzkn0nmmyn2zD0eD%2F59pd5w6CWXHNCyAPylbuFKv8DCHsQABoMNjM3NDIzMTgzODA1IgzQAj4WsYvQF0jss6Mq3APXjK2pgeR1qfVs%2B4VjRDEgmNosXkD9jYOMN3kQYm8qa3BLJalYiHsHdXpRNJmG7gdE0NNMo1DllpW7pM1tLHFg2d0tUqkanZ4wjdz4e45lu%2BxxnRzWdvpSrwD1oPMVFYG2%2FT7Is1E2u2L%2BPxWyhWbctwgJqjf%2FijtTK9hwGizBaPkiYJ25Y50E7Yam5Z0PswV8MwTd467BLTcOr1WoDgn2Lw59wMw7E3w0WmwcTTM1iM72HyUcvmCxF9XDjdtKBLuyH9bOxThb6vGw77v1BBMmgaBFYLmTYX2Aubz0380JXjcTQM0izXvcmXEjFmuFImmaZBmFH%2FR0LQ1CrOBD0KDseug3unSh8sYdH2YKjkR0Pu9HDG9fsrr7H2UtXtgff%2Bqj3%2F4%2Fr0imgalz0BJW9AHqFlzph2dx8xxoTWvAIOA1q26d8%2F0dpYAB77soMNwzBFNo3uxTtmHS7aA%2BzuK5%2F4hET2UsDwDqV1aBeBx6EMlZIjTEXu%2FqHmLI7%2BJ1xEIWLJd0NbavqnVVctidYcqAGQij%2Ft1U81GlRSxH36FdfCZaTeSIlP7lpktuzt3wUJlIB7vdqh8yRLNPjipG60nJh9ZYQ0lKnNg4Dt1VLaT7V0FfHOwBuJImjEHbMkKNnjDUu9W%2FBjqkAeC69rJdySSrW2cgQCJYdgbZzLlQ5byx1mklvHzgRgm5dx5laqFP1SzZU4va6eUQekapjUE%2BVHIzcjko1zVFUUrNtQFAtjItwNoyyYg8z0BGBMeFIPdgDCjlvxtVIE%2B0A149dcRH1ne3fRflZBGJxNE65aDK7YHqnIcOajpzHAiy%2F0vAr5T2%2Bu9njor%2BcTozSomfQr7rHrt7jV4jGIGPqXztFlVg&X-Amz-Signature=9f26a7df79976106fdad164fd0c0d356caa986cc8cd36308c2416987e21639a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOVRGTK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCmgkiPze4o4LCM4vnVELRDsFgREJTvBYu5AdEQu7s4gIhAL0DFzRzkn0nmmyn2zD0eD%2F59pd5w6CWXHNCyAPylbuFKv8DCHsQABoMNjM3NDIzMTgzODA1IgzQAj4WsYvQF0jss6Mq3APXjK2pgeR1qfVs%2B4VjRDEgmNosXkD9jYOMN3kQYm8qa3BLJalYiHsHdXpRNJmG7gdE0NNMo1DllpW7pM1tLHFg2d0tUqkanZ4wjdz4e45lu%2BxxnRzWdvpSrwD1oPMVFYG2%2FT7Is1E2u2L%2BPxWyhWbctwgJqjf%2FijtTK9hwGizBaPkiYJ25Y50E7Yam5Z0PswV8MwTd467BLTcOr1WoDgn2Lw59wMw7E3w0WmwcTTM1iM72HyUcvmCxF9XDjdtKBLuyH9bOxThb6vGw77v1BBMmgaBFYLmTYX2Aubz0380JXjcTQM0izXvcmXEjFmuFImmaZBmFH%2FR0LQ1CrOBD0KDseug3unSh8sYdH2YKjkR0Pu9HDG9fsrr7H2UtXtgff%2Bqj3%2F4%2Fr0imgalz0BJW9AHqFlzph2dx8xxoTWvAIOA1q26d8%2F0dpYAB77soMNwzBFNo3uxTtmHS7aA%2BzuK5%2F4hET2UsDwDqV1aBeBx6EMlZIjTEXu%2FqHmLI7%2BJ1xEIWLJd0NbavqnVVctidYcqAGQij%2Ft1U81GlRSxH36FdfCZaTeSIlP7lpktuzt3wUJlIB7vdqh8yRLNPjipG60nJh9ZYQ0lKnNg4Dt1VLaT7V0FfHOwBuJImjEHbMkKNnjDUu9W%2FBjqkAeC69rJdySSrW2cgQCJYdgbZzLlQ5byx1mklvHzgRgm5dx5laqFP1SzZU4va6eUQekapjUE%2BVHIzcjko1zVFUUrNtQFAtjItwNoyyYg8z0BGBMeFIPdgDCjlvxtVIE%2B0A149dcRH1ne3fRflZBGJxNE65aDK7YHqnIcOajpzHAiy%2F0vAr5T2%2Bu9njor%2BcTozSomfQr7rHrt7jV4jGIGPqXztFlVg&X-Amz-Signature=029083a6e2ca6ba27155df8da8ba7442828242e9cffd40883293d35ecdcb4411&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOVRGTK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCmgkiPze4o4LCM4vnVELRDsFgREJTvBYu5AdEQu7s4gIhAL0DFzRzkn0nmmyn2zD0eD%2F59pd5w6CWXHNCyAPylbuFKv8DCHsQABoMNjM3NDIzMTgzODA1IgzQAj4WsYvQF0jss6Mq3APXjK2pgeR1qfVs%2B4VjRDEgmNosXkD9jYOMN3kQYm8qa3BLJalYiHsHdXpRNJmG7gdE0NNMo1DllpW7pM1tLHFg2d0tUqkanZ4wjdz4e45lu%2BxxnRzWdvpSrwD1oPMVFYG2%2FT7Is1E2u2L%2BPxWyhWbctwgJqjf%2FijtTK9hwGizBaPkiYJ25Y50E7Yam5Z0PswV8MwTd467BLTcOr1WoDgn2Lw59wMw7E3w0WmwcTTM1iM72HyUcvmCxF9XDjdtKBLuyH9bOxThb6vGw77v1BBMmgaBFYLmTYX2Aubz0380JXjcTQM0izXvcmXEjFmuFImmaZBmFH%2FR0LQ1CrOBD0KDseug3unSh8sYdH2YKjkR0Pu9HDG9fsrr7H2UtXtgff%2Bqj3%2F4%2Fr0imgalz0BJW9AHqFlzph2dx8xxoTWvAIOA1q26d8%2F0dpYAB77soMNwzBFNo3uxTtmHS7aA%2BzuK5%2F4hET2UsDwDqV1aBeBx6EMlZIjTEXu%2FqHmLI7%2BJ1xEIWLJd0NbavqnVVctidYcqAGQij%2Ft1U81GlRSxH36FdfCZaTeSIlP7lpktuzt3wUJlIB7vdqh8yRLNPjipG60nJh9ZYQ0lKnNg4Dt1VLaT7V0FfHOwBuJImjEHbMkKNnjDUu9W%2FBjqkAeC69rJdySSrW2cgQCJYdgbZzLlQ5byx1mklvHzgRgm5dx5laqFP1SzZU4va6eUQekapjUE%2BVHIzcjko1zVFUUrNtQFAtjItwNoyyYg8z0BGBMeFIPdgDCjlvxtVIE%2B0A149dcRH1ne3fRflZBGJxNE65aDK7YHqnIcOajpzHAiy%2F0vAr5T2%2Bu9njor%2BcTozSomfQr7rHrt7jV4jGIGPqXztFlVg&X-Amz-Signature=c94f598f3d01e5b9894a532192078e8c6c5ca5e6fe757ab052b8d44604b37960&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOVRGTK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCmgkiPze4o4LCM4vnVELRDsFgREJTvBYu5AdEQu7s4gIhAL0DFzRzkn0nmmyn2zD0eD%2F59pd5w6CWXHNCyAPylbuFKv8DCHsQABoMNjM3NDIzMTgzODA1IgzQAj4WsYvQF0jss6Mq3APXjK2pgeR1qfVs%2B4VjRDEgmNosXkD9jYOMN3kQYm8qa3BLJalYiHsHdXpRNJmG7gdE0NNMo1DllpW7pM1tLHFg2d0tUqkanZ4wjdz4e45lu%2BxxnRzWdvpSrwD1oPMVFYG2%2FT7Is1E2u2L%2BPxWyhWbctwgJqjf%2FijtTK9hwGizBaPkiYJ25Y50E7Yam5Z0PswV8MwTd467BLTcOr1WoDgn2Lw59wMw7E3w0WmwcTTM1iM72HyUcvmCxF9XDjdtKBLuyH9bOxThb6vGw77v1BBMmgaBFYLmTYX2Aubz0380JXjcTQM0izXvcmXEjFmuFImmaZBmFH%2FR0LQ1CrOBD0KDseug3unSh8sYdH2YKjkR0Pu9HDG9fsrr7H2UtXtgff%2Bqj3%2F4%2Fr0imgalz0BJW9AHqFlzph2dx8xxoTWvAIOA1q26d8%2F0dpYAB77soMNwzBFNo3uxTtmHS7aA%2BzuK5%2F4hET2UsDwDqV1aBeBx6EMlZIjTEXu%2FqHmLI7%2BJ1xEIWLJd0NbavqnVVctidYcqAGQij%2Ft1U81GlRSxH36FdfCZaTeSIlP7lpktuzt3wUJlIB7vdqh8yRLNPjipG60nJh9ZYQ0lKnNg4Dt1VLaT7V0FfHOwBuJImjEHbMkKNnjDUu9W%2FBjqkAeC69rJdySSrW2cgQCJYdgbZzLlQ5byx1mklvHzgRgm5dx5laqFP1SzZU4va6eUQekapjUE%2BVHIzcjko1zVFUUrNtQFAtjItwNoyyYg8z0BGBMeFIPdgDCjlvxtVIE%2B0A149dcRH1ne3fRflZBGJxNE65aDK7YHqnIcOajpzHAiy%2F0vAr5T2%2Bu9njor%2BcTozSomfQr7rHrt7jV4jGIGPqXztFlVg&X-Amz-Signature=fad8598989532fbdc627476fa4d83d22f6b7011acd3e3ff13c59013be514e61f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOVRGTK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCmgkiPze4o4LCM4vnVELRDsFgREJTvBYu5AdEQu7s4gIhAL0DFzRzkn0nmmyn2zD0eD%2F59pd5w6CWXHNCyAPylbuFKv8DCHsQABoMNjM3NDIzMTgzODA1IgzQAj4WsYvQF0jss6Mq3APXjK2pgeR1qfVs%2B4VjRDEgmNosXkD9jYOMN3kQYm8qa3BLJalYiHsHdXpRNJmG7gdE0NNMo1DllpW7pM1tLHFg2d0tUqkanZ4wjdz4e45lu%2BxxnRzWdvpSrwD1oPMVFYG2%2FT7Is1E2u2L%2BPxWyhWbctwgJqjf%2FijtTK9hwGizBaPkiYJ25Y50E7Yam5Z0PswV8MwTd467BLTcOr1WoDgn2Lw59wMw7E3w0WmwcTTM1iM72HyUcvmCxF9XDjdtKBLuyH9bOxThb6vGw77v1BBMmgaBFYLmTYX2Aubz0380JXjcTQM0izXvcmXEjFmuFImmaZBmFH%2FR0LQ1CrOBD0KDseug3unSh8sYdH2YKjkR0Pu9HDG9fsrr7H2UtXtgff%2Bqj3%2F4%2Fr0imgalz0BJW9AHqFlzph2dx8xxoTWvAIOA1q26d8%2F0dpYAB77soMNwzBFNo3uxTtmHS7aA%2BzuK5%2F4hET2UsDwDqV1aBeBx6EMlZIjTEXu%2FqHmLI7%2BJ1xEIWLJd0NbavqnVVctidYcqAGQij%2Ft1U81GlRSxH36FdfCZaTeSIlP7lpktuzt3wUJlIB7vdqh8yRLNPjipG60nJh9ZYQ0lKnNg4Dt1VLaT7V0FfHOwBuJImjEHbMkKNnjDUu9W%2FBjqkAeC69rJdySSrW2cgQCJYdgbZzLlQ5byx1mklvHzgRgm5dx5laqFP1SzZU4va6eUQekapjUE%2BVHIzcjko1zVFUUrNtQFAtjItwNoyyYg8z0BGBMeFIPdgDCjlvxtVIE%2B0A149dcRH1ne3fRflZBGJxNE65aDK7YHqnIcOajpzHAiy%2F0vAr5T2%2Bu9njor%2BcTozSomfQr7rHrt7jV4jGIGPqXztFlVg&X-Amz-Signature=54bb7cbb10b409c12009461291c455eb59c77b1d808c42e8eb877bfb15202b59&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOVRGTK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCmgkiPze4o4LCM4vnVELRDsFgREJTvBYu5AdEQu7s4gIhAL0DFzRzkn0nmmyn2zD0eD%2F59pd5w6CWXHNCyAPylbuFKv8DCHsQABoMNjM3NDIzMTgzODA1IgzQAj4WsYvQF0jss6Mq3APXjK2pgeR1qfVs%2B4VjRDEgmNosXkD9jYOMN3kQYm8qa3BLJalYiHsHdXpRNJmG7gdE0NNMo1DllpW7pM1tLHFg2d0tUqkanZ4wjdz4e45lu%2BxxnRzWdvpSrwD1oPMVFYG2%2FT7Is1E2u2L%2BPxWyhWbctwgJqjf%2FijtTK9hwGizBaPkiYJ25Y50E7Yam5Z0PswV8MwTd467BLTcOr1WoDgn2Lw59wMw7E3w0WmwcTTM1iM72HyUcvmCxF9XDjdtKBLuyH9bOxThb6vGw77v1BBMmgaBFYLmTYX2Aubz0380JXjcTQM0izXvcmXEjFmuFImmaZBmFH%2FR0LQ1CrOBD0KDseug3unSh8sYdH2YKjkR0Pu9HDG9fsrr7H2UtXtgff%2Bqj3%2F4%2Fr0imgalz0BJW9AHqFlzph2dx8xxoTWvAIOA1q26d8%2F0dpYAB77soMNwzBFNo3uxTtmHS7aA%2BzuK5%2F4hET2UsDwDqV1aBeBx6EMlZIjTEXu%2FqHmLI7%2BJ1xEIWLJd0NbavqnVVctidYcqAGQij%2Ft1U81GlRSxH36FdfCZaTeSIlP7lpktuzt3wUJlIB7vdqh8yRLNPjipG60nJh9ZYQ0lKnNg4Dt1VLaT7V0FfHOwBuJImjEHbMkKNnjDUu9W%2FBjqkAeC69rJdySSrW2cgQCJYdgbZzLlQ5byx1mklvHzgRgm5dx5laqFP1SzZU4va6eUQekapjUE%2BVHIzcjko1zVFUUrNtQFAtjItwNoyyYg8z0BGBMeFIPdgDCjlvxtVIE%2B0A149dcRH1ne3fRflZBGJxNE65aDK7YHqnIcOajpzHAiy%2F0vAr5T2%2Bu9njor%2BcTozSomfQr7rHrt7jV4jGIGPqXztFlVg&X-Amz-Signature=4a3e2e07daf87f8ab5e6ac5a4acb1ff8867059a9436c2239fb0f75fff754f1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

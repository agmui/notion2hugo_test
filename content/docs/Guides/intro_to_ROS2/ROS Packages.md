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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHRO3T5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGKRZajPdeTk%2BVykTqK7ZLJ4iD4IyM%2BvZVearqSoJ55sAiAep9XFO%2BxsK076knY%2FyYPIGZD88LXnpslLE23CuK7kJSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM3sJVE6UV%2FaTvsi7MKtwDYoUS0tMTyA9tKkcelYucI7a3AQDkiL7R%2FmWykHINr0hJqqGv3P%2FzHoFrvvkaprDmcQFoY7OgtBcZ27bhgcHqiNwsiU3vfVnt2DG%2BStJu4SDoDPSXVbuaFK2s1xZyzMNxV2%2FYfUlJaD5VXquTMO0WQX1sYNU2U%2F%2FNApIVgLM%2F3eedIITgYsvZtD%2FzJB8enJC2vqNA0Z7dvuDl7tm23m3iuYIZtuq1Rebi5h5b1UVgzyCb0qhagh9eAmt4grhLqCno4zZIAKLg0pS7U8DTHq9NaZM7nklrVDz%2BuGSSakqeKUdUQMicdY4%2FF3lTHCMTkArjXcY3PtuMz2NnV1BG%2FEBxrQBjjBTRkJBVn4nNGZj7QoTy%2FsXJw%2FBjlCJVDS5cLCAikbT8qHyJmWnmR%2BJ%2FfTZngYELppEwoRj%2F1jmUFD3jGokxuHylQlYLvi5uUeNArzZ7TzBZaYgp8ysCABiq1lopD1Shw2DQ%2FHjKjcLjN2aeUHrcG6a0PJLNw9bZFBcgfiV1grvOz88sCvbiznHS80xp2ujiePaNIRLaOQ1e9cJnWaW6iDE0hQPXLTiqSJ6p9RIwcvek53UpOnS0R966YyASGn7kn6KTaXAc18UOcMzovDv6yWE%2FYiklKGgs1DIwjZbIwQY6pgFVdR6ZosXviWES%2F9ynCQMufjjMpZRHK9wGGD10OFHRP22%2B883cvzX4XCnAMQOULd68Z28Sy8dddEs5vgkN04u0F8Hc5KgN0Kq3KDHU8XQ9MqnF6t8wMZEtQSfRLRHxL8zgNnhdu9M1tSEbguAuAltAWHsTuwnDYDVNYEndZvnyLUev2GFTE5EFyZxgscCeK15N0drfoic5%2FcT%2Fj9zkG7JzGcBYotAG&X-Amz-Signature=6b3a971d5f23c6192e3a9a3ebadf0666832c5b0406bee95d6ebe69a04b7f8af5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHRO3T5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGKRZajPdeTk%2BVykTqK7ZLJ4iD4IyM%2BvZVearqSoJ55sAiAep9XFO%2BxsK076knY%2FyYPIGZD88LXnpslLE23CuK7kJSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM3sJVE6UV%2FaTvsi7MKtwDYoUS0tMTyA9tKkcelYucI7a3AQDkiL7R%2FmWykHINr0hJqqGv3P%2FzHoFrvvkaprDmcQFoY7OgtBcZ27bhgcHqiNwsiU3vfVnt2DG%2BStJu4SDoDPSXVbuaFK2s1xZyzMNxV2%2FYfUlJaD5VXquTMO0WQX1sYNU2U%2F%2FNApIVgLM%2F3eedIITgYsvZtD%2FzJB8enJC2vqNA0Z7dvuDl7tm23m3iuYIZtuq1Rebi5h5b1UVgzyCb0qhagh9eAmt4grhLqCno4zZIAKLg0pS7U8DTHq9NaZM7nklrVDz%2BuGSSakqeKUdUQMicdY4%2FF3lTHCMTkArjXcY3PtuMz2NnV1BG%2FEBxrQBjjBTRkJBVn4nNGZj7QoTy%2FsXJw%2FBjlCJVDS5cLCAikbT8qHyJmWnmR%2BJ%2FfTZngYELppEwoRj%2F1jmUFD3jGokxuHylQlYLvi5uUeNArzZ7TzBZaYgp8ysCABiq1lopD1Shw2DQ%2FHjKjcLjN2aeUHrcG6a0PJLNw9bZFBcgfiV1grvOz88sCvbiznHS80xp2ujiePaNIRLaOQ1e9cJnWaW6iDE0hQPXLTiqSJ6p9RIwcvek53UpOnS0R966YyASGn7kn6KTaXAc18UOcMzovDv6yWE%2FYiklKGgs1DIwjZbIwQY6pgFVdR6ZosXviWES%2F9ynCQMufjjMpZRHK9wGGD10OFHRP22%2B883cvzX4XCnAMQOULd68Z28Sy8dddEs5vgkN04u0F8Hc5KgN0Kq3KDHU8XQ9MqnF6t8wMZEtQSfRLRHxL8zgNnhdu9M1tSEbguAuAltAWHsTuwnDYDVNYEndZvnyLUev2GFTE5EFyZxgscCeK15N0drfoic5%2FcT%2Fj9zkG7JzGcBYotAG&X-Amz-Signature=fecdfe0590d8aff9eb2f413f67ed5b60104773c903e09664034bbdf2c69f0e24&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHRO3T5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGKRZajPdeTk%2BVykTqK7ZLJ4iD4IyM%2BvZVearqSoJ55sAiAep9XFO%2BxsK076knY%2FyYPIGZD88LXnpslLE23CuK7kJSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM3sJVE6UV%2FaTvsi7MKtwDYoUS0tMTyA9tKkcelYucI7a3AQDkiL7R%2FmWykHINr0hJqqGv3P%2FzHoFrvvkaprDmcQFoY7OgtBcZ27bhgcHqiNwsiU3vfVnt2DG%2BStJu4SDoDPSXVbuaFK2s1xZyzMNxV2%2FYfUlJaD5VXquTMO0WQX1sYNU2U%2F%2FNApIVgLM%2F3eedIITgYsvZtD%2FzJB8enJC2vqNA0Z7dvuDl7tm23m3iuYIZtuq1Rebi5h5b1UVgzyCb0qhagh9eAmt4grhLqCno4zZIAKLg0pS7U8DTHq9NaZM7nklrVDz%2BuGSSakqeKUdUQMicdY4%2FF3lTHCMTkArjXcY3PtuMz2NnV1BG%2FEBxrQBjjBTRkJBVn4nNGZj7QoTy%2FsXJw%2FBjlCJVDS5cLCAikbT8qHyJmWnmR%2BJ%2FfTZngYELppEwoRj%2F1jmUFD3jGokxuHylQlYLvi5uUeNArzZ7TzBZaYgp8ysCABiq1lopD1Shw2DQ%2FHjKjcLjN2aeUHrcG6a0PJLNw9bZFBcgfiV1grvOz88sCvbiznHS80xp2ujiePaNIRLaOQ1e9cJnWaW6iDE0hQPXLTiqSJ6p9RIwcvek53UpOnS0R966YyASGn7kn6KTaXAc18UOcMzovDv6yWE%2FYiklKGgs1DIwjZbIwQY6pgFVdR6ZosXviWES%2F9ynCQMufjjMpZRHK9wGGD10OFHRP22%2B883cvzX4XCnAMQOULd68Z28Sy8dddEs5vgkN04u0F8Hc5KgN0Kq3KDHU8XQ9MqnF6t8wMZEtQSfRLRHxL8zgNnhdu9M1tSEbguAuAltAWHsTuwnDYDVNYEndZvnyLUev2GFTE5EFyZxgscCeK15N0drfoic5%2FcT%2Fj9zkG7JzGcBYotAG&X-Amz-Signature=3c1c92628053dcaec559b95b2f03a75dfe88c70cb06a0c2b4015e0e3789c2ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHRO3T5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGKRZajPdeTk%2BVykTqK7ZLJ4iD4IyM%2BvZVearqSoJ55sAiAep9XFO%2BxsK076knY%2FyYPIGZD88LXnpslLE23CuK7kJSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM3sJVE6UV%2FaTvsi7MKtwDYoUS0tMTyA9tKkcelYucI7a3AQDkiL7R%2FmWykHINr0hJqqGv3P%2FzHoFrvvkaprDmcQFoY7OgtBcZ27bhgcHqiNwsiU3vfVnt2DG%2BStJu4SDoDPSXVbuaFK2s1xZyzMNxV2%2FYfUlJaD5VXquTMO0WQX1sYNU2U%2F%2FNApIVgLM%2F3eedIITgYsvZtD%2FzJB8enJC2vqNA0Z7dvuDl7tm23m3iuYIZtuq1Rebi5h5b1UVgzyCb0qhagh9eAmt4grhLqCno4zZIAKLg0pS7U8DTHq9NaZM7nklrVDz%2BuGSSakqeKUdUQMicdY4%2FF3lTHCMTkArjXcY3PtuMz2NnV1BG%2FEBxrQBjjBTRkJBVn4nNGZj7QoTy%2FsXJw%2FBjlCJVDS5cLCAikbT8qHyJmWnmR%2BJ%2FfTZngYELppEwoRj%2F1jmUFD3jGokxuHylQlYLvi5uUeNArzZ7TzBZaYgp8ysCABiq1lopD1Shw2DQ%2FHjKjcLjN2aeUHrcG6a0PJLNw9bZFBcgfiV1grvOz88sCvbiznHS80xp2ujiePaNIRLaOQ1e9cJnWaW6iDE0hQPXLTiqSJ6p9RIwcvek53UpOnS0R966YyASGn7kn6KTaXAc18UOcMzovDv6yWE%2FYiklKGgs1DIwjZbIwQY6pgFVdR6ZosXviWES%2F9ynCQMufjjMpZRHK9wGGD10OFHRP22%2B883cvzX4XCnAMQOULd68Z28Sy8dddEs5vgkN04u0F8Hc5KgN0Kq3KDHU8XQ9MqnF6t8wMZEtQSfRLRHxL8zgNnhdu9M1tSEbguAuAltAWHsTuwnDYDVNYEndZvnyLUev2GFTE5EFyZxgscCeK15N0drfoic5%2FcT%2Fj9zkG7JzGcBYotAG&X-Amz-Signature=a67bce840f926581812d3acece49449dee68cbfe8c8631fece6f0c2ee1d67201&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHRO3T5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGKRZajPdeTk%2BVykTqK7ZLJ4iD4IyM%2BvZVearqSoJ55sAiAep9XFO%2BxsK076knY%2FyYPIGZD88LXnpslLE23CuK7kJSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM3sJVE6UV%2FaTvsi7MKtwDYoUS0tMTyA9tKkcelYucI7a3AQDkiL7R%2FmWykHINr0hJqqGv3P%2FzHoFrvvkaprDmcQFoY7OgtBcZ27bhgcHqiNwsiU3vfVnt2DG%2BStJu4SDoDPSXVbuaFK2s1xZyzMNxV2%2FYfUlJaD5VXquTMO0WQX1sYNU2U%2F%2FNApIVgLM%2F3eedIITgYsvZtD%2FzJB8enJC2vqNA0Z7dvuDl7tm23m3iuYIZtuq1Rebi5h5b1UVgzyCb0qhagh9eAmt4grhLqCno4zZIAKLg0pS7U8DTHq9NaZM7nklrVDz%2BuGSSakqeKUdUQMicdY4%2FF3lTHCMTkArjXcY3PtuMz2NnV1BG%2FEBxrQBjjBTRkJBVn4nNGZj7QoTy%2FsXJw%2FBjlCJVDS5cLCAikbT8qHyJmWnmR%2BJ%2FfTZngYELppEwoRj%2F1jmUFD3jGokxuHylQlYLvi5uUeNArzZ7TzBZaYgp8ysCABiq1lopD1Shw2DQ%2FHjKjcLjN2aeUHrcG6a0PJLNw9bZFBcgfiV1grvOz88sCvbiznHS80xp2ujiePaNIRLaOQ1e9cJnWaW6iDE0hQPXLTiqSJ6p9RIwcvek53UpOnS0R966YyASGn7kn6KTaXAc18UOcMzovDv6yWE%2FYiklKGgs1DIwjZbIwQY6pgFVdR6ZosXviWES%2F9ynCQMufjjMpZRHK9wGGD10OFHRP22%2B883cvzX4XCnAMQOULd68Z28Sy8dddEs5vgkN04u0F8Hc5KgN0Kq3KDHU8XQ9MqnF6t8wMZEtQSfRLRHxL8zgNnhdu9M1tSEbguAuAltAWHsTuwnDYDVNYEndZvnyLUev2GFTE5EFyZxgscCeK15N0drfoic5%2FcT%2Fj9zkG7JzGcBYotAG&X-Amz-Signature=0bbab9018440355aa27e08a6cb04b61784c8fa76fb572be54d16c4b26bb4d8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHRO3T5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGKRZajPdeTk%2BVykTqK7ZLJ4iD4IyM%2BvZVearqSoJ55sAiAep9XFO%2BxsK076knY%2FyYPIGZD88LXnpslLE23CuK7kJSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM3sJVE6UV%2FaTvsi7MKtwDYoUS0tMTyA9tKkcelYucI7a3AQDkiL7R%2FmWykHINr0hJqqGv3P%2FzHoFrvvkaprDmcQFoY7OgtBcZ27bhgcHqiNwsiU3vfVnt2DG%2BStJu4SDoDPSXVbuaFK2s1xZyzMNxV2%2FYfUlJaD5VXquTMO0WQX1sYNU2U%2F%2FNApIVgLM%2F3eedIITgYsvZtD%2FzJB8enJC2vqNA0Z7dvuDl7tm23m3iuYIZtuq1Rebi5h5b1UVgzyCb0qhagh9eAmt4grhLqCno4zZIAKLg0pS7U8DTHq9NaZM7nklrVDz%2BuGSSakqeKUdUQMicdY4%2FF3lTHCMTkArjXcY3PtuMz2NnV1BG%2FEBxrQBjjBTRkJBVn4nNGZj7QoTy%2FsXJw%2FBjlCJVDS5cLCAikbT8qHyJmWnmR%2BJ%2FfTZngYELppEwoRj%2F1jmUFD3jGokxuHylQlYLvi5uUeNArzZ7TzBZaYgp8ysCABiq1lopD1Shw2DQ%2FHjKjcLjN2aeUHrcG6a0PJLNw9bZFBcgfiV1grvOz88sCvbiznHS80xp2ujiePaNIRLaOQ1e9cJnWaW6iDE0hQPXLTiqSJ6p9RIwcvek53UpOnS0R966YyASGn7kn6KTaXAc18UOcMzovDv6yWE%2FYiklKGgs1DIwjZbIwQY6pgFVdR6ZosXviWES%2F9ynCQMufjjMpZRHK9wGGD10OFHRP22%2B883cvzX4XCnAMQOULd68Z28Sy8dddEs5vgkN04u0F8Hc5KgN0Kq3KDHU8XQ9MqnF6t8wMZEtQSfRLRHxL8zgNnhdu9M1tSEbguAuAltAWHsTuwnDYDVNYEndZvnyLUev2GFTE5EFyZxgscCeK15N0drfoic5%2FcT%2Fj9zkG7JzGcBYotAG&X-Amz-Signature=baa84821f75830c026f399f33d4599978b9f77b384c3f9bd2cf6d0348a37382a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHRO3T5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGKRZajPdeTk%2BVykTqK7ZLJ4iD4IyM%2BvZVearqSoJ55sAiAep9XFO%2BxsK076knY%2FyYPIGZD88LXnpslLE23CuK7kJSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM3sJVE6UV%2FaTvsi7MKtwDYoUS0tMTyA9tKkcelYucI7a3AQDkiL7R%2FmWykHINr0hJqqGv3P%2FzHoFrvvkaprDmcQFoY7OgtBcZ27bhgcHqiNwsiU3vfVnt2DG%2BStJu4SDoDPSXVbuaFK2s1xZyzMNxV2%2FYfUlJaD5VXquTMO0WQX1sYNU2U%2F%2FNApIVgLM%2F3eedIITgYsvZtD%2FzJB8enJC2vqNA0Z7dvuDl7tm23m3iuYIZtuq1Rebi5h5b1UVgzyCb0qhagh9eAmt4grhLqCno4zZIAKLg0pS7U8DTHq9NaZM7nklrVDz%2BuGSSakqeKUdUQMicdY4%2FF3lTHCMTkArjXcY3PtuMz2NnV1BG%2FEBxrQBjjBTRkJBVn4nNGZj7QoTy%2FsXJw%2FBjlCJVDS5cLCAikbT8qHyJmWnmR%2BJ%2FfTZngYELppEwoRj%2F1jmUFD3jGokxuHylQlYLvi5uUeNArzZ7TzBZaYgp8ysCABiq1lopD1Shw2DQ%2FHjKjcLjN2aeUHrcG6a0PJLNw9bZFBcgfiV1grvOz88sCvbiznHS80xp2ujiePaNIRLaOQ1e9cJnWaW6iDE0hQPXLTiqSJ6p9RIwcvek53UpOnS0R966YyASGn7kn6KTaXAc18UOcMzovDv6yWE%2FYiklKGgs1DIwjZbIwQY6pgFVdR6ZosXviWES%2F9ynCQMufjjMpZRHK9wGGD10OFHRP22%2B883cvzX4XCnAMQOULd68Z28Sy8dddEs5vgkN04u0F8Hc5KgN0Kq3KDHU8XQ9MqnF6t8wMZEtQSfRLRHxL8zgNnhdu9M1tSEbguAuAltAWHsTuwnDYDVNYEndZvnyLUev2GFTE5EFyZxgscCeK15N0drfoic5%2FcT%2Fj9zkG7JzGcBYotAG&X-Amz-Signature=d0c1e2ec32cf162bb61844e6fc82e7b14ac2d711f09b04c41a0b849bcd81416c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

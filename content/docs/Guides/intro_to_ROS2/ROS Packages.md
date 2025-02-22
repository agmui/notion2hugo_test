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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZ3UA6L%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgmv%2FugJQz2VlcU1jp%2Fr5fwUPvHT0WLqgo3wveOZ2GdAiEA9rc8DewNGKWp94GZ5KIgsENbKiNKogJoFU8huHiI%2FtsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb0kqwJVWhfQq%2Bo7ircAzMufE1CjJCu9N6kc0jHZG3sOFarYxzQkw1VR%2FOCXJtdSbPSK5%2Bx2sXQEQK%2Fm%2BD71a1fFloTD0Zi8Es%2FWVUxp7UI6vKzGzB5VWfhha%2FqFK2w%2B9zsWPVnNwL7NoOKv5QukSyviNifg9wZOj4%2B4Y7R9sCsJ4ZOzl9Gt7EU%2BqiTYmUKdtMLp%2BCKAYJMA0lPadTIVt7SMykKNYdPKm3vPBGnjMwmF4OyCXT2Pw7IGP9VCf4%2FuNB2RfFt5uC6YCKVN3I920GjdjGgvZJ7O6bj9b2ApwHgFCPZFGbBOiAYy5N0bvfvpyeye9KJ0bexLRTIlKUJ8YiXE3m9TN4dEYDjeddF6pm6yI3km%2FCEQirMq8p78ZaCKdJaRfBzfOfOVbfJmkDYHug6KDNU1EE%2BiBFCiV%2FuIw0R9M6onllYkMVcz3jLnpFHl6uSUiNo0gR%2B%2FoN6MM%2BneS6bEnZycogJqzn75Ojwi2JsUvFatT9%2FmXmE6wYoWD38YhM0LnLUKEV4wZcc90Bok6XwqIeYjGZiLQ5tUFgfnZ1uTjfALh6hVsMPpofE0bnFag3qhVkRJGh0OoEZyy1XEClcbqH%2F5AHji0N1hel0%2Bdi8lwSgRZt9meYl5W7GzZqwZipRuzlmT5%2FtwUO4MMGN6L0GOqUB4IYtMJ9tmEaJsZl%2BquDdHdg002upPef7eMBaqNqjGM4%2BIXgGqxheROsLlCzRwRNiwwtoxCGf%2Fv4gbMqpNHhRFhu3D7Jm23vQUewcG1HzdELY%2BNWFMuXyL57fBHog575b4xRTC0EfoJJzHzn5DJZS8SrtB%2B66M6RNWQY27sMvHvYmKAJ9VN4BVqeQI%2Fz7kvTNJkHh7TR8ogKResJ%2BPpcPlIdmJejk&X-Amz-Signature=c405c368e0e584b3784a95e79f8f18b0ad55558ec241e51f690e01c870e3d091&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZ3UA6L%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgmv%2FugJQz2VlcU1jp%2Fr5fwUPvHT0WLqgo3wveOZ2GdAiEA9rc8DewNGKWp94GZ5KIgsENbKiNKogJoFU8huHiI%2FtsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb0kqwJVWhfQq%2Bo7ircAzMufE1CjJCu9N6kc0jHZG3sOFarYxzQkw1VR%2FOCXJtdSbPSK5%2Bx2sXQEQK%2Fm%2BD71a1fFloTD0Zi8Es%2FWVUxp7UI6vKzGzB5VWfhha%2FqFK2w%2B9zsWPVnNwL7NoOKv5QukSyviNifg9wZOj4%2B4Y7R9sCsJ4ZOzl9Gt7EU%2BqiTYmUKdtMLp%2BCKAYJMA0lPadTIVt7SMykKNYdPKm3vPBGnjMwmF4OyCXT2Pw7IGP9VCf4%2FuNB2RfFt5uC6YCKVN3I920GjdjGgvZJ7O6bj9b2ApwHgFCPZFGbBOiAYy5N0bvfvpyeye9KJ0bexLRTIlKUJ8YiXE3m9TN4dEYDjeddF6pm6yI3km%2FCEQirMq8p78ZaCKdJaRfBzfOfOVbfJmkDYHug6KDNU1EE%2BiBFCiV%2FuIw0R9M6onllYkMVcz3jLnpFHl6uSUiNo0gR%2B%2FoN6MM%2BneS6bEnZycogJqzn75Ojwi2JsUvFatT9%2FmXmE6wYoWD38YhM0LnLUKEV4wZcc90Bok6XwqIeYjGZiLQ5tUFgfnZ1uTjfALh6hVsMPpofE0bnFag3qhVkRJGh0OoEZyy1XEClcbqH%2F5AHji0N1hel0%2Bdi8lwSgRZt9meYl5W7GzZqwZipRuzlmT5%2FtwUO4MMGN6L0GOqUB4IYtMJ9tmEaJsZl%2BquDdHdg002upPef7eMBaqNqjGM4%2BIXgGqxheROsLlCzRwRNiwwtoxCGf%2Fv4gbMqpNHhRFhu3D7Jm23vQUewcG1HzdELY%2BNWFMuXyL57fBHog575b4xRTC0EfoJJzHzn5DJZS8SrtB%2B66M6RNWQY27sMvHvYmKAJ9VN4BVqeQI%2Fz7kvTNJkHh7TR8ogKResJ%2BPpcPlIdmJejk&X-Amz-Signature=a49bbc85de26e43990be4fa85e9fed97e19df54431aa0c14d01337d69b765725&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZ3UA6L%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgmv%2FugJQz2VlcU1jp%2Fr5fwUPvHT0WLqgo3wveOZ2GdAiEA9rc8DewNGKWp94GZ5KIgsENbKiNKogJoFU8huHiI%2FtsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb0kqwJVWhfQq%2Bo7ircAzMufE1CjJCu9N6kc0jHZG3sOFarYxzQkw1VR%2FOCXJtdSbPSK5%2Bx2sXQEQK%2Fm%2BD71a1fFloTD0Zi8Es%2FWVUxp7UI6vKzGzB5VWfhha%2FqFK2w%2B9zsWPVnNwL7NoOKv5QukSyviNifg9wZOj4%2B4Y7R9sCsJ4ZOzl9Gt7EU%2BqiTYmUKdtMLp%2BCKAYJMA0lPadTIVt7SMykKNYdPKm3vPBGnjMwmF4OyCXT2Pw7IGP9VCf4%2FuNB2RfFt5uC6YCKVN3I920GjdjGgvZJ7O6bj9b2ApwHgFCPZFGbBOiAYy5N0bvfvpyeye9KJ0bexLRTIlKUJ8YiXE3m9TN4dEYDjeddF6pm6yI3km%2FCEQirMq8p78ZaCKdJaRfBzfOfOVbfJmkDYHug6KDNU1EE%2BiBFCiV%2FuIw0R9M6onllYkMVcz3jLnpFHl6uSUiNo0gR%2B%2FoN6MM%2BneS6bEnZycogJqzn75Ojwi2JsUvFatT9%2FmXmE6wYoWD38YhM0LnLUKEV4wZcc90Bok6XwqIeYjGZiLQ5tUFgfnZ1uTjfALh6hVsMPpofE0bnFag3qhVkRJGh0OoEZyy1XEClcbqH%2F5AHji0N1hel0%2Bdi8lwSgRZt9meYl5W7GzZqwZipRuzlmT5%2FtwUO4MMGN6L0GOqUB4IYtMJ9tmEaJsZl%2BquDdHdg002upPef7eMBaqNqjGM4%2BIXgGqxheROsLlCzRwRNiwwtoxCGf%2Fv4gbMqpNHhRFhu3D7Jm23vQUewcG1HzdELY%2BNWFMuXyL57fBHog575b4xRTC0EfoJJzHzn5DJZS8SrtB%2B66M6RNWQY27sMvHvYmKAJ9VN4BVqeQI%2Fz7kvTNJkHh7TR8ogKResJ%2BPpcPlIdmJejk&X-Amz-Signature=8e8c5688aaedd66290f3f440a2169a867a6018187403505f27e4cc084f3ec3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZ3UA6L%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgmv%2FugJQz2VlcU1jp%2Fr5fwUPvHT0WLqgo3wveOZ2GdAiEA9rc8DewNGKWp94GZ5KIgsENbKiNKogJoFU8huHiI%2FtsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb0kqwJVWhfQq%2Bo7ircAzMufE1CjJCu9N6kc0jHZG3sOFarYxzQkw1VR%2FOCXJtdSbPSK5%2Bx2sXQEQK%2Fm%2BD71a1fFloTD0Zi8Es%2FWVUxp7UI6vKzGzB5VWfhha%2FqFK2w%2B9zsWPVnNwL7NoOKv5QukSyviNifg9wZOj4%2B4Y7R9sCsJ4ZOzl9Gt7EU%2BqiTYmUKdtMLp%2BCKAYJMA0lPadTIVt7SMykKNYdPKm3vPBGnjMwmF4OyCXT2Pw7IGP9VCf4%2FuNB2RfFt5uC6YCKVN3I920GjdjGgvZJ7O6bj9b2ApwHgFCPZFGbBOiAYy5N0bvfvpyeye9KJ0bexLRTIlKUJ8YiXE3m9TN4dEYDjeddF6pm6yI3km%2FCEQirMq8p78ZaCKdJaRfBzfOfOVbfJmkDYHug6KDNU1EE%2BiBFCiV%2FuIw0R9M6onllYkMVcz3jLnpFHl6uSUiNo0gR%2B%2FoN6MM%2BneS6bEnZycogJqzn75Ojwi2JsUvFatT9%2FmXmE6wYoWD38YhM0LnLUKEV4wZcc90Bok6XwqIeYjGZiLQ5tUFgfnZ1uTjfALh6hVsMPpofE0bnFag3qhVkRJGh0OoEZyy1XEClcbqH%2F5AHji0N1hel0%2Bdi8lwSgRZt9meYl5W7GzZqwZipRuzlmT5%2FtwUO4MMGN6L0GOqUB4IYtMJ9tmEaJsZl%2BquDdHdg002upPef7eMBaqNqjGM4%2BIXgGqxheROsLlCzRwRNiwwtoxCGf%2Fv4gbMqpNHhRFhu3D7Jm23vQUewcG1HzdELY%2BNWFMuXyL57fBHog575b4xRTC0EfoJJzHzn5DJZS8SrtB%2B66M6RNWQY27sMvHvYmKAJ9VN4BVqeQI%2Fz7kvTNJkHh7TR8ogKResJ%2BPpcPlIdmJejk&X-Amz-Signature=28b781650e12242d1dab2d4add5e7e31fba1661ecc2991d8d2480a79cd4441ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZ3UA6L%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgmv%2FugJQz2VlcU1jp%2Fr5fwUPvHT0WLqgo3wveOZ2GdAiEA9rc8DewNGKWp94GZ5KIgsENbKiNKogJoFU8huHiI%2FtsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb0kqwJVWhfQq%2Bo7ircAzMufE1CjJCu9N6kc0jHZG3sOFarYxzQkw1VR%2FOCXJtdSbPSK5%2Bx2sXQEQK%2Fm%2BD71a1fFloTD0Zi8Es%2FWVUxp7UI6vKzGzB5VWfhha%2FqFK2w%2B9zsWPVnNwL7NoOKv5QukSyviNifg9wZOj4%2B4Y7R9sCsJ4ZOzl9Gt7EU%2BqiTYmUKdtMLp%2BCKAYJMA0lPadTIVt7SMykKNYdPKm3vPBGnjMwmF4OyCXT2Pw7IGP9VCf4%2FuNB2RfFt5uC6YCKVN3I920GjdjGgvZJ7O6bj9b2ApwHgFCPZFGbBOiAYy5N0bvfvpyeye9KJ0bexLRTIlKUJ8YiXE3m9TN4dEYDjeddF6pm6yI3km%2FCEQirMq8p78ZaCKdJaRfBzfOfOVbfJmkDYHug6KDNU1EE%2BiBFCiV%2FuIw0R9M6onllYkMVcz3jLnpFHl6uSUiNo0gR%2B%2FoN6MM%2BneS6bEnZycogJqzn75Ojwi2JsUvFatT9%2FmXmE6wYoWD38YhM0LnLUKEV4wZcc90Bok6XwqIeYjGZiLQ5tUFgfnZ1uTjfALh6hVsMPpofE0bnFag3qhVkRJGh0OoEZyy1XEClcbqH%2F5AHji0N1hel0%2Bdi8lwSgRZt9meYl5W7GzZqwZipRuzlmT5%2FtwUO4MMGN6L0GOqUB4IYtMJ9tmEaJsZl%2BquDdHdg002upPef7eMBaqNqjGM4%2BIXgGqxheROsLlCzRwRNiwwtoxCGf%2Fv4gbMqpNHhRFhu3D7Jm23vQUewcG1HzdELY%2BNWFMuXyL57fBHog575b4xRTC0EfoJJzHzn5DJZS8SrtB%2B66M6RNWQY27sMvHvYmKAJ9VN4BVqeQI%2Fz7kvTNJkHh7TR8ogKResJ%2BPpcPlIdmJejk&X-Amz-Signature=1ad2229669f5f6804ade1534e91e00443db9cd298ad961727fdb48557cf59754&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZ3UA6L%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgmv%2FugJQz2VlcU1jp%2Fr5fwUPvHT0WLqgo3wveOZ2GdAiEA9rc8DewNGKWp94GZ5KIgsENbKiNKogJoFU8huHiI%2FtsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb0kqwJVWhfQq%2Bo7ircAzMufE1CjJCu9N6kc0jHZG3sOFarYxzQkw1VR%2FOCXJtdSbPSK5%2Bx2sXQEQK%2Fm%2BD71a1fFloTD0Zi8Es%2FWVUxp7UI6vKzGzB5VWfhha%2FqFK2w%2B9zsWPVnNwL7NoOKv5QukSyviNifg9wZOj4%2B4Y7R9sCsJ4ZOzl9Gt7EU%2BqiTYmUKdtMLp%2BCKAYJMA0lPadTIVt7SMykKNYdPKm3vPBGnjMwmF4OyCXT2Pw7IGP9VCf4%2FuNB2RfFt5uC6YCKVN3I920GjdjGgvZJ7O6bj9b2ApwHgFCPZFGbBOiAYy5N0bvfvpyeye9KJ0bexLRTIlKUJ8YiXE3m9TN4dEYDjeddF6pm6yI3km%2FCEQirMq8p78ZaCKdJaRfBzfOfOVbfJmkDYHug6KDNU1EE%2BiBFCiV%2FuIw0R9M6onllYkMVcz3jLnpFHl6uSUiNo0gR%2B%2FoN6MM%2BneS6bEnZycogJqzn75Ojwi2JsUvFatT9%2FmXmE6wYoWD38YhM0LnLUKEV4wZcc90Bok6XwqIeYjGZiLQ5tUFgfnZ1uTjfALh6hVsMPpofE0bnFag3qhVkRJGh0OoEZyy1XEClcbqH%2F5AHji0N1hel0%2Bdi8lwSgRZt9meYl5W7GzZqwZipRuzlmT5%2FtwUO4MMGN6L0GOqUB4IYtMJ9tmEaJsZl%2BquDdHdg002upPef7eMBaqNqjGM4%2BIXgGqxheROsLlCzRwRNiwwtoxCGf%2Fv4gbMqpNHhRFhu3D7Jm23vQUewcG1HzdELY%2BNWFMuXyL57fBHog575b4xRTC0EfoJJzHzn5DJZS8SrtB%2B66M6RNWQY27sMvHvYmKAJ9VN4BVqeQI%2Fz7kvTNJkHh7TR8ogKResJ%2BPpcPlIdmJejk&X-Amz-Signature=a1aa3d5cbb52606232fdc17be8e13f1154547fceb27a289ccdb8ee7957fb84b6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZ3UA6L%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgmv%2FugJQz2VlcU1jp%2Fr5fwUPvHT0WLqgo3wveOZ2GdAiEA9rc8DewNGKWp94GZ5KIgsENbKiNKogJoFU8huHiI%2FtsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb0kqwJVWhfQq%2Bo7ircAzMufE1CjJCu9N6kc0jHZG3sOFarYxzQkw1VR%2FOCXJtdSbPSK5%2Bx2sXQEQK%2Fm%2BD71a1fFloTD0Zi8Es%2FWVUxp7UI6vKzGzB5VWfhha%2FqFK2w%2B9zsWPVnNwL7NoOKv5QukSyviNifg9wZOj4%2B4Y7R9sCsJ4ZOzl9Gt7EU%2BqiTYmUKdtMLp%2BCKAYJMA0lPadTIVt7SMykKNYdPKm3vPBGnjMwmF4OyCXT2Pw7IGP9VCf4%2FuNB2RfFt5uC6YCKVN3I920GjdjGgvZJ7O6bj9b2ApwHgFCPZFGbBOiAYy5N0bvfvpyeye9KJ0bexLRTIlKUJ8YiXE3m9TN4dEYDjeddF6pm6yI3km%2FCEQirMq8p78ZaCKdJaRfBzfOfOVbfJmkDYHug6KDNU1EE%2BiBFCiV%2FuIw0R9M6onllYkMVcz3jLnpFHl6uSUiNo0gR%2B%2FoN6MM%2BneS6bEnZycogJqzn75Ojwi2JsUvFatT9%2FmXmE6wYoWD38YhM0LnLUKEV4wZcc90Bok6XwqIeYjGZiLQ5tUFgfnZ1uTjfALh6hVsMPpofE0bnFag3qhVkRJGh0OoEZyy1XEClcbqH%2F5AHji0N1hel0%2Bdi8lwSgRZt9meYl5W7GzZqwZipRuzlmT5%2FtwUO4MMGN6L0GOqUB4IYtMJ9tmEaJsZl%2BquDdHdg002upPef7eMBaqNqjGM4%2BIXgGqxheROsLlCzRwRNiwwtoxCGf%2Fv4gbMqpNHhRFhu3D7Jm23vQUewcG1HzdELY%2BNWFMuXyL57fBHog575b4xRTC0EfoJJzHzn5DJZS8SrtB%2B66M6RNWQY27sMvHvYmKAJ9VN4BVqeQI%2Fz7kvTNJkHh7TR8ogKResJ%2BPpcPlIdmJejk&X-Amz-Signature=164f6a2577a77487df83408183464690e188061ddf73b8b932acc9355a60b7f6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

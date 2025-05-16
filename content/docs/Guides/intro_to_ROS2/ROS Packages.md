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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665III73GC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBMC8xzEk0BNX2HunUMpW%2BJNOcQgIQjnAVylDBFadq4AiEA8dRm7Fis0yjcTJs3aksvubf5YcFckswIHXjJKphUfOYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHxywnaCeQivbj5E%2FircAyhqY4Kg3bu6aXhBPObEz7UnHtv9Tr1EyWOeyTvT5bLmxXq2JUlGmD4HLKrDHbdfMtWhSuu%2B6LKH4rIbjriFXkZgD1yo9Q55kBpPM547%2B4z0hxuggPyu9WRfQvsUg7TlBW1NIFJ3KtJsaj31Ns2EwZuJ3wsUP4K8iyTw7ZHFdmuOt6cKjv3hELwJ%2BJxJKzAYRb58%2B5fteNpf7bPHM%2Boq93UQpXVfGe6ztU1J8G9jCZfwTY%2BdaRj0Ai93V3r2M04ZAGef%2BR8MxANkpNi341F16Y5or%2FEdRSZfR%2BBc4Sf%2B6FtmXdCMfIyQXURZOS3Quo4RuMh0Wdj5dIn6P9Nsvfbqfzz%2FkYmoc%2B7vcMx9bLINRiwjktqBh7DChyRHKuVX44sSBxos3SphVOqicSqoOVSaxDMFr5xiw6IrHDm3K%2BOUJqqjh%2FDK5jXn8QEZj%2BXut1eLmBhVZRs%2BnvcdZ5S4D2ZpS1ucbBFL%2FEbcDddDu4O0jw6Ck%2B66CucxiByUMRh7Qt9VgG7LHFh1lPfVpNcelw%2BUMrFk1vcUNMINnY0p70gi2fqJRn%2FXRPIVj252rSVPDPOwgRqvpPizfoA2cZ6urwX8XicCwCHS1jq3za9JN5h%2FG1lcI11%2B7dBF4snavchMMNnPncEGOqUBqEP4qruvpJGOd4dv%2FHfNkx8XOxPHxEnUIeNhFz5tdj4oV42gy9s9qBGk2M%2FzI2%2Fbr7CVJ6yjgAoIWk%2BTG5WBR01uNHkQkTCYfRIs49iUd3DTaVlHZB930YX5AjUeMX%2BQOz9UkDU4%2BDYiznju%2BZsv6pT84CApMxd4q7UpS6Z7%2FIvk399h8YBtT2iNHVJJbaiZKmldyJ8dcKqxSVO5KGB7UodZFKsg&X-Amz-Signature=d5ca4ee8ad89d1909fbbdc31eafd79c63e323471eb5ec24eb0b640371509cd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665III73GC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBMC8xzEk0BNX2HunUMpW%2BJNOcQgIQjnAVylDBFadq4AiEA8dRm7Fis0yjcTJs3aksvubf5YcFckswIHXjJKphUfOYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHxywnaCeQivbj5E%2FircAyhqY4Kg3bu6aXhBPObEz7UnHtv9Tr1EyWOeyTvT5bLmxXq2JUlGmD4HLKrDHbdfMtWhSuu%2B6LKH4rIbjriFXkZgD1yo9Q55kBpPM547%2B4z0hxuggPyu9WRfQvsUg7TlBW1NIFJ3KtJsaj31Ns2EwZuJ3wsUP4K8iyTw7ZHFdmuOt6cKjv3hELwJ%2BJxJKzAYRb58%2B5fteNpf7bPHM%2Boq93UQpXVfGe6ztU1J8G9jCZfwTY%2BdaRj0Ai93V3r2M04ZAGef%2BR8MxANkpNi341F16Y5or%2FEdRSZfR%2BBc4Sf%2B6FtmXdCMfIyQXURZOS3Quo4RuMh0Wdj5dIn6P9Nsvfbqfzz%2FkYmoc%2B7vcMx9bLINRiwjktqBh7DChyRHKuVX44sSBxos3SphVOqicSqoOVSaxDMFr5xiw6IrHDm3K%2BOUJqqjh%2FDK5jXn8QEZj%2BXut1eLmBhVZRs%2BnvcdZ5S4D2ZpS1ucbBFL%2FEbcDddDu4O0jw6Ck%2B66CucxiByUMRh7Qt9VgG7LHFh1lPfVpNcelw%2BUMrFk1vcUNMINnY0p70gi2fqJRn%2FXRPIVj252rSVPDPOwgRqvpPizfoA2cZ6urwX8XicCwCHS1jq3za9JN5h%2FG1lcI11%2B7dBF4snavchMMNnPncEGOqUBqEP4qruvpJGOd4dv%2FHfNkx8XOxPHxEnUIeNhFz5tdj4oV42gy9s9qBGk2M%2FzI2%2Fbr7CVJ6yjgAoIWk%2BTG5WBR01uNHkQkTCYfRIs49iUd3DTaVlHZB930YX5AjUeMX%2BQOz9UkDU4%2BDYiznju%2BZsv6pT84CApMxd4q7UpS6Z7%2FIvk399h8YBtT2iNHVJJbaiZKmldyJ8dcKqxSVO5KGB7UodZFKsg&X-Amz-Signature=c49de28468e0cce9e190b98edb49f66e556381210de303950e8fa0944f023f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665III73GC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBMC8xzEk0BNX2HunUMpW%2BJNOcQgIQjnAVylDBFadq4AiEA8dRm7Fis0yjcTJs3aksvubf5YcFckswIHXjJKphUfOYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHxywnaCeQivbj5E%2FircAyhqY4Kg3bu6aXhBPObEz7UnHtv9Tr1EyWOeyTvT5bLmxXq2JUlGmD4HLKrDHbdfMtWhSuu%2B6LKH4rIbjriFXkZgD1yo9Q55kBpPM547%2B4z0hxuggPyu9WRfQvsUg7TlBW1NIFJ3KtJsaj31Ns2EwZuJ3wsUP4K8iyTw7ZHFdmuOt6cKjv3hELwJ%2BJxJKzAYRb58%2B5fteNpf7bPHM%2Boq93UQpXVfGe6ztU1J8G9jCZfwTY%2BdaRj0Ai93V3r2M04ZAGef%2BR8MxANkpNi341F16Y5or%2FEdRSZfR%2BBc4Sf%2B6FtmXdCMfIyQXURZOS3Quo4RuMh0Wdj5dIn6P9Nsvfbqfzz%2FkYmoc%2B7vcMx9bLINRiwjktqBh7DChyRHKuVX44sSBxos3SphVOqicSqoOVSaxDMFr5xiw6IrHDm3K%2BOUJqqjh%2FDK5jXn8QEZj%2BXut1eLmBhVZRs%2BnvcdZ5S4D2ZpS1ucbBFL%2FEbcDddDu4O0jw6Ck%2B66CucxiByUMRh7Qt9VgG7LHFh1lPfVpNcelw%2BUMrFk1vcUNMINnY0p70gi2fqJRn%2FXRPIVj252rSVPDPOwgRqvpPizfoA2cZ6urwX8XicCwCHS1jq3za9JN5h%2FG1lcI11%2B7dBF4snavchMMNnPncEGOqUBqEP4qruvpJGOd4dv%2FHfNkx8XOxPHxEnUIeNhFz5tdj4oV42gy9s9qBGk2M%2FzI2%2Fbr7CVJ6yjgAoIWk%2BTG5WBR01uNHkQkTCYfRIs49iUd3DTaVlHZB930YX5AjUeMX%2BQOz9UkDU4%2BDYiznju%2BZsv6pT84CApMxd4q7UpS6Z7%2FIvk399h8YBtT2iNHVJJbaiZKmldyJ8dcKqxSVO5KGB7UodZFKsg&X-Amz-Signature=5d932bb46850415c2c1b2392342571f3658074a12d1159dbc6f6bdbfbeb0a73e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665III73GC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBMC8xzEk0BNX2HunUMpW%2BJNOcQgIQjnAVylDBFadq4AiEA8dRm7Fis0yjcTJs3aksvubf5YcFckswIHXjJKphUfOYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHxywnaCeQivbj5E%2FircAyhqY4Kg3bu6aXhBPObEz7UnHtv9Tr1EyWOeyTvT5bLmxXq2JUlGmD4HLKrDHbdfMtWhSuu%2B6LKH4rIbjriFXkZgD1yo9Q55kBpPM547%2B4z0hxuggPyu9WRfQvsUg7TlBW1NIFJ3KtJsaj31Ns2EwZuJ3wsUP4K8iyTw7ZHFdmuOt6cKjv3hELwJ%2BJxJKzAYRb58%2B5fteNpf7bPHM%2Boq93UQpXVfGe6ztU1J8G9jCZfwTY%2BdaRj0Ai93V3r2M04ZAGef%2BR8MxANkpNi341F16Y5or%2FEdRSZfR%2BBc4Sf%2B6FtmXdCMfIyQXURZOS3Quo4RuMh0Wdj5dIn6P9Nsvfbqfzz%2FkYmoc%2B7vcMx9bLINRiwjktqBh7DChyRHKuVX44sSBxos3SphVOqicSqoOVSaxDMFr5xiw6IrHDm3K%2BOUJqqjh%2FDK5jXn8QEZj%2BXut1eLmBhVZRs%2BnvcdZ5S4D2ZpS1ucbBFL%2FEbcDddDu4O0jw6Ck%2B66CucxiByUMRh7Qt9VgG7LHFh1lPfVpNcelw%2BUMrFk1vcUNMINnY0p70gi2fqJRn%2FXRPIVj252rSVPDPOwgRqvpPizfoA2cZ6urwX8XicCwCHS1jq3za9JN5h%2FG1lcI11%2B7dBF4snavchMMNnPncEGOqUBqEP4qruvpJGOd4dv%2FHfNkx8XOxPHxEnUIeNhFz5tdj4oV42gy9s9qBGk2M%2FzI2%2Fbr7CVJ6yjgAoIWk%2BTG5WBR01uNHkQkTCYfRIs49iUd3DTaVlHZB930YX5AjUeMX%2BQOz9UkDU4%2BDYiznju%2BZsv6pT84CApMxd4q7UpS6Z7%2FIvk399h8YBtT2iNHVJJbaiZKmldyJ8dcKqxSVO5KGB7UodZFKsg&X-Amz-Signature=d912b4986043948dc231a2961ac3d8684acc6606ebcfc26cd05c662837aca35b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665III73GC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBMC8xzEk0BNX2HunUMpW%2BJNOcQgIQjnAVylDBFadq4AiEA8dRm7Fis0yjcTJs3aksvubf5YcFckswIHXjJKphUfOYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHxywnaCeQivbj5E%2FircAyhqY4Kg3bu6aXhBPObEz7UnHtv9Tr1EyWOeyTvT5bLmxXq2JUlGmD4HLKrDHbdfMtWhSuu%2B6LKH4rIbjriFXkZgD1yo9Q55kBpPM547%2B4z0hxuggPyu9WRfQvsUg7TlBW1NIFJ3KtJsaj31Ns2EwZuJ3wsUP4K8iyTw7ZHFdmuOt6cKjv3hELwJ%2BJxJKzAYRb58%2B5fteNpf7bPHM%2Boq93UQpXVfGe6ztU1J8G9jCZfwTY%2BdaRj0Ai93V3r2M04ZAGef%2BR8MxANkpNi341F16Y5or%2FEdRSZfR%2BBc4Sf%2B6FtmXdCMfIyQXURZOS3Quo4RuMh0Wdj5dIn6P9Nsvfbqfzz%2FkYmoc%2B7vcMx9bLINRiwjktqBh7DChyRHKuVX44sSBxos3SphVOqicSqoOVSaxDMFr5xiw6IrHDm3K%2BOUJqqjh%2FDK5jXn8QEZj%2BXut1eLmBhVZRs%2BnvcdZ5S4D2ZpS1ucbBFL%2FEbcDddDu4O0jw6Ck%2B66CucxiByUMRh7Qt9VgG7LHFh1lPfVpNcelw%2BUMrFk1vcUNMINnY0p70gi2fqJRn%2FXRPIVj252rSVPDPOwgRqvpPizfoA2cZ6urwX8XicCwCHS1jq3za9JN5h%2FG1lcI11%2B7dBF4snavchMMNnPncEGOqUBqEP4qruvpJGOd4dv%2FHfNkx8XOxPHxEnUIeNhFz5tdj4oV42gy9s9qBGk2M%2FzI2%2Fbr7CVJ6yjgAoIWk%2BTG5WBR01uNHkQkTCYfRIs49iUd3DTaVlHZB930YX5AjUeMX%2BQOz9UkDU4%2BDYiznju%2BZsv6pT84CApMxd4q7UpS6Z7%2FIvk399h8YBtT2iNHVJJbaiZKmldyJ8dcKqxSVO5KGB7UodZFKsg&X-Amz-Signature=726215967ce06860dc7d7f91e53575cf797386223f7e268f97f43c70ca41cc9f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665III73GC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBMC8xzEk0BNX2HunUMpW%2BJNOcQgIQjnAVylDBFadq4AiEA8dRm7Fis0yjcTJs3aksvubf5YcFckswIHXjJKphUfOYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHxywnaCeQivbj5E%2FircAyhqY4Kg3bu6aXhBPObEz7UnHtv9Tr1EyWOeyTvT5bLmxXq2JUlGmD4HLKrDHbdfMtWhSuu%2B6LKH4rIbjriFXkZgD1yo9Q55kBpPM547%2B4z0hxuggPyu9WRfQvsUg7TlBW1NIFJ3KtJsaj31Ns2EwZuJ3wsUP4K8iyTw7ZHFdmuOt6cKjv3hELwJ%2BJxJKzAYRb58%2B5fteNpf7bPHM%2Boq93UQpXVfGe6ztU1J8G9jCZfwTY%2BdaRj0Ai93V3r2M04ZAGef%2BR8MxANkpNi341F16Y5or%2FEdRSZfR%2BBc4Sf%2B6FtmXdCMfIyQXURZOS3Quo4RuMh0Wdj5dIn6P9Nsvfbqfzz%2FkYmoc%2B7vcMx9bLINRiwjktqBh7DChyRHKuVX44sSBxos3SphVOqicSqoOVSaxDMFr5xiw6IrHDm3K%2BOUJqqjh%2FDK5jXn8QEZj%2BXut1eLmBhVZRs%2BnvcdZ5S4D2ZpS1ucbBFL%2FEbcDddDu4O0jw6Ck%2B66CucxiByUMRh7Qt9VgG7LHFh1lPfVpNcelw%2BUMrFk1vcUNMINnY0p70gi2fqJRn%2FXRPIVj252rSVPDPOwgRqvpPizfoA2cZ6urwX8XicCwCHS1jq3za9JN5h%2FG1lcI11%2B7dBF4snavchMMNnPncEGOqUBqEP4qruvpJGOd4dv%2FHfNkx8XOxPHxEnUIeNhFz5tdj4oV42gy9s9qBGk2M%2FzI2%2Fbr7CVJ6yjgAoIWk%2BTG5WBR01uNHkQkTCYfRIs49iUd3DTaVlHZB930YX5AjUeMX%2BQOz9UkDU4%2BDYiznju%2BZsv6pT84CApMxd4q7UpS6Z7%2FIvk399h8YBtT2iNHVJJbaiZKmldyJ8dcKqxSVO5KGB7UodZFKsg&X-Amz-Signature=5fa55892108425ce41cf95d2371f43d3fcb824ca64c8f169915d469e7ca44b49&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665III73GC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBMC8xzEk0BNX2HunUMpW%2BJNOcQgIQjnAVylDBFadq4AiEA8dRm7Fis0yjcTJs3aksvubf5YcFckswIHXjJKphUfOYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHxywnaCeQivbj5E%2FircAyhqY4Kg3bu6aXhBPObEz7UnHtv9Tr1EyWOeyTvT5bLmxXq2JUlGmD4HLKrDHbdfMtWhSuu%2B6LKH4rIbjriFXkZgD1yo9Q55kBpPM547%2B4z0hxuggPyu9WRfQvsUg7TlBW1NIFJ3KtJsaj31Ns2EwZuJ3wsUP4K8iyTw7ZHFdmuOt6cKjv3hELwJ%2BJxJKzAYRb58%2B5fteNpf7bPHM%2Boq93UQpXVfGe6ztU1J8G9jCZfwTY%2BdaRj0Ai93V3r2M04ZAGef%2BR8MxANkpNi341F16Y5or%2FEdRSZfR%2BBc4Sf%2B6FtmXdCMfIyQXURZOS3Quo4RuMh0Wdj5dIn6P9Nsvfbqfzz%2FkYmoc%2B7vcMx9bLINRiwjktqBh7DChyRHKuVX44sSBxos3SphVOqicSqoOVSaxDMFr5xiw6IrHDm3K%2BOUJqqjh%2FDK5jXn8QEZj%2BXut1eLmBhVZRs%2BnvcdZ5S4D2ZpS1ucbBFL%2FEbcDddDu4O0jw6Ck%2B66CucxiByUMRh7Qt9VgG7LHFh1lPfVpNcelw%2BUMrFk1vcUNMINnY0p70gi2fqJRn%2FXRPIVj252rSVPDPOwgRqvpPizfoA2cZ6urwX8XicCwCHS1jq3za9JN5h%2FG1lcI11%2B7dBF4snavchMMNnPncEGOqUBqEP4qruvpJGOd4dv%2FHfNkx8XOxPHxEnUIeNhFz5tdj4oV42gy9s9qBGk2M%2FzI2%2Fbr7CVJ6yjgAoIWk%2BTG5WBR01uNHkQkTCYfRIs49iUd3DTaVlHZB930YX5AjUeMX%2BQOz9UkDU4%2BDYiznju%2BZsv6pT84CApMxd4q7UpS6Z7%2FIvk399h8YBtT2iNHVJJbaiZKmldyJ8dcKqxSVO5KGB7UodZFKsg&X-Amz-Signature=f828668be08030df37a2b82b6ed9cad4d575ba4023f8dce4980ab33d9e428798&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

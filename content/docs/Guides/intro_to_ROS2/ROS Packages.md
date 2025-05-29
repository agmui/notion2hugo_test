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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5I3B37I%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXWnIbXK8FbHYfhOYT3INYh3H1sivBkJ6zmp76o9OGsQIgHLYrTzufcrc%2FJourFKTb7ht3ynyq3cCSiNjRsCB5l%2FYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIg6cQREx5OiFuQr7ircA0e3mJPk0SV2VP8iyliXLn9z%2BZhsPnprigVdnUlhZPRNspV3RI3IFlzqh0EplkjC86ffKg%2Bd1jaYM6r8OvYZSBQpYZl5JmXEE3BpLInkW16Os7T9w6r3gAFRT1kzPSKylBC%2FyDpEFiKO0dm7V0oheiC4cVp4iJAvUbyUssolK7jG1wfzvavS3K9yqd45oL0nzE9Hy0xysADxuw612eUO5i4Q9xEUktlvv%2BKpSiAD6iYoAgGX9T%2BhEtVQyWP1gB5RqOuu%2BI9GMIgJXx4KgsoPqdTZvIGG3Ly25ycfhmjddsW2IyXAmP%2Fdqvi6R7LTCwnLQpDdARdnPLqyqM373cnXhr%2FJkyMjurWkFrZOR6Y53oSrjA%2F7VaFY823a8%2FnuJG%2BlIR5oob%2B6HC%2FJ%2BSFnvon9ZSJCgKG7Ar%2Bp8mtlvjUJ8yHPUyglpBN4x%2FQ7GI7uL7mg2I21OIkqv9olmRO7KNdIqyoLxEqO%2FUc6BPlgyVNHg%2FirCHgTfoedJq9BEchXKO5oqcEMRXzFJJ9e8cvhyH%2Bsoy6dDXMw7lZEjTdpWJqcmToF7Hva3U%2BS6EXFi80swJObrplKUkFwrVGMrEatTYHmOhVtsfkBesCxarG2Mk3%2FiHgUh8lxs6roSzBIiAcvMKSy48EGOqUBvb%2FE28i5m6kHnU7wf14jQt40PS2N7geAbBsKGKLi7c%2Fsyfztqm1wZrSAdu7Sj%2FDOcVcwEjljexSXOgeZNUInORCcpFXiMWGiiqmk6qTqBk9ljhRDygAi5CDSkTMQWpHjErquOC8nlHgDlLnMTGN9tgHLNQO3CGmPuCOsBHJvVWdE3iJqDCqakgDWuJW73qBHfsVs%2BTCVoJZ32dr7thCLiEo6nqd3&X-Amz-Signature=92ddf00621b0329925bcefe8ef842ed3f5b5c56551a779cdfe3df65dd059dbc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5I3B37I%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXWnIbXK8FbHYfhOYT3INYh3H1sivBkJ6zmp76o9OGsQIgHLYrTzufcrc%2FJourFKTb7ht3ynyq3cCSiNjRsCB5l%2FYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIg6cQREx5OiFuQr7ircA0e3mJPk0SV2VP8iyliXLn9z%2BZhsPnprigVdnUlhZPRNspV3RI3IFlzqh0EplkjC86ffKg%2Bd1jaYM6r8OvYZSBQpYZl5JmXEE3BpLInkW16Os7T9w6r3gAFRT1kzPSKylBC%2FyDpEFiKO0dm7V0oheiC4cVp4iJAvUbyUssolK7jG1wfzvavS3K9yqd45oL0nzE9Hy0xysADxuw612eUO5i4Q9xEUktlvv%2BKpSiAD6iYoAgGX9T%2BhEtVQyWP1gB5RqOuu%2BI9GMIgJXx4KgsoPqdTZvIGG3Ly25ycfhmjddsW2IyXAmP%2Fdqvi6R7LTCwnLQpDdARdnPLqyqM373cnXhr%2FJkyMjurWkFrZOR6Y53oSrjA%2F7VaFY823a8%2FnuJG%2BlIR5oob%2B6HC%2FJ%2BSFnvon9ZSJCgKG7Ar%2Bp8mtlvjUJ8yHPUyglpBN4x%2FQ7GI7uL7mg2I21OIkqv9olmRO7KNdIqyoLxEqO%2FUc6BPlgyVNHg%2FirCHgTfoedJq9BEchXKO5oqcEMRXzFJJ9e8cvhyH%2Bsoy6dDXMw7lZEjTdpWJqcmToF7Hva3U%2BS6EXFi80swJObrplKUkFwrVGMrEatTYHmOhVtsfkBesCxarG2Mk3%2FiHgUh8lxs6roSzBIiAcvMKSy48EGOqUBvb%2FE28i5m6kHnU7wf14jQt40PS2N7geAbBsKGKLi7c%2Fsyfztqm1wZrSAdu7Sj%2FDOcVcwEjljexSXOgeZNUInORCcpFXiMWGiiqmk6qTqBk9ljhRDygAi5CDSkTMQWpHjErquOC8nlHgDlLnMTGN9tgHLNQO3CGmPuCOsBHJvVWdE3iJqDCqakgDWuJW73qBHfsVs%2BTCVoJZ32dr7thCLiEo6nqd3&X-Amz-Signature=042339c20619812a417ab6da8b958bee19a472cbd0d0029b98ad2d02da67cd11&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5I3B37I%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXWnIbXK8FbHYfhOYT3INYh3H1sivBkJ6zmp76o9OGsQIgHLYrTzufcrc%2FJourFKTb7ht3ynyq3cCSiNjRsCB5l%2FYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIg6cQREx5OiFuQr7ircA0e3mJPk0SV2VP8iyliXLn9z%2BZhsPnprigVdnUlhZPRNspV3RI3IFlzqh0EplkjC86ffKg%2Bd1jaYM6r8OvYZSBQpYZl5JmXEE3BpLInkW16Os7T9w6r3gAFRT1kzPSKylBC%2FyDpEFiKO0dm7V0oheiC4cVp4iJAvUbyUssolK7jG1wfzvavS3K9yqd45oL0nzE9Hy0xysADxuw612eUO5i4Q9xEUktlvv%2BKpSiAD6iYoAgGX9T%2BhEtVQyWP1gB5RqOuu%2BI9GMIgJXx4KgsoPqdTZvIGG3Ly25ycfhmjddsW2IyXAmP%2Fdqvi6R7LTCwnLQpDdARdnPLqyqM373cnXhr%2FJkyMjurWkFrZOR6Y53oSrjA%2F7VaFY823a8%2FnuJG%2BlIR5oob%2B6HC%2FJ%2BSFnvon9ZSJCgKG7Ar%2Bp8mtlvjUJ8yHPUyglpBN4x%2FQ7GI7uL7mg2I21OIkqv9olmRO7KNdIqyoLxEqO%2FUc6BPlgyVNHg%2FirCHgTfoedJq9BEchXKO5oqcEMRXzFJJ9e8cvhyH%2Bsoy6dDXMw7lZEjTdpWJqcmToF7Hva3U%2BS6EXFi80swJObrplKUkFwrVGMrEatTYHmOhVtsfkBesCxarG2Mk3%2FiHgUh8lxs6roSzBIiAcvMKSy48EGOqUBvb%2FE28i5m6kHnU7wf14jQt40PS2N7geAbBsKGKLi7c%2Fsyfztqm1wZrSAdu7Sj%2FDOcVcwEjljexSXOgeZNUInORCcpFXiMWGiiqmk6qTqBk9ljhRDygAi5CDSkTMQWpHjErquOC8nlHgDlLnMTGN9tgHLNQO3CGmPuCOsBHJvVWdE3iJqDCqakgDWuJW73qBHfsVs%2BTCVoJZ32dr7thCLiEo6nqd3&X-Amz-Signature=e7ab82c51a4fd400bf55da5e1bddc8b730f3d6d5fe5b4be65b0eeb1ba4df5233&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5I3B37I%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXWnIbXK8FbHYfhOYT3INYh3H1sivBkJ6zmp76o9OGsQIgHLYrTzufcrc%2FJourFKTb7ht3ynyq3cCSiNjRsCB5l%2FYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIg6cQREx5OiFuQr7ircA0e3mJPk0SV2VP8iyliXLn9z%2BZhsPnprigVdnUlhZPRNspV3RI3IFlzqh0EplkjC86ffKg%2Bd1jaYM6r8OvYZSBQpYZl5JmXEE3BpLInkW16Os7T9w6r3gAFRT1kzPSKylBC%2FyDpEFiKO0dm7V0oheiC4cVp4iJAvUbyUssolK7jG1wfzvavS3K9yqd45oL0nzE9Hy0xysADxuw612eUO5i4Q9xEUktlvv%2BKpSiAD6iYoAgGX9T%2BhEtVQyWP1gB5RqOuu%2BI9GMIgJXx4KgsoPqdTZvIGG3Ly25ycfhmjddsW2IyXAmP%2Fdqvi6R7LTCwnLQpDdARdnPLqyqM373cnXhr%2FJkyMjurWkFrZOR6Y53oSrjA%2F7VaFY823a8%2FnuJG%2BlIR5oob%2B6HC%2FJ%2BSFnvon9ZSJCgKG7Ar%2Bp8mtlvjUJ8yHPUyglpBN4x%2FQ7GI7uL7mg2I21OIkqv9olmRO7KNdIqyoLxEqO%2FUc6BPlgyVNHg%2FirCHgTfoedJq9BEchXKO5oqcEMRXzFJJ9e8cvhyH%2Bsoy6dDXMw7lZEjTdpWJqcmToF7Hva3U%2BS6EXFi80swJObrplKUkFwrVGMrEatTYHmOhVtsfkBesCxarG2Mk3%2FiHgUh8lxs6roSzBIiAcvMKSy48EGOqUBvb%2FE28i5m6kHnU7wf14jQt40PS2N7geAbBsKGKLi7c%2Fsyfztqm1wZrSAdu7Sj%2FDOcVcwEjljexSXOgeZNUInORCcpFXiMWGiiqmk6qTqBk9ljhRDygAi5CDSkTMQWpHjErquOC8nlHgDlLnMTGN9tgHLNQO3CGmPuCOsBHJvVWdE3iJqDCqakgDWuJW73qBHfsVs%2BTCVoJZ32dr7thCLiEo6nqd3&X-Amz-Signature=56f3f977db66304eb2ccce43463fa30830afd86f981bd4e0ea7833166a3d3c53&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5I3B37I%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXWnIbXK8FbHYfhOYT3INYh3H1sivBkJ6zmp76o9OGsQIgHLYrTzufcrc%2FJourFKTb7ht3ynyq3cCSiNjRsCB5l%2FYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIg6cQREx5OiFuQr7ircA0e3mJPk0SV2VP8iyliXLn9z%2BZhsPnprigVdnUlhZPRNspV3RI3IFlzqh0EplkjC86ffKg%2Bd1jaYM6r8OvYZSBQpYZl5JmXEE3BpLInkW16Os7T9w6r3gAFRT1kzPSKylBC%2FyDpEFiKO0dm7V0oheiC4cVp4iJAvUbyUssolK7jG1wfzvavS3K9yqd45oL0nzE9Hy0xysADxuw612eUO5i4Q9xEUktlvv%2BKpSiAD6iYoAgGX9T%2BhEtVQyWP1gB5RqOuu%2BI9GMIgJXx4KgsoPqdTZvIGG3Ly25ycfhmjddsW2IyXAmP%2Fdqvi6R7LTCwnLQpDdARdnPLqyqM373cnXhr%2FJkyMjurWkFrZOR6Y53oSrjA%2F7VaFY823a8%2FnuJG%2BlIR5oob%2B6HC%2FJ%2BSFnvon9ZSJCgKG7Ar%2Bp8mtlvjUJ8yHPUyglpBN4x%2FQ7GI7uL7mg2I21OIkqv9olmRO7KNdIqyoLxEqO%2FUc6BPlgyVNHg%2FirCHgTfoedJq9BEchXKO5oqcEMRXzFJJ9e8cvhyH%2Bsoy6dDXMw7lZEjTdpWJqcmToF7Hva3U%2BS6EXFi80swJObrplKUkFwrVGMrEatTYHmOhVtsfkBesCxarG2Mk3%2FiHgUh8lxs6roSzBIiAcvMKSy48EGOqUBvb%2FE28i5m6kHnU7wf14jQt40PS2N7geAbBsKGKLi7c%2Fsyfztqm1wZrSAdu7Sj%2FDOcVcwEjljexSXOgeZNUInORCcpFXiMWGiiqmk6qTqBk9ljhRDygAi5CDSkTMQWpHjErquOC8nlHgDlLnMTGN9tgHLNQO3CGmPuCOsBHJvVWdE3iJqDCqakgDWuJW73qBHfsVs%2BTCVoJZ32dr7thCLiEo6nqd3&X-Amz-Signature=17f605597ce7d0cd9607a5bffe211c948b09dc89eefc62d6fc4c9a66f5e52310&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5I3B37I%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXWnIbXK8FbHYfhOYT3INYh3H1sivBkJ6zmp76o9OGsQIgHLYrTzufcrc%2FJourFKTb7ht3ynyq3cCSiNjRsCB5l%2FYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIg6cQREx5OiFuQr7ircA0e3mJPk0SV2VP8iyliXLn9z%2BZhsPnprigVdnUlhZPRNspV3RI3IFlzqh0EplkjC86ffKg%2Bd1jaYM6r8OvYZSBQpYZl5JmXEE3BpLInkW16Os7T9w6r3gAFRT1kzPSKylBC%2FyDpEFiKO0dm7V0oheiC4cVp4iJAvUbyUssolK7jG1wfzvavS3K9yqd45oL0nzE9Hy0xysADxuw612eUO5i4Q9xEUktlvv%2BKpSiAD6iYoAgGX9T%2BhEtVQyWP1gB5RqOuu%2BI9GMIgJXx4KgsoPqdTZvIGG3Ly25ycfhmjddsW2IyXAmP%2Fdqvi6R7LTCwnLQpDdARdnPLqyqM373cnXhr%2FJkyMjurWkFrZOR6Y53oSrjA%2F7VaFY823a8%2FnuJG%2BlIR5oob%2B6HC%2FJ%2BSFnvon9ZSJCgKG7Ar%2Bp8mtlvjUJ8yHPUyglpBN4x%2FQ7GI7uL7mg2I21OIkqv9olmRO7KNdIqyoLxEqO%2FUc6BPlgyVNHg%2FirCHgTfoedJq9BEchXKO5oqcEMRXzFJJ9e8cvhyH%2Bsoy6dDXMw7lZEjTdpWJqcmToF7Hva3U%2BS6EXFi80swJObrplKUkFwrVGMrEatTYHmOhVtsfkBesCxarG2Mk3%2FiHgUh8lxs6roSzBIiAcvMKSy48EGOqUBvb%2FE28i5m6kHnU7wf14jQt40PS2N7geAbBsKGKLi7c%2Fsyfztqm1wZrSAdu7Sj%2FDOcVcwEjljexSXOgeZNUInORCcpFXiMWGiiqmk6qTqBk9ljhRDygAi5CDSkTMQWpHjErquOC8nlHgDlLnMTGN9tgHLNQO3CGmPuCOsBHJvVWdE3iJqDCqakgDWuJW73qBHfsVs%2BTCVoJZ32dr7thCLiEo6nqd3&X-Amz-Signature=89d89286cf21cea3c9ba0e85f08a8de0b45207d03638258f873a80491e4d2b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5I3B37I%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXWnIbXK8FbHYfhOYT3INYh3H1sivBkJ6zmp76o9OGsQIgHLYrTzufcrc%2FJourFKTb7ht3ynyq3cCSiNjRsCB5l%2FYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIg6cQREx5OiFuQr7ircA0e3mJPk0SV2VP8iyliXLn9z%2BZhsPnprigVdnUlhZPRNspV3RI3IFlzqh0EplkjC86ffKg%2Bd1jaYM6r8OvYZSBQpYZl5JmXEE3BpLInkW16Os7T9w6r3gAFRT1kzPSKylBC%2FyDpEFiKO0dm7V0oheiC4cVp4iJAvUbyUssolK7jG1wfzvavS3K9yqd45oL0nzE9Hy0xysADxuw612eUO5i4Q9xEUktlvv%2BKpSiAD6iYoAgGX9T%2BhEtVQyWP1gB5RqOuu%2BI9GMIgJXx4KgsoPqdTZvIGG3Ly25ycfhmjddsW2IyXAmP%2Fdqvi6R7LTCwnLQpDdARdnPLqyqM373cnXhr%2FJkyMjurWkFrZOR6Y53oSrjA%2F7VaFY823a8%2FnuJG%2BlIR5oob%2B6HC%2FJ%2BSFnvon9ZSJCgKG7Ar%2Bp8mtlvjUJ8yHPUyglpBN4x%2FQ7GI7uL7mg2I21OIkqv9olmRO7KNdIqyoLxEqO%2FUc6BPlgyVNHg%2FirCHgTfoedJq9BEchXKO5oqcEMRXzFJJ9e8cvhyH%2Bsoy6dDXMw7lZEjTdpWJqcmToF7Hva3U%2BS6EXFi80swJObrplKUkFwrVGMrEatTYHmOhVtsfkBesCxarG2Mk3%2FiHgUh8lxs6roSzBIiAcvMKSy48EGOqUBvb%2FE28i5m6kHnU7wf14jQt40PS2N7geAbBsKGKLi7c%2Fsyfztqm1wZrSAdu7Sj%2FDOcVcwEjljexSXOgeZNUInORCcpFXiMWGiiqmk6qTqBk9ljhRDygAi5CDSkTMQWpHjErquOC8nlHgDlLnMTGN9tgHLNQO3CGmPuCOsBHJvVWdE3iJqDCqakgDWuJW73qBHfsVs%2BTCVoJZ32dr7thCLiEo6nqd3&X-Amz-Signature=6c0211c5d5313eeaba517ea3e43554359aaa7db65040b1739451cd610b5f1e09&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

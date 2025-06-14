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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQWA7VW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCdOXqaGCYVyvGROCsBSdV2%2BsvI58iROhiKe%2BqTTjenGQIgaWaTcl68dmBiO7DEXpiTv7URqohnsuJNQer1EdetihEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK6W6Jwg%2F23Kvro0OCrcA8O4UlDJfpfyvpXNyWEg1KE4LOrTfYom8Jh3NHpLlJylZGfKbEYGNpFEhI25z3h%2BgkiwS0rJOdTEuBa1WeH4JOeuNyoXtHVlAFZnDuRqtswAw%2BWQXUIQ4Ol7XjVYB9H8lzdpIz3mW0KqaClunnEugB4MmRepUP8YmTFASULthN0hTFSPBJRCCuWfE4jD3HzDmcjyreY5Um5QQVjcW8CnZQnY%2FvtMp6yesGU2uvc%2BA%2FTViXyDZp2O9UN6uvgGYscPzyE6lXDmuNeStrsEetJU7qtGy8aNop1n%2BUlYuEPEWYOOOj6DClFvoUwZcgE3YIxng%2FVIv6a70Jao%2FhFMMsalxYGzgX8Mm9bvsQfv1V83txP%2B5HStVsCMFagz%2FNftAM7rmUx1GjgIPxAkheTwPXrQt9IS0GhJCeomrrNa%2FwS7btOlHgFWXX%2FQXdLxCfPGWfyAvA7FaNQDLGF1S4QHJ%2FXK0nlcIyHgxDjwDGMWmNQaUnzHEVhvm6QmX%2F%2FdPgS5Feh291KrruOkOaHFZbBTiO84Uc6RL7vs2kR5AQ4hXb3xxJST75uXBdIq%2BAvJnOOtSauTbX4PxPPVyKTcdI4BZIx%2Fq9TBBQiGs2mh5uVSh4o%2Fl5xu7Ig9PH%2By6cArW7XYMMTBtcIGOqUB5zyS3LXAdBo70aQaqMO1hJu01hb3PC0HT%2BgI9nEFaxxMQ5CZblvIxN8u9EkQR0S9Cm3hGa3fm0mniiDfKNad8C3mDNiV64WWI16d7cWk31OuRU8LVHGwRJZVAjCAfnBQEeIJiOQjhbJtS3KNKWfL6s8NsVHWWDaZCT9RJdQmY%2FJQXUrumlhydcRexeLUT3DuKNvNPjjZt4D0zXUw1AHG6AVwU5sg&X-Amz-Signature=17893a12fd485b4bb759e2a6444cb7b2b16b0eb67fee4eecd9e6a93ca48fdb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQWA7VW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCdOXqaGCYVyvGROCsBSdV2%2BsvI58iROhiKe%2BqTTjenGQIgaWaTcl68dmBiO7DEXpiTv7URqohnsuJNQer1EdetihEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK6W6Jwg%2F23Kvro0OCrcA8O4UlDJfpfyvpXNyWEg1KE4LOrTfYom8Jh3NHpLlJylZGfKbEYGNpFEhI25z3h%2BgkiwS0rJOdTEuBa1WeH4JOeuNyoXtHVlAFZnDuRqtswAw%2BWQXUIQ4Ol7XjVYB9H8lzdpIz3mW0KqaClunnEugB4MmRepUP8YmTFASULthN0hTFSPBJRCCuWfE4jD3HzDmcjyreY5Um5QQVjcW8CnZQnY%2FvtMp6yesGU2uvc%2BA%2FTViXyDZp2O9UN6uvgGYscPzyE6lXDmuNeStrsEetJU7qtGy8aNop1n%2BUlYuEPEWYOOOj6DClFvoUwZcgE3YIxng%2FVIv6a70Jao%2FhFMMsalxYGzgX8Mm9bvsQfv1V83txP%2B5HStVsCMFagz%2FNftAM7rmUx1GjgIPxAkheTwPXrQt9IS0GhJCeomrrNa%2FwS7btOlHgFWXX%2FQXdLxCfPGWfyAvA7FaNQDLGF1S4QHJ%2FXK0nlcIyHgxDjwDGMWmNQaUnzHEVhvm6QmX%2F%2FdPgS5Feh291KrruOkOaHFZbBTiO84Uc6RL7vs2kR5AQ4hXb3xxJST75uXBdIq%2BAvJnOOtSauTbX4PxPPVyKTcdI4BZIx%2Fq9TBBQiGs2mh5uVSh4o%2Fl5xu7Ig9PH%2By6cArW7XYMMTBtcIGOqUB5zyS3LXAdBo70aQaqMO1hJu01hb3PC0HT%2BgI9nEFaxxMQ5CZblvIxN8u9EkQR0S9Cm3hGa3fm0mniiDfKNad8C3mDNiV64WWI16d7cWk31OuRU8LVHGwRJZVAjCAfnBQEeIJiOQjhbJtS3KNKWfL6s8NsVHWWDaZCT9RJdQmY%2FJQXUrumlhydcRexeLUT3DuKNvNPjjZt4D0zXUw1AHG6AVwU5sg&X-Amz-Signature=e151582650d2048f886923bfbefb3345e1351f1eab329bb049032e51d6decbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQWA7VW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCdOXqaGCYVyvGROCsBSdV2%2BsvI58iROhiKe%2BqTTjenGQIgaWaTcl68dmBiO7DEXpiTv7URqohnsuJNQer1EdetihEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK6W6Jwg%2F23Kvro0OCrcA8O4UlDJfpfyvpXNyWEg1KE4LOrTfYom8Jh3NHpLlJylZGfKbEYGNpFEhI25z3h%2BgkiwS0rJOdTEuBa1WeH4JOeuNyoXtHVlAFZnDuRqtswAw%2BWQXUIQ4Ol7XjVYB9H8lzdpIz3mW0KqaClunnEugB4MmRepUP8YmTFASULthN0hTFSPBJRCCuWfE4jD3HzDmcjyreY5Um5QQVjcW8CnZQnY%2FvtMp6yesGU2uvc%2BA%2FTViXyDZp2O9UN6uvgGYscPzyE6lXDmuNeStrsEetJU7qtGy8aNop1n%2BUlYuEPEWYOOOj6DClFvoUwZcgE3YIxng%2FVIv6a70Jao%2FhFMMsalxYGzgX8Mm9bvsQfv1V83txP%2B5HStVsCMFagz%2FNftAM7rmUx1GjgIPxAkheTwPXrQt9IS0GhJCeomrrNa%2FwS7btOlHgFWXX%2FQXdLxCfPGWfyAvA7FaNQDLGF1S4QHJ%2FXK0nlcIyHgxDjwDGMWmNQaUnzHEVhvm6QmX%2F%2FdPgS5Feh291KrruOkOaHFZbBTiO84Uc6RL7vs2kR5AQ4hXb3xxJST75uXBdIq%2BAvJnOOtSauTbX4PxPPVyKTcdI4BZIx%2Fq9TBBQiGs2mh5uVSh4o%2Fl5xu7Ig9PH%2By6cArW7XYMMTBtcIGOqUB5zyS3LXAdBo70aQaqMO1hJu01hb3PC0HT%2BgI9nEFaxxMQ5CZblvIxN8u9EkQR0S9Cm3hGa3fm0mniiDfKNad8C3mDNiV64WWI16d7cWk31OuRU8LVHGwRJZVAjCAfnBQEeIJiOQjhbJtS3KNKWfL6s8NsVHWWDaZCT9RJdQmY%2FJQXUrumlhydcRexeLUT3DuKNvNPjjZt4D0zXUw1AHG6AVwU5sg&X-Amz-Signature=746c5e0299f4a7a5d07457ef4fe2614adbbf3d4ff56066dfc4b22839c64fe716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQWA7VW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCdOXqaGCYVyvGROCsBSdV2%2BsvI58iROhiKe%2BqTTjenGQIgaWaTcl68dmBiO7DEXpiTv7URqohnsuJNQer1EdetihEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK6W6Jwg%2F23Kvro0OCrcA8O4UlDJfpfyvpXNyWEg1KE4LOrTfYom8Jh3NHpLlJylZGfKbEYGNpFEhI25z3h%2BgkiwS0rJOdTEuBa1WeH4JOeuNyoXtHVlAFZnDuRqtswAw%2BWQXUIQ4Ol7XjVYB9H8lzdpIz3mW0KqaClunnEugB4MmRepUP8YmTFASULthN0hTFSPBJRCCuWfE4jD3HzDmcjyreY5Um5QQVjcW8CnZQnY%2FvtMp6yesGU2uvc%2BA%2FTViXyDZp2O9UN6uvgGYscPzyE6lXDmuNeStrsEetJU7qtGy8aNop1n%2BUlYuEPEWYOOOj6DClFvoUwZcgE3YIxng%2FVIv6a70Jao%2FhFMMsalxYGzgX8Mm9bvsQfv1V83txP%2B5HStVsCMFagz%2FNftAM7rmUx1GjgIPxAkheTwPXrQt9IS0GhJCeomrrNa%2FwS7btOlHgFWXX%2FQXdLxCfPGWfyAvA7FaNQDLGF1S4QHJ%2FXK0nlcIyHgxDjwDGMWmNQaUnzHEVhvm6QmX%2F%2FdPgS5Feh291KrruOkOaHFZbBTiO84Uc6RL7vs2kR5AQ4hXb3xxJST75uXBdIq%2BAvJnOOtSauTbX4PxPPVyKTcdI4BZIx%2Fq9TBBQiGs2mh5uVSh4o%2Fl5xu7Ig9PH%2By6cArW7XYMMTBtcIGOqUB5zyS3LXAdBo70aQaqMO1hJu01hb3PC0HT%2BgI9nEFaxxMQ5CZblvIxN8u9EkQR0S9Cm3hGa3fm0mniiDfKNad8C3mDNiV64WWI16d7cWk31OuRU8LVHGwRJZVAjCAfnBQEeIJiOQjhbJtS3KNKWfL6s8NsVHWWDaZCT9RJdQmY%2FJQXUrumlhydcRexeLUT3DuKNvNPjjZt4D0zXUw1AHG6AVwU5sg&X-Amz-Signature=4e29d5f951f26314366d6b5ebf380b0b3fdd2fcfe2e459bf6605723e0d956a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQWA7VW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCdOXqaGCYVyvGROCsBSdV2%2BsvI58iROhiKe%2BqTTjenGQIgaWaTcl68dmBiO7DEXpiTv7URqohnsuJNQer1EdetihEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK6W6Jwg%2F23Kvro0OCrcA8O4UlDJfpfyvpXNyWEg1KE4LOrTfYom8Jh3NHpLlJylZGfKbEYGNpFEhI25z3h%2BgkiwS0rJOdTEuBa1WeH4JOeuNyoXtHVlAFZnDuRqtswAw%2BWQXUIQ4Ol7XjVYB9H8lzdpIz3mW0KqaClunnEugB4MmRepUP8YmTFASULthN0hTFSPBJRCCuWfE4jD3HzDmcjyreY5Um5QQVjcW8CnZQnY%2FvtMp6yesGU2uvc%2BA%2FTViXyDZp2O9UN6uvgGYscPzyE6lXDmuNeStrsEetJU7qtGy8aNop1n%2BUlYuEPEWYOOOj6DClFvoUwZcgE3YIxng%2FVIv6a70Jao%2FhFMMsalxYGzgX8Mm9bvsQfv1V83txP%2B5HStVsCMFagz%2FNftAM7rmUx1GjgIPxAkheTwPXrQt9IS0GhJCeomrrNa%2FwS7btOlHgFWXX%2FQXdLxCfPGWfyAvA7FaNQDLGF1S4QHJ%2FXK0nlcIyHgxDjwDGMWmNQaUnzHEVhvm6QmX%2F%2FdPgS5Feh291KrruOkOaHFZbBTiO84Uc6RL7vs2kR5AQ4hXb3xxJST75uXBdIq%2BAvJnOOtSauTbX4PxPPVyKTcdI4BZIx%2Fq9TBBQiGs2mh5uVSh4o%2Fl5xu7Ig9PH%2By6cArW7XYMMTBtcIGOqUB5zyS3LXAdBo70aQaqMO1hJu01hb3PC0HT%2BgI9nEFaxxMQ5CZblvIxN8u9EkQR0S9Cm3hGa3fm0mniiDfKNad8C3mDNiV64WWI16d7cWk31OuRU8LVHGwRJZVAjCAfnBQEeIJiOQjhbJtS3KNKWfL6s8NsVHWWDaZCT9RJdQmY%2FJQXUrumlhydcRexeLUT3DuKNvNPjjZt4D0zXUw1AHG6AVwU5sg&X-Amz-Signature=32d7a12ce4b47cfda66648192cc0dccbcb521d39b0e3b5961f8bcc435b1160a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQWA7VW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCdOXqaGCYVyvGROCsBSdV2%2BsvI58iROhiKe%2BqTTjenGQIgaWaTcl68dmBiO7DEXpiTv7URqohnsuJNQer1EdetihEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK6W6Jwg%2F23Kvro0OCrcA8O4UlDJfpfyvpXNyWEg1KE4LOrTfYom8Jh3NHpLlJylZGfKbEYGNpFEhI25z3h%2BgkiwS0rJOdTEuBa1WeH4JOeuNyoXtHVlAFZnDuRqtswAw%2BWQXUIQ4Ol7XjVYB9H8lzdpIz3mW0KqaClunnEugB4MmRepUP8YmTFASULthN0hTFSPBJRCCuWfE4jD3HzDmcjyreY5Um5QQVjcW8CnZQnY%2FvtMp6yesGU2uvc%2BA%2FTViXyDZp2O9UN6uvgGYscPzyE6lXDmuNeStrsEetJU7qtGy8aNop1n%2BUlYuEPEWYOOOj6DClFvoUwZcgE3YIxng%2FVIv6a70Jao%2FhFMMsalxYGzgX8Mm9bvsQfv1V83txP%2B5HStVsCMFagz%2FNftAM7rmUx1GjgIPxAkheTwPXrQt9IS0GhJCeomrrNa%2FwS7btOlHgFWXX%2FQXdLxCfPGWfyAvA7FaNQDLGF1S4QHJ%2FXK0nlcIyHgxDjwDGMWmNQaUnzHEVhvm6QmX%2F%2FdPgS5Feh291KrruOkOaHFZbBTiO84Uc6RL7vs2kR5AQ4hXb3xxJST75uXBdIq%2BAvJnOOtSauTbX4PxPPVyKTcdI4BZIx%2Fq9TBBQiGs2mh5uVSh4o%2Fl5xu7Ig9PH%2By6cArW7XYMMTBtcIGOqUB5zyS3LXAdBo70aQaqMO1hJu01hb3PC0HT%2BgI9nEFaxxMQ5CZblvIxN8u9EkQR0S9Cm3hGa3fm0mniiDfKNad8C3mDNiV64WWI16d7cWk31OuRU8LVHGwRJZVAjCAfnBQEeIJiOQjhbJtS3KNKWfL6s8NsVHWWDaZCT9RJdQmY%2FJQXUrumlhydcRexeLUT3DuKNvNPjjZt4D0zXUw1AHG6AVwU5sg&X-Amz-Signature=27a8a6fc144f85b0a44ad2484ff9f909707c14f845371045cb8146c2a06a64d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQWA7VW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCdOXqaGCYVyvGROCsBSdV2%2BsvI58iROhiKe%2BqTTjenGQIgaWaTcl68dmBiO7DEXpiTv7URqohnsuJNQer1EdetihEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK6W6Jwg%2F23Kvro0OCrcA8O4UlDJfpfyvpXNyWEg1KE4LOrTfYom8Jh3NHpLlJylZGfKbEYGNpFEhI25z3h%2BgkiwS0rJOdTEuBa1WeH4JOeuNyoXtHVlAFZnDuRqtswAw%2BWQXUIQ4Ol7XjVYB9H8lzdpIz3mW0KqaClunnEugB4MmRepUP8YmTFASULthN0hTFSPBJRCCuWfE4jD3HzDmcjyreY5Um5QQVjcW8CnZQnY%2FvtMp6yesGU2uvc%2BA%2FTViXyDZp2O9UN6uvgGYscPzyE6lXDmuNeStrsEetJU7qtGy8aNop1n%2BUlYuEPEWYOOOj6DClFvoUwZcgE3YIxng%2FVIv6a70Jao%2FhFMMsalxYGzgX8Mm9bvsQfv1V83txP%2B5HStVsCMFagz%2FNftAM7rmUx1GjgIPxAkheTwPXrQt9IS0GhJCeomrrNa%2FwS7btOlHgFWXX%2FQXdLxCfPGWfyAvA7FaNQDLGF1S4QHJ%2FXK0nlcIyHgxDjwDGMWmNQaUnzHEVhvm6QmX%2F%2FdPgS5Feh291KrruOkOaHFZbBTiO84Uc6RL7vs2kR5AQ4hXb3xxJST75uXBdIq%2BAvJnOOtSauTbX4PxPPVyKTcdI4BZIx%2Fq9TBBQiGs2mh5uVSh4o%2Fl5xu7Ig9PH%2By6cArW7XYMMTBtcIGOqUB5zyS3LXAdBo70aQaqMO1hJu01hb3PC0HT%2BgI9nEFaxxMQ5CZblvIxN8u9EkQR0S9Cm3hGa3fm0mniiDfKNad8C3mDNiV64WWI16d7cWk31OuRU8LVHGwRJZVAjCAfnBQEeIJiOQjhbJtS3KNKWfL6s8NsVHWWDaZCT9RJdQmY%2FJQXUrumlhydcRexeLUT3DuKNvNPjjZt4D0zXUw1AHG6AVwU5sg&X-Amz-Signature=c1ad7029f4170d6174d6cb97c5fa4a396c64713a788e849a8c9ba3b4b708de07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

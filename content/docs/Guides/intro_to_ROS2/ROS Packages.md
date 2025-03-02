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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FQRBI4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FbnGF7V5KHqCfZyd%2FmmkjikPfxSgUF9Ln0V%2Fr8uGR7AiEAxYfjZDpdzmKvHgU8RYM9yF2RGpdooLhIGPoTupQM4bcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj9d3%2B7%2FXzTMX0qwSrcA9K8VxjNo%2F8zBXF1HgbPmfC8uX5cvJSY8akkE%2BbNZSCegaQQFtJcEhqFCQqPQWdUor5dEWWglotQKA%2BRHw0y8IjkNYHUj9jYWCLCasKB32L4d6vG4R1AprTFN02%2BAQZx%2BMkVs7AE%2B320Nsz%2Bjo2rXhCX3L9BfwWkfp6sQDKPQw9KgLHxMKsPWxwvJApUAaJUU2CCG4yGKRB4%2BO9D2srC2Wa3p%2F1pTb2hCiPH6Gd6yRxkslKpdQ9oNml9Xi2BUZ%2BSYcbpnaP%2F22ERXXDmvCICEYLQBsTlm%2FhtcNkbG5rNyozpSQ%2F7PsQV%2F7jbf6iSvHNcRo12ZWLhQ5zKPRRI4kNg4yv%2Ba5HqsQk%2B4XzX9FgJZEiF%2FoqA5YEWLLBP%2FKKFHkxziHLblPUBk8IoStbyWC1%2Fe0SwqoA2n7Efl1siJPRguXhM%2BeRv52lI%2FtfgyLqdzLM0aYMJeWQEQ%2BLst1VG2qxlVf6jeFrA8b8P49Qf7QawzwQOaLr53lKO%2Bgt6Q7Nz67wGSIrJQ9urvV5VBIjErKwU9J8qzByjldMHhQnejdIu0k08vK9pxpNk938i5VUJRMMwrppzzJMZ7jQT3nLYds4k7TXRzS3rkkFn9h4Fvpiibe%2BhLvjdccUVCu2e9rvtMLWVkr4GOqUBJ9w9dbB%2BIw%2BDWx9o7n8BS2nZZgg28%2FqDW04XYGkKTQ6EytIpgaRD1rdisegVya1UMWmc6Ai4UQHcEOBXVRi4vO6m7VBjiwIhGtVHEDdqCkuWCM0Za4ybsUu%2Bl0LvPINkKWvYEDICkDLG5It%2FMUM4nXPLrQG6TKI%2Bi5cwqt9eBXs3LmK%2Fy%2BLyR%2BHZig5UADKrzXKKEQ%2FzPVHj5EzGv%2Bqb0eD3s8Bn&X-Amz-Signature=08cfd4ba14b2ba15bf2101d96801ceacdc7e3415b027da542c99db841ace1fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FQRBI4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FbnGF7V5KHqCfZyd%2FmmkjikPfxSgUF9Ln0V%2Fr8uGR7AiEAxYfjZDpdzmKvHgU8RYM9yF2RGpdooLhIGPoTupQM4bcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj9d3%2B7%2FXzTMX0qwSrcA9K8VxjNo%2F8zBXF1HgbPmfC8uX5cvJSY8akkE%2BbNZSCegaQQFtJcEhqFCQqPQWdUor5dEWWglotQKA%2BRHw0y8IjkNYHUj9jYWCLCasKB32L4d6vG4R1AprTFN02%2BAQZx%2BMkVs7AE%2B320Nsz%2Bjo2rXhCX3L9BfwWkfp6sQDKPQw9KgLHxMKsPWxwvJApUAaJUU2CCG4yGKRB4%2BO9D2srC2Wa3p%2F1pTb2hCiPH6Gd6yRxkslKpdQ9oNml9Xi2BUZ%2BSYcbpnaP%2F22ERXXDmvCICEYLQBsTlm%2FhtcNkbG5rNyozpSQ%2F7PsQV%2F7jbf6iSvHNcRo12ZWLhQ5zKPRRI4kNg4yv%2Ba5HqsQk%2B4XzX9FgJZEiF%2FoqA5YEWLLBP%2FKKFHkxziHLblPUBk8IoStbyWC1%2Fe0SwqoA2n7Efl1siJPRguXhM%2BeRv52lI%2FtfgyLqdzLM0aYMJeWQEQ%2BLst1VG2qxlVf6jeFrA8b8P49Qf7QawzwQOaLr53lKO%2Bgt6Q7Nz67wGSIrJQ9urvV5VBIjErKwU9J8qzByjldMHhQnejdIu0k08vK9pxpNk938i5VUJRMMwrppzzJMZ7jQT3nLYds4k7TXRzS3rkkFn9h4Fvpiibe%2BhLvjdccUVCu2e9rvtMLWVkr4GOqUBJ9w9dbB%2BIw%2BDWx9o7n8BS2nZZgg28%2FqDW04XYGkKTQ6EytIpgaRD1rdisegVya1UMWmc6Ai4UQHcEOBXVRi4vO6m7VBjiwIhGtVHEDdqCkuWCM0Za4ybsUu%2Bl0LvPINkKWvYEDICkDLG5It%2FMUM4nXPLrQG6TKI%2Bi5cwqt9eBXs3LmK%2Fy%2BLyR%2BHZig5UADKrzXKKEQ%2FzPVHj5EzGv%2Bqb0eD3s8Bn&X-Amz-Signature=c7961ef20003c28f934a23e4940ee3b60269010b360ee8834b507e998ed59dad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FQRBI4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FbnGF7V5KHqCfZyd%2FmmkjikPfxSgUF9Ln0V%2Fr8uGR7AiEAxYfjZDpdzmKvHgU8RYM9yF2RGpdooLhIGPoTupQM4bcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj9d3%2B7%2FXzTMX0qwSrcA9K8VxjNo%2F8zBXF1HgbPmfC8uX5cvJSY8akkE%2BbNZSCegaQQFtJcEhqFCQqPQWdUor5dEWWglotQKA%2BRHw0y8IjkNYHUj9jYWCLCasKB32L4d6vG4R1AprTFN02%2BAQZx%2BMkVs7AE%2B320Nsz%2Bjo2rXhCX3L9BfwWkfp6sQDKPQw9KgLHxMKsPWxwvJApUAaJUU2CCG4yGKRB4%2BO9D2srC2Wa3p%2F1pTb2hCiPH6Gd6yRxkslKpdQ9oNml9Xi2BUZ%2BSYcbpnaP%2F22ERXXDmvCICEYLQBsTlm%2FhtcNkbG5rNyozpSQ%2F7PsQV%2F7jbf6iSvHNcRo12ZWLhQ5zKPRRI4kNg4yv%2Ba5HqsQk%2B4XzX9FgJZEiF%2FoqA5YEWLLBP%2FKKFHkxziHLblPUBk8IoStbyWC1%2Fe0SwqoA2n7Efl1siJPRguXhM%2BeRv52lI%2FtfgyLqdzLM0aYMJeWQEQ%2BLst1VG2qxlVf6jeFrA8b8P49Qf7QawzwQOaLr53lKO%2Bgt6Q7Nz67wGSIrJQ9urvV5VBIjErKwU9J8qzByjldMHhQnejdIu0k08vK9pxpNk938i5VUJRMMwrppzzJMZ7jQT3nLYds4k7TXRzS3rkkFn9h4Fvpiibe%2BhLvjdccUVCu2e9rvtMLWVkr4GOqUBJ9w9dbB%2BIw%2BDWx9o7n8BS2nZZgg28%2FqDW04XYGkKTQ6EytIpgaRD1rdisegVya1UMWmc6Ai4UQHcEOBXVRi4vO6m7VBjiwIhGtVHEDdqCkuWCM0Za4ybsUu%2Bl0LvPINkKWvYEDICkDLG5It%2FMUM4nXPLrQG6TKI%2Bi5cwqt9eBXs3LmK%2Fy%2BLyR%2BHZig5UADKrzXKKEQ%2FzPVHj5EzGv%2Bqb0eD3s8Bn&X-Amz-Signature=9ba44c764aca6c2f652a96f162f82db098e4b8d350343d0fb97d90fb2fed6c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FQRBI4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FbnGF7V5KHqCfZyd%2FmmkjikPfxSgUF9Ln0V%2Fr8uGR7AiEAxYfjZDpdzmKvHgU8RYM9yF2RGpdooLhIGPoTupQM4bcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj9d3%2B7%2FXzTMX0qwSrcA9K8VxjNo%2F8zBXF1HgbPmfC8uX5cvJSY8akkE%2BbNZSCegaQQFtJcEhqFCQqPQWdUor5dEWWglotQKA%2BRHw0y8IjkNYHUj9jYWCLCasKB32L4d6vG4R1AprTFN02%2BAQZx%2BMkVs7AE%2B320Nsz%2Bjo2rXhCX3L9BfwWkfp6sQDKPQw9KgLHxMKsPWxwvJApUAaJUU2CCG4yGKRB4%2BO9D2srC2Wa3p%2F1pTb2hCiPH6Gd6yRxkslKpdQ9oNml9Xi2BUZ%2BSYcbpnaP%2F22ERXXDmvCICEYLQBsTlm%2FhtcNkbG5rNyozpSQ%2F7PsQV%2F7jbf6iSvHNcRo12ZWLhQ5zKPRRI4kNg4yv%2Ba5HqsQk%2B4XzX9FgJZEiF%2FoqA5YEWLLBP%2FKKFHkxziHLblPUBk8IoStbyWC1%2Fe0SwqoA2n7Efl1siJPRguXhM%2BeRv52lI%2FtfgyLqdzLM0aYMJeWQEQ%2BLst1VG2qxlVf6jeFrA8b8P49Qf7QawzwQOaLr53lKO%2Bgt6Q7Nz67wGSIrJQ9urvV5VBIjErKwU9J8qzByjldMHhQnejdIu0k08vK9pxpNk938i5VUJRMMwrppzzJMZ7jQT3nLYds4k7TXRzS3rkkFn9h4Fvpiibe%2BhLvjdccUVCu2e9rvtMLWVkr4GOqUBJ9w9dbB%2BIw%2BDWx9o7n8BS2nZZgg28%2FqDW04XYGkKTQ6EytIpgaRD1rdisegVya1UMWmc6Ai4UQHcEOBXVRi4vO6m7VBjiwIhGtVHEDdqCkuWCM0Za4ybsUu%2Bl0LvPINkKWvYEDICkDLG5It%2FMUM4nXPLrQG6TKI%2Bi5cwqt9eBXs3LmK%2Fy%2BLyR%2BHZig5UADKrzXKKEQ%2FzPVHj5EzGv%2Bqb0eD3s8Bn&X-Amz-Signature=0e8674ffca6cae8d483a680f9a20b329d52c153b652f5f06df77e55858dd15d5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FQRBI4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FbnGF7V5KHqCfZyd%2FmmkjikPfxSgUF9Ln0V%2Fr8uGR7AiEAxYfjZDpdzmKvHgU8RYM9yF2RGpdooLhIGPoTupQM4bcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj9d3%2B7%2FXzTMX0qwSrcA9K8VxjNo%2F8zBXF1HgbPmfC8uX5cvJSY8akkE%2BbNZSCegaQQFtJcEhqFCQqPQWdUor5dEWWglotQKA%2BRHw0y8IjkNYHUj9jYWCLCasKB32L4d6vG4R1AprTFN02%2BAQZx%2BMkVs7AE%2B320Nsz%2Bjo2rXhCX3L9BfwWkfp6sQDKPQw9KgLHxMKsPWxwvJApUAaJUU2CCG4yGKRB4%2BO9D2srC2Wa3p%2F1pTb2hCiPH6Gd6yRxkslKpdQ9oNml9Xi2BUZ%2BSYcbpnaP%2F22ERXXDmvCICEYLQBsTlm%2FhtcNkbG5rNyozpSQ%2F7PsQV%2F7jbf6iSvHNcRo12ZWLhQ5zKPRRI4kNg4yv%2Ba5HqsQk%2B4XzX9FgJZEiF%2FoqA5YEWLLBP%2FKKFHkxziHLblPUBk8IoStbyWC1%2Fe0SwqoA2n7Efl1siJPRguXhM%2BeRv52lI%2FtfgyLqdzLM0aYMJeWQEQ%2BLst1VG2qxlVf6jeFrA8b8P49Qf7QawzwQOaLr53lKO%2Bgt6Q7Nz67wGSIrJQ9urvV5VBIjErKwU9J8qzByjldMHhQnejdIu0k08vK9pxpNk938i5VUJRMMwrppzzJMZ7jQT3nLYds4k7TXRzS3rkkFn9h4Fvpiibe%2BhLvjdccUVCu2e9rvtMLWVkr4GOqUBJ9w9dbB%2BIw%2BDWx9o7n8BS2nZZgg28%2FqDW04XYGkKTQ6EytIpgaRD1rdisegVya1UMWmc6Ai4UQHcEOBXVRi4vO6m7VBjiwIhGtVHEDdqCkuWCM0Za4ybsUu%2Bl0LvPINkKWvYEDICkDLG5It%2FMUM4nXPLrQG6TKI%2Bi5cwqt9eBXs3LmK%2Fy%2BLyR%2BHZig5UADKrzXKKEQ%2FzPVHj5EzGv%2Bqb0eD3s8Bn&X-Amz-Signature=ee8d04ef6094a87781718961138e81ff66d3049f81437af816399a1f7189c6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FQRBI4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FbnGF7V5KHqCfZyd%2FmmkjikPfxSgUF9Ln0V%2Fr8uGR7AiEAxYfjZDpdzmKvHgU8RYM9yF2RGpdooLhIGPoTupQM4bcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj9d3%2B7%2FXzTMX0qwSrcA9K8VxjNo%2F8zBXF1HgbPmfC8uX5cvJSY8akkE%2BbNZSCegaQQFtJcEhqFCQqPQWdUor5dEWWglotQKA%2BRHw0y8IjkNYHUj9jYWCLCasKB32L4d6vG4R1AprTFN02%2BAQZx%2BMkVs7AE%2B320Nsz%2Bjo2rXhCX3L9BfwWkfp6sQDKPQw9KgLHxMKsPWxwvJApUAaJUU2CCG4yGKRB4%2BO9D2srC2Wa3p%2F1pTb2hCiPH6Gd6yRxkslKpdQ9oNml9Xi2BUZ%2BSYcbpnaP%2F22ERXXDmvCICEYLQBsTlm%2FhtcNkbG5rNyozpSQ%2F7PsQV%2F7jbf6iSvHNcRo12ZWLhQ5zKPRRI4kNg4yv%2Ba5HqsQk%2B4XzX9FgJZEiF%2FoqA5YEWLLBP%2FKKFHkxziHLblPUBk8IoStbyWC1%2Fe0SwqoA2n7Efl1siJPRguXhM%2BeRv52lI%2FtfgyLqdzLM0aYMJeWQEQ%2BLst1VG2qxlVf6jeFrA8b8P49Qf7QawzwQOaLr53lKO%2Bgt6Q7Nz67wGSIrJQ9urvV5VBIjErKwU9J8qzByjldMHhQnejdIu0k08vK9pxpNk938i5VUJRMMwrppzzJMZ7jQT3nLYds4k7TXRzS3rkkFn9h4Fvpiibe%2BhLvjdccUVCu2e9rvtMLWVkr4GOqUBJ9w9dbB%2BIw%2BDWx9o7n8BS2nZZgg28%2FqDW04XYGkKTQ6EytIpgaRD1rdisegVya1UMWmc6Ai4UQHcEOBXVRi4vO6m7VBjiwIhGtVHEDdqCkuWCM0Za4ybsUu%2Bl0LvPINkKWvYEDICkDLG5It%2FMUM4nXPLrQG6TKI%2Bi5cwqt9eBXs3LmK%2Fy%2BLyR%2BHZig5UADKrzXKKEQ%2FzPVHj5EzGv%2Bqb0eD3s8Bn&X-Amz-Signature=d09d551fee58b2c2ee5d3998937cf64c6126c054092b52af1ccbecb4b2243b73&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FQRBI4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FbnGF7V5KHqCfZyd%2FmmkjikPfxSgUF9Ln0V%2Fr8uGR7AiEAxYfjZDpdzmKvHgU8RYM9yF2RGpdooLhIGPoTupQM4bcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj9d3%2B7%2FXzTMX0qwSrcA9K8VxjNo%2F8zBXF1HgbPmfC8uX5cvJSY8akkE%2BbNZSCegaQQFtJcEhqFCQqPQWdUor5dEWWglotQKA%2BRHw0y8IjkNYHUj9jYWCLCasKB32L4d6vG4R1AprTFN02%2BAQZx%2BMkVs7AE%2B320Nsz%2Bjo2rXhCX3L9BfwWkfp6sQDKPQw9KgLHxMKsPWxwvJApUAaJUU2CCG4yGKRB4%2BO9D2srC2Wa3p%2F1pTb2hCiPH6Gd6yRxkslKpdQ9oNml9Xi2BUZ%2BSYcbpnaP%2F22ERXXDmvCICEYLQBsTlm%2FhtcNkbG5rNyozpSQ%2F7PsQV%2F7jbf6iSvHNcRo12ZWLhQ5zKPRRI4kNg4yv%2Ba5HqsQk%2B4XzX9FgJZEiF%2FoqA5YEWLLBP%2FKKFHkxziHLblPUBk8IoStbyWC1%2Fe0SwqoA2n7Efl1siJPRguXhM%2BeRv52lI%2FtfgyLqdzLM0aYMJeWQEQ%2BLst1VG2qxlVf6jeFrA8b8P49Qf7QawzwQOaLr53lKO%2Bgt6Q7Nz67wGSIrJQ9urvV5VBIjErKwU9J8qzByjldMHhQnejdIu0k08vK9pxpNk938i5VUJRMMwrppzzJMZ7jQT3nLYds4k7TXRzS3rkkFn9h4Fvpiibe%2BhLvjdccUVCu2e9rvtMLWVkr4GOqUBJ9w9dbB%2BIw%2BDWx9o7n8BS2nZZgg28%2FqDW04XYGkKTQ6EytIpgaRD1rdisegVya1UMWmc6Ai4UQHcEOBXVRi4vO6m7VBjiwIhGtVHEDdqCkuWCM0Za4ybsUu%2Bl0LvPINkKWvYEDICkDLG5It%2FMUM4nXPLrQG6TKI%2Bi5cwqt9eBXs3LmK%2Fy%2BLyR%2BHZig5UADKrzXKKEQ%2FzPVHj5EzGv%2Bqb0eD3s8Bn&X-Amz-Signature=e83b0b33d4003b3db4f220c3572f1119e886d0df03848e0751bf0c390673770a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

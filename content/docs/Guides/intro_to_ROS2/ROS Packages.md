---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5CI7NQE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEghkn4CgaBnk2MXTnO5txrrnDSwm2Rcs8qzrWW8MkwcAiEA%2BCbC2yyFabLTqHN74bJkDTgvzYNK%2F%2FbZ5ZRO5p8MHvsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVI1B777WcPzQtN%2FircAyYrPZY491U7XJfrFmQs6rVLF5Mlx6Sr2713ZmF4ZCeFwuXWC0Ml5Fl1P9w%2Bgs%2FJ8axJ3xzD1xPAMqMA4btkxF5fCwammXEYoVZ4UxyAKtdNALQ%2BR5AeEZsXWSO5BNa%2FIbaJ6YtY0EjLiNXtFuvXFMWBtJWde%2BOMF%2FONsV5SbNLbsLlTc1r4bX%2FAiX3Go4WNwaNvsiUkpiFdaNpbsZGovN8Qjg%2B3D154VfCc%2BjE4%2FOK4HJo%2FNycrTRDfOMVV1apnvlp1lbW5r3jkTASLREXCTLQwYY%2BMQwdQG5c5hTio08v49TlypdMuZ86jAf6g7eiSTsyrkhOLoxziosu89O47hHOcBVzVrepQ6DIKM8fotC6dH1updrs44HPIrkV0DSSvwXtycj43J%2BSuP66GOM06OcciwMI2%2BQ07xQSapwxbXf%2Fwidj1slZMhw46aYcbaZLxRaDquclC%2Fqcx6kBe7Hg8IVQBORVIhFuAQuTK%2BW5Uqs0joTbYS6EZ8ZYalzWXYcHCncdX6Sn%2BTK6E72iLOdFJCguLJ8j%2FQReIzvbAjqWe7eDSeMMxp22PtYgQRq%2BYv9r2w6XXRJiWJHFZu%2BQYszkYyKebEGm765s1c8tKS9FbIohsmrQM49a20vASYG2NMP3E7MMGOqUBH2FkuzjhZLxS15vN6P%2BpkK%2F3MGuwGb2F08xlyTCHRKnm%2B2vvsKCDiAaYN%2BSFBwMO8DnaQ%2F345w7Z%2B8jBwzr51lmwzgiMgOBqrM3hl4X2iyrB3WTD6sxYV66FViEEof3dHjUfLYqSK9LtyAxOKRZDpZ8Mpw3t4kJeyEjBO6pkVbfxfk1QKHed1rqaTl8KckjADESwi4HA1X9qE3XH6gK0wxENkdfc&X-Amz-Signature=25e4b87c27927df7d757dfc05bccc9d4db5f0f17d538939397b2ddb5879af8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5CI7NQE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEghkn4CgaBnk2MXTnO5txrrnDSwm2Rcs8qzrWW8MkwcAiEA%2BCbC2yyFabLTqHN74bJkDTgvzYNK%2F%2FbZ5ZRO5p8MHvsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVI1B777WcPzQtN%2FircAyYrPZY491U7XJfrFmQs6rVLF5Mlx6Sr2713ZmF4ZCeFwuXWC0Ml5Fl1P9w%2Bgs%2FJ8axJ3xzD1xPAMqMA4btkxF5fCwammXEYoVZ4UxyAKtdNALQ%2BR5AeEZsXWSO5BNa%2FIbaJ6YtY0EjLiNXtFuvXFMWBtJWde%2BOMF%2FONsV5SbNLbsLlTc1r4bX%2FAiX3Go4WNwaNvsiUkpiFdaNpbsZGovN8Qjg%2B3D154VfCc%2BjE4%2FOK4HJo%2FNycrTRDfOMVV1apnvlp1lbW5r3jkTASLREXCTLQwYY%2BMQwdQG5c5hTio08v49TlypdMuZ86jAf6g7eiSTsyrkhOLoxziosu89O47hHOcBVzVrepQ6DIKM8fotC6dH1updrs44HPIrkV0DSSvwXtycj43J%2BSuP66GOM06OcciwMI2%2BQ07xQSapwxbXf%2Fwidj1slZMhw46aYcbaZLxRaDquclC%2Fqcx6kBe7Hg8IVQBORVIhFuAQuTK%2BW5Uqs0joTbYS6EZ8ZYalzWXYcHCncdX6Sn%2BTK6E72iLOdFJCguLJ8j%2FQReIzvbAjqWe7eDSeMMxp22PtYgQRq%2BYv9r2w6XXRJiWJHFZu%2BQYszkYyKebEGm765s1c8tKS9FbIohsmrQM49a20vASYG2NMP3E7MMGOqUBH2FkuzjhZLxS15vN6P%2BpkK%2F3MGuwGb2F08xlyTCHRKnm%2B2vvsKCDiAaYN%2BSFBwMO8DnaQ%2F345w7Z%2B8jBwzr51lmwzgiMgOBqrM3hl4X2iyrB3WTD6sxYV66FViEEof3dHjUfLYqSK9LtyAxOKRZDpZ8Mpw3t4kJeyEjBO6pkVbfxfk1QKHed1rqaTl8KckjADESwi4HA1X9qE3XH6gK0wxENkdfc&X-Amz-Signature=ae0a08b9cbde74d6d8a60378fa8104c166a5cf45a692bcdbda057e8c7bcb2b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5CI7NQE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEghkn4CgaBnk2MXTnO5txrrnDSwm2Rcs8qzrWW8MkwcAiEA%2BCbC2yyFabLTqHN74bJkDTgvzYNK%2F%2FbZ5ZRO5p8MHvsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVI1B777WcPzQtN%2FircAyYrPZY491U7XJfrFmQs6rVLF5Mlx6Sr2713ZmF4ZCeFwuXWC0Ml5Fl1P9w%2Bgs%2FJ8axJ3xzD1xPAMqMA4btkxF5fCwammXEYoVZ4UxyAKtdNALQ%2BR5AeEZsXWSO5BNa%2FIbaJ6YtY0EjLiNXtFuvXFMWBtJWde%2BOMF%2FONsV5SbNLbsLlTc1r4bX%2FAiX3Go4WNwaNvsiUkpiFdaNpbsZGovN8Qjg%2B3D154VfCc%2BjE4%2FOK4HJo%2FNycrTRDfOMVV1apnvlp1lbW5r3jkTASLREXCTLQwYY%2BMQwdQG5c5hTio08v49TlypdMuZ86jAf6g7eiSTsyrkhOLoxziosu89O47hHOcBVzVrepQ6DIKM8fotC6dH1updrs44HPIrkV0DSSvwXtycj43J%2BSuP66GOM06OcciwMI2%2BQ07xQSapwxbXf%2Fwidj1slZMhw46aYcbaZLxRaDquclC%2Fqcx6kBe7Hg8IVQBORVIhFuAQuTK%2BW5Uqs0joTbYS6EZ8ZYalzWXYcHCncdX6Sn%2BTK6E72iLOdFJCguLJ8j%2FQReIzvbAjqWe7eDSeMMxp22PtYgQRq%2BYv9r2w6XXRJiWJHFZu%2BQYszkYyKebEGm765s1c8tKS9FbIohsmrQM49a20vASYG2NMP3E7MMGOqUBH2FkuzjhZLxS15vN6P%2BpkK%2F3MGuwGb2F08xlyTCHRKnm%2B2vvsKCDiAaYN%2BSFBwMO8DnaQ%2F345w7Z%2B8jBwzr51lmwzgiMgOBqrM3hl4X2iyrB3WTD6sxYV66FViEEof3dHjUfLYqSK9LtyAxOKRZDpZ8Mpw3t4kJeyEjBO6pkVbfxfk1QKHed1rqaTl8KckjADESwi4HA1X9qE3XH6gK0wxENkdfc&X-Amz-Signature=12e0bb14397df0694de519a3ab6b428c0372f2bbc8ee657e3cd52d31d4634796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5CI7NQE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEghkn4CgaBnk2MXTnO5txrrnDSwm2Rcs8qzrWW8MkwcAiEA%2BCbC2yyFabLTqHN74bJkDTgvzYNK%2F%2FbZ5ZRO5p8MHvsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVI1B777WcPzQtN%2FircAyYrPZY491U7XJfrFmQs6rVLF5Mlx6Sr2713ZmF4ZCeFwuXWC0Ml5Fl1P9w%2Bgs%2FJ8axJ3xzD1xPAMqMA4btkxF5fCwammXEYoVZ4UxyAKtdNALQ%2BR5AeEZsXWSO5BNa%2FIbaJ6YtY0EjLiNXtFuvXFMWBtJWde%2BOMF%2FONsV5SbNLbsLlTc1r4bX%2FAiX3Go4WNwaNvsiUkpiFdaNpbsZGovN8Qjg%2B3D154VfCc%2BjE4%2FOK4HJo%2FNycrTRDfOMVV1apnvlp1lbW5r3jkTASLREXCTLQwYY%2BMQwdQG5c5hTio08v49TlypdMuZ86jAf6g7eiSTsyrkhOLoxziosu89O47hHOcBVzVrepQ6DIKM8fotC6dH1updrs44HPIrkV0DSSvwXtycj43J%2BSuP66GOM06OcciwMI2%2BQ07xQSapwxbXf%2Fwidj1slZMhw46aYcbaZLxRaDquclC%2Fqcx6kBe7Hg8IVQBORVIhFuAQuTK%2BW5Uqs0joTbYS6EZ8ZYalzWXYcHCncdX6Sn%2BTK6E72iLOdFJCguLJ8j%2FQReIzvbAjqWe7eDSeMMxp22PtYgQRq%2BYv9r2w6XXRJiWJHFZu%2BQYszkYyKebEGm765s1c8tKS9FbIohsmrQM49a20vASYG2NMP3E7MMGOqUBH2FkuzjhZLxS15vN6P%2BpkK%2F3MGuwGb2F08xlyTCHRKnm%2B2vvsKCDiAaYN%2BSFBwMO8DnaQ%2F345w7Z%2B8jBwzr51lmwzgiMgOBqrM3hl4X2iyrB3WTD6sxYV66FViEEof3dHjUfLYqSK9LtyAxOKRZDpZ8Mpw3t4kJeyEjBO6pkVbfxfk1QKHed1rqaTl8KckjADESwi4HA1X9qE3XH6gK0wxENkdfc&X-Amz-Signature=622b9940e07cd8b4ec5ff8def3f3336f6d3c46bf797b6c36d02be9744c55d046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5CI7NQE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEghkn4CgaBnk2MXTnO5txrrnDSwm2Rcs8qzrWW8MkwcAiEA%2BCbC2yyFabLTqHN74bJkDTgvzYNK%2F%2FbZ5ZRO5p8MHvsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVI1B777WcPzQtN%2FircAyYrPZY491U7XJfrFmQs6rVLF5Mlx6Sr2713ZmF4ZCeFwuXWC0Ml5Fl1P9w%2Bgs%2FJ8axJ3xzD1xPAMqMA4btkxF5fCwammXEYoVZ4UxyAKtdNALQ%2BR5AeEZsXWSO5BNa%2FIbaJ6YtY0EjLiNXtFuvXFMWBtJWde%2BOMF%2FONsV5SbNLbsLlTc1r4bX%2FAiX3Go4WNwaNvsiUkpiFdaNpbsZGovN8Qjg%2B3D154VfCc%2BjE4%2FOK4HJo%2FNycrTRDfOMVV1apnvlp1lbW5r3jkTASLREXCTLQwYY%2BMQwdQG5c5hTio08v49TlypdMuZ86jAf6g7eiSTsyrkhOLoxziosu89O47hHOcBVzVrepQ6DIKM8fotC6dH1updrs44HPIrkV0DSSvwXtycj43J%2BSuP66GOM06OcciwMI2%2BQ07xQSapwxbXf%2Fwidj1slZMhw46aYcbaZLxRaDquclC%2Fqcx6kBe7Hg8IVQBORVIhFuAQuTK%2BW5Uqs0joTbYS6EZ8ZYalzWXYcHCncdX6Sn%2BTK6E72iLOdFJCguLJ8j%2FQReIzvbAjqWe7eDSeMMxp22PtYgQRq%2BYv9r2w6XXRJiWJHFZu%2BQYszkYyKebEGm765s1c8tKS9FbIohsmrQM49a20vASYG2NMP3E7MMGOqUBH2FkuzjhZLxS15vN6P%2BpkK%2F3MGuwGb2F08xlyTCHRKnm%2B2vvsKCDiAaYN%2BSFBwMO8DnaQ%2F345w7Z%2B8jBwzr51lmwzgiMgOBqrM3hl4X2iyrB3WTD6sxYV66FViEEof3dHjUfLYqSK9LtyAxOKRZDpZ8Mpw3t4kJeyEjBO6pkVbfxfk1QKHed1rqaTl8KckjADESwi4HA1X9qE3XH6gK0wxENkdfc&X-Amz-Signature=bde0b3be3b6c3018d98bcc6fd327f88eb08c4d74ba3982edfe448ca6117a3015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5CI7NQE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEghkn4CgaBnk2MXTnO5txrrnDSwm2Rcs8qzrWW8MkwcAiEA%2BCbC2yyFabLTqHN74bJkDTgvzYNK%2F%2FbZ5ZRO5p8MHvsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVI1B777WcPzQtN%2FircAyYrPZY491U7XJfrFmQs6rVLF5Mlx6Sr2713ZmF4ZCeFwuXWC0Ml5Fl1P9w%2Bgs%2FJ8axJ3xzD1xPAMqMA4btkxF5fCwammXEYoVZ4UxyAKtdNALQ%2BR5AeEZsXWSO5BNa%2FIbaJ6YtY0EjLiNXtFuvXFMWBtJWde%2BOMF%2FONsV5SbNLbsLlTc1r4bX%2FAiX3Go4WNwaNvsiUkpiFdaNpbsZGovN8Qjg%2B3D154VfCc%2BjE4%2FOK4HJo%2FNycrTRDfOMVV1apnvlp1lbW5r3jkTASLREXCTLQwYY%2BMQwdQG5c5hTio08v49TlypdMuZ86jAf6g7eiSTsyrkhOLoxziosu89O47hHOcBVzVrepQ6DIKM8fotC6dH1updrs44HPIrkV0DSSvwXtycj43J%2BSuP66GOM06OcciwMI2%2BQ07xQSapwxbXf%2Fwidj1slZMhw46aYcbaZLxRaDquclC%2Fqcx6kBe7Hg8IVQBORVIhFuAQuTK%2BW5Uqs0joTbYS6EZ8ZYalzWXYcHCncdX6Sn%2BTK6E72iLOdFJCguLJ8j%2FQReIzvbAjqWe7eDSeMMxp22PtYgQRq%2BYv9r2w6XXRJiWJHFZu%2BQYszkYyKebEGm765s1c8tKS9FbIohsmrQM49a20vASYG2NMP3E7MMGOqUBH2FkuzjhZLxS15vN6P%2BpkK%2F3MGuwGb2F08xlyTCHRKnm%2B2vvsKCDiAaYN%2BSFBwMO8DnaQ%2F345w7Z%2B8jBwzr51lmwzgiMgOBqrM3hl4X2iyrB3WTD6sxYV66FViEEof3dHjUfLYqSK9LtyAxOKRZDpZ8Mpw3t4kJeyEjBO6pkVbfxfk1QKHed1rqaTl8KckjADESwi4HA1X9qE3XH6gK0wxENkdfc&X-Amz-Signature=07b7397a616244bcd5c34e04fb453a0f4edfb17b1f6d34a4a78104346ce43a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5CI7NQE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEghkn4CgaBnk2MXTnO5txrrnDSwm2Rcs8qzrWW8MkwcAiEA%2BCbC2yyFabLTqHN74bJkDTgvzYNK%2F%2FbZ5ZRO5p8MHvsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVI1B777WcPzQtN%2FircAyYrPZY491U7XJfrFmQs6rVLF5Mlx6Sr2713ZmF4ZCeFwuXWC0Ml5Fl1P9w%2Bgs%2FJ8axJ3xzD1xPAMqMA4btkxF5fCwammXEYoVZ4UxyAKtdNALQ%2BR5AeEZsXWSO5BNa%2FIbaJ6YtY0EjLiNXtFuvXFMWBtJWde%2BOMF%2FONsV5SbNLbsLlTc1r4bX%2FAiX3Go4WNwaNvsiUkpiFdaNpbsZGovN8Qjg%2B3D154VfCc%2BjE4%2FOK4HJo%2FNycrTRDfOMVV1apnvlp1lbW5r3jkTASLREXCTLQwYY%2BMQwdQG5c5hTio08v49TlypdMuZ86jAf6g7eiSTsyrkhOLoxziosu89O47hHOcBVzVrepQ6DIKM8fotC6dH1updrs44HPIrkV0DSSvwXtycj43J%2BSuP66GOM06OcciwMI2%2BQ07xQSapwxbXf%2Fwidj1slZMhw46aYcbaZLxRaDquclC%2Fqcx6kBe7Hg8IVQBORVIhFuAQuTK%2BW5Uqs0joTbYS6EZ8ZYalzWXYcHCncdX6Sn%2BTK6E72iLOdFJCguLJ8j%2FQReIzvbAjqWe7eDSeMMxp22PtYgQRq%2BYv9r2w6XXRJiWJHFZu%2BQYszkYyKebEGm765s1c8tKS9FbIohsmrQM49a20vASYG2NMP3E7MMGOqUBH2FkuzjhZLxS15vN6P%2BpkK%2F3MGuwGb2F08xlyTCHRKnm%2B2vvsKCDiAaYN%2BSFBwMO8DnaQ%2F345w7Z%2B8jBwzr51lmwzgiMgOBqrM3hl4X2iyrB3WTD6sxYV66FViEEof3dHjUfLYqSK9LtyAxOKRZDpZ8Mpw3t4kJeyEjBO6pkVbfxfk1QKHed1rqaTl8KckjADESwi4HA1X9qE3XH6gK0wxENkdfc&X-Amz-Signature=70dfd029bf8d04ad083d77db1059546cfaa32bc3853ee647534abff4caa8c9a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

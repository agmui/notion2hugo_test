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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDKMBPJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICmpEdh%2FS2JBlxoL4KlBBVB8rvDl9X16yzwA%2BRLzJc%2BhAiEA8iToLSSnvdatUluHkpVyzy%2BT4U5XJJbUjlR4RL5ShggqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI3V9TEyGxuSsYmSrcA7j1SU9AvnctGPy08LutK4YKM7PhpYUJXvfns7JlTecW4xDKmepgLWeNOgzpbYCPHaeN%2B0S2j%2FCMeFuPHxQNCrTyVoiHvOOcRukRIGtUjyqHFYY7WXEypfCepTOV5YNUgnh4O4UugWada7g5H2KNrg7S63NzTTXI2Y0stiltTEbKHu8vdD8OL7bbRJNHdCFKC6hT7XXKpthzUEOfWkKjqSldlawX3fh3j0cwo6nPmQ0WXCBIWQnQPZpibE8%2FmqoBgGovLHWWXEVucqQ1AIZzeitEPHsCyzScEESyX1t7oKJ3B0qTH9NjCo9%2FmwsexEv5kGM6RhW2ov97Q4MDff0cLQwlaSmoOs0qDeIXdB0WXh6Yod9UgYc%2Fzs5xzGWab3s7Iea8UoqTeBy%2Fed1WFCb1iKT4jU97l14%2FnKc9ku%2FyZoKMH3%2BL5byk5giKl9oWWEaA%2FXMsmkQO12pWpSxGolHVsr01rl1LdSMXdgbVGq249%2BNOmCEhWcu5RbHoFUZgUFs%2FG%2FyWdHLICQkdeRaXjcRcLHq1Ypd8IhH3pLLiWixTBUUSLTB0f08lDUIK8K9DaxbG%2FPF4QWT%2BT4jq3b%2F83WN1vPBs9UMWQfG51lVngY9kl3nkLp9R9YHULQVsHH3fMLefmsAGOqUB4OXQTH6XWjXnvoAiqnLZvqH47TZz8gUb2dtZOcpzVcafnL92%2BKd2jiuM%2B8yxapPG6tc5horj6lIf1vrnTtsMVHRletxLXU0t8CPN85Qdr2MtupMzGM5fVikIJ55FWsS76tJj%2BSB4InIYPVOPG4Dqb7RRZmaRRSKAA423EPg7ogX3PEYGPYMww%2FCifkswjiK3mz7nYUbfdz%2BNz9FtazXfkf54if17&X-Amz-Signature=b5ae516484d94db627a5c0e48c4bc20f3e533872c9c5b262c21c36f5641f712b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDKMBPJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICmpEdh%2FS2JBlxoL4KlBBVB8rvDl9X16yzwA%2BRLzJc%2BhAiEA8iToLSSnvdatUluHkpVyzy%2BT4U5XJJbUjlR4RL5ShggqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI3V9TEyGxuSsYmSrcA7j1SU9AvnctGPy08LutK4YKM7PhpYUJXvfns7JlTecW4xDKmepgLWeNOgzpbYCPHaeN%2B0S2j%2FCMeFuPHxQNCrTyVoiHvOOcRukRIGtUjyqHFYY7WXEypfCepTOV5YNUgnh4O4UugWada7g5H2KNrg7S63NzTTXI2Y0stiltTEbKHu8vdD8OL7bbRJNHdCFKC6hT7XXKpthzUEOfWkKjqSldlawX3fh3j0cwo6nPmQ0WXCBIWQnQPZpibE8%2FmqoBgGovLHWWXEVucqQ1AIZzeitEPHsCyzScEESyX1t7oKJ3B0qTH9NjCo9%2FmwsexEv5kGM6RhW2ov97Q4MDff0cLQwlaSmoOs0qDeIXdB0WXh6Yod9UgYc%2Fzs5xzGWab3s7Iea8UoqTeBy%2Fed1WFCb1iKT4jU97l14%2FnKc9ku%2FyZoKMH3%2BL5byk5giKl9oWWEaA%2FXMsmkQO12pWpSxGolHVsr01rl1LdSMXdgbVGq249%2BNOmCEhWcu5RbHoFUZgUFs%2FG%2FyWdHLICQkdeRaXjcRcLHq1Ypd8IhH3pLLiWixTBUUSLTB0f08lDUIK8K9DaxbG%2FPF4QWT%2BT4jq3b%2F83WN1vPBs9UMWQfG51lVngY9kl3nkLp9R9YHULQVsHH3fMLefmsAGOqUB4OXQTH6XWjXnvoAiqnLZvqH47TZz8gUb2dtZOcpzVcafnL92%2BKd2jiuM%2B8yxapPG6tc5horj6lIf1vrnTtsMVHRletxLXU0t8CPN85Qdr2MtupMzGM5fVikIJ55FWsS76tJj%2BSB4InIYPVOPG4Dqb7RRZmaRRSKAA423EPg7ogX3PEYGPYMww%2FCifkswjiK3mz7nYUbfdz%2BNz9FtazXfkf54if17&X-Amz-Signature=ea6627bf7e21764b63baefbc2912cb8c6d425efe896c78e1180e8016389809d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDKMBPJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICmpEdh%2FS2JBlxoL4KlBBVB8rvDl9X16yzwA%2BRLzJc%2BhAiEA8iToLSSnvdatUluHkpVyzy%2BT4U5XJJbUjlR4RL5ShggqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI3V9TEyGxuSsYmSrcA7j1SU9AvnctGPy08LutK4YKM7PhpYUJXvfns7JlTecW4xDKmepgLWeNOgzpbYCPHaeN%2B0S2j%2FCMeFuPHxQNCrTyVoiHvOOcRukRIGtUjyqHFYY7WXEypfCepTOV5YNUgnh4O4UugWada7g5H2KNrg7S63NzTTXI2Y0stiltTEbKHu8vdD8OL7bbRJNHdCFKC6hT7XXKpthzUEOfWkKjqSldlawX3fh3j0cwo6nPmQ0WXCBIWQnQPZpibE8%2FmqoBgGovLHWWXEVucqQ1AIZzeitEPHsCyzScEESyX1t7oKJ3B0qTH9NjCo9%2FmwsexEv5kGM6RhW2ov97Q4MDff0cLQwlaSmoOs0qDeIXdB0WXh6Yod9UgYc%2Fzs5xzGWab3s7Iea8UoqTeBy%2Fed1WFCb1iKT4jU97l14%2FnKc9ku%2FyZoKMH3%2BL5byk5giKl9oWWEaA%2FXMsmkQO12pWpSxGolHVsr01rl1LdSMXdgbVGq249%2BNOmCEhWcu5RbHoFUZgUFs%2FG%2FyWdHLICQkdeRaXjcRcLHq1Ypd8IhH3pLLiWixTBUUSLTB0f08lDUIK8K9DaxbG%2FPF4QWT%2BT4jq3b%2F83WN1vPBs9UMWQfG51lVngY9kl3nkLp9R9YHULQVsHH3fMLefmsAGOqUB4OXQTH6XWjXnvoAiqnLZvqH47TZz8gUb2dtZOcpzVcafnL92%2BKd2jiuM%2B8yxapPG6tc5horj6lIf1vrnTtsMVHRletxLXU0t8CPN85Qdr2MtupMzGM5fVikIJ55FWsS76tJj%2BSB4InIYPVOPG4Dqb7RRZmaRRSKAA423EPg7ogX3PEYGPYMww%2FCifkswjiK3mz7nYUbfdz%2BNz9FtazXfkf54if17&X-Amz-Signature=7e8b92dfc79d13e007f3585b9b3dffd5896e2ccfde547e4b1155492b00465d22&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDKMBPJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICmpEdh%2FS2JBlxoL4KlBBVB8rvDl9X16yzwA%2BRLzJc%2BhAiEA8iToLSSnvdatUluHkpVyzy%2BT4U5XJJbUjlR4RL5ShggqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI3V9TEyGxuSsYmSrcA7j1SU9AvnctGPy08LutK4YKM7PhpYUJXvfns7JlTecW4xDKmepgLWeNOgzpbYCPHaeN%2B0S2j%2FCMeFuPHxQNCrTyVoiHvOOcRukRIGtUjyqHFYY7WXEypfCepTOV5YNUgnh4O4UugWada7g5H2KNrg7S63NzTTXI2Y0stiltTEbKHu8vdD8OL7bbRJNHdCFKC6hT7XXKpthzUEOfWkKjqSldlawX3fh3j0cwo6nPmQ0WXCBIWQnQPZpibE8%2FmqoBgGovLHWWXEVucqQ1AIZzeitEPHsCyzScEESyX1t7oKJ3B0qTH9NjCo9%2FmwsexEv5kGM6RhW2ov97Q4MDff0cLQwlaSmoOs0qDeIXdB0WXh6Yod9UgYc%2Fzs5xzGWab3s7Iea8UoqTeBy%2Fed1WFCb1iKT4jU97l14%2FnKc9ku%2FyZoKMH3%2BL5byk5giKl9oWWEaA%2FXMsmkQO12pWpSxGolHVsr01rl1LdSMXdgbVGq249%2BNOmCEhWcu5RbHoFUZgUFs%2FG%2FyWdHLICQkdeRaXjcRcLHq1Ypd8IhH3pLLiWixTBUUSLTB0f08lDUIK8K9DaxbG%2FPF4QWT%2BT4jq3b%2F83WN1vPBs9UMWQfG51lVngY9kl3nkLp9R9YHULQVsHH3fMLefmsAGOqUB4OXQTH6XWjXnvoAiqnLZvqH47TZz8gUb2dtZOcpzVcafnL92%2BKd2jiuM%2B8yxapPG6tc5horj6lIf1vrnTtsMVHRletxLXU0t8CPN85Qdr2MtupMzGM5fVikIJ55FWsS76tJj%2BSB4InIYPVOPG4Dqb7RRZmaRRSKAA423EPg7ogX3PEYGPYMww%2FCifkswjiK3mz7nYUbfdz%2BNz9FtazXfkf54if17&X-Amz-Signature=8f692fe0d01bf8df2707f6730f97869867d57afcd1437a7f737337d37e23153b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDKMBPJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICmpEdh%2FS2JBlxoL4KlBBVB8rvDl9X16yzwA%2BRLzJc%2BhAiEA8iToLSSnvdatUluHkpVyzy%2BT4U5XJJbUjlR4RL5ShggqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI3V9TEyGxuSsYmSrcA7j1SU9AvnctGPy08LutK4YKM7PhpYUJXvfns7JlTecW4xDKmepgLWeNOgzpbYCPHaeN%2B0S2j%2FCMeFuPHxQNCrTyVoiHvOOcRukRIGtUjyqHFYY7WXEypfCepTOV5YNUgnh4O4UugWada7g5H2KNrg7S63NzTTXI2Y0stiltTEbKHu8vdD8OL7bbRJNHdCFKC6hT7XXKpthzUEOfWkKjqSldlawX3fh3j0cwo6nPmQ0WXCBIWQnQPZpibE8%2FmqoBgGovLHWWXEVucqQ1AIZzeitEPHsCyzScEESyX1t7oKJ3B0qTH9NjCo9%2FmwsexEv5kGM6RhW2ov97Q4MDff0cLQwlaSmoOs0qDeIXdB0WXh6Yod9UgYc%2Fzs5xzGWab3s7Iea8UoqTeBy%2Fed1WFCb1iKT4jU97l14%2FnKc9ku%2FyZoKMH3%2BL5byk5giKl9oWWEaA%2FXMsmkQO12pWpSxGolHVsr01rl1LdSMXdgbVGq249%2BNOmCEhWcu5RbHoFUZgUFs%2FG%2FyWdHLICQkdeRaXjcRcLHq1Ypd8IhH3pLLiWixTBUUSLTB0f08lDUIK8K9DaxbG%2FPF4QWT%2BT4jq3b%2F83WN1vPBs9UMWQfG51lVngY9kl3nkLp9R9YHULQVsHH3fMLefmsAGOqUB4OXQTH6XWjXnvoAiqnLZvqH47TZz8gUb2dtZOcpzVcafnL92%2BKd2jiuM%2B8yxapPG6tc5horj6lIf1vrnTtsMVHRletxLXU0t8CPN85Qdr2MtupMzGM5fVikIJ55FWsS76tJj%2BSB4InIYPVOPG4Dqb7RRZmaRRSKAA423EPg7ogX3PEYGPYMww%2FCifkswjiK3mz7nYUbfdz%2BNz9FtazXfkf54if17&X-Amz-Signature=307d551270a0cfe146d475f2e32cbed05b39df5a972fe582bef117f8be8ace2a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDKMBPJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICmpEdh%2FS2JBlxoL4KlBBVB8rvDl9X16yzwA%2BRLzJc%2BhAiEA8iToLSSnvdatUluHkpVyzy%2BT4U5XJJbUjlR4RL5ShggqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI3V9TEyGxuSsYmSrcA7j1SU9AvnctGPy08LutK4YKM7PhpYUJXvfns7JlTecW4xDKmepgLWeNOgzpbYCPHaeN%2B0S2j%2FCMeFuPHxQNCrTyVoiHvOOcRukRIGtUjyqHFYY7WXEypfCepTOV5YNUgnh4O4UugWada7g5H2KNrg7S63NzTTXI2Y0stiltTEbKHu8vdD8OL7bbRJNHdCFKC6hT7XXKpthzUEOfWkKjqSldlawX3fh3j0cwo6nPmQ0WXCBIWQnQPZpibE8%2FmqoBgGovLHWWXEVucqQ1AIZzeitEPHsCyzScEESyX1t7oKJ3B0qTH9NjCo9%2FmwsexEv5kGM6RhW2ov97Q4MDff0cLQwlaSmoOs0qDeIXdB0WXh6Yod9UgYc%2Fzs5xzGWab3s7Iea8UoqTeBy%2Fed1WFCb1iKT4jU97l14%2FnKc9ku%2FyZoKMH3%2BL5byk5giKl9oWWEaA%2FXMsmkQO12pWpSxGolHVsr01rl1LdSMXdgbVGq249%2BNOmCEhWcu5RbHoFUZgUFs%2FG%2FyWdHLICQkdeRaXjcRcLHq1Ypd8IhH3pLLiWixTBUUSLTB0f08lDUIK8K9DaxbG%2FPF4QWT%2BT4jq3b%2F83WN1vPBs9UMWQfG51lVngY9kl3nkLp9R9YHULQVsHH3fMLefmsAGOqUB4OXQTH6XWjXnvoAiqnLZvqH47TZz8gUb2dtZOcpzVcafnL92%2BKd2jiuM%2B8yxapPG6tc5horj6lIf1vrnTtsMVHRletxLXU0t8CPN85Qdr2MtupMzGM5fVikIJ55FWsS76tJj%2BSB4InIYPVOPG4Dqb7RRZmaRRSKAA423EPg7ogX3PEYGPYMww%2FCifkswjiK3mz7nYUbfdz%2BNz9FtazXfkf54if17&X-Amz-Signature=d29e47e6ca6955c5c0acca51dc25a6bf02a8766c4416b190aa011527e9b8b75f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDKMBPJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICmpEdh%2FS2JBlxoL4KlBBVB8rvDl9X16yzwA%2BRLzJc%2BhAiEA8iToLSSnvdatUluHkpVyzy%2BT4U5XJJbUjlR4RL5ShggqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI3V9TEyGxuSsYmSrcA7j1SU9AvnctGPy08LutK4YKM7PhpYUJXvfns7JlTecW4xDKmepgLWeNOgzpbYCPHaeN%2B0S2j%2FCMeFuPHxQNCrTyVoiHvOOcRukRIGtUjyqHFYY7WXEypfCepTOV5YNUgnh4O4UugWada7g5H2KNrg7S63NzTTXI2Y0stiltTEbKHu8vdD8OL7bbRJNHdCFKC6hT7XXKpthzUEOfWkKjqSldlawX3fh3j0cwo6nPmQ0WXCBIWQnQPZpibE8%2FmqoBgGovLHWWXEVucqQ1AIZzeitEPHsCyzScEESyX1t7oKJ3B0qTH9NjCo9%2FmwsexEv5kGM6RhW2ov97Q4MDff0cLQwlaSmoOs0qDeIXdB0WXh6Yod9UgYc%2Fzs5xzGWab3s7Iea8UoqTeBy%2Fed1WFCb1iKT4jU97l14%2FnKc9ku%2FyZoKMH3%2BL5byk5giKl9oWWEaA%2FXMsmkQO12pWpSxGolHVsr01rl1LdSMXdgbVGq249%2BNOmCEhWcu5RbHoFUZgUFs%2FG%2FyWdHLICQkdeRaXjcRcLHq1Ypd8IhH3pLLiWixTBUUSLTB0f08lDUIK8K9DaxbG%2FPF4QWT%2BT4jq3b%2F83WN1vPBs9UMWQfG51lVngY9kl3nkLp9R9YHULQVsHH3fMLefmsAGOqUB4OXQTH6XWjXnvoAiqnLZvqH47TZz8gUb2dtZOcpzVcafnL92%2BKd2jiuM%2B8yxapPG6tc5horj6lIf1vrnTtsMVHRletxLXU0t8CPN85Qdr2MtupMzGM5fVikIJ55FWsS76tJj%2BSB4InIYPVOPG4Dqb7RRZmaRRSKAA423EPg7ogX3PEYGPYMww%2FCifkswjiK3mz7nYUbfdz%2BNz9FtazXfkf54if17&X-Amz-Signature=b39010728afe3bc06f6baf4e422a9e8f7a0ff3a90710a0ed2993401fdaed6a89&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

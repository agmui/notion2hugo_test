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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB5DKCPG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0FSvqXKbg4aLTxys4gftNXscL218osIz2WV9jJQ45ZAIhAIYIagr0qFtczUNoAigutjlW4MfkhvdSbzlEnlek%2BJEGKv8DCFYQABoMNjM3NDIzMTgzODA1IgzkJAPBybNjq88Nttcq3APsTVArKnmgL5QFhxtC5khFq3aOsPYoQDiKIcIXfk6PqQCuGl99XvPZLFqrg4ytuOjeOtSXCwTIwr1j9AbF0Wgt4zd6snpFtHCpaoD6%2FijXzZIWPBDhjf7a8imZEB0DTrof1q10WUjSkee2D%2BqRCo1Dm66uZU2FpkBJKP2XR9H0%2BJq8aKzaNK%2BKqlu28wsVxjsbi8i2qKaRbYORW%2BSv7S4otb7nBjJNkswCBIxVYvY7bOpmqB9NtTti69KATuPNf%2FcPmMvqH0ApOqfFfzm%2FYvC0sUOgbL2bJGMGMCPqe4dZNYfFXVcRZK1yC7rX8sVJMTDpROg5DMhIQpc3rguwu8R9xWtFufVKkW29Q6fwPEuabKOuniji3HmV%2Bw1hZIwgWizTMVyxHIYEUtfKAKzd6yGvpfBZOHYzI%2F1zJFUPyOkCIXyHw35WgE%2FCkWlymxq1kBbykwxXboeNn6QWzZHo1nb4iS7VXEadrKAbSnr9%2FifdzVM4rDrUJQJDFDt%2F0AKOee1IPlrQm7bZzdO9LVgHRK2bOBPvmuS78%2B9WKC0dnQdmVdlHhxy%2B7YuxceR0NYhQ9%2B7ONGEqMbb7ZW8Kc4%2FnLr2B%2F59CCPEXO4W1X5CnvrRiVdQS0OWNVgUrcOSAKzC6lILABjqkAc9CsP4ErI5C5zoYn3FF7WIhHVrmtkzenLNRnZzIuVQF56MubXeP5mLh%2BsTInYJqiNlYSEUmA002buV%2FroJVsi9Qm6DzIz1LgTi0xlpkVWEjw0Bqdd8hoV3XIeLuKB5n2uxpqkzZDiZotG4Culq7DUGFgq92Bfy%2F5QGCabTvVHqPJ1op%2BnUmnjuNFAGb9yA%2BTV1MBi0zhsIe2eioq6lFJZADhOhC&X-Amz-Signature=517e6b439ebc5d27596e669ee036ccb9fef91b75cb54bacf9eaf2d1ef6992228&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB5DKCPG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0FSvqXKbg4aLTxys4gftNXscL218osIz2WV9jJQ45ZAIhAIYIagr0qFtczUNoAigutjlW4MfkhvdSbzlEnlek%2BJEGKv8DCFYQABoMNjM3NDIzMTgzODA1IgzkJAPBybNjq88Nttcq3APsTVArKnmgL5QFhxtC5khFq3aOsPYoQDiKIcIXfk6PqQCuGl99XvPZLFqrg4ytuOjeOtSXCwTIwr1j9AbF0Wgt4zd6snpFtHCpaoD6%2FijXzZIWPBDhjf7a8imZEB0DTrof1q10WUjSkee2D%2BqRCo1Dm66uZU2FpkBJKP2XR9H0%2BJq8aKzaNK%2BKqlu28wsVxjsbi8i2qKaRbYORW%2BSv7S4otb7nBjJNkswCBIxVYvY7bOpmqB9NtTti69KATuPNf%2FcPmMvqH0ApOqfFfzm%2FYvC0sUOgbL2bJGMGMCPqe4dZNYfFXVcRZK1yC7rX8sVJMTDpROg5DMhIQpc3rguwu8R9xWtFufVKkW29Q6fwPEuabKOuniji3HmV%2Bw1hZIwgWizTMVyxHIYEUtfKAKzd6yGvpfBZOHYzI%2F1zJFUPyOkCIXyHw35WgE%2FCkWlymxq1kBbykwxXboeNn6QWzZHo1nb4iS7VXEadrKAbSnr9%2FifdzVM4rDrUJQJDFDt%2F0AKOee1IPlrQm7bZzdO9LVgHRK2bOBPvmuS78%2B9WKC0dnQdmVdlHhxy%2B7YuxceR0NYhQ9%2B7ONGEqMbb7ZW8Kc4%2FnLr2B%2F59CCPEXO4W1X5CnvrRiVdQS0OWNVgUrcOSAKzC6lILABjqkAc9CsP4ErI5C5zoYn3FF7WIhHVrmtkzenLNRnZzIuVQF56MubXeP5mLh%2BsTInYJqiNlYSEUmA002buV%2FroJVsi9Qm6DzIz1LgTi0xlpkVWEjw0Bqdd8hoV3XIeLuKB5n2uxpqkzZDiZotG4Culq7DUGFgq92Bfy%2F5QGCabTvVHqPJ1op%2BnUmnjuNFAGb9yA%2BTV1MBi0zhsIe2eioq6lFJZADhOhC&X-Amz-Signature=805bc33ab39a29fc77bc02e385c055e568425f11d98207035b72bcf350cee6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB5DKCPG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0FSvqXKbg4aLTxys4gftNXscL218osIz2WV9jJQ45ZAIhAIYIagr0qFtczUNoAigutjlW4MfkhvdSbzlEnlek%2BJEGKv8DCFYQABoMNjM3NDIzMTgzODA1IgzkJAPBybNjq88Nttcq3APsTVArKnmgL5QFhxtC5khFq3aOsPYoQDiKIcIXfk6PqQCuGl99XvPZLFqrg4ytuOjeOtSXCwTIwr1j9AbF0Wgt4zd6snpFtHCpaoD6%2FijXzZIWPBDhjf7a8imZEB0DTrof1q10WUjSkee2D%2BqRCo1Dm66uZU2FpkBJKP2XR9H0%2BJq8aKzaNK%2BKqlu28wsVxjsbi8i2qKaRbYORW%2BSv7S4otb7nBjJNkswCBIxVYvY7bOpmqB9NtTti69KATuPNf%2FcPmMvqH0ApOqfFfzm%2FYvC0sUOgbL2bJGMGMCPqe4dZNYfFXVcRZK1yC7rX8sVJMTDpROg5DMhIQpc3rguwu8R9xWtFufVKkW29Q6fwPEuabKOuniji3HmV%2Bw1hZIwgWizTMVyxHIYEUtfKAKzd6yGvpfBZOHYzI%2F1zJFUPyOkCIXyHw35WgE%2FCkWlymxq1kBbykwxXboeNn6QWzZHo1nb4iS7VXEadrKAbSnr9%2FifdzVM4rDrUJQJDFDt%2F0AKOee1IPlrQm7bZzdO9LVgHRK2bOBPvmuS78%2B9WKC0dnQdmVdlHhxy%2B7YuxceR0NYhQ9%2B7ONGEqMbb7ZW8Kc4%2FnLr2B%2F59CCPEXO4W1X5CnvrRiVdQS0OWNVgUrcOSAKzC6lILABjqkAc9CsP4ErI5C5zoYn3FF7WIhHVrmtkzenLNRnZzIuVQF56MubXeP5mLh%2BsTInYJqiNlYSEUmA002buV%2FroJVsi9Qm6DzIz1LgTi0xlpkVWEjw0Bqdd8hoV3XIeLuKB5n2uxpqkzZDiZotG4Culq7DUGFgq92Bfy%2F5QGCabTvVHqPJ1op%2BnUmnjuNFAGb9yA%2BTV1MBi0zhsIe2eioq6lFJZADhOhC&X-Amz-Signature=ba05e44cf0abec97ccd7f514610cc22990f11e909f8d1fc1085813b5b5223741&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB5DKCPG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0FSvqXKbg4aLTxys4gftNXscL218osIz2WV9jJQ45ZAIhAIYIagr0qFtczUNoAigutjlW4MfkhvdSbzlEnlek%2BJEGKv8DCFYQABoMNjM3NDIzMTgzODA1IgzkJAPBybNjq88Nttcq3APsTVArKnmgL5QFhxtC5khFq3aOsPYoQDiKIcIXfk6PqQCuGl99XvPZLFqrg4ytuOjeOtSXCwTIwr1j9AbF0Wgt4zd6snpFtHCpaoD6%2FijXzZIWPBDhjf7a8imZEB0DTrof1q10WUjSkee2D%2BqRCo1Dm66uZU2FpkBJKP2XR9H0%2BJq8aKzaNK%2BKqlu28wsVxjsbi8i2qKaRbYORW%2BSv7S4otb7nBjJNkswCBIxVYvY7bOpmqB9NtTti69KATuPNf%2FcPmMvqH0ApOqfFfzm%2FYvC0sUOgbL2bJGMGMCPqe4dZNYfFXVcRZK1yC7rX8sVJMTDpROg5DMhIQpc3rguwu8R9xWtFufVKkW29Q6fwPEuabKOuniji3HmV%2Bw1hZIwgWizTMVyxHIYEUtfKAKzd6yGvpfBZOHYzI%2F1zJFUPyOkCIXyHw35WgE%2FCkWlymxq1kBbykwxXboeNn6QWzZHo1nb4iS7VXEadrKAbSnr9%2FifdzVM4rDrUJQJDFDt%2F0AKOee1IPlrQm7bZzdO9LVgHRK2bOBPvmuS78%2B9WKC0dnQdmVdlHhxy%2B7YuxceR0NYhQ9%2B7ONGEqMbb7ZW8Kc4%2FnLr2B%2F59CCPEXO4W1X5CnvrRiVdQS0OWNVgUrcOSAKzC6lILABjqkAc9CsP4ErI5C5zoYn3FF7WIhHVrmtkzenLNRnZzIuVQF56MubXeP5mLh%2BsTInYJqiNlYSEUmA002buV%2FroJVsi9Qm6DzIz1LgTi0xlpkVWEjw0Bqdd8hoV3XIeLuKB5n2uxpqkzZDiZotG4Culq7DUGFgq92Bfy%2F5QGCabTvVHqPJ1op%2BnUmnjuNFAGb9yA%2BTV1MBi0zhsIe2eioq6lFJZADhOhC&X-Amz-Signature=96cc210caa2b9224a4dddac051cb02d5aafc2374041d574b3958fc564a90ba80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB5DKCPG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0FSvqXKbg4aLTxys4gftNXscL218osIz2WV9jJQ45ZAIhAIYIagr0qFtczUNoAigutjlW4MfkhvdSbzlEnlek%2BJEGKv8DCFYQABoMNjM3NDIzMTgzODA1IgzkJAPBybNjq88Nttcq3APsTVArKnmgL5QFhxtC5khFq3aOsPYoQDiKIcIXfk6PqQCuGl99XvPZLFqrg4ytuOjeOtSXCwTIwr1j9AbF0Wgt4zd6snpFtHCpaoD6%2FijXzZIWPBDhjf7a8imZEB0DTrof1q10WUjSkee2D%2BqRCo1Dm66uZU2FpkBJKP2XR9H0%2BJq8aKzaNK%2BKqlu28wsVxjsbi8i2qKaRbYORW%2BSv7S4otb7nBjJNkswCBIxVYvY7bOpmqB9NtTti69KATuPNf%2FcPmMvqH0ApOqfFfzm%2FYvC0sUOgbL2bJGMGMCPqe4dZNYfFXVcRZK1yC7rX8sVJMTDpROg5DMhIQpc3rguwu8R9xWtFufVKkW29Q6fwPEuabKOuniji3HmV%2Bw1hZIwgWizTMVyxHIYEUtfKAKzd6yGvpfBZOHYzI%2F1zJFUPyOkCIXyHw35WgE%2FCkWlymxq1kBbykwxXboeNn6QWzZHo1nb4iS7VXEadrKAbSnr9%2FifdzVM4rDrUJQJDFDt%2F0AKOee1IPlrQm7bZzdO9LVgHRK2bOBPvmuS78%2B9WKC0dnQdmVdlHhxy%2B7YuxceR0NYhQ9%2B7ONGEqMbb7ZW8Kc4%2FnLr2B%2F59CCPEXO4W1X5CnvrRiVdQS0OWNVgUrcOSAKzC6lILABjqkAc9CsP4ErI5C5zoYn3FF7WIhHVrmtkzenLNRnZzIuVQF56MubXeP5mLh%2BsTInYJqiNlYSEUmA002buV%2FroJVsi9Qm6DzIz1LgTi0xlpkVWEjw0Bqdd8hoV3XIeLuKB5n2uxpqkzZDiZotG4Culq7DUGFgq92Bfy%2F5QGCabTvVHqPJ1op%2BnUmnjuNFAGb9yA%2BTV1MBi0zhsIe2eioq6lFJZADhOhC&X-Amz-Signature=81267df964efd6ddbed77afcff93e99219f465303c3ee0d21bdb64153c3de82d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB5DKCPG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0FSvqXKbg4aLTxys4gftNXscL218osIz2WV9jJQ45ZAIhAIYIagr0qFtczUNoAigutjlW4MfkhvdSbzlEnlek%2BJEGKv8DCFYQABoMNjM3NDIzMTgzODA1IgzkJAPBybNjq88Nttcq3APsTVArKnmgL5QFhxtC5khFq3aOsPYoQDiKIcIXfk6PqQCuGl99XvPZLFqrg4ytuOjeOtSXCwTIwr1j9AbF0Wgt4zd6snpFtHCpaoD6%2FijXzZIWPBDhjf7a8imZEB0DTrof1q10WUjSkee2D%2BqRCo1Dm66uZU2FpkBJKP2XR9H0%2BJq8aKzaNK%2BKqlu28wsVxjsbi8i2qKaRbYORW%2BSv7S4otb7nBjJNkswCBIxVYvY7bOpmqB9NtTti69KATuPNf%2FcPmMvqH0ApOqfFfzm%2FYvC0sUOgbL2bJGMGMCPqe4dZNYfFXVcRZK1yC7rX8sVJMTDpROg5DMhIQpc3rguwu8R9xWtFufVKkW29Q6fwPEuabKOuniji3HmV%2Bw1hZIwgWizTMVyxHIYEUtfKAKzd6yGvpfBZOHYzI%2F1zJFUPyOkCIXyHw35WgE%2FCkWlymxq1kBbykwxXboeNn6QWzZHo1nb4iS7VXEadrKAbSnr9%2FifdzVM4rDrUJQJDFDt%2F0AKOee1IPlrQm7bZzdO9LVgHRK2bOBPvmuS78%2B9WKC0dnQdmVdlHhxy%2B7YuxceR0NYhQ9%2B7ONGEqMbb7ZW8Kc4%2FnLr2B%2F59CCPEXO4W1X5CnvrRiVdQS0OWNVgUrcOSAKzC6lILABjqkAc9CsP4ErI5C5zoYn3FF7WIhHVrmtkzenLNRnZzIuVQF56MubXeP5mLh%2BsTInYJqiNlYSEUmA002buV%2FroJVsi9Qm6DzIz1LgTi0xlpkVWEjw0Bqdd8hoV3XIeLuKB5n2uxpqkzZDiZotG4Culq7DUGFgq92Bfy%2F5QGCabTvVHqPJ1op%2BnUmnjuNFAGb9yA%2BTV1MBi0zhsIe2eioq6lFJZADhOhC&X-Amz-Signature=7592afab50e4dcd7b34630103525ccea7d6f66d03014a9d7d3dad0642bb2896a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB5DKCPG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0FSvqXKbg4aLTxys4gftNXscL218osIz2WV9jJQ45ZAIhAIYIagr0qFtczUNoAigutjlW4MfkhvdSbzlEnlek%2BJEGKv8DCFYQABoMNjM3NDIzMTgzODA1IgzkJAPBybNjq88Nttcq3APsTVArKnmgL5QFhxtC5khFq3aOsPYoQDiKIcIXfk6PqQCuGl99XvPZLFqrg4ytuOjeOtSXCwTIwr1j9AbF0Wgt4zd6snpFtHCpaoD6%2FijXzZIWPBDhjf7a8imZEB0DTrof1q10WUjSkee2D%2BqRCo1Dm66uZU2FpkBJKP2XR9H0%2BJq8aKzaNK%2BKqlu28wsVxjsbi8i2qKaRbYORW%2BSv7S4otb7nBjJNkswCBIxVYvY7bOpmqB9NtTti69KATuPNf%2FcPmMvqH0ApOqfFfzm%2FYvC0sUOgbL2bJGMGMCPqe4dZNYfFXVcRZK1yC7rX8sVJMTDpROg5DMhIQpc3rguwu8R9xWtFufVKkW29Q6fwPEuabKOuniji3HmV%2Bw1hZIwgWizTMVyxHIYEUtfKAKzd6yGvpfBZOHYzI%2F1zJFUPyOkCIXyHw35WgE%2FCkWlymxq1kBbykwxXboeNn6QWzZHo1nb4iS7VXEadrKAbSnr9%2FifdzVM4rDrUJQJDFDt%2F0AKOee1IPlrQm7bZzdO9LVgHRK2bOBPvmuS78%2B9WKC0dnQdmVdlHhxy%2B7YuxceR0NYhQ9%2B7ONGEqMbb7ZW8Kc4%2FnLr2B%2F59CCPEXO4W1X5CnvrRiVdQS0OWNVgUrcOSAKzC6lILABjqkAc9CsP4ErI5C5zoYn3FF7WIhHVrmtkzenLNRnZzIuVQF56MubXeP5mLh%2BsTInYJqiNlYSEUmA002buV%2FroJVsi9Qm6DzIz1LgTi0xlpkVWEjw0Bqdd8hoV3XIeLuKB5n2uxpqkzZDiZotG4Culq7DUGFgq92Bfy%2F5QGCabTvVHqPJ1op%2BnUmnjuNFAGb9yA%2BTV1MBi0zhsIe2eioq6lFJZADhOhC&X-Amz-Signature=02f56c205a7401895223cf3dffe6ad15038472b3ee996cdf8ceaf0c8d168acc9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

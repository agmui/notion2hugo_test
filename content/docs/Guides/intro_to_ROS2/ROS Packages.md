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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYYUHX6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZDcXNDAx4KoSd8xqCEDKRPst%2BEhSpB8FXs4zLA%2BAyQIgZ3g%2BuKOipQJpnYpGcTyOdBQ%2BHmd7aW%2F0TCLF4lLw4CoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDemgI0bcgz%2Bg9fMSyrcA73uvnW0rOdg4IY966Do%2FBmywPPANPMSpteDHt9k8pM%2BGC7330%2B1jk7ybmBpEreO5rY%2Frqa3wmy6WoXQVDOVF81UyBqnByZELP%2FmttEsrQUwTOD5dl%2FClmVIr%2Fe9zCtBhA%2BhhHkRgiwScDipNPYBuAGNAMgX0MZgFtDz8LeWAen0Oxa6M2lTPoBrZ9jQ82mOiKSaqmp%2BT%2FfENW2LomMGJStmIhlErbX%2BNRUuYtkLC8AP8p1MOpNvmRh2jZ5KQpNrvnyNVr%2B0yt7PyK2K%2FBn9f2VQUaaAGzndOWH9CGTQGzQYRBUn5wK89jcu97MTdPBU4vbn1fDDmQvwiVMuJQ2%2BMWtm%2BghzIa%2B2HJ0ODwN9q%2FTQtgoVa1gtaQzJaGedgIXcE2aLT2XM1aRFbm7FIh2aTnZvM62hFgcngVT4xoJjctOq1xoXvGQmOgCpR2VonROoPG7XNPDmrw7tBfa6CpBHV8%2Bj4fzCsdH5KuW%2By6syJHO8UIjZlHYVXaioYMSkRpVNR%2FJ8%2BG73UJF0dEIaSh6Q5oc7bG1t26frw19QVFpi8LTi3lJObSjOqqq7Y%2BukTjUdZz8YPOPdzLWybkxhfzEgn%2BfNoAr6t7orm%2BRsoAnTH6qJ7bQzahIgDXnBk0lmMPvk7cMGOqUBc1%2BQNOAkZOu0qrz7%2BVJZJm0YKvCyiId3hXkwCAB%2B9sgW67X7dz%2FC2jM9KIrzmbraTnys94s6LSiGsmv3xZHtyrgaisMiBZ7UFERsE1A1Hv4GyVIpPOZbZezO0JYD%2BiNLrRJTo0Amn5pn7HKLG5%2BHiFy3TG7GiH25fwzRwKqEZC173Kp%2Fa4bqFqQHQFX0W3v0lWLIQkd0TJ4l%2F9%2B8DQ0N3vui3lNd&X-Amz-Signature=6ffff4201d44dfc0204b585df41cfcc8bc172726d9306207e646489c65e17cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYYUHX6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZDcXNDAx4KoSd8xqCEDKRPst%2BEhSpB8FXs4zLA%2BAyQIgZ3g%2BuKOipQJpnYpGcTyOdBQ%2BHmd7aW%2F0TCLF4lLw4CoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDemgI0bcgz%2Bg9fMSyrcA73uvnW0rOdg4IY966Do%2FBmywPPANPMSpteDHt9k8pM%2BGC7330%2B1jk7ybmBpEreO5rY%2Frqa3wmy6WoXQVDOVF81UyBqnByZELP%2FmttEsrQUwTOD5dl%2FClmVIr%2Fe9zCtBhA%2BhhHkRgiwScDipNPYBuAGNAMgX0MZgFtDz8LeWAen0Oxa6M2lTPoBrZ9jQ82mOiKSaqmp%2BT%2FfENW2LomMGJStmIhlErbX%2BNRUuYtkLC8AP8p1MOpNvmRh2jZ5KQpNrvnyNVr%2B0yt7PyK2K%2FBn9f2VQUaaAGzndOWH9CGTQGzQYRBUn5wK89jcu97MTdPBU4vbn1fDDmQvwiVMuJQ2%2BMWtm%2BghzIa%2B2HJ0ODwN9q%2FTQtgoVa1gtaQzJaGedgIXcE2aLT2XM1aRFbm7FIh2aTnZvM62hFgcngVT4xoJjctOq1xoXvGQmOgCpR2VonROoPG7XNPDmrw7tBfa6CpBHV8%2Bj4fzCsdH5KuW%2By6syJHO8UIjZlHYVXaioYMSkRpVNR%2FJ8%2BG73UJF0dEIaSh6Q5oc7bG1t26frw19QVFpi8LTi3lJObSjOqqq7Y%2BukTjUdZz8YPOPdzLWybkxhfzEgn%2BfNoAr6t7orm%2BRsoAnTH6qJ7bQzahIgDXnBk0lmMPvk7cMGOqUBc1%2BQNOAkZOu0qrz7%2BVJZJm0YKvCyiId3hXkwCAB%2B9sgW67X7dz%2FC2jM9KIrzmbraTnys94s6LSiGsmv3xZHtyrgaisMiBZ7UFERsE1A1Hv4GyVIpPOZbZezO0JYD%2BiNLrRJTo0Amn5pn7HKLG5%2BHiFy3TG7GiH25fwzRwKqEZC173Kp%2Fa4bqFqQHQFX0W3v0lWLIQkd0TJ4l%2F9%2B8DQ0N3vui3lNd&X-Amz-Signature=2c47b411a3bd2f78e0dad810e60adbcd3b60ef5a89ff4065fa634d7826bf9eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYYUHX6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZDcXNDAx4KoSd8xqCEDKRPst%2BEhSpB8FXs4zLA%2BAyQIgZ3g%2BuKOipQJpnYpGcTyOdBQ%2BHmd7aW%2F0TCLF4lLw4CoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDemgI0bcgz%2Bg9fMSyrcA73uvnW0rOdg4IY966Do%2FBmywPPANPMSpteDHt9k8pM%2BGC7330%2B1jk7ybmBpEreO5rY%2Frqa3wmy6WoXQVDOVF81UyBqnByZELP%2FmttEsrQUwTOD5dl%2FClmVIr%2Fe9zCtBhA%2BhhHkRgiwScDipNPYBuAGNAMgX0MZgFtDz8LeWAen0Oxa6M2lTPoBrZ9jQ82mOiKSaqmp%2BT%2FfENW2LomMGJStmIhlErbX%2BNRUuYtkLC8AP8p1MOpNvmRh2jZ5KQpNrvnyNVr%2B0yt7PyK2K%2FBn9f2VQUaaAGzndOWH9CGTQGzQYRBUn5wK89jcu97MTdPBU4vbn1fDDmQvwiVMuJQ2%2BMWtm%2BghzIa%2B2HJ0ODwN9q%2FTQtgoVa1gtaQzJaGedgIXcE2aLT2XM1aRFbm7FIh2aTnZvM62hFgcngVT4xoJjctOq1xoXvGQmOgCpR2VonROoPG7XNPDmrw7tBfa6CpBHV8%2Bj4fzCsdH5KuW%2By6syJHO8UIjZlHYVXaioYMSkRpVNR%2FJ8%2BG73UJF0dEIaSh6Q5oc7bG1t26frw19QVFpi8LTi3lJObSjOqqq7Y%2BukTjUdZz8YPOPdzLWybkxhfzEgn%2BfNoAr6t7orm%2BRsoAnTH6qJ7bQzahIgDXnBk0lmMPvk7cMGOqUBc1%2BQNOAkZOu0qrz7%2BVJZJm0YKvCyiId3hXkwCAB%2B9sgW67X7dz%2FC2jM9KIrzmbraTnys94s6LSiGsmv3xZHtyrgaisMiBZ7UFERsE1A1Hv4GyVIpPOZbZezO0JYD%2BiNLrRJTo0Amn5pn7HKLG5%2BHiFy3TG7GiH25fwzRwKqEZC173Kp%2Fa4bqFqQHQFX0W3v0lWLIQkd0TJ4l%2F9%2B8DQ0N3vui3lNd&X-Amz-Signature=699a00869a44b3560556efaaa44bb536e0f5bf97cbc78ab7713b346775f0afd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYYUHX6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZDcXNDAx4KoSd8xqCEDKRPst%2BEhSpB8FXs4zLA%2BAyQIgZ3g%2BuKOipQJpnYpGcTyOdBQ%2BHmd7aW%2F0TCLF4lLw4CoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDemgI0bcgz%2Bg9fMSyrcA73uvnW0rOdg4IY966Do%2FBmywPPANPMSpteDHt9k8pM%2BGC7330%2B1jk7ybmBpEreO5rY%2Frqa3wmy6WoXQVDOVF81UyBqnByZELP%2FmttEsrQUwTOD5dl%2FClmVIr%2Fe9zCtBhA%2BhhHkRgiwScDipNPYBuAGNAMgX0MZgFtDz8LeWAen0Oxa6M2lTPoBrZ9jQ82mOiKSaqmp%2BT%2FfENW2LomMGJStmIhlErbX%2BNRUuYtkLC8AP8p1MOpNvmRh2jZ5KQpNrvnyNVr%2B0yt7PyK2K%2FBn9f2VQUaaAGzndOWH9CGTQGzQYRBUn5wK89jcu97MTdPBU4vbn1fDDmQvwiVMuJQ2%2BMWtm%2BghzIa%2B2HJ0ODwN9q%2FTQtgoVa1gtaQzJaGedgIXcE2aLT2XM1aRFbm7FIh2aTnZvM62hFgcngVT4xoJjctOq1xoXvGQmOgCpR2VonROoPG7XNPDmrw7tBfa6CpBHV8%2Bj4fzCsdH5KuW%2By6syJHO8UIjZlHYVXaioYMSkRpVNR%2FJ8%2BG73UJF0dEIaSh6Q5oc7bG1t26frw19QVFpi8LTi3lJObSjOqqq7Y%2BukTjUdZz8YPOPdzLWybkxhfzEgn%2BfNoAr6t7orm%2BRsoAnTH6qJ7bQzahIgDXnBk0lmMPvk7cMGOqUBc1%2BQNOAkZOu0qrz7%2BVJZJm0YKvCyiId3hXkwCAB%2B9sgW67X7dz%2FC2jM9KIrzmbraTnys94s6LSiGsmv3xZHtyrgaisMiBZ7UFERsE1A1Hv4GyVIpPOZbZezO0JYD%2BiNLrRJTo0Amn5pn7HKLG5%2BHiFy3TG7GiH25fwzRwKqEZC173Kp%2Fa4bqFqQHQFX0W3v0lWLIQkd0TJ4l%2F9%2B8DQ0N3vui3lNd&X-Amz-Signature=b8a2fa559815cb962cf152a8d24c6d50df71d5ff3831e6f543682960a5cc21a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYYUHX6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZDcXNDAx4KoSd8xqCEDKRPst%2BEhSpB8FXs4zLA%2BAyQIgZ3g%2BuKOipQJpnYpGcTyOdBQ%2BHmd7aW%2F0TCLF4lLw4CoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDemgI0bcgz%2Bg9fMSyrcA73uvnW0rOdg4IY966Do%2FBmywPPANPMSpteDHt9k8pM%2BGC7330%2B1jk7ybmBpEreO5rY%2Frqa3wmy6WoXQVDOVF81UyBqnByZELP%2FmttEsrQUwTOD5dl%2FClmVIr%2Fe9zCtBhA%2BhhHkRgiwScDipNPYBuAGNAMgX0MZgFtDz8LeWAen0Oxa6M2lTPoBrZ9jQ82mOiKSaqmp%2BT%2FfENW2LomMGJStmIhlErbX%2BNRUuYtkLC8AP8p1MOpNvmRh2jZ5KQpNrvnyNVr%2B0yt7PyK2K%2FBn9f2VQUaaAGzndOWH9CGTQGzQYRBUn5wK89jcu97MTdPBU4vbn1fDDmQvwiVMuJQ2%2BMWtm%2BghzIa%2B2HJ0ODwN9q%2FTQtgoVa1gtaQzJaGedgIXcE2aLT2XM1aRFbm7FIh2aTnZvM62hFgcngVT4xoJjctOq1xoXvGQmOgCpR2VonROoPG7XNPDmrw7tBfa6CpBHV8%2Bj4fzCsdH5KuW%2By6syJHO8UIjZlHYVXaioYMSkRpVNR%2FJ8%2BG73UJF0dEIaSh6Q5oc7bG1t26frw19QVFpi8LTi3lJObSjOqqq7Y%2BukTjUdZz8YPOPdzLWybkxhfzEgn%2BfNoAr6t7orm%2BRsoAnTH6qJ7bQzahIgDXnBk0lmMPvk7cMGOqUBc1%2BQNOAkZOu0qrz7%2BVJZJm0YKvCyiId3hXkwCAB%2B9sgW67X7dz%2FC2jM9KIrzmbraTnys94s6LSiGsmv3xZHtyrgaisMiBZ7UFERsE1A1Hv4GyVIpPOZbZezO0JYD%2BiNLrRJTo0Amn5pn7HKLG5%2BHiFy3TG7GiH25fwzRwKqEZC173Kp%2Fa4bqFqQHQFX0W3v0lWLIQkd0TJ4l%2F9%2B8DQ0N3vui3lNd&X-Amz-Signature=ba11589098343f5acd05cf17d51fea10b83939d113f71261311bc5bd158ae417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYYUHX6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZDcXNDAx4KoSd8xqCEDKRPst%2BEhSpB8FXs4zLA%2BAyQIgZ3g%2BuKOipQJpnYpGcTyOdBQ%2BHmd7aW%2F0TCLF4lLw4CoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDemgI0bcgz%2Bg9fMSyrcA73uvnW0rOdg4IY966Do%2FBmywPPANPMSpteDHt9k8pM%2BGC7330%2B1jk7ybmBpEreO5rY%2Frqa3wmy6WoXQVDOVF81UyBqnByZELP%2FmttEsrQUwTOD5dl%2FClmVIr%2Fe9zCtBhA%2BhhHkRgiwScDipNPYBuAGNAMgX0MZgFtDz8LeWAen0Oxa6M2lTPoBrZ9jQ82mOiKSaqmp%2BT%2FfENW2LomMGJStmIhlErbX%2BNRUuYtkLC8AP8p1MOpNvmRh2jZ5KQpNrvnyNVr%2B0yt7PyK2K%2FBn9f2VQUaaAGzndOWH9CGTQGzQYRBUn5wK89jcu97MTdPBU4vbn1fDDmQvwiVMuJQ2%2BMWtm%2BghzIa%2B2HJ0ODwN9q%2FTQtgoVa1gtaQzJaGedgIXcE2aLT2XM1aRFbm7FIh2aTnZvM62hFgcngVT4xoJjctOq1xoXvGQmOgCpR2VonROoPG7XNPDmrw7tBfa6CpBHV8%2Bj4fzCsdH5KuW%2By6syJHO8UIjZlHYVXaioYMSkRpVNR%2FJ8%2BG73UJF0dEIaSh6Q5oc7bG1t26frw19QVFpi8LTi3lJObSjOqqq7Y%2BukTjUdZz8YPOPdzLWybkxhfzEgn%2BfNoAr6t7orm%2BRsoAnTH6qJ7bQzahIgDXnBk0lmMPvk7cMGOqUBc1%2BQNOAkZOu0qrz7%2BVJZJm0YKvCyiId3hXkwCAB%2B9sgW67X7dz%2FC2jM9KIrzmbraTnys94s6LSiGsmv3xZHtyrgaisMiBZ7UFERsE1A1Hv4GyVIpPOZbZezO0JYD%2BiNLrRJTo0Amn5pn7HKLG5%2BHiFy3TG7GiH25fwzRwKqEZC173Kp%2Fa4bqFqQHQFX0W3v0lWLIQkd0TJ4l%2F9%2B8DQ0N3vui3lNd&X-Amz-Signature=b5fb86fc325b91a1ca98fb32afb9436bffbc6b21715a430e090ccc8afcae385d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYYUHX6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZDcXNDAx4KoSd8xqCEDKRPst%2BEhSpB8FXs4zLA%2BAyQIgZ3g%2BuKOipQJpnYpGcTyOdBQ%2BHmd7aW%2F0TCLF4lLw4CoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDemgI0bcgz%2Bg9fMSyrcA73uvnW0rOdg4IY966Do%2FBmywPPANPMSpteDHt9k8pM%2BGC7330%2B1jk7ybmBpEreO5rY%2Frqa3wmy6WoXQVDOVF81UyBqnByZELP%2FmttEsrQUwTOD5dl%2FClmVIr%2Fe9zCtBhA%2BhhHkRgiwScDipNPYBuAGNAMgX0MZgFtDz8LeWAen0Oxa6M2lTPoBrZ9jQ82mOiKSaqmp%2BT%2FfENW2LomMGJStmIhlErbX%2BNRUuYtkLC8AP8p1MOpNvmRh2jZ5KQpNrvnyNVr%2B0yt7PyK2K%2FBn9f2VQUaaAGzndOWH9CGTQGzQYRBUn5wK89jcu97MTdPBU4vbn1fDDmQvwiVMuJQ2%2BMWtm%2BghzIa%2B2HJ0ODwN9q%2FTQtgoVa1gtaQzJaGedgIXcE2aLT2XM1aRFbm7FIh2aTnZvM62hFgcngVT4xoJjctOq1xoXvGQmOgCpR2VonROoPG7XNPDmrw7tBfa6CpBHV8%2Bj4fzCsdH5KuW%2By6syJHO8UIjZlHYVXaioYMSkRpVNR%2FJ8%2BG73UJF0dEIaSh6Q5oc7bG1t26frw19QVFpi8LTi3lJObSjOqqq7Y%2BukTjUdZz8YPOPdzLWybkxhfzEgn%2BfNoAr6t7orm%2BRsoAnTH6qJ7bQzahIgDXnBk0lmMPvk7cMGOqUBc1%2BQNOAkZOu0qrz7%2BVJZJm0YKvCyiId3hXkwCAB%2B9sgW67X7dz%2FC2jM9KIrzmbraTnys94s6LSiGsmv3xZHtyrgaisMiBZ7UFERsE1A1Hv4GyVIpPOZbZezO0JYD%2BiNLrRJTo0Amn5pn7HKLG5%2BHiFy3TG7GiH25fwzRwKqEZC173Kp%2Fa4bqFqQHQFX0W3v0lWLIQkd0TJ4l%2F9%2B8DQ0N3vui3lNd&X-Amz-Signature=ede640a32da66e5089bc083c5eb8237eddd352471ed18edc1e284c1a002ce6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

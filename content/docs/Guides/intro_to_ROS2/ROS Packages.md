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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRM2UBP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLaC2w3GtjPBnB6oDC4XiwGCiFlTcrScHYBZKVrRmqYwIgCDAzi66A%2B%2BbulaCVkvvgjHlwbJ%2F8gmqCIW1URjabaO8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOoXIYL5x89LCv3J6ircA5YO6GPOMyR6XugunkQ4GoolVZ1u1GGbxCoNkqsyaT8fCk%2BHL6tC4MUQcW8Irdj%2F8mQYthWzRCFw%2FXEdoHJ6Fj%2BjAA%2FLsl5ZQNDhkBbXiK9RUP88WkJgID39uxsG%2BwUqO%2F3aNJ6iayJW9Z3v%2BNwNFtGxIHsl4W0dCs1NabRFO3zSNnL5T4IXsdFOlHIm1v0K4Z8gt0t7w5KT%2BtHGaBdSysOi4s4QTo0XpABSQWsyJjyLvHTH0OrVZmfcxStsAOuK0pr6%2BjEpCih1WrmTuuB7Ltm7JkYXclBq7enSRBotW9jOCNdGgCD64jUQEsJEv7m7DJ1t4vksbGX4jm1ZhlJ3qfdmdQlMPne5jCAKdOeyjtdu1GowLvAS2RwyxEcE6L5VnNrKYf55sd2ZVWAVgfTs8OAxknbcm52zXhMu7nxmW5%2BzMHX5%2F2hALF4nvSYSQwxkrucEEqDxoxThHMTRrt7ngp7%2F6jwxtELCm5dtIQNFqjS8oUAXCk%2BC%2FzrmSSOiwsX%2FVifXFzzDv%2FAQrwqkmgccXYgV8qVxSdPp144vIj2Dq4j8xfbNlD0iC0yhBdYtN4qDttQVGbg0tAnfVs0PWw6UeKW%2BUfTCBU6t%2BTAewymaPt8RXf6UENISY6iyGnlTMJ%2B2lsEGOqUBghLIE1c8T%2BlkaGqMa5I%2BtNEC9lMfot6tvPgDyr%2FErLWAAWr9fqomB0xq%2BgdtOTPWTeyQmNDsMfN2dmleQ4hYAC67vhFTqgS%2ByCNML5zt4Ea4b6wCmV9irvijvnVsNtgusHmSGuPVnOEiHGBkHiHtgMSgG455y8t7yMArX497dFGTbms8bdsO0v%2B7MFBY%2B1jS2LlF4j0Z%2BunZOmzIKs0FnATzqsbH&X-Amz-Signature=5cd57bd5eef79e4609d48a5e47d9e929c3d31bf9a4fc6fd4a464b31dd4d12977&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRM2UBP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLaC2w3GtjPBnB6oDC4XiwGCiFlTcrScHYBZKVrRmqYwIgCDAzi66A%2B%2BbulaCVkvvgjHlwbJ%2F8gmqCIW1URjabaO8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOoXIYL5x89LCv3J6ircA5YO6GPOMyR6XugunkQ4GoolVZ1u1GGbxCoNkqsyaT8fCk%2BHL6tC4MUQcW8Irdj%2F8mQYthWzRCFw%2FXEdoHJ6Fj%2BjAA%2FLsl5ZQNDhkBbXiK9RUP88WkJgID39uxsG%2BwUqO%2F3aNJ6iayJW9Z3v%2BNwNFtGxIHsl4W0dCs1NabRFO3zSNnL5T4IXsdFOlHIm1v0K4Z8gt0t7w5KT%2BtHGaBdSysOi4s4QTo0XpABSQWsyJjyLvHTH0OrVZmfcxStsAOuK0pr6%2BjEpCih1WrmTuuB7Ltm7JkYXclBq7enSRBotW9jOCNdGgCD64jUQEsJEv7m7DJ1t4vksbGX4jm1ZhlJ3qfdmdQlMPne5jCAKdOeyjtdu1GowLvAS2RwyxEcE6L5VnNrKYf55sd2ZVWAVgfTs8OAxknbcm52zXhMu7nxmW5%2BzMHX5%2F2hALF4nvSYSQwxkrucEEqDxoxThHMTRrt7ngp7%2F6jwxtELCm5dtIQNFqjS8oUAXCk%2BC%2FzrmSSOiwsX%2FVifXFzzDv%2FAQrwqkmgccXYgV8qVxSdPp144vIj2Dq4j8xfbNlD0iC0yhBdYtN4qDttQVGbg0tAnfVs0PWw6UeKW%2BUfTCBU6t%2BTAewymaPt8RXf6UENISY6iyGnlTMJ%2B2lsEGOqUBghLIE1c8T%2BlkaGqMa5I%2BtNEC9lMfot6tvPgDyr%2FErLWAAWr9fqomB0xq%2BgdtOTPWTeyQmNDsMfN2dmleQ4hYAC67vhFTqgS%2ByCNML5zt4Ea4b6wCmV9irvijvnVsNtgusHmSGuPVnOEiHGBkHiHtgMSgG455y8t7yMArX497dFGTbms8bdsO0v%2B7MFBY%2B1jS2LlF4j0Z%2BunZOmzIKs0FnATzqsbH&X-Amz-Signature=1f7a98aad8298f9a7fcc03bee59068fb8bf0e7f6d0b399bbc727521eaa6fc07f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRM2UBP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLaC2w3GtjPBnB6oDC4XiwGCiFlTcrScHYBZKVrRmqYwIgCDAzi66A%2B%2BbulaCVkvvgjHlwbJ%2F8gmqCIW1URjabaO8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOoXIYL5x89LCv3J6ircA5YO6GPOMyR6XugunkQ4GoolVZ1u1GGbxCoNkqsyaT8fCk%2BHL6tC4MUQcW8Irdj%2F8mQYthWzRCFw%2FXEdoHJ6Fj%2BjAA%2FLsl5ZQNDhkBbXiK9RUP88WkJgID39uxsG%2BwUqO%2F3aNJ6iayJW9Z3v%2BNwNFtGxIHsl4W0dCs1NabRFO3zSNnL5T4IXsdFOlHIm1v0K4Z8gt0t7w5KT%2BtHGaBdSysOi4s4QTo0XpABSQWsyJjyLvHTH0OrVZmfcxStsAOuK0pr6%2BjEpCih1WrmTuuB7Ltm7JkYXclBq7enSRBotW9jOCNdGgCD64jUQEsJEv7m7DJ1t4vksbGX4jm1ZhlJ3qfdmdQlMPne5jCAKdOeyjtdu1GowLvAS2RwyxEcE6L5VnNrKYf55sd2ZVWAVgfTs8OAxknbcm52zXhMu7nxmW5%2BzMHX5%2F2hALF4nvSYSQwxkrucEEqDxoxThHMTRrt7ngp7%2F6jwxtELCm5dtIQNFqjS8oUAXCk%2BC%2FzrmSSOiwsX%2FVifXFzzDv%2FAQrwqkmgccXYgV8qVxSdPp144vIj2Dq4j8xfbNlD0iC0yhBdYtN4qDttQVGbg0tAnfVs0PWw6UeKW%2BUfTCBU6t%2BTAewymaPt8RXf6UENISY6iyGnlTMJ%2B2lsEGOqUBghLIE1c8T%2BlkaGqMa5I%2BtNEC9lMfot6tvPgDyr%2FErLWAAWr9fqomB0xq%2BgdtOTPWTeyQmNDsMfN2dmleQ4hYAC67vhFTqgS%2ByCNML5zt4Ea4b6wCmV9irvijvnVsNtgusHmSGuPVnOEiHGBkHiHtgMSgG455y8t7yMArX497dFGTbms8bdsO0v%2B7MFBY%2B1jS2LlF4j0Z%2BunZOmzIKs0FnATzqsbH&X-Amz-Signature=f9e950201cff235de752b66e630fd407de39d72cf0acd0375770be256a7b87a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRM2UBP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLaC2w3GtjPBnB6oDC4XiwGCiFlTcrScHYBZKVrRmqYwIgCDAzi66A%2B%2BbulaCVkvvgjHlwbJ%2F8gmqCIW1URjabaO8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOoXIYL5x89LCv3J6ircA5YO6GPOMyR6XugunkQ4GoolVZ1u1GGbxCoNkqsyaT8fCk%2BHL6tC4MUQcW8Irdj%2F8mQYthWzRCFw%2FXEdoHJ6Fj%2BjAA%2FLsl5ZQNDhkBbXiK9RUP88WkJgID39uxsG%2BwUqO%2F3aNJ6iayJW9Z3v%2BNwNFtGxIHsl4W0dCs1NabRFO3zSNnL5T4IXsdFOlHIm1v0K4Z8gt0t7w5KT%2BtHGaBdSysOi4s4QTo0XpABSQWsyJjyLvHTH0OrVZmfcxStsAOuK0pr6%2BjEpCih1WrmTuuB7Ltm7JkYXclBq7enSRBotW9jOCNdGgCD64jUQEsJEv7m7DJ1t4vksbGX4jm1ZhlJ3qfdmdQlMPne5jCAKdOeyjtdu1GowLvAS2RwyxEcE6L5VnNrKYf55sd2ZVWAVgfTs8OAxknbcm52zXhMu7nxmW5%2BzMHX5%2F2hALF4nvSYSQwxkrucEEqDxoxThHMTRrt7ngp7%2F6jwxtELCm5dtIQNFqjS8oUAXCk%2BC%2FzrmSSOiwsX%2FVifXFzzDv%2FAQrwqkmgccXYgV8qVxSdPp144vIj2Dq4j8xfbNlD0iC0yhBdYtN4qDttQVGbg0tAnfVs0PWw6UeKW%2BUfTCBU6t%2BTAewymaPt8RXf6UENISY6iyGnlTMJ%2B2lsEGOqUBghLIE1c8T%2BlkaGqMa5I%2BtNEC9lMfot6tvPgDyr%2FErLWAAWr9fqomB0xq%2BgdtOTPWTeyQmNDsMfN2dmleQ4hYAC67vhFTqgS%2ByCNML5zt4Ea4b6wCmV9irvijvnVsNtgusHmSGuPVnOEiHGBkHiHtgMSgG455y8t7yMArX497dFGTbms8bdsO0v%2B7MFBY%2B1jS2LlF4j0Z%2BunZOmzIKs0FnATzqsbH&X-Amz-Signature=74240c51bed1da7927a249ddd4ccc3a936ee9d486a3f03cf213bb48bbd480182&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRM2UBP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLaC2w3GtjPBnB6oDC4XiwGCiFlTcrScHYBZKVrRmqYwIgCDAzi66A%2B%2BbulaCVkvvgjHlwbJ%2F8gmqCIW1URjabaO8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOoXIYL5x89LCv3J6ircA5YO6GPOMyR6XugunkQ4GoolVZ1u1GGbxCoNkqsyaT8fCk%2BHL6tC4MUQcW8Irdj%2F8mQYthWzRCFw%2FXEdoHJ6Fj%2BjAA%2FLsl5ZQNDhkBbXiK9RUP88WkJgID39uxsG%2BwUqO%2F3aNJ6iayJW9Z3v%2BNwNFtGxIHsl4W0dCs1NabRFO3zSNnL5T4IXsdFOlHIm1v0K4Z8gt0t7w5KT%2BtHGaBdSysOi4s4QTo0XpABSQWsyJjyLvHTH0OrVZmfcxStsAOuK0pr6%2BjEpCih1WrmTuuB7Ltm7JkYXclBq7enSRBotW9jOCNdGgCD64jUQEsJEv7m7DJ1t4vksbGX4jm1ZhlJ3qfdmdQlMPne5jCAKdOeyjtdu1GowLvAS2RwyxEcE6L5VnNrKYf55sd2ZVWAVgfTs8OAxknbcm52zXhMu7nxmW5%2BzMHX5%2F2hALF4nvSYSQwxkrucEEqDxoxThHMTRrt7ngp7%2F6jwxtELCm5dtIQNFqjS8oUAXCk%2BC%2FzrmSSOiwsX%2FVifXFzzDv%2FAQrwqkmgccXYgV8qVxSdPp144vIj2Dq4j8xfbNlD0iC0yhBdYtN4qDttQVGbg0tAnfVs0PWw6UeKW%2BUfTCBU6t%2BTAewymaPt8RXf6UENISY6iyGnlTMJ%2B2lsEGOqUBghLIE1c8T%2BlkaGqMa5I%2BtNEC9lMfot6tvPgDyr%2FErLWAAWr9fqomB0xq%2BgdtOTPWTeyQmNDsMfN2dmleQ4hYAC67vhFTqgS%2ByCNML5zt4Ea4b6wCmV9irvijvnVsNtgusHmSGuPVnOEiHGBkHiHtgMSgG455y8t7yMArX497dFGTbms8bdsO0v%2B7MFBY%2B1jS2LlF4j0Z%2BunZOmzIKs0FnATzqsbH&X-Amz-Signature=a45623ca755e66a4c17502df19ce1279ba8eeac0faed899a43ed3513432ad9ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRM2UBP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLaC2w3GtjPBnB6oDC4XiwGCiFlTcrScHYBZKVrRmqYwIgCDAzi66A%2B%2BbulaCVkvvgjHlwbJ%2F8gmqCIW1URjabaO8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOoXIYL5x89LCv3J6ircA5YO6GPOMyR6XugunkQ4GoolVZ1u1GGbxCoNkqsyaT8fCk%2BHL6tC4MUQcW8Irdj%2F8mQYthWzRCFw%2FXEdoHJ6Fj%2BjAA%2FLsl5ZQNDhkBbXiK9RUP88WkJgID39uxsG%2BwUqO%2F3aNJ6iayJW9Z3v%2BNwNFtGxIHsl4W0dCs1NabRFO3zSNnL5T4IXsdFOlHIm1v0K4Z8gt0t7w5KT%2BtHGaBdSysOi4s4QTo0XpABSQWsyJjyLvHTH0OrVZmfcxStsAOuK0pr6%2BjEpCih1WrmTuuB7Ltm7JkYXclBq7enSRBotW9jOCNdGgCD64jUQEsJEv7m7DJ1t4vksbGX4jm1ZhlJ3qfdmdQlMPne5jCAKdOeyjtdu1GowLvAS2RwyxEcE6L5VnNrKYf55sd2ZVWAVgfTs8OAxknbcm52zXhMu7nxmW5%2BzMHX5%2F2hALF4nvSYSQwxkrucEEqDxoxThHMTRrt7ngp7%2F6jwxtELCm5dtIQNFqjS8oUAXCk%2BC%2FzrmSSOiwsX%2FVifXFzzDv%2FAQrwqkmgccXYgV8qVxSdPp144vIj2Dq4j8xfbNlD0iC0yhBdYtN4qDttQVGbg0tAnfVs0PWw6UeKW%2BUfTCBU6t%2BTAewymaPt8RXf6UENISY6iyGnlTMJ%2B2lsEGOqUBghLIE1c8T%2BlkaGqMa5I%2BtNEC9lMfot6tvPgDyr%2FErLWAAWr9fqomB0xq%2BgdtOTPWTeyQmNDsMfN2dmleQ4hYAC67vhFTqgS%2ByCNML5zt4Ea4b6wCmV9irvijvnVsNtgusHmSGuPVnOEiHGBkHiHtgMSgG455y8t7yMArX497dFGTbms8bdsO0v%2B7MFBY%2B1jS2LlF4j0Z%2BunZOmzIKs0FnATzqsbH&X-Amz-Signature=f03e00950b064f166fd1a3bd1cb98b666a84f287eb3b6508c9bf3347442acec6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRM2UBP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLaC2w3GtjPBnB6oDC4XiwGCiFlTcrScHYBZKVrRmqYwIgCDAzi66A%2B%2BbulaCVkvvgjHlwbJ%2F8gmqCIW1URjabaO8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOoXIYL5x89LCv3J6ircA5YO6GPOMyR6XugunkQ4GoolVZ1u1GGbxCoNkqsyaT8fCk%2BHL6tC4MUQcW8Irdj%2F8mQYthWzRCFw%2FXEdoHJ6Fj%2BjAA%2FLsl5ZQNDhkBbXiK9RUP88WkJgID39uxsG%2BwUqO%2F3aNJ6iayJW9Z3v%2BNwNFtGxIHsl4W0dCs1NabRFO3zSNnL5T4IXsdFOlHIm1v0K4Z8gt0t7w5KT%2BtHGaBdSysOi4s4QTo0XpABSQWsyJjyLvHTH0OrVZmfcxStsAOuK0pr6%2BjEpCih1WrmTuuB7Ltm7JkYXclBq7enSRBotW9jOCNdGgCD64jUQEsJEv7m7DJ1t4vksbGX4jm1ZhlJ3qfdmdQlMPne5jCAKdOeyjtdu1GowLvAS2RwyxEcE6L5VnNrKYf55sd2ZVWAVgfTs8OAxknbcm52zXhMu7nxmW5%2BzMHX5%2F2hALF4nvSYSQwxkrucEEqDxoxThHMTRrt7ngp7%2F6jwxtELCm5dtIQNFqjS8oUAXCk%2BC%2FzrmSSOiwsX%2FVifXFzzDv%2FAQrwqkmgccXYgV8qVxSdPp144vIj2Dq4j8xfbNlD0iC0yhBdYtN4qDttQVGbg0tAnfVs0PWw6UeKW%2BUfTCBU6t%2BTAewymaPt8RXf6UENISY6iyGnlTMJ%2B2lsEGOqUBghLIE1c8T%2BlkaGqMa5I%2BtNEC9lMfot6tvPgDyr%2FErLWAAWr9fqomB0xq%2BgdtOTPWTeyQmNDsMfN2dmleQ4hYAC67vhFTqgS%2ByCNML5zt4Ea4b6wCmV9irvijvnVsNtgusHmSGuPVnOEiHGBkHiHtgMSgG455y8t7yMArX497dFGTbms8bdsO0v%2B7MFBY%2B1jS2LlF4j0Z%2BunZOmzIKs0FnATzqsbH&X-Amz-Signature=c5fc9c7495712a39a476aec6d053f74699f2a2664db4d0bfb716e450d0d2df7c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

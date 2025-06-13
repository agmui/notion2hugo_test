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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCCSJLB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCxnGMUiqTzLkA03Zrdwmm6jbrsLvAqZuy54O6Oy0WgXQIge4D0kNU0Xj5b234zcs3R1Hv%2FD31GnHMT7Rz7Tpm4sQ8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOBrTeS1v53ZAu%2FCPCrcA2M8nIJxp3ShpB4q%2FKDXLH3%2Fx90bY5ceJuwG4hafW%2FAVpl6hIV%2BbcQhWNiSiEdtnfMKIR8U9eXHmnAawk5O%2B9aQv43zdkKL%2Fi6vY5u9oy%2FnAyTycIK58DFfBtKrjprKeRslO0BU6UuuOZE1wR1E%2Bavj4a0u2bQCK4jmM2yII%2BZu6sNn4%2B5McpV%2FOvro62ZNfWX8dAo%2FnJBfFWNeufZjDWn%2F6QUbwmnaAL9GwfM6%2FQVQFB4rWXYfR%2FrzR9wjvWC0cM0PMnRJwTiSZGARKADY8dH9%2Bz8upy5kjJk4FbibHcrKOEMzyJ0D2%2BR1y6O%2FS%2B3Q1wG%2BGcdkZvxBikQsWnpQaE80BxlGusFuSnUGLTXak2GZBETMXY9hPEvI3CzkBEly%2FayT4ZqCxJHqo3J%2BlaTgroSRlrUu21CdImSH6eP6s8uExcwedF0WQcrJgZZRvxzTfBgGOl610IhvphisuE08peVvPfqxErFkO%2BvC3bJO6RAUHqqCjnmEAAvq1bs5dr5taH4yj8ZVqzASuv3y4%2FZHBqI4ANsiiDyFcGKGWfzaUctwRaFvhddiEkejKtQmz%2FjPUZ871z9VBzGeDfboaZPJMDrpUs7hu6fgvevXoZMxUcmO7echc31JAxmPV5rVKMJapsMIGOqUB9MPZZ61u8t1A8F3ZGf6v8kP4s9pNN3SRLMK7GILd4tIMMv%2FZKWLJ%2F6UcjgKjCWZpHlbvvN9L0XXDfnh2XWAqXfCM8qeZrxAfmGiOJRbfF4j6xyFjoWaZq5zPBeR4P9Kd6A%2FaKp%2F6R8X3qpQ%2FSHsCc%2BrriqIe%2BHSGJ5PdQaZadtREqZrhNkWN7nG9zIu60kAplZQ0oSND%2FtpSMyqbEUiMGolCYiqj&X-Amz-Signature=a2bd121f5c078b28150b4847a658544d295b7c594fe0e4b0833e66857f5ab340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCCSJLB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCxnGMUiqTzLkA03Zrdwmm6jbrsLvAqZuy54O6Oy0WgXQIge4D0kNU0Xj5b234zcs3R1Hv%2FD31GnHMT7Rz7Tpm4sQ8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOBrTeS1v53ZAu%2FCPCrcA2M8nIJxp3ShpB4q%2FKDXLH3%2Fx90bY5ceJuwG4hafW%2FAVpl6hIV%2BbcQhWNiSiEdtnfMKIR8U9eXHmnAawk5O%2B9aQv43zdkKL%2Fi6vY5u9oy%2FnAyTycIK58DFfBtKrjprKeRslO0BU6UuuOZE1wR1E%2Bavj4a0u2bQCK4jmM2yII%2BZu6sNn4%2B5McpV%2FOvro62ZNfWX8dAo%2FnJBfFWNeufZjDWn%2F6QUbwmnaAL9GwfM6%2FQVQFB4rWXYfR%2FrzR9wjvWC0cM0PMnRJwTiSZGARKADY8dH9%2Bz8upy5kjJk4FbibHcrKOEMzyJ0D2%2BR1y6O%2FS%2B3Q1wG%2BGcdkZvxBikQsWnpQaE80BxlGusFuSnUGLTXak2GZBETMXY9hPEvI3CzkBEly%2FayT4ZqCxJHqo3J%2BlaTgroSRlrUu21CdImSH6eP6s8uExcwedF0WQcrJgZZRvxzTfBgGOl610IhvphisuE08peVvPfqxErFkO%2BvC3bJO6RAUHqqCjnmEAAvq1bs5dr5taH4yj8ZVqzASuv3y4%2FZHBqI4ANsiiDyFcGKGWfzaUctwRaFvhddiEkejKtQmz%2FjPUZ871z9VBzGeDfboaZPJMDrpUs7hu6fgvevXoZMxUcmO7echc31JAxmPV5rVKMJapsMIGOqUB9MPZZ61u8t1A8F3ZGf6v8kP4s9pNN3SRLMK7GILd4tIMMv%2FZKWLJ%2F6UcjgKjCWZpHlbvvN9L0XXDfnh2XWAqXfCM8qeZrxAfmGiOJRbfF4j6xyFjoWaZq5zPBeR4P9Kd6A%2FaKp%2F6R8X3qpQ%2FSHsCc%2BrriqIe%2BHSGJ5PdQaZadtREqZrhNkWN7nG9zIu60kAplZQ0oSND%2FtpSMyqbEUiMGolCYiqj&X-Amz-Signature=256982c9818ba0778bb6c1942134adaf977bacb7f788a36af04555ba22ee9ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCCSJLB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCxnGMUiqTzLkA03Zrdwmm6jbrsLvAqZuy54O6Oy0WgXQIge4D0kNU0Xj5b234zcs3R1Hv%2FD31GnHMT7Rz7Tpm4sQ8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOBrTeS1v53ZAu%2FCPCrcA2M8nIJxp3ShpB4q%2FKDXLH3%2Fx90bY5ceJuwG4hafW%2FAVpl6hIV%2BbcQhWNiSiEdtnfMKIR8U9eXHmnAawk5O%2B9aQv43zdkKL%2Fi6vY5u9oy%2FnAyTycIK58DFfBtKrjprKeRslO0BU6UuuOZE1wR1E%2Bavj4a0u2bQCK4jmM2yII%2BZu6sNn4%2B5McpV%2FOvro62ZNfWX8dAo%2FnJBfFWNeufZjDWn%2F6QUbwmnaAL9GwfM6%2FQVQFB4rWXYfR%2FrzR9wjvWC0cM0PMnRJwTiSZGARKADY8dH9%2Bz8upy5kjJk4FbibHcrKOEMzyJ0D2%2BR1y6O%2FS%2B3Q1wG%2BGcdkZvxBikQsWnpQaE80BxlGusFuSnUGLTXak2GZBETMXY9hPEvI3CzkBEly%2FayT4ZqCxJHqo3J%2BlaTgroSRlrUu21CdImSH6eP6s8uExcwedF0WQcrJgZZRvxzTfBgGOl610IhvphisuE08peVvPfqxErFkO%2BvC3bJO6RAUHqqCjnmEAAvq1bs5dr5taH4yj8ZVqzASuv3y4%2FZHBqI4ANsiiDyFcGKGWfzaUctwRaFvhddiEkejKtQmz%2FjPUZ871z9VBzGeDfboaZPJMDrpUs7hu6fgvevXoZMxUcmO7echc31JAxmPV5rVKMJapsMIGOqUB9MPZZ61u8t1A8F3ZGf6v8kP4s9pNN3SRLMK7GILd4tIMMv%2FZKWLJ%2F6UcjgKjCWZpHlbvvN9L0XXDfnh2XWAqXfCM8qeZrxAfmGiOJRbfF4j6xyFjoWaZq5zPBeR4P9Kd6A%2FaKp%2F6R8X3qpQ%2FSHsCc%2BrriqIe%2BHSGJ5PdQaZadtREqZrhNkWN7nG9zIu60kAplZQ0oSND%2FtpSMyqbEUiMGolCYiqj&X-Amz-Signature=63edef84c6a1f374d4d55870efce75afd1e7b6c673a33637b4c169f981167836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCCSJLB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCxnGMUiqTzLkA03Zrdwmm6jbrsLvAqZuy54O6Oy0WgXQIge4D0kNU0Xj5b234zcs3R1Hv%2FD31GnHMT7Rz7Tpm4sQ8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOBrTeS1v53ZAu%2FCPCrcA2M8nIJxp3ShpB4q%2FKDXLH3%2Fx90bY5ceJuwG4hafW%2FAVpl6hIV%2BbcQhWNiSiEdtnfMKIR8U9eXHmnAawk5O%2B9aQv43zdkKL%2Fi6vY5u9oy%2FnAyTycIK58DFfBtKrjprKeRslO0BU6UuuOZE1wR1E%2Bavj4a0u2bQCK4jmM2yII%2BZu6sNn4%2B5McpV%2FOvro62ZNfWX8dAo%2FnJBfFWNeufZjDWn%2F6QUbwmnaAL9GwfM6%2FQVQFB4rWXYfR%2FrzR9wjvWC0cM0PMnRJwTiSZGARKADY8dH9%2Bz8upy5kjJk4FbibHcrKOEMzyJ0D2%2BR1y6O%2FS%2B3Q1wG%2BGcdkZvxBikQsWnpQaE80BxlGusFuSnUGLTXak2GZBETMXY9hPEvI3CzkBEly%2FayT4ZqCxJHqo3J%2BlaTgroSRlrUu21CdImSH6eP6s8uExcwedF0WQcrJgZZRvxzTfBgGOl610IhvphisuE08peVvPfqxErFkO%2BvC3bJO6RAUHqqCjnmEAAvq1bs5dr5taH4yj8ZVqzASuv3y4%2FZHBqI4ANsiiDyFcGKGWfzaUctwRaFvhddiEkejKtQmz%2FjPUZ871z9VBzGeDfboaZPJMDrpUs7hu6fgvevXoZMxUcmO7echc31JAxmPV5rVKMJapsMIGOqUB9MPZZ61u8t1A8F3ZGf6v8kP4s9pNN3SRLMK7GILd4tIMMv%2FZKWLJ%2F6UcjgKjCWZpHlbvvN9L0XXDfnh2XWAqXfCM8qeZrxAfmGiOJRbfF4j6xyFjoWaZq5zPBeR4P9Kd6A%2FaKp%2F6R8X3qpQ%2FSHsCc%2BrriqIe%2BHSGJ5PdQaZadtREqZrhNkWN7nG9zIu60kAplZQ0oSND%2FtpSMyqbEUiMGolCYiqj&X-Amz-Signature=06047d9a7d4f5303d30e21b20daa248873dce3b0c21c6ce64aa85b533c5d45f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCCSJLB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCxnGMUiqTzLkA03Zrdwmm6jbrsLvAqZuy54O6Oy0WgXQIge4D0kNU0Xj5b234zcs3R1Hv%2FD31GnHMT7Rz7Tpm4sQ8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOBrTeS1v53ZAu%2FCPCrcA2M8nIJxp3ShpB4q%2FKDXLH3%2Fx90bY5ceJuwG4hafW%2FAVpl6hIV%2BbcQhWNiSiEdtnfMKIR8U9eXHmnAawk5O%2B9aQv43zdkKL%2Fi6vY5u9oy%2FnAyTycIK58DFfBtKrjprKeRslO0BU6UuuOZE1wR1E%2Bavj4a0u2bQCK4jmM2yII%2BZu6sNn4%2B5McpV%2FOvro62ZNfWX8dAo%2FnJBfFWNeufZjDWn%2F6QUbwmnaAL9GwfM6%2FQVQFB4rWXYfR%2FrzR9wjvWC0cM0PMnRJwTiSZGARKADY8dH9%2Bz8upy5kjJk4FbibHcrKOEMzyJ0D2%2BR1y6O%2FS%2B3Q1wG%2BGcdkZvxBikQsWnpQaE80BxlGusFuSnUGLTXak2GZBETMXY9hPEvI3CzkBEly%2FayT4ZqCxJHqo3J%2BlaTgroSRlrUu21CdImSH6eP6s8uExcwedF0WQcrJgZZRvxzTfBgGOl610IhvphisuE08peVvPfqxErFkO%2BvC3bJO6RAUHqqCjnmEAAvq1bs5dr5taH4yj8ZVqzASuv3y4%2FZHBqI4ANsiiDyFcGKGWfzaUctwRaFvhddiEkejKtQmz%2FjPUZ871z9VBzGeDfboaZPJMDrpUs7hu6fgvevXoZMxUcmO7echc31JAxmPV5rVKMJapsMIGOqUB9MPZZ61u8t1A8F3ZGf6v8kP4s9pNN3SRLMK7GILd4tIMMv%2FZKWLJ%2F6UcjgKjCWZpHlbvvN9L0XXDfnh2XWAqXfCM8qeZrxAfmGiOJRbfF4j6xyFjoWaZq5zPBeR4P9Kd6A%2FaKp%2F6R8X3qpQ%2FSHsCc%2BrriqIe%2BHSGJ5PdQaZadtREqZrhNkWN7nG9zIu60kAplZQ0oSND%2FtpSMyqbEUiMGolCYiqj&X-Amz-Signature=45d53935682dad3d2eb8da626b4fb6a34be3ffad4e0ffef9136092edd324b64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCCSJLB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCxnGMUiqTzLkA03Zrdwmm6jbrsLvAqZuy54O6Oy0WgXQIge4D0kNU0Xj5b234zcs3R1Hv%2FD31GnHMT7Rz7Tpm4sQ8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOBrTeS1v53ZAu%2FCPCrcA2M8nIJxp3ShpB4q%2FKDXLH3%2Fx90bY5ceJuwG4hafW%2FAVpl6hIV%2BbcQhWNiSiEdtnfMKIR8U9eXHmnAawk5O%2B9aQv43zdkKL%2Fi6vY5u9oy%2FnAyTycIK58DFfBtKrjprKeRslO0BU6UuuOZE1wR1E%2Bavj4a0u2bQCK4jmM2yII%2BZu6sNn4%2B5McpV%2FOvro62ZNfWX8dAo%2FnJBfFWNeufZjDWn%2F6QUbwmnaAL9GwfM6%2FQVQFB4rWXYfR%2FrzR9wjvWC0cM0PMnRJwTiSZGARKADY8dH9%2Bz8upy5kjJk4FbibHcrKOEMzyJ0D2%2BR1y6O%2FS%2B3Q1wG%2BGcdkZvxBikQsWnpQaE80BxlGusFuSnUGLTXak2GZBETMXY9hPEvI3CzkBEly%2FayT4ZqCxJHqo3J%2BlaTgroSRlrUu21CdImSH6eP6s8uExcwedF0WQcrJgZZRvxzTfBgGOl610IhvphisuE08peVvPfqxErFkO%2BvC3bJO6RAUHqqCjnmEAAvq1bs5dr5taH4yj8ZVqzASuv3y4%2FZHBqI4ANsiiDyFcGKGWfzaUctwRaFvhddiEkejKtQmz%2FjPUZ871z9VBzGeDfboaZPJMDrpUs7hu6fgvevXoZMxUcmO7echc31JAxmPV5rVKMJapsMIGOqUB9MPZZ61u8t1A8F3ZGf6v8kP4s9pNN3SRLMK7GILd4tIMMv%2FZKWLJ%2F6UcjgKjCWZpHlbvvN9L0XXDfnh2XWAqXfCM8qeZrxAfmGiOJRbfF4j6xyFjoWaZq5zPBeR4P9Kd6A%2FaKp%2F6R8X3qpQ%2FSHsCc%2BrriqIe%2BHSGJ5PdQaZadtREqZrhNkWN7nG9zIu60kAplZQ0oSND%2FtpSMyqbEUiMGolCYiqj&X-Amz-Signature=8a46fc6b105dfab9efdad5d5eb0885eb0ee8d1b2e7defff0d84c4e6209d1ae35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCCSJLB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCxnGMUiqTzLkA03Zrdwmm6jbrsLvAqZuy54O6Oy0WgXQIge4D0kNU0Xj5b234zcs3R1Hv%2FD31GnHMT7Rz7Tpm4sQ8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOBrTeS1v53ZAu%2FCPCrcA2M8nIJxp3ShpB4q%2FKDXLH3%2Fx90bY5ceJuwG4hafW%2FAVpl6hIV%2BbcQhWNiSiEdtnfMKIR8U9eXHmnAawk5O%2B9aQv43zdkKL%2Fi6vY5u9oy%2FnAyTycIK58DFfBtKrjprKeRslO0BU6UuuOZE1wR1E%2Bavj4a0u2bQCK4jmM2yII%2BZu6sNn4%2B5McpV%2FOvro62ZNfWX8dAo%2FnJBfFWNeufZjDWn%2F6QUbwmnaAL9GwfM6%2FQVQFB4rWXYfR%2FrzR9wjvWC0cM0PMnRJwTiSZGARKADY8dH9%2Bz8upy5kjJk4FbibHcrKOEMzyJ0D2%2BR1y6O%2FS%2B3Q1wG%2BGcdkZvxBikQsWnpQaE80BxlGusFuSnUGLTXak2GZBETMXY9hPEvI3CzkBEly%2FayT4ZqCxJHqo3J%2BlaTgroSRlrUu21CdImSH6eP6s8uExcwedF0WQcrJgZZRvxzTfBgGOl610IhvphisuE08peVvPfqxErFkO%2BvC3bJO6RAUHqqCjnmEAAvq1bs5dr5taH4yj8ZVqzASuv3y4%2FZHBqI4ANsiiDyFcGKGWfzaUctwRaFvhddiEkejKtQmz%2FjPUZ871z9VBzGeDfboaZPJMDrpUs7hu6fgvevXoZMxUcmO7echc31JAxmPV5rVKMJapsMIGOqUB9MPZZ61u8t1A8F3ZGf6v8kP4s9pNN3SRLMK7GILd4tIMMv%2FZKWLJ%2F6UcjgKjCWZpHlbvvN9L0XXDfnh2XWAqXfCM8qeZrxAfmGiOJRbfF4j6xyFjoWaZq5zPBeR4P9Kd6A%2FaKp%2F6R8X3qpQ%2FSHsCc%2BrriqIe%2BHSGJ5PdQaZadtREqZrhNkWN7nG9zIu60kAplZQ0oSND%2FtpSMyqbEUiMGolCYiqj&X-Amz-Signature=d73a1a6cff509d5fbb167fd47b90fba8063f76322acc1f35a5610578952d49a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

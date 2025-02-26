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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJDBC2O%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC7Zk4%2FrSY5XLX%2FpD3jfVKCT3twKEtfEHuqtJMlhG9LlgIhAMeXZL%2BnIJ0ynwxeBZ%2BwIgZDy8K9w5JjW%2F1%2FGPJZAIcVKv8DCGcQABoMNjM3NDIzMTgzODA1IgzmSFA2MQ2Kdr1Du78q3AMZCrXoU8xDZsc9ZEuzkl3GHjcMHAUlMR9UqwgLmsQ7%2FiOIX5hzHhnus0rUkPcs4lS6a5ZxPxW94GwyvvXCZyFeWX%2F443mvEUgq1PZcLJIDIN88gSCiMBjmq1Xbh0abWBzwL6uH63A0VQZvzIfK%2B%2F9dbo77FmC2NVaQrc6AcCfkgLtzY3s%2BFyIPFrcdgUZKUb3BV7yDL4wzjzxnemYIHynH5r7USZUE450L3WiAsD2YZwp%2Bt2OR%2BGVy1oeVjEHeRXSfo%2BjnZR8RZ1GGyGMypgzZyeXNyRV33xz9fLCeKRlHVKhJbqWm8AmU75RS0IfNcqjpS9H%2FNCOvXAFLQ1hqDB2Auo%2Byu5omoGsYjTzaEICNezVG6y5jdOfwFzR76dSvRrlpJd4sUKk3pujWtFjKAN%2FCHVmlEJXW3Hdsbzhai%2B5xnppR2jxdwjtZwOPQ9i9cbQ%2FQxOuHU56OdX86koucQMRMRjRDDgNqtbJGdxLewk1u1QCU4EMJf%2BnuI3IVlxtIX%2BW4RRnKzR8xAZ9AGfEgSKCPX4zqyIpC1O8xN5oiROMCpW8ZLyiWm9p3mj%2Fnm3rZC8s96yZX8wApN0j6LspWEJjGsAy5nDSjjf5XmNSyiEiLW9nKl9Ja%2BsHiPVvTAzDHn%2F69BjqkAeJ%2FbELiHSnTLZOYqG1rFuX8KtWtZzbR%2B%2Fov8%2F6OEZPqle3kiSbgSILMQ9%2BWqUOgUDmJuuzREenkfmU5XRhpdPDCDl9S5eruUZY9Ai%2B17FJoDday6KmE6Qh4SH2L1TvEC2C8RAHXkEFmVzUvGDrMih27Pv6CD8k7BILWZTA2HWDGW8A3H5O3HHsDdO1is%2BIBZeAYRjYYMo8cXbnwtv5vjJ%2FUqbdR&X-Amz-Signature=d55d7cae23719c9c9b3efbd2a5613bc2120486c13704ca865eae198a2e78101c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJDBC2O%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC7Zk4%2FrSY5XLX%2FpD3jfVKCT3twKEtfEHuqtJMlhG9LlgIhAMeXZL%2BnIJ0ynwxeBZ%2BwIgZDy8K9w5JjW%2F1%2FGPJZAIcVKv8DCGcQABoMNjM3NDIzMTgzODA1IgzmSFA2MQ2Kdr1Du78q3AMZCrXoU8xDZsc9ZEuzkl3GHjcMHAUlMR9UqwgLmsQ7%2FiOIX5hzHhnus0rUkPcs4lS6a5ZxPxW94GwyvvXCZyFeWX%2F443mvEUgq1PZcLJIDIN88gSCiMBjmq1Xbh0abWBzwL6uH63A0VQZvzIfK%2B%2F9dbo77FmC2NVaQrc6AcCfkgLtzY3s%2BFyIPFrcdgUZKUb3BV7yDL4wzjzxnemYIHynH5r7USZUE450L3WiAsD2YZwp%2Bt2OR%2BGVy1oeVjEHeRXSfo%2BjnZR8RZ1GGyGMypgzZyeXNyRV33xz9fLCeKRlHVKhJbqWm8AmU75RS0IfNcqjpS9H%2FNCOvXAFLQ1hqDB2Auo%2Byu5omoGsYjTzaEICNezVG6y5jdOfwFzR76dSvRrlpJd4sUKk3pujWtFjKAN%2FCHVmlEJXW3Hdsbzhai%2B5xnppR2jxdwjtZwOPQ9i9cbQ%2FQxOuHU56OdX86koucQMRMRjRDDgNqtbJGdxLewk1u1QCU4EMJf%2BnuI3IVlxtIX%2BW4RRnKzR8xAZ9AGfEgSKCPX4zqyIpC1O8xN5oiROMCpW8ZLyiWm9p3mj%2Fnm3rZC8s96yZX8wApN0j6LspWEJjGsAy5nDSjjf5XmNSyiEiLW9nKl9Ja%2BsHiPVvTAzDHn%2F69BjqkAeJ%2FbELiHSnTLZOYqG1rFuX8KtWtZzbR%2B%2Fov8%2F6OEZPqle3kiSbgSILMQ9%2BWqUOgUDmJuuzREenkfmU5XRhpdPDCDl9S5eruUZY9Ai%2B17FJoDday6KmE6Qh4SH2L1TvEC2C8RAHXkEFmVzUvGDrMih27Pv6CD8k7BILWZTA2HWDGW8A3H5O3HHsDdO1is%2BIBZeAYRjYYMo8cXbnwtv5vjJ%2FUqbdR&X-Amz-Signature=0d776338a0ec9c097b9168eb5221bb9a8bbefdab8b1de502a90a03a79501aef7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJDBC2O%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC7Zk4%2FrSY5XLX%2FpD3jfVKCT3twKEtfEHuqtJMlhG9LlgIhAMeXZL%2BnIJ0ynwxeBZ%2BwIgZDy8K9w5JjW%2F1%2FGPJZAIcVKv8DCGcQABoMNjM3NDIzMTgzODA1IgzmSFA2MQ2Kdr1Du78q3AMZCrXoU8xDZsc9ZEuzkl3GHjcMHAUlMR9UqwgLmsQ7%2FiOIX5hzHhnus0rUkPcs4lS6a5ZxPxW94GwyvvXCZyFeWX%2F443mvEUgq1PZcLJIDIN88gSCiMBjmq1Xbh0abWBzwL6uH63A0VQZvzIfK%2B%2F9dbo77FmC2NVaQrc6AcCfkgLtzY3s%2BFyIPFrcdgUZKUb3BV7yDL4wzjzxnemYIHynH5r7USZUE450L3WiAsD2YZwp%2Bt2OR%2BGVy1oeVjEHeRXSfo%2BjnZR8RZ1GGyGMypgzZyeXNyRV33xz9fLCeKRlHVKhJbqWm8AmU75RS0IfNcqjpS9H%2FNCOvXAFLQ1hqDB2Auo%2Byu5omoGsYjTzaEICNezVG6y5jdOfwFzR76dSvRrlpJd4sUKk3pujWtFjKAN%2FCHVmlEJXW3Hdsbzhai%2B5xnppR2jxdwjtZwOPQ9i9cbQ%2FQxOuHU56OdX86koucQMRMRjRDDgNqtbJGdxLewk1u1QCU4EMJf%2BnuI3IVlxtIX%2BW4RRnKzR8xAZ9AGfEgSKCPX4zqyIpC1O8xN5oiROMCpW8ZLyiWm9p3mj%2Fnm3rZC8s96yZX8wApN0j6LspWEJjGsAy5nDSjjf5XmNSyiEiLW9nKl9Ja%2BsHiPVvTAzDHn%2F69BjqkAeJ%2FbELiHSnTLZOYqG1rFuX8KtWtZzbR%2B%2Fov8%2F6OEZPqle3kiSbgSILMQ9%2BWqUOgUDmJuuzREenkfmU5XRhpdPDCDl9S5eruUZY9Ai%2B17FJoDday6KmE6Qh4SH2L1TvEC2C8RAHXkEFmVzUvGDrMih27Pv6CD8k7BILWZTA2HWDGW8A3H5O3HHsDdO1is%2BIBZeAYRjYYMo8cXbnwtv5vjJ%2FUqbdR&X-Amz-Signature=e6cb49013bdd501cf6e87a30be760ea450092b4a56b2a9bc273d003ea64b181e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJDBC2O%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC7Zk4%2FrSY5XLX%2FpD3jfVKCT3twKEtfEHuqtJMlhG9LlgIhAMeXZL%2BnIJ0ynwxeBZ%2BwIgZDy8K9w5JjW%2F1%2FGPJZAIcVKv8DCGcQABoMNjM3NDIzMTgzODA1IgzmSFA2MQ2Kdr1Du78q3AMZCrXoU8xDZsc9ZEuzkl3GHjcMHAUlMR9UqwgLmsQ7%2FiOIX5hzHhnus0rUkPcs4lS6a5ZxPxW94GwyvvXCZyFeWX%2F443mvEUgq1PZcLJIDIN88gSCiMBjmq1Xbh0abWBzwL6uH63A0VQZvzIfK%2B%2F9dbo77FmC2NVaQrc6AcCfkgLtzY3s%2BFyIPFrcdgUZKUb3BV7yDL4wzjzxnemYIHynH5r7USZUE450L3WiAsD2YZwp%2Bt2OR%2BGVy1oeVjEHeRXSfo%2BjnZR8RZ1GGyGMypgzZyeXNyRV33xz9fLCeKRlHVKhJbqWm8AmU75RS0IfNcqjpS9H%2FNCOvXAFLQ1hqDB2Auo%2Byu5omoGsYjTzaEICNezVG6y5jdOfwFzR76dSvRrlpJd4sUKk3pujWtFjKAN%2FCHVmlEJXW3Hdsbzhai%2B5xnppR2jxdwjtZwOPQ9i9cbQ%2FQxOuHU56OdX86koucQMRMRjRDDgNqtbJGdxLewk1u1QCU4EMJf%2BnuI3IVlxtIX%2BW4RRnKzR8xAZ9AGfEgSKCPX4zqyIpC1O8xN5oiROMCpW8ZLyiWm9p3mj%2Fnm3rZC8s96yZX8wApN0j6LspWEJjGsAy5nDSjjf5XmNSyiEiLW9nKl9Ja%2BsHiPVvTAzDHn%2F69BjqkAeJ%2FbELiHSnTLZOYqG1rFuX8KtWtZzbR%2B%2Fov8%2F6OEZPqle3kiSbgSILMQ9%2BWqUOgUDmJuuzREenkfmU5XRhpdPDCDl9S5eruUZY9Ai%2B17FJoDday6KmE6Qh4SH2L1TvEC2C8RAHXkEFmVzUvGDrMih27Pv6CD8k7BILWZTA2HWDGW8A3H5O3HHsDdO1is%2BIBZeAYRjYYMo8cXbnwtv5vjJ%2FUqbdR&X-Amz-Signature=863fd5b216fec85aa7b40ca495a713d51ec39c1118cf50965f46e15f31ce9cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJDBC2O%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC7Zk4%2FrSY5XLX%2FpD3jfVKCT3twKEtfEHuqtJMlhG9LlgIhAMeXZL%2BnIJ0ynwxeBZ%2BwIgZDy8K9w5JjW%2F1%2FGPJZAIcVKv8DCGcQABoMNjM3NDIzMTgzODA1IgzmSFA2MQ2Kdr1Du78q3AMZCrXoU8xDZsc9ZEuzkl3GHjcMHAUlMR9UqwgLmsQ7%2FiOIX5hzHhnus0rUkPcs4lS6a5ZxPxW94GwyvvXCZyFeWX%2F443mvEUgq1PZcLJIDIN88gSCiMBjmq1Xbh0abWBzwL6uH63A0VQZvzIfK%2B%2F9dbo77FmC2NVaQrc6AcCfkgLtzY3s%2BFyIPFrcdgUZKUb3BV7yDL4wzjzxnemYIHynH5r7USZUE450L3WiAsD2YZwp%2Bt2OR%2BGVy1oeVjEHeRXSfo%2BjnZR8RZ1GGyGMypgzZyeXNyRV33xz9fLCeKRlHVKhJbqWm8AmU75RS0IfNcqjpS9H%2FNCOvXAFLQ1hqDB2Auo%2Byu5omoGsYjTzaEICNezVG6y5jdOfwFzR76dSvRrlpJd4sUKk3pujWtFjKAN%2FCHVmlEJXW3Hdsbzhai%2B5xnppR2jxdwjtZwOPQ9i9cbQ%2FQxOuHU56OdX86koucQMRMRjRDDgNqtbJGdxLewk1u1QCU4EMJf%2BnuI3IVlxtIX%2BW4RRnKzR8xAZ9AGfEgSKCPX4zqyIpC1O8xN5oiROMCpW8ZLyiWm9p3mj%2Fnm3rZC8s96yZX8wApN0j6LspWEJjGsAy5nDSjjf5XmNSyiEiLW9nKl9Ja%2BsHiPVvTAzDHn%2F69BjqkAeJ%2FbELiHSnTLZOYqG1rFuX8KtWtZzbR%2B%2Fov8%2F6OEZPqle3kiSbgSILMQ9%2BWqUOgUDmJuuzREenkfmU5XRhpdPDCDl9S5eruUZY9Ai%2B17FJoDday6KmE6Qh4SH2L1TvEC2C8RAHXkEFmVzUvGDrMih27Pv6CD8k7BILWZTA2HWDGW8A3H5O3HHsDdO1is%2BIBZeAYRjYYMo8cXbnwtv5vjJ%2FUqbdR&X-Amz-Signature=425ce4ae3e939164f3022a980520562e481f3121b805d043e558a6c073773b09&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJDBC2O%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC7Zk4%2FrSY5XLX%2FpD3jfVKCT3twKEtfEHuqtJMlhG9LlgIhAMeXZL%2BnIJ0ynwxeBZ%2BwIgZDy8K9w5JjW%2F1%2FGPJZAIcVKv8DCGcQABoMNjM3NDIzMTgzODA1IgzmSFA2MQ2Kdr1Du78q3AMZCrXoU8xDZsc9ZEuzkl3GHjcMHAUlMR9UqwgLmsQ7%2FiOIX5hzHhnus0rUkPcs4lS6a5ZxPxW94GwyvvXCZyFeWX%2F443mvEUgq1PZcLJIDIN88gSCiMBjmq1Xbh0abWBzwL6uH63A0VQZvzIfK%2B%2F9dbo77FmC2NVaQrc6AcCfkgLtzY3s%2BFyIPFrcdgUZKUb3BV7yDL4wzjzxnemYIHynH5r7USZUE450L3WiAsD2YZwp%2Bt2OR%2BGVy1oeVjEHeRXSfo%2BjnZR8RZ1GGyGMypgzZyeXNyRV33xz9fLCeKRlHVKhJbqWm8AmU75RS0IfNcqjpS9H%2FNCOvXAFLQ1hqDB2Auo%2Byu5omoGsYjTzaEICNezVG6y5jdOfwFzR76dSvRrlpJd4sUKk3pujWtFjKAN%2FCHVmlEJXW3Hdsbzhai%2B5xnppR2jxdwjtZwOPQ9i9cbQ%2FQxOuHU56OdX86koucQMRMRjRDDgNqtbJGdxLewk1u1QCU4EMJf%2BnuI3IVlxtIX%2BW4RRnKzR8xAZ9AGfEgSKCPX4zqyIpC1O8xN5oiROMCpW8ZLyiWm9p3mj%2Fnm3rZC8s96yZX8wApN0j6LspWEJjGsAy5nDSjjf5XmNSyiEiLW9nKl9Ja%2BsHiPVvTAzDHn%2F69BjqkAeJ%2FbELiHSnTLZOYqG1rFuX8KtWtZzbR%2B%2Fov8%2F6OEZPqle3kiSbgSILMQ9%2BWqUOgUDmJuuzREenkfmU5XRhpdPDCDl9S5eruUZY9Ai%2B17FJoDday6KmE6Qh4SH2L1TvEC2C8RAHXkEFmVzUvGDrMih27Pv6CD8k7BILWZTA2HWDGW8A3H5O3HHsDdO1is%2BIBZeAYRjYYMo8cXbnwtv5vjJ%2FUqbdR&X-Amz-Signature=9d9910350597bcea0ca8c04c5f69880b5213d9f412065bb583b2283f7bac3227&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJDBC2O%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC7Zk4%2FrSY5XLX%2FpD3jfVKCT3twKEtfEHuqtJMlhG9LlgIhAMeXZL%2BnIJ0ynwxeBZ%2BwIgZDy8K9w5JjW%2F1%2FGPJZAIcVKv8DCGcQABoMNjM3NDIzMTgzODA1IgzmSFA2MQ2Kdr1Du78q3AMZCrXoU8xDZsc9ZEuzkl3GHjcMHAUlMR9UqwgLmsQ7%2FiOIX5hzHhnus0rUkPcs4lS6a5ZxPxW94GwyvvXCZyFeWX%2F443mvEUgq1PZcLJIDIN88gSCiMBjmq1Xbh0abWBzwL6uH63A0VQZvzIfK%2B%2F9dbo77FmC2NVaQrc6AcCfkgLtzY3s%2BFyIPFrcdgUZKUb3BV7yDL4wzjzxnemYIHynH5r7USZUE450L3WiAsD2YZwp%2Bt2OR%2BGVy1oeVjEHeRXSfo%2BjnZR8RZ1GGyGMypgzZyeXNyRV33xz9fLCeKRlHVKhJbqWm8AmU75RS0IfNcqjpS9H%2FNCOvXAFLQ1hqDB2Auo%2Byu5omoGsYjTzaEICNezVG6y5jdOfwFzR76dSvRrlpJd4sUKk3pujWtFjKAN%2FCHVmlEJXW3Hdsbzhai%2B5xnppR2jxdwjtZwOPQ9i9cbQ%2FQxOuHU56OdX86koucQMRMRjRDDgNqtbJGdxLewk1u1QCU4EMJf%2BnuI3IVlxtIX%2BW4RRnKzR8xAZ9AGfEgSKCPX4zqyIpC1O8xN5oiROMCpW8ZLyiWm9p3mj%2Fnm3rZC8s96yZX8wApN0j6LspWEJjGsAy5nDSjjf5XmNSyiEiLW9nKl9Ja%2BsHiPVvTAzDHn%2F69BjqkAeJ%2FbELiHSnTLZOYqG1rFuX8KtWtZzbR%2B%2Fov8%2F6OEZPqle3kiSbgSILMQ9%2BWqUOgUDmJuuzREenkfmU5XRhpdPDCDl9S5eruUZY9Ai%2B17FJoDday6KmE6Qh4SH2L1TvEC2C8RAHXkEFmVzUvGDrMih27Pv6CD8k7BILWZTA2HWDGW8A3H5O3HHsDdO1is%2BIBZeAYRjYYMo8cXbnwtv5vjJ%2FUqbdR&X-Amz-Signature=edbd3db2f9f8d208cba28cf57ec06b49e98c3d9fa48db54b9ae779f3fd4d9d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

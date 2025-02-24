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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQCZFRS7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD49%2BJevS5frkEmKQJUS78Ka%2Fqf%2FjlQP8yRH5fRMI3cSgIhAMW7S%2BMcxIv%2B1x7R5qxcp1L7YDZZpvc1jRZcww%2FQ5bcJKv8DCCEQABoMNjM3NDIzMTgzODA1IgwlzoMHbBjiTgzbfCsq3ANiGOWJOyejRcaSiy%2BUfEQVlQToiV3zTb9ONeS6ZZcpZNkB6fav%2B3es7sHO%2Bcy25oz6xXKSO82H7CJ2YOAHhjUp2qUWWr9RWVxIApqKCaY5VOGQ0%2Bgb7EVm6Ac4tB57BmRkZXpBUxb0xhwAiF6Oso7hduKmAn%2FVhm1jRk6njYnvtcg8Gp0ucX5uy54lXDmScAFd8cF%2Bcamg5hlBst3FmGODsmtG0ctu3%2BZ1%2BC6Ds7MriFEcB%2Fjzgj4pYDUXcnnJiuWcv%2FLSYdDhtbhm3nVIKHMoFjP5cCtGindbPa1eEMCtwYNiasNtIlCvnhOC%2Fzq%2FWkaCR2xv8c1PsuqKwg1PjH1s7GdH9dV0O%2FNY3phyXFdE4BxlNqIkEv9GBiXtv6uTiJZjcb2JmW6hDZ3RVoyI64%2Fwvbp8q8UXlGUT17GAoy17cZyI7L0%2F%2FgcGXKu7CQWj2qO%2BI0E0ycy0uIMho6xsZPCnhIrZetqXUOr%2BeL4EjKrCG8YIgwHzARqNa0orSCThYHIQrCh2FmPVpl%2FROXqENoLCchIzmbspr0nw0RtXWvukysIHIJAd8COX67Ayw9YEvcCV%2Fu45Ry5Nll3pair6BG2NSKxtqMt%2F7JV%2B5ZjLTuSbuOoX96QytOBUJea2FzC68O69BjqkASJ%2FhfeXliPbcYE2bRa0zX85YynEu%2BtlkVo7%2Ft0fDuT6winT5%2FrM1IKNbrwV%2F1pUIv%2Bzbebte1cl7T2ttZOeJ9%2BTZTe4UJHuBp%2FmAD%2FUkRBSRLoFm0%2BfFqDz%2B9xu4FgMFUXWnO1w4fK%2Fxlh6Gseh2Tw%2BDDVAX3bHRA%2FADbhs5JOb3i0hHaDs%2BpNrB924CK4RQsYWs13lC2HZwGKkYmP9iNv%2Bn8Yo&X-Amz-Signature=fab2c9ba4cde2c25572dc3526d45f8f0efa5f9c941244514589037b6f7280d63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQCZFRS7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD49%2BJevS5frkEmKQJUS78Ka%2Fqf%2FjlQP8yRH5fRMI3cSgIhAMW7S%2BMcxIv%2B1x7R5qxcp1L7YDZZpvc1jRZcww%2FQ5bcJKv8DCCEQABoMNjM3NDIzMTgzODA1IgwlzoMHbBjiTgzbfCsq3ANiGOWJOyejRcaSiy%2BUfEQVlQToiV3zTb9ONeS6ZZcpZNkB6fav%2B3es7sHO%2Bcy25oz6xXKSO82H7CJ2YOAHhjUp2qUWWr9RWVxIApqKCaY5VOGQ0%2Bgb7EVm6Ac4tB57BmRkZXpBUxb0xhwAiF6Oso7hduKmAn%2FVhm1jRk6njYnvtcg8Gp0ucX5uy54lXDmScAFd8cF%2Bcamg5hlBst3FmGODsmtG0ctu3%2BZ1%2BC6Ds7MriFEcB%2Fjzgj4pYDUXcnnJiuWcv%2FLSYdDhtbhm3nVIKHMoFjP5cCtGindbPa1eEMCtwYNiasNtIlCvnhOC%2Fzq%2FWkaCR2xv8c1PsuqKwg1PjH1s7GdH9dV0O%2FNY3phyXFdE4BxlNqIkEv9GBiXtv6uTiJZjcb2JmW6hDZ3RVoyI64%2Fwvbp8q8UXlGUT17GAoy17cZyI7L0%2F%2FgcGXKu7CQWj2qO%2BI0E0ycy0uIMho6xsZPCnhIrZetqXUOr%2BeL4EjKrCG8YIgwHzARqNa0orSCThYHIQrCh2FmPVpl%2FROXqENoLCchIzmbspr0nw0RtXWvukysIHIJAd8COX67Ayw9YEvcCV%2Fu45Ry5Nll3pair6BG2NSKxtqMt%2F7JV%2B5ZjLTuSbuOoX96QytOBUJea2FzC68O69BjqkASJ%2FhfeXliPbcYE2bRa0zX85YynEu%2BtlkVo7%2Ft0fDuT6winT5%2FrM1IKNbrwV%2F1pUIv%2Bzbebte1cl7T2ttZOeJ9%2BTZTe4UJHuBp%2FmAD%2FUkRBSRLoFm0%2BfFqDz%2B9xu4FgMFUXWnO1w4fK%2Fxlh6Gseh2Tw%2BDDVAX3bHRA%2FADbhs5JOb3i0hHaDs%2BpNrB924CK4RQsYWs13lC2HZwGKkYmP9iNv%2Bn8Yo&X-Amz-Signature=a6b97f7e770b8042accf77691c9bb1aad393755c1da56861839700e9149fb459&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQCZFRS7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD49%2BJevS5frkEmKQJUS78Ka%2Fqf%2FjlQP8yRH5fRMI3cSgIhAMW7S%2BMcxIv%2B1x7R5qxcp1L7YDZZpvc1jRZcww%2FQ5bcJKv8DCCEQABoMNjM3NDIzMTgzODA1IgwlzoMHbBjiTgzbfCsq3ANiGOWJOyejRcaSiy%2BUfEQVlQToiV3zTb9ONeS6ZZcpZNkB6fav%2B3es7sHO%2Bcy25oz6xXKSO82H7CJ2YOAHhjUp2qUWWr9RWVxIApqKCaY5VOGQ0%2Bgb7EVm6Ac4tB57BmRkZXpBUxb0xhwAiF6Oso7hduKmAn%2FVhm1jRk6njYnvtcg8Gp0ucX5uy54lXDmScAFd8cF%2Bcamg5hlBst3FmGODsmtG0ctu3%2BZ1%2BC6Ds7MriFEcB%2Fjzgj4pYDUXcnnJiuWcv%2FLSYdDhtbhm3nVIKHMoFjP5cCtGindbPa1eEMCtwYNiasNtIlCvnhOC%2Fzq%2FWkaCR2xv8c1PsuqKwg1PjH1s7GdH9dV0O%2FNY3phyXFdE4BxlNqIkEv9GBiXtv6uTiJZjcb2JmW6hDZ3RVoyI64%2Fwvbp8q8UXlGUT17GAoy17cZyI7L0%2F%2FgcGXKu7CQWj2qO%2BI0E0ycy0uIMho6xsZPCnhIrZetqXUOr%2BeL4EjKrCG8YIgwHzARqNa0orSCThYHIQrCh2FmPVpl%2FROXqENoLCchIzmbspr0nw0RtXWvukysIHIJAd8COX67Ayw9YEvcCV%2Fu45Ry5Nll3pair6BG2NSKxtqMt%2F7JV%2B5ZjLTuSbuOoX96QytOBUJea2FzC68O69BjqkASJ%2FhfeXliPbcYE2bRa0zX85YynEu%2BtlkVo7%2Ft0fDuT6winT5%2FrM1IKNbrwV%2F1pUIv%2Bzbebte1cl7T2ttZOeJ9%2BTZTe4UJHuBp%2FmAD%2FUkRBSRLoFm0%2BfFqDz%2B9xu4FgMFUXWnO1w4fK%2Fxlh6Gseh2Tw%2BDDVAX3bHRA%2FADbhs5JOb3i0hHaDs%2BpNrB924CK4RQsYWs13lC2HZwGKkYmP9iNv%2Bn8Yo&X-Amz-Signature=1d577eef34d21fe5b70da8ce05192d056172a6627265565174f02e78c942b7df&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQCZFRS7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD49%2BJevS5frkEmKQJUS78Ka%2Fqf%2FjlQP8yRH5fRMI3cSgIhAMW7S%2BMcxIv%2B1x7R5qxcp1L7YDZZpvc1jRZcww%2FQ5bcJKv8DCCEQABoMNjM3NDIzMTgzODA1IgwlzoMHbBjiTgzbfCsq3ANiGOWJOyejRcaSiy%2BUfEQVlQToiV3zTb9ONeS6ZZcpZNkB6fav%2B3es7sHO%2Bcy25oz6xXKSO82H7CJ2YOAHhjUp2qUWWr9RWVxIApqKCaY5VOGQ0%2Bgb7EVm6Ac4tB57BmRkZXpBUxb0xhwAiF6Oso7hduKmAn%2FVhm1jRk6njYnvtcg8Gp0ucX5uy54lXDmScAFd8cF%2Bcamg5hlBst3FmGODsmtG0ctu3%2BZ1%2BC6Ds7MriFEcB%2Fjzgj4pYDUXcnnJiuWcv%2FLSYdDhtbhm3nVIKHMoFjP5cCtGindbPa1eEMCtwYNiasNtIlCvnhOC%2Fzq%2FWkaCR2xv8c1PsuqKwg1PjH1s7GdH9dV0O%2FNY3phyXFdE4BxlNqIkEv9GBiXtv6uTiJZjcb2JmW6hDZ3RVoyI64%2Fwvbp8q8UXlGUT17GAoy17cZyI7L0%2F%2FgcGXKu7CQWj2qO%2BI0E0ycy0uIMho6xsZPCnhIrZetqXUOr%2BeL4EjKrCG8YIgwHzARqNa0orSCThYHIQrCh2FmPVpl%2FROXqENoLCchIzmbspr0nw0RtXWvukysIHIJAd8COX67Ayw9YEvcCV%2Fu45Ry5Nll3pair6BG2NSKxtqMt%2F7JV%2B5ZjLTuSbuOoX96QytOBUJea2FzC68O69BjqkASJ%2FhfeXliPbcYE2bRa0zX85YynEu%2BtlkVo7%2Ft0fDuT6winT5%2FrM1IKNbrwV%2F1pUIv%2Bzbebte1cl7T2ttZOeJ9%2BTZTe4UJHuBp%2FmAD%2FUkRBSRLoFm0%2BfFqDz%2B9xu4FgMFUXWnO1w4fK%2Fxlh6Gseh2Tw%2BDDVAX3bHRA%2FADbhs5JOb3i0hHaDs%2BpNrB924CK4RQsYWs13lC2HZwGKkYmP9iNv%2Bn8Yo&X-Amz-Signature=81218f8a11f3d9539527cfc3ba0b4b2971063fb58d47cf86182e60b8a5986050&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQCZFRS7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD49%2BJevS5frkEmKQJUS78Ka%2Fqf%2FjlQP8yRH5fRMI3cSgIhAMW7S%2BMcxIv%2B1x7R5qxcp1L7YDZZpvc1jRZcww%2FQ5bcJKv8DCCEQABoMNjM3NDIzMTgzODA1IgwlzoMHbBjiTgzbfCsq3ANiGOWJOyejRcaSiy%2BUfEQVlQToiV3zTb9ONeS6ZZcpZNkB6fav%2B3es7sHO%2Bcy25oz6xXKSO82H7CJ2YOAHhjUp2qUWWr9RWVxIApqKCaY5VOGQ0%2Bgb7EVm6Ac4tB57BmRkZXpBUxb0xhwAiF6Oso7hduKmAn%2FVhm1jRk6njYnvtcg8Gp0ucX5uy54lXDmScAFd8cF%2Bcamg5hlBst3FmGODsmtG0ctu3%2BZ1%2BC6Ds7MriFEcB%2Fjzgj4pYDUXcnnJiuWcv%2FLSYdDhtbhm3nVIKHMoFjP5cCtGindbPa1eEMCtwYNiasNtIlCvnhOC%2Fzq%2FWkaCR2xv8c1PsuqKwg1PjH1s7GdH9dV0O%2FNY3phyXFdE4BxlNqIkEv9GBiXtv6uTiJZjcb2JmW6hDZ3RVoyI64%2Fwvbp8q8UXlGUT17GAoy17cZyI7L0%2F%2FgcGXKu7CQWj2qO%2BI0E0ycy0uIMho6xsZPCnhIrZetqXUOr%2BeL4EjKrCG8YIgwHzARqNa0orSCThYHIQrCh2FmPVpl%2FROXqENoLCchIzmbspr0nw0RtXWvukysIHIJAd8COX67Ayw9YEvcCV%2Fu45Ry5Nll3pair6BG2NSKxtqMt%2F7JV%2B5ZjLTuSbuOoX96QytOBUJea2FzC68O69BjqkASJ%2FhfeXliPbcYE2bRa0zX85YynEu%2BtlkVo7%2Ft0fDuT6winT5%2FrM1IKNbrwV%2F1pUIv%2Bzbebte1cl7T2ttZOeJ9%2BTZTe4UJHuBp%2FmAD%2FUkRBSRLoFm0%2BfFqDz%2B9xu4FgMFUXWnO1w4fK%2Fxlh6Gseh2Tw%2BDDVAX3bHRA%2FADbhs5JOb3i0hHaDs%2BpNrB924CK4RQsYWs13lC2HZwGKkYmP9iNv%2Bn8Yo&X-Amz-Signature=815ddae277571db6bce281a64c86579f761bcd70b4ba76b778f82dc75f8dc256&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQCZFRS7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD49%2BJevS5frkEmKQJUS78Ka%2Fqf%2FjlQP8yRH5fRMI3cSgIhAMW7S%2BMcxIv%2B1x7R5qxcp1L7YDZZpvc1jRZcww%2FQ5bcJKv8DCCEQABoMNjM3NDIzMTgzODA1IgwlzoMHbBjiTgzbfCsq3ANiGOWJOyejRcaSiy%2BUfEQVlQToiV3zTb9ONeS6ZZcpZNkB6fav%2B3es7sHO%2Bcy25oz6xXKSO82H7CJ2YOAHhjUp2qUWWr9RWVxIApqKCaY5VOGQ0%2Bgb7EVm6Ac4tB57BmRkZXpBUxb0xhwAiF6Oso7hduKmAn%2FVhm1jRk6njYnvtcg8Gp0ucX5uy54lXDmScAFd8cF%2Bcamg5hlBst3FmGODsmtG0ctu3%2BZ1%2BC6Ds7MriFEcB%2Fjzgj4pYDUXcnnJiuWcv%2FLSYdDhtbhm3nVIKHMoFjP5cCtGindbPa1eEMCtwYNiasNtIlCvnhOC%2Fzq%2FWkaCR2xv8c1PsuqKwg1PjH1s7GdH9dV0O%2FNY3phyXFdE4BxlNqIkEv9GBiXtv6uTiJZjcb2JmW6hDZ3RVoyI64%2Fwvbp8q8UXlGUT17GAoy17cZyI7L0%2F%2FgcGXKu7CQWj2qO%2BI0E0ycy0uIMho6xsZPCnhIrZetqXUOr%2BeL4EjKrCG8YIgwHzARqNa0orSCThYHIQrCh2FmPVpl%2FROXqENoLCchIzmbspr0nw0RtXWvukysIHIJAd8COX67Ayw9YEvcCV%2Fu45Ry5Nll3pair6BG2NSKxtqMt%2F7JV%2B5ZjLTuSbuOoX96QytOBUJea2FzC68O69BjqkASJ%2FhfeXliPbcYE2bRa0zX85YynEu%2BtlkVo7%2Ft0fDuT6winT5%2FrM1IKNbrwV%2F1pUIv%2Bzbebte1cl7T2ttZOeJ9%2BTZTe4UJHuBp%2FmAD%2FUkRBSRLoFm0%2BfFqDz%2B9xu4FgMFUXWnO1w4fK%2Fxlh6Gseh2Tw%2BDDVAX3bHRA%2FADbhs5JOb3i0hHaDs%2BpNrB924CK4RQsYWs13lC2HZwGKkYmP9iNv%2Bn8Yo&X-Amz-Signature=2f9aec6ba1a3f8f6b4ee985b2524ec1b831987e55229b7d10115b3c66e985392&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQCZFRS7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD49%2BJevS5frkEmKQJUS78Ka%2Fqf%2FjlQP8yRH5fRMI3cSgIhAMW7S%2BMcxIv%2B1x7R5qxcp1L7YDZZpvc1jRZcww%2FQ5bcJKv8DCCEQABoMNjM3NDIzMTgzODA1IgwlzoMHbBjiTgzbfCsq3ANiGOWJOyejRcaSiy%2BUfEQVlQToiV3zTb9ONeS6ZZcpZNkB6fav%2B3es7sHO%2Bcy25oz6xXKSO82H7CJ2YOAHhjUp2qUWWr9RWVxIApqKCaY5VOGQ0%2Bgb7EVm6Ac4tB57BmRkZXpBUxb0xhwAiF6Oso7hduKmAn%2FVhm1jRk6njYnvtcg8Gp0ucX5uy54lXDmScAFd8cF%2Bcamg5hlBst3FmGODsmtG0ctu3%2BZ1%2BC6Ds7MriFEcB%2Fjzgj4pYDUXcnnJiuWcv%2FLSYdDhtbhm3nVIKHMoFjP5cCtGindbPa1eEMCtwYNiasNtIlCvnhOC%2Fzq%2FWkaCR2xv8c1PsuqKwg1PjH1s7GdH9dV0O%2FNY3phyXFdE4BxlNqIkEv9GBiXtv6uTiJZjcb2JmW6hDZ3RVoyI64%2Fwvbp8q8UXlGUT17GAoy17cZyI7L0%2F%2FgcGXKu7CQWj2qO%2BI0E0ycy0uIMho6xsZPCnhIrZetqXUOr%2BeL4EjKrCG8YIgwHzARqNa0orSCThYHIQrCh2FmPVpl%2FROXqENoLCchIzmbspr0nw0RtXWvukysIHIJAd8COX67Ayw9YEvcCV%2Fu45Ry5Nll3pair6BG2NSKxtqMt%2F7JV%2B5ZjLTuSbuOoX96QytOBUJea2FzC68O69BjqkASJ%2FhfeXliPbcYE2bRa0zX85YynEu%2BtlkVo7%2Ft0fDuT6winT5%2FrM1IKNbrwV%2F1pUIv%2Bzbebte1cl7T2ttZOeJ9%2BTZTe4UJHuBp%2FmAD%2FUkRBSRLoFm0%2BfFqDz%2B9xu4FgMFUXWnO1w4fK%2Fxlh6Gseh2Tw%2BDDVAX3bHRA%2FADbhs5JOb3i0hHaDs%2BpNrB924CK4RQsYWs13lC2HZwGKkYmP9iNv%2Bn8Yo&X-Amz-Signature=66a4a69fc1d146e2c5ae504e374e94c001432efaef5719b4b81e517bb8deecbc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

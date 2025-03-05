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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXT7M4QB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA8fRDuU47D8heg5XIhOrltTmBbqzBgLGCsOjzQwxsgAiEAoVZUb6dT8izPO3nqjw08JyRBeRln5KewmKigDJ20upcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4T4ZO%2Fmy9xM0qqZCrcA4PwoVmFKrxWIOM0CyqzQapV6SvQkWXxlzF6m3X9T5wTOYRt5RO64pUVz9XFP4wq1pcYuspQ%2FR8X70AKinDoWS3IOP2u4pFMrzy%2FRsuJalu1YG6Jb4wYlj%2BaJdxt1UcY6KEFguD1jb9Xa%2Bvk7N%2BME%2FCBo1CrfcADvkuRuway08ZzmlWHEW3rrYwNbde%2BK4%2BBrOoFqzQ7GYHkOz29ECccQsyQp7Pa1NpJZRyZf0PxwkraWmtwh7eyvtNUCbHC1Oy1CYubf%2BJE%2FAx%2F0OL%2FlohRm59yQuE%2FwjRzKmxrO78lNb4O4PMya54o6nMYCi9GI5hFFxk03Hakulh0PYgia8py%2BvOK27hHNVoqYX7Pk5cDFMwgsWB5%2B8CzCRGLy8BgJ5qXdqhx7ylUwyu6579dJ%2BY1FutZAw2uqw6hcJv3dl2DvFjFrIYXiDIhWF6%2BCiQrmJcJC3T3wsFBejMzyv9NELSiKEsTtnqWE1bqq8fMtTOySuaWeSyc7Ly1w6Qji4k3tolvWfineOcFGESBQaDzwGM7Cio4cCms06SvgMM92PU7ntUNLNe6XdF6bexwayYri7eNudlnX%2BOjD2PYhpQrGgTevhxkYG%2FypCIOApjgQQAXUJbT57s95vDTqdnTiyIlMJuJn74GOqUBZfuq6KtkHJtwDhK%2BD350mObpHk4i1RdAF1cvGsf23%2FLaaCH1rwqFejQw%2FwYiPkPUZYFzmV5yB4us%2BbHLLSGxo3tUgprWADOsw4MrgLyohcOh2YBZfbyJFTJXpdlOLCijFJpWkJ%2Fd1RePr6U24%2BznK%2FgAvAm%2Fh431oClr4Z8AQy5aI142f43wNN5TULWtVAmDP0y5zKXBPtaO%2Bwlf9XXh1YCCzhuZ&X-Amz-Signature=b27f4401763aeddcd63bbd9f7d81c33010b758b60e0f582911ef769639c20fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXT7M4QB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA8fRDuU47D8heg5XIhOrltTmBbqzBgLGCsOjzQwxsgAiEAoVZUb6dT8izPO3nqjw08JyRBeRln5KewmKigDJ20upcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4T4ZO%2Fmy9xM0qqZCrcA4PwoVmFKrxWIOM0CyqzQapV6SvQkWXxlzF6m3X9T5wTOYRt5RO64pUVz9XFP4wq1pcYuspQ%2FR8X70AKinDoWS3IOP2u4pFMrzy%2FRsuJalu1YG6Jb4wYlj%2BaJdxt1UcY6KEFguD1jb9Xa%2Bvk7N%2BME%2FCBo1CrfcADvkuRuway08ZzmlWHEW3rrYwNbde%2BK4%2BBrOoFqzQ7GYHkOz29ECccQsyQp7Pa1NpJZRyZf0PxwkraWmtwh7eyvtNUCbHC1Oy1CYubf%2BJE%2FAx%2F0OL%2FlohRm59yQuE%2FwjRzKmxrO78lNb4O4PMya54o6nMYCi9GI5hFFxk03Hakulh0PYgia8py%2BvOK27hHNVoqYX7Pk5cDFMwgsWB5%2B8CzCRGLy8BgJ5qXdqhx7ylUwyu6579dJ%2BY1FutZAw2uqw6hcJv3dl2DvFjFrIYXiDIhWF6%2BCiQrmJcJC3T3wsFBejMzyv9NELSiKEsTtnqWE1bqq8fMtTOySuaWeSyc7Ly1w6Qji4k3tolvWfineOcFGESBQaDzwGM7Cio4cCms06SvgMM92PU7ntUNLNe6XdF6bexwayYri7eNudlnX%2BOjD2PYhpQrGgTevhxkYG%2FypCIOApjgQQAXUJbT57s95vDTqdnTiyIlMJuJn74GOqUBZfuq6KtkHJtwDhK%2BD350mObpHk4i1RdAF1cvGsf23%2FLaaCH1rwqFejQw%2FwYiPkPUZYFzmV5yB4us%2BbHLLSGxo3tUgprWADOsw4MrgLyohcOh2YBZfbyJFTJXpdlOLCijFJpWkJ%2Fd1RePr6U24%2BznK%2FgAvAm%2Fh431oClr4Z8AQy5aI142f43wNN5TULWtVAmDP0y5zKXBPtaO%2Bwlf9XXh1YCCzhuZ&X-Amz-Signature=95089b00aa8bccf1aa1a646753453b7a553e3fba04798b6a9ee1e7a91c4dfb4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXT7M4QB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA8fRDuU47D8heg5XIhOrltTmBbqzBgLGCsOjzQwxsgAiEAoVZUb6dT8izPO3nqjw08JyRBeRln5KewmKigDJ20upcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4T4ZO%2Fmy9xM0qqZCrcA4PwoVmFKrxWIOM0CyqzQapV6SvQkWXxlzF6m3X9T5wTOYRt5RO64pUVz9XFP4wq1pcYuspQ%2FR8X70AKinDoWS3IOP2u4pFMrzy%2FRsuJalu1YG6Jb4wYlj%2BaJdxt1UcY6KEFguD1jb9Xa%2Bvk7N%2BME%2FCBo1CrfcADvkuRuway08ZzmlWHEW3rrYwNbde%2BK4%2BBrOoFqzQ7GYHkOz29ECccQsyQp7Pa1NpJZRyZf0PxwkraWmtwh7eyvtNUCbHC1Oy1CYubf%2BJE%2FAx%2F0OL%2FlohRm59yQuE%2FwjRzKmxrO78lNb4O4PMya54o6nMYCi9GI5hFFxk03Hakulh0PYgia8py%2BvOK27hHNVoqYX7Pk5cDFMwgsWB5%2B8CzCRGLy8BgJ5qXdqhx7ylUwyu6579dJ%2BY1FutZAw2uqw6hcJv3dl2DvFjFrIYXiDIhWF6%2BCiQrmJcJC3T3wsFBejMzyv9NELSiKEsTtnqWE1bqq8fMtTOySuaWeSyc7Ly1w6Qji4k3tolvWfineOcFGESBQaDzwGM7Cio4cCms06SvgMM92PU7ntUNLNe6XdF6bexwayYri7eNudlnX%2BOjD2PYhpQrGgTevhxkYG%2FypCIOApjgQQAXUJbT57s95vDTqdnTiyIlMJuJn74GOqUBZfuq6KtkHJtwDhK%2BD350mObpHk4i1RdAF1cvGsf23%2FLaaCH1rwqFejQw%2FwYiPkPUZYFzmV5yB4us%2BbHLLSGxo3tUgprWADOsw4MrgLyohcOh2YBZfbyJFTJXpdlOLCijFJpWkJ%2Fd1RePr6U24%2BznK%2FgAvAm%2Fh431oClr4Z8AQy5aI142f43wNN5TULWtVAmDP0y5zKXBPtaO%2Bwlf9XXh1YCCzhuZ&X-Amz-Signature=6f8d30ca325d0ff316a04ef893db8ec9b19b2eec720d322c40226261ac370673&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXT7M4QB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA8fRDuU47D8heg5XIhOrltTmBbqzBgLGCsOjzQwxsgAiEAoVZUb6dT8izPO3nqjw08JyRBeRln5KewmKigDJ20upcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4T4ZO%2Fmy9xM0qqZCrcA4PwoVmFKrxWIOM0CyqzQapV6SvQkWXxlzF6m3X9T5wTOYRt5RO64pUVz9XFP4wq1pcYuspQ%2FR8X70AKinDoWS3IOP2u4pFMrzy%2FRsuJalu1YG6Jb4wYlj%2BaJdxt1UcY6KEFguD1jb9Xa%2Bvk7N%2BME%2FCBo1CrfcADvkuRuway08ZzmlWHEW3rrYwNbde%2BK4%2BBrOoFqzQ7GYHkOz29ECccQsyQp7Pa1NpJZRyZf0PxwkraWmtwh7eyvtNUCbHC1Oy1CYubf%2BJE%2FAx%2F0OL%2FlohRm59yQuE%2FwjRzKmxrO78lNb4O4PMya54o6nMYCi9GI5hFFxk03Hakulh0PYgia8py%2BvOK27hHNVoqYX7Pk5cDFMwgsWB5%2B8CzCRGLy8BgJ5qXdqhx7ylUwyu6579dJ%2BY1FutZAw2uqw6hcJv3dl2DvFjFrIYXiDIhWF6%2BCiQrmJcJC3T3wsFBejMzyv9NELSiKEsTtnqWE1bqq8fMtTOySuaWeSyc7Ly1w6Qji4k3tolvWfineOcFGESBQaDzwGM7Cio4cCms06SvgMM92PU7ntUNLNe6XdF6bexwayYri7eNudlnX%2BOjD2PYhpQrGgTevhxkYG%2FypCIOApjgQQAXUJbT57s95vDTqdnTiyIlMJuJn74GOqUBZfuq6KtkHJtwDhK%2BD350mObpHk4i1RdAF1cvGsf23%2FLaaCH1rwqFejQw%2FwYiPkPUZYFzmV5yB4us%2BbHLLSGxo3tUgprWADOsw4MrgLyohcOh2YBZfbyJFTJXpdlOLCijFJpWkJ%2Fd1RePr6U24%2BznK%2FgAvAm%2Fh431oClr4Z8AQy5aI142f43wNN5TULWtVAmDP0y5zKXBPtaO%2Bwlf9XXh1YCCzhuZ&X-Amz-Signature=00919b97cce5afb9b81c8c633516bb1971d618850bac56cef6a076eba935bf4d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXT7M4QB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA8fRDuU47D8heg5XIhOrltTmBbqzBgLGCsOjzQwxsgAiEAoVZUb6dT8izPO3nqjw08JyRBeRln5KewmKigDJ20upcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4T4ZO%2Fmy9xM0qqZCrcA4PwoVmFKrxWIOM0CyqzQapV6SvQkWXxlzF6m3X9T5wTOYRt5RO64pUVz9XFP4wq1pcYuspQ%2FR8X70AKinDoWS3IOP2u4pFMrzy%2FRsuJalu1YG6Jb4wYlj%2BaJdxt1UcY6KEFguD1jb9Xa%2Bvk7N%2BME%2FCBo1CrfcADvkuRuway08ZzmlWHEW3rrYwNbde%2BK4%2BBrOoFqzQ7GYHkOz29ECccQsyQp7Pa1NpJZRyZf0PxwkraWmtwh7eyvtNUCbHC1Oy1CYubf%2BJE%2FAx%2F0OL%2FlohRm59yQuE%2FwjRzKmxrO78lNb4O4PMya54o6nMYCi9GI5hFFxk03Hakulh0PYgia8py%2BvOK27hHNVoqYX7Pk5cDFMwgsWB5%2B8CzCRGLy8BgJ5qXdqhx7ylUwyu6579dJ%2BY1FutZAw2uqw6hcJv3dl2DvFjFrIYXiDIhWF6%2BCiQrmJcJC3T3wsFBejMzyv9NELSiKEsTtnqWE1bqq8fMtTOySuaWeSyc7Ly1w6Qji4k3tolvWfineOcFGESBQaDzwGM7Cio4cCms06SvgMM92PU7ntUNLNe6XdF6bexwayYri7eNudlnX%2BOjD2PYhpQrGgTevhxkYG%2FypCIOApjgQQAXUJbT57s95vDTqdnTiyIlMJuJn74GOqUBZfuq6KtkHJtwDhK%2BD350mObpHk4i1RdAF1cvGsf23%2FLaaCH1rwqFejQw%2FwYiPkPUZYFzmV5yB4us%2BbHLLSGxo3tUgprWADOsw4MrgLyohcOh2YBZfbyJFTJXpdlOLCijFJpWkJ%2Fd1RePr6U24%2BznK%2FgAvAm%2Fh431oClr4Z8AQy5aI142f43wNN5TULWtVAmDP0y5zKXBPtaO%2Bwlf9XXh1YCCzhuZ&X-Amz-Signature=fe9b9daae7c46db14f3ebd1da35fcb6bcb054cfd96c3ae82884cb5fa9d388224&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXT7M4QB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA8fRDuU47D8heg5XIhOrltTmBbqzBgLGCsOjzQwxsgAiEAoVZUb6dT8izPO3nqjw08JyRBeRln5KewmKigDJ20upcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4T4ZO%2Fmy9xM0qqZCrcA4PwoVmFKrxWIOM0CyqzQapV6SvQkWXxlzF6m3X9T5wTOYRt5RO64pUVz9XFP4wq1pcYuspQ%2FR8X70AKinDoWS3IOP2u4pFMrzy%2FRsuJalu1YG6Jb4wYlj%2BaJdxt1UcY6KEFguD1jb9Xa%2Bvk7N%2BME%2FCBo1CrfcADvkuRuway08ZzmlWHEW3rrYwNbde%2BK4%2BBrOoFqzQ7GYHkOz29ECccQsyQp7Pa1NpJZRyZf0PxwkraWmtwh7eyvtNUCbHC1Oy1CYubf%2BJE%2FAx%2F0OL%2FlohRm59yQuE%2FwjRzKmxrO78lNb4O4PMya54o6nMYCi9GI5hFFxk03Hakulh0PYgia8py%2BvOK27hHNVoqYX7Pk5cDFMwgsWB5%2B8CzCRGLy8BgJ5qXdqhx7ylUwyu6579dJ%2BY1FutZAw2uqw6hcJv3dl2DvFjFrIYXiDIhWF6%2BCiQrmJcJC3T3wsFBejMzyv9NELSiKEsTtnqWE1bqq8fMtTOySuaWeSyc7Ly1w6Qji4k3tolvWfineOcFGESBQaDzwGM7Cio4cCms06SvgMM92PU7ntUNLNe6XdF6bexwayYri7eNudlnX%2BOjD2PYhpQrGgTevhxkYG%2FypCIOApjgQQAXUJbT57s95vDTqdnTiyIlMJuJn74GOqUBZfuq6KtkHJtwDhK%2BD350mObpHk4i1RdAF1cvGsf23%2FLaaCH1rwqFejQw%2FwYiPkPUZYFzmV5yB4us%2BbHLLSGxo3tUgprWADOsw4MrgLyohcOh2YBZfbyJFTJXpdlOLCijFJpWkJ%2Fd1RePr6U24%2BznK%2FgAvAm%2Fh431oClr4Z8AQy5aI142f43wNN5TULWtVAmDP0y5zKXBPtaO%2Bwlf9XXh1YCCzhuZ&X-Amz-Signature=e47e77531d41abdd3dc1a156c2a2622603230eb44b0b54db37f237e43224b574&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXT7M4QB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA8fRDuU47D8heg5XIhOrltTmBbqzBgLGCsOjzQwxsgAiEAoVZUb6dT8izPO3nqjw08JyRBeRln5KewmKigDJ20upcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4T4ZO%2Fmy9xM0qqZCrcA4PwoVmFKrxWIOM0CyqzQapV6SvQkWXxlzF6m3X9T5wTOYRt5RO64pUVz9XFP4wq1pcYuspQ%2FR8X70AKinDoWS3IOP2u4pFMrzy%2FRsuJalu1YG6Jb4wYlj%2BaJdxt1UcY6KEFguD1jb9Xa%2Bvk7N%2BME%2FCBo1CrfcADvkuRuway08ZzmlWHEW3rrYwNbde%2BK4%2BBrOoFqzQ7GYHkOz29ECccQsyQp7Pa1NpJZRyZf0PxwkraWmtwh7eyvtNUCbHC1Oy1CYubf%2BJE%2FAx%2F0OL%2FlohRm59yQuE%2FwjRzKmxrO78lNb4O4PMya54o6nMYCi9GI5hFFxk03Hakulh0PYgia8py%2BvOK27hHNVoqYX7Pk5cDFMwgsWB5%2B8CzCRGLy8BgJ5qXdqhx7ylUwyu6579dJ%2BY1FutZAw2uqw6hcJv3dl2DvFjFrIYXiDIhWF6%2BCiQrmJcJC3T3wsFBejMzyv9NELSiKEsTtnqWE1bqq8fMtTOySuaWeSyc7Ly1w6Qji4k3tolvWfineOcFGESBQaDzwGM7Cio4cCms06SvgMM92PU7ntUNLNe6XdF6bexwayYri7eNudlnX%2BOjD2PYhpQrGgTevhxkYG%2FypCIOApjgQQAXUJbT57s95vDTqdnTiyIlMJuJn74GOqUBZfuq6KtkHJtwDhK%2BD350mObpHk4i1RdAF1cvGsf23%2FLaaCH1rwqFejQw%2FwYiPkPUZYFzmV5yB4us%2BbHLLSGxo3tUgprWADOsw4MrgLyohcOh2YBZfbyJFTJXpdlOLCijFJpWkJ%2Fd1RePr6U24%2BznK%2FgAvAm%2Fh431oClr4Z8AQy5aI142f43wNN5TULWtVAmDP0y5zKXBPtaO%2Bwlf9XXh1YCCzhuZ&X-Amz-Signature=7318117e3206452f1935f7029b5cbc3bf4c54ec50c29f5817dac8cee64f65bff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7U5OCIP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDf%2BvyLugyHt%2FOabCn3D2hQYQvP5udJCd0zOEaUsvYdFQIhAPf0eNjoZwEYqDnzauaHA%2F3%2BGFh1cEHoDL6KmoXXw66oKv8DCFoQABoMNjM3NDIzMTgzODA1IgwNr5IyrrH6Z9gNzvQq3AOqDj9s%2BVJyETVI4jxp%2FajZgOWJyitcSWJo5wO2pecM0LXUCAHWi7539rMDQWyE6gQ7%2FucYr%2BuMH6Jsy9tC3%2FztdXqnTo9A7Lux%2F9cMj9LxNGkkkI7GKHDK4Yzun4xn1oUe3gUG%2BAwEccqTJDKITFsk9Swn7rZW4fNvI%2FNPdp%2FjF8Qg%2FAnEJ6hCfskQaNsKad7l7LX3wRMdChP%2BdNN6L8idVqdugwWOIMFjf0qElENMRVjsdwnWtfapAXfFotu%2BcZaWbtYLh0wJAr9f2tWevd1miyVUH5quX1h%2Bk0WolXooOhl%2BPggOXgaeo%2BbsWFBUKCLTxkspfW3Ld8VIidCoTE%2F0WBebd7eziLw%2FITxsQOsFgOK%2FjV9U9dDoF2RU%2FDgPi3orbJ6chygBe4hDZHeNepmhoz7BqvS3c8BZ3vElKpJcwq1DQl3G8gLGZf85VQ%2FkCs30LIv6%2FWVZnnWHSWSBrpmJ1wYREjhvouYqT5VWq%2FGbNThZ5pHgt3VZjhojoIB9%2BHdsE5yE7B4I79Bw%2B%2FGOKwqK9odJ9HBzY0ARJhTAThzJb%2Foc80A6BU99o7uBz4Rf1krcI0xiNJJhQCJMK4NfIiDbYEO47GlnXwlmDcOtqLjQwGlhs29rCMgjmop%2BNzDm7pG9BjqkAXVmYW8XoBux2REQnvDZg1cwYzpfMhmZfE2Wehvlc0ogtADJZirW6qqDwJKw02NJJKeA01NEQkNt77icTUVsX0dTBA7ODczH1SOUJBXMHnY8cEO9R1WW9%2BvxViC%2BaJ2TevsNL1vb8g%2Bfxedn3dR1q%2Bw%2BTBSN%2FWV6J0SHIbmGdHJIt%2FGZqhiwTPi3MuK5PdUAyws97uv6%2B1SkpNMpaCMeDA5L4Vna&X-Amz-Signature=55994d62cb13826b72642137af6cb120a486bd1620f854bcaf2d135c233f60c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7U5OCIP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDf%2BvyLugyHt%2FOabCn3D2hQYQvP5udJCd0zOEaUsvYdFQIhAPf0eNjoZwEYqDnzauaHA%2F3%2BGFh1cEHoDL6KmoXXw66oKv8DCFoQABoMNjM3NDIzMTgzODA1IgwNr5IyrrH6Z9gNzvQq3AOqDj9s%2BVJyETVI4jxp%2FajZgOWJyitcSWJo5wO2pecM0LXUCAHWi7539rMDQWyE6gQ7%2FucYr%2BuMH6Jsy9tC3%2FztdXqnTo9A7Lux%2F9cMj9LxNGkkkI7GKHDK4Yzun4xn1oUe3gUG%2BAwEccqTJDKITFsk9Swn7rZW4fNvI%2FNPdp%2FjF8Qg%2FAnEJ6hCfskQaNsKad7l7LX3wRMdChP%2BdNN6L8idVqdugwWOIMFjf0qElENMRVjsdwnWtfapAXfFotu%2BcZaWbtYLh0wJAr9f2tWevd1miyVUH5quX1h%2Bk0WolXooOhl%2BPggOXgaeo%2BbsWFBUKCLTxkspfW3Ld8VIidCoTE%2F0WBebd7eziLw%2FITxsQOsFgOK%2FjV9U9dDoF2RU%2FDgPi3orbJ6chygBe4hDZHeNepmhoz7BqvS3c8BZ3vElKpJcwq1DQl3G8gLGZf85VQ%2FkCs30LIv6%2FWVZnnWHSWSBrpmJ1wYREjhvouYqT5VWq%2FGbNThZ5pHgt3VZjhojoIB9%2BHdsE5yE7B4I79Bw%2B%2FGOKwqK9odJ9HBzY0ARJhTAThzJb%2Foc80A6BU99o7uBz4Rf1krcI0xiNJJhQCJMK4NfIiDbYEO47GlnXwlmDcOtqLjQwGlhs29rCMgjmop%2BNzDm7pG9BjqkAXVmYW8XoBux2REQnvDZg1cwYzpfMhmZfE2Wehvlc0ogtADJZirW6qqDwJKw02NJJKeA01NEQkNt77icTUVsX0dTBA7ODczH1SOUJBXMHnY8cEO9R1WW9%2BvxViC%2BaJ2TevsNL1vb8g%2Bfxedn3dR1q%2Bw%2BTBSN%2FWV6J0SHIbmGdHJIt%2FGZqhiwTPi3MuK5PdUAyws97uv6%2B1SkpNMpaCMeDA5L4Vna&X-Amz-Signature=c8d69520ccf6593973f64dbbf1cfcd3bcb69e07595d07f06de1578d988b48394&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7U5OCIP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDf%2BvyLugyHt%2FOabCn3D2hQYQvP5udJCd0zOEaUsvYdFQIhAPf0eNjoZwEYqDnzauaHA%2F3%2BGFh1cEHoDL6KmoXXw66oKv8DCFoQABoMNjM3NDIzMTgzODA1IgwNr5IyrrH6Z9gNzvQq3AOqDj9s%2BVJyETVI4jxp%2FajZgOWJyitcSWJo5wO2pecM0LXUCAHWi7539rMDQWyE6gQ7%2FucYr%2BuMH6Jsy9tC3%2FztdXqnTo9A7Lux%2F9cMj9LxNGkkkI7GKHDK4Yzun4xn1oUe3gUG%2BAwEccqTJDKITFsk9Swn7rZW4fNvI%2FNPdp%2FjF8Qg%2FAnEJ6hCfskQaNsKad7l7LX3wRMdChP%2BdNN6L8idVqdugwWOIMFjf0qElENMRVjsdwnWtfapAXfFotu%2BcZaWbtYLh0wJAr9f2tWevd1miyVUH5quX1h%2Bk0WolXooOhl%2BPggOXgaeo%2BbsWFBUKCLTxkspfW3Ld8VIidCoTE%2F0WBebd7eziLw%2FITxsQOsFgOK%2FjV9U9dDoF2RU%2FDgPi3orbJ6chygBe4hDZHeNepmhoz7BqvS3c8BZ3vElKpJcwq1DQl3G8gLGZf85VQ%2FkCs30LIv6%2FWVZnnWHSWSBrpmJ1wYREjhvouYqT5VWq%2FGbNThZ5pHgt3VZjhojoIB9%2BHdsE5yE7B4I79Bw%2B%2FGOKwqK9odJ9HBzY0ARJhTAThzJb%2Foc80A6BU99o7uBz4Rf1krcI0xiNJJhQCJMK4NfIiDbYEO47GlnXwlmDcOtqLjQwGlhs29rCMgjmop%2BNzDm7pG9BjqkAXVmYW8XoBux2REQnvDZg1cwYzpfMhmZfE2Wehvlc0ogtADJZirW6qqDwJKw02NJJKeA01NEQkNt77icTUVsX0dTBA7ODczH1SOUJBXMHnY8cEO9R1WW9%2BvxViC%2BaJ2TevsNL1vb8g%2Bfxedn3dR1q%2Bw%2BTBSN%2FWV6J0SHIbmGdHJIt%2FGZqhiwTPi3MuK5PdUAyws97uv6%2B1SkpNMpaCMeDA5L4Vna&X-Amz-Signature=294597c662cae04588ec3c18e31d42334eb071b8f179eed96a25e84a658aa85e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7U5OCIP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDf%2BvyLugyHt%2FOabCn3D2hQYQvP5udJCd0zOEaUsvYdFQIhAPf0eNjoZwEYqDnzauaHA%2F3%2BGFh1cEHoDL6KmoXXw66oKv8DCFoQABoMNjM3NDIzMTgzODA1IgwNr5IyrrH6Z9gNzvQq3AOqDj9s%2BVJyETVI4jxp%2FajZgOWJyitcSWJo5wO2pecM0LXUCAHWi7539rMDQWyE6gQ7%2FucYr%2BuMH6Jsy9tC3%2FztdXqnTo9A7Lux%2F9cMj9LxNGkkkI7GKHDK4Yzun4xn1oUe3gUG%2BAwEccqTJDKITFsk9Swn7rZW4fNvI%2FNPdp%2FjF8Qg%2FAnEJ6hCfskQaNsKad7l7LX3wRMdChP%2BdNN6L8idVqdugwWOIMFjf0qElENMRVjsdwnWtfapAXfFotu%2BcZaWbtYLh0wJAr9f2tWevd1miyVUH5quX1h%2Bk0WolXooOhl%2BPggOXgaeo%2BbsWFBUKCLTxkspfW3Ld8VIidCoTE%2F0WBebd7eziLw%2FITxsQOsFgOK%2FjV9U9dDoF2RU%2FDgPi3orbJ6chygBe4hDZHeNepmhoz7BqvS3c8BZ3vElKpJcwq1DQl3G8gLGZf85VQ%2FkCs30LIv6%2FWVZnnWHSWSBrpmJ1wYREjhvouYqT5VWq%2FGbNThZ5pHgt3VZjhojoIB9%2BHdsE5yE7B4I79Bw%2B%2FGOKwqK9odJ9HBzY0ARJhTAThzJb%2Foc80A6BU99o7uBz4Rf1krcI0xiNJJhQCJMK4NfIiDbYEO47GlnXwlmDcOtqLjQwGlhs29rCMgjmop%2BNzDm7pG9BjqkAXVmYW8XoBux2REQnvDZg1cwYzpfMhmZfE2Wehvlc0ogtADJZirW6qqDwJKw02NJJKeA01NEQkNt77icTUVsX0dTBA7ODczH1SOUJBXMHnY8cEO9R1WW9%2BvxViC%2BaJ2TevsNL1vb8g%2Bfxedn3dR1q%2Bw%2BTBSN%2FWV6J0SHIbmGdHJIt%2FGZqhiwTPi3MuK5PdUAyws97uv6%2B1SkpNMpaCMeDA5L4Vna&X-Amz-Signature=828598df4e004cc64805bb48fa82821ec87d1a419e2ca3e76fccb76e6a76ec35&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7U5OCIP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDf%2BvyLugyHt%2FOabCn3D2hQYQvP5udJCd0zOEaUsvYdFQIhAPf0eNjoZwEYqDnzauaHA%2F3%2BGFh1cEHoDL6KmoXXw66oKv8DCFoQABoMNjM3NDIzMTgzODA1IgwNr5IyrrH6Z9gNzvQq3AOqDj9s%2BVJyETVI4jxp%2FajZgOWJyitcSWJo5wO2pecM0LXUCAHWi7539rMDQWyE6gQ7%2FucYr%2BuMH6Jsy9tC3%2FztdXqnTo9A7Lux%2F9cMj9LxNGkkkI7GKHDK4Yzun4xn1oUe3gUG%2BAwEccqTJDKITFsk9Swn7rZW4fNvI%2FNPdp%2FjF8Qg%2FAnEJ6hCfskQaNsKad7l7LX3wRMdChP%2BdNN6L8idVqdugwWOIMFjf0qElENMRVjsdwnWtfapAXfFotu%2BcZaWbtYLh0wJAr9f2tWevd1miyVUH5quX1h%2Bk0WolXooOhl%2BPggOXgaeo%2BbsWFBUKCLTxkspfW3Ld8VIidCoTE%2F0WBebd7eziLw%2FITxsQOsFgOK%2FjV9U9dDoF2RU%2FDgPi3orbJ6chygBe4hDZHeNepmhoz7BqvS3c8BZ3vElKpJcwq1DQl3G8gLGZf85VQ%2FkCs30LIv6%2FWVZnnWHSWSBrpmJ1wYREjhvouYqT5VWq%2FGbNThZ5pHgt3VZjhojoIB9%2BHdsE5yE7B4I79Bw%2B%2FGOKwqK9odJ9HBzY0ARJhTAThzJb%2Foc80A6BU99o7uBz4Rf1krcI0xiNJJhQCJMK4NfIiDbYEO47GlnXwlmDcOtqLjQwGlhs29rCMgjmop%2BNzDm7pG9BjqkAXVmYW8XoBux2REQnvDZg1cwYzpfMhmZfE2Wehvlc0ogtADJZirW6qqDwJKw02NJJKeA01NEQkNt77icTUVsX0dTBA7ODczH1SOUJBXMHnY8cEO9R1WW9%2BvxViC%2BaJ2TevsNL1vb8g%2Bfxedn3dR1q%2Bw%2BTBSN%2FWV6J0SHIbmGdHJIt%2FGZqhiwTPi3MuK5PdUAyws97uv6%2B1SkpNMpaCMeDA5L4Vna&X-Amz-Signature=b2b9329d0284a49ad8bfd1e16e4dfaff93aaa1a866cac493cd509ef63a504b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7U5OCIP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDf%2BvyLugyHt%2FOabCn3D2hQYQvP5udJCd0zOEaUsvYdFQIhAPf0eNjoZwEYqDnzauaHA%2F3%2BGFh1cEHoDL6KmoXXw66oKv8DCFoQABoMNjM3NDIzMTgzODA1IgwNr5IyrrH6Z9gNzvQq3AOqDj9s%2BVJyETVI4jxp%2FajZgOWJyitcSWJo5wO2pecM0LXUCAHWi7539rMDQWyE6gQ7%2FucYr%2BuMH6Jsy9tC3%2FztdXqnTo9A7Lux%2F9cMj9LxNGkkkI7GKHDK4Yzun4xn1oUe3gUG%2BAwEccqTJDKITFsk9Swn7rZW4fNvI%2FNPdp%2FjF8Qg%2FAnEJ6hCfskQaNsKad7l7LX3wRMdChP%2BdNN6L8idVqdugwWOIMFjf0qElENMRVjsdwnWtfapAXfFotu%2BcZaWbtYLh0wJAr9f2tWevd1miyVUH5quX1h%2Bk0WolXooOhl%2BPggOXgaeo%2BbsWFBUKCLTxkspfW3Ld8VIidCoTE%2F0WBebd7eziLw%2FITxsQOsFgOK%2FjV9U9dDoF2RU%2FDgPi3orbJ6chygBe4hDZHeNepmhoz7BqvS3c8BZ3vElKpJcwq1DQl3G8gLGZf85VQ%2FkCs30LIv6%2FWVZnnWHSWSBrpmJ1wYREjhvouYqT5VWq%2FGbNThZ5pHgt3VZjhojoIB9%2BHdsE5yE7B4I79Bw%2B%2FGOKwqK9odJ9HBzY0ARJhTAThzJb%2Foc80A6BU99o7uBz4Rf1krcI0xiNJJhQCJMK4NfIiDbYEO47GlnXwlmDcOtqLjQwGlhs29rCMgjmop%2BNzDm7pG9BjqkAXVmYW8XoBux2REQnvDZg1cwYzpfMhmZfE2Wehvlc0ogtADJZirW6qqDwJKw02NJJKeA01NEQkNt77icTUVsX0dTBA7ODczH1SOUJBXMHnY8cEO9R1WW9%2BvxViC%2BaJ2TevsNL1vb8g%2Bfxedn3dR1q%2Bw%2BTBSN%2FWV6J0SHIbmGdHJIt%2FGZqhiwTPi3MuK5PdUAyws97uv6%2B1SkpNMpaCMeDA5L4Vna&X-Amz-Signature=040cee08d50935bd1227919ae822a6828c4b9b4ba040aba3323283c18be8389a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7U5OCIP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDf%2BvyLugyHt%2FOabCn3D2hQYQvP5udJCd0zOEaUsvYdFQIhAPf0eNjoZwEYqDnzauaHA%2F3%2BGFh1cEHoDL6KmoXXw66oKv8DCFoQABoMNjM3NDIzMTgzODA1IgwNr5IyrrH6Z9gNzvQq3AOqDj9s%2BVJyETVI4jxp%2FajZgOWJyitcSWJo5wO2pecM0LXUCAHWi7539rMDQWyE6gQ7%2FucYr%2BuMH6Jsy9tC3%2FztdXqnTo9A7Lux%2F9cMj9LxNGkkkI7GKHDK4Yzun4xn1oUe3gUG%2BAwEccqTJDKITFsk9Swn7rZW4fNvI%2FNPdp%2FjF8Qg%2FAnEJ6hCfskQaNsKad7l7LX3wRMdChP%2BdNN6L8idVqdugwWOIMFjf0qElENMRVjsdwnWtfapAXfFotu%2BcZaWbtYLh0wJAr9f2tWevd1miyVUH5quX1h%2Bk0WolXooOhl%2BPggOXgaeo%2BbsWFBUKCLTxkspfW3Ld8VIidCoTE%2F0WBebd7eziLw%2FITxsQOsFgOK%2FjV9U9dDoF2RU%2FDgPi3orbJ6chygBe4hDZHeNepmhoz7BqvS3c8BZ3vElKpJcwq1DQl3G8gLGZf85VQ%2FkCs30LIv6%2FWVZnnWHSWSBrpmJ1wYREjhvouYqT5VWq%2FGbNThZ5pHgt3VZjhojoIB9%2BHdsE5yE7B4I79Bw%2B%2FGOKwqK9odJ9HBzY0ARJhTAThzJb%2Foc80A6BU99o7uBz4Rf1krcI0xiNJJhQCJMK4NfIiDbYEO47GlnXwlmDcOtqLjQwGlhs29rCMgjmop%2BNzDm7pG9BjqkAXVmYW8XoBux2REQnvDZg1cwYzpfMhmZfE2Wehvlc0ogtADJZirW6qqDwJKw02NJJKeA01NEQkNt77icTUVsX0dTBA7ODczH1SOUJBXMHnY8cEO9R1WW9%2BvxViC%2BaJ2TevsNL1vb8g%2Bfxedn3dR1q%2Bw%2BTBSN%2FWV6J0SHIbmGdHJIt%2FGZqhiwTPi3MuK5PdUAyws97uv6%2B1SkpNMpaCMeDA5L4Vna&X-Amz-Signature=87fc1cce8f66979b8d5b5ff9ac4aaf4beb52b3bde1d86ccb9c1a8e263409c6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

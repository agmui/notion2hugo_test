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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HH4Q5XM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIB6CJM%2BWXWTlH8mv6qrUcH%2B0J2TJOIkz9hBRU3XLIBGRAiBnuGcsK2ci%2Bg%2Fx387Qo3O9zPJD61Li97w%2B5iZn2vMhCSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4zcIKXfqh4BRWg1KtwDM8MEqq9V%2FHfnOxr1EXsp%2FjQ%2BEkZRv%2BicCTyRsUgitiiYgliuypkXGJo4YYe%2FqWMtoj0L%2BCM2I8u9sbyxkZVG%2Bwx1Q1Tps5h%2FjFl6g5K4Fx1ifS7T1xbYIbag1TC32GJ956%2B1ZoAdaHLKHtmaYdzwr1gi9AG63qGlYE15EquU%2BuRNPrjT5z7ZEkWpXbNikJ3gTvFabZRGyyB3G4O8Tg%2F3F695zHYIiPVtiv4LlntdbUI8zdXyEo4bxkfpenNbgEBcVyayyciaqZBnq1%2F%2BkOq0a9HOZSTzKqb6p%2BLPPrVYylrgmDOHjRLumViCJLln0lS7brU56Uu%2FwN%2FAhsRpVRK8rrrKCjyPaAskTbrf2zwjIHFbqgbtcjBkjaNDfzClQpJhMM1bMRGlHn2z6sZoERtyrcKipXzBIpakGz%2FlTc8LQHT7N38ZiNuYwzIeVoTHtBF4jwD47JnZRLKfRUL%2F%2BraK0B7ZE8PCgv%2ByYksyJ3u5VM%2Byr%2FC8cDjACi7WfwCXqfTidxiJbHhRN1rYq1%2FgtmwZqsu7aWO3L2Hogz%2FTVdCGItFW9xuP8lr2w8TQMxpY2bAZ3rwL1JK9ex%2F6i13kPMTIDGfJhxdbCy1Ud8VeafLNg3dRL7fkFMqevh%2FYj48wweDtvwY6pgHFY0FqtNw6%2F2Mq%2F8EOgk0GAoLJrjeRIuRdY1ezvuDvNDAZKwzWPuhTIx81ziGtXmFvfGJYDiHzT7EtH2Wrb1BXaU%2BXHvPBGZXBK7iDz%2FZY0Rouhq55%2FW6wpvS7hKqVj3kS1wcjX5pW1vKIxLn0F5lTpyAzRO0LEuN8qPp390VcrqRp8cuqsY6RWxtSqjo2ssutFtRy51Qg%2Fj38p9w0jY8qpdxxg4Rd&X-Amz-Signature=52763f23c09589d77258869d749ee8ce1f3a3e280e21cb2fcfa36b8ab072b665&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HH4Q5XM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIB6CJM%2BWXWTlH8mv6qrUcH%2B0J2TJOIkz9hBRU3XLIBGRAiBnuGcsK2ci%2Bg%2Fx387Qo3O9zPJD61Li97w%2B5iZn2vMhCSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4zcIKXfqh4BRWg1KtwDM8MEqq9V%2FHfnOxr1EXsp%2FjQ%2BEkZRv%2BicCTyRsUgitiiYgliuypkXGJo4YYe%2FqWMtoj0L%2BCM2I8u9sbyxkZVG%2Bwx1Q1Tps5h%2FjFl6g5K4Fx1ifS7T1xbYIbag1TC32GJ956%2B1ZoAdaHLKHtmaYdzwr1gi9AG63qGlYE15EquU%2BuRNPrjT5z7ZEkWpXbNikJ3gTvFabZRGyyB3G4O8Tg%2F3F695zHYIiPVtiv4LlntdbUI8zdXyEo4bxkfpenNbgEBcVyayyciaqZBnq1%2F%2BkOq0a9HOZSTzKqb6p%2BLPPrVYylrgmDOHjRLumViCJLln0lS7brU56Uu%2FwN%2FAhsRpVRK8rrrKCjyPaAskTbrf2zwjIHFbqgbtcjBkjaNDfzClQpJhMM1bMRGlHn2z6sZoERtyrcKipXzBIpakGz%2FlTc8LQHT7N38ZiNuYwzIeVoTHtBF4jwD47JnZRLKfRUL%2F%2BraK0B7ZE8PCgv%2ByYksyJ3u5VM%2Byr%2FC8cDjACi7WfwCXqfTidxiJbHhRN1rYq1%2FgtmwZqsu7aWO3L2Hogz%2FTVdCGItFW9xuP8lr2w8TQMxpY2bAZ3rwL1JK9ex%2F6i13kPMTIDGfJhxdbCy1Ud8VeafLNg3dRL7fkFMqevh%2FYj48wweDtvwY6pgHFY0FqtNw6%2F2Mq%2F8EOgk0GAoLJrjeRIuRdY1ezvuDvNDAZKwzWPuhTIx81ziGtXmFvfGJYDiHzT7EtH2Wrb1BXaU%2BXHvPBGZXBK7iDz%2FZY0Rouhq55%2FW6wpvS7hKqVj3kS1wcjX5pW1vKIxLn0F5lTpyAzRO0LEuN8qPp390VcrqRp8cuqsY6RWxtSqjo2ssutFtRy51Qg%2Fj38p9w0jY8qpdxxg4Rd&X-Amz-Signature=066ee88e4a38b5e563edb367c8f91183104f12c248a8c0ad000ea20a88e6b4f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HH4Q5XM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIB6CJM%2BWXWTlH8mv6qrUcH%2B0J2TJOIkz9hBRU3XLIBGRAiBnuGcsK2ci%2Bg%2Fx387Qo3O9zPJD61Li97w%2B5iZn2vMhCSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4zcIKXfqh4BRWg1KtwDM8MEqq9V%2FHfnOxr1EXsp%2FjQ%2BEkZRv%2BicCTyRsUgitiiYgliuypkXGJo4YYe%2FqWMtoj0L%2BCM2I8u9sbyxkZVG%2Bwx1Q1Tps5h%2FjFl6g5K4Fx1ifS7T1xbYIbag1TC32GJ956%2B1ZoAdaHLKHtmaYdzwr1gi9AG63qGlYE15EquU%2BuRNPrjT5z7ZEkWpXbNikJ3gTvFabZRGyyB3G4O8Tg%2F3F695zHYIiPVtiv4LlntdbUI8zdXyEo4bxkfpenNbgEBcVyayyciaqZBnq1%2F%2BkOq0a9HOZSTzKqb6p%2BLPPrVYylrgmDOHjRLumViCJLln0lS7brU56Uu%2FwN%2FAhsRpVRK8rrrKCjyPaAskTbrf2zwjIHFbqgbtcjBkjaNDfzClQpJhMM1bMRGlHn2z6sZoERtyrcKipXzBIpakGz%2FlTc8LQHT7N38ZiNuYwzIeVoTHtBF4jwD47JnZRLKfRUL%2F%2BraK0B7ZE8PCgv%2ByYksyJ3u5VM%2Byr%2FC8cDjACi7WfwCXqfTidxiJbHhRN1rYq1%2FgtmwZqsu7aWO3L2Hogz%2FTVdCGItFW9xuP8lr2w8TQMxpY2bAZ3rwL1JK9ex%2F6i13kPMTIDGfJhxdbCy1Ud8VeafLNg3dRL7fkFMqevh%2FYj48wweDtvwY6pgHFY0FqtNw6%2F2Mq%2F8EOgk0GAoLJrjeRIuRdY1ezvuDvNDAZKwzWPuhTIx81ziGtXmFvfGJYDiHzT7EtH2Wrb1BXaU%2BXHvPBGZXBK7iDz%2FZY0Rouhq55%2FW6wpvS7hKqVj3kS1wcjX5pW1vKIxLn0F5lTpyAzRO0LEuN8qPp390VcrqRp8cuqsY6RWxtSqjo2ssutFtRy51Qg%2Fj38p9w0jY8qpdxxg4Rd&X-Amz-Signature=13f01ae12c7348bc92cf6b2b1eed9891748bc1ba99572607de26e0d3d491f9f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HH4Q5XM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIB6CJM%2BWXWTlH8mv6qrUcH%2B0J2TJOIkz9hBRU3XLIBGRAiBnuGcsK2ci%2Bg%2Fx387Qo3O9zPJD61Li97w%2B5iZn2vMhCSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4zcIKXfqh4BRWg1KtwDM8MEqq9V%2FHfnOxr1EXsp%2FjQ%2BEkZRv%2BicCTyRsUgitiiYgliuypkXGJo4YYe%2FqWMtoj0L%2BCM2I8u9sbyxkZVG%2Bwx1Q1Tps5h%2FjFl6g5K4Fx1ifS7T1xbYIbag1TC32GJ956%2B1ZoAdaHLKHtmaYdzwr1gi9AG63qGlYE15EquU%2BuRNPrjT5z7ZEkWpXbNikJ3gTvFabZRGyyB3G4O8Tg%2F3F695zHYIiPVtiv4LlntdbUI8zdXyEo4bxkfpenNbgEBcVyayyciaqZBnq1%2F%2BkOq0a9HOZSTzKqb6p%2BLPPrVYylrgmDOHjRLumViCJLln0lS7brU56Uu%2FwN%2FAhsRpVRK8rrrKCjyPaAskTbrf2zwjIHFbqgbtcjBkjaNDfzClQpJhMM1bMRGlHn2z6sZoERtyrcKipXzBIpakGz%2FlTc8LQHT7N38ZiNuYwzIeVoTHtBF4jwD47JnZRLKfRUL%2F%2BraK0B7ZE8PCgv%2ByYksyJ3u5VM%2Byr%2FC8cDjACi7WfwCXqfTidxiJbHhRN1rYq1%2FgtmwZqsu7aWO3L2Hogz%2FTVdCGItFW9xuP8lr2w8TQMxpY2bAZ3rwL1JK9ex%2F6i13kPMTIDGfJhxdbCy1Ud8VeafLNg3dRL7fkFMqevh%2FYj48wweDtvwY6pgHFY0FqtNw6%2F2Mq%2F8EOgk0GAoLJrjeRIuRdY1ezvuDvNDAZKwzWPuhTIx81ziGtXmFvfGJYDiHzT7EtH2Wrb1BXaU%2BXHvPBGZXBK7iDz%2FZY0Rouhq55%2FW6wpvS7hKqVj3kS1wcjX5pW1vKIxLn0F5lTpyAzRO0LEuN8qPp390VcrqRp8cuqsY6RWxtSqjo2ssutFtRy51Qg%2Fj38p9w0jY8qpdxxg4Rd&X-Amz-Signature=be6f63cdabf856c4dc217271d730dd677995448e908fb63e527c07195710d3ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HH4Q5XM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIB6CJM%2BWXWTlH8mv6qrUcH%2B0J2TJOIkz9hBRU3XLIBGRAiBnuGcsK2ci%2Bg%2Fx387Qo3O9zPJD61Li97w%2B5iZn2vMhCSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4zcIKXfqh4BRWg1KtwDM8MEqq9V%2FHfnOxr1EXsp%2FjQ%2BEkZRv%2BicCTyRsUgitiiYgliuypkXGJo4YYe%2FqWMtoj0L%2BCM2I8u9sbyxkZVG%2Bwx1Q1Tps5h%2FjFl6g5K4Fx1ifS7T1xbYIbag1TC32GJ956%2B1ZoAdaHLKHtmaYdzwr1gi9AG63qGlYE15EquU%2BuRNPrjT5z7ZEkWpXbNikJ3gTvFabZRGyyB3G4O8Tg%2F3F695zHYIiPVtiv4LlntdbUI8zdXyEo4bxkfpenNbgEBcVyayyciaqZBnq1%2F%2BkOq0a9HOZSTzKqb6p%2BLPPrVYylrgmDOHjRLumViCJLln0lS7brU56Uu%2FwN%2FAhsRpVRK8rrrKCjyPaAskTbrf2zwjIHFbqgbtcjBkjaNDfzClQpJhMM1bMRGlHn2z6sZoERtyrcKipXzBIpakGz%2FlTc8LQHT7N38ZiNuYwzIeVoTHtBF4jwD47JnZRLKfRUL%2F%2BraK0B7ZE8PCgv%2ByYksyJ3u5VM%2Byr%2FC8cDjACi7WfwCXqfTidxiJbHhRN1rYq1%2FgtmwZqsu7aWO3L2Hogz%2FTVdCGItFW9xuP8lr2w8TQMxpY2bAZ3rwL1JK9ex%2F6i13kPMTIDGfJhxdbCy1Ud8VeafLNg3dRL7fkFMqevh%2FYj48wweDtvwY6pgHFY0FqtNw6%2F2Mq%2F8EOgk0GAoLJrjeRIuRdY1ezvuDvNDAZKwzWPuhTIx81ziGtXmFvfGJYDiHzT7EtH2Wrb1BXaU%2BXHvPBGZXBK7iDz%2FZY0Rouhq55%2FW6wpvS7hKqVj3kS1wcjX5pW1vKIxLn0F5lTpyAzRO0LEuN8qPp390VcrqRp8cuqsY6RWxtSqjo2ssutFtRy51Qg%2Fj38p9w0jY8qpdxxg4Rd&X-Amz-Signature=4a86e779ad299b413adaf34934556a73ed43ce59ae701d224a51c5f950c9962e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HH4Q5XM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIB6CJM%2BWXWTlH8mv6qrUcH%2B0J2TJOIkz9hBRU3XLIBGRAiBnuGcsK2ci%2Bg%2Fx387Qo3O9zPJD61Li97w%2B5iZn2vMhCSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4zcIKXfqh4BRWg1KtwDM8MEqq9V%2FHfnOxr1EXsp%2FjQ%2BEkZRv%2BicCTyRsUgitiiYgliuypkXGJo4YYe%2FqWMtoj0L%2BCM2I8u9sbyxkZVG%2Bwx1Q1Tps5h%2FjFl6g5K4Fx1ifS7T1xbYIbag1TC32GJ956%2B1ZoAdaHLKHtmaYdzwr1gi9AG63qGlYE15EquU%2BuRNPrjT5z7ZEkWpXbNikJ3gTvFabZRGyyB3G4O8Tg%2F3F695zHYIiPVtiv4LlntdbUI8zdXyEo4bxkfpenNbgEBcVyayyciaqZBnq1%2F%2BkOq0a9HOZSTzKqb6p%2BLPPrVYylrgmDOHjRLumViCJLln0lS7brU56Uu%2FwN%2FAhsRpVRK8rrrKCjyPaAskTbrf2zwjIHFbqgbtcjBkjaNDfzClQpJhMM1bMRGlHn2z6sZoERtyrcKipXzBIpakGz%2FlTc8LQHT7N38ZiNuYwzIeVoTHtBF4jwD47JnZRLKfRUL%2F%2BraK0B7ZE8PCgv%2ByYksyJ3u5VM%2Byr%2FC8cDjACi7WfwCXqfTidxiJbHhRN1rYq1%2FgtmwZqsu7aWO3L2Hogz%2FTVdCGItFW9xuP8lr2w8TQMxpY2bAZ3rwL1JK9ex%2F6i13kPMTIDGfJhxdbCy1Ud8VeafLNg3dRL7fkFMqevh%2FYj48wweDtvwY6pgHFY0FqtNw6%2F2Mq%2F8EOgk0GAoLJrjeRIuRdY1ezvuDvNDAZKwzWPuhTIx81ziGtXmFvfGJYDiHzT7EtH2Wrb1BXaU%2BXHvPBGZXBK7iDz%2FZY0Rouhq55%2FW6wpvS7hKqVj3kS1wcjX5pW1vKIxLn0F5lTpyAzRO0LEuN8qPp390VcrqRp8cuqsY6RWxtSqjo2ssutFtRy51Qg%2Fj38p9w0jY8qpdxxg4Rd&X-Amz-Signature=d4673c97951c5d6339343b90365b314f21defb85f1b0ef86dbdc0c45fdf99961&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HH4Q5XM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIB6CJM%2BWXWTlH8mv6qrUcH%2B0J2TJOIkz9hBRU3XLIBGRAiBnuGcsK2ci%2Bg%2Fx387Qo3O9zPJD61Li97w%2B5iZn2vMhCSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4zcIKXfqh4BRWg1KtwDM8MEqq9V%2FHfnOxr1EXsp%2FjQ%2BEkZRv%2BicCTyRsUgitiiYgliuypkXGJo4YYe%2FqWMtoj0L%2BCM2I8u9sbyxkZVG%2Bwx1Q1Tps5h%2FjFl6g5K4Fx1ifS7T1xbYIbag1TC32GJ956%2B1ZoAdaHLKHtmaYdzwr1gi9AG63qGlYE15EquU%2BuRNPrjT5z7ZEkWpXbNikJ3gTvFabZRGyyB3G4O8Tg%2F3F695zHYIiPVtiv4LlntdbUI8zdXyEo4bxkfpenNbgEBcVyayyciaqZBnq1%2F%2BkOq0a9HOZSTzKqb6p%2BLPPrVYylrgmDOHjRLumViCJLln0lS7brU56Uu%2FwN%2FAhsRpVRK8rrrKCjyPaAskTbrf2zwjIHFbqgbtcjBkjaNDfzClQpJhMM1bMRGlHn2z6sZoERtyrcKipXzBIpakGz%2FlTc8LQHT7N38ZiNuYwzIeVoTHtBF4jwD47JnZRLKfRUL%2F%2BraK0B7ZE8PCgv%2ByYksyJ3u5VM%2Byr%2FC8cDjACi7WfwCXqfTidxiJbHhRN1rYq1%2FgtmwZqsu7aWO3L2Hogz%2FTVdCGItFW9xuP8lr2w8TQMxpY2bAZ3rwL1JK9ex%2F6i13kPMTIDGfJhxdbCy1Ud8VeafLNg3dRL7fkFMqevh%2FYj48wweDtvwY6pgHFY0FqtNw6%2F2Mq%2F8EOgk0GAoLJrjeRIuRdY1ezvuDvNDAZKwzWPuhTIx81ziGtXmFvfGJYDiHzT7EtH2Wrb1BXaU%2BXHvPBGZXBK7iDz%2FZY0Rouhq55%2FW6wpvS7hKqVj3kS1wcjX5pW1vKIxLn0F5lTpyAzRO0LEuN8qPp390VcrqRp8cuqsY6RWxtSqjo2ssutFtRy51Qg%2Fj38p9w0jY8qpdxxg4Rd&X-Amz-Signature=6326766cee80b7cc2a6a4cca8be94e21ae618dcdba111f24e119298e921fe56c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

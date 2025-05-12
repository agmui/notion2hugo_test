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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRBJVU6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGYwtmw%2F8FV223OwBxEl%2BOASmanyTBPClpcDM6Cq5T9ZAiEAjIoFkLo%2FYRIJJQAJhP8cg26Ywx6t4XUlaq8A0wZyh6gqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJJlZz2YO9%2BQ%2FKwircA0Tj1woPWFCnhiEnaVudMJTu1V3xLdPiI2%2Bo0MtWrOFMkx5fhwc5FCT8WKBVfyAJuvpJbvu7E%2B2zoYVoecTf38r4q8NUipaLhZYP8HwXnAGyj5oewaOIwWaev6vYvECvd3a9YPAJZjj6X%2F5PNrznlKeCLFCfqPJyf9LxnBcGHcJeNcRkvwM6JcoNSc%2FbgItXWQfb3k32Az4YOWI%2FzMws1fBrvT5pgKVYzo7bD9RLX7Q%2FiQZWT7OY5FSCBhjU%2BLwN3q6LbfeWRb1bQLPoeYrrTdeFAs1f8s1LbMjGkckHQAlTOu8uk9baFXxJ971nCdAjbQxbq%2BL2%2BnNXlL1Z8ZNyxhVRz%2BkZiv8BEKWWJ9iyehnucm8yyhUZ50MTJPS48OSFoGlt4Y0y%2FnBSlgbzD7vGNE2iHqco%2Bbk2sZl3pHLwMSex5J7uVSNZdqGo6%2BJjkw0kMnyqvf4rskoM9gY5s3tPu6C04k6A89mKibXt0SEkD%2B8snz7gGlJYCgy7fkmPiMWKeLicxp%2FCOLcXTNoX4GsIcXQwFcB50QsH63dfEnAH9F3TNlNn3hurbfxn1wvKTtXKw1bBYcptRpXwwSyBCOlDGlRGp3ggc5XQq9FgBZQCYi2dUbLoovvLlCS1dTAzMLach8EGOqUBjiZ1jSsOycYYAoYdBPhcPRYhnoD37NfKC%2FbjBDtDDNsvfBww5xmjZL0VdHl%2Bo9UQwlESjbHYDROl%2BNXSX5G7qJB9Tvqxv2ntwyPFHth3H4IVjRz8RBpbTOGIvCoCzXxkVhIY%2BUVEu8IbP%2F4yPWFPn13ejc%2BJ8BLcp5syE0x%2BabWdZLA%2F8lEC30u8pTgu0SrtU8tBe8mf6zcC0lupq7062bOwf0Bw&X-Amz-Signature=5b464f27be4942057a478a3920f3fc04ee7c18df81bb2a4a6ad642bbb434352d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRBJVU6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGYwtmw%2F8FV223OwBxEl%2BOASmanyTBPClpcDM6Cq5T9ZAiEAjIoFkLo%2FYRIJJQAJhP8cg26Ywx6t4XUlaq8A0wZyh6gqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJJlZz2YO9%2BQ%2FKwircA0Tj1woPWFCnhiEnaVudMJTu1V3xLdPiI2%2Bo0MtWrOFMkx5fhwc5FCT8WKBVfyAJuvpJbvu7E%2B2zoYVoecTf38r4q8NUipaLhZYP8HwXnAGyj5oewaOIwWaev6vYvECvd3a9YPAJZjj6X%2F5PNrznlKeCLFCfqPJyf9LxnBcGHcJeNcRkvwM6JcoNSc%2FbgItXWQfb3k32Az4YOWI%2FzMws1fBrvT5pgKVYzo7bD9RLX7Q%2FiQZWT7OY5FSCBhjU%2BLwN3q6LbfeWRb1bQLPoeYrrTdeFAs1f8s1LbMjGkckHQAlTOu8uk9baFXxJ971nCdAjbQxbq%2BL2%2BnNXlL1Z8ZNyxhVRz%2BkZiv8BEKWWJ9iyehnucm8yyhUZ50MTJPS48OSFoGlt4Y0y%2FnBSlgbzD7vGNE2iHqco%2Bbk2sZl3pHLwMSex5J7uVSNZdqGo6%2BJjkw0kMnyqvf4rskoM9gY5s3tPu6C04k6A89mKibXt0SEkD%2B8snz7gGlJYCgy7fkmPiMWKeLicxp%2FCOLcXTNoX4GsIcXQwFcB50QsH63dfEnAH9F3TNlNn3hurbfxn1wvKTtXKw1bBYcptRpXwwSyBCOlDGlRGp3ggc5XQq9FgBZQCYi2dUbLoovvLlCS1dTAzMLach8EGOqUBjiZ1jSsOycYYAoYdBPhcPRYhnoD37NfKC%2FbjBDtDDNsvfBww5xmjZL0VdHl%2Bo9UQwlESjbHYDROl%2BNXSX5G7qJB9Tvqxv2ntwyPFHth3H4IVjRz8RBpbTOGIvCoCzXxkVhIY%2BUVEu8IbP%2F4yPWFPn13ejc%2BJ8BLcp5syE0x%2BabWdZLA%2F8lEC30u8pTgu0SrtU8tBe8mf6zcC0lupq7062bOwf0Bw&X-Amz-Signature=5461ed7b0c505890f4809ceda851befb84800058e8762dda580e55990136ac03&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRBJVU6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGYwtmw%2F8FV223OwBxEl%2BOASmanyTBPClpcDM6Cq5T9ZAiEAjIoFkLo%2FYRIJJQAJhP8cg26Ywx6t4XUlaq8A0wZyh6gqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJJlZz2YO9%2BQ%2FKwircA0Tj1woPWFCnhiEnaVudMJTu1V3xLdPiI2%2Bo0MtWrOFMkx5fhwc5FCT8WKBVfyAJuvpJbvu7E%2B2zoYVoecTf38r4q8NUipaLhZYP8HwXnAGyj5oewaOIwWaev6vYvECvd3a9YPAJZjj6X%2F5PNrznlKeCLFCfqPJyf9LxnBcGHcJeNcRkvwM6JcoNSc%2FbgItXWQfb3k32Az4YOWI%2FzMws1fBrvT5pgKVYzo7bD9RLX7Q%2FiQZWT7OY5FSCBhjU%2BLwN3q6LbfeWRb1bQLPoeYrrTdeFAs1f8s1LbMjGkckHQAlTOu8uk9baFXxJ971nCdAjbQxbq%2BL2%2BnNXlL1Z8ZNyxhVRz%2BkZiv8BEKWWJ9iyehnucm8yyhUZ50MTJPS48OSFoGlt4Y0y%2FnBSlgbzD7vGNE2iHqco%2Bbk2sZl3pHLwMSex5J7uVSNZdqGo6%2BJjkw0kMnyqvf4rskoM9gY5s3tPu6C04k6A89mKibXt0SEkD%2B8snz7gGlJYCgy7fkmPiMWKeLicxp%2FCOLcXTNoX4GsIcXQwFcB50QsH63dfEnAH9F3TNlNn3hurbfxn1wvKTtXKw1bBYcptRpXwwSyBCOlDGlRGp3ggc5XQq9FgBZQCYi2dUbLoovvLlCS1dTAzMLach8EGOqUBjiZ1jSsOycYYAoYdBPhcPRYhnoD37NfKC%2FbjBDtDDNsvfBww5xmjZL0VdHl%2Bo9UQwlESjbHYDROl%2BNXSX5G7qJB9Tvqxv2ntwyPFHth3H4IVjRz8RBpbTOGIvCoCzXxkVhIY%2BUVEu8IbP%2F4yPWFPn13ejc%2BJ8BLcp5syE0x%2BabWdZLA%2F8lEC30u8pTgu0SrtU8tBe8mf6zcC0lupq7062bOwf0Bw&X-Amz-Signature=fd70ce11b77de3a37e43c1dabf314ae4ffad66458707ce93c4f3ba66cea642a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRBJVU6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGYwtmw%2F8FV223OwBxEl%2BOASmanyTBPClpcDM6Cq5T9ZAiEAjIoFkLo%2FYRIJJQAJhP8cg26Ywx6t4XUlaq8A0wZyh6gqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJJlZz2YO9%2BQ%2FKwircA0Tj1woPWFCnhiEnaVudMJTu1V3xLdPiI2%2Bo0MtWrOFMkx5fhwc5FCT8WKBVfyAJuvpJbvu7E%2B2zoYVoecTf38r4q8NUipaLhZYP8HwXnAGyj5oewaOIwWaev6vYvECvd3a9YPAJZjj6X%2F5PNrznlKeCLFCfqPJyf9LxnBcGHcJeNcRkvwM6JcoNSc%2FbgItXWQfb3k32Az4YOWI%2FzMws1fBrvT5pgKVYzo7bD9RLX7Q%2FiQZWT7OY5FSCBhjU%2BLwN3q6LbfeWRb1bQLPoeYrrTdeFAs1f8s1LbMjGkckHQAlTOu8uk9baFXxJ971nCdAjbQxbq%2BL2%2BnNXlL1Z8ZNyxhVRz%2BkZiv8BEKWWJ9iyehnucm8yyhUZ50MTJPS48OSFoGlt4Y0y%2FnBSlgbzD7vGNE2iHqco%2Bbk2sZl3pHLwMSex5J7uVSNZdqGo6%2BJjkw0kMnyqvf4rskoM9gY5s3tPu6C04k6A89mKibXt0SEkD%2B8snz7gGlJYCgy7fkmPiMWKeLicxp%2FCOLcXTNoX4GsIcXQwFcB50QsH63dfEnAH9F3TNlNn3hurbfxn1wvKTtXKw1bBYcptRpXwwSyBCOlDGlRGp3ggc5XQq9FgBZQCYi2dUbLoovvLlCS1dTAzMLach8EGOqUBjiZ1jSsOycYYAoYdBPhcPRYhnoD37NfKC%2FbjBDtDDNsvfBww5xmjZL0VdHl%2Bo9UQwlESjbHYDROl%2BNXSX5G7qJB9Tvqxv2ntwyPFHth3H4IVjRz8RBpbTOGIvCoCzXxkVhIY%2BUVEu8IbP%2F4yPWFPn13ejc%2BJ8BLcp5syE0x%2BabWdZLA%2F8lEC30u8pTgu0SrtU8tBe8mf6zcC0lupq7062bOwf0Bw&X-Amz-Signature=39e3dfc57e43b188953bc7070ffef7ea0747c7177352efd34d2f9d4a55b8f306&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRBJVU6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGYwtmw%2F8FV223OwBxEl%2BOASmanyTBPClpcDM6Cq5T9ZAiEAjIoFkLo%2FYRIJJQAJhP8cg26Ywx6t4XUlaq8A0wZyh6gqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJJlZz2YO9%2BQ%2FKwircA0Tj1woPWFCnhiEnaVudMJTu1V3xLdPiI2%2Bo0MtWrOFMkx5fhwc5FCT8WKBVfyAJuvpJbvu7E%2B2zoYVoecTf38r4q8NUipaLhZYP8HwXnAGyj5oewaOIwWaev6vYvECvd3a9YPAJZjj6X%2F5PNrznlKeCLFCfqPJyf9LxnBcGHcJeNcRkvwM6JcoNSc%2FbgItXWQfb3k32Az4YOWI%2FzMws1fBrvT5pgKVYzo7bD9RLX7Q%2FiQZWT7OY5FSCBhjU%2BLwN3q6LbfeWRb1bQLPoeYrrTdeFAs1f8s1LbMjGkckHQAlTOu8uk9baFXxJ971nCdAjbQxbq%2BL2%2BnNXlL1Z8ZNyxhVRz%2BkZiv8BEKWWJ9iyehnucm8yyhUZ50MTJPS48OSFoGlt4Y0y%2FnBSlgbzD7vGNE2iHqco%2Bbk2sZl3pHLwMSex5J7uVSNZdqGo6%2BJjkw0kMnyqvf4rskoM9gY5s3tPu6C04k6A89mKibXt0SEkD%2B8snz7gGlJYCgy7fkmPiMWKeLicxp%2FCOLcXTNoX4GsIcXQwFcB50QsH63dfEnAH9F3TNlNn3hurbfxn1wvKTtXKw1bBYcptRpXwwSyBCOlDGlRGp3ggc5XQq9FgBZQCYi2dUbLoovvLlCS1dTAzMLach8EGOqUBjiZ1jSsOycYYAoYdBPhcPRYhnoD37NfKC%2FbjBDtDDNsvfBww5xmjZL0VdHl%2Bo9UQwlESjbHYDROl%2BNXSX5G7qJB9Tvqxv2ntwyPFHth3H4IVjRz8RBpbTOGIvCoCzXxkVhIY%2BUVEu8IbP%2F4yPWFPn13ejc%2BJ8BLcp5syE0x%2BabWdZLA%2F8lEC30u8pTgu0SrtU8tBe8mf6zcC0lupq7062bOwf0Bw&X-Amz-Signature=0584ae946a8150c5b839525323530aa3f457f773561de2448478195afe78edd7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRBJVU6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGYwtmw%2F8FV223OwBxEl%2BOASmanyTBPClpcDM6Cq5T9ZAiEAjIoFkLo%2FYRIJJQAJhP8cg26Ywx6t4XUlaq8A0wZyh6gqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJJlZz2YO9%2BQ%2FKwircA0Tj1woPWFCnhiEnaVudMJTu1V3xLdPiI2%2Bo0MtWrOFMkx5fhwc5FCT8WKBVfyAJuvpJbvu7E%2B2zoYVoecTf38r4q8NUipaLhZYP8HwXnAGyj5oewaOIwWaev6vYvECvd3a9YPAJZjj6X%2F5PNrznlKeCLFCfqPJyf9LxnBcGHcJeNcRkvwM6JcoNSc%2FbgItXWQfb3k32Az4YOWI%2FzMws1fBrvT5pgKVYzo7bD9RLX7Q%2FiQZWT7OY5FSCBhjU%2BLwN3q6LbfeWRb1bQLPoeYrrTdeFAs1f8s1LbMjGkckHQAlTOu8uk9baFXxJ971nCdAjbQxbq%2BL2%2BnNXlL1Z8ZNyxhVRz%2BkZiv8BEKWWJ9iyehnucm8yyhUZ50MTJPS48OSFoGlt4Y0y%2FnBSlgbzD7vGNE2iHqco%2Bbk2sZl3pHLwMSex5J7uVSNZdqGo6%2BJjkw0kMnyqvf4rskoM9gY5s3tPu6C04k6A89mKibXt0SEkD%2B8snz7gGlJYCgy7fkmPiMWKeLicxp%2FCOLcXTNoX4GsIcXQwFcB50QsH63dfEnAH9F3TNlNn3hurbfxn1wvKTtXKw1bBYcptRpXwwSyBCOlDGlRGp3ggc5XQq9FgBZQCYi2dUbLoovvLlCS1dTAzMLach8EGOqUBjiZ1jSsOycYYAoYdBPhcPRYhnoD37NfKC%2FbjBDtDDNsvfBww5xmjZL0VdHl%2Bo9UQwlESjbHYDROl%2BNXSX5G7qJB9Tvqxv2ntwyPFHth3H4IVjRz8RBpbTOGIvCoCzXxkVhIY%2BUVEu8IbP%2F4yPWFPn13ejc%2BJ8BLcp5syE0x%2BabWdZLA%2F8lEC30u8pTgu0SrtU8tBe8mf6zcC0lupq7062bOwf0Bw&X-Amz-Signature=00951b53e55424c83504f36224dd2e37adb4dfa18da46d475a48a9358ae7b069&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRBJVU6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGYwtmw%2F8FV223OwBxEl%2BOASmanyTBPClpcDM6Cq5T9ZAiEAjIoFkLo%2FYRIJJQAJhP8cg26Ywx6t4XUlaq8A0wZyh6gqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJJlZz2YO9%2BQ%2FKwircA0Tj1woPWFCnhiEnaVudMJTu1V3xLdPiI2%2Bo0MtWrOFMkx5fhwc5FCT8WKBVfyAJuvpJbvu7E%2B2zoYVoecTf38r4q8NUipaLhZYP8HwXnAGyj5oewaOIwWaev6vYvECvd3a9YPAJZjj6X%2F5PNrznlKeCLFCfqPJyf9LxnBcGHcJeNcRkvwM6JcoNSc%2FbgItXWQfb3k32Az4YOWI%2FzMws1fBrvT5pgKVYzo7bD9RLX7Q%2FiQZWT7OY5FSCBhjU%2BLwN3q6LbfeWRb1bQLPoeYrrTdeFAs1f8s1LbMjGkckHQAlTOu8uk9baFXxJ971nCdAjbQxbq%2BL2%2BnNXlL1Z8ZNyxhVRz%2BkZiv8BEKWWJ9iyehnucm8yyhUZ50MTJPS48OSFoGlt4Y0y%2FnBSlgbzD7vGNE2iHqco%2Bbk2sZl3pHLwMSex5J7uVSNZdqGo6%2BJjkw0kMnyqvf4rskoM9gY5s3tPu6C04k6A89mKibXt0SEkD%2B8snz7gGlJYCgy7fkmPiMWKeLicxp%2FCOLcXTNoX4GsIcXQwFcB50QsH63dfEnAH9F3TNlNn3hurbfxn1wvKTtXKw1bBYcptRpXwwSyBCOlDGlRGp3ggc5XQq9FgBZQCYi2dUbLoovvLlCS1dTAzMLach8EGOqUBjiZ1jSsOycYYAoYdBPhcPRYhnoD37NfKC%2FbjBDtDDNsvfBww5xmjZL0VdHl%2Bo9UQwlESjbHYDROl%2BNXSX5G7qJB9Tvqxv2ntwyPFHth3H4IVjRz8RBpbTOGIvCoCzXxkVhIY%2BUVEu8IbP%2F4yPWFPn13ejc%2BJ8BLcp5syE0x%2BabWdZLA%2F8lEC30u8pTgu0SrtU8tBe8mf6zcC0lupq7062bOwf0Bw&X-Amz-Signature=5cc62e67e83fc00dfa2fefdf07682fbb28214cb18a2c85d4f9f3d4ba337a6042&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

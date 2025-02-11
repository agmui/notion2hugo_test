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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2NQR3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM%2B0aWz%2FRPFiCEfXP0Tg39mJ1r5XnK4yi3GBiHLfGEOAiBG9i5pzJiydWqObsY1Da5YOB7n9vEYQ0hnJQ%2F7lycIwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKnWrEA5cUM44VojKKtwDOYy14JySRXlohJh2Y%2Fvva4SPjvPEG0Dwf1srP1rwkCV9WlD4NLy008cfUtPDijNFByMoMsIVGRsfDp0NvUe0GjJVTXSFWEWgiMUFd%2F4vN3sNUXuGemiiRslX59U6%2BmvoaKBPKHPaj0601PAK9ru342uG0uC0Qj9zbWi2eSJPKkMJucgvhawdw47cmQ9SMXx0S8JJGLE5X3NoU6jO5bIhZzdk7MOPRgz30JkT%2BdqiTU1x%2BMRojfwpvoJ8j7QAoSzdXLzd5psPAJ6IVssBsUocGJl35ZUEqRWe%2FyhqSa%2FSwcr%2BkfgIBlXdYhOeq3fA2gnAg5OVZXfnTiqMsSfMUQ3QWJx%2Bh%2BoqlSO5KuGq7uvclRrjKdcT3FG%2BU1sg%2Ffvy%2BBb4sC2S%2BrN90CtrOiAllf9u3w%2BxfvuP6LinQ%2B87VVpBkH2ny1RFHfv5LtsUs%2BKl%2FRSE9l43LTCie7Bzq6r1Xb4AtTfvp%2Bh3kDvnkok1MFkfh2fFy%2FD1xQOg%2BK4P9DCf1g4vqk%2FKfh%2BLzRtLT60Z%2BPC2dxPNJeo5SL1GMRiV7yUywSTTmQiBtymt2fsQQwuxfo%2Bfq3qeIIvRA22hfS%2Bjq6Y9ns4XSHzo7X1VlevmpiPHKgE5%2FDq1C7nO5e%2FLf9Iwq62rvQY6pgFE7wOd%2BVrrHF8hfi19XfYYxo3BPQ0ujLnBf4HTeaWKD8EFiFUF3DT62xCtrGw%2BeIwEwxcGve3JHa6la3mw4Sn6sMeWX2OIy%2Fm3uJ0UdQzmkjwWF0IebfsiI1ZheZ3GrUj4cQIihkYrHliAX1J3mrFokfg0QgHOFvDFFPqubx%2BV5pdnrrAitYTQu4qG3QlRO4GyRuODLFeobWF1j9lMy%2FS3MMQudyas&X-Amz-Signature=45fd88801bc8ced9ddd644c1efb830b67fcef4f978aa531dacbccf192b2d4b30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2NQR3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM%2B0aWz%2FRPFiCEfXP0Tg39mJ1r5XnK4yi3GBiHLfGEOAiBG9i5pzJiydWqObsY1Da5YOB7n9vEYQ0hnJQ%2F7lycIwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKnWrEA5cUM44VojKKtwDOYy14JySRXlohJh2Y%2Fvva4SPjvPEG0Dwf1srP1rwkCV9WlD4NLy008cfUtPDijNFByMoMsIVGRsfDp0NvUe0GjJVTXSFWEWgiMUFd%2F4vN3sNUXuGemiiRslX59U6%2BmvoaKBPKHPaj0601PAK9ru342uG0uC0Qj9zbWi2eSJPKkMJucgvhawdw47cmQ9SMXx0S8JJGLE5X3NoU6jO5bIhZzdk7MOPRgz30JkT%2BdqiTU1x%2BMRojfwpvoJ8j7QAoSzdXLzd5psPAJ6IVssBsUocGJl35ZUEqRWe%2FyhqSa%2FSwcr%2BkfgIBlXdYhOeq3fA2gnAg5OVZXfnTiqMsSfMUQ3QWJx%2Bh%2BoqlSO5KuGq7uvclRrjKdcT3FG%2BU1sg%2Ffvy%2BBb4sC2S%2BrN90CtrOiAllf9u3w%2BxfvuP6LinQ%2B87VVpBkH2ny1RFHfv5LtsUs%2BKl%2FRSE9l43LTCie7Bzq6r1Xb4AtTfvp%2Bh3kDvnkok1MFkfh2fFy%2FD1xQOg%2BK4P9DCf1g4vqk%2FKfh%2BLzRtLT60Z%2BPC2dxPNJeo5SL1GMRiV7yUywSTTmQiBtymt2fsQQwuxfo%2Bfq3qeIIvRA22hfS%2Bjq6Y9ns4XSHzo7X1VlevmpiPHKgE5%2FDq1C7nO5e%2FLf9Iwq62rvQY6pgFE7wOd%2BVrrHF8hfi19XfYYxo3BPQ0ujLnBf4HTeaWKD8EFiFUF3DT62xCtrGw%2BeIwEwxcGve3JHa6la3mw4Sn6sMeWX2OIy%2Fm3uJ0UdQzmkjwWF0IebfsiI1ZheZ3GrUj4cQIihkYrHliAX1J3mrFokfg0QgHOFvDFFPqubx%2BV5pdnrrAitYTQu4qG3QlRO4GyRuODLFeobWF1j9lMy%2FS3MMQudyas&X-Amz-Signature=4152dd6103deb04773ee5d7a4c4ddb78098cd20e969bc1d9a3f2dc331f686aef&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2NQR3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM%2B0aWz%2FRPFiCEfXP0Tg39mJ1r5XnK4yi3GBiHLfGEOAiBG9i5pzJiydWqObsY1Da5YOB7n9vEYQ0hnJQ%2F7lycIwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKnWrEA5cUM44VojKKtwDOYy14JySRXlohJh2Y%2Fvva4SPjvPEG0Dwf1srP1rwkCV9WlD4NLy008cfUtPDijNFByMoMsIVGRsfDp0NvUe0GjJVTXSFWEWgiMUFd%2F4vN3sNUXuGemiiRslX59U6%2BmvoaKBPKHPaj0601PAK9ru342uG0uC0Qj9zbWi2eSJPKkMJucgvhawdw47cmQ9SMXx0S8JJGLE5X3NoU6jO5bIhZzdk7MOPRgz30JkT%2BdqiTU1x%2BMRojfwpvoJ8j7QAoSzdXLzd5psPAJ6IVssBsUocGJl35ZUEqRWe%2FyhqSa%2FSwcr%2BkfgIBlXdYhOeq3fA2gnAg5OVZXfnTiqMsSfMUQ3QWJx%2Bh%2BoqlSO5KuGq7uvclRrjKdcT3FG%2BU1sg%2Ffvy%2BBb4sC2S%2BrN90CtrOiAllf9u3w%2BxfvuP6LinQ%2B87VVpBkH2ny1RFHfv5LtsUs%2BKl%2FRSE9l43LTCie7Bzq6r1Xb4AtTfvp%2Bh3kDvnkok1MFkfh2fFy%2FD1xQOg%2BK4P9DCf1g4vqk%2FKfh%2BLzRtLT60Z%2BPC2dxPNJeo5SL1GMRiV7yUywSTTmQiBtymt2fsQQwuxfo%2Bfq3qeIIvRA22hfS%2Bjq6Y9ns4XSHzo7X1VlevmpiPHKgE5%2FDq1C7nO5e%2FLf9Iwq62rvQY6pgFE7wOd%2BVrrHF8hfi19XfYYxo3BPQ0ujLnBf4HTeaWKD8EFiFUF3DT62xCtrGw%2BeIwEwxcGve3JHa6la3mw4Sn6sMeWX2OIy%2Fm3uJ0UdQzmkjwWF0IebfsiI1ZheZ3GrUj4cQIihkYrHliAX1J3mrFokfg0QgHOFvDFFPqubx%2BV5pdnrrAitYTQu4qG3QlRO4GyRuODLFeobWF1j9lMy%2FS3MMQudyas&X-Amz-Signature=adbc73f27c0529c86117464924e05953de3173a7aadb73d806fda0e966b83292&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2NQR3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM%2B0aWz%2FRPFiCEfXP0Tg39mJ1r5XnK4yi3GBiHLfGEOAiBG9i5pzJiydWqObsY1Da5YOB7n9vEYQ0hnJQ%2F7lycIwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKnWrEA5cUM44VojKKtwDOYy14JySRXlohJh2Y%2Fvva4SPjvPEG0Dwf1srP1rwkCV9WlD4NLy008cfUtPDijNFByMoMsIVGRsfDp0NvUe0GjJVTXSFWEWgiMUFd%2F4vN3sNUXuGemiiRslX59U6%2BmvoaKBPKHPaj0601PAK9ru342uG0uC0Qj9zbWi2eSJPKkMJucgvhawdw47cmQ9SMXx0S8JJGLE5X3NoU6jO5bIhZzdk7MOPRgz30JkT%2BdqiTU1x%2BMRojfwpvoJ8j7QAoSzdXLzd5psPAJ6IVssBsUocGJl35ZUEqRWe%2FyhqSa%2FSwcr%2BkfgIBlXdYhOeq3fA2gnAg5OVZXfnTiqMsSfMUQ3QWJx%2Bh%2BoqlSO5KuGq7uvclRrjKdcT3FG%2BU1sg%2Ffvy%2BBb4sC2S%2BrN90CtrOiAllf9u3w%2BxfvuP6LinQ%2B87VVpBkH2ny1RFHfv5LtsUs%2BKl%2FRSE9l43LTCie7Bzq6r1Xb4AtTfvp%2Bh3kDvnkok1MFkfh2fFy%2FD1xQOg%2BK4P9DCf1g4vqk%2FKfh%2BLzRtLT60Z%2BPC2dxPNJeo5SL1GMRiV7yUywSTTmQiBtymt2fsQQwuxfo%2Bfq3qeIIvRA22hfS%2Bjq6Y9ns4XSHzo7X1VlevmpiPHKgE5%2FDq1C7nO5e%2FLf9Iwq62rvQY6pgFE7wOd%2BVrrHF8hfi19XfYYxo3BPQ0ujLnBf4HTeaWKD8EFiFUF3DT62xCtrGw%2BeIwEwxcGve3JHa6la3mw4Sn6sMeWX2OIy%2Fm3uJ0UdQzmkjwWF0IebfsiI1ZheZ3GrUj4cQIihkYrHliAX1J3mrFokfg0QgHOFvDFFPqubx%2BV5pdnrrAitYTQu4qG3QlRO4GyRuODLFeobWF1j9lMy%2FS3MMQudyas&X-Amz-Signature=4baedbf9f5a5fa846361ab30b1eae6c585f0fa02fb11648b9b946170bbb94802&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2NQR3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM%2B0aWz%2FRPFiCEfXP0Tg39mJ1r5XnK4yi3GBiHLfGEOAiBG9i5pzJiydWqObsY1Da5YOB7n9vEYQ0hnJQ%2F7lycIwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKnWrEA5cUM44VojKKtwDOYy14JySRXlohJh2Y%2Fvva4SPjvPEG0Dwf1srP1rwkCV9WlD4NLy008cfUtPDijNFByMoMsIVGRsfDp0NvUe0GjJVTXSFWEWgiMUFd%2F4vN3sNUXuGemiiRslX59U6%2BmvoaKBPKHPaj0601PAK9ru342uG0uC0Qj9zbWi2eSJPKkMJucgvhawdw47cmQ9SMXx0S8JJGLE5X3NoU6jO5bIhZzdk7MOPRgz30JkT%2BdqiTU1x%2BMRojfwpvoJ8j7QAoSzdXLzd5psPAJ6IVssBsUocGJl35ZUEqRWe%2FyhqSa%2FSwcr%2BkfgIBlXdYhOeq3fA2gnAg5OVZXfnTiqMsSfMUQ3QWJx%2Bh%2BoqlSO5KuGq7uvclRrjKdcT3FG%2BU1sg%2Ffvy%2BBb4sC2S%2BrN90CtrOiAllf9u3w%2BxfvuP6LinQ%2B87VVpBkH2ny1RFHfv5LtsUs%2BKl%2FRSE9l43LTCie7Bzq6r1Xb4AtTfvp%2Bh3kDvnkok1MFkfh2fFy%2FD1xQOg%2BK4P9DCf1g4vqk%2FKfh%2BLzRtLT60Z%2BPC2dxPNJeo5SL1GMRiV7yUywSTTmQiBtymt2fsQQwuxfo%2Bfq3qeIIvRA22hfS%2Bjq6Y9ns4XSHzo7X1VlevmpiPHKgE5%2FDq1C7nO5e%2FLf9Iwq62rvQY6pgFE7wOd%2BVrrHF8hfi19XfYYxo3BPQ0ujLnBf4HTeaWKD8EFiFUF3DT62xCtrGw%2BeIwEwxcGve3JHa6la3mw4Sn6sMeWX2OIy%2Fm3uJ0UdQzmkjwWF0IebfsiI1ZheZ3GrUj4cQIihkYrHliAX1J3mrFokfg0QgHOFvDFFPqubx%2BV5pdnrrAitYTQu4qG3QlRO4GyRuODLFeobWF1j9lMy%2FS3MMQudyas&X-Amz-Signature=63e3cd583c50b01ae5ab8334580b3a4939f13a6f60954f1e007cfb109a650f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2NQR3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM%2B0aWz%2FRPFiCEfXP0Tg39mJ1r5XnK4yi3GBiHLfGEOAiBG9i5pzJiydWqObsY1Da5YOB7n9vEYQ0hnJQ%2F7lycIwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKnWrEA5cUM44VojKKtwDOYy14JySRXlohJh2Y%2Fvva4SPjvPEG0Dwf1srP1rwkCV9WlD4NLy008cfUtPDijNFByMoMsIVGRsfDp0NvUe0GjJVTXSFWEWgiMUFd%2F4vN3sNUXuGemiiRslX59U6%2BmvoaKBPKHPaj0601PAK9ru342uG0uC0Qj9zbWi2eSJPKkMJucgvhawdw47cmQ9SMXx0S8JJGLE5X3NoU6jO5bIhZzdk7MOPRgz30JkT%2BdqiTU1x%2BMRojfwpvoJ8j7QAoSzdXLzd5psPAJ6IVssBsUocGJl35ZUEqRWe%2FyhqSa%2FSwcr%2BkfgIBlXdYhOeq3fA2gnAg5OVZXfnTiqMsSfMUQ3QWJx%2Bh%2BoqlSO5KuGq7uvclRrjKdcT3FG%2BU1sg%2Ffvy%2BBb4sC2S%2BrN90CtrOiAllf9u3w%2BxfvuP6LinQ%2B87VVpBkH2ny1RFHfv5LtsUs%2BKl%2FRSE9l43LTCie7Bzq6r1Xb4AtTfvp%2Bh3kDvnkok1MFkfh2fFy%2FD1xQOg%2BK4P9DCf1g4vqk%2FKfh%2BLzRtLT60Z%2BPC2dxPNJeo5SL1GMRiV7yUywSTTmQiBtymt2fsQQwuxfo%2Bfq3qeIIvRA22hfS%2Bjq6Y9ns4XSHzo7X1VlevmpiPHKgE5%2FDq1C7nO5e%2FLf9Iwq62rvQY6pgFE7wOd%2BVrrHF8hfi19XfYYxo3BPQ0ujLnBf4HTeaWKD8EFiFUF3DT62xCtrGw%2BeIwEwxcGve3JHa6la3mw4Sn6sMeWX2OIy%2Fm3uJ0UdQzmkjwWF0IebfsiI1ZheZ3GrUj4cQIihkYrHliAX1J3mrFokfg0QgHOFvDFFPqubx%2BV5pdnrrAitYTQu4qG3QlRO4GyRuODLFeobWF1j9lMy%2FS3MMQudyas&X-Amz-Signature=bb5907d0865210edad6ab250164086e9d28bcb6c1419b9311af93689bcbc63a2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2NQR3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM%2B0aWz%2FRPFiCEfXP0Tg39mJ1r5XnK4yi3GBiHLfGEOAiBG9i5pzJiydWqObsY1Da5YOB7n9vEYQ0hnJQ%2F7lycIwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKnWrEA5cUM44VojKKtwDOYy14JySRXlohJh2Y%2Fvva4SPjvPEG0Dwf1srP1rwkCV9WlD4NLy008cfUtPDijNFByMoMsIVGRsfDp0NvUe0GjJVTXSFWEWgiMUFd%2F4vN3sNUXuGemiiRslX59U6%2BmvoaKBPKHPaj0601PAK9ru342uG0uC0Qj9zbWi2eSJPKkMJucgvhawdw47cmQ9SMXx0S8JJGLE5X3NoU6jO5bIhZzdk7MOPRgz30JkT%2BdqiTU1x%2BMRojfwpvoJ8j7QAoSzdXLzd5psPAJ6IVssBsUocGJl35ZUEqRWe%2FyhqSa%2FSwcr%2BkfgIBlXdYhOeq3fA2gnAg5OVZXfnTiqMsSfMUQ3QWJx%2Bh%2BoqlSO5KuGq7uvclRrjKdcT3FG%2BU1sg%2Ffvy%2BBb4sC2S%2BrN90CtrOiAllf9u3w%2BxfvuP6LinQ%2B87VVpBkH2ny1RFHfv5LtsUs%2BKl%2FRSE9l43LTCie7Bzq6r1Xb4AtTfvp%2Bh3kDvnkok1MFkfh2fFy%2FD1xQOg%2BK4P9DCf1g4vqk%2FKfh%2BLzRtLT60Z%2BPC2dxPNJeo5SL1GMRiV7yUywSTTmQiBtymt2fsQQwuxfo%2Bfq3qeIIvRA22hfS%2Bjq6Y9ns4XSHzo7X1VlevmpiPHKgE5%2FDq1C7nO5e%2FLf9Iwq62rvQY6pgFE7wOd%2BVrrHF8hfi19XfYYxo3BPQ0ujLnBf4HTeaWKD8EFiFUF3DT62xCtrGw%2BeIwEwxcGve3JHa6la3mw4Sn6sMeWX2OIy%2Fm3uJ0UdQzmkjwWF0IebfsiI1ZheZ3GrUj4cQIihkYrHliAX1J3mrFokfg0QgHOFvDFFPqubx%2BV5pdnrrAitYTQu4qG3QlRO4GyRuODLFeobWF1j9lMy%2FS3MMQudyas&X-Amz-Signature=b6fbb2be8d82ec55070c13095f6aa0bf97aa4dbe10d70e27c856b9a492796160&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

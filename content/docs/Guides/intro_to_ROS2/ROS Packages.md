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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZ7QEY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH0OiaNPGeMSeLdcIH9WA2A89vaBZ5VeXyFRAInIr0kmAiEA%2BsbALEsJHCuJX%2FrdBwI1gA4yIrTMrJp3nTImfswky1Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLSnzz%2BpNhKd0arvtircA5HzsAZLUsAe3SVBREaODIAaApRzs0qYLLkkaeDolZmNOD1UTeDvU3aW3L7PwAwwQiV2Tjn4bVQPrLACahchhfEBskYYEBLLSPHcW4FQRV5fYuPjeb87kHwXbAhPvNxXjE%2FUcPq2Up2mF0yER07q%2BspSZ5%2BhMjrKB4554K6sNAO%2FxJBkSKJDocKkKOlUpLC3VBll5nEpusfyJgp9WTMJkQuVeceXh3k%2BSGGwNiAPauej5FvYsKrE6p9VKdXy5WfDmtfkh12a4zmKDFfVQf04emfGhh9%2BVWZPhmhGE4hzO6wHmUDOOpZjKJpU4CBFSmb1P3CMPDp%2FoG7CvkiQhn81qecYp5l%2FmpuZDRWf9R2H4eqS%2FnQ%2BHAgyCEWmiRZ0O9vE4A4NeskaWBGwsj09s7t5DXywva%2BWOhOkSrqQRin7jbimdNhsrcXnY6TDx9RbmslqZRna6mmoQKDgDiaS%2BpIgF7tmdBohUr1Su4MHhCXrg7NiexwsH16SmmK6VJX4ib%2BOYblfTevalnorIpiSLdt6Y7zIxiED7mNhW7ZOXOmr0mOt%2BvnE2L6LlriTX2mrUsfVkn6O5n20h0bau%2B3%2FQ91y5q8riJ1gZgZDGcYp6fVafrGrZhuI6jJoTAX9TOBfMIOguL4GOqUBEMU1AXaIQ72uYlWJhPWCYr%2B92bgWrzZjo0XmZdl4wudLCJYs8JLImc9WjHb1RZWtWtaHs6mMBAhGI3PrQYKFE7GxQl4mHJ9OyEiaWvBzrtXKbQuKTwHwUw1nyIFBaa5x7PDx9spT9OysSAVMj56AZajd2F8ZvGwdDEgpAtHPqREruCDw712G7v67VEtXXnppURkff1eYRR%2F%2Bd0Mu0%2FauIAPvi9PD&X-Amz-Signature=1fb167b174832bc806b03f8c149b7aea9c9595a0488b5a0a53f7ba331a2fca0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZ7QEY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH0OiaNPGeMSeLdcIH9WA2A89vaBZ5VeXyFRAInIr0kmAiEA%2BsbALEsJHCuJX%2FrdBwI1gA4yIrTMrJp3nTImfswky1Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLSnzz%2BpNhKd0arvtircA5HzsAZLUsAe3SVBREaODIAaApRzs0qYLLkkaeDolZmNOD1UTeDvU3aW3L7PwAwwQiV2Tjn4bVQPrLACahchhfEBskYYEBLLSPHcW4FQRV5fYuPjeb87kHwXbAhPvNxXjE%2FUcPq2Up2mF0yER07q%2BspSZ5%2BhMjrKB4554K6sNAO%2FxJBkSKJDocKkKOlUpLC3VBll5nEpusfyJgp9WTMJkQuVeceXh3k%2BSGGwNiAPauej5FvYsKrE6p9VKdXy5WfDmtfkh12a4zmKDFfVQf04emfGhh9%2BVWZPhmhGE4hzO6wHmUDOOpZjKJpU4CBFSmb1P3CMPDp%2FoG7CvkiQhn81qecYp5l%2FmpuZDRWf9R2H4eqS%2FnQ%2BHAgyCEWmiRZ0O9vE4A4NeskaWBGwsj09s7t5DXywva%2BWOhOkSrqQRin7jbimdNhsrcXnY6TDx9RbmslqZRna6mmoQKDgDiaS%2BpIgF7tmdBohUr1Su4MHhCXrg7NiexwsH16SmmK6VJX4ib%2BOYblfTevalnorIpiSLdt6Y7zIxiED7mNhW7ZOXOmr0mOt%2BvnE2L6LlriTX2mrUsfVkn6O5n20h0bau%2B3%2FQ91y5q8riJ1gZgZDGcYp6fVafrGrZhuI6jJoTAX9TOBfMIOguL4GOqUBEMU1AXaIQ72uYlWJhPWCYr%2B92bgWrzZjo0XmZdl4wudLCJYs8JLImc9WjHb1RZWtWtaHs6mMBAhGI3PrQYKFE7GxQl4mHJ9OyEiaWvBzrtXKbQuKTwHwUw1nyIFBaa5x7PDx9spT9OysSAVMj56AZajd2F8ZvGwdDEgpAtHPqREruCDw712G7v67VEtXXnppURkff1eYRR%2F%2Bd0Mu0%2FauIAPvi9PD&X-Amz-Signature=8faf47b098c7ad1d0cc963e4418d58e270cdae7136392505f471775030d3781a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZ7QEY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH0OiaNPGeMSeLdcIH9WA2A89vaBZ5VeXyFRAInIr0kmAiEA%2BsbALEsJHCuJX%2FrdBwI1gA4yIrTMrJp3nTImfswky1Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLSnzz%2BpNhKd0arvtircA5HzsAZLUsAe3SVBREaODIAaApRzs0qYLLkkaeDolZmNOD1UTeDvU3aW3L7PwAwwQiV2Tjn4bVQPrLACahchhfEBskYYEBLLSPHcW4FQRV5fYuPjeb87kHwXbAhPvNxXjE%2FUcPq2Up2mF0yER07q%2BspSZ5%2BhMjrKB4554K6sNAO%2FxJBkSKJDocKkKOlUpLC3VBll5nEpusfyJgp9WTMJkQuVeceXh3k%2BSGGwNiAPauej5FvYsKrE6p9VKdXy5WfDmtfkh12a4zmKDFfVQf04emfGhh9%2BVWZPhmhGE4hzO6wHmUDOOpZjKJpU4CBFSmb1P3CMPDp%2FoG7CvkiQhn81qecYp5l%2FmpuZDRWf9R2H4eqS%2FnQ%2BHAgyCEWmiRZ0O9vE4A4NeskaWBGwsj09s7t5DXywva%2BWOhOkSrqQRin7jbimdNhsrcXnY6TDx9RbmslqZRna6mmoQKDgDiaS%2BpIgF7tmdBohUr1Su4MHhCXrg7NiexwsH16SmmK6VJX4ib%2BOYblfTevalnorIpiSLdt6Y7zIxiED7mNhW7ZOXOmr0mOt%2BvnE2L6LlriTX2mrUsfVkn6O5n20h0bau%2B3%2FQ91y5q8riJ1gZgZDGcYp6fVafrGrZhuI6jJoTAX9TOBfMIOguL4GOqUBEMU1AXaIQ72uYlWJhPWCYr%2B92bgWrzZjo0XmZdl4wudLCJYs8JLImc9WjHb1RZWtWtaHs6mMBAhGI3PrQYKFE7GxQl4mHJ9OyEiaWvBzrtXKbQuKTwHwUw1nyIFBaa5x7PDx9spT9OysSAVMj56AZajd2F8ZvGwdDEgpAtHPqREruCDw712G7v67VEtXXnppURkff1eYRR%2F%2Bd0Mu0%2FauIAPvi9PD&X-Amz-Signature=ffd3c3aca7059d42751fb7cecb08b92589d9243f533e104bb2da82063c1b2b39&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZ7QEY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH0OiaNPGeMSeLdcIH9WA2A89vaBZ5VeXyFRAInIr0kmAiEA%2BsbALEsJHCuJX%2FrdBwI1gA4yIrTMrJp3nTImfswky1Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLSnzz%2BpNhKd0arvtircA5HzsAZLUsAe3SVBREaODIAaApRzs0qYLLkkaeDolZmNOD1UTeDvU3aW3L7PwAwwQiV2Tjn4bVQPrLACahchhfEBskYYEBLLSPHcW4FQRV5fYuPjeb87kHwXbAhPvNxXjE%2FUcPq2Up2mF0yER07q%2BspSZ5%2BhMjrKB4554K6sNAO%2FxJBkSKJDocKkKOlUpLC3VBll5nEpusfyJgp9WTMJkQuVeceXh3k%2BSGGwNiAPauej5FvYsKrE6p9VKdXy5WfDmtfkh12a4zmKDFfVQf04emfGhh9%2BVWZPhmhGE4hzO6wHmUDOOpZjKJpU4CBFSmb1P3CMPDp%2FoG7CvkiQhn81qecYp5l%2FmpuZDRWf9R2H4eqS%2FnQ%2BHAgyCEWmiRZ0O9vE4A4NeskaWBGwsj09s7t5DXywva%2BWOhOkSrqQRin7jbimdNhsrcXnY6TDx9RbmslqZRna6mmoQKDgDiaS%2BpIgF7tmdBohUr1Su4MHhCXrg7NiexwsH16SmmK6VJX4ib%2BOYblfTevalnorIpiSLdt6Y7zIxiED7mNhW7ZOXOmr0mOt%2BvnE2L6LlriTX2mrUsfVkn6O5n20h0bau%2B3%2FQ91y5q8riJ1gZgZDGcYp6fVafrGrZhuI6jJoTAX9TOBfMIOguL4GOqUBEMU1AXaIQ72uYlWJhPWCYr%2B92bgWrzZjo0XmZdl4wudLCJYs8JLImc9WjHb1RZWtWtaHs6mMBAhGI3PrQYKFE7GxQl4mHJ9OyEiaWvBzrtXKbQuKTwHwUw1nyIFBaa5x7PDx9spT9OysSAVMj56AZajd2F8ZvGwdDEgpAtHPqREruCDw712G7v67VEtXXnppURkff1eYRR%2F%2Bd0Mu0%2FauIAPvi9PD&X-Amz-Signature=6aeabb07d1084cca78cb30a4e3210ca4703ddf2fa73d166d070d18632940fc53&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZ7QEY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH0OiaNPGeMSeLdcIH9WA2A89vaBZ5VeXyFRAInIr0kmAiEA%2BsbALEsJHCuJX%2FrdBwI1gA4yIrTMrJp3nTImfswky1Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLSnzz%2BpNhKd0arvtircA5HzsAZLUsAe3SVBREaODIAaApRzs0qYLLkkaeDolZmNOD1UTeDvU3aW3L7PwAwwQiV2Tjn4bVQPrLACahchhfEBskYYEBLLSPHcW4FQRV5fYuPjeb87kHwXbAhPvNxXjE%2FUcPq2Up2mF0yER07q%2BspSZ5%2BhMjrKB4554K6sNAO%2FxJBkSKJDocKkKOlUpLC3VBll5nEpusfyJgp9WTMJkQuVeceXh3k%2BSGGwNiAPauej5FvYsKrE6p9VKdXy5WfDmtfkh12a4zmKDFfVQf04emfGhh9%2BVWZPhmhGE4hzO6wHmUDOOpZjKJpU4CBFSmb1P3CMPDp%2FoG7CvkiQhn81qecYp5l%2FmpuZDRWf9R2H4eqS%2FnQ%2BHAgyCEWmiRZ0O9vE4A4NeskaWBGwsj09s7t5DXywva%2BWOhOkSrqQRin7jbimdNhsrcXnY6TDx9RbmslqZRna6mmoQKDgDiaS%2BpIgF7tmdBohUr1Su4MHhCXrg7NiexwsH16SmmK6VJX4ib%2BOYblfTevalnorIpiSLdt6Y7zIxiED7mNhW7ZOXOmr0mOt%2BvnE2L6LlriTX2mrUsfVkn6O5n20h0bau%2B3%2FQ91y5q8riJ1gZgZDGcYp6fVafrGrZhuI6jJoTAX9TOBfMIOguL4GOqUBEMU1AXaIQ72uYlWJhPWCYr%2B92bgWrzZjo0XmZdl4wudLCJYs8JLImc9WjHb1RZWtWtaHs6mMBAhGI3PrQYKFE7GxQl4mHJ9OyEiaWvBzrtXKbQuKTwHwUw1nyIFBaa5x7PDx9spT9OysSAVMj56AZajd2F8ZvGwdDEgpAtHPqREruCDw712G7v67VEtXXnppURkff1eYRR%2F%2Bd0Mu0%2FauIAPvi9PD&X-Amz-Signature=2523065d4cd8f61ddfb339d0358fd8cd7ec1f50f68810fda290c61a5635b17db&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZ7QEY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH0OiaNPGeMSeLdcIH9WA2A89vaBZ5VeXyFRAInIr0kmAiEA%2BsbALEsJHCuJX%2FrdBwI1gA4yIrTMrJp3nTImfswky1Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLSnzz%2BpNhKd0arvtircA5HzsAZLUsAe3SVBREaODIAaApRzs0qYLLkkaeDolZmNOD1UTeDvU3aW3L7PwAwwQiV2Tjn4bVQPrLACahchhfEBskYYEBLLSPHcW4FQRV5fYuPjeb87kHwXbAhPvNxXjE%2FUcPq2Up2mF0yER07q%2BspSZ5%2BhMjrKB4554K6sNAO%2FxJBkSKJDocKkKOlUpLC3VBll5nEpusfyJgp9WTMJkQuVeceXh3k%2BSGGwNiAPauej5FvYsKrE6p9VKdXy5WfDmtfkh12a4zmKDFfVQf04emfGhh9%2BVWZPhmhGE4hzO6wHmUDOOpZjKJpU4CBFSmb1P3CMPDp%2FoG7CvkiQhn81qecYp5l%2FmpuZDRWf9R2H4eqS%2FnQ%2BHAgyCEWmiRZ0O9vE4A4NeskaWBGwsj09s7t5DXywva%2BWOhOkSrqQRin7jbimdNhsrcXnY6TDx9RbmslqZRna6mmoQKDgDiaS%2BpIgF7tmdBohUr1Su4MHhCXrg7NiexwsH16SmmK6VJX4ib%2BOYblfTevalnorIpiSLdt6Y7zIxiED7mNhW7ZOXOmr0mOt%2BvnE2L6LlriTX2mrUsfVkn6O5n20h0bau%2B3%2FQ91y5q8riJ1gZgZDGcYp6fVafrGrZhuI6jJoTAX9TOBfMIOguL4GOqUBEMU1AXaIQ72uYlWJhPWCYr%2B92bgWrzZjo0XmZdl4wudLCJYs8JLImc9WjHb1RZWtWtaHs6mMBAhGI3PrQYKFE7GxQl4mHJ9OyEiaWvBzrtXKbQuKTwHwUw1nyIFBaa5x7PDx9spT9OysSAVMj56AZajd2F8ZvGwdDEgpAtHPqREruCDw712G7v67VEtXXnppURkff1eYRR%2F%2Bd0Mu0%2FauIAPvi9PD&X-Amz-Signature=17299d05e0a1ec612ccd87ce4a7ee5532f8192e8056c559801e37060c8c2362c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZ7QEY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH0OiaNPGeMSeLdcIH9WA2A89vaBZ5VeXyFRAInIr0kmAiEA%2BsbALEsJHCuJX%2FrdBwI1gA4yIrTMrJp3nTImfswky1Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLSnzz%2BpNhKd0arvtircA5HzsAZLUsAe3SVBREaODIAaApRzs0qYLLkkaeDolZmNOD1UTeDvU3aW3L7PwAwwQiV2Tjn4bVQPrLACahchhfEBskYYEBLLSPHcW4FQRV5fYuPjeb87kHwXbAhPvNxXjE%2FUcPq2Up2mF0yER07q%2BspSZ5%2BhMjrKB4554K6sNAO%2FxJBkSKJDocKkKOlUpLC3VBll5nEpusfyJgp9WTMJkQuVeceXh3k%2BSGGwNiAPauej5FvYsKrE6p9VKdXy5WfDmtfkh12a4zmKDFfVQf04emfGhh9%2BVWZPhmhGE4hzO6wHmUDOOpZjKJpU4CBFSmb1P3CMPDp%2FoG7CvkiQhn81qecYp5l%2FmpuZDRWf9R2H4eqS%2FnQ%2BHAgyCEWmiRZ0O9vE4A4NeskaWBGwsj09s7t5DXywva%2BWOhOkSrqQRin7jbimdNhsrcXnY6TDx9RbmslqZRna6mmoQKDgDiaS%2BpIgF7tmdBohUr1Su4MHhCXrg7NiexwsH16SmmK6VJX4ib%2BOYblfTevalnorIpiSLdt6Y7zIxiED7mNhW7ZOXOmr0mOt%2BvnE2L6LlriTX2mrUsfVkn6O5n20h0bau%2B3%2FQ91y5q8riJ1gZgZDGcYp6fVafrGrZhuI6jJoTAX9TOBfMIOguL4GOqUBEMU1AXaIQ72uYlWJhPWCYr%2B92bgWrzZjo0XmZdl4wudLCJYs8JLImc9WjHb1RZWtWtaHs6mMBAhGI3PrQYKFE7GxQl4mHJ9OyEiaWvBzrtXKbQuKTwHwUw1nyIFBaa5x7PDx9spT9OysSAVMj56AZajd2F8ZvGwdDEgpAtHPqREruCDw712G7v67VEtXXnppURkff1eYRR%2F%2Bd0Mu0%2FauIAPvi9PD&X-Amz-Signature=f9e8e98c43818b07c5c3ed205c48b63430c336f87f774e8ad1b916476c09f407&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

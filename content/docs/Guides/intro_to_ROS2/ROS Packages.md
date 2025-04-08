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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDEMWL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCknDjzARtirmFeQzD4Bg8UciHHobVjVq%2BsDPZFlrIDAiEA7zJNCGomayML9%2Byd4M7tR1YW%2FzWZOIKpEGgdcrLvO4Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGBbmVz1k8SyRdqBNyrcA%2F37dL%2Bz2S3%2BXCjWTVMU2YG5XmZlnFyWaUJ0FupmRdfhf1ZlwQvNy0wJUK1Xo3fo0%2FbIPA85u5QvNxNpPV%2Biv%2FAGiJ1wI0DP%2Femn76r6v%2FsBMAXYTTh8y0pSenlwzbOmqVU66RUKGhrws0Ius0U8EQ7u569psQ2KFGvUgpG2aBt3IueXAH8ev1x17SE9YBD6VaT3nVG7fOb5FKEzor5hhSUXh0Kpl5p4ng4UUfOjSB8c9ucFBKHc2ugDAEavWIz3GYEWkdkO6EnTTlLGf7Q0K97CmYrko3WTx4mBuII8rCWJd%2FryUbDY3joJHSbOKyHX5lopohZbAK6Iq2LWcpeTjU%2Bjo6sA%2Fked4RiVbaTFFSlL8VlOwVC3A0D8v3%2BGXgWSmX7Ifw9fyBp9YQ35is%2B%2BtIO8lriFeMNFr24gv2LL7PWJrQ3mDwxNu2RsaZeoTpOyH2KJ0JvaDPM43Yo1PEDzZxOpZRgLmrrZKcF8QJ5cpimk3GTBe4C%2BI9YZaOP1kmyWl1kT9C%2F3Kt1qFbwComTcplKjSel4vaERNE742GoYxTX7Tz6kXGIrKttVzVN4%2FAqu7oCj4SpZq5O%2F29tz2pabRSsX4jwYxezFEP73tp4uUMuLXIm7ukrD1neiaLqNMPTX1L8GOqUB3Tua4%2BO1Rlt%2BHMIdPHTRCx51fbb5DgWps3BkKxJXpw1CsFtBJeGgY8%2BjnN6TARiNg6WThalmmJkFfPEP75yREN%2FNEeM62vvnNWpt1u8u0pYoBQUYSb%2FFsc66SWNnjEvjJawR4cuQia80lbnAw7x1xH0K9QPcQ6r%2BKO%2BKn2wNSLFBKa7A%2BB7QQHCdYS4W7R0nKZHkKPkYNiUJtKSPMPHcGG9%2FTcaC&X-Amz-Signature=c993973b18097cb1e99667c0c84ebeee4438d8027b3fe6c22ead56989341b0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDEMWL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCknDjzARtirmFeQzD4Bg8UciHHobVjVq%2BsDPZFlrIDAiEA7zJNCGomayML9%2Byd4M7tR1YW%2FzWZOIKpEGgdcrLvO4Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGBbmVz1k8SyRdqBNyrcA%2F37dL%2Bz2S3%2BXCjWTVMU2YG5XmZlnFyWaUJ0FupmRdfhf1ZlwQvNy0wJUK1Xo3fo0%2FbIPA85u5QvNxNpPV%2Biv%2FAGiJ1wI0DP%2Femn76r6v%2FsBMAXYTTh8y0pSenlwzbOmqVU66RUKGhrws0Ius0U8EQ7u569psQ2KFGvUgpG2aBt3IueXAH8ev1x17SE9YBD6VaT3nVG7fOb5FKEzor5hhSUXh0Kpl5p4ng4UUfOjSB8c9ucFBKHc2ugDAEavWIz3GYEWkdkO6EnTTlLGf7Q0K97CmYrko3WTx4mBuII8rCWJd%2FryUbDY3joJHSbOKyHX5lopohZbAK6Iq2LWcpeTjU%2Bjo6sA%2Fked4RiVbaTFFSlL8VlOwVC3A0D8v3%2BGXgWSmX7Ifw9fyBp9YQ35is%2B%2BtIO8lriFeMNFr24gv2LL7PWJrQ3mDwxNu2RsaZeoTpOyH2KJ0JvaDPM43Yo1PEDzZxOpZRgLmrrZKcF8QJ5cpimk3GTBe4C%2BI9YZaOP1kmyWl1kT9C%2F3Kt1qFbwComTcplKjSel4vaERNE742GoYxTX7Tz6kXGIrKttVzVN4%2FAqu7oCj4SpZq5O%2F29tz2pabRSsX4jwYxezFEP73tp4uUMuLXIm7ukrD1neiaLqNMPTX1L8GOqUB3Tua4%2BO1Rlt%2BHMIdPHTRCx51fbb5DgWps3BkKxJXpw1CsFtBJeGgY8%2BjnN6TARiNg6WThalmmJkFfPEP75yREN%2FNEeM62vvnNWpt1u8u0pYoBQUYSb%2FFsc66SWNnjEvjJawR4cuQia80lbnAw7x1xH0K9QPcQ6r%2BKO%2BKn2wNSLFBKa7A%2BB7QQHCdYS4W7R0nKZHkKPkYNiUJtKSPMPHcGG9%2FTcaC&X-Amz-Signature=f850b74efc342158cbedd2ee29bd3808f027422508feafe236ea48eea9eed03c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDEMWL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCknDjzARtirmFeQzD4Bg8UciHHobVjVq%2BsDPZFlrIDAiEA7zJNCGomayML9%2Byd4M7tR1YW%2FzWZOIKpEGgdcrLvO4Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGBbmVz1k8SyRdqBNyrcA%2F37dL%2Bz2S3%2BXCjWTVMU2YG5XmZlnFyWaUJ0FupmRdfhf1ZlwQvNy0wJUK1Xo3fo0%2FbIPA85u5QvNxNpPV%2Biv%2FAGiJ1wI0DP%2Femn76r6v%2FsBMAXYTTh8y0pSenlwzbOmqVU66RUKGhrws0Ius0U8EQ7u569psQ2KFGvUgpG2aBt3IueXAH8ev1x17SE9YBD6VaT3nVG7fOb5FKEzor5hhSUXh0Kpl5p4ng4UUfOjSB8c9ucFBKHc2ugDAEavWIz3GYEWkdkO6EnTTlLGf7Q0K97CmYrko3WTx4mBuII8rCWJd%2FryUbDY3joJHSbOKyHX5lopohZbAK6Iq2LWcpeTjU%2Bjo6sA%2Fked4RiVbaTFFSlL8VlOwVC3A0D8v3%2BGXgWSmX7Ifw9fyBp9YQ35is%2B%2BtIO8lriFeMNFr24gv2LL7PWJrQ3mDwxNu2RsaZeoTpOyH2KJ0JvaDPM43Yo1PEDzZxOpZRgLmrrZKcF8QJ5cpimk3GTBe4C%2BI9YZaOP1kmyWl1kT9C%2F3Kt1qFbwComTcplKjSel4vaERNE742GoYxTX7Tz6kXGIrKttVzVN4%2FAqu7oCj4SpZq5O%2F29tz2pabRSsX4jwYxezFEP73tp4uUMuLXIm7ukrD1neiaLqNMPTX1L8GOqUB3Tua4%2BO1Rlt%2BHMIdPHTRCx51fbb5DgWps3BkKxJXpw1CsFtBJeGgY8%2BjnN6TARiNg6WThalmmJkFfPEP75yREN%2FNEeM62vvnNWpt1u8u0pYoBQUYSb%2FFsc66SWNnjEvjJawR4cuQia80lbnAw7x1xH0K9QPcQ6r%2BKO%2BKn2wNSLFBKa7A%2BB7QQHCdYS4W7R0nKZHkKPkYNiUJtKSPMPHcGG9%2FTcaC&X-Amz-Signature=87d8df73ec9446d1815c59c2631243972b9b3eba0943c4b701de418fb9dd9f15&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDEMWL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCknDjzARtirmFeQzD4Bg8UciHHobVjVq%2BsDPZFlrIDAiEA7zJNCGomayML9%2Byd4M7tR1YW%2FzWZOIKpEGgdcrLvO4Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGBbmVz1k8SyRdqBNyrcA%2F37dL%2Bz2S3%2BXCjWTVMU2YG5XmZlnFyWaUJ0FupmRdfhf1ZlwQvNy0wJUK1Xo3fo0%2FbIPA85u5QvNxNpPV%2Biv%2FAGiJ1wI0DP%2Femn76r6v%2FsBMAXYTTh8y0pSenlwzbOmqVU66RUKGhrws0Ius0U8EQ7u569psQ2KFGvUgpG2aBt3IueXAH8ev1x17SE9YBD6VaT3nVG7fOb5FKEzor5hhSUXh0Kpl5p4ng4UUfOjSB8c9ucFBKHc2ugDAEavWIz3GYEWkdkO6EnTTlLGf7Q0K97CmYrko3WTx4mBuII8rCWJd%2FryUbDY3joJHSbOKyHX5lopohZbAK6Iq2LWcpeTjU%2Bjo6sA%2Fked4RiVbaTFFSlL8VlOwVC3A0D8v3%2BGXgWSmX7Ifw9fyBp9YQ35is%2B%2BtIO8lriFeMNFr24gv2LL7PWJrQ3mDwxNu2RsaZeoTpOyH2KJ0JvaDPM43Yo1PEDzZxOpZRgLmrrZKcF8QJ5cpimk3GTBe4C%2BI9YZaOP1kmyWl1kT9C%2F3Kt1qFbwComTcplKjSel4vaERNE742GoYxTX7Tz6kXGIrKttVzVN4%2FAqu7oCj4SpZq5O%2F29tz2pabRSsX4jwYxezFEP73tp4uUMuLXIm7ukrD1neiaLqNMPTX1L8GOqUB3Tua4%2BO1Rlt%2BHMIdPHTRCx51fbb5DgWps3BkKxJXpw1CsFtBJeGgY8%2BjnN6TARiNg6WThalmmJkFfPEP75yREN%2FNEeM62vvnNWpt1u8u0pYoBQUYSb%2FFsc66SWNnjEvjJawR4cuQia80lbnAw7x1xH0K9QPcQ6r%2BKO%2BKn2wNSLFBKa7A%2BB7QQHCdYS4W7R0nKZHkKPkYNiUJtKSPMPHcGG9%2FTcaC&X-Amz-Signature=9eacf37b6ac5b20c71fb2c5f5eddf6d7e8f4281b9203c774d8da7148b3dda5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDEMWL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCknDjzARtirmFeQzD4Bg8UciHHobVjVq%2BsDPZFlrIDAiEA7zJNCGomayML9%2Byd4M7tR1YW%2FzWZOIKpEGgdcrLvO4Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGBbmVz1k8SyRdqBNyrcA%2F37dL%2Bz2S3%2BXCjWTVMU2YG5XmZlnFyWaUJ0FupmRdfhf1ZlwQvNy0wJUK1Xo3fo0%2FbIPA85u5QvNxNpPV%2Biv%2FAGiJ1wI0DP%2Femn76r6v%2FsBMAXYTTh8y0pSenlwzbOmqVU66RUKGhrws0Ius0U8EQ7u569psQ2KFGvUgpG2aBt3IueXAH8ev1x17SE9YBD6VaT3nVG7fOb5FKEzor5hhSUXh0Kpl5p4ng4UUfOjSB8c9ucFBKHc2ugDAEavWIz3GYEWkdkO6EnTTlLGf7Q0K97CmYrko3WTx4mBuII8rCWJd%2FryUbDY3joJHSbOKyHX5lopohZbAK6Iq2LWcpeTjU%2Bjo6sA%2Fked4RiVbaTFFSlL8VlOwVC3A0D8v3%2BGXgWSmX7Ifw9fyBp9YQ35is%2B%2BtIO8lriFeMNFr24gv2LL7PWJrQ3mDwxNu2RsaZeoTpOyH2KJ0JvaDPM43Yo1PEDzZxOpZRgLmrrZKcF8QJ5cpimk3GTBe4C%2BI9YZaOP1kmyWl1kT9C%2F3Kt1qFbwComTcplKjSel4vaERNE742GoYxTX7Tz6kXGIrKttVzVN4%2FAqu7oCj4SpZq5O%2F29tz2pabRSsX4jwYxezFEP73tp4uUMuLXIm7ukrD1neiaLqNMPTX1L8GOqUB3Tua4%2BO1Rlt%2BHMIdPHTRCx51fbb5DgWps3BkKxJXpw1CsFtBJeGgY8%2BjnN6TARiNg6WThalmmJkFfPEP75yREN%2FNEeM62vvnNWpt1u8u0pYoBQUYSb%2FFsc66SWNnjEvjJawR4cuQia80lbnAw7x1xH0K9QPcQ6r%2BKO%2BKn2wNSLFBKa7A%2BB7QQHCdYS4W7R0nKZHkKPkYNiUJtKSPMPHcGG9%2FTcaC&X-Amz-Signature=9031f015b157f7fa2398311a0a9152d9dce650813a77c3448529e93d9dfe6332&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDEMWL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCknDjzARtirmFeQzD4Bg8UciHHobVjVq%2BsDPZFlrIDAiEA7zJNCGomayML9%2Byd4M7tR1YW%2FzWZOIKpEGgdcrLvO4Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGBbmVz1k8SyRdqBNyrcA%2F37dL%2Bz2S3%2BXCjWTVMU2YG5XmZlnFyWaUJ0FupmRdfhf1ZlwQvNy0wJUK1Xo3fo0%2FbIPA85u5QvNxNpPV%2Biv%2FAGiJ1wI0DP%2Femn76r6v%2FsBMAXYTTh8y0pSenlwzbOmqVU66RUKGhrws0Ius0U8EQ7u569psQ2KFGvUgpG2aBt3IueXAH8ev1x17SE9YBD6VaT3nVG7fOb5FKEzor5hhSUXh0Kpl5p4ng4UUfOjSB8c9ucFBKHc2ugDAEavWIz3GYEWkdkO6EnTTlLGf7Q0K97CmYrko3WTx4mBuII8rCWJd%2FryUbDY3joJHSbOKyHX5lopohZbAK6Iq2LWcpeTjU%2Bjo6sA%2Fked4RiVbaTFFSlL8VlOwVC3A0D8v3%2BGXgWSmX7Ifw9fyBp9YQ35is%2B%2BtIO8lriFeMNFr24gv2LL7PWJrQ3mDwxNu2RsaZeoTpOyH2KJ0JvaDPM43Yo1PEDzZxOpZRgLmrrZKcF8QJ5cpimk3GTBe4C%2BI9YZaOP1kmyWl1kT9C%2F3Kt1qFbwComTcplKjSel4vaERNE742GoYxTX7Tz6kXGIrKttVzVN4%2FAqu7oCj4SpZq5O%2F29tz2pabRSsX4jwYxezFEP73tp4uUMuLXIm7ukrD1neiaLqNMPTX1L8GOqUB3Tua4%2BO1Rlt%2BHMIdPHTRCx51fbb5DgWps3BkKxJXpw1CsFtBJeGgY8%2BjnN6TARiNg6WThalmmJkFfPEP75yREN%2FNEeM62vvnNWpt1u8u0pYoBQUYSb%2FFsc66SWNnjEvjJawR4cuQia80lbnAw7x1xH0K9QPcQ6r%2BKO%2BKn2wNSLFBKa7A%2BB7QQHCdYS4W7R0nKZHkKPkYNiUJtKSPMPHcGG9%2FTcaC&X-Amz-Signature=937072fa8b124f33a8e0ba22d2dc15514ecfec6d86d48c736be1d7514586ad1e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDEMWL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCknDjzARtirmFeQzD4Bg8UciHHobVjVq%2BsDPZFlrIDAiEA7zJNCGomayML9%2Byd4M7tR1YW%2FzWZOIKpEGgdcrLvO4Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGBbmVz1k8SyRdqBNyrcA%2F37dL%2Bz2S3%2BXCjWTVMU2YG5XmZlnFyWaUJ0FupmRdfhf1ZlwQvNy0wJUK1Xo3fo0%2FbIPA85u5QvNxNpPV%2Biv%2FAGiJ1wI0DP%2Femn76r6v%2FsBMAXYTTh8y0pSenlwzbOmqVU66RUKGhrws0Ius0U8EQ7u569psQ2KFGvUgpG2aBt3IueXAH8ev1x17SE9YBD6VaT3nVG7fOb5FKEzor5hhSUXh0Kpl5p4ng4UUfOjSB8c9ucFBKHc2ugDAEavWIz3GYEWkdkO6EnTTlLGf7Q0K97CmYrko3WTx4mBuII8rCWJd%2FryUbDY3joJHSbOKyHX5lopohZbAK6Iq2LWcpeTjU%2Bjo6sA%2Fked4RiVbaTFFSlL8VlOwVC3A0D8v3%2BGXgWSmX7Ifw9fyBp9YQ35is%2B%2BtIO8lriFeMNFr24gv2LL7PWJrQ3mDwxNu2RsaZeoTpOyH2KJ0JvaDPM43Yo1PEDzZxOpZRgLmrrZKcF8QJ5cpimk3GTBe4C%2BI9YZaOP1kmyWl1kT9C%2F3Kt1qFbwComTcplKjSel4vaERNE742GoYxTX7Tz6kXGIrKttVzVN4%2FAqu7oCj4SpZq5O%2F29tz2pabRSsX4jwYxezFEP73tp4uUMuLXIm7ukrD1neiaLqNMPTX1L8GOqUB3Tua4%2BO1Rlt%2BHMIdPHTRCx51fbb5DgWps3BkKxJXpw1CsFtBJeGgY8%2BjnN6TARiNg6WThalmmJkFfPEP75yREN%2FNEeM62vvnNWpt1u8u0pYoBQUYSb%2FFsc66SWNnjEvjJawR4cuQia80lbnAw7x1xH0K9QPcQ6r%2BKO%2BKn2wNSLFBKa7A%2BB7QQHCdYS4W7R0nKZHkKPkYNiUJtKSPMPHcGG9%2FTcaC&X-Amz-Signature=e8973edd9197860a2e0c2e0328b2ae850207330b9c2ed49ae0fa88d8a0173712&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

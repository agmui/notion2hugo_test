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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHEPQG2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVXyvFYL6Vhd6UtRp3ND%2FqqNQz6eT8TH19fhQwY%2BnZuAIhANFHeei9Bv1OUdD4ysgJpOXSQ%2FBsS2l6hD5RzjwzeOvbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWf9fi926YXbHTvyYq3AN52RhgAh5ZvV%2BQfvvFKMtbEFADdEjh3l8QEPoZU6wppkmZcn0hV%2FVR9oi5VCSSYlfDQ1Nt1B%2BEHbJlMfn6drMcy05vci3%2BA2eb0dK6r1IbHiuRT58CZyObiMGR8kbaQvcb8toQlW0vURzVOXYEYu8b9HXwW1faL4yfgr47YoTz0HByAnNH3FURkTmd0ovZyO58rKL8O4l5QBFg7k2JP0zFe2n20fOUQLeRHWVgf0Lcb2CzoZ1Jh8YwQvisanPWBSYF%2B4T6Yo9EZhINtiT6Um1StJccCqtGQyzmeNFTWPhSAcVhlgzerbTGaQCBbNgfKlslV0ClDXNu%2Fmiolqoz6nm6Tax9PaZKGKy5w9g%2F9krIuvAJqJ%2FbDeIoq40zviAMxnLobCMo5gEKUIXjboy65pkvvRuaYmzRetvN7uctd24SWdVw4GlAmTUQSCBFw2ELfBp%2Btqtw4CmqUvMo8yCDb6daktp8htGZxtH7eZejvCpmiLzf6yMO7v0q5JqmqIW2SiHU7%2BY%2B%2FMbOAJyqcydGSdI887DVgX6PYQxrRH6k05rW0PUg6Drr1l79NsnWp6oY5woi0THpw8mlCvP6sxE1sMViLSiaUCOpIS5LiF2bZNm9DOUS3n4aRczfu9XcsjCAqOLCBjqkAe%2FFo7gO7BOB27rmUWnUhOBUOhLzkpw0htukEt8ljXlgKaUgKrBxMf9fQTACQymjvYe81TSp1qNloCYk52uQbPN16vfcy%2BDX23YrhBMZplOEc4U3mqUO%2BYhmvbmkypGTFZTd6KA0yD99QlMzP6wc9g6awFUUMBEo1nsgerAkdZ52x4Hsr62UWlnJ5HGPsir4NmlnFfMOCqJjvasIz4OSxf4B7Vuf&X-Amz-Signature=ae0f722d286480e2c9a51a3b57029d54b36218f4f05e2fc91288cbb496fc721b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHEPQG2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVXyvFYL6Vhd6UtRp3ND%2FqqNQz6eT8TH19fhQwY%2BnZuAIhANFHeei9Bv1OUdD4ysgJpOXSQ%2FBsS2l6hD5RzjwzeOvbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWf9fi926YXbHTvyYq3AN52RhgAh5ZvV%2BQfvvFKMtbEFADdEjh3l8QEPoZU6wppkmZcn0hV%2FVR9oi5VCSSYlfDQ1Nt1B%2BEHbJlMfn6drMcy05vci3%2BA2eb0dK6r1IbHiuRT58CZyObiMGR8kbaQvcb8toQlW0vURzVOXYEYu8b9HXwW1faL4yfgr47YoTz0HByAnNH3FURkTmd0ovZyO58rKL8O4l5QBFg7k2JP0zFe2n20fOUQLeRHWVgf0Lcb2CzoZ1Jh8YwQvisanPWBSYF%2B4T6Yo9EZhINtiT6Um1StJccCqtGQyzmeNFTWPhSAcVhlgzerbTGaQCBbNgfKlslV0ClDXNu%2Fmiolqoz6nm6Tax9PaZKGKy5w9g%2F9krIuvAJqJ%2FbDeIoq40zviAMxnLobCMo5gEKUIXjboy65pkvvRuaYmzRetvN7uctd24SWdVw4GlAmTUQSCBFw2ELfBp%2Btqtw4CmqUvMo8yCDb6daktp8htGZxtH7eZejvCpmiLzf6yMO7v0q5JqmqIW2SiHU7%2BY%2B%2FMbOAJyqcydGSdI887DVgX6PYQxrRH6k05rW0PUg6Drr1l79NsnWp6oY5woi0THpw8mlCvP6sxE1sMViLSiaUCOpIS5LiF2bZNm9DOUS3n4aRczfu9XcsjCAqOLCBjqkAe%2FFo7gO7BOB27rmUWnUhOBUOhLzkpw0htukEt8ljXlgKaUgKrBxMf9fQTACQymjvYe81TSp1qNloCYk52uQbPN16vfcy%2BDX23YrhBMZplOEc4U3mqUO%2BYhmvbmkypGTFZTd6KA0yD99QlMzP6wc9g6awFUUMBEo1nsgerAkdZ52x4Hsr62UWlnJ5HGPsir4NmlnFfMOCqJjvasIz4OSxf4B7Vuf&X-Amz-Signature=226227bf0cb649bf6fb4cd1aff34837869c82438a3d5cc9c5e6d2dd5298d4598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHEPQG2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVXyvFYL6Vhd6UtRp3ND%2FqqNQz6eT8TH19fhQwY%2BnZuAIhANFHeei9Bv1OUdD4ysgJpOXSQ%2FBsS2l6hD5RzjwzeOvbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWf9fi926YXbHTvyYq3AN52RhgAh5ZvV%2BQfvvFKMtbEFADdEjh3l8QEPoZU6wppkmZcn0hV%2FVR9oi5VCSSYlfDQ1Nt1B%2BEHbJlMfn6drMcy05vci3%2BA2eb0dK6r1IbHiuRT58CZyObiMGR8kbaQvcb8toQlW0vURzVOXYEYu8b9HXwW1faL4yfgr47YoTz0HByAnNH3FURkTmd0ovZyO58rKL8O4l5QBFg7k2JP0zFe2n20fOUQLeRHWVgf0Lcb2CzoZ1Jh8YwQvisanPWBSYF%2B4T6Yo9EZhINtiT6Um1StJccCqtGQyzmeNFTWPhSAcVhlgzerbTGaQCBbNgfKlslV0ClDXNu%2Fmiolqoz6nm6Tax9PaZKGKy5w9g%2F9krIuvAJqJ%2FbDeIoq40zviAMxnLobCMo5gEKUIXjboy65pkvvRuaYmzRetvN7uctd24SWdVw4GlAmTUQSCBFw2ELfBp%2Btqtw4CmqUvMo8yCDb6daktp8htGZxtH7eZejvCpmiLzf6yMO7v0q5JqmqIW2SiHU7%2BY%2B%2FMbOAJyqcydGSdI887DVgX6PYQxrRH6k05rW0PUg6Drr1l79NsnWp6oY5woi0THpw8mlCvP6sxE1sMViLSiaUCOpIS5LiF2bZNm9DOUS3n4aRczfu9XcsjCAqOLCBjqkAe%2FFo7gO7BOB27rmUWnUhOBUOhLzkpw0htukEt8ljXlgKaUgKrBxMf9fQTACQymjvYe81TSp1qNloCYk52uQbPN16vfcy%2BDX23YrhBMZplOEc4U3mqUO%2BYhmvbmkypGTFZTd6KA0yD99QlMzP6wc9g6awFUUMBEo1nsgerAkdZ52x4Hsr62UWlnJ5HGPsir4NmlnFfMOCqJjvasIz4OSxf4B7Vuf&X-Amz-Signature=0a2814a1bcccad885970c4fc1f96f2a386caedf700d7e1e9bf8ca53dad521463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHEPQG2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVXyvFYL6Vhd6UtRp3ND%2FqqNQz6eT8TH19fhQwY%2BnZuAIhANFHeei9Bv1OUdD4ysgJpOXSQ%2FBsS2l6hD5RzjwzeOvbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWf9fi926YXbHTvyYq3AN52RhgAh5ZvV%2BQfvvFKMtbEFADdEjh3l8QEPoZU6wppkmZcn0hV%2FVR9oi5VCSSYlfDQ1Nt1B%2BEHbJlMfn6drMcy05vci3%2BA2eb0dK6r1IbHiuRT58CZyObiMGR8kbaQvcb8toQlW0vURzVOXYEYu8b9HXwW1faL4yfgr47YoTz0HByAnNH3FURkTmd0ovZyO58rKL8O4l5QBFg7k2JP0zFe2n20fOUQLeRHWVgf0Lcb2CzoZ1Jh8YwQvisanPWBSYF%2B4T6Yo9EZhINtiT6Um1StJccCqtGQyzmeNFTWPhSAcVhlgzerbTGaQCBbNgfKlslV0ClDXNu%2Fmiolqoz6nm6Tax9PaZKGKy5w9g%2F9krIuvAJqJ%2FbDeIoq40zviAMxnLobCMo5gEKUIXjboy65pkvvRuaYmzRetvN7uctd24SWdVw4GlAmTUQSCBFw2ELfBp%2Btqtw4CmqUvMo8yCDb6daktp8htGZxtH7eZejvCpmiLzf6yMO7v0q5JqmqIW2SiHU7%2BY%2B%2FMbOAJyqcydGSdI887DVgX6PYQxrRH6k05rW0PUg6Drr1l79NsnWp6oY5woi0THpw8mlCvP6sxE1sMViLSiaUCOpIS5LiF2bZNm9DOUS3n4aRczfu9XcsjCAqOLCBjqkAe%2FFo7gO7BOB27rmUWnUhOBUOhLzkpw0htukEt8ljXlgKaUgKrBxMf9fQTACQymjvYe81TSp1qNloCYk52uQbPN16vfcy%2BDX23YrhBMZplOEc4U3mqUO%2BYhmvbmkypGTFZTd6KA0yD99QlMzP6wc9g6awFUUMBEo1nsgerAkdZ52x4Hsr62UWlnJ5HGPsir4NmlnFfMOCqJjvasIz4OSxf4B7Vuf&X-Amz-Signature=03e78164a67c921d0087d56523a3e8fc4f8d5a6034f458dbeff8e307b8904a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHEPQG2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVXyvFYL6Vhd6UtRp3ND%2FqqNQz6eT8TH19fhQwY%2BnZuAIhANFHeei9Bv1OUdD4ysgJpOXSQ%2FBsS2l6hD5RzjwzeOvbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWf9fi926YXbHTvyYq3AN52RhgAh5ZvV%2BQfvvFKMtbEFADdEjh3l8QEPoZU6wppkmZcn0hV%2FVR9oi5VCSSYlfDQ1Nt1B%2BEHbJlMfn6drMcy05vci3%2BA2eb0dK6r1IbHiuRT58CZyObiMGR8kbaQvcb8toQlW0vURzVOXYEYu8b9HXwW1faL4yfgr47YoTz0HByAnNH3FURkTmd0ovZyO58rKL8O4l5QBFg7k2JP0zFe2n20fOUQLeRHWVgf0Lcb2CzoZ1Jh8YwQvisanPWBSYF%2B4T6Yo9EZhINtiT6Um1StJccCqtGQyzmeNFTWPhSAcVhlgzerbTGaQCBbNgfKlslV0ClDXNu%2Fmiolqoz6nm6Tax9PaZKGKy5w9g%2F9krIuvAJqJ%2FbDeIoq40zviAMxnLobCMo5gEKUIXjboy65pkvvRuaYmzRetvN7uctd24SWdVw4GlAmTUQSCBFw2ELfBp%2Btqtw4CmqUvMo8yCDb6daktp8htGZxtH7eZejvCpmiLzf6yMO7v0q5JqmqIW2SiHU7%2BY%2B%2FMbOAJyqcydGSdI887DVgX6PYQxrRH6k05rW0PUg6Drr1l79NsnWp6oY5woi0THpw8mlCvP6sxE1sMViLSiaUCOpIS5LiF2bZNm9DOUS3n4aRczfu9XcsjCAqOLCBjqkAe%2FFo7gO7BOB27rmUWnUhOBUOhLzkpw0htukEt8ljXlgKaUgKrBxMf9fQTACQymjvYe81TSp1qNloCYk52uQbPN16vfcy%2BDX23YrhBMZplOEc4U3mqUO%2BYhmvbmkypGTFZTd6KA0yD99QlMzP6wc9g6awFUUMBEo1nsgerAkdZ52x4Hsr62UWlnJ5HGPsir4NmlnFfMOCqJjvasIz4OSxf4B7Vuf&X-Amz-Signature=374a5ef148cc8f34faff6e1fae4724fa8a39046329cd009b03c5c630c129dde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHEPQG2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVXyvFYL6Vhd6UtRp3ND%2FqqNQz6eT8TH19fhQwY%2BnZuAIhANFHeei9Bv1OUdD4ysgJpOXSQ%2FBsS2l6hD5RzjwzeOvbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWf9fi926YXbHTvyYq3AN52RhgAh5ZvV%2BQfvvFKMtbEFADdEjh3l8QEPoZU6wppkmZcn0hV%2FVR9oi5VCSSYlfDQ1Nt1B%2BEHbJlMfn6drMcy05vci3%2BA2eb0dK6r1IbHiuRT58CZyObiMGR8kbaQvcb8toQlW0vURzVOXYEYu8b9HXwW1faL4yfgr47YoTz0HByAnNH3FURkTmd0ovZyO58rKL8O4l5QBFg7k2JP0zFe2n20fOUQLeRHWVgf0Lcb2CzoZ1Jh8YwQvisanPWBSYF%2B4T6Yo9EZhINtiT6Um1StJccCqtGQyzmeNFTWPhSAcVhlgzerbTGaQCBbNgfKlslV0ClDXNu%2Fmiolqoz6nm6Tax9PaZKGKy5w9g%2F9krIuvAJqJ%2FbDeIoq40zviAMxnLobCMo5gEKUIXjboy65pkvvRuaYmzRetvN7uctd24SWdVw4GlAmTUQSCBFw2ELfBp%2Btqtw4CmqUvMo8yCDb6daktp8htGZxtH7eZejvCpmiLzf6yMO7v0q5JqmqIW2SiHU7%2BY%2B%2FMbOAJyqcydGSdI887DVgX6PYQxrRH6k05rW0PUg6Drr1l79NsnWp6oY5woi0THpw8mlCvP6sxE1sMViLSiaUCOpIS5LiF2bZNm9DOUS3n4aRczfu9XcsjCAqOLCBjqkAe%2FFo7gO7BOB27rmUWnUhOBUOhLzkpw0htukEt8ljXlgKaUgKrBxMf9fQTACQymjvYe81TSp1qNloCYk52uQbPN16vfcy%2BDX23YrhBMZplOEc4U3mqUO%2BYhmvbmkypGTFZTd6KA0yD99QlMzP6wc9g6awFUUMBEo1nsgerAkdZ52x4Hsr62UWlnJ5HGPsir4NmlnFfMOCqJjvasIz4OSxf4B7Vuf&X-Amz-Signature=15de93bedf47f4162d3346a037167027d55767582709f27a9c183ed89bdc14cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHEPQG2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVXyvFYL6Vhd6UtRp3ND%2FqqNQz6eT8TH19fhQwY%2BnZuAIhANFHeei9Bv1OUdD4ysgJpOXSQ%2FBsS2l6hD5RzjwzeOvbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWf9fi926YXbHTvyYq3AN52RhgAh5ZvV%2BQfvvFKMtbEFADdEjh3l8QEPoZU6wppkmZcn0hV%2FVR9oi5VCSSYlfDQ1Nt1B%2BEHbJlMfn6drMcy05vci3%2BA2eb0dK6r1IbHiuRT58CZyObiMGR8kbaQvcb8toQlW0vURzVOXYEYu8b9HXwW1faL4yfgr47YoTz0HByAnNH3FURkTmd0ovZyO58rKL8O4l5QBFg7k2JP0zFe2n20fOUQLeRHWVgf0Lcb2CzoZ1Jh8YwQvisanPWBSYF%2B4T6Yo9EZhINtiT6Um1StJccCqtGQyzmeNFTWPhSAcVhlgzerbTGaQCBbNgfKlslV0ClDXNu%2Fmiolqoz6nm6Tax9PaZKGKy5w9g%2F9krIuvAJqJ%2FbDeIoq40zviAMxnLobCMo5gEKUIXjboy65pkvvRuaYmzRetvN7uctd24SWdVw4GlAmTUQSCBFw2ELfBp%2Btqtw4CmqUvMo8yCDb6daktp8htGZxtH7eZejvCpmiLzf6yMO7v0q5JqmqIW2SiHU7%2BY%2B%2FMbOAJyqcydGSdI887DVgX6PYQxrRH6k05rW0PUg6Drr1l79NsnWp6oY5woi0THpw8mlCvP6sxE1sMViLSiaUCOpIS5LiF2bZNm9DOUS3n4aRczfu9XcsjCAqOLCBjqkAe%2FFo7gO7BOB27rmUWnUhOBUOhLzkpw0htukEt8ljXlgKaUgKrBxMf9fQTACQymjvYe81TSp1qNloCYk52uQbPN16vfcy%2BDX23YrhBMZplOEc4U3mqUO%2BYhmvbmkypGTFZTd6KA0yD99QlMzP6wc9g6awFUUMBEo1nsgerAkdZ52x4Hsr62UWlnJ5HGPsir4NmlnFfMOCqJjvasIz4OSxf4B7Vuf&X-Amz-Signature=88f03af099ea41b0e95961681ea5c2dd04117e5d3190906611c9316c2439d183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

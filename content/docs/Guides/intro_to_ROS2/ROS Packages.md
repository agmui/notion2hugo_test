---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVR5RT2D%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCd98pjnAt4UKAXC0texyswqFUUtiwA2EfT9nL0bQ0LTgIhAOB2g%2BQu6kKNIqpY6SPLMTHrJNrFWkJPDr%2BKjBkj9QACKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRREVmA30WSGwR3ekq3APMVjJK7hXgL2w2bujpPvaYX8sxWkD5DAdtKkVZOtDuURBz3qQa1rFlIDB76TFmN7sGGfVBkRZAcsh4aKVbN%2By0EyqOtSzmvCXBokC2Fo5PUl1Ba3qodP5K0H6CkxL4EFe3n24A7boPJl%2FyalWVHcTugx0v%2BqOZKpuW2vTtEjCkK1%2BhQPIIPh1xBR7xD8DmPVgcPC0hyzEyrGmBzB4vcnCi4tZfUt3sBpF32PktMAMDR6LND6qOt3fbi2ScqS6oMmU49OScw3oHZXFP1DRb6z4d8H0yWA6lndyQ1FU678vw1a90L1WoE3fI1K45DPuuW0KGsrjDB4B7e4ENa9gYUi%2F1YvA0ctrp7Z5uuYoXpSWaIFxGIS6S69yxMHmV7IFGlC6XL6woQ6wTb1GOo8VvIVpiLjxyntx4xzOXASfxrd3sN0lcTIbNyKeg0k3GSwEf0r%2B3zyeRUC67Fv79Z6haEr0f3%2BnmMDKBw3fSgCcfww2HWCVAGsmYygQX2D1K6R0wIWnUmOnWXwuF8xbHm1CXuSkeU9%2FwE9CMqj9XA3Q4RkH5C94sgo8Fz3qsc%2BLYwQtFlRdnIzi4XHervUeckrlSqWqlSXoftmw9Ybc2k7Xx50haOSvrqZkemtys9A8tkDDig6LEBjqkATpZ8AN8ph2IUUTSOI5OejvatVBM8hxI3plThovABEUDQf%2F7RamEKm8xU5ZrdxsllL44a4DDxMjEDjAodc7IetK9ayk0sxlwWcRbbDLqdfiIyfct%2BQ%2Fe2tu%2Bcdp4UxQbMGZgTdLNtAzzRBWYOP%2Fqv6cnpwaIIliuJ35at2IE%2F%2ByN84eCvF6qOKd3H%2FkHw3OFsFgIp6AOc%2BUPOVAyJOrCzMaURCwq&X-Amz-Signature=d8eebc831ebb54151987873823fefa97a1a2c79d4a425c1e15f6b4adb8c85f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVR5RT2D%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCd98pjnAt4UKAXC0texyswqFUUtiwA2EfT9nL0bQ0LTgIhAOB2g%2BQu6kKNIqpY6SPLMTHrJNrFWkJPDr%2BKjBkj9QACKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRREVmA30WSGwR3ekq3APMVjJK7hXgL2w2bujpPvaYX8sxWkD5DAdtKkVZOtDuURBz3qQa1rFlIDB76TFmN7sGGfVBkRZAcsh4aKVbN%2By0EyqOtSzmvCXBokC2Fo5PUl1Ba3qodP5K0H6CkxL4EFe3n24A7boPJl%2FyalWVHcTugx0v%2BqOZKpuW2vTtEjCkK1%2BhQPIIPh1xBR7xD8DmPVgcPC0hyzEyrGmBzB4vcnCi4tZfUt3sBpF32PktMAMDR6LND6qOt3fbi2ScqS6oMmU49OScw3oHZXFP1DRb6z4d8H0yWA6lndyQ1FU678vw1a90L1WoE3fI1K45DPuuW0KGsrjDB4B7e4ENa9gYUi%2F1YvA0ctrp7Z5uuYoXpSWaIFxGIS6S69yxMHmV7IFGlC6XL6woQ6wTb1GOo8VvIVpiLjxyntx4xzOXASfxrd3sN0lcTIbNyKeg0k3GSwEf0r%2B3zyeRUC67Fv79Z6haEr0f3%2BnmMDKBw3fSgCcfww2HWCVAGsmYygQX2D1K6R0wIWnUmOnWXwuF8xbHm1CXuSkeU9%2FwE9CMqj9XA3Q4RkH5C94sgo8Fz3qsc%2BLYwQtFlRdnIzi4XHervUeckrlSqWqlSXoftmw9Ybc2k7Xx50haOSvrqZkemtys9A8tkDDig6LEBjqkATpZ8AN8ph2IUUTSOI5OejvatVBM8hxI3plThovABEUDQf%2F7RamEKm8xU5ZrdxsllL44a4DDxMjEDjAodc7IetK9ayk0sxlwWcRbbDLqdfiIyfct%2BQ%2Fe2tu%2Bcdp4UxQbMGZgTdLNtAzzRBWYOP%2Fqv6cnpwaIIliuJ35at2IE%2F%2ByN84eCvF6qOKd3H%2FkHw3OFsFgIp6AOc%2BUPOVAyJOrCzMaURCwq&X-Amz-Signature=e79105c842fd3f8be9efbf37a225061be64eedb1b44c15925bc3940f51fa4904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVR5RT2D%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCd98pjnAt4UKAXC0texyswqFUUtiwA2EfT9nL0bQ0LTgIhAOB2g%2BQu6kKNIqpY6SPLMTHrJNrFWkJPDr%2BKjBkj9QACKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRREVmA30WSGwR3ekq3APMVjJK7hXgL2w2bujpPvaYX8sxWkD5DAdtKkVZOtDuURBz3qQa1rFlIDB76TFmN7sGGfVBkRZAcsh4aKVbN%2By0EyqOtSzmvCXBokC2Fo5PUl1Ba3qodP5K0H6CkxL4EFe3n24A7boPJl%2FyalWVHcTugx0v%2BqOZKpuW2vTtEjCkK1%2BhQPIIPh1xBR7xD8DmPVgcPC0hyzEyrGmBzB4vcnCi4tZfUt3sBpF32PktMAMDR6LND6qOt3fbi2ScqS6oMmU49OScw3oHZXFP1DRb6z4d8H0yWA6lndyQ1FU678vw1a90L1WoE3fI1K45DPuuW0KGsrjDB4B7e4ENa9gYUi%2F1YvA0ctrp7Z5uuYoXpSWaIFxGIS6S69yxMHmV7IFGlC6XL6woQ6wTb1GOo8VvIVpiLjxyntx4xzOXASfxrd3sN0lcTIbNyKeg0k3GSwEf0r%2B3zyeRUC67Fv79Z6haEr0f3%2BnmMDKBw3fSgCcfww2HWCVAGsmYygQX2D1K6R0wIWnUmOnWXwuF8xbHm1CXuSkeU9%2FwE9CMqj9XA3Q4RkH5C94sgo8Fz3qsc%2BLYwQtFlRdnIzi4XHervUeckrlSqWqlSXoftmw9Ybc2k7Xx50haOSvrqZkemtys9A8tkDDig6LEBjqkATpZ8AN8ph2IUUTSOI5OejvatVBM8hxI3plThovABEUDQf%2F7RamEKm8xU5ZrdxsllL44a4DDxMjEDjAodc7IetK9ayk0sxlwWcRbbDLqdfiIyfct%2BQ%2Fe2tu%2Bcdp4UxQbMGZgTdLNtAzzRBWYOP%2Fqv6cnpwaIIliuJ35at2IE%2F%2ByN84eCvF6qOKd3H%2FkHw3OFsFgIp6AOc%2BUPOVAyJOrCzMaURCwq&X-Amz-Signature=b261b008432ab4ed0a4a091646f9b3a95abe3bb0391dcc02fac738ccfd246d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVR5RT2D%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCd98pjnAt4UKAXC0texyswqFUUtiwA2EfT9nL0bQ0LTgIhAOB2g%2BQu6kKNIqpY6SPLMTHrJNrFWkJPDr%2BKjBkj9QACKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRREVmA30WSGwR3ekq3APMVjJK7hXgL2w2bujpPvaYX8sxWkD5DAdtKkVZOtDuURBz3qQa1rFlIDB76TFmN7sGGfVBkRZAcsh4aKVbN%2By0EyqOtSzmvCXBokC2Fo5PUl1Ba3qodP5K0H6CkxL4EFe3n24A7boPJl%2FyalWVHcTugx0v%2BqOZKpuW2vTtEjCkK1%2BhQPIIPh1xBR7xD8DmPVgcPC0hyzEyrGmBzB4vcnCi4tZfUt3sBpF32PktMAMDR6LND6qOt3fbi2ScqS6oMmU49OScw3oHZXFP1DRb6z4d8H0yWA6lndyQ1FU678vw1a90L1WoE3fI1K45DPuuW0KGsrjDB4B7e4ENa9gYUi%2F1YvA0ctrp7Z5uuYoXpSWaIFxGIS6S69yxMHmV7IFGlC6XL6woQ6wTb1GOo8VvIVpiLjxyntx4xzOXASfxrd3sN0lcTIbNyKeg0k3GSwEf0r%2B3zyeRUC67Fv79Z6haEr0f3%2BnmMDKBw3fSgCcfww2HWCVAGsmYygQX2D1K6R0wIWnUmOnWXwuF8xbHm1CXuSkeU9%2FwE9CMqj9XA3Q4RkH5C94sgo8Fz3qsc%2BLYwQtFlRdnIzi4XHervUeckrlSqWqlSXoftmw9Ybc2k7Xx50haOSvrqZkemtys9A8tkDDig6LEBjqkATpZ8AN8ph2IUUTSOI5OejvatVBM8hxI3plThovABEUDQf%2F7RamEKm8xU5ZrdxsllL44a4DDxMjEDjAodc7IetK9ayk0sxlwWcRbbDLqdfiIyfct%2BQ%2Fe2tu%2Bcdp4UxQbMGZgTdLNtAzzRBWYOP%2Fqv6cnpwaIIliuJ35at2IE%2F%2ByN84eCvF6qOKd3H%2FkHw3OFsFgIp6AOc%2BUPOVAyJOrCzMaURCwq&X-Amz-Signature=6dc05f0f61054d9a7e09400260fb0adf8ef97fe4a1d521fef56a8571ec918dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVR5RT2D%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCd98pjnAt4UKAXC0texyswqFUUtiwA2EfT9nL0bQ0LTgIhAOB2g%2BQu6kKNIqpY6SPLMTHrJNrFWkJPDr%2BKjBkj9QACKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRREVmA30WSGwR3ekq3APMVjJK7hXgL2w2bujpPvaYX8sxWkD5DAdtKkVZOtDuURBz3qQa1rFlIDB76TFmN7sGGfVBkRZAcsh4aKVbN%2By0EyqOtSzmvCXBokC2Fo5PUl1Ba3qodP5K0H6CkxL4EFe3n24A7boPJl%2FyalWVHcTugx0v%2BqOZKpuW2vTtEjCkK1%2BhQPIIPh1xBR7xD8DmPVgcPC0hyzEyrGmBzB4vcnCi4tZfUt3sBpF32PktMAMDR6LND6qOt3fbi2ScqS6oMmU49OScw3oHZXFP1DRb6z4d8H0yWA6lndyQ1FU678vw1a90L1WoE3fI1K45DPuuW0KGsrjDB4B7e4ENa9gYUi%2F1YvA0ctrp7Z5uuYoXpSWaIFxGIS6S69yxMHmV7IFGlC6XL6woQ6wTb1GOo8VvIVpiLjxyntx4xzOXASfxrd3sN0lcTIbNyKeg0k3GSwEf0r%2B3zyeRUC67Fv79Z6haEr0f3%2BnmMDKBw3fSgCcfww2HWCVAGsmYygQX2D1K6R0wIWnUmOnWXwuF8xbHm1CXuSkeU9%2FwE9CMqj9XA3Q4RkH5C94sgo8Fz3qsc%2BLYwQtFlRdnIzi4XHervUeckrlSqWqlSXoftmw9Ybc2k7Xx50haOSvrqZkemtys9A8tkDDig6LEBjqkATpZ8AN8ph2IUUTSOI5OejvatVBM8hxI3plThovABEUDQf%2F7RamEKm8xU5ZrdxsllL44a4DDxMjEDjAodc7IetK9ayk0sxlwWcRbbDLqdfiIyfct%2BQ%2Fe2tu%2Bcdp4UxQbMGZgTdLNtAzzRBWYOP%2Fqv6cnpwaIIliuJ35at2IE%2F%2ByN84eCvF6qOKd3H%2FkHw3OFsFgIp6AOc%2BUPOVAyJOrCzMaURCwq&X-Amz-Signature=335fbecb51864af7a69615931f8cdf830b3ff7aa16051f919cc327d942552b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVR5RT2D%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCd98pjnAt4UKAXC0texyswqFUUtiwA2EfT9nL0bQ0LTgIhAOB2g%2BQu6kKNIqpY6SPLMTHrJNrFWkJPDr%2BKjBkj9QACKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRREVmA30WSGwR3ekq3APMVjJK7hXgL2w2bujpPvaYX8sxWkD5DAdtKkVZOtDuURBz3qQa1rFlIDB76TFmN7sGGfVBkRZAcsh4aKVbN%2By0EyqOtSzmvCXBokC2Fo5PUl1Ba3qodP5K0H6CkxL4EFe3n24A7boPJl%2FyalWVHcTugx0v%2BqOZKpuW2vTtEjCkK1%2BhQPIIPh1xBR7xD8DmPVgcPC0hyzEyrGmBzB4vcnCi4tZfUt3sBpF32PktMAMDR6LND6qOt3fbi2ScqS6oMmU49OScw3oHZXFP1DRb6z4d8H0yWA6lndyQ1FU678vw1a90L1WoE3fI1K45DPuuW0KGsrjDB4B7e4ENa9gYUi%2F1YvA0ctrp7Z5uuYoXpSWaIFxGIS6S69yxMHmV7IFGlC6XL6woQ6wTb1GOo8VvIVpiLjxyntx4xzOXASfxrd3sN0lcTIbNyKeg0k3GSwEf0r%2B3zyeRUC67Fv79Z6haEr0f3%2BnmMDKBw3fSgCcfww2HWCVAGsmYygQX2D1K6R0wIWnUmOnWXwuF8xbHm1CXuSkeU9%2FwE9CMqj9XA3Q4RkH5C94sgo8Fz3qsc%2BLYwQtFlRdnIzi4XHervUeckrlSqWqlSXoftmw9Ybc2k7Xx50haOSvrqZkemtys9A8tkDDig6LEBjqkATpZ8AN8ph2IUUTSOI5OejvatVBM8hxI3plThovABEUDQf%2F7RamEKm8xU5ZrdxsllL44a4DDxMjEDjAodc7IetK9ayk0sxlwWcRbbDLqdfiIyfct%2BQ%2Fe2tu%2Bcdp4UxQbMGZgTdLNtAzzRBWYOP%2Fqv6cnpwaIIliuJ35at2IE%2F%2ByN84eCvF6qOKd3H%2FkHw3OFsFgIp6AOc%2BUPOVAyJOrCzMaURCwq&X-Amz-Signature=1ac05c328dd28026a8414cc2c8d68b5d80e892530280abbb6304ad57f204f8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVR5RT2D%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCd98pjnAt4UKAXC0texyswqFUUtiwA2EfT9nL0bQ0LTgIhAOB2g%2BQu6kKNIqpY6SPLMTHrJNrFWkJPDr%2BKjBkj9QACKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRREVmA30WSGwR3ekq3APMVjJK7hXgL2w2bujpPvaYX8sxWkD5DAdtKkVZOtDuURBz3qQa1rFlIDB76TFmN7sGGfVBkRZAcsh4aKVbN%2By0EyqOtSzmvCXBokC2Fo5PUl1Ba3qodP5K0H6CkxL4EFe3n24A7boPJl%2FyalWVHcTugx0v%2BqOZKpuW2vTtEjCkK1%2BhQPIIPh1xBR7xD8DmPVgcPC0hyzEyrGmBzB4vcnCi4tZfUt3sBpF32PktMAMDR6LND6qOt3fbi2ScqS6oMmU49OScw3oHZXFP1DRb6z4d8H0yWA6lndyQ1FU678vw1a90L1WoE3fI1K45DPuuW0KGsrjDB4B7e4ENa9gYUi%2F1YvA0ctrp7Z5uuYoXpSWaIFxGIS6S69yxMHmV7IFGlC6XL6woQ6wTb1GOo8VvIVpiLjxyntx4xzOXASfxrd3sN0lcTIbNyKeg0k3GSwEf0r%2B3zyeRUC67Fv79Z6haEr0f3%2BnmMDKBw3fSgCcfww2HWCVAGsmYygQX2D1K6R0wIWnUmOnWXwuF8xbHm1CXuSkeU9%2FwE9CMqj9XA3Q4RkH5C94sgo8Fz3qsc%2BLYwQtFlRdnIzi4XHervUeckrlSqWqlSXoftmw9Ybc2k7Xx50haOSvrqZkemtys9A8tkDDig6LEBjqkATpZ8AN8ph2IUUTSOI5OejvatVBM8hxI3plThovABEUDQf%2F7RamEKm8xU5ZrdxsllL44a4DDxMjEDjAodc7IetK9ayk0sxlwWcRbbDLqdfiIyfct%2BQ%2Fe2tu%2Bcdp4UxQbMGZgTdLNtAzzRBWYOP%2Fqv6cnpwaIIliuJ35at2IE%2F%2ByN84eCvF6qOKd3H%2FkHw3OFsFgIp6AOc%2BUPOVAyJOrCzMaURCwq&X-Amz-Signature=999ed950a244986d73b27c9e4faf29aacfcba8151f91f605c97d3049132555d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

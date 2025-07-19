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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHDYFWT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC80sMUeQqr2wSPuVXBk4agNJ3fTJW6e7gRyR78x2vpXgIhALNqOnbZ4kkLzvhGzmBXi4E4DIPA6HSz880msn0YWllZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgUPbyEYLu0IPSiIoq3AMx3RepxnK5StN93XUe73HvJrQK%2B67n0g9qLAyzesv2bBDtHOMG1Rf%2BeX6JaUyLTe9v8TGm52%2FEHFh7nKpESQ3U7vYLEwIQ2s9%2FW7TWeXkFZILloOXjlYboMBM0jipOuFmS8y1a0Yur6aC8D4WTToD3QncGZVmgpZrHq7EiEjGkQAzdBmVwuxwNVOVYUdEoZfmmqrYlis1xvCkwxD45C%2FTy30bYi2xUFqkY74FgfBVT1Tqt0Po94WJnuZy6ktwtwwnWPmpDFemKUoDj1heVGpX5JK%2Bhl04pmYThNHi7PxXCJLmKuw1ze8U756YVpgdsO8UHazA9mAdCpil9bFTfNMH6Knp94lwjUY4Z%2BkSmggYSoITX%2BY9k9rcRh1rZwcJPA5tpoP%2FOh8JNceh58Kta8eja3V8Hr%2Fqs92OFZpuX6r74%2B2bF19EhHqK94MLgJlYV2F0YsewVlQwH6Ez4aR85CR77K7DbeDn2yHebQtmsfKPNxFO9bswKFdJXj2DjEps%2Fg0hWBuFDletSXtd5EroLt%2FFWlgf4ZfTLETza1MpybHe2xfP0ffZmfSL6HYnl224jH%2Fa%2BW0cGiDV7BEpOxyig%2BPUmvcTfpf4yoYf6FFKV7No7aceXWHl9cC%2FLASxIfjCQxuzDBjqkAdcVNmuE1lqaM1yEE8%2Fi7d6oxhInqKKgU3rwmBLyfQOYOArdtUO3em4yGPgrLfrTu18oeoB10RuD4Thy2%2BQbVcFFhp08eBn1CQHvpuPnJcE2o0FJ2b94y%2FGMxeWgzj1ncdQxaJuOgfZiREF5v%2BRsvl79ZoM%2FqEerK05cEJOXiQAyx4k6T696LtYh7X8SRzGeEF%2F%2BOxhefMZZMpbBjzHeSUFdSi%2Bd&X-Amz-Signature=4f5bb05e666f689794397a0d9d483b761ccd6a89d7820f746e5d9d351691cf54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHDYFWT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC80sMUeQqr2wSPuVXBk4agNJ3fTJW6e7gRyR78x2vpXgIhALNqOnbZ4kkLzvhGzmBXi4E4DIPA6HSz880msn0YWllZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgUPbyEYLu0IPSiIoq3AMx3RepxnK5StN93XUe73HvJrQK%2B67n0g9qLAyzesv2bBDtHOMG1Rf%2BeX6JaUyLTe9v8TGm52%2FEHFh7nKpESQ3U7vYLEwIQ2s9%2FW7TWeXkFZILloOXjlYboMBM0jipOuFmS8y1a0Yur6aC8D4WTToD3QncGZVmgpZrHq7EiEjGkQAzdBmVwuxwNVOVYUdEoZfmmqrYlis1xvCkwxD45C%2FTy30bYi2xUFqkY74FgfBVT1Tqt0Po94WJnuZy6ktwtwwnWPmpDFemKUoDj1heVGpX5JK%2Bhl04pmYThNHi7PxXCJLmKuw1ze8U756YVpgdsO8UHazA9mAdCpil9bFTfNMH6Knp94lwjUY4Z%2BkSmggYSoITX%2BY9k9rcRh1rZwcJPA5tpoP%2FOh8JNceh58Kta8eja3V8Hr%2Fqs92OFZpuX6r74%2B2bF19EhHqK94MLgJlYV2F0YsewVlQwH6Ez4aR85CR77K7DbeDn2yHebQtmsfKPNxFO9bswKFdJXj2DjEps%2Fg0hWBuFDletSXtd5EroLt%2FFWlgf4ZfTLETza1MpybHe2xfP0ffZmfSL6HYnl224jH%2Fa%2BW0cGiDV7BEpOxyig%2BPUmvcTfpf4yoYf6FFKV7No7aceXWHl9cC%2FLASxIfjCQxuzDBjqkAdcVNmuE1lqaM1yEE8%2Fi7d6oxhInqKKgU3rwmBLyfQOYOArdtUO3em4yGPgrLfrTu18oeoB10RuD4Thy2%2BQbVcFFhp08eBn1CQHvpuPnJcE2o0FJ2b94y%2FGMxeWgzj1ncdQxaJuOgfZiREF5v%2BRsvl79ZoM%2FqEerK05cEJOXiQAyx4k6T696LtYh7X8SRzGeEF%2F%2BOxhefMZZMpbBjzHeSUFdSi%2Bd&X-Amz-Signature=d61eb61ed6540cd47afa28b7cd780d8d4c4e8db1fd49ee5d4d1a9e10e4e51c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHDYFWT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC80sMUeQqr2wSPuVXBk4agNJ3fTJW6e7gRyR78x2vpXgIhALNqOnbZ4kkLzvhGzmBXi4E4DIPA6HSz880msn0YWllZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgUPbyEYLu0IPSiIoq3AMx3RepxnK5StN93XUe73HvJrQK%2B67n0g9qLAyzesv2bBDtHOMG1Rf%2BeX6JaUyLTe9v8TGm52%2FEHFh7nKpESQ3U7vYLEwIQ2s9%2FW7TWeXkFZILloOXjlYboMBM0jipOuFmS8y1a0Yur6aC8D4WTToD3QncGZVmgpZrHq7EiEjGkQAzdBmVwuxwNVOVYUdEoZfmmqrYlis1xvCkwxD45C%2FTy30bYi2xUFqkY74FgfBVT1Tqt0Po94WJnuZy6ktwtwwnWPmpDFemKUoDj1heVGpX5JK%2Bhl04pmYThNHi7PxXCJLmKuw1ze8U756YVpgdsO8UHazA9mAdCpil9bFTfNMH6Knp94lwjUY4Z%2BkSmggYSoITX%2BY9k9rcRh1rZwcJPA5tpoP%2FOh8JNceh58Kta8eja3V8Hr%2Fqs92OFZpuX6r74%2B2bF19EhHqK94MLgJlYV2F0YsewVlQwH6Ez4aR85CR77K7DbeDn2yHebQtmsfKPNxFO9bswKFdJXj2DjEps%2Fg0hWBuFDletSXtd5EroLt%2FFWlgf4ZfTLETza1MpybHe2xfP0ffZmfSL6HYnl224jH%2Fa%2BW0cGiDV7BEpOxyig%2BPUmvcTfpf4yoYf6FFKV7No7aceXWHl9cC%2FLASxIfjCQxuzDBjqkAdcVNmuE1lqaM1yEE8%2Fi7d6oxhInqKKgU3rwmBLyfQOYOArdtUO3em4yGPgrLfrTu18oeoB10RuD4Thy2%2BQbVcFFhp08eBn1CQHvpuPnJcE2o0FJ2b94y%2FGMxeWgzj1ncdQxaJuOgfZiREF5v%2BRsvl79ZoM%2FqEerK05cEJOXiQAyx4k6T696LtYh7X8SRzGeEF%2F%2BOxhefMZZMpbBjzHeSUFdSi%2Bd&X-Amz-Signature=c81822029a53b7cce4681986e78af7af34285c7f493839f5aa68fab4c9411e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHDYFWT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC80sMUeQqr2wSPuVXBk4agNJ3fTJW6e7gRyR78x2vpXgIhALNqOnbZ4kkLzvhGzmBXi4E4DIPA6HSz880msn0YWllZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgUPbyEYLu0IPSiIoq3AMx3RepxnK5StN93XUe73HvJrQK%2B67n0g9qLAyzesv2bBDtHOMG1Rf%2BeX6JaUyLTe9v8TGm52%2FEHFh7nKpESQ3U7vYLEwIQ2s9%2FW7TWeXkFZILloOXjlYboMBM0jipOuFmS8y1a0Yur6aC8D4WTToD3QncGZVmgpZrHq7EiEjGkQAzdBmVwuxwNVOVYUdEoZfmmqrYlis1xvCkwxD45C%2FTy30bYi2xUFqkY74FgfBVT1Tqt0Po94WJnuZy6ktwtwwnWPmpDFemKUoDj1heVGpX5JK%2Bhl04pmYThNHi7PxXCJLmKuw1ze8U756YVpgdsO8UHazA9mAdCpil9bFTfNMH6Knp94lwjUY4Z%2BkSmggYSoITX%2BY9k9rcRh1rZwcJPA5tpoP%2FOh8JNceh58Kta8eja3V8Hr%2Fqs92OFZpuX6r74%2B2bF19EhHqK94MLgJlYV2F0YsewVlQwH6Ez4aR85CR77K7DbeDn2yHebQtmsfKPNxFO9bswKFdJXj2DjEps%2Fg0hWBuFDletSXtd5EroLt%2FFWlgf4ZfTLETza1MpybHe2xfP0ffZmfSL6HYnl224jH%2Fa%2BW0cGiDV7BEpOxyig%2BPUmvcTfpf4yoYf6FFKV7No7aceXWHl9cC%2FLASxIfjCQxuzDBjqkAdcVNmuE1lqaM1yEE8%2Fi7d6oxhInqKKgU3rwmBLyfQOYOArdtUO3em4yGPgrLfrTu18oeoB10RuD4Thy2%2BQbVcFFhp08eBn1CQHvpuPnJcE2o0FJ2b94y%2FGMxeWgzj1ncdQxaJuOgfZiREF5v%2BRsvl79ZoM%2FqEerK05cEJOXiQAyx4k6T696LtYh7X8SRzGeEF%2F%2BOxhefMZZMpbBjzHeSUFdSi%2Bd&X-Amz-Signature=7bb45ffcec04aa9570e9417c0bc58ed4c70426010c5692fe9b0bc634b8f7ebdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHDYFWT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC80sMUeQqr2wSPuVXBk4agNJ3fTJW6e7gRyR78x2vpXgIhALNqOnbZ4kkLzvhGzmBXi4E4DIPA6HSz880msn0YWllZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgUPbyEYLu0IPSiIoq3AMx3RepxnK5StN93XUe73HvJrQK%2B67n0g9qLAyzesv2bBDtHOMG1Rf%2BeX6JaUyLTe9v8TGm52%2FEHFh7nKpESQ3U7vYLEwIQ2s9%2FW7TWeXkFZILloOXjlYboMBM0jipOuFmS8y1a0Yur6aC8D4WTToD3QncGZVmgpZrHq7EiEjGkQAzdBmVwuxwNVOVYUdEoZfmmqrYlis1xvCkwxD45C%2FTy30bYi2xUFqkY74FgfBVT1Tqt0Po94WJnuZy6ktwtwwnWPmpDFemKUoDj1heVGpX5JK%2Bhl04pmYThNHi7PxXCJLmKuw1ze8U756YVpgdsO8UHazA9mAdCpil9bFTfNMH6Knp94lwjUY4Z%2BkSmggYSoITX%2BY9k9rcRh1rZwcJPA5tpoP%2FOh8JNceh58Kta8eja3V8Hr%2Fqs92OFZpuX6r74%2B2bF19EhHqK94MLgJlYV2F0YsewVlQwH6Ez4aR85CR77K7DbeDn2yHebQtmsfKPNxFO9bswKFdJXj2DjEps%2Fg0hWBuFDletSXtd5EroLt%2FFWlgf4ZfTLETza1MpybHe2xfP0ffZmfSL6HYnl224jH%2Fa%2BW0cGiDV7BEpOxyig%2BPUmvcTfpf4yoYf6FFKV7No7aceXWHl9cC%2FLASxIfjCQxuzDBjqkAdcVNmuE1lqaM1yEE8%2Fi7d6oxhInqKKgU3rwmBLyfQOYOArdtUO3em4yGPgrLfrTu18oeoB10RuD4Thy2%2BQbVcFFhp08eBn1CQHvpuPnJcE2o0FJ2b94y%2FGMxeWgzj1ncdQxaJuOgfZiREF5v%2BRsvl79ZoM%2FqEerK05cEJOXiQAyx4k6T696LtYh7X8SRzGeEF%2F%2BOxhefMZZMpbBjzHeSUFdSi%2Bd&X-Amz-Signature=ee669ca0e337d24967700c0c7ab966ef3f22571d6ad577acb4abd52beaf2adf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHDYFWT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC80sMUeQqr2wSPuVXBk4agNJ3fTJW6e7gRyR78x2vpXgIhALNqOnbZ4kkLzvhGzmBXi4E4DIPA6HSz880msn0YWllZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgUPbyEYLu0IPSiIoq3AMx3RepxnK5StN93XUe73HvJrQK%2B67n0g9qLAyzesv2bBDtHOMG1Rf%2BeX6JaUyLTe9v8TGm52%2FEHFh7nKpESQ3U7vYLEwIQ2s9%2FW7TWeXkFZILloOXjlYboMBM0jipOuFmS8y1a0Yur6aC8D4WTToD3QncGZVmgpZrHq7EiEjGkQAzdBmVwuxwNVOVYUdEoZfmmqrYlis1xvCkwxD45C%2FTy30bYi2xUFqkY74FgfBVT1Tqt0Po94WJnuZy6ktwtwwnWPmpDFemKUoDj1heVGpX5JK%2Bhl04pmYThNHi7PxXCJLmKuw1ze8U756YVpgdsO8UHazA9mAdCpil9bFTfNMH6Knp94lwjUY4Z%2BkSmggYSoITX%2BY9k9rcRh1rZwcJPA5tpoP%2FOh8JNceh58Kta8eja3V8Hr%2Fqs92OFZpuX6r74%2B2bF19EhHqK94MLgJlYV2F0YsewVlQwH6Ez4aR85CR77K7DbeDn2yHebQtmsfKPNxFO9bswKFdJXj2DjEps%2Fg0hWBuFDletSXtd5EroLt%2FFWlgf4ZfTLETza1MpybHe2xfP0ffZmfSL6HYnl224jH%2Fa%2BW0cGiDV7BEpOxyig%2BPUmvcTfpf4yoYf6FFKV7No7aceXWHl9cC%2FLASxIfjCQxuzDBjqkAdcVNmuE1lqaM1yEE8%2Fi7d6oxhInqKKgU3rwmBLyfQOYOArdtUO3em4yGPgrLfrTu18oeoB10RuD4Thy2%2BQbVcFFhp08eBn1CQHvpuPnJcE2o0FJ2b94y%2FGMxeWgzj1ncdQxaJuOgfZiREF5v%2BRsvl79ZoM%2FqEerK05cEJOXiQAyx4k6T696LtYh7X8SRzGeEF%2F%2BOxhefMZZMpbBjzHeSUFdSi%2Bd&X-Amz-Signature=b470182ad2940a718d53db8245f6e6267947bbdd2aad1304ceefc639e6f14159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHDYFWT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC80sMUeQqr2wSPuVXBk4agNJ3fTJW6e7gRyR78x2vpXgIhALNqOnbZ4kkLzvhGzmBXi4E4DIPA6HSz880msn0YWllZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgUPbyEYLu0IPSiIoq3AMx3RepxnK5StN93XUe73HvJrQK%2B67n0g9qLAyzesv2bBDtHOMG1Rf%2BeX6JaUyLTe9v8TGm52%2FEHFh7nKpESQ3U7vYLEwIQ2s9%2FW7TWeXkFZILloOXjlYboMBM0jipOuFmS8y1a0Yur6aC8D4WTToD3QncGZVmgpZrHq7EiEjGkQAzdBmVwuxwNVOVYUdEoZfmmqrYlis1xvCkwxD45C%2FTy30bYi2xUFqkY74FgfBVT1Tqt0Po94WJnuZy6ktwtwwnWPmpDFemKUoDj1heVGpX5JK%2Bhl04pmYThNHi7PxXCJLmKuw1ze8U756YVpgdsO8UHazA9mAdCpil9bFTfNMH6Knp94lwjUY4Z%2BkSmggYSoITX%2BY9k9rcRh1rZwcJPA5tpoP%2FOh8JNceh58Kta8eja3V8Hr%2Fqs92OFZpuX6r74%2B2bF19EhHqK94MLgJlYV2F0YsewVlQwH6Ez4aR85CR77K7DbeDn2yHebQtmsfKPNxFO9bswKFdJXj2DjEps%2Fg0hWBuFDletSXtd5EroLt%2FFWlgf4ZfTLETza1MpybHe2xfP0ffZmfSL6HYnl224jH%2Fa%2BW0cGiDV7BEpOxyig%2BPUmvcTfpf4yoYf6FFKV7No7aceXWHl9cC%2FLASxIfjCQxuzDBjqkAdcVNmuE1lqaM1yEE8%2Fi7d6oxhInqKKgU3rwmBLyfQOYOArdtUO3em4yGPgrLfrTu18oeoB10RuD4Thy2%2BQbVcFFhp08eBn1CQHvpuPnJcE2o0FJ2b94y%2FGMxeWgzj1ncdQxaJuOgfZiREF5v%2BRsvl79ZoM%2FqEerK05cEJOXiQAyx4k6T696LtYh7X8SRzGeEF%2F%2BOxhefMZZMpbBjzHeSUFdSi%2Bd&X-Amz-Signature=dfa02d87b90f2ede4bc5322da07f4a77e2a8a7d23b14727f54ae8367c445c86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

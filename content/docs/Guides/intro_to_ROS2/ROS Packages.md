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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H7YXJOT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDEvDUikoXvIsrcwjFB51BB%2BvZ1Dftq65HSkqptB34nHAiEA6nSUTZ6%2B0fDDrcfUOGrYeYBQxA4rdmYL5%2BAukwefgOMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPR3mpCrcKVa%2FcHtnSrcA%2F8xP0JD9VxMIxeQpqvmMUNZ2l%2BTN8YJQVplRuigVUg4Bex7BojCS54s1zThv0vcu9xGubmcFfhPP8AVKYkNRIV1YR5%2FaXasUs1TwE%2BSwEUpL67K00Yj64S1yqWdj%2F9ACwUkfBsJuV1DZjWbEb9qaKeH7T47eP%2Bd0cEhCZmzAcB5QSidF5nwKwwT6kGJxeAH%2BlbX3QM8%2FyPb3TdRttLlAYe2ESiKY1oexp7mxGsTmhk5jkYqfxpl4qRoI3H5TZOxGBMMHq1FAWlZQmjLl9rLn5VVSfXqbywaVbrq3yHCBZ3HRQ8xMO2%2BpT571MSNvsDGBxwtsNh%2BGfCX4VqkTVCuw%2BP1BL%2BbKmjw%2BGij4TYsIGKQqsa9%2F%2BhlRXTeajlMnnNtwi3dOvl4zBQ5yaQgtdrs99m%2Fu%2FvKVNB3rdXWGFFAxIgvCvoNsutMDiOIF1dIpTkIVcGambCvVgFORbCZqKvhC8gWdaIFei6T29P2%2Bg0fBBsGQ5NkdbG%2B8afFZ8OTh1fnNGTMH44tSBT67pV1P14VF2g%2Bo4bFQcoc5zuRC13soZ9vr0EDWJIPQl5iCMjOnNKkopnhOxygKEE%2FKZPK7pKVuwFTPaCqKCgnuKExO%2BT1RkwvFiBzkL3lzpUTegvxMM2Cr74GOqUBXpjEn%2FJtq0uqvwZyiAhoWH5uYFabv1gIRMKX%2FcBiAhFg86%2Fh%2BJqJ6qqmzHbwkmFSL93E1hBpHk4TtcfmClb%2Fi2jRysq8vqIfTLKDvTJ59oq%2F%2Fn8%2F3bAg8LbU7skdzTFZXshYNJcRUR5R09aFND1y1Jjq%2B4zGgyX2FMBAxILbsi5YGuPC%2Fqxt44%2BJHDm2CPW8YXDkYJwpYtuQhMFkFUAwTnIgOtxS&X-Amz-Signature=a7f5d9404e73727f02866ee0632102c75e38efbd310a9ff284b364b7d573adc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H7YXJOT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDEvDUikoXvIsrcwjFB51BB%2BvZ1Dftq65HSkqptB34nHAiEA6nSUTZ6%2B0fDDrcfUOGrYeYBQxA4rdmYL5%2BAukwefgOMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPR3mpCrcKVa%2FcHtnSrcA%2F8xP0JD9VxMIxeQpqvmMUNZ2l%2BTN8YJQVplRuigVUg4Bex7BojCS54s1zThv0vcu9xGubmcFfhPP8AVKYkNRIV1YR5%2FaXasUs1TwE%2BSwEUpL67K00Yj64S1yqWdj%2F9ACwUkfBsJuV1DZjWbEb9qaKeH7T47eP%2Bd0cEhCZmzAcB5QSidF5nwKwwT6kGJxeAH%2BlbX3QM8%2FyPb3TdRttLlAYe2ESiKY1oexp7mxGsTmhk5jkYqfxpl4qRoI3H5TZOxGBMMHq1FAWlZQmjLl9rLn5VVSfXqbywaVbrq3yHCBZ3HRQ8xMO2%2BpT571MSNvsDGBxwtsNh%2BGfCX4VqkTVCuw%2BP1BL%2BbKmjw%2BGij4TYsIGKQqsa9%2F%2BhlRXTeajlMnnNtwi3dOvl4zBQ5yaQgtdrs99m%2Fu%2FvKVNB3rdXWGFFAxIgvCvoNsutMDiOIF1dIpTkIVcGambCvVgFORbCZqKvhC8gWdaIFei6T29P2%2Bg0fBBsGQ5NkdbG%2B8afFZ8OTh1fnNGTMH44tSBT67pV1P14VF2g%2Bo4bFQcoc5zuRC13soZ9vr0EDWJIPQl5iCMjOnNKkopnhOxygKEE%2FKZPK7pKVuwFTPaCqKCgnuKExO%2BT1RkwvFiBzkL3lzpUTegvxMM2Cr74GOqUBXpjEn%2FJtq0uqvwZyiAhoWH5uYFabv1gIRMKX%2FcBiAhFg86%2Fh%2BJqJ6qqmzHbwkmFSL93E1hBpHk4TtcfmClb%2Fi2jRysq8vqIfTLKDvTJ59oq%2F%2Fn8%2F3bAg8LbU7skdzTFZXshYNJcRUR5R09aFND1y1Jjq%2B4zGgyX2FMBAxILbsi5YGuPC%2Fqxt44%2BJHDm2CPW8YXDkYJwpYtuQhMFkFUAwTnIgOtxS&X-Amz-Signature=4b23600d90d1d468087cfa340ee9b9b8d99da6d487c190a208f61a4a26e69bad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H7YXJOT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDEvDUikoXvIsrcwjFB51BB%2BvZ1Dftq65HSkqptB34nHAiEA6nSUTZ6%2B0fDDrcfUOGrYeYBQxA4rdmYL5%2BAukwefgOMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPR3mpCrcKVa%2FcHtnSrcA%2F8xP0JD9VxMIxeQpqvmMUNZ2l%2BTN8YJQVplRuigVUg4Bex7BojCS54s1zThv0vcu9xGubmcFfhPP8AVKYkNRIV1YR5%2FaXasUs1TwE%2BSwEUpL67K00Yj64S1yqWdj%2F9ACwUkfBsJuV1DZjWbEb9qaKeH7T47eP%2Bd0cEhCZmzAcB5QSidF5nwKwwT6kGJxeAH%2BlbX3QM8%2FyPb3TdRttLlAYe2ESiKY1oexp7mxGsTmhk5jkYqfxpl4qRoI3H5TZOxGBMMHq1FAWlZQmjLl9rLn5VVSfXqbywaVbrq3yHCBZ3HRQ8xMO2%2BpT571MSNvsDGBxwtsNh%2BGfCX4VqkTVCuw%2BP1BL%2BbKmjw%2BGij4TYsIGKQqsa9%2F%2BhlRXTeajlMnnNtwi3dOvl4zBQ5yaQgtdrs99m%2Fu%2FvKVNB3rdXWGFFAxIgvCvoNsutMDiOIF1dIpTkIVcGambCvVgFORbCZqKvhC8gWdaIFei6T29P2%2Bg0fBBsGQ5NkdbG%2B8afFZ8OTh1fnNGTMH44tSBT67pV1P14VF2g%2Bo4bFQcoc5zuRC13soZ9vr0EDWJIPQl5iCMjOnNKkopnhOxygKEE%2FKZPK7pKVuwFTPaCqKCgnuKExO%2BT1RkwvFiBzkL3lzpUTegvxMM2Cr74GOqUBXpjEn%2FJtq0uqvwZyiAhoWH5uYFabv1gIRMKX%2FcBiAhFg86%2Fh%2BJqJ6qqmzHbwkmFSL93E1hBpHk4TtcfmClb%2Fi2jRysq8vqIfTLKDvTJ59oq%2F%2Fn8%2F3bAg8LbU7skdzTFZXshYNJcRUR5R09aFND1y1Jjq%2B4zGgyX2FMBAxILbsi5YGuPC%2Fqxt44%2BJHDm2CPW8YXDkYJwpYtuQhMFkFUAwTnIgOtxS&X-Amz-Signature=5a9327718c473a9d908ba0f78ae1ee6c312ee19e129c02f26fb72d049d249d77&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H7YXJOT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDEvDUikoXvIsrcwjFB51BB%2BvZ1Dftq65HSkqptB34nHAiEA6nSUTZ6%2B0fDDrcfUOGrYeYBQxA4rdmYL5%2BAukwefgOMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPR3mpCrcKVa%2FcHtnSrcA%2F8xP0JD9VxMIxeQpqvmMUNZ2l%2BTN8YJQVplRuigVUg4Bex7BojCS54s1zThv0vcu9xGubmcFfhPP8AVKYkNRIV1YR5%2FaXasUs1TwE%2BSwEUpL67K00Yj64S1yqWdj%2F9ACwUkfBsJuV1DZjWbEb9qaKeH7T47eP%2Bd0cEhCZmzAcB5QSidF5nwKwwT6kGJxeAH%2BlbX3QM8%2FyPb3TdRttLlAYe2ESiKY1oexp7mxGsTmhk5jkYqfxpl4qRoI3H5TZOxGBMMHq1FAWlZQmjLl9rLn5VVSfXqbywaVbrq3yHCBZ3HRQ8xMO2%2BpT571MSNvsDGBxwtsNh%2BGfCX4VqkTVCuw%2BP1BL%2BbKmjw%2BGij4TYsIGKQqsa9%2F%2BhlRXTeajlMnnNtwi3dOvl4zBQ5yaQgtdrs99m%2Fu%2FvKVNB3rdXWGFFAxIgvCvoNsutMDiOIF1dIpTkIVcGambCvVgFORbCZqKvhC8gWdaIFei6T29P2%2Bg0fBBsGQ5NkdbG%2B8afFZ8OTh1fnNGTMH44tSBT67pV1P14VF2g%2Bo4bFQcoc5zuRC13soZ9vr0EDWJIPQl5iCMjOnNKkopnhOxygKEE%2FKZPK7pKVuwFTPaCqKCgnuKExO%2BT1RkwvFiBzkL3lzpUTegvxMM2Cr74GOqUBXpjEn%2FJtq0uqvwZyiAhoWH5uYFabv1gIRMKX%2FcBiAhFg86%2Fh%2BJqJ6qqmzHbwkmFSL93E1hBpHk4TtcfmClb%2Fi2jRysq8vqIfTLKDvTJ59oq%2F%2Fn8%2F3bAg8LbU7skdzTFZXshYNJcRUR5R09aFND1y1Jjq%2B4zGgyX2FMBAxILbsi5YGuPC%2Fqxt44%2BJHDm2CPW8YXDkYJwpYtuQhMFkFUAwTnIgOtxS&X-Amz-Signature=d0633b6f4e80b379b30a1a34b5145388b8a431a348260cf2cca5dfb6ea71dc90&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H7YXJOT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDEvDUikoXvIsrcwjFB51BB%2BvZ1Dftq65HSkqptB34nHAiEA6nSUTZ6%2B0fDDrcfUOGrYeYBQxA4rdmYL5%2BAukwefgOMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPR3mpCrcKVa%2FcHtnSrcA%2F8xP0JD9VxMIxeQpqvmMUNZ2l%2BTN8YJQVplRuigVUg4Bex7BojCS54s1zThv0vcu9xGubmcFfhPP8AVKYkNRIV1YR5%2FaXasUs1TwE%2BSwEUpL67K00Yj64S1yqWdj%2F9ACwUkfBsJuV1DZjWbEb9qaKeH7T47eP%2Bd0cEhCZmzAcB5QSidF5nwKwwT6kGJxeAH%2BlbX3QM8%2FyPb3TdRttLlAYe2ESiKY1oexp7mxGsTmhk5jkYqfxpl4qRoI3H5TZOxGBMMHq1FAWlZQmjLl9rLn5VVSfXqbywaVbrq3yHCBZ3HRQ8xMO2%2BpT571MSNvsDGBxwtsNh%2BGfCX4VqkTVCuw%2BP1BL%2BbKmjw%2BGij4TYsIGKQqsa9%2F%2BhlRXTeajlMnnNtwi3dOvl4zBQ5yaQgtdrs99m%2Fu%2FvKVNB3rdXWGFFAxIgvCvoNsutMDiOIF1dIpTkIVcGambCvVgFORbCZqKvhC8gWdaIFei6T29P2%2Bg0fBBsGQ5NkdbG%2B8afFZ8OTh1fnNGTMH44tSBT67pV1P14VF2g%2Bo4bFQcoc5zuRC13soZ9vr0EDWJIPQl5iCMjOnNKkopnhOxygKEE%2FKZPK7pKVuwFTPaCqKCgnuKExO%2BT1RkwvFiBzkL3lzpUTegvxMM2Cr74GOqUBXpjEn%2FJtq0uqvwZyiAhoWH5uYFabv1gIRMKX%2FcBiAhFg86%2Fh%2BJqJ6qqmzHbwkmFSL93E1hBpHk4TtcfmClb%2Fi2jRysq8vqIfTLKDvTJ59oq%2F%2Fn8%2F3bAg8LbU7skdzTFZXshYNJcRUR5R09aFND1y1Jjq%2B4zGgyX2FMBAxILbsi5YGuPC%2Fqxt44%2BJHDm2CPW8YXDkYJwpYtuQhMFkFUAwTnIgOtxS&X-Amz-Signature=efb1d29e06bd1b98f1f475f9719d71867abaf8aa62847b076c3a05ae3f28a5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H7YXJOT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDEvDUikoXvIsrcwjFB51BB%2BvZ1Dftq65HSkqptB34nHAiEA6nSUTZ6%2B0fDDrcfUOGrYeYBQxA4rdmYL5%2BAukwefgOMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPR3mpCrcKVa%2FcHtnSrcA%2F8xP0JD9VxMIxeQpqvmMUNZ2l%2BTN8YJQVplRuigVUg4Bex7BojCS54s1zThv0vcu9xGubmcFfhPP8AVKYkNRIV1YR5%2FaXasUs1TwE%2BSwEUpL67K00Yj64S1yqWdj%2F9ACwUkfBsJuV1DZjWbEb9qaKeH7T47eP%2Bd0cEhCZmzAcB5QSidF5nwKwwT6kGJxeAH%2BlbX3QM8%2FyPb3TdRttLlAYe2ESiKY1oexp7mxGsTmhk5jkYqfxpl4qRoI3H5TZOxGBMMHq1FAWlZQmjLl9rLn5VVSfXqbywaVbrq3yHCBZ3HRQ8xMO2%2BpT571MSNvsDGBxwtsNh%2BGfCX4VqkTVCuw%2BP1BL%2BbKmjw%2BGij4TYsIGKQqsa9%2F%2BhlRXTeajlMnnNtwi3dOvl4zBQ5yaQgtdrs99m%2Fu%2FvKVNB3rdXWGFFAxIgvCvoNsutMDiOIF1dIpTkIVcGambCvVgFORbCZqKvhC8gWdaIFei6T29P2%2Bg0fBBsGQ5NkdbG%2B8afFZ8OTh1fnNGTMH44tSBT67pV1P14VF2g%2Bo4bFQcoc5zuRC13soZ9vr0EDWJIPQl5iCMjOnNKkopnhOxygKEE%2FKZPK7pKVuwFTPaCqKCgnuKExO%2BT1RkwvFiBzkL3lzpUTegvxMM2Cr74GOqUBXpjEn%2FJtq0uqvwZyiAhoWH5uYFabv1gIRMKX%2FcBiAhFg86%2Fh%2BJqJ6qqmzHbwkmFSL93E1hBpHk4TtcfmClb%2Fi2jRysq8vqIfTLKDvTJ59oq%2F%2Fn8%2F3bAg8LbU7skdzTFZXshYNJcRUR5R09aFND1y1Jjq%2B4zGgyX2FMBAxILbsi5YGuPC%2Fqxt44%2BJHDm2CPW8YXDkYJwpYtuQhMFkFUAwTnIgOtxS&X-Amz-Signature=0309312e468f37e0f695b08ccd4070ddb621cc30e293686733db8285840c097c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H7YXJOT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDEvDUikoXvIsrcwjFB51BB%2BvZ1Dftq65HSkqptB34nHAiEA6nSUTZ6%2B0fDDrcfUOGrYeYBQxA4rdmYL5%2BAukwefgOMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPR3mpCrcKVa%2FcHtnSrcA%2F8xP0JD9VxMIxeQpqvmMUNZ2l%2BTN8YJQVplRuigVUg4Bex7BojCS54s1zThv0vcu9xGubmcFfhPP8AVKYkNRIV1YR5%2FaXasUs1TwE%2BSwEUpL67K00Yj64S1yqWdj%2F9ACwUkfBsJuV1DZjWbEb9qaKeH7T47eP%2Bd0cEhCZmzAcB5QSidF5nwKwwT6kGJxeAH%2BlbX3QM8%2FyPb3TdRttLlAYe2ESiKY1oexp7mxGsTmhk5jkYqfxpl4qRoI3H5TZOxGBMMHq1FAWlZQmjLl9rLn5VVSfXqbywaVbrq3yHCBZ3HRQ8xMO2%2BpT571MSNvsDGBxwtsNh%2BGfCX4VqkTVCuw%2BP1BL%2BbKmjw%2BGij4TYsIGKQqsa9%2F%2BhlRXTeajlMnnNtwi3dOvl4zBQ5yaQgtdrs99m%2Fu%2FvKVNB3rdXWGFFAxIgvCvoNsutMDiOIF1dIpTkIVcGambCvVgFORbCZqKvhC8gWdaIFei6T29P2%2Bg0fBBsGQ5NkdbG%2B8afFZ8OTh1fnNGTMH44tSBT67pV1P14VF2g%2Bo4bFQcoc5zuRC13soZ9vr0EDWJIPQl5iCMjOnNKkopnhOxygKEE%2FKZPK7pKVuwFTPaCqKCgnuKExO%2BT1RkwvFiBzkL3lzpUTegvxMM2Cr74GOqUBXpjEn%2FJtq0uqvwZyiAhoWH5uYFabv1gIRMKX%2FcBiAhFg86%2Fh%2BJqJ6qqmzHbwkmFSL93E1hBpHk4TtcfmClb%2Fi2jRysq8vqIfTLKDvTJ59oq%2F%2Fn8%2F3bAg8LbU7skdzTFZXshYNJcRUR5R09aFND1y1Jjq%2B4zGgyX2FMBAxILbsi5YGuPC%2Fqxt44%2BJHDm2CPW8YXDkYJwpYtuQhMFkFUAwTnIgOtxS&X-Amz-Signature=a7236989c86d96cb8e35b6996fcabc40ecaaa6c836b307477a900865249665d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

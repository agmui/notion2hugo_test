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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV2SUX4W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR9tliLUL74%2BDpi5sjvS6hDuatatJx6IVMxbNk%2BWB7sgIhAO7apTmHWvT%2BFIF03VFP8xanrOXtbgCqmHOSoe0OvEvFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5rQojTTLbMYCQDBoq3AOen009I2himGT49nvPx372ksVDJOSqm3l548hXv9VFC0iJ0Hv5LHLEBPvN%2FkUmB%2BRTEn8OXwEcWOJHI%2FXGyfGosIhIJvxQWB1TcYhqOUpMBujNCKzRQ4QpZqIJVIbo0CG0d24bWVMn%2B6mEcvEbOYXZjxz5KKwg9sf1AlBhNxE00NWQuRMNwUcxLvuGn7mWrrBLEh1d7X9wveJzT2di00O%2Bq%2FXBhOL0V8l3L205%2Fsl9AXqXSN45B3jvWw1autzAoxmN8X3LqgpMvkMPl1dy1eEyObDQNGTpky4tTEuZlvVmUD5aq329V4MUzFgo2YSacbfvflKbHtNk7bj08iV97Y%2B%2FRh6JCuQeSNLyYrqgsJD96hjegjRXOQsvIFGYHP%2BAd50Dz%2BaZAjlUCmEAxJQJioTEl5scQp32iokGmGb8uKC190D9yxYPAzp8mTN8vjQKyjlEN4ejLA8u4DI6r5CCa0MQ5Z%2Br7Wc59knaEod1CvBYPC4J9NrJ7YVEAIsIAPE4jxEsrvvUwg%2ByQIaw0FoajypqtW0x4aZOHQSKW0SGYdV9cNFGH4vIk%2FODTk6URXjtJyZHJnKHnVr5suOZ2P16kS3VVFIfYFI7FXY701R1zRfYWNDKmTUjvGWlAG1zcjDzzOi8BjqkAQYdm3mtHtrXPMNwJga9UEwrkRHmQhDDcdxdMH%2BKHVW46l4w3IGKBsgWssXlgL%2Bz5hrYwhEggeKGugqNEO0K9sFXIsBVYOXHaOAgI%2BNna7S0ozbtkq%2FYe%2FaNE5s2SvhYhutCTDgwgR7jy%2FDZSSxZWpx6ZTVjniSLnOS%2FyZpzqkWLTlk1v65PM58BuxXU7fmZr9k0jh3y%2F%2B13fdg3uYovQ%2FZu51fW&X-Amz-Signature=7c6cf6d8155f072c0dbd1618ab7c0a67114b1accea63515c5bdd1dc769d93233&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV2SUX4W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR9tliLUL74%2BDpi5sjvS6hDuatatJx6IVMxbNk%2BWB7sgIhAO7apTmHWvT%2BFIF03VFP8xanrOXtbgCqmHOSoe0OvEvFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5rQojTTLbMYCQDBoq3AOen009I2himGT49nvPx372ksVDJOSqm3l548hXv9VFC0iJ0Hv5LHLEBPvN%2FkUmB%2BRTEn8OXwEcWOJHI%2FXGyfGosIhIJvxQWB1TcYhqOUpMBujNCKzRQ4QpZqIJVIbo0CG0d24bWVMn%2B6mEcvEbOYXZjxz5KKwg9sf1AlBhNxE00NWQuRMNwUcxLvuGn7mWrrBLEh1d7X9wveJzT2di00O%2Bq%2FXBhOL0V8l3L205%2Fsl9AXqXSN45B3jvWw1autzAoxmN8X3LqgpMvkMPl1dy1eEyObDQNGTpky4tTEuZlvVmUD5aq329V4MUzFgo2YSacbfvflKbHtNk7bj08iV97Y%2B%2FRh6JCuQeSNLyYrqgsJD96hjegjRXOQsvIFGYHP%2BAd50Dz%2BaZAjlUCmEAxJQJioTEl5scQp32iokGmGb8uKC190D9yxYPAzp8mTN8vjQKyjlEN4ejLA8u4DI6r5CCa0MQ5Z%2Br7Wc59knaEod1CvBYPC4J9NrJ7YVEAIsIAPE4jxEsrvvUwg%2ByQIaw0FoajypqtW0x4aZOHQSKW0SGYdV9cNFGH4vIk%2FODTk6URXjtJyZHJnKHnVr5suOZ2P16kS3VVFIfYFI7FXY701R1zRfYWNDKmTUjvGWlAG1zcjDzzOi8BjqkAQYdm3mtHtrXPMNwJga9UEwrkRHmQhDDcdxdMH%2BKHVW46l4w3IGKBsgWssXlgL%2Bz5hrYwhEggeKGugqNEO0K9sFXIsBVYOXHaOAgI%2BNna7S0ozbtkq%2FYe%2FaNE5s2SvhYhutCTDgwgR7jy%2FDZSSxZWpx6ZTVjniSLnOS%2FyZpzqkWLTlk1v65PM58BuxXU7fmZr9k0jh3y%2F%2B13fdg3uYovQ%2FZu51fW&X-Amz-Signature=3d116fe8c705799afdbfe8cd5f14157c25d85b6f23d882ac51efe973161835f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV2SUX4W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR9tliLUL74%2BDpi5sjvS6hDuatatJx6IVMxbNk%2BWB7sgIhAO7apTmHWvT%2BFIF03VFP8xanrOXtbgCqmHOSoe0OvEvFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5rQojTTLbMYCQDBoq3AOen009I2himGT49nvPx372ksVDJOSqm3l548hXv9VFC0iJ0Hv5LHLEBPvN%2FkUmB%2BRTEn8OXwEcWOJHI%2FXGyfGosIhIJvxQWB1TcYhqOUpMBujNCKzRQ4QpZqIJVIbo0CG0d24bWVMn%2B6mEcvEbOYXZjxz5KKwg9sf1AlBhNxE00NWQuRMNwUcxLvuGn7mWrrBLEh1d7X9wveJzT2di00O%2Bq%2FXBhOL0V8l3L205%2Fsl9AXqXSN45B3jvWw1autzAoxmN8X3LqgpMvkMPl1dy1eEyObDQNGTpky4tTEuZlvVmUD5aq329V4MUzFgo2YSacbfvflKbHtNk7bj08iV97Y%2B%2FRh6JCuQeSNLyYrqgsJD96hjegjRXOQsvIFGYHP%2BAd50Dz%2BaZAjlUCmEAxJQJioTEl5scQp32iokGmGb8uKC190D9yxYPAzp8mTN8vjQKyjlEN4ejLA8u4DI6r5CCa0MQ5Z%2Br7Wc59knaEod1CvBYPC4J9NrJ7YVEAIsIAPE4jxEsrvvUwg%2ByQIaw0FoajypqtW0x4aZOHQSKW0SGYdV9cNFGH4vIk%2FODTk6URXjtJyZHJnKHnVr5suOZ2P16kS3VVFIfYFI7FXY701R1zRfYWNDKmTUjvGWlAG1zcjDzzOi8BjqkAQYdm3mtHtrXPMNwJga9UEwrkRHmQhDDcdxdMH%2BKHVW46l4w3IGKBsgWssXlgL%2Bz5hrYwhEggeKGugqNEO0K9sFXIsBVYOXHaOAgI%2BNna7S0ozbtkq%2FYe%2FaNE5s2SvhYhutCTDgwgR7jy%2FDZSSxZWpx6ZTVjniSLnOS%2FyZpzqkWLTlk1v65PM58BuxXU7fmZr9k0jh3y%2F%2B13fdg3uYovQ%2FZu51fW&X-Amz-Signature=89426b266f7a42d6e6e71506b2ae018162bc66ea14805a21210470130f9cbc7a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV2SUX4W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR9tliLUL74%2BDpi5sjvS6hDuatatJx6IVMxbNk%2BWB7sgIhAO7apTmHWvT%2BFIF03VFP8xanrOXtbgCqmHOSoe0OvEvFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5rQojTTLbMYCQDBoq3AOen009I2himGT49nvPx372ksVDJOSqm3l548hXv9VFC0iJ0Hv5LHLEBPvN%2FkUmB%2BRTEn8OXwEcWOJHI%2FXGyfGosIhIJvxQWB1TcYhqOUpMBujNCKzRQ4QpZqIJVIbo0CG0d24bWVMn%2B6mEcvEbOYXZjxz5KKwg9sf1AlBhNxE00NWQuRMNwUcxLvuGn7mWrrBLEh1d7X9wveJzT2di00O%2Bq%2FXBhOL0V8l3L205%2Fsl9AXqXSN45B3jvWw1autzAoxmN8X3LqgpMvkMPl1dy1eEyObDQNGTpky4tTEuZlvVmUD5aq329V4MUzFgo2YSacbfvflKbHtNk7bj08iV97Y%2B%2FRh6JCuQeSNLyYrqgsJD96hjegjRXOQsvIFGYHP%2BAd50Dz%2BaZAjlUCmEAxJQJioTEl5scQp32iokGmGb8uKC190D9yxYPAzp8mTN8vjQKyjlEN4ejLA8u4DI6r5CCa0MQ5Z%2Br7Wc59knaEod1CvBYPC4J9NrJ7YVEAIsIAPE4jxEsrvvUwg%2ByQIaw0FoajypqtW0x4aZOHQSKW0SGYdV9cNFGH4vIk%2FODTk6URXjtJyZHJnKHnVr5suOZ2P16kS3VVFIfYFI7FXY701R1zRfYWNDKmTUjvGWlAG1zcjDzzOi8BjqkAQYdm3mtHtrXPMNwJga9UEwrkRHmQhDDcdxdMH%2BKHVW46l4w3IGKBsgWssXlgL%2Bz5hrYwhEggeKGugqNEO0K9sFXIsBVYOXHaOAgI%2BNna7S0ozbtkq%2FYe%2FaNE5s2SvhYhutCTDgwgR7jy%2FDZSSxZWpx6ZTVjniSLnOS%2FyZpzqkWLTlk1v65PM58BuxXU7fmZr9k0jh3y%2F%2B13fdg3uYovQ%2FZu51fW&X-Amz-Signature=05e1ca246e4ab4bbd214383ce44de0e9dcb98e288a4e29e4c8f8a33145858f48&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV2SUX4W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR9tliLUL74%2BDpi5sjvS6hDuatatJx6IVMxbNk%2BWB7sgIhAO7apTmHWvT%2BFIF03VFP8xanrOXtbgCqmHOSoe0OvEvFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5rQojTTLbMYCQDBoq3AOen009I2himGT49nvPx372ksVDJOSqm3l548hXv9VFC0iJ0Hv5LHLEBPvN%2FkUmB%2BRTEn8OXwEcWOJHI%2FXGyfGosIhIJvxQWB1TcYhqOUpMBujNCKzRQ4QpZqIJVIbo0CG0d24bWVMn%2B6mEcvEbOYXZjxz5KKwg9sf1AlBhNxE00NWQuRMNwUcxLvuGn7mWrrBLEh1d7X9wveJzT2di00O%2Bq%2FXBhOL0V8l3L205%2Fsl9AXqXSN45B3jvWw1autzAoxmN8X3LqgpMvkMPl1dy1eEyObDQNGTpky4tTEuZlvVmUD5aq329V4MUzFgo2YSacbfvflKbHtNk7bj08iV97Y%2B%2FRh6JCuQeSNLyYrqgsJD96hjegjRXOQsvIFGYHP%2BAd50Dz%2BaZAjlUCmEAxJQJioTEl5scQp32iokGmGb8uKC190D9yxYPAzp8mTN8vjQKyjlEN4ejLA8u4DI6r5CCa0MQ5Z%2Br7Wc59knaEod1CvBYPC4J9NrJ7YVEAIsIAPE4jxEsrvvUwg%2ByQIaw0FoajypqtW0x4aZOHQSKW0SGYdV9cNFGH4vIk%2FODTk6URXjtJyZHJnKHnVr5suOZ2P16kS3VVFIfYFI7FXY701R1zRfYWNDKmTUjvGWlAG1zcjDzzOi8BjqkAQYdm3mtHtrXPMNwJga9UEwrkRHmQhDDcdxdMH%2BKHVW46l4w3IGKBsgWssXlgL%2Bz5hrYwhEggeKGugqNEO0K9sFXIsBVYOXHaOAgI%2BNna7S0ozbtkq%2FYe%2FaNE5s2SvhYhutCTDgwgR7jy%2FDZSSxZWpx6ZTVjniSLnOS%2FyZpzqkWLTlk1v65PM58BuxXU7fmZr9k0jh3y%2F%2B13fdg3uYovQ%2FZu51fW&X-Amz-Signature=4c74304c4fe1af91cdd4806a2f199555d58723a0e54adc3e1882bf441b5f6708&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV2SUX4W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR9tliLUL74%2BDpi5sjvS6hDuatatJx6IVMxbNk%2BWB7sgIhAO7apTmHWvT%2BFIF03VFP8xanrOXtbgCqmHOSoe0OvEvFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5rQojTTLbMYCQDBoq3AOen009I2himGT49nvPx372ksVDJOSqm3l548hXv9VFC0iJ0Hv5LHLEBPvN%2FkUmB%2BRTEn8OXwEcWOJHI%2FXGyfGosIhIJvxQWB1TcYhqOUpMBujNCKzRQ4QpZqIJVIbo0CG0d24bWVMn%2B6mEcvEbOYXZjxz5KKwg9sf1AlBhNxE00NWQuRMNwUcxLvuGn7mWrrBLEh1d7X9wveJzT2di00O%2Bq%2FXBhOL0V8l3L205%2Fsl9AXqXSN45B3jvWw1autzAoxmN8X3LqgpMvkMPl1dy1eEyObDQNGTpky4tTEuZlvVmUD5aq329V4MUzFgo2YSacbfvflKbHtNk7bj08iV97Y%2B%2FRh6JCuQeSNLyYrqgsJD96hjegjRXOQsvIFGYHP%2BAd50Dz%2BaZAjlUCmEAxJQJioTEl5scQp32iokGmGb8uKC190D9yxYPAzp8mTN8vjQKyjlEN4ejLA8u4DI6r5CCa0MQ5Z%2Br7Wc59knaEod1CvBYPC4J9NrJ7YVEAIsIAPE4jxEsrvvUwg%2ByQIaw0FoajypqtW0x4aZOHQSKW0SGYdV9cNFGH4vIk%2FODTk6URXjtJyZHJnKHnVr5suOZ2P16kS3VVFIfYFI7FXY701R1zRfYWNDKmTUjvGWlAG1zcjDzzOi8BjqkAQYdm3mtHtrXPMNwJga9UEwrkRHmQhDDcdxdMH%2BKHVW46l4w3IGKBsgWssXlgL%2Bz5hrYwhEggeKGugqNEO0K9sFXIsBVYOXHaOAgI%2BNna7S0ozbtkq%2FYe%2FaNE5s2SvhYhutCTDgwgR7jy%2FDZSSxZWpx6ZTVjniSLnOS%2FyZpzqkWLTlk1v65PM58BuxXU7fmZr9k0jh3y%2F%2B13fdg3uYovQ%2FZu51fW&X-Amz-Signature=c46e4d633a595c42070d088aadf1aeb6b815bcbc52e68b0ab3b3d93e6b297fae&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV2SUX4W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR9tliLUL74%2BDpi5sjvS6hDuatatJx6IVMxbNk%2BWB7sgIhAO7apTmHWvT%2BFIF03VFP8xanrOXtbgCqmHOSoe0OvEvFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5rQojTTLbMYCQDBoq3AOen009I2himGT49nvPx372ksVDJOSqm3l548hXv9VFC0iJ0Hv5LHLEBPvN%2FkUmB%2BRTEn8OXwEcWOJHI%2FXGyfGosIhIJvxQWB1TcYhqOUpMBujNCKzRQ4QpZqIJVIbo0CG0d24bWVMn%2B6mEcvEbOYXZjxz5KKwg9sf1AlBhNxE00NWQuRMNwUcxLvuGn7mWrrBLEh1d7X9wveJzT2di00O%2Bq%2FXBhOL0V8l3L205%2Fsl9AXqXSN45B3jvWw1autzAoxmN8X3LqgpMvkMPl1dy1eEyObDQNGTpky4tTEuZlvVmUD5aq329V4MUzFgo2YSacbfvflKbHtNk7bj08iV97Y%2B%2FRh6JCuQeSNLyYrqgsJD96hjegjRXOQsvIFGYHP%2BAd50Dz%2BaZAjlUCmEAxJQJioTEl5scQp32iokGmGb8uKC190D9yxYPAzp8mTN8vjQKyjlEN4ejLA8u4DI6r5CCa0MQ5Z%2Br7Wc59knaEod1CvBYPC4J9NrJ7YVEAIsIAPE4jxEsrvvUwg%2ByQIaw0FoajypqtW0x4aZOHQSKW0SGYdV9cNFGH4vIk%2FODTk6URXjtJyZHJnKHnVr5suOZ2P16kS3VVFIfYFI7FXY701R1zRfYWNDKmTUjvGWlAG1zcjDzzOi8BjqkAQYdm3mtHtrXPMNwJga9UEwrkRHmQhDDcdxdMH%2BKHVW46l4w3IGKBsgWssXlgL%2Bz5hrYwhEggeKGugqNEO0K9sFXIsBVYOXHaOAgI%2BNna7S0ozbtkq%2FYe%2FaNE5s2SvhYhutCTDgwgR7jy%2FDZSSxZWpx6ZTVjniSLnOS%2FyZpzqkWLTlk1v65PM58BuxXU7fmZr9k0jh3y%2F%2B13fdg3uYovQ%2FZu51fW&X-Amz-Signature=1d26cf744c5e90998f38baf7e7e117c9023323e159a47d944329e9e153d3b760&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

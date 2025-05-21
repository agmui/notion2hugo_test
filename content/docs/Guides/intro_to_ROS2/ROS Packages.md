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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRC2OOTN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIF7y3bazFI3gA1rF%2FpTclBAZpLa9y9KWSczYLbzBQ9FrAiBVB751LSTRhPueffAjQi9xrC5I7zmvTD%2FIkg2n83T0jCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7BbROQHaKD697aBKtwDuJXSkk8uumCx4YX5pcgkBg7oBR%2F1Y7VaLoFNkcW74jOdi5IC68ZHvSzUKerJclNi0gV6KWxAHNiZbjE7Ecgz8YXTkrvkEPV2AVAuzj9vEmoeUxZj944cumrC57884AFM3bZSwYw20Cg6zSwhWzvrqRzBqSbYF7eEsXGgRbvXMJsGLg1zG3loaEzb1tWdrB6jKcETdrnZi9PicPtE%2FUWNqlnh7w6FjVc%2FRojQM93Ll4%2FIt33txOs0L6eHKUcSD54fM9Ql1bk85r249xZ635SYR7SL5Kk0o%2Fgmz0YHWg%2B2sAAIApo8%2BoUGwY3ykfV0KZxHK6iQEqX7x3p3r1UNFRMibwwGJTt%2FAALvcKkYY1BuOKxlgzfnRDr6QlASC611UAbRcQWgU3lGyktO4j88Rl5G%2FaCTFLzYkIfViT1QTld59LUTd5UguwUX2w5gal8yfMSw0h7f%2BdzynqCAAKJrlG%2FuJ%2Bgcraa%2F6%2FT%2Fbw4dBN9gKPwwQwB9pysdXCB9hFcqOJYMo4Pmw%2FyrM3tOwOq6%2Bs7Y1KwVeB7T6JyjLEdIBFg7f9StH7GciG4%2Btnq%2Fmey%2BJlLdE13Dukl8h1Lz%2BGsQNj2TSDyDimbw4tB5MLn4rXSah7Q9wByVFATog3DHjmQwt8C4wQY6pgHoy8Fumijfkt8SiDfvgm8Qp0Hqz2xoGkAJFPsBTdBc20Bkc%2FaBoMjUPGJFZq6YxhxP4KosqTxH8auO7IIuceB8dl%2Fxt5J5X2DMyoPxlMn2AzysIbM8kFI5wpd3Rhj%2Fwax3Muy5iLX8HnkawNT1SUiY5xXKj%2BfVmsirbFM4wyGqZq8tj%2BZnw3rzf%2BnGvQri6bbZPzHRG%2BdV1DvrnecHmE%2B2h%2FWX2dl3&X-Amz-Signature=62335af4a32d721ddb996a4d920c5b45bf96ef04b3bfc08adf4688c91b590236&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRC2OOTN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIF7y3bazFI3gA1rF%2FpTclBAZpLa9y9KWSczYLbzBQ9FrAiBVB751LSTRhPueffAjQi9xrC5I7zmvTD%2FIkg2n83T0jCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7BbROQHaKD697aBKtwDuJXSkk8uumCx4YX5pcgkBg7oBR%2F1Y7VaLoFNkcW74jOdi5IC68ZHvSzUKerJclNi0gV6KWxAHNiZbjE7Ecgz8YXTkrvkEPV2AVAuzj9vEmoeUxZj944cumrC57884AFM3bZSwYw20Cg6zSwhWzvrqRzBqSbYF7eEsXGgRbvXMJsGLg1zG3loaEzb1tWdrB6jKcETdrnZi9PicPtE%2FUWNqlnh7w6FjVc%2FRojQM93Ll4%2FIt33txOs0L6eHKUcSD54fM9Ql1bk85r249xZ635SYR7SL5Kk0o%2Fgmz0YHWg%2B2sAAIApo8%2BoUGwY3ykfV0KZxHK6iQEqX7x3p3r1UNFRMibwwGJTt%2FAALvcKkYY1BuOKxlgzfnRDr6QlASC611UAbRcQWgU3lGyktO4j88Rl5G%2FaCTFLzYkIfViT1QTld59LUTd5UguwUX2w5gal8yfMSw0h7f%2BdzynqCAAKJrlG%2FuJ%2Bgcraa%2F6%2FT%2Fbw4dBN9gKPwwQwB9pysdXCB9hFcqOJYMo4Pmw%2FyrM3tOwOq6%2Bs7Y1KwVeB7T6JyjLEdIBFg7f9StH7GciG4%2Btnq%2Fmey%2BJlLdE13Dukl8h1Lz%2BGsQNj2TSDyDimbw4tB5MLn4rXSah7Q9wByVFATog3DHjmQwt8C4wQY6pgHoy8Fumijfkt8SiDfvgm8Qp0Hqz2xoGkAJFPsBTdBc20Bkc%2FaBoMjUPGJFZq6YxhxP4KosqTxH8auO7IIuceB8dl%2Fxt5J5X2DMyoPxlMn2AzysIbM8kFI5wpd3Rhj%2Fwax3Muy5iLX8HnkawNT1SUiY5xXKj%2BfVmsirbFM4wyGqZq8tj%2BZnw3rzf%2BnGvQri6bbZPzHRG%2BdV1DvrnecHmE%2B2h%2FWX2dl3&X-Amz-Signature=715a1fd68e9cfcd699ada4b7ac90320fd5ee379b86c071590052c5663b0aebf4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRC2OOTN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIF7y3bazFI3gA1rF%2FpTclBAZpLa9y9KWSczYLbzBQ9FrAiBVB751LSTRhPueffAjQi9xrC5I7zmvTD%2FIkg2n83T0jCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7BbROQHaKD697aBKtwDuJXSkk8uumCx4YX5pcgkBg7oBR%2F1Y7VaLoFNkcW74jOdi5IC68ZHvSzUKerJclNi0gV6KWxAHNiZbjE7Ecgz8YXTkrvkEPV2AVAuzj9vEmoeUxZj944cumrC57884AFM3bZSwYw20Cg6zSwhWzvrqRzBqSbYF7eEsXGgRbvXMJsGLg1zG3loaEzb1tWdrB6jKcETdrnZi9PicPtE%2FUWNqlnh7w6FjVc%2FRojQM93Ll4%2FIt33txOs0L6eHKUcSD54fM9Ql1bk85r249xZ635SYR7SL5Kk0o%2Fgmz0YHWg%2B2sAAIApo8%2BoUGwY3ykfV0KZxHK6iQEqX7x3p3r1UNFRMibwwGJTt%2FAALvcKkYY1BuOKxlgzfnRDr6QlASC611UAbRcQWgU3lGyktO4j88Rl5G%2FaCTFLzYkIfViT1QTld59LUTd5UguwUX2w5gal8yfMSw0h7f%2BdzynqCAAKJrlG%2FuJ%2Bgcraa%2F6%2FT%2Fbw4dBN9gKPwwQwB9pysdXCB9hFcqOJYMo4Pmw%2FyrM3tOwOq6%2Bs7Y1KwVeB7T6JyjLEdIBFg7f9StH7GciG4%2Btnq%2Fmey%2BJlLdE13Dukl8h1Lz%2BGsQNj2TSDyDimbw4tB5MLn4rXSah7Q9wByVFATog3DHjmQwt8C4wQY6pgHoy8Fumijfkt8SiDfvgm8Qp0Hqz2xoGkAJFPsBTdBc20Bkc%2FaBoMjUPGJFZq6YxhxP4KosqTxH8auO7IIuceB8dl%2Fxt5J5X2DMyoPxlMn2AzysIbM8kFI5wpd3Rhj%2Fwax3Muy5iLX8HnkawNT1SUiY5xXKj%2BfVmsirbFM4wyGqZq8tj%2BZnw3rzf%2BnGvQri6bbZPzHRG%2BdV1DvrnecHmE%2B2h%2FWX2dl3&X-Amz-Signature=1bdec732320d730a2367efc0ab439b1cd55409948f8107a9c8ded50506667055&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRC2OOTN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIF7y3bazFI3gA1rF%2FpTclBAZpLa9y9KWSczYLbzBQ9FrAiBVB751LSTRhPueffAjQi9xrC5I7zmvTD%2FIkg2n83T0jCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7BbROQHaKD697aBKtwDuJXSkk8uumCx4YX5pcgkBg7oBR%2F1Y7VaLoFNkcW74jOdi5IC68ZHvSzUKerJclNi0gV6KWxAHNiZbjE7Ecgz8YXTkrvkEPV2AVAuzj9vEmoeUxZj944cumrC57884AFM3bZSwYw20Cg6zSwhWzvrqRzBqSbYF7eEsXGgRbvXMJsGLg1zG3loaEzb1tWdrB6jKcETdrnZi9PicPtE%2FUWNqlnh7w6FjVc%2FRojQM93Ll4%2FIt33txOs0L6eHKUcSD54fM9Ql1bk85r249xZ635SYR7SL5Kk0o%2Fgmz0YHWg%2B2sAAIApo8%2BoUGwY3ykfV0KZxHK6iQEqX7x3p3r1UNFRMibwwGJTt%2FAALvcKkYY1BuOKxlgzfnRDr6QlASC611UAbRcQWgU3lGyktO4j88Rl5G%2FaCTFLzYkIfViT1QTld59LUTd5UguwUX2w5gal8yfMSw0h7f%2BdzynqCAAKJrlG%2FuJ%2Bgcraa%2F6%2FT%2Fbw4dBN9gKPwwQwB9pysdXCB9hFcqOJYMo4Pmw%2FyrM3tOwOq6%2Bs7Y1KwVeB7T6JyjLEdIBFg7f9StH7GciG4%2Btnq%2Fmey%2BJlLdE13Dukl8h1Lz%2BGsQNj2TSDyDimbw4tB5MLn4rXSah7Q9wByVFATog3DHjmQwt8C4wQY6pgHoy8Fumijfkt8SiDfvgm8Qp0Hqz2xoGkAJFPsBTdBc20Bkc%2FaBoMjUPGJFZq6YxhxP4KosqTxH8auO7IIuceB8dl%2Fxt5J5X2DMyoPxlMn2AzysIbM8kFI5wpd3Rhj%2Fwax3Muy5iLX8HnkawNT1SUiY5xXKj%2BfVmsirbFM4wyGqZq8tj%2BZnw3rzf%2BnGvQri6bbZPzHRG%2BdV1DvrnecHmE%2B2h%2FWX2dl3&X-Amz-Signature=d0b5952f5c7ddddb476e911f62f7d67d55deab8da533a27288939ad74049e1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRC2OOTN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIF7y3bazFI3gA1rF%2FpTclBAZpLa9y9KWSczYLbzBQ9FrAiBVB751LSTRhPueffAjQi9xrC5I7zmvTD%2FIkg2n83T0jCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7BbROQHaKD697aBKtwDuJXSkk8uumCx4YX5pcgkBg7oBR%2F1Y7VaLoFNkcW74jOdi5IC68ZHvSzUKerJclNi0gV6KWxAHNiZbjE7Ecgz8YXTkrvkEPV2AVAuzj9vEmoeUxZj944cumrC57884AFM3bZSwYw20Cg6zSwhWzvrqRzBqSbYF7eEsXGgRbvXMJsGLg1zG3loaEzb1tWdrB6jKcETdrnZi9PicPtE%2FUWNqlnh7w6FjVc%2FRojQM93Ll4%2FIt33txOs0L6eHKUcSD54fM9Ql1bk85r249xZ635SYR7SL5Kk0o%2Fgmz0YHWg%2B2sAAIApo8%2BoUGwY3ykfV0KZxHK6iQEqX7x3p3r1UNFRMibwwGJTt%2FAALvcKkYY1BuOKxlgzfnRDr6QlASC611UAbRcQWgU3lGyktO4j88Rl5G%2FaCTFLzYkIfViT1QTld59LUTd5UguwUX2w5gal8yfMSw0h7f%2BdzynqCAAKJrlG%2FuJ%2Bgcraa%2F6%2FT%2Fbw4dBN9gKPwwQwB9pysdXCB9hFcqOJYMo4Pmw%2FyrM3tOwOq6%2Bs7Y1KwVeB7T6JyjLEdIBFg7f9StH7GciG4%2Btnq%2Fmey%2BJlLdE13Dukl8h1Lz%2BGsQNj2TSDyDimbw4tB5MLn4rXSah7Q9wByVFATog3DHjmQwt8C4wQY6pgHoy8Fumijfkt8SiDfvgm8Qp0Hqz2xoGkAJFPsBTdBc20Bkc%2FaBoMjUPGJFZq6YxhxP4KosqTxH8auO7IIuceB8dl%2Fxt5J5X2DMyoPxlMn2AzysIbM8kFI5wpd3Rhj%2Fwax3Muy5iLX8HnkawNT1SUiY5xXKj%2BfVmsirbFM4wyGqZq8tj%2BZnw3rzf%2BnGvQri6bbZPzHRG%2BdV1DvrnecHmE%2B2h%2FWX2dl3&X-Amz-Signature=6e85c916c5f9e97b25ae438a4b6afb7426d6327d4e08da1878f197c6e5dce2ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRC2OOTN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIF7y3bazFI3gA1rF%2FpTclBAZpLa9y9KWSczYLbzBQ9FrAiBVB751LSTRhPueffAjQi9xrC5I7zmvTD%2FIkg2n83T0jCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7BbROQHaKD697aBKtwDuJXSkk8uumCx4YX5pcgkBg7oBR%2F1Y7VaLoFNkcW74jOdi5IC68ZHvSzUKerJclNi0gV6KWxAHNiZbjE7Ecgz8YXTkrvkEPV2AVAuzj9vEmoeUxZj944cumrC57884AFM3bZSwYw20Cg6zSwhWzvrqRzBqSbYF7eEsXGgRbvXMJsGLg1zG3loaEzb1tWdrB6jKcETdrnZi9PicPtE%2FUWNqlnh7w6FjVc%2FRojQM93Ll4%2FIt33txOs0L6eHKUcSD54fM9Ql1bk85r249xZ635SYR7SL5Kk0o%2Fgmz0YHWg%2B2sAAIApo8%2BoUGwY3ykfV0KZxHK6iQEqX7x3p3r1UNFRMibwwGJTt%2FAALvcKkYY1BuOKxlgzfnRDr6QlASC611UAbRcQWgU3lGyktO4j88Rl5G%2FaCTFLzYkIfViT1QTld59LUTd5UguwUX2w5gal8yfMSw0h7f%2BdzynqCAAKJrlG%2FuJ%2Bgcraa%2F6%2FT%2Fbw4dBN9gKPwwQwB9pysdXCB9hFcqOJYMo4Pmw%2FyrM3tOwOq6%2Bs7Y1KwVeB7T6JyjLEdIBFg7f9StH7GciG4%2Btnq%2Fmey%2BJlLdE13Dukl8h1Lz%2BGsQNj2TSDyDimbw4tB5MLn4rXSah7Q9wByVFATog3DHjmQwt8C4wQY6pgHoy8Fumijfkt8SiDfvgm8Qp0Hqz2xoGkAJFPsBTdBc20Bkc%2FaBoMjUPGJFZq6YxhxP4KosqTxH8auO7IIuceB8dl%2Fxt5J5X2DMyoPxlMn2AzysIbM8kFI5wpd3Rhj%2Fwax3Muy5iLX8HnkawNT1SUiY5xXKj%2BfVmsirbFM4wyGqZq8tj%2BZnw3rzf%2BnGvQri6bbZPzHRG%2BdV1DvrnecHmE%2B2h%2FWX2dl3&X-Amz-Signature=de8ad5edb68e96b33d6be9bd80c63ab144e3adf086a3efdb7597b29de6493705&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRC2OOTN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIF7y3bazFI3gA1rF%2FpTclBAZpLa9y9KWSczYLbzBQ9FrAiBVB751LSTRhPueffAjQi9xrC5I7zmvTD%2FIkg2n83T0jCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7BbROQHaKD697aBKtwDuJXSkk8uumCx4YX5pcgkBg7oBR%2F1Y7VaLoFNkcW74jOdi5IC68ZHvSzUKerJclNi0gV6KWxAHNiZbjE7Ecgz8YXTkrvkEPV2AVAuzj9vEmoeUxZj944cumrC57884AFM3bZSwYw20Cg6zSwhWzvrqRzBqSbYF7eEsXGgRbvXMJsGLg1zG3loaEzb1tWdrB6jKcETdrnZi9PicPtE%2FUWNqlnh7w6FjVc%2FRojQM93Ll4%2FIt33txOs0L6eHKUcSD54fM9Ql1bk85r249xZ635SYR7SL5Kk0o%2Fgmz0YHWg%2B2sAAIApo8%2BoUGwY3ykfV0KZxHK6iQEqX7x3p3r1UNFRMibwwGJTt%2FAALvcKkYY1BuOKxlgzfnRDr6QlASC611UAbRcQWgU3lGyktO4j88Rl5G%2FaCTFLzYkIfViT1QTld59LUTd5UguwUX2w5gal8yfMSw0h7f%2BdzynqCAAKJrlG%2FuJ%2Bgcraa%2F6%2FT%2Fbw4dBN9gKPwwQwB9pysdXCB9hFcqOJYMo4Pmw%2FyrM3tOwOq6%2Bs7Y1KwVeB7T6JyjLEdIBFg7f9StH7GciG4%2Btnq%2Fmey%2BJlLdE13Dukl8h1Lz%2BGsQNj2TSDyDimbw4tB5MLn4rXSah7Q9wByVFATog3DHjmQwt8C4wQY6pgHoy8Fumijfkt8SiDfvgm8Qp0Hqz2xoGkAJFPsBTdBc20Bkc%2FaBoMjUPGJFZq6YxhxP4KosqTxH8auO7IIuceB8dl%2Fxt5J5X2DMyoPxlMn2AzysIbM8kFI5wpd3Rhj%2Fwax3Muy5iLX8HnkawNT1SUiY5xXKj%2BfVmsirbFM4wyGqZq8tj%2BZnw3rzf%2BnGvQri6bbZPzHRG%2BdV1DvrnecHmE%2B2h%2FWX2dl3&X-Amz-Signature=b6cd077944594e349de8fb2a704c886914e752a2bed4a4ff844ba0601e3da158&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

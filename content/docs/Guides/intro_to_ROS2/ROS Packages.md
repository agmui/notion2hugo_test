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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOMLUBZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGklHbriF%2FdPVgDwbNL32NLgeyrGTxjLsehsoZbFcCz%2BAiB4vUGeIw2AVVzHAKqfkb7NrrWsw5%2FKPWDEb1l%2B%2BPXjiCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMai2zHb%2FNIBzAuVF5KtwDfprmGCzsY3ER5r8AL%2BB7EfmThkvKyQxaL%2FlmQt5XLpGexRuQCpJgGQHFS33QSymEy2xHqBqdLgWIqaDf3J8PDF3oWZOT5yTFFQpIDVKY5%2FF68ZE2mJDd%2BNh9a1JezD0JUZ9qKGBzL6EkYOBWz4K0%2BYg4ubfihF2zjvvB4Vy9GRR4JhXZiMgD83Jt381DtY8fjuZoh4i7c18CkjcRIfN0JQ6far%2FF0Bb4ryOrRehhwsypRlIBnsuVhFAVcimE8BuyF5U%2BJPsfuP3xSc%2BUzdP5Ywte7VHZHVyhEeKLXD39wv79gXniK54KSA8g%2FK5DQ39%2BGPypkt6EFnXldmWwT2nsAhixFs%2BOTJhrX%2FUJNRuBn9mRtNLi7T8eJ6R5wId7SBqqYLM3nF1FIJHKszNgVfTYh854G5VtsBgqIVwyo%2FQ7Xqp3RWC%2FmucsWcKkyIxleef9WigElRvVcHIgWnYjHOePT%2B6CyeQaT4XvdbJgOGRn4wFvKCwr%2BFPG3jhuzSXeJazlhVc8qLTwmbld%2BS6LSRykUGUf1dl%2B4fBaDO5364TLvQZXMpITxB8gsoUKArWHod%2BZesSdtpGjLkw3bd7nEbqmkK07ztRg7Gls5n0rvMwNsHDvap8sCsX4D7zywgkwj%2FaOvgY6pgHfa7oWt2CmxGabGhl6Lyzw%2FeG%2BHGnqPEZ73qrr9lwifS1XssPjF5IqJhvtalm5DlCGr%2BlbtUMddqRix8KLWEx8lZlqnqwIni1puaEi6XJk8DUIkbD5VCPx8Gsc8smqGzRQQn4b4WvXaCELkfZ13oclPc5A%2FqLcXHo5j%2BLTxeYc8lNN8jIR8rJWwug16sMC9ojeycE%2BasUwQdFFLBELTI9GPtHJrTOJ&X-Amz-Signature=5aa10d280f3b5ddace2e730761b2d93288dad0a1ebbcdf885d11a1d2cbb6ab40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOMLUBZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGklHbriF%2FdPVgDwbNL32NLgeyrGTxjLsehsoZbFcCz%2BAiB4vUGeIw2AVVzHAKqfkb7NrrWsw5%2FKPWDEb1l%2B%2BPXjiCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMai2zHb%2FNIBzAuVF5KtwDfprmGCzsY3ER5r8AL%2BB7EfmThkvKyQxaL%2FlmQt5XLpGexRuQCpJgGQHFS33QSymEy2xHqBqdLgWIqaDf3J8PDF3oWZOT5yTFFQpIDVKY5%2FF68ZE2mJDd%2BNh9a1JezD0JUZ9qKGBzL6EkYOBWz4K0%2BYg4ubfihF2zjvvB4Vy9GRR4JhXZiMgD83Jt381DtY8fjuZoh4i7c18CkjcRIfN0JQ6far%2FF0Bb4ryOrRehhwsypRlIBnsuVhFAVcimE8BuyF5U%2BJPsfuP3xSc%2BUzdP5Ywte7VHZHVyhEeKLXD39wv79gXniK54KSA8g%2FK5DQ39%2BGPypkt6EFnXldmWwT2nsAhixFs%2BOTJhrX%2FUJNRuBn9mRtNLi7T8eJ6R5wId7SBqqYLM3nF1FIJHKszNgVfTYh854G5VtsBgqIVwyo%2FQ7Xqp3RWC%2FmucsWcKkyIxleef9WigElRvVcHIgWnYjHOePT%2B6CyeQaT4XvdbJgOGRn4wFvKCwr%2BFPG3jhuzSXeJazlhVc8qLTwmbld%2BS6LSRykUGUf1dl%2B4fBaDO5364TLvQZXMpITxB8gsoUKArWHod%2BZesSdtpGjLkw3bd7nEbqmkK07ztRg7Gls5n0rvMwNsHDvap8sCsX4D7zywgkwj%2FaOvgY6pgHfa7oWt2CmxGabGhl6Lyzw%2FeG%2BHGnqPEZ73qrr9lwifS1XssPjF5IqJhvtalm5DlCGr%2BlbtUMddqRix8KLWEx8lZlqnqwIni1puaEi6XJk8DUIkbD5VCPx8Gsc8smqGzRQQn4b4WvXaCELkfZ13oclPc5A%2FqLcXHo5j%2BLTxeYc8lNN8jIR8rJWwug16sMC9ojeycE%2BasUwQdFFLBELTI9GPtHJrTOJ&X-Amz-Signature=f28cdfbf19a6f30db2fa6e3c0a2718113ff680ae3547a02eadc3012775d24796&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOMLUBZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGklHbriF%2FdPVgDwbNL32NLgeyrGTxjLsehsoZbFcCz%2BAiB4vUGeIw2AVVzHAKqfkb7NrrWsw5%2FKPWDEb1l%2B%2BPXjiCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMai2zHb%2FNIBzAuVF5KtwDfprmGCzsY3ER5r8AL%2BB7EfmThkvKyQxaL%2FlmQt5XLpGexRuQCpJgGQHFS33QSymEy2xHqBqdLgWIqaDf3J8PDF3oWZOT5yTFFQpIDVKY5%2FF68ZE2mJDd%2BNh9a1JezD0JUZ9qKGBzL6EkYOBWz4K0%2BYg4ubfihF2zjvvB4Vy9GRR4JhXZiMgD83Jt381DtY8fjuZoh4i7c18CkjcRIfN0JQ6far%2FF0Bb4ryOrRehhwsypRlIBnsuVhFAVcimE8BuyF5U%2BJPsfuP3xSc%2BUzdP5Ywte7VHZHVyhEeKLXD39wv79gXniK54KSA8g%2FK5DQ39%2BGPypkt6EFnXldmWwT2nsAhixFs%2BOTJhrX%2FUJNRuBn9mRtNLi7T8eJ6R5wId7SBqqYLM3nF1FIJHKszNgVfTYh854G5VtsBgqIVwyo%2FQ7Xqp3RWC%2FmucsWcKkyIxleef9WigElRvVcHIgWnYjHOePT%2B6CyeQaT4XvdbJgOGRn4wFvKCwr%2BFPG3jhuzSXeJazlhVc8qLTwmbld%2BS6LSRykUGUf1dl%2B4fBaDO5364TLvQZXMpITxB8gsoUKArWHod%2BZesSdtpGjLkw3bd7nEbqmkK07ztRg7Gls5n0rvMwNsHDvap8sCsX4D7zywgkwj%2FaOvgY6pgHfa7oWt2CmxGabGhl6Lyzw%2FeG%2BHGnqPEZ73qrr9lwifS1XssPjF5IqJhvtalm5DlCGr%2BlbtUMddqRix8KLWEx8lZlqnqwIni1puaEi6XJk8DUIkbD5VCPx8Gsc8smqGzRQQn4b4WvXaCELkfZ13oclPc5A%2FqLcXHo5j%2BLTxeYc8lNN8jIR8rJWwug16sMC9ojeycE%2BasUwQdFFLBELTI9GPtHJrTOJ&X-Amz-Signature=29f0b4c9dad83502ccd16b412217c18391e802e345dc5766127d5d4af301a18d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOMLUBZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGklHbriF%2FdPVgDwbNL32NLgeyrGTxjLsehsoZbFcCz%2BAiB4vUGeIw2AVVzHAKqfkb7NrrWsw5%2FKPWDEb1l%2B%2BPXjiCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMai2zHb%2FNIBzAuVF5KtwDfprmGCzsY3ER5r8AL%2BB7EfmThkvKyQxaL%2FlmQt5XLpGexRuQCpJgGQHFS33QSymEy2xHqBqdLgWIqaDf3J8PDF3oWZOT5yTFFQpIDVKY5%2FF68ZE2mJDd%2BNh9a1JezD0JUZ9qKGBzL6EkYOBWz4K0%2BYg4ubfihF2zjvvB4Vy9GRR4JhXZiMgD83Jt381DtY8fjuZoh4i7c18CkjcRIfN0JQ6far%2FF0Bb4ryOrRehhwsypRlIBnsuVhFAVcimE8BuyF5U%2BJPsfuP3xSc%2BUzdP5Ywte7VHZHVyhEeKLXD39wv79gXniK54KSA8g%2FK5DQ39%2BGPypkt6EFnXldmWwT2nsAhixFs%2BOTJhrX%2FUJNRuBn9mRtNLi7T8eJ6R5wId7SBqqYLM3nF1FIJHKszNgVfTYh854G5VtsBgqIVwyo%2FQ7Xqp3RWC%2FmucsWcKkyIxleef9WigElRvVcHIgWnYjHOePT%2B6CyeQaT4XvdbJgOGRn4wFvKCwr%2BFPG3jhuzSXeJazlhVc8qLTwmbld%2BS6LSRykUGUf1dl%2B4fBaDO5364TLvQZXMpITxB8gsoUKArWHod%2BZesSdtpGjLkw3bd7nEbqmkK07ztRg7Gls5n0rvMwNsHDvap8sCsX4D7zywgkwj%2FaOvgY6pgHfa7oWt2CmxGabGhl6Lyzw%2FeG%2BHGnqPEZ73qrr9lwifS1XssPjF5IqJhvtalm5DlCGr%2BlbtUMddqRix8KLWEx8lZlqnqwIni1puaEi6XJk8DUIkbD5VCPx8Gsc8smqGzRQQn4b4WvXaCELkfZ13oclPc5A%2FqLcXHo5j%2BLTxeYc8lNN8jIR8rJWwug16sMC9ojeycE%2BasUwQdFFLBELTI9GPtHJrTOJ&X-Amz-Signature=443589e3044d477d1adffbefb92a5ab8c3f4cdc3430099d7a30cf91d8af9ffa6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOMLUBZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGklHbriF%2FdPVgDwbNL32NLgeyrGTxjLsehsoZbFcCz%2BAiB4vUGeIw2AVVzHAKqfkb7NrrWsw5%2FKPWDEb1l%2B%2BPXjiCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMai2zHb%2FNIBzAuVF5KtwDfprmGCzsY3ER5r8AL%2BB7EfmThkvKyQxaL%2FlmQt5XLpGexRuQCpJgGQHFS33QSymEy2xHqBqdLgWIqaDf3J8PDF3oWZOT5yTFFQpIDVKY5%2FF68ZE2mJDd%2BNh9a1JezD0JUZ9qKGBzL6EkYOBWz4K0%2BYg4ubfihF2zjvvB4Vy9GRR4JhXZiMgD83Jt381DtY8fjuZoh4i7c18CkjcRIfN0JQ6far%2FF0Bb4ryOrRehhwsypRlIBnsuVhFAVcimE8BuyF5U%2BJPsfuP3xSc%2BUzdP5Ywte7VHZHVyhEeKLXD39wv79gXniK54KSA8g%2FK5DQ39%2BGPypkt6EFnXldmWwT2nsAhixFs%2BOTJhrX%2FUJNRuBn9mRtNLi7T8eJ6R5wId7SBqqYLM3nF1FIJHKszNgVfTYh854G5VtsBgqIVwyo%2FQ7Xqp3RWC%2FmucsWcKkyIxleef9WigElRvVcHIgWnYjHOePT%2B6CyeQaT4XvdbJgOGRn4wFvKCwr%2BFPG3jhuzSXeJazlhVc8qLTwmbld%2BS6LSRykUGUf1dl%2B4fBaDO5364TLvQZXMpITxB8gsoUKArWHod%2BZesSdtpGjLkw3bd7nEbqmkK07ztRg7Gls5n0rvMwNsHDvap8sCsX4D7zywgkwj%2FaOvgY6pgHfa7oWt2CmxGabGhl6Lyzw%2FeG%2BHGnqPEZ73qrr9lwifS1XssPjF5IqJhvtalm5DlCGr%2BlbtUMddqRix8KLWEx8lZlqnqwIni1puaEi6XJk8DUIkbD5VCPx8Gsc8smqGzRQQn4b4WvXaCELkfZ13oclPc5A%2FqLcXHo5j%2BLTxeYc8lNN8jIR8rJWwug16sMC9ojeycE%2BasUwQdFFLBELTI9GPtHJrTOJ&X-Amz-Signature=cd0db3571e8fb715b0ad0c7d87fe9651a17a8f19ad844d84c633814b8c618ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOMLUBZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGklHbriF%2FdPVgDwbNL32NLgeyrGTxjLsehsoZbFcCz%2BAiB4vUGeIw2AVVzHAKqfkb7NrrWsw5%2FKPWDEb1l%2B%2BPXjiCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMai2zHb%2FNIBzAuVF5KtwDfprmGCzsY3ER5r8AL%2BB7EfmThkvKyQxaL%2FlmQt5XLpGexRuQCpJgGQHFS33QSymEy2xHqBqdLgWIqaDf3J8PDF3oWZOT5yTFFQpIDVKY5%2FF68ZE2mJDd%2BNh9a1JezD0JUZ9qKGBzL6EkYOBWz4K0%2BYg4ubfihF2zjvvB4Vy9GRR4JhXZiMgD83Jt381DtY8fjuZoh4i7c18CkjcRIfN0JQ6far%2FF0Bb4ryOrRehhwsypRlIBnsuVhFAVcimE8BuyF5U%2BJPsfuP3xSc%2BUzdP5Ywte7VHZHVyhEeKLXD39wv79gXniK54KSA8g%2FK5DQ39%2BGPypkt6EFnXldmWwT2nsAhixFs%2BOTJhrX%2FUJNRuBn9mRtNLi7T8eJ6R5wId7SBqqYLM3nF1FIJHKszNgVfTYh854G5VtsBgqIVwyo%2FQ7Xqp3RWC%2FmucsWcKkyIxleef9WigElRvVcHIgWnYjHOePT%2B6CyeQaT4XvdbJgOGRn4wFvKCwr%2BFPG3jhuzSXeJazlhVc8qLTwmbld%2BS6LSRykUGUf1dl%2B4fBaDO5364TLvQZXMpITxB8gsoUKArWHod%2BZesSdtpGjLkw3bd7nEbqmkK07ztRg7Gls5n0rvMwNsHDvap8sCsX4D7zywgkwj%2FaOvgY6pgHfa7oWt2CmxGabGhl6Lyzw%2FeG%2BHGnqPEZ73qrr9lwifS1XssPjF5IqJhvtalm5DlCGr%2BlbtUMddqRix8KLWEx8lZlqnqwIni1puaEi6XJk8DUIkbD5VCPx8Gsc8smqGzRQQn4b4WvXaCELkfZ13oclPc5A%2FqLcXHo5j%2BLTxeYc8lNN8jIR8rJWwug16sMC9ojeycE%2BasUwQdFFLBELTI9GPtHJrTOJ&X-Amz-Signature=db713a6dd831a1c1e7abe3f10a0a2f87daacee0086f2fa87c227229e08377042&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOMLUBZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGklHbriF%2FdPVgDwbNL32NLgeyrGTxjLsehsoZbFcCz%2BAiB4vUGeIw2AVVzHAKqfkb7NrrWsw5%2FKPWDEb1l%2B%2BPXjiCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMai2zHb%2FNIBzAuVF5KtwDfprmGCzsY3ER5r8AL%2BB7EfmThkvKyQxaL%2FlmQt5XLpGexRuQCpJgGQHFS33QSymEy2xHqBqdLgWIqaDf3J8PDF3oWZOT5yTFFQpIDVKY5%2FF68ZE2mJDd%2BNh9a1JezD0JUZ9qKGBzL6EkYOBWz4K0%2BYg4ubfihF2zjvvB4Vy9GRR4JhXZiMgD83Jt381DtY8fjuZoh4i7c18CkjcRIfN0JQ6far%2FF0Bb4ryOrRehhwsypRlIBnsuVhFAVcimE8BuyF5U%2BJPsfuP3xSc%2BUzdP5Ywte7VHZHVyhEeKLXD39wv79gXniK54KSA8g%2FK5DQ39%2BGPypkt6EFnXldmWwT2nsAhixFs%2BOTJhrX%2FUJNRuBn9mRtNLi7T8eJ6R5wId7SBqqYLM3nF1FIJHKszNgVfTYh854G5VtsBgqIVwyo%2FQ7Xqp3RWC%2FmucsWcKkyIxleef9WigElRvVcHIgWnYjHOePT%2B6CyeQaT4XvdbJgOGRn4wFvKCwr%2BFPG3jhuzSXeJazlhVc8qLTwmbld%2BS6LSRykUGUf1dl%2B4fBaDO5364TLvQZXMpITxB8gsoUKArWHod%2BZesSdtpGjLkw3bd7nEbqmkK07ztRg7Gls5n0rvMwNsHDvap8sCsX4D7zywgkwj%2FaOvgY6pgHfa7oWt2CmxGabGhl6Lyzw%2FeG%2BHGnqPEZ73qrr9lwifS1XssPjF5IqJhvtalm5DlCGr%2BlbtUMddqRix8KLWEx8lZlqnqwIni1puaEi6XJk8DUIkbD5VCPx8Gsc8smqGzRQQn4b4WvXaCELkfZ13oclPc5A%2FqLcXHo5j%2BLTxeYc8lNN8jIR8rJWwug16sMC9ojeycE%2BasUwQdFFLBELTI9GPtHJrTOJ&X-Amz-Signature=5c90c96ba966c9140b505d4ed8520ad5fb850e83a29a583489f6deba3fff4ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

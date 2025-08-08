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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3C3FB6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDHcc%2BEI5iEWnOfFCCacYtTVNn1gTV5SJfvakHPkkd5WQIhAN9D1MOGGwxp44dx35%2BbUjCKjLkvN9LjbboQS6qXytTwKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxK9UO0qvjIwz2ihMq3AOzZhVJURS35a%2F1gzRNwg7Eu3yvgJEijqsphL1%2BZgcRqGu121E9zfit13sTmDGABgkGc0aELToG3v4zmZyAkJ1ln7gi0ovTua%2BXeRrhBvFt7gul7A5tkxZF%2F5r7tFyc9h0IerJXkmBIitsH52TuwYpm8eeaZXG3GeAnjt%2FVnKj3TbTT0iqoKymb9yTNpOMlJ1APEE%2FK9vDYyRypaQJ%2FbKXkzETBybDxnF9C1WmdDXtcjEJcly0oTHHuohEeHtwx6oVg7VTMwQI4PTewT3vYDAY0Q6218mWRoCEKlX254bsYQQoXr0DdioFMl1%2F6iGyrdhXxf7seB6jcC7yFxPOYtDpqSh9BknDJG%2Bbu05Bx6huyk7kVz37XFPn%2BiWTRtDaOmvQq2EjWYEa6ecac1x%2BgTqdDjz4xzFq%2Bv%2BrnhFFFCuk4xk4TKBevPK0KM%2BoJKYWVH331swjtRZ%2BhtlO4atDDfKwJUNgE4FcoB2idz1%2BCkzKLX5pDky%2F1teFgWGykTZN0tB6HjJrkw4qHwbdtOJECpC6MpPhd8tV%2FXtBI2nJAa%2Bw3NLDJsr0NoNvI3xE5%2BjLJ6qGCVav4kLRowR9csPNGEWxL7BTRvuRpnav2qja6yQ0u2gKTmrMycpfPhdWa1zDvxtbEBjqkAWhd2Fv1ebbpBsAlj2kV3qG6zhvKqo92Py%2B5P%2Fgx3WCQ%2FffvPasuZooeTeMGHX6F%2Br7lBZB2Ss%2FsW2%2FUaF84faUvdjADuSyCJkQGsRxGPmCO7VWZmC0yC%2Bk7N58haSbBlfUWzPnjUd5pwnxSWyJYd3L20vIaJtgBJdm6IB1I4fETZXkV3cK2oQquH6A8%2BLCpeZ618ZF8m0sLtOjXDymPtt3b%2BGUq&X-Amz-Signature=9ea1ff5100ae4a9dd3fd3ce40745d66f8c28cd23d1d9ef5447765cdda82b1a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3C3FB6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDHcc%2BEI5iEWnOfFCCacYtTVNn1gTV5SJfvakHPkkd5WQIhAN9D1MOGGwxp44dx35%2BbUjCKjLkvN9LjbboQS6qXytTwKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxK9UO0qvjIwz2ihMq3AOzZhVJURS35a%2F1gzRNwg7Eu3yvgJEijqsphL1%2BZgcRqGu121E9zfit13sTmDGABgkGc0aELToG3v4zmZyAkJ1ln7gi0ovTua%2BXeRrhBvFt7gul7A5tkxZF%2F5r7tFyc9h0IerJXkmBIitsH52TuwYpm8eeaZXG3GeAnjt%2FVnKj3TbTT0iqoKymb9yTNpOMlJ1APEE%2FK9vDYyRypaQJ%2FbKXkzETBybDxnF9C1WmdDXtcjEJcly0oTHHuohEeHtwx6oVg7VTMwQI4PTewT3vYDAY0Q6218mWRoCEKlX254bsYQQoXr0DdioFMl1%2F6iGyrdhXxf7seB6jcC7yFxPOYtDpqSh9BknDJG%2Bbu05Bx6huyk7kVz37XFPn%2BiWTRtDaOmvQq2EjWYEa6ecac1x%2BgTqdDjz4xzFq%2Bv%2BrnhFFFCuk4xk4TKBevPK0KM%2BoJKYWVH331swjtRZ%2BhtlO4atDDfKwJUNgE4FcoB2idz1%2BCkzKLX5pDky%2F1teFgWGykTZN0tB6HjJrkw4qHwbdtOJECpC6MpPhd8tV%2FXtBI2nJAa%2Bw3NLDJsr0NoNvI3xE5%2BjLJ6qGCVav4kLRowR9csPNGEWxL7BTRvuRpnav2qja6yQ0u2gKTmrMycpfPhdWa1zDvxtbEBjqkAWhd2Fv1ebbpBsAlj2kV3qG6zhvKqo92Py%2B5P%2Fgx3WCQ%2FffvPasuZooeTeMGHX6F%2Br7lBZB2Ss%2FsW2%2FUaF84faUvdjADuSyCJkQGsRxGPmCO7VWZmC0yC%2Bk7N58haSbBlfUWzPnjUd5pwnxSWyJYd3L20vIaJtgBJdm6IB1I4fETZXkV3cK2oQquH6A8%2BLCpeZ618ZF8m0sLtOjXDymPtt3b%2BGUq&X-Amz-Signature=89858b22c5d7e9d90b1cc6e63f068c23ec96b1030138da39ab6d8ac9e443f961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3C3FB6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDHcc%2BEI5iEWnOfFCCacYtTVNn1gTV5SJfvakHPkkd5WQIhAN9D1MOGGwxp44dx35%2BbUjCKjLkvN9LjbboQS6qXytTwKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxK9UO0qvjIwz2ihMq3AOzZhVJURS35a%2F1gzRNwg7Eu3yvgJEijqsphL1%2BZgcRqGu121E9zfit13sTmDGABgkGc0aELToG3v4zmZyAkJ1ln7gi0ovTua%2BXeRrhBvFt7gul7A5tkxZF%2F5r7tFyc9h0IerJXkmBIitsH52TuwYpm8eeaZXG3GeAnjt%2FVnKj3TbTT0iqoKymb9yTNpOMlJ1APEE%2FK9vDYyRypaQJ%2FbKXkzETBybDxnF9C1WmdDXtcjEJcly0oTHHuohEeHtwx6oVg7VTMwQI4PTewT3vYDAY0Q6218mWRoCEKlX254bsYQQoXr0DdioFMl1%2F6iGyrdhXxf7seB6jcC7yFxPOYtDpqSh9BknDJG%2Bbu05Bx6huyk7kVz37XFPn%2BiWTRtDaOmvQq2EjWYEa6ecac1x%2BgTqdDjz4xzFq%2Bv%2BrnhFFFCuk4xk4TKBevPK0KM%2BoJKYWVH331swjtRZ%2BhtlO4atDDfKwJUNgE4FcoB2idz1%2BCkzKLX5pDky%2F1teFgWGykTZN0tB6HjJrkw4qHwbdtOJECpC6MpPhd8tV%2FXtBI2nJAa%2Bw3NLDJsr0NoNvI3xE5%2BjLJ6qGCVav4kLRowR9csPNGEWxL7BTRvuRpnav2qja6yQ0u2gKTmrMycpfPhdWa1zDvxtbEBjqkAWhd2Fv1ebbpBsAlj2kV3qG6zhvKqo92Py%2B5P%2Fgx3WCQ%2FffvPasuZooeTeMGHX6F%2Br7lBZB2Ss%2FsW2%2FUaF84faUvdjADuSyCJkQGsRxGPmCO7VWZmC0yC%2Bk7N58haSbBlfUWzPnjUd5pwnxSWyJYd3L20vIaJtgBJdm6IB1I4fETZXkV3cK2oQquH6A8%2BLCpeZ618ZF8m0sLtOjXDymPtt3b%2BGUq&X-Amz-Signature=9a6d64cf2e74a63437ba9a8434adf230c4de220a7c00c1952b38b25ffb9b9ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3C3FB6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDHcc%2BEI5iEWnOfFCCacYtTVNn1gTV5SJfvakHPkkd5WQIhAN9D1MOGGwxp44dx35%2BbUjCKjLkvN9LjbboQS6qXytTwKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxK9UO0qvjIwz2ihMq3AOzZhVJURS35a%2F1gzRNwg7Eu3yvgJEijqsphL1%2BZgcRqGu121E9zfit13sTmDGABgkGc0aELToG3v4zmZyAkJ1ln7gi0ovTua%2BXeRrhBvFt7gul7A5tkxZF%2F5r7tFyc9h0IerJXkmBIitsH52TuwYpm8eeaZXG3GeAnjt%2FVnKj3TbTT0iqoKymb9yTNpOMlJ1APEE%2FK9vDYyRypaQJ%2FbKXkzETBybDxnF9C1WmdDXtcjEJcly0oTHHuohEeHtwx6oVg7VTMwQI4PTewT3vYDAY0Q6218mWRoCEKlX254bsYQQoXr0DdioFMl1%2F6iGyrdhXxf7seB6jcC7yFxPOYtDpqSh9BknDJG%2Bbu05Bx6huyk7kVz37XFPn%2BiWTRtDaOmvQq2EjWYEa6ecac1x%2BgTqdDjz4xzFq%2Bv%2BrnhFFFCuk4xk4TKBevPK0KM%2BoJKYWVH331swjtRZ%2BhtlO4atDDfKwJUNgE4FcoB2idz1%2BCkzKLX5pDky%2F1teFgWGykTZN0tB6HjJrkw4qHwbdtOJECpC6MpPhd8tV%2FXtBI2nJAa%2Bw3NLDJsr0NoNvI3xE5%2BjLJ6qGCVav4kLRowR9csPNGEWxL7BTRvuRpnav2qja6yQ0u2gKTmrMycpfPhdWa1zDvxtbEBjqkAWhd2Fv1ebbpBsAlj2kV3qG6zhvKqo92Py%2B5P%2Fgx3WCQ%2FffvPasuZooeTeMGHX6F%2Br7lBZB2Ss%2FsW2%2FUaF84faUvdjADuSyCJkQGsRxGPmCO7VWZmC0yC%2Bk7N58haSbBlfUWzPnjUd5pwnxSWyJYd3L20vIaJtgBJdm6IB1I4fETZXkV3cK2oQquH6A8%2BLCpeZ618ZF8m0sLtOjXDymPtt3b%2BGUq&X-Amz-Signature=81aa0f39b8353a9284eb1e7eda881fd663b9ff1a8b308b9286f3a463b8b6f7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3C3FB6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDHcc%2BEI5iEWnOfFCCacYtTVNn1gTV5SJfvakHPkkd5WQIhAN9D1MOGGwxp44dx35%2BbUjCKjLkvN9LjbboQS6qXytTwKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxK9UO0qvjIwz2ihMq3AOzZhVJURS35a%2F1gzRNwg7Eu3yvgJEijqsphL1%2BZgcRqGu121E9zfit13sTmDGABgkGc0aELToG3v4zmZyAkJ1ln7gi0ovTua%2BXeRrhBvFt7gul7A5tkxZF%2F5r7tFyc9h0IerJXkmBIitsH52TuwYpm8eeaZXG3GeAnjt%2FVnKj3TbTT0iqoKymb9yTNpOMlJ1APEE%2FK9vDYyRypaQJ%2FbKXkzETBybDxnF9C1WmdDXtcjEJcly0oTHHuohEeHtwx6oVg7VTMwQI4PTewT3vYDAY0Q6218mWRoCEKlX254bsYQQoXr0DdioFMl1%2F6iGyrdhXxf7seB6jcC7yFxPOYtDpqSh9BknDJG%2Bbu05Bx6huyk7kVz37XFPn%2BiWTRtDaOmvQq2EjWYEa6ecac1x%2BgTqdDjz4xzFq%2Bv%2BrnhFFFCuk4xk4TKBevPK0KM%2BoJKYWVH331swjtRZ%2BhtlO4atDDfKwJUNgE4FcoB2idz1%2BCkzKLX5pDky%2F1teFgWGykTZN0tB6HjJrkw4qHwbdtOJECpC6MpPhd8tV%2FXtBI2nJAa%2Bw3NLDJsr0NoNvI3xE5%2BjLJ6qGCVav4kLRowR9csPNGEWxL7BTRvuRpnav2qja6yQ0u2gKTmrMycpfPhdWa1zDvxtbEBjqkAWhd2Fv1ebbpBsAlj2kV3qG6zhvKqo92Py%2B5P%2Fgx3WCQ%2FffvPasuZooeTeMGHX6F%2Br7lBZB2Ss%2FsW2%2FUaF84faUvdjADuSyCJkQGsRxGPmCO7VWZmC0yC%2Bk7N58haSbBlfUWzPnjUd5pwnxSWyJYd3L20vIaJtgBJdm6IB1I4fETZXkV3cK2oQquH6A8%2BLCpeZ618ZF8m0sLtOjXDymPtt3b%2BGUq&X-Amz-Signature=c0b5ceda1509ecbf81e79d06e3a09aa512595513703eebe26f833c81016fd14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3C3FB6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDHcc%2BEI5iEWnOfFCCacYtTVNn1gTV5SJfvakHPkkd5WQIhAN9D1MOGGwxp44dx35%2BbUjCKjLkvN9LjbboQS6qXytTwKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxK9UO0qvjIwz2ihMq3AOzZhVJURS35a%2F1gzRNwg7Eu3yvgJEijqsphL1%2BZgcRqGu121E9zfit13sTmDGABgkGc0aELToG3v4zmZyAkJ1ln7gi0ovTua%2BXeRrhBvFt7gul7A5tkxZF%2F5r7tFyc9h0IerJXkmBIitsH52TuwYpm8eeaZXG3GeAnjt%2FVnKj3TbTT0iqoKymb9yTNpOMlJ1APEE%2FK9vDYyRypaQJ%2FbKXkzETBybDxnF9C1WmdDXtcjEJcly0oTHHuohEeHtwx6oVg7VTMwQI4PTewT3vYDAY0Q6218mWRoCEKlX254bsYQQoXr0DdioFMl1%2F6iGyrdhXxf7seB6jcC7yFxPOYtDpqSh9BknDJG%2Bbu05Bx6huyk7kVz37XFPn%2BiWTRtDaOmvQq2EjWYEa6ecac1x%2BgTqdDjz4xzFq%2Bv%2BrnhFFFCuk4xk4TKBevPK0KM%2BoJKYWVH331swjtRZ%2BhtlO4atDDfKwJUNgE4FcoB2idz1%2BCkzKLX5pDky%2F1teFgWGykTZN0tB6HjJrkw4qHwbdtOJECpC6MpPhd8tV%2FXtBI2nJAa%2Bw3NLDJsr0NoNvI3xE5%2BjLJ6qGCVav4kLRowR9csPNGEWxL7BTRvuRpnav2qja6yQ0u2gKTmrMycpfPhdWa1zDvxtbEBjqkAWhd2Fv1ebbpBsAlj2kV3qG6zhvKqo92Py%2B5P%2Fgx3WCQ%2FffvPasuZooeTeMGHX6F%2Br7lBZB2Ss%2FsW2%2FUaF84faUvdjADuSyCJkQGsRxGPmCO7VWZmC0yC%2Bk7N58haSbBlfUWzPnjUd5pwnxSWyJYd3L20vIaJtgBJdm6IB1I4fETZXkV3cK2oQquH6A8%2BLCpeZ618ZF8m0sLtOjXDymPtt3b%2BGUq&X-Amz-Signature=1aee5b64402a1ac4f1fd9b6b805a675d5402fca18eef8ed2160e83d7bc6ec6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3C3FB6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDHcc%2BEI5iEWnOfFCCacYtTVNn1gTV5SJfvakHPkkd5WQIhAN9D1MOGGwxp44dx35%2BbUjCKjLkvN9LjbboQS6qXytTwKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxK9UO0qvjIwz2ihMq3AOzZhVJURS35a%2F1gzRNwg7Eu3yvgJEijqsphL1%2BZgcRqGu121E9zfit13sTmDGABgkGc0aELToG3v4zmZyAkJ1ln7gi0ovTua%2BXeRrhBvFt7gul7A5tkxZF%2F5r7tFyc9h0IerJXkmBIitsH52TuwYpm8eeaZXG3GeAnjt%2FVnKj3TbTT0iqoKymb9yTNpOMlJ1APEE%2FK9vDYyRypaQJ%2FbKXkzETBybDxnF9C1WmdDXtcjEJcly0oTHHuohEeHtwx6oVg7VTMwQI4PTewT3vYDAY0Q6218mWRoCEKlX254bsYQQoXr0DdioFMl1%2F6iGyrdhXxf7seB6jcC7yFxPOYtDpqSh9BknDJG%2Bbu05Bx6huyk7kVz37XFPn%2BiWTRtDaOmvQq2EjWYEa6ecac1x%2BgTqdDjz4xzFq%2Bv%2BrnhFFFCuk4xk4TKBevPK0KM%2BoJKYWVH331swjtRZ%2BhtlO4atDDfKwJUNgE4FcoB2idz1%2BCkzKLX5pDky%2F1teFgWGykTZN0tB6HjJrkw4qHwbdtOJECpC6MpPhd8tV%2FXtBI2nJAa%2Bw3NLDJsr0NoNvI3xE5%2BjLJ6qGCVav4kLRowR9csPNGEWxL7BTRvuRpnav2qja6yQ0u2gKTmrMycpfPhdWa1zDvxtbEBjqkAWhd2Fv1ebbpBsAlj2kV3qG6zhvKqo92Py%2B5P%2Fgx3WCQ%2FffvPasuZooeTeMGHX6F%2Br7lBZB2Ss%2FsW2%2FUaF84faUvdjADuSyCJkQGsRxGPmCO7VWZmC0yC%2Bk7N58haSbBlfUWzPnjUd5pwnxSWyJYd3L20vIaJtgBJdm6IB1I4fETZXkV3cK2oQquH6A8%2BLCpeZ618ZF8m0sLtOjXDymPtt3b%2BGUq&X-Amz-Signature=950b0824a0bc129c6ae1a23aea29a33470bc5543f39217a684e39a265647984b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

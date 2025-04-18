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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKPSLRG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDElc3dcv7V7qQPC6dh8IWpAgWyQjM%2Ft8fnSKH7AOoyFQIhAOopS2nX6alu4dgOpPv5WVfvvpBe%2BeATdjaoo1c7c%2FR%2FKv8DCHAQABoMNjM3NDIzMTgzODA1IgwT%2FXtONYFo%2BuG9%2BNwq3AN%2BDXZk3tW9%2BYRJU%2BYchVimn2WfjZqBJ7hWrvKYSIO95WsarCiE9oBFtbBNVKPfSsq6N7kU96H5TkFGdJvNE1S7oV%2BCNSwUgERpJObbryfxniDSTeMy85u2SM1y%2Bo3z9D1JDBTFbK2N4%2FkSnmeCFmYyAJFYiPRZc8VBYjJ258%2BaLU6W2cZwTYVpoLYBZiCG8m080hGhQuQh1a%2BzXbOtvSV3DUxcTYSaCHiHmGOCFjFLApf7zEiHGMlgsZxc8eUbZkKG0JuaL4hl0oDaaomRTeqiyS1CMKT83BSxFal8jHfUW9Bmj3bEucyWRIM5hqoEXTCKNR4azxDWx46fNMwuWeBcFReKjLQG%2Bmq6bU6m9PN8Kt65vaeyRgFZFTDVJg7pzbcx9jYFSQqpFe8mHACdlYfOlAta1hpN7YiN0GOoJ7reMZxsqClumuAzLr20dcOJHFi3Wh2egTQl23h%2Fp44JTzBDtH8mEjTWgbUNJbBoBj8U%2BOXHQ3Bb0%2FRYVGgse%2Fhg7fG2zZvKNxwrmz%2FubauhMoeN8JAX%2FqNEgSfmkLSEBhOHfq3x%2BS3yVG84%2BulKlhk0GsFhy132VpEUbg4h28wdBs9KphiCL0vMMi3JAC2%2BBZ2Yg7zQ02d65GGarIq84TCG94fABjqkAX8yo1ilVjuo5iADtfI4UhaJIMMhrK6rHi4OA1PnX2GBNJkmQGM8z991zTImSOLojrxKU7ONSJ0KLp2wXY6u9bC3DrlebcuplnEGJKE0bRnRNAxS8pIesHD7vG23KsWX92tI4dKhgpDzUEEnS%2F4xaH3VCAfT1G51SCTLindz6p38iFDd8SWioa9T5LeXP%2FEz8D0R3UE60rxSNm9rPWnKB8cO%2BEPe&X-Amz-Signature=e4ce3603e1ce571d157981524765866503c8dac49f13a73bda46c3325b44e250&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKPSLRG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDElc3dcv7V7qQPC6dh8IWpAgWyQjM%2Ft8fnSKH7AOoyFQIhAOopS2nX6alu4dgOpPv5WVfvvpBe%2BeATdjaoo1c7c%2FR%2FKv8DCHAQABoMNjM3NDIzMTgzODA1IgwT%2FXtONYFo%2BuG9%2BNwq3AN%2BDXZk3tW9%2BYRJU%2BYchVimn2WfjZqBJ7hWrvKYSIO95WsarCiE9oBFtbBNVKPfSsq6N7kU96H5TkFGdJvNE1S7oV%2BCNSwUgERpJObbryfxniDSTeMy85u2SM1y%2Bo3z9D1JDBTFbK2N4%2FkSnmeCFmYyAJFYiPRZc8VBYjJ258%2BaLU6W2cZwTYVpoLYBZiCG8m080hGhQuQh1a%2BzXbOtvSV3DUxcTYSaCHiHmGOCFjFLApf7zEiHGMlgsZxc8eUbZkKG0JuaL4hl0oDaaomRTeqiyS1CMKT83BSxFal8jHfUW9Bmj3bEucyWRIM5hqoEXTCKNR4azxDWx46fNMwuWeBcFReKjLQG%2Bmq6bU6m9PN8Kt65vaeyRgFZFTDVJg7pzbcx9jYFSQqpFe8mHACdlYfOlAta1hpN7YiN0GOoJ7reMZxsqClumuAzLr20dcOJHFi3Wh2egTQl23h%2Fp44JTzBDtH8mEjTWgbUNJbBoBj8U%2BOXHQ3Bb0%2FRYVGgse%2Fhg7fG2zZvKNxwrmz%2FubauhMoeN8JAX%2FqNEgSfmkLSEBhOHfq3x%2BS3yVG84%2BulKlhk0GsFhy132VpEUbg4h28wdBs9KphiCL0vMMi3JAC2%2BBZ2Yg7zQ02d65GGarIq84TCG94fABjqkAX8yo1ilVjuo5iADtfI4UhaJIMMhrK6rHi4OA1PnX2GBNJkmQGM8z991zTImSOLojrxKU7ONSJ0KLp2wXY6u9bC3DrlebcuplnEGJKE0bRnRNAxS8pIesHD7vG23KsWX92tI4dKhgpDzUEEnS%2F4xaH3VCAfT1G51SCTLindz6p38iFDd8SWioa9T5LeXP%2FEz8D0R3UE60rxSNm9rPWnKB8cO%2BEPe&X-Amz-Signature=fc17313c1f029807221e60f94e0ea59a7c528e3dca1977d6dfeaa85545610362&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKPSLRG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDElc3dcv7V7qQPC6dh8IWpAgWyQjM%2Ft8fnSKH7AOoyFQIhAOopS2nX6alu4dgOpPv5WVfvvpBe%2BeATdjaoo1c7c%2FR%2FKv8DCHAQABoMNjM3NDIzMTgzODA1IgwT%2FXtONYFo%2BuG9%2BNwq3AN%2BDXZk3tW9%2BYRJU%2BYchVimn2WfjZqBJ7hWrvKYSIO95WsarCiE9oBFtbBNVKPfSsq6N7kU96H5TkFGdJvNE1S7oV%2BCNSwUgERpJObbryfxniDSTeMy85u2SM1y%2Bo3z9D1JDBTFbK2N4%2FkSnmeCFmYyAJFYiPRZc8VBYjJ258%2BaLU6W2cZwTYVpoLYBZiCG8m080hGhQuQh1a%2BzXbOtvSV3DUxcTYSaCHiHmGOCFjFLApf7zEiHGMlgsZxc8eUbZkKG0JuaL4hl0oDaaomRTeqiyS1CMKT83BSxFal8jHfUW9Bmj3bEucyWRIM5hqoEXTCKNR4azxDWx46fNMwuWeBcFReKjLQG%2Bmq6bU6m9PN8Kt65vaeyRgFZFTDVJg7pzbcx9jYFSQqpFe8mHACdlYfOlAta1hpN7YiN0GOoJ7reMZxsqClumuAzLr20dcOJHFi3Wh2egTQl23h%2Fp44JTzBDtH8mEjTWgbUNJbBoBj8U%2BOXHQ3Bb0%2FRYVGgse%2Fhg7fG2zZvKNxwrmz%2FubauhMoeN8JAX%2FqNEgSfmkLSEBhOHfq3x%2BS3yVG84%2BulKlhk0GsFhy132VpEUbg4h28wdBs9KphiCL0vMMi3JAC2%2BBZ2Yg7zQ02d65GGarIq84TCG94fABjqkAX8yo1ilVjuo5iADtfI4UhaJIMMhrK6rHi4OA1PnX2GBNJkmQGM8z991zTImSOLojrxKU7ONSJ0KLp2wXY6u9bC3DrlebcuplnEGJKE0bRnRNAxS8pIesHD7vG23KsWX92tI4dKhgpDzUEEnS%2F4xaH3VCAfT1G51SCTLindz6p38iFDd8SWioa9T5LeXP%2FEz8D0R3UE60rxSNm9rPWnKB8cO%2BEPe&X-Amz-Signature=64e2ed5f46c351b392cc7a525fa6ce71752c66a5f1d7c1bc6e0130e89e69c6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKPSLRG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDElc3dcv7V7qQPC6dh8IWpAgWyQjM%2Ft8fnSKH7AOoyFQIhAOopS2nX6alu4dgOpPv5WVfvvpBe%2BeATdjaoo1c7c%2FR%2FKv8DCHAQABoMNjM3NDIzMTgzODA1IgwT%2FXtONYFo%2BuG9%2BNwq3AN%2BDXZk3tW9%2BYRJU%2BYchVimn2WfjZqBJ7hWrvKYSIO95WsarCiE9oBFtbBNVKPfSsq6N7kU96H5TkFGdJvNE1S7oV%2BCNSwUgERpJObbryfxniDSTeMy85u2SM1y%2Bo3z9D1JDBTFbK2N4%2FkSnmeCFmYyAJFYiPRZc8VBYjJ258%2BaLU6W2cZwTYVpoLYBZiCG8m080hGhQuQh1a%2BzXbOtvSV3DUxcTYSaCHiHmGOCFjFLApf7zEiHGMlgsZxc8eUbZkKG0JuaL4hl0oDaaomRTeqiyS1CMKT83BSxFal8jHfUW9Bmj3bEucyWRIM5hqoEXTCKNR4azxDWx46fNMwuWeBcFReKjLQG%2Bmq6bU6m9PN8Kt65vaeyRgFZFTDVJg7pzbcx9jYFSQqpFe8mHACdlYfOlAta1hpN7YiN0GOoJ7reMZxsqClumuAzLr20dcOJHFi3Wh2egTQl23h%2Fp44JTzBDtH8mEjTWgbUNJbBoBj8U%2BOXHQ3Bb0%2FRYVGgse%2Fhg7fG2zZvKNxwrmz%2FubauhMoeN8JAX%2FqNEgSfmkLSEBhOHfq3x%2BS3yVG84%2BulKlhk0GsFhy132VpEUbg4h28wdBs9KphiCL0vMMi3JAC2%2BBZ2Yg7zQ02d65GGarIq84TCG94fABjqkAX8yo1ilVjuo5iADtfI4UhaJIMMhrK6rHi4OA1PnX2GBNJkmQGM8z991zTImSOLojrxKU7ONSJ0KLp2wXY6u9bC3DrlebcuplnEGJKE0bRnRNAxS8pIesHD7vG23KsWX92tI4dKhgpDzUEEnS%2F4xaH3VCAfT1G51SCTLindz6p38iFDd8SWioa9T5LeXP%2FEz8D0R3UE60rxSNm9rPWnKB8cO%2BEPe&X-Amz-Signature=d3928ec2e28076ac2f23ce26b2c585320f91962a87d24ab7bbd3a77f57ceab92&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKPSLRG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDElc3dcv7V7qQPC6dh8IWpAgWyQjM%2Ft8fnSKH7AOoyFQIhAOopS2nX6alu4dgOpPv5WVfvvpBe%2BeATdjaoo1c7c%2FR%2FKv8DCHAQABoMNjM3NDIzMTgzODA1IgwT%2FXtONYFo%2BuG9%2BNwq3AN%2BDXZk3tW9%2BYRJU%2BYchVimn2WfjZqBJ7hWrvKYSIO95WsarCiE9oBFtbBNVKPfSsq6N7kU96H5TkFGdJvNE1S7oV%2BCNSwUgERpJObbryfxniDSTeMy85u2SM1y%2Bo3z9D1JDBTFbK2N4%2FkSnmeCFmYyAJFYiPRZc8VBYjJ258%2BaLU6W2cZwTYVpoLYBZiCG8m080hGhQuQh1a%2BzXbOtvSV3DUxcTYSaCHiHmGOCFjFLApf7zEiHGMlgsZxc8eUbZkKG0JuaL4hl0oDaaomRTeqiyS1CMKT83BSxFal8jHfUW9Bmj3bEucyWRIM5hqoEXTCKNR4azxDWx46fNMwuWeBcFReKjLQG%2Bmq6bU6m9PN8Kt65vaeyRgFZFTDVJg7pzbcx9jYFSQqpFe8mHACdlYfOlAta1hpN7YiN0GOoJ7reMZxsqClumuAzLr20dcOJHFi3Wh2egTQl23h%2Fp44JTzBDtH8mEjTWgbUNJbBoBj8U%2BOXHQ3Bb0%2FRYVGgse%2Fhg7fG2zZvKNxwrmz%2FubauhMoeN8JAX%2FqNEgSfmkLSEBhOHfq3x%2BS3yVG84%2BulKlhk0GsFhy132VpEUbg4h28wdBs9KphiCL0vMMi3JAC2%2BBZ2Yg7zQ02d65GGarIq84TCG94fABjqkAX8yo1ilVjuo5iADtfI4UhaJIMMhrK6rHi4OA1PnX2GBNJkmQGM8z991zTImSOLojrxKU7ONSJ0KLp2wXY6u9bC3DrlebcuplnEGJKE0bRnRNAxS8pIesHD7vG23KsWX92tI4dKhgpDzUEEnS%2F4xaH3VCAfT1G51SCTLindz6p38iFDd8SWioa9T5LeXP%2FEz8D0R3UE60rxSNm9rPWnKB8cO%2BEPe&X-Amz-Signature=0461df09622cfaaba3507af316737657de5dc94eb87cbc0bcc63ce5c6cffc8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKPSLRG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDElc3dcv7V7qQPC6dh8IWpAgWyQjM%2Ft8fnSKH7AOoyFQIhAOopS2nX6alu4dgOpPv5WVfvvpBe%2BeATdjaoo1c7c%2FR%2FKv8DCHAQABoMNjM3NDIzMTgzODA1IgwT%2FXtONYFo%2BuG9%2BNwq3AN%2BDXZk3tW9%2BYRJU%2BYchVimn2WfjZqBJ7hWrvKYSIO95WsarCiE9oBFtbBNVKPfSsq6N7kU96H5TkFGdJvNE1S7oV%2BCNSwUgERpJObbryfxniDSTeMy85u2SM1y%2Bo3z9D1JDBTFbK2N4%2FkSnmeCFmYyAJFYiPRZc8VBYjJ258%2BaLU6W2cZwTYVpoLYBZiCG8m080hGhQuQh1a%2BzXbOtvSV3DUxcTYSaCHiHmGOCFjFLApf7zEiHGMlgsZxc8eUbZkKG0JuaL4hl0oDaaomRTeqiyS1CMKT83BSxFal8jHfUW9Bmj3bEucyWRIM5hqoEXTCKNR4azxDWx46fNMwuWeBcFReKjLQG%2Bmq6bU6m9PN8Kt65vaeyRgFZFTDVJg7pzbcx9jYFSQqpFe8mHACdlYfOlAta1hpN7YiN0GOoJ7reMZxsqClumuAzLr20dcOJHFi3Wh2egTQl23h%2Fp44JTzBDtH8mEjTWgbUNJbBoBj8U%2BOXHQ3Bb0%2FRYVGgse%2Fhg7fG2zZvKNxwrmz%2FubauhMoeN8JAX%2FqNEgSfmkLSEBhOHfq3x%2BS3yVG84%2BulKlhk0GsFhy132VpEUbg4h28wdBs9KphiCL0vMMi3JAC2%2BBZ2Yg7zQ02d65GGarIq84TCG94fABjqkAX8yo1ilVjuo5iADtfI4UhaJIMMhrK6rHi4OA1PnX2GBNJkmQGM8z991zTImSOLojrxKU7ONSJ0KLp2wXY6u9bC3DrlebcuplnEGJKE0bRnRNAxS8pIesHD7vG23KsWX92tI4dKhgpDzUEEnS%2F4xaH3VCAfT1G51SCTLindz6p38iFDd8SWioa9T5LeXP%2FEz8D0R3UE60rxSNm9rPWnKB8cO%2BEPe&X-Amz-Signature=274f797535a3172d705fcc9b6a7476abbf5a3de838067206aef904f6672cd3ae&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKPSLRG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDElc3dcv7V7qQPC6dh8IWpAgWyQjM%2Ft8fnSKH7AOoyFQIhAOopS2nX6alu4dgOpPv5WVfvvpBe%2BeATdjaoo1c7c%2FR%2FKv8DCHAQABoMNjM3NDIzMTgzODA1IgwT%2FXtONYFo%2BuG9%2BNwq3AN%2BDXZk3tW9%2BYRJU%2BYchVimn2WfjZqBJ7hWrvKYSIO95WsarCiE9oBFtbBNVKPfSsq6N7kU96H5TkFGdJvNE1S7oV%2BCNSwUgERpJObbryfxniDSTeMy85u2SM1y%2Bo3z9D1JDBTFbK2N4%2FkSnmeCFmYyAJFYiPRZc8VBYjJ258%2BaLU6W2cZwTYVpoLYBZiCG8m080hGhQuQh1a%2BzXbOtvSV3DUxcTYSaCHiHmGOCFjFLApf7zEiHGMlgsZxc8eUbZkKG0JuaL4hl0oDaaomRTeqiyS1CMKT83BSxFal8jHfUW9Bmj3bEucyWRIM5hqoEXTCKNR4azxDWx46fNMwuWeBcFReKjLQG%2Bmq6bU6m9PN8Kt65vaeyRgFZFTDVJg7pzbcx9jYFSQqpFe8mHACdlYfOlAta1hpN7YiN0GOoJ7reMZxsqClumuAzLr20dcOJHFi3Wh2egTQl23h%2Fp44JTzBDtH8mEjTWgbUNJbBoBj8U%2BOXHQ3Bb0%2FRYVGgse%2Fhg7fG2zZvKNxwrmz%2FubauhMoeN8JAX%2FqNEgSfmkLSEBhOHfq3x%2BS3yVG84%2BulKlhk0GsFhy132VpEUbg4h28wdBs9KphiCL0vMMi3JAC2%2BBZ2Yg7zQ02d65GGarIq84TCG94fABjqkAX8yo1ilVjuo5iADtfI4UhaJIMMhrK6rHi4OA1PnX2GBNJkmQGM8z991zTImSOLojrxKU7ONSJ0KLp2wXY6u9bC3DrlebcuplnEGJKE0bRnRNAxS8pIesHD7vG23KsWX92tI4dKhgpDzUEEnS%2F4xaH3VCAfT1G51SCTLindz6p38iFDd8SWioa9T5LeXP%2FEz8D0R3UE60rxSNm9rPWnKB8cO%2BEPe&X-Amz-Signature=19fd1247b1af713c7659e217001e8e79547ad95d5e981c085a1076d790b08f43&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLRCY4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxv%2FOyrv631nYwvmLYWZhMjxSOPV60Cb7q6fk98hGKQIhAJRSO1K08xeebIaD9dSmn%2FNzlKttXVgDh5ln1u2%2F4tl7KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9WGNSXjX8JkMf3YAq3AP0D6TFFpKGu%2FPe2%2FePu%2B%2Fdx2d%2BVfJau%2FhNTe1Hmn02op3HDFrXZF36XWnH4gnmziXcISI%2FVz%2FGLdEFvY36lgy5IIS7pUxyhO%2FWQNnTl0i940j%2FuTzJOuxRUtSrHMfl%2BY8Evqwp79fUEwrrBVzakZsOxwtrr%2FzbvvkQ1rz2DiN70p5cefiRaOCwoBc%2F1YjqJffjZKDnJm2Z3rABHfwUD7YbAnoKLIh5k1o%2FBWMpex4SC4XoC7%2BuaeLJI9Nkmo48GA%2Fi%2BX2cd5NN1iwGik24gibwkAYMZWJogVDMkJlgYzHD7IYwGYjwx6mhq7QD0HyseNCTq9SRv3QTltqa8%2F3aNhPQsPff24Cs%2BEYQdIUHADRdwfS%2BYwD7uihkvU1ubYRk19d3xjQVhtSRzQU1RcYSouVDqVX065dN4tLZAUUFDNbz6BoQsNtIluRgDjwyGllawcLWkb%2BjsSGWnpMa4MPkFDaPUZnfiL%2F5bB39KoY%2FjYTzSbBrhSKuvV9gZGqxCxiMM7lKMtGKO5amqBLPxGW6%2BHFmYYvYXsiPoQSCFAl2CpaBmaHoDDkI%2BFz4Q6bantzQoUjZZ1wiHMAiiQyPUZYVrnWJ2uG9MOoo%2FBzWrCk9u9ZPHf41me11SFCUrYcwwDC83prCBjqkAV4OoBAkyb38KT0sYhsY6sM7OHDLiVHP4mZVDdcjvny%2B5jGOnhG641StK2bbJVytYPi1NZsfUesYP9XaMJWyRfq5lYqH5AQxGnO3Pp1DvbvS2p2Fq6TEmA59zPzb9easZRUvCLoPiLpYE4JRv7WtuJgAbV3NppOofDpIksE3ClaeP6UzVkadSFqBD1nam2HceTGJ%2BbHcGY3n5NlGpIxBAGHicQ%2Fp&X-Amz-Signature=544fcf5bdd7fc7131961655aa59c9a47ecc0f45e1cecbe3c3efe7d727516d292&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLRCY4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxv%2FOyrv631nYwvmLYWZhMjxSOPV60Cb7q6fk98hGKQIhAJRSO1K08xeebIaD9dSmn%2FNzlKttXVgDh5ln1u2%2F4tl7KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9WGNSXjX8JkMf3YAq3AP0D6TFFpKGu%2FPe2%2FePu%2B%2Fdx2d%2BVfJau%2FhNTe1Hmn02op3HDFrXZF36XWnH4gnmziXcISI%2FVz%2FGLdEFvY36lgy5IIS7pUxyhO%2FWQNnTl0i940j%2FuTzJOuxRUtSrHMfl%2BY8Evqwp79fUEwrrBVzakZsOxwtrr%2FzbvvkQ1rz2DiN70p5cefiRaOCwoBc%2F1YjqJffjZKDnJm2Z3rABHfwUD7YbAnoKLIh5k1o%2FBWMpex4SC4XoC7%2BuaeLJI9Nkmo48GA%2Fi%2BX2cd5NN1iwGik24gibwkAYMZWJogVDMkJlgYzHD7IYwGYjwx6mhq7QD0HyseNCTq9SRv3QTltqa8%2F3aNhPQsPff24Cs%2BEYQdIUHADRdwfS%2BYwD7uihkvU1ubYRk19d3xjQVhtSRzQU1RcYSouVDqVX065dN4tLZAUUFDNbz6BoQsNtIluRgDjwyGllawcLWkb%2BjsSGWnpMa4MPkFDaPUZnfiL%2F5bB39KoY%2FjYTzSbBrhSKuvV9gZGqxCxiMM7lKMtGKO5amqBLPxGW6%2BHFmYYvYXsiPoQSCFAl2CpaBmaHoDDkI%2BFz4Q6bantzQoUjZZ1wiHMAiiQyPUZYVrnWJ2uG9MOoo%2FBzWrCk9u9ZPHf41me11SFCUrYcwwDC83prCBjqkAV4OoBAkyb38KT0sYhsY6sM7OHDLiVHP4mZVDdcjvny%2B5jGOnhG641StK2bbJVytYPi1NZsfUesYP9XaMJWyRfq5lYqH5AQxGnO3Pp1DvbvS2p2Fq6TEmA59zPzb9easZRUvCLoPiLpYE4JRv7WtuJgAbV3NppOofDpIksE3ClaeP6UzVkadSFqBD1nam2HceTGJ%2BbHcGY3n5NlGpIxBAGHicQ%2Fp&X-Amz-Signature=3c9dafdf656cf16c77e1cdadf5bf958f86ea2c686c69c089fea59c82ec5885da&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLRCY4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxv%2FOyrv631nYwvmLYWZhMjxSOPV60Cb7q6fk98hGKQIhAJRSO1K08xeebIaD9dSmn%2FNzlKttXVgDh5ln1u2%2F4tl7KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9WGNSXjX8JkMf3YAq3AP0D6TFFpKGu%2FPe2%2FePu%2B%2Fdx2d%2BVfJau%2FhNTe1Hmn02op3HDFrXZF36XWnH4gnmziXcISI%2FVz%2FGLdEFvY36lgy5IIS7pUxyhO%2FWQNnTl0i940j%2FuTzJOuxRUtSrHMfl%2BY8Evqwp79fUEwrrBVzakZsOxwtrr%2FzbvvkQ1rz2DiN70p5cefiRaOCwoBc%2F1YjqJffjZKDnJm2Z3rABHfwUD7YbAnoKLIh5k1o%2FBWMpex4SC4XoC7%2BuaeLJI9Nkmo48GA%2Fi%2BX2cd5NN1iwGik24gibwkAYMZWJogVDMkJlgYzHD7IYwGYjwx6mhq7QD0HyseNCTq9SRv3QTltqa8%2F3aNhPQsPff24Cs%2BEYQdIUHADRdwfS%2BYwD7uihkvU1ubYRk19d3xjQVhtSRzQU1RcYSouVDqVX065dN4tLZAUUFDNbz6BoQsNtIluRgDjwyGllawcLWkb%2BjsSGWnpMa4MPkFDaPUZnfiL%2F5bB39KoY%2FjYTzSbBrhSKuvV9gZGqxCxiMM7lKMtGKO5amqBLPxGW6%2BHFmYYvYXsiPoQSCFAl2CpaBmaHoDDkI%2BFz4Q6bantzQoUjZZ1wiHMAiiQyPUZYVrnWJ2uG9MOoo%2FBzWrCk9u9ZPHf41me11SFCUrYcwwDC83prCBjqkAV4OoBAkyb38KT0sYhsY6sM7OHDLiVHP4mZVDdcjvny%2B5jGOnhG641StK2bbJVytYPi1NZsfUesYP9XaMJWyRfq5lYqH5AQxGnO3Pp1DvbvS2p2Fq6TEmA59zPzb9easZRUvCLoPiLpYE4JRv7WtuJgAbV3NppOofDpIksE3ClaeP6UzVkadSFqBD1nam2HceTGJ%2BbHcGY3n5NlGpIxBAGHicQ%2Fp&X-Amz-Signature=0473385963278334194ec52bd6bde1ee6a6b745932e4b5f90b3cacc6237567e4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLRCY4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxv%2FOyrv631nYwvmLYWZhMjxSOPV60Cb7q6fk98hGKQIhAJRSO1K08xeebIaD9dSmn%2FNzlKttXVgDh5ln1u2%2F4tl7KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9WGNSXjX8JkMf3YAq3AP0D6TFFpKGu%2FPe2%2FePu%2B%2Fdx2d%2BVfJau%2FhNTe1Hmn02op3HDFrXZF36XWnH4gnmziXcISI%2FVz%2FGLdEFvY36lgy5IIS7pUxyhO%2FWQNnTl0i940j%2FuTzJOuxRUtSrHMfl%2BY8Evqwp79fUEwrrBVzakZsOxwtrr%2FzbvvkQ1rz2DiN70p5cefiRaOCwoBc%2F1YjqJffjZKDnJm2Z3rABHfwUD7YbAnoKLIh5k1o%2FBWMpex4SC4XoC7%2BuaeLJI9Nkmo48GA%2Fi%2BX2cd5NN1iwGik24gibwkAYMZWJogVDMkJlgYzHD7IYwGYjwx6mhq7QD0HyseNCTq9SRv3QTltqa8%2F3aNhPQsPff24Cs%2BEYQdIUHADRdwfS%2BYwD7uihkvU1ubYRk19d3xjQVhtSRzQU1RcYSouVDqVX065dN4tLZAUUFDNbz6BoQsNtIluRgDjwyGllawcLWkb%2BjsSGWnpMa4MPkFDaPUZnfiL%2F5bB39KoY%2FjYTzSbBrhSKuvV9gZGqxCxiMM7lKMtGKO5amqBLPxGW6%2BHFmYYvYXsiPoQSCFAl2CpaBmaHoDDkI%2BFz4Q6bantzQoUjZZ1wiHMAiiQyPUZYVrnWJ2uG9MOoo%2FBzWrCk9u9ZPHf41me11SFCUrYcwwDC83prCBjqkAV4OoBAkyb38KT0sYhsY6sM7OHDLiVHP4mZVDdcjvny%2B5jGOnhG641StK2bbJVytYPi1NZsfUesYP9XaMJWyRfq5lYqH5AQxGnO3Pp1DvbvS2p2Fq6TEmA59zPzb9easZRUvCLoPiLpYE4JRv7WtuJgAbV3NppOofDpIksE3ClaeP6UzVkadSFqBD1nam2HceTGJ%2BbHcGY3n5NlGpIxBAGHicQ%2Fp&X-Amz-Signature=c0b5b0b71d4a1b44ac0c3b74d724441a0592944430354510ba175dfc5d5a726f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLRCY4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxv%2FOyrv631nYwvmLYWZhMjxSOPV60Cb7q6fk98hGKQIhAJRSO1K08xeebIaD9dSmn%2FNzlKttXVgDh5ln1u2%2F4tl7KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9WGNSXjX8JkMf3YAq3AP0D6TFFpKGu%2FPe2%2FePu%2B%2Fdx2d%2BVfJau%2FhNTe1Hmn02op3HDFrXZF36XWnH4gnmziXcISI%2FVz%2FGLdEFvY36lgy5IIS7pUxyhO%2FWQNnTl0i940j%2FuTzJOuxRUtSrHMfl%2BY8Evqwp79fUEwrrBVzakZsOxwtrr%2FzbvvkQ1rz2DiN70p5cefiRaOCwoBc%2F1YjqJffjZKDnJm2Z3rABHfwUD7YbAnoKLIh5k1o%2FBWMpex4SC4XoC7%2BuaeLJI9Nkmo48GA%2Fi%2BX2cd5NN1iwGik24gibwkAYMZWJogVDMkJlgYzHD7IYwGYjwx6mhq7QD0HyseNCTq9SRv3QTltqa8%2F3aNhPQsPff24Cs%2BEYQdIUHADRdwfS%2BYwD7uihkvU1ubYRk19d3xjQVhtSRzQU1RcYSouVDqVX065dN4tLZAUUFDNbz6BoQsNtIluRgDjwyGllawcLWkb%2BjsSGWnpMa4MPkFDaPUZnfiL%2F5bB39KoY%2FjYTzSbBrhSKuvV9gZGqxCxiMM7lKMtGKO5amqBLPxGW6%2BHFmYYvYXsiPoQSCFAl2CpaBmaHoDDkI%2BFz4Q6bantzQoUjZZ1wiHMAiiQyPUZYVrnWJ2uG9MOoo%2FBzWrCk9u9ZPHf41me11SFCUrYcwwDC83prCBjqkAV4OoBAkyb38KT0sYhsY6sM7OHDLiVHP4mZVDdcjvny%2B5jGOnhG641StK2bbJVytYPi1NZsfUesYP9XaMJWyRfq5lYqH5AQxGnO3Pp1DvbvS2p2Fq6TEmA59zPzb9easZRUvCLoPiLpYE4JRv7WtuJgAbV3NppOofDpIksE3ClaeP6UzVkadSFqBD1nam2HceTGJ%2BbHcGY3n5NlGpIxBAGHicQ%2Fp&X-Amz-Signature=1a7eebb7e7ebbc2d507dc4c12c99a5fc20d85b080f0f69b4d8ca26f13456d5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLRCY4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxv%2FOyrv631nYwvmLYWZhMjxSOPV60Cb7q6fk98hGKQIhAJRSO1K08xeebIaD9dSmn%2FNzlKttXVgDh5ln1u2%2F4tl7KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9WGNSXjX8JkMf3YAq3AP0D6TFFpKGu%2FPe2%2FePu%2B%2Fdx2d%2BVfJau%2FhNTe1Hmn02op3HDFrXZF36XWnH4gnmziXcISI%2FVz%2FGLdEFvY36lgy5IIS7pUxyhO%2FWQNnTl0i940j%2FuTzJOuxRUtSrHMfl%2BY8Evqwp79fUEwrrBVzakZsOxwtrr%2FzbvvkQ1rz2DiN70p5cefiRaOCwoBc%2F1YjqJffjZKDnJm2Z3rABHfwUD7YbAnoKLIh5k1o%2FBWMpex4SC4XoC7%2BuaeLJI9Nkmo48GA%2Fi%2BX2cd5NN1iwGik24gibwkAYMZWJogVDMkJlgYzHD7IYwGYjwx6mhq7QD0HyseNCTq9SRv3QTltqa8%2F3aNhPQsPff24Cs%2BEYQdIUHADRdwfS%2BYwD7uihkvU1ubYRk19d3xjQVhtSRzQU1RcYSouVDqVX065dN4tLZAUUFDNbz6BoQsNtIluRgDjwyGllawcLWkb%2BjsSGWnpMa4MPkFDaPUZnfiL%2F5bB39KoY%2FjYTzSbBrhSKuvV9gZGqxCxiMM7lKMtGKO5amqBLPxGW6%2BHFmYYvYXsiPoQSCFAl2CpaBmaHoDDkI%2BFz4Q6bantzQoUjZZ1wiHMAiiQyPUZYVrnWJ2uG9MOoo%2FBzWrCk9u9ZPHf41me11SFCUrYcwwDC83prCBjqkAV4OoBAkyb38KT0sYhsY6sM7OHDLiVHP4mZVDdcjvny%2B5jGOnhG641StK2bbJVytYPi1NZsfUesYP9XaMJWyRfq5lYqH5AQxGnO3Pp1DvbvS2p2Fq6TEmA59zPzb9easZRUvCLoPiLpYE4JRv7WtuJgAbV3NppOofDpIksE3ClaeP6UzVkadSFqBD1nam2HceTGJ%2BbHcGY3n5NlGpIxBAGHicQ%2Fp&X-Amz-Signature=9098ebf58e1c191e4a10f85e71bdf35f91278fd3a2f24a4595272c909049f24a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLRCY4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxv%2FOyrv631nYwvmLYWZhMjxSOPV60Cb7q6fk98hGKQIhAJRSO1K08xeebIaD9dSmn%2FNzlKttXVgDh5ln1u2%2F4tl7KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9WGNSXjX8JkMf3YAq3AP0D6TFFpKGu%2FPe2%2FePu%2B%2Fdx2d%2BVfJau%2FhNTe1Hmn02op3HDFrXZF36XWnH4gnmziXcISI%2FVz%2FGLdEFvY36lgy5IIS7pUxyhO%2FWQNnTl0i940j%2FuTzJOuxRUtSrHMfl%2BY8Evqwp79fUEwrrBVzakZsOxwtrr%2FzbvvkQ1rz2DiN70p5cefiRaOCwoBc%2F1YjqJffjZKDnJm2Z3rABHfwUD7YbAnoKLIh5k1o%2FBWMpex4SC4XoC7%2BuaeLJI9Nkmo48GA%2Fi%2BX2cd5NN1iwGik24gibwkAYMZWJogVDMkJlgYzHD7IYwGYjwx6mhq7QD0HyseNCTq9SRv3QTltqa8%2F3aNhPQsPff24Cs%2BEYQdIUHADRdwfS%2BYwD7uihkvU1ubYRk19d3xjQVhtSRzQU1RcYSouVDqVX065dN4tLZAUUFDNbz6BoQsNtIluRgDjwyGllawcLWkb%2BjsSGWnpMa4MPkFDaPUZnfiL%2F5bB39KoY%2FjYTzSbBrhSKuvV9gZGqxCxiMM7lKMtGKO5amqBLPxGW6%2BHFmYYvYXsiPoQSCFAl2CpaBmaHoDDkI%2BFz4Q6bantzQoUjZZ1wiHMAiiQyPUZYVrnWJ2uG9MOoo%2FBzWrCk9u9ZPHf41me11SFCUrYcwwDC83prCBjqkAV4OoBAkyb38KT0sYhsY6sM7OHDLiVHP4mZVDdcjvny%2B5jGOnhG641StK2bbJVytYPi1NZsfUesYP9XaMJWyRfq5lYqH5AQxGnO3Pp1DvbvS2p2Fq6TEmA59zPzb9easZRUvCLoPiLpYE4JRv7WtuJgAbV3NppOofDpIksE3ClaeP6UzVkadSFqBD1nam2HceTGJ%2BbHcGY3n5NlGpIxBAGHicQ%2Fp&X-Amz-Signature=44c4207a40edbb93470d447818bb7facf2cfd5a41380cf86ff486fcf596d21b1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

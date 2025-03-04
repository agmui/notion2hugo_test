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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBYZMMR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoaCqT92mwIeXQN07YWXoteWl%2FjNs2Ad7O7IVcG4TXqAiBwwYxjdDX0Z43R3T9VItm3JjvVQCZqSiLv66ob8TOV2yqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeW2bImUIPA1PsmEQKtwDHDxk%2FuuVrehDrWmlNOM%2FB3HiMWd8M21OTKxpTfU0NdslQjxgL5QVJvupHQVhfXN80fIy%2Bjnqe2fuUi6%2BS5oGvtQhsXZIUNcjOyCPZrZb%2FW52ejNiP0k42UUqo7vmJUnusNYrx8xPxp8naltH7RV0fpN5DeOJWceYnSLCEFUorbNKlg5Zvlc6ZmCXBwiNh4u0aGSHhz%2F54R%2Bv1sCtnsNJk%2BCp1b69caDYRrd8wRRMAZOfAGNSXTsaggra7m2XS16NWhcqnUlyXxyXEjNU6DgBNwEA5d6qn7uWmfH%2FZumyw6ImxT9HiBaoCpiP5RCCpI%2Fc7fuBhzNy4DiNgZ6vRBuwTj2kSFx91RACZGqswF5jmhowfQQLgo299PwuIKDoAIoc%2Buu%2BzyqJI%2B2i7AmjHQ%2BcGHCHP3Yt3xtXAfuo6lpLb21MJ2ZLKZR8BAOtcCS3NOiDZtRV15yqmvnjbVmeM3hIX1FJYuGWA%2Bce3uqWfXusU45Dv5PbXsJ5SNm5sIG7HBAmraJ6O6Z%2FXggMcufuDNXv9499yriIsxr1GsVhL1pIQ9L%2Fw0EYHgG6GZPQbSHg0Ou0Bzq%2FqVfaO4ymMnyNiUTfCkQw2cmUEWcjzjZ%2FPaDsq%2F7M2KYfo7IFwBCO%2FLww6pmdvgY6pgFrgCXgJ59oAayj5Ob1InOjwDVE1n3l3wpHpr%2Fil1g9eUPLIOD%2B5%2FdbFcrDOLjunGB6OU5Qp%2FrHr5OmKfvAX1GihHIWHtqs7qSqotB8R8DiBP1SJCUL8u1a1seMnxQ8ln%2F937xTTFWZbPN5DmPNeJTTNpyYEubpp84QR8w%2BMu1CaMR4bF2DG6FdN87TbfawfVBU%2Fo4iLS%2F7ci68NpMWrT4nafPtg5MY&X-Amz-Signature=612724aeac4bac158b2f8137125933af400dfd40097d1e037ac19282af33dd6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBYZMMR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoaCqT92mwIeXQN07YWXoteWl%2FjNs2Ad7O7IVcG4TXqAiBwwYxjdDX0Z43R3T9VItm3JjvVQCZqSiLv66ob8TOV2yqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeW2bImUIPA1PsmEQKtwDHDxk%2FuuVrehDrWmlNOM%2FB3HiMWd8M21OTKxpTfU0NdslQjxgL5QVJvupHQVhfXN80fIy%2Bjnqe2fuUi6%2BS5oGvtQhsXZIUNcjOyCPZrZb%2FW52ejNiP0k42UUqo7vmJUnusNYrx8xPxp8naltH7RV0fpN5DeOJWceYnSLCEFUorbNKlg5Zvlc6ZmCXBwiNh4u0aGSHhz%2F54R%2Bv1sCtnsNJk%2BCp1b69caDYRrd8wRRMAZOfAGNSXTsaggra7m2XS16NWhcqnUlyXxyXEjNU6DgBNwEA5d6qn7uWmfH%2FZumyw6ImxT9HiBaoCpiP5RCCpI%2Fc7fuBhzNy4DiNgZ6vRBuwTj2kSFx91RACZGqswF5jmhowfQQLgo299PwuIKDoAIoc%2Buu%2BzyqJI%2B2i7AmjHQ%2BcGHCHP3Yt3xtXAfuo6lpLb21MJ2ZLKZR8BAOtcCS3NOiDZtRV15yqmvnjbVmeM3hIX1FJYuGWA%2Bce3uqWfXusU45Dv5PbXsJ5SNm5sIG7HBAmraJ6O6Z%2FXggMcufuDNXv9499yriIsxr1GsVhL1pIQ9L%2Fw0EYHgG6GZPQbSHg0Ou0Bzq%2FqVfaO4ymMnyNiUTfCkQw2cmUEWcjzjZ%2FPaDsq%2F7M2KYfo7IFwBCO%2FLww6pmdvgY6pgFrgCXgJ59oAayj5Ob1InOjwDVE1n3l3wpHpr%2Fil1g9eUPLIOD%2B5%2FdbFcrDOLjunGB6OU5Qp%2FrHr5OmKfvAX1GihHIWHtqs7qSqotB8R8DiBP1SJCUL8u1a1seMnxQ8ln%2F937xTTFWZbPN5DmPNeJTTNpyYEubpp84QR8w%2BMu1CaMR4bF2DG6FdN87TbfawfVBU%2Fo4iLS%2F7ci68NpMWrT4nafPtg5MY&X-Amz-Signature=3fb4a0ede5760ff82d14c147f447839e9d34904ab7388ab5304177dc624fcdd1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBYZMMR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoaCqT92mwIeXQN07YWXoteWl%2FjNs2Ad7O7IVcG4TXqAiBwwYxjdDX0Z43R3T9VItm3JjvVQCZqSiLv66ob8TOV2yqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeW2bImUIPA1PsmEQKtwDHDxk%2FuuVrehDrWmlNOM%2FB3HiMWd8M21OTKxpTfU0NdslQjxgL5QVJvupHQVhfXN80fIy%2Bjnqe2fuUi6%2BS5oGvtQhsXZIUNcjOyCPZrZb%2FW52ejNiP0k42UUqo7vmJUnusNYrx8xPxp8naltH7RV0fpN5DeOJWceYnSLCEFUorbNKlg5Zvlc6ZmCXBwiNh4u0aGSHhz%2F54R%2Bv1sCtnsNJk%2BCp1b69caDYRrd8wRRMAZOfAGNSXTsaggra7m2XS16NWhcqnUlyXxyXEjNU6DgBNwEA5d6qn7uWmfH%2FZumyw6ImxT9HiBaoCpiP5RCCpI%2Fc7fuBhzNy4DiNgZ6vRBuwTj2kSFx91RACZGqswF5jmhowfQQLgo299PwuIKDoAIoc%2Buu%2BzyqJI%2B2i7AmjHQ%2BcGHCHP3Yt3xtXAfuo6lpLb21MJ2ZLKZR8BAOtcCS3NOiDZtRV15yqmvnjbVmeM3hIX1FJYuGWA%2Bce3uqWfXusU45Dv5PbXsJ5SNm5sIG7HBAmraJ6O6Z%2FXggMcufuDNXv9499yriIsxr1GsVhL1pIQ9L%2Fw0EYHgG6GZPQbSHg0Ou0Bzq%2FqVfaO4ymMnyNiUTfCkQw2cmUEWcjzjZ%2FPaDsq%2F7M2KYfo7IFwBCO%2FLww6pmdvgY6pgFrgCXgJ59oAayj5Ob1InOjwDVE1n3l3wpHpr%2Fil1g9eUPLIOD%2B5%2FdbFcrDOLjunGB6OU5Qp%2FrHr5OmKfvAX1GihHIWHtqs7qSqotB8R8DiBP1SJCUL8u1a1seMnxQ8ln%2F937xTTFWZbPN5DmPNeJTTNpyYEubpp84QR8w%2BMu1CaMR4bF2DG6FdN87TbfawfVBU%2Fo4iLS%2F7ci68NpMWrT4nafPtg5MY&X-Amz-Signature=e4d59fe3ce9f29419b2f0dcffa026f4a8bebf7fe00b905926edd9a63dc532dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBYZMMR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoaCqT92mwIeXQN07YWXoteWl%2FjNs2Ad7O7IVcG4TXqAiBwwYxjdDX0Z43R3T9VItm3JjvVQCZqSiLv66ob8TOV2yqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeW2bImUIPA1PsmEQKtwDHDxk%2FuuVrehDrWmlNOM%2FB3HiMWd8M21OTKxpTfU0NdslQjxgL5QVJvupHQVhfXN80fIy%2Bjnqe2fuUi6%2BS5oGvtQhsXZIUNcjOyCPZrZb%2FW52ejNiP0k42UUqo7vmJUnusNYrx8xPxp8naltH7RV0fpN5DeOJWceYnSLCEFUorbNKlg5Zvlc6ZmCXBwiNh4u0aGSHhz%2F54R%2Bv1sCtnsNJk%2BCp1b69caDYRrd8wRRMAZOfAGNSXTsaggra7m2XS16NWhcqnUlyXxyXEjNU6DgBNwEA5d6qn7uWmfH%2FZumyw6ImxT9HiBaoCpiP5RCCpI%2Fc7fuBhzNy4DiNgZ6vRBuwTj2kSFx91RACZGqswF5jmhowfQQLgo299PwuIKDoAIoc%2Buu%2BzyqJI%2B2i7AmjHQ%2BcGHCHP3Yt3xtXAfuo6lpLb21MJ2ZLKZR8BAOtcCS3NOiDZtRV15yqmvnjbVmeM3hIX1FJYuGWA%2Bce3uqWfXusU45Dv5PbXsJ5SNm5sIG7HBAmraJ6O6Z%2FXggMcufuDNXv9499yriIsxr1GsVhL1pIQ9L%2Fw0EYHgG6GZPQbSHg0Ou0Bzq%2FqVfaO4ymMnyNiUTfCkQw2cmUEWcjzjZ%2FPaDsq%2F7M2KYfo7IFwBCO%2FLww6pmdvgY6pgFrgCXgJ59oAayj5Ob1InOjwDVE1n3l3wpHpr%2Fil1g9eUPLIOD%2B5%2FdbFcrDOLjunGB6OU5Qp%2FrHr5OmKfvAX1GihHIWHtqs7qSqotB8R8DiBP1SJCUL8u1a1seMnxQ8ln%2F937xTTFWZbPN5DmPNeJTTNpyYEubpp84QR8w%2BMu1CaMR4bF2DG6FdN87TbfawfVBU%2Fo4iLS%2F7ci68NpMWrT4nafPtg5MY&X-Amz-Signature=32ec071f97ee2d4436c4941728c0353bef07aea6da25d36d386e321837740639&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBYZMMR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoaCqT92mwIeXQN07YWXoteWl%2FjNs2Ad7O7IVcG4TXqAiBwwYxjdDX0Z43R3T9VItm3JjvVQCZqSiLv66ob8TOV2yqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeW2bImUIPA1PsmEQKtwDHDxk%2FuuVrehDrWmlNOM%2FB3HiMWd8M21OTKxpTfU0NdslQjxgL5QVJvupHQVhfXN80fIy%2Bjnqe2fuUi6%2BS5oGvtQhsXZIUNcjOyCPZrZb%2FW52ejNiP0k42UUqo7vmJUnusNYrx8xPxp8naltH7RV0fpN5DeOJWceYnSLCEFUorbNKlg5Zvlc6ZmCXBwiNh4u0aGSHhz%2F54R%2Bv1sCtnsNJk%2BCp1b69caDYRrd8wRRMAZOfAGNSXTsaggra7m2XS16NWhcqnUlyXxyXEjNU6DgBNwEA5d6qn7uWmfH%2FZumyw6ImxT9HiBaoCpiP5RCCpI%2Fc7fuBhzNy4DiNgZ6vRBuwTj2kSFx91RACZGqswF5jmhowfQQLgo299PwuIKDoAIoc%2Buu%2BzyqJI%2B2i7AmjHQ%2BcGHCHP3Yt3xtXAfuo6lpLb21MJ2ZLKZR8BAOtcCS3NOiDZtRV15yqmvnjbVmeM3hIX1FJYuGWA%2Bce3uqWfXusU45Dv5PbXsJ5SNm5sIG7HBAmraJ6O6Z%2FXggMcufuDNXv9499yriIsxr1GsVhL1pIQ9L%2Fw0EYHgG6GZPQbSHg0Ou0Bzq%2FqVfaO4ymMnyNiUTfCkQw2cmUEWcjzjZ%2FPaDsq%2F7M2KYfo7IFwBCO%2FLww6pmdvgY6pgFrgCXgJ59oAayj5Ob1InOjwDVE1n3l3wpHpr%2Fil1g9eUPLIOD%2B5%2FdbFcrDOLjunGB6OU5Qp%2FrHr5OmKfvAX1GihHIWHtqs7qSqotB8R8DiBP1SJCUL8u1a1seMnxQ8ln%2F937xTTFWZbPN5DmPNeJTTNpyYEubpp84QR8w%2BMu1CaMR4bF2DG6FdN87TbfawfVBU%2Fo4iLS%2F7ci68NpMWrT4nafPtg5MY&X-Amz-Signature=3dba38faaa6c431614715ae9876df42504821e454970921d4d1ed65c5b07b404&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBYZMMR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoaCqT92mwIeXQN07YWXoteWl%2FjNs2Ad7O7IVcG4TXqAiBwwYxjdDX0Z43R3T9VItm3JjvVQCZqSiLv66ob8TOV2yqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeW2bImUIPA1PsmEQKtwDHDxk%2FuuVrehDrWmlNOM%2FB3HiMWd8M21OTKxpTfU0NdslQjxgL5QVJvupHQVhfXN80fIy%2Bjnqe2fuUi6%2BS5oGvtQhsXZIUNcjOyCPZrZb%2FW52ejNiP0k42UUqo7vmJUnusNYrx8xPxp8naltH7RV0fpN5DeOJWceYnSLCEFUorbNKlg5Zvlc6ZmCXBwiNh4u0aGSHhz%2F54R%2Bv1sCtnsNJk%2BCp1b69caDYRrd8wRRMAZOfAGNSXTsaggra7m2XS16NWhcqnUlyXxyXEjNU6DgBNwEA5d6qn7uWmfH%2FZumyw6ImxT9HiBaoCpiP5RCCpI%2Fc7fuBhzNy4DiNgZ6vRBuwTj2kSFx91RACZGqswF5jmhowfQQLgo299PwuIKDoAIoc%2Buu%2BzyqJI%2B2i7AmjHQ%2BcGHCHP3Yt3xtXAfuo6lpLb21MJ2ZLKZR8BAOtcCS3NOiDZtRV15yqmvnjbVmeM3hIX1FJYuGWA%2Bce3uqWfXusU45Dv5PbXsJ5SNm5sIG7HBAmraJ6O6Z%2FXggMcufuDNXv9499yriIsxr1GsVhL1pIQ9L%2Fw0EYHgG6GZPQbSHg0Ou0Bzq%2FqVfaO4ymMnyNiUTfCkQw2cmUEWcjzjZ%2FPaDsq%2F7M2KYfo7IFwBCO%2FLww6pmdvgY6pgFrgCXgJ59oAayj5Ob1InOjwDVE1n3l3wpHpr%2Fil1g9eUPLIOD%2B5%2FdbFcrDOLjunGB6OU5Qp%2FrHr5OmKfvAX1GihHIWHtqs7qSqotB8R8DiBP1SJCUL8u1a1seMnxQ8ln%2F937xTTFWZbPN5DmPNeJTTNpyYEubpp84QR8w%2BMu1CaMR4bF2DG6FdN87TbfawfVBU%2Fo4iLS%2F7ci68NpMWrT4nafPtg5MY&X-Amz-Signature=ca4076ea41be65e25c7d8638d8d763e4e292a9d53cbea0989333579776a2648f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBYZMMR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoaCqT92mwIeXQN07YWXoteWl%2FjNs2Ad7O7IVcG4TXqAiBwwYxjdDX0Z43R3T9VItm3JjvVQCZqSiLv66ob8TOV2yqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeW2bImUIPA1PsmEQKtwDHDxk%2FuuVrehDrWmlNOM%2FB3HiMWd8M21OTKxpTfU0NdslQjxgL5QVJvupHQVhfXN80fIy%2Bjnqe2fuUi6%2BS5oGvtQhsXZIUNcjOyCPZrZb%2FW52ejNiP0k42UUqo7vmJUnusNYrx8xPxp8naltH7RV0fpN5DeOJWceYnSLCEFUorbNKlg5Zvlc6ZmCXBwiNh4u0aGSHhz%2F54R%2Bv1sCtnsNJk%2BCp1b69caDYRrd8wRRMAZOfAGNSXTsaggra7m2XS16NWhcqnUlyXxyXEjNU6DgBNwEA5d6qn7uWmfH%2FZumyw6ImxT9HiBaoCpiP5RCCpI%2Fc7fuBhzNy4DiNgZ6vRBuwTj2kSFx91RACZGqswF5jmhowfQQLgo299PwuIKDoAIoc%2Buu%2BzyqJI%2B2i7AmjHQ%2BcGHCHP3Yt3xtXAfuo6lpLb21MJ2ZLKZR8BAOtcCS3NOiDZtRV15yqmvnjbVmeM3hIX1FJYuGWA%2Bce3uqWfXusU45Dv5PbXsJ5SNm5sIG7HBAmraJ6O6Z%2FXggMcufuDNXv9499yriIsxr1GsVhL1pIQ9L%2Fw0EYHgG6GZPQbSHg0Ou0Bzq%2FqVfaO4ymMnyNiUTfCkQw2cmUEWcjzjZ%2FPaDsq%2F7M2KYfo7IFwBCO%2FLww6pmdvgY6pgFrgCXgJ59oAayj5Ob1InOjwDVE1n3l3wpHpr%2Fil1g9eUPLIOD%2B5%2FdbFcrDOLjunGB6OU5Qp%2FrHr5OmKfvAX1GihHIWHtqs7qSqotB8R8DiBP1SJCUL8u1a1seMnxQ8ln%2F937xTTFWZbPN5DmPNeJTTNpyYEubpp84QR8w%2BMu1CaMR4bF2DG6FdN87TbfawfVBU%2Fo4iLS%2F7ci68NpMWrT4nafPtg5MY&X-Amz-Signature=4023bc5b06b0c84731b000b5ba3029beb0514f17de1a5fa7816f85a99c2ce67c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

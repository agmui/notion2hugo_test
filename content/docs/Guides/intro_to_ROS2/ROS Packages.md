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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFPVJTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGoUS1cyeGzAnRPw1yiWcPS%2FsFglABkZPUNj8qePHpjRAiAoWTrPXVe3rHCiIeYHedb9EBD%2BaM5t5X2ETwVODb%2FIFSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxxlgrF0alppe5GcMKtwDjpHl9ckba%2BV2YE4vH0FiPCdeCTDsKyV82pTvlh13jfY56Wn8TTCYbPBDLm7J2sax%2FbyVMnplFLZcXZqa8nZr0klhmeSPgRpKCye1VbGCQu2IeTPv5BtrNBNPSDzpl23AKh3HPe1bnU8lI%2FpJNfIBYpZcx9nxTBkvJN%2Bz5YimgaoY%2FcR9FlUVftf97fT%2FM78f%2FBn7Hv%2BKirEqNYcVWkJbJVZBSlJxmRkhu883l1PGg1AwsAkSdaY4zZ3bizJloGEejzQYn05cGTPc2JMc22f2n%2FkD8GHodp835f4ElNWZxxlMGPxjxNJ4Ta%2Bvzpn2HyhUV9wVuHVKESF3UVDUVbYjvJkXIZC0HNJDoomgQfrpfIJJx7hxz8Kbx8k5%2BFRV1TPYhP13Ha68S6ibxavP17eFDOmPZUCQ0XjaF79bBFlobKmW5wPuRBwowgze7D9GLTGlGIAfihpdY73WRx%2BgkUHVzRHMsR19Rnz3pxmeRmOoviS8E%2Bch7hKy53BXenptEsDqD6Ju9vU2c6XgvG9jnfGSJVBULaHGRLTD%2BMnxbg%2BjAVVu5GovmKbdeZ39YHfQZGuvPvIgbmmYmTvh%2FszC4EkTHsDKQBDgfaVQ303gyUWzHOuSqFZ6oDTpVb3Fse0wr7u2wgY6pgGnBD9ZuPEjXjSw8hXnLm72v0RI2bljXJ4WWLUfZNpzplRDBrEraNxdCvLLxsf6OOBRvZNhvZZCM0a7V43o6R%2F1vTBvoZDzJEFuaLpmvxQcpcXbuqNTmNHzMAQZ0A9eK0ufKMEmiuiFH1tdhqTOrF1RA64sAcN7xF8HsgLLt0SOJu1zHIh7vDR6ahkf5vIzsLcAvnCsaOT74CPRxrK29yyCJH8m%2B6r%2F&X-Amz-Signature=83566ada5f82e1f3a5821349aae878df22a98b3942b91fa151ef891591aace03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFPVJTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGoUS1cyeGzAnRPw1yiWcPS%2FsFglABkZPUNj8qePHpjRAiAoWTrPXVe3rHCiIeYHedb9EBD%2BaM5t5X2ETwVODb%2FIFSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxxlgrF0alppe5GcMKtwDjpHl9ckba%2BV2YE4vH0FiPCdeCTDsKyV82pTvlh13jfY56Wn8TTCYbPBDLm7J2sax%2FbyVMnplFLZcXZqa8nZr0klhmeSPgRpKCye1VbGCQu2IeTPv5BtrNBNPSDzpl23AKh3HPe1bnU8lI%2FpJNfIBYpZcx9nxTBkvJN%2Bz5YimgaoY%2FcR9FlUVftf97fT%2FM78f%2FBn7Hv%2BKirEqNYcVWkJbJVZBSlJxmRkhu883l1PGg1AwsAkSdaY4zZ3bizJloGEejzQYn05cGTPc2JMc22f2n%2FkD8GHodp835f4ElNWZxxlMGPxjxNJ4Ta%2Bvzpn2HyhUV9wVuHVKESF3UVDUVbYjvJkXIZC0HNJDoomgQfrpfIJJx7hxz8Kbx8k5%2BFRV1TPYhP13Ha68S6ibxavP17eFDOmPZUCQ0XjaF79bBFlobKmW5wPuRBwowgze7D9GLTGlGIAfihpdY73WRx%2BgkUHVzRHMsR19Rnz3pxmeRmOoviS8E%2Bch7hKy53BXenptEsDqD6Ju9vU2c6XgvG9jnfGSJVBULaHGRLTD%2BMnxbg%2BjAVVu5GovmKbdeZ39YHfQZGuvPvIgbmmYmTvh%2FszC4EkTHsDKQBDgfaVQ303gyUWzHOuSqFZ6oDTpVb3Fse0wr7u2wgY6pgGnBD9ZuPEjXjSw8hXnLm72v0RI2bljXJ4WWLUfZNpzplRDBrEraNxdCvLLxsf6OOBRvZNhvZZCM0a7V43o6R%2F1vTBvoZDzJEFuaLpmvxQcpcXbuqNTmNHzMAQZ0A9eK0ufKMEmiuiFH1tdhqTOrF1RA64sAcN7xF8HsgLLt0SOJu1zHIh7vDR6ahkf5vIzsLcAvnCsaOT74CPRxrK29yyCJH8m%2B6r%2F&X-Amz-Signature=d56e8b0fbe1875052202b2a233b7b24ac39393582909b98448e65e4eef2c7ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFPVJTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGoUS1cyeGzAnRPw1yiWcPS%2FsFglABkZPUNj8qePHpjRAiAoWTrPXVe3rHCiIeYHedb9EBD%2BaM5t5X2ETwVODb%2FIFSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxxlgrF0alppe5GcMKtwDjpHl9ckba%2BV2YE4vH0FiPCdeCTDsKyV82pTvlh13jfY56Wn8TTCYbPBDLm7J2sax%2FbyVMnplFLZcXZqa8nZr0klhmeSPgRpKCye1VbGCQu2IeTPv5BtrNBNPSDzpl23AKh3HPe1bnU8lI%2FpJNfIBYpZcx9nxTBkvJN%2Bz5YimgaoY%2FcR9FlUVftf97fT%2FM78f%2FBn7Hv%2BKirEqNYcVWkJbJVZBSlJxmRkhu883l1PGg1AwsAkSdaY4zZ3bizJloGEejzQYn05cGTPc2JMc22f2n%2FkD8GHodp835f4ElNWZxxlMGPxjxNJ4Ta%2Bvzpn2HyhUV9wVuHVKESF3UVDUVbYjvJkXIZC0HNJDoomgQfrpfIJJx7hxz8Kbx8k5%2BFRV1TPYhP13Ha68S6ibxavP17eFDOmPZUCQ0XjaF79bBFlobKmW5wPuRBwowgze7D9GLTGlGIAfihpdY73WRx%2BgkUHVzRHMsR19Rnz3pxmeRmOoviS8E%2Bch7hKy53BXenptEsDqD6Ju9vU2c6XgvG9jnfGSJVBULaHGRLTD%2BMnxbg%2BjAVVu5GovmKbdeZ39YHfQZGuvPvIgbmmYmTvh%2FszC4EkTHsDKQBDgfaVQ303gyUWzHOuSqFZ6oDTpVb3Fse0wr7u2wgY6pgGnBD9ZuPEjXjSw8hXnLm72v0RI2bljXJ4WWLUfZNpzplRDBrEraNxdCvLLxsf6OOBRvZNhvZZCM0a7V43o6R%2F1vTBvoZDzJEFuaLpmvxQcpcXbuqNTmNHzMAQZ0A9eK0ufKMEmiuiFH1tdhqTOrF1RA64sAcN7xF8HsgLLt0SOJu1zHIh7vDR6ahkf5vIzsLcAvnCsaOT74CPRxrK29yyCJH8m%2B6r%2F&X-Amz-Signature=946aef0a4e00eb5ea145feaaead85334cc567fcd1ba4da192666ab4cb933e367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFPVJTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGoUS1cyeGzAnRPw1yiWcPS%2FsFglABkZPUNj8qePHpjRAiAoWTrPXVe3rHCiIeYHedb9EBD%2BaM5t5X2ETwVODb%2FIFSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxxlgrF0alppe5GcMKtwDjpHl9ckba%2BV2YE4vH0FiPCdeCTDsKyV82pTvlh13jfY56Wn8TTCYbPBDLm7J2sax%2FbyVMnplFLZcXZqa8nZr0klhmeSPgRpKCye1VbGCQu2IeTPv5BtrNBNPSDzpl23AKh3HPe1bnU8lI%2FpJNfIBYpZcx9nxTBkvJN%2Bz5YimgaoY%2FcR9FlUVftf97fT%2FM78f%2FBn7Hv%2BKirEqNYcVWkJbJVZBSlJxmRkhu883l1PGg1AwsAkSdaY4zZ3bizJloGEejzQYn05cGTPc2JMc22f2n%2FkD8GHodp835f4ElNWZxxlMGPxjxNJ4Ta%2Bvzpn2HyhUV9wVuHVKESF3UVDUVbYjvJkXIZC0HNJDoomgQfrpfIJJx7hxz8Kbx8k5%2BFRV1TPYhP13Ha68S6ibxavP17eFDOmPZUCQ0XjaF79bBFlobKmW5wPuRBwowgze7D9GLTGlGIAfihpdY73WRx%2BgkUHVzRHMsR19Rnz3pxmeRmOoviS8E%2Bch7hKy53BXenptEsDqD6Ju9vU2c6XgvG9jnfGSJVBULaHGRLTD%2BMnxbg%2BjAVVu5GovmKbdeZ39YHfQZGuvPvIgbmmYmTvh%2FszC4EkTHsDKQBDgfaVQ303gyUWzHOuSqFZ6oDTpVb3Fse0wr7u2wgY6pgGnBD9ZuPEjXjSw8hXnLm72v0RI2bljXJ4WWLUfZNpzplRDBrEraNxdCvLLxsf6OOBRvZNhvZZCM0a7V43o6R%2F1vTBvoZDzJEFuaLpmvxQcpcXbuqNTmNHzMAQZ0A9eK0ufKMEmiuiFH1tdhqTOrF1RA64sAcN7xF8HsgLLt0SOJu1zHIh7vDR6ahkf5vIzsLcAvnCsaOT74CPRxrK29yyCJH8m%2B6r%2F&X-Amz-Signature=abc9f252247d03e7a53e1d797917aa6ee0b3bfc7e178215c35d596088f4ccb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFPVJTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGoUS1cyeGzAnRPw1yiWcPS%2FsFglABkZPUNj8qePHpjRAiAoWTrPXVe3rHCiIeYHedb9EBD%2BaM5t5X2ETwVODb%2FIFSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxxlgrF0alppe5GcMKtwDjpHl9ckba%2BV2YE4vH0FiPCdeCTDsKyV82pTvlh13jfY56Wn8TTCYbPBDLm7J2sax%2FbyVMnplFLZcXZqa8nZr0klhmeSPgRpKCye1VbGCQu2IeTPv5BtrNBNPSDzpl23AKh3HPe1bnU8lI%2FpJNfIBYpZcx9nxTBkvJN%2Bz5YimgaoY%2FcR9FlUVftf97fT%2FM78f%2FBn7Hv%2BKirEqNYcVWkJbJVZBSlJxmRkhu883l1PGg1AwsAkSdaY4zZ3bizJloGEejzQYn05cGTPc2JMc22f2n%2FkD8GHodp835f4ElNWZxxlMGPxjxNJ4Ta%2Bvzpn2HyhUV9wVuHVKESF3UVDUVbYjvJkXIZC0HNJDoomgQfrpfIJJx7hxz8Kbx8k5%2BFRV1TPYhP13Ha68S6ibxavP17eFDOmPZUCQ0XjaF79bBFlobKmW5wPuRBwowgze7D9GLTGlGIAfihpdY73WRx%2BgkUHVzRHMsR19Rnz3pxmeRmOoviS8E%2Bch7hKy53BXenptEsDqD6Ju9vU2c6XgvG9jnfGSJVBULaHGRLTD%2BMnxbg%2BjAVVu5GovmKbdeZ39YHfQZGuvPvIgbmmYmTvh%2FszC4EkTHsDKQBDgfaVQ303gyUWzHOuSqFZ6oDTpVb3Fse0wr7u2wgY6pgGnBD9ZuPEjXjSw8hXnLm72v0RI2bljXJ4WWLUfZNpzplRDBrEraNxdCvLLxsf6OOBRvZNhvZZCM0a7V43o6R%2F1vTBvoZDzJEFuaLpmvxQcpcXbuqNTmNHzMAQZ0A9eK0ufKMEmiuiFH1tdhqTOrF1RA64sAcN7xF8HsgLLt0SOJu1zHIh7vDR6ahkf5vIzsLcAvnCsaOT74CPRxrK29yyCJH8m%2B6r%2F&X-Amz-Signature=4bc992491579ab7f9e5e1777af312bb6a4585e4e9ea7986546a064edf386a781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFPVJTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGoUS1cyeGzAnRPw1yiWcPS%2FsFglABkZPUNj8qePHpjRAiAoWTrPXVe3rHCiIeYHedb9EBD%2BaM5t5X2ETwVODb%2FIFSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxxlgrF0alppe5GcMKtwDjpHl9ckba%2BV2YE4vH0FiPCdeCTDsKyV82pTvlh13jfY56Wn8TTCYbPBDLm7J2sax%2FbyVMnplFLZcXZqa8nZr0klhmeSPgRpKCye1VbGCQu2IeTPv5BtrNBNPSDzpl23AKh3HPe1bnU8lI%2FpJNfIBYpZcx9nxTBkvJN%2Bz5YimgaoY%2FcR9FlUVftf97fT%2FM78f%2FBn7Hv%2BKirEqNYcVWkJbJVZBSlJxmRkhu883l1PGg1AwsAkSdaY4zZ3bizJloGEejzQYn05cGTPc2JMc22f2n%2FkD8GHodp835f4ElNWZxxlMGPxjxNJ4Ta%2Bvzpn2HyhUV9wVuHVKESF3UVDUVbYjvJkXIZC0HNJDoomgQfrpfIJJx7hxz8Kbx8k5%2BFRV1TPYhP13Ha68S6ibxavP17eFDOmPZUCQ0XjaF79bBFlobKmW5wPuRBwowgze7D9GLTGlGIAfihpdY73WRx%2BgkUHVzRHMsR19Rnz3pxmeRmOoviS8E%2Bch7hKy53BXenptEsDqD6Ju9vU2c6XgvG9jnfGSJVBULaHGRLTD%2BMnxbg%2BjAVVu5GovmKbdeZ39YHfQZGuvPvIgbmmYmTvh%2FszC4EkTHsDKQBDgfaVQ303gyUWzHOuSqFZ6oDTpVb3Fse0wr7u2wgY6pgGnBD9ZuPEjXjSw8hXnLm72v0RI2bljXJ4WWLUfZNpzplRDBrEraNxdCvLLxsf6OOBRvZNhvZZCM0a7V43o6R%2F1vTBvoZDzJEFuaLpmvxQcpcXbuqNTmNHzMAQZ0A9eK0ufKMEmiuiFH1tdhqTOrF1RA64sAcN7xF8HsgLLt0SOJu1zHIh7vDR6ahkf5vIzsLcAvnCsaOT74CPRxrK29yyCJH8m%2B6r%2F&X-Amz-Signature=6a89d6ac098913dacd479bff3f77d701af833dfec6875478f763513084833898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFPVJTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGoUS1cyeGzAnRPw1yiWcPS%2FsFglABkZPUNj8qePHpjRAiAoWTrPXVe3rHCiIeYHedb9EBD%2BaM5t5X2ETwVODb%2FIFSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxxlgrF0alppe5GcMKtwDjpHl9ckba%2BV2YE4vH0FiPCdeCTDsKyV82pTvlh13jfY56Wn8TTCYbPBDLm7J2sax%2FbyVMnplFLZcXZqa8nZr0klhmeSPgRpKCye1VbGCQu2IeTPv5BtrNBNPSDzpl23AKh3HPe1bnU8lI%2FpJNfIBYpZcx9nxTBkvJN%2Bz5YimgaoY%2FcR9FlUVftf97fT%2FM78f%2FBn7Hv%2BKirEqNYcVWkJbJVZBSlJxmRkhu883l1PGg1AwsAkSdaY4zZ3bizJloGEejzQYn05cGTPc2JMc22f2n%2FkD8GHodp835f4ElNWZxxlMGPxjxNJ4Ta%2Bvzpn2HyhUV9wVuHVKESF3UVDUVbYjvJkXIZC0HNJDoomgQfrpfIJJx7hxz8Kbx8k5%2BFRV1TPYhP13Ha68S6ibxavP17eFDOmPZUCQ0XjaF79bBFlobKmW5wPuRBwowgze7D9GLTGlGIAfihpdY73WRx%2BgkUHVzRHMsR19Rnz3pxmeRmOoviS8E%2Bch7hKy53BXenptEsDqD6Ju9vU2c6XgvG9jnfGSJVBULaHGRLTD%2BMnxbg%2BjAVVu5GovmKbdeZ39YHfQZGuvPvIgbmmYmTvh%2FszC4EkTHsDKQBDgfaVQ303gyUWzHOuSqFZ6oDTpVb3Fse0wr7u2wgY6pgGnBD9ZuPEjXjSw8hXnLm72v0RI2bljXJ4WWLUfZNpzplRDBrEraNxdCvLLxsf6OOBRvZNhvZZCM0a7V43o6R%2F1vTBvoZDzJEFuaLpmvxQcpcXbuqNTmNHzMAQZ0A9eK0ufKMEmiuiFH1tdhqTOrF1RA64sAcN7xF8HsgLLt0SOJu1zHIh7vDR6ahkf5vIzsLcAvnCsaOT74CPRxrK29yyCJH8m%2B6r%2F&X-Amz-Signature=afdc0eaa5df2650a07f1574ca593709c6fdf760962cd401b6a9862fe24b209dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

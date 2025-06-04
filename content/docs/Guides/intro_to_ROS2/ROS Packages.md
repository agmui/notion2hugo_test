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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCSN6FE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDsqYtA1pGVsVk3zK6wiJSYY9sbt4%2FyOX6LIzk0mSVqtgIhAK%2FCoD3AvyMXHdWxQOiBRufE%2B8Xt294xEk6QD6sJXe6sKv8DCCoQABoMNjM3NDIzMTgzODA1IgwNsPF7DEy2Smy9JDgq3ANWvaKxHaGAGZSNs610sna1kRRklAR98T1VFGQ4CMJEznsSLgFSpfIaQBBIBd6CFJlDUl1OC6aWJQ7S2OoqnamwQwaQ0EBnBW4U6cvtHn4xTfOPMOr%2BmIRsRGIDhRrdmmbdUI7kHUmbgH%2BW%2FMFiVGjNI3SSnlyiX590P18d0KIFXrtXCNcpMGOgYFgLlM2jovzQIL%2BSMCl%2FBf2uxbAJL2i0Cq0KUdgdiEOFYQUwCDks56wcEDtE%2BxJx81mVMmvcMB6jUar4mxz7n6%2BV9JQC5WlJpKtKi4OCtmpRl6sEO7ztZUnltT%2F10szFFbk1H4JzVwVBddiOHjAwH6W59LlH%2FnJKQQlz1CVARtydR6MmXZVj8L5S43vEq4F3%2BsQ8d4TUvygvYR8%2FnC7LCrSbWhui8ryseAJuTe7nR1KrcBHamJOZwAISX%2FSiMziviBnXi8Kgv19tGF8WQ26tFNF67YZjx20Gs37C6v2%2BTPP8lrsKHzqtOMi2rsA1WFD%2Bq8Gb1GSVSnlpKR5P4A8vhkMuJgXmqRgHdEPsp7BMrmZwRmaUzSrr1XKTQwPys56dEmD1v3Coz%2Fh7Wn8aWu1PAubH%2BwUukmAsb0mKFfV7BdxYfjTXtCnGaRMjAqwKlnaQbJnqNTCviYDCBjqkAZPgkcDjoLGqyiLn4Pz3MnFezaWYCzfr3iLWyBRJbei9zZBPb6NaYPd9jVG2E28hXgYDQS8Mhc%2FUr%2BTOfSdsIyKS7DYt%2F298b8rR0QnAvv5bJP3VpweJr%2BMBWfF6hrYx1QTi2yLo25ChKLeD5EOqXsDKrs%2FoQZuNsOOUNz8V8MBoGqrFZOtUvPqFXnBj5R0a%2FQG%2FZVPo6j%2BgbOHmo%2F0Mx%2Bi0esv%2B&X-Amz-Signature=8e099c92785cc39596520f9646af0b15c0730695440ed22eb6ecc1ec0caf7192&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCSN6FE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDsqYtA1pGVsVk3zK6wiJSYY9sbt4%2FyOX6LIzk0mSVqtgIhAK%2FCoD3AvyMXHdWxQOiBRufE%2B8Xt294xEk6QD6sJXe6sKv8DCCoQABoMNjM3NDIzMTgzODA1IgwNsPF7DEy2Smy9JDgq3ANWvaKxHaGAGZSNs610sna1kRRklAR98T1VFGQ4CMJEznsSLgFSpfIaQBBIBd6CFJlDUl1OC6aWJQ7S2OoqnamwQwaQ0EBnBW4U6cvtHn4xTfOPMOr%2BmIRsRGIDhRrdmmbdUI7kHUmbgH%2BW%2FMFiVGjNI3SSnlyiX590P18d0KIFXrtXCNcpMGOgYFgLlM2jovzQIL%2BSMCl%2FBf2uxbAJL2i0Cq0KUdgdiEOFYQUwCDks56wcEDtE%2BxJx81mVMmvcMB6jUar4mxz7n6%2BV9JQC5WlJpKtKi4OCtmpRl6sEO7ztZUnltT%2F10szFFbk1H4JzVwVBddiOHjAwH6W59LlH%2FnJKQQlz1CVARtydR6MmXZVj8L5S43vEq4F3%2BsQ8d4TUvygvYR8%2FnC7LCrSbWhui8ryseAJuTe7nR1KrcBHamJOZwAISX%2FSiMziviBnXi8Kgv19tGF8WQ26tFNF67YZjx20Gs37C6v2%2BTPP8lrsKHzqtOMi2rsA1WFD%2Bq8Gb1GSVSnlpKR5P4A8vhkMuJgXmqRgHdEPsp7BMrmZwRmaUzSrr1XKTQwPys56dEmD1v3Coz%2Fh7Wn8aWu1PAubH%2BwUukmAsb0mKFfV7BdxYfjTXtCnGaRMjAqwKlnaQbJnqNTCviYDCBjqkAZPgkcDjoLGqyiLn4Pz3MnFezaWYCzfr3iLWyBRJbei9zZBPb6NaYPd9jVG2E28hXgYDQS8Mhc%2FUr%2BTOfSdsIyKS7DYt%2F298b8rR0QnAvv5bJP3VpweJr%2BMBWfF6hrYx1QTi2yLo25ChKLeD5EOqXsDKrs%2FoQZuNsOOUNz8V8MBoGqrFZOtUvPqFXnBj5R0a%2FQG%2FZVPo6j%2BgbOHmo%2F0Mx%2Bi0esv%2B&X-Amz-Signature=1befba9fcb74c7abc450f4a066c76359fad5319185f8199cd124976f9147e053&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCSN6FE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDsqYtA1pGVsVk3zK6wiJSYY9sbt4%2FyOX6LIzk0mSVqtgIhAK%2FCoD3AvyMXHdWxQOiBRufE%2B8Xt294xEk6QD6sJXe6sKv8DCCoQABoMNjM3NDIzMTgzODA1IgwNsPF7DEy2Smy9JDgq3ANWvaKxHaGAGZSNs610sna1kRRklAR98T1VFGQ4CMJEznsSLgFSpfIaQBBIBd6CFJlDUl1OC6aWJQ7S2OoqnamwQwaQ0EBnBW4U6cvtHn4xTfOPMOr%2BmIRsRGIDhRrdmmbdUI7kHUmbgH%2BW%2FMFiVGjNI3SSnlyiX590P18d0KIFXrtXCNcpMGOgYFgLlM2jovzQIL%2BSMCl%2FBf2uxbAJL2i0Cq0KUdgdiEOFYQUwCDks56wcEDtE%2BxJx81mVMmvcMB6jUar4mxz7n6%2BV9JQC5WlJpKtKi4OCtmpRl6sEO7ztZUnltT%2F10szFFbk1H4JzVwVBddiOHjAwH6W59LlH%2FnJKQQlz1CVARtydR6MmXZVj8L5S43vEq4F3%2BsQ8d4TUvygvYR8%2FnC7LCrSbWhui8ryseAJuTe7nR1KrcBHamJOZwAISX%2FSiMziviBnXi8Kgv19tGF8WQ26tFNF67YZjx20Gs37C6v2%2BTPP8lrsKHzqtOMi2rsA1WFD%2Bq8Gb1GSVSnlpKR5P4A8vhkMuJgXmqRgHdEPsp7BMrmZwRmaUzSrr1XKTQwPys56dEmD1v3Coz%2Fh7Wn8aWu1PAubH%2BwUukmAsb0mKFfV7BdxYfjTXtCnGaRMjAqwKlnaQbJnqNTCviYDCBjqkAZPgkcDjoLGqyiLn4Pz3MnFezaWYCzfr3iLWyBRJbei9zZBPb6NaYPd9jVG2E28hXgYDQS8Mhc%2FUr%2BTOfSdsIyKS7DYt%2F298b8rR0QnAvv5bJP3VpweJr%2BMBWfF6hrYx1QTi2yLo25ChKLeD5EOqXsDKrs%2FoQZuNsOOUNz8V8MBoGqrFZOtUvPqFXnBj5R0a%2FQG%2FZVPo6j%2BgbOHmo%2F0Mx%2Bi0esv%2B&X-Amz-Signature=7d2b4fe5ba02ee2322629af2fdc4063c69e784016a36173c146b9696158b9682&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCSN6FE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDsqYtA1pGVsVk3zK6wiJSYY9sbt4%2FyOX6LIzk0mSVqtgIhAK%2FCoD3AvyMXHdWxQOiBRufE%2B8Xt294xEk6QD6sJXe6sKv8DCCoQABoMNjM3NDIzMTgzODA1IgwNsPF7DEy2Smy9JDgq3ANWvaKxHaGAGZSNs610sna1kRRklAR98T1VFGQ4CMJEznsSLgFSpfIaQBBIBd6CFJlDUl1OC6aWJQ7S2OoqnamwQwaQ0EBnBW4U6cvtHn4xTfOPMOr%2BmIRsRGIDhRrdmmbdUI7kHUmbgH%2BW%2FMFiVGjNI3SSnlyiX590P18d0KIFXrtXCNcpMGOgYFgLlM2jovzQIL%2BSMCl%2FBf2uxbAJL2i0Cq0KUdgdiEOFYQUwCDks56wcEDtE%2BxJx81mVMmvcMB6jUar4mxz7n6%2BV9JQC5WlJpKtKi4OCtmpRl6sEO7ztZUnltT%2F10szFFbk1H4JzVwVBddiOHjAwH6W59LlH%2FnJKQQlz1CVARtydR6MmXZVj8L5S43vEq4F3%2BsQ8d4TUvygvYR8%2FnC7LCrSbWhui8ryseAJuTe7nR1KrcBHamJOZwAISX%2FSiMziviBnXi8Kgv19tGF8WQ26tFNF67YZjx20Gs37C6v2%2BTPP8lrsKHzqtOMi2rsA1WFD%2Bq8Gb1GSVSnlpKR5P4A8vhkMuJgXmqRgHdEPsp7BMrmZwRmaUzSrr1XKTQwPys56dEmD1v3Coz%2Fh7Wn8aWu1PAubH%2BwUukmAsb0mKFfV7BdxYfjTXtCnGaRMjAqwKlnaQbJnqNTCviYDCBjqkAZPgkcDjoLGqyiLn4Pz3MnFezaWYCzfr3iLWyBRJbei9zZBPb6NaYPd9jVG2E28hXgYDQS8Mhc%2FUr%2BTOfSdsIyKS7DYt%2F298b8rR0QnAvv5bJP3VpweJr%2BMBWfF6hrYx1QTi2yLo25ChKLeD5EOqXsDKrs%2FoQZuNsOOUNz8V8MBoGqrFZOtUvPqFXnBj5R0a%2FQG%2FZVPo6j%2BgbOHmo%2F0Mx%2Bi0esv%2B&X-Amz-Signature=31ce3771b4f429c5035c64387d461515f247db737cd0cde25bbbff51320c2d04&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCSN6FE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDsqYtA1pGVsVk3zK6wiJSYY9sbt4%2FyOX6LIzk0mSVqtgIhAK%2FCoD3AvyMXHdWxQOiBRufE%2B8Xt294xEk6QD6sJXe6sKv8DCCoQABoMNjM3NDIzMTgzODA1IgwNsPF7DEy2Smy9JDgq3ANWvaKxHaGAGZSNs610sna1kRRklAR98T1VFGQ4CMJEznsSLgFSpfIaQBBIBd6CFJlDUl1OC6aWJQ7S2OoqnamwQwaQ0EBnBW4U6cvtHn4xTfOPMOr%2BmIRsRGIDhRrdmmbdUI7kHUmbgH%2BW%2FMFiVGjNI3SSnlyiX590P18d0KIFXrtXCNcpMGOgYFgLlM2jovzQIL%2BSMCl%2FBf2uxbAJL2i0Cq0KUdgdiEOFYQUwCDks56wcEDtE%2BxJx81mVMmvcMB6jUar4mxz7n6%2BV9JQC5WlJpKtKi4OCtmpRl6sEO7ztZUnltT%2F10szFFbk1H4JzVwVBddiOHjAwH6W59LlH%2FnJKQQlz1CVARtydR6MmXZVj8L5S43vEq4F3%2BsQ8d4TUvygvYR8%2FnC7LCrSbWhui8ryseAJuTe7nR1KrcBHamJOZwAISX%2FSiMziviBnXi8Kgv19tGF8WQ26tFNF67YZjx20Gs37C6v2%2BTPP8lrsKHzqtOMi2rsA1WFD%2Bq8Gb1GSVSnlpKR5P4A8vhkMuJgXmqRgHdEPsp7BMrmZwRmaUzSrr1XKTQwPys56dEmD1v3Coz%2Fh7Wn8aWu1PAubH%2BwUukmAsb0mKFfV7BdxYfjTXtCnGaRMjAqwKlnaQbJnqNTCviYDCBjqkAZPgkcDjoLGqyiLn4Pz3MnFezaWYCzfr3iLWyBRJbei9zZBPb6NaYPd9jVG2E28hXgYDQS8Mhc%2FUr%2BTOfSdsIyKS7DYt%2F298b8rR0QnAvv5bJP3VpweJr%2BMBWfF6hrYx1QTi2yLo25ChKLeD5EOqXsDKrs%2FoQZuNsOOUNz8V8MBoGqrFZOtUvPqFXnBj5R0a%2FQG%2FZVPo6j%2BgbOHmo%2F0Mx%2Bi0esv%2B&X-Amz-Signature=71256d1af97242e95a72f9aa31958b69b17eeb7227812352e478acaf3a94b682&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCSN6FE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDsqYtA1pGVsVk3zK6wiJSYY9sbt4%2FyOX6LIzk0mSVqtgIhAK%2FCoD3AvyMXHdWxQOiBRufE%2B8Xt294xEk6QD6sJXe6sKv8DCCoQABoMNjM3NDIzMTgzODA1IgwNsPF7DEy2Smy9JDgq3ANWvaKxHaGAGZSNs610sna1kRRklAR98T1VFGQ4CMJEznsSLgFSpfIaQBBIBd6CFJlDUl1OC6aWJQ7S2OoqnamwQwaQ0EBnBW4U6cvtHn4xTfOPMOr%2BmIRsRGIDhRrdmmbdUI7kHUmbgH%2BW%2FMFiVGjNI3SSnlyiX590P18d0KIFXrtXCNcpMGOgYFgLlM2jovzQIL%2BSMCl%2FBf2uxbAJL2i0Cq0KUdgdiEOFYQUwCDks56wcEDtE%2BxJx81mVMmvcMB6jUar4mxz7n6%2BV9JQC5WlJpKtKi4OCtmpRl6sEO7ztZUnltT%2F10szFFbk1H4JzVwVBddiOHjAwH6W59LlH%2FnJKQQlz1CVARtydR6MmXZVj8L5S43vEq4F3%2BsQ8d4TUvygvYR8%2FnC7LCrSbWhui8ryseAJuTe7nR1KrcBHamJOZwAISX%2FSiMziviBnXi8Kgv19tGF8WQ26tFNF67YZjx20Gs37C6v2%2BTPP8lrsKHzqtOMi2rsA1WFD%2Bq8Gb1GSVSnlpKR5P4A8vhkMuJgXmqRgHdEPsp7BMrmZwRmaUzSrr1XKTQwPys56dEmD1v3Coz%2Fh7Wn8aWu1PAubH%2BwUukmAsb0mKFfV7BdxYfjTXtCnGaRMjAqwKlnaQbJnqNTCviYDCBjqkAZPgkcDjoLGqyiLn4Pz3MnFezaWYCzfr3iLWyBRJbei9zZBPb6NaYPd9jVG2E28hXgYDQS8Mhc%2FUr%2BTOfSdsIyKS7DYt%2F298b8rR0QnAvv5bJP3VpweJr%2BMBWfF6hrYx1QTi2yLo25ChKLeD5EOqXsDKrs%2FoQZuNsOOUNz8V8MBoGqrFZOtUvPqFXnBj5R0a%2FQG%2FZVPo6j%2BgbOHmo%2F0Mx%2Bi0esv%2B&X-Amz-Signature=59c1a55ff843377f16c6b869309bfe99f81843090191f9f7d29044222db1f31c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCSN6FE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDsqYtA1pGVsVk3zK6wiJSYY9sbt4%2FyOX6LIzk0mSVqtgIhAK%2FCoD3AvyMXHdWxQOiBRufE%2B8Xt294xEk6QD6sJXe6sKv8DCCoQABoMNjM3NDIzMTgzODA1IgwNsPF7DEy2Smy9JDgq3ANWvaKxHaGAGZSNs610sna1kRRklAR98T1VFGQ4CMJEznsSLgFSpfIaQBBIBd6CFJlDUl1OC6aWJQ7S2OoqnamwQwaQ0EBnBW4U6cvtHn4xTfOPMOr%2BmIRsRGIDhRrdmmbdUI7kHUmbgH%2BW%2FMFiVGjNI3SSnlyiX590P18d0KIFXrtXCNcpMGOgYFgLlM2jovzQIL%2BSMCl%2FBf2uxbAJL2i0Cq0KUdgdiEOFYQUwCDks56wcEDtE%2BxJx81mVMmvcMB6jUar4mxz7n6%2BV9JQC5WlJpKtKi4OCtmpRl6sEO7ztZUnltT%2F10szFFbk1H4JzVwVBddiOHjAwH6W59LlH%2FnJKQQlz1CVARtydR6MmXZVj8L5S43vEq4F3%2BsQ8d4TUvygvYR8%2FnC7LCrSbWhui8ryseAJuTe7nR1KrcBHamJOZwAISX%2FSiMziviBnXi8Kgv19tGF8WQ26tFNF67YZjx20Gs37C6v2%2BTPP8lrsKHzqtOMi2rsA1WFD%2Bq8Gb1GSVSnlpKR5P4A8vhkMuJgXmqRgHdEPsp7BMrmZwRmaUzSrr1XKTQwPys56dEmD1v3Coz%2Fh7Wn8aWu1PAubH%2BwUukmAsb0mKFfV7BdxYfjTXtCnGaRMjAqwKlnaQbJnqNTCviYDCBjqkAZPgkcDjoLGqyiLn4Pz3MnFezaWYCzfr3iLWyBRJbei9zZBPb6NaYPd9jVG2E28hXgYDQS8Mhc%2FUr%2BTOfSdsIyKS7DYt%2F298b8rR0QnAvv5bJP3VpweJr%2BMBWfF6hrYx1QTi2yLo25ChKLeD5EOqXsDKrs%2FoQZuNsOOUNz8V8MBoGqrFZOtUvPqFXnBj5R0a%2FQG%2FZVPo6j%2BgbOHmo%2F0Mx%2Bi0esv%2B&X-Amz-Signature=df618ddbf850ba483fa19ce86da2f1c0969ff24f9989803373390565704e9256&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

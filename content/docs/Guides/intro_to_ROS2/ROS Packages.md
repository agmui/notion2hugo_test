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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRG7JZC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7mZ8FypphQUkFDFtUEhZqXxZTZbr4g3w1ybLCXvr6pAiAih8DzLVQLBz%2BG9Q%2BmprjuqIFogbC00FnnxXIyN4LdQyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Y%2Bza%2FRpZAxig6JaKtwDjKRBrOXoIvn3Ofq2hYlg6qZSy5YmPFfXKMC7sXuPRL71embrVb1ILAb6zPnajWAUDTN0aBJgoHS0ayQZJb2v2D8MlLoWtsqgf%2FA9yH1qcigpH%2BLGePU9YE2Jg2yL6T2lWQNjeEUwpVOvf1%2FPjnbjrFkEeX9xQu01VuahBM17TJ3yxY19pEBopy1nkKIErdZLuij9fQxV4RWl%2Bh5LabMTZSoksCY3jT%2F%2FW2qgjDFfpk5EybfbNrV6hALGT6hvxBiX9Bd%2FC5fcq0yg9ZGVosIghDa1TP0RtrO5UAOP6Mwi4dfxfSCjOV2Zqr38Pfhwsvc1Vy8ZGJlKO1D8S5EMAR6jfOwA3G54BMO6ujVMJ6Gx42aTTJZoImdhsAiki4eSSfZ8CK5N4ql0eOH7ydxMlQmLtywRLyBTcyutMXEHoSGCO86bYX4GTxCh21lfDV2tMwRS7odIzyKdqxhqxGMdfbnjITlltYXBYFpg%2BY64hVGvO3HKIcTtQoE%2BAJK9SvZSRQCCFRXai2ZnrO6CgtenEvIa%2FsxY24PcQ3wQVZdXs6%2BegneHZe4J9IuadU9DWcpcSazVF69sTySejJrA2lMhD%2FTtEG8h9ACqslIYwZ%2FRlCf1W5EkDF8DF0sjV0dYPu8w4fbyvAY6pgH%2BvM0St3knS9FFJMAiyhaCW2Lx0Vd6sjvT1xG7cWBDbPse1LrvudJyB0cFcXIiNdBVHqHDiMYFVSd8gFvwWJnUIr0vX3w5nXOwQ1qvO5Ffsdw3a6FT%2FXX51kgRW6DRKPV5OTPfDOBQ1iwitfU37%2FaRqicqfdWV3cmXtO1lC8DzWW5v0VzD0I1Ockid7M6gP57FKp9qfa18%2FzkWyQj8g8XLgJoo9sOP&X-Amz-Signature=f5e041a76873a67912e6219eb38a945f31cb09c8d73f788976c2f19ac7688b48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRG7JZC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7mZ8FypphQUkFDFtUEhZqXxZTZbr4g3w1ybLCXvr6pAiAih8DzLVQLBz%2BG9Q%2BmprjuqIFogbC00FnnxXIyN4LdQyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Y%2Bza%2FRpZAxig6JaKtwDjKRBrOXoIvn3Ofq2hYlg6qZSy5YmPFfXKMC7sXuPRL71embrVb1ILAb6zPnajWAUDTN0aBJgoHS0ayQZJb2v2D8MlLoWtsqgf%2FA9yH1qcigpH%2BLGePU9YE2Jg2yL6T2lWQNjeEUwpVOvf1%2FPjnbjrFkEeX9xQu01VuahBM17TJ3yxY19pEBopy1nkKIErdZLuij9fQxV4RWl%2Bh5LabMTZSoksCY3jT%2F%2FW2qgjDFfpk5EybfbNrV6hALGT6hvxBiX9Bd%2FC5fcq0yg9ZGVosIghDa1TP0RtrO5UAOP6Mwi4dfxfSCjOV2Zqr38Pfhwsvc1Vy8ZGJlKO1D8S5EMAR6jfOwA3G54BMO6ujVMJ6Gx42aTTJZoImdhsAiki4eSSfZ8CK5N4ql0eOH7ydxMlQmLtywRLyBTcyutMXEHoSGCO86bYX4GTxCh21lfDV2tMwRS7odIzyKdqxhqxGMdfbnjITlltYXBYFpg%2BY64hVGvO3HKIcTtQoE%2BAJK9SvZSRQCCFRXai2ZnrO6CgtenEvIa%2FsxY24PcQ3wQVZdXs6%2BegneHZe4J9IuadU9DWcpcSazVF69sTySejJrA2lMhD%2FTtEG8h9ACqslIYwZ%2FRlCf1W5EkDF8DF0sjV0dYPu8w4fbyvAY6pgH%2BvM0St3knS9FFJMAiyhaCW2Lx0Vd6sjvT1xG7cWBDbPse1LrvudJyB0cFcXIiNdBVHqHDiMYFVSd8gFvwWJnUIr0vX3w5nXOwQ1qvO5Ffsdw3a6FT%2FXX51kgRW6DRKPV5OTPfDOBQ1iwitfU37%2FaRqicqfdWV3cmXtO1lC8DzWW5v0VzD0I1Ockid7M6gP57FKp9qfa18%2FzkWyQj8g8XLgJoo9sOP&X-Amz-Signature=33a32e54cf3135c1e011367f9fbbf86dab1a7367161d751b00b92332412e6faf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRG7JZC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7mZ8FypphQUkFDFtUEhZqXxZTZbr4g3w1ybLCXvr6pAiAih8DzLVQLBz%2BG9Q%2BmprjuqIFogbC00FnnxXIyN4LdQyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Y%2Bza%2FRpZAxig6JaKtwDjKRBrOXoIvn3Ofq2hYlg6qZSy5YmPFfXKMC7sXuPRL71embrVb1ILAb6zPnajWAUDTN0aBJgoHS0ayQZJb2v2D8MlLoWtsqgf%2FA9yH1qcigpH%2BLGePU9YE2Jg2yL6T2lWQNjeEUwpVOvf1%2FPjnbjrFkEeX9xQu01VuahBM17TJ3yxY19pEBopy1nkKIErdZLuij9fQxV4RWl%2Bh5LabMTZSoksCY3jT%2F%2FW2qgjDFfpk5EybfbNrV6hALGT6hvxBiX9Bd%2FC5fcq0yg9ZGVosIghDa1TP0RtrO5UAOP6Mwi4dfxfSCjOV2Zqr38Pfhwsvc1Vy8ZGJlKO1D8S5EMAR6jfOwA3G54BMO6ujVMJ6Gx42aTTJZoImdhsAiki4eSSfZ8CK5N4ql0eOH7ydxMlQmLtywRLyBTcyutMXEHoSGCO86bYX4GTxCh21lfDV2tMwRS7odIzyKdqxhqxGMdfbnjITlltYXBYFpg%2BY64hVGvO3HKIcTtQoE%2BAJK9SvZSRQCCFRXai2ZnrO6CgtenEvIa%2FsxY24PcQ3wQVZdXs6%2BegneHZe4J9IuadU9DWcpcSazVF69sTySejJrA2lMhD%2FTtEG8h9ACqslIYwZ%2FRlCf1W5EkDF8DF0sjV0dYPu8w4fbyvAY6pgH%2BvM0St3knS9FFJMAiyhaCW2Lx0Vd6sjvT1xG7cWBDbPse1LrvudJyB0cFcXIiNdBVHqHDiMYFVSd8gFvwWJnUIr0vX3w5nXOwQ1qvO5Ffsdw3a6FT%2FXX51kgRW6DRKPV5OTPfDOBQ1iwitfU37%2FaRqicqfdWV3cmXtO1lC8DzWW5v0VzD0I1Ockid7M6gP57FKp9qfa18%2FzkWyQj8g8XLgJoo9sOP&X-Amz-Signature=ebb820922a063e082c7ef1c4b7880185820f2fc8a9b8c1d91f503c298d17a737&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRG7JZC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7mZ8FypphQUkFDFtUEhZqXxZTZbr4g3w1ybLCXvr6pAiAih8DzLVQLBz%2BG9Q%2BmprjuqIFogbC00FnnxXIyN4LdQyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Y%2Bza%2FRpZAxig6JaKtwDjKRBrOXoIvn3Ofq2hYlg6qZSy5YmPFfXKMC7sXuPRL71embrVb1ILAb6zPnajWAUDTN0aBJgoHS0ayQZJb2v2D8MlLoWtsqgf%2FA9yH1qcigpH%2BLGePU9YE2Jg2yL6T2lWQNjeEUwpVOvf1%2FPjnbjrFkEeX9xQu01VuahBM17TJ3yxY19pEBopy1nkKIErdZLuij9fQxV4RWl%2Bh5LabMTZSoksCY3jT%2F%2FW2qgjDFfpk5EybfbNrV6hALGT6hvxBiX9Bd%2FC5fcq0yg9ZGVosIghDa1TP0RtrO5UAOP6Mwi4dfxfSCjOV2Zqr38Pfhwsvc1Vy8ZGJlKO1D8S5EMAR6jfOwA3G54BMO6ujVMJ6Gx42aTTJZoImdhsAiki4eSSfZ8CK5N4ql0eOH7ydxMlQmLtywRLyBTcyutMXEHoSGCO86bYX4GTxCh21lfDV2tMwRS7odIzyKdqxhqxGMdfbnjITlltYXBYFpg%2BY64hVGvO3HKIcTtQoE%2BAJK9SvZSRQCCFRXai2ZnrO6CgtenEvIa%2FsxY24PcQ3wQVZdXs6%2BegneHZe4J9IuadU9DWcpcSazVF69sTySejJrA2lMhD%2FTtEG8h9ACqslIYwZ%2FRlCf1W5EkDF8DF0sjV0dYPu8w4fbyvAY6pgH%2BvM0St3knS9FFJMAiyhaCW2Lx0Vd6sjvT1xG7cWBDbPse1LrvudJyB0cFcXIiNdBVHqHDiMYFVSd8gFvwWJnUIr0vX3w5nXOwQ1qvO5Ffsdw3a6FT%2FXX51kgRW6DRKPV5OTPfDOBQ1iwitfU37%2FaRqicqfdWV3cmXtO1lC8DzWW5v0VzD0I1Ockid7M6gP57FKp9qfa18%2FzkWyQj8g8XLgJoo9sOP&X-Amz-Signature=5e05d9b6574328d17e31e073c5de5385b2d2444793ec0c5da7aa5dd91269360c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRG7JZC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7mZ8FypphQUkFDFtUEhZqXxZTZbr4g3w1ybLCXvr6pAiAih8DzLVQLBz%2BG9Q%2BmprjuqIFogbC00FnnxXIyN4LdQyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Y%2Bza%2FRpZAxig6JaKtwDjKRBrOXoIvn3Ofq2hYlg6qZSy5YmPFfXKMC7sXuPRL71embrVb1ILAb6zPnajWAUDTN0aBJgoHS0ayQZJb2v2D8MlLoWtsqgf%2FA9yH1qcigpH%2BLGePU9YE2Jg2yL6T2lWQNjeEUwpVOvf1%2FPjnbjrFkEeX9xQu01VuahBM17TJ3yxY19pEBopy1nkKIErdZLuij9fQxV4RWl%2Bh5LabMTZSoksCY3jT%2F%2FW2qgjDFfpk5EybfbNrV6hALGT6hvxBiX9Bd%2FC5fcq0yg9ZGVosIghDa1TP0RtrO5UAOP6Mwi4dfxfSCjOV2Zqr38Pfhwsvc1Vy8ZGJlKO1D8S5EMAR6jfOwA3G54BMO6ujVMJ6Gx42aTTJZoImdhsAiki4eSSfZ8CK5N4ql0eOH7ydxMlQmLtywRLyBTcyutMXEHoSGCO86bYX4GTxCh21lfDV2tMwRS7odIzyKdqxhqxGMdfbnjITlltYXBYFpg%2BY64hVGvO3HKIcTtQoE%2BAJK9SvZSRQCCFRXai2ZnrO6CgtenEvIa%2FsxY24PcQ3wQVZdXs6%2BegneHZe4J9IuadU9DWcpcSazVF69sTySejJrA2lMhD%2FTtEG8h9ACqslIYwZ%2FRlCf1W5EkDF8DF0sjV0dYPu8w4fbyvAY6pgH%2BvM0St3knS9FFJMAiyhaCW2Lx0Vd6sjvT1xG7cWBDbPse1LrvudJyB0cFcXIiNdBVHqHDiMYFVSd8gFvwWJnUIr0vX3w5nXOwQ1qvO5Ffsdw3a6FT%2FXX51kgRW6DRKPV5OTPfDOBQ1iwitfU37%2FaRqicqfdWV3cmXtO1lC8DzWW5v0VzD0I1Ockid7M6gP57FKp9qfa18%2FzkWyQj8g8XLgJoo9sOP&X-Amz-Signature=acc3336c7bbf9a5d83b6d09d70a7682908d9f9632be8df296d36f8451cf7a10d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRG7JZC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7mZ8FypphQUkFDFtUEhZqXxZTZbr4g3w1ybLCXvr6pAiAih8DzLVQLBz%2BG9Q%2BmprjuqIFogbC00FnnxXIyN4LdQyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Y%2Bza%2FRpZAxig6JaKtwDjKRBrOXoIvn3Ofq2hYlg6qZSy5YmPFfXKMC7sXuPRL71embrVb1ILAb6zPnajWAUDTN0aBJgoHS0ayQZJb2v2D8MlLoWtsqgf%2FA9yH1qcigpH%2BLGePU9YE2Jg2yL6T2lWQNjeEUwpVOvf1%2FPjnbjrFkEeX9xQu01VuahBM17TJ3yxY19pEBopy1nkKIErdZLuij9fQxV4RWl%2Bh5LabMTZSoksCY3jT%2F%2FW2qgjDFfpk5EybfbNrV6hALGT6hvxBiX9Bd%2FC5fcq0yg9ZGVosIghDa1TP0RtrO5UAOP6Mwi4dfxfSCjOV2Zqr38Pfhwsvc1Vy8ZGJlKO1D8S5EMAR6jfOwA3G54BMO6ujVMJ6Gx42aTTJZoImdhsAiki4eSSfZ8CK5N4ql0eOH7ydxMlQmLtywRLyBTcyutMXEHoSGCO86bYX4GTxCh21lfDV2tMwRS7odIzyKdqxhqxGMdfbnjITlltYXBYFpg%2BY64hVGvO3HKIcTtQoE%2BAJK9SvZSRQCCFRXai2ZnrO6CgtenEvIa%2FsxY24PcQ3wQVZdXs6%2BegneHZe4J9IuadU9DWcpcSazVF69sTySejJrA2lMhD%2FTtEG8h9ACqslIYwZ%2FRlCf1W5EkDF8DF0sjV0dYPu8w4fbyvAY6pgH%2BvM0St3knS9FFJMAiyhaCW2Lx0Vd6sjvT1xG7cWBDbPse1LrvudJyB0cFcXIiNdBVHqHDiMYFVSd8gFvwWJnUIr0vX3w5nXOwQ1qvO5Ffsdw3a6FT%2FXX51kgRW6DRKPV5OTPfDOBQ1iwitfU37%2FaRqicqfdWV3cmXtO1lC8DzWW5v0VzD0I1Ockid7M6gP57FKp9qfa18%2FzkWyQj8g8XLgJoo9sOP&X-Amz-Signature=38b56235b0cfd2c4369243664f56f13d2b74486cb2d614932e0c5f0aa8477661&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRG7JZC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7mZ8FypphQUkFDFtUEhZqXxZTZbr4g3w1ybLCXvr6pAiAih8DzLVQLBz%2BG9Q%2BmprjuqIFogbC00FnnxXIyN4LdQyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Y%2Bza%2FRpZAxig6JaKtwDjKRBrOXoIvn3Ofq2hYlg6qZSy5YmPFfXKMC7sXuPRL71embrVb1ILAb6zPnajWAUDTN0aBJgoHS0ayQZJb2v2D8MlLoWtsqgf%2FA9yH1qcigpH%2BLGePU9YE2Jg2yL6T2lWQNjeEUwpVOvf1%2FPjnbjrFkEeX9xQu01VuahBM17TJ3yxY19pEBopy1nkKIErdZLuij9fQxV4RWl%2Bh5LabMTZSoksCY3jT%2F%2FW2qgjDFfpk5EybfbNrV6hALGT6hvxBiX9Bd%2FC5fcq0yg9ZGVosIghDa1TP0RtrO5UAOP6Mwi4dfxfSCjOV2Zqr38Pfhwsvc1Vy8ZGJlKO1D8S5EMAR6jfOwA3G54BMO6ujVMJ6Gx42aTTJZoImdhsAiki4eSSfZ8CK5N4ql0eOH7ydxMlQmLtywRLyBTcyutMXEHoSGCO86bYX4GTxCh21lfDV2tMwRS7odIzyKdqxhqxGMdfbnjITlltYXBYFpg%2BY64hVGvO3HKIcTtQoE%2BAJK9SvZSRQCCFRXai2ZnrO6CgtenEvIa%2FsxY24PcQ3wQVZdXs6%2BegneHZe4J9IuadU9DWcpcSazVF69sTySejJrA2lMhD%2FTtEG8h9ACqslIYwZ%2FRlCf1W5EkDF8DF0sjV0dYPu8w4fbyvAY6pgH%2BvM0St3knS9FFJMAiyhaCW2Lx0Vd6sjvT1xG7cWBDbPse1LrvudJyB0cFcXIiNdBVHqHDiMYFVSd8gFvwWJnUIr0vX3w5nXOwQ1qvO5Ffsdw3a6FT%2FXX51kgRW6DRKPV5OTPfDOBQ1iwitfU37%2FaRqicqfdWV3cmXtO1lC8DzWW5v0VzD0I1Ockid7M6gP57FKp9qfa18%2FzkWyQj8g8XLgJoo9sOP&X-Amz-Signature=881782b5bc89bf36a7d1a0650c8c2a094180d5d34fb75e95e8b68bdf536dc085&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

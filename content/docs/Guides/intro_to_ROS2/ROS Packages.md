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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSSOY6H%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcq0Nm6wRofDd27eVfcbt5HkaVJVd0xk%2FPVvKlEw1FgIhANVx4H7jfImAA%2FzLMKvTwFBE2uBOLzAm4ExegX%2B7PLa7Kv8DCBoQABoMNjM3NDIzMTgzODA1IgwskLNRCYIblDBNDnAq3AMpbUq%2FKgDu6wy3zemiMsdaP1Eme7OvbPg7IHIElT63BSOdnrI%2F11rGW4dpUIyLHC%2Fjuw7A2H1CPBOn%2F%2F803f0ZBHnjsP2%2FSiZ3etQGeZazKmxcJlUeNRWDlSMBwKVYlSq%2BSC2SN5ufweKWFJn1XI1CKW12L7JUaFK8%2BOa%2F%2B1HTzx%2FFSMGKU2sR77ywfIKcsPS5hTaRsjqGA6%2BB%2FPfiIBNPAWwLX%2FhbgaPjSWItMQaOVYjyOFIfuFGs9bI1SjS8RSpbCln1UnYFby4wtBbdHCsdPUQ1JMT0OJXMtcIPoVzMAcS1Nebmkbs68aD9HoqaEu33KbKiUJnr8clIU7qMdLEPH2dIdzO9Jt0xq9WGR4sy5X7WiJCk69%2Br8Kn%2BC%2FFY5b2CvFjETLWG4wyiheJQiXcjqlxRxUMN42JDgG5BDg7aWWm7KBgPXxELar2QyBzQVl4syGiQf1A9ehVTyMQUeFLR%2Bk%2BPHC0SBqN1weDGLkM2OdHnwmOR4hkPJqHI3%2Fbk5r32BaaxXpWmd3sspUDE2a6g3KHZfTNP%2F0QMUGh0iuV0ybvAzPy%2BardaLKnaBidqkYlimOgEtXMSlZTGsU%2FW1M5OQJ48MzQyrE7NG0Ma5If6DSAyTWO7I6itsVjewjDvg6K%2BBjqkARr70WvNRET52Y08mivELsgIagLmWpTK3NUCCwPIZ%2BYb5%2Fgf9wM6Cll1kIauqpKDYja%2BsdSzf6WHM9Rw3ilVai359%2FkJgRH0MJCBgB55boSYlXb%2F3nkg%2BkQFMHUrbH1rcCUi1FoSIMsciwEUXMg0qubQQV2M9ZNG5wEObAYFDdv%2FsDcn%2BdBEh0fVz3HT2vQsajcm49dTP21kTiL80nS1EG4IRYqv&X-Amz-Signature=9c42f5da460b9b210264b648905a86b0460fe6987d40ebbf67ba6efecb1373af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSSOY6H%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcq0Nm6wRofDd27eVfcbt5HkaVJVd0xk%2FPVvKlEw1FgIhANVx4H7jfImAA%2FzLMKvTwFBE2uBOLzAm4ExegX%2B7PLa7Kv8DCBoQABoMNjM3NDIzMTgzODA1IgwskLNRCYIblDBNDnAq3AMpbUq%2FKgDu6wy3zemiMsdaP1Eme7OvbPg7IHIElT63BSOdnrI%2F11rGW4dpUIyLHC%2Fjuw7A2H1CPBOn%2F%2F803f0ZBHnjsP2%2FSiZ3etQGeZazKmxcJlUeNRWDlSMBwKVYlSq%2BSC2SN5ufweKWFJn1XI1CKW12L7JUaFK8%2BOa%2F%2B1HTzx%2FFSMGKU2sR77ywfIKcsPS5hTaRsjqGA6%2BB%2FPfiIBNPAWwLX%2FhbgaPjSWItMQaOVYjyOFIfuFGs9bI1SjS8RSpbCln1UnYFby4wtBbdHCsdPUQ1JMT0OJXMtcIPoVzMAcS1Nebmkbs68aD9HoqaEu33KbKiUJnr8clIU7qMdLEPH2dIdzO9Jt0xq9WGR4sy5X7WiJCk69%2Br8Kn%2BC%2FFY5b2CvFjETLWG4wyiheJQiXcjqlxRxUMN42JDgG5BDg7aWWm7KBgPXxELar2QyBzQVl4syGiQf1A9ehVTyMQUeFLR%2Bk%2BPHC0SBqN1weDGLkM2OdHnwmOR4hkPJqHI3%2Fbk5r32BaaxXpWmd3sspUDE2a6g3KHZfTNP%2F0QMUGh0iuV0ybvAzPy%2BardaLKnaBidqkYlimOgEtXMSlZTGsU%2FW1M5OQJ48MzQyrE7NG0Ma5If6DSAyTWO7I6itsVjewjDvg6K%2BBjqkARr70WvNRET52Y08mivELsgIagLmWpTK3NUCCwPIZ%2BYb5%2Fgf9wM6Cll1kIauqpKDYja%2BsdSzf6WHM9Rw3ilVai359%2FkJgRH0MJCBgB55boSYlXb%2F3nkg%2BkQFMHUrbH1rcCUi1FoSIMsciwEUXMg0qubQQV2M9ZNG5wEObAYFDdv%2FsDcn%2BdBEh0fVz3HT2vQsajcm49dTP21kTiL80nS1EG4IRYqv&X-Amz-Signature=f4ed3e3f0076b748ddf12c4d826ad81821f7a3767b9acd9a7417339a24133f62&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSSOY6H%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcq0Nm6wRofDd27eVfcbt5HkaVJVd0xk%2FPVvKlEw1FgIhANVx4H7jfImAA%2FzLMKvTwFBE2uBOLzAm4ExegX%2B7PLa7Kv8DCBoQABoMNjM3NDIzMTgzODA1IgwskLNRCYIblDBNDnAq3AMpbUq%2FKgDu6wy3zemiMsdaP1Eme7OvbPg7IHIElT63BSOdnrI%2F11rGW4dpUIyLHC%2Fjuw7A2H1CPBOn%2F%2F803f0ZBHnjsP2%2FSiZ3etQGeZazKmxcJlUeNRWDlSMBwKVYlSq%2BSC2SN5ufweKWFJn1XI1CKW12L7JUaFK8%2BOa%2F%2B1HTzx%2FFSMGKU2sR77ywfIKcsPS5hTaRsjqGA6%2BB%2FPfiIBNPAWwLX%2FhbgaPjSWItMQaOVYjyOFIfuFGs9bI1SjS8RSpbCln1UnYFby4wtBbdHCsdPUQ1JMT0OJXMtcIPoVzMAcS1Nebmkbs68aD9HoqaEu33KbKiUJnr8clIU7qMdLEPH2dIdzO9Jt0xq9WGR4sy5X7WiJCk69%2Br8Kn%2BC%2FFY5b2CvFjETLWG4wyiheJQiXcjqlxRxUMN42JDgG5BDg7aWWm7KBgPXxELar2QyBzQVl4syGiQf1A9ehVTyMQUeFLR%2Bk%2BPHC0SBqN1weDGLkM2OdHnwmOR4hkPJqHI3%2Fbk5r32BaaxXpWmd3sspUDE2a6g3KHZfTNP%2F0QMUGh0iuV0ybvAzPy%2BardaLKnaBidqkYlimOgEtXMSlZTGsU%2FW1M5OQJ48MzQyrE7NG0Ma5If6DSAyTWO7I6itsVjewjDvg6K%2BBjqkARr70WvNRET52Y08mivELsgIagLmWpTK3NUCCwPIZ%2BYb5%2Fgf9wM6Cll1kIauqpKDYja%2BsdSzf6WHM9Rw3ilVai359%2FkJgRH0MJCBgB55boSYlXb%2F3nkg%2BkQFMHUrbH1rcCUi1FoSIMsciwEUXMg0qubQQV2M9ZNG5wEObAYFDdv%2FsDcn%2BdBEh0fVz3HT2vQsajcm49dTP21kTiL80nS1EG4IRYqv&X-Amz-Signature=7dfac8af5813e2f8fca1d4b3ad1633cd96c0cc389eb3d91fa53b632be76f4bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSSOY6H%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcq0Nm6wRofDd27eVfcbt5HkaVJVd0xk%2FPVvKlEw1FgIhANVx4H7jfImAA%2FzLMKvTwFBE2uBOLzAm4ExegX%2B7PLa7Kv8DCBoQABoMNjM3NDIzMTgzODA1IgwskLNRCYIblDBNDnAq3AMpbUq%2FKgDu6wy3zemiMsdaP1Eme7OvbPg7IHIElT63BSOdnrI%2F11rGW4dpUIyLHC%2Fjuw7A2H1CPBOn%2F%2F803f0ZBHnjsP2%2FSiZ3etQGeZazKmxcJlUeNRWDlSMBwKVYlSq%2BSC2SN5ufweKWFJn1XI1CKW12L7JUaFK8%2BOa%2F%2B1HTzx%2FFSMGKU2sR77ywfIKcsPS5hTaRsjqGA6%2BB%2FPfiIBNPAWwLX%2FhbgaPjSWItMQaOVYjyOFIfuFGs9bI1SjS8RSpbCln1UnYFby4wtBbdHCsdPUQ1JMT0OJXMtcIPoVzMAcS1Nebmkbs68aD9HoqaEu33KbKiUJnr8clIU7qMdLEPH2dIdzO9Jt0xq9WGR4sy5X7WiJCk69%2Br8Kn%2BC%2FFY5b2CvFjETLWG4wyiheJQiXcjqlxRxUMN42JDgG5BDg7aWWm7KBgPXxELar2QyBzQVl4syGiQf1A9ehVTyMQUeFLR%2Bk%2BPHC0SBqN1weDGLkM2OdHnwmOR4hkPJqHI3%2Fbk5r32BaaxXpWmd3sspUDE2a6g3KHZfTNP%2F0QMUGh0iuV0ybvAzPy%2BardaLKnaBidqkYlimOgEtXMSlZTGsU%2FW1M5OQJ48MzQyrE7NG0Ma5If6DSAyTWO7I6itsVjewjDvg6K%2BBjqkARr70WvNRET52Y08mivELsgIagLmWpTK3NUCCwPIZ%2BYb5%2Fgf9wM6Cll1kIauqpKDYja%2BsdSzf6WHM9Rw3ilVai359%2FkJgRH0MJCBgB55boSYlXb%2F3nkg%2BkQFMHUrbH1rcCUi1FoSIMsciwEUXMg0qubQQV2M9ZNG5wEObAYFDdv%2FsDcn%2BdBEh0fVz3HT2vQsajcm49dTP21kTiL80nS1EG4IRYqv&X-Amz-Signature=9cfbfa54e903d42dd5d62a7d9401b81d02af5cdcb3a3a827b97e58a4418acb26&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSSOY6H%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcq0Nm6wRofDd27eVfcbt5HkaVJVd0xk%2FPVvKlEw1FgIhANVx4H7jfImAA%2FzLMKvTwFBE2uBOLzAm4ExegX%2B7PLa7Kv8DCBoQABoMNjM3NDIzMTgzODA1IgwskLNRCYIblDBNDnAq3AMpbUq%2FKgDu6wy3zemiMsdaP1Eme7OvbPg7IHIElT63BSOdnrI%2F11rGW4dpUIyLHC%2Fjuw7A2H1CPBOn%2F%2F803f0ZBHnjsP2%2FSiZ3etQGeZazKmxcJlUeNRWDlSMBwKVYlSq%2BSC2SN5ufweKWFJn1XI1CKW12L7JUaFK8%2BOa%2F%2B1HTzx%2FFSMGKU2sR77ywfIKcsPS5hTaRsjqGA6%2BB%2FPfiIBNPAWwLX%2FhbgaPjSWItMQaOVYjyOFIfuFGs9bI1SjS8RSpbCln1UnYFby4wtBbdHCsdPUQ1JMT0OJXMtcIPoVzMAcS1Nebmkbs68aD9HoqaEu33KbKiUJnr8clIU7qMdLEPH2dIdzO9Jt0xq9WGR4sy5X7WiJCk69%2Br8Kn%2BC%2FFY5b2CvFjETLWG4wyiheJQiXcjqlxRxUMN42JDgG5BDg7aWWm7KBgPXxELar2QyBzQVl4syGiQf1A9ehVTyMQUeFLR%2Bk%2BPHC0SBqN1weDGLkM2OdHnwmOR4hkPJqHI3%2Fbk5r32BaaxXpWmd3sspUDE2a6g3KHZfTNP%2F0QMUGh0iuV0ybvAzPy%2BardaLKnaBidqkYlimOgEtXMSlZTGsU%2FW1M5OQJ48MzQyrE7NG0Ma5If6DSAyTWO7I6itsVjewjDvg6K%2BBjqkARr70WvNRET52Y08mivELsgIagLmWpTK3NUCCwPIZ%2BYb5%2Fgf9wM6Cll1kIauqpKDYja%2BsdSzf6WHM9Rw3ilVai359%2FkJgRH0MJCBgB55boSYlXb%2F3nkg%2BkQFMHUrbH1rcCUi1FoSIMsciwEUXMg0qubQQV2M9ZNG5wEObAYFDdv%2FsDcn%2BdBEh0fVz3HT2vQsajcm49dTP21kTiL80nS1EG4IRYqv&X-Amz-Signature=4441ab7f632a7dfbbe863ff587eddd8877ff08339b97dfea3a7b4bb3288da8be&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSSOY6H%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcq0Nm6wRofDd27eVfcbt5HkaVJVd0xk%2FPVvKlEw1FgIhANVx4H7jfImAA%2FzLMKvTwFBE2uBOLzAm4ExegX%2B7PLa7Kv8DCBoQABoMNjM3NDIzMTgzODA1IgwskLNRCYIblDBNDnAq3AMpbUq%2FKgDu6wy3zemiMsdaP1Eme7OvbPg7IHIElT63BSOdnrI%2F11rGW4dpUIyLHC%2Fjuw7A2H1CPBOn%2F%2F803f0ZBHnjsP2%2FSiZ3etQGeZazKmxcJlUeNRWDlSMBwKVYlSq%2BSC2SN5ufweKWFJn1XI1CKW12L7JUaFK8%2BOa%2F%2B1HTzx%2FFSMGKU2sR77ywfIKcsPS5hTaRsjqGA6%2BB%2FPfiIBNPAWwLX%2FhbgaPjSWItMQaOVYjyOFIfuFGs9bI1SjS8RSpbCln1UnYFby4wtBbdHCsdPUQ1JMT0OJXMtcIPoVzMAcS1Nebmkbs68aD9HoqaEu33KbKiUJnr8clIU7qMdLEPH2dIdzO9Jt0xq9WGR4sy5X7WiJCk69%2Br8Kn%2BC%2FFY5b2CvFjETLWG4wyiheJQiXcjqlxRxUMN42JDgG5BDg7aWWm7KBgPXxELar2QyBzQVl4syGiQf1A9ehVTyMQUeFLR%2Bk%2BPHC0SBqN1weDGLkM2OdHnwmOR4hkPJqHI3%2Fbk5r32BaaxXpWmd3sspUDE2a6g3KHZfTNP%2F0QMUGh0iuV0ybvAzPy%2BardaLKnaBidqkYlimOgEtXMSlZTGsU%2FW1M5OQJ48MzQyrE7NG0Ma5If6DSAyTWO7I6itsVjewjDvg6K%2BBjqkARr70WvNRET52Y08mivELsgIagLmWpTK3NUCCwPIZ%2BYb5%2Fgf9wM6Cll1kIauqpKDYja%2BsdSzf6WHM9Rw3ilVai359%2FkJgRH0MJCBgB55boSYlXb%2F3nkg%2BkQFMHUrbH1rcCUi1FoSIMsciwEUXMg0qubQQV2M9ZNG5wEObAYFDdv%2FsDcn%2BdBEh0fVz3HT2vQsajcm49dTP21kTiL80nS1EG4IRYqv&X-Amz-Signature=73efb6debc13c6928c5dad70247043bf77c859ba89c15f7d01619cdab1c3d866&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSSOY6H%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcq0Nm6wRofDd27eVfcbt5HkaVJVd0xk%2FPVvKlEw1FgIhANVx4H7jfImAA%2FzLMKvTwFBE2uBOLzAm4ExegX%2B7PLa7Kv8DCBoQABoMNjM3NDIzMTgzODA1IgwskLNRCYIblDBNDnAq3AMpbUq%2FKgDu6wy3zemiMsdaP1Eme7OvbPg7IHIElT63BSOdnrI%2F11rGW4dpUIyLHC%2Fjuw7A2H1CPBOn%2F%2F803f0ZBHnjsP2%2FSiZ3etQGeZazKmxcJlUeNRWDlSMBwKVYlSq%2BSC2SN5ufweKWFJn1XI1CKW12L7JUaFK8%2BOa%2F%2B1HTzx%2FFSMGKU2sR77ywfIKcsPS5hTaRsjqGA6%2BB%2FPfiIBNPAWwLX%2FhbgaPjSWItMQaOVYjyOFIfuFGs9bI1SjS8RSpbCln1UnYFby4wtBbdHCsdPUQ1JMT0OJXMtcIPoVzMAcS1Nebmkbs68aD9HoqaEu33KbKiUJnr8clIU7qMdLEPH2dIdzO9Jt0xq9WGR4sy5X7WiJCk69%2Br8Kn%2BC%2FFY5b2CvFjETLWG4wyiheJQiXcjqlxRxUMN42JDgG5BDg7aWWm7KBgPXxELar2QyBzQVl4syGiQf1A9ehVTyMQUeFLR%2Bk%2BPHC0SBqN1weDGLkM2OdHnwmOR4hkPJqHI3%2Fbk5r32BaaxXpWmd3sspUDE2a6g3KHZfTNP%2F0QMUGh0iuV0ybvAzPy%2BardaLKnaBidqkYlimOgEtXMSlZTGsU%2FW1M5OQJ48MzQyrE7NG0Ma5If6DSAyTWO7I6itsVjewjDvg6K%2BBjqkARr70WvNRET52Y08mivELsgIagLmWpTK3NUCCwPIZ%2BYb5%2Fgf9wM6Cll1kIauqpKDYja%2BsdSzf6WHM9Rw3ilVai359%2FkJgRH0MJCBgB55boSYlXb%2F3nkg%2BkQFMHUrbH1rcCUi1FoSIMsciwEUXMg0qubQQV2M9ZNG5wEObAYFDdv%2FsDcn%2BdBEh0fVz3HT2vQsajcm49dTP21kTiL80nS1EG4IRYqv&X-Amz-Signature=cb3cadc4f58d0b8c5f1b2d197e264cc5373d0e3cf90b30a77f50e9fd977eb2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

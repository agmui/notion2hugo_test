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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4C6JUA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5oEISoEhCsY1oVVaUM3A6J7ThtlwQDIPbtjC9sYr%2FwIhALXAAgaMudxeEgRR6C726nEhlS9GpAkRXBOGH6Fz8fJ5KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyU0oV%2BNpbAOJTifEq3AP41%2BTcCjAb4QtxaOJymORiEQ2QcPARRF160dQn1xG04Im7VWJ8eBi0Umw8U58gCJct6KAsCRbsK8X8w3GRyLZNF%2BaGsTLil1b0kbiIQ7OUOoTYro%2BycOedpYzGwOpUF26Va3PJc%2BKJnaAxob5%2F8KOZoB%2FzLy%2B6unqeHWelZgAFIMBv5bRViJkKq5P9ferpXr0JjuD5KIR8jv%2FECUeuuT0OSLcPino6PHZQYXbMEfnCmHl5%2FaSdzyCOUNjTLrHkHOHfEqKosvjkh8HFwn09pHWEzzWrUF0IN1NfqWFg0Pvk66z2Nz8dhDqbh98zeH2mHG2GAfFRQ6YPk0dp5KOQdDxskvmE6VZy7KUAtAAqaYxFmtg2iF0I8aQ6oeufFBbvgMt8RPcO8AU2p38pRV7ynB%2BKVCSOB%2BLvMJYDVIZjiktHcV62sIQBoxNpiEzmQPKBdj8neBDWWiXHazbmD48suJWfEEBamlExOjAPN6KpV9SfswkgvWvSye9ms7KqPPgKwgJH6uL4PvfFHobXy%2FoXqQrycEoBsiEaNNOFytlT7%2Bxa8REeVVdt4OcZRKhtwV3doRXJXnw7X2QSoiJweYMMcB3WNox5FU%2FQkbxYQIsN%2Fk3iA%2F5b63keE6cSk%2BQm1zDl3fS8BjqkAWJWsL%2BIiQiblwnr7bS5bE0ChXDIwFWa1U0F4zLvWoK78ueDst9OdJ8hGVzbfQZ3LCT959eZQ88ETYYgo29zO0lsNptPTv1HH7mQ7LbCXTGQ70ogpNAIieBvownc0Mzta%2Fmgr8M6vcgipGNgA55C1QB%2FjYuGc6Dwapbk4L1fx9MOukpTmw4kBV14JRLR%2BCsx0KTXualhYiwhX6cPuSUIzzS7PLPY&X-Amz-Signature=afc05e70cf52953ad02dc968eea1d9e33e39a1514d0c382b06025cfa44619b94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4C6JUA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5oEISoEhCsY1oVVaUM3A6J7ThtlwQDIPbtjC9sYr%2FwIhALXAAgaMudxeEgRR6C726nEhlS9GpAkRXBOGH6Fz8fJ5KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyU0oV%2BNpbAOJTifEq3AP41%2BTcCjAb4QtxaOJymORiEQ2QcPARRF160dQn1xG04Im7VWJ8eBi0Umw8U58gCJct6KAsCRbsK8X8w3GRyLZNF%2BaGsTLil1b0kbiIQ7OUOoTYro%2BycOedpYzGwOpUF26Va3PJc%2BKJnaAxob5%2F8KOZoB%2FzLy%2B6unqeHWelZgAFIMBv5bRViJkKq5P9ferpXr0JjuD5KIR8jv%2FECUeuuT0OSLcPino6PHZQYXbMEfnCmHl5%2FaSdzyCOUNjTLrHkHOHfEqKosvjkh8HFwn09pHWEzzWrUF0IN1NfqWFg0Pvk66z2Nz8dhDqbh98zeH2mHG2GAfFRQ6YPk0dp5KOQdDxskvmE6VZy7KUAtAAqaYxFmtg2iF0I8aQ6oeufFBbvgMt8RPcO8AU2p38pRV7ynB%2BKVCSOB%2BLvMJYDVIZjiktHcV62sIQBoxNpiEzmQPKBdj8neBDWWiXHazbmD48suJWfEEBamlExOjAPN6KpV9SfswkgvWvSye9ms7KqPPgKwgJH6uL4PvfFHobXy%2FoXqQrycEoBsiEaNNOFytlT7%2Bxa8REeVVdt4OcZRKhtwV3doRXJXnw7X2QSoiJweYMMcB3WNox5FU%2FQkbxYQIsN%2Fk3iA%2F5b63keE6cSk%2BQm1zDl3fS8BjqkAWJWsL%2BIiQiblwnr7bS5bE0ChXDIwFWa1U0F4zLvWoK78ueDst9OdJ8hGVzbfQZ3LCT959eZQ88ETYYgo29zO0lsNptPTv1HH7mQ7LbCXTGQ70ogpNAIieBvownc0Mzta%2Fmgr8M6vcgipGNgA55C1QB%2FjYuGc6Dwapbk4L1fx9MOukpTmw4kBV14JRLR%2BCsx0KTXualhYiwhX6cPuSUIzzS7PLPY&X-Amz-Signature=cd19cd02dab7f502c131bf7c607b73dba41cbe61660b1c1f7dd5ede17a4c0276&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4C6JUA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5oEISoEhCsY1oVVaUM3A6J7ThtlwQDIPbtjC9sYr%2FwIhALXAAgaMudxeEgRR6C726nEhlS9GpAkRXBOGH6Fz8fJ5KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyU0oV%2BNpbAOJTifEq3AP41%2BTcCjAb4QtxaOJymORiEQ2QcPARRF160dQn1xG04Im7VWJ8eBi0Umw8U58gCJct6KAsCRbsK8X8w3GRyLZNF%2BaGsTLil1b0kbiIQ7OUOoTYro%2BycOedpYzGwOpUF26Va3PJc%2BKJnaAxob5%2F8KOZoB%2FzLy%2B6unqeHWelZgAFIMBv5bRViJkKq5P9ferpXr0JjuD5KIR8jv%2FECUeuuT0OSLcPino6PHZQYXbMEfnCmHl5%2FaSdzyCOUNjTLrHkHOHfEqKosvjkh8HFwn09pHWEzzWrUF0IN1NfqWFg0Pvk66z2Nz8dhDqbh98zeH2mHG2GAfFRQ6YPk0dp5KOQdDxskvmE6VZy7KUAtAAqaYxFmtg2iF0I8aQ6oeufFBbvgMt8RPcO8AU2p38pRV7ynB%2BKVCSOB%2BLvMJYDVIZjiktHcV62sIQBoxNpiEzmQPKBdj8neBDWWiXHazbmD48suJWfEEBamlExOjAPN6KpV9SfswkgvWvSye9ms7KqPPgKwgJH6uL4PvfFHobXy%2FoXqQrycEoBsiEaNNOFytlT7%2Bxa8REeVVdt4OcZRKhtwV3doRXJXnw7X2QSoiJweYMMcB3WNox5FU%2FQkbxYQIsN%2Fk3iA%2F5b63keE6cSk%2BQm1zDl3fS8BjqkAWJWsL%2BIiQiblwnr7bS5bE0ChXDIwFWa1U0F4zLvWoK78ueDst9OdJ8hGVzbfQZ3LCT959eZQ88ETYYgo29zO0lsNptPTv1HH7mQ7LbCXTGQ70ogpNAIieBvownc0Mzta%2Fmgr8M6vcgipGNgA55C1QB%2FjYuGc6Dwapbk4L1fx9MOukpTmw4kBV14JRLR%2BCsx0KTXualhYiwhX6cPuSUIzzS7PLPY&X-Amz-Signature=f2e501a2bf25d546e5c084c0b032ece0bb63eb30799f64827253ba55614bff54&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4C6JUA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5oEISoEhCsY1oVVaUM3A6J7ThtlwQDIPbtjC9sYr%2FwIhALXAAgaMudxeEgRR6C726nEhlS9GpAkRXBOGH6Fz8fJ5KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyU0oV%2BNpbAOJTifEq3AP41%2BTcCjAb4QtxaOJymORiEQ2QcPARRF160dQn1xG04Im7VWJ8eBi0Umw8U58gCJct6KAsCRbsK8X8w3GRyLZNF%2BaGsTLil1b0kbiIQ7OUOoTYro%2BycOedpYzGwOpUF26Va3PJc%2BKJnaAxob5%2F8KOZoB%2FzLy%2B6unqeHWelZgAFIMBv5bRViJkKq5P9ferpXr0JjuD5KIR8jv%2FECUeuuT0OSLcPino6PHZQYXbMEfnCmHl5%2FaSdzyCOUNjTLrHkHOHfEqKosvjkh8HFwn09pHWEzzWrUF0IN1NfqWFg0Pvk66z2Nz8dhDqbh98zeH2mHG2GAfFRQ6YPk0dp5KOQdDxskvmE6VZy7KUAtAAqaYxFmtg2iF0I8aQ6oeufFBbvgMt8RPcO8AU2p38pRV7ynB%2BKVCSOB%2BLvMJYDVIZjiktHcV62sIQBoxNpiEzmQPKBdj8neBDWWiXHazbmD48suJWfEEBamlExOjAPN6KpV9SfswkgvWvSye9ms7KqPPgKwgJH6uL4PvfFHobXy%2FoXqQrycEoBsiEaNNOFytlT7%2Bxa8REeVVdt4OcZRKhtwV3doRXJXnw7X2QSoiJweYMMcB3WNox5FU%2FQkbxYQIsN%2Fk3iA%2F5b63keE6cSk%2BQm1zDl3fS8BjqkAWJWsL%2BIiQiblwnr7bS5bE0ChXDIwFWa1U0F4zLvWoK78ueDst9OdJ8hGVzbfQZ3LCT959eZQ88ETYYgo29zO0lsNptPTv1HH7mQ7LbCXTGQ70ogpNAIieBvownc0Mzta%2Fmgr8M6vcgipGNgA55C1QB%2FjYuGc6Dwapbk4L1fx9MOukpTmw4kBV14JRLR%2BCsx0KTXualhYiwhX6cPuSUIzzS7PLPY&X-Amz-Signature=abae5819aec53a8072b81bebe93337e908ea2012791b9295089e6dce20623429&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4C6JUA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5oEISoEhCsY1oVVaUM3A6J7ThtlwQDIPbtjC9sYr%2FwIhALXAAgaMudxeEgRR6C726nEhlS9GpAkRXBOGH6Fz8fJ5KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyU0oV%2BNpbAOJTifEq3AP41%2BTcCjAb4QtxaOJymORiEQ2QcPARRF160dQn1xG04Im7VWJ8eBi0Umw8U58gCJct6KAsCRbsK8X8w3GRyLZNF%2BaGsTLil1b0kbiIQ7OUOoTYro%2BycOedpYzGwOpUF26Va3PJc%2BKJnaAxob5%2F8KOZoB%2FzLy%2B6unqeHWelZgAFIMBv5bRViJkKq5P9ferpXr0JjuD5KIR8jv%2FECUeuuT0OSLcPino6PHZQYXbMEfnCmHl5%2FaSdzyCOUNjTLrHkHOHfEqKosvjkh8HFwn09pHWEzzWrUF0IN1NfqWFg0Pvk66z2Nz8dhDqbh98zeH2mHG2GAfFRQ6YPk0dp5KOQdDxskvmE6VZy7KUAtAAqaYxFmtg2iF0I8aQ6oeufFBbvgMt8RPcO8AU2p38pRV7ynB%2BKVCSOB%2BLvMJYDVIZjiktHcV62sIQBoxNpiEzmQPKBdj8neBDWWiXHazbmD48suJWfEEBamlExOjAPN6KpV9SfswkgvWvSye9ms7KqPPgKwgJH6uL4PvfFHobXy%2FoXqQrycEoBsiEaNNOFytlT7%2Bxa8REeVVdt4OcZRKhtwV3doRXJXnw7X2QSoiJweYMMcB3WNox5FU%2FQkbxYQIsN%2Fk3iA%2F5b63keE6cSk%2BQm1zDl3fS8BjqkAWJWsL%2BIiQiblwnr7bS5bE0ChXDIwFWa1U0F4zLvWoK78ueDst9OdJ8hGVzbfQZ3LCT959eZQ88ETYYgo29zO0lsNptPTv1HH7mQ7LbCXTGQ70ogpNAIieBvownc0Mzta%2Fmgr8M6vcgipGNgA55C1QB%2FjYuGc6Dwapbk4L1fx9MOukpTmw4kBV14JRLR%2BCsx0KTXualhYiwhX6cPuSUIzzS7PLPY&X-Amz-Signature=ab97e462991a0226b333e65adfdfa1ad286143737da06f888a25e8ad8f79c009&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4C6JUA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5oEISoEhCsY1oVVaUM3A6J7ThtlwQDIPbtjC9sYr%2FwIhALXAAgaMudxeEgRR6C726nEhlS9GpAkRXBOGH6Fz8fJ5KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyU0oV%2BNpbAOJTifEq3AP41%2BTcCjAb4QtxaOJymORiEQ2QcPARRF160dQn1xG04Im7VWJ8eBi0Umw8U58gCJct6KAsCRbsK8X8w3GRyLZNF%2BaGsTLil1b0kbiIQ7OUOoTYro%2BycOedpYzGwOpUF26Va3PJc%2BKJnaAxob5%2F8KOZoB%2FzLy%2B6unqeHWelZgAFIMBv5bRViJkKq5P9ferpXr0JjuD5KIR8jv%2FECUeuuT0OSLcPino6PHZQYXbMEfnCmHl5%2FaSdzyCOUNjTLrHkHOHfEqKosvjkh8HFwn09pHWEzzWrUF0IN1NfqWFg0Pvk66z2Nz8dhDqbh98zeH2mHG2GAfFRQ6YPk0dp5KOQdDxskvmE6VZy7KUAtAAqaYxFmtg2iF0I8aQ6oeufFBbvgMt8RPcO8AU2p38pRV7ynB%2BKVCSOB%2BLvMJYDVIZjiktHcV62sIQBoxNpiEzmQPKBdj8neBDWWiXHazbmD48suJWfEEBamlExOjAPN6KpV9SfswkgvWvSye9ms7KqPPgKwgJH6uL4PvfFHobXy%2FoXqQrycEoBsiEaNNOFytlT7%2Bxa8REeVVdt4OcZRKhtwV3doRXJXnw7X2QSoiJweYMMcB3WNox5FU%2FQkbxYQIsN%2Fk3iA%2F5b63keE6cSk%2BQm1zDl3fS8BjqkAWJWsL%2BIiQiblwnr7bS5bE0ChXDIwFWa1U0F4zLvWoK78ueDst9OdJ8hGVzbfQZ3LCT959eZQ88ETYYgo29zO0lsNptPTv1HH7mQ7LbCXTGQ70ogpNAIieBvownc0Mzta%2Fmgr8M6vcgipGNgA55C1QB%2FjYuGc6Dwapbk4L1fx9MOukpTmw4kBV14JRLR%2BCsx0KTXualhYiwhX6cPuSUIzzS7PLPY&X-Amz-Signature=5dec67ef33441db5b98f4adeba3722c284bde1fea4d0fa4a08cd7b6e66d21b66&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4C6JUA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5oEISoEhCsY1oVVaUM3A6J7ThtlwQDIPbtjC9sYr%2FwIhALXAAgaMudxeEgRR6C726nEhlS9GpAkRXBOGH6Fz8fJ5KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyU0oV%2BNpbAOJTifEq3AP41%2BTcCjAb4QtxaOJymORiEQ2QcPARRF160dQn1xG04Im7VWJ8eBi0Umw8U58gCJct6KAsCRbsK8X8w3GRyLZNF%2BaGsTLil1b0kbiIQ7OUOoTYro%2BycOedpYzGwOpUF26Va3PJc%2BKJnaAxob5%2F8KOZoB%2FzLy%2B6unqeHWelZgAFIMBv5bRViJkKq5P9ferpXr0JjuD5KIR8jv%2FECUeuuT0OSLcPino6PHZQYXbMEfnCmHl5%2FaSdzyCOUNjTLrHkHOHfEqKosvjkh8HFwn09pHWEzzWrUF0IN1NfqWFg0Pvk66z2Nz8dhDqbh98zeH2mHG2GAfFRQ6YPk0dp5KOQdDxskvmE6VZy7KUAtAAqaYxFmtg2iF0I8aQ6oeufFBbvgMt8RPcO8AU2p38pRV7ynB%2BKVCSOB%2BLvMJYDVIZjiktHcV62sIQBoxNpiEzmQPKBdj8neBDWWiXHazbmD48suJWfEEBamlExOjAPN6KpV9SfswkgvWvSye9ms7KqPPgKwgJH6uL4PvfFHobXy%2FoXqQrycEoBsiEaNNOFytlT7%2Bxa8REeVVdt4OcZRKhtwV3doRXJXnw7X2QSoiJweYMMcB3WNox5FU%2FQkbxYQIsN%2Fk3iA%2F5b63keE6cSk%2BQm1zDl3fS8BjqkAWJWsL%2BIiQiblwnr7bS5bE0ChXDIwFWa1U0F4zLvWoK78ueDst9OdJ8hGVzbfQZ3LCT959eZQ88ETYYgo29zO0lsNptPTv1HH7mQ7LbCXTGQ70ogpNAIieBvownc0Mzta%2Fmgr8M6vcgipGNgA55C1QB%2FjYuGc6Dwapbk4L1fx9MOukpTmw4kBV14JRLR%2BCsx0KTXualhYiwhX6cPuSUIzzS7PLPY&X-Amz-Signature=28519d40930ad2bf8cd1516a897863a75fef1fa78e408ba70c03a47937def25a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

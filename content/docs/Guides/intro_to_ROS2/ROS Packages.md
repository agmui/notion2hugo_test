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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677B5JQYE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FdSjfGXdgMQJox5nqKUmtZNAIFByrnt2gPyRdqWBUZAiEA4b1c9jqU%2FDoTS6ZB2hcMXOS7acV%2Fcz69lwfMWxOEP1QqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHitmoq0KeVM28HDCrcA2WTSVcuO7eDL1lo5NXlvNariM9ir5KZEzL5KkOpMOVDn%2F4CPIc6IXZphefiSfntKjBOTi%2FyqGR%2BiUtoRYq6Uj2fNvo096X407EC1EDAFsuVnJmsb4b04Xzpti%2FUsdu2Wy0FrYdKEHjQ5MK9Hy4EYKvbk0v8bn2ufkTJQA4GWVWw76szNAvTL%2FCq9SuGbYi1hgEBPjCda12ip2%2Bj9GDqB2Jp15%2BuT1naFHsVtsLU5ylbfNeqWtx4MnlYrDBrZlWLdAWO5aSZ6ZEbtviz7XDyOmNUCyz2uHOHXPaRQGX%2FJAObI9XDHDWD5FEilOKK2ZolDBK2ImsKkpIk7Ewkd290yGqtMTi4npXfjq6zjuRHdMUs23tNcJ8n1T6dMCz9QcTTMqPxWvF6e6enkDzeK5alQ1k%2Fos1jBb5heSd0Dd9q4ESh3K12jYTsfcpae1NrA1RbVUGo557WlDNbrNsR0z5EUNZVtRbKLrjnlMbCpG4UcUmjABLmyYzosxuWhDEsdMymBaV4ptS%2F4RwRKEYyfZjmzWMj5Y%2FPDgW5JM0tYP34eqb%2FkwyW9cjXOZc83VrlQhQise9gqmPOcjFKJjkN%2Fuabwv%2BNe1tk9zo0KO2i5EiB27J3eMEna%2BrBbEcl%2BRmzMPeGmcAGOqUBzXowAxX17yJGmVZel99GyCs%2FFHIdVHKMIGF3rIUhAUtPSeJG1Iko18f%2FOIGwV2iOxYeei%2BRlD4WulXyD6FNx4knGUohRHB2sbW44O6xclQmn3LTzxzPVULc%2FiJ0xAIUq%2Bn88Bkfqw%2Fow8U%2BRQxlVz8OLQl1%2BIa6HIdk6ypV9tVIEHz98WDP1%2Fnu9%2B80PM%2FkyAFkDho9xH7fn%2B2iWrjSJmlc2n3Ee&X-Amz-Signature=4a73fcc02c18698f463fe32975d0720e91732f18e0e98daff59256c0089363c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677B5JQYE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FdSjfGXdgMQJox5nqKUmtZNAIFByrnt2gPyRdqWBUZAiEA4b1c9jqU%2FDoTS6ZB2hcMXOS7acV%2Fcz69lwfMWxOEP1QqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHitmoq0KeVM28HDCrcA2WTSVcuO7eDL1lo5NXlvNariM9ir5KZEzL5KkOpMOVDn%2F4CPIc6IXZphefiSfntKjBOTi%2FyqGR%2BiUtoRYq6Uj2fNvo096X407EC1EDAFsuVnJmsb4b04Xzpti%2FUsdu2Wy0FrYdKEHjQ5MK9Hy4EYKvbk0v8bn2ufkTJQA4GWVWw76szNAvTL%2FCq9SuGbYi1hgEBPjCda12ip2%2Bj9GDqB2Jp15%2BuT1naFHsVtsLU5ylbfNeqWtx4MnlYrDBrZlWLdAWO5aSZ6ZEbtviz7XDyOmNUCyz2uHOHXPaRQGX%2FJAObI9XDHDWD5FEilOKK2ZolDBK2ImsKkpIk7Ewkd290yGqtMTi4npXfjq6zjuRHdMUs23tNcJ8n1T6dMCz9QcTTMqPxWvF6e6enkDzeK5alQ1k%2Fos1jBb5heSd0Dd9q4ESh3K12jYTsfcpae1NrA1RbVUGo557WlDNbrNsR0z5EUNZVtRbKLrjnlMbCpG4UcUmjABLmyYzosxuWhDEsdMymBaV4ptS%2F4RwRKEYyfZjmzWMj5Y%2FPDgW5JM0tYP34eqb%2FkwyW9cjXOZc83VrlQhQise9gqmPOcjFKJjkN%2Fuabwv%2BNe1tk9zo0KO2i5EiB27J3eMEna%2BrBbEcl%2BRmzMPeGmcAGOqUBzXowAxX17yJGmVZel99GyCs%2FFHIdVHKMIGF3rIUhAUtPSeJG1Iko18f%2FOIGwV2iOxYeei%2BRlD4WulXyD6FNx4knGUohRHB2sbW44O6xclQmn3LTzxzPVULc%2FiJ0xAIUq%2Bn88Bkfqw%2Fow8U%2BRQxlVz8OLQl1%2BIa6HIdk6ypV9tVIEHz98WDP1%2Fnu9%2B80PM%2FkyAFkDho9xH7fn%2B2iWrjSJmlc2n3Ee&X-Amz-Signature=5c7c31c71eda02afa2cdf80e5bfea5b2aa15df58c8209ef3f58940c8ab3836cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677B5JQYE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FdSjfGXdgMQJox5nqKUmtZNAIFByrnt2gPyRdqWBUZAiEA4b1c9jqU%2FDoTS6ZB2hcMXOS7acV%2Fcz69lwfMWxOEP1QqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHitmoq0KeVM28HDCrcA2WTSVcuO7eDL1lo5NXlvNariM9ir5KZEzL5KkOpMOVDn%2F4CPIc6IXZphefiSfntKjBOTi%2FyqGR%2BiUtoRYq6Uj2fNvo096X407EC1EDAFsuVnJmsb4b04Xzpti%2FUsdu2Wy0FrYdKEHjQ5MK9Hy4EYKvbk0v8bn2ufkTJQA4GWVWw76szNAvTL%2FCq9SuGbYi1hgEBPjCda12ip2%2Bj9GDqB2Jp15%2BuT1naFHsVtsLU5ylbfNeqWtx4MnlYrDBrZlWLdAWO5aSZ6ZEbtviz7XDyOmNUCyz2uHOHXPaRQGX%2FJAObI9XDHDWD5FEilOKK2ZolDBK2ImsKkpIk7Ewkd290yGqtMTi4npXfjq6zjuRHdMUs23tNcJ8n1T6dMCz9QcTTMqPxWvF6e6enkDzeK5alQ1k%2Fos1jBb5heSd0Dd9q4ESh3K12jYTsfcpae1NrA1RbVUGo557WlDNbrNsR0z5EUNZVtRbKLrjnlMbCpG4UcUmjABLmyYzosxuWhDEsdMymBaV4ptS%2F4RwRKEYyfZjmzWMj5Y%2FPDgW5JM0tYP34eqb%2FkwyW9cjXOZc83VrlQhQise9gqmPOcjFKJjkN%2Fuabwv%2BNe1tk9zo0KO2i5EiB27J3eMEna%2BrBbEcl%2BRmzMPeGmcAGOqUBzXowAxX17yJGmVZel99GyCs%2FFHIdVHKMIGF3rIUhAUtPSeJG1Iko18f%2FOIGwV2iOxYeei%2BRlD4WulXyD6FNx4knGUohRHB2sbW44O6xclQmn3LTzxzPVULc%2FiJ0xAIUq%2Bn88Bkfqw%2Fow8U%2BRQxlVz8OLQl1%2BIa6HIdk6ypV9tVIEHz98WDP1%2Fnu9%2B80PM%2FkyAFkDho9xH7fn%2B2iWrjSJmlc2n3Ee&X-Amz-Signature=0e39519232b2e981979af6dfd28fd4822c87eb43c218d7afe749578355ff6c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677B5JQYE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FdSjfGXdgMQJox5nqKUmtZNAIFByrnt2gPyRdqWBUZAiEA4b1c9jqU%2FDoTS6ZB2hcMXOS7acV%2Fcz69lwfMWxOEP1QqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHitmoq0KeVM28HDCrcA2WTSVcuO7eDL1lo5NXlvNariM9ir5KZEzL5KkOpMOVDn%2F4CPIc6IXZphefiSfntKjBOTi%2FyqGR%2BiUtoRYq6Uj2fNvo096X407EC1EDAFsuVnJmsb4b04Xzpti%2FUsdu2Wy0FrYdKEHjQ5MK9Hy4EYKvbk0v8bn2ufkTJQA4GWVWw76szNAvTL%2FCq9SuGbYi1hgEBPjCda12ip2%2Bj9GDqB2Jp15%2BuT1naFHsVtsLU5ylbfNeqWtx4MnlYrDBrZlWLdAWO5aSZ6ZEbtviz7XDyOmNUCyz2uHOHXPaRQGX%2FJAObI9XDHDWD5FEilOKK2ZolDBK2ImsKkpIk7Ewkd290yGqtMTi4npXfjq6zjuRHdMUs23tNcJ8n1T6dMCz9QcTTMqPxWvF6e6enkDzeK5alQ1k%2Fos1jBb5heSd0Dd9q4ESh3K12jYTsfcpae1NrA1RbVUGo557WlDNbrNsR0z5EUNZVtRbKLrjnlMbCpG4UcUmjABLmyYzosxuWhDEsdMymBaV4ptS%2F4RwRKEYyfZjmzWMj5Y%2FPDgW5JM0tYP34eqb%2FkwyW9cjXOZc83VrlQhQise9gqmPOcjFKJjkN%2Fuabwv%2BNe1tk9zo0KO2i5EiB27J3eMEna%2BrBbEcl%2BRmzMPeGmcAGOqUBzXowAxX17yJGmVZel99GyCs%2FFHIdVHKMIGF3rIUhAUtPSeJG1Iko18f%2FOIGwV2iOxYeei%2BRlD4WulXyD6FNx4knGUohRHB2sbW44O6xclQmn3LTzxzPVULc%2FiJ0xAIUq%2Bn88Bkfqw%2Fow8U%2BRQxlVz8OLQl1%2BIa6HIdk6ypV9tVIEHz98WDP1%2Fnu9%2B80PM%2FkyAFkDho9xH7fn%2B2iWrjSJmlc2n3Ee&X-Amz-Signature=06c70f4db7e8f813228afa5a707d3865ad052d94006e315414fe680aa6304ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677B5JQYE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FdSjfGXdgMQJox5nqKUmtZNAIFByrnt2gPyRdqWBUZAiEA4b1c9jqU%2FDoTS6ZB2hcMXOS7acV%2Fcz69lwfMWxOEP1QqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHitmoq0KeVM28HDCrcA2WTSVcuO7eDL1lo5NXlvNariM9ir5KZEzL5KkOpMOVDn%2F4CPIc6IXZphefiSfntKjBOTi%2FyqGR%2BiUtoRYq6Uj2fNvo096X407EC1EDAFsuVnJmsb4b04Xzpti%2FUsdu2Wy0FrYdKEHjQ5MK9Hy4EYKvbk0v8bn2ufkTJQA4GWVWw76szNAvTL%2FCq9SuGbYi1hgEBPjCda12ip2%2Bj9GDqB2Jp15%2BuT1naFHsVtsLU5ylbfNeqWtx4MnlYrDBrZlWLdAWO5aSZ6ZEbtviz7XDyOmNUCyz2uHOHXPaRQGX%2FJAObI9XDHDWD5FEilOKK2ZolDBK2ImsKkpIk7Ewkd290yGqtMTi4npXfjq6zjuRHdMUs23tNcJ8n1T6dMCz9QcTTMqPxWvF6e6enkDzeK5alQ1k%2Fos1jBb5heSd0Dd9q4ESh3K12jYTsfcpae1NrA1RbVUGo557WlDNbrNsR0z5EUNZVtRbKLrjnlMbCpG4UcUmjABLmyYzosxuWhDEsdMymBaV4ptS%2F4RwRKEYyfZjmzWMj5Y%2FPDgW5JM0tYP34eqb%2FkwyW9cjXOZc83VrlQhQise9gqmPOcjFKJjkN%2Fuabwv%2BNe1tk9zo0KO2i5EiB27J3eMEna%2BrBbEcl%2BRmzMPeGmcAGOqUBzXowAxX17yJGmVZel99GyCs%2FFHIdVHKMIGF3rIUhAUtPSeJG1Iko18f%2FOIGwV2iOxYeei%2BRlD4WulXyD6FNx4knGUohRHB2sbW44O6xclQmn3LTzxzPVULc%2FiJ0xAIUq%2Bn88Bkfqw%2Fow8U%2BRQxlVz8OLQl1%2BIa6HIdk6ypV9tVIEHz98WDP1%2Fnu9%2B80PM%2FkyAFkDho9xH7fn%2B2iWrjSJmlc2n3Ee&X-Amz-Signature=ebbc42d33997aa5dba5b30118f8be2e0ded43255bea170b65f9ecbed9caf2a36&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677B5JQYE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FdSjfGXdgMQJox5nqKUmtZNAIFByrnt2gPyRdqWBUZAiEA4b1c9jqU%2FDoTS6ZB2hcMXOS7acV%2Fcz69lwfMWxOEP1QqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHitmoq0KeVM28HDCrcA2WTSVcuO7eDL1lo5NXlvNariM9ir5KZEzL5KkOpMOVDn%2F4CPIc6IXZphefiSfntKjBOTi%2FyqGR%2BiUtoRYq6Uj2fNvo096X407EC1EDAFsuVnJmsb4b04Xzpti%2FUsdu2Wy0FrYdKEHjQ5MK9Hy4EYKvbk0v8bn2ufkTJQA4GWVWw76szNAvTL%2FCq9SuGbYi1hgEBPjCda12ip2%2Bj9GDqB2Jp15%2BuT1naFHsVtsLU5ylbfNeqWtx4MnlYrDBrZlWLdAWO5aSZ6ZEbtviz7XDyOmNUCyz2uHOHXPaRQGX%2FJAObI9XDHDWD5FEilOKK2ZolDBK2ImsKkpIk7Ewkd290yGqtMTi4npXfjq6zjuRHdMUs23tNcJ8n1T6dMCz9QcTTMqPxWvF6e6enkDzeK5alQ1k%2Fos1jBb5heSd0Dd9q4ESh3K12jYTsfcpae1NrA1RbVUGo557WlDNbrNsR0z5EUNZVtRbKLrjnlMbCpG4UcUmjABLmyYzosxuWhDEsdMymBaV4ptS%2F4RwRKEYyfZjmzWMj5Y%2FPDgW5JM0tYP34eqb%2FkwyW9cjXOZc83VrlQhQise9gqmPOcjFKJjkN%2Fuabwv%2BNe1tk9zo0KO2i5EiB27J3eMEna%2BrBbEcl%2BRmzMPeGmcAGOqUBzXowAxX17yJGmVZel99GyCs%2FFHIdVHKMIGF3rIUhAUtPSeJG1Iko18f%2FOIGwV2iOxYeei%2BRlD4WulXyD6FNx4knGUohRHB2sbW44O6xclQmn3LTzxzPVULc%2FiJ0xAIUq%2Bn88Bkfqw%2Fow8U%2BRQxlVz8OLQl1%2BIa6HIdk6ypV9tVIEHz98WDP1%2Fnu9%2B80PM%2FkyAFkDho9xH7fn%2B2iWrjSJmlc2n3Ee&X-Amz-Signature=83da2157058d2f71978a2d4572eef7078f8fe28c7a64ae4ea8538cd1afe3c55c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677B5JQYE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FdSjfGXdgMQJox5nqKUmtZNAIFByrnt2gPyRdqWBUZAiEA4b1c9jqU%2FDoTS6ZB2hcMXOS7acV%2Fcz69lwfMWxOEP1QqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHitmoq0KeVM28HDCrcA2WTSVcuO7eDL1lo5NXlvNariM9ir5KZEzL5KkOpMOVDn%2F4CPIc6IXZphefiSfntKjBOTi%2FyqGR%2BiUtoRYq6Uj2fNvo096X407EC1EDAFsuVnJmsb4b04Xzpti%2FUsdu2Wy0FrYdKEHjQ5MK9Hy4EYKvbk0v8bn2ufkTJQA4GWVWw76szNAvTL%2FCq9SuGbYi1hgEBPjCda12ip2%2Bj9GDqB2Jp15%2BuT1naFHsVtsLU5ylbfNeqWtx4MnlYrDBrZlWLdAWO5aSZ6ZEbtviz7XDyOmNUCyz2uHOHXPaRQGX%2FJAObI9XDHDWD5FEilOKK2ZolDBK2ImsKkpIk7Ewkd290yGqtMTi4npXfjq6zjuRHdMUs23tNcJ8n1T6dMCz9QcTTMqPxWvF6e6enkDzeK5alQ1k%2Fos1jBb5heSd0Dd9q4ESh3K12jYTsfcpae1NrA1RbVUGo557WlDNbrNsR0z5EUNZVtRbKLrjnlMbCpG4UcUmjABLmyYzosxuWhDEsdMymBaV4ptS%2F4RwRKEYyfZjmzWMj5Y%2FPDgW5JM0tYP34eqb%2FkwyW9cjXOZc83VrlQhQise9gqmPOcjFKJjkN%2Fuabwv%2BNe1tk9zo0KO2i5EiB27J3eMEna%2BrBbEcl%2BRmzMPeGmcAGOqUBzXowAxX17yJGmVZel99GyCs%2FFHIdVHKMIGF3rIUhAUtPSeJG1Iko18f%2FOIGwV2iOxYeei%2BRlD4WulXyD6FNx4knGUohRHB2sbW44O6xclQmn3LTzxzPVULc%2FiJ0xAIUq%2Bn88Bkfqw%2Fow8U%2BRQxlVz8OLQl1%2BIa6HIdk6ypV9tVIEHz98WDP1%2Fnu9%2B80PM%2FkyAFkDho9xH7fn%2B2iWrjSJmlc2n3Ee&X-Amz-Signature=6b870ad6c893f1bcd8c5728e65cacfa7663dd02a391fb72df528a8813683d3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

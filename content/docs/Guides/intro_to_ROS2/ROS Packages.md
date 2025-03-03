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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7R6XXI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDadEOtm3fyW4y2m8eYlGzfjYy%2Br6rQgHeZzZQZA9DSIQIhAO0Darj7TXwlkCXz2TaRT8ZtR8c4rkYkWfhjtBmrIEJMKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN%2B5jdnVMhNfMBEvMq3ANKlJYoA3qtFGa1ZQxBU0wcdHexgoZmGSR0833m64zdj9PIgPFi9RTJ3M9PkMxwexD2l6FAPaGFntF1aFIJg16TSHJjQ7OIwEvuIAaa7SUOjK7BjtyFl5xwtE1OSF3mbv06u97BkNoelEYtAy1WCNPQptQl0aJiq4W3SeAIA5X5pLtvWMeuFzeY0lLhBKy65Z%2Bdr%2FqQVWucRWZjLlVGX2bbg35Ej2IjFNp1JH4tprYrxbI%2F8lSmfMhqS5Hozw1M6kzsB9EikYI%2B%2BSVcrv9iyBZdrRdT1aaIhwTeBe%2BjkenGUUwg47Wl6oTOnMspQZxoWX5Ub64EN7aGEbNU8Z4hsZmLWZASIWbuSii%2FqHEcqSyfV0mQI%2BrlMFNY9TngdBYnzQP%2Bb89Q6Lu2guBcbiG1zytcQGUNksdWK2J0%2FfDIWJIvJ7NiqjtKe8R5JZpqhQt9h8EE0ovqwLVTc5kTsbNrag1KkaFI1T6mR38yBjnp42Q5BkPxQ3rMin8nYiKuqb0WLq9Ep%2FHFpKEtEuosNdYn7MT4auaSCDUL5kiwUChaziHK1C2e%2Fm6xCUqFrGcNTFFjxXhsj9cVcm8M1Lq1g42NchZs40898dtbiRrIyA2IZvVCq8citHJKMOdcybcbeDD4%2B5e%2BBjqkAdCfNweKRDDwH4D0tycbV1kvcfh8y9qecSSnYu4uWW5KLsd8P3mlljpVoq42fGg65g%2B%2FDLOUgu8GMSmCYolLh5QUYkqjG%2Fv7EkPNfw8zSGpbIzecCkLM2NlFP%2Bk9ZRp%2FEYOHsjhIQDmxecDDMyICjH%2BxBSTGrFQQztXohnxn3V1xWyji0Jt63Jlx09ERgn%2BwtYQfp7XewDXas9oD3FqAZ3ubbkrg&X-Amz-Signature=71fbb982e4030550fe805869ea8c57280839b01e07ab3d0a390c52f8e54beeb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7R6XXI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDadEOtm3fyW4y2m8eYlGzfjYy%2Br6rQgHeZzZQZA9DSIQIhAO0Darj7TXwlkCXz2TaRT8ZtR8c4rkYkWfhjtBmrIEJMKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN%2B5jdnVMhNfMBEvMq3ANKlJYoA3qtFGa1ZQxBU0wcdHexgoZmGSR0833m64zdj9PIgPFi9RTJ3M9PkMxwexD2l6FAPaGFntF1aFIJg16TSHJjQ7OIwEvuIAaa7SUOjK7BjtyFl5xwtE1OSF3mbv06u97BkNoelEYtAy1WCNPQptQl0aJiq4W3SeAIA5X5pLtvWMeuFzeY0lLhBKy65Z%2Bdr%2FqQVWucRWZjLlVGX2bbg35Ej2IjFNp1JH4tprYrxbI%2F8lSmfMhqS5Hozw1M6kzsB9EikYI%2B%2BSVcrv9iyBZdrRdT1aaIhwTeBe%2BjkenGUUwg47Wl6oTOnMspQZxoWX5Ub64EN7aGEbNU8Z4hsZmLWZASIWbuSii%2FqHEcqSyfV0mQI%2BrlMFNY9TngdBYnzQP%2Bb89Q6Lu2guBcbiG1zytcQGUNksdWK2J0%2FfDIWJIvJ7NiqjtKe8R5JZpqhQt9h8EE0ovqwLVTc5kTsbNrag1KkaFI1T6mR38yBjnp42Q5BkPxQ3rMin8nYiKuqb0WLq9Ep%2FHFpKEtEuosNdYn7MT4auaSCDUL5kiwUChaziHK1C2e%2Fm6xCUqFrGcNTFFjxXhsj9cVcm8M1Lq1g42NchZs40898dtbiRrIyA2IZvVCq8citHJKMOdcybcbeDD4%2B5e%2BBjqkAdCfNweKRDDwH4D0tycbV1kvcfh8y9qecSSnYu4uWW5KLsd8P3mlljpVoq42fGg65g%2B%2FDLOUgu8GMSmCYolLh5QUYkqjG%2Fv7EkPNfw8zSGpbIzecCkLM2NlFP%2Bk9ZRp%2FEYOHsjhIQDmxecDDMyICjH%2BxBSTGrFQQztXohnxn3V1xWyji0Jt63Jlx09ERgn%2BwtYQfp7XewDXas9oD3FqAZ3ubbkrg&X-Amz-Signature=4d1bada7e115085bf4a4c4b5730a4cd15fc9111934598e086ed75b2531a215cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7R6XXI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDadEOtm3fyW4y2m8eYlGzfjYy%2Br6rQgHeZzZQZA9DSIQIhAO0Darj7TXwlkCXz2TaRT8ZtR8c4rkYkWfhjtBmrIEJMKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN%2B5jdnVMhNfMBEvMq3ANKlJYoA3qtFGa1ZQxBU0wcdHexgoZmGSR0833m64zdj9PIgPFi9RTJ3M9PkMxwexD2l6FAPaGFntF1aFIJg16TSHJjQ7OIwEvuIAaa7SUOjK7BjtyFl5xwtE1OSF3mbv06u97BkNoelEYtAy1WCNPQptQl0aJiq4W3SeAIA5X5pLtvWMeuFzeY0lLhBKy65Z%2Bdr%2FqQVWucRWZjLlVGX2bbg35Ej2IjFNp1JH4tprYrxbI%2F8lSmfMhqS5Hozw1M6kzsB9EikYI%2B%2BSVcrv9iyBZdrRdT1aaIhwTeBe%2BjkenGUUwg47Wl6oTOnMspQZxoWX5Ub64EN7aGEbNU8Z4hsZmLWZASIWbuSii%2FqHEcqSyfV0mQI%2BrlMFNY9TngdBYnzQP%2Bb89Q6Lu2guBcbiG1zytcQGUNksdWK2J0%2FfDIWJIvJ7NiqjtKe8R5JZpqhQt9h8EE0ovqwLVTc5kTsbNrag1KkaFI1T6mR38yBjnp42Q5BkPxQ3rMin8nYiKuqb0WLq9Ep%2FHFpKEtEuosNdYn7MT4auaSCDUL5kiwUChaziHK1C2e%2Fm6xCUqFrGcNTFFjxXhsj9cVcm8M1Lq1g42NchZs40898dtbiRrIyA2IZvVCq8citHJKMOdcybcbeDD4%2B5e%2BBjqkAdCfNweKRDDwH4D0tycbV1kvcfh8y9qecSSnYu4uWW5KLsd8P3mlljpVoq42fGg65g%2B%2FDLOUgu8GMSmCYolLh5QUYkqjG%2Fv7EkPNfw8zSGpbIzecCkLM2NlFP%2Bk9ZRp%2FEYOHsjhIQDmxecDDMyICjH%2BxBSTGrFQQztXohnxn3V1xWyji0Jt63Jlx09ERgn%2BwtYQfp7XewDXas9oD3FqAZ3ubbkrg&X-Amz-Signature=19a95543ff4ba5d11e70e67e21ae573bb52036f9cd7205ff1619606fd4f4bc6e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7R6XXI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDadEOtm3fyW4y2m8eYlGzfjYy%2Br6rQgHeZzZQZA9DSIQIhAO0Darj7TXwlkCXz2TaRT8ZtR8c4rkYkWfhjtBmrIEJMKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN%2B5jdnVMhNfMBEvMq3ANKlJYoA3qtFGa1ZQxBU0wcdHexgoZmGSR0833m64zdj9PIgPFi9RTJ3M9PkMxwexD2l6FAPaGFntF1aFIJg16TSHJjQ7OIwEvuIAaa7SUOjK7BjtyFl5xwtE1OSF3mbv06u97BkNoelEYtAy1WCNPQptQl0aJiq4W3SeAIA5X5pLtvWMeuFzeY0lLhBKy65Z%2Bdr%2FqQVWucRWZjLlVGX2bbg35Ej2IjFNp1JH4tprYrxbI%2F8lSmfMhqS5Hozw1M6kzsB9EikYI%2B%2BSVcrv9iyBZdrRdT1aaIhwTeBe%2BjkenGUUwg47Wl6oTOnMspQZxoWX5Ub64EN7aGEbNU8Z4hsZmLWZASIWbuSii%2FqHEcqSyfV0mQI%2BrlMFNY9TngdBYnzQP%2Bb89Q6Lu2guBcbiG1zytcQGUNksdWK2J0%2FfDIWJIvJ7NiqjtKe8R5JZpqhQt9h8EE0ovqwLVTc5kTsbNrag1KkaFI1T6mR38yBjnp42Q5BkPxQ3rMin8nYiKuqb0WLq9Ep%2FHFpKEtEuosNdYn7MT4auaSCDUL5kiwUChaziHK1C2e%2Fm6xCUqFrGcNTFFjxXhsj9cVcm8M1Lq1g42NchZs40898dtbiRrIyA2IZvVCq8citHJKMOdcybcbeDD4%2B5e%2BBjqkAdCfNweKRDDwH4D0tycbV1kvcfh8y9qecSSnYu4uWW5KLsd8P3mlljpVoq42fGg65g%2B%2FDLOUgu8GMSmCYolLh5QUYkqjG%2Fv7EkPNfw8zSGpbIzecCkLM2NlFP%2Bk9ZRp%2FEYOHsjhIQDmxecDDMyICjH%2BxBSTGrFQQztXohnxn3V1xWyji0Jt63Jlx09ERgn%2BwtYQfp7XewDXas9oD3FqAZ3ubbkrg&X-Amz-Signature=75694a405831a2ed3edf8e33af113102e588ee45f66837109f1df8e12b631d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7R6XXI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDadEOtm3fyW4y2m8eYlGzfjYy%2Br6rQgHeZzZQZA9DSIQIhAO0Darj7TXwlkCXz2TaRT8ZtR8c4rkYkWfhjtBmrIEJMKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN%2B5jdnVMhNfMBEvMq3ANKlJYoA3qtFGa1ZQxBU0wcdHexgoZmGSR0833m64zdj9PIgPFi9RTJ3M9PkMxwexD2l6FAPaGFntF1aFIJg16TSHJjQ7OIwEvuIAaa7SUOjK7BjtyFl5xwtE1OSF3mbv06u97BkNoelEYtAy1WCNPQptQl0aJiq4W3SeAIA5X5pLtvWMeuFzeY0lLhBKy65Z%2Bdr%2FqQVWucRWZjLlVGX2bbg35Ej2IjFNp1JH4tprYrxbI%2F8lSmfMhqS5Hozw1M6kzsB9EikYI%2B%2BSVcrv9iyBZdrRdT1aaIhwTeBe%2BjkenGUUwg47Wl6oTOnMspQZxoWX5Ub64EN7aGEbNU8Z4hsZmLWZASIWbuSii%2FqHEcqSyfV0mQI%2BrlMFNY9TngdBYnzQP%2Bb89Q6Lu2guBcbiG1zytcQGUNksdWK2J0%2FfDIWJIvJ7NiqjtKe8R5JZpqhQt9h8EE0ovqwLVTc5kTsbNrag1KkaFI1T6mR38yBjnp42Q5BkPxQ3rMin8nYiKuqb0WLq9Ep%2FHFpKEtEuosNdYn7MT4auaSCDUL5kiwUChaziHK1C2e%2Fm6xCUqFrGcNTFFjxXhsj9cVcm8M1Lq1g42NchZs40898dtbiRrIyA2IZvVCq8citHJKMOdcybcbeDD4%2B5e%2BBjqkAdCfNweKRDDwH4D0tycbV1kvcfh8y9qecSSnYu4uWW5KLsd8P3mlljpVoq42fGg65g%2B%2FDLOUgu8GMSmCYolLh5QUYkqjG%2Fv7EkPNfw8zSGpbIzecCkLM2NlFP%2Bk9ZRp%2FEYOHsjhIQDmxecDDMyICjH%2BxBSTGrFQQztXohnxn3V1xWyji0Jt63Jlx09ERgn%2BwtYQfp7XewDXas9oD3FqAZ3ubbkrg&X-Amz-Signature=158f759fc67f183147475fa5450e02ee63a41b5e6693c52447cc9d2f31bcd1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7R6XXI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDadEOtm3fyW4y2m8eYlGzfjYy%2Br6rQgHeZzZQZA9DSIQIhAO0Darj7TXwlkCXz2TaRT8ZtR8c4rkYkWfhjtBmrIEJMKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN%2B5jdnVMhNfMBEvMq3ANKlJYoA3qtFGa1ZQxBU0wcdHexgoZmGSR0833m64zdj9PIgPFi9RTJ3M9PkMxwexD2l6FAPaGFntF1aFIJg16TSHJjQ7OIwEvuIAaa7SUOjK7BjtyFl5xwtE1OSF3mbv06u97BkNoelEYtAy1WCNPQptQl0aJiq4W3SeAIA5X5pLtvWMeuFzeY0lLhBKy65Z%2Bdr%2FqQVWucRWZjLlVGX2bbg35Ej2IjFNp1JH4tprYrxbI%2F8lSmfMhqS5Hozw1M6kzsB9EikYI%2B%2BSVcrv9iyBZdrRdT1aaIhwTeBe%2BjkenGUUwg47Wl6oTOnMspQZxoWX5Ub64EN7aGEbNU8Z4hsZmLWZASIWbuSii%2FqHEcqSyfV0mQI%2BrlMFNY9TngdBYnzQP%2Bb89Q6Lu2guBcbiG1zytcQGUNksdWK2J0%2FfDIWJIvJ7NiqjtKe8R5JZpqhQt9h8EE0ovqwLVTc5kTsbNrag1KkaFI1T6mR38yBjnp42Q5BkPxQ3rMin8nYiKuqb0WLq9Ep%2FHFpKEtEuosNdYn7MT4auaSCDUL5kiwUChaziHK1C2e%2Fm6xCUqFrGcNTFFjxXhsj9cVcm8M1Lq1g42NchZs40898dtbiRrIyA2IZvVCq8citHJKMOdcybcbeDD4%2B5e%2BBjqkAdCfNweKRDDwH4D0tycbV1kvcfh8y9qecSSnYu4uWW5KLsd8P3mlljpVoq42fGg65g%2B%2FDLOUgu8GMSmCYolLh5QUYkqjG%2Fv7EkPNfw8zSGpbIzecCkLM2NlFP%2Bk9ZRp%2FEYOHsjhIQDmxecDDMyICjH%2BxBSTGrFQQztXohnxn3V1xWyji0Jt63Jlx09ERgn%2BwtYQfp7XewDXas9oD3FqAZ3ubbkrg&X-Amz-Signature=e62e065fc2417b525cf5a61ec648cdaf71041845be9de4b73aba877d38308d82&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7R6XXI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDadEOtm3fyW4y2m8eYlGzfjYy%2Br6rQgHeZzZQZA9DSIQIhAO0Darj7TXwlkCXz2TaRT8ZtR8c4rkYkWfhjtBmrIEJMKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN%2B5jdnVMhNfMBEvMq3ANKlJYoA3qtFGa1ZQxBU0wcdHexgoZmGSR0833m64zdj9PIgPFi9RTJ3M9PkMxwexD2l6FAPaGFntF1aFIJg16TSHJjQ7OIwEvuIAaa7SUOjK7BjtyFl5xwtE1OSF3mbv06u97BkNoelEYtAy1WCNPQptQl0aJiq4W3SeAIA5X5pLtvWMeuFzeY0lLhBKy65Z%2Bdr%2FqQVWucRWZjLlVGX2bbg35Ej2IjFNp1JH4tprYrxbI%2F8lSmfMhqS5Hozw1M6kzsB9EikYI%2B%2BSVcrv9iyBZdrRdT1aaIhwTeBe%2BjkenGUUwg47Wl6oTOnMspQZxoWX5Ub64EN7aGEbNU8Z4hsZmLWZASIWbuSii%2FqHEcqSyfV0mQI%2BrlMFNY9TngdBYnzQP%2Bb89Q6Lu2guBcbiG1zytcQGUNksdWK2J0%2FfDIWJIvJ7NiqjtKe8R5JZpqhQt9h8EE0ovqwLVTc5kTsbNrag1KkaFI1T6mR38yBjnp42Q5BkPxQ3rMin8nYiKuqb0WLq9Ep%2FHFpKEtEuosNdYn7MT4auaSCDUL5kiwUChaziHK1C2e%2Fm6xCUqFrGcNTFFjxXhsj9cVcm8M1Lq1g42NchZs40898dtbiRrIyA2IZvVCq8citHJKMOdcybcbeDD4%2B5e%2BBjqkAdCfNweKRDDwH4D0tycbV1kvcfh8y9qecSSnYu4uWW5KLsd8P3mlljpVoq42fGg65g%2B%2FDLOUgu8GMSmCYolLh5QUYkqjG%2Fv7EkPNfw8zSGpbIzecCkLM2NlFP%2Bk9ZRp%2FEYOHsjhIQDmxecDDMyICjH%2BxBSTGrFQQztXohnxn3V1xWyji0Jt63Jlx09ERgn%2BwtYQfp7XewDXas9oD3FqAZ3ubbkrg&X-Amz-Signature=398c70e2595c0429920cb7957bd714859badd21f3f186c10cfd92c02906684c9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

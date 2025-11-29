---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJICD7J%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeu6btxUPj4LlUlz7kUIfAXrYB%2F0ytn1og%2FiY7rJWgYAiAfi0UxWrrJcWp%2FpTNcS6SpqQiMzwqk%2BA3VQrxa1jUqsiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSrAUZmL9B5Dy%2Ff3KtwDVUukwrHgMSdqD8lafvwaNaNgzqwq6ux%2Bg3n25cIm2EWSd8X0dFDHjKNIvtU33Q9cHzBIg7WY5rTS1CrbP03A7mQVBDOpLomSSkn%2FJ%2FjBepPgx%2BlvtIIjEOyvacBnkNYHG9zgwgvQ1CpXMk%2Fcr%2FsMd95atfLRNCthphXnVsESNfeHHINe6Bea0CQKScq3zoOvLP8f%2Fb%2Fr8sosse5KIzjqFB1%2ByKlLaEgNWhrn5DjO7Q6orPpGDWTXWMYpDSEDMdndXz3XQHMitupM9fdN91hKkeYNV6Cs2m%2BsDepDS5HazZ7FjwUfVSxEgr4vJzXBCmXZk7Fq0h%2BymNEUryzlMMXHcZhxsySzgDZaQwE7PH841rt8Hr92yE9vg2HNGbglZltp4ORtiMf4uwCnZJslc347xk9VOtNWPmzbTkECFWPeNrChvxKJYngaUWh65z7BT2WQHMqJjMKCPBQkKTQX0SomCov88hUO8OawUJhqShY%2Bc%2BEzMYu1E8hYjVa6UFt%2Fjda1Fuga0xQMSQfPNIKUZ4GS3n3WRaRUJbsmYRAEWnc1QOiZOa3pAroS64yEJpSUp63HNQcQ3qz66%2FD%2FwuC4GaL%2BgoR7dINZrScgqdH85fhzESqPJ7ei9fMQVEvW%2FakwtvinyQY6pgHaZoXgdU6Gair%2FyEUURCQa%2Bj9cbvZo7g8kNRZgqzVuooatdJpOIVa6QZGy1qUDNEP%2FVrnaTtRXTWWGBNcQ1WiurqaOcq%2FPl3ChU3C8BlRuerfGjORYSyMYGpBZDbrc0oZ3Ud%2BEtr%2F3nY01F6vuMdNBHL9lHIgJ2SSz2Tr0reGTZT%2FpVNGT8BUGFrH%2B2OYnCr6YEesynQUOdJs3lLwNMO5kYLeV31dO&X-Amz-Signature=1355ce0da1f26267661f19565daa05c6618c56d3fc488b44beaa68b578a4cdf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJICD7J%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeu6btxUPj4LlUlz7kUIfAXrYB%2F0ytn1og%2FiY7rJWgYAiAfi0UxWrrJcWp%2FpTNcS6SpqQiMzwqk%2BA3VQrxa1jUqsiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSrAUZmL9B5Dy%2Ff3KtwDVUukwrHgMSdqD8lafvwaNaNgzqwq6ux%2Bg3n25cIm2EWSd8X0dFDHjKNIvtU33Q9cHzBIg7WY5rTS1CrbP03A7mQVBDOpLomSSkn%2FJ%2FjBepPgx%2BlvtIIjEOyvacBnkNYHG9zgwgvQ1CpXMk%2Fcr%2FsMd95atfLRNCthphXnVsESNfeHHINe6Bea0CQKScq3zoOvLP8f%2Fb%2Fr8sosse5KIzjqFB1%2ByKlLaEgNWhrn5DjO7Q6orPpGDWTXWMYpDSEDMdndXz3XQHMitupM9fdN91hKkeYNV6Cs2m%2BsDepDS5HazZ7FjwUfVSxEgr4vJzXBCmXZk7Fq0h%2BymNEUryzlMMXHcZhxsySzgDZaQwE7PH841rt8Hr92yE9vg2HNGbglZltp4ORtiMf4uwCnZJslc347xk9VOtNWPmzbTkECFWPeNrChvxKJYngaUWh65z7BT2WQHMqJjMKCPBQkKTQX0SomCov88hUO8OawUJhqShY%2Bc%2BEzMYu1E8hYjVa6UFt%2Fjda1Fuga0xQMSQfPNIKUZ4GS3n3WRaRUJbsmYRAEWnc1QOiZOa3pAroS64yEJpSUp63HNQcQ3qz66%2FD%2FwuC4GaL%2BgoR7dINZrScgqdH85fhzESqPJ7ei9fMQVEvW%2FakwtvinyQY6pgHaZoXgdU6Gair%2FyEUURCQa%2Bj9cbvZo7g8kNRZgqzVuooatdJpOIVa6QZGy1qUDNEP%2FVrnaTtRXTWWGBNcQ1WiurqaOcq%2FPl3ChU3C8BlRuerfGjORYSyMYGpBZDbrc0oZ3Ud%2BEtr%2F3nY01F6vuMdNBHL9lHIgJ2SSz2Tr0reGTZT%2FpVNGT8BUGFrH%2B2OYnCr6YEesynQUOdJs3lLwNMO5kYLeV31dO&X-Amz-Signature=6ba7bf36393082432b354b9f6cd2621f39d865ec2774359fec23b8fee29609cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJICD7J%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeu6btxUPj4LlUlz7kUIfAXrYB%2F0ytn1og%2FiY7rJWgYAiAfi0UxWrrJcWp%2FpTNcS6SpqQiMzwqk%2BA3VQrxa1jUqsiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSrAUZmL9B5Dy%2Ff3KtwDVUukwrHgMSdqD8lafvwaNaNgzqwq6ux%2Bg3n25cIm2EWSd8X0dFDHjKNIvtU33Q9cHzBIg7WY5rTS1CrbP03A7mQVBDOpLomSSkn%2FJ%2FjBepPgx%2BlvtIIjEOyvacBnkNYHG9zgwgvQ1CpXMk%2Fcr%2FsMd95atfLRNCthphXnVsESNfeHHINe6Bea0CQKScq3zoOvLP8f%2Fb%2Fr8sosse5KIzjqFB1%2ByKlLaEgNWhrn5DjO7Q6orPpGDWTXWMYpDSEDMdndXz3XQHMitupM9fdN91hKkeYNV6Cs2m%2BsDepDS5HazZ7FjwUfVSxEgr4vJzXBCmXZk7Fq0h%2BymNEUryzlMMXHcZhxsySzgDZaQwE7PH841rt8Hr92yE9vg2HNGbglZltp4ORtiMf4uwCnZJslc347xk9VOtNWPmzbTkECFWPeNrChvxKJYngaUWh65z7BT2WQHMqJjMKCPBQkKTQX0SomCov88hUO8OawUJhqShY%2Bc%2BEzMYu1E8hYjVa6UFt%2Fjda1Fuga0xQMSQfPNIKUZ4GS3n3WRaRUJbsmYRAEWnc1QOiZOa3pAroS64yEJpSUp63HNQcQ3qz66%2FD%2FwuC4GaL%2BgoR7dINZrScgqdH85fhzESqPJ7ei9fMQVEvW%2FakwtvinyQY6pgHaZoXgdU6Gair%2FyEUURCQa%2Bj9cbvZo7g8kNRZgqzVuooatdJpOIVa6QZGy1qUDNEP%2FVrnaTtRXTWWGBNcQ1WiurqaOcq%2FPl3ChU3C8BlRuerfGjORYSyMYGpBZDbrc0oZ3Ud%2BEtr%2F3nY01F6vuMdNBHL9lHIgJ2SSz2Tr0reGTZT%2FpVNGT8BUGFrH%2B2OYnCr6YEesynQUOdJs3lLwNMO5kYLeV31dO&X-Amz-Signature=d38f4b9a27b9a75a4a6f4d4507c29dba33f7b11efeab524ef8b77446a72e79a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJICD7J%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeu6btxUPj4LlUlz7kUIfAXrYB%2F0ytn1og%2FiY7rJWgYAiAfi0UxWrrJcWp%2FpTNcS6SpqQiMzwqk%2BA3VQrxa1jUqsiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSrAUZmL9B5Dy%2Ff3KtwDVUukwrHgMSdqD8lafvwaNaNgzqwq6ux%2Bg3n25cIm2EWSd8X0dFDHjKNIvtU33Q9cHzBIg7WY5rTS1CrbP03A7mQVBDOpLomSSkn%2FJ%2FjBepPgx%2BlvtIIjEOyvacBnkNYHG9zgwgvQ1CpXMk%2Fcr%2FsMd95atfLRNCthphXnVsESNfeHHINe6Bea0CQKScq3zoOvLP8f%2Fb%2Fr8sosse5KIzjqFB1%2ByKlLaEgNWhrn5DjO7Q6orPpGDWTXWMYpDSEDMdndXz3XQHMitupM9fdN91hKkeYNV6Cs2m%2BsDepDS5HazZ7FjwUfVSxEgr4vJzXBCmXZk7Fq0h%2BymNEUryzlMMXHcZhxsySzgDZaQwE7PH841rt8Hr92yE9vg2HNGbglZltp4ORtiMf4uwCnZJslc347xk9VOtNWPmzbTkECFWPeNrChvxKJYngaUWh65z7BT2WQHMqJjMKCPBQkKTQX0SomCov88hUO8OawUJhqShY%2Bc%2BEzMYu1E8hYjVa6UFt%2Fjda1Fuga0xQMSQfPNIKUZ4GS3n3WRaRUJbsmYRAEWnc1QOiZOa3pAroS64yEJpSUp63HNQcQ3qz66%2FD%2FwuC4GaL%2BgoR7dINZrScgqdH85fhzESqPJ7ei9fMQVEvW%2FakwtvinyQY6pgHaZoXgdU6Gair%2FyEUURCQa%2Bj9cbvZo7g8kNRZgqzVuooatdJpOIVa6QZGy1qUDNEP%2FVrnaTtRXTWWGBNcQ1WiurqaOcq%2FPl3ChU3C8BlRuerfGjORYSyMYGpBZDbrc0oZ3Ud%2BEtr%2F3nY01F6vuMdNBHL9lHIgJ2SSz2Tr0reGTZT%2FpVNGT8BUGFrH%2B2OYnCr6YEesynQUOdJs3lLwNMO5kYLeV31dO&X-Amz-Signature=b7a4d8be5c6f9880ae2c3fefca7d821bb8e344854fa9284837107108662e24ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJICD7J%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeu6btxUPj4LlUlz7kUIfAXrYB%2F0ytn1og%2FiY7rJWgYAiAfi0UxWrrJcWp%2FpTNcS6SpqQiMzwqk%2BA3VQrxa1jUqsiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSrAUZmL9B5Dy%2Ff3KtwDVUukwrHgMSdqD8lafvwaNaNgzqwq6ux%2Bg3n25cIm2EWSd8X0dFDHjKNIvtU33Q9cHzBIg7WY5rTS1CrbP03A7mQVBDOpLomSSkn%2FJ%2FjBepPgx%2BlvtIIjEOyvacBnkNYHG9zgwgvQ1CpXMk%2Fcr%2FsMd95atfLRNCthphXnVsESNfeHHINe6Bea0CQKScq3zoOvLP8f%2Fb%2Fr8sosse5KIzjqFB1%2ByKlLaEgNWhrn5DjO7Q6orPpGDWTXWMYpDSEDMdndXz3XQHMitupM9fdN91hKkeYNV6Cs2m%2BsDepDS5HazZ7FjwUfVSxEgr4vJzXBCmXZk7Fq0h%2BymNEUryzlMMXHcZhxsySzgDZaQwE7PH841rt8Hr92yE9vg2HNGbglZltp4ORtiMf4uwCnZJslc347xk9VOtNWPmzbTkECFWPeNrChvxKJYngaUWh65z7BT2WQHMqJjMKCPBQkKTQX0SomCov88hUO8OawUJhqShY%2Bc%2BEzMYu1E8hYjVa6UFt%2Fjda1Fuga0xQMSQfPNIKUZ4GS3n3WRaRUJbsmYRAEWnc1QOiZOa3pAroS64yEJpSUp63HNQcQ3qz66%2FD%2FwuC4GaL%2BgoR7dINZrScgqdH85fhzESqPJ7ei9fMQVEvW%2FakwtvinyQY6pgHaZoXgdU6Gair%2FyEUURCQa%2Bj9cbvZo7g8kNRZgqzVuooatdJpOIVa6QZGy1qUDNEP%2FVrnaTtRXTWWGBNcQ1WiurqaOcq%2FPl3ChU3C8BlRuerfGjORYSyMYGpBZDbrc0oZ3Ud%2BEtr%2F3nY01F6vuMdNBHL9lHIgJ2SSz2Tr0reGTZT%2FpVNGT8BUGFrH%2B2OYnCr6YEesynQUOdJs3lLwNMO5kYLeV31dO&X-Amz-Signature=f915deedfca3d2994f0fb434147a68b7a135db383f74d5b0eb27084b28e1a660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJICD7J%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeu6btxUPj4LlUlz7kUIfAXrYB%2F0ytn1og%2FiY7rJWgYAiAfi0UxWrrJcWp%2FpTNcS6SpqQiMzwqk%2BA3VQrxa1jUqsiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSrAUZmL9B5Dy%2Ff3KtwDVUukwrHgMSdqD8lafvwaNaNgzqwq6ux%2Bg3n25cIm2EWSd8X0dFDHjKNIvtU33Q9cHzBIg7WY5rTS1CrbP03A7mQVBDOpLomSSkn%2FJ%2FjBepPgx%2BlvtIIjEOyvacBnkNYHG9zgwgvQ1CpXMk%2Fcr%2FsMd95atfLRNCthphXnVsESNfeHHINe6Bea0CQKScq3zoOvLP8f%2Fb%2Fr8sosse5KIzjqFB1%2ByKlLaEgNWhrn5DjO7Q6orPpGDWTXWMYpDSEDMdndXz3XQHMitupM9fdN91hKkeYNV6Cs2m%2BsDepDS5HazZ7FjwUfVSxEgr4vJzXBCmXZk7Fq0h%2BymNEUryzlMMXHcZhxsySzgDZaQwE7PH841rt8Hr92yE9vg2HNGbglZltp4ORtiMf4uwCnZJslc347xk9VOtNWPmzbTkECFWPeNrChvxKJYngaUWh65z7BT2WQHMqJjMKCPBQkKTQX0SomCov88hUO8OawUJhqShY%2Bc%2BEzMYu1E8hYjVa6UFt%2Fjda1Fuga0xQMSQfPNIKUZ4GS3n3WRaRUJbsmYRAEWnc1QOiZOa3pAroS64yEJpSUp63HNQcQ3qz66%2FD%2FwuC4GaL%2BgoR7dINZrScgqdH85fhzESqPJ7ei9fMQVEvW%2FakwtvinyQY6pgHaZoXgdU6Gair%2FyEUURCQa%2Bj9cbvZo7g8kNRZgqzVuooatdJpOIVa6QZGy1qUDNEP%2FVrnaTtRXTWWGBNcQ1WiurqaOcq%2FPl3ChU3C8BlRuerfGjORYSyMYGpBZDbrc0oZ3Ud%2BEtr%2F3nY01F6vuMdNBHL9lHIgJ2SSz2Tr0reGTZT%2FpVNGT8BUGFrH%2B2OYnCr6YEesynQUOdJs3lLwNMO5kYLeV31dO&X-Amz-Signature=09e0863c0d183166339bf8220de2757b46b7df6faf6512624cc6aaff1545cfd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJICD7J%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeu6btxUPj4LlUlz7kUIfAXrYB%2F0ytn1og%2FiY7rJWgYAiAfi0UxWrrJcWp%2FpTNcS6SpqQiMzwqk%2BA3VQrxa1jUqsiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSrAUZmL9B5Dy%2Ff3KtwDVUukwrHgMSdqD8lafvwaNaNgzqwq6ux%2Bg3n25cIm2EWSd8X0dFDHjKNIvtU33Q9cHzBIg7WY5rTS1CrbP03A7mQVBDOpLomSSkn%2FJ%2FjBepPgx%2BlvtIIjEOyvacBnkNYHG9zgwgvQ1CpXMk%2Fcr%2FsMd95atfLRNCthphXnVsESNfeHHINe6Bea0CQKScq3zoOvLP8f%2Fb%2Fr8sosse5KIzjqFB1%2ByKlLaEgNWhrn5DjO7Q6orPpGDWTXWMYpDSEDMdndXz3XQHMitupM9fdN91hKkeYNV6Cs2m%2BsDepDS5HazZ7FjwUfVSxEgr4vJzXBCmXZk7Fq0h%2BymNEUryzlMMXHcZhxsySzgDZaQwE7PH841rt8Hr92yE9vg2HNGbglZltp4ORtiMf4uwCnZJslc347xk9VOtNWPmzbTkECFWPeNrChvxKJYngaUWh65z7BT2WQHMqJjMKCPBQkKTQX0SomCov88hUO8OawUJhqShY%2Bc%2BEzMYu1E8hYjVa6UFt%2Fjda1Fuga0xQMSQfPNIKUZ4GS3n3WRaRUJbsmYRAEWnc1QOiZOa3pAroS64yEJpSUp63HNQcQ3qz66%2FD%2FwuC4GaL%2BgoR7dINZrScgqdH85fhzESqPJ7ei9fMQVEvW%2FakwtvinyQY6pgHaZoXgdU6Gair%2FyEUURCQa%2Bj9cbvZo7g8kNRZgqzVuooatdJpOIVa6QZGy1qUDNEP%2FVrnaTtRXTWWGBNcQ1WiurqaOcq%2FPl3ChU3C8BlRuerfGjORYSyMYGpBZDbrc0oZ3Ud%2BEtr%2F3nY01F6vuMdNBHL9lHIgJ2SSz2Tr0reGTZT%2FpVNGT8BUGFrH%2B2OYnCr6YEesynQUOdJs3lLwNMO5kYLeV31dO&X-Amz-Signature=f76bf6d58f4303304df75ee36efe5db732cc45b3fdd2ae1597f0d81c63bf9f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

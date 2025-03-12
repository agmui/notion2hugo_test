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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTOJRYI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEaSNWpKY3CUHtfup31%2FzQxGBRd%2BA%2B1InzJW3fTItTPxAiAe0Wv4xXOeEuPdt8k7PPY31Ir7w3mWPRhadLw4WYkMFyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzQJ6BrraQbrPfiECKtwDO8EK%2BOyNCqKJZaLInatFPWCZVKjdSlp32%2F6kNRY8eSa3tFEhiIqQzP92s0r%2B5pYZjkX9g3kjGxawCm%2Fg2LTyU%2FEpb6DeD%2BWI3v84ulpBsuRhV%2BaTJ67C4ArRnN6R9CwYkSPHG%2BZ0BGbvtksaR5XESE%2FvdskwMWpJnjGxTZF06XknOkD5DqKP97%2FStNp0gRgVkkJTtfEeZDlsMjCq8VV5J8Bm8as19uew4rA1lOXjbKOQ4f3GiMLPfSVVmzH98gO9ra8ik9VF2zysyTr6VIakyXg4VlMlleOLyYeFLpIbpsRdOBb62L6xNy6P4vuUAZUt%2FQkvzQhM235aPZ8ueFfF98CDwjmsmMyhEpytViFaLSQhrWaQlPUkyEvz5fILMPIYUEsDybJ9%2B7g9d%2BNSsxipcV3vF3T6UHHGKNDuN%2F6xJjmlmC0ziR%2FGvm%2FKOm8wCLTMsJSkWIeFnnXdvCVQR9l1Ji%2FKaxKI2xWkVPMge6K0en%2B3kmmiTtxl%2BntooHspRPXw9HQDi%2B5W6TFt%2Boj9TAAujk18kOaC18wH7K5OLr7cHGtaopjgAvTjct6deGy1a4Z5sgWirhzFjo9ZR04TnlQNqyFpzXdknXQ4ce4UkhhLrD9qHdSCt8v5r2cF%2BkYwhJ%2FGvgY6pgEi6w2fhrt5SLV6JreoiACtVNeKjw5B3WWoVLV67slmngCPyeE8RPJLdLhStoh6RAx8oh2%2Be9xMavXEQ%2FSc8hs4Iv71D%2FQutWYbWQw10xT9JeDApq6Rh6YNkjBjKwV23nMwv0M8ZiLs2kkGzV%2F%2FSJQqLn6ZTb7Wgq4ohyICFwiga3ZmwvVipGZE4pbYF3kslCTELSWwx4oh0civab5c6%2FCnPg2b0uO%2F&X-Amz-Signature=e9be2ec0212f0a7fbfb97a2ec9cb9f2cda6ae9ca17d319c79867b90e5622882e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTOJRYI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEaSNWpKY3CUHtfup31%2FzQxGBRd%2BA%2B1InzJW3fTItTPxAiAe0Wv4xXOeEuPdt8k7PPY31Ir7w3mWPRhadLw4WYkMFyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzQJ6BrraQbrPfiECKtwDO8EK%2BOyNCqKJZaLInatFPWCZVKjdSlp32%2F6kNRY8eSa3tFEhiIqQzP92s0r%2B5pYZjkX9g3kjGxawCm%2Fg2LTyU%2FEpb6DeD%2BWI3v84ulpBsuRhV%2BaTJ67C4ArRnN6R9CwYkSPHG%2BZ0BGbvtksaR5XESE%2FvdskwMWpJnjGxTZF06XknOkD5DqKP97%2FStNp0gRgVkkJTtfEeZDlsMjCq8VV5J8Bm8as19uew4rA1lOXjbKOQ4f3GiMLPfSVVmzH98gO9ra8ik9VF2zysyTr6VIakyXg4VlMlleOLyYeFLpIbpsRdOBb62L6xNy6P4vuUAZUt%2FQkvzQhM235aPZ8ueFfF98CDwjmsmMyhEpytViFaLSQhrWaQlPUkyEvz5fILMPIYUEsDybJ9%2B7g9d%2BNSsxipcV3vF3T6UHHGKNDuN%2F6xJjmlmC0ziR%2FGvm%2FKOm8wCLTMsJSkWIeFnnXdvCVQR9l1Ji%2FKaxKI2xWkVPMge6K0en%2B3kmmiTtxl%2BntooHspRPXw9HQDi%2B5W6TFt%2Boj9TAAujk18kOaC18wH7K5OLr7cHGtaopjgAvTjct6deGy1a4Z5sgWirhzFjo9ZR04TnlQNqyFpzXdknXQ4ce4UkhhLrD9qHdSCt8v5r2cF%2BkYwhJ%2FGvgY6pgEi6w2fhrt5SLV6JreoiACtVNeKjw5B3WWoVLV67slmngCPyeE8RPJLdLhStoh6RAx8oh2%2Be9xMavXEQ%2FSc8hs4Iv71D%2FQutWYbWQw10xT9JeDApq6Rh6YNkjBjKwV23nMwv0M8ZiLs2kkGzV%2F%2FSJQqLn6ZTb7Wgq4ohyICFwiga3ZmwvVipGZE4pbYF3kslCTELSWwx4oh0civab5c6%2FCnPg2b0uO%2F&X-Amz-Signature=9ce253cb3f62a61067e43794ed7324adbdcd271d783076f6b8d037e42e576504&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTOJRYI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEaSNWpKY3CUHtfup31%2FzQxGBRd%2BA%2B1InzJW3fTItTPxAiAe0Wv4xXOeEuPdt8k7PPY31Ir7w3mWPRhadLw4WYkMFyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzQJ6BrraQbrPfiECKtwDO8EK%2BOyNCqKJZaLInatFPWCZVKjdSlp32%2F6kNRY8eSa3tFEhiIqQzP92s0r%2B5pYZjkX9g3kjGxawCm%2Fg2LTyU%2FEpb6DeD%2BWI3v84ulpBsuRhV%2BaTJ67C4ArRnN6R9CwYkSPHG%2BZ0BGbvtksaR5XESE%2FvdskwMWpJnjGxTZF06XknOkD5DqKP97%2FStNp0gRgVkkJTtfEeZDlsMjCq8VV5J8Bm8as19uew4rA1lOXjbKOQ4f3GiMLPfSVVmzH98gO9ra8ik9VF2zysyTr6VIakyXg4VlMlleOLyYeFLpIbpsRdOBb62L6xNy6P4vuUAZUt%2FQkvzQhM235aPZ8ueFfF98CDwjmsmMyhEpytViFaLSQhrWaQlPUkyEvz5fILMPIYUEsDybJ9%2B7g9d%2BNSsxipcV3vF3T6UHHGKNDuN%2F6xJjmlmC0ziR%2FGvm%2FKOm8wCLTMsJSkWIeFnnXdvCVQR9l1Ji%2FKaxKI2xWkVPMge6K0en%2B3kmmiTtxl%2BntooHspRPXw9HQDi%2B5W6TFt%2Boj9TAAujk18kOaC18wH7K5OLr7cHGtaopjgAvTjct6deGy1a4Z5sgWirhzFjo9ZR04TnlQNqyFpzXdknXQ4ce4UkhhLrD9qHdSCt8v5r2cF%2BkYwhJ%2FGvgY6pgEi6w2fhrt5SLV6JreoiACtVNeKjw5B3WWoVLV67slmngCPyeE8RPJLdLhStoh6RAx8oh2%2Be9xMavXEQ%2FSc8hs4Iv71D%2FQutWYbWQw10xT9JeDApq6Rh6YNkjBjKwV23nMwv0M8ZiLs2kkGzV%2F%2FSJQqLn6ZTb7Wgq4ohyICFwiga3ZmwvVipGZE4pbYF3kslCTELSWwx4oh0civab5c6%2FCnPg2b0uO%2F&X-Amz-Signature=ed2ec07f88812e4f474e5e8ae2f96bc92b683871d64be9a4a7e8185dba66b3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTOJRYI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEaSNWpKY3CUHtfup31%2FzQxGBRd%2BA%2B1InzJW3fTItTPxAiAe0Wv4xXOeEuPdt8k7PPY31Ir7w3mWPRhadLw4WYkMFyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzQJ6BrraQbrPfiECKtwDO8EK%2BOyNCqKJZaLInatFPWCZVKjdSlp32%2F6kNRY8eSa3tFEhiIqQzP92s0r%2B5pYZjkX9g3kjGxawCm%2Fg2LTyU%2FEpb6DeD%2BWI3v84ulpBsuRhV%2BaTJ67C4ArRnN6R9CwYkSPHG%2BZ0BGbvtksaR5XESE%2FvdskwMWpJnjGxTZF06XknOkD5DqKP97%2FStNp0gRgVkkJTtfEeZDlsMjCq8VV5J8Bm8as19uew4rA1lOXjbKOQ4f3GiMLPfSVVmzH98gO9ra8ik9VF2zysyTr6VIakyXg4VlMlleOLyYeFLpIbpsRdOBb62L6xNy6P4vuUAZUt%2FQkvzQhM235aPZ8ueFfF98CDwjmsmMyhEpytViFaLSQhrWaQlPUkyEvz5fILMPIYUEsDybJ9%2B7g9d%2BNSsxipcV3vF3T6UHHGKNDuN%2F6xJjmlmC0ziR%2FGvm%2FKOm8wCLTMsJSkWIeFnnXdvCVQR9l1Ji%2FKaxKI2xWkVPMge6K0en%2B3kmmiTtxl%2BntooHspRPXw9HQDi%2B5W6TFt%2Boj9TAAujk18kOaC18wH7K5OLr7cHGtaopjgAvTjct6deGy1a4Z5sgWirhzFjo9ZR04TnlQNqyFpzXdknXQ4ce4UkhhLrD9qHdSCt8v5r2cF%2BkYwhJ%2FGvgY6pgEi6w2fhrt5SLV6JreoiACtVNeKjw5B3WWoVLV67slmngCPyeE8RPJLdLhStoh6RAx8oh2%2Be9xMavXEQ%2FSc8hs4Iv71D%2FQutWYbWQw10xT9JeDApq6Rh6YNkjBjKwV23nMwv0M8ZiLs2kkGzV%2F%2FSJQqLn6ZTb7Wgq4ohyICFwiga3ZmwvVipGZE4pbYF3kslCTELSWwx4oh0civab5c6%2FCnPg2b0uO%2F&X-Amz-Signature=b6b570062aad21e914749256d597f0e24431a8e0365de85a2c514581c0cdb326&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTOJRYI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEaSNWpKY3CUHtfup31%2FzQxGBRd%2BA%2B1InzJW3fTItTPxAiAe0Wv4xXOeEuPdt8k7PPY31Ir7w3mWPRhadLw4WYkMFyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzQJ6BrraQbrPfiECKtwDO8EK%2BOyNCqKJZaLInatFPWCZVKjdSlp32%2F6kNRY8eSa3tFEhiIqQzP92s0r%2B5pYZjkX9g3kjGxawCm%2Fg2LTyU%2FEpb6DeD%2BWI3v84ulpBsuRhV%2BaTJ67C4ArRnN6R9CwYkSPHG%2BZ0BGbvtksaR5XESE%2FvdskwMWpJnjGxTZF06XknOkD5DqKP97%2FStNp0gRgVkkJTtfEeZDlsMjCq8VV5J8Bm8as19uew4rA1lOXjbKOQ4f3GiMLPfSVVmzH98gO9ra8ik9VF2zysyTr6VIakyXg4VlMlleOLyYeFLpIbpsRdOBb62L6xNy6P4vuUAZUt%2FQkvzQhM235aPZ8ueFfF98CDwjmsmMyhEpytViFaLSQhrWaQlPUkyEvz5fILMPIYUEsDybJ9%2B7g9d%2BNSsxipcV3vF3T6UHHGKNDuN%2F6xJjmlmC0ziR%2FGvm%2FKOm8wCLTMsJSkWIeFnnXdvCVQR9l1Ji%2FKaxKI2xWkVPMge6K0en%2B3kmmiTtxl%2BntooHspRPXw9HQDi%2B5W6TFt%2Boj9TAAujk18kOaC18wH7K5OLr7cHGtaopjgAvTjct6deGy1a4Z5sgWirhzFjo9ZR04TnlQNqyFpzXdknXQ4ce4UkhhLrD9qHdSCt8v5r2cF%2BkYwhJ%2FGvgY6pgEi6w2fhrt5SLV6JreoiACtVNeKjw5B3WWoVLV67slmngCPyeE8RPJLdLhStoh6RAx8oh2%2Be9xMavXEQ%2FSc8hs4Iv71D%2FQutWYbWQw10xT9JeDApq6Rh6YNkjBjKwV23nMwv0M8ZiLs2kkGzV%2F%2FSJQqLn6ZTb7Wgq4ohyICFwiga3ZmwvVipGZE4pbYF3kslCTELSWwx4oh0civab5c6%2FCnPg2b0uO%2F&X-Amz-Signature=97f286fd379c0e312f1ea55d9d553edd9d9f22040d30d441113478acb7d7ddcd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTOJRYI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEaSNWpKY3CUHtfup31%2FzQxGBRd%2BA%2B1InzJW3fTItTPxAiAe0Wv4xXOeEuPdt8k7PPY31Ir7w3mWPRhadLw4WYkMFyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzQJ6BrraQbrPfiECKtwDO8EK%2BOyNCqKJZaLInatFPWCZVKjdSlp32%2F6kNRY8eSa3tFEhiIqQzP92s0r%2B5pYZjkX9g3kjGxawCm%2Fg2LTyU%2FEpb6DeD%2BWI3v84ulpBsuRhV%2BaTJ67C4ArRnN6R9CwYkSPHG%2BZ0BGbvtksaR5XESE%2FvdskwMWpJnjGxTZF06XknOkD5DqKP97%2FStNp0gRgVkkJTtfEeZDlsMjCq8VV5J8Bm8as19uew4rA1lOXjbKOQ4f3GiMLPfSVVmzH98gO9ra8ik9VF2zysyTr6VIakyXg4VlMlleOLyYeFLpIbpsRdOBb62L6xNy6P4vuUAZUt%2FQkvzQhM235aPZ8ueFfF98CDwjmsmMyhEpytViFaLSQhrWaQlPUkyEvz5fILMPIYUEsDybJ9%2B7g9d%2BNSsxipcV3vF3T6UHHGKNDuN%2F6xJjmlmC0ziR%2FGvm%2FKOm8wCLTMsJSkWIeFnnXdvCVQR9l1Ji%2FKaxKI2xWkVPMge6K0en%2B3kmmiTtxl%2BntooHspRPXw9HQDi%2B5W6TFt%2Boj9TAAujk18kOaC18wH7K5OLr7cHGtaopjgAvTjct6deGy1a4Z5sgWirhzFjo9ZR04TnlQNqyFpzXdknXQ4ce4UkhhLrD9qHdSCt8v5r2cF%2BkYwhJ%2FGvgY6pgEi6w2fhrt5SLV6JreoiACtVNeKjw5B3WWoVLV67slmngCPyeE8RPJLdLhStoh6RAx8oh2%2Be9xMavXEQ%2FSc8hs4Iv71D%2FQutWYbWQw10xT9JeDApq6Rh6YNkjBjKwV23nMwv0M8ZiLs2kkGzV%2F%2FSJQqLn6ZTb7Wgq4ohyICFwiga3ZmwvVipGZE4pbYF3kslCTELSWwx4oh0civab5c6%2FCnPg2b0uO%2F&X-Amz-Signature=9b342443fc7b61a806fb0db6077102d483d70a33fb0727ff969c74e25c8d5ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTOJRYI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEaSNWpKY3CUHtfup31%2FzQxGBRd%2BA%2B1InzJW3fTItTPxAiAe0Wv4xXOeEuPdt8k7PPY31Ir7w3mWPRhadLw4WYkMFyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzQJ6BrraQbrPfiECKtwDO8EK%2BOyNCqKJZaLInatFPWCZVKjdSlp32%2F6kNRY8eSa3tFEhiIqQzP92s0r%2B5pYZjkX9g3kjGxawCm%2Fg2LTyU%2FEpb6DeD%2BWI3v84ulpBsuRhV%2BaTJ67C4ArRnN6R9CwYkSPHG%2BZ0BGbvtksaR5XESE%2FvdskwMWpJnjGxTZF06XknOkD5DqKP97%2FStNp0gRgVkkJTtfEeZDlsMjCq8VV5J8Bm8as19uew4rA1lOXjbKOQ4f3GiMLPfSVVmzH98gO9ra8ik9VF2zysyTr6VIakyXg4VlMlleOLyYeFLpIbpsRdOBb62L6xNy6P4vuUAZUt%2FQkvzQhM235aPZ8ueFfF98CDwjmsmMyhEpytViFaLSQhrWaQlPUkyEvz5fILMPIYUEsDybJ9%2B7g9d%2BNSsxipcV3vF3T6UHHGKNDuN%2F6xJjmlmC0ziR%2FGvm%2FKOm8wCLTMsJSkWIeFnnXdvCVQR9l1Ji%2FKaxKI2xWkVPMge6K0en%2B3kmmiTtxl%2BntooHspRPXw9HQDi%2B5W6TFt%2Boj9TAAujk18kOaC18wH7K5OLr7cHGtaopjgAvTjct6deGy1a4Z5sgWirhzFjo9ZR04TnlQNqyFpzXdknXQ4ce4UkhhLrD9qHdSCt8v5r2cF%2BkYwhJ%2FGvgY6pgEi6w2fhrt5SLV6JreoiACtVNeKjw5B3WWoVLV67slmngCPyeE8RPJLdLhStoh6RAx8oh2%2Be9xMavXEQ%2FSc8hs4Iv71D%2FQutWYbWQw10xT9JeDApq6Rh6YNkjBjKwV23nMwv0M8ZiLs2kkGzV%2F%2FSJQqLn6ZTb7Wgq4ohyICFwiga3ZmwvVipGZE4pbYF3kslCTELSWwx4oh0civab5c6%2FCnPg2b0uO%2F&X-Amz-Signature=72051cc35d2baf94cd9496689de6d33d313e8ab2d61859e54537c6787445880e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

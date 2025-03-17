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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAZVXNN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfpnqWZIF1BZrfDgUikPZK%2BjoJL%2F4yfFrjGKa5i57y3AIhAOIvC6qBBUF2a%2BZLWl%2B2bY32eBkzymeua3gL75f%2BZL4XKv8DCEcQABoMNjM3NDIzMTgzODA1IgwgKM62ZgxYODeq6Ukq3AMrnc08e9u2OWfhlOuKkM3Pd6O4H4nVDj5bhNSIlfVwrDgI01N6%2F4bUQKNJiBWOs9krIsWvNCpi7OjMKu%2FcV04p2vRuByqIINHvQLXXMoTBT5qb6P4sE1YZWZKj1tTXTh4zWTGDgqmU4eOX6OQhij3XNbtmcsmiQiitRyxMHllKyi9gu6KnojecGLDj39h0hIkM7e%2BFQR%2FjrwI9h44KXBfKp65l20vAP%2FVr8cSxFIYlBLimvqHxq%2Fra7Cb13ObEiZ5mn2c48fsoBJBmoOWB206QRxKSnzhPodcoZgee7JFu2WY0y9FT23Ps1C6LU0GqyOmz0dZHP5L3jwqUrziUWm6DDZMpXczKx3NRthTEuDqLUe0oRA41w%2BiFhNn0NzL9jXHwGbV744sqhnRl4tAawOWqc7ODvov4FYP%2B%2Baf3jzBcnwm1y6Hq9S2M%2B617qMcVQIW8hz83ECB4lhwNN1fNNdQ2aDVoLjTeDLZ1om%2FIItqKYlAJ8tZ%2FyhdoQA%2FR%2F63E8EULL3IcRhUK8%2F8IShnvZvuM5GLhB8gaWKnbs2sd0Zca%2BGm3BU85ijVJUZGPXWgUol95cHpXnQWt7H78y7ceGudZKkis3E%2B8YtwXCoYOraeha%2FDfT9eB72L60MDdzjCXyuC%2BBjqkAYdgluf1pPQCDE5GAfCPDDNFD9TBSMdCTE749lUdEkgYeTe1LCG0i5Dgs8MmOxBnsZ9Qu8f1ZuJ1mb8u86VVyucOZ2Bz91nzeojC04ZsEwTA%2FkOKDlCyrlAJLdReRA1VBugySJe3Oikxik9CRCsl7hcdCJIMQfwAO71eak6Rj%2BPqfc5DeQickqel%2BWdJ6qbplSacqY9mW6raHWStyNnumKkCwzoZ&X-Amz-Signature=ebaf4d11ecd5585f53b20e6575f5f0370ab788e1e247e33dc30b5e2a49496897&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAZVXNN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfpnqWZIF1BZrfDgUikPZK%2BjoJL%2F4yfFrjGKa5i57y3AIhAOIvC6qBBUF2a%2BZLWl%2B2bY32eBkzymeua3gL75f%2BZL4XKv8DCEcQABoMNjM3NDIzMTgzODA1IgwgKM62ZgxYODeq6Ukq3AMrnc08e9u2OWfhlOuKkM3Pd6O4H4nVDj5bhNSIlfVwrDgI01N6%2F4bUQKNJiBWOs9krIsWvNCpi7OjMKu%2FcV04p2vRuByqIINHvQLXXMoTBT5qb6P4sE1YZWZKj1tTXTh4zWTGDgqmU4eOX6OQhij3XNbtmcsmiQiitRyxMHllKyi9gu6KnojecGLDj39h0hIkM7e%2BFQR%2FjrwI9h44KXBfKp65l20vAP%2FVr8cSxFIYlBLimvqHxq%2Fra7Cb13ObEiZ5mn2c48fsoBJBmoOWB206QRxKSnzhPodcoZgee7JFu2WY0y9FT23Ps1C6LU0GqyOmz0dZHP5L3jwqUrziUWm6DDZMpXczKx3NRthTEuDqLUe0oRA41w%2BiFhNn0NzL9jXHwGbV744sqhnRl4tAawOWqc7ODvov4FYP%2B%2Baf3jzBcnwm1y6Hq9S2M%2B617qMcVQIW8hz83ECB4lhwNN1fNNdQ2aDVoLjTeDLZ1om%2FIItqKYlAJ8tZ%2FyhdoQA%2FR%2F63E8EULL3IcRhUK8%2F8IShnvZvuM5GLhB8gaWKnbs2sd0Zca%2BGm3BU85ijVJUZGPXWgUol95cHpXnQWt7H78y7ceGudZKkis3E%2B8YtwXCoYOraeha%2FDfT9eB72L60MDdzjCXyuC%2BBjqkAYdgluf1pPQCDE5GAfCPDDNFD9TBSMdCTE749lUdEkgYeTe1LCG0i5Dgs8MmOxBnsZ9Qu8f1ZuJ1mb8u86VVyucOZ2Bz91nzeojC04ZsEwTA%2FkOKDlCyrlAJLdReRA1VBugySJe3Oikxik9CRCsl7hcdCJIMQfwAO71eak6Rj%2BPqfc5DeQickqel%2BWdJ6qbplSacqY9mW6raHWStyNnumKkCwzoZ&X-Amz-Signature=23b2d2c3eeba318f1fefbafed8ecbde6b747c70bbe2bb1554255109db592e2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAZVXNN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfpnqWZIF1BZrfDgUikPZK%2BjoJL%2F4yfFrjGKa5i57y3AIhAOIvC6qBBUF2a%2BZLWl%2B2bY32eBkzymeua3gL75f%2BZL4XKv8DCEcQABoMNjM3NDIzMTgzODA1IgwgKM62ZgxYODeq6Ukq3AMrnc08e9u2OWfhlOuKkM3Pd6O4H4nVDj5bhNSIlfVwrDgI01N6%2F4bUQKNJiBWOs9krIsWvNCpi7OjMKu%2FcV04p2vRuByqIINHvQLXXMoTBT5qb6P4sE1YZWZKj1tTXTh4zWTGDgqmU4eOX6OQhij3XNbtmcsmiQiitRyxMHllKyi9gu6KnojecGLDj39h0hIkM7e%2BFQR%2FjrwI9h44KXBfKp65l20vAP%2FVr8cSxFIYlBLimvqHxq%2Fra7Cb13ObEiZ5mn2c48fsoBJBmoOWB206QRxKSnzhPodcoZgee7JFu2WY0y9FT23Ps1C6LU0GqyOmz0dZHP5L3jwqUrziUWm6DDZMpXczKx3NRthTEuDqLUe0oRA41w%2BiFhNn0NzL9jXHwGbV744sqhnRl4tAawOWqc7ODvov4FYP%2B%2Baf3jzBcnwm1y6Hq9S2M%2B617qMcVQIW8hz83ECB4lhwNN1fNNdQ2aDVoLjTeDLZ1om%2FIItqKYlAJ8tZ%2FyhdoQA%2FR%2F63E8EULL3IcRhUK8%2F8IShnvZvuM5GLhB8gaWKnbs2sd0Zca%2BGm3BU85ijVJUZGPXWgUol95cHpXnQWt7H78y7ceGudZKkis3E%2B8YtwXCoYOraeha%2FDfT9eB72L60MDdzjCXyuC%2BBjqkAYdgluf1pPQCDE5GAfCPDDNFD9TBSMdCTE749lUdEkgYeTe1LCG0i5Dgs8MmOxBnsZ9Qu8f1ZuJ1mb8u86VVyucOZ2Bz91nzeojC04ZsEwTA%2FkOKDlCyrlAJLdReRA1VBugySJe3Oikxik9CRCsl7hcdCJIMQfwAO71eak6Rj%2BPqfc5DeQickqel%2BWdJ6qbplSacqY9mW6raHWStyNnumKkCwzoZ&X-Amz-Signature=1760de3536fc5911802f9767487a2f3fcdb15dc943b9be87298a0e39ab3e5169&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAZVXNN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfpnqWZIF1BZrfDgUikPZK%2BjoJL%2F4yfFrjGKa5i57y3AIhAOIvC6qBBUF2a%2BZLWl%2B2bY32eBkzymeua3gL75f%2BZL4XKv8DCEcQABoMNjM3NDIzMTgzODA1IgwgKM62ZgxYODeq6Ukq3AMrnc08e9u2OWfhlOuKkM3Pd6O4H4nVDj5bhNSIlfVwrDgI01N6%2F4bUQKNJiBWOs9krIsWvNCpi7OjMKu%2FcV04p2vRuByqIINHvQLXXMoTBT5qb6P4sE1YZWZKj1tTXTh4zWTGDgqmU4eOX6OQhij3XNbtmcsmiQiitRyxMHllKyi9gu6KnojecGLDj39h0hIkM7e%2BFQR%2FjrwI9h44KXBfKp65l20vAP%2FVr8cSxFIYlBLimvqHxq%2Fra7Cb13ObEiZ5mn2c48fsoBJBmoOWB206QRxKSnzhPodcoZgee7JFu2WY0y9FT23Ps1C6LU0GqyOmz0dZHP5L3jwqUrziUWm6DDZMpXczKx3NRthTEuDqLUe0oRA41w%2BiFhNn0NzL9jXHwGbV744sqhnRl4tAawOWqc7ODvov4FYP%2B%2Baf3jzBcnwm1y6Hq9S2M%2B617qMcVQIW8hz83ECB4lhwNN1fNNdQ2aDVoLjTeDLZ1om%2FIItqKYlAJ8tZ%2FyhdoQA%2FR%2F63E8EULL3IcRhUK8%2F8IShnvZvuM5GLhB8gaWKnbs2sd0Zca%2BGm3BU85ijVJUZGPXWgUol95cHpXnQWt7H78y7ceGudZKkis3E%2B8YtwXCoYOraeha%2FDfT9eB72L60MDdzjCXyuC%2BBjqkAYdgluf1pPQCDE5GAfCPDDNFD9TBSMdCTE749lUdEkgYeTe1LCG0i5Dgs8MmOxBnsZ9Qu8f1ZuJ1mb8u86VVyucOZ2Bz91nzeojC04ZsEwTA%2FkOKDlCyrlAJLdReRA1VBugySJe3Oikxik9CRCsl7hcdCJIMQfwAO71eak6Rj%2BPqfc5DeQickqel%2BWdJ6qbplSacqY9mW6raHWStyNnumKkCwzoZ&X-Amz-Signature=1e615de71110d1332d2819f71a14155cb5936fb3af3f6990c48da6bc951209ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAZVXNN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfpnqWZIF1BZrfDgUikPZK%2BjoJL%2F4yfFrjGKa5i57y3AIhAOIvC6qBBUF2a%2BZLWl%2B2bY32eBkzymeua3gL75f%2BZL4XKv8DCEcQABoMNjM3NDIzMTgzODA1IgwgKM62ZgxYODeq6Ukq3AMrnc08e9u2OWfhlOuKkM3Pd6O4H4nVDj5bhNSIlfVwrDgI01N6%2F4bUQKNJiBWOs9krIsWvNCpi7OjMKu%2FcV04p2vRuByqIINHvQLXXMoTBT5qb6P4sE1YZWZKj1tTXTh4zWTGDgqmU4eOX6OQhij3XNbtmcsmiQiitRyxMHllKyi9gu6KnojecGLDj39h0hIkM7e%2BFQR%2FjrwI9h44KXBfKp65l20vAP%2FVr8cSxFIYlBLimvqHxq%2Fra7Cb13ObEiZ5mn2c48fsoBJBmoOWB206QRxKSnzhPodcoZgee7JFu2WY0y9FT23Ps1C6LU0GqyOmz0dZHP5L3jwqUrziUWm6DDZMpXczKx3NRthTEuDqLUe0oRA41w%2BiFhNn0NzL9jXHwGbV744sqhnRl4tAawOWqc7ODvov4FYP%2B%2Baf3jzBcnwm1y6Hq9S2M%2B617qMcVQIW8hz83ECB4lhwNN1fNNdQ2aDVoLjTeDLZ1om%2FIItqKYlAJ8tZ%2FyhdoQA%2FR%2F63E8EULL3IcRhUK8%2F8IShnvZvuM5GLhB8gaWKnbs2sd0Zca%2BGm3BU85ijVJUZGPXWgUol95cHpXnQWt7H78y7ceGudZKkis3E%2B8YtwXCoYOraeha%2FDfT9eB72L60MDdzjCXyuC%2BBjqkAYdgluf1pPQCDE5GAfCPDDNFD9TBSMdCTE749lUdEkgYeTe1LCG0i5Dgs8MmOxBnsZ9Qu8f1ZuJ1mb8u86VVyucOZ2Bz91nzeojC04ZsEwTA%2FkOKDlCyrlAJLdReRA1VBugySJe3Oikxik9CRCsl7hcdCJIMQfwAO71eak6Rj%2BPqfc5DeQickqel%2BWdJ6qbplSacqY9mW6raHWStyNnumKkCwzoZ&X-Amz-Signature=cf81040187b55615b86e0058e82334ea4d71cb7fd37030550663af4b4ed4ba7b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAZVXNN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfpnqWZIF1BZrfDgUikPZK%2BjoJL%2F4yfFrjGKa5i57y3AIhAOIvC6qBBUF2a%2BZLWl%2B2bY32eBkzymeua3gL75f%2BZL4XKv8DCEcQABoMNjM3NDIzMTgzODA1IgwgKM62ZgxYODeq6Ukq3AMrnc08e9u2OWfhlOuKkM3Pd6O4H4nVDj5bhNSIlfVwrDgI01N6%2F4bUQKNJiBWOs9krIsWvNCpi7OjMKu%2FcV04p2vRuByqIINHvQLXXMoTBT5qb6P4sE1YZWZKj1tTXTh4zWTGDgqmU4eOX6OQhij3XNbtmcsmiQiitRyxMHllKyi9gu6KnojecGLDj39h0hIkM7e%2BFQR%2FjrwI9h44KXBfKp65l20vAP%2FVr8cSxFIYlBLimvqHxq%2Fra7Cb13ObEiZ5mn2c48fsoBJBmoOWB206QRxKSnzhPodcoZgee7JFu2WY0y9FT23Ps1C6LU0GqyOmz0dZHP5L3jwqUrziUWm6DDZMpXczKx3NRthTEuDqLUe0oRA41w%2BiFhNn0NzL9jXHwGbV744sqhnRl4tAawOWqc7ODvov4FYP%2B%2Baf3jzBcnwm1y6Hq9S2M%2B617qMcVQIW8hz83ECB4lhwNN1fNNdQ2aDVoLjTeDLZ1om%2FIItqKYlAJ8tZ%2FyhdoQA%2FR%2F63E8EULL3IcRhUK8%2F8IShnvZvuM5GLhB8gaWKnbs2sd0Zca%2BGm3BU85ijVJUZGPXWgUol95cHpXnQWt7H78y7ceGudZKkis3E%2B8YtwXCoYOraeha%2FDfT9eB72L60MDdzjCXyuC%2BBjqkAYdgluf1pPQCDE5GAfCPDDNFD9TBSMdCTE749lUdEkgYeTe1LCG0i5Dgs8MmOxBnsZ9Qu8f1ZuJ1mb8u86VVyucOZ2Bz91nzeojC04ZsEwTA%2FkOKDlCyrlAJLdReRA1VBugySJe3Oikxik9CRCsl7hcdCJIMQfwAO71eak6Rj%2BPqfc5DeQickqel%2BWdJ6qbplSacqY9mW6raHWStyNnumKkCwzoZ&X-Amz-Signature=31fe2840a4d56e6ae16f1539c72784dcd909d5012baceddb3a01c24460982ace&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAZVXNN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfpnqWZIF1BZrfDgUikPZK%2BjoJL%2F4yfFrjGKa5i57y3AIhAOIvC6qBBUF2a%2BZLWl%2B2bY32eBkzymeua3gL75f%2BZL4XKv8DCEcQABoMNjM3NDIzMTgzODA1IgwgKM62ZgxYODeq6Ukq3AMrnc08e9u2OWfhlOuKkM3Pd6O4H4nVDj5bhNSIlfVwrDgI01N6%2F4bUQKNJiBWOs9krIsWvNCpi7OjMKu%2FcV04p2vRuByqIINHvQLXXMoTBT5qb6P4sE1YZWZKj1tTXTh4zWTGDgqmU4eOX6OQhij3XNbtmcsmiQiitRyxMHllKyi9gu6KnojecGLDj39h0hIkM7e%2BFQR%2FjrwI9h44KXBfKp65l20vAP%2FVr8cSxFIYlBLimvqHxq%2Fra7Cb13ObEiZ5mn2c48fsoBJBmoOWB206QRxKSnzhPodcoZgee7JFu2WY0y9FT23Ps1C6LU0GqyOmz0dZHP5L3jwqUrziUWm6DDZMpXczKx3NRthTEuDqLUe0oRA41w%2BiFhNn0NzL9jXHwGbV744sqhnRl4tAawOWqc7ODvov4FYP%2B%2Baf3jzBcnwm1y6Hq9S2M%2B617qMcVQIW8hz83ECB4lhwNN1fNNdQ2aDVoLjTeDLZ1om%2FIItqKYlAJ8tZ%2FyhdoQA%2FR%2F63E8EULL3IcRhUK8%2F8IShnvZvuM5GLhB8gaWKnbs2sd0Zca%2BGm3BU85ijVJUZGPXWgUol95cHpXnQWt7H78y7ceGudZKkis3E%2B8YtwXCoYOraeha%2FDfT9eB72L60MDdzjCXyuC%2BBjqkAYdgluf1pPQCDE5GAfCPDDNFD9TBSMdCTE749lUdEkgYeTe1LCG0i5Dgs8MmOxBnsZ9Qu8f1ZuJ1mb8u86VVyucOZ2Bz91nzeojC04ZsEwTA%2FkOKDlCyrlAJLdReRA1VBugySJe3Oikxik9CRCsl7hcdCJIMQfwAO71eak6Rj%2BPqfc5DeQickqel%2BWdJ6qbplSacqY9mW6raHWStyNnumKkCwzoZ&X-Amz-Signature=d3b39739e737e1855749482a69578a5c575f483876da7312c9b235f7a66ac6da&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

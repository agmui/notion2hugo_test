---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG76OOSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH296CHhmpJROwKiMYzEzp07G75Ianp3O9jpJUc%2FCVpYAiBlK9mU4tcgQ6Lo%2FAIKZKudmnzOYd9Bs66VzPH%2FaC8KJiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWu37NK8fXGz7pKkKtwDJBSrD3vO7FX2IJGnnhA1BZkfFxl0esd6opcEU2WsySuFay86TC%2B2MXXPigFqQMCXdSDQyqs%2BhhiSCbla0lUVLgd9XVcpfPENsp%2BYnv%2Fc9omnMs7Bs2nUwXhO%2FPckLpIEEMZHdKvad4LAB2vet3HO1Wh9jd412FwtsQwLw6Dwqyzmh0DSe0pgoyzzT9mn0M1gPA6f0c96qpRFlCw%2FXA2jtLS%2FrTFvjy85lI2uKJtLvMZP2C0NME8UbHUZKIZPQ8u4oqTFoO7bzplJ%2FcqAtmbh2pJ55cwACPOKwZy5AubFsYztZcesnNq1w%2FzYVaw0FTqsSJuaZPKZb7TsGppN76SxBp49tjNUXO5VanWVBN4hCdMVVK74N%2BKm1PWnXC0aDBvr5J8qG5Dh7EiuhnxltuLenqh3pNROlz7J%2BIg9I3eyg0%2BrRYI2G%2FXqAyKvGO%2F29uvNZKYLrU96rC5uyO97Yb3itujaUxStiEVYB77YCDd7qB7D0c7466RW4hlbYKBkCWEPPCrSBblBsFIa0ID91LdKXrFCeFQ0SksszGTKnLtIBovxgHwuxiwyxlrwx%2FEVPpOtqvlNjMQxLKTayOOgJSyjGa6gJzHEOg72rJ8F3xNGe0V1FsJ2WHtgcHLcwWoww4O2wwY6pgFSLrq4Xvt5NnSpyXlw1LK%2BzEoF%2BPvI5XY0m8dxQJMOajtr5tHZk86IQKPHsxM7j8ypW5nsUPFbAWSBnRb1MdjD0ewOzcuzcmc7DQfBYp8ge8KNhry80pOtIgibZepvFw0aTFdv%2BazXrsvLuz4%2B4e%2FphowbtsKCSiIjjR0py7ys2ZL3YT36HUE%2BgQHX%2BzXOnwjpzMwGpPQx1qWVcT0jdbl00HsmTXwM&X-Amz-Signature=48ba847798dd3382ad2542389f5d4feb29beab384d188be765dbc8c224602ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG76OOSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH296CHhmpJROwKiMYzEzp07G75Ianp3O9jpJUc%2FCVpYAiBlK9mU4tcgQ6Lo%2FAIKZKudmnzOYd9Bs66VzPH%2FaC8KJiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWu37NK8fXGz7pKkKtwDJBSrD3vO7FX2IJGnnhA1BZkfFxl0esd6opcEU2WsySuFay86TC%2B2MXXPigFqQMCXdSDQyqs%2BhhiSCbla0lUVLgd9XVcpfPENsp%2BYnv%2Fc9omnMs7Bs2nUwXhO%2FPckLpIEEMZHdKvad4LAB2vet3HO1Wh9jd412FwtsQwLw6Dwqyzmh0DSe0pgoyzzT9mn0M1gPA6f0c96qpRFlCw%2FXA2jtLS%2FrTFvjy85lI2uKJtLvMZP2C0NME8UbHUZKIZPQ8u4oqTFoO7bzplJ%2FcqAtmbh2pJ55cwACPOKwZy5AubFsYztZcesnNq1w%2FzYVaw0FTqsSJuaZPKZb7TsGppN76SxBp49tjNUXO5VanWVBN4hCdMVVK74N%2BKm1PWnXC0aDBvr5J8qG5Dh7EiuhnxltuLenqh3pNROlz7J%2BIg9I3eyg0%2BrRYI2G%2FXqAyKvGO%2F29uvNZKYLrU96rC5uyO97Yb3itujaUxStiEVYB77YCDd7qB7D0c7466RW4hlbYKBkCWEPPCrSBblBsFIa0ID91LdKXrFCeFQ0SksszGTKnLtIBovxgHwuxiwyxlrwx%2FEVPpOtqvlNjMQxLKTayOOgJSyjGa6gJzHEOg72rJ8F3xNGe0V1FsJ2WHtgcHLcwWoww4O2wwY6pgFSLrq4Xvt5NnSpyXlw1LK%2BzEoF%2BPvI5XY0m8dxQJMOajtr5tHZk86IQKPHsxM7j8ypW5nsUPFbAWSBnRb1MdjD0ewOzcuzcmc7DQfBYp8ge8KNhry80pOtIgibZepvFw0aTFdv%2BazXrsvLuz4%2B4e%2FphowbtsKCSiIjjR0py7ys2ZL3YT36HUE%2BgQHX%2BzXOnwjpzMwGpPQx1qWVcT0jdbl00HsmTXwM&X-Amz-Signature=d66d64676cae0a6b528639f032094d47535cf5a1e465bd59baa2ed299bad935c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG76OOSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH296CHhmpJROwKiMYzEzp07G75Ianp3O9jpJUc%2FCVpYAiBlK9mU4tcgQ6Lo%2FAIKZKudmnzOYd9Bs66VzPH%2FaC8KJiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWu37NK8fXGz7pKkKtwDJBSrD3vO7FX2IJGnnhA1BZkfFxl0esd6opcEU2WsySuFay86TC%2B2MXXPigFqQMCXdSDQyqs%2BhhiSCbla0lUVLgd9XVcpfPENsp%2BYnv%2Fc9omnMs7Bs2nUwXhO%2FPckLpIEEMZHdKvad4LAB2vet3HO1Wh9jd412FwtsQwLw6Dwqyzmh0DSe0pgoyzzT9mn0M1gPA6f0c96qpRFlCw%2FXA2jtLS%2FrTFvjy85lI2uKJtLvMZP2C0NME8UbHUZKIZPQ8u4oqTFoO7bzplJ%2FcqAtmbh2pJ55cwACPOKwZy5AubFsYztZcesnNq1w%2FzYVaw0FTqsSJuaZPKZb7TsGppN76SxBp49tjNUXO5VanWVBN4hCdMVVK74N%2BKm1PWnXC0aDBvr5J8qG5Dh7EiuhnxltuLenqh3pNROlz7J%2BIg9I3eyg0%2BrRYI2G%2FXqAyKvGO%2F29uvNZKYLrU96rC5uyO97Yb3itujaUxStiEVYB77YCDd7qB7D0c7466RW4hlbYKBkCWEPPCrSBblBsFIa0ID91LdKXrFCeFQ0SksszGTKnLtIBovxgHwuxiwyxlrwx%2FEVPpOtqvlNjMQxLKTayOOgJSyjGa6gJzHEOg72rJ8F3xNGe0V1FsJ2WHtgcHLcwWoww4O2wwY6pgFSLrq4Xvt5NnSpyXlw1LK%2BzEoF%2BPvI5XY0m8dxQJMOajtr5tHZk86IQKPHsxM7j8ypW5nsUPFbAWSBnRb1MdjD0ewOzcuzcmc7DQfBYp8ge8KNhry80pOtIgibZepvFw0aTFdv%2BazXrsvLuz4%2B4e%2FphowbtsKCSiIjjR0py7ys2ZL3YT36HUE%2BgQHX%2BzXOnwjpzMwGpPQx1qWVcT0jdbl00HsmTXwM&X-Amz-Signature=ae50b1e377440b22417990ddea117c4d13b96b5931f0417831457d365a06045d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG76OOSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH296CHhmpJROwKiMYzEzp07G75Ianp3O9jpJUc%2FCVpYAiBlK9mU4tcgQ6Lo%2FAIKZKudmnzOYd9Bs66VzPH%2FaC8KJiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWu37NK8fXGz7pKkKtwDJBSrD3vO7FX2IJGnnhA1BZkfFxl0esd6opcEU2WsySuFay86TC%2B2MXXPigFqQMCXdSDQyqs%2BhhiSCbla0lUVLgd9XVcpfPENsp%2BYnv%2Fc9omnMs7Bs2nUwXhO%2FPckLpIEEMZHdKvad4LAB2vet3HO1Wh9jd412FwtsQwLw6Dwqyzmh0DSe0pgoyzzT9mn0M1gPA6f0c96qpRFlCw%2FXA2jtLS%2FrTFvjy85lI2uKJtLvMZP2C0NME8UbHUZKIZPQ8u4oqTFoO7bzplJ%2FcqAtmbh2pJ55cwACPOKwZy5AubFsYztZcesnNq1w%2FzYVaw0FTqsSJuaZPKZb7TsGppN76SxBp49tjNUXO5VanWVBN4hCdMVVK74N%2BKm1PWnXC0aDBvr5J8qG5Dh7EiuhnxltuLenqh3pNROlz7J%2BIg9I3eyg0%2BrRYI2G%2FXqAyKvGO%2F29uvNZKYLrU96rC5uyO97Yb3itujaUxStiEVYB77YCDd7qB7D0c7466RW4hlbYKBkCWEPPCrSBblBsFIa0ID91LdKXrFCeFQ0SksszGTKnLtIBovxgHwuxiwyxlrwx%2FEVPpOtqvlNjMQxLKTayOOgJSyjGa6gJzHEOg72rJ8F3xNGe0V1FsJ2WHtgcHLcwWoww4O2wwY6pgFSLrq4Xvt5NnSpyXlw1LK%2BzEoF%2BPvI5XY0m8dxQJMOajtr5tHZk86IQKPHsxM7j8ypW5nsUPFbAWSBnRb1MdjD0ewOzcuzcmc7DQfBYp8ge8KNhry80pOtIgibZepvFw0aTFdv%2BazXrsvLuz4%2B4e%2FphowbtsKCSiIjjR0py7ys2ZL3YT36HUE%2BgQHX%2BzXOnwjpzMwGpPQx1qWVcT0jdbl00HsmTXwM&X-Amz-Signature=3b0c1bdc9cc3a417dabab08352112e0731a0fe88c08a61fa31eb4a56e84563d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG76OOSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH296CHhmpJROwKiMYzEzp07G75Ianp3O9jpJUc%2FCVpYAiBlK9mU4tcgQ6Lo%2FAIKZKudmnzOYd9Bs66VzPH%2FaC8KJiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWu37NK8fXGz7pKkKtwDJBSrD3vO7FX2IJGnnhA1BZkfFxl0esd6opcEU2WsySuFay86TC%2B2MXXPigFqQMCXdSDQyqs%2BhhiSCbla0lUVLgd9XVcpfPENsp%2BYnv%2Fc9omnMs7Bs2nUwXhO%2FPckLpIEEMZHdKvad4LAB2vet3HO1Wh9jd412FwtsQwLw6Dwqyzmh0DSe0pgoyzzT9mn0M1gPA6f0c96qpRFlCw%2FXA2jtLS%2FrTFvjy85lI2uKJtLvMZP2C0NME8UbHUZKIZPQ8u4oqTFoO7bzplJ%2FcqAtmbh2pJ55cwACPOKwZy5AubFsYztZcesnNq1w%2FzYVaw0FTqsSJuaZPKZb7TsGppN76SxBp49tjNUXO5VanWVBN4hCdMVVK74N%2BKm1PWnXC0aDBvr5J8qG5Dh7EiuhnxltuLenqh3pNROlz7J%2BIg9I3eyg0%2BrRYI2G%2FXqAyKvGO%2F29uvNZKYLrU96rC5uyO97Yb3itujaUxStiEVYB77YCDd7qB7D0c7466RW4hlbYKBkCWEPPCrSBblBsFIa0ID91LdKXrFCeFQ0SksszGTKnLtIBovxgHwuxiwyxlrwx%2FEVPpOtqvlNjMQxLKTayOOgJSyjGa6gJzHEOg72rJ8F3xNGe0V1FsJ2WHtgcHLcwWoww4O2wwY6pgFSLrq4Xvt5NnSpyXlw1LK%2BzEoF%2BPvI5XY0m8dxQJMOajtr5tHZk86IQKPHsxM7j8ypW5nsUPFbAWSBnRb1MdjD0ewOzcuzcmc7DQfBYp8ge8KNhry80pOtIgibZepvFw0aTFdv%2BazXrsvLuz4%2B4e%2FphowbtsKCSiIjjR0py7ys2ZL3YT36HUE%2BgQHX%2BzXOnwjpzMwGpPQx1qWVcT0jdbl00HsmTXwM&X-Amz-Signature=f7f146c8f2038ecca953e3e4dc9d44d16811405181a4a418528f381c7357e1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG76OOSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH296CHhmpJROwKiMYzEzp07G75Ianp3O9jpJUc%2FCVpYAiBlK9mU4tcgQ6Lo%2FAIKZKudmnzOYd9Bs66VzPH%2FaC8KJiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWu37NK8fXGz7pKkKtwDJBSrD3vO7FX2IJGnnhA1BZkfFxl0esd6opcEU2WsySuFay86TC%2B2MXXPigFqQMCXdSDQyqs%2BhhiSCbla0lUVLgd9XVcpfPENsp%2BYnv%2Fc9omnMs7Bs2nUwXhO%2FPckLpIEEMZHdKvad4LAB2vet3HO1Wh9jd412FwtsQwLw6Dwqyzmh0DSe0pgoyzzT9mn0M1gPA6f0c96qpRFlCw%2FXA2jtLS%2FrTFvjy85lI2uKJtLvMZP2C0NME8UbHUZKIZPQ8u4oqTFoO7bzplJ%2FcqAtmbh2pJ55cwACPOKwZy5AubFsYztZcesnNq1w%2FzYVaw0FTqsSJuaZPKZb7TsGppN76SxBp49tjNUXO5VanWVBN4hCdMVVK74N%2BKm1PWnXC0aDBvr5J8qG5Dh7EiuhnxltuLenqh3pNROlz7J%2BIg9I3eyg0%2BrRYI2G%2FXqAyKvGO%2F29uvNZKYLrU96rC5uyO97Yb3itujaUxStiEVYB77YCDd7qB7D0c7466RW4hlbYKBkCWEPPCrSBblBsFIa0ID91LdKXrFCeFQ0SksszGTKnLtIBovxgHwuxiwyxlrwx%2FEVPpOtqvlNjMQxLKTayOOgJSyjGa6gJzHEOg72rJ8F3xNGe0V1FsJ2WHtgcHLcwWoww4O2wwY6pgFSLrq4Xvt5NnSpyXlw1LK%2BzEoF%2BPvI5XY0m8dxQJMOajtr5tHZk86IQKPHsxM7j8ypW5nsUPFbAWSBnRb1MdjD0ewOzcuzcmc7DQfBYp8ge8KNhry80pOtIgibZepvFw0aTFdv%2BazXrsvLuz4%2B4e%2FphowbtsKCSiIjjR0py7ys2ZL3YT36HUE%2BgQHX%2BzXOnwjpzMwGpPQx1qWVcT0jdbl00HsmTXwM&X-Amz-Signature=20a274217dbb31f358da28400dcbac783ca5da0686c35b61c1dcf7d9dd433cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG76OOSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH296CHhmpJROwKiMYzEzp07G75Ianp3O9jpJUc%2FCVpYAiBlK9mU4tcgQ6Lo%2FAIKZKudmnzOYd9Bs66VzPH%2FaC8KJiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWu37NK8fXGz7pKkKtwDJBSrD3vO7FX2IJGnnhA1BZkfFxl0esd6opcEU2WsySuFay86TC%2B2MXXPigFqQMCXdSDQyqs%2BhhiSCbla0lUVLgd9XVcpfPENsp%2BYnv%2Fc9omnMs7Bs2nUwXhO%2FPckLpIEEMZHdKvad4LAB2vet3HO1Wh9jd412FwtsQwLw6Dwqyzmh0DSe0pgoyzzT9mn0M1gPA6f0c96qpRFlCw%2FXA2jtLS%2FrTFvjy85lI2uKJtLvMZP2C0NME8UbHUZKIZPQ8u4oqTFoO7bzplJ%2FcqAtmbh2pJ55cwACPOKwZy5AubFsYztZcesnNq1w%2FzYVaw0FTqsSJuaZPKZb7TsGppN76SxBp49tjNUXO5VanWVBN4hCdMVVK74N%2BKm1PWnXC0aDBvr5J8qG5Dh7EiuhnxltuLenqh3pNROlz7J%2BIg9I3eyg0%2BrRYI2G%2FXqAyKvGO%2F29uvNZKYLrU96rC5uyO97Yb3itujaUxStiEVYB77YCDd7qB7D0c7466RW4hlbYKBkCWEPPCrSBblBsFIa0ID91LdKXrFCeFQ0SksszGTKnLtIBovxgHwuxiwyxlrwx%2FEVPpOtqvlNjMQxLKTayOOgJSyjGa6gJzHEOg72rJ8F3xNGe0V1FsJ2WHtgcHLcwWoww4O2wwY6pgFSLrq4Xvt5NnSpyXlw1LK%2BzEoF%2BPvI5XY0m8dxQJMOajtr5tHZk86IQKPHsxM7j8ypW5nsUPFbAWSBnRb1MdjD0ewOzcuzcmc7DQfBYp8ge8KNhry80pOtIgibZepvFw0aTFdv%2BazXrsvLuz4%2B4e%2FphowbtsKCSiIjjR0py7ys2ZL3YT36HUE%2BgQHX%2BzXOnwjpzMwGpPQx1qWVcT0jdbl00HsmTXwM&X-Amz-Signature=3eb68976d72b60f92cc4098e6eb92762d1a556ec7ff5ad77701228d9f9464aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

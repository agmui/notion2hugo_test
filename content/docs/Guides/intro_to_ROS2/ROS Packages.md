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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653JCGLWF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHOs%2FMf4u3jff5gxfSVBDTlhn2ZPF%2BhmX5oLWqjJNlt%2FAiEAhXIafUgZ9v3P2WiUZLXMYP%2BBgEoep279ufxZiJpoj6Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB%2BKvNkJDqK91tiKRCrcA%2BUMwWLjnJcpq8YPcQ2ugY2gexY%2Bgt3sab2PZlMSBuBUh3hfZ%2FzkPt3k9ijcv0nzQY3uGVArbk1jDBlAyWoo936v468FFB80tI7ACMqIPhYexR9WOR1X7Pkf53Pbw06wh55EyXT8FVtsyEvMkM42z5FXi4wjEti%2FbKNaxz88ZI%2B4EOIjBsa6zdti5PiSj5ItALhOUr2nbTB4Pb2QvsND2u9pfEW7cebzGQTmMLqTiprtyES120pcXDWus014Z5yI1bRP4PTtB8TvCOsenZKhEXsYpG0NrdlI9nKc3YZ1EnNnIc5v%2FC2QsGVuBkZ%2FlGuUKV1R2yLv%2BQuJf4pZL6ArLOWertmIAszNgLW%2F9cVkVAtZbQyIWGp6bkCyLFQnGPoDu%2FJGJHEB56uPTkgrofr%2FRDez7S9s8dqvgMX4psWem%2Bxrpki6JElioGk%2FC5DBnNEUrUxk%2FIqozP9ahEsqkNcY0zH8zRZx2WgED6smqX6yiIIWqG6zcwT7BF2fiIJ9J2jm4MVQJQppM3wlU5%2FzXZVeHa38lp0tX0wqnBl28HhncxK9iZEf9eoyCMDLtgIo1RDKlqrkRbx0GN1r%2Ftx6TBv2x9kyIBoDXkPRaYHS84uHxlq2vOW%2FCUgm%2BVEBQwXhMMTy9MIGOqUBeN4bMcVhKRBjdwRJXRr%2FdDI1XVrLEAb1elV4%2FOvBIx799SHrAoSylYzuZj9WHJNtJI3O3RBqjc405f18jfowcUxosldJP6DwhqJI05nWwev%2BWwvW0IxrZYsTL5r2IH2xECiBmKO3tHGgG0X77JKHgOAqWJrXQQB1zCeQ9mI2xIDCDgdJIXdgjwV8MzjaHdbbkyYYaJ0yfGTZvoeeubJ741Pm%2FZjE&X-Amz-Signature=432b1050d0d75c34c1bec475420c79a75174e398a484052fbf18fd9227e6a70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653JCGLWF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHOs%2FMf4u3jff5gxfSVBDTlhn2ZPF%2BhmX5oLWqjJNlt%2FAiEAhXIafUgZ9v3P2WiUZLXMYP%2BBgEoep279ufxZiJpoj6Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB%2BKvNkJDqK91tiKRCrcA%2BUMwWLjnJcpq8YPcQ2ugY2gexY%2Bgt3sab2PZlMSBuBUh3hfZ%2FzkPt3k9ijcv0nzQY3uGVArbk1jDBlAyWoo936v468FFB80tI7ACMqIPhYexR9WOR1X7Pkf53Pbw06wh55EyXT8FVtsyEvMkM42z5FXi4wjEti%2FbKNaxz88ZI%2B4EOIjBsa6zdti5PiSj5ItALhOUr2nbTB4Pb2QvsND2u9pfEW7cebzGQTmMLqTiprtyES120pcXDWus014Z5yI1bRP4PTtB8TvCOsenZKhEXsYpG0NrdlI9nKc3YZ1EnNnIc5v%2FC2QsGVuBkZ%2FlGuUKV1R2yLv%2BQuJf4pZL6ArLOWertmIAszNgLW%2F9cVkVAtZbQyIWGp6bkCyLFQnGPoDu%2FJGJHEB56uPTkgrofr%2FRDez7S9s8dqvgMX4psWem%2Bxrpki6JElioGk%2FC5DBnNEUrUxk%2FIqozP9ahEsqkNcY0zH8zRZx2WgED6smqX6yiIIWqG6zcwT7BF2fiIJ9J2jm4MVQJQppM3wlU5%2FzXZVeHa38lp0tX0wqnBl28HhncxK9iZEf9eoyCMDLtgIo1RDKlqrkRbx0GN1r%2Ftx6TBv2x9kyIBoDXkPRaYHS84uHxlq2vOW%2FCUgm%2BVEBQwXhMMTy9MIGOqUBeN4bMcVhKRBjdwRJXRr%2FdDI1XVrLEAb1elV4%2FOvBIx799SHrAoSylYzuZj9WHJNtJI3O3RBqjc405f18jfowcUxosldJP6DwhqJI05nWwev%2BWwvW0IxrZYsTL5r2IH2xECiBmKO3tHGgG0X77JKHgOAqWJrXQQB1zCeQ9mI2xIDCDgdJIXdgjwV8MzjaHdbbkyYYaJ0yfGTZvoeeubJ741Pm%2FZjE&X-Amz-Signature=1ac81e0296d893cf814f6b3bcbb8cc1fcf7e6940102d2d776ba32ee04bc6614f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653JCGLWF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHOs%2FMf4u3jff5gxfSVBDTlhn2ZPF%2BhmX5oLWqjJNlt%2FAiEAhXIafUgZ9v3P2WiUZLXMYP%2BBgEoep279ufxZiJpoj6Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB%2BKvNkJDqK91tiKRCrcA%2BUMwWLjnJcpq8YPcQ2ugY2gexY%2Bgt3sab2PZlMSBuBUh3hfZ%2FzkPt3k9ijcv0nzQY3uGVArbk1jDBlAyWoo936v468FFB80tI7ACMqIPhYexR9WOR1X7Pkf53Pbw06wh55EyXT8FVtsyEvMkM42z5FXi4wjEti%2FbKNaxz88ZI%2B4EOIjBsa6zdti5PiSj5ItALhOUr2nbTB4Pb2QvsND2u9pfEW7cebzGQTmMLqTiprtyES120pcXDWus014Z5yI1bRP4PTtB8TvCOsenZKhEXsYpG0NrdlI9nKc3YZ1EnNnIc5v%2FC2QsGVuBkZ%2FlGuUKV1R2yLv%2BQuJf4pZL6ArLOWertmIAszNgLW%2F9cVkVAtZbQyIWGp6bkCyLFQnGPoDu%2FJGJHEB56uPTkgrofr%2FRDez7S9s8dqvgMX4psWem%2Bxrpki6JElioGk%2FC5DBnNEUrUxk%2FIqozP9ahEsqkNcY0zH8zRZx2WgED6smqX6yiIIWqG6zcwT7BF2fiIJ9J2jm4MVQJQppM3wlU5%2FzXZVeHa38lp0tX0wqnBl28HhncxK9iZEf9eoyCMDLtgIo1RDKlqrkRbx0GN1r%2Ftx6TBv2x9kyIBoDXkPRaYHS84uHxlq2vOW%2FCUgm%2BVEBQwXhMMTy9MIGOqUBeN4bMcVhKRBjdwRJXRr%2FdDI1XVrLEAb1elV4%2FOvBIx799SHrAoSylYzuZj9WHJNtJI3O3RBqjc405f18jfowcUxosldJP6DwhqJI05nWwev%2BWwvW0IxrZYsTL5r2IH2xECiBmKO3tHGgG0X77JKHgOAqWJrXQQB1zCeQ9mI2xIDCDgdJIXdgjwV8MzjaHdbbkyYYaJ0yfGTZvoeeubJ741Pm%2FZjE&X-Amz-Signature=e7852a291f1e7a5690b217ca56bc1618620e5fa37ef4a5e8ee50a3e49b56f9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653JCGLWF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHOs%2FMf4u3jff5gxfSVBDTlhn2ZPF%2BhmX5oLWqjJNlt%2FAiEAhXIafUgZ9v3P2WiUZLXMYP%2BBgEoep279ufxZiJpoj6Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB%2BKvNkJDqK91tiKRCrcA%2BUMwWLjnJcpq8YPcQ2ugY2gexY%2Bgt3sab2PZlMSBuBUh3hfZ%2FzkPt3k9ijcv0nzQY3uGVArbk1jDBlAyWoo936v468FFB80tI7ACMqIPhYexR9WOR1X7Pkf53Pbw06wh55EyXT8FVtsyEvMkM42z5FXi4wjEti%2FbKNaxz88ZI%2B4EOIjBsa6zdti5PiSj5ItALhOUr2nbTB4Pb2QvsND2u9pfEW7cebzGQTmMLqTiprtyES120pcXDWus014Z5yI1bRP4PTtB8TvCOsenZKhEXsYpG0NrdlI9nKc3YZ1EnNnIc5v%2FC2QsGVuBkZ%2FlGuUKV1R2yLv%2BQuJf4pZL6ArLOWertmIAszNgLW%2F9cVkVAtZbQyIWGp6bkCyLFQnGPoDu%2FJGJHEB56uPTkgrofr%2FRDez7S9s8dqvgMX4psWem%2Bxrpki6JElioGk%2FC5DBnNEUrUxk%2FIqozP9ahEsqkNcY0zH8zRZx2WgED6smqX6yiIIWqG6zcwT7BF2fiIJ9J2jm4MVQJQppM3wlU5%2FzXZVeHa38lp0tX0wqnBl28HhncxK9iZEf9eoyCMDLtgIo1RDKlqrkRbx0GN1r%2Ftx6TBv2x9kyIBoDXkPRaYHS84uHxlq2vOW%2FCUgm%2BVEBQwXhMMTy9MIGOqUBeN4bMcVhKRBjdwRJXRr%2FdDI1XVrLEAb1elV4%2FOvBIx799SHrAoSylYzuZj9WHJNtJI3O3RBqjc405f18jfowcUxosldJP6DwhqJI05nWwev%2BWwvW0IxrZYsTL5r2IH2xECiBmKO3tHGgG0X77JKHgOAqWJrXQQB1zCeQ9mI2xIDCDgdJIXdgjwV8MzjaHdbbkyYYaJ0yfGTZvoeeubJ741Pm%2FZjE&X-Amz-Signature=4061eee334c7a3063117962eda5f7c19e01f5e0daf68385d46bee7c6b40ee0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653JCGLWF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHOs%2FMf4u3jff5gxfSVBDTlhn2ZPF%2BhmX5oLWqjJNlt%2FAiEAhXIafUgZ9v3P2WiUZLXMYP%2BBgEoep279ufxZiJpoj6Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB%2BKvNkJDqK91tiKRCrcA%2BUMwWLjnJcpq8YPcQ2ugY2gexY%2Bgt3sab2PZlMSBuBUh3hfZ%2FzkPt3k9ijcv0nzQY3uGVArbk1jDBlAyWoo936v468FFB80tI7ACMqIPhYexR9WOR1X7Pkf53Pbw06wh55EyXT8FVtsyEvMkM42z5FXi4wjEti%2FbKNaxz88ZI%2B4EOIjBsa6zdti5PiSj5ItALhOUr2nbTB4Pb2QvsND2u9pfEW7cebzGQTmMLqTiprtyES120pcXDWus014Z5yI1bRP4PTtB8TvCOsenZKhEXsYpG0NrdlI9nKc3YZ1EnNnIc5v%2FC2QsGVuBkZ%2FlGuUKV1R2yLv%2BQuJf4pZL6ArLOWertmIAszNgLW%2F9cVkVAtZbQyIWGp6bkCyLFQnGPoDu%2FJGJHEB56uPTkgrofr%2FRDez7S9s8dqvgMX4psWem%2Bxrpki6JElioGk%2FC5DBnNEUrUxk%2FIqozP9ahEsqkNcY0zH8zRZx2WgED6smqX6yiIIWqG6zcwT7BF2fiIJ9J2jm4MVQJQppM3wlU5%2FzXZVeHa38lp0tX0wqnBl28HhncxK9iZEf9eoyCMDLtgIo1RDKlqrkRbx0GN1r%2Ftx6TBv2x9kyIBoDXkPRaYHS84uHxlq2vOW%2FCUgm%2BVEBQwXhMMTy9MIGOqUBeN4bMcVhKRBjdwRJXRr%2FdDI1XVrLEAb1elV4%2FOvBIx799SHrAoSylYzuZj9WHJNtJI3O3RBqjc405f18jfowcUxosldJP6DwhqJI05nWwev%2BWwvW0IxrZYsTL5r2IH2xECiBmKO3tHGgG0X77JKHgOAqWJrXQQB1zCeQ9mI2xIDCDgdJIXdgjwV8MzjaHdbbkyYYaJ0yfGTZvoeeubJ741Pm%2FZjE&X-Amz-Signature=ac9a64bf102702b5c8bedbb8c26c374eda1f149acdee666540020f6c8bcbade1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653JCGLWF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHOs%2FMf4u3jff5gxfSVBDTlhn2ZPF%2BhmX5oLWqjJNlt%2FAiEAhXIafUgZ9v3P2WiUZLXMYP%2BBgEoep279ufxZiJpoj6Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB%2BKvNkJDqK91tiKRCrcA%2BUMwWLjnJcpq8YPcQ2ugY2gexY%2Bgt3sab2PZlMSBuBUh3hfZ%2FzkPt3k9ijcv0nzQY3uGVArbk1jDBlAyWoo936v468FFB80tI7ACMqIPhYexR9WOR1X7Pkf53Pbw06wh55EyXT8FVtsyEvMkM42z5FXi4wjEti%2FbKNaxz88ZI%2B4EOIjBsa6zdti5PiSj5ItALhOUr2nbTB4Pb2QvsND2u9pfEW7cebzGQTmMLqTiprtyES120pcXDWus014Z5yI1bRP4PTtB8TvCOsenZKhEXsYpG0NrdlI9nKc3YZ1EnNnIc5v%2FC2QsGVuBkZ%2FlGuUKV1R2yLv%2BQuJf4pZL6ArLOWertmIAszNgLW%2F9cVkVAtZbQyIWGp6bkCyLFQnGPoDu%2FJGJHEB56uPTkgrofr%2FRDez7S9s8dqvgMX4psWem%2Bxrpki6JElioGk%2FC5DBnNEUrUxk%2FIqozP9ahEsqkNcY0zH8zRZx2WgED6smqX6yiIIWqG6zcwT7BF2fiIJ9J2jm4MVQJQppM3wlU5%2FzXZVeHa38lp0tX0wqnBl28HhncxK9iZEf9eoyCMDLtgIo1RDKlqrkRbx0GN1r%2Ftx6TBv2x9kyIBoDXkPRaYHS84uHxlq2vOW%2FCUgm%2BVEBQwXhMMTy9MIGOqUBeN4bMcVhKRBjdwRJXRr%2FdDI1XVrLEAb1elV4%2FOvBIx799SHrAoSylYzuZj9WHJNtJI3O3RBqjc405f18jfowcUxosldJP6DwhqJI05nWwev%2BWwvW0IxrZYsTL5r2IH2xECiBmKO3tHGgG0X77JKHgOAqWJrXQQB1zCeQ9mI2xIDCDgdJIXdgjwV8MzjaHdbbkyYYaJ0yfGTZvoeeubJ741Pm%2FZjE&X-Amz-Signature=7cad0856f78ba80bf2a2f66dbffeae31ad0a2e02008a8fc7a10d1c188c5c077d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653JCGLWF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHOs%2FMf4u3jff5gxfSVBDTlhn2ZPF%2BhmX5oLWqjJNlt%2FAiEAhXIafUgZ9v3P2WiUZLXMYP%2BBgEoep279ufxZiJpoj6Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB%2BKvNkJDqK91tiKRCrcA%2BUMwWLjnJcpq8YPcQ2ugY2gexY%2Bgt3sab2PZlMSBuBUh3hfZ%2FzkPt3k9ijcv0nzQY3uGVArbk1jDBlAyWoo936v468FFB80tI7ACMqIPhYexR9WOR1X7Pkf53Pbw06wh55EyXT8FVtsyEvMkM42z5FXi4wjEti%2FbKNaxz88ZI%2B4EOIjBsa6zdti5PiSj5ItALhOUr2nbTB4Pb2QvsND2u9pfEW7cebzGQTmMLqTiprtyES120pcXDWus014Z5yI1bRP4PTtB8TvCOsenZKhEXsYpG0NrdlI9nKc3YZ1EnNnIc5v%2FC2QsGVuBkZ%2FlGuUKV1R2yLv%2BQuJf4pZL6ArLOWertmIAszNgLW%2F9cVkVAtZbQyIWGp6bkCyLFQnGPoDu%2FJGJHEB56uPTkgrofr%2FRDez7S9s8dqvgMX4psWem%2Bxrpki6JElioGk%2FC5DBnNEUrUxk%2FIqozP9ahEsqkNcY0zH8zRZx2WgED6smqX6yiIIWqG6zcwT7BF2fiIJ9J2jm4MVQJQppM3wlU5%2FzXZVeHa38lp0tX0wqnBl28HhncxK9iZEf9eoyCMDLtgIo1RDKlqrkRbx0GN1r%2Ftx6TBv2x9kyIBoDXkPRaYHS84uHxlq2vOW%2FCUgm%2BVEBQwXhMMTy9MIGOqUBeN4bMcVhKRBjdwRJXRr%2FdDI1XVrLEAb1elV4%2FOvBIx799SHrAoSylYzuZj9WHJNtJI3O3RBqjc405f18jfowcUxosldJP6DwhqJI05nWwev%2BWwvW0IxrZYsTL5r2IH2xECiBmKO3tHGgG0X77JKHgOAqWJrXQQB1zCeQ9mI2xIDCDgdJIXdgjwV8MzjaHdbbkyYYaJ0yfGTZvoeeubJ741Pm%2FZjE&X-Amz-Signature=4b9ace9b5b0044dda5ece006491a94d41352e266b8657af2fabfa789eab54f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBLEEFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDjZkXbWvebCwg%2FMXywk2BZ5CyjonXzUnjItjeOWE88MAIhANXar8WWOZyzccX9VyoPkpNGk6gWFrDzhUo2m91QHmwCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysh2PZ6seUwTYkNcMq3APYQ18cveLVGtwiiamREHS6JP3Bu%2FrhlOhRN0%2B8Gz1TkiDNg6gsJDr8cBeZejMiwB%2BlsyGYPHRBF4%2Fqv3gGmbcLnFEWNN%2F35ad6OlQ6oM%2F4xoyW9kXvnmBm7jlfnFbSVz3Mwdy6GUrCwkzHr6cUR01ov5m3mO9VP5FowzAJn6LJ8thbSp4mL%2BbOkftSR7Ih1UO7esWJGM8P6H8O5NxFZx%2BN%2F%2BeSX01%2FBVRh97yoo2lHJEfNGYz1OU81ySnCh7CUPJm9NtiQ%2B4HLffhVhyE%2F1%2FeegXMDOGU1NRYtm71isiIH3ImOZwa0pDmQp%2FmsyxxS3raClN2U0vfzqqBG2niClYcl0Rj9CuShanrWms16I0LgQmbaajaivHUCVaC9H%2BjotnHW7pkBiAATUTPrWQJncEm16Q%2F%2B5lU1RwLNwsyD70%2B7BLbg4A3M9NUsLQUEIqPUAB%2Fny3%2F2YZvKJ1dvON2SteGqpEJGx0sUrf%2FUSTU%2Fev3HIQMq%2BiQM5K92pwRJYBO%2BhHrOGusXdiH3qe1k%2F%2FLbJIu6oeo082x%2FuWVhHusWT9ZjfgQ%2FsOlfi0nHXUp06SJyGXNiP4GhuTbvJGIqh8gFKT%2BSKVFC%2FQuNGRIAi8YPrgzNw1PR0JYHxu5xgVJHWjDjyNDEBjqkAWjfJVP5xlKo8qwQ%2BHFbFNuEN4OUORZyhhyg4yeMONG2kgsCZQuYhF5mc1cdGSxNoO6zSQlamUb7bbZ7QzHcGqYzaPV9%2F8c6E8O1sCtNgU6U768WuMk2WTzZbVaKILR7GuQZleaYT6lKCH9YyXoXJc%2F8Do53ahmtbU9GSxs9LlyXUNKGy2eqesZrWK%2Fu5NK35Aa0tO%2FPJTlWVxchqnM6wY2Ntf5I&X-Amz-Signature=ae4a67760f54c5233eec8070055b48f1cec0a7a0134bffbdb69e33e2b0b00717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBLEEFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDjZkXbWvebCwg%2FMXywk2BZ5CyjonXzUnjItjeOWE88MAIhANXar8WWOZyzccX9VyoPkpNGk6gWFrDzhUo2m91QHmwCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysh2PZ6seUwTYkNcMq3APYQ18cveLVGtwiiamREHS6JP3Bu%2FrhlOhRN0%2B8Gz1TkiDNg6gsJDr8cBeZejMiwB%2BlsyGYPHRBF4%2Fqv3gGmbcLnFEWNN%2F35ad6OlQ6oM%2F4xoyW9kXvnmBm7jlfnFbSVz3Mwdy6GUrCwkzHr6cUR01ov5m3mO9VP5FowzAJn6LJ8thbSp4mL%2BbOkftSR7Ih1UO7esWJGM8P6H8O5NxFZx%2BN%2F%2BeSX01%2FBVRh97yoo2lHJEfNGYz1OU81ySnCh7CUPJm9NtiQ%2B4HLffhVhyE%2F1%2FeegXMDOGU1NRYtm71isiIH3ImOZwa0pDmQp%2FmsyxxS3raClN2U0vfzqqBG2niClYcl0Rj9CuShanrWms16I0LgQmbaajaivHUCVaC9H%2BjotnHW7pkBiAATUTPrWQJncEm16Q%2F%2B5lU1RwLNwsyD70%2B7BLbg4A3M9NUsLQUEIqPUAB%2Fny3%2F2YZvKJ1dvON2SteGqpEJGx0sUrf%2FUSTU%2Fev3HIQMq%2BiQM5K92pwRJYBO%2BhHrOGusXdiH3qe1k%2F%2FLbJIu6oeo082x%2FuWVhHusWT9ZjfgQ%2FsOlfi0nHXUp06SJyGXNiP4GhuTbvJGIqh8gFKT%2BSKVFC%2FQuNGRIAi8YPrgzNw1PR0JYHxu5xgVJHWjDjyNDEBjqkAWjfJVP5xlKo8qwQ%2BHFbFNuEN4OUORZyhhyg4yeMONG2kgsCZQuYhF5mc1cdGSxNoO6zSQlamUb7bbZ7QzHcGqYzaPV9%2F8c6E8O1sCtNgU6U768WuMk2WTzZbVaKILR7GuQZleaYT6lKCH9YyXoXJc%2F8Do53ahmtbU9GSxs9LlyXUNKGy2eqesZrWK%2Fu5NK35Aa0tO%2FPJTlWVxchqnM6wY2Ntf5I&X-Amz-Signature=8ede4f9cf90166ecf75e9ed0e0068f2688e03b79845282c7afa400e2b9270221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBLEEFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDjZkXbWvebCwg%2FMXywk2BZ5CyjonXzUnjItjeOWE88MAIhANXar8WWOZyzccX9VyoPkpNGk6gWFrDzhUo2m91QHmwCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysh2PZ6seUwTYkNcMq3APYQ18cveLVGtwiiamREHS6JP3Bu%2FrhlOhRN0%2B8Gz1TkiDNg6gsJDr8cBeZejMiwB%2BlsyGYPHRBF4%2Fqv3gGmbcLnFEWNN%2F35ad6OlQ6oM%2F4xoyW9kXvnmBm7jlfnFbSVz3Mwdy6GUrCwkzHr6cUR01ov5m3mO9VP5FowzAJn6LJ8thbSp4mL%2BbOkftSR7Ih1UO7esWJGM8P6H8O5NxFZx%2BN%2F%2BeSX01%2FBVRh97yoo2lHJEfNGYz1OU81ySnCh7CUPJm9NtiQ%2B4HLffhVhyE%2F1%2FeegXMDOGU1NRYtm71isiIH3ImOZwa0pDmQp%2FmsyxxS3raClN2U0vfzqqBG2niClYcl0Rj9CuShanrWms16I0LgQmbaajaivHUCVaC9H%2BjotnHW7pkBiAATUTPrWQJncEm16Q%2F%2B5lU1RwLNwsyD70%2B7BLbg4A3M9NUsLQUEIqPUAB%2Fny3%2F2YZvKJ1dvON2SteGqpEJGx0sUrf%2FUSTU%2Fev3HIQMq%2BiQM5K92pwRJYBO%2BhHrOGusXdiH3qe1k%2F%2FLbJIu6oeo082x%2FuWVhHusWT9ZjfgQ%2FsOlfi0nHXUp06SJyGXNiP4GhuTbvJGIqh8gFKT%2BSKVFC%2FQuNGRIAi8YPrgzNw1PR0JYHxu5xgVJHWjDjyNDEBjqkAWjfJVP5xlKo8qwQ%2BHFbFNuEN4OUORZyhhyg4yeMONG2kgsCZQuYhF5mc1cdGSxNoO6zSQlamUb7bbZ7QzHcGqYzaPV9%2F8c6E8O1sCtNgU6U768WuMk2WTzZbVaKILR7GuQZleaYT6lKCH9YyXoXJc%2F8Do53ahmtbU9GSxs9LlyXUNKGy2eqesZrWK%2Fu5NK35Aa0tO%2FPJTlWVxchqnM6wY2Ntf5I&X-Amz-Signature=df0cc1a9c5a9698dd91a164f8fe8a263fce56f41e2ceca1af84f8321f20acf50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBLEEFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDjZkXbWvebCwg%2FMXywk2BZ5CyjonXzUnjItjeOWE88MAIhANXar8WWOZyzccX9VyoPkpNGk6gWFrDzhUo2m91QHmwCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysh2PZ6seUwTYkNcMq3APYQ18cveLVGtwiiamREHS6JP3Bu%2FrhlOhRN0%2B8Gz1TkiDNg6gsJDr8cBeZejMiwB%2BlsyGYPHRBF4%2Fqv3gGmbcLnFEWNN%2F35ad6OlQ6oM%2F4xoyW9kXvnmBm7jlfnFbSVz3Mwdy6GUrCwkzHr6cUR01ov5m3mO9VP5FowzAJn6LJ8thbSp4mL%2BbOkftSR7Ih1UO7esWJGM8P6H8O5NxFZx%2BN%2F%2BeSX01%2FBVRh97yoo2lHJEfNGYz1OU81ySnCh7CUPJm9NtiQ%2B4HLffhVhyE%2F1%2FeegXMDOGU1NRYtm71isiIH3ImOZwa0pDmQp%2FmsyxxS3raClN2U0vfzqqBG2niClYcl0Rj9CuShanrWms16I0LgQmbaajaivHUCVaC9H%2BjotnHW7pkBiAATUTPrWQJncEm16Q%2F%2B5lU1RwLNwsyD70%2B7BLbg4A3M9NUsLQUEIqPUAB%2Fny3%2F2YZvKJ1dvON2SteGqpEJGx0sUrf%2FUSTU%2Fev3HIQMq%2BiQM5K92pwRJYBO%2BhHrOGusXdiH3qe1k%2F%2FLbJIu6oeo082x%2FuWVhHusWT9ZjfgQ%2FsOlfi0nHXUp06SJyGXNiP4GhuTbvJGIqh8gFKT%2BSKVFC%2FQuNGRIAi8YPrgzNw1PR0JYHxu5xgVJHWjDjyNDEBjqkAWjfJVP5xlKo8qwQ%2BHFbFNuEN4OUORZyhhyg4yeMONG2kgsCZQuYhF5mc1cdGSxNoO6zSQlamUb7bbZ7QzHcGqYzaPV9%2F8c6E8O1sCtNgU6U768WuMk2WTzZbVaKILR7GuQZleaYT6lKCH9YyXoXJc%2F8Do53ahmtbU9GSxs9LlyXUNKGy2eqesZrWK%2Fu5NK35Aa0tO%2FPJTlWVxchqnM6wY2Ntf5I&X-Amz-Signature=d08c672407a3b6891b6a58b933de986c2e295fc7a2ddda5241777eeb5ceab245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBLEEFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDjZkXbWvebCwg%2FMXywk2BZ5CyjonXzUnjItjeOWE88MAIhANXar8WWOZyzccX9VyoPkpNGk6gWFrDzhUo2m91QHmwCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysh2PZ6seUwTYkNcMq3APYQ18cveLVGtwiiamREHS6JP3Bu%2FrhlOhRN0%2B8Gz1TkiDNg6gsJDr8cBeZejMiwB%2BlsyGYPHRBF4%2Fqv3gGmbcLnFEWNN%2F35ad6OlQ6oM%2F4xoyW9kXvnmBm7jlfnFbSVz3Mwdy6GUrCwkzHr6cUR01ov5m3mO9VP5FowzAJn6LJ8thbSp4mL%2BbOkftSR7Ih1UO7esWJGM8P6H8O5NxFZx%2BN%2F%2BeSX01%2FBVRh97yoo2lHJEfNGYz1OU81ySnCh7CUPJm9NtiQ%2B4HLffhVhyE%2F1%2FeegXMDOGU1NRYtm71isiIH3ImOZwa0pDmQp%2FmsyxxS3raClN2U0vfzqqBG2niClYcl0Rj9CuShanrWms16I0LgQmbaajaivHUCVaC9H%2BjotnHW7pkBiAATUTPrWQJncEm16Q%2F%2B5lU1RwLNwsyD70%2B7BLbg4A3M9NUsLQUEIqPUAB%2Fny3%2F2YZvKJ1dvON2SteGqpEJGx0sUrf%2FUSTU%2Fev3HIQMq%2BiQM5K92pwRJYBO%2BhHrOGusXdiH3qe1k%2F%2FLbJIu6oeo082x%2FuWVhHusWT9ZjfgQ%2FsOlfi0nHXUp06SJyGXNiP4GhuTbvJGIqh8gFKT%2BSKVFC%2FQuNGRIAi8YPrgzNw1PR0JYHxu5xgVJHWjDjyNDEBjqkAWjfJVP5xlKo8qwQ%2BHFbFNuEN4OUORZyhhyg4yeMONG2kgsCZQuYhF5mc1cdGSxNoO6zSQlamUb7bbZ7QzHcGqYzaPV9%2F8c6E8O1sCtNgU6U768WuMk2WTzZbVaKILR7GuQZleaYT6lKCH9YyXoXJc%2F8Do53ahmtbU9GSxs9LlyXUNKGy2eqesZrWK%2Fu5NK35Aa0tO%2FPJTlWVxchqnM6wY2Ntf5I&X-Amz-Signature=b37d34b9114220429dbbaf581323f5c434a4eeff6ae0d2f06bb4454e0c56ffc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBLEEFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDjZkXbWvebCwg%2FMXywk2BZ5CyjonXzUnjItjeOWE88MAIhANXar8WWOZyzccX9VyoPkpNGk6gWFrDzhUo2m91QHmwCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysh2PZ6seUwTYkNcMq3APYQ18cveLVGtwiiamREHS6JP3Bu%2FrhlOhRN0%2B8Gz1TkiDNg6gsJDr8cBeZejMiwB%2BlsyGYPHRBF4%2Fqv3gGmbcLnFEWNN%2F35ad6OlQ6oM%2F4xoyW9kXvnmBm7jlfnFbSVz3Mwdy6GUrCwkzHr6cUR01ov5m3mO9VP5FowzAJn6LJ8thbSp4mL%2BbOkftSR7Ih1UO7esWJGM8P6H8O5NxFZx%2BN%2F%2BeSX01%2FBVRh97yoo2lHJEfNGYz1OU81ySnCh7CUPJm9NtiQ%2B4HLffhVhyE%2F1%2FeegXMDOGU1NRYtm71isiIH3ImOZwa0pDmQp%2FmsyxxS3raClN2U0vfzqqBG2niClYcl0Rj9CuShanrWms16I0LgQmbaajaivHUCVaC9H%2BjotnHW7pkBiAATUTPrWQJncEm16Q%2F%2B5lU1RwLNwsyD70%2B7BLbg4A3M9NUsLQUEIqPUAB%2Fny3%2F2YZvKJ1dvON2SteGqpEJGx0sUrf%2FUSTU%2Fev3HIQMq%2BiQM5K92pwRJYBO%2BhHrOGusXdiH3qe1k%2F%2FLbJIu6oeo082x%2FuWVhHusWT9ZjfgQ%2FsOlfi0nHXUp06SJyGXNiP4GhuTbvJGIqh8gFKT%2BSKVFC%2FQuNGRIAi8YPrgzNw1PR0JYHxu5xgVJHWjDjyNDEBjqkAWjfJVP5xlKo8qwQ%2BHFbFNuEN4OUORZyhhyg4yeMONG2kgsCZQuYhF5mc1cdGSxNoO6zSQlamUb7bbZ7QzHcGqYzaPV9%2F8c6E8O1sCtNgU6U768WuMk2WTzZbVaKILR7GuQZleaYT6lKCH9YyXoXJc%2F8Do53ahmtbU9GSxs9LlyXUNKGy2eqesZrWK%2Fu5NK35Aa0tO%2FPJTlWVxchqnM6wY2Ntf5I&X-Amz-Signature=aa1766d88d7e6a9dd3bf03fc606415034cd7111e5ee0068654f172a0dc06c2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBLEEFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDjZkXbWvebCwg%2FMXywk2BZ5CyjonXzUnjItjeOWE88MAIhANXar8WWOZyzccX9VyoPkpNGk6gWFrDzhUo2m91QHmwCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysh2PZ6seUwTYkNcMq3APYQ18cveLVGtwiiamREHS6JP3Bu%2FrhlOhRN0%2B8Gz1TkiDNg6gsJDr8cBeZejMiwB%2BlsyGYPHRBF4%2Fqv3gGmbcLnFEWNN%2F35ad6OlQ6oM%2F4xoyW9kXvnmBm7jlfnFbSVz3Mwdy6GUrCwkzHr6cUR01ov5m3mO9VP5FowzAJn6LJ8thbSp4mL%2BbOkftSR7Ih1UO7esWJGM8P6H8O5NxFZx%2BN%2F%2BeSX01%2FBVRh97yoo2lHJEfNGYz1OU81ySnCh7CUPJm9NtiQ%2B4HLffhVhyE%2F1%2FeegXMDOGU1NRYtm71isiIH3ImOZwa0pDmQp%2FmsyxxS3raClN2U0vfzqqBG2niClYcl0Rj9CuShanrWms16I0LgQmbaajaivHUCVaC9H%2BjotnHW7pkBiAATUTPrWQJncEm16Q%2F%2B5lU1RwLNwsyD70%2B7BLbg4A3M9NUsLQUEIqPUAB%2Fny3%2F2YZvKJ1dvON2SteGqpEJGx0sUrf%2FUSTU%2Fev3HIQMq%2BiQM5K92pwRJYBO%2BhHrOGusXdiH3qe1k%2F%2FLbJIu6oeo082x%2FuWVhHusWT9ZjfgQ%2FsOlfi0nHXUp06SJyGXNiP4GhuTbvJGIqh8gFKT%2BSKVFC%2FQuNGRIAi8YPrgzNw1PR0JYHxu5xgVJHWjDjyNDEBjqkAWjfJVP5xlKo8qwQ%2BHFbFNuEN4OUORZyhhyg4yeMONG2kgsCZQuYhF5mc1cdGSxNoO6zSQlamUb7bbZ7QzHcGqYzaPV9%2F8c6E8O1sCtNgU6U768WuMk2WTzZbVaKILR7GuQZleaYT6lKCH9YyXoXJc%2F8Do53ahmtbU9GSxs9LlyXUNKGy2eqesZrWK%2Fu5NK35Aa0tO%2FPJTlWVxchqnM6wY2Ntf5I&X-Amz-Signature=e07a0ec47ff4b7950dbe9d409bc136838d071023ee579b7dd7e9300dc1d11f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

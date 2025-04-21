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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRG3MQG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGyeYo9iFH9WL%2Bbj1HALj4C9ZgGzvqRj5VbPupth2vPOAiBdE%2F3iuQpIN4dv%2FV65Q5NN%2BTNbfF6MjEr9UUEWPNSLhiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu1%2FTj82%2FXg9iR61KtwDRh9lnVP3K%2FKP0lczHK6v2zFOeVpLPGJolgGxsqdsXVney7PMtPDZAw5ZYyRimcAENiFabyRsr5wm0YKR1y8HCUX0SlYrnP4E7WGuxdv5Kh2KYORCP3lJN4Sk9Xr87cGuUuy0B27BOOv20sUZehXJNSj9HOPJgkVP9kn2n%2BFUTs1JAcsprKT7IYMrbSH0B%2BiceeIIYORy79WIDMgsdkL3xN5vH0qOfh%2FTVQT27B6gf9ziVmPAoevM5TcFvI6APWFwtEOgnq8Ua515xroJEjJfoH0WxvGnVuH7xjXUssrNy9HV0c5g7if%2F2uhfDLYkJJDzOocHFIQToaO0WlsCeyN3yj7vvVoauihXkRMSDSjrPhrZq6wPtccWfK%2BL0SV3BPodvyWiJGdC1mn1MXpuGZQfNx7LPcMTyX0rymRwdY7VOWW3RrWVFbWtkyf3L41f3WhmquVa2FgZFZ06UXrfVlP2gm9TlKduzTUT%2FSiMvUtUpfIY514YT2Fie3TiX6IqcikG77uCd4lB%2BiOLbCbzbh8BKlFb2HlS%2B1s8o23nd7O7b%2FJw7kxz4MCPjRv6wbSkJUENZKjahQo5lqAl6qVUdCOGDrUi2axRTwTcfIkVnn7kQzKBZ6XxbXvo7sRdlN4wqIWawAY6pgEQAwDiHg%2BnXVMdCI2Cn8CVPLvuw71dIV4WQDiu9iD29ZOIVFgdQpVulYN3SJJcSmi7s%2BwaVM1E2A2HvHLTSjMA7RuSNI81khIxmJPIIRmWbNKs6jjkY9dcPEgms870awF53DxS3hbuzbZ1kqn69MdQdrTeWPv6usC4DaeT8aQKoUDW%2FCxdb1EJKIDEMg30EZsynMpinraJTWr8U91Cmxe6JBMzA7ko&X-Amz-Signature=57ba3ab3c822468f253d330616f1cb2df80ca9efaf41d7fcfefbc4e9eda7b7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRG3MQG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGyeYo9iFH9WL%2Bbj1HALj4C9ZgGzvqRj5VbPupth2vPOAiBdE%2F3iuQpIN4dv%2FV65Q5NN%2BTNbfF6MjEr9UUEWPNSLhiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu1%2FTj82%2FXg9iR61KtwDRh9lnVP3K%2FKP0lczHK6v2zFOeVpLPGJolgGxsqdsXVney7PMtPDZAw5ZYyRimcAENiFabyRsr5wm0YKR1y8HCUX0SlYrnP4E7WGuxdv5Kh2KYORCP3lJN4Sk9Xr87cGuUuy0B27BOOv20sUZehXJNSj9HOPJgkVP9kn2n%2BFUTs1JAcsprKT7IYMrbSH0B%2BiceeIIYORy79WIDMgsdkL3xN5vH0qOfh%2FTVQT27B6gf9ziVmPAoevM5TcFvI6APWFwtEOgnq8Ua515xroJEjJfoH0WxvGnVuH7xjXUssrNy9HV0c5g7if%2F2uhfDLYkJJDzOocHFIQToaO0WlsCeyN3yj7vvVoauihXkRMSDSjrPhrZq6wPtccWfK%2BL0SV3BPodvyWiJGdC1mn1MXpuGZQfNx7LPcMTyX0rymRwdY7VOWW3RrWVFbWtkyf3L41f3WhmquVa2FgZFZ06UXrfVlP2gm9TlKduzTUT%2FSiMvUtUpfIY514YT2Fie3TiX6IqcikG77uCd4lB%2BiOLbCbzbh8BKlFb2HlS%2B1s8o23nd7O7b%2FJw7kxz4MCPjRv6wbSkJUENZKjahQo5lqAl6qVUdCOGDrUi2axRTwTcfIkVnn7kQzKBZ6XxbXvo7sRdlN4wqIWawAY6pgEQAwDiHg%2BnXVMdCI2Cn8CVPLvuw71dIV4WQDiu9iD29ZOIVFgdQpVulYN3SJJcSmi7s%2BwaVM1E2A2HvHLTSjMA7RuSNI81khIxmJPIIRmWbNKs6jjkY9dcPEgms870awF53DxS3hbuzbZ1kqn69MdQdrTeWPv6usC4DaeT8aQKoUDW%2FCxdb1EJKIDEMg30EZsynMpinraJTWr8U91Cmxe6JBMzA7ko&X-Amz-Signature=c5b7cfcac59b30ac58c3dca2487258a0a2d8f89d7ecb0f3c89e6e3f857beb143&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRG3MQG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGyeYo9iFH9WL%2Bbj1HALj4C9ZgGzvqRj5VbPupth2vPOAiBdE%2F3iuQpIN4dv%2FV65Q5NN%2BTNbfF6MjEr9UUEWPNSLhiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu1%2FTj82%2FXg9iR61KtwDRh9lnVP3K%2FKP0lczHK6v2zFOeVpLPGJolgGxsqdsXVney7PMtPDZAw5ZYyRimcAENiFabyRsr5wm0YKR1y8HCUX0SlYrnP4E7WGuxdv5Kh2KYORCP3lJN4Sk9Xr87cGuUuy0B27BOOv20sUZehXJNSj9HOPJgkVP9kn2n%2BFUTs1JAcsprKT7IYMrbSH0B%2BiceeIIYORy79WIDMgsdkL3xN5vH0qOfh%2FTVQT27B6gf9ziVmPAoevM5TcFvI6APWFwtEOgnq8Ua515xroJEjJfoH0WxvGnVuH7xjXUssrNy9HV0c5g7if%2F2uhfDLYkJJDzOocHFIQToaO0WlsCeyN3yj7vvVoauihXkRMSDSjrPhrZq6wPtccWfK%2BL0SV3BPodvyWiJGdC1mn1MXpuGZQfNx7LPcMTyX0rymRwdY7VOWW3RrWVFbWtkyf3L41f3WhmquVa2FgZFZ06UXrfVlP2gm9TlKduzTUT%2FSiMvUtUpfIY514YT2Fie3TiX6IqcikG77uCd4lB%2BiOLbCbzbh8BKlFb2HlS%2B1s8o23nd7O7b%2FJw7kxz4MCPjRv6wbSkJUENZKjahQo5lqAl6qVUdCOGDrUi2axRTwTcfIkVnn7kQzKBZ6XxbXvo7sRdlN4wqIWawAY6pgEQAwDiHg%2BnXVMdCI2Cn8CVPLvuw71dIV4WQDiu9iD29ZOIVFgdQpVulYN3SJJcSmi7s%2BwaVM1E2A2HvHLTSjMA7RuSNI81khIxmJPIIRmWbNKs6jjkY9dcPEgms870awF53DxS3hbuzbZ1kqn69MdQdrTeWPv6usC4DaeT8aQKoUDW%2FCxdb1EJKIDEMg30EZsynMpinraJTWr8U91Cmxe6JBMzA7ko&X-Amz-Signature=1149fb4a3291fdf471fcafb9b40dfffcd48877f5248b58128203b0afcadf5655&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRG3MQG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGyeYo9iFH9WL%2Bbj1HALj4C9ZgGzvqRj5VbPupth2vPOAiBdE%2F3iuQpIN4dv%2FV65Q5NN%2BTNbfF6MjEr9UUEWPNSLhiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu1%2FTj82%2FXg9iR61KtwDRh9lnVP3K%2FKP0lczHK6v2zFOeVpLPGJolgGxsqdsXVney7PMtPDZAw5ZYyRimcAENiFabyRsr5wm0YKR1y8HCUX0SlYrnP4E7WGuxdv5Kh2KYORCP3lJN4Sk9Xr87cGuUuy0B27BOOv20sUZehXJNSj9HOPJgkVP9kn2n%2BFUTs1JAcsprKT7IYMrbSH0B%2BiceeIIYORy79WIDMgsdkL3xN5vH0qOfh%2FTVQT27B6gf9ziVmPAoevM5TcFvI6APWFwtEOgnq8Ua515xroJEjJfoH0WxvGnVuH7xjXUssrNy9HV0c5g7if%2F2uhfDLYkJJDzOocHFIQToaO0WlsCeyN3yj7vvVoauihXkRMSDSjrPhrZq6wPtccWfK%2BL0SV3BPodvyWiJGdC1mn1MXpuGZQfNx7LPcMTyX0rymRwdY7VOWW3RrWVFbWtkyf3L41f3WhmquVa2FgZFZ06UXrfVlP2gm9TlKduzTUT%2FSiMvUtUpfIY514YT2Fie3TiX6IqcikG77uCd4lB%2BiOLbCbzbh8BKlFb2HlS%2B1s8o23nd7O7b%2FJw7kxz4MCPjRv6wbSkJUENZKjahQo5lqAl6qVUdCOGDrUi2axRTwTcfIkVnn7kQzKBZ6XxbXvo7sRdlN4wqIWawAY6pgEQAwDiHg%2BnXVMdCI2Cn8CVPLvuw71dIV4WQDiu9iD29ZOIVFgdQpVulYN3SJJcSmi7s%2BwaVM1E2A2HvHLTSjMA7RuSNI81khIxmJPIIRmWbNKs6jjkY9dcPEgms870awF53DxS3hbuzbZ1kqn69MdQdrTeWPv6usC4DaeT8aQKoUDW%2FCxdb1EJKIDEMg30EZsynMpinraJTWr8U91Cmxe6JBMzA7ko&X-Amz-Signature=59512eddbc615aa1a8252067ef6f0b7913f5d5c6e8b05dfb41fec2cc9090d6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRG3MQG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGyeYo9iFH9WL%2Bbj1HALj4C9ZgGzvqRj5VbPupth2vPOAiBdE%2F3iuQpIN4dv%2FV65Q5NN%2BTNbfF6MjEr9UUEWPNSLhiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu1%2FTj82%2FXg9iR61KtwDRh9lnVP3K%2FKP0lczHK6v2zFOeVpLPGJolgGxsqdsXVney7PMtPDZAw5ZYyRimcAENiFabyRsr5wm0YKR1y8HCUX0SlYrnP4E7WGuxdv5Kh2KYORCP3lJN4Sk9Xr87cGuUuy0B27BOOv20sUZehXJNSj9HOPJgkVP9kn2n%2BFUTs1JAcsprKT7IYMrbSH0B%2BiceeIIYORy79WIDMgsdkL3xN5vH0qOfh%2FTVQT27B6gf9ziVmPAoevM5TcFvI6APWFwtEOgnq8Ua515xroJEjJfoH0WxvGnVuH7xjXUssrNy9HV0c5g7if%2F2uhfDLYkJJDzOocHFIQToaO0WlsCeyN3yj7vvVoauihXkRMSDSjrPhrZq6wPtccWfK%2BL0SV3BPodvyWiJGdC1mn1MXpuGZQfNx7LPcMTyX0rymRwdY7VOWW3RrWVFbWtkyf3L41f3WhmquVa2FgZFZ06UXrfVlP2gm9TlKduzTUT%2FSiMvUtUpfIY514YT2Fie3TiX6IqcikG77uCd4lB%2BiOLbCbzbh8BKlFb2HlS%2B1s8o23nd7O7b%2FJw7kxz4MCPjRv6wbSkJUENZKjahQo5lqAl6qVUdCOGDrUi2axRTwTcfIkVnn7kQzKBZ6XxbXvo7sRdlN4wqIWawAY6pgEQAwDiHg%2BnXVMdCI2Cn8CVPLvuw71dIV4WQDiu9iD29ZOIVFgdQpVulYN3SJJcSmi7s%2BwaVM1E2A2HvHLTSjMA7RuSNI81khIxmJPIIRmWbNKs6jjkY9dcPEgms870awF53DxS3hbuzbZ1kqn69MdQdrTeWPv6usC4DaeT8aQKoUDW%2FCxdb1EJKIDEMg30EZsynMpinraJTWr8U91Cmxe6JBMzA7ko&X-Amz-Signature=4510ac36452bc543a5625190077d4e2c3c80a48e30df2925aec5348d130ecd29&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRG3MQG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGyeYo9iFH9WL%2Bbj1HALj4C9ZgGzvqRj5VbPupth2vPOAiBdE%2F3iuQpIN4dv%2FV65Q5NN%2BTNbfF6MjEr9UUEWPNSLhiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu1%2FTj82%2FXg9iR61KtwDRh9lnVP3K%2FKP0lczHK6v2zFOeVpLPGJolgGxsqdsXVney7PMtPDZAw5ZYyRimcAENiFabyRsr5wm0YKR1y8HCUX0SlYrnP4E7WGuxdv5Kh2KYORCP3lJN4Sk9Xr87cGuUuy0B27BOOv20sUZehXJNSj9HOPJgkVP9kn2n%2BFUTs1JAcsprKT7IYMrbSH0B%2BiceeIIYORy79WIDMgsdkL3xN5vH0qOfh%2FTVQT27B6gf9ziVmPAoevM5TcFvI6APWFwtEOgnq8Ua515xroJEjJfoH0WxvGnVuH7xjXUssrNy9HV0c5g7if%2F2uhfDLYkJJDzOocHFIQToaO0WlsCeyN3yj7vvVoauihXkRMSDSjrPhrZq6wPtccWfK%2BL0SV3BPodvyWiJGdC1mn1MXpuGZQfNx7LPcMTyX0rymRwdY7VOWW3RrWVFbWtkyf3L41f3WhmquVa2FgZFZ06UXrfVlP2gm9TlKduzTUT%2FSiMvUtUpfIY514YT2Fie3TiX6IqcikG77uCd4lB%2BiOLbCbzbh8BKlFb2HlS%2B1s8o23nd7O7b%2FJw7kxz4MCPjRv6wbSkJUENZKjahQo5lqAl6qVUdCOGDrUi2axRTwTcfIkVnn7kQzKBZ6XxbXvo7sRdlN4wqIWawAY6pgEQAwDiHg%2BnXVMdCI2Cn8CVPLvuw71dIV4WQDiu9iD29ZOIVFgdQpVulYN3SJJcSmi7s%2BwaVM1E2A2HvHLTSjMA7RuSNI81khIxmJPIIRmWbNKs6jjkY9dcPEgms870awF53DxS3hbuzbZ1kqn69MdQdrTeWPv6usC4DaeT8aQKoUDW%2FCxdb1EJKIDEMg30EZsynMpinraJTWr8U91Cmxe6JBMzA7ko&X-Amz-Signature=08416a47a3d96f9a5a5cc75d1a22aaf0c3224be318c789b2bac705d607afc634&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRG3MQG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGyeYo9iFH9WL%2Bbj1HALj4C9ZgGzvqRj5VbPupth2vPOAiBdE%2F3iuQpIN4dv%2FV65Q5NN%2BTNbfF6MjEr9UUEWPNSLhiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu1%2FTj82%2FXg9iR61KtwDRh9lnVP3K%2FKP0lczHK6v2zFOeVpLPGJolgGxsqdsXVney7PMtPDZAw5ZYyRimcAENiFabyRsr5wm0YKR1y8HCUX0SlYrnP4E7WGuxdv5Kh2KYORCP3lJN4Sk9Xr87cGuUuy0B27BOOv20sUZehXJNSj9HOPJgkVP9kn2n%2BFUTs1JAcsprKT7IYMrbSH0B%2BiceeIIYORy79WIDMgsdkL3xN5vH0qOfh%2FTVQT27B6gf9ziVmPAoevM5TcFvI6APWFwtEOgnq8Ua515xroJEjJfoH0WxvGnVuH7xjXUssrNy9HV0c5g7if%2F2uhfDLYkJJDzOocHFIQToaO0WlsCeyN3yj7vvVoauihXkRMSDSjrPhrZq6wPtccWfK%2BL0SV3BPodvyWiJGdC1mn1MXpuGZQfNx7LPcMTyX0rymRwdY7VOWW3RrWVFbWtkyf3L41f3WhmquVa2FgZFZ06UXrfVlP2gm9TlKduzTUT%2FSiMvUtUpfIY514YT2Fie3TiX6IqcikG77uCd4lB%2BiOLbCbzbh8BKlFb2HlS%2B1s8o23nd7O7b%2FJw7kxz4MCPjRv6wbSkJUENZKjahQo5lqAl6qVUdCOGDrUi2axRTwTcfIkVnn7kQzKBZ6XxbXvo7sRdlN4wqIWawAY6pgEQAwDiHg%2BnXVMdCI2Cn8CVPLvuw71dIV4WQDiu9iD29ZOIVFgdQpVulYN3SJJcSmi7s%2BwaVM1E2A2HvHLTSjMA7RuSNI81khIxmJPIIRmWbNKs6jjkY9dcPEgms870awF53DxS3hbuzbZ1kqn69MdQdrTeWPv6usC4DaeT8aQKoUDW%2FCxdb1EJKIDEMg30EZsynMpinraJTWr8U91Cmxe6JBMzA7ko&X-Amz-Signature=82769cc27b38d479ae4ec4f5a79de64065baf42d4084fde9840c88aa841f6e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

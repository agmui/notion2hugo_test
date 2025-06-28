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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R5RBF6J%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn%2FayFA%2FeqlOZVnX3RJH89EqsXRVTWe17dwLQUoGcFKAIgKGrCF8%2BnYOfXGzBMXRvGurd5jRdS8S2%2B%2FueXjdaZF9UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4nStNkNpVTSGSiVyrcA0XvTOWi4GOssw4Urn5U5zxDblElEfWbcqy01DWwzHx7Eng5qUDmrq7CK27PkhkkTJ9SRKZbfSUXYqnJXOIwU1g8AdRZGhahuu8%2FxP1mp5bGlay90ELD7UaXaiiFICN%2FfEv%2BT2Y7iwz5KqIbUPituRkqf%2F2xhV3iqsQpkcwS1EHo%2F7qM84urRvNptmuT%2BLFmqIRvz7oARX%2FayWPkdO2RmEiw3wlAC%2FkImlEv8juf%2FgRnpkYlXkmye75uWiChd7cowViosMbIjh4pSb5g8jBwuRlZI465h4ZYi%2BX0hD9rtHyJQTq6ghdcPmmU3ITqq5kjO2bynqKPxv0Vc3iBMfN6rn2kqhUsK6cyYVkYScYM%2FxjtpfmwVyQ7PgakQxJIVsKUmA6r5BskgqGvvUfkvU9KcMh3FD9ui0mPNI%2Foxk8BHKjUUphR4angMh8fPlBDyxBYaOSlWw%2BWrqsnZSuuRUnZ6L7oyJQb9P55MjCcT1jPS2I%2F2h5WGdBQ2ubRXP84jp%2FB0GVUmopGDJWgiI1z3Zf0fbFIEY4InDmHtQhxe3gYt69Wb6FN22glm8JV0H%2FqyWAGV5ai6suBLWwEp8t13HZsDMarVCeEQ269tVyadgxAW7Ntnwi9T%2FxDpLCXpe5EMLT0gMMGOqUBdkVgOFePX1tHKCpFt04T0pxL9booGKDvrdT2QjQMol%2FE%2Fm43niDcFReFd3rNERAVy3E3Zn0m1HYWs9uvfvwXdeHWlnkPE1lJgMd9srI3eXReweTgwLPp3jVxmDTe6v7s5o6%2FjE5m5nC4ffP1jZDe1Llh1mQlKFJUYH9K93xl1HGmeSVdJdOZrKBrSTDyJRfUuF8wRwS4PfwwaStL1WGBRU7KiYQc&X-Amz-Signature=703746ac5bb81c7b29a08727b1cdab0f4e36c59b965c3f4db61d4b091aa1bb1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R5RBF6J%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn%2FayFA%2FeqlOZVnX3RJH89EqsXRVTWe17dwLQUoGcFKAIgKGrCF8%2BnYOfXGzBMXRvGurd5jRdS8S2%2B%2FueXjdaZF9UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4nStNkNpVTSGSiVyrcA0XvTOWi4GOssw4Urn5U5zxDblElEfWbcqy01DWwzHx7Eng5qUDmrq7CK27PkhkkTJ9SRKZbfSUXYqnJXOIwU1g8AdRZGhahuu8%2FxP1mp5bGlay90ELD7UaXaiiFICN%2FfEv%2BT2Y7iwz5KqIbUPituRkqf%2F2xhV3iqsQpkcwS1EHo%2F7qM84urRvNptmuT%2BLFmqIRvz7oARX%2FayWPkdO2RmEiw3wlAC%2FkImlEv8juf%2FgRnpkYlXkmye75uWiChd7cowViosMbIjh4pSb5g8jBwuRlZI465h4ZYi%2BX0hD9rtHyJQTq6ghdcPmmU3ITqq5kjO2bynqKPxv0Vc3iBMfN6rn2kqhUsK6cyYVkYScYM%2FxjtpfmwVyQ7PgakQxJIVsKUmA6r5BskgqGvvUfkvU9KcMh3FD9ui0mPNI%2Foxk8BHKjUUphR4angMh8fPlBDyxBYaOSlWw%2BWrqsnZSuuRUnZ6L7oyJQb9P55MjCcT1jPS2I%2F2h5WGdBQ2ubRXP84jp%2FB0GVUmopGDJWgiI1z3Zf0fbFIEY4InDmHtQhxe3gYt69Wb6FN22glm8JV0H%2FqyWAGV5ai6suBLWwEp8t13HZsDMarVCeEQ269tVyadgxAW7Ntnwi9T%2FxDpLCXpe5EMLT0gMMGOqUBdkVgOFePX1tHKCpFt04T0pxL9booGKDvrdT2QjQMol%2FE%2Fm43niDcFReFd3rNERAVy3E3Zn0m1HYWs9uvfvwXdeHWlnkPE1lJgMd9srI3eXReweTgwLPp3jVxmDTe6v7s5o6%2FjE5m5nC4ffP1jZDe1Llh1mQlKFJUYH9K93xl1HGmeSVdJdOZrKBrSTDyJRfUuF8wRwS4PfwwaStL1WGBRU7KiYQc&X-Amz-Signature=4d21f0cc8b993d4c53372f7bb097e4bcccbdfd4e85bbf77fff4e8b589c25741d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R5RBF6J%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn%2FayFA%2FeqlOZVnX3RJH89EqsXRVTWe17dwLQUoGcFKAIgKGrCF8%2BnYOfXGzBMXRvGurd5jRdS8S2%2B%2FueXjdaZF9UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4nStNkNpVTSGSiVyrcA0XvTOWi4GOssw4Urn5U5zxDblElEfWbcqy01DWwzHx7Eng5qUDmrq7CK27PkhkkTJ9SRKZbfSUXYqnJXOIwU1g8AdRZGhahuu8%2FxP1mp5bGlay90ELD7UaXaiiFICN%2FfEv%2BT2Y7iwz5KqIbUPituRkqf%2F2xhV3iqsQpkcwS1EHo%2F7qM84urRvNptmuT%2BLFmqIRvz7oARX%2FayWPkdO2RmEiw3wlAC%2FkImlEv8juf%2FgRnpkYlXkmye75uWiChd7cowViosMbIjh4pSb5g8jBwuRlZI465h4ZYi%2BX0hD9rtHyJQTq6ghdcPmmU3ITqq5kjO2bynqKPxv0Vc3iBMfN6rn2kqhUsK6cyYVkYScYM%2FxjtpfmwVyQ7PgakQxJIVsKUmA6r5BskgqGvvUfkvU9KcMh3FD9ui0mPNI%2Foxk8BHKjUUphR4angMh8fPlBDyxBYaOSlWw%2BWrqsnZSuuRUnZ6L7oyJQb9P55MjCcT1jPS2I%2F2h5WGdBQ2ubRXP84jp%2FB0GVUmopGDJWgiI1z3Zf0fbFIEY4InDmHtQhxe3gYt69Wb6FN22glm8JV0H%2FqyWAGV5ai6suBLWwEp8t13HZsDMarVCeEQ269tVyadgxAW7Ntnwi9T%2FxDpLCXpe5EMLT0gMMGOqUBdkVgOFePX1tHKCpFt04T0pxL9booGKDvrdT2QjQMol%2FE%2Fm43niDcFReFd3rNERAVy3E3Zn0m1HYWs9uvfvwXdeHWlnkPE1lJgMd9srI3eXReweTgwLPp3jVxmDTe6v7s5o6%2FjE5m5nC4ffP1jZDe1Llh1mQlKFJUYH9K93xl1HGmeSVdJdOZrKBrSTDyJRfUuF8wRwS4PfwwaStL1WGBRU7KiYQc&X-Amz-Signature=8b65e8227dc2f1f2c3bc2b8a29b17c33ce462b03f3e230df6f824ad575c976ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R5RBF6J%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn%2FayFA%2FeqlOZVnX3RJH89EqsXRVTWe17dwLQUoGcFKAIgKGrCF8%2BnYOfXGzBMXRvGurd5jRdS8S2%2B%2FueXjdaZF9UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4nStNkNpVTSGSiVyrcA0XvTOWi4GOssw4Urn5U5zxDblElEfWbcqy01DWwzHx7Eng5qUDmrq7CK27PkhkkTJ9SRKZbfSUXYqnJXOIwU1g8AdRZGhahuu8%2FxP1mp5bGlay90ELD7UaXaiiFICN%2FfEv%2BT2Y7iwz5KqIbUPituRkqf%2F2xhV3iqsQpkcwS1EHo%2F7qM84urRvNptmuT%2BLFmqIRvz7oARX%2FayWPkdO2RmEiw3wlAC%2FkImlEv8juf%2FgRnpkYlXkmye75uWiChd7cowViosMbIjh4pSb5g8jBwuRlZI465h4ZYi%2BX0hD9rtHyJQTq6ghdcPmmU3ITqq5kjO2bynqKPxv0Vc3iBMfN6rn2kqhUsK6cyYVkYScYM%2FxjtpfmwVyQ7PgakQxJIVsKUmA6r5BskgqGvvUfkvU9KcMh3FD9ui0mPNI%2Foxk8BHKjUUphR4angMh8fPlBDyxBYaOSlWw%2BWrqsnZSuuRUnZ6L7oyJQb9P55MjCcT1jPS2I%2F2h5WGdBQ2ubRXP84jp%2FB0GVUmopGDJWgiI1z3Zf0fbFIEY4InDmHtQhxe3gYt69Wb6FN22glm8JV0H%2FqyWAGV5ai6suBLWwEp8t13HZsDMarVCeEQ269tVyadgxAW7Ntnwi9T%2FxDpLCXpe5EMLT0gMMGOqUBdkVgOFePX1tHKCpFt04T0pxL9booGKDvrdT2QjQMol%2FE%2Fm43niDcFReFd3rNERAVy3E3Zn0m1HYWs9uvfvwXdeHWlnkPE1lJgMd9srI3eXReweTgwLPp3jVxmDTe6v7s5o6%2FjE5m5nC4ffP1jZDe1Llh1mQlKFJUYH9K93xl1HGmeSVdJdOZrKBrSTDyJRfUuF8wRwS4PfwwaStL1WGBRU7KiYQc&X-Amz-Signature=bd054da4d0cea8267699a83e823bc3f60f2321a46d5c88cf13bd383851ef7a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R5RBF6J%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn%2FayFA%2FeqlOZVnX3RJH89EqsXRVTWe17dwLQUoGcFKAIgKGrCF8%2BnYOfXGzBMXRvGurd5jRdS8S2%2B%2FueXjdaZF9UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4nStNkNpVTSGSiVyrcA0XvTOWi4GOssw4Urn5U5zxDblElEfWbcqy01DWwzHx7Eng5qUDmrq7CK27PkhkkTJ9SRKZbfSUXYqnJXOIwU1g8AdRZGhahuu8%2FxP1mp5bGlay90ELD7UaXaiiFICN%2FfEv%2BT2Y7iwz5KqIbUPituRkqf%2F2xhV3iqsQpkcwS1EHo%2F7qM84urRvNptmuT%2BLFmqIRvz7oARX%2FayWPkdO2RmEiw3wlAC%2FkImlEv8juf%2FgRnpkYlXkmye75uWiChd7cowViosMbIjh4pSb5g8jBwuRlZI465h4ZYi%2BX0hD9rtHyJQTq6ghdcPmmU3ITqq5kjO2bynqKPxv0Vc3iBMfN6rn2kqhUsK6cyYVkYScYM%2FxjtpfmwVyQ7PgakQxJIVsKUmA6r5BskgqGvvUfkvU9KcMh3FD9ui0mPNI%2Foxk8BHKjUUphR4angMh8fPlBDyxBYaOSlWw%2BWrqsnZSuuRUnZ6L7oyJQb9P55MjCcT1jPS2I%2F2h5WGdBQ2ubRXP84jp%2FB0GVUmopGDJWgiI1z3Zf0fbFIEY4InDmHtQhxe3gYt69Wb6FN22glm8JV0H%2FqyWAGV5ai6suBLWwEp8t13HZsDMarVCeEQ269tVyadgxAW7Ntnwi9T%2FxDpLCXpe5EMLT0gMMGOqUBdkVgOFePX1tHKCpFt04T0pxL9booGKDvrdT2QjQMol%2FE%2Fm43niDcFReFd3rNERAVy3E3Zn0m1HYWs9uvfvwXdeHWlnkPE1lJgMd9srI3eXReweTgwLPp3jVxmDTe6v7s5o6%2FjE5m5nC4ffP1jZDe1Llh1mQlKFJUYH9K93xl1HGmeSVdJdOZrKBrSTDyJRfUuF8wRwS4PfwwaStL1WGBRU7KiYQc&X-Amz-Signature=82a4f79d84d18f7c347b5e7f2acdcf335644163e3108ffa557a0a22dd1f30d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R5RBF6J%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn%2FayFA%2FeqlOZVnX3RJH89EqsXRVTWe17dwLQUoGcFKAIgKGrCF8%2BnYOfXGzBMXRvGurd5jRdS8S2%2B%2FueXjdaZF9UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4nStNkNpVTSGSiVyrcA0XvTOWi4GOssw4Urn5U5zxDblElEfWbcqy01DWwzHx7Eng5qUDmrq7CK27PkhkkTJ9SRKZbfSUXYqnJXOIwU1g8AdRZGhahuu8%2FxP1mp5bGlay90ELD7UaXaiiFICN%2FfEv%2BT2Y7iwz5KqIbUPituRkqf%2F2xhV3iqsQpkcwS1EHo%2F7qM84urRvNptmuT%2BLFmqIRvz7oARX%2FayWPkdO2RmEiw3wlAC%2FkImlEv8juf%2FgRnpkYlXkmye75uWiChd7cowViosMbIjh4pSb5g8jBwuRlZI465h4ZYi%2BX0hD9rtHyJQTq6ghdcPmmU3ITqq5kjO2bynqKPxv0Vc3iBMfN6rn2kqhUsK6cyYVkYScYM%2FxjtpfmwVyQ7PgakQxJIVsKUmA6r5BskgqGvvUfkvU9KcMh3FD9ui0mPNI%2Foxk8BHKjUUphR4angMh8fPlBDyxBYaOSlWw%2BWrqsnZSuuRUnZ6L7oyJQb9P55MjCcT1jPS2I%2F2h5WGdBQ2ubRXP84jp%2FB0GVUmopGDJWgiI1z3Zf0fbFIEY4InDmHtQhxe3gYt69Wb6FN22glm8JV0H%2FqyWAGV5ai6suBLWwEp8t13HZsDMarVCeEQ269tVyadgxAW7Ntnwi9T%2FxDpLCXpe5EMLT0gMMGOqUBdkVgOFePX1tHKCpFt04T0pxL9booGKDvrdT2QjQMol%2FE%2Fm43niDcFReFd3rNERAVy3E3Zn0m1HYWs9uvfvwXdeHWlnkPE1lJgMd9srI3eXReweTgwLPp3jVxmDTe6v7s5o6%2FjE5m5nC4ffP1jZDe1Llh1mQlKFJUYH9K93xl1HGmeSVdJdOZrKBrSTDyJRfUuF8wRwS4PfwwaStL1WGBRU7KiYQc&X-Amz-Signature=43936151d07cc4e81e5d742b40b9b3478bcd62038d851d2f234fae75e55e2e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R5RBF6J%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn%2FayFA%2FeqlOZVnX3RJH89EqsXRVTWe17dwLQUoGcFKAIgKGrCF8%2BnYOfXGzBMXRvGurd5jRdS8S2%2B%2FueXjdaZF9UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4nStNkNpVTSGSiVyrcA0XvTOWi4GOssw4Urn5U5zxDblElEfWbcqy01DWwzHx7Eng5qUDmrq7CK27PkhkkTJ9SRKZbfSUXYqnJXOIwU1g8AdRZGhahuu8%2FxP1mp5bGlay90ELD7UaXaiiFICN%2FfEv%2BT2Y7iwz5KqIbUPituRkqf%2F2xhV3iqsQpkcwS1EHo%2F7qM84urRvNptmuT%2BLFmqIRvz7oARX%2FayWPkdO2RmEiw3wlAC%2FkImlEv8juf%2FgRnpkYlXkmye75uWiChd7cowViosMbIjh4pSb5g8jBwuRlZI465h4ZYi%2BX0hD9rtHyJQTq6ghdcPmmU3ITqq5kjO2bynqKPxv0Vc3iBMfN6rn2kqhUsK6cyYVkYScYM%2FxjtpfmwVyQ7PgakQxJIVsKUmA6r5BskgqGvvUfkvU9KcMh3FD9ui0mPNI%2Foxk8BHKjUUphR4angMh8fPlBDyxBYaOSlWw%2BWrqsnZSuuRUnZ6L7oyJQb9P55MjCcT1jPS2I%2F2h5WGdBQ2ubRXP84jp%2FB0GVUmopGDJWgiI1z3Zf0fbFIEY4InDmHtQhxe3gYt69Wb6FN22glm8JV0H%2FqyWAGV5ai6suBLWwEp8t13HZsDMarVCeEQ269tVyadgxAW7Ntnwi9T%2FxDpLCXpe5EMLT0gMMGOqUBdkVgOFePX1tHKCpFt04T0pxL9booGKDvrdT2QjQMol%2FE%2Fm43niDcFReFd3rNERAVy3E3Zn0m1HYWs9uvfvwXdeHWlnkPE1lJgMd9srI3eXReweTgwLPp3jVxmDTe6v7s5o6%2FjE5m5nC4ffP1jZDe1Llh1mQlKFJUYH9K93xl1HGmeSVdJdOZrKBrSTDyJRfUuF8wRwS4PfwwaStL1WGBRU7KiYQc&X-Amz-Signature=b9a7c9fe0c539a4bc031a8eb7fbafb15486fe7cc562963533853ce300eb1efde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

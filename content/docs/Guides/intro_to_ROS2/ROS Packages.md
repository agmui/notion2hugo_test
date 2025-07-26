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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBCIGUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIE8p7qZGyI1R3ftetJE5dOT%2FWtZRKPp3mUBnYB0CBtJlAiEAv0TGLYbaFsl398aib5Z7%2Bafz%2BC1wi5qh%2FgfzjwYpSvwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNE665QxTLEr22OG3CrcA5Fo1dxViAlNTL3sF3Gn8rH%2FBPj9sbyhKuEsr7Qpbf5tRUBY691UriF4BRhhOR3eWEl2BXqJlI1x7AOujfLDD9rGl1rapXo8UF3D1FHvtPLn4KcDPiw96E9B18h9zZKr0QfAOwzoFOe3VxWtM3PARiIRGAC8bbM9V30K1qU0WVh%2FO0YAp5iIWalPjgM52cTAUdpqb8DUpxy0goVXCbLVwUdq45xTBUnlXsWG%2BZuTFLDNhOfEm32KuHdFn8tCG6whaCN%2FTLcOrEYg%2Bxbqo9FiU2MZF9z5SQbNgn6ImzkbFHAw%2FTe9jTZUk1jbQdAvGRf4eSzo9RBHl6tL0rptuaN1%2Bh2SwKYcvo0qYx8EhEWbF4JALlFdxXVIqK%2FzTcCOX8AkDCwFcJrHemWt9dogpgUl9Cqj3dheb%2FleP%2FpKnFSmWVB8cepdeTxQkPGDNw0iWhzlVopxJShwT6LDF71rkP0zXCKPU9b2g6xRjevOkryzbP5ynNqADQtND37eiNhQ3W2e%2Fo%2F1MgYZ7bqDQaYxTvb9pXlxmWNwJEfAjhViZo5VseNNgAtNRphYrOu%2FevX0xrNWrbi2nZIAZQcxw92NcHG1ccKaWO%2F2zCU%2FNbRo96lSJiHBE3Uo0WUqwunzi5JFMN3%2FlMQGOqUB1XQPSw5eL49gymHb9d1A7kdm2XGMiMBxEZRKYvoVWrXbRXFp16e%2BobeHUpwo3FXT27KxD8VhJVzUOiGF1%2B5HjKrrOrDLaj%2FoZB3wdo2Mr9xT0ucUrVSRixrJCD%2FEtSvNV47OCl3B4I9RFPFyfYFUj6Umhf4dz%2BK8DWcPle8pCrhcJysI0SGFby8KYU5koYDinkp%2B2nmZVuWAip2PWfRnYmn9uoZL&X-Amz-Signature=e6a68db2f226189992fb1ad845626e9a39b57016bd4a86b44fe3077373094848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBCIGUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIE8p7qZGyI1R3ftetJE5dOT%2FWtZRKPp3mUBnYB0CBtJlAiEAv0TGLYbaFsl398aib5Z7%2Bafz%2BC1wi5qh%2FgfzjwYpSvwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNE665QxTLEr22OG3CrcA5Fo1dxViAlNTL3sF3Gn8rH%2FBPj9sbyhKuEsr7Qpbf5tRUBY691UriF4BRhhOR3eWEl2BXqJlI1x7AOujfLDD9rGl1rapXo8UF3D1FHvtPLn4KcDPiw96E9B18h9zZKr0QfAOwzoFOe3VxWtM3PARiIRGAC8bbM9V30K1qU0WVh%2FO0YAp5iIWalPjgM52cTAUdpqb8DUpxy0goVXCbLVwUdq45xTBUnlXsWG%2BZuTFLDNhOfEm32KuHdFn8tCG6whaCN%2FTLcOrEYg%2Bxbqo9FiU2MZF9z5SQbNgn6ImzkbFHAw%2FTe9jTZUk1jbQdAvGRf4eSzo9RBHl6tL0rptuaN1%2Bh2SwKYcvo0qYx8EhEWbF4JALlFdxXVIqK%2FzTcCOX8AkDCwFcJrHemWt9dogpgUl9Cqj3dheb%2FleP%2FpKnFSmWVB8cepdeTxQkPGDNw0iWhzlVopxJShwT6LDF71rkP0zXCKPU9b2g6xRjevOkryzbP5ynNqADQtND37eiNhQ3W2e%2Fo%2F1MgYZ7bqDQaYxTvb9pXlxmWNwJEfAjhViZo5VseNNgAtNRphYrOu%2FevX0xrNWrbi2nZIAZQcxw92NcHG1ccKaWO%2F2zCU%2FNbRo96lSJiHBE3Uo0WUqwunzi5JFMN3%2FlMQGOqUB1XQPSw5eL49gymHb9d1A7kdm2XGMiMBxEZRKYvoVWrXbRXFp16e%2BobeHUpwo3FXT27KxD8VhJVzUOiGF1%2B5HjKrrOrDLaj%2FoZB3wdo2Mr9xT0ucUrVSRixrJCD%2FEtSvNV47OCl3B4I9RFPFyfYFUj6Umhf4dz%2BK8DWcPle8pCrhcJysI0SGFby8KYU5koYDinkp%2B2nmZVuWAip2PWfRnYmn9uoZL&X-Amz-Signature=404e51342876837ff73ae7400e7f878f48ccee1b6961ce2cb91c00ff8af8ee1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBCIGUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIE8p7qZGyI1R3ftetJE5dOT%2FWtZRKPp3mUBnYB0CBtJlAiEAv0TGLYbaFsl398aib5Z7%2Bafz%2BC1wi5qh%2FgfzjwYpSvwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNE665QxTLEr22OG3CrcA5Fo1dxViAlNTL3sF3Gn8rH%2FBPj9sbyhKuEsr7Qpbf5tRUBY691UriF4BRhhOR3eWEl2BXqJlI1x7AOujfLDD9rGl1rapXo8UF3D1FHvtPLn4KcDPiw96E9B18h9zZKr0QfAOwzoFOe3VxWtM3PARiIRGAC8bbM9V30K1qU0WVh%2FO0YAp5iIWalPjgM52cTAUdpqb8DUpxy0goVXCbLVwUdq45xTBUnlXsWG%2BZuTFLDNhOfEm32KuHdFn8tCG6whaCN%2FTLcOrEYg%2Bxbqo9FiU2MZF9z5SQbNgn6ImzkbFHAw%2FTe9jTZUk1jbQdAvGRf4eSzo9RBHl6tL0rptuaN1%2Bh2SwKYcvo0qYx8EhEWbF4JALlFdxXVIqK%2FzTcCOX8AkDCwFcJrHemWt9dogpgUl9Cqj3dheb%2FleP%2FpKnFSmWVB8cepdeTxQkPGDNw0iWhzlVopxJShwT6LDF71rkP0zXCKPU9b2g6xRjevOkryzbP5ynNqADQtND37eiNhQ3W2e%2Fo%2F1MgYZ7bqDQaYxTvb9pXlxmWNwJEfAjhViZo5VseNNgAtNRphYrOu%2FevX0xrNWrbi2nZIAZQcxw92NcHG1ccKaWO%2F2zCU%2FNbRo96lSJiHBE3Uo0WUqwunzi5JFMN3%2FlMQGOqUB1XQPSw5eL49gymHb9d1A7kdm2XGMiMBxEZRKYvoVWrXbRXFp16e%2BobeHUpwo3FXT27KxD8VhJVzUOiGF1%2B5HjKrrOrDLaj%2FoZB3wdo2Mr9xT0ucUrVSRixrJCD%2FEtSvNV47OCl3B4I9RFPFyfYFUj6Umhf4dz%2BK8DWcPle8pCrhcJysI0SGFby8KYU5koYDinkp%2B2nmZVuWAip2PWfRnYmn9uoZL&X-Amz-Signature=66b5e4a3e4f21088dea41e61071726d7263cb7dd8e480d705767415d44df3545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBCIGUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIE8p7qZGyI1R3ftetJE5dOT%2FWtZRKPp3mUBnYB0CBtJlAiEAv0TGLYbaFsl398aib5Z7%2Bafz%2BC1wi5qh%2FgfzjwYpSvwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNE665QxTLEr22OG3CrcA5Fo1dxViAlNTL3sF3Gn8rH%2FBPj9sbyhKuEsr7Qpbf5tRUBY691UriF4BRhhOR3eWEl2BXqJlI1x7AOujfLDD9rGl1rapXo8UF3D1FHvtPLn4KcDPiw96E9B18h9zZKr0QfAOwzoFOe3VxWtM3PARiIRGAC8bbM9V30K1qU0WVh%2FO0YAp5iIWalPjgM52cTAUdpqb8DUpxy0goVXCbLVwUdq45xTBUnlXsWG%2BZuTFLDNhOfEm32KuHdFn8tCG6whaCN%2FTLcOrEYg%2Bxbqo9FiU2MZF9z5SQbNgn6ImzkbFHAw%2FTe9jTZUk1jbQdAvGRf4eSzo9RBHl6tL0rptuaN1%2Bh2SwKYcvo0qYx8EhEWbF4JALlFdxXVIqK%2FzTcCOX8AkDCwFcJrHemWt9dogpgUl9Cqj3dheb%2FleP%2FpKnFSmWVB8cepdeTxQkPGDNw0iWhzlVopxJShwT6LDF71rkP0zXCKPU9b2g6xRjevOkryzbP5ynNqADQtND37eiNhQ3W2e%2Fo%2F1MgYZ7bqDQaYxTvb9pXlxmWNwJEfAjhViZo5VseNNgAtNRphYrOu%2FevX0xrNWrbi2nZIAZQcxw92NcHG1ccKaWO%2F2zCU%2FNbRo96lSJiHBE3Uo0WUqwunzi5JFMN3%2FlMQGOqUB1XQPSw5eL49gymHb9d1A7kdm2XGMiMBxEZRKYvoVWrXbRXFp16e%2BobeHUpwo3FXT27KxD8VhJVzUOiGF1%2B5HjKrrOrDLaj%2FoZB3wdo2Mr9xT0ucUrVSRixrJCD%2FEtSvNV47OCl3B4I9RFPFyfYFUj6Umhf4dz%2BK8DWcPle8pCrhcJysI0SGFby8KYU5koYDinkp%2B2nmZVuWAip2PWfRnYmn9uoZL&X-Amz-Signature=64a86527819376be3438d94cecc754b4e45bee6eb3384451c644cc420e2e7b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBCIGUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIE8p7qZGyI1R3ftetJE5dOT%2FWtZRKPp3mUBnYB0CBtJlAiEAv0TGLYbaFsl398aib5Z7%2Bafz%2BC1wi5qh%2FgfzjwYpSvwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNE665QxTLEr22OG3CrcA5Fo1dxViAlNTL3sF3Gn8rH%2FBPj9sbyhKuEsr7Qpbf5tRUBY691UriF4BRhhOR3eWEl2BXqJlI1x7AOujfLDD9rGl1rapXo8UF3D1FHvtPLn4KcDPiw96E9B18h9zZKr0QfAOwzoFOe3VxWtM3PARiIRGAC8bbM9V30K1qU0WVh%2FO0YAp5iIWalPjgM52cTAUdpqb8DUpxy0goVXCbLVwUdq45xTBUnlXsWG%2BZuTFLDNhOfEm32KuHdFn8tCG6whaCN%2FTLcOrEYg%2Bxbqo9FiU2MZF9z5SQbNgn6ImzkbFHAw%2FTe9jTZUk1jbQdAvGRf4eSzo9RBHl6tL0rptuaN1%2Bh2SwKYcvo0qYx8EhEWbF4JALlFdxXVIqK%2FzTcCOX8AkDCwFcJrHemWt9dogpgUl9Cqj3dheb%2FleP%2FpKnFSmWVB8cepdeTxQkPGDNw0iWhzlVopxJShwT6LDF71rkP0zXCKPU9b2g6xRjevOkryzbP5ynNqADQtND37eiNhQ3W2e%2Fo%2F1MgYZ7bqDQaYxTvb9pXlxmWNwJEfAjhViZo5VseNNgAtNRphYrOu%2FevX0xrNWrbi2nZIAZQcxw92NcHG1ccKaWO%2F2zCU%2FNbRo96lSJiHBE3Uo0WUqwunzi5JFMN3%2FlMQGOqUB1XQPSw5eL49gymHb9d1A7kdm2XGMiMBxEZRKYvoVWrXbRXFp16e%2BobeHUpwo3FXT27KxD8VhJVzUOiGF1%2B5HjKrrOrDLaj%2FoZB3wdo2Mr9xT0ucUrVSRixrJCD%2FEtSvNV47OCl3B4I9RFPFyfYFUj6Umhf4dz%2BK8DWcPle8pCrhcJysI0SGFby8KYU5koYDinkp%2B2nmZVuWAip2PWfRnYmn9uoZL&X-Amz-Signature=8b1dc5c938a9b17a4f6737f12e53394b4f9bc0657dc8c24d1f3a31a3ccec2e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBCIGUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIE8p7qZGyI1R3ftetJE5dOT%2FWtZRKPp3mUBnYB0CBtJlAiEAv0TGLYbaFsl398aib5Z7%2Bafz%2BC1wi5qh%2FgfzjwYpSvwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNE665QxTLEr22OG3CrcA5Fo1dxViAlNTL3sF3Gn8rH%2FBPj9sbyhKuEsr7Qpbf5tRUBY691UriF4BRhhOR3eWEl2BXqJlI1x7AOujfLDD9rGl1rapXo8UF3D1FHvtPLn4KcDPiw96E9B18h9zZKr0QfAOwzoFOe3VxWtM3PARiIRGAC8bbM9V30K1qU0WVh%2FO0YAp5iIWalPjgM52cTAUdpqb8DUpxy0goVXCbLVwUdq45xTBUnlXsWG%2BZuTFLDNhOfEm32KuHdFn8tCG6whaCN%2FTLcOrEYg%2Bxbqo9FiU2MZF9z5SQbNgn6ImzkbFHAw%2FTe9jTZUk1jbQdAvGRf4eSzo9RBHl6tL0rptuaN1%2Bh2SwKYcvo0qYx8EhEWbF4JALlFdxXVIqK%2FzTcCOX8AkDCwFcJrHemWt9dogpgUl9Cqj3dheb%2FleP%2FpKnFSmWVB8cepdeTxQkPGDNw0iWhzlVopxJShwT6LDF71rkP0zXCKPU9b2g6xRjevOkryzbP5ynNqADQtND37eiNhQ3W2e%2Fo%2F1MgYZ7bqDQaYxTvb9pXlxmWNwJEfAjhViZo5VseNNgAtNRphYrOu%2FevX0xrNWrbi2nZIAZQcxw92NcHG1ccKaWO%2F2zCU%2FNbRo96lSJiHBE3Uo0WUqwunzi5JFMN3%2FlMQGOqUB1XQPSw5eL49gymHb9d1A7kdm2XGMiMBxEZRKYvoVWrXbRXFp16e%2BobeHUpwo3FXT27KxD8VhJVzUOiGF1%2B5HjKrrOrDLaj%2FoZB3wdo2Mr9xT0ucUrVSRixrJCD%2FEtSvNV47OCl3B4I9RFPFyfYFUj6Umhf4dz%2BK8DWcPle8pCrhcJysI0SGFby8KYU5koYDinkp%2B2nmZVuWAip2PWfRnYmn9uoZL&X-Amz-Signature=5b8c3aebe26764732b246f85503f0e92d1377f433a09c25558838910424520f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBCIGUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIE8p7qZGyI1R3ftetJE5dOT%2FWtZRKPp3mUBnYB0CBtJlAiEAv0TGLYbaFsl398aib5Z7%2Bafz%2BC1wi5qh%2FgfzjwYpSvwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNE665QxTLEr22OG3CrcA5Fo1dxViAlNTL3sF3Gn8rH%2FBPj9sbyhKuEsr7Qpbf5tRUBY691UriF4BRhhOR3eWEl2BXqJlI1x7AOujfLDD9rGl1rapXo8UF3D1FHvtPLn4KcDPiw96E9B18h9zZKr0QfAOwzoFOe3VxWtM3PARiIRGAC8bbM9V30K1qU0WVh%2FO0YAp5iIWalPjgM52cTAUdpqb8DUpxy0goVXCbLVwUdq45xTBUnlXsWG%2BZuTFLDNhOfEm32KuHdFn8tCG6whaCN%2FTLcOrEYg%2Bxbqo9FiU2MZF9z5SQbNgn6ImzkbFHAw%2FTe9jTZUk1jbQdAvGRf4eSzo9RBHl6tL0rptuaN1%2Bh2SwKYcvo0qYx8EhEWbF4JALlFdxXVIqK%2FzTcCOX8AkDCwFcJrHemWt9dogpgUl9Cqj3dheb%2FleP%2FpKnFSmWVB8cepdeTxQkPGDNw0iWhzlVopxJShwT6LDF71rkP0zXCKPU9b2g6xRjevOkryzbP5ynNqADQtND37eiNhQ3W2e%2Fo%2F1MgYZ7bqDQaYxTvb9pXlxmWNwJEfAjhViZo5VseNNgAtNRphYrOu%2FevX0xrNWrbi2nZIAZQcxw92NcHG1ccKaWO%2F2zCU%2FNbRo96lSJiHBE3Uo0WUqwunzi5JFMN3%2FlMQGOqUB1XQPSw5eL49gymHb9d1A7kdm2XGMiMBxEZRKYvoVWrXbRXFp16e%2BobeHUpwo3FXT27KxD8VhJVzUOiGF1%2B5HjKrrOrDLaj%2FoZB3wdo2Mr9xT0ucUrVSRixrJCD%2FEtSvNV47OCl3B4I9RFPFyfYFUj6Umhf4dz%2BK8DWcPle8pCrhcJysI0SGFby8KYU5koYDinkp%2B2nmZVuWAip2PWfRnYmn9uoZL&X-Amz-Signature=5fdd8b957b31ca5d46c9b4c1ac427afe25866d6ef1cccd184a55732094d553c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

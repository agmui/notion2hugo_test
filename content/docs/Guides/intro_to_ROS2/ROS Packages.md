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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VTPSVW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5%2BtHNA0gMvbNzcdMoqX7fuU%2FDdP7%2F1cmrjaxe2xRutAiEA0RWQHQ%2FlPhcDzsvgaFSZi1NRNL0yc0iGJfAkOw1Ho5cqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwBvE7BKVMlw264SCrcA84PnkiSULlMS%2Fno6muR%2FayzppZJvKHPdvkXkD9befEAt9RQgjb5slVGDDKHwJ8sltKz3XvcwpTKuL3IqkxPen%2FuZef8lnyYvDJxW3WdpGSj8MUFcvm3wovyUN0zpIOT5RMXNS7VnBzqeDy6I8ySIW9q8c4BtfOqZwtpWPV7CW24rWUaNhi%2BZh%2FQYNbrBFV%2BG67yMY7bXiFLKCIF3L97bSesZ25XAdOd136AR87iOyOxCCePz6RgpP5vsmCKn8KGZD3BNmUJTNGG4AqNNiPuPkRuTrkejFZkdJAPQJ2jeQewb0SLVU12cMbb6wpsaHngaweUTNt7eBVknquEOxZsSAmHnXG0DOVnpEFx40ALwgwdg6aQfW7y1QQADExFwNCAhvI0p5YBgJaq5FDcGY%2FpHzj6mV2fmCN9m2jYaYMhIlaU2iwb3gNZVmKffA76uTYkKNR%2FqKKFna7uCmr%2FQwSlAKfDMOoyJG9fwckDLOcOcsqJ2bvOcsliVMBvX8%2Fv4slQNN5MqNnnML2uboQqzqp2eDeDdF1%2BwN429S4nroqXPGhirHIDxpfdTdDEcLV844yvUlJzQlIC3fHGyAvY2snk9hP3QzvX6n17y%2BKoDW6bQvN5mrMdlhdgDT8zdrnuMLGxs8EGOqUBsG1EgariEEx5gubeFA3PoXDuUtymyRvzSjFwZykojwHK83czms%2BMb1cj4WYdjF76axUIQeafHbF8HCJWg%2F82W4Y5JQ9vzm8DN8uE2JjhXbgnPryROWnPbgo7WmtbsuN2XQtKcCAYNq5W1xYLZrml%2Bco9dBQhxzVlx%2Fh13OO%2BjNQyKXBqdUxDOm3n7cAtC10ZEpkpAgg%2Bd1xGEcLxv0LxGIBEgq7R&X-Amz-Signature=fb3a56fc011f19b4448e37dfc72f5fca54b2b369865736c8182f416f044c9f00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VTPSVW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5%2BtHNA0gMvbNzcdMoqX7fuU%2FDdP7%2F1cmrjaxe2xRutAiEA0RWQHQ%2FlPhcDzsvgaFSZi1NRNL0yc0iGJfAkOw1Ho5cqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwBvE7BKVMlw264SCrcA84PnkiSULlMS%2Fno6muR%2FayzppZJvKHPdvkXkD9befEAt9RQgjb5slVGDDKHwJ8sltKz3XvcwpTKuL3IqkxPen%2FuZef8lnyYvDJxW3WdpGSj8MUFcvm3wovyUN0zpIOT5RMXNS7VnBzqeDy6I8ySIW9q8c4BtfOqZwtpWPV7CW24rWUaNhi%2BZh%2FQYNbrBFV%2BG67yMY7bXiFLKCIF3L97bSesZ25XAdOd136AR87iOyOxCCePz6RgpP5vsmCKn8KGZD3BNmUJTNGG4AqNNiPuPkRuTrkejFZkdJAPQJ2jeQewb0SLVU12cMbb6wpsaHngaweUTNt7eBVknquEOxZsSAmHnXG0DOVnpEFx40ALwgwdg6aQfW7y1QQADExFwNCAhvI0p5YBgJaq5FDcGY%2FpHzj6mV2fmCN9m2jYaYMhIlaU2iwb3gNZVmKffA76uTYkKNR%2FqKKFna7uCmr%2FQwSlAKfDMOoyJG9fwckDLOcOcsqJ2bvOcsliVMBvX8%2Fv4slQNN5MqNnnML2uboQqzqp2eDeDdF1%2BwN429S4nroqXPGhirHIDxpfdTdDEcLV844yvUlJzQlIC3fHGyAvY2snk9hP3QzvX6n17y%2BKoDW6bQvN5mrMdlhdgDT8zdrnuMLGxs8EGOqUBsG1EgariEEx5gubeFA3PoXDuUtymyRvzSjFwZykojwHK83czms%2BMb1cj4WYdjF76axUIQeafHbF8HCJWg%2F82W4Y5JQ9vzm8DN8uE2JjhXbgnPryROWnPbgo7WmtbsuN2XQtKcCAYNq5W1xYLZrml%2Bco9dBQhxzVlx%2Fh13OO%2BjNQyKXBqdUxDOm3n7cAtC10ZEpkpAgg%2Bd1xGEcLxv0LxGIBEgq7R&X-Amz-Signature=9aa5e343660ba8feeb738e570b4c23ac1176e4f84ec3c2692e362feb62f6aabb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VTPSVW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5%2BtHNA0gMvbNzcdMoqX7fuU%2FDdP7%2F1cmrjaxe2xRutAiEA0RWQHQ%2FlPhcDzsvgaFSZi1NRNL0yc0iGJfAkOw1Ho5cqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwBvE7BKVMlw264SCrcA84PnkiSULlMS%2Fno6muR%2FayzppZJvKHPdvkXkD9befEAt9RQgjb5slVGDDKHwJ8sltKz3XvcwpTKuL3IqkxPen%2FuZef8lnyYvDJxW3WdpGSj8MUFcvm3wovyUN0zpIOT5RMXNS7VnBzqeDy6I8ySIW9q8c4BtfOqZwtpWPV7CW24rWUaNhi%2BZh%2FQYNbrBFV%2BG67yMY7bXiFLKCIF3L97bSesZ25XAdOd136AR87iOyOxCCePz6RgpP5vsmCKn8KGZD3BNmUJTNGG4AqNNiPuPkRuTrkejFZkdJAPQJ2jeQewb0SLVU12cMbb6wpsaHngaweUTNt7eBVknquEOxZsSAmHnXG0DOVnpEFx40ALwgwdg6aQfW7y1QQADExFwNCAhvI0p5YBgJaq5FDcGY%2FpHzj6mV2fmCN9m2jYaYMhIlaU2iwb3gNZVmKffA76uTYkKNR%2FqKKFna7uCmr%2FQwSlAKfDMOoyJG9fwckDLOcOcsqJ2bvOcsliVMBvX8%2Fv4slQNN5MqNnnML2uboQqzqp2eDeDdF1%2BwN429S4nroqXPGhirHIDxpfdTdDEcLV844yvUlJzQlIC3fHGyAvY2snk9hP3QzvX6n17y%2BKoDW6bQvN5mrMdlhdgDT8zdrnuMLGxs8EGOqUBsG1EgariEEx5gubeFA3PoXDuUtymyRvzSjFwZykojwHK83czms%2BMb1cj4WYdjF76axUIQeafHbF8HCJWg%2F82W4Y5JQ9vzm8DN8uE2JjhXbgnPryROWnPbgo7WmtbsuN2XQtKcCAYNq5W1xYLZrml%2Bco9dBQhxzVlx%2Fh13OO%2BjNQyKXBqdUxDOm3n7cAtC10ZEpkpAgg%2Bd1xGEcLxv0LxGIBEgq7R&X-Amz-Signature=f83132dfebccfd45b8a0b31c9daf1195bd9c370d1e8478d1768caeb2756b4582&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VTPSVW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5%2BtHNA0gMvbNzcdMoqX7fuU%2FDdP7%2F1cmrjaxe2xRutAiEA0RWQHQ%2FlPhcDzsvgaFSZi1NRNL0yc0iGJfAkOw1Ho5cqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwBvE7BKVMlw264SCrcA84PnkiSULlMS%2Fno6muR%2FayzppZJvKHPdvkXkD9befEAt9RQgjb5slVGDDKHwJ8sltKz3XvcwpTKuL3IqkxPen%2FuZef8lnyYvDJxW3WdpGSj8MUFcvm3wovyUN0zpIOT5RMXNS7VnBzqeDy6I8ySIW9q8c4BtfOqZwtpWPV7CW24rWUaNhi%2BZh%2FQYNbrBFV%2BG67yMY7bXiFLKCIF3L97bSesZ25XAdOd136AR87iOyOxCCePz6RgpP5vsmCKn8KGZD3BNmUJTNGG4AqNNiPuPkRuTrkejFZkdJAPQJ2jeQewb0SLVU12cMbb6wpsaHngaweUTNt7eBVknquEOxZsSAmHnXG0DOVnpEFx40ALwgwdg6aQfW7y1QQADExFwNCAhvI0p5YBgJaq5FDcGY%2FpHzj6mV2fmCN9m2jYaYMhIlaU2iwb3gNZVmKffA76uTYkKNR%2FqKKFna7uCmr%2FQwSlAKfDMOoyJG9fwckDLOcOcsqJ2bvOcsliVMBvX8%2Fv4slQNN5MqNnnML2uboQqzqp2eDeDdF1%2BwN429S4nroqXPGhirHIDxpfdTdDEcLV844yvUlJzQlIC3fHGyAvY2snk9hP3QzvX6n17y%2BKoDW6bQvN5mrMdlhdgDT8zdrnuMLGxs8EGOqUBsG1EgariEEx5gubeFA3PoXDuUtymyRvzSjFwZykojwHK83czms%2BMb1cj4WYdjF76axUIQeafHbF8HCJWg%2F82W4Y5JQ9vzm8DN8uE2JjhXbgnPryROWnPbgo7WmtbsuN2XQtKcCAYNq5W1xYLZrml%2Bco9dBQhxzVlx%2Fh13OO%2BjNQyKXBqdUxDOm3n7cAtC10ZEpkpAgg%2Bd1xGEcLxv0LxGIBEgq7R&X-Amz-Signature=561624872a45f83ad974c8de97d25fa36b94e46440a5a71a43f245593dfaa8f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VTPSVW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5%2BtHNA0gMvbNzcdMoqX7fuU%2FDdP7%2F1cmrjaxe2xRutAiEA0RWQHQ%2FlPhcDzsvgaFSZi1NRNL0yc0iGJfAkOw1Ho5cqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwBvE7BKVMlw264SCrcA84PnkiSULlMS%2Fno6muR%2FayzppZJvKHPdvkXkD9befEAt9RQgjb5slVGDDKHwJ8sltKz3XvcwpTKuL3IqkxPen%2FuZef8lnyYvDJxW3WdpGSj8MUFcvm3wovyUN0zpIOT5RMXNS7VnBzqeDy6I8ySIW9q8c4BtfOqZwtpWPV7CW24rWUaNhi%2BZh%2FQYNbrBFV%2BG67yMY7bXiFLKCIF3L97bSesZ25XAdOd136AR87iOyOxCCePz6RgpP5vsmCKn8KGZD3BNmUJTNGG4AqNNiPuPkRuTrkejFZkdJAPQJ2jeQewb0SLVU12cMbb6wpsaHngaweUTNt7eBVknquEOxZsSAmHnXG0DOVnpEFx40ALwgwdg6aQfW7y1QQADExFwNCAhvI0p5YBgJaq5FDcGY%2FpHzj6mV2fmCN9m2jYaYMhIlaU2iwb3gNZVmKffA76uTYkKNR%2FqKKFna7uCmr%2FQwSlAKfDMOoyJG9fwckDLOcOcsqJ2bvOcsliVMBvX8%2Fv4slQNN5MqNnnML2uboQqzqp2eDeDdF1%2BwN429S4nroqXPGhirHIDxpfdTdDEcLV844yvUlJzQlIC3fHGyAvY2snk9hP3QzvX6n17y%2BKoDW6bQvN5mrMdlhdgDT8zdrnuMLGxs8EGOqUBsG1EgariEEx5gubeFA3PoXDuUtymyRvzSjFwZykojwHK83czms%2BMb1cj4WYdjF76axUIQeafHbF8HCJWg%2F82W4Y5JQ9vzm8DN8uE2JjhXbgnPryROWnPbgo7WmtbsuN2XQtKcCAYNq5W1xYLZrml%2Bco9dBQhxzVlx%2Fh13OO%2BjNQyKXBqdUxDOm3n7cAtC10ZEpkpAgg%2Bd1xGEcLxv0LxGIBEgq7R&X-Amz-Signature=9660e2287a87b94247b7c8b8b44c73717c2162a6463aa23c7c83eddba8fd7393&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VTPSVW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5%2BtHNA0gMvbNzcdMoqX7fuU%2FDdP7%2F1cmrjaxe2xRutAiEA0RWQHQ%2FlPhcDzsvgaFSZi1NRNL0yc0iGJfAkOw1Ho5cqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwBvE7BKVMlw264SCrcA84PnkiSULlMS%2Fno6muR%2FayzppZJvKHPdvkXkD9befEAt9RQgjb5slVGDDKHwJ8sltKz3XvcwpTKuL3IqkxPen%2FuZef8lnyYvDJxW3WdpGSj8MUFcvm3wovyUN0zpIOT5RMXNS7VnBzqeDy6I8ySIW9q8c4BtfOqZwtpWPV7CW24rWUaNhi%2BZh%2FQYNbrBFV%2BG67yMY7bXiFLKCIF3L97bSesZ25XAdOd136AR87iOyOxCCePz6RgpP5vsmCKn8KGZD3BNmUJTNGG4AqNNiPuPkRuTrkejFZkdJAPQJ2jeQewb0SLVU12cMbb6wpsaHngaweUTNt7eBVknquEOxZsSAmHnXG0DOVnpEFx40ALwgwdg6aQfW7y1QQADExFwNCAhvI0p5YBgJaq5FDcGY%2FpHzj6mV2fmCN9m2jYaYMhIlaU2iwb3gNZVmKffA76uTYkKNR%2FqKKFna7uCmr%2FQwSlAKfDMOoyJG9fwckDLOcOcsqJ2bvOcsliVMBvX8%2Fv4slQNN5MqNnnML2uboQqzqp2eDeDdF1%2BwN429S4nroqXPGhirHIDxpfdTdDEcLV844yvUlJzQlIC3fHGyAvY2snk9hP3QzvX6n17y%2BKoDW6bQvN5mrMdlhdgDT8zdrnuMLGxs8EGOqUBsG1EgariEEx5gubeFA3PoXDuUtymyRvzSjFwZykojwHK83czms%2BMb1cj4WYdjF76axUIQeafHbF8HCJWg%2F82W4Y5JQ9vzm8DN8uE2JjhXbgnPryROWnPbgo7WmtbsuN2XQtKcCAYNq5W1xYLZrml%2Bco9dBQhxzVlx%2Fh13OO%2BjNQyKXBqdUxDOm3n7cAtC10ZEpkpAgg%2Bd1xGEcLxv0LxGIBEgq7R&X-Amz-Signature=a814f7eb8693c98b0ffa5c999d2b6e4163f9da3242f1e9df5dddff8fe4e6ee75&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VTPSVW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5%2BtHNA0gMvbNzcdMoqX7fuU%2FDdP7%2F1cmrjaxe2xRutAiEA0RWQHQ%2FlPhcDzsvgaFSZi1NRNL0yc0iGJfAkOw1Ho5cqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwBvE7BKVMlw264SCrcA84PnkiSULlMS%2Fno6muR%2FayzppZJvKHPdvkXkD9befEAt9RQgjb5slVGDDKHwJ8sltKz3XvcwpTKuL3IqkxPen%2FuZef8lnyYvDJxW3WdpGSj8MUFcvm3wovyUN0zpIOT5RMXNS7VnBzqeDy6I8ySIW9q8c4BtfOqZwtpWPV7CW24rWUaNhi%2BZh%2FQYNbrBFV%2BG67yMY7bXiFLKCIF3L97bSesZ25XAdOd136AR87iOyOxCCePz6RgpP5vsmCKn8KGZD3BNmUJTNGG4AqNNiPuPkRuTrkejFZkdJAPQJ2jeQewb0SLVU12cMbb6wpsaHngaweUTNt7eBVknquEOxZsSAmHnXG0DOVnpEFx40ALwgwdg6aQfW7y1QQADExFwNCAhvI0p5YBgJaq5FDcGY%2FpHzj6mV2fmCN9m2jYaYMhIlaU2iwb3gNZVmKffA76uTYkKNR%2FqKKFna7uCmr%2FQwSlAKfDMOoyJG9fwckDLOcOcsqJ2bvOcsliVMBvX8%2Fv4slQNN5MqNnnML2uboQqzqp2eDeDdF1%2BwN429S4nroqXPGhirHIDxpfdTdDEcLV844yvUlJzQlIC3fHGyAvY2snk9hP3QzvX6n17y%2BKoDW6bQvN5mrMdlhdgDT8zdrnuMLGxs8EGOqUBsG1EgariEEx5gubeFA3PoXDuUtymyRvzSjFwZykojwHK83czms%2BMb1cj4WYdjF76axUIQeafHbF8HCJWg%2F82W4Y5JQ9vzm8DN8uE2JjhXbgnPryROWnPbgo7WmtbsuN2XQtKcCAYNq5W1xYLZrml%2Bco9dBQhxzVlx%2Fh13OO%2BjNQyKXBqdUxDOm3n7cAtC10ZEpkpAgg%2Bd1xGEcLxv0LxGIBEgq7R&X-Amz-Signature=e72242d3a9544e54502ecec008552ff989f307571954cefbe1f340131a1f1c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

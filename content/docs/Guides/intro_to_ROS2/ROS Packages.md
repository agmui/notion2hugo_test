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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7IPXMB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCBtWpxjnP82AG3P4CNmNGWC1ejyFelhSZJrYZXY8DtzgIgC3WYCejOmL2LbhSmvErgyZIDHldX3%2BLU66i4nr%2FMrnIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk3XDqDoXdx4iBzjircA%2BvsS%2B2lyxrUTdTssyf7t4BDGa%2F9%2FzlH9fQMKk8LP5rIJOTW%2FUsL2biPZdk6Q3WaiKChqqTP1nHIjRcEBUjCMussPa3FkxcyeEUqB3PS9lu7FnCMGBaqysldLYvwtEg0NRyyjazn0rhhPwNAAYRbHIUpaBHwnYTZ1kiPuB4VAk3dSwF5PDJVf84ouTtT5gRbZivuGB9DDoCIe1uk6yaWJf2UKaaJX1zASE5upUgmLtK5Gu4%2FipWmgEM9aN1BmfzE6WOGC9HXdj1gv18YjaSKQCFdTu7v2SaOPK0Tu1iHSTx7XJtp4pMuzkQe4jhiu7ZDhXFxB0RPniAEcWNhey0uZ%2B7hdo8z%2BkaFU9PBbgq5r2MV%2FatGRcig1RqUADrfHHIWA60BwjXDykeANmR%2Fkv6U5qfsS%2FekMrpNfIbvUtsP3IxUZ7AJIKP2M%2Fls6MywIVijyykf%2BpwaE12R5OCk6JR6lkeGzscob%2FQKLlekNUffiJOqkGRNawgz29h2vUWd8riUxe6a85m7yVuvDH6TDllmjDRyONaMjnVmEWXCUpsg8sxQTNn4kNpkcvDmpUDuXQLCOAiBazyFmnK7RoIzg3WxeWMqbKCwvGWh5lFTcgJzAN7f8dMZ0Drh07B%2FziZVMNDbjsEGOqUB8c5PjLOxmnLgddKttT0bbeRCvvtpwXxhbb4yDz2iDw658zr69RwVfneHUwyuLaRZsmdy3d4p9NgDxLkc3gpvVjjnuhTggrAvMqEsf1E9THBkjV2fFujRSuJ6dGJ%2BnmK66RaDwt3Vo%2Byx2%2Bac1Dd0KzbhSqsbDofatUVNgn22H%2FGQz68g7ni5XmY24dR7xYwoF3OmPzxuog2pPIPqPbxr8AZSg1zv&X-Amz-Signature=abb6be09f9bb8aea153780af459905a4940527a0cf7ba5de0b3a9498b200e8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7IPXMB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCBtWpxjnP82AG3P4CNmNGWC1ejyFelhSZJrYZXY8DtzgIgC3WYCejOmL2LbhSmvErgyZIDHldX3%2BLU66i4nr%2FMrnIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk3XDqDoXdx4iBzjircA%2BvsS%2B2lyxrUTdTssyf7t4BDGa%2F9%2FzlH9fQMKk8LP5rIJOTW%2FUsL2biPZdk6Q3WaiKChqqTP1nHIjRcEBUjCMussPa3FkxcyeEUqB3PS9lu7FnCMGBaqysldLYvwtEg0NRyyjazn0rhhPwNAAYRbHIUpaBHwnYTZ1kiPuB4VAk3dSwF5PDJVf84ouTtT5gRbZivuGB9DDoCIe1uk6yaWJf2UKaaJX1zASE5upUgmLtK5Gu4%2FipWmgEM9aN1BmfzE6WOGC9HXdj1gv18YjaSKQCFdTu7v2SaOPK0Tu1iHSTx7XJtp4pMuzkQe4jhiu7ZDhXFxB0RPniAEcWNhey0uZ%2B7hdo8z%2BkaFU9PBbgq5r2MV%2FatGRcig1RqUADrfHHIWA60BwjXDykeANmR%2Fkv6U5qfsS%2FekMrpNfIbvUtsP3IxUZ7AJIKP2M%2Fls6MywIVijyykf%2BpwaE12R5OCk6JR6lkeGzscob%2FQKLlekNUffiJOqkGRNawgz29h2vUWd8riUxe6a85m7yVuvDH6TDllmjDRyONaMjnVmEWXCUpsg8sxQTNn4kNpkcvDmpUDuXQLCOAiBazyFmnK7RoIzg3WxeWMqbKCwvGWh5lFTcgJzAN7f8dMZ0Drh07B%2FziZVMNDbjsEGOqUB8c5PjLOxmnLgddKttT0bbeRCvvtpwXxhbb4yDz2iDw658zr69RwVfneHUwyuLaRZsmdy3d4p9NgDxLkc3gpvVjjnuhTggrAvMqEsf1E9THBkjV2fFujRSuJ6dGJ%2BnmK66RaDwt3Vo%2Byx2%2Bac1Dd0KzbhSqsbDofatUVNgn22H%2FGQz68g7ni5XmY24dR7xYwoF3OmPzxuog2pPIPqPbxr8AZSg1zv&X-Amz-Signature=29af8cf9f1a21161dc528e21e3c0a41d79451b4cd5774a1319da96b0694ff8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7IPXMB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCBtWpxjnP82AG3P4CNmNGWC1ejyFelhSZJrYZXY8DtzgIgC3WYCejOmL2LbhSmvErgyZIDHldX3%2BLU66i4nr%2FMrnIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk3XDqDoXdx4iBzjircA%2BvsS%2B2lyxrUTdTssyf7t4BDGa%2F9%2FzlH9fQMKk8LP5rIJOTW%2FUsL2biPZdk6Q3WaiKChqqTP1nHIjRcEBUjCMussPa3FkxcyeEUqB3PS9lu7FnCMGBaqysldLYvwtEg0NRyyjazn0rhhPwNAAYRbHIUpaBHwnYTZ1kiPuB4VAk3dSwF5PDJVf84ouTtT5gRbZivuGB9DDoCIe1uk6yaWJf2UKaaJX1zASE5upUgmLtK5Gu4%2FipWmgEM9aN1BmfzE6WOGC9HXdj1gv18YjaSKQCFdTu7v2SaOPK0Tu1iHSTx7XJtp4pMuzkQe4jhiu7ZDhXFxB0RPniAEcWNhey0uZ%2B7hdo8z%2BkaFU9PBbgq5r2MV%2FatGRcig1RqUADrfHHIWA60BwjXDykeANmR%2Fkv6U5qfsS%2FekMrpNfIbvUtsP3IxUZ7AJIKP2M%2Fls6MywIVijyykf%2BpwaE12R5OCk6JR6lkeGzscob%2FQKLlekNUffiJOqkGRNawgz29h2vUWd8riUxe6a85m7yVuvDH6TDllmjDRyONaMjnVmEWXCUpsg8sxQTNn4kNpkcvDmpUDuXQLCOAiBazyFmnK7RoIzg3WxeWMqbKCwvGWh5lFTcgJzAN7f8dMZ0Drh07B%2FziZVMNDbjsEGOqUB8c5PjLOxmnLgddKttT0bbeRCvvtpwXxhbb4yDz2iDw658zr69RwVfneHUwyuLaRZsmdy3d4p9NgDxLkc3gpvVjjnuhTggrAvMqEsf1E9THBkjV2fFujRSuJ6dGJ%2BnmK66RaDwt3Vo%2Byx2%2Bac1Dd0KzbhSqsbDofatUVNgn22H%2FGQz68g7ni5XmY24dR7xYwoF3OmPzxuog2pPIPqPbxr8AZSg1zv&X-Amz-Signature=314d45984df7ffdde32e82a6dbb6ab39a40209db4c3460a8a0154db5477a53fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7IPXMB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCBtWpxjnP82AG3P4CNmNGWC1ejyFelhSZJrYZXY8DtzgIgC3WYCejOmL2LbhSmvErgyZIDHldX3%2BLU66i4nr%2FMrnIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk3XDqDoXdx4iBzjircA%2BvsS%2B2lyxrUTdTssyf7t4BDGa%2F9%2FzlH9fQMKk8LP5rIJOTW%2FUsL2biPZdk6Q3WaiKChqqTP1nHIjRcEBUjCMussPa3FkxcyeEUqB3PS9lu7FnCMGBaqysldLYvwtEg0NRyyjazn0rhhPwNAAYRbHIUpaBHwnYTZ1kiPuB4VAk3dSwF5PDJVf84ouTtT5gRbZivuGB9DDoCIe1uk6yaWJf2UKaaJX1zASE5upUgmLtK5Gu4%2FipWmgEM9aN1BmfzE6WOGC9HXdj1gv18YjaSKQCFdTu7v2SaOPK0Tu1iHSTx7XJtp4pMuzkQe4jhiu7ZDhXFxB0RPniAEcWNhey0uZ%2B7hdo8z%2BkaFU9PBbgq5r2MV%2FatGRcig1RqUADrfHHIWA60BwjXDykeANmR%2Fkv6U5qfsS%2FekMrpNfIbvUtsP3IxUZ7AJIKP2M%2Fls6MywIVijyykf%2BpwaE12R5OCk6JR6lkeGzscob%2FQKLlekNUffiJOqkGRNawgz29h2vUWd8riUxe6a85m7yVuvDH6TDllmjDRyONaMjnVmEWXCUpsg8sxQTNn4kNpkcvDmpUDuXQLCOAiBazyFmnK7RoIzg3WxeWMqbKCwvGWh5lFTcgJzAN7f8dMZ0Drh07B%2FziZVMNDbjsEGOqUB8c5PjLOxmnLgddKttT0bbeRCvvtpwXxhbb4yDz2iDw658zr69RwVfneHUwyuLaRZsmdy3d4p9NgDxLkc3gpvVjjnuhTggrAvMqEsf1E9THBkjV2fFujRSuJ6dGJ%2BnmK66RaDwt3Vo%2Byx2%2Bac1Dd0KzbhSqsbDofatUVNgn22H%2FGQz68g7ni5XmY24dR7xYwoF3OmPzxuog2pPIPqPbxr8AZSg1zv&X-Amz-Signature=47fb1b4539a3ec1b185587a728d769d05235542ec44e028f483c841871240b36&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7IPXMB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCBtWpxjnP82AG3P4CNmNGWC1ejyFelhSZJrYZXY8DtzgIgC3WYCejOmL2LbhSmvErgyZIDHldX3%2BLU66i4nr%2FMrnIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk3XDqDoXdx4iBzjircA%2BvsS%2B2lyxrUTdTssyf7t4BDGa%2F9%2FzlH9fQMKk8LP5rIJOTW%2FUsL2biPZdk6Q3WaiKChqqTP1nHIjRcEBUjCMussPa3FkxcyeEUqB3PS9lu7FnCMGBaqysldLYvwtEg0NRyyjazn0rhhPwNAAYRbHIUpaBHwnYTZ1kiPuB4VAk3dSwF5PDJVf84ouTtT5gRbZivuGB9DDoCIe1uk6yaWJf2UKaaJX1zASE5upUgmLtK5Gu4%2FipWmgEM9aN1BmfzE6WOGC9HXdj1gv18YjaSKQCFdTu7v2SaOPK0Tu1iHSTx7XJtp4pMuzkQe4jhiu7ZDhXFxB0RPniAEcWNhey0uZ%2B7hdo8z%2BkaFU9PBbgq5r2MV%2FatGRcig1RqUADrfHHIWA60BwjXDykeANmR%2Fkv6U5qfsS%2FekMrpNfIbvUtsP3IxUZ7AJIKP2M%2Fls6MywIVijyykf%2BpwaE12R5OCk6JR6lkeGzscob%2FQKLlekNUffiJOqkGRNawgz29h2vUWd8riUxe6a85m7yVuvDH6TDllmjDRyONaMjnVmEWXCUpsg8sxQTNn4kNpkcvDmpUDuXQLCOAiBazyFmnK7RoIzg3WxeWMqbKCwvGWh5lFTcgJzAN7f8dMZ0Drh07B%2FziZVMNDbjsEGOqUB8c5PjLOxmnLgddKttT0bbeRCvvtpwXxhbb4yDz2iDw658zr69RwVfneHUwyuLaRZsmdy3d4p9NgDxLkc3gpvVjjnuhTggrAvMqEsf1E9THBkjV2fFujRSuJ6dGJ%2BnmK66RaDwt3Vo%2Byx2%2Bac1Dd0KzbhSqsbDofatUVNgn22H%2FGQz68g7ni5XmY24dR7xYwoF3OmPzxuog2pPIPqPbxr8AZSg1zv&X-Amz-Signature=ed54cc8558ed0a6c625fb080a0604036300d8fead7459e7c993b23db5743c608&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7IPXMB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCBtWpxjnP82AG3P4CNmNGWC1ejyFelhSZJrYZXY8DtzgIgC3WYCejOmL2LbhSmvErgyZIDHldX3%2BLU66i4nr%2FMrnIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk3XDqDoXdx4iBzjircA%2BvsS%2B2lyxrUTdTssyf7t4BDGa%2F9%2FzlH9fQMKk8LP5rIJOTW%2FUsL2biPZdk6Q3WaiKChqqTP1nHIjRcEBUjCMussPa3FkxcyeEUqB3PS9lu7FnCMGBaqysldLYvwtEg0NRyyjazn0rhhPwNAAYRbHIUpaBHwnYTZ1kiPuB4VAk3dSwF5PDJVf84ouTtT5gRbZivuGB9DDoCIe1uk6yaWJf2UKaaJX1zASE5upUgmLtK5Gu4%2FipWmgEM9aN1BmfzE6WOGC9HXdj1gv18YjaSKQCFdTu7v2SaOPK0Tu1iHSTx7XJtp4pMuzkQe4jhiu7ZDhXFxB0RPniAEcWNhey0uZ%2B7hdo8z%2BkaFU9PBbgq5r2MV%2FatGRcig1RqUADrfHHIWA60BwjXDykeANmR%2Fkv6U5qfsS%2FekMrpNfIbvUtsP3IxUZ7AJIKP2M%2Fls6MywIVijyykf%2BpwaE12R5OCk6JR6lkeGzscob%2FQKLlekNUffiJOqkGRNawgz29h2vUWd8riUxe6a85m7yVuvDH6TDllmjDRyONaMjnVmEWXCUpsg8sxQTNn4kNpkcvDmpUDuXQLCOAiBazyFmnK7RoIzg3WxeWMqbKCwvGWh5lFTcgJzAN7f8dMZ0Drh07B%2FziZVMNDbjsEGOqUB8c5PjLOxmnLgddKttT0bbeRCvvtpwXxhbb4yDz2iDw658zr69RwVfneHUwyuLaRZsmdy3d4p9NgDxLkc3gpvVjjnuhTggrAvMqEsf1E9THBkjV2fFujRSuJ6dGJ%2BnmK66RaDwt3Vo%2Byx2%2Bac1Dd0KzbhSqsbDofatUVNgn22H%2FGQz68g7ni5XmY24dR7xYwoF3OmPzxuog2pPIPqPbxr8AZSg1zv&X-Amz-Signature=eefabf3b84a5d28f9a786c97c8879263695f70a40a06bae18a8c90ef9c5e2fdd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7IPXMB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCBtWpxjnP82AG3P4CNmNGWC1ejyFelhSZJrYZXY8DtzgIgC3WYCejOmL2LbhSmvErgyZIDHldX3%2BLU66i4nr%2FMrnIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk3XDqDoXdx4iBzjircA%2BvsS%2B2lyxrUTdTssyf7t4BDGa%2F9%2FzlH9fQMKk8LP5rIJOTW%2FUsL2biPZdk6Q3WaiKChqqTP1nHIjRcEBUjCMussPa3FkxcyeEUqB3PS9lu7FnCMGBaqysldLYvwtEg0NRyyjazn0rhhPwNAAYRbHIUpaBHwnYTZ1kiPuB4VAk3dSwF5PDJVf84ouTtT5gRbZivuGB9DDoCIe1uk6yaWJf2UKaaJX1zASE5upUgmLtK5Gu4%2FipWmgEM9aN1BmfzE6WOGC9HXdj1gv18YjaSKQCFdTu7v2SaOPK0Tu1iHSTx7XJtp4pMuzkQe4jhiu7ZDhXFxB0RPniAEcWNhey0uZ%2B7hdo8z%2BkaFU9PBbgq5r2MV%2FatGRcig1RqUADrfHHIWA60BwjXDykeANmR%2Fkv6U5qfsS%2FekMrpNfIbvUtsP3IxUZ7AJIKP2M%2Fls6MywIVijyykf%2BpwaE12R5OCk6JR6lkeGzscob%2FQKLlekNUffiJOqkGRNawgz29h2vUWd8riUxe6a85m7yVuvDH6TDllmjDRyONaMjnVmEWXCUpsg8sxQTNn4kNpkcvDmpUDuXQLCOAiBazyFmnK7RoIzg3WxeWMqbKCwvGWh5lFTcgJzAN7f8dMZ0Drh07B%2FziZVMNDbjsEGOqUB8c5PjLOxmnLgddKttT0bbeRCvvtpwXxhbb4yDz2iDw658zr69RwVfneHUwyuLaRZsmdy3d4p9NgDxLkc3gpvVjjnuhTggrAvMqEsf1E9THBkjV2fFujRSuJ6dGJ%2BnmK66RaDwt3Vo%2Byx2%2Bac1Dd0KzbhSqsbDofatUVNgn22H%2FGQz68g7ni5XmY24dR7xYwoF3OmPzxuog2pPIPqPbxr8AZSg1zv&X-Amz-Signature=3895de3c73d3072130904b234674f784994132648c877c02718dde59822b3667&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

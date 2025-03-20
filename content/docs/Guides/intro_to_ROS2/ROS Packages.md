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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3ETPO4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCKWDGKMUqqD8S9UmqOKx1nr2hFjp7oYgSnFPhrL%2F2zwwIgBCZvYT2KImNtcHiF6Awr%2BkH4a%2FNFDTBZPmLzFcXr6YIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgHFKtQosNnXOJgircAySPpXuKJOzmMtLn3mvNUqdZyNEBiPTga7YLPP3wO6Mv9QUAyY%2B%2BWcs0Fh06LZctjoorWwwDhd6jYy9j%2FJ%2FTHVlXnD9t3IIkTdPIiM2MMhykR7eSXwIDx8gvz7MA6hYlEbZ7lflRmlOr%2FRb5L3CGkZuHfAB2j0A35Dx9NvXBNTn%2Fn7bOCR1R6wtt4iw7w6Nvh1%2BbdZLm69XgAqdEAFR%2FYbKvzT%2B%2Fh28tQpiR23PyVi%2BoC%2FcbO8tSiHsz6k41wcOkWSxihmxXNrFTE3CHFlNbDV0lXTCIgQq2u312OFeBafC%2BmkP07845TfLQ5eonabMBI54PzZ1z0YPvHLxeozJhAxmZiBX3j%2BBWMRxVEXWIplGWvTUqM7d8B4Ra7ML9WA7B3xIYDXRf7gksd1zWDsUEKOglpFCuRCQyw%2BArjSyst%2FNJTx%2F0R%2FooqzCSGP9aHqUe5FgppK4tZmGfZvc3tM%2BkUD%2FHvr5%2Fjwhutam%2B970s2p5vtLx32AUQGyY%2FuDWrkIydF%2BAdcrNcpjhAjxHJChjQd3l4KUDnN%2BOW%2B63XwOM30dqBOie6eRJ4TH3oMYrQ4gxAZzJKUAM5A7aFCE9GsUS%2Fj942uQOfwMqF0QdaetvDwqPNWpHiSWsNil7pZ9tAMLuF774GOqUBqCVZSjmisM8WcTfK8I1AxtHtV%2F%2B%2F8Tr6Qqtl0mw96Dbh8EBCXrbtVkxNf%2FAnFsVG96OYImrsZeDEm%2BbnEtu9FfIACAT37lf8yUdnwnkxuktuCPx1TNSWiUWZy1fv45DiEtT1qFKxm3aKCIGcsLopQi4mGt5jtBoxDofkvnCk7DkaaVKMUfNOPZ2QDljZw%2Bf5crfLGv9k4IwlmwhMJ478%2BDBykFdf&X-Amz-Signature=34325a17a499909103c568f06748c94b31b5fec76383ef98facece62717599c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3ETPO4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCKWDGKMUqqD8S9UmqOKx1nr2hFjp7oYgSnFPhrL%2F2zwwIgBCZvYT2KImNtcHiF6Awr%2BkH4a%2FNFDTBZPmLzFcXr6YIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgHFKtQosNnXOJgircAySPpXuKJOzmMtLn3mvNUqdZyNEBiPTga7YLPP3wO6Mv9QUAyY%2B%2BWcs0Fh06LZctjoorWwwDhd6jYy9j%2FJ%2FTHVlXnD9t3IIkTdPIiM2MMhykR7eSXwIDx8gvz7MA6hYlEbZ7lflRmlOr%2FRb5L3CGkZuHfAB2j0A35Dx9NvXBNTn%2Fn7bOCR1R6wtt4iw7w6Nvh1%2BbdZLm69XgAqdEAFR%2FYbKvzT%2B%2Fh28tQpiR23PyVi%2BoC%2FcbO8tSiHsz6k41wcOkWSxihmxXNrFTE3CHFlNbDV0lXTCIgQq2u312OFeBafC%2BmkP07845TfLQ5eonabMBI54PzZ1z0YPvHLxeozJhAxmZiBX3j%2BBWMRxVEXWIplGWvTUqM7d8B4Ra7ML9WA7B3xIYDXRf7gksd1zWDsUEKOglpFCuRCQyw%2BArjSyst%2FNJTx%2F0R%2FooqzCSGP9aHqUe5FgppK4tZmGfZvc3tM%2BkUD%2FHvr5%2Fjwhutam%2B970s2p5vtLx32AUQGyY%2FuDWrkIydF%2BAdcrNcpjhAjxHJChjQd3l4KUDnN%2BOW%2B63XwOM30dqBOie6eRJ4TH3oMYrQ4gxAZzJKUAM5A7aFCE9GsUS%2Fj942uQOfwMqF0QdaetvDwqPNWpHiSWsNil7pZ9tAMLuF774GOqUBqCVZSjmisM8WcTfK8I1AxtHtV%2F%2B%2F8Tr6Qqtl0mw96Dbh8EBCXrbtVkxNf%2FAnFsVG96OYImrsZeDEm%2BbnEtu9FfIACAT37lf8yUdnwnkxuktuCPx1TNSWiUWZy1fv45DiEtT1qFKxm3aKCIGcsLopQi4mGt5jtBoxDofkvnCk7DkaaVKMUfNOPZ2QDljZw%2Bf5crfLGv9k4IwlmwhMJ478%2BDBykFdf&X-Amz-Signature=a9accce3ee076972b2916b11b707cc2a2671c16abcd39117932b9b78230d04e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3ETPO4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCKWDGKMUqqD8S9UmqOKx1nr2hFjp7oYgSnFPhrL%2F2zwwIgBCZvYT2KImNtcHiF6Awr%2BkH4a%2FNFDTBZPmLzFcXr6YIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgHFKtQosNnXOJgircAySPpXuKJOzmMtLn3mvNUqdZyNEBiPTga7YLPP3wO6Mv9QUAyY%2B%2BWcs0Fh06LZctjoorWwwDhd6jYy9j%2FJ%2FTHVlXnD9t3IIkTdPIiM2MMhykR7eSXwIDx8gvz7MA6hYlEbZ7lflRmlOr%2FRb5L3CGkZuHfAB2j0A35Dx9NvXBNTn%2Fn7bOCR1R6wtt4iw7w6Nvh1%2BbdZLm69XgAqdEAFR%2FYbKvzT%2B%2Fh28tQpiR23PyVi%2BoC%2FcbO8tSiHsz6k41wcOkWSxihmxXNrFTE3CHFlNbDV0lXTCIgQq2u312OFeBafC%2BmkP07845TfLQ5eonabMBI54PzZ1z0YPvHLxeozJhAxmZiBX3j%2BBWMRxVEXWIplGWvTUqM7d8B4Ra7ML9WA7B3xIYDXRf7gksd1zWDsUEKOglpFCuRCQyw%2BArjSyst%2FNJTx%2F0R%2FooqzCSGP9aHqUe5FgppK4tZmGfZvc3tM%2BkUD%2FHvr5%2Fjwhutam%2B970s2p5vtLx32AUQGyY%2FuDWrkIydF%2BAdcrNcpjhAjxHJChjQd3l4KUDnN%2BOW%2B63XwOM30dqBOie6eRJ4TH3oMYrQ4gxAZzJKUAM5A7aFCE9GsUS%2Fj942uQOfwMqF0QdaetvDwqPNWpHiSWsNil7pZ9tAMLuF774GOqUBqCVZSjmisM8WcTfK8I1AxtHtV%2F%2B%2F8Tr6Qqtl0mw96Dbh8EBCXrbtVkxNf%2FAnFsVG96OYImrsZeDEm%2BbnEtu9FfIACAT37lf8yUdnwnkxuktuCPx1TNSWiUWZy1fv45DiEtT1qFKxm3aKCIGcsLopQi4mGt5jtBoxDofkvnCk7DkaaVKMUfNOPZ2QDljZw%2Bf5crfLGv9k4IwlmwhMJ478%2BDBykFdf&X-Amz-Signature=232412edc5411cddc57fcf7d19e169e4f379c19b8b94abd89ecd5cf41edcefee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3ETPO4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCKWDGKMUqqD8S9UmqOKx1nr2hFjp7oYgSnFPhrL%2F2zwwIgBCZvYT2KImNtcHiF6Awr%2BkH4a%2FNFDTBZPmLzFcXr6YIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgHFKtQosNnXOJgircAySPpXuKJOzmMtLn3mvNUqdZyNEBiPTga7YLPP3wO6Mv9QUAyY%2B%2BWcs0Fh06LZctjoorWwwDhd6jYy9j%2FJ%2FTHVlXnD9t3IIkTdPIiM2MMhykR7eSXwIDx8gvz7MA6hYlEbZ7lflRmlOr%2FRb5L3CGkZuHfAB2j0A35Dx9NvXBNTn%2Fn7bOCR1R6wtt4iw7w6Nvh1%2BbdZLm69XgAqdEAFR%2FYbKvzT%2B%2Fh28tQpiR23PyVi%2BoC%2FcbO8tSiHsz6k41wcOkWSxihmxXNrFTE3CHFlNbDV0lXTCIgQq2u312OFeBafC%2BmkP07845TfLQ5eonabMBI54PzZ1z0YPvHLxeozJhAxmZiBX3j%2BBWMRxVEXWIplGWvTUqM7d8B4Ra7ML9WA7B3xIYDXRf7gksd1zWDsUEKOglpFCuRCQyw%2BArjSyst%2FNJTx%2F0R%2FooqzCSGP9aHqUe5FgppK4tZmGfZvc3tM%2BkUD%2FHvr5%2Fjwhutam%2B970s2p5vtLx32AUQGyY%2FuDWrkIydF%2BAdcrNcpjhAjxHJChjQd3l4KUDnN%2BOW%2B63XwOM30dqBOie6eRJ4TH3oMYrQ4gxAZzJKUAM5A7aFCE9GsUS%2Fj942uQOfwMqF0QdaetvDwqPNWpHiSWsNil7pZ9tAMLuF774GOqUBqCVZSjmisM8WcTfK8I1AxtHtV%2F%2B%2F8Tr6Qqtl0mw96Dbh8EBCXrbtVkxNf%2FAnFsVG96OYImrsZeDEm%2BbnEtu9FfIACAT37lf8yUdnwnkxuktuCPx1TNSWiUWZy1fv45DiEtT1qFKxm3aKCIGcsLopQi4mGt5jtBoxDofkvnCk7DkaaVKMUfNOPZ2QDljZw%2Bf5crfLGv9k4IwlmwhMJ478%2BDBykFdf&X-Amz-Signature=3c11775587755b238e522a6305884c0fb3cd421b97e8afdf7c272925e4a940f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3ETPO4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCKWDGKMUqqD8S9UmqOKx1nr2hFjp7oYgSnFPhrL%2F2zwwIgBCZvYT2KImNtcHiF6Awr%2BkH4a%2FNFDTBZPmLzFcXr6YIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgHFKtQosNnXOJgircAySPpXuKJOzmMtLn3mvNUqdZyNEBiPTga7YLPP3wO6Mv9QUAyY%2B%2BWcs0Fh06LZctjoorWwwDhd6jYy9j%2FJ%2FTHVlXnD9t3IIkTdPIiM2MMhykR7eSXwIDx8gvz7MA6hYlEbZ7lflRmlOr%2FRb5L3CGkZuHfAB2j0A35Dx9NvXBNTn%2Fn7bOCR1R6wtt4iw7w6Nvh1%2BbdZLm69XgAqdEAFR%2FYbKvzT%2B%2Fh28tQpiR23PyVi%2BoC%2FcbO8tSiHsz6k41wcOkWSxihmxXNrFTE3CHFlNbDV0lXTCIgQq2u312OFeBafC%2BmkP07845TfLQ5eonabMBI54PzZ1z0YPvHLxeozJhAxmZiBX3j%2BBWMRxVEXWIplGWvTUqM7d8B4Ra7ML9WA7B3xIYDXRf7gksd1zWDsUEKOglpFCuRCQyw%2BArjSyst%2FNJTx%2F0R%2FooqzCSGP9aHqUe5FgppK4tZmGfZvc3tM%2BkUD%2FHvr5%2Fjwhutam%2B970s2p5vtLx32AUQGyY%2FuDWrkIydF%2BAdcrNcpjhAjxHJChjQd3l4KUDnN%2BOW%2B63XwOM30dqBOie6eRJ4TH3oMYrQ4gxAZzJKUAM5A7aFCE9GsUS%2Fj942uQOfwMqF0QdaetvDwqPNWpHiSWsNil7pZ9tAMLuF774GOqUBqCVZSjmisM8WcTfK8I1AxtHtV%2F%2B%2F8Tr6Qqtl0mw96Dbh8EBCXrbtVkxNf%2FAnFsVG96OYImrsZeDEm%2BbnEtu9FfIACAT37lf8yUdnwnkxuktuCPx1TNSWiUWZy1fv45DiEtT1qFKxm3aKCIGcsLopQi4mGt5jtBoxDofkvnCk7DkaaVKMUfNOPZ2QDljZw%2Bf5crfLGv9k4IwlmwhMJ478%2BDBykFdf&X-Amz-Signature=11965e8ac4aa6c3b6e7319baea3a75dc68fa3e6ebcf099355c79f760785c924b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3ETPO4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCKWDGKMUqqD8S9UmqOKx1nr2hFjp7oYgSnFPhrL%2F2zwwIgBCZvYT2KImNtcHiF6Awr%2BkH4a%2FNFDTBZPmLzFcXr6YIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgHFKtQosNnXOJgircAySPpXuKJOzmMtLn3mvNUqdZyNEBiPTga7YLPP3wO6Mv9QUAyY%2B%2BWcs0Fh06LZctjoorWwwDhd6jYy9j%2FJ%2FTHVlXnD9t3IIkTdPIiM2MMhykR7eSXwIDx8gvz7MA6hYlEbZ7lflRmlOr%2FRb5L3CGkZuHfAB2j0A35Dx9NvXBNTn%2Fn7bOCR1R6wtt4iw7w6Nvh1%2BbdZLm69XgAqdEAFR%2FYbKvzT%2B%2Fh28tQpiR23PyVi%2BoC%2FcbO8tSiHsz6k41wcOkWSxihmxXNrFTE3CHFlNbDV0lXTCIgQq2u312OFeBafC%2BmkP07845TfLQ5eonabMBI54PzZ1z0YPvHLxeozJhAxmZiBX3j%2BBWMRxVEXWIplGWvTUqM7d8B4Ra7ML9WA7B3xIYDXRf7gksd1zWDsUEKOglpFCuRCQyw%2BArjSyst%2FNJTx%2F0R%2FooqzCSGP9aHqUe5FgppK4tZmGfZvc3tM%2BkUD%2FHvr5%2Fjwhutam%2B970s2p5vtLx32AUQGyY%2FuDWrkIydF%2BAdcrNcpjhAjxHJChjQd3l4KUDnN%2BOW%2B63XwOM30dqBOie6eRJ4TH3oMYrQ4gxAZzJKUAM5A7aFCE9GsUS%2Fj942uQOfwMqF0QdaetvDwqPNWpHiSWsNil7pZ9tAMLuF774GOqUBqCVZSjmisM8WcTfK8I1AxtHtV%2F%2B%2F8Tr6Qqtl0mw96Dbh8EBCXrbtVkxNf%2FAnFsVG96OYImrsZeDEm%2BbnEtu9FfIACAT37lf8yUdnwnkxuktuCPx1TNSWiUWZy1fv45DiEtT1qFKxm3aKCIGcsLopQi4mGt5jtBoxDofkvnCk7DkaaVKMUfNOPZ2QDljZw%2Bf5crfLGv9k4IwlmwhMJ478%2BDBykFdf&X-Amz-Signature=ce927bc12f59683dd0106fde7b4bbf4e2586ba6107af6c09db2961f236bb4fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3ETPO4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCKWDGKMUqqD8S9UmqOKx1nr2hFjp7oYgSnFPhrL%2F2zwwIgBCZvYT2KImNtcHiF6Awr%2BkH4a%2FNFDTBZPmLzFcXr6YIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgHFKtQosNnXOJgircAySPpXuKJOzmMtLn3mvNUqdZyNEBiPTga7YLPP3wO6Mv9QUAyY%2B%2BWcs0Fh06LZctjoorWwwDhd6jYy9j%2FJ%2FTHVlXnD9t3IIkTdPIiM2MMhykR7eSXwIDx8gvz7MA6hYlEbZ7lflRmlOr%2FRb5L3CGkZuHfAB2j0A35Dx9NvXBNTn%2Fn7bOCR1R6wtt4iw7w6Nvh1%2BbdZLm69XgAqdEAFR%2FYbKvzT%2B%2Fh28tQpiR23PyVi%2BoC%2FcbO8tSiHsz6k41wcOkWSxihmxXNrFTE3CHFlNbDV0lXTCIgQq2u312OFeBafC%2BmkP07845TfLQ5eonabMBI54PzZ1z0YPvHLxeozJhAxmZiBX3j%2BBWMRxVEXWIplGWvTUqM7d8B4Ra7ML9WA7B3xIYDXRf7gksd1zWDsUEKOglpFCuRCQyw%2BArjSyst%2FNJTx%2F0R%2FooqzCSGP9aHqUe5FgppK4tZmGfZvc3tM%2BkUD%2FHvr5%2Fjwhutam%2B970s2p5vtLx32AUQGyY%2FuDWrkIydF%2BAdcrNcpjhAjxHJChjQd3l4KUDnN%2BOW%2B63XwOM30dqBOie6eRJ4TH3oMYrQ4gxAZzJKUAM5A7aFCE9GsUS%2Fj942uQOfwMqF0QdaetvDwqPNWpHiSWsNil7pZ9tAMLuF774GOqUBqCVZSjmisM8WcTfK8I1AxtHtV%2F%2B%2F8Tr6Qqtl0mw96Dbh8EBCXrbtVkxNf%2FAnFsVG96OYImrsZeDEm%2BbnEtu9FfIACAT37lf8yUdnwnkxuktuCPx1TNSWiUWZy1fv45DiEtT1qFKxm3aKCIGcsLopQi4mGt5jtBoxDofkvnCk7DkaaVKMUfNOPZ2QDljZw%2Bf5crfLGv9k4IwlmwhMJ478%2BDBykFdf&X-Amz-Signature=498c2d981d896705258e52af956f2f7001a54292d74aeaf5f0e7e347e0d91346&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

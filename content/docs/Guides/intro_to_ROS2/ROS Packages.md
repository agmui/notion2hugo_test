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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELUFPFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDQJnBU2R39sYPNqlAzi8Qz7LWuGJHH%2B8u4CiO9HGqh%2BAIgMHgz%2BYIWU6j%2BBtZZZkhi4JH5ba9SgrZeovOp37uYgh0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD%2BtidEP%2Fv50QRMnfSrcA7o1oehaOm2ZBiVzetSnNRkb3QKSgPvXQ7uZDfAxd9yqvBf03Xw%2Bu0UcYGfExdYGjwYcORibmadAXdaC9lWrfs%2FyaqJ1nNgnsrl9myFcNRavW1%2BmQxUQJNavPFhi%2BQHBkR4ov125lMjiNpe8gS56IroqTleO8W2JDfENHnr6X0vEhtAf0YNMtZAdjaKp6FXhdw1sU5qP5Py1icSejVJlulrtfENOoSCnMBZ1198s3MKBHGSzkHQJvykI2LuGqgyM19HkJEYdxdX1Y2iMJ9P3WKMRyFx%2Fb8h6bQBqNeNhQ%2Bkwc6aZJOQU0FQViO7XXgjj%2FLz%2BJIMEQ%2FxNSYcbtLWtuHtcUs4adbsPVO2si5%2FOuRZaOYrkSwRhmwZAFC4dxF1t%2BgpN7MdFKDiPf0GshvgTBUp906bT1GyCEWwnB%2F4gIF1IDEHm8dzlEIjgsR41ogEkz4NVlufAWz4Gd9QZsXZteLFDnTU0%2FWlrKxRrLZp3l9GxMebWgtjbxH5c1xMU11M90ifM8nqESvSt6nfhUMz8mZGjH0KDWYzMby5aSjcBK6g8Xp7ht%2FRdOT737wZq8u412CalwdC%2Fs3qIgE5oTGyk9p8FG00saCna68%2FIpnOzHgpChYUSAuepOAdUbPkbMK2Fib0GOqUBvr1lT7A7JI6WVrpgkqGAFJEznhg6JqflFtKzoMJ1Y3FJVZOS%2BHUEYJmU4W5BDGtnyT4EiS5iYMgUHyzRCPGt0acGgYyMdGwzq455okHQQJ%2Fn%2BEutUB8pa%2BeLGNveKIslf%2FrzSw9d0naQr1evkp8JFubT6lcuqpfUawau%2FiaHcLTlpO7%2Bk2blQV4RcRWlie4wZBGUi4wSgDtF7jLDzpotH7TwhEMg&X-Amz-Signature=cd921771e91ad1477f801a1205b1cf727e179061ecb223b5d2cebced1e6fd15d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELUFPFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDQJnBU2R39sYPNqlAzi8Qz7LWuGJHH%2B8u4CiO9HGqh%2BAIgMHgz%2BYIWU6j%2BBtZZZkhi4JH5ba9SgrZeovOp37uYgh0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD%2BtidEP%2Fv50QRMnfSrcA7o1oehaOm2ZBiVzetSnNRkb3QKSgPvXQ7uZDfAxd9yqvBf03Xw%2Bu0UcYGfExdYGjwYcORibmadAXdaC9lWrfs%2FyaqJ1nNgnsrl9myFcNRavW1%2BmQxUQJNavPFhi%2BQHBkR4ov125lMjiNpe8gS56IroqTleO8W2JDfENHnr6X0vEhtAf0YNMtZAdjaKp6FXhdw1sU5qP5Py1icSejVJlulrtfENOoSCnMBZ1198s3MKBHGSzkHQJvykI2LuGqgyM19HkJEYdxdX1Y2iMJ9P3WKMRyFx%2Fb8h6bQBqNeNhQ%2Bkwc6aZJOQU0FQViO7XXgjj%2FLz%2BJIMEQ%2FxNSYcbtLWtuHtcUs4adbsPVO2si5%2FOuRZaOYrkSwRhmwZAFC4dxF1t%2BgpN7MdFKDiPf0GshvgTBUp906bT1GyCEWwnB%2F4gIF1IDEHm8dzlEIjgsR41ogEkz4NVlufAWz4Gd9QZsXZteLFDnTU0%2FWlrKxRrLZp3l9GxMebWgtjbxH5c1xMU11M90ifM8nqESvSt6nfhUMz8mZGjH0KDWYzMby5aSjcBK6g8Xp7ht%2FRdOT737wZq8u412CalwdC%2Fs3qIgE5oTGyk9p8FG00saCna68%2FIpnOzHgpChYUSAuepOAdUbPkbMK2Fib0GOqUBvr1lT7A7JI6WVrpgkqGAFJEznhg6JqflFtKzoMJ1Y3FJVZOS%2BHUEYJmU4W5BDGtnyT4EiS5iYMgUHyzRCPGt0acGgYyMdGwzq455okHQQJ%2Fn%2BEutUB8pa%2BeLGNveKIslf%2FrzSw9d0naQr1evkp8JFubT6lcuqpfUawau%2FiaHcLTlpO7%2Bk2blQV4RcRWlie4wZBGUi4wSgDtF7jLDzpotH7TwhEMg&X-Amz-Signature=fcc950b787a33ade608faa7bbad5ffe0aa909423847c944c47ffcdeb11788ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELUFPFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDQJnBU2R39sYPNqlAzi8Qz7LWuGJHH%2B8u4CiO9HGqh%2BAIgMHgz%2BYIWU6j%2BBtZZZkhi4JH5ba9SgrZeovOp37uYgh0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD%2BtidEP%2Fv50QRMnfSrcA7o1oehaOm2ZBiVzetSnNRkb3QKSgPvXQ7uZDfAxd9yqvBf03Xw%2Bu0UcYGfExdYGjwYcORibmadAXdaC9lWrfs%2FyaqJ1nNgnsrl9myFcNRavW1%2BmQxUQJNavPFhi%2BQHBkR4ov125lMjiNpe8gS56IroqTleO8W2JDfENHnr6X0vEhtAf0YNMtZAdjaKp6FXhdw1sU5qP5Py1icSejVJlulrtfENOoSCnMBZ1198s3MKBHGSzkHQJvykI2LuGqgyM19HkJEYdxdX1Y2iMJ9P3WKMRyFx%2Fb8h6bQBqNeNhQ%2Bkwc6aZJOQU0FQViO7XXgjj%2FLz%2BJIMEQ%2FxNSYcbtLWtuHtcUs4adbsPVO2si5%2FOuRZaOYrkSwRhmwZAFC4dxF1t%2BgpN7MdFKDiPf0GshvgTBUp906bT1GyCEWwnB%2F4gIF1IDEHm8dzlEIjgsR41ogEkz4NVlufAWz4Gd9QZsXZteLFDnTU0%2FWlrKxRrLZp3l9GxMebWgtjbxH5c1xMU11M90ifM8nqESvSt6nfhUMz8mZGjH0KDWYzMby5aSjcBK6g8Xp7ht%2FRdOT737wZq8u412CalwdC%2Fs3qIgE5oTGyk9p8FG00saCna68%2FIpnOzHgpChYUSAuepOAdUbPkbMK2Fib0GOqUBvr1lT7A7JI6WVrpgkqGAFJEznhg6JqflFtKzoMJ1Y3FJVZOS%2BHUEYJmU4W5BDGtnyT4EiS5iYMgUHyzRCPGt0acGgYyMdGwzq455okHQQJ%2Fn%2BEutUB8pa%2BeLGNveKIslf%2FrzSw9d0naQr1evkp8JFubT6lcuqpfUawau%2FiaHcLTlpO7%2Bk2blQV4RcRWlie4wZBGUi4wSgDtF7jLDzpotH7TwhEMg&X-Amz-Signature=6a985b7927dc541f197ab36c234ed4045fa940b25f8de55ef6bfc4f0cea8e4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELUFPFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDQJnBU2R39sYPNqlAzi8Qz7LWuGJHH%2B8u4CiO9HGqh%2BAIgMHgz%2BYIWU6j%2BBtZZZkhi4JH5ba9SgrZeovOp37uYgh0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD%2BtidEP%2Fv50QRMnfSrcA7o1oehaOm2ZBiVzetSnNRkb3QKSgPvXQ7uZDfAxd9yqvBf03Xw%2Bu0UcYGfExdYGjwYcORibmadAXdaC9lWrfs%2FyaqJ1nNgnsrl9myFcNRavW1%2BmQxUQJNavPFhi%2BQHBkR4ov125lMjiNpe8gS56IroqTleO8W2JDfENHnr6X0vEhtAf0YNMtZAdjaKp6FXhdw1sU5qP5Py1icSejVJlulrtfENOoSCnMBZ1198s3MKBHGSzkHQJvykI2LuGqgyM19HkJEYdxdX1Y2iMJ9P3WKMRyFx%2Fb8h6bQBqNeNhQ%2Bkwc6aZJOQU0FQViO7XXgjj%2FLz%2BJIMEQ%2FxNSYcbtLWtuHtcUs4adbsPVO2si5%2FOuRZaOYrkSwRhmwZAFC4dxF1t%2BgpN7MdFKDiPf0GshvgTBUp906bT1GyCEWwnB%2F4gIF1IDEHm8dzlEIjgsR41ogEkz4NVlufAWz4Gd9QZsXZteLFDnTU0%2FWlrKxRrLZp3l9GxMebWgtjbxH5c1xMU11M90ifM8nqESvSt6nfhUMz8mZGjH0KDWYzMby5aSjcBK6g8Xp7ht%2FRdOT737wZq8u412CalwdC%2Fs3qIgE5oTGyk9p8FG00saCna68%2FIpnOzHgpChYUSAuepOAdUbPkbMK2Fib0GOqUBvr1lT7A7JI6WVrpgkqGAFJEznhg6JqflFtKzoMJ1Y3FJVZOS%2BHUEYJmU4W5BDGtnyT4EiS5iYMgUHyzRCPGt0acGgYyMdGwzq455okHQQJ%2Fn%2BEutUB8pa%2BeLGNveKIslf%2FrzSw9d0naQr1evkp8JFubT6lcuqpfUawau%2FiaHcLTlpO7%2Bk2blQV4RcRWlie4wZBGUi4wSgDtF7jLDzpotH7TwhEMg&X-Amz-Signature=f00218110f19a3acb3c5b3d1d0b5c2bada2a5554696ac35afc7011e5b06dfe6b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELUFPFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDQJnBU2R39sYPNqlAzi8Qz7LWuGJHH%2B8u4CiO9HGqh%2BAIgMHgz%2BYIWU6j%2BBtZZZkhi4JH5ba9SgrZeovOp37uYgh0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD%2BtidEP%2Fv50QRMnfSrcA7o1oehaOm2ZBiVzetSnNRkb3QKSgPvXQ7uZDfAxd9yqvBf03Xw%2Bu0UcYGfExdYGjwYcORibmadAXdaC9lWrfs%2FyaqJ1nNgnsrl9myFcNRavW1%2BmQxUQJNavPFhi%2BQHBkR4ov125lMjiNpe8gS56IroqTleO8W2JDfENHnr6X0vEhtAf0YNMtZAdjaKp6FXhdw1sU5qP5Py1icSejVJlulrtfENOoSCnMBZ1198s3MKBHGSzkHQJvykI2LuGqgyM19HkJEYdxdX1Y2iMJ9P3WKMRyFx%2Fb8h6bQBqNeNhQ%2Bkwc6aZJOQU0FQViO7XXgjj%2FLz%2BJIMEQ%2FxNSYcbtLWtuHtcUs4adbsPVO2si5%2FOuRZaOYrkSwRhmwZAFC4dxF1t%2BgpN7MdFKDiPf0GshvgTBUp906bT1GyCEWwnB%2F4gIF1IDEHm8dzlEIjgsR41ogEkz4NVlufAWz4Gd9QZsXZteLFDnTU0%2FWlrKxRrLZp3l9GxMebWgtjbxH5c1xMU11M90ifM8nqESvSt6nfhUMz8mZGjH0KDWYzMby5aSjcBK6g8Xp7ht%2FRdOT737wZq8u412CalwdC%2Fs3qIgE5oTGyk9p8FG00saCna68%2FIpnOzHgpChYUSAuepOAdUbPkbMK2Fib0GOqUBvr1lT7A7JI6WVrpgkqGAFJEznhg6JqflFtKzoMJ1Y3FJVZOS%2BHUEYJmU4W5BDGtnyT4EiS5iYMgUHyzRCPGt0acGgYyMdGwzq455okHQQJ%2Fn%2BEutUB8pa%2BeLGNveKIslf%2FrzSw9d0naQr1evkp8JFubT6lcuqpfUawau%2FiaHcLTlpO7%2Bk2blQV4RcRWlie4wZBGUi4wSgDtF7jLDzpotH7TwhEMg&X-Amz-Signature=82ce2723b4b4ae7fbe4b222ef398bf02aeaa488779539d478938fef24a4c5f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELUFPFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDQJnBU2R39sYPNqlAzi8Qz7LWuGJHH%2B8u4CiO9HGqh%2BAIgMHgz%2BYIWU6j%2BBtZZZkhi4JH5ba9SgrZeovOp37uYgh0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD%2BtidEP%2Fv50QRMnfSrcA7o1oehaOm2ZBiVzetSnNRkb3QKSgPvXQ7uZDfAxd9yqvBf03Xw%2Bu0UcYGfExdYGjwYcORibmadAXdaC9lWrfs%2FyaqJ1nNgnsrl9myFcNRavW1%2BmQxUQJNavPFhi%2BQHBkR4ov125lMjiNpe8gS56IroqTleO8W2JDfENHnr6X0vEhtAf0YNMtZAdjaKp6FXhdw1sU5qP5Py1icSejVJlulrtfENOoSCnMBZ1198s3MKBHGSzkHQJvykI2LuGqgyM19HkJEYdxdX1Y2iMJ9P3WKMRyFx%2Fb8h6bQBqNeNhQ%2Bkwc6aZJOQU0FQViO7XXgjj%2FLz%2BJIMEQ%2FxNSYcbtLWtuHtcUs4adbsPVO2si5%2FOuRZaOYrkSwRhmwZAFC4dxF1t%2BgpN7MdFKDiPf0GshvgTBUp906bT1GyCEWwnB%2F4gIF1IDEHm8dzlEIjgsR41ogEkz4NVlufAWz4Gd9QZsXZteLFDnTU0%2FWlrKxRrLZp3l9GxMebWgtjbxH5c1xMU11M90ifM8nqESvSt6nfhUMz8mZGjH0KDWYzMby5aSjcBK6g8Xp7ht%2FRdOT737wZq8u412CalwdC%2Fs3qIgE5oTGyk9p8FG00saCna68%2FIpnOzHgpChYUSAuepOAdUbPkbMK2Fib0GOqUBvr1lT7A7JI6WVrpgkqGAFJEznhg6JqflFtKzoMJ1Y3FJVZOS%2BHUEYJmU4W5BDGtnyT4EiS5iYMgUHyzRCPGt0acGgYyMdGwzq455okHQQJ%2Fn%2BEutUB8pa%2BeLGNveKIslf%2FrzSw9d0naQr1evkp8JFubT6lcuqpfUawau%2FiaHcLTlpO7%2Bk2blQV4RcRWlie4wZBGUi4wSgDtF7jLDzpotH7TwhEMg&X-Amz-Signature=5efac3a6f9177f243a3c37c95db3818440a2514230f5bda5ae99bb124bf09d12&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELUFPFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDQJnBU2R39sYPNqlAzi8Qz7LWuGJHH%2B8u4CiO9HGqh%2BAIgMHgz%2BYIWU6j%2BBtZZZkhi4JH5ba9SgrZeovOp37uYgh0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD%2BtidEP%2Fv50QRMnfSrcA7o1oehaOm2ZBiVzetSnNRkb3QKSgPvXQ7uZDfAxd9yqvBf03Xw%2Bu0UcYGfExdYGjwYcORibmadAXdaC9lWrfs%2FyaqJ1nNgnsrl9myFcNRavW1%2BmQxUQJNavPFhi%2BQHBkR4ov125lMjiNpe8gS56IroqTleO8W2JDfENHnr6X0vEhtAf0YNMtZAdjaKp6FXhdw1sU5qP5Py1icSejVJlulrtfENOoSCnMBZ1198s3MKBHGSzkHQJvykI2LuGqgyM19HkJEYdxdX1Y2iMJ9P3WKMRyFx%2Fb8h6bQBqNeNhQ%2Bkwc6aZJOQU0FQViO7XXgjj%2FLz%2BJIMEQ%2FxNSYcbtLWtuHtcUs4adbsPVO2si5%2FOuRZaOYrkSwRhmwZAFC4dxF1t%2BgpN7MdFKDiPf0GshvgTBUp906bT1GyCEWwnB%2F4gIF1IDEHm8dzlEIjgsR41ogEkz4NVlufAWz4Gd9QZsXZteLFDnTU0%2FWlrKxRrLZp3l9GxMebWgtjbxH5c1xMU11M90ifM8nqESvSt6nfhUMz8mZGjH0KDWYzMby5aSjcBK6g8Xp7ht%2FRdOT737wZq8u412CalwdC%2Fs3qIgE5oTGyk9p8FG00saCna68%2FIpnOzHgpChYUSAuepOAdUbPkbMK2Fib0GOqUBvr1lT7A7JI6WVrpgkqGAFJEznhg6JqflFtKzoMJ1Y3FJVZOS%2BHUEYJmU4W5BDGtnyT4EiS5iYMgUHyzRCPGt0acGgYyMdGwzq455okHQQJ%2Fn%2BEutUB8pa%2BeLGNveKIslf%2FrzSw9d0naQr1evkp8JFubT6lcuqpfUawau%2FiaHcLTlpO7%2Bk2blQV4RcRWlie4wZBGUi4wSgDtF7jLDzpotH7TwhEMg&X-Amz-Signature=7ddb40013b267664c7fd9940421a8b4eee6355fede4a306fb49d86d1aec4f532&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOYHFRA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6mufc9UV80jmc52RDl07PyQE2gob1zeboy9QS%2F9XrhAiA7GFaxYdu1l5ZR1Q7fTmMoRfEvT9zO7TmVY2%2B3fjqlJSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhfOhVpyQ7zfLB%2BzMKtwDVhaJ0Yp3Yaqel8OzDebY5SqnaD3CWOVTHpRcZSodApNzZkkANX7VlyU1ZDH%2BbYdRon4XOOq%2BugPKYHM9LYgwwP0WS7Dg2OZ%2BSf1QvtxvHNca3SjI5vNmecp6kX01XLbqrxSxJi%2F8sr7As%2BnEtXsCaXuUABapT79h6U5WSgnyNeO%2Boxf3dXHxZfHWhiFiAh7V0JH5GhZKcUzpo64hrEJ7kimzxt9BOmdH%2FmN%2FZ19DW2byw1gUkcHF5yKEb70UY2UsRepr2L8cg81G9Q8ico32PjE8Us5n1cN2mq2oDBLo%2FPf%2FeYiIEu1d7lkiIOg7Cdmi4%2B%2FpzTnDZoYX%2BpU8gvD1qC%2BmzykqakWXzlsbMudbJxuZZi086pKW1MrigoXZ7E%2Fum%2BxNX8%2FW%2Ft%2BPxN4EUav2QvKsQYmqmgSb1YPd4xWaHO9BJmAJAUyBcotl%2BlMFc6Ad3JiyTFEfhkmnV3BDdJilIX58VMFvjHRZXerQzh%2By5tzX9X%2BHhW7JLDK5Vfoo1w92cyYhuBlaFXNuIluLdUTAa9kn8YB5KPvttqA9sD5Y6rqNMKrPnQeYPVP5rLzPjaZFoxl1syKgp8gd3bx3mQm4mQ5D%2FogT3xXsieBYP5eIdC%2F%2F22cN0HhqmRwkFy4woo6JwAY6pgEwCucsT4yRYO9qwIA6JwWvjD8s3puXPONP1QIlMg4RwuXjQlSc3DPotlduqVm5u8qVMY4u1HAwXSL5NU03ZJ7ibXf4uMgtA8Ov5B99z5jT7jZ9ZqqAWpY3PhFrHz1gvscj0AtLcqZamwpbOstucrbc8zjdWm9W3Xbk0LXufTzw5LKP4Phfz80zjxg9szRMi3KFiqvEGtRfPruta4X36sPeh2ApV09P&X-Amz-Signature=6f8127cffb9399e5b2862350d4be10fc37aba6e06bd5ea9420847634bdd31fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOYHFRA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6mufc9UV80jmc52RDl07PyQE2gob1zeboy9QS%2F9XrhAiA7GFaxYdu1l5ZR1Q7fTmMoRfEvT9zO7TmVY2%2B3fjqlJSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhfOhVpyQ7zfLB%2BzMKtwDVhaJ0Yp3Yaqel8OzDebY5SqnaD3CWOVTHpRcZSodApNzZkkANX7VlyU1ZDH%2BbYdRon4XOOq%2BugPKYHM9LYgwwP0WS7Dg2OZ%2BSf1QvtxvHNca3SjI5vNmecp6kX01XLbqrxSxJi%2F8sr7As%2BnEtXsCaXuUABapT79h6U5WSgnyNeO%2Boxf3dXHxZfHWhiFiAh7V0JH5GhZKcUzpo64hrEJ7kimzxt9BOmdH%2FmN%2FZ19DW2byw1gUkcHF5yKEb70UY2UsRepr2L8cg81G9Q8ico32PjE8Us5n1cN2mq2oDBLo%2FPf%2FeYiIEu1d7lkiIOg7Cdmi4%2B%2FpzTnDZoYX%2BpU8gvD1qC%2BmzykqakWXzlsbMudbJxuZZi086pKW1MrigoXZ7E%2Fum%2BxNX8%2FW%2Ft%2BPxN4EUav2QvKsQYmqmgSb1YPd4xWaHO9BJmAJAUyBcotl%2BlMFc6Ad3JiyTFEfhkmnV3BDdJilIX58VMFvjHRZXerQzh%2By5tzX9X%2BHhW7JLDK5Vfoo1w92cyYhuBlaFXNuIluLdUTAa9kn8YB5KPvttqA9sD5Y6rqNMKrPnQeYPVP5rLzPjaZFoxl1syKgp8gd3bx3mQm4mQ5D%2FogT3xXsieBYP5eIdC%2F%2F22cN0HhqmRwkFy4woo6JwAY6pgEwCucsT4yRYO9qwIA6JwWvjD8s3puXPONP1QIlMg4RwuXjQlSc3DPotlduqVm5u8qVMY4u1HAwXSL5NU03ZJ7ibXf4uMgtA8Ov5B99z5jT7jZ9ZqqAWpY3PhFrHz1gvscj0AtLcqZamwpbOstucrbc8zjdWm9W3Xbk0LXufTzw5LKP4Phfz80zjxg9szRMi3KFiqvEGtRfPruta4X36sPeh2ApV09P&X-Amz-Signature=365693259db03738f5881d523246c79a5e98b272e333d5bc049ad3d29ed8ad94&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOYHFRA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6mufc9UV80jmc52RDl07PyQE2gob1zeboy9QS%2F9XrhAiA7GFaxYdu1l5ZR1Q7fTmMoRfEvT9zO7TmVY2%2B3fjqlJSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhfOhVpyQ7zfLB%2BzMKtwDVhaJ0Yp3Yaqel8OzDebY5SqnaD3CWOVTHpRcZSodApNzZkkANX7VlyU1ZDH%2BbYdRon4XOOq%2BugPKYHM9LYgwwP0WS7Dg2OZ%2BSf1QvtxvHNca3SjI5vNmecp6kX01XLbqrxSxJi%2F8sr7As%2BnEtXsCaXuUABapT79h6U5WSgnyNeO%2Boxf3dXHxZfHWhiFiAh7V0JH5GhZKcUzpo64hrEJ7kimzxt9BOmdH%2FmN%2FZ19DW2byw1gUkcHF5yKEb70UY2UsRepr2L8cg81G9Q8ico32PjE8Us5n1cN2mq2oDBLo%2FPf%2FeYiIEu1d7lkiIOg7Cdmi4%2B%2FpzTnDZoYX%2BpU8gvD1qC%2BmzykqakWXzlsbMudbJxuZZi086pKW1MrigoXZ7E%2Fum%2BxNX8%2FW%2Ft%2BPxN4EUav2QvKsQYmqmgSb1YPd4xWaHO9BJmAJAUyBcotl%2BlMFc6Ad3JiyTFEfhkmnV3BDdJilIX58VMFvjHRZXerQzh%2By5tzX9X%2BHhW7JLDK5Vfoo1w92cyYhuBlaFXNuIluLdUTAa9kn8YB5KPvttqA9sD5Y6rqNMKrPnQeYPVP5rLzPjaZFoxl1syKgp8gd3bx3mQm4mQ5D%2FogT3xXsieBYP5eIdC%2F%2F22cN0HhqmRwkFy4woo6JwAY6pgEwCucsT4yRYO9qwIA6JwWvjD8s3puXPONP1QIlMg4RwuXjQlSc3DPotlduqVm5u8qVMY4u1HAwXSL5NU03ZJ7ibXf4uMgtA8Ov5B99z5jT7jZ9ZqqAWpY3PhFrHz1gvscj0AtLcqZamwpbOstucrbc8zjdWm9W3Xbk0LXufTzw5LKP4Phfz80zjxg9szRMi3KFiqvEGtRfPruta4X36sPeh2ApV09P&X-Amz-Signature=227145b6a6d487efbe9f614a0abfa8a4b2d09e5316db247288311315ed42500d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOYHFRA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6mufc9UV80jmc52RDl07PyQE2gob1zeboy9QS%2F9XrhAiA7GFaxYdu1l5ZR1Q7fTmMoRfEvT9zO7TmVY2%2B3fjqlJSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhfOhVpyQ7zfLB%2BzMKtwDVhaJ0Yp3Yaqel8OzDebY5SqnaD3CWOVTHpRcZSodApNzZkkANX7VlyU1ZDH%2BbYdRon4XOOq%2BugPKYHM9LYgwwP0WS7Dg2OZ%2BSf1QvtxvHNca3SjI5vNmecp6kX01XLbqrxSxJi%2F8sr7As%2BnEtXsCaXuUABapT79h6U5WSgnyNeO%2Boxf3dXHxZfHWhiFiAh7V0JH5GhZKcUzpo64hrEJ7kimzxt9BOmdH%2FmN%2FZ19DW2byw1gUkcHF5yKEb70UY2UsRepr2L8cg81G9Q8ico32PjE8Us5n1cN2mq2oDBLo%2FPf%2FeYiIEu1d7lkiIOg7Cdmi4%2B%2FpzTnDZoYX%2BpU8gvD1qC%2BmzykqakWXzlsbMudbJxuZZi086pKW1MrigoXZ7E%2Fum%2BxNX8%2FW%2Ft%2BPxN4EUav2QvKsQYmqmgSb1YPd4xWaHO9BJmAJAUyBcotl%2BlMFc6Ad3JiyTFEfhkmnV3BDdJilIX58VMFvjHRZXerQzh%2By5tzX9X%2BHhW7JLDK5Vfoo1w92cyYhuBlaFXNuIluLdUTAa9kn8YB5KPvttqA9sD5Y6rqNMKrPnQeYPVP5rLzPjaZFoxl1syKgp8gd3bx3mQm4mQ5D%2FogT3xXsieBYP5eIdC%2F%2F22cN0HhqmRwkFy4woo6JwAY6pgEwCucsT4yRYO9qwIA6JwWvjD8s3puXPONP1QIlMg4RwuXjQlSc3DPotlduqVm5u8qVMY4u1HAwXSL5NU03ZJ7ibXf4uMgtA8Ov5B99z5jT7jZ9ZqqAWpY3PhFrHz1gvscj0AtLcqZamwpbOstucrbc8zjdWm9W3Xbk0LXufTzw5LKP4Phfz80zjxg9szRMi3KFiqvEGtRfPruta4X36sPeh2ApV09P&X-Amz-Signature=ae2cc0969b33cdb72efbbaf1afae1d1f67dd3817913ea39f7361cff8082bdee9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOYHFRA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6mufc9UV80jmc52RDl07PyQE2gob1zeboy9QS%2F9XrhAiA7GFaxYdu1l5ZR1Q7fTmMoRfEvT9zO7TmVY2%2B3fjqlJSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhfOhVpyQ7zfLB%2BzMKtwDVhaJ0Yp3Yaqel8OzDebY5SqnaD3CWOVTHpRcZSodApNzZkkANX7VlyU1ZDH%2BbYdRon4XOOq%2BugPKYHM9LYgwwP0WS7Dg2OZ%2BSf1QvtxvHNca3SjI5vNmecp6kX01XLbqrxSxJi%2F8sr7As%2BnEtXsCaXuUABapT79h6U5WSgnyNeO%2Boxf3dXHxZfHWhiFiAh7V0JH5GhZKcUzpo64hrEJ7kimzxt9BOmdH%2FmN%2FZ19DW2byw1gUkcHF5yKEb70UY2UsRepr2L8cg81G9Q8ico32PjE8Us5n1cN2mq2oDBLo%2FPf%2FeYiIEu1d7lkiIOg7Cdmi4%2B%2FpzTnDZoYX%2BpU8gvD1qC%2BmzykqakWXzlsbMudbJxuZZi086pKW1MrigoXZ7E%2Fum%2BxNX8%2FW%2Ft%2BPxN4EUav2QvKsQYmqmgSb1YPd4xWaHO9BJmAJAUyBcotl%2BlMFc6Ad3JiyTFEfhkmnV3BDdJilIX58VMFvjHRZXerQzh%2By5tzX9X%2BHhW7JLDK5Vfoo1w92cyYhuBlaFXNuIluLdUTAa9kn8YB5KPvttqA9sD5Y6rqNMKrPnQeYPVP5rLzPjaZFoxl1syKgp8gd3bx3mQm4mQ5D%2FogT3xXsieBYP5eIdC%2F%2F22cN0HhqmRwkFy4woo6JwAY6pgEwCucsT4yRYO9qwIA6JwWvjD8s3puXPONP1QIlMg4RwuXjQlSc3DPotlduqVm5u8qVMY4u1HAwXSL5NU03ZJ7ibXf4uMgtA8Ov5B99z5jT7jZ9ZqqAWpY3PhFrHz1gvscj0AtLcqZamwpbOstucrbc8zjdWm9W3Xbk0LXufTzw5LKP4Phfz80zjxg9szRMi3KFiqvEGtRfPruta4X36sPeh2ApV09P&X-Amz-Signature=6a641af57627bbceba70a93e837ed476a2e60adec818d990da0ef1cec1c7f052&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOYHFRA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6mufc9UV80jmc52RDl07PyQE2gob1zeboy9QS%2F9XrhAiA7GFaxYdu1l5ZR1Q7fTmMoRfEvT9zO7TmVY2%2B3fjqlJSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhfOhVpyQ7zfLB%2BzMKtwDVhaJ0Yp3Yaqel8OzDebY5SqnaD3CWOVTHpRcZSodApNzZkkANX7VlyU1ZDH%2BbYdRon4XOOq%2BugPKYHM9LYgwwP0WS7Dg2OZ%2BSf1QvtxvHNca3SjI5vNmecp6kX01XLbqrxSxJi%2F8sr7As%2BnEtXsCaXuUABapT79h6U5WSgnyNeO%2Boxf3dXHxZfHWhiFiAh7V0JH5GhZKcUzpo64hrEJ7kimzxt9BOmdH%2FmN%2FZ19DW2byw1gUkcHF5yKEb70UY2UsRepr2L8cg81G9Q8ico32PjE8Us5n1cN2mq2oDBLo%2FPf%2FeYiIEu1d7lkiIOg7Cdmi4%2B%2FpzTnDZoYX%2BpU8gvD1qC%2BmzykqakWXzlsbMudbJxuZZi086pKW1MrigoXZ7E%2Fum%2BxNX8%2FW%2Ft%2BPxN4EUav2QvKsQYmqmgSb1YPd4xWaHO9BJmAJAUyBcotl%2BlMFc6Ad3JiyTFEfhkmnV3BDdJilIX58VMFvjHRZXerQzh%2By5tzX9X%2BHhW7JLDK5Vfoo1w92cyYhuBlaFXNuIluLdUTAa9kn8YB5KPvttqA9sD5Y6rqNMKrPnQeYPVP5rLzPjaZFoxl1syKgp8gd3bx3mQm4mQ5D%2FogT3xXsieBYP5eIdC%2F%2F22cN0HhqmRwkFy4woo6JwAY6pgEwCucsT4yRYO9qwIA6JwWvjD8s3puXPONP1QIlMg4RwuXjQlSc3DPotlduqVm5u8qVMY4u1HAwXSL5NU03ZJ7ibXf4uMgtA8Ov5B99z5jT7jZ9ZqqAWpY3PhFrHz1gvscj0AtLcqZamwpbOstucrbc8zjdWm9W3Xbk0LXufTzw5LKP4Phfz80zjxg9szRMi3KFiqvEGtRfPruta4X36sPeh2ApV09P&X-Amz-Signature=5df4756820a49a7682d6bf71f237fdb4ef4648ea83ce3d96e3125e1befe4dbe7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOYHFRA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6mufc9UV80jmc52RDl07PyQE2gob1zeboy9QS%2F9XrhAiA7GFaxYdu1l5ZR1Q7fTmMoRfEvT9zO7TmVY2%2B3fjqlJSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhfOhVpyQ7zfLB%2BzMKtwDVhaJ0Yp3Yaqel8OzDebY5SqnaD3CWOVTHpRcZSodApNzZkkANX7VlyU1ZDH%2BbYdRon4XOOq%2BugPKYHM9LYgwwP0WS7Dg2OZ%2BSf1QvtxvHNca3SjI5vNmecp6kX01XLbqrxSxJi%2F8sr7As%2BnEtXsCaXuUABapT79h6U5WSgnyNeO%2Boxf3dXHxZfHWhiFiAh7V0JH5GhZKcUzpo64hrEJ7kimzxt9BOmdH%2FmN%2FZ19DW2byw1gUkcHF5yKEb70UY2UsRepr2L8cg81G9Q8ico32PjE8Us5n1cN2mq2oDBLo%2FPf%2FeYiIEu1d7lkiIOg7Cdmi4%2B%2FpzTnDZoYX%2BpU8gvD1qC%2BmzykqakWXzlsbMudbJxuZZi086pKW1MrigoXZ7E%2Fum%2BxNX8%2FW%2Ft%2BPxN4EUav2QvKsQYmqmgSb1YPd4xWaHO9BJmAJAUyBcotl%2BlMFc6Ad3JiyTFEfhkmnV3BDdJilIX58VMFvjHRZXerQzh%2By5tzX9X%2BHhW7JLDK5Vfoo1w92cyYhuBlaFXNuIluLdUTAa9kn8YB5KPvttqA9sD5Y6rqNMKrPnQeYPVP5rLzPjaZFoxl1syKgp8gd3bx3mQm4mQ5D%2FogT3xXsieBYP5eIdC%2F%2F22cN0HhqmRwkFy4woo6JwAY6pgEwCucsT4yRYO9qwIA6JwWvjD8s3puXPONP1QIlMg4RwuXjQlSc3DPotlduqVm5u8qVMY4u1HAwXSL5NU03ZJ7ibXf4uMgtA8Ov5B99z5jT7jZ9ZqqAWpY3PhFrHz1gvscj0AtLcqZamwpbOstucrbc8zjdWm9W3Xbk0LXufTzw5LKP4Phfz80zjxg9szRMi3KFiqvEGtRfPruta4X36sPeh2ApV09P&X-Amz-Signature=3122bad9b94f951d2c813502c1c6948f5d1a59b89d513296809df3fa67755384&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

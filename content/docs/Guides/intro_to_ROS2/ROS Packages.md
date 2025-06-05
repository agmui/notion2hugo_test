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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAD2LBP7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD4VcLUI1ksIcWWML2G2C%2FFMdlH6aZDvv%2Fbgddi2y1nRAIgEv3rU4EFRuPAHydwjNpfu%2BC25zvdmtgtI8VSpsC3%2F5Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCe3w6JEzUN4DS74AyrcA6mODk6C3E1W57QjC0biWxtJGEvTSTCwD5VbbmuivJYuxsal%2FCsHcd4npbQcFplEaj0LSMpvIJRUFoxcAhsUI%2F2O6TZwvj2N3k%2BjMvYTH8V70zVRgMT5gqBVNbLiNDMorGGqZ%2FEiHco%2BcA4x2Q9bEDCHR94T29OVduliQKd74i%2Bl3Rf35K40CVAAT4EOW7wL%2B4doJxryR5N%2FS40MEczN5IWVJAjNXDmveVphVMhNH%2BdqeqfItBk8554Uj2jOHl%2BEjyP6r5CQFMVo4xMjGUHsgGcokn1buqGzcWwdz21DXC29lYfiOwEjgfuyOjuVGO%2FkB6ynwhSN4%2FOVZyyojSogcEAyR6GRDQNU8lKlpkAHeIaZvyUzwsmC7RAdZihwuTFaZwh%2F9wDk%2BMlLnNq8rwecQSolg64kBnBNrJ%2B%2FGYC1BvfAjk2XiNel52mrM81tT90goSYRDU2lMXYuXEbgkGoR7sxJHVTHjcI0NspESlVVuOmijJrE2VVqlHalBqHZXFrEnHBoSIefvptKGQk3nO4%2FCiu4UhIeVnPAi6Nr8dUYSle%2B6NLTzt36t72QwlI%2F%2BLmRZjR7De5hsjyPXw2uFZ4sMoBqGZnHpIvy5jUX0IjLiAxy1aWXmOXeA9WHNX19MLeJhMIGOqUB8HxdM3ZwjcUhlXX6IQhB%2FtHp35TOVM8n1VPZdOU8ty%2BnnWUFvq5GVVVS8w4uVTmQZRcKG9zFWIkN1tDnltoGfZlmzOXtoC1m0ducmEgqw3BqGmwvVx10WhguIVwLy%2Fs6zrXbz0ue%2BYJy80q5i7wxehBg90hspz2%2FJ3qo4hxC9GaFIiPm1FITXvLx3sdQmUBrhlm2aPYblQdzkwq9WgSDfFc%2B%2BEJs&X-Amz-Signature=b684cee090ef0a2ac02b9bffe781a7c32541c065cc2c58f17767b51297d4b3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAD2LBP7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD4VcLUI1ksIcWWML2G2C%2FFMdlH6aZDvv%2Fbgddi2y1nRAIgEv3rU4EFRuPAHydwjNpfu%2BC25zvdmtgtI8VSpsC3%2F5Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCe3w6JEzUN4DS74AyrcA6mODk6C3E1W57QjC0biWxtJGEvTSTCwD5VbbmuivJYuxsal%2FCsHcd4npbQcFplEaj0LSMpvIJRUFoxcAhsUI%2F2O6TZwvj2N3k%2BjMvYTH8V70zVRgMT5gqBVNbLiNDMorGGqZ%2FEiHco%2BcA4x2Q9bEDCHR94T29OVduliQKd74i%2Bl3Rf35K40CVAAT4EOW7wL%2B4doJxryR5N%2FS40MEczN5IWVJAjNXDmveVphVMhNH%2BdqeqfItBk8554Uj2jOHl%2BEjyP6r5CQFMVo4xMjGUHsgGcokn1buqGzcWwdz21DXC29lYfiOwEjgfuyOjuVGO%2FkB6ynwhSN4%2FOVZyyojSogcEAyR6GRDQNU8lKlpkAHeIaZvyUzwsmC7RAdZihwuTFaZwh%2F9wDk%2BMlLnNq8rwecQSolg64kBnBNrJ%2B%2FGYC1BvfAjk2XiNel52mrM81tT90goSYRDU2lMXYuXEbgkGoR7sxJHVTHjcI0NspESlVVuOmijJrE2VVqlHalBqHZXFrEnHBoSIefvptKGQk3nO4%2FCiu4UhIeVnPAi6Nr8dUYSle%2B6NLTzt36t72QwlI%2F%2BLmRZjR7De5hsjyPXw2uFZ4sMoBqGZnHpIvy5jUX0IjLiAxy1aWXmOXeA9WHNX19MLeJhMIGOqUB8HxdM3ZwjcUhlXX6IQhB%2FtHp35TOVM8n1VPZdOU8ty%2BnnWUFvq5GVVVS8w4uVTmQZRcKG9zFWIkN1tDnltoGfZlmzOXtoC1m0ducmEgqw3BqGmwvVx10WhguIVwLy%2Fs6zrXbz0ue%2BYJy80q5i7wxehBg90hspz2%2FJ3qo4hxC9GaFIiPm1FITXvLx3sdQmUBrhlm2aPYblQdzkwq9WgSDfFc%2B%2BEJs&X-Amz-Signature=3947d34e797c6d7aa4430f0b4d776921c9d4ec64c0e130876046e99997fd2c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAD2LBP7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD4VcLUI1ksIcWWML2G2C%2FFMdlH6aZDvv%2Fbgddi2y1nRAIgEv3rU4EFRuPAHydwjNpfu%2BC25zvdmtgtI8VSpsC3%2F5Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCe3w6JEzUN4DS74AyrcA6mODk6C3E1W57QjC0biWxtJGEvTSTCwD5VbbmuivJYuxsal%2FCsHcd4npbQcFplEaj0LSMpvIJRUFoxcAhsUI%2F2O6TZwvj2N3k%2BjMvYTH8V70zVRgMT5gqBVNbLiNDMorGGqZ%2FEiHco%2BcA4x2Q9bEDCHR94T29OVduliQKd74i%2Bl3Rf35K40CVAAT4EOW7wL%2B4doJxryR5N%2FS40MEczN5IWVJAjNXDmveVphVMhNH%2BdqeqfItBk8554Uj2jOHl%2BEjyP6r5CQFMVo4xMjGUHsgGcokn1buqGzcWwdz21DXC29lYfiOwEjgfuyOjuVGO%2FkB6ynwhSN4%2FOVZyyojSogcEAyR6GRDQNU8lKlpkAHeIaZvyUzwsmC7RAdZihwuTFaZwh%2F9wDk%2BMlLnNq8rwecQSolg64kBnBNrJ%2B%2FGYC1BvfAjk2XiNel52mrM81tT90goSYRDU2lMXYuXEbgkGoR7sxJHVTHjcI0NspESlVVuOmijJrE2VVqlHalBqHZXFrEnHBoSIefvptKGQk3nO4%2FCiu4UhIeVnPAi6Nr8dUYSle%2B6NLTzt36t72QwlI%2F%2BLmRZjR7De5hsjyPXw2uFZ4sMoBqGZnHpIvy5jUX0IjLiAxy1aWXmOXeA9WHNX19MLeJhMIGOqUB8HxdM3ZwjcUhlXX6IQhB%2FtHp35TOVM8n1VPZdOU8ty%2BnnWUFvq5GVVVS8w4uVTmQZRcKG9zFWIkN1tDnltoGfZlmzOXtoC1m0ducmEgqw3BqGmwvVx10WhguIVwLy%2Fs6zrXbz0ue%2BYJy80q5i7wxehBg90hspz2%2FJ3qo4hxC9GaFIiPm1FITXvLx3sdQmUBrhlm2aPYblQdzkwq9WgSDfFc%2B%2BEJs&X-Amz-Signature=4a76390b0f5167045a4bc688fb6d65656d085ab0926d8bde8c0c0177263fa4a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAD2LBP7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD4VcLUI1ksIcWWML2G2C%2FFMdlH6aZDvv%2Fbgddi2y1nRAIgEv3rU4EFRuPAHydwjNpfu%2BC25zvdmtgtI8VSpsC3%2F5Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCe3w6JEzUN4DS74AyrcA6mODk6C3E1W57QjC0biWxtJGEvTSTCwD5VbbmuivJYuxsal%2FCsHcd4npbQcFplEaj0LSMpvIJRUFoxcAhsUI%2F2O6TZwvj2N3k%2BjMvYTH8V70zVRgMT5gqBVNbLiNDMorGGqZ%2FEiHco%2BcA4x2Q9bEDCHR94T29OVduliQKd74i%2Bl3Rf35K40CVAAT4EOW7wL%2B4doJxryR5N%2FS40MEczN5IWVJAjNXDmveVphVMhNH%2BdqeqfItBk8554Uj2jOHl%2BEjyP6r5CQFMVo4xMjGUHsgGcokn1buqGzcWwdz21DXC29lYfiOwEjgfuyOjuVGO%2FkB6ynwhSN4%2FOVZyyojSogcEAyR6GRDQNU8lKlpkAHeIaZvyUzwsmC7RAdZihwuTFaZwh%2F9wDk%2BMlLnNq8rwecQSolg64kBnBNrJ%2B%2FGYC1BvfAjk2XiNel52mrM81tT90goSYRDU2lMXYuXEbgkGoR7sxJHVTHjcI0NspESlVVuOmijJrE2VVqlHalBqHZXFrEnHBoSIefvptKGQk3nO4%2FCiu4UhIeVnPAi6Nr8dUYSle%2B6NLTzt36t72QwlI%2F%2BLmRZjR7De5hsjyPXw2uFZ4sMoBqGZnHpIvy5jUX0IjLiAxy1aWXmOXeA9WHNX19MLeJhMIGOqUB8HxdM3ZwjcUhlXX6IQhB%2FtHp35TOVM8n1VPZdOU8ty%2BnnWUFvq5GVVVS8w4uVTmQZRcKG9zFWIkN1tDnltoGfZlmzOXtoC1m0ducmEgqw3BqGmwvVx10WhguIVwLy%2Fs6zrXbz0ue%2BYJy80q5i7wxehBg90hspz2%2FJ3qo4hxC9GaFIiPm1FITXvLx3sdQmUBrhlm2aPYblQdzkwq9WgSDfFc%2B%2BEJs&X-Amz-Signature=d32e8e2b9c5d0de4c156dcc6f3cf058057b35b018a980dd0af7f3682a4c75477&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAD2LBP7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD4VcLUI1ksIcWWML2G2C%2FFMdlH6aZDvv%2Fbgddi2y1nRAIgEv3rU4EFRuPAHydwjNpfu%2BC25zvdmtgtI8VSpsC3%2F5Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCe3w6JEzUN4DS74AyrcA6mODk6C3E1W57QjC0biWxtJGEvTSTCwD5VbbmuivJYuxsal%2FCsHcd4npbQcFplEaj0LSMpvIJRUFoxcAhsUI%2F2O6TZwvj2N3k%2BjMvYTH8V70zVRgMT5gqBVNbLiNDMorGGqZ%2FEiHco%2BcA4x2Q9bEDCHR94T29OVduliQKd74i%2Bl3Rf35K40CVAAT4EOW7wL%2B4doJxryR5N%2FS40MEczN5IWVJAjNXDmveVphVMhNH%2BdqeqfItBk8554Uj2jOHl%2BEjyP6r5CQFMVo4xMjGUHsgGcokn1buqGzcWwdz21DXC29lYfiOwEjgfuyOjuVGO%2FkB6ynwhSN4%2FOVZyyojSogcEAyR6GRDQNU8lKlpkAHeIaZvyUzwsmC7RAdZihwuTFaZwh%2F9wDk%2BMlLnNq8rwecQSolg64kBnBNrJ%2B%2FGYC1BvfAjk2XiNel52mrM81tT90goSYRDU2lMXYuXEbgkGoR7sxJHVTHjcI0NspESlVVuOmijJrE2VVqlHalBqHZXFrEnHBoSIefvptKGQk3nO4%2FCiu4UhIeVnPAi6Nr8dUYSle%2B6NLTzt36t72QwlI%2F%2BLmRZjR7De5hsjyPXw2uFZ4sMoBqGZnHpIvy5jUX0IjLiAxy1aWXmOXeA9WHNX19MLeJhMIGOqUB8HxdM3ZwjcUhlXX6IQhB%2FtHp35TOVM8n1VPZdOU8ty%2BnnWUFvq5GVVVS8w4uVTmQZRcKG9zFWIkN1tDnltoGfZlmzOXtoC1m0ducmEgqw3BqGmwvVx10WhguIVwLy%2Fs6zrXbz0ue%2BYJy80q5i7wxehBg90hspz2%2FJ3qo4hxC9GaFIiPm1FITXvLx3sdQmUBrhlm2aPYblQdzkwq9WgSDfFc%2B%2BEJs&X-Amz-Signature=077ca09b9ae49249896184055ea7e27cbc04f936cec2ef93769b3749e088ade1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAD2LBP7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD4VcLUI1ksIcWWML2G2C%2FFMdlH6aZDvv%2Fbgddi2y1nRAIgEv3rU4EFRuPAHydwjNpfu%2BC25zvdmtgtI8VSpsC3%2F5Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCe3w6JEzUN4DS74AyrcA6mODk6C3E1W57QjC0biWxtJGEvTSTCwD5VbbmuivJYuxsal%2FCsHcd4npbQcFplEaj0LSMpvIJRUFoxcAhsUI%2F2O6TZwvj2N3k%2BjMvYTH8V70zVRgMT5gqBVNbLiNDMorGGqZ%2FEiHco%2BcA4x2Q9bEDCHR94T29OVduliQKd74i%2Bl3Rf35K40CVAAT4EOW7wL%2B4doJxryR5N%2FS40MEczN5IWVJAjNXDmveVphVMhNH%2BdqeqfItBk8554Uj2jOHl%2BEjyP6r5CQFMVo4xMjGUHsgGcokn1buqGzcWwdz21DXC29lYfiOwEjgfuyOjuVGO%2FkB6ynwhSN4%2FOVZyyojSogcEAyR6GRDQNU8lKlpkAHeIaZvyUzwsmC7RAdZihwuTFaZwh%2F9wDk%2BMlLnNq8rwecQSolg64kBnBNrJ%2B%2FGYC1BvfAjk2XiNel52mrM81tT90goSYRDU2lMXYuXEbgkGoR7sxJHVTHjcI0NspESlVVuOmijJrE2VVqlHalBqHZXFrEnHBoSIefvptKGQk3nO4%2FCiu4UhIeVnPAi6Nr8dUYSle%2B6NLTzt36t72QwlI%2F%2BLmRZjR7De5hsjyPXw2uFZ4sMoBqGZnHpIvy5jUX0IjLiAxy1aWXmOXeA9WHNX19MLeJhMIGOqUB8HxdM3ZwjcUhlXX6IQhB%2FtHp35TOVM8n1VPZdOU8ty%2BnnWUFvq5GVVVS8w4uVTmQZRcKG9zFWIkN1tDnltoGfZlmzOXtoC1m0ducmEgqw3BqGmwvVx10WhguIVwLy%2Fs6zrXbz0ue%2BYJy80q5i7wxehBg90hspz2%2FJ3qo4hxC9GaFIiPm1FITXvLx3sdQmUBrhlm2aPYblQdzkwq9WgSDfFc%2B%2BEJs&X-Amz-Signature=46a9982d505557784ea93c5529e3608442c6902bcb2a32c2a2c0bb5b7a3bc802&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAD2LBP7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD4VcLUI1ksIcWWML2G2C%2FFMdlH6aZDvv%2Fbgddi2y1nRAIgEv3rU4EFRuPAHydwjNpfu%2BC25zvdmtgtI8VSpsC3%2F5Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCe3w6JEzUN4DS74AyrcA6mODk6C3E1W57QjC0biWxtJGEvTSTCwD5VbbmuivJYuxsal%2FCsHcd4npbQcFplEaj0LSMpvIJRUFoxcAhsUI%2F2O6TZwvj2N3k%2BjMvYTH8V70zVRgMT5gqBVNbLiNDMorGGqZ%2FEiHco%2BcA4x2Q9bEDCHR94T29OVduliQKd74i%2Bl3Rf35K40CVAAT4EOW7wL%2B4doJxryR5N%2FS40MEczN5IWVJAjNXDmveVphVMhNH%2BdqeqfItBk8554Uj2jOHl%2BEjyP6r5CQFMVo4xMjGUHsgGcokn1buqGzcWwdz21DXC29lYfiOwEjgfuyOjuVGO%2FkB6ynwhSN4%2FOVZyyojSogcEAyR6GRDQNU8lKlpkAHeIaZvyUzwsmC7RAdZihwuTFaZwh%2F9wDk%2BMlLnNq8rwecQSolg64kBnBNrJ%2B%2FGYC1BvfAjk2XiNel52mrM81tT90goSYRDU2lMXYuXEbgkGoR7sxJHVTHjcI0NspESlVVuOmijJrE2VVqlHalBqHZXFrEnHBoSIefvptKGQk3nO4%2FCiu4UhIeVnPAi6Nr8dUYSle%2B6NLTzt36t72QwlI%2F%2BLmRZjR7De5hsjyPXw2uFZ4sMoBqGZnHpIvy5jUX0IjLiAxy1aWXmOXeA9WHNX19MLeJhMIGOqUB8HxdM3ZwjcUhlXX6IQhB%2FtHp35TOVM8n1VPZdOU8ty%2BnnWUFvq5GVVVS8w4uVTmQZRcKG9zFWIkN1tDnltoGfZlmzOXtoC1m0ducmEgqw3BqGmwvVx10WhguIVwLy%2Fs6zrXbz0ue%2BYJy80q5i7wxehBg90hspz2%2FJ3qo4hxC9GaFIiPm1FITXvLx3sdQmUBrhlm2aPYblQdzkwq9WgSDfFc%2B%2BEJs&X-Amz-Signature=89bd2a360c1a3681d4268e854aa31064308fe7d1a9625bc978d2dc48092f3ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

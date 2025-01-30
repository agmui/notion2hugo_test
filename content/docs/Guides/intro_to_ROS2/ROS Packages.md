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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZDJ67S%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq7hCg1lmBLAPUKXtCOswk1liIkKuAtJKxO%2FwSYMaUJAiEA2I3frpnv5xNe5xWG1d3GJi7Dst2ku0w4nM4w2C%2FqZWAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FYgZ9UsxTCDFfKxSrcAyQfXiFAj1r486OBnzoOY8x79%2BEatjPKl%2BqXKcZLiQdYQ13KtHvFFCuCu4dcE6XprDPVxU02uuP5f8F5JhGYjNX%2Bz613CdUOAjwAzMwk7YqxCo4mowIyf9RNbiH0K1HIvdZYZDXx9gmWB7x0EiyEh7YEcni%2B1WiJguAWXVZPAr15pjTa2dYUjUsI7yiJAvNjs9lA7c%2FENWbdcbLbjI9U9aMqImsQGC4igguA0e4aCGdJCy3HL48zzLfY8xrSpIDc%2BPiVk9uPxVllu1VSTN57zLX0DMaussuoJtNmr7uFo4figJPOeYsOljJis3LPJS8pwbHCdPyynbu4D0KFxIoE7RM9oiqTSkCo3xIWTm09d%2BMHpmWqxdJTNuslTa0q2GjuoH8PWuJjJZEvyrYd0nss6fw87ynCSqh2h2tI1IrCzrOzmhRCQCaSw85zGvUVEkEf2uPmV7A%2BoYI6%2FR1fPCALug%2BDjsVKHdAr3YWpo6BbcaoiYhPfDCPVHB82KJ2hkJQoYJRIj1icg8CwAhN%2BsJ4nsg0p8xCOZHDnOU2AMpOz%2FPFpYTuEG%2B2lkaPxqFnQDW8d1G0SoNkXDblNxIhuY%2Bv0PB5TyNo1tUETuFexpQd0MSQucJN9OI%2Bj8TBbiNDnMOqM7bwGOqUBzHVJe5Y0SUK1Ydbwgs5HmkLZTl7v9MTHdrn1rfhEMoVxI4vB%2BtQeEMih5bNHQodmiHGyBX9ZBEsMHDqLP%2BQ4sFGngTR%2BLIuS6a%2BJM%2FRbo7BkBg9ZqYv190loNtXqKxyKMCx%2FLgZ%2BopRaLm73XMk4odJjL9g2fJdPXnf9uWY%2BM%2B%2B0kLB3PqiCWdXZE8o0yFy8ctt9tcOPhaPFcJMJj9BFdCtbltrX&X-Amz-Signature=ea4fdbb31f7536efaf4e094da842ac1851d46bce8c95c2e8ab933094ec8465a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZDJ67S%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq7hCg1lmBLAPUKXtCOswk1liIkKuAtJKxO%2FwSYMaUJAiEA2I3frpnv5xNe5xWG1d3GJi7Dst2ku0w4nM4w2C%2FqZWAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FYgZ9UsxTCDFfKxSrcAyQfXiFAj1r486OBnzoOY8x79%2BEatjPKl%2BqXKcZLiQdYQ13KtHvFFCuCu4dcE6XprDPVxU02uuP5f8F5JhGYjNX%2Bz613CdUOAjwAzMwk7YqxCo4mowIyf9RNbiH0K1HIvdZYZDXx9gmWB7x0EiyEh7YEcni%2B1WiJguAWXVZPAr15pjTa2dYUjUsI7yiJAvNjs9lA7c%2FENWbdcbLbjI9U9aMqImsQGC4igguA0e4aCGdJCy3HL48zzLfY8xrSpIDc%2BPiVk9uPxVllu1VSTN57zLX0DMaussuoJtNmr7uFo4figJPOeYsOljJis3LPJS8pwbHCdPyynbu4D0KFxIoE7RM9oiqTSkCo3xIWTm09d%2BMHpmWqxdJTNuslTa0q2GjuoH8PWuJjJZEvyrYd0nss6fw87ynCSqh2h2tI1IrCzrOzmhRCQCaSw85zGvUVEkEf2uPmV7A%2BoYI6%2FR1fPCALug%2BDjsVKHdAr3YWpo6BbcaoiYhPfDCPVHB82KJ2hkJQoYJRIj1icg8CwAhN%2BsJ4nsg0p8xCOZHDnOU2AMpOz%2FPFpYTuEG%2B2lkaPxqFnQDW8d1G0SoNkXDblNxIhuY%2Bv0PB5TyNo1tUETuFexpQd0MSQucJN9OI%2Bj8TBbiNDnMOqM7bwGOqUBzHVJe5Y0SUK1Ydbwgs5HmkLZTl7v9MTHdrn1rfhEMoVxI4vB%2BtQeEMih5bNHQodmiHGyBX9ZBEsMHDqLP%2BQ4sFGngTR%2BLIuS6a%2BJM%2FRbo7BkBg9ZqYv190loNtXqKxyKMCx%2FLgZ%2BopRaLm73XMk4odJjL9g2fJdPXnf9uWY%2BM%2B%2B0kLB3PqiCWdXZE8o0yFy8ctt9tcOPhaPFcJMJj9BFdCtbltrX&X-Amz-Signature=142e71e1ce092a5dcdfd80b4cf17a312b79facab1c47befa6a5ab1cec1c68208&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZDJ67S%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq7hCg1lmBLAPUKXtCOswk1liIkKuAtJKxO%2FwSYMaUJAiEA2I3frpnv5xNe5xWG1d3GJi7Dst2ku0w4nM4w2C%2FqZWAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FYgZ9UsxTCDFfKxSrcAyQfXiFAj1r486OBnzoOY8x79%2BEatjPKl%2BqXKcZLiQdYQ13KtHvFFCuCu4dcE6XprDPVxU02uuP5f8F5JhGYjNX%2Bz613CdUOAjwAzMwk7YqxCo4mowIyf9RNbiH0K1HIvdZYZDXx9gmWB7x0EiyEh7YEcni%2B1WiJguAWXVZPAr15pjTa2dYUjUsI7yiJAvNjs9lA7c%2FENWbdcbLbjI9U9aMqImsQGC4igguA0e4aCGdJCy3HL48zzLfY8xrSpIDc%2BPiVk9uPxVllu1VSTN57zLX0DMaussuoJtNmr7uFo4figJPOeYsOljJis3LPJS8pwbHCdPyynbu4D0KFxIoE7RM9oiqTSkCo3xIWTm09d%2BMHpmWqxdJTNuslTa0q2GjuoH8PWuJjJZEvyrYd0nss6fw87ynCSqh2h2tI1IrCzrOzmhRCQCaSw85zGvUVEkEf2uPmV7A%2BoYI6%2FR1fPCALug%2BDjsVKHdAr3YWpo6BbcaoiYhPfDCPVHB82KJ2hkJQoYJRIj1icg8CwAhN%2BsJ4nsg0p8xCOZHDnOU2AMpOz%2FPFpYTuEG%2B2lkaPxqFnQDW8d1G0SoNkXDblNxIhuY%2Bv0PB5TyNo1tUETuFexpQd0MSQucJN9OI%2Bj8TBbiNDnMOqM7bwGOqUBzHVJe5Y0SUK1Ydbwgs5HmkLZTl7v9MTHdrn1rfhEMoVxI4vB%2BtQeEMih5bNHQodmiHGyBX9ZBEsMHDqLP%2BQ4sFGngTR%2BLIuS6a%2BJM%2FRbo7BkBg9ZqYv190loNtXqKxyKMCx%2FLgZ%2BopRaLm73XMk4odJjL9g2fJdPXnf9uWY%2BM%2B%2B0kLB3PqiCWdXZE8o0yFy8ctt9tcOPhaPFcJMJj9BFdCtbltrX&X-Amz-Signature=b85b03e50f5d5bfda731417b50fab36fac0104307227bfb3f4a336484ef95e72&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZDJ67S%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq7hCg1lmBLAPUKXtCOswk1liIkKuAtJKxO%2FwSYMaUJAiEA2I3frpnv5xNe5xWG1d3GJi7Dst2ku0w4nM4w2C%2FqZWAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FYgZ9UsxTCDFfKxSrcAyQfXiFAj1r486OBnzoOY8x79%2BEatjPKl%2BqXKcZLiQdYQ13KtHvFFCuCu4dcE6XprDPVxU02uuP5f8F5JhGYjNX%2Bz613CdUOAjwAzMwk7YqxCo4mowIyf9RNbiH0K1HIvdZYZDXx9gmWB7x0EiyEh7YEcni%2B1WiJguAWXVZPAr15pjTa2dYUjUsI7yiJAvNjs9lA7c%2FENWbdcbLbjI9U9aMqImsQGC4igguA0e4aCGdJCy3HL48zzLfY8xrSpIDc%2BPiVk9uPxVllu1VSTN57zLX0DMaussuoJtNmr7uFo4figJPOeYsOljJis3LPJS8pwbHCdPyynbu4D0KFxIoE7RM9oiqTSkCo3xIWTm09d%2BMHpmWqxdJTNuslTa0q2GjuoH8PWuJjJZEvyrYd0nss6fw87ynCSqh2h2tI1IrCzrOzmhRCQCaSw85zGvUVEkEf2uPmV7A%2BoYI6%2FR1fPCALug%2BDjsVKHdAr3YWpo6BbcaoiYhPfDCPVHB82KJ2hkJQoYJRIj1icg8CwAhN%2BsJ4nsg0p8xCOZHDnOU2AMpOz%2FPFpYTuEG%2B2lkaPxqFnQDW8d1G0SoNkXDblNxIhuY%2Bv0PB5TyNo1tUETuFexpQd0MSQucJN9OI%2Bj8TBbiNDnMOqM7bwGOqUBzHVJe5Y0SUK1Ydbwgs5HmkLZTl7v9MTHdrn1rfhEMoVxI4vB%2BtQeEMih5bNHQodmiHGyBX9ZBEsMHDqLP%2BQ4sFGngTR%2BLIuS6a%2BJM%2FRbo7BkBg9ZqYv190loNtXqKxyKMCx%2FLgZ%2BopRaLm73XMk4odJjL9g2fJdPXnf9uWY%2BM%2B%2B0kLB3PqiCWdXZE8o0yFy8ctt9tcOPhaPFcJMJj9BFdCtbltrX&X-Amz-Signature=86d7189f2ed5cf4d034ad37a02ad7aed1676303ee891f2171bea93599e971464&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZDJ67S%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq7hCg1lmBLAPUKXtCOswk1liIkKuAtJKxO%2FwSYMaUJAiEA2I3frpnv5xNe5xWG1d3GJi7Dst2ku0w4nM4w2C%2FqZWAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FYgZ9UsxTCDFfKxSrcAyQfXiFAj1r486OBnzoOY8x79%2BEatjPKl%2BqXKcZLiQdYQ13KtHvFFCuCu4dcE6XprDPVxU02uuP5f8F5JhGYjNX%2Bz613CdUOAjwAzMwk7YqxCo4mowIyf9RNbiH0K1HIvdZYZDXx9gmWB7x0EiyEh7YEcni%2B1WiJguAWXVZPAr15pjTa2dYUjUsI7yiJAvNjs9lA7c%2FENWbdcbLbjI9U9aMqImsQGC4igguA0e4aCGdJCy3HL48zzLfY8xrSpIDc%2BPiVk9uPxVllu1VSTN57zLX0DMaussuoJtNmr7uFo4figJPOeYsOljJis3LPJS8pwbHCdPyynbu4D0KFxIoE7RM9oiqTSkCo3xIWTm09d%2BMHpmWqxdJTNuslTa0q2GjuoH8PWuJjJZEvyrYd0nss6fw87ynCSqh2h2tI1IrCzrOzmhRCQCaSw85zGvUVEkEf2uPmV7A%2BoYI6%2FR1fPCALug%2BDjsVKHdAr3YWpo6BbcaoiYhPfDCPVHB82KJ2hkJQoYJRIj1icg8CwAhN%2BsJ4nsg0p8xCOZHDnOU2AMpOz%2FPFpYTuEG%2B2lkaPxqFnQDW8d1G0SoNkXDblNxIhuY%2Bv0PB5TyNo1tUETuFexpQd0MSQucJN9OI%2Bj8TBbiNDnMOqM7bwGOqUBzHVJe5Y0SUK1Ydbwgs5HmkLZTl7v9MTHdrn1rfhEMoVxI4vB%2BtQeEMih5bNHQodmiHGyBX9ZBEsMHDqLP%2BQ4sFGngTR%2BLIuS6a%2BJM%2FRbo7BkBg9ZqYv190loNtXqKxyKMCx%2FLgZ%2BopRaLm73XMk4odJjL9g2fJdPXnf9uWY%2BM%2B%2B0kLB3PqiCWdXZE8o0yFy8ctt9tcOPhaPFcJMJj9BFdCtbltrX&X-Amz-Signature=795af78d10964640a090a1d60a353a1e469072084e2a44ae189ca4ac46d5d0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZDJ67S%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq7hCg1lmBLAPUKXtCOswk1liIkKuAtJKxO%2FwSYMaUJAiEA2I3frpnv5xNe5xWG1d3GJi7Dst2ku0w4nM4w2C%2FqZWAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FYgZ9UsxTCDFfKxSrcAyQfXiFAj1r486OBnzoOY8x79%2BEatjPKl%2BqXKcZLiQdYQ13KtHvFFCuCu4dcE6XprDPVxU02uuP5f8F5JhGYjNX%2Bz613CdUOAjwAzMwk7YqxCo4mowIyf9RNbiH0K1HIvdZYZDXx9gmWB7x0EiyEh7YEcni%2B1WiJguAWXVZPAr15pjTa2dYUjUsI7yiJAvNjs9lA7c%2FENWbdcbLbjI9U9aMqImsQGC4igguA0e4aCGdJCy3HL48zzLfY8xrSpIDc%2BPiVk9uPxVllu1VSTN57zLX0DMaussuoJtNmr7uFo4figJPOeYsOljJis3LPJS8pwbHCdPyynbu4D0KFxIoE7RM9oiqTSkCo3xIWTm09d%2BMHpmWqxdJTNuslTa0q2GjuoH8PWuJjJZEvyrYd0nss6fw87ynCSqh2h2tI1IrCzrOzmhRCQCaSw85zGvUVEkEf2uPmV7A%2BoYI6%2FR1fPCALug%2BDjsVKHdAr3YWpo6BbcaoiYhPfDCPVHB82KJ2hkJQoYJRIj1icg8CwAhN%2BsJ4nsg0p8xCOZHDnOU2AMpOz%2FPFpYTuEG%2B2lkaPxqFnQDW8d1G0SoNkXDblNxIhuY%2Bv0PB5TyNo1tUETuFexpQd0MSQucJN9OI%2Bj8TBbiNDnMOqM7bwGOqUBzHVJe5Y0SUK1Ydbwgs5HmkLZTl7v9MTHdrn1rfhEMoVxI4vB%2BtQeEMih5bNHQodmiHGyBX9ZBEsMHDqLP%2BQ4sFGngTR%2BLIuS6a%2BJM%2FRbo7BkBg9ZqYv190loNtXqKxyKMCx%2FLgZ%2BopRaLm73XMk4odJjL9g2fJdPXnf9uWY%2BM%2B%2B0kLB3PqiCWdXZE8o0yFy8ctt9tcOPhaPFcJMJj9BFdCtbltrX&X-Amz-Signature=5ff31956ad26d892bef7a23c5d6eaf50d000238ba0a5f21248f9f2600d771135&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZDJ67S%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq7hCg1lmBLAPUKXtCOswk1liIkKuAtJKxO%2FwSYMaUJAiEA2I3frpnv5xNe5xWG1d3GJi7Dst2ku0w4nM4w2C%2FqZWAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FYgZ9UsxTCDFfKxSrcAyQfXiFAj1r486OBnzoOY8x79%2BEatjPKl%2BqXKcZLiQdYQ13KtHvFFCuCu4dcE6XprDPVxU02uuP5f8F5JhGYjNX%2Bz613CdUOAjwAzMwk7YqxCo4mowIyf9RNbiH0K1HIvdZYZDXx9gmWB7x0EiyEh7YEcni%2B1WiJguAWXVZPAr15pjTa2dYUjUsI7yiJAvNjs9lA7c%2FENWbdcbLbjI9U9aMqImsQGC4igguA0e4aCGdJCy3HL48zzLfY8xrSpIDc%2BPiVk9uPxVllu1VSTN57zLX0DMaussuoJtNmr7uFo4figJPOeYsOljJis3LPJS8pwbHCdPyynbu4D0KFxIoE7RM9oiqTSkCo3xIWTm09d%2BMHpmWqxdJTNuslTa0q2GjuoH8PWuJjJZEvyrYd0nss6fw87ynCSqh2h2tI1IrCzrOzmhRCQCaSw85zGvUVEkEf2uPmV7A%2BoYI6%2FR1fPCALug%2BDjsVKHdAr3YWpo6BbcaoiYhPfDCPVHB82KJ2hkJQoYJRIj1icg8CwAhN%2BsJ4nsg0p8xCOZHDnOU2AMpOz%2FPFpYTuEG%2B2lkaPxqFnQDW8d1G0SoNkXDblNxIhuY%2Bv0PB5TyNo1tUETuFexpQd0MSQucJN9OI%2Bj8TBbiNDnMOqM7bwGOqUBzHVJe5Y0SUK1Ydbwgs5HmkLZTl7v9MTHdrn1rfhEMoVxI4vB%2BtQeEMih5bNHQodmiHGyBX9ZBEsMHDqLP%2BQ4sFGngTR%2BLIuS6a%2BJM%2FRbo7BkBg9ZqYv190loNtXqKxyKMCx%2FLgZ%2BopRaLm73XMk4odJjL9g2fJdPXnf9uWY%2BM%2B%2B0kLB3PqiCWdXZE8o0yFy8ctt9tcOPhaPFcJMJj9BFdCtbltrX&X-Amz-Signature=18e4dbd1650df825eb4c57de97283f5944fc4e9d5ce40b9cf37f450c075f596a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

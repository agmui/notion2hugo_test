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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDVCSNX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJtm8F5K8jERyqPTU7vPQkxWFF%2F%2FSPkSa21y16%2FVB0mAiEA6PzoBe%2BqIo7H2LaPdzutjDpJ3Gs%2FsgFRd1fIMlvbSkYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLb9Fe%2B5%2Fn8in96OSrcA7RGZh6eqwLnKucQUEzEk%2BJqyDnSKO6MidgzxNc4StX4J8aQBWlK2ZxHlsCo1iaBAZmmIaEnOtkezY0%2BSBRhmTsgMn0%2BA1HmKT6UOgkCyEc0aJ4YapDWo6Dg9e26DVWIzHd%2BvGxeE94beArmzz0j4Ft7gt%2BsfpZQ4NC8RDtbD3Iegp4nGZnop4DrqiAxggloYjIOG%2Bcxftd18CZwFXX%2BuMdCH0Py8QpaUNejc4sDWFVXy%2BIFzwgaBvH4SKcsUi6Ao8YcpGT7KnYB36dS115CvVZuNem0U232U4Gj5BqmbZY6Q5kVp5XDT7R7hofgYMPiOaCicmlTCthoNMH3kcdQAQX5ZkyY30Chh75oMFrddbO3GsqBLVIEQ0TISVJWwT2ICgvQnGUpRwx%2BxPt%2BtW962gR75%2BFsgDOx%2Bh2KCvAGErvrTyDU%2Bv74Vkw3qWKtBaaT2FBBlp1bg3vJ%2BrMlapQg4EjYiDmNkh0Kv1CaY7VNv2VCQR4MD2W7cn7HIr11eKclMxNnk2EfuROrjNPVcRfshT%2BZVvk8L2LYce%2BWt2JbhSFWQoOz%2B%2FoDPe0UbPy9krtoDbVCnNXYuxH6cnWrghwuihnlRqF%2FJouPHiYaMk16e%2FlLVfPyvSL2OJb8MRFAMOqPsb0GOqUBC7%2B9ppOI6vQ21jHRs%2F8sACw2GtZGoyyilzlu9terk%2BExXLUoJq1Ftp1Cd1eTOUW5AUz39%2FKLkNJF8TJFt4oJsiaTGqpOddSwPcccMPrqBpRP1tu7W6JlgzR%2FV8acXYa07HIe2LJmNdhbM1vQafsd7AtExD6UOEpfzGdfT1yd8RG%2BR320jahsp6OYBAByJ2LxwNsdpBf5OWcsmWI8O%2BWBtEJUvR9H&X-Amz-Signature=895186c92294d4e0a3481d779a17bb28a15c217680af47f99d01e78a8f6d19da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDVCSNX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJtm8F5K8jERyqPTU7vPQkxWFF%2F%2FSPkSa21y16%2FVB0mAiEA6PzoBe%2BqIo7H2LaPdzutjDpJ3Gs%2FsgFRd1fIMlvbSkYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLb9Fe%2B5%2Fn8in96OSrcA7RGZh6eqwLnKucQUEzEk%2BJqyDnSKO6MidgzxNc4StX4J8aQBWlK2ZxHlsCo1iaBAZmmIaEnOtkezY0%2BSBRhmTsgMn0%2BA1HmKT6UOgkCyEc0aJ4YapDWo6Dg9e26DVWIzHd%2BvGxeE94beArmzz0j4Ft7gt%2BsfpZQ4NC8RDtbD3Iegp4nGZnop4DrqiAxggloYjIOG%2Bcxftd18CZwFXX%2BuMdCH0Py8QpaUNejc4sDWFVXy%2BIFzwgaBvH4SKcsUi6Ao8YcpGT7KnYB36dS115CvVZuNem0U232U4Gj5BqmbZY6Q5kVp5XDT7R7hofgYMPiOaCicmlTCthoNMH3kcdQAQX5ZkyY30Chh75oMFrddbO3GsqBLVIEQ0TISVJWwT2ICgvQnGUpRwx%2BxPt%2BtW962gR75%2BFsgDOx%2Bh2KCvAGErvrTyDU%2Bv74Vkw3qWKtBaaT2FBBlp1bg3vJ%2BrMlapQg4EjYiDmNkh0Kv1CaY7VNv2VCQR4MD2W7cn7HIr11eKclMxNnk2EfuROrjNPVcRfshT%2BZVvk8L2LYce%2BWt2JbhSFWQoOz%2B%2FoDPe0UbPy9krtoDbVCnNXYuxH6cnWrghwuihnlRqF%2FJouPHiYaMk16e%2FlLVfPyvSL2OJb8MRFAMOqPsb0GOqUBC7%2B9ppOI6vQ21jHRs%2F8sACw2GtZGoyyilzlu9terk%2BExXLUoJq1Ftp1Cd1eTOUW5AUz39%2FKLkNJF8TJFt4oJsiaTGqpOddSwPcccMPrqBpRP1tu7W6JlgzR%2FV8acXYa07HIe2LJmNdhbM1vQafsd7AtExD6UOEpfzGdfT1yd8RG%2BR320jahsp6OYBAByJ2LxwNsdpBf5OWcsmWI8O%2BWBtEJUvR9H&X-Amz-Signature=8a32464b0487e3f8a01d7e898001ad410473313c1bda2263fc3d794ab83f0da1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDVCSNX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJtm8F5K8jERyqPTU7vPQkxWFF%2F%2FSPkSa21y16%2FVB0mAiEA6PzoBe%2BqIo7H2LaPdzutjDpJ3Gs%2FsgFRd1fIMlvbSkYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLb9Fe%2B5%2Fn8in96OSrcA7RGZh6eqwLnKucQUEzEk%2BJqyDnSKO6MidgzxNc4StX4J8aQBWlK2ZxHlsCo1iaBAZmmIaEnOtkezY0%2BSBRhmTsgMn0%2BA1HmKT6UOgkCyEc0aJ4YapDWo6Dg9e26DVWIzHd%2BvGxeE94beArmzz0j4Ft7gt%2BsfpZQ4NC8RDtbD3Iegp4nGZnop4DrqiAxggloYjIOG%2Bcxftd18CZwFXX%2BuMdCH0Py8QpaUNejc4sDWFVXy%2BIFzwgaBvH4SKcsUi6Ao8YcpGT7KnYB36dS115CvVZuNem0U232U4Gj5BqmbZY6Q5kVp5XDT7R7hofgYMPiOaCicmlTCthoNMH3kcdQAQX5ZkyY30Chh75oMFrddbO3GsqBLVIEQ0TISVJWwT2ICgvQnGUpRwx%2BxPt%2BtW962gR75%2BFsgDOx%2Bh2KCvAGErvrTyDU%2Bv74Vkw3qWKtBaaT2FBBlp1bg3vJ%2BrMlapQg4EjYiDmNkh0Kv1CaY7VNv2VCQR4MD2W7cn7HIr11eKclMxNnk2EfuROrjNPVcRfshT%2BZVvk8L2LYce%2BWt2JbhSFWQoOz%2B%2FoDPe0UbPy9krtoDbVCnNXYuxH6cnWrghwuihnlRqF%2FJouPHiYaMk16e%2FlLVfPyvSL2OJb8MRFAMOqPsb0GOqUBC7%2B9ppOI6vQ21jHRs%2F8sACw2GtZGoyyilzlu9terk%2BExXLUoJq1Ftp1Cd1eTOUW5AUz39%2FKLkNJF8TJFt4oJsiaTGqpOddSwPcccMPrqBpRP1tu7W6JlgzR%2FV8acXYa07HIe2LJmNdhbM1vQafsd7AtExD6UOEpfzGdfT1yd8RG%2BR320jahsp6OYBAByJ2LxwNsdpBf5OWcsmWI8O%2BWBtEJUvR9H&X-Amz-Signature=85923b16ac47d60725eb34bb6b69963d3165870f8c85bbbfd2273dae6eb4d93e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDVCSNX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJtm8F5K8jERyqPTU7vPQkxWFF%2F%2FSPkSa21y16%2FVB0mAiEA6PzoBe%2BqIo7H2LaPdzutjDpJ3Gs%2FsgFRd1fIMlvbSkYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLb9Fe%2B5%2Fn8in96OSrcA7RGZh6eqwLnKucQUEzEk%2BJqyDnSKO6MidgzxNc4StX4J8aQBWlK2ZxHlsCo1iaBAZmmIaEnOtkezY0%2BSBRhmTsgMn0%2BA1HmKT6UOgkCyEc0aJ4YapDWo6Dg9e26DVWIzHd%2BvGxeE94beArmzz0j4Ft7gt%2BsfpZQ4NC8RDtbD3Iegp4nGZnop4DrqiAxggloYjIOG%2Bcxftd18CZwFXX%2BuMdCH0Py8QpaUNejc4sDWFVXy%2BIFzwgaBvH4SKcsUi6Ao8YcpGT7KnYB36dS115CvVZuNem0U232U4Gj5BqmbZY6Q5kVp5XDT7R7hofgYMPiOaCicmlTCthoNMH3kcdQAQX5ZkyY30Chh75oMFrddbO3GsqBLVIEQ0TISVJWwT2ICgvQnGUpRwx%2BxPt%2BtW962gR75%2BFsgDOx%2Bh2KCvAGErvrTyDU%2Bv74Vkw3qWKtBaaT2FBBlp1bg3vJ%2BrMlapQg4EjYiDmNkh0Kv1CaY7VNv2VCQR4MD2W7cn7HIr11eKclMxNnk2EfuROrjNPVcRfshT%2BZVvk8L2LYce%2BWt2JbhSFWQoOz%2B%2FoDPe0UbPy9krtoDbVCnNXYuxH6cnWrghwuihnlRqF%2FJouPHiYaMk16e%2FlLVfPyvSL2OJb8MRFAMOqPsb0GOqUBC7%2B9ppOI6vQ21jHRs%2F8sACw2GtZGoyyilzlu9terk%2BExXLUoJq1Ftp1Cd1eTOUW5AUz39%2FKLkNJF8TJFt4oJsiaTGqpOddSwPcccMPrqBpRP1tu7W6JlgzR%2FV8acXYa07HIe2LJmNdhbM1vQafsd7AtExD6UOEpfzGdfT1yd8RG%2BR320jahsp6OYBAByJ2LxwNsdpBf5OWcsmWI8O%2BWBtEJUvR9H&X-Amz-Signature=c7914b66963f74859cfb783a68e3d5247747905683f0702155e3ee746500c851&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDVCSNX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJtm8F5K8jERyqPTU7vPQkxWFF%2F%2FSPkSa21y16%2FVB0mAiEA6PzoBe%2BqIo7H2LaPdzutjDpJ3Gs%2FsgFRd1fIMlvbSkYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLb9Fe%2B5%2Fn8in96OSrcA7RGZh6eqwLnKucQUEzEk%2BJqyDnSKO6MidgzxNc4StX4J8aQBWlK2ZxHlsCo1iaBAZmmIaEnOtkezY0%2BSBRhmTsgMn0%2BA1HmKT6UOgkCyEc0aJ4YapDWo6Dg9e26DVWIzHd%2BvGxeE94beArmzz0j4Ft7gt%2BsfpZQ4NC8RDtbD3Iegp4nGZnop4DrqiAxggloYjIOG%2Bcxftd18CZwFXX%2BuMdCH0Py8QpaUNejc4sDWFVXy%2BIFzwgaBvH4SKcsUi6Ao8YcpGT7KnYB36dS115CvVZuNem0U232U4Gj5BqmbZY6Q5kVp5XDT7R7hofgYMPiOaCicmlTCthoNMH3kcdQAQX5ZkyY30Chh75oMFrddbO3GsqBLVIEQ0TISVJWwT2ICgvQnGUpRwx%2BxPt%2BtW962gR75%2BFsgDOx%2Bh2KCvAGErvrTyDU%2Bv74Vkw3qWKtBaaT2FBBlp1bg3vJ%2BrMlapQg4EjYiDmNkh0Kv1CaY7VNv2VCQR4MD2W7cn7HIr11eKclMxNnk2EfuROrjNPVcRfshT%2BZVvk8L2LYce%2BWt2JbhSFWQoOz%2B%2FoDPe0UbPy9krtoDbVCnNXYuxH6cnWrghwuihnlRqF%2FJouPHiYaMk16e%2FlLVfPyvSL2OJb8MRFAMOqPsb0GOqUBC7%2B9ppOI6vQ21jHRs%2F8sACw2GtZGoyyilzlu9terk%2BExXLUoJq1Ftp1Cd1eTOUW5AUz39%2FKLkNJF8TJFt4oJsiaTGqpOddSwPcccMPrqBpRP1tu7W6JlgzR%2FV8acXYa07HIe2LJmNdhbM1vQafsd7AtExD6UOEpfzGdfT1yd8RG%2BR320jahsp6OYBAByJ2LxwNsdpBf5OWcsmWI8O%2BWBtEJUvR9H&X-Amz-Signature=6240254d46d5280168f1fd2633b2b9d51234c80886a4c2746d1b67207086141c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDVCSNX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJtm8F5K8jERyqPTU7vPQkxWFF%2F%2FSPkSa21y16%2FVB0mAiEA6PzoBe%2BqIo7H2LaPdzutjDpJ3Gs%2FsgFRd1fIMlvbSkYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLb9Fe%2B5%2Fn8in96OSrcA7RGZh6eqwLnKucQUEzEk%2BJqyDnSKO6MidgzxNc4StX4J8aQBWlK2ZxHlsCo1iaBAZmmIaEnOtkezY0%2BSBRhmTsgMn0%2BA1HmKT6UOgkCyEc0aJ4YapDWo6Dg9e26DVWIzHd%2BvGxeE94beArmzz0j4Ft7gt%2BsfpZQ4NC8RDtbD3Iegp4nGZnop4DrqiAxggloYjIOG%2Bcxftd18CZwFXX%2BuMdCH0Py8QpaUNejc4sDWFVXy%2BIFzwgaBvH4SKcsUi6Ao8YcpGT7KnYB36dS115CvVZuNem0U232U4Gj5BqmbZY6Q5kVp5XDT7R7hofgYMPiOaCicmlTCthoNMH3kcdQAQX5ZkyY30Chh75oMFrddbO3GsqBLVIEQ0TISVJWwT2ICgvQnGUpRwx%2BxPt%2BtW962gR75%2BFsgDOx%2Bh2KCvAGErvrTyDU%2Bv74Vkw3qWKtBaaT2FBBlp1bg3vJ%2BrMlapQg4EjYiDmNkh0Kv1CaY7VNv2VCQR4MD2W7cn7HIr11eKclMxNnk2EfuROrjNPVcRfshT%2BZVvk8L2LYce%2BWt2JbhSFWQoOz%2B%2FoDPe0UbPy9krtoDbVCnNXYuxH6cnWrghwuihnlRqF%2FJouPHiYaMk16e%2FlLVfPyvSL2OJb8MRFAMOqPsb0GOqUBC7%2B9ppOI6vQ21jHRs%2F8sACw2GtZGoyyilzlu9terk%2BExXLUoJq1Ftp1Cd1eTOUW5AUz39%2FKLkNJF8TJFt4oJsiaTGqpOddSwPcccMPrqBpRP1tu7W6JlgzR%2FV8acXYa07HIe2LJmNdhbM1vQafsd7AtExD6UOEpfzGdfT1yd8RG%2BR320jahsp6OYBAByJ2LxwNsdpBf5OWcsmWI8O%2BWBtEJUvR9H&X-Amz-Signature=a08ccb92e99a3bf281a1a0f0db58619fbbb9571ad0276324e456de4a57d08853&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDVCSNX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJtm8F5K8jERyqPTU7vPQkxWFF%2F%2FSPkSa21y16%2FVB0mAiEA6PzoBe%2BqIo7H2LaPdzutjDpJ3Gs%2FsgFRd1fIMlvbSkYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLb9Fe%2B5%2Fn8in96OSrcA7RGZh6eqwLnKucQUEzEk%2BJqyDnSKO6MidgzxNc4StX4J8aQBWlK2ZxHlsCo1iaBAZmmIaEnOtkezY0%2BSBRhmTsgMn0%2BA1HmKT6UOgkCyEc0aJ4YapDWo6Dg9e26DVWIzHd%2BvGxeE94beArmzz0j4Ft7gt%2BsfpZQ4NC8RDtbD3Iegp4nGZnop4DrqiAxggloYjIOG%2Bcxftd18CZwFXX%2BuMdCH0Py8QpaUNejc4sDWFVXy%2BIFzwgaBvH4SKcsUi6Ao8YcpGT7KnYB36dS115CvVZuNem0U232U4Gj5BqmbZY6Q5kVp5XDT7R7hofgYMPiOaCicmlTCthoNMH3kcdQAQX5ZkyY30Chh75oMFrddbO3GsqBLVIEQ0TISVJWwT2ICgvQnGUpRwx%2BxPt%2BtW962gR75%2BFsgDOx%2Bh2KCvAGErvrTyDU%2Bv74Vkw3qWKtBaaT2FBBlp1bg3vJ%2BrMlapQg4EjYiDmNkh0Kv1CaY7VNv2VCQR4MD2W7cn7HIr11eKclMxNnk2EfuROrjNPVcRfshT%2BZVvk8L2LYce%2BWt2JbhSFWQoOz%2B%2FoDPe0UbPy9krtoDbVCnNXYuxH6cnWrghwuihnlRqF%2FJouPHiYaMk16e%2FlLVfPyvSL2OJb8MRFAMOqPsb0GOqUBC7%2B9ppOI6vQ21jHRs%2F8sACw2GtZGoyyilzlu9terk%2BExXLUoJq1Ftp1Cd1eTOUW5AUz39%2FKLkNJF8TJFt4oJsiaTGqpOddSwPcccMPrqBpRP1tu7W6JlgzR%2FV8acXYa07HIe2LJmNdhbM1vQafsd7AtExD6UOEpfzGdfT1yd8RG%2BR320jahsp6OYBAByJ2LxwNsdpBf5OWcsmWI8O%2BWBtEJUvR9H&X-Amz-Signature=6be7d15d26d50af4cb3be7e568bddd273feff531341f03007e4ac84b8ec960ba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

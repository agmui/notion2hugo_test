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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDMZQKX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25op8YBxnZhDbSSAFSfGV347qZv3%2BBUouuyEMOmJQrQIgF0cLE%2FtMZXy6lF4SYqoi2ayad%2Bv1VUzl3EhByPsFs%2FQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnhGoyo4BwBoi15YCrcAwrpCa4yQ0Qte%2B8kQYqEaUdzba1pwf6xmSAcQo1A7fctxlomKCfOi2kcmH1V2M3iXIbbAm4mOP7QpyxXen5vmyXD9aSC1WvHzKBcedxowBS0bTgULhiavdzvDPUHRz6ozQLz93T49ieC64yPewNB6W8rU7pNZWhDhUGN%2F2zL9I%2BRzLE9ysMdxaPcmaH3o%2BtrS0d3zxnLhnI3FThJ0z3hgLv9UUr8Srg8jFpcVpSLBWdcbSlkxEnf4DD%2Fok88mCwACv9g2JXdUhVWNZdMYkIeJahAsGUCquLUMDUPGUE4KvZLPhnCCzfncFb0LjFwyN2DEuCYhli1IwaYm4uBHlDPvWzKBDJ5ss58y42oIfT6NZW6NBPWcgRTYOiXvJVr%2BtwquaC2odqyI3ydzVJ7S7g09J2QT56ZX72X1A0%2FJpbtwWF%2BCfY6P1%2BVne5YuwiS%2F9U1LJ%2FNk5F6a4W1LbuzZq2CUSctA43Bk2mUPgKa%2BeaQ2zVt7msRRDm3J7UzwDUlJIOeOICLzWPAtBHDc44n5xBApv4ibPh4J03%2BL7H06PHk3JlHvqzdxlrcSN96%2B68sHII8upjeN9oIVhjzcHqpYhKumTV20wSAMAKrW7FHMdArNrU6ZiwgrzfDxjKrhh%2F4MMCv2MIGOqUBDh0U%2Bic%2FiHyIu5TeoC6U4K7XjKVWjOTAO3RG5rkepVWcgXDW42fHL272Swhzb4J%2Ba6pH2vaGOo%2BW4TrlSFe1sDWLS34J6q7nMgWIyiZWTYMsIZM%2BgMIbAxa5XN7OPq6i61syg7zf%2FFly8oSe94RilMUfbAx2ca1asGIWF469HiqThxjHWOe30ahdltwIkEFZ9yZjqvYhgY9Oet8TJ4hkbBniejgo&X-Amz-Signature=f3ced314d155e9fb07f0050cb72cf8652ac373cd91ca8931caab44bdb4dc2c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDMZQKX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25op8YBxnZhDbSSAFSfGV347qZv3%2BBUouuyEMOmJQrQIgF0cLE%2FtMZXy6lF4SYqoi2ayad%2Bv1VUzl3EhByPsFs%2FQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnhGoyo4BwBoi15YCrcAwrpCa4yQ0Qte%2B8kQYqEaUdzba1pwf6xmSAcQo1A7fctxlomKCfOi2kcmH1V2M3iXIbbAm4mOP7QpyxXen5vmyXD9aSC1WvHzKBcedxowBS0bTgULhiavdzvDPUHRz6ozQLz93T49ieC64yPewNB6W8rU7pNZWhDhUGN%2F2zL9I%2BRzLE9ysMdxaPcmaH3o%2BtrS0d3zxnLhnI3FThJ0z3hgLv9UUr8Srg8jFpcVpSLBWdcbSlkxEnf4DD%2Fok88mCwACv9g2JXdUhVWNZdMYkIeJahAsGUCquLUMDUPGUE4KvZLPhnCCzfncFb0LjFwyN2DEuCYhli1IwaYm4uBHlDPvWzKBDJ5ss58y42oIfT6NZW6NBPWcgRTYOiXvJVr%2BtwquaC2odqyI3ydzVJ7S7g09J2QT56ZX72X1A0%2FJpbtwWF%2BCfY6P1%2BVne5YuwiS%2F9U1LJ%2FNk5F6a4W1LbuzZq2CUSctA43Bk2mUPgKa%2BeaQ2zVt7msRRDm3J7UzwDUlJIOeOICLzWPAtBHDc44n5xBApv4ibPh4J03%2BL7H06PHk3JlHvqzdxlrcSN96%2B68sHII8upjeN9oIVhjzcHqpYhKumTV20wSAMAKrW7FHMdArNrU6ZiwgrzfDxjKrhh%2F4MMCv2MIGOqUBDh0U%2Bic%2FiHyIu5TeoC6U4K7XjKVWjOTAO3RG5rkepVWcgXDW42fHL272Swhzb4J%2Ba6pH2vaGOo%2BW4TrlSFe1sDWLS34J6q7nMgWIyiZWTYMsIZM%2BgMIbAxa5XN7OPq6i61syg7zf%2FFly8oSe94RilMUfbAx2ca1asGIWF469HiqThxjHWOe30ahdltwIkEFZ9yZjqvYhgY9Oet8TJ4hkbBniejgo&X-Amz-Signature=8500fbc36b1acfe34f909613784103b062cbcaea4b1dfad46b41f3757f563dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDMZQKX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25op8YBxnZhDbSSAFSfGV347qZv3%2BBUouuyEMOmJQrQIgF0cLE%2FtMZXy6lF4SYqoi2ayad%2Bv1VUzl3EhByPsFs%2FQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnhGoyo4BwBoi15YCrcAwrpCa4yQ0Qte%2B8kQYqEaUdzba1pwf6xmSAcQo1A7fctxlomKCfOi2kcmH1V2M3iXIbbAm4mOP7QpyxXen5vmyXD9aSC1WvHzKBcedxowBS0bTgULhiavdzvDPUHRz6ozQLz93T49ieC64yPewNB6W8rU7pNZWhDhUGN%2F2zL9I%2BRzLE9ysMdxaPcmaH3o%2BtrS0d3zxnLhnI3FThJ0z3hgLv9UUr8Srg8jFpcVpSLBWdcbSlkxEnf4DD%2Fok88mCwACv9g2JXdUhVWNZdMYkIeJahAsGUCquLUMDUPGUE4KvZLPhnCCzfncFb0LjFwyN2DEuCYhli1IwaYm4uBHlDPvWzKBDJ5ss58y42oIfT6NZW6NBPWcgRTYOiXvJVr%2BtwquaC2odqyI3ydzVJ7S7g09J2QT56ZX72X1A0%2FJpbtwWF%2BCfY6P1%2BVne5YuwiS%2F9U1LJ%2FNk5F6a4W1LbuzZq2CUSctA43Bk2mUPgKa%2BeaQ2zVt7msRRDm3J7UzwDUlJIOeOICLzWPAtBHDc44n5xBApv4ibPh4J03%2BL7H06PHk3JlHvqzdxlrcSN96%2B68sHII8upjeN9oIVhjzcHqpYhKumTV20wSAMAKrW7FHMdArNrU6ZiwgrzfDxjKrhh%2F4MMCv2MIGOqUBDh0U%2Bic%2FiHyIu5TeoC6U4K7XjKVWjOTAO3RG5rkepVWcgXDW42fHL272Swhzb4J%2Ba6pH2vaGOo%2BW4TrlSFe1sDWLS34J6q7nMgWIyiZWTYMsIZM%2BgMIbAxa5XN7OPq6i61syg7zf%2FFly8oSe94RilMUfbAx2ca1asGIWF469HiqThxjHWOe30ahdltwIkEFZ9yZjqvYhgY9Oet8TJ4hkbBniejgo&X-Amz-Signature=2a789e7c7c28e03e088a7d29726a58c8ac3a2e596ba045a53e89d7072bc9c85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDMZQKX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25op8YBxnZhDbSSAFSfGV347qZv3%2BBUouuyEMOmJQrQIgF0cLE%2FtMZXy6lF4SYqoi2ayad%2Bv1VUzl3EhByPsFs%2FQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnhGoyo4BwBoi15YCrcAwrpCa4yQ0Qte%2B8kQYqEaUdzba1pwf6xmSAcQo1A7fctxlomKCfOi2kcmH1V2M3iXIbbAm4mOP7QpyxXen5vmyXD9aSC1WvHzKBcedxowBS0bTgULhiavdzvDPUHRz6ozQLz93T49ieC64yPewNB6W8rU7pNZWhDhUGN%2F2zL9I%2BRzLE9ysMdxaPcmaH3o%2BtrS0d3zxnLhnI3FThJ0z3hgLv9UUr8Srg8jFpcVpSLBWdcbSlkxEnf4DD%2Fok88mCwACv9g2JXdUhVWNZdMYkIeJahAsGUCquLUMDUPGUE4KvZLPhnCCzfncFb0LjFwyN2DEuCYhli1IwaYm4uBHlDPvWzKBDJ5ss58y42oIfT6NZW6NBPWcgRTYOiXvJVr%2BtwquaC2odqyI3ydzVJ7S7g09J2QT56ZX72X1A0%2FJpbtwWF%2BCfY6P1%2BVne5YuwiS%2F9U1LJ%2FNk5F6a4W1LbuzZq2CUSctA43Bk2mUPgKa%2BeaQ2zVt7msRRDm3J7UzwDUlJIOeOICLzWPAtBHDc44n5xBApv4ibPh4J03%2BL7H06PHk3JlHvqzdxlrcSN96%2B68sHII8upjeN9oIVhjzcHqpYhKumTV20wSAMAKrW7FHMdArNrU6ZiwgrzfDxjKrhh%2F4MMCv2MIGOqUBDh0U%2Bic%2FiHyIu5TeoC6U4K7XjKVWjOTAO3RG5rkepVWcgXDW42fHL272Swhzb4J%2Ba6pH2vaGOo%2BW4TrlSFe1sDWLS34J6q7nMgWIyiZWTYMsIZM%2BgMIbAxa5XN7OPq6i61syg7zf%2FFly8oSe94RilMUfbAx2ca1asGIWF469HiqThxjHWOe30ahdltwIkEFZ9yZjqvYhgY9Oet8TJ4hkbBniejgo&X-Amz-Signature=9b059d328fbec6aab3139f912d1552825bc1f419273fb85cf58ab3b75d980cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDMZQKX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25op8YBxnZhDbSSAFSfGV347qZv3%2BBUouuyEMOmJQrQIgF0cLE%2FtMZXy6lF4SYqoi2ayad%2Bv1VUzl3EhByPsFs%2FQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnhGoyo4BwBoi15YCrcAwrpCa4yQ0Qte%2B8kQYqEaUdzba1pwf6xmSAcQo1A7fctxlomKCfOi2kcmH1V2M3iXIbbAm4mOP7QpyxXen5vmyXD9aSC1WvHzKBcedxowBS0bTgULhiavdzvDPUHRz6ozQLz93T49ieC64yPewNB6W8rU7pNZWhDhUGN%2F2zL9I%2BRzLE9ysMdxaPcmaH3o%2BtrS0d3zxnLhnI3FThJ0z3hgLv9UUr8Srg8jFpcVpSLBWdcbSlkxEnf4DD%2Fok88mCwACv9g2JXdUhVWNZdMYkIeJahAsGUCquLUMDUPGUE4KvZLPhnCCzfncFb0LjFwyN2DEuCYhli1IwaYm4uBHlDPvWzKBDJ5ss58y42oIfT6NZW6NBPWcgRTYOiXvJVr%2BtwquaC2odqyI3ydzVJ7S7g09J2QT56ZX72X1A0%2FJpbtwWF%2BCfY6P1%2BVne5YuwiS%2F9U1LJ%2FNk5F6a4W1LbuzZq2CUSctA43Bk2mUPgKa%2BeaQ2zVt7msRRDm3J7UzwDUlJIOeOICLzWPAtBHDc44n5xBApv4ibPh4J03%2BL7H06PHk3JlHvqzdxlrcSN96%2B68sHII8upjeN9oIVhjzcHqpYhKumTV20wSAMAKrW7FHMdArNrU6ZiwgrzfDxjKrhh%2F4MMCv2MIGOqUBDh0U%2Bic%2FiHyIu5TeoC6U4K7XjKVWjOTAO3RG5rkepVWcgXDW42fHL272Swhzb4J%2Ba6pH2vaGOo%2BW4TrlSFe1sDWLS34J6q7nMgWIyiZWTYMsIZM%2BgMIbAxa5XN7OPq6i61syg7zf%2FFly8oSe94RilMUfbAx2ca1asGIWF469HiqThxjHWOe30ahdltwIkEFZ9yZjqvYhgY9Oet8TJ4hkbBniejgo&X-Amz-Signature=a4ea6325a2325f8725f416ee52fe12a480f64f1dc710d31ac8ec4354749643be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDMZQKX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25op8YBxnZhDbSSAFSfGV347qZv3%2BBUouuyEMOmJQrQIgF0cLE%2FtMZXy6lF4SYqoi2ayad%2Bv1VUzl3EhByPsFs%2FQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnhGoyo4BwBoi15YCrcAwrpCa4yQ0Qte%2B8kQYqEaUdzba1pwf6xmSAcQo1A7fctxlomKCfOi2kcmH1V2M3iXIbbAm4mOP7QpyxXen5vmyXD9aSC1WvHzKBcedxowBS0bTgULhiavdzvDPUHRz6ozQLz93T49ieC64yPewNB6W8rU7pNZWhDhUGN%2F2zL9I%2BRzLE9ysMdxaPcmaH3o%2BtrS0d3zxnLhnI3FThJ0z3hgLv9UUr8Srg8jFpcVpSLBWdcbSlkxEnf4DD%2Fok88mCwACv9g2JXdUhVWNZdMYkIeJahAsGUCquLUMDUPGUE4KvZLPhnCCzfncFb0LjFwyN2DEuCYhli1IwaYm4uBHlDPvWzKBDJ5ss58y42oIfT6NZW6NBPWcgRTYOiXvJVr%2BtwquaC2odqyI3ydzVJ7S7g09J2QT56ZX72X1A0%2FJpbtwWF%2BCfY6P1%2BVne5YuwiS%2F9U1LJ%2FNk5F6a4W1LbuzZq2CUSctA43Bk2mUPgKa%2BeaQ2zVt7msRRDm3J7UzwDUlJIOeOICLzWPAtBHDc44n5xBApv4ibPh4J03%2BL7H06PHk3JlHvqzdxlrcSN96%2B68sHII8upjeN9oIVhjzcHqpYhKumTV20wSAMAKrW7FHMdArNrU6ZiwgrzfDxjKrhh%2F4MMCv2MIGOqUBDh0U%2Bic%2FiHyIu5TeoC6U4K7XjKVWjOTAO3RG5rkepVWcgXDW42fHL272Swhzb4J%2Ba6pH2vaGOo%2BW4TrlSFe1sDWLS34J6q7nMgWIyiZWTYMsIZM%2BgMIbAxa5XN7OPq6i61syg7zf%2FFly8oSe94RilMUfbAx2ca1asGIWF469HiqThxjHWOe30ahdltwIkEFZ9yZjqvYhgY9Oet8TJ4hkbBniejgo&X-Amz-Signature=41af9f9aa61bee4bad7fa3866dd328bbd7600588bebdc8f6c0d6a7abc5d32f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDMZQKX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25op8YBxnZhDbSSAFSfGV347qZv3%2BBUouuyEMOmJQrQIgF0cLE%2FtMZXy6lF4SYqoi2ayad%2Bv1VUzl3EhByPsFs%2FQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnhGoyo4BwBoi15YCrcAwrpCa4yQ0Qte%2B8kQYqEaUdzba1pwf6xmSAcQo1A7fctxlomKCfOi2kcmH1V2M3iXIbbAm4mOP7QpyxXen5vmyXD9aSC1WvHzKBcedxowBS0bTgULhiavdzvDPUHRz6ozQLz93T49ieC64yPewNB6W8rU7pNZWhDhUGN%2F2zL9I%2BRzLE9ysMdxaPcmaH3o%2BtrS0d3zxnLhnI3FThJ0z3hgLv9UUr8Srg8jFpcVpSLBWdcbSlkxEnf4DD%2Fok88mCwACv9g2JXdUhVWNZdMYkIeJahAsGUCquLUMDUPGUE4KvZLPhnCCzfncFb0LjFwyN2DEuCYhli1IwaYm4uBHlDPvWzKBDJ5ss58y42oIfT6NZW6NBPWcgRTYOiXvJVr%2BtwquaC2odqyI3ydzVJ7S7g09J2QT56ZX72X1A0%2FJpbtwWF%2BCfY6P1%2BVne5YuwiS%2F9U1LJ%2FNk5F6a4W1LbuzZq2CUSctA43Bk2mUPgKa%2BeaQ2zVt7msRRDm3J7UzwDUlJIOeOICLzWPAtBHDc44n5xBApv4ibPh4J03%2BL7H06PHk3JlHvqzdxlrcSN96%2B68sHII8upjeN9oIVhjzcHqpYhKumTV20wSAMAKrW7FHMdArNrU6ZiwgrzfDxjKrhh%2F4MMCv2MIGOqUBDh0U%2Bic%2FiHyIu5TeoC6U4K7XjKVWjOTAO3RG5rkepVWcgXDW42fHL272Swhzb4J%2Ba6pH2vaGOo%2BW4TrlSFe1sDWLS34J6q7nMgWIyiZWTYMsIZM%2BgMIbAxa5XN7OPq6i61syg7zf%2FFly8oSe94RilMUfbAx2ca1asGIWF469HiqThxjHWOe30ahdltwIkEFZ9yZjqvYhgY9Oet8TJ4hkbBniejgo&X-Amz-Signature=7f7cbad524e933a4dd4f3b408dda62584a95d40e93aec3b2c99858b97a3dee43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

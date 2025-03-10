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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWWV4HG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCu5r8DJHqO2pMR94fZCzj2TWK86IErA%2FiKMB2A0WUC9AIgWbkShBLNdsikRvXi3pQbhIEI2UKRyOsV5HYGF1rQB4gqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvAi0qhP9nk8svpoircA%2FIEamzJGF8cU9RfBfKaQWmzLItqYgtQmAqbXlub7CEB%2Bz4PFNdo6K0tYAl0IZyxLN5%2F%2FXr6NfMMPkZ14C7JltDzDHqHlhjMEiMYrd%2FZcsxjMu5avI0ZCbrzQLg9x2eMYuEFQltZvgkLHKB0jtmEnHXn7BqeyKBTiP6W9PExXdsieGIOM8eGldk8lcry1dDo%2BDeqF4%2BcQ2UAGxbaaaO6LknOy4n8pT8ksydpso%2FTee9NTrt1%2BLhR%2Fko649dBo6nE%2B5FjmVnx%2BBXjldTiyB2fOm%2B8dR1jFDnahF%2BX9tN%2FOdOHzqKqJer6xf%2FZsC1WkP0rymjLW8cDt8nbtS%2Fc7%2BLmSlwb2%2FQ2krtVuKEcxoxGnuA6cmAa8WzukAOAAL%2F0C4WkUAktlDJmG1%2Fl3Znzdczm4YZACZlrX%2BHnQlYq4VED5Hg451XNQH9nECxSDyFnw4ZWaIoE64E3hpfmIISZfLc4VIQq%2ByXF16YFlCRQ7EswfLWG%2FRP6FrRtwpIJSS98%2FyUI1%2FrpvakFOPVHG6VJYjtP%2FsdijVDC5kRpNyYmOHJKSOQABdkpTPz96PVDLg26zmntfFzVZ4lGqATtYePV3EDNFLq2dS35TO%2Ft3psyKizFZczZoX5RnE7Y2W9zaTG8MPfsu74GOqUBKKHh7zfWaXZV85XIv2NE%2F0NFTCq9iK7ThQGAOt%2FicaJEYlhAddHoWfGtvB%2BbVdPHPbtGTnLyZubjENoXVROns8FNNMjR7KOGebG8xEJj57MLDiCd%2FlXGK%2BVkERuuQnVVYYkNjaD5AjvtmRBDRX2lifGK1Gei7sSDjJSE8PPyiyJdg%2F3S9yIoQu%2BOEJ6s0HCSIyTuA2LH4q%2BHGKEM71GpzCaJ8cC%2B&X-Amz-Signature=86febad19e84434660ac5df48b04ab19b87b0ebbab970bba02b0b1143d340741&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWWV4HG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCu5r8DJHqO2pMR94fZCzj2TWK86IErA%2FiKMB2A0WUC9AIgWbkShBLNdsikRvXi3pQbhIEI2UKRyOsV5HYGF1rQB4gqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvAi0qhP9nk8svpoircA%2FIEamzJGF8cU9RfBfKaQWmzLItqYgtQmAqbXlub7CEB%2Bz4PFNdo6K0tYAl0IZyxLN5%2F%2FXr6NfMMPkZ14C7JltDzDHqHlhjMEiMYrd%2FZcsxjMu5avI0ZCbrzQLg9x2eMYuEFQltZvgkLHKB0jtmEnHXn7BqeyKBTiP6W9PExXdsieGIOM8eGldk8lcry1dDo%2BDeqF4%2BcQ2UAGxbaaaO6LknOy4n8pT8ksydpso%2FTee9NTrt1%2BLhR%2Fko649dBo6nE%2B5FjmVnx%2BBXjldTiyB2fOm%2B8dR1jFDnahF%2BX9tN%2FOdOHzqKqJer6xf%2FZsC1WkP0rymjLW8cDt8nbtS%2Fc7%2BLmSlwb2%2FQ2krtVuKEcxoxGnuA6cmAa8WzukAOAAL%2F0C4WkUAktlDJmG1%2Fl3Znzdczm4YZACZlrX%2BHnQlYq4VED5Hg451XNQH9nECxSDyFnw4ZWaIoE64E3hpfmIISZfLc4VIQq%2ByXF16YFlCRQ7EswfLWG%2FRP6FrRtwpIJSS98%2FyUI1%2FrpvakFOPVHG6VJYjtP%2FsdijVDC5kRpNyYmOHJKSOQABdkpTPz96PVDLg26zmntfFzVZ4lGqATtYePV3EDNFLq2dS35TO%2Ft3psyKizFZczZoX5RnE7Y2W9zaTG8MPfsu74GOqUBKKHh7zfWaXZV85XIv2NE%2F0NFTCq9iK7ThQGAOt%2FicaJEYlhAddHoWfGtvB%2BbVdPHPbtGTnLyZubjENoXVROns8FNNMjR7KOGebG8xEJj57MLDiCd%2FlXGK%2BVkERuuQnVVYYkNjaD5AjvtmRBDRX2lifGK1Gei7sSDjJSE8PPyiyJdg%2F3S9yIoQu%2BOEJ6s0HCSIyTuA2LH4q%2BHGKEM71GpzCaJ8cC%2B&X-Amz-Signature=47df9834fbd6eb910e7fe18384630b3d1c5210a6dbcacff6b80494e5aba00cba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWWV4HG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCu5r8DJHqO2pMR94fZCzj2TWK86IErA%2FiKMB2A0WUC9AIgWbkShBLNdsikRvXi3pQbhIEI2UKRyOsV5HYGF1rQB4gqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvAi0qhP9nk8svpoircA%2FIEamzJGF8cU9RfBfKaQWmzLItqYgtQmAqbXlub7CEB%2Bz4PFNdo6K0tYAl0IZyxLN5%2F%2FXr6NfMMPkZ14C7JltDzDHqHlhjMEiMYrd%2FZcsxjMu5avI0ZCbrzQLg9x2eMYuEFQltZvgkLHKB0jtmEnHXn7BqeyKBTiP6W9PExXdsieGIOM8eGldk8lcry1dDo%2BDeqF4%2BcQ2UAGxbaaaO6LknOy4n8pT8ksydpso%2FTee9NTrt1%2BLhR%2Fko649dBo6nE%2B5FjmVnx%2BBXjldTiyB2fOm%2B8dR1jFDnahF%2BX9tN%2FOdOHzqKqJer6xf%2FZsC1WkP0rymjLW8cDt8nbtS%2Fc7%2BLmSlwb2%2FQ2krtVuKEcxoxGnuA6cmAa8WzukAOAAL%2F0C4WkUAktlDJmG1%2Fl3Znzdczm4YZACZlrX%2BHnQlYq4VED5Hg451XNQH9nECxSDyFnw4ZWaIoE64E3hpfmIISZfLc4VIQq%2ByXF16YFlCRQ7EswfLWG%2FRP6FrRtwpIJSS98%2FyUI1%2FrpvakFOPVHG6VJYjtP%2FsdijVDC5kRpNyYmOHJKSOQABdkpTPz96PVDLg26zmntfFzVZ4lGqATtYePV3EDNFLq2dS35TO%2Ft3psyKizFZczZoX5RnE7Y2W9zaTG8MPfsu74GOqUBKKHh7zfWaXZV85XIv2NE%2F0NFTCq9iK7ThQGAOt%2FicaJEYlhAddHoWfGtvB%2BbVdPHPbtGTnLyZubjENoXVROns8FNNMjR7KOGebG8xEJj57MLDiCd%2FlXGK%2BVkERuuQnVVYYkNjaD5AjvtmRBDRX2lifGK1Gei7sSDjJSE8PPyiyJdg%2F3S9yIoQu%2BOEJ6s0HCSIyTuA2LH4q%2BHGKEM71GpzCaJ8cC%2B&X-Amz-Signature=2b552c27c4ebf298753cfb49d023680f0b87e2d3b41aec4c368907dbc0d4a14a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWWV4HG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCu5r8DJHqO2pMR94fZCzj2TWK86IErA%2FiKMB2A0WUC9AIgWbkShBLNdsikRvXi3pQbhIEI2UKRyOsV5HYGF1rQB4gqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvAi0qhP9nk8svpoircA%2FIEamzJGF8cU9RfBfKaQWmzLItqYgtQmAqbXlub7CEB%2Bz4PFNdo6K0tYAl0IZyxLN5%2F%2FXr6NfMMPkZ14C7JltDzDHqHlhjMEiMYrd%2FZcsxjMu5avI0ZCbrzQLg9x2eMYuEFQltZvgkLHKB0jtmEnHXn7BqeyKBTiP6W9PExXdsieGIOM8eGldk8lcry1dDo%2BDeqF4%2BcQ2UAGxbaaaO6LknOy4n8pT8ksydpso%2FTee9NTrt1%2BLhR%2Fko649dBo6nE%2B5FjmVnx%2BBXjldTiyB2fOm%2B8dR1jFDnahF%2BX9tN%2FOdOHzqKqJer6xf%2FZsC1WkP0rymjLW8cDt8nbtS%2Fc7%2BLmSlwb2%2FQ2krtVuKEcxoxGnuA6cmAa8WzukAOAAL%2F0C4WkUAktlDJmG1%2Fl3Znzdczm4YZACZlrX%2BHnQlYq4VED5Hg451XNQH9nECxSDyFnw4ZWaIoE64E3hpfmIISZfLc4VIQq%2ByXF16YFlCRQ7EswfLWG%2FRP6FrRtwpIJSS98%2FyUI1%2FrpvakFOPVHG6VJYjtP%2FsdijVDC5kRpNyYmOHJKSOQABdkpTPz96PVDLg26zmntfFzVZ4lGqATtYePV3EDNFLq2dS35TO%2Ft3psyKizFZczZoX5RnE7Y2W9zaTG8MPfsu74GOqUBKKHh7zfWaXZV85XIv2NE%2F0NFTCq9iK7ThQGAOt%2FicaJEYlhAddHoWfGtvB%2BbVdPHPbtGTnLyZubjENoXVROns8FNNMjR7KOGebG8xEJj57MLDiCd%2FlXGK%2BVkERuuQnVVYYkNjaD5AjvtmRBDRX2lifGK1Gei7sSDjJSE8PPyiyJdg%2F3S9yIoQu%2BOEJ6s0HCSIyTuA2LH4q%2BHGKEM71GpzCaJ8cC%2B&X-Amz-Signature=e3e98c2694b3af133966af77accfc5085031f16f982b27f131ab3449b9c23cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWWV4HG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCu5r8DJHqO2pMR94fZCzj2TWK86IErA%2FiKMB2A0WUC9AIgWbkShBLNdsikRvXi3pQbhIEI2UKRyOsV5HYGF1rQB4gqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvAi0qhP9nk8svpoircA%2FIEamzJGF8cU9RfBfKaQWmzLItqYgtQmAqbXlub7CEB%2Bz4PFNdo6K0tYAl0IZyxLN5%2F%2FXr6NfMMPkZ14C7JltDzDHqHlhjMEiMYrd%2FZcsxjMu5avI0ZCbrzQLg9x2eMYuEFQltZvgkLHKB0jtmEnHXn7BqeyKBTiP6W9PExXdsieGIOM8eGldk8lcry1dDo%2BDeqF4%2BcQ2UAGxbaaaO6LknOy4n8pT8ksydpso%2FTee9NTrt1%2BLhR%2Fko649dBo6nE%2B5FjmVnx%2BBXjldTiyB2fOm%2B8dR1jFDnahF%2BX9tN%2FOdOHzqKqJer6xf%2FZsC1WkP0rymjLW8cDt8nbtS%2Fc7%2BLmSlwb2%2FQ2krtVuKEcxoxGnuA6cmAa8WzukAOAAL%2F0C4WkUAktlDJmG1%2Fl3Znzdczm4YZACZlrX%2BHnQlYq4VED5Hg451XNQH9nECxSDyFnw4ZWaIoE64E3hpfmIISZfLc4VIQq%2ByXF16YFlCRQ7EswfLWG%2FRP6FrRtwpIJSS98%2FyUI1%2FrpvakFOPVHG6VJYjtP%2FsdijVDC5kRpNyYmOHJKSOQABdkpTPz96PVDLg26zmntfFzVZ4lGqATtYePV3EDNFLq2dS35TO%2Ft3psyKizFZczZoX5RnE7Y2W9zaTG8MPfsu74GOqUBKKHh7zfWaXZV85XIv2NE%2F0NFTCq9iK7ThQGAOt%2FicaJEYlhAddHoWfGtvB%2BbVdPHPbtGTnLyZubjENoXVROns8FNNMjR7KOGebG8xEJj57MLDiCd%2FlXGK%2BVkERuuQnVVYYkNjaD5AjvtmRBDRX2lifGK1Gei7sSDjJSE8PPyiyJdg%2F3S9yIoQu%2BOEJ6s0HCSIyTuA2LH4q%2BHGKEM71GpzCaJ8cC%2B&X-Amz-Signature=2d25a579c2d19fb7fd444b204eba387de51712db04495786bb090cf19f7cc641&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWWV4HG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCu5r8DJHqO2pMR94fZCzj2TWK86IErA%2FiKMB2A0WUC9AIgWbkShBLNdsikRvXi3pQbhIEI2UKRyOsV5HYGF1rQB4gqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvAi0qhP9nk8svpoircA%2FIEamzJGF8cU9RfBfKaQWmzLItqYgtQmAqbXlub7CEB%2Bz4PFNdo6K0tYAl0IZyxLN5%2F%2FXr6NfMMPkZ14C7JltDzDHqHlhjMEiMYrd%2FZcsxjMu5avI0ZCbrzQLg9x2eMYuEFQltZvgkLHKB0jtmEnHXn7BqeyKBTiP6W9PExXdsieGIOM8eGldk8lcry1dDo%2BDeqF4%2BcQ2UAGxbaaaO6LknOy4n8pT8ksydpso%2FTee9NTrt1%2BLhR%2Fko649dBo6nE%2B5FjmVnx%2BBXjldTiyB2fOm%2B8dR1jFDnahF%2BX9tN%2FOdOHzqKqJer6xf%2FZsC1WkP0rymjLW8cDt8nbtS%2Fc7%2BLmSlwb2%2FQ2krtVuKEcxoxGnuA6cmAa8WzukAOAAL%2F0C4WkUAktlDJmG1%2Fl3Znzdczm4YZACZlrX%2BHnQlYq4VED5Hg451XNQH9nECxSDyFnw4ZWaIoE64E3hpfmIISZfLc4VIQq%2ByXF16YFlCRQ7EswfLWG%2FRP6FrRtwpIJSS98%2FyUI1%2FrpvakFOPVHG6VJYjtP%2FsdijVDC5kRpNyYmOHJKSOQABdkpTPz96PVDLg26zmntfFzVZ4lGqATtYePV3EDNFLq2dS35TO%2Ft3psyKizFZczZoX5RnE7Y2W9zaTG8MPfsu74GOqUBKKHh7zfWaXZV85XIv2NE%2F0NFTCq9iK7ThQGAOt%2FicaJEYlhAddHoWfGtvB%2BbVdPHPbtGTnLyZubjENoXVROns8FNNMjR7KOGebG8xEJj57MLDiCd%2FlXGK%2BVkERuuQnVVYYkNjaD5AjvtmRBDRX2lifGK1Gei7sSDjJSE8PPyiyJdg%2F3S9yIoQu%2BOEJ6s0HCSIyTuA2LH4q%2BHGKEM71GpzCaJ8cC%2B&X-Amz-Signature=7075da4466b56460acc86ab536a4c27de56f94f845c6f26ef6047dd09c6d7b68&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWWV4HG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCu5r8DJHqO2pMR94fZCzj2TWK86IErA%2FiKMB2A0WUC9AIgWbkShBLNdsikRvXi3pQbhIEI2UKRyOsV5HYGF1rQB4gqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvAi0qhP9nk8svpoircA%2FIEamzJGF8cU9RfBfKaQWmzLItqYgtQmAqbXlub7CEB%2Bz4PFNdo6K0tYAl0IZyxLN5%2F%2FXr6NfMMPkZ14C7JltDzDHqHlhjMEiMYrd%2FZcsxjMu5avI0ZCbrzQLg9x2eMYuEFQltZvgkLHKB0jtmEnHXn7BqeyKBTiP6W9PExXdsieGIOM8eGldk8lcry1dDo%2BDeqF4%2BcQ2UAGxbaaaO6LknOy4n8pT8ksydpso%2FTee9NTrt1%2BLhR%2Fko649dBo6nE%2B5FjmVnx%2BBXjldTiyB2fOm%2B8dR1jFDnahF%2BX9tN%2FOdOHzqKqJer6xf%2FZsC1WkP0rymjLW8cDt8nbtS%2Fc7%2BLmSlwb2%2FQ2krtVuKEcxoxGnuA6cmAa8WzukAOAAL%2F0C4WkUAktlDJmG1%2Fl3Znzdczm4YZACZlrX%2BHnQlYq4VED5Hg451XNQH9nECxSDyFnw4ZWaIoE64E3hpfmIISZfLc4VIQq%2ByXF16YFlCRQ7EswfLWG%2FRP6FrRtwpIJSS98%2FyUI1%2FrpvakFOPVHG6VJYjtP%2FsdijVDC5kRpNyYmOHJKSOQABdkpTPz96PVDLg26zmntfFzVZ4lGqATtYePV3EDNFLq2dS35TO%2Ft3psyKizFZczZoX5RnE7Y2W9zaTG8MPfsu74GOqUBKKHh7zfWaXZV85XIv2NE%2F0NFTCq9iK7ThQGAOt%2FicaJEYlhAddHoWfGtvB%2BbVdPHPbtGTnLyZubjENoXVROns8FNNMjR7KOGebG8xEJj57MLDiCd%2FlXGK%2BVkERuuQnVVYYkNjaD5AjvtmRBDRX2lifGK1Gei7sSDjJSE8PPyiyJdg%2F3S9yIoQu%2BOEJ6s0HCSIyTuA2LH4q%2BHGKEM71GpzCaJ8cC%2B&X-Amz-Signature=24aa1835c20ea145f94fd47141e4b4aac4382b4195dfc7015960d420374b3447&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TNQNVM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCy%2FApai4Sf9tnaHpPYdp%2BT6zNgEWciugzLhFl2Hquf%2FgIgdLlenMQ%2FGzfcrQpeIUH9DZI1eg%2FtkuhGRz12ApdolQIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNmiiE7C2cw2vwlZACrcAyzxe9r4EDRqe5lZJgygqwyUl9w7wrnDqsW6ztXn3rjP7v5X1BqtPk35Upmqi%2Bttbqz0a15VrU9t1%2FEdumD3SFpW3709DNbHBuEaVfXx2VT9o%2BpKxRC6OkS7fZbMqaZv0am7EUaFonHeARBt3YaWQ8ryWnNmcARH%2BH2XJuy6KABoxQ%2BiaqHtJSlq6MJBG568KCLf2H%2BZvNG8E8LwljfvFZusAswwPl1BK7OJCyB3PUtRVFwqKNJ1iRQ81HcxA81wc5qdLoiJMpZ134e0rN%2Fekux50C%2FzmE8IKNYVZ9tmfvGCCJwFtVzOzn25hn%2BDu9DsbU%2B5xWyxmAMfK8DqrvldFtQh1pqf8d4KiKnYGLY8iYtWEddXp4CgoLtDkkQkAvxuu9D5qLISZS%2FPjMjGJdlnbdg9FCk44Z2gHu8NYZoNlE3qg5MDtTquAWQK9UxAYotoadDPQyh5dZIiEpWqo4N9ciB3dsaPXJDjStvbpNkwqkEDrB%2FZ7sXmdMp%2FeSsn9FUrmglFvuYvDVttDk1pvbzFLFjNUBdXlYekpHr2r%2FBGNuw7O%2BVRN2XDc1C%2FDA6AgMbvfIapH0s%2Bah%2Bm0X1BlbY6Nsut90UL4U1Qzki0ksmuWDYlRWOtV2MU2P%2Fl8D%2ByMN2kyb0GOqUBFpnJnq1QcUVIHpxNNb%2FRfdlYbf8I7GkhDjpUAUnsnUuW1GKtsdihH06tLj0nz2ruOGD3KbgjaML6BgDwH7RKIqpuXiM885dFV2tl%2B%2FdzZBtqoPIPkS5ZIgyP%2BsTDGe7gOCE%2BDijJnKIA4n6%2B%2Fb%2FXHnOWZeiBtP%2Fsspk97wK8SB%2BjK7%2FlyYiFRoiECAp2VJlE0l7luXkfm0s%2BhV065bkWNt3qoyRU&X-Amz-Signature=891f73c71a813440512798ce515eb7e084ecd66f863a0eab281953b83ca3b022&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TNQNVM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCy%2FApai4Sf9tnaHpPYdp%2BT6zNgEWciugzLhFl2Hquf%2FgIgdLlenMQ%2FGzfcrQpeIUH9DZI1eg%2FtkuhGRz12ApdolQIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNmiiE7C2cw2vwlZACrcAyzxe9r4EDRqe5lZJgygqwyUl9w7wrnDqsW6ztXn3rjP7v5X1BqtPk35Upmqi%2Bttbqz0a15VrU9t1%2FEdumD3SFpW3709DNbHBuEaVfXx2VT9o%2BpKxRC6OkS7fZbMqaZv0am7EUaFonHeARBt3YaWQ8ryWnNmcARH%2BH2XJuy6KABoxQ%2BiaqHtJSlq6MJBG568KCLf2H%2BZvNG8E8LwljfvFZusAswwPl1BK7OJCyB3PUtRVFwqKNJ1iRQ81HcxA81wc5qdLoiJMpZ134e0rN%2Fekux50C%2FzmE8IKNYVZ9tmfvGCCJwFtVzOzn25hn%2BDu9DsbU%2B5xWyxmAMfK8DqrvldFtQh1pqf8d4KiKnYGLY8iYtWEddXp4CgoLtDkkQkAvxuu9D5qLISZS%2FPjMjGJdlnbdg9FCk44Z2gHu8NYZoNlE3qg5MDtTquAWQK9UxAYotoadDPQyh5dZIiEpWqo4N9ciB3dsaPXJDjStvbpNkwqkEDrB%2FZ7sXmdMp%2FeSsn9FUrmglFvuYvDVttDk1pvbzFLFjNUBdXlYekpHr2r%2FBGNuw7O%2BVRN2XDc1C%2FDA6AgMbvfIapH0s%2Bah%2Bm0X1BlbY6Nsut90UL4U1Qzki0ksmuWDYlRWOtV2MU2P%2Fl8D%2ByMN2kyb0GOqUBFpnJnq1QcUVIHpxNNb%2FRfdlYbf8I7GkhDjpUAUnsnUuW1GKtsdihH06tLj0nz2ruOGD3KbgjaML6BgDwH7RKIqpuXiM885dFV2tl%2B%2FdzZBtqoPIPkS5ZIgyP%2BsTDGe7gOCE%2BDijJnKIA4n6%2B%2Fb%2FXHnOWZeiBtP%2Fsspk97wK8SB%2BjK7%2FlyYiFRoiECAp2VJlE0l7luXkfm0s%2BhV065bkWNt3qoyRU&X-Amz-Signature=738e675f4d37194ac33b549aa3ae3bb6ea7c7dbd7a931550824bfb4ce881bdf3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TNQNVM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCy%2FApai4Sf9tnaHpPYdp%2BT6zNgEWciugzLhFl2Hquf%2FgIgdLlenMQ%2FGzfcrQpeIUH9DZI1eg%2FtkuhGRz12ApdolQIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNmiiE7C2cw2vwlZACrcAyzxe9r4EDRqe5lZJgygqwyUl9w7wrnDqsW6ztXn3rjP7v5X1BqtPk35Upmqi%2Bttbqz0a15VrU9t1%2FEdumD3SFpW3709DNbHBuEaVfXx2VT9o%2BpKxRC6OkS7fZbMqaZv0am7EUaFonHeARBt3YaWQ8ryWnNmcARH%2BH2XJuy6KABoxQ%2BiaqHtJSlq6MJBG568KCLf2H%2BZvNG8E8LwljfvFZusAswwPl1BK7OJCyB3PUtRVFwqKNJ1iRQ81HcxA81wc5qdLoiJMpZ134e0rN%2Fekux50C%2FzmE8IKNYVZ9tmfvGCCJwFtVzOzn25hn%2BDu9DsbU%2B5xWyxmAMfK8DqrvldFtQh1pqf8d4KiKnYGLY8iYtWEddXp4CgoLtDkkQkAvxuu9D5qLISZS%2FPjMjGJdlnbdg9FCk44Z2gHu8NYZoNlE3qg5MDtTquAWQK9UxAYotoadDPQyh5dZIiEpWqo4N9ciB3dsaPXJDjStvbpNkwqkEDrB%2FZ7sXmdMp%2FeSsn9FUrmglFvuYvDVttDk1pvbzFLFjNUBdXlYekpHr2r%2FBGNuw7O%2BVRN2XDc1C%2FDA6AgMbvfIapH0s%2Bah%2Bm0X1BlbY6Nsut90UL4U1Qzki0ksmuWDYlRWOtV2MU2P%2Fl8D%2ByMN2kyb0GOqUBFpnJnq1QcUVIHpxNNb%2FRfdlYbf8I7GkhDjpUAUnsnUuW1GKtsdihH06tLj0nz2ruOGD3KbgjaML6BgDwH7RKIqpuXiM885dFV2tl%2B%2FdzZBtqoPIPkS5ZIgyP%2BsTDGe7gOCE%2BDijJnKIA4n6%2B%2Fb%2FXHnOWZeiBtP%2Fsspk97wK8SB%2BjK7%2FlyYiFRoiECAp2VJlE0l7luXkfm0s%2BhV065bkWNt3qoyRU&X-Amz-Signature=9b4318c89b3bd2ac524d4a5946390b4d774c8c22d91168270e2baeadb476cfe0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TNQNVM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCy%2FApai4Sf9tnaHpPYdp%2BT6zNgEWciugzLhFl2Hquf%2FgIgdLlenMQ%2FGzfcrQpeIUH9DZI1eg%2FtkuhGRz12ApdolQIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNmiiE7C2cw2vwlZACrcAyzxe9r4EDRqe5lZJgygqwyUl9w7wrnDqsW6ztXn3rjP7v5X1BqtPk35Upmqi%2Bttbqz0a15VrU9t1%2FEdumD3SFpW3709DNbHBuEaVfXx2VT9o%2BpKxRC6OkS7fZbMqaZv0am7EUaFonHeARBt3YaWQ8ryWnNmcARH%2BH2XJuy6KABoxQ%2BiaqHtJSlq6MJBG568KCLf2H%2BZvNG8E8LwljfvFZusAswwPl1BK7OJCyB3PUtRVFwqKNJ1iRQ81HcxA81wc5qdLoiJMpZ134e0rN%2Fekux50C%2FzmE8IKNYVZ9tmfvGCCJwFtVzOzn25hn%2BDu9DsbU%2B5xWyxmAMfK8DqrvldFtQh1pqf8d4KiKnYGLY8iYtWEddXp4CgoLtDkkQkAvxuu9D5qLISZS%2FPjMjGJdlnbdg9FCk44Z2gHu8NYZoNlE3qg5MDtTquAWQK9UxAYotoadDPQyh5dZIiEpWqo4N9ciB3dsaPXJDjStvbpNkwqkEDrB%2FZ7sXmdMp%2FeSsn9FUrmglFvuYvDVttDk1pvbzFLFjNUBdXlYekpHr2r%2FBGNuw7O%2BVRN2XDc1C%2FDA6AgMbvfIapH0s%2Bah%2Bm0X1BlbY6Nsut90UL4U1Qzki0ksmuWDYlRWOtV2MU2P%2Fl8D%2ByMN2kyb0GOqUBFpnJnq1QcUVIHpxNNb%2FRfdlYbf8I7GkhDjpUAUnsnUuW1GKtsdihH06tLj0nz2ruOGD3KbgjaML6BgDwH7RKIqpuXiM885dFV2tl%2B%2FdzZBtqoPIPkS5ZIgyP%2BsTDGe7gOCE%2BDijJnKIA4n6%2B%2Fb%2FXHnOWZeiBtP%2Fsspk97wK8SB%2BjK7%2FlyYiFRoiECAp2VJlE0l7luXkfm0s%2BhV065bkWNt3qoyRU&X-Amz-Signature=d712994613fa77ecdce0ee74d30b76f3a1945a85b1fd5190ec0c350daea88e16&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TNQNVM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCy%2FApai4Sf9tnaHpPYdp%2BT6zNgEWciugzLhFl2Hquf%2FgIgdLlenMQ%2FGzfcrQpeIUH9DZI1eg%2FtkuhGRz12ApdolQIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNmiiE7C2cw2vwlZACrcAyzxe9r4EDRqe5lZJgygqwyUl9w7wrnDqsW6ztXn3rjP7v5X1BqtPk35Upmqi%2Bttbqz0a15VrU9t1%2FEdumD3SFpW3709DNbHBuEaVfXx2VT9o%2BpKxRC6OkS7fZbMqaZv0am7EUaFonHeARBt3YaWQ8ryWnNmcARH%2BH2XJuy6KABoxQ%2BiaqHtJSlq6MJBG568KCLf2H%2BZvNG8E8LwljfvFZusAswwPl1BK7OJCyB3PUtRVFwqKNJ1iRQ81HcxA81wc5qdLoiJMpZ134e0rN%2Fekux50C%2FzmE8IKNYVZ9tmfvGCCJwFtVzOzn25hn%2BDu9DsbU%2B5xWyxmAMfK8DqrvldFtQh1pqf8d4KiKnYGLY8iYtWEddXp4CgoLtDkkQkAvxuu9D5qLISZS%2FPjMjGJdlnbdg9FCk44Z2gHu8NYZoNlE3qg5MDtTquAWQK9UxAYotoadDPQyh5dZIiEpWqo4N9ciB3dsaPXJDjStvbpNkwqkEDrB%2FZ7sXmdMp%2FeSsn9FUrmglFvuYvDVttDk1pvbzFLFjNUBdXlYekpHr2r%2FBGNuw7O%2BVRN2XDc1C%2FDA6AgMbvfIapH0s%2Bah%2Bm0X1BlbY6Nsut90UL4U1Qzki0ksmuWDYlRWOtV2MU2P%2Fl8D%2ByMN2kyb0GOqUBFpnJnq1QcUVIHpxNNb%2FRfdlYbf8I7GkhDjpUAUnsnUuW1GKtsdihH06tLj0nz2ruOGD3KbgjaML6BgDwH7RKIqpuXiM885dFV2tl%2B%2FdzZBtqoPIPkS5ZIgyP%2BsTDGe7gOCE%2BDijJnKIA4n6%2B%2Fb%2FXHnOWZeiBtP%2Fsspk97wK8SB%2BjK7%2FlyYiFRoiECAp2VJlE0l7luXkfm0s%2BhV065bkWNt3qoyRU&X-Amz-Signature=767e11c84d23051d7fd206fe650478d05152346e12f4e4561520bbba674c92cb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TNQNVM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCy%2FApai4Sf9tnaHpPYdp%2BT6zNgEWciugzLhFl2Hquf%2FgIgdLlenMQ%2FGzfcrQpeIUH9DZI1eg%2FtkuhGRz12ApdolQIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNmiiE7C2cw2vwlZACrcAyzxe9r4EDRqe5lZJgygqwyUl9w7wrnDqsW6ztXn3rjP7v5X1BqtPk35Upmqi%2Bttbqz0a15VrU9t1%2FEdumD3SFpW3709DNbHBuEaVfXx2VT9o%2BpKxRC6OkS7fZbMqaZv0am7EUaFonHeARBt3YaWQ8ryWnNmcARH%2BH2XJuy6KABoxQ%2BiaqHtJSlq6MJBG568KCLf2H%2BZvNG8E8LwljfvFZusAswwPl1BK7OJCyB3PUtRVFwqKNJ1iRQ81HcxA81wc5qdLoiJMpZ134e0rN%2Fekux50C%2FzmE8IKNYVZ9tmfvGCCJwFtVzOzn25hn%2BDu9DsbU%2B5xWyxmAMfK8DqrvldFtQh1pqf8d4KiKnYGLY8iYtWEddXp4CgoLtDkkQkAvxuu9D5qLISZS%2FPjMjGJdlnbdg9FCk44Z2gHu8NYZoNlE3qg5MDtTquAWQK9UxAYotoadDPQyh5dZIiEpWqo4N9ciB3dsaPXJDjStvbpNkwqkEDrB%2FZ7sXmdMp%2FeSsn9FUrmglFvuYvDVttDk1pvbzFLFjNUBdXlYekpHr2r%2FBGNuw7O%2BVRN2XDc1C%2FDA6AgMbvfIapH0s%2Bah%2Bm0X1BlbY6Nsut90UL4U1Qzki0ksmuWDYlRWOtV2MU2P%2Fl8D%2ByMN2kyb0GOqUBFpnJnq1QcUVIHpxNNb%2FRfdlYbf8I7GkhDjpUAUnsnUuW1GKtsdihH06tLj0nz2ruOGD3KbgjaML6BgDwH7RKIqpuXiM885dFV2tl%2B%2FdzZBtqoPIPkS5ZIgyP%2BsTDGe7gOCE%2BDijJnKIA4n6%2B%2Fb%2FXHnOWZeiBtP%2Fsspk97wK8SB%2BjK7%2FlyYiFRoiECAp2VJlE0l7luXkfm0s%2BhV065bkWNt3qoyRU&X-Amz-Signature=f0fca64b5e609c6ee628c18314cf7597fe7332df85f6aaae6ab95fc91c8ae9af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TNQNVM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCy%2FApai4Sf9tnaHpPYdp%2BT6zNgEWciugzLhFl2Hquf%2FgIgdLlenMQ%2FGzfcrQpeIUH9DZI1eg%2FtkuhGRz12ApdolQIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNmiiE7C2cw2vwlZACrcAyzxe9r4EDRqe5lZJgygqwyUl9w7wrnDqsW6ztXn3rjP7v5X1BqtPk35Upmqi%2Bttbqz0a15VrU9t1%2FEdumD3SFpW3709DNbHBuEaVfXx2VT9o%2BpKxRC6OkS7fZbMqaZv0am7EUaFonHeARBt3YaWQ8ryWnNmcARH%2BH2XJuy6KABoxQ%2BiaqHtJSlq6MJBG568KCLf2H%2BZvNG8E8LwljfvFZusAswwPl1BK7OJCyB3PUtRVFwqKNJ1iRQ81HcxA81wc5qdLoiJMpZ134e0rN%2Fekux50C%2FzmE8IKNYVZ9tmfvGCCJwFtVzOzn25hn%2BDu9DsbU%2B5xWyxmAMfK8DqrvldFtQh1pqf8d4KiKnYGLY8iYtWEddXp4CgoLtDkkQkAvxuu9D5qLISZS%2FPjMjGJdlnbdg9FCk44Z2gHu8NYZoNlE3qg5MDtTquAWQK9UxAYotoadDPQyh5dZIiEpWqo4N9ciB3dsaPXJDjStvbpNkwqkEDrB%2FZ7sXmdMp%2FeSsn9FUrmglFvuYvDVttDk1pvbzFLFjNUBdXlYekpHr2r%2FBGNuw7O%2BVRN2XDc1C%2FDA6AgMbvfIapH0s%2Bah%2Bm0X1BlbY6Nsut90UL4U1Qzki0ksmuWDYlRWOtV2MU2P%2Fl8D%2ByMN2kyb0GOqUBFpnJnq1QcUVIHpxNNb%2FRfdlYbf8I7GkhDjpUAUnsnUuW1GKtsdihH06tLj0nz2ruOGD3KbgjaML6BgDwH7RKIqpuXiM885dFV2tl%2B%2FdzZBtqoPIPkS5ZIgyP%2BsTDGe7gOCE%2BDijJnKIA4n6%2B%2Fb%2FXHnOWZeiBtP%2Fsspk97wK8SB%2BjK7%2FlyYiFRoiECAp2VJlE0l7luXkfm0s%2BhV065bkWNt3qoyRU&X-Amz-Signature=ba89adbc85c9f493657e251b9c479892c539075feff73a3131ce2fccc69214d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

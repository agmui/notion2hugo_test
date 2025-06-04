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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYB75DT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIC0yo4MBBpI%2BdQFN8ONAfgAyJyVx3RV0tz0HaIUf%2FurqAiEAmIHl6TpDaXjj61qbr7sAtGwnowI9oFOdClSbgyO09IAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDO%2Fc0RUE5rWEe2SZkSrcA2lKbQW0tkmsah2E3agfvutF9Kf6%2BCwoK2ssOcGGfSqNzQ4yhb8GKZ4Tpc%2F8m1bgg0C84TlaEtGyYZfLznhKDgNWVYRBSOk3bOPu8OUqKprY7QmHnXE1WH47twlz5icixqeSfvxgzMm6fvQaaFNiF%2B30hcuKehBtQK0oLAwTcKnaV48jRNOH4o8tv3qNWXlGqqMcBxpAPJngbUENNZo4KB%2FdVOjfTkFj0eYgMdivRB75PbBIBp5HWQt%2Bn0ErutIbAE63xqErbSnMOPKuBYCRkKiV6Zv%2Bc644Tbn37KPDyVVlqSw2HNg3Hi76jCF9hIqNWkdAV0OLYD7byCVUqfanYVFvHGHOgRhBy0ntnO4ma2JBnR3faTuIUaWjNoow26S48AItOlPU59FmQhGsdnh5pdlR5Uxo7xO3sgZHqWdzevKci%2FyDlx2aICk54%2FtjrB6KM5pYZdKOp3miXHH8RDdXhrTxqktoxYINvp59klfVTENyaCjvE9n2JMLTVOHaiOtJW9uoiyA0wDJRB974lpAyKvsg8friiujk41IKHFasCs0e8LkZXLQawbc%2BIywbW0lb1upFLWIWKSFcSryqB0rS7kRDN0jwRIY95u%2FHiMWDbtGcibibmKUd0h4bkS3NMOPm%2F8EGOqUBmmY98cZhWCKDdi4BbdMgSrrpifN7BvsRxBhmXqEVEHqWPzLd1hVhCa3WyV3SD5pz%2FE3kV5jvsbTp1TuBS%2FldcxON3K4GTQH%2BtdhQktcIRl5jQgJ8loplG2Pmvm90BIhRC7KtWDuGWCk%2FH6i3Yp%2BcBG%2BDZkC7UJxf3Wr7Raax97W0V4toedc8XLDkEOG4glKCfBlM%2FdJtlEuM5sGsWPEAOGHgbgqN&X-Amz-Signature=560c53b1fe7facef62f5bd72de1494a0027a300b1573352d36614fe4a637eb37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYB75DT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIC0yo4MBBpI%2BdQFN8ONAfgAyJyVx3RV0tz0HaIUf%2FurqAiEAmIHl6TpDaXjj61qbr7sAtGwnowI9oFOdClSbgyO09IAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDO%2Fc0RUE5rWEe2SZkSrcA2lKbQW0tkmsah2E3agfvutF9Kf6%2BCwoK2ssOcGGfSqNzQ4yhb8GKZ4Tpc%2F8m1bgg0C84TlaEtGyYZfLznhKDgNWVYRBSOk3bOPu8OUqKprY7QmHnXE1WH47twlz5icixqeSfvxgzMm6fvQaaFNiF%2B30hcuKehBtQK0oLAwTcKnaV48jRNOH4o8tv3qNWXlGqqMcBxpAPJngbUENNZo4KB%2FdVOjfTkFj0eYgMdivRB75PbBIBp5HWQt%2Bn0ErutIbAE63xqErbSnMOPKuBYCRkKiV6Zv%2Bc644Tbn37KPDyVVlqSw2HNg3Hi76jCF9hIqNWkdAV0OLYD7byCVUqfanYVFvHGHOgRhBy0ntnO4ma2JBnR3faTuIUaWjNoow26S48AItOlPU59FmQhGsdnh5pdlR5Uxo7xO3sgZHqWdzevKci%2FyDlx2aICk54%2FtjrB6KM5pYZdKOp3miXHH8RDdXhrTxqktoxYINvp59klfVTENyaCjvE9n2JMLTVOHaiOtJW9uoiyA0wDJRB974lpAyKvsg8friiujk41IKHFasCs0e8LkZXLQawbc%2BIywbW0lb1upFLWIWKSFcSryqB0rS7kRDN0jwRIY95u%2FHiMWDbtGcibibmKUd0h4bkS3NMOPm%2F8EGOqUBmmY98cZhWCKDdi4BbdMgSrrpifN7BvsRxBhmXqEVEHqWPzLd1hVhCa3WyV3SD5pz%2FE3kV5jvsbTp1TuBS%2FldcxON3K4GTQH%2BtdhQktcIRl5jQgJ8loplG2Pmvm90BIhRC7KtWDuGWCk%2FH6i3Yp%2BcBG%2BDZkC7UJxf3Wr7Raax97W0V4toedc8XLDkEOG4glKCfBlM%2FdJtlEuM5sGsWPEAOGHgbgqN&X-Amz-Signature=cbb22fd71aead5d4affef3407799859aba0aae782281e0421a0b9b5555963949&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYB75DT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIC0yo4MBBpI%2BdQFN8ONAfgAyJyVx3RV0tz0HaIUf%2FurqAiEAmIHl6TpDaXjj61qbr7sAtGwnowI9oFOdClSbgyO09IAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDO%2Fc0RUE5rWEe2SZkSrcA2lKbQW0tkmsah2E3agfvutF9Kf6%2BCwoK2ssOcGGfSqNzQ4yhb8GKZ4Tpc%2F8m1bgg0C84TlaEtGyYZfLznhKDgNWVYRBSOk3bOPu8OUqKprY7QmHnXE1WH47twlz5icixqeSfvxgzMm6fvQaaFNiF%2B30hcuKehBtQK0oLAwTcKnaV48jRNOH4o8tv3qNWXlGqqMcBxpAPJngbUENNZo4KB%2FdVOjfTkFj0eYgMdivRB75PbBIBp5HWQt%2Bn0ErutIbAE63xqErbSnMOPKuBYCRkKiV6Zv%2Bc644Tbn37KPDyVVlqSw2HNg3Hi76jCF9hIqNWkdAV0OLYD7byCVUqfanYVFvHGHOgRhBy0ntnO4ma2JBnR3faTuIUaWjNoow26S48AItOlPU59FmQhGsdnh5pdlR5Uxo7xO3sgZHqWdzevKci%2FyDlx2aICk54%2FtjrB6KM5pYZdKOp3miXHH8RDdXhrTxqktoxYINvp59klfVTENyaCjvE9n2JMLTVOHaiOtJW9uoiyA0wDJRB974lpAyKvsg8friiujk41IKHFasCs0e8LkZXLQawbc%2BIywbW0lb1upFLWIWKSFcSryqB0rS7kRDN0jwRIY95u%2FHiMWDbtGcibibmKUd0h4bkS3NMOPm%2F8EGOqUBmmY98cZhWCKDdi4BbdMgSrrpifN7BvsRxBhmXqEVEHqWPzLd1hVhCa3WyV3SD5pz%2FE3kV5jvsbTp1TuBS%2FldcxON3K4GTQH%2BtdhQktcIRl5jQgJ8loplG2Pmvm90BIhRC7KtWDuGWCk%2FH6i3Yp%2BcBG%2BDZkC7UJxf3Wr7Raax97W0V4toedc8XLDkEOG4glKCfBlM%2FdJtlEuM5sGsWPEAOGHgbgqN&X-Amz-Signature=79a9426b5636942c0b74ccdd38bcfe98a8226b7987f73a47cb41323b425d442e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYB75DT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIC0yo4MBBpI%2BdQFN8ONAfgAyJyVx3RV0tz0HaIUf%2FurqAiEAmIHl6TpDaXjj61qbr7sAtGwnowI9oFOdClSbgyO09IAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDO%2Fc0RUE5rWEe2SZkSrcA2lKbQW0tkmsah2E3agfvutF9Kf6%2BCwoK2ssOcGGfSqNzQ4yhb8GKZ4Tpc%2F8m1bgg0C84TlaEtGyYZfLznhKDgNWVYRBSOk3bOPu8OUqKprY7QmHnXE1WH47twlz5icixqeSfvxgzMm6fvQaaFNiF%2B30hcuKehBtQK0oLAwTcKnaV48jRNOH4o8tv3qNWXlGqqMcBxpAPJngbUENNZo4KB%2FdVOjfTkFj0eYgMdivRB75PbBIBp5HWQt%2Bn0ErutIbAE63xqErbSnMOPKuBYCRkKiV6Zv%2Bc644Tbn37KPDyVVlqSw2HNg3Hi76jCF9hIqNWkdAV0OLYD7byCVUqfanYVFvHGHOgRhBy0ntnO4ma2JBnR3faTuIUaWjNoow26S48AItOlPU59FmQhGsdnh5pdlR5Uxo7xO3sgZHqWdzevKci%2FyDlx2aICk54%2FtjrB6KM5pYZdKOp3miXHH8RDdXhrTxqktoxYINvp59klfVTENyaCjvE9n2JMLTVOHaiOtJW9uoiyA0wDJRB974lpAyKvsg8friiujk41IKHFasCs0e8LkZXLQawbc%2BIywbW0lb1upFLWIWKSFcSryqB0rS7kRDN0jwRIY95u%2FHiMWDbtGcibibmKUd0h4bkS3NMOPm%2F8EGOqUBmmY98cZhWCKDdi4BbdMgSrrpifN7BvsRxBhmXqEVEHqWPzLd1hVhCa3WyV3SD5pz%2FE3kV5jvsbTp1TuBS%2FldcxON3K4GTQH%2BtdhQktcIRl5jQgJ8loplG2Pmvm90BIhRC7KtWDuGWCk%2FH6i3Yp%2BcBG%2BDZkC7UJxf3Wr7Raax97W0V4toedc8XLDkEOG4glKCfBlM%2FdJtlEuM5sGsWPEAOGHgbgqN&X-Amz-Signature=a97a5951480af6379ccf3d336e4f72bd4a51087753728c1d4bc63c9a107f06e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYB75DT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIC0yo4MBBpI%2BdQFN8ONAfgAyJyVx3RV0tz0HaIUf%2FurqAiEAmIHl6TpDaXjj61qbr7sAtGwnowI9oFOdClSbgyO09IAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDO%2Fc0RUE5rWEe2SZkSrcA2lKbQW0tkmsah2E3agfvutF9Kf6%2BCwoK2ssOcGGfSqNzQ4yhb8GKZ4Tpc%2F8m1bgg0C84TlaEtGyYZfLznhKDgNWVYRBSOk3bOPu8OUqKprY7QmHnXE1WH47twlz5icixqeSfvxgzMm6fvQaaFNiF%2B30hcuKehBtQK0oLAwTcKnaV48jRNOH4o8tv3qNWXlGqqMcBxpAPJngbUENNZo4KB%2FdVOjfTkFj0eYgMdivRB75PbBIBp5HWQt%2Bn0ErutIbAE63xqErbSnMOPKuBYCRkKiV6Zv%2Bc644Tbn37KPDyVVlqSw2HNg3Hi76jCF9hIqNWkdAV0OLYD7byCVUqfanYVFvHGHOgRhBy0ntnO4ma2JBnR3faTuIUaWjNoow26S48AItOlPU59FmQhGsdnh5pdlR5Uxo7xO3sgZHqWdzevKci%2FyDlx2aICk54%2FtjrB6KM5pYZdKOp3miXHH8RDdXhrTxqktoxYINvp59klfVTENyaCjvE9n2JMLTVOHaiOtJW9uoiyA0wDJRB974lpAyKvsg8friiujk41IKHFasCs0e8LkZXLQawbc%2BIywbW0lb1upFLWIWKSFcSryqB0rS7kRDN0jwRIY95u%2FHiMWDbtGcibibmKUd0h4bkS3NMOPm%2F8EGOqUBmmY98cZhWCKDdi4BbdMgSrrpifN7BvsRxBhmXqEVEHqWPzLd1hVhCa3WyV3SD5pz%2FE3kV5jvsbTp1TuBS%2FldcxON3K4GTQH%2BtdhQktcIRl5jQgJ8loplG2Pmvm90BIhRC7KtWDuGWCk%2FH6i3Yp%2BcBG%2BDZkC7UJxf3Wr7Raax97W0V4toedc8XLDkEOG4glKCfBlM%2FdJtlEuM5sGsWPEAOGHgbgqN&X-Amz-Signature=a45cbd203fbb456bdace79f6a861c272cf4107ab79f1c3c21fb2a5f418fc750f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYB75DT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIC0yo4MBBpI%2BdQFN8ONAfgAyJyVx3RV0tz0HaIUf%2FurqAiEAmIHl6TpDaXjj61qbr7sAtGwnowI9oFOdClSbgyO09IAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDO%2Fc0RUE5rWEe2SZkSrcA2lKbQW0tkmsah2E3agfvutF9Kf6%2BCwoK2ssOcGGfSqNzQ4yhb8GKZ4Tpc%2F8m1bgg0C84TlaEtGyYZfLznhKDgNWVYRBSOk3bOPu8OUqKprY7QmHnXE1WH47twlz5icixqeSfvxgzMm6fvQaaFNiF%2B30hcuKehBtQK0oLAwTcKnaV48jRNOH4o8tv3qNWXlGqqMcBxpAPJngbUENNZo4KB%2FdVOjfTkFj0eYgMdivRB75PbBIBp5HWQt%2Bn0ErutIbAE63xqErbSnMOPKuBYCRkKiV6Zv%2Bc644Tbn37KPDyVVlqSw2HNg3Hi76jCF9hIqNWkdAV0OLYD7byCVUqfanYVFvHGHOgRhBy0ntnO4ma2JBnR3faTuIUaWjNoow26S48AItOlPU59FmQhGsdnh5pdlR5Uxo7xO3sgZHqWdzevKci%2FyDlx2aICk54%2FtjrB6KM5pYZdKOp3miXHH8RDdXhrTxqktoxYINvp59klfVTENyaCjvE9n2JMLTVOHaiOtJW9uoiyA0wDJRB974lpAyKvsg8friiujk41IKHFasCs0e8LkZXLQawbc%2BIywbW0lb1upFLWIWKSFcSryqB0rS7kRDN0jwRIY95u%2FHiMWDbtGcibibmKUd0h4bkS3NMOPm%2F8EGOqUBmmY98cZhWCKDdi4BbdMgSrrpifN7BvsRxBhmXqEVEHqWPzLd1hVhCa3WyV3SD5pz%2FE3kV5jvsbTp1TuBS%2FldcxON3K4GTQH%2BtdhQktcIRl5jQgJ8loplG2Pmvm90BIhRC7KtWDuGWCk%2FH6i3Yp%2BcBG%2BDZkC7UJxf3Wr7Raax97W0V4toedc8XLDkEOG4glKCfBlM%2FdJtlEuM5sGsWPEAOGHgbgqN&X-Amz-Signature=14b55f45de3bb72220752e3cf48f59777298c4399c9f4c85ed2658978580d4bb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYB75DT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIC0yo4MBBpI%2BdQFN8ONAfgAyJyVx3RV0tz0HaIUf%2FurqAiEAmIHl6TpDaXjj61qbr7sAtGwnowI9oFOdClSbgyO09IAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDO%2Fc0RUE5rWEe2SZkSrcA2lKbQW0tkmsah2E3agfvutF9Kf6%2BCwoK2ssOcGGfSqNzQ4yhb8GKZ4Tpc%2F8m1bgg0C84TlaEtGyYZfLznhKDgNWVYRBSOk3bOPu8OUqKprY7QmHnXE1WH47twlz5icixqeSfvxgzMm6fvQaaFNiF%2B30hcuKehBtQK0oLAwTcKnaV48jRNOH4o8tv3qNWXlGqqMcBxpAPJngbUENNZo4KB%2FdVOjfTkFj0eYgMdivRB75PbBIBp5HWQt%2Bn0ErutIbAE63xqErbSnMOPKuBYCRkKiV6Zv%2Bc644Tbn37KPDyVVlqSw2HNg3Hi76jCF9hIqNWkdAV0OLYD7byCVUqfanYVFvHGHOgRhBy0ntnO4ma2JBnR3faTuIUaWjNoow26S48AItOlPU59FmQhGsdnh5pdlR5Uxo7xO3sgZHqWdzevKci%2FyDlx2aICk54%2FtjrB6KM5pYZdKOp3miXHH8RDdXhrTxqktoxYINvp59klfVTENyaCjvE9n2JMLTVOHaiOtJW9uoiyA0wDJRB974lpAyKvsg8friiujk41IKHFasCs0e8LkZXLQawbc%2BIywbW0lb1upFLWIWKSFcSryqB0rS7kRDN0jwRIY95u%2FHiMWDbtGcibibmKUd0h4bkS3NMOPm%2F8EGOqUBmmY98cZhWCKDdi4BbdMgSrrpifN7BvsRxBhmXqEVEHqWPzLd1hVhCa3WyV3SD5pz%2FE3kV5jvsbTp1TuBS%2FldcxON3K4GTQH%2BtdhQktcIRl5jQgJ8loplG2Pmvm90BIhRC7KtWDuGWCk%2FH6i3Yp%2BcBG%2BDZkC7UJxf3Wr7Raax97W0V4toedc8XLDkEOG4glKCfBlM%2FdJtlEuM5sGsWPEAOGHgbgqN&X-Amz-Signature=16762062a8cc3c9e6fb40369136af022f468348adf9e7a60356247cbad0d22d9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

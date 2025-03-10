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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHIDCPT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHWWzdqHsLyc0IO%2F0bjnjs26rNerQ9d%2BUF0A7RVU4YtLAiBIEd5bEizR%2FXdEUdGsdg%2FaeBU2wkelAdIPXzwCxnxRlSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYF1z4FBwFCtBFd5gKtwDta7C%2B%2FKuUSoE6Ft95TTdbswHDxXY6VVCYCm4BWpeQdCm8Vcp2dugHqF1UIta2wX%2F1NWea75AfVWUYOGk8JUpFIf43srfqSYHVPHHtPS9EC9XS1pdAGngV8TBPpd58Zdv%2BDCTItCpfhBpwUKY6GjduXKVaKiOeHoM4YGSQu5eFG%2FKuAyNGWBLznEa2f1GNmsbrzUY5vklH%2Fyhe6rjDtM1oRTO99PKClINn7M6WaPChFIHHOoMhx0aTMcvBTJQSE%2FfwVzqyY%2Fz%2Ff9BIbM0NHivuasblhctxNc6LCBOk%2BRptwZkY8O5YmnG7Ma6DPyUilIqr1ppt07DkxdFGdb2TolAJYIJH%2B6blCy3nuY%2BKw8nU5RJc0MLBianaiGbkOjxnj4q3lAXx4gxMPET9S3JXLft3YWsSIqxdNAhsYcT6QQEz2j5%2Fl5SoAQ9S8bWmQPCscc0PoWsV5f4sw1KskQmjD2wOJz6yKCaaBbFZkAhPhi8lsF0KQGQCPpHYgybGNeeOo%2Fno0tl0CaAcsMlhN02JQ3KBQauxTdKsHgja0qny%2BsWYqh7T%2ByUBxDt6rfcTbzEmkVv8fO33g3RV1hE%2B37tmKzs%2BJWqnLJLy1Ftq%2F8Pgs02qeH1AchdsbDjU%2BxOkj0wvou9vgY6pgFuFqPfB245fwNlb3QG9y4mTEgO5ptPqt%2FYUvRJQeCZN%2FXiMi8snnswEgZVg2QFPItBX5KF1oJdROTqwLEvA%2Be20ambrCYsS2x2cnyLCjeAUj0gqZU7MXZdhr1wWOqlJD9UtAKe4Du2rTLLyDlIDbhFP10ljejpDJKshTckE4tCBTQGaKkYExDblI9%2BM1HDC2uBWZIW5gVh69UDqIevuV8Zb2DuXvEs&X-Amz-Signature=6caf0bfa4d21ed230948265701f80734f6912400a36d70bf7298283e73a1c84e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHIDCPT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHWWzdqHsLyc0IO%2F0bjnjs26rNerQ9d%2BUF0A7RVU4YtLAiBIEd5bEizR%2FXdEUdGsdg%2FaeBU2wkelAdIPXzwCxnxRlSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYF1z4FBwFCtBFd5gKtwDta7C%2B%2FKuUSoE6Ft95TTdbswHDxXY6VVCYCm4BWpeQdCm8Vcp2dugHqF1UIta2wX%2F1NWea75AfVWUYOGk8JUpFIf43srfqSYHVPHHtPS9EC9XS1pdAGngV8TBPpd58Zdv%2BDCTItCpfhBpwUKY6GjduXKVaKiOeHoM4YGSQu5eFG%2FKuAyNGWBLznEa2f1GNmsbrzUY5vklH%2Fyhe6rjDtM1oRTO99PKClINn7M6WaPChFIHHOoMhx0aTMcvBTJQSE%2FfwVzqyY%2Fz%2Ff9BIbM0NHivuasblhctxNc6LCBOk%2BRptwZkY8O5YmnG7Ma6DPyUilIqr1ppt07DkxdFGdb2TolAJYIJH%2B6blCy3nuY%2BKw8nU5RJc0MLBianaiGbkOjxnj4q3lAXx4gxMPET9S3JXLft3YWsSIqxdNAhsYcT6QQEz2j5%2Fl5SoAQ9S8bWmQPCscc0PoWsV5f4sw1KskQmjD2wOJz6yKCaaBbFZkAhPhi8lsF0KQGQCPpHYgybGNeeOo%2Fno0tl0CaAcsMlhN02JQ3KBQauxTdKsHgja0qny%2BsWYqh7T%2ByUBxDt6rfcTbzEmkVv8fO33g3RV1hE%2B37tmKzs%2BJWqnLJLy1Ftq%2F8Pgs02qeH1AchdsbDjU%2BxOkj0wvou9vgY6pgFuFqPfB245fwNlb3QG9y4mTEgO5ptPqt%2FYUvRJQeCZN%2FXiMi8snnswEgZVg2QFPItBX5KF1oJdROTqwLEvA%2Be20ambrCYsS2x2cnyLCjeAUj0gqZU7MXZdhr1wWOqlJD9UtAKe4Du2rTLLyDlIDbhFP10ljejpDJKshTckE4tCBTQGaKkYExDblI9%2BM1HDC2uBWZIW5gVh69UDqIevuV8Zb2DuXvEs&X-Amz-Signature=c6172822e6e5ad9dd4501dccfc4d8695cbcb0e3a99d46b335f55baa83b70a34b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHIDCPT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHWWzdqHsLyc0IO%2F0bjnjs26rNerQ9d%2BUF0A7RVU4YtLAiBIEd5bEizR%2FXdEUdGsdg%2FaeBU2wkelAdIPXzwCxnxRlSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYF1z4FBwFCtBFd5gKtwDta7C%2B%2FKuUSoE6Ft95TTdbswHDxXY6VVCYCm4BWpeQdCm8Vcp2dugHqF1UIta2wX%2F1NWea75AfVWUYOGk8JUpFIf43srfqSYHVPHHtPS9EC9XS1pdAGngV8TBPpd58Zdv%2BDCTItCpfhBpwUKY6GjduXKVaKiOeHoM4YGSQu5eFG%2FKuAyNGWBLznEa2f1GNmsbrzUY5vklH%2Fyhe6rjDtM1oRTO99PKClINn7M6WaPChFIHHOoMhx0aTMcvBTJQSE%2FfwVzqyY%2Fz%2Ff9BIbM0NHivuasblhctxNc6LCBOk%2BRptwZkY8O5YmnG7Ma6DPyUilIqr1ppt07DkxdFGdb2TolAJYIJH%2B6blCy3nuY%2BKw8nU5RJc0MLBianaiGbkOjxnj4q3lAXx4gxMPET9S3JXLft3YWsSIqxdNAhsYcT6QQEz2j5%2Fl5SoAQ9S8bWmQPCscc0PoWsV5f4sw1KskQmjD2wOJz6yKCaaBbFZkAhPhi8lsF0KQGQCPpHYgybGNeeOo%2Fno0tl0CaAcsMlhN02JQ3KBQauxTdKsHgja0qny%2BsWYqh7T%2ByUBxDt6rfcTbzEmkVv8fO33g3RV1hE%2B37tmKzs%2BJWqnLJLy1Ftq%2F8Pgs02qeH1AchdsbDjU%2BxOkj0wvou9vgY6pgFuFqPfB245fwNlb3QG9y4mTEgO5ptPqt%2FYUvRJQeCZN%2FXiMi8snnswEgZVg2QFPItBX5KF1oJdROTqwLEvA%2Be20ambrCYsS2x2cnyLCjeAUj0gqZU7MXZdhr1wWOqlJD9UtAKe4Du2rTLLyDlIDbhFP10ljejpDJKshTckE4tCBTQGaKkYExDblI9%2BM1HDC2uBWZIW5gVh69UDqIevuV8Zb2DuXvEs&X-Amz-Signature=b0e600dd4fc11d2b8c3b330d81421118fe8f79ba5d11600459162ace795ccdb5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHIDCPT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHWWzdqHsLyc0IO%2F0bjnjs26rNerQ9d%2BUF0A7RVU4YtLAiBIEd5bEizR%2FXdEUdGsdg%2FaeBU2wkelAdIPXzwCxnxRlSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYF1z4FBwFCtBFd5gKtwDta7C%2B%2FKuUSoE6Ft95TTdbswHDxXY6VVCYCm4BWpeQdCm8Vcp2dugHqF1UIta2wX%2F1NWea75AfVWUYOGk8JUpFIf43srfqSYHVPHHtPS9EC9XS1pdAGngV8TBPpd58Zdv%2BDCTItCpfhBpwUKY6GjduXKVaKiOeHoM4YGSQu5eFG%2FKuAyNGWBLznEa2f1GNmsbrzUY5vklH%2Fyhe6rjDtM1oRTO99PKClINn7M6WaPChFIHHOoMhx0aTMcvBTJQSE%2FfwVzqyY%2Fz%2Ff9BIbM0NHivuasblhctxNc6LCBOk%2BRptwZkY8O5YmnG7Ma6DPyUilIqr1ppt07DkxdFGdb2TolAJYIJH%2B6blCy3nuY%2BKw8nU5RJc0MLBianaiGbkOjxnj4q3lAXx4gxMPET9S3JXLft3YWsSIqxdNAhsYcT6QQEz2j5%2Fl5SoAQ9S8bWmQPCscc0PoWsV5f4sw1KskQmjD2wOJz6yKCaaBbFZkAhPhi8lsF0KQGQCPpHYgybGNeeOo%2Fno0tl0CaAcsMlhN02JQ3KBQauxTdKsHgja0qny%2BsWYqh7T%2ByUBxDt6rfcTbzEmkVv8fO33g3RV1hE%2B37tmKzs%2BJWqnLJLy1Ftq%2F8Pgs02qeH1AchdsbDjU%2BxOkj0wvou9vgY6pgFuFqPfB245fwNlb3QG9y4mTEgO5ptPqt%2FYUvRJQeCZN%2FXiMi8snnswEgZVg2QFPItBX5KF1oJdROTqwLEvA%2Be20ambrCYsS2x2cnyLCjeAUj0gqZU7MXZdhr1wWOqlJD9UtAKe4Du2rTLLyDlIDbhFP10ljejpDJKshTckE4tCBTQGaKkYExDblI9%2BM1HDC2uBWZIW5gVh69UDqIevuV8Zb2DuXvEs&X-Amz-Signature=d74660b9ae737862102388d9adf7cb9847b84ad301f7d4de62460bac182ffad0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHIDCPT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHWWzdqHsLyc0IO%2F0bjnjs26rNerQ9d%2BUF0A7RVU4YtLAiBIEd5bEizR%2FXdEUdGsdg%2FaeBU2wkelAdIPXzwCxnxRlSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYF1z4FBwFCtBFd5gKtwDta7C%2B%2FKuUSoE6Ft95TTdbswHDxXY6VVCYCm4BWpeQdCm8Vcp2dugHqF1UIta2wX%2F1NWea75AfVWUYOGk8JUpFIf43srfqSYHVPHHtPS9EC9XS1pdAGngV8TBPpd58Zdv%2BDCTItCpfhBpwUKY6GjduXKVaKiOeHoM4YGSQu5eFG%2FKuAyNGWBLznEa2f1GNmsbrzUY5vklH%2Fyhe6rjDtM1oRTO99PKClINn7M6WaPChFIHHOoMhx0aTMcvBTJQSE%2FfwVzqyY%2Fz%2Ff9BIbM0NHivuasblhctxNc6LCBOk%2BRptwZkY8O5YmnG7Ma6DPyUilIqr1ppt07DkxdFGdb2TolAJYIJH%2B6blCy3nuY%2BKw8nU5RJc0MLBianaiGbkOjxnj4q3lAXx4gxMPET9S3JXLft3YWsSIqxdNAhsYcT6QQEz2j5%2Fl5SoAQ9S8bWmQPCscc0PoWsV5f4sw1KskQmjD2wOJz6yKCaaBbFZkAhPhi8lsF0KQGQCPpHYgybGNeeOo%2Fno0tl0CaAcsMlhN02JQ3KBQauxTdKsHgja0qny%2BsWYqh7T%2ByUBxDt6rfcTbzEmkVv8fO33g3RV1hE%2B37tmKzs%2BJWqnLJLy1Ftq%2F8Pgs02qeH1AchdsbDjU%2BxOkj0wvou9vgY6pgFuFqPfB245fwNlb3QG9y4mTEgO5ptPqt%2FYUvRJQeCZN%2FXiMi8snnswEgZVg2QFPItBX5KF1oJdROTqwLEvA%2Be20ambrCYsS2x2cnyLCjeAUj0gqZU7MXZdhr1wWOqlJD9UtAKe4Du2rTLLyDlIDbhFP10ljejpDJKshTckE4tCBTQGaKkYExDblI9%2BM1HDC2uBWZIW5gVh69UDqIevuV8Zb2DuXvEs&X-Amz-Signature=f5ebbe732bbbd2fcfa0b9b145564b46afe23f7577533ce86835ff340607c8cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHIDCPT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHWWzdqHsLyc0IO%2F0bjnjs26rNerQ9d%2BUF0A7RVU4YtLAiBIEd5bEizR%2FXdEUdGsdg%2FaeBU2wkelAdIPXzwCxnxRlSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYF1z4FBwFCtBFd5gKtwDta7C%2B%2FKuUSoE6Ft95TTdbswHDxXY6VVCYCm4BWpeQdCm8Vcp2dugHqF1UIta2wX%2F1NWea75AfVWUYOGk8JUpFIf43srfqSYHVPHHtPS9EC9XS1pdAGngV8TBPpd58Zdv%2BDCTItCpfhBpwUKY6GjduXKVaKiOeHoM4YGSQu5eFG%2FKuAyNGWBLznEa2f1GNmsbrzUY5vklH%2Fyhe6rjDtM1oRTO99PKClINn7M6WaPChFIHHOoMhx0aTMcvBTJQSE%2FfwVzqyY%2Fz%2Ff9BIbM0NHivuasblhctxNc6LCBOk%2BRptwZkY8O5YmnG7Ma6DPyUilIqr1ppt07DkxdFGdb2TolAJYIJH%2B6blCy3nuY%2BKw8nU5RJc0MLBianaiGbkOjxnj4q3lAXx4gxMPET9S3JXLft3YWsSIqxdNAhsYcT6QQEz2j5%2Fl5SoAQ9S8bWmQPCscc0PoWsV5f4sw1KskQmjD2wOJz6yKCaaBbFZkAhPhi8lsF0KQGQCPpHYgybGNeeOo%2Fno0tl0CaAcsMlhN02JQ3KBQauxTdKsHgja0qny%2BsWYqh7T%2ByUBxDt6rfcTbzEmkVv8fO33g3RV1hE%2B37tmKzs%2BJWqnLJLy1Ftq%2F8Pgs02qeH1AchdsbDjU%2BxOkj0wvou9vgY6pgFuFqPfB245fwNlb3QG9y4mTEgO5ptPqt%2FYUvRJQeCZN%2FXiMi8snnswEgZVg2QFPItBX5KF1oJdROTqwLEvA%2Be20ambrCYsS2x2cnyLCjeAUj0gqZU7MXZdhr1wWOqlJD9UtAKe4Du2rTLLyDlIDbhFP10ljejpDJKshTckE4tCBTQGaKkYExDblI9%2BM1HDC2uBWZIW5gVh69UDqIevuV8Zb2DuXvEs&X-Amz-Signature=c627f58259d2fd8a362faea6116c4c983771d6913e561e64b3b871679bab5816&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHIDCPT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHWWzdqHsLyc0IO%2F0bjnjs26rNerQ9d%2BUF0A7RVU4YtLAiBIEd5bEizR%2FXdEUdGsdg%2FaeBU2wkelAdIPXzwCxnxRlSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYF1z4FBwFCtBFd5gKtwDta7C%2B%2FKuUSoE6Ft95TTdbswHDxXY6VVCYCm4BWpeQdCm8Vcp2dugHqF1UIta2wX%2F1NWea75AfVWUYOGk8JUpFIf43srfqSYHVPHHtPS9EC9XS1pdAGngV8TBPpd58Zdv%2BDCTItCpfhBpwUKY6GjduXKVaKiOeHoM4YGSQu5eFG%2FKuAyNGWBLznEa2f1GNmsbrzUY5vklH%2Fyhe6rjDtM1oRTO99PKClINn7M6WaPChFIHHOoMhx0aTMcvBTJQSE%2FfwVzqyY%2Fz%2Ff9BIbM0NHivuasblhctxNc6LCBOk%2BRptwZkY8O5YmnG7Ma6DPyUilIqr1ppt07DkxdFGdb2TolAJYIJH%2B6blCy3nuY%2BKw8nU5RJc0MLBianaiGbkOjxnj4q3lAXx4gxMPET9S3JXLft3YWsSIqxdNAhsYcT6QQEz2j5%2Fl5SoAQ9S8bWmQPCscc0PoWsV5f4sw1KskQmjD2wOJz6yKCaaBbFZkAhPhi8lsF0KQGQCPpHYgybGNeeOo%2Fno0tl0CaAcsMlhN02JQ3KBQauxTdKsHgja0qny%2BsWYqh7T%2ByUBxDt6rfcTbzEmkVv8fO33g3RV1hE%2B37tmKzs%2BJWqnLJLy1Ftq%2F8Pgs02qeH1AchdsbDjU%2BxOkj0wvou9vgY6pgFuFqPfB245fwNlb3QG9y4mTEgO5ptPqt%2FYUvRJQeCZN%2FXiMi8snnswEgZVg2QFPItBX5KF1oJdROTqwLEvA%2Be20ambrCYsS2x2cnyLCjeAUj0gqZU7MXZdhr1wWOqlJD9UtAKe4Du2rTLLyDlIDbhFP10ljejpDJKshTckE4tCBTQGaKkYExDblI9%2BM1HDC2uBWZIW5gVh69UDqIevuV8Zb2DuXvEs&X-Amz-Signature=3f83a1238f268d1cf966fb26570752d422c50b7d1dee29ab785cdeca163a9b63&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

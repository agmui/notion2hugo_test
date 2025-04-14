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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OCW6ZY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Lob2tDgGIYIBfHF6%2BqWOibEU%2FIX8CpC3uwBQZ4kQ9gIgRZOdNRqOX6IrlWV7ZnbBb9GrOsR7VxPBXiW2%2Bt%2FG6nQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFCVIgbcAoQwKCU1MyrcAwUY0EgHHg651MIs1gEhxRASVCSm70uw8UnigH0GUzxF1h2X%2BKNHIlBufOE9ecks27eS%2BCnPPygLAFRO6og0eXjTDYDkvFNe9jvWhR9u6pa1Ba8fFYN4k677JISvqhq5vsWBhxgX2oP5oYP2T4FQut0OUGNp24%2FWmIlS4qzHb7GZbqp2ATQH%2BNgLIyf7PX%2BH2wlf2qnsOcuRA7n0iSABbhjWwt%2FkquZN2O0VwBLqtszznazVcH1AdwVBPrV9ktTQnR01vEjkgt8Q9QYpgvhBCd5jgGbeVXrW97uW%2BByC16lNo2xVnqN4riFpVabd7VQLtM5b7eD5dfEcX2apdBIcyBlbtPn%2FA%2BUxgdvMoWaaIBeu1ikV0nUhJ3umkd5GC0gzxQCvt1FFn8BcW7gxjy0PobzN4XQ3GgklwGcqdFNJUDKWQn3lY1HGYbVuRyb5bSk5fu8FMfDqZ3NaYXWLDSZIymfM57a0horcPlUFesXanfXlGbfJYKW7eogsZOxV2mAZN%2B8t0U20Ng%2B%2FPlLtACBCE9Fjapw4nXY5MLbVg6%2B5ua8AdN3S4jpyeMg%2F8e8VYOjKoRpLFUpvA2XENj0%2FatYK1mG1BMXMp6%2FX4cByvTfolZx%2BehEP0%2BRa2bp7cKkYMP%2Bn9L8GOqUBTID4Q7VnYmBVLPVuOppgtUA9RoP3EJOLUYREtCUSCq7XjCh%2B%2FoeYBCzxCvuXS24My0Lfifx5%2B4c0dDg3d8BDPrNj9%2Ffzc40I%2BSOKbRp5OTvXo%2BSfWyvBH88an%2BGPPb7qcGaYkIyzm8BGoc5GkPmZPJLTY2P0vQ7ErlIP28kvZXPHMjHRWKLswpiArHjLRO5Au6i9EL0T%2FOuKtu1CiReZR1so8k02&X-Amz-Signature=57c4a94502fad0a06ae71b1cb48508072e7e35142fc6102770ebaf186d77b8a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OCW6ZY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Lob2tDgGIYIBfHF6%2BqWOibEU%2FIX8CpC3uwBQZ4kQ9gIgRZOdNRqOX6IrlWV7ZnbBb9GrOsR7VxPBXiW2%2Bt%2FG6nQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFCVIgbcAoQwKCU1MyrcAwUY0EgHHg651MIs1gEhxRASVCSm70uw8UnigH0GUzxF1h2X%2BKNHIlBufOE9ecks27eS%2BCnPPygLAFRO6og0eXjTDYDkvFNe9jvWhR9u6pa1Ba8fFYN4k677JISvqhq5vsWBhxgX2oP5oYP2T4FQut0OUGNp24%2FWmIlS4qzHb7GZbqp2ATQH%2BNgLIyf7PX%2BH2wlf2qnsOcuRA7n0iSABbhjWwt%2FkquZN2O0VwBLqtszznazVcH1AdwVBPrV9ktTQnR01vEjkgt8Q9QYpgvhBCd5jgGbeVXrW97uW%2BByC16lNo2xVnqN4riFpVabd7VQLtM5b7eD5dfEcX2apdBIcyBlbtPn%2FA%2BUxgdvMoWaaIBeu1ikV0nUhJ3umkd5GC0gzxQCvt1FFn8BcW7gxjy0PobzN4XQ3GgklwGcqdFNJUDKWQn3lY1HGYbVuRyb5bSk5fu8FMfDqZ3NaYXWLDSZIymfM57a0horcPlUFesXanfXlGbfJYKW7eogsZOxV2mAZN%2B8t0U20Ng%2B%2FPlLtACBCE9Fjapw4nXY5MLbVg6%2B5ua8AdN3S4jpyeMg%2F8e8VYOjKoRpLFUpvA2XENj0%2FatYK1mG1BMXMp6%2FX4cByvTfolZx%2BehEP0%2BRa2bp7cKkYMP%2Bn9L8GOqUBTID4Q7VnYmBVLPVuOppgtUA9RoP3EJOLUYREtCUSCq7XjCh%2B%2FoeYBCzxCvuXS24My0Lfifx5%2B4c0dDg3d8BDPrNj9%2Ffzc40I%2BSOKbRp5OTvXo%2BSfWyvBH88an%2BGPPb7qcGaYkIyzm8BGoc5GkPmZPJLTY2P0vQ7ErlIP28kvZXPHMjHRWKLswpiArHjLRO5Au6i9EL0T%2FOuKtu1CiReZR1so8k02&X-Amz-Signature=f6543c31740f90f8539bd1d6c5a1431d4604c55e9e035646f745162d300204ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OCW6ZY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Lob2tDgGIYIBfHF6%2BqWOibEU%2FIX8CpC3uwBQZ4kQ9gIgRZOdNRqOX6IrlWV7ZnbBb9GrOsR7VxPBXiW2%2Bt%2FG6nQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFCVIgbcAoQwKCU1MyrcAwUY0EgHHg651MIs1gEhxRASVCSm70uw8UnigH0GUzxF1h2X%2BKNHIlBufOE9ecks27eS%2BCnPPygLAFRO6og0eXjTDYDkvFNe9jvWhR9u6pa1Ba8fFYN4k677JISvqhq5vsWBhxgX2oP5oYP2T4FQut0OUGNp24%2FWmIlS4qzHb7GZbqp2ATQH%2BNgLIyf7PX%2BH2wlf2qnsOcuRA7n0iSABbhjWwt%2FkquZN2O0VwBLqtszznazVcH1AdwVBPrV9ktTQnR01vEjkgt8Q9QYpgvhBCd5jgGbeVXrW97uW%2BByC16lNo2xVnqN4riFpVabd7VQLtM5b7eD5dfEcX2apdBIcyBlbtPn%2FA%2BUxgdvMoWaaIBeu1ikV0nUhJ3umkd5GC0gzxQCvt1FFn8BcW7gxjy0PobzN4XQ3GgklwGcqdFNJUDKWQn3lY1HGYbVuRyb5bSk5fu8FMfDqZ3NaYXWLDSZIymfM57a0horcPlUFesXanfXlGbfJYKW7eogsZOxV2mAZN%2B8t0U20Ng%2B%2FPlLtACBCE9Fjapw4nXY5MLbVg6%2B5ua8AdN3S4jpyeMg%2F8e8VYOjKoRpLFUpvA2XENj0%2FatYK1mG1BMXMp6%2FX4cByvTfolZx%2BehEP0%2BRa2bp7cKkYMP%2Bn9L8GOqUBTID4Q7VnYmBVLPVuOppgtUA9RoP3EJOLUYREtCUSCq7XjCh%2B%2FoeYBCzxCvuXS24My0Lfifx5%2B4c0dDg3d8BDPrNj9%2Ffzc40I%2BSOKbRp5OTvXo%2BSfWyvBH88an%2BGPPb7qcGaYkIyzm8BGoc5GkPmZPJLTY2P0vQ7ErlIP28kvZXPHMjHRWKLswpiArHjLRO5Au6i9EL0T%2FOuKtu1CiReZR1so8k02&X-Amz-Signature=1fffc49f398ef0cf0f0f14e8b786d69ac5f1ad40c02fd2e746320db1de93b02e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OCW6ZY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Lob2tDgGIYIBfHF6%2BqWOibEU%2FIX8CpC3uwBQZ4kQ9gIgRZOdNRqOX6IrlWV7ZnbBb9GrOsR7VxPBXiW2%2Bt%2FG6nQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFCVIgbcAoQwKCU1MyrcAwUY0EgHHg651MIs1gEhxRASVCSm70uw8UnigH0GUzxF1h2X%2BKNHIlBufOE9ecks27eS%2BCnPPygLAFRO6og0eXjTDYDkvFNe9jvWhR9u6pa1Ba8fFYN4k677JISvqhq5vsWBhxgX2oP5oYP2T4FQut0OUGNp24%2FWmIlS4qzHb7GZbqp2ATQH%2BNgLIyf7PX%2BH2wlf2qnsOcuRA7n0iSABbhjWwt%2FkquZN2O0VwBLqtszznazVcH1AdwVBPrV9ktTQnR01vEjkgt8Q9QYpgvhBCd5jgGbeVXrW97uW%2BByC16lNo2xVnqN4riFpVabd7VQLtM5b7eD5dfEcX2apdBIcyBlbtPn%2FA%2BUxgdvMoWaaIBeu1ikV0nUhJ3umkd5GC0gzxQCvt1FFn8BcW7gxjy0PobzN4XQ3GgklwGcqdFNJUDKWQn3lY1HGYbVuRyb5bSk5fu8FMfDqZ3NaYXWLDSZIymfM57a0horcPlUFesXanfXlGbfJYKW7eogsZOxV2mAZN%2B8t0U20Ng%2B%2FPlLtACBCE9Fjapw4nXY5MLbVg6%2B5ua8AdN3S4jpyeMg%2F8e8VYOjKoRpLFUpvA2XENj0%2FatYK1mG1BMXMp6%2FX4cByvTfolZx%2BehEP0%2BRa2bp7cKkYMP%2Bn9L8GOqUBTID4Q7VnYmBVLPVuOppgtUA9RoP3EJOLUYREtCUSCq7XjCh%2B%2FoeYBCzxCvuXS24My0Lfifx5%2B4c0dDg3d8BDPrNj9%2Ffzc40I%2BSOKbRp5OTvXo%2BSfWyvBH88an%2BGPPb7qcGaYkIyzm8BGoc5GkPmZPJLTY2P0vQ7ErlIP28kvZXPHMjHRWKLswpiArHjLRO5Au6i9EL0T%2FOuKtu1CiReZR1so8k02&X-Amz-Signature=fd0a243bb800643ebcfb9d04f19764c912e8dbf4592d884e48ea6088d26f821e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OCW6ZY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Lob2tDgGIYIBfHF6%2BqWOibEU%2FIX8CpC3uwBQZ4kQ9gIgRZOdNRqOX6IrlWV7ZnbBb9GrOsR7VxPBXiW2%2Bt%2FG6nQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFCVIgbcAoQwKCU1MyrcAwUY0EgHHg651MIs1gEhxRASVCSm70uw8UnigH0GUzxF1h2X%2BKNHIlBufOE9ecks27eS%2BCnPPygLAFRO6og0eXjTDYDkvFNe9jvWhR9u6pa1Ba8fFYN4k677JISvqhq5vsWBhxgX2oP5oYP2T4FQut0OUGNp24%2FWmIlS4qzHb7GZbqp2ATQH%2BNgLIyf7PX%2BH2wlf2qnsOcuRA7n0iSABbhjWwt%2FkquZN2O0VwBLqtszznazVcH1AdwVBPrV9ktTQnR01vEjkgt8Q9QYpgvhBCd5jgGbeVXrW97uW%2BByC16lNo2xVnqN4riFpVabd7VQLtM5b7eD5dfEcX2apdBIcyBlbtPn%2FA%2BUxgdvMoWaaIBeu1ikV0nUhJ3umkd5GC0gzxQCvt1FFn8BcW7gxjy0PobzN4XQ3GgklwGcqdFNJUDKWQn3lY1HGYbVuRyb5bSk5fu8FMfDqZ3NaYXWLDSZIymfM57a0horcPlUFesXanfXlGbfJYKW7eogsZOxV2mAZN%2B8t0U20Ng%2B%2FPlLtACBCE9Fjapw4nXY5MLbVg6%2B5ua8AdN3S4jpyeMg%2F8e8VYOjKoRpLFUpvA2XENj0%2FatYK1mG1BMXMp6%2FX4cByvTfolZx%2BehEP0%2BRa2bp7cKkYMP%2Bn9L8GOqUBTID4Q7VnYmBVLPVuOppgtUA9RoP3EJOLUYREtCUSCq7XjCh%2B%2FoeYBCzxCvuXS24My0Lfifx5%2B4c0dDg3d8BDPrNj9%2Ffzc40I%2BSOKbRp5OTvXo%2BSfWyvBH88an%2BGPPb7qcGaYkIyzm8BGoc5GkPmZPJLTY2P0vQ7ErlIP28kvZXPHMjHRWKLswpiArHjLRO5Au6i9EL0T%2FOuKtu1CiReZR1so8k02&X-Amz-Signature=dcffd9015a4078200d1519ce3ddbc2f5632f64ea35d1f89023a01249a5a773f3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OCW6ZY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Lob2tDgGIYIBfHF6%2BqWOibEU%2FIX8CpC3uwBQZ4kQ9gIgRZOdNRqOX6IrlWV7ZnbBb9GrOsR7VxPBXiW2%2Bt%2FG6nQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFCVIgbcAoQwKCU1MyrcAwUY0EgHHg651MIs1gEhxRASVCSm70uw8UnigH0GUzxF1h2X%2BKNHIlBufOE9ecks27eS%2BCnPPygLAFRO6og0eXjTDYDkvFNe9jvWhR9u6pa1Ba8fFYN4k677JISvqhq5vsWBhxgX2oP5oYP2T4FQut0OUGNp24%2FWmIlS4qzHb7GZbqp2ATQH%2BNgLIyf7PX%2BH2wlf2qnsOcuRA7n0iSABbhjWwt%2FkquZN2O0VwBLqtszznazVcH1AdwVBPrV9ktTQnR01vEjkgt8Q9QYpgvhBCd5jgGbeVXrW97uW%2BByC16lNo2xVnqN4riFpVabd7VQLtM5b7eD5dfEcX2apdBIcyBlbtPn%2FA%2BUxgdvMoWaaIBeu1ikV0nUhJ3umkd5GC0gzxQCvt1FFn8BcW7gxjy0PobzN4XQ3GgklwGcqdFNJUDKWQn3lY1HGYbVuRyb5bSk5fu8FMfDqZ3NaYXWLDSZIymfM57a0horcPlUFesXanfXlGbfJYKW7eogsZOxV2mAZN%2B8t0U20Ng%2B%2FPlLtACBCE9Fjapw4nXY5MLbVg6%2B5ua8AdN3S4jpyeMg%2F8e8VYOjKoRpLFUpvA2XENj0%2FatYK1mG1BMXMp6%2FX4cByvTfolZx%2BehEP0%2BRa2bp7cKkYMP%2Bn9L8GOqUBTID4Q7VnYmBVLPVuOppgtUA9RoP3EJOLUYREtCUSCq7XjCh%2B%2FoeYBCzxCvuXS24My0Lfifx5%2B4c0dDg3d8BDPrNj9%2Ffzc40I%2BSOKbRp5OTvXo%2BSfWyvBH88an%2BGPPb7qcGaYkIyzm8BGoc5GkPmZPJLTY2P0vQ7ErlIP28kvZXPHMjHRWKLswpiArHjLRO5Au6i9EL0T%2FOuKtu1CiReZR1so8k02&X-Amz-Signature=b981c3d74c56e1b403366d29279f4f1e89847167e1cb28bbd9c72266b49a53db&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OCW6ZY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Lob2tDgGIYIBfHF6%2BqWOibEU%2FIX8CpC3uwBQZ4kQ9gIgRZOdNRqOX6IrlWV7ZnbBb9GrOsR7VxPBXiW2%2Bt%2FG6nQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFCVIgbcAoQwKCU1MyrcAwUY0EgHHg651MIs1gEhxRASVCSm70uw8UnigH0GUzxF1h2X%2BKNHIlBufOE9ecks27eS%2BCnPPygLAFRO6og0eXjTDYDkvFNe9jvWhR9u6pa1Ba8fFYN4k677JISvqhq5vsWBhxgX2oP5oYP2T4FQut0OUGNp24%2FWmIlS4qzHb7GZbqp2ATQH%2BNgLIyf7PX%2BH2wlf2qnsOcuRA7n0iSABbhjWwt%2FkquZN2O0VwBLqtszznazVcH1AdwVBPrV9ktTQnR01vEjkgt8Q9QYpgvhBCd5jgGbeVXrW97uW%2BByC16lNo2xVnqN4riFpVabd7VQLtM5b7eD5dfEcX2apdBIcyBlbtPn%2FA%2BUxgdvMoWaaIBeu1ikV0nUhJ3umkd5GC0gzxQCvt1FFn8BcW7gxjy0PobzN4XQ3GgklwGcqdFNJUDKWQn3lY1HGYbVuRyb5bSk5fu8FMfDqZ3NaYXWLDSZIymfM57a0horcPlUFesXanfXlGbfJYKW7eogsZOxV2mAZN%2B8t0U20Ng%2B%2FPlLtACBCE9Fjapw4nXY5MLbVg6%2B5ua8AdN3S4jpyeMg%2F8e8VYOjKoRpLFUpvA2XENj0%2FatYK1mG1BMXMp6%2FX4cByvTfolZx%2BehEP0%2BRa2bp7cKkYMP%2Bn9L8GOqUBTID4Q7VnYmBVLPVuOppgtUA9RoP3EJOLUYREtCUSCq7XjCh%2B%2FoeYBCzxCvuXS24My0Lfifx5%2B4c0dDg3d8BDPrNj9%2Ffzc40I%2BSOKbRp5OTvXo%2BSfWyvBH88an%2BGPPb7qcGaYkIyzm8BGoc5GkPmZPJLTY2P0vQ7ErlIP28kvZXPHMjHRWKLswpiArHjLRO5Au6i9EL0T%2FOuKtu1CiReZR1so8k02&X-Amz-Signature=1313995c15b76c208d34a9d6b017fc51bc4023d62410a5d5178bae6c5dc9f3ff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

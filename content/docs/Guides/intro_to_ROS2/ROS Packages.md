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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UGMV2S%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCRTdQiTBT%2Brssn5tTso9eWXuFeDofPIrLbGxeaFpwwUQIgERijXO5iP5TPewLriPr1swQLQGITYOa7YwqgiRDe50sq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMIbFV8OzUK1JdTPzCrcA%2BHONVZjM2ETmMq6Q45tEs58MpnfqbTzhbgENWA8TEbUJKrt%2FSqZwHr6IOOnIc0c4%2FfYbwh9bj61m%2BQG0AOwpb4SSO9dzkDgkLFOgf6gN2CZnv6UVNA5VkoaLLTFPGm1BBrIHoTl9kfM%2F9BfO1No4i1jygWyhXJHtCM6S6wKBPctP7J7ypnDlc%2B7A5dEKKBKJW58Hh8m5bjP3fRJef7qZIBjRat7AdLHRFilflI3YWTDk2m0q4%2FAGDM2bmoywPm2vTlLbwD0rOVIGx0kd2cxW%2BOLRlmAiBF4fvg%2BZQsqdAREGZjbjSUzNUXyzizgiU5qS49EB%2FbWyo5f8as%2BWMNDAVJ0hrzqFdvpeXTa%2BlzxS0klHHo6t78RBlJ0x7S%2BfqjS50Lvm9mdv7QG1rrJh%2FEhxb8seLnuGUT6PA2TLGSBNthP8KOzUEjIyA%2BlWY%2BV9khYjjQxbyja3sNV1ZRrk%2FU7Itvw0B8bpzcnT64dzrJAALjVZ5%2BQwIC3jgP6gj438ImnEG8Nva%2BPXe%2FdI5FjW7hYQ8gtIuSW5wI1K%2FSmw5h5AwpqTa1xJ3%2FaHPvdw0NZdO1PYb9xEvhXCngArZBphQNu6rdO7od6NC108IRppW3bPf6AE7ARqURwduc%2B90n3MKmuxL0GOqUBv2j99ZpoPuyTSV79SyNSu88Y81b%2BSbYtmReRM5jZB7aZVZnxYWgPIVqxzDpJ63unz8nPs9urQrSknfJpP2zKETaUbSWn2vEXc2%2F3AoksHSQqXcCYDSbujSCa9GeUeofyuBp%2FiNe8%2BTaLkNHUHkEeorfsJOCQvuzTvt3nkmvnIyGxgZN62YNK5B92Qi%2BFbiNFeGTiuvuD2xzj4Yx1QjHRrnio7Rjy&X-Amz-Signature=d9ccf22f9b7ad89167600668b78316f2e6859dfb4ba276a0970a1180a9e3f21e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UGMV2S%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCRTdQiTBT%2Brssn5tTso9eWXuFeDofPIrLbGxeaFpwwUQIgERijXO5iP5TPewLriPr1swQLQGITYOa7YwqgiRDe50sq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMIbFV8OzUK1JdTPzCrcA%2BHONVZjM2ETmMq6Q45tEs58MpnfqbTzhbgENWA8TEbUJKrt%2FSqZwHr6IOOnIc0c4%2FfYbwh9bj61m%2BQG0AOwpb4SSO9dzkDgkLFOgf6gN2CZnv6UVNA5VkoaLLTFPGm1BBrIHoTl9kfM%2F9BfO1No4i1jygWyhXJHtCM6S6wKBPctP7J7ypnDlc%2B7A5dEKKBKJW58Hh8m5bjP3fRJef7qZIBjRat7AdLHRFilflI3YWTDk2m0q4%2FAGDM2bmoywPm2vTlLbwD0rOVIGx0kd2cxW%2BOLRlmAiBF4fvg%2BZQsqdAREGZjbjSUzNUXyzizgiU5qS49EB%2FbWyo5f8as%2BWMNDAVJ0hrzqFdvpeXTa%2BlzxS0klHHo6t78RBlJ0x7S%2BfqjS50Lvm9mdv7QG1rrJh%2FEhxb8seLnuGUT6PA2TLGSBNthP8KOzUEjIyA%2BlWY%2BV9khYjjQxbyja3sNV1ZRrk%2FU7Itvw0B8bpzcnT64dzrJAALjVZ5%2BQwIC3jgP6gj438ImnEG8Nva%2BPXe%2FdI5FjW7hYQ8gtIuSW5wI1K%2FSmw5h5AwpqTa1xJ3%2FaHPvdw0NZdO1PYb9xEvhXCngArZBphQNu6rdO7od6NC108IRppW3bPf6AE7ARqURwduc%2B90n3MKmuxL0GOqUBv2j99ZpoPuyTSV79SyNSu88Y81b%2BSbYtmReRM5jZB7aZVZnxYWgPIVqxzDpJ63unz8nPs9urQrSknfJpP2zKETaUbSWn2vEXc2%2F3AoksHSQqXcCYDSbujSCa9GeUeofyuBp%2FiNe8%2BTaLkNHUHkEeorfsJOCQvuzTvt3nkmvnIyGxgZN62YNK5B92Qi%2BFbiNFeGTiuvuD2xzj4Yx1QjHRrnio7Rjy&X-Amz-Signature=73f67c50b18c66f516fccbc8271215865b52b0046a1007b7bafeef10b7ddd34a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UGMV2S%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCRTdQiTBT%2Brssn5tTso9eWXuFeDofPIrLbGxeaFpwwUQIgERijXO5iP5TPewLriPr1swQLQGITYOa7YwqgiRDe50sq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMIbFV8OzUK1JdTPzCrcA%2BHONVZjM2ETmMq6Q45tEs58MpnfqbTzhbgENWA8TEbUJKrt%2FSqZwHr6IOOnIc0c4%2FfYbwh9bj61m%2BQG0AOwpb4SSO9dzkDgkLFOgf6gN2CZnv6UVNA5VkoaLLTFPGm1BBrIHoTl9kfM%2F9BfO1No4i1jygWyhXJHtCM6S6wKBPctP7J7ypnDlc%2B7A5dEKKBKJW58Hh8m5bjP3fRJef7qZIBjRat7AdLHRFilflI3YWTDk2m0q4%2FAGDM2bmoywPm2vTlLbwD0rOVIGx0kd2cxW%2BOLRlmAiBF4fvg%2BZQsqdAREGZjbjSUzNUXyzizgiU5qS49EB%2FbWyo5f8as%2BWMNDAVJ0hrzqFdvpeXTa%2BlzxS0klHHo6t78RBlJ0x7S%2BfqjS50Lvm9mdv7QG1rrJh%2FEhxb8seLnuGUT6PA2TLGSBNthP8KOzUEjIyA%2BlWY%2BV9khYjjQxbyja3sNV1ZRrk%2FU7Itvw0B8bpzcnT64dzrJAALjVZ5%2BQwIC3jgP6gj438ImnEG8Nva%2BPXe%2FdI5FjW7hYQ8gtIuSW5wI1K%2FSmw5h5AwpqTa1xJ3%2FaHPvdw0NZdO1PYb9xEvhXCngArZBphQNu6rdO7od6NC108IRppW3bPf6AE7ARqURwduc%2B90n3MKmuxL0GOqUBv2j99ZpoPuyTSV79SyNSu88Y81b%2BSbYtmReRM5jZB7aZVZnxYWgPIVqxzDpJ63unz8nPs9urQrSknfJpP2zKETaUbSWn2vEXc2%2F3AoksHSQqXcCYDSbujSCa9GeUeofyuBp%2FiNe8%2BTaLkNHUHkEeorfsJOCQvuzTvt3nkmvnIyGxgZN62YNK5B92Qi%2BFbiNFeGTiuvuD2xzj4Yx1QjHRrnio7Rjy&X-Amz-Signature=741591e05aae164b9261bd71f376e580322128868a654bc3e6a69cc6593344a3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UGMV2S%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCRTdQiTBT%2Brssn5tTso9eWXuFeDofPIrLbGxeaFpwwUQIgERijXO5iP5TPewLriPr1swQLQGITYOa7YwqgiRDe50sq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMIbFV8OzUK1JdTPzCrcA%2BHONVZjM2ETmMq6Q45tEs58MpnfqbTzhbgENWA8TEbUJKrt%2FSqZwHr6IOOnIc0c4%2FfYbwh9bj61m%2BQG0AOwpb4SSO9dzkDgkLFOgf6gN2CZnv6UVNA5VkoaLLTFPGm1BBrIHoTl9kfM%2F9BfO1No4i1jygWyhXJHtCM6S6wKBPctP7J7ypnDlc%2B7A5dEKKBKJW58Hh8m5bjP3fRJef7qZIBjRat7AdLHRFilflI3YWTDk2m0q4%2FAGDM2bmoywPm2vTlLbwD0rOVIGx0kd2cxW%2BOLRlmAiBF4fvg%2BZQsqdAREGZjbjSUzNUXyzizgiU5qS49EB%2FbWyo5f8as%2BWMNDAVJ0hrzqFdvpeXTa%2BlzxS0klHHo6t78RBlJ0x7S%2BfqjS50Lvm9mdv7QG1rrJh%2FEhxb8seLnuGUT6PA2TLGSBNthP8KOzUEjIyA%2BlWY%2BV9khYjjQxbyja3sNV1ZRrk%2FU7Itvw0B8bpzcnT64dzrJAALjVZ5%2BQwIC3jgP6gj438ImnEG8Nva%2BPXe%2FdI5FjW7hYQ8gtIuSW5wI1K%2FSmw5h5AwpqTa1xJ3%2FaHPvdw0NZdO1PYb9xEvhXCngArZBphQNu6rdO7od6NC108IRppW3bPf6AE7ARqURwduc%2B90n3MKmuxL0GOqUBv2j99ZpoPuyTSV79SyNSu88Y81b%2BSbYtmReRM5jZB7aZVZnxYWgPIVqxzDpJ63unz8nPs9urQrSknfJpP2zKETaUbSWn2vEXc2%2F3AoksHSQqXcCYDSbujSCa9GeUeofyuBp%2FiNe8%2BTaLkNHUHkEeorfsJOCQvuzTvt3nkmvnIyGxgZN62YNK5B92Qi%2BFbiNFeGTiuvuD2xzj4Yx1QjHRrnio7Rjy&X-Amz-Signature=5af8dfd4a825feb7bdb85ac4766db8477d877306673734d4eb6923c596d28234&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UGMV2S%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCRTdQiTBT%2Brssn5tTso9eWXuFeDofPIrLbGxeaFpwwUQIgERijXO5iP5TPewLriPr1swQLQGITYOa7YwqgiRDe50sq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMIbFV8OzUK1JdTPzCrcA%2BHONVZjM2ETmMq6Q45tEs58MpnfqbTzhbgENWA8TEbUJKrt%2FSqZwHr6IOOnIc0c4%2FfYbwh9bj61m%2BQG0AOwpb4SSO9dzkDgkLFOgf6gN2CZnv6UVNA5VkoaLLTFPGm1BBrIHoTl9kfM%2F9BfO1No4i1jygWyhXJHtCM6S6wKBPctP7J7ypnDlc%2B7A5dEKKBKJW58Hh8m5bjP3fRJef7qZIBjRat7AdLHRFilflI3YWTDk2m0q4%2FAGDM2bmoywPm2vTlLbwD0rOVIGx0kd2cxW%2BOLRlmAiBF4fvg%2BZQsqdAREGZjbjSUzNUXyzizgiU5qS49EB%2FbWyo5f8as%2BWMNDAVJ0hrzqFdvpeXTa%2BlzxS0klHHo6t78RBlJ0x7S%2BfqjS50Lvm9mdv7QG1rrJh%2FEhxb8seLnuGUT6PA2TLGSBNthP8KOzUEjIyA%2BlWY%2BV9khYjjQxbyja3sNV1ZRrk%2FU7Itvw0B8bpzcnT64dzrJAALjVZ5%2BQwIC3jgP6gj438ImnEG8Nva%2BPXe%2FdI5FjW7hYQ8gtIuSW5wI1K%2FSmw5h5AwpqTa1xJ3%2FaHPvdw0NZdO1PYb9xEvhXCngArZBphQNu6rdO7od6NC108IRppW3bPf6AE7ARqURwduc%2B90n3MKmuxL0GOqUBv2j99ZpoPuyTSV79SyNSu88Y81b%2BSbYtmReRM5jZB7aZVZnxYWgPIVqxzDpJ63unz8nPs9urQrSknfJpP2zKETaUbSWn2vEXc2%2F3AoksHSQqXcCYDSbujSCa9GeUeofyuBp%2FiNe8%2BTaLkNHUHkEeorfsJOCQvuzTvt3nkmvnIyGxgZN62YNK5B92Qi%2BFbiNFeGTiuvuD2xzj4Yx1QjHRrnio7Rjy&X-Amz-Signature=6857162ab6173dfbaceca7e6e2900b3a3a234bd53c8d79668283edb5a59b6350&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UGMV2S%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCRTdQiTBT%2Brssn5tTso9eWXuFeDofPIrLbGxeaFpwwUQIgERijXO5iP5TPewLriPr1swQLQGITYOa7YwqgiRDe50sq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMIbFV8OzUK1JdTPzCrcA%2BHONVZjM2ETmMq6Q45tEs58MpnfqbTzhbgENWA8TEbUJKrt%2FSqZwHr6IOOnIc0c4%2FfYbwh9bj61m%2BQG0AOwpb4SSO9dzkDgkLFOgf6gN2CZnv6UVNA5VkoaLLTFPGm1BBrIHoTl9kfM%2F9BfO1No4i1jygWyhXJHtCM6S6wKBPctP7J7ypnDlc%2B7A5dEKKBKJW58Hh8m5bjP3fRJef7qZIBjRat7AdLHRFilflI3YWTDk2m0q4%2FAGDM2bmoywPm2vTlLbwD0rOVIGx0kd2cxW%2BOLRlmAiBF4fvg%2BZQsqdAREGZjbjSUzNUXyzizgiU5qS49EB%2FbWyo5f8as%2BWMNDAVJ0hrzqFdvpeXTa%2BlzxS0klHHo6t78RBlJ0x7S%2BfqjS50Lvm9mdv7QG1rrJh%2FEhxb8seLnuGUT6PA2TLGSBNthP8KOzUEjIyA%2BlWY%2BV9khYjjQxbyja3sNV1ZRrk%2FU7Itvw0B8bpzcnT64dzrJAALjVZ5%2BQwIC3jgP6gj438ImnEG8Nva%2BPXe%2FdI5FjW7hYQ8gtIuSW5wI1K%2FSmw5h5AwpqTa1xJ3%2FaHPvdw0NZdO1PYb9xEvhXCngArZBphQNu6rdO7od6NC108IRppW3bPf6AE7ARqURwduc%2B90n3MKmuxL0GOqUBv2j99ZpoPuyTSV79SyNSu88Y81b%2BSbYtmReRM5jZB7aZVZnxYWgPIVqxzDpJ63unz8nPs9urQrSknfJpP2zKETaUbSWn2vEXc2%2F3AoksHSQqXcCYDSbujSCa9GeUeofyuBp%2FiNe8%2BTaLkNHUHkEeorfsJOCQvuzTvt3nkmvnIyGxgZN62YNK5B92Qi%2BFbiNFeGTiuvuD2xzj4Yx1QjHRrnio7Rjy&X-Amz-Signature=21f30ebd5cbbf888d1658f808c76fa1965bd73a6b6109a4171a7f1b59e65c690&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UGMV2S%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCRTdQiTBT%2Brssn5tTso9eWXuFeDofPIrLbGxeaFpwwUQIgERijXO5iP5TPewLriPr1swQLQGITYOa7YwqgiRDe50sq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMIbFV8OzUK1JdTPzCrcA%2BHONVZjM2ETmMq6Q45tEs58MpnfqbTzhbgENWA8TEbUJKrt%2FSqZwHr6IOOnIc0c4%2FfYbwh9bj61m%2BQG0AOwpb4SSO9dzkDgkLFOgf6gN2CZnv6UVNA5VkoaLLTFPGm1BBrIHoTl9kfM%2F9BfO1No4i1jygWyhXJHtCM6S6wKBPctP7J7ypnDlc%2B7A5dEKKBKJW58Hh8m5bjP3fRJef7qZIBjRat7AdLHRFilflI3YWTDk2m0q4%2FAGDM2bmoywPm2vTlLbwD0rOVIGx0kd2cxW%2BOLRlmAiBF4fvg%2BZQsqdAREGZjbjSUzNUXyzizgiU5qS49EB%2FbWyo5f8as%2BWMNDAVJ0hrzqFdvpeXTa%2BlzxS0klHHo6t78RBlJ0x7S%2BfqjS50Lvm9mdv7QG1rrJh%2FEhxb8seLnuGUT6PA2TLGSBNthP8KOzUEjIyA%2BlWY%2BV9khYjjQxbyja3sNV1ZRrk%2FU7Itvw0B8bpzcnT64dzrJAALjVZ5%2BQwIC3jgP6gj438ImnEG8Nva%2BPXe%2FdI5FjW7hYQ8gtIuSW5wI1K%2FSmw5h5AwpqTa1xJ3%2FaHPvdw0NZdO1PYb9xEvhXCngArZBphQNu6rdO7od6NC108IRppW3bPf6AE7ARqURwduc%2B90n3MKmuxL0GOqUBv2j99ZpoPuyTSV79SyNSu88Y81b%2BSbYtmReRM5jZB7aZVZnxYWgPIVqxzDpJ63unz8nPs9urQrSknfJpP2zKETaUbSWn2vEXc2%2F3AoksHSQqXcCYDSbujSCa9GeUeofyuBp%2FiNe8%2BTaLkNHUHkEeorfsJOCQvuzTvt3nkmvnIyGxgZN62YNK5B92Qi%2BFbiNFeGTiuvuD2xzj4Yx1QjHRrnio7Rjy&X-Amz-Signature=8d9e0bab6308380461d79f1267ab24fe50fc11a4ed49c88092454ed987528547&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

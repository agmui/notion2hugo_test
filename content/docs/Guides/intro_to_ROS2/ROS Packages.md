---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573N6QPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXB6CGi%2BgpxnW6CZS5HU4gscqasYNXqHIzRJlCWUKHlQIgUblum45sm2%2BQqE8XZPnJZThZfroZLXR1rApN6iuI8zkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWCTRqppnPg026pwCrcA3IRyuntt9mpyrBgq3s5rIb%2BaLtyXVVhA%2Bs8OiN4HI1FZh1ilhv%2FZQjmZVLrem9KA1LDajuktMB7EbMdbTcGqneo66%2FoCZrYw%2BJUK58WZQLqU9%2Ba%2F%2BoXMwVhy4PLMcCP7wtJjZrrmv%2Fvo7v6Gwf3BJ12TChykk%2BbZePqIecrx8lofwer4ZPeonLIZo%2FhLTqcfMOm283m5O6VQx7v%2B3in4z1ximUOYdK%2FKkZ9qY5QQBFQ23NG%2FONqZAZnqLlJVbUFkh%2BRv19aM785BznYUbj%2FvOGjs0ybuhe14lQwU0J2ZEp914Kpf8kdIbGpyI8nY83fFnNCl%2B63rMBcMB4IhP7dEdBSLG%2F9lMxCXkkhyOZsqzVaMQhlowRqvCbc7URtTLaOoEhGe6lGxBfcFSHmHvVzsH1mBkqFx0WIgzpdAs0WmskWStLp%2F6PT3dEeClUivz5qfuGn%2FWzvYN4o5pYSHdLqA1SkwgptR8PRNdqaVfCyTjxW5v2UrGHVDZyIlBA8sFNhhIDhU3ENECRY%2FAPoLAdpP%2Bo7nWWxpl7pOmI7nEcPz3Qx%2FxnHK9hwsPAS8msacrsK4x8pjbHldoQ8RCmiCCiRZ%2BAOombNuurRok6ihUxkjMBu1ktFnTElgde1IgPIMNiLucMGOqUBKh2StDF%2BcV3is9HW6IjqOofJE2ppBw9leXXr8qIKugczstSyUg%2FJb7RwPgCKDQUuPtJrFUyWQFCzaP4clq83G9%2Be%2BO%2BgslDOTkh573%2BjJ1GWtmJlo7BlxiqUwCiQiUqEa8oPizcbT2IBwU99wRvi3xF6AmdU%2BBXCX0AIgm3HBXA%2BCL5TYdD3TYZ1O8Z4ZJ4tlEe9HyP%2FlDbZqFbwzRzNAxdkXzXu&X-Amz-Signature=7ec5f71dcdf02ad763eb1ee182396e78c661e3dd3a126ee9835a90dd1f8f84ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573N6QPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXB6CGi%2BgpxnW6CZS5HU4gscqasYNXqHIzRJlCWUKHlQIgUblum45sm2%2BQqE8XZPnJZThZfroZLXR1rApN6iuI8zkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWCTRqppnPg026pwCrcA3IRyuntt9mpyrBgq3s5rIb%2BaLtyXVVhA%2Bs8OiN4HI1FZh1ilhv%2FZQjmZVLrem9KA1LDajuktMB7EbMdbTcGqneo66%2FoCZrYw%2BJUK58WZQLqU9%2Ba%2F%2BoXMwVhy4PLMcCP7wtJjZrrmv%2Fvo7v6Gwf3BJ12TChykk%2BbZePqIecrx8lofwer4ZPeonLIZo%2FhLTqcfMOm283m5O6VQx7v%2B3in4z1ximUOYdK%2FKkZ9qY5QQBFQ23NG%2FONqZAZnqLlJVbUFkh%2BRv19aM785BznYUbj%2FvOGjs0ybuhe14lQwU0J2ZEp914Kpf8kdIbGpyI8nY83fFnNCl%2B63rMBcMB4IhP7dEdBSLG%2F9lMxCXkkhyOZsqzVaMQhlowRqvCbc7URtTLaOoEhGe6lGxBfcFSHmHvVzsH1mBkqFx0WIgzpdAs0WmskWStLp%2F6PT3dEeClUivz5qfuGn%2FWzvYN4o5pYSHdLqA1SkwgptR8PRNdqaVfCyTjxW5v2UrGHVDZyIlBA8sFNhhIDhU3ENECRY%2FAPoLAdpP%2Bo7nWWxpl7pOmI7nEcPz3Qx%2FxnHK9hwsPAS8msacrsK4x8pjbHldoQ8RCmiCCiRZ%2BAOombNuurRok6ihUxkjMBu1ktFnTElgde1IgPIMNiLucMGOqUBKh2StDF%2BcV3is9HW6IjqOofJE2ppBw9leXXr8qIKugczstSyUg%2FJb7RwPgCKDQUuPtJrFUyWQFCzaP4clq83G9%2Be%2BO%2BgslDOTkh573%2BjJ1GWtmJlo7BlxiqUwCiQiUqEa8oPizcbT2IBwU99wRvi3xF6AmdU%2BBXCX0AIgm3HBXA%2BCL5TYdD3TYZ1O8Z4ZJ4tlEe9HyP%2FlDbZqFbwzRzNAxdkXzXu&X-Amz-Signature=753ad4dd6ea408a2d93a781cbe8f0259e6d130cf997cbebd4e94447ed0e2d929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573N6QPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXB6CGi%2BgpxnW6CZS5HU4gscqasYNXqHIzRJlCWUKHlQIgUblum45sm2%2BQqE8XZPnJZThZfroZLXR1rApN6iuI8zkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWCTRqppnPg026pwCrcA3IRyuntt9mpyrBgq3s5rIb%2BaLtyXVVhA%2Bs8OiN4HI1FZh1ilhv%2FZQjmZVLrem9KA1LDajuktMB7EbMdbTcGqneo66%2FoCZrYw%2BJUK58WZQLqU9%2Ba%2F%2BoXMwVhy4PLMcCP7wtJjZrrmv%2Fvo7v6Gwf3BJ12TChykk%2BbZePqIecrx8lofwer4ZPeonLIZo%2FhLTqcfMOm283m5O6VQx7v%2B3in4z1ximUOYdK%2FKkZ9qY5QQBFQ23NG%2FONqZAZnqLlJVbUFkh%2BRv19aM785BznYUbj%2FvOGjs0ybuhe14lQwU0J2ZEp914Kpf8kdIbGpyI8nY83fFnNCl%2B63rMBcMB4IhP7dEdBSLG%2F9lMxCXkkhyOZsqzVaMQhlowRqvCbc7URtTLaOoEhGe6lGxBfcFSHmHvVzsH1mBkqFx0WIgzpdAs0WmskWStLp%2F6PT3dEeClUivz5qfuGn%2FWzvYN4o5pYSHdLqA1SkwgptR8PRNdqaVfCyTjxW5v2UrGHVDZyIlBA8sFNhhIDhU3ENECRY%2FAPoLAdpP%2Bo7nWWxpl7pOmI7nEcPz3Qx%2FxnHK9hwsPAS8msacrsK4x8pjbHldoQ8RCmiCCiRZ%2BAOombNuurRok6ihUxkjMBu1ktFnTElgde1IgPIMNiLucMGOqUBKh2StDF%2BcV3is9HW6IjqOofJE2ppBw9leXXr8qIKugczstSyUg%2FJb7RwPgCKDQUuPtJrFUyWQFCzaP4clq83G9%2Be%2BO%2BgslDOTkh573%2BjJ1GWtmJlo7BlxiqUwCiQiUqEa8oPizcbT2IBwU99wRvi3xF6AmdU%2BBXCX0AIgm3HBXA%2BCL5TYdD3TYZ1O8Z4ZJ4tlEe9HyP%2FlDbZqFbwzRzNAxdkXzXu&X-Amz-Signature=56c429185b99a20d81d02995d4cc4754b200d8429330be3ab585d2ec7f7b21e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573N6QPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXB6CGi%2BgpxnW6CZS5HU4gscqasYNXqHIzRJlCWUKHlQIgUblum45sm2%2BQqE8XZPnJZThZfroZLXR1rApN6iuI8zkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWCTRqppnPg026pwCrcA3IRyuntt9mpyrBgq3s5rIb%2BaLtyXVVhA%2Bs8OiN4HI1FZh1ilhv%2FZQjmZVLrem9KA1LDajuktMB7EbMdbTcGqneo66%2FoCZrYw%2BJUK58WZQLqU9%2Ba%2F%2BoXMwVhy4PLMcCP7wtJjZrrmv%2Fvo7v6Gwf3BJ12TChykk%2BbZePqIecrx8lofwer4ZPeonLIZo%2FhLTqcfMOm283m5O6VQx7v%2B3in4z1ximUOYdK%2FKkZ9qY5QQBFQ23NG%2FONqZAZnqLlJVbUFkh%2BRv19aM785BznYUbj%2FvOGjs0ybuhe14lQwU0J2ZEp914Kpf8kdIbGpyI8nY83fFnNCl%2B63rMBcMB4IhP7dEdBSLG%2F9lMxCXkkhyOZsqzVaMQhlowRqvCbc7URtTLaOoEhGe6lGxBfcFSHmHvVzsH1mBkqFx0WIgzpdAs0WmskWStLp%2F6PT3dEeClUivz5qfuGn%2FWzvYN4o5pYSHdLqA1SkwgptR8PRNdqaVfCyTjxW5v2UrGHVDZyIlBA8sFNhhIDhU3ENECRY%2FAPoLAdpP%2Bo7nWWxpl7pOmI7nEcPz3Qx%2FxnHK9hwsPAS8msacrsK4x8pjbHldoQ8RCmiCCiRZ%2BAOombNuurRok6ihUxkjMBu1ktFnTElgde1IgPIMNiLucMGOqUBKh2StDF%2BcV3is9HW6IjqOofJE2ppBw9leXXr8qIKugczstSyUg%2FJb7RwPgCKDQUuPtJrFUyWQFCzaP4clq83G9%2Be%2BO%2BgslDOTkh573%2BjJ1GWtmJlo7BlxiqUwCiQiUqEa8oPizcbT2IBwU99wRvi3xF6AmdU%2BBXCX0AIgm3HBXA%2BCL5TYdD3TYZ1O8Z4ZJ4tlEe9HyP%2FlDbZqFbwzRzNAxdkXzXu&X-Amz-Signature=9605e2f395a6c659bb86b440c11dbc93c47bcef1777d3941933be55ccb4b72f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573N6QPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXB6CGi%2BgpxnW6CZS5HU4gscqasYNXqHIzRJlCWUKHlQIgUblum45sm2%2BQqE8XZPnJZThZfroZLXR1rApN6iuI8zkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWCTRqppnPg026pwCrcA3IRyuntt9mpyrBgq3s5rIb%2BaLtyXVVhA%2Bs8OiN4HI1FZh1ilhv%2FZQjmZVLrem9KA1LDajuktMB7EbMdbTcGqneo66%2FoCZrYw%2BJUK58WZQLqU9%2Ba%2F%2BoXMwVhy4PLMcCP7wtJjZrrmv%2Fvo7v6Gwf3BJ12TChykk%2BbZePqIecrx8lofwer4ZPeonLIZo%2FhLTqcfMOm283m5O6VQx7v%2B3in4z1ximUOYdK%2FKkZ9qY5QQBFQ23NG%2FONqZAZnqLlJVbUFkh%2BRv19aM785BznYUbj%2FvOGjs0ybuhe14lQwU0J2ZEp914Kpf8kdIbGpyI8nY83fFnNCl%2B63rMBcMB4IhP7dEdBSLG%2F9lMxCXkkhyOZsqzVaMQhlowRqvCbc7URtTLaOoEhGe6lGxBfcFSHmHvVzsH1mBkqFx0WIgzpdAs0WmskWStLp%2F6PT3dEeClUivz5qfuGn%2FWzvYN4o5pYSHdLqA1SkwgptR8PRNdqaVfCyTjxW5v2UrGHVDZyIlBA8sFNhhIDhU3ENECRY%2FAPoLAdpP%2Bo7nWWxpl7pOmI7nEcPz3Qx%2FxnHK9hwsPAS8msacrsK4x8pjbHldoQ8RCmiCCiRZ%2BAOombNuurRok6ihUxkjMBu1ktFnTElgde1IgPIMNiLucMGOqUBKh2StDF%2BcV3is9HW6IjqOofJE2ppBw9leXXr8qIKugczstSyUg%2FJb7RwPgCKDQUuPtJrFUyWQFCzaP4clq83G9%2Be%2BO%2BgslDOTkh573%2BjJ1GWtmJlo7BlxiqUwCiQiUqEa8oPizcbT2IBwU99wRvi3xF6AmdU%2BBXCX0AIgm3HBXA%2BCL5TYdD3TYZ1O8Z4ZJ4tlEe9HyP%2FlDbZqFbwzRzNAxdkXzXu&X-Amz-Signature=be1b6f968219e0f34803db1fa88ef9daa8c01ca1bd2b660023bd4032b5b81635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573N6QPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXB6CGi%2BgpxnW6CZS5HU4gscqasYNXqHIzRJlCWUKHlQIgUblum45sm2%2BQqE8XZPnJZThZfroZLXR1rApN6iuI8zkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWCTRqppnPg026pwCrcA3IRyuntt9mpyrBgq3s5rIb%2BaLtyXVVhA%2Bs8OiN4HI1FZh1ilhv%2FZQjmZVLrem9KA1LDajuktMB7EbMdbTcGqneo66%2FoCZrYw%2BJUK58WZQLqU9%2Ba%2F%2BoXMwVhy4PLMcCP7wtJjZrrmv%2Fvo7v6Gwf3BJ12TChykk%2BbZePqIecrx8lofwer4ZPeonLIZo%2FhLTqcfMOm283m5O6VQx7v%2B3in4z1ximUOYdK%2FKkZ9qY5QQBFQ23NG%2FONqZAZnqLlJVbUFkh%2BRv19aM785BznYUbj%2FvOGjs0ybuhe14lQwU0J2ZEp914Kpf8kdIbGpyI8nY83fFnNCl%2B63rMBcMB4IhP7dEdBSLG%2F9lMxCXkkhyOZsqzVaMQhlowRqvCbc7URtTLaOoEhGe6lGxBfcFSHmHvVzsH1mBkqFx0WIgzpdAs0WmskWStLp%2F6PT3dEeClUivz5qfuGn%2FWzvYN4o5pYSHdLqA1SkwgptR8PRNdqaVfCyTjxW5v2UrGHVDZyIlBA8sFNhhIDhU3ENECRY%2FAPoLAdpP%2Bo7nWWxpl7pOmI7nEcPz3Qx%2FxnHK9hwsPAS8msacrsK4x8pjbHldoQ8RCmiCCiRZ%2BAOombNuurRok6ihUxkjMBu1ktFnTElgde1IgPIMNiLucMGOqUBKh2StDF%2BcV3is9HW6IjqOofJE2ppBw9leXXr8qIKugczstSyUg%2FJb7RwPgCKDQUuPtJrFUyWQFCzaP4clq83G9%2Be%2BO%2BgslDOTkh573%2BjJ1GWtmJlo7BlxiqUwCiQiUqEa8oPizcbT2IBwU99wRvi3xF6AmdU%2BBXCX0AIgm3HBXA%2BCL5TYdD3TYZ1O8Z4ZJ4tlEe9HyP%2FlDbZqFbwzRzNAxdkXzXu&X-Amz-Signature=eaf0065c11dc19c5a3416f026c1b27b3b7ab87b993ba65203590008159a49a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573N6QPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXB6CGi%2BgpxnW6CZS5HU4gscqasYNXqHIzRJlCWUKHlQIgUblum45sm2%2BQqE8XZPnJZThZfroZLXR1rApN6iuI8zkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWCTRqppnPg026pwCrcA3IRyuntt9mpyrBgq3s5rIb%2BaLtyXVVhA%2Bs8OiN4HI1FZh1ilhv%2FZQjmZVLrem9KA1LDajuktMB7EbMdbTcGqneo66%2FoCZrYw%2BJUK58WZQLqU9%2Ba%2F%2BoXMwVhy4PLMcCP7wtJjZrrmv%2Fvo7v6Gwf3BJ12TChykk%2BbZePqIecrx8lofwer4ZPeonLIZo%2FhLTqcfMOm283m5O6VQx7v%2B3in4z1ximUOYdK%2FKkZ9qY5QQBFQ23NG%2FONqZAZnqLlJVbUFkh%2BRv19aM785BznYUbj%2FvOGjs0ybuhe14lQwU0J2ZEp914Kpf8kdIbGpyI8nY83fFnNCl%2B63rMBcMB4IhP7dEdBSLG%2F9lMxCXkkhyOZsqzVaMQhlowRqvCbc7URtTLaOoEhGe6lGxBfcFSHmHvVzsH1mBkqFx0WIgzpdAs0WmskWStLp%2F6PT3dEeClUivz5qfuGn%2FWzvYN4o5pYSHdLqA1SkwgptR8PRNdqaVfCyTjxW5v2UrGHVDZyIlBA8sFNhhIDhU3ENECRY%2FAPoLAdpP%2Bo7nWWxpl7pOmI7nEcPz3Qx%2FxnHK9hwsPAS8msacrsK4x8pjbHldoQ8RCmiCCiRZ%2BAOombNuurRok6ihUxkjMBu1ktFnTElgde1IgPIMNiLucMGOqUBKh2StDF%2BcV3is9HW6IjqOofJE2ppBw9leXXr8qIKugczstSyUg%2FJb7RwPgCKDQUuPtJrFUyWQFCzaP4clq83G9%2Be%2BO%2BgslDOTkh573%2BjJ1GWtmJlo7BlxiqUwCiQiUqEa8oPizcbT2IBwU99wRvi3xF6AmdU%2BBXCX0AIgm3HBXA%2BCL5TYdD3TYZ1O8Z4ZJ4tlEe9HyP%2FlDbZqFbwzRzNAxdkXzXu&X-Amz-Signature=d27c9f9f2b1992d27a0eef94d9325a952a64aeb4d99c8e80ec442b25b7102c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

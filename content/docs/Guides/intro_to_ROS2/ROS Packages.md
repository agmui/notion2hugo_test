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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITPTYFN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFuzIAcCEJrUK59g3JHkUbi7r%2FYNrwUW%2Fke0c91i1aAiAv5ldRE0FpjlAJgK8vd7mvR6Qryj7DXC2vSOoM%2FJsomCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkfoeiXJ6BdaqVjqKtwDRRiX%2F3mK6%2B7Fibz90MGcemmESbFyueNvLJqFa3HvHF%2B%2F%2FIEcRXqLh%2FpuzSlRRsI0mZtjb%2Bi8kv3p1heGZ2y3C0usJWeyy6vqcYnPfDzDaC4wtD95K2OgNIeypOYlbQ4JANY3TLrKISkSNPH86UPgOpsiItJf0lYv6TVr1zIeuvvGddguozXdvT1aZ3NPEXDOCtNbUb%2BYgeCP8tgiBtWoqugDj3nxemtEbqEY9Xva0ckjVWd3KIy%2FWki2SWxBbQJyyp3aU%2F2bWVwYKY6d9W4E6cL3FWrjLvb8Iy3d8qckQ3ZCz2L3k2YnXvrAuzW36x9%2Bg20NZDYQoMU9PZU8oXAr1gUBJqK%2Fqh4tKHK0Kf%2FArUrsyDMwFocyLmd7MDAZeCpyubjtJJkNwezrviygSzatpnsSMYvbwcs3Awic36zYw%2Fx8g3Q87SZNWMg9Ev4KV0YQr%2BnsmSgMVI1BKEdnZzbsDIwLsv2WR%2FloDPlNbgP2yKPksaIum1xyB9YCg0UI7ePrCIczRYX0mq0MUeU9Q5uMk1vR7LDkGTPR1kWgdVGK%2B469YXayRIpbx4Usrj1yOw9%2F%2B%2FIHtnRioG2ha3583ESckrFrcYP4v4cd1AWMZ8qVqeNZK6J1f%2F2ddNP5kPUwsvCnxAY6pgEKGLB0Ts2mwTyR1Od9Wh%2FzJDdY6KvjzXaYNRLFon4lKxxp88KkU6vjX2a8i6Of%2Bm6kxU3q%2FIo7ebeD4n4djVtTx%2BUWIkhu5TRGkevqLOOSPrUvk8M8kE8YyVVvRzGJg7aN9V2nO0v2Deq2MGs4o0qhvGDSaT0erM5sDUpwq%2BkCD%2BvB1z8xb1gbKGk70e6SnXdddcDHYqO7CERVBYH%2B9%2FXNRk0HAD5X&X-Amz-Signature=dfe2787e58006aac141422cad8fbe41dd0ecb293c1327534e14ae728210e03f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITPTYFN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFuzIAcCEJrUK59g3JHkUbi7r%2FYNrwUW%2Fke0c91i1aAiAv5ldRE0FpjlAJgK8vd7mvR6Qryj7DXC2vSOoM%2FJsomCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkfoeiXJ6BdaqVjqKtwDRRiX%2F3mK6%2B7Fibz90MGcemmESbFyueNvLJqFa3HvHF%2B%2F%2FIEcRXqLh%2FpuzSlRRsI0mZtjb%2Bi8kv3p1heGZ2y3C0usJWeyy6vqcYnPfDzDaC4wtD95K2OgNIeypOYlbQ4JANY3TLrKISkSNPH86UPgOpsiItJf0lYv6TVr1zIeuvvGddguozXdvT1aZ3NPEXDOCtNbUb%2BYgeCP8tgiBtWoqugDj3nxemtEbqEY9Xva0ckjVWd3KIy%2FWki2SWxBbQJyyp3aU%2F2bWVwYKY6d9W4E6cL3FWrjLvb8Iy3d8qckQ3ZCz2L3k2YnXvrAuzW36x9%2Bg20NZDYQoMU9PZU8oXAr1gUBJqK%2Fqh4tKHK0Kf%2FArUrsyDMwFocyLmd7MDAZeCpyubjtJJkNwezrviygSzatpnsSMYvbwcs3Awic36zYw%2Fx8g3Q87SZNWMg9Ev4KV0YQr%2BnsmSgMVI1BKEdnZzbsDIwLsv2WR%2FloDPlNbgP2yKPksaIum1xyB9YCg0UI7ePrCIczRYX0mq0MUeU9Q5uMk1vR7LDkGTPR1kWgdVGK%2B469YXayRIpbx4Usrj1yOw9%2F%2B%2FIHtnRioG2ha3583ESckrFrcYP4v4cd1AWMZ8qVqeNZK6J1f%2F2ddNP5kPUwsvCnxAY6pgEKGLB0Ts2mwTyR1Od9Wh%2FzJDdY6KvjzXaYNRLFon4lKxxp88KkU6vjX2a8i6Of%2Bm6kxU3q%2FIo7ebeD4n4djVtTx%2BUWIkhu5TRGkevqLOOSPrUvk8M8kE8YyVVvRzGJg7aN9V2nO0v2Deq2MGs4o0qhvGDSaT0erM5sDUpwq%2BkCD%2BvB1z8xb1gbKGk70e6SnXdddcDHYqO7CERVBYH%2B9%2FXNRk0HAD5X&X-Amz-Signature=c00e2951362e3cfa78247806e08135b918804ce833c916c622a74f131a1726d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITPTYFN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFuzIAcCEJrUK59g3JHkUbi7r%2FYNrwUW%2Fke0c91i1aAiAv5ldRE0FpjlAJgK8vd7mvR6Qryj7DXC2vSOoM%2FJsomCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkfoeiXJ6BdaqVjqKtwDRRiX%2F3mK6%2B7Fibz90MGcemmESbFyueNvLJqFa3HvHF%2B%2F%2FIEcRXqLh%2FpuzSlRRsI0mZtjb%2Bi8kv3p1heGZ2y3C0usJWeyy6vqcYnPfDzDaC4wtD95K2OgNIeypOYlbQ4JANY3TLrKISkSNPH86UPgOpsiItJf0lYv6TVr1zIeuvvGddguozXdvT1aZ3NPEXDOCtNbUb%2BYgeCP8tgiBtWoqugDj3nxemtEbqEY9Xva0ckjVWd3KIy%2FWki2SWxBbQJyyp3aU%2F2bWVwYKY6d9W4E6cL3FWrjLvb8Iy3d8qckQ3ZCz2L3k2YnXvrAuzW36x9%2Bg20NZDYQoMU9PZU8oXAr1gUBJqK%2Fqh4tKHK0Kf%2FArUrsyDMwFocyLmd7MDAZeCpyubjtJJkNwezrviygSzatpnsSMYvbwcs3Awic36zYw%2Fx8g3Q87SZNWMg9Ev4KV0YQr%2BnsmSgMVI1BKEdnZzbsDIwLsv2WR%2FloDPlNbgP2yKPksaIum1xyB9YCg0UI7ePrCIczRYX0mq0MUeU9Q5uMk1vR7LDkGTPR1kWgdVGK%2B469YXayRIpbx4Usrj1yOw9%2F%2B%2FIHtnRioG2ha3583ESckrFrcYP4v4cd1AWMZ8qVqeNZK6J1f%2F2ddNP5kPUwsvCnxAY6pgEKGLB0Ts2mwTyR1Od9Wh%2FzJDdY6KvjzXaYNRLFon4lKxxp88KkU6vjX2a8i6Of%2Bm6kxU3q%2FIo7ebeD4n4djVtTx%2BUWIkhu5TRGkevqLOOSPrUvk8M8kE8YyVVvRzGJg7aN9V2nO0v2Deq2MGs4o0qhvGDSaT0erM5sDUpwq%2BkCD%2BvB1z8xb1gbKGk70e6SnXdddcDHYqO7CERVBYH%2B9%2FXNRk0HAD5X&X-Amz-Signature=bd62d9ce3a1f4cf61d11a31984ec353618264905c699a5e2a154a4430370f334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITPTYFN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFuzIAcCEJrUK59g3JHkUbi7r%2FYNrwUW%2Fke0c91i1aAiAv5ldRE0FpjlAJgK8vd7mvR6Qryj7DXC2vSOoM%2FJsomCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkfoeiXJ6BdaqVjqKtwDRRiX%2F3mK6%2B7Fibz90MGcemmESbFyueNvLJqFa3HvHF%2B%2F%2FIEcRXqLh%2FpuzSlRRsI0mZtjb%2Bi8kv3p1heGZ2y3C0usJWeyy6vqcYnPfDzDaC4wtD95K2OgNIeypOYlbQ4JANY3TLrKISkSNPH86UPgOpsiItJf0lYv6TVr1zIeuvvGddguozXdvT1aZ3NPEXDOCtNbUb%2BYgeCP8tgiBtWoqugDj3nxemtEbqEY9Xva0ckjVWd3KIy%2FWki2SWxBbQJyyp3aU%2F2bWVwYKY6d9W4E6cL3FWrjLvb8Iy3d8qckQ3ZCz2L3k2YnXvrAuzW36x9%2Bg20NZDYQoMU9PZU8oXAr1gUBJqK%2Fqh4tKHK0Kf%2FArUrsyDMwFocyLmd7MDAZeCpyubjtJJkNwezrviygSzatpnsSMYvbwcs3Awic36zYw%2Fx8g3Q87SZNWMg9Ev4KV0YQr%2BnsmSgMVI1BKEdnZzbsDIwLsv2WR%2FloDPlNbgP2yKPksaIum1xyB9YCg0UI7ePrCIczRYX0mq0MUeU9Q5uMk1vR7LDkGTPR1kWgdVGK%2B469YXayRIpbx4Usrj1yOw9%2F%2B%2FIHtnRioG2ha3583ESckrFrcYP4v4cd1AWMZ8qVqeNZK6J1f%2F2ddNP5kPUwsvCnxAY6pgEKGLB0Ts2mwTyR1Od9Wh%2FzJDdY6KvjzXaYNRLFon4lKxxp88KkU6vjX2a8i6Of%2Bm6kxU3q%2FIo7ebeD4n4djVtTx%2BUWIkhu5TRGkevqLOOSPrUvk8M8kE8YyVVvRzGJg7aN9V2nO0v2Deq2MGs4o0qhvGDSaT0erM5sDUpwq%2BkCD%2BvB1z8xb1gbKGk70e6SnXdddcDHYqO7CERVBYH%2B9%2FXNRk0HAD5X&X-Amz-Signature=fbb6c21a5c1f51e63432f8c2031a60c2016c0e0e266f90114834ed0281527df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITPTYFN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFuzIAcCEJrUK59g3JHkUbi7r%2FYNrwUW%2Fke0c91i1aAiAv5ldRE0FpjlAJgK8vd7mvR6Qryj7DXC2vSOoM%2FJsomCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkfoeiXJ6BdaqVjqKtwDRRiX%2F3mK6%2B7Fibz90MGcemmESbFyueNvLJqFa3HvHF%2B%2F%2FIEcRXqLh%2FpuzSlRRsI0mZtjb%2Bi8kv3p1heGZ2y3C0usJWeyy6vqcYnPfDzDaC4wtD95K2OgNIeypOYlbQ4JANY3TLrKISkSNPH86UPgOpsiItJf0lYv6TVr1zIeuvvGddguozXdvT1aZ3NPEXDOCtNbUb%2BYgeCP8tgiBtWoqugDj3nxemtEbqEY9Xva0ckjVWd3KIy%2FWki2SWxBbQJyyp3aU%2F2bWVwYKY6d9W4E6cL3FWrjLvb8Iy3d8qckQ3ZCz2L3k2YnXvrAuzW36x9%2Bg20NZDYQoMU9PZU8oXAr1gUBJqK%2Fqh4tKHK0Kf%2FArUrsyDMwFocyLmd7MDAZeCpyubjtJJkNwezrviygSzatpnsSMYvbwcs3Awic36zYw%2Fx8g3Q87SZNWMg9Ev4KV0YQr%2BnsmSgMVI1BKEdnZzbsDIwLsv2WR%2FloDPlNbgP2yKPksaIum1xyB9YCg0UI7ePrCIczRYX0mq0MUeU9Q5uMk1vR7LDkGTPR1kWgdVGK%2B469YXayRIpbx4Usrj1yOw9%2F%2B%2FIHtnRioG2ha3583ESckrFrcYP4v4cd1AWMZ8qVqeNZK6J1f%2F2ddNP5kPUwsvCnxAY6pgEKGLB0Ts2mwTyR1Od9Wh%2FzJDdY6KvjzXaYNRLFon4lKxxp88KkU6vjX2a8i6Of%2Bm6kxU3q%2FIo7ebeD4n4djVtTx%2BUWIkhu5TRGkevqLOOSPrUvk8M8kE8YyVVvRzGJg7aN9V2nO0v2Deq2MGs4o0qhvGDSaT0erM5sDUpwq%2BkCD%2BvB1z8xb1gbKGk70e6SnXdddcDHYqO7CERVBYH%2B9%2FXNRk0HAD5X&X-Amz-Signature=b52d87217516e9a6985154dd87567e222eb85007cac3d310bf288186a92eadfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITPTYFN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFuzIAcCEJrUK59g3JHkUbi7r%2FYNrwUW%2Fke0c91i1aAiAv5ldRE0FpjlAJgK8vd7mvR6Qryj7DXC2vSOoM%2FJsomCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkfoeiXJ6BdaqVjqKtwDRRiX%2F3mK6%2B7Fibz90MGcemmESbFyueNvLJqFa3HvHF%2B%2F%2FIEcRXqLh%2FpuzSlRRsI0mZtjb%2Bi8kv3p1heGZ2y3C0usJWeyy6vqcYnPfDzDaC4wtD95K2OgNIeypOYlbQ4JANY3TLrKISkSNPH86UPgOpsiItJf0lYv6TVr1zIeuvvGddguozXdvT1aZ3NPEXDOCtNbUb%2BYgeCP8tgiBtWoqugDj3nxemtEbqEY9Xva0ckjVWd3KIy%2FWki2SWxBbQJyyp3aU%2F2bWVwYKY6d9W4E6cL3FWrjLvb8Iy3d8qckQ3ZCz2L3k2YnXvrAuzW36x9%2Bg20NZDYQoMU9PZU8oXAr1gUBJqK%2Fqh4tKHK0Kf%2FArUrsyDMwFocyLmd7MDAZeCpyubjtJJkNwezrviygSzatpnsSMYvbwcs3Awic36zYw%2Fx8g3Q87SZNWMg9Ev4KV0YQr%2BnsmSgMVI1BKEdnZzbsDIwLsv2WR%2FloDPlNbgP2yKPksaIum1xyB9YCg0UI7ePrCIczRYX0mq0MUeU9Q5uMk1vR7LDkGTPR1kWgdVGK%2B469YXayRIpbx4Usrj1yOw9%2F%2B%2FIHtnRioG2ha3583ESckrFrcYP4v4cd1AWMZ8qVqeNZK6J1f%2F2ddNP5kPUwsvCnxAY6pgEKGLB0Ts2mwTyR1Od9Wh%2FzJDdY6KvjzXaYNRLFon4lKxxp88KkU6vjX2a8i6Of%2Bm6kxU3q%2FIo7ebeD4n4djVtTx%2BUWIkhu5TRGkevqLOOSPrUvk8M8kE8YyVVvRzGJg7aN9V2nO0v2Deq2MGs4o0qhvGDSaT0erM5sDUpwq%2BkCD%2BvB1z8xb1gbKGk70e6SnXdddcDHYqO7CERVBYH%2B9%2FXNRk0HAD5X&X-Amz-Signature=a8cc9b5ff3d340bcc92707492551625f08ad7dfc49ad1daf8cdc3a2747a54cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITPTYFN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFuzIAcCEJrUK59g3JHkUbi7r%2FYNrwUW%2Fke0c91i1aAiAv5ldRE0FpjlAJgK8vd7mvR6Qryj7DXC2vSOoM%2FJsomCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkfoeiXJ6BdaqVjqKtwDRRiX%2F3mK6%2B7Fibz90MGcemmESbFyueNvLJqFa3HvHF%2B%2F%2FIEcRXqLh%2FpuzSlRRsI0mZtjb%2Bi8kv3p1heGZ2y3C0usJWeyy6vqcYnPfDzDaC4wtD95K2OgNIeypOYlbQ4JANY3TLrKISkSNPH86UPgOpsiItJf0lYv6TVr1zIeuvvGddguozXdvT1aZ3NPEXDOCtNbUb%2BYgeCP8tgiBtWoqugDj3nxemtEbqEY9Xva0ckjVWd3KIy%2FWki2SWxBbQJyyp3aU%2F2bWVwYKY6d9W4E6cL3FWrjLvb8Iy3d8qckQ3ZCz2L3k2YnXvrAuzW36x9%2Bg20NZDYQoMU9PZU8oXAr1gUBJqK%2Fqh4tKHK0Kf%2FArUrsyDMwFocyLmd7MDAZeCpyubjtJJkNwezrviygSzatpnsSMYvbwcs3Awic36zYw%2Fx8g3Q87SZNWMg9Ev4KV0YQr%2BnsmSgMVI1BKEdnZzbsDIwLsv2WR%2FloDPlNbgP2yKPksaIum1xyB9YCg0UI7ePrCIczRYX0mq0MUeU9Q5uMk1vR7LDkGTPR1kWgdVGK%2B469YXayRIpbx4Usrj1yOw9%2F%2B%2FIHtnRioG2ha3583ESckrFrcYP4v4cd1AWMZ8qVqeNZK6J1f%2F2ddNP5kPUwsvCnxAY6pgEKGLB0Ts2mwTyR1Od9Wh%2FzJDdY6KvjzXaYNRLFon4lKxxp88KkU6vjX2a8i6Of%2Bm6kxU3q%2FIo7ebeD4n4djVtTx%2BUWIkhu5TRGkevqLOOSPrUvk8M8kE8YyVVvRzGJg7aN9V2nO0v2Deq2MGs4o0qhvGDSaT0erM5sDUpwq%2BkCD%2BvB1z8xb1gbKGk70e6SnXdddcDHYqO7CERVBYH%2B9%2FXNRk0HAD5X&X-Amz-Signature=c7d31c61babc1d552bbae0facd9b3c0dc9683cd67df1242bc142eaff74b048ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

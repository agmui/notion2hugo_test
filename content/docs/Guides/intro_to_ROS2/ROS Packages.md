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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYUCVN2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX5QFmQADmWTvy%2BTv8dwI1I9bakM99qC8iaWjYEU56wIgCJUHjCSCD6%2FgTg6njvEyyKPUPk0d8dzIqH3ic8BRz0kqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTClBHoPWnPmQ5eQCrcA2EciUTlf02cnR%2FfDwGVwEiTZ6wtVnrdoZ5ppA2nzdlCVT1kp01fnaVfeTkgOP11qldxT6ywIKWwacepQLn2saH8nOKrbrOz%2FbEA86qlOUW9J6R7%2BrNeLIV18RtKgW4U4fUHUu%2BzjlCxUDL46oR9OBOGHcpsrv6lFcRJIvI2hJoXku3CkgzC%2BNDfFOtSdfcrFhRHKvYVT29ErfTmFXOaldHwsfBPAvQajR51UkdFOLGuxBDOL26PxyUwlBSkMW%2BEPVjGYpLzbXhuFEkfIEsnRtFCVO38KY00KRqiDNjDwRsjQhpMjvxd33ks6YFuVv4iZ6aZsbYw85PHH9MswYTYLlBvuqkXDnU%2BySNGi1h1qNxdx6vDtbfK9gmk3BFwa%2F4DR9KLL8meUAGL%2BwRHfgF7bbg5%2Fd10eHrj2ynQF%2BgNWpno5%2Fn02d1F3iHB3rj4r8I%2BGihMogIZxdmT8QqNvvUfDLTjy9erj%2FGuyNHnkCjVTkSia6VKjV6c0ermWMLgH%2BkejNhEl1OixRPfZnX%2BS%2B1MCupraHCZtase5L3ePRzqSLKofSlk9%2Fuw2FiGL8F3Xw%2Bz%2F%2FZB5EDD0U%2Fg0rcKAOZ5Hvpzx1BP33uIPceaRd%2B%2FcYVfylVVdD6fgW%2BEiHgVMJuixcAGOqUB%2Bs8kntv8kuU48k4s1yFYrwu%2BNzsPWaqFqzxXMdSiky4QOcqknHqiHxzSmq9LmX4ZxJ1LviTJDX576kwugWB8ZftIlKADLtNa7NqPH4lEu2Wx%2Bsas3PK05x1%2FwHdTIIiPrccNMj1y0Q%2BkLyyDHhNOFSYjf3n4tCXDAGMq3VtyrLHQVlVc3v5FQycz01blJV0uKapliIgXAF3taTathbgDJp%2FmGyuW&X-Amz-Signature=cd3968b73254a9e9f02e179304f7d12a923c88e5d7dbd1c2eb8cdaf99fd603d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYUCVN2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX5QFmQADmWTvy%2BTv8dwI1I9bakM99qC8iaWjYEU56wIgCJUHjCSCD6%2FgTg6njvEyyKPUPk0d8dzIqH3ic8BRz0kqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTClBHoPWnPmQ5eQCrcA2EciUTlf02cnR%2FfDwGVwEiTZ6wtVnrdoZ5ppA2nzdlCVT1kp01fnaVfeTkgOP11qldxT6ywIKWwacepQLn2saH8nOKrbrOz%2FbEA86qlOUW9J6R7%2BrNeLIV18RtKgW4U4fUHUu%2BzjlCxUDL46oR9OBOGHcpsrv6lFcRJIvI2hJoXku3CkgzC%2BNDfFOtSdfcrFhRHKvYVT29ErfTmFXOaldHwsfBPAvQajR51UkdFOLGuxBDOL26PxyUwlBSkMW%2BEPVjGYpLzbXhuFEkfIEsnRtFCVO38KY00KRqiDNjDwRsjQhpMjvxd33ks6YFuVv4iZ6aZsbYw85PHH9MswYTYLlBvuqkXDnU%2BySNGi1h1qNxdx6vDtbfK9gmk3BFwa%2F4DR9KLL8meUAGL%2BwRHfgF7bbg5%2Fd10eHrj2ynQF%2BgNWpno5%2Fn02d1F3iHB3rj4r8I%2BGihMogIZxdmT8QqNvvUfDLTjy9erj%2FGuyNHnkCjVTkSia6VKjV6c0ermWMLgH%2BkejNhEl1OixRPfZnX%2BS%2B1MCupraHCZtase5L3ePRzqSLKofSlk9%2Fuw2FiGL8F3Xw%2Bz%2F%2FZB5EDD0U%2Fg0rcKAOZ5Hvpzx1BP33uIPceaRd%2B%2FcYVfylVVdD6fgW%2BEiHgVMJuixcAGOqUB%2Bs8kntv8kuU48k4s1yFYrwu%2BNzsPWaqFqzxXMdSiky4QOcqknHqiHxzSmq9LmX4ZxJ1LviTJDX576kwugWB8ZftIlKADLtNa7NqPH4lEu2Wx%2Bsas3PK05x1%2FwHdTIIiPrccNMj1y0Q%2BkLyyDHhNOFSYjf3n4tCXDAGMq3VtyrLHQVlVc3v5FQycz01blJV0uKapliIgXAF3taTathbgDJp%2FmGyuW&X-Amz-Signature=69660d3530c9a765c6d7b72df90164cbd0386b8d2295b1b097fa4a2b46132ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYUCVN2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX5QFmQADmWTvy%2BTv8dwI1I9bakM99qC8iaWjYEU56wIgCJUHjCSCD6%2FgTg6njvEyyKPUPk0d8dzIqH3ic8BRz0kqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTClBHoPWnPmQ5eQCrcA2EciUTlf02cnR%2FfDwGVwEiTZ6wtVnrdoZ5ppA2nzdlCVT1kp01fnaVfeTkgOP11qldxT6ywIKWwacepQLn2saH8nOKrbrOz%2FbEA86qlOUW9J6R7%2BrNeLIV18RtKgW4U4fUHUu%2BzjlCxUDL46oR9OBOGHcpsrv6lFcRJIvI2hJoXku3CkgzC%2BNDfFOtSdfcrFhRHKvYVT29ErfTmFXOaldHwsfBPAvQajR51UkdFOLGuxBDOL26PxyUwlBSkMW%2BEPVjGYpLzbXhuFEkfIEsnRtFCVO38KY00KRqiDNjDwRsjQhpMjvxd33ks6YFuVv4iZ6aZsbYw85PHH9MswYTYLlBvuqkXDnU%2BySNGi1h1qNxdx6vDtbfK9gmk3BFwa%2F4DR9KLL8meUAGL%2BwRHfgF7bbg5%2Fd10eHrj2ynQF%2BgNWpno5%2Fn02d1F3iHB3rj4r8I%2BGihMogIZxdmT8QqNvvUfDLTjy9erj%2FGuyNHnkCjVTkSia6VKjV6c0ermWMLgH%2BkejNhEl1OixRPfZnX%2BS%2B1MCupraHCZtase5L3ePRzqSLKofSlk9%2Fuw2FiGL8F3Xw%2Bz%2F%2FZB5EDD0U%2Fg0rcKAOZ5Hvpzx1BP33uIPceaRd%2B%2FcYVfylVVdD6fgW%2BEiHgVMJuixcAGOqUB%2Bs8kntv8kuU48k4s1yFYrwu%2BNzsPWaqFqzxXMdSiky4QOcqknHqiHxzSmq9LmX4ZxJ1LviTJDX576kwugWB8ZftIlKADLtNa7NqPH4lEu2Wx%2Bsas3PK05x1%2FwHdTIIiPrccNMj1y0Q%2BkLyyDHhNOFSYjf3n4tCXDAGMq3VtyrLHQVlVc3v5FQycz01blJV0uKapliIgXAF3taTathbgDJp%2FmGyuW&X-Amz-Signature=13e9876bf282c1aecd48dda32add509bf448319d6a46e06a073b974749643873&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYUCVN2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX5QFmQADmWTvy%2BTv8dwI1I9bakM99qC8iaWjYEU56wIgCJUHjCSCD6%2FgTg6njvEyyKPUPk0d8dzIqH3ic8BRz0kqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTClBHoPWnPmQ5eQCrcA2EciUTlf02cnR%2FfDwGVwEiTZ6wtVnrdoZ5ppA2nzdlCVT1kp01fnaVfeTkgOP11qldxT6ywIKWwacepQLn2saH8nOKrbrOz%2FbEA86qlOUW9J6R7%2BrNeLIV18RtKgW4U4fUHUu%2BzjlCxUDL46oR9OBOGHcpsrv6lFcRJIvI2hJoXku3CkgzC%2BNDfFOtSdfcrFhRHKvYVT29ErfTmFXOaldHwsfBPAvQajR51UkdFOLGuxBDOL26PxyUwlBSkMW%2BEPVjGYpLzbXhuFEkfIEsnRtFCVO38KY00KRqiDNjDwRsjQhpMjvxd33ks6YFuVv4iZ6aZsbYw85PHH9MswYTYLlBvuqkXDnU%2BySNGi1h1qNxdx6vDtbfK9gmk3BFwa%2F4DR9KLL8meUAGL%2BwRHfgF7bbg5%2Fd10eHrj2ynQF%2BgNWpno5%2Fn02d1F3iHB3rj4r8I%2BGihMogIZxdmT8QqNvvUfDLTjy9erj%2FGuyNHnkCjVTkSia6VKjV6c0ermWMLgH%2BkejNhEl1OixRPfZnX%2BS%2B1MCupraHCZtase5L3ePRzqSLKofSlk9%2Fuw2FiGL8F3Xw%2Bz%2F%2FZB5EDD0U%2Fg0rcKAOZ5Hvpzx1BP33uIPceaRd%2B%2FcYVfylVVdD6fgW%2BEiHgVMJuixcAGOqUB%2Bs8kntv8kuU48k4s1yFYrwu%2BNzsPWaqFqzxXMdSiky4QOcqknHqiHxzSmq9LmX4ZxJ1LviTJDX576kwugWB8ZftIlKADLtNa7NqPH4lEu2Wx%2Bsas3PK05x1%2FwHdTIIiPrccNMj1y0Q%2BkLyyDHhNOFSYjf3n4tCXDAGMq3VtyrLHQVlVc3v5FQycz01blJV0uKapliIgXAF3taTathbgDJp%2FmGyuW&X-Amz-Signature=22f77c1c91f956e5ec8b1ddfe6b2ed20f2c2291a29df869aac1a1ac0ec207d68&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYUCVN2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX5QFmQADmWTvy%2BTv8dwI1I9bakM99qC8iaWjYEU56wIgCJUHjCSCD6%2FgTg6njvEyyKPUPk0d8dzIqH3ic8BRz0kqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTClBHoPWnPmQ5eQCrcA2EciUTlf02cnR%2FfDwGVwEiTZ6wtVnrdoZ5ppA2nzdlCVT1kp01fnaVfeTkgOP11qldxT6ywIKWwacepQLn2saH8nOKrbrOz%2FbEA86qlOUW9J6R7%2BrNeLIV18RtKgW4U4fUHUu%2BzjlCxUDL46oR9OBOGHcpsrv6lFcRJIvI2hJoXku3CkgzC%2BNDfFOtSdfcrFhRHKvYVT29ErfTmFXOaldHwsfBPAvQajR51UkdFOLGuxBDOL26PxyUwlBSkMW%2BEPVjGYpLzbXhuFEkfIEsnRtFCVO38KY00KRqiDNjDwRsjQhpMjvxd33ks6YFuVv4iZ6aZsbYw85PHH9MswYTYLlBvuqkXDnU%2BySNGi1h1qNxdx6vDtbfK9gmk3BFwa%2F4DR9KLL8meUAGL%2BwRHfgF7bbg5%2Fd10eHrj2ynQF%2BgNWpno5%2Fn02d1F3iHB3rj4r8I%2BGihMogIZxdmT8QqNvvUfDLTjy9erj%2FGuyNHnkCjVTkSia6VKjV6c0ermWMLgH%2BkejNhEl1OixRPfZnX%2BS%2B1MCupraHCZtase5L3ePRzqSLKofSlk9%2Fuw2FiGL8F3Xw%2Bz%2F%2FZB5EDD0U%2Fg0rcKAOZ5Hvpzx1BP33uIPceaRd%2B%2FcYVfylVVdD6fgW%2BEiHgVMJuixcAGOqUB%2Bs8kntv8kuU48k4s1yFYrwu%2BNzsPWaqFqzxXMdSiky4QOcqknHqiHxzSmq9LmX4ZxJ1LviTJDX576kwugWB8ZftIlKADLtNa7NqPH4lEu2Wx%2Bsas3PK05x1%2FwHdTIIiPrccNMj1y0Q%2BkLyyDHhNOFSYjf3n4tCXDAGMq3VtyrLHQVlVc3v5FQycz01blJV0uKapliIgXAF3taTathbgDJp%2FmGyuW&X-Amz-Signature=3819b8042f42545d0be4d38d1f3f727100f8b55c62ae194c202ab96ba2b1aba2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYUCVN2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX5QFmQADmWTvy%2BTv8dwI1I9bakM99qC8iaWjYEU56wIgCJUHjCSCD6%2FgTg6njvEyyKPUPk0d8dzIqH3ic8BRz0kqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTClBHoPWnPmQ5eQCrcA2EciUTlf02cnR%2FfDwGVwEiTZ6wtVnrdoZ5ppA2nzdlCVT1kp01fnaVfeTkgOP11qldxT6ywIKWwacepQLn2saH8nOKrbrOz%2FbEA86qlOUW9J6R7%2BrNeLIV18RtKgW4U4fUHUu%2BzjlCxUDL46oR9OBOGHcpsrv6lFcRJIvI2hJoXku3CkgzC%2BNDfFOtSdfcrFhRHKvYVT29ErfTmFXOaldHwsfBPAvQajR51UkdFOLGuxBDOL26PxyUwlBSkMW%2BEPVjGYpLzbXhuFEkfIEsnRtFCVO38KY00KRqiDNjDwRsjQhpMjvxd33ks6YFuVv4iZ6aZsbYw85PHH9MswYTYLlBvuqkXDnU%2BySNGi1h1qNxdx6vDtbfK9gmk3BFwa%2F4DR9KLL8meUAGL%2BwRHfgF7bbg5%2Fd10eHrj2ynQF%2BgNWpno5%2Fn02d1F3iHB3rj4r8I%2BGihMogIZxdmT8QqNvvUfDLTjy9erj%2FGuyNHnkCjVTkSia6VKjV6c0ermWMLgH%2BkejNhEl1OixRPfZnX%2BS%2B1MCupraHCZtase5L3ePRzqSLKofSlk9%2Fuw2FiGL8F3Xw%2Bz%2F%2FZB5EDD0U%2Fg0rcKAOZ5Hvpzx1BP33uIPceaRd%2B%2FcYVfylVVdD6fgW%2BEiHgVMJuixcAGOqUB%2Bs8kntv8kuU48k4s1yFYrwu%2BNzsPWaqFqzxXMdSiky4QOcqknHqiHxzSmq9LmX4ZxJ1LviTJDX576kwugWB8ZftIlKADLtNa7NqPH4lEu2Wx%2Bsas3PK05x1%2FwHdTIIiPrccNMj1y0Q%2BkLyyDHhNOFSYjf3n4tCXDAGMq3VtyrLHQVlVc3v5FQycz01blJV0uKapliIgXAF3taTathbgDJp%2FmGyuW&X-Amz-Signature=a3effd37637b09e71822eecb694f416c88c31b414fec640b2236e6ea39d01535&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYUCVN2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX5QFmQADmWTvy%2BTv8dwI1I9bakM99qC8iaWjYEU56wIgCJUHjCSCD6%2FgTg6njvEyyKPUPk0d8dzIqH3ic8BRz0kqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTClBHoPWnPmQ5eQCrcA2EciUTlf02cnR%2FfDwGVwEiTZ6wtVnrdoZ5ppA2nzdlCVT1kp01fnaVfeTkgOP11qldxT6ywIKWwacepQLn2saH8nOKrbrOz%2FbEA86qlOUW9J6R7%2BrNeLIV18RtKgW4U4fUHUu%2BzjlCxUDL46oR9OBOGHcpsrv6lFcRJIvI2hJoXku3CkgzC%2BNDfFOtSdfcrFhRHKvYVT29ErfTmFXOaldHwsfBPAvQajR51UkdFOLGuxBDOL26PxyUwlBSkMW%2BEPVjGYpLzbXhuFEkfIEsnRtFCVO38KY00KRqiDNjDwRsjQhpMjvxd33ks6YFuVv4iZ6aZsbYw85PHH9MswYTYLlBvuqkXDnU%2BySNGi1h1qNxdx6vDtbfK9gmk3BFwa%2F4DR9KLL8meUAGL%2BwRHfgF7bbg5%2Fd10eHrj2ynQF%2BgNWpno5%2Fn02d1F3iHB3rj4r8I%2BGihMogIZxdmT8QqNvvUfDLTjy9erj%2FGuyNHnkCjVTkSia6VKjV6c0ermWMLgH%2BkejNhEl1OixRPfZnX%2BS%2B1MCupraHCZtase5L3ePRzqSLKofSlk9%2Fuw2FiGL8F3Xw%2Bz%2F%2FZB5EDD0U%2Fg0rcKAOZ5Hvpzx1BP33uIPceaRd%2B%2FcYVfylVVdD6fgW%2BEiHgVMJuixcAGOqUB%2Bs8kntv8kuU48k4s1yFYrwu%2BNzsPWaqFqzxXMdSiky4QOcqknHqiHxzSmq9LmX4ZxJ1LviTJDX576kwugWB8ZftIlKADLtNa7NqPH4lEu2Wx%2Bsas3PK05x1%2FwHdTIIiPrccNMj1y0Q%2BkLyyDHhNOFSYjf3n4tCXDAGMq3VtyrLHQVlVc3v5FQycz01blJV0uKapliIgXAF3taTathbgDJp%2FmGyuW&X-Amz-Signature=16ab1594dcaca5a4d3e12e1a42829ca2070f60aa4a66725e387c5e25032aee37&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

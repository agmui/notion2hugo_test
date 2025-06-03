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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IV2WF42%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBem%2BYa7IqpkSmIl6sF8KIEmwT%2BZvr34d0ZTDKsdfbPyAiAmPxgRSHcrLLrpVIIc1zLR5Vc%2B2dhX14MBJTHkLTKiKyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCrvIbaFq5vIRVrKKtwD71WGJxFb0dzLBTYtddcR4swPTYD4hHouHBdPQEKQqkzHEfXk74PChb%2BQeElggs2uBiDpGKCQ86JXLIQKKfT9LUUcNhmnfGiKlMPgLKSFjI2aVaAeOz2aJw8NTIOCB8S8rjv4fKnqMcWjHYMGkR5Mu3XKzWcDZ0RW6deAHsgctE0i3WMdtEHRntImQ%2FQ41esW74qb2LuJw8ixvAcBM3Anosmc4N1N1TY4wA4TCpkgv%2BKNOAeh3dyTBObs9rJ0MSGCFuapJllzl1KXr69a0ix57clTo%2BMUTI2yUBfW2srksB69JqPSkG7aJPWrgH2uy%2F5fiNAJBKCETCe5lvVLDiZ2BNirieP6PpY8fqovwodlt9qKtWZ02IfbVCHPTeU47jpqUTsc8r149cHOVGU5CCPuU4WcCZW0Xq8ZjScwIVaMU6F%2B742PG5D%2FLXoBpRYcxxrHLLnQ3l9RZ1u4Np%2FwmeMdUonK9MX5U2WEw3%2B2qaAsEPrmzdJ36iYG7GAzC2%2FoeI00CYy4ruCfoQJjliyP1KtCl9OqM3QAHfzGNznZUbfDhx7jd7HaL1T4A9NBHMlBMy1KcbY8M10pDqEWzJTnytkPfgGPmi%2FhzwYvZf2p4bC%2BvrXxlBQxJoJwI7sYZZUw2Yz5wQY6pgEzgR542zoCgoa7%2Fz2XE8s6iJ67g7vizkrUzkFppUos%2BCj2TJtVcMrpHrmCQeFxPojjiRVeE2DKtlM4qic%2Bk9dv%2BZGI%2Bz7bDKVYYXraEQLJfSs6fnIMYqLHvRTJKhUsZ9lLu05Ws2rC%2Bmgb3j3fHyES8%2BgNMXc7YyEG%2BileEoYzp0Z15Z67wfWeCOFYshVapk8vuuT8zDLiMHK37OkAK7TriV3nBEPC&X-Amz-Signature=17c893727282470ad123098db210df67e4b112da52c590370f5b854b7102ae1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IV2WF42%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBem%2BYa7IqpkSmIl6sF8KIEmwT%2BZvr34d0ZTDKsdfbPyAiAmPxgRSHcrLLrpVIIc1zLR5Vc%2B2dhX14MBJTHkLTKiKyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCrvIbaFq5vIRVrKKtwD71WGJxFb0dzLBTYtddcR4swPTYD4hHouHBdPQEKQqkzHEfXk74PChb%2BQeElggs2uBiDpGKCQ86JXLIQKKfT9LUUcNhmnfGiKlMPgLKSFjI2aVaAeOz2aJw8NTIOCB8S8rjv4fKnqMcWjHYMGkR5Mu3XKzWcDZ0RW6deAHsgctE0i3WMdtEHRntImQ%2FQ41esW74qb2LuJw8ixvAcBM3Anosmc4N1N1TY4wA4TCpkgv%2BKNOAeh3dyTBObs9rJ0MSGCFuapJllzl1KXr69a0ix57clTo%2BMUTI2yUBfW2srksB69JqPSkG7aJPWrgH2uy%2F5fiNAJBKCETCe5lvVLDiZ2BNirieP6PpY8fqovwodlt9qKtWZ02IfbVCHPTeU47jpqUTsc8r149cHOVGU5CCPuU4WcCZW0Xq8ZjScwIVaMU6F%2B742PG5D%2FLXoBpRYcxxrHLLnQ3l9RZ1u4Np%2FwmeMdUonK9MX5U2WEw3%2B2qaAsEPrmzdJ36iYG7GAzC2%2FoeI00CYy4ruCfoQJjliyP1KtCl9OqM3QAHfzGNznZUbfDhx7jd7HaL1T4A9NBHMlBMy1KcbY8M10pDqEWzJTnytkPfgGPmi%2FhzwYvZf2p4bC%2BvrXxlBQxJoJwI7sYZZUw2Yz5wQY6pgEzgR542zoCgoa7%2Fz2XE8s6iJ67g7vizkrUzkFppUos%2BCj2TJtVcMrpHrmCQeFxPojjiRVeE2DKtlM4qic%2Bk9dv%2BZGI%2Bz7bDKVYYXraEQLJfSs6fnIMYqLHvRTJKhUsZ9lLu05Ws2rC%2Bmgb3j3fHyES8%2BgNMXc7YyEG%2BileEoYzp0Z15Z67wfWeCOFYshVapk8vuuT8zDLiMHK37OkAK7TriV3nBEPC&X-Amz-Signature=0c66e6d2a8802fb1892db820763d321cfcaea16328fc26c360e18d4793b17239&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IV2WF42%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBem%2BYa7IqpkSmIl6sF8KIEmwT%2BZvr34d0ZTDKsdfbPyAiAmPxgRSHcrLLrpVIIc1zLR5Vc%2B2dhX14MBJTHkLTKiKyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCrvIbaFq5vIRVrKKtwD71WGJxFb0dzLBTYtddcR4swPTYD4hHouHBdPQEKQqkzHEfXk74PChb%2BQeElggs2uBiDpGKCQ86JXLIQKKfT9LUUcNhmnfGiKlMPgLKSFjI2aVaAeOz2aJw8NTIOCB8S8rjv4fKnqMcWjHYMGkR5Mu3XKzWcDZ0RW6deAHsgctE0i3WMdtEHRntImQ%2FQ41esW74qb2LuJw8ixvAcBM3Anosmc4N1N1TY4wA4TCpkgv%2BKNOAeh3dyTBObs9rJ0MSGCFuapJllzl1KXr69a0ix57clTo%2BMUTI2yUBfW2srksB69JqPSkG7aJPWrgH2uy%2F5fiNAJBKCETCe5lvVLDiZ2BNirieP6PpY8fqovwodlt9qKtWZ02IfbVCHPTeU47jpqUTsc8r149cHOVGU5CCPuU4WcCZW0Xq8ZjScwIVaMU6F%2B742PG5D%2FLXoBpRYcxxrHLLnQ3l9RZ1u4Np%2FwmeMdUonK9MX5U2WEw3%2B2qaAsEPrmzdJ36iYG7GAzC2%2FoeI00CYy4ruCfoQJjliyP1KtCl9OqM3QAHfzGNznZUbfDhx7jd7HaL1T4A9NBHMlBMy1KcbY8M10pDqEWzJTnytkPfgGPmi%2FhzwYvZf2p4bC%2BvrXxlBQxJoJwI7sYZZUw2Yz5wQY6pgEzgR542zoCgoa7%2Fz2XE8s6iJ67g7vizkrUzkFppUos%2BCj2TJtVcMrpHrmCQeFxPojjiRVeE2DKtlM4qic%2Bk9dv%2BZGI%2Bz7bDKVYYXraEQLJfSs6fnIMYqLHvRTJKhUsZ9lLu05Ws2rC%2Bmgb3j3fHyES8%2BgNMXc7YyEG%2BileEoYzp0Z15Z67wfWeCOFYshVapk8vuuT8zDLiMHK37OkAK7TriV3nBEPC&X-Amz-Signature=ca2eaf63cccdf2038cd12241cd5849d09ad9ba0c45faf47d020752ce75372be4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IV2WF42%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBem%2BYa7IqpkSmIl6sF8KIEmwT%2BZvr34d0ZTDKsdfbPyAiAmPxgRSHcrLLrpVIIc1zLR5Vc%2B2dhX14MBJTHkLTKiKyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCrvIbaFq5vIRVrKKtwD71WGJxFb0dzLBTYtddcR4swPTYD4hHouHBdPQEKQqkzHEfXk74PChb%2BQeElggs2uBiDpGKCQ86JXLIQKKfT9LUUcNhmnfGiKlMPgLKSFjI2aVaAeOz2aJw8NTIOCB8S8rjv4fKnqMcWjHYMGkR5Mu3XKzWcDZ0RW6deAHsgctE0i3WMdtEHRntImQ%2FQ41esW74qb2LuJw8ixvAcBM3Anosmc4N1N1TY4wA4TCpkgv%2BKNOAeh3dyTBObs9rJ0MSGCFuapJllzl1KXr69a0ix57clTo%2BMUTI2yUBfW2srksB69JqPSkG7aJPWrgH2uy%2F5fiNAJBKCETCe5lvVLDiZ2BNirieP6PpY8fqovwodlt9qKtWZ02IfbVCHPTeU47jpqUTsc8r149cHOVGU5CCPuU4WcCZW0Xq8ZjScwIVaMU6F%2B742PG5D%2FLXoBpRYcxxrHLLnQ3l9RZ1u4Np%2FwmeMdUonK9MX5U2WEw3%2B2qaAsEPrmzdJ36iYG7GAzC2%2FoeI00CYy4ruCfoQJjliyP1KtCl9OqM3QAHfzGNznZUbfDhx7jd7HaL1T4A9NBHMlBMy1KcbY8M10pDqEWzJTnytkPfgGPmi%2FhzwYvZf2p4bC%2BvrXxlBQxJoJwI7sYZZUw2Yz5wQY6pgEzgR542zoCgoa7%2Fz2XE8s6iJ67g7vizkrUzkFppUos%2BCj2TJtVcMrpHrmCQeFxPojjiRVeE2DKtlM4qic%2Bk9dv%2BZGI%2Bz7bDKVYYXraEQLJfSs6fnIMYqLHvRTJKhUsZ9lLu05Ws2rC%2Bmgb3j3fHyES8%2BgNMXc7YyEG%2BileEoYzp0Z15Z67wfWeCOFYshVapk8vuuT8zDLiMHK37OkAK7TriV3nBEPC&X-Amz-Signature=d7f94abef59b2b4ac72dbd9167bdb3cfca57dce8bb7c9c405a5b3e6adc7d30cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IV2WF42%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBem%2BYa7IqpkSmIl6sF8KIEmwT%2BZvr34d0ZTDKsdfbPyAiAmPxgRSHcrLLrpVIIc1zLR5Vc%2B2dhX14MBJTHkLTKiKyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCrvIbaFq5vIRVrKKtwD71WGJxFb0dzLBTYtddcR4swPTYD4hHouHBdPQEKQqkzHEfXk74PChb%2BQeElggs2uBiDpGKCQ86JXLIQKKfT9LUUcNhmnfGiKlMPgLKSFjI2aVaAeOz2aJw8NTIOCB8S8rjv4fKnqMcWjHYMGkR5Mu3XKzWcDZ0RW6deAHsgctE0i3WMdtEHRntImQ%2FQ41esW74qb2LuJw8ixvAcBM3Anosmc4N1N1TY4wA4TCpkgv%2BKNOAeh3dyTBObs9rJ0MSGCFuapJllzl1KXr69a0ix57clTo%2BMUTI2yUBfW2srksB69JqPSkG7aJPWrgH2uy%2F5fiNAJBKCETCe5lvVLDiZ2BNirieP6PpY8fqovwodlt9qKtWZ02IfbVCHPTeU47jpqUTsc8r149cHOVGU5CCPuU4WcCZW0Xq8ZjScwIVaMU6F%2B742PG5D%2FLXoBpRYcxxrHLLnQ3l9RZ1u4Np%2FwmeMdUonK9MX5U2WEw3%2B2qaAsEPrmzdJ36iYG7GAzC2%2FoeI00CYy4ruCfoQJjliyP1KtCl9OqM3QAHfzGNznZUbfDhx7jd7HaL1T4A9NBHMlBMy1KcbY8M10pDqEWzJTnytkPfgGPmi%2FhzwYvZf2p4bC%2BvrXxlBQxJoJwI7sYZZUw2Yz5wQY6pgEzgR542zoCgoa7%2Fz2XE8s6iJ67g7vizkrUzkFppUos%2BCj2TJtVcMrpHrmCQeFxPojjiRVeE2DKtlM4qic%2Bk9dv%2BZGI%2Bz7bDKVYYXraEQLJfSs6fnIMYqLHvRTJKhUsZ9lLu05Ws2rC%2Bmgb3j3fHyES8%2BgNMXc7YyEG%2BileEoYzp0Z15Z67wfWeCOFYshVapk8vuuT8zDLiMHK37OkAK7TriV3nBEPC&X-Amz-Signature=fe4c248a4224874af105bd71c56d999595b8f173ef950c8a50a4baebded250cd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IV2WF42%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBem%2BYa7IqpkSmIl6sF8KIEmwT%2BZvr34d0ZTDKsdfbPyAiAmPxgRSHcrLLrpVIIc1zLR5Vc%2B2dhX14MBJTHkLTKiKyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCrvIbaFq5vIRVrKKtwD71WGJxFb0dzLBTYtddcR4swPTYD4hHouHBdPQEKQqkzHEfXk74PChb%2BQeElggs2uBiDpGKCQ86JXLIQKKfT9LUUcNhmnfGiKlMPgLKSFjI2aVaAeOz2aJw8NTIOCB8S8rjv4fKnqMcWjHYMGkR5Mu3XKzWcDZ0RW6deAHsgctE0i3WMdtEHRntImQ%2FQ41esW74qb2LuJw8ixvAcBM3Anosmc4N1N1TY4wA4TCpkgv%2BKNOAeh3dyTBObs9rJ0MSGCFuapJllzl1KXr69a0ix57clTo%2BMUTI2yUBfW2srksB69JqPSkG7aJPWrgH2uy%2F5fiNAJBKCETCe5lvVLDiZ2BNirieP6PpY8fqovwodlt9qKtWZ02IfbVCHPTeU47jpqUTsc8r149cHOVGU5CCPuU4WcCZW0Xq8ZjScwIVaMU6F%2B742PG5D%2FLXoBpRYcxxrHLLnQ3l9RZ1u4Np%2FwmeMdUonK9MX5U2WEw3%2B2qaAsEPrmzdJ36iYG7GAzC2%2FoeI00CYy4ruCfoQJjliyP1KtCl9OqM3QAHfzGNznZUbfDhx7jd7HaL1T4A9NBHMlBMy1KcbY8M10pDqEWzJTnytkPfgGPmi%2FhzwYvZf2p4bC%2BvrXxlBQxJoJwI7sYZZUw2Yz5wQY6pgEzgR542zoCgoa7%2Fz2XE8s6iJ67g7vizkrUzkFppUos%2BCj2TJtVcMrpHrmCQeFxPojjiRVeE2DKtlM4qic%2Bk9dv%2BZGI%2Bz7bDKVYYXraEQLJfSs6fnIMYqLHvRTJKhUsZ9lLu05Ws2rC%2Bmgb3j3fHyES8%2BgNMXc7YyEG%2BileEoYzp0Z15Z67wfWeCOFYshVapk8vuuT8zDLiMHK37OkAK7TriV3nBEPC&X-Amz-Signature=dd1df0d043834309d1ddefa201a3c98af4c5c7fd8087c1b550a5373916c2cf83&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IV2WF42%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBem%2BYa7IqpkSmIl6sF8KIEmwT%2BZvr34d0ZTDKsdfbPyAiAmPxgRSHcrLLrpVIIc1zLR5Vc%2B2dhX14MBJTHkLTKiKyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCrvIbaFq5vIRVrKKtwD71WGJxFb0dzLBTYtddcR4swPTYD4hHouHBdPQEKQqkzHEfXk74PChb%2BQeElggs2uBiDpGKCQ86JXLIQKKfT9LUUcNhmnfGiKlMPgLKSFjI2aVaAeOz2aJw8NTIOCB8S8rjv4fKnqMcWjHYMGkR5Mu3XKzWcDZ0RW6deAHsgctE0i3WMdtEHRntImQ%2FQ41esW74qb2LuJw8ixvAcBM3Anosmc4N1N1TY4wA4TCpkgv%2BKNOAeh3dyTBObs9rJ0MSGCFuapJllzl1KXr69a0ix57clTo%2BMUTI2yUBfW2srksB69JqPSkG7aJPWrgH2uy%2F5fiNAJBKCETCe5lvVLDiZ2BNirieP6PpY8fqovwodlt9qKtWZ02IfbVCHPTeU47jpqUTsc8r149cHOVGU5CCPuU4WcCZW0Xq8ZjScwIVaMU6F%2B742PG5D%2FLXoBpRYcxxrHLLnQ3l9RZ1u4Np%2FwmeMdUonK9MX5U2WEw3%2B2qaAsEPrmzdJ36iYG7GAzC2%2FoeI00CYy4ruCfoQJjliyP1KtCl9OqM3QAHfzGNznZUbfDhx7jd7HaL1T4A9NBHMlBMy1KcbY8M10pDqEWzJTnytkPfgGPmi%2FhzwYvZf2p4bC%2BvrXxlBQxJoJwI7sYZZUw2Yz5wQY6pgEzgR542zoCgoa7%2Fz2XE8s6iJ67g7vizkrUzkFppUos%2BCj2TJtVcMrpHrmCQeFxPojjiRVeE2DKtlM4qic%2Bk9dv%2BZGI%2Bz7bDKVYYXraEQLJfSs6fnIMYqLHvRTJKhUsZ9lLu05Ws2rC%2Bmgb3j3fHyES8%2BgNMXc7YyEG%2BileEoYzp0Z15Z67wfWeCOFYshVapk8vuuT8zDLiMHK37OkAK7TriV3nBEPC&X-Amz-Signature=3a4abe40aa268d310721ad5c6356b91682ec73b7c385e2ec3cbb0a71d8a633fe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

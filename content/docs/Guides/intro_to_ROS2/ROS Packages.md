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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCF6ANKV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVqT2bnC7p4hrZUxDZzCrRxbbGu12fZPh6pLjba1j9AIgbVAJ5GVwcQfrdn4oWUrS2u3H76CieMiSxZG4QRPYmvcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHPvi8I4GhyraKP2WCrcAz39DdiW%2FMQuvIvXf%2Fo4BBaWyML2Cd5BJJWrq4CivAkUVHOImpHgheL08P4%2BHTnuBk7taUKQE3a%2F4gr73H6D%2FkzslLGXeZ9zGkEhYuRRn%2F8CfUTG0CyhgNGWrraQCu8V0P4nQI0Ui3FvVF2OHyjkOr7cjdjlu5aGDBlH%2B3Rgx6QXe%2FW9MJXBM8lu16ksTmOOpF6jP3Go96y8Ynpg7vD8J%2BgIE9ZTxm16O99fnKjkILCPyHMCdvsHLHevtAZ%2BOjmgXBdIu22db%2F%2FXSA3GSyJimCy4%2Bllo%2FYiwYYVAkvd6jcfDjEdlFmBiM2lCT6uTATJhwt8HDPAK0mAmA8vAbtJW9WFYDwpt%2BIOmwjfteecvGgQuxeVmHbggJEepcaYDDvloMIBW8f000kMDFfOeiUm23ybWrM5Yb0eN1GaMoWji82BAroBbTjmvEK36yaPOP7ieKTiOedEuABiIbZcESJfAkBUbUScNa4iMY5QkI%2B%2FJ0yTLkcKoPNjXyyBXJxnLU0bVwHGt0wv3Y5JS%2BP0CIGMPG5Sbxcm3Ezvvph7T6YzccaBntnMYsajwvCcU8NGItlDeCsmRGsSKluYo1ybc%2FXaQNwVI%2FwMK4KiwCyj7pCU%2BQShAj1jge7hOQju3h1WkML3G3MEGOqUBgH1ZW5nO%2FrIIkBZzAuNY%2FFqxYsG7EZXH1zaxDr3GTwLHcehmPcUH2LFmVQ9ShDQkHSMq10qUiIjaQsJmg7s5j7R4iBwqutC%2F7Fxur26AXVoWF6BIM8K2102uHs5q67CjF%2Fg0I0XIdsGnCop2bXO%2BUsPw7VayuHoLAJOP2bI838GHGhpfPvLHeWKUahCNGKrzZ7oy7FewDIIvmFRdeD2Fdx3r7QPQ&X-Amz-Signature=410ed639dbfdd6f7cb25bbf50f25d38af8327de5f72198b08124a52e035cb985&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCF6ANKV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVqT2bnC7p4hrZUxDZzCrRxbbGu12fZPh6pLjba1j9AIgbVAJ5GVwcQfrdn4oWUrS2u3H76CieMiSxZG4QRPYmvcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHPvi8I4GhyraKP2WCrcAz39DdiW%2FMQuvIvXf%2Fo4BBaWyML2Cd5BJJWrq4CivAkUVHOImpHgheL08P4%2BHTnuBk7taUKQE3a%2F4gr73H6D%2FkzslLGXeZ9zGkEhYuRRn%2F8CfUTG0CyhgNGWrraQCu8V0P4nQI0Ui3FvVF2OHyjkOr7cjdjlu5aGDBlH%2B3Rgx6QXe%2FW9MJXBM8lu16ksTmOOpF6jP3Go96y8Ynpg7vD8J%2BgIE9ZTxm16O99fnKjkILCPyHMCdvsHLHevtAZ%2BOjmgXBdIu22db%2F%2FXSA3GSyJimCy4%2Bllo%2FYiwYYVAkvd6jcfDjEdlFmBiM2lCT6uTATJhwt8HDPAK0mAmA8vAbtJW9WFYDwpt%2BIOmwjfteecvGgQuxeVmHbggJEepcaYDDvloMIBW8f000kMDFfOeiUm23ybWrM5Yb0eN1GaMoWji82BAroBbTjmvEK36yaPOP7ieKTiOedEuABiIbZcESJfAkBUbUScNa4iMY5QkI%2B%2FJ0yTLkcKoPNjXyyBXJxnLU0bVwHGt0wv3Y5JS%2BP0CIGMPG5Sbxcm3Ezvvph7T6YzccaBntnMYsajwvCcU8NGItlDeCsmRGsSKluYo1ybc%2FXaQNwVI%2FwMK4KiwCyj7pCU%2BQShAj1jge7hOQju3h1WkML3G3MEGOqUBgH1ZW5nO%2FrIIkBZzAuNY%2FFqxYsG7EZXH1zaxDr3GTwLHcehmPcUH2LFmVQ9ShDQkHSMq10qUiIjaQsJmg7s5j7R4iBwqutC%2F7Fxur26AXVoWF6BIM8K2102uHs5q67CjF%2Fg0I0XIdsGnCop2bXO%2BUsPw7VayuHoLAJOP2bI838GHGhpfPvLHeWKUahCNGKrzZ7oy7FewDIIvmFRdeD2Fdx3r7QPQ&X-Amz-Signature=de096c6d20be546cea0b008c3487e872973e21eaa9033bbc71da2963549a42d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCF6ANKV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVqT2bnC7p4hrZUxDZzCrRxbbGu12fZPh6pLjba1j9AIgbVAJ5GVwcQfrdn4oWUrS2u3H76CieMiSxZG4QRPYmvcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHPvi8I4GhyraKP2WCrcAz39DdiW%2FMQuvIvXf%2Fo4BBaWyML2Cd5BJJWrq4CivAkUVHOImpHgheL08P4%2BHTnuBk7taUKQE3a%2F4gr73H6D%2FkzslLGXeZ9zGkEhYuRRn%2F8CfUTG0CyhgNGWrraQCu8V0P4nQI0Ui3FvVF2OHyjkOr7cjdjlu5aGDBlH%2B3Rgx6QXe%2FW9MJXBM8lu16ksTmOOpF6jP3Go96y8Ynpg7vD8J%2BgIE9ZTxm16O99fnKjkILCPyHMCdvsHLHevtAZ%2BOjmgXBdIu22db%2F%2FXSA3GSyJimCy4%2Bllo%2FYiwYYVAkvd6jcfDjEdlFmBiM2lCT6uTATJhwt8HDPAK0mAmA8vAbtJW9WFYDwpt%2BIOmwjfteecvGgQuxeVmHbggJEepcaYDDvloMIBW8f000kMDFfOeiUm23ybWrM5Yb0eN1GaMoWji82BAroBbTjmvEK36yaPOP7ieKTiOedEuABiIbZcESJfAkBUbUScNa4iMY5QkI%2B%2FJ0yTLkcKoPNjXyyBXJxnLU0bVwHGt0wv3Y5JS%2BP0CIGMPG5Sbxcm3Ezvvph7T6YzccaBntnMYsajwvCcU8NGItlDeCsmRGsSKluYo1ybc%2FXaQNwVI%2FwMK4KiwCyj7pCU%2BQShAj1jge7hOQju3h1WkML3G3MEGOqUBgH1ZW5nO%2FrIIkBZzAuNY%2FFqxYsG7EZXH1zaxDr3GTwLHcehmPcUH2LFmVQ9ShDQkHSMq10qUiIjaQsJmg7s5j7R4iBwqutC%2F7Fxur26AXVoWF6BIM8K2102uHs5q67CjF%2Fg0I0XIdsGnCop2bXO%2BUsPw7VayuHoLAJOP2bI838GHGhpfPvLHeWKUahCNGKrzZ7oy7FewDIIvmFRdeD2Fdx3r7QPQ&X-Amz-Signature=f8399db31daefd7794ed3159cdcea375998a7f380a1565f12826476c619bd88a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCF6ANKV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVqT2bnC7p4hrZUxDZzCrRxbbGu12fZPh6pLjba1j9AIgbVAJ5GVwcQfrdn4oWUrS2u3H76CieMiSxZG4QRPYmvcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHPvi8I4GhyraKP2WCrcAz39DdiW%2FMQuvIvXf%2Fo4BBaWyML2Cd5BJJWrq4CivAkUVHOImpHgheL08P4%2BHTnuBk7taUKQE3a%2F4gr73H6D%2FkzslLGXeZ9zGkEhYuRRn%2F8CfUTG0CyhgNGWrraQCu8V0P4nQI0Ui3FvVF2OHyjkOr7cjdjlu5aGDBlH%2B3Rgx6QXe%2FW9MJXBM8lu16ksTmOOpF6jP3Go96y8Ynpg7vD8J%2BgIE9ZTxm16O99fnKjkILCPyHMCdvsHLHevtAZ%2BOjmgXBdIu22db%2F%2FXSA3GSyJimCy4%2Bllo%2FYiwYYVAkvd6jcfDjEdlFmBiM2lCT6uTATJhwt8HDPAK0mAmA8vAbtJW9WFYDwpt%2BIOmwjfteecvGgQuxeVmHbggJEepcaYDDvloMIBW8f000kMDFfOeiUm23ybWrM5Yb0eN1GaMoWji82BAroBbTjmvEK36yaPOP7ieKTiOedEuABiIbZcESJfAkBUbUScNa4iMY5QkI%2B%2FJ0yTLkcKoPNjXyyBXJxnLU0bVwHGt0wv3Y5JS%2BP0CIGMPG5Sbxcm3Ezvvph7T6YzccaBntnMYsajwvCcU8NGItlDeCsmRGsSKluYo1ybc%2FXaQNwVI%2FwMK4KiwCyj7pCU%2BQShAj1jge7hOQju3h1WkML3G3MEGOqUBgH1ZW5nO%2FrIIkBZzAuNY%2FFqxYsG7EZXH1zaxDr3GTwLHcehmPcUH2LFmVQ9ShDQkHSMq10qUiIjaQsJmg7s5j7R4iBwqutC%2F7Fxur26AXVoWF6BIM8K2102uHs5q67CjF%2Fg0I0XIdsGnCop2bXO%2BUsPw7VayuHoLAJOP2bI838GHGhpfPvLHeWKUahCNGKrzZ7oy7FewDIIvmFRdeD2Fdx3r7QPQ&X-Amz-Signature=60a688ffe4134de4065600ee451ead31a150591bc9ee8dd9dfe7c1d6ac37dbfc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCF6ANKV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVqT2bnC7p4hrZUxDZzCrRxbbGu12fZPh6pLjba1j9AIgbVAJ5GVwcQfrdn4oWUrS2u3H76CieMiSxZG4QRPYmvcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHPvi8I4GhyraKP2WCrcAz39DdiW%2FMQuvIvXf%2Fo4BBaWyML2Cd5BJJWrq4CivAkUVHOImpHgheL08P4%2BHTnuBk7taUKQE3a%2F4gr73H6D%2FkzslLGXeZ9zGkEhYuRRn%2F8CfUTG0CyhgNGWrraQCu8V0P4nQI0Ui3FvVF2OHyjkOr7cjdjlu5aGDBlH%2B3Rgx6QXe%2FW9MJXBM8lu16ksTmOOpF6jP3Go96y8Ynpg7vD8J%2BgIE9ZTxm16O99fnKjkILCPyHMCdvsHLHevtAZ%2BOjmgXBdIu22db%2F%2FXSA3GSyJimCy4%2Bllo%2FYiwYYVAkvd6jcfDjEdlFmBiM2lCT6uTATJhwt8HDPAK0mAmA8vAbtJW9WFYDwpt%2BIOmwjfteecvGgQuxeVmHbggJEepcaYDDvloMIBW8f000kMDFfOeiUm23ybWrM5Yb0eN1GaMoWji82BAroBbTjmvEK36yaPOP7ieKTiOedEuABiIbZcESJfAkBUbUScNa4iMY5QkI%2B%2FJ0yTLkcKoPNjXyyBXJxnLU0bVwHGt0wv3Y5JS%2BP0CIGMPG5Sbxcm3Ezvvph7T6YzccaBntnMYsajwvCcU8NGItlDeCsmRGsSKluYo1ybc%2FXaQNwVI%2FwMK4KiwCyj7pCU%2BQShAj1jge7hOQju3h1WkML3G3MEGOqUBgH1ZW5nO%2FrIIkBZzAuNY%2FFqxYsG7EZXH1zaxDr3GTwLHcehmPcUH2LFmVQ9ShDQkHSMq10qUiIjaQsJmg7s5j7R4iBwqutC%2F7Fxur26AXVoWF6BIM8K2102uHs5q67CjF%2Fg0I0XIdsGnCop2bXO%2BUsPw7VayuHoLAJOP2bI838GHGhpfPvLHeWKUahCNGKrzZ7oy7FewDIIvmFRdeD2Fdx3r7QPQ&X-Amz-Signature=9ef4a405315a3d65513f1d445ec453980d21dc5cbe01da835c10f982624968cb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCF6ANKV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVqT2bnC7p4hrZUxDZzCrRxbbGu12fZPh6pLjba1j9AIgbVAJ5GVwcQfrdn4oWUrS2u3H76CieMiSxZG4QRPYmvcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHPvi8I4GhyraKP2WCrcAz39DdiW%2FMQuvIvXf%2Fo4BBaWyML2Cd5BJJWrq4CivAkUVHOImpHgheL08P4%2BHTnuBk7taUKQE3a%2F4gr73H6D%2FkzslLGXeZ9zGkEhYuRRn%2F8CfUTG0CyhgNGWrraQCu8V0P4nQI0Ui3FvVF2OHyjkOr7cjdjlu5aGDBlH%2B3Rgx6QXe%2FW9MJXBM8lu16ksTmOOpF6jP3Go96y8Ynpg7vD8J%2BgIE9ZTxm16O99fnKjkILCPyHMCdvsHLHevtAZ%2BOjmgXBdIu22db%2F%2FXSA3GSyJimCy4%2Bllo%2FYiwYYVAkvd6jcfDjEdlFmBiM2lCT6uTATJhwt8HDPAK0mAmA8vAbtJW9WFYDwpt%2BIOmwjfteecvGgQuxeVmHbggJEepcaYDDvloMIBW8f000kMDFfOeiUm23ybWrM5Yb0eN1GaMoWji82BAroBbTjmvEK36yaPOP7ieKTiOedEuABiIbZcESJfAkBUbUScNa4iMY5QkI%2B%2FJ0yTLkcKoPNjXyyBXJxnLU0bVwHGt0wv3Y5JS%2BP0CIGMPG5Sbxcm3Ezvvph7T6YzccaBntnMYsajwvCcU8NGItlDeCsmRGsSKluYo1ybc%2FXaQNwVI%2FwMK4KiwCyj7pCU%2BQShAj1jge7hOQju3h1WkML3G3MEGOqUBgH1ZW5nO%2FrIIkBZzAuNY%2FFqxYsG7EZXH1zaxDr3GTwLHcehmPcUH2LFmVQ9ShDQkHSMq10qUiIjaQsJmg7s5j7R4iBwqutC%2F7Fxur26AXVoWF6BIM8K2102uHs5q67CjF%2Fg0I0XIdsGnCop2bXO%2BUsPw7VayuHoLAJOP2bI838GHGhpfPvLHeWKUahCNGKrzZ7oy7FewDIIvmFRdeD2Fdx3r7QPQ&X-Amz-Signature=19853dde9e8355c0f68871b5031a071f5175b9bd34e4bd71e080a83ef65c9030&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCF6ANKV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVqT2bnC7p4hrZUxDZzCrRxbbGu12fZPh6pLjba1j9AIgbVAJ5GVwcQfrdn4oWUrS2u3H76CieMiSxZG4QRPYmvcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHPvi8I4GhyraKP2WCrcAz39DdiW%2FMQuvIvXf%2Fo4BBaWyML2Cd5BJJWrq4CivAkUVHOImpHgheL08P4%2BHTnuBk7taUKQE3a%2F4gr73H6D%2FkzslLGXeZ9zGkEhYuRRn%2F8CfUTG0CyhgNGWrraQCu8V0P4nQI0Ui3FvVF2OHyjkOr7cjdjlu5aGDBlH%2B3Rgx6QXe%2FW9MJXBM8lu16ksTmOOpF6jP3Go96y8Ynpg7vD8J%2BgIE9ZTxm16O99fnKjkILCPyHMCdvsHLHevtAZ%2BOjmgXBdIu22db%2F%2FXSA3GSyJimCy4%2Bllo%2FYiwYYVAkvd6jcfDjEdlFmBiM2lCT6uTATJhwt8HDPAK0mAmA8vAbtJW9WFYDwpt%2BIOmwjfteecvGgQuxeVmHbggJEepcaYDDvloMIBW8f000kMDFfOeiUm23ybWrM5Yb0eN1GaMoWji82BAroBbTjmvEK36yaPOP7ieKTiOedEuABiIbZcESJfAkBUbUScNa4iMY5QkI%2B%2FJ0yTLkcKoPNjXyyBXJxnLU0bVwHGt0wv3Y5JS%2BP0CIGMPG5Sbxcm3Ezvvph7T6YzccaBntnMYsajwvCcU8NGItlDeCsmRGsSKluYo1ybc%2FXaQNwVI%2FwMK4KiwCyj7pCU%2BQShAj1jge7hOQju3h1WkML3G3MEGOqUBgH1ZW5nO%2FrIIkBZzAuNY%2FFqxYsG7EZXH1zaxDr3GTwLHcehmPcUH2LFmVQ9ShDQkHSMq10qUiIjaQsJmg7s5j7R4iBwqutC%2F7Fxur26AXVoWF6BIM8K2102uHs5q67CjF%2Fg0I0XIdsGnCop2bXO%2BUsPw7VayuHoLAJOP2bI838GHGhpfPvLHeWKUahCNGKrzZ7oy7FewDIIvmFRdeD2Fdx3r7QPQ&X-Amz-Signature=aab00be11be957da03bc759074a7f2237f166d97e22c0390d072779acb4476de&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

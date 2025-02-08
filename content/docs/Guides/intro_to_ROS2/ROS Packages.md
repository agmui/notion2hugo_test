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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XY3OYV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICAdOuWPFLM%2B5Mu3cWJERtBRTOVZUv%2BI7aWIdF6%2B8k3EAiBk%2F5QXfgwbERvm0MQ22nplhLWIgyTtvEaZL5AJ50vBtCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3C5sLwiNPufqdruKtwDzuUWqPLVzF4KZUV88QYYVqFtM5g0R8lIXKKTVGU1F6cP%2FqZU9Ndm83%2BBhxGofQvzJqafs21CKu2484olY9saYZhps4k7HoMoAf73ECZP7sdIdi%2FCIKsPT%2F%2BWnDnpT1iSfmuO6IzJVR5ZNmyM91Ba9zj5RQlCcS47obA1kZSXhTue6UAvXRaJE6PvBBdp2lsx0FBxuPrmvjq%2B6jRTzsgtL1lK4jrOkpNdbH%2Bdtz%2F3yd5Yy6%2BxBvBO3%2F7RN40tjkinYF%2BOeIaz26MQhOb%2Fw4f4bDAJwRky1i4aw0EvOOjn3dOH5x3uqG5OTESaCti5%2B2OpYABbRQ9XPZT6JG%2BTsUyQhk%2BspGaUe%2B9nBoQC%2BRb8hyl6tOkzzMHbMXBdl2vL7Z0abi2yceqv181bJGf%2BWJ8Kr0qj6Ix8RJaImsviM29dEoqkYr1mMO07JkgBAD%2BCy2OanNoWWhXiTu1xin6btPfuoqKDi2TWg54qb5e0LW22B7p0Q3qn%2Fhpbn%2BqhSwtmdosPtfKgHHcYsmTnpRYkWdVuQoAt%2BCAHhFlUweNEn5kJQQ4O0WUX8Be6iUUfPzv6ShgNTAXu2NxqSYtQeAOIToBpqfeFWidg897WxahWRa5B%2B7wSGK2EiHyW5gxhACkwmqqevQY6pgE%2FsKE8ULUuXqO2%2FGBxCm%2BHk9vC%2FPLCZXrcHnzFV49wNcKCZXngbadiG02vdGWLjMk37D%2B6DTituxxo4O%2B8S4A7s0Ic4Dd%2BkoW%2FMGZvjB3bx%2F4bXFFnjxJYoxX6k14vLWZJIyyH8P6zi9Rf4pRr2jozlya8%2BLH38Mk7ybMMZEDPOYhc0%2FzmK0CmrgHZfAzxS3npeS5Vf3gE4DrIGEHuPYso2O4uFilG&X-Amz-Signature=cb2bac086a37fcd8e6fccf18ecd0dd55c4577279b6db663aa90341e5c23facde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XY3OYV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICAdOuWPFLM%2B5Mu3cWJERtBRTOVZUv%2BI7aWIdF6%2B8k3EAiBk%2F5QXfgwbERvm0MQ22nplhLWIgyTtvEaZL5AJ50vBtCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3C5sLwiNPufqdruKtwDzuUWqPLVzF4KZUV88QYYVqFtM5g0R8lIXKKTVGU1F6cP%2FqZU9Ndm83%2BBhxGofQvzJqafs21CKu2484olY9saYZhps4k7HoMoAf73ECZP7sdIdi%2FCIKsPT%2F%2BWnDnpT1iSfmuO6IzJVR5ZNmyM91Ba9zj5RQlCcS47obA1kZSXhTue6UAvXRaJE6PvBBdp2lsx0FBxuPrmvjq%2B6jRTzsgtL1lK4jrOkpNdbH%2Bdtz%2F3yd5Yy6%2BxBvBO3%2F7RN40tjkinYF%2BOeIaz26MQhOb%2Fw4f4bDAJwRky1i4aw0EvOOjn3dOH5x3uqG5OTESaCti5%2B2OpYABbRQ9XPZT6JG%2BTsUyQhk%2BspGaUe%2B9nBoQC%2BRb8hyl6tOkzzMHbMXBdl2vL7Z0abi2yceqv181bJGf%2BWJ8Kr0qj6Ix8RJaImsviM29dEoqkYr1mMO07JkgBAD%2BCy2OanNoWWhXiTu1xin6btPfuoqKDi2TWg54qb5e0LW22B7p0Q3qn%2Fhpbn%2BqhSwtmdosPtfKgHHcYsmTnpRYkWdVuQoAt%2BCAHhFlUweNEn5kJQQ4O0WUX8Be6iUUfPzv6ShgNTAXu2NxqSYtQeAOIToBpqfeFWidg897WxahWRa5B%2B7wSGK2EiHyW5gxhACkwmqqevQY6pgE%2FsKE8ULUuXqO2%2FGBxCm%2BHk9vC%2FPLCZXrcHnzFV49wNcKCZXngbadiG02vdGWLjMk37D%2B6DTituxxo4O%2B8S4A7s0Ic4Dd%2BkoW%2FMGZvjB3bx%2F4bXFFnjxJYoxX6k14vLWZJIyyH8P6zi9Rf4pRr2jozlya8%2BLH38Mk7ybMMZEDPOYhc0%2FzmK0CmrgHZfAzxS3npeS5Vf3gE4DrIGEHuPYso2O4uFilG&X-Amz-Signature=b845ecd5493afcc31f96362ccf4c4a8efe41a6d4504a524a10a733ee848a4150&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XY3OYV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICAdOuWPFLM%2B5Mu3cWJERtBRTOVZUv%2BI7aWIdF6%2B8k3EAiBk%2F5QXfgwbERvm0MQ22nplhLWIgyTtvEaZL5AJ50vBtCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3C5sLwiNPufqdruKtwDzuUWqPLVzF4KZUV88QYYVqFtM5g0R8lIXKKTVGU1F6cP%2FqZU9Ndm83%2BBhxGofQvzJqafs21CKu2484olY9saYZhps4k7HoMoAf73ECZP7sdIdi%2FCIKsPT%2F%2BWnDnpT1iSfmuO6IzJVR5ZNmyM91Ba9zj5RQlCcS47obA1kZSXhTue6UAvXRaJE6PvBBdp2lsx0FBxuPrmvjq%2B6jRTzsgtL1lK4jrOkpNdbH%2Bdtz%2F3yd5Yy6%2BxBvBO3%2F7RN40tjkinYF%2BOeIaz26MQhOb%2Fw4f4bDAJwRky1i4aw0EvOOjn3dOH5x3uqG5OTESaCti5%2B2OpYABbRQ9XPZT6JG%2BTsUyQhk%2BspGaUe%2B9nBoQC%2BRb8hyl6tOkzzMHbMXBdl2vL7Z0abi2yceqv181bJGf%2BWJ8Kr0qj6Ix8RJaImsviM29dEoqkYr1mMO07JkgBAD%2BCy2OanNoWWhXiTu1xin6btPfuoqKDi2TWg54qb5e0LW22B7p0Q3qn%2Fhpbn%2BqhSwtmdosPtfKgHHcYsmTnpRYkWdVuQoAt%2BCAHhFlUweNEn5kJQQ4O0WUX8Be6iUUfPzv6ShgNTAXu2NxqSYtQeAOIToBpqfeFWidg897WxahWRa5B%2B7wSGK2EiHyW5gxhACkwmqqevQY6pgE%2FsKE8ULUuXqO2%2FGBxCm%2BHk9vC%2FPLCZXrcHnzFV49wNcKCZXngbadiG02vdGWLjMk37D%2B6DTituxxo4O%2B8S4A7s0Ic4Dd%2BkoW%2FMGZvjB3bx%2F4bXFFnjxJYoxX6k14vLWZJIyyH8P6zi9Rf4pRr2jozlya8%2BLH38Mk7ybMMZEDPOYhc0%2FzmK0CmrgHZfAzxS3npeS5Vf3gE4DrIGEHuPYso2O4uFilG&X-Amz-Signature=18c925e0b3bce2e16a409c0c35f6fd1846da0fce87d5c9cef0dffa9ba63c0366&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XY3OYV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICAdOuWPFLM%2B5Mu3cWJERtBRTOVZUv%2BI7aWIdF6%2B8k3EAiBk%2F5QXfgwbERvm0MQ22nplhLWIgyTtvEaZL5AJ50vBtCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3C5sLwiNPufqdruKtwDzuUWqPLVzF4KZUV88QYYVqFtM5g0R8lIXKKTVGU1F6cP%2FqZU9Ndm83%2BBhxGofQvzJqafs21CKu2484olY9saYZhps4k7HoMoAf73ECZP7sdIdi%2FCIKsPT%2F%2BWnDnpT1iSfmuO6IzJVR5ZNmyM91Ba9zj5RQlCcS47obA1kZSXhTue6UAvXRaJE6PvBBdp2lsx0FBxuPrmvjq%2B6jRTzsgtL1lK4jrOkpNdbH%2Bdtz%2F3yd5Yy6%2BxBvBO3%2F7RN40tjkinYF%2BOeIaz26MQhOb%2Fw4f4bDAJwRky1i4aw0EvOOjn3dOH5x3uqG5OTESaCti5%2B2OpYABbRQ9XPZT6JG%2BTsUyQhk%2BspGaUe%2B9nBoQC%2BRb8hyl6tOkzzMHbMXBdl2vL7Z0abi2yceqv181bJGf%2BWJ8Kr0qj6Ix8RJaImsviM29dEoqkYr1mMO07JkgBAD%2BCy2OanNoWWhXiTu1xin6btPfuoqKDi2TWg54qb5e0LW22B7p0Q3qn%2Fhpbn%2BqhSwtmdosPtfKgHHcYsmTnpRYkWdVuQoAt%2BCAHhFlUweNEn5kJQQ4O0WUX8Be6iUUfPzv6ShgNTAXu2NxqSYtQeAOIToBpqfeFWidg897WxahWRa5B%2B7wSGK2EiHyW5gxhACkwmqqevQY6pgE%2FsKE8ULUuXqO2%2FGBxCm%2BHk9vC%2FPLCZXrcHnzFV49wNcKCZXngbadiG02vdGWLjMk37D%2B6DTituxxo4O%2B8S4A7s0Ic4Dd%2BkoW%2FMGZvjB3bx%2F4bXFFnjxJYoxX6k14vLWZJIyyH8P6zi9Rf4pRr2jozlya8%2BLH38Mk7ybMMZEDPOYhc0%2FzmK0CmrgHZfAzxS3npeS5Vf3gE4DrIGEHuPYso2O4uFilG&X-Amz-Signature=c11f99e17418c69251009ad64ce5a499cbca72726e5b4297e9d1bbd4400b9b98&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XY3OYV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICAdOuWPFLM%2B5Mu3cWJERtBRTOVZUv%2BI7aWIdF6%2B8k3EAiBk%2F5QXfgwbERvm0MQ22nplhLWIgyTtvEaZL5AJ50vBtCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3C5sLwiNPufqdruKtwDzuUWqPLVzF4KZUV88QYYVqFtM5g0R8lIXKKTVGU1F6cP%2FqZU9Ndm83%2BBhxGofQvzJqafs21CKu2484olY9saYZhps4k7HoMoAf73ECZP7sdIdi%2FCIKsPT%2F%2BWnDnpT1iSfmuO6IzJVR5ZNmyM91Ba9zj5RQlCcS47obA1kZSXhTue6UAvXRaJE6PvBBdp2lsx0FBxuPrmvjq%2B6jRTzsgtL1lK4jrOkpNdbH%2Bdtz%2F3yd5Yy6%2BxBvBO3%2F7RN40tjkinYF%2BOeIaz26MQhOb%2Fw4f4bDAJwRky1i4aw0EvOOjn3dOH5x3uqG5OTESaCti5%2B2OpYABbRQ9XPZT6JG%2BTsUyQhk%2BspGaUe%2B9nBoQC%2BRb8hyl6tOkzzMHbMXBdl2vL7Z0abi2yceqv181bJGf%2BWJ8Kr0qj6Ix8RJaImsviM29dEoqkYr1mMO07JkgBAD%2BCy2OanNoWWhXiTu1xin6btPfuoqKDi2TWg54qb5e0LW22B7p0Q3qn%2Fhpbn%2BqhSwtmdosPtfKgHHcYsmTnpRYkWdVuQoAt%2BCAHhFlUweNEn5kJQQ4O0WUX8Be6iUUfPzv6ShgNTAXu2NxqSYtQeAOIToBpqfeFWidg897WxahWRa5B%2B7wSGK2EiHyW5gxhACkwmqqevQY6pgE%2FsKE8ULUuXqO2%2FGBxCm%2BHk9vC%2FPLCZXrcHnzFV49wNcKCZXngbadiG02vdGWLjMk37D%2B6DTituxxo4O%2B8S4A7s0Ic4Dd%2BkoW%2FMGZvjB3bx%2F4bXFFnjxJYoxX6k14vLWZJIyyH8P6zi9Rf4pRr2jozlya8%2BLH38Mk7ybMMZEDPOYhc0%2FzmK0CmrgHZfAzxS3npeS5Vf3gE4DrIGEHuPYso2O4uFilG&X-Amz-Signature=fb8a68959e8e9fd7d65fb96760ee1bae1ab31bd569c4c040b868ca7df51a3481&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XY3OYV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICAdOuWPFLM%2B5Mu3cWJERtBRTOVZUv%2BI7aWIdF6%2B8k3EAiBk%2F5QXfgwbERvm0MQ22nplhLWIgyTtvEaZL5AJ50vBtCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3C5sLwiNPufqdruKtwDzuUWqPLVzF4KZUV88QYYVqFtM5g0R8lIXKKTVGU1F6cP%2FqZU9Ndm83%2BBhxGofQvzJqafs21CKu2484olY9saYZhps4k7HoMoAf73ECZP7sdIdi%2FCIKsPT%2F%2BWnDnpT1iSfmuO6IzJVR5ZNmyM91Ba9zj5RQlCcS47obA1kZSXhTue6UAvXRaJE6PvBBdp2lsx0FBxuPrmvjq%2B6jRTzsgtL1lK4jrOkpNdbH%2Bdtz%2F3yd5Yy6%2BxBvBO3%2F7RN40tjkinYF%2BOeIaz26MQhOb%2Fw4f4bDAJwRky1i4aw0EvOOjn3dOH5x3uqG5OTESaCti5%2B2OpYABbRQ9XPZT6JG%2BTsUyQhk%2BspGaUe%2B9nBoQC%2BRb8hyl6tOkzzMHbMXBdl2vL7Z0abi2yceqv181bJGf%2BWJ8Kr0qj6Ix8RJaImsviM29dEoqkYr1mMO07JkgBAD%2BCy2OanNoWWhXiTu1xin6btPfuoqKDi2TWg54qb5e0LW22B7p0Q3qn%2Fhpbn%2BqhSwtmdosPtfKgHHcYsmTnpRYkWdVuQoAt%2BCAHhFlUweNEn5kJQQ4O0WUX8Be6iUUfPzv6ShgNTAXu2NxqSYtQeAOIToBpqfeFWidg897WxahWRa5B%2B7wSGK2EiHyW5gxhACkwmqqevQY6pgE%2FsKE8ULUuXqO2%2FGBxCm%2BHk9vC%2FPLCZXrcHnzFV49wNcKCZXngbadiG02vdGWLjMk37D%2B6DTituxxo4O%2B8S4A7s0Ic4Dd%2BkoW%2FMGZvjB3bx%2F4bXFFnjxJYoxX6k14vLWZJIyyH8P6zi9Rf4pRr2jozlya8%2BLH38Mk7ybMMZEDPOYhc0%2FzmK0CmrgHZfAzxS3npeS5Vf3gE4DrIGEHuPYso2O4uFilG&X-Amz-Signature=f003df5c9377d92a686aa056eab826e67f860c9e2a13ae84cb5b71b9b84a1cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XY3OYV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICAdOuWPFLM%2B5Mu3cWJERtBRTOVZUv%2BI7aWIdF6%2B8k3EAiBk%2F5QXfgwbERvm0MQ22nplhLWIgyTtvEaZL5AJ50vBtCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3C5sLwiNPufqdruKtwDzuUWqPLVzF4KZUV88QYYVqFtM5g0R8lIXKKTVGU1F6cP%2FqZU9Ndm83%2BBhxGofQvzJqafs21CKu2484olY9saYZhps4k7HoMoAf73ECZP7sdIdi%2FCIKsPT%2F%2BWnDnpT1iSfmuO6IzJVR5ZNmyM91Ba9zj5RQlCcS47obA1kZSXhTue6UAvXRaJE6PvBBdp2lsx0FBxuPrmvjq%2B6jRTzsgtL1lK4jrOkpNdbH%2Bdtz%2F3yd5Yy6%2BxBvBO3%2F7RN40tjkinYF%2BOeIaz26MQhOb%2Fw4f4bDAJwRky1i4aw0EvOOjn3dOH5x3uqG5OTESaCti5%2B2OpYABbRQ9XPZT6JG%2BTsUyQhk%2BspGaUe%2B9nBoQC%2BRb8hyl6tOkzzMHbMXBdl2vL7Z0abi2yceqv181bJGf%2BWJ8Kr0qj6Ix8RJaImsviM29dEoqkYr1mMO07JkgBAD%2BCy2OanNoWWhXiTu1xin6btPfuoqKDi2TWg54qb5e0LW22B7p0Q3qn%2Fhpbn%2BqhSwtmdosPtfKgHHcYsmTnpRYkWdVuQoAt%2BCAHhFlUweNEn5kJQQ4O0WUX8Be6iUUfPzv6ShgNTAXu2NxqSYtQeAOIToBpqfeFWidg897WxahWRa5B%2B7wSGK2EiHyW5gxhACkwmqqevQY6pgE%2FsKE8ULUuXqO2%2FGBxCm%2BHk9vC%2FPLCZXrcHnzFV49wNcKCZXngbadiG02vdGWLjMk37D%2B6DTituxxo4O%2B8S4A7s0Ic4Dd%2BkoW%2FMGZvjB3bx%2F4bXFFnjxJYoxX6k14vLWZJIyyH8P6zi9Rf4pRr2jozlya8%2BLH38Mk7ybMMZEDPOYhc0%2FzmK0CmrgHZfAzxS3npeS5Vf3gE4DrIGEHuPYso2O4uFilG&X-Amz-Signature=023a54517c68150bfce37984d6c2a23aa669faad0114c25df48770ef71100fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

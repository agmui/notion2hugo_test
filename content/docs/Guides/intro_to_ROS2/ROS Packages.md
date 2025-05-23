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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVV6E3G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD7MLpgXdk5fHil41yxvbcg5x533mmYJo11yiP3JnouQwIgdVZzSnqHiihvoKx4kZvVPOV9JNrdJ6i%2Fd7P091o1pyEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG0EhAuowm5XRvt8yrcA1eHXWfUQraTLv%2BBh2fbLD7jqvyKQDbFH2Kepkyao9BUbbK85lxrfSpXfek6kZaUJkoz86wOKT0LagPaVWs4Xjj%2FmYuC89UstOOT%2F84g2CQZ5oYETc0G%2FP6p9iVLJuFuGNonZHDTsTmp7Qm7LEFmxmy3IyLk2bkSk5er%2Fhq%2F2xWO1Eu8oxspJqrxt3nsoDEmjq1ux%2BSEIeiAl%2FOF7sKeJi1JJBAW6CmHO7GhjShgijdwFeojNcd7QMlebB8VlwqTU0MGI1x%2B84h%2FnMIYOYAGxcjX521wMgCWm1EaruS8U81gaI45AQ%2FmvlnpSID8dxAzJG0KDoLOkpTnX6OCKIj%2BJBg0xfkJnBkUkbRYYIhVImkYm4zPTUBV2%2BD9zYSUtkuOjF0r1RrWW%2BooKiLrBS0XX2ayrj7UsP83Q%2FJF26RuudG3%2BVsIaZJ2aI8Q2EDiiY1eqy1MZqTOXrRSYW4RriP6E5YENa%2FKWfIGntMPoR2OMvRUAxrNVXo8ugqA1ClVSC0txaV%2F1RI3J%2B9imSThfhMOOnH%2BAsa8Ss08mZ2%2BZzi3Zty%2Fv3UO37sk1KU9LMxy8EATEu5mZLSwILvafJSzo3GF1T%2Fej7m3%2FfnZ3jCqGetJa0tSfnCzBQ0z3vlPjA5tMJOFv8EGOqUBxC2fW1GWoI63mNQVPFhTs3W%2FHmNYtK%2FIGJYK8BVvNPSCV2vedGcw5bI3AwV61ck6VhTjdLIlKaPklqIDNx4kn5cp5JQ9tWpvmm0PyFeWj1PCzyWyqouxZ0Vu9kzAUBfIM%2B%2BUawDkwmzF0%2BlvBde2an7QapJFh2gnwaWKlG6ViFNqO4GToF1%2B7ZB00lTZEnRMxcHc5%2BGbOqkgPZMNWfQwa%2BMUcRNN&X-Amz-Signature=1f741c638bc50e61a71001f2766cda49b036fb1653135e687dfe5b47e0aa95ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVV6E3G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD7MLpgXdk5fHil41yxvbcg5x533mmYJo11yiP3JnouQwIgdVZzSnqHiihvoKx4kZvVPOV9JNrdJ6i%2Fd7P091o1pyEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG0EhAuowm5XRvt8yrcA1eHXWfUQraTLv%2BBh2fbLD7jqvyKQDbFH2Kepkyao9BUbbK85lxrfSpXfek6kZaUJkoz86wOKT0LagPaVWs4Xjj%2FmYuC89UstOOT%2F84g2CQZ5oYETc0G%2FP6p9iVLJuFuGNonZHDTsTmp7Qm7LEFmxmy3IyLk2bkSk5er%2Fhq%2F2xWO1Eu8oxspJqrxt3nsoDEmjq1ux%2BSEIeiAl%2FOF7sKeJi1JJBAW6CmHO7GhjShgijdwFeojNcd7QMlebB8VlwqTU0MGI1x%2B84h%2FnMIYOYAGxcjX521wMgCWm1EaruS8U81gaI45AQ%2FmvlnpSID8dxAzJG0KDoLOkpTnX6OCKIj%2BJBg0xfkJnBkUkbRYYIhVImkYm4zPTUBV2%2BD9zYSUtkuOjF0r1RrWW%2BooKiLrBS0XX2ayrj7UsP83Q%2FJF26RuudG3%2BVsIaZJ2aI8Q2EDiiY1eqy1MZqTOXrRSYW4RriP6E5YENa%2FKWfIGntMPoR2OMvRUAxrNVXo8ugqA1ClVSC0txaV%2F1RI3J%2B9imSThfhMOOnH%2BAsa8Ss08mZ2%2BZzi3Zty%2Fv3UO37sk1KU9LMxy8EATEu5mZLSwILvafJSzo3GF1T%2Fej7m3%2FfnZ3jCqGetJa0tSfnCzBQ0z3vlPjA5tMJOFv8EGOqUBxC2fW1GWoI63mNQVPFhTs3W%2FHmNYtK%2FIGJYK8BVvNPSCV2vedGcw5bI3AwV61ck6VhTjdLIlKaPklqIDNx4kn5cp5JQ9tWpvmm0PyFeWj1PCzyWyqouxZ0Vu9kzAUBfIM%2B%2BUawDkwmzF0%2BlvBde2an7QapJFh2gnwaWKlG6ViFNqO4GToF1%2B7ZB00lTZEnRMxcHc5%2BGbOqkgPZMNWfQwa%2BMUcRNN&X-Amz-Signature=7ecceeeeb2eaa0a6cc9d02931296253a52c42a1f6b9aa066fbb5b675995c9d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVV6E3G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD7MLpgXdk5fHil41yxvbcg5x533mmYJo11yiP3JnouQwIgdVZzSnqHiihvoKx4kZvVPOV9JNrdJ6i%2Fd7P091o1pyEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG0EhAuowm5XRvt8yrcA1eHXWfUQraTLv%2BBh2fbLD7jqvyKQDbFH2Kepkyao9BUbbK85lxrfSpXfek6kZaUJkoz86wOKT0LagPaVWs4Xjj%2FmYuC89UstOOT%2F84g2CQZ5oYETc0G%2FP6p9iVLJuFuGNonZHDTsTmp7Qm7LEFmxmy3IyLk2bkSk5er%2Fhq%2F2xWO1Eu8oxspJqrxt3nsoDEmjq1ux%2BSEIeiAl%2FOF7sKeJi1JJBAW6CmHO7GhjShgijdwFeojNcd7QMlebB8VlwqTU0MGI1x%2B84h%2FnMIYOYAGxcjX521wMgCWm1EaruS8U81gaI45AQ%2FmvlnpSID8dxAzJG0KDoLOkpTnX6OCKIj%2BJBg0xfkJnBkUkbRYYIhVImkYm4zPTUBV2%2BD9zYSUtkuOjF0r1RrWW%2BooKiLrBS0XX2ayrj7UsP83Q%2FJF26RuudG3%2BVsIaZJ2aI8Q2EDiiY1eqy1MZqTOXrRSYW4RriP6E5YENa%2FKWfIGntMPoR2OMvRUAxrNVXo8ugqA1ClVSC0txaV%2F1RI3J%2B9imSThfhMOOnH%2BAsa8Ss08mZ2%2BZzi3Zty%2Fv3UO37sk1KU9LMxy8EATEu5mZLSwILvafJSzo3GF1T%2Fej7m3%2FfnZ3jCqGetJa0tSfnCzBQ0z3vlPjA5tMJOFv8EGOqUBxC2fW1GWoI63mNQVPFhTs3W%2FHmNYtK%2FIGJYK8BVvNPSCV2vedGcw5bI3AwV61ck6VhTjdLIlKaPklqIDNx4kn5cp5JQ9tWpvmm0PyFeWj1PCzyWyqouxZ0Vu9kzAUBfIM%2B%2BUawDkwmzF0%2BlvBde2an7QapJFh2gnwaWKlG6ViFNqO4GToF1%2B7ZB00lTZEnRMxcHc5%2BGbOqkgPZMNWfQwa%2BMUcRNN&X-Amz-Signature=dd8caeaa11d1cfe9e543b0a0f9247a55c7dd7c9f81486af07601cf6d137c6df6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVV6E3G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD7MLpgXdk5fHil41yxvbcg5x533mmYJo11yiP3JnouQwIgdVZzSnqHiihvoKx4kZvVPOV9JNrdJ6i%2Fd7P091o1pyEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG0EhAuowm5XRvt8yrcA1eHXWfUQraTLv%2BBh2fbLD7jqvyKQDbFH2Kepkyao9BUbbK85lxrfSpXfek6kZaUJkoz86wOKT0LagPaVWs4Xjj%2FmYuC89UstOOT%2F84g2CQZ5oYETc0G%2FP6p9iVLJuFuGNonZHDTsTmp7Qm7LEFmxmy3IyLk2bkSk5er%2Fhq%2F2xWO1Eu8oxspJqrxt3nsoDEmjq1ux%2BSEIeiAl%2FOF7sKeJi1JJBAW6CmHO7GhjShgijdwFeojNcd7QMlebB8VlwqTU0MGI1x%2B84h%2FnMIYOYAGxcjX521wMgCWm1EaruS8U81gaI45AQ%2FmvlnpSID8dxAzJG0KDoLOkpTnX6OCKIj%2BJBg0xfkJnBkUkbRYYIhVImkYm4zPTUBV2%2BD9zYSUtkuOjF0r1RrWW%2BooKiLrBS0XX2ayrj7UsP83Q%2FJF26RuudG3%2BVsIaZJ2aI8Q2EDiiY1eqy1MZqTOXrRSYW4RriP6E5YENa%2FKWfIGntMPoR2OMvRUAxrNVXo8ugqA1ClVSC0txaV%2F1RI3J%2B9imSThfhMOOnH%2BAsa8Ss08mZ2%2BZzi3Zty%2Fv3UO37sk1KU9LMxy8EATEu5mZLSwILvafJSzo3GF1T%2Fej7m3%2FfnZ3jCqGetJa0tSfnCzBQ0z3vlPjA5tMJOFv8EGOqUBxC2fW1GWoI63mNQVPFhTs3W%2FHmNYtK%2FIGJYK8BVvNPSCV2vedGcw5bI3AwV61ck6VhTjdLIlKaPklqIDNx4kn5cp5JQ9tWpvmm0PyFeWj1PCzyWyqouxZ0Vu9kzAUBfIM%2B%2BUawDkwmzF0%2BlvBde2an7QapJFh2gnwaWKlG6ViFNqO4GToF1%2B7ZB00lTZEnRMxcHc5%2BGbOqkgPZMNWfQwa%2BMUcRNN&X-Amz-Signature=719fa6731c13315ca243d2e2cbe1b68b28cac2eca75747884acae6fac170cad2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVV6E3G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD7MLpgXdk5fHil41yxvbcg5x533mmYJo11yiP3JnouQwIgdVZzSnqHiihvoKx4kZvVPOV9JNrdJ6i%2Fd7P091o1pyEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG0EhAuowm5XRvt8yrcA1eHXWfUQraTLv%2BBh2fbLD7jqvyKQDbFH2Kepkyao9BUbbK85lxrfSpXfek6kZaUJkoz86wOKT0LagPaVWs4Xjj%2FmYuC89UstOOT%2F84g2CQZ5oYETc0G%2FP6p9iVLJuFuGNonZHDTsTmp7Qm7LEFmxmy3IyLk2bkSk5er%2Fhq%2F2xWO1Eu8oxspJqrxt3nsoDEmjq1ux%2BSEIeiAl%2FOF7sKeJi1JJBAW6CmHO7GhjShgijdwFeojNcd7QMlebB8VlwqTU0MGI1x%2B84h%2FnMIYOYAGxcjX521wMgCWm1EaruS8U81gaI45AQ%2FmvlnpSID8dxAzJG0KDoLOkpTnX6OCKIj%2BJBg0xfkJnBkUkbRYYIhVImkYm4zPTUBV2%2BD9zYSUtkuOjF0r1RrWW%2BooKiLrBS0XX2ayrj7UsP83Q%2FJF26RuudG3%2BVsIaZJ2aI8Q2EDiiY1eqy1MZqTOXrRSYW4RriP6E5YENa%2FKWfIGntMPoR2OMvRUAxrNVXo8ugqA1ClVSC0txaV%2F1RI3J%2B9imSThfhMOOnH%2BAsa8Ss08mZ2%2BZzi3Zty%2Fv3UO37sk1KU9LMxy8EATEu5mZLSwILvafJSzo3GF1T%2Fej7m3%2FfnZ3jCqGetJa0tSfnCzBQ0z3vlPjA5tMJOFv8EGOqUBxC2fW1GWoI63mNQVPFhTs3W%2FHmNYtK%2FIGJYK8BVvNPSCV2vedGcw5bI3AwV61ck6VhTjdLIlKaPklqIDNx4kn5cp5JQ9tWpvmm0PyFeWj1PCzyWyqouxZ0Vu9kzAUBfIM%2B%2BUawDkwmzF0%2BlvBde2an7QapJFh2gnwaWKlG6ViFNqO4GToF1%2B7ZB00lTZEnRMxcHc5%2BGbOqkgPZMNWfQwa%2BMUcRNN&X-Amz-Signature=b5d8ba6b156419c6e836ba14b9ef62ca7d4ce4f5358152831c448de64e2ed823&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVV6E3G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD7MLpgXdk5fHil41yxvbcg5x533mmYJo11yiP3JnouQwIgdVZzSnqHiihvoKx4kZvVPOV9JNrdJ6i%2Fd7P091o1pyEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG0EhAuowm5XRvt8yrcA1eHXWfUQraTLv%2BBh2fbLD7jqvyKQDbFH2Kepkyao9BUbbK85lxrfSpXfek6kZaUJkoz86wOKT0LagPaVWs4Xjj%2FmYuC89UstOOT%2F84g2CQZ5oYETc0G%2FP6p9iVLJuFuGNonZHDTsTmp7Qm7LEFmxmy3IyLk2bkSk5er%2Fhq%2F2xWO1Eu8oxspJqrxt3nsoDEmjq1ux%2BSEIeiAl%2FOF7sKeJi1JJBAW6CmHO7GhjShgijdwFeojNcd7QMlebB8VlwqTU0MGI1x%2B84h%2FnMIYOYAGxcjX521wMgCWm1EaruS8U81gaI45AQ%2FmvlnpSID8dxAzJG0KDoLOkpTnX6OCKIj%2BJBg0xfkJnBkUkbRYYIhVImkYm4zPTUBV2%2BD9zYSUtkuOjF0r1RrWW%2BooKiLrBS0XX2ayrj7UsP83Q%2FJF26RuudG3%2BVsIaZJ2aI8Q2EDiiY1eqy1MZqTOXrRSYW4RriP6E5YENa%2FKWfIGntMPoR2OMvRUAxrNVXo8ugqA1ClVSC0txaV%2F1RI3J%2B9imSThfhMOOnH%2BAsa8Ss08mZ2%2BZzi3Zty%2Fv3UO37sk1KU9LMxy8EATEu5mZLSwILvafJSzo3GF1T%2Fej7m3%2FfnZ3jCqGetJa0tSfnCzBQ0z3vlPjA5tMJOFv8EGOqUBxC2fW1GWoI63mNQVPFhTs3W%2FHmNYtK%2FIGJYK8BVvNPSCV2vedGcw5bI3AwV61ck6VhTjdLIlKaPklqIDNx4kn5cp5JQ9tWpvmm0PyFeWj1PCzyWyqouxZ0Vu9kzAUBfIM%2B%2BUawDkwmzF0%2BlvBde2an7QapJFh2gnwaWKlG6ViFNqO4GToF1%2B7ZB00lTZEnRMxcHc5%2BGbOqkgPZMNWfQwa%2BMUcRNN&X-Amz-Signature=4c970fbdfedf2447411d8767870e9409b53e233ce25298bef27139ba9cfd3303&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVV6E3G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD7MLpgXdk5fHil41yxvbcg5x533mmYJo11yiP3JnouQwIgdVZzSnqHiihvoKx4kZvVPOV9JNrdJ6i%2Fd7P091o1pyEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG0EhAuowm5XRvt8yrcA1eHXWfUQraTLv%2BBh2fbLD7jqvyKQDbFH2Kepkyao9BUbbK85lxrfSpXfek6kZaUJkoz86wOKT0LagPaVWs4Xjj%2FmYuC89UstOOT%2F84g2CQZ5oYETc0G%2FP6p9iVLJuFuGNonZHDTsTmp7Qm7LEFmxmy3IyLk2bkSk5er%2Fhq%2F2xWO1Eu8oxspJqrxt3nsoDEmjq1ux%2BSEIeiAl%2FOF7sKeJi1JJBAW6CmHO7GhjShgijdwFeojNcd7QMlebB8VlwqTU0MGI1x%2B84h%2FnMIYOYAGxcjX521wMgCWm1EaruS8U81gaI45AQ%2FmvlnpSID8dxAzJG0KDoLOkpTnX6OCKIj%2BJBg0xfkJnBkUkbRYYIhVImkYm4zPTUBV2%2BD9zYSUtkuOjF0r1RrWW%2BooKiLrBS0XX2ayrj7UsP83Q%2FJF26RuudG3%2BVsIaZJ2aI8Q2EDiiY1eqy1MZqTOXrRSYW4RriP6E5YENa%2FKWfIGntMPoR2OMvRUAxrNVXo8ugqA1ClVSC0txaV%2F1RI3J%2B9imSThfhMOOnH%2BAsa8Ss08mZ2%2BZzi3Zty%2Fv3UO37sk1KU9LMxy8EATEu5mZLSwILvafJSzo3GF1T%2Fej7m3%2FfnZ3jCqGetJa0tSfnCzBQ0z3vlPjA5tMJOFv8EGOqUBxC2fW1GWoI63mNQVPFhTs3W%2FHmNYtK%2FIGJYK8BVvNPSCV2vedGcw5bI3AwV61ck6VhTjdLIlKaPklqIDNx4kn5cp5JQ9tWpvmm0PyFeWj1PCzyWyqouxZ0Vu9kzAUBfIM%2B%2BUawDkwmzF0%2BlvBde2an7QapJFh2gnwaWKlG6ViFNqO4GToF1%2B7ZB00lTZEnRMxcHc5%2BGbOqkgPZMNWfQwa%2BMUcRNN&X-Amz-Signature=97113450d32679d071de68aee19f41534e468602d53b5921456d9949da641fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

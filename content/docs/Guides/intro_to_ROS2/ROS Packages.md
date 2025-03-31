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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDJLCTV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIElL%2FbAvLbYBj%2B86%2FiBPPYZf8Vn%2FGEDTAKT91KdEBa1bAiEAnNrEoHVczWgu3OTq%2F5wwriiFLItNjsb50yeA1KCnH04qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsL336f5cP0PovFDCrcA2ehuIB4REvZg4pQ2iVq7Hy6hz%2Fuwkg%2BayOWe%2B3ISn%2BEfni8hJg2fPVCYD%2Fh%2BFyQkhQbMf7IeDK33gD9mj8kqaL5RIyOAcjv%2FE3zBXqpEFX%2BXEeH2a%2FEvVeHTCoNRfrh9rpCrMdyqJQt4x0t9Xa7pfdr3lIDRmejQHKJLwU6MOK4wJM%2BlULYexYUO66guC6zf8nOayULbV6zhJN5bJ%2FYRwLgEVff%2FKjBmnme8GmWlNelDeQXKN6gFNdDJR0z9nC5yrODg%2FvuKCUvYJNpvWK9topYg4unfZ1KeFWak2zqAMJc8idWpOEVZilK6ud%2FVc3WugGzdz4i2dFi1mEwRIIykzSzU%2F9lwsk%2BhzS17T4FmWmfSZGCVeyHa4%2B8rh867u%2BBNibtMNXKAc%2FCUujWih4iRBHeuwZiTIz07B8eAJOBPmFxTUck02DHWhrv9dNKmlDA8ZdGs3dfWF6DM40S5o2HAVcXjGDLsLJQQqYVcODNhNgMxC8BxC%2FQLA%2FMXJrllTl50tca9k2Os%2F0kmErEwNspCEkVAIblSCtjb2zs%2FW67qEU4RrbbTXlBAFRombCTiazTM%2Bn%2BTYExDgfJqMIIJmj7tpZqVgb1HA8NdUVby4zEFG%2Byt2SnHtbdxLm3lNpxMMu4q78GOqUBGW%2B0g5YLfXM0fiLJFLZmvZpnakgWsy4OIvwlrH5Ed8cKlYhp3Eed8hsZZ5Sm7cGJDivTg7xSKeIyKjfvqt%2BwV8FteRLJTUJj700%2BPVh9qsz%2F4k8nPL3H%2F07bT7DOWSgXB7w8W0mR6i69PGeOEp06wA76DfaEWPLKFOwI3ptCNYs9ljpSfe53MugZMiquxoARGX7LVZH2c1s748z5kxymMMDXOx2m&X-Amz-Signature=e7514f3565d8497e14ff250793ff17b32f381caad329fda3ab55d45e6885150d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDJLCTV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIElL%2FbAvLbYBj%2B86%2FiBPPYZf8Vn%2FGEDTAKT91KdEBa1bAiEAnNrEoHVczWgu3OTq%2F5wwriiFLItNjsb50yeA1KCnH04qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsL336f5cP0PovFDCrcA2ehuIB4REvZg4pQ2iVq7Hy6hz%2Fuwkg%2BayOWe%2B3ISn%2BEfni8hJg2fPVCYD%2Fh%2BFyQkhQbMf7IeDK33gD9mj8kqaL5RIyOAcjv%2FE3zBXqpEFX%2BXEeH2a%2FEvVeHTCoNRfrh9rpCrMdyqJQt4x0t9Xa7pfdr3lIDRmejQHKJLwU6MOK4wJM%2BlULYexYUO66guC6zf8nOayULbV6zhJN5bJ%2FYRwLgEVff%2FKjBmnme8GmWlNelDeQXKN6gFNdDJR0z9nC5yrODg%2FvuKCUvYJNpvWK9topYg4unfZ1KeFWak2zqAMJc8idWpOEVZilK6ud%2FVc3WugGzdz4i2dFi1mEwRIIykzSzU%2F9lwsk%2BhzS17T4FmWmfSZGCVeyHa4%2B8rh867u%2BBNibtMNXKAc%2FCUujWih4iRBHeuwZiTIz07B8eAJOBPmFxTUck02DHWhrv9dNKmlDA8ZdGs3dfWF6DM40S5o2HAVcXjGDLsLJQQqYVcODNhNgMxC8BxC%2FQLA%2FMXJrllTl50tca9k2Os%2F0kmErEwNspCEkVAIblSCtjb2zs%2FW67qEU4RrbbTXlBAFRombCTiazTM%2Bn%2BTYExDgfJqMIIJmj7tpZqVgb1HA8NdUVby4zEFG%2Byt2SnHtbdxLm3lNpxMMu4q78GOqUBGW%2B0g5YLfXM0fiLJFLZmvZpnakgWsy4OIvwlrH5Ed8cKlYhp3Eed8hsZZ5Sm7cGJDivTg7xSKeIyKjfvqt%2BwV8FteRLJTUJj700%2BPVh9qsz%2F4k8nPL3H%2F07bT7DOWSgXB7w8W0mR6i69PGeOEp06wA76DfaEWPLKFOwI3ptCNYs9ljpSfe53MugZMiquxoARGX7LVZH2c1s748z5kxymMMDXOx2m&X-Amz-Signature=81f2b61bfbf29d9c90e87f04e7e27c2aa31154701b1503a51e7046d5daea483e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDJLCTV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIElL%2FbAvLbYBj%2B86%2FiBPPYZf8Vn%2FGEDTAKT91KdEBa1bAiEAnNrEoHVczWgu3OTq%2F5wwriiFLItNjsb50yeA1KCnH04qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsL336f5cP0PovFDCrcA2ehuIB4REvZg4pQ2iVq7Hy6hz%2Fuwkg%2BayOWe%2B3ISn%2BEfni8hJg2fPVCYD%2Fh%2BFyQkhQbMf7IeDK33gD9mj8kqaL5RIyOAcjv%2FE3zBXqpEFX%2BXEeH2a%2FEvVeHTCoNRfrh9rpCrMdyqJQt4x0t9Xa7pfdr3lIDRmejQHKJLwU6MOK4wJM%2BlULYexYUO66guC6zf8nOayULbV6zhJN5bJ%2FYRwLgEVff%2FKjBmnme8GmWlNelDeQXKN6gFNdDJR0z9nC5yrODg%2FvuKCUvYJNpvWK9topYg4unfZ1KeFWak2zqAMJc8idWpOEVZilK6ud%2FVc3WugGzdz4i2dFi1mEwRIIykzSzU%2F9lwsk%2BhzS17T4FmWmfSZGCVeyHa4%2B8rh867u%2BBNibtMNXKAc%2FCUujWih4iRBHeuwZiTIz07B8eAJOBPmFxTUck02DHWhrv9dNKmlDA8ZdGs3dfWF6DM40S5o2HAVcXjGDLsLJQQqYVcODNhNgMxC8BxC%2FQLA%2FMXJrllTl50tca9k2Os%2F0kmErEwNspCEkVAIblSCtjb2zs%2FW67qEU4RrbbTXlBAFRombCTiazTM%2Bn%2BTYExDgfJqMIIJmj7tpZqVgb1HA8NdUVby4zEFG%2Byt2SnHtbdxLm3lNpxMMu4q78GOqUBGW%2B0g5YLfXM0fiLJFLZmvZpnakgWsy4OIvwlrH5Ed8cKlYhp3Eed8hsZZ5Sm7cGJDivTg7xSKeIyKjfvqt%2BwV8FteRLJTUJj700%2BPVh9qsz%2F4k8nPL3H%2F07bT7DOWSgXB7w8W0mR6i69PGeOEp06wA76DfaEWPLKFOwI3ptCNYs9ljpSfe53MugZMiquxoARGX7LVZH2c1s748z5kxymMMDXOx2m&X-Amz-Signature=2af3a342b53d9a4f39513d96f72c9acd365be41c1ef5a1b31cc0c205c7f4b530&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDJLCTV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIElL%2FbAvLbYBj%2B86%2FiBPPYZf8Vn%2FGEDTAKT91KdEBa1bAiEAnNrEoHVczWgu3OTq%2F5wwriiFLItNjsb50yeA1KCnH04qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsL336f5cP0PovFDCrcA2ehuIB4REvZg4pQ2iVq7Hy6hz%2Fuwkg%2BayOWe%2B3ISn%2BEfni8hJg2fPVCYD%2Fh%2BFyQkhQbMf7IeDK33gD9mj8kqaL5RIyOAcjv%2FE3zBXqpEFX%2BXEeH2a%2FEvVeHTCoNRfrh9rpCrMdyqJQt4x0t9Xa7pfdr3lIDRmejQHKJLwU6MOK4wJM%2BlULYexYUO66guC6zf8nOayULbV6zhJN5bJ%2FYRwLgEVff%2FKjBmnme8GmWlNelDeQXKN6gFNdDJR0z9nC5yrODg%2FvuKCUvYJNpvWK9topYg4unfZ1KeFWak2zqAMJc8idWpOEVZilK6ud%2FVc3WugGzdz4i2dFi1mEwRIIykzSzU%2F9lwsk%2BhzS17T4FmWmfSZGCVeyHa4%2B8rh867u%2BBNibtMNXKAc%2FCUujWih4iRBHeuwZiTIz07B8eAJOBPmFxTUck02DHWhrv9dNKmlDA8ZdGs3dfWF6DM40S5o2HAVcXjGDLsLJQQqYVcODNhNgMxC8BxC%2FQLA%2FMXJrllTl50tca9k2Os%2F0kmErEwNspCEkVAIblSCtjb2zs%2FW67qEU4RrbbTXlBAFRombCTiazTM%2Bn%2BTYExDgfJqMIIJmj7tpZqVgb1HA8NdUVby4zEFG%2Byt2SnHtbdxLm3lNpxMMu4q78GOqUBGW%2B0g5YLfXM0fiLJFLZmvZpnakgWsy4OIvwlrH5Ed8cKlYhp3Eed8hsZZ5Sm7cGJDivTg7xSKeIyKjfvqt%2BwV8FteRLJTUJj700%2BPVh9qsz%2F4k8nPL3H%2F07bT7DOWSgXB7w8W0mR6i69PGeOEp06wA76DfaEWPLKFOwI3ptCNYs9ljpSfe53MugZMiquxoARGX7LVZH2c1s748z5kxymMMDXOx2m&X-Amz-Signature=68b3598d2479b562b67ef1cdfbd6e074e1315db567540e1da93fb859f5393723&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDJLCTV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIElL%2FbAvLbYBj%2B86%2FiBPPYZf8Vn%2FGEDTAKT91KdEBa1bAiEAnNrEoHVczWgu3OTq%2F5wwriiFLItNjsb50yeA1KCnH04qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsL336f5cP0PovFDCrcA2ehuIB4REvZg4pQ2iVq7Hy6hz%2Fuwkg%2BayOWe%2B3ISn%2BEfni8hJg2fPVCYD%2Fh%2BFyQkhQbMf7IeDK33gD9mj8kqaL5RIyOAcjv%2FE3zBXqpEFX%2BXEeH2a%2FEvVeHTCoNRfrh9rpCrMdyqJQt4x0t9Xa7pfdr3lIDRmejQHKJLwU6MOK4wJM%2BlULYexYUO66guC6zf8nOayULbV6zhJN5bJ%2FYRwLgEVff%2FKjBmnme8GmWlNelDeQXKN6gFNdDJR0z9nC5yrODg%2FvuKCUvYJNpvWK9topYg4unfZ1KeFWak2zqAMJc8idWpOEVZilK6ud%2FVc3WugGzdz4i2dFi1mEwRIIykzSzU%2F9lwsk%2BhzS17T4FmWmfSZGCVeyHa4%2B8rh867u%2BBNibtMNXKAc%2FCUujWih4iRBHeuwZiTIz07B8eAJOBPmFxTUck02DHWhrv9dNKmlDA8ZdGs3dfWF6DM40S5o2HAVcXjGDLsLJQQqYVcODNhNgMxC8BxC%2FQLA%2FMXJrllTl50tca9k2Os%2F0kmErEwNspCEkVAIblSCtjb2zs%2FW67qEU4RrbbTXlBAFRombCTiazTM%2Bn%2BTYExDgfJqMIIJmj7tpZqVgb1HA8NdUVby4zEFG%2Byt2SnHtbdxLm3lNpxMMu4q78GOqUBGW%2B0g5YLfXM0fiLJFLZmvZpnakgWsy4OIvwlrH5Ed8cKlYhp3Eed8hsZZ5Sm7cGJDivTg7xSKeIyKjfvqt%2BwV8FteRLJTUJj700%2BPVh9qsz%2F4k8nPL3H%2F07bT7DOWSgXB7w8W0mR6i69PGeOEp06wA76DfaEWPLKFOwI3ptCNYs9ljpSfe53MugZMiquxoARGX7LVZH2c1s748z5kxymMMDXOx2m&X-Amz-Signature=51b3217abc96c13d5ac82c5ae31cf7ea56f4b93f6beb7cb68e602c523f303ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDJLCTV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIElL%2FbAvLbYBj%2B86%2FiBPPYZf8Vn%2FGEDTAKT91KdEBa1bAiEAnNrEoHVczWgu3OTq%2F5wwriiFLItNjsb50yeA1KCnH04qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsL336f5cP0PovFDCrcA2ehuIB4REvZg4pQ2iVq7Hy6hz%2Fuwkg%2BayOWe%2B3ISn%2BEfni8hJg2fPVCYD%2Fh%2BFyQkhQbMf7IeDK33gD9mj8kqaL5RIyOAcjv%2FE3zBXqpEFX%2BXEeH2a%2FEvVeHTCoNRfrh9rpCrMdyqJQt4x0t9Xa7pfdr3lIDRmejQHKJLwU6MOK4wJM%2BlULYexYUO66guC6zf8nOayULbV6zhJN5bJ%2FYRwLgEVff%2FKjBmnme8GmWlNelDeQXKN6gFNdDJR0z9nC5yrODg%2FvuKCUvYJNpvWK9topYg4unfZ1KeFWak2zqAMJc8idWpOEVZilK6ud%2FVc3WugGzdz4i2dFi1mEwRIIykzSzU%2F9lwsk%2BhzS17T4FmWmfSZGCVeyHa4%2B8rh867u%2BBNibtMNXKAc%2FCUujWih4iRBHeuwZiTIz07B8eAJOBPmFxTUck02DHWhrv9dNKmlDA8ZdGs3dfWF6DM40S5o2HAVcXjGDLsLJQQqYVcODNhNgMxC8BxC%2FQLA%2FMXJrllTl50tca9k2Os%2F0kmErEwNspCEkVAIblSCtjb2zs%2FW67qEU4RrbbTXlBAFRombCTiazTM%2Bn%2BTYExDgfJqMIIJmj7tpZqVgb1HA8NdUVby4zEFG%2Byt2SnHtbdxLm3lNpxMMu4q78GOqUBGW%2B0g5YLfXM0fiLJFLZmvZpnakgWsy4OIvwlrH5Ed8cKlYhp3Eed8hsZZ5Sm7cGJDivTg7xSKeIyKjfvqt%2BwV8FteRLJTUJj700%2BPVh9qsz%2F4k8nPL3H%2F07bT7DOWSgXB7w8W0mR6i69PGeOEp06wA76DfaEWPLKFOwI3ptCNYs9ljpSfe53MugZMiquxoARGX7LVZH2c1s748z5kxymMMDXOx2m&X-Amz-Signature=167a4fa986250432f121077e86d229863e0f6e66c6c49958ca3325b9cc7d5d61&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDJLCTV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIElL%2FbAvLbYBj%2B86%2FiBPPYZf8Vn%2FGEDTAKT91KdEBa1bAiEAnNrEoHVczWgu3OTq%2F5wwriiFLItNjsb50yeA1KCnH04qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsL336f5cP0PovFDCrcA2ehuIB4REvZg4pQ2iVq7Hy6hz%2Fuwkg%2BayOWe%2B3ISn%2BEfni8hJg2fPVCYD%2Fh%2BFyQkhQbMf7IeDK33gD9mj8kqaL5RIyOAcjv%2FE3zBXqpEFX%2BXEeH2a%2FEvVeHTCoNRfrh9rpCrMdyqJQt4x0t9Xa7pfdr3lIDRmejQHKJLwU6MOK4wJM%2BlULYexYUO66guC6zf8nOayULbV6zhJN5bJ%2FYRwLgEVff%2FKjBmnme8GmWlNelDeQXKN6gFNdDJR0z9nC5yrODg%2FvuKCUvYJNpvWK9topYg4unfZ1KeFWak2zqAMJc8idWpOEVZilK6ud%2FVc3WugGzdz4i2dFi1mEwRIIykzSzU%2F9lwsk%2BhzS17T4FmWmfSZGCVeyHa4%2B8rh867u%2BBNibtMNXKAc%2FCUujWih4iRBHeuwZiTIz07B8eAJOBPmFxTUck02DHWhrv9dNKmlDA8ZdGs3dfWF6DM40S5o2HAVcXjGDLsLJQQqYVcODNhNgMxC8BxC%2FQLA%2FMXJrllTl50tca9k2Os%2F0kmErEwNspCEkVAIblSCtjb2zs%2FW67qEU4RrbbTXlBAFRombCTiazTM%2Bn%2BTYExDgfJqMIIJmj7tpZqVgb1HA8NdUVby4zEFG%2Byt2SnHtbdxLm3lNpxMMu4q78GOqUBGW%2B0g5YLfXM0fiLJFLZmvZpnakgWsy4OIvwlrH5Ed8cKlYhp3Eed8hsZZ5Sm7cGJDivTg7xSKeIyKjfvqt%2BwV8FteRLJTUJj700%2BPVh9qsz%2F4k8nPL3H%2F07bT7DOWSgXB7w8W0mR6i69PGeOEp06wA76DfaEWPLKFOwI3ptCNYs9ljpSfe53MugZMiquxoARGX7LVZH2c1s748z5kxymMMDXOx2m&X-Amz-Signature=fb3b2108765b9103148370d1389a7b9b8a8a2480db1c2206db2c372567dd084d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

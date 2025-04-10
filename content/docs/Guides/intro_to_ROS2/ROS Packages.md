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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642OANWH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFz7cSWdifuCCKrFjIocpEK%2Fjfi36GcIssV8DWsQ4i3AAiAXgTIYlrc4xj6V92ZIN9JpruTzkFqApgjCWA9dFOPx%2BiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9BS9L1j%2FRdSS5PreKtwDpCq5ZMFwrKBtrZ%2Bpysr58%2F3CNJV3zkXdI9Xj29BWi7SJRuQFjHNbdoGHrVy%2BCjt%2Fbh87m9o2mmJK01C%2Fl%2B9KWJVU9ORaBaYkgnhRkYhSFft4ww9zII7GxUCktZAtpG8Sl%2FuRrIWofNpTQqYmof3bezqSefGxxhp3hrwfhrHUk5K2A0P9RuiijEDAVTgDNJ2WiueQRXQiKBmv5r9j2bH7zN9UoQurvmobwS1Yuoy445AEpQPw7Tpi5zDGO9%2BH8HsmkpXxe%2B6M6G7lB4q9pCGdV6PRCPpKPhUBS5dYo0rQ4W%2FfJIB4AwalmnD3DMmjEBqKWHid%2FTYyoZtChVhoOdaeCBgJ3NVfEfi79jiMVbiHeA%2BROQqRxXYxcEmzLlJR%2FXt1yaVSI30pF3EqcufgdUNxM9Pqrfy8zp7icPMhX3uxALmXUS2BPRO%2BgyLtu1C53pkQo%2F6X7K6159UeoxSJuJZDXuBDELIPSpoavGjps6DoTwZ0jSkgdxOptqKqyIdMP9KTAFpCX14KEFtMugP%2F2tTmeOZuSbts6tPBPRzddytjNTDfMKs3tK5svr1eV%2BHPY%2BO12M1yPFWazAiq%2B%2FuV0H46WvzbKaiAyepMT9sdR4tE6rSSZ3V29Ecu%2BTsqg3sw4OvevwY6pgHeS5Y69JSQXtiqWNxQF8Qwdu%2FKYezfAp6jsHNlLxhjon%2B9vrejw951r%2FzpWtt8wOodVUO72KJYvoqtD8zyvL4G6us54FYmYjbDY6%2FXvp1bFp1ZnMV3H5E76Vf5R4MfXZlDDasdTX8TXL8xvjGjPh%2FjpuDJHPXRJqIjenMaDMOJYBQMEI%2F2luvU9vn0Gmn7HjXJdKL86WVaruo1u3yzFRDVUx7ekmQ8&X-Amz-Signature=949fe8af4fb96e9a82464a5d23be62a9f08b89e998d1ae29fc9839599f78658b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642OANWH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFz7cSWdifuCCKrFjIocpEK%2Fjfi36GcIssV8DWsQ4i3AAiAXgTIYlrc4xj6V92ZIN9JpruTzkFqApgjCWA9dFOPx%2BiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9BS9L1j%2FRdSS5PreKtwDpCq5ZMFwrKBtrZ%2Bpysr58%2F3CNJV3zkXdI9Xj29BWi7SJRuQFjHNbdoGHrVy%2BCjt%2Fbh87m9o2mmJK01C%2Fl%2B9KWJVU9ORaBaYkgnhRkYhSFft4ww9zII7GxUCktZAtpG8Sl%2FuRrIWofNpTQqYmof3bezqSefGxxhp3hrwfhrHUk5K2A0P9RuiijEDAVTgDNJ2WiueQRXQiKBmv5r9j2bH7zN9UoQurvmobwS1Yuoy445AEpQPw7Tpi5zDGO9%2BH8HsmkpXxe%2B6M6G7lB4q9pCGdV6PRCPpKPhUBS5dYo0rQ4W%2FfJIB4AwalmnD3DMmjEBqKWHid%2FTYyoZtChVhoOdaeCBgJ3NVfEfi79jiMVbiHeA%2BROQqRxXYxcEmzLlJR%2FXt1yaVSI30pF3EqcufgdUNxM9Pqrfy8zp7icPMhX3uxALmXUS2BPRO%2BgyLtu1C53pkQo%2F6X7K6159UeoxSJuJZDXuBDELIPSpoavGjps6DoTwZ0jSkgdxOptqKqyIdMP9KTAFpCX14KEFtMugP%2F2tTmeOZuSbts6tPBPRzddytjNTDfMKs3tK5svr1eV%2BHPY%2BO12M1yPFWazAiq%2B%2FuV0H46WvzbKaiAyepMT9sdR4tE6rSSZ3V29Ecu%2BTsqg3sw4OvevwY6pgHeS5Y69JSQXtiqWNxQF8Qwdu%2FKYezfAp6jsHNlLxhjon%2B9vrejw951r%2FzpWtt8wOodVUO72KJYvoqtD8zyvL4G6us54FYmYjbDY6%2FXvp1bFp1ZnMV3H5E76Vf5R4MfXZlDDasdTX8TXL8xvjGjPh%2FjpuDJHPXRJqIjenMaDMOJYBQMEI%2F2luvU9vn0Gmn7HjXJdKL86WVaruo1u3yzFRDVUx7ekmQ8&X-Amz-Signature=32995e034d0a1e0b7bac48808f1eab0a6af66c1454cb0dc6efc9107a711e92b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642OANWH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFz7cSWdifuCCKrFjIocpEK%2Fjfi36GcIssV8DWsQ4i3AAiAXgTIYlrc4xj6V92ZIN9JpruTzkFqApgjCWA9dFOPx%2BiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9BS9L1j%2FRdSS5PreKtwDpCq5ZMFwrKBtrZ%2Bpysr58%2F3CNJV3zkXdI9Xj29BWi7SJRuQFjHNbdoGHrVy%2BCjt%2Fbh87m9o2mmJK01C%2Fl%2B9KWJVU9ORaBaYkgnhRkYhSFft4ww9zII7GxUCktZAtpG8Sl%2FuRrIWofNpTQqYmof3bezqSefGxxhp3hrwfhrHUk5K2A0P9RuiijEDAVTgDNJ2WiueQRXQiKBmv5r9j2bH7zN9UoQurvmobwS1Yuoy445AEpQPw7Tpi5zDGO9%2BH8HsmkpXxe%2B6M6G7lB4q9pCGdV6PRCPpKPhUBS5dYo0rQ4W%2FfJIB4AwalmnD3DMmjEBqKWHid%2FTYyoZtChVhoOdaeCBgJ3NVfEfi79jiMVbiHeA%2BROQqRxXYxcEmzLlJR%2FXt1yaVSI30pF3EqcufgdUNxM9Pqrfy8zp7icPMhX3uxALmXUS2BPRO%2BgyLtu1C53pkQo%2F6X7K6159UeoxSJuJZDXuBDELIPSpoavGjps6DoTwZ0jSkgdxOptqKqyIdMP9KTAFpCX14KEFtMugP%2F2tTmeOZuSbts6tPBPRzddytjNTDfMKs3tK5svr1eV%2BHPY%2BO12M1yPFWazAiq%2B%2FuV0H46WvzbKaiAyepMT9sdR4tE6rSSZ3V29Ecu%2BTsqg3sw4OvevwY6pgHeS5Y69JSQXtiqWNxQF8Qwdu%2FKYezfAp6jsHNlLxhjon%2B9vrejw951r%2FzpWtt8wOodVUO72KJYvoqtD8zyvL4G6us54FYmYjbDY6%2FXvp1bFp1ZnMV3H5E76Vf5R4MfXZlDDasdTX8TXL8xvjGjPh%2FjpuDJHPXRJqIjenMaDMOJYBQMEI%2F2luvU9vn0Gmn7HjXJdKL86WVaruo1u3yzFRDVUx7ekmQ8&X-Amz-Signature=b696cff2245c345d6e73a0f932c1d4d25f5df8871aa2f1911f62b1f64a70f09b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642OANWH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFz7cSWdifuCCKrFjIocpEK%2Fjfi36GcIssV8DWsQ4i3AAiAXgTIYlrc4xj6V92ZIN9JpruTzkFqApgjCWA9dFOPx%2BiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9BS9L1j%2FRdSS5PreKtwDpCq5ZMFwrKBtrZ%2Bpysr58%2F3CNJV3zkXdI9Xj29BWi7SJRuQFjHNbdoGHrVy%2BCjt%2Fbh87m9o2mmJK01C%2Fl%2B9KWJVU9ORaBaYkgnhRkYhSFft4ww9zII7GxUCktZAtpG8Sl%2FuRrIWofNpTQqYmof3bezqSefGxxhp3hrwfhrHUk5K2A0P9RuiijEDAVTgDNJ2WiueQRXQiKBmv5r9j2bH7zN9UoQurvmobwS1Yuoy445AEpQPw7Tpi5zDGO9%2BH8HsmkpXxe%2B6M6G7lB4q9pCGdV6PRCPpKPhUBS5dYo0rQ4W%2FfJIB4AwalmnD3DMmjEBqKWHid%2FTYyoZtChVhoOdaeCBgJ3NVfEfi79jiMVbiHeA%2BROQqRxXYxcEmzLlJR%2FXt1yaVSI30pF3EqcufgdUNxM9Pqrfy8zp7icPMhX3uxALmXUS2BPRO%2BgyLtu1C53pkQo%2F6X7K6159UeoxSJuJZDXuBDELIPSpoavGjps6DoTwZ0jSkgdxOptqKqyIdMP9KTAFpCX14KEFtMugP%2F2tTmeOZuSbts6tPBPRzddytjNTDfMKs3tK5svr1eV%2BHPY%2BO12M1yPFWazAiq%2B%2FuV0H46WvzbKaiAyepMT9sdR4tE6rSSZ3V29Ecu%2BTsqg3sw4OvevwY6pgHeS5Y69JSQXtiqWNxQF8Qwdu%2FKYezfAp6jsHNlLxhjon%2B9vrejw951r%2FzpWtt8wOodVUO72KJYvoqtD8zyvL4G6us54FYmYjbDY6%2FXvp1bFp1ZnMV3H5E76Vf5R4MfXZlDDasdTX8TXL8xvjGjPh%2FjpuDJHPXRJqIjenMaDMOJYBQMEI%2F2luvU9vn0Gmn7HjXJdKL86WVaruo1u3yzFRDVUx7ekmQ8&X-Amz-Signature=a86028e5c73e2a75f7d27b0cc1baeaf7e871d4cf9b2425f74aa550b66b9157fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642OANWH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFz7cSWdifuCCKrFjIocpEK%2Fjfi36GcIssV8DWsQ4i3AAiAXgTIYlrc4xj6V92ZIN9JpruTzkFqApgjCWA9dFOPx%2BiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9BS9L1j%2FRdSS5PreKtwDpCq5ZMFwrKBtrZ%2Bpysr58%2F3CNJV3zkXdI9Xj29BWi7SJRuQFjHNbdoGHrVy%2BCjt%2Fbh87m9o2mmJK01C%2Fl%2B9KWJVU9ORaBaYkgnhRkYhSFft4ww9zII7GxUCktZAtpG8Sl%2FuRrIWofNpTQqYmof3bezqSefGxxhp3hrwfhrHUk5K2A0P9RuiijEDAVTgDNJ2WiueQRXQiKBmv5r9j2bH7zN9UoQurvmobwS1Yuoy445AEpQPw7Tpi5zDGO9%2BH8HsmkpXxe%2B6M6G7lB4q9pCGdV6PRCPpKPhUBS5dYo0rQ4W%2FfJIB4AwalmnD3DMmjEBqKWHid%2FTYyoZtChVhoOdaeCBgJ3NVfEfi79jiMVbiHeA%2BROQqRxXYxcEmzLlJR%2FXt1yaVSI30pF3EqcufgdUNxM9Pqrfy8zp7icPMhX3uxALmXUS2BPRO%2BgyLtu1C53pkQo%2F6X7K6159UeoxSJuJZDXuBDELIPSpoavGjps6DoTwZ0jSkgdxOptqKqyIdMP9KTAFpCX14KEFtMugP%2F2tTmeOZuSbts6tPBPRzddytjNTDfMKs3tK5svr1eV%2BHPY%2BO12M1yPFWazAiq%2B%2FuV0H46WvzbKaiAyepMT9sdR4tE6rSSZ3V29Ecu%2BTsqg3sw4OvevwY6pgHeS5Y69JSQXtiqWNxQF8Qwdu%2FKYezfAp6jsHNlLxhjon%2B9vrejw951r%2FzpWtt8wOodVUO72KJYvoqtD8zyvL4G6us54FYmYjbDY6%2FXvp1bFp1ZnMV3H5E76Vf5R4MfXZlDDasdTX8TXL8xvjGjPh%2FjpuDJHPXRJqIjenMaDMOJYBQMEI%2F2luvU9vn0Gmn7HjXJdKL86WVaruo1u3yzFRDVUx7ekmQ8&X-Amz-Signature=0a2ba72066756b0f370f228d4f34e2090f38acb64dcdc106cbeaea76ec231bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642OANWH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFz7cSWdifuCCKrFjIocpEK%2Fjfi36GcIssV8DWsQ4i3AAiAXgTIYlrc4xj6V92ZIN9JpruTzkFqApgjCWA9dFOPx%2BiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9BS9L1j%2FRdSS5PreKtwDpCq5ZMFwrKBtrZ%2Bpysr58%2F3CNJV3zkXdI9Xj29BWi7SJRuQFjHNbdoGHrVy%2BCjt%2Fbh87m9o2mmJK01C%2Fl%2B9KWJVU9ORaBaYkgnhRkYhSFft4ww9zII7GxUCktZAtpG8Sl%2FuRrIWofNpTQqYmof3bezqSefGxxhp3hrwfhrHUk5K2A0P9RuiijEDAVTgDNJ2WiueQRXQiKBmv5r9j2bH7zN9UoQurvmobwS1Yuoy445AEpQPw7Tpi5zDGO9%2BH8HsmkpXxe%2B6M6G7lB4q9pCGdV6PRCPpKPhUBS5dYo0rQ4W%2FfJIB4AwalmnD3DMmjEBqKWHid%2FTYyoZtChVhoOdaeCBgJ3NVfEfi79jiMVbiHeA%2BROQqRxXYxcEmzLlJR%2FXt1yaVSI30pF3EqcufgdUNxM9Pqrfy8zp7icPMhX3uxALmXUS2BPRO%2BgyLtu1C53pkQo%2F6X7K6159UeoxSJuJZDXuBDELIPSpoavGjps6DoTwZ0jSkgdxOptqKqyIdMP9KTAFpCX14KEFtMugP%2F2tTmeOZuSbts6tPBPRzddytjNTDfMKs3tK5svr1eV%2BHPY%2BO12M1yPFWazAiq%2B%2FuV0H46WvzbKaiAyepMT9sdR4tE6rSSZ3V29Ecu%2BTsqg3sw4OvevwY6pgHeS5Y69JSQXtiqWNxQF8Qwdu%2FKYezfAp6jsHNlLxhjon%2B9vrejw951r%2FzpWtt8wOodVUO72KJYvoqtD8zyvL4G6us54FYmYjbDY6%2FXvp1bFp1ZnMV3H5E76Vf5R4MfXZlDDasdTX8TXL8xvjGjPh%2FjpuDJHPXRJqIjenMaDMOJYBQMEI%2F2luvU9vn0Gmn7HjXJdKL86WVaruo1u3yzFRDVUx7ekmQ8&X-Amz-Signature=42ff01e7483f1962e19c81f1d90954017761cc618f2caba4fe90d4ea5d46c27c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642OANWH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFz7cSWdifuCCKrFjIocpEK%2Fjfi36GcIssV8DWsQ4i3AAiAXgTIYlrc4xj6V92ZIN9JpruTzkFqApgjCWA9dFOPx%2BiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9BS9L1j%2FRdSS5PreKtwDpCq5ZMFwrKBtrZ%2Bpysr58%2F3CNJV3zkXdI9Xj29BWi7SJRuQFjHNbdoGHrVy%2BCjt%2Fbh87m9o2mmJK01C%2Fl%2B9KWJVU9ORaBaYkgnhRkYhSFft4ww9zII7GxUCktZAtpG8Sl%2FuRrIWofNpTQqYmof3bezqSefGxxhp3hrwfhrHUk5K2A0P9RuiijEDAVTgDNJ2WiueQRXQiKBmv5r9j2bH7zN9UoQurvmobwS1Yuoy445AEpQPw7Tpi5zDGO9%2BH8HsmkpXxe%2B6M6G7lB4q9pCGdV6PRCPpKPhUBS5dYo0rQ4W%2FfJIB4AwalmnD3DMmjEBqKWHid%2FTYyoZtChVhoOdaeCBgJ3NVfEfi79jiMVbiHeA%2BROQqRxXYxcEmzLlJR%2FXt1yaVSI30pF3EqcufgdUNxM9Pqrfy8zp7icPMhX3uxALmXUS2BPRO%2BgyLtu1C53pkQo%2F6X7K6159UeoxSJuJZDXuBDELIPSpoavGjps6DoTwZ0jSkgdxOptqKqyIdMP9KTAFpCX14KEFtMugP%2F2tTmeOZuSbts6tPBPRzddytjNTDfMKs3tK5svr1eV%2BHPY%2BO12M1yPFWazAiq%2B%2FuV0H46WvzbKaiAyepMT9sdR4tE6rSSZ3V29Ecu%2BTsqg3sw4OvevwY6pgHeS5Y69JSQXtiqWNxQF8Qwdu%2FKYezfAp6jsHNlLxhjon%2B9vrejw951r%2FzpWtt8wOodVUO72KJYvoqtD8zyvL4G6us54FYmYjbDY6%2FXvp1bFp1ZnMV3H5E76Vf5R4MfXZlDDasdTX8TXL8xvjGjPh%2FjpuDJHPXRJqIjenMaDMOJYBQMEI%2F2luvU9vn0Gmn7HjXJdKL86WVaruo1u3yzFRDVUx7ekmQ8&X-Amz-Signature=53814197008432c7484aeaf14fa680f13227659ec757e0c074c7b2c82eb43e22&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

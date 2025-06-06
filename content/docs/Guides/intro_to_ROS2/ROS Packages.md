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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJMPUT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDvLtXYyqqDb6ToTiLsjA8D7XMs%2Fil5oVlEX1YmX0vzdgIgevYz0bFAPX3SFR3FBavk66hg1ABkyOx4ot3frGlszIIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGp2Kvpz6aNBkcPyKSrcAyc2RFeVlXUTAsUMtCE7uia3dKR6FugBl5a1yUARC6IYxMebFFdAr1pkTo6zJJulQjaIqCmSKFsTbNOSqUXVQwOz5vaHFW8sxyiNa72uat3TIFHY7G5y95uDTGKRlyK5lvA4bxXXX6599ALF8k3IJM5Nofe3Wu1m5gt7nW1UFYvPImJpNg%2BDm8kNQ%2BItKDdYQxLaLpOg4iz14v0s6vwmS72zTySf6swAxeoryBhjUfHwmaOZ2zotlhRljAqlcIMJ3ePc79%2FpTMnVlL6jAKmySZ3EczgFi1VqeSRI%2Btd8ic0Peae7xRhypufHI6QYmhs5hQLy9OWEzBy6S29HgKKVZN6kLxbF4SQG61Wlz%2BVCqrfPpn8ZFukIw9jVxKxHGc2k8sCd7N4QKBtFFWQJArdFuMeUdeO2ExsY1n1UkDcOQ91Kf8xQ6dxkAHvG7kZwzVlM51OH%2BYKqmyHQz7ux1QOC7IPgNdth6RKVnycz8M2Atn16wAZvbyKlfs8eyYpaf%2Bm155Nv2PH1R3KTBOhAnYJwxPEvoHcB4IOFwLEIOnwyFrH7tAM8BJmXhzbzEHKzWw41GvjMbY%2FNqIXflUO1rbZciQtl%2BV6I7J1REscZHtGmBuN2IxbRyCfNDChe9u3FMNb7iMIGOqUBMEDCKeujos11K0nEJ7meUqbhNDuvqaZUVQ6rwNXLyLtqKvib8sT7aWYWmXWoefb5GNQpTHp01MS%2FYCBaXpArzbUQ5aIJ9rccn9On6IGQLWb4UpDRQRnELeESJbMcOuaqFUFvNVVuxxywl35H1enBKN%2BW85LNnvhFzSfdgvsN6bQ9D7cdYSoPWcukSYZPN4dRXhtC1eddkF7fqTv6PB1y9T8OEINH&X-Amz-Signature=0aedceb1675be1b48b07e55ed906f611250190d7d09d79f3f3c04b7023f676af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJMPUT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDvLtXYyqqDb6ToTiLsjA8D7XMs%2Fil5oVlEX1YmX0vzdgIgevYz0bFAPX3SFR3FBavk66hg1ABkyOx4ot3frGlszIIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGp2Kvpz6aNBkcPyKSrcAyc2RFeVlXUTAsUMtCE7uia3dKR6FugBl5a1yUARC6IYxMebFFdAr1pkTo6zJJulQjaIqCmSKFsTbNOSqUXVQwOz5vaHFW8sxyiNa72uat3TIFHY7G5y95uDTGKRlyK5lvA4bxXXX6599ALF8k3IJM5Nofe3Wu1m5gt7nW1UFYvPImJpNg%2BDm8kNQ%2BItKDdYQxLaLpOg4iz14v0s6vwmS72zTySf6swAxeoryBhjUfHwmaOZ2zotlhRljAqlcIMJ3ePc79%2FpTMnVlL6jAKmySZ3EczgFi1VqeSRI%2Btd8ic0Peae7xRhypufHI6QYmhs5hQLy9OWEzBy6S29HgKKVZN6kLxbF4SQG61Wlz%2BVCqrfPpn8ZFukIw9jVxKxHGc2k8sCd7N4QKBtFFWQJArdFuMeUdeO2ExsY1n1UkDcOQ91Kf8xQ6dxkAHvG7kZwzVlM51OH%2BYKqmyHQz7ux1QOC7IPgNdth6RKVnycz8M2Atn16wAZvbyKlfs8eyYpaf%2Bm155Nv2PH1R3KTBOhAnYJwxPEvoHcB4IOFwLEIOnwyFrH7tAM8BJmXhzbzEHKzWw41GvjMbY%2FNqIXflUO1rbZciQtl%2BV6I7J1REscZHtGmBuN2IxbRyCfNDChe9u3FMNb7iMIGOqUBMEDCKeujos11K0nEJ7meUqbhNDuvqaZUVQ6rwNXLyLtqKvib8sT7aWYWmXWoefb5GNQpTHp01MS%2FYCBaXpArzbUQ5aIJ9rccn9On6IGQLWb4UpDRQRnELeESJbMcOuaqFUFvNVVuxxywl35H1enBKN%2BW85LNnvhFzSfdgvsN6bQ9D7cdYSoPWcukSYZPN4dRXhtC1eddkF7fqTv6PB1y9T8OEINH&X-Amz-Signature=55c46bad9865757f320b63ec190cacf758923fa772276402152e5f4b85519852&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJMPUT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDvLtXYyqqDb6ToTiLsjA8D7XMs%2Fil5oVlEX1YmX0vzdgIgevYz0bFAPX3SFR3FBavk66hg1ABkyOx4ot3frGlszIIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGp2Kvpz6aNBkcPyKSrcAyc2RFeVlXUTAsUMtCE7uia3dKR6FugBl5a1yUARC6IYxMebFFdAr1pkTo6zJJulQjaIqCmSKFsTbNOSqUXVQwOz5vaHFW8sxyiNa72uat3TIFHY7G5y95uDTGKRlyK5lvA4bxXXX6599ALF8k3IJM5Nofe3Wu1m5gt7nW1UFYvPImJpNg%2BDm8kNQ%2BItKDdYQxLaLpOg4iz14v0s6vwmS72zTySf6swAxeoryBhjUfHwmaOZ2zotlhRljAqlcIMJ3ePc79%2FpTMnVlL6jAKmySZ3EczgFi1VqeSRI%2Btd8ic0Peae7xRhypufHI6QYmhs5hQLy9OWEzBy6S29HgKKVZN6kLxbF4SQG61Wlz%2BVCqrfPpn8ZFukIw9jVxKxHGc2k8sCd7N4QKBtFFWQJArdFuMeUdeO2ExsY1n1UkDcOQ91Kf8xQ6dxkAHvG7kZwzVlM51OH%2BYKqmyHQz7ux1QOC7IPgNdth6RKVnycz8M2Atn16wAZvbyKlfs8eyYpaf%2Bm155Nv2PH1R3KTBOhAnYJwxPEvoHcB4IOFwLEIOnwyFrH7tAM8BJmXhzbzEHKzWw41GvjMbY%2FNqIXflUO1rbZciQtl%2BV6I7J1REscZHtGmBuN2IxbRyCfNDChe9u3FMNb7iMIGOqUBMEDCKeujos11K0nEJ7meUqbhNDuvqaZUVQ6rwNXLyLtqKvib8sT7aWYWmXWoefb5GNQpTHp01MS%2FYCBaXpArzbUQ5aIJ9rccn9On6IGQLWb4UpDRQRnELeESJbMcOuaqFUFvNVVuxxywl35H1enBKN%2BW85LNnvhFzSfdgvsN6bQ9D7cdYSoPWcukSYZPN4dRXhtC1eddkF7fqTv6PB1y9T8OEINH&X-Amz-Signature=a21deffab079cea516934f4a3fa407ecf9a032cdbe5c55b68b6b68cd9bea2a81&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJMPUT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDvLtXYyqqDb6ToTiLsjA8D7XMs%2Fil5oVlEX1YmX0vzdgIgevYz0bFAPX3SFR3FBavk66hg1ABkyOx4ot3frGlszIIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGp2Kvpz6aNBkcPyKSrcAyc2RFeVlXUTAsUMtCE7uia3dKR6FugBl5a1yUARC6IYxMebFFdAr1pkTo6zJJulQjaIqCmSKFsTbNOSqUXVQwOz5vaHFW8sxyiNa72uat3TIFHY7G5y95uDTGKRlyK5lvA4bxXXX6599ALF8k3IJM5Nofe3Wu1m5gt7nW1UFYvPImJpNg%2BDm8kNQ%2BItKDdYQxLaLpOg4iz14v0s6vwmS72zTySf6swAxeoryBhjUfHwmaOZ2zotlhRljAqlcIMJ3ePc79%2FpTMnVlL6jAKmySZ3EczgFi1VqeSRI%2Btd8ic0Peae7xRhypufHI6QYmhs5hQLy9OWEzBy6S29HgKKVZN6kLxbF4SQG61Wlz%2BVCqrfPpn8ZFukIw9jVxKxHGc2k8sCd7N4QKBtFFWQJArdFuMeUdeO2ExsY1n1UkDcOQ91Kf8xQ6dxkAHvG7kZwzVlM51OH%2BYKqmyHQz7ux1QOC7IPgNdth6RKVnycz8M2Atn16wAZvbyKlfs8eyYpaf%2Bm155Nv2PH1R3KTBOhAnYJwxPEvoHcB4IOFwLEIOnwyFrH7tAM8BJmXhzbzEHKzWw41GvjMbY%2FNqIXflUO1rbZciQtl%2BV6I7J1REscZHtGmBuN2IxbRyCfNDChe9u3FMNb7iMIGOqUBMEDCKeujos11K0nEJ7meUqbhNDuvqaZUVQ6rwNXLyLtqKvib8sT7aWYWmXWoefb5GNQpTHp01MS%2FYCBaXpArzbUQ5aIJ9rccn9On6IGQLWb4UpDRQRnELeESJbMcOuaqFUFvNVVuxxywl35H1enBKN%2BW85LNnvhFzSfdgvsN6bQ9D7cdYSoPWcukSYZPN4dRXhtC1eddkF7fqTv6PB1y9T8OEINH&X-Amz-Signature=91e085108b6fa5cb5079d2b4343212ce4f11850acd3af818c3f44cc4af9c84e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJMPUT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDvLtXYyqqDb6ToTiLsjA8D7XMs%2Fil5oVlEX1YmX0vzdgIgevYz0bFAPX3SFR3FBavk66hg1ABkyOx4ot3frGlszIIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGp2Kvpz6aNBkcPyKSrcAyc2RFeVlXUTAsUMtCE7uia3dKR6FugBl5a1yUARC6IYxMebFFdAr1pkTo6zJJulQjaIqCmSKFsTbNOSqUXVQwOz5vaHFW8sxyiNa72uat3TIFHY7G5y95uDTGKRlyK5lvA4bxXXX6599ALF8k3IJM5Nofe3Wu1m5gt7nW1UFYvPImJpNg%2BDm8kNQ%2BItKDdYQxLaLpOg4iz14v0s6vwmS72zTySf6swAxeoryBhjUfHwmaOZ2zotlhRljAqlcIMJ3ePc79%2FpTMnVlL6jAKmySZ3EczgFi1VqeSRI%2Btd8ic0Peae7xRhypufHI6QYmhs5hQLy9OWEzBy6S29HgKKVZN6kLxbF4SQG61Wlz%2BVCqrfPpn8ZFukIw9jVxKxHGc2k8sCd7N4QKBtFFWQJArdFuMeUdeO2ExsY1n1UkDcOQ91Kf8xQ6dxkAHvG7kZwzVlM51OH%2BYKqmyHQz7ux1QOC7IPgNdth6RKVnycz8M2Atn16wAZvbyKlfs8eyYpaf%2Bm155Nv2PH1R3KTBOhAnYJwxPEvoHcB4IOFwLEIOnwyFrH7tAM8BJmXhzbzEHKzWw41GvjMbY%2FNqIXflUO1rbZciQtl%2BV6I7J1REscZHtGmBuN2IxbRyCfNDChe9u3FMNb7iMIGOqUBMEDCKeujos11K0nEJ7meUqbhNDuvqaZUVQ6rwNXLyLtqKvib8sT7aWYWmXWoefb5GNQpTHp01MS%2FYCBaXpArzbUQ5aIJ9rccn9On6IGQLWb4UpDRQRnELeESJbMcOuaqFUFvNVVuxxywl35H1enBKN%2BW85LNnvhFzSfdgvsN6bQ9D7cdYSoPWcukSYZPN4dRXhtC1eddkF7fqTv6PB1y9T8OEINH&X-Amz-Signature=fee6e23a732d47ce8f21df18e4aae578fed6a9f2d6941f36464eadd303f484d6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJMPUT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDvLtXYyqqDb6ToTiLsjA8D7XMs%2Fil5oVlEX1YmX0vzdgIgevYz0bFAPX3SFR3FBavk66hg1ABkyOx4ot3frGlszIIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGp2Kvpz6aNBkcPyKSrcAyc2RFeVlXUTAsUMtCE7uia3dKR6FugBl5a1yUARC6IYxMebFFdAr1pkTo6zJJulQjaIqCmSKFsTbNOSqUXVQwOz5vaHFW8sxyiNa72uat3TIFHY7G5y95uDTGKRlyK5lvA4bxXXX6599ALF8k3IJM5Nofe3Wu1m5gt7nW1UFYvPImJpNg%2BDm8kNQ%2BItKDdYQxLaLpOg4iz14v0s6vwmS72zTySf6swAxeoryBhjUfHwmaOZ2zotlhRljAqlcIMJ3ePc79%2FpTMnVlL6jAKmySZ3EczgFi1VqeSRI%2Btd8ic0Peae7xRhypufHI6QYmhs5hQLy9OWEzBy6S29HgKKVZN6kLxbF4SQG61Wlz%2BVCqrfPpn8ZFukIw9jVxKxHGc2k8sCd7N4QKBtFFWQJArdFuMeUdeO2ExsY1n1UkDcOQ91Kf8xQ6dxkAHvG7kZwzVlM51OH%2BYKqmyHQz7ux1QOC7IPgNdth6RKVnycz8M2Atn16wAZvbyKlfs8eyYpaf%2Bm155Nv2PH1R3KTBOhAnYJwxPEvoHcB4IOFwLEIOnwyFrH7tAM8BJmXhzbzEHKzWw41GvjMbY%2FNqIXflUO1rbZciQtl%2BV6I7J1REscZHtGmBuN2IxbRyCfNDChe9u3FMNb7iMIGOqUBMEDCKeujos11K0nEJ7meUqbhNDuvqaZUVQ6rwNXLyLtqKvib8sT7aWYWmXWoefb5GNQpTHp01MS%2FYCBaXpArzbUQ5aIJ9rccn9On6IGQLWb4UpDRQRnELeESJbMcOuaqFUFvNVVuxxywl35H1enBKN%2BW85LNnvhFzSfdgvsN6bQ9D7cdYSoPWcukSYZPN4dRXhtC1eddkF7fqTv6PB1y9T8OEINH&X-Amz-Signature=0d16c446f989e1ce26cdb91c45908524eb30335e0eed4d6a66b9d6f3912ef8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJMPUT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDvLtXYyqqDb6ToTiLsjA8D7XMs%2Fil5oVlEX1YmX0vzdgIgevYz0bFAPX3SFR3FBavk66hg1ABkyOx4ot3frGlszIIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGp2Kvpz6aNBkcPyKSrcAyc2RFeVlXUTAsUMtCE7uia3dKR6FugBl5a1yUARC6IYxMebFFdAr1pkTo6zJJulQjaIqCmSKFsTbNOSqUXVQwOz5vaHFW8sxyiNa72uat3TIFHY7G5y95uDTGKRlyK5lvA4bxXXX6599ALF8k3IJM5Nofe3Wu1m5gt7nW1UFYvPImJpNg%2BDm8kNQ%2BItKDdYQxLaLpOg4iz14v0s6vwmS72zTySf6swAxeoryBhjUfHwmaOZ2zotlhRljAqlcIMJ3ePc79%2FpTMnVlL6jAKmySZ3EczgFi1VqeSRI%2Btd8ic0Peae7xRhypufHI6QYmhs5hQLy9OWEzBy6S29HgKKVZN6kLxbF4SQG61Wlz%2BVCqrfPpn8ZFukIw9jVxKxHGc2k8sCd7N4QKBtFFWQJArdFuMeUdeO2ExsY1n1UkDcOQ91Kf8xQ6dxkAHvG7kZwzVlM51OH%2BYKqmyHQz7ux1QOC7IPgNdth6RKVnycz8M2Atn16wAZvbyKlfs8eyYpaf%2Bm155Nv2PH1R3KTBOhAnYJwxPEvoHcB4IOFwLEIOnwyFrH7tAM8BJmXhzbzEHKzWw41GvjMbY%2FNqIXflUO1rbZciQtl%2BV6I7J1REscZHtGmBuN2IxbRyCfNDChe9u3FMNb7iMIGOqUBMEDCKeujos11K0nEJ7meUqbhNDuvqaZUVQ6rwNXLyLtqKvib8sT7aWYWmXWoefb5GNQpTHp01MS%2FYCBaXpArzbUQ5aIJ9rccn9On6IGQLWb4UpDRQRnELeESJbMcOuaqFUFvNVVuxxywl35H1enBKN%2BW85LNnvhFzSfdgvsN6bQ9D7cdYSoPWcukSYZPN4dRXhtC1eddkF7fqTv6PB1y9T8OEINH&X-Amz-Signature=506dce0dbbc81dbcc180c8b8f37518dff72307ad35569cf38a06f09e45782f72&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

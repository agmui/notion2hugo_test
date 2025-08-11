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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4LATXW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiktyXbrRxsZ8HsENUSkenJOLJjzk2yABxonazsFVJUgIhAMlgS5wrg3kdhCk6jEJOmqMNrYqBSgitRPbfZAo%2FKWO4KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypjErCoxKZZh49jjcq3AMT2IduaHhClC14QL0vYOI2laOQDGhSqhQnFddu7F%2Frs%2FFEHwjMNgzk8vLiGOZlIy1jkud01a8Yb5KHTtDfOPGNrgO36i57dKGRhCuZy%2FDoMANC7K474xu11u9jJdecsyGQlC8i5afwzN9SG2jVr%2BpYTD9GMp1K14QMzbQPn3ojckBrp8mElpVwCbJ7lES4JFSex%2FhJX5gAZCZMQTRmr62hBksFamuNb2nq0IsHV%2B4wLxNRDCKedSUX40uLpNfNR2D0nTejFLBBJBFBeSZRF93atPeVp6mzGY8EOEFGCLuUGSugheAf%2B8BqhpCPEucjEy1j8OpPTmtHCduhn8mEeu4JoVmFLvcxTHLiXf9L9mwXjA1UW94bHkfw9mKdn9RG2alG5z3UYGfa3tHHoqSvi2x0gUnvUZhPUo79HVjsCVT2SQDkWYoIBhuDiJOnJC4F3ldWjXqVssRSAmgZNqeuMjPX5Zqz159%2BZm54fsgiNW63ZVt9iOFc6C8tJdv2LUXUwJVPIBrcTW1T%2BCELzB0obKuTZ5c948VMtm5Mm5%2Fy2Owt%2B10MoGyWCzwDu%2BsdSAKNINCyCPNBMC%2F8FI6hsOhSyl9Utu7HZElK4M3xdd8iUSy0TYrS8f%2B5vtJd7lN8TzDG9%2BXEBjqkAY%2FqvL0FvptAQdf5g%2F%2FfWZJpP9Eo5MPQDVM03Z3GAr%2Ba0U2nrCSB5OPOb54IxdMRLnWBSWy%2FAJmWCc3umjZjkD6B0KvEoi%2FeyUhack3Ky0OD3kEDJJKYNOukym4saqOc2LWWbM%2FNcQk%2FqkqLej%2FXARdFMRjE9vIJwKuFmajYrXuf2CFbYwE14nK9FtHCSz9WvBSOBe4f5AU7yCkTbnVgMB7omsJx&X-Amz-Signature=71cb423c8cdf0688d2a22ec85e04e33f86e616ddd77d46407dc58319d54274fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4LATXW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiktyXbrRxsZ8HsENUSkenJOLJjzk2yABxonazsFVJUgIhAMlgS5wrg3kdhCk6jEJOmqMNrYqBSgitRPbfZAo%2FKWO4KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypjErCoxKZZh49jjcq3AMT2IduaHhClC14QL0vYOI2laOQDGhSqhQnFddu7F%2Frs%2FFEHwjMNgzk8vLiGOZlIy1jkud01a8Yb5KHTtDfOPGNrgO36i57dKGRhCuZy%2FDoMANC7K474xu11u9jJdecsyGQlC8i5afwzN9SG2jVr%2BpYTD9GMp1K14QMzbQPn3ojckBrp8mElpVwCbJ7lES4JFSex%2FhJX5gAZCZMQTRmr62hBksFamuNb2nq0IsHV%2B4wLxNRDCKedSUX40uLpNfNR2D0nTejFLBBJBFBeSZRF93atPeVp6mzGY8EOEFGCLuUGSugheAf%2B8BqhpCPEucjEy1j8OpPTmtHCduhn8mEeu4JoVmFLvcxTHLiXf9L9mwXjA1UW94bHkfw9mKdn9RG2alG5z3UYGfa3tHHoqSvi2x0gUnvUZhPUo79HVjsCVT2SQDkWYoIBhuDiJOnJC4F3ldWjXqVssRSAmgZNqeuMjPX5Zqz159%2BZm54fsgiNW63ZVt9iOFc6C8tJdv2LUXUwJVPIBrcTW1T%2BCELzB0obKuTZ5c948VMtm5Mm5%2Fy2Owt%2B10MoGyWCzwDu%2BsdSAKNINCyCPNBMC%2F8FI6hsOhSyl9Utu7HZElK4M3xdd8iUSy0TYrS8f%2B5vtJd7lN8TzDG9%2BXEBjqkAY%2FqvL0FvptAQdf5g%2F%2FfWZJpP9Eo5MPQDVM03Z3GAr%2Ba0U2nrCSB5OPOb54IxdMRLnWBSWy%2FAJmWCc3umjZjkD6B0KvEoi%2FeyUhack3Ky0OD3kEDJJKYNOukym4saqOc2LWWbM%2FNcQk%2FqkqLej%2FXARdFMRjE9vIJwKuFmajYrXuf2CFbYwE14nK9FtHCSz9WvBSOBe4f5AU7yCkTbnVgMB7omsJx&X-Amz-Signature=6e0c40bd9d482776a0c36f0a5a6be833a29164e56c5da78149c2ef3a6c37a950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4LATXW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiktyXbrRxsZ8HsENUSkenJOLJjzk2yABxonazsFVJUgIhAMlgS5wrg3kdhCk6jEJOmqMNrYqBSgitRPbfZAo%2FKWO4KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypjErCoxKZZh49jjcq3AMT2IduaHhClC14QL0vYOI2laOQDGhSqhQnFddu7F%2Frs%2FFEHwjMNgzk8vLiGOZlIy1jkud01a8Yb5KHTtDfOPGNrgO36i57dKGRhCuZy%2FDoMANC7K474xu11u9jJdecsyGQlC8i5afwzN9SG2jVr%2BpYTD9GMp1K14QMzbQPn3ojckBrp8mElpVwCbJ7lES4JFSex%2FhJX5gAZCZMQTRmr62hBksFamuNb2nq0IsHV%2B4wLxNRDCKedSUX40uLpNfNR2D0nTejFLBBJBFBeSZRF93atPeVp6mzGY8EOEFGCLuUGSugheAf%2B8BqhpCPEucjEy1j8OpPTmtHCduhn8mEeu4JoVmFLvcxTHLiXf9L9mwXjA1UW94bHkfw9mKdn9RG2alG5z3UYGfa3tHHoqSvi2x0gUnvUZhPUo79HVjsCVT2SQDkWYoIBhuDiJOnJC4F3ldWjXqVssRSAmgZNqeuMjPX5Zqz159%2BZm54fsgiNW63ZVt9iOFc6C8tJdv2LUXUwJVPIBrcTW1T%2BCELzB0obKuTZ5c948VMtm5Mm5%2Fy2Owt%2B10MoGyWCzwDu%2BsdSAKNINCyCPNBMC%2F8FI6hsOhSyl9Utu7HZElK4M3xdd8iUSy0TYrS8f%2B5vtJd7lN8TzDG9%2BXEBjqkAY%2FqvL0FvptAQdf5g%2F%2FfWZJpP9Eo5MPQDVM03Z3GAr%2Ba0U2nrCSB5OPOb54IxdMRLnWBSWy%2FAJmWCc3umjZjkD6B0KvEoi%2FeyUhack3Ky0OD3kEDJJKYNOukym4saqOc2LWWbM%2FNcQk%2FqkqLej%2FXARdFMRjE9vIJwKuFmajYrXuf2CFbYwE14nK9FtHCSz9WvBSOBe4f5AU7yCkTbnVgMB7omsJx&X-Amz-Signature=e21a6ed195166c9f0459f2b76be845d06891226e4829909dd6e9a045b57229da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4LATXW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiktyXbrRxsZ8HsENUSkenJOLJjzk2yABxonazsFVJUgIhAMlgS5wrg3kdhCk6jEJOmqMNrYqBSgitRPbfZAo%2FKWO4KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypjErCoxKZZh49jjcq3AMT2IduaHhClC14QL0vYOI2laOQDGhSqhQnFddu7F%2Frs%2FFEHwjMNgzk8vLiGOZlIy1jkud01a8Yb5KHTtDfOPGNrgO36i57dKGRhCuZy%2FDoMANC7K474xu11u9jJdecsyGQlC8i5afwzN9SG2jVr%2BpYTD9GMp1K14QMzbQPn3ojckBrp8mElpVwCbJ7lES4JFSex%2FhJX5gAZCZMQTRmr62hBksFamuNb2nq0IsHV%2B4wLxNRDCKedSUX40uLpNfNR2D0nTejFLBBJBFBeSZRF93atPeVp6mzGY8EOEFGCLuUGSugheAf%2B8BqhpCPEucjEy1j8OpPTmtHCduhn8mEeu4JoVmFLvcxTHLiXf9L9mwXjA1UW94bHkfw9mKdn9RG2alG5z3UYGfa3tHHoqSvi2x0gUnvUZhPUo79HVjsCVT2SQDkWYoIBhuDiJOnJC4F3ldWjXqVssRSAmgZNqeuMjPX5Zqz159%2BZm54fsgiNW63ZVt9iOFc6C8tJdv2LUXUwJVPIBrcTW1T%2BCELzB0obKuTZ5c948VMtm5Mm5%2Fy2Owt%2B10MoGyWCzwDu%2BsdSAKNINCyCPNBMC%2F8FI6hsOhSyl9Utu7HZElK4M3xdd8iUSy0TYrS8f%2B5vtJd7lN8TzDG9%2BXEBjqkAY%2FqvL0FvptAQdf5g%2F%2FfWZJpP9Eo5MPQDVM03Z3GAr%2Ba0U2nrCSB5OPOb54IxdMRLnWBSWy%2FAJmWCc3umjZjkD6B0KvEoi%2FeyUhack3Ky0OD3kEDJJKYNOukym4saqOc2LWWbM%2FNcQk%2FqkqLej%2FXARdFMRjE9vIJwKuFmajYrXuf2CFbYwE14nK9FtHCSz9WvBSOBe4f5AU7yCkTbnVgMB7omsJx&X-Amz-Signature=14274952d06aff664adb73dcd4e0baf48072a60c8a2e7db2ea276bd10bc338a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4LATXW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiktyXbrRxsZ8HsENUSkenJOLJjzk2yABxonazsFVJUgIhAMlgS5wrg3kdhCk6jEJOmqMNrYqBSgitRPbfZAo%2FKWO4KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypjErCoxKZZh49jjcq3AMT2IduaHhClC14QL0vYOI2laOQDGhSqhQnFddu7F%2Frs%2FFEHwjMNgzk8vLiGOZlIy1jkud01a8Yb5KHTtDfOPGNrgO36i57dKGRhCuZy%2FDoMANC7K474xu11u9jJdecsyGQlC8i5afwzN9SG2jVr%2BpYTD9GMp1K14QMzbQPn3ojckBrp8mElpVwCbJ7lES4JFSex%2FhJX5gAZCZMQTRmr62hBksFamuNb2nq0IsHV%2B4wLxNRDCKedSUX40uLpNfNR2D0nTejFLBBJBFBeSZRF93atPeVp6mzGY8EOEFGCLuUGSugheAf%2B8BqhpCPEucjEy1j8OpPTmtHCduhn8mEeu4JoVmFLvcxTHLiXf9L9mwXjA1UW94bHkfw9mKdn9RG2alG5z3UYGfa3tHHoqSvi2x0gUnvUZhPUo79HVjsCVT2SQDkWYoIBhuDiJOnJC4F3ldWjXqVssRSAmgZNqeuMjPX5Zqz159%2BZm54fsgiNW63ZVt9iOFc6C8tJdv2LUXUwJVPIBrcTW1T%2BCELzB0obKuTZ5c948VMtm5Mm5%2Fy2Owt%2B10MoGyWCzwDu%2BsdSAKNINCyCPNBMC%2F8FI6hsOhSyl9Utu7HZElK4M3xdd8iUSy0TYrS8f%2B5vtJd7lN8TzDG9%2BXEBjqkAY%2FqvL0FvptAQdf5g%2F%2FfWZJpP9Eo5MPQDVM03Z3GAr%2Ba0U2nrCSB5OPOb54IxdMRLnWBSWy%2FAJmWCc3umjZjkD6B0KvEoi%2FeyUhack3Ky0OD3kEDJJKYNOukym4saqOc2LWWbM%2FNcQk%2FqkqLej%2FXARdFMRjE9vIJwKuFmajYrXuf2CFbYwE14nK9FtHCSz9WvBSOBe4f5AU7yCkTbnVgMB7omsJx&X-Amz-Signature=58251c19256b35d05582395346102de90019d6f67d9b58da9d0887cef90a2fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4LATXW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiktyXbrRxsZ8HsENUSkenJOLJjzk2yABxonazsFVJUgIhAMlgS5wrg3kdhCk6jEJOmqMNrYqBSgitRPbfZAo%2FKWO4KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypjErCoxKZZh49jjcq3AMT2IduaHhClC14QL0vYOI2laOQDGhSqhQnFddu7F%2Frs%2FFEHwjMNgzk8vLiGOZlIy1jkud01a8Yb5KHTtDfOPGNrgO36i57dKGRhCuZy%2FDoMANC7K474xu11u9jJdecsyGQlC8i5afwzN9SG2jVr%2BpYTD9GMp1K14QMzbQPn3ojckBrp8mElpVwCbJ7lES4JFSex%2FhJX5gAZCZMQTRmr62hBksFamuNb2nq0IsHV%2B4wLxNRDCKedSUX40uLpNfNR2D0nTejFLBBJBFBeSZRF93atPeVp6mzGY8EOEFGCLuUGSugheAf%2B8BqhpCPEucjEy1j8OpPTmtHCduhn8mEeu4JoVmFLvcxTHLiXf9L9mwXjA1UW94bHkfw9mKdn9RG2alG5z3UYGfa3tHHoqSvi2x0gUnvUZhPUo79HVjsCVT2SQDkWYoIBhuDiJOnJC4F3ldWjXqVssRSAmgZNqeuMjPX5Zqz159%2BZm54fsgiNW63ZVt9iOFc6C8tJdv2LUXUwJVPIBrcTW1T%2BCELzB0obKuTZ5c948VMtm5Mm5%2Fy2Owt%2B10MoGyWCzwDu%2BsdSAKNINCyCPNBMC%2F8FI6hsOhSyl9Utu7HZElK4M3xdd8iUSy0TYrS8f%2B5vtJd7lN8TzDG9%2BXEBjqkAY%2FqvL0FvptAQdf5g%2F%2FfWZJpP9Eo5MPQDVM03Z3GAr%2Ba0U2nrCSB5OPOb54IxdMRLnWBSWy%2FAJmWCc3umjZjkD6B0KvEoi%2FeyUhack3Ky0OD3kEDJJKYNOukym4saqOc2LWWbM%2FNcQk%2FqkqLej%2FXARdFMRjE9vIJwKuFmajYrXuf2CFbYwE14nK9FtHCSz9WvBSOBe4f5AU7yCkTbnVgMB7omsJx&X-Amz-Signature=239b7b0da265cf7644114314fb424b6c26bc7b9627511fc7d1b1842e8256e570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4LATXW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiktyXbrRxsZ8HsENUSkenJOLJjzk2yABxonazsFVJUgIhAMlgS5wrg3kdhCk6jEJOmqMNrYqBSgitRPbfZAo%2FKWO4KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypjErCoxKZZh49jjcq3AMT2IduaHhClC14QL0vYOI2laOQDGhSqhQnFddu7F%2Frs%2FFEHwjMNgzk8vLiGOZlIy1jkud01a8Yb5KHTtDfOPGNrgO36i57dKGRhCuZy%2FDoMANC7K474xu11u9jJdecsyGQlC8i5afwzN9SG2jVr%2BpYTD9GMp1K14QMzbQPn3ojckBrp8mElpVwCbJ7lES4JFSex%2FhJX5gAZCZMQTRmr62hBksFamuNb2nq0IsHV%2B4wLxNRDCKedSUX40uLpNfNR2D0nTejFLBBJBFBeSZRF93atPeVp6mzGY8EOEFGCLuUGSugheAf%2B8BqhpCPEucjEy1j8OpPTmtHCduhn8mEeu4JoVmFLvcxTHLiXf9L9mwXjA1UW94bHkfw9mKdn9RG2alG5z3UYGfa3tHHoqSvi2x0gUnvUZhPUo79HVjsCVT2SQDkWYoIBhuDiJOnJC4F3ldWjXqVssRSAmgZNqeuMjPX5Zqz159%2BZm54fsgiNW63ZVt9iOFc6C8tJdv2LUXUwJVPIBrcTW1T%2BCELzB0obKuTZ5c948VMtm5Mm5%2Fy2Owt%2B10MoGyWCzwDu%2BsdSAKNINCyCPNBMC%2F8FI6hsOhSyl9Utu7HZElK4M3xdd8iUSy0TYrS8f%2B5vtJd7lN8TzDG9%2BXEBjqkAY%2FqvL0FvptAQdf5g%2F%2FfWZJpP9Eo5MPQDVM03Z3GAr%2Ba0U2nrCSB5OPOb54IxdMRLnWBSWy%2FAJmWCc3umjZjkD6B0KvEoi%2FeyUhack3Ky0OD3kEDJJKYNOukym4saqOc2LWWbM%2FNcQk%2FqkqLej%2FXARdFMRjE9vIJwKuFmajYrXuf2CFbYwE14nK9FtHCSz9WvBSOBe4f5AU7yCkTbnVgMB7omsJx&X-Amz-Signature=7969fe0ddd97d7c1c6566d3a058d2522ef1350bca6f5ada8c674a82bc6603ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

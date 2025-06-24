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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QO4WGET%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAT%2BvaSWb69MHUdFYcCrswhtE9w6JvB2IitCxvR3Lm3UAiBLoSTfthYNODBiDaMBl6hU0TFrsG6SiSMnMZaRaA4ftSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQSxVsPWI%2B2%2B9BCcnKtwDM1s7jGrj%2Fqb2p0vge8WZRcMYO5fE6aIL3xJl3sLbalSgU7%2BxuVcZjBFYqmokGEZC58r%2FReBWFdNU1YCp58fnvvtGaY7Jsl19eYkOvLgRi0Xg0lp0Y59tkPxBq9wKiht0tpRVBlMYNnU%2BeYsP6srhbrE87WcxWLJ%2BLdu3WN%2FJuHFj6s9JfH4I6QUijXYe0uYFm5Iy9AoHfv7V7N%2FFYHRJt1uRZzvh4H0WbSbIs6Zluu6lMsQEEGvApeeW1BUp9jFFtlNJqGe2Fasn3dS3aVbFxWd07OeUYWNgl37WZbF4FlSyl%2BSOd%2Fcy03ChxaByG5GhfhqJTWGyr98e8uhAX%2BZ4%2BXiMEn9KKBy9acxvfpEXElAP7hU4z%2BMGdrpQg2BNkiv2SUi8yNCUFUrkqa1Pt87ZzuILnTEICuOBaHOLolJuO6KoP7i3qx%2F7Musauujlr0SxDW63txSczC%2FUx0dlputq2XakNHliM2jp4tetZY%2F36cdHJX9S5g38ShSfTW2o4kskbA94biacIOaTtyxTUmhb7rIRu3RQgDaOfLg2WIGYeTLQpa1R1LiXgIImNfgMVrab4FbKPw45%2BJH7fetZQXDY8OPhIbRqvmjWZAJlTTA1ySeBhm7KavMdGX%2BKMDAw7IvswgY6pgHyTYBFckRQooixpXC1U3zr5vPDdOntaPS%2BUhxRg9AsSWo6XWFI9BTctt8jZ0gfkpKJ2VDvj8VxZKt2CJnnBYSBInu36R7DihcHKzFXR1lazeEIVe3kNFF0NfJqrqNNJV7%2FQ83UyY4TntDy2iSJReR64ORnFAwsJqot3BTUkPMxqld1HqChKh2QMc7mLcErYHZeczng9zJZxHPvAIbJ4yU5xrFpGdBV&X-Amz-Signature=25b401b2cd4db347ed8cf485b4755fd4e19442794fe19af89f1bb44f35772f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QO4WGET%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAT%2BvaSWb69MHUdFYcCrswhtE9w6JvB2IitCxvR3Lm3UAiBLoSTfthYNODBiDaMBl6hU0TFrsG6SiSMnMZaRaA4ftSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQSxVsPWI%2B2%2B9BCcnKtwDM1s7jGrj%2Fqb2p0vge8WZRcMYO5fE6aIL3xJl3sLbalSgU7%2BxuVcZjBFYqmokGEZC58r%2FReBWFdNU1YCp58fnvvtGaY7Jsl19eYkOvLgRi0Xg0lp0Y59tkPxBq9wKiht0tpRVBlMYNnU%2BeYsP6srhbrE87WcxWLJ%2BLdu3WN%2FJuHFj6s9JfH4I6QUijXYe0uYFm5Iy9AoHfv7V7N%2FFYHRJt1uRZzvh4H0WbSbIs6Zluu6lMsQEEGvApeeW1BUp9jFFtlNJqGe2Fasn3dS3aVbFxWd07OeUYWNgl37WZbF4FlSyl%2BSOd%2Fcy03ChxaByG5GhfhqJTWGyr98e8uhAX%2BZ4%2BXiMEn9KKBy9acxvfpEXElAP7hU4z%2BMGdrpQg2BNkiv2SUi8yNCUFUrkqa1Pt87ZzuILnTEICuOBaHOLolJuO6KoP7i3qx%2F7Musauujlr0SxDW63txSczC%2FUx0dlputq2XakNHliM2jp4tetZY%2F36cdHJX9S5g38ShSfTW2o4kskbA94biacIOaTtyxTUmhb7rIRu3RQgDaOfLg2WIGYeTLQpa1R1LiXgIImNfgMVrab4FbKPw45%2BJH7fetZQXDY8OPhIbRqvmjWZAJlTTA1ySeBhm7KavMdGX%2BKMDAw7IvswgY6pgHyTYBFckRQooixpXC1U3zr5vPDdOntaPS%2BUhxRg9AsSWo6XWFI9BTctt8jZ0gfkpKJ2VDvj8VxZKt2CJnnBYSBInu36R7DihcHKzFXR1lazeEIVe3kNFF0NfJqrqNNJV7%2FQ83UyY4TntDy2iSJReR64ORnFAwsJqot3BTUkPMxqld1HqChKh2QMc7mLcErYHZeczng9zJZxHPvAIbJ4yU5xrFpGdBV&X-Amz-Signature=159121cda20ac7c434906c348140830c21ff4651d8dc687403390a5d727c49bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QO4WGET%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAT%2BvaSWb69MHUdFYcCrswhtE9w6JvB2IitCxvR3Lm3UAiBLoSTfthYNODBiDaMBl6hU0TFrsG6SiSMnMZaRaA4ftSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQSxVsPWI%2B2%2B9BCcnKtwDM1s7jGrj%2Fqb2p0vge8WZRcMYO5fE6aIL3xJl3sLbalSgU7%2BxuVcZjBFYqmokGEZC58r%2FReBWFdNU1YCp58fnvvtGaY7Jsl19eYkOvLgRi0Xg0lp0Y59tkPxBq9wKiht0tpRVBlMYNnU%2BeYsP6srhbrE87WcxWLJ%2BLdu3WN%2FJuHFj6s9JfH4I6QUijXYe0uYFm5Iy9AoHfv7V7N%2FFYHRJt1uRZzvh4H0WbSbIs6Zluu6lMsQEEGvApeeW1BUp9jFFtlNJqGe2Fasn3dS3aVbFxWd07OeUYWNgl37WZbF4FlSyl%2BSOd%2Fcy03ChxaByG5GhfhqJTWGyr98e8uhAX%2BZ4%2BXiMEn9KKBy9acxvfpEXElAP7hU4z%2BMGdrpQg2BNkiv2SUi8yNCUFUrkqa1Pt87ZzuILnTEICuOBaHOLolJuO6KoP7i3qx%2F7Musauujlr0SxDW63txSczC%2FUx0dlputq2XakNHliM2jp4tetZY%2F36cdHJX9S5g38ShSfTW2o4kskbA94biacIOaTtyxTUmhb7rIRu3RQgDaOfLg2WIGYeTLQpa1R1LiXgIImNfgMVrab4FbKPw45%2BJH7fetZQXDY8OPhIbRqvmjWZAJlTTA1ySeBhm7KavMdGX%2BKMDAw7IvswgY6pgHyTYBFckRQooixpXC1U3zr5vPDdOntaPS%2BUhxRg9AsSWo6XWFI9BTctt8jZ0gfkpKJ2VDvj8VxZKt2CJnnBYSBInu36R7DihcHKzFXR1lazeEIVe3kNFF0NfJqrqNNJV7%2FQ83UyY4TntDy2iSJReR64ORnFAwsJqot3BTUkPMxqld1HqChKh2QMc7mLcErYHZeczng9zJZxHPvAIbJ4yU5xrFpGdBV&X-Amz-Signature=b26cf5db2dc25892ee48e86652b7e2ad0e1d6dcea9c5dfb66fe64a0a9ba56bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QO4WGET%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAT%2BvaSWb69MHUdFYcCrswhtE9w6JvB2IitCxvR3Lm3UAiBLoSTfthYNODBiDaMBl6hU0TFrsG6SiSMnMZaRaA4ftSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQSxVsPWI%2B2%2B9BCcnKtwDM1s7jGrj%2Fqb2p0vge8WZRcMYO5fE6aIL3xJl3sLbalSgU7%2BxuVcZjBFYqmokGEZC58r%2FReBWFdNU1YCp58fnvvtGaY7Jsl19eYkOvLgRi0Xg0lp0Y59tkPxBq9wKiht0tpRVBlMYNnU%2BeYsP6srhbrE87WcxWLJ%2BLdu3WN%2FJuHFj6s9JfH4I6QUijXYe0uYFm5Iy9AoHfv7V7N%2FFYHRJt1uRZzvh4H0WbSbIs6Zluu6lMsQEEGvApeeW1BUp9jFFtlNJqGe2Fasn3dS3aVbFxWd07OeUYWNgl37WZbF4FlSyl%2BSOd%2Fcy03ChxaByG5GhfhqJTWGyr98e8uhAX%2BZ4%2BXiMEn9KKBy9acxvfpEXElAP7hU4z%2BMGdrpQg2BNkiv2SUi8yNCUFUrkqa1Pt87ZzuILnTEICuOBaHOLolJuO6KoP7i3qx%2F7Musauujlr0SxDW63txSczC%2FUx0dlputq2XakNHliM2jp4tetZY%2F36cdHJX9S5g38ShSfTW2o4kskbA94biacIOaTtyxTUmhb7rIRu3RQgDaOfLg2WIGYeTLQpa1R1LiXgIImNfgMVrab4FbKPw45%2BJH7fetZQXDY8OPhIbRqvmjWZAJlTTA1ySeBhm7KavMdGX%2BKMDAw7IvswgY6pgHyTYBFckRQooixpXC1U3zr5vPDdOntaPS%2BUhxRg9AsSWo6XWFI9BTctt8jZ0gfkpKJ2VDvj8VxZKt2CJnnBYSBInu36R7DihcHKzFXR1lazeEIVe3kNFF0NfJqrqNNJV7%2FQ83UyY4TntDy2iSJReR64ORnFAwsJqot3BTUkPMxqld1HqChKh2QMc7mLcErYHZeczng9zJZxHPvAIbJ4yU5xrFpGdBV&X-Amz-Signature=0b0d04c1e2adf2a1a54d9c8f95b4e80c6d84f1cad233367017ff5ed0bb356f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QO4WGET%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAT%2BvaSWb69MHUdFYcCrswhtE9w6JvB2IitCxvR3Lm3UAiBLoSTfthYNODBiDaMBl6hU0TFrsG6SiSMnMZaRaA4ftSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQSxVsPWI%2B2%2B9BCcnKtwDM1s7jGrj%2Fqb2p0vge8WZRcMYO5fE6aIL3xJl3sLbalSgU7%2BxuVcZjBFYqmokGEZC58r%2FReBWFdNU1YCp58fnvvtGaY7Jsl19eYkOvLgRi0Xg0lp0Y59tkPxBq9wKiht0tpRVBlMYNnU%2BeYsP6srhbrE87WcxWLJ%2BLdu3WN%2FJuHFj6s9JfH4I6QUijXYe0uYFm5Iy9AoHfv7V7N%2FFYHRJt1uRZzvh4H0WbSbIs6Zluu6lMsQEEGvApeeW1BUp9jFFtlNJqGe2Fasn3dS3aVbFxWd07OeUYWNgl37WZbF4FlSyl%2BSOd%2Fcy03ChxaByG5GhfhqJTWGyr98e8uhAX%2BZ4%2BXiMEn9KKBy9acxvfpEXElAP7hU4z%2BMGdrpQg2BNkiv2SUi8yNCUFUrkqa1Pt87ZzuILnTEICuOBaHOLolJuO6KoP7i3qx%2F7Musauujlr0SxDW63txSczC%2FUx0dlputq2XakNHliM2jp4tetZY%2F36cdHJX9S5g38ShSfTW2o4kskbA94biacIOaTtyxTUmhb7rIRu3RQgDaOfLg2WIGYeTLQpa1R1LiXgIImNfgMVrab4FbKPw45%2BJH7fetZQXDY8OPhIbRqvmjWZAJlTTA1ySeBhm7KavMdGX%2BKMDAw7IvswgY6pgHyTYBFckRQooixpXC1U3zr5vPDdOntaPS%2BUhxRg9AsSWo6XWFI9BTctt8jZ0gfkpKJ2VDvj8VxZKt2CJnnBYSBInu36R7DihcHKzFXR1lazeEIVe3kNFF0NfJqrqNNJV7%2FQ83UyY4TntDy2iSJReR64ORnFAwsJqot3BTUkPMxqld1HqChKh2QMc7mLcErYHZeczng9zJZxHPvAIbJ4yU5xrFpGdBV&X-Amz-Signature=88bbf7d2fde5d894d3c482d62a464d79f6d4a1bffd95564984f33b3272e954e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QO4WGET%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAT%2BvaSWb69MHUdFYcCrswhtE9w6JvB2IitCxvR3Lm3UAiBLoSTfthYNODBiDaMBl6hU0TFrsG6SiSMnMZaRaA4ftSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQSxVsPWI%2B2%2B9BCcnKtwDM1s7jGrj%2Fqb2p0vge8WZRcMYO5fE6aIL3xJl3sLbalSgU7%2BxuVcZjBFYqmokGEZC58r%2FReBWFdNU1YCp58fnvvtGaY7Jsl19eYkOvLgRi0Xg0lp0Y59tkPxBq9wKiht0tpRVBlMYNnU%2BeYsP6srhbrE87WcxWLJ%2BLdu3WN%2FJuHFj6s9JfH4I6QUijXYe0uYFm5Iy9AoHfv7V7N%2FFYHRJt1uRZzvh4H0WbSbIs6Zluu6lMsQEEGvApeeW1BUp9jFFtlNJqGe2Fasn3dS3aVbFxWd07OeUYWNgl37WZbF4FlSyl%2BSOd%2Fcy03ChxaByG5GhfhqJTWGyr98e8uhAX%2BZ4%2BXiMEn9KKBy9acxvfpEXElAP7hU4z%2BMGdrpQg2BNkiv2SUi8yNCUFUrkqa1Pt87ZzuILnTEICuOBaHOLolJuO6KoP7i3qx%2F7Musauujlr0SxDW63txSczC%2FUx0dlputq2XakNHliM2jp4tetZY%2F36cdHJX9S5g38ShSfTW2o4kskbA94biacIOaTtyxTUmhb7rIRu3RQgDaOfLg2WIGYeTLQpa1R1LiXgIImNfgMVrab4FbKPw45%2BJH7fetZQXDY8OPhIbRqvmjWZAJlTTA1ySeBhm7KavMdGX%2BKMDAw7IvswgY6pgHyTYBFckRQooixpXC1U3zr5vPDdOntaPS%2BUhxRg9AsSWo6XWFI9BTctt8jZ0gfkpKJ2VDvj8VxZKt2CJnnBYSBInu36R7DihcHKzFXR1lazeEIVe3kNFF0NfJqrqNNJV7%2FQ83UyY4TntDy2iSJReR64ORnFAwsJqot3BTUkPMxqld1HqChKh2QMc7mLcErYHZeczng9zJZxHPvAIbJ4yU5xrFpGdBV&X-Amz-Signature=e33eac8e49b9ef3d906d8f917f4341978f9b36c325e16f01734b4d6ec7bbe716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QO4WGET%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAT%2BvaSWb69MHUdFYcCrswhtE9w6JvB2IitCxvR3Lm3UAiBLoSTfthYNODBiDaMBl6hU0TFrsG6SiSMnMZaRaA4ftSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQSxVsPWI%2B2%2B9BCcnKtwDM1s7jGrj%2Fqb2p0vge8WZRcMYO5fE6aIL3xJl3sLbalSgU7%2BxuVcZjBFYqmokGEZC58r%2FReBWFdNU1YCp58fnvvtGaY7Jsl19eYkOvLgRi0Xg0lp0Y59tkPxBq9wKiht0tpRVBlMYNnU%2BeYsP6srhbrE87WcxWLJ%2BLdu3WN%2FJuHFj6s9JfH4I6QUijXYe0uYFm5Iy9AoHfv7V7N%2FFYHRJt1uRZzvh4H0WbSbIs6Zluu6lMsQEEGvApeeW1BUp9jFFtlNJqGe2Fasn3dS3aVbFxWd07OeUYWNgl37WZbF4FlSyl%2BSOd%2Fcy03ChxaByG5GhfhqJTWGyr98e8uhAX%2BZ4%2BXiMEn9KKBy9acxvfpEXElAP7hU4z%2BMGdrpQg2BNkiv2SUi8yNCUFUrkqa1Pt87ZzuILnTEICuOBaHOLolJuO6KoP7i3qx%2F7Musauujlr0SxDW63txSczC%2FUx0dlputq2XakNHliM2jp4tetZY%2F36cdHJX9S5g38ShSfTW2o4kskbA94biacIOaTtyxTUmhb7rIRu3RQgDaOfLg2WIGYeTLQpa1R1LiXgIImNfgMVrab4FbKPw45%2BJH7fetZQXDY8OPhIbRqvmjWZAJlTTA1ySeBhm7KavMdGX%2BKMDAw7IvswgY6pgHyTYBFckRQooixpXC1U3zr5vPDdOntaPS%2BUhxRg9AsSWo6XWFI9BTctt8jZ0gfkpKJ2VDvj8VxZKt2CJnnBYSBInu36R7DihcHKzFXR1lazeEIVe3kNFF0NfJqrqNNJV7%2FQ83UyY4TntDy2iSJReR64ORnFAwsJqot3BTUkPMxqld1HqChKh2QMc7mLcErYHZeczng9zJZxHPvAIbJ4yU5xrFpGdBV&X-Amz-Signature=d6d6f4dd0e979dc96b00305e5fdec911ada1722a63b57dc490c19326b448fee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

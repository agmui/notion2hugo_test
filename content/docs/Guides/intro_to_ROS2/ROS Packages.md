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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUO55MOU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDUXg5dLJbvW1joCFW0j3M5dPGzF65tHg9J3lcDHmAQ%2BAIgYfHOqcHsT9u8i1JE2AKD0Rfu3c05c73m0SSI9L%2Bb6d8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLOcanC4iBJPOcPunircA5lTYx24q%2Fl3NbzOn5mQqMtDMTbakexYHIRdj%2FYL1%2BI39S9%2B6EkioVi1xyc1Gxf%2Bnr%2Fjtfv0tbPrdKeYG7Tnmin8oybZ6ZEKfdg3T%2FgKmdFnIoKorNI714Ek5CU%2FvNPetNxRxa4eVkni3o9LIy2n35QBK2HncyGu2bN%2Bix6JtExkCqM4DSjybuS6tOk%2F4YW40Pnr3CExZ9h09GcHELbBzY7ckr4CYbJ1lNGd008xLWmqbvSZWHnDVBIiJAck%2BpXtvVOr%2BeFmrmGxV3fBa8QyScLTtaZiKkSJ38j7V%2B414JM%2Fsnn12hK2cvSV9B4XDsP5rsooRVIqhu8KwHD1Acwy88vyU9pG8vdYJ2XSAsoOpk4vt%2FG1IO%2BkHkrayCSqXu0vvjGRKXDDv%2FXE07kD8%2BOBNWrct18sFPSThx1L6elI1u4ywQc3NKFZRo1zTRmUbq0uY3jNU1OG7wk2NIFd1XL2kpajwvYEYZoclbequvHtdCdVBduQ0OOUnbvbbEOjnW%2B2vB23SNseOA3gXg%2BgFClmj5mYxzVEccBx0lmWUnjJ%2BrvDN5POQeZ26kBcYB263wPBocDiR6IlDsmvk%2B4X7aZRD73zfV7NVCrtGDn92%2Bupd0yOh7yeXQwEGMgO3lyUMMPYh8IGOqUB5jDkOxPyk4uveKWkeBPp1Zys2q4IzswC%2F67mR5IKpLoMU6py%2FmXX4sGVT7WOut6Bdo%2FmcU%2F49h%2BI8tAtJgZ%2FAa9O7P%2Bo0xatqsqr%2FYWcxn6l53SoTY4FxjX%2Fk%2BPAOXtqYc9MRTAXhqMwOhkWudt7yQByCBMlWGgh7LONcUJcwtP94Qbakn1Toa1HA59%2BaueD43YrVYcQEqNpDPURNAB8uCRwv%2FzV&X-Amz-Signature=0719e5e07acfd91489d6350aeda6791eafbadcad57a8d8e9ccf23914040cdefc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUO55MOU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDUXg5dLJbvW1joCFW0j3M5dPGzF65tHg9J3lcDHmAQ%2BAIgYfHOqcHsT9u8i1JE2AKD0Rfu3c05c73m0SSI9L%2Bb6d8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLOcanC4iBJPOcPunircA5lTYx24q%2Fl3NbzOn5mQqMtDMTbakexYHIRdj%2FYL1%2BI39S9%2B6EkioVi1xyc1Gxf%2Bnr%2Fjtfv0tbPrdKeYG7Tnmin8oybZ6ZEKfdg3T%2FgKmdFnIoKorNI714Ek5CU%2FvNPetNxRxa4eVkni3o9LIy2n35QBK2HncyGu2bN%2Bix6JtExkCqM4DSjybuS6tOk%2F4YW40Pnr3CExZ9h09GcHELbBzY7ckr4CYbJ1lNGd008xLWmqbvSZWHnDVBIiJAck%2BpXtvVOr%2BeFmrmGxV3fBa8QyScLTtaZiKkSJ38j7V%2B414JM%2Fsnn12hK2cvSV9B4XDsP5rsooRVIqhu8KwHD1Acwy88vyU9pG8vdYJ2XSAsoOpk4vt%2FG1IO%2BkHkrayCSqXu0vvjGRKXDDv%2FXE07kD8%2BOBNWrct18sFPSThx1L6elI1u4ywQc3NKFZRo1zTRmUbq0uY3jNU1OG7wk2NIFd1XL2kpajwvYEYZoclbequvHtdCdVBduQ0OOUnbvbbEOjnW%2B2vB23SNseOA3gXg%2BgFClmj5mYxzVEccBx0lmWUnjJ%2BrvDN5POQeZ26kBcYB263wPBocDiR6IlDsmvk%2B4X7aZRD73zfV7NVCrtGDn92%2Bupd0yOh7yeXQwEGMgO3lyUMMPYh8IGOqUB5jDkOxPyk4uveKWkeBPp1Zys2q4IzswC%2F67mR5IKpLoMU6py%2FmXX4sGVT7WOut6Bdo%2FmcU%2F49h%2BI8tAtJgZ%2FAa9O7P%2Bo0xatqsqr%2FYWcxn6l53SoTY4FxjX%2Fk%2BPAOXtqYc9MRTAXhqMwOhkWudt7yQByCBMlWGgh7LONcUJcwtP94Qbakn1Toa1HA59%2BaueD43YrVYcQEqNpDPURNAB8uCRwv%2FzV&X-Amz-Signature=611be45f757d1571dd0d024fbd9dbb09b6d40c13afa744d5c9326573a64bd4ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUO55MOU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDUXg5dLJbvW1joCFW0j3M5dPGzF65tHg9J3lcDHmAQ%2BAIgYfHOqcHsT9u8i1JE2AKD0Rfu3c05c73m0SSI9L%2Bb6d8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLOcanC4iBJPOcPunircA5lTYx24q%2Fl3NbzOn5mQqMtDMTbakexYHIRdj%2FYL1%2BI39S9%2B6EkioVi1xyc1Gxf%2Bnr%2Fjtfv0tbPrdKeYG7Tnmin8oybZ6ZEKfdg3T%2FgKmdFnIoKorNI714Ek5CU%2FvNPetNxRxa4eVkni3o9LIy2n35QBK2HncyGu2bN%2Bix6JtExkCqM4DSjybuS6tOk%2F4YW40Pnr3CExZ9h09GcHELbBzY7ckr4CYbJ1lNGd008xLWmqbvSZWHnDVBIiJAck%2BpXtvVOr%2BeFmrmGxV3fBa8QyScLTtaZiKkSJ38j7V%2B414JM%2Fsnn12hK2cvSV9B4XDsP5rsooRVIqhu8KwHD1Acwy88vyU9pG8vdYJ2XSAsoOpk4vt%2FG1IO%2BkHkrayCSqXu0vvjGRKXDDv%2FXE07kD8%2BOBNWrct18sFPSThx1L6elI1u4ywQc3NKFZRo1zTRmUbq0uY3jNU1OG7wk2NIFd1XL2kpajwvYEYZoclbequvHtdCdVBduQ0OOUnbvbbEOjnW%2B2vB23SNseOA3gXg%2BgFClmj5mYxzVEccBx0lmWUnjJ%2BrvDN5POQeZ26kBcYB263wPBocDiR6IlDsmvk%2B4X7aZRD73zfV7NVCrtGDn92%2Bupd0yOh7yeXQwEGMgO3lyUMMPYh8IGOqUB5jDkOxPyk4uveKWkeBPp1Zys2q4IzswC%2F67mR5IKpLoMU6py%2FmXX4sGVT7WOut6Bdo%2FmcU%2F49h%2BI8tAtJgZ%2FAa9O7P%2Bo0xatqsqr%2FYWcxn6l53SoTY4FxjX%2Fk%2BPAOXtqYc9MRTAXhqMwOhkWudt7yQByCBMlWGgh7LONcUJcwtP94Qbakn1Toa1HA59%2BaueD43YrVYcQEqNpDPURNAB8uCRwv%2FzV&X-Amz-Signature=e5aba597f6607ef9e37c7f4df9fb0b25dddff0b5c884a65ded1b25cd55d8dd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUO55MOU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDUXg5dLJbvW1joCFW0j3M5dPGzF65tHg9J3lcDHmAQ%2BAIgYfHOqcHsT9u8i1JE2AKD0Rfu3c05c73m0SSI9L%2Bb6d8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLOcanC4iBJPOcPunircA5lTYx24q%2Fl3NbzOn5mQqMtDMTbakexYHIRdj%2FYL1%2BI39S9%2B6EkioVi1xyc1Gxf%2Bnr%2Fjtfv0tbPrdKeYG7Tnmin8oybZ6ZEKfdg3T%2FgKmdFnIoKorNI714Ek5CU%2FvNPetNxRxa4eVkni3o9LIy2n35QBK2HncyGu2bN%2Bix6JtExkCqM4DSjybuS6tOk%2F4YW40Pnr3CExZ9h09GcHELbBzY7ckr4CYbJ1lNGd008xLWmqbvSZWHnDVBIiJAck%2BpXtvVOr%2BeFmrmGxV3fBa8QyScLTtaZiKkSJ38j7V%2B414JM%2Fsnn12hK2cvSV9B4XDsP5rsooRVIqhu8KwHD1Acwy88vyU9pG8vdYJ2XSAsoOpk4vt%2FG1IO%2BkHkrayCSqXu0vvjGRKXDDv%2FXE07kD8%2BOBNWrct18sFPSThx1L6elI1u4ywQc3NKFZRo1zTRmUbq0uY3jNU1OG7wk2NIFd1XL2kpajwvYEYZoclbequvHtdCdVBduQ0OOUnbvbbEOjnW%2B2vB23SNseOA3gXg%2BgFClmj5mYxzVEccBx0lmWUnjJ%2BrvDN5POQeZ26kBcYB263wPBocDiR6IlDsmvk%2B4X7aZRD73zfV7NVCrtGDn92%2Bupd0yOh7yeXQwEGMgO3lyUMMPYh8IGOqUB5jDkOxPyk4uveKWkeBPp1Zys2q4IzswC%2F67mR5IKpLoMU6py%2FmXX4sGVT7WOut6Bdo%2FmcU%2F49h%2BI8tAtJgZ%2FAa9O7P%2Bo0xatqsqr%2FYWcxn6l53SoTY4FxjX%2Fk%2BPAOXtqYc9MRTAXhqMwOhkWudt7yQByCBMlWGgh7LONcUJcwtP94Qbakn1Toa1HA59%2BaueD43YrVYcQEqNpDPURNAB8uCRwv%2FzV&X-Amz-Signature=0e8ca738057626b9f3d27f85805cf8db6cfb33c269c5ced0e6839933ee023912&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUO55MOU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDUXg5dLJbvW1joCFW0j3M5dPGzF65tHg9J3lcDHmAQ%2BAIgYfHOqcHsT9u8i1JE2AKD0Rfu3c05c73m0SSI9L%2Bb6d8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLOcanC4iBJPOcPunircA5lTYx24q%2Fl3NbzOn5mQqMtDMTbakexYHIRdj%2FYL1%2BI39S9%2B6EkioVi1xyc1Gxf%2Bnr%2Fjtfv0tbPrdKeYG7Tnmin8oybZ6ZEKfdg3T%2FgKmdFnIoKorNI714Ek5CU%2FvNPetNxRxa4eVkni3o9LIy2n35QBK2HncyGu2bN%2Bix6JtExkCqM4DSjybuS6tOk%2F4YW40Pnr3CExZ9h09GcHELbBzY7ckr4CYbJ1lNGd008xLWmqbvSZWHnDVBIiJAck%2BpXtvVOr%2BeFmrmGxV3fBa8QyScLTtaZiKkSJ38j7V%2B414JM%2Fsnn12hK2cvSV9B4XDsP5rsooRVIqhu8KwHD1Acwy88vyU9pG8vdYJ2XSAsoOpk4vt%2FG1IO%2BkHkrayCSqXu0vvjGRKXDDv%2FXE07kD8%2BOBNWrct18sFPSThx1L6elI1u4ywQc3NKFZRo1zTRmUbq0uY3jNU1OG7wk2NIFd1XL2kpajwvYEYZoclbequvHtdCdVBduQ0OOUnbvbbEOjnW%2B2vB23SNseOA3gXg%2BgFClmj5mYxzVEccBx0lmWUnjJ%2BrvDN5POQeZ26kBcYB263wPBocDiR6IlDsmvk%2B4X7aZRD73zfV7NVCrtGDn92%2Bupd0yOh7yeXQwEGMgO3lyUMMPYh8IGOqUB5jDkOxPyk4uveKWkeBPp1Zys2q4IzswC%2F67mR5IKpLoMU6py%2FmXX4sGVT7WOut6Bdo%2FmcU%2F49h%2BI8tAtJgZ%2FAa9O7P%2Bo0xatqsqr%2FYWcxn6l53SoTY4FxjX%2Fk%2BPAOXtqYc9MRTAXhqMwOhkWudt7yQByCBMlWGgh7LONcUJcwtP94Qbakn1Toa1HA59%2BaueD43YrVYcQEqNpDPURNAB8uCRwv%2FzV&X-Amz-Signature=17b9ba8dc574a713cdebe495bc4b649179783bd75b79349c2acfbbd2455a4e07&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUO55MOU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDUXg5dLJbvW1joCFW0j3M5dPGzF65tHg9J3lcDHmAQ%2BAIgYfHOqcHsT9u8i1JE2AKD0Rfu3c05c73m0SSI9L%2Bb6d8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLOcanC4iBJPOcPunircA5lTYx24q%2Fl3NbzOn5mQqMtDMTbakexYHIRdj%2FYL1%2BI39S9%2B6EkioVi1xyc1Gxf%2Bnr%2Fjtfv0tbPrdKeYG7Tnmin8oybZ6ZEKfdg3T%2FgKmdFnIoKorNI714Ek5CU%2FvNPetNxRxa4eVkni3o9LIy2n35QBK2HncyGu2bN%2Bix6JtExkCqM4DSjybuS6tOk%2F4YW40Pnr3CExZ9h09GcHELbBzY7ckr4CYbJ1lNGd008xLWmqbvSZWHnDVBIiJAck%2BpXtvVOr%2BeFmrmGxV3fBa8QyScLTtaZiKkSJ38j7V%2B414JM%2Fsnn12hK2cvSV9B4XDsP5rsooRVIqhu8KwHD1Acwy88vyU9pG8vdYJ2XSAsoOpk4vt%2FG1IO%2BkHkrayCSqXu0vvjGRKXDDv%2FXE07kD8%2BOBNWrct18sFPSThx1L6elI1u4ywQc3NKFZRo1zTRmUbq0uY3jNU1OG7wk2NIFd1XL2kpajwvYEYZoclbequvHtdCdVBduQ0OOUnbvbbEOjnW%2B2vB23SNseOA3gXg%2BgFClmj5mYxzVEccBx0lmWUnjJ%2BrvDN5POQeZ26kBcYB263wPBocDiR6IlDsmvk%2B4X7aZRD73zfV7NVCrtGDn92%2Bupd0yOh7yeXQwEGMgO3lyUMMPYh8IGOqUB5jDkOxPyk4uveKWkeBPp1Zys2q4IzswC%2F67mR5IKpLoMU6py%2FmXX4sGVT7WOut6Bdo%2FmcU%2F49h%2BI8tAtJgZ%2FAa9O7P%2Bo0xatqsqr%2FYWcxn6l53SoTY4FxjX%2Fk%2BPAOXtqYc9MRTAXhqMwOhkWudt7yQByCBMlWGgh7LONcUJcwtP94Qbakn1Toa1HA59%2BaueD43YrVYcQEqNpDPURNAB8uCRwv%2FzV&X-Amz-Signature=40b4a3106ecaf6fed01330497d1ce9c67642dfc13e5e6ad861520a2a6578c786&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUO55MOU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDUXg5dLJbvW1joCFW0j3M5dPGzF65tHg9J3lcDHmAQ%2BAIgYfHOqcHsT9u8i1JE2AKD0Rfu3c05c73m0SSI9L%2Bb6d8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLOcanC4iBJPOcPunircA5lTYx24q%2Fl3NbzOn5mQqMtDMTbakexYHIRdj%2FYL1%2BI39S9%2B6EkioVi1xyc1Gxf%2Bnr%2Fjtfv0tbPrdKeYG7Tnmin8oybZ6ZEKfdg3T%2FgKmdFnIoKorNI714Ek5CU%2FvNPetNxRxa4eVkni3o9LIy2n35QBK2HncyGu2bN%2Bix6JtExkCqM4DSjybuS6tOk%2F4YW40Pnr3CExZ9h09GcHELbBzY7ckr4CYbJ1lNGd008xLWmqbvSZWHnDVBIiJAck%2BpXtvVOr%2BeFmrmGxV3fBa8QyScLTtaZiKkSJ38j7V%2B414JM%2Fsnn12hK2cvSV9B4XDsP5rsooRVIqhu8KwHD1Acwy88vyU9pG8vdYJ2XSAsoOpk4vt%2FG1IO%2BkHkrayCSqXu0vvjGRKXDDv%2FXE07kD8%2BOBNWrct18sFPSThx1L6elI1u4ywQc3NKFZRo1zTRmUbq0uY3jNU1OG7wk2NIFd1XL2kpajwvYEYZoclbequvHtdCdVBduQ0OOUnbvbbEOjnW%2B2vB23SNseOA3gXg%2BgFClmj5mYxzVEccBx0lmWUnjJ%2BrvDN5POQeZ26kBcYB263wPBocDiR6IlDsmvk%2B4X7aZRD73zfV7NVCrtGDn92%2Bupd0yOh7yeXQwEGMgO3lyUMMPYh8IGOqUB5jDkOxPyk4uveKWkeBPp1Zys2q4IzswC%2F67mR5IKpLoMU6py%2FmXX4sGVT7WOut6Bdo%2FmcU%2F49h%2BI8tAtJgZ%2FAa9O7P%2Bo0xatqsqr%2FYWcxn6l53SoTY4FxjX%2Fk%2BPAOXtqYc9MRTAXhqMwOhkWudt7yQByCBMlWGgh7LONcUJcwtP94Qbakn1Toa1HA59%2BaueD43YrVYcQEqNpDPURNAB8uCRwv%2FzV&X-Amz-Signature=eb75f62e620400942aa9ffe514e66297054ca78faed4fbaa4a1574fef0102f17&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPNBVC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCv%2BghdS%2B4%2FZ%2FqkU6qdoHUVO%2FJghTPa%2BrqNz1PaWI49MwIhAJ6cxzv6Y3xaHyU0JWJ6Go%2B2xhvqRjqvaA5JdoQNlDjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igy4uV9a4X7u2ykh%2Bmcq3AM5DFY6Tlwgh9zEqfJpggWn8Ty62Sb%2B9SRevJloCkuKDXXjcyh2vZHmEZ115RgLfl0C2Bv6NJv%2BOzLA%2BY%2FSthRIBkx%2B7F7gBocQz1TA7FmXH5K0EyZwu2fcaGsT%2Ful6AMBIqjvCg8Ljl0GE%2BsUprs68piDmT%2BSjrUC7YCjOIcFXF5A72rPQi2bDbR93vydtbCPwSGmcIbs7FLd6vi1nREV9EsFeXHJAWdpd84d4uo0hf8tUMjJ0XqhV%2B%2BHEULN%2BNcNsIOXRFZZ2moF5lsvC7H2rB8KGyfDhTjM4s1GklIV403xwUy%2BHUu5QmBruIdPvVCkWTFbrfCtLRG1CDy5ORv3SvQYfhnIqbOFM97mSv3eIu6qc%2FOyBlxxMEIkbGVVJSDY5aB8XggJ1MIHbLVlqQlHt6Z0%2BD4Idhtg0EHy6qkxSGNXO7dgAy2An96sKzDkk6m6mWzUKvR5sZnFQJPfdOveV56Qfy6%2FTMcykCnqO%2Fw2xBsNQ56fM8Zo1SNQuy69S%2BGN4RTBpYI6XH3igIbNHhac2wCRRXflVmJGjqsvS5Qh%2BxVhEYK9U4b8ebNSsfv8XlJ3I8ntwJ0H6fPDsmjtYrB8dOIewkdgwhn5LYrMMVNQknMSyIJmRp%2FHbEBCwqTCxrKPDBjqkAZ1y%2BhvrsBuIqoo%2BQ69uwfZMESS32BYkCsppSZ7AcmPLfYZbifSuh0QC73u8tzD9pwplgHHCMWwC4QKyYIN5Yfwb3V%2BJgxldHHEw%2BfmqY8GsV%2FHJYbd2QJX7LRDDrMOAB0xrI4XCpSlRo3pcdETVBoxz4Zu7G%2Fb4yEMplJFxPh93uN5dU3GbQKyRTWfMuuIppDpKotl7vL%2B6u2Zxm08i8yO%2BV0hc&X-Amz-Signature=5579f8ec39c0c4040473f9c745eb7ee43d47b3cbe93a36d4aadd263239ad3df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPNBVC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCv%2BghdS%2B4%2FZ%2FqkU6qdoHUVO%2FJghTPa%2BrqNz1PaWI49MwIhAJ6cxzv6Y3xaHyU0JWJ6Go%2B2xhvqRjqvaA5JdoQNlDjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igy4uV9a4X7u2ykh%2Bmcq3AM5DFY6Tlwgh9zEqfJpggWn8Ty62Sb%2B9SRevJloCkuKDXXjcyh2vZHmEZ115RgLfl0C2Bv6NJv%2BOzLA%2BY%2FSthRIBkx%2B7F7gBocQz1TA7FmXH5K0EyZwu2fcaGsT%2Ful6AMBIqjvCg8Ljl0GE%2BsUprs68piDmT%2BSjrUC7YCjOIcFXF5A72rPQi2bDbR93vydtbCPwSGmcIbs7FLd6vi1nREV9EsFeXHJAWdpd84d4uo0hf8tUMjJ0XqhV%2B%2BHEULN%2BNcNsIOXRFZZ2moF5lsvC7H2rB8KGyfDhTjM4s1GklIV403xwUy%2BHUu5QmBruIdPvVCkWTFbrfCtLRG1CDy5ORv3SvQYfhnIqbOFM97mSv3eIu6qc%2FOyBlxxMEIkbGVVJSDY5aB8XggJ1MIHbLVlqQlHt6Z0%2BD4Idhtg0EHy6qkxSGNXO7dgAy2An96sKzDkk6m6mWzUKvR5sZnFQJPfdOveV56Qfy6%2FTMcykCnqO%2Fw2xBsNQ56fM8Zo1SNQuy69S%2BGN4RTBpYI6XH3igIbNHhac2wCRRXflVmJGjqsvS5Qh%2BxVhEYK9U4b8ebNSsfv8XlJ3I8ntwJ0H6fPDsmjtYrB8dOIewkdgwhn5LYrMMVNQknMSyIJmRp%2FHbEBCwqTCxrKPDBjqkAZ1y%2BhvrsBuIqoo%2BQ69uwfZMESS32BYkCsppSZ7AcmPLfYZbifSuh0QC73u8tzD9pwplgHHCMWwC4QKyYIN5Yfwb3V%2BJgxldHHEw%2BfmqY8GsV%2FHJYbd2QJX7LRDDrMOAB0xrI4XCpSlRo3pcdETVBoxz4Zu7G%2Fb4yEMplJFxPh93uN5dU3GbQKyRTWfMuuIppDpKotl7vL%2B6u2Zxm08i8yO%2BV0hc&X-Amz-Signature=2b1fb4cd87ed3ae81630b4e1e3e685189768920096c9f5b1c30fc1a3279797db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPNBVC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCv%2BghdS%2B4%2FZ%2FqkU6qdoHUVO%2FJghTPa%2BrqNz1PaWI49MwIhAJ6cxzv6Y3xaHyU0JWJ6Go%2B2xhvqRjqvaA5JdoQNlDjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igy4uV9a4X7u2ykh%2Bmcq3AM5DFY6Tlwgh9zEqfJpggWn8Ty62Sb%2B9SRevJloCkuKDXXjcyh2vZHmEZ115RgLfl0C2Bv6NJv%2BOzLA%2BY%2FSthRIBkx%2B7F7gBocQz1TA7FmXH5K0EyZwu2fcaGsT%2Ful6AMBIqjvCg8Ljl0GE%2BsUprs68piDmT%2BSjrUC7YCjOIcFXF5A72rPQi2bDbR93vydtbCPwSGmcIbs7FLd6vi1nREV9EsFeXHJAWdpd84d4uo0hf8tUMjJ0XqhV%2B%2BHEULN%2BNcNsIOXRFZZ2moF5lsvC7H2rB8KGyfDhTjM4s1GklIV403xwUy%2BHUu5QmBruIdPvVCkWTFbrfCtLRG1CDy5ORv3SvQYfhnIqbOFM97mSv3eIu6qc%2FOyBlxxMEIkbGVVJSDY5aB8XggJ1MIHbLVlqQlHt6Z0%2BD4Idhtg0EHy6qkxSGNXO7dgAy2An96sKzDkk6m6mWzUKvR5sZnFQJPfdOveV56Qfy6%2FTMcykCnqO%2Fw2xBsNQ56fM8Zo1SNQuy69S%2BGN4RTBpYI6XH3igIbNHhac2wCRRXflVmJGjqsvS5Qh%2BxVhEYK9U4b8ebNSsfv8XlJ3I8ntwJ0H6fPDsmjtYrB8dOIewkdgwhn5LYrMMVNQknMSyIJmRp%2FHbEBCwqTCxrKPDBjqkAZ1y%2BhvrsBuIqoo%2BQ69uwfZMESS32BYkCsppSZ7AcmPLfYZbifSuh0QC73u8tzD9pwplgHHCMWwC4QKyYIN5Yfwb3V%2BJgxldHHEw%2BfmqY8GsV%2FHJYbd2QJX7LRDDrMOAB0xrI4XCpSlRo3pcdETVBoxz4Zu7G%2Fb4yEMplJFxPh93uN5dU3GbQKyRTWfMuuIppDpKotl7vL%2B6u2Zxm08i8yO%2BV0hc&X-Amz-Signature=a8c4d716d25281d427e09edc11468de6d699efc3a0194ba1d15f4e63b912cf0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPNBVC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCv%2BghdS%2B4%2FZ%2FqkU6qdoHUVO%2FJghTPa%2BrqNz1PaWI49MwIhAJ6cxzv6Y3xaHyU0JWJ6Go%2B2xhvqRjqvaA5JdoQNlDjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igy4uV9a4X7u2ykh%2Bmcq3AM5DFY6Tlwgh9zEqfJpggWn8Ty62Sb%2B9SRevJloCkuKDXXjcyh2vZHmEZ115RgLfl0C2Bv6NJv%2BOzLA%2BY%2FSthRIBkx%2B7F7gBocQz1TA7FmXH5K0EyZwu2fcaGsT%2Ful6AMBIqjvCg8Ljl0GE%2BsUprs68piDmT%2BSjrUC7YCjOIcFXF5A72rPQi2bDbR93vydtbCPwSGmcIbs7FLd6vi1nREV9EsFeXHJAWdpd84d4uo0hf8tUMjJ0XqhV%2B%2BHEULN%2BNcNsIOXRFZZ2moF5lsvC7H2rB8KGyfDhTjM4s1GklIV403xwUy%2BHUu5QmBruIdPvVCkWTFbrfCtLRG1CDy5ORv3SvQYfhnIqbOFM97mSv3eIu6qc%2FOyBlxxMEIkbGVVJSDY5aB8XggJ1MIHbLVlqQlHt6Z0%2BD4Idhtg0EHy6qkxSGNXO7dgAy2An96sKzDkk6m6mWzUKvR5sZnFQJPfdOveV56Qfy6%2FTMcykCnqO%2Fw2xBsNQ56fM8Zo1SNQuy69S%2BGN4RTBpYI6XH3igIbNHhac2wCRRXflVmJGjqsvS5Qh%2BxVhEYK9U4b8ebNSsfv8XlJ3I8ntwJ0H6fPDsmjtYrB8dOIewkdgwhn5LYrMMVNQknMSyIJmRp%2FHbEBCwqTCxrKPDBjqkAZ1y%2BhvrsBuIqoo%2BQ69uwfZMESS32BYkCsppSZ7AcmPLfYZbifSuh0QC73u8tzD9pwplgHHCMWwC4QKyYIN5Yfwb3V%2BJgxldHHEw%2BfmqY8GsV%2FHJYbd2QJX7LRDDrMOAB0xrI4XCpSlRo3pcdETVBoxz4Zu7G%2Fb4yEMplJFxPh93uN5dU3GbQKyRTWfMuuIppDpKotl7vL%2B6u2Zxm08i8yO%2BV0hc&X-Amz-Signature=0d3aa2adab685f2c50886e88fde7fedade5e244bed0682fbe90f1cb96f4e7268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPNBVC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCv%2BghdS%2B4%2FZ%2FqkU6qdoHUVO%2FJghTPa%2BrqNz1PaWI49MwIhAJ6cxzv6Y3xaHyU0JWJ6Go%2B2xhvqRjqvaA5JdoQNlDjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igy4uV9a4X7u2ykh%2Bmcq3AM5DFY6Tlwgh9zEqfJpggWn8Ty62Sb%2B9SRevJloCkuKDXXjcyh2vZHmEZ115RgLfl0C2Bv6NJv%2BOzLA%2BY%2FSthRIBkx%2B7F7gBocQz1TA7FmXH5K0EyZwu2fcaGsT%2Ful6AMBIqjvCg8Ljl0GE%2BsUprs68piDmT%2BSjrUC7YCjOIcFXF5A72rPQi2bDbR93vydtbCPwSGmcIbs7FLd6vi1nREV9EsFeXHJAWdpd84d4uo0hf8tUMjJ0XqhV%2B%2BHEULN%2BNcNsIOXRFZZ2moF5lsvC7H2rB8KGyfDhTjM4s1GklIV403xwUy%2BHUu5QmBruIdPvVCkWTFbrfCtLRG1CDy5ORv3SvQYfhnIqbOFM97mSv3eIu6qc%2FOyBlxxMEIkbGVVJSDY5aB8XggJ1MIHbLVlqQlHt6Z0%2BD4Idhtg0EHy6qkxSGNXO7dgAy2An96sKzDkk6m6mWzUKvR5sZnFQJPfdOveV56Qfy6%2FTMcykCnqO%2Fw2xBsNQ56fM8Zo1SNQuy69S%2BGN4RTBpYI6XH3igIbNHhac2wCRRXflVmJGjqsvS5Qh%2BxVhEYK9U4b8ebNSsfv8XlJ3I8ntwJ0H6fPDsmjtYrB8dOIewkdgwhn5LYrMMVNQknMSyIJmRp%2FHbEBCwqTCxrKPDBjqkAZ1y%2BhvrsBuIqoo%2BQ69uwfZMESS32BYkCsppSZ7AcmPLfYZbifSuh0QC73u8tzD9pwplgHHCMWwC4QKyYIN5Yfwb3V%2BJgxldHHEw%2BfmqY8GsV%2FHJYbd2QJX7LRDDrMOAB0xrI4XCpSlRo3pcdETVBoxz4Zu7G%2Fb4yEMplJFxPh93uN5dU3GbQKyRTWfMuuIppDpKotl7vL%2B6u2Zxm08i8yO%2BV0hc&X-Amz-Signature=ede399f29129761e6ddc260851e408e44733fcb07f064cf6c15cf42bc19b069b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPNBVC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCv%2BghdS%2B4%2FZ%2FqkU6qdoHUVO%2FJghTPa%2BrqNz1PaWI49MwIhAJ6cxzv6Y3xaHyU0JWJ6Go%2B2xhvqRjqvaA5JdoQNlDjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igy4uV9a4X7u2ykh%2Bmcq3AM5DFY6Tlwgh9zEqfJpggWn8Ty62Sb%2B9SRevJloCkuKDXXjcyh2vZHmEZ115RgLfl0C2Bv6NJv%2BOzLA%2BY%2FSthRIBkx%2B7F7gBocQz1TA7FmXH5K0EyZwu2fcaGsT%2Ful6AMBIqjvCg8Ljl0GE%2BsUprs68piDmT%2BSjrUC7YCjOIcFXF5A72rPQi2bDbR93vydtbCPwSGmcIbs7FLd6vi1nREV9EsFeXHJAWdpd84d4uo0hf8tUMjJ0XqhV%2B%2BHEULN%2BNcNsIOXRFZZ2moF5lsvC7H2rB8KGyfDhTjM4s1GklIV403xwUy%2BHUu5QmBruIdPvVCkWTFbrfCtLRG1CDy5ORv3SvQYfhnIqbOFM97mSv3eIu6qc%2FOyBlxxMEIkbGVVJSDY5aB8XggJ1MIHbLVlqQlHt6Z0%2BD4Idhtg0EHy6qkxSGNXO7dgAy2An96sKzDkk6m6mWzUKvR5sZnFQJPfdOveV56Qfy6%2FTMcykCnqO%2Fw2xBsNQ56fM8Zo1SNQuy69S%2BGN4RTBpYI6XH3igIbNHhac2wCRRXflVmJGjqsvS5Qh%2BxVhEYK9U4b8ebNSsfv8XlJ3I8ntwJ0H6fPDsmjtYrB8dOIewkdgwhn5LYrMMVNQknMSyIJmRp%2FHbEBCwqTCxrKPDBjqkAZ1y%2BhvrsBuIqoo%2BQ69uwfZMESS32BYkCsppSZ7AcmPLfYZbifSuh0QC73u8tzD9pwplgHHCMWwC4QKyYIN5Yfwb3V%2BJgxldHHEw%2BfmqY8GsV%2FHJYbd2QJX7LRDDrMOAB0xrI4XCpSlRo3pcdETVBoxz4Zu7G%2Fb4yEMplJFxPh93uN5dU3GbQKyRTWfMuuIppDpKotl7vL%2B6u2Zxm08i8yO%2BV0hc&X-Amz-Signature=fb1502b448423654bb9d55814ad6d9ba84db7269c2893c3c10576e029cd5aa4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPNBVC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCv%2BghdS%2B4%2FZ%2FqkU6qdoHUVO%2FJghTPa%2BrqNz1PaWI49MwIhAJ6cxzv6Y3xaHyU0JWJ6Go%2B2xhvqRjqvaA5JdoQNlDjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igy4uV9a4X7u2ykh%2Bmcq3AM5DFY6Tlwgh9zEqfJpggWn8Ty62Sb%2B9SRevJloCkuKDXXjcyh2vZHmEZ115RgLfl0C2Bv6NJv%2BOzLA%2BY%2FSthRIBkx%2B7F7gBocQz1TA7FmXH5K0EyZwu2fcaGsT%2Ful6AMBIqjvCg8Ljl0GE%2BsUprs68piDmT%2BSjrUC7YCjOIcFXF5A72rPQi2bDbR93vydtbCPwSGmcIbs7FLd6vi1nREV9EsFeXHJAWdpd84d4uo0hf8tUMjJ0XqhV%2B%2BHEULN%2BNcNsIOXRFZZ2moF5lsvC7H2rB8KGyfDhTjM4s1GklIV403xwUy%2BHUu5QmBruIdPvVCkWTFbrfCtLRG1CDy5ORv3SvQYfhnIqbOFM97mSv3eIu6qc%2FOyBlxxMEIkbGVVJSDY5aB8XggJ1MIHbLVlqQlHt6Z0%2BD4Idhtg0EHy6qkxSGNXO7dgAy2An96sKzDkk6m6mWzUKvR5sZnFQJPfdOveV56Qfy6%2FTMcykCnqO%2Fw2xBsNQ56fM8Zo1SNQuy69S%2BGN4RTBpYI6XH3igIbNHhac2wCRRXflVmJGjqsvS5Qh%2BxVhEYK9U4b8ebNSsfv8XlJ3I8ntwJ0H6fPDsmjtYrB8dOIewkdgwhn5LYrMMVNQknMSyIJmRp%2FHbEBCwqTCxrKPDBjqkAZ1y%2BhvrsBuIqoo%2BQ69uwfZMESS32BYkCsppSZ7AcmPLfYZbifSuh0QC73u8tzD9pwplgHHCMWwC4QKyYIN5Yfwb3V%2BJgxldHHEw%2BfmqY8GsV%2FHJYbd2QJX7LRDDrMOAB0xrI4XCpSlRo3pcdETVBoxz4Zu7G%2Fb4yEMplJFxPh93uN5dU3GbQKyRTWfMuuIppDpKotl7vL%2B6u2Zxm08i8yO%2BV0hc&X-Amz-Signature=b571a6229ec439fee90c2e9b08295e622e7cb5fd27df929a362ed1c544eb0ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

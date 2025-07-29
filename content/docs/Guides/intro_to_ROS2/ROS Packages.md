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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XN3OZH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLYKW7mFm6GLdu9RgD02gXR949bOH7d%2FqshYMxsyRHdAIhAKPEwwPOUPyaE0otAV18CoxbS0d2E4EjjgoQFKvrBtksKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwCc9bD1uObb6cBdIq3AN6yrFqklFZJI1v%2B556sFDB8KhARo93zzpf03gM14ZyeG%2B9xsbucqGGV2kv1MLULOTXVFhb%2BGosSR6JYDoWKyDM4jrrKQMyW65KlxRG414wnhIsndW%2BsetjqM06962iAj6oiC6f%2BXjW%2F%2Bbb8AtpcCjZplE5G%2FSxsPSU2DFRR9BxjKEf6gGiS7b6nOTp3DC6dPSfPtlMiaBLPKXLI4VPf%2Bl6voVWRAL0Gr7aX7xOj5OjSHHAHQKhBaT%2BBjk1rGnJ8CzZASZY1Nv8wEF7H0NtFvw7921idUum1WufLhHUJPNuNEDRGzx0omsReVwhP7Df%2FQNt3PKZ0mareY%2F6T1gwhKMj2KzlLGt7bc5VgCcL6VFhAOtZsV5tYYzHzRC5YT2Fku3X01RAA48jH8%2Fil01H4J2pgHRq5SF4IpKRMJmzF00eI%2BfB4sN7XVJJQ%2BfUOLC97bjPzDGCas%2BvtNqyQp9VVDEOqxordPvWw9ZXm9p%2Bs5DxSRcNGnrkXTUhvmzhPptrtaGWMs4hY%2FgHT%2B9c1vjSRjH0tQeLdCc%2Fp8F3W38I2%2FU095UFY7GY4mQroHbj4njY18Y0hwi5bd9PtNFj%2BjjRD38r0zwnKpGoj7EUhzHKI1jkHISd%2FeaKwKIqyO3O9TCHrqTEBjqkAdT2n%2BH6BPNw7c5r8mdFJt56CGAecRj1CNbotmE8MabT1Qr8%2F8lpGJjghErsDaTetVa9mwIEF8UrjFeEtmf2cGFwF7xcTrLHBzhpHJPk6ZD0FayxGoEGWG5L%2F%2FmN8J6rvTfoV1qUIh%2BVCz7XTmVRSh%2B36dIkwUcoXfxDO54jIk4wNPppm2UirAN8zoTq6uNczFY2s7f%2BBAIHn02ycnEatvQNY1vs&X-Amz-Signature=e34fee3dc4e1b4c3c14a32ea18923d4581dc63564380d208ec291e35f6c62c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XN3OZH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLYKW7mFm6GLdu9RgD02gXR949bOH7d%2FqshYMxsyRHdAIhAKPEwwPOUPyaE0otAV18CoxbS0d2E4EjjgoQFKvrBtksKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwCc9bD1uObb6cBdIq3AN6yrFqklFZJI1v%2B556sFDB8KhARo93zzpf03gM14ZyeG%2B9xsbucqGGV2kv1MLULOTXVFhb%2BGosSR6JYDoWKyDM4jrrKQMyW65KlxRG414wnhIsndW%2BsetjqM06962iAj6oiC6f%2BXjW%2F%2Bbb8AtpcCjZplE5G%2FSxsPSU2DFRR9BxjKEf6gGiS7b6nOTp3DC6dPSfPtlMiaBLPKXLI4VPf%2Bl6voVWRAL0Gr7aX7xOj5OjSHHAHQKhBaT%2BBjk1rGnJ8CzZASZY1Nv8wEF7H0NtFvw7921idUum1WufLhHUJPNuNEDRGzx0omsReVwhP7Df%2FQNt3PKZ0mareY%2F6T1gwhKMj2KzlLGt7bc5VgCcL6VFhAOtZsV5tYYzHzRC5YT2Fku3X01RAA48jH8%2Fil01H4J2pgHRq5SF4IpKRMJmzF00eI%2BfB4sN7XVJJQ%2BfUOLC97bjPzDGCas%2BvtNqyQp9VVDEOqxordPvWw9ZXm9p%2Bs5DxSRcNGnrkXTUhvmzhPptrtaGWMs4hY%2FgHT%2B9c1vjSRjH0tQeLdCc%2Fp8F3W38I2%2FU095UFY7GY4mQroHbj4njY18Y0hwi5bd9PtNFj%2BjjRD38r0zwnKpGoj7EUhzHKI1jkHISd%2FeaKwKIqyO3O9TCHrqTEBjqkAdT2n%2BH6BPNw7c5r8mdFJt56CGAecRj1CNbotmE8MabT1Qr8%2F8lpGJjghErsDaTetVa9mwIEF8UrjFeEtmf2cGFwF7xcTrLHBzhpHJPk6ZD0FayxGoEGWG5L%2F%2FmN8J6rvTfoV1qUIh%2BVCz7XTmVRSh%2B36dIkwUcoXfxDO54jIk4wNPppm2UirAN8zoTq6uNczFY2s7f%2BBAIHn02ycnEatvQNY1vs&X-Amz-Signature=ed63feccc9aa1182a07d2ac8d9a3c898122b0c6be6ca3ea3d7ba0168ddd6bbba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XN3OZH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLYKW7mFm6GLdu9RgD02gXR949bOH7d%2FqshYMxsyRHdAIhAKPEwwPOUPyaE0otAV18CoxbS0d2E4EjjgoQFKvrBtksKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwCc9bD1uObb6cBdIq3AN6yrFqklFZJI1v%2B556sFDB8KhARo93zzpf03gM14ZyeG%2B9xsbucqGGV2kv1MLULOTXVFhb%2BGosSR6JYDoWKyDM4jrrKQMyW65KlxRG414wnhIsndW%2BsetjqM06962iAj6oiC6f%2BXjW%2F%2Bbb8AtpcCjZplE5G%2FSxsPSU2DFRR9BxjKEf6gGiS7b6nOTp3DC6dPSfPtlMiaBLPKXLI4VPf%2Bl6voVWRAL0Gr7aX7xOj5OjSHHAHQKhBaT%2BBjk1rGnJ8CzZASZY1Nv8wEF7H0NtFvw7921idUum1WufLhHUJPNuNEDRGzx0omsReVwhP7Df%2FQNt3PKZ0mareY%2F6T1gwhKMj2KzlLGt7bc5VgCcL6VFhAOtZsV5tYYzHzRC5YT2Fku3X01RAA48jH8%2Fil01H4J2pgHRq5SF4IpKRMJmzF00eI%2BfB4sN7XVJJQ%2BfUOLC97bjPzDGCas%2BvtNqyQp9VVDEOqxordPvWw9ZXm9p%2Bs5DxSRcNGnrkXTUhvmzhPptrtaGWMs4hY%2FgHT%2B9c1vjSRjH0tQeLdCc%2Fp8F3W38I2%2FU095UFY7GY4mQroHbj4njY18Y0hwi5bd9PtNFj%2BjjRD38r0zwnKpGoj7EUhzHKI1jkHISd%2FeaKwKIqyO3O9TCHrqTEBjqkAdT2n%2BH6BPNw7c5r8mdFJt56CGAecRj1CNbotmE8MabT1Qr8%2F8lpGJjghErsDaTetVa9mwIEF8UrjFeEtmf2cGFwF7xcTrLHBzhpHJPk6ZD0FayxGoEGWG5L%2F%2FmN8J6rvTfoV1qUIh%2BVCz7XTmVRSh%2B36dIkwUcoXfxDO54jIk4wNPppm2UirAN8zoTq6uNczFY2s7f%2BBAIHn02ycnEatvQNY1vs&X-Amz-Signature=ed4b77f524b2ce2d08e413b72bb79fdd4f55d1659931f03ad046214c3a74da7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XN3OZH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLYKW7mFm6GLdu9RgD02gXR949bOH7d%2FqshYMxsyRHdAIhAKPEwwPOUPyaE0otAV18CoxbS0d2E4EjjgoQFKvrBtksKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwCc9bD1uObb6cBdIq3AN6yrFqklFZJI1v%2B556sFDB8KhARo93zzpf03gM14ZyeG%2B9xsbucqGGV2kv1MLULOTXVFhb%2BGosSR6JYDoWKyDM4jrrKQMyW65KlxRG414wnhIsndW%2BsetjqM06962iAj6oiC6f%2BXjW%2F%2Bbb8AtpcCjZplE5G%2FSxsPSU2DFRR9BxjKEf6gGiS7b6nOTp3DC6dPSfPtlMiaBLPKXLI4VPf%2Bl6voVWRAL0Gr7aX7xOj5OjSHHAHQKhBaT%2BBjk1rGnJ8CzZASZY1Nv8wEF7H0NtFvw7921idUum1WufLhHUJPNuNEDRGzx0omsReVwhP7Df%2FQNt3PKZ0mareY%2F6T1gwhKMj2KzlLGt7bc5VgCcL6VFhAOtZsV5tYYzHzRC5YT2Fku3X01RAA48jH8%2Fil01H4J2pgHRq5SF4IpKRMJmzF00eI%2BfB4sN7XVJJQ%2BfUOLC97bjPzDGCas%2BvtNqyQp9VVDEOqxordPvWw9ZXm9p%2Bs5DxSRcNGnrkXTUhvmzhPptrtaGWMs4hY%2FgHT%2B9c1vjSRjH0tQeLdCc%2Fp8F3W38I2%2FU095UFY7GY4mQroHbj4njY18Y0hwi5bd9PtNFj%2BjjRD38r0zwnKpGoj7EUhzHKI1jkHISd%2FeaKwKIqyO3O9TCHrqTEBjqkAdT2n%2BH6BPNw7c5r8mdFJt56CGAecRj1CNbotmE8MabT1Qr8%2F8lpGJjghErsDaTetVa9mwIEF8UrjFeEtmf2cGFwF7xcTrLHBzhpHJPk6ZD0FayxGoEGWG5L%2F%2FmN8J6rvTfoV1qUIh%2BVCz7XTmVRSh%2B36dIkwUcoXfxDO54jIk4wNPppm2UirAN8zoTq6uNczFY2s7f%2BBAIHn02ycnEatvQNY1vs&X-Amz-Signature=230d3d3b984014e3d4f2e14f804d0165c0ca30a49eccaf9ee5284fd4d01fe74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XN3OZH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLYKW7mFm6GLdu9RgD02gXR949bOH7d%2FqshYMxsyRHdAIhAKPEwwPOUPyaE0otAV18CoxbS0d2E4EjjgoQFKvrBtksKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwCc9bD1uObb6cBdIq3AN6yrFqklFZJI1v%2B556sFDB8KhARo93zzpf03gM14ZyeG%2B9xsbucqGGV2kv1MLULOTXVFhb%2BGosSR6JYDoWKyDM4jrrKQMyW65KlxRG414wnhIsndW%2BsetjqM06962iAj6oiC6f%2BXjW%2F%2Bbb8AtpcCjZplE5G%2FSxsPSU2DFRR9BxjKEf6gGiS7b6nOTp3DC6dPSfPtlMiaBLPKXLI4VPf%2Bl6voVWRAL0Gr7aX7xOj5OjSHHAHQKhBaT%2BBjk1rGnJ8CzZASZY1Nv8wEF7H0NtFvw7921idUum1WufLhHUJPNuNEDRGzx0omsReVwhP7Df%2FQNt3PKZ0mareY%2F6T1gwhKMj2KzlLGt7bc5VgCcL6VFhAOtZsV5tYYzHzRC5YT2Fku3X01RAA48jH8%2Fil01H4J2pgHRq5SF4IpKRMJmzF00eI%2BfB4sN7XVJJQ%2BfUOLC97bjPzDGCas%2BvtNqyQp9VVDEOqxordPvWw9ZXm9p%2Bs5DxSRcNGnrkXTUhvmzhPptrtaGWMs4hY%2FgHT%2B9c1vjSRjH0tQeLdCc%2Fp8F3W38I2%2FU095UFY7GY4mQroHbj4njY18Y0hwi5bd9PtNFj%2BjjRD38r0zwnKpGoj7EUhzHKI1jkHISd%2FeaKwKIqyO3O9TCHrqTEBjqkAdT2n%2BH6BPNw7c5r8mdFJt56CGAecRj1CNbotmE8MabT1Qr8%2F8lpGJjghErsDaTetVa9mwIEF8UrjFeEtmf2cGFwF7xcTrLHBzhpHJPk6ZD0FayxGoEGWG5L%2F%2FmN8J6rvTfoV1qUIh%2BVCz7XTmVRSh%2B36dIkwUcoXfxDO54jIk4wNPppm2UirAN8zoTq6uNczFY2s7f%2BBAIHn02ycnEatvQNY1vs&X-Amz-Signature=7eaa034af64a54420696f61cd4925a684ad5e5f88c6168cfb0ffac6ba90e44bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XN3OZH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLYKW7mFm6GLdu9RgD02gXR949bOH7d%2FqshYMxsyRHdAIhAKPEwwPOUPyaE0otAV18CoxbS0d2E4EjjgoQFKvrBtksKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwCc9bD1uObb6cBdIq3AN6yrFqklFZJI1v%2B556sFDB8KhARo93zzpf03gM14ZyeG%2B9xsbucqGGV2kv1MLULOTXVFhb%2BGosSR6JYDoWKyDM4jrrKQMyW65KlxRG414wnhIsndW%2BsetjqM06962iAj6oiC6f%2BXjW%2F%2Bbb8AtpcCjZplE5G%2FSxsPSU2DFRR9BxjKEf6gGiS7b6nOTp3DC6dPSfPtlMiaBLPKXLI4VPf%2Bl6voVWRAL0Gr7aX7xOj5OjSHHAHQKhBaT%2BBjk1rGnJ8CzZASZY1Nv8wEF7H0NtFvw7921idUum1WufLhHUJPNuNEDRGzx0omsReVwhP7Df%2FQNt3PKZ0mareY%2F6T1gwhKMj2KzlLGt7bc5VgCcL6VFhAOtZsV5tYYzHzRC5YT2Fku3X01RAA48jH8%2Fil01H4J2pgHRq5SF4IpKRMJmzF00eI%2BfB4sN7XVJJQ%2BfUOLC97bjPzDGCas%2BvtNqyQp9VVDEOqxordPvWw9ZXm9p%2Bs5DxSRcNGnrkXTUhvmzhPptrtaGWMs4hY%2FgHT%2B9c1vjSRjH0tQeLdCc%2Fp8F3W38I2%2FU095UFY7GY4mQroHbj4njY18Y0hwi5bd9PtNFj%2BjjRD38r0zwnKpGoj7EUhzHKI1jkHISd%2FeaKwKIqyO3O9TCHrqTEBjqkAdT2n%2BH6BPNw7c5r8mdFJt56CGAecRj1CNbotmE8MabT1Qr8%2F8lpGJjghErsDaTetVa9mwIEF8UrjFeEtmf2cGFwF7xcTrLHBzhpHJPk6ZD0FayxGoEGWG5L%2F%2FmN8J6rvTfoV1qUIh%2BVCz7XTmVRSh%2B36dIkwUcoXfxDO54jIk4wNPppm2UirAN8zoTq6uNczFY2s7f%2BBAIHn02ycnEatvQNY1vs&X-Amz-Signature=164f6a91f87c4ba954ba0f4a7e12eba2dceb5d9e4e11756e259b5b94abb0afa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XN3OZH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLYKW7mFm6GLdu9RgD02gXR949bOH7d%2FqshYMxsyRHdAIhAKPEwwPOUPyaE0otAV18CoxbS0d2E4EjjgoQFKvrBtksKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwCc9bD1uObb6cBdIq3AN6yrFqklFZJI1v%2B556sFDB8KhARo93zzpf03gM14ZyeG%2B9xsbucqGGV2kv1MLULOTXVFhb%2BGosSR6JYDoWKyDM4jrrKQMyW65KlxRG414wnhIsndW%2BsetjqM06962iAj6oiC6f%2BXjW%2F%2Bbb8AtpcCjZplE5G%2FSxsPSU2DFRR9BxjKEf6gGiS7b6nOTp3DC6dPSfPtlMiaBLPKXLI4VPf%2Bl6voVWRAL0Gr7aX7xOj5OjSHHAHQKhBaT%2BBjk1rGnJ8CzZASZY1Nv8wEF7H0NtFvw7921idUum1WufLhHUJPNuNEDRGzx0omsReVwhP7Df%2FQNt3PKZ0mareY%2F6T1gwhKMj2KzlLGt7bc5VgCcL6VFhAOtZsV5tYYzHzRC5YT2Fku3X01RAA48jH8%2Fil01H4J2pgHRq5SF4IpKRMJmzF00eI%2BfB4sN7XVJJQ%2BfUOLC97bjPzDGCas%2BvtNqyQp9VVDEOqxordPvWw9ZXm9p%2Bs5DxSRcNGnrkXTUhvmzhPptrtaGWMs4hY%2FgHT%2B9c1vjSRjH0tQeLdCc%2Fp8F3W38I2%2FU095UFY7GY4mQroHbj4njY18Y0hwi5bd9PtNFj%2BjjRD38r0zwnKpGoj7EUhzHKI1jkHISd%2FeaKwKIqyO3O9TCHrqTEBjqkAdT2n%2BH6BPNw7c5r8mdFJt56CGAecRj1CNbotmE8MabT1Qr8%2F8lpGJjghErsDaTetVa9mwIEF8UrjFeEtmf2cGFwF7xcTrLHBzhpHJPk6ZD0FayxGoEGWG5L%2F%2FmN8J6rvTfoV1qUIh%2BVCz7XTmVRSh%2B36dIkwUcoXfxDO54jIk4wNPppm2UirAN8zoTq6uNczFY2s7f%2BBAIHn02ycnEatvQNY1vs&X-Amz-Signature=3b202d48eb2e2cd9f1d103b3b0d4c75bdfd7bc2fffe4f93b20ab9ded34c20b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

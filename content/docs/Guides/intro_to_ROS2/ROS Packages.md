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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPMSKZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC0NldpN8KoMKtEFW3SoqWltLG2ZWIwW6aYeo%2F1CcOHoQIgOcUFaZfmJi08lr3WlbuuTVmCtX5cgdpxGvawFmUllUAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDILsVi3qyvdYqBzKnCrcA%2BV4ic9XbpCAaLkHmrtMlwE9Srm7JIfV9wPCVNawDvMItNxe6C15I%2Fe3H7pXbDKoRgcRtmJCqbm8P%2FP4lxvHRQFhWE6saYcatSp23%2FdF6yawrwBaAMI2z6l3PMQTDmfQnLCmt%2F5lm48NPzJY0Ok2c1mIUS39SgnI3gILo2sPTir4ULpW8W%2FCZ4byOFg08%2BamDES8EVIPj7PW7i0Lq7xKEFyKPVkN3B40D3n5OrQD1O2FTCXuuDn1c5%2FpBsT2QwNV6HX9GtMrcgXC6l0FOhWuQkcp5oemgdahekdWo8kEe7OABFPckHthwL79LKtj4Qk445PHlSbP6GjLVfD0rrZ06MfwYFexgfPUaLdmp6b4ULXHx7A5iw8Mt01YoIou46yA2zw%2FSY%2BMEkW%2F32jpgQtEIgnznZ5vvnzoL7%2FAENKmbGz%2Bb3cZJkThCXH39xWDjbPqOdvYWYl2mf5gkPHZO7s63%2FWTQQkzaillRCM1c3dDytrIMsTphvWVR4ZxMViJUy6yzslKGhpE9MORHCcGcRZsQNABR4at8HTz4X8MoHMEgBSB%2BuAU%2Bz%2BJSuHmJTNYbWnf3zb9IOgd5LJB2LHe9AqWEpERPyhmqMmfEAJOtANA5oGt5z0X3GXoIRGz%2FHt1MLvJg8IGOqUBDFdQwgRjC5MJg2Tp7BC47VAgBTlKOgs7Zm%2FLbie%2F4XMuO6%2F0xhIOThLxz5Yr%2BUfyxVUjGc3uHm4ZgXzQsokNR0qMVVedwQbElPd52eHnr331zqJjTJWNQi6J2EHHYV2I5uC1u9xr9jcwHbVbI6jhSKPbI%2FlyC41LvGaT%2BrGX2%2BzZqRe%2FSQSClPRQ0Z0V3K2mYbhWlsHBWOA85HIM1Rlq2hgMcMbe&X-Amz-Signature=08a459b51ffa29dd380afce36436b554e8980758f1dc7026df9ad1aaf19e51b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPMSKZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC0NldpN8KoMKtEFW3SoqWltLG2ZWIwW6aYeo%2F1CcOHoQIgOcUFaZfmJi08lr3WlbuuTVmCtX5cgdpxGvawFmUllUAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDILsVi3qyvdYqBzKnCrcA%2BV4ic9XbpCAaLkHmrtMlwE9Srm7JIfV9wPCVNawDvMItNxe6C15I%2Fe3H7pXbDKoRgcRtmJCqbm8P%2FP4lxvHRQFhWE6saYcatSp23%2FdF6yawrwBaAMI2z6l3PMQTDmfQnLCmt%2F5lm48NPzJY0Ok2c1mIUS39SgnI3gILo2sPTir4ULpW8W%2FCZ4byOFg08%2BamDES8EVIPj7PW7i0Lq7xKEFyKPVkN3B40D3n5OrQD1O2FTCXuuDn1c5%2FpBsT2QwNV6HX9GtMrcgXC6l0FOhWuQkcp5oemgdahekdWo8kEe7OABFPckHthwL79LKtj4Qk445PHlSbP6GjLVfD0rrZ06MfwYFexgfPUaLdmp6b4ULXHx7A5iw8Mt01YoIou46yA2zw%2FSY%2BMEkW%2F32jpgQtEIgnznZ5vvnzoL7%2FAENKmbGz%2Bb3cZJkThCXH39xWDjbPqOdvYWYl2mf5gkPHZO7s63%2FWTQQkzaillRCM1c3dDytrIMsTphvWVR4ZxMViJUy6yzslKGhpE9MORHCcGcRZsQNABR4at8HTz4X8MoHMEgBSB%2BuAU%2Bz%2BJSuHmJTNYbWnf3zb9IOgd5LJB2LHe9AqWEpERPyhmqMmfEAJOtANA5oGt5z0X3GXoIRGz%2FHt1MLvJg8IGOqUBDFdQwgRjC5MJg2Tp7BC47VAgBTlKOgs7Zm%2FLbie%2F4XMuO6%2F0xhIOThLxz5Yr%2BUfyxVUjGc3uHm4ZgXzQsokNR0qMVVedwQbElPd52eHnr331zqJjTJWNQi6J2EHHYV2I5uC1u9xr9jcwHbVbI6jhSKPbI%2FlyC41LvGaT%2BrGX2%2BzZqRe%2FSQSClPRQ0Z0V3K2mYbhWlsHBWOA85HIM1Rlq2hgMcMbe&X-Amz-Signature=1caf06d67dfe0c2d526881d7136b3eb8f99dab51897205645ec90499f8a3ef71&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPMSKZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC0NldpN8KoMKtEFW3SoqWltLG2ZWIwW6aYeo%2F1CcOHoQIgOcUFaZfmJi08lr3WlbuuTVmCtX5cgdpxGvawFmUllUAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDILsVi3qyvdYqBzKnCrcA%2BV4ic9XbpCAaLkHmrtMlwE9Srm7JIfV9wPCVNawDvMItNxe6C15I%2Fe3H7pXbDKoRgcRtmJCqbm8P%2FP4lxvHRQFhWE6saYcatSp23%2FdF6yawrwBaAMI2z6l3PMQTDmfQnLCmt%2F5lm48NPzJY0Ok2c1mIUS39SgnI3gILo2sPTir4ULpW8W%2FCZ4byOFg08%2BamDES8EVIPj7PW7i0Lq7xKEFyKPVkN3B40D3n5OrQD1O2FTCXuuDn1c5%2FpBsT2QwNV6HX9GtMrcgXC6l0FOhWuQkcp5oemgdahekdWo8kEe7OABFPckHthwL79LKtj4Qk445PHlSbP6GjLVfD0rrZ06MfwYFexgfPUaLdmp6b4ULXHx7A5iw8Mt01YoIou46yA2zw%2FSY%2BMEkW%2F32jpgQtEIgnznZ5vvnzoL7%2FAENKmbGz%2Bb3cZJkThCXH39xWDjbPqOdvYWYl2mf5gkPHZO7s63%2FWTQQkzaillRCM1c3dDytrIMsTphvWVR4ZxMViJUy6yzslKGhpE9MORHCcGcRZsQNABR4at8HTz4X8MoHMEgBSB%2BuAU%2Bz%2BJSuHmJTNYbWnf3zb9IOgd5LJB2LHe9AqWEpERPyhmqMmfEAJOtANA5oGt5z0X3GXoIRGz%2FHt1MLvJg8IGOqUBDFdQwgRjC5MJg2Tp7BC47VAgBTlKOgs7Zm%2FLbie%2F4XMuO6%2F0xhIOThLxz5Yr%2BUfyxVUjGc3uHm4ZgXzQsokNR0qMVVedwQbElPd52eHnr331zqJjTJWNQi6J2EHHYV2I5uC1u9xr9jcwHbVbI6jhSKPbI%2FlyC41LvGaT%2BrGX2%2BzZqRe%2FSQSClPRQ0Z0V3K2mYbhWlsHBWOA85HIM1Rlq2hgMcMbe&X-Amz-Signature=d8735583f74768805933e95e69f8ebf11ee3cd4b0828d6b4bfdd67d5dd58f203&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPMSKZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC0NldpN8KoMKtEFW3SoqWltLG2ZWIwW6aYeo%2F1CcOHoQIgOcUFaZfmJi08lr3WlbuuTVmCtX5cgdpxGvawFmUllUAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDILsVi3qyvdYqBzKnCrcA%2BV4ic9XbpCAaLkHmrtMlwE9Srm7JIfV9wPCVNawDvMItNxe6C15I%2Fe3H7pXbDKoRgcRtmJCqbm8P%2FP4lxvHRQFhWE6saYcatSp23%2FdF6yawrwBaAMI2z6l3PMQTDmfQnLCmt%2F5lm48NPzJY0Ok2c1mIUS39SgnI3gILo2sPTir4ULpW8W%2FCZ4byOFg08%2BamDES8EVIPj7PW7i0Lq7xKEFyKPVkN3B40D3n5OrQD1O2FTCXuuDn1c5%2FpBsT2QwNV6HX9GtMrcgXC6l0FOhWuQkcp5oemgdahekdWo8kEe7OABFPckHthwL79LKtj4Qk445PHlSbP6GjLVfD0rrZ06MfwYFexgfPUaLdmp6b4ULXHx7A5iw8Mt01YoIou46yA2zw%2FSY%2BMEkW%2F32jpgQtEIgnznZ5vvnzoL7%2FAENKmbGz%2Bb3cZJkThCXH39xWDjbPqOdvYWYl2mf5gkPHZO7s63%2FWTQQkzaillRCM1c3dDytrIMsTphvWVR4ZxMViJUy6yzslKGhpE9MORHCcGcRZsQNABR4at8HTz4X8MoHMEgBSB%2BuAU%2Bz%2BJSuHmJTNYbWnf3zb9IOgd5LJB2LHe9AqWEpERPyhmqMmfEAJOtANA5oGt5z0X3GXoIRGz%2FHt1MLvJg8IGOqUBDFdQwgRjC5MJg2Tp7BC47VAgBTlKOgs7Zm%2FLbie%2F4XMuO6%2F0xhIOThLxz5Yr%2BUfyxVUjGc3uHm4ZgXzQsokNR0qMVVedwQbElPd52eHnr331zqJjTJWNQi6J2EHHYV2I5uC1u9xr9jcwHbVbI6jhSKPbI%2FlyC41LvGaT%2BrGX2%2BzZqRe%2FSQSClPRQ0Z0V3K2mYbhWlsHBWOA85HIM1Rlq2hgMcMbe&X-Amz-Signature=70d0c876d77c923b4e4faedd4d865385704d96c110f5e50d29083933023e667c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPMSKZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC0NldpN8KoMKtEFW3SoqWltLG2ZWIwW6aYeo%2F1CcOHoQIgOcUFaZfmJi08lr3WlbuuTVmCtX5cgdpxGvawFmUllUAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDILsVi3qyvdYqBzKnCrcA%2BV4ic9XbpCAaLkHmrtMlwE9Srm7JIfV9wPCVNawDvMItNxe6C15I%2Fe3H7pXbDKoRgcRtmJCqbm8P%2FP4lxvHRQFhWE6saYcatSp23%2FdF6yawrwBaAMI2z6l3PMQTDmfQnLCmt%2F5lm48NPzJY0Ok2c1mIUS39SgnI3gILo2sPTir4ULpW8W%2FCZ4byOFg08%2BamDES8EVIPj7PW7i0Lq7xKEFyKPVkN3B40D3n5OrQD1O2FTCXuuDn1c5%2FpBsT2QwNV6HX9GtMrcgXC6l0FOhWuQkcp5oemgdahekdWo8kEe7OABFPckHthwL79LKtj4Qk445PHlSbP6GjLVfD0rrZ06MfwYFexgfPUaLdmp6b4ULXHx7A5iw8Mt01YoIou46yA2zw%2FSY%2BMEkW%2F32jpgQtEIgnznZ5vvnzoL7%2FAENKmbGz%2Bb3cZJkThCXH39xWDjbPqOdvYWYl2mf5gkPHZO7s63%2FWTQQkzaillRCM1c3dDytrIMsTphvWVR4ZxMViJUy6yzslKGhpE9MORHCcGcRZsQNABR4at8HTz4X8MoHMEgBSB%2BuAU%2Bz%2BJSuHmJTNYbWnf3zb9IOgd5LJB2LHe9AqWEpERPyhmqMmfEAJOtANA5oGt5z0X3GXoIRGz%2FHt1MLvJg8IGOqUBDFdQwgRjC5MJg2Tp7BC47VAgBTlKOgs7Zm%2FLbie%2F4XMuO6%2F0xhIOThLxz5Yr%2BUfyxVUjGc3uHm4ZgXzQsokNR0qMVVedwQbElPd52eHnr331zqJjTJWNQi6J2EHHYV2I5uC1u9xr9jcwHbVbI6jhSKPbI%2FlyC41LvGaT%2BrGX2%2BzZqRe%2FSQSClPRQ0Z0V3K2mYbhWlsHBWOA85HIM1Rlq2hgMcMbe&X-Amz-Signature=07a178ba0e012036fa306d791d636faf11a53164ade774af562ba73488a12a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPMSKZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC0NldpN8KoMKtEFW3SoqWltLG2ZWIwW6aYeo%2F1CcOHoQIgOcUFaZfmJi08lr3WlbuuTVmCtX5cgdpxGvawFmUllUAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDILsVi3qyvdYqBzKnCrcA%2BV4ic9XbpCAaLkHmrtMlwE9Srm7JIfV9wPCVNawDvMItNxe6C15I%2Fe3H7pXbDKoRgcRtmJCqbm8P%2FP4lxvHRQFhWE6saYcatSp23%2FdF6yawrwBaAMI2z6l3PMQTDmfQnLCmt%2F5lm48NPzJY0Ok2c1mIUS39SgnI3gILo2sPTir4ULpW8W%2FCZ4byOFg08%2BamDES8EVIPj7PW7i0Lq7xKEFyKPVkN3B40D3n5OrQD1O2FTCXuuDn1c5%2FpBsT2QwNV6HX9GtMrcgXC6l0FOhWuQkcp5oemgdahekdWo8kEe7OABFPckHthwL79LKtj4Qk445PHlSbP6GjLVfD0rrZ06MfwYFexgfPUaLdmp6b4ULXHx7A5iw8Mt01YoIou46yA2zw%2FSY%2BMEkW%2F32jpgQtEIgnznZ5vvnzoL7%2FAENKmbGz%2Bb3cZJkThCXH39xWDjbPqOdvYWYl2mf5gkPHZO7s63%2FWTQQkzaillRCM1c3dDytrIMsTphvWVR4ZxMViJUy6yzslKGhpE9MORHCcGcRZsQNABR4at8HTz4X8MoHMEgBSB%2BuAU%2Bz%2BJSuHmJTNYbWnf3zb9IOgd5LJB2LHe9AqWEpERPyhmqMmfEAJOtANA5oGt5z0X3GXoIRGz%2FHt1MLvJg8IGOqUBDFdQwgRjC5MJg2Tp7BC47VAgBTlKOgs7Zm%2FLbie%2F4XMuO6%2F0xhIOThLxz5Yr%2BUfyxVUjGc3uHm4ZgXzQsokNR0qMVVedwQbElPd52eHnr331zqJjTJWNQi6J2EHHYV2I5uC1u9xr9jcwHbVbI6jhSKPbI%2FlyC41LvGaT%2BrGX2%2BzZqRe%2FSQSClPRQ0Z0V3K2mYbhWlsHBWOA85HIM1Rlq2hgMcMbe&X-Amz-Signature=ceb0f69ba8efb24559e2ea1aa925a02d964b59e9cc27ca927574c76148c474dd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPMSKZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC0NldpN8KoMKtEFW3SoqWltLG2ZWIwW6aYeo%2F1CcOHoQIgOcUFaZfmJi08lr3WlbuuTVmCtX5cgdpxGvawFmUllUAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDILsVi3qyvdYqBzKnCrcA%2BV4ic9XbpCAaLkHmrtMlwE9Srm7JIfV9wPCVNawDvMItNxe6C15I%2Fe3H7pXbDKoRgcRtmJCqbm8P%2FP4lxvHRQFhWE6saYcatSp23%2FdF6yawrwBaAMI2z6l3PMQTDmfQnLCmt%2F5lm48NPzJY0Ok2c1mIUS39SgnI3gILo2sPTir4ULpW8W%2FCZ4byOFg08%2BamDES8EVIPj7PW7i0Lq7xKEFyKPVkN3B40D3n5OrQD1O2FTCXuuDn1c5%2FpBsT2QwNV6HX9GtMrcgXC6l0FOhWuQkcp5oemgdahekdWo8kEe7OABFPckHthwL79LKtj4Qk445PHlSbP6GjLVfD0rrZ06MfwYFexgfPUaLdmp6b4ULXHx7A5iw8Mt01YoIou46yA2zw%2FSY%2BMEkW%2F32jpgQtEIgnznZ5vvnzoL7%2FAENKmbGz%2Bb3cZJkThCXH39xWDjbPqOdvYWYl2mf5gkPHZO7s63%2FWTQQkzaillRCM1c3dDytrIMsTphvWVR4ZxMViJUy6yzslKGhpE9MORHCcGcRZsQNABR4at8HTz4X8MoHMEgBSB%2BuAU%2Bz%2BJSuHmJTNYbWnf3zb9IOgd5LJB2LHe9AqWEpERPyhmqMmfEAJOtANA5oGt5z0X3GXoIRGz%2FHt1MLvJg8IGOqUBDFdQwgRjC5MJg2Tp7BC47VAgBTlKOgs7Zm%2FLbie%2F4XMuO6%2F0xhIOThLxz5Yr%2BUfyxVUjGc3uHm4ZgXzQsokNR0qMVVedwQbElPd52eHnr331zqJjTJWNQi6J2EHHYV2I5uC1u9xr9jcwHbVbI6jhSKPbI%2FlyC41LvGaT%2BrGX2%2BzZqRe%2FSQSClPRQ0Z0V3K2mYbhWlsHBWOA85HIM1Rlq2hgMcMbe&X-Amz-Signature=f574c6fc851ca26e624fb260bec29ac2d26750abfa3ca7b6bd47f5f8298fc6d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

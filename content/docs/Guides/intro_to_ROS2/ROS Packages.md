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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLQFQKM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDjUnVU69Mm1IKx9jSMOdYWpreLygHYVEAVvRLmkIRz8AIgHymm3JY3kj8NFH8urtkW0W0zwLi7m5nm%2BpfykV5JWWUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPlvP%2F5Si7dSVr6HaSrcA57YcDxnH8MhLtxBeGPWEScxwSOSE8ZOwBnn5Ah19aDYWtRStaNuYMPNkUk3SpAFrwjMfZb40Rp07AaV%2BoULHsa%2BzYFL3dkN2Ox%2FQyvYWMVkvMV9123WWeIWIcOsMjhLw%2F8Iyucb9m9vNhAliO4B3LNoP%2BMdE8C4emjKzUN%2FftU4g6o%2B2rL3Zwi03AFxMeyzIFabLZoP%2BW2oTf0cpQ6CpbDNgbt5lVUSB5IrSZFXsNJoJAofjsyQO3%2FQw9cDfCps5eLXHCSG6EhC9OeoMFFMq2H1yaumhP5uD3TtQK0sRLSkfasnwrbUdlKmfqZZKDPMAhSFZNO65wp%2BLhZix6Ug6Zk1t6BDJrWwkZnsd2JJy5wR4VFLNAqiABI%2BuddLsaoHe0k0OVWSZgFRZTO8kkunuAdJjpqg5ra0746nlcuI77epLg6NmdHQxg7Pn3evmRzXcdPKnGLkyf7zpaGeIepb2CWItjS1ibMOBup1IYrjGtceOs%2BLHY8yMPCmoLqN%2B%2BzZggH%2BwFfzFVFNDAIx9aWD7Io5WnYSIRXrTMj8B5pUnRKJGTrGCjfCfk%2Fy5rKRCRBU3%2FxwxdggblgHz5N%2BxjPMemuHKgqGDvZFk3aXZ6WRA06iPOnCbLmSPVied%2FPEMPfBtcIGOqUB4U6AT0UvI%2BPkOv%2FJa4XirtKP1NG6HoKtowkqPhrAgJYW7a6%2FOUv3%2B%2F2HsDeauM2oBVrF7TKu3J9gpnsQIcXyVNqvuwDw7eCKAVbxhkoIOJOnHEbHB7CdzsdOtny8R0h4e9384YhP0swoTGJzYSkO05LjbXimX1Z1pfNapSpqYRwErBurNKZ18Df8eZVAbOlVfObvAJHHLoWo5YRT3AjNX2JUeJxV&X-Amz-Signature=7ffa3895afcb835f32d2a11fa5f199961f13b4763a3dc21210fe980da140cf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLQFQKM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDjUnVU69Mm1IKx9jSMOdYWpreLygHYVEAVvRLmkIRz8AIgHymm3JY3kj8NFH8urtkW0W0zwLi7m5nm%2BpfykV5JWWUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPlvP%2F5Si7dSVr6HaSrcA57YcDxnH8MhLtxBeGPWEScxwSOSE8ZOwBnn5Ah19aDYWtRStaNuYMPNkUk3SpAFrwjMfZb40Rp07AaV%2BoULHsa%2BzYFL3dkN2Ox%2FQyvYWMVkvMV9123WWeIWIcOsMjhLw%2F8Iyucb9m9vNhAliO4B3LNoP%2BMdE8C4emjKzUN%2FftU4g6o%2B2rL3Zwi03AFxMeyzIFabLZoP%2BW2oTf0cpQ6CpbDNgbt5lVUSB5IrSZFXsNJoJAofjsyQO3%2FQw9cDfCps5eLXHCSG6EhC9OeoMFFMq2H1yaumhP5uD3TtQK0sRLSkfasnwrbUdlKmfqZZKDPMAhSFZNO65wp%2BLhZix6Ug6Zk1t6BDJrWwkZnsd2JJy5wR4VFLNAqiABI%2BuddLsaoHe0k0OVWSZgFRZTO8kkunuAdJjpqg5ra0746nlcuI77epLg6NmdHQxg7Pn3evmRzXcdPKnGLkyf7zpaGeIepb2CWItjS1ibMOBup1IYrjGtceOs%2BLHY8yMPCmoLqN%2B%2BzZggH%2BwFfzFVFNDAIx9aWD7Io5WnYSIRXrTMj8B5pUnRKJGTrGCjfCfk%2Fy5rKRCRBU3%2FxwxdggblgHz5N%2BxjPMemuHKgqGDvZFk3aXZ6WRA06iPOnCbLmSPVied%2FPEMPfBtcIGOqUB4U6AT0UvI%2BPkOv%2FJa4XirtKP1NG6HoKtowkqPhrAgJYW7a6%2FOUv3%2B%2F2HsDeauM2oBVrF7TKu3J9gpnsQIcXyVNqvuwDw7eCKAVbxhkoIOJOnHEbHB7CdzsdOtny8R0h4e9384YhP0swoTGJzYSkO05LjbXimX1Z1pfNapSpqYRwErBurNKZ18Df8eZVAbOlVfObvAJHHLoWo5YRT3AjNX2JUeJxV&X-Amz-Signature=7431f80710f42b68ea1dfcf8f8c446a46d8b5c78956e6e90f46f34492057e4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLQFQKM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDjUnVU69Mm1IKx9jSMOdYWpreLygHYVEAVvRLmkIRz8AIgHymm3JY3kj8NFH8urtkW0W0zwLi7m5nm%2BpfykV5JWWUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPlvP%2F5Si7dSVr6HaSrcA57YcDxnH8MhLtxBeGPWEScxwSOSE8ZOwBnn5Ah19aDYWtRStaNuYMPNkUk3SpAFrwjMfZb40Rp07AaV%2BoULHsa%2BzYFL3dkN2Ox%2FQyvYWMVkvMV9123WWeIWIcOsMjhLw%2F8Iyucb9m9vNhAliO4B3LNoP%2BMdE8C4emjKzUN%2FftU4g6o%2B2rL3Zwi03AFxMeyzIFabLZoP%2BW2oTf0cpQ6CpbDNgbt5lVUSB5IrSZFXsNJoJAofjsyQO3%2FQw9cDfCps5eLXHCSG6EhC9OeoMFFMq2H1yaumhP5uD3TtQK0sRLSkfasnwrbUdlKmfqZZKDPMAhSFZNO65wp%2BLhZix6Ug6Zk1t6BDJrWwkZnsd2JJy5wR4VFLNAqiABI%2BuddLsaoHe0k0OVWSZgFRZTO8kkunuAdJjpqg5ra0746nlcuI77epLg6NmdHQxg7Pn3evmRzXcdPKnGLkyf7zpaGeIepb2CWItjS1ibMOBup1IYrjGtceOs%2BLHY8yMPCmoLqN%2B%2BzZggH%2BwFfzFVFNDAIx9aWD7Io5WnYSIRXrTMj8B5pUnRKJGTrGCjfCfk%2Fy5rKRCRBU3%2FxwxdggblgHz5N%2BxjPMemuHKgqGDvZFk3aXZ6WRA06iPOnCbLmSPVied%2FPEMPfBtcIGOqUB4U6AT0UvI%2BPkOv%2FJa4XirtKP1NG6HoKtowkqPhrAgJYW7a6%2FOUv3%2B%2F2HsDeauM2oBVrF7TKu3J9gpnsQIcXyVNqvuwDw7eCKAVbxhkoIOJOnHEbHB7CdzsdOtny8R0h4e9384YhP0swoTGJzYSkO05LjbXimX1Z1pfNapSpqYRwErBurNKZ18Df8eZVAbOlVfObvAJHHLoWo5YRT3AjNX2JUeJxV&X-Amz-Signature=74cb470877318996879bb2e4f4983d5ef34b21f1c2142304447437b0b69ea548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLQFQKM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDjUnVU69Mm1IKx9jSMOdYWpreLygHYVEAVvRLmkIRz8AIgHymm3JY3kj8NFH8urtkW0W0zwLi7m5nm%2BpfykV5JWWUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPlvP%2F5Si7dSVr6HaSrcA57YcDxnH8MhLtxBeGPWEScxwSOSE8ZOwBnn5Ah19aDYWtRStaNuYMPNkUk3SpAFrwjMfZb40Rp07AaV%2BoULHsa%2BzYFL3dkN2Ox%2FQyvYWMVkvMV9123WWeIWIcOsMjhLw%2F8Iyucb9m9vNhAliO4B3LNoP%2BMdE8C4emjKzUN%2FftU4g6o%2B2rL3Zwi03AFxMeyzIFabLZoP%2BW2oTf0cpQ6CpbDNgbt5lVUSB5IrSZFXsNJoJAofjsyQO3%2FQw9cDfCps5eLXHCSG6EhC9OeoMFFMq2H1yaumhP5uD3TtQK0sRLSkfasnwrbUdlKmfqZZKDPMAhSFZNO65wp%2BLhZix6Ug6Zk1t6BDJrWwkZnsd2JJy5wR4VFLNAqiABI%2BuddLsaoHe0k0OVWSZgFRZTO8kkunuAdJjpqg5ra0746nlcuI77epLg6NmdHQxg7Pn3evmRzXcdPKnGLkyf7zpaGeIepb2CWItjS1ibMOBup1IYrjGtceOs%2BLHY8yMPCmoLqN%2B%2BzZggH%2BwFfzFVFNDAIx9aWD7Io5WnYSIRXrTMj8B5pUnRKJGTrGCjfCfk%2Fy5rKRCRBU3%2FxwxdggblgHz5N%2BxjPMemuHKgqGDvZFk3aXZ6WRA06iPOnCbLmSPVied%2FPEMPfBtcIGOqUB4U6AT0UvI%2BPkOv%2FJa4XirtKP1NG6HoKtowkqPhrAgJYW7a6%2FOUv3%2B%2F2HsDeauM2oBVrF7TKu3J9gpnsQIcXyVNqvuwDw7eCKAVbxhkoIOJOnHEbHB7CdzsdOtny8R0h4e9384YhP0swoTGJzYSkO05LjbXimX1Z1pfNapSpqYRwErBurNKZ18Df8eZVAbOlVfObvAJHHLoWo5YRT3AjNX2JUeJxV&X-Amz-Signature=fcec1356ca4feac1ce80b82dc310658e05c3f1a1d5dbf265f9b240bd676cc341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLQFQKM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDjUnVU69Mm1IKx9jSMOdYWpreLygHYVEAVvRLmkIRz8AIgHymm3JY3kj8NFH8urtkW0W0zwLi7m5nm%2BpfykV5JWWUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPlvP%2F5Si7dSVr6HaSrcA57YcDxnH8MhLtxBeGPWEScxwSOSE8ZOwBnn5Ah19aDYWtRStaNuYMPNkUk3SpAFrwjMfZb40Rp07AaV%2BoULHsa%2BzYFL3dkN2Ox%2FQyvYWMVkvMV9123WWeIWIcOsMjhLw%2F8Iyucb9m9vNhAliO4B3LNoP%2BMdE8C4emjKzUN%2FftU4g6o%2B2rL3Zwi03AFxMeyzIFabLZoP%2BW2oTf0cpQ6CpbDNgbt5lVUSB5IrSZFXsNJoJAofjsyQO3%2FQw9cDfCps5eLXHCSG6EhC9OeoMFFMq2H1yaumhP5uD3TtQK0sRLSkfasnwrbUdlKmfqZZKDPMAhSFZNO65wp%2BLhZix6Ug6Zk1t6BDJrWwkZnsd2JJy5wR4VFLNAqiABI%2BuddLsaoHe0k0OVWSZgFRZTO8kkunuAdJjpqg5ra0746nlcuI77epLg6NmdHQxg7Pn3evmRzXcdPKnGLkyf7zpaGeIepb2CWItjS1ibMOBup1IYrjGtceOs%2BLHY8yMPCmoLqN%2B%2BzZggH%2BwFfzFVFNDAIx9aWD7Io5WnYSIRXrTMj8B5pUnRKJGTrGCjfCfk%2Fy5rKRCRBU3%2FxwxdggblgHz5N%2BxjPMemuHKgqGDvZFk3aXZ6WRA06iPOnCbLmSPVied%2FPEMPfBtcIGOqUB4U6AT0UvI%2BPkOv%2FJa4XirtKP1NG6HoKtowkqPhrAgJYW7a6%2FOUv3%2B%2F2HsDeauM2oBVrF7TKu3J9gpnsQIcXyVNqvuwDw7eCKAVbxhkoIOJOnHEbHB7CdzsdOtny8R0h4e9384YhP0swoTGJzYSkO05LjbXimX1Z1pfNapSpqYRwErBurNKZ18Df8eZVAbOlVfObvAJHHLoWo5YRT3AjNX2JUeJxV&X-Amz-Signature=9e810f7de32f1d2a8bfb84162a22dc31e61f6369d4d0d31b462990f4b45109ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLQFQKM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDjUnVU69Mm1IKx9jSMOdYWpreLygHYVEAVvRLmkIRz8AIgHymm3JY3kj8NFH8urtkW0W0zwLi7m5nm%2BpfykV5JWWUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPlvP%2F5Si7dSVr6HaSrcA57YcDxnH8MhLtxBeGPWEScxwSOSE8ZOwBnn5Ah19aDYWtRStaNuYMPNkUk3SpAFrwjMfZb40Rp07AaV%2BoULHsa%2BzYFL3dkN2Ox%2FQyvYWMVkvMV9123WWeIWIcOsMjhLw%2F8Iyucb9m9vNhAliO4B3LNoP%2BMdE8C4emjKzUN%2FftU4g6o%2B2rL3Zwi03AFxMeyzIFabLZoP%2BW2oTf0cpQ6CpbDNgbt5lVUSB5IrSZFXsNJoJAofjsyQO3%2FQw9cDfCps5eLXHCSG6EhC9OeoMFFMq2H1yaumhP5uD3TtQK0sRLSkfasnwrbUdlKmfqZZKDPMAhSFZNO65wp%2BLhZix6Ug6Zk1t6BDJrWwkZnsd2JJy5wR4VFLNAqiABI%2BuddLsaoHe0k0OVWSZgFRZTO8kkunuAdJjpqg5ra0746nlcuI77epLg6NmdHQxg7Pn3evmRzXcdPKnGLkyf7zpaGeIepb2CWItjS1ibMOBup1IYrjGtceOs%2BLHY8yMPCmoLqN%2B%2BzZggH%2BwFfzFVFNDAIx9aWD7Io5WnYSIRXrTMj8B5pUnRKJGTrGCjfCfk%2Fy5rKRCRBU3%2FxwxdggblgHz5N%2BxjPMemuHKgqGDvZFk3aXZ6WRA06iPOnCbLmSPVied%2FPEMPfBtcIGOqUB4U6AT0UvI%2BPkOv%2FJa4XirtKP1NG6HoKtowkqPhrAgJYW7a6%2FOUv3%2B%2F2HsDeauM2oBVrF7TKu3J9gpnsQIcXyVNqvuwDw7eCKAVbxhkoIOJOnHEbHB7CdzsdOtny8R0h4e9384YhP0swoTGJzYSkO05LjbXimX1Z1pfNapSpqYRwErBurNKZ18Df8eZVAbOlVfObvAJHHLoWo5YRT3AjNX2JUeJxV&X-Amz-Signature=061a698075cc2ad087dd41520c5b2aec1acafa0abfaa233d96340be3ca908568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLQFQKM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDjUnVU69Mm1IKx9jSMOdYWpreLygHYVEAVvRLmkIRz8AIgHymm3JY3kj8NFH8urtkW0W0zwLi7m5nm%2BpfykV5JWWUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPlvP%2F5Si7dSVr6HaSrcA57YcDxnH8MhLtxBeGPWEScxwSOSE8ZOwBnn5Ah19aDYWtRStaNuYMPNkUk3SpAFrwjMfZb40Rp07AaV%2BoULHsa%2BzYFL3dkN2Ox%2FQyvYWMVkvMV9123WWeIWIcOsMjhLw%2F8Iyucb9m9vNhAliO4B3LNoP%2BMdE8C4emjKzUN%2FftU4g6o%2B2rL3Zwi03AFxMeyzIFabLZoP%2BW2oTf0cpQ6CpbDNgbt5lVUSB5IrSZFXsNJoJAofjsyQO3%2FQw9cDfCps5eLXHCSG6EhC9OeoMFFMq2H1yaumhP5uD3TtQK0sRLSkfasnwrbUdlKmfqZZKDPMAhSFZNO65wp%2BLhZix6Ug6Zk1t6BDJrWwkZnsd2JJy5wR4VFLNAqiABI%2BuddLsaoHe0k0OVWSZgFRZTO8kkunuAdJjpqg5ra0746nlcuI77epLg6NmdHQxg7Pn3evmRzXcdPKnGLkyf7zpaGeIepb2CWItjS1ibMOBup1IYrjGtceOs%2BLHY8yMPCmoLqN%2B%2BzZggH%2BwFfzFVFNDAIx9aWD7Io5WnYSIRXrTMj8B5pUnRKJGTrGCjfCfk%2Fy5rKRCRBU3%2FxwxdggblgHz5N%2BxjPMemuHKgqGDvZFk3aXZ6WRA06iPOnCbLmSPVied%2FPEMPfBtcIGOqUB4U6AT0UvI%2BPkOv%2FJa4XirtKP1NG6HoKtowkqPhrAgJYW7a6%2FOUv3%2B%2F2HsDeauM2oBVrF7TKu3J9gpnsQIcXyVNqvuwDw7eCKAVbxhkoIOJOnHEbHB7CdzsdOtny8R0h4e9384YhP0swoTGJzYSkO05LjbXimX1Z1pfNapSpqYRwErBurNKZ18Df8eZVAbOlVfObvAJHHLoWo5YRT3AjNX2JUeJxV&X-Amz-Signature=e5147c6077cd5f740bfe8422ea4eee2234afd2fe3f25ea05ca4cf748fcfeca26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

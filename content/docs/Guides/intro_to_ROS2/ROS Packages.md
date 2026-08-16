---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYZPJ4K%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCeXij3xD2GlEkdoHUvlrgffAYy9bidpZva6uNV42FRqwIgTa8AREGeSxrGNMg749jWyDJRVTCL%2F0JPWt3mf1RwTZoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCVR3vSgm9CIMfMXgSrcAw6kGeuD%2B1foMTjCrmdGZESSxRaSAaZx6ipdsfo58yS7GTCz2jQ%2BkkkxQNlie8Nu5mnFt7ZHVRKD2DDwCj6KypP9EraGlPwq7mNlHL8iZPo73fxym5BVIY2gOllsJoIcUejV4G2jQCAIUY%2FG2ZFrFTBRoTBaIDWh3ZKHiKB%2BkEt6CO8QKnmp8hXNdq6I5oiotG0T25a7DhHKx3OSTI%2FUvaCOwW6GbP%2B7xo9u8hm1U%2Fid%2Fu8gwgPDPWIYNMDbW%2FVCcDs%2BFSrSGtjKEyB5KpK34Y9cl3keVAVIpfTAZe8o14y3C9Fjkmc3G3o96qfBEIZOtv8mEjpB9ZEA3fp3JzdMC3C2WwwE%2B9bTYQOGScJWzdIrS2BT4sDhZRf8hZfD9w42vLSt%2BOl3Az5QYUZ1s%2Be7lB2Zc0FDqGV3QSLlg88x4DcqLUu8YrrAT%2BB8z%2BpGxyvsIq88T6TYe7gHAUKAC1gOlS9kqY6rzYnYGXbEJBDOe%2BRbmIbYymAqoaL11ND3RuqJpDo%2Fi0d4yQxBjjEt%2Bv%2BIcrB%2BvVkW1SM8w6jkhddTn7IL98%2BPBdyPA5LU%2BgVLTsD4xWvXMVvTpHQ%2FXoeQzw5qIwq56Jr7gmT98A%2BCOjCOdkSpTHSDRD5AUqrT6WLqMK3rg9QGOqUBIPymAtCLpa3zN88txZjtaPOnso3dNW4U097CZCSsgsHZlo26BeT9EdjRYTDcfDEMXYPvEcKEuXnW0vt0Z8qhDrZBaV%2FyQQU5J6d%2FPjGWBppGqyFIbT8IJBeTGm6ydk7bwBDzJZMoLrklNQURE4owL1z0gku8yEHlbl5d%2F2mMQuyqPzC0hQ8ESIBwOq%2BZPTjP8%2BNmWNyU1%2FY98MtsfKwkzMfVYDbJ&X-Amz-Signature=861b45b70259fd2c9ae49bc0ab27b62fd4f94987c17861be52225f2f0ca5bb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYZPJ4K%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCeXij3xD2GlEkdoHUvlrgffAYy9bidpZva6uNV42FRqwIgTa8AREGeSxrGNMg749jWyDJRVTCL%2F0JPWt3mf1RwTZoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCVR3vSgm9CIMfMXgSrcAw6kGeuD%2B1foMTjCrmdGZESSxRaSAaZx6ipdsfo58yS7GTCz2jQ%2BkkkxQNlie8Nu5mnFt7ZHVRKD2DDwCj6KypP9EraGlPwq7mNlHL8iZPo73fxym5BVIY2gOllsJoIcUejV4G2jQCAIUY%2FG2ZFrFTBRoTBaIDWh3ZKHiKB%2BkEt6CO8QKnmp8hXNdq6I5oiotG0T25a7DhHKx3OSTI%2FUvaCOwW6GbP%2B7xo9u8hm1U%2Fid%2Fu8gwgPDPWIYNMDbW%2FVCcDs%2BFSrSGtjKEyB5KpK34Y9cl3keVAVIpfTAZe8o14y3C9Fjkmc3G3o96qfBEIZOtv8mEjpB9ZEA3fp3JzdMC3C2WwwE%2B9bTYQOGScJWzdIrS2BT4sDhZRf8hZfD9w42vLSt%2BOl3Az5QYUZ1s%2Be7lB2Zc0FDqGV3QSLlg88x4DcqLUu8YrrAT%2BB8z%2BpGxyvsIq88T6TYe7gHAUKAC1gOlS9kqY6rzYnYGXbEJBDOe%2BRbmIbYymAqoaL11ND3RuqJpDo%2Fi0d4yQxBjjEt%2Bv%2BIcrB%2BvVkW1SM8w6jkhddTn7IL98%2BPBdyPA5LU%2BgVLTsD4xWvXMVvTpHQ%2FXoeQzw5qIwq56Jr7gmT98A%2BCOjCOdkSpTHSDRD5AUqrT6WLqMK3rg9QGOqUBIPymAtCLpa3zN88txZjtaPOnso3dNW4U097CZCSsgsHZlo26BeT9EdjRYTDcfDEMXYPvEcKEuXnW0vt0Z8qhDrZBaV%2FyQQU5J6d%2FPjGWBppGqyFIbT8IJBeTGm6ydk7bwBDzJZMoLrklNQURE4owL1z0gku8yEHlbl5d%2F2mMQuyqPzC0hQ8ESIBwOq%2BZPTjP8%2BNmWNyU1%2FY98MtsfKwkzMfVYDbJ&X-Amz-Signature=59ead61d475da6c38ae9701118cf6fe6d11d6e2f81af9ef216801c4c4d86bb5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYZPJ4K%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCeXij3xD2GlEkdoHUvlrgffAYy9bidpZva6uNV42FRqwIgTa8AREGeSxrGNMg749jWyDJRVTCL%2F0JPWt3mf1RwTZoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCVR3vSgm9CIMfMXgSrcAw6kGeuD%2B1foMTjCrmdGZESSxRaSAaZx6ipdsfo58yS7GTCz2jQ%2BkkkxQNlie8Nu5mnFt7ZHVRKD2DDwCj6KypP9EraGlPwq7mNlHL8iZPo73fxym5BVIY2gOllsJoIcUejV4G2jQCAIUY%2FG2ZFrFTBRoTBaIDWh3ZKHiKB%2BkEt6CO8QKnmp8hXNdq6I5oiotG0T25a7DhHKx3OSTI%2FUvaCOwW6GbP%2B7xo9u8hm1U%2Fid%2Fu8gwgPDPWIYNMDbW%2FVCcDs%2BFSrSGtjKEyB5KpK34Y9cl3keVAVIpfTAZe8o14y3C9Fjkmc3G3o96qfBEIZOtv8mEjpB9ZEA3fp3JzdMC3C2WwwE%2B9bTYQOGScJWzdIrS2BT4sDhZRf8hZfD9w42vLSt%2BOl3Az5QYUZ1s%2Be7lB2Zc0FDqGV3QSLlg88x4DcqLUu8YrrAT%2BB8z%2BpGxyvsIq88T6TYe7gHAUKAC1gOlS9kqY6rzYnYGXbEJBDOe%2BRbmIbYymAqoaL11ND3RuqJpDo%2Fi0d4yQxBjjEt%2Bv%2BIcrB%2BvVkW1SM8w6jkhddTn7IL98%2BPBdyPA5LU%2BgVLTsD4xWvXMVvTpHQ%2FXoeQzw5qIwq56Jr7gmT98A%2BCOjCOdkSpTHSDRD5AUqrT6WLqMK3rg9QGOqUBIPymAtCLpa3zN88txZjtaPOnso3dNW4U097CZCSsgsHZlo26BeT9EdjRYTDcfDEMXYPvEcKEuXnW0vt0Z8qhDrZBaV%2FyQQU5J6d%2FPjGWBppGqyFIbT8IJBeTGm6ydk7bwBDzJZMoLrklNQURE4owL1z0gku8yEHlbl5d%2F2mMQuyqPzC0hQ8ESIBwOq%2BZPTjP8%2BNmWNyU1%2FY98MtsfKwkzMfVYDbJ&X-Amz-Signature=48eefecc5ccd09f7a5099a430abaca17c8c013cbf062c1c2a4c2a73ce0f380e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYZPJ4K%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCeXij3xD2GlEkdoHUvlrgffAYy9bidpZva6uNV42FRqwIgTa8AREGeSxrGNMg749jWyDJRVTCL%2F0JPWt3mf1RwTZoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCVR3vSgm9CIMfMXgSrcAw6kGeuD%2B1foMTjCrmdGZESSxRaSAaZx6ipdsfo58yS7GTCz2jQ%2BkkkxQNlie8Nu5mnFt7ZHVRKD2DDwCj6KypP9EraGlPwq7mNlHL8iZPo73fxym5BVIY2gOllsJoIcUejV4G2jQCAIUY%2FG2ZFrFTBRoTBaIDWh3ZKHiKB%2BkEt6CO8QKnmp8hXNdq6I5oiotG0T25a7DhHKx3OSTI%2FUvaCOwW6GbP%2B7xo9u8hm1U%2Fid%2Fu8gwgPDPWIYNMDbW%2FVCcDs%2BFSrSGtjKEyB5KpK34Y9cl3keVAVIpfTAZe8o14y3C9Fjkmc3G3o96qfBEIZOtv8mEjpB9ZEA3fp3JzdMC3C2WwwE%2B9bTYQOGScJWzdIrS2BT4sDhZRf8hZfD9w42vLSt%2BOl3Az5QYUZ1s%2Be7lB2Zc0FDqGV3QSLlg88x4DcqLUu8YrrAT%2BB8z%2BpGxyvsIq88T6TYe7gHAUKAC1gOlS9kqY6rzYnYGXbEJBDOe%2BRbmIbYymAqoaL11ND3RuqJpDo%2Fi0d4yQxBjjEt%2Bv%2BIcrB%2BvVkW1SM8w6jkhddTn7IL98%2BPBdyPA5LU%2BgVLTsD4xWvXMVvTpHQ%2FXoeQzw5qIwq56Jr7gmT98A%2BCOjCOdkSpTHSDRD5AUqrT6WLqMK3rg9QGOqUBIPymAtCLpa3zN88txZjtaPOnso3dNW4U097CZCSsgsHZlo26BeT9EdjRYTDcfDEMXYPvEcKEuXnW0vt0Z8qhDrZBaV%2FyQQU5J6d%2FPjGWBppGqyFIbT8IJBeTGm6ydk7bwBDzJZMoLrklNQURE4owL1z0gku8yEHlbl5d%2F2mMQuyqPzC0hQ8ESIBwOq%2BZPTjP8%2BNmWNyU1%2FY98MtsfKwkzMfVYDbJ&X-Amz-Signature=2796cef0261a4706e2e09285f3b3fbcfaed79c8adf632d9f7f90f7b5fb707781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYZPJ4K%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCeXij3xD2GlEkdoHUvlrgffAYy9bidpZva6uNV42FRqwIgTa8AREGeSxrGNMg749jWyDJRVTCL%2F0JPWt3mf1RwTZoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCVR3vSgm9CIMfMXgSrcAw6kGeuD%2B1foMTjCrmdGZESSxRaSAaZx6ipdsfo58yS7GTCz2jQ%2BkkkxQNlie8Nu5mnFt7ZHVRKD2DDwCj6KypP9EraGlPwq7mNlHL8iZPo73fxym5BVIY2gOllsJoIcUejV4G2jQCAIUY%2FG2ZFrFTBRoTBaIDWh3ZKHiKB%2BkEt6CO8QKnmp8hXNdq6I5oiotG0T25a7DhHKx3OSTI%2FUvaCOwW6GbP%2B7xo9u8hm1U%2Fid%2Fu8gwgPDPWIYNMDbW%2FVCcDs%2BFSrSGtjKEyB5KpK34Y9cl3keVAVIpfTAZe8o14y3C9Fjkmc3G3o96qfBEIZOtv8mEjpB9ZEA3fp3JzdMC3C2WwwE%2B9bTYQOGScJWzdIrS2BT4sDhZRf8hZfD9w42vLSt%2BOl3Az5QYUZ1s%2Be7lB2Zc0FDqGV3QSLlg88x4DcqLUu8YrrAT%2BB8z%2BpGxyvsIq88T6TYe7gHAUKAC1gOlS9kqY6rzYnYGXbEJBDOe%2BRbmIbYymAqoaL11ND3RuqJpDo%2Fi0d4yQxBjjEt%2Bv%2BIcrB%2BvVkW1SM8w6jkhddTn7IL98%2BPBdyPA5LU%2BgVLTsD4xWvXMVvTpHQ%2FXoeQzw5qIwq56Jr7gmT98A%2BCOjCOdkSpTHSDRD5AUqrT6WLqMK3rg9QGOqUBIPymAtCLpa3zN88txZjtaPOnso3dNW4U097CZCSsgsHZlo26BeT9EdjRYTDcfDEMXYPvEcKEuXnW0vt0Z8qhDrZBaV%2FyQQU5J6d%2FPjGWBppGqyFIbT8IJBeTGm6ydk7bwBDzJZMoLrklNQURE4owL1z0gku8yEHlbl5d%2F2mMQuyqPzC0hQ8ESIBwOq%2BZPTjP8%2BNmWNyU1%2FY98MtsfKwkzMfVYDbJ&X-Amz-Signature=e2636cc1cce74e2c734a64081045230e2fef1846cd3cf538da4bf2d58b768861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYZPJ4K%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCeXij3xD2GlEkdoHUvlrgffAYy9bidpZva6uNV42FRqwIgTa8AREGeSxrGNMg749jWyDJRVTCL%2F0JPWt3mf1RwTZoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCVR3vSgm9CIMfMXgSrcAw6kGeuD%2B1foMTjCrmdGZESSxRaSAaZx6ipdsfo58yS7GTCz2jQ%2BkkkxQNlie8Nu5mnFt7ZHVRKD2DDwCj6KypP9EraGlPwq7mNlHL8iZPo73fxym5BVIY2gOllsJoIcUejV4G2jQCAIUY%2FG2ZFrFTBRoTBaIDWh3ZKHiKB%2BkEt6CO8QKnmp8hXNdq6I5oiotG0T25a7DhHKx3OSTI%2FUvaCOwW6GbP%2B7xo9u8hm1U%2Fid%2Fu8gwgPDPWIYNMDbW%2FVCcDs%2BFSrSGtjKEyB5KpK34Y9cl3keVAVIpfTAZe8o14y3C9Fjkmc3G3o96qfBEIZOtv8mEjpB9ZEA3fp3JzdMC3C2WwwE%2B9bTYQOGScJWzdIrS2BT4sDhZRf8hZfD9w42vLSt%2BOl3Az5QYUZ1s%2Be7lB2Zc0FDqGV3QSLlg88x4DcqLUu8YrrAT%2BB8z%2BpGxyvsIq88T6TYe7gHAUKAC1gOlS9kqY6rzYnYGXbEJBDOe%2BRbmIbYymAqoaL11ND3RuqJpDo%2Fi0d4yQxBjjEt%2Bv%2BIcrB%2BvVkW1SM8w6jkhddTn7IL98%2BPBdyPA5LU%2BgVLTsD4xWvXMVvTpHQ%2FXoeQzw5qIwq56Jr7gmT98A%2BCOjCOdkSpTHSDRD5AUqrT6WLqMK3rg9QGOqUBIPymAtCLpa3zN88txZjtaPOnso3dNW4U097CZCSsgsHZlo26BeT9EdjRYTDcfDEMXYPvEcKEuXnW0vt0Z8qhDrZBaV%2FyQQU5J6d%2FPjGWBppGqyFIbT8IJBeTGm6ydk7bwBDzJZMoLrklNQURE4owL1z0gku8yEHlbl5d%2F2mMQuyqPzC0hQ8ESIBwOq%2BZPTjP8%2BNmWNyU1%2FY98MtsfKwkzMfVYDbJ&X-Amz-Signature=4e0fe1001f3f27fa424937ff97c0ee1e4dfbea9532d814ce31971813085f0eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYZPJ4K%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCeXij3xD2GlEkdoHUvlrgffAYy9bidpZva6uNV42FRqwIgTa8AREGeSxrGNMg749jWyDJRVTCL%2F0JPWt3mf1RwTZoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCVR3vSgm9CIMfMXgSrcAw6kGeuD%2B1foMTjCrmdGZESSxRaSAaZx6ipdsfo58yS7GTCz2jQ%2BkkkxQNlie8Nu5mnFt7ZHVRKD2DDwCj6KypP9EraGlPwq7mNlHL8iZPo73fxym5BVIY2gOllsJoIcUejV4G2jQCAIUY%2FG2ZFrFTBRoTBaIDWh3ZKHiKB%2BkEt6CO8QKnmp8hXNdq6I5oiotG0T25a7DhHKx3OSTI%2FUvaCOwW6GbP%2B7xo9u8hm1U%2Fid%2Fu8gwgPDPWIYNMDbW%2FVCcDs%2BFSrSGtjKEyB5KpK34Y9cl3keVAVIpfTAZe8o14y3C9Fjkmc3G3o96qfBEIZOtv8mEjpB9ZEA3fp3JzdMC3C2WwwE%2B9bTYQOGScJWzdIrS2BT4sDhZRf8hZfD9w42vLSt%2BOl3Az5QYUZ1s%2Be7lB2Zc0FDqGV3QSLlg88x4DcqLUu8YrrAT%2BB8z%2BpGxyvsIq88T6TYe7gHAUKAC1gOlS9kqY6rzYnYGXbEJBDOe%2BRbmIbYymAqoaL11ND3RuqJpDo%2Fi0d4yQxBjjEt%2Bv%2BIcrB%2BvVkW1SM8w6jkhddTn7IL98%2BPBdyPA5LU%2BgVLTsD4xWvXMVvTpHQ%2FXoeQzw5qIwq56Jr7gmT98A%2BCOjCOdkSpTHSDRD5AUqrT6WLqMK3rg9QGOqUBIPymAtCLpa3zN88txZjtaPOnso3dNW4U097CZCSsgsHZlo26BeT9EdjRYTDcfDEMXYPvEcKEuXnW0vt0Z8qhDrZBaV%2FyQQU5J6d%2FPjGWBppGqyFIbT8IJBeTGm6ydk7bwBDzJZMoLrklNQURE4owL1z0gku8yEHlbl5d%2F2mMQuyqPzC0hQ8ESIBwOq%2BZPTjP8%2BNmWNyU1%2FY98MtsfKwkzMfVYDbJ&X-Amz-Signature=1304841f5c606eca40256c12a0153730b3b88c5055c9d431ce3dd45abea824b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

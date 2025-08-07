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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWPVGQG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCgsBzR%2FJIS8VNuTNXecnpX0f6ZaWWDhbMfWZ55BbVCoAIhAJNhHTi4KTEtswHaMtpBT8JrYblmKzH8ZMbex9wOBkQlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5WO9gLNtsh0sioM0q3AOX%2F9pPfhoxMByzjozvja0HkJ9Oqf25Egn9dVqboQHGSc%2FuyMpYhNnPQoRH98qKCx1qw99cS%2BW%2BLkyrJ0YBgqnakazmox0veho1LzqjGb%2F5k7GyTKTPJm%2BR3%2FajnVFi9C0KsVMZ8HiL1SOLbK9oAoFzCMSe%2Fe7Nrj3%2B0EtUbLaJzs2rJid5k2j01qUybNhDROOB%2Bs58Tb30%2FTNn0NmfgIdKyvDubYheJFXgwRE%2BSeeC9ZlkRQdBepWLKUs6JPDrt11%2FXJq7Dr1NiId0ejHoTqKZOhekVqhAgHYzVU5BO0EudCfWLQtUH4VTYSztG27Hrd0MrC0shDU9RPMFgD1QQPAFqHyh3He%2Bcyjq03%2BFpiGnWEITVzVH67SwTer5yN3WLJqoXvKEnhfbjx1WNWKdNQ2ez%2FUpwxX0eqxcnNTndwXL38us%2BOISaV24blWVY6l6leNb4yWJ89TN8BJvdqLuk9DVFQOpGTItcN2QhOmSITf3QoJvKDEHYwcpkXQXXUv4Pf2YDO%2By4nefsSVU7PxpQtOQg0Y3RBAAyUT5XxzxQl1QC%2FjUi%2BYEJUFIetT%2B7hLx3pib7ryIY8tgPicyyLsUCEoxtlOZXFxxNnlrqnvpanL9zO%2FURhtHN%2FcYcComADDT49HEBjqkAd%2FNVRvHEU%2FwCAvIaAFibUIdKyeC4bxGbpNPX5ZV8x5esg3d8WRbSzqYBlpd%2BuYCS1OiTw9%2FteASZEe7v6zb5rl94Z6WRGxAo899RKn77%2BPQmQzvb7zaDqVQKoIrN9ZQQBKoLY94B%2BxmBBbFou5HHj4stKZmrprvlq2JPOeTT5fvGR2bM1f29KrjKoNnYBacJegIOffpNosZibZ%2BHwgtVBM%2FWx2b&X-Amz-Signature=f5359275f1ea2038a347f1b6ef8258e59ba50a16e430e8e1dbde76fb568f2aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWPVGQG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCgsBzR%2FJIS8VNuTNXecnpX0f6ZaWWDhbMfWZ55BbVCoAIhAJNhHTi4KTEtswHaMtpBT8JrYblmKzH8ZMbex9wOBkQlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5WO9gLNtsh0sioM0q3AOX%2F9pPfhoxMByzjozvja0HkJ9Oqf25Egn9dVqboQHGSc%2FuyMpYhNnPQoRH98qKCx1qw99cS%2BW%2BLkyrJ0YBgqnakazmox0veho1LzqjGb%2F5k7GyTKTPJm%2BR3%2FajnVFi9C0KsVMZ8HiL1SOLbK9oAoFzCMSe%2Fe7Nrj3%2B0EtUbLaJzs2rJid5k2j01qUybNhDROOB%2Bs58Tb30%2FTNn0NmfgIdKyvDubYheJFXgwRE%2BSeeC9ZlkRQdBepWLKUs6JPDrt11%2FXJq7Dr1NiId0ejHoTqKZOhekVqhAgHYzVU5BO0EudCfWLQtUH4VTYSztG27Hrd0MrC0shDU9RPMFgD1QQPAFqHyh3He%2Bcyjq03%2BFpiGnWEITVzVH67SwTer5yN3WLJqoXvKEnhfbjx1WNWKdNQ2ez%2FUpwxX0eqxcnNTndwXL38us%2BOISaV24blWVY6l6leNb4yWJ89TN8BJvdqLuk9DVFQOpGTItcN2QhOmSITf3QoJvKDEHYwcpkXQXXUv4Pf2YDO%2By4nefsSVU7PxpQtOQg0Y3RBAAyUT5XxzxQl1QC%2FjUi%2BYEJUFIetT%2B7hLx3pib7ryIY8tgPicyyLsUCEoxtlOZXFxxNnlrqnvpanL9zO%2FURhtHN%2FcYcComADDT49HEBjqkAd%2FNVRvHEU%2FwCAvIaAFibUIdKyeC4bxGbpNPX5ZV8x5esg3d8WRbSzqYBlpd%2BuYCS1OiTw9%2FteASZEe7v6zb5rl94Z6WRGxAo899RKn77%2BPQmQzvb7zaDqVQKoIrN9ZQQBKoLY94B%2BxmBBbFou5HHj4stKZmrprvlq2JPOeTT5fvGR2bM1f29KrjKoNnYBacJegIOffpNosZibZ%2BHwgtVBM%2FWx2b&X-Amz-Signature=a9e14a794ba0eae547528c2df6f00ed2fa34ecedb49e5600e180938ec2826562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWPVGQG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCgsBzR%2FJIS8VNuTNXecnpX0f6ZaWWDhbMfWZ55BbVCoAIhAJNhHTi4KTEtswHaMtpBT8JrYblmKzH8ZMbex9wOBkQlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5WO9gLNtsh0sioM0q3AOX%2F9pPfhoxMByzjozvja0HkJ9Oqf25Egn9dVqboQHGSc%2FuyMpYhNnPQoRH98qKCx1qw99cS%2BW%2BLkyrJ0YBgqnakazmox0veho1LzqjGb%2F5k7GyTKTPJm%2BR3%2FajnVFi9C0KsVMZ8HiL1SOLbK9oAoFzCMSe%2Fe7Nrj3%2B0EtUbLaJzs2rJid5k2j01qUybNhDROOB%2Bs58Tb30%2FTNn0NmfgIdKyvDubYheJFXgwRE%2BSeeC9ZlkRQdBepWLKUs6JPDrt11%2FXJq7Dr1NiId0ejHoTqKZOhekVqhAgHYzVU5BO0EudCfWLQtUH4VTYSztG27Hrd0MrC0shDU9RPMFgD1QQPAFqHyh3He%2Bcyjq03%2BFpiGnWEITVzVH67SwTer5yN3WLJqoXvKEnhfbjx1WNWKdNQ2ez%2FUpwxX0eqxcnNTndwXL38us%2BOISaV24blWVY6l6leNb4yWJ89TN8BJvdqLuk9DVFQOpGTItcN2QhOmSITf3QoJvKDEHYwcpkXQXXUv4Pf2YDO%2By4nefsSVU7PxpQtOQg0Y3RBAAyUT5XxzxQl1QC%2FjUi%2BYEJUFIetT%2B7hLx3pib7ryIY8tgPicyyLsUCEoxtlOZXFxxNnlrqnvpanL9zO%2FURhtHN%2FcYcComADDT49HEBjqkAd%2FNVRvHEU%2FwCAvIaAFibUIdKyeC4bxGbpNPX5ZV8x5esg3d8WRbSzqYBlpd%2BuYCS1OiTw9%2FteASZEe7v6zb5rl94Z6WRGxAo899RKn77%2BPQmQzvb7zaDqVQKoIrN9ZQQBKoLY94B%2BxmBBbFou5HHj4stKZmrprvlq2JPOeTT5fvGR2bM1f29KrjKoNnYBacJegIOffpNosZibZ%2BHwgtVBM%2FWx2b&X-Amz-Signature=627b0a32ec8f350bd08f076e469736c04327795b7c88be34a0ec3379ba5c2698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWPVGQG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCgsBzR%2FJIS8VNuTNXecnpX0f6ZaWWDhbMfWZ55BbVCoAIhAJNhHTi4KTEtswHaMtpBT8JrYblmKzH8ZMbex9wOBkQlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5WO9gLNtsh0sioM0q3AOX%2F9pPfhoxMByzjozvja0HkJ9Oqf25Egn9dVqboQHGSc%2FuyMpYhNnPQoRH98qKCx1qw99cS%2BW%2BLkyrJ0YBgqnakazmox0veho1LzqjGb%2F5k7GyTKTPJm%2BR3%2FajnVFi9C0KsVMZ8HiL1SOLbK9oAoFzCMSe%2Fe7Nrj3%2B0EtUbLaJzs2rJid5k2j01qUybNhDROOB%2Bs58Tb30%2FTNn0NmfgIdKyvDubYheJFXgwRE%2BSeeC9ZlkRQdBepWLKUs6JPDrt11%2FXJq7Dr1NiId0ejHoTqKZOhekVqhAgHYzVU5BO0EudCfWLQtUH4VTYSztG27Hrd0MrC0shDU9RPMFgD1QQPAFqHyh3He%2Bcyjq03%2BFpiGnWEITVzVH67SwTer5yN3WLJqoXvKEnhfbjx1WNWKdNQ2ez%2FUpwxX0eqxcnNTndwXL38us%2BOISaV24blWVY6l6leNb4yWJ89TN8BJvdqLuk9DVFQOpGTItcN2QhOmSITf3QoJvKDEHYwcpkXQXXUv4Pf2YDO%2By4nefsSVU7PxpQtOQg0Y3RBAAyUT5XxzxQl1QC%2FjUi%2BYEJUFIetT%2B7hLx3pib7ryIY8tgPicyyLsUCEoxtlOZXFxxNnlrqnvpanL9zO%2FURhtHN%2FcYcComADDT49HEBjqkAd%2FNVRvHEU%2FwCAvIaAFibUIdKyeC4bxGbpNPX5ZV8x5esg3d8WRbSzqYBlpd%2BuYCS1OiTw9%2FteASZEe7v6zb5rl94Z6WRGxAo899RKn77%2BPQmQzvb7zaDqVQKoIrN9ZQQBKoLY94B%2BxmBBbFou5HHj4stKZmrprvlq2JPOeTT5fvGR2bM1f29KrjKoNnYBacJegIOffpNosZibZ%2BHwgtVBM%2FWx2b&X-Amz-Signature=6d411ea0679f42ee8e12055a4bef15b378c7c2f562c760b7d2da7be3ba2699e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWPVGQG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCgsBzR%2FJIS8VNuTNXecnpX0f6ZaWWDhbMfWZ55BbVCoAIhAJNhHTi4KTEtswHaMtpBT8JrYblmKzH8ZMbex9wOBkQlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5WO9gLNtsh0sioM0q3AOX%2F9pPfhoxMByzjozvja0HkJ9Oqf25Egn9dVqboQHGSc%2FuyMpYhNnPQoRH98qKCx1qw99cS%2BW%2BLkyrJ0YBgqnakazmox0veho1LzqjGb%2F5k7GyTKTPJm%2BR3%2FajnVFi9C0KsVMZ8HiL1SOLbK9oAoFzCMSe%2Fe7Nrj3%2B0EtUbLaJzs2rJid5k2j01qUybNhDROOB%2Bs58Tb30%2FTNn0NmfgIdKyvDubYheJFXgwRE%2BSeeC9ZlkRQdBepWLKUs6JPDrt11%2FXJq7Dr1NiId0ejHoTqKZOhekVqhAgHYzVU5BO0EudCfWLQtUH4VTYSztG27Hrd0MrC0shDU9RPMFgD1QQPAFqHyh3He%2Bcyjq03%2BFpiGnWEITVzVH67SwTer5yN3WLJqoXvKEnhfbjx1WNWKdNQ2ez%2FUpwxX0eqxcnNTndwXL38us%2BOISaV24blWVY6l6leNb4yWJ89TN8BJvdqLuk9DVFQOpGTItcN2QhOmSITf3QoJvKDEHYwcpkXQXXUv4Pf2YDO%2By4nefsSVU7PxpQtOQg0Y3RBAAyUT5XxzxQl1QC%2FjUi%2BYEJUFIetT%2B7hLx3pib7ryIY8tgPicyyLsUCEoxtlOZXFxxNnlrqnvpanL9zO%2FURhtHN%2FcYcComADDT49HEBjqkAd%2FNVRvHEU%2FwCAvIaAFibUIdKyeC4bxGbpNPX5ZV8x5esg3d8WRbSzqYBlpd%2BuYCS1OiTw9%2FteASZEe7v6zb5rl94Z6WRGxAo899RKn77%2BPQmQzvb7zaDqVQKoIrN9ZQQBKoLY94B%2BxmBBbFou5HHj4stKZmrprvlq2JPOeTT5fvGR2bM1f29KrjKoNnYBacJegIOffpNosZibZ%2BHwgtVBM%2FWx2b&X-Amz-Signature=c181a74f1217952d476e347048d1eddf0f44d1b7b16674503361dcceae73726e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWPVGQG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCgsBzR%2FJIS8VNuTNXecnpX0f6ZaWWDhbMfWZ55BbVCoAIhAJNhHTi4KTEtswHaMtpBT8JrYblmKzH8ZMbex9wOBkQlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5WO9gLNtsh0sioM0q3AOX%2F9pPfhoxMByzjozvja0HkJ9Oqf25Egn9dVqboQHGSc%2FuyMpYhNnPQoRH98qKCx1qw99cS%2BW%2BLkyrJ0YBgqnakazmox0veho1LzqjGb%2F5k7GyTKTPJm%2BR3%2FajnVFi9C0KsVMZ8HiL1SOLbK9oAoFzCMSe%2Fe7Nrj3%2B0EtUbLaJzs2rJid5k2j01qUybNhDROOB%2Bs58Tb30%2FTNn0NmfgIdKyvDubYheJFXgwRE%2BSeeC9ZlkRQdBepWLKUs6JPDrt11%2FXJq7Dr1NiId0ejHoTqKZOhekVqhAgHYzVU5BO0EudCfWLQtUH4VTYSztG27Hrd0MrC0shDU9RPMFgD1QQPAFqHyh3He%2Bcyjq03%2BFpiGnWEITVzVH67SwTer5yN3WLJqoXvKEnhfbjx1WNWKdNQ2ez%2FUpwxX0eqxcnNTndwXL38us%2BOISaV24blWVY6l6leNb4yWJ89TN8BJvdqLuk9DVFQOpGTItcN2QhOmSITf3QoJvKDEHYwcpkXQXXUv4Pf2YDO%2By4nefsSVU7PxpQtOQg0Y3RBAAyUT5XxzxQl1QC%2FjUi%2BYEJUFIetT%2B7hLx3pib7ryIY8tgPicyyLsUCEoxtlOZXFxxNnlrqnvpanL9zO%2FURhtHN%2FcYcComADDT49HEBjqkAd%2FNVRvHEU%2FwCAvIaAFibUIdKyeC4bxGbpNPX5ZV8x5esg3d8WRbSzqYBlpd%2BuYCS1OiTw9%2FteASZEe7v6zb5rl94Z6WRGxAo899RKn77%2BPQmQzvb7zaDqVQKoIrN9ZQQBKoLY94B%2BxmBBbFou5HHj4stKZmrprvlq2JPOeTT5fvGR2bM1f29KrjKoNnYBacJegIOffpNosZibZ%2BHwgtVBM%2FWx2b&X-Amz-Signature=509d7e37c05e9ff8ca55c33784e3b3d36b6136d26054fda2e272e83c075ffcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWPVGQG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCgsBzR%2FJIS8VNuTNXecnpX0f6ZaWWDhbMfWZ55BbVCoAIhAJNhHTi4KTEtswHaMtpBT8JrYblmKzH8ZMbex9wOBkQlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5WO9gLNtsh0sioM0q3AOX%2F9pPfhoxMByzjozvja0HkJ9Oqf25Egn9dVqboQHGSc%2FuyMpYhNnPQoRH98qKCx1qw99cS%2BW%2BLkyrJ0YBgqnakazmox0veho1LzqjGb%2F5k7GyTKTPJm%2BR3%2FajnVFi9C0KsVMZ8HiL1SOLbK9oAoFzCMSe%2Fe7Nrj3%2B0EtUbLaJzs2rJid5k2j01qUybNhDROOB%2Bs58Tb30%2FTNn0NmfgIdKyvDubYheJFXgwRE%2BSeeC9ZlkRQdBepWLKUs6JPDrt11%2FXJq7Dr1NiId0ejHoTqKZOhekVqhAgHYzVU5BO0EudCfWLQtUH4VTYSztG27Hrd0MrC0shDU9RPMFgD1QQPAFqHyh3He%2Bcyjq03%2BFpiGnWEITVzVH67SwTer5yN3WLJqoXvKEnhfbjx1WNWKdNQ2ez%2FUpwxX0eqxcnNTndwXL38us%2BOISaV24blWVY6l6leNb4yWJ89TN8BJvdqLuk9DVFQOpGTItcN2QhOmSITf3QoJvKDEHYwcpkXQXXUv4Pf2YDO%2By4nefsSVU7PxpQtOQg0Y3RBAAyUT5XxzxQl1QC%2FjUi%2BYEJUFIetT%2B7hLx3pib7ryIY8tgPicyyLsUCEoxtlOZXFxxNnlrqnvpanL9zO%2FURhtHN%2FcYcComADDT49HEBjqkAd%2FNVRvHEU%2FwCAvIaAFibUIdKyeC4bxGbpNPX5ZV8x5esg3d8WRbSzqYBlpd%2BuYCS1OiTw9%2FteASZEe7v6zb5rl94Z6WRGxAo899RKn77%2BPQmQzvb7zaDqVQKoIrN9ZQQBKoLY94B%2BxmBBbFou5HHj4stKZmrprvlq2JPOeTT5fvGR2bM1f29KrjKoNnYBacJegIOffpNosZibZ%2BHwgtVBM%2FWx2b&X-Amz-Signature=8ccba679dac983560b2437a4ab5bf06da3f3d08d32d240048233814d5a354c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

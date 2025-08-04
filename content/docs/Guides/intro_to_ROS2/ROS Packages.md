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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKROAZAF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIADoAkOJA7Vd4NXTCDnV%2BW%2Bwcg5NX3BfLjpWO9Mfz%2BSRAiADsFghyuWRBcd9aGm81kIgKOPriGlSo52pPJ92T28uHir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkMkL%2FUobjAt9aM3%2BKtwDuzKZj0%2FbgNjDhyGMZGuXKW2vbZeOio0x%2BSl6iV0tBCXx4hfZMfiBzEICwbjrTjp8TMw0g1wmejEUNf8c7bpqXICD1F%2F4Sn5T8MbxQOrbsyw%2BJgc43dYr73nWUw%2BJjq3LHfdFTMtbAi%2FJPQbXppldyY8CloxJ78d%2BQN9dBPfLnIVUnpD1QjpDbN0ubeHiyg8sY1Oj1YDF9oh8PNR1WBlRfsPm6VMWuEX0UGpbeU1wIy%2FfsIHT2uB8%2Bom6AuIhMzlSWVZhN4Qf4qWubfOfApSR9TyliJo7xzGS%2BUtvhZ54kyOLQpD%2BmfXG5d%2FcaH5JGKw6Jx2EtW6Sh1pAHmQx2uyHMRz1Ev82FIiA7xixK2B4msW0bMKWA%2BncRdhpDBcPuv2dpRkX6%2F%2F9auv86CtnJIdf%2BnV%2BGh0YkFlmXGyE2VuiM8SZ7fdSqTgWahQ7NtnnYfdZlD7zGIcAEuHNwomz89KEuF%2BU1TjlsDpiM9uPH7%2Bt1WZff0OdAf5NaKFoV9x60timrkrTtm5GvRWz%2BejKl3yMt3TEvl6frLhni54166JbncoHsm9ARhSa%2BgafvlHFckBivtas4oo7tbeYRB00AfwhVWKAnFNtSS7g446yMFftMh%2Foy%2BGSZ%2FV15cL3YBcwhafCxAY6pgFZ1IoLCYH7uVcSmhT6OC8gIDMqIMjgkJ8BSs3Bo8kvSqLsXaQ72vu5bt%2B2LKCbnaitO0WQkvjLE3O0EbDecv17I20V5QmO4VFGTtISp4EvD6%2BniotUGaT1sH3kgQnzGuVIXs081GaSKlS6abWPzgoD5LV8tcUclu34J6ckVRhhSzCMYo%2FT6KK1yPRDPv1GVQJKkyuJP4yYdnVzY8tvtQh%2FJVLw2XvF&X-Amz-Signature=382dc916d610cb40516a07ad0887d21efae37cf11cb2736a834d3dd197b79b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKROAZAF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIADoAkOJA7Vd4NXTCDnV%2BW%2Bwcg5NX3BfLjpWO9Mfz%2BSRAiADsFghyuWRBcd9aGm81kIgKOPriGlSo52pPJ92T28uHir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkMkL%2FUobjAt9aM3%2BKtwDuzKZj0%2FbgNjDhyGMZGuXKW2vbZeOio0x%2BSl6iV0tBCXx4hfZMfiBzEICwbjrTjp8TMw0g1wmejEUNf8c7bpqXICD1F%2F4Sn5T8MbxQOrbsyw%2BJgc43dYr73nWUw%2BJjq3LHfdFTMtbAi%2FJPQbXppldyY8CloxJ78d%2BQN9dBPfLnIVUnpD1QjpDbN0ubeHiyg8sY1Oj1YDF9oh8PNR1WBlRfsPm6VMWuEX0UGpbeU1wIy%2FfsIHT2uB8%2Bom6AuIhMzlSWVZhN4Qf4qWubfOfApSR9TyliJo7xzGS%2BUtvhZ54kyOLQpD%2BmfXG5d%2FcaH5JGKw6Jx2EtW6Sh1pAHmQx2uyHMRz1Ev82FIiA7xixK2B4msW0bMKWA%2BncRdhpDBcPuv2dpRkX6%2F%2F9auv86CtnJIdf%2BnV%2BGh0YkFlmXGyE2VuiM8SZ7fdSqTgWahQ7NtnnYfdZlD7zGIcAEuHNwomz89KEuF%2BU1TjlsDpiM9uPH7%2Bt1WZff0OdAf5NaKFoV9x60timrkrTtm5GvRWz%2BejKl3yMt3TEvl6frLhni54166JbncoHsm9ARhSa%2BgafvlHFckBivtas4oo7tbeYRB00AfwhVWKAnFNtSS7g446yMFftMh%2Foy%2BGSZ%2FV15cL3YBcwhafCxAY6pgFZ1IoLCYH7uVcSmhT6OC8gIDMqIMjgkJ8BSs3Bo8kvSqLsXaQ72vu5bt%2B2LKCbnaitO0WQkvjLE3O0EbDecv17I20V5QmO4VFGTtISp4EvD6%2BniotUGaT1sH3kgQnzGuVIXs081GaSKlS6abWPzgoD5LV8tcUclu34J6ckVRhhSzCMYo%2FT6KK1yPRDPv1GVQJKkyuJP4yYdnVzY8tvtQh%2FJVLw2XvF&X-Amz-Signature=f44167fd25a6e2a6de6fbf7d5903b9162ea463addd1ced67b843fcd0161c522a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKROAZAF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIADoAkOJA7Vd4NXTCDnV%2BW%2Bwcg5NX3BfLjpWO9Mfz%2BSRAiADsFghyuWRBcd9aGm81kIgKOPriGlSo52pPJ92T28uHir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkMkL%2FUobjAt9aM3%2BKtwDuzKZj0%2FbgNjDhyGMZGuXKW2vbZeOio0x%2BSl6iV0tBCXx4hfZMfiBzEICwbjrTjp8TMw0g1wmejEUNf8c7bpqXICD1F%2F4Sn5T8MbxQOrbsyw%2BJgc43dYr73nWUw%2BJjq3LHfdFTMtbAi%2FJPQbXppldyY8CloxJ78d%2BQN9dBPfLnIVUnpD1QjpDbN0ubeHiyg8sY1Oj1YDF9oh8PNR1WBlRfsPm6VMWuEX0UGpbeU1wIy%2FfsIHT2uB8%2Bom6AuIhMzlSWVZhN4Qf4qWubfOfApSR9TyliJo7xzGS%2BUtvhZ54kyOLQpD%2BmfXG5d%2FcaH5JGKw6Jx2EtW6Sh1pAHmQx2uyHMRz1Ev82FIiA7xixK2B4msW0bMKWA%2BncRdhpDBcPuv2dpRkX6%2F%2F9auv86CtnJIdf%2BnV%2BGh0YkFlmXGyE2VuiM8SZ7fdSqTgWahQ7NtnnYfdZlD7zGIcAEuHNwomz89KEuF%2BU1TjlsDpiM9uPH7%2Bt1WZff0OdAf5NaKFoV9x60timrkrTtm5GvRWz%2BejKl3yMt3TEvl6frLhni54166JbncoHsm9ARhSa%2BgafvlHFckBivtas4oo7tbeYRB00AfwhVWKAnFNtSS7g446yMFftMh%2Foy%2BGSZ%2FV15cL3YBcwhafCxAY6pgFZ1IoLCYH7uVcSmhT6OC8gIDMqIMjgkJ8BSs3Bo8kvSqLsXaQ72vu5bt%2B2LKCbnaitO0WQkvjLE3O0EbDecv17I20V5QmO4VFGTtISp4EvD6%2BniotUGaT1sH3kgQnzGuVIXs081GaSKlS6abWPzgoD5LV8tcUclu34J6ckVRhhSzCMYo%2FT6KK1yPRDPv1GVQJKkyuJP4yYdnVzY8tvtQh%2FJVLw2XvF&X-Amz-Signature=b6b12887319b3129853711eedf2f32fefd7495ff8b44ff495f87fd59132d2d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKROAZAF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIADoAkOJA7Vd4NXTCDnV%2BW%2Bwcg5NX3BfLjpWO9Mfz%2BSRAiADsFghyuWRBcd9aGm81kIgKOPriGlSo52pPJ92T28uHir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkMkL%2FUobjAt9aM3%2BKtwDuzKZj0%2FbgNjDhyGMZGuXKW2vbZeOio0x%2BSl6iV0tBCXx4hfZMfiBzEICwbjrTjp8TMw0g1wmejEUNf8c7bpqXICD1F%2F4Sn5T8MbxQOrbsyw%2BJgc43dYr73nWUw%2BJjq3LHfdFTMtbAi%2FJPQbXppldyY8CloxJ78d%2BQN9dBPfLnIVUnpD1QjpDbN0ubeHiyg8sY1Oj1YDF9oh8PNR1WBlRfsPm6VMWuEX0UGpbeU1wIy%2FfsIHT2uB8%2Bom6AuIhMzlSWVZhN4Qf4qWubfOfApSR9TyliJo7xzGS%2BUtvhZ54kyOLQpD%2BmfXG5d%2FcaH5JGKw6Jx2EtW6Sh1pAHmQx2uyHMRz1Ev82FIiA7xixK2B4msW0bMKWA%2BncRdhpDBcPuv2dpRkX6%2F%2F9auv86CtnJIdf%2BnV%2BGh0YkFlmXGyE2VuiM8SZ7fdSqTgWahQ7NtnnYfdZlD7zGIcAEuHNwomz89KEuF%2BU1TjlsDpiM9uPH7%2Bt1WZff0OdAf5NaKFoV9x60timrkrTtm5GvRWz%2BejKl3yMt3TEvl6frLhni54166JbncoHsm9ARhSa%2BgafvlHFckBivtas4oo7tbeYRB00AfwhVWKAnFNtSS7g446yMFftMh%2Foy%2BGSZ%2FV15cL3YBcwhafCxAY6pgFZ1IoLCYH7uVcSmhT6OC8gIDMqIMjgkJ8BSs3Bo8kvSqLsXaQ72vu5bt%2B2LKCbnaitO0WQkvjLE3O0EbDecv17I20V5QmO4VFGTtISp4EvD6%2BniotUGaT1sH3kgQnzGuVIXs081GaSKlS6abWPzgoD5LV8tcUclu34J6ckVRhhSzCMYo%2FT6KK1yPRDPv1GVQJKkyuJP4yYdnVzY8tvtQh%2FJVLw2XvF&X-Amz-Signature=2321396b41e94b23f078d14ba994fdff57cf992354c9c1e2ec50ebf79dc6dace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKROAZAF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIADoAkOJA7Vd4NXTCDnV%2BW%2Bwcg5NX3BfLjpWO9Mfz%2BSRAiADsFghyuWRBcd9aGm81kIgKOPriGlSo52pPJ92T28uHir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkMkL%2FUobjAt9aM3%2BKtwDuzKZj0%2FbgNjDhyGMZGuXKW2vbZeOio0x%2BSl6iV0tBCXx4hfZMfiBzEICwbjrTjp8TMw0g1wmejEUNf8c7bpqXICD1F%2F4Sn5T8MbxQOrbsyw%2BJgc43dYr73nWUw%2BJjq3LHfdFTMtbAi%2FJPQbXppldyY8CloxJ78d%2BQN9dBPfLnIVUnpD1QjpDbN0ubeHiyg8sY1Oj1YDF9oh8PNR1WBlRfsPm6VMWuEX0UGpbeU1wIy%2FfsIHT2uB8%2Bom6AuIhMzlSWVZhN4Qf4qWubfOfApSR9TyliJo7xzGS%2BUtvhZ54kyOLQpD%2BmfXG5d%2FcaH5JGKw6Jx2EtW6Sh1pAHmQx2uyHMRz1Ev82FIiA7xixK2B4msW0bMKWA%2BncRdhpDBcPuv2dpRkX6%2F%2F9auv86CtnJIdf%2BnV%2BGh0YkFlmXGyE2VuiM8SZ7fdSqTgWahQ7NtnnYfdZlD7zGIcAEuHNwomz89KEuF%2BU1TjlsDpiM9uPH7%2Bt1WZff0OdAf5NaKFoV9x60timrkrTtm5GvRWz%2BejKl3yMt3TEvl6frLhni54166JbncoHsm9ARhSa%2BgafvlHFckBivtas4oo7tbeYRB00AfwhVWKAnFNtSS7g446yMFftMh%2Foy%2BGSZ%2FV15cL3YBcwhafCxAY6pgFZ1IoLCYH7uVcSmhT6OC8gIDMqIMjgkJ8BSs3Bo8kvSqLsXaQ72vu5bt%2B2LKCbnaitO0WQkvjLE3O0EbDecv17I20V5QmO4VFGTtISp4EvD6%2BniotUGaT1sH3kgQnzGuVIXs081GaSKlS6abWPzgoD5LV8tcUclu34J6ckVRhhSzCMYo%2FT6KK1yPRDPv1GVQJKkyuJP4yYdnVzY8tvtQh%2FJVLw2XvF&X-Amz-Signature=5866308a7f46bb3cd8b3df3a3e99224ae9776fa9a83481250863a8b9774b0927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKROAZAF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIADoAkOJA7Vd4NXTCDnV%2BW%2Bwcg5NX3BfLjpWO9Mfz%2BSRAiADsFghyuWRBcd9aGm81kIgKOPriGlSo52pPJ92T28uHir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkMkL%2FUobjAt9aM3%2BKtwDuzKZj0%2FbgNjDhyGMZGuXKW2vbZeOio0x%2BSl6iV0tBCXx4hfZMfiBzEICwbjrTjp8TMw0g1wmejEUNf8c7bpqXICD1F%2F4Sn5T8MbxQOrbsyw%2BJgc43dYr73nWUw%2BJjq3LHfdFTMtbAi%2FJPQbXppldyY8CloxJ78d%2BQN9dBPfLnIVUnpD1QjpDbN0ubeHiyg8sY1Oj1YDF9oh8PNR1WBlRfsPm6VMWuEX0UGpbeU1wIy%2FfsIHT2uB8%2Bom6AuIhMzlSWVZhN4Qf4qWubfOfApSR9TyliJo7xzGS%2BUtvhZ54kyOLQpD%2BmfXG5d%2FcaH5JGKw6Jx2EtW6Sh1pAHmQx2uyHMRz1Ev82FIiA7xixK2B4msW0bMKWA%2BncRdhpDBcPuv2dpRkX6%2F%2F9auv86CtnJIdf%2BnV%2BGh0YkFlmXGyE2VuiM8SZ7fdSqTgWahQ7NtnnYfdZlD7zGIcAEuHNwomz89KEuF%2BU1TjlsDpiM9uPH7%2Bt1WZff0OdAf5NaKFoV9x60timrkrTtm5GvRWz%2BejKl3yMt3TEvl6frLhni54166JbncoHsm9ARhSa%2BgafvlHFckBivtas4oo7tbeYRB00AfwhVWKAnFNtSS7g446yMFftMh%2Foy%2BGSZ%2FV15cL3YBcwhafCxAY6pgFZ1IoLCYH7uVcSmhT6OC8gIDMqIMjgkJ8BSs3Bo8kvSqLsXaQ72vu5bt%2B2LKCbnaitO0WQkvjLE3O0EbDecv17I20V5QmO4VFGTtISp4EvD6%2BniotUGaT1sH3kgQnzGuVIXs081GaSKlS6abWPzgoD5LV8tcUclu34J6ckVRhhSzCMYo%2FT6KK1yPRDPv1GVQJKkyuJP4yYdnVzY8tvtQh%2FJVLw2XvF&X-Amz-Signature=292fa4bfbaf0b3c7fbbd4bafe00b830042890840d26617070a3e8f90e1ee86ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKROAZAF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIADoAkOJA7Vd4NXTCDnV%2BW%2Bwcg5NX3BfLjpWO9Mfz%2BSRAiADsFghyuWRBcd9aGm81kIgKOPriGlSo52pPJ92T28uHir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkMkL%2FUobjAt9aM3%2BKtwDuzKZj0%2FbgNjDhyGMZGuXKW2vbZeOio0x%2BSl6iV0tBCXx4hfZMfiBzEICwbjrTjp8TMw0g1wmejEUNf8c7bpqXICD1F%2F4Sn5T8MbxQOrbsyw%2BJgc43dYr73nWUw%2BJjq3LHfdFTMtbAi%2FJPQbXppldyY8CloxJ78d%2BQN9dBPfLnIVUnpD1QjpDbN0ubeHiyg8sY1Oj1YDF9oh8PNR1WBlRfsPm6VMWuEX0UGpbeU1wIy%2FfsIHT2uB8%2Bom6AuIhMzlSWVZhN4Qf4qWubfOfApSR9TyliJo7xzGS%2BUtvhZ54kyOLQpD%2BmfXG5d%2FcaH5JGKw6Jx2EtW6Sh1pAHmQx2uyHMRz1Ev82FIiA7xixK2B4msW0bMKWA%2BncRdhpDBcPuv2dpRkX6%2F%2F9auv86CtnJIdf%2BnV%2BGh0YkFlmXGyE2VuiM8SZ7fdSqTgWahQ7NtnnYfdZlD7zGIcAEuHNwomz89KEuF%2BU1TjlsDpiM9uPH7%2Bt1WZff0OdAf5NaKFoV9x60timrkrTtm5GvRWz%2BejKl3yMt3TEvl6frLhni54166JbncoHsm9ARhSa%2BgafvlHFckBivtas4oo7tbeYRB00AfwhVWKAnFNtSS7g446yMFftMh%2Foy%2BGSZ%2FV15cL3YBcwhafCxAY6pgFZ1IoLCYH7uVcSmhT6OC8gIDMqIMjgkJ8BSs3Bo8kvSqLsXaQ72vu5bt%2B2LKCbnaitO0WQkvjLE3O0EbDecv17I20V5QmO4VFGTtISp4EvD6%2BniotUGaT1sH3kgQnzGuVIXs081GaSKlS6abWPzgoD5LV8tcUclu34J6ckVRhhSzCMYo%2FT6KK1yPRDPv1GVQJKkyuJP4yYdnVzY8tvtQh%2FJVLw2XvF&X-Amz-Signature=aa5f57ad58b1be5da37255164699f8e352183a7433b07a4bd1dacfc844bdd5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

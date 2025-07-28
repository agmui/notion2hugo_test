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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3IVKXE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCZIVkKUywOMChkRUGzjFBRUG9XHjXDkpHl3mwrXtL0eAIgf%2BzT2%2B%2FpXYyVExAYs%2FNuyIKjXTIYpaUyPGc5aWVlK9EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZLHgzXUzbu7lfKrircA1U%2FHFcZpv0%2F0cYClpAs4FMGK2KgLSHt8j3T%2BInOvHIy0%2FJhPTD4Yquypr3vfMeZoBSzwNbsVhc0m3i%2FtwnkH9ziFxufAIhaIzxJlJPabMQRGx8ZuUmdeKQ9ageMW7m7S9%2BOMgmVJKtr0NIF2MMvTMzIzP%2Fc3i0r7YF7I8s1M0Ru0H423IE3ZNmvppdumZTI0LZUU5kGy57SDDkG4112E16A9spL7%2Bh3x3UsD74EyVXJZfvfGYdgS5YlkGei3cVbVMPwmn%2FrIP%2Fv%2B5A%2F8hgqvvLdgcsVTDZXnaOJlzeJRF%2BecmiPvj5iCPl03FvshHr%2Bmi%2FYJ7SQPYZ01MS4nQM9EutUnM07rk04ZsQKQmVPrruMBE6kpZTV2WGPC3NCsPAqoTznGFN4SziK2friqPUlxHXttAEpb%2FXDz1Zj%2FVV6TvNVvpm5YhgQq3jbTEfUsPCjzKhq5P%2FvU3oj5HTtcup6vBNWO0hSj7QRD55s6Ew7FiRb8TSBEOayqGhkTVt2OMNwQvhRIGhuT3oEc%2F8mtzOelEbUtebhGw2npxFwrlwht%2BphzaOB49Bc0BvUTL32nIrWBnGyk9xVR%2FXROSDONRXIi%2F58oNyiG5K8YD%2FA2SDge0CD3tFtSYRom5yASg%2B2MI%2BOncQGOqUBgpz%2BQOH%2Bc7gQNoL2kqMnkLisE4OaqqjHMC%2FMN%2FTzx4WMvJpv6uXHrIBPXzZ2XKF5SPzEX0sWjyI4w7ZCu%2Fb1dm7it7G0wRexZPLlPoL1F96QRu1WvzZ08PE1DYvDDd8H2r9r5gif19YFwLWJleVqn939GLqrhXRp51aCBbnHLdNGrjjLZOdu%2FUt4JeYRU3wNq7Ct5%2BgqlXTHf0Su9vi%2F8Qw%2BNitB&X-Amz-Signature=d2b9bdd5f9d243ef977ec594ed6f30b2806dbf70fbd7d16abe71851b5a2c7e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3IVKXE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCZIVkKUywOMChkRUGzjFBRUG9XHjXDkpHl3mwrXtL0eAIgf%2BzT2%2B%2FpXYyVExAYs%2FNuyIKjXTIYpaUyPGc5aWVlK9EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZLHgzXUzbu7lfKrircA1U%2FHFcZpv0%2F0cYClpAs4FMGK2KgLSHt8j3T%2BInOvHIy0%2FJhPTD4Yquypr3vfMeZoBSzwNbsVhc0m3i%2FtwnkH9ziFxufAIhaIzxJlJPabMQRGx8ZuUmdeKQ9ageMW7m7S9%2BOMgmVJKtr0NIF2MMvTMzIzP%2Fc3i0r7YF7I8s1M0Ru0H423IE3ZNmvppdumZTI0LZUU5kGy57SDDkG4112E16A9spL7%2Bh3x3UsD74EyVXJZfvfGYdgS5YlkGei3cVbVMPwmn%2FrIP%2Fv%2B5A%2F8hgqvvLdgcsVTDZXnaOJlzeJRF%2BecmiPvj5iCPl03FvshHr%2Bmi%2FYJ7SQPYZ01MS4nQM9EutUnM07rk04ZsQKQmVPrruMBE6kpZTV2WGPC3NCsPAqoTznGFN4SziK2friqPUlxHXttAEpb%2FXDz1Zj%2FVV6TvNVvpm5YhgQq3jbTEfUsPCjzKhq5P%2FvU3oj5HTtcup6vBNWO0hSj7QRD55s6Ew7FiRb8TSBEOayqGhkTVt2OMNwQvhRIGhuT3oEc%2F8mtzOelEbUtebhGw2npxFwrlwht%2BphzaOB49Bc0BvUTL32nIrWBnGyk9xVR%2FXROSDONRXIi%2F58oNyiG5K8YD%2FA2SDge0CD3tFtSYRom5yASg%2B2MI%2BOncQGOqUBgpz%2BQOH%2Bc7gQNoL2kqMnkLisE4OaqqjHMC%2FMN%2FTzx4WMvJpv6uXHrIBPXzZ2XKF5SPzEX0sWjyI4w7ZCu%2Fb1dm7it7G0wRexZPLlPoL1F96QRu1WvzZ08PE1DYvDDd8H2r9r5gif19YFwLWJleVqn939GLqrhXRp51aCBbnHLdNGrjjLZOdu%2FUt4JeYRU3wNq7Ct5%2BgqlXTHf0Su9vi%2F8Qw%2BNitB&X-Amz-Signature=dadfb33e6480513e41ef2dd15c7d0b2ece2a086dbb8ff0500a08ba2b2b07e0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3IVKXE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCZIVkKUywOMChkRUGzjFBRUG9XHjXDkpHl3mwrXtL0eAIgf%2BzT2%2B%2FpXYyVExAYs%2FNuyIKjXTIYpaUyPGc5aWVlK9EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZLHgzXUzbu7lfKrircA1U%2FHFcZpv0%2F0cYClpAs4FMGK2KgLSHt8j3T%2BInOvHIy0%2FJhPTD4Yquypr3vfMeZoBSzwNbsVhc0m3i%2FtwnkH9ziFxufAIhaIzxJlJPabMQRGx8ZuUmdeKQ9ageMW7m7S9%2BOMgmVJKtr0NIF2MMvTMzIzP%2Fc3i0r7YF7I8s1M0Ru0H423IE3ZNmvppdumZTI0LZUU5kGy57SDDkG4112E16A9spL7%2Bh3x3UsD74EyVXJZfvfGYdgS5YlkGei3cVbVMPwmn%2FrIP%2Fv%2B5A%2F8hgqvvLdgcsVTDZXnaOJlzeJRF%2BecmiPvj5iCPl03FvshHr%2Bmi%2FYJ7SQPYZ01MS4nQM9EutUnM07rk04ZsQKQmVPrruMBE6kpZTV2WGPC3NCsPAqoTznGFN4SziK2friqPUlxHXttAEpb%2FXDz1Zj%2FVV6TvNVvpm5YhgQq3jbTEfUsPCjzKhq5P%2FvU3oj5HTtcup6vBNWO0hSj7QRD55s6Ew7FiRb8TSBEOayqGhkTVt2OMNwQvhRIGhuT3oEc%2F8mtzOelEbUtebhGw2npxFwrlwht%2BphzaOB49Bc0BvUTL32nIrWBnGyk9xVR%2FXROSDONRXIi%2F58oNyiG5K8YD%2FA2SDge0CD3tFtSYRom5yASg%2B2MI%2BOncQGOqUBgpz%2BQOH%2Bc7gQNoL2kqMnkLisE4OaqqjHMC%2FMN%2FTzx4WMvJpv6uXHrIBPXzZ2XKF5SPzEX0sWjyI4w7ZCu%2Fb1dm7it7G0wRexZPLlPoL1F96QRu1WvzZ08PE1DYvDDd8H2r9r5gif19YFwLWJleVqn939GLqrhXRp51aCBbnHLdNGrjjLZOdu%2FUt4JeYRU3wNq7Ct5%2BgqlXTHf0Su9vi%2F8Qw%2BNitB&X-Amz-Signature=e246fc9425e66d03d417407a58296f025d55c1b21d95bf36594d97a7c9d1f2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3IVKXE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCZIVkKUywOMChkRUGzjFBRUG9XHjXDkpHl3mwrXtL0eAIgf%2BzT2%2B%2FpXYyVExAYs%2FNuyIKjXTIYpaUyPGc5aWVlK9EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZLHgzXUzbu7lfKrircA1U%2FHFcZpv0%2F0cYClpAs4FMGK2KgLSHt8j3T%2BInOvHIy0%2FJhPTD4Yquypr3vfMeZoBSzwNbsVhc0m3i%2FtwnkH9ziFxufAIhaIzxJlJPabMQRGx8ZuUmdeKQ9ageMW7m7S9%2BOMgmVJKtr0NIF2MMvTMzIzP%2Fc3i0r7YF7I8s1M0Ru0H423IE3ZNmvppdumZTI0LZUU5kGy57SDDkG4112E16A9spL7%2Bh3x3UsD74EyVXJZfvfGYdgS5YlkGei3cVbVMPwmn%2FrIP%2Fv%2B5A%2F8hgqvvLdgcsVTDZXnaOJlzeJRF%2BecmiPvj5iCPl03FvshHr%2Bmi%2FYJ7SQPYZ01MS4nQM9EutUnM07rk04ZsQKQmVPrruMBE6kpZTV2WGPC3NCsPAqoTznGFN4SziK2friqPUlxHXttAEpb%2FXDz1Zj%2FVV6TvNVvpm5YhgQq3jbTEfUsPCjzKhq5P%2FvU3oj5HTtcup6vBNWO0hSj7QRD55s6Ew7FiRb8TSBEOayqGhkTVt2OMNwQvhRIGhuT3oEc%2F8mtzOelEbUtebhGw2npxFwrlwht%2BphzaOB49Bc0BvUTL32nIrWBnGyk9xVR%2FXROSDONRXIi%2F58oNyiG5K8YD%2FA2SDge0CD3tFtSYRom5yASg%2B2MI%2BOncQGOqUBgpz%2BQOH%2Bc7gQNoL2kqMnkLisE4OaqqjHMC%2FMN%2FTzx4WMvJpv6uXHrIBPXzZ2XKF5SPzEX0sWjyI4w7ZCu%2Fb1dm7it7G0wRexZPLlPoL1F96QRu1WvzZ08PE1DYvDDd8H2r9r5gif19YFwLWJleVqn939GLqrhXRp51aCBbnHLdNGrjjLZOdu%2FUt4JeYRU3wNq7Ct5%2BgqlXTHf0Su9vi%2F8Qw%2BNitB&X-Amz-Signature=e12f15fe209fdad715d0619dd34c6f9a760dcd93b277e46a0ff12399b5a49352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3IVKXE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCZIVkKUywOMChkRUGzjFBRUG9XHjXDkpHl3mwrXtL0eAIgf%2BzT2%2B%2FpXYyVExAYs%2FNuyIKjXTIYpaUyPGc5aWVlK9EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZLHgzXUzbu7lfKrircA1U%2FHFcZpv0%2F0cYClpAs4FMGK2KgLSHt8j3T%2BInOvHIy0%2FJhPTD4Yquypr3vfMeZoBSzwNbsVhc0m3i%2FtwnkH9ziFxufAIhaIzxJlJPabMQRGx8ZuUmdeKQ9ageMW7m7S9%2BOMgmVJKtr0NIF2MMvTMzIzP%2Fc3i0r7YF7I8s1M0Ru0H423IE3ZNmvppdumZTI0LZUU5kGy57SDDkG4112E16A9spL7%2Bh3x3UsD74EyVXJZfvfGYdgS5YlkGei3cVbVMPwmn%2FrIP%2Fv%2B5A%2F8hgqvvLdgcsVTDZXnaOJlzeJRF%2BecmiPvj5iCPl03FvshHr%2Bmi%2FYJ7SQPYZ01MS4nQM9EutUnM07rk04ZsQKQmVPrruMBE6kpZTV2WGPC3NCsPAqoTznGFN4SziK2friqPUlxHXttAEpb%2FXDz1Zj%2FVV6TvNVvpm5YhgQq3jbTEfUsPCjzKhq5P%2FvU3oj5HTtcup6vBNWO0hSj7QRD55s6Ew7FiRb8TSBEOayqGhkTVt2OMNwQvhRIGhuT3oEc%2F8mtzOelEbUtebhGw2npxFwrlwht%2BphzaOB49Bc0BvUTL32nIrWBnGyk9xVR%2FXROSDONRXIi%2F58oNyiG5K8YD%2FA2SDge0CD3tFtSYRom5yASg%2B2MI%2BOncQGOqUBgpz%2BQOH%2Bc7gQNoL2kqMnkLisE4OaqqjHMC%2FMN%2FTzx4WMvJpv6uXHrIBPXzZ2XKF5SPzEX0sWjyI4w7ZCu%2Fb1dm7it7G0wRexZPLlPoL1F96QRu1WvzZ08PE1DYvDDd8H2r9r5gif19YFwLWJleVqn939GLqrhXRp51aCBbnHLdNGrjjLZOdu%2FUt4JeYRU3wNq7Ct5%2BgqlXTHf0Su9vi%2F8Qw%2BNitB&X-Amz-Signature=a2e1629c6bc9681bc456eec05414130604ef7ddc85598a0907c774ac5d31660f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3IVKXE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCZIVkKUywOMChkRUGzjFBRUG9XHjXDkpHl3mwrXtL0eAIgf%2BzT2%2B%2FpXYyVExAYs%2FNuyIKjXTIYpaUyPGc5aWVlK9EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZLHgzXUzbu7lfKrircA1U%2FHFcZpv0%2F0cYClpAs4FMGK2KgLSHt8j3T%2BInOvHIy0%2FJhPTD4Yquypr3vfMeZoBSzwNbsVhc0m3i%2FtwnkH9ziFxufAIhaIzxJlJPabMQRGx8ZuUmdeKQ9ageMW7m7S9%2BOMgmVJKtr0NIF2MMvTMzIzP%2Fc3i0r7YF7I8s1M0Ru0H423IE3ZNmvppdumZTI0LZUU5kGy57SDDkG4112E16A9spL7%2Bh3x3UsD74EyVXJZfvfGYdgS5YlkGei3cVbVMPwmn%2FrIP%2Fv%2B5A%2F8hgqvvLdgcsVTDZXnaOJlzeJRF%2BecmiPvj5iCPl03FvshHr%2Bmi%2FYJ7SQPYZ01MS4nQM9EutUnM07rk04ZsQKQmVPrruMBE6kpZTV2WGPC3NCsPAqoTznGFN4SziK2friqPUlxHXttAEpb%2FXDz1Zj%2FVV6TvNVvpm5YhgQq3jbTEfUsPCjzKhq5P%2FvU3oj5HTtcup6vBNWO0hSj7QRD55s6Ew7FiRb8TSBEOayqGhkTVt2OMNwQvhRIGhuT3oEc%2F8mtzOelEbUtebhGw2npxFwrlwht%2BphzaOB49Bc0BvUTL32nIrWBnGyk9xVR%2FXROSDONRXIi%2F58oNyiG5K8YD%2FA2SDge0CD3tFtSYRom5yASg%2B2MI%2BOncQGOqUBgpz%2BQOH%2Bc7gQNoL2kqMnkLisE4OaqqjHMC%2FMN%2FTzx4WMvJpv6uXHrIBPXzZ2XKF5SPzEX0sWjyI4w7ZCu%2Fb1dm7it7G0wRexZPLlPoL1F96QRu1WvzZ08PE1DYvDDd8H2r9r5gif19YFwLWJleVqn939GLqrhXRp51aCBbnHLdNGrjjLZOdu%2FUt4JeYRU3wNq7Ct5%2BgqlXTHf0Su9vi%2F8Qw%2BNitB&X-Amz-Signature=1f41e1224779fe1b7dc420604074427ae7cff1f1d7cb4244237273dbac0cae44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3IVKXE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCZIVkKUywOMChkRUGzjFBRUG9XHjXDkpHl3mwrXtL0eAIgf%2BzT2%2B%2FpXYyVExAYs%2FNuyIKjXTIYpaUyPGc5aWVlK9EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZLHgzXUzbu7lfKrircA1U%2FHFcZpv0%2F0cYClpAs4FMGK2KgLSHt8j3T%2BInOvHIy0%2FJhPTD4Yquypr3vfMeZoBSzwNbsVhc0m3i%2FtwnkH9ziFxufAIhaIzxJlJPabMQRGx8ZuUmdeKQ9ageMW7m7S9%2BOMgmVJKtr0NIF2MMvTMzIzP%2Fc3i0r7YF7I8s1M0Ru0H423IE3ZNmvppdumZTI0LZUU5kGy57SDDkG4112E16A9spL7%2Bh3x3UsD74EyVXJZfvfGYdgS5YlkGei3cVbVMPwmn%2FrIP%2Fv%2B5A%2F8hgqvvLdgcsVTDZXnaOJlzeJRF%2BecmiPvj5iCPl03FvshHr%2Bmi%2FYJ7SQPYZ01MS4nQM9EutUnM07rk04ZsQKQmVPrruMBE6kpZTV2WGPC3NCsPAqoTznGFN4SziK2friqPUlxHXttAEpb%2FXDz1Zj%2FVV6TvNVvpm5YhgQq3jbTEfUsPCjzKhq5P%2FvU3oj5HTtcup6vBNWO0hSj7QRD55s6Ew7FiRb8TSBEOayqGhkTVt2OMNwQvhRIGhuT3oEc%2F8mtzOelEbUtebhGw2npxFwrlwht%2BphzaOB49Bc0BvUTL32nIrWBnGyk9xVR%2FXROSDONRXIi%2F58oNyiG5K8YD%2FA2SDge0CD3tFtSYRom5yASg%2B2MI%2BOncQGOqUBgpz%2BQOH%2Bc7gQNoL2kqMnkLisE4OaqqjHMC%2FMN%2FTzx4WMvJpv6uXHrIBPXzZ2XKF5SPzEX0sWjyI4w7ZCu%2Fb1dm7it7G0wRexZPLlPoL1F96QRu1WvzZ08PE1DYvDDd8H2r9r5gif19YFwLWJleVqn939GLqrhXRp51aCBbnHLdNGrjjLZOdu%2FUt4JeYRU3wNq7Ct5%2BgqlXTHf0Su9vi%2F8Qw%2BNitB&X-Amz-Signature=8a08b7711cfab7b88fcf5415cefdc03d6632fb00984aad16029bf953f79bea95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

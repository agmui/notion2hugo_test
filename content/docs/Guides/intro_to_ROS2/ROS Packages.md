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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D76KXCL%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCKuN3%2BlMqP1sVf7%2Fqoo1dH4BHwln6xPayDiUe1AOeGFgIhAJXyKVesaUfvm24J7nDfSx4KbEmI9Z0%2BbACcAaScpiKWKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNIKkQRHTVL6k7AEq3AOFTibEnbAQuhCJb6QF4NFsvPjzkETNtkEsbLI1eeutTkoMwM5PWlY%2B5vZBtTRuxwi26gvgOpsR5UqjxXaKPWP4U2R8Goy%2FLDnXaiLxQ51TstX18g6M7xoqSwQQFhBMZjNZVSzZN45LkXo%2BoRbeigP41przp65RfnLrRfyW8Gaicmn%2F4upyemcj8g2kVimq50iFQHRlVcidBACHChjFk4lTJ0F5JXI9Syi89w%2FjwqHmSnbZwceuxz6CGfWOld0doAuFxPPzVJkLR6o4%2FWyZ7YaHd8muBgLYd4A2q2P7M6jHgqz43jxk6MriOEBz7BvGywQZ2MJ19KF6XEySVy98BGxqFRBbNxq6Z0wKa5AEEozSLKwh5abfRSb4BWQ%2B77f4dwXHtl%2BvGsPGhDvbNis%2Fw%2Bl8of2CgtgHuHIl0rjdRON0g%2FdtAXSSkTWSCUYnUj5DrlT%2BGVimW4JFCmN4N5pVVLvAa%2Fn8mQlGlKcNBI3kc1iiQd4DfHs5NR0lTtIXxoWMc7m3pyd9MWdrsed81WUEF%2FWzE1MPHlVvgzzOF7EuV3rh2lnm8a1vGMg0IMgGnQPyWwBscaxc1NZ1Y0g1ft%2BBIU0bdWbdGMO%2F775kG4wYkMvya32Hp38jwuVFB6DEojCcp4rQBjqkAQQXWfGLaBX4FICd7Zkqd%2BP3Hbgg4pIZRPP12zCcdzxO%2F24HAe8OALCcjK%2FLa9d9EQdHtF7y0hiffoGqMENn6o%2FSoYAPY5qAo1Alw8h5p%2BHjd6wg3l%2BJkZg%2FxFJWJ2t7ifbSfVMFgeop%2B5UkTQxUiejAxIGpNm1kOqciI4osqrJ%2FQHkr9Ght9qdppGtsaGTqLFtmaIMnM38B1NB0I0e9efeSZMTI&X-Amz-Signature=3fc3320d97f93811a2d89a52ceed9194be3dcd2f975838fe3def51e3bfe2bf44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D76KXCL%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCKuN3%2BlMqP1sVf7%2Fqoo1dH4BHwln6xPayDiUe1AOeGFgIhAJXyKVesaUfvm24J7nDfSx4KbEmI9Z0%2BbACcAaScpiKWKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNIKkQRHTVL6k7AEq3AOFTibEnbAQuhCJb6QF4NFsvPjzkETNtkEsbLI1eeutTkoMwM5PWlY%2B5vZBtTRuxwi26gvgOpsR5UqjxXaKPWP4U2R8Goy%2FLDnXaiLxQ51TstX18g6M7xoqSwQQFhBMZjNZVSzZN45LkXo%2BoRbeigP41przp65RfnLrRfyW8Gaicmn%2F4upyemcj8g2kVimq50iFQHRlVcidBACHChjFk4lTJ0F5JXI9Syi89w%2FjwqHmSnbZwceuxz6CGfWOld0doAuFxPPzVJkLR6o4%2FWyZ7YaHd8muBgLYd4A2q2P7M6jHgqz43jxk6MriOEBz7BvGywQZ2MJ19KF6XEySVy98BGxqFRBbNxq6Z0wKa5AEEozSLKwh5abfRSb4BWQ%2B77f4dwXHtl%2BvGsPGhDvbNis%2Fw%2Bl8of2CgtgHuHIl0rjdRON0g%2FdtAXSSkTWSCUYnUj5DrlT%2BGVimW4JFCmN4N5pVVLvAa%2Fn8mQlGlKcNBI3kc1iiQd4DfHs5NR0lTtIXxoWMc7m3pyd9MWdrsed81WUEF%2FWzE1MPHlVvgzzOF7EuV3rh2lnm8a1vGMg0IMgGnQPyWwBscaxc1NZ1Y0g1ft%2BBIU0bdWbdGMO%2F775kG4wYkMvya32Hp38jwuVFB6DEojCcp4rQBjqkAQQXWfGLaBX4FICd7Zkqd%2BP3Hbgg4pIZRPP12zCcdzxO%2F24HAe8OALCcjK%2FLa9d9EQdHtF7y0hiffoGqMENn6o%2FSoYAPY5qAo1Alw8h5p%2BHjd6wg3l%2BJkZg%2FxFJWJ2t7ifbSfVMFgeop%2B5UkTQxUiejAxIGpNm1kOqciI4osqrJ%2FQHkr9Ght9qdppGtsaGTqLFtmaIMnM38B1NB0I0e9efeSZMTI&X-Amz-Signature=c723c76ea3bb25810dcd4872754711fc63d6de3002f2ad875828c73489b118a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D76KXCL%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCKuN3%2BlMqP1sVf7%2Fqoo1dH4BHwln6xPayDiUe1AOeGFgIhAJXyKVesaUfvm24J7nDfSx4KbEmI9Z0%2BbACcAaScpiKWKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNIKkQRHTVL6k7AEq3AOFTibEnbAQuhCJb6QF4NFsvPjzkETNtkEsbLI1eeutTkoMwM5PWlY%2B5vZBtTRuxwi26gvgOpsR5UqjxXaKPWP4U2R8Goy%2FLDnXaiLxQ51TstX18g6M7xoqSwQQFhBMZjNZVSzZN45LkXo%2BoRbeigP41przp65RfnLrRfyW8Gaicmn%2F4upyemcj8g2kVimq50iFQHRlVcidBACHChjFk4lTJ0F5JXI9Syi89w%2FjwqHmSnbZwceuxz6CGfWOld0doAuFxPPzVJkLR6o4%2FWyZ7YaHd8muBgLYd4A2q2P7M6jHgqz43jxk6MriOEBz7BvGywQZ2MJ19KF6XEySVy98BGxqFRBbNxq6Z0wKa5AEEozSLKwh5abfRSb4BWQ%2B77f4dwXHtl%2BvGsPGhDvbNis%2Fw%2Bl8of2CgtgHuHIl0rjdRON0g%2FdtAXSSkTWSCUYnUj5DrlT%2BGVimW4JFCmN4N5pVVLvAa%2Fn8mQlGlKcNBI3kc1iiQd4DfHs5NR0lTtIXxoWMc7m3pyd9MWdrsed81WUEF%2FWzE1MPHlVvgzzOF7EuV3rh2lnm8a1vGMg0IMgGnQPyWwBscaxc1NZ1Y0g1ft%2BBIU0bdWbdGMO%2F775kG4wYkMvya32Hp38jwuVFB6DEojCcp4rQBjqkAQQXWfGLaBX4FICd7Zkqd%2BP3Hbgg4pIZRPP12zCcdzxO%2F24HAe8OALCcjK%2FLa9d9EQdHtF7y0hiffoGqMENn6o%2FSoYAPY5qAo1Alw8h5p%2BHjd6wg3l%2BJkZg%2FxFJWJ2t7ifbSfVMFgeop%2B5UkTQxUiejAxIGpNm1kOqciI4osqrJ%2FQHkr9Ght9qdppGtsaGTqLFtmaIMnM38B1NB0I0e9efeSZMTI&X-Amz-Signature=6b1ef37b264ec7fdec38b70026af6f4a125ebb0814b38b08805e2e27c47fac5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D76KXCL%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCKuN3%2BlMqP1sVf7%2Fqoo1dH4BHwln6xPayDiUe1AOeGFgIhAJXyKVesaUfvm24J7nDfSx4KbEmI9Z0%2BbACcAaScpiKWKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNIKkQRHTVL6k7AEq3AOFTibEnbAQuhCJb6QF4NFsvPjzkETNtkEsbLI1eeutTkoMwM5PWlY%2B5vZBtTRuxwi26gvgOpsR5UqjxXaKPWP4U2R8Goy%2FLDnXaiLxQ51TstX18g6M7xoqSwQQFhBMZjNZVSzZN45LkXo%2BoRbeigP41przp65RfnLrRfyW8Gaicmn%2F4upyemcj8g2kVimq50iFQHRlVcidBACHChjFk4lTJ0F5JXI9Syi89w%2FjwqHmSnbZwceuxz6CGfWOld0doAuFxPPzVJkLR6o4%2FWyZ7YaHd8muBgLYd4A2q2P7M6jHgqz43jxk6MriOEBz7BvGywQZ2MJ19KF6XEySVy98BGxqFRBbNxq6Z0wKa5AEEozSLKwh5abfRSb4BWQ%2B77f4dwXHtl%2BvGsPGhDvbNis%2Fw%2Bl8of2CgtgHuHIl0rjdRON0g%2FdtAXSSkTWSCUYnUj5DrlT%2BGVimW4JFCmN4N5pVVLvAa%2Fn8mQlGlKcNBI3kc1iiQd4DfHs5NR0lTtIXxoWMc7m3pyd9MWdrsed81WUEF%2FWzE1MPHlVvgzzOF7EuV3rh2lnm8a1vGMg0IMgGnQPyWwBscaxc1NZ1Y0g1ft%2BBIU0bdWbdGMO%2F775kG4wYkMvya32Hp38jwuVFB6DEojCcp4rQBjqkAQQXWfGLaBX4FICd7Zkqd%2BP3Hbgg4pIZRPP12zCcdzxO%2F24HAe8OALCcjK%2FLa9d9EQdHtF7y0hiffoGqMENn6o%2FSoYAPY5qAo1Alw8h5p%2BHjd6wg3l%2BJkZg%2FxFJWJ2t7ifbSfVMFgeop%2B5UkTQxUiejAxIGpNm1kOqciI4osqrJ%2FQHkr9Ght9qdppGtsaGTqLFtmaIMnM38B1NB0I0e9efeSZMTI&X-Amz-Signature=b9d6feb7f01bbf893e60449cbe24f58610f8e44f8da989d4b59550955c3c0ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D76KXCL%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCKuN3%2BlMqP1sVf7%2Fqoo1dH4BHwln6xPayDiUe1AOeGFgIhAJXyKVesaUfvm24J7nDfSx4KbEmI9Z0%2BbACcAaScpiKWKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNIKkQRHTVL6k7AEq3AOFTibEnbAQuhCJb6QF4NFsvPjzkETNtkEsbLI1eeutTkoMwM5PWlY%2B5vZBtTRuxwi26gvgOpsR5UqjxXaKPWP4U2R8Goy%2FLDnXaiLxQ51TstX18g6M7xoqSwQQFhBMZjNZVSzZN45LkXo%2BoRbeigP41przp65RfnLrRfyW8Gaicmn%2F4upyemcj8g2kVimq50iFQHRlVcidBACHChjFk4lTJ0F5JXI9Syi89w%2FjwqHmSnbZwceuxz6CGfWOld0doAuFxPPzVJkLR6o4%2FWyZ7YaHd8muBgLYd4A2q2P7M6jHgqz43jxk6MriOEBz7BvGywQZ2MJ19KF6XEySVy98BGxqFRBbNxq6Z0wKa5AEEozSLKwh5abfRSb4BWQ%2B77f4dwXHtl%2BvGsPGhDvbNis%2Fw%2Bl8of2CgtgHuHIl0rjdRON0g%2FdtAXSSkTWSCUYnUj5DrlT%2BGVimW4JFCmN4N5pVVLvAa%2Fn8mQlGlKcNBI3kc1iiQd4DfHs5NR0lTtIXxoWMc7m3pyd9MWdrsed81WUEF%2FWzE1MPHlVvgzzOF7EuV3rh2lnm8a1vGMg0IMgGnQPyWwBscaxc1NZ1Y0g1ft%2BBIU0bdWbdGMO%2F775kG4wYkMvya32Hp38jwuVFB6DEojCcp4rQBjqkAQQXWfGLaBX4FICd7Zkqd%2BP3Hbgg4pIZRPP12zCcdzxO%2F24HAe8OALCcjK%2FLa9d9EQdHtF7y0hiffoGqMENn6o%2FSoYAPY5qAo1Alw8h5p%2BHjd6wg3l%2BJkZg%2FxFJWJ2t7ifbSfVMFgeop%2B5UkTQxUiejAxIGpNm1kOqciI4osqrJ%2FQHkr9Ght9qdppGtsaGTqLFtmaIMnM38B1NB0I0e9efeSZMTI&X-Amz-Signature=3995a130658b75f9baba7d5923fbab5e0f762d0d9819b694860118cce54adb39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D76KXCL%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCKuN3%2BlMqP1sVf7%2Fqoo1dH4BHwln6xPayDiUe1AOeGFgIhAJXyKVesaUfvm24J7nDfSx4KbEmI9Z0%2BbACcAaScpiKWKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNIKkQRHTVL6k7AEq3AOFTibEnbAQuhCJb6QF4NFsvPjzkETNtkEsbLI1eeutTkoMwM5PWlY%2B5vZBtTRuxwi26gvgOpsR5UqjxXaKPWP4U2R8Goy%2FLDnXaiLxQ51TstX18g6M7xoqSwQQFhBMZjNZVSzZN45LkXo%2BoRbeigP41przp65RfnLrRfyW8Gaicmn%2F4upyemcj8g2kVimq50iFQHRlVcidBACHChjFk4lTJ0F5JXI9Syi89w%2FjwqHmSnbZwceuxz6CGfWOld0doAuFxPPzVJkLR6o4%2FWyZ7YaHd8muBgLYd4A2q2P7M6jHgqz43jxk6MriOEBz7BvGywQZ2MJ19KF6XEySVy98BGxqFRBbNxq6Z0wKa5AEEozSLKwh5abfRSb4BWQ%2B77f4dwXHtl%2BvGsPGhDvbNis%2Fw%2Bl8of2CgtgHuHIl0rjdRON0g%2FdtAXSSkTWSCUYnUj5DrlT%2BGVimW4JFCmN4N5pVVLvAa%2Fn8mQlGlKcNBI3kc1iiQd4DfHs5NR0lTtIXxoWMc7m3pyd9MWdrsed81WUEF%2FWzE1MPHlVvgzzOF7EuV3rh2lnm8a1vGMg0IMgGnQPyWwBscaxc1NZ1Y0g1ft%2BBIU0bdWbdGMO%2F775kG4wYkMvya32Hp38jwuVFB6DEojCcp4rQBjqkAQQXWfGLaBX4FICd7Zkqd%2BP3Hbgg4pIZRPP12zCcdzxO%2F24HAe8OALCcjK%2FLa9d9EQdHtF7y0hiffoGqMENn6o%2FSoYAPY5qAo1Alw8h5p%2BHjd6wg3l%2BJkZg%2FxFJWJ2t7ifbSfVMFgeop%2B5UkTQxUiejAxIGpNm1kOqciI4osqrJ%2FQHkr9Ght9qdppGtsaGTqLFtmaIMnM38B1NB0I0e9efeSZMTI&X-Amz-Signature=124d3e705e8237bb43e41062cfe623b184ddd54bcb5fdd25e6b1dba50e0b057c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D76KXCL%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCKuN3%2BlMqP1sVf7%2Fqoo1dH4BHwln6xPayDiUe1AOeGFgIhAJXyKVesaUfvm24J7nDfSx4KbEmI9Z0%2BbACcAaScpiKWKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNIKkQRHTVL6k7AEq3AOFTibEnbAQuhCJb6QF4NFsvPjzkETNtkEsbLI1eeutTkoMwM5PWlY%2B5vZBtTRuxwi26gvgOpsR5UqjxXaKPWP4U2R8Goy%2FLDnXaiLxQ51TstX18g6M7xoqSwQQFhBMZjNZVSzZN45LkXo%2BoRbeigP41przp65RfnLrRfyW8Gaicmn%2F4upyemcj8g2kVimq50iFQHRlVcidBACHChjFk4lTJ0F5JXI9Syi89w%2FjwqHmSnbZwceuxz6CGfWOld0doAuFxPPzVJkLR6o4%2FWyZ7YaHd8muBgLYd4A2q2P7M6jHgqz43jxk6MriOEBz7BvGywQZ2MJ19KF6XEySVy98BGxqFRBbNxq6Z0wKa5AEEozSLKwh5abfRSb4BWQ%2B77f4dwXHtl%2BvGsPGhDvbNis%2Fw%2Bl8of2CgtgHuHIl0rjdRON0g%2FdtAXSSkTWSCUYnUj5DrlT%2BGVimW4JFCmN4N5pVVLvAa%2Fn8mQlGlKcNBI3kc1iiQd4DfHs5NR0lTtIXxoWMc7m3pyd9MWdrsed81WUEF%2FWzE1MPHlVvgzzOF7EuV3rh2lnm8a1vGMg0IMgGnQPyWwBscaxc1NZ1Y0g1ft%2BBIU0bdWbdGMO%2F775kG4wYkMvya32Hp38jwuVFB6DEojCcp4rQBjqkAQQXWfGLaBX4FICd7Zkqd%2BP3Hbgg4pIZRPP12zCcdzxO%2F24HAe8OALCcjK%2FLa9d9EQdHtF7y0hiffoGqMENn6o%2FSoYAPY5qAo1Alw8h5p%2BHjd6wg3l%2BJkZg%2FxFJWJ2t7ifbSfVMFgeop%2B5UkTQxUiejAxIGpNm1kOqciI4osqrJ%2FQHkr9Ght9qdppGtsaGTqLFtmaIMnM38B1NB0I0e9efeSZMTI&X-Amz-Signature=50f5f7725348a3ceb7f0bf8d975e9728007d857a2926f1fd1e39cc50ee7e2002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

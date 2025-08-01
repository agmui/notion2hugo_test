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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7EMT5H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXy%2B4zNUcH832qutzmQnCoQkmYRpvdCLdgvch99CXJpQIgW7J%2FdlZMiWDdXB4oVUOZfyR3KLkUMk1d%2BG2yKIAPeAcqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmKhZafmv%2BpckBOryrcA4Bf6CYn9l3p0j71QLg%2F8ttpVFf1bbnxPLp78RayH631LvrhLsey9vAmGICzFFUDfVPil82xICBnuDsDPymk5OKRsUIloR2H4%2FF5eyxZJMbe6QDzdO3tyqINkHisuvxFe8H0aZkZAG2OlwkawzNKPMI6e2VsZGlRqdhUtUQM9lnGZQqPmlRvrDILjIIJYzK6%2Ff6WJ7tb1U3KnWPYz7b3S3MfBJbMWWlBrpo3YEoq7ROoWqT0CcYwV9fFajOfBpLDFfqD09CbLYl4ZV1pDx5ZJoDsouK6i9uYkc1vVQsT7NiyxZel9k5mHPx8SyKJoeU8I8l9ZItSFea8EJA%2Fq4vfsnGwsK9mHCZbgAD90zTgMeksED8TqJ44Xu2GPKKSmY8IIijzYTy1fm8s8pdqr4WqnSt4TMjB7uNz9XPIsNOc9o1jitBD0%2BCgjE08DmyBcswIV%2BLfl4H3MhswhxJu8Q3wHQ%2BFMWx5A9FSGal77xk75mW0wKlNxb3JQDzKH2ng08Tj5TaFXtSyMpa5Oc52iBMhAIuntu38Yhn8Som0Oy3oki5srvbVOXE6BxNRWDbEIxP2GElZTTacIp0tGxunUhXPD7scmybdaqX%2FYcuHVgH1usuCaiOmat8yH7vS%2BHt5ML6htMQGOqUBVsumKzgCjen5cjOhuSgBQlXaM2ox%2Bok80%2Fvus5mThNDuJn8bqc9uhgtHud%2FKE%2F8V0759he6sDKYYjVSoz3XRn1HCi64TwtO4GFE4fzQCpDjiWrKSKDNa6%2BI7%2FFaHceyFXhjpIH0vIlH4SM5irxN7ceGqg2C8bqmW6yyGy7GcYmTGJmAqT0GL3AoRK3YzVLThZmLWEyK9PbF1yXhSY3h3FBPnO9nu&X-Amz-Signature=15cb856aa729eac71a57b16f5945c27f0f76a0890b3a63a3d51c10c9c5e6076c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7EMT5H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXy%2B4zNUcH832qutzmQnCoQkmYRpvdCLdgvch99CXJpQIgW7J%2FdlZMiWDdXB4oVUOZfyR3KLkUMk1d%2BG2yKIAPeAcqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmKhZafmv%2BpckBOryrcA4Bf6CYn9l3p0j71QLg%2F8ttpVFf1bbnxPLp78RayH631LvrhLsey9vAmGICzFFUDfVPil82xICBnuDsDPymk5OKRsUIloR2H4%2FF5eyxZJMbe6QDzdO3tyqINkHisuvxFe8H0aZkZAG2OlwkawzNKPMI6e2VsZGlRqdhUtUQM9lnGZQqPmlRvrDILjIIJYzK6%2Ff6WJ7tb1U3KnWPYz7b3S3MfBJbMWWlBrpo3YEoq7ROoWqT0CcYwV9fFajOfBpLDFfqD09CbLYl4ZV1pDx5ZJoDsouK6i9uYkc1vVQsT7NiyxZel9k5mHPx8SyKJoeU8I8l9ZItSFea8EJA%2Fq4vfsnGwsK9mHCZbgAD90zTgMeksED8TqJ44Xu2GPKKSmY8IIijzYTy1fm8s8pdqr4WqnSt4TMjB7uNz9XPIsNOc9o1jitBD0%2BCgjE08DmyBcswIV%2BLfl4H3MhswhxJu8Q3wHQ%2BFMWx5A9FSGal77xk75mW0wKlNxb3JQDzKH2ng08Tj5TaFXtSyMpa5Oc52iBMhAIuntu38Yhn8Som0Oy3oki5srvbVOXE6BxNRWDbEIxP2GElZTTacIp0tGxunUhXPD7scmybdaqX%2FYcuHVgH1usuCaiOmat8yH7vS%2BHt5ML6htMQGOqUBVsumKzgCjen5cjOhuSgBQlXaM2ox%2Bok80%2Fvus5mThNDuJn8bqc9uhgtHud%2FKE%2F8V0759he6sDKYYjVSoz3XRn1HCi64TwtO4GFE4fzQCpDjiWrKSKDNa6%2BI7%2FFaHceyFXhjpIH0vIlH4SM5irxN7ceGqg2C8bqmW6yyGy7GcYmTGJmAqT0GL3AoRK3YzVLThZmLWEyK9PbF1yXhSY3h3FBPnO9nu&X-Amz-Signature=14b7a5d81e3d336b204f837d732fff510ede2745ca9f666dc16fc03efe65ad9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7EMT5H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXy%2B4zNUcH832qutzmQnCoQkmYRpvdCLdgvch99CXJpQIgW7J%2FdlZMiWDdXB4oVUOZfyR3KLkUMk1d%2BG2yKIAPeAcqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmKhZafmv%2BpckBOryrcA4Bf6CYn9l3p0j71QLg%2F8ttpVFf1bbnxPLp78RayH631LvrhLsey9vAmGICzFFUDfVPil82xICBnuDsDPymk5OKRsUIloR2H4%2FF5eyxZJMbe6QDzdO3tyqINkHisuvxFe8H0aZkZAG2OlwkawzNKPMI6e2VsZGlRqdhUtUQM9lnGZQqPmlRvrDILjIIJYzK6%2Ff6WJ7tb1U3KnWPYz7b3S3MfBJbMWWlBrpo3YEoq7ROoWqT0CcYwV9fFajOfBpLDFfqD09CbLYl4ZV1pDx5ZJoDsouK6i9uYkc1vVQsT7NiyxZel9k5mHPx8SyKJoeU8I8l9ZItSFea8EJA%2Fq4vfsnGwsK9mHCZbgAD90zTgMeksED8TqJ44Xu2GPKKSmY8IIijzYTy1fm8s8pdqr4WqnSt4TMjB7uNz9XPIsNOc9o1jitBD0%2BCgjE08DmyBcswIV%2BLfl4H3MhswhxJu8Q3wHQ%2BFMWx5A9FSGal77xk75mW0wKlNxb3JQDzKH2ng08Tj5TaFXtSyMpa5Oc52iBMhAIuntu38Yhn8Som0Oy3oki5srvbVOXE6BxNRWDbEIxP2GElZTTacIp0tGxunUhXPD7scmybdaqX%2FYcuHVgH1usuCaiOmat8yH7vS%2BHt5ML6htMQGOqUBVsumKzgCjen5cjOhuSgBQlXaM2ox%2Bok80%2Fvus5mThNDuJn8bqc9uhgtHud%2FKE%2F8V0759he6sDKYYjVSoz3XRn1HCi64TwtO4GFE4fzQCpDjiWrKSKDNa6%2BI7%2FFaHceyFXhjpIH0vIlH4SM5irxN7ceGqg2C8bqmW6yyGy7GcYmTGJmAqT0GL3AoRK3YzVLThZmLWEyK9PbF1yXhSY3h3FBPnO9nu&X-Amz-Signature=7b2a8420b8ee44964f05d6e806def4e6e51035b06f21b1ba67bab00e1be0b958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7EMT5H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXy%2B4zNUcH832qutzmQnCoQkmYRpvdCLdgvch99CXJpQIgW7J%2FdlZMiWDdXB4oVUOZfyR3KLkUMk1d%2BG2yKIAPeAcqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmKhZafmv%2BpckBOryrcA4Bf6CYn9l3p0j71QLg%2F8ttpVFf1bbnxPLp78RayH631LvrhLsey9vAmGICzFFUDfVPil82xICBnuDsDPymk5OKRsUIloR2H4%2FF5eyxZJMbe6QDzdO3tyqINkHisuvxFe8H0aZkZAG2OlwkawzNKPMI6e2VsZGlRqdhUtUQM9lnGZQqPmlRvrDILjIIJYzK6%2Ff6WJ7tb1U3KnWPYz7b3S3MfBJbMWWlBrpo3YEoq7ROoWqT0CcYwV9fFajOfBpLDFfqD09CbLYl4ZV1pDx5ZJoDsouK6i9uYkc1vVQsT7NiyxZel9k5mHPx8SyKJoeU8I8l9ZItSFea8EJA%2Fq4vfsnGwsK9mHCZbgAD90zTgMeksED8TqJ44Xu2GPKKSmY8IIijzYTy1fm8s8pdqr4WqnSt4TMjB7uNz9XPIsNOc9o1jitBD0%2BCgjE08DmyBcswIV%2BLfl4H3MhswhxJu8Q3wHQ%2BFMWx5A9FSGal77xk75mW0wKlNxb3JQDzKH2ng08Tj5TaFXtSyMpa5Oc52iBMhAIuntu38Yhn8Som0Oy3oki5srvbVOXE6BxNRWDbEIxP2GElZTTacIp0tGxunUhXPD7scmybdaqX%2FYcuHVgH1usuCaiOmat8yH7vS%2BHt5ML6htMQGOqUBVsumKzgCjen5cjOhuSgBQlXaM2ox%2Bok80%2Fvus5mThNDuJn8bqc9uhgtHud%2FKE%2F8V0759he6sDKYYjVSoz3XRn1HCi64TwtO4GFE4fzQCpDjiWrKSKDNa6%2BI7%2FFaHceyFXhjpIH0vIlH4SM5irxN7ceGqg2C8bqmW6yyGy7GcYmTGJmAqT0GL3AoRK3YzVLThZmLWEyK9PbF1yXhSY3h3FBPnO9nu&X-Amz-Signature=737d0fbeb2aecd6aa23ff27ba8a446d8c5c15ebd56aa236b5a9633db69d83c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7EMT5H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXy%2B4zNUcH832qutzmQnCoQkmYRpvdCLdgvch99CXJpQIgW7J%2FdlZMiWDdXB4oVUOZfyR3KLkUMk1d%2BG2yKIAPeAcqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmKhZafmv%2BpckBOryrcA4Bf6CYn9l3p0j71QLg%2F8ttpVFf1bbnxPLp78RayH631LvrhLsey9vAmGICzFFUDfVPil82xICBnuDsDPymk5OKRsUIloR2H4%2FF5eyxZJMbe6QDzdO3tyqINkHisuvxFe8H0aZkZAG2OlwkawzNKPMI6e2VsZGlRqdhUtUQM9lnGZQqPmlRvrDILjIIJYzK6%2Ff6WJ7tb1U3KnWPYz7b3S3MfBJbMWWlBrpo3YEoq7ROoWqT0CcYwV9fFajOfBpLDFfqD09CbLYl4ZV1pDx5ZJoDsouK6i9uYkc1vVQsT7NiyxZel9k5mHPx8SyKJoeU8I8l9ZItSFea8EJA%2Fq4vfsnGwsK9mHCZbgAD90zTgMeksED8TqJ44Xu2GPKKSmY8IIijzYTy1fm8s8pdqr4WqnSt4TMjB7uNz9XPIsNOc9o1jitBD0%2BCgjE08DmyBcswIV%2BLfl4H3MhswhxJu8Q3wHQ%2BFMWx5A9FSGal77xk75mW0wKlNxb3JQDzKH2ng08Tj5TaFXtSyMpa5Oc52iBMhAIuntu38Yhn8Som0Oy3oki5srvbVOXE6BxNRWDbEIxP2GElZTTacIp0tGxunUhXPD7scmybdaqX%2FYcuHVgH1usuCaiOmat8yH7vS%2BHt5ML6htMQGOqUBVsumKzgCjen5cjOhuSgBQlXaM2ox%2Bok80%2Fvus5mThNDuJn8bqc9uhgtHud%2FKE%2F8V0759he6sDKYYjVSoz3XRn1HCi64TwtO4GFE4fzQCpDjiWrKSKDNa6%2BI7%2FFaHceyFXhjpIH0vIlH4SM5irxN7ceGqg2C8bqmW6yyGy7GcYmTGJmAqT0GL3AoRK3YzVLThZmLWEyK9PbF1yXhSY3h3FBPnO9nu&X-Amz-Signature=3f0c56b8d573682f954a4472d0552f86b9f07c263c77296e69dad6dfbd2432fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7EMT5H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXy%2B4zNUcH832qutzmQnCoQkmYRpvdCLdgvch99CXJpQIgW7J%2FdlZMiWDdXB4oVUOZfyR3KLkUMk1d%2BG2yKIAPeAcqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmKhZafmv%2BpckBOryrcA4Bf6CYn9l3p0j71QLg%2F8ttpVFf1bbnxPLp78RayH631LvrhLsey9vAmGICzFFUDfVPil82xICBnuDsDPymk5OKRsUIloR2H4%2FF5eyxZJMbe6QDzdO3tyqINkHisuvxFe8H0aZkZAG2OlwkawzNKPMI6e2VsZGlRqdhUtUQM9lnGZQqPmlRvrDILjIIJYzK6%2Ff6WJ7tb1U3KnWPYz7b3S3MfBJbMWWlBrpo3YEoq7ROoWqT0CcYwV9fFajOfBpLDFfqD09CbLYl4ZV1pDx5ZJoDsouK6i9uYkc1vVQsT7NiyxZel9k5mHPx8SyKJoeU8I8l9ZItSFea8EJA%2Fq4vfsnGwsK9mHCZbgAD90zTgMeksED8TqJ44Xu2GPKKSmY8IIijzYTy1fm8s8pdqr4WqnSt4TMjB7uNz9XPIsNOc9o1jitBD0%2BCgjE08DmyBcswIV%2BLfl4H3MhswhxJu8Q3wHQ%2BFMWx5A9FSGal77xk75mW0wKlNxb3JQDzKH2ng08Tj5TaFXtSyMpa5Oc52iBMhAIuntu38Yhn8Som0Oy3oki5srvbVOXE6BxNRWDbEIxP2GElZTTacIp0tGxunUhXPD7scmybdaqX%2FYcuHVgH1usuCaiOmat8yH7vS%2BHt5ML6htMQGOqUBVsumKzgCjen5cjOhuSgBQlXaM2ox%2Bok80%2Fvus5mThNDuJn8bqc9uhgtHud%2FKE%2F8V0759he6sDKYYjVSoz3XRn1HCi64TwtO4GFE4fzQCpDjiWrKSKDNa6%2BI7%2FFaHceyFXhjpIH0vIlH4SM5irxN7ceGqg2C8bqmW6yyGy7GcYmTGJmAqT0GL3AoRK3YzVLThZmLWEyK9PbF1yXhSY3h3FBPnO9nu&X-Amz-Signature=d1935b531ebc1f891332e55e9c64d59309a44974f501211f023abed5905b2e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7EMT5H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXy%2B4zNUcH832qutzmQnCoQkmYRpvdCLdgvch99CXJpQIgW7J%2FdlZMiWDdXB4oVUOZfyR3KLkUMk1d%2BG2yKIAPeAcqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmKhZafmv%2BpckBOryrcA4Bf6CYn9l3p0j71QLg%2F8ttpVFf1bbnxPLp78RayH631LvrhLsey9vAmGICzFFUDfVPil82xICBnuDsDPymk5OKRsUIloR2H4%2FF5eyxZJMbe6QDzdO3tyqINkHisuvxFe8H0aZkZAG2OlwkawzNKPMI6e2VsZGlRqdhUtUQM9lnGZQqPmlRvrDILjIIJYzK6%2Ff6WJ7tb1U3KnWPYz7b3S3MfBJbMWWlBrpo3YEoq7ROoWqT0CcYwV9fFajOfBpLDFfqD09CbLYl4ZV1pDx5ZJoDsouK6i9uYkc1vVQsT7NiyxZel9k5mHPx8SyKJoeU8I8l9ZItSFea8EJA%2Fq4vfsnGwsK9mHCZbgAD90zTgMeksED8TqJ44Xu2GPKKSmY8IIijzYTy1fm8s8pdqr4WqnSt4TMjB7uNz9XPIsNOc9o1jitBD0%2BCgjE08DmyBcswIV%2BLfl4H3MhswhxJu8Q3wHQ%2BFMWx5A9FSGal77xk75mW0wKlNxb3JQDzKH2ng08Tj5TaFXtSyMpa5Oc52iBMhAIuntu38Yhn8Som0Oy3oki5srvbVOXE6BxNRWDbEIxP2GElZTTacIp0tGxunUhXPD7scmybdaqX%2FYcuHVgH1usuCaiOmat8yH7vS%2BHt5ML6htMQGOqUBVsumKzgCjen5cjOhuSgBQlXaM2ox%2Bok80%2Fvus5mThNDuJn8bqc9uhgtHud%2FKE%2F8V0759he6sDKYYjVSoz3XRn1HCi64TwtO4GFE4fzQCpDjiWrKSKDNa6%2BI7%2FFaHceyFXhjpIH0vIlH4SM5irxN7ceGqg2C8bqmW6yyGy7GcYmTGJmAqT0GL3AoRK3YzVLThZmLWEyK9PbF1yXhSY3h3FBPnO9nu&X-Amz-Signature=1ba90d44f11d1bb7fd88445efe27bf37e59d7873133f15c993650a6283c174f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

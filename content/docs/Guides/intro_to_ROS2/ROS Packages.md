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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SH6V4HL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSa5JXCGTiiPTlToxw8jNcA%2F1%2BjXHSDaTMmFSnn1QOwIgZBOnMrJJdJewd8H6ern%2BekEQLbCf1m4fSfT6PDHI9wMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjn7hpj9cjy7UQLPircA02SskETBXYk%2BXpUNufX6r2kSehikqE%2Ff8WfYg1CAWTluxJGoPsTAYQuijRtDT44AAvezs%2FA%2FjVC6H4YuLweVtdwWOvX6jtNVxhHal%2Fr6VAaIAdyXr7EWcSTgvqqiPtQZhqNvdBky7KJvjYRYhUoCQLv1Lyca7094RjsUpwKlqEiAclsHfomTkzbU078eenuWfphB3BWrFI5AQDrAsdnIKxtUw1T9rYqWq4XR0qbxCBvKo5%2F8%2BcbDHCKwXFv9A8lbkR205K%2B0i5QR5yJLVWgD3agadpyo3D2oQ1FJ3cpBWtLlnfBFoV48bVpKWrr3l7XQGNhI4T3fmXKiwqdZAsLFppJ3jFwJEBFM2rh4c8ExUeeLuJdEgqd3SIVRGg28XpD7z%2FoPxG4PnZgIGwLEi7Fmq2YV%2By67cbFwqiwzL7CGA2ckf%2FnK7cCL37mJ5nDDKtUlcH5rpNM2Hj5kpLfpvMGJRvcpZ5VWyrwO7KoIvhBPMYWNmpyNnEB6%2FVu7pL1fpjbmycDdeAmudHbQltEZnCTJQrTl2pmkk1CuTGvV0Vr5S468ovscaTCJ0Ji0%2FfnZV3lL6zUfh4GzLWeZO2IhEmLimmd3rOUMobOfyCbaKSjTtdWNib0878pZBiJMtf%2FMKzLyMMGOqUBsf2ODF%2BCBX%2Bxtirk%2Fel4WjWqDK0wdp3%2FTVWGfT4OZACLhBBHESAB%2B%2BpQdci1x07sDL28wc3eFk9yD7eMikSGiEztVVP6m9u4W%2Fxn6eve5a%2BItq%2Fh454RifeY8WW8wXmXKVhDi1Nq4Lz%2FAF0nyxK17ngyiGWfhoF5%2B30nk49ywm4KT5UKIrsWyrQfIVh8d6W%2BV9sVjbVFAcE0ezAacZwkGdVsqvNB&X-Amz-Signature=b7a42733e814d7efba3b26daea479ab72dd89943aab45e6b1e5aea8572db7b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SH6V4HL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSa5JXCGTiiPTlToxw8jNcA%2F1%2BjXHSDaTMmFSnn1QOwIgZBOnMrJJdJewd8H6ern%2BekEQLbCf1m4fSfT6PDHI9wMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjn7hpj9cjy7UQLPircA02SskETBXYk%2BXpUNufX6r2kSehikqE%2Ff8WfYg1CAWTluxJGoPsTAYQuijRtDT44AAvezs%2FA%2FjVC6H4YuLweVtdwWOvX6jtNVxhHal%2Fr6VAaIAdyXr7EWcSTgvqqiPtQZhqNvdBky7KJvjYRYhUoCQLv1Lyca7094RjsUpwKlqEiAclsHfomTkzbU078eenuWfphB3BWrFI5AQDrAsdnIKxtUw1T9rYqWq4XR0qbxCBvKo5%2F8%2BcbDHCKwXFv9A8lbkR205K%2B0i5QR5yJLVWgD3agadpyo3D2oQ1FJ3cpBWtLlnfBFoV48bVpKWrr3l7XQGNhI4T3fmXKiwqdZAsLFppJ3jFwJEBFM2rh4c8ExUeeLuJdEgqd3SIVRGg28XpD7z%2FoPxG4PnZgIGwLEi7Fmq2YV%2By67cbFwqiwzL7CGA2ckf%2FnK7cCL37mJ5nDDKtUlcH5rpNM2Hj5kpLfpvMGJRvcpZ5VWyrwO7KoIvhBPMYWNmpyNnEB6%2FVu7pL1fpjbmycDdeAmudHbQltEZnCTJQrTl2pmkk1CuTGvV0Vr5S468ovscaTCJ0Ji0%2FfnZV3lL6zUfh4GzLWeZO2IhEmLimmd3rOUMobOfyCbaKSjTtdWNib0878pZBiJMtf%2FMKzLyMMGOqUBsf2ODF%2BCBX%2Bxtirk%2Fel4WjWqDK0wdp3%2FTVWGfT4OZACLhBBHESAB%2B%2BpQdci1x07sDL28wc3eFk9yD7eMikSGiEztVVP6m9u4W%2Fxn6eve5a%2BItq%2Fh454RifeY8WW8wXmXKVhDi1Nq4Lz%2FAF0nyxK17ngyiGWfhoF5%2B30nk49ywm4KT5UKIrsWyrQfIVh8d6W%2BV9sVjbVFAcE0ezAacZwkGdVsqvNB&X-Amz-Signature=ea3d57ad8f63f48b66751a9a7a21468b0852efaa91166e8982467652d6dd0986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SH6V4HL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSa5JXCGTiiPTlToxw8jNcA%2F1%2BjXHSDaTMmFSnn1QOwIgZBOnMrJJdJewd8H6ern%2BekEQLbCf1m4fSfT6PDHI9wMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjn7hpj9cjy7UQLPircA02SskETBXYk%2BXpUNufX6r2kSehikqE%2Ff8WfYg1CAWTluxJGoPsTAYQuijRtDT44AAvezs%2FA%2FjVC6H4YuLweVtdwWOvX6jtNVxhHal%2Fr6VAaIAdyXr7EWcSTgvqqiPtQZhqNvdBky7KJvjYRYhUoCQLv1Lyca7094RjsUpwKlqEiAclsHfomTkzbU078eenuWfphB3BWrFI5AQDrAsdnIKxtUw1T9rYqWq4XR0qbxCBvKo5%2F8%2BcbDHCKwXFv9A8lbkR205K%2B0i5QR5yJLVWgD3agadpyo3D2oQ1FJ3cpBWtLlnfBFoV48bVpKWrr3l7XQGNhI4T3fmXKiwqdZAsLFppJ3jFwJEBFM2rh4c8ExUeeLuJdEgqd3SIVRGg28XpD7z%2FoPxG4PnZgIGwLEi7Fmq2YV%2By67cbFwqiwzL7CGA2ckf%2FnK7cCL37mJ5nDDKtUlcH5rpNM2Hj5kpLfpvMGJRvcpZ5VWyrwO7KoIvhBPMYWNmpyNnEB6%2FVu7pL1fpjbmycDdeAmudHbQltEZnCTJQrTl2pmkk1CuTGvV0Vr5S468ovscaTCJ0Ji0%2FfnZV3lL6zUfh4GzLWeZO2IhEmLimmd3rOUMobOfyCbaKSjTtdWNib0878pZBiJMtf%2FMKzLyMMGOqUBsf2ODF%2BCBX%2Bxtirk%2Fel4WjWqDK0wdp3%2FTVWGfT4OZACLhBBHESAB%2B%2BpQdci1x07sDL28wc3eFk9yD7eMikSGiEztVVP6m9u4W%2Fxn6eve5a%2BItq%2Fh454RifeY8WW8wXmXKVhDi1Nq4Lz%2FAF0nyxK17ngyiGWfhoF5%2B30nk49ywm4KT5UKIrsWyrQfIVh8d6W%2BV9sVjbVFAcE0ezAacZwkGdVsqvNB&X-Amz-Signature=f2081d022b75db678307676878c0ad36a9a4ed1bd0710b6ea4949207a191f2fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SH6V4HL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSa5JXCGTiiPTlToxw8jNcA%2F1%2BjXHSDaTMmFSnn1QOwIgZBOnMrJJdJewd8H6ern%2BekEQLbCf1m4fSfT6PDHI9wMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjn7hpj9cjy7UQLPircA02SskETBXYk%2BXpUNufX6r2kSehikqE%2Ff8WfYg1CAWTluxJGoPsTAYQuijRtDT44AAvezs%2FA%2FjVC6H4YuLweVtdwWOvX6jtNVxhHal%2Fr6VAaIAdyXr7EWcSTgvqqiPtQZhqNvdBky7KJvjYRYhUoCQLv1Lyca7094RjsUpwKlqEiAclsHfomTkzbU078eenuWfphB3BWrFI5AQDrAsdnIKxtUw1T9rYqWq4XR0qbxCBvKo5%2F8%2BcbDHCKwXFv9A8lbkR205K%2B0i5QR5yJLVWgD3agadpyo3D2oQ1FJ3cpBWtLlnfBFoV48bVpKWrr3l7XQGNhI4T3fmXKiwqdZAsLFppJ3jFwJEBFM2rh4c8ExUeeLuJdEgqd3SIVRGg28XpD7z%2FoPxG4PnZgIGwLEi7Fmq2YV%2By67cbFwqiwzL7CGA2ckf%2FnK7cCL37mJ5nDDKtUlcH5rpNM2Hj5kpLfpvMGJRvcpZ5VWyrwO7KoIvhBPMYWNmpyNnEB6%2FVu7pL1fpjbmycDdeAmudHbQltEZnCTJQrTl2pmkk1CuTGvV0Vr5S468ovscaTCJ0Ji0%2FfnZV3lL6zUfh4GzLWeZO2IhEmLimmd3rOUMobOfyCbaKSjTtdWNib0878pZBiJMtf%2FMKzLyMMGOqUBsf2ODF%2BCBX%2Bxtirk%2Fel4WjWqDK0wdp3%2FTVWGfT4OZACLhBBHESAB%2B%2BpQdci1x07sDL28wc3eFk9yD7eMikSGiEztVVP6m9u4W%2Fxn6eve5a%2BItq%2Fh454RifeY8WW8wXmXKVhDi1Nq4Lz%2FAF0nyxK17ngyiGWfhoF5%2B30nk49ywm4KT5UKIrsWyrQfIVh8d6W%2BV9sVjbVFAcE0ezAacZwkGdVsqvNB&X-Amz-Signature=7c3202ae27f6b55c44a30fdc63dae99ea4cd2cb0994921c9820efb6be5a694f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SH6V4HL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSa5JXCGTiiPTlToxw8jNcA%2F1%2BjXHSDaTMmFSnn1QOwIgZBOnMrJJdJewd8H6ern%2BekEQLbCf1m4fSfT6PDHI9wMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjn7hpj9cjy7UQLPircA02SskETBXYk%2BXpUNufX6r2kSehikqE%2Ff8WfYg1CAWTluxJGoPsTAYQuijRtDT44AAvezs%2FA%2FjVC6H4YuLweVtdwWOvX6jtNVxhHal%2Fr6VAaIAdyXr7EWcSTgvqqiPtQZhqNvdBky7KJvjYRYhUoCQLv1Lyca7094RjsUpwKlqEiAclsHfomTkzbU078eenuWfphB3BWrFI5AQDrAsdnIKxtUw1T9rYqWq4XR0qbxCBvKo5%2F8%2BcbDHCKwXFv9A8lbkR205K%2B0i5QR5yJLVWgD3agadpyo3D2oQ1FJ3cpBWtLlnfBFoV48bVpKWrr3l7XQGNhI4T3fmXKiwqdZAsLFppJ3jFwJEBFM2rh4c8ExUeeLuJdEgqd3SIVRGg28XpD7z%2FoPxG4PnZgIGwLEi7Fmq2YV%2By67cbFwqiwzL7CGA2ckf%2FnK7cCL37mJ5nDDKtUlcH5rpNM2Hj5kpLfpvMGJRvcpZ5VWyrwO7KoIvhBPMYWNmpyNnEB6%2FVu7pL1fpjbmycDdeAmudHbQltEZnCTJQrTl2pmkk1CuTGvV0Vr5S468ovscaTCJ0Ji0%2FfnZV3lL6zUfh4GzLWeZO2IhEmLimmd3rOUMobOfyCbaKSjTtdWNib0878pZBiJMtf%2FMKzLyMMGOqUBsf2ODF%2BCBX%2Bxtirk%2Fel4WjWqDK0wdp3%2FTVWGfT4OZACLhBBHESAB%2B%2BpQdci1x07sDL28wc3eFk9yD7eMikSGiEztVVP6m9u4W%2Fxn6eve5a%2BItq%2Fh454RifeY8WW8wXmXKVhDi1Nq4Lz%2FAF0nyxK17ngyiGWfhoF5%2B30nk49ywm4KT5UKIrsWyrQfIVh8d6W%2BV9sVjbVFAcE0ezAacZwkGdVsqvNB&X-Amz-Signature=66b2ed5c70341fcf828dfe4e104b296a77c9950a3f07234aee43e5edcde28c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SH6V4HL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSa5JXCGTiiPTlToxw8jNcA%2F1%2BjXHSDaTMmFSnn1QOwIgZBOnMrJJdJewd8H6ern%2BekEQLbCf1m4fSfT6PDHI9wMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjn7hpj9cjy7UQLPircA02SskETBXYk%2BXpUNufX6r2kSehikqE%2Ff8WfYg1CAWTluxJGoPsTAYQuijRtDT44AAvezs%2FA%2FjVC6H4YuLweVtdwWOvX6jtNVxhHal%2Fr6VAaIAdyXr7EWcSTgvqqiPtQZhqNvdBky7KJvjYRYhUoCQLv1Lyca7094RjsUpwKlqEiAclsHfomTkzbU078eenuWfphB3BWrFI5AQDrAsdnIKxtUw1T9rYqWq4XR0qbxCBvKo5%2F8%2BcbDHCKwXFv9A8lbkR205K%2B0i5QR5yJLVWgD3agadpyo3D2oQ1FJ3cpBWtLlnfBFoV48bVpKWrr3l7XQGNhI4T3fmXKiwqdZAsLFppJ3jFwJEBFM2rh4c8ExUeeLuJdEgqd3SIVRGg28XpD7z%2FoPxG4PnZgIGwLEi7Fmq2YV%2By67cbFwqiwzL7CGA2ckf%2FnK7cCL37mJ5nDDKtUlcH5rpNM2Hj5kpLfpvMGJRvcpZ5VWyrwO7KoIvhBPMYWNmpyNnEB6%2FVu7pL1fpjbmycDdeAmudHbQltEZnCTJQrTl2pmkk1CuTGvV0Vr5S468ovscaTCJ0Ji0%2FfnZV3lL6zUfh4GzLWeZO2IhEmLimmd3rOUMobOfyCbaKSjTtdWNib0878pZBiJMtf%2FMKzLyMMGOqUBsf2ODF%2BCBX%2Bxtirk%2Fel4WjWqDK0wdp3%2FTVWGfT4OZACLhBBHESAB%2B%2BpQdci1x07sDL28wc3eFk9yD7eMikSGiEztVVP6m9u4W%2Fxn6eve5a%2BItq%2Fh454RifeY8WW8wXmXKVhDi1Nq4Lz%2FAF0nyxK17ngyiGWfhoF5%2B30nk49ywm4KT5UKIrsWyrQfIVh8d6W%2BV9sVjbVFAcE0ezAacZwkGdVsqvNB&X-Amz-Signature=dd7b14afa5db862ad56d8e2d22ee6e8e30095b7528d16a4843816a1f40d086b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SH6V4HL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSa5JXCGTiiPTlToxw8jNcA%2F1%2BjXHSDaTMmFSnn1QOwIgZBOnMrJJdJewd8H6ern%2BekEQLbCf1m4fSfT6PDHI9wMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjn7hpj9cjy7UQLPircA02SskETBXYk%2BXpUNufX6r2kSehikqE%2Ff8WfYg1CAWTluxJGoPsTAYQuijRtDT44AAvezs%2FA%2FjVC6H4YuLweVtdwWOvX6jtNVxhHal%2Fr6VAaIAdyXr7EWcSTgvqqiPtQZhqNvdBky7KJvjYRYhUoCQLv1Lyca7094RjsUpwKlqEiAclsHfomTkzbU078eenuWfphB3BWrFI5AQDrAsdnIKxtUw1T9rYqWq4XR0qbxCBvKo5%2F8%2BcbDHCKwXFv9A8lbkR205K%2B0i5QR5yJLVWgD3agadpyo3D2oQ1FJ3cpBWtLlnfBFoV48bVpKWrr3l7XQGNhI4T3fmXKiwqdZAsLFppJ3jFwJEBFM2rh4c8ExUeeLuJdEgqd3SIVRGg28XpD7z%2FoPxG4PnZgIGwLEi7Fmq2YV%2By67cbFwqiwzL7CGA2ckf%2FnK7cCL37mJ5nDDKtUlcH5rpNM2Hj5kpLfpvMGJRvcpZ5VWyrwO7KoIvhBPMYWNmpyNnEB6%2FVu7pL1fpjbmycDdeAmudHbQltEZnCTJQrTl2pmkk1CuTGvV0Vr5S468ovscaTCJ0Ji0%2FfnZV3lL6zUfh4GzLWeZO2IhEmLimmd3rOUMobOfyCbaKSjTtdWNib0878pZBiJMtf%2FMKzLyMMGOqUBsf2ODF%2BCBX%2Bxtirk%2Fel4WjWqDK0wdp3%2FTVWGfT4OZACLhBBHESAB%2B%2BpQdci1x07sDL28wc3eFk9yD7eMikSGiEztVVP6m9u4W%2Fxn6eve5a%2BItq%2Fh454RifeY8WW8wXmXKVhDi1Nq4Lz%2FAF0nyxK17ngyiGWfhoF5%2B30nk49ywm4KT5UKIrsWyrQfIVh8d6W%2BV9sVjbVFAcE0ezAacZwkGdVsqvNB&X-Amz-Signature=bcec564254964286d3ba985cd2524ee4107d5519bab617d7b27bd541817de660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

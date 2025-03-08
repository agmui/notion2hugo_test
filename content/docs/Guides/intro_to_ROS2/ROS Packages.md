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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7UUGSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBp1r4GdTPoFStU6hkE6Vckh%2Ft7gGb7nHNNmcBnaJqp4AiA0r8gsPWLWe2TqcqFPmSiMT2PUTyCYRkgSrD4vTydkJyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM6n2epsfJ3yAKbwHLKtwDECZ5TJLmWmBEGELWbbTttpv2Lwsg%2F%2FBzdeG4BsjEtefCHE6zsUTZMyi2HtIbBXHZ6iD%2FVIwx%2BUEFaHdwWx00xJaXoZ3eMQ%2BiVdzWqIcXGivVddcpojbriVKsx7iri%2FwRuEFyEcHA06UrP2LimvONGKRkKtfXq5iSkz7JAEZBMaq4KmBPIta01sBllFBLnu%2Ba1s16CsZvqSBd8%2BU89LHXQQOJdpsDvTJP3fdSFESTaD6%2Fmy0WZJh%2F1zQXpqCtNFld308vpNwALJEoUUwZ4FqVp0k%2FPFA8nu%2BtY04L2bT6a2Fiv9l4rlebFEajppMolA%2F0dpPEPMxpbkN2wKZ7YvDamJxDYNf05WiBbPFvj78Grf3WW%2FUNLjNbKYgkljtkPhuzbCG3KXaiKuQNKhGAbz0JUs8OiBDNU3bZeCoUvCeUugkK6KlMQCxbb180nIKrw66713YFdlHd2qVK3MrfaC0GP%2Fg0CTmslr1jQZsoXcevecDTmoWOSz8hC%2BwMb1Lymj%2BJku7gW4Sc5uToHLsHdRq%2BXP1zU1EwT0n5pTz1jM3zRHjiRemzY0fRi6%2FqXuGy1ckjERzOznNKfnPCZ19K2j9gscaHGiB0euv45yexypnO%2BXqaLXOfEEiNThk1fiIwlr2uvgY6pgGDmHfJoseQLAdRC14fGZv1TqYZ0wDwortAF%2B1rHueLCgjHN0x5MHz3Hf5ZnmV6sD5%2BrAjV4w6V72EyTQXg5xZXPc%2FqWDH%2BnK%2BL2SEh4X4jZw9cDQ28sCINw7krZx3bdJL8uVbsEh0F8DC0wdoC36IAJLRsbEINVW%2BtxQIfUhUcC2389f737dnD1vNk%2BCAX0%2BV9Zp56g%2FqZIq6mLdGEE5mbn33fEtE%2F&X-Amz-Signature=e92740f436e6346fba21985fbb1ba3bad3dfc188ee4a13c3c334cfbac24fc8fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7UUGSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBp1r4GdTPoFStU6hkE6Vckh%2Ft7gGb7nHNNmcBnaJqp4AiA0r8gsPWLWe2TqcqFPmSiMT2PUTyCYRkgSrD4vTydkJyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM6n2epsfJ3yAKbwHLKtwDECZ5TJLmWmBEGELWbbTttpv2Lwsg%2F%2FBzdeG4BsjEtefCHE6zsUTZMyi2HtIbBXHZ6iD%2FVIwx%2BUEFaHdwWx00xJaXoZ3eMQ%2BiVdzWqIcXGivVddcpojbriVKsx7iri%2FwRuEFyEcHA06UrP2LimvONGKRkKtfXq5iSkz7JAEZBMaq4KmBPIta01sBllFBLnu%2Ba1s16CsZvqSBd8%2BU89LHXQQOJdpsDvTJP3fdSFESTaD6%2Fmy0WZJh%2F1zQXpqCtNFld308vpNwALJEoUUwZ4FqVp0k%2FPFA8nu%2BtY04L2bT6a2Fiv9l4rlebFEajppMolA%2F0dpPEPMxpbkN2wKZ7YvDamJxDYNf05WiBbPFvj78Grf3WW%2FUNLjNbKYgkljtkPhuzbCG3KXaiKuQNKhGAbz0JUs8OiBDNU3bZeCoUvCeUugkK6KlMQCxbb180nIKrw66713YFdlHd2qVK3MrfaC0GP%2Fg0CTmslr1jQZsoXcevecDTmoWOSz8hC%2BwMb1Lymj%2BJku7gW4Sc5uToHLsHdRq%2BXP1zU1EwT0n5pTz1jM3zRHjiRemzY0fRi6%2FqXuGy1ckjERzOznNKfnPCZ19K2j9gscaHGiB0euv45yexypnO%2BXqaLXOfEEiNThk1fiIwlr2uvgY6pgGDmHfJoseQLAdRC14fGZv1TqYZ0wDwortAF%2B1rHueLCgjHN0x5MHz3Hf5ZnmV6sD5%2BrAjV4w6V72EyTQXg5xZXPc%2FqWDH%2BnK%2BL2SEh4X4jZw9cDQ28sCINw7krZx3bdJL8uVbsEh0F8DC0wdoC36IAJLRsbEINVW%2BtxQIfUhUcC2389f737dnD1vNk%2BCAX0%2BV9Zp56g%2FqZIq6mLdGEE5mbn33fEtE%2F&X-Amz-Signature=cd34439856454a4fb43f9c6eca51172f87e8539c4c109bd1146decda5932dd87&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7UUGSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBp1r4GdTPoFStU6hkE6Vckh%2Ft7gGb7nHNNmcBnaJqp4AiA0r8gsPWLWe2TqcqFPmSiMT2PUTyCYRkgSrD4vTydkJyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM6n2epsfJ3yAKbwHLKtwDECZ5TJLmWmBEGELWbbTttpv2Lwsg%2F%2FBzdeG4BsjEtefCHE6zsUTZMyi2HtIbBXHZ6iD%2FVIwx%2BUEFaHdwWx00xJaXoZ3eMQ%2BiVdzWqIcXGivVddcpojbriVKsx7iri%2FwRuEFyEcHA06UrP2LimvONGKRkKtfXq5iSkz7JAEZBMaq4KmBPIta01sBllFBLnu%2Ba1s16CsZvqSBd8%2BU89LHXQQOJdpsDvTJP3fdSFESTaD6%2Fmy0WZJh%2F1zQXpqCtNFld308vpNwALJEoUUwZ4FqVp0k%2FPFA8nu%2BtY04L2bT6a2Fiv9l4rlebFEajppMolA%2F0dpPEPMxpbkN2wKZ7YvDamJxDYNf05WiBbPFvj78Grf3WW%2FUNLjNbKYgkljtkPhuzbCG3KXaiKuQNKhGAbz0JUs8OiBDNU3bZeCoUvCeUugkK6KlMQCxbb180nIKrw66713YFdlHd2qVK3MrfaC0GP%2Fg0CTmslr1jQZsoXcevecDTmoWOSz8hC%2BwMb1Lymj%2BJku7gW4Sc5uToHLsHdRq%2BXP1zU1EwT0n5pTz1jM3zRHjiRemzY0fRi6%2FqXuGy1ckjERzOznNKfnPCZ19K2j9gscaHGiB0euv45yexypnO%2BXqaLXOfEEiNThk1fiIwlr2uvgY6pgGDmHfJoseQLAdRC14fGZv1TqYZ0wDwortAF%2B1rHueLCgjHN0x5MHz3Hf5ZnmV6sD5%2BrAjV4w6V72EyTQXg5xZXPc%2FqWDH%2BnK%2BL2SEh4X4jZw9cDQ28sCINw7krZx3bdJL8uVbsEh0F8DC0wdoC36IAJLRsbEINVW%2BtxQIfUhUcC2389f737dnD1vNk%2BCAX0%2BV9Zp56g%2FqZIq6mLdGEE5mbn33fEtE%2F&X-Amz-Signature=87bc9570d7fc9c454016a6630b862ac4d304f157c3cacdbc3a0edaf02471f8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7UUGSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBp1r4GdTPoFStU6hkE6Vckh%2Ft7gGb7nHNNmcBnaJqp4AiA0r8gsPWLWe2TqcqFPmSiMT2PUTyCYRkgSrD4vTydkJyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM6n2epsfJ3yAKbwHLKtwDECZ5TJLmWmBEGELWbbTttpv2Lwsg%2F%2FBzdeG4BsjEtefCHE6zsUTZMyi2HtIbBXHZ6iD%2FVIwx%2BUEFaHdwWx00xJaXoZ3eMQ%2BiVdzWqIcXGivVddcpojbriVKsx7iri%2FwRuEFyEcHA06UrP2LimvONGKRkKtfXq5iSkz7JAEZBMaq4KmBPIta01sBllFBLnu%2Ba1s16CsZvqSBd8%2BU89LHXQQOJdpsDvTJP3fdSFESTaD6%2Fmy0WZJh%2F1zQXpqCtNFld308vpNwALJEoUUwZ4FqVp0k%2FPFA8nu%2BtY04L2bT6a2Fiv9l4rlebFEajppMolA%2F0dpPEPMxpbkN2wKZ7YvDamJxDYNf05WiBbPFvj78Grf3WW%2FUNLjNbKYgkljtkPhuzbCG3KXaiKuQNKhGAbz0JUs8OiBDNU3bZeCoUvCeUugkK6KlMQCxbb180nIKrw66713YFdlHd2qVK3MrfaC0GP%2Fg0CTmslr1jQZsoXcevecDTmoWOSz8hC%2BwMb1Lymj%2BJku7gW4Sc5uToHLsHdRq%2BXP1zU1EwT0n5pTz1jM3zRHjiRemzY0fRi6%2FqXuGy1ckjERzOznNKfnPCZ19K2j9gscaHGiB0euv45yexypnO%2BXqaLXOfEEiNThk1fiIwlr2uvgY6pgGDmHfJoseQLAdRC14fGZv1TqYZ0wDwortAF%2B1rHueLCgjHN0x5MHz3Hf5ZnmV6sD5%2BrAjV4w6V72EyTQXg5xZXPc%2FqWDH%2BnK%2BL2SEh4X4jZw9cDQ28sCINw7krZx3bdJL8uVbsEh0F8DC0wdoC36IAJLRsbEINVW%2BtxQIfUhUcC2389f737dnD1vNk%2BCAX0%2BV9Zp56g%2FqZIq6mLdGEE5mbn33fEtE%2F&X-Amz-Signature=9fca404fd3612fcaf1e7c2756f6a0305f291959f261d6b54249ba6948030c1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7UUGSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBp1r4GdTPoFStU6hkE6Vckh%2Ft7gGb7nHNNmcBnaJqp4AiA0r8gsPWLWe2TqcqFPmSiMT2PUTyCYRkgSrD4vTydkJyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM6n2epsfJ3yAKbwHLKtwDECZ5TJLmWmBEGELWbbTttpv2Lwsg%2F%2FBzdeG4BsjEtefCHE6zsUTZMyi2HtIbBXHZ6iD%2FVIwx%2BUEFaHdwWx00xJaXoZ3eMQ%2BiVdzWqIcXGivVddcpojbriVKsx7iri%2FwRuEFyEcHA06UrP2LimvONGKRkKtfXq5iSkz7JAEZBMaq4KmBPIta01sBllFBLnu%2Ba1s16CsZvqSBd8%2BU89LHXQQOJdpsDvTJP3fdSFESTaD6%2Fmy0WZJh%2F1zQXpqCtNFld308vpNwALJEoUUwZ4FqVp0k%2FPFA8nu%2BtY04L2bT6a2Fiv9l4rlebFEajppMolA%2F0dpPEPMxpbkN2wKZ7YvDamJxDYNf05WiBbPFvj78Grf3WW%2FUNLjNbKYgkljtkPhuzbCG3KXaiKuQNKhGAbz0JUs8OiBDNU3bZeCoUvCeUugkK6KlMQCxbb180nIKrw66713YFdlHd2qVK3MrfaC0GP%2Fg0CTmslr1jQZsoXcevecDTmoWOSz8hC%2BwMb1Lymj%2BJku7gW4Sc5uToHLsHdRq%2BXP1zU1EwT0n5pTz1jM3zRHjiRemzY0fRi6%2FqXuGy1ckjERzOznNKfnPCZ19K2j9gscaHGiB0euv45yexypnO%2BXqaLXOfEEiNThk1fiIwlr2uvgY6pgGDmHfJoseQLAdRC14fGZv1TqYZ0wDwortAF%2B1rHueLCgjHN0x5MHz3Hf5ZnmV6sD5%2BrAjV4w6V72EyTQXg5xZXPc%2FqWDH%2BnK%2BL2SEh4X4jZw9cDQ28sCINw7krZx3bdJL8uVbsEh0F8DC0wdoC36IAJLRsbEINVW%2BtxQIfUhUcC2389f737dnD1vNk%2BCAX0%2BV9Zp56g%2FqZIq6mLdGEE5mbn33fEtE%2F&X-Amz-Signature=5498d52a149fca50494c2ad8a7a552dbcac52b6e1ff99af1dfa8b6b3a8ef4c63&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7UUGSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBp1r4GdTPoFStU6hkE6Vckh%2Ft7gGb7nHNNmcBnaJqp4AiA0r8gsPWLWe2TqcqFPmSiMT2PUTyCYRkgSrD4vTydkJyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM6n2epsfJ3yAKbwHLKtwDECZ5TJLmWmBEGELWbbTttpv2Lwsg%2F%2FBzdeG4BsjEtefCHE6zsUTZMyi2HtIbBXHZ6iD%2FVIwx%2BUEFaHdwWx00xJaXoZ3eMQ%2BiVdzWqIcXGivVddcpojbriVKsx7iri%2FwRuEFyEcHA06UrP2LimvONGKRkKtfXq5iSkz7JAEZBMaq4KmBPIta01sBllFBLnu%2Ba1s16CsZvqSBd8%2BU89LHXQQOJdpsDvTJP3fdSFESTaD6%2Fmy0WZJh%2F1zQXpqCtNFld308vpNwALJEoUUwZ4FqVp0k%2FPFA8nu%2BtY04L2bT6a2Fiv9l4rlebFEajppMolA%2F0dpPEPMxpbkN2wKZ7YvDamJxDYNf05WiBbPFvj78Grf3WW%2FUNLjNbKYgkljtkPhuzbCG3KXaiKuQNKhGAbz0JUs8OiBDNU3bZeCoUvCeUugkK6KlMQCxbb180nIKrw66713YFdlHd2qVK3MrfaC0GP%2Fg0CTmslr1jQZsoXcevecDTmoWOSz8hC%2BwMb1Lymj%2BJku7gW4Sc5uToHLsHdRq%2BXP1zU1EwT0n5pTz1jM3zRHjiRemzY0fRi6%2FqXuGy1ckjERzOznNKfnPCZ19K2j9gscaHGiB0euv45yexypnO%2BXqaLXOfEEiNThk1fiIwlr2uvgY6pgGDmHfJoseQLAdRC14fGZv1TqYZ0wDwortAF%2B1rHueLCgjHN0x5MHz3Hf5ZnmV6sD5%2BrAjV4w6V72EyTQXg5xZXPc%2FqWDH%2BnK%2BL2SEh4X4jZw9cDQ28sCINw7krZx3bdJL8uVbsEh0F8DC0wdoC36IAJLRsbEINVW%2BtxQIfUhUcC2389f737dnD1vNk%2BCAX0%2BV9Zp56g%2FqZIq6mLdGEE5mbn33fEtE%2F&X-Amz-Signature=7942596a2d06f6f7bac82027148e743cdbd646b769d374cdfd87c59631f3c24b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7UUGSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBp1r4GdTPoFStU6hkE6Vckh%2Ft7gGb7nHNNmcBnaJqp4AiA0r8gsPWLWe2TqcqFPmSiMT2PUTyCYRkgSrD4vTydkJyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM6n2epsfJ3yAKbwHLKtwDECZ5TJLmWmBEGELWbbTttpv2Lwsg%2F%2FBzdeG4BsjEtefCHE6zsUTZMyi2HtIbBXHZ6iD%2FVIwx%2BUEFaHdwWx00xJaXoZ3eMQ%2BiVdzWqIcXGivVddcpojbriVKsx7iri%2FwRuEFyEcHA06UrP2LimvONGKRkKtfXq5iSkz7JAEZBMaq4KmBPIta01sBllFBLnu%2Ba1s16CsZvqSBd8%2BU89LHXQQOJdpsDvTJP3fdSFESTaD6%2Fmy0WZJh%2F1zQXpqCtNFld308vpNwALJEoUUwZ4FqVp0k%2FPFA8nu%2BtY04L2bT6a2Fiv9l4rlebFEajppMolA%2F0dpPEPMxpbkN2wKZ7YvDamJxDYNf05WiBbPFvj78Grf3WW%2FUNLjNbKYgkljtkPhuzbCG3KXaiKuQNKhGAbz0JUs8OiBDNU3bZeCoUvCeUugkK6KlMQCxbb180nIKrw66713YFdlHd2qVK3MrfaC0GP%2Fg0CTmslr1jQZsoXcevecDTmoWOSz8hC%2BwMb1Lymj%2BJku7gW4Sc5uToHLsHdRq%2BXP1zU1EwT0n5pTz1jM3zRHjiRemzY0fRi6%2FqXuGy1ckjERzOznNKfnPCZ19K2j9gscaHGiB0euv45yexypnO%2BXqaLXOfEEiNThk1fiIwlr2uvgY6pgGDmHfJoseQLAdRC14fGZv1TqYZ0wDwortAF%2B1rHueLCgjHN0x5MHz3Hf5ZnmV6sD5%2BrAjV4w6V72EyTQXg5xZXPc%2FqWDH%2BnK%2BL2SEh4X4jZw9cDQ28sCINw7krZx3bdJL8uVbsEh0F8DC0wdoC36IAJLRsbEINVW%2BtxQIfUhUcC2389f737dnD1vNk%2BCAX0%2BV9Zp56g%2FqZIq6mLdGEE5mbn33fEtE%2F&X-Amz-Signature=d9144703204fd9e08d5c40eacc801b9edfd6f780136e79e62aeaf86e2d8fff08&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

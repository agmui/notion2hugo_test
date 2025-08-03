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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3FD25D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSdYOyuS0WOEZZtQy27etYQ8vyb2w0LZ5HU4huePUiQIgTW0QX0bWk12YcFBh2bo4Kh51pbEZaw6VNCZ%2FzmRSeS0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNOOAj%2FaaXFCT8YcAyrcA1DKT%2BmXmDfY9mfx8lDxGNcLpAZj6vtKUNcAMgy4oC1yOilaaKZHeDgeuyS%2BYSEXq5nFSySdnvVqJ8vlGnxZoXR1ZOAW5PLvDnvXRMHjY3UCIfL3xYNl0IUjD4hDNqRi939%2BsFL4naG14JSLu6%2FGAyqlWxp%2FzvJTJLMZvD5LZPZdCSdgrHVgm4a9HxvjcikQKlgaUeBbV08Jk8YRAD7nAcNwt%2FX5M4leVnO5z13u3p7weGDdukYJyKPYQApiLNUvoee0NYLCaZdVk66EKfRZiHHSAPYv4R0OoXBITk7KC79ZKWLd3nDQn%2FBQ3Ou5xypD4cnGJw5vmxambZ3gMyQDgDbDoGwxuEro5d87s%2FtyrOshcW2LGPN7frBfmSNeTmUMiCbFsQfW%2FMej65qYB5Pt61J0Vg91mdNxmqF6rMkeeyU4RkiQhSw1GmzdyjY%2BnxZm2CjPs7F7Ohe6ywfaPMvoorhMT8m06cX83SvqJldMjCMxzzZYvVjwJ4zbaL3j08niU93Ft0eDMPEfUjZJGcyUf6HWSwsC6pw1gNRk%2F9jbElbC9Oh3YfV0e9mAXElTEybAECHYF%2FVEbhNhbtybGYTdepzTKN2HPdK76p0hXgkeezgqXy5DFgDlB2KlPFbXMNmmu8QGOqUBgKtxh9Q5Oii1NCheqjKesPSGhLIdp2xxlrny9X3PVqLoXYE%2BpwwSTLQnnXk3HnzRzYcpkrScoNkvHsEdy8zNWLl4sZO7vUOgK7RqJPBo6rqweAsfJXkEsFjCVxE2EovCd5wncoErAqwCcf65rZ2qsFTDgNHeHmeQFPGXscZtd0GS1ttxHqtmkjqV1gAxu6XVsBIncUqukLsq0p2jZmDsYHajFkay&X-Amz-Signature=998effb3c4b1261893fcdf63315df45c09ced651c01d19f1befcab477f9cc410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3FD25D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSdYOyuS0WOEZZtQy27etYQ8vyb2w0LZ5HU4huePUiQIgTW0QX0bWk12YcFBh2bo4Kh51pbEZaw6VNCZ%2FzmRSeS0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNOOAj%2FaaXFCT8YcAyrcA1DKT%2BmXmDfY9mfx8lDxGNcLpAZj6vtKUNcAMgy4oC1yOilaaKZHeDgeuyS%2BYSEXq5nFSySdnvVqJ8vlGnxZoXR1ZOAW5PLvDnvXRMHjY3UCIfL3xYNl0IUjD4hDNqRi939%2BsFL4naG14JSLu6%2FGAyqlWxp%2FzvJTJLMZvD5LZPZdCSdgrHVgm4a9HxvjcikQKlgaUeBbV08Jk8YRAD7nAcNwt%2FX5M4leVnO5z13u3p7weGDdukYJyKPYQApiLNUvoee0NYLCaZdVk66EKfRZiHHSAPYv4R0OoXBITk7KC79ZKWLd3nDQn%2FBQ3Ou5xypD4cnGJw5vmxambZ3gMyQDgDbDoGwxuEro5d87s%2FtyrOshcW2LGPN7frBfmSNeTmUMiCbFsQfW%2FMej65qYB5Pt61J0Vg91mdNxmqF6rMkeeyU4RkiQhSw1GmzdyjY%2BnxZm2CjPs7F7Ohe6ywfaPMvoorhMT8m06cX83SvqJldMjCMxzzZYvVjwJ4zbaL3j08niU93Ft0eDMPEfUjZJGcyUf6HWSwsC6pw1gNRk%2F9jbElbC9Oh3YfV0e9mAXElTEybAECHYF%2FVEbhNhbtybGYTdepzTKN2HPdK76p0hXgkeezgqXy5DFgDlB2KlPFbXMNmmu8QGOqUBgKtxh9Q5Oii1NCheqjKesPSGhLIdp2xxlrny9X3PVqLoXYE%2BpwwSTLQnnXk3HnzRzYcpkrScoNkvHsEdy8zNWLl4sZO7vUOgK7RqJPBo6rqweAsfJXkEsFjCVxE2EovCd5wncoErAqwCcf65rZ2qsFTDgNHeHmeQFPGXscZtd0GS1ttxHqtmkjqV1gAxu6XVsBIncUqukLsq0p2jZmDsYHajFkay&X-Amz-Signature=8dfa31cd9da4a8ce8967a859b7726db63d2e7d7c999cd96711cd0069fd749475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3FD25D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSdYOyuS0WOEZZtQy27etYQ8vyb2w0LZ5HU4huePUiQIgTW0QX0bWk12YcFBh2bo4Kh51pbEZaw6VNCZ%2FzmRSeS0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNOOAj%2FaaXFCT8YcAyrcA1DKT%2BmXmDfY9mfx8lDxGNcLpAZj6vtKUNcAMgy4oC1yOilaaKZHeDgeuyS%2BYSEXq5nFSySdnvVqJ8vlGnxZoXR1ZOAW5PLvDnvXRMHjY3UCIfL3xYNl0IUjD4hDNqRi939%2BsFL4naG14JSLu6%2FGAyqlWxp%2FzvJTJLMZvD5LZPZdCSdgrHVgm4a9HxvjcikQKlgaUeBbV08Jk8YRAD7nAcNwt%2FX5M4leVnO5z13u3p7weGDdukYJyKPYQApiLNUvoee0NYLCaZdVk66EKfRZiHHSAPYv4R0OoXBITk7KC79ZKWLd3nDQn%2FBQ3Ou5xypD4cnGJw5vmxambZ3gMyQDgDbDoGwxuEro5d87s%2FtyrOshcW2LGPN7frBfmSNeTmUMiCbFsQfW%2FMej65qYB5Pt61J0Vg91mdNxmqF6rMkeeyU4RkiQhSw1GmzdyjY%2BnxZm2CjPs7F7Ohe6ywfaPMvoorhMT8m06cX83SvqJldMjCMxzzZYvVjwJ4zbaL3j08niU93Ft0eDMPEfUjZJGcyUf6HWSwsC6pw1gNRk%2F9jbElbC9Oh3YfV0e9mAXElTEybAECHYF%2FVEbhNhbtybGYTdepzTKN2HPdK76p0hXgkeezgqXy5DFgDlB2KlPFbXMNmmu8QGOqUBgKtxh9Q5Oii1NCheqjKesPSGhLIdp2xxlrny9X3PVqLoXYE%2BpwwSTLQnnXk3HnzRzYcpkrScoNkvHsEdy8zNWLl4sZO7vUOgK7RqJPBo6rqweAsfJXkEsFjCVxE2EovCd5wncoErAqwCcf65rZ2qsFTDgNHeHmeQFPGXscZtd0GS1ttxHqtmkjqV1gAxu6XVsBIncUqukLsq0p2jZmDsYHajFkay&X-Amz-Signature=fe1959cf36484e813c05dda735d8d0c07e875f038fd7d1b3e9bf9f418236eec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3FD25D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSdYOyuS0WOEZZtQy27etYQ8vyb2w0LZ5HU4huePUiQIgTW0QX0bWk12YcFBh2bo4Kh51pbEZaw6VNCZ%2FzmRSeS0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNOOAj%2FaaXFCT8YcAyrcA1DKT%2BmXmDfY9mfx8lDxGNcLpAZj6vtKUNcAMgy4oC1yOilaaKZHeDgeuyS%2BYSEXq5nFSySdnvVqJ8vlGnxZoXR1ZOAW5PLvDnvXRMHjY3UCIfL3xYNl0IUjD4hDNqRi939%2BsFL4naG14JSLu6%2FGAyqlWxp%2FzvJTJLMZvD5LZPZdCSdgrHVgm4a9HxvjcikQKlgaUeBbV08Jk8YRAD7nAcNwt%2FX5M4leVnO5z13u3p7weGDdukYJyKPYQApiLNUvoee0NYLCaZdVk66EKfRZiHHSAPYv4R0OoXBITk7KC79ZKWLd3nDQn%2FBQ3Ou5xypD4cnGJw5vmxambZ3gMyQDgDbDoGwxuEro5d87s%2FtyrOshcW2LGPN7frBfmSNeTmUMiCbFsQfW%2FMej65qYB5Pt61J0Vg91mdNxmqF6rMkeeyU4RkiQhSw1GmzdyjY%2BnxZm2CjPs7F7Ohe6ywfaPMvoorhMT8m06cX83SvqJldMjCMxzzZYvVjwJ4zbaL3j08niU93Ft0eDMPEfUjZJGcyUf6HWSwsC6pw1gNRk%2F9jbElbC9Oh3YfV0e9mAXElTEybAECHYF%2FVEbhNhbtybGYTdepzTKN2HPdK76p0hXgkeezgqXy5DFgDlB2KlPFbXMNmmu8QGOqUBgKtxh9Q5Oii1NCheqjKesPSGhLIdp2xxlrny9X3PVqLoXYE%2BpwwSTLQnnXk3HnzRzYcpkrScoNkvHsEdy8zNWLl4sZO7vUOgK7RqJPBo6rqweAsfJXkEsFjCVxE2EovCd5wncoErAqwCcf65rZ2qsFTDgNHeHmeQFPGXscZtd0GS1ttxHqtmkjqV1gAxu6XVsBIncUqukLsq0p2jZmDsYHajFkay&X-Amz-Signature=6d1f69d3f492accaeda3488e961d58ef393d7eddd4965fcac2a7e32e2231e35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3FD25D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSdYOyuS0WOEZZtQy27etYQ8vyb2w0LZ5HU4huePUiQIgTW0QX0bWk12YcFBh2bo4Kh51pbEZaw6VNCZ%2FzmRSeS0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNOOAj%2FaaXFCT8YcAyrcA1DKT%2BmXmDfY9mfx8lDxGNcLpAZj6vtKUNcAMgy4oC1yOilaaKZHeDgeuyS%2BYSEXq5nFSySdnvVqJ8vlGnxZoXR1ZOAW5PLvDnvXRMHjY3UCIfL3xYNl0IUjD4hDNqRi939%2BsFL4naG14JSLu6%2FGAyqlWxp%2FzvJTJLMZvD5LZPZdCSdgrHVgm4a9HxvjcikQKlgaUeBbV08Jk8YRAD7nAcNwt%2FX5M4leVnO5z13u3p7weGDdukYJyKPYQApiLNUvoee0NYLCaZdVk66EKfRZiHHSAPYv4R0OoXBITk7KC79ZKWLd3nDQn%2FBQ3Ou5xypD4cnGJw5vmxambZ3gMyQDgDbDoGwxuEro5d87s%2FtyrOshcW2LGPN7frBfmSNeTmUMiCbFsQfW%2FMej65qYB5Pt61J0Vg91mdNxmqF6rMkeeyU4RkiQhSw1GmzdyjY%2BnxZm2CjPs7F7Ohe6ywfaPMvoorhMT8m06cX83SvqJldMjCMxzzZYvVjwJ4zbaL3j08niU93Ft0eDMPEfUjZJGcyUf6HWSwsC6pw1gNRk%2F9jbElbC9Oh3YfV0e9mAXElTEybAECHYF%2FVEbhNhbtybGYTdepzTKN2HPdK76p0hXgkeezgqXy5DFgDlB2KlPFbXMNmmu8QGOqUBgKtxh9Q5Oii1NCheqjKesPSGhLIdp2xxlrny9X3PVqLoXYE%2BpwwSTLQnnXk3HnzRzYcpkrScoNkvHsEdy8zNWLl4sZO7vUOgK7RqJPBo6rqweAsfJXkEsFjCVxE2EovCd5wncoErAqwCcf65rZ2qsFTDgNHeHmeQFPGXscZtd0GS1ttxHqtmkjqV1gAxu6XVsBIncUqukLsq0p2jZmDsYHajFkay&X-Amz-Signature=31cc19797d0f701a907cf473e6185faf3fac487716d6876d6c1395126857b910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3FD25D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSdYOyuS0WOEZZtQy27etYQ8vyb2w0LZ5HU4huePUiQIgTW0QX0bWk12YcFBh2bo4Kh51pbEZaw6VNCZ%2FzmRSeS0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNOOAj%2FaaXFCT8YcAyrcA1DKT%2BmXmDfY9mfx8lDxGNcLpAZj6vtKUNcAMgy4oC1yOilaaKZHeDgeuyS%2BYSEXq5nFSySdnvVqJ8vlGnxZoXR1ZOAW5PLvDnvXRMHjY3UCIfL3xYNl0IUjD4hDNqRi939%2BsFL4naG14JSLu6%2FGAyqlWxp%2FzvJTJLMZvD5LZPZdCSdgrHVgm4a9HxvjcikQKlgaUeBbV08Jk8YRAD7nAcNwt%2FX5M4leVnO5z13u3p7weGDdukYJyKPYQApiLNUvoee0NYLCaZdVk66EKfRZiHHSAPYv4R0OoXBITk7KC79ZKWLd3nDQn%2FBQ3Ou5xypD4cnGJw5vmxambZ3gMyQDgDbDoGwxuEro5d87s%2FtyrOshcW2LGPN7frBfmSNeTmUMiCbFsQfW%2FMej65qYB5Pt61J0Vg91mdNxmqF6rMkeeyU4RkiQhSw1GmzdyjY%2BnxZm2CjPs7F7Ohe6ywfaPMvoorhMT8m06cX83SvqJldMjCMxzzZYvVjwJ4zbaL3j08niU93Ft0eDMPEfUjZJGcyUf6HWSwsC6pw1gNRk%2F9jbElbC9Oh3YfV0e9mAXElTEybAECHYF%2FVEbhNhbtybGYTdepzTKN2HPdK76p0hXgkeezgqXy5DFgDlB2KlPFbXMNmmu8QGOqUBgKtxh9Q5Oii1NCheqjKesPSGhLIdp2xxlrny9X3PVqLoXYE%2BpwwSTLQnnXk3HnzRzYcpkrScoNkvHsEdy8zNWLl4sZO7vUOgK7RqJPBo6rqweAsfJXkEsFjCVxE2EovCd5wncoErAqwCcf65rZ2qsFTDgNHeHmeQFPGXscZtd0GS1ttxHqtmkjqV1gAxu6XVsBIncUqukLsq0p2jZmDsYHajFkay&X-Amz-Signature=a7c7d4b112beb424cd6108a8c1c670ac0c0022c9493bf4d0a9e377703e0ea55e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3FD25D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSdYOyuS0WOEZZtQy27etYQ8vyb2w0LZ5HU4huePUiQIgTW0QX0bWk12YcFBh2bo4Kh51pbEZaw6VNCZ%2FzmRSeS0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNOOAj%2FaaXFCT8YcAyrcA1DKT%2BmXmDfY9mfx8lDxGNcLpAZj6vtKUNcAMgy4oC1yOilaaKZHeDgeuyS%2BYSEXq5nFSySdnvVqJ8vlGnxZoXR1ZOAW5PLvDnvXRMHjY3UCIfL3xYNl0IUjD4hDNqRi939%2BsFL4naG14JSLu6%2FGAyqlWxp%2FzvJTJLMZvD5LZPZdCSdgrHVgm4a9HxvjcikQKlgaUeBbV08Jk8YRAD7nAcNwt%2FX5M4leVnO5z13u3p7weGDdukYJyKPYQApiLNUvoee0NYLCaZdVk66EKfRZiHHSAPYv4R0OoXBITk7KC79ZKWLd3nDQn%2FBQ3Ou5xypD4cnGJw5vmxambZ3gMyQDgDbDoGwxuEro5d87s%2FtyrOshcW2LGPN7frBfmSNeTmUMiCbFsQfW%2FMej65qYB5Pt61J0Vg91mdNxmqF6rMkeeyU4RkiQhSw1GmzdyjY%2BnxZm2CjPs7F7Ohe6ywfaPMvoorhMT8m06cX83SvqJldMjCMxzzZYvVjwJ4zbaL3j08niU93Ft0eDMPEfUjZJGcyUf6HWSwsC6pw1gNRk%2F9jbElbC9Oh3YfV0e9mAXElTEybAECHYF%2FVEbhNhbtybGYTdepzTKN2HPdK76p0hXgkeezgqXy5DFgDlB2KlPFbXMNmmu8QGOqUBgKtxh9Q5Oii1NCheqjKesPSGhLIdp2xxlrny9X3PVqLoXYE%2BpwwSTLQnnXk3HnzRzYcpkrScoNkvHsEdy8zNWLl4sZO7vUOgK7RqJPBo6rqweAsfJXkEsFjCVxE2EovCd5wncoErAqwCcf65rZ2qsFTDgNHeHmeQFPGXscZtd0GS1ttxHqtmkjqV1gAxu6XVsBIncUqukLsq0p2jZmDsYHajFkay&X-Amz-Signature=5e6c42d892ddaeaa1876f66623840d9ed85246662a2ebc8c40dbf7ce67d70dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

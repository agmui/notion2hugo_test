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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNWBG3M%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv9qI7qvJHbGVqtY%2B0LYo1lCGGd04%2FH4SfhtKSPDCuAAiEAi%2BqaxHFwFqCfq9E5y8u55pe1u4ztvmN8Aox5wrtyAfoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkSqNf7a9xRuKBxCircAxgqTlOKEW%2FXuAkUqi%2B7ifkX4Hcf6txLWqA9dQRCtAE9UGV4XTym9o62ZJCcf8U%2BefsdzACU9ofeNUMtUBjVLHNXLRUotJTadcraBB11%2FupiEjHHlNHa686HDsVXQ%2FVPPgHR6dOrbj828ERDrddb%2BuR94yteXMD8hsi9gR2ouCRFbY3V88XbaQzs97T%2B%2BWdLTJZcYRtof21ML52QLUsdIVebxFAj6pR8V3xdDVgBp9A8A5tA8%2F3f8g%2FoZhDutOFWjkcMlh%2Bluozyvt%2Fk%2BXy48fDv6ERU0aBml3jdApdumAuE0y1EnTCj0dD7L9wgl%2BnrMuDWqOMaxp5kKP4AH0BpwUQOj3nIZgxpzZ6MghpmfemD3s5NQGl6UW1aRMs1kWSDR2MJ0PulTmtk50PQsGKgZ%2BNMg5j7ALTN0imI1iBqulCk%2BOc7HuFsg1ijQ7jFbZwM89mH31XepimeRXc3kQ0RKe8uXBGDATmfOxegH9knFMz9MM8DuEIDfO0wQhaGnQL%2BLY%2BIU5md4%2FrvFVvg1da7SfRUOmAf%2BslcjPpNT5QtRs9GM7R9osy7TuzevaYGJT3b2hKOQkeRpCFzs15pzC4ItoRdi%2FgntSZp9MjKmCJGTl6I4KhgLiCPNTfvvZSvMKbeo8IGOqUBuDFXJuD0FsC0846E5S%2F%2B7XE7fJVci0TPE%2BdiOgxSqAAL14rS4NhxeIhW04to0bMyjPA6pT5RtICvzCPKC7kkW4ar4eG3%2FD%2FKZwJtMTm2h7vxy236cl8j5Qrvj5jKEDeYVirUXfkHmIEAxSV%2BA99aMPy9hGTOxM3IOrfxc64spuRQ0uclmaBG%2BQk2rxM7XR%2FD4kWFjjJd1fwaUgS4yPhjIniG5esa&X-Amz-Signature=67ddf5d1012cb78314955dd49f7b33712bebce1a118167eedb1c496f748be24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNWBG3M%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv9qI7qvJHbGVqtY%2B0LYo1lCGGd04%2FH4SfhtKSPDCuAAiEAi%2BqaxHFwFqCfq9E5y8u55pe1u4ztvmN8Aox5wrtyAfoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkSqNf7a9xRuKBxCircAxgqTlOKEW%2FXuAkUqi%2B7ifkX4Hcf6txLWqA9dQRCtAE9UGV4XTym9o62ZJCcf8U%2BefsdzACU9ofeNUMtUBjVLHNXLRUotJTadcraBB11%2FupiEjHHlNHa686HDsVXQ%2FVPPgHR6dOrbj828ERDrddb%2BuR94yteXMD8hsi9gR2ouCRFbY3V88XbaQzs97T%2B%2BWdLTJZcYRtof21ML52QLUsdIVebxFAj6pR8V3xdDVgBp9A8A5tA8%2F3f8g%2FoZhDutOFWjkcMlh%2Bluozyvt%2Fk%2BXy48fDv6ERU0aBml3jdApdumAuE0y1EnTCj0dD7L9wgl%2BnrMuDWqOMaxp5kKP4AH0BpwUQOj3nIZgxpzZ6MghpmfemD3s5NQGl6UW1aRMs1kWSDR2MJ0PulTmtk50PQsGKgZ%2BNMg5j7ALTN0imI1iBqulCk%2BOc7HuFsg1ijQ7jFbZwM89mH31XepimeRXc3kQ0RKe8uXBGDATmfOxegH9knFMz9MM8DuEIDfO0wQhaGnQL%2BLY%2BIU5md4%2FrvFVvg1da7SfRUOmAf%2BslcjPpNT5QtRs9GM7R9osy7TuzevaYGJT3b2hKOQkeRpCFzs15pzC4ItoRdi%2FgntSZp9MjKmCJGTl6I4KhgLiCPNTfvvZSvMKbeo8IGOqUBuDFXJuD0FsC0846E5S%2F%2B7XE7fJVci0TPE%2BdiOgxSqAAL14rS4NhxeIhW04to0bMyjPA6pT5RtICvzCPKC7kkW4ar4eG3%2FD%2FKZwJtMTm2h7vxy236cl8j5Qrvj5jKEDeYVirUXfkHmIEAxSV%2BA99aMPy9hGTOxM3IOrfxc64spuRQ0uclmaBG%2BQk2rxM7XR%2FD4kWFjjJd1fwaUgS4yPhjIniG5esa&X-Amz-Signature=236aa7beeb2bf3a0f8fdb3df8f285d0e3de88d87c94364e8f55cb28458452b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNWBG3M%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv9qI7qvJHbGVqtY%2B0LYo1lCGGd04%2FH4SfhtKSPDCuAAiEAi%2BqaxHFwFqCfq9E5y8u55pe1u4ztvmN8Aox5wrtyAfoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkSqNf7a9xRuKBxCircAxgqTlOKEW%2FXuAkUqi%2B7ifkX4Hcf6txLWqA9dQRCtAE9UGV4XTym9o62ZJCcf8U%2BefsdzACU9ofeNUMtUBjVLHNXLRUotJTadcraBB11%2FupiEjHHlNHa686HDsVXQ%2FVPPgHR6dOrbj828ERDrddb%2BuR94yteXMD8hsi9gR2ouCRFbY3V88XbaQzs97T%2B%2BWdLTJZcYRtof21ML52QLUsdIVebxFAj6pR8V3xdDVgBp9A8A5tA8%2F3f8g%2FoZhDutOFWjkcMlh%2Bluozyvt%2Fk%2BXy48fDv6ERU0aBml3jdApdumAuE0y1EnTCj0dD7L9wgl%2BnrMuDWqOMaxp5kKP4AH0BpwUQOj3nIZgxpzZ6MghpmfemD3s5NQGl6UW1aRMs1kWSDR2MJ0PulTmtk50PQsGKgZ%2BNMg5j7ALTN0imI1iBqulCk%2BOc7HuFsg1ijQ7jFbZwM89mH31XepimeRXc3kQ0RKe8uXBGDATmfOxegH9knFMz9MM8DuEIDfO0wQhaGnQL%2BLY%2BIU5md4%2FrvFVvg1da7SfRUOmAf%2BslcjPpNT5QtRs9GM7R9osy7TuzevaYGJT3b2hKOQkeRpCFzs15pzC4ItoRdi%2FgntSZp9MjKmCJGTl6I4KhgLiCPNTfvvZSvMKbeo8IGOqUBuDFXJuD0FsC0846E5S%2F%2B7XE7fJVci0TPE%2BdiOgxSqAAL14rS4NhxeIhW04to0bMyjPA6pT5RtICvzCPKC7kkW4ar4eG3%2FD%2FKZwJtMTm2h7vxy236cl8j5Qrvj5jKEDeYVirUXfkHmIEAxSV%2BA99aMPy9hGTOxM3IOrfxc64spuRQ0uclmaBG%2BQk2rxM7XR%2FD4kWFjjJd1fwaUgS4yPhjIniG5esa&X-Amz-Signature=ebc04b1252f03fe814898f26c9ed337bd365307c052a39500633e47075ec90be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNWBG3M%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv9qI7qvJHbGVqtY%2B0LYo1lCGGd04%2FH4SfhtKSPDCuAAiEAi%2BqaxHFwFqCfq9E5y8u55pe1u4ztvmN8Aox5wrtyAfoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkSqNf7a9xRuKBxCircAxgqTlOKEW%2FXuAkUqi%2B7ifkX4Hcf6txLWqA9dQRCtAE9UGV4XTym9o62ZJCcf8U%2BefsdzACU9ofeNUMtUBjVLHNXLRUotJTadcraBB11%2FupiEjHHlNHa686HDsVXQ%2FVPPgHR6dOrbj828ERDrddb%2BuR94yteXMD8hsi9gR2ouCRFbY3V88XbaQzs97T%2B%2BWdLTJZcYRtof21ML52QLUsdIVebxFAj6pR8V3xdDVgBp9A8A5tA8%2F3f8g%2FoZhDutOFWjkcMlh%2Bluozyvt%2Fk%2BXy48fDv6ERU0aBml3jdApdumAuE0y1EnTCj0dD7L9wgl%2BnrMuDWqOMaxp5kKP4AH0BpwUQOj3nIZgxpzZ6MghpmfemD3s5NQGl6UW1aRMs1kWSDR2MJ0PulTmtk50PQsGKgZ%2BNMg5j7ALTN0imI1iBqulCk%2BOc7HuFsg1ijQ7jFbZwM89mH31XepimeRXc3kQ0RKe8uXBGDATmfOxegH9knFMz9MM8DuEIDfO0wQhaGnQL%2BLY%2BIU5md4%2FrvFVvg1da7SfRUOmAf%2BslcjPpNT5QtRs9GM7R9osy7TuzevaYGJT3b2hKOQkeRpCFzs15pzC4ItoRdi%2FgntSZp9MjKmCJGTl6I4KhgLiCPNTfvvZSvMKbeo8IGOqUBuDFXJuD0FsC0846E5S%2F%2B7XE7fJVci0TPE%2BdiOgxSqAAL14rS4NhxeIhW04to0bMyjPA6pT5RtICvzCPKC7kkW4ar4eG3%2FD%2FKZwJtMTm2h7vxy236cl8j5Qrvj5jKEDeYVirUXfkHmIEAxSV%2BA99aMPy9hGTOxM3IOrfxc64spuRQ0uclmaBG%2BQk2rxM7XR%2FD4kWFjjJd1fwaUgS4yPhjIniG5esa&X-Amz-Signature=cc265b0c99d8e0b52224afba6591a08f2067d8953cee85b431bc2f1091bf8d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNWBG3M%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv9qI7qvJHbGVqtY%2B0LYo1lCGGd04%2FH4SfhtKSPDCuAAiEAi%2BqaxHFwFqCfq9E5y8u55pe1u4ztvmN8Aox5wrtyAfoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkSqNf7a9xRuKBxCircAxgqTlOKEW%2FXuAkUqi%2B7ifkX4Hcf6txLWqA9dQRCtAE9UGV4XTym9o62ZJCcf8U%2BefsdzACU9ofeNUMtUBjVLHNXLRUotJTadcraBB11%2FupiEjHHlNHa686HDsVXQ%2FVPPgHR6dOrbj828ERDrddb%2BuR94yteXMD8hsi9gR2ouCRFbY3V88XbaQzs97T%2B%2BWdLTJZcYRtof21ML52QLUsdIVebxFAj6pR8V3xdDVgBp9A8A5tA8%2F3f8g%2FoZhDutOFWjkcMlh%2Bluozyvt%2Fk%2BXy48fDv6ERU0aBml3jdApdumAuE0y1EnTCj0dD7L9wgl%2BnrMuDWqOMaxp5kKP4AH0BpwUQOj3nIZgxpzZ6MghpmfemD3s5NQGl6UW1aRMs1kWSDR2MJ0PulTmtk50PQsGKgZ%2BNMg5j7ALTN0imI1iBqulCk%2BOc7HuFsg1ijQ7jFbZwM89mH31XepimeRXc3kQ0RKe8uXBGDATmfOxegH9knFMz9MM8DuEIDfO0wQhaGnQL%2BLY%2BIU5md4%2FrvFVvg1da7SfRUOmAf%2BslcjPpNT5QtRs9GM7R9osy7TuzevaYGJT3b2hKOQkeRpCFzs15pzC4ItoRdi%2FgntSZp9MjKmCJGTl6I4KhgLiCPNTfvvZSvMKbeo8IGOqUBuDFXJuD0FsC0846E5S%2F%2B7XE7fJVci0TPE%2BdiOgxSqAAL14rS4NhxeIhW04to0bMyjPA6pT5RtICvzCPKC7kkW4ar4eG3%2FD%2FKZwJtMTm2h7vxy236cl8j5Qrvj5jKEDeYVirUXfkHmIEAxSV%2BA99aMPy9hGTOxM3IOrfxc64spuRQ0uclmaBG%2BQk2rxM7XR%2FD4kWFjjJd1fwaUgS4yPhjIniG5esa&X-Amz-Signature=75e542239a5986fb9f715e08c7bc5e4cf230aaef1ddf47fe9eb4a902580bf458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNWBG3M%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv9qI7qvJHbGVqtY%2B0LYo1lCGGd04%2FH4SfhtKSPDCuAAiEAi%2BqaxHFwFqCfq9E5y8u55pe1u4ztvmN8Aox5wrtyAfoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkSqNf7a9xRuKBxCircAxgqTlOKEW%2FXuAkUqi%2B7ifkX4Hcf6txLWqA9dQRCtAE9UGV4XTym9o62ZJCcf8U%2BefsdzACU9ofeNUMtUBjVLHNXLRUotJTadcraBB11%2FupiEjHHlNHa686HDsVXQ%2FVPPgHR6dOrbj828ERDrddb%2BuR94yteXMD8hsi9gR2ouCRFbY3V88XbaQzs97T%2B%2BWdLTJZcYRtof21ML52QLUsdIVebxFAj6pR8V3xdDVgBp9A8A5tA8%2F3f8g%2FoZhDutOFWjkcMlh%2Bluozyvt%2Fk%2BXy48fDv6ERU0aBml3jdApdumAuE0y1EnTCj0dD7L9wgl%2BnrMuDWqOMaxp5kKP4AH0BpwUQOj3nIZgxpzZ6MghpmfemD3s5NQGl6UW1aRMs1kWSDR2MJ0PulTmtk50PQsGKgZ%2BNMg5j7ALTN0imI1iBqulCk%2BOc7HuFsg1ijQ7jFbZwM89mH31XepimeRXc3kQ0RKe8uXBGDATmfOxegH9knFMz9MM8DuEIDfO0wQhaGnQL%2BLY%2BIU5md4%2FrvFVvg1da7SfRUOmAf%2BslcjPpNT5QtRs9GM7R9osy7TuzevaYGJT3b2hKOQkeRpCFzs15pzC4ItoRdi%2FgntSZp9MjKmCJGTl6I4KhgLiCPNTfvvZSvMKbeo8IGOqUBuDFXJuD0FsC0846E5S%2F%2B7XE7fJVci0TPE%2BdiOgxSqAAL14rS4NhxeIhW04to0bMyjPA6pT5RtICvzCPKC7kkW4ar4eG3%2FD%2FKZwJtMTm2h7vxy236cl8j5Qrvj5jKEDeYVirUXfkHmIEAxSV%2BA99aMPy9hGTOxM3IOrfxc64spuRQ0uclmaBG%2BQk2rxM7XR%2FD4kWFjjJd1fwaUgS4yPhjIniG5esa&X-Amz-Signature=4a9eb1ba141795068eb422795ce1481363a0115e63f71627981c0443f9c091e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNWBG3M%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv9qI7qvJHbGVqtY%2B0LYo1lCGGd04%2FH4SfhtKSPDCuAAiEAi%2BqaxHFwFqCfq9E5y8u55pe1u4ztvmN8Aox5wrtyAfoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkSqNf7a9xRuKBxCircAxgqTlOKEW%2FXuAkUqi%2B7ifkX4Hcf6txLWqA9dQRCtAE9UGV4XTym9o62ZJCcf8U%2BefsdzACU9ofeNUMtUBjVLHNXLRUotJTadcraBB11%2FupiEjHHlNHa686HDsVXQ%2FVPPgHR6dOrbj828ERDrddb%2BuR94yteXMD8hsi9gR2ouCRFbY3V88XbaQzs97T%2B%2BWdLTJZcYRtof21ML52QLUsdIVebxFAj6pR8V3xdDVgBp9A8A5tA8%2F3f8g%2FoZhDutOFWjkcMlh%2Bluozyvt%2Fk%2BXy48fDv6ERU0aBml3jdApdumAuE0y1EnTCj0dD7L9wgl%2BnrMuDWqOMaxp5kKP4AH0BpwUQOj3nIZgxpzZ6MghpmfemD3s5NQGl6UW1aRMs1kWSDR2MJ0PulTmtk50PQsGKgZ%2BNMg5j7ALTN0imI1iBqulCk%2BOc7HuFsg1ijQ7jFbZwM89mH31XepimeRXc3kQ0RKe8uXBGDATmfOxegH9knFMz9MM8DuEIDfO0wQhaGnQL%2BLY%2BIU5md4%2FrvFVvg1da7SfRUOmAf%2BslcjPpNT5QtRs9GM7R9osy7TuzevaYGJT3b2hKOQkeRpCFzs15pzC4ItoRdi%2FgntSZp9MjKmCJGTl6I4KhgLiCPNTfvvZSvMKbeo8IGOqUBuDFXJuD0FsC0846E5S%2F%2B7XE7fJVci0TPE%2BdiOgxSqAAL14rS4NhxeIhW04to0bMyjPA6pT5RtICvzCPKC7kkW4ar4eG3%2FD%2FKZwJtMTm2h7vxy236cl8j5Qrvj5jKEDeYVirUXfkHmIEAxSV%2BA99aMPy9hGTOxM3IOrfxc64spuRQ0uclmaBG%2BQk2rxM7XR%2FD4kWFjjJd1fwaUgS4yPhjIniG5esa&X-Amz-Signature=734a3f9e39e1cf082419199a806e91f53c74c57b6f2a01a242ad1c9c9b18861b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

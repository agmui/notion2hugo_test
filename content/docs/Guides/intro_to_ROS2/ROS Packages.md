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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHNAXZY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDKDb7JqEY8qW01fvDnpDddxtIEuiCHCOJ%2BnCLDAVVKqQIhAOCsxM96cklZJQQvkwzLNyDCsZW3ipaO1jZgyWt1AxbkKv8DCBsQABoMNjM3NDIzMTgzODA1IgxgoiW3XAJoU4loSRAq3AOLZZGmtA8FUjHLPypw8tp5nzmjPq4WH1oUfH60JaYfUe59eIioxJ0NAAneWiNvOyi9fUnUwkq7Wo3okqqrB4lAJVtcs%2B7K4vyYYVjxTUahX0TlXmjnfp1%2F6gL3TnoC64PqXaMbD3d5gR5feNrh%2BEXRF6bSKyVyb%2B1Uh4gEMwProQTGRPF%2FUbmRt5TzNNkxckKEIDfGqbtbPaWhU%2BhyJIodWPCWxw1u7x2K65TDhJhs%2BhGEIxA4%2F8lvzIWVM%2FZmKj3DTex5GQUd2EVOhCBqCP3k3H6DBQ15%2B6Oc5E4fZvIWg4zKttaoe4idaq4pwOFNCOMUASTvfzjkcGmFFNJ%2BaXVEY5uNusHcL5JxsIp3XbKkZhQXmxaIDq%2F3X8vQllgoDoDbJPJWuRGePh8caRCGVh4oP3PCLBSuN5H%2BDJSL3NE9MYXplnNptDAWeEEyIA5VCWfibYmMn1tBubeFGk3qtwJjwEycfj45SmWhM6DKDIDgDxbeMxH%2BXIBQ3tCqEBXf4QzxU%2Bhhv0n8ozlpjez5W3%2FqhEDCmq%2BdpqJ2XR%2FuzxeUPawTo7zhAVl7ywy%2FSnrTgP8tSM%2Bh63Nt3Xvfc4j8OGxa48jeu2KEcbdmQ51C95hjvcLaoRSzgmE0isEevzCR58%2FDBjqkAfElNPHcaXCsWbbMUbP4eaT9%2BFUJOLJs0tB91rtJWDUhHGatpWvyV%2F1dT31h%2FjiiJpI1Ra7t2VtkaincGoYr7LVIY4dDeQVjgUOygHi7DOyifZgVGI2MM5uLp%2FqAGWVC1VgadO8g%2Ff56y6ZIdRBjuKg2n%2B%2BcqM3iE7ZElY13CyRVmv3oWpGHKEwTysfRwrYjWbWHpHfOBy2%2B%2BsMKkSP6OJB7S6Ti&X-Amz-Signature=717d68d5c5889b807f7911298e7e81805665f1bc1e9c98098509bdf5c35b906c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHNAXZY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDKDb7JqEY8qW01fvDnpDddxtIEuiCHCOJ%2BnCLDAVVKqQIhAOCsxM96cklZJQQvkwzLNyDCsZW3ipaO1jZgyWt1AxbkKv8DCBsQABoMNjM3NDIzMTgzODA1IgxgoiW3XAJoU4loSRAq3AOLZZGmtA8FUjHLPypw8tp5nzmjPq4WH1oUfH60JaYfUe59eIioxJ0NAAneWiNvOyi9fUnUwkq7Wo3okqqrB4lAJVtcs%2B7K4vyYYVjxTUahX0TlXmjnfp1%2F6gL3TnoC64PqXaMbD3d5gR5feNrh%2BEXRF6bSKyVyb%2B1Uh4gEMwProQTGRPF%2FUbmRt5TzNNkxckKEIDfGqbtbPaWhU%2BhyJIodWPCWxw1u7x2K65TDhJhs%2BhGEIxA4%2F8lvzIWVM%2FZmKj3DTex5GQUd2EVOhCBqCP3k3H6DBQ15%2B6Oc5E4fZvIWg4zKttaoe4idaq4pwOFNCOMUASTvfzjkcGmFFNJ%2BaXVEY5uNusHcL5JxsIp3XbKkZhQXmxaIDq%2F3X8vQllgoDoDbJPJWuRGePh8caRCGVh4oP3PCLBSuN5H%2BDJSL3NE9MYXplnNptDAWeEEyIA5VCWfibYmMn1tBubeFGk3qtwJjwEycfj45SmWhM6DKDIDgDxbeMxH%2BXIBQ3tCqEBXf4QzxU%2Bhhv0n8ozlpjez5W3%2FqhEDCmq%2BdpqJ2XR%2FuzxeUPawTo7zhAVl7ywy%2FSnrTgP8tSM%2Bh63Nt3Xvfc4j8OGxa48jeu2KEcbdmQ51C95hjvcLaoRSzgmE0isEevzCR58%2FDBjqkAfElNPHcaXCsWbbMUbP4eaT9%2BFUJOLJs0tB91rtJWDUhHGatpWvyV%2F1dT31h%2FjiiJpI1Ra7t2VtkaincGoYr7LVIY4dDeQVjgUOygHi7DOyifZgVGI2MM5uLp%2FqAGWVC1VgadO8g%2Ff56y6ZIdRBjuKg2n%2B%2BcqM3iE7ZElY13CyRVmv3oWpGHKEwTysfRwrYjWbWHpHfOBy2%2B%2BsMKkSP6OJB7S6Ti&X-Amz-Signature=7324ac07cb7a60ea9f4beba84e156028f36a7e499895086368b620e94d5c4d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHNAXZY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDKDb7JqEY8qW01fvDnpDddxtIEuiCHCOJ%2BnCLDAVVKqQIhAOCsxM96cklZJQQvkwzLNyDCsZW3ipaO1jZgyWt1AxbkKv8DCBsQABoMNjM3NDIzMTgzODA1IgxgoiW3XAJoU4loSRAq3AOLZZGmtA8FUjHLPypw8tp5nzmjPq4WH1oUfH60JaYfUe59eIioxJ0NAAneWiNvOyi9fUnUwkq7Wo3okqqrB4lAJVtcs%2B7K4vyYYVjxTUahX0TlXmjnfp1%2F6gL3TnoC64PqXaMbD3d5gR5feNrh%2BEXRF6bSKyVyb%2B1Uh4gEMwProQTGRPF%2FUbmRt5TzNNkxckKEIDfGqbtbPaWhU%2BhyJIodWPCWxw1u7x2K65TDhJhs%2BhGEIxA4%2F8lvzIWVM%2FZmKj3DTex5GQUd2EVOhCBqCP3k3H6DBQ15%2B6Oc5E4fZvIWg4zKttaoe4idaq4pwOFNCOMUASTvfzjkcGmFFNJ%2BaXVEY5uNusHcL5JxsIp3XbKkZhQXmxaIDq%2F3X8vQllgoDoDbJPJWuRGePh8caRCGVh4oP3PCLBSuN5H%2BDJSL3NE9MYXplnNptDAWeEEyIA5VCWfibYmMn1tBubeFGk3qtwJjwEycfj45SmWhM6DKDIDgDxbeMxH%2BXIBQ3tCqEBXf4QzxU%2Bhhv0n8ozlpjez5W3%2FqhEDCmq%2BdpqJ2XR%2FuzxeUPawTo7zhAVl7ywy%2FSnrTgP8tSM%2Bh63Nt3Xvfc4j8OGxa48jeu2KEcbdmQ51C95hjvcLaoRSzgmE0isEevzCR58%2FDBjqkAfElNPHcaXCsWbbMUbP4eaT9%2BFUJOLJs0tB91rtJWDUhHGatpWvyV%2F1dT31h%2FjiiJpI1Ra7t2VtkaincGoYr7LVIY4dDeQVjgUOygHi7DOyifZgVGI2MM5uLp%2FqAGWVC1VgadO8g%2Ff56y6ZIdRBjuKg2n%2B%2BcqM3iE7ZElY13CyRVmv3oWpGHKEwTysfRwrYjWbWHpHfOBy2%2B%2BsMKkSP6OJB7S6Ti&X-Amz-Signature=c6728dd4d7373a15a2475f82e10895014ca83effb3d7ab86716bedd10a5c3e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHNAXZY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDKDb7JqEY8qW01fvDnpDddxtIEuiCHCOJ%2BnCLDAVVKqQIhAOCsxM96cklZJQQvkwzLNyDCsZW3ipaO1jZgyWt1AxbkKv8DCBsQABoMNjM3NDIzMTgzODA1IgxgoiW3XAJoU4loSRAq3AOLZZGmtA8FUjHLPypw8tp5nzmjPq4WH1oUfH60JaYfUe59eIioxJ0NAAneWiNvOyi9fUnUwkq7Wo3okqqrB4lAJVtcs%2B7K4vyYYVjxTUahX0TlXmjnfp1%2F6gL3TnoC64PqXaMbD3d5gR5feNrh%2BEXRF6bSKyVyb%2B1Uh4gEMwProQTGRPF%2FUbmRt5TzNNkxckKEIDfGqbtbPaWhU%2BhyJIodWPCWxw1u7x2K65TDhJhs%2BhGEIxA4%2F8lvzIWVM%2FZmKj3DTex5GQUd2EVOhCBqCP3k3H6DBQ15%2B6Oc5E4fZvIWg4zKttaoe4idaq4pwOFNCOMUASTvfzjkcGmFFNJ%2BaXVEY5uNusHcL5JxsIp3XbKkZhQXmxaIDq%2F3X8vQllgoDoDbJPJWuRGePh8caRCGVh4oP3PCLBSuN5H%2BDJSL3NE9MYXplnNptDAWeEEyIA5VCWfibYmMn1tBubeFGk3qtwJjwEycfj45SmWhM6DKDIDgDxbeMxH%2BXIBQ3tCqEBXf4QzxU%2Bhhv0n8ozlpjez5W3%2FqhEDCmq%2BdpqJ2XR%2FuzxeUPawTo7zhAVl7ywy%2FSnrTgP8tSM%2Bh63Nt3Xvfc4j8OGxa48jeu2KEcbdmQ51C95hjvcLaoRSzgmE0isEevzCR58%2FDBjqkAfElNPHcaXCsWbbMUbP4eaT9%2BFUJOLJs0tB91rtJWDUhHGatpWvyV%2F1dT31h%2FjiiJpI1Ra7t2VtkaincGoYr7LVIY4dDeQVjgUOygHi7DOyifZgVGI2MM5uLp%2FqAGWVC1VgadO8g%2Ff56y6ZIdRBjuKg2n%2B%2BcqM3iE7ZElY13CyRVmv3oWpGHKEwTysfRwrYjWbWHpHfOBy2%2B%2BsMKkSP6OJB7S6Ti&X-Amz-Signature=442807b298734b853f90094fc786c4136a92fcc9f244ba69e9e0b91f33d296f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHNAXZY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDKDb7JqEY8qW01fvDnpDddxtIEuiCHCOJ%2BnCLDAVVKqQIhAOCsxM96cklZJQQvkwzLNyDCsZW3ipaO1jZgyWt1AxbkKv8DCBsQABoMNjM3NDIzMTgzODA1IgxgoiW3XAJoU4loSRAq3AOLZZGmtA8FUjHLPypw8tp5nzmjPq4WH1oUfH60JaYfUe59eIioxJ0NAAneWiNvOyi9fUnUwkq7Wo3okqqrB4lAJVtcs%2B7K4vyYYVjxTUahX0TlXmjnfp1%2F6gL3TnoC64PqXaMbD3d5gR5feNrh%2BEXRF6bSKyVyb%2B1Uh4gEMwProQTGRPF%2FUbmRt5TzNNkxckKEIDfGqbtbPaWhU%2BhyJIodWPCWxw1u7x2K65TDhJhs%2BhGEIxA4%2F8lvzIWVM%2FZmKj3DTex5GQUd2EVOhCBqCP3k3H6DBQ15%2B6Oc5E4fZvIWg4zKttaoe4idaq4pwOFNCOMUASTvfzjkcGmFFNJ%2BaXVEY5uNusHcL5JxsIp3XbKkZhQXmxaIDq%2F3X8vQllgoDoDbJPJWuRGePh8caRCGVh4oP3PCLBSuN5H%2BDJSL3NE9MYXplnNptDAWeEEyIA5VCWfibYmMn1tBubeFGk3qtwJjwEycfj45SmWhM6DKDIDgDxbeMxH%2BXIBQ3tCqEBXf4QzxU%2Bhhv0n8ozlpjez5W3%2FqhEDCmq%2BdpqJ2XR%2FuzxeUPawTo7zhAVl7ywy%2FSnrTgP8tSM%2Bh63Nt3Xvfc4j8OGxa48jeu2KEcbdmQ51C95hjvcLaoRSzgmE0isEevzCR58%2FDBjqkAfElNPHcaXCsWbbMUbP4eaT9%2BFUJOLJs0tB91rtJWDUhHGatpWvyV%2F1dT31h%2FjiiJpI1Ra7t2VtkaincGoYr7LVIY4dDeQVjgUOygHi7DOyifZgVGI2MM5uLp%2FqAGWVC1VgadO8g%2Ff56y6ZIdRBjuKg2n%2B%2BcqM3iE7ZElY13CyRVmv3oWpGHKEwTysfRwrYjWbWHpHfOBy2%2B%2BsMKkSP6OJB7S6Ti&X-Amz-Signature=ccc36403932df5fa2b0df938e14eb1968bff0c1f2503b1155c0eeccf78532c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHNAXZY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDKDb7JqEY8qW01fvDnpDddxtIEuiCHCOJ%2BnCLDAVVKqQIhAOCsxM96cklZJQQvkwzLNyDCsZW3ipaO1jZgyWt1AxbkKv8DCBsQABoMNjM3NDIzMTgzODA1IgxgoiW3XAJoU4loSRAq3AOLZZGmtA8FUjHLPypw8tp5nzmjPq4WH1oUfH60JaYfUe59eIioxJ0NAAneWiNvOyi9fUnUwkq7Wo3okqqrB4lAJVtcs%2B7K4vyYYVjxTUahX0TlXmjnfp1%2F6gL3TnoC64PqXaMbD3d5gR5feNrh%2BEXRF6bSKyVyb%2B1Uh4gEMwProQTGRPF%2FUbmRt5TzNNkxckKEIDfGqbtbPaWhU%2BhyJIodWPCWxw1u7x2K65TDhJhs%2BhGEIxA4%2F8lvzIWVM%2FZmKj3DTex5GQUd2EVOhCBqCP3k3H6DBQ15%2B6Oc5E4fZvIWg4zKttaoe4idaq4pwOFNCOMUASTvfzjkcGmFFNJ%2BaXVEY5uNusHcL5JxsIp3XbKkZhQXmxaIDq%2F3X8vQllgoDoDbJPJWuRGePh8caRCGVh4oP3PCLBSuN5H%2BDJSL3NE9MYXplnNptDAWeEEyIA5VCWfibYmMn1tBubeFGk3qtwJjwEycfj45SmWhM6DKDIDgDxbeMxH%2BXIBQ3tCqEBXf4QzxU%2Bhhv0n8ozlpjez5W3%2FqhEDCmq%2BdpqJ2XR%2FuzxeUPawTo7zhAVl7ywy%2FSnrTgP8tSM%2Bh63Nt3Xvfc4j8OGxa48jeu2KEcbdmQ51C95hjvcLaoRSzgmE0isEevzCR58%2FDBjqkAfElNPHcaXCsWbbMUbP4eaT9%2BFUJOLJs0tB91rtJWDUhHGatpWvyV%2F1dT31h%2FjiiJpI1Ra7t2VtkaincGoYr7LVIY4dDeQVjgUOygHi7DOyifZgVGI2MM5uLp%2FqAGWVC1VgadO8g%2Ff56y6ZIdRBjuKg2n%2B%2BcqM3iE7ZElY13CyRVmv3oWpGHKEwTysfRwrYjWbWHpHfOBy2%2B%2BsMKkSP6OJB7S6Ti&X-Amz-Signature=029fab1d03944dc1019e61b4be73dbf0ddd29fe988f046217d5b8c13bcdd2158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHNAXZY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDKDb7JqEY8qW01fvDnpDddxtIEuiCHCOJ%2BnCLDAVVKqQIhAOCsxM96cklZJQQvkwzLNyDCsZW3ipaO1jZgyWt1AxbkKv8DCBsQABoMNjM3NDIzMTgzODA1IgxgoiW3XAJoU4loSRAq3AOLZZGmtA8FUjHLPypw8tp5nzmjPq4WH1oUfH60JaYfUe59eIioxJ0NAAneWiNvOyi9fUnUwkq7Wo3okqqrB4lAJVtcs%2B7K4vyYYVjxTUahX0TlXmjnfp1%2F6gL3TnoC64PqXaMbD3d5gR5feNrh%2BEXRF6bSKyVyb%2B1Uh4gEMwProQTGRPF%2FUbmRt5TzNNkxckKEIDfGqbtbPaWhU%2BhyJIodWPCWxw1u7x2K65TDhJhs%2BhGEIxA4%2F8lvzIWVM%2FZmKj3DTex5GQUd2EVOhCBqCP3k3H6DBQ15%2B6Oc5E4fZvIWg4zKttaoe4idaq4pwOFNCOMUASTvfzjkcGmFFNJ%2BaXVEY5uNusHcL5JxsIp3XbKkZhQXmxaIDq%2F3X8vQllgoDoDbJPJWuRGePh8caRCGVh4oP3PCLBSuN5H%2BDJSL3NE9MYXplnNptDAWeEEyIA5VCWfibYmMn1tBubeFGk3qtwJjwEycfj45SmWhM6DKDIDgDxbeMxH%2BXIBQ3tCqEBXf4QzxU%2Bhhv0n8ozlpjez5W3%2FqhEDCmq%2BdpqJ2XR%2FuzxeUPawTo7zhAVl7ywy%2FSnrTgP8tSM%2Bh63Nt3Xvfc4j8OGxa48jeu2KEcbdmQ51C95hjvcLaoRSzgmE0isEevzCR58%2FDBjqkAfElNPHcaXCsWbbMUbP4eaT9%2BFUJOLJs0tB91rtJWDUhHGatpWvyV%2F1dT31h%2FjiiJpI1Ra7t2VtkaincGoYr7LVIY4dDeQVjgUOygHi7DOyifZgVGI2MM5uLp%2FqAGWVC1VgadO8g%2Ff56y6ZIdRBjuKg2n%2B%2BcqM3iE7ZElY13CyRVmv3oWpGHKEwTysfRwrYjWbWHpHfOBy2%2B%2BsMKkSP6OJB7S6Ti&X-Amz-Signature=3b0e6615f391e62e322953416e310e84534d775d57468d1152d84883bbd02acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

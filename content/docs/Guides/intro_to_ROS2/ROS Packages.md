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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNGAAZ3D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuD3DzzG8DjxCA1uS5qXbNUGQjniAeOEf5w3tN9RtsDgIgWh1jI1fu94ctecWwT4e9xseS84be3Qvako9z%2FITCh0EqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG1H6btmij%2Fd3ZKoyrcA%2BtmXU8KofjvEG1Z3fN8TePXSGsaF851Cnzba7N%2FeFHB%2Fn%2Be30eSnBI10xtOzIIx57TF5opOiCB8iIkmZuAFhVRFNPbY9xm4U2hhIarJTSo3aSjnYilVtYuy1bG3Fc1lOcguKUd9L4UaNZVRkp0dGwbBg0gO1OLje0gieS57F%2FBgdfnxM2%2BGqC25oz1WhczcIzQQnEAgywJjSSp3wv612Q9AnEbCSdUnlLl1szU8jX9oKl0YK%2B0MxmNXHN%2BuqjbRj9i3eiEq25vHN%2FSN7Fq3Qj2TZ%2BbJjipKFVE7ZQdHMqEMS3zv8o8HZilSP8chgSqq2nddamybuVtPB2abX5E3y6TFjb51jUyShLExP7l6DvZYB3oJcbB3spRzo%2Bml6kXOxCTEDrE6tAu8B0rOqstivWocnD1eu9BFZfFQ4d5ntI8655ebkHWC6W3PAUwcQ7UJvuynroiM2TN88E6OIJJHWpyFR6cCXm4bymoF%2B1AtTgbM69N0iHyvYtCR%2F8bKozagMA4FgX%2BpHw3TzsdHyBSIHrgXksEOLSke106c%2FopXsrAQsNujGOK17s7hflvQSF3d8dx9TJFIASmv2kEteTrypcyVuZTrJhHRro7XSyrginwXDHWWgrsHWBuII7BJMKygqsQGOqUBlY8l39iZqz9J9HXDcwzmzE6Dft06he66vQbKmSlGnWA7vqB6A1YS2QCnTtfrktczaOMv4A5gOdrt%2FgUSBJ%2BUWb1wNLf48VBuVLdnvctSHLGS1YhIx0konKAzuqKuofB7C5YhRMrDsyOQGkNDHhRdP2oNjydhAWqoZlO8upsPzvAevfx8i%2BXiaJ9b3IQ3lx2gKYZo0%2FBFol1Y1ytOHIuU14zoIlcH&X-Amz-Signature=24dd2f92e641a3a2646963b4bdefc7ded69d245fb415aae1e1af237f2e2d30d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNGAAZ3D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuD3DzzG8DjxCA1uS5qXbNUGQjniAeOEf5w3tN9RtsDgIgWh1jI1fu94ctecWwT4e9xseS84be3Qvako9z%2FITCh0EqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG1H6btmij%2Fd3ZKoyrcA%2BtmXU8KofjvEG1Z3fN8TePXSGsaF851Cnzba7N%2FeFHB%2Fn%2Be30eSnBI10xtOzIIx57TF5opOiCB8iIkmZuAFhVRFNPbY9xm4U2hhIarJTSo3aSjnYilVtYuy1bG3Fc1lOcguKUd9L4UaNZVRkp0dGwbBg0gO1OLje0gieS57F%2FBgdfnxM2%2BGqC25oz1WhczcIzQQnEAgywJjSSp3wv612Q9AnEbCSdUnlLl1szU8jX9oKl0YK%2B0MxmNXHN%2BuqjbRj9i3eiEq25vHN%2FSN7Fq3Qj2TZ%2BbJjipKFVE7ZQdHMqEMS3zv8o8HZilSP8chgSqq2nddamybuVtPB2abX5E3y6TFjb51jUyShLExP7l6DvZYB3oJcbB3spRzo%2Bml6kXOxCTEDrE6tAu8B0rOqstivWocnD1eu9BFZfFQ4d5ntI8655ebkHWC6W3PAUwcQ7UJvuynroiM2TN88E6OIJJHWpyFR6cCXm4bymoF%2B1AtTgbM69N0iHyvYtCR%2F8bKozagMA4FgX%2BpHw3TzsdHyBSIHrgXksEOLSke106c%2FopXsrAQsNujGOK17s7hflvQSF3d8dx9TJFIASmv2kEteTrypcyVuZTrJhHRro7XSyrginwXDHWWgrsHWBuII7BJMKygqsQGOqUBlY8l39iZqz9J9HXDcwzmzE6Dft06he66vQbKmSlGnWA7vqB6A1YS2QCnTtfrktczaOMv4A5gOdrt%2FgUSBJ%2BUWb1wNLf48VBuVLdnvctSHLGS1YhIx0konKAzuqKuofB7C5YhRMrDsyOQGkNDHhRdP2oNjydhAWqoZlO8upsPzvAevfx8i%2BXiaJ9b3IQ3lx2gKYZo0%2FBFol1Y1ytOHIuU14zoIlcH&X-Amz-Signature=4755e6df5182939eb5e1146504a57e3546b0c00e7d42a05aaf1b23bc3f50cc08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNGAAZ3D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuD3DzzG8DjxCA1uS5qXbNUGQjniAeOEf5w3tN9RtsDgIgWh1jI1fu94ctecWwT4e9xseS84be3Qvako9z%2FITCh0EqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG1H6btmij%2Fd3ZKoyrcA%2BtmXU8KofjvEG1Z3fN8TePXSGsaF851Cnzba7N%2FeFHB%2Fn%2Be30eSnBI10xtOzIIx57TF5opOiCB8iIkmZuAFhVRFNPbY9xm4U2hhIarJTSo3aSjnYilVtYuy1bG3Fc1lOcguKUd9L4UaNZVRkp0dGwbBg0gO1OLje0gieS57F%2FBgdfnxM2%2BGqC25oz1WhczcIzQQnEAgywJjSSp3wv612Q9AnEbCSdUnlLl1szU8jX9oKl0YK%2B0MxmNXHN%2BuqjbRj9i3eiEq25vHN%2FSN7Fq3Qj2TZ%2BbJjipKFVE7ZQdHMqEMS3zv8o8HZilSP8chgSqq2nddamybuVtPB2abX5E3y6TFjb51jUyShLExP7l6DvZYB3oJcbB3spRzo%2Bml6kXOxCTEDrE6tAu8B0rOqstivWocnD1eu9BFZfFQ4d5ntI8655ebkHWC6W3PAUwcQ7UJvuynroiM2TN88E6OIJJHWpyFR6cCXm4bymoF%2B1AtTgbM69N0iHyvYtCR%2F8bKozagMA4FgX%2BpHw3TzsdHyBSIHrgXksEOLSke106c%2FopXsrAQsNujGOK17s7hflvQSF3d8dx9TJFIASmv2kEteTrypcyVuZTrJhHRro7XSyrginwXDHWWgrsHWBuII7BJMKygqsQGOqUBlY8l39iZqz9J9HXDcwzmzE6Dft06he66vQbKmSlGnWA7vqB6A1YS2QCnTtfrktczaOMv4A5gOdrt%2FgUSBJ%2BUWb1wNLf48VBuVLdnvctSHLGS1YhIx0konKAzuqKuofB7C5YhRMrDsyOQGkNDHhRdP2oNjydhAWqoZlO8upsPzvAevfx8i%2BXiaJ9b3IQ3lx2gKYZo0%2FBFol1Y1ytOHIuU14zoIlcH&X-Amz-Signature=4ff84d55b72a93148c416cbffaf573f5c45e0bd225a5f750bd98b5bd8cf95cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNGAAZ3D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuD3DzzG8DjxCA1uS5qXbNUGQjniAeOEf5w3tN9RtsDgIgWh1jI1fu94ctecWwT4e9xseS84be3Qvako9z%2FITCh0EqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG1H6btmij%2Fd3ZKoyrcA%2BtmXU8KofjvEG1Z3fN8TePXSGsaF851Cnzba7N%2FeFHB%2Fn%2Be30eSnBI10xtOzIIx57TF5opOiCB8iIkmZuAFhVRFNPbY9xm4U2hhIarJTSo3aSjnYilVtYuy1bG3Fc1lOcguKUd9L4UaNZVRkp0dGwbBg0gO1OLje0gieS57F%2FBgdfnxM2%2BGqC25oz1WhczcIzQQnEAgywJjSSp3wv612Q9AnEbCSdUnlLl1szU8jX9oKl0YK%2B0MxmNXHN%2BuqjbRj9i3eiEq25vHN%2FSN7Fq3Qj2TZ%2BbJjipKFVE7ZQdHMqEMS3zv8o8HZilSP8chgSqq2nddamybuVtPB2abX5E3y6TFjb51jUyShLExP7l6DvZYB3oJcbB3spRzo%2Bml6kXOxCTEDrE6tAu8B0rOqstivWocnD1eu9BFZfFQ4d5ntI8655ebkHWC6W3PAUwcQ7UJvuynroiM2TN88E6OIJJHWpyFR6cCXm4bymoF%2B1AtTgbM69N0iHyvYtCR%2F8bKozagMA4FgX%2BpHw3TzsdHyBSIHrgXksEOLSke106c%2FopXsrAQsNujGOK17s7hflvQSF3d8dx9TJFIASmv2kEteTrypcyVuZTrJhHRro7XSyrginwXDHWWgrsHWBuII7BJMKygqsQGOqUBlY8l39iZqz9J9HXDcwzmzE6Dft06he66vQbKmSlGnWA7vqB6A1YS2QCnTtfrktczaOMv4A5gOdrt%2FgUSBJ%2BUWb1wNLf48VBuVLdnvctSHLGS1YhIx0konKAzuqKuofB7C5YhRMrDsyOQGkNDHhRdP2oNjydhAWqoZlO8upsPzvAevfx8i%2BXiaJ9b3IQ3lx2gKYZo0%2FBFol1Y1ytOHIuU14zoIlcH&X-Amz-Signature=e7ad714af897c9ae54ca7ce6a29d102ed29acf4d034a9ea17645419f031a4013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNGAAZ3D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuD3DzzG8DjxCA1uS5qXbNUGQjniAeOEf5w3tN9RtsDgIgWh1jI1fu94ctecWwT4e9xseS84be3Qvako9z%2FITCh0EqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG1H6btmij%2Fd3ZKoyrcA%2BtmXU8KofjvEG1Z3fN8TePXSGsaF851Cnzba7N%2FeFHB%2Fn%2Be30eSnBI10xtOzIIx57TF5opOiCB8iIkmZuAFhVRFNPbY9xm4U2hhIarJTSo3aSjnYilVtYuy1bG3Fc1lOcguKUd9L4UaNZVRkp0dGwbBg0gO1OLje0gieS57F%2FBgdfnxM2%2BGqC25oz1WhczcIzQQnEAgywJjSSp3wv612Q9AnEbCSdUnlLl1szU8jX9oKl0YK%2B0MxmNXHN%2BuqjbRj9i3eiEq25vHN%2FSN7Fq3Qj2TZ%2BbJjipKFVE7ZQdHMqEMS3zv8o8HZilSP8chgSqq2nddamybuVtPB2abX5E3y6TFjb51jUyShLExP7l6DvZYB3oJcbB3spRzo%2Bml6kXOxCTEDrE6tAu8B0rOqstivWocnD1eu9BFZfFQ4d5ntI8655ebkHWC6W3PAUwcQ7UJvuynroiM2TN88E6OIJJHWpyFR6cCXm4bymoF%2B1AtTgbM69N0iHyvYtCR%2F8bKozagMA4FgX%2BpHw3TzsdHyBSIHrgXksEOLSke106c%2FopXsrAQsNujGOK17s7hflvQSF3d8dx9TJFIASmv2kEteTrypcyVuZTrJhHRro7XSyrginwXDHWWgrsHWBuII7BJMKygqsQGOqUBlY8l39iZqz9J9HXDcwzmzE6Dft06he66vQbKmSlGnWA7vqB6A1YS2QCnTtfrktczaOMv4A5gOdrt%2FgUSBJ%2BUWb1wNLf48VBuVLdnvctSHLGS1YhIx0konKAzuqKuofB7C5YhRMrDsyOQGkNDHhRdP2oNjydhAWqoZlO8upsPzvAevfx8i%2BXiaJ9b3IQ3lx2gKYZo0%2FBFol1Y1ytOHIuU14zoIlcH&X-Amz-Signature=2b9e353b0a1393bd4049bbe56974e2983d1930f30f6e3da563ff1d4f9dc9d5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNGAAZ3D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuD3DzzG8DjxCA1uS5qXbNUGQjniAeOEf5w3tN9RtsDgIgWh1jI1fu94ctecWwT4e9xseS84be3Qvako9z%2FITCh0EqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG1H6btmij%2Fd3ZKoyrcA%2BtmXU8KofjvEG1Z3fN8TePXSGsaF851Cnzba7N%2FeFHB%2Fn%2Be30eSnBI10xtOzIIx57TF5opOiCB8iIkmZuAFhVRFNPbY9xm4U2hhIarJTSo3aSjnYilVtYuy1bG3Fc1lOcguKUd9L4UaNZVRkp0dGwbBg0gO1OLje0gieS57F%2FBgdfnxM2%2BGqC25oz1WhczcIzQQnEAgywJjSSp3wv612Q9AnEbCSdUnlLl1szU8jX9oKl0YK%2B0MxmNXHN%2BuqjbRj9i3eiEq25vHN%2FSN7Fq3Qj2TZ%2BbJjipKFVE7ZQdHMqEMS3zv8o8HZilSP8chgSqq2nddamybuVtPB2abX5E3y6TFjb51jUyShLExP7l6DvZYB3oJcbB3spRzo%2Bml6kXOxCTEDrE6tAu8B0rOqstivWocnD1eu9BFZfFQ4d5ntI8655ebkHWC6W3PAUwcQ7UJvuynroiM2TN88E6OIJJHWpyFR6cCXm4bymoF%2B1AtTgbM69N0iHyvYtCR%2F8bKozagMA4FgX%2BpHw3TzsdHyBSIHrgXksEOLSke106c%2FopXsrAQsNujGOK17s7hflvQSF3d8dx9TJFIASmv2kEteTrypcyVuZTrJhHRro7XSyrginwXDHWWgrsHWBuII7BJMKygqsQGOqUBlY8l39iZqz9J9HXDcwzmzE6Dft06he66vQbKmSlGnWA7vqB6A1YS2QCnTtfrktczaOMv4A5gOdrt%2FgUSBJ%2BUWb1wNLf48VBuVLdnvctSHLGS1YhIx0konKAzuqKuofB7C5YhRMrDsyOQGkNDHhRdP2oNjydhAWqoZlO8upsPzvAevfx8i%2BXiaJ9b3IQ3lx2gKYZo0%2FBFol1Y1ytOHIuU14zoIlcH&X-Amz-Signature=f16dca419b1f141505f454cf319ce7f714fe9b3568bcdce6f4d1c27c83dbd3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNGAAZ3D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuD3DzzG8DjxCA1uS5qXbNUGQjniAeOEf5w3tN9RtsDgIgWh1jI1fu94ctecWwT4e9xseS84be3Qvako9z%2FITCh0EqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG1H6btmij%2Fd3ZKoyrcA%2BtmXU8KofjvEG1Z3fN8TePXSGsaF851Cnzba7N%2FeFHB%2Fn%2Be30eSnBI10xtOzIIx57TF5opOiCB8iIkmZuAFhVRFNPbY9xm4U2hhIarJTSo3aSjnYilVtYuy1bG3Fc1lOcguKUd9L4UaNZVRkp0dGwbBg0gO1OLje0gieS57F%2FBgdfnxM2%2BGqC25oz1WhczcIzQQnEAgywJjSSp3wv612Q9AnEbCSdUnlLl1szU8jX9oKl0YK%2B0MxmNXHN%2BuqjbRj9i3eiEq25vHN%2FSN7Fq3Qj2TZ%2BbJjipKFVE7ZQdHMqEMS3zv8o8HZilSP8chgSqq2nddamybuVtPB2abX5E3y6TFjb51jUyShLExP7l6DvZYB3oJcbB3spRzo%2Bml6kXOxCTEDrE6tAu8B0rOqstivWocnD1eu9BFZfFQ4d5ntI8655ebkHWC6W3PAUwcQ7UJvuynroiM2TN88E6OIJJHWpyFR6cCXm4bymoF%2B1AtTgbM69N0iHyvYtCR%2F8bKozagMA4FgX%2BpHw3TzsdHyBSIHrgXksEOLSke106c%2FopXsrAQsNujGOK17s7hflvQSF3d8dx9TJFIASmv2kEteTrypcyVuZTrJhHRro7XSyrginwXDHWWgrsHWBuII7BJMKygqsQGOqUBlY8l39iZqz9J9HXDcwzmzE6Dft06he66vQbKmSlGnWA7vqB6A1YS2QCnTtfrktczaOMv4A5gOdrt%2FgUSBJ%2BUWb1wNLf48VBuVLdnvctSHLGS1YhIx0konKAzuqKuofB7C5YhRMrDsyOQGkNDHhRdP2oNjydhAWqoZlO8upsPzvAevfx8i%2BXiaJ9b3IQ3lx2gKYZo0%2FBFol1Y1ytOHIuU14zoIlcH&X-Amz-Signature=690c6d8413017e3f9d5e19b662e9b179b0a8d6374c8669bfda971986965f2c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

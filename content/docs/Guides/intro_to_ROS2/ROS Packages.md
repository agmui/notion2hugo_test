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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEHDQST%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMyf95vpfrp1%2Ft%2FMHRn7FBPomn4KcR%2FeLD8aobQiwzWgIhAJMatBUC%2FHaIiL9GtW%2BhuQ4hSvdCq2f7YkTxld3Kay%2BqKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQyTJHgXnAXsgZ3z8q3AOfBY2Eb03OgX7J5dwUWS2DBQGGlofuLYfFnF3x6SZw08Gc5Nsscrl5PUKBweTXrh6nwCca9z4izR%2Bq6%2BB3aQj8GLOAICM7uU8bpgeBlUqKi6j4Hfwo%2BcnfWwlV5c3xPeGNBY1SfQY9qyGa0aRMDCK9DIp2LhiaiTTK7OUZcj8bqUQdRHNI71CKMKb%2FzVClHE6chnpix3hJVknmbJwQ%2FrQBLS0FpgbFYBIPy2kLpEWg3HvQVZJKU74D5NZ1Q9y4Es1Jk9iehFvKnC%2BvHWyQqK3XcU682nZVuGpwy3dencNDwkgf0srZEhCjIH7RWZVVRBLw0JBwMThJt7dAlG5FDzeObj0dWtyb1ZkKhdaFqLxz9QJ3wYBJTz71L6Pm34O%2F5Co4s4ScxcpvJYXOY59lnnPrmddMm2YNCbDlzl7NL4OmVS4VabBVb7UK4KsuuvrSIMTywfwebHdomWGfBogC54%2FA%2FhTFrqBLYCHxRXdyW1JZ1qHwrjTkTsNywES6oev%2FJmC9XhLSHLMixFZOmjtSToguAJBSU9BSFqvisugzT%2FrUI192KKelhO9E4oYvE2mkHhb%2B1p8Nzm%2FfBjQ3nYPoy3mRd1Hh461hBHEVxHqITV1vqmgIj1yntAzQxM%2BPijDOxa3EBjqkAVK9j8aIw2nj%2Bm2LUnLUg%2BXJ86lo0NFujxKtfO2elP4NuXY0HG6RBZCGu0KkumOCLu1VmnJXda7a%2FBv70MDh3c496U4Wjk1SXjZhWm5Im2tSeEVkO%2FQvr9o%2BsyHV31LcXEfVcpR15cjrn66AR9HdRdcwtSBlM8IPt7kjqoNNrwnm0t9sb5lz%2FAaz0YAW1OSXkg%2BE94ykNKpeDqQqJF8l9LvbQw4u&X-Amz-Signature=3f8811479ee1c2650dae70f680e3b1ef4d0601b768f98ba9208eb5b47930b762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEHDQST%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMyf95vpfrp1%2Ft%2FMHRn7FBPomn4KcR%2FeLD8aobQiwzWgIhAJMatBUC%2FHaIiL9GtW%2BhuQ4hSvdCq2f7YkTxld3Kay%2BqKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQyTJHgXnAXsgZ3z8q3AOfBY2Eb03OgX7J5dwUWS2DBQGGlofuLYfFnF3x6SZw08Gc5Nsscrl5PUKBweTXrh6nwCca9z4izR%2Bq6%2BB3aQj8GLOAICM7uU8bpgeBlUqKi6j4Hfwo%2BcnfWwlV5c3xPeGNBY1SfQY9qyGa0aRMDCK9DIp2LhiaiTTK7OUZcj8bqUQdRHNI71CKMKb%2FzVClHE6chnpix3hJVknmbJwQ%2FrQBLS0FpgbFYBIPy2kLpEWg3HvQVZJKU74D5NZ1Q9y4Es1Jk9iehFvKnC%2BvHWyQqK3XcU682nZVuGpwy3dencNDwkgf0srZEhCjIH7RWZVVRBLw0JBwMThJt7dAlG5FDzeObj0dWtyb1ZkKhdaFqLxz9QJ3wYBJTz71L6Pm34O%2F5Co4s4ScxcpvJYXOY59lnnPrmddMm2YNCbDlzl7NL4OmVS4VabBVb7UK4KsuuvrSIMTywfwebHdomWGfBogC54%2FA%2FhTFrqBLYCHxRXdyW1JZ1qHwrjTkTsNywES6oev%2FJmC9XhLSHLMixFZOmjtSToguAJBSU9BSFqvisugzT%2FrUI192KKelhO9E4oYvE2mkHhb%2B1p8Nzm%2FfBjQ3nYPoy3mRd1Hh461hBHEVxHqITV1vqmgIj1yntAzQxM%2BPijDOxa3EBjqkAVK9j8aIw2nj%2Bm2LUnLUg%2BXJ86lo0NFujxKtfO2elP4NuXY0HG6RBZCGu0KkumOCLu1VmnJXda7a%2FBv70MDh3c496U4Wjk1SXjZhWm5Im2tSeEVkO%2FQvr9o%2BsyHV31LcXEfVcpR15cjrn66AR9HdRdcwtSBlM8IPt7kjqoNNrwnm0t9sb5lz%2FAaz0YAW1OSXkg%2BE94ykNKpeDqQqJF8l9LvbQw4u&X-Amz-Signature=a95efd30cb7f42dec93f71f7a949983de2e0bf659d7090dfb49ef70a273c2937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEHDQST%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMyf95vpfrp1%2Ft%2FMHRn7FBPomn4KcR%2FeLD8aobQiwzWgIhAJMatBUC%2FHaIiL9GtW%2BhuQ4hSvdCq2f7YkTxld3Kay%2BqKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQyTJHgXnAXsgZ3z8q3AOfBY2Eb03OgX7J5dwUWS2DBQGGlofuLYfFnF3x6SZw08Gc5Nsscrl5PUKBweTXrh6nwCca9z4izR%2Bq6%2BB3aQj8GLOAICM7uU8bpgeBlUqKi6j4Hfwo%2BcnfWwlV5c3xPeGNBY1SfQY9qyGa0aRMDCK9DIp2LhiaiTTK7OUZcj8bqUQdRHNI71CKMKb%2FzVClHE6chnpix3hJVknmbJwQ%2FrQBLS0FpgbFYBIPy2kLpEWg3HvQVZJKU74D5NZ1Q9y4Es1Jk9iehFvKnC%2BvHWyQqK3XcU682nZVuGpwy3dencNDwkgf0srZEhCjIH7RWZVVRBLw0JBwMThJt7dAlG5FDzeObj0dWtyb1ZkKhdaFqLxz9QJ3wYBJTz71L6Pm34O%2F5Co4s4ScxcpvJYXOY59lnnPrmddMm2YNCbDlzl7NL4OmVS4VabBVb7UK4KsuuvrSIMTywfwebHdomWGfBogC54%2FA%2FhTFrqBLYCHxRXdyW1JZ1qHwrjTkTsNywES6oev%2FJmC9XhLSHLMixFZOmjtSToguAJBSU9BSFqvisugzT%2FrUI192KKelhO9E4oYvE2mkHhb%2B1p8Nzm%2FfBjQ3nYPoy3mRd1Hh461hBHEVxHqITV1vqmgIj1yntAzQxM%2BPijDOxa3EBjqkAVK9j8aIw2nj%2Bm2LUnLUg%2BXJ86lo0NFujxKtfO2elP4NuXY0HG6RBZCGu0KkumOCLu1VmnJXda7a%2FBv70MDh3c496U4Wjk1SXjZhWm5Im2tSeEVkO%2FQvr9o%2BsyHV31LcXEfVcpR15cjrn66AR9HdRdcwtSBlM8IPt7kjqoNNrwnm0t9sb5lz%2FAaz0YAW1OSXkg%2BE94ykNKpeDqQqJF8l9LvbQw4u&X-Amz-Signature=6a22e6144fb9cc4a1012b7046f79dc8dbcfc992e418bf058997975bbabc4f1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEHDQST%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMyf95vpfrp1%2Ft%2FMHRn7FBPomn4KcR%2FeLD8aobQiwzWgIhAJMatBUC%2FHaIiL9GtW%2BhuQ4hSvdCq2f7YkTxld3Kay%2BqKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQyTJHgXnAXsgZ3z8q3AOfBY2Eb03OgX7J5dwUWS2DBQGGlofuLYfFnF3x6SZw08Gc5Nsscrl5PUKBweTXrh6nwCca9z4izR%2Bq6%2BB3aQj8GLOAICM7uU8bpgeBlUqKi6j4Hfwo%2BcnfWwlV5c3xPeGNBY1SfQY9qyGa0aRMDCK9DIp2LhiaiTTK7OUZcj8bqUQdRHNI71CKMKb%2FzVClHE6chnpix3hJVknmbJwQ%2FrQBLS0FpgbFYBIPy2kLpEWg3HvQVZJKU74D5NZ1Q9y4Es1Jk9iehFvKnC%2BvHWyQqK3XcU682nZVuGpwy3dencNDwkgf0srZEhCjIH7RWZVVRBLw0JBwMThJt7dAlG5FDzeObj0dWtyb1ZkKhdaFqLxz9QJ3wYBJTz71L6Pm34O%2F5Co4s4ScxcpvJYXOY59lnnPrmddMm2YNCbDlzl7NL4OmVS4VabBVb7UK4KsuuvrSIMTywfwebHdomWGfBogC54%2FA%2FhTFrqBLYCHxRXdyW1JZ1qHwrjTkTsNywES6oev%2FJmC9XhLSHLMixFZOmjtSToguAJBSU9BSFqvisugzT%2FrUI192KKelhO9E4oYvE2mkHhb%2B1p8Nzm%2FfBjQ3nYPoy3mRd1Hh461hBHEVxHqITV1vqmgIj1yntAzQxM%2BPijDOxa3EBjqkAVK9j8aIw2nj%2Bm2LUnLUg%2BXJ86lo0NFujxKtfO2elP4NuXY0HG6RBZCGu0KkumOCLu1VmnJXda7a%2FBv70MDh3c496U4Wjk1SXjZhWm5Im2tSeEVkO%2FQvr9o%2BsyHV31LcXEfVcpR15cjrn66AR9HdRdcwtSBlM8IPt7kjqoNNrwnm0t9sb5lz%2FAaz0YAW1OSXkg%2BE94ykNKpeDqQqJF8l9LvbQw4u&X-Amz-Signature=2b44ac8671af1bb5aba74461874bca4a41bb640a7ec0a9fc26988523e3fcf5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEHDQST%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMyf95vpfrp1%2Ft%2FMHRn7FBPomn4KcR%2FeLD8aobQiwzWgIhAJMatBUC%2FHaIiL9GtW%2BhuQ4hSvdCq2f7YkTxld3Kay%2BqKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQyTJHgXnAXsgZ3z8q3AOfBY2Eb03OgX7J5dwUWS2DBQGGlofuLYfFnF3x6SZw08Gc5Nsscrl5PUKBweTXrh6nwCca9z4izR%2Bq6%2BB3aQj8GLOAICM7uU8bpgeBlUqKi6j4Hfwo%2BcnfWwlV5c3xPeGNBY1SfQY9qyGa0aRMDCK9DIp2LhiaiTTK7OUZcj8bqUQdRHNI71CKMKb%2FzVClHE6chnpix3hJVknmbJwQ%2FrQBLS0FpgbFYBIPy2kLpEWg3HvQVZJKU74D5NZ1Q9y4Es1Jk9iehFvKnC%2BvHWyQqK3XcU682nZVuGpwy3dencNDwkgf0srZEhCjIH7RWZVVRBLw0JBwMThJt7dAlG5FDzeObj0dWtyb1ZkKhdaFqLxz9QJ3wYBJTz71L6Pm34O%2F5Co4s4ScxcpvJYXOY59lnnPrmddMm2YNCbDlzl7NL4OmVS4VabBVb7UK4KsuuvrSIMTywfwebHdomWGfBogC54%2FA%2FhTFrqBLYCHxRXdyW1JZ1qHwrjTkTsNywES6oev%2FJmC9XhLSHLMixFZOmjtSToguAJBSU9BSFqvisugzT%2FrUI192KKelhO9E4oYvE2mkHhb%2B1p8Nzm%2FfBjQ3nYPoy3mRd1Hh461hBHEVxHqITV1vqmgIj1yntAzQxM%2BPijDOxa3EBjqkAVK9j8aIw2nj%2Bm2LUnLUg%2BXJ86lo0NFujxKtfO2elP4NuXY0HG6RBZCGu0KkumOCLu1VmnJXda7a%2FBv70MDh3c496U4Wjk1SXjZhWm5Im2tSeEVkO%2FQvr9o%2BsyHV31LcXEfVcpR15cjrn66AR9HdRdcwtSBlM8IPt7kjqoNNrwnm0t9sb5lz%2FAaz0YAW1OSXkg%2BE94ykNKpeDqQqJF8l9LvbQw4u&X-Amz-Signature=af1431000857e7ae74848f12e263e11c6875982d8c675f2e2f2d001a49166d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEHDQST%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMyf95vpfrp1%2Ft%2FMHRn7FBPomn4KcR%2FeLD8aobQiwzWgIhAJMatBUC%2FHaIiL9GtW%2BhuQ4hSvdCq2f7YkTxld3Kay%2BqKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQyTJHgXnAXsgZ3z8q3AOfBY2Eb03OgX7J5dwUWS2DBQGGlofuLYfFnF3x6SZw08Gc5Nsscrl5PUKBweTXrh6nwCca9z4izR%2Bq6%2BB3aQj8GLOAICM7uU8bpgeBlUqKi6j4Hfwo%2BcnfWwlV5c3xPeGNBY1SfQY9qyGa0aRMDCK9DIp2LhiaiTTK7OUZcj8bqUQdRHNI71CKMKb%2FzVClHE6chnpix3hJVknmbJwQ%2FrQBLS0FpgbFYBIPy2kLpEWg3HvQVZJKU74D5NZ1Q9y4Es1Jk9iehFvKnC%2BvHWyQqK3XcU682nZVuGpwy3dencNDwkgf0srZEhCjIH7RWZVVRBLw0JBwMThJt7dAlG5FDzeObj0dWtyb1ZkKhdaFqLxz9QJ3wYBJTz71L6Pm34O%2F5Co4s4ScxcpvJYXOY59lnnPrmddMm2YNCbDlzl7NL4OmVS4VabBVb7UK4KsuuvrSIMTywfwebHdomWGfBogC54%2FA%2FhTFrqBLYCHxRXdyW1JZ1qHwrjTkTsNywES6oev%2FJmC9XhLSHLMixFZOmjtSToguAJBSU9BSFqvisugzT%2FrUI192KKelhO9E4oYvE2mkHhb%2B1p8Nzm%2FfBjQ3nYPoy3mRd1Hh461hBHEVxHqITV1vqmgIj1yntAzQxM%2BPijDOxa3EBjqkAVK9j8aIw2nj%2Bm2LUnLUg%2BXJ86lo0NFujxKtfO2elP4NuXY0HG6RBZCGu0KkumOCLu1VmnJXda7a%2FBv70MDh3c496U4Wjk1SXjZhWm5Im2tSeEVkO%2FQvr9o%2BsyHV31LcXEfVcpR15cjrn66AR9HdRdcwtSBlM8IPt7kjqoNNrwnm0t9sb5lz%2FAaz0YAW1OSXkg%2BE94ykNKpeDqQqJF8l9LvbQw4u&X-Amz-Signature=7fe4e45075d04b9bad3729a67fd65728330772b5c4ce6d9316e6d4b3e51db332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEHDQST%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMyf95vpfrp1%2Ft%2FMHRn7FBPomn4KcR%2FeLD8aobQiwzWgIhAJMatBUC%2FHaIiL9GtW%2BhuQ4hSvdCq2f7YkTxld3Kay%2BqKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQyTJHgXnAXsgZ3z8q3AOfBY2Eb03OgX7J5dwUWS2DBQGGlofuLYfFnF3x6SZw08Gc5Nsscrl5PUKBweTXrh6nwCca9z4izR%2Bq6%2BB3aQj8GLOAICM7uU8bpgeBlUqKi6j4Hfwo%2BcnfWwlV5c3xPeGNBY1SfQY9qyGa0aRMDCK9DIp2LhiaiTTK7OUZcj8bqUQdRHNI71CKMKb%2FzVClHE6chnpix3hJVknmbJwQ%2FrQBLS0FpgbFYBIPy2kLpEWg3HvQVZJKU74D5NZ1Q9y4Es1Jk9iehFvKnC%2BvHWyQqK3XcU682nZVuGpwy3dencNDwkgf0srZEhCjIH7RWZVVRBLw0JBwMThJt7dAlG5FDzeObj0dWtyb1ZkKhdaFqLxz9QJ3wYBJTz71L6Pm34O%2F5Co4s4ScxcpvJYXOY59lnnPrmddMm2YNCbDlzl7NL4OmVS4VabBVb7UK4KsuuvrSIMTywfwebHdomWGfBogC54%2FA%2FhTFrqBLYCHxRXdyW1JZ1qHwrjTkTsNywES6oev%2FJmC9XhLSHLMixFZOmjtSToguAJBSU9BSFqvisugzT%2FrUI192KKelhO9E4oYvE2mkHhb%2B1p8Nzm%2FfBjQ3nYPoy3mRd1Hh461hBHEVxHqITV1vqmgIj1yntAzQxM%2BPijDOxa3EBjqkAVK9j8aIw2nj%2Bm2LUnLUg%2BXJ86lo0NFujxKtfO2elP4NuXY0HG6RBZCGu0KkumOCLu1VmnJXda7a%2FBv70MDh3c496U4Wjk1SXjZhWm5Im2tSeEVkO%2FQvr9o%2BsyHV31LcXEfVcpR15cjrn66AR9HdRdcwtSBlM8IPt7kjqoNNrwnm0t9sb5lz%2FAaz0YAW1OSXkg%2BE94ykNKpeDqQqJF8l9LvbQw4u&X-Amz-Signature=74e5e385a6f2462e432711de3f47e14981912e5bd112bfd82e8b0becae322bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

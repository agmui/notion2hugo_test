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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T42I5EJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIETSOoP2XRsFTvURL97DeJzUZmsCU8FPYmPFX2tXFSfcAiBIkLVPt0GpO7y9yRtFqhadgQMz2PWsnjcH2DXXmOoZqyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7jw70EfzSp09FI6KtwDlktrl1CzU9NBssCxO5DaHhBfN1YPaDq1ViJ38qgTdISGwFN8t7NmykSvI9%2BfpVzFlnkqr%2FVV8a0mFRpyKEOo3qaM2pW6zIVX381vVZ%2B2A0onn6gEt98nlUxN3oRoab2oavSf%2B0IUyIuUKaDi4d1lh36sL4Wr%2Bj9gkizyENPDTkjJhlUOE19hNVUzxzW2cIvute2Qtp6YHfPUl8B1RkzK32NUuRtyAyRj0%2BECxxruJn1GPmlUMgp94%2BhgMwkFrJRd4PnzKJ2BfEUJvvWS7hTZLQNZrNEUMAM0LP9pjxd2sHw2tNcfPCnhKbe%2Fl0CQYFqmQYPIaAHGe2KcAaqGmcFqirBUvA95kY3i24DDfWD8N5eSn9P2S5vJuP22g3l23wiNU66ZbJxv7huWlke2VMMw96z0IlX2S9J9BTOxdR5OAFD3voUsOeqeL3onA83Spr6sxXYSP52WDLnQ3FTIayWYFnDan99ePXgEeEPYuBHlDFkNLHSSqs1r2fzqM3N9fCca1IIKgctbFaAVDB7P7X2hPfHsud6y%2BmXDkOMrUS2KEBcl3wxl9a0YBmPWZow3YISa2Nqm0zGs7K76JnpXKyOxwNe6uhvCib6Ll%2FPv7a27E2c610LqSnRGXTB59m0wi7DwvwY6pgGd9oSxT5Kmd7EncDVsMaQoJe5zNKRmf9CdoCn8hmc8egI6ioi5GyJZlT%2F1VC0bFCVNsBuh4%2B%2F902LFWATJOX0b4%2FWmKeszA4QrMUiNbnvL4s%2Bdjms%2Be6%2FjK0k92uCQXzeBJQkYVGgIP1sokKTWp9ouvVBiQNztxsTxwQ0vr3T5iZbLpBiem%2F4rYcyTYJ433yLDjOBOXrLhvPftyIXcf4wUWffz8E21&X-Amz-Signature=b9ac4756e403b58b3570785a4d1450b568c939d362bbdc172f4c20ea4d05c626&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T42I5EJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIETSOoP2XRsFTvURL97DeJzUZmsCU8FPYmPFX2tXFSfcAiBIkLVPt0GpO7y9yRtFqhadgQMz2PWsnjcH2DXXmOoZqyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7jw70EfzSp09FI6KtwDlktrl1CzU9NBssCxO5DaHhBfN1YPaDq1ViJ38qgTdISGwFN8t7NmykSvI9%2BfpVzFlnkqr%2FVV8a0mFRpyKEOo3qaM2pW6zIVX381vVZ%2B2A0onn6gEt98nlUxN3oRoab2oavSf%2B0IUyIuUKaDi4d1lh36sL4Wr%2Bj9gkizyENPDTkjJhlUOE19hNVUzxzW2cIvute2Qtp6YHfPUl8B1RkzK32NUuRtyAyRj0%2BECxxruJn1GPmlUMgp94%2BhgMwkFrJRd4PnzKJ2BfEUJvvWS7hTZLQNZrNEUMAM0LP9pjxd2sHw2tNcfPCnhKbe%2Fl0CQYFqmQYPIaAHGe2KcAaqGmcFqirBUvA95kY3i24DDfWD8N5eSn9P2S5vJuP22g3l23wiNU66ZbJxv7huWlke2VMMw96z0IlX2S9J9BTOxdR5OAFD3voUsOeqeL3onA83Spr6sxXYSP52WDLnQ3FTIayWYFnDan99ePXgEeEPYuBHlDFkNLHSSqs1r2fzqM3N9fCca1IIKgctbFaAVDB7P7X2hPfHsud6y%2BmXDkOMrUS2KEBcl3wxl9a0YBmPWZow3YISa2Nqm0zGs7K76JnpXKyOxwNe6uhvCib6Ll%2FPv7a27E2c610LqSnRGXTB59m0wi7DwvwY6pgGd9oSxT5Kmd7EncDVsMaQoJe5zNKRmf9CdoCn8hmc8egI6ioi5GyJZlT%2F1VC0bFCVNsBuh4%2B%2F902LFWATJOX0b4%2FWmKeszA4QrMUiNbnvL4s%2Bdjms%2Be6%2FjK0k92uCQXzeBJQkYVGgIP1sokKTWp9ouvVBiQNztxsTxwQ0vr3T5iZbLpBiem%2F4rYcyTYJ433yLDjOBOXrLhvPftyIXcf4wUWffz8E21&X-Amz-Signature=1466efca81faafbdf9f8767dba3abd8c6a310b19fd3cd693ae788ef2be58b26a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T42I5EJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIETSOoP2XRsFTvURL97DeJzUZmsCU8FPYmPFX2tXFSfcAiBIkLVPt0GpO7y9yRtFqhadgQMz2PWsnjcH2DXXmOoZqyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7jw70EfzSp09FI6KtwDlktrl1CzU9NBssCxO5DaHhBfN1YPaDq1ViJ38qgTdISGwFN8t7NmykSvI9%2BfpVzFlnkqr%2FVV8a0mFRpyKEOo3qaM2pW6zIVX381vVZ%2B2A0onn6gEt98nlUxN3oRoab2oavSf%2B0IUyIuUKaDi4d1lh36sL4Wr%2Bj9gkizyENPDTkjJhlUOE19hNVUzxzW2cIvute2Qtp6YHfPUl8B1RkzK32NUuRtyAyRj0%2BECxxruJn1GPmlUMgp94%2BhgMwkFrJRd4PnzKJ2BfEUJvvWS7hTZLQNZrNEUMAM0LP9pjxd2sHw2tNcfPCnhKbe%2Fl0CQYFqmQYPIaAHGe2KcAaqGmcFqirBUvA95kY3i24DDfWD8N5eSn9P2S5vJuP22g3l23wiNU66ZbJxv7huWlke2VMMw96z0IlX2S9J9BTOxdR5OAFD3voUsOeqeL3onA83Spr6sxXYSP52WDLnQ3FTIayWYFnDan99ePXgEeEPYuBHlDFkNLHSSqs1r2fzqM3N9fCca1IIKgctbFaAVDB7P7X2hPfHsud6y%2BmXDkOMrUS2KEBcl3wxl9a0YBmPWZow3YISa2Nqm0zGs7K76JnpXKyOxwNe6uhvCib6Ll%2FPv7a27E2c610LqSnRGXTB59m0wi7DwvwY6pgGd9oSxT5Kmd7EncDVsMaQoJe5zNKRmf9CdoCn8hmc8egI6ioi5GyJZlT%2F1VC0bFCVNsBuh4%2B%2F902LFWATJOX0b4%2FWmKeszA4QrMUiNbnvL4s%2Bdjms%2Be6%2FjK0k92uCQXzeBJQkYVGgIP1sokKTWp9ouvVBiQNztxsTxwQ0vr3T5iZbLpBiem%2F4rYcyTYJ433yLDjOBOXrLhvPftyIXcf4wUWffz8E21&X-Amz-Signature=37b0daa614144108e8beb44239e0d82886601400a755e0a4710477600a976f12&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T42I5EJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIETSOoP2XRsFTvURL97DeJzUZmsCU8FPYmPFX2tXFSfcAiBIkLVPt0GpO7y9yRtFqhadgQMz2PWsnjcH2DXXmOoZqyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7jw70EfzSp09FI6KtwDlktrl1CzU9NBssCxO5DaHhBfN1YPaDq1ViJ38qgTdISGwFN8t7NmykSvI9%2BfpVzFlnkqr%2FVV8a0mFRpyKEOo3qaM2pW6zIVX381vVZ%2B2A0onn6gEt98nlUxN3oRoab2oavSf%2B0IUyIuUKaDi4d1lh36sL4Wr%2Bj9gkizyENPDTkjJhlUOE19hNVUzxzW2cIvute2Qtp6YHfPUl8B1RkzK32NUuRtyAyRj0%2BECxxruJn1GPmlUMgp94%2BhgMwkFrJRd4PnzKJ2BfEUJvvWS7hTZLQNZrNEUMAM0LP9pjxd2sHw2tNcfPCnhKbe%2Fl0CQYFqmQYPIaAHGe2KcAaqGmcFqirBUvA95kY3i24DDfWD8N5eSn9P2S5vJuP22g3l23wiNU66ZbJxv7huWlke2VMMw96z0IlX2S9J9BTOxdR5OAFD3voUsOeqeL3onA83Spr6sxXYSP52WDLnQ3FTIayWYFnDan99ePXgEeEPYuBHlDFkNLHSSqs1r2fzqM3N9fCca1IIKgctbFaAVDB7P7X2hPfHsud6y%2BmXDkOMrUS2KEBcl3wxl9a0YBmPWZow3YISa2Nqm0zGs7K76JnpXKyOxwNe6uhvCib6Ll%2FPv7a27E2c610LqSnRGXTB59m0wi7DwvwY6pgGd9oSxT5Kmd7EncDVsMaQoJe5zNKRmf9CdoCn8hmc8egI6ioi5GyJZlT%2F1VC0bFCVNsBuh4%2B%2F902LFWATJOX0b4%2FWmKeszA4QrMUiNbnvL4s%2Bdjms%2Be6%2FjK0k92uCQXzeBJQkYVGgIP1sokKTWp9ouvVBiQNztxsTxwQ0vr3T5iZbLpBiem%2F4rYcyTYJ433yLDjOBOXrLhvPftyIXcf4wUWffz8E21&X-Amz-Signature=76468eafac554c3c8787d0257a1bf08dd2877d9897b1ee7c8886b966ba06b1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T42I5EJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIETSOoP2XRsFTvURL97DeJzUZmsCU8FPYmPFX2tXFSfcAiBIkLVPt0GpO7y9yRtFqhadgQMz2PWsnjcH2DXXmOoZqyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7jw70EfzSp09FI6KtwDlktrl1CzU9NBssCxO5DaHhBfN1YPaDq1ViJ38qgTdISGwFN8t7NmykSvI9%2BfpVzFlnkqr%2FVV8a0mFRpyKEOo3qaM2pW6zIVX381vVZ%2B2A0onn6gEt98nlUxN3oRoab2oavSf%2B0IUyIuUKaDi4d1lh36sL4Wr%2Bj9gkizyENPDTkjJhlUOE19hNVUzxzW2cIvute2Qtp6YHfPUl8B1RkzK32NUuRtyAyRj0%2BECxxruJn1GPmlUMgp94%2BhgMwkFrJRd4PnzKJ2BfEUJvvWS7hTZLQNZrNEUMAM0LP9pjxd2sHw2tNcfPCnhKbe%2Fl0CQYFqmQYPIaAHGe2KcAaqGmcFqirBUvA95kY3i24DDfWD8N5eSn9P2S5vJuP22g3l23wiNU66ZbJxv7huWlke2VMMw96z0IlX2S9J9BTOxdR5OAFD3voUsOeqeL3onA83Spr6sxXYSP52WDLnQ3FTIayWYFnDan99ePXgEeEPYuBHlDFkNLHSSqs1r2fzqM3N9fCca1IIKgctbFaAVDB7P7X2hPfHsud6y%2BmXDkOMrUS2KEBcl3wxl9a0YBmPWZow3YISa2Nqm0zGs7K76JnpXKyOxwNe6uhvCib6Ll%2FPv7a27E2c610LqSnRGXTB59m0wi7DwvwY6pgGd9oSxT5Kmd7EncDVsMaQoJe5zNKRmf9CdoCn8hmc8egI6ioi5GyJZlT%2F1VC0bFCVNsBuh4%2B%2F902LFWATJOX0b4%2FWmKeszA4QrMUiNbnvL4s%2Bdjms%2Be6%2FjK0k92uCQXzeBJQkYVGgIP1sokKTWp9ouvVBiQNztxsTxwQ0vr3T5iZbLpBiem%2F4rYcyTYJ433yLDjOBOXrLhvPftyIXcf4wUWffz8E21&X-Amz-Signature=0b5159e9803b330ecbf401c54584ac5ef0f6be182a5e5ef91be85ac07e92c913&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T42I5EJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIETSOoP2XRsFTvURL97DeJzUZmsCU8FPYmPFX2tXFSfcAiBIkLVPt0GpO7y9yRtFqhadgQMz2PWsnjcH2DXXmOoZqyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7jw70EfzSp09FI6KtwDlktrl1CzU9NBssCxO5DaHhBfN1YPaDq1ViJ38qgTdISGwFN8t7NmykSvI9%2BfpVzFlnkqr%2FVV8a0mFRpyKEOo3qaM2pW6zIVX381vVZ%2B2A0onn6gEt98nlUxN3oRoab2oavSf%2B0IUyIuUKaDi4d1lh36sL4Wr%2Bj9gkizyENPDTkjJhlUOE19hNVUzxzW2cIvute2Qtp6YHfPUl8B1RkzK32NUuRtyAyRj0%2BECxxruJn1GPmlUMgp94%2BhgMwkFrJRd4PnzKJ2BfEUJvvWS7hTZLQNZrNEUMAM0LP9pjxd2sHw2tNcfPCnhKbe%2Fl0CQYFqmQYPIaAHGe2KcAaqGmcFqirBUvA95kY3i24DDfWD8N5eSn9P2S5vJuP22g3l23wiNU66ZbJxv7huWlke2VMMw96z0IlX2S9J9BTOxdR5OAFD3voUsOeqeL3onA83Spr6sxXYSP52WDLnQ3FTIayWYFnDan99ePXgEeEPYuBHlDFkNLHSSqs1r2fzqM3N9fCca1IIKgctbFaAVDB7P7X2hPfHsud6y%2BmXDkOMrUS2KEBcl3wxl9a0YBmPWZow3YISa2Nqm0zGs7K76JnpXKyOxwNe6uhvCib6Ll%2FPv7a27E2c610LqSnRGXTB59m0wi7DwvwY6pgGd9oSxT5Kmd7EncDVsMaQoJe5zNKRmf9CdoCn8hmc8egI6ioi5GyJZlT%2F1VC0bFCVNsBuh4%2B%2F902LFWATJOX0b4%2FWmKeszA4QrMUiNbnvL4s%2Bdjms%2Be6%2FjK0k92uCQXzeBJQkYVGgIP1sokKTWp9ouvVBiQNztxsTxwQ0vr3T5iZbLpBiem%2F4rYcyTYJ433yLDjOBOXrLhvPftyIXcf4wUWffz8E21&X-Amz-Signature=4899e807355128925bb36cccdd8dd2710b4a67c662335ab37dae617ff460e9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T42I5EJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIETSOoP2XRsFTvURL97DeJzUZmsCU8FPYmPFX2tXFSfcAiBIkLVPt0GpO7y9yRtFqhadgQMz2PWsnjcH2DXXmOoZqyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7jw70EfzSp09FI6KtwDlktrl1CzU9NBssCxO5DaHhBfN1YPaDq1ViJ38qgTdISGwFN8t7NmykSvI9%2BfpVzFlnkqr%2FVV8a0mFRpyKEOo3qaM2pW6zIVX381vVZ%2B2A0onn6gEt98nlUxN3oRoab2oavSf%2B0IUyIuUKaDi4d1lh36sL4Wr%2Bj9gkizyENPDTkjJhlUOE19hNVUzxzW2cIvute2Qtp6YHfPUl8B1RkzK32NUuRtyAyRj0%2BECxxruJn1GPmlUMgp94%2BhgMwkFrJRd4PnzKJ2BfEUJvvWS7hTZLQNZrNEUMAM0LP9pjxd2sHw2tNcfPCnhKbe%2Fl0CQYFqmQYPIaAHGe2KcAaqGmcFqirBUvA95kY3i24DDfWD8N5eSn9P2S5vJuP22g3l23wiNU66ZbJxv7huWlke2VMMw96z0IlX2S9J9BTOxdR5OAFD3voUsOeqeL3onA83Spr6sxXYSP52WDLnQ3FTIayWYFnDan99ePXgEeEPYuBHlDFkNLHSSqs1r2fzqM3N9fCca1IIKgctbFaAVDB7P7X2hPfHsud6y%2BmXDkOMrUS2KEBcl3wxl9a0YBmPWZow3YISa2Nqm0zGs7K76JnpXKyOxwNe6uhvCib6Ll%2FPv7a27E2c610LqSnRGXTB59m0wi7DwvwY6pgGd9oSxT5Kmd7EncDVsMaQoJe5zNKRmf9CdoCn8hmc8egI6ioi5GyJZlT%2F1VC0bFCVNsBuh4%2B%2F902LFWATJOX0b4%2FWmKeszA4QrMUiNbnvL4s%2Bdjms%2Be6%2FjK0k92uCQXzeBJQkYVGgIP1sokKTWp9ouvVBiQNztxsTxwQ0vr3T5iZbLpBiem%2F4rYcyTYJ433yLDjOBOXrLhvPftyIXcf4wUWffz8E21&X-Amz-Signature=2685f2a6ca057e9c4904d5e86441c24a6012fa16c1d5408bcccd62b1010ab9d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

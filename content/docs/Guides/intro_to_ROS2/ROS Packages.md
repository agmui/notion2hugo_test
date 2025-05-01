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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637WOD4W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCPH83MTpyg9uintFwA66jnCaK1SQaDDW%2F8PFxcyblojQIhAM0YnyMaLgGIqyDNue8y6SfbNzlJzOMSwAQsgM1lEpCIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzex7zIOEK0Jag1VVMq3AOZ3cPWZlK522LHLPLicwp8fSUtOlMNrWAU9qRjUKMZHuS3MuSVV4YXStKZ0M0LM3BeeM42RGfbq6PWZPRQuoxfiVR2hymfPvP1DElcG5gDNsCFN9kSRuGWpqIo%2FE3od4ZH%2BekJpxXpOI4i%2BbOhq2BfarYrke24469tKyJUqQWn7xb9ZlMnyQkAXgKH7EtHEX9IR1I6FxW74mL6zWXdeBjstrCi7xsaWeqkkbsFs91wyCAiBCQy71hDgEYdtSk8U32aO8KY738uaeCzk42G8IuZidPJJweHdgeFAGnydrgatAu56i7fNqVk%2BajXIQ3LMyYl7BV8bF%2FZDM0OMA%2F%2FOn7w9m75Sk37SBAFmVpJvYzk0vXCjEt%2FbzCOEqw1GchSogKulAeAXieYSmedrzyYOoxpKoeSZgSWR4xjux%2B1yTRrAXqYTssaypIOMTJUcXvXC8QaR3OYiz10G3WNAZiDD48slit199WA6mHAfDYGk1uzSOSoeXaUXlFJWD70X8XHO5Z2n11dM0eJ2G2swhptXWzqn3OewePpYQJRnLxGfLSV7IkPo4SkqGOPNr%2BLL341DjEED8kp2%2FXaJPsIVXwhJyr%2F6EGcv4zUAzCljYnEruNnCIhR%2B5FdqVXiDpPKFDCPyc3ABjqkAaH%2BdlXhbbHwLGDoEa39pZr%2FpTsw5z7H91%2FWnvUySbTXdseWCHY%2FPpaGatpxHlkE2UdVY3wIa7NOEPStW0WtAj13tj0Q3vXEYbmoVfVodDlmXUNrezn7%2BR%2BwVMYriNbbyN%2FUN4p4MnrCdc5ZX%2FAeb3G9hJngtgnZ07T10cZxbZRYDmqiSWjubyeZkU4Kf1eq2gvrZbBwHjBbuntWX%2B4biyqROfh8&X-Amz-Signature=236ecfccf950ab38898ef631f9636a205a08444bd1a923d2e25ba8f557c2acac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637WOD4W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCPH83MTpyg9uintFwA66jnCaK1SQaDDW%2F8PFxcyblojQIhAM0YnyMaLgGIqyDNue8y6SfbNzlJzOMSwAQsgM1lEpCIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzex7zIOEK0Jag1VVMq3AOZ3cPWZlK522LHLPLicwp8fSUtOlMNrWAU9qRjUKMZHuS3MuSVV4YXStKZ0M0LM3BeeM42RGfbq6PWZPRQuoxfiVR2hymfPvP1DElcG5gDNsCFN9kSRuGWpqIo%2FE3od4ZH%2BekJpxXpOI4i%2BbOhq2BfarYrke24469tKyJUqQWn7xb9ZlMnyQkAXgKH7EtHEX9IR1I6FxW74mL6zWXdeBjstrCi7xsaWeqkkbsFs91wyCAiBCQy71hDgEYdtSk8U32aO8KY738uaeCzk42G8IuZidPJJweHdgeFAGnydrgatAu56i7fNqVk%2BajXIQ3LMyYl7BV8bF%2FZDM0OMA%2F%2FOn7w9m75Sk37SBAFmVpJvYzk0vXCjEt%2FbzCOEqw1GchSogKulAeAXieYSmedrzyYOoxpKoeSZgSWR4xjux%2B1yTRrAXqYTssaypIOMTJUcXvXC8QaR3OYiz10G3WNAZiDD48slit199WA6mHAfDYGk1uzSOSoeXaUXlFJWD70X8XHO5Z2n11dM0eJ2G2swhptXWzqn3OewePpYQJRnLxGfLSV7IkPo4SkqGOPNr%2BLL341DjEED8kp2%2FXaJPsIVXwhJyr%2F6EGcv4zUAzCljYnEruNnCIhR%2B5FdqVXiDpPKFDCPyc3ABjqkAaH%2BdlXhbbHwLGDoEa39pZr%2FpTsw5z7H91%2FWnvUySbTXdseWCHY%2FPpaGatpxHlkE2UdVY3wIa7NOEPStW0WtAj13tj0Q3vXEYbmoVfVodDlmXUNrezn7%2BR%2BwVMYriNbbyN%2FUN4p4MnrCdc5ZX%2FAeb3G9hJngtgnZ07T10cZxbZRYDmqiSWjubyeZkU4Kf1eq2gvrZbBwHjBbuntWX%2B4biyqROfh8&X-Amz-Signature=cc4efd2e50296a8ecc7c54131c429fd0240d12268040b9a8e359377566e8435b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637WOD4W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCPH83MTpyg9uintFwA66jnCaK1SQaDDW%2F8PFxcyblojQIhAM0YnyMaLgGIqyDNue8y6SfbNzlJzOMSwAQsgM1lEpCIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzex7zIOEK0Jag1VVMq3AOZ3cPWZlK522LHLPLicwp8fSUtOlMNrWAU9qRjUKMZHuS3MuSVV4YXStKZ0M0LM3BeeM42RGfbq6PWZPRQuoxfiVR2hymfPvP1DElcG5gDNsCFN9kSRuGWpqIo%2FE3od4ZH%2BekJpxXpOI4i%2BbOhq2BfarYrke24469tKyJUqQWn7xb9ZlMnyQkAXgKH7EtHEX9IR1I6FxW74mL6zWXdeBjstrCi7xsaWeqkkbsFs91wyCAiBCQy71hDgEYdtSk8U32aO8KY738uaeCzk42G8IuZidPJJweHdgeFAGnydrgatAu56i7fNqVk%2BajXIQ3LMyYl7BV8bF%2FZDM0OMA%2F%2FOn7w9m75Sk37SBAFmVpJvYzk0vXCjEt%2FbzCOEqw1GchSogKulAeAXieYSmedrzyYOoxpKoeSZgSWR4xjux%2B1yTRrAXqYTssaypIOMTJUcXvXC8QaR3OYiz10G3WNAZiDD48slit199WA6mHAfDYGk1uzSOSoeXaUXlFJWD70X8XHO5Z2n11dM0eJ2G2swhptXWzqn3OewePpYQJRnLxGfLSV7IkPo4SkqGOPNr%2BLL341DjEED8kp2%2FXaJPsIVXwhJyr%2F6EGcv4zUAzCljYnEruNnCIhR%2B5FdqVXiDpPKFDCPyc3ABjqkAaH%2BdlXhbbHwLGDoEa39pZr%2FpTsw5z7H91%2FWnvUySbTXdseWCHY%2FPpaGatpxHlkE2UdVY3wIa7NOEPStW0WtAj13tj0Q3vXEYbmoVfVodDlmXUNrezn7%2BR%2BwVMYriNbbyN%2FUN4p4MnrCdc5ZX%2FAeb3G9hJngtgnZ07T10cZxbZRYDmqiSWjubyeZkU4Kf1eq2gvrZbBwHjBbuntWX%2B4biyqROfh8&X-Amz-Signature=168be1828857041cbfb6f48815685450a8929d3f872be13a7ed472febfff8c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637WOD4W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCPH83MTpyg9uintFwA66jnCaK1SQaDDW%2F8PFxcyblojQIhAM0YnyMaLgGIqyDNue8y6SfbNzlJzOMSwAQsgM1lEpCIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzex7zIOEK0Jag1VVMq3AOZ3cPWZlK522LHLPLicwp8fSUtOlMNrWAU9qRjUKMZHuS3MuSVV4YXStKZ0M0LM3BeeM42RGfbq6PWZPRQuoxfiVR2hymfPvP1DElcG5gDNsCFN9kSRuGWpqIo%2FE3od4ZH%2BekJpxXpOI4i%2BbOhq2BfarYrke24469tKyJUqQWn7xb9ZlMnyQkAXgKH7EtHEX9IR1I6FxW74mL6zWXdeBjstrCi7xsaWeqkkbsFs91wyCAiBCQy71hDgEYdtSk8U32aO8KY738uaeCzk42G8IuZidPJJweHdgeFAGnydrgatAu56i7fNqVk%2BajXIQ3LMyYl7BV8bF%2FZDM0OMA%2F%2FOn7w9m75Sk37SBAFmVpJvYzk0vXCjEt%2FbzCOEqw1GchSogKulAeAXieYSmedrzyYOoxpKoeSZgSWR4xjux%2B1yTRrAXqYTssaypIOMTJUcXvXC8QaR3OYiz10G3WNAZiDD48slit199WA6mHAfDYGk1uzSOSoeXaUXlFJWD70X8XHO5Z2n11dM0eJ2G2swhptXWzqn3OewePpYQJRnLxGfLSV7IkPo4SkqGOPNr%2BLL341DjEED8kp2%2FXaJPsIVXwhJyr%2F6EGcv4zUAzCljYnEruNnCIhR%2B5FdqVXiDpPKFDCPyc3ABjqkAaH%2BdlXhbbHwLGDoEa39pZr%2FpTsw5z7H91%2FWnvUySbTXdseWCHY%2FPpaGatpxHlkE2UdVY3wIa7NOEPStW0WtAj13tj0Q3vXEYbmoVfVodDlmXUNrezn7%2BR%2BwVMYriNbbyN%2FUN4p4MnrCdc5ZX%2FAeb3G9hJngtgnZ07T10cZxbZRYDmqiSWjubyeZkU4Kf1eq2gvrZbBwHjBbuntWX%2B4biyqROfh8&X-Amz-Signature=3e8ff2288674a4f7ef4077361c28f1f67d8d2e9cab0b0e8e78284543eb2a0369&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637WOD4W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCPH83MTpyg9uintFwA66jnCaK1SQaDDW%2F8PFxcyblojQIhAM0YnyMaLgGIqyDNue8y6SfbNzlJzOMSwAQsgM1lEpCIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzex7zIOEK0Jag1VVMq3AOZ3cPWZlK522LHLPLicwp8fSUtOlMNrWAU9qRjUKMZHuS3MuSVV4YXStKZ0M0LM3BeeM42RGfbq6PWZPRQuoxfiVR2hymfPvP1DElcG5gDNsCFN9kSRuGWpqIo%2FE3od4ZH%2BekJpxXpOI4i%2BbOhq2BfarYrke24469tKyJUqQWn7xb9ZlMnyQkAXgKH7EtHEX9IR1I6FxW74mL6zWXdeBjstrCi7xsaWeqkkbsFs91wyCAiBCQy71hDgEYdtSk8U32aO8KY738uaeCzk42G8IuZidPJJweHdgeFAGnydrgatAu56i7fNqVk%2BajXIQ3LMyYl7BV8bF%2FZDM0OMA%2F%2FOn7w9m75Sk37SBAFmVpJvYzk0vXCjEt%2FbzCOEqw1GchSogKulAeAXieYSmedrzyYOoxpKoeSZgSWR4xjux%2B1yTRrAXqYTssaypIOMTJUcXvXC8QaR3OYiz10G3WNAZiDD48slit199WA6mHAfDYGk1uzSOSoeXaUXlFJWD70X8XHO5Z2n11dM0eJ2G2swhptXWzqn3OewePpYQJRnLxGfLSV7IkPo4SkqGOPNr%2BLL341DjEED8kp2%2FXaJPsIVXwhJyr%2F6EGcv4zUAzCljYnEruNnCIhR%2B5FdqVXiDpPKFDCPyc3ABjqkAaH%2BdlXhbbHwLGDoEa39pZr%2FpTsw5z7H91%2FWnvUySbTXdseWCHY%2FPpaGatpxHlkE2UdVY3wIa7NOEPStW0WtAj13tj0Q3vXEYbmoVfVodDlmXUNrezn7%2BR%2BwVMYriNbbyN%2FUN4p4MnrCdc5ZX%2FAeb3G9hJngtgnZ07T10cZxbZRYDmqiSWjubyeZkU4Kf1eq2gvrZbBwHjBbuntWX%2B4biyqROfh8&X-Amz-Signature=601265eea9ae3b74fab21c7683a8ab1da759f5a7df53edbe33cccf073f44718b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637WOD4W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCPH83MTpyg9uintFwA66jnCaK1SQaDDW%2F8PFxcyblojQIhAM0YnyMaLgGIqyDNue8y6SfbNzlJzOMSwAQsgM1lEpCIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzex7zIOEK0Jag1VVMq3AOZ3cPWZlK522LHLPLicwp8fSUtOlMNrWAU9qRjUKMZHuS3MuSVV4YXStKZ0M0LM3BeeM42RGfbq6PWZPRQuoxfiVR2hymfPvP1DElcG5gDNsCFN9kSRuGWpqIo%2FE3od4ZH%2BekJpxXpOI4i%2BbOhq2BfarYrke24469tKyJUqQWn7xb9ZlMnyQkAXgKH7EtHEX9IR1I6FxW74mL6zWXdeBjstrCi7xsaWeqkkbsFs91wyCAiBCQy71hDgEYdtSk8U32aO8KY738uaeCzk42G8IuZidPJJweHdgeFAGnydrgatAu56i7fNqVk%2BajXIQ3LMyYl7BV8bF%2FZDM0OMA%2F%2FOn7w9m75Sk37SBAFmVpJvYzk0vXCjEt%2FbzCOEqw1GchSogKulAeAXieYSmedrzyYOoxpKoeSZgSWR4xjux%2B1yTRrAXqYTssaypIOMTJUcXvXC8QaR3OYiz10G3WNAZiDD48slit199WA6mHAfDYGk1uzSOSoeXaUXlFJWD70X8XHO5Z2n11dM0eJ2G2swhptXWzqn3OewePpYQJRnLxGfLSV7IkPo4SkqGOPNr%2BLL341DjEED8kp2%2FXaJPsIVXwhJyr%2F6EGcv4zUAzCljYnEruNnCIhR%2B5FdqVXiDpPKFDCPyc3ABjqkAaH%2BdlXhbbHwLGDoEa39pZr%2FpTsw5z7H91%2FWnvUySbTXdseWCHY%2FPpaGatpxHlkE2UdVY3wIa7NOEPStW0WtAj13tj0Q3vXEYbmoVfVodDlmXUNrezn7%2BR%2BwVMYriNbbyN%2FUN4p4MnrCdc5ZX%2FAeb3G9hJngtgnZ07T10cZxbZRYDmqiSWjubyeZkU4Kf1eq2gvrZbBwHjBbuntWX%2B4biyqROfh8&X-Amz-Signature=f3d23b512ed68823cf9ecb73fa114852ed4c2e7122df9be420449ea04c4d148b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637WOD4W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCPH83MTpyg9uintFwA66jnCaK1SQaDDW%2F8PFxcyblojQIhAM0YnyMaLgGIqyDNue8y6SfbNzlJzOMSwAQsgM1lEpCIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzex7zIOEK0Jag1VVMq3AOZ3cPWZlK522LHLPLicwp8fSUtOlMNrWAU9qRjUKMZHuS3MuSVV4YXStKZ0M0LM3BeeM42RGfbq6PWZPRQuoxfiVR2hymfPvP1DElcG5gDNsCFN9kSRuGWpqIo%2FE3od4ZH%2BekJpxXpOI4i%2BbOhq2BfarYrke24469tKyJUqQWn7xb9ZlMnyQkAXgKH7EtHEX9IR1I6FxW74mL6zWXdeBjstrCi7xsaWeqkkbsFs91wyCAiBCQy71hDgEYdtSk8U32aO8KY738uaeCzk42G8IuZidPJJweHdgeFAGnydrgatAu56i7fNqVk%2BajXIQ3LMyYl7BV8bF%2FZDM0OMA%2F%2FOn7w9m75Sk37SBAFmVpJvYzk0vXCjEt%2FbzCOEqw1GchSogKulAeAXieYSmedrzyYOoxpKoeSZgSWR4xjux%2B1yTRrAXqYTssaypIOMTJUcXvXC8QaR3OYiz10G3WNAZiDD48slit199WA6mHAfDYGk1uzSOSoeXaUXlFJWD70X8XHO5Z2n11dM0eJ2G2swhptXWzqn3OewePpYQJRnLxGfLSV7IkPo4SkqGOPNr%2BLL341DjEED8kp2%2FXaJPsIVXwhJyr%2F6EGcv4zUAzCljYnEruNnCIhR%2B5FdqVXiDpPKFDCPyc3ABjqkAaH%2BdlXhbbHwLGDoEa39pZr%2FpTsw5z7H91%2FWnvUySbTXdseWCHY%2FPpaGatpxHlkE2UdVY3wIa7NOEPStW0WtAj13tj0Q3vXEYbmoVfVodDlmXUNrezn7%2BR%2BwVMYriNbbyN%2FUN4p4MnrCdc5ZX%2FAeb3G9hJngtgnZ07T10cZxbZRYDmqiSWjubyeZkU4Kf1eq2gvrZbBwHjBbuntWX%2B4biyqROfh8&X-Amz-Signature=bc61a953077d7c7550573ca6a180b00fcec7635d29a6160b228c31197eebce3e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

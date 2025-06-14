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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOIRB2S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQChA0%2BEeAJJNSD0Ulr47PaS9Cwbx3nxyzZw%2FwuA9rW0vgIhAMh%2FELPIWagrj9wbYZ2XUSragpoSJQqK%2BfwHGX7waTUtKv8DCDMQABoMNjM3NDIzMTgzODA1IgwPs5gDzZ65cbU1HJ0q3AMnGzx247bWyeDYi3%2Fbzm%2FioeBkqRs7khENRTnyEakNxQfHqBnvHyK%2B7mRbAAAm49bLQMjEVdjL0uhhZLq%2FgJL88cPf38ZTSXRXsipkw%2BeG0WPGUfv6wzXmXlNkyldS%2B%2FKPEor0ni%2F8uAp8mTolk%2BsUgOd3NCa1U8puL4azcYjAKTQWJ1HfPRAxIGO9d6gf3LgWYEmr3QBWk25i41A%2BTSjPRB0w9va6Acq7Un91kTzSNLGvMoqvmW2jhDDxkJnt48KwAPEAU2FjkgwpFF%2B9bEjmnxFnkLG328Dkg4XbNfqKBOpT9TW8ZfEa5IFWnVoCdt6trE%2FsdFoDA1gyp9DLoZZ07BxIhG43vVNF%2FZHgxxEyrljaC91mM5KHstwd5iQEkvOstjmSIvuGjmFU9T7EfKBGZB%2Bp0VH2bDchxxuyFxa1o06iHtpRf%2Br2uf2va7GWc94mpEWmg7fHLALzTKj1Ds%2FXS%2BC59YK5%2B6pU7q2hUNLPuJlbFALrU7rRCwNFw9l70JyavUnp5XVU4tbSwE2haX7CU7KdrLqGBhj55pLTjdX5JhTcs%2Fi9kiHS44CUuxnQA9Yi%2BMCH3mEtv8Zfwp4w6XP2kKFhk5KREU7uzO7y30GSReSXvh%2F1qlvYBU%2BzwjDe%2BrbCBjqkARjyWIHxkpP0rE2%2BMv733%2FpVrtz7Pj6sz3ASwsqIjojOQp0UwwRD%2FAaHi3pvNdBhphONm9IiBIW3glsLu90W%2Bl4sAWx2Y9WLS4ezKYt%2Fyfum2dgFwpzT0pGZlCfam0SSPmd%2FcctXkAmDtg8CyLqiWX9ZiO4lgKPAX%2FXZcazo4GDRiRfAclORrN8xf9FSDxjetnaSaNDlbcSZmI7%2FhSohrAANiZgl&X-Amz-Signature=a42c29ffaf9306deaf27d99bb3dd27ebcd596d22cb7234c3339de055c9d83ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOIRB2S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQChA0%2BEeAJJNSD0Ulr47PaS9Cwbx3nxyzZw%2FwuA9rW0vgIhAMh%2FELPIWagrj9wbYZ2XUSragpoSJQqK%2BfwHGX7waTUtKv8DCDMQABoMNjM3NDIzMTgzODA1IgwPs5gDzZ65cbU1HJ0q3AMnGzx247bWyeDYi3%2Fbzm%2FioeBkqRs7khENRTnyEakNxQfHqBnvHyK%2B7mRbAAAm49bLQMjEVdjL0uhhZLq%2FgJL88cPf38ZTSXRXsipkw%2BeG0WPGUfv6wzXmXlNkyldS%2B%2FKPEor0ni%2F8uAp8mTolk%2BsUgOd3NCa1U8puL4azcYjAKTQWJ1HfPRAxIGO9d6gf3LgWYEmr3QBWk25i41A%2BTSjPRB0w9va6Acq7Un91kTzSNLGvMoqvmW2jhDDxkJnt48KwAPEAU2FjkgwpFF%2B9bEjmnxFnkLG328Dkg4XbNfqKBOpT9TW8ZfEa5IFWnVoCdt6trE%2FsdFoDA1gyp9DLoZZ07BxIhG43vVNF%2FZHgxxEyrljaC91mM5KHstwd5iQEkvOstjmSIvuGjmFU9T7EfKBGZB%2Bp0VH2bDchxxuyFxa1o06iHtpRf%2Br2uf2va7GWc94mpEWmg7fHLALzTKj1Ds%2FXS%2BC59YK5%2B6pU7q2hUNLPuJlbFALrU7rRCwNFw9l70JyavUnp5XVU4tbSwE2haX7CU7KdrLqGBhj55pLTjdX5JhTcs%2Fi9kiHS44CUuxnQA9Yi%2BMCH3mEtv8Zfwp4w6XP2kKFhk5KREU7uzO7y30GSReSXvh%2F1qlvYBU%2BzwjDe%2BrbCBjqkARjyWIHxkpP0rE2%2BMv733%2FpVrtz7Pj6sz3ASwsqIjojOQp0UwwRD%2FAaHi3pvNdBhphONm9IiBIW3glsLu90W%2Bl4sAWx2Y9WLS4ezKYt%2Fyfum2dgFwpzT0pGZlCfam0SSPmd%2FcctXkAmDtg8CyLqiWX9ZiO4lgKPAX%2FXZcazo4GDRiRfAclORrN8xf9FSDxjetnaSaNDlbcSZmI7%2FhSohrAANiZgl&X-Amz-Signature=db79cb28c9ec3b721624af2603d3e1f02516ebd49e6a62ae0a14c068a699c48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOIRB2S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQChA0%2BEeAJJNSD0Ulr47PaS9Cwbx3nxyzZw%2FwuA9rW0vgIhAMh%2FELPIWagrj9wbYZ2XUSragpoSJQqK%2BfwHGX7waTUtKv8DCDMQABoMNjM3NDIzMTgzODA1IgwPs5gDzZ65cbU1HJ0q3AMnGzx247bWyeDYi3%2Fbzm%2FioeBkqRs7khENRTnyEakNxQfHqBnvHyK%2B7mRbAAAm49bLQMjEVdjL0uhhZLq%2FgJL88cPf38ZTSXRXsipkw%2BeG0WPGUfv6wzXmXlNkyldS%2B%2FKPEor0ni%2F8uAp8mTolk%2BsUgOd3NCa1U8puL4azcYjAKTQWJ1HfPRAxIGO9d6gf3LgWYEmr3QBWk25i41A%2BTSjPRB0w9va6Acq7Un91kTzSNLGvMoqvmW2jhDDxkJnt48KwAPEAU2FjkgwpFF%2B9bEjmnxFnkLG328Dkg4XbNfqKBOpT9TW8ZfEa5IFWnVoCdt6trE%2FsdFoDA1gyp9DLoZZ07BxIhG43vVNF%2FZHgxxEyrljaC91mM5KHstwd5iQEkvOstjmSIvuGjmFU9T7EfKBGZB%2Bp0VH2bDchxxuyFxa1o06iHtpRf%2Br2uf2va7GWc94mpEWmg7fHLALzTKj1Ds%2FXS%2BC59YK5%2B6pU7q2hUNLPuJlbFALrU7rRCwNFw9l70JyavUnp5XVU4tbSwE2haX7CU7KdrLqGBhj55pLTjdX5JhTcs%2Fi9kiHS44CUuxnQA9Yi%2BMCH3mEtv8Zfwp4w6XP2kKFhk5KREU7uzO7y30GSReSXvh%2F1qlvYBU%2BzwjDe%2BrbCBjqkARjyWIHxkpP0rE2%2BMv733%2FpVrtz7Pj6sz3ASwsqIjojOQp0UwwRD%2FAaHi3pvNdBhphONm9IiBIW3glsLu90W%2Bl4sAWx2Y9WLS4ezKYt%2Fyfum2dgFwpzT0pGZlCfam0SSPmd%2FcctXkAmDtg8CyLqiWX9ZiO4lgKPAX%2FXZcazo4GDRiRfAclORrN8xf9FSDxjetnaSaNDlbcSZmI7%2FhSohrAANiZgl&X-Amz-Signature=743afcf892510028c41c5d6af3e248b69f972fa501956361281a97a6f4942920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOIRB2S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQChA0%2BEeAJJNSD0Ulr47PaS9Cwbx3nxyzZw%2FwuA9rW0vgIhAMh%2FELPIWagrj9wbYZ2XUSragpoSJQqK%2BfwHGX7waTUtKv8DCDMQABoMNjM3NDIzMTgzODA1IgwPs5gDzZ65cbU1HJ0q3AMnGzx247bWyeDYi3%2Fbzm%2FioeBkqRs7khENRTnyEakNxQfHqBnvHyK%2B7mRbAAAm49bLQMjEVdjL0uhhZLq%2FgJL88cPf38ZTSXRXsipkw%2BeG0WPGUfv6wzXmXlNkyldS%2B%2FKPEor0ni%2F8uAp8mTolk%2BsUgOd3NCa1U8puL4azcYjAKTQWJ1HfPRAxIGO9d6gf3LgWYEmr3QBWk25i41A%2BTSjPRB0w9va6Acq7Un91kTzSNLGvMoqvmW2jhDDxkJnt48KwAPEAU2FjkgwpFF%2B9bEjmnxFnkLG328Dkg4XbNfqKBOpT9TW8ZfEa5IFWnVoCdt6trE%2FsdFoDA1gyp9DLoZZ07BxIhG43vVNF%2FZHgxxEyrljaC91mM5KHstwd5iQEkvOstjmSIvuGjmFU9T7EfKBGZB%2Bp0VH2bDchxxuyFxa1o06iHtpRf%2Br2uf2va7GWc94mpEWmg7fHLALzTKj1Ds%2FXS%2BC59YK5%2B6pU7q2hUNLPuJlbFALrU7rRCwNFw9l70JyavUnp5XVU4tbSwE2haX7CU7KdrLqGBhj55pLTjdX5JhTcs%2Fi9kiHS44CUuxnQA9Yi%2BMCH3mEtv8Zfwp4w6XP2kKFhk5KREU7uzO7y30GSReSXvh%2F1qlvYBU%2BzwjDe%2BrbCBjqkARjyWIHxkpP0rE2%2BMv733%2FpVrtz7Pj6sz3ASwsqIjojOQp0UwwRD%2FAaHi3pvNdBhphONm9IiBIW3glsLu90W%2Bl4sAWx2Y9WLS4ezKYt%2Fyfum2dgFwpzT0pGZlCfam0SSPmd%2FcctXkAmDtg8CyLqiWX9ZiO4lgKPAX%2FXZcazo4GDRiRfAclORrN8xf9FSDxjetnaSaNDlbcSZmI7%2FhSohrAANiZgl&X-Amz-Signature=61192cccaa1c4e08d53f727d8a152de2a4357d112caf38c0f0c77db62776a38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOIRB2S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQChA0%2BEeAJJNSD0Ulr47PaS9Cwbx3nxyzZw%2FwuA9rW0vgIhAMh%2FELPIWagrj9wbYZ2XUSragpoSJQqK%2BfwHGX7waTUtKv8DCDMQABoMNjM3NDIzMTgzODA1IgwPs5gDzZ65cbU1HJ0q3AMnGzx247bWyeDYi3%2Fbzm%2FioeBkqRs7khENRTnyEakNxQfHqBnvHyK%2B7mRbAAAm49bLQMjEVdjL0uhhZLq%2FgJL88cPf38ZTSXRXsipkw%2BeG0WPGUfv6wzXmXlNkyldS%2B%2FKPEor0ni%2F8uAp8mTolk%2BsUgOd3NCa1U8puL4azcYjAKTQWJ1HfPRAxIGO9d6gf3LgWYEmr3QBWk25i41A%2BTSjPRB0w9va6Acq7Un91kTzSNLGvMoqvmW2jhDDxkJnt48KwAPEAU2FjkgwpFF%2B9bEjmnxFnkLG328Dkg4XbNfqKBOpT9TW8ZfEa5IFWnVoCdt6trE%2FsdFoDA1gyp9DLoZZ07BxIhG43vVNF%2FZHgxxEyrljaC91mM5KHstwd5iQEkvOstjmSIvuGjmFU9T7EfKBGZB%2Bp0VH2bDchxxuyFxa1o06iHtpRf%2Br2uf2va7GWc94mpEWmg7fHLALzTKj1Ds%2FXS%2BC59YK5%2B6pU7q2hUNLPuJlbFALrU7rRCwNFw9l70JyavUnp5XVU4tbSwE2haX7CU7KdrLqGBhj55pLTjdX5JhTcs%2Fi9kiHS44CUuxnQA9Yi%2BMCH3mEtv8Zfwp4w6XP2kKFhk5KREU7uzO7y30GSReSXvh%2F1qlvYBU%2BzwjDe%2BrbCBjqkARjyWIHxkpP0rE2%2BMv733%2FpVrtz7Pj6sz3ASwsqIjojOQp0UwwRD%2FAaHi3pvNdBhphONm9IiBIW3glsLu90W%2Bl4sAWx2Y9WLS4ezKYt%2Fyfum2dgFwpzT0pGZlCfam0SSPmd%2FcctXkAmDtg8CyLqiWX9ZiO4lgKPAX%2FXZcazo4GDRiRfAclORrN8xf9FSDxjetnaSaNDlbcSZmI7%2FhSohrAANiZgl&X-Amz-Signature=61358d5bcaf60d08794f9a76c0485cdeeca51dac5cdfea1c55a393169b7c0eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOIRB2S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQChA0%2BEeAJJNSD0Ulr47PaS9Cwbx3nxyzZw%2FwuA9rW0vgIhAMh%2FELPIWagrj9wbYZ2XUSragpoSJQqK%2BfwHGX7waTUtKv8DCDMQABoMNjM3NDIzMTgzODA1IgwPs5gDzZ65cbU1HJ0q3AMnGzx247bWyeDYi3%2Fbzm%2FioeBkqRs7khENRTnyEakNxQfHqBnvHyK%2B7mRbAAAm49bLQMjEVdjL0uhhZLq%2FgJL88cPf38ZTSXRXsipkw%2BeG0WPGUfv6wzXmXlNkyldS%2B%2FKPEor0ni%2F8uAp8mTolk%2BsUgOd3NCa1U8puL4azcYjAKTQWJ1HfPRAxIGO9d6gf3LgWYEmr3QBWk25i41A%2BTSjPRB0w9va6Acq7Un91kTzSNLGvMoqvmW2jhDDxkJnt48KwAPEAU2FjkgwpFF%2B9bEjmnxFnkLG328Dkg4XbNfqKBOpT9TW8ZfEa5IFWnVoCdt6trE%2FsdFoDA1gyp9DLoZZ07BxIhG43vVNF%2FZHgxxEyrljaC91mM5KHstwd5iQEkvOstjmSIvuGjmFU9T7EfKBGZB%2Bp0VH2bDchxxuyFxa1o06iHtpRf%2Br2uf2va7GWc94mpEWmg7fHLALzTKj1Ds%2FXS%2BC59YK5%2B6pU7q2hUNLPuJlbFALrU7rRCwNFw9l70JyavUnp5XVU4tbSwE2haX7CU7KdrLqGBhj55pLTjdX5JhTcs%2Fi9kiHS44CUuxnQA9Yi%2BMCH3mEtv8Zfwp4w6XP2kKFhk5KREU7uzO7y30GSReSXvh%2F1qlvYBU%2BzwjDe%2BrbCBjqkARjyWIHxkpP0rE2%2BMv733%2FpVrtz7Pj6sz3ASwsqIjojOQp0UwwRD%2FAaHi3pvNdBhphONm9IiBIW3glsLu90W%2Bl4sAWx2Y9WLS4ezKYt%2Fyfum2dgFwpzT0pGZlCfam0SSPmd%2FcctXkAmDtg8CyLqiWX9ZiO4lgKPAX%2FXZcazo4GDRiRfAclORrN8xf9FSDxjetnaSaNDlbcSZmI7%2FhSohrAANiZgl&X-Amz-Signature=0463ebdebecd0ff548cfd2d36bdd64d0dd53b1a05cc9cc5f260b71a3cfa07b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOIRB2S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQChA0%2BEeAJJNSD0Ulr47PaS9Cwbx3nxyzZw%2FwuA9rW0vgIhAMh%2FELPIWagrj9wbYZ2XUSragpoSJQqK%2BfwHGX7waTUtKv8DCDMQABoMNjM3NDIzMTgzODA1IgwPs5gDzZ65cbU1HJ0q3AMnGzx247bWyeDYi3%2Fbzm%2FioeBkqRs7khENRTnyEakNxQfHqBnvHyK%2B7mRbAAAm49bLQMjEVdjL0uhhZLq%2FgJL88cPf38ZTSXRXsipkw%2BeG0WPGUfv6wzXmXlNkyldS%2B%2FKPEor0ni%2F8uAp8mTolk%2BsUgOd3NCa1U8puL4azcYjAKTQWJ1HfPRAxIGO9d6gf3LgWYEmr3QBWk25i41A%2BTSjPRB0w9va6Acq7Un91kTzSNLGvMoqvmW2jhDDxkJnt48KwAPEAU2FjkgwpFF%2B9bEjmnxFnkLG328Dkg4XbNfqKBOpT9TW8ZfEa5IFWnVoCdt6trE%2FsdFoDA1gyp9DLoZZ07BxIhG43vVNF%2FZHgxxEyrljaC91mM5KHstwd5iQEkvOstjmSIvuGjmFU9T7EfKBGZB%2Bp0VH2bDchxxuyFxa1o06iHtpRf%2Br2uf2va7GWc94mpEWmg7fHLALzTKj1Ds%2FXS%2BC59YK5%2B6pU7q2hUNLPuJlbFALrU7rRCwNFw9l70JyavUnp5XVU4tbSwE2haX7CU7KdrLqGBhj55pLTjdX5JhTcs%2Fi9kiHS44CUuxnQA9Yi%2BMCH3mEtv8Zfwp4w6XP2kKFhk5KREU7uzO7y30GSReSXvh%2F1qlvYBU%2BzwjDe%2BrbCBjqkARjyWIHxkpP0rE2%2BMv733%2FpVrtz7Pj6sz3ASwsqIjojOQp0UwwRD%2FAaHi3pvNdBhphONm9IiBIW3glsLu90W%2Bl4sAWx2Y9WLS4ezKYt%2Fyfum2dgFwpzT0pGZlCfam0SSPmd%2FcctXkAmDtg8CyLqiWX9ZiO4lgKPAX%2FXZcazo4GDRiRfAclORrN8xf9FSDxjetnaSaNDlbcSZmI7%2FhSohrAANiZgl&X-Amz-Signature=67f7225852e7ba2fae21d69ca7d09b2ac670c994200fa53e3852d36e4bbe61c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

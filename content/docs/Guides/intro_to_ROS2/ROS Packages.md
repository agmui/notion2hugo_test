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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT23VX3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnfd%2B96sZerKRJsdLqVtO1BM9iIIcIkkGEcl%2FgYWvahAiEA8BynC3uW7HBi%2F%2FKUptLlP07iuJrC0xJGQPbyGKsO%2F%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFqmpgLzY8AT2AnrSrcA4WUBCzsFvX7UEwI6PUV%2FXOKeKzmBFwfZNvoWdJmUX3FkoIF3cK5j%2Fv4KC45MOvsWf80UQrTqeso%2FsRtQtZKqVeINNF2N%2Bjgu5YQJOX1mQbqJ9MRExgh1Yn5SmeLnCxM%2FCjm518GDQRceJaPxElyo%2FmrgSXDIezKmouHPqNoeQ3I0b%2B0ueP%2FELqGc61%2FmYBZ2TIzEXvkQlhNZXUs0ZY%2FgOyvBYlSGkgcYWrCybY%2F7D80LV%2Bz%2BIjadOhpeM4ia596oPwaQBaNs%2BOmquATY52JNFQ8weHq%2BvOfjboZyDtd6qVZW27yj6Sm%2BTQ1w2yb3akVW7Dpx66if4IJ%2BtVEdR8GqvCZp0236B5wpUxGeiG5befhV8UuxuYLsHB%2FXDgxDwKvkgLXO%2BzmegKbSdEp9F77h5pLZDAc1JjTJo6XWjncKF674PXXoAEmYH0wQpg8XaMk63XY%2B5ohXFHBfBSVyi%2BtmfIK1kzKnLVniU7uTCYMyI%2BPaCWug0PTX7wYRSyKqXiA0SbkxOAMib%2FOsucUxmUHI%2FLI7DBXP0vcInW0M%2FpnuFVYs3jzG1U1FT0hVH8f2H%2B9NYB3WVF2V2v32XCKQRiLsbVJYGtouRrGosfNNRLS7byM17Qjh%2FB7nkP2tv%2FLMMT26bwGOqUBLhafGVDed14%2FPvfQ%2Ftu3kGRzd6cgknbvsFoOjYF0bqiUxYsT%2BG1RKzR7jHpx%2F3uOcmT%2BdFkD%2FSiS3ZO%2Fs2UV%2B7ddBfJRGm%2BGLd%2Bvx7PXbsXJY4FS3x5T1O6h7aW1H94Vjvg7uZ%2FkQcXxu2%2FGjeleqdz6f%2FKTnR5hbdNQgTR5PXAotmH52kMb0XaRs0fYiJenybGP1SITwD%2Fhgtim9hXMLT%2B%2FqAsx&X-Amz-Signature=0b7431d6cf460dafa6789674b9efe5f0353ab983f85cb04d8582530918357a79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT23VX3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnfd%2B96sZerKRJsdLqVtO1BM9iIIcIkkGEcl%2FgYWvahAiEA8BynC3uW7HBi%2F%2FKUptLlP07iuJrC0xJGQPbyGKsO%2F%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFqmpgLzY8AT2AnrSrcA4WUBCzsFvX7UEwI6PUV%2FXOKeKzmBFwfZNvoWdJmUX3FkoIF3cK5j%2Fv4KC45MOvsWf80UQrTqeso%2FsRtQtZKqVeINNF2N%2Bjgu5YQJOX1mQbqJ9MRExgh1Yn5SmeLnCxM%2FCjm518GDQRceJaPxElyo%2FmrgSXDIezKmouHPqNoeQ3I0b%2B0ueP%2FELqGc61%2FmYBZ2TIzEXvkQlhNZXUs0ZY%2FgOyvBYlSGkgcYWrCybY%2F7D80LV%2Bz%2BIjadOhpeM4ia596oPwaQBaNs%2BOmquATY52JNFQ8weHq%2BvOfjboZyDtd6qVZW27yj6Sm%2BTQ1w2yb3akVW7Dpx66if4IJ%2BtVEdR8GqvCZp0236B5wpUxGeiG5befhV8UuxuYLsHB%2FXDgxDwKvkgLXO%2BzmegKbSdEp9F77h5pLZDAc1JjTJo6XWjncKF674PXXoAEmYH0wQpg8XaMk63XY%2B5ohXFHBfBSVyi%2BtmfIK1kzKnLVniU7uTCYMyI%2BPaCWug0PTX7wYRSyKqXiA0SbkxOAMib%2FOsucUxmUHI%2FLI7DBXP0vcInW0M%2FpnuFVYs3jzG1U1FT0hVH8f2H%2B9NYB3WVF2V2v32XCKQRiLsbVJYGtouRrGosfNNRLS7byM17Qjh%2FB7nkP2tv%2FLMMT26bwGOqUBLhafGVDed14%2FPvfQ%2Ftu3kGRzd6cgknbvsFoOjYF0bqiUxYsT%2BG1RKzR7jHpx%2F3uOcmT%2BdFkD%2FSiS3ZO%2Fs2UV%2B7ddBfJRGm%2BGLd%2Bvx7PXbsXJY4FS3x5T1O6h7aW1H94Vjvg7uZ%2FkQcXxu2%2FGjeleqdz6f%2FKTnR5hbdNQgTR5PXAotmH52kMb0XaRs0fYiJenybGP1SITwD%2Fhgtim9hXMLT%2B%2FqAsx&X-Amz-Signature=ad24412507a027d02630e48b26d975b2519c9f54eb539f174a3208db6eb476e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT23VX3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnfd%2B96sZerKRJsdLqVtO1BM9iIIcIkkGEcl%2FgYWvahAiEA8BynC3uW7HBi%2F%2FKUptLlP07iuJrC0xJGQPbyGKsO%2F%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFqmpgLzY8AT2AnrSrcA4WUBCzsFvX7UEwI6PUV%2FXOKeKzmBFwfZNvoWdJmUX3FkoIF3cK5j%2Fv4KC45MOvsWf80UQrTqeso%2FsRtQtZKqVeINNF2N%2Bjgu5YQJOX1mQbqJ9MRExgh1Yn5SmeLnCxM%2FCjm518GDQRceJaPxElyo%2FmrgSXDIezKmouHPqNoeQ3I0b%2B0ueP%2FELqGc61%2FmYBZ2TIzEXvkQlhNZXUs0ZY%2FgOyvBYlSGkgcYWrCybY%2F7D80LV%2Bz%2BIjadOhpeM4ia596oPwaQBaNs%2BOmquATY52JNFQ8weHq%2BvOfjboZyDtd6qVZW27yj6Sm%2BTQ1w2yb3akVW7Dpx66if4IJ%2BtVEdR8GqvCZp0236B5wpUxGeiG5befhV8UuxuYLsHB%2FXDgxDwKvkgLXO%2BzmegKbSdEp9F77h5pLZDAc1JjTJo6XWjncKF674PXXoAEmYH0wQpg8XaMk63XY%2B5ohXFHBfBSVyi%2BtmfIK1kzKnLVniU7uTCYMyI%2BPaCWug0PTX7wYRSyKqXiA0SbkxOAMib%2FOsucUxmUHI%2FLI7DBXP0vcInW0M%2FpnuFVYs3jzG1U1FT0hVH8f2H%2B9NYB3WVF2V2v32XCKQRiLsbVJYGtouRrGosfNNRLS7byM17Qjh%2FB7nkP2tv%2FLMMT26bwGOqUBLhafGVDed14%2FPvfQ%2Ftu3kGRzd6cgknbvsFoOjYF0bqiUxYsT%2BG1RKzR7jHpx%2F3uOcmT%2BdFkD%2FSiS3ZO%2Fs2UV%2B7ddBfJRGm%2BGLd%2Bvx7PXbsXJY4FS3x5T1O6h7aW1H94Vjvg7uZ%2FkQcXxu2%2FGjeleqdz6f%2FKTnR5hbdNQgTR5PXAotmH52kMb0XaRs0fYiJenybGP1SITwD%2Fhgtim9hXMLT%2B%2FqAsx&X-Amz-Signature=a6fe772e326c32f18547b1c16e4bdc541ccfdc4827dd9e7eea876bbffe64e5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT23VX3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnfd%2B96sZerKRJsdLqVtO1BM9iIIcIkkGEcl%2FgYWvahAiEA8BynC3uW7HBi%2F%2FKUptLlP07iuJrC0xJGQPbyGKsO%2F%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFqmpgLzY8AT2AnrSrcA4WUBCzsFvX7UEwI6PUV%2FXOKeKzmBFwfZNvoWdJmUX3FkoIF3cK5j%2Fv4KC45MOvsWf80UQrTqeso%2FsRtQtZKqVeINNF2N%2Bjgu5YQJOX1mQbqJ9MRExgh1Yn5SmeLnCxM%2FCjm518GDQRceJaPxElyo%2FmrgSXDIezKmouHPqNoeQ3I0b%2B0ueP%2FELqGc61%2FmYBZ2TIzEXvkQlhNZXUs0ZY%2FgOyvBYlSGkgcYWrCybY%2F7D80LV%2Bz%2BIjadOhpeM4ia596oPwaQBaNs%2BOmquATY52JNFQ8weHq%2BvOfjboZyDtd6qVZW27yj6Sm%2BTQ1w2yb3akVW7Dpx66if4IJ%2BtVEdR8GqvCZp0236B5wpUxGeiG5befhV8UuxuYLsHB%2FXDgxDwKvkgLXO%2BzmegKbSdEp9F77h5pLZDAc1JjTJo6XWjncKF674PXXoAEmYH0wQpg8XaMk63XY%2B5ohXFHBfBSVyi%2BtmfIK1kzKnLVniU7uTCYMyI%2BPaCWug0PTX7wYRSyKqXiA0SbkxOAMib%2FOsucUxmUHI%2FLI7DBXP0vcInW0M%2FpnuFVYs3jzG1U1FT0hVH8f2H%2B9NYB3WVF2V2v32XCKQRiLsbVJYGtouRrGosfNNRLS7byM17Qjh%2FB7nkP2tv%2FLMMT26bwGOqUBLhafGVDed14%2FPvfQ%2Ftu3kGRzd6cgknbvsFoOjYF0bqiUxYsT%2BG1RKzR7jHpx%2F3uOcmT%2BdFkD%2FSiS3ZO%2Fs2UV%2B7ddBfJRGm%2BGLd%2Bvx7PXbsXJY4FS3x5T1O6h7aW1H94Vjvg7uZ%2FkQcXxu2%2FGjeleqdz6f%2FKTnR5hbdNQgTR5PXAotmH52kMb0XaRs0fYiJenybGP1SITwD%2Fhgtim9hXMLT%2B%2FqAsx&X-Amz-Signature=68eddeadb720067f5d35be00a1c0cdfacb85897bedc9e2684e11efbaaf079a51&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT23VX3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnfd%2B96sZerKRJsdLqVtO1BM9iIIcIkkGEcl%2FgYWvahAiEA8BynC3uW7HBi%2F%2FKUptLlP07iuJrC0xJGQPbyGKsO%2F%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFqmpgLzY8AT2AnrSrcA4WUBCzsFvX7UEwI6PUV%2FXOKeKzmBFwfZNvoWdJmUX3FkoIF3cK5j%2Fv4KC45MOvsWf80UQrTqeso%2FsRtQtZKqVeINNF2N%2Bjgu5YQJOX1mQbqJ9MRExgh1Yn5SmeLnCxM%2FCjm518GDQRceJaPxElyo%2FmrgSXDIezKmouHPqNoeQ3I0b%2B0ueP%2FELqGc61%2FmYBZ2TIzEXvkQlhNZXUs0ZY%2FgOyvBYlSGkgcYWrCybY%2F7D80LV%2Bz%2BIjadOhpeM4ia596oPwaQBaNs%2BOmquATY52JNFQ8weHq%2BvOfjboZyDtd6qVZW27yj6Sm%2BTQ1w2yb3akVW7Dpx66if4IJ%2BtVEdR8GqvCZp0236B5wpUxGeiG5befhV8UuxuYLsHB%2FXDgxDwKvkgLXO%2BzmegKbSdEp9F77h5pLZDAc1JjTJo6XWjncKF674PXXoAEmYH0wQpg8XaMk63XY%2B5ohXFHBfBSVyi%2BtmfIK1kzKnLVniU7uTCYMyI%2BPaCWug0PTX7wYRSyKqXiA0SbkxOAMib%2FOsucUxmUHI%2FLI7DBXP0vcInW0M%2FpnuFVYs3jzG1U1FT0hVH8f2H%2B9NYB3WVF2V2v32XCKQRiLsbVJYGtouRrGosfNNRLS7byM17Qjh%2FB7nkP2tv%2FLMMT26bwGOqUBLhafGVDed14%2FPvfQ%2Ftu3kGRzd6cgknbvsFoOjYF0bqiUxYsT%2BG1RKzR7jHpx%2F3uOcmT%2BdFkD%2FSiS3ZO%2Fs2UV%2B7ddBfJRGm%2BGLd%2Bvx7PXbsXJY4FS3x5T1O6h7aW1H94Vjvg7uZ%2FkQcXxu2%2FGjeleqdz6f%2FKTnR5hbdNQgTR5PXAotmH52kMb0XaRs0fYiJenybGP1SITwD%2Fhgtim9hXMLT%2B%2FqAsx&X-Amz-Signature=3f9bf04ef5ec63b33305564fabe9311506c8a3b3cdec29a532fa2dc1a0a6ef17&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT23VX3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnfd%2B96sZerKRJsdLqVtO1BM9iIIcIkkGEcl%2FgYWvahAiEA8BynC3uW7HBi%2F%2FKUptLlP07iuJrC0xJGQPbyGKsO%2F%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFqmpgLzY8AT2AnrSrcA4WUBCzsFvX7UEwI6PUV%2FXOKeKzmBFwfZNvoWdJmUX3FkoIF3cK5j%2Fv4KC45MOvsWf80UQrTqeso%2FsRtQtZKqVeINNF2N%2Bjgu5YQJOX1mQbqJ9MRExgh1Yn5SmeLnCxM%2FCjm518GDQRceJaPxElyo%2FmrgSXDIezKmouHPqNoeQ3I0b%2B0ueP%2FELqGc61%2FmYBZ2TIzEXvkQlhNZXUs0ZY%2FgOyvBYlSGkgcYWrCybY%2F7D80LV%2Bz%2BIjadOhpeM4ia596oPwaQBaNs%2BOmquATY52JNFQ8weHq%2BvOfjboZyDtd6qVZW27yj6Sm%2BTQ1w2yb3akVW7Dpx66if4IJ%2BtVEdR8GqvCZp0236B5wpUxGeiG5befhV8UuxuYLsHB%2FXDgxDwKvkgLXO%2BzmegKbSdEp9F77h5pLZDAc1JjTJo6XWjncKF674PXXoAEmYH0wQpg8XaMk63XY%2B5ohXFHBfBSVyi%2BtmfIK1kzKnLVniU7uTCYMyI%2BPaCWug0PTX7wYRSyKqXiA0SbkxOAMib%2FOsucUxmUHI%2FLI7DBXP0vcInW0M%2FpnuFVYs3jzG1U1FT0hVH8f2H%2B9NYB3WVF2V2v32XCKQRiLsbVJYGtouRrGosfNNRLS7byM17Qjh%2FB7nkP2tv%2FLMMT26bwGOqUBLhafGVDed14%2FPvfQ%2Ftu3kGRzd6cgknbvsFoOjYF0bqiUxYsT%2BG1RKzR7jHpx%2F3uOcmT%2BdFkD%2FSiS3ZO%2Fs2UV%2B7ddBfJRGm%2BGLd%2Bvx7PXbsXJY4FS3x5T1O6h7aW1H94Vjvg7uZ%2FkQcXxu2%2FGjeleqdz6f%2FKTnR5hbdNQgTR5PXAotmH52kMb0XaRs0fYiJenybGP1SITwD%2Fhgtim9hXMLT%2B%2FqAsx&X-Amz-Signature=4f1634118fff0828a55328b575704eef43b8683a78af2a58e95b43d2411fccd6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT23VX3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnfd%2B96sZerKRJsdLqVtO1BM9iIIcIkkGEcl%2FgYWvahAiEA8BynC3uW7HBi%2F%2FKUptLlP07iuJrC0xJGQPbyGKsO%2F%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFqmpgLzY8AT2AnrSrcA4WUBCzsFvX7UEwI6PUV%2FXOKeKzmBFwfZNvoWdJmUX3FkoIF3cK5j%2Fv4KC45MOvsWf80UQrTqeso%2FsRtQtZKqVeINNF2N%2Bjgu5YQJOX1mQbqJ9MRExgh1Yn5SmeLnCxM%2FCjm518GDQRceJaPxElyo%2FmrgSXDIezKmouHPqNoeQ3I0b%2B0ueP%2FELqGc61%2FmYBZ2TIzEXvkQlhNZXUs0ZY%2FgOyvBYlSGkgcYWrCybY%2F7D80LV%2Bz%2BIjadOhpeM4ia596oPwaQBaNs%2BOmquATY52JNFQ8weHq%2BvOfjboZyDtd6qVZW27yj6Sm%2BTQ1w2yb3akVW7Dpx66if4IJ%2BtVEdR8GqvCZp0236B5wpUxGeiG5befhV8UuxuYLsHB%2FXDgxDwKvkgLXO%2BzmegKbSdEp9F77h5pLZDAc1JjTJo6XWjncKF674PXXoAEmYH0wQpg8XaMk63XY%2B5ohXFHBfBSVyi%2BtmfIK1kzKnLVniU7uTCYMyI%2BPaCWug0PTX7wYRSyKqXiA0SbkxOAMib%2FOsucUxmUHI%2FLI7DBXP0vcInW0M%2FpnuFVYs3jzG1U1FT0hVH8f2H%2B9NYB3WVF2V2v32XCKQRiLsbVJYGtouRrGosfNNRLS7byM17Qjh%2FB7nkP2tv%2FLMMT26bwGOqUBLhafGVDed14%2FPvfQ%2Ftu3kGRzd6cgknbvsFoOjYF0bqiUxYsT%2BG1RKzR7jHpx%2F3uOcmT%2BdFkD%2FSiS3ZO%2Fs2UV%2B7ddBfJRGm%2BGLd%2Bvx7PXbsXJY4FS3x5T1O6h7aW1H94Vjvg7uZ%2FkQcXxu2%2FGjeleqdz6f%2FKTnR5hbdNQgTR5PXAotmH52kMb0XaRs0fYiJenybGP1SITwD%2Fhgtim9hXMLT%2B%2FqAsx&X-Amz-Signature=d9a2f5b164e4960f2d7dc5a1a355de34b510aafd357b569bf4e5a8db6f41d470&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

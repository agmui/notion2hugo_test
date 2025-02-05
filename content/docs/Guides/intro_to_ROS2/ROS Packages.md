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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLA7XE7I%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBl%2BnK0TNOjscJD0%2Bo%2BsIs%2B0oLbTM%2BeXSUjNgGMKcFumAiBPgJw%2BS3NmPNzYBga4wn2O7e8R7yqqRklrNxnLtt%2BXOir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMUeSRpmTeoxb2yZI9KtwDPPWG%2BTR6lCM5HpHG0jFRJrKlpTbjN4Hg2hzDv88My%2BC8WT%2Fhc2U%2FwAvEKEVmbKd%2FJmSfVsHd96rNle8XyNWuR0FOzdwYAtmjcB0VRfB71LeyAD%2BB2UragDzfjXl4qhigrvNbmEZ69F4nEHnQe%2F%2BvMEzttnipCOD1e7Bsh9iobAgX7N%2F%2Fv%2FuqJMZJvnJwkexbOrRatYONeJD97htn9dmC%2BlW62q%2BC6Eth3EmJVLqNJ4pPxwghkQJ9yETjnrmVRLBHRgc4Scy4N41lTMquHmzwYNTlOHFmSky9tWuHVjNd5DOtzXTu1f6kP%2BpuFsAYTqXc0mMTqgqMy8fWGLnr41i0%2Bw7eusynDuDj4l6Ag%2F8bp9D54ohcFZQ8aF0mPOS8j5oGzchPWX9lTS3J0ShvhsyaMe%2Bc%2FOa31q6diOJKPFUKdShaWFy99FYb3Oaa%2FO%2BOsigImUhPcUdYg0aUxDsCubE%2FeYylGypiXa7KmZyVudU4FJo4e7WRv3kBEstMtyhJ976lFUic5YNg0uBmCJ2Bs5fu11wZV1pY4Nd29LtsyBn%2BB6cxnB0mJCK6ISIs85dp1wV2VxaFWuRaxfl90ivkRhjAYfH9IXyn6eF%2BIzyKffOO3mmGI0Rl99G94REGW%2Bow1LWMvQY6pgHsjv4Zn0L13t%2Bre2oskn%2FrUAy%2F0H6gZABIBoGmGErGLnOKkSvNZcyi6zzjGlEX2eUXzV3X%2BJmhg1KJCiZKGQQhc%2F3%2F0ZoqAs7KcOYgwy82Kn04DvjqrDjYEJ8tYuy0vkhIFDdoR3D6yd1xbM6EujNS1Sp41u8O%2FdvSX86fJww1eFy%2FXAe6CKcQpMAlzTrYWaAwQlxm6omTHngNfP20FX2kzVzvhv03&X-Amz-Signature=17680369a3b9256cac3b84f20f8960c9e98adcb429e57c4013376382c94642bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLA7XE7I%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBl%2BnK0TNOjscJD0%2Bo%2BsIs%2B0oLbTM%2BeXSUjNgGMKcFumAiBPgJw%2BS3NmPNzYBga4wn2O7e8R7yqqRklrNxnLtt%2BXOir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMUeSRpmTeoxb2yZI9KtwDPPWG%2BTR6lCM5HpHG0jFRJrKlpTbjN4Hg2hzDv88My%2BC8WT%2Fhc2U%2FwAvEKEVmbKd%2FJmSfVsHd96rNle8XyNWuR0FOzdwYAtmjcB0VRfB71LeyAD%2BB2UragDzfjXl4qhigrvNbmEZ69F4nEHnQe%2F%2BvMEzttnipCOD1e7Bsh9iobAgX7N%2F%2Fv%2FuqJMZJvnJwkexbOrRatYONeJD97htn9dmC%2BlW62q%2BC6Eth3EmJVLqNJ4pPxwghkQJ9yETjnrmVRLBHRgc4Scy4N41lTMquHmzwYNTlOHFmSky9tWuHVjNd5DOtzXTu1f6kP%2BpuFsAYTqXc0mMTqgqMy8fWGLnr41i0%2Bw7eusynDuDj4l6Ag%2F8bp9D54ohcFZQ8aF0mPOS8j5oGzchPWX9lTS3J0ShvhsyaMe%2Bc%2FOa31q6diOJKPFUKdShaWFy99FYb3Oaa%2FO%2BOsigImUhPcUdYg0aUxDsCubE%2FeYylGypiXa7KmZyVudU4FJo4e7WRv3kBEstMtyhJ976lFUic5YNg0uBmCJ2Bs5fu11wZV1pY4Nd29LtsyBn%2BB6cxnB0mJCK6ISIs85dp1wV2VxaFWuRaxfl90ivkRhjAYfH9IXyn6eF%2BIzyKffOO3mmGI0Rl99G94REGW%2Bow1LWMvQY6pgHsjv4Zn0L13t%2Bre2oskn%2FrUAy%2F0H6gZABIBoGmGErGLnOKkSvNZcyi6zzjGlEX2eUXzV3X%2BJmhg1KJCiZKGQQhc%2F3%2F0ZoqAs7KcOYgwy82Kn04DvjqrDjYEJ8tYuy0vkhIFDdoR3D6yd1xbM6EujNS1Sp41u8O%2FdvSX86fJww1eFy%2FXAe6CKcQpMAlzTrYWaAwQlxm6omTHngNfP20FX2kzVzvhv03&X-Amz-Signature=d835e9b31b1ee72a7c5362eb1974bd0401ae555562fd3c57bc7bb09c91063fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLA7XE7I%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBl%2BnK0TNOjscJD0%2Bo%2BsIs%2B0oLbTM%2BeXSUjNgGMKcFumAiBPgJw%2BS3NmPNzYBga4wn2O7e8R7yqqRklrNxnLtt%2BXOir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMUeSRpmTeoxb2yZI9KtwDPPWG%2BTR6lCM5HpHG0jFRJrKlpTbjN4Hg2hzDv88My%2BC8WT%2Fhc2U%2FwAvEKEVmbKd%2FJmSfVsHd96rNle8XyNWuR0FOzdwYAtmjcB0VRfB71LeyAD%2BB2UragDzfjXl4qhigrvNbmEZ69F4nEHnQe%2F%2BvMEzttnipCOD1e7Bsh9iobAgX7N%2F%2Fv%2FuqJMZJvnJwkexbOrRatYONeJD97htn9dmC%2BlW62q%2BC6Eth3EmJVLqNJ4pPxwghkQJ9yETjnrmVRLBHRgc4Scy4N41lTMquHmzwYNTlOHFmSky9tWuHVjNd5DOtzXTu1f6kP%2BpuFsAYTqXc0mMTqgqMy8fWGLnr41i0%2Bw7eusynDuDj4l6Ag%2F8bp9D54ohcFZQ8aF0mPOS8j5oGzchPWX9lTS3J0ShvhsyaMe%2Bc%2FOa31q6diOJKPFUKdShaWFy99FYb3Oaa%2FO%2BOsigImUhPcUdYg0aUxDsCubE%2FeYylGypiXa7KmZyVudU4FJo4e7WRv3kBEstMtyhJ976lFUic5YNg0uBmCJ2Bs5fu11wZV1pY4Nd29LtsyBn%2BB6cxnB0mJCK6ISIs85dp1wV2VxaFWuRaxfl90ivkRhjAYfH9IXyn6eF%2BIzyKffOO3mmGI0Rl99G94REGW%2Bow1LWMvQY6pgHsjv4Zn0L13t%2Bre2oskn%2FrUAy%2F0H6gZABIBoGmGErGLnOKkSvNZcyi6zzjGlEX2eUXzV3X%2BJmhg1KJCiZKGQQhc%2F3%2F0ZoqAs7KcOYgwy82Kn04DvjqrDjYEJ8tYuy0vkhIFDdoR3D6yd1xbM6EujNS1Sp41u8O%2FdvSX86fJww1eFy%2FXAe6CKcQpMAlzTrYWaAwQlxm6omTHngNfP20FX2kzVzvhv03&X-Amz-Signature=807ee5a3a9bd076c9daf83a31cc6da5d7535e6136f03ebba8aad94bf4e77e44d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLA7XE7I%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBl%2BnK0TNOjscJD0%2Bo%2BsIs%2B0oLbTM%2BeXSUjNgGMKcFumAiBPgJw%2BS3NmPNzYBga4wn2O7e8R7yqqRklrNxnLtt%2BXOir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMUeSRpmTeoxb2yZI9KtwDPPWG%2BTR6lCM5HpHG0jFRJrKlpTbjN4Hg2hzDv88My%2BC8WT%2Fhc2U%2FwAvEKEVmbKd%2FJmSfVsHd96rNle8XyNWuR0FOzdwYAtmjcB0VRfB71LeyAD%2BB2UragDzfjXl4qhigrvNbmEZ69F4nEHnQe%2F%2BvMEzttnipCOD1e7Bsh9iobAgX7N%2F%2Fv%2FuqJMZJvnJwkexbOrRatYONeJD97htn9dmC%2BlW62q%2BC6Eth3EmJVLqNJ4pPxwghkQJ9yETjnrmVRLBHRgc4Scy4N41lTMquHmzwYNTlOHFmSky9tWuHVjNd5DOtzXTu1f6kP%2BpuFsAYTqXc0mMTqgqMy8fWGLnr41i0%2Bw7eusynDuDj4l6Ag%2F8bp9D54ohcFZQ8aF0mPOS8j5oGzchPWX9lTS3J0ShvhsyaMe%2Bc%2FOa31q6diOJKPFUKdShaWFy99FYb3Oaa%2FO%2BOsigImUhPcUdYg0aUxDsCubE%2FeYylGypiXa7KmZyVudU4FJo4e7WRv3kBEstMtyhJ976lFUic5YNg0uBmCJ2Bs5fu11wZV1pY4Nd29LtsyBn%2BB6cxnB0mJCK6ISIs85dp1wV2VxaFWuRaxfl90ivkRhjAYfH9IXyn6eF%2BIzyKffOO3mmGI0Rl99G94REGW%2Bow1LWMvQY6pgHsjv4Zn0L13t%2Bre2oskn%2FrUAy%2F0H6gZABIBoGmGErGLnOKkSvNZcyi6zzjGlEX2eUXzV3X%2BJmhg1KJCiZKGQQhc%2F3%2F0ZoqAs7KcOYgwy82Kn04DvjqrDjYEJ8tYuy0vkhIFDdoR3D6yd1xbM6EujNS1Sp41u8O%2FdvSX86fJww1eFy%2FXAe6CKcQpMAlzTrYWaAwQlxm6omTHngNfP20FX2kzVzvhv03&X-Amz-Signature=bd0bf8a3822c126b68b306d5d60bd49220e10a07cdf19dcdeccd106276d7f544&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLA7XE7I%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBl%2BnK0TNOjscJD0%2Bo%2BsIs%2B0oLbTM%2BeXSUjNgGMKcFumAiBPgJw%2BS3NmPNzYBga4wn2O7e8R7yqqRklrNxnLtt%2BXOir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMUeSRpmTeoxb2yZI9KtwDPPWG%2BTR6lCM5HpHG0jFRJrKlpTbjN4Hg2hzDv88My%2BC8WT%2Fhc2U%2FwAvEKEVmbKd%2FJmSfVsHd96rNle8XyNWuR0FOzdwYAtmjcB0VRfB71LeyAD%2BB2UragDzfjXl4qhigrvNbmEZ69F4nEHnQe%2F%2BvMEzttnipCOD1e7Bsh9iobAgX7N%2F%2Fv%2FuqJMZJvnJwkexbOrRatYONeJD97htn9dmC%2BlW62q%2BC6Eth3EmJVLqNJ4pPxwghkQJ9yETjnrmVRLBHRgc4Scy4N41lTMquHmzwYNTlOHFmSky9tWuHVjNd5DOtzXTu1f6kP%2BpuFsAYTqXc0mMTqgqMy8fWGLnr41i0%2Bw7eusynDuDj4l6Ag%2F8bp9D54ohcFZQ8aF0mPOS8j5oGzchPWX9lTS3J0ShvhsyaMe%2Bc%2FOa31q6diOJKPFUKdShaWFy99FYb3Oaa%2FO%2BOsigImUhPcUdYg0aUxDsCubE%2FeYylGypiXa7KmZyVudU4FJo4e7WRv3kBEstMtyhJ976lFUic5YNg0uBmCJ2Bs5fu11wZV1pY4Nd29LtsyBn%2BB6cxnB0mJCK6ISIs85dp1wV2VxaFWuRaxfl90ivkRhjAYfH9IXyn6eF%2BIzyKffOO3mmGI0Rl99G94REGW%2Bow1LWMvQY6pgHsjv4Zn0L13t%2Bre2oskn%2FrUAy%2F0H6gZABIBoGmGErGLnOKkSvNZcyi6zzjGlEX2eUXzV3X%2BJmhg1KJCiZKGQQhc%2F3%2F0ZoqAs7KcOYgwy82Kn04DvjqrDjYEJ8tYuy0vkhIFDdoR3D6yd1xbM6EujNS1Sp41u8O%2FdvSX86fJww1eFy%2FXAe6CKcQpMAlzTrYWaAwQlxm6omTHngNfP20FX2kzVzvhv03&X-Amz-Signature=db37bbffc0069df4d7080cedeacabd8e73f9f7337672b577a19b5bda2aa21a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLA7XE7I%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBl%2BnK0TNOjscJD0%2Bo%2BsIs%2B0oLbTM%2BeXSUjNgGMKcFumAiBPgJw%2BS3NmPNzYBga4wn2O7e8R7yqqRklrNxnLtt%2BXOir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMUeSRpmTeoxb2yZI9KtwDPPWG%2BTR6lCM5HpHG0jFRJrKlpTbjN4Hg2hzDv88My%2BC8WT%2Fhc2U%2FwAvEKEVmbKd%2FJmSfVsHd96rNle8XyNWuR0FOzdwYAtmjcB0VRfB71LeyAD%2BB2UragDzfjXl4qhigrvNbmEZ69F4nEHnQe%2F%2BvMEzttnipCOD1e7Bsh9iobAgX7N%2F%2Fv%2FuqJMZJvnJwkexbOrRatYONeJD97htn9dmC%2BlW62q%2BC6Eth3EmJVLqNJ4pPxwghkQJ9yETjnrmVRLBHRgc4Scy4N41lTMquHmzwYNTlOHFmSky9tWuHVjNd5DOtzXTu1f6kP%2BpuFsAYTqXc0mMTqgqMy8fWGLnr41i0%2Bw7eusynDuDj4l6Ag%2F8bp9D54ohcFZQ8aF0mPOS8j5oGzchPWX9lTS3J0ShvhsyaMe%2Bc%2FOa31q6diOJKPFUKdShaWFy99FYb3Oaa%2FO%2BOsigImUhPcUdYg0aUxDsCubE%2FeYylGypiXa7KmZyVudU4FJo4e7WRv3kBEstMtyhJ976lFUic5YNg0uBmCJ2Bs5fu11wZV1pY4Nd29LtsyBn%2BB6cxnB0mJCK6ISIs85dp1wV2VxaFWuRaxfl90ivkRhjAYfH9IXyn6eF%2BIzyKffOO3mmGI0Rl99G94REGW%2Bow1LWMvQY6pgHsjv4Zn0L13t%2Bre2oskn%2FrUAy%2F0H6gZABIBoGmGErGLnOKkSvNZcyi6zzjGlEX2eUXzV3X%2BJmhg1KJCiZKGQQhc%2F3%2F0ZoqAs7KcOYgwy82Kn04DvjqrDjYEJ8tYuy0vkhIFDdoR3D6yd1xbM6EujNS1Sp41u8O%2FdvSX86fJww1eFy%2FXAe6CKcQpMAlzTrYWaAwQlxm6omTHngNfP20FX2kzVzvhv03&X-Amz-Signature=ec71ad0d1f69fbfead0c704728e40190c0cc1e8b384ecb6af3c2438013ce9be1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLA7XE7I%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBl%2BnK0TNOjscJD0%2Bo%2BsIs%2B0oLbTM%2BeXSUjNgGMKcFumAiBPgJw%2BS3NmPNzYBga4wn2O7e8R7yqqRklrNxnLtt%2BXOir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMUeSRpmTeoxb2yZI9KtwDPPWG%2BTR6lCM5HpHG0jFRJrKlpTbjN4Hg2hzDv88My%2BC8WT%2Fhc2U%2FwAvEKEVmbKd%2FJmSfVsHd96rNle8XyNWuR0FOzdwYAtmjcB0VRfB71LeyAD%2BB2UragDzfjXl4qhigrvNbmEZ69F4nEHnQe%2F%2BvMEzttnipCOD1e7Bsh9iobAgX7N%2F%2Fv%2FuqJMZJvnJwkexbOrRatYONeJD97htn9dmC%2BlW62q%2BC6Eth3EmJVLqNJ4pPxwghkQJ9yETjnrmVRLBHRgc4Scy4N41lTMquHmzwYNTlOHFmSky9tWuHVjNd5DOtzXTu1f6kP%2BpuFsAYTqXc0mMTqgqMy8fWGLnr41i0%2Bw7eusynDuDj4l6Ag%2F8bp9D54ohcFZQ8aF0mPOS8j5oGzchPWX9lTS3J0ShvhsyaMe%2Bc%2FOa31q6diOJKPFUKdShaWFy99FYb3Oaa%2FO%2BOsigImUhPcUdYg0aUxDsCubE%2FeYylGypiXa7KmZyVudU4FJo4e7WRv3kBEstMtyhJ976lFUic5YNg0uBmCJ2Bs5fu11wZV1pY4Nd29LtsyBn%2BB6cxnB0mJCK6ISIs85dp1wV2VxaFWuRaxfl90ivkRhjAYfH9IXyn6eF%2BIzyKffOO3mmGI0Rl99G94REGW%2Bow1LWMvQY6pgHsjv4Zn0L13t%2Bre2oskn%2FrUAy%2F0H6gZABIBoGmGErGLnOKkSvNZcyi6zzjGlEX2eUXzV3X%2BJmhg1KJCiZKGQQhc%2F3%2F0ZoqAs7KcOYgwy82Kn04DvjqrDjYEJ8tYuy0vkhIFDdoR3D6yd1xbM6EujNS1Sp41u8O%2FdvSX86fJww1eFy%2FXAe6CKcQpMAlzTrYWaAwQlxm6omTHngNfP20FX2kzVzvhv03&X-Amz-Signature=642b40a608b3f4816ee69a8a7d84caaeafa20924b90e2e9319f855e330cc7bf6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

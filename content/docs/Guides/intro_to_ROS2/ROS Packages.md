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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BVD4MJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs4qDbK7bVBA7GJDhlrU5l7LJT88Hk4T3haWfOvv91IQIhAJS6S8QDImnhK%2B66S0dLWM%2FVatd%2BTzgniragou30DBBEKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2F9U%2Fxj8D1yaJOXQq3AMWCXBr%2FQhJ8IReLDE7%2F2c7l8csnh2rXn%2BB3n14dG4gzV4BB8iYc1WZG%2BiHcNgv8rclspsHuyBJE1u%2Fl6IsifpMoW71dRPH9vg54X8IqTP%2BhmSKFc%2FrUIo8326Oo%2Fy%2BTpAh0bw6Dp8ChqOgA975xQWDXf1nhbTRPhTRWxDrkORm5jnhmpIcxkt18NnGFT%2Fm3TKUOpuhVjWeSRNOmV8Z%2F2jJIdnQ1%2FAzdqseWdlsNnvXxugtJXkWU495v5wx9WwWLMg387Y2GhokDcREVfzJk%2FhihrALXDQV1zlopCoWYp0ogIvgzEHarIWmeoT7R%2F8FP%2FQreknPoiBK9pTja7axvKSu5024SqseMgyZ5RIjcbypMz694kx45ieFWCDXm59Kjyruk%2FDh0vms9Uro5ZLuVYTABIKHkO1oGEyI4RaETLNmZw2oTQiLhcJ%2BZ1G62gxm00qKPu8DrSfW4hE7ptNyadVXpmnpD9PsvaDycCquM0gGO9tvxEAtXPO8im2cvUDLp4cxDMzKjQVQQ1q8z2xazNeDcCiYxhSpFdScuAhU49mtCLuaEPh9e7HkujCizKcdgLviDXdUX9WAFx9D0XihUnNYimH52jycyTvRuvOXKm7Aag1RTt45jhIFtPzLXDCklbPDBjqkAXeZak53VpodvOY13XE%2FUHCGnpxlPtoU55y4YxSDKjLG4ZTaUYsQ7I%2FJxY0FnjB4Nfc%2Fem8cfROHs68AKS%2F4nVtLTN7RoPSAFlWNtPXJ75joGYxYYOkOj4eaLVilksmSi9nX3dmbyegVOeenz%2B4Q3Jk7UzAAjAjMYimGNsLoou8X1g0eRwCGQ2zew6me5j0amC2xXpsdvVOBwok8EtnDE5Yo0hAR&X-Amz-Signature=9b2f7c12f088d888645d511830566a140e076e39e0e2e26441d2773f99dfd1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BVD4MJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs4qDbK7bVBA7GJDhlrU5l7LJT88Hk4T3haWfOvv91IQIhAJS6S8QDImnhK%2B66S0dLWM%2FVatd%2BTzgniragou30DBBEKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2F9U%2Fxj8D1yaJOXQq3AMWCXBr%2FQhJ8IReLDE7%2F2c7l8csnh2rXn%2BB3n14dG4gzV4BB8iYc1WZG%2BiHcNgv8rclspsHuyBJE1u%2Fl6IsifpMoW71dRPH9vg54X8IqTP%2BhmSKFc%2FrUIo8326Oo%2Fy%2BTpAh0bw6Dp8ChqOgA975xQWDXf1nhbTRPhTRWxDrkORm5jnhmpIcxkt18NnGFT%2Fm3TKUOpuhVjWeSRNOmV8Z%2F2jJIdnQ1%2FAzdqseWdlsNnvXxugtJXkWU495v5wx9WwWLMg387Y2GhokDcREVfzJk%2FhihrALXDQV1zlopCoWYp0ogIvgzEHarIWmeoT7R%2F8FP%2FQreknPoiBK9pTja7axvKSu5024SqseMgyZ5RIjcbypMz694kx45ieFWCDXm59Kjyruk%2FDh0vms9Uro5ZLuVYTABIKHkO1oGEyI4RaETLNmZw2oTQiLhcJ%2BZ1G62gxm00qKPu8DrSfW4hE7ptNyadVXpmnpD9PsvaDycCquM0gGO9tvxEAtXPO8im2cvUDLp4cxDMzKjQVQQ1q8z2xazNeDcCiYxhSpFdScuAhU49mtCLuaEPh9e7HkujCizKcdgLviDXdUX9WAFx9D0XihUnNYimH52jycyTvRuvOXKm7Aag1RTt45jhIFtPzLXDCklbPDBjqkAXeZak53VpodvOY13XE%2FUHCGnpxlPtoU55y4YxSDKjLG4ZTaUYsQ7I%2FJxY0FnjB4Nfc%2Fem8cfROHs68AKS%2F4nVtLTN7RoPSAFlWNtPXJ75joGYxYYOkOj4eaLVilksmSi9nX3dmbyegVOeenz%2B4Q3Jk7UzAAjAjMYimGNsLoou8X1g0eRwCGQ2zew6me5j0amC2xXpsdvVOBwok8EtnDE5Yo0hAR&X-Amz-Signature=833a575f5022d0657c0c813ff6b0bea2dbdd4d30e0772ebbca8186554fdcccc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BVD4MJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs4qDbK7bVBA7GJDhlrU5l7LJT88Hk4T3haWfOvv91IQIhAJS6S8QDImnhK%2B66S0dLWM%2FVatd%2BTzgniragou30DBBEKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2F9U%2Fxj8D1yaJOXQq3AMWCXBr%2FQhJ8IReLDE7%2F2c7l8csnh2rXn%2BB3n14dG4gzV4BB8iYc1WZG%2BiHcNgv8rclspsHuyBJE1u%2Fl6IsifpMoW71dRPH9vg54X8IqTP%2BhmSKFc%2FrUIo8326Oo%2Fy%2BTpAh0bw6Dp8ChqOgA975xQWDXf1nhbTRPhTRWxDrkORm5jnhmpIcxkt18NnGFT%2Fm3TKUOpuhVjWeSRNOmV8Z%2F2jJIdnQ1%2FAzdqseWdlsNnvXxugtJXkWU495v5wx9WwWLMg387Y2GhokDcREVfzJk%2FhihrALXDQV1zlopCoWYp0ogIvgzEHarIWmeoT7R%2F8FP%2FQreknPoiBK9pTja7axvKSu5024SqseMgyZ5RIjcbypMz694kx45ieFWCDXm59Kjyruk%2FDh0vms9Uro5ZLuVYTABIKHkO1oGEyI4RaETLNmZw2oTQiLhcJ%2BZ1G62gxm00qKPu8DrSfW4hE7ptNyadVXpmnpD9PsvaDycCquM0gGO9tvxEAtXPO8im2cvUDLp4cxDMzKjQVQQ1q8z2xazNeDcCiYxhSpFdScuAhU49mtCLuaEPh9e7HkujCizKcdgLviDXdUX9WAFx9D0XihUnNYimH52jycyTvRuvOXKm7Aag1RTt45jhIFtPzLXDCklbPDBjqkAXeZak53VpodvOY13XE%2FUHCGnpxlPtoU55y4YxSDKjLG4ZTaUYsQ7I%2FJxY0FnjB4Nfc%2Fem8cfROHs68AKS%2F4nVtLTN7RoPSAFlWNtPXJ75joGYxYYOkOj4eaLVilksmSi9nX3dmbyegVOeenz%2B4Q3Jk7UzAAjAjMYimGNsLoou8X1g0eRwCGQ2zew6me5j0amC2xXpsdvVOBwok8EtnDE5Yo0hAR&X-Amz-Signature=6a6fe60b67ad739f4db807b7ae63484660df1b2c4a2ef6b8b9b6685c037bd395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BVD4MJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs4qDbK7bVBA7GJDhlrU5l7LJT88Hk4T3haWfOvv91IQIhAJS6S8QDImnhK%2B66S0dLWM%2FVatd%2BTzgniragou30DBBEKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2F9U%2Fxj8D1yaJOXQq3AMWCXBr%2FQhJ8IReLDE7%2F2c7l8csnh2rXn%2BB3n14dG4gzV4BB8iYc1WZG%2BiHcNgv8rclspsHuyBJE1u%2Fl6IsifpMoW71dRPH9vg54X8IqTP%2BhmSKFc%2FrUIo8326Oo%2Fy%2BTpAh0bw6Dp8ChqOgA975xQWDXf1nhbTRPhTRWxDrkORm5jnhmpIcxkt18NnGFT%2Fm3TKUOpuhVjWeSRNOmV8Z%2F2jJIdnQ1%2FAzdqseWdlsNnvXxugtJXkWU495v5wx9WwWLMg387Y2GhokDcREVfzJk%2FhihrALXDQV1zlopCoWYp0ogIvgzEHarIWmeoT7R%2F8FP%2FQreknPoiBK9pTja7axvKSu5024SqseMgyZ5RIjcbypMz694kx45ieFWCDXm59Kjyruk%2FDh0vms9Uro5ZLuVYTABIKHkO1oGEyI4RaETLNmZw2oTQiLhcJ%2BZ1G62gxm00qKPu8DrSfW4hE7ptNyadVXpmnpD9PsvaDycCquM0gGO9tvxEAtXPO8im2cvUDLp4cxDMzKjQVQQ1q8z2xazNeDcCiYxhSpFdScuAhU49mtCLuaEPh9e7HkujCizKcdgLviDXdUX9WAFx9D0XihUnNYimH52jycyTvRuvOXKm7Aag1RTt45jhIFtPzLXDCklbPDBjqkAXeZak53VpodvOY13XE%2FUHCGnpxlPtoU55y4YxSDKjLG4ZTaUYsQ7I%2FJxY0FnjB4Nfc%2Fem8cfROHs68AKS%2F4nVtLTN7RoPSAFlWNtPXJ75joGYxYYOkOj4eaLVilksmSi9nX3dmbyegVOeenz%2B4Q3Jk7UzAAjAjMYimGNsLoou8X1g0eRwCGQ2zew6me5j0amC2xXpsdvVOBwok8EtnDE5Yo0hAR&X-Amz-Signature=a3c1641a3ad95675240a259202412ae97cd8d1ac0b2496d0334d6a47b16b7dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BVD4MJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs4qDbK7bVBA7GJDhlrU5l7LJT88Hk4T3haWfOvv91IQIhAJS6S8QDImnhK%2B66S0dLWM%2FVatd%2BTzgniragou30DBBEKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2F9U%2Fxj8D1yaJOXQq3AMWCXBr%2FQhJ8IReLDE7%2F2c7l8csnh2rXn%2BB3n14dG4gzV4BB8iYc1WZG%2BiHcNgv8rclspsHuyBJE1u%2Fl6IsifpMoW71dRPH9vg54X8IqTP%2BhmSKFc%2FrUIo8326Oo%2Fy%2BTpAh0bw6Dp8ChqOgA975xQWDXf1nhbTRPhTRWxDrkORm5jnhmpIcxkt18NnGFT%2Fm3TKUOpuhVjWeSRNOmV8Z%2F2jJIdnQ1%2FAzdqseWdlsNnvXxugtJXkWU495v5wx9WwWLMg387Y2GhokDcREVfzJk%2FhihrALXDQV1zlopCoWYp0ogIvgzEHarIWmeoT7R%2F8FP%2FQreknPoiBK9pTja7axvKSu5024SqseMgyZ5RIjcbypMz694kx45ieFWCDXm59Kjyruk%2FDh0vms9Uro5ZLuVYTABIKHkO1oGEyI4RaETLNmZw2oTQiLhcJ%2BZ1G62gxm00qKPu8DrSfW4hE7ptNyadVXpmnpD9PsvaDycCquM0gGO9tvxEAtXPO8im2cvUDLp4cxDMzKjQVQQ1q8z2xazNeDcCiYxhSpFdScuAhU49mtCLuaEPh9e7HkujCizKcdgLviDXdUX9WAFx9D0XihUnNYimH52jycyTvRuvOXKm7Aag1RTt45jhIFtPzLXDCklbPDBjqkAXeZak53VpodvOY13XE%2FUHCGnpxlPtoU55y4YxSDKjLG4ZTaUYsQ7I%2FJxY0FnjB4Nfc%2Fem8cfROHs68AKS%2F4nVtLTN7RoPSAFlWNtPXJ75joGYxYYOkOj4eaLVilksmSi9nX3dmbyegVOeenz%2B4Q3Jk7UzAAjAjMYimGNsLoou8X1g0eRwCGQ2zew6me5j0amC2xXpsdvVOBwok8EtnDE5Yo0hAR&X-Amz-Signature=d0dec7da2a11a9bcf6c60d8fe786b637d7e7c78f758699d3f4f95b2224086c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BVD4MJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs4qDbK7bVBA7GJDhlrU5l7LJT88Hk4T3haWfOvv91IQIhAJS6S8QDImnhK%2B66S0dLWM%2FVatd%2BTzgniragou30DBBEKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2F9U%2Fxj8D1yaJOXQq3AMWCXBr%2FQhJ8IReLDE7%2F2c7l8csnh2rXn%2BB3n14dG4gzV4BB8iYc1WZG%2BiHcNgv8rclspsHuyBJE1u%2Fl6IsifpMoW71dRPH9vg54X8IqTP%2BhmSKFc%2FrUIo8326Oo%2Fy%2BTpAh0bw6Dp8ChqOgA975xQWDXf1nhbTRPhTRWxDrkORm5jnhmpIcxkt18NnGFT%2Fm3TKUOpuhVjWeSRNOmV8Z%2F2jJIdnQ1%2FAzdqseWdlsNnvXxugtJXkWU495v5wx9WwWLMg387Y2GhokDcREVfzJk%2FhihrALXDQV1zlopCoWYp0ogIvgzEHarIWmeoT7R%2F8FP%2FQreknPoiBK9pTja7axvKSu5024SqseMgyZ5RIjcbypMz694kx45ieFWCDXm59Kjyruk%2FDh0vms9Uro5ZLuVYTABIKHkO1oGEyI4RaETLNmZw2oTQiLhcJ%2BZ1G62gxm00qKPu8DrSfW4hE7ptNyadVXpmnpD9PsvaDycCquM0gGO9tvxEAtXPO8im2cvUDLp4cxDMzKjQVQQ1q8z2xazNeDcCiYxhSpFdScuAhU49mtCLuaEPh9e7HkujCizKcdgLviDXdUX9WAFx9D0XihUnNYimH52jycyTvRuvOXKm7Aag1RTt45jhIFtPzLXDCklbPDBjqkAXeZak53VpodvOY13XE%2FUHCGnpxlPtoU55y4YxSDKjLG4ZTaUYsQ7I%2FJxY0FnjB4Nfc%2Fem8cfROHs68AKS%2F4nVtLTN7RoPSAFlWNtPXJ75joGYxYYOkOj4eaLVilksmSi9nX3dmbyegVOeenz%2B4Q3Jk7UzAAjAjMYimGNsLoou8X1g0eRwCGQ2zew6me5j0amC2xXpsdvVOBwok8EtnDE5Yo0hAR&X-Amz-Signature=096969c0284040c90bd1d20fa6c5d8cab61cba85ee4d051d0f89995e0807fa7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BVD4MJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs4qDbK7bVBA7GJDhlrU5l7LJT88Hk4T3haWfOvv91IQIhAJS6S8QDImnhK%2B66S0dLWM%2FVatd%2BTzgniragou30DBBEKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2F9U%2Fxj8D1yaJOXQq3AMWCXBr%2FQhJ8IReLDE7%2F2c7l8csnh2rXn%2BB3n14dG4gzV4BB8iYc1WZG%2BiHcNgv8rclspsHuyBJE1u%2Fl6IsifpMoW71dRPH9vg54X8IqTP%2BhmSKFc%2FrUIo8326Oo%2Fy%2BTpAh0bw6Dp8ChqOgA975xQWDXf1nhbTRPhTRWxDrkORm5jnhmpIcxkt18NnGFT%2Fm3TKUOpuhVjWeSRNOmV8Z%2F2jJIdnQ1%2FAzdqseWdlsNnvXxugtJXkWU495v5wx9WwWLMg387Y2GhokDcREVfzJk%2FhihrALXDQV1zlopCoWYp0ogIvgzEHarIWmeoT7R%2F8FP%2FQreknPoiBK9pTja7axvKSu5024SqseMgyZ5RIjcbypMz694kx45ieFWCDXm59Kjyruk%2FDh0vms9Uro5ZLuVYTABIKHkO1oGEyI4RaETLNmZw2oTQiLhcJ%2BZ1G62gxm00qKPu8DrSfW4hE7ptNyadVXpmnpD9PsvaDycCquM0gGO9tvxEAtXPO8im2cvUDLp4cxDMzKjQVQQ1q8z2xazNeDcCiYxhSpFdScuAhU49mtCLuaEPh9e7HkujCizKcdgLviDXdUX9WAFx9D0XihUnNYimH52jycyTvRuvOXKm7Aag1RTt45jhIFtPzLXDCklbPDBjqkAXeZak53VpodvOY13XE%2FUHCGnpxlPtoU55y4YxSDKjLG4ZTaUYsQ7I%2FJxY0FnjB4Nfc%2Fem8cfROHs68AKS%2F4nVtLTN7RoPSAFlWNtPXJ75joGYxYYOkOj4eaLVilksmSi9nX3dmbyegVOeenz%2B4Q3Jk7UzAAjAjMYimGNsLoou8X1g0eRwCGQ2zew6me5j0amC2xXpsdvVOBwok8EtnDE5Yo0hAR&X-Amz-Signature=e266e359b5999e28df0e94230e7bbd6893d09a3d8207fb17adb466fbc8fa33ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

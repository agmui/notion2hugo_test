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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTI3DGB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrtiNK4QSHXdWq0lXPlGjql4zo7IT0frcRx7ZmQT5IAIhAPnTpaW%2BDNEFHnADof55OEbxIt%2BdZU9YxQE2tUZ3Xg82KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCppD50v%2FIqjH9Rt0q3APkMcJ7YbHZoFGeLxM6o8Tn%2FPc4dB2NiRlH6DLcx292mot2OJTkjzZiSkpzlQrcVVNs54cZrQC7PCkNFbKGDGRTQyiwo7zARiCqPMZZiYx%2FkJXhlb9CQnjjOLBnQmYgPJbakog7DXnOCpQrOia0bdn9680swPakwlk2K0u6lyu5Xsi9WjNb0JNVT0NiWY8XWpb%2BxjCyz1Q4URaCt251FFAu5%2FtBjjOFKvv0EJM8WiPNBMM%2BK733b6S%2FfP0wrxMffqM3KmD4zCS%2FMMtouWx3A4sHMYQ93LmFgLDD3FRvDt9%2BrgvRPtRPndedo3UxFwgEz1fSOZuUdsSOVcNBYoCVFMRebInfVnwBZQ5H8e9MhwfhGP3S%2BhEcgYy529ZC3ZSqUpwQ7aZBEyjsEW1ZVxz1srQ0lwfAtMjZATLwITI9Ikzl0VvEdFgUoibxBE%2BJEnd1oYJWwobovGPkzR%2F1MsxOmpwe8gHkJsHniYksVvu9q2rfFXfh86aA2lnlGq%2BK8O9naHo21qZCc4HJnIgPDsnl7ytUFekYz%2FJsSPSaiKssUc2cgXBsmcpn4oH8OrsowkMSex3nHrJoFPD85TDBBTfqxGdZA8Ps5fv%2F8HCdpK3zri8OJ0FVFL88Nggsxoy5pTCUofvABjqkAbh5tHO7bZRyGEw0TvcdVbAm9i08gsyyteJS%2FNvVRruY5WKcBkT%2B2UEDwIYHpqTo%2FFYJYcDkJAoivA0SC4i6vbCv2fg5EfWLOtZHeTYGfaJ9lx5fVUhNCCmHS%2BO5inFRFXaFr3E6FpvYe24D9LzZ5j5LQaemuEOd9bJxxnbgjybLrAhuC74rR7M1QBx23PuoFvjHv1DsNnBaIGXd9Q55bU0NOcww&X-Amz-Signature=cbdecf62e167ca38afb4fe1dee10f4ed0e4dda694d982c485754247490418cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTI3DGB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrtiNK4QSHXdWq0lXPlGjql4zo7IT0frcRx7ZmQT5IAIhAPnTpaW%2BDNEFHnADof55OEbxIt%2BdZU9YxQE2tUZ3Xg82KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCppD50v%2FIqjH9Rt0q3APkMcJ7YbHZoFGeLxM6o8Tn%2FPc4dB2NiRlH6DLcx292mot2OJTkjzZiSkpzlQrcVVNs54cZrQC7PCkNFbKGDGRTQyiwo7zARiCqPMZZiYx%2FkJXhlb9CQnjjOLBnQmYgPJbakog7DXnOCpQrOia0bdn9680swPakwlk2K0u6lyu5Xsi9WjNb0JNVT0NiWY8XWpb%2BxjCyz1Q4URaCt251FFAu5%2FtBjjOFKvv0EJM8WiPNBMM%2BK733b6S%2FfP0wrxMffqM3KmD4zCS%2FMMtouWx3A4sHMYQ93LmFgLDD3FRvDt9%2BrgvRPtRPndedo3UxFwgEz1fSOZuUdsSOVcNBYoCVFMRebInfVnwBZQ5H8e9MhwfhGP3S%2BhEcgYy529ZC3ZSqUpwQ7aZBEyjsEW1ZVxz1srQ0lwfAtMjZATLwITI9Ikzl0VvEdFgUoibxBE%2BJEnd1oYJWwobovGPkzR%2F1MsxOmpwe8gHkJsHniYksVvu9q2rfFXfh86aA2lnlGq%2BK8O9naHo21qZCc4HJnIgPDsnl7ytUFekYz%2FJsSPSaiKssUc2cgXBsmcpn4oH8OrsowkMSex3nHrJoFPD85TDBBTfqxGdZA8Ps5fv%2F8HCdpK3zri8OJ0FVFL88Nggsxoy5pTCUofvABjqkAbh5tHO7bZRyGEw0TvcdVbAm9i08gsyyteJS%2FNvVRruY5WKcBkT%2B2UEDwIYHpqTo%2FFYJYcDkJAoivA0SC4i6vbCv2fg5EfWLOtZHeTYGfaJ9lx5fVUhNCCmHS%2BO5inFRFXaFr3E6FpvYe24D9LzZ5j5LQaemuEOd9bJxxnbgjybLrAhuC74rR7M1QBx23PuoFvjHv1DsNnBaIGXd9Q55bU0NOcww&X-Amz-Signature=0dd6e10a73be814c81c6b564367eac35d689efc7f47e522b1b270600906ea2be&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTI3DGB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrtiNK4QSHXdWq0lXPlGjql4zo7IT0frcRx7ZmQT5IAIhAPnTpaW%2BDNEFHnADof55OEbxIt%2BdZU9YxQE2tUZ3Xg82KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCppD50v%2FIqjH9Rt0q3APkMcJ7YbHZoFGeLxM6o8Tn%2FPc4dB2NiRlH6DLcx292mot2OJTkjzZiSkpzlQrcVVNs54cZrQC7PCkNFbKGDGRTQyiwo7zARiCqPMZZiYx%2FkJXhlb9CQnjjOLBnQmYgPJbakog7DXnOCpQrOia0bdn9680swPakwlk2K0u6lyu5Xsi9WjNb0JNVT0NiWY8XWpb%2BxjCyz1Q4URaCt251FFAu5%2FtBjjOFKvv0EJM8WiPNBMM%2BK733b6S%2FfP0wrxMffqM3KmD4zCS%2FMMtouWx3A4sHMYQ93LmFgLDD3FRvDt9%2BrgvRPtRPndedo3UxFwgEz1fSOZuUdsSOVcNBYoCVFMRebInfVnwBZQ5H8e9MhwfhGP3S%2BhEcgYy529ZC3ZSqUpwQ7aZBEyjsEW1ZVxz1srQ0lwfAtMjZATLwITI9Ikzl0VvEdFgUoibxBE%2BJEnd1oYJWwobovGPkzR%2F1MsxOmpwe8gHkJsHniYksVvu9q2rfFXfh86aA2lnlGq%2BK8O9naHo21qZCc4HJnIgPDsnl7ytUFekYz%2FJsSPSaiKssUc2cgXBsmcpn4oH8OrsowkMSex3nHrJoFPD85TDBBTfqxGdZA8Ps5fv%2F8HCdpK3zri8OJ0FVFL88Nggsxoy5pTCUofvABjqkAbh5tHO7bZRyGEw0TvcdVbAm9i08gsyyteJS%2FNvVRruY5WKcBkT%2B2UEDwIYHpqTo%2FFYJYcDkJAoivA0SC4i6vbCv2fg5EfWLOtZHeTYGfaJ9lx5fVUhNCCmHS%2BO5inFRFXaFr3E6FpvYe24D9LzZ5j5LQaemuEOd9bJxxnbgjybLrAhuC74rR7M1QBx23PuoFvjHv1DsNnBaIGXd9Q55bU0NOcww&X-Amz-Signature=e4c6499c40396246f1df78d91576c23dc1ec0769df2474bf5badc162afcacb47&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTI3DGB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrtiNK4QSHXdWq0lXPlGjql4zo7IT0frcRx7ZmQT5IAIhAPnTpaW%2BDNEFHnADof55OEbxIt%2BdZU9YxQE2tUZ3Xg82KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCppD50v%2FIqjH9Rt0q3APkMcJ7YbHZoFGeLxM6o8Tn%2FPc4dB2NiRlH6DLcx292mot2OJTkjzZiSkpzlQrcVVNs54cZrQC7PCkNFbKGDGRTQyiwo7zARiCqPMZZiYx%2FkJXhlb9CQnjjOLBnQmYgPJbakog7DXnOCpQrOia0bdn9680swPakwlk2K0u6lyu5Xsi9WjNb0JNVT0NiWY8XWpb%2BxjCyz1Q4URaCt251FFAu5%2FtBjjOFKvv0EJM8WiPNBMM%2BK733b6S%2FfP0wrxMffqM3KmD4zCS%2FMMtouWx3A4sHMYQ93LmFgLDD3FRvDt9%2BrgvRPtRPndedo3UxFwgEz1fSOZuUdsSOVcNBYoCVFMRebInfVnwBZQ5H8e9MhwfhGP3S%2BhEcgYy529ZC3ZSqUpwQ7aZBEyjsEW1ZVxz1srQ0lwfAtMjZATLwITI9Ikzl0VvEdFgUoibxBE%2BJEnd1oYJWwobovGPkzR%2F1MsxOmpwe8gHkJsHniYksVvu9q2rfFXfh86aA2lnlGq%2BK8O9naHo21qZCc4HJnIgPDsnl7ytUFekYz%2FJsSPSaiKssUc2cgXBsmcpn4oH8OrsowkMSex3nHrJoFPD85TDBBTfqxGdZA8Ps5fv%2F8HCdpK3zri8OJ0FVFL88Nggsxoy5pTCUofvABjqkAbh5tHO7bZRyGEw0TvcdVbAm9i08gsyyteJS%2FNvVRruY5WKcBkT%2B2UEDwIYHpqTo%2FFYJYcDkJAoivA0SC4i6vbCv2fg5EfWLOtZHeTYGfaJ9lx5fVUhNCCmHS%2BO5inFRFXaFr3E6FpvYe24D9LzZ5j5LQaemuEOd9bJxxnbgjybLrAhuC74rR7M1QBx23PuoFvjHv1DsNnBaIGXd9Q55bU0NOcww&X-Amz-Signature=17034fc7693fa5963055a3f82ed43a509d6a98617b27c8c3ca39a43450d15594&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTI3DGB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrtiNK4QSHXdWq0lXPlGjql4zo7IT0frcRx7ZmQT5IAIhAPnTpaW%2BDNEFHnADof55OEbxIt%2BdZU9YxQE2tUZ3Xg82KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCppD50v%2FIqjH9Rt0q3APkMcJ7YbHZoFGeLxM6o8Tn%2FPc4dB2NiRlH6DLcx292mot2OJTkjzZiSkpzlQrcVVNs54cZrQC7PCkNFbKGDGRTQyiwo7zARiCqPMZZiYx%2FkJXhlb9CQnjjOLBnQmYgPJbakog7DXnOCpQrOia0bdn9680swPakwlk2K0u6lyu5Xsi9WjNb0JNVT0NiWY8XWpb%2BxjCyz1Q4URaCt251FFAu5%2FtBjjOFKvv0EJM8WiPNBMM%2BK733b6S%2FfP0wrxMffqM3KmD4zCS%2FMMtouWx3A4sHMYQ93LmFgLDD3FRvDt9%2BrgvRPtRPndedo3UxFwgEz1fSOZuUdsSOVcNBYoCVFMRebInfVnwBZQ5H8e9MhwfhGP3S%2BhEcgYy529ZC3ZSqUpwQ7aZBEyjsEW1ZVxz1srQ0lwfAtMjZATLwITI9Ikzl0VvEdFgUoibxBE%2BJEnd1oYJWwobovGPkzR%2F1MsxOmpwe8gHkJsHniYksVvu9q2rfFXfh86aA2lnlGq%2BK8O9naHo21qZCc4HJnIgPDsnl7ytUFekYz%2FJsSPSaiKssUc2cgXBsmcpn4oH8OrsowkMSex3nHrJoFPD85TDBBTfqxGdZA8Ps5fv%2F8HCdpK3zri8OJ0FVFL88Nggsxoy5pTCUofvABjqkAbh5tHO7bZRyGEw0TvcdVbAm9i08gsyyteJS%2FNvVRruY5WKcBkT%2B2UEDwIYHpqTo%2FFYJYcDkJAoivA0SC4i6vbCv2fg5EfWLOtZHeTYGfaJ9lx5fVUhNCCmHS%2BO5inFRFXaFr3E6FpvYe24D9LzZ5j5LQaemuEOd9bJxxnbgjybLrAhuC74rR7M1QBx23PuoFvjHv1DsNnBaIGXd9Q55bU0NOcww&X-Amz-Signature=6e44ba03ad4023a4e529025cccd69badba65d55fec121b8c5e607776ce285b13&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTI3DGB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrtiNK4QSHXdWq0lXPlGjql4zo7IT0frcRx7ZmQT5IAIhAPnTpaW%2BDNEFHnADof55OEbxIt%2BdZU9YxQE2tUZ3Xg82KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCppD50v%2FIqjH9Rt0q3APkMcJ7YbHZoFGeLxM6o8Tn%2FPc4dB2NiRlH6DLcx292mot2OJTkjzZiSkpzlQrcVVNs54cZrQC7PCkNFbKGDGRTQyiwo7zARiCqPMZZiYx%2FkJXhlb9CQnjjOLBnQmYgPJbakog7DXnOCpQrOia0bdn9680swPakwlk2K0u6lyu5Xsi9WjNb0JNVT0NiWY8XWpb%2BxjCyz1Q4URaCt251FFAu5%2FtBjjOFKvv0EJM8WiPNBMM%2BK733b6S%2FfP0wrxMffqM3KmD4zCS%2FMMtouWx3A4sHMYQ93LmFgLDD3FRvDt9%2BrgvRPtRPndedo3UxFwgEz1fSOZuUdsSOVcNBYoCVFMRebInfVnwBZQ5H8e9MhwfhGP3S%2BhEcgYy529ZC3ZSqUpwQ7aZBEyjsEW1ZVxz1srQ0lwfAtMjZATLwITI9Ikzl0VvEdFgUoibxBE%2BJEnd1oYJWwobovGPkzR%2F1MsxOmpwe8gHkJsHniYksVvu9q2rfFXfh86aA2lnlGq%2BK8O9naHo21qZCc4HJnIgPDsnl7ytUFekYz%2FJsSPSaiKssUc2cgXBsmcpn4oH8OrsowkMSex3nHrJoFPD85TDBBTfqxGdZA8Ps5fv%2F8HCdpK3zri8OJ0FVFL88Nggsxoy5pTCUofvABjqkAbh5tHO7bZRyGEw0TvcdVbAm9i08gsyyteJS%2FNvVRruY5WKcBkT%2B2UEDwIYHpqTo%2FFYJYcDkJAoivA0SC4i6vbCv2fg5EfWLOtZHeTYGfaJ9lx5fVUhNCCmHS%2BO5inFRFXaFr3E6FpvYe24D9LzZ5j5LQaemuEOd9bJxxnbgjybLrAhuC74rR7M1QBx23PuoFvjHv1DsNnBaIGXd9Q55bU0NOcww&X-Amz-Signature=77e0a50edd6307131f219183d2c34ba846d1bf53ba7ce71d70342afd84e2cfed&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTI3DGB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrtiNK4QSHXdWq0lXPlGjql4zo7IT0frcRx7ZmQT5IAIhAPnTpaW%2BDNEFHnADof55OEbxIt%2BdZU9YxQE2tUZ3Xg82KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCppD50v%2FIqjH9Rt0q3APkMcJ7YbHZoFGeLxM6o8Tn%2FPc4dB2NiRlH6DLcx292mot2OJTkjzZiSkpzlQrcVVNs54cZrQC7PCkNFbKGDGRTQyiwo7zARiCqPMZZiYx%2FkJXhlb9CQnjjOLBnQmYgPJbakog7DXnOCpQrOia0bdn9680swPakwlk2K0u6lyu5Xsi9WjNb0JNVT0NiWY8XWpb%2BxjCyz1Q4URaCt251FFAu5%2FtBjjOFKvv0EJM8WiPNBMM%2BK733b6S%2FfP0wrxMffqM3KmD4zCS%2FMMtouWx3A4sHMYQ93LmFgLDD3FRvDt9%2BrgvRPtRPndedo3UxFwgEz1fSOZuUdsSOVcNBYoCVFMRebInfVnwBZQ5H8e9MhwfhGP3S%2BhEcgYy529ZC3ZSqUpwQ7aZBEyjsEW1ZVxz1srQ0lwfAtMjZATLwITI9Ikzl0VvEdFgUoibxBE%2BJEnd1oYJWwobovGPkzR%2F1MsxOmpwe8gHkJsHniYksVvu9q2rfFXfh86aA2lnlGq%2BK8O9naHo21qZCc4HJnIgPDsnl7ytUFekYz%2FJsSPSaiKssUc2cgXBsmcpn4oH8OrsowkMSex3nHrJoFPD85TDBBTfqxGdZA8Ps5fv%2F8HCdpK3zri8OJ0FVFL88Nggsxoy5pTCUofvABjqkAbh5tHO7bZRyGEw0TvcdVbAm9i08gsyyteJS%2FNvVRruY5WKcBkT%2B2UEDwIYHpqTo%2FFYJYcDkJAoivA0SC4i6vbCv2fg5EfWLOtZHeTYGfaJ9lx5fVUhNCCmHS%2BO5inFRFXaFr3E6FpvYe24D9LzZ5j5LQaemuEOd9bJxxnbgjybLrAhuC74rR7M1QBx23PuoFvjHv1DsNnBaIGXd9Q55bU0NOcww&X-Amz-Signature=9c81ffc65b3c73d6513d76a8c5e029265331ab61060b255e1468ce2c0c7b68f9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

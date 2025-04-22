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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXB7J3G%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCapgGrMioe7ubUjbmUJCeK4UmD2CfpaZkEpODC868dSAIhAK2qVSwmby2MmfdRy%2BZ0NTgULOkRWDqQoJPA%2F8J%2FcNorKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyisPBwF5XgL8ZP%2B1gq3ANQF9tIOyuxWaNK6IHbHOPkeacbKPJRfsbqDC8hyYk5j5neiVdVhBft6ePpBVqp2N6BOSGeBcA2yCAwoTC%2Frd4RE7UBXeTenaeOytz4ttyDIxPlccDlcELSBndT%2BGOxj8cHt4zhiiVXISONq7IgeHZTP7aLvn%2B6a1uexZE4EOaO7VXetGdjQ4rSe71HPW0Zpxc932iUnXFjUqwx1aa4YU%2FYXuBqSeHbbASuzKUVkxjYjTBdCSe%2F8IMQMW0CqPTcpsJuUqKIicchTsnOqy6FfHaqR5pXEUMWZcWeVGYc4MMWKF3Pb%2B4UoVa91t%2FfwX4CuXJgmtq4GQu45ZVqoBb9CbO0YRp6yZ%2FXyo9n722RnqO4T%2Bg40e%2ByYcPJaqtKDAy7Iux2NrJs%2FDtE1zzEsbHiV50QV2foCD%2F7%2Fo%2FNelrNnGSi9TX7EY95Y453G7wqN%2FmOh78UfA0ylRTDV31y6WUvpVrKVmK89xLv%2FHQVNbwQMTNXI51cUhGYDztTgVU%2Bm26hcK8TGMGm8Xz3dNP2JIOmZip9xcdWAMd%2FhB2HFFWbasWqvV39WjVYGDz6pV%2FHqtnXoOSdJYEwPfdtFpehNzQWcaujtP%2BqkIJgGtpw8tlpEfQ45GvVvziA8ShNsWw7IjCVwp3ABjqkAdCOA6ISpaOS8zlEIG5miStdHODu3vFtlfLER8zrwjz2FQFdujEG8vEq4NiAsqDSnzo3whuqKdqI5r1LzLldX5oRqPzvTMIN%2B6CcNpgq7WPbKubhGHFHPTW%2BVZYeHGmHZ8M4CDYVgReyOs4xf%2FhSE%2FLqZ1lO1gmo8POfjobm8sJ05NLplu4vUdKaN61Fs6LKNvlN%2F39iVPKSZXGJDL46QcyEhp%2BY&X-Amz-Signature=bcf0c2fcadf4701ab6f322011b0a12b473a1a7d37ccfdb4b7ef41ffc054b6f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXB7J3G%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCapgGrMioe7ubUjbmUJCeK4UmD2CfpaZkEpODC868dSAIhAK2qVSwmby2MmfdRy%2BZ0NTgULOkRWDqQoJPA%2F8J%2FcNorKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyisPBwF5XgL8ZP%2B1gq3ANQF9tIOyuxWaNK6IHbHOPkeacbKPJRfsbqDC8hyYk5j5neiVdVhBft6ePpBVqp2N6BOSGeBcA2yCAwoTC%2Frd4RE7UBXeTenaeOytz4ttyDIxPlccDlcELSBndT%2BGOxj8cHt4zhiiVXISONq7IgeHZTP7aLvn%2B6a1uexZE4EOaO7VXetGdjQ4rSe71HPW0Zpxc932iUnXFjUqwx1aa4YU%2FYXuBqSeHbbASuzKUVkxjYjTBdCSe%2F8IMQMW0CqPTcpsJuUqKIicchTsnOqy6FfHaqR5pXEUMWZcWeVGYc4MMWKF3Pb%2B4UoVa91t%2FfwX4CuXJgmtq4GQu45ZVqoBb9CbO0YRp6yZ%2FXyo9n722RnqO4T%2Bg40e%2ByYcPJaqtKDAy7Iux2NrJs%2FDtE1zzEsbHiV50QV2foCD%2F7%2Fo%2FNelrNnGSi9TX7EY95Y453G7wqN%2FmOh78UfA0ylRTDV31y6WUvpVrKVmK89xLv%2FHQVNbwQMTNXI51cUhGYDztTgVU%2Bm26hcK8TGMGm8Xz3dNP2JIOmZip9xcdWAMd%2FhB2HFFWbasWqvV39WjVYGDz6pV%2FHqtnXoOSdJYEwPfdtFpehNzQWcaujtP%2BqkIJgGtpw8tlpEfQ45GvVvziA8ShNsWw7IjCVwp3ABjqkAdCOA6ISpaOS8zlEIG5miStdHODu3vFtlfLER8zrwjz2FQFdujEG8vEq4NiAsqDSnzo3whuqKdqI5r1LzLldX5oRqPzvTMIN%2B6CcNpgq7WPbKubhGHFHPTW%2BVZYeHGmHZ8M4CDYVgReyOs4xf%2FhSE%2FLqZ1lO1gmo8POfjobm8sJ05NLplu4vUdKaN61Fs6LKNvlN%2F39iVPKSZXGJDL46QcyEhp%2BY&X-Amz-Signature=b5570d6e23cd9ff62a6aafea2060f586e47533c1f1c42bf3ad59d623b8fac027&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXB7J3G%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCapgGrMioe7ubUjbmUJCeK4UmD2CfpaZkEpODC868dSAIhAK2qVSwmby2MmfdRy%2BZ0NTgULOkRWDqQoJPA%2F8J%2FcNorKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyisPBwF5XgL8ZP%2B1gq3ANQF9tIOyuxWaNK6IHbHOPkeacbKPJRfsbqDC8hyYk5j5neiVdVhBft6ePpBVqp2N6BOSGeBcA2yCAwoTC%2Frd4RE7UBXeTenaeOytz4ttyDIxPlccDlcELSBndT%2BGOxj8cHt4zhiiVXISONq7IgeHZTP7aLvn%2B6a1uexZE4EOaO7VXetGdjQ4rSe71HPW0Zpxc932iUnXFjUqwx1aa4YU%2FYXuBqSeHbbASuzKUVkxjYjTBdCSe%2F8IMQMW0CqPTcpsJuUqKIicchTsnOqy6FfHaqR5pXEUMWZcWeVGYc4MMWKF3Pb%2B4UoVa91t%2FfwX4CuXJgmtq4GQu45ZVqoBb9CbO0YRp6yZ%2FXyo9n722RnqO4T%2Bg40e%2ByYcPJaqtKDAy7Iux2NrJs%2FDtE1zzEsbHiV50QV2foCD%2F7%2Fo%2FNelrNnGSi9TX7EY95Y453G7wqN%2FmOh78UfA0ylRTDV31y6WUvpVrKVmK89xLv%2FHQVNbwQMTNXI51cUhGYDztTgVU%2Bm26hcK8TGMGm8Xz3dNP2JIOmZip9xcdWAMd%2FhB2HFFWbasWqvV39WjVYGDz6pV%2FHqtnXoOSdJYEwPfdtFpehNzQWcaujtP%2BqkIJgGtpw8tlpEfQ45GvVvziA8ShNsWw7IjCVwp3ABjqkAdCOA6ISpaOS8zlEIG5miStdHODu3vFtlfLER8zrwjz2FQFdujEG8vEq4NiAsqDSnzo3whuqKdqI5r1LzLldX5oRqPzvTMIN%2B6CcNpgq7WPbKubhGHFHPTW%2BVZYeHGmHZ8M4CDYVgReyOs4xf%2FhSE%2FLqZ1lO1gmo8POfjobm8sJ05NLplu4vUdKaN61Fs6LKNvlN%2F39iVPKSZXGJDL46QcyEhp%2BY&X-Amz-Signature=0ab4e31004a324f973639e4527d323e7bb4d6a839006f0587f500d35b0b5ca3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXB7J3G%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCapgGrMioe7ubUjbmUJCeK4UmD2CfpaZkEpODC868dSAIhAK2qVSwmby2MmfdRy%2BZ0NTgULOkRWDqQoJPA%2F8J%2FcNorKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyisPBwF5XgL8ZP%2B1gq3ANQF9tIOyuxWaNK6IHbHOPkeacbKPJRfsbqDC8hyYk5j5neiVdVhBft6ePpBVqp2N6BOSGeBcA2yCAwoTC%2Frd4RE7UBXeTenaeOytz4ttyDIxPlccDlcELSBndT%2BGOxj8cHt4zhiiVXISONq7IgeHZTP7aLvn%2B6a1uexZE4EOaO7VXetGdjQ4rSe71HPW0Zpxc932iUnXFjUqwx1aa4YU%2FYXuBqSeHbbASuzKUVkxjYjTBdCSe%2F8IMQMW0CqPTcpsJuUqKIicchTsnOqy6FfHaqR5pXEUMWZcWeVGYc4MMWKF3Pb%2B4UoVa91t%2FfwX4CuXJgmtq4GQu45ZVqoBb9CbO0YRp6yZ%2FXyo9n722RnqO4T%2Bg40e%2ByYcPJaqtKDAy7Iux2NrJs%2FDtE1zzEsbHiV50QV2foCD%2F7%2Fo%2FNelrNnGSi9TX7EY95Y453G7wqN%2FmOh78UfA0ylRTDV31y6WUvpVrKVmK89xLv%2FHQVNbwQMTNXI51cUhGYDztTgVU%2Bm26hcK8TGMGm8Xz3dNP2JIOmZip9xcdWAMd%2FhB2HFFWbasWqvV39WjVYGDz6pV%2FHqtnXoOSdJYEwPfdtFpehNzQWcaujtP%2BqkIJgGtpw8tlpEfQ45GvVvziA8ShNsWw7IjCVwp3ABjqkAdCOA6ISpaOS8zlEIG5miStdHODu3vFtlfLER8zrwjz2FQFdujEG8vEq4NiAsqDSnzo3whuqKdqI5r1LzLldX5oRqPzvTMIN%2B6CcNpgq7WPbKubhGHFHPTW%2BVZYeHGmHZ8M4CDYVgReyOs4xf%2FhSE%2FLqZ1lO1gmo8POfjobm8sJ05NLplu4vUdKaN61Fs6LKNvlN%2F39iVPKSZXGJDL46QcyEhp%2BY&X-Amz-Signature=49e047f95277c3cbdc50000757c9294c25c2ee0052de1f8acc96432481ea2b49&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXB7J3G%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCapgGrMioe7ubUjbmUJCeK4UmD2CfpaZkEpODC868dSAIhAK2qVSwmby2MmfdRy%2BZ0NTgULOkRWDqQoJPA%2F8J%2FcNorKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyisPBwF5XgL8ZP%2B1gq3ANQF9tIOyuxWaNK6IHbHOPkeacbKPJRfsbqDC8hyYk5j5neiVdVhBft6ePpBVqp2N6BOSGeBcA2yCAwoTC%2Frd4RE7UBXeTenaeOytz4ttyDIxPlccDlcELSBndT%2BGOxj8cHt4zhiiVXISONq7IgeHZTP7aLvn%2B6a1uexZE4EOaO7VXetGdjQ4rSe71HPW0Zpxc932iUnXFjUqwx1aa4YU%2FYXuBqSeHbbASuzKUVkxjYjTBdCSe%2F8IMQMW0CqPTcpsJuUqKIicchTsnOqy6FfHaqR5pXEUMWZcWeVGYc4MMWKF3Pb%2B4UoVa91t%2FfwX4CuXJgmtq4GQu45ZVqoBb9CbO0YRp6yZ%2FXyo9n722RnqO4T%2Bg40e%2ByYcPJaqtKDAy7Iux2NrJs%2FDtE1zzEsbHiV50QV2foCD%2F7%2Fo%2FNelrNnGSi9TX7EY95Y453G7wqN%2FmOh78UfA0ylRTDV31y6WUvpVrKVmK89xLv%2FHQVNbwQMTNXI51cUhGYDztTgVU%2Bm26hcK8TGMGm8Xz3dNP2JIOmZip9xcdWAMd%2FhB2HFFWbasWqvV39WjVYGDz6pV%2FHqtnXoOSdJYEwPfdtFpehNzQWcaujtP%2BqkIJgGtpw8tlpEfQ45GvVvziA8ShNsWw7IjCVwp3ABjqkAdCOA6ISpaOS8zlEIG5miStdHODu3vFtlfLER8zrwjz2FQFdujEG8vEq4NiAsqDSnzo3whuqKdqI5r1LzLldX5oRqPzvTMIN%2B6CcNpgq7WPbKubhGHFHPTW%2BVZYeHGmHZ8M4CDYVgReyOs4xf%2FhSE%2FLqZ1lO1gmo8POfjobm8sJ05NLplu4vUdKaN61Fs6LKNvlN%2F39iVPKSZXGJDL46QcyEhp%2BY&X-Amz-Signature=a0bbbc76f95426ef3833c95920e6f83a2008e7eb1c9ad412894eb691d33d3a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXB7J3G%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCapgGrMioe7ubUjbmUJCeK4UmD2CfpaZkEpODC868dSAIhAK2qVSwmby2MmfdRy%2BZ0NTgULOkRWDqQoJPA%2F8J%2FcNorKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyisPBwF5XgL8ZP%2B1gq3ANQF9tIOyuxWaNK6IHbHOPkeacbKPJRfsbqDC8hyYk5j5neiVdVhBft6ePpBVqp2N6BOSGeBcA2yCAwoTC%2Frd4RE7UBXeTenaeOytz4ttyDIxPlccDlcELSBndT%2BGOxj8cHt4zhiiVXISONq7IgeHZTP7aLvn%2B6a1uexZE4EOaO7VXetGdjQ4rSe71HPW0Zpxc932iUnXFjUqwx1aa4YU%2FYXuBqSeHbbASuzKUVkxjYjTBdCSe%2F8IMQMW0CqPTcpsJuUqKIicchTsnOqy6FfHaqR5pXEUMWZcWeVGYc4MMWKF3Pb%2B4UoVa91t%2FfwX4CuXJgmtq4GQu45ZVqoBb9CbO0YRp6yZ%2FXyo9n722RnqO4T%2Bg40e%2ByYcPJaqtKDAy7Iux2NrJs%2FDtE1zzEsbHiV50QV2foCD%2F7%2Fo%2FNelrNnGSi9TX7EY95Y453G7wqN%2FmOh78UfA0ylRTDV31y6WUvpVrKVmK89xLv%2FHQVNbwQMTNXI51cUhGYDztTgVU%2Bm26hcK8TGMGm8Xz3dNP2JIOmZip9xcdWAMd%2FhB2HFFWbasWqvV39WjVYGDz6pV%2FHqtnXoOSdJYEwPfdtFpehNzQWcaujtP%2BqkIJgGtpw8tlpEfQ45GvVvziA8ShNsWw7IjCVwp3ABjqkAdCOA6ISpaOS8zlEIG5miStdHODu3vFtlfLER8zrwjz2FQFdujEG8vEq4NiAsqDSnzo3whuqKdqI5r1LzLldX5oRqPzvTMIN%2B6CcNpgq7WPbKubhGHFHPTW%2BVZYeHGmHZ8M4CDYVgReyOs4xf%2FhSE%2FLqZ1lO1gmo8POfjobm8sJ05NLplu4vUdKaN61Fs6LKNvlN%2F39iVPKSZXGJDL46QcyEhp%2BY&X-Amz-Signature=f6eceaca273ca5feb17a2a44467630657b810620c3cbe5978668b6a5dc7130ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXB7J3G%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCapgGrMioe7ubUjbmUJCeK4UmD2CfpaZkEpODC868dSAIhAK2qVSwmby2MmfdRy%2BZ0NTgULOkRWDqQoJPA%2F8J%2FcNorKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyisPBwF5XgL8ZP%2B1gq3ANQF9tIOyuxWaNK6IHbHOPkeacbKPJRfsbqDC8hyYk5j5neiVdVhBft6ePpBVqp2N6BOSGeBcA2yCAwoTC%2Frd4RE7UBXeTenaeOytz4ttyDIxPlccDlcELSBndT%2BGOxj8cHt4zhiiVXISONq7IgeHZTP7aLvn%2B6a1uexZE4EOaO7VXetGdjQ4rSe71HPW0Zpxc932iUnXFjUqwx1aa4YU%2FYXuBqSeHbbASuzKUVkxjYjTBdCSe%2F8IMQMW0CqPTcpsJuUqKIicchTsnOqy6FfHaqR5pXEUMWZcWeVGYc4MMWKF3Pb%2B4UoVa91t%2FfwX4CuXJgmtq4GQu45ZVqoBb9CbO0YRp6yZ%2FXyo9n722RnqO4T%2Bg40e%2ByYcPJaqtKDAy7Iux2NrJs%2FDtE1zzEsbHiV50QV2foCD%2F7%2Fo%2FNelrNnGSi9TX7EY95Y453G7wqN%2FmOh78UfA0ylRTDV31y6WUvpVrKVmK89xLv%2FHQVNbwQMTNXI51cUhGYDztTgVU%2Bm26hcK8TGMGm8Xz3dNP2JIOmZip9xcdWAMd%2FhB2HFFWbasWqvV39WjVYGDz6pV%2FHqtnXoOSdJYEwPfdtFpehNzQWcaujtP%2BqkIJgGtpw8tlpEfQ45GvVvziA8ShNsWw7IjCVwp3ABjqkAdCOA6ISpaOS8zlEIG5miStdHODu3vFtlfLER8zrwjz2FQFdujEG8vEq4NiAsqDSnzo3whuqKdqI5r1LzLldX5oRqPzvTMIN%2B6CcNpgq7WPbKubhGHFHPTW%2BVZYeHGmHZ8M4CDYVgReyOs4xf%2FhSE%2FLqZ1lO1gmo8POfjobm8sJ05NLplu4vUdKaN61Fs6LKNvlN%2F39iVPKSZXGJDL46QcyEhp%2BY&X-Amz-Signature=7f49de3856e787eb7f2e29340506a8cd70d1fb767d34a6abce57d4db4c5b1443&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

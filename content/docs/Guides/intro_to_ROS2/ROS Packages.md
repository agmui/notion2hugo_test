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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDZ6KKY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdVKe4OgsI838dsBfp40VldJnSXIOYS4AtrEO%2BcpsX3AIgQsVTFHM93ezDLJJ8QGjQYRdvtmCGXbsa48iP4rL8pj8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM5Azuwuorg5bLIKESrcA3arZ1Shdl3jJqW0Ha%2FzhnESDU2PzVW0KJS9MCZlW8ypLkVjUQUR8sV6MWN8znFYKv9TiK5qR88Aj%2FqIO2v7Qmxx89o2XD6RCDkdVqpZMry9YcTC%2Fy2X0iZBlpH%2B%2BCEhSAyqr3z9o1XcGDkTFx5Y%2BJng6kYAaPhKq6PyRJu9n4t0gOBB879mCFIauqb254P283LE1Q8ShE3bXGK%2BW2%2BnI%2Fxmoq25Ctd%2Frk0zQL%2BlaDhherq9Tyy9SdM%2BT5E27hteMF7EyCdXJVE46kvJHoeWQE9sVxKPM16mEOjr2C4nuKANuvPvyK%2FVWjopIiPj5%2FD5a%2FVpfbaGEp2p3L0AdonDUEhwqFlUw0IuGuTc6wytMqfVHQaFtPGuvRjYElFeEPcHgKcwdEJve4oPK6ukMAWvxT32i5XFVfCT%2FGz67t022NUVTOONp4cOc1hCmmmIBDiaA9k3%2FDA%2FTyDhxXGoY3rsAbG5%2F76ZEIfB7UhC95SHLDBRDwwSflcIremgMwpCA9Vsm0BJEdcEAj9vQwqGH4bFhIHy5OuR3TE9kyd89hkblwzjyGabI36HlMCVuNE3iGlg4X%2F5NSX4Ux59yxChqlyENZFyr26jhDcFcm0pFqny35J1T7XbK2zyYQi4wCusMM%2BUtMIGOqUBH0FcsT8gCollSrNLKTfp3Y7On%2F3xFRwWLHitkArgEN512pMPkOb7RO9pnPLn3dAZz9CJT7k4tC%2BgdSDPs%2BLmrYKGGDmTDwvhBiyLgYd9k9DraL2Eg6oA1vrrrQPWOZOcYdTGmlC9OfP6dCj2gy57OTKemEbiQ1zm0fb1ipbmQpdhvkccJs4vKAjwFMrm6G8UxkTh2BUmnidZxIcDfqrxCaL6CptL&X-Amz-Signature=43cf2404fb4179575aa560a185b060afe982903afc6d652c5b5ca3a00eb2cb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDZ6KKY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdVKe4OgsI838dsBfp40VldJnSXIOYS4AtrEO%2BcpsX3AIgQsVTFHM93ezDLJJ8QGjQYRdvtmCGXbsa48iP4rL8pj8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM5Azuwuorg5bLIKESrcA3arZ1Shdl3jJqW0Ha%2FzhnESDU2PzVW0KJS9MCZlW8ypLkVjUQUR8sV6MWN8znFYKv9TiK5qR88Aj%2FqIO2v7Qmxx89o2XD6RCDkdVqpZMry9YcTC%2Fy2X0iZBlpH%2B%2BCEhSAyqr3z9o1XcGDkTFx5Y%2BJng6kYAaPhKq6PyRJu9n4t0gOBB879mCFIauqb254P283LE1Q8ShE3bXGK%2BW2%2BnI%2Fxmoq25Ctd%2Frk0zQL%2BlaDhherq9Tyy9SdM%2BT5E27hteMF7EyCdXJVE46kvJHoeWQE9sVxKPM16mEOjr2C4nuKANuvPvyK%2FVWjopIiPj5%2FD5a%2FVpfbaGEp2p3L0AdonDUEhwqFlUw0IuGuTc6wytMqfVHQaFtPGuvRjYElFeEPcHgKcwdEJve4oPK6ukMAWvxT32i5XFVfCT%2FGz67t022NUVTOONp4cOc1hCmmmIBDiaA9k3%2FDA%2FTyDhxXGoY3rsAbG5%2F76ZEIfB7UhC95SHLDBRDwwSflcIremgMwpCA9Vsm0BJEdcEAj9vQwqGH4bFhIHy5OuR3TE9kyd89hkblwzjyGabI36HlMCVuNE3iGlg4X%2F5NSX4Ux59yxChqlyENZFyr26jhDcFcm0pFqny35J1T7XbK2zyYQi4wCusMM%2BUtMIGOqUBH0FcsT8gCollSrNLKTfp3Y7On%2F3xFRwWLHitkArgEN512pMPkOb7RO9pnPLn3dAZz9CJT7k4tC%2BgdSDPs%2BLmrYKGGDmTDwvhBiyLgYd9k9DraL2Eg6oA1vrrrQPWOZOcYdTGmlC9OfP6dCj2gy57OTKemEbiQ1zm0fb1ipbmQpdhvkccJs4vKAjwFMrm6G8UxkTh2BUmnidZxIcDfqrxCaL6CptL&X-Amz-Signature=0c05631d90fc9836c26667f4af0c9325fc324dff1fc0dbf55cf3d9d4579e6212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDZ6KKY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdVKe4OgsI838dsBfp40VldJnSXIOYS4AtrEO%2BcpsX3AIgQsVTFHM93ezDLJJ8QGjQYRdvtmCGXbsa48iP4rL8pj8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM5Azuwuorg5bLIKESrcA3arZ1Shdl3jJqW0Ha%2FzhnESDU2PzVW0KJS9MCZlW8ypLkVjUQUR8sV6MWN8znFYKv9TiK5qR88Aj%2FqIO2v7Qmxx89o2XD6RCDkdVqpZMry9YcTC%2Fy2X0iZBlpH%2B%2BCEhSAyqr3z9o1XcGDkTFx5Y%2BJng6kYAaPhKq6PyRJu9n4t0gOBB879mCFIauqb254P283LE1Q8ShE3bXGK%2BW2%2BnI%2Fxmoq25Ctd%2Frk0zQL%2BlaDhherq9Tyy9SdM%2BT5E27hteMF7EyCdXJVE46kvJHoeWQE9sVxKPM16mEOjr2C4nuKANuvPvyK%2FVWjopIiPj5%2FD5a%2FVpfbaGEp2p3L0AdonDUEhwqFlUw0IuGuTc6wytMqfVHQaFtPGuvRjYElFeEPcHgKcwdEJve4oPK6ukMAWvxT32i5XFVfCT%2FGz67t022NUVTOONp4cOc1hCmmmIBDiaA9k3%2FDA%2FTyDhxXGoY3rsAbG5%2F76ZEIfB7UhC95SHLDBRDwwSflcIremgMwpCA9Vsm0BJEdcEAj9vQwqGH4bFhIHy5OuR3TE9kyd89hkblwzjyGabI36HlMCVuNE3iGlg4X%2F5NSX4Ux59yxChqlyENZFyr26jhDcFcm0pFqny35J1T7XbK2zyYQi4wCusMM%2BUtMIGOqUBH0FcsT8gCollSrNLKTfp3Y7On%2F3xFRwWLHitkArgEN512pMPkOb7RO9pnPLn3dAZz9CJT7k4tC%2BgdSDPs%2BLmrYKGGDmTDwvhBiyLgYd9k9DraL2Eg6oA1vrrrQPWOZOcYdTGmlC9OfP6dCj2gy57OTKemEbiQ1zm0fb1ipbmQpdhvkccJs4vKAjwFMrm6G8UxkTh2BUmnidZxIcDfqrxCaL6CptL&X-Amz-Signature=1b13f67dad0e325a0af7653b2bd46d8d329367e0ed3dc939defc59e9e5d7930b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDZ6KKY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdVKe4OgsI838dsBfp40VldJnSXIOYS4AtrEO%2BcpsX3AIgQsVTFHM93ezDLJJ8QGjQYRdvtmCGXbsa48iP4rL8pj8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM5Azuwuorg5bLIKESrcA3arZ1Shdl3jJqW0Ha%2FzhnESDU2PzVW0KJS9MCZlW8ypLkVjUQUR8sV6MWN8znFYKv9TiK5qR88Aj%2FqIO2v7Qmxx89o2XD6RCDkdVqpZMry9YcTC%2Fy2X0iZBlpH%2B%2BCEhSAyqr3z9o1XcGDkTFx5Y%2BJng6kYAaPhKq6PyRJu9n4t0gOBB879mCFIauqb254P283LE1Q8ShE3bXGK%2BW2%2BnI%2Fxmoq25Ctd%2Frk0zQL%2BlaDhherq9Tyy9SdM%2BT5E27hteMF7EyCdXJVE46kvJHoeWQE9sVxKPM16mEOjr2C4nuKANuvPvyK%2FVWjopIiPj5%2FD5a%2FVpfbaGEp2p3L0AdonDUEhwqFlUw0IuGuTc6wytMqfVHQaFtPGuvRjYElFeEPcHgKcwdEJve4oPK6ukMAWvxT32i5XFVfCT%2FGz67t022NUVTOONp4cOc1hCmmmIBDiaA9k3%2FDA%2FTyDhxXGoY3rsAbG5%2F76ZEIfB7UhC95SHLDBRDwwSflcIremgMwpCA9Vsm0BJEdcEAj9vQwqGH4bFhIHy5OuR3TE9kyd89hkblwzjyGabI36HlMCVuNE3iGlg4X%2F5NSX4Ux59yxChqlyENZFyr26jhDcFcm0pFqny35J1T7XbK2zyYQi4wCusMM%2BUtMIGOqUBH0FcsT8gCollSrNLKTfp3Y7On%2F3xFRwWLHitkArgEN512pMPkOb7RO9pnPLn3dAZz9CJT7k4tC%2BgdSDPs%2BLmrYKGGDmTDwvhBiyLgYd9k9DraL2Eg6oA1vrrrQPWOZOcYdTGmlC9OfP6dCj2gy57OTKemEbiQ1zm0fb1ipbmQpdhvkccJs4vKAjwFMrm6G8UxkTh2BUmnidZxIcDfqrxCaL6CptL&X-Amz-Signature=7e41554ab12e83d98ee38a446e01688e3ade027eaf159ac2ee8bd2753bd223d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDZ6KKY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdVKe4OgsI838dsBfp40VldJnSXIOYS4AtrEO%2BcpsX3AIgQsVTFHM93ezDLJJ8QGjQYRdvtmCGXbsa48iP4rL8pj8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM5Azuwuorg5bLIKESrcA3arZ1Shdl3jJqW0Ha%2FzhnESDU2PzVW0KJS9MCZlW8ypLkVjUQUR8sV6MWN8znFYKv9TiK5qR88Aj%2FqIO2v7Qmxx89o2XD6RCDkdVqpZMry9YcTC%2Fy2X0iZBlpH%2B%2BCEhSAyqr3z9o1XcGDkTFx5Y%2BJng6kYAaPhKq6PyRJu9n4t0gOBB879mCFIauqb254P283LE1Q8ShE3bXGK%2BW2%2BnI%2Fxmoq25Ctd%2Frk0zQL%2BlaDhherq9Tyy9SdM%2BT5E27hteMF7EyCdXJVE46kvJHoeWQE9sVxKPM16mEOjr2C4nuKANuvPvyK%2FVWjopIiPj5%2FD5a%2FVpfbaGEp2p3L0AdonDUEhwqFlUw0IuGuTc6wytMqfVHQaFtPGuvRjYElFeEPcHgKcwdEJve4oPK6ukMAWvxT32i5XFVfCT%2FGz67t022NUVTOONp4cOc1hCmmmIBDiaA9k3%2FDA%2FTyDhxXGoY3rsAbG5%2F76ZEIfB7UhC95SHLDBRDwwSflcIremgMwpCA9Vsm0BJEdcEAj9vQwqGH4bFhIHy5OuR3TE9kyd89hkblwzjyGabI36HlMCVuNE3iGlg4X%2F5NSX4Ux59yxChqlyENZFyr26jhDcFcm0pFqny35J1T7XbK2zyYQi4wCusMM%2BUtMIGOqUBH0FcsT8gCollSrNLKTfp3Y7On%2F3xFRwWLHitkArgEN512pMPkOb7RO9pnPLn3dAZz9CJT7k4tC%2BgdSDPs%2BLmrYKGGDmTDwvhBiyLgYd9k9DraL2Eg6oA1vrrrQPWOZOcYdTGmlC9OfP6dCj2gy57OTKemEbiQ1zm0fb1ipbmQpdhvkccJs4vKAjwFMrm6G8UxkTh2BUmnidZxIcDfqrxCaL6CptL&X-Amz-Signature=d803c6d05fd863eadc6afb8105e273b382a25327dd25c4d0f647b64686ee3652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDZ6KKY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdVKe4OgsI838dsBfp40VldJnSXIOYS4AtrEO%2BcpsX3AIgQsVTFHM93ezDLJJ8QGjQYRdvtmCGXbsa48iP4rL8pj8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM5Azuwuorg5bLIKESrcA3arZ1Shdl3jJqW0Ha%2FzhnESDU2PzVW0KJS9MCZlW8ypLkVjUQUR8sV6MWN8znFYKv9TiK5qR88Aj%2FqIO2v7Qmxx89o2XD6RCDkdVqpZMry9YcTC%2Fy2X0iZBlpH%2B%2BCEhSAyqr3z9o1XcGDkTFx5Y%2BJng6kYAaPhKq6PyRJu9n4t0gOBB879mCFIauqb254P283LE1Q8ShE3bXGK%2BW2%2BnI%2Fxmoq25Ctd%2Frk0zQL%2BlaDhherq9Tyy9SdM%2BT5E27hteMF7EyCdXJVE46kvJHoeWQE9sVxKPM16mEOjr2C4nuKANuvPvyK%2FVWjopIiPj5%2FD5a%2FVpfbaGEp2p3L0AdonDUEhwqFlUw0IuGuTc6wytMqfVHQaFtPGuvRjYElFeEPcHgKcwdEJve4oPK6ukMAWvxT32i5XFVfCT%2FGz67t022NUVTOONp4cOc1hCmmmIBDiaA9k3%2FDA%2FTyDhxXGoY3rsAbG5%2F76ZEIfB7UhC95SHLDBRDwwSflcIremgMwpCA9Vsm0BJEdcEAj9vQwqGH4bFhIHy5OuR3TE9kyd89hkblwzjyGabI36HlMCVuNE3iGlg4X%2F5NSX4Ux59yxChqlyENZFyr26jhDcFcm0pFqny35J1T7XbK2zyYQi4wCusMM%2BUtMIGOqUBH0FcsT8gCollSrNLKTfp3Y7On%2F3xFRwWLHitkArgEN512pMPkOb7RO9pnPLn3dAZz9CJT7k4tC%2BgdSDPs%2BLmrYKGGDmTDwvhBiyLgYd9k9DraL2Eg6oA1vrrrQPWOZOcYdTGmlC9OfP6dCj2gy57OTKemEbiQ1zm0fb1ipbmQpdhvkccJs4vKAjwFMrm6G8UxkTh2BUmnidZxIcDfqrxCaL6CptL&X-Amz-Signature=1abae68c62a152a18d09aca6670c7db98b4cb0ec0e7d64b8f5f46eafe08d6b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDZ6KKY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdVKe4OgsI838dsBfp40VldJnSXIOYS4AtrEO%2BcpsX3AIgQsVTFHM93ezDLJJ8QGjQYRdvtmCGXbsa48iP4rL8pj8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDM5Azuwuorg5bLIKESrcA3arZ1Shdl3jJqW0Ha%2FzhnESDU2PzVW0KJS9MCZlW8ypLkVjUQUR8sV6MWN8znFYKv9TiK5qR88Aj%2FqIO2v7Qmxx89o2XD6RCDkdVqpZMry9YcTC%2Fy2X0iZBlpH%2B%2BCEhSAyqr3z9o1XcGDkTFx5Y%2BJng6kYAaPhKq6PyRJu9n4t0gOBB879mCFIauqb254P283LE1Q8ShE3bXGK%2BW2%2BnI%2Fxmoq25Ctd%2Frk0zQL%2BlaDhherq9Tyy9SdM%2BT5E27hteMF7EyCdXJVE46kvJHoeWQE9sVxKPM16mEOjr2C4nuKANuvPvyK%2FVWjopIiPj5%2FD5a%2FVpfbaGEp2p3L0AdonDUEhwqFlUw0IuGuTc6wytMqfVHQaFtPGuvRjYElFeEPcHgKcwdEJve4oPK6ukMAWvxT32i5XFVfCT%2FGz67t022NUVTOONp4cOc1hCmmmIBDiaA9k3%2FDA%2FTyDhxXGoY3rsAbG5%2F76ZEIfB7UhC95SHLDBRDwwSflcIremgMwpCA9Vsm0BJEdcEAj9vQwqGH4bFhIHy5OuR3TE9kyd89hkblwzjyGabI36HlMCVuNE3iGlg4X%2F5NSX4Ux59yxChqlyENZFyr26jhDcFcm0pFqny35J1T7XbK2zyYQi4wCusMM%2BUtMIGOqUBH0FcsT8gCollSrNLKTfp3Y7On%2F3xFRwWLHitkArgEN512pMPkOb7RO9pnPLn3dAZz9CJT7k4tC%2BgdSDPs%2BLmrYKGGDmTDwvhBiyLgYd9k9DraL2Eg6oA1vrrrQPWOZOcYdTGmlC9OfP6dCj2gy57OTKemEbiQ1zm0fb1ipbmQpdhvkccJs4vKAjwFMrm6G8UxkTh2BUmnidZxIcDfqrxCaL6CptL&X-Amz-Signature=b72ca5b9cdc5eed66e2364db49834ddd4cfd912c5748266e215a7b7dbf7c1522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

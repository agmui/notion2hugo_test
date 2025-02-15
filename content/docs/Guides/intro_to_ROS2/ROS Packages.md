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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGXBLUN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEzCNmejUkNZANXCii78vW0mRFVgFWCXSzONcOiSYkV9AiEA6IdVy%2FTGxMi1NFMpvMEbg78rm0i8rSqblgwpVQSZ8G0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLDEH0Xg%2BxuDr8stKSrcA2k%2Faae3ZxGx%2FaFtbLjwlxb8Bp0ibGzbsNKGLNR9%2BwMbTPv%2FJ0M%2BsaUmQR2avNPPpNGWf7q0pyK55HsrAcrOLlDj%2FdLncwvQ944h28wwltfCCNbq2Rd7fiNpSc4F6z3dRcaoTLlS%2FPCOQzKHpWcyy33pVOgtt2gn9cW0U1H0wqrg70WCq0og%2B5qQ0Rd6bpvhd0e5QQHxWK%2FQS0tCKzTgTqmIyN0K%2BTJ8ouI5bhA4iEtcE7pjh%2BcylBUFewOnjU1q09RmymGYiVrQxJuoRPZ440X%2FQvc3MzXrJiollIWzWx489uDkLWW7nyLq%2FUmsEowjrFpWf6i0vZXyRVCpjv32nQ8PCZCLX0bRRkIIzPwYSqj3W4GnmEFrJy3176yEXcl%2Fi0c3Z5OhQYwUnd9smT5YBOzZk0nr%2FBiRpEoKjOGqsdpvWIzvZ2RRRz4y9h7j7V3XENVZ%2F3Fbxgyp4jifHqKOoIFOgEDA7DmeKD8IcrXUpr%2BtdFUkN%2Bj6lg%2FZVrk4ZVUF7pkkphCPMbdP9Zkt3zbRXks08IRshqHUanTTCQqxo2DgFb6dIQDXFiqvXA7CJRzLe2K2H7cQFOAKRta5Sa3ZXARwvNfIkGm2JAV6R9hFPZD1IPa1Lt3uFpHDlSrtMLi%2Bwb0GOqUBAGcItY9C%2FikxwuZWtPaMp1taFo0oHLyVC7qAT4f2hyL78pZbXAbme%2FjQWSQ5JG171FQoxLVsmAdSxC69Yc9vE%2F3pE6MbSE7h0igfKppVdFqaeeCWCJNp7ipwnqfdlFjspsQ2iy0dxPWA7GrpSIER%2BO20ze6%2BI7OnX3JjOw%2BXsWAVbOEAMYzfFZ0Gb3PYY9sP4SBlhWyzEuGrfyt7Q%2BGb7hbMYj%2FV&X-Amz-Signature=a180946e49c780a71e05cffb6b4f7ee25480041d6dbb887b4b905039a9b97196&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGXBLUN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEzCNmejUkNZANXCii78vW0mRFVgFWCXSzONcOiSYkV9AiEA6IdVy%2FTGxMi1NFMpvMEbg78rm0i8rSqblgwpVQSZ8G0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLDEH0Xg%2BxuDr8stKSrcA2k%2Faae3ZxGx%2FaFtbLjwlxb8Bp0ibGzbsNKGLNR9%2BwMbTPv%2FJ0M%2BsaUmQR2avNPPpNGWf7q0pyK55HsrAcrOLlDj%2FdLncwvQ944h28wwltfCCNbq2Rd7fiNpSc4F6z3dRcaoTLlS%2FPCOQzKHpWcyy33pVOgtt2gn9cW0U1H0wqrg70WCq0og%2B5qQ0Rd6bpvhd0e5QQHxWK%2FQS0tCKzTgTqmIyN0K%2BTJ8ouI5bhA4iEtcE7pjh%2BcylBUFewOnjU1q09RmymGYiVrQxJuoRPZ440X%2FQvc3MzXrJiollIWzWx489uDkLWW7nyLq%2FUmsEowjrFpWf6i0vZXyRVCpjv32nQ8PCZCLX0bRRkIIzPwYSqj3W4GnmEFrJy3176yEXcl%2Fi0c3Z5OhQYwUnd9smT5YBOzZk0nr%2FBiRpEoKjOGqsdpvWIzvZ2RRRz4y9h7j7V3XENVZ%2F3Fbxgyp4jifHqKOoIFOgEDA7DmeKD8IcrXUpr%2BtdFUkN%2Bj6lg%2FZVrk4ZVUF7pkkphCPMbdP9Zkt3zbRXks08IRshqHUanTTCQqxo2DgFb6dIQDXFiqvXA7CJRzLe2K2H7cQFOAKRta5Sa3ZXARwvNfIkGm2JAV6R9hFPZD1IPa1Lt3uFpHDlSrtMLi%2Bwb0GOqUBAGcItY9C%2FikxwuZWtPaMp1taFo0oHLyVC7qAT4f2hyL78pZbXAbme%2FjQWSQ5JG171FQoxLVsmAdSxC69Yc9vE%2F3pE6MbSE7h0igfKppVdFqaeeCWCJNp7ipwnqfdlFjspsQ2iy0dxPWA7GrpSIER%2BO20ze6%2BI7OnX3JjOw%2BXsWAVbOEAMYzfFZ0Gb3PYY9sP4SBlhWyzEuGrfyt7Q%2BGb7hbMYj%2FV&X-Amz-Signature=1c34c38b48e296607efc88a125ba95d824285cc8d993029e8cb3d8900b8378a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGXBLUN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEzCNmejUkNZANXCii78vW0mRFVgFWCXSzONcOiSYkV9AiEA6IdVy%2FTGxMi1NFMpvMEbg78rm0i8rSqblgwpVQSZ8G0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLDEH0Xg%2BxuDr8stKSrcA2k%2Faae3ZxGx%2FaFtbLjwlxb8Bp0ibGzbsNKGLNR9%2BwMbTPv%2FJ0M%2BsaUmQR2avNPPpNGWf7q0pyK55HsrAcrOLlDj%2FdLncwvQ944h28wwltfCCNbq2Rd7fiNpSc4F6z3dRcaoTLlS%2FPCOQzKHpWcyy33pVOgtt2gn9cW0U1H0wqrg70WCq0og%2B5qQ0Rd6bpvhd0e5QQHxWK%2FQS0tCKzTgTqmIyN0K%2BTJ8ouI5bhA4iEtcE7pjh%2BcylBUFewOnjU1q09RmymGYiVrQxJuoRPZ440X%2FQvc3MzXrJiollIWzWx489uDkLWW7nyLq%2FUmsEowjrFpWf6i0vZXyRVCpjv32nQ8PCZCLX0bRRkIIzPwYSqj3W4GnmEFrJy3176yEXcl%2Fi0c3Z5OhQYwUnd9smT5YBOzZk0nr%2FBiRpEoKjOGqsdpvWIzvZ2RRRz4y9h7j7V3XENVZ%2F3Fbxgyp4jifHqKOoIFOgEDA7DmeKD8IcrXUpr%2BtdFUkN%2Bj6lg%2FZVrk4ZVUF7pkkphCPMbdP9Zkt3zbRXks08IRshqHUanTTCQqxo2DgFb6dIQDXFiqvXA7CJRzLe2K2H7cQFOAKRta5Sa3ZXARwvNfIkGm2JAV6R9hFPZD1IPa1Lt3uFpHDlSrtMLi%2Bwb0GOqUBAGcItY9C%2FikxwuZWtPaMp1taFo0oHLyVC7qAT4f2hyL78pZbXAbme%2FjQWSQ5JG171FQoxLVsmAdSxC69Yc9vE%2F3pE6MbSE7h0igfKppVdFqaeeCWCJNp7ipwnqfdlFjspsQ2iy0dxPWA7GrpSIER%2BO20ze6%2BI7OnX3JjOw%2BXsWAVbOEAMYzfFZ0Gb3PYY9sP4SBlhWyzEuGrfyt7Q%2BGb7hbMYj%2FV&X-Amz-Signature=f199172a4e02f9d863a04c2d82ecbfeb732a7f29b7e20ec78dce19ef48535953&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGXBLUN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEzCNmejUkNZANXCii78vW0mRFVgFWCXSzONcOiSYkV9AiEA6IdVy%2FTGxMi1NFMpvMEbg78rm0i8rSqblgwpVQSZ8G0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLDEH0Xg%2BxuDr8stKSrcA2k%2Faae3ZxGx%2FaFtbLjwlxb8Bp0ibGzbsNKGLNR9%2BwMbTPv%2FJ0M%2BsaUmQR2avNPPpNGWf7q0pyK55HsrAcrOLlDj%2FdLncwvQ944h28wwltfCCNbq2Rd7fiNpSc4F6z3dRcaoTLlS%2FPCOQzKHpWcyy33pVOgtt2gn9cW0U1H0wqrg70WCq0og%2B5qQ0Rd6bpvhd0e5QQHxWK%2FQS0tCKzTgTqmIyN0K%2BTJ8ouI5bhA4iEtcE7pjh%2BcylBUFewOnjU1q09RmymGYiVrQxJuoRPZ440X%2FQvc3MzXrJiollIWzWx489uDkLWW7nyLq%2FUmsEowjrFpWf6i0vZXyRVCpjv32nQ8PCZCLX0bRRkIIzPwYSqj3W4GnmEFrJy3176yEXcl%2Fi0c3Z5OhQYwUnd9smT5YBOzZk0nr%2FBiRpEoKjOGqsdpvWIzvZ2RRRz4y9h7j7V3XENVZ%2F3Fbxgyp4jifHqKOoIFOgEDA7DmeKD8IcrXUpr%2BtdFUkN%2Bj6lg%2FZVrk4ZVUF7pkkphCPMbdP9Zkt3zbRXks08IRshqHUanTTCQqxo2DgFb6dIQDXFiqvXA7CJRzLe2K2H7cQFOAKRta5Sa3ZXARwvNfIkGm2JAV6R9hFPZD1IPa1Lt3uFpHDlSrtMLi%2Bwb0GOqUBAGcItY9C%2FikxwuZWtPaMp1taFo0oHLyVC7qAT4f2hyL78pZbXAbme%2FjQWSQ5JG171FQoxLVsmAdSxC69Yc9vE%2F3pE6MbSE7h0igfKppVdFqaeeCWCJNp7ipwnqfdlFjspsQ2iy0dxPWA7GrpSIER%2BO20ze6%2BI7OnX3JjOw%2BXsWAVbOEAMYzfFZ0Gb3PYY9sP4SBlhWyzEuGrfyt7Q%2BGb7hbMYj%2FV&X-Amz-Signature=10763c8b28dbd8938de4a8eddfccfd5f4ce1176c659204c773a62f9de47a1ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGXBLUN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEzCNmejUkNZANXCii78vW0mRFVgFWCXSzONcOiSYkV9AiEA6IdVy%2FTGxMi1NFMpvMEbg78rm0i8rSqblgwpVQSZ8G0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLDEH0Xg%2BxuDr8stKSrcA2k%2Faae3ZxGx%2FaFtbLjwlxb8Bp0ibGzbsNKGLNR9%2BwMbTPv%2FJ0M%2BsaUmQR2avNPPpNGWf7q0pyK55HsrAcrOLlDj%2FdLncwvQ944h28wwltfCCNbq2Rd7fiNpSc4F6z3dRcaoTLlS%2FPCOQzKHpWcyy33pVOgtt2gn9cW0U1H0wqrg70WCq0og%2B5qQ0Rd6bpvhd0e5QQHxWK%2FQS0tCKzTgTqmIyN0K%2BTJ8ouI5bhA4iEtcE7pjh%2BcylBUFewOnjU1q09RmymGYiVrQxJuoRPZ440X%2FQvc3MzXrJiollIWzWx489uDkLWW7nyLq%2FUmsEowjrFpWf6i0vZXyRVCpjv32nQ8PCZCLX0bRRkIIzPwYSqj3W4GnmEFrJy3176yEXcl%2Fi0c3Z5OhQYwUnd9smT5YBOzZk0nr%2FBiRpEoKjOGqsdpvWIzvZ2RRRz4y9h7j7V3XENVZ%2F3Fbxgyp4jifHqKOoIFOgEDA7DmeKD8IcrXUpr%2BtdFUkN%2Bj6lg%2FZVrk4ZVUF7pkkphCPMbdP9Zkt3zbRXks08IRshqHUanTTCQqxo2DgFb6dIQDXFiqvXA7CJRzLe2K2H7cQFOAKRta5Sa3ZXARwvNfIkGm2JAV6R9hFPZD1IPa1Lt3uFpHDlSrtMLi%2Bwb0GOqUBAGcItY9C%2FikxwuZWtPaMp1taFo0oHLyVC7qAT4f2hyL78pZbXAbme%2FjQWSQ5JG171FQoxLVsmAdSxC69Yc9vE%2F3pE6MbSE7h0igfKppVdFqaeeCWCJNp7ipwnqfdlFjspsQ2iy0dxPWA7GrpSIER%2BO20ze6%2BI7OnX3JjOw%2BXsWAVbOEAMYzfFZ0Gb3PYY9sP4SBlhWyzEuGrfyt7Q%2BGb7hbMYj%2FV&X-Amz-Signature=fcd36a08fe732af9e1ffa161f8a03d3feedd1a972195dedbee4b70465bb48c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGXBLUN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEzCNmejUkNZANXCii78vW0mRFVgFWCXSzONcOiSYkV9AiEA6IdVy%2FTGxMi1NFMpvMEbg78rm0i8rSqblgwpVQSZ8G0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLDEH0Xg%2BxuDr8stKSrcA2k%2Faae3ZxGx%2FaFtbLjwlxb8Bp0ibGzbsNKGLNR9%2BwMbTPv%2FJ0M%2BsaUmQR2avNPPpNGWf7q0pyK55HsrAcrOLlDj%2FdLncwvQ944h28wwltfCCNbq2Rd7fiNpSc4F6z3dRcaoTLlS%2FPCOQzKHpWcyy33pVOgtt2gn9cW0U1H0wqrg70WCq0og%2B5qQ0Rd6bpvhd0e5QQHxWK%2FQS0tCKzTgTqmIyN0K%2BTJ8ouI5bhA4iEtcE7pjh%2BcylBUFewOnjU1q09RmymGYiVrQxJuoRPZ440X%2FQvc3MzXrJiollIWzWx489uDkLWW7nyLq%2FUmsEowjrFpWf6i0vZXyRVCpjv32nQ8PCZCLX0bRRkIIzPwYSqj3W4GnmEFrJy3176yEXcl%2Fi0c3Z5OhQYwUnd9smT5YBOzZk0nr%2FBiRpEoKjOGqsdpvWIzvZ2RRRz4y9h7j7V3XENVZ%2F3Fbxgyp4jifHqKOoIFOgEDA7DmeKD8IcrXUpr%2BtdFUkN%2Bj6lg%2FZVrk4ZVUF7pkkphCPMbdP9Zkt3zbRXks08IRshqHUanTTCQqxo2DgFb6dIQDXFiqvXA7CJRzLe2K2H7cQFOAKRta5Sa3ZXARwvNfIkGm2JAV6R9hFPZD1IPa1Lt3uFpHDlSrtMLi%2Bwb0GOqUBAGcItY9C%2FikxwuZWtPaMp1taFo0oHLyVC7qAT4f2hyL78pZbXAbme%2FjQWSQ5JG171FQoxLVsmAdSxC69Yc9vE%2F3pE6MbSE7h0igfKppVdFqaeeCWCJNp7ipwnqfdlFjspsQ2iy0dxPWA7GrpSIER%2BO20ze6%2BI7OnX3JjOw%2BXsWAVbOEAMYzfFZ0Gb3PYY9sP4SBlhWyzEuGrfyt7Q%2BGb7hbMYj%2FV&X-Amz-Signature=51f955c2ec1906a4a27c9222184df061df8fcbeb3615340859daa395bf7f1ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGXBLUN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEzCNmejUkNZANXCii78vW0mRFVgFWCXSzONcOiSYkV9AiEA6IdVy%2FTGxMi1NFMpvMEbg78rm0i8rSqblgwpVQSZ8G0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLDEH0Xg%2BxuDr8stKSrcA2k%2Faae3ZxGx%2FaFtbLjwlxb8Bp0ibGzbsNKGLNR9%2BwMbTPv%2FJ0M%2BsaUmQR2avNPPpNGWf7q0pyK55HsrAcrOLlDj%2FdLncwvQ944h28wwltfCCNbq2Rd7fiNpSc4F6z3dRcaoTLlS%2FPCOQzKHpWcyy33pVOgtt2gn9cW0U1H0wqrg70WCq0og%2B5qQ0Rd6bpvhd0e5QQHxWK%2FQS0tCKzTgTqmIyN0K%2BTJ8ouI5bhA4iEtcE7pjh%2BcylBUFewOnjU1q09RmymGYiVrQxJuoRPZ440X%2FQvc3MzXrJiollIWzWx489uDkLWW7nyLq%2FUmsEowjrFpWf6i0vZXyRVCpjv32nQ8PCZCLX0bRRkIIzPwYSqj3W4GnmEFrJy3176yEXcl%2Fi0c3Z5OhQYwUnd9smT5YBOzZk0nr%2FBiRpEoKjOGqsdpvWIzvZ2RRRz4y9h7j7V3XENVZ%2F3Fbxgyp4jifHqKOoIFOgEDA7DmeKD8IcrXUpr%2BtdFUkN%2Bj6lg%2FZVrk4ZVUF7pkkphCPMbdP9Zkt3zbRXks08IRshqHUanTTCQqxo2DgFb6dIQDXFiqvXA7CJRzLe2K2H7cQFOAKRta5Sa3ZXARwvNfIkGm2JAV6R9hFPZD1IPa1Lt3uFpHDlSrtMLi%2Bwb0GOqUBAGcItY9C%2FikxwuZWtPaMp1taFo0oHLyVC7qAT4f2hyL78pZbXAbme%2FjQWSQ5JG171FQoxLVsmAdSxC69Yc9vE%2F3pE6MbSE7h0igfKppVdFqaeeCWCJNp7ipwnqfdlFjspsQ2iy0dxPWA7GrpSIER%2BO20ze6%2BI7OnX3JjOw%2BXsWAVbOEAMYzfFZ0Gb3PYY9sP4SBlhWyzEuGrfyt7Q%2BGb7hbMYj%2FV&X-Amz-Signature=9be8955632313af96e8488a2bf19a6bcf24edf177179c600224e1b1dd90a2606&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

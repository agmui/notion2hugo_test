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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5D6RCE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0JW8wDe11MyIxneFYk%2BqemXVxmtmabfdXs6Q6RmNsrgIgTyRKrih1AIrwYmtSopu31kweDbnP9Uwwu2JexxcfETUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrKbJN3DuUOEuGtFSrcA6D2q5JBc1BJaW8ZtlceBN3XFzHNW89PMa5WiSLzy5YJEEqOMlHzoevTNQSfIzH4Lh8vV7Mby%2BqVu%2Bgp%2BcqgsQW4cWvijLjbGYoPjMQ7JKc%2BFonCK8HX3KUsvGgNOtipGLWl8PWgbGd8Nf9%2F2gmjljpeExQQXHctnPqKlKYuXmwdYAgn5x5FcCyMHMsDARU3zmgwR%2FRLtt9yTYpUmlbm3uCm1zKBMRJdoSXF4UO%2BnyNqpPT9cTK0zQOSS2vINRdu%2FuXUetofTSmhCBKNQFEW%2B%2FutumAWn8yOuynaJwdr3CbYPBOOFYRMhWqMG6md6Rpq191rD4xHA51qQ0gsxJu53BKrC2hbPnaJsikp4g6kzgY7GIkljAbq1FaTKzvCRn25kDbIgdiu9skxeGZLL2ghZSNuhWU7g0Z3n5v9Wii9o968HiM%2BfmApLjjwfq0tptQ8rbHhIwnjqKDKMhYVqobEMd%2FSUPpEvavUa6San5oTjbIp5attlVR9B08CPu%2FonMx65Jsy8t8apEy1SXwrGXv8Abq95%2FgrVAmrPc6le154SlFImOby6Y0pbH5zRLX8pX7exiE7FeLz7XhgGv47%2BW49gjBpMfCSh5KOdRaEMxa%2BRXgki03TgXpm5mCrOaOsMJTg2r0GOqUBEi5BJEikGQB5xYcxCrKsnp1LH1RhMUIewtbTKJvaezld0b9tmR0vX3ZrhNUHw5SvYOxsxmE%2FiAN%2BWI7NzhS45uvPH4lQ9qDTSjlkyPwpwqGUayf1gDx1P2pQ1yIMRVzfEy5QQPMexQCU7i4yBepuThzwI%2B2BVZw6ILPj%2FhGrOBWZdjk8yBreiLuCRYfz4kDnzeSg85n9kcg%2FWGxE4N2giXofb1Gx&X-Amz-Signature=6c3996629c9db957c1abb4b722f6fe2eebe8b7fa9ff16b9b8a10118593616cad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5D6RCE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0JW8wDe11MyIxneFYk%2BqemXVxmtmabfdXs6Q6RmNsrgIgTyRKrih1AIrwYmtSopu31kweDbnP9Uwwu2JexxcfETUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrKbJN3DuUOEuGtFSrcA6D2q5JBc1BJaW8ZtlceBN3XFzHNW89PMa5WiSLzy5YJEEqOMlHzoevTNQSfIzH4Lh8vV7Mby%2BqVu%2Bgp%2BcqgsQW4cWvijLjbGYoPjMQ7JKc%2BFonCK8HX3KUsvGgNOtipGLWl8PWgbGd8Nf9%2F2gmjljpeExQQXHctnPqKlKYuXmwdYAgn5x5FcCyMHMsDARU3zmgwR%2FRLtt9yTYpUmlbm3uCm1zKBMRJdoSXF4UO%2BnyNqpPT9cTK0zQOSS2vINRdu%2FuXUetofTSmhCBKNQFEW%2B%2FutumAWn8yOuynaJwdr3CbYPBOOFYRMhWqMG6md6Rpq191rD4xHA51qQ0gsxJu53BKrC2hbPnaJsikp4g6kzgY7GIkljAbq1FaTKzvCRn25kDbIgdiu9skxeGZLL2ghZSNuhWU7g0Z3n5v9Wii9o968HiM%2BfmApLjjwfq0tptQ8rbHhIwnjqKDKMhYVqobEMd%2FSUPpEvavUa6San5oTjbIp5attlVR9B08CPu%2FonMx65Jsy8t8apEy1SXwrGXv8Abq95%2FgrVAmrPc6le154SlFImOby6Y0pbH5zRLX8pX7exiE7FeLz7XhgGv47%2BW49gjBpMfCSh5KOdRaEMxa%2BRXgki03TgXpm5mCrOaOsMJTg2r0GOqUBEi5BJEikGQB5xYcxCrKsnp1LH1RhMUIewtbTKJvaezld0b9tmR0vX3ZrhNUHw5SvYOxsxmE%2FiAN%2BWI7NzhS45uvPH4lQ9qDTSjlkyPwpwqGUayf1gDx1P2pQ1yIMRVzfEy5QQPMexQCU7i4yBepuThzwI%2B2BVZw6ILPj%2FhGrOBWZdjk8yBreiLuCRYfz4kDnzeSg85n9kcg%2FWGxE4N2giXofb1Gx&X-Amz-Signature=d926a6fa1baa2caadec6bc406104bca97be0b0e3daafe804a88b1900ffc91c89&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5D6RCE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0JW8wDe11MyIxneFYk%2BqemXVxmtmabfdXs6Q6RmNsrgIgTyRKrih1AIrwYmtSopu31kweDbnP9Uwwu2JexxcfETUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrKbJN3DuUOEuGtFSrcA6D2q5JBc1BJaW8ZtlceBN3XFzHNW89PMa5WiSLzy5YJEEqOMlHzoevTNQSfIzH4Lh8vV7Mby%2BqVu%2Bgp%2BcqgsQW4cWvijLjbGYoPjMQ7JKc%2BFonCK8HX3KUsvGgNOtipGLWl8PWgbGd8Nf9%2F2gmjljpeExQQXHctnPqKlKYuXmwdYAgn5x5FcCyMHMsDARU3zmgwR%2FRLtt9yTYpUmlbm3uCm1zKBMRJdoSXF4UO%2BnyNqpPT9cTK0zQOSS2vINRdu%2FuXUetofTSmhCBKNQFEW%2B%2FutumAWn8yOuynaJwdr3CbYPBOOFYRMhWqMG6md6Rpq191rD4xHA51qQ0gsxJu53BKrC2hbPnaJsikp4g6kzgY7GIkljAbq1FaTKzvCRn25kDbIgdiu9skxeGZLL2ghZSNuhWU7g0Z3n5v9Wii9o968HiM%2BfmApLjjwfq0tptQ8rbHhIwnjqKDKMhYVqobEMd%2FSUPpEvavUa6San5oTjbIp5attlVR9B08CPu%2FonMx65Jsy8t8apEy1SXwrGXv8Abq95%2FgrVAmrPc6le154SlFImOby6Y0pbH5zRLX8pX7exiE7FeLz7XhgGv47%2BW49gjBpMfCSh5KOdRaEMxa%2BRXgki03TgXpm5mCrOaOsMJTg2r0GOqUBEi5BJEikGQB5xYcxCrKsnp1LH1RhMUIewtbTKJvaezld0b9tmR0vX3ZrhNUHw5SvYOxsxmE%2FiAN%2BWI7NzhS45uvPH4lQ9qDTSjlkyPwpwqGUayf1gDx1P2pQ1yIMRVzfEy5QQPMexQCU7i4yBepuThzwI%2B2BVZw6ILPj%2FhGrOBWZdjk8yBreiLuCRYfz4kDnzeSg85n9kcg%2FWGxE4N2giXofb1Gx&X-Amz-Signature=2b98af028fab6cb6e85cbb899ee1220d0c0b1415a7a981d902ec6f67f5229636&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5D6RCE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0JW8wDe11MyIxneFYk%2BqemXVxmtmabfdXs6Q6RmNsrgIgTyRKrih1AIrwYmtSopu31kweDbnP9Uwwu2JexxcfETUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrKbJN3DuUOEuGtFSrcA6D2q5JBc1BJaW8ZtlceBN3XFzHNW89PMa5WiSLzy5YJEEqOMlHzoevTNQSfIzH4Lh8vV7Mby%2BqVu%2Bgp%2BcqgsQW4cWvijLjbGYoPjMQ7JKc%2BFonCK8HX3KUsvGgNOtipGLWl8PWgbGd8Nf9%2F2gmjljpeExQQXHctnPqKlKYuXmwdYAgn5x5FcCyMHMsDARU3zmgwR%2FRLtt9yTYpUmlbm3uCm1zKBMRJdoSXF4UO%2BnyNqpPT9cTK0zQOSS2vINRdu%2FuXUetofTSmhCBKNQFEW%2B%2FutumAWn8yOuynaJwdr3CbYPBOOFYRMhWqMG6md6Rpq191rD4xHA51qQ0gsxJu53BKrC2hbPnaJsikp4g6kzgY7GIkljAbq1FaTKzvCRn25kDbIgdiu9skxeGZLL2ghZSNuhWU7g0Z3n5v9Wii9o968HiM%2BfmApLjjwfq0tptQ8rbHhIwnjqKDKMhYVqobEMd%2FSUPpEvavUa6San5oTjbIp5attlVR9B08CPu%2FonMx65Jsy8t8apEy1SXwrGXv8Abq95%2FgrVAmrPc6le154SlFImOby6Y0pbH5zRLX8pX7exiE7FeLz7XhgGv47%2BW49gjBpMfCSh5KOdRaEMxa%2BRXgki03TgXpm5mCrOaOsMJTg2r0GOqUBEi5BJEikGQB5xYcxCrKsnp1LH1RhMUIewtbTKJvaezld0b9tmR0vX3ZrhNUHw5SvYOxsxmE%2FiAN%2BWI7NzhS45uvPH4lQ9qDTSjlkyPwpwqGUayf1gDx1P2pQ1yIMRVzfEy5QQPMexQCU7i4yBepuThzwI%2B2BVZw6ILPj%2FhGrOBWZdjk8yBreiLuCRYfz4kDnzeSg85n9kcg%2FWGxE4N2giXofb1Gx&X-Amz-Signature=27e389152060b4946c1864a3c7f3fe413a1753b45b68a9de6c23a4abadedd790&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5D6RCE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0JW8wDe11MyIxneFYk%2BqemXVxmtmabfdXs6Q6RmNsrgIgTyRKrih1AIrwYmtSopu31kweDbnP9Uwwu2JexxcfETUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrKbJN3DuUOEuGtFSrcA6D2q5JBc1BJaW8ZtlceBN3XFzHNW89PMa5WiSLzy5YJEEqOMlHzoevTNQSfIzH4Lh8vV7Mby%2BqVu%2Bgp%2BcqgsQW4cWvijLjbGYoPjMQ7JKc%2BFonCK8HX3KUsvGgNOtipGLWl8PWgbGd8Nf9%2F2gmjljpeExQQXHctnPqKlKYuXmwdYAgn5x5FcCyMHMsDARU3zmgwR%2FRLtt9yTYpUmlbm3uCm1zKBMRJdoSXF4UO%2BnyNqpPT9cTK0zQOSS2vINRdu%2FuXUetofTSmhCBKNQFEW%2B%2FutumAWn8yOuynaJwdr3CbYPBOOFYRMhWqMG6md6Rpq191rD4xHA51qQ0gsxJu53BKrC2hbPnaJsikp4g6kzgY7GIkljAbq1FaTKzvCRn25kDbIgdiu9skxeGZLL2ghZSNuhWU7g0Z3n5v9Wii9o968HiM%2BfmApLjjwfq0tptQ8rbHhIwnjqKDKMhYVqobEMd%2FSUPpEvavUa6San5oTjbIp5attlVR9B08CPu%2FonMx65Jsy8t8apEy1SXwrGXv8Abq95%2FgrVAmrPc6le154SlFImOby6Y0pbH5zRLX8pX7exiE7FeLz7XhgGv47%2BW49gjBpMfCSh5KOdRaEMxa%2BRXgki03TgXpm5mCrOaOsMJTg2r0GOqUBEi5BJEikGQB5xYcxCrKsnp1LH1RhMUIewtbTKJvaezld0b9tmR0vX3ZrhNUHw5SvYOxsxmE%2FiAN%2BWI7NzhS45uvPH4lQ9qDTSjlkyPwpwqGUayf1gDx1P2pQ1yIMRVzfEy5QQPMexQCU7i4yBepuThzwI%2B2BVZw6ILPj%2FhGrOBWZdjk8yBreiLuCRYfz4kDnzeSg85n9kcg%2FWGxE4N2giXofb1Gx&X-Amz-Signature=4d22aa45144847567d7e969b21387d72c2d47e8540444e0a700b3ed43c70112e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5D6RCE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0JW8wDe11MyIxneFYk%2BqemXVxmtmabfdXs6Q6RmNsrgIgTyRKrih1AIrwYmtSopu31kweDbnP9Uwwu2JexxcfETUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrKbJN3DuUOEuGtFSrcA6D2q5JBc1BJaW8ZtlceBN3XFzHNW89PMa5WiSLzy5YJEEqOMlHzoevTNQSfIzH4Lh8vV7Mby%2BqVu%2Bgp%2BcqgsQW4cWvijLjbGYoPjMQ7JKc%2BFonCK8HX3KUsvGgNOtipGLWl8PWgbGd8Nf9%2F2gmjljpeExQQXHctnPqKlKYuXmwdYAgn5x5FcCyMHMsDARU3zmgwR%2FRLtt9yTYpUmlbm3uCm1zKBMRJdoSXF4UO%2BnyNqpPT9cTK0zQOSS2vINRdu%2FuXUetofTSmhCBKNQFEW%2B%2FutumAWn8yOuynaJwdr3CbYPBOOFYRMhWqMG6md6Rpq191rD4xHA51qQ0gsxJu53BKrC2hbPnaJsikp4g6kzgY7GIkljAbq1FaTKzvCRn25kDbIgdiu9skxeGZLL2ghZSNuhWU7g0Z3n5v9Wii9o968HiM%2BfmApLjjwfq0tptQ8rbHhIwnjqKDKMhYVqobEMd%2FSUPpEvavUa6San5oTjbIp5attlVR9B08CPu%2FonMx65Jsy8t8apEy1SXwrGXv8Abq95%2FgrVAmrPc6le154SlFImOby6Y0pbH5zRLX8pX7exiE7FeLz7XhgGv47%2BW49gjBpMfCSh5KOdRaEMxa%2BRXgki03TgXpm5mCrOaOsMJTg2r0GOqUBEi5BJEikGQB5xYcxCrKsnp1LH1RhMUIewtbTKJvaezld0b9tmR0vX3ZrhNUHw5SvYOxsxmE%2FiAN%2BWI7NzhS45uvPH4lQ9qDTSjlkyPwpwqGUayf1gDx1P2pQ1yIMRVzfEy5QQPMexQCU7i4yBepuThzwI%2B2BVZw6ILPj%2FhGrOBWZdjk8yBreiLuCRYfz4kDnzeSg85n9kcg%2FWGxE4N2giXofb1Gx&X-Amz-Signature=db0ca9d9857d3cd15074c10150e86e65606acf155d93407596fd7df07144c26a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5D6RCE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0JW8wDe11MyIxneFYk%2BqemXVxmtmabfdXs6Q6RmNsrgIgTyRKrih1AIrwYmtSopu31kweDbnP9Uwwu2JexxcfETUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrKbJN3DuUOEuGtFSrcA6D2q5JBc1BJaW8ZtlceBN3XFzHNW89PMa5WiSLzy5YJEEqOMlHzoevTNQSfIzH4Lh8vV7Mby%2BqVu%2Bgp%2BcqgsQW4cWvijLjbGYoPjMQ7JKc%2BFonCK8HX3KUsvGgNOtipGLWl8PWgbGd8Nf9%2F2gmjljpeExQQXHctnPqKlKYuXmwdYAgn5x5FcCyMHMsDARU3zmgwR%2FRLtt9yTYpUmlbm3uCm1zKBMRJdoSXF4UO%2BnyNqpPT9cTK0zQOSS2vINRdu%2FuXUetofTSmhCBKNQFEW%2B%2FutumAWn8yOuynaJwdr3CbYPBOOFYRMhWqMG6md6Rpq191rD4xHA51qQ0gsxJu53BKrC2hbPnaJsikp4g6kzgY7GIkljAbq1FaTKzvCRn25kDbIgdiu9skxeGZLL2ghZSNuhWU7g0Z3n5v9Wii9o968HiM%2BfmApLjjwfq0tptQ8rbHhIwnjqKDKMhYVqobEMd%2FSUPpEvavUa6San5oTjbIp5attlVR9B08CPu%2FonMx65Jsy8t8apEy1SXwrGXv8Abq95%2FgrVAmrPc6le154SlFImOby6Y0pbH5zRLX8pX7exiE7FeLz7XhgGv47%2BW49gjBpMfCSh5KOdRaEMxa%2BRXgki03TgXpm5mCrOaOsMJTg2r0GOqUBEi5BJEikGQB5xYcxCrKsnp1LH1RhMUIewtbTKJvaezld0b9tmR0vX3ZrhNUHw5SvYOxsxmE%2FiAN%2BWI7NzhS45uvPH4lQ9qDTSjlkyPwpwqGUayf1gDx1P2pQ1yIMRVzfEy5QQPMexQCU7i4yBepuThzwI%2B2BVZw6ILPj%2FhGrOBWZdjk8yBreiLuCRYfz4kDnzeSg85n9kcg%2FWGxE4N2giXofb1Gx&X-Amz-Signature=713bdfe1c67c804eb4f40586a9add5cc31dd88f9e2b11a192430fe98b08e7aff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

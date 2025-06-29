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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYGGRSV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTj0hrINFN79ujGaLSSN6JGr9PCDhkM8tjgEBuHqVE%2FQIhALKE3hooKIQpBzMlVWDym9YBLGnxbi3VJNWlsOcXfPqfKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJWPda7ytABwwvQKkq3AMmaFij2eDWroAuYzhO7xjb2ijep2Ng7aCLCE9zq7%2Bi7N4MD0EWhovPqWy7mCC9nEAurktIYhHmv%2By94QmEF1d0n9aXaGZSx7YA%2FidixEftCweIn7LLvbKtesGDPlkOU8rQnc0%2BAGav2vbEB84wmPWTTcAuTGTc81yG%2Bd47bUQibrVfhaJbvudRZziyzfLG7eul4FjV7PyfzQ%2BP8zvgysKaeXJazR4HdE6u2ibWHyPl2DvxMPhgcKAfRPKxdPqmyjNtJiK%2B1AyQEwIrZbvXY1m9kFNLZcx9KaUl%2Fg8VfxIRaLMqku2a%2BnWb1A0Gybk7FNQlMULRAjZSzV7uoCuN8z0lrolCgnBwAQeuDHFjaCyjSJnGBD5s6pzSiVZ5scjFfwbJXSI3L30oj3ph1ZJYY9gPWeYyiClQHbsY%2FjRJT4pF4WFU7nfpYRCovWy3WEL1%2FBO910QWg1eyuMX316w8SaURIhiZDrojFkPuANK1MY3VcsBFvhvv%2F9NUaRN7yXKxscEXJhDRhofEClYZiHdHOB75Mhu%2BCO2y2BmF9%2FA4BUkee6IF2DAcDXcJ2yWMDz8wTlK9IzKZIu8FEtdHjNb2b9tfNd1xDvsNBXAl7YtvvYSxyJXZSGiuDNQSY9AwuTDLo4PDBjqkAeovyTWygO0FEOVgJkJdhMB3H9CINYtOZyBPWA4Ocri%2Fmpd5MyumZS6R58AM%2BKRBq%2FrLYLqj84S3TifWc3A%2FzdJmkH6qT%2F%2BULNEKa1vas5Gcc3x4lpgaRQIm646zLl5p6pOXJQ9IB6h62X6kMmdSSqgTC7f9B0IYq1kosCKFJBpBap8B2clnxD20y2wWc%2B8G1Fg%2FpD95AahMecRJzgAmnl88jpLV&X-Amz-Signature=e27a65512af8a50c46e7572fa2aa70cbeb09269c68001ebfcd46bb117effac9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYGGRSV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTj0hrINFN79ujGaLSSN6JGr9PCDhkM8tjgEBuHqVE%2FQIhALKE3hooKIQpBzMlVWDym9YBLGnxbi3VJNWlsOcXfPqfKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJWPda7ytABwwvQKkq3AMmaFij2eDWroAuYzhO7xjb2ijep2Ng7aCLCE9zq7%2Bi7N4MD0EWhovPqWy7mCC9nEAurktIYhHmv%2By94QmEF1d0n9aXaGZSx7YA%2FidixEftCweIn7LLvbKtesGDPlkOU8rQnc0%2BAGav2vbEB84wmPWTTcAuTGTc81yG%2Bd47bUQibrVfhaJbvudRZziyzfLG7eul4FjV7PyfzQ%2BP8zvgysKaeXJazR4HdE6u2ibWHyPl2DvxMPhgcKAfRPKxdPqmyjNtJiK%2B1AyQEwIrZbvXY1m9kFNLZcx9KaUl%2Fg8VfxIRaLMqku2a%2BnWb1A0Gybk7FNQlMULRAjZSzV7uoCuN8z0lrolCgnBwAQeuDHFjaCyjSJnGBD5s6pzSiVZ5scjFfwbJXSI3L30oj3ph1ZJYY9gPWeYyiClQHbsY%2FjRJT4pF4WFU7nfpYRCovWy3WEL1%2FBO910QWg1eyuMX316w8SaURIhiZDrojFkPuANK1MY3VcsBFvhvv%2F9NUaRN7yXKxscEXJhDRhofEClYZiHdHOB75Mhu%2BCO2y2BmF9%2FA4BUkee6IF2DAcDXcJ2yWMDz8wTlK9IzKZIu8FEtdHjNb2b9tfNd1xDvsNBXAl7YtvvYSxyJXZSGiuDNQSY9AwuTDLo4PDBjqkAeovyTWygO0FEOVgJkJdhMB3H9CINYtOZyBPWA4Ocri%2Fmpd5MyumZS6R58AM%2BKRBq%2FrLYLqj84S3TifWc3A%2FzdJmkH6qT%2F%2BULNEKa1vas5Gcc3x4lpgaRQIm646zLl5p6pOXJQ9IB6h62X6kMmdSSqgTC7f9B0IYq1kosCKFJBpBap8B2clnxD20y2wWc%2B8G1Fg%2FpD95AahMecRJzgAmnl88jpLV&X-Amz-Signature=71e3de34470025d120a40e9ec1dd76215c489d800b62acc81e6bd7b97cd42240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYGGRSV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTj0hrINFN79ujGaLSSN6JGr9PCDhkM8tjgEBuHqVE%2FQIhALKE3hooKIQpBzMlVWDym9YBLGnxbi3VJNWlsOcXfPqfKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJWPda7ytABwwvQKkq3AMmaFij2eDWroAuYzhO7xjb2ijep2Ng7aCLCE9zq7%2Bi7N4MD0EWhovPqWy7mCC9nEAurktIYhHmv%2By94QmEF1d0n9aXaGZSx7YA%2FidixEftCweIn7LLvbKtesGDPlkOU8rQnc0%2BAGav2vbEB84wmPWTTcAuTGTc81yG%2Bd47bUQibrVfhaJbvudRZziyzfLG7eul4FjV7PyfzQ%2BP8zvgysKaeXJazR4HdE6u2ibWHyPl2DvxMPhgcKAfRPKxdPqmyjNtJiK%2B1AyQEwIrZbvXY1m9kFNLZcx9KaUl%2Fg8VfxIRaLMqku2a%2BnWb1A0Gybk7FNQlMULRAjZSzV7uoCuN8z0lrolCgnBwAQeuDHFjaCyjSJnGBD5s6pzSiVZ5scjFfwbJXSI3L30oj3ph1ZJYY9gPWeYyiClQHbsY%2FjRJT4pF4WFU7nfpYRCovWy3WEL1%2FBO910QWg1eyuMX316w8SaURIhiZDrojFkPuANK1MY3VcsBFvhvv%2F9NUaRN7yXKxscEXJhDRhofEClYZiHdHOB75Mhu%2BCO2y2BmF9%2FA4BUkee6IF2DAcDXcJ2yWMDz8wTlK9IzKZIu8FEtdHjNb2b9tfNd1xDvsNBXAl7YtvvYSxyJXZSGiuDNQSY9AwuTDLo4PDBjqkAeovyTWygO0FEOVgJkJdhMB3H9CINYtOZyBPWA4Ocri%2Fmpd5MyumZS6R58AM%2BKRBq%2FrLYLqj84S3TifWc3A%2FzdJmkH6qT%2F%2BULNEKa1vas5Gcc3x4lpgaRQIm646zLl5p6pOXJQ9IB6h62X6kMmdSSqgTC7f9B0IYq1kosCKFJBpBap8B2clnxD20y2wWc%2B8G1Fg%2FpD95AahMecRJzgAmnl88jpLV&X-Amz-Signature=0316ab5e4a1a05a0d86fae929c47d58cbf1846df924861db1a592fb32cffc662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYGGRSV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTj0hrINFN79ujGaLSSN6JGr9PCDhkM8tjgEBuHqVE%2FQIhALKE3hooKIQpBzMlVWDym9YBLGnxbi3VJNWlsOcXfPqfKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJWPda7ytABwwvQKkq3AMmaFij2eDWroAuYzhO7xjb2ijep2Ng7aCLCE9zq7%2Bi7N4MD0EWhovPqWy7mCC9nEAurktIYhHmv%2By94QmEF1d0n9aXaGZSx7YA%2FidixEftCweIn7LLvbKtesGDPlkOU8rQnc0%2BAGav2vbEB84wmPWTTcAuTGTc81yG%2Bd47bUQibrVfhaJbvudRZziyzfLG7eul4FjV7PyfzQ%2BP8zvgysKaeXJazR4HdE6u2ibWHyPl2DvxMPhgcKAfRPKxdPqmyjNtJiK%2B1AyQEwIrZbvXY1m9kFNLZcx9KaUl%2Fg8VfxIRaLMqku2a%2BnWb1A0Gybk7FNQlMULRAjZSzV7uoCuN8z0lrolCgnBwAQeuDHFjaCyjSJnGBD5s6pzSiVZ5scjFfwbJXSI3L30oj3ph1ZJYY9gPWeYyiClQHbsY%2FjRJT4pF4WFU7nfpYRCovWy3WEL1%2FBO910QWg1eyuMX316w8SaURIhiZDrojFkPuANK1MY3VcsBFvhvv%2F9NUaRN7yXKxscEXJhDRhofEClYZiHdHOB75Mhu%2BCO2y2BmF9%2FA4BUkee6IF2DAcDXcJ2yWMDz8wTlK9IzKZIu8FEtdHjNb2b9tfNd1xDvsNBXAl7YtvvYSxyJXZSGiuDNQSY9AwuTDLo4PDBjqkAeovyTWygO0FEOVgJkJdhMB3H9CINYtOZyBPWA4Ocri%2Fmpd5MyumZS6R58AM%2BKRBq%2FrLYLqj84S3TifWc3A%2FzdJmkH6qT%2F%2BULNEKa1vas5Gcc3x4lpgaRQIm646zLl5p6pOXJQ9IB6h62X6kMmdSSqgTC7f9B0IYq1kosCKFJBpBap8B2clnxD20y2wWc%2B8G1Fg%2FpD95AahMecRJzgAmnl88jpLV&X-Amz-Signature=0a0e429f21cb0a9d3e9ed227aacadc89b037842c7b9d26ed8a2a58e21bab19ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYGGRSV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTj0hrINFN79ujGaLSSN6JGr9PCDhkM8tjgEBuHqVE%2FQIhALKE3hooKIQpBzMlVWDym9YBLGnxbi3VJNWlsOcXfPqfKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJWPda7ytABwwvQKkq3AMmaFij2eDWroAuYzhO7xjb2ijep2Ng7aCLCE9zq7%2Bi7N4MD0EWhovPqWy7mCC9nEAurktIYhHmv%2By94QmEF1d0n9aXaGZSx7YA%2FidixEftCweIn7LLvbKtesGDPlkOU8rQnc0%2BAGav2vbEB84wmPWTTcAuTGTc81yG%2Bd47bUQibrVfhaJbvudRZziyzfLG7eul4FjV7PyfzQ%2BP8zvgysKaeXJazR4HdE6u2ibWHyPl2DvxMPhgcKAfRPKxdPqmyjNtJiK%2B1AyQEwIrZbvXY1m9kFNLZcx9KaUl%2Fg8VfxIRaLMqku2a%2BnWb1A0Gybk7FNQlMULRAjZSzV7uoCuN8z0lrolCgnBwAQeuDHFjaCyjSJnGBD5s6pzSiVZ5scjFfwbJXSI3L30oj3ph1ZJYY9gPWeYyiClQHbsY%2FjRJT4pF4WFU7nfpYRCovWy3WEL1%2FBO910QWg1eyuMX316w8SaURIhiZDrojFkPuANK1MY3VcsBFvhvv%2F9NUaRN7yXKxscEXJhDRhofEClYZiHdHOB75Mhu%2BCO2y2BmF9%2FA4BUkee6IF2DAcDXcJ2yWMDz8wTlK9IzKZIu8FEtdHjNb2b9tfNd1xDvsNBXAl7YtvvYSxyJXZSGiuDNQSY9AwuTDLo4PDBjqkAeovyTWygO0FEOVgJkJdhMB3H9CINYtOZyBPWA4Ocri%2Fmpd5MyumZS6R58AM%2BKRBq%2FrLYLqj84S3TifWc3A%2FzdJmkH6qT%2F%2BULNEKa1vas5Gcc3x4lpgaRQIm646zLl5p6pOXJQ9IB6h62X6kMmdSSqgTC7f9B0IYq1kosCKFJBpBap8B2clnxD20y2wWc%2B8G1Fg%2FpD95AahMecRJzgAmnl88jpLV&X-Amz-Signature=66b0e5ef58cbcd4bf7071e3c5263f3c6304487719439d19682b0b34831403681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYGGRSV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTj0hrINFN79ujGaLSSN6JGr9PCDhkM8tjgEBuHqVE%2FQIhALKE3hooKIQpBzMlVWDym9YBLGnxbi3VJNWlsOcXfPqfKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJWPda7ytABwwvQKkq3AMmaFij2eDWroAuYzhO7xjb2ijep2Ng7aCLCE9zq7%2Bi7N4MD0EWhovPqWy7mCC9nEAurktIYhHmv%2By94QmEF1d0n9aXaGZSx7YA%2FidixEftCweIn7LLvbKtesGDPlkOU8rQnc0%2BAGav2vbEB84wmPWTTcAuTGTc81yG%2Bd47bUQibrVfhaJbvudRZziyzfLG7eul4FjV7PyfzQ%2BP8zvgysKaeXJazR4HdE6u2ibWHyPl2DvxMPhgcKAfRPKxdPqmyjNtJiK%2B1AyQEwIrZbvXY1m9kFNLZcx9KaUl%2Fg8VfxIRaLMqku2a%2BnWb1A0Gybk7FNQlMULRAjZSzV7uoCuN8z0lrolCgnBwAQeuDHFjaCyjSJnGBD5s6pzSiVZ5scjFfwbJXSI3L30oj3ph1ZJYY9gPWeYyiClQHbsY%2FjRJT4pF4WFU7nfpYRCovWy3WEL1%2FBO910QWg1eyuMX316w8SaURIhiZDrojFkPuANK1MY3VcsBFvhvv%2F9NUaRN7yXKxscEXJhDRhofEClYZiHdHOB75Mhu%2BCO2y2BmF9%2FA4BUkee6IF2DAcDXcJ2yWMDz8wTlK9IzKZIu8FEtdHjNb2b9tfNd1xDvsNBXAl7YtvvYSxyJXZSGiuDNQSY9AwuTDLo4PDBjqkAeovyTWygO0FEOVgJkJdhMB3H9CINYtOZyBPWA4Ocri%2Fmpd5MyumZS6R58AM%2BKRBq%2FrLYLqj84S3TifWc3A%2FzdJmkH6qT%2F%2BULNEKa1vas5Gcc3x4lpgaRQIm646zLl5p6pOXJQ9IB6h62X6kMmdSSqgTC7f9B0IYq1kosCKFJBpBap8B2clnxD20y2wWc%2B8G1Fg%2FpD95AahMecRJzgAmnl88jpLV&X-Amz-Signature=e813fc11013ff7e5dc105813395e07e465d43f4d5cdea4d22e57e5a1245d6e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYGGRSV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTj0hrINFN79ujGaLSSN6JGr9PCDhkM8tjgEBuHqVE%2FQIhALKE3hooKIQpBzMlVWDym9YBLGnxbi3VJNWlsOcXfPqfKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJWPda7ytABwwvQKkq3AMmaFij2eDWroAuYzhO7xjb2ijep2Ng7aCLCE9zq7%2Bi7N4MD0EWhovPqWy7mCC9nEAurktIYhHmv%2By94QmEF1d0n9aXaGZSx7YA%2FidixEftCweIn7LLvbKtesGDPlkOU8rQnc0%2BAGav2vbEB84wmPWTTcAuTGTc81yG%2Bd47bUQibrVfhaJbvudRZziyzfLG7eul4FjV7PyfzQ%2BP8zvgysKaeXJazR4HdE6u2ibWHyPl2DvxMPhgcKAfRPKxdPqmyjNtJiK%2B1AyQEwIrZbvXY1m9kFNLZcx9KaUl%2Fg8VfxIRaLMqku2a%2BnWb1A0Gybk7FNQlMULRAjZSzV7uoCuN8z0lrolCgnBwAQeuDHFjaCyjSJnGBD5s6pzSiVZ5scjFfwbJXSI3L30oj3ph1ZJYY9gPWeYyiClQHbsY%2FjRJT4pF4WFU7nfpYRCovWy3WEL1%2FBO910QWg1eyuMX316w8SaURIhiZDrojFkPuANK1MY3VcsBFvhvv%2F9NUaRN7yXKxscEXJhDRhofEClYZiHdHOB75Mhu%2BCO2y2BmF9%2FA4BUkee6IF2DAcDXcJ2yWMDz8wTlK9IzKZIu8FEtdHjNb2b9tfNd1xDvsNBXAl7YtvvYSxyJXZSGiuDNQSY9AwuTDLo4PDBjqkAeovyTWygO0FEOVgJkJdhMB3H9CINYtOZyBPWA4Ocri%2Fmpd5MyumZS6R58AM%2BKRBq%2FrLYLqj84S3TifWc3A%2FzdJmkH6qT%2F%2BULNEKa1vas5Gcc3x4lpgaRQIm646zLl5p6pOXJQ9IB6h62X6kMmdSSqgTC7f9B0IYq1kosCKFJBpBap8B2clnxD20y2wWc%2B8G1Fg%2FpD95AahMecRJzgAmnl88jpLV&X-Amz-Signature=b297990149bad4ffbcdecfda74c110c9fc05af55020de9019761e52da74e581f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

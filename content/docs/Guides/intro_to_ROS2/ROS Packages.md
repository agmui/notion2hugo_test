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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIN2SOL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ3gs4L4jZmFJcR2x%2FP8Wbdp9dYB52AnhB%2BhQKYMnCTAiBOKsi3th3OfX%2FAAy4buV6QV4ffqRLOt5iq5INPXlCJWCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DsWIjzU2SqlyoHUKtwD1Wxjlx41UMb%2Bk%2FV%2FLHLXmtF%2FsGalV3zHM3qzLQ98%2F5M09AWg4%2BOsawMcePDiYUHNx1edJ8tlbm9I7uIF4h7mm0OEjFsfo1OCHH3TczKGSbNw9C67QvDzDXu2BayY4%2F%2BN4dffA8QJxBMWb6vji8kSts2aDTaRslyiURgd1dq5tyi0ZKh7Gopc90fwknf1RWCxq4FUgwDk%2FYOMImQpm32Eg9yc4BQbhEscu9CF0lnEMxyaHgIxgkg6drctinTbeUppZdCjJMmdwProbgS0ZlEYIdWEpWVxq7%2FqYDeTvCpEkJUqD9rAUB%2FBOWffn5Yy5fC4SzLlK5Mo%2FVGmWbnGFngGaVHyQhQD%2BT3pnSZ4cSnf1Mv7pw0Odu8Iel8tSu4yfTj9Gd3yYeMTlixkL%2Bt9y1As7%2FFkHPrxMk7EoIEKBnNBIhAAwyIBw74YjmGOex%2B0faMk%2F9jS7MKLGDtv4%2Bo2%2BeBM2Lh%2FPaIGzecyGO0vytsj%2FGtCQHeCNK4HJ4w%2FL0csmwrFhJpwTsa7BdFp7AA%2ByTN1PTnNs05R1sE0zuqveZqD0iBc8UDoy0C51HcWG%2Fn47qrt3%2FMVUKO0z8p%2BLOS7adqsr4upIDsJmMpdFJzIteJwHvpbzIin%2FAVq%2FECmMx0wkfXgxAY6pgFOjNt%2FxAKGGKB8F5%2BPqr8zi1pXD4IKyo51QcLnqQsqmGUk63B2gqoJz4uB%2BZHIlDhPOyekNr239pCA4sw0gyE0y6s2wc%2FnJZbGYllO35wKxFqoFZ9RoUbOPqZN9uXFwkOl4pxuj61gn5Qfbdj9GwlRi4clyj%2FuIjCa%2BGvdszR1IwWKIBe7aXbuOCy2btSdDFqqgagc%2F0ReW92oEY0DyRzexdgA%2BgwK&X-Amz-Signature=994b93c2155727e8eb3fa2806328b7a515a15e6ceaf88252d56095ca506898eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIN2SOL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ3gs4L4jZmFJcR2x%2FP8Wbdp9dYB52AnhB%2BhQKYMnCTAiBOKsi3th3OfX%2FAAy4buV6QV4ffqRLOt5iq5INPXlCJWCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DsWIjzU2SqlyoHUKtwD1Wxjlx41UMb%2Bk%2FV%2FLHLXmtF%2FsGalV3zHM3qzLQ98%2F5M09AWg4%2BOsawMcePDiYUHNx1edJ8tlbm9I7uIF4h7mm0OEjFsfo1OCHH3TczKGSbNw9C67QvDzDXu2BayY4%2F%2BN4dffA8QJxBMWb6vji8kSts2aDTaRslyiURgd1dq5tyi0ZKh7Gopc90fwknf1RWCxq4FUgwDk%2FYOMImQpm32Eg9yc4BQbhEscu9CF0lnEMxyaHgIxgkg6drctinTbeUppZdCjJMmdwProbgS0ZlEYIdWEpWVxq7%2FqYDeTvCpEkJUqD9rAUB%2FBOWffn5Yy5fC4SzLlK5Mo%2FVGmWbnGFngGaVHyQhQD%2BT3pnSZ4cSnf1Mv7pw0Odu8Iel8tSu4yfTj9Gd3yYeMTlixkL%2Bt9y1As7%2FFkHPrxMk7EoIEKBnNBIhAAwyIBw74YjmGOex%2B0faMk%2F9jS7MKLGDtv4%2Bo2%2BeBM2Lh%2FPaIGzecyGO0vytsj%2FGtCQHeCNK4HJ4w%2FL0csmwrFhJpwTsa7BdFp7AA%2ByTN1PTnNs05R1sE0zuqveZqD0iBc8UDoy0C51HcWG%2Fn47qrt3%2FMVUKO0z8p%2BLOS7adqsr4upIDsJmMpdFJzIteJwHvpbzIin%2FAVq%2FECmMx0wkfXgxAY6pgFOjNt%2FxAKGGKB8F5%2BPqr8zi1pXD4IKyo51QcLnqQsqmGUk63B2gqoJz4uB%2BZHIlDhPOyekNr239pCA4sw0gyE0y6s2wc%2FnJZbGYllO35wKxFqoFZ9RoUbOPqZN9uXFwkOl4pxuj61gn5Qfbdj9GwlRi4clyj%2FuIjCa%2BGvdszR1IwWKIBe7aXbuOCy2btSdDFqqgagc%2F0ReW92oEY0DyRzexdgA%2BgwK&X-Amz-Signature=e0db9e2895fab756ce5f50b79dc45fed3b24e23fae5f8fce4b7c10eb7439a556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIN2SOL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ3gs4L4jZmFJcR2x%2FP8Wbdp9dYB52AnhB%2BhQKYMnCTAiBOKsi3th3OfX%2FAAy4buV6QV4ffqRLOt5iq5INPXlCJWCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DsWIjzU2SqlyoHUKtwD1Wxjlx41UMb%2Bk%2FV%2FLHLXmtF%2FsGalV3zHM3qzLQ98%2F5M09AWg4%2BOsawMcePDiYUHNx1edJ8tlbm9I7uIF4h7mm0OEjFsfo1OCHH3TczKGSbNw9C67QvDzDXu2BayY4%2F%2BN4dffA8QJxBMWb6vji8kSts2aDTaRslyiURgd1dq5tyi0ZKh7Gopc90fwknf1RWCxq4FUgwDk%2FYOMImQpm32Eg9yc4BQbhEscu9CF0lnEMxyaHgIxgkg6drctinTbeUppZdCjJMmdwProbgS0ZlEYIdWEpWVxq7%2FqYDeTvCpEkJUqD9rAUB%2FBOWffn5Yy5fC4SzLlK5Mo%2FVGmWbnGFngGaVHyQhQD%2BT3pnSZ4cSnf1Mv7pw0Odu8Iel8tSu4yfTj9Gd3yYeMTlixkL%2Bt9y1As7%2FFkHPrxMk7EoIEKBnNBIhAAwyIBw74YjmGOex%2B0faMk%2F9jS7MKLGDtv4%2Bo2%2BeBM2Lh%2FPaIGzecyGO0vytsj%2FGtCQHeCNK4HJ4w%2FL0csmwrFhJpwTsa7BdFp7AA%2ByTN1PTnNs05R1sE0zuqveZqD0iBc8UDoy0C51HcWG%2Fn47qrt3%2FMVUKO0z8p%2BLOS7adqsr4upIDsJmMpdFJzIteJwHvpbzIin%2FAVq%2FECmMx0wkfXgxAY6pgFOjNt%2FxAKGGKB8F5%2BPqr8zi1pXD4IKyo51QcLnqQsqmGUk63B2gqoJz4uB%2BZHIlDhPOyekNr239pCA4sw0gyE0y6s2wc%2FnJZbGYllO35wKxFqoFZ9RoUbOPqZN9uXFwkOl4pxuj61gn5Qfbdj9GwlRi4clyj%2FuIjCa%2BGvdszR1IwWKIBe7aXbuOCy2btSdDFqqgagc%2F0ReW92oEY0DyRzexdgA%2BgwK&X-Amz-Signature=505a9588f4b1da02ab8434c74f6bc5340dbdc9e627a78982866666feb27e1d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIN2SOL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ3gs4L4jZmFJcR2x%2FP8Wbdp9dYB52AnhB%2BhQKYMnCTAiBOKsi3th3OfX%2FAAy4buV6QV4ffqRLOt5iq5INPXlCJWCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DsWIjzU2SqlyoHUKtwD1Wxjlx41UMb%2Bk%2FV%2FLHLXmtF%2FsGalV3zHM3qzLQ98%2F5M09AWg4%2BOsawMcePDiYUHNx1edJ8tlbm9I7uIF4h7mm0OEjFsfo1OCHH3TczKGSbNw9C67QvDzDXu2BayY4%2F%2BN4dffA8QJxBMWb6vji8kSts2aDTaRslyiURgd1dq5tyi0ZKh7Gopc90fwknf1RWCxq4FUgwDk%2FYOMImQpm32Eg9yc4BQbhEscu9CF0lnEMxyaHgIxgkg6drctinTbeUppZdCjJMmdwProbgS0ZlEYIdWEpWVxq7%2FqYDeTvCpEkJUqD9rAUB%2FBOWffn5Yy5fC4SzLlK5Mo%2FVGmWbnGFngGaVHyQhQD%2BT3pnSZ4cSnf1Mv7pw0Odu8Iel8tSu4yfTj9Gd3yYeMTlixkL%2Bt9y1As7%2FFkHPrxMk7EoIEKBnNBIhAAwyIBw74YjmGOex%2B0faMk%2F9jS7MKLGDtv4%2Bo2%2BeBM2Lh%2FPaIGzecyGO0vytsj%2FGtCQHeCNK4HJ4w%2FL0csmwrFhJpwTsa7BdFp7AA%2ByTN1PTnNs05R1sE0zuqveZqD0iBc8UDoy0C51HcWG%2Fn47qrt3%2FMVUKO0z8p%2BLOS7adqsr4upIDsJmMpdFJzIteJwHvpbzIin%2FAVq%2FECmMx0wkfXgxAY6pgFOjNt%2FxAKGGKB8F5%2BPqr8zi1pXD4IKyo51QcLnqQsqmGUk63B2gqoJz4uB%2BZHIlDhPOyekNr239pCA4sw0gyE0y6s2wc%2FnJZbGYllO35wKxFqoFZ9RoUbOPqZN9uXFwkOl4pxuj61gn5Qfbdj9GwlRi4clyj%2FuIjCa%2BGvdszR1IwWKIBe7aXbuOCy2btSdDFqqgagc%2F0ReW92oEY0DyRzexdgA%2BgwK&X-Amz-Signature=d1345d85dfde41118fff99f7c7a7660caf68c78f9725a3cb3bcd47cd9fc2d10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIN2SOL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ3gs4L4jZmFJcR2x%2FP8Wbdp9dYB52AnhB%2BhQKYMnCTAiBOKsi3th3OfX%2FAAy4buV6QV4ffqRLOt5iq5INPXlCJWCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DsWIjzU2SqlyoHUKtwD1Wxjlx41UMb%2Bk%2FV%2FLHLXmtF%2FsGalV3zHM3qzLQ98%2F5M09AWg4%2BOsawMcePDiYUHNx1edJ8tlbm9I7uIF4h7mm0OEjFsfo1OCHH3TczKGSbNw9C67QvDzDXu2BayY4%2F%2BN4dffA8QJxBMWb6vji8kSts2aDTaRslyiURgd1dq5tyi0ZKh7Gopc90fwknf1RWCxq4FUgwDk%2FYOMImQpm32Eg9yc4BQbhEscu9CF0lnEMxyaHgIxgkg6drctinTbeUppZdCjJMmdwProbgS0ZlEYIdWEpWVxq7%2FqYDeTvCpEkJUqD9rAUB%2FBOWffn5Yy5fC4SzLlK5Mo%2FVGmWbnGFngGaVHyQhQD%2BT3pnSZ4cSnf1Mv7pw0Odu8Iel8tSu4yfTj9Gd3yYeMTlixkL%2Bt9y1As7%2FFkHPrxMk7EoIEKBnNBIhAAwyIBw74YjmGOex%2B0faMk%2F9jS7MKLGDtv4%2Bo2%2BeBM2Lh%2FPaIGzecyGO0vytsj%2FGtCQHeCNK4HJ4w%2FL0csmwrFhJpwTsa7BdFp7AA%2ByTN1PTnNs05R1sE0zuqveZqD0iBc8UDoy0C51HcWG%2Fn47qrt3%2FMVUKO0z8p%2BLOS7adqsr4upIDsJmMpdFJzIteJwHvpbzIin%2FAVq%2FECmMx0wkfXgxAY6pgFOjNt%2FxAKGGKB8F5%2BPqr8zi1pXD4IKyo51QcLnqQsqmGUk63B2gqoJz4uB%2BZHIlDhPOyekNr239pCA4sw0gyE0y6s2wc%2FnJZbGYllO35wKxFqoFZ9RoUbOPqZN9uXFwkOl4pxuj61gn5Qfbdj9GwlRi4clyj%2FuIjCa%2BGvdszR1IwWKIBe7aXbuOCy2btSdDFqqgagc%2F0ReW92oEY0DyRzexdgA%2BgwK&X-Amz-Signature=504aad94fe602a930e66369b6a5aa289b781e1e5d1d211e7c2ceac0276888f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIN2SOL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ3gs4L4jZmFJcR2x%2FP8Wbdp9dYB52AnhB%2BhQKYMnCTAiBOKsi3th3OfX%2FAAy4buV6QV4ffqRLOt5iq5INPXlCJWCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DsWIjzU2SqlyoHUKtwD1Wxjlx41UMb%2Bk%2FV%2FLHLXmtF%2FsGalV3zHM3qzLQ98%2F5M09AWg4%2BOsawMcePDiYUHNx1edJ8tlbm9I7uIF4h7mm0OEjFsfo1OCHH3TczKGSbNw9C67QvDzDXu2BayY4%2F%2BN4dffA8QJxBMWb6vji8kSts2aDTaRslyiURgd1dq5tyi0ZKh7Gopc90fwknf1RWCxq4FUgwDk%2FYOMImQpm32Eg9yc4BQbhEscu9CF0lnEMxyaHgIxgkg6drctinTbeUppZdCjJMmdwProbgS0ZlEYIdWEpWVxq7%2FqYDeTvCpEkJUqD9rAUB%2FBOWffn5Yy5fC4SzLlK5Mo%2FVGmWbnGFngGaVHyQhQD%2BT3pnSZ4cSnf1Mv7pw0Odu8Iel8tSu4yfTj9Gd3yYeMTlixkL%2Bt9y1As7%2FFkHPrxMk7EoIEKBnNBIhAAwyIBw74YjmGOex%2B0faMk%2F9jS7MKLGDtv4%2Bo2%2BeBM2Lh%2FPaIGzecyGO0vytsj%2FGtCQHeCNK4HJ4w%2FL0csmwrFhJpwTsa7BdFp7AA%2ByTN1PTnNs05R1sE0zuqveZqD0iBc8UDoy0C51HcWG%2Fn47qrt3%2FMVUKO0z8p%2BLOS7adqsr4upIDsJmMpdFJzIteJwHvpbzIin%2FAVq%2FECmMx0wkfXgxAY6pgFOjNt%2FxAKGGKB8F5%2BPqr8zi1pXD4IKyo51QcLnqQsqmGUk63B2gqoJz4uB%2BZHIlDhPOyekNr239pCA4sw0gyE0y6s2wc%2FnJZbGYllO35wKxFqoFZ9RoUbOPqZN9uXFwkOl4pxuj61gn5Qfbdj9GwlRi4clyj%2FuIjCa%2BGvdszR1IwWKIBe7aXbuOCy2btSdDFqqgagc%2F0ReW92oEY0DyRzexdgA%2BgwK&X-Amz-Signature=dc2112eef9e30f111c721258c539d7b595f4c7cf4789dc9bd2fe4ca11dc3af4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIN2SOL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ3gs4L4jZmFJcR2x%2FP8Wbdp9dYB52AnhB%2BhQKYMnCTAiBOKsi3th3OfX%2FAAy4buV6QV4ffqRLOt5iq5INPXlCJWCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DsWIjzU2SqlyoHUKtwD1Wxjlx41UMb%2Bk%2FV%2FLHLXmtF%2FsGalV3zHM3qzLQ98%2F5M09AWg4%2BOsawMcePDiYUHNx1edJ8tlbm9I7uIF4h7mm0OEjFsfo1OCHH3TczKGSbNw9C67QvDzDXu2BayY4%2F%2BN4dffA8QJxBMWb6vji8kSts2aDTaRslyiURgd1dq5tyi0ZKh7Gopc90fwknf1RWCxq4FUgwDk%2FYOMImQpm32Eg9yc4BQbhEscu9CF0lnEMxyaHgIxgkg6drctinTbeUppZdCjJMmdwProbgS0ZlEYIdWEpWVxq7%2FqYDeTvCpEkJUqD9rAUB%2FBOWffn5Yy5fC4SzLlK5Mo%2FVGmWbnGFngGaVHyQhQD%2BT3pnSZ4cSnf1Mv7pw0Odu8Iel8tSu4yfTj9Gd3yYeMTlixkL%2Bt9y1As7%2FFkHPrxMk7EoIEKBnNBIhAAwyIBw74YjmGOex%2B0faMk%2F9jS7MKLGDtv4%2Bo2%2BeBM2Lh%2FPaIGzecyGO0vytsj%2FGtCQHeCNK4HJ4w%2FL0csmwrFhJpwTsa7BdFp7AA%2ByTN1PTnNs05R1sE0zuqveZqD0iBc8UDoy0C51HcWG%2Fn47qrt3%2FMVUKO0z8p%2BLOS7adqsr4upIDsJmMpdFJzIteJwHvpbzIin%2FAVq%2FECmMx0wkfXgxAY6pgFOjNt%2FxAKGGKB8F5%2BPqr8zi1pXD4IKyo51QcLnqQsqmGUk63B2gqoJz4uB%2BZHIlDhPOyekNr239pCA4sw0gyE0y6s2wc%2FnJZbGYllO35wKxFqoFZ9RoUbOPqZN9uXFwkOl4pxuj61gn5Qfbdj9GwlRi4clyj%2FuIjCa%2BGvdszR1IwWKIBe7aXbuOCy2btSdDFqqgagc%2F0ReW92oEY0DyRzexdgA%2BgwK&X-Amz-Signature=cff40b705a22c3664667cc0b9140c2a695a28a6b16b8a2555771c42ea2533b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

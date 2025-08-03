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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJLP67T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS74%2F%2BrVuHMkhkWYxwbYADMg2KrjmXH7RYrBBt3eKDcQIhAK3iITsbQz%2FLPZUUjfsFSPHTA5H0Jhh%2FsGDTCKNvYJ9LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxlcbVeQ0hTlGBBAUwq3ANO7M3JOVkVEH%2B9wv5YNw7OGPd5CHoZxd5P%2FTCnIJjQFHrPLAOyejiM9ROPmB%2F7zvBPoRV3YLTounnJZloSNcQQHMHjiRgk54ixoyd9HPQ11ifapkHz%2BmZsRiuEVuef3ZYj1%2Fb20RDHmy2RbYuhjRN%2FGGjcSoJUxDK5K0pt%2B4CkEO1xBSqBLpyKJfk%2Fn2VcNaqdQynpYdESYv3xjqCJSRvpBEDKgKsKCWcgjEkWjkgZDEyP4rvk1c0OFKggbrUGCmBEuosywJQACudOkkHfJUYJovt8nCoC2nHj9yAOt3RQnluTc7Q%2Fnou1H5DXzVlpV5%2FKC9%2BTbEr%2BesIxIDhYWD57EMl1cTLbYTHpOcDrEbCs9iTRIsd9zPszxHzrheXXSe86jPTeGrAtUWba4trgcrrVHfps34uRfAb2BbnoB6z7whJ%2FXXquyXZCMeTKj7ibw2OgX70xGmRy5s0Y8hkH3oV41Ma24p7HbpTi0tbU1JZoAWmwbvEp84sRg9UGgusKhIfJN10%2B9L5PmDgz2Z7anbFFdSkACiO7fTccNj8AShs6Z%2BLq6OqRjqG%2BAEFKKg8Gp%2BslYgZ3FNjEy7ZghfRnE%2Fc4yH2TIPCNPkCwdxCh7wHdfrcN2VSyC%2FMx%2FHbA6TD7gLrEBjqkASsK61WTv4gEfAOb96XlSwYPP2cr9pKyCtu8av9ImeOfE4qTOD2Jyea7sD%2Bqxle0aD84rywIInFu3vQi3w52j16v2ZoWb8MhjLf09UU5KUyl1zP4f238YR59%2Bes2KrbhDOo3PCkbZeU1CBOp%2B%2FzPBivkqqdnHQhCzJbo229Lm9JdhDHovdarSY1K49T3r%2FS8uu7I%2BLFjzmACa%2FEi9tyIjQ3nL9ME&X-Amz-Signature=9131bdad6e1afe8ee77ee5519a571d0c1e984258b90fb017aa56d4150b9bd7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJLP67T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS74%2F%2BrVuHMkhkWYxwbYADMg2KrjmXH7RYrBBt3eKDcQIhAK3iITsbQz%2FLPZUUjfsFSPHTA5H0Jhh%2FsGDTCKNvYJ9LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxlcbVeQ0hTlGBBAUwq3ANO7M3JOVkVEH%2B9wv5YNw7OGPd5CHoZxd5P%2FTCnIJjQFHrPLAOyejiM9ROPmB%2F7zvBPoRV3YLTounnJZloSNcQQHMHjiRgk54ixoyd9HPQ11ifapkHz%2BmZsRiuEVuef3ZYj1%2Fb20RDHmy2RbYuhjRN%2FGGjcSoJUxDK5K0pt%2B4CkEO1xBSqBLpyKJfk%2Fn2VcNaqdQynpYdESYv3xjqCJSRvpBEDKgKsKCWcgjEkWjkgZDEyP4rvk1c0OFKggbrUGCmBEuosywJQACudOkkHfJUYJovt8nCoC2nHj9yAOt3RQnluTc7Q%2Fnou1H5DXzVlpV5%2FKC9%2BTbEr%2BesIxIDhYWD57EMl1cTLbYTHpOcDrEbCs9iTRIsd9zPszxHzrheXXSe86jPTeGrAtUWba4trgcrrVHfps34uRfAb2BbnoB6z7whJ%2FXXquyXZCMeTKj7ibw2OgX70xGmRy5s0Y8hkH3oV41Ma24p7HbpTi0tbU1JZoAWmwbvEp84sRg9UGgusKhIfJN10%2B9L5PmDgz2Z7anbFFdSkACiO7fTccNj8AShs6Z%2BLq6OqRjqG%2BAEFKKg8Gp%2BslYgZ3FNjEy7ZghfRnE%2Fc4yH2TIPCNPkCwdxCh7wHdfrcN2VSyC%2FMx%2FHbA6TD7gLrEBjqkASsK61WTv4gEfAOb96XlSwYPP2cr9pKyCtu8av9ImeOfE4qTOD2Jyea7sD%2Bqxle0aD84rywIInFu3vQi3w52j16v2ZoWb8MhjLf09UU5KUyl1zP4f238YR59%2Bes2KrbhDOo3PCkbZeU1CBOp%2B%2FzPBivkqqdnHQhCzJbo229Lm9JdhDHovdarSY1K49T3r%2FS8uu7I%2BLFjzmACa%2FEi9tyIjQ3nL9ME&X-Amz-Signature=7d739f960236ed3babac6c30b18b791aef47d037fc30b328553504d0ad5934a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJLP67T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS74%2F%2BrVuHMkhkWYxwbYADMg2KrjmXH7RYrBBt3eKDcQIhAK3iITsbQz%2FLPZUUjfsFSPHTA5H0Jhh%2FsGDTCKNvYJ9LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxlcbVeQ0hTlGBBAUwq3ANO7M3JOVkVEH%2B9wv5YNw7OGPd5CHoZxd5P%2FTCnIJjQFHrPLAOyejiM9ROPmB%2F7zvBPoRV3YLTounnJZloSNcQQHMHjiRgk54ixoyd9HPQ11ifapkHz%2BmZsRiuEVuef3ZYj1%2Fb20RDHmy2RbYuhjRN%2FGGjcSoJUxDK5K0pt%2B4CkEO1xBSqBLpyKJfk%2Fn2VcNaqdQynpYdESYv3xjqCJSRvpBEDKgKsKCWcgjEkWjkgZDEyP4rvk1c0OFKggbrUGCmBEuosywJQACudOkkHfJUYJovt8nCoC2nHj9yAOt3RQnluTc7Q%2Fnou1H5DXzVlpV5%2FKC9%2BTbEr%2BesIxIDhYWD57EMl1cTLbYTHpOcDrEbCs9iTRIsd9zPszxHzrheXXSe86jPTeGrAtUWba4trgcrrVHfps34uRfAb2BbnoB6z7whJ%2FXXquyXZCMeTKj7ibw2OgX70xGmRy5s0Y8hkH3oV41Ma24p7HbpTi0tbU1JZoAWmwbvEp84sRg9UGgusKhIfJN10%2B9L5PmDgz2Z7anbFFdSkACiO7fTccNj8AShs6Z%2BLq6OqRjqG%2BAEFKKg8Gp%2BslYgZ3FNjEy7ZghfRnE%2Fc4yH2TIPCNPkCwdxCh7wHdfrcN2VSyC%2FMx%2FHbA6TD7gLrEBjqkASsK61WTv4gEfAOb96XlSwYPP2cr9pKyCtu8av9ImeOfE4qTOD2Jyea7sD%2Bqxle0aD84rywIInFu3vQi3w52j16v2ZoWb8MhjLf09UU5KUyl1zP4f238YR59%2Bes2KrbhDOo3PCkbZeU1CBOp%2B%2FzPBivkqqdnHQhCzJbo229Lm9JdhDHovdarSY1K49T3r%2FS8uu7I%2BLFjzmACa%2FEi9tyIjQ3nL9ME&X-Amz-Signature=1cee40af686d8ebe64dccc70f39e1e65a8b2e43d11ea789a34b6370514e4eb1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJLP67T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS74%2F%2BrVuHMkhkWYxwbYADMg2KrjmXH7RYrBBt3eKDcQIhAK3iITsbQz%2FLPZUUjfsFSPHTA5H0Jhh%2FsGDTCKNvYJ9LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxlcbVeQ0hTlGBBAUwq3ANO7M3JOVkVEH%2B9wv5YNw7OGPd5CHoZxd5P%2FTCnIJjQFHrPLAOyejiM9ROPmB%2F7zvBPoRV3YLTounnJZloSNcQQHMHjiRgk54ixoyd9HPQ11ifapkHz%2BmZsRiuEVuef3ZYj1%2Fb20RDHmy2RbYuhjRN%2FGGjcSoJUxDK5K0pt%2B4CkEO1xBSqBLpyKJfk%2Fn2VcNaqdQynpYdESYv3xjqCJSRvpBEDKgKsKCWcgjEkWjkgZDEyP4rvk1c0OFKggbrUGCmBEuosywJQACudOkkHfJUYJovt8nCoC2nHj9yAOt3RQnluTc7Q%2Fnou1H5DXzVlpV5%2FKC9%2BTbEr%2BesIxIDhYWD57EMl1cTLbYTHpOcDrEbCs9iTRIsd9zPszxHzrheXXSe86jPTeGrAtUWba4trgcrrVHfps34uRfAb2BbnoB6z7whJ%2FXXquyXZCMeTKj7ibw2OgX70xGmRy5s0Y8hkH3oV41Ma24p7HbpTi0tbU1JZoAWmwbvEp84sRg9UGgusKhIfJN10%2B9L5PmDgz2Z7anbFFdSkACiO7fTccNj8AShs6Z%2BLq6OqRjqG%2BAEFKKg8Gp%2BslYgZ3FNjEy7ZghfRnE%2Fc4yH2TIPCNPkCwdxCh7wHdfrcN2VSyC%2FMx%2FHbA6TD7gLrEBjqkASsK61WTv4gEfAOb96XlSwYPP2cr9pKyCtu8av9ImeOfE4qTOD2Jyea7sD%2Bqxle0aD84rywIInFu3vQi3w52j16v2ZoWb8MhjLf09UU5KUyl1zP4f238YR59%2Bes2KrbhDOo3PCkbZeU1CBOp%2B%2FzPBivkqqdnHQhCzJbo229Lm9JdhDHovdarSY1K49T3r%2FS8uu7I%2BLFjzmACa%2FEi9tyIjQ3nL9ME&X-Amz-Signature=dad2e6f8e6a1decb5f132b76a9bfdc7bcd716e353103402ee2e3b888031371a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJLP67T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS74%2F%2BrVuHMkhkWYxwbYADMg2KrjmXH7RYrBBt3eKDcQIhAK3iITsbQz%2FLPZUUjfsFSPHTA5H0Jhh%2FsGDTCKNvYJ9LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxlcbVeQ0hTlGBBAUwq3ANO7M3JOVkVEH%2B9wv5YNw7OGPd5CHoZxd5P%2FTCnIJjQFHrPLAOyejiM9ROPmB%2F7zvBPoRV3YLTounnJZloSNcQQHMHjiRgk54ixoyd9HPQ11ifapkHz%2BmZsRiuEVuef3ZYj1%2Fb20RDHmy2RbYuhjRN%2FGGjcSoJUxDK5K0pt%2B4CkEO1xBSqBLpyKJfk%2Fn2VcNaqdQynpYdESYv3xjqCJSRvpBEDKgKsKCWcgjEkWjkgZDEyP4rvk1c0OFKggbrUGCmBEuosywJQACudOkkHfJUYJovt8nCoC2nHj9yAOt3RQnluTc7Q%2Fnou1H5DXzVlpV5%2FKC9%2BTbEr%2BesIxIDhYWD57EMl1cTLbYTHpOcDrEbCs9iTRIsd9zPszxHzrheXXSe86jPTeGrAtUWba4trgcrrVHfps34uRfAb2BbnoB6z7whJ%2FXXquyXZCMeTKj7ibw2OgX70xGmRy5s0Y8hkH3oV41Ma24p7HbpTi0tbU1JZoAWmwbvEp84sRg9UGgusKhIfJN10%2B9L5PmDgz2Z7anbFFdSkACiO7fTccNj8AShs6Z%2BLq6OqRjqG%2BAEFKKg8Gp%2BslYgZ3FNjEy7ZghfRnE%2Fc4yH2TIPCNPkCwdxCh7wHdfrcN2VSyC%2FMx%2FHbA6TD7gLrEBjqkASsK61WTv4gEfAOb96XlSwYPP2cr9pKyCtu8av9ImeOfE4qTOD2Jyea7sD%2Bqxle0aD84rywIInFu3vQi3w52j16v2ZoWb8MhjLf09UU5KUyl1zP4f238YR59%2Bes2KrbhDOo3PCkbZeU1CBOp%2B%2FzPBivkqqdnHQhCzJbo229Lm9JdhDHovdarSY1K49T3r%2FS8uu7I%2BLFjzmACa%2FEi9tyIjQ3nL9ME&X-Amz-Signature=64580f87ba04db8a1dbac69a7cfcca64b3a28fe712fd22c16b3e003f894707e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJLP67T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS74%2F%2BrVuHMkhkWYxwbYADMg2KrjmXH7RYrBBt3eKDcQIhAK3iITsbQz%2FLPZUUjfsFSPHTA5H0Jhh%2FsGDTCKNvYJ9LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxlcbVeQ0hTlGBBAUwq3ANO7M3JOVkVEH%2B9wv5YNw7OGPd5CHoZxd5P%2FTCnIJjQFHrPLAOyejiM9ROPmB%2F7zvBPoRV3YLTounnJZloSNcQQHMHjiRgk54ixoyd9HPQ11ifapkHz%2BmZsRiuEVuef3ZYj1%2Fb20RDHmy2RbYuhjRN%2FGGjcSoJUxDK5K0pt%2B4CkEO1xBSqBLpyKJfk%2Fn2VcNaqdQynpYdESYv3xjqCJSRvpBEDKgKsKCWcgjEkWjkgZDEyP4rvk1c0OFKggbrUGCmBEuosywJQACudOkkHfJUYJovt8nCoC2nHj9yAOt3RQnluTc7Q%2Fnou1H5DXzVlpV5%2FKC9%2BTbEr%2BesIxIDhYWD57EMl1cTLbYTHpOcDrEbCs9iTRIsd9zPszxHzrheXXSe86jPTeGrAtUWba4trgcrrVHfps34uRfAb2BbnoB6z7whJ%2FXXquyXZCMeTKj7ibw2OgX70xGmRy5s0Y8hkH3oV41Ma24p7HbpTi0tbU1JZoAWmwbvEp84sRg9UGgusKhIfJN10%2B9L5PmDgz2Z7anbFFdSkACiO7fTccNj8AShs6Z%2BLq6OqRjqG%2BAEFKKg8Gp%2BslYgZ3FNjEy7ZghfRnE%2Fc4yH2TIPCNPkCwdxCh7wHdfrcN2VSyC%2FMx%2FHbA6TD7gLrEBjqkASsK61WTv4gEfAOb96XlSwYPP2cr9pKyCtu8av9ImeOfE4qTOD2Jyea7sD%2Bqxle0aD84rywIInFu3vQi3w52j16v2ZoWb8MhjLf09UU5KUyl1zP4f238YR59%2Bes2KrbhDOo3PCkbZeU1CBOp%2B%2FzPBivkqqdnHQhCzJbo229Lm9JdhDHovdarSY1K49T3r%2FS8uu7I%2BLFjzmACa%2FEi9tyIjQ3nL9ME&X-Amz-Signature=1d34c3c131c310e09cb0eaab3904880e59afb111c2371aa2ef771e24a18c531f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJLP67T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS74%2F%2BrVuHMkhkWYxwbYADMg2KrjmXH7RYrBBt3eKDcQIhAK3iITsbQz%2FLPZUUjfsFSPHTA5H0Jhh%2FsGDTCKNvYJ9LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxlcbVeQ0hTlGBBAUwq3ANO7M3JOVkVEH%2B9wv5YNw7OGPd5CHoZxd5P%2FTCnIJjQFHrPLAOyejiM9ROPmB%2F7zvBPoRV3YLTounnJZloSNcQQHMHjiRgk54ixoyd9HPQ11ifapkHz%2BmZsRiuEVuef3ZYj1%2Fb20RDHmy2RbYuhjRN%2FGGjcSoJUxDK5K0pt%2B4CkEO1xBSqBLpyKJfk%2Fn2VcNaqdQynpYdESYv3xjqCJSRvpBEDKgKsKCWcgjEkWjkgZDEyP4rvk1c0OFKggbrUGCmBEuosywJQACudOkkHfJUYJovt8nCoC2nHj9yAOt3RQnluTc7Q%2Fnou1H5DXzVlpV5%2FKC9%2BTbEr%2BesIxIDhYWD57EMl1cTLbYTHpOcDrEbCs9iTRIsd9zPszxHzrheXXSe86jPTeGrAtUWba4trgcrrVHfps34uRfAb2BbnoB6z7whJ%2FXXquyXZCMeTKj7ibw2OgX70xGmRy5s0Y8hkH3oV41Ma24p7HbpTi0tbU1JZoAWmwbvEp84sRg9UGgusKhIfJN10%2B9L5PmDgz2Z7anbFFdSkACiO7fTccNj8AShs6Z%2BLq6OqRjqG%2BAEFKKg8Gp%2BslYgZ3FNjEy7ZghfRnE%2Fc4yH2TIPCNPkCwdxCh7wHdfrcN2VSyC%2FMx%2FHbA6TD7gLrEBjqkASsK61WTv4gEfAOb96XlSwYPP2cr9pKyCtu8av9ImeOfE4qTOD2Jyea7sD%2Bqxle0aD84rywIInFu3vQi3w52j16v2ZoWb8MhjLf09UU5KUyl1zP4f238YR59%2Bes2KrbhDOo3PCkbZeU1CBOp%2B%2FzPBivkqqdnHQhCzJbo229Lm9JdhDHovdarSY1K49T3r%2FS8uu7I%2BLFjzmACa%2FEi9tyIjQ3nL9ME&X-Amz-Signature=593bc7b1401ab9ca0e58fcc5600d3f91bbf88dd9b169d6f92b00e45e74a530e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

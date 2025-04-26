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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPUU6LA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpy4F0LNNtuloXLe6k3ifdVQ%2B22b6rLz4U4pT2d%2BwZ%2BAiA5kI8GNAT4uFEYo9BzdAwa8VzRsZWNLFIUj3Ha2B0fxyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOYvRprEifZXO3GvTKtwDdfrBM%2BE0EMQOc0bCi00UFaa5MrYcxB%2B7f92bH6Ao%2Ben4hMjLeIPYJA3udtl%2FHrAYT2uih6szBV76j7jI%2BABwWPkUz10Qa3YatD8ekTLhCOcG%2FQcHxQKCBVzRzqAiX%2FoNckjbNejYE3OHM6USyDFtNR%2BI%2F2U0nD%2FZLEcbpuq5d2tdFvXhG0K8JN9XZgXLujbCBkXoQjZJ1FynYKcg2q3%2B2g%2BQa4wKTSMIzjTJt1TVSYpFdVjo7p8wN9BUfGwNWx%2FNnpqqI2vQNBy2rak59l0BESR%2BVOQKCqcE6rcYtoO%2BdSAVIqmhbVRIRRPwO2zscrx%2FrRkXJ%2B5Am9KVTVsnBiQE9btzKW6rcqjBKEMa3wBK0qjUEggrs2qvQgGIC%2FZqoIxpNcTgcJ7J3%2FepFSZnISc%2FB8j0z%2BPg%2BEwHah7MrgY%2Bx%2B%2FAEbM%2BTbl3rGHAMe3EPTsga3osCEWJluj5YtgnDLCsC2XEf5Bv3Kpu%2B8vv2Ky7cAZwy7zbYYz6zgHApkgC87T3hFnPU5P9%2Fb8KJcJtBE2XBcKuoF6bm5SReEVusYOWlc1ofnKYLFB%2FEEjtdmnhRHPEBvg282R6m6O48%2BGC854nkf3NP0Ge%2FXCVG16FDVJKMIYrOQpSxbt0utGPCgcwsoSywAY6pgEiFZX20yqrdOS40glw5c3h104TzzGIapFnUPo9bb%2FYW0kiGmnsAd9Ao2y9s3666bhJ1nxh6Q4RHjYqV3z1Or8oTG6jOfFReKUjABTKCmUmaHTEBQbj%2BCHwLKwAoXw72yxvJMYtfahJJiAvyrWtJQOZX1d8tinDDnX8SmGAK2Y4ZC3TrXjDNZVrnzYEh7GJnjJRdk7GiLrtKpmF9LWjaQoI76rm37rR&X-Amz-Signature=ecccaed7d1675312227f29abad45b95558d1417402d27dcff3275c3edde2b68c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPUU6LA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpy4F0LNNtuloXLe6k3ifdVQ%2B22b6rLz4U4pT2d%2BwZ%2BAiA5kI8GNAT4uFEYo9BzdAwa8VzRsZWNLFIUj3Ha2B0fxyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOYvRprEifZXO3GvTKtwDdfrBM%2BE0EMQOc0bCi00UFaa5MrYcxB%2B7f92bH6Ao%2Ben4hMjLeIPYJA3udtl%2FHrAYT2uih6szBV76j7jI%2BABwWPkUz10Qa3YatD8ekTLhCOcG%2FQcHxQKCBVzRzqAiX%2FoNckjbNejYE3OHM6USyDFtNR%2BI%2F2U0nD%2FZLEcbpuq5d2tdFvXhG0K8JN9XZgXLujbCBkXoQjZJ1FynYKcg2q3%2B2g%2BQa4wKTSMIzjTJt1TVSYpFdVjo7p8wN9BUfGwNWx%2FNnpqqI2vQNBy2rak59l0BESR%2BVOQKCqcE6rcYtoO%2BdSAVIqmhbVRIRRPwO2zscrx%2FrRkXJ%2B5Am9KVTVsnBiQE9btzKW6rcqjBKEMa3wBK0qjUEggrs2qvQgGIC%2FZqoIxpNcTgcJ7J3%2FepFSZnISc%2FB8j0z%2BPg%2BEwHah7MrgY%2Bx%2B%2FAEbM%2BTbl3rGHAMe3EPTsga3osCEWJluj5YtgnDLCsC2XEf5Bv3Kpu%2B8vv2Ky7cAZwy7zbYYz6zgHApkgC87T3hFnPU5P9%2Fb8KJcJtBE2XBcKuoF6bm5SReEVusYOWlc1ofnKYLFB%2FEEjtdmnhRHPEBvg282R6m6O48%2BGC854nkf3NP0Ge%2FXCVG16FDVJKMIYrOQpSxbt0utGPCgcwsoSywAY6pgEiFZX20yqrdOS40glw5c3h104TzzGIapFnUPo9bb%2FYW0kiGmnsAd9Ao2y9s3666bhJ1nxh6Q4RHjYqV3z1Or8oTG6jOfFReKUjABTKCmUmaHTEBQbj%2BCHwLKwAoXw72yxvJMYtfahJJiAvyrWtJQOZX1d8tinDDnX8SmGAK2Y4ZC3TrXjDNZVrnzYEh7GJnjJRdk7GiLrtKpmF9LWjaQoI76rm37rR&X-Amz-Signature=f52bd1ed7d5f46c39a6bf43956063ae916b20c86dbf547e6b5c190facd9311f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPUU6LA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpy4F0LNNtuloXLe6k3ifdVQ%2B22b6rLz4U4pT2d%2BwZ%2BAiA5kI8GNAT4uFEYo9BzdAwa8VzRsZWNLFIUj3Ha2B0fxyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOYvRprEifZXO3GvTKtwDdfrBM%2BE0EMQOc0bCi00UFaa5MrYcxB%2B7f92bH6Ao%2Ben4hMjLeIPYJA3udtl%2FHrAYT2uih6szBV76j7jI%2BABwWPkUz10Qa3YatD8ekTLhCOcG%2FQcHxQKCBVzRzqAiX%2FoNckjbNejYE3OHM6USyDFtNR%2BI%2F2U0nD%2FZLEcbpuq5d2tdFvXhG0K8JN9XZgXLujbCBkXoQjZJ1FynYKcg2q3%2B2g%2BQa4wKTSMIzjTJt1TVSYpFdVjo7p8wN9BUfGwNWx%2FNnpqqI2vQNBy2rak59l0BESR%2BVOQKCqcE6rcYtoO%2BdSAVIqmhbVRIRRPwO2zscrx%2FrRkXJ%2B5Am9KVTVsnBiQE9btzKW6rcqjBKEMa3wBK0qjUEggrs2qvQgGIC%2FZqoIxpNcTgcJ7J3%2FepFSZnISc%2FB8j0z%2BPg%2BEwHah7MrgY%2Bx%2B%2FAEbM%2BTbl3rGHAMe3EPTsga3osCEWJluj5YtgnDLCsC2XEf5Bv3Kpu%2B8vv2Ky7cAZwy7zbYYz6zgHApkgC87T3hFnPU5P9%2Fb8KJcJtBE2XBcKuoF6bm5SReEVusYOWlc1ofnKYLFB%2FEEjtdmnhRHPEBvg282R6m6O48%2BGC854nkf3NP0Ge%2FXCVG16FDVJKMIYrOQpSxbt0utGPCgcwsoSywAY6pgEiFZX20yqrdOS40glw5c3h104TzzGIapFnUPo9bb%2FYW0kiGmnsAd9Ao2y9s3666bhJ1nxh6Q4RHjYqV3z1Or8oTG6jOfFReKUjABTKCmUmaHTEBQbj%2BCHwLKwAoXw72yxvJMYtfahJJiAvyrWtJQOZX1d8tinDDnX8SmGAK2Y4ZC3TrXjDNZVrnzYEh7GJnjJRdk7GiLrtKpmF9LWjaQoI76rm37rR&X-Amz-Signature=0e1206e5f8e1b818e7842b861d8fec11d717f811b490c0ace37da53aedbc6a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPUU6LA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpy4F0LNNtuloXLe6k3ifdVQ%2B22b6rLz4U4pT2d%2BwZ%2BAiA5kI8GNAT4uFEYo9BzdAwa8VzRsZWNLFIUj3Ha2B0fxyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOYvRprEifZXO3GvTKtwDdfrBM%2BE0EMQOc0bCi00UFaa5MrYcxB%2B7f92bH6Ao%2Ben4hMjLeIPYJA3udtl%2FHrAYT2uih6szBV76j7jI%2BABwWPkUz10Qa3YatD8ekTLhCOcG%2FQcHxQKCBVzRzqAiX%2FoNckjbNejYE3OHM6USyDFtNR%2BI%2F2U0nD%2FZLEcbpuq5d2tdFvXhG0K8JN9XZgXLujbCBkXoQjZJ1FynYKcg2q3%2B2g%2BQa4wKTSMIzjTJt1TVSYpFdVjo7p8wN9BUfGwNWx%2FNnpqqI2vQNBy2rak59l0BESR%2BVOQKCqcE6rcYtoO%2BdSAVIqmhbVRIRRPwO2zscrx%2FrRkXJ%2B5Am9KVTVsnBiQE9btzKW6rcqjBKEMa3wBK0qjUEggrs2qvQgGIC%2FZqoIxpNcTgcJ7J3%2FepFSZnISc%2FB8j0z%2BPg%2BEwHah7MrgY%2Bx%2B%2FAEbM%2BTbl3rGHAMe3EPTsga3osCEWJluj5YtgnDLCsC2XEf5Bv3Kpu%2B8vv2Ky7cAZwy7zbYYz6zgHApkgC87T3hFnPU5P9%2Fb8KJcJtBE2XBcKuoF6bm5SReEVusYOWlc1ofnKYLFB%2FEEjtdmnhRHPEBvg282R6m6O48%2BGC854nkf3NP0Ge%2FXCVG16FDVJKMIYrOQpSxbt0utGPCgcwsoSywAY6pgEiFZX20yqrdOS40glw5c3h104TzzGIapFnUPo9bb%2FYW0kiGmnsAd9Ao2y9s3666bhJ1nxh6Q4RHjYqV3z1Or8oTG6jOfFReKUjABTKCmUmaHTEBQbj%2BCHwLKwAoXw72yxvJMYtfahJJiAvyrWtJQOZX1d8tinDDnX8SmGAK2Y4ZC3TrXjDNZVrnzYEh7GJnjJRdk7GiLrtKpmF9LWjaQoI76rm37rR&X-Amz-Signature=e8d274933cba01203e67eca3f6904fe519479264f58dc908411f331cc2e440c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPUU6LA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpy4F0LNNtuloXLe6k3ifdVQ%2B22b6rLz4U4pT2d%2BwZ%2BAiA5kI8GNAT4uFEYo9BzdAwa8VzRsZWNLFIUj3Ha2B0fxyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOYvRprEifZXO3GvTKtwDdfrBM%2BE0EMQOc0bCi00UFaa5MrYcxB%2B7f92bH6Ao%2Ben4hMjLeIPYJA3udtl%2FHrAYT2uih6szBV76j7jI%2BABwWPkUz10Qa3YatD8ekTLhCOcG%2FQcHxQKCBVzRzqAiX%2FoNckjbNejYE3OHM6USyDFtNR%2BI%2F2U0nD%2FZLEcbpuq5d2tdFvXhG0K8JN9XZgXLujbCBkXoQjZJ1FynYKcg2q3%2B2g%2BQa4wKTSMIzjTJt1TVSYpFdVjo7p8wN9BUfGwNWx%2FNnpqqI2vQNBy2rak59l0BESR%2BVOQKCqcE6rcYtoO%2BdSAVIqmhbVRIRRPwO2zscrx%2FrRkXJ%2B5Am9KVTVsnBiQE9btzKW6rcqjBKEMa3wBK0qjUEggrs2qvQgGIC%2FZqoIxpNcTgcJ7J3%2FepFSZnISc%2FB8j0z%2BPg%2BEwHah7MrgY%2Bx%2B%2FAEbM%2BTbl3rGHAMe3EPTsga3osCEWJluj5YtgnDLCsC2XEf5Bv3Kpu%2B8vv2Ky7cAZwy7zbYYz6zgHApkgC87T3hFnPU5P9%2Fb8KJcJtBE2XBcKuoF6bm5SReEVusYOWlc1ofnKYLFB%2FEEjtdmnhRHPEBvg282R6m6O48%2BGC854nkf3NP0Ge%2FXCVG16FDVJKMIYrOQpSxbt0utGPCgcwsoSywAY6pgEiFZX20yqrdOS40glw5c3h104TzzGIapFnUPo9bb%2FYW0kiGmnsAd9Ao2y9s3666bhJ1nxh6Q4RHjYqV3z1Or8oTG6jOfFReKUjABTKCmUmaHTEBQbj%2BCHwLKwAoXw72yxvJMYtfahJJiAvyrWtJQOZX1d8tinDDnX8SmGAK2Y4ZC3TrXjDNZVrnzYEh7GJnjJRdk7GiLrtKpmF9LWjaQoI76rm37rR&X-Amz-Signature=c80aaa75441a1a37cae2490493f56fb27f45f63c8ca672ae1dd53cb9a2661442&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPUU6LA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpy4F0LNNtuloXLe6k3ifdVQ%2B22b6rLz4U4pT2d%2BwZ%2BAiA5kI8GNAT4uFEYo9BzdAwa8VzRsZWNLFIUj3Ha2B0fxyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOYvRprEifZXO3GvTKtwDdfrBM%2BE0EMQOc0bCi00UFaa5MrYcxB%2B7f92bH6Ao%2Ben4hMjLeIPYJA3udtl%2FHrAYT2uih6szBV76j7jI%2BABwWPkUz10Qa3YatD8ekTLhCOcG%2FQcHxQKCBVzRzqAiX%2FoNckjbNejYE3OHM6USyDFtNR%2BI%2F2U0nD%2FZLEcbpuq5d2tdFvXhG0K8JN9XZgXLujbCBkXoQjZJ1FynYKcg2q3%2B2g%2BQa4wKTSMIzjTJt1TVSYpFdVjo7p8wN9BUfGwNWx%2FNnpqqI2vQNBy2rak59l0BESR%2BVOQKCqcE6rcYtoO%2BdSAVIqmhbVRIRRPwO2zscrx%2FrRkXJ%2B5Am9KVTVsnBiQE9btzKW6rcqjBKEMa3wBK0qjUEggrs2qvQgGIC%2FZqoIxpNcTgcJ7J3%2FepFSZnISc%2FB8j0z%2BPg%2BEwHah7MrgY%2Bx%2B%2FAEbM%2BTbl3rGHAMe3EPTsga3osCEWJluj5YtgnDLCsC2XEf5Bv3Kpu%2B8vv2Ky7cAZwy7zbYYz6zgHApkgC87T3hFnPU5P9%2Fb8KJcJtBE2XBcKuoF6bm5SReEVusYOWlc1ofnKYLFB%2FEEjtdmnhRHPEBvg282R6m6O48%2BGC854nkf3NP0Ge%2FXCVG16FDVJKMIYrOQpSxbt0utGPCgcwsoSywAY6pgEiFZX20yqrdOS40glw5c3h104TzzGIapFnUPo9bb%2FYW0kiGmnsAd9Ao2y9s3666bhJ1nxh6Q4RHjYqV3z1Or8oTG6jOfFReKUjABTKCmUmaHTEBQbj%2BCHwLKwAoXw72yxvJMYtfahJJiAvyrWtJQOZX1d8tinDDnX8SmGAK2Y4ZC3TrXjDNZVrnzYEh7GJnjJRdk7GiLrtKpmF9LWjaQoI76rm37rR&X-Amz-Signature=823b08cd1b8c9c8cdab26b6b770be7dda6419175e5b5a97e7422b2d47f148518&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPUU6LA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpy4F0LNNtuloXLe6k3ifdVQ%2B22b6rLz4U4pT2d%2BwZ%2BAiA5kI8GNAT4uFEYo9BzdAwa8VzRsZWNLFIUj3Ha2B0fxyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOYvRprEifZXO3GvTKtwDdfrBM%2BE0EMQOc0bCi00UFaa5MrYcxB%2B7f92bH6Ao%2Ben4hMjLeIPYJA3udtl%2FHrAYT2uih6szBV76j7jI%2BABwWPkUz10Qa3YatD8ekTLhCOcG%2FQcHxQKCBVzRzqAiX%2FoNckjbNejYE3OHM6USyDFtNR%2BI%2F2U0nD%2FZLEcbpuq5d2tdFvXhG0K8JN9XZgXLujbCBkXoQjZJ1FynYKcg2q3%2B2g%2BQa4wKTSMIzjTJt1TVSYpFdVjo7p8wN9BUfGwNWx%2FNnpqqI2vQNBy2rak59l0BESR%2BVOQKCqcE6rcYtoO%2BdSAVIqmhbVRIRRPwO2zscrx%2FrRkXJ%2B5Am9KVTVsnBiQE9btzKW6rcqjBKEMa3wBK0qjUEggrs2qvQgGIC%2FZqoIxpNcTgcJ7J3%2FepFSZnISc%2FB8j0z%2BPg%2BEwHah7MrgY%2Bx%2B%2FAEbM%2BTbl3rGHAMe3EPTsga3osCEWJluj5YtgnDLCsC2XEf5Bv3Kpu%2B8vv2Ky7cAZwy7zbYYz6zgHApkgC87T3hFnPU5P9%2Fb8KJcJtBE2XBcKuoF6bm5SReEVusYOWlc1ofnKYLFB%2FEEjtdmnhRHPEBvg282R6m6O48%2BGC854nkf3NP0Ge%2FXCVG16FDVJKMIYrOQpSxbt0utGPCgcwsoSywAY6pgEiFZX20yqrdOS40glw5c3h104TzzGIapFnUPo9bb%2FYW0kiGmnsAd9Ao2y9s3666bhJ1nxh6Q4RHjYqV3z1Or8oTG6jOfFReKUjABTKCmUmaHTEBQbj%2BCHwLKwAoXw72yxvJMYtfahJJiAvyrWtJQOZX1d8tinDDnX8SmGAK2Y4ZC3TrXjDNZVrnzYEh7GJnjJRdk7GiLrtKpmF9LWjaQoI76rm37rR&X-Amz-Signature=55a6353ce911a951661e9e811fd3e3c28a89e2ab41ce03aa05527195d1aa3d62&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

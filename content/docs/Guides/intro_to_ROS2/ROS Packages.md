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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKFKA74%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCaKqSg%2Frmu0eemHYupgktBT%2F4HCcmsYPz%2BAD8XjCR5SwIhANnl8pyz29KEUqc5ALWBza8gaIckFiCVytzzJRU7GY0%2FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9i2E46HrS%2F8qdL54q3AO2%2FWb8OH93G5orCa7V%2Brzl93ZP5NxQ4iP1PKBkkkFp%2B6zIdEWKc7hCec3G7IKY36Cha6Oo7NXZv%2BVd8K6X2P8V9jAZIriiPW7kMugU1flSl5EAFf0xFz3qa2djqyAwFqBitnV%2B%2FVpTbP4Umcbs%2B77nGQ4F6fbeqewXVHfzNLGkneTvnNuo3jvzebCxsv25wozTKtNa2PYRDyGs%2B%2FD4%2BLxbzt9BogHkvnDVQXjlyZUB2EgCZoXgqfJqzfyU7ITCg70F48KohbI5ncXYys8N3pPNAa8FqP1bSjNUTw9TGOiqfVJ8nG9DBzRjmHHDxz1gMeKiPqtHuh8VM6YUsS6BVoF4cx5OirGsFrRobYn%2B9%2BV7e34GfW3MfIQTvTjr%2F%2FeUkPGHEKhSUQ%2BCW9HqDYNPVmnj5VJ2WGZXs%2FyPxstEI%2ByAMTwSpo2J%2F7tPdGdi5pC0ZoXQ44n4tFQPXre85t2DvP%2BBKHgtU5RoMhQtapdscwDit0PSlVMTXR%2BW7I9MYKye9cIdSUeIAbDzjHXEi4tbaacpPJg6YZ8j8AyQDXqAdPOtjlop0us7mr4foDmBw%2FLLtGUEUvWYJ9Hr4YzXyNL8Qc4CdRI6lf6pvUq5sZTa2y%2Beam9E8ggkQO7YwEqomDDEm9O9BjqkAcUT%2FgmnS0eRdNcVDdpDvjjqy7K43peKh9tcbylncvkv9B5OobwDhb%2FMHx3k8WjQDP2Y%2BIEX18Zy8hfthKhuANwTiqgOryJcdPpZ5pis5gbCSml%2FNCM1z6I9PD6VFLKJlYDVihLi5DFZKnz5dmaycYfL2grAfJGwwYwKzWZyNjNmkm6v9%2Fl3WNUwv3zvAjLRh8PJBcPRzZ8LVs5Kwkx1kzrWXxtQ&X-Amz-Signature=ecbefaf7c8f71bbdf3397b5522682a669943a4700078bab1ad233480e19de723&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKFKA74%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCaKqSg%2Frmu0eemHYupgktBT%2F4HCcmsYPz%2BAD8XjCR5SwIhANnl8pyz29KEUqc5ALWBza8gaIckFiCVytzzJRU7GY0%2FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9i2E46HrS%2F8qdL54q3AO2%2FWb8OH93G5orCa7V%2Brzl93ZP5NxQ4iP1PKBkkkFp%2B6zIdEWKc7hCec3G7IKY36Cha6Oo7NXZv%2BVd8K6X2P8V9jAZIriiPW7kMugU1flSl5EAFf0xFz3qa2djqyAwFqBitnV%2B%2FVpTbP4Umcbs%2B77nGQ4F6fbeqewXVHfzNLGkneTvnNuo3jvzebCxsv25wozTKtNa2PYRDyGs%2B%2FD4%2BLxbzt9BogHkvnDVQXjlyZUB2EgCZoXgqfJqzfyU7ITCg70F48KohbI5ncXYys8N3pPNAa8FqP1bSjNUTw9TGOiqfVJ8nG9DBzRjmHHDxz1gMeKiPqtHuh8VM6YUsS6BVoF4cx5OirGsFrRobYn%2B9%2BV7e34GfW3MfIQTvTjr%2F%2FeUkPGHEKhSUQ%2BCW9HqDYNPVmnj5VJ2WGZXs%2FyPxstEI%2ByAMTwSpo2J%2F7tPdGdi5pC0ZoXQ44n4tFQPXre85t2DvP%2BBKHgtU5RoMhQtapdscwDit0PSlVMTXR%2BW7I9MYKye9cIdSUeIAbDzjHXEi4tbaacpPJg6YZ8j8AyQDXqAdPOtjlop0us7mr4foDmBw%2FLLtGUEUvWYJ9Hr4YzXyNL8Qc4CdRI6lf6pvUq5sZTa2y%2Beam9E8ggkQO7YwEqomDDEm9O9BjqkAcUT%2FgmnS0eRdNcVDdpDvjjqy7K43peKh9tcbylncvkv9B5OobwDhb%2FMHx3k8WjQDP2Y%2BIEX18Zy8hfthKhuANwTiqgOryJcdPpZ5pis5gbCSml%2FNCM1z6I9PD6VFLKJlYDVihLi5DFZKnz5dmaycYfL2grAfJGwwYwKzWZyNjNmkm6v9%2Fl3WNUwv3zvAjLRh8PJBcPRzZ8LVs5Kwkx1kzrWXxtQ&X-Amz-Signature=0ea2a0769291c2c2581adca3a2eb204a133adb795d8579353fc66b48f30f97b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKFKA74%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCaKqSg%2Frmu0eemHYupgktBT%2F4HCcmsYPz%2BAD8XjCR5SwIhANnl8pyz29KEUqc5ALWBza8gaIckFiCVytzzJRU7GY0%2FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9i2E46HrS%2F8qdL54q3AO2%2FWb8OH93G5orCa7V%2Brzl93ZP5NxQ4iP1PKBkkkFp%2B6zIdEWKc7hCec3G7IKY36Cha6Oo7NXZv%2BVd8K6X2P8V9jAZIriiPW7kMugU1flSl5EAFf0xFz3qa2djqyAwFqBitnV%2B%2FVpTbP4Umcbs%2B77nGQ4F6fbeqewXVHfzNLGkneTvnNuo3jvzebCxsv25wozTKtNa2PYRDyGs%2B%2FD4%2BLxbzt9BogHkvnDVQXjlyZUB2EgCZoXgqfJqzfyU7ITCg70F48KohbI5ncXYys8N3pPNAa8FqP1bSjNUTw9TGOiqfVJ8nG9DBzRjmHHDxz1gMeKiPqtHuh8VM6YUsS6BVoF4cx5OirGsFrRobYn%2B9%2BV7e34GfW3MfIQTvTjr%2F%2FeUkPGHEKhSUQ%2BCW9HqDYNPVmnj5VJ2WGZXs%2FyPxstEI%2ByAMTwSpo2J%2F7tPdGdi5pC0ZoXQ44n4tFQPXre85t2DvP%2BBKHgtU5RoMhQtapdscwDit0PSlVMTXR%2BW7I9MYKye9cIdSUeIAbDzjHXEi4tbaacpPJg6YZ8j8AyQDXqAdPOtjlop0us7mr4foDmBw%2FLLtGUEUvWYJ9Hr4YzXyNL8Qc4CdRI6lf6pvUq5sZTa2y%2Beam9E8ggkQO7YwEqomDDEm9O9BjqkAcUT%2FgmnS0eRdNcVDdpDvjjqy7K43peKh9tcbylncvkv9B5OobwDhb%2FMHx3k8WjQDP2Y%2BIEX18Zy8hfthKhuANwTiqgOryJcdPpZ5pis5gbCSml%2FNCM1z6I9PD6VFLKJlYDVihLi5DFZKnz5dmaycYfL2grAfJGwwYwKzWZyNjNmkm6v9%2Fl3WNUwv3zvAjLRh8PJBcPRzZ8LVs5Kwkx1kzrWXxtQ&X-Amz-Signature=a5ca7e2dd227fa3a8e53dfa05a309b16dbdbeeafbc6dd96da0a7eca233eb51ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKFKA74%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCaKqSg%2Frmu0eemHYupgktBT%2F4HCcmsYPz%2BAD8XjCR5SwIhANnl8pyz29KEUqc5ALWBza8gaIckFiCVytzzJRU7GY0%2FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9i2E46HrS%2F8qdL54q3AO2%2FWb8OH93G5orCa7V%2Brzl93ZP5NxQ4iP1PKBkkkFp%2B6zIdEWKc7hCec3G7IKY36Cha6Oo7NXZv%2BVd8K6X2P8V9jAZIriiPW7kMugU1flSl5EAFf0xFz3qa2djqyAwFqBitnV%2B%2FVpTbP4Umcbs%2B77nGQ4F6fbeqewXVHfzNLGkneTvnNuo3jvzebCxsv25wozTKtNa2PYRDyGs%2B%2FD4%2BLxbzt9BogHkvnDVQXjlyZUB2EgCZoXgqfJqzfyU7ITCg70F48KohbI5ncXYys8N3pPNAa8FqP1bSjNUTw9TGOiqfVJ8nG9DBzRjmHHDxz1gMeKiPqtHuh8VM6YUsS6BVoF4cx5OirGsFrRobYn%2B9%2BV7e34GfW3MfIQTvTjr%2F%2FeUkPGHEKhSUQ%2BCW9HqDYNPVmnj5VJ2WGZXs%2FyPxstEI%2ByAMTwSpo2J%2F7tPdGdi5pC0ZoXQ44n4tFQPXre85t2DvP%2BBKHgtU5RoMhQtapdscwDit0PSlVMTXR%2BW7I9MYKye9cIdSUeIAbDzjHXEi4tbaacpPJg6YZ8j8AyQDXqAdPOtjlop0us7mr4foDmBw%2FLLtGUEUvWYJ9Hr4YzXyNL8Qc4CdRI6lf6pvUq5sZTa2y%2Beam9E8ggkQO7YwEqomDDEm9O9BjqkAcUT%2FgmnS0eRdNcVDdpDvjjqy7K43peKh9tcbylncvkv9B5OobwDhb%2FMHx3k8WjQDP2Y%2BIEX18Zy8hfthKhuANwTiqgOryJcdPpZ5pis5gbCSml%2FNCM1z6I9PD6VFLKJlYDVihLi5DFZKnz5dmaycYfL2grAfJGwwYwKzWZyNjNmkm6v9%2Fl3WNUwv3zvAjLRh8PJBcPRzZ8LVs5Kwkx1kzrWXxtQ&X-Amz-Signature=0d4a377887cc2609051764bedebb249c5a0008477a53f6ce7de6ae343d3a4414&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKFKA74%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCaKqSg%2Frmu0eemHYupgktBT%2F4HCcmsYPz%2BAD8XjCR5SwIhANnl8pyz29KEUqc5ALWBza8gaIckFiCVytzzJRU7GY0%2FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9i2E46HrS%2F8qdL54q3AO2%2FWb8OH93G5orCa7V%2Brzl93ZP5NxQ4iP1PKBkkkFp%2B6zIdEWKc7hCec3G7IKY36Cha6Oo7NXZv%2BVd8K6X2P8V9jAZIriiPW7kMugU1flSl5EAFf0xFz3qa2djqyAwFqBitnV%2B%2FVpTbP4Umcbs%2B77nGQ4F6fbeqewXVHfzNLGkneTvnNuo3jvzebCxsv25wozTKtNa2PYRDyGs%2B%2FD4%2BLxbzt9BogHkvnDVQXjlyZUB2EgCZoXgqfJqzfyU7ITCg70F48KohbI5ncXYys8N3pPNAa8FqP1bSjNUTw9TGOiqfVJ8nG9DBzRjmHHDxz1gMeKiPqtHuh8VM6YUsS6BVoF4cx5OirGsFrRobYn%2B9%2BV7e34GfW3MfIQTvTjr%2F%2FeUkPGHEKhSUQ%2BCW9HqDYNPVmnj5VJ2WGZXs%2FyPxstEI%2ByAMTwSpo2J%2F7tPdGdi5pC0ZoXQ44n4tFQPXre85t2DvP%2BBKHgtU5RoMhQtapdscwDit0PSlVMTXR%2BW7I9MYKye9cIdSUeIAbDzjHXEi4tbaacpPJg6YZ8j8AyQDXqAdPOtjlop0us7mr4foDmBw%2FLLtGUEUvWYJ9Hr4YzXyNL8Qc4CdRI6lf6pvUq5sZTa2y%2Beam9E8ggkQO7YwEqomDDEm9O9BjqkAcUT%2FgmnS0eRdNcVDdpDvjjqy7K43peKh9tcbylncvkv9B5OobwDhb%2FMHx3k8WjQDP2Y%2BIEX18Zy8hfthKhuANwTiqgOryJcdPpZ5pis5gbCSml%2FNCM1z6I9PD6VFLKJlYDVihLi5DFZKnz5dmaycYfL2grAfJGwwYwKzWZyNjNmkm6v9%2Fl3WNUwv3zvAjLRh8PJBcPRzZ8LVs5Kwkx1kzrWXxtQ&X-Amz-Signature=b673c287e07ead7120734631aa72166542f1547cdd0938f3254502078a714a18&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKFKA74%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCaKqSg%2Frmu0eemHYupgktBT%2F4HCcmsYPz%2BAD8XjCR5SwIhANnl8pyz29KEUqc5ALWBza8gaIckFiCVytzzJRU7GY0%2FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9i2E46HrS%2F8qdL54q3AO2%2FWb8OH93G5orCa7V%2Brzl93ZP5NxQ4iP1PKBkkkFp%2B6zIdEWKc7hCec3G7IKY36Cha6Oo7NXZv%2BVd8K6X2P8V9jAZIriiPW7kMugU1flSl5EAFf0xFz3qa2djqyAwFqBitnV%2B%2FVpTbP4Umcbs%2B77nGQ4F6fbeqewXVHfzNLGkneTvnNuo3jvzebCxsv25wozTKtNa2PYRDyGs%2B%2FD4%2BLxbzt9BogHkvnDVQXjlyZUB2EgCZoXgqfJqzfyU7ITCg70F48KohbI5ncXYys8N3pPNAa8FqP1bSjNUTw9TGOiqfVJ8nG9DBzRjmHHDxz1gMeKiPqtHuh8VM6YUsS6BVoF4cx5OirGsFrRobYn%2B9%2BV7e34GfW3MfIQTvTjr%2F%2FeUkPGHEKhSUQ%2BCW9HqDYNPVmnj5VJ2WGZXs%2FyPxstEI%2ByAMTwSpo2J%2F7tPdGdi5pC0ZoXQ44n4tFQPXre85t2DvP%2BBKHgtU5RoMhQtapdscwDit0PSlVMTXR%2BW7I9MYKye9cIdSUeIAbDzjHXEi4tbaacpPJg6YZ8j8AyQDXqAdPOtjlop0us7mr4foDmBw%2FLLtGUEUvWYJ9Hr4YzXyNL8Qc4CdRI6lf6pvUq5sZTa2y%2Beam9E8ggkQO7YwEqomDDEm9O9BjqkAcUT%2FgmnS0eRdNcVDdpDvjjqy7K43peKh9tcbylncvkv9B5OobwDhb%2FMHx3k8WjQDP2Y%2BIEX18Zy8hfthKhuANwTiqgOryJcdPpZ5pis5gbCSml%2FNCM1z6I9PD6VFLKJlYDVihLi5DFZKnz5dmaycYfL2grAfJGwwYwKzWZyNjNmkm6v9%2Fl3WNUwv3zvAjLRh8PJBcPRzZ8LVs5Kwkx1kzrWXxtQ&X-Amz-Signature=d3c1d452f75e83919bc24a1eb19934000978cf61712d0f68de2c91f892470a69&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKFKA74%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCaKqSg%2Frmu0eemHYupgktBT%2F4HCcmsYPz%2BAD8XjCR5SwIhANnl8pyz29KEUqc5ALWBza8gaIckFiCVytzzJRU7GY0%2FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9i2E46HrS%2F8qdL54q3AO2%2FWb8OH93G5orCa7V%2Brzl93ZP5NxQ4iP1PKBkkkFp%2B6zIdEWKc7hCec3G7IKY36Cha6Oo7NXZv%2BVd8K6X2P8V9jAZIriiPW7kMugU1flSl5EAFf0xFz3qa2djqyAwFqBitnV%2B%2FVpTbP4Umcbs%2B77nGQ4F6fbeqewXVHfzNLGkneTvnNuo3jvzebCxsv25wozTKtNa2PYRDyGs%2B%2FD4%2BLxbzt9BogHkvnDVQXjlyZUB2EgCZoXgqfJqzfyU7ITCg70F48KohbI5ncXYys8N3pPNAa8FqP1bSjNUTw9TGOiqfVJ8nG9DBzRjmHHDxz1gMeKiPqtHuh8VM6YUsS6BVoF4cx5OirGsFrRobYn%2B9%2BV7e34GfW3MfIQTvTjr%2F%2FeUkPGHEKhSUQ%2BCW9HqDYNPVmnj5VJ2WGZXs%2FyPxstEI%2ByAMTwSpo2J%2F7tPdGdi5pC0ZoXQ44n4tFQPXre85t2DvP%2BBKHgtU5RoMhQtapdscwDit0PSlVMTXR%2BW7I9MYKye9cIdSUeIAbDzjHXEi4tbaacpPJg6YZ8j8AyQDXqAdPOtjlop0us7mr4foDmBw%2FLLtGUEUvWYJ9Hr4YzXyNL8Qc4CdRI6lf6pvUq5sZTa2y%2Beam9E8ggkQO7YwEqomDDEm9O9BjqkAcUT%2FgmnS0eRdNcVDdpDvjjqy7K43peKh9tcbylncvkv9B5OobwDhb%2FMHx3k8WjQDP2Y%2BIEX18Zy8hfthKhuANwTiqgOryJcdPpZ5pis5gbCSml%2FNCM1z6I9PD6VFLKJlYDVihLi5DFZKnz5dmaycYfL2grAfJGwwYwKzWZyNjNmkm6v9%2Fl3WNUwv3zvAjLRh8PJBcPRzZ8LVs5Kwkx1kzrWXxtQ&X-Amz-Signature=8900b33a791b42229df45ce11e6045233b829886486b08e22f66bb4cc58270de&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUXDXF6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDYc1kcJj5eOw1acM36u5xH7lenW2ztXYVNu2ZqkabTMAIgEOGaGdF0SgD1RqYhRhS3HVnmwjiMx%2B49kbzobHI1HkAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT2NHH2c0B%2BFUx7sSrcA7i%2B%2F3E8Q56c0yY5BBnME5BI7C5QHUcWeB5hSZTBCEP0lzWQhRqndVNCx9D%2Bv8E%2BOe1gXjbBOPS%2FwboM8WRbSmc6A1XI0EovWvrgvCHlX0RTH9bkDqUPmA51EoczAoegY1Xubg4hlaAyvF6BmUTkE%2BFJKRccOXrTnJvhfyxXETcDrk8Gw1Afu8cxZzXe%2FZ5Yxxz6226QBsRzF9yC1Bram2%2Fvj6vfSYGbra7FuFSn3M217zxlu5Wj1nJqW84qsesuwdPF5J6MNAtzh1Xz%2BmCO9KRq%2BvPvqNxcCbg2diAgUx0Qw8ct7FSrPQdXsRVHoauPPs%2Fk9cfZB8Lw1Z00CcZmvB%2FULJMQPK6N%2Bz3vD3BHpBHYO35OSbCUxGoDlBICMXRXSXSBVUEz5wGjNn678Pl0zyVg60W%2BASDdgDDO%2F4K%2Byf7Mp5QbwlKut6JH04rygwN2SB3xJIDfWbftdW4g4GHXZbkH4XxojGygP4Wf2XQJxnLSapKaNULdO%2FfWgs8GKmpFfWKLdXLBHVLbdjrZtgndL%2F4b%2B%2F0e36wC4SkYg5mqCyFBEdFJJXluPKXxMUsd%2FUDzWkcNA%2BcY3YIHnX91r6qO%2BDtR5h3inP9slFRTmPC2jy6e3jsfcdSKsn49SLC6MOuwu8EGOqUBhdKjX0mikIwlMuUtm4MwJORAVISvdLZqGT8l9cZAZVQkuBlFzv1h5j%2BYycmkZzN%2B11yMOdDZkm26mvM3YXDn%2FcVG%2FjP81RbKvytRSGXEgwqp44YW6qVgETTFUTH0JnR6XAAQHPFOdn3yAzFt07yF1BnQ%2BjIXGHP6GR9Zab3ccYrQHfdxpCRN83W3h8TRx%2B5CSVaFXmZRSZdNin5C3psCy%2FIAlN%2BV&X-Amz-Signature=cb08d590fe2be05f7ae49838f8b5f0ed5ed48199c149e269efb46ff2cfb5ea54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUXDXF6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDYc1kcJj5eOw1acM36u5xH7lenW2ztXYVNu2ZqkabTMAIgEOGaGdF0SgD1RqYhRhS3HVnmwjiMx%2B49kbzobHI1HkAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT2NHH2c0B%2BFUx7sSrcA7i%2B%2F3E8Q56c0yY5BBnME5BI7C5QHUcWeB5hSZTBCEP0lzWQhRqndVNCx9D%2Bv8E%2BOe1gXjbBOPS%2FwboM8WRbSmc6A1XI0EovWvrgvCHlX0RTH9bkDqUPmA51EoczAoegY1Xubg4hlaAyvF6BmUTkE%2BFJKRccOXrTnJvhfyxXETcDrk8Gw1Afu8cxZzXe%2FZ5Yxxz6226QBsRzF9yC1Bram2%2Fvj6vfSYGbra7FuFSn3M217zxlu5Wj1nJqW84qsesuwdPF5J6MNAtzh1Xz%2BmCO9KRq%2BvPvqNxcCbg2diAgUx0Qw8ct7FSrPQdXsRVHoauPPs%2Fk9cfZB8Lw1Z00CcZmvB%2FULJMQPK6N%2Bz3vD3BHpBHYO35OSbCUxGoDlBICMXRXSXSBVUEz5wGjNn678Pl0zyVg60W%2BASDdgDDO%2F4K%2Byf7Mp5QbwlKut6JH04rygwN2SB3xJIDfWbftdW4g4GHXZbkH4XxojGygP4Wf2XQJxnLSapKaNULdO%2FfWgs8GKmpFfWKLdXLBHVLbdjrZtgndL%2F4b%2B%2F0e36wC4SkYg5mqCyFBEdFJJXluPKXxMUsd%2FUDzWkcNA%2BcY3YIHnX91r6qO%2BDtR5h3inP9slFRTmPC2jy6e3jsfcdSKsn49SLC6MOuwu8EGOqUBhdKjX0mikIwlMuUtm4MwJORAVISvdLZqGT8l9cZAZVQkuBlFzv1h5j%2BYycmkZzN%2B11yMOdDZkm26mvM3YXDn%2FcVG%2FjP81RbKvytRSGXEgwqp44YW6qVgETTFUTH0JnR6XAAQHPFOdn3yAzFt07yF1BnQ%2BjIXGHP6GR9Zab3ccYrQHfdxpCRN83W3h8TRx%2B5CSVaFXmZRSZdNin5C3psCy%2FIAlN%2BV&X-Amz-Signature=f6d7a5e0f934b1a3382615efd124e89bc1094927895258ca39ea6a4f5ed9a2b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUXDXF6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDYc1kcJj5eOw1acM36u5xH7lenW2ztXYVNu2ZqkabTMAIgEOGaGdF0SgD1RqYhRhS3HVnmwjiMx%2B49kbzobHI1HkAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT2NHH2c0B%2BFUx7sSrcA7i%2B%2F3E8Q56c0yY5BBnME5BI7C5QHUcWeB5hSZTBCEP0lzWQhRqndVNCx9D%2Bv8E%2BOe1gXjbBOPS%2FwboM8WRbSmc6A1XI0EovWvrgvCHlX0RTH9bkDqUPmA51EoczAoegY1Xubg4hlaAyvF6BmUTkE%2BFJKRccOXrTnJvhfyxXETcDrk8Gw1Afu8cxZzXe%2FZ5Yxxz6226QBsRzF9yC1Bram2%2Fvj6vfSYGbra7FuFSn3M217zxlu5Wj1nJqW84qsesuwdPF5J6MNAtzh1Xz%2BmCO9KRq%2BvPvqNxcCbg2diAgUx0Qw8ct7FSrPQdXsRVHoauPPs%2Fk9cfZB8Lw1Z00CcZmvB%2FULJMQPK6N%2Bz3vD3BHpBHYO35OSbCUxGoDlBICMXRXSXSBVUEz5wGjNn678Pl0zyVg60W%2BASDdgDDO%2F4K%2Byf7Mp5QbwlKut6JH04rygwN2SB3xJIDfWbftdW4g4GHXZbkH4XxojGygP4Wf2XQJxnLSapKaNULdO%2FfWgs8GKmpFfWKLdXLBHVLbdjrZtgndL%2F4b%2B%2F0e36wC4SkYg5mqCyFBEdFJJXluPKXxMUsd%2FUDzWkcNA%2BcY3YIHnX91r6qO%2BDtR5h3inP9slFRTmPC2jy6e3jsfcdSKsn49SLC6MOuwu8EGOqUBhdKjX0mikIwlMuUtm4MwJORAVISvdLZqGT8l9cZAZVQkuBlFzv1h5j%2BYycmkZzN%2B11yMOdDZkm26mvM3YXDn%2FcVG%2FjP81RbKvytRSGXEgwqp44YW6qVgETTFUTH0JnR6XAAQHPFOdn3yAzFt07yF1BnQ%2BjIXGHP6GR9Zab3ccYrQHfdxpCRN83W3h8TRx%2B5CSVaFXmZRSZdNin5C3psCy%2FIAlN%2BV&X-Amz-Signature=8e61d5a651671c62ef25ef3cfa5f392906f78711e96484545f7cb60e887f9a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUXDXF6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDYc1kcJj5eOw1acM36u5xH7lenW2ztXYVNu2ZqkabTMAIgEOGaGdF0SgD1RqYhRhS3HVnmwjiMx%2B49kbzobHI1HkAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT2NHH2c0B%2BFUx7sSrcA7i%2B%2F3E8Q56c0yY5BBnME5BI7C5QHUcWeB5hSZTBCEP0lzWQhRqndVNCx9D%2Bv8E%2BOe1gXjbBOPS%2FwboM8WRbSmc6A1XI0EovWvrgvCHlX0RTH9bkDqUPmA51EoczAoegY1Xubg4hlaAyvF6BmUTkE%2BFJKRccOXrTnJvhfyxXETcDrk8Gw1Afu8cxZzXe%2FZ5Yxxz6226QBsRzF9yC1Bram2%2Fvj6vfSYGbra7FuFSn3M217zxlu5Wj1nJqW84qsesuwdPF5J6MNAtzh1Xz%2BmCO9KRq%2BvPvqNxcCbg2diAgUx0Qw8ct7FSrPQdXsRVHoauPPs%2Fk9cfZB8Lw1Z00CcZmvB%2FULJMQPK6N%2Bz3vD3BHpBHYO35OSbCUxGoDlBICMXRXSXSBVUEz5wGjNn678Pl0zyVg60W%2BASDdgDDO%2F4K%2Byf7Mp5QbwlKut6JH04rygwN2SB3xJIDfWbftdW4g4GHXZbkH4XxojGygP4Wf2XQJxnLSapKaNULdO%2FfWgs8GKmpFfWKLdXLBHVLbdjrZtgndL%2F4b%2B%2F0e36wC4SkYg5mqCyFBEdFJJXluPKXxMUsd%2FUDzWkcNA%2BcY3YIHnX91r6qO%2BDtR5h3inP9slFRTmPC2jy6e3jsfcdSKsn49SLC6MOuwu8EGOqUBhdKjX0mikIwlMuUtm4MwJORAVISvdLZqGT8l9cZAZVQkuBlFzv1h5j%2BYycmkZzN%2B11yMOdDZkm26mvM3YXDn%2FcVG%2FjP81RbKvytRSGXEgwqp44YW6qVgETTFUTH0JnR6XAAQHPFOdn3yAzFt07yF1BnQ%2BjIXGHP6GR9Zab3ccYrQHfdxpCRN83W3h8TRx%2B5CSVaFXmZRSZdNin5C3psCy%2FIAlN%2BV&X-Amz-Signature=6c7eff07d3880bfc0d8eb950d63ea757c37833120857628d7f1cc3fa221c6730&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUXDXF6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDYc1kcJj5eOw1acM36u5xH7lenW2ztXYVNu2ZqkabTMAIgEOGaGdF0SgD1RqYhRhS3HVnmwjiMx%2B49kbzobHI1HkAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT2NHH2c0B%2BFUx7sSrcA7i%2B%2F3E8Q56c0yY5BBnME5BI7C5QHUcWeB5hSZTBCEP0lzWQhRqndVNCx9D%2Bv8E%2BOe1gXjbBOPS%2FwboM8WRbSmc6A1XI0EovWvrgvCHlX0RTH9bkDqUPmA51EoczAoegY1Xubg4hlaAyvF6BmUTkE%2BFJKRccOXrTnJvhfyxXETcDrk8Gw1Afu8cxZzXe%2FZ5Yxxz6226QBsRzF9yC1Bram2%2Fvj6vfSYGbra7FuFSn3M217zxlu5Wj1nJqW84qsesuwdPF5J6MNAtzh1Xz%2BmCO9KRq%2BvPvqNxcCbg2diAgUx0Qw8ct7FSrPQdXsRVHoauPPs%2Fk9cfZB8Lw1Z00CcZmvB%2FULJMQPK6N%2Bz3vD3BHpBHYO35OSbCUxGoDlBICMXRXSXSBVUEz5wGjNn678Pl0zyVg60W%2BASDdgDDO%2F4K%2Byf7Mp5QbwlKut6JH04rygwN2SB3xJIDfWbftdW4g4GHXZbkH4XxojGygP4Wf2XQJxnLSapKaNULdO%2FfWgs8GKmpFfWKLdXLBHVLbdjrZtgndL%2F4b%2B%2F0e36wC4SkYg5mqCyFBEdFJJXluPKXxMUsd%2FUDzWkcNA%2BcY3YIHnX91r6qO%2BDtR5h3inP9slFRTmPC2jy6e3jsfcdSKsn49SLC6MOuwu8EGOqUBhdKjX0mikIwlMuUtm4MwJORAVISvdLZqGT8l9cZAZVQkuBlFzv1h5j%2BYycmkZzN%2B11yMOdDZkm26mvM3YXDn%2FcVG%2FjP81RbKvytRSGXEgwqp44YW6qVgETTFUTH0JnR6XAAQHPFOdn3yAzFt07yF1BnQ%2BjIXGHP6GR9Zab3ccYrQHfdxpCRN83W3h8TRx%2B5CSVaFXmZRSZdNin5C3psCy%2FIAlN%2BV&X-Amz-Signature=a6f948fbe26fe4bbe0a5d2aef5fd76b54bad341df0e65ba7b5ffad7b861f9f18&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUXDXF6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDYc1kcJj5eOw1acM36u5xH7lenW2ztXYVNu2ZqkabTMAIgEOGaGdF0SgD1RqYhRhS3HVnmwjiMx%2B49kbzobHI1HkAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT2NHH2c0B%2BFUx7sSrcA7i%2B%2F3E8Q56c0yY5BBnME5BI7C5QHUcWeB5hSZTBCEP0lzWQhRqndVNCx9D%2Bv8E%2BOe1gXjbBOPS%2FwboM8WRbSmc6A1XI0EovWvrgvCHlX0RTH9bkDqUPmA51EoczAoegY1Xubg4hlaAyvF6BmUTkE%2BFJKRccOXrTnJvhfyxXETcDrk8Gw1Afu8cxZzXe%2FZ5Yxxz6226QBsRzF9yC1Bram2%2Fvj6vfSYGbra7FuFSn3M217zxlu5Wj1nJqW84qsesuwdPF5J6MNAtzh1Xz%2BmCO9KRq%2BvPvqNxcCbg2diAgUx0Qw8ct7FSrPQdXsRVHoauPPs%2Fk9cfZB8Lw1Z00CcZmvB%2FULJMQPK6N%2Bz3vD3BHpBHYO35OSbCUxGoDlBICMXRXSXSBVUEz5wGjNn678Pl0zyVg60W%2BASDdgDDO%2F4K%2Byf7Mp5QbwlKut6JH04rygwN2SB3xJIDfWbftdW4g4GHXZbkH4XxojGygP4Wf2XQJxnLSapKaNULdO%2FfWgs8GKmpFfWKLdXLBHVLbdjrZtgndL%2F4b%2B%2F0e36wC4SkYg5mqCyFBEdFJJXluPKXxMUsd%2FUDzWkcNA%2BcY3YIHnX91r6qO%2BDtR5h3inP9slFRTmPC2jy6e3jsfcdSKsn49SLC6MOuwu8EGOqUBhdKjX0mikIwlMuUtm4MwJORAVISvdLZqGT8l9cZAZVQkuBlFzv1h5j%2BYycmkZzN%2B11yMOdDZkm26mvM3YXDn%2FcVG%2FjP81RbKvytRSGXEgwqp44YW6qVgETTFUTH0JnR6XAAQHPFOdn3yAzFt07yF1BnQ%2BjIXGHP6GR9Zab3ccYrQHfdxpCRN83W3h8TRx%2B5CSVaFXmZRSZdNin5C3psCy%2FIAlN%2BV&X-Amz-Signature=fbc2e27fdc8eedc5b0d1f71bd922c5fbb34066b6feee926f0157743fec84d8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUXDXF6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDYc1kcJj5eOw1acM36u5xH7lenW2ztXYVNu2ZqkabTMAIgEOGaGdF0SgD1RqYhRhS3HVnmwjiMx%2B49kbzobHI1HkAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT2NHH2c0B%2BFUx7sSrcA7i%2B%2F3E8Q56c0yY5BBnME5BI7C5QHUcWeB5hSZTBCEP0lzWQhRqndVNCx9D%2Bv8E%2BOe1gXjbBOPS%2FwboM8WRbSmc6A1XI0EovWvrgvCHlX0RTH9bkDqUPmA51EoczAoegY1Xubg4hlaAyvF6BmUTkE%2BFJKRccOXrTnJvhfyxXETcDrk8Gw1Afu8cxZzXe%2FZ5Yxxz6226QBsRzF9yC1Bram2%2Fvj6vfSYGbra7FuFSn3M217zxlu5Wj1nJqW84qsesuwdPF5J6MNAtzh1Xz%2BmCO9KRq%2BvPvqNxcCbg2diAgUx0Qw8ct7FSrPQdXsRVHoauPPs%2Fk9cfZB8Lw1Z00CcZmvB%2FULJMQPK6N%2Bz3vD3BHpBHYO35OSbCUxGoDlBICMXRXSXSBVUEz5wGjNn678Pl0zyVg60W%2BASDdgDDO%2F4K%2Byf7Mp5QbwlKut6JH04rygwN2SB3xJIDfWbftdW4g4GHXZbkH4XxojGygP4Wf2XQJxnLSapKaNULdO%2FfWgs8GKmpFfWKLdXLBHVLbdjrZtgndL%2F4b%2B%2F0e36wC4SkYg5mqCyFBEdFJJXluPKXxMUsd%2FUDzWkcNA%2BcY3YIHnX91r6qO%2BDtR5h3inP9slFRTmPC2jy6e3jsfcdSKsn49SLC6MOuwu8EGOqUBhdKjX0mikIwlMuUtm4MwJORAVISvdLZqGT8l9cZAZVQkuBlFzv1h5j%2BYycmkZzN%2B11yMOdDZkm26mvM3YXDn%2FcVG%2FjP81RbKvytRSGXEgwqp44YW6qVgETTFUTH0JnR6XAAQHPFOdn3yAzFt07yF1BnQ%2BjIXGHP6GR9Zab3ccYrQHfdxpCRN83W3h8TRx%2B5CSVaFXmZRSZdNin5C3psCy%2FIAlN%2BV&X-Amz-Signature=a38b7b58384885d2abfb75cd5355bce4dd2e68bbea04243b5a817610ddfde705&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

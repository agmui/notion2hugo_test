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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRYY5PU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGNvaD00otqWLFfGPTME18OQsnijcnOkEjggC%2FHBy7QIhAOPuiQA4aG6nMoa4o7rRmwOtifKJXvbpjRA0DTCuXMAeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfPqyw8lp0PsVdTbMq3AOCN5W0VXBtqDp1%2FrNfv3G9WAK2WSd3ss1R%2FFTeE7LvPwC4zncv6NEMKZ5ule%2FFLc88JUsAmVyf%2BH%2Fqu7UpR7IZMwdat9t7UK%2BQ8uU%2Fmg6qmQMAHpjLQzRD6YYETl7cwHWSsjwBcexjFeaffB59QaaMT0TzZXmp8dAGngYZLCPlUwBPM5Nw%2F7chlit3nOdXCMNMMNQGXAAm%2FzzS7NsKGT542Ia77pEtabyeeKZa%2BZYPNejeCygC%2Binsq47z9Y15Mr9wKQ19VPQh9Mk6XdqCNksTQ3MJpKpGhoCIvwonnv5TX4VfhWv4Ftpf9KxOkK6k%2BzwIpGuXzC4RYqE5keK0PpOtlwQYjmp6W6MgqQoO19LvqvXFlWKrcVopCogly6NF2DvNvsc8sHnKV7y3e3Xnx9qWsr2duNWOqGYMgDwZNu16%2Bk67uDOuRQSKhfdp7aK0ANj4WHEq83qOsDd1it%2Bz6%2BNxEUDRcGQUZjtZ7XnedIP%2FzP7rruT5i04t2P6anscNoLuq%2BZMDdOoaWR6%2FLKjWi1u0KiTdKOR5h8pLH0ji1COakE%2FiESLP4KeJjCKrUXkorrsB1O8re%2BMBo6jsz9TLqH4oec92TThD0rwh%2Fu2EoZ6DA1Dcz9bVl8bPvfQVljD2h93CBjqkAZmPt5gM0mkLVGULJTiLiNWhqERUjnC3PYsULhzSFbu%2B4QuDqNTOnrDVaXtlGhdj5zpdY7iZbNeSIiKvzJaVwCzTJsGaC%2BX38jUmMhI86HH%2BjcOpIwG1tLon4JOd%2FldK0U8smzomJiiOkvrr9yJaExxJjx1rmTbniNV9grF%2F8Hs9EEPq5rl%2F22zKKst7GNwJZ3mm7jpkqZRFyUCHkCksFrxVJ9S5&X-Amz-Signature=457683fe3e397ed19e354c18ee5c359cafe5a7828460944905851875ad2f70fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRYY5PU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGNvaD00otqWLFfGPTME18OQsnijcnOkEjggC%2FHBy7QIhAOPuiQA4aG6nMoa4o7rRmwOtifKJXvbpjRA0DTCuXMAeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfPqyw8lp0PsVdTbMq3AOCN5W0VXBtqDp1%2FrNfv3G9WAK2WSd3ss1R%2FFTeE7LvPwC4zncv6NEMKZ5ule%2FFLc88JUsAmVyf%2BH%2Fqu7UpR7IZMwdat9t7UK%2BQ8uU%2Fmg6qmQMAHpjLQzRD6YYETl7cwHWSsjwBcexjFeaffB59QaaMT0TzZXmp8dAGngYZLCPlUwBPM5Nw%2F7chlit3nOdXCMNMMNQGXAAm%2FzzS7NsKGT542Ia77pEtabyeeKZa%2BZYPNejeCygC%2Binsq47z9Y15Mr9wKQ19VPQh9Mk6XdqCNksTQ3MJpKpGhoCIvwonnv5TX4VfhWv4Ftpf9KxOkK6k%2BzwIpGuXzC4RYqE5keK0PpOtlwQYjmp6W6MgqQoO19LvqvXFlWKrcVopCogly6NF2DvNvsc8sHnKV7y3e3Xnx9qWsr2duNWOqGYMgDwZNu16%2Bk67uDOuRQSKhfdp7aK0ANj4WHEq83qOsDd1it%2Bz6%2BNxEUDRcGQUZjtZ7XnedIP%2FzP7rruT5i04t2P6anscNoLuq%2BZMDdOoaWR6%2FLKjWi1u0KiTdKOR5h8pLH0ji1COakE%2FiESLP4KeJjCKrUXkorrsB1O8re%2BMBo6jsz9TLqH4oec92TThD0rwh%2Fu2EoZ6DA1Dcz9bVl8bPvfQVljD2h93CBjqkAZmPt5gM0mkLVGULJTiLiNWhqERUjnC3PYsULhzSFbu%2B4QuDqNTOnrDVaXtlGhdj5zpdY7iZbNeSIiKvzJaVwCzTJsGaC%2BX38jUmMhI86HH%2BjcOpIwG1tLon4JOd%2FldK0U8smzomJiiOkvrr9yJaExxJjx1rmTbniNV9grF%2F8Hs9EEPq5rl%2F22zKKst7GNwJZ3mm7jpkqZRFyUCHkCksFrxVJ9S5&X-Amz-Signature=d2b37ab83a5674c487c04bd6f5ec81b0cf1e62da3faee8fe38d06c21562d6000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRYY5PU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGNvaD00otqWLFfGPTME18OQsnijcnOkEjggC%2FHBy7QIhAOPuiQA4aG6nMoa4o7rRmwOtifKJXvbpjRA0DTCuXMAeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfPqyw8lp0PsVdTbMq3AOCN5W0VXBtqDp1%2FrNfv3G9WAK2WSd3ss1R%2FFTeE7LvPwC4zncv6NEMKZ5ule%2FFLc88JUsAmVyf%2BH%2Fqu7UpR7IZMwdat9t7UK%2BQ8uU%2Fmg6qmQMAHpjLQzRD6YYETl7cwHWSsjwBcexjFeaffB59QaaMT0TzZXmp8dAGngYZLCPlUwBPM5Nw%2F7chlit3nOdXCMNMMNQGXAAm%2FzzS7NsKGT542Ia77pEtabyeeKZa%2BZYPNejeCygC%2Binsq47z9Y15Mr9wKQ19VPQh9Mk6XdqCNksTQ3MJpKpGhoCIvwonnv5TX4VfhWv4Ftpf9KxOkK6k%2BzwIpGuXzC4RYqE5keK0PpOtlwQYjmp6W6MgqQoO19LvqvXFlWKrcVopCogly6NF2DvNvsc8sHnKV7y3e3Xnx9qWsr2duNWOqGYMgDwZNu16%2Bk67uDOuRQSKhfdp7aK0ANj4WHEq83qOsDd1it%2Bz6%2BNxEUDRcGQUZjtZ7XnedIP%2FzP7rruT5i04t2P6anscNoLuq%2BZMDdOoaWR6%2FLKjWi1u0KiTdKOR5h8pLH0ji1COakE%2FiESLP4KeJjCKrUXkorrsB1O8re%2BMBo6jsz9TLqH4oec92TThD0rwh%2Fu2EoZ6DA1Dcz9bVl8bPvfQVljD2h93CBjqkAZmPt5gM0mkLVGULJTiLiNWhqERUjnC3PYsULhzSFbu%2B4QuDqNTOnrDVaXtlGhdj5zpdY7iZbNeSIiKvzJaVwCzTJsGaC%2BX38jUmMhI86HH%2BjcOpIwG1tLon4JOd%2FldK0U8smzomJiiOkvrr9yJaExxJjx1rmTbniNV9grF%2F8Hs9EEPq5rl%2F22zKKst7GNwJZ3mm7jpkqZRFyUCHkCksFrxVJ9S5&X-Amz-Signature=aa69573bb578f436ceb9323f08515d493764d576dfd5253f81141c015283abc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRYY5PU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGNvaD00otqWLFfGPTME18OQsnijcnOkEjggC%2FHBy7QIhAOPuiQA4aG6nMoa4o7rRmwOtifKJXvbpjRA0DTCuXMAeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfPqyw8lp0PsVdTbMq3AOCN5W0VXBtqDp1%2FrNfv3G9WAK2WSd3ss1R%2FFTeE7LvPwC4zncv6NEMKZ5ule%2FFLc88JUsAmVyf%2BH%2Fqu7UpR7IZMwdat9t7UK%2BQ8uU%2Fmg6qmQMAHpjLQzRD6YYETl7cwHWSsjwBcexjFeaffB59QaaMT0TzZXmp8dAGngYZLCPlUwBPM5Nw%2F7chlit3nOdXCMNMMNQGXAAm%2FzzS7NsKGT542Ia77pEtabyeeKZa%2BZYPNejeCygC%2Binsq47z9Y15Mr9wKQ19VPQh9Mk6XdqCNksTQ3MJpKpGhoCIvwonnv5TX4VfhWv4Ftpf9KxOkK6k%2BzwIpGuXzC4RYqE5keK0PpOtlwQYjmp6W6MgqQoO19LvqvXFlWKrcVopCogly6NF2DvNvsc8sHnKV7y3e3Xnx9qWsr2duNWOqGYMgDwZNu16%2Bk67uDOuRQSKhfdp7aK0ANj4WHEq83qOsDd1it%2Bz6%2BNxEUDRcGQUZjtZ7XnedIP%2FzP7rruT5i04t2P6anscNoLuq%2BZMDdOoaWR6%2FLKjWi1u0KiTdKOR5h8pLH0ji1COakE%2FiESLP4KeJjCKrUXkorrsB1O8re%2BMBo6jsz9TLqH4oec92TThD0rwh%2Fu2EoZ6DA1Dcz9bVl8bPvfQVljD2h93CBjqkAZmPt5gM0mkLVGULJTiLiNWhqERUjnC3PYsULhzSFbu%2B4QuDqNTOnrDVaXtlGhdj5zpdY7iZbNeSIiKvzJaVwCzTJsGaC%2BX38jUmMhI86HH%2BjcOpIwG1tLon4JOd%2FldK0U8smzomJiiOkvrr9yJaExxJjx1rmTbniNV9grF%2F8Hs9EEPq5rl%2F22zKKst7GNwJZ3mm7jpkqZRFyUCHkCksFrxVJ9S5&X-Amz-Signature=8523135cbcf5c9088bf8edb512061e5eaf6079887546812e9176734360043a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRYY5PU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGNvaD00otqWLFfGPTME18OQsnijcnOkEjggC%2FHBy7QIhAOPuiQA4aG6nMoa4o7rRmwOtifKJXvbpjRA0DTCuXMAeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfPqyw8lp0PsVdTbMq3AOCN5W0VXBtqDp1%2FrNfv3G9WAK2WSd3ss1R%2FFTeE7LvPwC4zncv6NEMKZ5ule%2FFLc88JUsAmVyf%2BH%2Fqu7UpR7IZMwdat9t7UK%2BQ8uU%2Fmg6qmQMAHpjLQzRD6YYETl7cwHWSsjwBcexjFeaffB59QaaMT0TzZXmp8dAGngYZLCPlUwBPM5Nw%2F7chlit3nOdXCMNMMNQGXAAm%2FzzS7NsKGT542Ia77pEtabyeeKZa%2BZYPNejeCygC%2Binsq47z9Y15Mr9wKQ19VPQh9Mk6XdqCNksTQ3MJpKpGhoCIvwonnv5TX4VfhWv4Ftpf9KxOkK6k%2BzwIpGuXzC4RYqE5keK0PpOtlwQYjmp6W6MgqQoO19LvqvXFlWKrcVopCogly6NF2DvNvsc8sHnKV7y3e3Xnx9qWsr2duNWOqGYMgDwZNu16%2Bk67uDOuRQSKhfdp7aK0ANj4WHEq83qOsDd1it%2Bz6%2BNxEUDRcGQUZjtZ7XnedIP%2FzP7rruT5i04t2P6anscNoLuq%2BZMDdOoaWR6%2FLKjWi1u0KiTdKOR5h8pLH0ji1COakE%2FiESLP4KeJjCKrUXkorrsB1O8re%2BMBo6jsz9TLqH4oec92TThD0rwh%2Fu2EoZ6DA1Dcz9bVl8bPvfQVljD2h93CBjqkAZmPt5gM0mkLVGULJTiLiNWhqERUjnC3PYsULhzSFbu%2B4QuDqNTOnrDVaXtlGhdj5zpdY7iZbNeSIiKvzJaVwCzTJsGaC%2BX38jUmMhI86HH%2BjcOpIwG1tLon4JOd%2FldK0U8smzomJiiOkvrr9yJaExxJjx1rmTbniNV9grF%2F8Hs9EEPq5rl%2F22zKKst7GNwJZ3mm7jpkqZRFyUCHkCksFrxVJ9S5&X-Amz-Signature=8937223c8d610db0a77042a60b27ff6259ed7ae15a6dbc0a55b148944a6e2584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRYY5PU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGNvaD00otqWLFfGPTME18OQsnijcnOkEjggC%2FHBy7QIhAOPuiQA4aG6nMoa4o7rRmwOtifKJXvbpjRA0DTCuXMAeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfPqyw8lp0PsVdTbMq3AOCN5W0VXBtqDp1%2FrNfv3G9WAK2WSd3ss1R%2FFTeE7LvPwC4zncv6NEMKZ5ule%2FFLc88JUsAmVyf%2BH%2Fqu7UpR7IZMwdat9t7UK%2BQ8uU%2Fmg6qmQMAHpjLQzRD6YYETl7cwHWSsjwBcexjFeaffB59QaaMT0TzZXmp8dAGngYZLCPlUwBPM5Nw%2F7chlit3nOdXCMNMMNQGXAAm%2FzzS7NsKGT542Ia77pEtabyeeKZa%2BZYPNejeCygC%2Binsq47z9Y15Mr9wKQ19VPQh9Mk6XdqCNksTQ3MJpKpGhoCIvwonnv5TX4VfhWv4Ftpf9KxOkK6k%2BzwIpGuXzC4RYqE5keK0PpOtlwQYjmp6W6MgqQoO19LvqvXFlWKrcVopCogly6NF2DvNvsc8sHnKV7y3e3Xnx9qWsr2duNWOqGYMgDwZNu16%2Bk67uDOuRQSKhfdp7aK0ANj4WHEq83qOsDd1it%2Bz6%2BNxEUDRcGQUZjtZ7XnedIP%2FzP7rruT5i04t2P6anscNoLuq%2BZMDdOoaWR6%2FLKjWi1u0KiTdKOR5h8pLH0ji1COakE%2FiESLP4KeJjCKrUXkorrsB1O8re%2BMBo6jsz9TLqH4oec92TThD0rwh%2Fu2EoZ6DA1Dcz9bVl8bPvfQVljD2h93CBjqkAZmPt5gM0mkLVGULJTiLiNWhqERUjnC3PYsULhzSFbu%2B4QuDqNTOnrDVaXtlGhdj5zpdY7iZbNeSIiKvzJaVwCzTJsGaC%2BX38jUmMhI86HH%2BjcOpIwG1tLon4JOd%2FldK0U8smzomJiiOkvrr9yJaExxJjx1rmTbniNV9grF%2F8Hs9EEPq5rl%2F22zKKst7GNwJZ3mm7jpkqZRFyUCHkCksFrxVJ9S5&X-Amz-Signature=02163d96e7ed418ba3fa828afed2d99fa72f96529f150eb20f1e2aa2ccdf627d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRYY5PU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGNvaD00otqWLFfGPTME18OQsnijcnOkEjggC%2FHBy7QIhAOPuiQA4aG6nMoa4o7rRmwOtifKJXvbpjRA0DTCuXMAeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfPqyw8lp0PsVdTbMq3AOCN5W0VXBtqDp1%2FrNfv3G9WAK2WSd3ss1R%2FFTeE7LvPwC4zncv6NEMKZ5ule%2FFLc88JUsAmVyf%2BH%2Fqu7UpR7IZMwdat9t7UK%2BQ8uU%2Fmg6qmQMAHpjLQzRD6YYETl7cwHWSsjwBcexjFeaffB59QaaMT0TzZXmp8dAGngYZLCPlUwBPM5Nw%2F7chlit3nOdXCMNMMNQGXAAm%2FzzS7NsKGT542Ia77pEtabyeeKZa%2BZYPNejeCygC%2Binsq47z9Y15Mr9wKQ19VPQh9Mk6XdqCNksTQ3MJpKpGhoCIvwonnv5TX4VfhWv4Ftpf9KxOkK6k%2BzwIpGuXzC4RYqE5keK0PpOtlwQYjmp6W6MgqQoO19LvqvXFlWKrcVopCogly6NF2DvNvsc8sHnKV7y3e3Xnx9qWsr2duNWOqGYMgDwZNu16%2Bk67uDOuRQSKhfdp7aK0ANj4WHEq83qOsDd1it%2Bz6%2BNxEUDRcGQUZjtZ7XnedIP%2FzP7rruT5i04t2P6anscNoLuq%2BZMDdOoaWR6%2FLKjWi1u0KiTdKOR5h8pLH0ji1COakE%2FiESLP4KeJjCKrUXkorrsB1O8re%2BMBo6jsz9TLqH4oec92TThD0rwh%2Fu2EoZ6DA1Dcz9bVl8bPvfQVljD2h93CBjqkAZmPt5gM0mkLVGULJTiLiNWhqERUjnC3PYsULhzSFbu%2B4QuDqNTOnrDVaXtlGhdj5zpdY7iZbNeSIiKvzJaVwCzTJsGaC%2BX38jUmMhI86HH%2BjcOpIwG1tLon4JOd%2FldK0U8smzomJiiOkvrr9yJaExxJjx1rmTbniNV9grF%2F8Hs9EEPq5rl%2F22zKKst7GNwJZ3mm7jpkqZRFyUCHkCksFrxVJ9S5&X-Amz-Signature=27d4209bae451179ebc8d392fec1e648166aed6fece2775cf9898cd3720ee691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

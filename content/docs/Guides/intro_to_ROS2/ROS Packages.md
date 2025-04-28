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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JF74WQP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiY1Ts4ZKBJC29i73E5uqpJsTJdT2Q7VBi29hAghJsFAiEAiMe51X0%2FI4iUPZiAFW3VF%2B2zYlSVZWANovG1a1OBsXQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNNVHjZKAtClBdr8nyrcA8meVDoECrgyyqxXpgF%2B1CQPM%2FyZ5weBYqQr4JENq3s5aI8pHOoV7qMmOrc1Y1XWz1029uIuOMVZxe%2Bemkx6Sn%2FNgOf12NnWHCcJstdlwkCmw3pB0wHeFIOYsDIa80z%2BFUIumRpbmSK7NqCp7PNzdT2r2GBFUYEj2pCT%2F5YwPJ1nKAu%2Ftlcjy%2Fh1JZ5Oy1f19XxBkgpwNvSzFb9N7wVBA0Tc1Vh66XiJVX2MapUtHvotNFFjfWL%2BBoT6zfllrJlQ66SSr0lZjd%2BpPmGPyL591GQWlqS0MwQMmVRj8rGt0Rpw1aQb6i2u14XFKADVULquRwnmiSBBmhp0EE81YWeCsvjfEw2jm9yP8F1Nkfk311NRRbTrIQpXfyYSYPcXjqy109zGZdqo2QV7F3MmQ%2FmBDWdbuUDv6ZPgB8pSxxhICMhg2cOFx7gQ37KRTT9ljycoLSqJHvc%2Fnl7q2I6iYK%2B68K6jTMxhCQkXj%2FxXy4plx2V9wHZ%2BrBK%2FqvrsSa8Tpsz8HKDYXsi%2FNqECJWbJZu%2B4gc8bo37W33%2F2z0G%2F4qI3THoUmZZBH2IlGTuWHUas0ntwLVxVGgY8jzE8qd1KpgFcHMh%2Bww%2FVMZ2C99s4dQzwfxRANuTJR%2BlTfwIdtYLlMMTmvMAGOqUB2qfi3l%2Bco%2BalUFV3ws%2Fjt4dos9jJaATcL%2BCUUPnmI7%2BVta9tDGqWoy2gtGL6wUUeHS%2FfTakRn7wDIxqIZlHFccDn7UGS1bkEprHa7%2BoncEQvOJ1zM9reN1w5XdPyUztxsOscE2uXAd3x3AP35ociK2VMkwOh4doMNVwXnbgmBYCWnOSjX8HlbBIG9TiB%2BxwYwPL28QCu7v2MaiHS3U3V97IGAvXU&X-Amz-Signature=f974317fd935ac1394c0582bda0570c74ae6a6166cf4550dba748a16cf0c582d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JF74WQP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiY1Ts4ZKBJC29i73E5uqpJsTJdT2Q7VBi29hAghJsFAiEAiMe51X0%2FI4iUPZiAFW3VF%2B2zYlSVZWANovG1a1OBsXQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNNVHjZKAtClBdr8nyrcA8meVDoECrgyyqxXpgF%2B1CQPM%2FyZ5weBYqQr4JENq3s5aI8pHOoV7qMmOrc1Y1XWz1029uIuOMVZxe%2Bemkx6Sn%2FNgOf12NnWHCcJstdlwkCmw3pB0wHeFIOYsDIa80z%2BFUIumRpbmSK7NqCp7PNzdT2r2GBFUYEj2pCT%2F5YwPJ1nKAu%2Ftlcjy%2Fh1JZ5Oy1f19XxBkgpwNvSzFb9N7wVBA0Tc1Vh66XiJVX2MapUtHvotNFFjfWL%2BBoT6zfllrJlQ66SSr0lZjd%2BpPmGPyL591GQWlqS0MwQMmVRj8rGt0Rpw1aQb6i2u14XFKADVULquRwnmiSBBmhp0EE81YWeCsvjfEw2jm9yP8F1Nkfk311NRRbTrIQpXfyYSYPcXjqy109zGZdqo2QV7F3MmQ%2FmBDWdbuUDv6ZPgB8pSxxhICMhg2cOFx7gQ37KRTT9ljycoLSqJHvc%2Fnl7q2I6iYK%2B68K6jTMxhCQkXj%2FxXy4plx2V9wHZ%2BrBK%2FqvrsSa8Tpsz8HKDYXsi%2FNqECJWbJZu%2B4gc8bo37W33%2F2z0G%2F4qI3THoUmZZBH2IlGTuWHUas0ntwLVxVGgY8jzE8qd1KpgFcHMh%2Bww%2FVMZ2C99s4dQzwfxRANuTJR%2BlTfwIdtYLlMMTmvMAGOqUB2qfi3l%2Bco%2BalUFV3ws%2Fjt4dos9jJaATcL%2BCUUPnmI7%2BVta9tDGqWoy2gtGL6wUUeHS%2FfTakRn7wDIxqIZlHFccDn7UGS1bkEprHa7%2BoncEQvOJ1zM9reN1w5XdPyUztxsOscE2uXAd3x3AP35ociK2VMkwOh4doMNVwXnbgmBYCWnOSjX8HlbBIG9TiB%2BxwYwPL28QCu7v2MaiHS3U3V97IGAvXU&X-Amz-Signature=3a208866c5dc885c821558ee492a40c30c04c44eebdff1bfe09dfb4bdbfe0db5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JF74WQP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiY1Ts4ZKBJC29i73E5uqpJsTJdT2Q7VBi29hAghJsFAiEAiMe51X0%2FI4iUPZiAFW3VF%2B2zYlSVZWANovG1a1OBsXQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNNVHjZKAtClBdr8nyrcA8meVDoECrgyyqxXpgF%2B1CQPM%2FyZ5weBYqQr4JENq3s5aI8pHOoV7qMmOrc1Y1XWz1029uIuOMVZxe%2Bemkx6Sn%2FNgOf12NnWHCcJstdlwkCmw3pB0wHeFIOYsDIa80z%2BFUIumRpbmSK7NqCp7PNzdT2r2GBFUYEj2pCT%2F5YwPJ1nKAu%2Ftlcjy%2Fh1JZ5Oy1f19XxBkgpwNvSzFb9N7wVBA0Tc1Vh66XiJVX2MapUtHvotNFFjfWL%2BBoT6zfllrJlQ66SSr0lZjd%2BpPmGPyL591GQWlqS0MwQMmVRj8rGt0Rpw1aQb6i2u14XFKADVULquRwnmiSBBmhp0EE81YWeCsvjfEw2jm9yP8F1Nkfk311NRRbTrIQpXfyYSYPcXjqy109zGZdqo2QV7F3MmQ%2FmBDWdbuUDv6ZPgB8pSxxhICMhg2cOFx7gQ37KRTT9ljycoLSqJHvc%2Fnl7q2I6iYK%2B68K6jTMxhCQkXj%2FxXy4plx2V9wHZ%2BrBK%2FqvrsSa8Tpsz8HKDYXsi%2FNqECJWbJZu%2B4gc8bo37W33%2F2z0G%2F4qI3THoUmZZBH2IlGTuWHUas0ntwLVxVGgY8jzE8qd1KpgFcHMh%2Bww%2FVMZ2C99s4dQzwfxRANuTJR%2BlTfwIdtYLlMMTmvMAGOqUB2qfi3l%2Bco%2BalUFV3ws%2Fjt4dos9jJaATcL%2BCUUPnmI7%2BVta9tDGqWoy2gtGL6wUUeHS%2FfTakRn7wDIxqIZlHFccDn7UGS1bkEprHa7%2BoncEQvOJ1zM9reN1w5XdPyUztxsOscE2uXAd3x3AP35ociK2VMkwOh4doMNVwXnbgmBYCWnOSjX8HlbBIG9TiB%2BxwYwPL28QCu7v2MaiHS3U3V97IGAvXU&X-Amz-Signature=d0c481bda287d4014fa49a25c25722a10e96cd935c010c629ff27b32a7ca903f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JF74WQP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiY1Ts4ZKBJC29i73E5uqpJsTJdT2Q7VBi29hAghJsFAiEAiMe51X0%2FI4iUPZiAFW3VF%2B2zYlSVZWANovG1a1OBsXQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNNVHjZKAtClBdr8nyrcA8meVDoECrgyyqxXpgF%2B1CQPM%2FyZ5weBYqQr4JENq3s5aI8pHOoV7qMmOrc1Y1XWz1029uIuOMVZxe%2Bemkx6Sn%2FNgOf12NnWHCcJstdlwkCmw3pB0wHeFIOYsDIa80z%2BFUIumRpbmSK7NqCp7PNzdT2r2GBFUYEj2pCT%2F5YwPJ1nKAu%2Ftlcjy%2Fh1JZ5Oy1f19XxBkgpwNvSzFb9N7wVBA0Tc1Vh66XiJVX2MapUtHvotNFFjfWL%2BBoT6zfllrJlQ66SSr0lZjd%2BpPmGPyL591GQWlqS0MwQMmVRj8rGt0Rpw1aQb6i2u14XFKADVULquRwnmiSBBmhp0EE81YWeCsvjfEw2jm9yP8F1Nkfk311NRRbTrIQpXfyYSYPcXjqy109zGZdqo2QV7F3MmQ%2FmBDWdbuUDv6ZPgB8pSxxhICMhg2cOFx7gQ37KRTT9ljycoLSqJHvc%2Fnl7q2I6iYK%2B68K6jTMxhCQkXj%2FxXy4plx2V9wHZ%2BrBK%2FqvrsSa8Tpsz8HKDYXsi%2FNqECJWbJZu%2B4gc8bo37W33%2F2z0G%2F4qI3THoUmZZBH2IlGTuWHUas0ntwLVxVGgY8jzE8qd1KpgFcHMh%2Bww%2FVMZ2C99s4dQzwfxRANuTJR%2BlTfwIdtYLlMMTmvMAGOqUB2qfi3l%2Bco%2BalUFV3ws%2Fjt4dos9jJaATcL%2BCUUPnmI7%2BVta9tDGqWoy2gtGL6wUUeHS%2FfTakRn7wDIxqIZlHFccDn7UGS1bkEprHa7%2BoncEQvOJ1zM9reN1w5XdPyUztxsOscE2uXAd3x3AP35ociK2VMkwOh4doMNVwXnbgmBYCWnOSjX8HlbBIG9TiB%2BxwYwPL28QCu7v2MaiHS3U3V97IGAvXU&X-Amz-Signature=b5f07927f906e48c60336a750474ea8afad589e12a286175915ec85a5d98076e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JF74WQP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiY1Ts4ZKBJC29i73E5uqpJsTJdT2Q7VBi29hAghJsFAiEAiMe51X0%2FI4iUPZiAFW3VF%2B2zYlSVZWANovG1a1OBsXQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNNVHjZKAtClBdr8nyrcA8meVDoECrgyyqxXpgF%2B1CQPM%2FyZ5weBYqQr4JENq3s5aI8pHOoV7qMmOrc1Y1XWz1029uIuOMVZxe%2Bemkx6Sn%2FNgOf12NnWHCcJstdlwkCmw3pB0wHeFIOYsDIa80z%2BFUIumRpbmSK7NqCp7PNzdT2r2GBFUYEj2pCT%2F5YwPJ1nKAu%2Ftlcjy%2Fh1JZ5Oy1f19XxBkgpwNvSzFb9N7wVBA0Tc1Vh66XiJVX2MapUtHvotNFFjfWL%2BBoT6zfllrJlQ66SSr0lZjd%2BpPmGPyL591GQWlqS0MwQMmVRj8rGt0Rpw1aQb6i2u14XFKADVULquRwnmiSBBmhp0EE81YWeCsvjfEw2jm9yP8F1Nkfk311NRRbTrIQpXfyYSYPcXjqy109zGZdqo2QV7F3MmQ%2FmBDWdbuUDv6ZPgB8pSxxhICMhg2cOFx7gQ37KRTT9ljycoLSqJHvc%2Fnl7q2I6iYK%2B68K6jTMxhCQkXj%2FxXy4plx2V9wHZ%2BrBK%2FqvrsSa8Tpsz8HKDYXsi%2FNqECJWbJZu%2B4gc8bo37W33%2F2z0G%2F4qI3THoUmZZBH2IlGTuWHUas0ntwLVxVGgY8jzE8qd1KpgFcHMh%2Bww%2FVMZ2C99s4dQzwfxRANuTJR%2BlTfwIdtYLlMMTmvMAGOqUB2qfi3l%2Bco%2BalUFV3ws%2Fjt4dos9jJaATcL%2BCUUPnmI7%2BVta9tDGqWoy2gtGL6wUUeHS%2FfTakRn7wDIxqIZlHFccDn7UGS1bkEprHa7%2BoncEQvOJ1zM9reN1w5XdPyUztxsOscE2uXAd3x3AP35ociK2VMkwOh4doMNVwXnbgmBYCWnOSjX8HlbBIG9TiB%2BxwYwPL28QCu7v2MaiHS3U3V97IGAvXU&X-Amz-Signature=4260e097228ea62bba9bcd611356baa3276825a73ddc0cb3a615420168d48634&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JF74WQP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiY1Ts4ZKBJC29i73E5uqpJsTJdT2Q7VBi29hAghJsFAiEAiMe51X0%2FI4iUPZiAFW3VF%2B2zYlSVZWANovG1a1OBsXQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNNVHjZKAtClBdr8nyrcA8meVDoECrgyyqxXpgF%2B1CQPM%2FyZ5weBYqQr4JENq3s5aI8pHOoV7qMmOrc1Y1XWz1029uIuOMVZxe%2Bemkx6Sn%2FNgOf12NnWHCcJstdlwkCmw3pB0wHeFIOYsDIa80z%2BFUIumRpbmSK7NqCp7PNzdT2r2GBFUYEj2pCT%2F5YwPJ1nKAu%2Ftlcjy%2Fh1JZ5Oy1f19XxBkgpwNvSzFb9N7wVBA0Tc1Vh66XiJVX2MapUtHvotNFFjfWL%2BBoT6zfllrJlQ66SSr0lZjd%2BpPmGPyL591GQWlqS0MwQMmVRj8rGt0Rpw1aQb6i2u14XFKADVULquRwnmiSBBmhp0EE81YWeCsvjfEw2jm9yP8F1Nkfk311NRRbTrIQpXfyYSYPcXjqy109zGZdqo2QV7F3MmQ%2FmBDWdbuUDv6ZPgB8pSxxhICMhg2cOFx7gQ37KRTT9ljycoLSqJHvc%2Fnl7q2I6iYK%2B68K6jTMxhCQkXj%2FxXy4plx2V9wHZ%2BrBK%2FqvrsSa8Tpsz8HKDYXsi%2FNqECJWbJZu%2B4gc8bo37W33%2F2z0G%2F4qI3THoUmZZBH2IlGTuWHUas0ntwLVxVGgY8jzE8qd1KpgFcHMh%2Bww%2FVMZ2C99s4dQzwfxRANuTJR%2BlTfwIdtYLlMMTmvMAGOqUB2qfi3l%2Bco%2BalUFV3ws%2Fjt4dos9jJaATcL%2BCUUPnmI7%2BVta9tDGqWoy2gtGL6wUUeHS%2FfTakRn7wDIxqIZlHFccDn7UGS1bkEprHa7%2BoncEQvOJ1zM9reN1w5XdPyUztxsOscE2uXAd3x3AP35ociK2VMkwOh4doMNVwXnbgmBYCWnOSjX8HlbBIG9TiB%2BxwYwPL28QCu7v2MaiHS3U3V97IGAvXU&X-Amz-Signature=a91a13595ad6ebb2138ce01760e77c64296e84547b7fac8239719b21f96a4c70&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JF74WQP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiY1Ts4ZKBJC29i73E5uqpJsTJdT2Q7VBi29hAghJsFAiEAiMe51X0%2FI4iUPZiAFW3VF%2B2zYlSVZWANovG1a1OBsXQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNNVHjZKAtClBdr8nyrcA8meVDoECrgyyqxXpgF%2B1CQPM%2FyZ5weBYqQr4JENq3s5aI8pHOoV7qMmOrc1Y1XWz1029uIuOMVZxe%2Bemkx6Sn%2FNgOf12NnWHCcJstdlwkCmw3pB0wHeFIOYsDIa80z%2BFUIumRpbmSK7NqCp7PNzdT2r2GBFUYEj2pCT%2F5YwPJ1nKAu%2Ftlcjy%2Fh1JZ5Oy1f19XxBkgpwNvSzFb9N7wVBA0Tc1Vh66XiJVX2MapUtHvotNFFjfWL%2BBoT6zfllrJlQ66SSr0lZjd%2BpPmGPyL591GQWlqS0MwQMmVRj8rGt0Rpw1aQb6i2u14XFKADVULquRwnmiSBBmhp0EE81YWeCsvjfEw2jm9yP8F1Nkfk311NRRbTrIQpXfyYSYPcXjqy109zGZdqo2QV7F3MmQ%2FmBDWdbuUDv6ZPgB8pSxxhICMhg2cOFx7gQ37KRTT9ljycoLSqJHvc%2Fnl7q2I6iYK%2B68K6jTMxhCQkXj%2FxXy4plx2V9wHZ%2BrBK%2FqvrsSa8Tpsz8HKDYXsi%2FNqECJWbJZu%2B4gc8bo37W33%2F2z0G%2F4qI3THoUmZZBH2IlGTuWHUas0ntwLVxVGgY8jzE8qd1KpgFcHMh%2Bww%2FVMZ2C99s4dQzwfxRANuTJR%2BlTfwIdtYLlMMTmvMAGOqUB2qfi3l%2Bco%2BalUFV3ws%2Fjt4dos9jJaATcL%2BCUUPnmI7%2BVta9tDGqWoy2gtGL6wUUeHS%2FfTakRn7wDIxqIZlHFccDn7UGS1bkEprHa7%2BoncEQvOJ1zM9reN1w5XdPyUztxsOscE2uXAd3x3AP35ociK2VMkwOh4doMNVwXnbgmBYCWnOSjX8HlbBIG9TiB%2BxwYwPL28QCu7v2MaiHS3U3V97IGAvXU&X-Amz-Signature=8a09120771db9922c1837a81683245f7f3fa628faac48262c03ae1e3e7bb7797&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

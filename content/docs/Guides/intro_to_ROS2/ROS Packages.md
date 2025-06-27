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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5R3YJYO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFUbOon5pLL%2B0PM5UTi4%2FPSQl80BU7OsBQ0Tr51k%2Bl%2BZAiB5tV4QqegO9hBj0y27s2TBk5oDgcom6h%2FxWjChWvcEDCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMVKhGtpW5Dkg4aUBYKtwDx6Ty%2BTj%2F0MZoOJnu5qERwdw5SVgffEjBvZv4W7t%2FbobsYaSGl7RTv8U59oSXawf2rYRgm09Jznv%2BAH0SlCiZxVqnXUdFtHFqyytizJy17xxz6x9yykYdbDYGJ2bntYbbkFD90bPJ1nS8EVp7n8V%2F9GGmd0GPhUFyqJBvOD8i1Wmm3yPeyLaoWAN%2BRpI%2F72pSnNkNryL0wr30dUTfLIxjEdtRFvDcJc0V7TCiXvSNiX8i9jzBiTB1QdsPM3ec2kvQg%2F9ANvw2mQ9TVHKEgIJEuBPJfLEXuEJj%2BpIMItXF7icr3Z0tc2pnspsYLCnF%2FJJgMmyA8WRR0t7pCgkDVP9wzEJp%2BJsv9qcf5TAQ5GIDsUQNrAQPo4oiA8BcIvM9PmCL5c3nC1YD4iBoNWFohXo7zTs4x%2FBZKT5h9%2B6wpL96XQMuI12treeEQI3f5SgcSgfTpJ7dz2Ip8vTqTNmrp2qi0h%2F3qRGLUamKeK4YUGDh%2BRqDs8yAQxz%2FhAW08WY4%2B%2FMFa3QmzATzPn06HfHLRVbMV1pVns5a8M0nmp6hGfjSPm0q00dRlC63hDlmqY9wig0itVVUkEmdkkuKiNSlrIjoQNnM9%2FtBGMGqemtTSmFY67kfMxtLirU3TrZUR2QwtOP5wgY6pgHg5CqY%2BNwfsQmAKJMfk3ZFjNnic52ELGChUPt8%2FD3R1QGsy7zKYVCDVfmlvsijT8DhFaer3TzCy5GHF3NZP6J3hMqqb%2B4LgxW7TumvX7wxmaNOx8TbwQRswZkv%2FjU2NAlho0tPr7eLEQlXepFL%2B1v3pAUe6P6A3XGWUg%2BMy91SbynStDwucrMbpskGoyaRByuUDxcg6RZ0%2FvbilCpCSIjUMmbPHjKx&X-Amz-Signature=32b806860fa537bf06aee82acff73c8c6ef7cdaf8e161224a27b52f155f2bb06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5R3YJYO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFUbOon5pLL%2B0PM5UTi4%2FPSQl80BU7OsBQ0Tr51k%2Bl%2BZAiB5tV4QqegO9hBj0y27s2TBk5oDgcom6h%2FxWjChWvcEDCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMVKhGtpW5Dkg4aUBYKtwDx6Ty%2BTj%2F0MZoOJnu5qERwdw5SVgffEjBvZv4W7t%2FbobsYaSGl7RTv8U59oSXawf2rYRgm09Jznv%2BAH0SlCiZxVqnXUdFtHFqyytizJy17xxz6x9yykYdbDYGJ2bntYbbkFD90bPJ1nS8EVp7n8V%2F9GGmd0GPhUFyqJBvOD8i1Wmm3yPeyLaoWAN%2BRpI%2F72pSnNkNryL0wr30dUTfLIxjEdtRFvDcJc0V7TCiXvSNiX8i9jzBiTB1QdsPM3ec2kvQg%2F9ANvw2mQ9TVHKEgIJEuBPJfLEXuEJj%2BpIMItXF7icr3Z0tc2pnspsYLCnF%2FJJgMmyA8WRR0t7pCgkDVP9wzEJp%2BJsv9qcf5TAQ5GIDsUQNrAQPo4oiA8BcIvM9PmCL5c3nC1YD4iBoNWFohXo7zTs4x%2FBZKT5h9%2B6wpL96XQMuI12treeEQI3f5SgcSgfTpJ7dz2Ip8vTqTNmrp2qi0h%2F3qRGLUamKeK4YUGDh%2BRqDs8yAQxz%2FhAW08WY4%2B%2FMFa3QmzATzPn06HfHLRVbMV1pVns5a8M0nmp6hGfjSPm0q00dRlC63hDlmqY9wig0itVVUkEmdkkuKiNSlrIjoQNnM9%2FtBGMGqemtTSmFY67kfMxtLirU3TrZUR2QwtOP5wgY6pgHg5CqY%2BNwfsQmAKJMfk3ZFjNnic52ELGChUPt8%2FD3R1QGsy7zKYVCDVfmlvsijT8DhFaer3TzCy5GHF3NZP6J3hMqqb%2B4LgxW7TumvX7wxmaNOx8TbwQRswZkv%2FjU2NAlho0tPr7eLEQlXepFL%2B1v3pAUe6P6A3XGWUg%2BMy91SbynStDwucrMbpskGoyaRByuUDxcg6RZ0%2FvbilCpCSIjUMmbPHjKx&X-Amz-Signature=a8661792aab4441e82804ec00fe4ed393710bef5af9eb7068aaddaedbf759ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5R3YJYO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFUbOon5pLL%2B0PM5UTi4%2FPSQl80BU7OsBQ0Tr51k%2Bl%2BZAiB5tV4QqegO9hBj0y27s2TBk5oDgcom6h%2FxWjChWvcEDCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMVKhGtpW5Dkg4aUBYKtwDx6Ty%2BTj%2F0MZoOJnu5qERwdw5SVgffEjBvZv4W7t%2FbobsYaSGl7RTv8U59oSXawf2rYRgm09Jznv%2BAH0SlCiZxVqnXUdFtHFqyytizJy17xxz6x9yykYdbDYGJ2bntYbbkFD90bPJ1nS8EVp7n8V%2F9GGmd0GPhUFyqJBvOD8i1Wmm3yPeyLaoWAN%2BRpI%2F72pSnNkNryL0wr30dUTfLIxjEdtRFvDcJc0V7TCiXvSNiX8i9jzBiTB1QdsPM3ec2kvQg%2F9ANvw2mQ9TVHKEgIJEuBPJfLEXuEJj%2BpIMItXF7icr3Z0tc2pnspsYLCnF%2FJJgMmyA8WRR0t7pCgkDVP9wzEJp%2BJsv9qcf5TAQ5GIDsUQNrAQPo4oiA8BcIvM9PmCL5c3nC1YD4iBoNWFohXo7zTs4x%2FBZKT5h9%2B6wpL96XQMuI12treeEQI3f5SgcSgfTpJ7dz2Ip8vTqTNmrp2qi0h%2F3qRGLUamKeK4YUGDh%2BRqDs8yAQxz%2FhAW08WY4%2B%2FMFa3QmzATzPn06HfHLRVbMV1pVns5a8M0nmp6hGfjSPm0q00dRlC63hDlmqY9wig0itVVUkEmdkkuKiNSlrIjoQNnM9%2FtBGMGqemtTSmFY67kfMxtLirU3TrZUR2QwtOP5wgY6pgHg5CqY%2BNwfsQmAKJMfk3ZFjNnic52ELGChUPt8%2FD3R1QGsy7zKYVCDVfmlvsijT8DhFaer3TzCy5GHF3NZP6J3hMqqb%2B4LgxW7TumvX7wxmaNOx8TbwQRswZkv%2FjU2NAlho0tPr7eLEQlXepFL%2B1v3pAUe6P6A3XGWUg%2BMy91SbynStDwucrMbpskGoyaRByuUDxcg6RZ0%2FvbilCpCSIjUMmbPHjKx&X-Amz-Signature=603cc3d34ef63fe73cbb40e18f51027bed585d863c54e01d787b7869aeda13dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5R3YJYO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFUbOon5pLL%2B0PM5UTi4%2FPSQl80BU7OsBQ0Tr51k%2Bl%2BZAiB5tV4QqegO9hBj0y27s2TBk5oDgcom6h%2FxWjChWvcEDCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMVKhGtpW5Dkg4aUBYKtwDx6Ty%2BTj%2F0MZoOJnu5qERwdw5SVgffEjBvZv4W7t%2FbobsYaSGl7RTv8U59oSXawf2rYRgm09Jznv%2BAH0SlCiZxVqnXUdFtHFqyytizJy17xxz6x9yykYdbDYGJ2bntYbbkFD90bPJ1nS8EVp7n8V%2F9GGmd0GPhUFyqJBvOD8i1Wmm3yPeyLaoWAN%2BRpI%2F72pSnNkNryL0wr30dUTfLIxjEdtRFvDcJc0V7TCiXvSNiX8i9jzBiTB1QdsPM3ec2kvQg%2F9ANvw2mQ9TVHKEgIJEuBPJfLEXuEJj%2BpIMItXF7icr3Z0tc2pnspsYLCnF%2FJJgMmyA8WRR0t7pCgkDVP9wzEJp%2BJsv9qcf5TAQ5GIDsUQNrAQPo4oiA8BcIvM9PmCL5c3nC1YD4iBoNWFohXo7zTs4x%2FBZKT5h9%2B6wpL96XQMuI12treeEQI3f5SgcSgfTpJ7dz2Ip8vTqTNmrp2qi0h%2F3qRGLUamKeK4YUGDh%2BRqDs8yAQxz%2FhAW08WY4%2B%2FMFa3QmzATzPn06HfHLRVbMV1pVns5a8M0nmp6hGfjSPm0q00dRlC63hDlmqY9wig0itVVUkEmdkkuKiNSlrIjoQNnM9%2FtBGMGqemtTSmFY67kfMxtLirU3TrZUR2QwtOP5wgY6pgHg5CqY%2BNwfsQmAKJMfk3ZFjNnic52ELGChUPt8%2FD3R1QGsy7zKYVCDVfmlvsijT8DhFaer3TzCy5GHF3NZP6J3hMqqb%2B4LgxW7TumvX7wxmaNOx8TbwQRswZkv%2FjU2NAlho0tPr7eLEQlXepFL%2B1v3pAUe6P6A3XGWUg%2BMy91SbynStDwucrMbpskGoyaRByuUDxcg6RZ0%2FvbilCpCSIjUMmbPHjKx&X-Amz-Signature=d6eabe52a5d1feb9fb17772d827dd302dc2d01b5bc908d7e2fd99d18d944c787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5R3YJYO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFUbOon5pLL%2B0PM5UTi4%2FPSQl80BU7OsBQ0Tr51k%2Bl%2BZAiB5tV4QqegO9hBj0y27s2TBk5oDgcom6h%2FxWjChWvcEDCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMVKhGtpW5Dkg4aUBYKtwDx6Ty%2BTj%2F0MZoOJnu5qERwdw5SVgffEjBvZv4W7t%2FbobsYaSGl7RTv8U59oSXawf2rYRgm09Jznv%2BAH0SlCiZxVqnXUdFtHFqyytizJy17xxz6x9yykYdbDYGJ2bntYbbkFD90bPJ1nS8EVp7n8V%2F9GGmd0GPhUFyqJBvOD8i1Wmm3yPeyLaoWAN%2BRpI%2F72pSnNkNryL0wr30dUTfLIxjEdtRFvDcJc0V7TCiXvSNiX8i9jzBiTB1QdsPM3ec2kvQg%2F9ANvw2mQ9TVHKEgIJEuBPJfLEXuEJj%2BpIMItXF7icr3Z0tc2pnspsYLCnF%2FJJgMmyA8WRR0t7pCgkDVP9wzEJp%2BJsv9qcf5TAQ5GIDsUQNrAQPo4oiA8BcIvM9PmCL5c3nC1YD4iBoNWFohXo7zTs4x%2FBZKT5h9%2B6wpL96XQMuI12treeEQI3f5SgcSgfTpJ7dz2Ip8vTqTNmrp2qi0h%2F3qRGLUamKeK4YUGDh%2BRqDs8yAQxz%2FhAW08WY4%2B%2FMFa3QmzATzPn06HfHLRVbMV1pVns5a8M0nmp6hGfjSPm0q00dRlC63hDlmqY9wig0itVVUkEmdkkuKiNSlrIjoQNnM9%2FtBGMGqemtTSmFY67kfMxtLirU3TrZUR2QwtOP5wgY6pgHg5CqY%2BNwfsQmAKJMfk3ZFjNnic52ELGChUPt8%2FD3R1QGsy7zKYVCDVfmlvsijT8DhFaer3TzCy5GHF3NZP6J3hMqqb%2B4LgxW7TumvX7wxmaNOx8TbwQRswZkv%2FjU2NAlho0tPr7eLEQlXepFL%2B1v3pAUe6P6A3XGWUg%2BMy91SbynStDwucrMbpskGoyaRByuUDxcg6RZ0%2FvbilCpCSIjUMmbPHjKx&X-Amz-Signature=8d17606579c65f2739afe0eca5a5802953d5d8cff525a9ccba4b94095e503014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5R3YJYO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFUbOon5pLL%2B0PM5UTi4%2FPSQl80BU7OsBQ0Tr51k%2Bl%2BZAiB5tV4QqegO9hBj0y27s2TBk5oDgcom6h%2FxWjChWvcEDCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMVKhGtpW5Dkg4aUBYKtwDx6Ty%2BTj%2F0MZoOJnu5qERwdw5SVgffEjBvZv4W7t%2FbobsYaSGl7RTv8U59oSXawf2rYRgm09Jznv%2BAH0SlCiZxVqnXUdFtHFqyytizJy17xxz6x9yykYdbDYGJ2bntYbbkFD90bPJ1nS8EVp7n8V%2F9GGmd0GPhUFyqJBvOD8i1Wmm3yPeyLaoWAN%2BRpI%2F72pSnNkNryL0wr30dUTfLIxjEdtRFvDcJc0V7TCiXvSNiX8i9jzBiTB1QdsPM3ec2kvQg%2F9ANvw2mQ9TVHKEgIJEuBPJfLEXuEJj%2BpIMItXF7icr3Z0tc2pnspsYLCnF%2FJJgMmyA8WRR0t7pCgkDVP9wzEJp%2BJsv9qcf5TAQ5GIDsUQNrAQPo4oiA8BcIvM9PmCL5c3nC1YD4iBoNWFohXo7zTs4x%2FBZKT5h9%2B6wpL96XQMuI12treeEQI3f5SgcSgfTpJ7dz2Ip8vTqTNmrp2qi0h%2F3qRGLUamKeK4YUGDh%2BRqDs8yAQxz%2FhAW08WY4%2B%2FMFa3QmzATzPn06HfHLRVbMV1pVns5a8M0nmp6hGfjSPm0q00dRlC63hDlmqY9wig0itVVUkEmdkkuKiNSlrIjoQNnM9%2FtBGMGqemtTSmFY67kfMxtLirU3TrZUR2QwtOP5wgY6pgHg5CqY%2BNwfsQmAKJMfk3ZFjNnic52ELGChUPt8%2FD3R1QGsy7zKYVCDVfmlvsijT8DhFaer3TzCy5GHF3NZP6J3hMqqb%2B4LgxW7TumvX7wxmaNOx8TbwQRswZkv%2FjU2NAlho0tPr7eLEQlXepFL%2B1v3pAUe6P6A3XGWUg%2BMy91SbynStDwucrMbpskGoyaRByuUDxcg6RZ0%2FvbilCpCSIjUMmbPHjKx&X-Amz-Signature=1b2a792f43a26ad3266189fa84e97ae81f6e571e7fe4344d3447dccda6145705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5R3YJYO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFUbOon5pLL%2B0PM5UTi4%2FPSQl80BU7OsBQ0Tr51k%2Bl%2BZAiB5tV4QqegO9hBj0y27s2TBk5oDgcom6h%2FxWjChWvcEDCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMVKhGtpW5Dkg4aUBYKtwDx6Ty%2BTj%2F0MZoOJnu5qERwdw5SVgffEjBvZv4W7t%2FbobsYaSGl7RTv8U59oSXawf2rYRgm09Jznv%2BAH0SlCiZxVqnXUdFtHFqyytizJy17xxz6x9yykYdbDYGJ2bntYbbkFD90bPJ1nS8EVp7n8V%2F9GGmd0GPhUFyqJBvOD8i1Wmm3yPeyLaoWAN%2BRpI%2F72pSnNkNryL0wr30dUTfLIxjEdtRFvDcJc0V7TCiXvSNiX8i9jzBiTB1QdsPM3ec2kvQg%2F9ANvw2mQ9TVHKEgIJEuBPJfLEXuEJj%2BpIMItXF7icr3Z0tc2pnspsYLCnF%2FJJgMmyA8WRR0t7pCgkDVP9wzEJp%2BJsv9qcf5TAQ5GIDsUQNrAQPo4oiA8BcIvM9PmCL5c3nC1YD4iBoNWFohXo7zTs4x%2FBZKT5h9%2B6wpL96XQMuI12treeEQI3f5SgcSgfTpJ7dz2Ip8vTqTNmrp2qi0h%2F3qRGLUamKeK4YUGDh%2BRqDs8yAQxz%2FhAW08WY4%2B%2FMFa3QmzATzPn06HfHLRVbMV1pVns5a8M0nmp6hGfjSPm0q00dRlC63hDlmqY9wig0itVVUkEmdkkuKiNSlrIjoQNnM9%2FtBGMGqemtTSmFY67kfMxtLirU3TrZUR2QwtOP5wgY6pgHg5CqY%2BNwfsQmAKJMfk3ZFjNnic52ELGChUPt8%2FD3R1QGsy7zKYVCDVfmlvsijT8DhFaer3TzCy5GHF3NZP6J3hMqqb%2B4LgxW7TumvX7wxmaNOx8TbwQRswZkv%2FjU2NAlho0tPr7eLEQlXepFL%2B1v3pAUe6P6A3XGWUg%2BMy91SbynStDwucrMbpskGoyaRByuUDxcg6RZ0%2FvbilCpCSIjUMmbPHjKx&X-Amz-Signature=9d72b72423b882e24446b57e7d06cc62ce450151d7f6648a14f75ca4cf61b0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

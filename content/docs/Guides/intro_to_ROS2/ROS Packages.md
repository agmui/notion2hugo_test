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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IABLTS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIB%2Fbbye6SJPliNw3CbqeLHGWzLq3SnrnU3c4IuffbeKxAiEAsxqPY1tIyDThIjGWN8SMLjlbzb3cUtj9A19ppqbhz24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBTnZpKQa635XX02BircA89060MnT0YFS12ktjXt30fVE1E1rJbY2pqgQRfGoTqJjZCLskTEgatoqL4LoPG3oDCVnPDfvKSB6UicrhzuQ1EURgGqhT6MpfAx5SeXnjatV9PwwfHiGRG6B6F0b9Rzwp%2FbkY3pV%2FP3wXPvLJLHwD0kRF7Roiwx2nnZJdPQdYu9SkvW3P5tONRzpzG%2F9IlWns6Xan2hUkC4c3CMjULwPxe3FS0eSzPGcCeqXbGTvQ6li6kh%2BtTmCUeS9RcmnEAlMHXPfWJO3vWUvQBoTXS68GpZOP4GcoG4KcMnr6xuSKLRlRFp5q9Ece0IImoVjml0TbITdo3DACFACEDEEz9YeDiEL4Y7Nzhcd7nQtMMwAn3%2B6U7OuSUMfeUdWrvIirK9GoNbxXdLVyJpHz6e4%2F475amhiTiIo9OXYYCyGrK%2FtxWDy40MD%2Br682rCemZYNUmr2GlLvseAp7dr%2BbWnfSHqE2KrwEDAc5WmV%2FKVspEji2BuDu28X%2FE%2BcSJls%2F8nhzqnDHXcUtxy7t2rmaaBA4hQNOtjBolcgDS%2FbIW7F%2FwcxzLFm6y5lqU8Qk3TNJlWXeNCzhW0GHf64n4GpDD2xSAKXBuJIUpc3F2x%2B4pIz30WkGPcPXOQxZLUKA0V%2FrauMJS1n78GOqUByf7hZcz1JIpkAzLh83KLCTRWGcNA0Pff2OBRPQCbW3qyG3xvl1H2KRemKH0kk9cg6ZRtiW8qAOavGbtGzTh2CL5es0PfnbpUmdnYAtEP61gv9pUIos5x7zXZSPC%2FUjUScDbPnGwsgw1zx7YyNGMHalZD1kTvE6QxcrVgg6RbSzTjbKJV%2Bv%2FV%2BCr763KwLjGw3yv2mrIGql4oVPBwFJ2hTQw6PGYo&X-Amz-Signature=727476e291c547bd828d94ed071f7f93f7faf3376d52d76ec9aca76cbcfbc4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IABLTS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIB%2Fbbye6SJPliNw3CbqeLHGWzLq3SnrnU3c4IuffbeKxAiEAsxqPY1tIyDThIjGWN8SMLjlbzb3cUtj9A19ppqbhz24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBTnZpKQa635XX02BircA89060MnT0YFS12ktjXt30fVE1E1rJbY2pqgQRfGoTqJjZCLskTEgatoqL4LoPG3oDCVnPDfvKSB6UicrhzuQ1EURgGqhT6MpfAx5SeXnjatV9PwwfHiGRG6B6F0b9Rzwp%2FbkY3pV%2FP3wXPvLJLHwD0kRF7Roiwx2nnZJdPQdYu9SkvW3P5tONRzpzG%2F9IlWns6Xan2hUkC4c3CMjULwPxe3FS0eSzPGcCeqXbGTvQ6li6kh%2BtTmCUeS9RcmnEAlMHXPfWJO3vWUvQBoTXS68GpZOP4GcoG4KcMnr6xuSKLRlRFp5q9Ece0IImoVjml0TbITdo3DACFACEDEEz9YeDiEL4Y7Nzhcd7nQtMMwAn3%2B6U7OuSUMfeUdWrvIirK9GoNbxXdLVyJpHz6e4%2F475amhiTiIo9OXYYCyGrK%2FtxWDy40MD%2Br682rCemZYNUmr2GlLvseAp7dr%2BbWnfSHqE2KrwEDAc5WmV%2FKVspEji2BuDu28X%2FE%2BcSJls%2F8nhzqnDHXcUtxy7t2rmaaBA4hQNOtjBolcgDS%2FbIW7F%2FwcxzLFm6y5lqU8Qk3TNJlWXeNCzhW0GHf64n4GpDD2xSAKXBuJIUpc3F2x%2B4pIz30WkGPcPXOQxZLUKA0V%2FrauMJS1n78GOqUByf7hZcz1JIpkAzLh83KLCTRWGcNA0Pff2OBRPQCbW3qyG3xvl1H2KRemKH0kk9cg6ZRtiW8qAOavGbtGzTh2CL5es0PfnbpUmdnYAtEP61gv9pUIos5x7zXZSPC%2FUjUScDbPnGwsgw1zx7YyNGMHalZD1kTvE6QxcrVgg6RbSzTjbKJV%2Bv%2FV%2BCr763KwLjGw3yv2mrIGql4oVPBwFJ2hTQw6PGYo&X-Amz-Signature=3fe83a0da61dd275dfb8d7aaff227e5141f80a92c5b61d69d29a05526f4996c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IABLTS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIB%2Fbbye6SJPliNw3CbqeLHGWzLq3SnrnU3c4IuffbeKxAiEAsxqPY1tIyDThIjGWN8SMLjlbzb3cUtj9A19ppqbhz24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBTnZpKQa635XX02BircA89060MnT0YFS12ktjXt30fVE1E1rJbY2pqgQRfGoTqJjZCLskTEgatoqL4LoPG3oDCVnPDfvKSB6UicrhzuQ1EURgGqhT6MpfAx5SeXnjatV9PwwfHiGRG6B6F0b9Rzwp%2FbkY3pV%2FP3wXPvLJLHwD0kRF7Roiwx2nnZJdPQdYu9SkvW3P5tONRzpzG%2F9IlWns6Xan2hUkC4c3CMjULwPxe3FS0eSzPGcCeqXbGTvQ6li6kh%2BtTmCUeS9RcmnEAlMHXPfWJO3vWUvQBoTXS68GpZOP4GcoG4KcMnr6xuSKLRlRFp5q9Ece0IImoVjml0TbITdo3DACFACEDEEz9YeDiEL4Y7Nzhcd7nQtMMwAn3%2B6U7OuSUMfeUdWrvIirK9GoNbxXdLVyJpHz6e4%2F475amhiTiIo9OXYYCyGrK%2FtxWDy40MD%2Br682rCemZYNUmr2GlLvseAp7dr%2BbWnfSHqE2KrwEDAc5WmV%2FKVspEji2BuDu28X%2FE%2BcSJls%2F8nhzqnDHXcUtxy7t2rmaaBA4hQNOtjBolcgDS%2FbIW7F%2FwcxzLFm6y5lqU8Qk3TNJlWXeNCzhW0GHf64n4GpDD2xSAKXBuJIUpc3F2x%2B4pIz30WkGPcPXOQxZLUKA0V%2FrauMJS1n78GOqUByf7hZcz1JIpkAzLh83KLCTRWGcNA0Pff2OBRPQCbW3qyG3xvl1H2KRemKH0kk9cg6ZRtiW8qAOavGbtGzTh2CL5es0PfnbpUmdnYAtEP61gv9pUIos5x7zXZSPC%2FUjUScDbPnGwsgw1zx7YyNGMHalZD1kTvE6QxcrVgg6RbSzTjbKJV%2Bv%2FV%2BCr763KwLjGw3yv2mrIGql4oVPBwFJ2hTQw6PGYo&X-Amz-Signature=69f21d919edd250a8c64f2d298d6737f1b7ebd93e44f50c6384c5c171af3e31f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IABLTS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIB%2Fbbye6SJPliNw3CbqeLHGWzLq3SnrnU3c4IuffbeKxAiEAsxqPY1tIyDThIjGWN8SMLjlbzb3cUtj9A19ppqbhz24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBTnZpKQa635XX02BircA89060MnT0YFS12ktjXt30fVE1E1rJbY2pqgQRfGoTqJjZCLskTEgatoqL4LoPG3oDCVnPDfvKSB6UicrhzuQ1EURgGqhT6MpfAx5SeXnjatV9PwwfHiGRG6B6F0b9Rzwp%2FbkY3pV%2FP3wXPvLJLHwD0kRF7Roiwx2nnZJdPQdYu9SkvW3P5tONRzpzG%2F9IlWns6Xan2hUkC4c3CMjULwPxe3FS0eSzPGcCeqXbGTvQ6li6kh%2BtTmCUeS9RcmnEAlMHXPfWJO3vWUvQBoTXS68GpZOP4GcoG4KcMnr6xuSKLRlRFp5q9Ece0IImoVjml0TbITdo3DACFACEDEEz9YeDiEL4Y7Nzhcd7nQtMMwAn3%2B6U7OuSUMfeUdWrvIirK9GoNbxXdLVyJpHz6e4%2F475amhiTiIo9OXYYCyGrK%2FtxWDy40MD%2Br682rCemZYNUmr2GlLvseAp7dr%2BbWnfSHqE2KrwEDAc5WmV%2FKVspEji2BuDu28X%2FE%2BcSJls%2F8nhzqnDHXcUtxy7t2rmaaBA4hQNOtjBolcgDS%2FbIW7F%2FwcxzLFm6y5lqU8Qk3TNJlWXeNCzhW0GHf64n4GpDD2xSAKXBuJIUpc3F2x%2B4pIz30WkGPcPXOQxZLUKA0V%2FrauMJS1n78GOqUByf7hZcz1JIpkAzLh83KLCTRWGcNA0Pff2OBRPQCbW3qyG3xvl1H2KRemKH0kk9cg6ZRtiW8qAOavGbtGzTh2CL5es0PfnbpUmdnYAtEP61gv9pUIos5x7zXZSPC%2FUjUScDbPnGwsgw1zx7YyNGMHalZD1kTvE6QxcrVgg6RbSzTjbKJV%2Bv%2FV%2BCr763KwLjGw3yv2mrIGql4oVPBwFJ2hTQw6PGYo&X-Amz-Signature=98a5a51c616d4deb87030823fa34217badfea6eb939222d063f039930363d6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IABLTS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIB%2Fbbye6SJPliNw3CbqeLHGWzLq3SnrnU3c4IuffbeKxAiEAsxqPY1tIyDThIjGWN8SMLjlbzb3cUtj9A19ppqbhz24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBTnZpKQa635XX02BircA89060MnT0YFS12ktjXt30fVE1E1rJbY2pqgQRfGoTqJjZCLskTEgatoqL4LoPG3oDCVnPDfvKSB6UicrhzuQ1EURgGqhT6MpfAx5SeXnjatV9PwwfHiGRG6B6F0b9Rzwp%2FbkY3pV%2FP3wXPvLJLHwD0kRF7Roiwx2nnZJdPQdYu9SkvW3P5tONRzpzG%2F9IlWns6Xan2hUkC4c3CMjULwPxe3FS0eSzPGcCeqXbGTvQ6li6kh%2BtTmCUeS9RcmnEAlMHXPfWJO3vWUvQBoTXS68GpZOP4GcoG4KcMnr6xuSKLRlRFp5q9Ece0IImoVjml0TbITdo3DACFACEDEEz9YeDiEL4Y7Nzhcd7nQtMMwAn3%2B6U7OuSUMfeUdWrvIirK9GoNbxXdLVyJpHz6e4%2F475amhiTiIo9OXYYCyGrK%2FtxWDy40MD%2Br682rCemZYNUmr2GlLvseAp7dr%2BbWnfSHqE2KrwEDAc5WmV%2FKVspEji2BuDu28X%2FE%2BcSJls%2F8nhzqnDHXcUtxy7t2rmaaBA4hQNOtjBolcgDS%2FbIW7F%2FwcxzLFm6y5lqU8Qk3TNJlWXeNCzhW0GHf64n4GpDD2xSAKXBuJIUpc3F2x%2B4pIz30WkGPcPXOQxZLUKA0V%2FrauMJS1n78GOqUByf7hZcz1JIpkAzLh83KLCTRWGcNA0Pff2OBRPQCbW3qyG3xvl1H2KRemKH0kk9cg6ZRtiW8qAOavGbtGzTh2CL5es0PfnbpUmdnYAtEP61gv9pUIos5x7zXZSPC%2FUjUScDbPnGwsgw1zx7YyNGMHalZD1kTvE6QxcrVgg6RbSzTjbKJV%2Bv%2FV%2BCr763KwLjGw3yv2mrIGql4oVPBwFJ2hTQw6PGYo&X-Amz-Signature=a2e78cb7f1eddaca05c9ad5e1771b8ce64bbfdd0f79e44320ef772f90a20fb99&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IABLTS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIB%2Fbbye6SJPliNw3CbqeLHGWzLq3SnrnU3c4IuffbeKxAiEAsxqPY1tIyDThIjGWN8SMLjlbzb3cUtj9A19ppqbhz24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBTnZpKQa635XX02BircA89060MnT0YFS12ktjXt30fVE1E1rJbY2pqgQRfGoTqJjZCLskTEgatoqL4LoPG3oDCVnPDfvKSB6UicrhzuQ1EURgGqhT6MpfAx5SeXnjatV9PwwfHiGRG6B6F0b9Rzwp%2FbkY3pV%2FP3wXPvLJLHwD0kRF7Roiwx2nnZJdPQdYu9SkvW3P5tONRzpzG%2F9IlWns6Xan2hUkC4c3CMjULwPxe3FS0eSzPGcCeqXbGTvQ6li6kh%2BtTmCUeS9RcmnEAlMHXPfWJO3vWUvQBoTXS68GpZOP4GcoG4KcMnr6xuSKLRlRFp5q9Ece0IImoVjml0TbITdo3DACFACEDEEz9YeDiEL4Y7Nzhcd7nQtMMwAn3%2B6U7OuSUMfeUdWrvIirK9GoNbxXdLVyJpHz6e4%2F475amhiTiIo9OXYYCyGrK%2FtxWDy40MD%2Br682rCemZYNUmr2GlLvseAp7dr%2BbWnfSHqE2KrwEDAc5WmV%2FKVspEji2BuDu28X%2FE%2BcSJls%2F8nhzqnDHXcUtxy7t2rmaaBA4hQNOtjBolcgDS%2FbIW7F%2FwcxzLFm6y5lqU8Qk3TNJlWXeNCzhW0GHf64n4GpDD2xSAKXBuJIUpc3F2x%2B4pIz30WkGPcPXOQxZLUKA0V%2FrauMJS1n78GOqUByf7hZcz1JIpkAzLh83KLCTRWGcNA0Pff2OBRPQCbW3qyG3xvl1H2KRemKH0kk9cg6ZRtiW8qAOavGbtGzTh2CL5es0PfnbpUmdnYAtEP61gv9pUIos5x7zXZSPC%2FUjUScDbPnGwsgw1zx7YyNGMHalZD1kTvE6QxcrVgg6RbSzTjbKJV%2Bv%2FV%2BCr763KwLjGw3yv2mrIGql4oVPBwFJ2hTQw6PGYo&X-Amz-Signature=1ae18531f49f6fd782da0fbc1db0d39e798ae98b09faf25916aabbe31d4b0fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IABLTS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIB%2Fbbye6SJPliNw3CbqeLHGWzLq3SnrnU3c4IuffbeKxAiEAsxqPY1tIyDThIjGWN8SMLjlbzb3cUtj9A19ppqbhz24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBTnZpKQa635XX02BircA89060MnT0YFS12ktjXt30fVE1E1rJbY2pqgQRfGoTqJjZCLskTEgatoqL4LoPG3oDCVnPDfvKSB6UicrhzuQ1EURgGqhT6MpfAx5SeXnjatV9PwwfHiGRG6B6F0b9Rzwp%2FbkY3pV%2FP3wXPvLJLHwD0kRF7Roiwx2nnZJdPQdYu9SkvW3P5tONRzpzG%2F9IlWns6Xan2hUkC4c3CMjULwPxe3FS0eSzPGcCeqXbGTvQ6li6kh%2BtTmCUeS9RcmnEAlMHXPfWJO3vWUvQBoTXS68GpZOP4GcoG4KcMnr6xuSKLRlRFp5q9Ece0IImoVjml0TbITdo3DACFACEDEEz9YeDiEL4Y7Nzhcd7nQtMMwAn3%2B6U7OuSUMfeUdWrvIirK9GoNbxXdLVyJpHz6e4%2F475amhiTiIo9OXYYCyGrK%2FtxWDy40MD%2Br682rCemZYNUmr2GlLvseAp7dr%2BbWnfSHqE2KrwEDAc5WmV%2FKVspEji2BuDu28X%2FE%2BcSJls%2F8nhzqnDHXcUtxy7t2rmaaBA4hQNOtjBolcgDS%2FbIW7F%2FwcxzLFm6y5lqU8Qk3TNJlWXeNCzhW0GHf64n4GpDD2xSAKXBuJIUpc3F2x%2B4pIz30WkGPcPXOQxZLUKA0V%2FrauMJS1n78GOqUByf7hZcz1JIpkAzLh83KLCTRWGcNA0Pff2OBRPQCbW3qyG3xvl1H2KRemKH0kk9cg6ZRtiW8qAOavGbtGzTh2CL5es0PfnbpUmdnYAtEP61gv9pUIos5x7zXZSPC%2FUjUScDbPnGwsgw1zx7YyNGMHalZD1kTvE6QxcrVgg6RbSzTjbKJV%2Bv%2FV%2BCr763KwLjGw3yv2mrIGql4oVPBwFJ2hTQw6PGYo&X-Amz-Signature=723ec99a8921f8358aa7465eaca13d27cea43f4901aee075635374d324e08947&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

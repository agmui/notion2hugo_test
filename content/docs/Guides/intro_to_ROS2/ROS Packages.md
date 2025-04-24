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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IPAYKW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBZleO3%2B51pL71ApuVxsQyyfWzis54e4Opvbs2aju5HRAiEA6lg9g%2BgdaIof2tIy89NAmC51MdzYj3NEOvNrOtwzYVAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKKHO%2F5cDxwYuwXWIyrcA9Gh8b0gD81wJ5vxNfPahSuC8x%2Bq6jA2jcuK%2Fpo9Vmk1%2BVd%2BWfDxFrBQ98plLU8zUPosdbyN%2BHz3weyIBDXYgH%2F%2FQ2qTjBXmwFu0jqJJFNbgVkk69gHSsRBxVu78xNOfhQUHIl1B49cBGluo%2BNEjpQPnHrKST5s0kCtH5aqQW8t6x4hqweYopyOy7asyRoCz9kGXlvr0hOgerehnSAc8dq%2FbmKRquEM9CG6Q9enLUvIkZK87%2F0unErLWasGF7Dhiculs%2FXntl2Wx2RHYoYSVQw6WQfkIL9B%2FOJWtYdy6%2FDiX5oVU3dH1uI038If3YUbIhg1rdupgO79h7U4ru0g3so74gnQ4%2BMgP1BWCatGo3zRlrvCL8VMIgms0zTax8%2BbMVtoj915BaHBN0jOmW9tLT8ZN2wIirKUea7WAidmJUejGBfm%2BiRwTDIPe%2FP4kiZJLz8U7nIj%2F7J609cX5paDrlcM9G1KEDv%2FyD%2B99YVJWiut5kB3h%2FDPWL81071eYvUcK0BzHaLGka3mBdNXJRvyAb7mEu5hDUVZjjVPcO5ttfG6CRoZZxiUp%2FayT9d3tTgDYuRLIab4OYiC%2FJFc6zJH0WZqy3%2FICiy3QeHn59ul946I9Idk7EklSHGTV8ysaMLq8qMAGOqUBRgv3EtHyHpcIeqnOJ5Jbn2VeH%2FxciEjPD05uJU6LVygHiBQMe8DLciKMvyX0A2zOBvoUVnG1WnYn6K6DzoRyoIidDktsZLyWld4AT9zcP8pTCjVfbWQmCVGdzC%2BdOOg40xzs0OLlhY3cdjzLPJom0zziMgcO5HmYxeCtS5VEZe32FKHEWz8MqJbqt5f9YhCYntrRlelnlyTIwr137rBR%2FIgSaEDN&X-Amz-Signature=39029bf79a8ae33f983059ac53b6033369a9e14a36aa2d9a261bdc0cb2cec577&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IPAYKW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBZleO3%2B51pL71ApuVxsQyyfWzis54e4Opvbs2aju5HRAiEA6lg9g%2BgdaIof2tIy89NAmC51MdzYj3NEOvNrOtwzYVAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKKHO%2F5cDxwYuwXWIyrcA9Gh8b0gD81wJ5vxNfPahSuC8x%2Bq6jA2jcuK%2Fpo9Vmk1%2BVd%2BWfDxFrBQ98plLU8zUPosdbyN%2BHz3weyIBDXYgH%2F%2FQ2qTjBXmwFu0jqJJFNbgVkk69gHSsRBxVu78xNOfhQUHIl1B49cBGluo%2BNEjpQPnHrKST5s0kCtH5aqQW8t6x4hqweYopyOy7asyRoCz9kGXlvr0hOgerehnSAc8dq%2FbmKRquEM9CG6Q9enLUvIkZK87%2F0unErLWasGF7Dhiculs%2FXntl2Wx2RHYoYSVQw6WQfkIL9B%2FOJWtYdy6%2FDiX5oVU3dH1uI038If3YUbIhg1rdupgO79h7U4ru0g3so74gnQ4%2BMgP1BWCatGo3zRlrvCL8VMIgms0zTax8%2BbMVtoj915BaHBN0jOmW9tLT8ZN2wIirKUea7WAidmJUejGBfm%2BiRwTDIPe%2FP4kiZJLz8U7nIj%2F7J609cX5paDrlcM9G1KEDv%2FyD%2B99YVJWiut5kB3h%2FDPWL81071eYvUcK0BzHaLGka3mBdNXJRvyAb7mEu5hDUVZjjVPcO5ttfG6CRoZZxiUp%2FayT9d3tTgDYuRLIab4OYiC%2FJFc6zJH0WZqy3%2FICiy3QeHn59ul946I9Idk7EklSHGTV8ysaMLq8qMAGOqUBRgv3EtHyHpcIeqnOJ5Jbn2VeH%2FxciEjPD05uJU6LVygHiBQMe8DLciKMvyX0A2zOBvoUVnG1WnYn6K6DzoRyoIidDktsZLyWld4AT9zcP8pTCjVfbWQmCVGdzC%2BdOOg40xzs0OLlhY3cdjzLPJom0zziMgcO5HmYxeCtS5VEZe32FKHEWz8MqJbqt5f9YhCYntrRlelnlyTIwr137rBR%2FIgSaEDN&X-Amz-Signature=d52fd847c6ba7f38b60af0b22ccc6f31a5f4759ffea583b467c0b008f2ed4441&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IPAYKW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBZleO3%2B51pL71ApuVxsQyyfWzis54e4Opvbs2aju5HRAiEA6lg9g%2BgdaIof2tIy89NAmC51MdzYj3NEOvNrOtwzYVAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKKHO%2F5cDxwYuwXWIyrcA9Gh8b0gD81wJ5vxNfPahSuC8x%2Bq6jA2jcuK%2Fpo9Vmk1%2BVd%2BWfDxFrBQ98plLU8zUPosdbyN%2BHz3weyIBDXYgH%2F%2FQ2qTjBXmwFu0jqJJFNbgVkk69gHSsRBxVu78xNOfhQUHIl1B49cBGluo%2BNEjpQPnHrKST5s0kCtH5aqQW8t6x4hqweYopyOy7asyRoCz9kGXlvr0hOgerehnSAc8dq%2FbmKRquEM9CG6Q9enLUvIkZK87%2F0unErLWasGF7Dhiculs%2FXntl2Wx2RHYoYSVQw6WQfkIL9B%2FOJWtYdy6%2FDiX5oVU3dH1uI038If3YUbIhg1rdupgO79h7U4ru0g3so74gnQ4%2BMgP1BWCatGo3zRlrvCL8VMIgms0zTax8%2BbMVtoj915BaHBN0jOmW9tLT8ZN2wIirKUea7WAidmJUejGBfm%2BiRwTDIPe%2FP4kiZJLz8U7nIj%2F7J609cX5paDrlcM9G1KEDv%2FyD%2B99YVJWiut5kB3h%2FDPWL81071eYvUcK0BzHaLGka3mBdNXJRvyAb7mEu5hDUVZjjVPcO5ttfG6CRoZZxiUp%2FayT9d3tTgDYuRLIab4OYiC%2FJFc6zJH0WZqy3%2FICiy3QeHn59ul946I9Idk7EklSHGTV8ysaMLq8qMAGOqUBRgv3EtHyHpcIeqnOJ5Jbn2VeH%2FxciEjPD05uJU6LVygHiBQMe8DLciKMvyX0A2zOBvoUVnG1WnYn6K6DzoRyoIidDktsZLyWld4AT9zcP8pTCjVfbWQmCVGdzC%2BdOOg40xzs0OLlhY3cdjzLPJom0zziMgcO5HmYxeCtS5VEZe32FKHEWz8MqJbqt5f9YhCYntrRlelnlyTIwr137rBR%2FIgSaEDN&X-Amz-Signature=10a468e7d7eada49f94b7910d8684cf9f065f7bdd499508982ae9bbb4e7108da&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IPAYKW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBZleO3%2B51pL71ApuVxsQyyfWzis54e4Opvbs2aju5HRAiEA6lg9g%2BgdaIof2tIy89NAmC51MdzYj3NEOvNrOtwzYVAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKKHO%2F5cDxwYuwXWIyrcA9Gh8b0gD81wJ5vxNfPahSuC8x%2Bq6jA2jcuK%2Fpo9Vmk1%2BVd%2BWfDxFrBQ98plLU8zUPosdbyN%2BHz3weyIBDXYgH%2F%2FQ2qTjBXmwFu0jqJJFNbgVkk69gHSsRBxVu78xNOfhQUHIl1B49cBGluo%2BNEjpQPnHrKST5s0kCtH5aqQW8t6x4hqweYopyOy7asyRoCz9kGXlvr0hOgerehnSAc8dq%2FbmKRquEM9CG6Q9enLUvIkZK87%2F0unErLWasGF7Dhiculs%2FXntl2Wx2RHYoYSVQw6WQfkIL9B%2FOJWtYdy6%2FDiX5oVU3dH1uI038If3YUbIhg1rdupgO79h7U4ru0g3so74gnQ4%2BMgP1BWCatGo3zRlrvCL8VMIgms0zTax8%2BbMVtoj915BaHBN0jOmW9tLT8ZN2wIirKUea7WAidmJUejGBfm%2BiRwTDIPe%2FP4kiZJLz8U7nIj%2F7J609cX5paDrlcM9G1KEDv%2FyD%2B99YVJWiut5kB3h%2FDPWL81071eYvUcK0BzHaLGka3mBdNXJRvyAb7mEu5hDUVZjjVPcO5ttfG6CRoZZxiUp%2FayT9d3tTgDYuRLIab4OYiC%2FJFc6zJH0WZqy3%2FICiy3QeHn59ul946I9Idk7EklSHGTV8ysaMLq8qMAGOqUBRgv3EtHyHpcIeqnOJ5Jbn2VeH%2FxciEjPD05uJU6LVygHiBQMe8DLciKMvyX0A2zOBvoUVnG1WnYn6K6DzoRyoIidDktsZLyWld4AT9zcP8pTCjVfbWQmCVGdzC%2BdOOg40xzs0OLlhY3cdjzLPJom0zziMgcO5HmYxeCtS5VEZe32FKHEWz8MqJbqt5f9YhCYntrRlelnlyTIwr137rBR%2FIgSaEDN&X-Amz-Signature=f6f2a2ef668a61fba5bc163db8d45dbf4e6913e30ac850f810e15fbafe013340&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IPAYKW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBZleO3%2B51pL71ApuVxsQyyfWzis54e4Opvbs2aju5HRAiEA6lg9g%2BgdaIof2tIy89NAmC51MdzYj3NEOvNrOtwzYVAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKKHO%2F5cDxwYuwXWIyrcA9Gh8b0gD81wJ5vxNfPahSuC8x%2Bq6jA2jcuK%2Fpo9Vmk1%2BVd%2BWfDxFrBQ98plLU8zUPosdbyN%2BHz3weyIBDXYgH%2F%2FQ2qTjBXmwFu0jqJJFNbgVkk69gHSsRBxVu78xNOfhQUHIl1B49cBGluo%2BNEjpQPnHrKST5s0kCtH5aqQW8t6x4hqweYopyOy7asyRoCz9kGXlvr0hOgerehnSAc8dq%2FbmKRquEM9CG6Q9enLUvIkZK87%2F0unErLWasGF7Dhiculs%2FXntl2Wx2RHYoYSVQw6WQfkIL9B%2FOJWtYdy6%2FDiX5oVU3dH1uI038If3YUbIhg1rdupgO79h7U4ru0g3so74gnQ4%2BMgP1BWCatGo3zRlrvCL8VMIgms0zTax8%2BbMVtoj915BaHBN0jOmW9tLT8ZN2wIirKUea7WAidmJUejGBfm%2BiRwTDIPe%2FP4kiZJLz8U7nIj%2F7J609cX5paDrlcM9G1KEDv%2FyD%2B99YVJWiut5kB3h%2FDPWL81071eYvUcK0BzHaLGka3mBdNXJRvyAb7mEu5hDUVZjjVPcO5ttfG6CRoZZxiUp%2FayT9d3tTgDYuRLIab4OYiC%2FJFc6zJH0WZqy3%2FICiy3QeHn59ul946I9Idk7EklSHGTV8ysaMLq8qMAGOqUBRgv3EtHyHpcIeqnOJ5Jbn2VeH%2FxciEjPD05uJU6LVygHiBQMe8DLciKMvyX0A2zOBvoUVnG1WnYn6K6DzoRyoIidDktsZLyWld4AT9zcP8pTCjVfbWQmCVGdzC%2BdOOg40xzs0OLlhY3cdjzLPJom0zziMgcO5HmYxeCtS5VEZe32FKHEWz8MqJbqt5f9YhCYntrRlelnlyTIwr137rBR%2FIgSaEDN&X-Amz-Signature=94cd046020f427913d4a55633e94cf9fe820a621a73481880eebf83a8f4006eb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IPAYKW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBZleO3%2B51pL71ApuVxsQyyfWzis54e4Opvbs2aju5HRAiEA6lg9g%2BgdaIof2tIy89NAmC51MdzYj3NEOvNrOtwzYVAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKKHO%2F5cDxwYuwXWIyrcA9Gh8b0gD81wJ5vxNfPahSuC8x%2Bq6jA2jcuK%2Fpo9Vmk1%2BVd%2BWfDxFrBQ98plLU8zUPosdbyN%2BHz3weyIBDXYgH%2F%2FQ2qTjBXmwFu0jqJJFNbgVkk69gHSsRBxVu78xNOfhQUHIl1B49cBGluo%2BNEjpQPnHrKST5s0kCtH5aqQW8t6x4hqweYopyOy7asyRoCz9kGXlvr0hOgerehnSAc8dq%2FbmKRquEM9CG6Q9enLUvIkZK87%2F0unErLWasGF7Dhiculs%2FXntl2Wx2RHYoYSVQw6WQfkIL9B%2FOJWtYdy6%2FDiX5oVU3dH1uI038If3YUbIhg1rdupgO79h7U4ru0g3so74gnQ4%2BMgP1BWCatGo3zRlrvCL8VMIgms0zTax8%2BbMVtoj915BaHBN0jOmW9tLT8ZN2wIirKUea7WAidmJUejGBfm%2BiRwTDIPe%2FP4kiZJLz8U7nIj%2F7J609cX5paDrlcM9G1KEDv%2FyD%2B99YVJWiut5kB3h%2FDPWL81071eYvUcK0BzHaLGka3mBdNXJRvyAb7mEu5hDUVZjjVPcO5ttfG6CRoZZxiUp%2FayT9d3tTgDYuRLIab4OYiC%2FJFc6zJH0WZqy3%2FICiy3QeHn59ul946I9Idk7EklSHGTV8ysaMLq8qMAGOqUBRgv3EtHyHpcIeqnOJ5Jbn2VeH%2FxciEjPD05uJU6LVygHiBQMe8DLciKMvyX0A2zOBvoUVnG1WnYn6K6DzoRyoIidDktsZLyWld4AT9zcP8pTCjVfbWQmCVGdzC%2BdOOg40xzs0OLlhY3cdjzLPJom0zziMgcO5HmYxeCtS5VEZe32FKHEWz8MqJbqt5f9YhCYntrRlelnlyTIwr137rBR%2FIgSaEDN&X-Amz-Signature=4a6dfe01676b100a7be6333903c9dc3e4e2115554e2cd99694105df040122717&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IPAYKW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBZleO3%2B51pL71ApuVxsQyyfWzis54e4Opvbs2aju5HRAiEA6lg9g%2BgdaIof2tIy89NAmC51MdzYj3NEOvNrOtwzYVAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKKHO%2F5cDxwYuwXWIyrcA9Gh8b0gD81wJ5vxNfPahSuC8x%2Bq6jA2jcuK%2Fpo9Vmk1%2BVd%2BWfDxFrBQ98plLU8zUPosdbyN%2BHz3weyIBDXYgH%2F%2FQ2qTjBXmwFu0jqJJFNbgVkk69gHSsRBxVu78xNOfhQUHIl1B49cBGluo%2BNEjpQPnHrKST5s0kCtH5aqQW8t6x4hqweYopyOy7asyRoCz9kGXlvr0hOgerehnSAc8dq%2FbmKRquEM9CG6Q9enLUvIkZK87%2F0unErLWasGF7Dhiculs%2FXntl2Wx2RHYoYSVQw6WQfkIL9B%2FOJWtYdy6%2FDiX5oVU3dH1uI038If3YUbIhg1rdupgO79h7U4ru0g3so74gnQ4%2BMgP1BWCatGo3zRlrvCL8VMIgms0zTax8%2BbMVtoj915BaHBN0jOmW9tLT8ZN2wIirKUea7WAidmJUejGBfm%2BiRwTDIPe%2FP4kiZJLz8U7nIj%2F7J609cX5paDrlcM9G1KEDv%2FyD%2B99YVJWiut5kB3h%2FDPWL81071eYvUcK0BzHaLGka3mBdNXJRvyAb7mEu5hDUVZjjVPcO5ttfG6CRoZZxiUp%2FayT9d3tTgDYuRLIab4OYiC%2FJFc6zJH0WZqy3%2FICiy3QeHn59ul946I9Idk7EklSHGTV8ysaMLq8qMAGOqUBRgv3EtHyHpcIeqnOJ5Jbn2VeH%2FxciEjPD05uJU6LVygHiBQMe8DLciKMvyX0A2zOBvoUVnG1WnYn6K6DzoRyoIidDktsZLyWld4AT9zcP8pTCjVfbWQmCVGdzC%2BdOOg40xzs0OLlhY3cdjzLPJom0zziMgcO5HmYxeCtS5VEZe32FKHEWz8MqJbqt5f9YhCYntrRlelnlyTIwr137rBR%2FIgSaEDN&X-Amz-Signature=67aaee357913766a62637c6f0930449ed1b9ac937084c22d51df32e834179d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

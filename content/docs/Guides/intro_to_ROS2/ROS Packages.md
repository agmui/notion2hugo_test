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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JZDDO6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFyT7%2F10Sq1ydMYWocPKHCJZi2EiDY0ayytI%2BJUM12z%2FAiEAxXC3h7NH8q603%2B%2F2%2BOIWQ%2Bo0vOqFCdiSJI2%2BDCClGloqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIISeil0jqBc%2B8LyircA6LoDEbguPUCpPonE1rkDLqpEhlsGKdO4uCoCDVWxcVf%2BEeDnWkCLl7t75NWqIO%2B1J7XeaNJooiH8OPII6dYUDd8yBLqEhvwooX6vYhn1QrYLY31Q%2BP3DIQX8YA1faXq5sfQBlB6XQvMgnJSbvLoJjSm5kIu01xXEbGLT4QWSVBETDzhR8NTmW8O%2FOFkpTktrZ15ZmjpfSqG7D8fjLRORTGM4eODq3eaPJshu4uT%2FbUEipInNVvbHVrZMMVJ0yxzH%2BkSShRPG856cDlQSXJ1YO9nlkNpYD028wBworTUBQk%2Fvyu53oIUiBJuYUSqUit129xeUhQbj2MrJP5Bz2ipjJ3dsUK5V93tHt03KrxwfEkTTZ7PE64jFsLApezCDVZofftGkjjDbAlSLdvxu0kBP1Bs7adv70oAi2UPu1GsKZfsgKRuFg5Y6AJIoKpj0sLtEwDyA1l4JVgChsyTte1Rd%2FitEqn770nl4Pvc2sSR2Mpm4gOIaaCatAJ29niHP4894%2FP3chHsxY4P513VoA8M3jZ0csns%2Fw5aAIHXeys43uo8vLv%2FyxJjoRn3k8veOyy1aOc6rxAzT8ImvxZBfzQNU6P5KwxL2F2bH6lHBCtPJJTdllSpQNfAmYPPBUaEMMu078EGOqUBl4JmJZ9wGS0M6UfvZYdZLpVpZ3j1PdqnpiFa9vQj30bCJsGmFmXnmF8e037vPKrGBCjPwUTgQ1sNp43xI83DBz3bGmZhHQ8uQoZSHQH2P%2FDsLgEeHMT9jet0KCZX3IEQX1CKFiF5zYf3WV6WxJumWM1mhYbpRGZ1JuuU%2Fhn9Z2fNbhWcwgCXJVCyD5WqnHeDNBpR1neRya8osRRYAq1J27QZiElm&X-Amz-Signature=ab1ae0d0f3a8b936cdc8cc4d9bd98f74cc0486b18ffc0140f5fd5e5b7912b0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JZDDO6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFyT7%2F10Sq1ydMYWocPKHCJZi2EiDY0ayytI%2BJUM12z%2FAiEAxXC3h7NH8q603%2B%2F2%2BOIWQ%2Bo0vOqFCdiSJI2%2BDCClGloqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIISeil0jqBc%2B8LyircA6LoDEbguPUCpPonE1rkDLqpEhlsGKdO4uCoCDVWxcVf%2BEeDnWkCLl7t75NWqIO%2B1J7XeaNJooiH8OPII6dYUDd8yBLqEhvwooX6vYhn1QrYLY31Q%2BP3DIQX8YA1faXq5sfQBlB6XQvMgnJSbvLoJjSm5kIu01xXEbGLT4QWSVBETDzhR8NTmW8O%2FOFkpTktrZ15ZmjpfSqG7D8fjLRORTGM4eODq3eaPJshu4uT%2FbUEipInNVvbHVrZMMVJ0yxzH%2BkSShRPG856cDlQSXJ1YO9nlkNpYD028wBworTUBQk%2Fvyu53oIUiBJuYUSqUit129xeUhQbj2MrJP5Bz2ipjJ3dsUK5V93tHt03KrxwfEkTTZ7PE64jFsLApezCDVZofftGkjjDbAlSLdvxu0kBP1Bs7adv70oAi2UPu1GsKZfsgKRuFg5Y6AJIoKpj0sLtEwDyA1l4JVgChsyTte1Rd%2FitEqn770nl4Pvc2sSR2Mpm4gOIaaCatAJ29niHP4894%2FP3chHsxY4P513VoA8M3jZ0csns%2Fw5aAIHXeys43uo8vLv%2FyxJjoRn3k8veOyy1aOc6rxAzT8ImvxZBfzQNU6P5KwxL2F2bH6lHBCtPJJTdllSpQNfAmYPPBUaEMMu078EGOqUBl4JmJZ9wGS0M6UfvZYdZLpVpZ3j1PdqnpiFa9vQj30bCJsGmFmXnmF8e037vPKrGBCjPwUTgQ1sNp43xI83DBz3bGmZhHQ8uQoZSHQH2P%2FDsLgEeHMT9jet0KCZX3IEQX1CKFiF5zYf3WV6WxJumWM1mhYbpRGZ1JuuU%2Fhn9Z2fNbhWcwgCXJVCyD5WqnHeDNBpR1neRya8osRRYAq1J27QZiElm&X-Amz-Signature=8df89541685153fb013027d9d3bad840559af576349683f8e7bf3c2c21140c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JZDDO6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFyT7%2F10Sq1ydMYWocPKHCJZi2EiDY0ayytI%2BJUM12z%2FAiEAxXC3h7NH8q603%2B%2F2%2BOIWQ%2Bo0vOqFCdiSJI2%2BDCClGloqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIISeil0jqBc%2B8LyircA6LoDEbguPUCpPonE1rkDLqpEhlsGKdO4uCoCDVWxcVf%2BEeDnWkCLl7t75NWqIO%2B1J7XeaNJooiH8OPII6dYUDd8yBLqEhvwooX6vYhn1QrYLY31Q%2BP3DIQX8YA1faXq5sfQBlB6XQvMgnJSbvLoJjSm5kIu01xXEbGLT4QWSVBETDzhR8NTmW8O%2FOFkpTktrZ15ZmjpfSqG7D8fjLRORTGM4eODq3eaPJshu4uT%2FbUEipInNVvbHVrZMMVJ0yxzH%2BkSShRPG856cDlQSXJ1YO9nlkNpYD028wBworTUBQk%2Fvyu53oIUiBJuYUSqUit129xeUhQbj2MrJP5Bz2ipjJ3dsUK5V93tHt03KrxwfEkTTZ7PE64jFsLApezCDVZofftGkjjDbAlSLdvxu0kBP1Bs7adv70oAi2UPu1GsKZfsgKRuFg5Y6AJIoKpj0sLtEwDyA1l4JVgChsyTte1Rd%2FitEqn770nl4Pvc2sSR2Mpm4gOIaaCatAJ29niHP4894%2FP3chHsxY4P513VoA8M3jZ0csns%2Fw5aAIHXeys43uo8vLv%2FyxJjoRn3k8veOyy1aOc6rxAzT8ImvxZBfzQNU6P5KwxL2F2bH6lHBCtPJJTdllSpQNfAmYPPBUaEMMu078EGOqUBl4JmJZ9wGS0M6UfvZYdZLpVpZ3j1PdqnpiFa9vQj30bCJsGmFmXnmF8e037vPKrGBCjPwUTgQ1sNp43xI83DBz3bGmZhHQ8uQoZSHQH2P%2FDsLgEeHMT9jet0KCZX3IEQX1CKFiF5zYf3WV6WxJumWM1mhYbpRGZ1JuuU%2Fhn9Z2fNbhWcwgCXJVCyD5WqnHeDNBpR1neRya8osRRYAq1J27QZiElm&X-Amz-Signature=47aff47cafb79a693f01fe80693b35f60b78d071e5a5935887060a1595c00116&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JZDDO6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFyT7%2F10Sq1ydMYWocPKHCJZi2EiDY0ayytI%2BJUM12z%2FAiEAxXC3h7NH8q603%2B%2F2%2BOIWQ%2Bo0vOqFCdiSJI2%2BDCClGloqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIISeil0jqBc%2B8LyircA6LoDEbguPUCpPonE1rkDLqpEhlsGKdO4uCoCDVWxcVf%2BEeDnWkCLl7t75NWqIO%2B1J7XeaNJooiH8OPII6dYUDd8yBLqEhvwooX6vYhn1QrYLY31Q%2BP3DIQX8YA1faXq5sfQBlB6XQvMgnJSbvLoJjSm5kIu01xXEbGLT4QWSVBETDzhR8NTmW8O%2FOFkpTktrZ15ZmjpfSqG7D8fjLRORTGM4eODq3eaPJshu4uT%2FbUEipInNVvbHVrZMMVJ0yxzH%2BkSShRPG856cDlQSXJ1YO9nlkNpYD028wBworTUBQk%2Fvyu53oIUiBJuYUSqUit129xeUhQbj2MrJP5Bz2ipjJ3dsUK5V93tHt03KrxwfEkTTZ7PE64jFsLApezCDVZofftGkjjDbAlSLdvxu0kBP1Bs7adv70oAi2UPu1GsKZfsgKRuFg5Y6AJIoKpj0sLtEwDyA1l4JVgChsyTte1Rd%2FitEqn770nl4Pvc2sSR2Mpm4gOIaaCatAJ29niHP4894%2FP3chHsxY4P513VoA8M3jZ0csns%2Fw5aAIHXeys43uo8vLv%2FyxJjoRn3k8veOyy1aOc6rxAzT8ImvxZBfzQNU6P5KwxL2F2bH6lHBCtPJJTdllSpQNfAmYPPBUaEMMu078EGOqUBl4JmJZ9wGS0M6UfvZYdZLpVpZ3j1PdqnpiFa9vQj30bCJsGmFmXnmF8e037vPKrGBCjPwUTgQ1sNp43xI83DBz3bGmZhHQ8uQoZSHQH2P%2FDsLgEeHMT9jet0KCZX3IEQX1CKFiF5zYf3WV6WxJumWM1mhYbpRGZ1JuuU%2Fhn9Z2fNbhWcwgCXJVCyD5WqnHeDNBpR1neRya8osRRYAq1J27QZiElm&X-Amz-Signature=cd2a398fee33f004bfc6fb67e6fff69c7f8ff0e3bef427e80b72277ff041444a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JZDDO6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFyT7%2F10Sq1ydMYWocPKHCJZi2EiDY0ayytI%2BJUM12z%2FAiEAxXC3h7NH8q603%2B%2F2%2BOIWQ%2Bo0vOqFCdiSJI2%2BDCClGloqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIISeil0jqBc%2B8LyircA6LoDEbguPUCpPonE1rkDLqpEhlsGKdO4uCoCDVWxcVf%2BEeDnWkCLl7t75NWqIO%2B1J7XeaNJooiH8OPII6dYUDd8yBLqEhvwooX6vYhn1QrYLY31Q%2BP3DIQX8YA1faXq5sfQBlB6XQvMgnJSbvLoJjSm5kIu01xXEbGLT4QWSVBETDzhR8NTmW8O%2FOFkpTktrZ15ZmjpfSqG7D8fjLRORTGM4eODq3eaPJshu4uT%2FbUEipInNVvbHVrZMMVJ0yxzH%2BkSShRPG856cDlQSXJ1YO9nlkNpYD028wBworTUBQk%2Fvyu53oIUiBJuYUSqUit129xeUhQbj2MrJP5Bz2ipjJ3dsUK5V93tHt03KrxwfEkTTZ7PE64jFsLApezCDVZofftGkjjDbAlSLdvxu0kBP1Bs7adv70oAi2UPu1GsKZfsgKRuFg5Y6AJIoKpj0sLtEwDyA1l4JVgChsyTte1Rd%2FitEqn770nl4Pvc2sSR2Mpm4gOIaaCatAJ29niHP4894%2FP3chHsxY4P513VoA8M3jZ0csns%2Fw5aAIHXeys43uo8vLv%2FyxJjoRn3k8veOyy1aOc6rxAzT8ImvxZBfzQNU6P5KwxL2F2bH6lHBCtPJJTdllSpQNfAmYPPBUaEMMu078EGOqUBl4JmJZ9wGS0M6UfvZYdZLpVpZ3j1PdqnpiFa9vQj30bCJsGmFmXnmF8e037vPKrGBCjPwUTgQ1sNp43xI83DBz3bGmZhHQ8uQoZSHQH2P%2FDsLgEeHMT9jet0KCZX3IEQX1CKFiF5zYf3WV6WxJumWM1mhYbpRGZ1JuuU%2Fhn9Z2fNbhWcwgCXJVCyD5WqnHeDNBpR1neRya8osRRYAq1J27QZiElm&X-Amz-Signature=031bcf52c0310bfaad915d54e7815f04a80de6f6d53672ee329ebaa2be416f28&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JZDDO6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFyT7%2F10Sq1ydMYWocPKHCJZi2EiDY0ayytI%2BJUM12z%2FAiEAxXC3h7NH8q603%2B%2F2%2BOIWQ%2Bo0vOqFCdiSJI2%2BDCClGloqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIISeil0jqBc%2B8LyircA6LoDEbguPUCpPonE1rkDLqpEhlsGKdO4uCoCDVWxcVf%2BEeDnWkCLl7t75NWqIO%2B1J7XeaNJooiH8OPII6dYUDd8yBLqEhvwooX6vYhn1QrYLY31Q%2BP3DIQX8YA1faXq5sfQBlB6XQvMgnJSbvLoJjSm5kIu01xXEbGLT4QWSVBETDzhR8NTmW8O%2FOFkpTktrZ15ZmjpfSqG7D8fjLRORTGM4eODq3eaPJshu4uT%2FbUEipInNVvbHVrZMMVJ0yxzH%2BkSShRPG856cDlQSXJ1YO9nlkNpYD028wBworTUBQk%2Fvyu53oIUiBJuYUSqUit129xeUhQbj2MrJP5Bz2ipjJ3dsUK5V93tHt03KrxwfEkTTZ7PE64jFsLApezCDVZofftGkjjDbAlSLdvxu0kBP1Bs7adv70oAi2UPu1GsKZfsgKRuFg5Y6AJIoKpj0sLtEwDyA1l4JVgChsyTte1Rd%2FitEqn770nl4Pvc2sSR2Mpm4gOIaaCatAJ29niHP4894%2FP3chHsxY4P513VoA8M3jZ0csns%2Fw5aAIHXeys43uo8vLv%2FyxJjoRn3k8veOyy1aOc6rxAzT8ImvxZBfzQNU6P5KwxL2F2bH6lHBCtPJJTdllSpQNfAmYPPBUaEMMu078EGOqUBl4JmJZ9wGS0M6UfvZYdZLpVpZ3j1PdqnpiFa9vQj30bCJsGmFmXnmF8e037vPKrGBCjPwUTgQ1sNp43xI83DBz3bGmZhHQ8uQoZSHQH2P%2FDsLgEeHMT9jet0KCZX3IEQX1CKFiF5zYf3WV6WxJumWM1mhYbpRGZ1JuuU%2Fhn9Z2fNbhWcwgCXJVCyD5WqnHeDNBpR1neRya8osRRYAq1J27QZiElm&X-Amz-Signature=305c17c35df4460e218a749dc41d760616fe9d0d16359ab3ddab504d61b37cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JZDDO6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFyT7%2F10Sq1ydMYWocPKHCJZi2EiDY0ayytI%2BJUM12z%2FAiEAxXC3h7NH8q603%2B%2F2%2BOIWQ%2Bo0vOqFCdiSJI2%2BDCClGloqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIISeil0jqBc%2B8LyircA6LoDEbguPUCpPonE1rkDLqpEhlsGKdO4uCoCDVWxcVf%2BEeDnWkCLl7t75NWqIO%2B1J7XeaNJooiH8OPII6dYUDd8yBLqEhvwooX6vYhn1QrYLY31Q%2BP3DIQX8YA1faXq5sfQBlB6XQvMgnJSbvLoJjSm5kIu01xXEbGLT4QWSVBETDzhR8NTmW8O%2FOFkpTktrZ15ZmjpfSqG7D8fjLRORTGM4eODq3eaPJshu4uT%2FbUEipInNVvbHVrZMMVJ0yxzH%2BkSShRPG856cDlQSXJ1YO9nlkNpYD028wBworTUBQk%2Fvyu53oIUiBJuYUSqUit129xeUhQbj2MrJP5Bz2ipjJ3dsUK5V93tHt03KrxwfEkTTZ7PE64jFsLApezCDVZofftGkjjDbAlSLdvxu0kBP1Bs7adv70oAi2UPu1GsKZfsgKRuFg5Y6AJIoKpj0sLtEwDyA1l4JVgChsyTte1Rd%2FitEqn770nl4Pvc2sSR2Mpm4gOIaaCatAJ29niHP4894%2FP3chHsxY4P513VoA8M3jZ0csns%2Fw5aAIHXeys43uo8vLv%2FyxJjoRn3k8veOyy1aOc6rxAzT8ImvxZBfzQNU6P5KwxL2F2bH6lHBCtPJJTdllSpQNfAmYPPBUaEMMu078EGOqUBl4JmJZ9wGS0M6UfvZYdZLpVpZ3j1PdqnpiFa9vQj30bCJsGmFmXnmF8e037vPKrGBCjPwUTgQ1sNp43xI83DBz3bGmZhHQ8uQoZSHQH2P%2FDsLgEeHMT9jet0KCZX3IEQX1CKFiF5zYf3WV6WxJumWM1mhYbpRGZ1JuuU%2Fhn9Z2fNbhWcwgCXJVCyD5WqnHeDNBpR1neRya8osRRYAq1J27QZiElm&X-Amz-Signature=e5e4ed981b56853d63caaf2658a32e9a0e3f5fdb16077e2e9457d8aae9ce74a8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

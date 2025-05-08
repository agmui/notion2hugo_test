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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBTNACA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJyFqEtoWVw8FBhsTwoALsen0ecSTKma6G7%2FkfYDR6AiEAzOcLirIqK6aDAftFe06P3vSk5rt1lFTRX7%2BVnXTBQvIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM6C%2FW7exIzTZDxxSyrcA2nZ2bd51M11kHF%2BH6WTvsJJsWv%2Fw05%2F4%2FweKb%2F5RHNMyjShd5ZII6S%2B1l3ir5z5Cs%2FdA7qapiHnIOv5UESOMjWpCvxGL7%2FD8IVmgO8FIB0MXC89w0j80C9eBUcq07pJBF0kkEKTmm7SH7S7QMTYVSGi1o4tE6y%2F7qWggdddpOmei%2Fhdzgz0fEqEcgra8oBU7Jzdoz6%2FteficPu5LJSgsalEQ1vD7jKIWvsYrPN%2BdNvwfpQqTmFRbh0CahgYGVxgFegXy3X4w0%2BDTqjaUKcbvKXm1VaLC6Sj2D6sDoZwgraLXxUWUeSy3uedDcdzoh257VNyV9SFPfZfgb0HSX%2BD2qvIjotk1yy9Wv%2FShRo6OGOwrddmnBR88XiuTjqufNTCM%2BR7GCwxJr74erlQlao3ezwp3GGTyrU4csD3azD%2FM9zfh6awG71nO73EPtF9NzGt7FV5we77%2BVjgzDIGtOMXpQ0C1CC8Ea%2BHKhf9coq2XLca%2FQNtqjLvUFtVQ0cxS5twb%2FbgFQjzgjoEKP7MojHqZn6lwRK4kRYiaeYRqUVslRuuZXKOMZ5NBUa6OtVhciXE6I41v%2FdxXau3DvurgcMSUQF23KyRYYf54YQQGju4rAeIhjIEmLq6OK9S8JEkMJbC8MAGOqUBOeTkUl7c1FJP6MLR1X2N2p7ceG%2B6G9LsQgH3TwPP9ukxPyD0hRBcvDNSniLfnWB5tMeVmsMW%2FJsWDr7Can3X4p5OBSlNuQemp16i54C5pOKK5iI%2F6spPKc7TXz6SVnjxk6PwWXkvL%2B0WwJfrBqLIZiAV6tEm1aFp4Fjb%2BgpeP0YxWDBGrGPBIvfWD4lWK1%2BKJirtaNHWQwjp99Xg%2Bw9lCItm15%2Fc&X-Amz-Signature=3790ffe542d12cce1095a38f76ce3415e9d21d42c17e3d3711330d20c53de1bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBTNACA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJyFqEtoWVw8FBhsTwoALsen0ecSTKma6G7%2FkfYDR6AiEAzOcLirIqK6aDAftFe06P3vSk5rt1lFTRX7%2BVnXTBQvIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM6C%2FW7exIzTZDxxSyrcA2nZ2bd51M11kHF%2BH6WTvsJJsWv%2Fw05%2F4%2FweKb%2F5RHNMyjShd5ZII6S%2B1l3ir5z5Cs%2FdA7qapiHnIOv5UESOMjWpCvxGL7%2FD8IVmgO8FIB0MXC89w0j80C9eBUcq07pJBF0kkEKTmm7SH7S7QMTYVSGi1o4tE6y%2F7qWggdddpOmei%2Fhdzgz0fEqEcgra8oBU7Jzdoz6%2FteficPu5LJSgsalEQ1vD7jKIWvsYrPN%2BdNvwfpQqTmFRbh0CahgYGVxgFegXy3X4w0%2BDTqjaUKcbvKXm1VaLC6Sj2D6sDoZwgraLXxUWUeSy3uedDcdzoh257VNyV9SFPfZfgb0HSX%2BD2qvIjotk1yy9Wv%2FShRo6OGOwrddmnBR88XiuTjqufNTCM%2BR7GCwxJr74erlQlao3ezwp3GGTyrU4csD3azD%2FM9zfh6awG71nO73EPtF9NzGt7FV5we77%2BVjgzDIGtOMXpQ0C1CC8Ea%2BHKhf9coq2XLca%2FQNtqjLvUFtVQ0cxS5twb%2FbgFQjzgjoEKP7MojHqZn6lwRK4kRYiaeYRqUVslRuuZXKOMZ5NBUa6OtVhciXE6I41v%2FdxXau3DvurgcMSUQF23KyRYYf54YQQGju4rAeIhjIEmLq6OK9S8JEkMJbC8MAGOqUBOeTkUl7c1FJP6MLR1X2N2p7ceG%2B6G9LsQgH3TwPP9ukxPyD0hRBcvDNSniLfnWB5tMeVmsMW%2FJsWDr7Can3X4p5OBSlNuQemp16i54C5pOKK5iI%2F6spPKc7TXz6SVnjxk6PwWXkvL%2B0WwJfrBqLIZiAV6tEm1aFp4Fjb%2BgpeP0YxWDBGrGPBIvfWD4lWK1%2BKJirtaNHWQwjp99Xg%2Bw9lCItm15%2Fc&X-Amz-Signature=1e083d47cd03708ed98aec148e32cd4df8dc8f447f3576721e49ab9a6f683746&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBTNACA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJyFqEtoWVw8FBhsTwoALsen0ecSTKma6G7%2FkfYDR6AiEAzOcLirIqK6aDAftFe06P3vSk5rt1lFTRX7%2BVnXTBQvIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM6C%2FW7exIzTZDxxSyrcA2nZ2bd51M11kHF%2BH6WTvsJJsWv%2Fw05%2F4%2FweKb%2F5RHNMyjShd5ZII6S%2B1l3ir5z5Cs%2FdA7qapiHnIOv5UESOMjWpCvxGL7%2FD8IVmgO8FIB0MXC89w0j80C9eBUcq07pJBF0kkEKTmm7SH7S7QMTYVSGi1o4tE6y%2F7qWggdddpOmei%2Fhdzgz0fEqEcgra8oBU7Jzdoz6%2FteficPu5LJSgsalEQ1vD7jKIWvsYrPN%2BdNvwfpQqTmFRbh0CahgYGVxgFegXy3X4w0%2BDTqjaUKcbvKXm1VaLC6Sj2D6sDoZwgraLXxUWUeSy3uedDcdzoh257VNyV9SFPfZfgb0HSX%2BD2qvIjotk1yy9Wv%2FShRo6OGOwrddmnBR88XiuTjqufNTCM%2BR7GCwxJr74erlQlao3ezwp3GGTyrU4csD3azD%2FM9zfh6awG71nO73EPtF9NzGt7FV5we77%2BVjgzDIGtOMXpQ0C1CC8Ea%2BHKhf9coq2XLca%2FQNtqjLvUFtVQ0cxS5twb%2FbgFQjzgjoEKP7MojHqZn6lwRK4kRYiaeYRqUVslRuuZXKOMZ5NBUa6OtVhciXE6I41v%2FdxXau3DvurgcMSUQF23KyRYYf54YQQGju4rAeIhjIEmLq6OK9S8JEkMJbC8MAGOqUBOeTkUl7c1FJP6MLR1X2N2p7ceG%2B6G9LsQgH3TwPP9ukxPyD0hRBcvDNSniLfnWB5tMeVmsMW%2FJsWDr7Can3X4p5OBSlNuQemp16i54C5pOKK5iI%2F6spPKc7TXz6SVnjxk6PwWXkvL%2B0WwJfrBqLIZiAV6tEm1aFp4Fjb%2BgpeP0YxWDBGrGPBIvfWD4lWK1%2BKJirtaNHWQwjp99Xg%2Bw9lCItm15%2Fc&X-Amz-Signature=4955497386bed92ea4b80f4b36d45eba0c84ebfd0cae948b78856a0fcc13b438&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBTNACA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJyFqEtoWVw8FBhsTwoALsen0ecSTKma6G7%2FkfYDR6AiEAzOcLirIqK6aDAftFe06P3vSk5rt1lFTRX7%2BVnXTBQvIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM6C%2FW7exIzTZDxxSyrcA2nZ2bd51M11kHF%2BH6WTvsJJsWv%2Fw05%2F4%2FweKb%2F5RHNMyjShd5ZII6S%2B1l3ir5z5Cs%2FdA7qapiHnIOv5UESOMjWpCvxGL7%2FD8IVmgO8FIB0MXC89w0j80C9eBUcq07pJBF0kkEKTmm7SH7S7QMTYVSGi1o4tE6y%2F7qWggdddpOmei%2Fhdzgz0fEqEcgra8oBU7Jzdoz6%2FteficPu5LJSgsalEQ1vD7jKIWvsYrPN%2BdNvwfpQqTmFRbh0CahgYGVxgFegXy3X4w0%2BDTqjaUKcbvKXm1VaLC6Sj2D6sDoZwgraLXxUWUeSy3uedDcdzoh257VNyV9SFPfZfgb0HSX%2BD2qvIjotk1yy9Wv%2FShRo6OGOwrddmnBR88XiuTjqufNTCM%2BR7GCwxJr74erlQlao3ezwp3GGTyrU4csD3azD%2FM9zfh6awG71nO73EPtF9NzGt7FV5we77%2BVjgzDIGtOMXpQ0C1CC8Ea%2BHKhf9coq2XLca%2FQNtqjLvUFtVQ0cxS5twb%2FbgFQjzgjoEKP7MojHqZn6lwRK4kRYiaeYRqUVslRuuZXKOMZ5NBUa6OtVhciXE6I41v%2FdxXau3DvurgcMSUQF23KyRYYf54YQQGju4rAeIhjIEmLq6OK9S8JEkMJbC8MAGOqUBOeTkUl7c1FJP6MLR1X2N2p7ceG%2B6G9LsQgH3TwPP9ukxPyD0hRBcvDNSniLfnWB5tMeVmsMW%2FJsWDr7Can3X4p5OBSlNuQemp16i54C5pOKK5iI%2F6spPKc7TXz6SVnjxk6PwWXkvL%2B0WwJfrBqLIZiAV6tEm1aFp4Fjb%2BgpeP0YxWDBGrGPBIvfWD4lWK1%2BKJirtaNHWQwjp99Xg%2Bw9lCItm15%2Fc&X-Amz-Signature=e1afab9ad90eaaf2ee4b926aa5f33dc8ec580bd706c6fe531b97b83da0d1ac17&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBTNACA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJyFqEtoWVw8FBhsTwoALsen0ecSTKma6G7%2FkfYDR6AiEAzOcLirIqK6aDAftFe06P3vSk5rt1lFTRX7%2BVnXTBQvIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM6C%2FW7exIzTZDxxSyrcA2nZ2bd51M11kHF%2BH6WTvsJJsWv%2Fw05%2F4%2FweKb%2F5RHNMyjShd5ZII6S%2B1l3ir5z5Cs%2FdA7qapiHnIOv5UESOMjWpCvxGL7%2FD8IVmgO8FIB0MXC89w0j80C9eBUcq07pJBF0kkEKTmm7SH7S7QMTYVSGi1o4tE6y%2F7qWggdddpOmei%2Fhdzgz0fEqEcgra8oBU7Jzdoz6%2FteficPu5LJSgsalEQ1vD7jKIWvsYrPN%2BdNvwfpQqTmFRbh0CahgYGVxgFegXy3X4w0%2BDTqjaUKcbvKXm1VaLC6Sj2D6sDoZwgraLXxUWUeSy3uedDcdzoh257VNyV9SFPfZfgb0HSX%2BD2qvIjotk1yy9Wv%2FShRo6OGOwrddmnBR88XiuTjqufNTCM%2BR7GCwxJr74erlQlao3ezwp3GGTyrU4csD3azD%2FM9zfh6awG71nO73EPtF9NzGt7FV5we77%2BVjgzDIGtOMXpQ0C1CC8Ea%2BHKhf9coq2XLca%2FQNtqjLvUFtVQ0cxS5twb%2FbgFQjzgjoEKP7MojHqZn6lwRK4kRYiaeYRqUVslRuuZXKOMZ5NBUa6OtVhciXE6I41v%2FdxXau3DvurgcMSUQF23KyRYYf54YQQGju4rAeIhjIEmLq6OK9S8JEkMJbC8MAGOqUBOeTkUl7c1FJP6MLR1X2N2p7ceG%2B6G9LsQgH3TwPP9ukxPyD0hRBcvDNSniLfnWB5tMeVmsMW%2FJsWDr7Can3X4p5OBSlNuQemp16i54C5pOKK5iI%2F6spPKc7TXz6SVnjxk6PwWXkvL%2B0WwJfrBqLIZiAV6tEm1aFp4Fjb%2BgpeP0YxWDBGrGPBIvfWD4lWK1%2BKJirtaNHWQwjp99Xg%2Bw9lCItm15%2Fc&X-Amz-Signature=daf10edd47bab52364dc61fd063ab702466f5fb50236d77c4c0c226bd7c350f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBTNACA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJyFqEtoWVw8FBhsTwoALsen0ecSTKma6G7%2FkfYDR6AiEAzOcLirIqK6aDAftFe06P3vSk5rt1lFTRX7%2BVnXTBQvIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM6C%2FW7exIzTZDxxSyrcA2nZ2bd51M11kHF%2BH6WTvsJJsWv%2Fw05%2F4%2FweKb%2F5RHNMyjShd5ZII6S%2B1l3ir5z5Cs%2FdA7qapiHnIOv5UESOMjWpCvxGL7%2FD8IVmgO8FIB0MXC89w0j80C9eBUcq07pJBF0kkEKTmm7SH7S7QMTYVSGi1o4tE6y%2F7qWggdddpOmei%2Fhdzgz0fEqEcgra8oBU7Jzdoz6%2FteficPu5LJSgsalEQ1vD7jKIWvsYrPN%2BdNvwfpQqTmFRbh0CahgYGVxgFegXy3X4w0%2BDTqjaUKcbvKXm1VaLC6Sj2D6sDoZwgraLXxUWUeSy3uedDcdzoh257VNyV9SFPfZfgb0HSX%2BD2qvIjotk1yy9Wv%2FShRo6OGOwrddmnBR88XiuTjqufNTCM%2BR7GCwxJr74erlQlao3ezwp3GGTyrU4csD3azD%2FM9zfh6awG71nO73EPtF9NzGt7FV5we77%2BVjgzDIGtOMXpQ0C1CC8Ea%2BHKhf9coq2XLca%2FQNtqjLvUFtVQ0cxS5twb%2FbgFQjzgjoEKP7MojHqZn6lwRK4kRYiaeYRqUVslRuuZXKOMZ5NBUa6OtVhciXE6I41v%2FdxXau3DvurgcMSUQF23KyRYYf54YQQGju4rAeIhjIEmLq6OK9S8JEkMJbC8MAGOqUBOeTkUl7c1FJP6MLR1X2N2p7ceG%2B6G9LsQgH3TwPP9ukxPyD0hRBcvDNSniLfnWB5tMeVmsMW%2FJsWDr7Can3X4p5OBSlNuQemp16i54C5pOKK5iI%2F6spPKc7TXz6SVnjxk6PwWXkvL%2B0WwJfrBqLIZiAV6tEm1aFp4Fjb%2BgpeP0YxWDBGrGPBIvfWD4lWK1%2BKJirtaNHWQwjp99Xg%2Bw9lCItm15%2Fc&X-Amz-Signature=e163d7b4e05f90b41ce154e438daa39e79928692b2dcb4447c027d32f9e8148b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBTNACA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJyFqEtoWVw8FBhsTwoALsen0ecSTKma6G7%2FkfYDR6AiEAzOcLirIqK6aDAftFe06P3vSk5rt1lFTRX7%2BVnXTBQvIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM6C%2FW7exIzTZDxxSyrcA2nZ2bd51M11kHF%2BH6WTvsJJsWv%2Fw05%2F4%2FweKb%2F5RHNMyjShd5ZII6S%2B1l3ir5z5Cs%2FdA7qapiHnIOv5UESOMjWpCvxGL7%2FD8IVmgO8FIB0MXC89w0j80C9eBUcq07pJBF0kkEKTmm7SH7S7QMTYVSGi1o4tE6y%2F7qWggdddpOmei%2Fhdzgz0fEqEcgra8oBU7Jzdoz6%2FteficPu5LJSgsalEQ1vD7jKIWvsYrPN%2BdNvwfpQqTmFRbh0CahgYGVxgFegXy3X4w0%2BDTqjaUKcbvKXm1VaLC6Sj2D6sDoZwgraLXxUWUeSy3uedDcdzoh257VNyV9SFPfZfgb0HSX%2BD2qvIjotk1yy9Wv%2FShRo6OGOwrddmnBR88XiuTjqufNTCM%2BR7GCwxJr74erlQlao3ezwp3GGTyrU4csD3azD%2FM9zfh6awG71nO73EPtF9NzGt7FV5we77%2BVjgzDIGtOMXpQ0C1CC8Ea%2BHKhf9coq2XLca%2FQNtqjLvUFtVQ0cxS5twb%2FbgFQjzgjoEKP7MojHqZn6lwRK4kRYiaeYRqUVslRuuZXKOMZ5NBUa6OtVhciXE6I41v%2FdxXau3DvurgcMSUQF23KyRYYf54YQQGju4rAeIhjIEmLq6OK9S8JEkMJbC8MAGOqUBOeTkUl7c1FJP6MLR1X2N2p7ceG%2B6G9LsQgH3TwPP9ukxPyD0hRBcvDNSniLfnWB5tMeVmsMW%2FJsWDr7Can3X4p5OBSlNuQemp16i54C5pOKK5iI%2F6spPKc7TXz6SVnjxk6PwWXkvL%2B0WwJfrBqLIZiAV6tEm1aFp4Fjb%2BgpeP0YxWDBGrGPBIvfWD4lWK1%2BKJirtaNHWQwjp99Xg%2Bw9lCItm15%2Fc&X-Amz-Signature=f084e89b9661bab6af700e611bbc546824c2a0ebfa2ab49cad3b26de4c852e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466625DHHUL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCUUomtpBBvPVeWLyRuMJJWLyXK9KQAtSn8RPeFH7czcQIhAL%2FzCZ%2FEZVMKfCti%2BaA9tQyNEQup2K%2B1WzFGnaw8MDrdKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVKK5TLcQD%2FJAQUekq3AM%2B1vVXlvGhODUT%2B3R%2BYIIa%2BNJX4eHS7wqqr4NMEGE8WG2UCoGCWSuFnwmzcHKPwJu2Dtnvg5pailCVlyJHonN5SZYmKbu8JpTg%2FDYIv9oJBH0IfpWUtjoXB75%2FOKJaUQ9EHbqkyF8%2Fo0fGzIohTWXjWwcxfijfOazXzVm5vOKCVYeXaK1mcKV2xTtAAgHy2ETwu1XF7F8O0%2BVu5NyZ0%2FbVYEjewy%2BxvOZNC97iOxNTjHXOMyE04QdvtyuYkGZvTMsyPNvABL9RNwHbUaRNOhQ%2FamVjo6x2nk5uZZEnj%2B5YBW2%2BY0hybr3qRhDbCTYJnJztGIYOwQ07ihkmwa31HoCBZY7qqbwsCpAnkooGPdKLVJTSkCd5f0LSSDVFXUhNF7tYlKmhgJWnhruX%2BWaabmItTQ%2BboKntgz8ea0rd9maDpWo3lL5Jhow5x6b%2BEhzLfxn2wQav2xawDeEaSk1DgFQrJiXPj1Aupt%2BCfmBGGwsEgt4raLDROq%2Foixmjyv1mF3bhPnqi4mgsiSFeBQKlSXWkqypjrKm5Q2WOUoTUb3FJrBTkgxB4ZseBkwSqgxG5EF3PvLIMjt8lKEGPP99howzAJfjAscHXMdQN8vJMIp3TI0jQQDKv%2FhwbociWsjCM86DABjqkAXGBpdz74fkOpm9ykNzpi6kGoUpilJekKzZ9d5Jxa6lA9%2BbS94Fi2rJyjBAgmuz64OFN%2FkNH0XNMJeOitaUcVmb%2B2tisMTTOrMWRX3qZm71DrK99ZZGCbP56aslKlXYoBDlfMEnQ7HbNVnkLPXhNDaSEZEOabPXP42Y5ooosSUnqXg562ijkNrF9dXUI91xHbXxYy1ycW%2FrSdu0Ln9RzYQT6YYDU&X-Amz-Signature=7fc900d7732022971958ff52e4414bb3ad44c2b3aa7fc7ba9eb8ec97cf1a35d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466625DHHUL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCUUomtpBBvPVeWLyRuMJJWLyXK9KQAtSn8RPeFH7czcQIhAL%2FzCZ%2FEZVMKfCti%2BaA9tQyNEQup2K%2B1WzFGnaw8MDrdKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVKK5TLcQD%2FJAQUekq3AM%2B1vVXlvGhODUT%2B3R%2BYIIa%2BNJX4eHS7wqqr4NMEGE8WG2UCoGCWSuFnwmzcHKPwJu2Dtnvg5pailCVlyJHonN5SZYmKbu8JpTg%2FDYIv9oJBH0IfpWUtjoXB75%2FOKJaUQ9EHbqkyF8%2Fo0fGzIohTWXjWwcxfijfOazXzVm5vOKCVYeXaK1mcKV2xTtAAgHy2ETwu1XF7F8O0%2BVu5NyZ0%2FbVYEjewy%2BxvOZNC97iOxNTjHXOMyE04QdvtyuYkGZvTMsyPNvABL9RNwHbUaRNOhQ%2FamVjo6x2nk5uZZEnj%2B5YBW2%2BY0hybr3qRhDbCTYJnJztGIYOwQ07ihkmwa31HoCBZY7qqbwsCpAnkooGPdKLVJTSkCd5f0LSSDVFXUhNF7tYlKmhgJWnhruX%2BWaabmItTQ%2BboKntgz8ea0rd9maDpWo3lL5Jhow5x6b%2BEhzLfxn2wQav2xawDeEaSk1DgFQrJiXPj1Aupt%2BCfmBGGwsEgt4raLDROq%2Foixmjyv1mF3bhPnqi4mgsiSFeBQKlSXWkqypjrKm5Q2WOUoTUb3FJrBTkgxB4ZseBkwSqgxG5EF3PvLIMjt8lKEGPP99howzAJfjAscHXMdQN8vJMIp3TI0jQQDKv%2FhwbociWsjCM86DABjqkAXGBpdz74fkOpm9ykNzpi6kGoUpilJekKzZ9d5Jxa6lA9%2BbS94Fi2rJyjBAgmuz64OFN%2FkNH0XNMJeOitaUcVmb%2B2tisMTTOrMWRX3qZm71DrK99ZZGCbP56aslKlXYoBDlfMEnQ7HbNVnkLPXhNDaSEZEOabPXP42Y5ooosSUnqXg562ijkNrF9dXUI91xHbXxYy1ycW%2FrSdu0Ln9RzYQT6YYDU&X-Amz-Signature=1a6ff7b56394afb395b1baf4cb868ff61b20fa8367a8c1e19d4e971ad8be1e64&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466625DHHUL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCUUomtpBBvPVeWLyRuMJJWLyXK9KQAtSn8RPeFH7czcQIhAL%2FzCZ%2FEZVMKfCti%2BaA9tQyNEQup2K%2B1WzFGnaw8MDrdKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVKK5TLcQD%2FJAQUekq3AM%2B1vVXlvGhODUT%2B3R%2BYIIa%2BNJX4eHS7wqqr4NMEGE8WG2UCoGCWSuFnwmzcHKPwJu2Dtnvg5pailCVlyJHonN5SZYmKbu8JpTg%2FDYIv9oJBH0IfpWUtjoXB75%2FOKJaUQ9EHbqkyF8%2Fo0fGzIohTWXjWwcxfijfOazXzVm5vOKCVYeXaK1mcKV2xTtAAgHy2ETwu1XF7F8O0%2BVu5NyZ0%2FbVYEjewy%2BxvOZNC97iOxNTjHXOMyE04QdvtyuYkGZvTMsyPNvABL9RNwHbUaRNOhQ%2FamVjo6x2nk5uZZEnj%2B5YBW2%2BY0hybr3qRhDbCTYJnJztGIYOwQ07ihkmwa31HoCBZY7qqbwsCpAnkooGPdKLVJTSkCd5f0LSSDVFXUhNF7tYlKmhgJWnhruX%2BWaabmItTQ%2BboKntgz8ea0rd9maDpWo3lL5Jhow5x6b%2BEhzLfxn2wQav2xawDeEaSk1DgFQrJiXPj1Aupt%2BCfmBGGwsEgt4raLDROq%2Foixmjyv1mF3bhPnqi4mgsiSFeBQKlSXWkqypjrKm5Q2WOUoTUb3FJrBTkgxB4ZseBkwSqgxG5EF3PvLIMjt8lKEGPP99howzAJfjAscHXMdQN8vJMIp3TI0jQQDKv%2FhwbociWsjCM86DABjqkAXGBpdz74fkOpm9ykNzpi6kGoUpilJekKzZ9d5Jxa6lA9%2BbS94Fi2rJyjBAgmuz64OFN%2FkNH0XNMJeOitaUcVmb%2B2tisMTTOrMWRX3qZm71DrK99ZZGCbP56aslKlXYoBDlfMEnQ7HbNVnkLPXhNDaSEZEOabPXP42Y5ooosSUnqXg562ijkNrF9dXUI91xHbXxYy1ycW%2FrSdu0Ln9RzYQT6YYDU&X-Amz-Signature=c55569ae5a166f2e405ab744d1fd943cc421ae8f5799b16b7b86eaecbdbc1a74&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466625DHHUL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCUUomtpBBvPVeWLyRuMJJWLyXK9KQAtSn8RPeFH7czcQIhAL%2FzCZ%2FEZVMKfCti%2BaA9tQyNEQup2K%2B1WzFGnaw8MDrdKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVKK5TLcQD%2FJAQUekq3AM%2B1vVXlvGhODUT%2B3R%2BYIIa%2BNJX4eHS7wqqr4NMEGE8WG2UCoGCWSuFnwmzcHKPwJu2Dtnvg5pailCVlyJHonN5SZYmKbu8JpTg%2FDYIv9oJBH0IfpWUtjoXB75%2FOKJaUQ9EHbqkyF8%2Fo0fGzIohTWXjWwcxfijfOazXzVm5vOKCVYeXaK1mcKV2xTtAAgHy2ETwu1XF7F8O0%2BVu5NyZ0%2FbVYEjewy%2BxvOZNC97iOxNTjHXOMyE04QdvtyuYkGZvTMsyPNvABL9RNwHbUaRNOhQ%2FamVjo6x2nk5uZZEnj%2B5YBW2%2BY0hybr3qRhDbCTYJnJztGIYOwQ07ihkmwa31HoCBZY7qqbwsCpAnkooGPdKLVJTSkCd5f0LSSDVFXUhNF7tYlKmhgJWnhruX%2BWaabmItTQ%2BboKntgz8ea0rd9maDpWo3lL5Jhow5x6b%2BEhzLfxn2wQav2xawDeEaSk1DgFQrJiXPj1Aupt%2BCfmBGGwsEgt4raLDROq%2Foixmjyv1mF3bhPnqi4mgsiSFeBQKlSXWkqypjrKm5Q2WOUoTUb3FJrBTkgxB4ZseBkwSqgxG5EF3PvLIMjt8lKEGPP99howzAJfjAscHXMdQN8vJMIp3TI0jQQDKv%2FhwbociWsjCM86DABjqkAXGBpdz74fkOpm9ykNzpi6kGoUpilJekKzZ9d5Jxa6lA9%2BbS94Fi2rJyjBAgmuz64OFN%2FkNH0XNMJeOitaUcVmb%2B2tisMTTOrMWRX3qZm71DrK99ZZGCbP56aslKlXYoBDlfMEnQ7HbNVnkLPXhNDaSEZEOabPXP42Y5ooosSUnqXg562ijkNrF9dXUI91xHbXxYy1ycW%2FrSdu0Ln9RzYQT6YYDU&X-Amz-Signature=9ef4aa3a75d1db66cfc86559ced2458f023ac3352dcd4fb03b9836ab59b2793c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466625DHHUL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCUUomtpBBvPVeWLyRuMJJWLyXK9KQAtSn8RPeFH7czcQIhAL%2FzCZ%2FEZVMKfCti%2BaA9tQyNEQup2K%2B1WzFGnaw8MDrdKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVKK5TLcQD%2FJAQUekq3AM%2B1vVXlvGhODUT%2B3R%2BYIIa%2BNJX4eHS7wqqr4NMEGE8WG2UCoGCWSuFnwmzcHKPwJu2Dtnvg5pailCVlyJHonN5SZYmKbu8JpTg%2FDYIv9oJBH0IfpWUtjoXB75%2FOKJaUQ9EHbqkyF8%2Fo0fGzIohTWXjWwcxfijfOazXzVm5vOKCVYeXaK1mcKV2xTtAAgHy2ETwu1XF7F8O0%2BVu5NyZ0%2FbVYEjewy%2BxvOZNC97iOxNTjHXOMyE04QdvtyuYkGZvTMsyPNvABL9RNwHbUaRNOhQ%2FamVjo6x2nk5uZZEnj%2B5YBW2%2BY0hybr3qRhDbCTYJnJztGIYOwQ07ihkmwa31HoCBZY7qqbwsCpAnkooGPdKLVJTSkCd5f0LSSDVFXUhNF7tYlKmhgJWnhruX%2BWaabmItTQ%2BboKntgz8ea0rd9maDpWo3lL5Jhow5x6b%2BEhzLfxn2wQav2xawDeEaSk1DgFQrJiXPj1Aupt%2BCfmBGGwsEgt4raLDROq%2Foixmjyv1mF3bhPnqi4mgsiSFeBQKlSXWkqypjrKm5Q2WOUoTUb3FJrBTkgxB4ZseBkwSqgxG5EF3PvLIMjt8lKEGPP99howzAJfjAscHXMdQN8vJMIp3TI0jQQDKv%2FhwbociWsjCM86DABjqkAXGBpdz74fkOpm9ykNzpi6kGoUpilJekKzZ9d5Jxa6lA9%2BbS94Fi2rJyjBAgmuz64OFN%2FkNH0XNMJeOitaUcVmb%2B2tisMTTOrMWRX3qZm71DrK99ZZGCbP56aslKlXYoBDlfMEnQ7HbNVnkLPXhNDaSEZEOabPXP42Y5ooosSUnqXg562ijkNrF9dXUI91xHbXxYy1ycW%2FrSdu0Ln9RzYQT6YYDU&X-Amz-Signature=ffee7773563769e45306c59f539f2b1020cd7ee2ef2a120de117d07fa5f4d619&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466625DHHUL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCUUomtpBBvPVeWLyRuMJJWLyXK9KQAtSn8RPeFH7czcQIhAL%2FzCZ%2FEZVMKfCti%2BaA9tQyNEQup2K%2B1WzFGnaw8MDrdKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVKK5TLcQD%2FJAQUekq3AM%2B1vVXlvGhODUT%2B3R%2BYIIa%2BNJX4eHS7wqqr4NMEGE8WG2UCoGCWSuFnwmzcHKPwJu2Dtnvg5pailCVlyJHonN5SZYmKbu8JpTg%2FDYIv9oJBH0IfpWUtjoXB75%2FOKJaUQ9EHbqkyF8%2Fo0fGzIohTWXjWwcxfijfOazXzVm5vOKCVYeXaK1mcKV2xTtAAgHy2ETwu1XF7F8O0%2BVu5NyZ0%2FbVYEjewy%2BxvOZNC97iOxNTjHXOMyE04QdvtyuYkGZvTMsyPNvABL9RNwHbUaRNOhQ%2FamVjo6x2nk5uZZEnj%2B5YBW2%2BY0hybr3qRhDbCTYJnJztGIYOwQ07ihkmwa31HoCBZY7qqbwsCpAnkooGPdKLVJTSkCd5f0LSSDVFXUhNF7tYlKmhgJWnhruX%2BWaabmItTQ%2BboKntgz8ea0rd9maDpWo3lL5Jhow5x6b%2BEhzLfxn2wQav2xawDeEaSk1DgFQrJiXPj1Aupt%2BCfmBGGwsEgt4raLDROq%2Foixmjyv1mF3bhPnqi4mgsiSFeBQKlSXWkqypjrKm5Q2WOUoTUb3FJrBTkgxB4ZseBkwSqgxG5EF3PvLIMjt8lKEGPP99howzAJfjAscHXMdQN8vJMIp3TI0jQQDKv%2FhwbociWsjCM86DABjqkAXGBpdz74fkOpm9ykNzpi6kGoUpilJekKzZ9d5Jxa6lA9%2BbS94Fi2rJyjBAgmuz64OFN%2FkNH0XNMJeOitaUcVmb%2B2tisMTTOrMWRX3qZm71DrK99ZZGCbP56aslKlXYoBDlfMEnQ7HbNVnkLPXhNDaSEZEOabPXP42Y5ooosSUnqXg562ijkNrF9dXUI91xHbXxYy1ycW%2FrSdu0Ln9RzYQT6YYDU&X-Amz-Signature=7299a2338f2c95b9cd5050c50aeae91147921f613a348196a4ba49e4e08c855a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466625DHHUL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCUUomtpBBvPVeWLyRuMJJWLyXK9KQAtSn8RPeFH7czcQIhAL%2FzCZ%2FEZVMKfCti%2BaA9tQyNEQup2K%2B1WzFGnaw8MDrdKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVKK5TLcQD%2FJAQUekq3AM%2B1vVXlvGhODUT%2B3R%2BYIIa%2BNJX4eHS7wqqr4NMEGE8WG2UCoGCWSuFnwmzcHKPwJu2Dtnvg5pailCVlyJHonN5SZYmKbu8JpTg%2FDYIv9oJBH0IfpWUtjoXB75%2FOKJaUQ9EHbqkyF8%2Fo0fGzIohTWXjWwcxfijfOazXzVm5vOKCVYeXaK1mcKV2xTtAAgHy2ETwu1XF7F8O0%2BVu5NyZ0%2FbVYEjewy%2BxvOZNC97iOxNTjHXOMyE04QdvtyuYkGZvTMsyPNvABL9RNwHbUaRNOhQ%2FamVjo6x2nk5uZZEnj%2B5YBW2%2BY0hybr3qRhDbCTYJnJztGIYOwQ07ihkmwa31HoCBZY7qqbwsCpAnkooGPdKLVJTSkCd5f0LSSDVFXUhNF7tYlKmhgJWnhruX%2BWaabmItTQ%2BboKntgz8ea0rd9maDpWo3lL5Jhow5x6b%2BEhzLfxn2wQav2xawDeEaSk1DgFQrJiXPj1Aupt%2BCfmBGGwsEgt4raLDROq%2Foixmjyv1mF3bhPnqi4mgsiSFeBQKlSXWkqypjrKm5Q2WOUoTUb3FJrBTkgxB4ZseBkwSqgxG5EF3PvLIMjt8lKEGPP99howzAJfjAscHXMdQN8vJMIp3TI0jQQDKv%2FhwbociWsjCM86DABjqkAXGBpdz74fkOpm9ykNzpi6kGoUpilJekKzZ9d5Jxa6lA9%2BbS94Fi2rJyjBAgmuz64OFN%2FkNH0XNMJeOitaUcVmb%2B2tisMTTOrMWRX3qZm71DrK99ZZGCbP56aslKlXYoBDlfMEnQ7HbNVnkLPXhNDaSEZEOabPXP42Y5ooosSUnqXg562ijkNrF9dXUI91xHbXxYy1ycW%2FrSdu0Ln9RzYQT6YYDU&X-Amz-Signature=ca7bc5f6c1bc8888b73ab95438d1c33121c7d02ba66a2e611780b39a2f4da530&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

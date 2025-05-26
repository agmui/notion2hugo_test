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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURMATT4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAV3gfL%2FlupTS3CrtaAh%2F8CtRXSmrbOn01Ck%2FYzMfwqsAiEA%2FNkE8djEyWYBOHxZGooyGKZMrqPs7iNq93Q%2BXGtBcqgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKNydc2OUE8lPv4qZCrcA09AxaWjjbCi9yNjHd9RSpiC7VorXBumMjFJmk9ynW%2BAB9Mbeua5cWF1Yz8NviT2UfmnC92keEVdhmufM5HAKANP49ZOP6cNUu9eGKCQqDFHA4oEtw2wHRIPVD7UrRGJsP8aIZh8Uj3JtZI98ngeXfdAwGWOUhOd7kkoyZCP3gFUcvGyVurw%2FiVS76EkUgjCR7c9tAhl2nETfeiPIYeCMt4VWPseI0ae8R6USzVbk7V13uaO1q0ihGcVTW%2Fh63DzW69fOXAFMM0zh530Oo9PF%2Ba4L6XsTXax09uiTJizzER26TtDmKAGsP5DixJb%2BjX30hqMfZeSIGnWDXhLedIHK%2Fe%2FHLRJMcyoNDxgqShdSWzssDoP8fkhAJx6GPHZQxNG2VcfwYwVCPWUPfQ%2BOz33StT7DsyJlvgB9p95ERZPKTLcr%2B4bEj3DD5LSPPAerOkHUj2lLUHYATPbfivlPXt3ENrL4RALlCEU%2Fc%2FmkwKL6TJ%2B0soUE1Z6uhr4tkA5kY9i15L4fSnHgpscPcb1oZ9DL0jdVMoOQveyYj%2FYNtQAb1JuTRcCKBll4oHN5yc69qhtwKB2iQVwgz2Ej2ru8IJxTfoRqwIlowoJFZxdm8N%2FwDz5V53u7jg2djM5H5J7MIbW0MEGOqUBlk5xuK2G%2BJDhp%2FpIWhqoi2tsh9wuu7E7oIXMg%2BJWCa616Ul4sj2RHY4JT5kqPgLkvZuD5dHaCnklRz%2B%2BtJtaLpNi9d9oV%2F5MOFHWHCuaPI5pbWaY7XoVIwh2kP76s4%2BEtAvq%2FXwp3qYN%2FtfD5wTDAtPnndgO3SjA0tttZrxDtAtU9L0FrMdF6v9kgxYnauWcpfWFdX13RJV4C8bQn0LBwkVHAQli&X-Amz-Signature=8d5a8fc92beed7708843f45d4426cc06ba3dd1e3e802051cdfbc4e374f6ea7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURMATT4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAV3gfL%2FlupTS3CrtaAh%2F8CtRXSmrbOn01Ck%2FYzMfwqsAiEA%2FNkE8djEyWYBOHxZGooyGKZMrqPs7iNq93Q%2BXGtBcqgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKNydc2OUE8lPv4qZCrcA09AxaWjjbCi9yNjHd9RSpiC7VorXBumMjFJmk9ynW%2BAB9Mbeua5cWF1Yz8NviT2UfmnC92keEVdhmufM5HAKANP49ZOP6cNUu9eGKCQqDFHA4oEtw2wHRIPVD7UrRGJsP8aIZh8Uj3JtZI98ngeXfdAwGWOUhOd7kkoyZCP3gFUcvGyVurw%2FiVS76EkUgjCR7c9tAhl2nETfeiPIYeCMt4VWPseI0ae8R6USzVbk7V13uaO1q0ihGcVTW%2Fh63DzW69fOXAFMM0zh530Oo9PF%2Ba4L6XsTXax09uiTJizzER26TtDmKAGsP5DixJb%2BjX30hqMfZeSIGnWDXhLedIHK%2Fe%2FHLRJMcyoNDxgqShdSWzssDoP8fkhAJx6GPHZQxNG2VcfwYwVCPWUPfQ%2BOz33StT7DsyJlvgB9p95ERZPKTLcr%2B4bEj3DD5LSPPAerOkHUj2lLUHYATPbfivlPXt3ENrL4RALlCEU%2Fc%2FmkwKL6TJ%2B0soUE1Z6uhr4tkA5kY9i15L4fSnHgpscPcb1oZ9DL0jdVMoOQveyYj%2FYNtQAb1JuTRcCKBll4oHN5yc69qhtwKB2iQVwgz2Ej2ru8IJxTfoRqwIlowoJFZxdm8N%2FwDz5V53u7jg2djM5H5J7MIbW0MEGOqUBlk5xuK2G%2BJDhp%2FpIWhqoi2tsh9wuu7E7oIXMg%2BJWCa616Ul4sj2RHY4JT5kqPgLkvZuD5dHaCnklRz%2B%2BtJtaLpNi9d9oV%2F5MOFHWHCuaPI5pbWaY7XoVIwh2kP76s4%2BEtAvq%2FXwp3qYN%2FtfD5wTDAtPnndgO3SjA0tttZrxDtAtU9L0FrMdF6v9kgxYnauWcpfWFdX13RJV4C8bQn0LBwkVHAQli&X-Amz-Signature=8e1213d2f9e16df4612cd937343efbd0be2df2d9c1986e3f9ca9a9a607ff0b92&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURMATT4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAV3gfL%2FlupTS3CrtaAh%2F8CtRXSmrbOn01Ck%2FYzMfwqsAiEA%2FNkE8djEyWYBOHxZGooyGKZMrqPs7iNq93Q%2BXGtBcqgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKNydc2OUE8lPv4qZCrcA09AxaWjjbCi9yNjHd9RSpiC7VorXBumMjFJmk9ynW%2BAB9Mbeua5cWF1Yz8NviT2UfmnC92keEVdhmufM5HAKANP49ZOP6cNUu9eGKCQqDFHA4oEtw2wHRIPVD7UrRGJsP8aIZh8Uj3JtZI98ngeXfdAwGWOUhOd7kkoyZCP3gFUcvGyVurw%2FiVS76EkUgjCR7c9tAhl2nETfeiPIYeCMt4VWPseI0ae8R6USzVbk7V13uaO1q0ihGcVTW%2Fh63DzW69fOXAFMM0zh530Oo9PF%2Ba4L6XsTXax09uiTJizzER26TtDmKAGsP5DixJb%2BjX30hqMfZeSIGnWDXhLedIHK%2Fe%2FHLRJMcyoNDxgqShdSWzssDoP8fkhAJx6GPHZQxNG2VcfwYwVCPWUPfQ%2BOz33StT7DsyJlvgB9p95ERZPKTLcr%2B4bEj3DD5LSPPAerOkHUj2lLUHYATPbfivlPXt3ENrL4RALlCEU%2Fc%2FmkwKL6TJ%2B0soUE1Z6uhr4tkA5kY9i15L4fSnHgpscPcb1oZ9DL0jdVMoOQveyYj%2FYNtQAb1JuTRcCKBll4oHN5yc69qhtwKB2iQVwgz2Ej2ru8IJxTfoRqwIlowoJFZxdm8N%2FwDz5V53u7jg2djM5H5J7MIbW0MEGOqUBlk5xuK2G%2BJDhp%2FpIWhqoi2tsh9wuu7E7oIXMg%2BJWCa616Ul4sj2RHY4JT5kqPgLkvZuD5dHaCnklRz%2B%2BtJtaLpNi9d9oV%2F5MOFHWHCuaPI5pbWaY7XoVIwh2kP76s4%2BEtAvq%2FXwp3qYN%2FtfD5wTDAtPnndgO3SjA0tttZrxDtAtU9L0FrMdF6v9kgxYnauWcpfWFdX13RJV4C8bQn0LBwkVHAQli&X-Amz-Signature=69855863245bc494ad8d33496e8eee150f16b46e226d096049a9be6910fedd95&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURMATT4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAV3gfL%2FlupTS3CrtaAh%2F8CtRXSmrbOn01Ck%2FYzMfwqsAiEA%2FNkE8djEyWYBOHxZGooyGKZMrqPs7iNq93Q%2BXGtBcqgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKNydc2OUE8lPv4qZCrcA09AxaWjjbCi9yNjHd9RSpiC7VorXBumMjFJmk9ynW%2BAB9Mbeua5cWF1Yz8NviT2UfmnC92keEVdhmufM5HAKANP49ZOP6cNUu9eGKCQqDFHA4oEtw2wHRIPVD7UrRGJsP8aIZh8Uj3JtZI98ngeXfdAwGWOUhOd7kkoyZCP3gFUcvGyVurw%2FiVS76EkUgjCR7c9tAhl2nETfeiPIYeCMt4VWPseI0ae8R6USzVbk7V13uaO1q0ihGcVTW%2Fh63DzW69fOXAFMM0zh530Oo9PF%2Ba4L6XsTXax09uiTJizzER26TtDmKAGsP5DixJb%2BjX30hqMfZeSIGnWDXhLedIHK%2Fe%2FHLRJMcyoNDxgqShdSWzssDoP8fkhAJx6GPHZQxNG2VcfwYwVCPWUPfQ%2BOz33StT7DsyJlvgB9p95ERZPKTLcr%2B4bEj3DD5LSPPAerOkHUj2lLUHYATPbfivlPXt3ENrL4RALlCEU%2Fc%2FmkwKL6TJ%2B0soUE1Z6uhr4tkA5kY9i15L4fSnHgpscPcb1oZ9DL0jdVMoOQveyYj%2FYNtQAb1JuTRcCKBll4oHN5yc69qhtwKB2iQVwgz2Ej2ru8IJxTfoRqwIlowoJFZxdm8N%2FwDz5V53u7jg2djM5H5J7MIbW0MEGOqUBlk5xuK2G%2BJDhp%2FpIWhqoi2tsh9wuu7E7oIXMg%2BJWCa616Ul4sj2RHY4JT5kqPgLkvZuD5dHaCnklRz%2B%2BtJtaLpNi9d9oV%2F5MOFHWHCuaPI5pbWaY7XoVIwh2kP76s4%2BEtAvq%2FXwp3qYN%2FtfD5wTDAtPnndgO3SjA0tttZrxDtAtU9L0FrMdF6v9kgxYnauWcpfWFdX13RJV4C8bQn0LBwkVHAQli&X-Amz-Signature=e5f73c5de42d0fddd26674f54ecd303d9728d6c3c8529f6addb2492cf3c00cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURMATT4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAV3gfL%2FlupTS3CrtaAh%2F8CtRXSmrbOn01Ck%2FYzMfwqsAiEA%2FNkE8djEyWYBOHxZGooyGKZMrqPs7iNq93Q%2BXGtBcqgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKNydc2OUE8lPv4qZCrcA09AxaWjjbCi9yNjHd9RSpiC7VorXBumMjFJmk9ynW%2BAB9Mbeua5cWF1Yz8NviT2UfmnC92keEVdhmufM5HAKANP49ZOP6cNUu9eGKCQqDFHA4oEtw2wHRIPVD7UrRGJsP8aIZh8Uj3JtZI98ngeXfdAwGWOUhOd7kkoyZCP3gFUcvGyVurw%2FiVS76EkUgjCR7c9tAhl2nETfeiPIYeCMt4VWPseI0ae8R6USzVbk7V13uaO1q0ihGcVTW%2Fh63DzW69fOXAFMM0zh530Oo9PF%2Ba4L6XsTXax09uiTJizzER26TtDmKAGsP5DixJb%2BjX30hqMfZeSIGnWDXhLedIHK%2Fe%2FHLRJMcyoNDxgqShdSWzssDoP8fkhAJx6GPHZQxNG2VcfwYwVCPWUPfQ%2BOz33StT7DsyJlvgB9p95ERZPKTLcr%2B4bEj3DD5LSPPAerOkHUj2lLUHYATPbfivlPXt3ENrL4RALlCEU%2Fc%2FmkwKL6TJ%2B0soUE1Z6uhr4tkA5kY9i15L4fSnHgpscPcb1oZ9DL0jdVMoOQveyYj%2FYNtQAb1JuTRcCKBll4oHN5yc69qhtwKB2iQVwgz2Ej2ru8IJxTfoRqwIlowoJFZxdm8N%2FwDz5V53u7jg2djM5H5J7MIbW0MEGOqUBlk5xuK2G%2BJDhp%2FpIWhqoi2tsh9wuu7E7oIXMg%2BJWCa616Ul4sj2RHY4JT5kqPgLkvZuD5dHaCnklRz%2B%2BtJtaLpNi9d9oV%2F5MOFHWHCuaPI5pbWaY7XoVIwh2kP76s4%2BEtAvq%2FXwp3qYN%2FtfD5wTDAtPnndgO3SjA0tttZrxDtAtU9L0FrMdF6v9kgxYnauWcpfWFdX13RJV4C8bQn0LBwkVHAQli&X-Amz-Signature=d6fd67ed0d7dee0f409a2c65191740da3c95039c14fb1525e5d883d304934af8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURMATT4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAV3gfL%2FlupTS3CrtaAh%2F8CtRXSmrbOn01Ck%2FYzMfwqsAiEA%2FNkE8djEyWYBOHxZGooyGKZMrqPs7iNq93Q%2BXGtBcqgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKNydc2OUE8lPv4qZCrcA09AxaWjjbCi9yNjHd9RSpiC7VorXBumMjFJmk9ynW%2BAB9Mbeua5cWF1Yz8NviT2UfmnC92keEVdhmufM5HAKANP49ZOP6cNUu9eGKCQqDFHA4oEtw2wHRIPVD7UrRGJsP8aIZh8Uj3JtZI98ngeXfdAwGWOUhOd7kkoyZCP3gFUcvGyVurw%2FiVS76EkUgjCR7c9tAhl2nETfeiPIYeCMt4VWPseI0ae8R6USzVbk7V13uaO1q0ihGcVTW%2Fh63DzW69fOXAFMM0zh530Oo9PF%2Ba4L6XsTXax09uiTJizzER26TtDmKAGsP5DixJb%2BjX30hqMfZeSIGnWDXhLedIHK%2Fe%2FHLRJMcyoNDxgqShdSWzssDoP8fkhAJx6GPHZQxNG2VcfwYwVCPWUPfQ%2BOz33StT7DsyJlvgB9p95ERZPKTLcr%2B4bEj3DD5LSPPAerOkHUj2lLUHYATPbfivlPXt3ENrL4RALlCEU%2Fc%2FmkwKL6TJ%2B0soUE1Z6uhr4tkA5kY9i15L4fSnHgpscPcb1oZ9DL0jdVMoOQveyYj%2FYNtQAb1JuTRcCKBll4oHN5yc69qhtwKB2iQVwgz2Ej2ru8IJxTfoRqwIlowoJFZxdm8N%2FwDz5V53u7jg2djM5H5J7MIbW0MEGOqUBlk5xuK2G%2BJDhp%2FpIWhqoi2tsh9wuu7E7oIXMg%2BJWCa616Ul4sj2RHY4JT5kqPgLkvZuD5dHaCnklRz%2B%2BtJtaLpNi9d9oV%2F5MOFHWHCuaPI5pbWaY7XoVIwh2kP76s4%2BEtAvq%2FXwp3qYN%2FtfD5wTDAtPnndgO3SjA0tttZrxDtAtU9L0FrMdF6v9kgxYnauWcpfWFdX13RJV4C8bQn0LBwkVHAQli&X-Amz-Signature=1391f5fe73939ef506a5c4b2b97d59b95eda4d09f61358bd0bf324f05657569d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURMATT4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAV3gfL%2FlupTS3CrtaAh%2F8CtRXSmrbOn01Ck%2FYzMfwqsAiEA%2FNkE8djEyWYBOHxZGooyGKZMrqPs7iNq93Q%2BXGtBcqgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKNydc2OUE8lPv4qZCrcA09AxaWjjbCi9yNjHd9RSpiC7VorXBumMjFJmk9ynW%2BAB9Mbeua5cWF1Yz8NviT2UfmnC92keEVdhmufM5HAKANP49ZOP6cNUu9eGKCQqDFHA4oEtw2wHRIPVD7UrRGJsP8aIZh8Uj3JtZI98ngeXfdAwGWOUhOd7kkoyZCP3gFUcvGyVurw%2FiVS76EkUgjCR7c9tAhl2nETfeiPIYeCMt4VWPseI0ae8R6USzVbk7V13uaO1q0ihGcVTW%2Fh63DzW69fOXAFMM0zh530Oo9PF%2Ba4L6XsTXax09uiTJizzER26TtDmKAGsP5DixJb%2BjX30hqMfZeSIGnWDXhLedIHK%2Fe%2FHLRJMcyoNDxgqShdSWzssDoP8fkhAJx6GPHZQxNG2VcfwYwVCPWUPfQ%2BOz33StT7DsyJlvgB9p95ERZPKTLcr%2B4bEj3DD5LSPPAerOkHUj2lLUHYATPbfivlPXt3ENrL4RALlCEU%2Fc%2FmkwKL6TJ%2B0soUE1Z6uhr4tkA5kY9i15L4fSnHgpscPcb1oZ9DL0jdVMoOQveyYj%2FYNtQAb1JuTRcCKBll4oHN5yc69qhtwKB2iQVwgz2Ej2ru8IJxTfoRqwIlowoJFZxdm8N%2FwDz5V53u7jg2djM5H5J7MIbW0MEGOqUBlk5xuK2G%2BJDhp%2FpIWhqoi2tsh9wuu7E7oIXMg%2BJWCa616Ul4sj2RHY4JT5kqPgLkvZuD5dHaCnklRz%2B%2BtJtaLpNi9d9oV%2F5MOFHWHCuaPI5pbWaY7XoVIwh2kP76s4%2BEtAvq%2FXwp3qYN%2FtfD5wTDAtPnndgO3SjA0tttZrxDtAtU9L0FrMdF6v9kgxYnauWcpfWFdX13RJV4C8bQn0LBwkVHAQli&X-Amz-Signature=fb0bde16593dc2303a63863ad62614e18fbd80a0194c292446f70f4b57821450&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24CG3YC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIComBG3%2F6nMWJmRM8KZdZWMchBY5XJG6jjR9jV8uKC2FAiEArDVHiJce505GxdHJsmWsNS8IdBEyQh50vbaJaJGpPgwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvWXlGQ3CdDw3z4myrcA7o0SNV5jNu53q1uxWazywhoPXP5xQwv6AlEoe%2FLiuWPInWN%2BM4ZBKKfsiUYuX0WU0Tm1XXO9KrMOoIyu%2B%2Ffq9gZCP2TpCRvHdOK03oTVv6OiYmYvBZ1o2UdUpeK2C1iJE2t1MouM%2BAPlxjaMRnNENUyJ0kp%2Btvy%2FxGL1LQlA9MVhkBDNOCR%2BnluAEk9wWUUERxebQie77wFlrAzhx14JRmMGIKsv5lHPyEtAeIeSqWDRQgjE1RaxY2MPbbq7QanfX%2BlE4KUNQqEgW1Qe%2BeX2PzrpvoOe4ldoLIWWWh%2BZeQGStR%2BhC8VqqsBm7DpdVXarpGFbWsT78D0JoWGuhvk8h4NjJp3Uxpkn8Qvpi4JqOaEZv0PyYlsrfpHiEfqRiaGBg98PrXoI8l25t%2Be%2BEcXD%2FDURv9MDo3k3HsajKx9g%2FfMuIC6LXenqMb33zqc2gAeTtvvlczSqEh5u4bII3iR6I5arv9nhWjVZK%2FK5On7LM%2B6toJb5V6CmeWSN%2FNWBIiUwzwnfGkRE7QVCGY5cip4cRk1nR%2FNnAStrVWHbk6b2wIAZ0ZGkxBqMByYXVTbzTbS2nw%2FOaojEGqhIhOX7UyLPF5PxSpT4WdxXU5m8vgWwKGtHQZze%2FyCjrrM8AdlMKzMjcMGOqUBoZJonZYSf5uLJeZJZsqGaeYzQ9vOaZ1Ne0SsywVgTHYIePcWoFxBasfWyZtPcv2K0W9HhP2eI7IRxWvK%2ByVEQYoofWGgsLCSBjFCey4kgl24SI4tML23StAQC8K6P8BdMbIVxz0apDDsAgsd0yxLOG5dPFxDj6ojwDyJDshHMXl08vlk7IGZVfZgxhfOSMqkECBHcxgk54N35MEMUn3s8KXeH0nA&X-Amz-Signature=3d2d6d00de263bef3b485bff5800a7a6daf81e1707743f10d8ecdec1e87129ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24CG3YC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIComBG3%2F6nMWJmRM8KZdZWMchBY5XJG6jjR9jV8uKC2FAiEArDVHiJce505GxdHJsmWsNS8IdBEyQh50vbaJaJGpPgwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvWXlGQ3CdDw3z4myrcA7o0SNV5jNu53q1uxWazywhoPXP5xQwv6AlEoe%2FLiuWPInWN%2BM4ZBKKfsiUYuX0WU0Tm1XXO9KrMOoIyu%2B%2Ffq9gZCP2TpCRvHdOK03oTVv6OiYmYvBZ1o2UdUpeK2C1iJE2t1MouM%2BAPlxjaMRnNENUyJ0kp%2Btvy%2FxGL1LQlA9MVhkBDNOCR%2BnluAEk9wWUUERxebQie77wFlrAzhx14JRmMGIKsv5lHPyEtAeIeSqWDRQgjE1RaxY2MPbbq7QanfX%2BlE4KUNQqEgW1Qe%2BeX2PzrpvoOe4ldoLIWWWh%2BZeQGStR%2BhC8VqqsBm7DpdVXarpGFbWsT78D0JoWGuhvk8h4NjJp3Uxpkn8Qvpi4JqOaEZv0PyYlsrfpHiEfqRiaGBg98PrXoI8l25t%2Be%2BEcXD%2FDURv9MDo3k3HsajKx9g%2FfMuIC6LXenqMb33zqc2gAeTtvvlczSqEh5u4bII3iR6I5arv9nhWjVZK%2FK5On7LM%2B6toJb5V6CmeWSN%2FNWBIiUwzwnfGkRE7QVCGY5cip4cRk1nR%2FNnAStrVWHbk6b2wIAZ0ZGkxBqMByYXVTbzTbS2nw%2FOaojEGqhIhOX7UyLPF5PxSpT4WdxXU5m8vgWwKGtHQZze%2FyCjrrM8AdlMKzMjcMGOqUBoZJonZYSf5uLJeZJZsqGaeYzQ9vOaZ1Ne0SsywVgTHYIePcWoFxBasfWyZtPcv2K0W9HhP2eI7IRxWvK%2ByVEQYoofWGgsLCSBjFCey4kgl24SI4tML23StAQC8K6P8BdMbIVxz0apDDsAgsd0yxLOG5dPFxDj6ojwDyJDshHMXl08vlk7IGZVfZgxhfOSMqkECBHcxgk54N35MEMUn3s8KXeH0nA&X-Amz-Signature=0685f73319fab05aa4f29ef491a7d4344cd86d9f57c56ed6b1e1113f1bd2fa7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24CG3YC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIComBG3%2F6nMWJmRM8KZdZWMchBY5XJG6jjR9jV8uKC2FAiEArDVHiJce505GxdHJsmWsNS8IdBEyQh50vbaJaJGpPgwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvWXlGQ3CdDw3z4myrcA7o0SNV5jNu53q1uxWazywhoPXP5xQwv6AlEoe%2FLiuWPInWN%2BM4ZBKKfsiUYuX0WU0Tm1XXO9KrMOoIyu%2B%2Ffq9gZCP2TpCRvHdOK03oTVv6OiYmYvBZ1o2UdUpeK2C1iJE2t1MouM%2BAPlxjaMRnNENUyJ0kp%2Btvy%2FxGL1LQlA9MVhkBDNOCR%2BnluAEk9wWUUERxebQie77wFlrAzhx14JRmMGIKsv5lHPyEtAeIeSqWDRQgjE1RaxY2MPbbq7QanfX%2BlE4KUNQqEgW1Qe%2BeX2PzrpvoOe4ldoLIWWWh%2BZeQGStR%2BhC8VqqsBm7DpdVXarpGFbWsT78D0JoWGuhvk8h4NjJp3Uxpkn8Qvpi4JqOaEZv0PyYlsrfpHiEfqRiaGBg98PrXoI8l25t%2Be%2BEcXD%2FDURv9MDo3k3HsajKx9g%2FfMuIC6LXenqMb33zqc2gAeTtvvlczSqEh5u4bII3iR6I5arv9nhWjVZK%2FK5On7LM%2B6toJb5V6CmeWSN%2FNWBIiUwzwnfGkRE7QVCGY5cip4cRk1nR%2FNnAStrVWHbk6b2wIAZ0ZGkxBqMByYXVTbzTbS2nw%2FOaojEGqhIhOX7UyLPF5PxSpT4WdxXU5m8vgWwKGtHQZze%2FyCjrrM8AdlMKzMjcMGOqUBoZJonZYSf5uLJeZJZsqGaeYzQ9vOaZ1Ne0SsywVgTHYIePcWoFxBasfWyZtPcv2K0W9HhP2eI7IRxWvK%2ByVEQYoofWGgsLCSBjFCey4kgl24SI4tML23StAQC8K6P8BdMbIVxz0apDDsAgsd0yxLOG5dPFxDj6ojwDyJDshHMXl08vlk7IGZVfZgxhfOSMqkECBHcxgk54N35MEMUn3s8KXeH0nA&X-Amz-Signature=8a8d04202f63baf4a31444573a5848f3efe1387d57dc79443fc3b5ab3f7623fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24CG3YC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIComBG3%2F6nMWJmRM8KZdZWMchBY5XJG6jjR9jV8uKC2FAiEArDVHiJce505GxdHJsmWsNS8IdBEyQh50vbaJaJGpPgwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvWXlGQ3CdDw3z4myrcA7o0SNV5jNu53q1uxWazywhoPXP5xQwv6AlEoe%2FLiuWPInWN%2BM4ZBKKfsiUYuX0WU0Tm1XXO9KrMOoIyu%2B%2Ffq9gZCP2TpCRvHdOK03oTVv6OiYmYvBZ1o2UdUpeK2C1iJE2t1MouM%2BAPlxjaMRnNENUyJ0kp%2Btvy%2FxGL1LQlA9MVhkBDNOCR%2BnluAEk9wWUUERxebQie77wFlrAzhx14JRmMGIKsv5lHPyEtAeIeSqWDRQgjE1RaxY2MPbbq7QanfX%2BlE4KUNQqEgW1Qe%2BeX2PzrpvoOe4ldoLIWWWh%2BZeQGStR%2BhC8VqqsBm7DpdVXarpGFbWsT78D0JoWGuhvk8h4NjJp3Uxpkn8Qvpi4JqOaEZv0PyYlsrfpHiEfqRiaGBg98PrXoI8l25t%2Be%2BEcXD%2FDURv9MDo3k3HsajKx9g%2FfMuIC6LXenqMb33zqc2gAeTtvvlczSqEh5u4bII3iR6I5arv9nhWjVZK%2FK5On7LM%2B6toJb5V6CmeWSN%2FNWBIiUwzwnfGkRE7QVCGY5cip4cRk1nR%2FNnAStrVWHbk6b2wIAZ0ZGkxBqMByYXVTbzTbS2nw%2FOaojEGqhIhOX7UyLPF5PxSpT4WdxXU5m8vgWwKGtHQZze%2FyCjrrM8AdlMKzMjcMGOqUBoZJonZYSf5uLJeZJZsqGaeYzQ9vOaZ1Ne0SsywVgTHYIePcWoFxBasfWyZtPcv2K0W9HhP2eI7IRxWvK%2ByVEQYoofWGgsLCSBjFCey4kgl24SI4tML23StAQC8K6P8BdMbIVxz0apDDsAgsd0yxLOG5dPFxDj6ojwDyJDshHMXl08vlk7IGZVfZgxhfOSMqkECBHcxgk54N35MEMUn3s8KXeH0nA&X-Amz-Signature=2c1e7f38b71aa0f7aea30a9bce68ad116a640a7e45eb8869aa73ef17d4e705d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24CG3YC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIComBG3%2F6nMWJmRM8KZdZWMchBY5XJG6jjR9jV8uKC2FAiEArDVHiJce505GxdHJsmWsNS8IdBEyQh50vbaJaJGpPgwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvWXlGQ3CdDw3z4myrcA7o0SNV5jNu53q1uxWazywhoPXP5xQwv6AlEoe%2FLiuWPInWN%2BM4ZBKKfsiUYuX0WU0Tm1XXO9KrMOoIyu%2B%2Ffq9gZCP2TpCRvHdOK03oTVv6OiYmYvBZ1o2UdUpeK2C1iJE2t1MouM%2BAPlxjaMRnNENUyJ0kp%2Btvy%2FxGL1LQlA9MVhkBDNOCR%2BnluAEk9wWUUERxebQie77wFlrAzhx14JRmMGIKsv5lHPyEtAeIeSqWDRQgjE1RaxY2MPbbq7QanfX%2BlE4KUNQqEgW1Qe%2BeX2PzrpvoOe4ldoLIWWWh%2BZeQGStR%2BhC8VqqsBm7DpdVXarpGFbWsT78D0JoWGuhvk8h4NjJp3Uxpkn8Qvpi4JqOaEZv0PyYlsrfpHiEfqRiaGBg98PrXoI8l25t%2Be%2BEcXD%2FDURv9MDo3k3HsajKx9g%2FfMuIC6LXenqMb33zqc2gAeTtvvlczSqEh5u4bII3iR6I5arv9nhWjVZK%2FK5On7LM%2B6toJb5V6CmeWSN%2FNWBIiUwzwnfGkRE7QVCGY5cip4cRk1nR%2FNnAStrVWHbk6b2wIAZ0ZGkxBqMByYXVTbzTbS2nw%2FOaojEGqhIhOX7UyLPF5PxSpT4WdxXU5m8vgWwKGtHQZze%2FyCjrrM8AdlMKzMjcMGOqUBoZJonZYSf5uLJeZJZsqGaeYzQ9vOaZ1Ne0SsywVgTHYIePcWoFxBasfWyZtPcv2K0W9HhP2eI7IRxWvK%2ByVEQYoofWGgsLCSBjFCey4kgl24SI4tML23StAQC8K6P8BdMbIVxz0apDDsAgsd0yxLOG5dPFxDj6ojwDyJDshHMXl08vlk7IGZVfZgxhfOSMqkECBHcxgk54N35MEMUn3s8KXeH0nA&X-Amz-Signature=887f4e12343dfd1c50fc8518703651f45fbc8db39abb09b2835a81b76bcf972f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24CG3YC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIComBG3%2F6nMWJmRM8KZdZWMchBY5XJG6jjR9jV8uKC2FAiEArDVHiJce505GxdHJsmWsNS8IdBEyQh50vbaJaJGpPgwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvWXlGQ3CdDw3z4myrcA7o0SNV5jNu53q1uxWazywhoPXP5xQwv6AlEoe%2FLiuWPInWN%2BM4ZBKKfsiUYuX0WU0Tm1XXO9KrMOoIyu%2B%2Ffq9gZCP2TpCRvHdOK03oTVv6OiYmYvBZ1o2UdUpeK2C1iJE2t1MouM%2BAPlxjaMRnNENUyJ0kp%2Btvy%2FxGL1LQlA9MVhkBDNOCR%2BnluAEk9wWUUERxebQie77wFlrAzhx14JRmMGIKsv5lHPyEtAeIeSqWDRQgjE1RaxY2MPbbq7QanfX%2BlE4KUNQqEgW1Qe%2BeX2PzrpvoOe4ldoLIWWWh%2BZeQGStR%2BhC8VqqsBm7DpdVXarpGFbWsT78D0JoWGuhvk8h4NjJp3Uxpkn8Qvpi4JqOaEZv0PyYlsrfpHiEfqRiaGBg98PrXoI8l25t%2Be%2BEcXD%2FDURv9MDo3k3HsajKx9g%2FfMuIC6LXenqMb33zqc2gAeTtvvlczSqEh5u4bII3iR6I5arv9nhWjVZK%2FK5On7LM%2B6toJb5V6CmeWSN%2FNWBIiUwzwnfGkRE7QVCGY5cip4cRk1nR%2FNnAStrVWHbk6b2wIAZ0ZGkxBqMByYXVTbzTbS2nw%2FOaojEGqhIhOX7UyLPF5PxSpT4WdxXU5m8vgWwKGtHQZze%2FyCjrrM8AdlMKzMjcMGOqUBoZJonZYSf5uLJeZJZsqGaeYzQ9vOaZ1Ne0SsywVgTHYIePcWoFxBasfWyZtPcv2K0W9HhP2eI7IRxWvK%2ByVEQYoofWGgsLCSBjFCey4kgl24SI4tML23StAQC8K6P8BdMbIVxz0apDDsAgsd0yxLOG5dPFxDj6ojwDyJDshHMXl08vlk7IGZVfZgxhfOSMqkECBHcxgk54N35MEMUn3s8KXeH0nA&X-Amz-Signature=ee9952ce49736a7cfece4c7b6fd756057f6c0be800b01b4e7971c3bba893e823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24CG3YC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIComBG3%2F6nMWJmRM8KZdZWMchBY5XJG6jjR9jV8uKC2FAiEArDVHiJce505GxdHJsmWsNS8IdBEyQh50vbaJaJGpPgwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvWXlGQ3CdDw3z4myrcA7o0SNV5jNu53q1uxWazywhoPXP5xQwv6AlEoe%2FLiuWPInWN%2BM4ZBKKfsiUYuX0WU0Tm1XXO9KrMOoIyu%2B%2Ffq9gZCP2TpCRvHdOK03oTVv6OiYmYvBZ1o2UdUpeK2C1iJE2t1MouM%2BAPlxjaMRnNENUyJ0kp%2Btvy%2FxGL1LQlA9MVhkBDNOCR%2BnluAEk9wWUUERxebQie77wFlrAzhx14JRmMGIKsv5lHPyEtAeIeSqWDRQgjE1RaxY2MPbbq7QanfX%2BlE4KUNQqEgW1Qe%2BeX2PzrpvoOe4ldoLIWWWh%2BZeQGStR%2BhC8VqqsBm7DpdVXarpGFbWsT78D0JoWGuhvk8h4NjJp3Uxpkn8Qvpi4JqOaEZv0PyYlsrfpHiEfqRiaGBg98PrXoI8l25t%2Be%2BEcXD%2FDURv9MDo3k3HsajKx9g%2FfMuIC6LXenqMb33zqc2gAeTtvvlczSqEh5u4bII3iR6I5arv9nhWjVZK%2FK5On7LM%2B6toJb5V6CmeWSN%2FNWBIiUwzwnfGkRE7QVCGY5cip4cRk1nR%2FNnAStrVWHbk6b2wIAZ0ZGkxBqMByYXVTbzTbS2nw%2FOaojEGqhIhOX7UyLPF5PxSpT4WdxXU5m8vgWwKGtHQZze%2FyCjrrM8AdlMKzMjcMGOqUBoZJonZYSf5uLJeZJZsqGaeYzQ9vOaZ1Ne0SsywVgTHYIePcWoFxBasfWyZtPcv2K0W9HhP2eI7IRxWvK%2ByVEQYoofWGgsLCSBjFCey4kgl24SI4tML23StAQC8K6P8BdMbIVxz0apDDsAgsd0yxLOG5dPFxDj6ojwDyJDshHMXl08vlk7IGZVfZgxhfOSMqkECBHcxgk54N35MEMUn3s8KXeH0nA&X-Amz-Signature=217f4f4871244b14a83f056d8e616ade345366ce94527aa9551ab2cc30b3c067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

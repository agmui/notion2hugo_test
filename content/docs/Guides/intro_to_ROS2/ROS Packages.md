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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPBOMOI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC3vZ1QnfVJiHb4umkeA6Lc7%2B0Cwh6crGeuEv%2Fe9KkZtAiEA%2B7UWbg%2BLrhca8%2FWwNUctllXiB7Jm8GSqRDWf1U5d%2F%2FAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgR21upom%2B5t0EjEyrcA5dqhFUfWw9Y%2FJxFGNz%2FK%2FuGuTXHeEj9o7sr%2B0df8Y0Pzou2Sr580WsZjutH%2FUtK3Rrb6pRfn5pzyODxT6tupS9299M6iz55LEpyoOEjEXut4grKvmyPA9BNftCuZOlXom0Pwkn5%2F4ZqjKcKgX5z9q0idDqStOlPKt3MzcRjqnhCAatCYYFTioSvSUSZUfORz4GJMWDcua%2BPnyCmyRMJSA0rGR3i%2F%2FpQ%2Bkmad5G63IRpyrdqOz0vS2mfC61OoE5ca0Jw6rr4QNF84B5voFwxtCbTJLUU%2BFRGqXUve%2Fwf1lbFj3MBwWO7FarfUNxoYwVZee7xbcagZjMiGJonQrW2isatdOolh2RbdhLxGSTTzPka0M1dhUAuX%2FpGmuyvNofQA1U0UPDWpNTbzYVOvKL0asTqgAv2O8WlS8HXiVGN7RKgvcavAH1PKKkwYtnJZgEtgNqSrEy%2FjRFni%2FFi1MUMFaUkj3n%2FE61nZ3Shu%2BHRxi%2BUBk8aV9a%2FE%2Bug%2BN%2Fek%2B8%2FhbqXUcaB0NcUlgJCK2P62BI3lUt7LWIJ0rZdQT5bMG1M58kcBRVDmECKMYx95BKtxCW0usqvcUbXO7uLgqLcuyDDdEBKsmnt3R2OhMZrzLFP5Lhip27MKaKlpFitMOqo778GOqUBBjNueJw8E27KAtU3Zn4NSDpiimYl4oWIzxq9qJ9gl9LnY2okMkRrjOnzSgyEevwo9P3%2BCPsEmkk11HBBnPNbFLHdJGIngDcVqoY9fxNHlk8glMVES1JQ3n619uOIXajLoXfxsUPaMzAGGi68r4VFiF%2BTce0%2FsPU4pkXD%2F6qYkoIxBsjKYmLHbbYvjSSOTxjir58vOMPqRNRoAllHgfvQ3bM4LmJd&X-Amz-Signature=85b1f7ef04a0262fd5653a431df52889d9139e8dd3b229729b18b35c7fd84fd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPBOMOI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC3vZ1QnfVJiHb4umkeA6Lc7%2B0Cwh6crGeuEv%2Fe9KkZtAiEA%2B7UWbg%2BLrhca8%2FWwNUctllXiB7Jm8GSqRDWf1U5d%2F%2FAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgR21upom%2B5t0EjEyrcA5dqhFUfWw9Y%2FJxFGNz%2FK%2FuGuTXHeEj9o7sr%2B0df8Y0Pzou2Sr580WsZjutH%2FUtK3Rrb6pRfn5pzyODxT6tupS9299M6iz55LEpyoOEjEXut4grKvmyPA9BNftCuZOlXom0Pwkn5%2F4ZqjKcKgX5z9q0idDqStOlPKt3MzcRjqnhCAatCYYFTioSvSUSZUfORz4GJMWDcua%2BPnyCmyRMJSA0rGR3i%2F%2FpQ%2Bkmad5G63IRpyrdqOz0vS2mfC61OoE5ca0Jw6rr4QNF84B5voFwxtCbTJLUU%2BFRGqXUve%2Fwf1lbFj3MBwWO7FarfUNxoYwVZee7xbcagZjMiGJonQrW2isatdOolh2RbdhLxGSTTzPka0M1dhUAuX%2FpGmuyvNofQA1U0UPDWpNTbzYVOvKL0asTqgAv2O8WlS8HXiVGN7RKgvcavAH1PKKkwYtnJZgEtgNqSrEy%2FjRFni%2FFi1MUMFaUkj3n%2FE61nZ3Shu%2BHRxi%2BUBk8aV9a%2FE%2Bug%2BN%2Fek%2B8%2FhbqXUcaB0NcUlgJCK2P62BI3lUt7LWIJ0rZdQT5bMG1M58kcBRVDmECKMYx95BKtxCW0usqvcUbXO7uLgqLcuyDDdEBKsmnt3R2OhMZrzLFP5Lhip27MKaKlpFitMOqo778GOqUBBjNueJw8E27KAtU3Zn4NSDpiimYl4oWIzxq9qJ9gl9LnY2okMkRrjOnzSgyEevwo9P3%2BCPsEmkk11HBBnPNbFLHdJGIngDcVqoY9fxNHlk8glMVES1JQ3n619uOIXajLoXfxsUPaMzAGGi68r4VFiF%2BTce0%2FsPU4pkXD%2F6qYkoIxBsjKYmLHbbYvjSSOTxjir58vOMPqRNRoAllHgfvQ3bM4LmJd&X-Amz-Signature=d1508c7fa4d1d9920c92844f9c83f7f5300615301aa9704e91c744465bc9f900&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPBOMOI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC3vZ1QnfVJiHb4umkeA6Lc7%2B0Cwh6crGeuEv%2Fe9KkZtAiEA%2B7UWbg%2BLrhca8%2FWwNUctllXiB7Jm8GSqRDWf1U5d%2F%2FAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgR21upom%2B5t0EjEyrcA5dqhFUfWw9Y%2FJxFGNz%2FK%2FuGuTXHeEj9o7sr%2B0df8Y0Pzou2Sr580WsZjutH%2FUtK3Rrb6pRfn5pzyODxT6tupS9299M6iz55LEpyoOEjEXut4grKvmyPA9BNftCuZOlXom0Pwkn5%2F4ZqjKcKgX5z9q0idDqStOlPKt3MzcRjqnhCAatCYYFTioSvSUSZUfORz4GJMWDcua%2BPnyCmyRMJSA0rGR3i%2F%2FpQ%2Bkmad5G63IRpyrdqOz0vS2mfC61OoE5ca0Jw6rr4QNF84B5voFwxtCbTJLUU%2BFRGqXUve%2Fwf1lbFj3MBwWO7FarfUNxoYwVZee7xbcagZjMiGJonQrW2isatdOolh2RbdhLxGSTTzPka0M1dhUAuX%2FpGmuyvNofQA1U0UPDWpNTbzYVOvKL0asTqgAv2O8WlS8HXiVGN7RKgvcavAH1PKKkwYtnJZgEtgNqSrEy%2FjRFni%2FFi1MUMFaUkj3n%2FE61nZ3Shu%2BHRxi%2BUBk8aV9a%2FE%2Bug%2BN%2Fek%2B8%2FhbqXUcaB0NcUlgJCK2P62BI3lUt7LWIJ0rZdQT5bMG1M58kcBRVDmECKMYx95BKtxCW0usqvcUbXO7uLgqLcuyDDdEBKsmnt3R2OhMZrzLFP5Lhip27MKaKlpFitMOqo778GOqUBBjNueJw8E27KAtU3Zn4NSDpiimYl4oWIzxq9qJ9gl9LnY2okMkRrjOnzSgyEevwo9P3%2BCPsEmkk11HBBnPNbFLHdJGIngDcVqoY9fxNHlk8glMVES1JQ3n619uOIXajLoXfxsUPaMzAGGi68r4VFiF%2BTce0%2FsPU4pkXD%2F6qYkoIxBsjKYmLHbbYvjSSOTxjir58vOMPqRNRoAllHgfvQ3bM4LmJd&X-Amz-Signature=ceeab98d6a740bbfa6e31d28293f93e08ad1d99721e7d6e6f0012e12d520fc0f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPBOMOI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC3vZ1QnfVJiHb4umkeA6Lc7%2B0Cwh6crGeuEv%2Fe9KkZtAiEA%2B7UWbg%2BLrhca8%2FWwNUctllXiB7Jm8GSqRDWf1U5d%2F%2FAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgR21upom%2B5t0EjEyrcA5dqhFUfWw9Y%2FJxFGNz%2FK%2FuGuTXHeEj9o7sr%2B0df8Y0Pzou2Sr580WsZjutH%2FUtK3Rrb6pRfn5pzyODxT6tupS9299M6iz55LEpyoOEjEXut4grKvmyPA9BNftCuZOlXom0Pwkn5%2F4ZqjKcKgX5z9q0idDqStOlPKt3MzcRjqnhCAatCYYFTioSvSUSZUfORz4GJMWDcua%2BPnyCmyRMJSA0rGR3i%2F%2FpQ%2Bkmad5G63IRpyrdqOz0vS2mfC61OoE5ca0Jw6rr4QNF84B5voFwxtCbTJLUU%2BFRGqXUve%2Fwf1lbFj3MBwWO7FarfUNxoYwVZee7xbcagZjMiGJonQrW2isatdOolh2RbdhLxGSTTzPka0M1dhUAuX%2FpGmuyvNofQA1U0UPDWpNTbzYVOvKL0asTqgAv2O8WlS8HXiVGN7RKgvcavAH1PKKkwYtnJZgEtgNqSrEy%2FjRFni%2FFi1MUMFaUkj3n%2FE61nZ3Shu%2BHRxi%2BUBk8aV9a%2FE%2Bug%2BN%2Fek%2B8%2FhbqXUcaB0NcUlgJCK2P62BI3lUt7LWIJ0rZdQT5bMG1M58kcBRVDmECKMYx95BKtxCW0usqvcUbXO7uLgqLcuyDDdEBKsmnt3R2OhMZrzLFP5Lhip27MKaKlpFitMOqo778GOqUBBjNueJw8E27KAtU3Zn4NSDpiimYl4oWIzxq9qJ9gl9LnY2okMkRrjOnzSgyEevwo9P3%2BCPsEmkk11HBBnPNbFLHdJGIngDcVqoY9fxNHlk8glMVES1JQ3n619uOIXajLoXfxsUPaMzAGGi68r4VFiF%2BTce0%2FsPU4pkXD%2F6qYkoIxBsjKYmLHbbYvjSSOTxjir58vOMPqRNRoAllHgfvQ3bM4LmJd&X-Amz-Signature=abc35990d2ef2c02174a7cd07cbf586db20d5f2ec27e72030553bcf4663c6975&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPBOMOI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC3vZ1QnfVJiHb4umkeA6Lc7%2B0Cwh6crGeuEv%2Fe9KkZtAiEA%2B7UWbg%2BLrhca8%2FWwNUctllXiB7Jm8GSqRDWf1U5d%2F%2FAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgR21upom%2B5t0EjEyrcA5dqhFUfWw9Y%2FJxFGNz%2FK%2FuGuTXHeEj9o7sr%2B0df8Y0Pzou2Sr580WsZjutH%2FUtK3Rrb6pRfn5pzyODxT6tupS9299M6iz55LEpyoOEjEXut4grKvmyPA9BNftCuZOlXom0Pwkn5%2F4ZqjKcKgX5z9q0idDqStOlPKt3MzcRjqnhCAatCYYFTioSvSUSZUfORz4GJMWDcua%2BPnyCmyRMJSA0rGR3i%2F%2FpQ%2Bkmad5G63IRpyrdqOz0vS2mfC61OoE5ca0Jw6rr4QNF84B5voFwxtCbTJLUU%2BFRGqXUve%2Fwf1lbFj3MBwWO7FarfUNxoYwVZee7xbcagZjMiGJonQrW2isatdOolh2RbdhLxGSTTzPka0M1dhUAuX%2FpGmuyvNofQA1U0UPDWpNTbzYVOvKL0asTqgAv2O8WlS8HXiVGN7RKgvcavAH1PKKkwYtnJZgEtgNqSrEy%2FjRFni%2FFi1MUMFaUkj3n%2FE61nZ3Shu%2BHRxi%2BUBk8aV9a%2FE%2Bug%2BN%2Fek%2B8%2FhbqXUcaB0NcUlgJCK2P62BI3lUt7LWIJ0rZdQT5bMG1M58kcBRVDmECKMYx95BKtxCW0usqvcUbXO7uLgqLcuyDDdEBKsmnt3R2OhMZrzLFP5Lhip27MKaKlpFitMOqo778GOqUBBjNueJw8E27KAtU3Zn4NSDpiimYl4oWIzxq9qJ9gl9LnY2okMkRrjOnzSgyEevwo9P3%2BCPsEmkk11HBBnPNbFLHdJGIngDcVqoY9fxNHlk8glMVES1JQ3n619uOIXajLoXfxsUPaMzAGGi68r4VFiF%2BTce0%2FsPU4pkXD%2F6qYkoIxBsjKYmLHbbYvjSSOTxjir58vOMPqRNRoAllHgfvQ3bM4LmJd&X-Amz-Signature=f4fca9a3bb7948fbd78b47e6496a4e3242d728c318440854e98f45ac75915730&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPBOMOI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC3vZ1QnfVJiHb4umkeA6Lc7%2B0Cwh6crGeuEv%2Fe9KkZtAiEA%2B7UWbg%2BLrhca8%2FWwNUctllXiB7Jm8GSqRDWf1U5d%2F%2FAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgR21upom%2B5t0EjEyrcA5dqhFUfWw9Y%2FJxFGNz%2FK%2FuGuTXHeEj9o7sr%2B0df8Y0Pzou2Sr580WsZjutH%2FUtK3Rrb6pRfn5pzyODxT6tupS9299M6iz55LEpyoOEjEXut4grKvmyPA9BNftCuZOlXom0Pwkn5%2F4ZqjKcKgX5z9q0idDqStOlPKt3MzcRjqnhCAatCYYFTioSvSUSZUfORz4GJMWDcua%2BPnyCmyRMJSA0rGR3i%2F%2FpQ%2Bkmad5G63IRpyrdqOz0vS2mfC61OoE5ca0Jw6rr4QNF84B5voFwxtCbTJLUU%2BFRGqXUve%2Fwf1lbFj3MBwWO7FarfUNxoYwVZee7xbcagZjMiGJonQrW2isatdOolh2RbdhLxGSTTzPka0M1dhUAuX%2FpGmuyvNofQA1U0UPDWpNTbzYVOvKL0asTqgAv2O8WlS8HXiVGN7RKgvcavAH1PKKkwYtnJZgEtgNqSrEy%2FjRFni%2FFi1MUMFaUkj3n%2FE61nZ3Shu%2BHRxi%2BUBk8aV9a%2FE%2Bug%2BN%2Fek%2B8%2FhbqXUcaB0NcUlgJCK2P62BI3lUt7LWIJ0rZdQT5bMG1M58kcBRVDmECKMYx95BKtxCW0usqvcUbXO7uLgqLcuyDDdEBKsmnt3R2OhMZrzLFP5Lhip27MKaKlpFitMOqo778GOqUBBjNueJw8E27KAtU3Zn4NSDpiimYl4oWIzxq9qJ9gl9LnY2okMkRrjOnzSgyEevwo9P3%2BCPsEmkk11HBBnPNbFLHdJGIngDcVqoY9fxNHlk8glMVES1JQ3n619uOIXajLoXfxsUPaMzAGGi68r4VFiF%2BTce0%2FsPU4pkXD%2F6qYkoIxBsjKYmLHbbYvjSSOTxjir58vOMPqRNRoAllHgfvQ3bM4LmJd&X-Amz-Signature=c6224213cd164e1f98b8724f23f8b3a6be46224bbe11c3f26cdb0d8456f10e52&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPBOMOI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC3vZ1QnfVJiHb4umkeA6Lc7%2B0Cwh6crGeuEv%2Fe9KkZtAiEA%2B7UWbg%2BLrhca8%2FWwNUctllXiB7Jm8GSqRDWf1U5d%2F%2FAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgR21upom%2B5t0EjEyrcA5dqhFUfWw9Y%2FJxFGNz%2FK%2FuGuTXHeEj9o7sr%2B0df8Y0Pzou2Sr580WsZjutH%2FUtK3Rrb6pRfn5pzyODxT6tupS9299M6iz55LEpyoOEjEXut4grKvmyPA9BNftCuZOlXom0Pwkn5%2F4ZqjKcKgX5z9q0idDqStOlPKt3MzcRjqnhCAatCYYFTioSvSUSZUfORz4GJMWDcua%2BPnyCmyRMJSA0rGR3i%2F%2FpQ%2Bkmad5G63IRpyrdqOz0vS2mfC61OoE5ca0Jw6rr4QNF84B5voFwxtCbTJLUU%2BFRGqXUve%2Fwf1lbFj3MBwWO7FarfUNxoYwVZee7xbcagZjMiGJonQrW2isatdOolh2RbdhLxGSTTzPka0M1dhUAuX%2FpGmuyvNofQA1U0UPDWpNTbzYVOvKL0asTqgAv2O8WlS8HXiVGN7RKgvcavAH1PKKkwYtnJZgEtgNqSrEy%2FjRFni%2FFi1MUMFaUkj3n%2FE61nZ3Shu%2BHRxi%2BUBk8aV9a%2FE%2Bug%2BN%2Fek%2B8%2FhbqXUcaB0NcUlgJCK2P62BI3lUt7LWIJ0rZdQT5bMG1M58kcBRVDmECKMYx95BKtxCW0usqvcUbXO7uLgqLcuyDDdEBKsmnt3R2OhMZrzLFP5Lhip27MKaKlpFitMOqo778GOqUBBjNueJw8E27KAtU3Zn4NSDpiimYl4oWIzxq9qJ9gl9LnY2okMkRrjOnzSgyEevwo9P3%2BCPsEmkk11HBBnPNbFLHdJGIngDcVqoY9fxNHlk8glMVES1JQ3n619uOIXajLoXfxsUPaMzAGGi68r4VFiF%2BTce0%2FsPU4pkXD%2F6qYkoIxBsjKYmLHbbYvjSSOTxjir58vOMPqRNRoAllHgfvQ3bM4LmJd&X-Amz-Signature=e4191fdda5dddfb6c6135082bb36584c62b594ad07083a18d98917f8473be85f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

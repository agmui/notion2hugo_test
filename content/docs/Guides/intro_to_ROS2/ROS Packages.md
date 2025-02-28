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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFOEMCN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBP%2BlOSuE9YMv35HLtwpdDUg5dgGN%2FJcfrvF%2FHz5ZUZtAiEAgF9OmxYWGrsUkBRkC54mmqS1VyyJbLXkQRPR1TW5KPgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfTMl3%2Fo2QN6ncv2CrcA78BcgOc06CAJc08cX0tcwQ1oiX%2B2pNozjUQkKLDl0DNk44z8%2B%2BH4w3NToJO5bkGgA0nmc1UDwumB7BwClzYsXuskNzr668VtoOfu04cnkiaPTjhuqcrFJv5yebWl3VRrozlRThhhEDjq0XBlEh5J%2Fxmote15FiQ7%2Bn%2F3WFDZKbFE1w5Aqu3RPwCfMjeT4gakxZiA%2FOIfYJDlLN5RUQItxauzqJHAtUnfb9jtlQDXmcmVwPzpLgTCs6wRgAuUzoop7d56cvtMcKRminIvyM7hFi0j5Od5xfBoNeUrFGOFFNA0sCMpnSDJBaIj%2FeYat9N2lkCASagNn3w4JsEM1FxYTWiAeHSXVAJZDSasdOY4BaXgZk3oyRb35BzMoX8jWP4nut5R4ZT%2FEqE0fYdI%2Fhl5o1M1ZZo0sAvDIN9tkdDK%2BzOarTaquZpsC%2Bvb6oCnTdtr8BVhIu54NzmGaTaxNk9MhBNsDeH0mSYLAwV6GzYIafpqb335mxamJMrIaIQz8c4aohKxjadsvzj7QYHoDexvAINx0Ro3n%2FistjkRMqtDJIFSpmDnKEEhquY%2FasBvKAeO1s5g7Xf%2FSG0Hh4wiQ6KNcM5j%2F%2Fp7OlecVbHPKeQ0iz46kV0SR4KiQqQ08NgMOfNh74GOqUBGCC7zbQ8oeu9J%2BdmjqDRpMNCITkqUTi4Ef79JFiOQQUTxrvfDnvK4uwvZXNjNUsQrfePUwSIi4NaIqyUJ3MdjXb7F3Pu5%2FC3Yg9IQJ3PQQjt9B1Nu7UIuctAevyldM8thk1SXJMvXu3gWWkcku9xDF1pEvCRZf3sCVRcFVItOluPaJ4S1pjOoHk5iueayShS0d7ufkkpWqMCns5DNIyCwNq%2FQ3vY&X-Amz-Signature=d8cf61d96ec17dc9a7d8333af6fe72e37f4eb3162633e9c073b3b9584154f62e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFOEMCN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBP%2BlOSuE9YMv35HLtwpdDUg5dgGN%2FJcfrvF%2FHz5ZUZtAiEAgF9OmxYWGrsUkBRkC54mmqS1VyyJbLXkQRPR1TW5KPgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfTMl3%2Fo2QN6ncv2CrcA78BcgOc06CAJc08cX0tcwQ1oiX%2B2pNozjUQkKLDl0DNk44z8%2B%2BH4w3NToJO5bkGgA0nmc1UDwumB7BwClzYsXuskNzr668VtoOfu04cnkiaPTjhuqcrFJv5yebWl3VRrozlRThhhEDjq0XBlEh5J%2Fxmote15FiQ7%2Bn%2F3WFDZKbFE1w5Aqu3RPwCfMjeT4gakxZiA%2FOIfYJDlLN5RUQItxauzqJHAtUnfb9jtlQDXmcmVwPzpLgTCs6wRgAuUzoop7d56cvtMcKRminIvyM7hFi0j5Od5xfBoNeUrFGOFFNA0sCMpnSDJBaIj%2FeYat9N2lkCASagNn3w4JsEM1FxYTWiAeHSXVAJZDSasdOY4BaXgZk3oyRb35BzMoX8jWP4nut5R4ZT%2FEqE0fYdI%2Fhl5o1M1ZZo0sAvDIN9tkdDK%2BzOarTaquZpsC%2Bvb6oCnTdtr8BVhIu54NzmGaTaxNk9MhBNsDeH0mSYLAwV6GzYIafpqb335mxamJMrIaIQz8c4aohKxjadsvzj7QYHoDexvAINx0Ro3n%2FistjkRMqtDJIFSpmDnKEEhquY%2FasBvKAeO1s5g7Xf%2FSG0Hh4wiQ6KNcM5j%2F%2Fp7OlecVbHPKeQ0iz46kV0SR4KiQqQ08NgMOfNh74GOqUBGCC7zbQ8oeu9J%2BdmjqDRpMNCITkqUTi4Ef79JFiOQQUTxrvfDnvK4uwvZXNjNUsQrfePUwSIi4NaIqyUJ3MdjXb7F3Pu5%2FC3Yg9IQJ3PQQjt9B1Nu7UIuctAevyldM8thk1SXJMvXu3gWWkcku9xDF1pEvCRZf3sCVRcFVItOluPaJ4S1pjOoHk5iueayShS0d7ufkkpWqMCns5DNIyCwNq%2FQ3vY&X-Amz-Signature=dd9531ce84e5dba691673655580f4325e8020b45a1e630a5a3fa177f53b451de&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFOEMCN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBP%2BlOSuE9YMv35HLtwpdDUg5dgGN%2FJcfrvF%2FHz5ZUZtAiEAgF9OmxYWGrsUkBRkC54mmqS1VyyJbLXkQRPR1TW5KPgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfTMl3%2Fo2QN6ncv2CrcA78BcgOc06CAJc08cX0tcwQ1oiX%2B2pNozjUQkKLDl0DNk44z8%2B%2BH4w3NToJO5bkGgA0nmc1UDwumB7BwClzYsXuskNzr668VtoOfu04cnkiaPTjhuqcrFJv5yebWl3VRrozlRThhhEDjq0XBlEh5J%2Fxmote15FiQ7%2Bn%2F3WFDZKbFE1w5Aqu3RPwCfMjeT4gakxZiA%2FOIfYJDlLN5RUQItxauzqJHAtUnfb9jtlQDXmcmVwPzpLgTCs6wRgAuUzoop7d56cvtMcKRminIvyM7hFi0j5Od5xfBoNeUrFGOFFNA0sCMpnSDJBaIj%2FeYat9N2lkCASagNn3w4JsEM1FxYTWiAeHSXVAJZDSasdOY4BaXgZk3oyRb35BzMoX8jWP4nut5R4ZT%2FEqE0fYdI%2Fhl5o1M1ZZo0sAvDIN9tkdDK%2BzOarTaquZpsC%2Bvb6oCnTdtr8BVhIu54NzmGaTaxNk9MhBNsDeH0mSYLAwV6GzYIafpqb335mxamJMrIaIQz8c4aohKxjadsvzj7QYHoDexvAINx0Ro3n%2FistjkRMqtDJIFSpmDnKEEhquY%2FasBvKAeO1s5g7Xf%2FSG0Hh4wiQ6KNcM5j%2F%2Fp7OlecVbHPKeQ0iz46kV0SR4KiQqQ08NgMOfNh74GOqUBGCC7zbQ8oeu9J%2BdmjqDRpMNCITkqUTi4Ef79JFiOQQUTxrvfDnvK4uwvZXNjNUsQrfePUwSIi4NaIqyUJ3MdjXb7F3Pu5%2FC3Yg9IQJ3PQQjt9B1Nu7UIuctAevyldM8thk1SXJMvXu3gWWkcku9xDF1pEvCRZf3sCVRcFVItOluPaJ4S1pjOoHk5iueayShS0d7ufkkpWqMCns5DNIyCwNq%2FQ3vY&X-Amz-Signature=a5be0d62cb810e3b6ccd36792ff66e89b5b8f149b54c84d682336df863bc9d47&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFOEMCN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBP%2BlOSuE9YMv35HLtwpdDUg5dgGN%2FJcfrvF%2FHz5ZUZtAiEAgF9OmxYWGrsUkBRkC54mmqS1VyyJbLXkQRPR1TW5KPgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfTMl3%2Fo2QN6ncv2CrcA78BcgOc06CAJc08cX0tcwQ1oiX%2B2pNozjUQkKLDl0DNk44z8%2B%2BH4w3NToJO5bkGgA0nmc1UDwumB7BwClzYsXuskNzr668VtoOfu04cnkiaPTjhuqcrFJv5yebWl3VRrozlRThhhEDjq0XBlEh5J%2Fxmote15FiQ7%2Bn%2F3WFDZKbFE1w5Aqu3RPwCfMjeT4gakxZiA%2FOIfYJDlLN5RUQItxauzqJHAtUnfb9jtlQDXmcmVwPzpLgTCs6wRgAuUzoop7d56cvtMcKRminIvyM7hFi0j5Od5xfBoNeUrFGOFFNA0sCMpnSDJBaIj%2FeYat9N2lkCASagNn3w4JsEM1FxYTWiAeHSXVAJZDSasdOY4BaXgZk3oyRb35BzMoX8jWP4nut5R4ZT%2FEqE0fYdI%2Fhl5o1M1ZZo0sAvDIN9tkdDK%2BzOarTaquZpsC%2Bvb6oCnTdtr8BVhIu54NzmGaTaxNk9MhBNsDeH0mSYLAwV6GzYIafpqb335mxamJMrIaIQz8c4aohKxjadsvzj7QYHoDexvAINx0Ro3n%2FistjkRMqtDJIFSpmDnKEEhquY%2FasBvKAeO1s5g7Xf%2FSG0Hh4wiQ6KNcM5j%2F%2Fp7OlecVbHPKeQ0iz46kV0SR4KiQqQ08NgMOfNh74GOqUBGCC7zbQ8oeu9J%2BdmjqDRpMNCITkqUTi4Ef79JFiOQQUTxrvfDnvK4uwvZXNjNUsQrfePUwSIi4NaIqyUJ3MdjXb7F3Pu5%2FC3Yg9IQJ3PQQjt9B1Nu7UIuctAevyldM8thk1SXJMvXu3gWWkcku9xDF1pEvCRZf3sCVRcFVItOluPaJ4S1pjOoHk5iueayShS0d7ufkkpWqMCns5DNIyCwNq%2FQ3vY&X-Amz-Signature=4b7ba61852ce3866c9cbbdf32d1dc1855fefc1220c92de356eb4656596e1632e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFOEMCN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBP%2BlOSuE9YMv35HLtwpdDUg5dgGN%2FJcfrvF%2FHz5ZUZtAiEAgF9OmxYWGrsUkBRkC54mmqS1VyyJbLXkQRPR1TW5KPgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfTMl3%2Fo2QN6ncv2CrcA78BcgOc06CAJc08cX0tcwQ1oiX%2B2pNozjUQkKLDl0DNk44z8%2B%2BH4w3NToJO5bkGgA0nmc1UDwumB7BwClzYsXuskNzr668VtoOfu04cnkiaPTjhuqcrFJv5yebWl3VRrozlRThhhEDjq0XBlEh5J%2Fxmote15FiQ7%2Bn%2F3WFDZKbFE1w5Aqu3RPwCfMjeT4gakxZiA%2FOIfYJDlLN5RUQItxauzqJHAtUnfb9jtlQDXmcmVwPzpLgTCs6wRgAuUzoop7d56cvtMcKRminIvyM7hFi0j5Od5xfBoNeUrFGOFFNA0sCMpnSDJBaIj%2FeYat9N2lkCASagNn3w4JsEM1FxYTWiAeHSXVAJZDSasdOY4BaXgZk3oyRb35BzMoX8jWP4nut5R4ZT%2FEqE0fYdI%2Fhl5o1M1ZZo0sAvDIN9tkdDK%2BzOarTaquZpsC%2Bvb6oCnTdtr8BVhIu54NzmGaTaxNk9MhBNsDeH0mSYLAwV6GzYIafpqb335mxamJMrIaIQz8c4aohKxjadsvzj7QYHoDexvAINx0Ro3n%2FistjkRMqtDJIFSpmDnKEEhquY%2FasBvKAeO1s5g7Xf%2FSG0Hh4wiQ6KNcM5j%2F%2Fp7OlecVbHPKeQ0iz46kV0SR4KiQqQ08NgMOfNh74GOqUBGCC7zbQ8oeu9J%2BdmjqDRpMNCITkqUTi4Ef79JFiOQQUTxrvfDnvK4uwvZXNjNUsQrfePUwSIi4NaIqyUJ3MdjXb7F3Pu5%2FC3Yg9IQJ3PQQjt9B1Nu7UIuctAevyldM8thk1SXJMvXu3gWWkcku9xDF1pEvCRZf3sCVRcFVItOluPaJ4S1pjOoHk5iueayShS0d7ufkkpWqMCns5DNIyCwNq%2FQ3vY&X-Amz-Signature=2cfa2409a69530a159b034f264d116dc5c6e129b3c274daceae2f210025d0fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFOEMCN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBP%2BlOSuE9YMv35HLtwpdDUg5dgGN%2FJcfrvF%2FHz5ZUZtAiEAgF9OmxYWGrsUkBRkC54mmqS1VyyJbLXkQRPR1TW5KPgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfTMl3%2Fo2QN6ncv2CrcA78BcgOc06CAJc08cX0tcwQ1oiX%2B2pNozjUQkKLDl0DNk44z8%2B%2BH4w3NToJO5bkGgA0nmc1UDwumB7BwClzYsXuskNzr668VtoOfu04cnkiaPTjhuqcrFJv5yebWl3VRrozlRThhhEDjq0XBlEh5J%2Fxmote15FiQ7%2Bn%2F3WFDZKbFE1w5Aqu3RPwCfMjeT4gakxZiA%2FOIfYJDlLN5RUQItxauzqJHAtUnfb9jtlQDXmcmVwPzpLgTCs6wRgAuUzoop7d56cvtMcKRminIvyM7hFi0j5Od5xfBoNeUrFGOFFNA0sCMpnSDJBaIj%2FeYat9N2lkCASagNn3w4JsEM1FxYTWiAeHSXVAJZDSasdOY4BaXgZk3oyRb35BzMoX8jWP4nut5R4ZT%2FEqE0fYdI%2Fhl5o1M1ZZo0sAvDIN9tkdDK%2BzOarTaquZpsC%2Bvb6oCnTdtr8BVhIu54NzmGaTaxNk9MhBNsDeH0mSYLAwV6GzYIafpqb335mxamJMrIaIQz8c4aohKxjadsvzj7QYHoDexvAINx0Ro3n%2FistjkRMqtDJIFSpmDnKEEhquY%2FasBvKAeO1s5g7Xf%2FSG0Hh4wiQ6KNcM5j%2F%2Fp7OlecVbHPKeQ0iz46kV0SR4KiQqQ08NgMOfNh74GOqUBGCC7zbQ8oeu9J%2BdmjqDRpMNCITkqUTi4Ef79JFiOQQUTxrvfDnvK4uwvZXNjNUsQrfePUwSIi4NaIqyUJ3MdjXb7F3Pu5%2FC3Yg9IQJ3PQQjt9B1Nu7UIuctAevyldM8thk1SXJMvXu3gWWkcku9xDF1pEvCRZf3sCVRcFVItOluPaJ4S1pjOoHk5iueayShS0d7ufkkpWqMCns5DNIyCwNq%2FQ3vY&X-Amz-Signature=07901d2e042319b235f0b639ba7033997be18e24392fa36d8af3085faabf8e42&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFOEMCN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBP%2BlOSuE9YMv35HLtwpdDUg5dgGN%2FJcfrvF%2FHz5ZUZtAiEAgF9OmxYWGrsUkBRkC54mmqS1VyyJbLXkQRPR1TW5KPgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfTMl3%2Fo2QN6ncv2CrcA78BcgOc06CAJc08cX0tcwQ1oiX%2B2pNozjUQkKLDl0DNk44z8%2B%2BH4w3NToJO5bkGgA0nmc1UDwumB7BwClzYsXuskNzr668VtoOfu04cnkiaPTjhuqcrFJv5yebWl3VRrozlRThhhEDjq0XBlEh5J%2Fxmote15FiQ7%2Bn%2F3WFDZKbFE1w5Aqu3RPwCfMjeT4gakxZiA%2FOIfYJDlLN5RUQItxauzqJHAtUnfb9jtlQDXmcmVwPzpLgTCs6wRgAuUzoop7d56cvtMcKRminIvyM7hFi0j5Od5xfBoNeUrFGOFFNA0sCMpnSDJBaIj%2FeYat9N2lkCASagNn3w4JsEM1FxYTWiAeHSXVAJZDSasdOY4BaXgZk3oyRb35BzMoX8jWP4nut5R4ZT%2FEqE0fYdI%2Fhl5o1M1ZZo0sAvDIN9tkdDK%2BzOarTaquZpsC%2Bvb6oCnTdtr8BVhIu54NzmGaTaxNk9MhBNsDeH0mSYLAwV6GzYIafpqb335mxamJMrIaIQz8c4aohKxjadsvzj7QYHoDexvAINx0Ro3n%2FistjkRMqtDJIFSpmDnKEEhquY%2FasBvKAeO1s5g7Xf%2FSG0Hh4wiQ6KNcM5j%2F%2Fp7OlecVbHPKeQ0iz46kV0SR4KiQqQ08NgMOfNh74GOqUBGCC7zbQ8oeu9J%2BdmjqDRpMNCITkqUTi4Ef79JFiOQQUTxrvfDnvK4uwvZXNjNUsQrfePUwSIi4NaIqyUJ3MdjXb7F3Pu5%2FC3Yg9IQJ3PQQjt9B1Nu7UIuctAevyldM8thk1SXJMvXu3gWWkcku9xDF1pEvCRZf3sCVRcFVItOluPaJ4S1pjOoHk5iueayShS0d7ufkkpWqMCns5DNIyCwNq%2FQ3vY&X-Amz-Signature=470c19ddf36066e2a0ead36e6ae793064968d8549fddf402b9c8a572716ee75c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

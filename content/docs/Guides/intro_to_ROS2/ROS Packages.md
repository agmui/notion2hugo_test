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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZVTKJA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAPlu6AAJaYtnt%2F4DBz9op0SAQX7XgzY%2FuoNY%2F8a6B66AiEAtJHvmO7C6T%2FySlbHl20OO70j1zVpcIBa8d1WJENvHPUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgg9KUo1mBO7a1wZyrcA4ewKKd5SA04dlK1XuGnWhN76cINHFRn218dJNForf%2FDj18X6rhkoEvvISTKsljy8R5Ke%2FJGT1oQW0Tp4TB8bqfA9EzAvsatYjP0siCkWesIhxCHLHJ9QbzfOWrtzPzNKljE%2B0B9g%2B%2BHllogaab28YdwJYsHWmGE4mSmgaPctch8GErdPmtOX4uTRY1yH66l%2F2jGgorN%2BMP0%2BBMgB8aPf21%2BGQcbUrhwfu01ewjSnJ9B5UnC0iE8FB%2BBIYBXZUncloPFmvCS1uUy%2BQDNHIWzqwJZDUCELbZpEDSwHxBpAmxgAsgAge4GRLVtgWThSXSIsTcZb%2FdGjpWOMf9IRMlB95NPRP0a1yuUUpV96agipx7Oo8QKq1EPDLVzpmmZDRLt8Oy2tnKji834wdFE5B6m9MJD2Iv33a75bZYsUAJrL4Ziig2G6LIn137s8ALN28XZWHNv7JBecnHvSULo1qMVLI0aQhs5N%2Ba8j7WXLK%2Fxjm5jEFnTQM65mRX1xgqDwgMk%2BUi6HF7NG8yf7niqQay5QfVe%2BR6THoFASimxwAdlnR1utnTpd%2BzR68oSzMrbXwpXkV1%2BCZYg4JWE%2FRJ6eayKNmehJ%2FClLow9Zx0Iv8CYhIVJaPPb0MS5NkN4frzfMM%2FLysAGOqUBIfKrzeJDBhN3kT3w9gvA2TjFZ7%2FaNB3OhWa8fgoQYUPTL88mNSeNEA4TRAOtD2D5owR283BHidHAntP9eOO7aWq3J95pJWkswO%2F3wW3H9c%2B7PSf4Y5u7H2heQtOX5HAwxXmDr2di%2F3zYShc1z9xJSUNN2LEqle3qv8EY57NKEflVBQOx0FPP7UkgGcLfKQsYFlHYH5H97uD9dIXbZE9ElfXkTUDP&X-Amz-Signature=a070c2e7f1acfa98360c35ee74267a95875115f89872ce7aede4b1127659aa85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZVTKJA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAPlu6AAJaYtnt%2F4DBz9op0SAQX7XgzY%2FuoNY%2F8a6B66AiEAtJHvmO7C6T%2FySlbHl20OO70j1zVpcIBa8d1WJENvHPUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgg9KUo1mBO7a1wZyrcA4ewKKd5SA04dlK1XuGnWhN76cINHFRn218dJNForf%2FDj18X6rhkoEvvISTKsljy8R5Ke%2FJGT1oQW0Tp4TB8bqfA9EzAvsatYjP0siCkWesIhxCHLHJ9QbzfOWrtzPzNKljE%2B0B9g%2B%2BHllogaab28YdwJYsHWmGE4mSmgaPctch8GErdPmtOX4uTRY1yH66l%2F2jGgorN%2BMP0%2BBMgB8aPf21%2BGQcbUrhwfu01ewjSnJ9B5UnC0iE8FB%2BBIYBXZUncloPFmvCS1uUy%2BQDNHIWzqwJZDUCELbZpEDSwHxBpAmxgAsgAge4GRLVtgWThSXSIsTcZb%2FdGjpWOMf9IRMlB95NPRP0a1yuUUpV96agipx7Oo8QKq1EPDLVzpmmZDRLt8Oy2tnKji834wdFE5B6m9MJD2Iv33a75bZYsUAJrL4Ziig2G6LIn137s8ALN28XZWHNv7JBecnHvSULo1qMVLI0aQhs5N%2Ba8j7WXLK%2Fxjm5jEFnTQM65mRX1xgqDwgMk%2BUi6HF7NG8yf7niqQay5QfVe%2BR6THoFASimxwAdlnR1utnTpd%2BzR68oSzMrbXwpXkV1%2BCZYg4JWE%2FRJ6eayKNmehJ%2FClLow9Zx0Iv8CYhIVJaPPb0MS5NkN4frzfMM%2FLysAGOqUBIfKrzeJDBhN3kT3w9gvA2TjFZ7%2FaNB3OhWa8fgoQYUPTL88mNSeNEA4TRAOtD2D5owR283BHidHAntP9eOO7aWq3J95pJWkswO%2F3wW3H9c%2B7PSf4Y5u7H2heQtOX5HAwxXmDr2di%2F3zYShc1z9xJSUNN2LEqle3qv8EY57NKEflVBQOx0FPP7UkgGcLfKQsYFlHYH5H97uD9dIXbZE9ElfXkTUDP&X-Amz-Signature=cc154ccd10b758f803b1b17867567851ba35c9dbcd1c800a97bdfd588787ecc5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZVTKJA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAPlu6AAJaYtnt%2F4DBz9op0SAQX7XgzY%2FuoNY%2F8a6B66AiEAtJHvmO7C6T%2FySlbHl20OO70j1zVpcIBa8d1WJENvHPUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgg9KUo1mBO7a1wZyrcA4ewKKd5SA04dlK1XuGnWhN76cINHFRn218dJNForf%2FDj18X6rhkoEvvISTKsljy8R5Ke%2FJGT1oQW0Tp4TB8bqfA9EzAvsatYjP0siCkWesIhxCHLHJ9QbzfOWrtzPzNKljE%2B0B9g%2B%2BHllogaab28YdwJYsHWmGE4mSmgaPctch8GErdPmtOX4uTRY1yH66l%2F2jGgorN%2BMP0%2BBMgB8aPf21%2BGQcbUrhwfu01ewjSnJ9B5UnC0iE8FB%2BBIYBXZUncloPFmvCS1uUy%2BQDNHIWzqwJZDUCELbZpEDSwHxBpAmxgAsgAge4GRLVtgWThSXSIsTcZb%2FdGjpWOMf9IRMlB95NPRP0a1yuUUpV96agipx7Oo8QKq1EPDLVzpmmZDRLt8Oy2tnKji834wdFE5B6m9MJD2Iv33a75bZYsUAJrL4Ziig2G6LIn137s8ALN28XZWHNv7JBecnHvSULo1qMVLI0aQhs5N%2Ba8j7WXLK%2Fxjm5jEFnTQM65mRX1xgqDwgMk%2BUi6HF7NG8yf7niqQay5QfVe%2BR6THoFASimxwAdlnR1utnTpd%2BzR68oSzMrbXwpXkV1%2BCZYg4JWE%2FRJ6eayKNmehJ%2FClLow9Zx0Iv8CYhIVJaPPb0MS5NkN4frzfMM%2FLysAGOqUBIfKrzeJDBhN3kT3w9gvA2TjFZ7%2FaNB3OhWa8fgoQYUPTL88mNSeNEA4TRAOtD2D5owR283BHidHAntP9eOO7aWq3J95pJWkswO%2F3wW3H9c%2B7PSf4Y5u7H2heQtOX5HAwxXmDr2di%2F3zYShc1z9xJSUNN2LEqle3qv8EY57NKEflVBQOx0FPP7UkgGcLfKQsYFlHYH5H97uD9dIXbZE9ElfXkTUDP&X-Amz-Signature=7290d8bc1d761b582e960a9756b4b313d7888cf3e576d7330c0d566d64a1329a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZVTKJA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAPlu6AAJaYtnt%2F4DBz9op0SAQX7XgzY%2FuoNY%2F8a6B66AiEAtJHvmO7C6T%2FySlbHl20OO70j1zVpcIBa8d1WJENvHPUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgg9KUo1mBO7a1wZyrcA4ewKKd5SA04dlK1XuGnWhN76cINHFRn218dJNForf%2FDj18X6rhkoEvvISTKsljy8R5Ke%2FJGT1oQW0Tp4TB8bqfA9EzAvsatYjP0siCkWesIhxCHLHJ9QbzfOWrtzPzNKljE%2B0B9g%2B%2BHllogaab28YdwJYsHWmGE4mSmgaPctch8GErdPmtOX4uTRY1yH66l%2F2jGgorN%2BMP0%2BBMgB8aPf21%2BGQcbUrhwfu01ewjSnJ9B5UnC0iE8FB%2BBIYBXZUncloPFmvCS1uUy%2BQDNHIWzqwJZDUCELbZpEDSwHxBpAmxgAsgAge4GRLVtgWThSXSIsTcZb%2FdGjpWOMf9IRMlB95NPRP0a1yuUUpV96agipx7Oo8QKq1EPDLVzpmmZDRLt8Oy2tnKji834wdFE5B6m9MJD2Iv33a75bZYsUAJrL4Ziig2G6LIn137s8ALN28XZWHNv7JBecnHvSULo1qMVLI0aQhs5N%2Ba8j7WXLK%2Fxjm5jEFnTQM65mRX1xgqDwgMk%2BUi6HF7NG8yf7niqQay5QfVe%2BR6THoFASimxwAdlnR1utnTpd%2BzR68oSzMrbXwpXkV1%2BCZYg4JWE%2FRJ6eayKNmehJ%2FClLow9Zx0Iv8CYhIVJaPPb0MS5NkN4frzfMM%2FLysAGOqUBIfKrzeJDBhN3kT3w9gvA2TjFZ7%2FaNB3OhWa8fgoQYUPTL88mNSeNEA4TRAOtD2D5owR283BHidHAntP9eOO7aWq3J95pJWkswO%2F3wW3H9c%2B7PSf4Y5u7H2heQtOX5HAwxXmDr2di%2F3zYShc1z9xJSUNN2LEqle3qv8EY57NKEflVBQOx0FPP7UkgGcLfKQsYFlHYH5H97uD9dIXbZE9ElfXkTUDP&X-Amz-Signature=d42229066c116d0ecdd7fc0903d8fdff90be20d83aac61a0af41fc0a7c691e92&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZVTKJA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAPlu6AAJaYtnt%2F4DBz9op0SAQX7XgzY%2FuoNY%2F8a6B66AiEAtJHvmO7C6T%2FySlbHl20OO70j1zVpcIBa8d1WJENvHPUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgg9KUo1mBO7a1wZyrcA4ewKKd5SA04dlK1XuGnWhN76cINHFRn218dJNForf%2FDj18X6rhkoEvvISTKsljy8R5Ke%2FJGT1oQW0Tp4TB8bqfA9EzAvsatYjP0siCkWesIhxCHLHJ9QbzfOWrtzPzNKljE%2B0B9g%2B%2BHllogaab28YdwJYsHWmGE4mSmgaPctch8GErdPmtOX4uTRY1yH66l%2F2jGgorN%2BMP0%2BBMgB8aPf21%2BGQcbUrhwfu01ewjSnJ9B5UnC0iE8FB%2BBIYBXZUncloPFmvCS1uUy%2BQDNHIWzqwJZDUCELbZpEDSwHxBpAmxgAsgAge4GRLVtgWThSXSIsTcZb%2FdGjpWOMf9IRMlB95NPRP0a1yuUUpV96agipx7Oo8QKq1EPDLVzpmmZDRLt8Oy2tnKji834wdFE5B6m9MJD2Iv33a75bZYsUAJrL4Ziig2G6LIn137s8ALN28XZWHNv7JBecnHvSULo1qMVLI0aQhs5N%2Ba8j7WXLK%2Fxjm5jEFnTQM65mRX1xgqDwgMk%2BUi6HF7NG8yf7niqQay5QfVe%2BR6THoFASimxwAdlnR1utnTpd%2BzR68oSzMrbXwpXkV1%2BCZYg4JWE%2FRJ6eayKNmehJ%2FClLow9Zx0Iv8CYhIVJaPPb0MS5NkN4frzfMM%2FLysAGOqUBIfKrzeJDBhN3kT3w9gvA2TjFZ7%2FaNB3OhWa8fgoQYUPTL88mNSeNEA4TRAOtD2D5owR283BHidHAntP9eOO7aWq3J95pJWkswO%2F3wW3H9c%2B7PSf4Y5u7H2heQtOX5HAwxXmDr2di%2F3zYShc1z9xJSUNN2LEqle3qv8EY57NKEflVBQOx0FPP7UkgGcLfKQsYFlHYH5H97uD9dIXbZE9ElfXkTUDP&X-Amz-Signature=8cb13e71c15335411feff93ca6c895ec5c51dc6d5473009cac22f1bb63f81bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZVTKJA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAPlu6AAJaYtnt%2F4DBz9op0SAQX7XgzY%2FuoNY%2F8a6B66AiEAtJHvmO7C6T%2FySlbHl20OO70j1zVpcIBa8d1WJENvHPUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgg9KUo1mBO7a1wZyrcA4ewKKd5SA04dlK1XuGnWhN76cINHFRn218dJNForf%2FDj18X6rhkoEvvISTKsljy8R5Ke%2FJGT1oQW0Tp4TB8bqfA9EzAvsatYjP0siCkWesIhxCHLHJ9QbzfOWrtzPzNKljE%2B0B9g%2B%2BHllogaab28YdwJYsHWmGE4mSmgaPctch8GErdPmtOX4uTRY1yH66l%2F2jGgorN%2BMP0%2BBMgB8aPf21%2BGQcbUrhwfu01ewjSnJ9B5UnC0iE8FB%2BBIYBXZUncloPFmvCS1uUy%2BQDNHIWzqwJZDUCELbZpEDSwHxBpAmxgAsgAge4GRLVtgWThSXSIsTcZb%2FdGjpWOMf9IRMlB95NPRP0a1yuUUpV96agipx7Oo8QKq1EPDLVzpmmZDRLt8Oy2tnKji834wdFE5B6m9MJD2Iv33a75bZYsUAJrL4Ziig2G6LIn137s8ALN28XZWHNv7JBecnHvSULo1qMVLI0aQhs5N%2Ba8j7WXLK%2Fxjm5jEFnTQM65mRX1xgqDwgMk%2BUi6HF7NG8yf7niqQay5QfVe%2BR6THoFASimxwAdlnR1utnTpd%2BzR68oSzMrbXwpXkV1%2BCZYg4JWE%2FRJ6eayKNmehJ%2FClLow9Zx0Iv8CYhIVJaPPb0MS5NkN4frzfMM%2FLysAGOqUBIfKrzeJDBhN3kT3w9gvA2TjFZ7%2FaNB3OhWa8fgoQYUPTL88mNSeNEA4TRAOtD2D5owR283BHidHAntP9eOO7aWq3J95pJWkswO%2F3wW3H9c%2B7PSf4Y5u7H2heQtOX5HAwxXmDr2di%2F3zYShc1z9xJSUNN2LEqle3qv8EY57NKEflVBQOx0FPP7UkgGcLfKQsYFlHYH5H97uD9dIXbZE9ElfXkTUDP&X-Amz-Signature=18c68633252413eb31bcc3f29974e05d64eda2bc1d8d94027f8957067f3e507c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZVTKJA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAPlu6AAJaYtnt%2F4DBz9op0SAQX7XgzY%2FuoNY%2F8a6B66AiEAtJHvmO7C6T%2FySlbHl20OO70j1zVpcIBa8d1WJENvHPUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgg9KUo1mBO7a1wZyrcA4ewKKd5SA04dlK1XuGnWhN76cINHFRn218dJNForf%2FDj18X6rhkoEvvISTKsljy8R5Ke%2FJGT1oQW0Tp4TB8bqfA9EzAvsatYjP0siCkWesIhxCHLHJ9QbzfOWrtzPzNKljE%2B0B9g%2B%2BHllogaab28YdwJYsHWmGE4mSmgaPctch8GErdPmtOX4uTRY1yH66l%2F2jGgorN%2BMP0%2BBMgB8aPf21%2BGQcbUrhwfu01ewjSnJ9B5UnC0iE8FB%2BBIYBXZUncloPFmvCS1uUy%2BQDNHIWzqwJZDUCELbZpEDSwHxBpAmxgAsgAge4GRLVtgWThSXSIsTcZb%2FdGjpWOMf9IRMlB95NPRP0a1yuUUpV96agipx7Oo8QKq1EPDLVzpmmZDRLt8Oy2tnKji834wdFE5B6m9MJD2Iv33a75bZYsUAJrL4Ziig2G6LIn137s8ALN28XZWHNv7JBecnHvSULo1qMVLI0aQhs5N%2Ba8j7WXLK%2Fxjm5jEFnTQM65mRX1xgqDwgMk%2BUi6HF7NG8yf7niqQay5QfVe%2BR6THoFASimxwAdlnR1utnTpd%2BzR68oSzMrbXwpXkV1%2BCZYg4JWE%2FRJ6eayKNmehJ%2FClLow9Zx0Iv8CYhIVJaPPb0MS5NkN4frzfMM%2FLysAGOqUBIfKrzeJDBhN3kT3w9gvA2TjFZ7%2FaNB3OhWa8fgoQYUPTL88mNSeNEA4TRAOtD2D5owR283BHidHAntP9eOO7aWq3J95pJWkswO%2F3wW3H9c%2B7PSf4Y5u7H2heQtOX5HAwxXmDr2di%2F3zYShc1z9xJSUNN2LEqle3qv8EY57NKEflVBQOx0FPP7UkgGcLfKQsYFlHYH5H97uD9dIXbZE9ElfXkTUDP&X-Amz-Signature=2a2fd8d2e3b43b618440e179746f940c063fbc06240a4b619394ea258e9e3e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

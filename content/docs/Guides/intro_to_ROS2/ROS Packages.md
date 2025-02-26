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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUGMVSB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFbeQ3mKKJ4HYSYEDyb2V6Rcbf1WFMy%2BHPv5PWo7KwS4AiEAy2uZ2nmZlZJ7rfHNqlWXBxV9ejb7blbLv5XCHKDobCcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD0%2FAq057r662cmqvSrcA5ZJY9FGsiHTpy8Ontpuw%2Brcum8Cjgal7g%2FHhZCQcj2uC7aarSkt6AdFrTxcbGBtVAHyIVNpoZ14LXuM6yP315YdQiImsLN8t%2F3i6XPP0noRCeFrPv84IJ5lB6S8assw%2F4E920vxl5HxGUDCtFhk8X4H%2FQRXUkb3gPqx8w5LvhhemK%2B5nj4rHt9UKoAmv56ZUWmW46bpu%2FOo5cd8rUqKKQv%2B3nqzPNp549680%2BeU1oqPjFAhwiT%2FYmxbQ1LASCvujBYs1o5BIpY0l1lDRrNOFA5rxllcT3OWbN%2FlKmJOjrg4D1npAN9sqY8V9S8%2B4qhZXXDw4hQXAz%2FyawRfEN1K2k3YFVntb0ZIa85uBecLhsjqgCu%2BfI6KDbQmuwHIC72f1D%2F4e51EOdb0a8%2FAPiall0grADugZ9qYCOzNlvSmHhSL6TBb675EyGbh4nGA6khG7BizdjMrZWDN9XIRgE6iO%2B8AXhdYX7ZEhZgj%2BcFOVWDgpSI6pYNeNk0pByBtl5aI45YQ%2FCMY9oBCkndLuIecMKWiX7KJumDcrkodrL9tr7TdozQRgqTZcvXVWsLGfXys%2BN3jCMT4rgBc%2Ff3%2FDX0pwM31T6f4u8V1GWmztBAz4%2BNRk%2BpWegJsxj660%2FbOMNGA%2B70GOqUBUivsOwqVXib%2B5K9VIf3PW9g3RJiRyxYcjMWs5liOJMvaRlkYbbN1aGdX%2Bre5Crz%2FGfbIBWXTzHeGxV31LSPsXZTS9ARsKeAe8GFgMnU7QlXY6KG8NrNLXQptZLdSypAEUzAS%2FwYJsYDQUeQb%2FdwBljHCeOBZFOOam9rIhxUwXC6t7DiChI%2Fv2E2XlRAtD%2BrSjNNFweuhFCFlP%2BjXcp%2BfARqLhR4M&X-Amz-Signature=b9989e95f856a01b32fa54b056bfd54123b613006c4f1b20ce73faf0423e8dda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUGMVSB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFbeQ3mKKJ4HYSYEDyb2V6Rcbf1WFMy%2BHPv5PWo7KwS4AiEAy2uZ2nmZlZJ7rfHNqlWXBxV9ejb7blbLv5XCHKDobCcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD0%2FAq057r662cmqvSrcA5ZJY9FGsiHTpy8Ontpuw%2Brcum8Cjgal7g%2FHhZCQcj2uC7aarSkt6AdFrTxcbGBtVAHyIVNpoZ14LXuM6yP315YdQiImsLN8t%2F3i6XPP0noRCeFrPv84IJ5lB6S8assw%2F4E920vxl5HxGUDCtFhk8X4H%2FQRXUkb3gPqx8w5LvhhemK%2B5nj4rHt9UKoAmv56ZUWmW46bpu%2FOo5cd8rUqKKQv%2B3nqzPNp549680%2BeU1oqPjFAhwiT%2FYmxbQ1LASCvujBYs1o5BIpY0l1lDRrNOFA5rxllcT3OWbN%2FlKmJOjrg4D1npAN9sqY8V9S8%2B4qhZXXDw4hQXAz%2FyawRfEN1K2k3YFVntb0ZIa85uBecLhsjqgCu%2BfI6KDbQmuwHIC72f1D%2F4e51EOdb0a8%2FAPiall0grADugZ9qYCOzNlvSmHhSL6TBb675EyGbh4nGA6khG7BizdjMrZWDN9XIRgE6iO%2B8AXhdYX7ZEhZgj%2BcFOVWDgpSI6pYNeNk0pByBtl5aI45YQ%2FCMY9oBCkndLuIecMKWiX7KJumDcrkodrL9tr7TdozQRgqTZcvXVWsLGfXys%2BN3jCMT4rgBc%2Ff3%2FDX0pwM31T6f4u8V1GWmztBAz4%2BNRk%2BpWegJsxj660%2FbOMNGA%2B70GOqUBUivsOwqVXib%2B5K9VIf3PW9g3RJiRyxYcjMWs5liOJMvaRlkYbbN1aGdX%2Bre5Crz%2FGfbIBWXTzHeGxV31LSPsXZTS9ARsKeAe8GFgMnU7QlXY6KG8NrNLXQptZLdSypAEUzAS%2FwYJsYDQUeQb%2FdwBljHCeOBZFOOam9rIhxUwXC6t7DiChI%2Fv2E2XlRAtD%2BrSjNNFweuhFCFlP%2BjXcp%2BfARqLhR4M&X-Amz-Signature=2f797f536e452dedfad48b502974053325b6f8f0ff0b0640c046fbcaba4685c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUGMVSB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFbeQ3mKKJ4HYSYEDyb2V6Rcbf1WFMy%2BHPv5PWo7KwS4AiEAy2uZ2nmZlZJ7rfHNqlWXBxV9ejb7blbLv5XCHKDobCcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD0%2FAq057r662cmqvSrcA5ZJY9FGsiHTpy8Ontpuw%2Brcum8Cjgal7g%2FHhZCQcj2uC7aarSkt6AdFrTxcbGBtVAHyIVNpoZ14LXuM6yP315YdQiImsLN8t%2F3i6XPP0noRCeFrPv84IJ5lB6S8assw%2F4E920vxl5HxGUDCtFhk8X4H%2FQRXUkb3gPqx8w5LvhhemK%2B5nj4rHt9UKoAmv56ZUWmW46bpu%2FOo5cd8rUqKKQv%2B3nqzPNp549680%2BeU1oqPjFAhwiT%2FYmxbQ1LASCvujBYs1o5BIpY0l1lDRrNOFA5rxllcT3OWbN%2FlKmJOjrg4D1npAN9sqY8V9S8%2B4qhZXXDw4hQXAz%2FyawRfEN1K2k3YFVntb0ZIa85uBecLhsjqgCu%2BfI6KDbQmuwHIC72f1D%2F4e51EOdb0a8%2FAPiall0grADugZ9qYCOzNlvSmHhSL6TBb675EyGbh4nGA6khG7BizdjMrZWDN9XIRgE6iO%2B8AXhdYX7ZEhZgj%2BcFOVWDgpSI6pYNeNk0pByBtl5aI45YQ%2FCMY9oBCkndLuIecMKWiX7KJumDcrkodrL9tr7TdozQRgqTZcvXVWsLGfXys%2BN3jCMT4rgBc%2Ff3%2FDX0pwM31T6f4u8V1GWmztBAz4%2BNRk%2BpWegJsxj660%2FbOMNGA%2B70GOqUBUivsOwqVXib%2B5K9VIf3PW9g3RJiRyxYcjMWs5liOJMvaRlkYbbN1aGdX%2Bre5Crz%2FGfbIBWXTzHeGxV31LSPsXZTS9ARsKeAe8GFgMnU7QlXY6KG8NrNLXQptZLdSypAEUzAS%2FwYJsYDQUeQb%2FdwBljHCeOBZFOOam9rIhxUwXC6t7DiChI%2Fv2E2XlRAtD%2BrSjNNFweuhFCFlP%2BjXcp%2BfARqLhR4M&X-Amz-Signature=9b7cea73cd8a5e4ebb3578572f4615e2e7b63960e412d274df2f66f50a650707&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUGMVSB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFbeQ3mKKJ4HYSYEDyb2V6Rcbf1WFMy%2BHPv5PWo7KwS4AiEAy2uZ2nmZlZJ7rfHNqlWXBxV9ejb7blbLv5XCHKDobCcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD0%2FAq057r662cmqvSrcA5ZJY9FGsiHTpy8Ontpuw%2Brcum8Cjgal7g%2FHhZCQcj2uC7aarSkt6AdFrTxcbGBtVAHyIVNpoZ14LXuM6yP315YdQiImsLN8t%2F3i6XPP0noRCeFrPv84IJ5lB6S8assw%2F4E920vxl5HxGUDCtFhk8X4H%2FQRXUkb3gPqx8w5LvhhemK%2B5nj4rHt9UKoAmv56ZUWmW46bpu%2FOo5cd8rUqKKQv%2B3nqzPNp549680%2BeU1oqPjFAhwiT%2FYmxbQ1LASCvujBYs1o5BIpY0l1lDRrNOFA5rxllcT3OWbN%2FlKmJOjrg4D1npAN9sqY8V9S8%2B4qhZXXDw4hQXAz%2FyawRfEN1K2k3YFVntb0ZIa85uBecLhsjqgCu%2BfI6KDbQmuwHIC72f1D%2F4e51EOdb0a8%2FAPiall0grADugZ9qYCOzNlvSmHhSL6TBb675EyGbh4nGA6khG7BizdjMrZWDN9XIRgE6iO%2B8AXhdYX7ZEhZgj%2BcFOVWDgpSI6pYNeNk0pByBtl5aI45YQ%2FCMY9oBCkndLuIecMKWiX7KJumDcrkodrL9tr7TdozQRgqTZcvXVWsLGfXys%2BN3jCMT4rgBc%2Ff3%2FDX0pwM31T6f4u8V1GWmztBAz4%2BNRk%2BpWegJsxj660%2FbOMNGA%2B70GOqUBUivsOwqVXib%2B5K9VIf3PW9g3RJiRyxYcjMWs5liOJMvaRlkYbbN1aGdX%2Bre5Crz%2FGfbIBWXTzHeGxV31LSPsXZTS9ARsKeAe8GFgMnU7QlXY6KG8NrNLXQptZLdSypAEUzAS%2FwYJsYDQUeQb%2FdwBljHCeOBZFOOam9rIhxUwXC6t7DiChI%2Fv2E2XlRAtD%2BrSjNNFweuhFCFlP%2BjXcp%2BfARqLhR4M&X-Amz-Signature=bfbd9455a505ab3df0ee40b51ce57bb24502c9b01d2e3406c42ff71fec9dc8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUGMVSB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFbeQ3mKKJ4HYSYEDyb2V6Rcbf1WFMy%2BHPv5PWo7KwS4AiEAy2uZ2nmZlZJ7rfHNqlWXBxV9ejb7blbLv5XCHKDobCcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD0%2FAq057r662cmqvSrcA5ZJY9FGsiHTpy8Ontpuw%2Brcum8Cjgal7g%2FHhZCQcj2uC7aarSkt6AdFrTxcbGBtVAHyIVNpoZ14LXuM6yP315YdQiImsLN8t%2F3i6XPP0noRCeFrPv84IJ5lB6S8assw%2F4E920vxl5HxGUDCtFhk8X4H%2FQRXUkb3gPqx8w5LvhhemK%2B5nj4rHt9UKoAmv56ZUWmW46bpu%2FOo5cd8rUqKKQv%2B3nqzPNp549680%2BeU1oqPjFAhwiT%2FYmxbQ1LASCvujBYs1o5BIpY0l1lDRrNOFA5rxllcT3OWbN%2FlKmJOjrg4D1npAN9sqY8V9S8%2B4qhZXXDw4hQXAz%2FyawRfEN1K2k3YFVntb0ZIa85uBecLhsjqgCu%2BfI6KDbQmuwHIC72f1D%2F4e51EOdb0a8%2FAPiall0grADugZ9qYCOzNlvSmHhSL6TBb675EyGbh4nGA6khG7BizdjMrZWDN9XIRgE6iO%2B8AXhdYX7ZEhZgj%2BcFOVWDgpSI6pYNeNk0pByBtl5aI45YQ%2FCMY9oBCkndLuIecMKWiX7KJumDcrkodrL9tr7TdozQRgqTZcvXVWsLGfXys%2BN3jCMT4rgBc%2Ff3%2FDX0pwM31T6f4u8V1GWmztBAz4%2BNRk%2BpWegJsxj660%2FbOMNGA%2B70GOqUBUivsOwqVXib%2B5K9VIf3PW9g3RJiRyxYcjMWs5liOJMvaRlkYbbN1aGdX%2Bre5Crz%2FGfbIBWXTzHeGxV31LSPsXZTS9ARsKeAe8GFgMnU7QlXY6KG8NrNLXQptZLdSypAEUzAS%2FwYJsYDQUeQb%2FdwBljHCeOBZFOOam9rIhxUwXC6t7DiChI%2Fv2E2XlRAtD%2BrSjNNFweuhFCFlP%2BjXcp%2BfARqLhR4M&X-Amz-Signature=04e7b5627ce335260868e54720c9ed22bc66d4f8253fae8e671c6a32ab3a328e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUGMVSB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFbeQ3mKKJ4HYSYEDyb2V6Rcbf1WFMy%2BHPv5PWo7KwS4AiEAy2uZ2nmZlZJ7rfHNqlWXBxV9ejb7blbLv5XCHKDobCcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD0%2FAq057r662cmqvSrcA5ZJY9FGsiHTpy8Ontpuw%2Brcum8Cjgal7g%2FHhZCQcj2uC7aarSkt6AdFrTxcbGBtVAHyIVNpoZ14LXuM6yP315YdQiImsLN8t%2F3i6XPP0noRCeFrPv84IJ5lB6S8assw%2F4E920vxl5HxGUDCtFhk8X4H%2FQRXUkb3gPqx8w5LvhhemK%2B5nj4rHt9UKoAmv56ZUWmW46bpu%2FOo5cd8rUqKKQv%2B3nqzPNp549680%2BeU1oqPjFAhwiT%2FYmxbQ1LASCvujBYs1o5BIpY0l1lDRrNOFA5rxllcT3OWbN%2FlKmJOjrg4D1npAN9sqY8V9S8%2B4qhZXXDw4hQXAz%2FyawRfEN1K2k3YFVntb0ZIa85uBecLhsjqgCu%2BfI6KDbQmuwHIC72f1D%2F4e51EOdb0a8%2FAPiall0grADugZ9qYCOzNlvSmHhSL6TBb675EyGbh4nGA6khG7BizdjMrZWDN9XIRgE6iO%2B8AXhdYX7ZEhZgj%2BcFOVWDgpSI6pYNeNk0pByBtl5aI45YQ%2FCMY9oBCkndLuIecMKWiX7KJumDcrkodrL9tr7TdozQRgqTZcvXVWsLGfXys%2BN3jCMT4rgBc%2Ff3%2FDX0pwM31T6f4u8V1GWmztBAz4%2BNRk%2BpWegJsxj660%2FbOMNGA%2B70GOqUBUivsOwqVXib%2B5K9VIf3PW9g3RJiRyxYcjMWs5liOJMvaRlkYbbN1aGdX%2Bre5Crz%2FGfbIBWXTzHeGxV31LSPsXZTS9ARsKeAe8GFgMnU7QlXY6KG8NrNLXQptZLdSypAEUzAS%2FwYJsYDQUeQb%2FdwBljHCeOBZFOOam9rIhxUwXC6t7DiChI%2Fv2E2XlRAtD%2BrSjNNFweuhFCFlP%2BjXcp%2BfARqLhR4M&X-Amz-Signature=453872e1690103592e15367717fe7aa40083aaac86a955b27da9361ac64265ad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUGMVSB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFbeQ3mKKJ4HYSYEDyb2V6Rcbf1WFMy%2BHPv5PWo7KwS4AiEAy2uZ2nmZlZJ7rfHNqlWXBxV9ejb7blbLv5XCHKDobCcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD0%2FAq057r662cmqvSrcA5ZJY9FGsiHTpy8Ontpuw%2Brcum8Cjgal7g%2FHhZCQcj2uC7aarSkt6AdFrTxcbGBtVAHyIVNpoZ14LXuM6yP315YdQiImsLN8t%2F3i6XPP0noRCeFrPv84IJ5lB6S8assw%2F4E920vxl5HxGUDCtFhk8X4H%2FQRXUkb3gPqx8w5LvhhemK%2B5nj4rHt9UKoAmv56ZUWmW46bpu%2FOo5cd8rUqKKQv%2B3nqzPNp549680%2BeU1oqPjFAhwiT%2FYmxbQ1LASCvujBYs1o5BIpY0l1lDRrNOFA5rxllcT3OWbN%2FlKmJOjrg4D1npAN9sqY8V9S8%2B4qhZXXDw4hQXAz%2FyawRfEN1K2k3YFVntb0ZIa85uBecLhsjqgCu%2BfI6KDbQmuwHIC72f1D%2F4e51EOdb0a8%2FAPiall0grADugZ9qYCOzNlvSmHhSL6TBb675EyGbh4nGA6khG7BizdjMrZWDN9XIRgE6iO%2B8AXhdYX7ZEhZgj%2BcFOVWDgpSI6pYNeNk0pByBtl5aI45YQ%2FCMY9oBCkndLuIecMKWiX7KJumDcrkodrL9tr7TdozQRgqTZcvXVWsLGfXys%2BN3jCMT4rgBc%2Ff3%2FDX0pwM31T6f4u8V1GWmztBAz4%2BNRk%2BpWegJsxj660%2FbOMNGA%2B70GOqUBUivsOwqVXib%2B5K9VIf3PW9g3RJiRyxYcjMWs5liOJMvaRlkYbbN1aGdX%2Bre5Crz%2FGfbIBWXTzHeGxV31LSPsXZTS9ARsKeAe8GFgMnU7QlXY6KG8NrNLXQptZLdSypAEUzAS%2FwYJsYDQUeQb%2FdwBljHCeOBZFOOam9rIhxUwXC6t7DiChI%2Fv2E2XlRAtD%2BrSjNNFweuhFCFlP%2BjXcp%2BfARqLhR4M&X-Amz-Signature=5d3c212ed7c1d96cfc24cc16b907d0210664dd333a210c625a4e008af77c2b29&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

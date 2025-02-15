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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5M4SBU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFu%2B2jVxtyNH24gjIvyP9gimy5%2Fkc%2FG0WeY69aBOlipzAiEAy8oaOMUuKX67WjigOo11YXW8RnolNr0Uxijbdn2TA6oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDL00F9fABUE3w8D7pCrcAzCY%2B0cX63j9mLKDD6uV%2BGiGNn%2Be0XguQ106ybwCPdsOddk0a38TWDaKHsHm5Ow7mAlXrWn%2B8Q73LdYohW38D4hvxn%2FVbxui2AjoXKLLvqIpYVUGsVrxpn0Nst8RvTfSGzw22PSJlDrYiVhSRI3o7SfU%2FSL7VFjgubZZg%2FmzGA71PRhg%2FPTpDXVjIV3CYrNUfGnpOl9Phjkdzy8uz1Sh5iBzGsu8R2oJUgdAT0xf7p35Gj9NejA16sJI7Nv5YtJuosagWAEUcF2JCKlvd0NOIWMlA2KNpJoUpsckmoW8tsHfrt2WFo9eLbflaJzf6pymC5l7cS4zs9llf1s5JhvFhqgawyz0hGTwIQcaLV5gvX9CfZqLXppr28FEl%2BxOid6Nvotme7FROeVq%2FdX2Vl%2BHWQVem6HDp5KKVb7fUcpAWCgBkuVDgETb6W9xwf8DTViGlvojSB5LbgpqtmHJ8xxqHo7H36O%2FANkKbxg8pxLpq1mP2AOlgjFF5SFz2%2F8q0eePk%2BY1kEicBaEys04BhBuxnUukmSxfkciyClotSeSkvjUws6JewaXcptpBim8mQtvptwhaxOtSOyjLYaUI%2F7eetc1y0qQhsrqC%2FJTlu272Q2hqfuZTZepdIx4e0GPHMNO%2Bwb0GOqUBq5IPZmy44vXhZyzNapYOglazvc5rDh%2FQ%2Bi8evXXAIBlw8Hr4fJNETzhaYlkfLWbXmeNQhfB1pfd2mvJN1cf%2FTFb7dd69zZmmNl0hWKEMUr9ZY79neviYh4ZyBl9WEkqY1sWkbJr2SZU5x0XMRIJwkvIcHKx1hZAn8KEy8%2FOLlHug60lJ6Dcx4VRyEumPbutjLi%2BEOhV9Z3xgWjxubfuL3m1T26k6&X-Amz-Signature=ddc0292dc9a860378e5d949b4f3b3ae30849b0db32cf99fa1297276830c0e7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5M4SBU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFu%2B2jVxtyNH24gjIvyP9gimy5%2Fkc%2FG0WeY69aBOlipzAiEAy8oaOMUuKX67WjigOo11YXW8RnolNr0Uxijbdn2TA6oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDL00F9fABUE3w8D7pCrcAzCY%2B0cX63j9mLKDD6uV%2BGiGNn%2Be0XguQ106ybwCPdsOddk0a38TWDaKHsHm5Ow7mAlXrWn%2B8Q73LdYohW38D4hvxn%2FVbxui2AjoXKLLvqIpYVUGsVrxpn0Nst8RvTfSGzw22PSJlDrYiVhSRI3o7SfU%2FSL7VFjgubZZg%2FmzGA71PRhg%2FPTpDXVjIV3CYrNUfGnpOl9Phjkdzy8uz1Sh5iBzGsu8R2oJUgdAT0xf7p35Gj9NejA16sJI7Nv5YtJuosagWAEUcF2JCKlvd0NOIWMlA2KNpJoUpsckmoW8tsHfrt2WFo9eLbflaJzf6pymC5l7cS4zs9llf1s5JhvFhqgawyz0hGTwIQcaLV5gvX9CfZqLXppr28FEl%2BxOid6Nvotme7FROeVq%2FdX2Vl%2BHWQVem6HDp5KKVb7fUcpAWCgBkuVDgETb6W9xwf8DTViGlvojSB5LbgpqtmHJ8xxqHo7H36O%2FANkKbxg8pxLpq1mP2AOlgjFF5SFz2%2F8q0eePk%2BY1kEicBaEys04BhBuxnUukmSxfkciyClotSeSkvjUws6JewaXcptpBim8mQtvptwhaxOtSOyjLYaUI%2F7eetc1y0qQhsrqC%2FJTlu272Q2hqfuZTZepdIx4e0GPHMNO%2Bwb0GOqUBq5IPZmy44vXhZyzNapYOglazvc5rDh%2FQ%2Bi8evXXAIBlw8Hr4fJNETzhaYlkfLWbXmeNQhfB1pfd2mvJN1cf%2FTFb7dd69zZmmNl0hWKEMUr9ZY79neviYh4ZyBl9WEkqY1sWkbJr2SZU5x0XMRIJwkvIcHKx1hZAn8KEy8%2FOLlHug60lJ6Dcx4VRyEumPbutjLi%2BEOhV9Z3xgWjxubfuL3m1T26k6&X-Amz-Signature=fe15f43b3478d9881bfa58157e59dc9723d903cb83edd52264e07c37e3a08f74&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5M4SBU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFu%2B2jVxtyNH24gjIvyP9gimy5%2Fkc%2FG0WeY69aBOlipzAiEAy8oaOMUuKX67WjigOo11YXW8RnolNr0Uxijbdn2TA6oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDL00F9fABUE3w8D7pCrcAzCY%2B0cX63j9mLKDD6uV%2BGiGNn%2Be0XguQ106ybwCPdsOddk0a38TWDaKHsHm5Ow7mAlXrWn%2B8Q73LdYohW38D4hvxn%2FVbxui2AjoXKLLvqIpYVUGsVrxpn0Nst8RvTfSGzw22PSJlDrYiVhSRI3o7SfU%2FSL7VFjgubZZg%2FmzGA71PRhg%2FPTpDXVjIV3CYrNUfGnpOl9Phjkdzy8uz1Sh5iBzGsu8R2oJUgdAT0xf7p35Gj9NejA16sJI7Nv5YtJuosagWAEUcF2JCKlvd0NOIWMlA2KNpJoUpsckmoW8tsHfrt2WFo9eLbflaJzf6pymC5l7cS4zs9llf1s5JhvFhqgawyz0hGTwIQcaLV5gvX9CfZqLXppr28FEl%2BxOid6Nvotme7FROeVq%2FdX2Vl%2BHWQVem6HDp5KKVb7fUcpAWCgBkuVDgETb6W9xwf8DTViGlvojSB5LbgpqtmHJ8xxqHo7H36O%2FANkKbxg8pxLpq1mP2AOlgjFF5SFz2%2F8q0eePk%2BY1kEicBaEys04BhBuxnUukmSxfkciyClotSeSkvjUws6JewaXcptpBim8mQtvptwhaxOtSOyjLYaUI%2F7eetc1y0qQhsrqC%2FJTlu272Q2hqfuZTZepdIx4e0GPHMNO%2Bwb0GOqUBq5IPZmy44vXhZyzNapYOglazvc5rDh%2FQ%2Bi8evXXAIBlw8Hr4fJNETzhaYlkfLWbXmeNQhfB1pfd2mvJN1cf%2FTFb7dd69zZmmNl0hWKEMUr9ZY79neviYh4ZyBl9WEkqY1sWkbJr2SZU5x0XMRIJwkvIcHKx1hZAn8KEy8%2FOLlHug60lJ6Dcx4VRyEumPbutjLi%2BEOhV9Z3xgWjxubfuL3m1T26k6&X-Amz-Signature=3f45c5353dbaa23aba746e5fec0fb49e5b291f81386c3171fc5519d49430c68c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5M4SBU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFu%2B2jVxtyNH24gjIvyP9gimy5%2Fkc%2FG0WeY69aBOlipzAiEAy8oaOMUuKX67WjigOo11YXW8RnolNr0Uxijbdn2TA6oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDL00F9fABUE3w8D7pCrcAzCY%2B0cX63j9mLKDD6uV%2BGiGNn%2Be0XguQ106ybwCPdsOddk0a38TWDaKHsHm5Ow7mAlXrWn%2B8Q73LdYohW38D4hvxn%2FVbxui2AjoXKLLvqIpYVUGsVrxpn0Nst8RvTfSGzw22PSJlDrYiVhSRI3o7SfU%2FSL7VFjgubZZg%2FmzGA71PRhg%2FPTpDXVjIV3CYrNUfGnpOl9Phjkdzy8uz1Sh5iBzGsu8R2oJUgdAT0xf7p35Gj9NejA16sJI7Nv5YtJuosagWAEUcF2JCKlvd0NOIWMlA2KNpJoUpsckmoW8tsHfrt2WFo9eLbflaJzf6pymC5l7cS4zs9llf1s5JhvFhqgawyz0hGTwIQcaLV5gvX9CfZqLXppr28FEl%2BxOid6Nvotme7FROeVq%2FdX2Vl%2BHWQVem6HDp5KKVb7fUcpAWCgBkuVDgETb6W9xwf8DTViGlvojSB5LbgpqtmHJ8xxqHo7H36O%2FANkKbxg8pxLpq1mP2AOlgjFF5SFz2%2F8q0eePk%2BY1kEicBaEys04BhBuxnUukmSxfkciyClotSeSkvjUws6JewaXcptpBim8mQtvptwhaxOtSOyjLYaUI%2F7eetc1y0qQhsrqC%2FJTlu272Q2hqfuZTZepdIx4e0GPHMNO%2Bwb0GOqUBq5IPZmy44vXhZyzNapYOglazvc5rDh%2FQ%2Bi8evXXAIBlw8Hr4fJNETzhaYlkfLWbXmeNQhfB1pfd2mvJN1cf%2FTFb7dd69zZmmNl0hWKEMUr9ZY79neviYh4ZyBl9WEkqY1sWkbJr2SZU5x0XMRIJwkvIcHKx1hZAn8KEy8%2FOLlHug60lJ6Dcx4VRyEumPbutjLi%2BEOhV9Z3xgWjxubfuL3m1T26k6&X-Amz-Signature=39bd3828e59c4933e7b45869f6936a985a255a45b60dadb8ba462a1ffb62886a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5M4SBU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFu%2B2jVxtyNH24gjIvyP9gimy5%2Fkc%2FG0WeY69aBOlipzAiEAy8oaOMUuKX67WjigOo11YXW8RnolNr0Uxijbdn2TA6oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDL00F9fABUE3w8D7pCrcAzCY%2B0cX63j9mLKDD6uV%2BGiGNn%2Be0XguQ106ybwCPdsOddk0a38TWDaKHsHm5Ow7mAlXrWn%2B8Q73LdYohW38D4hvxn%2FVbxui2AjoXKLLvqIpYVUGsVrxpn0Nst8RvTfSGzw22PSJlDrYiVhSRI3o7SfU%2FSL7VFjgubZZg%2FmzGA71PRhg%2FPTpDXVjIV3CYrNUfGnpOl9Phjkdzy8uz1Sh5iBzGsu8R2oJUgdAT0xf7p35Gj9NejA16sJI7Nv5YtJuosagWAEUcF2JCKlvd0NOIWMlA2KNpJoUpsckmoW8tsHfrt2WFo9eLbflaJzf6pymC5l7cS4zs9llf1s5JhvFhqgawyz0hGTwIQcaLV5gvX9CfZqLXppr28FEl%2BxOid6Nvotme7FROeVq%2FdX2Vl%2BHWQVem6HDp5KKVb7fUcpAWCgBkuVDgETb6W9xwf8DTViGlvojSB5LbgpqtmHJ8xxqHo7H36O%2FANkKbxg8pxLpq1mP2AOlgjFF5SFz2%2F8q0eePk%2BY1kEicBaEys04BhBuxnUukmSxfkciyClotSeSkvjUws6JewaXcptpBim8mQtvptwhaxOtSOyjLYaUI%2F7eetc1y0qQhsrqC%2FJTlu272Q2hqfuZTZepdIx4e0GPHMNO%2Bwb0GOqUBq5IPZmy44vXhZyzNapYOglazvc5rDh%2FQ%2Bi8evXXAIBlw8Hr4fJNETzhaYlkfLWbXmeNQhfB1pfd2mvJN1cf%2FTFb7dd69zZmmNl0hWKEMUr9ZY79neviYh4ZyBl9WEkqY1sWkbJr2SZU5x0XMRIJwkvIcHKx1hZAn8KEy8%2FOLlHug60lJ6Dcx4VRyEumPbutjLi%2BEOhV9Z3xgWjxubfuL3m1T26k6&X-Amz-Signature=fc18b753f97cd670f5c5231bd3483e062f6d4debb3499544d01c75064a91ee2e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5M4SBU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFu%2B2jVxtyNH24gjIvyP9gimy5%2Fkc%2FG0WeY69aBOlipzAiEAy8oaOMUuKX67WjigOo11YXW8RnolNr0Uxijbdn2TA6oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDL00F9fABUE3w8D7pCrcAzCY%2B0cX63j9mLKDD6uV%2BGiGNn%2Be0XguQ106ybwCPdsOddk0a38TWDaKHsHm5Ow7mAlXrWn%2B8Q73LdYohW38D4hvxn%2FVbxui2AjoXKLLvqIpYVUGsVrxpn0Nst8RvTfSGzw22PSJlDrYiVhSRI3o7SfU%2FSL7VFjgubZZg%2FmzGA71PRhg%2FPTpDXVjIV3CYrNUfGnpOl9Phjkdzy8uz1Sh5iBzGsu8R2oJUgdAT0xf7p35Gj9NejA16sJI7Nv5YtJuosagWAEUcF2JCKlvd0NOIWMlA2KNpJoUpsckmoW8tsHfrt2WFo9eLbflaJzf6pymC5l7cS4zs9llf1s5JhvFhqgawyz0hGTwIQcaLV5gvX9CfZqLXppr28FEl%2BxOid6Nvotme7FROeVq%2FdX2Vl%2BHWQVem6HDp5KKVb7fUcpAWCgBkuVDgETb6W9xwf8DTViGlvojSB5LbgpqtmHJ8xxqHo7H36O%2FANkKbxg8pxLpq1mP2AOlgjFF5SFz2%2F8q0eePk%2BY1kEicBaEys04BhBuxnUukmSxfkciyClotSeSkvjUws6JewaXcptpBim8mQtvptwhaxOtSOyjLYaUI%2F7eetc1y0qQhsrqC%2FJTlu272Q2hqfuZTZepdIx4e0GPHMNO%2Bwb0GOqUBq5IPZmy44vXhZyzNapYOglazvc5rDh%2FQ%2Bi8evXXAIBlw8Hr4fJNETzhaYlkfLWbXmeNQhfB1pfd2mvJN1cf%2FTFb7dd69zZmmNl0hWKEMUr9ZY79neviYh4ZyBl9WEkqY1sWkbJr2SZU5x0XMRIJwkvIcHKx1hZAn8KEy8%2FOLlHug60lJ6Dcx4VRyEumPbutjLi%2BEOhV9Z3xgWjxubfuL3m1T26k6&X-Amz-Signature=47a8c2a42440704b5b6e307a3a0375447667710bb10088a2f788d63e7d141432&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5M4SBU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFu%2B2jVxtyNH24gjIvyP9gimy5%2Fkc%2FG0WeY69aBOlipzAiEAy8oaOMUuKX67WjigOo11YXW8RnolNr0Uxijbdn2TA6oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDL00F9fABUE3w8D7pCrcAzCY%2B0cX63j9mLKDD6uV%2BGiGNn%2Be0XguQ106ybwCPdsOddk0a38TWDaKHsHm5Ow7mAlXrWn%2B8Q73LdYohW38D4hvxn%2FVbxui2AjoXKLLvqIpYVUGsVrxpn0Nst8RvTfSGzw22PSJlDrYiVhSRI3o7SfU%2FSL7VFjgubZZg%2FmzGA71PRhg%2FPTpDXVjIV3CYrNUfGnpOl9Phjkdzy8uz1Sh5iBzGsu8R2oJUgdAT0xf7p35Gj9NejA16sJI7Nv5YtJuosagWAEUcF2JCKlvd0NOIWMlA2KNpJoUpsckmoW8tsHfrt2WFo9eLbflaJzf6pymC5l7cS4zs9llf1s5JhvFhqgawyz0hGTwIQcaLV5gvX9CfZqLXppr28FEl%2BxOid6Nvotme7FROeVq%2FdX2Vl%2BHWQVem6HDp5KKVb7fUcpAWCgBkuVDgETb6W9xwf8DTViGlvojSB5LbgpqtmHJ8xxqHo7H36O%2FANkKbxg8pxLpq1mP2AOlgjFF5SFz2%2F8q0eePk%2BY1kEicBaEys04BhBuxnUukmSxfkciyClotSeSkvjUws6JewaXcptpBim8mQtvptwhaxOtSOyjLYaUI%2F7eetc1y0qQhsrqC%2FJTlu272Q2hqfuZTZepdIx4e0GPHMNO%2Bwb0GOqUBq5IPZmy44vXhZyzNapYOglazvc5rDh%2FQ%2Bi8evXXAIBlw8Hr4fJNETzhaYlkfLWbXmeNQhfB1pfd2mvJN1cf%2FTFb7dd69zZmmNl0hWKEMUr9ZY79neviYh4ZyBl9WEkqY1sWkbJr2SZU5x0XMRIJwkvIcHKx1hZAn8KEy8%2FOLlHug60lJ6Dcx4VRyEumPbutjLi%2BEOhV9Z3xgWjxubfuL3m1T26k6&X-Amz-Signature=41e5c090d80aa428aff7da2882ca0e14baaf7cba469236e2ce01821e807a84a8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

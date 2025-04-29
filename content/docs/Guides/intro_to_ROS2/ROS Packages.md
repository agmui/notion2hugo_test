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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5JYXWU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJsAOwPUnINbRO5g6Rw3CNHkuseA%2FwozJ%2Fl8FQsK0sJAiEA9DY%2FFJda%2FZqzW%2FnDpj4lE9bkQxGEP5NJvgMkWw4q4HYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeFfHVqceCDPmwVvSrcA2Jj6P5XeAMZAg3p%2BR6QDwXdDdJ%2BFcaOG%2Fu%2Bg6vyWbO5lVYjGrSXC62sr%2F1sfjgkQqdPo3kYQDiTPyJ5Wie9sY3jnNi2%2FZIfOcsz%2Fj3MhN1viovSJf1v5yjhmTQSlGWsBs%2BFqLyBoRdEoK4DQ5x%2BeARiYnqsOgt2rFQ1ldIREdUy%2FzWt73NljnC0unnojZxj58VllxmS4zMSJEfBfyreMNn19rgjIpoxoJ6KtwcRMP%2F4trTUhVoVvelHICozjuyvdRJL%2B2zhVhDDxDTpHWMpfdmfty9hTgfsXFjl4bw16Ai8WbhkpcKJNRFhTwSN9iCpyppIwm23ZgmL3OP1EQWfsqHMsRt8fciIvpIwA4RIu6KrRmZApKGjsUnEt%2FXt1IhoC%2BuVCBvkNG3rfaYM9aclzhJMldLPruT4%2FkQgSmkmjN%2FxLvwyVRkwcNKxzVfZRsqdi345o6xQXCGsTVpNcNPyj273Smsa17nSPMizUimCk2U7gq7U0ysca5Jsq8JAfe8eskq78KqCy15HXkS7wiaZikDniPNRiha94yvSaHgzJSPUDIVoeAyfjZRapD77fs6WdoYsFNGZ016uznsR5IB%2F94Q3Ya0tDi1UX%2Bs4q%2Ftw%2BGMKZu452ZC72owgaIm5MJe2wcAGOqUBaogcpGWtXb0sLmkS0sRLAuxIS1meSxWtr8T7jJkRsZwfh0hIUx3mcKn7w5C6pwwFy4OD%2FnyeNoCTNGpQFrSky81erGbhvmagjn71TYoz%2FkcOIgJoOPRB3iMlpL6rDCBS7qpnJSm5ktSNMWgQBInzB1rEVPAw2L4SfSa8HoqUcXY7aIuKa8ULpAXtXh1%2FcyVU2RZbBBN5%2F5B2zU9yLFTeT%2FPc5nuU&X-Amz-Signature=446288c9f69c47c28a20ea50f7c413906b23ff166a62d3b51d6403d09acd8291&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5JYXWU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJsAOwPUnINbRO5g6Rw3CNHkuseA%2FwozJ%2Fl8FQsK0sJAiEA9DY%2FFJda%2FZqzW%2FnDpj4lE9bkQxGEP5NJvgMkWw4q4HYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeFfHVqceCDPmwVvSrcA2Jj6P5XeAMZAg3p%2BR6QDwXdDdJ%2BFcaOG%2Fu%2Bg6vyWbO5lVYjGrSXC62sr%2F1sfjgkQqdPo3kYQDiTPyJ5Wie9sY3jnNi2%2FZIfOcsz%2Fj3MhN1viovSJf1v5yjhmTQSlGWsBs%2BFqLyBoRdEoK4DQ5x%2BeARiYnqsOgt2rFQ1ldIREdUy%2FzWt73NljnC0unnojZxj58VllxmS4zMSJEfBfyreMNn19rgjIpoxoJ6KtwcRMP%2F4trTUhVoVvelHICozjuyvdRJL%2B2zhVhDDxDTpHWMpfdmfty9hTgfsXFjl4bw16Ai8WbhkpcKJNRFhTwSN9iCpyppIwm23ZgmL3OP1EQWfsqHMsRt8fciIvpIwA4RIu6KrRmZApKGjsUnEt%2FXt1IhoC%2BuVCBvkNG3rfaYM9aclzhJMldLPruT4%2FkQgSmkmjN%2FxLvwyVRkwcNKxzVfZRsqdi345o6xQXCGsTVpNcNPyj273Smsa17nSPMizUimCk2U7gq7U0ysca5Jsq8JAfe8eskq78KqCy15HXkS7wiaZikDniPNRiha94yvSaHgzJSPUDIVoeAyfjZRapD77fs6WdoYsFNGZ016uznsR5IB%2F94Q3Ya0tDi1UX%2Bs4q%2Ftw%2BGMKZu452ZC72owgaIm5MJe2wcAGOqUBaogcpGWtXb0sLmkS0sRLAuxIS1meSxWtr8T7jJkRsZwfh0hIUx3mcKn7w5C6pwwFy4OD%2FnyeNoCTNGpQFrSky81erGbhvmagjn71TYoz%2FkcOIgJoOPRB3iMlpL6rDCBS7qpnJSm5ktSNMWgQBInzB1rEVPAw2L4SfSa8HoqUcXY7aIuKa8ULpAXtXh1%2FcyVU2RZbBBN5%2F5B2zU9yLFTeT%2FPc5nuU&X-Amz-Signature=ada7a30731d02787da93e98a716621a98d6543e7963bd55528c1fe35a6a3faaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5JYXWU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJsAOwPUnINbRO5g6Rw3CNHkuseA%2FwozJ%2Fl8FQsK0sJAiEA9DY%2FFJda%2FZqzW%2FnDpj4lE9bkQxGEP5NJvgMkWw4q4HYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeFfHVqceCDPmwVvSrcA2Jj6P5XeAMZAg3p%2BR6QDwXdDdJ%2BFcaOG%2Fu%2Bg6vyWbO5lVYjGrSXC62sr%2F1sfjgkQqdPo3kYQDiTPyJ5Wie9sY3jnNi2%2FZIfOcsz%2Fj3MhN1viovSJf1v5yjhmTQSlGWsBs%2BFqLyBoRdEoK4DQ5x%2BeARiYnqsOgt2rFQ1ldIREdUy%2FzWt73NljnC0unnojZxj58VllxmS4zMSJEfBfyreMNn19rgjIpoxoJ6KtwcRMP%2F4trTUhVoVvelHICozjuyvdRJL%2B2zhVhDDxDTpHWMpfdmfty9hTgfsXFjl4bw16Ai8WbhkpcKJNRFhTwSN9iCpyppIwm23ZgmL3OP1EQWfsqHMsRt8fciIvpIwA4RIu6KrRmZApKGjsUnEt%2FXt1IhoC%2BuVCBvkNG3rfaYM9aclzhJMldLPruT4%2FkQgSmkmjN%2FxLvwyVRkwcNKxzVfZRsqdi345o6xQXCGsTVpNcNPyj273Smsa17nSPMizUimCk2U7gq7U0ysca5Jsq8JAfe8eskq78KqCy15HXkS7wiaZikDniPNRiha94yvSaHgzJSPUDIVoeAyfjZRapD77fs6WdoYsFNGZ016uznsR5IB%2F94Q3Ya0tDi1UX%2Bs4q%2Ftw%2BGMKZu452ZC72owgaIm5MJe2wcAGOqUBaogcpGWtXb0sLmkS0sRLAuxIS1meSxWtr8T7jJkRsZwfh0hIUx3mcKn7w5C6pwwFy4OD%2FnyeNoCTNGpQFrSky81erGbhvmagjn71TYoz%2FkcOIgJoOPRB3iMlpL6rDCBS7qpnJSm5ktSNMWgQBInzB1rEVPAw2L4SfSa8HoqUcXY7aIuKa8ULpAXtXh1%2FcyVU2RZbBBN5%2F5B2zU9yLFTeT%2FPc5nuU&X-Amz-Signature=e745cc972dd2441fcbd720c21738e0a78a0e27a3b983ec08024eb47472312a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5JYXWU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJsAOwPUnINbRO5g6Rw3CNHkuseA%2FwozJ%2Fl8FQsK0sJAiEA9DY%2FFJda%2FZqzW%2FnDpj4lE9bkQxGEP5NJvgMkWw4q4HYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeFfHVqceCDPmwVvSrcA2Jj6P5XeAMZAg3p%2BR6QDwXdDdJ%2BFcaOG%2Fu%2Bg6vyWbO5lVYjGrSXC62sr%2F1sfjgkQqdPo3kYQDiTPyJ5Wie9sY3jnNi2%2FZIfOcsz%2Fj3MhN1viovSJf1v5yjhmTQSlGWsBs%2BFqLyBoRdEoK4DQ5x%2BeARiYnqsOgt2rFQ1ldIREdUy%2FzWt73NljnC0unnojZxj58VllxmS4zMSJEfBfyreMNn19rgjIpoxoJ6KtwcRMP%2F4trTUhVoVvelHICozjuyvdRJL%2B2zhVhDDxDTpHWMpfdmfty9hTgfsXFjl4bw16Ai8WbhkpcKJNRFhTwSN9iCpyppIwm23ZgmL3OP1EQWfsqHMsRt8fciIvpIwA4RIu6KrRmZApKGjsUnEt%2FXt1IhoC%2BuVCBvkNG3rfaYM9aclzhJMldLPruT4%2FkQgSmkmjN%2FxLvwyVRkwcNKxzVfZRsqdi345o6xQXCGsTVpNcNPyj273Smsa17nSPMizUimCk2U7gq7U0ysca5Jsq8JAfe8eskq78KqCy15HXkS7wiaZikDniPNRiha94yvSaHgzJSPUDIVoeAyfjZRapD77fs6WdoYsFNGZ016uznsR5IB%2F94Q3Ya0tDi1UX%2Bs4q%2Ftw%2BGMKZu452ZC72owgaIm5MJe2wcAGOqUBaogcpGWtXb0sLmkS0sRLAuxIS1meSxWtr8T7jJkRsZwfh0hIUx3mcKn7w5C6pwwFy4OD%2FnyeNoCTNGpQFrSky81erGbhvmagjn71TYoz%2FkcOIgJoOPRB3iMlpL6rDCBS7qpnJSm5ktSNMWgQBInzB1rEVPAw2L4SfSa8HoqUcXY7aIuKa8ULpAXtXh1%2FcyVU2RZbBBN5%2F5B2zU9yLFTeT%2FPc5nuU&X-Amz-Signature=3240f01eb5f65bee64d2c19babe393c0b5ed5d72553495d4bd659847581fe02f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5JYXWU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJsAOwPUnINbRO5g6Rw3CNHkuseA%2FwozJ%2Fl8FQsK0sJAiEA9DY%2FFJda%2FZqzW%2FnDpj4lE9bkQxGEP5NJvgMkWw4q4HYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeFfHVqceCDPmwVvSrcA2Jj6P5XeAMZAg3p%2BR6QDwXdDdJ%2BFcaOG%2Fu%2Bg6vyWbO5lVYjGrSXC62sr%2F1sfjgkQqdPo3kYQDiTPyJ5Wie9sY3jnNi2%2FZIfOcsz%2Fj3MhN1viovSJf1v5yjhmTQSlGWsBs%2BFqLyBoRdEoK4DQ5x%2BeARiYnqsOgt2rFQ1ldIREdUy%2FzWt73NljnC0unnojZxj58VllxmS4zMSJEfBfyreMNn19rgjIpoxoJ6KtwcRMP%2F4trTUhVoVvelHICozjuyvdRJL%2B2zhVhDDxDTpHWMpfdmfty9hTgfsXFjl4bw16Ai8WbhkpcKJNRFhTwSN9iCpyppIwm23ZgmL3OP1EQWfsqHMsRt8fciIvpIwA4RIu6KrRmZApKGjsUnEt%2FXt1IhoC%2BuVCBvkNG3rfaYM9aclzhJMldLPruT4%2FkQgSmkmjN%2FxLvwyVRkwcNKxzVfZRsqdi345o6xQXCGsTVpNcNPyj273Smsa17nSPMizUimCk2U7gq7U0ysca5Jsq8JAfe8eskq78KqCy15HXkS7wiaZikDniPNRiha94yvSaHgzJSPUDIVoeAyfjZRapD77fs6WdoYsFNGZ016uznsR5IB%2F94Q3Ya0tDi1UX%2Bs4q%2Ftw%2BGMKZu452ZC72owgaIm5MJe2wcAGOqUBaogcpGWtXb0sLmkS0sRLAuxIS1meSxWtr8T7jJkRsZwfh0hIUx3mcKn7w5C6pwwFy4OD%2FnyeNoCTNGpQFrSky81erGbhvmagjn71TYoz%2FkcOIgJoOPRB3iMlpL6rDCBS7qpnJSm5ktSNMWgQBInzB1rEVPAw2L4SfSa8HoqUcXY7aIuKa8ULpAXtXh1%2FcyVU2RZbBBN5%2F5B2zU9yLFTeT%2FPc5nuU&X-Amz-Signature=ffd3037bddca1706f25e1c7a047e55b75f19dbf37383025ffd9d08328fc095ca&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5JYXWU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJsAOwPUnINbRO5g6Rw3CNHkuseA%2FwozJ%2Fl8FQsK0sJAiEA9DY%2FFJda%2FZqzW%2FnDpj4lE9bkQxGEP5NJvgMkWw4q4HYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeFfHVqceCDPmwVvSrcA2Jj6P5XeAMZAg3p%2BR6QDwXdDdJ%2BFcaOG%2Fu%2Bg6vyWbO5lVYjGrSXC62sr%2F1sfjgkQqdPo3kYQDiTPyJ5Wie9sY3jnNi2%2FZIfOcsz%2Fj3MhN1viovSJf1v5yjhmTQSlGWsBs%2BFqLyBoRdEoK4DQ5x%2BeARiYnqsOgt2rFQ1ldIREdUy%2FzWt73NljnC0unnojZxj58VllxmS4zMSJEfBfyreMNn19rgjIpoxoJ6KtwcRMP%2F4trTUhVoVvelHICozjuyvdRJL%2B2zhVhDDxDTpHWMpfdmfty9hTgfsXFjl4bw16Ai8WbhkpcKJNRFhTwSN9iCpyppIwm23ZgmL3OP1EQWfsqHMsRt8fciIvpIwA4RIu6KrRmZApKGjsUnEt%2FXt1IhoC%2BuVCBvkNG3rfaYM9aclzhJMldLPruT4%2FkQgSmkmjN%2FxLvwyVRkwcNKxzVfZRsqdi345o6xQXCGsTVpNcNPyj273Smsa17nSPMizUimCk2U7gq7U0ysca5Jsq8JAfe8eskq78KqCy15HXkS7wiaZikDniPNRiha94yvSaHgzJSPUDIVoeAyfjZRapD77fs6WdoYsFNGZ016uznsR5IB%2F94Q3Ya0tDi1UX%2Bs4q%2Ftw%2BGMKZu452ZC72owgaIm5MJe2wcAGOqUBaogcpGWtXb0sLmkS0sRLAuxIS1meSxWtr8T7jJkRsZwfh0hIUx3mcKn7w5C6pwwFy4OD%2FnyeNoCTNGpQFrSky81erGbhvmagjn71TYoz%2FkcOIgJoOPRB3iMlpL6rDCBS7qpnJSm5ktSNMWgQBInzB1rEVPAw2L4SfSa8HoqUcXY7aIuKa8ULpAXtXh1%2FcyVU2RZbBBN5%2F5B2zU9yLFTeT%2FPc5nuU&X-Amz-Signature=78905889f126e63912d790334910dc19fe974188cf47bbbad8c89d3a9267944d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5JYXWU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJsAOwPUnINbRO5g6Rw3CNHkuseA%2FwozJ%2Fl8FQsK0sJAiEA9DY%2FFJda%2FZqzW%2FnDpj4lE9bkQxGEP5NJvgMkWw4q4HYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeFfHVqceCDPmwVvSrcA2Jj6P5XeAMZAg3p%2BR6QDwXdDdJ%2BFcaOG%2Fu%2Bg6vyWbO5lVYjGrSXC62sr%2F1sfjgkQqdPo3kYQDiTPyJ5Wie9sY3jnNi2%2FZIfOcsz%2Fj3MhN1viovSJf1v5yjhmTQSlGWsBs%2BFqLyBoRdEoK4DQ5x%2BeARiYnqsOgt2rFQ1ldIREdUy%2FzWt73NljnC0unnojZxj58VllxmS4zMSJEfBfyreMNn19rgjIpoxoJ6KtwcRMP%2F4trTUhVoVvelHICozjuyvdRJL%2B2zhVhDDxDTpHWMpfdmfty9hTgfsXFjl4bw16Ai8WbhkpcKJNRFhTwSN9iCpyppIwm23ZgmL3OP1EQWfsqHMsRt8fciIvpIwA4RIu6KrRmZApKGjsUnEt%2FXt1IhoC%2BuVCBvkNG3rfaYM9aclzhJMldLPruT4%2FkQgSmkmjN%2FxLvwyVRkwcNKxzVfZRsqdi345o6xQXCGsTVpNcNPyj273Smsa17nSPMizUimCk2U7gq7U0ysca5Jsq8JAfe8eskq78KqCy15HXkS7wiaZikDniPNRiha94yvSaHgzJSPUDIVoeAyfjZRapD77fs6WdoYsFNGZ016uznsR5IB%2F94Q3Ya0tDi1UX%2Bs4q%2Ftw%2BGMKZu452ZC72owgaIm5MJe2wcAGOqUBaogcpGWtXb0sLmkS0sRLAuxIS1meSxWtr8T7jJkRsZwfh0hIUx3mcKn7w5C6pwwFy4OD%2FnyeNoCTNGpQFrSky81erGbhvmagjn71TYoz%2FkcOIgJoOPRB3iMlpL6rDCBS7qpnJSm5ktSNMWgQBInzB1rEVPAw2L4SfSa8HoqUcXY7aIuKa8ULpAXtXh1%2FcyVU2RZbBBN5%2F5B2zU9yLFTeT%2FPc5nuU&X-Amz-Signature=cb83bf7caa52486dd91f85c74744d98119d3fa2cf973f492b374807ddb812e68&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

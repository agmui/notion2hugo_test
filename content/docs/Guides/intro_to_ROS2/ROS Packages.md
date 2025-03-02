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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGBE2DG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfuoc%2FazGsJgunLWliW%2F9AAIXPL2T1k6nEisxuWC8gIgD%2BJNWliY1YEvkv6%2Bxo8b1IS2Z7%2FMjfrhRanFWcw4xusqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDvgdLCyNxbHUcIESrcAx6Uc41FshcD4ligZoFdp8brY40rcPu6TYhVkO6%2BaBgoPMbDV%2FLFlYx%2F6cZ%2BAHJRjp2c%2FK4h5T1OUar4wWVtDcB1MAbkKzUlegOFdAIMWJdepx7O99w4dTj9X9KlLhrSnp%2BtJKUyUP1%2B3BEqqvToNxf6he6dXQoKzF%2B%2Fhhd6OjiQfPDjXzoTUOIaNCjQ9JRUh6%2Bl8iRIvN72pAD9pEW35VeGb80x2pHWAvK6br1CXRbSdUBkcQdy6n1Me0RUjF5g1FpiKsFBrJni38a4vj%2BYpBhpl%2BcbRXzSo%2Fs8lz4dJvP0mj%2FoijxAtr%2B3AAmxBtUmXhBooW1eqeaS0BHbAfMs5XKRlD1IXF%2FaJvbOddN8r4LYSycND9J8y2qgjouuqWATHn%2B0OWPxbCDZMNHiqMezHxTVOcY1pV7opeYb3FsDx%2FzxT7nne41Ucp2vIZ%2FvLAQ29JGnQ8K6jdBJdV6t7Pmeioh0HiqWQMx0lDankwyxX%2F0WQFM%2FgeQmyQHR98AEqVcwCQ1u%2FyvmT4fg89hYJObctLx6aDTK9mR6FShf29Jr%2Fnu0EIU%2BGUq6TSDwwSXnCBcpu3Z40NBf%2F43bcTtO9ReehfIcRX52m4sD31ZBJzmeQa7oBqksWsTZTzX719J3MLGlk74GOqUBpbj2xaE6qgzFSJCYoVBo2CA3XeYMfLR293gV4Xw1%2BiJNXSEU%2F2P0z2q2Sl53S2VS6hi9nuC%2BTJbdYLaUa1FhDOzCEr%2BYxAx0WEOKuYR4uelyImWfvDHTWSCZ58uBpgiScOHUPsMOi4eKlfzOki21YenT1NAWKb9tuAYH0lYPoUJraZkTzGAFxOeRr53ivoCHihivDDnnKY7cnVdd0ns171otYft0&X-Amz-Signature=dada50cfcdfc1a89d4e7afdaf54118025c30893cebc36338a8f5a818ab639a64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGBE2DG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfuoc%2FazGsJgunLWliW%2F9AAIXPL2T1k6nEisxuWC8gIgD%2BJNWliY1YEvkv6%2Bxo8b1IS2Z7%2FMjfrhRanFWcw4xusqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDvgdLCyNxbHUcIESrcAx6Uc41FshcD4ligZoFdp8brY40rcPu6TYhVkO6%2BaBgoPMbDV%2FLFlYx%2F6cZ%2BAHJRjp2c%2FK4h5T1OUar4wWVtDcB1MAbkKzUlegOFdAIMWJdepx7O99w4dTj9X9KlLhrSnp%2BtJKUyUP1%2B3BEqqvToNxf6he6dXQoKzF%2B%2Fhhd6OjiQfPDjXzoTUOIaNCjQ9JRUh6%2Bl8iRIvN72pAD9pEW35VeGb80x2pHWAvK6br1CXRbSdUBkcQdy6n1Me0RUjF5g1FpiKsFBrJni38a4vj%2BYpBhpl%2BcbRXzSo%2Fs8lz4dJvP0mj%2FoijxAtr%2B3AAmxBtUmXhBooW1eqeaS0BHbAfMs5XKRlD1IXF%2FaJvbOddN8r4LYSycND9J8y2qgjouuqWATHn%2B0OWPxbCDZMNHiqMezHxTVOcY1pV7opeYb3FsDx%2FzxT7nne41Ucp2vIZ%2FvLAQ29JGnQ8K6jdBJdV6t7Pmeioh0HiqWQMx0lDankwyxX%2F0WQFM%2FgeQmyQHR98AEqVcwCQ1u%2FyvmT4fg89hYJObctLx6aDTK9mR6FShf29Jr%2Fnu0EIU%2BGUq6TSDwwSXnCBcpu3Z40NBf%2F43bcTtO9ReehfIcRX52m4sD31ZBJzmeQa7oBqksWsTZTzX719J3MLGlk74GOqUBpbj2xaE6qgzFSJCYoVBo2CA3XeYMfLR293gV4Xw1%2BiJNXSEU%2F2P0z2q2Sl53S2VS6hi9nuC%2BTJbdYLaUa1FhDOzCEr%2BYxAx0WEOKuYR4uelyImWfvDHTWSCZ58uBpgiScOHUPsMOi4eKlfzOki21YenT1NAWKb9tuAYH0lYPoUJraZkTzGAFxOeRr53ivoCHihivDDnnKY7cnVdd0ns171otYft0&X-Amz-Signature=eedecc96ff272d8f72d4fe066d2e21ab21d33516e392572ef2216cf7a909ab78&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGBE2DG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfuoc%2FazGsJgunLWliW%2F9AAIXPL2T1k6nEisxuWC8gIgD%2BJNWliY1YEvkv6%2Bxo8b1IS2Z7%2FMjfrhRanFWcw4xusqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDvgdLCyNxbHUcIESrcAx6Uc41FshcD4ligZoFdp8brY40rcPu6TYhVkO6%2BaBgoPMbDV%2FLFlYx%2F6cZ%2BAHJRjp2c%2FK4h5T1OUar4wWVtDcB1MAbkKzUlegOFdAIMWJdepx7O99w4dTj9X9KlLhrSnp%2BtJKUyUP1%2B3BEqqvToNxf6he6dXQoKzF%2B%2Fhhd6OjiQfPDjXzoTUOIaNCjQ9JRUh6%2Bl8iRIvN72pAD9pEW35VeGb80x2pHWAvK6br1CXRbSdUBkcQdy6n1Me0RUjF5g1FpiKsFBrJni38a4vj%2BYpBhpl%2BcbRXzSo%2Fs8lz4dJvP0mj%2FoijxAtr%2B3AAmxBtUmXhBooW1eqeaS0BHbAfMs5XKRlD1IXF%2FaJvbOddN8r4LYSycND9J8y2qgjouuqWATHn%2B0OWPxbCDZMNHiqMezHxTVOcY1pV7opeYb3FsDx%2FzxT7nne41Ucp2vIZ%2FvLAQ29JGnQ8K6jdBJdV6t7Pmeioh0HiqWQMx0lDankwyxX%2F0WQFM%2FgeQmyQHR98AEqVcwCQ1u%2FyvmT4fg89hYJObctLx6aDTK9mR6FShf29Jr%2Fnu0EIU%2BGUq6TSDwwSXnCBcpu3Z40NBf%2F43bcTtO9ReehfIcRX52m4sD31ZBJzmeQa7oBqksWsTZTzX719J3MLGlk74GOqUBpbj2xaE6qgzFSJCYoVBo2CA3XeYMfLR293gV4Xw1%2BiJNXSEU%2F2P0z2q2Sl53S2VS6hi9nuC%2BTJbdYLaUa1FhDOzCEr%2BYxAx0WEOKuYR4uelyImWfvDHTWSCZ58uBpgiScOHUPsMOi4eKlfzOki21YenT1NAWKb9tuAYH0lYPoUJraZkTzGAFxOeRr53ivoCHihivDDnnKY7cnVdd0ns171otYft0&X-Amz-Signature=b3bb9d76280433abc790cc087affc439ce6cf1a5f075a377e37021217cbc45b0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGBE2DG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfuoc%2FazGsJgunLWliW%2F9AAIXPL2T1k6nEisxuWC8gIgD%2BJNWliY1YEvkv6%2Bxo8b1IS2Z7%2FMjfrhRanFWcw4xusqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDvgdLCyNxbHUcIESrcAx6Uc41FshcD4ligZoFdp8brY40rcPu6TYhVkO6%2BaBgoPMbDV%2FLFlYx%2F6cZ%2BAHJRjp2c%2FK4h5T1OUar4wWVtDcB1MAbkKzUlegOFdAIMWJdepx7O99w4dTj9X9KlLhrSnp%2BtJKUyUP1%2B3BEqqvToNxf6he6dXQoKzF%2B%2Fhhd6OjiQfPDjXzoTUOIaNCjQ9JRUh6%2Bl8iRIvN72pAD9pEW35VeGb80x2pHWAvK6br1CXRbSdUBkcQdy6n1Me0RUjF5g1FpiKsFBrJni38a4vj%2BYpBhpl%2BcbRXzSo%2Fs8lz4dJvP0mj%2FoijxAtr%2B3AAmxBtUmXhBooW1eqeaS0BHbAfMs5XKRlD1IXF%2FaJvbOddN8r4LYSycND9J8y2qgjouuqWATHn%2B0OWPxbCDZMNHiqMezHxTVOcY1pV7opeYb3FsDx%2FzxT7nne41Ucp2vIZ%2FvLAQ29JGnQ8K6jdBJdV6t7Pmeioh0HiqWQMx0lDankwyxX%2F0WQFM%2FgeQmyQHR98AEqVcwCQ1u%2FyvmT4fg89hYJObctLx6aDTK9mR6FShf29Jr%2Fnu0EIU%2BGUq6TSDwwSXnCBcpu3Z40NBf%2F43bcTtO9ReehfIcRX52m4sD31ZBJzmeQa7oBqksWsTZTzX719J3MLGlk74GOqUBpbj2xaE6qgzFSJCYoVBo2CA3XeYMfLR293gV4Xw1%2BiJNXSEU%2F2P0z2q2Sl53S2VS6hi9nuC%2BTJbdYLaUa1FhDOzCEr%2BYxAx0WEOKuYR4uelyImWfvDHTWSCZ58uBpgiScOHUPsMOi4eKlfzOki21YenT1NAWKb9tuAYH0lYPoUJraZkTzGAFxOeRr53ivoCHihivDDnnKY7cnVdd0ns171otYft0&X-Amz-Signature=2348e88c2bc9f30986ca374b694e0d336791e83c360efb2bf1495f575b0406b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGBE2DG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfuoc%2FazGsJgunLWliW%2F9AAIXPL2T1k6nEisxuWC8gIgD%2BJNWliY1YEvkv6%2Bxo8b1IS2Z7%2FMjfrhRanFWcw4xusqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDvgdLCyNxbHUcIESrcAx6Uc41FshcD4ligZoFdp8brY40rcPu6TYhVkO6%2BaBgoPMbDV%2FLFlYx%2F6cZ%2BAHJRjp2c%2FK4h5T1OUar4wWVtDcB1MAbkKzUlegOFdAIMWJdepx7O99w4dTj9X9KlLhrSnp%2BtJKUyUP1%2B3BEqqvToNxf6he6dXQoKzF%2B%2Fhhd6OjiQfPDjXzoTUOIaNCjQ9JRUh6%2Bl8iRIvN72pAD9pEW35VeGb80x2pHWAvK6br1CXRbSdUBkcQdy6n1Me0RUjF5g1FpiKsFBrJni38a4vj%2BYpBhpl%2BcbRXzSo%2Fs8lz4dJvP0mj%2FoijxAtr%2B3AAmxBtUmXhBooW1eqeaS0BHbAfMs5XKRlD1IXF%2FaJvbOddN8r4LYSycND9J8y2qgjouuqWATHn%2B0OWPxbCDZMNHiqMezHxTVOcY1pV7opeYb3FsDx%2FzxT7nne41Ucp2vIZ%2FvLAQ29JGnQ8K6jdBJdV6t7Pmeioh0HiqWQMx0lDankwyxX%2F0WQFM%2FgeQmyQHR98AEqVcwCQ1u%2FyvmT4fg89hYJObctLx6aDTK9mR6FShf29Jr%2Fnu0EIU%2BGUq6TSDwwSXnCBcpu3Z40NBf%2F43bcTtO9ReehfIcRX52m4sD31ZBJzmeQa7oBqksWsTZTzX719J3MLGlk74GOqUBpbj2xaE6qgzFSJCYoVBo2CA3XeYMfLR293gV4Xw1%2BiJNXSEU%2F2P0z2q2Sl53S2VS6hi9nuC%2BTJbdYLaUa1FhDOzCEr%2BYxAx0WEOKuYR4uelyImWfvDHTWSCZ58uBpgiScOHUPsMOi4eKlfzOki21YenT1NAWKb9tuAYH0lYPoUJraZkTzGAFxOeRr53ivoCHihivDDnnKY7cnVdd0ns171otYft0&X-Amz-Signature=17c21387ab5fb4a4ea7f80cb8bf3a6ef81f1fb9a9faf2123a239894dd10645e2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGBE2DG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfuoc%2FazGsJgunLWliW%2F9AAIXPL2T1k6nEisxuWC8gIgD%2BJNWliY1YEvkv6%2Bxo8b1IS2Z7%2FMjfrhRanFWcw4xusqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDvgdLCyNxbHUcIESrcAx6Uc41FshcD4ligZoFdp8brY40rcPu6TYhVkO6%2BaBgoPMbDV%2FLFlYx%2F6cZ%2BAHJRjp2c%2FK4h5T1OUar4wWVtDcB1MAbkKzUlegOFdAIMWJdepx7O99w4dTj9X9KlLhrSnp%2BtJKUyUP1%2B3BEqqvToNxf6he6dXQoKzF%2B%2Fhhd6OjiQfPDjXzoTUOIaNCjQ9JRUh6%2Bl8iRIvN72pAD9pEW35VeGb80x2pHWAvK6br1CXRbSdUBkcQdy6n1Me0RUjF5g1FpiKsFBrJni38a4vj%2BYpBhpl%2BcbRXzSo%2Fs8lz4dJvP0mj%2FoijxAtr%2B3AAmxBtUmXhBooW1eqeaS0BHbAfMs5XKRlD1IXF%2FaJvbOddN8r4LYSycND9J8y2qgjouuqWATHn%2B0OWPxbCDZMNHiqMezHxTVOcY1pV7opeYb3FsDx%2FzxT7nne41Ucp2vIZ%2FvLAQ29JGnQ8K6jdBJdV6t7Pmeioh0HiqWQMx0lDankwyxX%2F0WQFM%2FgeQmyQHR98AEqVcwCQ1u%2FyvmT4fg89hYJObctLx6aDTK9mR6FShf29Jr%2Fnu0EIU%2BGUq6TSDwwSXnCBcpu3Z40NBf%2F43bcTtO9ReehfIcRX52m4sD31ZBJzmeQa7oBqksWsTZTzX719J3MLGlk74GOqUBpbj2xaE6qgzFSJCYoVBo2CA3XeYMfLR293gV4Xw1%2BiJNXSEU%2F2P0z2q2Sl53S2VS6hi9nuC%2BTJbdYLaUa1FhDOzCEr%2BYxAx0WEOKuYR4uelyImWfvDHTWSCZ58uBpgiScOHUPsMOi4eKlfzOki21YenT1NAWKb9tuAYH0lYPoUJraZkTzGAFxOeRr53ivoCHihivDDnnKY7cnVdd0ns171otYft0&X-Amz-Signature=ddc1db6426467dc55d7049dbf9b339754a8371a21a543c6d1824312318d106fd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGBE2DG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfuoc%2FazGsJgunLWliW%2F9AAIXPL2T1k6nEisxuWC8gIgD%2BJNWliY1YEvkv6%2Bxo8b1IS2Z7%2FMjfrhRanFWcw4xusqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDvgdLCyNxbHUcIESrcAx6Uc41FshcD4ligZoFdp8brY40rcPu6TYhVkO6%2BaBgoPMbDV%2FLFlYx%2F6cZ%2BAHJRjp2c%2FK4h5T1OUar4wWVtDcB1MAbkKzUlegOFdAIMWJdepx7O99w4dTj9X9KlLhrSnp%2BtJKUyUP1%2B3BEqqvToNxf6he6dXQoKzF%2B%2Fhhd6OjiQfPDjXzoTUOIaNCjQ9JRUh6%2Bl8iRIvN72pAD9pEW35VeGb80x2pHWAvK6br1CXRbSdUBkcQdy6n1Me0RUjF5g1FpiKsFBrJni38a4vj%2BYpBhpl%2BcbRXzSo%2Fs8lz4dJvP0mj%2FoijxAtr%2B3AAmxBtUmXhBooW1eqeaS0BHbAfMs5XKRlD1IXF%2FaJvbOddN8r4LYSycND9J8y2qgjouuqWATHn%2B0OWPxbCDZMNHiqMezHxTVOcY1pV7opeYb3FsDx%2FzxT7nne41Ucp2vIZ%2FvLAQ29JGnQ8K6jdBJdV6t7Pmeioh0HiqWQMx0lDankwyxX%2F0WQFM%2FgeQmyQHR98AEqVcwCQ1u%2FyvmT4fg89hYJObctLx6aDTK9mR6FShf29Jr%2Fnu0EIU%2BGUq6TSDwwSXnCBcpu3Z40NBf%2F43bcTtO9ReehfIcRX52m4sD31ZBJzmeQa7oBqksWsTZTzX719J3MLGlk74GOqUBpbj2xaE6qgzFSJCYoVBo2CA3XeYMfLR293gV4Xw1%2BiJNXSEU%2F2P0z2q2Sl53S2VS6hi9nuC%2BTJbdYLaUa1FhDOzCEr%2BYxAx0WEOKuYR4uelyImWfvDHTWSCZ58uBpgiScOHUPsMOi4eKlfzOki21YenT1NAWKb9tuAYH0lYPoUJraZkTzGAFxOeRr53ivoCHihivDDnnKY7cnVdd0ns171otYft0&X-Amz-Signature=eb1a6f3329fae3b7e64acd758208127f1fbdcd9f1dccde0584a8115bce5e845e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

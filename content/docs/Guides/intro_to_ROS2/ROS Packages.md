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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFWFWYQN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrJKr6rRbw4Rk8S%2BMQCcRqGm7bFtI9M98YurhqCBaragIgP4mu0hn3dfpEowR0E%2BO4Mq5genEHp7loSvlSFxUkTVEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK%2FWab0zMKpAs6S%2BbyrcA5J3TVb6udxQumyKkGm%2FP4rTMClmME14gLFpKUJ660aTx%2F2yhGfB1BQvs1zJKB7xlE6cH8%2BO0k2gxTWD2Mka9zCZKcUtRvw%2BRqdHF7ja6GKzi51gBnC72%2FMXOYFGxMErykrKNFhWGGJJUqfwzTgJYqtgLhrs7%2BKRThBxvarMATPkwjgH6hxZlM8YajsaCBFdvuEN7M6O%2Be25KtqbiQ%2FzEXkXmbGX3eOjKMAQhMfrURb%2B%2FwO9CANvwX6izEA%2B%2BwaQ3DTmD9U1kZglOklig68tN3SudCz4N2EkFmKsbMQoMF6x7G4EO14mL1L2IQ28CG3B%2BWIoDOQHaQjqM6jSiTkBRJp8oj9wvt1J9w1FbbwSLdiRXB6mTw3wlW5QykPSobUtQULfvB6Pb%2BGrs3iQ%2F9tm%2B%2FwPJ6euvvfySPzb%2Bpi49oU1hw8twzAzCy%2FBZCJSBq71SPpQ01og2ZMFUBAT17nwU%2FV0nxZuzVHcR22QLUoKN7INPf3uTpd5CEYZv7hlcENYmVXs31yUalNU2E8AywKlKHXSj5bcx%2BDbhpY0TXalUX2RjgjJWndZM37j2Tfhdr6PJ6FyOe959hNBtbrb1f27T7cC4xDcbOpCt2r%2BE3WsqPzybzYyJRBmwOkZqaqpML6B3cEGOqUBobbXSN1RLzyBxZMTABMTTe1kEB06h%2BqnTmJWd%2FYq5S4Dd4riqWGxVZe2rQ3Eae8zYqqyUgiYtEFoktGf8RgXx6RLQgN4320g02PDzvsCcAo8cdpPa5oGCFQSmZWzCxE8ZAujNMqKKZ23Sn5xG6oeRFUW8SeNI8a5wjeBX0rRjNPSPc1e%2B9LDjas8Uf6qk1bQw9u0QrzM8aoXSUzuME%2B0iZoynEDM&X-Amz-Signature=a6fef98f513e71817a11d41b056cea902f67d9d09619cf710e965663eec55a08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFWFWYQN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrJKr6rRbw4Rk8S%2BMQCcRqGm7bFtI9M98YurhqCBaragIgP4mu0hn3dfpEowR0E%2BO4Mq5genEHp7loSvlSFxUkTVEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK%2FWab0zMKpAs6S%2BbyrcA5J3TVb6udxQumyKkGm%2FP4rTMClmME14gLFpKUJ660aTx%2F2yhGfB1BQvs1zJKB7xlE6cH8%2BO0k2gxTWD2Mka9zCZKcUtRvw%2BRqdHF7ja6GKzi51gBnC72%2FMXOYFGxMErykrKNFhWGGJJUqfwzTgJYqtgLhrs7%2BKRThBxvarMATPkwjgH6hxZlM8YajsaCBFdvuEN7M6O%2Be25KtqbiQ%2FzEXkXmbGX3eOjKMAQhMfrURb%2B%2FwO9CANvwX6izEA%2B%2BwaQ3DTmD9U1kZglOklig68tN3SudCz4N2EkFmKsbMQoMF6x7G4EO14mL1L2IQ28CG3B%2BWIoDOQHaQjqM6jSiTkBRJp8oj9wvt1J9w1FbbwSLdiRXB6mTw3wlW5QykPSobUtQULfvB6Pb%2BGrs3iQ%2F9tm%2B%2FwPJ6euvvfySPzb%2Bpi49oU1hw8twzAzCy%2FBZCJSBq71SPpQ01og2ZMFUBAT17nwU%2FV0nxZuzVHcR22QLUoKN7INPf3uTpd5CEYZv7hlcENYmVXs31yUalNU2E8AywKlKHXSj5bcx%2BDbhpY0TXalUX2RjgjJWndZM37j2Tfhdr6PJ6FyOe959hNBtbrb1f27T7cC4xDcbOpCt2r%2BE3WsqPzybzYyJRBmwOkZqaqpML6B3cEGOqUBobbXSN1RLzyBxZMTABMTTe1kEB06h%2BqnTmJWd%2FYq5S4Dd4riqWGxVZe2rQ3Eae8zYqqyUgiYtEFoktGf8RgXx6RLQgN4320g02PDzvsCcAo8cdpPa5oGCFQSmZWzCxE8ZAujNMqKKZ23Sn5xG6oeRFUW8SeNI8a5wjeBX0rRjNPSPc1e%2B9LDjas8Uf6qk1bQw9u0QrzM8aoXSUzuME%2B0iZoynEDM&X-Amz-Signature=f4c97077fa7237e13f9849a4983acdf6dc2402551750349d8b0c3105bad7c897&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFWFWYQN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrJKr6rRbw4Rk8S%2BMQCcRqGm7bFtI9M98YurhqCBaragIgP4mu0hn3dfpEowR0E%2BO4Mq5genEHp7loSvlSFxUkTVEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK%2FWab0zMKpAs6S%2BbyrcA5J3TVb6udxQumyKkGm%2FP4rTMClmME14gLFpKUJ660aTx%2F2yhGfB1BQvs1zJKB7xlE6cH8%2BO0k2gxTWD2Mka9zCZKcUtRvw%2BRqdHF7ja6GKzi51gBnC72%2FMXOYFGxMErykrKNFhWGGJJUqfwzTgJYqtgLhrs7%2BKRThBxvarMATPkwjgH6hxZlM8YajsaCBFdvuEN7M6O%2Be25KtqbiQ%2FzEXkXmbGX3eOjKMAQhMfrURb%2B%2FwO9CANvwX6izEA%2B%2BwaQ3DTmD9U1kZglOklig68tN3SudCz4N2EkFmKsbMQoMF6x7G4EO14mL1L2IQ28CG3B%2BWIoDOQHaQjqM6jSiTkBRJp8oj9wvt1J9w1FbbwSLdiRXB6mTw3wlW5QykPSobUtQULfvB6Pb%2BGrs3iQ%2F9tm%2B%2FwPJ6euvvfySPzb%2Bpi49oU1hw8twzAzCy%2FBZCJSBq71SPpQ01og2ZMFUBAT17nwU%2FV0nxZuzVHcR22QLUoKN7INPf3uTpd5CEYZv7hlcENYmVXs31yUalNU2E8AywKlKHXSj5bcx%2BDbhpY0TXalUX2RjgjJWndZM37j2Tfhdr6PJ6FyOe959hNBtbrb1f27T7cC4xDcbOpCt2r%2BE3WsqPzybzYyJRBmwOkZqaqpML6B3cEGOqUBobbXSN1RLzyBxZMTABMTTe1kEB06h%2BqnTmJWd%2FYq5S4Dd4riqWGxVZe2rQ3Eae8zYqqyUgiYtEFoktGf8RgXx6RLQgN4320g02PDzvsCcAo8cdpPa5oGCFQSmZWzCxE8ZAujNMqKKZ23Sn5xG6oeRFUW8SeNI8a5wjeBX0rRjNPSPc1e%2B9LDjas8Uf6qk1bQw9u0QrzM8aoXSUzuME%2B0iZoynEDM&X-Amz-Signature=d8429e8ae93669247555a9581377741e854a0a206ec1b2ce31bf0ff6abfaa5aa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFWFWYQN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrJKr6rRbw4Rk8S%2BMQCcRqGm7bFtI9M98YurhqCBaragIgP4mu0hn3dfpEowR0E%2BO4Mq5genEHp7loSvlSFxUkTVEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK%2FWab0zMKpAs6S%2BbyrcA5J3TVb6udxQumyKkGm%2FP4rTMClmME14gLFpKUJ660aTx%2F2yhGfB1BQvs1zJKB7xlE6cH8%2BO0k2gxTWD2Mka9zCZKcUtRvw%2BRqdHF7ja6GKzi51gBnC72%2FMXOYFGxMErykrKNFhWGGJJUqfwzTgJYqtgLhrs7%2BKRThBxvarMATPkwjgH6hxZlM8YajsaCBFdvuEN7M6O%2Be25KtqbiQ%2FzEXkXmbGX3eOjKMAQhMfrURb%2B%2FwO9CANvwX6izEA%2B%2BwaQ3DTmD9U1kZglOklig68tN3SudCz4N2EkFmKsbMQoMF6x7G4EO14mL1L2IQ28CG3B%2BWIoDOQHaQjqM6jSiTkBRJp8oj9wvt1J9w1FbbwSLdiRXB6mTw3wlW5QykPSobUtQULfvB6Pb%2BGrs3iQ%2F9tm%2B%2FwPJ6euvvfySPzb%2Bpi49oU1hw8twzAzCy%2FBZCJSBq71SPpQ01og2ZMFUBAT17nwU%2FV0nxZuzVHcR22QLUoKN7INPf3uTpd5CEYZv7hlcENYmVXs31yUalNU2E8AywKlKHXSj5bcx%2BDbhpY0TXalUX2RjgjJWndZM37j2Tfhdr6PJ6FyOe959hNBtbrb1f27T7cC4xDcbOpCt2r%2BE3WsqPzybzYyJRBmwOkZqaqpML6B3cEGOqUBobbXSN1RLzyBxZMTABMTTe1kEB06h%2BqnTmJWd%2FYq5S4Dd4riqWGxVZe2rQ3Eae8zYqqyUgiYtEFoktGf8RgXx6RLQgN4320g02PDzvsCcAo8cdpPa5oGCFQSmZWzCxE8ZAujNMqKKZ23Sn5xG6oeRFUW8SeNI8a5wjeBX0rRjNPSPc1e%2B9LDjas8Uf6qk1bQw9u0QrzM8aoXSUzuME%2B0iZoynEDM&X-Amz-Signature=86e6b9b551771296bd26f5387aea39604ac168ddf1e68b88ff7001d182cc4b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFWFWYQN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrJKr6rRbw4Rk8S%2BMQCcRqGm7bFtI9M98YurhqCBaragIgP4mu0hn3dfpEowR0E%2BO4Mq5genEHp7loSvlSFxUkTVEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK%2FWab0zMKpAs6S%2BbyrcA5J3TVb6udxQumyKkGm%2FP4rTMClmME14gLFpKUJ660aTx%2F2yhGfB1BQvs1zJKB7xlE6cH8%2BO0k2gxTWD2Mka9zCZKcUtRvw%2BRqdHF7ja6GKzi51gBnC72%2FMXOYFGxMErykrKNFhWGGJJUqfwzTgJYqtgLhrs7%2BKRThBxvarMATPkwjgH6hxZlM8YajsaCBFdvuEN7M6O%2Be25KtqbiQ%2FzEXkXmbGX3eOjKMAQhMfrURb%2B%2FwO9CANvwX6izEA%2B%2BwaQ3DTmD9U1kZglOklig68tN3SudCz4N2EkFmKsbMQoMF6x7G4EO14mL1L2IQ28CG3B%2BWIoDOQHaQjqM6jSiTkBRJp8oj9wvt1J9w1FbbwSLdiRXB6mTw3wlW5QykPSobUtQULfvB6Pb%2BGrs3iQ%2F9tm%2B%2FwPJ6euvvfySPzb%2Bpi49oU1hw8twzAzCy%2FBZCJSBq71SPpQ01og2ZMFUBAT17nwU%2FV0nxZuzVHcR22QLUoKN7INPf3uTpd5CEYZv7hlcENYmVXs31yUalNU2E8AywKlKHXSj5bcx%2BDbhpY0TXalUX2RjgjJWndZM37j2Tfhdr6PJ6FyOe959hNBtbrb1f27T7cC4xDcbOpCt2r%2BE3WsqPzybzYyJRBmwOkZqaqpML6B3cEGOqUBobbXSN1RLzyBxZMTABMTTe1kEB06h%2BqnTmJWd%2FYq5S4Dd4riqWGxVZe2rQ3Eae8zYqqyUgiYtEFoktGf8RgXx6RLQgN4320g02PDzvsCcAo8cdpPa5oGCFQSmZWzCxE8ZAujNMqKKZ23Sn5xG6oeRFUW8SeNI8a5wjeBX0rRjNPSPc1e%2B9LDjas8Uf6qk1bQw9u0QrzM8aoXSUzuME%2B0iZoynEDM&X-Amz-Signature=980d53f3af493364f94d01257317b4accc8e300f8f1d09f4e3b801031f433182&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFWFWYQN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrJKr6rRbw4Rk8S%2BMQCcRqGm7bFtI9M98YurhqCBaragIgP4mu0hn3dfpEowR0E%2BO4Mq5genEHp7loSvlSFxUkTVEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK%2FWab0zMKpAs6S%2BbyrcA5J3TVb6udxQumyKkGm%2FP4rTMClmME14gLFpKUJ660aTx%2F2yhGfB1BQvs1zJKB7xlE6cH8%2BO0k2gxTWD2Mka9zCZKcUtRvw%2BRqdHF7ja6GKzi51gBnC72%2FMXOYFGxMErykrKNFhWGGJJUqfwzTgJYqtgLhrs7%2BKRThBxvarMATPkwjgH6hxZlM8YajsaCBFdvuEN7M6O%2Be25KtqbiQ%2FzEXkXmbGX3eOjKMAQhMfrURb%2B%2FwO9CANvwX6izEA%2B%2BwaQ3DTmD9U1kZglOklig68tN3SudCz4N2EkFmKsbMQoMF6x7G4EO14mL1L2IQ28CG3B%2BWIoDOQHaQjqM6jSiTkBRJp8oj9wvt1J9w1FbbwSLdiRXB6mTw3wlW5QykPSobUtQULfvB6Pb%2BGrs3iQ%2F9tm%2B%2FwPJ6euvvfySPzb%2Bpi49oU1hw8twzAzCy%2FBZCJSBq71SPpQ01og2ZMFUBAT17nwU%2FV0nxZuzVHcR22QLUoKN7INPf3uTpd5CEYZv7hlcENYmVXs31yUalNU2E8AywKlKHXSj5bcx%2BDbhpY0TXalUX2RjgjJWndZM37j2Tfhdr6PJ6FyOe959hNBtbrb1f27T7cC4xDcbOpCt2r%2BE3WsqPzybzYyJRBmwOkZqaqpML6B3cEGOqUBobbXSN1RLzyBxZMTABMTTe1kEB06h%2BqnTmJWd%2FYq5S4Dd4riqWGxVZe2rQ3Eae8zYqqyUgiYtEFoktGf8RgXx6RLQgN4320g02PDzvsCcAo8cdpPa5oGCFQSmZWzCxE8ZAujNMqKKZ23Sn5xG6oeRFUW8SeNI8a5wjeBX0rRjNPSPc1e%2B9LDjas8Uf6qk1bQw9u0QrzM8aoXSUzuME%2B0iZoynEDM&X-Amz-Signature=7f3cda7e8eda9f6eb0761d2261fd83e5ecc6e9165d44f063b60a8be9e878cd0d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFWFWYQN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrJKr6rRbw4Rk8S%2BMQCcRqGm7bFtI9M98YurhqCBaragIgP4mu0hn3dfpEowR0E%2BO4Mq5genEHp7loSvlSFxUkTVEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK%2FWab0zMKpAs6S%2BbyrcA5J3TVb6udxQumyKkGm%2FP4rTMClmME14gLFpKUJ660aTx%2F2yhGfB1BQvs1zJKB7xlE6cH8%2BO0k2gxTWD2Mka9zCZKcUtRvw%2BRqdHF7ja6GKzi51gBnC72%2FMXOYFGxMErykrKNFhWGGJJUqfwzTgJYqtgLhrs7%2BKRThBxvarMATPkwjgH6hxZlM8YajsaCBFdvuEN7M6O%2Be25KtqbiQ%2FzEXkXmbGX3eOjKMAQhMfrURb%2B%2FwO9CANvwX6izEA%2B%2BwaQ3DTmD9U1kZglOklig68tN3SudCz4N2EkFmKsbMQoMF6x7G4EO14mL1L2IQ28CG3B%2BWIoDOQHaQjqM6jSiTkBRJp8oj9wvt1J9w1FbbwSLdiRXB6mTw3wlW5QykPSobUtQULfvB6Pb%2BGrs3iQ%2F9tm%2B%2FwPJ6euvvfySPzb%2Bpi49oU1hw8twzAzCy%2FBZCJSBq71SPpQ01og2ZMFUBAT17nwU%2FV0nxZuzVHcR22QLUoKN7INPf3uTpd5CEYZv7hlcENYmVXs31yUalNU2E8AywKlKHXSj5bcx%2BDbhpY0TXalUX2RjgjJWndZM37j2Tfhdr6PJ6FyOe959hNBtbrb1f27T7cC4xDcbOpCt2r%2BE3WsqPzybzYyJRBmwOkZqaqpML6B3cEGOqUBobbXSN1RLzyBxZMTABMTTe1kEB06h%2BqnTmJWd%2FYq5S4Dd4riqWGxVZe2rQ3Eae8zYqqyUgiYtEFoktGf8RgXx6RLQgN4320g02PDzvsCcAo8cdpPa5oGCFQSmZWzCxE8ZAujNMqKKZ23Sn5xG6oeRFUW8SeNI8a5wjeBX0rRjNPSPc1e%2B9LDjas8Uf6qk1bQw9u0QrzM8aoXSUzuME%2B0iZoynEDM&X-Amz-Signature=b5702e7b733fda25629b3c3e86e6310863fb96880537fd66242b68537ea65cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

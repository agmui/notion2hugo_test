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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX35HIM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAcocy76vJoyi9HMILhfCTwI6BnQ7TQj3V2MqN97ccTAiEA%2BD7Jk6kMqpqySfkOLlyyOWfH5%2FQcZ6bhfolYIE852TIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDBswNEzz5hH6Yvl5ircAzSBsHpUBbeCsuCKXL%2Bm5kUgPQCr1vopHd1HvwSjSTaWJPeXUm8evofAY7lcpHn7Ammj4epAZTYpbGKPcibfyne1mgBxgthRoJ35YcSkLgzkZv7sRSRtlc6G6rN9T05XVgrX9%2BmYiWXqONQgmoncrPW1i2WE5nafxPjGtNScGT5dE%2FscpcuXh7Z77PoNp6y3elaDaiFp%2F%2FDrwvVp6uCRFSJY4wm%2BbSYnz%2FgqULKU9HMrDVvipL8UlC3fH36fU%2FlrACZQIMpQs1Aa7wZDOGjPChT514h%2BHWGr5%2BJOr9ZGg9%2FZYVTcUY9DMA79e0hNYH2l32a3%2B1evZwYs7H%2BJ74UwgvzPVsQnZa4rtgoQMUTAyQBWn9oyRe5kTycb%2BRrPokdVS%2Bnfick3VQMtL%2BiupcnZ7rphIZ6W5%2FuJVsdoTQb%2Bk255jWBE6OqpzX20GtcZleeW%2Fm80j3n7MNdgLwvl5qq5aHYnkulPZ4fmacI%2B6WccNGIkxuKJsNOpJEpFAKudslWL9jjGxvwM%2BgEsiu%2BpH22cheds3JFxX2yhkpUKcdUtnCMA1K1dFO6fwFgZnomMz8FEj0TvFoNyeWuYRSgTPOmWb8dBVHi%2Be7LLS%2FhniRRotbDc2iWnmjoDpvPpANMMMIWC2L4GOqUBqn356m7x7%2Bekwl8XqLjZCKbv6Ke81s4mpZEtowIpC%2FpoGjQTnZiwcZd%2FHVB2HbhBngxMJ86ZlptQyhabzK3pnKFVma63MxpT6CWo6Q6qoB9KgIgOHlj526Z%2FvKRlmaiiA5ckERGGetdwfC4oH3WaWgm%2FWyluP7VQzXCik3wAAGqBje9fbQ%2BH01woAJ9KfD3CruloKo1Y2tBQTE487nRwXel9cTBp&X-Amz-Signature=e47d4d6a02118c71d95d72597e70c9f1f87abbe854fc251923e89fee5b1f5ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX35HIM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAcocy76vJoyi9HMILhfCTwI6BnQ7TQj3V2MqN97ccTAiEA%2BD7Jk6kMqpqySfkOLlyyOWfH5%2FQcZ6bhfolYIE852TIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDBswNEzz5hH6Yvl5ircAzSBsHpUBbeCsuCKXL%2Bm5kUgPQCr1vopHd1HvwSjSTaWJPeXUm8evofAY7lcpHn7Ammj4epAZTYpbGKPcibfyne1mgBxgthRoJ35YcSkLgzkZv7sRSRtlc6G6rN9T05XVgrX9%2BmYiWXqONQgmoncrPW1i2WE5nafxPjGtNScGT5dE%2FscpcuXh7Z77PoNp6y3elaDaiFp%2F%2FDrwvVp6uCRFSJY4wm%2BbSYnz%2FgqULKU9HMrDVvipL8UlC3fH36fU%2FlrACZQIMpQs1Aa7wZDOGjPChT514h%2BHWGr5%2BJOr9ZGg9%2FZYVTcUY9DMA79e0hNYH2l32a3%2B1evZwYs7H%2BJ74UwgvzPVsQnZa4rtgoQMUTAyQBWn9oyRe5kTycb%2BRrPokdVS%2Bnfick3VQMtL%2BiupcnZ7rphIZ6W5%2FuJVsdoTQb%2Bk255jWBE6OqpzX20GtcZleeW%2Fm80j3n7MNdgLwvl5qq5aHYnkulPZ4fmacI%2B6WccNGIkxuKJsNOpJEpFAKudslWL9jjGxvwM%2BgEsiu%2BpH22cheds3JFxX2yhkpUKcdUtnCMA1K1dFO6fwFgZnomMz8FEj0TvFoNyeWuYRSgTPOmWb8dBVHi%2Be7LLS%2FhniRRotbDc2iWnmjoDpvPpANMMMIWC2L4GOqUBqn356m7x7%2Bekwl8XqLjZCKbv6Ke81s4mpZEtowIpC%2FpoGjQTnZiwcZd%2FHVB2HbhBngxMJ86ZlptQyhabzK3pnKFVma63MxpT6CWo6Q6qoB9KgIgOHlj526Z%2FvKRlmaiiA5ckERGGetdwfC4oH3WaWgm%2FWyluP7VQzXCik3wAAGqBje9fbQ%2BH01woAJ9KfD3CruloKo1Y2tBQTE487nRwXel9cTBp&X-Amz-Signature=a31ca6855289f3a4e7c7d163e98221f5d1ccc1d7b12193e0856462a5ba9e5b77&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX35HIM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAcocy76vJoyi9HMILhfCTwI6BnQ7TQj3V2MqN97ccTAiEA%2BD7Jk6kMqpqySfkOLlyyOWfH5%2FQcZ6bhfolYIE852TIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDBswNEzz5hH6Yvl5ircAzSBsHpUBbeCsuCKXL%2Bm5kUgPQCr1vopHd1HvwSjSTaWJPeXUm8evofAY7lcpHn7Ammj4epAZTYpbGKPcibfyne1mgBxgthRoJ35YcSkLgzkZv7sRSRtlc6G6rN9T05XVgrX9%2BmYiWXqONQgmoncrPW1i2WE5nafxPjGtNScGT5dE%2FscpcuXh7Z77PoNp6y3elaDaiFp%2F%2FDrwvVp6uCRFSJY4wm%2BbSYnz%2FgqULKU9HMrDVvipL8UlC3fH36fU%2FlrACZQIMpQs1Aa7wZDOGjPChT514h%2BHWGr5%2BJOr9ZGg9%2FZYVTcUY9DMA79e0hNYH2l32a3%2B1evZwYs7H%2BJ74UwgvzPVsQnZa4rtgoQMUTAyQBWn9oyRe5kTycb%2BRrPokdVS%2Bnfick3VQMtL%2BiupcnZ7rphIZ6W5%2FuJVsdoTQb%2Bk255jWBE6OqpzX20GtcZleeW%2Fm80j3n7MNdgLwvl5qq5aHYnkulPZ4fmacI%2B6WccNGIkxuKJsNOpJEpFAKudslWL9jjGxvwM%2BgEsiu%2BpH22cheds3JFxX2yhkpUKcdUtnCMA1K1dFO6fwFgZnomMz8FEj0TvFoNyeWuYRSgTPOmWb8dBVHi%2Be7LLS%2FhniRRotbDc2iWnmjoDpvPpANMMMIWC2L4GOqUBqn356m7x7%2Bekwl8XqLjZCKbv6Ke81s4mpZEtowIpC%2FpoGjQTnZiwcZd%2FHVB2HbhBngxMJ86ZlptQyhabzK3pnKFVma63MxpT6CWo6Q6qoB9KgIgOHlj526Z%2FvKRlmaiiA5ckERGGetdwfC4oH3WaWgm%2FWyluP7VQzXCik3wAAGqBje9fbQ%2BH01woAJ9KfD3CruloKo1Y2tBQTE487nRwXel9cTBp&X-Amz-Signature=aad55cdb3d8819261943c886f63a4c8095ce9e5387836675ae09d502f8e407b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX35HIM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAcocy76vJoyi9HMILhfCTwI6BnQ7TQj3V2MqN97ccTAiEA%2BD7Jk6kMqpqySfkOLlyyOWfH5%2FQcZ6bhfolYIE852TIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDBswNEzz5hH6Yvl5ircAzSBsHpUBbeCsuCKXL%2Bm5kUgPQCr1vopHd1HvwSjSTaWJPeXUm8evofAY7lcpHn7Ammj4epAZTYpbGKPcibfyne1mgBxgthRoJ35YcSkLgzkZv7sRSRtlc6G6rN9T05XVgrX9%2BmYiWXqONQgmoncrPW1i2WE5nafxPjGtNScGT5dE%2FscpcuXh7Z77PoNp6y3elaDaiFp%2F%2FDrwvVp6uCRFSJY4wm%2BbSYnz%2FgqULKU9HMrDVvipL8UlC3fH36fU%2FlrACZQIMpQs1Aa7wZDOGjPChT514h%2BHWGr5%2BJOr9ZGg9%2FZYVTcUY9DMA79e0hNYH2l32a3%2B1evZwYs7H%2BJ74UwgvzPVsQnZa4rtgoQMUTAyQBWn9oyRe5kTycb%2BRrPokdVS%2Bnfick3VQMtL%2BiupcnZ7rphIZ6W5%2FuJVsdoTQb%2Bk255jWBE6OqpzX20GtcZleeW%2Fm80j3n7MNdgLwvl5qq5aHYnkulPZ4fmacI%2B6WccNGIkxuKJsNOpJEpFAKudslWL9jjGxvwM%2BgEsiu%2BpH22cheds3JFxX2yhkpUKcdUtnCMA1K1dFO6fwFgZnomMz8FEj0TvFoNyeWuYRSgTPOmWb8dBVHi%2Be7LLS%2FhniRRotbDc2iWnmjoDpvPpANMMMIWC2L4GOqUBqn356m7x7%2Bekwl8XqLjZCKbv6Ke81s4mpZEtowIpC%2FpoGjQTnZiwcZd%2FHVB2HbhBngxMJ86ZlptQyhabzK3pnKFVma63MxpT6CWo6Q6qoB9KgIgOHlj526Z%2FvKRlmaiiA5ckERGGetdwfC4oH3WaWgm%2FWyluP7VQzXCik3wAAGqBje9fbQ%2BH01woAJ9KfD3CruloKo1Y2tBQTE487nRwXel9cTBp&X-Amz-Signature=66d69d233534d3b578002eabd8ccc89eec6668fb0eaca826093c164d3cd6b1b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX35HIM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAcocy76vJoyi9HMILhfCTwI6BnQ7TQj3V2MqN97ccTAiEA%2BD7Jk6kMqpqySfkOLlyyOWfH5%2FQcZ6bhfolYIE852TIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDBswNEzz5hH6Yvl5ircAzSBsHpUBbeCsuCKXL%2Bm5kUgPQCr1vopHd1HvwSjSTaWJPeXUm8evofAY7lcpHn7Ammj4epAZTYpbGKPcibfyne1mgBxgthRoJ35YcSkLgzkZv7sRSRtlc6G6rN9T05XVgrX9%2BmYiWXqONQgmoncrPW1i2WE5nafxPjGtNScGT5dE%2FscpcuXh7Z77PoNp6y3elaDaiFp%2F%2FDrwvVp6uCRFSJY4wm%2BbSYnz%2FgqULKU9HMrDVvipL8UlC3fH36fU%2FlrACZQIMpQs1Aa7wZDOGjPChT514h%2BHWGr5%2BJOr9ZGg9%2FZYVTcUY9DMA79e0hNYH2l32a3%2B1evZwYs7H%2BJ74UwgvzPVsQnZa4rtgoQMUTAyQBWn9oyRe5kTycb%2BRrPokdVS%2Bnfick3VQMtL%2BiupcnZ7rphIZ6W5%2FuJVsdoTQb%2Bk255jWBE6OqpzX20GtcZleeW%2Fm80j3n7MNdgLwvl5qq5aHYnkulPZ4fmacI%2B6WccNGIkxuKJsNOpJEpFAKudslWL9jjGxvwM%2BgEsiu%2BpH22cheds3JFxX2yhkpUKcdUtnCMA1K1dFO6fwFgZnomMz8FEj0TvFoNyeWuYRSgTPOmWb8dBVHi%2Be7LLS%2FhniRRotbDc2iWnmjoDpvPpANMMMIWC2L4GOqUBqn356m7x7%2Bekwl8XqLjZCKbv6Ke81s4mpZEtowIpC%2FpoGjQTnZiwcZd%2FHVB2HbhBngxMJ86ZlptQyhabzK3pnKFVma63MxpT6CWo6Q6qoB9KgIgOHlj526Z%2FvKRlmaiiA5ckERGGetdwfC4oH3WaWgm%2FWyluP7VQzXCik3wAAGqBje9fbQ%2BH01woAJ9KfD3CruloKo1Y2tBQTE487nRwXel9cTBp&X-Amz-Signature=b3b894cd8a08352e729de46e1b51050b57dc16bdf43d831abdb7d9e0fffeb57a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX35HIM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAcocy76vJoyi9HMILhfCTwI6BnQ7TQj3V2MqN97ccTAiEA%2BD7Jk6kMqpqySfkOLlyyOWfH5%2FQcZ6bhfolYIE852TIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDBswNEzz5hH6Yvl5ircAzSBsHpUBbeCsuCKXL%2Bm5kUgPQCr1vopHd1HvwSjSTaWJPeXUm8evofAY7lcpHn7Ammj4epAZTYpbGKPcibfyne1mgBxgthRoJ35YcSkLgzkZv7sRSRtlc6G6rN9T05XVgrX9%2BmYiWXqONQgmoncrPW1i2WE5nafxPjGtNScGT5dE%2FscpcuXh7Z77PoNp6y3elaDaiFp%2F%2FDrwvVp6uCRFSJY4wm%2BbSYnz%2FgqULKU9HMrDVvipL8UlC3fH36fU%2FlrACZQIMpQs1Aa7wZDOGjPChT514h%2BHWGr5%2BJOr9ZGg9%2FZYVTcUY9DMA79e0hNYH2l32a3%2B1evZwYs7H%2BJ74UwgvzPVsQnZa4rtgoQMUTAyQBWn9oyRe5kTycb%2BRrPokdVS%2Bnfick3VQMtL%2BiupcnZ7rphIZ6W5%2FuJVsdoTQb%2Bk255jWBE6OqpzX20GtcZleeW%2Fm80j3n7MNdgLwvl5qq5aHYnkulPZ4fmacI%2B6WccNGIkxuKJsNOpJEpFAKudslWL9jjGxvwM%2BgEsiu%2BpH22cheds3JFxX2yhkpUKcdUtnCMA1K1dFO6fwFgZnomMz8FEj0TvFoNyeWuYRSgTPOmWb8dBVHi%2Be7LLS%2FhniRRotbDc2iWnmjoDpvPpANMMMIWC2L4GOqUBqn356m7x7%2Bekwl8XqLjZCKbv6Ke81s4mpZEtowIpC%2FpoGjQTnZiwcZd%2FHVB2HbhBngxMJ86ZlptQyhabzK3pnKFVma63MxpT6CWo6Q6qoB9KgIgOHlj526Z%2FvKRlmaiiA5ckERGGetdwfC4oH3WaWgm%2FWyluP7VQzXCik3wAAGqBje9fbQ%2BH01woAJ9KfD3CruloKo1Y2tBQTE487nRwXel9cTBp&X-Amz-Signature=e82dab4ee7d7f14df43b47a61397d8ad6658c2abfdeba781c4c98b8f3229633d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX35HIM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAcocy76vJoyi9HMILhfCTwI6BnQ7TQj3V2MqN97ccTAiEA%2BD7Jk6kMqpqySfkOLlyyOWfH5%2FQcZ6bhfolYIE852TIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDBswNEzz5hH6Yvl5ircAzSBsHpUBbeCsuCKXL%2Bm5kUgPQCr1vopHd1HvwSjSTaWJPeXUm8evofAY7lcpHn7Ammj4epAZTYpbGKPcibfyne1mgBxgthRoJ35YcSkLgzkZv7sRSRtlc6G6rN9T05XVgrX9%2BmYiWXqONQgmoncrPW1i2WE5nafxPjGtNScGT5dE%2FscpcuXh7Z77PoNp6y3elaDaiFp%2F%2FDrwvVp6uCRFSJY4wm%2BbSYnz%2FgqULKU9HMrDVvipL8UlC3fH36fU%2FlrACZQIMpQs1Aa7wZDOGjPChT514h%2BHWGr5%2BJOr9ZGg9%2FZYVTcUY9DMA79e0hNYH2l32a3%2B1evZwYs7H%2BJ74UwgvzPVsQnZa4rtgoQMUTAyQBWn9oyRe5kTycb%2BRrPokdVS%2Bnfick3VQMtL%2BiupcnZ7rphIZ6W5%2FuJVsdoTQb%2Bk255jWBE6OqpzX20GtcZleeW%2Fm80j3n7MNdgLwvl5qq5aHYnkulPZ4fmacI%2B6WccNGIkxuKJsNOpJEpFAKudslWL9jjGxvwM%2BgEsiu%2BpH22cheds3JFxX2yhkpUKcdUtnCMA1K1dFO6fwFgZnomMz8FEj0TvFoNyeWuYRSgTPOmWb8dBVHi%2Be7LLS%2FhniRRotbDc2iWnmjoDpvPpANMMMIWC2L4GOqUBqn356m7x7%2Bekwl8XqLjZCKbv6Ke81s4mpZEtowIpC%2FpoGjQTnZiwcZd%2FHVB2HbhBngxMJ86ZlptQyhabzK3pnKFVma63MxpT6CWo6Q6qoB9KgIgOHlj526Z%2FvKRlmaiiA5ckERGGetdwfC4oH3WaWgm%2FWyluP7VQzXCik3wAAGqBje9fbQ%2BH01woAJ9KfD3CruloKo1Y2tBQTE487nRwXel9cTBp&X-Amz-Signature=911f8ef3321463ea8dedf99c788d375e5f5e91f14545010af4994ea9894a1d62&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

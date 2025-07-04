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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QUUGS7P%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBtQ9lU38Y6po%2FBCHCV5KnYlA9vvMHVCrBjdvWMjPjxuAiEA6S%2Bkqb2IV1WJQcj%2FkTI8tdPiOMZhYcw%2BmR%2BAttD6ulAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKvbydQ22YlsdM1aXCrcA4j7JEggLotUKeSyfYCbExcycbl0OtV3RLTHozEQvyzJyPDU9ryYv6uE88fyRpxPGfNlP0Qiote8hS08Lf%2BzlP8QYrUbujvicYBc5vbkZpeGjkpiXlDJsvo4M40bCEJnL7viQmzALLnLNl7FapF5wNu6gGuqFkwoDBm%2FsJIM%2F6ipypSOYs7Guhu99osmkIJ8TRIgwHfh79jlJ8veYScNOB%2Fbz%2BjKs4C6KEeTK%2BiOfnZUcdL90wrw%2BAt%2BwlzuAbvtJlHPl6OrO3C64lZU1Oo8UBP8%2F%2BOYkaVunsesOseaOYxm9VoDrwBwmjd6QfdG2u5mR3SEYCmyRI5GKCE6Ox5MR6%2BaCpA2rF0Asr4wm49%2FUJXLyYXdbhkhJn%2BF8WKKDKQmmWqseI0U6YRqbZFE%2FCSmaL8Uh9xp3Gfo7jZNUtHv7uhOlj79mb2l5%2BfedHsZ9MJF2M%2BmKknbu8EIwtiex5W3qv2oHXPMEEORYu58b%2BEm65CM6YsrM%2B485jZnhcLfI4ObAmcuUD7H1bEXbjo95KDSlip0X55XZyNvWYtOWCbhYtBBJEU9%2FYmaK03chZIH8hbQvkluv3OtDxh6dmx8A2bGYmt3ZyLgHmeNZ9J6m6hL8X7g6lv62piueBYY1VrGMIScn8MGOqUBLqjX3YiS36Y60nAyYJYieAaxRnnsI%2BT%2BEUAsGRhEsVkVxW0E8FnhAIWrEcydTTTRV76ej1E7MG%2BinazSojE1yiILTvbgJSDIvEirnhFAb5vt1eY9ifIQRt5WiuV7dwChZUMJIgWRlST5rcNoMJwkxb6tVoNLmhm%2BP60k5HjrSrWzYbZbnIAezV%2BO1gM6jlK%2FQBhHmNBzYBUv3C%2BM3ZMyvewNyV5l&X-Amz-Signature=8e43fa58ca1c06abbaaf831e55827618ec846826ad1b4e3094b275fcfe79a16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QUUGS7P%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBtQ9lU38Y6po%2FBCHCV5KnYlA9vvMHVCrBjdvWMjPjxuAiEA6S%2Bkqb2IV1WJQcj%2FkTI8tdPiOMZhYcw%2BmR%2BAttD6ulAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKvbydQ22YlsdM1aXCrcA4j7JEggLotUKeSyfYCbExcycbl0OtV3RLTHozEQvyzJyPDU9ryYv6uE88fyRpxPGfNlP0Qiote8hS08Lf%2BzlP8QYrUbujvicYBc5vbkZpeGjkpiXlDJsvo4M40bCEJnL7viQmzALLnLNl7FapF5wNu6gGuqFkwoDBm%2FsJIM%2F6ipypSOYs7Guhu99osmkIJ8TRIgwHfh79jlJ8veYScNOB%2Fbz%2BjKs4C6KEeTK%2BiOfnZUcdL90wrw%2BAt%2BwlzuAbvtJlHPl6OrO3C64lZU1Oo8UBP8%2F%2BOYkaVunsesOseaOYxm9VoDrwBwmjd6QfdG2u5mR3SEYCmyRI5GKCE6Ox5MR6%2BaCpA2rF0Asr4wm49%2FUJXLyYXdbhkhJn%2BF8WKKDKQmmWqseI0U6YRqbZFE%2FCSmaL8Uh9xp3Gfo7jZNUtHv7uhOlj79mb2l5%2BfedHsZ9MJF2M%2BmKknbu8EIwtiex5W3qv2oHXPMEEORYu58b%2BEm65CM6YsrM%2B485jZnhcLfI4ObAmcuUD7H1bEXbjo95KDSlip0X55XZyNvWYtOWCbhYtBBJEU9%2FYmaK03chZIH8hbQvkluv3OtDxh6dmx8A2bGYmt3ZyLgHmeNZ9J6m6hL8X7g6lv62piueBYY1VrGMIScn8MGOqUBLqjX3YiS36Y60nAyYJYieAaxRnnsI%2BT%2BEUAsGRhEsVkVxW0E8FnhAIWrEcydTTTRV76ej1E7MG%2BinazSojE1yiILTvbgJSDIvEirnhFAb5vt1eY9ifIQRt5WiuV7dwChZUMJIgWRlST5rcNoMJwkxb6tVoNLmhm%2BP60k5HjrSrWzYbZbnIAezV%2BO1gM6jlK%2FQBhHmNBzYBUv3C%2BM3ZMyvewNyV5l&X-Amz-Signature=20f7837c77e39c3172433ccff72a4b5e5d349d4061bbd8c61ad585f99ede783d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QUUGS7P%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBtQ9lU38Y6po%2FBCHCV5KnYlA9vvMHVCrBjdvWMjPjxuAiEA6S%2Bkqb2IV1WJQcj%2FkTI8tdPiOMZhYcw%2BmR%2BAttD6ulAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKvbydQ22YlsdM1aXCrcA4j7JEggLotUKeSyfYCbExcycbl0OtV3RLTHozEQvyzJyPDU9ryYv6uE88fyRpxPGfNlP0Qiote8hS08Lf%2BzlP8QYrUbujvicYBc5vbkZpeGjkpiXlDJsvo4M40bCEJnL7viQmzALLnLNl7FapF5wNu6gGuqFkwoDBm%2FsJIM%2F6ipypSOYs7Guhu99osmkIJ8TRIgwHfh79jlJ8veYScNOB%2Fbz%2BjKs4C6KEeTK%2BiOfnZUcdL90wrw%2BAt%2BwlzuAbvtJlHPl6OrO3C64lZU1Oo8UBP8%2F%2BOYkaVunsesOseaOYxm9VoDrwBwmjd6QfdG2u5mR3SEYCmyRI5GKCE6Ox5MR6%2BaCpA2rF0Asr4wm49%2FUJXLyYXdbhkhJn%2BF8WKKDKQmmWqseI0U6YRqbZFE%2FCSmaL8Uh9xp3Gfo7jZNUtHv7uhOlj79mb2l5%2BfedHsZ9MJF2M%2BmKknbu8EIwtiex5W3qv2oHXPMEEORYu58b%2BEm65CM6YsrM%2B485jZnhcLfI4ObAmcuUD7H1bEXbjo95KDSlip0X55XZyNvWYtOWCbhYtBBJEU9%2FYmaK03chZIH8hbQvkluv3OtDxh6dmx8A2bGYmt3ZyLgHmeNZ9J6m6hL8X7g6lv62piueBYY1VrGMIScn8MGOqUBLqjX3YiS36Y60nAyYJYieAaxRnnsI%2BT%2BEUAsGRhEsVkVxW0E8FnhAIWrEcydTTTRV76ej1E7MG%2BinazSojE1yiILTvbgJSDIvEirnhFAb5vt1eY9ifIQRt5WiuV7dwChZUMJIgWRlST5rcNoMJwkxb6tVoNLmhm%2BP60k5HjrSrWzYbZbnIAezV%2BO1gM6jlK%2FQBhHmNBzYBUv3C%2BM3ZMyvewNyV5l&X-Amz-Signature=e1a15bd00f7ba881f3feb9241ab4c7e2d3394c9a1fad32c907eb8ad8a3efdf5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QUUGS7P%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBtQ9lU38Y6po%2FBCHCV5KnYlA9vvMHVCrBjdvWMjPjxuAiEA6S%2Bkqb2IV1WJQcj%2FkTI8tdPiOMZhYcw%2BmR%2BAttD6ulAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKvbydQ22YlsdM1aXCrcA4j7JEggLotUKeSyfYCbExcycbl0OtV3RLTHozEQvyzJyPDU9ryYv6uE88fyRpxPGfNlP0Qiote8hS08Lf%2BzlP8QYrUbujvicYBc5vbkZpeGjkpiXlDJsvo4M40bCEJnL7viQmzALLnLNl7FapF5wNu6gGuqFkwoDBm%2FsJIM%2F6ipypSOYs7Guhu99osmkIJ8TRIgwHfh79jlJ8veYScNOB%2Fbz%2BjKs4C6KEeTK%2BiOfnZUcdL90wrw%2BAt%2BwlzuAbvtJlHPl6OrO3C64lZU1Oo8UBP8%2F%2BOYkaVunsesOseaOYxm9VoDrwBwmjd6QfdG2u5mR3SEYCmyRI5GKCE6Ox5MR6%2BaCpA2rF0Asr4wm49%2FUJXLyYXdbhkhJn%2BF8WKKDKQmmWqseI0U6YRqbZFE%2FCSmaL8Uh9xp3Gfo7jZNUtHv7uhOlj79mb2l5%2BfedHsZ9MJF2M%2BmKknbu8EIwtiex5W3qv2oHXPMEEORYu58b%2BEm65CM6YsrM%2B485jZnhcLfI4ObAmcuUD7H1bEXbjo95KDSlip0X55XZyNvWYtOWCbhYtBBJEU9%2FYmaK03chZIH8hbQvkluv3OtDxh6dmx8A2bGYmt3ZyLgHmeNZ9J6m6hL8X7g6lv62piueBYY1VrGMIScn8MGOqUBLqjX3YiS36Y60nAyYJYieAaxRnnsI%2BT%2BEUAsGRhEsVkVxW0E8FnhAIWrEcydTTTRV76ej1E7MG%2BinazSojE1yiILTvbgJSDIvEirnhFAb5vt1eY9ifIQRt5WiuV7dwChZUMJIgWRlST5rcNoMJwkxb6tVoNLmhm%2BP60k5HjrSrWzYbZbnIAezV%2BO1gM6jlK%2FQBhHmNBzYBUv3C%2BM3ZMyvewNyV5l&X-Amz-Signature=e6a50657d87f0b8626bc80451acebadcce7cbee2e6dc6caac430152b04bf5b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QUUGS7P%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBtQ9lU38Y6po%2FBCHCV5KnYlA9vvMHVCrBjdvWMjPjxuAiEA6S%2Bkqb2IV1WJQcj%2FkTI8tdPiOMZhYcw%2BmR%2BAttD6ulAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKvbydQ22YlsdM1aXCrcA4j7JEggLotUKeSyfYCbExcycbl0OtV3RLTHozEQvyzJyPDU9ryYv6uE88fyRpxPGfNlP0Qiote8hS08Lf%2BzlP8QYrUbujvicYBc5vbkZpeGjkpiXlDJsvo4M40bCEJnL7viQmzALLnLNl7FapF5wNu6gGuqFkwoDBm%2FsJIM%2F6ipypSOYs7Guhu99osmkIJ8TRIgwHfh79jlJ8veYScNOB%2Fbz%2BjKs4C6KEeTK%2BiOfnZUcdL90wrw%2BAt%2BwlzuAbvtJlHPl6OrO3C64lZU1Oo8UBP8%2F%2BOYkaVunsesOseaOYxm9VoDrwBwmjd6QfdG2u5mR3SEYCmyRI5GKCE6Ox5MR6%2BaCpA2rF0Asr4wm49%2FUJXLyYXdbhkhJn%2BF8WKKDKQmmWqseI0U6YRqbZFE%2FCSmaL8Uh9xp3Gfo7jZNUtHv7uhOlj79mb2l5%2BfedHsZ9MJF2M%2BmKknbu8EIwtiex5W3qv2oHXPMEEORYu58b%2BEm65CM6YsrM%2B485jZnhcLfI4ObAmcuUD7H1bEXbjo95KDSlip0X55XZyNvWYtOWCbhYtBBJEU9%2FYmaK03chZIH8hbQvkluv3OtDxh6dmx8A2bGYmt3ZyLgHmeNZ9J6m6hL8X7g6lv62piueBYY1VrGMIScn8MGOqUBLqjX3YiS36Y60nAyYJYieAaxRnnsI%2BT%2BEUAsGRhEsVkVxW0E8FnhAIWrEcydTTTRV76ej1E7MG%2BinazSojE1yiILTvbgJSDIvEirnhFAb5vt1eY9ifIQRt5WiuV7dwChZUMJIgWRlST5rcNoMJwkxb6tVoNLmhm%2BP60k5HjrSrWzYbZbnIAezV%2BO1gM6jlK%2FQBhHmNBzYBUv3C%2BM3ZMyvewNyV5l&X-Amz-Signature=6a0ea6505b300814a0f9c94744b8bfaf22abb3ca49bb752b1115681f49c2785d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QUUGS7P%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBtQ9lU38Y6po%2FBCHCV5KnYlA9vvMHVCrBjdvWMjPjxuAiEA6S%2Bkqb2IV1WJQcj%2FkTI8tdPiOMZhYcw%2BmR%2BAttD6ulAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKvbydQ22YlsdM1aXCrcA4j7JEggLotUKeSyfYCbExcycbl0OtV3RLTHozEQvyzJyPDU9ryYv6uE88fyRpxPGfNlP0Qiote8hS08Lf%2BzlP8QYrUbujvicYBc5vbkZpeGjkpiXlDJsvo4M40bCEJnL7viQmzALLnLNl7FapF5wNu6gGuqFkwoDBm%2FsJIM%2F6ipypSOYs7Guhu99osmkIJ8TRIgwHfh79jlJ8veYScNOB%2Fbz%2BjKs4C6KEeTK%2BiOfnZUcdL90wrw%2BAt%2BwlzuAbvtJlHPl6OrO3C64lZU1Oo8UBP8%2F%2BOYkaVunsesOseaOYxm9VoDrwBwmjd6QfdG2u5mR3SEYCmyRI5GKCE6Ox5MR6%2BaCpA2rF0Asr4wm49%2FUJXLyYXdbhkhJn%2BF8WKKDKQmmWqseI0U6YRqbZFE%2FCSmaL8Uh9xp3Gfo7jZNUtHv7uhOlj79mb2l5%2BfedHsZ9MJF2M%2BmKknbu8EIwtiex5W3qv2oHXPMEEORYu58b%2BEm65CM6YsrM%2B485jZnhcLfI4ObAmcuUD7H1bEXbjo95KDSlip0X55XZyNvWYtOWCbhYtBBJEU9%2FYmaK03chZIH8hbQvkluv3OtDxh6dmx8A2bGYmt3ZyLgHmeNZ9J6m6hL8X7g6lv62piueBYY1VrGMIScn8MGOqUBLqjX3YiS36Y60nAyYJYieAaxRnnsI%2BT%2BEUAsGRhEsVkVxW0E8FnhAIWrEcydTTTRV76ej1E7MG%2BinazSojE1yiILTvbgJSDIvEirnhFAb5vt1eY9ifIQRt5WiuV7dwChZUMJIgWRlST5rcNoMJwkxb6tVoNLmhm%2BP60k5HjrSrWzYbZbnIAezV%2BO1gM6jlK%2FQBhHmNBzYBUv3C%2BM3ZMyvewNyV5l&X-Amz-Signature=e687e46154f0487f9a9cc2acdc0faca509f3c14e21cc32a915366cb16b20e686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QUUGS7P%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBtQ9lU38Y6po%2FBCHCV5KnYlA9vvMHVCrBjdvWMjPjxuAiEA6S%2Bkqb2IV1WJQcj%2FkTI8tdPiOMZhYcw%2BmR%2BAttD6ulAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKvbydQ22YlsdM1aXCrcA4j7JEggLotUKeSyfYCbExcycbl0OtV3RLTHozEQvyzJyPDU9ryYv6uE88fyRpxPGfNlP0Qiote8hS08Lf%2BzlP8QYrUbujvicYBc5vbkZpeGjkpiXlDJsvo4M40bCEJnL7viQmzALLnLNl7FapF5wNu6gGuqFkwoDBm%2FsJIM%2F6ipypSOYs7Guhu99osmkIJ8TRIgwHfh79jlJ8veYScNOB%2Fbz%2BjKs4C6KEeTK%2BiOfnZUcdL90wrw%2BAt%2BwlzuAbvtJlHPl6OrO3C64lZU1Oo8UBP8%2F%2BOYkaVunsesOseaOYxm9VoDrwBwmjd6QfdG2u5mR3SEYCmyRI5GKCE6Ox5MR6%2BaCpA2rF0Asr4wm49%2FUJXLyYXdbhkhJn%2BF8WKKDKQmmWqseI0U6YRqbZFE%2FCSmaL8Uh9xp3Gfo7jZNUtHv7uhOlj79mb2l5%2BfedHsZ9MJF2M%2BmKknbu8EIwtiex5W3qv2oHXPMEEORYu58b%2BEm65CM6YsrM%2B485jZnhcLfI4ObAmcuUD7H1bEXbjo95KDSlip0X55XZyNvWYtOWCbhYtBBJEU9%2FYmaK03chZIH8hbQvkluv3OtDxh6dmx8A2bGYmt3ZyLgHmeNZ9J6m6hL8X7g6lv62piueBYY1VrGMIScn8MGOqUBLqjX3YiS36Y60nAyYJYieAaxRnnsI%2BT%2BEUAsGRhEsVkVxW0E8FnhAIWrEcydTTTRV76ej1E7MG%2BinazSojE1yiILTvbgJSDIvEirnhFAb5vt1eY9ifIQRt5WiuV7dwChZUMJIgWRlST5rcNoMJwkxb6tVoNLmhm%2BP60k5HjrSrWzYbZbnIAezV%2BO1gM6jlK%2FQBhHmNBzYBUv3C%2BM3ZMyvewNyV5l&X-Amz-Signature=751494782768f03f79c4762fd2e052a93fae8f6e7f4023a0b7971f4492b09185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

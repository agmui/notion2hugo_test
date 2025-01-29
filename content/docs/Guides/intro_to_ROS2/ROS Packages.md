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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVRYE7R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw5Pj1hEf%2FGJ%2FXd7j074IrgPOlFvw8SOzKjtcAXZDAnAiEAlqNKBCMAopKZOCEmMFN0%2Bd3c2PHXBZGLQGXqGHRgl8MqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BLVCXKH1uEwWTgACrcA55sH156tl3auGi3XDLEgEaADvPpj8HEM3qtepj9IYLF2biLqVf%2Bwecieb3OmkQbad8NRKvJa%2Fzg0A4oR3vmyZ8yMYjnpjbQh3a%2FAH0I8rQdWXkerOMOFjzDKWaHGv1KmhZQMY9SW7kWWHS7FSUqB%2Ba6%2B4f82Pnk%2B0frp3FE%2F%2F%2F1kanfVAWRC7z9yNomEpIr%2BDseDhWe9RH%2Fv7NA7ne8ZbOMcmloJgsLi9zQyvlh4YIDhzwhUVjBFKnK2GNbNmFUhUaZr5ak2izfjX%2FyRLCZibDzwL5eBz3cE2Vrq5bAQ8PoIWrJ81rlcvJSc5vSXSCilC5LPTagcdWgH6uZi7Te0%2F4r%2FxTaS1oe2rfKuzLQXyCiFW4CMzq4Pu0O0X6vGzVVImO7AzmoBpYNc1RYCTtwiu364m0ggkSUyo8cI6DQGTcG9CqbmzmF%2BweeTi3LuPg2P7ddP9AMTsencJzjIJ%2FV66NnV9P6yuAej5gT3T1aABcJOf9oVy18nJhjhpSWhAA2DZoVQam1V9gnmUyzCI346q5MWlck5GZ2LKEm9QExYi8ZYG8IOt%2F9eOIuuUqiEg%2FgC8egstrG6vW5nCT%2Bvd1ZMzT5Ur02ZCIaPcVu8oB7FZ%2B4xo0lNbEaADfzk4W%2FMKLm57wGOqUBV84PYPMn0W5xkGyyja4jgOo5UWHPJPDotXfPn9%2BnaXfSlevFjRfYz1isfRcrWy4rJSLYT5RWpfC%2Fa5rNwmNh3sVo%2F4SJuSthAF8MRQjBuFxrM8%2B5y4obYjFqcanoEfIaoQ%2BFKZyyCUWq62iB8M4vBple8ktuYpAc%2Fxkxb67ulN2D03xmGDzZWe7wIGiMtfrWMUzGmflI5bR9k%2BL891rkl21g8B11&X-Amz-Signature=d9fc6bafdabfc22afc70d64bb138f0df9b385c8ce8892131de0e8bd142a18996&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVRYE7R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw5Pj1hEf%2FGJ%2FXd7j074IrgPOlFvw8SOzKjtcAXZDAnAiEAlqNKBCMAopKZOCEmMFN0%2Bd3c2PHXBZGLQGXqGHRgl8MqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BLVCXKH1uEwWTgACrcA55sH156tl3auGi3XDLEgEaADvPpj8HEM3qtepj9IYLF2biLqVf%2Bwecieb3OmkQbad8NRKvJa%2Fzg0A4oR3vmyZ8yMYjnpjbQh3a%2FAH0I8rQdWXkerOMOFjzDKWaHGv1KmhZQMY9SW7kWWHS7FSUqB%2Ba6%2B4f82Pnk%2B0frp3FE%2F%2F%2F1kanfVAWRC7z9yNomEpIr%2BDseDhWe9RH%2Fv7NA7ne8ZbOMcmloJgsLi9zQyvlh4YIDhzwhUVjBFKnK2GNbNmFUhUaZr5ak2izfjX%2FyRLCZibDzwL5eBz3cE2Vrq5bAQ8PoIWrJ81rlcvJSc5vSXSCilC5LPTagcdWgH6uZi7Te0%2F4r%2FxTaS1oe2rfKuzLQXyCiFW4CMzq4Pu0O0X6vGzVVImO7AzmoBpYNc1RYCTtwiu364m0ggkSUyo8cI6DQGTcG9CqbmzmF%2BweeTi3LuPg2P7ddP9AMTsencJzjIJ%2FV66NnV9P6yuAej5gT3T1aABcJOf9oVy18nJhjhpSWhAA2DZoVQam1V9gnmUyzCI346q5MWlck5GZ2LKEm9QExYi8ZYG8IOt%2F9eOIuuUqiEg%2FgC8egstrG6vW5nCT%2Bvd1ZMzT5Ur02ZCIaPcVu8oB7FZ%2B4xo0lNbEaADfzk4W%2FMKLm57wGOqUBV84PYPMn0W5xkGyyja4jgOo5UWHPJPDotXfPn9%2BnaXfSlevFjRfYz1isfRcrWy4rJSLYT5RWpfC%2Fa5rNwmNh3sVo%2F4SJuSthAF8MRQjBuFxrM8%2B5y4obYjFqcanoEfIaoQ%2BFKZyyCUWq62iB8M4vBple8ktuYpAc%2Fxkxb67ulN2D03xmGDzZWe7wIGiMtfrWMUzGmflI5bR9k%2BL891rkl21g8B11&X-Amz-Signature=5dbc1fe623405c7e64e360e6842aecbe5d1d70c65083a416ab0fd9ca4b82597b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVRYE7R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw5Pj1hEf%2FGJ%2FXd7j074IrgPOlFvw8SOzKjtcAXZDAnAiEAlqNKBCMAopKZOCEmMFN0%2Bd3c2PHXBZGLQGXqGHRgl8MqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BLVCXKH1uEwWTgACrcA55sH156tl3auGi3XDLEgEaADvPpj8HEM3qtepj9IYLF2biLqVf%2Bwecieb3OmkQbad8NRKvJa%2Fzg0A4oR3vmyZ8yMYjnpjbQh3a%2FAH0I8rQdWXkerOMOFjzDKWaHGv1KmhZQMY9SW7kWWHS7FSUqB%2Ba6%2B4f82Pnk%2B0frp3FE%2F%2F%2F1kanfVAWRC7z9yNomEpIr%2BDseDhWe9RH%2Fv7NA7ne8ZbOMcmloJgsLi9zQyvlh4YIDhzwhUVjBFKnK2GNbNmFUhUaZr5ak2izfjX%2FyRLCZibDzwL5eBz3cE2Vrq5bAQ8PoIWrJ81rlcvJSc5vSXSCilC5LPTagcdWgH6uZi7Te0%2F4r%2FxTaS1oe2rfKuzLQXyCiFW4CMzq4Pu0O0X6vGzVVImO7AzmoBpYNc1RYCTtwiu364m0ggkSUyo8cI6DQGTcG9CqbmzmF%2BweeTi3LuPg2P7ddP9AMTsencJzjIJ%2FV66NnV9P6yuAej5gT3T1aABcJOf9oVy18nJhjhpSWhAA2DZoVQam1V9gnmUyzCI346q5MWlck5GZ2LKEm9QExYi8ZYG8IOt%2F9eOIuuUqiEg%2FgC8egstrG6vW5nCT%2Bvd1ZMzT5Ur02ZCIaPcVu8oB7FZ%2B4xo0lNbEaADfzk4W%2FMKLm57wGOqUBV84PYPMn0W5xkGyyja4jgOo5UWHPJPDotXfPn9%2BnaXfSlevFjRfYz1isfRcrWy4rJSLYT5RWpfC%2Fa5rNwmNh3sVo%2F4SJuSthAF8MRQjBuFxrM8%2B5y4obYjFqcanoEfIaoQ%2BFKZyyCUWq62iB8M4vBple8ktuYpAc%2Fxkxb67ulN2D03xmGDzZWe7wIGiMtfrWMUzGmflI5bR9k%2BL891rkl21g8B11&X-Amz-Signature=26bc1695a413aafceca5f06581726734532138e40320367a69bdb05267858044&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVRYE7R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw5Pj1hEf%2FGJ%2FXd7j074IrgPOlFvw8SOzKjtcAXZDAnAiEAlqNKBCMAopKZOCEmMFN0%2Bd3c2PHXBZGLQGXqGHRgl8MqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BLVCXKH1uEwWTgACrcA55sH156tl3auGi3XDLEgEaADvPpj8HEM3qtepj9IYLF2biLqVf%2Bwecieb3OmkQbad8NRKvJa%2Fzg0A4oR3vmyZ8yMYjnpjbQh3a%2FAH0I8rQdWXkerOMOFjzDKWaHGv1KmhZQMY9SW7kWWHS7FSUqB%2Ba6%2B4f82Pnk%2B0frp3FE%2F%2F%2F1kanfVAWRC7z9yNomEpIr%2BDseDhWe9RH%2Fv7NA7ne8ZbOMcmloJgsLi9zQyvlh4YIDhzwhUVjBFKnK2GNbNmFUhUaZr5ak2izfjX%2FyRLCZibDzwL5eBz3cE2Vrq5bAQ8PoIWrJ81rlcvJSc5vSXSCilC5LPTagcdWgH6uZi7Te0%2F4r%2FxTaS1oe2rfKuzLQXyCiFW4CMzq4Pu0O0X6vGzVVImO7AzmoBpYNc1RYCTtwiu364m0ggkSUyo8cI6DQGTcG9CqbmzmF%2BweeTi3LuPg2P7ddP9AMTsencJzjIJ%2FV66NnV9P6yuAej5gT3T1aABcJOf9oVy18nJhjhpSWhAA2DZoVQam1V9gnmUyzCI346q5MWlck5GZ2LKEm9QExYi8ZYG8IOt%2F9eOIuuUqiEg%2FgC8egstrG6vW5nCT%2Bvd1ZMzT5Ur02ZCIaPcVu8oB7FZ%2B4xo0lNbEaADfzk4W%2FMKLm57wGOqUBV84PYPMn0W5xkGyyja4jgOo5UWHPJPDotXfPn9%2BnaXfSlevFjRfYz1isfRcrWy4rJSLYT5RWpfC%2Fa5rNwmNh3sVo%2F4SJuSthAF8MRQjBuFxrM8%2B5y4obYjFqcanoEfIaoQ%2BFKZyyCUWq62iB8M4vBple8ktuYpAc%2Fxkxb67ulN2D03xmGDzZWe7wIGiMtfrWMUzGmflI5bR9k%2BL891rkl21g8B11&X-Amz-Signature=6430083dd5e35f283dc337c641356eea2d303726b21786f5b544037caef87261&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVRYE7R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw5Pj1hEf%2FGJ%2FXd7j074IrgPOlFvw8SOzKjtcAXZDAnAiEAlqNKBCMAopKZOCEmMFN0%2Bd3c2PHXBZGLQGXqGHRgl8MqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BLVCXKH1uEwWTgACrcA55sH156tl3auGi3XDLEgEaADvPpj8HEM3qtepj9IYLF2biLqVf%2Bwecieb3OmkQbad8NRKvJa%2Fzg0A4oR3vmyZ8yMYjnpjbQh3a%2FAH0I8rQdWXkerOMOFjzDKWaHGv1KmhZQMY9SW7kWWHS7FSUqB%2Ba6%2B4f82Pnk%2B0frp3FE%2F%2F%2F1kanfVAWRC7z9yNomEpIr%2BDseDhWe9RH%2Fv7NA7ne8ZbOMcmloJgsLi9zQyvlh4YIDhzwhUVjBFKnK2GNbNmFUhUaZr5ak2izfjX%2FyRLCZibDzwL5eBz3cE2Vrq5bAQ8PoIWrJ81rlcvJSc5vSXSCilC5LPTagcdWgH6uZi7Te0%2F4r%2FxTaS1oe2rfKuzLQXyCiFW4CMzq4Pu0O0X6vGzVVImO7AzmoBpYNc1RYCTtwiu364m0ggkSUyo8cI6DQGTcG9CqbmzmF%2BweeTi3LuPg2P7ddP9AMTsencJzjIJ%2FV66NnV9P6yuAej5gT3T1aABcJOf9oVy18nJhjhpSWhAA2DZoVQam1V9gnmUyzCI346q5MWlck5GZ2LKEm9QExYi8ZYG8IOt%2F9eOIuuUqiEg%2FgC8egstrG6vW5nCT%2Bvd1ZMzT5Ur02ZCIaPcVu8oB7FZ%2B4xo0lNbEaADfzk4W%2FMKLm57wGOqUBV84PYPMn0W5xkGyyja4jgOo5UWHPJPDotXfPn9%2BnaXfSlevFjRfYz1isfRcrWy4rJSLYT5RWpfC%2Fa5rNwmNh3sVo%2F4SJuSthAF8MRQjBuFxrM8%2B5y4obYjFqcanoEfIaoQ%2BFKZyyCUWq62iB8M4vBple8ktuYpAc%2Fxkxb67ulN2D03xmGDzZWe7wIGiMtfrWMUzGmflI5bR9k%2BL891rkl21g8B11&X-Amz-Signature=3cb19e9222fa507af853c3086ce27d4c9c50fbc8e514f80a0e12e7ecf3605f79&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVRYE7R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw5Pj1hEf%2FGJ%2FXd7j074IrgPOlFvw8SOzKjtcAXZDAnAiEAlqNKBCMAopKZOCEmMFN0%2Bd3c2PHXBZGLQGXqGHRgl8MqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BLVCXKH1uEwWTgACrcA55sH156tl3auGi3XDLEgEaADvPpj8HEM3qtepj9IYLF2biLqVf%2Bwecieb3OmkQbad8NRKvJa%2Fzg0A4oR3vmyZ8yMYjnpjbQh3a%2FAH0I8rQdWXkerOMOFjzDKWaHGv1KmhZQMY9SW7kWWHS7FSUqB%2Ba6%2B4f82Pnk%2B0frp3FE%2F%2F%2F1kanfVAWRC7z9yNomEpIr%2BDseDhWe9RH%2Fv7NA7ne8ZbOMcmloJgsLi9zQyvlh4YIDhzwhUVjBFKnK2GNbNmFUhUaZr5ak2izfjX%2FyRLCZibDzwL5eBz3cE2Vrq5bAQ8PoIWrJ81rlcvJSc5vSXSCilC5LPTagcdWgH6uZi7Te0%2F4r%2FxTaS1oe2rfKuzLQXyCiFW4CMzq4Pu0O0X6vGzVVImO7AzmoBpYNc1RYCTtwiu364m0ggkSUyo8cI6DQGTcG9CqbmzmF%2BweeTi3LuPg2P7ddP9AMTsencJzjIJ%2FV66NnV9P6yuAej5gT3T1aABcJOf9oVy18nJhjhpSWhAA2DZoVQam1V9gnmUyzCI346q5MWlck5GZ2LKEm9QExYi8ZYG8IOt%2F9eOIuuUqiEg%2FgC8egstrG6vW5nCT%2Bvd1ZMzT5Ur02ZCIaPcVu8oB7FZ%2B4xo0lNbEaADfzk4W%2FMKLm57wGOqUBV84PYPMn0W5xkGyyja4jgOo5UWHPJPDotXfPn9%2BnaXfSlevFjRfYz1isfRcrWy4rJSLYT5RWpfC%2Fa5rNwmNh3sVo%2F4SJuSthAF8MRQjBuFxrM8%2B5y4obYjFqcanoEfIaoQ%2BFKZyyCUWq62iB8M4vBple8ktuYpAc%2Fxkxb67ulN2D03xmGDzZWe7wIGiMtfrWMUzGmflI5bR9k%2BL891rkl21g8B11&X-Amz-Signature=1a1d767fe487e8aa6696e5771e142b76d5c3c43f7034612c96b7a6dce2d5b450&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVRYE7R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw5Pj1hEf%2FGJ%2FXd7j074IrgPOlFvw8SOzKjtcAXZDAnAiEAlqNKBCMAopKZOCEmMFN0%2Bd3c2PHXBZGLQGXqGHRgl8MqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BLVCXKH1uEwWTgACrcA55sH156tl3auGi3XDLEgEaADvPpj8HEM3qtepj9IYLF2biLqVf%2Bwecieb3OmkQbad8NRKvJa%2Fzg0A4oR3vmyZ8yMYjnpjbQh3a%2FAH0I8rQdWXkerOMOFjzDKWaHGv1KmhZQMY9SW7kWWHS7FSUqB%2Ba6%2B4f82Pnk%2B0frp3FE%2F%2F%2F1kanfVAWRC7z9yNomEpIr%2BDseDhWe9RH%2Fv7NA7ne8ZbOMcmloJgsLi9zQyvlh4YIDhzwhUVjBFKnK2GNbNmFUhUaZr5ak2izfjX%2FyRLCZibDzwL5eBz3cE2Vrq5bAQ8PoIWrJ81rlcvJSc5vSXSCilC5LPTagcdWgH6uZi7Te0%2F4r%2FxTaS1oe2rfKuzLQXyCiFW4CMzq4Pu0O0X6vGzVVImO7AzmoBpYNc1RYCTtwiu364m0ggkSUyo8cI6DQGTcG9CqbmzmF%2BweeTi3LuPg2P7ddP9AMTsencJzjIJ%2FV66NnV9P6yuAej5gT3T1aABcJOf9oVy18nJhjhpSWhAA2DZoVQam1V9gnmUyzCI346q5MWlck5GZ2LKEm9QExYi8ZYG8IOt%2F9eOIuuUqiEg%2FgC8egstrG6vW5nCT%2Bvd1ZMzT5Ur02ZCIaPcVu8oB7FZ%2B4xo0lNbEaADfzk4W%2FMKLm57wGOqUBV84PYPMn0W5xkGyyja4jgOo5UWHPJPDotXfPn9%2BnaXfSlevFjRfYz1isfRcrWy4rJSLYT5RWpfC%2Fa5rNwmNh3sVo%2F4SJuSthAF8MRQjBuFxrM8%2B5y4obYjFqcanoEfIaoQ%2BFKZyyCUWq62iB8M4vBple8ktuYpAc%2Fxkxb67ulN2D03xmGDzZWe7wIGiMtfrWMUzGmflI5bR9k%2BL891rkl21g8B11&X-Amz-Signature=c39245ec3f416240ce0a32d224985b31e65725ed47eac52ffee27c9d71813c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

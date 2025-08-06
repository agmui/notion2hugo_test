---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVRAD5I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGVYmBvMRKJopqTqVD1YzxWv4Wg6pKKl10voKs9RFNylAiEAzbUDnk95b4XDPCVO3Xvfm6CdTQJb4fol2YFkwxhUetYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDW7aRHsiRP%2FE%2B1LjircA5l5Wc%2Bhh3XYSQSv1O85hLiyX%2B2jn0LmbWQJGEJRIP8dT4cOLDj91D7jrfz1cvCiTl%2BYsXyfLbvhSx7XkI%2BskDwmHNwrvnP37rktMAA4DLmIaQxtjeHQZtl6PXRzUaZiHOEFINdVq6QUkymkVnVfJqTwOGw6JqwOjOGucWShHt4XXlEuFKBOjpIbrl7W5G27f%2BjlnJL39J0%2Fj4qAEQJmVlv4Rld0et7f8fLgfjPpvZ9loJJm1Ouxdo1jsAhcc35%2FpGOLvY6jR1dr5e7MzOG1ki0%2FOP3Ba5vr3uVZfXR7pzz%2Bm5kjJqeXbN9mpYhTuiHiC5at5gUx4QpBCkfnfw8tuTYfDt6SpgkiOYJDI5km9D4kPgh5NPLyWLXT%2FVj1C%2BS1Tg1AzBc9dqJBgQlY0rOELeoteNxJCFaYCJlDZRq%2BayJGVyaalJjU9MHnu0mioZnp70tUCm%2BTsz9xgUVdhUD%2FChngR5sSEPJp8fN9JFiaUl7cDO%2BCi6mPaC4c4uNzjzGmgWQJa2ZVQuPHDWP8Qc448jeRHlLDwlsLvfG2jM%2Bb8Vs7BRtrfPFBELjbmOwhp%2BKWuScy61kkLKz3IaWzQSvZlAelNGejSb8v7YoOcUlcV3AS2t1jc6H68473Ixb7MJizz8QGOqUBBYg0ILuRitKZ2MYepNrgHrpocz2cuiIO5Bo0AENiHX7BaexTPyugrJkdy%2Br4pEJQYOZ5Prkxsv2%2FeDS0qfPmmQO%2FuiIxtzPoXBR7%2FJggB0tu20Htmx3jAf0MbmdENi%2FzcyJm8ll57WmwHVV38pOGa8ZSYudwimTcthvsfSW8dVkMkKOxy7BCMuk1GyFJdvMBWuXHBbDHcON2LoLjcoBa6obh1tP5&X-Amz-Signature=0b5ab670fba4876bdbd72bf04957c998b0c74104c6d83b78356cc957feb90055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVRAD5I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGVYmBvMRKJopqTqVD1YzxWv4Wg6pKKl10voKs9RFNylAiEAzbUDnk95b4XDPCVO3Xvfm6CdTQJb4fol2YFkwxhUetYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDW7aRHsiRP%2FE%2B1LjircA5l5Wc%2Bhh3XYSQSv1O85hLiyX%2B2jn0LmbWQJGEJRIP8dT4cOLDj91D7jrfz1cvCiTl%2BYsXyfLbvhSx7XkI%2BskDwmHNwrvnP37rktMAA4DLmIaQxtjeHQZtl6PXRzUaZiHOEFINdVq6QUkymkVnVfJqTwOGw6JqwOjOGucWShHt4XXlEuFKBOjpIbrl7W5G27f%2BjlnJL39J0%2Fj4qAEQJmVlv4Rld0et7f8fLgfjPpvZ9loJJm1Ouxdo1jsAhcc35%2FpGOLvY6jR1dr5e7MzOG1ki0%2FOP3Ba5vr3uVZfXR7pzz%2Bm5kjJqeXbN9mpYhTuiHiC5at5gUx4QpBCkfnfw8tuTYfDt6SpgkiOYJDI5km9D4kPgh5NPLyWLXT%2FVj1C%2BS1Tg1AzBc9dqJBgQlY0rOELeoteNxJCFaYCJlDZRq%2BayJGVyaalJjU9MHnu0mioZnp70tUCm%2BTsz9xgUVdhUD%2FChngR5sSEPJp8fN9JFiaUl7cDO%2BCi6mPaC4c4uNzjzGmgWQJa2ZVQuPHDWP8Qc448jeRHlLDwlsLvfG2jM%2Bb8Vs7BRtrfPFBELjbmOwhp%2BKWuScy61kkLKz3IaWzQSvZlAelNGejSb8v7YoOcUlcV3AS2t1jc6H68473Ixb7MJizz8QGOqUBBYg0ILuRitKZ2MYepNrgHrpocz2cuiIO5Bo0AENiHX7BaexTPyugrJkdy%2Br4pEJQYOZ5Prkxsv2%2FeDS0qfPmmQO%2FuiIxtzPoXBR7%2FJggB0tu20Htmx3jAf0MbmdENi%2FzcyJm8ll57WmwHVV38pOGa8ZSYudwimTcthvsfSW8dVkMkKOxy7BCMuk1GyFJdvMBWuXHBbDHcON2LoLjcoBa6obh1tP5&X-Amz-Signature=5e779cf849822b762e801176e8596e91ce93e9b77f7370a5f8a2819bc5865ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVRAD5I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGVYmBvMRKJopqTqVD1YzxWv4Wg6pKKl10voKs9RFNylAiEAzbUDnk95b4XDPCVO3Xvfm6CdTQJb4fol2YFkwxhUetYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDW7aRHsiRP%2FE%2B1LjircA5l5Wc%2Bhh3XYSQSv1O85hLiyX%2B2jn0LmbWQJGEJRIP8dT4cOLDj91D7jrfz1cvCiTl%2BYsXyfLbvhSx7XkI%2BskDwmHNwrvnP37rktMAA4DLmIaQxtjeHQZtl6PXRzUaZiHOEFINdVq6QUkymkVnVfJqTwOGw6JqwOjOGucWShHt4XXlEuFKBOjpIbrl7W5G27f%2BjlnJL39J0%2Fj4qAEQJmVlv4Rld0et7f8fLgfjPpvZ9loJJm1Ouxdo1jsAhcc35%2FpGOLvY6jR1dr5e7MzOG1ki0%2FOP3Ba5vr3uVZfXR7pzz%2Bm5kjJqeXbN9mpYhTuiHiC5at5gUx4QpBCkfnfw8tuTYfDt6SpgkiOYJDI5km9D4kPgh5NPLyWLXT%2FVj1C%2BS1Tg1AzBc9dqJBgQlY0rOELeoteNxJCFaYCJlDZRq%2BayJGVyaalJjU9MHnu0mioZnp70tUCm%2BTsz9xgUVdhUD%2FChngR5sSEPJp8fN9JFiaUl7cDO%2BCi6mPaC4c4uNzjzGmgWQJa2ZVQuPHDWP8Qc448jeRHlLDwlsLvfG2jM%2Bb8Vs7BRtrfPFBELjbmOwhp%2BKWuScy61kkLKz3IaWzQSvZlAelNGejSb8v7YoOcUlcV3AS2t1jc6H68473Ixb7MJizz8QGOqUBBYg0ILuRitKZ2MYepNrgHrpocz2cuiIO5Bo0AENiHX7BaexTPyugrJkdy%2Br4pEJQYOZ5Prkxsv2%2FeDS0qfPmmQO%2FuiIxtzPoXBR7%2FJggB0tu20Htmx3jAf0MbmdENi%2FzcyJm8ll57WmwHVV38pOGa8ZSYudwimTcthvsfSW8dVkMkKOxy7BCMuk1GyFJdvMBWuXHBbDHcON2LoLjcoBa6obh1tP5&X-Amz-Signature=9c7d8c0d9d82b130a16facbd6116f7e8727adf68af0ed2fdcb4819d4eb175b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVRAD5I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGVYmBvMRKJopqTqVD1YzxWv4Wg6pKKl10voKs9RFNylAiEAzbUDnk95b4XDPCVO3Xvfm6CdTQJb4fol2YFkwxhUetYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDW7aRHsiRP%2FE%2B1LjircA5l5Wc%2Bhh3XYSQSv1O85hLiyX%2B2jn0LmbWQJGEJRIP8dT4cOLDj91D7jrfz1cvCiTl%2BYsXyfLbvhSx7XkI%2BskDwmHNwrvnP37rktMAA4DLmIaQxtjeHQZtl6PXRzUaZiHOEFINdVq6QUkymkVnVfJqTwOGw6JqwOjOGucWShHt4XXlEuFKBOjpIbrl7W5G27f%2BjlnJL39J0%2Fj4qAEQJmVlv4Rld0et7f8fLgfjPpvZ9loJJm1Ouxdo1jsAhcc35%2FpGOLvY6jR1dr5e7MzOG1ki0%2FOP3Ba5vr3uVZfXR7pzz%2Bm5kjJqeXbN9mpYhTuiHiC5at5gUx4QpBCkfnfw8tuTYfDt6SpgkiOYJDI5km9D4kPgh5NPLyWLXT%2FVj1C%2BS1Tg1AzBc9dqJBgQlY0rOELeoteNxJCFaYCJlDZRq%2BayJGVyaalJjU9MHnu0mioZnp70tUCm%2BTsz9xgUVdhUD%2FChngR5sSEPJp8fN9JFiaUl7cDO%2BCi6mPaC4c4uNzjzGmgWQJa2ZVQuPHDWP8Qc448jeRHlLDwlsLvfG2jM%2Bb8Vs7BRtrfPFBELjbmOwhp%2BKWuScy61kkLKz3IaWzQSvZlAelNGejSb8v7YoOcUlcV3AS2t1jc6H68473Ixb7MJizz8QGOqUBBYg0ILuRitKZ2MYepNrgHrpocz2cuiIO5Bo0AENiHX7BaexTPyugrJkdy%2Br4pEJQYOZ5Prkxsv2%2FeDS0qfPmmQO%2FuiIxtzPoXBR7%2FJggB0tu20Htmx3jAf0MbmdENi%2FzcyJm8ll57WmwHVV38pOGa8ZSYudwimTcthvsfSW8dVkMkKOxy7BCMuk1GyFJdvMBWuXHBbDHcON2LoLjcoBa6obh1tP5&X-Amz-Signature=e6ce43b3c1cdcce81e7315a33fcdf13e2782f561babcf161725c04f76dce9581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVRAD5I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGVYmBvMRKJopqTqVD1YzxWv4Wg6pKKl10voKs9RFNylAiEAzbUDnk95b4XDPCVO3Xvfm6CdTQJb4fol2YFkwxhUetYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDW7aRHsiRP%2FE%2B1LjircA5l5Wc%2Bhh3XYSQSv1O85hLiyX%2B2jn0LmbWQJGEJRIP8dT4cOLDj91D7jrfz1cvCiTl%2BYsXyfLbvhSx7XkI%2BskDwmHNwrvnP37rktMAA4DLmIaQxtjeHQZtl6PXRzUaZiHOEFINdVq6QUkymkVnVfJqTwOGw6JqwOjOGucWShHt4XXlEuFKBOjpIbrl7W5G27f%2BjlnJL39J0%2Fj4qAEQJmVlv4Rld0et7f8fLgfjPpvZ9loJJm1Ouxdo1jsAhcc35%2FpGOLvY6jR1dr5e7MzOG1ki0%2FOP3Ba5vr3uVZfXR7pzz%2Bm5kjJqeXbN9mpYhTuiHiC5at5gUx4QpBCkfnfw8tuTYfDt6SpgkiOYJDI5km9D4kPgh5NPLyWLXT%2FVj1C%2BS1Tg1AzBc9dqJBgQlY0rOELeoteNxJCFaYCJlDZRq%2BayJGVyaalJjU9MHnu0mioZnp70tUCm%2BTsz9xgUVdhUD%2FChngR5sSEPJp8fN9JFiaUl7cDO%2BCi6mPaC4c4uNzjzGmgWQJa2ZVQuPHDWP8Qc448jeRHlLDwlsLvfG2jM%2Bb8Vs7BRtrfPFBELjbmOwhp%2BKWuScy61kkLKz3IaWzQSvZlAelNGejSb8v7YoOcUlcV3AS2t1jc6H68473Ixb7MJizz8QGOqUBBYg0ILuRitKZ2MYepNrgHrpocz2cuiIO5Bo0AENiHX7BaexTPyugrJkdy%2Br4pEJQYOZ5Prkxsv2%2FeDS0qfPmmQO%2FuiIxtzPoXBR7%2FJggB0tu20Htmx3jAf0MbmdENi%2FzcyJm8ll57WmwHVV38pOGa8ZSYudwimTcthvsfSW8dVkMkKOxy7BCMuk1GyFJdvMBWuXHBbDHcON2LoLjcoBa6obh1tP5&X-Amz-Signature=aad6939a89275541028132baee49bcbe1467654417cc96632f0242b51f1b025d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVRAD5I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGVYmBvMRKJopqTqVD1YzxWv4Wg6pKKl10voKs9RFNylAiEAzbUDnk95b4XDPCVO3Xvfm6CdTQJb4fol2YFkwxhUetYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDW7aRHsiRP%2FE%2B1LjircA5l5Wc%2Bhh3XYSQSv1O85hLiyX%2B2jn0LmbWQJGEJRIP8dT4cOLDj91D7jrfz1cvCiTl%2BYsXyfLbvhSx7XkI%2BskDwmHNwrvnP37rktMAA4DLmIaQxtjeHQZtl6PXRzUaZiHOEFINdVq6QUkymkVnVfJqTwOGw6JqwOjOGucWShHt4XXlEuFKBOjpIbrl7W5G27f%2BjlnJL39J0%2Fj4qAEQJmVlv4Rld0et7f8fLgfjPpvZ9loJJm1Ouxdo1jsAhcc35%2FpGOLvY6jR1dr5e7MzOG1ki0%2FOP3Ba5vr3uVZfXR7pzz%2Bm5kjJqeXbN9mpYhTuiHiC5at5gUx4QpBCkfnfw8tuTYfDt6SpgkiOYJDI5km9D4kPgh5NPLyWLXT%2FVj1C%2BS1Tg1AzBc9dqJBgQlY0rOELeoteNxJCFaYCJlDZRq%2BayJGVyaalJjU9MHnu0mioZnp70tUCm%2BTsz9xgUVdhUD%2FChngR5sSEPJp8fN9JFiaUl7cDO%2BCi6mPaC4c4uNzjzGmgWQJa2ZVQuPHDWP8Qc448jeRHlLDwlsLvfG2jM%2Bb8Vs7BRtrfPFBELjbmOwhp%2BKWuScy61kkLKz3IaWzQSvZlAelNGejSb8v7YoOcUlcV3AS2t1jc6H68473Ixb7MJizz8QGOqUBBYg0ILuRitKZ2MYepNrgHrpocz2cuiIO5Bo0AENiHX7BaexTPyugrJkdy%2Br4pEJQYOZ5Prkxsv2%2FeDS0qfPmmQO%2FuiIxtzPoXBR7%2FJggB0tu20Htmx3jAf0MbmdENi%2FzcyJm8ll57WmwHVV38pOGa8ZSYudwimTcthvsfSW8dVkMkKOxy7BCMuk1GyFJdvMBWuXHBbDHcON2LoLjcoBa6obh1tP5&X-Amz-Signature=289274096eeeb134277dd735b327d0e207d711bcb0aa7dc6a20213503917971f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVRAD5I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGVYmBvMRKJopqTqVD1YzxWv4Wg6pKKl10voKs9RFNylAiEAzbUDnk95b4XDPCVO3Xvfm6CdTQJb4fol2YFkwxhUetYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDW7aRHsiRP%2FE%2B1LjircA5l5Wc%2Bhh3XYSQSv1O85hLiyX%2B2jn0LmbWQJGEJRIP8dT4cOLDj91D7jrfz1cvCiTl%2BYsXyfLbvhSx7XkI%2BskDwmHNwrvnP37rktMAA4DLmIaQxtjeHQZtl6PXRzUaZiHOEFINdVq6QUkymkVnVfJqTwOGw6JqwOjOGucWShHt4XXlEuFKBOjpIbrl7W5G27f%2BjlnJL39J0%2Fj4qAEQJmVlv4Rld0et7f8fLgfjPpvZ9loJJm1Ouxdo1jsAhcc35%2FpGOLvY6jR1dr5e7MzOG1ki0%2FOP3Ba5vr3uVZfXR7pzz%2Bm5kjJqeXbN9mpYhTuiHiC5at5gUx4QpBCkfnfw8tuTYfDt6SpgkiOYJDI5km9D4kPgh5NPLyWLXT%2FVj1C%2BS1Tg1AzBc9dqJBgQlY0rOELeoteNxJCFaYCJlDZRq%2BayJGVyaalJjU9MHnu0mioZnp70tUCm%2BTsz9xgUVdhUD%2FChngR5sSEPJp8fN9JFiaUl7cDO%2BCi6mPaC4c4uNzjzGmgWQJa2ZVQuPHDWP8Qc448jeRHlLDwlsLvfG2jM%2Bb8Vs7BRtrfPFBELjbmOwhp%2BKWuScy61kkLKz3IaWzQSvZlAelNGejSb8v7YoOcUlcV3AS2t1jc6H68473Ixb7MJizz8QGOqUBBYg0ILuRitKZ2MYepNrgHrpocz2cuiIO5Bo0AENiHX7BaexTPyugrJkdy%2Br4pEJQYOZ5Prkxsv2%2FeDS0qfPmmQO%2FuiIxtzPoXBR7%2FJggB0tu20Htmx3jAf0MbmdENi%2FzcyJm8ll57WmwHVV38pOGa8ZSYudwimTcthvsfSW8dVkMkKOxy7BCMuk1GyFJdvMBWuXHBbDHcON2LoLjcoBa6obh1tP5&X-Amz-Signature=2dd001e3b42e70d4ff5cc76938791db6dab4b0bd1da84e16eabb2603e7104924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

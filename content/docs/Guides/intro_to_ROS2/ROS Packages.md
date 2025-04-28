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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUNBG3S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4AWs746iVQJ4E3l3qC%2BBzxDRwKsVTTLsCnVKQx87iHQIgabYUB7MD4dS8KOEFV%2FG24Ce4Sh3nvfO0OvtkjawZ5jkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFyKNzK8bcrTL9Az4SrcA9pa9LoxigDR%2FWlnNkiIKPxBE9O341EfgcyAvxC1fm5WAreFNfZH2EBs1dtjjYZdKFS9TJfzuMifwzQkk3XHOD%2FkBTNwRd6IjwKAR31%2BkISIJZkjTHG7EoUWp5ynfdeQBd8%2BxUWgwU8IvDRUOGGbNVd0Tm3eDEYELxOZ7B01e86Vnmsoi%2Bb0MGjgxlGMyKxu6Non3cFd%2FTHzpe%2FK3zwy%2F4ckNt9eNE21U7PSV4JgonUH%2BJsmMCyc%2BHn9aH3GMlmHjcB2tleGdAvLxsou1SnTb5YCwMkblylzUQ5PyHSEW8kYux4ul7RP61E6YMrAvuJPvBFtBBRwKfbAw6%2B3ZVJtA08Y4u4%2FH6P4rQvyAeyZ74%2Fgz5mzXgwCE883TZeAsqSKmOAj67zNQJRnLseF6yyPUoU9XG%2BXkuPaAcdXytxYiurBkK%2Bt7nTI92tur0aiJ8aIPdnjzwVoO6LUW9%2B81Kf79LcSffizq03DTFeBuwUB1ibdpD6VR2Ica4QMGe1irGaUyoQrimQKU2eUcI0ZGENy0C0VZZpNrRCnw4uNBBK9%2B2YaqACsaqMYN6KfDDxTCvIFOQzUuOzhO%2B%2BL9ykjnlc9HRc1IFbYEvKap7CyKpubfOUx4ejC%2B01b99haG2J3MJPXvsAGOqUBYiYeowwA4NU23VKtNP%2FLJdC4W3tV7%2Fu5XeewV8bIqg4e%2FkkYYNnyYA%2BnWBOc06rhBgwWHGl%2BXTzFbGJCvdw3UzfaCEnc9c55g4JQoPaDJ1YVZHcvKXcm05Qvfbyf5nNOjzGrEfRXEsQmf8WdOTkb0j8UK02I%2FpVtJs84gFaEZKT0hCD0%2B9jJRt1x%2Fs640QiOvjK2j%2BfX3wqdrvI507hsZVlwfrlZ&X-Amz-Signature=5c3291e33edcd65e4a88c04aac3d731e4bc0b87af2a07d6a1cf397dd65296419&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUNBG3S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4AWs746iVQJ4E3l3qC%2BBzxDRwKsVTTLsCnVKQx87iHQIgabYUB7MD4dS8KOEFV%2FG24Ce4Sh3nvfO0OvtkjawZ5jkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFyKNzK8bcrTL9Az4SrcA9pa9LoxigDR%2FWlnNkiIKPxBE9O341EfgcyAvxC1fm5WAreFNfZH2EBs1dtjjYZdKFS9TJfzuMifwzQkk3XHOD%2FkBTNwRd6IjwKAR31%2BkISIJZkjTHG7EoUWp5ynfdeQBd8%2BxUWgwU8IvDRUOGGbNVd0Tm3eDEYELxOZ7B01e86Vnmsoi%2Bb0MGjgxlGMyKxu6Non3cFd%2FTHzpe%2FK3zwy%2F4ckNt9eNE21U7PSV4JgonUH%2BJsmMCyc%2BHn9aH3GMlmHjcB2tleGdAvLxsou1SnTb5YCwMkblylzUQ5PyHSEW8kYux4ul7RP61E6YMrAvuJPvBFtBBRwKfbAw6%2B3ZVJtA08Y4u4%2FH6P4rQvyAeyZ74%2Fgz5mzXgwCE883TZeAsqSKmOAj67zNQJRnLseF6yyPUoU9XG%2BXkuPaAcdXytxYiurBkK%2Bt7nTI92tur0aiJ8aIPdnjzwVoO6LUW9%2B81Kf79LcSffizq03DTFeBuwUB1ibdpD6VR2Ica4QMGe1irGaUyoQrimQKU2eUcI0ZGENy0C0VZZpNrRCnw4uNBBK9%2B2YaqACsaqMYN6KfDDxTCvIFOQzUuOzhO%2B%2BL9ykjnlc9HRc1IFbYEvKap7CyKpubfOUx4ejC%2B01b99haG2J3MJPXvsAGOqUBYiYeowwA4NU23VKtNP%2FLJdC4W3tV7%2Fu5XeewV8bIqg4e%2FkkYYNnyYA%2BnWBOc06rhBgwWHGl%2BXTzFbGJCvdw3UzfaCEnc9c55g4JQoPaDJ1YVZHcvKXcm05Qvfbyf5nNOjzGrEfRXEsQmf8WdOTkb0j8UK02I%2FpVtJs84gFaEZKT0hCD0%2B9jJRt1x%2Fs640QiOvjK2j%2BfX3wqdrvI507hsZVlwfrlZ&X-Amz-Signature=0bbeb2e0230d589a0a0506ddd9dfb912ca8cd50bdb7ef8a3ea3047af478a4d37&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUNBG3S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4AWs746iVQJ4E3l3qC%2BBzxDRwKsVTTLsCnVKQx87iHQIgabYUB7MD4dS8KOEFV%2FG24Ce4Sh3nvfO0OvtkjawZ5jkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFyKNzK8bcrTL9Az4SrcA9pa9LoxigDR%2FWlnNkiIKPxBE9O341EfgcyAvxC1fm5WAreFNfZH2EBs1dtjjYZdKFS9TJfzuMifwzQkk3XHOD%2FkBTNwRd6IjwKAR31%2BkISIJZkjTHG7EoUWp5ynfdeQBd8%2BxUWgwU8IvDRUOGGbNVd0Tm3eDEYELxOZ7B01e86Vnmsoi%2Bb0MGjgxlGMyKxu6Non3cFd%2FTHzpe%2FK3zwy%2F4ckNt9eNE21U7PSV4JgonUH%2BJsmMCyc%2BHn9aH3GMlmHjcB2tleGdAvLxsou1SnTb5YCwMkblylzUQ5PyHSEW8kYux4ul7RP61E6YMrAvuJPvBFtBBRwKfbAw6%2B3ZVJtA08Y4u4%2FH6P4rQvyAeyZ74%2Fgz5mzXgwCE883TZeAsqSKmOAj67zNQJRnLseF6yyPUoU9XG%2BXkuPaAcdXytxYiurBkK%2Bt7nTI92tur0aiJ8aIPdnjzwVoO6LUW9%2B81Kf79LcSffizq03DTFeBuwUB1ibdpD6VR2Ica4QMGe1irGaUyoQrimQKU2eUcI0ZGENy0C0VZZpNrRCnw4uNBBK9%2B2YaqACsaqMYN6KfDDxTCvIFOQzUuOzhO%2B%2BL9ykjnlc9HRc1IFbYEvKap7CyKpubfOUx4ejC%2B01b99haG2J3MJPXvsAGOqUBYiYeowwA4NU23VKtNP%2FLJdC4W3tV7%2Fu5XeewV8bIqg4e%2FkkYYNnyYA%2BnWBOc06rhBgwWHGl%2BXTzFbGJCvdw3UzfaCEnc9c55g4JQoPaDJ1YVZHcvKXcm05Qvfbyf5nNOjzGrEfRXEsQmf8WdOTkb0j8UK02I%2FpVtJs84gFaEZKT0hCD0%2B9jJRt1x%2Fs640QiOvjK2j%2BfX3wqdrvI507hsZVlwfrlZ&X-Amz-Signature=98e59821b013e0993beb94c1a83219809e9a0729768912931a726c19b28f655c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUNBG3S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4AWs746iVQJ4E3l3qC%2BBzxDRwKsVTTLsCnVKQx87iHQIgabYUB7MD4dS8KOEFV%2FG24Ce4Sh3nvfO0OvtkjawZ5jkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFyKNzK8bcrTL9Az4SrcA9pa9LoxigDR%2FWlnNkiIKPxBE9O341EfgcyAvxC1fm5WAreFNfZH2EBs1dtjjYZdKFS9TJfzuMifwzQkk3XHOD%2FkBTNwRd6IjwKAR31%2BkISIJZkjTHG7EoUWp5ynfdeQBd8%2BxUWgwU8IvDRUOGGbNVd0Tm3eDEYELxOZ7B01e86Vnmsoi%2Bb0MGjgxlGMyKxu6Non3cFd%2FTHzpe%2FK3zwy%2F4ckNt9eNE21U7PSV4JgonUH%2BJsmMCyc%2BHn9aH3GMlmHjcB2tleGdAvLxsou1SnTb5YCwMkblylzUQ5PyHSEW8kYux4ul7RP61E6YMrAvuJPvBFtBBRwKfbAw6%2B3ZVJtA08Y4u4%2FH6P4rQvyAeyZ74%2Fgz5mzXgwCE883TZeAsqSKmOAj67zNQJRnLseF6yyPUoU9XG%2BXkuPaAcdXytxYiurBkK%2Bt7nTI92tur0aiJ8aIPdnjzwVoO6LUW9%2B81Kf79LcSffizq03DTFeBuwUB1ibdpD6VR2Ica4QMGe1irGaUyoQrimQKU2eUcI0ZGENy0C0VZZpNrRCnw4uNBBK9%2B2YaqACsaqMYN6KfDDxTCvIFOQzUuOzhO%2B%2BL9ykjnlc9HRc1IFbYEvKap7CyKpubfOUx4ejC%2B01b99haG2J3MJPXvsAGOqUBYiYeowwA4NU23VKtNP%2FLJdC4W3tV7%2Fu5XeewV8bIqg4e%2FkkYYNnyYA%2BnWBOc06rhBgwWHGl%2BXTzFbGJCvdw3UzfaCEnc9c55g4JQoPaDJ1YVZHcvKXcm05Qvfbyf5nNOjzGrEfRXEsQmf8WdOTkb0j8UK02I%2FpVtJs84gFaEZKT0hCD0%2B9jJRt1x%2Fs640QiOvjK2j%2BfX3wqdrvI507hsZVlwfrlZ&X-Amz-Signature=5de1f53ac3d83b37119bd965f11a588e87c3db3588d2b170a0eb8793c661d540&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUNBG3S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4AWs746iVQJ4E3l3qC%2BBzxDRwKsVTTLsCnVKQx87iHQIgabYUB7MD4dS8KOEFV%2FG24Ce4Sh3nvfO0OvtkjawZ5jkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFyKNzK8bcrTL9Az4SrcA9pa9LoxigDR%2FWlnNkiIKPxBE9O341EfgcyAvxC1fm5WAreFNfZH2EBs1dtjjYZdKFS9TJfzuMifwzQkk3XHOD%2FkBTNwRd6IjwKAR31%2BkISIJZkjTHG7EoUWp5ynfdeQBd8%2BxUWgwU8IvDRUOGGbNVd0Tm3eDEYELxOZ7B01e86Vnmsoi%2Bb0MGjgxlGMyKxu6Non3cFd%2FTHzpe%2FK3zwy%2F4ckNt9eNE21U7PSV4JgonUH%2BJsmMCyc%2BHn9aH3GMlmHjcB2tleGdAvLxsou1SnTb5YCwMkblylzUQ5PyHSEW8kYux4ul7RP61E6YMrAvuJPvBFtBBRwKfbAw6%2B3ZVJtA08Y4u4%2FH6P4rQvyAeyZ74%2Fgz5mzXgwCE883TZeAsqSKmOAj67zNQJRnLseF6yyPUoU9XG%2BXkuPaAcdXytxYiurBkK%2Bt7nTI92tur0aiJ8aIPdnjzwVoO6LUW9%2B81Kf79LcSffizq03DTFeBuwUB1ibdpD6VR2Ica4QMGe1irGaUyoQrimQKU2eUcI0ZGENy0C0VZZpNrRCnw4uNBBK9%2B2YaqACsaqMYN6KfDDxTCvIFOQzUuOzhO%2B%2BL9ykjnlc9HRc1IFbYEvKap7CyKpubfOUx4ejC%2B01b99haG2J3MJPXvsAGOqUBYiYeowwA4NU23VKtNP%2FLJdC4W3tV7%2Fu5XeewV8bIqg4e%2FkkYYNnyYA%2BnWBOc06rhBgwWHGl%2BXTzFbGJCvdw3UzfaCEnc9c55g4JQoPaDJ1YVZHcvKXcm05Qvfbyf5nNOjzGrEfRXEsQmf8WdOTkb0j8UK02I%2FpVtJs84gFaEZKT0hCD0%2B9jJRt1x%2Fs640QiOvjK2j%2BfX3wqdrvI507hsZVlwfrlZ&X-Amz-Signature=9cb492c73adca3f7af3e3ea0448b15c659f3483b749f1a164e28ec85b840c191&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUNBG3S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4AWs746iVQJ4E3l3qC%2BBzxDRwKsVTTLsCnVKQx87iHQIgabYUB7MD4dS8KOEFV%2FG24Ce4Sh3nvfO0OvtkjawZ5jkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFyKNzK8bcrTL9Az4SrcA9pa9LoxigDR%2FWlnNkiIKPxBE9O341EfgcyAvxC1fm5WAreFNfZH2EBs1dtjjYZdKFS9TJfzuMifwzQkk3XHOD%2FkBTNwRd6IjwKAR31%2BkISIJZkjTHG7EoUWp5ynfdeQBd8%2BxUWgwU8IvDRUOGGbNVd0Tm3eDEYELxOZ7B01e86Vnmsoi%2Bb0MGjgxlGMyKxu6Non3cFd%2FTHzpe%2FK3zwy%2F4ckNt9eNE21U7PSV4JgonUH%2BJsmMCyc%2BHn9aH3GMlmHjcB2tleGdAvLxsou1SnTb5YCwMkblylzUQ5PyHSEW8kYux4ul7RP61E6YMrAvuJPvBFtBBRwKfbAw6%2B3ZVJtA08Y4u4%2FH6P4rQvyAeyZ74%2Fgz5mzXgwCE883TZeAsqSKmOAj67zNQJRnLseF6yyPUoU9XG%2BXkuPaAcdXytxYiurBkK%2Bt7nTI92tur0aiJ8aIPdnjzwVoO6LUW9%2B81Kf79LcSffizq03DTFeBuwUB1ibdpD6VR2Ica4QMGe1irGaUyoQrimQKU2eUcI0ZGENy0C0VZZpNrRCnw4uNBBK9%2B2YaqACsaqMYN6KfDDxTCvIFOQzUuOzhO%2B%2BL9ykjnlc9HRc1IFbYEvKap7CyKpubfOUx4ejC%2B01b99haG2J3MJPXvsAGOqUBYiYeowwA4NU23VKtNP%2FLJdC4W3tV7%2Fu5XeewV8bIqg4e%2FkkYYNnyYA%2BnWBOc06rhBgwWHGl%2BXTzFbGJCvdw3UzfaCEnc9c55g4JQoPaDJ1YVZHcvKXcm05Qvfbyf5nNOjzGrEfRXEsQmf8WdOTkb0j8UK02I%2FpVtJs84gFaEZKT0hCD0%2B9jJRt1x%2Fs640QiOvjK2j%2BfX3wqdrvI507hsZVlwfrlZ&X-Amz-Signature=d53b7d8fa50d899d28d3fd2c84b00b2abc057e2dc6514cc18283fc168c9c5a59&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUNBG3S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4AWs746iVQJ4E3l3qC%2BBzxDRwKsVTTLsCnVKQx87iHQIgabYUB7MD4dS8KOEFV%2FG24Ce4Sh3nvfO0OvtkjawZ5jkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFyKNzK8bcrTL9Az4SrcA9pa9LoxigDR%2FWlnNkiIKPxBE9O341EfgcyAvxC1fm5WAreFNfZH2EBs1dtjjYZdKFS9TJfzuMifwzQkk3XHOD%2FkBTNwRd6IjwKAR31%2BkISIJZkjTHG7EoUWp5ynfdeQBd8%2BxUWgwU8IvDRUOGGbNVd0Tm3eDEYELxOZ7B01e86Vnmsoi%2Bb0MGjgxlGMyKxu6Non3cFd%2FTHzpe%2FK3zwy%2F4ckNt9eNE21U7PSV4JgonUH%2BJsmMCyc%2BHn9aH3GMlmHjcB2tleGdAvLxsou1SnTb5YCwMkblylzUQ5PyHSEW8kYux4ul7RP61E6YMrAvuJPvBFtBBRwKfbAw6%2B3ZVJtA08Y4u4%2FH6P4rQvyAeyZ74%2Fgz5mzXgwCE883TZeAsqSKmOAj67zNQJRnLseF6yyPUoU9XG%2BXkuPaAcdXytxYiurBkK%2Bt7nTI92tur0aiJ8aIPdnjzwVoO6LUW9%2B81Kf79LcSffizq03DTFeBuwUB1ibdpD6VR2Ica4QMGe1irGaUyoQrimQKU2eUcI0ZGENy0C0VZZpNrRCnw4uNBBK9%2B2YaqACsaqMYN6KfDDxTCvIFOQzUuOzhO%2B%2BL9ykjnlc9HRc1IFbYEvKap7CyKpubfOUx4ejC%2B01b99haG2J3MJPXvsAGOqUBYiYeowwA4NU23VKtNP%2FLJdC4W3tV7%2Fu5XeewV8bIqg4e%2FkkYYNnyYA%2BnWBOc06rhBgwWHGl%2BXTzFbGJCvdw3UzfaCEnc9c55g4JQoPaDJ1YVZHcvKXcm05Qvfbyf5nNOjzGrEfRXEsQmf8WdOTkb0j8UK02I%2FpVtJs84gFaEZKT0hCD0%2B9jJRt1x%2Fs640QiOvjK2j%2BfX3wqdrvI507hsZVlwfrlZ&X-Amz-Signature=9c4c533b8f76394f9b8b5e31c4b4728441946cc4887face40fe83eb14b7003ae&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

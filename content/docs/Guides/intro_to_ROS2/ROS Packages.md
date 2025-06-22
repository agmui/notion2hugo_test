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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGSLPUY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBFZk9okr2ujmrf6TmyisJ2fZzlF9HvG2B5B01XNiJmlAiAbV72eBGv%2FN0Sy9XkVSSroDRva%2FgS%2FVN%2F2qlq0Lio4SSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxuQCqbV%2FKcTzpSTJKtwD%2BqkZwEJBH2THL%2FKGEELG%2F%2FeAEKp67RFg1eUefUi5ICdWYvfwHop8mo6wg%2FTJ%2F8L%2BMK0rkUjEQI1ivjmJ80qvJeLak%2B0DN3rjG2yFZJQBpXcE4CTfnv2%2BCvrZxGo%2F7bZMAzELA%2FHP0l4q3vRnEv0b3WGAX0%2BXYyf1bkrdCwUN8iuX3eEWfNzp4d6Zaro1aeepA18C5tDba5Ulbl5j66vs8v27Ac4UAydA3GK0nmZSVJMdHhTtsuwV4mAaM1vsT%2FoVKFuygZuyFX0xZH8CTjdSMlZCMmdCbmWMsPcwXYFzzyFScZmOYkyLYIq1kzlVKfieesvLaw0mkhBIxVcTcqZ0SV%2FsdMgyeOk%2FQzft%2BljOqXOk75qIhAVWXh%2FLqAFTHEUY5QfuIZkzS2RaOQdPJxoDm73zejIUcQHmBg1Xy1%2Bjr3HxQwIdJ75W9rluXLEdPYu7vjEUe8EaC3GuMCJhViCmMMp%2BY%2FYIKscZPBYbt%2FCGBRIGdohK5jtGt8CRbrPOUdMujyquOaOXcP67kfwp99CIN9rquX2a0sE4mC922hvGMG8C%2Bl88hRD0Oh4w96tXoG9sJHXJ%2FlCbK5TFafxtVUXX8B6e%2FUirUh05GXp%2BSdsOTTqbDd%2BQ2bLWENKMdYUw5OXgwgY6pgHj6Hymk6tz5japWe%2FJn6c6irrLF8VsYaiYdV5nsNpbJ6vrP6IkNLGY6n17h3UDfD5sGl1rMJQBY73WypyWgSxQvSJ1SxBp6Jm1XiIAutde3llfeo%2FU%2FQPFcR%2BauLfHK5nbTx%2F6w7zGw5A7U7DwO4ZFnf03wXwP1mkG8UIoRVickONtqCGcsi3KMz%2B7fuOaXzi%2Bo1yPZWw%2Ffh67BJGyYQtVWfPmSGG3&X-Amz-Signature=7675d438827b8ef6e56ec03a888258f7eba1e501298464492040fad96c073f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGSLPUY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBFZk9okr2ujmrf6TmyisJ2fZzlF9HvG2B5B01XNiJmlAiAbV72eBGv%2FN0Sy9XkVSSroDRva%2FgS%2FVN%2F2qlq0Lio4SSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxuQCqbV%2FKcTzpSTJKtwD%2BqkZwEJBH2THL%2FKGEELG%2F%2FeAEKp67RFg1eUefUi5ICdWYvfwHop8mo6wg%2FTJ%2F8L%2BMK0rkUjEQI1ivjmJ80qvJeLak%2B0DN3rjG2yFZJQBpXcE4CTfnv2%2BCvrZxGo%2F7bZMAzELA%2FHP0l4q3vRnEv0b3WGAX0%2BXYyf1bkrdCwUN8iuX3eEWfNzp4d6Zaro1aeepA18C5tDba5Ulbl5j66vs8v27Ac4UAydA3GK0nmZSVJMdHhTtsuwV4mAaM1vsT%2FoVKFuygZuyFX0xZH8CTjdSMlZCMmdCbmWMsPcwXYFzzyFScZmOYkyLYIq1kzlVKfieesvLaw0mkhBIxVcTcqZ0SV%2FsdMgyeOk%2FQzft%2BljOqXOk75qIhAVWXh%2FLqAFTHEUY5QfuIZkzS2RaOQdPJxoDm73zejIUcQHmBg1Xy1%2Bjr3HxQwIdJ75W9rluXLEdPYu7vjEUe8EaC3GuMCJhViCmMMp%2BY%2FYIKscZPBYbt%2FCGBRIGdohK5jtGt8CRbrPOUdMujyquOaOXcP67kfwp99CIN9rquX2a0sE4mC922hvGMG8C%2Bl88hRD0Oh4w96tXoG9sJHXJ%2FlCbK5TFafxtVUXX8B6e%2FUirUh05GXp%2BSdsOTTqbDd%2BQ2bLWENKMdYUw5OXgwgY6pgHj6Hymk6tz5japWe%2FJn6c6irrLF8VsYaiYdV5nsNpbJ6vrP6IkNLGY6n17h3UDfD5sGl1rMJQBY73WypyWgSxQvSJ1SxBp6Jm1XiIAutde3llfeo%2FU%2FQPFcR%2BauLfHK5nbTx%2F6w7zGw5A7U7DwO4ZFnf03wXwP1mkG8UIoRVickONtqCGcsi3KMz%2B7fuOaXzi%2Bo1yPZWw%2Ffh67BJGyYQtVWfPmSGG3&X-Amz-Signature=00c32d27e01b47905970008600d466d64aef20e3ce66295b5579b33118d928f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGSLPUY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBFZk9okr2ujmrf6TmyisJ2fZzlF9HvG2B5B01XNiJmlAiAbV72eBGv%2FN0Sy9XkVSSroDRva%2FgS%2FVN%2F2qlq0Lio4SSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxuQCqbV%2FKcTzpSTJKtwD%2BqkZwEJBH2THL%2FKGEELG%2F%2FeAEKp67RFg1eUefUi5ICdWYvfwHop8mo6wg%2FTJ%2F8L%2BMK0rkUjEQI1ivjmJ80qvJeLak%2B0DN3rjG2yFZJQBpXcE4CTfnv2%2BCvrZxGo%2F7bZMAzELA%2FHP0l4q3vRnEv0b3WGAX0%2BXYyf1bkrdCwUN8iuX3eEWfNzp4d6Zaro1aeepA18C5tDba5Ulbl5j66vs8v27Ac4UAydA3GK0nmZSVJMdHhTtsuwV4mAaM1vsT%2FoVKFuygZuyFX0xZH8CTjdSMlZCMmdCbmWMsPcwXYFzzyFScZmOYkyLYIq1kzlVKfieesvLaw0mkhBIxVcTcqZ0SV%2FsdMgyeOk%2FQzft%2BljOqXOk75qIhAVWXh%2FLqAFTHEUY5QfuIZkzS2RaOQdPJxoDm73zejIUcQHmBg1Xy1%2Bjr3HxQwIdJ75W9rluXLEdPYu7vjEUe8EaC3GuMCJhViCmMMp%2BY%2FYIKscZPBYbt%2FCGBRIGdohK5jtGt8CRbrPOUdMujyquOaOXcP67kfwp99CIN9rquX2a0sE4mC922hvGMG8C%2Bl88hRD0Oh4w96tXoG9sJHXJ%2FlCbK5TFafxtVUXX8B6e%2FUirUh05GXp%2BSdsOTTqbDd%2BQ2bLWENKMdYUw5OXgwgY6pgHj6Hymk6tz5japWe%2FJn6c6irrLF8VsYaiYdV5nsNpbJ6vrP6IkNLGY6n17h3UDfD5sGl1rMJQBY73WypyWgSxQvSJ1SxBp6Jm1XiIAutde3llfeo%2FU%2FQPFcR%2BauLfHK5nbTx%2F6w7zGw5A7U7DwO4ZFnf03wXwP1mkG8UIoRVickONtqCGcsi3KMz%2B7fuOaXzi%2Bo1yPZWw%2Ffh67BJGyYQtVWfPmSGG3&X-Amz-Signature=d4680c17f2c269f0abde065fa80d7274116409a314f8a169a606f67126d66848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGSLPUY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBFZk9okr2ujmrf6TmyisJ2fZzlF9HvG2B5B01XNiJmlAiAbV72eBGv%2FN0Sy9XkVSSroDRva%2FgS%2FVN%2F2qlq0Lio4SSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxuQCqbV%2FKcTzpSTJKtwD%2BqkZwEJBH2THL%2FKGEELG%2F%2FeAEKp67RFg1eUefUi5ICdWYvfwHop8mo6wg%2FTJ%2F8L%2BMK0rkUjEQI1ivjmJ80qvJeLak%2B0DN3rjG2yFZJQBpXcE4CTfnv2%2BCvrZxGo%2F7bZMAzELA%2FHP0l4q3vRnEv0b3WGAX0%2BXYyf1bkrdCwUN8iuX3eEWfNzp4d6Zaro1aeepA18C5tDba5Ulbl5j66vs8v27Ac4UAydA3GK0nmZSVJMdHhTtsuwV4mAaM1vsT%2FoVKFuygZuyFX0xZH8CTjdSMlZCMmdCbmWMsPcwXYFzzyFScZmOYkyLYIq1kzlVKfieesvLaw0mkhBIxVcTcqZ0SV%2FsdMgyeOk%2FQzft%2BljOqXOk75qIhAVWXh%2FLqAFTHEUY5QfuIZkzS2RaOQdPJxoDm73zejIUcQHmBg1Xy1%2Bjr3HxQwIdJ75W9rluXLEdPYu7vjEUe8EaC3GuMCJhViCmMMp%2BY%2FYIKscZPBYbt%2FCGBRIGdohK5jtGt8CRbrPOUdMujyquOaOXcP67kfwp99CIN9rquX2a0sE4mC922hvGMG8C%2Bl88hRD0Oh4w96tXoG9sJHXJ%2FlCbK5TFafxtVUXX8B6e%2FUirUh05GXp%2BSdsOTTqbDd%2BQ2bLWENKMdYUw5OXgwgY6pgHj6Hymk6tz5japWe%2FJn6c6irrLF8VsYaiYdV5nsNpbJ6vrP6IkNLGY6n17h3UDfD5sGl1rMJQBY73WypyWgSxQvSJ1SxBp6Jm1XiIAutde3llfeo%2FU%2FQPFcR%2BauLfHK5nbTx%2F6w7zGw5A7U7DwO4ZFnf03wXwP1mkG8UIoRVickONtqCGcsi3KMz%2B7fuOaXzi%2Bo1yPZWw%2Ffh67BJGyYQtVWfPmSGG3&X-Amz-Signature=34cad442b3507ba562221317553277663eb1ef382ef9e77ecc9820afa17be431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGSLPUY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBFZk9okr2ujmrf6TmyisJ2fZzlF9HvG2B5B01XNiJmlAiAbV72eBGv%2FN0Sy9XkVSSroDRva%2FgS%2FVN%2F2qlq0Lio4SSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxuQCqbV%2FKcTzpSTJKtwD%2BqkZwEJBH2THL%2FKGEELG%2F%2FeAEKp67RFg1eUefUi5ICdWYvfwHop8mo6wg%2FTJ%2F8L%2BMK0rkUjEQI1ivjmJ80qvJeLak%2B0DN3rjG2yFZJQBpXcE4CTfnv2%2BCvrZxGo%2F7bZMAzELA%2FHP0l4q3vRnEv0b3WGAX0%2BXYyf1bkrdCwUN8iuX3eEWfNzp4d6Zaro1aeepA18C5tDba5Ulbl5j66vs8v27Ac4UAydA3GK0nmZSVJMdHhTtsuwV4mAaM1vsT%2FoVKFuygZuyFX0xZH8CTjdSMlZCMmdCbmWMsPcwXYFzzyFScZmOYkyLYIq1kzlVKfieesvLaw0mkhBIxVcTcqZ0SV%2FsdMgyeOk%2FQzft%2BljOqXOk75qIhAVWXh%2FLqAFTHEUY5QfuIZkzS2RaOQdPJxoDm73zejIUcQHmBg1Xy1%2Bjr3HxQwIdJ75W9rluXLEdPYu7vjEUe8EaC3GuMCJhViCmMMp%2BY%2FYIKscZPBYbt%2FCGBRIGdohK5jtGt8CRbrPOUdMujyquOaOXcP67kfwp99CIN9rquX2a0sE4mC922hvGMG8C%2Bl88hRD0Oh4w96tXoG9sJHXJ%2FlCbK5TFafxtVUXX8B6e%2FUirUh05GXp%2BSdsOTTqbDd%2BQ2bLWENKMdYUw5OXgwgY6pgHj6Hymk6tz5japWe%2FJn6c6irrLF8VsYaiYdV5nsNpbJ6vrP6IkNLGY6n17h3UDfD5sGl1rMJQBY73WypyWgSxQvSJ1SxBp6Jm1XiIAutde3llfeo%2FU%2FQPFcR%2BauLfHK5nbTx%2F6w7zGw5A7U7DwO4ZFnf03wXwP1mkG8UIoRVickONtqCGcsi3KMz%2B7fuOaXzi%2Bo1yPZWw%2Ffh67BJGyYQtVWfPmSGG3&X-Amz-Signature=ee5037372240bb9d02539a390bd049e16bde8b292da5f7d50e8769daedc1dee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGSLPUY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBFZk9okr2ujmrf6TmyisJ2fZzlF9HvG2B5B01XNiJmlAiAbV72eBGv%2FN0Sy9XkVSSroDRva%2FgS%2FVN%2F2qlq0Lio4SSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxuQCqbV%2FKcTzpSTJKtwD%2BqkZwEJBH2THL%2FKGEELG%2F%2FeAEKp67RFg1eUefUi5ICdWYvfwHop8mo6wg%2FTJ%2F8L%2BMK0rkUjEQI1ivjmJ80qvJeLak%2B0DN3rjG2yFZJQBpXcE4CTfnv2%2BCvrZxGo%2F7bZMAzELA%2FHP0l4q3vRnEv0b3WGAX0%2BXYyf1bkrdCwUN8iuX3eEWfNzp4d6Zaro1aeepA18C5tDba5Ulbl5j66vs8v27Ac4UAydA3GK0nmZSVJMdHhTtsuwV4mAaM1vsT%2FoVKFuygZuyFX0xZH8CTjdSMlZCMmdCbmWMsPcwXYFzzyFScZmOYkyLYIq1kzlVKfieesvLaw0mkhBIxVcTcqZ0SV%2FsdMgyeOk%2FQzft%2BljOqXOk75qIhAVWXh%2FLqAFTHEUY5QfuIZkzS2RaOQdPJxoDm73zejIUcQHmBg1Xy1%2Bjr3HxQwIdJ75W9rluXLEdPYu7vjEUe8EaC3GuMCJhViCmMMp%2BY%2FYIKscZPBYbt%2FCGBRIGdohK5jtGt8CRbrPOUdMujyquOaOXcP67kfwp99CIN9rquX2a0sE4mC922hvGMG8C%2Bl88hRD0Oh4w96tXoG9sJHXJ%2FlCbK5TFafxtVUXX8B6e%2FUirUh05GXp%2BSdsOTTqbDd%2BQ2bLWENKMdYUw5OXgwgY6pgHj6Hymk6tz5japWe%2FJn6c6irrLF8VsYaiYdV5nsNpbJ6vrP6IkNLGY6n17h3UDfD5sGl1rMJQBY73WypyWgSxQvSJ1SxBp6Jm1XiIAutde3llfeo%2FU%2FQPFcR%2BauLfHK5nbTx%2F6w7zGw5A7U7DwO4ZFnf03wXwP1mkG8UIoRVickONtqCGcsi3KMz%2B7fuOaXzi%2Bo1yPZWw%2Ffh67BJGyYQtVWfPmSGG3&X-Amz-Signature=ca27fe2d284bd97835316af10a82079d903bfbf24403d965f7c3235c697a0510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGSLPUY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBFZk9okr2ujmrf6TmyisJ2fZzlF9HvG2B5B01XNiJmlAiAbV72eBGv%2FN0Sy9XkVSSroDRva%2FgS%2FVN%2F2qlq0Lio4SSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxuQCqbV%2FKcTzpSTJKtwD%2BqkZwEJBH2THL%2FKGEELG%2F%2FeAEKp67RFg1eUefUi5ICdWYvfwHop8mo6wg%2FTJ%2F8L%2BMK0rkUjEQI1ivjmJ80qvJeLak%2B0DN3rjG2yFZJQBpXcE4CTfnv2%2BCvrZxGo%2F7bZMAzELA%2FHP0l4q3vRnEv0b3WGAX0%2BXYyf1bkrdCwUN8iuX3eEWfNzp4d6Zaro1aeepA18C5tDba5Ulbl5j66vs8v27Ac4UAydA3GK0nmZSVJMdHhTtsuwV4mAaM1vsT%2FoVKFuygZuyFX0xZH8CTjdSMlZCMmdCbmWMsPcwXYFzzyFScZmOYkyLYIq1kzlVKfieesvLaw0mkhBIxVcTcqZ0SV%2FsdMgyeOk%2FQzft%2BljOqXOk75qIhAVWXh%2FLqAFTHEUY5QfuIZkzS2RaOQdPJxoDm73zejIUcQHmBg1Xy1%2Bjr3HxQwIdJ75W9rluXLEdPYu7vjEUe8EaC3GuMCJhViCmMMp%2BY%2FYIKscZPBYbt%2FCGBRIGdohK5jtGt8CRbrPOUdMujyquOaOXcP67kfwp99CIN9rquX2a0sE4mC922hvGMG8C%2Bl88hRD0Oh4w96tXoG9sJHXJ%2FlCbK5TFafxtVUXX8B6e%2FUirUh05GXp%2BSdsOTTqbDd%2BQ2bLWENKMdYUw5OXgwgY6pgHj6Hymk6tz5japWe%2FJn6c6irrLF8VsYaiYdV5nsNpbJ6vrP6IkNLGY6n17h3UDfD5sGl1rMJQBY73WypyWgSxQvSJ1SxBp6Jm1XiIAutde3llfeo%2FU%2FQPFcR%2BauLfHK5nbTx%2F6w7zGw5A7U7DwO4ZFnf03wXwP1mkG8UIoRVickONtqCGcsi3KMz%2B7fuOaXzi%2Bo1yPZWw%2Ffh67BJGyYQtVWfPmSGG3&X-Amz-Signature=8cccee3630cc259b8bf8587719954b4645b992a3c7d2f898de1f53b1dbdbcad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

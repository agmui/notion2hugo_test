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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW35STYP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDsvLPUjUzsPH4MWmEDo5%2B9YGm8%2BZ%2FlkxgvKowC%2B9c0AIhAOo%2B5RDBKtRiMWeJp0MTa9RTIVJmz6I6Vpk0UbD2rf7GKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG1QN8Be44%2Bc0Pe48q3ANdOfSXARFXt9ZZpHwPdrQXiVsrj2CdwZwdyY4vEbtEhq3cft%2BMRWpfUBEF48oXX0FcKwuU7I5e%2F0BeYiPkP7VeKZ%2BQ8nphg%2Fx1v4TyB0iE7Y967UOY04W8WayCLm6EnLSxwzWL2ySNP2kyqqoKfLWUESXubitnRLF3dvf8W6UDUaIHl%2F80SKuXCXjJa6lBe%2BZBQcYpKGcwiw%2BJivODNPL%2F%2FwM8UYJX3tHKdRvEVPsir5ygI%2FO8FIlcqy8KrQxVq%2F3a%2Bymto5q4A6FqX7gsyHuBE1fzrYxD5x%2F7XZ4DVKpfJy%2BRssYI6t9zyE3ozSm6czub3bz2ixAjFP5qBHk9K0g0XHNsO6KV%2FecC1%2B%2B8bZW6GwYDM0E6bE3EgPcM7WOhDlz518OI6bT%2BMPCtbV3BNGLbLG5K9GnN%2BGUwwZMuS5Snft60gvd8yGmXEr0PRZ1LH8wdsn0aR100eV4NC2FX7pq12VK7dpqC5rjNGqF4I4jjTci3xRDjoSZmCIB9RrLW446TshN3nbQodEkqGEr7ZAhIwFIjnlJYxx3WJp%2BbQH8fWvtJtKNMrPxyFfHEYyNVioUHllglAqCAb%2FLVwNNtnUomalzX8QSFnsWBOW1azk8Vp%2B4YavVa%2FeoEGVTXrDDx8pTCBjqkAUP6jeyas1TVBo%2FkJ%2Bp6d4ka2sRWxt1YniqZSESsTqEV%2FNEhxe%2BdmNz5Ro9x%2BTis%2BWOUytPiaEEL5cFBQxdg%2BNDuN6UD2Vihk8Msa%2FvlcvhXX936gHmurOeMYw9EdPCC72m8wyo4ireZI0RoHueLxyErCh9I0VfBRSTV3OoOXkg7BMTs1rmuj5DomfOHvRxq9oCRwh9%2Bv0SldfGIHB9SKWWzRiLM&X-Amz-Signature=9ede973ea217d4e8b2676788910886284e0784cd1d5c59ac516b2754c5a900e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW35STYP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDsvLPUjUzsPH4MWmEDo5%2B9YGm8%2BZ%2FlkxgvKowC%2B9c0AIhAOo%2B5RDBKtRiMWeJp0MTa9RTIVJmz6I6Vpk0UbD2rf7GKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG1QN8Be44%2Bc0Pe48q3ANdOfSXARFXt9ZZpHwPdrQXiVsrj2CdwZwdyY4vEbtEhq3cft%2BMRWpfUBEF48oXX0FcKwuU7I5e%2F0BeYiPkP7VeKZ%2BQ8nphg%2Fx1v4TyB0iE7Y967UOY04W8WayCLm6EnLSxwzWL2ySNP2kyqqoKfLWUESXubitnRLF3dvf8W6UDUaIHl%2F80SKuXCXjJa6lBe%2BZBQcYpKGcwiw%2BJivODNPL%2F%2FwM8UYJX3tHKdRvEVPsir5ygI%2FO8FIlcqy8KrQxVq%2F3a%2Bymto5q4A6FqX7gsyHuBE1fzrYxD5x%2F7XZ4DVKpfJy%2BRssYI6t9zyE3ozSm6czub3bz2ixAjFP5qBHk9K0g0XHNsO6KV%2FecC1%2B%2B8bZW6GwYDM0E6bE3EgPcM7WOhDlz518OI6bT%2BMPCtbV3BNGLbLG5K9GnN%2BGUwwZMuS5Snft60gvd8yGmXEr0PRZ1LH8wdsn0aR100eV4NC2FX7pq12VK7dpqC5rjNGqF4I4jjTci3xRDjoSZmCIB9RrLW446TshN3nbQodEkqGEr7ZAhIwFIjnlJYxx3WJp%2BbQH8fWvtJtKNMrPxyFfHEYyNVioUHllglAqCAb%2FLVwNNtnUomalzX8QSFnsWBOW1azk8Vp%2B4YavVa%2FeoEGVTXrDDx8pTCBjqkAUP6jeyas1TVBo%2FkJ%2Bp6d4ka2sRWxt1YniqZSESsTqEV%2FNEhxe%2BdmNz5Ro9x%2BTis%2BWOUytPiaEEL5cFBQxdg%2BNDuN6UD2Vihk8Msa%2FvlcvhXX936gHmurOeMYw9EdPCC72m8wyo4ireZI0RoHueLxyErCh9I0VfBRSTV3OoOXkg7BMTs1rmuj5DomfOHvRxq9oCRwh9%2Bv0SldfGIHB9SKWWzRiLM&X-Amz-Signature=8a8b4f10dc843e731356c962b9f5d1e7fbc093fd0717c79544ea3fd23d1b8c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW35STYP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDsvLPUjUzsPH4MWmEDo5%2B9YGm8%2BZ%2FlkxgvKowC%2B9c0AIhAOo%2B5RDBKtRiMWeJp0MTa9RTIVJmz6I6Vpk0UbD2rf7GKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG1QN8Be44%2Bc0Pe48q3ANdOfSXARFXt9ZZpHwPdrQXiVsrj2CdwZwdyY4vEbtEhq3cft%2BMRWpfUBEF48oXX0FcKwuU7I5e%2F0BeYiPkP7VeKZ%2BQ8nphg%2Fx1v4TyB0iE7Y967UOY04W8WayCLm6EnLSxwzWL2ySNP2kyqqoKfLWUESXubitnRLF3dvf8W6UDUaIHl%2F80SKuXCXjJa6lBe%2BZBQcYpKGcwiw%2BJivODNPL%2F%2FwM8UYJX3tHKdRvEVPsir5ygI%2FO8FIlcqy8KrQxVq%2F3a%2Bymto5q4A6FqX7gsyHuBE1fzrYxD5x%2F7XZ4DVKpfJy%2BRssYI6t9zyE3ozSm6czub3bz2ixAjFP5qBHk9K0g0XHNsO6KV%2FecC1%2B%2B8bZW6GwYDM0E6bE3EgPcM7WOhDlz518OI6bT%2BMPCtbV3BNGLbLG5K9GnN%2BGUwwZMuS5Snft60gvd8yGmXEr0PRZ1LH8wdsn0aR100eV4NC2FX7pq12VK7dpqC5rjNGqF4I4jjTci3xRDjoSZmCIB9RrLW446TshN3nbQodEkqGEr7ZAhIwFIjnlJYxx3WJp%2BbQH8fWvtJtKNMrPxyFfHEYyNVioUHllglAqCAb%2FLVwNNtnUomalzX8QSFnsWBOW1azk8Vp%2B4YavVa%2FeoEGVTXrDDx8pTCBjqkAUP6jeyas1TVBo%2FkJ%2Bp6d4ka2sRWxt1YniqZSESsTqEV%2FNEhxe%2BdmNz5Ro9x%2BTis%2BWOUytPiaEEL5cFBQxdg%2BNDuN6UD2Vihk8Msa%2FvlcvhXX936gHmurOeMYw9EdPCC72m8wyo4ireZI0RoHueLxyErCh9I0VfBRSTV3OoOXkg7BMTs1rmuj5DomfOHvRxq9oCRwh9%2Bv0SldfGIHB9SKWWzRiLM&X-Amz-Signature=34edf5cbada949e44de431dad7fbaff7f0711b94829c361afdc1509ee62b22f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW35STYP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDsvLPUjUzsPH4MWmEDo5%2B9YGm8%2BZ%2FlkxgvKowC%2B9c0AIhAOo%2B5RDBKtRiMWeJp0MTa9RTIVJmz6I6Vpk0UbD2rf7GKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG1QN8Be44%2Bc0Pe48q3ANdOfSXARFXt9ZZpHwPdrQXiVsrj2CdwZwdyY4vEbtEhq3cft%2BMRWpfUBEF48oXX0FcKwuU7I5e%2F0BeYiPkP7VeKZ%2BQ8nphg%2Fx1v4TyB0iE7Y967UOY04W8WayCLm6EnLSxwzWL2ySNP2kyqqoKfLWUESXubitnRLF3dvf8W6UDUaIHl%2F80SKuXCXjJa6lBe%2BZBQcYpKGcwiw%2BJivODNPL%2F%2FwM8UYJX3tHKdRvEVPsir5ygI%2FO8FIlcqy8KrQxVq%2F3a%2Bymto5q4A6FqX7gsyHuBE1fzrYxD5x%2F7XZ4DVKpfJy%2BRssYI6t9zyE3ozSm6czub3bz2ixAjFP5qBHk9K0g0XHNsO6KV%2FecC1%2B%2B8bZW6GwYDM0E6bE3EgPcM7WOhDlz518OI6bT%2BMPCtbV3BNGLbLG5K9GnN%2BGUwwZMuS5Snft60gvd8yGmXEr0PRZ1LH8wdsn0aR100eV4NC2FX7pq12VK7dpqC5rjNGqF4I4jjTci3xRDjoSZmCIB9RrLW446TshN3nbQodEkqGEr7ZAhIwFIjnlJYxx3WJp%2BbQH8fWvtJtKNMrPxyFfHEYyNVioUHllglAqCAb%2FLVwNNtnUomalzX8QSFnsWBOW1azk8Vp%2B4YavVa%2FeoEGVTXrDDx8pTCBjqkAUP6jeyas1TVBo%2FkJ%2Bp6d4ka2sRWxt1YniqZSESsTqEV%2FNEhxe%2BdmNz5Ro9x%2BTis%2BWOUytPiaEEL5cFBQxdg%2BNDuN6UD2Vihk8Msa%2FvlcvhXX936gHmurOeMYw9EdPCC72m8wyo4ireZI0RoHueLxyErCh9I0VfBRSTV3OoOXkg7BMTs1rmuj5DomfOHvRxq9oCRwh9%2Bv0SldfGIHB9SKWWzRiLM&X-Amz-Signature=a0936dcc516f7ec9805b4974e44debadca92e39350dd37536fad0b437011944e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW35STYP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDsvLPUjUzsPH4MWmEDo5%2B9YGm8%2BZ%2FlkxgvKowC%2B9c0AIhAOo%2B5RDBKtRiMWeJp0MTa9RTIVJmz6I6Vpk0UbD2rf7GKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG1QN8Be44%2Bc0Pe48q3ANdOfSXARFXt9ZZpHwPdrQXiVsrj2CdwZwdyY4vEbtEhq3cft%2BMRWpfUBEF48oXX0FcKwuU7I5e%2F0BeYiPkP7VeKZ%2BQ8nphg%2Fx1v4TyB0iE7Y967UOY04W8WayCLm6EnLSxwzWL2ySNP2kyqqoKfLWUESXubitnRLF3dvf8W6UDUaIHl%2F80SKuXCXjJa6lBe%2BZBQcYpKGcwiw%2BJivODNPL%2F%2FwM8UYJX3tHKdRvEVPsir5ygI%2FO8FIlcqy8KrQxVq%2F3a%2Bymto5q4A6FqX7gsyHuBE1fzrYxD5x%2F7XZ4DVKpfJy%2BRssYI6t9zyE3ozSm6czub3bz2ixAjFP5qBHk9K0g0XHNsO6KV%2FecC1%2B%2B8bZW6GwYDM0E6bE3EgPcM7WOhDlz518OI6bT%2BMPCtbV3BNGLbLG5K9GnN%2BGUwwZMuS5Snft60gvd8yGmXEr0PRZ1LH8wdsn0aR100eV4NC2FX7pq12VK7dpqC5rjNGqF4I4jjTci3xRDjoSZmCIB9RrLW446TshN3nbQodEkqGEr7ZAhIwFIjnlJYxx3WJp%2BbQH8fWvtJtKNMrPxyFfHEYyNVioUHllglAqCAb%2FLVwNNtnUomalzX8QSFnsWBOW1azk8Vp%2B4YavVa%2FeoEGVTXrDDx8pTCBjqkAUP6jeyas1TVBo%2FkJ%2Bp6d4ka2sRWxt1YniqZSESsTqEV%2FNEhxe%2BdmNz5Ro9x%2BTis%2BWOUytPiaEEL5cFBQxdg%2BNDuN6UD2Vihk8Msa%2FvlcvhXX936gHmurOeMYw9EdPCC72m8wyo4ireZI0RoHueLxyErCh9I0VfBRSTV3OoOXkg7BMTs1rmuj5DomfOHvRxq9oCRwh9%2Bv0SldfGIHB9SKWWzRiLM&X-Amz-Signature=0e673d9bd392e5cc74783235e056314ffc18cf9905be0d9ffd7ffe7f1118ad07&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW35STYP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDsvLPUjUzsPH4MWmEDo5%2B9YGm8%2BZ%2FlkxgvKowC%2B9c0AIhAOo%2B5RDBKtRiMWeJp0MTa9RTIVJmz6I6Vpk0UbD2rf7GKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG1QN8Be44%2Bc0Pe48q3ANdOfSXARFXt9ZZpHwPdrQXiVsrj2CdwZwdyY4vEbtEhq3cft%2BMRWpfUBEF48oXX0FcKwuU7I5e%2F0BeYiPkP7VeKZ%2BQ8nphg%2Fx1v4TyB0iE7Y967UOY04W8WayCLm6EnLSxwzWL2ySNP2kyqqoKfLWUESXubitnRLF3dvf8W6UDUaIHl%2F80SKuXCXjJa6lBe%2BZBQcYpKGcwiw%2BJivODNPL%2F%2FwM8UYJX3tHKdRvEVPsir5ygI%2FO8FIlcqy8KrQxVq%2F3a%2Bymto5q4A6FqX7gsyHuBE1fzrYxD5x%2F7XZ4DVKpfJy%2BRssYI6t9zyE3ozSm6czub3bz2ixAjFP5qBHk9K0g0XHNsO6KV%2FecC1%2B%2B8bZW6GwYDM0E6bE3EgPcM7WOhDlz518OI6bT%2BMPCtbV3BNGLbLG5K9GnN%2BGUwwZMuS5Snft60gvd8yGmXEr0PRZ1LH8wdsn0aR100eV4NC2FX7pq12VK7dpqC5rjNGqF4I4jjTci3xRDjoSZmCIB9RrLW446TshN3nbQodEkqGEr7ZAhIwFIjnlJYxx3WJp%2BbQH8fWvtJtKNMrPxyFfHEYyNVioUHllglAqCAb%2FLVwNNtnUomalzX8QSFnsWBOW1azk8Vp%2B4YavVa%2FeoEGVTXrDDx8pTCBjqkAUP6jeyas1TVBo%2FkJ%2Bp6d4ka2sRWxt1YniqZSESsTqEV%2FNEhxe%2BdmNz5Ro9x%2BTis%2BWOUytPiaEEL5cFBQxdg%2BNDuN6UD2Vihk8Msa%2FvlcvhXX936gHmurOeMYw9EdPCC72m8wyo4ireZI0RoHueLxyErCh9I0VfBRSTV3OoOXkg7BMTs1rmuj5DomfOHvRxq9oCRwh9%2Bv0SldfGIHB9SKWWzRiLM&X-Amz-Signature=0c8a57c3d47fbf151fb1e7f40b153c7ac2ba1266f6087884d6772271a36e0b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW35STYP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDsvLPUjUzsPH4MWmEDo5%2B9YGm8%2BZ%2FlkxgvKowC%2B9c0AIhAOo%2B5RDBKtRiMWeJp0MTa9RTIVJmz6I6Vpk0UbD2rf7GKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG1QN8Be44%2Bc0Pe48q3ANdOfSXARFXt9ZZpHwPdrQXiVsrj2CdwZwdyY4vEbtEhq3cft%2BMRWpfUBEF48oXX0FcKwuU7I5e%2F0BeYiPkP7VeKZ%2BQ8nphg%2Fx1v4TyB0iE7Y967UOY04W8WayCLm6EnLSxwzWL2ySNP2kyqqoKfLWUESXubitnRLF3dvf8W6UDUaIHl%2F80SKuXCXjJa6lBe%2BZBQcYpKGcwiw%2BJivODNPL%2F%2FwM8UYJX3tHKdRvEVPsir5ygI%2FO8FIlcqy8KrQxVq%2F3a%2Bymto5q4A6FqX7gsyHuBE1fzrYxD5x%2F7XZ4DVKpfJy%2BRssYI6t9zyE3ozSm6czub3bz2ixAjFP5qBHk9K0g0XHNsO6KV%2FecC1%2B%2B8bZW6GwYDM0E6bE3EgPcM7WOhDlz518OI6bT%2BMPCtbV3BNGLbLG5K9GnN%2BGUwwZMuS5Snft60gvd8yGmXEr0PRZ1LH8wdsn0aR100eV4NC2FX7pq12VK7dpqC5rjNGqF4I4jjTci3xRDjoSZmCIB9RrLW446TshN3nbQodEkqGEr7ZAhIwFIjnlJYxx3WJp%2BbQH8fWvtJtKNMrPxyFfHEYyNVioUHllglAqCAb%2FLVwNNtnUomalzX8QSFnsWBOW1azk8Vp%2B4YavVa%2FeoEGVTXrDDx8pTCBjqkAUP6jeyas1TVBo%2FkJ%2Bp6d4ka2sRWxt1YniqZSESsTqEV%2FNEhxe%2BdmNz5Ro9x%2BTis%2BWOUytPiaEEL5cFBQxdg%2BNDuN6UD2Vihk8Msa%2FvlcvhXX936gHmurOeMYw9EdPCC72m8wyo4ireZI0RoHueLxyErCh9I0VfBRSTV3OoOXkg7BMTs1rmuj5DomfOHvRxq9oCRwh9%2Bv0SldfGIHB9SKWWzRiLM&X-Amz-Signature=b9ec6c3a30bfd50c2737e332cb326e5eb4716ef8a240fca333edb0dbd288787a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

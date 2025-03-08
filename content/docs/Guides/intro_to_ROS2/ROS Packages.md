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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL72UV6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDH3FYDT%2BCiUYKwRKTMBIk4bUcQISYFHxNxK7ciY48uOwIgBsDff0P98T53xlCi00U21xCscy8p7SE4vDzyuNBrCeEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOPF9k0PtMxL0KwnLSrcA4b7WlBzIgOCgIS3KL%2BjDz5TGfGjtDAYs20h3qdbQ2UVenegjMdMEOZWSDs5a7En4lpk%2FGnQqpLYFtOrh5O%2BPXkOlFO7ZBrN3e3L3uQRw3I6%2BqQzpFmbA9I1NKGFVXli1xf4Ca0JpNp%2FN9NZnf%2FX9q4DyBP9NZOwddORy8BI0T2cD27wVW9xzsLLy3KHsd%2F2lcR3Fnmy8p%2BbPHoMS2NCQrikqYfTDI9qgoEbBx92TgV4SLNfnKsnMMw8nvGjKF4CbfiwJfjOBClP2RPdMYJ7moI5bGdqwD039m%2BEf1ZWZ08i3az%2FwOR0FMr%2BQSZ0%2F6gUJ0uMZ9am%2BnHX8P34oJe9mWUu%2B3xYWZaI%2FiDADiic%2F9gIf9YKhEuBCpk13gaJHMuW%2FkcENBk4qKqKBKaiL%2BbFtjKCiEL2M4%2BD5xlwPWn4FQnbWU83Lf3X912Bob%2Bs%2FmFff0k9WHUsibptESBfJnBIWgKV2XBYO9PNwPXoqfrOLbRloOS%2BtGzuvRE7tdrEwnNl5lD6QKt8y%2BqDiMjy8zalesoNlKPlXNlpssWk15gtZXC1P169ZF1ujUkGV8EcUegCMqrthJvKv7m1qgHuO6VZdSmfhN79s3t%2BNwtydhCuBj%2BT70OLYi3VzuTGUyExMLrgr74GOqUBcnPuc7y3caQfO3pqnm%2Br%2FjJzcsMmOAetB0MWrqKwWNVDZiqiBcUpaYUzqbqzHlzYy2Fsp7OnNEDEqRqSncjp48VVhYEJrp7FxImjEeMRPVlCXMDY7yswTgwm76UBKP1CmbMOdRqXPlIMRr6tcYwezAjaly8wQV6evOMkEzTWCx75b3vc5h0YWxGwEUIk6BNry9eE4Wr%2Bi7H1%2Bc8I%2B087wUNyPCpd&X-Amz-Signature=6c66176965d414b60b11973e140ad272759f4c4ca5ee16da318a3412237dac44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL72UV6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDH3FYDT%2BCiUYKwRKTMBIk4bUcQISYFHxNxK7ciY48uOwIgBsDff0P98T53xlCi00U21xCscy8p7SE4vDzyuNBrCeEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOPF9k0PtMxL0KwnLSrcA4b7WlBzIgOCgIS3KL%2BjDz5TGfGjtDAYs20h3qdbQ2UVenegjMdMEOZWSDs5a7En4lpk%2FGnQqpLYFtOrh5O%2BPXkOlFO7ZBrN3e3L3uQRw3I6%2BqQzpFmbA9I1NKGFVXli1xf4Ca0JpNp%2FN9NZnf%2FX9q4DyBP9NZOwddORy8BI0T2cD27wVW9xzsLLy3KHsd%2F2lcR3Fnmy8p%2BbPHoMS2NCQrikqYfTDI9qgoEbBx92TgV4SLNfnKsnMMw8nvGjKF4CbfiwJfjOBClP2RPdMYJ7moI5bGdqwD039m%2BEf1ZWZ08i3az%2FwOR0FMr%2BQSZ0%2F6gUJ0uMZ9am%2BnHX8P34oJe9mWUu%2B3xYWZaI%2FiDADiic%2F9gIf9YKhEuBCpk13gaJHMuW%2FkcENBk4qKqKBKaiL%2BbFtjKCiEL2M4%2BD5xlwPWn4FQnbWU83Lf3X912Bob%2Bs%2FmFff0k9WHUsibptESBfJnBIWgKV2XBYO9PNwPXoqfrOLbRloOS%2BtGzuvRE7tdrEwnNl5lD6QKt8y%2BqDiMjy8zalesoNlKPlXNlpssWk15gtZXC1P169ZF1ujUkGV8EcUegCMqrthJvKv7m1qgHuO6VZdSmfhN79s3t%2BNwtydhCuBj%2BT70OLYi3VzuTGUyExMLrgr74GOqUBcnPuc7y3caQfO3pqnm%2Br%2FjJzcsMmOAetB0MWrqKwWNVDZiqiBcUpaYUzqbqzHlzYy2Fsp7OnNEDEqRqSncjp48VVhYEJrp7FxImjEeMRPVlCXMDY7yswTgwm76UBKP1CmbMOdRqXPlIMRr6tcYwezAjaly8wQV6evOMkEzTWCx75b3vc5h0YWxGwEUIk6BNry9eE4Wr%2Bi7H1%2Bc8I%2B087wUNyPCpd&X-Amz-Signature=087fd0594fa46e32f34eb3112abb152f79b63e258dc605296b8fd25090185caa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL72UV6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDH3FYDT%2BCiUYKwRKTMBIk4bUcQISYFHxNxK7ciY48uOwIgBsDff0P98T53xlCi00U21xCscy8p7SE4vDzyuNBrCeEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOPF9k0PtMxL0KwnLSrcA4b7WlBzIgOCgIS3KL%2BjDz5TGfGjtDAYs20h3qdbQ2UVenegjMdMEOZWSDs5a7En4lpk%2FGnQqpLYFtOrh5O%2BPXkOlFO7ZBrN3e3L3uQRw3I6%2BqQzpFmbA9I1NKGFVXli1xf4Ca0JpNp%2FN9NZnf%2FX9q4DyBP9NZOwddORy8BI0T2cD27wVW9xzsLLy3KHsd%2F2lcR3Fnmy8p%2BbPHoMS2NCQrikqYfTDI9qgoEbBx92TgV4SLNfnKsnMMw8nvGjKF4CbfiwJfjOBClP2RPdMYJ7moI5bGdqwD039m%2BEf1ZWZ08i3az%2FwOR0FMr%2BQSZ0%2F6gUJ0uMZ9am%2BnHX8P34oJe9mWUu%2B3xYWZaI%2FiDADiic%2F9gIf9YKhEuBCpk13gaJHMuW%2FkcENBk4qKqKBKaiL%2BbFtjKCiEL2M4%2BD5xlwPWn4FQnbWU83Lf3X912Bob%2Bs%2FmFff0k9WHUsibptESBfJnBIWgKV2XBYO9PNwPXoqfrOLbRloOS%2BtGzuvRE7tdrEwnNl5lD6QKt8y%2BqDiMjy8zalesoNlKPlXNlpssWk15gtZXC1P169ZF1ujUkGV8EcUegCMqrthJvKv7m1qgHuO6VZdSmfhN79s3t%2BNwtydhCuBj%2BT70OLYi3VzuTGUyExMLrgr74GOqUBcnPuc7y3caQfO3pqnm%2Br%2FjJzcsMmOAetB0MWrqKwWNVDZiqiBcUpaYUzqbqzHlzYy2Fsp7OnNEDEqRqSncjp48VVhYEJrp7FxImjEeMRPVlCXMDY7yswTgwm76UBKP1CmbMOdRqXPlIMRr6tcYwezAjaly8wQV6evOMkEzTWCx75b3vc5h0YWxGwEUIk6BNry9eE4Wr%2Bi7H1%2Bc8I%2B087wUNyPCpd&X-Amz-Signature=ac9b33cdf527e99325ac594414c66cc3f647ecd8b974ac1df20b461c32045773&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL72UV6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDH3FYDT%2BCiUYKwRKTMBIk4bUcQISYFHxNxK7ciY48uOwIgBsDff0P98T53xlCi00U21xCscy8p7SE4vDzyuNBrCeEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOPF9k0PtMxL0KwnLSrcA4b7WlBzIgOCgIS3KL%2BjDz5TGfGjtDAYs20h3qdbQ2UVenegjMdMEOZWSDs5a7En4lpk%2FGnQqpLYFtOrh5O%2BPXkOlFO7ZBrN3e3L3uQRw3I6%2BqQzpFmbA9I1NKGFVXli1xf4Ca0JpNp%2FN9NZnf%2FX9q4DyBP9NZOwddORy8BI0T2cD27wVW9xzsLLy3KHsd%2F2lcR3Fnmy8p%2BbPHoMS2NCQrikqYfTDI9qgoEbBx92TgV4SLNfnKsnMMw8nvGjKF4CbfiwJfjOBClP2RPdMYJ7moI5bGdqwD039m%2BEf1ZWZ08i3az%2FwOR0FMr%2BQSZ0%2F6gUJ0uMZ9am%2BnHX8P34oJe9mWUu%2B3xYWZaI%2FiDADiic%2F9gIf9YKhEuBCpk13gaJHMuW%2FkcENBk4qKqKBKaiL%2BbFtjKCiEL2M4%2BD5xlwPWn4FQnbWU83Lf3X912Bob%2Bs%2FmFff0k9WHUsibptESBfJnBIWgKV2XBYO9PNwPXoqfrOLbRloOS%2BtGzuvRE7tdrEwnNl5lD6QKt8y%2BqDiMjy8zalesoNlKPlXNlpssWk15gtZXC1P169ZF1ujUkGV8EcUegCMqrthJvKv7m1qgHuO6VZdSmfhN79s3t%2BNwtydhCuBj%2BT70OLYi3VzuTGUyExMLrgr74GOqUBcnPuc7y3caQfO3pqnm%2Br%2FjJzcsMmOAetB0MWrqKwWNVDZiqiBcUpaYUzqbqzHlzYy2Fsp7OnNEDEqRqSncjp48VVhYEJrp7FxImjEeMRPVlCXMDY7yswTgwm76UBKP1CmbMOdRqXPlIMRr6tcYwezAjaly8wQV6evOMkEzTWCx75b3vc5h0YWxGwEUIk6BNry9eE4Wr%2Bi7H1%2Bc8I%2B087wUNyPCpd&X-Amz-Signature=3f3c4bd0b120c0948a5e6cade127151d138f38ced778c080f56150ef0d6ec274&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL72UV6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDH3FYDT%2BCiUYKwRKTMBIk4bUcQISYFHxNxK7ciY48uOwIgBsDff0P98T53xlCi00U21xCscy8p7SE4vDzyuNBrCeEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOPF9k0PtMxL0KwnLSrcA4b7WlBzIgOCgIS3KL%2BjDz5TGfGjtDAYs20h3qdbQ2UVenegjMdMEOZWSDs5a7En4lpk%2FGnQqpLYFtOrh5O%2BPXkOlFO7ZBrN3e3L3uQRw3I6%2BqQzpFmbA9I1NKGFVXli1xf4Ca0JpNp%2FN9NZnf%2FX9q4DyBP9NZOwddORy8BI0T2cD27wVW9xzsLLy3KHsd%2F2lcR3Fnmy8p%2BbPHoMS2NCQrikqYfTDI9qgoEbBx92TgV4SLNfnKsnMMw8nvGjKF4CbfiwJfjOBClP2RPdMYJ7moI5bGdqwD039m%2BEf1ZWZ08i3az%2FwOR0FMr%2BQSZ0%2F6gUJ0uMZ9am%2BnHX8P34oJe9mWUu%2B3xYWZaI%2FiDADiic%2F9gIf9YKhEuBCpk13gaJHMuW%2FkcENBk4qKqKBKaiL%2BbFtjKCiEL2M4%2BD5xlwPWn4FQnbWU83Lf3X912Bob%2Bs%2FmFff0k9WHUsibptESBfJnBIWgKV2XBYO9PNwPXoqfrOLbRloOS%2BtGzuvRE7tdrEwnNl5lD6QKt8y%2BqDiMjy8zalesoNlKPlXNlpssWk15gtZXC1P169ZF1ujUkGV8EcUegCMqrthJvKv7m1qgHuO6VZdSmfhN79s3t%2BNwtydhCuBj%2BT70OLYi3VzuTGUyExMLrgr74GOqUBcnPuc7y3caQfO3pqnm%2Br%2FjJzcsMmOAetB0MWrqKwWNVDZiqiBcUpaYUzqbqzHlzYy2Fsp7OnNEDEqRqSncjp48VVhYEJrp7FxImjEeMRPVlCXMDY7yswTgwm76UBKP1CmbMOdRqXPlIMRr6tcYwezAjaly8wQV6evOMkEzTWCx75b3vc5h0YWxGwEUIk6BNry9eE4Wr%2Bi7H1%2Bc8I%2B087wUNyPCpd&X-Amz-Signature=b05ebb879b254236f10721e6af0686bafdeb966e8d0c73934ea33633ebbfdf56&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL72UV6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDH3FYDT%2BCiUYKwRKTMBIk4bUcQISYFHxNxK7ciY48uOwIgBsDff0P98T53xlCi00U21xCscy8p7SE4vDzyuNBrCeEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOPF9k0PtMxL0KwnLSrcA4b7WlBzIgOCgIS3KL%2BjDz5TGfGjtDAYs20h3qdbQ2UVenegjMdMEOZWSDs5a7En4lpk%2FGnQqpLYFtOrh5O%2BPXkOlFO7ZBrN3e3L3uQRw3I6%2BqQzpFmbA9I1NKGFVXli1xf4Ca0JpNp%2FN9NZnf%2FX9q4DyBP9NZOwddORy8BI0T2cD27wVW9xzsLLy3KHsd%2F2lcR3Fnmy8p%2BbPHoMS2NCQrikqYfTDI9qgoEbBx92TgV4SLNfnKsnMMw8nvGjKF4CbfiwJfjOBClP2RPdMYJ7moI5bGdqwD039m%2BEf1ZWZ08i3az%2FwOR0FMr%2BQSZ0%2F6gUJ0uMZ9am%2BnHX8P34oJe9mWUu%2B3xYWZaI%2FiDADiic%2F9gIf9YKhEuBCpk13gaJHMuW%2FkcENBk4qKqKBKaiL%2BbFtjKCiEL2M4%2BD5xlwPWn4FQnbWU83Lf3X912Bob%2Bs%2FmFff0k9WHUsibptESBfJnBIWgKV2XBYO9PNwPXoqfrOLbRloOS%2BtGzuvRE7tdrEwnNl5lD6QKt8y%2BqDiMjy8zalesoNlKPlXNlpssWk15gtZXC1P169ZF1ujUkGV8EcUegCMqrthJvKv7m1qgHuO6VZdSmfhN79s3t%2BNwtydhCuBj%2BT70OLYi3VzuTGUyExMLrgr74GOqUBcnPuc7y3caQfO3pqnm%2Br%2FjJzcsMmOAetB0MWrqKwWNVDZiqiBcUpaYUzqbqzHlzYy2Fsp7OnNEDEqRqSncjp48VVhYEJrp7FxImjEeMRPVlCXMDY7yswTgwm76UBKP1CmbMOdRqXPlIMRr6tcYwezAjaly8wQV6evOMkEzTWCx75b3vc5h0YWxGwEUIk6BNry9eE4Wr%2Bi7H1%2Bc8I%2B087wUNyPCpd&X-Amz-Signature=6f1ab835793df48564e6f574c52f853553ac8d5e9e284d861d06effdcb86b2f3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL72UV6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDH3FYDT%2BCiUYKwRKTMBIk4bUcQISYFHxNxK7ciY48uOwIgBsDff0P98T53xlCi00U21xCscy8p7SE4vDzyuNBrCeEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOPF9k0PtMxL0KwnLSrcA4b7WlBzIgOCgIS3KL%2BjDz5TGfGjtDAYs20h3qdbQ2UVenegjMdMEOZWSDs5a7En4lpk%2FGnQqpLYFtOrh5O%2BPXkOlFO7ZBrN3e3L3uQRw3I6%2BqQzpFmbA9I1NKGFVXli1xf4Ca0JpNp%2FN9NZnf%2FX9q4DyBP9NZOwddORy8BI0T2cD27wVW9xzsLLy3KHsd%2F2lcR3Fnmy8p%2BbPHoMS2NCQrikqYfTDI9qgoEbBx92TgV4SLNfnKsnMMw8nvGjKF4CbfiwJfjOBClP2RPdMYJ7moI5bGdqwD039m%2BEf1ZWZ08i3az%2FwOR0FMr%2BQSZ0%2F6gUJ0uMZ9am%2BnHX8P34oJe9mWUu%2B3xYWZaI%2FiDADiic%2F9gIf9YKhEuBCpk13gaJHMuW%2FkcENBk4qKqKBKaiL%2BbFtjKCiEL2M4%2BD5xlwPWn4FQnbWU83Lf3X912Bob%2Bs%2FmFff0k9WHUsibptESBfJnBIWgKV2XBYO9PNwPXoqfrOLbRloOS%2BtGzuvRE7tdrEwnNl5lD6QKt8y%2BqDiMjy8zalesoNlKPlXNlpssWk15gtZXC1P169ZF1ujUkGV8EcUegCMqrthJvKv7m1qgHuO6VZdSmfhN79s3t%2BNwtydhCuBj%2BT70OLYi3VzuTGUyExMLrgr74GOqUBcnPuc7y3caQfO3pqnm%2Br%2FjJzcsMmOAetB0MWrqKwWNVDZiqiBcUpaYUzqbqzHlzYy2Fsp7OnNEDEqRqSncjp48VVhYEJrp7FxImjEeMRPVlCXMDY7yswTgwm76UBKP1CmbMOdRqXPlIMRr6tcYwezAjaly8wQV6evOMkEzTWCx75b3vc5h0YWxGwEUIk6BNry9eE4Wr%2Bi7H1%2Bc8I%2B087wUNyPCpd&X-Amz-Signature=6a735665d731b4b17a2398fa819b54e04f3dfae6befe67722528837904a17194&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

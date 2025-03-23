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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HNFDBV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB9VHB%2BGe5kh9YJugvOMRrI1f6ofpBs5hwirmuHnx7hmAiBQTOggnPZU86SYeZW8BqJuI3E3KYTHKdAEDGFT35pPMSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F50MIPUOoMrxpKHDKtwDX7NGXt7%2F79JpggBEkA%2F1bzoxjERQfx9%2Fdgy7jSkMqkyz0fgSgQDGY8zdX0731487Pufw%2BHcsvnyygpjYWAJJUpqpUMpIVMMN%2BaUUJRAOFG27C%2FnqZJiq2Y1%2FDjjJHEfkWtDqlwstwSufDkEtLrkZ1M6Kqi2x7SIWOObShh3PmAkW5Mgb9S3ksrvvU28RefkGeTFtQMqHkD%2BF84r05aFpA4%2BySiBh6sCEfQziP3E4wZVu5wBjKKZjKcJnOqYh%2BjFHOvycsHYcJmeEunVwlKD7p7ZUw0cxXI%2BOwU%2FIQCEViLJq4dz0T0WKn7F6IKnsVm3UHiBA3N7GKP0rnkyYOWKVEN1UsBHDuX%2F3tkEIBLU7jtdilp%2Fk3ivUk1w81bFWM3btPo6inBgZ9Ytlgh0253GNqLt6f7cmb7j3DAkvkw%2BOJhmMMgVCzLvEbZlzp%2BVxo7Ihy4GiwLeUH6Uv3O9cf9moFNVUu67t08lev8QfI0%2FyvUJJ1bH0mWm%2F%2FEDpetEjxqaNXBLl2xGxDqQHt1Au9ZufRiHamiQbMmAO1056dF0pYEE11C59qhXU%2BTK7hMjoGNKc%2BthUL9HuhzIzMxGo0o63tZMIl%2BkoqMU6XmbOCF8PJSYFevqsTRYI3QkBlR0wnc3%2FvgY6pgH2ackUoaD6JQGUFmNhbgA5629MoBj8jUJq6xSO3D6UVZlS%2Fv%2FnwRQJ9vNRddxyUOwhpC08O7tMeTCfowZRSqI9ieHUiMyJGciTJpc9iYZrwyNGsqn2z%2FZPxkZUmUqI71%2FGTTXLCoQ%2B0Mh24OfRAnvWboXy0aUPi2JCXqOSl%2FSWqG3xEEIMNq4aFcbHE4BbdZxxfDcEl8phikX%2Fludl8rWE9zdtZXHZ&X-Amz-Signature=ab35bcc6b8725c31fc7b49ef79580e480ac4f314f9d0521c9526113379bfd8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HNFDBV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB9VHB%2BGe5kh9YJugvOMRrI1f6ofpBs5hwirmuHnx7hmAiBQTOggnPZU86SYeZW8BqJuI3E3KYTHKdAEDGFT35pPMSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F50MIPUOoMrxpKHDKtwDX7NGXt7%2F79JpggBEkA%2F1bzoxjERQfx9%2Fdgy7jSkMqkyz0fgSgQDGY8zdX0731487Pufw%2BHcsvnyygpjYWAJJUpqpUMpIVMMN%2BaUUJRAOFG27C%2FnqZJiq2Y1%2FDjjJHEfkWtDqlwstwSufDkEtLrkZ1M6Kqi2x7SIWOObShh3PmAkW5Mgb9S3ksrvvU28RefkGeTFtQMqHkD%2BF84r05aFpA4%2BySiBh6sCEfQziP3E4wZVu5wBjKKZjKcJnOqYh%2BjFHOvycsHYcJmeEunVwlKD7p7ZUw0cxXI%2BOwU%2FIQCEViLJq4dz0T0WKn7F6IKnsVm3UHiBA3N7GKP0rnkyYOWKVEN1UsBHDuX%2F3tkEIBLU7jtdilp%2Fk3ivUk1w81bFWM3btPo6inBgZ9Ytlgh0253GNqLt6f7cmb7j3DAkvkw%2BOJhmMMgVCzLvEbZlzp%2BVxo7Ihy4GiwLeUH6Uv3O9cf9moFNVUu67t08lev8QfI0%2FyvUJJ1bH0mWm%2F%2FEDpetEjxqaNXBLl2xGxDqQHt1Au9ZufRiHamiQbMmAO1056dF0pYEE11C59qhXU%2BTK7hMjoGNKc%2BthUL9HuhzIzMxGo0o63tZMIl%2BkoqMU6XmbOCF8PJSYFevqsTRYI3QkBlR0wnc3%2FvgY6pgH2ackUoaD6JQGUFmNhbgA5629MoBj8jUJq6xSO3D6UVZlS%2Fv%2FnwRQJ9vNRddxyUOwhpC08O7tMeTCfowZRSqI9ieHUiMyJGciTJpc9iYZrwyNGsqn2z%2FZPxkZUmUqI71%2FGTTXLCoQ%2B0Mh24OfRAnvWboXy0aUPi2JCXqOSl%2FSWqG3xEEIMNq4aFcbHE4BbdZxxfDcEl8phikX%2Fludl8rWE9zdtZXHZ&X-Amz-Signature=abf828117b580c276abf10995b47d1efef640b28b43a160273d804e2de4479d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HNFDBV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB9VHB%2BGe5kh9YJugvOMRrI1f6ofpBs5hwirmuHnx7hmAiBQTOggnPZU86SYeZW8BqJuI3E3KYTHKdAEDGFT35pPMSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F50MIPUOoMrxpKHDKtwDX7NGXt7%2F79JpggBEkA%2F1bzoxjERQfx9%2Fdgy7jSkMqkyz0fgSgQDGY8zdX0731487Pufw%2BHcsvnyygpjYWAJJUpqpUMpIVMMN%2BaUUJRAOFG27C%2FnqZJiq2Y1%2FDjjJHEfkWtDqlwstwSufDkEtLrkZ1M6Kqi2x7SIWOObShh3PmAkW5Mgb9S3ksrvvU28RefkGeTFtQMqHkD%2BF84r05aFpA4%2BySiBh6sCEfQziP3E4wZVu5wBjKKZjKcJnOqYh%2BjFHOvycsHYcJmeEunVwlKD7p7ZUw0cxXI%2BOwU%2FIQCEViLJq4dz0T0WKn7F6IKnsVm3UHiBA3N7GKP0rnkyYOWKVEN1UsBHDuX%2F3tkEIBLU7jtdilp%2Fk3ivUk1w81bFWM3btPo6inBgZ9Ytlgh0253GNqLt6f7cmb7j3DAkvkw%2BOJhmMMgVCzLvEbZlzp%2BVxo7Ihy4GiwLeUH6Uv3O9cf9moFNVUu67t08lev8QfI0%2FyvUJJ1bH0mWm%2F%2FEDpetEjxqaNXBLl2xGxDqQHt1Au9ZufRiHamiQbMmAO1056dF0pYEE11C59qhXU%2BTK7hMjoGNKc%2BthUL9HuhzIzMxGo0o63tZMIl%2BkoqMU6XmbOCF8PJSYFevqsTRYI3QkBlR0wnc3%2FvgY6pgH2ackUoaD6JQGUFmNhbgA5629MoBj8jUJq6xSO3D6UVZlS%2Fv%2FnwRQJ9vNRddxyUOwhpC08O7tMeTCfowZRSqI9ieHUiMyJGciTJpc9iYZrwyNGsqn2z%2FZPxkZUmUqI71%2FGTTXLCoQ%2B0Mh24OfRAnvWboXy0aUPi2JCXqOSl%2FSWqG3xEEIMNq4aFcbHE4BbdZxxfDcEl8phikX%2Fludl8rWE9zdtZXHZ&X-Amz-Signature=0781321ac906c7b8acb2b50579d0028b1b51f61bbd49e95a5b4658a0b7645d08&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HNFDBV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB9VHB%2BGe5kh9YJugvOMRrI1f6ofpBs5hwirmuHnx7hmAiBQTOggnPZU86SYeZW8BqJuI3E3KYTHKdAEDGFT35pPMSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F50MIPUOoMrxpKHDKtwDX7NGXt7%2F79JpggBEkA%2F1bzoxjERQfx9%2Fdgy7jSkMqkyz0fgSgQDGY8zdX0731487Pufw%2BHcsvnyygpjYWAJJUpqpUMpIVMMN%2BaUUJRAOFG27C%2FnqZJiq2Y1%2FDjjJHEfkWtDqlwstwSufDkEtLrkZ1M6Kqi2x7SIWOObShh3PmAkW5Mgb9S3ksrvvU28RefkGeTFtQMqHkD%2BF84r05aFpA4%2BySiBh6sCEfQziP3E4wZVu5wBjKKZjKcJnOqYh%2BjFHOvycsHYcJmeEunVwlKD7p7ZUw0cxXI%2BOwU%2FIQCEViLJq4dz0T0WKn7F6IKnsVm3UHiBA3N7GKP0rnkyYOWKVEN1UsBHDuX%2F3tkEIBLU7jtdilp%2Fk3ivUk1w81bFWM3btPo6inBgZ9Ytlgh0253GNqLt6f7cmb7j3DAkvkw%2BOJhmMMgVCzLvEbZlzp%2BVxo7Ihy4GiwLeUH6Uv3O9cf9moFNVUu67t08lev8QfI0%2FyvUJJ1bH0mWm%2F%2FEDpetEjxqaNXBLl2xGxDqQHt1Au9ZufRiHamiQbMmAO1056dF0pYEE11C59qhXU%2BTK7hMjoGNKc%2BthUL9HuhzIzMxGo0o63tZMIl%2BkoqMU6XmbOCF8PJSYFevqsTRYI3QkBlR0wnc3%2FvgY6pgH2ackUoaD6JQGUFmNhbgA5629MoBj8jUJq6xSO3D6UVZlS%2Fv%2FnwRQJ9vNRddxyUOwhpC08O7tMeTCfowZRSqI9ieHUiMyJGciTJpc9iYZrwyNGsqn2z%2FZPxkZUmUqI71%2FGTTXLCoQ%2B0Mh24OfRAnvWboXy0aUPi2JCXqOSl%2FSWqG3xEEIMNq4aFcbHE4BbdZxxfDcEl8phikX%2Fludl8rWE9zdtZXHZ&X-Amz-Signature=23b97ef41cdc7cdbf9275ffd8231b907edbc7c5d688e242fbb8ec2ae6087ae1c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HNFDBV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB9VHB%2BGe5kh9YJugvOMRrI1f6ofpBs5hwirmuHnx7hmAiBQTOggnPZU86SYeZW8BqJuI3E3KYTHKdAEDGFT35pPMSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F50MIPUOoMrxpKHDKtwDX7NGXt7%2F79JpggBEkA%2F1bzoxjERQfx9%2Fdgy7jSkMqkyz0fgSgQDGY8zdX0731487Pufw%2BHcsvnyygpjYWAJJUpqpUMpIVMMN%2BaUUJRAOFG27C%2FnqZJiq2Y1%2FDjjJHEfkWtDqlwstwSufDkEtLrkZ1M6Kqi2x7SIWOObShh3PmAkW5Mgb9S3ksrvvU28RefkGeTFtQMqHkD%2BF84r05aFpA4%2BySiBh6sCEfQziP3E4wZVu5wBjKKZjKcJnOqYh%2BjFHOvycsHYcJmeEunVwlKD7p7ZUw0cxXI%2BOwU%2FIQCEViLJq4dz0T0WKn7F6IKnsVm3UHiBA3N7GKP0rnkyYOWKVEN1UsBHDuX%2F3tkEIBLU7jtdilp%2Fk3ivUk1w81bFWM3btPo6inBgZ9Ytlgh0253GNqLt6f7cmb7j3DAkvkw%2BOJhmMMgVCzLvEbZlzp%2BVxo7Ihy4GiwLeUH6Uv3O9cf9moFNVUu67t08lev8QfI0%2FyvUJJ1bH0mWm%2F%2FEDpetEjxqaNXBLl2xGxDqQHt1Au9ZufRiHamiQbMmAO1056dF0pYEE11C59qhXU%2BTK7hMjoGNKc%2BthUL9HuhzIzMxGo0o63tZMIl%2BkoqMU6XmbOCF8PJSYFevqsTRYI3QkBlR0wnc3%2FvgY6pgH2ackUoaD6JQGUFmNhbgA5629MoBj8jUJq6xSO3D6UVZlS%2Fv%2FnwRQJ9vNRddxyUOwhpC08O7tMeTCfowZRSqI9ieHUiMyJGciTJpc9iYZrwyNGsqn2z%2FZPxkZUmUqI71%2FGTTXLCoQ%2B0Mh24OfRAnvWboXy0aUPi2JCXqOSl%2FSWqG3xEEIMNq4aFcbHE4BbdZxxfDcEl8phikX%2Fludl8rWE9zdtZXHZ&X-Amz-Signature=636b73bef2b9b60a72d0ff41a5d1ccb0a1f4a50998e65bd9c81947e7671cb2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HNFDBV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB9VHB%2BGe5kh9YJugvOMRrI1f6ofpBs5hwirmuHnx7hmAiBQTOggnPZU86SYeZW8BqJuI3E3KYTHKdAEDGFT35pPMSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F50MIPUOoMrxpKHDKtwDX7NGXt7%2F79JpggBEkA%2F1bzoxjERQfx9%2Fdgy7jSkMqkyz0fgSgQDGY8zdX0731487Pufw%2BHcsvnyygpjYWAJJUpqpUMpIVMMN%2BaUUJRAOFG27C%2FnqZJiq2Y1%2FDjjJHEfkWtDqlwstwSufDkEtLrkZ1M6Kqi2x7SIWOObShh3PmAkW5Mgb9S3ksrvvU28RefkGeTFtQMqHkD%2BF84r05aFpA4%2BySiBh6sCEfQziP3E4wZVu5wBjKKZjKcJnOqYh%2BjFHOvycsHYcJmeEunVwlKD7p7ZUw0cxXI%2BOwU%2FIQCEViLJq4dz0T0WKn7F6IKnsVm3UHiBA3N7GKP0rnkyYOWKVEN1UsBHDuX%2F3tkEIBLU7jtdilp%2Fk3ivUk1w81bFWM3btPo6inBgZ9Ytlgh0253GNqLt6f7cmb7j3DAkvkw%2BOJhmMMgVCzLvEbZlzp%2BVxo7Ihy4GiwLeUH6Uv3O9cf9moFNVUu67t08lev8QfI0%2FyvUJJ1bH0mWm%2F%2FEDpetEjxqaNXBLl2xGxDqQHt1Au9ZufRiHamiQbMmAO1056dF0pYEE11C59qhXU%2BTK7hMjoGNKc%2BthUL9HuhzIzMxGo0o63tZMIl%2BkoqMU6XmbOCF8PJSYFevqsTRYI3QkBlR0wnc3%2FvgY6pgH2ackUoaD6JQGUFmNhbgA5629MoBj8jUJq6xSO3D6UVZlS%2Fv%2FnwRQJ9vNRddxyUOwhpC08O7tMeTCfowZRSqI9ieHUiMyJGciTJpc9iYZrwyNGsqn2z%2FZPxkZUmUqI71%2FGTTXLCoQ%2B0Mh24OfRAnvWboXy0aUPi2JCXqOSl%2FSWqG3xEEIMNq4aFcbHE4BbdZxxfDcEl8phikX%2Fludl8rWE9zdtZXHZ&X-Amz-Signature=75a48cc6eaeac99496c4eefea45aebdebda48f747096844b9b4fda5528291552&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HNFDBV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB9VHB%2BGe5kh9YJugvOMRrI1f6ofpBs5hwirmuHnx7hmAiBQTOggnPZU86SYeZW8BqJuI3E3KYTHKdAEDGFT35pPMSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F50MIPUOoMrxpKHDKtwDX7NGXt7%2F79JpggBEkA%2F1bzoxjERQfx9%2Fdgy7jSkMqkyz0fgSgQDGY8zdX0731487Pufw%2BHcsvnyygpjYWAJJUpqpUMpIVMMN%2BaUUJRAOFG27C%2FnqZJiq2Y1%2FDjjJHEfkWtDqlwstwSufDkEtLrkZ1M6Kqi2x7SIWOObShh3PmAkW5Mgb9S3ksrvvU28RefkGeTFtQMqHkD%2BF84r05aFpA4%2BySiBh6sCEfQziP3E4wZVu5wBjKKZjKcJnOqYh%2BjFHOvycsHYcJmeEunVwlKD7p7ZUw0cxXI%2BOwU%2FIQCEViLJq4dz0T0WKn7F6IKnsVm3UHiBA3N7GKP0rnkyYOWKVEN1UsBHDuX%2F3tkEIBLU7jtdilp%2Fk3ivUk1w81bFWM3btPo6inBgZ9Ytlgh0253GNqLt6f7cmb7j3DAkvkw%2BOJhmMMgVCzLvEbZlzp%2BVxo7Ihy4GiwLeUH6Uv3O9cf9moFNVUu67t08lev8QfI0%2FyvUJJ1bH0mWm%2F%2FEDpetEjxqaNXBLl2xGxDqQHt1Au9ZufRiHamiQbMmAO1056dF0pYEE11C59qhXU%2BTK7hMjoGNKc%2BthUL9HuhzIzMxGo0o63tZMIl%2BkoqMU6XmbOCF8PJSYFevqsTRYI3QkBlR0wnc3%2FvgY6pgH2ackUoaD6JQGUFmNhbgA5629MoBj8jUJq6xSO3D6UVZlS%2Fv%2FnwRQJ9vNRddxyUOwhpC08O7tMeTCfowZRSqI9ieHUiMyJGciTJpc9iYZrwyNGsqn2z%2FZPxkZUmUqI71%2FGTTXLCoQ%2B0Mh24OfRAnvWboXy0aUPi2JCXqOSl%2FSWqG3xEEIMNq4aFcbHE4BbdZxxfDcEl8phikX%2Fludl8rWE9zdtZXHZ&X-Amz-Signature=ce5b8d20503b12572891a4c0d4a423232eecf064ee0f3548f4c32f07b705280f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

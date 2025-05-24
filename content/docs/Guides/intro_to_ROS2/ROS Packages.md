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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNV46OH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFyQq9YDiDiiz6aOyAdwix88YN8D93QR0cpGJaacc0jaAiB9SKo5isbQvIqxtw7EJRRkzNwkz06uWcqq0EGPQ%2BoWySqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwcqWHlu%2FlFl0%2FfakKtwDTEWlHuWc06bQbqzKzSGad32bVfd%2FVl8MDzzGOtjH30nO0duuox5kJHfiwT9iUN%2By%2FXf4kU28B%2FDk1XyHgNKSOYszVDJTcn4balXproiXpkLsYaOL74zxYFlLOJqT69Nu1uOyXemWUJYYjUok2rVjE2NIVuKOmcQTUcTnpEnrQ%2B4q2eCeIPYkm3HC455PxFInIqEiI9r7kWgNGlsu%2BfH6%2FzTJSPYB%2Byl1kg02BFJNHvtZsqTOVQrxo8N%2FeQpYqZRIMcQJM9no%2FdVYecWuYR1zG2OMy0zYsAD2VYDwalicPty7M7lNYryl%2Bb9Y645xYi%2FL%2BrM9ZhPNlSoqhUaeZBWZyzS9%2BCU%2BImG3wAgx9IWME5KZIrdE66l9UB%2BXAHo4uuP%2FYVyYQ1EcDyACqKD3yN2FXkGw%2FNz28bS5r8c6nYhI2m8A3Q%2FYGhX9tcydaAtaLWOyHzQy9eOECGQ1nTb71dOAyowVoZo%2F3XZOD9wa5K%2F4KWsEnArtuqrwlEk9RXbmZcw%2FFngr%2FfhJ8Wy5OzA1IzkYBqBdFQEwZl1qBHdVLkjFtxKL3RMnstwabOXwPEMAEgf8iYrTCzS9Ro11D2du8Fs2w%2FcC%2Fq2X%2BKmLo9TS%2Fi9dUI7zvzEMCxVYKap1a7sw9%2FfEwQY6pgGmDNUOp%2BTBY6cwODFeT0Z9yvgjeM%2FrfLPKaWUEcy2vzQy0qD4qemGI%2F8BtPzFGK07u6gptWPAbu7eIaMPnDs9DskSOeA7IxE%2FwSu6uqSFqVZj0KbmmdhZSnPVkue%2BQ4v11P9NY5lsbi3vJrppiV313wT6hRB%2F7QhJA7hNIpffvU5s7TXsPNLro%2BA0VEozc7DZaU5y2ziXea9sNT4KEi%2FgafGUdRr00&X-Amz-Signature=671f3be8c28955e6ceb3ee8223362cf52459ee721b582842278581370e1e8873&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNV46OH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFyQq9YDiDiiz6aOyAdwix88YN8D93QR0cpGJaacc0jaAiB9SKo5isbQvIqxtw7EJRRkzNwkz06uWcqq0EGPQ%2BoWySqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwcqWHlu%2FlFl0%2FfakKtwDTEWlHuWc06bQbqzKzSGad32bVfd%2FVl8MDzzGOtjH30nO0duuox5kJHfiwT9iUN%2By%2FXf4kU28B%2FDk1XyHgNKSOYszVDJTcn4balXproiXpkLsYaOL74zxYFlLOJqT69Nu1uOyXemWUJYYjUok2rVjE2NIVuKOmcQTUcTnpEnrQ%2B4q2eCeIPYkm3HC455PxFInIqEiI9r7kWgNGlsu%2BfH6%2FzTJSPYB%2Byl1kg02BFJNHvtZsqTOVQrxo8N%2FeQpYqZRIMcQJM9no%2FdVYecWuYR1zG2OMy0zYsAD2VYDwalicPty7M7lNYryl%2Bb9Y645xYi%2FL%2BrM9ZhPNlSoqhUaeZBWZyzS9%2BCU%2BImG3wAgx9IWME5KZIrdE66l9UB%2BXAHo4uuP%2FYVyYQ1EcDyACqKD3yN2FXkGw%2FNz28bS5r8c6nYhI2m8A3Q%2FYGhX9tcydaAtaLWOyHzQy9eOECGQ1nTb71dOAyowVoZo%2F3XZOD9wa5K%2F4KWsEnArtuqrwlEk9RXbmZcw%2FFngr%2FfhJ8Wy5OzA1IzkYBqBdFQEwZl1qBHdVLkjFtxKL3RMnstwabOXwPEMAEgf8iYrTCzS9Ro11D2du8Fs2w%2FcC%2Fq2X%2BKmLo9TS%2Fi9dUI7zvzEMCxVYKap1a7sw9%2FfEwQY6pgGmDNUOp%2BTBY6cwODFeT0Z9yvgjeM%2FrfLPKaWUEcy2vzQy0qD4qemGI%2F8BtPzFGK07u6gptWPAbu7eIaMPnDs9DskSOeA7IxE%2FwSu6uqSFqVZj0KbmmdhZSnPVkue%2BQ4v11P9NY5lsbi3vJrppiV313wT6hRB%2F7QhJA7hNIpffvU5s7TXsPNLro%2BA0VEozc7DZaU5y2ziXea9sNT4KEi%2FgafGUdRr00&X-Amz-Signature=f9e9dbaefa5d2fa8c18733452302832cb9e3e2a1f97d78793682ac77ce0efaeb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNV46OH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFyQq9YDiDiiz6aOyAdwix88YN8D93QR0cpGJaacc0jaAiB9SKo5isbQvIqxtw7EJRRkzNwkz06uWcqq0EGPQ%2BoWySqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwcqWHlu%2FlFl0%2FfakKtwDTEWlHuWc06bQbqzKzSGad32bVfd%2FVl8MDzzGOtjH30nO0duuox5kJHfiwT9iUN%2By%2FXf4kU28B%2FDk1XyHgNKSOYszVDJTcn4balXproiXpkLsYaOL74zxYFlLOJqT69Nu1uOyXemWUJYYjUok2rVjE2NIVuKOmcQTUcTnpEnrQ%2B4q2eCeIPYkm3HC455PxFInIqEiI9r7kWgNGlsu%2BfH6%2FzTJSPYB%2Byl1kg02BFJNHvtZsqTOVQrxo8N%2FeQpYqZRIMcQJM9no%2FdVYecWuYR1zG2OMy0zYsAD2VYDwalicPty7M7lNYryl%2Bb9Y645xYi%2FL%2BrM9ZhPNlSoqhUaeZBWZyzS9%2BCU%2BImG3wAgx9IWME5KZIrdE66l9UB%2BXAHo4uuP%2FYVyYQ1EcDyACqKD3yN2FXkGw%2FNz28bS5r8c6nYhI2m8A3Q%2FYGhX9tcydaAtaLWOyHzQy9eOECGQ1nTb71dOAyowVoZo%2F3XZOD9wa5K%2F4KWsEnArtuqrwlEk9RXbmZcw%2FFngr%2FfhJ8Wy5OzA1IzkYBqBdFQEwZl1qBHdVLkjFtxKL3RMnstwabOXwPEMAEgf8iYrTCzS9Ro11D2du8Fs2w%2FcC%2Fq2X%2BKmLo9TS%2Fi9dUI7zvzEMCxVYKap1a7sw9%2FfEwQY6pgGmDNUOp%2BTBY6cwODFeT0Z9yvgjeM%2FrfLPKaWUEcy2vzQy0qD4qemGI%2F8BtPzFGK07u6gptWPAbu7eIaMPnDs9DskSOeA7IxE%2FwSu6uqSFqVZj0KbmmdhZSnPVkue%2BQ4v11P9NY5lsbi3vJrppiV313wT6hRB%2F7QhJA7hNIpffvU5s7TXsPNLro%2BA0VEozc7DZaU5y2ziXea9sNT4KEi%2FgafGUdRr00&X-Amz-Signature=88861e79c2bef6e77b7d5e3f856a3c73a7b8e35d7e7cabc32d4127e3d76f4546&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNV46OH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFyQq9YDiDiiz6aOyAdwix88YN8D93QR0cpGJaacc0jaAiB9SKo5isbQvIqxtw7EJRRkzNwkz06uWcqq0EGPQ%2BoWySqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwcqWHlu%2FlFl0%2FfakKtwDTEWlHuWc06bQbqzKzSGad32bVfd%2FVl8MDzzGOtjH30nO0duuox5kJHfiwT9iUN%2By%2FXf4kU28B%2FDk1XyHgNKSOYszVDJTcn4balXproiXpkLsYaOL74zxYFlLOJqT69Nu1uOyXemWUJYYjUok2rVjE2NIVuKOmcQTUcTnpEnrQ%2B4q2eCeIPYkm3HC455PxFInIqEiI9r7kWgNGlsu%2BfH6%2FzTJSPYB%2Byl1kg02BFJNHvtZsqTOVQrxo8N%2FeQpYqZRIMcQJM9no%2FdVYecWuYR1zG2OMy0zYsAD2VYDwalicPty7M7lNYryl%2Bb9Y645xYi%2FL%2BrM9ZhPNlSoqhUaeZBWZyzS9%2BCU%2BImG3wAgx9IWME5KZIrdE66l9UB%2BXAHo4uuP%2FYVyYQ1EcDyACqKD3yN2FXkGw%2FNz28bS5r8c6nYhI2m8A3Q%2FYGhX9tcydaAtaLWOyHzQy9eOECGQ1nTb71dOAyowVoZo%2F3XZOD9wa5K%2F4KWsEnArtuqrwlEk9RXbmZcw%2FFngr%2FfhJ8Wy5OzA1IzkYBqBdFQEwZl1qBHdVLkjFtxKL3RMnstwabOXwPEMAEgf8iYrTCzS9Ro11D2du8Fs2w%2FcC%2Fq2X%2BKmLo9TS%2Fi9dUI7zvzEMCxVYKap1a7sw9%2FfEwQY6pgGmDNUOp%2BTBY6cwODFeT0Z9yvgjeM%2FrfLPKaWUEcy2vzQy0qD4qemGI%2F8BtPzFGK07u6gptWPAbu7eIaMPnDs9DskSOeA7IxE%2FwSu6uqSFqVZj0KbmmdhZSnPVkue%2BQ4v11P9NY5lsbi3vJrppiV313wT6hRB%2F7QhJA7hNIpffvU5s7TXsPNLro%2BA0VEozc7DZaU5y2ziXea9sNT4KEi%2FgafGUdRr00&X-Amz-Signature=9381e92a79917fb4e767253a5026cff1403814e363a1d8019f18eacabd697155&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNV46OH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFyQq9YDiDiiz6aOyAdwix88YN8D93QR0cpGJaacc0jaAiB9SKo5isbQvIqxtw7EJRRkzNwkz06uWcqq0EGPQ%2BoWySqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwcqWHlu%2FlFl0%2FfakKtwDTEWlHuWc06bQbqzKzSGad32bVfd%2FVl8MDzzGOtjH30nO0duuox5kJHfiwT9iUN%2By%2FXf4kU28B%2FDk1XyHgNKSOYszVDJTcn4balXproiXpkLsYaOL74zxYFlLOJqT69Nu1uOyXemWUJYYjUok2rVjE2NIVuKOmcQTUcTnpEnrQ%2B4q2eCeIPYkm3HC455PxFInIqEiI9r7kWgNGlsu%2BfH6%2FzTJSPYB%2Byl1kg02BFJNHvtZsqTOVQrxo8N%2FeQpYqZRIMcQJM9no%2FdVYecWuYR1zG2OMy0zYsAD2VYDwalicPty7M7lNYryl%2Bb9Y645xYi%2FL%2BrM9ZhPNlSoqhUaeZBWZyzS9%2BCU%2BImG3wAgx9IWME5KZIrdE66l9UB%2BXAHo4uuP%2FYVyYQ1EcDyACqKD3yN2FXkGw%2FNz28bS5r8c6nYhI2m8A3Q%2FYGhX9tcydaAtaLWOyHzQy9eOECGQ1nTb71dOAyowVoZo%2F3XZOD9wa5K%2F4KWsEnArtuqrwlEk9RXbmZcw%2FFngr%2FfhJ8Wy5OzA1IzkYBqBdFQEwZl1qBHdVLkjFtxKL3RMnstwabOXwPEMAEgf8iYrTCzS9Ro11D2du8Fs2w%2FcC%2Fq2X%2BKmLo9TS%2Fi9dUI7zvzEMCxVYKap1a7sw9%2FfEwQY6pgGmDNUOp%2BTBY6cwODFeT0Z9yvgjeM%2FrfLPKaWUEcy2vzQy0qD4qemGI%2F8BtPzFGK07u6gptWPAbu7eIaMPnDs9DskSOeA7IxE%2FwSu6uqSFqVZj0KbmmdhZSnPVkue%2BQ4v11P9NY5lsbi3vJrppiV313wT6hRB%2F7QhJA7hNIpffvU5s7TXsPNLro%2BA0VEozc7DZaU5y2ziXea9sNT4KEi%2FgafGUdRr00&X-Amz-Signature=6ebdcc6cd9935f622b3c305c42ef313dad0ca7768286a14bebf85d2ef4bdee4b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNV46OH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFyQq9YDiDiiz6aOyAdwix88YN8D93QR0cpGJaacc0jaAiB9SKo5isbQvIqxtw7EJRRkzNwkz06uWcqq0EGPQ%2BoWySqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwcqWHlu%2FlFl0%2FfakKtwDTEWlHuWc06bQbqzKzSGad32bVfd%2FVl8MDzzGOtjH30nO0duuox5kJHfiwT9iUN%2By%2FXf4kU28B%2FDk1XyHgNKSOYszVDJTcn4balXproiXpkLsYaOL74zxYFlLOJqT69Nu1uOyXemWUJYYjUok2rVjE2NIVuKOmcQTUcTnpEnrQ%2B4q2eCeIPYkm3HC455PxFInIqEiI9r7kWgNGlsu%2BfH6%2FzTJSPYB%2Byl1kg02BFJNHvtZsqTOVQrxo8N%2FeQpYqZRIMcQJM9no%2FdVYecWuYR1zG2OMy0zYsAD2VYDwalicPty7M7lNYryl%2Bb9Y645xYi%2FL%2BrM9ZhPNlSoqhUaeZBWZyzS9%2BCU%2BImG3wAgx9IWME5KZIrdE66l9UB%2BXAHo4uuP%2FYVyYQ1EcDyACqKD3yN2FXkGw%2FNz28bS5r8c6nYhI2m8A3Q%2FYGhX9tcydaAtaLWOyHzQy9eOECGQ1nTb71dOAyowVoZo%2F3XZOD9wa5K%2F4KWsEnArtuqrwlEk9RXbmZcw%2FFngr%2FfhJ8Wy5OzA1IzkYBqBdFQEwZl1qBHdVLkjFtxKL3RMnstwabOXwPEMAEgf8iYrTCzS9Ro11D2du8Fs2w%2FcC%2Fq2X%2BKmLo9TS%2Fi9dUI7zvzEMCxVYKap1a7sw9%2FfEwQY6pgGmDNUOp%2BTBY6cwODFeT0Z9yvgjeM%2FrfLPKaWUEcy2vzQy0qD4qemGI%2F8BtPzFGK07u6gptWPAbu7eIaMPnDs9DskSOeA7IxE%2FwSu6uqSFqVZj0KbmmdhZSnPVkue%2BQ4v11P9NY5lsbi3vJrppiV313wT6hRB%2F7QhJA7hNIpffvU5s7TXsPNLro%2BA0VEozc7DZaU5y2ziXea9sNT4KEi%2FgafGUdRr00&X-Amz-Signature=0261b2c20808fb326ddeb1586031f11696dbfab12ba50ca40ce318d6b064fdbe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNV46OH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFyQq9YDiDiiz6aOyAdwix88YN8D93QR0cpGJaacc0jaAiB9SKo5isbQvIqxtw7EJRRkzNwkz06uWcqq0EGPQ%2BoWySqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwcqWHlu%2FlFl0%2FfakKtwDTEWlHuWc06bQbqzKzSGad32bVfd%2FVl8MDzzGOtjH30nO0duuox5kJHfiwT9iUN%2By%2FXf4kU28B%2FDk1XyHgNKSOYszVDJTcn4balXproiXpkLsYaOL74zxYFlLOJqT69Nu1uOyXemWUJYYjUok2rVjE2NIVuKOmcQTUcTnpEnrQ%2B4q2eCeIPYkm3HC455PxFInIqEiI9r7kWgNGlsu%2BfH6%2FzTJSPYB%2Byl1kg02BFJNHvtZsqTOVQrxo8N%2FeQpYqZRIMcQJM9no%2FdVYecWuYR1zG2OMy0zYsAD2VYDwalicPty7M7lNYryl%2Bb9Y645xYi%2FL%2BrM9ZhPNlSoqhUaeZBWZyzS9%2BCU%2BImG3wAgx9IWME5KZIrdE66l9UB%2BXAHo4uuP%2FYVyYQ1EcDyACqKD3yN2FXkGw%2FNz28bS5r8c6nYhI2m8A3Q%2FYGhX9tcydaAtaLWOyHzQy9eOECGQ1nTb71dOAyowVoZo%2F3XZOD9wa5K%2F4KWsEnArtuqrwlEk9RXbmZcw%2FFngr%2FfhJ8Wy5OzA1IzkYBqBdFQEwZl1qBHdVLkjFtxKL3RMnstwabOXwPEMAEgf8iYrTCzS9Ro11D2du8Fs2w%2FcC%2Fq2X%2BKmLo9TS%2Fi9dUI7zvzEMCxVYKap1a7sw9%2FfEwQY6pgGmDNUOp%2BTBY6cwODFeT0Z9yvgjeM%2FrfLPKaWUEcy2vzQy0qD4qemGI%2F8BtPzFGK07u6gptWPAbu7eIaMPnDs9DskSOeA7IxE%2FwSu6uqSFqVZj0KbmmdhZSnPVkue%2BQ4v11P9NY5lsbi3vJrppiV313wT6hRB%2F7QhJA7hNIpffvU5s7TXsPNLro%2BA0VEozc7DZaU5y2ziXea9sNT4KEi%2FgafGUdRr00&X-Amz-Signature=ee6a2ea442c0d69e8b6a4d7654782a63a58318f151a40fd7158ffa7c542e783c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

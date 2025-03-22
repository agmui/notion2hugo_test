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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTF2DBX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF0U%2BblkGz9NBiYFS3%2F7c6xWI%2BIUw5eailL72RmQ5mrqAiA8w6fa7QRV%2BeBIXvxb5JouwQlCzr8JVzES1VRKHGYZbiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1RGJ9gxLXe6R%2FrQKtwDUToXN8V7xAHAXsnRSTrp1iHggG%2BhWvz8NvuFx5lNMNmfAQfJkvoO%2FgAJL5ryOIOoN0AADXGbL2qI%2BJOkK%2F6TaXaiqxXg%2F57oOnNJygsoTLRuBsogGFQY354nyzX1wvNKzsx4QaAtH5G4fPG1Oe3vF70ZpQep9xxZttkOl%2FQdR3aDc%2BoAbz2Z0ndWm54ctB9jC2q%2FnY93SvtDtJR%2F92DaNzpVPHjl%2BQnbEZeAkg7VkNnq%2FJ5yMNOiVj1qduP0%2F%2BSqbewBtFQHG02W8ExRvVMY3akQYKlLziuCwBf1Mn7yZAITepqcZ2nlnTNAe0%2BrLZu4XIy9iKgC6spQf0%2FCwOkV5KcgoW4Z5hAqTbNlBQl5dL%2BcwAuBkUjC8SOu3rw6sDQ0sD2LMj0u7KfZ9PP1aloKn3msH55tfDEICL4NPxQZQn9e6dVj4A82bOqzkpM0j2PmOqikuFnbu8MDkj0qExLxVszxUgtJYbUbnS4vvZdtOyAjSsvc%2FzO3dCltLvSxPuFPYlk32awi3s7NpfNKoblgfJpy32Tpp95sLC9G6GkFyCBUXAJfL4sYzMkBEfXWguzX2fACQfhvwJAKFIFo7B9qgMFSljo6aRLJ%2B9fVb7pg7EKA4dMaJXhysVL8eMMwxbb8vgY6pgFMQ85jkMUanj90V6DxpdgU2i0AvPP2hI1EQBtvqDAJwVhna54czmkhjnQ3ztO3A%2FzZ0REdQ8yA8sKm3UnsOFO6q8JloLQMh11niKpH2fr41DMmhcbm5dceTSvIQ833vvkA%2FWrvGuBNws5MUhqWG2DZAWAS98MklVgkqGjbgDs7rckXsakLO5VEzvh3BpM%2FJ6tiQB3rM%2FcpsN9U%2BhhkYJdkc761khaz&X-Amz-Signature=6a839118cb20a18fcd7b63543d75f0002af92a5496bff4026c43d2e72295c4b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTF2DBX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF0U%2BblkGz9NBiYFS3%2F7c6xWI%2BIUw5eailL72RmQ5mrqAiA8w6fa7QRV%2BeBIXvxb5JouwQlCzr8JVzES1VRKHGYZbiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1RGJ9gxLXe6R%2FrQKtwDUToXN8V7xAHAXsnRSTrp1iHggG%2BhWvz8NvuFx5lNMNmfAQfJkvoO%2FgAJL5ryOIOoN0AADXGbL2qI%2BJOkK%2F6TaXaiqxXg%2F57oOnNJygsoTLRuBsogGFQY354nyzX1wvNKzsx4QaAtH5G4fPG1Oe3vF70ZpQep9xxZttkOl%2FQdR3aDc%2BoAbz2Z0ndWm54ctB9jC2q%2FnY93SvtDtJR%2F92DaNzpVPHjl%2BQnbEZeAkg7VkNnq%2FJ5yMNOiVj1qduP0%2F%2BSqbewBtFQHG02W8ExRvVMY3akQYKlLziuCwBf1Mn7yZAITepqcZ2nlnTNAe0%2BrLZu4XIy9iKgC6spQf0%2FCwOkV5KcgoW4Z5hAqTbNlBQl5dL%2BcwAuBkUjC8SOu3rw6sDQ0sD2LMj0u7KfZ9PP1aloKn3msH55tfDEICL4NPxQZQn9e6dVj4A82bOqzkpM0j2PmOqikuFnbu8MDkj0qExLxVszxUgtJYbUbnS4vvZdtOyAjSsvc%2FzO3dCltLvSxPuFPYlk32awi3s7NpfNKoblgfJpy32Tpp95sLC9G6GkFyCBUXAJfL4sYzMkBEfXWguzX2fACQfhvwJAKFIFo7B9qgMFSljo6aRLJ%2B9fVb7pg7EKA4dMaJXhysVL8eMMwxbb8vgY6pgFMQ85jkMUanj90V6DxpdgU2i0AvPP2hI1EQBtvqDAJwVhna54czmkhjnQ3ztO3A%2FzZ0REdQ8yA8sKm3UnsOFO6q8JloLQMh11niKpH2fr41DMmhcbm5dceTSvIQ833vvkA%2FWrvGuBNws5MUhqWG2DZAWAS98MklVgkqGjbgDs7rckXsakLO5VEzvh3BpM%2FJ6tiQB3rM%2FcpsN9U%2BhhkYJdkc761khaz&X-Amz-Signature=0a067dad48ef4b4b672e949dae0ad421b041094e1207a92823b507152127eabf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTF2DBX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF0U%2BblkGz9NBiYFS3%2F7c6xWI%2BIUw5eailL72RmQ5mrqAiA8w6fa7QRV%2BeBIXvxb5JouwQlCzr8JVzES1VRKHGYZbiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1RGJ9gxLXe6R%2FrQKtwDUToXN8V7xAHAXsnRSTrp1iHggG%2BhWvz8NvuFx5lNMNmfAQfJkvoO%2FgAJL5ryOIOoN0AADXGbL2qI%2BJOkK%2F6TaXaiqxXg%2F57oOnNJygsoTLRuBsogGFQY354nyzX1wvNKzsx4QaAtH5G4fPG1Oe3vF70ZpQep9xxZttkOl%2FQdR3aDc%2BoAbz2Z0ndWm54ctB9jC2q%2FnY93SvtDtJR%2F92DaNzpVPHjl%2BQnbEZeAkg7VkNnq%2FJ5yMNOiVj1qduP0%2F%2BSqbewBtFQHG02W8ExRvVMY3akQYKlLziuCwBf1Mn7yZAITepqcZ2nlnTNAe0%2BrLZu4XIy9iKgC6spQf0%2FCwOkV5KcgoW4Z5hAqTbNlBQl5dL%2BcwAuBkUjC8SOu3rw6sDQ0sD2LMj0u7KfZ9PP1aloKn3msH55tfDEICL4NPxQZQn9e6dVj4A82bOqzkpM0j2PmOqikuFnbu8MDkj0qExLxVszxUgtJYbUbnS4vvZdtOyAjSsvc%2FzO3dCltLvSxPuFPYlk32awi3s7NpfNKoblgfJpy32Tpp95sLC9G6GkFyCBUXAJfL4sYzMkBEfXWguzX2fACQfhvwJAKFIFo7B9qgMFSljo6aRLJ%2B9fVb7pg7EKA4dMaJXhysVL8eMMwxbb8vgY6pgFMQ85jkMUanj90V6DxpdgU2i0AvPP2hI1EQBtvqDAJwVhna54czmkhjnQ3ztO3A%2FzZ0REdQ8yA8sKm3UnsOFO6q8JloLQMh11niKpH2fr41DMmhcbm5dceTSvIQ833vvkA%2FWrvGuBNws5MUhqWG2DZAWAS98MklVgkqGjbgDs7rckXsakLO5VEzvh3BpM%2FJ6tiQB3rM%2FcpsN9U%2BhhkYJdkc761khaz&X-Amz-Signature=2495d9b8cd450f18ec57e478d414fdbdc79420a2a997af613f7b253db6fa1777&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTF2DBX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF0U%2BblkGz9NBiYFS3%2F7c6xWI%2BIUw5eailL72RmQ5mrqAiA8w6fa7QRV%2BeBIXvxb5JouwQlCzr8JVzES1VRKHGYZbiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1RGJ9gxLXe6R%2FrQKtwDUToXN8V7xAHAXsnRSTrp1iHggG%2BhWvz8NvuFx5lNMNmfAQfJkvoO%2FgAJL5ryOIOoN0AADXGbL2qI%2BJOkK%2F6TaXaiqxXg%2F57oOnNJygsoTLRuBsogGFQY354nyzX1wvNKzsx4QaAtH5G4fPG1Oe3vF70ZpQep9xxZttkOl%2FQdR3aDc%2BoAbz2Z0ndWm54ctB9jC2q%2FnY93SvtDtJR%2F92DaNzpVPHjl%2BQnbEZeAkg7VkNnq%2FJ5yMNOiVj1qduP0%2F%2BSqbewBtFQHG02W8ExRvVMY3akQYKlLziuCwBf1Mn7yZAITepqcZ2nlnTNAe0%2BrLZu4XIy9iKgC6spQf0%2FCwOkV5KcgoW4Z5hAqTbNlBQl5dL%2BcwAuBkUjC8SOu3rw6sDQ0sD2LMj0u7KfZ9PP1aloKn3msH55tfDEICL4NPxQZQn9e6dVj4A82bOqzkpM0j2PmOqikuFnbu8MDkj0qExLxVszxUgtJYbUbnS4vvZdtOyAjSsvc%2FzO3dCltLvSxPuFPYlk32awi3s7NpfNKoblgfJpy32Tpp95sLC9G6GkFyCBUXAJfL4sYzMkBEfXWguzX2fACQfhvwJAKFIFo7B9qgMFSljo6aRLJ%2B9fVb7pg7EKA4dMaJXhysVL8eMMwxbb8vgY6pgFMQ85jkMUanj90V6DxpdgU2i0AvPP2hI1EQBtvqDAJwVhna54czmkhjnQ3ztO3A%2FzZ0REdQ8yA8sKm3UnsOFO6q8JloLQMh11niKpH2fr41DMmhcbm5dceTSvIQ833vvkA%2FWrvGuBNws5MUhqWG2DZAWAS98MklVgkqGjbgDs7rckXsakLO5VEzvh3BpM%2FJ6tiQB3rM%2FcpsN9U%2BhhkYJdkc761khaz&X-Amz-Signature=e4cec87858fa3b7f37e98e476e8dbbf1aad3da6c954fcdfcf2a1ba0b06425bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTF2DBX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF0U%2BblkGz9NBiYFS3%2F7c6xWI%2BIUw5eailL72RmQ5mrqAiA8w6fa7QRV%2BeBIXvxb5JouwQlCzr8JVzES1VRKHGYZbiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1RGJ9gxLXe6R%2FrQKtwDUToXN8V7xAHAXsnRSTrp1iHggG%2BhWvz8NvuFx5lNMNmfAQfJkvoO%2FgAJL5ryOIOoN0AADXGbL2qI%2BJOkK%2F6TaXaiqxXg%2F57oOnNJygsoTLRuBsogGFQY354nyzX1wvNKzsx4QaAtH5G4fPG1Oe3vF70ZpQep9xxZttkOl%2FQdR3aDc%2BoAbz2Z0ndWm54ctB9jC2q%2FnY93SvtDtJR%2F92DaNzpVPHjl%2BQnbEZeAkg7VkNnq%2FJ5yMNOiVj1qduP0%2F%2BSqbewBtFQHG02W8ExRvVMY3akQYKlLziuCwBf1Mn7yZAITepqcZ2nlnTNAe0%2BrLZu4XIy9iKgC6spQf0%2FCwOkV5KcgoW4Z5hAqTbNlBQl5dL%2BcwAuBkUjC8SOu3rw6sDQ0sD2LMj0u7KfZ9PP1aloKn3msH55tfDEICL4NPxQZQn9e6dVj4A82bOqzkpM0j2PmOqikuFnbu8MDkj0qExLxVszxUgtJYbUbnS4vvZdtOyAjSsvc%2FzO3dCltLvSxPuFPYlk32awi3s7NpfNKoblgfJpy32Tpp95sLC9G6GkFyCBUXAJfL4sYzMkBEfXWguzX2fACQfhvwJAKFIFo7B9qgMFSljo6aRLJ%2B9fVb7pg7EKA4dMaJXhysVL8eMMwxbb8vgY6pgFMQ85jkMUanj90V6DxpdgU2i0AvPP2hI1EQBtvqDAJwVhna54czmkhjnQ3ztO3A%2FzZ0REdQ8yA8sKm3UnsOFO6q8JloLQMh11niKpH2fr41DMmhcbm5dceTSvIQ833vvkA%2FWrvGuBNws5MUhqWG2DZAWAS98MklVgkqGjbgDs7rckXsakLO5VEzvh3BpM%2FJ6tiQB3rM%2FcpsN9U%2BhhkYJdkc761khaz&X-Amz-Signature=db74c74c0d73f9ad62757310c92e851f30f7a94aa68a7534c1b89b8bf5546e70&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTF2DBX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF0U%2BblkGz9NBiYFS3%2F7c6xWI%2BIUw5eailL72RmQ5mrqAiA8w6fa7QRV%2BeBIXvxb5JouwQlCzr8JVzES1VRKHGYZbiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1RGJ9gxLXe6R%2FrQKtwDUToXN8V7xAHAXsnRSTrp1iHggG%2BhWvz8NvuFx5lNMNmfAQfJkvoO%2FgAJL5ryOIOoN0AADXGbL2qI%2BJOkK%2F6TaXaiqxXg%2F57oOnNJygsoTLRuBsogGFQY354nyzX1wvNKzsx4QaAtH5G4fPG1Oe3vF70ZpQep9xxZttkOl%2FQdR3aDc%2BoAbz2Z0ndWm54ctB9jC2q%2FnY93SvtDtJR%2F92DaNzpVPHjl%2BQnbEZeAkg7VkNnq%2FJ5yMNOiVj1qduP0%2F%2BSqbewBtFQHG02W8ExRvVMY3akQYKlLziuCwBf1Mn7yZAITepqcZ2nlnTNAe0%2BrLZu4XIy9iKgC6spQf0%2FCwOkV5KcgoW4Z5hAqTbNlBQl5dL%2BcwAuBkUjC8SOu3rw6sDQ0sD2LMj0u7KfZ9PP1aloKn3msH55tfDEICL4NPxQZQn9e6dVj4A82bOqzkpM0j2PmOqikuFnbu8MDkj0qExLxVszxUgtJYbUbnS4vvZdtOyAjSsvc%2FzO3dCltLvSxPuFPYlk32awi3s7NpfNKoblgfJpy32Tpp95sLC9G6GkFyCBUXAJfL4sYzMkBEfXWguzX2fACQfhvwJAKFIFo7B9qgMFSljo6aRLJ%2B9fVb7pg7EKA4dMaJXhysVL8eMMwxbb8vgY6pgFMQ85jkMUanj90V6DxpdgU2i0AvPP2hI1EQBtvqDAJwVhna54czmkhjnQ3ztO3A%2FzZ0REdQ8yA8sKm3UnsOFO6q8JloLQMh11niKpH2fr41DMmhcbm5dceTSvIQ833vvkA%2FWrvGuBNws5MUhqWG2DZAWAS98MklVgkqGjbgDs7rckXsakLO5VEzvh3BpM%2FJ6tiQB3rM%2FcpsN9U%2BhhkYJdkc761khaz&X-Amz-Signature=a3c49483d6b0a018524180d42204af99159f3ab970a0fb700d53164235358278&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTF2DBX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF0U%2BblkGz9NBiYFS3%2F7c6xWI%2BIUw5eailL72RmQ5mrqAiA8w6fa7QRV%2BeBIXvxb5JouwQlCzr8JVzES1VRKHGYZbiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1RGJ9gxLXe6R%2FrQKtwDUToXN8V7xAHAXsnRSTrp1iHggG%2BhWvz8NvuFx5lNMNmfAQfJkvoO%2FgAJL5ryOIOoN0AADXGbL2qI%2BJOkK%2F6TaXaiqxXg%2F57oOnNJygsoTLRuBsogGFQY354nyzX1wvNKzsx4QaAtH5G4fPG1Oe3vF70ZpQep9xxZttkOl%2FQdR3aDc%2BoAbz2Z0ndWm54ctB9jC2q%2FnY93SvtDtJR%2F92DaNzpVPHjl%2BQnbEZeAkg7VkNnq%2FJ5yMNOiVj1qduP0%2F%2BSqbewBtFQHG02W8ExRvVMY3akQYKlLziuCwBf1Mn7yZAITepqcZ2nlnTNAe0%2BrLZu4XIy9iKgC6spQf0%2FCwOkV5KcgoW4Z5hAqTbNlBQl5dL%2BcwAuBkUjC8SOu3rw6sDQ0sD2LMj0u7KfZ9PP1aloKn3msH55tfDEICL4NPxQZQn9e6dVj4A82bOqzkpM0j2PmOqikuFnbu8MDkj0qExLxVszxUgtJYbUbnS4vvZdtOyAjSsvc%2FzO3dCltLvSxPuFPYlk32awi3s7NpfNKoblgfJpy32Tpp95sLC9G6GkFyCBUXAJfL4sYzMkBEfXWguzX2fACQfhvwJAKFIFo7B9qgMFSljo6aRLJ%2B9fVb7pg7EKA4dMaJXhysVL8eMMwxbb8vgY6pgFMQ85jkMUanj90V6DxpdgU2i0AvPP2hI1EQBtvqDAJwVhna54czmkhjnQ3ztO3A%2FzZ0REdQ8yA8sKm3UnsOFO6q8JloLQMh11niKpH2fr41DMmhcbm5dceTSvIQ833vvkA%2FWrvGuBNws5MUhqWG2DZAWAS98MklVgkqGjbgDs7rckXsakLO5VEzvh3BpM%2FJ6tiQB3rM%2FcpsN9U%2BhhkYJdkc761khaz&X-Amz-Signature=559e78e2a8070d2372275e5799b928d9ee67edf94f7788043b7fc03d03a234e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

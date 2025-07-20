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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW7CLJK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuTnq8QfNbDaJMP6q%2FnJgW3orKABgdHpxsx%2Bi53Xw2xAiBYVdy6W9hBgBRpoK7mPI1cEtYZ0KCdwWCpJE8I%2BkWQsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvOCFrsFcYPAISbqwKtwDs4eedd9vLly0yr2yTXyPMUbJ9ug4%2B%2FZgUVR1et%2Fd2KjMuGyYI7QMcIgVzbsJtr05IYSp%2BUt68160nVZqIlyditvYoePGvpVCFUtNmDK1j%2B67ZUNejmjcH70WpYXYqrs%2BO%2BvIjdP%2B60CqvIFEjUcTgDQqNQZv8reKxsuTzqAbz4UKvUtYqSzBLLtyepJ0ab06hyRN6g2AG4ycyGnn17qg3e6yAhyh9WKQKy%2F3M%2BxDz4NeUb8Y654Z1W7AuOmYINu3alyDfr%2B83qQMOjBy2AVKKJTd5vq%2FpJ%2F4QTRIlwQmcWH3CUkTJWAGM4zsU96HmzYTHwBM11iDcrxdSMgkqURj82r%2BhyciO0r2N1SC9UqJJoxwof%2BvKFwP%2BOAZfQgD0ht5jYo%2F%2FAl%2FlI5vKfBn4onpNkv6q9FyfiX5XCtocFiW%2BxrE%2FhsPEQnQ%2BA3n2efCUJoXGh0ZihxwBZhey4QOdr8YGZkbB1Ug%2FZAE0ay%2BvlAGEY3%2BrlSljGAaUjM7miyqykPnMupFyPwcjOEFFs9U1h2KmTthDQc68wZfsEripvfhSyrzC9iT9PC%2Bp2iOcJW3Hs31BvtwRjdfvGAqjVjCKSp0sRfsbNjMFostRD3tGxa1F7ldlyP94FU3cbclheIwp5fxwwY6pgEPb5doeVbDsxHiDHCeoD1%2BSKShFdRk6uNXLFML4e5zHIC5kKre6g6CzSdLnIwcfD9hLulgG5OCzypBDTGZ%2BQ90mPj1nXnISkI3Ej92lFzZ%2B0TbJqZPEjjUu%2FS4J5oVQ7OJNHVUkzIZFPB4zCscuvswbemBnp%2BoubJ7dh%2B25G2N9qBYc4gAywRwFMAaCvpmq%2F4JZGYSP%2Fyhq955KCos44gh3kcAwkKy&X-Amz-Signature=2226efa3c126d80d769876be2d7f729c1f9a3506a78a7e4d82b8bd98719e2be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW7CLJK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuTnq8QfNbDaJMP6q%2FnJgW3orKABgdHpxsx%2Bi53Xw2xAiBYVdy6W9hBgBRpoK7mPI1cEtYZ0KCdwWCpJE8I%2BkWQsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvOCFrsFcYPAISbqwKtwDs4eedd9vLly0yr2yTXyPMUbJ9ug4%2B%2FZgUVR1et%2Fd2KjMuGyYI7QMcIgVzbsJtr05IYSp%2BUt68160nVZqIlyditvYoePGvpVCFUtNmDK1j%2B67ZUNejmjcH70WpYXYqrs%2BO%2BvIjdP%2B60CqvIFEjUcTgDQqNQZv8reKxsuTzqAbz4UKvUtYqSzBLLtyepJ0ab06hyRN6g2AG4ycyGnn17qg3e6yAhyh9WKQKy%2F3M%2BxDz4NeUb8Y654Z1W7AuOmYINu3alyDfr%2B83qQMOjBy2AVKKJTd5vq%2FpJ%2F4QTRIlwQmcWH3CUkTJWAGM4zsU96HmzYTHwBM11iDcrxdSMgkqURj82r%2BhyciO0r2N1SC9UqJJoxwof%2BvKFwP%2BOAZfQgD0ht5jYo%2F%2FAl%2FlI5vKfBn4onpNkv6q9FyfiX5XCtocFiW%2BxrE%2FhsPEQnQ%2BA3n2efCUJoXGh0ZihxwBZhey4QOdr8YGZkbB1Ug%2FZAE0ay%2BvlAGEY3%2BrlSljGAaUjM7miyqykPnMupFyPwcjOEFFs9U1h2KmTthDQc68wZfsEripvfhSyrzC9iT9PC%2Bp2iOcJW3Hs31BvtwRjdfvGAqjVjCKSp0sRfsbNjMFostRD3tGxa1F7ldlyP94FU3cbclheIwp5fxwwY6pgEPb5doeVbDsxHiDHCeoD1%2BSKShFdRk6uNXLFML4e5zHIC5kKre6g6CzSdLnIwcfD9hLulgG5OCzypBDTGZ%2BQ90mPj1nXnISkI3Ej92lFzZ%2B0TbJqZPEjjUu%2FS4J5oVQ7OJNHVUkzIZFPB4zCscuvswbemBnp%2BoubJ7dh%2B25G2N9qBYc4gAywRwFMAaCvpmq%2F4JZGYSP%2Fyhq955KCos44gh3kcAwkKy&X-Amz-Signature=b4bf64401ffa600aee333de5198d591c3b599fc68ef449d060fb8ad5abe4ab67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW7CLJK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuTnq8QfNbDaJMP6q%2FnJgW3orKABgdHpxsx%2Bi53Xw2xAiBYVdy6W9hBgBRpoK7mPI1cEtYZ0KCdwWCpJE8I%2BkWQsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvOCFrsFcYPAISbqwKtwDs4eedd9vLly0yr2yTXyPMUbJ9ug4%2B%2FZgUVR1et%2Fd2KjMuGyYI7QMcIgVzbsJtr05IYSp%2BUt68160nVZqIlyditvYoePGvpVCFUtNmDK1j%2B67ZUNejmjcH70WpYXYqrs%2BO%2BvIjdP%2B60CqvIFEjUcTgDQqNQZv8reKxsuTzqAbz4UKvUtYqSzBLLtyepJ0ab06hyRN6g2AG4ycyGnn17qg3e6yAhyh9WKQKy%2F3M%2BxDz4NeUb8Y654Z1W7AuOmYINu3alyDfr%2B83qQMOjBy2AVKKJTd5vq%2FpJ%2F4QTRIlwQmcWH3CUkTJWAGM4zsU96HmzYTHwBM11iDcrxdSMgkqURj82r%2BhyciO0r2N1SC9UqJJoxwof%2BvKFwP%2BOAZfQgD0ht5jYo%2F%2FAl%2FlI5vKfBn4onpNkv6q9FyfiX5XCtocFiW%2BxrE%2FhsPEQnQ%2BA3n2efCUJoXGh0ZihxwBZhey4QOdr8YGZkbB1Ug%2FZAE0ay%2BvlAGEY3%2BrlSljGAaUjM7miyqykPnMupFyPwcjOEFFs9U1h2KmTthDQc68wZfsEripvfhSyrzC9iT9PC%2Bp2iOcJW3Hs31BvtwRjdfvGAqjVjCKSp0sRfsbNjMFostRD3tGxa1F7ldlyP94FU3cbclheIwp5fxwwY6pgEPb5doeVbDsxHiDHCeoD1%2BSKShFdRk6uNXLFML4e5zHIC5kKre6g6CzSdLnIwcfD9hLulgG5OCzypBDTGZ%2BQ90mPj1nXnISkI3Ej92lFzZ%2B0TbJqZPEjjUu%2FS4J5oVQ7OJNHVUkzIZFPB4zCscuvswbemBnp%2BoubJ7dh%2B25G2N9qBYc4gAywRwFMAaCvpmq%2F4JZGYSP%2Fyhq955KCos44gh3kcAwkKy&X-Amz-Signature=f7f233c46024cca5d057a203da1e5f31c0f38c5b1dfd2250fdc12e750d836209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW7CLJK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuTnq8QfNbDaJMP6q%2FnJgW3orKABgdHpxsx%2Bi53Xw2xAiBYVdy6W9hBgBRpoK7mPI1cEtYZ0KCdwWCpJE8I%2BkWQsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvOCFrsFcYPAISbqwKtwDs4eedd9vLly0yr2yTXyPMUbJ9ug4%2B%2FZgUVR1et%2Fd2KjMuGyYI7QMcIgVzbsJtr05IYSp%2BUt68160nVZqIlyditvYoePGvpVCFUtNmDK1j%2B67ZUNejmjcH70WpYXYqrs%2BO%2BvIjdP%2B60CqvIFEjUcTgDQqNQZv8reKxsuTzqAbz4UKvUtYqSzBLLtyepJ0ab06hyRN6g2AG4ycyGnn17qg3e6yAhyh9WKQKy%2F3M%2BxDz4NeUb8Y654Z1W7AuOmYINu3alyDfr%2B83qQMOjBy2AVKKJTd5vq%2FpJ%2F4QTRIlwQmcWH3CUkTJWAGM4zsU96HmzYTHwBM11iDcrxdSMgkqURj82r%2BhyciO0r2N1SC9UqJJoxwof%2BvKFwP%2BOAZfQgD0ht5jYo%2F%2FAl%2FlI5vKfBn4onpNkv6q9FyfiX5XCtocFiW%2BxrE%2FhsPEQnQ%2BA3n2efCUJoXGh0ZihxwBZhey4QOdr8YGZkbB1Ug%2FZAE0ay%2BvlAGEY3%2BrlSljGAaUjM7miyqykPnMupFyPwcjOEFFs9U1h2KmTthDQc68wZfsEripvfhSyrzC9iT9PC%2Bp2iOcJW3Hs31BvtwRjdfvGAqjVjCKSp0sRfsbNjMFostRD3tGxa1F7ldlyP94FU3cbclheIwp5fxwwY6pgEPb5doeVbDsxHiDHCeoD1%2BSKShFdRk6uNXLFML4e5zHIC5kKre6g6CzSdLnIwcfD9hLulgG5OCzypBDTGZ%2BQ90mPj1nXnISkI3Ej92lFzZ%2B0TbJqZPEjjUu%2FS4J5oVQ7OJNHVUkzIZFPB4zCscuvswbemBnp%2BoubJ7dh%2B25G2N9qBYc4gAywRwFMAaCvpmq%2F4JZGYSP%2Fyhq955KCos44gh3kcAwkKy&X-Amz-Signature=76392cda4f648c3596ea5c404b981d04cc735a2d0cd3848fbeb955fe4063996f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW7CLJK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuTnq8QfNbDaJMP6q%2FnJgW3orKABgdHpxsx%2Bi53Xw2xAiBYVdy6W9hBgBRpoK7mPI1cEtYZ0KCdwWCpJE8I%2BkWQsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvOCFrsFcYPAISbqwKtwDs4eedd9vLly0yr2yTXyPMUbJ9ug4%2B%2FZgUVR1et%2Fd2KjMuGyYI7QMcIgVzbsJtr05IYSp%2BUt68160nVZqIlyditvYoePGvpVCFUtNmDK1j%2B67ZUNejmjcH70WpYXYqrs%2BO%2BvIjdP%2B60CqvIFEjUcTgDQqNQZv8reKxsuTzqAbz4UKvUtYqSzBLLtyepJ0ab06hyRN6g2AG4ycyGnn17qg3e6yAhyh9WKQKy%2F3M%2BxDz4NeUb8Y654Z1W7AuOmYINu3alyDfr%2B83qQMOjBy2AVKKJTd5vq%2FpJ%2F4QTRIlwQmcWH3CUkTJWAGM4zsU96HmzYTHwBM11iDcrxdSMgkqURj82r%2BhyciO0r2N1SC9UqJJoxwof%2BvKFwP%2BOAZfQgD0ht5jYo%2F%2FAl%2FlI5vKfBn4onpNkv6q9FyfiX5XCtocFiW%2BxrE%2FhsPEQnQ%2BA3n2efCUJoXGh0ZihxwBZhey4QOdr8YGZkbB1Ug%2FZAE0ay%2BvlAGEY3%2BrlSljGAaUjM7miyqykPnMupFyPwcjOEFFs9U1h2KmTthDQc68wZfsEripvfhSyrzC9iT9PC%2Bp2iOcJW3Hs31BvtwRjdfvGAqjVjCKSp0sRfsbNjMFostRD3tGxa1F7ldlyP94FU3cbclheIwp5fxwwY6pgEPb5doeVbDsxHiDHCeoD1%2BSKShFdRk6uNXLFML4e5zHIC5kKre6g6CzSdLnIwcfD9hLulgG5OCzypBDTGZ%2BQ90mPj1nXnISkI3Ej92lFzZ%2B0TbJqZPEjjUu%2FS4J5oVQ7OJNHVUkzIZFPB4zCscuvswbemBnp%2BoubJ7dh%2B25G2N9qBYc4gAywRwFMAaCvpmq%2F4JZGYSP%2Fyhq955KCos44gh3kcAwkKy&X-Amz-Signature=ee42d7001836c002e43f54336fa6e8a35068e6802c11268a1e1b76d3b5928cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW7CLJK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuTnq8QfNbDaJMP6q%2FnJgW3orKABgdHpxsx%2Bi53Xw2xAiBYVdy6W9hBgBRpoK7mPI1cEtYZ0KCdwWCpJE8I%2BkWQsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvOCFrsFcYPAISbqwKtwDs4eedd9vLly0yr2yTXyPMUbJ9ug4%2B%2FZgUVR1et%2Fd2KjMuGyYI7QMcIgVzbsJtr05IYSp%2BUt68160nVZqIlyditvYoePGvpVCFUtNmDK1j%2B67ZUNejmjcH70WpYXYqrs%2BO%2BvIjdP%2B60CqvIFEjUcTgDQqNQZv8reKxsuTzqAbz4UKvUtYqSzBLLtyepJ0ab06hyRN6g2AG4ycyGnn17qg3e6yAhyh9WKQKy%2F3M%2BxDz4NeUb8Y654Z1W7AuOmYINu3alyDfr%2B83qQMOjBy2AVKKJTd5vq%2FpJ%2F4QTRIlwQmcWH3CUkTJWAGM4zsU96HmzYTHwBM11iDcrxdSMgkqURj82r%2BhyciO0r2N1SC9UqJJoxwof%2BvKFwP%2BOAZfQgD0ht5jYo%2F%2FAl%2FlI5vKfBn4onpNkv6q9FyfiX5XCtocFiW%2BxrE%2FhsPEQnQ%2BA3n2efCUJoXGh0ZihxwBZhey4QOdr8YGZkbB1Ug%2FZAE0ay%2BvlAGEY3%2BrlSljGAaUjM7miyqykPnMupFyPwcjOEFFs9U1h2KmTthDQc68wZfsEripvfhSyrzC9iT9PC%2Bp2iOcJW3Hs31BvtwRjdfvGAqjVjCKSp0sRfsbNjMFostRD3tGxa1F7ldlyP94FU3cbclheIwp5fxwwY6pgEPb5doeVbDsxHiDHCeoD1%2BSKShFdRk6uNXLFML4e5zHIC5kKre6g6CzSdLnIwcfD9hLulgG5OCzypBDTGZ%2BQ90mPj1nXnISkI3Ej92lFzZ%2B0TbJqZPEjjUu%2FS4J5oVQ7OJNHVUkzIZFPB4zCscuvswbemBnp%2BoubJ7dh%2B25G2N9qBYc4gAywRwFMAaCvpmq%2F4JZGYSP%2Fyhq955KCos44gh3kcAwkKy&X-Amz-Signature=b096142dd30ed7a979b2203b66a7b5833fa040020622406937fb321216782422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW7CLJK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuTnq8QfNbDaJMP6q%2FnJgW3orKABgdHpxsx%2Bi53Xw2xAiBYVdy6W9hBgBRpoK7mPI1cEtYZ0KCdwWCpJE8I%2BkWQsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvOCFrsFcYPAISbqwKtwDs4eedd9vLly0yr2yTXyPMUbJ9ug4%2B%2FZgUVR1et%2Fd2KjMuGyYI7QMcIgVzbsJtr05IYSp%2BUt68160nVZqIlyditvYoePGvpVCFUtNmDK1j%2B67ZUNejmjcH70WpYXYqrs%2BO%2BvIjdP%2B60CqvIFEjUcTgDQqNQZv8reKxsuTzqAbz4UKvUtYqSzBLLtyepJ0ab06hyRN6g2AG4ycyGnn17qg3e6yAhyh9WKQKy%2F3M%2BxDz4NeUb8Y654Z1W7AuOmYINu3alyDfr%2B83qQMOjBy2AVKKJTd5vq%2FpJ%2F4QTRIlwQmcWH3CUkTJWAGM4zsU96HmzYTHwBM11iDcrxdSMgkqURj82r%2BhyciO0r2N1SC9UqJJoxwof%2BvKFwP%2BOAZfQgD0ht5jYo%2F%2FAl%2FlI5vKfBn4onpNkv6q9FyfiX5XCtocFiW%2BxrE%2FhsPEQnQ%2BA3n2efCUJoXGh0ZihxwBZhey4QOdr8YGZkbB1Ug%2FZAE0ay%2BvlAGEY3%2BrlSljGAaUjM7miyqykPnMupFyPwcjOEFFs9U1h2KmTthDQc68wZfsEripvfhSyrzC9iT9PC%2Bp2iOcJW3Hs31BvtwRjdfvGAqjVjCKSp0sRfsbNjMFostRD3tGxa1F7ldlyP94FU3cbclheIwp5fxwwY6pgEPb5doeVbDsxHiDHCeoD1%2BSKShFdRk6uNXLFML4e5zHIC5kKre6g6CzSdLnIwcfD9hLulgG5OCzypBDTGZ%2BQ90mPj1nXnISkI3Ej92lFzZ%2B0TbJqZPEjjUu%2FS4J5oVQ7OJNHVUkzIZFPB4zCscuvswbemBnp%2BoubJ7dh%2B25G2N9qBYc4gAywRwFMAaCvpmq%2F4JZGYSP%2Fyhq955KCos44gh3kcAwkKy&X-Amz-Signature=0f2fc3e1254bfe757c0793c33d31246fb27938984040b625a8b22776dbe20528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

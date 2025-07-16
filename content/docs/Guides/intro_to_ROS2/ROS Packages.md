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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKG7JOGJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGCyfLSsBLupQNLROBmH9MKztwnjr4FUZPLHWGs1nPLQAiBi3X2wIQqEP4Tpd03elo3AY6aut%2BYZ8pMopp8sXUP0USr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWdOgVCQsCtyqGgbAKtwDhYuqgiyY7S%2BxBNANVnukI3g1fYT%2FAVFryX6Ndhg8QcchExoGJA7bzrsPqVWrZA8Ztz0BY52GXi5NkpjPqbABfaPY1CtCC4U5d4omiwynpEZsKWoXqXiumi0EM33DAWULMXbL4decwZ65R6CAK8OhhTVJsptvOZThwOc2mfJOamAsKwMhideSQ%2Bm7FeTFFZ9JoEuQdfGzjP%2BD7mydoa%2B1vIMhw8bH8WqErjMenM0WycHAY%2FdXhIkSVYYnXawHb4O6gGrx6svjjN1gqC249UzPEbS%2BOXdn2ixgn4XMzWaOWqLnwhudlBF90rgx78sCNaOg9Qwizrt5J5sqZJAMot8eUqIrDDO1eMPWm8E20yLy5lOQl55EnN%2BbqXlFAcEbvWxlsXHt1oHcVkLUG%2FbQmb4nes05Cttle0nSbutl85VgMJxNUN6b6Yp4AkLxZy3PZzMkHhJRQbz03V7sQz%2FWqPBCsSDnBhRglV6IruqEoMzKfSlfLvQmLcEi2wM2FdSlSzIQ6Ig6rCLWXZo8bNk8%2Fup%2FmS0O7R%2FLqi3CT7Hq5u0RctyYpZ2H8GR5Wvs%2B8KRYhmIgcwFuutvkU8gAvqi2yh7jffd6KBhWeuqIAEqHNHANNr2sUnNNeMrBjz8VSBEw7ZDdwwY6pgHafi2kQXZvhx7WwjXnU8Rc%2FRzUJTRMgIYcfsMrk2NrXXbtFgzrCaPefmSFRIKzHXuCBD43LswC91AzRvFrhHFxRp3LUNBLLmgYKiK5iRnmhl4IXr1U%2Bg%2BX4UC1n8GfuJ%2Bj2XeH1qrWRmeFHvUhrJiTv9IYjDzw3rr5UCH9me6YLP2EmLo0pplgWtd16oG9hMEW6uxkIM9hikQoHwEkjjPhrINx5P4n&X-Amz-Signature=12033a9f62836755d7dc9dbae2ed8a85d35a7bcf1d1b3b44e20029a6b51c27de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKG7JOGJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGCyfLSsBLupQNLROBmH9MKztwnjr4FUZPLHWGs1nPLQAiBi3X2wIQqEP4Tpd03elo3AY6aut%2BYZ8pMopp8sXUP0USr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWdOgVCQsCtyqGgbAKtwDhYuqgiyY7S%2BxBNANVnukI3g1fYT%2FAVFryX6Ndhg8QcchExoGJA7bzrsPqVWrZA8Ztz0BY52GXi5NkpjPqbABfaPY1CtCC4U5d4omiwynpEZsKWoXqXiumi0EM33DAWULMXbL4decwZ65R6CAK8OhhTVJsptvOZThwOc2mfJOamAsKwMhideSQ%2Bm7FeTFFZ9JoEuQdfGzjP%2BD7mydoa%2B1vIMhw8bH8WqErjMenM0WycHAY%2FdXhIkSVYYnXawHb4O6gGrx6svjjN1gqC249UzPEbS%2BOXdn2ixgn4XMzWaOWqLnwhudlBF90rgx78sCNaOg9Qwizrt5J5sqZJAMot8eUqIrDDO1eMPWm8E20yLy5lOQl55EnN%2BbqXlFAcEbvWxlsXHt1oHcVkLUG%2FbQmb4nes05Cttle0nSbutl85VgMJxNUN6b6Yp4AkLxZy3PZzMkHhJRQbz03V7sQz%2FWqPBCsSDnBhRglV6IruqEoMzKfSlfLvQmLcEi2wM2FdSlSzIQ6Ig6rCLWXZo8bNk8%2Fup%2FmS0O7R%2FLqi3CT7Hq5u0RctyYpZ2H8GR5Wvs%2B8KRYhmIgcwFuutvkU8gAvqi2yh7jffd6KBhWeuqIAEqHNHANNr2sUnNNeMrBjz8VSBEw7ZDdwwY6pgHafi2kQXZvhx7WwjXnU8Rc%2FRzUJTRMgIYcfsMrk2NrXXbtFgzrCaPefmSFRIKzHXuCBD43LswC91AzRvFrhHFxRp3LUNBLLmgYKiK5iRnmhl4IXr1U%2Bg%2BX4UC1n8GfuJ%2Bj2XeH1qrWRmeFHvUhrJiTv9IYjDzw3rr5UCH9me6YLP2EmLo0pplgWtd16oG9hMEW6uxkIM9hikQoHwEkjjPhrINx5P4n&X-Amz-Signature=b6b623401260589175054ac6462adf4f881e2e664f55060dd409b033ba1a53ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKG7JOGJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGCyfLSsBLupQNLROBmH9MKztwnjr4FUZPLHWGs1nPLQAiBi3X2wIQqEP4Tpd03elo3AY6aut%2BYZ8pMopp8sXUP0USr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWdOgVCQsCtyqGgbAKtwDhYuqgiyY7S%2BxBNANVnukI3g1fYT%2FAVFryX6Ndhg8QcchExoGJA7bzrsPqVWrZA8Ztz0BY52GXi5NkpjPqbABfaPY1CtCC4U5d4omiwynpEZsKWoXqXiumi0EM33DAWULMXbL4decwZ65R6CAK8OhhTVJsptvOZThwOc2mfJOamAsKwMhideSQ%2Bm7FeTFFZ9JoEuQdfGzjP%2BD7mydoa%2B1vIMhw8bH8WqErjMenM0WycHAY%2FdXhIkSVYYnXawHb4O6gGrx6svjjN1gqC249UzPEbS%2BOXdn2ixgn4XMzWaOWqLnwhudlBF90rgx78sCNaOg9Qwizrt5J5sqZJAMot8eUqIrDDO1eMPWm8E20yLy5lOQl55EnN%2BbqXlFAcEbvWxlsXHt1oHcVkLUG%2FbQmb4nes05Cttle0nSbutl85VgMJxNUN6b6Yp4AkLxZy3PZzMkHhJRQbz03V7sQz%2FWqPBCsSDnBhRglV6IruqEoMzKfSlfLvQmLcEi2wM2FdSlSzIQ6Ig6rCLWXZo8bNk8%2Fup%2FmS0O7R%2FLqi3CT7Hq5u0RctyYpZ2H8GR5Wvs%2B8KRYhmIgcwFuutvkU8gAvqi2yh7jffd6KBhWeuqIAEqHNHANNr2sUnNNeMrBjz8VSBEw7ZDdwwY6pgHafi2kQXZvhx7WwjXnU8Rc%2FRzUJTRMgIYcfsMrk2NrXXbtFgzrCaPefmSFRIKzHXuCBD43LswC91AzRvFrhHFxRp3LUNBLLmgYKiK5iRnmhl4IXr1U%2Bg%2BX4UC1n8GfuJ%2Bj2XeH1qrWRmeFHvUhrJiTv9IYjDzw3rr5UCH9me6YLP2EmLo0pplgWtd16oG9hMEW6uxkIM9hikQoHwEkjjPhrINx5P4n&X-Amz-Signature=86a232b88d456d93d126303e5bee22628efa8c6e16334c08d39829a61caf0971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKG7JOGJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGCyfLSsBLupQNLROBmH9MKztwnjr4FUZPLHWGs1nPLQAiBi3X2wIQqEP4Tpd03elo3AY6aut%2BYZ8pMopp8sXUP0USr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWdOgVCQsCtyqGgbAKtwDhYuqgiyY7S%2BxBNANVnukI3g1fYT%2FAVFryX6Ndhg8QcchExoGJA7bzrsPqVWrZA8Ztz0BY52GXi5NkpjPqbABfaPY1CtCC4U5d4omiwynpEZsKWoXqXiumi0EM33DAWULMXbL4decwZ65R6CAK8OhhTVJsptvOZThwOc2mfJOamAsKwMhideSQ%2Bm7FeTFFZ9JoEuQdfGzjP%2BD7mydoa%2B1vIMhw8bH8WqErjMenM0WycHAY%2FdXhIkSVYYnXawHb4O6gGrx6svjjN1gqC249UzPEbS%2BOXdn2ixgn4XMzWaOWqLnwhudlBF90rgx78sCNaOg9Qwizrt5J5sqZJAMot8eUqIrDDO1eMPWm8E20yLy5lOQl55EnN%2BbqXlFAcEbvWxlsXHt1oHcVkLUG%2FbQmb4nes05Cttle0nSbutl85VgMJxNUN6b6Yp4AkLxZy3PZzMkHhJRQbz03V7sQz%2FWqPBCsSDnBhRglV6IruqEoMzKfSlfLvQmLcEi2wM2FdSlSzIQ6Ig6rCLWXZo8bNk8%2Fup%2FmS0O7R%2FLqi3CT7Hq5u0RctyYpZ2H8GR5Wvs%2B8KRYhmIgcwFuutvkU8gAvqi2yh7jffd6KBhWeuqIAEqHNHANNr2sUnNNeMrBjz8VSBEw7ZDdwwY6pgHafi2kQXZvhx7WwjXnU8Rc%2FRzUJTRMgIYcfsMrk2NrXXbtFgzrCaPefmSFRIKzHXuCBD43LswC91AzRvFrhHFxRp3LUNBLLmgYKiK5iRnmhl4IXr1U%2Bg%2BX4UC1n8GfuJ%2Bj2XeH1qrWRmeFHvUhrJiTv9IYjDzw3rr5UCH9me6YLP2EmLo0pplgWtd16oG9hMEW6uxkIM9hikQoHwEkjjPhrINx5P4n&X-Amz-Signature=fc51534adf40ed00d581c72584ca5e198de3006d1f2d25fea68d930f4b0d3c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKG7JOGJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGCyfLSsBLupQNLROBmH9MKztwnjr4FUZPLHWGs1nPLQAiBi3X2wIQqEP4Tpd03elo3AY6aut%2BYZ8pMopp8sXUP0USr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWdOgVCQsCtyqGgbAKtwDhYuqgiyY7S%2BxBNANVnukI3g1fYT%2FAVFryX6Ndhg8QcchExoGJA7bzrsPqVWrZA8Ztz0BY52GXi5NkpjPqbABfaPY1CtCC4U5d4omiwynpEZsKWoXqXiumi0EM33DAWULMXbL4decwZ65R6CAK8OhhTVJsptvOZThwOc2mfJOamAsKwMhideSQ%2Bm7FeTFFZ9JoEuQdfGzjP%2BD7mydoa%2B1vIMhw8bH8WqErjMenM0WycHAY%2FdXhIkSVYYnXawHb4O6gGrx6svjjN1gqC249UzPEbS%2BOXdn2ixgn4XMzWaOWqLnwhudlBF90rgx78sCNaOg9Qwizrt5J5sqZJAMot8eUqIrDDO1eMPWm8E20yLy5lOQl55EnN%2BbqXlFAcEbvWxlsXHt1oHcVkLUG%2FbQmb4nes05Cttle0nSbutl85VgMJxNUN6b6Yp4AkLxZy3PZzMkHhJRQbz03V7sQz%2FWqPBCsSDnBhRglV6IruqEoMzKfSlfLvQmLcEi2wM2FdSlSzIQ6Ig6rCLWXZo8bNk8%2Fup%2FmS0O7R%2FLqi3CT7Hq5u0RctyYpZ2H8GR5Wvs%2B8KRYhmIgcwFuutvkU8gAvqi2yh7jffd6KBhWeuqIAEqHNHANNr2sUnNNeMrBjz8VSBEw7ZDdwwY6pgHafi2kQXZvhx7WwjXnU8Rc%2FRzUJTRMgIYcfsMrk2NrXXbtFgzrCaPefmSFRIKzHXuCBD43LswC91AzRvFrhHFxRp3LUNBLLmgYKiK5iRnmhl4IXr1U%2Bg%2BX4UC1n8GfuJ%2Bj2XeH1qrWRmeFHvUhrJiTv9IYjDzw3rr5UCH9me6YLP2EmLo0pplgWtd16oG9hMEW6uxkIM9hikQoHwEkjjPhrINx5P4n&X-Amz-Signature=5b4ab5cd02e5026546b6036e66c12af901d6ab56c372bc4835e6b55802e7925e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKG7JOGJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGCyfLSsBLupQNLROBmH9MKztwnjr4FUZPLHWGs1nPLQAiBi3X2wIQqEP4Tpd03elo3AY6aut%2BYZ8pMopp8sXUP0USr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWdOgVCQsCtyqGgbAKtwDhYuqgiyY7S%2BxBNANVnukI3g1fYT%2FAVFryX6Ndhg8QcchExoGJA7bzrsPqVWrZA8Ztz0BY52GXi5NkpjPqbABfaPY1CtCC4U5d4omiwynpEZsKWoXqXiumi0EM33DAWULMXbL4decwZ65R6CAK8OhhTVJsptvOZThwOc2mfJOamAsKwMhideSQ%2Bm7FeTFFZ9JoEuQdfGzjP%2BD7mydoa%2B1vIMhw8bH8WqErjMenM0WycHAY%2FdXhIkSVYYnXawHb4O6gGrx6svjjN1gqC249UzPEbS%2BOXdn2ixgn4XMzWaOWqLnwhudlBF90rgx78sCNaOg9Qwizrt5J5sqZJAMot8eUqIrDDO1eMPWm8E20yLy5lOQl55EnN%2BbqXlFAcEbvWxlsXHt1oHcVkLUG%2FbQmb4nes05Cttle0nSbutl85VgMJxNUN6b6Yp4AkLxZy3PZzMkHhJRQbz03V7sQz%2FWqPBCsSDnBhRglV6IruqEoMzKfSlfLvQmLcEi2wM2FdSlSzIQ6Ig6rCLWXZo8bNk8%2Fup%2FmS0O7R%2FLqi3CT7Hq5u0RctyYpZ2H8GR5Wvs%2B8KRYhmIgcwFuutvkU8gAvqi2yh7jffd6KBhWeuqIAEqHNHANNr2sUnNNeMrBjz8VSBEw7ZDdwwY6pgHafi2kQXZvhx7WwjXnU8Rc%2FRzUJTRMgIYcfsMrk2NrXXbtFgzrCaPefmSFRIKzHXuCBD43LswC91AzRvFrhHFxRp3LUNBLLmgYKiK5iRnmhl4IXr1U%2Bg%2BX4UC1n8GfuJ%2Bj2XeH1qrWRmeFHvUhrJiTv9IYjDzw3rr5UCH9me6YLP2EmLo0pplgWtd16oG9hMEW6uxkIM9hikQoHwEkjjPhrINx5P4n&X-Amz-Signature=04fa27cbbdbadc580178a8a953ccfc6ed5a91829801361567959e754dd4d3621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKG7JOGJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGCyfLSsBLupQNLROBmH9MKztwnjr4FUZPLHWGs1nPLQAiBi3X2wIQqEP4Tpd03elo3AY6aut%2BYZ8pMopp8sXUP0USr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWdOgVCQsCtyqGgbAKtwDhYuqgiyY7S%2BxBNANVnukI3g1fYT%2FAVFryX6Ndhg8QcchExoGJA7bzrsPqVWrZA8Ztz0BY52GXi5NkpjPqbABfaPY1CtCC4U5d4omiwynpEZsKWoXqXiumi0EM33DAWULMXbL4decwZ65R6CAK8OhhTVJsptvOZThwOc2mfJOamAsKwMhideSQ%2Bm7FeTFFZ9JoEuQdfGzjP%2BD7mydoa%2B1vIMhw8bH8WqErjMenM0WycHAY%2FdXhIkSVYYnXawHb4O6gGrx6svjjN1gqC249UzPEbS%2BOXdn2ixgn4XMzWaOWqLnwhudlBF90rgx78sCNaOg9Qwizrt5J5sqZJAMot8eUqIrDDO1eMPWm8E20yLy5lOQl55EnN%2BbqXlFAcEbvWxlsXHt1oHcVkLUG%2FbQmb4nes05Cttle0nSbutl85VgMJxNUN6b6Yp4AkLxZy3PZzMkHhJRQbz03V7sQz%2FWqPBCsSDnBhRglV6IruqEoMzKfSlfLvQmLcEi2wM2FdSlSzIQ6Ig6rCLWXZo8bNk8%2Fup%2FmS0O7R%2FLqi3CT7Hq5u0RctyYpZ2H8GR5Wvs%2B8KRYhmIgcwFuutvkU8gAvqi2yh7jffd6KBhWeuqIAEqHNHANNr2sUnNNeMrBjz8VSBEw7ZDdwwY6pgHafi2kQXZvhx7WwjXnU8Rc%2FRzUJTRMgIYcfsMrk2NrXXbtFgzrCaPefmSFRIKzHXuCBD43LswC91AzRvFrhHFxRp3LUNBLLmgYKiK5iRnmhl4IXr1U%2Bg%2BX4UC1n8GfuJ%2Bj2XeH1qrWRmeFHvUhrJiTv9IYjDzw3rr5UCH9me6YLP2EmLo0pplgWtd16oG9hMEW6uxkIM9hikQoHwEkjjPhrINx5P4n&X-Amz-Signature=0910c3c3c07d23dd6dbf5e5beb0d0b6057a8d16cb936127386f64195aff80119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

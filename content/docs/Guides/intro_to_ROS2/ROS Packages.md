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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5AS7SF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGu7fjbSh7%2BVjtnAsTKSgVgIE9MUYKsPwVkFS2nO8JzbAiBL5jVgBgJBIWRCn2MgXJXJ5u1uzJzYkhZPztXs5Yrq4SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8GXbm3PJ3pb0cvkWKtwDdTwk%2BVuI3FYcaL1WiW%2BnvFrP33oKg25DB6cUFaGJN%2B0Y2pUtxeDz%2BH9HPMiiU9SRPuh3FNnyXiQt8q%2FXMWdSejXzOD0n871dW9i%2FPwBw9kdug113jRPOsDvCFa4TqzM%2BLA%2FHhLn1W3YlJ0e71UhjnwG0hbiQ5Xyc%2BrkQAt6hNKDAMkIZs6%2FIz8uhGKs%2FR0yGAx6kJTteUy1HRqyspKXhjMMrNgetPzSG4z0ma3rWH97u8J465JKzl%2BJV%2FlLsaG%2FHb49nATmjz06gUVIND9bWOxDyUvtunzyoqY%2BcPdTgxxnhVVcgFViNhJuVQJLDVcSNfh9zCHPPbgqtMGsQYD8EaSFMyGjxGtiOVnSGu7WGP5GApWlpNNAjJKxllrTNG8s1iP92hWvsRjkBwu8oGDag%2BHR5dci3JOWoUmstiwEtcHChRhwLC1hb9SEq7vymRRareOZzkFFfsLm2orSmAN7H8dQajJa0cAyBgISAy%2FWdjpCRL9igJBj7l1C2%2F4RB8MaSwnKnZLppF7jDNvyKZ%2Bw3J%2BEJfheFPdWKKkToyA9B8pay3Pr1YJ8%2BpEzmKpbkaoes2dO52i7cBxf3Y7ZP%2BHSumrzySfTVYtV9rTWscuicqVHpxI%2BCF%2BG0SU1nac0w3YjSxAY6pgGUHOK%2Fta6po%2BFm87PouCBg4nA3WHyWT5zBc%2FluwyqOPbxYZnMd8PJnSrsqUnfaCN%2Frp2RTn5FOBpjUKEVyg4CHlvp0FZeIVjpJ25Lu1pBsp6Ux56Y3ghrihgaCQ%2BhI7us5lUATnJvLOJiLIGyLqP9akx6lXnKa2hIAjtQcAgNC7KbeyDDeX45orA9hT%2B%2Fya2cRetWIXO8pHOG3m7F5AlSFX7Wkgv4o&X-Amz-Signature=3ad6e38b21be6dae6a89f2734e2664b742d80783f619a3e8f968edf222789670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5AS7SF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGu7fjbSh7%2BVjtnAsTKSgVgIE9MUYKsPwVkFS2nO8JzbAiBL5jVgBgJBIWRCn2MgXJXJ5u1uzJzYkhZPztXs5Yrq4SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8GXbm3PJ3pb0cvkWKtwDdTwk%2BVuI3FYcaL1WiW%2BnvFrP33oKg25DB6cUFaGJN%2B0Y2pUtxeDz%2BH9HPMiiU9SRPuh3FNnyXiQt8q%2FXMWdSejXzOD0n871dW9i%2FPwBw9kdug113jRPOsDvCFa4TqzM%2BLA%2FHhLn1W3YlJ0e71UhjnwG0hbiQ5Xyc%2BrkQAt6hNKDAMkIZs6%2FIz8uhGKs%2FR0yGAx6kJTteUy1HRqyspKXhjMMrNgetPzSG4z0ma3rWH97u8J465JKzl%2BJV%2FlLsaG%2FHb49nATmjz06gUVIND9bWOxDyUvtunzyoqY%2BcPdTgxxnhVVcgFViNhJuVQJLDVcSNfh9zCHPPbgqtMGsQYD8EaSFMyGjxGtiOVnSGu7WGP5GApWlpNNAjJKxllrTNG8s1iP92hWvsRjkBwu8oGDag%2BHR5dci3JOWoUmstiwEtcHChRhwLC1hb9SEq7vymRRareOZzkFFfsLm2orSmAN7H8dQajJa0cAyBgISAy%2FWdjpCRL9igJBj7l1C2%2F4RB8MaSwnKnZLppF7jDNvyKZ%2Bw3J%2BEJfheFPdWKKkToyA9B8pay3Pr1YJ8%2BpEzmKpbkaoes2dO52i7cBxf3Y7ZP%2BHSumrzySfTVYtV9rTWscuicqVHpxI%2BCF%2BG0SU1nac0w3YjSxAY6pgGUHOK%2Fta6po%2BFm87PouCBg4nA3WHyWT5zBc%2FluwyqOPbxYZnMd8PJnSrsqUnfaCN%2Frp2RTn5FOBpjUKEVyg4CHlvp0FZeIVjpJ25Lu1pBsp6Ux56Y3ghrihgaCQ%2BhI7us5lUATnJvLOJiLIGyLqP9akx6lXnKa2hIAjtQcAgNC7KbeyDDeX45orA9hT%2B%2Fya2cRetWIXO8pHOG3m7F5AlSFX7Wkgv4o&X-Amz-Signature=9fa73381cdb77075c179a8a1dc4f9cb207628a4c1b023bdb6dba17386c9b4ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5AS7SF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGu7fjbSh7%2BVjtnAsTKSgVgIE9MUYKsPwVkFS2nO8JzbAiBL5jVgBgJBIWRCn2MgXJXJ5u1uzJzYkhZPztXs5Yrq4SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8GXbm3PJ3pb0cvkWKtwDdTwk%2BVuI3FYcaL1WiW%2BnvFrP33oKg25DB6cUFaGJN%2B0Y2pUtxeDz%2BH9HPMiiU9SRPuh3FNnyXiQt8q%2FXMWdSejXzOD0n871dW9i%2FPwBw9kdug113jRPOsDvCFa4TqzM%2BLA%2FHhLn1W3YlJ0e71UhjnwG0hbiQ5Xyc%2BrkQAt6hNKDAMkIZs6%2FIz8uhGKs%2FR0yGAx6kJTteUy1HRqyspKXhjMMrNgetPzSG4z0ma3rWH97u8J465JKzl%2BJV%2FlLsaG%2FHb49nATmjz06gUVIND9bWOxDyUvtunzyoqY%2BcPdTgxxnhVVcgFViNhJuVQJLDVcSNfh9zCHPPbgqtMGsQYD8EaSFMyGjxGtiOVnSGu7WGP5GApWlpNNAjJKxllrTNG8s1iP92hWvsRjkBwu8oGDag%2BHR5dci3JOWoUmstiwEtcHChRhwLC1hb9SEq7vymRRareOZzkFFfsLm2orSmAN7H8dQajJa0cAyBgISAy%2FWdjpCRL9igJBj7l1C2%2F4RB8MaSwnKnZLppF7jDNvyKZ%2Bw3J%2BEJfheFPdWKKkToyA9B8pay3Pr1YJ8%2BpEzmKpbkaoes2dO52i7cBxf3Y7ZP%2BHSumrzySfTVYtV9rTWscuicqVHpxI%2BCF%2BG0SU1nac0w3YjSxAY6pgGUHOK%2Fta6po%2BFm87PouCBg4nA3WHyWT5zBc%2FluwyqOPbxYZnMd8PJnSrsqUnfaCN%2Frp2RTn5FOBpjUKEVyg4CHlvp0FZeIVjpJ25Lu1pBsp6Ux56Y3ghrihgaCQ%2BhI7us5lUATnJvLOJiLIGyLqP9akx6lXnKa2hIAjtQcAgNC7KbeyDDeX45orA9hT%2B%2Fya2cRetWIXO8pHOG3m7F5AlSFX7Wkgv4o&X-Amz-Signature=b0d93ec017f371e698e2a586e98ad9c739906808c6d65ce22152fb7fb07540ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5AS7SF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGu7fjbSh7%2BVjtnAsTKSgVgIE9MUYKsPwVkFS2nO8JzbAiBL5jVgBgJBIWRCn2MgXJXJ5u1uzJzYkhZPztXs5Yrq4SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8GXbm3PJ3pb0cvkWKtwDdTwk%2BVuI3FYcaL1WiW%2BnvFrP33oKg25DB6cUFaGJN%2B0Y2pUtxeDz%2BH9HPMiiU9SRPuh3FNnyXiQt8q%2FXMWdSejXzOD0n871dW9i%2FPwBw9kdug113jRPOsDvCFa4TqzM%2BLA%2FHhLn1W3YlJ0e71UhjnwG0hbiQ5Xyc%2BrkQAt6hNKDAMkIZs6%2FIz8uhGKs%2FR0yGAx6kJTteUy1HRqyspKXhjMMrNgetPzSG4z0ma3rWH97u8J465JKzl%2BJV%2FlLsaG%2FHb49nATmjz06gUVIND9bWOxDyUvtunzyoqY%2BcPdTgxxnhVVcgFViNhJuVQJLDVcSNfh9zCHPPbgqtMGsQYD8EaSFMyGjxGtiOVnSGu7WGP5GApWlpNNAjJKxllrTNG8s1iP92hWvsRjkBwu8oGDag%2BHR5dci3JOWoUmstiwEtcHChRhwLC1hb9SEq7vymRRareOZzkFFfsLm2orSmAN7H8dQajJa0cAyBgISAy%2FWdjpCRL9igJBj7l1C2%2F4RB8MaSwnKnZLppF7jDNvyKZ%2Bw3J%2BEJfheFPdWKKkToyA9B8pay3Pr1YJ8%2BpEzmKpbkaoes2dO52i7cBxf3Y7ZP%2BHSumrzySfTVYtV9rTWscuicqVHpxI%2BCF%2BG0SU1nac0w3YjSxAY6pgGUHOK%2Fta6po%2BFm87PouCBg4nA3WHyWT5zBc%2FluwyqOPbxYZnMd8PJnSrsqUnfaCN%2Frp2RTn5FOBpjUKEVyg4CHlvp0FZeIVjpJ25Lu1pBsp6Ux56Y3ghrihgaCQ%2BhI7us5lUATnJvLOJiLIGyLqP9akx6lXnKa2hIAjtQcAgNC7KbeyDDeX45orA9hT%2B%2Fya2cRetWIXO8pHOG3m7F5AlSFX7Wkgv4o&X-Amz-Signature=b191e6f59a9bc2fd79bfb484d36f07ad0864f77d412541c91e2a3460436e34f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5AS7SF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGu7fjbSh7%2BVjtnAsTKSgVgIE9MUYKsPwVkFS2nO8JzbAiBL5jVgBgJBIWRCn2MgXJXJ5u1uzJzYkhZPztXs5Yrq4SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8GXbm3PJ3pb0cvkWKtwDdTwk%2BVuI3FYcaL1WiW%2BnvFrP33oKg25DB6cUFaGJN%2B0Y2pUtxeDz%2BH9HPMiiU9SRPuh3FNnyXiQt8q%2FXMWdSejXzOD0n871dW9i%2FPwBw9kdug113jRPOsDvCFa4TqzM%2BLA%2FHhLn1W3YlJ0e71UhjnwG0hbiQ5Xyc%2BrkQAt6hNKDAMkIZs6%2FIz8uhGKs%2FR0yGAx6kJTteUy1HRqyspKXhjMMrNgetPzSG4z0ma3rWH97u8J465JKzl%2BJV%2FlLsaG%2FHb49nATmjz06gUVIND9bWOxDyUvtunzyoqY%2BcPdTgxxnhVVcgFViNhJuVQJLDVcSNfh9zCHPPbgqtMGsQYD8EaSFMyGjxGtiOVnSGu7WGP5GApWlpNNAjJKxllrTNG8s1iP92hWvsRjkBwu8oGDag%2BHR5dci3JOWoUmstiwEtcHChRhwLC1hb9SEq7vymRRareOZzkFFfsLm2orSmAN7H8dQajJa0cAyBgISAy%2FWdjpCRL9igJBj7l1C2%2F4RB8MaSwnKnZLppF7jDNvyKZ%2Bw3J%2BEJfheFPdWKKkToyA9B8pay3Pr1YJ8%2BpEzmKpbkaoes2dO52i7cBxf3Y7ZP%2BHSumrzySfTVYtV9rTWscuicqVHpxI%2BCF%2BG0SU1nac0w3YjSxAY6pgGUHOK%2Fta6po%2BFm87PouCBg4nA3WHyWT5zBc%2FluwyqOPbxYZnMd8PJnSrsqUnfaCN%2Frp2RTn5FOBpjUKEVyg4CHlvp0FZeIVjpJ25Lu1pBsp6Ux56Y3ghrihgaCQ%2BhI7us5lUATnJvLOJiLIGyLqP9akx6lXnKa2hIAjtQcAgNC7KbeyDDeX45orA9hT%2B%2Fya2cRetWIXO8pHOG3m7F5AlSFX7Wkgv4o&X-Amz-Signature=c81bc47293d12f4f0913148b9f53e40ba96f8362064127b1ef22ca8a75788db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5AS7SF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGu7fjbSh7%2BVjtnAsTKSgVgIE9MUYKsPwVkFS2nO8JzbAiBL5jVgBgJBIWRCn2MgXJXJ5u1uzJzYkhZPztXs5Yrq4SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8GXbm3PJ3pb0cvkWKtwDdTwk%2BVuI3FYcaL1WiW%2BnvFrP33oKg25DB6cUFaGJN%2B0Y2pUtxeDz%2BH9HPMiiU9SRPuh3FNnyXiQt8q%2FXMWdSejXzOD0n871dW9i%2FPwBw9kdug113jRPOsDvCFa4TqzM%2BLA%2FHhLn1W3YlJ0e71UhjnwG0hbiQ5Xyc%2BrkQAt6hNKDAMkIZs6%2FIz8uhGKs%2FR0yGAx6kJTteUy1HRqyspKXhjMMrNgetPzSG4z0ma3rWH97u8J465JKzl%2BJV%2FlLsaG%2FHb49nATmjz06gUVIND9bWOxDyUvtunzyoqY%2BcPdTgxxnhVVcgFViNhJuVQJLDVcSNfh9zCHPPbgqtMGsQYD8EaSFMyGjxGtiOVnSGu7WGP5GApWlpNNAjJKxllrTNG8s1iP92hWvsRjkBwu8oGDag%2BHR5dci3JOWoUmstiwEtcHChRhwLC1hb9SEq7vymRRareOZzkFFfsLm2orSmAN7H8dQajJa0cAyBgISAy%2FWdjpCRL9igJBj7l1C2%2F4RB8MaSwnKnZLppF7jDNvyKZ%2Bw3J%2BEJfheFPdWKKkToyA9B8pay3Pr1YJ8%2BpEzmKpbkaoes2dO52i7cBxf3Y7ZP%2BHSumrzySfTVYtV9rTWscuicqVHpxI%2BCF%2BG0SU1nac0w3YjSxAY6pgGUHOK%2Fta6po%2BFm87PouCBg4nA3WHyWT5zBc%2FluwyqOPbxYZnMd8PJnSrsqUnfaCN%2Frp2RTn5FOBpjUKEVyg4CHlvp0FZeIVjpJ25Lu1pBsp6Ux56Y3ghrihgaCQ%2BhI7us5lUATnJvLOJiLIGyLqP9akx6lXnKa2hIAjtQcAgNC7KbeyDDeX45orA9hT%2B%2Fya2cRetWIXO8pHOG3m7F5AlSFX7Wkgv4o&X-Amz-Signature=c661adf22d6aadd37aa89d33aaf63109fa58708f3ebd7a8008f41ba49dd8f9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5AS7SF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGu7fjbSh7%2BVjtnAsTKSgVgIE9MUYKsPwVkFS2nO8JzbAiBL5jVgBgJBIWRCn2MgXJXJ5u1uzJzYkhZPztXs5Yrq4SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8GXbm3PJ3pb0cvkWKtwDdTwk%2BVuI3FYcaL1WiW%2BnvFrP33oKg25DB6cUFaGJN%2B0Y2pUtxeDz%2BH9HPMiiU9SRPuh3FNnyXiQt8q%2FXMWdSejXzOD0n871dW9i%2FPwBw9kdug113jRPOsDvCFa4TqzM%2BLA%2FHhLn1W3YlJ0e71UhjnwG0hbiQ5Xyc%2BrkQAt6hNKDAMkIZs6%2FIz8uhGKs%2FR0yGAx6kJTteUy1HRqyspKXhjMMrNgetPzSG4z0ma3rWH97u8J465JKzl%2BJV%2FlLsaG%2FHb49nATmjz06gUVIND9bWOxDyUvtunzyoqY%2BcPdTgxxnhVVcgFViNhJuVQJLDVcSNfh9zCHPPbgqtMGsQYD8EaSFMyGjxGtiOVnSGu7WGP5GApWlpNNAjJKxllrTNG8s1iP92hWvsRjkBwu8oGDag%2BHR5dci3JOWoUmstiwEtcHChRhwLC1hb9SEq7vymRRareOZzkFFfsLm2orSmAN7H8dQajJa0cAyBgISAy%2FWdjpCRL9igJBj7l1C2%2F4RB8MaSwnKnZLppF7jDNvyKZ%2Bw3J%2BEJfheFPdWKKkToyA9B8pay3Pr1YJ8%2BpEzmKpbkaoes2dO52i7cBxf3Y7ZP%2BHSumrzySfTVYtV9rTWscuicqVHpxI%2BCF%2BG0SU1nac0w3YjSxAY6pgGUHOK%2Fta6po%2BFm87PouCBg4nA3WHyWT5zBc%2FluwyqOPbxYZnMd8PJnSrsqUnfaCN%2Frp2RTn5FOBpjUKEVyg4CHlvp0FZeIVjpJ25Lu1pBsp6Ux56Y3ghrihgaCQ%2BhI7us5lUATnJvLOJiLIGyLqP9akx6lXnKa2hIAjtQcAgNC7KbeyDDeX45orA9hT%2B%2Fya2cRetWIXO8pHOG3m7F5AlSFX7Wkgv4o&X-Amz-Signature=0528b4eadd21ce0c4ae8288d55d3dab4329bfc726380fced13a1d4410f45644d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

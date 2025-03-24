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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIKFMLI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxVQXvHBvtLsp94%2Fc0S2WtDQZEq07yJdlapPBc%2FcIUVAiBUYmJkuxkx1v8vKhNtMUwi1Sg8t4du6GKm9%2FERyNG2UyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLy9evbA1BYHFt9TKtwD6aVyI2aNLTlYlQE3iGIR4JdfezqxJ2Tg2C1ypC1vMrY8B1P%2BXZaIBgOscCTUTRWcf0QKan0JkqiV4kYYpKjT1J9R0ANJQ4MgjkT1CAvb9seqswhG4IZ3sYG9lSt1ONebaJKaXrZeT2jSsJWiLf2VGwb4eeCK%2FCe95Fz6CFQxlZKr1Tl8srOopaSBLJ08HtPSbtuMS9uM60RwqYdGxuFqLXGebaqMM5525WZ7x83c1UJOlIK5ltC3iPkm4VBbok9lCZGnpYfG%2F80KxQbgLm6eSsoNVzLKi7vkopMqB%2Fzji6Y2bou8b8jvEqlF2oe%2F5LB2uRAgrcdrQkU9xGHIauH8KF8Z9aK50QEGV2HmH24I58M6KeOBI2pa4vxf%2FH2FKvYmhFUfMf%2FWa6lAhwesHd8Vq%2F4c%2BVSvivwm7ZUTvch1TiJ7M9zBszRhUGyP9XOu2UTwdfkj6h0hJrud7HKtBdiOEU68JqgM1wbuh5ftXxTguAwqUHmbqR6twBGtEaxvKdACklGo8goAXnr1rq1LUEkV8k%2Bs4NIZUFLWPgNEQ9b6TXZkAyTImCSMj6nniE%2BPhcfJDo%2Fn4WcU3FEMzA%2B6MdmNpBgCE2uH9lWOJrJsTYztrH4MyyL2NspZkBQHW7QwjpKHvwY6pgHxHEZTuUtNavDHjGGYlSBiRcZe0oAqDmNSVGFKeIGKPPtyChw9UcxAhKfU%2BcpbJ2Ku7vlKxPwEhofm5%2BJbU5Ud0nj28ELP4P3hmCys%2BVcd97mHu%2BxFNA5%2FvHbErewdFWn7TkfhmrV0WGXVRKSVp7xNq%2BqsQtUOncA1Rv%2FlundM1l876igsKPUi4YB3zYPgKM4LWMC45WZER6B5AKtWt8zKl8pLeoFz&X-Amz-Signature=71b48fc7eb44935a222b2c7ff6eb71e9675a2b7b6010b71e19afad01fd9805ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIKFMLI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxVQXvHBvtLsp94%2Fc0S2WtDQZEq07yJdlapPBc%2FcIUVAiBUYmJkuxkx1v8vKhNtMUwi1Sg8t4du6GKm9%2FERyNG2UyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLy9evbA1BYHFt9TKtwD6aVyI2aNLTlYlQE3iGIR4JdfezqxJ2Tg2C1ypC1vMrY8B1P%2BXZaIBgOscCTUTRWcf0QKan0JkqiV4kYYpKjT1J9R0ANJQ4MgjkT1CAvb9seqswhG4IZ3sYG9lSt1ONebaJKaXrZeT2jSsJWiLf2VGwb4eeCK%2FCe95Fz6CFQxlZKr1Tl8srOopaSBLJ08HtPSbtuMS9uM60RwqYdGxuFqLXGebaqMM5525WZ7x83c1UJOlIK5ltC3iPkm4VBbok9lCZGnpYfG%2F80KxQbgLm6eSsoNVzLKi7vkopMqB%2Fzji6Y2bou8b8jvEqlF2oe%2F5LB2uRAgrcdrQkU9xGHIauH8KF8Z9aK50QEGV2HmH24I58M6KeOBI2pa4vxf%2FH2FKvYmhFUfMf%2FWa6lAhwesHd8Vq%2F4c%2BVSvivwm7ZUTvch1TiJ7M9zBszRhUGyP9XOu2UTwdfkj6h0hJrud7HKtBdiOEU68JqgM1wbuh5ftXxTguAwqUHmbqR6twBGtEaxvKdACklGo8goAXnr1rq1LUEkV8k%2Bs4NIZUFLWPgNEQ9b6TXZkAyTImCSMj6nniE%2BPhcfJDo%2Fn4WcU3FEMzA%2B6MdmNpBgCE2uH9lWOJrJsTYztrH4MyyL2NspZkBQHW7QwjpKHvwY6pgHxHEZTuUtNavDHjGGYlSBiRcZe0oAqDmNSVGFKeIGKPPtyChw9UcxAhKfU%2BcpbJ2Ku7vlKxPwEhofm5%2BJbU5Ud0nj28ELP4P3hmCys%2BVcd97mHu%2BxFNA5%2FvHbErewdFWn7TkfhmrV0WGXVRKSVp7xNq%2BqsQtUOncA1Rv%2FlundM1l876igsKPUi4YB3zYPgKM4LWMC45WZER6B5AKtWt8zKl8pLeoFz&X-Amz-Signature=1da3e9e559317d686303dae517839231b25e784a411850aff51f954c4acc987c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIKFMLI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxVQXvHBvtLsp94%2Fc0S2WtDQZEq07yJdlapPBc%2FcIUVAiBUYmJkuxkx1v8vKhNtMUwi1Sg8t4du6GKm9%2FERyNG2UyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLy9evbA1BYHFt9TKtwD6aVyI2aNLTlYlQE3iGIR4JdfezqxJ2Tg2C1ypC1vMrY8B1P%2BXZaIBgOscCTUTRWcf0QKan0JkqiV4kYYpKjT1J9R0ANJQ4MgjkT1CAvb9seqswhG4IZ3sYG9lSt1ONebaJKaXrZeT2jSsJWiLf2VGwb4eeCK%2FCe95Fz6CFQxlZKr1Tl8srOopaSBLJ08HtPSbtuMS9uM60RwqYdGxuFqLXGebaqMM5525WZ7x83c1UJOlIK5ltC3iPkm4VBbok9lCZGnpYfG%2F80KxQbgLm6eSsoNVzLKi7vkopMqB%2Fzji6Y2bou8b8jvEqlF2oe%2F5LB2uRAgrcdrQkU9xGHIauH8KF8Z9aK50QEGV2HmH24I58M6KeOBI2pa4vxf%2FH2FKvYmhFUfMf%2FWa6lAhwesHd8Vq%2F4c%2BVSvivwm7ZUTvch1TiJ7M9zBszRhUGyP9XOu2UTwdfkj6h0hJrud7HKtBdiOEU68JqgM1wbuh5ftXxTguAwqUHmbqR6twBGtEaxvKdACklGo8goAXnr1rq1LUEkV8k%2Bs4NIZUFLWPgNEQ9b6TXZkAyTImCSMj6nniE%2BPhcfJDo%2Fn4WcU3FEMzA%2B6MdmNpBgCE2uH9lWOJrJsTYztrH4MyyL2NspZkBQHW7QwjpKHvwY6pgHxHEZTuUtNavDHjGGYlSBiRcZe0oAqDmNSVGFKeIGKPPtyChw9UcxAhKfU%2BcpbJ2Ku7vlKxPwEhofm5%2BJbU5Ud0nj28ELP4P3hmCys%2BVcd97mHu%2BxFNA5%2FvHbErewdFWn7TkfhmrV0WGXVRKSVp7xNq%2BqsQtUOncA1Rv%2FlundM1l876igsKPUi4YB3zYPgKM4LWMC45WZER6B5AKtWt8zKl8pLeoFz&X-Amz-Signature=a26b47361ad6bc3ed5e980c44a0379a2991287ef931bb2a2901037342397f23b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIKFMLI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxVQXvHBvtLsp94%2Fc0S2WtDQZEq07yJdlapPBc%2FcIUVAiBUYmJkuxkx1v8vKhNtMUwi1Sg8t4du6GKm9%2FERyNG2UyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLy9evbA1BYHFt9TKtwD6aVyI2aNLTlYlQE3iGIR4JdfezqxJ2Tg2C1ypC1vMrY8B1P%2BXZaIBgOscCTUTRWcf0QKan0JkqiV4kYYpKjT1J9R0ANJQ4MgjkT1CAvb9seqswhG4IZ3sYG9lSt1ONebaJKaXrZeT2jSsJWiLf2VGwb4eeCK%2FCe95Fz6CFQxlZKr1Tl8srOopaSBLJ08HtPSbtuMS9uM60RwqYdGxuFqLXGebaqMM5525WZ7x83c1UJOlIK5ltC3iPkm4VBbok9lCZGnpYfG%2F80KxQbgLm6eSsoNVzLKi7vkopMqB%2Fzji6Y2bou8b8jvEqlF2oe%2F5LB2uRAgrcdrQkU9xGHIauH8KF8Z9aK50QEGV2HmH24I58M6KeOBI2pa4vxf%2FH2FKvYmhFUfMf%2FWa6lAhwesHd8Vq%2F4c%2BVSvivwm7ZUTvch1TiJ7M9zBszRhUGyP9XOu2UTwdfkj6h0hJrud7HKtBdiOEU68JqgM1wbuh5ftXxTguAwqUHmbqR6twBGtEaxvKdACklGo8goAXnr1rq1LUEkV8k%2Bs4NIZUFLWPgNEQ9b6TXZkAyTImCSMj6nniE%2BPhcfJDo%2Fn4WcU3FEMzA%2B6MdmNpBgCE2uH9lWOJrJsTYztrH4MyyL2NspZkBQHW7QwjpKHvwY6pgHxHEZTuUtNavDHjGGYlSBiRcZe0oAqDmNSVGFKeIGKPPtyChw9UcxAhKfU%2BcpbJ2Ku7vlKxPwEhofm5%2BJbU5Ud0nj28ELP4P3hmCys%2BVcd97mHu%2BxFNA5%2FvHbErewdFWn7TkfhmrV0WGXVRKSVp7xNq%2BqsQtUOncA1Rv%2FlundM1l876igsKPUi4YB3zYPgKM4LWMC45WZER6B5AKtWt8zKl8pLeoFz&X-Amz-Signature=2fd98b16dee97df9293485acdfe40688134beabc57c090548bb0472480705303&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIKFMLI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxVQXvHBvtLsp94%2Fc0S2WtDQZEq07yJdlapPBc%2FcIUVAiBUYmJkuxkx1v8vKhNtMUwi1Sg8t4du6GKm9%2FERyNG2UyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLy9evbA1BYHFt9TKtwD6aVyI2aNLTlYlQE3iGIR4JdfezqxJ2Tg2C1ypC1vMrY8B1P%2BXZaIBgOscCTUTRWcf0QKan0JkqiV4kYYpKjT1J9R0ANJQ4MgjkT1CAvb9seqswhG4IZ3sYG9lSt1ONebaJKaXrZeT2jSsJWiLf2VGwb4eeCK%2FCe95Fz6CFQxlZKr1Tl8srOopaSBLJ08HtPSbtuMS9uM60RwqYdGxuFqLXGebaqMM5525WZ7x83c1UJOlIK5ltC3iPkm4VBbok9lCZGnpYfG%2F80KxQbgLm6eSsoNVzLKi7vkopMqB%2Fzji6Y2bou8b8jvEqlF2oe%2F5LB2uRAgrcdrQkU9xGHIauH8KF8Z9aK50QEGV2HmH24I58M6KeOBI2pa4vxf%2FH2FKvYmhFUfMf%2FWa6lAhwesHd8Vq%2F4c%2BVSvivwm7ZUTvch1TiJ7M9zBszRhUGyP9XOu2UTwdfkj6h0hJrud7HKtBdiOEU68JqgM1wbuh5ftXxTguAwqUHmbqR6twBGtEaxvKdACklGo8goAXnr1rq1LUEkV8k%2Bs4NIZUFLWPgNEQ9b6TXZkAyTImCSMj6nniE%2BPhcfJDo%2Fn4WcU3FEMzA%2B6MdmNpBgCE2uH9lWOJrJsTYztrH4MyyL2NspZkBQHW7QwjpKHvwY6pgHxHEZTuUtNavDHjGGYlSBiRcZe0oAqDmNSVGFKeIGKPPtyChw9UcxAhKfU%2BcpbJ2Ku7vlKxPwEhofm5%2BJbU5Ud0nj28ELP4P3hmCys%2BVcd97mHu%2BxFNA5%2FvHbErewdFWn7TkfhmrV0WGXVRKSVp7xNq%2BqsQtUOncA1Rv%2FlundM1l876igsKPUi4YB3zYPgKM4LWMC45WZER6B5AKtWt8zKl8pLeoFz&X-Amz-Signature=71581dae52cf8d5c08a390e641579243c619ef7529ed39b871f6f23632c108f5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIKFMLI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxVQXvHBvtLsp94%2Fc0S2WtDQZEq07yJdlapPBc%2FcIUVAiBUYmJkuxkx1v8vKhNtMUwi1Sg8t4du6GKm9%2FERyNG2UyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLy9evbA1BYHFt9TKtwD6aVyI2aNLTlYlQE3iGIR4JdfezqxJ2Tg2C1ypC1vMrY8B1P%2BXZaIBgOscCTUTRWcf0QKan0JkqiV4kYYpKjT1J9R0ANJQ4MgjkT1CAvb9seqswhG4IZ3sYG9lSt1ONebaJKaXrZeT2jSsJWiLf2VGwb4eeCK%2FCe95Fz6CFQxlZKr1Tl8srOopaSBLJ08HtPSbtuMS9uM60RwqYdGxuFqLXGebaqMM5525WZ7x83c1UJOlIK5ltC3iPkm4VBbok9lCZGnpYfG%2F80KxQbgLm6eSsoNVzLKi7vkopMqB%2Fzji6Y2bou8b8jvEqlF2oe%2F5LB2uRAgrcdrQkU9xGHIauH8KF8Z9aK50QEGV2HmH24I58M6KeOBI2pa4vxf%2FH2FKvYmhFUfMf%2FWa6lAhwesHd8Vq%2F4c%2BVSvivwm7ZUTvch1TiJ7M9zBszRhUGyP9XOu2UTwdfkj6h0hJrud7HKtBdiOEU68JqgM1wbuh5ftXxTguAwqUHmbqR6twBGtEaxvKdACklGo8goAXnr1rq1LUEkV8k%2Bs4NIZUFLWPgNEQ9b6TXZkAyTImCSMj6nniE%2BPhcfJDo%2Fn4WcU3FEMzA%2B6MdmNpBgCE2uH9lWOJrJsTYztrH4MyyL2NspZkBQHW7QwjpKHvwY6pgHxHEZTuUtNavDHjGGYlSBiRcZe0oAqDmNSVGFKeIGKPPtyChw9UcxAhKfU%2BcpbJ2Ku7vlKxPwEhofm5%2BJbU5Ud0nj28ELP4P3hmCys%2BVcd97mHu%2BxFNA5%2FvHbErewdFWn7TkfhmrV0WGXVRKSVp7xNq%2BqsQtUOncA1Rv%2FlundM1l876igsKPUi4YB3zYPgKM4LWMC45WZER6B5AKtWt8zKl8pLeoFz&X-Amz-Signature=d11ed9a0f491b46c2ee7f191e4e996e4431a0d2d5752fd5ea442e30786d7d4d4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIKFMLI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxVQXvHBvtLsp94%2Fc0S2WtDQZEq07yJdlapPBc%2FcIUVAiBUYmJkuxkx1v8vKhNtMUwi1Sg8t4du6GKm9%2FERyNG2UyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLy9evbA1BYHFt9TKtwD6aVyI2aNLTlYlQE3iGIR4JdfezqxJ2Tg2C1ypC1vMrY8B1P%2BXZaIBgOscCTUTRWcf0QKan0JkqiV4kYYpKjT1J9R0ANJQ4MgjkT1CAvb9seqswhG4IZ3sYG9lSt1ONebaJKaXrZeT2jSsJWiLf2VGwb4eeCK%2FCe95Fz6CFQxlZKr1Tl8srOopaSBLJ08HtPSbtuMS9uM60RwqYdGxuFqLXGebaqMM5525WZ7x83c1UJOlIK5ltC3iPkm4VBbok9lCZGnpYfG%2F80KxQbgLm6eSsoNVzLKi7vkopMqB%2Fzji6Y2bou8b8jvEqlF2oe%2F5LB2uRAgrcdrQkU9xGHIauH8KF8Z9aK50QEGV2HmH24I58M6KeOBI2pa4vxf%2FH2FKvYmhFUfMf%2FWa6lAhwesHd8Vq%2F4c%2BVSvivwm7ZUTvch1TiJ7M9zBszRhUGyP9XOu2UTwdfkj6h0hJrud7HKtBdiOEU68JqgM1wbuh5ftXxTguAwqUHmbqR6twBGtEaxvKdACklGo8goAXnr1rq1LUEkV8k%2Bs4NIZUFLWPgNEQ9b6TXZkAyTImCSMj6nniE%2BPhcfJDo%2Fn4WcU3FEMzA%2B6MdmNpBgCE2uH9lWOJrJsTYztrH4MyyL2NspZkBQHW7QwjpKHvwY6pgHxHEZTuUtNavDHjGGYlSBiRcZe0oAqDmNSVGFKeIGKPPtyChw9UcxAhKfU%2BcpbJ2Ku7vlKxPwEhofm5%2BJbU5Ud0nj28ELP4P3hmCys%2BVcd97mHu%2BxFNA5%2FvHbErewdFWn7TkfhmrV0WGXVRKSVp7xNq%2BqsQtUOncA1Rv%2FlundM1l876igsKPUi4YB3zYPgKM4LWMC45WZER6B5AKtWt8zKl8pLeoFz&X-Amz-Signature=7c1e87342f084ebdd4276c05fd99e5cbc859f3a3bba2e6c961327b57378ee842&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

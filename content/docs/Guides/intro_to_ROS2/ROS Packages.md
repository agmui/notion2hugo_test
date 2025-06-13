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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LDPCJG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDqt1kTVMdvFQDhjv%2F8awLv7qMGM1aJ5otqu9C1L%2FZsmAIhANVdSOhHcbIVw7slYOnT%2FK3K60tOFA7FzbQOrsGgml9mKv8DCBAQABoMNjM3NDIzMTgzODA1IgyefdtoNR0VItVUIWoq3ANf0SXudX6WprN94IDLOEgMA5vw6L7Cnyzt5O50RBWqoNYivoQtAqvjR4aacVfFs2N%2FoE26nLKwg0H%2FtT0h6qVrJna%2Bdsdujoeslut19hnHUp62cFfeRpy9c4jmOF7FH849GUKFRreAMvb%2F%2B8WDIp0MHJrKTtZeNY5w07BKqD2v7Njrqvzbv6ftiVPrCbj9MGd5iFEI7OvWQVO4aslhxa1OwrhOnGtLf4lRj1lkTkAyb0wA3YmkLTIxEJqzjjR9DXHi4alK%2Bd%2BhBAXwh2YX2IxAQgbUUUVctrBO4r4k7Va3tRIEB%2BUDwmFeWgrwvOw0iguBNUFMoXlnMlbpqIa7BL6vJk3WT9liDlpkQ%2FA0kNw5iXeh6yVqVmEaC41mjtf2K3ZlZOu%2F3ZKtFEnMWyYluZhrFioTVFh9%2F%2F6v5Bww%2B%2FMcGJSFSadvbaE2F6x%2BebFgmwBy2ipiHyl2%2B37lWCh%2B%2F%2FBuO7pi17AY%2F2WEDCVvHCmK1DfHq9kbqWAbA6YBTvyoD3yvq66bVD4oMQI0yJQS%2BFOGDAj8YUnpxsgBmXN3Z6YJzJesom1Xkr1mhO%2FTBTScCRcZVGYtSREKaPI%2BgiATpA0pUmFLl8dCJahBuZuzcvrLede4fbAiB19il%2BgVfDD%2FnK%2FCBjqkAfoHKI4FZoYp0ku%2BV81DEv6jTIeRvPVe%2BHAT1gnmcfr4dVuF9oO2CNhYrOu3zdPJV7m1ot3lWT45cyQ3FGUCkhn2YDPW5rI80Ot9yWOBYZE5i9tl3XbqgfU4cr9MVa%2Fo1yI%2FDSoTpnHpn2Jv2IozNIz0ottwPXOhEXqLAHQnd03iKIl1OS7dpw5J5orCK2l1as7LN6NnyrOGHicCKBbqBqdXpSz%2F&X-Amz-Signature=b691467a6a678faa96c6ba3ed0eb6003b417774656fa2eb4532cd1e0e8351873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LDPCJG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDqt1kTVMdvFQDhjv%2F8awLv7qMGM1aJ5otqu9C1L%2FZsmAIhANVdSOhHcbIVw7slYOnT%2FK3K60tOFA7FzbQOrsGgml9mKv8DCBAQABoMNjM3NDIzMTgzODA1IgyefdtoNR0VItVUIWoq3ANf0SXudX6WprN94IDLOEgMA5vw6L7Cnyzt5O50RBWqoNYivoQtAqvjR4aacVfFs2N%2FoE26nLKwg0H%2FtT0h6qVrJna%2Bdsdujoeslut19hnHUp62cFfeRpy9c4jmOF7FH849GUKFRreAMvb%2F%2B8WDIp0MHJrKTtZeNY5w07BKqD2v7Njrqvzbv6ftiVPrCbj9MGd5iFEI7OvWQVO4aslhxa1OwrhOnGtLf4lRj1lkTkAyb0wA3YmkLTIxEJqzjjR9DXHi4alK%2Bd%2BhBAXwh2YX2IxAQgbUUUVctrBO4r4k7Va3tRIEB%2BUDwmFeWgrwvOw0iguBNUFMoXlnMlbpqIa7BL6vJk3WT9liDlpkQ%2FA0kNw5iXeh6yVqVmEaC41mjtf2K3ZlZOu%2F3ZKtFEnMWyYluZhrFioTVFh9%2F%2F6v5Bww%2B%2FMcGJSFSadvbaE2F6x%2BebFgmwBy2ipiHyl2%2B37lWCh%2B%2F%2FBuO7pi17AY%2F2WEDCVvHCmK1DfHq9kbqWAbA6YBTvyoD3yvq66bVD4oMQI0yJQS%2BFOGDAj8YUnpxsgBmXN3Z6YJzJesom1Xkr1mhO%2FTBTScCRcZVGYtSREKaPI%2BgiATpA0pUmFLl8dCJahBuZuzcvrLede4fbAiB19il%2BgVfDD%2FnK%2FCBjqkAfoHKI4FZoYp0ku%2BV81DEv6jTIeRvPVe%2BHAT1gnmcfr4dVuF9oO2CNhYrOu3zdPJV7m1ot3lWT45cyQ3FGUCkhn2YDPW5rI80Ot9yWOBYZE5i9tl3XbqgfU4cr9MVa%2Fo1yI%2FDSoTpnHpn2Jv2IozNIz0ottwPXOhEXqLAHQnd03iKIl1OS7dpw5J5orCK2l1as7LN6NnyrOGHicCKBbqBqdXpSz%2F&X-Amz-Signature=bc7edc4ae60de904254a3041fb1cbb8a31ba8039939fd895c02fb83d7b49802d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LDPCJG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDqt1kTVMdvFQDhjv%2F8awLv7qMGM1aJ5otqu9C1L%2FZsmAIhANVdSOhHcbIVw7slYOnT%2FK3K60tOFA7FzbQOrsGgml9mKv8DCBAQABoMNjM3NDIzMTgzODA1IgyefdtoNR0VItVUIWoq3ANf0SXudX6WprN94IDLOEgMA5vw6L7Cnyzt5O50RBWqoNYivoQtAqvjR4aacVfFs2N%2FoE26nLKwg0H%2FtT0h6qVrJna%2Bdsdujoeslut19hnHUp62cFfeRpy9c4jmOF7FH849GUKFRreAMvb%2F%2B8WDIp0MHJrKTtZeNY5w07BKqD2v7Njrqvzbv6ftiVPrCbj9MGd5iFEI7OvWQVO4aslhxa1OwrhOnGtLf4lRj1lkTkAyb0wA3YmkLTIxEJqzjjR9DXHi4alK%2Bd%2BhBAXwh2YX2IxAQgbUUUVctrBO4r4k7Va3tRIEB%2BUDwmFeWgrwvOw0iguBNUFMoXlnMlbpqIa7BL6vJk3WT9liDlpkQ%2FA0kNw5iXeh6yVqVmEaC41mjtf2K3ZlZOu%2F3ZKtFEnMWyYluZhrFioTVFh9%2F%2F6v5Bww%2B%2FMcGJSFSadvbaE2F6x%2BebFgmwBy2ipiHyl2%2B37lWCh%2B%2F%2FBuO7pi17AY%2F2WEDCVvHCmK1DfHq9kbqWAbA6YBTvyoD3yvq66bVD4oMQI0yJQS%2BFOGDAj8YUnpxsgBmXN3Z6YJzJesom1Xkr1mhO%2FTBTScCRcZVGYtSREKaPI%2BgiATpA0pUmFLl8dCJahBuZuzcvrLede4fbAiB19il%2BgVfDD%2FnK%2FCBjqkAfoHKI4FZoYp0ku%2BV81DEv6jTIeRvPVe%2BHAT1gnmcfr4dVuF9oO2CNhYrOu3zdPJV7m1ot3lWT45cyQ3FGUCkhn2YDPW5rI80Ot9yWOBYZE5i9tl3XbqgfU4cr9MVa%2Fo1yI%2FDSoTpnHpn2Jv2IozNIz0ottwPXOhEXqLAHQnd03iKIl1OS7dpw5J5orCK2l1as7LN6NnyrOGHicCKBbqBqdXpSz%2F&X-Amz-Signature=56bc2a8aa4ad3bae2be3ddf888965789c14ddc297528d91c17f5ad03de62e288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LDPCJG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDqt1kTVMdvFQDhjv%2F8awLv7qMGM1aJ5otqu9C1L%2FZsmAIhANVdSOhHcbIVw7slYOnT%2FK3K60tOFA7FzbQOrsGgml9mKv8DCBAQABoMNjM3NDIzMTgzODA1IgyefdtoNR0VItVUIWoq3ANf0SXudX6WprN94IDLOEgMA5vw6L7Cnyzt5O50RBWqoNYivoQtAqvjR4aacVfFs2N%2FoE26nLKwg0H%2FtT0h6qVrJna%2Bdsdujoeslut19hnHUp62cFfeRpy9c4jmOF7FH849GUKFRreAMvb%2F%2B8WDIp0MHJrKTtZeNY5w07BKqD2v7Njrqvzbv6ftiVPrCbj9MGd5iFEI7OvWQVO4aslhxa1OwrhOnGtLf4lRj1lkTkAyb0wA3YmkLTIxEJqzjjR9DXHi4alK%2Bd%2BhBAXwh2YX2IxAQgbUUUVctrBO4r4k7Va3tRIEB%2BUDwmFeWgrwvOw0iguBNUFMoXlnMlbpqIa7BL6vJk3WT9liDlpkQ%2FA0kNw5iXeh6yVqVmEaC41mjtf2K3ZlZOu%2F3ZKtFEnMWyYluZhrFioTVFh9%2F%2F6v5Bww%2B%2FMcGJSFSadvbaE2F6x%2BebFgmwBy2ipiHyl2%2B37lWCh%2B%2F%2FBuO7pi17AY%2F2WEDCVvHCmK1DfHq9kbqWAbA6YBTvyoD3yvq66bVD4oMQI0yJQS%2BFOGDAj8YUnpxsgBmXN3Z6YJzJesom1Xkr1mhO%2FTBTScCRcZVGYtSREKaPI%2BgiATpA0pUmFLl8dCJahBuZuzcvrLede4fbAiB19il%2BgVfDD%2FnK%2FCBjqkAfoHKI4FZoYp0ku%2BV81DEv6jTIeRvPVe%2BHAT1gnmcfr4dVuF9oO2CNhYrOu3zdPJV7m1ot3lWT45cyQ3FGUCkhn2YDPW5rI80Ot9yWOBYZE5i9tl3XbqgfU4cr9MVa%2Fo1yI%2FDSoTpnHpn2Jv2IozNIz0ottwPXOhEXqLAHQnd03iKIl1OS7dpw5J5orCK2l1as7LN6NnyrOGHicCKBbqBqdXpSz%2F&X-Amz-Signature=5c22dac05fb89b90c950cc82629d7165ec16aabb120f416c21667af29e14d50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LDPCJG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDqt1kTVMdvFQDhjv%2F8awLv7qMGM1aJ5otqu9C1L%2FZsmAIhANVdSOhHcbIVw7slYOnT%2FK3K60tOFA7FzbQOrsGgml9mKv8DCBAQABoMNjM3NDIzMTgzODA1IgyefdtoNR0VItVUIWoq3ANf0SXudX6WprN94IDLOEgMA5vw6L7Cnyzt5O50RBWqoNYivoQtAqvjR4aacVfFs2N%2FoE26nLKwg0H%2FtT0h6qVrJna%2Bdsdujoeslut19hnHUp62cFfeRpy9c4jmOF7FH849GUKFRreAMvb%2F%2B8WDIp0MHJrKTtZeNY5w07BKqD2v7Njrqvzbv6ftiVPrCbj9MGd5iFEI7OvWQVO4aslhxa1OwrhOnGtLf4lRj1lkTkAyb0wA3YmkLTIxEJqzjjR9DXHi4alK%2Bd%2BhBAXwh2YX2IxAQgbUUUVctrBO4r4k7Va3tRIEB%2BUDwmFeWgrwvOw0iguBNUFMoXlnMlbpqIa7BL6vJk3WT9liDlpkQ%2FA0kNw5iXeh6yVqVmEaC41mjtf2K3ZlZOu%2F3ZKtFEnMWyYluZhrFioTVFh9%2F%2F6v5Bww%2B%2FMcGJSFSadvbaE2F6x%2BebFgmwBy2ipiHyl2%2B37lWCh%2B%2F%2FBuO7pi17AY%2F2WEDCVvHCmK1DfHq9kbqWAbA6YBTvyoD3yvq66bVD4oMQI0yJQS%2BFOGDAj8YUnpxsgBmXN3Z6YJzJesom1Xkr1mhO%2FTBTScCRcZVGYtSREKaPI%2BgiATpA0pUmFLl8dCJahBuZuzcvrLede4fbAiB19il%2BgVfDD%2FnK%2FCBjqkAfoHKI4FZoYp0ku%2BV81DEv6jTIeRvPVe%2BHAT1gnmcfr4dVuF9oO2CNhYrOu3zdPJV7m1ot3lWT45cyQ3FGUCkhn2YDPW5rI80Ot9yWOBYZE5i9tl3XbqgfU4cr9MVa%2Fo1yI%2FDSoTpnHpn2Jv2IozNIz0ottwPXOhEXqLAHQnd03iKIl1OS7dpw5J5orCK2l1as7LN6NnyrOGHicCKBbqBqdXpSz%2F&X-Amz-Signature=0a3125454c22be5956843bf81fcb571ab148db0624aded574168ebec5aa81fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LDPCJG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDqt1kTVMdvFQDhjv%2F8awLv7qMGM1aJ5otqu9C1L%2FZsmAIhANVdSOhHcbIVw7slYOnT%2FK3K60tOFA7FzbQOrsGgml9mKv8DCBAQABoMNjM3NDIzMTgzODA1IgyefdtoNR0VItVUIWoq3ANf0SXudX6WprN94IDLOEgMA5vw6L7Cnyzt5O50RBWqoNYivoQtAqvjR4aacVfFs2N%2FoE26nLKwg0H%2FtT0h6qVrJna%2Bdsdujoeslut19hnHUp62cFfeRpy9c4jmOF7FH849GUKFRreAMvb%2F%2B8WDIp0MHJrKTtZeNY5w07BKqD2v7Njrqvzbv6ftiVPrCbj9MGd5iFEI7OvWQVO4aslhxa1OwrhOnGtLf4lRj1lkTkAyb0wA3YmkLTIxEJqzjjR9DXHi4alK%2Bd%2BhBAXwh2YX2IxAQgbUUUVctrBO4r4k7Va3tRIEB%2BUDwmFeWgrwvOw0iguBNUFMoXlnMlbpqIa7BL6vJk3WT9liDlpkQ%2FA0kNw5iXeh6yVqVmEaC41mjtf2K3ZlZOu%2F3ZKtFEnMWyYluZhrFioTVFh9%2F%2F6v5Bww%2B%2FMcGJSFSadvbaE2F6x%2BebFgmwBy2ipiHyl2%2B37lWCh%2B%2F%2FBuO7pi17AY%2F2WEDCVvHCmK1DfHq9kbqWAbA6YBTvyoD3yvq66bVD4oMQI0yJQS%2BFOGDAj8YUnpxsgBmXN3Z6YJzJesom1Xkr1mhO%2FTBTScCRcZVGYtSREKaPI%2BgiATpA0pUmFLl8dCJahBuZuzcvrLede4fbAiB19il%2BgVfDD%2FnK%2FCBjqkAfoHKI4FZoYp0ku%2BV81DEv6jTIeRvPVe%2BHAT1gnmcfr4dVuF9oO2CNhYrOu3zdPJV7m1ot3lWT45cyQ3FGUCkhn2YDPW5rI80Ot9yWOBYZE5i9tl3XbqgfU4cr9MVa%2Fo1yI%2FDSoTpnHpn2Jv2IozNIz0ottwPXOhEXqLAHQnd03iKIl1OS7dpw5J5orCK2l1as7LN6NnyrOGHicCKBbqBqdXpSz%2F&X-Amz-Signature=58a45b55f1a7199eca097095406d13cfadd34ab8f21edc62428bf42f387220ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LDPCJG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDqt1kTVMdvFQDhjv%2F8awLv7qMGM1aJ5otqu9C1L%2FZsmAIhANVdSOhHcbIVw7slYOnT%2FK3K60tOFA7FzbQOrsGgml9mKv8DCBAQABoMNjM3NDIzMTgzODA1IgyefdtoNR0VItVUIWoq3ANf0SXudX6WprN94IDLOEgMA5vw6L7Cnyzt5O50RBWqoNYivoQtAqvjR4aacVfFs2N%2FoE26nLKwg0H%2FtT0h6qVrJna%2Bdsdujoeslut19hnHUp62cFfeRpy9c4jmOF7FH849GUKFRreAMvb%2F%2B8WDIp0MHJrKTtZeNY5w07BKqD2v7Njrqvzbv6ftiVPrCbj9MGd5iFEI7OvWQVO4aslhxa1OwrhOnGtLf4lRj1lkTkAyb0wA3YmkLTIxEJqzjjR9DXHi4alK%2Bd%2BhBAXwh2YX2IxAQgbUUUVctrBO4r4k7Va3tRIEB%2BUDwmFeWgrwvOw0iguBNUFMoXlnMlbpqIa7BL6vJk3WT9liDlpkQ%2FA0kNw5iXeh6yVqVmEaC41mjtf2K3ZlZOu%2F3ZKtFEnMWyYluZhrFioTVFh9%2F%2F6v5Bww%2B%2FMcGJSFSadvbaE2F6x%2BebFgmwBy2ipiHyl2%2B37lWCh%2B%2F%2FBuO7pi17AY%2F2WEDCVvHCmK1DfHq9kbqWAbA6YBTvyoD3yvq66bVD4oMQI0yJQS%2BFOGDAj8YUnpxsgBmXN3Z6YJzJesom1Xkr1mhO%2FTBTScCRcZVGYtSREKaPI%2BgiATpA0pUmFLl8dCJahBuZuzcvrLede4fbAiB19il%2BgVfDD%2FnK%2FCBjqkAfoHKI4FZoYp0ku%2BV81DEv6jTIeRvPVe%2BHAT1gnmcfr4dVuF9oO2CNhYrOu3zdPJV7m1ot3lWT45cyQ3FGUCkhn2YDPW5rI80Ot9yWOBYZE5i9tl3XbqgfU4cr9MVa%2Fo1yI%2FDSoTpnHpn2Jv2IozNIz0ottwPXOhEXqLAHQnd03iKIl1OS7dpw5J5orCK2l1as7LN6NnyrOGHicCKBbqBqdXpSz%2F&X-Amz-Signature=0a70904dbde7cdd76558fcb0f4a3c28f9a5e90abf42ac33f6929a08b7a662d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

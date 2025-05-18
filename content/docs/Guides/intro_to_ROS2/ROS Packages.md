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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UIHW6W%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXNv2ZJ3zuG%2FOrgVw2Ec1Y9ThI6FqPNbVQkRqooxpIqAiAOPoBuutnYQmU%2F5WJvCdhd3EI2xwHKGdnxHqKT57AoPCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmzw4CfJLT33wYyLHKtwDvWoJdhuXgimipQVVjU8nvgniwd1XVJXBLV0kJ8U642co1W0sRQc86xm%2B0Prux4lnemYIDZZJhf2FgRQBErdKldLAuG%2F5FywAbC4i8VYcCbyuVOboPNY%2BY9lJd2UJWLhHNjwUXbnKqr7qjmWJPfaVmZCt8AObDshmdIakG%2BCArNMNwl7vmmFu%2BOz8z7oUxPrk9aucW8HSzRChdbwg2Z5gl2EYATUWQuWB%2FbpxlcYnKQlEcGawbV7WiRPvXstNZ8i1RQ9masgZpdv9jiW%2FjofYXJND6G7H7PU%2BC0p5zqoq83R8bwxbPEpfbam0zjiJBVKXAVCZHtJf5UdGLwDLE516C3Ssz8yRqGbieG76j%2BotVChXbOmSv4DsyBmWkCr9ZGloTFogvSj6DZikcja6m45Un9QynRnv3FAka0bvlRm0R56w18CgP8hM5RI0uZESdgl0aoMTkbq8OeghaCvCbVNtBxx0g9xebo%2FTpagQawXsRl2U2oR7Dn%2BXyTCpBEbH0I6PqJBJqBE133il2yHIAL6rW8Fo07dAZTMtW1DUGNNjyy7h7sgIjW%2B1WMY%2BQoh%2BzyvMljL9MXA2tiWVlpv%2FTrHz%2F3sFglaIaBzUrfuvvGujrm7JU6MUodohM%2BovqJ8wu5KnwQY6pgG%2BmL1FVj3Nil8aLtkT5AyCybzBUYAbsHg1evktC1co%2FqCtyZpDXHtR7vjBjdypZsIR7nroXykuPUGFyIzgNjGjG1G11XFUcS%2BnzQoQybA2SOdL9ydsp4aMLjnB8jUEIA8yBaE1gs9748msnXMwbw8qVpY4M1J35ySNSP8Yo%2FUdgHIPIiLB%2F7iX%2BNFNq%2F6HuKDasVGNHbtkgzkW%2FVMTGzVZpmjlGLWs&X-Amz-Signature=493df2525d06f62b3e81aaa80fb806c3b826eaf868c09321bcaef263c80a349d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UIHW6W%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXNv2ZJ3zuG%2FOrgVw2Ec1Y9ThI6FqPNbVQkRqooxpIqAiAOPoBuutnYQmU%2F5WJvCdhd3EI2xwHKGdnxHqKT57AoPCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmzw4CfJLT33wYyLHKtwDvWoJdhuXgimipQVVjU8nvgniwd1XVJXBLV0kJ8U642co1W0sRQc86xm%2B0Prux4lnemYIDZZJhf2FgRQBErdKldLAuG%2F5FywAbC4i8VYcCbyuVOboPNY%2BY9lJd2UJWLhHNjwUXbnKqr7qjmWJPfaVmZCt8AObDshmdIakG%2BCArNMNwl7vmmFu%2BOz8z7oUxPrk9aucW8HSzRChdbwg2Z5gl2EYATUWQuWB%2FbpxlcYnKQlEcGawbV7WiRPvXstNZ8i1RQ9masgZpdv9jiW%2FjofYXJND6G7H7PU%2BC0p5zqoq83R8bwxbPEpfbam0zjiJBVKXAVCZHtJf5UdGLwDLE516C3Ssz8yRqGbieG76j%2BotVChXbOmSv4DsyBmWkCr9ZGloTFogvSj6DZikcja6m45Un9QynRnv3FAka0bvlRm0R56w18CgP8hM5RI0uZESdgl0aoMTkbq8OeghaCvCbVNtBxx0g9xebo%2FTpagQawXsRl2U2oR7Dn%2BXyTCpBEbH0I6PqJBJqBE133il2yHIAL6rW8Fo07dAZTMtW1DUGNNjyy7h7sgIjW%2B1WMY%2BQoh%2BzyvMljL9MXA2tiWVlpv%2FTrHz%2F3sFglaIaBzUrfuvvGujrm7JU6MUodohM%2BovqJ8wu5KnwQY6pgG%2BmL1FVj3Nil8aLtkT5AyCybzBUYAbsHg1evktC1co%2FqCtyZpDXHtR7vjBjdypZsIR7nroXykuPUGFyIzgNjGjG1G11XFUcS%2BnzQoQybA2SOdL9ydsp4aMLjnB8jUEIA8yBaE1gs9748msnXMwbw8qVpY4M1J35ySNSP8Yo%2FUdgHIPIiLB%2F7iX%2BNFNq%2F6HuKDasVGNHbtkgzkW%2FVMTGzVZpmjlGLWs&X-Amz-Signature=e10d6fdd2d4b3c36776dd39faabc3f81760c55d2a0ef8268e9f95a5df331042b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UIHW6W%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXNv2ZJ3zuG%2FOrgVw2Ec1Y9ThI6FqPNbVQkRqooxpIqAiAOPoBuutnYQmU%2F5WJvCdhd3EI2xwHKGdnxHqKT57AoPCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmzw4CfJLT33wYyLHKtwDvWoJdhuXgimipQVVjU8nvgniwd1XVJXBLV0kJ8U642co1W0sRQc86xm%2B0Prux4lnemYIDZZJhf2FgRQBErdKldLAuG%2F5FywAbC4i8VYcCbyuVOboPNY%2BY9lJd2UJWLhHNjwUXbnKqr7qjmWJPfaVmZCt8AObDshmdIakG%2BCArNMNwl7vmmFu%2BOz8z7oUxPrk9aucW8HSzRChdbwg2Z5gl2EYATUWQuWB%2FbpxlcYnKQlEcGawbV7WiRPvXstNZ8i1RQ9masgZpdv9jiW%2FjofYXJND6G7H7PU%2BC0p5zqoq83R8bwxbPEpfbam0zjiJBVKXAVCZHtJf5UdGLwDLE516C3Ssz8yRqGbieG76j%2BotVChXbOmSv4DsyBmWkCr9ZGloTFogvSj6DZikcja6m45Un9QynRnv3FAka0bvlRm0R56w18CgP8hM5RI0uZESdgl0aoMTkbq8OeghaCvCbVNtBxx0g9xebo%2FTpagQawXsRl2U2oR7Dn%2BXyTCpBEbH0I6PqJBJqBE133il2yHIAL6rW8Fo07dAZTMtW1DUGNNjyy7h7sgIjW%2B1WMY%2BQoh%2BzyvMljL9MXA2tiWVlpv%2FTrHz%2F3sFglaIaBzUrfuvvGujrm7JU6MUodohM%2BovqJ8wu5KnwQY6pgG%2BmL1FVj3Nil8aLtkT5AyCybzBUYAbsHg1evktC1co%2FqCtyZpDXHtR7vjBjdypZsIR7nroXykuPUGFyIzgNjGjG1G11XFUcS%2BnzQoQybA2SOdL9ydsp4aMLjnB8jUEIA8yBaE1gs9748msnXMwbw8qVpY4M1J35ySNSP8Yo%2FUdgHIPIiLB%2F7iX%2BNFNq%2F6HuKDasVGNHbtkgzkW%2FVMTGzVZpmjlGLWs&X-Amz-Signature=1669b4984bfffd28fa02ca2d2e86149dfa54a3b00639ba57563a0b6c4998a13e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UIHW6W%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXNv2ZJ3zuG%2FOrgVw2Ec1Y9ThI6FqPNbVQkRqooxpIqAiAOPoBuutnYQmU%2F5WJvCdhd3EI2xwHKGdnxHqKT57AoPCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmzw4CfJLT33wYyLHKtwDvWoJdhuXgimipQVVjU8nvgniwd1XVJXBLV0kJ8U642co1W0sRQc86xm%2B0Prux4lnemYIDZZJhf2FgRQBErdKldLAuG%2F5FywAbC4i8VYcCbyuVOboPNY%2BY9lJd2UJWLhHNjwUXbnKqr7qjmWJPfaVmZCt8AObDshmdIakG%2BCArNMNwl7vmmFu%2BOz8z7oUxPrk9aucW8HSzRChdbwg2Z5gl2EYATUWQuWB%2FbpxlcYnKQlEcGawbV7WiRPvXstNZ8i1RQ9masgZpdv9jiW%2FjofYXJND6G7H7PU%2BC0p5zqoq83R8bwxbPEpfbam0zjiJBVKXAVCZHtJf5UdGLwDLE516C3Ssz8yRqGbieG76j%2BotVChXbOmSv4DsyBmWkCr9ZGloTFogvSj6DZikcja6m45Un9QynRnv3FAka0bvlRm0R56w18CgP8hM5RI0uZESdgl0aoMTkbq8OeghaCvCbVNtBxx0g9xebo%2FTpagQawXsRl2U2oR7Dn%2BXyTCpBEbH0I6PqJBJqBE133il2yHIAL6rW8Fo07dAZTMtW1DUGNNjyy7h7sgIjW%2B1WMY%2BQoh%2BzyvMljL9MXA2tiWVlpv%2FTrHz%2F3sFglaIaBzUrfuvvGujrm7JU6MUodohM%2BovqJ8wu5KnwQY6pgG%2BmL1FVj3Nil8aLtkT5AyCybzBUYAbsHg1evktC1co%2FqCtyZpDXHtR7vjBjdypZsIR7nroXykuPUGFyIzgNjGjG1G11XFUcS%2BnzQoQybA2SOdL9ydsp4aMLjnB8jUEIA8yBaE1gs9748msnXMwbw8qVpY4M1J35ySNSP8Yo%2FUdgHIPIiLB%2F7iX%2BNFNq%2F6HuKDasVGNHbtkgzkW%2FVMTGzVZpmjlGLWs&X-Amz-Signature=88ef6af29c8f1276566783a681f28dc2865ba853e6df13e131e956842c17497a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UIHW6W%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXNv2ZJ3zuG%2FOrgVw2Ec1Y9ThI6FqPNbVQkRqooxpIqAiAOPoBuutnYQmU%2F5WJvCdhd3EI2xwHKGdnxHqKT57AoPCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmzw4CfJLT33wYyLHKtwDvWoJdhuXgimipQVVjU8nvgniwd1XVJXBLV0kJ8U642co1W0sRQc86xm%2B0Prux4lnemYIDZZJhf2FgRQBErdKldLAuG%2F5FywAbC4i8VYcCbyuVOboPNY%2BY9lJd2UJWLhHNjwUXbnKqr7qjmWJPfaVmZCt8AObDshmdIakG%2BCArNMNwl7vmmFu%2BOz8z7oUxPrk9aucW8HSzRChdbwg2Z5gl2EYATUWQuWB%2FbpxlcYnKQlEcGawbV7WiRPvXstNZ8i1RQ9masgZpdv9jiW%2FjofYXJND6G7H7PU%2BC0p5zqoq83R8bwxbPEpfbam0zjiJBVKXAVCZHtJf5UdGLwDLE516C3Ssz8yRqGbieG76j%2BotVChXbOmSv4DsyBmWkCr9ZGloTFogvSj6DZikcja6m45Un9QynRnv3FAka0bvlRm0R56w18CgP8hM5RI0uZESdgl0aoMTkbq8OeghaCvCbVNtBxx0g9xebo%2FTpagQawXsRl2U2oR7Dn%2BXyTCpBEbH0I6PqJBJqBE133il2yHIAL6rW8Fo07dAZTMtW1DUGNNjyy7h7sgIjW%2B1WMY%2BQoh%2BzyvMljL9MXA2tiWVlpv%2FTrHz%2F3sFglaIaBzUrfuvvGujrm7JU6MUodohM%2BovqJ8wu5KnwQY6pgG%2BmL1FVj3Nil8aLtkT5AyCybzBUYAbsHg1evktC1co%2FqCtyZpDXHtR7vjBjdypZsIR7nroXykuPUGFyIzgNjGjG1G11XFUcS%2BnzQoQybA2SOdL9ydsp4aMLjnB8jUEIA8yBaE1gs9748msnXMwbw8qVpY4M1J35ySNSP8Yo%2FUdgHIPIiLB%2F7iX%2BNFNq%2F6HuKDasVGNHbtkgzkW%2FVMTGzVZpmjlGLWs&X-Amz-Signature=f29be9562bae97d52786eed0304ac51e506f610094823b1d4aad4aeb34f475a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UIHW6W%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXNv2ZJ3zuG%2FOrgVw2Ec1Y9ThI6FqPNbVQkRqooxpIqAiAOPoBuutnYQmU%2F5WJvCdhd3EI2xwHKGdnxHqKT57AoPCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmzw4CfJLT33wYyLHKtwDvWoJdhuXgimipQVVjU8nvgniwd1XVJXBLV0kJ8U642co1W0sRQc86xm%2B0Prux4lnemYIDZZJhf2FgRQBErdKldLAuG%2F5FywAbC4i8VYcCbyuVOboPNY%2BY9lJd2UJWLhHNjwUXbnKqr7qjmWJPfaVmZCt8AObDshmdIakG%2BCArNMNwl7vmmFu%2BOz8z7oUxPrk9aucW8HSzRChdbwg2Z5gl2EYATUWQuWB%2FbpxlcYnKQlEcGawbV7WiRPvXstNZ8i1RQ9masgZpdv9jiW%2FjofYXJND6G7H7PU%2BC0p5zqoq83R8bwxbPEpfbam0zjiJBVKXAVCZHtJf5UdGLwDLE516C3Ssz8yRqGbieG76j%2BotVChXbOmSv4DsyBmWkCr9ZGloTFogvSj6DZikcja6m45Un9QynRnv3FAka0bvlRm0R56w18CgP8hM5RI0uZESdgl0aoMTkbq8OeghaCvCbVNtBxx0g9xebo%2FTpagQawXsRl2U2oR7Dn%2BXyTCpBEbH0I6PqJBJqBE133il2yHIAL6rW8Fo07dAZTMtW1DUGNNjyy7h7sgIjW%2B1WMY%2BQoh%2BzyvMljL9MXA2tiWVlpv%2FTrHz%2F3sFglaIaBzUrfuvvGujrm7JU6MUodohM%2BovqJ8wu5KnwQY6pgG%2BmL1FVj3Nil8aLtkT5AyCybzBUYAbsHg1evktC1co%2FqCtyZpDXHtR7vjBjdypZsIR7nroXykuPUGFyIzgNjGjG1G11XFUcS%2BnzQoQybA2SOdL9ydsp4aMLjnB8jUEIA8yBaE1gs9748msnXMwbw8qVpY4M1J35ySNSP8Yo%2FUdgHIPIiLB%2F7iX%2BNFNq%2F6HuKDasVGNHbtkgzkW%2FVMTGzVZpmjlGLWs&X-Amz-Signature=12c95c73bb563de89c90aaedeca410749b2f55a79f0e698c28c042ef7bfc6d13&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UIHW6W%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXNv2ZJ3zuG%2FOrgVw2Ec1Y9ThI6FqPNbVQkRqooxpIqAiAOPoBuutnYQmU%2F5WJvCdhd3EI2xwHKGdnxHqKT57AoPCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmzw4CfJLT33wYyLHKtwDvWoJdhuXgimipQVVjU8nvgniwd1XVJXBLV0kJ8U642co1W0sRQc86xm%2B0Prux4lnemYIDZZJhf2FgRQBErdKldLAuG%2F5FywAbC4i8VYcCbyuVOboPNY%2BY9lJd2UJWLhHNjwUXbnKqr7qjmWJPfaVmZCt8AObDshmdIakG%2BCArNMNwl7vmmFu%2BOz8z7oUxPrk9aucW8HSzRChdbwg2Z5gl2EYATUWQuWB%2FbpxlcYnKQlEcGawbV7WiRPvXstNZ8i1RQ9masgZpdv9jiW%2FjofYXJND6G7H7PU%2BC0p5zqoq83R8bwxbPEpfbam0zjiJBVKXAVCZHtJf5UdGLwDLE516C3Ssz8yRqGbieG76j%2BotVChXbOmSv4DsyBmWkCr9ZGloTFogvSj6DZikcja6m45Un9QynRnv3FAka0bvlRm0R56w18CgP8hM5RI0uZESdgl0aoMTkbq8OeghaCvCbVNtBxx0g9xebo%2FTpagQawXsRl2U2oR7Dn%2BXyTCpBEbH0I6PqJBJqBE133il2yHIAL6rW8Fo07dAZTMtW1DUGNNjyy7h7sgIjW%2B1WMY%2BQoh%2BzyvMljL9MXA2tiWVlpv%2FTrHz%2F3sFglaIaBzUrfuvvGujrm7JU6MUodohM%2BovqJ8wu5KnwQY6pgG%2BmL1FVj3Nil8aLtkT5AyCybzBUYAbsHg1evktC1co%2FqCtyZpDXHtR7vjBjdypZsIR7nroXykuPUGFyIzgNjGjG1G11XFUcS%2BnzQoQybA2SOdL9ydsp4aMLjnB8jUEIA8yBaE1gs9748msnXMwbw8qVpY4M1J35ySNSP8Yo%2FUdgHIPIiLB%2F7iX%2BNFNq%2F6HuKDasVGNHbtkgzkW%2FVMTGzVZpmjlGLWs&X-Amz-Signature=344a4ff786a1b1f0f4158af6e5f702c5c67e182ed8ae69cec8f92fe33e86fc80&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

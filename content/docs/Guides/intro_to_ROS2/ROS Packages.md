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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AF3CRAD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8mwB7g6fyVgugAB8Dm70n64CzLPj8lSLh72%2FVx2lCwIhAMiAZXDG3eNBwvoMzFOwMPyPGTSKpDXAjtfqoT0JDaUOKv8DCB8QABoMNjM3NDIzMTgzODA1IgxzCY1niKQYWmn1a6Mq3APc4ipso9GUbsX2PEJEjNzpK5TfuY7k2xRA8KigY%2FC9Vevs1xRHCUQDO1GlsTaOejrA7tn%2F0Du%2B9nZL3%2FZjf6ZgJ5heP3GE3JomRRLp8M2MKPEkbJnl8oOArQNuCFiqcwHaOmWL3%2BuMo4JXjs7K3PZK2E5AG5xSC4E8vt2IvBn3dM4W1D0Yvg3R62itHaIKqrGfI1LRbhQwPSwMU0vd%2B1i0pINFg3bDA55mI%2B2TFz%2FYC%2F6FcdaLuEuDlyJ77h6xyG7tZBzLkhZmm71EOps%2FvE1Hhy7811PkXFXadDkLKGK4VXVS4j9C0gC5BqgF6egLt6QdkphMQggOPTBv9fDPZ%2Ffur5NJvNXcKESDdazNb6L%2FxzH331mUu%2FMdbWPBfFJgsFP7i5SoDx48RpSvZh2z6K%2BoOSQB1CNgtqAy2BIBjFszY%2FMdGLdkfnQ1EGt1lUQyv%2Boe%2FbzO0oF67fqkWleIxhUyBMgbbgt1iJqx%2F8EeJxMTrPd7Rtq0kohAO4O45T3APpmjrqYNn33NQBaVVlJjhKWrUmkfw0ZGj351INQfRch6iWDDAPKU5u6TAwnz7P1k%2FBcTi6bIq11V535eL1iDjb1yypj7PP4ZH1alqWT65NtbD8Fgo4iyHyopMdoJ3TC%2Fuu69BjqkAX4lzgYIpb51UALG4uCaCd6Q%2FE%2Fwf%2BIhHZ4Fa5aG6A6Wrrz0Iri4vkRyCz9oMxj7gUEJatKfS4MgrHpXJukZLb0NnfB8QNTjWNPrHLoYFQ1OL0SsBNY3yUnR4efbJsZiNvu8a%2Fv63WL23OGEOxD4jMkf8rdGkoA8kGPL6qebiX7vC9ugd88yMwFXzgfNJkeqoelMY0e7ibYj4Gkkqq%2FmzT76BqY5&X-Amz-Signature=387fc3579141a62efc2aff4a641731495ca01822acf0f7811bb4e051434d8eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AF3CRAD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8mwB7g6fyVgugAB8Dm70n64CzLPj8lSLh72%2FVx2lCwIhAMiAZXDG3eNBwvoMzFOwMPyPGTSKpDXAjtfqoT0JDaUOKv8DCB8QABoMNjM3NDIzMTgzODA1IgxzCY1niKQYWmn1a6Mq3APc4ipso9GUbsX2PEJEjNzpK5TfuY7k2xRA8KigY%2FC9Vevs1xRHCUQDO1GlsTaOejrA7tn%2F0Du%2B9nZL3%2FZjf6ZgJ5heP3GE3JomRRLp8M2MKPEkbJnl8oOArQNuCFiqcwHaOmWL3%2BuMo4JXjs7K3PZK2E5AG5xSC4E8vt2IvBn3dM4W1D0Yvg3R62itHaIKqrGfI1LRbhQwPSwMU0vd%2B1i0pINFg3bDA55mI%2B2TFz%2FYC%2F6FcdaLuEuDlyJ77h6xyG7tZBzLkhZmm71EOps%2FvE1Hhy7811PkXFXadDkLKGK4VXVS4j9C0gC5BqgF6egLt6QdkphMQggOPTBv9fDPZ%2Ffur5NJvNXcKESDdazNb6L%2FxzH331mUu%2FMdbWPBfFJgsFP7i5SoDx48RpSvZh2z6K%2BoOSQB1CNgtqAy2BIBjFszY%2FMdGLdkfnQ1EGt1lUQyv%2Boe%2FbzO0oF67fqkWleIxhUyBMgbbgt1iJqx%2F8EeJxMTrPd7Rtq0kohAO4O45T3APpmjrqYNn33NQBaVVlJjhKWrUmkfw0ZGj351INQfRch6iWDDAPKU5u6TAwnz7P1k%2FBcTi6bIq11V535eL1iDjb1yypj7PP4ZH1alqWT65NtbD8Fgo4iyHyopMdoJ3TC%2Fuu69BjqkAX4lzgYIpb51UALG4uCaCd6Q%2FE%2Fwf%2BIhHZ4Fa5aG6A6Wrrz0Iri4vkRyCz9oMxj7gUEJatKfS4MgrHpXJukZLb0NnfB8QNTjWNPrHLoYFQ1OL0SsBNY3yUnR4efbJsZiNvu8a%2Fv63WL23OGEOxD4jMkf8rdGkoA8kGPL6qebiX7vC9ugd88yMwFXzgfNJkeqoelMY0e7ibYj4Gkkqq%2FmzT76BqY5&X-Amz-Signature=8af13c13f5a23291ae1692a80834d8b8826a45ddf01256fa79f31d13cafe977e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AF3CRAD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8mwB7g6fyVgugAB8Dm70n64CzLPj8lSLh72%2FVx2lCwIhAMiAZXDG3eNBwvoMzFOwMPyPGTSKpDXAjtfqoT0JDaUOKv8DCB8QABoMNjM3NDIzMTgzODA1IgxzCY1niKQYWmn1a6Mq3APc4ipso9GUbsX2PEJEjNzpK5TfuY7k2xRA8KigY%2FC9Vevs1xRHCUQDO1GlsTaOejrA7tn%2F0Du%2B9nZL3%2FZjf6ZgJ5heP3GE3JomRRLp8M2MKPEkbJnl8oOArQNuCFiqcwHaOmWL3%2BuMo4JXjs7K3PZK2E5AG5xSC4E8vt2IvBn3dM4W1D0Yvg3R62itHaIKqrGfI1LRbhQwPSwMU0vd%2B1i0pINFg3bDA55mI%2B2TFz%2FYC%2F6FcdaLuEuDlyJ77h6xyG7tZBzLkhZmm71EOps%2FvE1Hhy7811PkXFXadDkLKGK4VXVS4j9C0gC5BqgF6egLt6QdkphMQggOPTBv9fDPZ%2Ffur5NJvNXcKESDdazNb6L%2FxzH331mUu%2FMdbWPBfFJgsFP7i5SoDx48RpSvZh2z6K%2BoOSQB1CNgtqAy2BIBjFszY%2FMdGLdkfnQ1EGt1lUQyv%2Boe%2FbzO0oF67fqkWleIxhUyBMgbbgt1iJqx%2F8EeJxMTrPd7Rtq0kohAO4O45T3APpmjrqYNn33NQBaVVlJjhKWrUmkfw0ZGj351INQfRch6iWDDAPKU5u6TAwnz7P1k%2FBcTi6bIq11V535eL1iDjb1yypj7PP4ZH1alqWT65NtbD8Fgo4iyHyopMdoJ3TC%2Fuu69BjqkAX4lzgYIpb51UALG4uCaCd6Q%2FE%2Fwf%2BIhHZ4Fa5aG6A6Wrrz0Iri4vkRyCz9oMxj7gUEJatKfS4MgrHpXJukZLb0NnfB8QNTjWNPrHLoYFQ1OL0SsBNY3yUnR4efbJsZiNvu8a%2Fv63WL23OGEOxD4jMkf8rdGkoA8kGPL6qebiX7vC9ugd88yMwFXzgfNJkeqoelMY0e7ibYj4Gkkqq%2FmzT76BqY5&X-Amz-Signature=9986351deaf0b69e598e4dc3c807cdbc6432c21172208100142ba07f5ccfaec9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AF3CRAD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8mwB7g6fyVgugAB8Dm70n64CzLPj8lSLh72%2FVx2lCwIhAMiAZXDG3eNBwvoMzFOwMPyPGTSKpDXAjtfqoT0JDaUOKv8DCB8QABoMNjM3NDIzMTgzODA1IgxzCY1niKQYWmn1a6Mq3APc4ipso9GUbsX2PEJEjNzpK5TfuY7k2xRA8KigY%2FC9Vevs1xRHCUQDO1GlsTaOejrA7tn%2F0Du%2B9nZL3%2FZjf6ZgJ5heP3GE3JomRRLp8M2MKPEkbJnl8oOArQNuCFiqcwHaOmWL3%2BuMo4JXjs7K3PZK2E5AG5xSC4E8vt2IvBn3dM4W1D0Yvg3R62itHaIKqrGfI1LRbhQwPSwMU0vd%2B1i0pINFg3bDA55mI%2B2TFz%2FYC%2F6FcdaLuEuDlyJ77h6xyG7tZBzLkhZmm71EOps%2FvE1Hhy7811PkXFXadDkLKGK4VXVS4j9C0gC5BqgF6egLt6QdkphMQggOPTBv9fDPZ%2Ffur5NJvNXcKESDdazNb6L%2FxzH331mUu%2FMdbWPBfFJgsFP7i5SoDx48RpSvZh2z6K%2BoOSQB1CNgtqAy2BIBjFszY%2FMdGLdkfnQ1EGt1lUQyv%2Boe%2FbzO0oF67fqkWleIxhUyBMgbbgt1iJqx%2F8EeJxMTrPd7Rtq0kohAO4O45T3APpmjrqYNn33NQBaVVlJjhKWrUmkfw0ZGj351INQfRch6iWDDAPKU5u6TAwnz7P1k%2FBcTi6bIq11V535eL1iDjb1yypj7PP4ZH1alqWT65NtbD8Fgo4iyHyopMdoJ3TC%2Fuu69BjqkAX4lzgYIpb51UALG4uCaCd6Q%2FE%2Fwf%2BIhHZ4Fa5aG6A6Wrrz0Iri4vkRyCz9oMxj7gUEJatKfS4MgrHpXJukZLb0NnfB8QNTjWNPrHLoYFQ1OL0SsBNY3yUnR4efbJsZiNvu8a%2Fv63WL23OGEOxD4jMkf8rdGkoA8kGPL6qebiX7vC9ugd88yMwFXzgfNJkeqoelMY0e7ibYj4Gkkqq%2FmzT76BqY5&X-Amz-Signature=ae7f8a0eb3b260c48fcdb454eb9cccd59b3951da8888f19cc7fa67d91de6ea16&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AF3CRAD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8mwB7g6fyVgugAB8Dm70n64CzLPj8lSLh72%2FVx2lCwIhAMiAZXDG3eNBwvoMzFOwMPyPGTSKpDXAjtfqoT0JDaUOKv8DCB8QABoMNjM3NDIzMTgzODA1IgxzCY1niKQYWmn1a6Mq3APc4ipso9GUbsX2PEJEjNzpK5TfuY7k2xRA8KigY%2FC9Vevs1xRHCUQDO1GlsTaOejrA7tn%2F0Du%2B9nZL3%2FZjf6ZgJ5heP3GE3JomRRLp8M2MKPEkbJnl8oOArQNuCFiqcwHaOmWL3%2BuMo4JXjs7K3PZK2E5AG5xSC4E8vt2IvBn3dM4W1D0Yvg3R62itHaIKqrGfI1LRbhQwPSwMU0vd%2B1i0pINFg3bDA55mI%2B2TFz%2FYC%2F6FcdaLuEuDlyJ77h6xyG7tZBzLkhZmm71EOps%2FvE1Hhy7811PkXFXadDkLKGK4VXVS4j9C0gC5BqgF6egLt6QdkphMQggOPTBv9fDPZ%2Ffur5NJvNXcKESDdazNb6L%2FxzH331mUu%2FMdbWPBfFJgsFP7i5SoDx48RpSvZh2z6K%2BoOSQB1CNgtqAy2BIBjFszY%2FMdGLdkfnQ1EGt1lUQyv%2Boe%2FbzO0oF67fqkWleIxhUyBMgbbgt1iJqx%2F8EeJxMTrPd7Rtq0kohAO4O45T3APpmjrqYNn33NQBaVVlJjhKWrUmkfw0ZGj351INQfRch6iWDDAPKU5u6TAwnz7P1k%2FBcTi6bIq11V535eL1iDjb1yypj7PP4ZH1alqWT65NtbD8Fgo4iyHyopMdoJ3TC%2Fuu69BjqkAX4lzgYIpb51UALG4uCaCd6Q%2FE%2Fwf%2BIhHZ4Fa5aG6A6Wrrz0Iri4vkRyCz9oMxj7gUEJatKfS4MgrHpXJukZLb0NnfB8QNTjWNPrHLoYFQ1OL0SsBNY3yUnR4efbJsZiNvu8a%2Fv63WL23OGEOxD4jMkf8rdGkoA8kGPL6qebiX7vC9ugd88yMwFXzgfNJkeqoelMY0e7ibYj4Gkkqq%2FmzT76BqY5&X-Amz-Signature=fe737af374c3db7071d365af09169e80f88215e789e8f9c413d759369b67f62e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AF3CRAD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8mwB7g6fyVgugAB8Dm70n64CzLPj8lSLh72%2FVx2lCwIhAMiAZXDG3eNBwvoMzFOwMPyPGTSKpDXAjtfqoT0JDaUOKv8DCB8QABoMNjM3NDIzMTgzODA1IgxzCY1niKQYWmn1a6Mq3APc4ipso9GUbsX2PEJEjNzpK5TfuY7k2xRA8KigY%2FC9Vevs1xRHCUQDO1GlsTaOejrA7tn%2F0Du%2B9nZL3%2FZjf6ZgJ5heP3GE3JomRRLp8M2MKPEkbJnl8oOArQNuCFiqcwHaOmWL3%2BuMo4JXjs7K3PZK2E5AG5xSC4E8vt2IvBn3dM4W1D0Yvg3R62itHaIKqrGfI1LRbhQwPSwMU0vd%2B1i0pINFg3bDA55mI%2B2TFz%2FYC%2F6FcdaLuEuDlyJ77h6xyG7tZBzLkhZmm71EOps%2FvE1Hhy7811PkXFXadDkLKGK4VXVS4j9C0gC5BqgF6egLt6QdkphMQggOPTBv9fDPZ%2Ffur5NJvNXcKESDdazNb6L%2FxzH331mUu%2FMdbWPBfFJgsFP7i5SoDx48RpSvZh2z6K%2BoOSQB1CNgtqAy2BIBjFszY%2FMdGLdkfnQ1EGt1lUQyv%2Boe%2FbzO0oF67fqkWleIxhUyBMgbbgt1iJqx%2F8EeJxMTrPd7Rtq0kohAO4O45T3APpmjrqYNn33NQBaVVlJjhKWrUmkfw0ZGj351INQfRch6iWDDAPKU5u6TAwnz7P1k%2FBcTi6bIq11V535eL1iDjb1yypj7PP4ZH1alqWT65NtbD8Fgo4iyHyopMdoJ3TC%2Fuu69BjqkAX4lzgYIpb51UALG4uCaCd6Q%2FE%2Fwf%2BIhHZ4Fa5aG6A6Wrrz0Iri4vkRyCz9oMxj7gUEJatKfS4MgrHpXJukZLb0NnfB8QNTjWNPrHLoYFQ1OL0SsBNY3yUnR4efbJsZiNvu8a%2Fv63WL23OGEOxD4jMkf8rdGkoA8kGPL6qebiX7vC9ugd88yMwFXzgfNJkeqoelMY0e7ibYj4Gkkqq%2FmzT76BqY5&X-Amz-Signature=60bb3a548990d711dd935bcf3c5a8371248af75e720ed688d62c1db234d608b6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AF3CRAD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8mwB7g6fyVgugAB8Dm70n64CzLPj8lSLh72%2FVx2lCwIhAMiAZXDG3eNBwvoMzFOwMPyPGTSKpDXAjtfqoT0JDaUOKv8DCB8QABoMNjM3NDIzMTgzODA1IgxzCY1niKQYWmn1a6Mq3APc4ipso9GUbsX2PEJEjNzpK5TfuY7k2xRA8KigY%2FC9Vevs1xRHCUQDO1GlsTaOejrA7tn%2F0Du%2B9nZL3%2FZjf6ZgJ5heP3GE3JomRRLp8M2MKPEkbJnl8oOArQNuCFiqcwHaOmWL3%2BuMo4JXjs7K3PZK2E5AG5xSC4E8vt2IvBn3dM4W1D0Yvg3R62itHaIKqrGfI1LRbhQwPSwMU0vd%2B1i0pINFg3bDA55mI%2B2TFz%2FYC%2F6FcdaLuEuDlyJ77h6xyG7tZBzLkhZmm71EOps%2FvE1Hhy7811PkXFXadDkLKGK4VXVS4j9C0gC5BqgF6egLt6QdkphMQggOPTBv9fDPZ%2Ffur5NJvNXcKESDdazNb6L%2FxzH331mUu%2FMdbWPBfFJgsFP7i5SoDx48RpSvZh2z6K%2BoOSQB1CNgtqAy2BIBjFszY%2FMdGLdkfnQ1EGt1lUQyv%2Boe%2FbzO0oF67fqkWleIxhUyBMgbbgt1iJqx%2F8EeJxMTrPd7Rtq0kohAO4O45T3APpmjrqYNn33NQBaVVlJjhKWrUmkfw0ZGj351INQfRch6iWDDAPKU5u6TAwnz7P1k%2FBcTi6bIq11V535eL1iDjb1yypj7PP4ZH1alqWT65NtbD8Fgo4iyHyopMdoJ3TC%2Fuu69BjqkAX4lzgYIpb51UALG4uCaCd6Q%2FE%2Fwf%2BIhHZ4Fa5aG6A6Wrrz0Iri4vkRyCz9oMxj7gUEJatKfS4MgrHpXJukZLb0NnfB8QNTjWNPrHLoYFQ1OL0SsBNY3yUnR4efbJsZiNvu8a%2Fv63WL23OGEOxD4jMkf8rdGkoA8kGPL6qebiX7vC9ugd88yMwFXzgfNJkeqoelMY0e7ibYj4Gkkqq%2FmzT76BqY5&X-Amz-Signature=22cda27ed967a1ef4e9c9b4cb70ea7929c7bb03a2dd6dcca8e5278387dfd3bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

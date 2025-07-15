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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIWZ7L7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHk7VtU2t0Co1F%2BUt9AiR9%2BcIzbYsYxkWnx7LU6sY4hxAiEAl5lzSb5o9GaOfel4UUAL8iI%2F1UTzRWeaxDc8WHILRLkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNp40aS3v%2BAznDaYkircA6aIOKfl0DK%2F%2BknesE6B9mvMWboI218OQIXDNUbVhIzzUbunK8UYSyD%2B7KTCenMeAg7MnM%2F34LrsduvE3QqUpjOWMMQknv5X1UC99QWY4aL2oJ1i%2FnC4D2pZlQEKQFMSdQRrx5aRvn%2FqCdal1kTKRMbK6wl1uu%2Fj3967BRif7Dpruzb%2FqPpf1B9wVrjSkyMfuL2LR7aDuBDC3Ez%2F7uD5dhFh77Lm5aMrXgi8nELxqDSL1Sby5ecxPitqroFGLtDIOJyGSzjcYIfTZqYlOWLqJorw0A6212wNhNRkeFcYNzKqbAa91rx0RhKzrbL9%2BykHtozY7DSX0vuCLit8cNmvicn4nlCuYWnZXFmtBQu%2BGhiCO8yrlCn8%2F1usQ0Adq00hy2tJfb46Jn767F1RcASG9uAe1NQz%2FJ3odjE3n79tREnP4nLiSeWOl%2F9mz5hHS3vBjiysgLDC00fLKd4%2BzAtGaZUoTEzdOTKlmY3qvsG4DUAYxhuUMliWNlq7CnJm8Ijgy8KwZhAq%2BFLbVz8Y3Nih3g2q6p5qSYOadOIcoBND9bsIXSYRTIvDWKW5Zo1WUI2zaejXummhnuwgQdXsiweVaQNyQJYXq5GKP73JyzQfTIvcs8T636VWFvIWzkl2MKzb2cMGOqUB%2FppJX4F9QWsQFEseknjvp4WZpJka7jIZYattF9kNSbwzt3L7T0CO6QWoy%2BwDZbZlRaPIxRwFLkJV%2F6Rfz5SlYjoFU83OsJUB4IfRufELzzJKV3SJ%2BvTvAwkdoKreki9VDXB2w4YcHLpYodZxYL%2BabKl7TkIgHeXQ5GPhsp9Pyv9dlTW5hlcoEJqBy6eJDXq9Mc25j1%2FqWWQDMYLiMTBwjrHMebxE&X-Amz-Signature=9993748c44e244286178e7106eb0d073e0b6463f4ec875b241d0ee9af3ec0408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIWZ7L7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHk7VtU2t0Co1F%2BUt9AiR9%2BcIzbYsYxkWnx7LU6sY4hxAiEAl5lzSb5o9GaOfel4UUAL8iI%2F1UTzRWeaxDc8WHILRLkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNp40aS3v%2BAznDaYkircA6aIOKfl0DK%2F%2BknesE6B9mvMWboI218OQIXDNUbVhIzzUbunK8UYSyD%2B7KTCenMeAg7MnM%2F34LrsduvE3QqUpjOWMMQknv5X1UC99QWY4aL2oJ1i%2FnC4D2pZlQEKQFMSdQRrx5aRvn%2FqCdal1kTKRMbK6wl1uu%2Fj3967BRif7Dpruzb%2FqPpf1B9wVrjSkyMfuL2LR7aDuBDC3Ez%2F7uD5dhFh77Lm5aMrXgi8nELxqDSL1Sby5ecxPitqroFGLtDIOJyGSzjcYIfTZqYlOWLqJorw0A6212wNhNRkeFcYNzKqbAa91rx0RhKzrbL9%2BykHtozY7DSX0vuCLit8cNmvicn4nlCuYWnZXFmtBQu%2BGhiCO8yrlCn8%2F1usQ0Adq00hy2tJfb46Jn767F1RcASG9uAe1NQz%2FJ3odjE3n79tREnP4nLiSeWOl%2F9mz5hHS3vBjiysgLDC00fLKd4%2BzAtGaZUoTEzdOTKlmY3qvsG4DUAYxhuUMliWNlq7CnJm8Ijgy8KwZhAq%2BFLbVz8Y3Nih3g2q6p5qSYOadOIcoBND9bsIXSYRTIvDWKW5Zo1WUI2zaejXummhnuwgQdXsiweVaQNyQJYXq5GKP73JyzQfTIvcs8T636VWFvIWzkl2MKzb2cMGOqUB%2FppJX4F9QWsQFEseknjvp4WZpJka7jIZYattF9kNSbwzt3L7T0CO6QWoy%2BwDZbZlRaPIxRwFLkJV%2F6Rfz5SlYjoFU83OsJUB4IfRufELzzJKV3SJ%2BvTvAwkdoKreki9VDXB2w4YcHLpYodZxYL%2BabKl7TkIgHeXQ5GPhsp9Pyv9dlTW5hlcoEJqBy6eJDXq9Mc25j1%2FqWWQDMYLiMTBwjrHMebxE&X-Amz-Signature=a6aee9d548412f1db892c846c64bd45dfdad309dd1a155bf838f8b4ccb1e1960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIWZ7L7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHk7VtU2t0Co1F%2BUt9AiR9%2BcIzbYsYxkWnx7LU6sY4hxAiEAl5lzSb5o9GaOfel4UUAL8iI%2F1UTzRWeaxDc8WHILRLkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNp40aS3v%2BAznDaYkircA6aIOKfl0DK%2F%2BknesE6B9mvMWboI218OQIXDNUbVhIzzUbunK8UYSyD%2B7KTCenMeAg7MnM%2F34LrsduvE3QqUpjOWMMQknv5X1UC99QWY4aL2oJ1i%2FnC4D2pZlQEKQFMSdQRrx5aRvn%2FqCdal1kTKRMbK6wl1uu%2Fj3967BRif7Dpruzb%2FqPpf1B9wVrjSkyMfuL2LR7aDuBDC3Ez%2F7uD5dhFh77Lm5aMrXgi8nELxqDSL1Sby5ecxPitqroFGLtDIOJyGSzjcYIfTZqYlOWLqJorw0A6212wNhNRkeFcYNzKqbAa91rx0RhKzrbL9%2BykHtozY7DSX0vuCLit8cNmvicn4nlCuYWnZXFmtBQu%2BGhiCO8yrlCn8%2F1usQ0Adq00hy2tJfb46Jn767F1RcASG9uAe1NQz%2FJ3odjE3n79tREnP4nLiSeWOl%2F9mz5hHS3vBjiysgLDC00fLKd4%2BzAtGaZUoTEzdOTKlmY3qvsG4DUAYxhuUMliWNlq7CnJm8Ijgy8KwZhAq%2BFLbVz8Y3Nih3g2q6p5qSYOadOIcoBND9bsIXSYRTIvDWKW5Zo1WUI2zaejXummhnuwgQdXsiweVaQNyQJYXq5GKP73JyzQfTIvcs8T636VWFvIWzkl2MKzb2cMGOqUB%2FppJX4F9QWsQFEseknjvp4WZpJka7jIZYattF9kNSbwzt3L7T0CO6QWoy%2BwDZbZlRaPIxRwFLkJV%2F6Rfz5SlYjoFU83OsJUB4IfRufELzzJKV3SJ%2BvTvAwkdoKreki9VDXB2w4YcHLpYodZxYL%2BabKl7TkIgHeXQ5GPhsp9Pyv9dlTW5hlcoEJqBy6eJDXq9Mc25j1%2FqWWQDMYLiMTBwjrHMebxE&X-Amz-Signature=e4403dcd1a10147ed88c6c5c28500d18e355f601ba4b32b3b5fd4019d11beeff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIWZ7L7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHk7VtU2t0Co1F%2BUt9AiR9%2BcIzbYsYxkWnx7LU6sY4hxAiEAl5lzSb5o9GaOfel4UUAL8iI%2F1UTzRWeaxDc8WHILRLkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNp40aS3v%2BAznDaYkircA6aIOKfl0DK%2F%2BknesE6B9mvMWboI218OQIXDNUbVhIzzUbunK8UYSyD%2B7KTCenMeAg7MnM%2F34LrsduvE3QqUpjOWMMQknv5X1UC99QWY4aL2oJ1i%2FnC4D2pZlQEKQFMSdQRrx5aRvn%2FqCdal1kTKRMbK6wl1uu%2Fj3967BRif7Dpruzb%2FqPpf1B9wVrjSkyMfuL2LR7aDuBDC3Ez%2F7uD5dhFh77Lm5aMrXgi8nELxqDSL1Sby5ecxPitqroFGLtDIOJyGSzjcYIfTZqYlOWLqJorw0A6212wNhNRkeFcYNzKqbAa91rx0RhKzrbL9%2BykHtozY7DSX0vuCLit8cNmvicn4nlCuYWnZXFmtBQu%2BGhiCO8yrlCn8%2F1usQ0Adq00hy2tJfb46Jn767F1RcASG9uAe1NQz%2FJ3odjE3n79tREnP4nLiSeWOl%2F9mz5hHS3vBjiysgLDC00fLKd4%2BzAtGaZUoTEzdOTKlmY3qvsG4DUAYxhuUMliWNlq7CnJm8Ijgy8KwZhAq%2BFLbVz8Y3Nih3g2q6p5qSYOadOIcoBND9bsIXSYRTIvDWKW5Zo1WUI2zaejXummhnuwgQdXsiweVaQNyQJYXq5GKP73JyzQfTIvcs8T636VWFvIWzkl2MKzb2cMGOqUB%2FppJX4F9QWsQFEseknjvp4WZpJka7jIZYattF9kNSbwzt3L7T0CO6QWoy%2BwDZbZlRaPIxRwFLkJV%2F6Rfz5SlYjoFU83OsJUB4IfRufELzzJKV3SJ%2BvTvAwkdoKreki9VDXB2w4YcHLpYodZxYL%2BabKl7TkIgHeXQ5GPhsp9Pyv9dlTW5hlcoEJqBy6eJDXq9Mc25j1%2FqWWQDMYLiMTBwjrHMebxE&X-Amz-Signature=f1eff5b525c7d788a27213469a4f719116f2dbb1b065f6de8379d54fc9692de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIWZ7L7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHk7VtU2t0Co1F%2BUt9AiR9%2BcIzbYsYxkWnx7LU6sY4hxAiEAl5lzSb5o9GaOfel4UUAL8iI%2F1UTzRWeaxDc8WHILRLkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNp40aS3v%2BAznDaYkircA6aIOKfl0DK%2F%2BknesE6B9mvMWboI218OQIXDNUbVhIzzUbunK8UYSyD%2B7KTCenMeAg7MnM%2F34LrsduvE3QqUpjOWMMQknv5X1UC99QWY4aL2oJ1i%2FnC4D2pZlQEKQFMSdQRrx5aRvn%2FqCdal1kTKRMbK6wl1uu%2Fj3967BRif7Dpruzb%2FqPpf1B9wVrjSkyMfuL2LR7aDuBDC3Ez%2F7uD5dhFh77Lm5aMrXgi8nELxqDSL1Sby5ecxPitqroFGLtDIOJyGSzjcYIfTZqYlOWLqJorw0A6212wNhNRkeFcYNzKqbAa91rx0RhKzrbL9%2BykHtozY7DSX0vuCLit8cNmvicn4nlCuYWnZXFmtBQu%2BGhiCO8yrlCn8%2F1usQ0Adq00hy2tJfb46Jn767F1RcASG9uAe1NQz%2FJ3odjE3n79tREnP4nLiSeWOl%2F9mz5hHS3vBjiysgLDC00fLKd4%2BzAtGaZUoTEzdOTKlmY3qvsG4DUAYxhuUMliWNlq7CnJm8Ijgy8KwZhAq%2BFLbVz8Y3Nih3g2q6p5qSYOadOIcoBND9bsIXSYRTIvDWKW5Zo1WUI2zaejXummhnuwgQdXsiweVaQNyQJYXq5GKP73JyzQfTIvcs8T636VWFvIWzkl2MKzb2cMGOqUB%2FppJX4F9QWsQFEseknjvp4WZpJka7jIZYattF9kNSbwzt3L7T0CO6QWoy%2BwDZbZlRaPIxRwFLkJV%2F6Rfz5SlYjoFU83OsJUB4IfRufELzzJKV3SJ%2BvTvAwkdoKreki9VDXB2w4YcHLpYodZxYL%2BabKl7TkIgHeXQ5GPhsp9Pyv9dlTW5hlcoEJqBy6eJDXq9Mc25j1%2FqWWQDMYLiMTBwjrHMebxE&X-Amz-Signature=4180b5b3d236dba2e933d87e590333cab973e3499a12b9ba9037e642f9c904cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIWZ7L7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHk7VtU2t0Co1F%2BUt9AiR9%2BcIzbYsYxkWnx7LU6sY4hxAiEAl5lzSb5o9GaOfel4UUAL8iI%2F1UTzRWeaxDc8WHILRLkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNp40aS3v%2BAznDaYkircA6aIOKfl0DK%2F%2BknesE6B9mvMWboI218OQIXDNUbVhIzzUbunK8UYSyD%2B7KTCenMeAg7MnM%2F34LrsduvE3QqUpjOWMMQknv5X1UC99QWY4aL2oJ1i%2FnC4D2pZlQEKQFMSdQRrx5aRvn%2FqCdal1kTKRMbK6wl1uu%2Fj3967BRif7Dpruzb%2FqPpf1B9wVrjSkyMfuL2LR7aDuBDC3Ez%2F7uD5dhFh77Lm5aMrXgi8nELxqDSL1Sby5ecxPitqroFGLtDIOJyGSzjcYIfTZqYlOWLqJorw0A6212wNhNRkeFcYNzKqbAa91rx0RhKzrbL9%2BykHtozY7DSX0vuCLit8cNmvicn4nlCuYWnZXFmtBQu%2BGhiCO8yrlCn8%2F1usQ0Adq00hy2tJfb46Jn767F1RcASG9uAe1NQz%2FJ3odjE3n79tREnP4nLiSeWOl%2F9mz5hHS3vBjiysgLDC00fLKd4%2BzAtGaZUoTEzdOTKlmY3qvsG4DUAYxhuUMliWNlq7CnJm8Ijgy8KwZhAq%2BFLbVz8Y3Nih3g2q6p5qSYOadOIcoBND9bsIXSYRTIvDWKW5Zo1WUI2zaejXummhnuwgQdXsiweVaQNyQJYXq5GKP73JyzQfTIvcs8T636VWFvIWzkl2MKzb2cMGOqUB%2FppJX4F9QWsQFEseknjvp4WZpJka7jIZYattF9kNSbwzt3L7T0CO6QWoy%2BwDZbZlRaPIxRwFLkJV%2F6Rfz5SlYjoFU83OsJUB4IfRufELzzJKV3SJ%2BvTvAwkdoKreki9VDXB2w4YcHLpYodZxYL%2BabKl7TkIgHeXQ5GPhsp9Pyv9dlTW5hlcoEJqBy6eJDXq9Mc25j1%2FqWWQDMYLiMTBwjrHMebxE&X-Amz-Signature=f0a8977f6bfff48b27aa303660783962ea0835b61549bdae2c6b78d808217376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIWZ7L7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHk7VtU2t0Co1F%2BUt9AiR9%2BcIzbYsYxkWnx7LU6sY4hxAiEAl5lzSb5o9GaOfel4UUAL8iI%2F1UTzRWeaxDc8WHILRLkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNp40aS3v%2BAznDaYkircA6aIOKfl0DK%2F%2BknesE6B9mvMWboI218OQIXDNUbVhIzzUbunK8UYSyD%2B7KTCenMeAg7MnM%2F34LrsduvE3QqUpjOWMMQknv5X1UC99QWY4aL2oJ1i%2FnC4D2pZlQEKQFMSdQRrx5aRvn%2FqCdal1kTKRMbK6wl1uu%2Fj3967BRif7Dpruzb%2FqPpf1B9wVrjSkyMfuL2LR7aDuBDC3Ez%2F7uD5dhFh77Lm5aMrXgi8nELxqDSL1Sby5ecxPitqroFGLtDIOJyGSzjcYIfTZqYlOWLqJorw0A6212wNhNRkeFcYNzKqbAa91rx0RhKzrbL9%2BykHtozY7DSX0vuCLit8cNmvicn4nlCuYWnZXFmtBQu%2BGhiCO8yrlCn8%2F1usQ0Adq00hy2tJfb46Jn767F1RcASG9uAe1NQz%2FJ3odjE3n79tREnP4nLiSeWOl%2F9mz5hHS3vBjiysgLDC00fLKd4%2BzAtGaZUoTEzdOTKlmY3qvsG4DUAYxhuUMliWNlq7CnJm8Ijgy8KwZhAq%2BFLbVz8Y3Nih3g2q6p5qSYOadOIcoBND9bsIXSYRTIvDWKW5Zo1WUI2zaejXummhnuwgQdXsiweVaQNyQJYXq5GKP73JyzQfTIvcs8T636VWFvIWzkl2MKzb2cMGOqUB%2FppJX4F9QWsQFEseknjvp4WZpJka7jIZYattF9kNSbwzt3L7T0CO6QWoy%2BwDZbZlRaPIxRwFLkJV%2F6Rfz5SlYjoFU83OsJUB4IfRufELzzJKV3SJ%2BvTvAwkdoKreki9VDXB2w4YcHLpYodZxYL%2BabKl7TkIgHeXQ5GPhsp9Pyv9dlTW5hlcoEJqBy6eJDXq9Mc25j1%2FqWWQDMYLiMTBwjrHMebxE&X-Amz-Signature=5fa088d6a5696d2f97092a2d22f694030d8dea25e5b707dc0faff3d145fea2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

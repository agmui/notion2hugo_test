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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43AREMD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIJuaX7XdCmBGa79tD9lT5DFdLjc3kqi9ssi2PY7bpeAiAweChP2%2FJeMNWmWDKgBT1iIb5%2BN2mOkXBn59277UfF6Cr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMb%2B7ZWqTX%2FlNds9KWKtwDHX4ErI%2F%2F%2BPN2RrHXd6LIDhS2i1wB6nB9x5%2BjxO5oh5K8NkT%2FmJQMVe2BMycOB%2BE3H9nSn9OPcQVOiF84S0HBzvTfGgIOG1D%2Boet12ox%2BWNG8PUcL8eUHkG%2B7A5FfPmJU8kB1rhOPdnyZKJfyooHpeXoUu7cjdUg4z6daGDKX2r0fekADSvx0ocObqWlqcNCcfKrDyAjGus9azr617jc1jCpwwR6%2BB%2FhoGZQjR7Ns%2F4uXuIr%2B%2Fot7BDxANzasCsB65nPLQjHqfjmuTQOL7GQruK96b88ebsA9cHHK4pSHbGdWpEzqvOoSEmokNG0jUObyhEZP75TYHTQESgAFsZienNH8d9x0IuZ2A5VjdAKiVY86QoqWjDYVKVJ2bgoQSuW%2FrwSzNanGzbrSS9SqX8Sfq1nOVia6LLm%2FGbb7Oa6PyjumP2FShb%2Bl2umWkniKDha6pKaEjrw6wBEAnU5fo4GME0dDdTAzsAfP1CreBeI%2BxOX7ir5BZ9%2FutkPQMMKUMBuapd1Yx%2F9pVopOIxEAce%2FFyIgypU4Tvhyt3ZweAXHJqQP850pOQpPOeABbXvtsHElJLSvlO%2BohV3tlJOqC8AYFXwhdEeYP7P0FjcPeXf10lZ5sdDuBhCWJb%2Fc%2BNTkw9Oy2wAY6pgE2SduPiP7R8rF9Fl3JRmXOfzxHbnbJ13Tg05fNIBV57V1xYIoWvAoy15S%2Buaw9DwQBrmTPTT3RmUtPJFQR9bwTmWkSTHfzx1q7fL341bu5V%2FkWt%2FRiChUBweiLyAozctBa%2BbP0XhR0cdcbjBTOwI1xX9g69yKd9Wfn%2Fk046KsoxqYkAG1STsyGrqrTez74FOljztrx47zqpTu10cEp0AZx43Kjxls2&X-Amz-Signature=ad3381651787654e557d845945d4282861a8f7fbb17ae5ca719bbff67e845d54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43AREMD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIJuaX7XdCmBGa79tD9lT5DFdLjc3kqi9ssi2PY7bpeAiAweChP2%2FJeMNWmWDKgBT1iIb5%2BN2mOkXBn59277UfF6Cr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMb%2B7ZWqTX%2FlNds9KWKtwDHX4ErI%2F%2F%2BPN2RrHXd6LIDhS2i1wB6nB9x5%2BjxO5oh5K8NkT%2FmJQMVe2BMycOB%2BE3H9nSn9OPcQVOiF84S0HBzvTfGgIOG1D%2Boet12ox%2BWNG8PUcL8eUHkG%2B7A5FfPmJU8kB1rhOPdnyZKJfyooHpeXoUu7cjdUg4z6daGDKX2r0fekADSvx0ocObqWlqcNCcfKrDyAjGus9azr617jc1jCpwwR6%2BB%2FhoGZQjR7Ns%2F4uXuIr%2B%2Fot7BDxANzasCsB65nPLQjHqfjmuTQOL7GQruK96b88ebsA9cHHK4pSHbGdWpEzqvOoSEmokNG0jUObyhEZP75TYHTQESgAFsZienNH8d9x0IuZ2A5VjdAKiVY86QoqWjDYVKVJ2bgoQSuW%2FrwSzNanGzbrSS9SqX8Sfq1nOVia6LLm%2FGbb7Oa6PyjumP2FShb%2Bl2umWkniKDha6pKaEjrw6wBEAnU5fo4GME0dDdTAzsAfP1CreBeI%2BxOX7ir5BZ9%2FutkPQMMKUMBuapd1Yx%2F9pVopOIxEAce%2FFyIgypU4Tvhyt3ZweAXHJqQP850pOQpPOeABbXvtsHElJLSvlO%2BohV3tlJOqC8AYFXwhdEeYP7P0FjcPeXf10lZ5sdDuBhCWJb%2Fc%2BNTkw9Oy2wAY6pgE2SduPiP7R8rF9Fl3JRmXOfzxHbnbJ13Tg05fNIBV57V1xYIoWvAoy15S%2Buaw9DwQBrmTPTT3RmUtPJFQR9bwTmWkSTHfzx1q7fL341bu5V%2FkWt%2FRiChUBweiLyAozctBa%2BbP0XhR0cdcbjBTOwI1xX9g69yKd9Wfn%2Fk046KsoxqYkAG1STsyGrqrTez74FOljztrx47zqpTu10cEp0AZx43Kjxls2&X-Amz-Signature=cba72b376fc3c3a1e568a1fbb7e494e960c86693a7d46a050c9788406f6987b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43AREMD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIJuaX7XdCmBGa79tD9lT5DFdLjc3kqi9ssi2PY7bpeAiAweChP2%2FJeMNWmWDKgBT1iIb5%2BN2mOkXBn59277UfF6Cr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMb%2B7ZWqTX%2FlNds9KWKtwDHX4ErI%2F%2F%2BPN2RrHXd6LIDhS2i1wB6nB9x5%2BjxO5oh5K8NkT%2FmJQMVe2BMycOB%2BE3H9nSn9OPcQVOiF84S0HBzvTfGgIOG1D%2Boet12ox%2BWNG8PUcL8eUHkG%2B7A5FfPmJU8kB1rhOPdnyZKJfyooHpeXoUu7cjdUg4z6daGDKX2r0fekADSvx0ocObqWlqcNCcfKrDyAjGus9azr617jc1jCpwwR6%2BB%2FhoGZQjR7Ns%2F4uXuIr%2B%2Fot7BDxANzasCsB65nPLQjHqfjmuTQOL7GQruK96b88ebsA9cHHK4pSHbGdWpEzqvOoSEmokNG0jUObyhEZP75TYHTQESgAFsZienNH8d9x0IuZ2A5VjdAKiVY86QoqWjDYVKVJ2bgoQSuW%2FrwSzNanGzbrSS9SqX8Sfq1nOVia6LLm%2FGbb7Oa6PyjumP2FShb%2Bl2umWkniKDha6pKaEjrw6wBEAnU5fo4GME0dDdTAzsAfP1CreBeI%2BxOX7ir5BZ9%2FutkPQMMKUMBuapd1Yx%2F9pVopOIxEAce%2FFyIgypU4Tvhyt3ZweAXHJqQP850pOQpPOeABbXvtsHElJLSvlO%2BohV3tlJOqC8AYFXwhdEeYP7P0FjcPeXf10lZ5sdDuBhCWJb%2Fc%2BNTkw9Oy2wAY6pgE2SduPiP7R8rF9Fl3JRmXOfzxHbnbJ13Tg05fNIBV57V1xYIoWvAoy15S%2Buaw9DwQBrmTPTT3RmUtPJFQR9bwTmWkSTHfzx1q7fL341bu5V%2FkWt%2FRiChUBweiLyAozctBa%2BbP0XhR0cdcbjBTOwI1xX9g69yKd9Wfn%2Fk046KsoxqYkAG1STsyGrqrTez74FOljztrx47zqpTu10cEp0AZx43Kjxls2&X-Amz-Signature=62c5fec9c9855c18b01c5bb80795a303f1068f4d5def7723ddb6e429f97f1fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43AREMD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIJuaX7XdCmBGa79tD9lT5DFdLjc3kqi9ssi2PY7bpeAiAweChP2%2FJeMNWmWDKgBT1iIb5%2BN2mOkXBn59277UfF6Cr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMb%2B7ZWqTX%2FlNds9KWKtwDHX4ErI%2F%2F%2BPN2RrHXd6LIDhS2i1wB6nB9x5%2BjxO5oh5K8NkT%2FmJQMVe2BMycOB%2BE3H9nSn9OPcQVOiF84S0HBzvTfGgIOG1D%2Boet12ox%2BWNG8PUcL8eUHkG%2B7A5FfPmJU8kB1rhOPdnyZKJfyooHpeXoUu7cjdUg4z6daGDKX2r0fekADSvx0ocObqWlqcNCcfKrDyAjGus9azr617jc1jCpwwR6%2BB%2FhoGZQjR7Ns%2F4uXuIr%2B%2Fot7BDxANzasCsB65nPLQjHqfjmuTQOL7GQruK96b88ebsA9cHHK4pSHbGdWpEzqvOoSEmokNG0jUObyhEZP75TYHTQESgAFsZienNH8d9x0IuZ2A5VjdAKiVY86QoqWjDYVKVJ2bgoQSuW%2FrwSzNanGzbrSS9SqX8Sfq1nOVia6LLm%2FGbb7Oa6PyjumP2FShb%2Bl2umWkniKDha6pKaEjrw6wBEAnU5fo4GME0dDdTAzsAfP1CreBeI%2BxOX7ir5BZ9%2FutkPQMMKUMBuapd1Yx%2F9pVopOIxEAce%2FFyIgypU4Tvhyt3ZweAXHJqQP850pOQpPOeABbXvtsHElJLSvlO%2BohV3tlJOqC8AYFXwhdEeYP7P0FjcPeXf10lZ5sdDuBhCWJb%2Fc%2BNTkw9Oy2wAY6pgE2SduPiP7R8rF9Fl3JRmXOfzxHbnbJ13Tg05fNIBV57V1xYIoWvAoy15S%2Buaw9DwQBrmTPTT3RmUtPJFQR9bwTmWkSTHfzx1q7fL341bu5V%2FkWt%2FRiChUBweiLyAozctBa%2BbP0XhR0cdcbjBTOwI1xX9g69yKd9Wfn%2Fk046KsoxqYkAG1STsyGrqrTez74FOljztrx47zqpTu10cEp0AZx43Kjxls2&X-Amz-Signature=050301091c5ac600babef931812be530a8887c9d11248c31bbe271c1f25aa359&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43AREMD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIJuaX7XdCmBGa79tD9lT5DFdLjc3kqi9ssi2PY7bpeAiAweChP2%2FJeMNWmWDKgBT1iIb5%2BN2mOkXBn59277UfF6Cr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMb%2B7ZWqTX%2FlNds9KWKtwDHX4ErI%2F%2F%2BPN2RrHXd6LIDhS2i1wB6nB9x5%2BjxO5oh5K8NkT%2FmJQMVe2BMycOB%2BE3H9nSn9OPcQVOiF84S0HBzvTfGgIOG1D%2Boet12ox%2BWNG8PUcL8eUHkG%2B7A5FfPmJU8kB1rhOPdnyZKJfyooHpeXoUu7cjdUg4z6daGDKX2r0fekADSvx0ocObqWlqcNCcfKrDyAjGus9azr617jc1jCpwwR6%2BB%2FhoGZQjR7Ns%2F4uXuIr%2B%2Fot7BDxANzasCsB65nPLQjHqfjmuTQOL7GQruK96b88ebsA9cHHK4pSHbGdWpEzqvOoSEmokNG0jUObyhEZP75TYHTQESgAFsZienNH8d9x0IuZ2A5VjdAKiVY86QoqWjDYVKVJ2bgoQSuW%2FrwSzNanGzbrSS9SqX8Sfq1nOVia6LLm%2FGbb7Oa6PyjumP2FShb%2Bl2umWkniKDha6pKaEjrw6wBEAnU5fo4GME0dDdTAzsAfP1CreBeI%2BxOX7ir5BZ9%2FutkPQMMKUMBuapd1Yx%2F9pVopOIxEAce%2FFyIgypU4Tvhyt3ZweAXHJqQP850pOQpPOeABbXvtsHElJLSvlO%2BohV3tlJOqC8AYFXwhdEeYP7P0FjcPeXf10lZ5sdDuBhCWJb%2Fc%2BNTkw9Oy2wAY6pgE2SduPiP7R8rF9Fl3JRmXOfzxHbnbJ13Tg05fNIBV57V1xYIoWvAoy15S%2Buaw9DwQBrmTPTT3RmUtPJFQR9bwTmWkSTHfzx1q7fL341bu5V%2FkWt%2FRiChUBweiLyAozctBa%2BbP0XhR0cdcbjBTOwI1xX9g69yKd9Wfn%2Fk046KsoxqYkAG1STsyGrqrTez74FOljztrx47zqpTu10cEp0AZx43Kjxls2&X-Amz-Signature=b5fb1cdbead1c20ec609cb58aeb233e4d17dda673ab741c7e55c019e3cf6a265&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43AREMD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIJuaX7XdCmBGa79tD9lT5DFdLjc3kqi9ssi2PY7bpeAiAweChP2%2FJeMNWmWDKgBT1iIb5%2BN2mOkXBn59277UfF6Cr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMb%2B7ZWqTX%2FlNds9KWKtwDHX4ErI%2F%2F%2BPN2RrHXd6LIDhS2i1wB6nB9x5%2BjxO5oh5K8NkT%2FmJQMVe2BMycOB%2BE3H9nSn9OPcQVOiF84S0HBzvTfGgIOG1D%2Boet12ox%2BWNG8PUcL8eUHkG%2B7A5FfPmJU8kB1rhOPdnyZKJfyooHpeXoUu7cjdUg4z6daGDKX2r0fekADSvx0ocObqWlqcNCcfKrDyAjGus9azr617jc1jCpwwR6%2BB%2FhoGZQjR7Ns%2F4uXuIr%2B%2Fot7BDxANzasCsB65nPLQjHqfjmuTQOL7GQruK96b88ebsA9cHHK4pSHbGdWpEzqvOoSEmokNG0jUObyhEZP75TYHTQESgAFsZienNH8d9x0IuZ2A5VjdAKiVY86QoqWjDYVKVJ2bgoQSuW%2FrwSzNanGzbrSS9SqX8Sfq1nOVia6LLm%2FGbb7Oa6PyjumP2FShb%2Bl2umWkniKDha6pKaEjrw6wBEAnU5fo4GME0dDdTAzsAfP1CreBeI%2BxOX7ir5BZ9%2FutkPQMMKUMBuapd1Yx%2F9pVopOIxEAce%2FFyIgypU4Tvhyt3ZweAXHJqQP850pOQpPOeABbXvtsHElJLSvlO%2BohV3tlJOqC8AYFXwhdEeYP7P0FjcPeXf10lZ5sdDuBhCWJb%2Fc%2BNTkw9Oy2wAY6pgE2SduPiP7R8rF9Fl3JRmXOfzxHbnbJ13Tg05fNIBV57V1xYIoWvAoy15S%2Buaw9DwQBrmTPTT3RmUtPJFQR9bwTmWkSTHfzx1q7fL341bu5V%2FkWt%2FRiChUBweiLyAozctBa%2BbP0XhR0cdcbjBTOwI1xX9g69yKd9Wfn%2Fk046KsoxqYkAG1STsyGrqrTez74FOljztrx47zqpTu10cEp0AZx43Kjxls2&X-Amz-Signature=2b6722f0e318570c1f6dc99488b361f4e5b6a21eeb3fa23a6757934430f2835b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43AREMD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIJuaX7XdCmBGa79tD9lT5DFdLjc3kqi9ssi2PY7bpeAiAweChP2%2FJeMNWmWDKgBT1iIb5%2BN2mOkXBn59277UfF6Cr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMb%2B7ZWqTX%2FlNds9KWKtwDHX4ErI%2F%2F%2BPN2RrHXd6LIDhS2i1wB6nB9x5%2BjxO5oh5K8NkT%2FmJQMVe2BMycOB%2BE3H9nSn9OPcQVOiF84S0HBzvTfGgIOG1D%2Boet12ox%2BWNG8PUcL8eUHkG%2B7A5FfPmJU8kB1rhOPdnyZKJfyooHpeXoUu7cjdUg4z6daGDKX2r0fekADSvx0ocObqWlqcNCcfKrDyAjGus9azr617jc1jCpwwR6%2BB%2FhoGZQjR7Ns%2F4uXuIr%2B%2Fot7BDxANzasCsB65nPLQjHqfjmuTQOL7GQruK96b88ebsA9cHHK4pSHbGdWpEzqvOoSEmokNG0jUObyhEZP75TYHTQESgAFsZienNH8d9x0IuZ2A5VjdAKiVY86QoqWjDYVKVJ2bgoQSuW%2FrwSzNanGzbrSS9SqX8Sfq1nOVia6LLm%2FGbb7Oa6PyjumP2FShb%2Bl2umWkniKDha6pKaEjrw6wBEAnU5fo4GME0dDdTAzsAfP1CreBeI%2BxOX7ir5BZ9%2FutkPQMMKUMBuapd1Yx%2F9pVopOIxEAce%2FFyIgypU4Tvhyt3ZweAXHJqQP850pOQpPOeABbXvtsHElJLSvlO%2BohV3tlJOqC8AYFXwhdEeYP7P0FjcPeXf10lZ5sdDuBhCWJb%2Fc%2BNTkw9Oy2wAY6pgE2SduPiP7R8rF9Fl3JRmXOfzxHbnbJ13Tg05fNIBV57V1xYIoWvAoy15S%2Buaw9DwQBrmTPTT3RmUtPJFQR9bwTmWkSTHfzx1q7fL341bu5V%2FkWt%2FRiChUBweiLyAozctBa%2BbP0XhR0cdcbjBTOwI1xX9g69yKd9Wfn%2Fk046KsoxqYkAG1STsyGrqrTez74FOljztrx47zqpTu10cEp0AZx43Kjxls2&X-Amz-Signature=5d8cb28b5a9aae648fb462277cc11b3e376104ac58f605d7fa24c8b835eadae4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

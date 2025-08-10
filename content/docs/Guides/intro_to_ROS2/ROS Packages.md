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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYKYKD5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHQbEYARP7AbqUaLwdX0UiD6k1luT19wwB3bJK5irYdAiBzM2ak%2BFS3tRWAAAta4KKi8OZYFvjQ0jR8OsSLXXUf%2FyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9i2v%2FOmXshpSB375KtwDOs9ke%2B7Ss7GPZTqwq8bus0JF2DPEF8INDdiVcOcdzZg9lQDNC122ZOYopMjjrUxzyumI4dwjwaUg82OHj7KnlRlc2cYGphaD4rJjDTd9WhUIzKBg8NrZvYDys9yA60syT9nkotXquuVkWYTChtX%2BrorODi2zuqVn6na%2BNLG%2FelxOrD7SildyZZJs0Mw7RQKOQi0cEvBZ7HXWc4WviVAga8SpHcCq4Mp%2FFF%2B1m2R%2BdcefuINPGLa%2FSkMblqqW7EXY1Xh%2BnsjjD4vxX3k8f7BP8UTKeIUqCUR78f7HJqjuvVT8yIGE%2FHcnRUOh7%2BhV8NwsnN%2FykiErtNg4NMwA3Pkro%2BhjS6OdPGDt8a%2BJxnujM9HBnkaOfjhkDJErMzEsiWRcLkXhOPdz8js7%2FOcDkx4TTPXw9ZuCrb%2FvSoHGQ29MgI7AmWyHigClxHAAj9O1HsQe%2BiCvdcevF1JRfHKU2VJJxoQ0b5TSW1ptqDYYwQhIeV9teSRzOpkZufYs3%2FQsXc29e7uGAKyx6yu7nnVVy9waupm%2BFSOQjbu66tXIzC87oQEW76ptvQoygkiBxausE4xN2R48Gbp1ssGIuVxhkytjXHrFiW9NwLeaxXMYz46B3y2DFNREJ9eRguWpYAww%2B7rjxAY6pgFyC%2BuN%2Bqc5XRnAa064rC47FBWyMlijY%2FCwipDUPtA9E14tyrHOZbEcb8t9sGMuIeug9c6ctCIklAyvh%2BcmEkOXOPoMEhuHiqqCbj4JiVNsO2MfX9syckcm%2BanLXkQrwT2Y0jBhVFw3m7pEHfndwhCfhXdQsTedtH%2F%2F3E4vFyqvXs%2F6hE54%2B05TmvFqKsTNY7EN7%2BYBB7%2BE5lwiv66uS94DznwQT0qP&X-Amz-Signature=d889940505e69c0a0dde5b869efc53e91bdb89dde896e522ccb8e226b3801654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYKYKD5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHQbEYARP7AbqUaLwdX0UiD6k1luT19wwB3bJK5irYdAiBzM2ak%2BFS3tRWAAAta4KKi8OZYFvjQ0jR8OsSLXXUf%2FyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9i2v%2FOmXshpSB375KtwDOs9ke%2B7Ss7GPZTqwq8bus0JF2DPEF8INDdiVcOcdzZg9lQDNC122ZOYopMjjrUxzyumI4dwjwaUg82OHj7KnlRlc2cYGphaD4rJjDTd9WhUIzKBg8NrZvYDys9yA60syT9nkotXquuVkWYTChtX%2BrorODi2zuqVn6na%2BNLG%2FelxOrD7SildyZZJs0Mw7RQKOQi0cEvBZ7HXWc4WviVAga8SpHcCq4Mp%2FFF%2B1m2R%2BdcefuINPGLa%2FSkMblqqW7EXY1Xh%2BnsjjD4vxX3k8f7BP8UTKeIUqCUR78f7HJqjuvVT8yIGE%2FHcnRUOh7%2BhV8NwsnN%2FykiErtNg4NMwA3Pkro%2BhjS6OdPGDt8a%2BJxnujM9HBnkaOfjhkDJErMzEsiWRcLkXhOPdz8js7%2FOcDkx4TTPXw9ZuCrb%2FvSoHGQ29MgI7AmWyHigClxHAAj9O1HsQe%2BiCvdcevF1JRfHKU2VJJxoQ0b5TSW1ptqDYYwQhIeV9teSRzOpkZufYs3%2FQsXc29e7uGAKyx6yu7nnVVy9waupm%2BFSOQjbu66tXIzC87oQEW76ptvQoygkiBxausE4xN2R48Gbp1ssGIuVxhkytjXHrFiW9NwLeaxXMYz46B3y2DFNREJ9eRguWpYAww%2B7rjxAY6pgFyC%2BuN%2Bqc5XRnAa064rC47FBWyMlijY%2FCwipDUPtA9E14tyrHOZbEcb8t9sGMuIeug9c6ctCIklAyvh%2BcmEkOXOPoMEhuHiqqCbj4JiVNsO2MfX9syckcm%2BanLXkQrwT2Y0jBhVFw3m7pEHfndwhCfhXdQsTedtH%2F%2F3E4vFyqvXs%2F6hE54%2B05TmvFqKsTNY7EN7%2BYBB7%2BE5lwiv66uS94DznwQT0qP&X-Amz-Signature=13d40bb888bfa5f304441a1e94cdf3198d98c9278a08859ba574e22176fb4596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYKYKD5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHQbEYARP7AbqUaLwdX0UiD6k1luT19wwB3bJK5irYdAiBzM2ak%2BFS3tRWAAAta4KKi8OZYFvjQ0jR8OsSLXXUf%2FyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9i2v%2FOmXshpSB375KtwDOs9ke%2B7Ss7GPZTqwq8bus0JF2DPEF8INDdiVcOcdzZg9lQDNC122ZOYopMjjrUxzyumI4dwjwaUg82OHj7KnlRlc2cYGphaD4rJjDTd9WhUIzKBg8NrZvYDys9yA60syT9nkotXquuVkWYTChtX%2BrorODi2zuqVn6na%2BNLG%2FelxOrD7SildyZZJs0Mw7RQKOQi0cEvBZ7HXWc4WviVAga8SpHcCq4Mp%2FFF%2B1m2R%2BdcefuINPGLa%2FSkMblqqW7EXY1Xh%2BnsjjD4vxX3k8f7BP8UTKeIUqCUR78f7HJqjuvVT8yIGE%2FHcnRUOh7%2BhV8NwsnN%2FykiErtNg4NMwA3Pkro%2BhjS6OdPGDt8a%2BJxnujM9HBnkaOfjhkDJErMzEsiWRcLkXhOPdz8js7%2FOcDkx4TTPXw9ZuCrb%2FvSoHGQ29MgI7AmWyHigClxHAAj9O1HsQe%2BiCvdcevF1JRfHKU2VJJxoQ0b5TSW1ptqDYYwQhIeV9teSRzOpkZufYs3%2FQsXc29e7uGAKyx6yu7nnVVy9waupm%2BFSOQjbu66tXIzC87oQEW76ptvQoygkiBxausE4xN2R48Gbp1ssGIuVxhkytjXHrFiW9NwLeaxXMYz46B3y2DFNREJ9eRguWpYAww%2B7rjxAY6pgFyC%2BuN%2Bqc5XRnAa064rC47FBWyMlijY%2FCwipDUPtA9E14tyrHOZbEcb8t9sGMuIeug9c6ctCIklAyvh%2BcmEkOXOPoMEhuHiqqCbj4JiVNsO2MfX9syckcm%2BanLXkQrwT2Y0jBhVFw3m7pEHfndwhCfhXdQsTedtH%2F%2F3E4vFyqvXs%2F6hE54%2B05TmvFqKsTNY7EN7%2BYBB7%2BE5lwiv66uS94DznwQT0qP&X-Amz-Signature=62a209e293328bd2f94533259e36b39f02e7a65f432ccb2ede1945526ac77252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYKYKD5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHQbEYARP7AbqUaLwdX0UiD6k1luT19wwB3bJK5irYdAiBzM2ak%2BFS3tRWAAAta4KKi8OZYFvjQ0jR8OsSLXXUf%2FyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9i2v%2FOmXshpSB375KtwDOs9ke%2B7Ss7GPZTqwq8bus0JF2DPEF8INDdiVcOcdzZg9lQDNC122ZOYopMjjrUxzyumI4dwjwaUg82OHj7KnlRlc2cYGphaD4rJjDTd9WhUIzKBg8NrZvYDys9yA60syT9nkotXquuVkWYTChtX%2BrorODi2zuqVn6na%2BNLG%2FelxOrD7SildyZZJs0Mw7RQKOQi0cEvBZ7HXWc4WviVAga8SpHcCq4Mp%2FFF%2B1m2R%2BdcefuINPGLa%2FSkMblqqW7EXY1Xh%2BnsjjD4vxX3k8f7BP8UTKeIUqCUR78f7HJqjuvVT8yIGE%2FHcnRUOh7%2BhV8NwsnN%2FykiErtNg4NMwA3Pkro%2BhjS6OdPGDt8a%2BJxnujM9HBnkaOfjhkDJErMzEsiWRcLkXhOPdz8js7%2FOcDkx4TTPXw9ZuCrb%2FvSoHGQ29MgI7AmWyHigClxHAAj9O1HsQe%2BiCvdcevF1JRfHKU2VJJxoQ0b5TSW1ptqDYYwQhIeV9teSRzOpkZufYs3%2FQsXc29e7uGAKyx6yu7nnVVy9waupm%2BFSOQjbu66tXIzC87oQEW76ptvQoygkiBxausE4xN2R48Gbp1ssGIuVxhkytjXHrFiW9NwLeaxXMYz46B3y2DFNREJ9eRguWpYAww%2B7rjxAY6pgFyC%2BuN%2Bqc5XRnAa064rC47FBWyMlijY%2FCwipDUPtA9E14tyrHOZbEcb8t9sGMuIeug9c6ctCIklAyvh%2BcmEkOXOPoMEhuHiqqCbj4JiVNsO2MfX9syckcm%2BanLXkQrwT2Y0jBhVFw3m7pEHfndwhCfhXdQsTedtH%2F%2F3E4vFyqvXs%2F6hE54%2B05TmvFqKsTNY7EN7%2BYBB7%2BE5lwiv66uS94DznwQT0qP&X-Amz-Signature=11c48870789234b63c1c0c27bf6ae40bf5e916b7f9e4c4d75ee1854a64efa65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYKYKD5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHQbEYARP7AbqUaLwdX0UiD6k1luT19wwB3bJK5irYdAiBzM2ak%2BFS3tRWAAAta4KKi8OZYFvjQ0jR8OsSLXXUf%2FyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9i2v%2FOmXshpSB375KtwDOs9ke%2B7Ss7GPZTqwq8bus0JF2DPEF8INDdiVcOcdzZg9lQDNC122ZOYopMjjrUxzyumI4dwjwaUg82OHj7KnlRlc2cYGphaD4rJjDTd9WhUIzKBg8NrZvYDys9yA60syT9nkotXquuVkWYTChtX%2BrorODi2zuqVn6na%2BNLG%2FelxOrD7SildyZZJs0Mw7RQKOQi0cEvBZ7HXWc4WviVAga8SpHcCq4Mp%2FFF%2B1m2R%2BdcefuINPGLa%2FSkMblqqW7EXY1Xh%2BnsjjD4vxX3k8f7BP8UTKeIUqCUR78f7HJqjuvVT8yIGE%2FHcnRUOh7%2BhV8NwsnN%2FykiErtNg4NMwA3Pkro%2BhjS6OdPGDt8a%2BJxnujM9HBnkaOfjhkDJErMzEsiWRcLkXhOPdz8js7%2FOcDkx4TTPXw9ZuCrb%2FvSoHGQ29MgI7AmWyHigClxHAAj9O1HsQe%2BiCvdcevF1JRfHKU2VJJxoQ0b5TSW1ptqDYYwQhIeV9teSRzOpkZufYs3%2FQsXc29e7uGAKyx6yu7nnVVy9waupm%2BFSOQjbu66tXIzC87oQEW76ptvQoygkiBxausE4xN2R48Gbp1ssGIuVxhkytjXHrFiW9NwLeaxXMYz46B3y2DFNREJ9eRguWpYAww%2B7rjxAY6pgFyC%2BuN%2Bqc5XRnAa064rC47FBWyMlijY%2FCwipDUPtA9E14tyrHOZbEcb8t9sGMuIeug9c6ctCIklAyvh%2BcmEkOXOPoMEhuHiqqCbj4JiVNsO2MfX9syckcm%2BanLXkQrwT2Y0jBhVFw3m7pEHfndwhCfhXdQsTedtH%2F%2F3E4vFyqvXs%2F6hE54%2B05TmvFqKsTNY7EN7%2BYBB7%2BE5lwiv66uS94DznwQT0qP&X-Amz-Signature=6cfbdd2a0d9ccfb427a364e4f51ae9db1878e7cd4b96166b533c1653fef61b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYKYKD5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHQbEYARP7AbqUaLwdX0UiD6k1luT19wwB3bJK5irYdAiBzM2ak%2BFS3tRWAAAta4KKi8OZYFvjQ0jR8OsSLXXUf%2FyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9i2v%2FOmXshpSB375KtwDOs9ke%2B7Ss7GPZTqwq8bus0JF2DPEF8INDdiVcOcdzZg9lQDNC122ZOYopMjjrUxzyumI4dwjwaUg82OHj7KnlRlc2cYGphaD4rJjDTd9WhUIzKBg8NrZvYDys9yA60syT9nkotXquuVkWYTChtX%2BrorODi2zuqVn6na%2BNLG%2FelxOrD7SildyZZJs0Mw7RQKOQi0cEvBZ7HXWc4WviVAga8SpHcCq4Mp%2FFF%2B1m2R%2BdcefuINPGLa%2FSkMblqqW7EXY1Xh%2BnsjjD4vxX3k8f7BP8UTKeIUqCUR78f7HJqjuvVT8yIGE%2FHcnRUOh7%2BhV8NwsnN%2FykiErtNg4NMwA3Pkro%2BhjS6OdPGDt8a%2BJxnujM9HBnkaOfjhkDJErMzEsiWRcLkXhOPdz8js7%2FOcDkx4TTPXw9ZuCrb%2FvSoHGQ29MgI7AmWyHigClxHAAj9O1HsQe%2BiCvdcevF1JRfHKU2VJJxoQ0b5TSW1ptqDYYwQhIeV9teSRzOpkZufYs3%2FQsXc29e7uGAKyx6yu7nnVVy9waupm%2BFSOQjbu66tXIzC87oQEW76ptvQoygkiBxausE4xN2R48Gbp1ssGIuVxhkytjXHrFiW9NwLeaxXMYz46B3y2DFNREJ9eRguWpYAww%2B7rjxAY6pgFyC%2BuN%2Bqc5XRnAa064rC47FBWyMlijY%2FCwipDUPtA9E14tyrHOZbEcb8t9sGMuIeug9c6ctCIklAyvh%2BcmEkOXOPoMEhuHiqqCbj4JiVNsO2MfX9syckcm%2BanLXkQrwT2Y0jBhVFw3m7pEHfndwhCfhXdQsTedtH%2F%2F3E4vFyqvXs%2F6hE54%2B05TmvFqKsTNY7EN7%2BYBB7%2BE5lwiv66uS94DznwQT0qP&X-Amz-Signature=2ea2a2fd6d95dd68caf492b4838a018987e893f2cfe9d9afcb24ba6aa8d67ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYKYKD5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHQbEYARP7AbqUaLwdX0UiD6k1luT19wwB3bJK5irYdAiBzM2ak%2BFS3tRWAAAta4KKi8OZYFvjQ0jR8OsSLXXUf%2FyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9i2v%2FOmXshpSB375KtwDOs9ke%2B7Ss7GPZTqwq8bus0JF2DPEF8INDdiVcOcdzZg9lQDNC122ZOYopMjjrUxzyumI4dwjwaUg82OHj7KnlRlc2cYGphaD4rJjDTd9WhUIzKBg8NrZvYDys9yA60syT9nkotXquuVkWYTChtX%2BrorODi2zuqVn6na%2BNLG%2FelxOrD7SildyZZJs0Mw7RQKOQi0cEvBZ7HXWc4WviVAga8SpHcCq4Mp%2FFF%2B1m2R%2BdcefuINPGLa%2FSkMblqqW7EXY1Xh%2BnsjjD4vxX3k8f7BP8UTKeIUqCUR78f7HJqjuvVT8yIGE%2FHcnRUOh7%2BhV8NwsnN%2FykiErtNg4NMwA3Pkro%2BhjS6OdPGDt8a%2BJxnujM9HBnkaOfjhkDJErMzEsiWRcLkXhOPdz8js7%2FOcDkx4TTPXw9ZuCrb%2FvSoHGQ29MgI7AmWyHigClxHAAj9O1HsQe%2BiCvdcevF1JRfHKU2VJJxoQ0b5TSW1ptqDYYwQhIeV9teSRzOpkZufYs3%2FQsXc29e7uGAKyx6yu7nnVVy9waupm%2BFSOQjbu66tXIzC87oQEW76ptvQoygkiBxausE4xN2R48Gbp1ssGIuVxhkytjXHrFiW9NwLeaxXMYz46B3y2DFNREJ9eRguWpYAww%2B7rjxAY6pgFyC%2BuN%2Bqc5XRnAa064rC47FBWyMlijY%2FCwipDUPtA9E14tyrHOZbEcb8t9sGMuIeug9c6ctCIklAyvh%2BcmEkOXOPoMEhuHiqqCbj4JiVNsO2MfX9syckcm%2BanLXkQrwT2Y0jBhVFw3m7pEHfndwhCfhXdQsTedtH%2F%2F3E4vFyqvXs%2F6hE54%2B05TmvFqKsTNY7EN7%2BYBB7%2BE5lwiv66uS94DznwQT0qP&X-Amz-Signature=fa5d24a497ec2cda80b75034cf8fdfc48a323c46a6b7a9ea23d2cfb13e1e2fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

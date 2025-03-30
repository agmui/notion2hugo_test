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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWZKRJA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF8R%2Faa6CQ4dHbHRlVQYsNQV0S2bK00G9WYLkKKB469pAiAB5VLnNF14uxJe9zjXXXa3KGdmQvxqBrl0VlOwBycf1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMikKJsOvolhNCAh8NKtwDH1tPl25j50%2FeF4HtCI82hLEzAWOCVBtmtYjvkHgUo7avwarCSpXsHYVlFq%2BUbeQRFdm36F1Jp0jqF0W0TkhM8TOfzGp%2BxUKtCRzLDNH5U5B6Te89mQ4q3eUyYEArcvCkU5FtJC00ZTrtkIvZjGofpeCUYeQZQmuoGG97D5peMYa%2FX41BvXKmJ0Rjwtd1Dsw%2FWnvjKqDiPDQwyQ5iRZcCC853wjB2avsMyO2kzV3b5GYcjOuGftlW6ISLWdKZ7PszkN%2BCkUxnM5BOgSUNxjUOdXz745UcngRwLt3zJePlRzSwNfSETtgVQEEtuIZWG%2Bk4kEyXs2rwl0rfQ%2FgRrk84dZE5MQTQ9PGM9etSkwsXqmfptWfZ7%2FrLcuv7i1FEjyXbLDt6nS4ojr%2FMVuWIHMPSnilAsZvLDmVBGK9D3NkaMPbGgytYnWQdLSPGLNXjimYI5op9LwcFKoDX3v7inNoTqVrudIiDEn6GKCTwnyT33NL9OxaRpYhudufULPpkz5%2FDWJCrnk4eubZxcpXfVH6cM82kK5e98PVjU3OPmuKLQ7jYHSXW1gvtJBjooaXmGy6XEwH3WSFiHnTssm%2BOEsJGQhzsWWj6kA%2Fa6hiecvHLe6OxBALODQlRjk8vrwQwgv%2BhvwY6pgGqhWXB9Klel0WTL%2FXTN73WWgnjwFPYfN5E2%2F6t3Zlj9W0yArGz7%2FfQJxDaT11FsfEOV3J4RliiMVNGVudtAgNwqn1tjpaJKYgCpduxOjy%2F9CemP3ODPJYj44Hc9oHenwdVwj%2B%2B3BTa15BrY0rZfkaWxRWjGx%2FZ73zLp1qgHvTIsu2FnmX4Ha%2B7SvwdpBs%2FMBI29cLWPxTueOb66TOcMV94rf5PHJw7&X-Amz-Signature=da02ffee09ae20353d31a030fa68665b7fe4cc208a5260e6747f74cf09b14c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWZKRJA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF8R%2Faa6CQ4dHbHRlVQYsNQV0S2bK00G9WYLkKKB469pAiAB5VLnNF14uxJe9zjXXXa3KGdmQvxqBrl0VlOwBycf1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMikKJsOvolhNCAh8NKtwDH1tPl25j50%2FeF4HtCI82hLEzAWOCVBtmtYjvkHgUo7avwarCSpXsHYVlFq%2BUbeQRFdm36F1Jp0jqF0W0TkhM8TOfzGp%2BxUKtCRzLDNH5U5B6Te89mQ4q3eUyYEArcvCkU5FtJC00ZTrtkIvZjGofpeCUYeQZQmuoGG97D5peMYa%2FX41BvXKmJ0Rjwtd1Dsw%2FWnvjKqDiPDQwyQ5iRZcCC853wjB2avsMyO2kzV3b5GYcjOuGftlW6ISLWdKZ7PszkN%2BCkUxnM5BOgSUNxjUOdXz745UcngRwLt3zJePlRzSwNfSETtgVQEEtuIZWG%2Bk4kEyXs2rwl0rfQ%2FgRrk84dZE5MQTQ9PGM9etSkwsXqmfptWfZ7%2FrLcuv7i1FEjyXbLDt6nS4ojr%2FMVuWIHMPSnilAsZvLDmVBGK9D3NkaMPbGgytYnWQdLSPGLNXjimYI5op9LwcFKoDX3v7inNoTqVrudIiDEn6GKCTwnyT33NL9OxaRpYhudufULPpkz5%2FDWJCrnk4eubZxcpXfVH6cM82kK5e98PVjU3OPmuKLQ7jYHSXW1gvtJBjooaXmGy6XEwH3WSFiHnTssm%2BOEsJGQhzsWWj6kA%2Fa6hiecvHLe6OxBALODQlRjk8vrwQwgv%2BhvwY6pgGqhWXB9Klel0WTL%2FXTN73WWgnjwFPYfN5E2%2F6t3Zlj9W0yArGz7%2FfQJxDaT11FsfEOV3J4RliiMVNGVudtAgNwqn1tjpaJKYgCpduxOjy%2F9CemP3ODPJYj44Hc9oHenwdVwj%2B%2B3BTa15BrY0rZfkaWxRWjGx%2FZ73zLp1qgHvTIsu2FnmX4Ha%2B7SvwdpBs%2FMBI29cLWPxTueOb66TOcMV94rf5PHJw7&X-Amz-Signature=eca0a169cc80a7502b137e26bfaccc249f3b2e104e8418fb31df5f956ee2c75e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWZKRJA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF8R%2Faa6CQ4dHbHRlVQYsNQV0S2bK00G9WYLkKKB469pAiAB5VLnNF14uxJe9zjXXXa3KGdmQvxqBrl0VlOwBycf1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMikKJsOvolhNCAh8NKtwDH1tPl25j50%2FeF4HtCI82hLEzAWOCVBtmtYjvkHgUo7avwarCSpXsHYVlFq%2BUbeQRFdm36F1Jp0jqF0W0TkhM8TOfzGp%2BxUKtCRzLDNH5U5B6Te89mQ4q3eUyYEArcvCkU5FtJC00ZTrtkIvZjGofpeCUYeQZQmuoGG97D5peMYa%2FX41BvXKmJ0Rjwtd1Dsw%2FWnvjKqDiPDQwyQ5iRZcCC853wjB2avsMyO2kzV3b5GYcjOuGftlW6ISLWdKZ7PszkN%2BCkUxnM5BOgSUNxjUOdXz745UcngRwLt3zJePlRzSwNfSETtgVQEEtuIZWG%2Bk4kEyXs2rwl0rfQ%2FgRrk84dZE5MQTQ9PGM9etSkwsXqmfptWfZ7%2FrLcuv7i1FEjyXbLDt6nS4ojr%2FMVuWIHMPSnilAsZvLDmVBGK9D3NkaMPbGgytYnWQdLSPGLNXjimYI5op9LwcFKoDX3v7inNoTqVrudIiDEn6GKCTwnyT33NL9OxaRpYhudufULPpkz5%2FDWJCrnk4eubZxcpXfVH6cM82kK5e98PVjU3OPmuKLQ7jYHSXW1gvtJBjooaXmGy6XEwH3WSFiHnTssm%2BOEsJGQhzsWWj6kA%2Fa6hiecvHLe6OxBALODQlRjk8vrwQwgv%2BhvwY6pgGqhWXB9Klel0WTL%2FXTN73WWgnjwFPYfN5E2%2F6t3Zlj9W0yArGz7%2FfQJxDaT11FsfEOV3J4RliiMVNGVudtAgNwqn1tjpaJKYgCpduxOjy%2F9CemP3ODPJYj44Hc9oHenwdVwj%2B%2B3BTa15BrY0rZfkaWxRWjGx%2FZ73zLp1qgHvTIsu2FnmX4Ha%2B7SvwdpBs%2FMBI29cLWPxTueOb66TOcMV94rf5PHJw7&X-Amz-Signature=4625c922aa122996503db7f0f2ad7903bd08e8a1eb70ab5cf3ce6749533cee84&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWZKRJA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF8R%2Faa6CQ4dHbHRlVQYsNQV0S2bK00G9WYLkKKB469pAiAB5VLnNF14uxJe9zjXXXa3KGdmQvxqBrl0VlOwBycf1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMikKJsOvolhNCAh8NKtwDH1tPl25j50%2FeF4HtCI82hLEzAWOCVBtmtYjvkHgUo7avwarCSpXsHYVlFq%2BUbeQRFdm36F1Jp0jqF0W0TkhM8TOfzGp%2BxUKtCRzLDNH5U5B6Te89mQ4q3eUyYEArcvCkU5FtJC00ZTrtkIvZjGofpeCUYeQZQmuoGG97D5peMYa%2FX41BvXKmJ0Rjwtd1Dsw%2FWnvjKqDiPDQwyQ5iRZcCC853wjB2avsMyO2kzV3b5GYcjOuGftlW6ISLWdKZ7PszkN%2BCkUxnM5BOgSUNxjUOdXz745UcngRwLt3zJePlRzSwNfSETtgVQEEtuIZWG%2Bk4kEyXs2rwl0rfQ%2FgRrk84dZE5MQTQ9PGM9etSkwsXqmfptWfZ7%2FrLcuv7i1FEjyXbLDt6nS4ojr%2FMVuWIHMPSnilAsZvLDmVBGK9D3NkaMPbGgytYnWQdLSPGLNXjimYI5op9LwcFKoDX3v7inNoTqVrudIiDEn6GKCTwnyT33NL9OxaRpYhudufULPpkz5%2FDWJCrnk4eubZxcpXfVH6cM82kK5e98PVjU3OPmuKLQ7jYHSXW1gvtJBjooaXmGy6XEwH3WSFiHnTssm%2BOEsJGQhzsWWj6kA%2Fa6hiecvHLe6OxBALODQlRjk8vrwQwgv%2BhvwY6pgGqhWXB9Klel0WTL%2FXTN73WWgnjwFPYfN5E2%2F6t3Zlj9W0yArGz7%2FfQJxDaT11FsfEOV3J4RliiMVNGVudtAgNwqn1tjpaJKYgCpduxOjy%2F9CemP3ODPJYj44Hc9oHenwdVwj%2B%2B3BTa15BrY0rZfkaWxRWjGx%2FZ73zLp1qgHvTIsu2FnmX4Ha%2B7SvwdpBs%2FMBI29cLWPxTueOb66TOcMV94rf5PHJw7&X-Amz-Signature=1fe000a99b6ed4c866921df138650b555b23848acf4f59a3780427804f071bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWZKRJA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF8R%2Faa6CQ4dHbHRlVQYsNQV0S2bK00G9WYLkKKB469pAiAB5VLnNF14uxJe9zjXXXa3KGdmQvxqBrl0VlOwBycf1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMikKJsOvolhNCAh8NKtwDH1tPl25j50%2FeF4HtCI82hLEzAWOCVBtmtYjvkHgUo7avwarCSpXsHYVlFq%2BUbeQRFdm36F1Jp0jqF0W0TkhM8TOfzGp%2BxUKtCRzLDNH5U5B6Te89mQ4q3eUyYEArcvCkU5FtJC00ZTrtkIvZjGofpeCUYeQZQmuoGG97D5peMYa%2FX41BvXKmJ0Rjwtd1Dsw%2FWnvjKqDiPDQwyQ5iRZcCC853wjB2avsMyO2kzV3b5GYcjOuGftlW6ISLWdKZ7PszkN%2BCkUxnM5BOgSUNxjUOdXz745UcngRwLt3zJePlRzSwNfSETtgVQEEtuIZWG%2Bk4kEyXs2rwl0rfQ%2FgRrk84dZE5MQTQ9PGM9etSkwsXqmfptWfZ7%2FrLcuv7i1FEjyXbLDt6nS4ojr%2FMVuWIHMPSnilAsZvLDmVBGK9D3NkaMPbGgytYnWQdLSPGLNXjimYI5op9LwcFKoDX3v7inNoTqVrudIiDEn6GKCTwnyT33NL9OxaRpYhudufULPpkz5%2FDWJCrnk4eubZxcpXfVH6cM82kK5e98PVjU3OPmuKLQ7jYHSXW1gvtJBjooaXmGy6XEwH3WSFiHnTssm%2BOEsJGQhzsWWj6kA%2Fa6hiecvHLe6OxBALODQlRjk8vrwQwgv%2BhvwY6pgGqhWXB9Klel0WTL%2FXTN73WWgnjwFPYfN5E2%2F6t3Zlj9W0yArGz7%2FfQJxDaT11FsfEOV3J4RliiMVNGVudtAgNwqn1tjpaJKYgCpduxOjy%2F9CemP3ODPJYj44Hc9oHenwdVwj%2B%2B3BTa15BrY0rZfkaWxRWjGx%2FZ73zLp1qgHvTIsu2FnmX4Ha%2B7SvwdpBs%2FMBI29cLWPxTueOb66TOcMV94rf5PHJw7&X-Amz-Signature=b4e04177da202ff75e95cadadcf12d1435520c8cdbba703b43522531dbe77088&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWZKRJA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF8R%2Faa6CQ4dHbHRlVQYsNQV0S2bK00G9WYLkKKB469pAiAB5VLnNF14uxJe9zjXXXa3KGdmQvxqBrl0VlOwBycf1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMikKJsOvolhNCAh8NKtwDH1tPl25j50%2FeF4HtCI82hLEzAWOCVBtmtYjvkHgUo7avwarCSpXsHYVlFq%2BUbeQRFdm36F1Jp0jqF0W0TkhM8TOfzGp%2BxUKtCRzLDNH5U5B6Te89mQ4q3eUyYEArcvCkU5FtJC00ZTrtkIvZjGofpeCUYeQZQmuoGG97D5peMYa%2FX41BvXKmJ0Rjwtd1Dsw%2FWnvjKqDiPDQwyQ5iRZcCC853wjB2avsMyO2kzV3b5GYcjOuGftlW6ISLWdKZ7PszkN%2BCkUxnM5BOgSUNxjUOdXz745UcngRwLt3zJePlRzSwNfSETtgVQEEtuIZWG%2Bk4kEyXs2rwl0rfQ%2FgRrk84dZE5MQTQ9PGM9etSkwsXqmfptWfZ7%2FrLcuv7i1FEjyXbLDt6nS4ojr%2FMVuWIHMPSnilAsZvLDmVBGK9D3NkaMPbGgytYnWQdLSPGLNXjimYI5op9LwcFKoDX3v7inNoTqVrudIiDEn6GKCTwnyT33NL9OxaRpYhudufULPpkz5%2FDWJCrnk4eubZxcpXfVH6cM82kK5e98PVjU3OPmuKLQ7jYHSXW1gvtJBjooaXmGy6XEwH3WSFiHnTssm%2BOEsJGQhzsWWj6kA%2Fa6hiecvHLe6OxBALODQlRjk8vrwQwgv%2BhvwY6pgGqhWXB9Klel0WTL%2FXTN73WWgnjwFPYfN5E2%2F6t3Zlj9W0yArGz7%2FfQJxDaT11FsfEOV3J4RliiMVNGVudtAgNwqn1tjpaJKYgCpduxOjy%2F9CemP3ODPJYj44Hc9oHenwdVwj%2B%2B3BTa15BrY0rZfkaWxRWjGx%2FZ73zLp1qgHvTIsu2FnmX4Ha%2B7SvwdpBs%2FMBI29cLWPxTueOb66TOcMV94rf5PHJw7&X-Amz-Signature=1da0948d864e726361301fc2834fa23b42c8fcae11577acef86eb3109a51898e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWZKRJA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF8R%2Faa6CQ4dHbHRlVQYsNQV0S2bK00G9WYLkKKB469pAiAB5VLnNF14uxJe9zjXXXa3KGdmQvxqBrl0VlOwBycf1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMikKJsOvolhNCAh8NKtwDH1tPl25j50%2FeF4HtCI82hLEzAWOCVBtmtYjvkHgUo7avwarCSpXsHYVlFq%2BUbeQRFdm36F1Jp0jqF0W0TkhM8TOfzGp%2BxUKtCRzLDNH5U5B6Te89mQ4q3eUyYEArcvCkU5FtJC00ZTrtkIvZjGofpeCUYeQZQmuoGG97D5peMYa%2FX41BvXKmJ0Rjwtd1Dsw%2FWnvjKqDiPDQwyQ5iRZcCC853wjB2avsMyO2kzV3b5GYcjOuGftlW6ISLWdKZ7PszkN%2BCkUxnM5BOgSUNxjUOdXz745UcngRwLt3zJePlRzSwNfSETtgVQEEtuIZWG%2Bk4kEyXs2rwl0rfQ%2FgRrk84dZE5MQTQ9PGM9etSkwsXqmfptWfZ7%2FrLcuv7i1FEjyXbLDt6nS4ojr%2FMVuWIHMPSnilAsZvLDmVBGK9D3NkaMPbGgytYnWQdLSPGLNXjimYI5op9LwcFKoDX3v7inNoTqVrudIiDEn6GKCTwnyT33NL9OxaRpYhudufULPpkz5%2FDWJCrnk4eubZxcpXfVH6cM82kK5e98PVjU3OPmuKLQ7jYHSXW1gvtJBjooaXmGy6XEwH3WSFiHnTssm%2BOEsJGQhzsWWj6kA%2Fa6hiecvHLe6OxBALODQlRjk8vrwQwgv%2BhvwY6pgGqhWXB9Klel0WTL%2FXTN73WWgnjwFPYfN5E2%2F6t3Zlj9W0yArGz7%2FfQJxDaT11FsfEOV3J4RliiMVNGVudtAgNwqn1tjpaJKYgCpduxOjy%2F9CemP3ODPJYj44Hc9oHenwdVwj%2B%2B3BTa15BrY0rZfkaWxRWjGx%2FZ73zLp1qgHvTIsu2FnmX4Ha%2B7SvwdpBs%2FMBI29cLWPxTueOb66TOcMV94rf5PHJw7&X-Amz-Signature=9175720be3f6319bc5d89e53e780e8eee734318fe265467291646e0ba19f11c5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

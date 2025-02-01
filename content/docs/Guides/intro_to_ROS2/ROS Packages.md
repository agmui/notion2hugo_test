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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRKDHXL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrz06553gQyMQXG0vJZUNNoUgtsES7kzVdYgDH61cm6AiEA84YJCUgpuCstE5930SBvZ3p2DHj6LMqusGuAn0gSoRoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGue5tTwK8bXHzp%2BoCrcA12EDji1p79zHxz%2FM63XRb%2BpujBzg8lSu0IqNU248mUwabiwkP14wtzS%2Fi3%2Fozk6ryDFGb8YJ4R4iTwrsR22KWF9fFH0vYlINjuFs33RC91982V8WjrGqxPfaQyRA21s%2F%2BkdYJ%2BwVUXqUEEBIymeV7e6jL0lChpNFns416JQ3Pa3QKnJhT8q2W8m%2FLy7QkoBMaQxJWWtCeE7aKnwyYQweyHbTcVTX1VzBvK%2B6Q40YjeIkEg3xDXd4eXQqGGu7N6afcW5YemrRZF26oWrkLUjSMMi30caysxHMsTG%2BRK4mdo%2Fqy7DJ0i9pLbD%2Fs92%2FvUB95SzOvnmFqUvaIs5xpTW3efseJlaLY5V%2F9N91s3snn%2FKgk65z7nFXZ1JasMwyZt5XELj6RQJ9pbq3jg22HGgWgpQDSMO4hp7%2FkIB5Z0LCIqfSZHKaDY3r0OjhRerK8o9fblzJol%2FH0Oj4kA1j93cuhjE32XzkF06OLNYruIgFBfOjtX9grtTjbLqR5oRfH2B87I4IrAQVyDGykFz%2FLe8Q2NVEAOdhu507U8QSYgfXaJDbTwJKJmnECtRNgTh84MAfwf9KHZuM4qo%2FLf%2F4ZALLJLaf614rEZ%2B68NDrVAgJqPhkJOjcD3g%2FNbiVI9dMLbH%2BLwGOqUB5fGiakrIfdKGR3ky47p9Z1xN%2FesAa38ftWoxGxMNVScuPAbq1MLrR66nK7J0%2BXSNoayxs4QXqa4%2F2LiomxYGop2MwLk394mhsFYVhhvLtZMBE8U3HQtEb4Dh3LZVlgRn34Kg0SWuSa1HlZGh6hQ5FhYqrIyA1xqQfeCseugW2hQHiK7kMEQgrD61f9A2JQdT5BabOKJ2OxXFshH9PZIN1Yz0dy5j&X-Amz-Signature=db12a55d39f221177a43158f3a5044503bc72974f3a8c986176a39c64810fdaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRKDHXL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrz06553gQyMQXG0vJZUNNoUgtsES7kzVdYgDH61cm6AiEA84YJCUgpuCstE5930SBvZ3p2DHj6LMqusGuAn0gSoRoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGue5tTwK8bXHzp%2BoCrcA12EDji1p79zHxz%2FM63XRb%2BpujBzg8lSu0IqNU248mUwabiwkP14wtzS%2Fi3%2Fozk6ryDFGb8YJ4R4iTwrsR22KWF9fFH0vYlINjuFs33RC91982V8WjrGqxPfaQyRA21s%2F%2BkdYJ%2BwVUXqUEEBIymeV7e6jL0lChpNFns416JQ3Pa3QKnJhT8q2W8m%2FLy7QkoBMaQxJWWtCeE7aKnwyYQweyHbTcVTX1VzBvK%2B6Q40YjeIkEg3xDXd4eXQqGGu7N6afcW5YemrRZF26oWrkLUjSMMi30caysxHMsTG%2BRK4mdo%2Fqy7DJ0i9pLbD%2Fs92%2FvUB95SzOvnmFqUvaIs5xpTW3efseJlaLY5V%2F9N91s3snn%2FKgk65z7nFXZ1JasMwyZt5XELj6RQJ9pbq3jg22HGgWgpQDSMO4hp7%2FkIB5Z0LCIqfSZHKaDY3r0OjhRerK8o9fblzJol%2FH0Oj4kA1j93cuhjE32XzkF06OLNYruIgFBfOjtX9grtTjbLqR5oRfH2B87I4IrAQVyDGykFz%2FLe8Q2NVEAOdhu507U8QSYgfXaJDbTwJKJmnECtRNgTh84MAfwf9KHZuM4qo%2FLf%2F4ZALLJLaf614rEZ%2B68NDrVAgJqPhkJOjcD3g%2FNbiVI9dMLbH%2BLwGOqUB5fGiakrIfdKGR3ky47p9Z1xN%2FesAa38ftWoxGxMNVScuPAbq1MLrR66nK7J0%2BXSNoayxs4QXqa4%2F2LiomxYGop2MwLk394mhsFYVhhvLtZMBE8U3HQtEb4Dh3LZVlgRn34Kg0SWuSa1HlZGh6hQ5FhYqrIyA1xqQfeCseugW2hQHiK7kMEQgrD61f9A2JQdT5BabOKJ2OxXFshH9PZIN1Yz0dy5j&X-Amz-Signature=c88c45cfdddcc20b43f640987a0031f10a8759e5b5a44afcb73556afb8e05034&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRKDHXL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrz06553gQyMQXG0vJZUNNoUgtsES7kzVdYgDH61cm6AiEA84YJCUgpuCstE5930SBvZ3p2DHj6LMqusGuAn0gSoRoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGue5tTwK8bXHzp%2BoCrcA12EDji1p79zHxz%2FM63XRb%2BpujBzg8lSu0IqNU248mUwabiwkP14wtzS%2Fi3%2Fozk6ryDFGb8YJ4R4iTwrsR22KWF9fFH0vYlINjuFs33RC91982V8WjrGqxPfaQyRA21s%2F%2BkdYJ%2BwVUXqUEEBIymeV7e6jL0lChpNFns416JQ3Pa3QKnJhT8q2W8m%2FLy7QkoBMaQxJWWtCeE7aKnwyYQweyHbTcVTX1VzBvK%2B6Q40YjeIkEg3xDXd4eXQqGGu7N6afcW5YemrRZF26oWrkLUjSMMi30caysxHMsTG%2BRK4mdo%2Fqy7DJ0i9pLbD%2Fs92%2FvUB95SzOvnmFqUvaIs5xpTW3efseJlaLY5V%2F9N91s3snn%2FKgk65z7nFXZ1JasMwyZt5XELj6RQJ9pbq3jg22HGgWgpQDSMO4hp7%2FkIB5Z0LCIqfSZHKaDY3r0OjhRerK8o9fblzJol%2FH0Oj4kA1j93cuhjE32XzkF06OLNYruIgFBfOjtX9grtTjbLqR5oRfH2B87I4IrAQVyDGykFz%2FLe8Q2NVEAOdhu507U8QSYgfXaJDbTwJKJmnECtRNgTh84MAfwf9KHZuM4qo%2FLf%2F4ZALLJLaf614rEZ%2B68NDrVAgJqPhkJOjcD3g%2FNbiVI9dMLbH%2BLwGOqUB5fGiakrIfdKGR3ky47p9Z1xN%2FesAa38ftWoxGxMNVScuPAbq1MLrR66nK7J0%2BXSNoayxs4QXqa4%2F2LiomxYGop2MwLk394mhsFYVhhvLtZMBE8U3HQtEb4Dh3LZVlgRn34Kg0SWuSa1HlZGh6hQ5FhYqrIyA1xqQfeCseugW2hQHiK7kMEQgrD61f9A2JQdT5BabOKJ2OxXFshH9PZIN1Yz0dy5j&X-Amz-Signature=0f9950cab2cf208e8f5caf8168c88ae6deedefc190ee26cbe70aaf3d18925417&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRKDHXL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrz06553gQyMQXG0vJZUNNoUgtsES7kzVdYgDH61cm6AiEA84YJCUgpuCstE5930SBvZ3p2DHj6LMqusGuAn0gSoRoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGue5tTwK8bXHzp%2BoCrcA12EDji1p79zHxz%2FM63XRb%2BpujBzg8lSu0IqNU248mUwabiwkP14wtzS%2Fi3%2Fozk6ryDFGb8YJ4R4iTwrsR22KWF9fFH0vYlINjuFs33RC91982V8WjrGqxPfaQyRA21s%2F%2BkdYJ%2BwVUXqUEEBIymeV7e6jL0lChpNFns416JQ3Pa3QKnJhT8q2W8m%2FLy7QkoBMaQxJWWtCeE7aKnwyYQweyHbTcVTX1VzBvK%2B6Q40YjeIkEg3xDXd4eXQqGGu7N6afcW5YemrRZF26oWrkLUjSMMi30caysxHMsTG%2BRK4mdo%2Fqy7DJ0i9pLbD%2Fs92%2FvUB95SzOvnmFqUvaIs5xpTW3efseJlaLY5V%2F9N91s3snn%2FKgk65z7nFXZ1JasMwyZt5XELj6RQJ9pbq3jg22HGgWgpQDSMO4hp7%2FkIB5Z0LCIqfSZHKaDY3r0OjhRerK8o9fblzJol%2FH0Oj4kA1j93cuhjE32XzkF06OLNYruIgFBfOjtX9grtTjbLqR5oRfH2B87I4IrAQVyDGykFz%2FLe8Q2NVEAOdhu507U8QSYgfXaJDbTwJKJmnECtRNgTh84MAfwf9KHZuM4qo%2FLf%2F4ZALLJLaf614rEZ%2B68NDrVAgJqPhkJOjcD3g%2FNbiVI9dMLbH%2BLwGOqUB5fGiakrIfdKGR3ky47p9Z1xN%2FesAa38ftWoxGxMNVScuPAbq1MLrR66nK7J0%2BXSNoayxs4QXqa4%2F2LiomxYGop2MwLk394mhsFYVhhvLtZMBE8U3HQtEb4Dh3LZVlgRn34Kg0SWuSa1HlZGh6hQ5FhYqrIyA1xqQfeCseugW2hQHiK7kMEQgrD61f9A2JQdT5BabOKJ2OxXFshH9PZIN1Yz0dy5j&X-Amz-Signature=12df6b088426a8519097073d19f191901a8a907a595b95c04549fa3f3749a171&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRKDHXL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrz06553gQyMQXG0vJZUNNoUgtsES7kzVdYgDH61cm6AiEA84YJCUgpuCstE5930SBvZ3p2DHj6LMqusGuAn0gSoRoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGue5tTwK8bXHzp%2BoCrcA12EDji1p79zHxz%2FM63XRb%2BpujBzg8lSu0IqNU248mUwabiwkP14wtzS%2Fi3%2Fozk6ryDFGb8YJ4R4iTwrsR22KWF9fFH0vYlINjuFs33RC91982V8WjrGqxPfaQyRA21s%2F%2BkdYJ%2BwVUXqUEEBIymeV7e6jL0lChpNFns416JQ3Pa3QKnJhT8q2W8m%2FLy7QkoBMaQxJWWtCeE7aKnwyYQweyHbTcVTX1VzBvK%2B6Q40YjeIkEg3xDXd4eXQqGGu7N6afcW5YemrRZF26oWrkLUjSMMi30caysxHMsTG%2BRK4mdo%2Fqy7DJ0i9pLbD%2Fs92%2FvUB95SzOvnmFqUvaIs5xpTW3efseJlaLY5V%2F9N91s3snn%2FKgk65z7nFXZ1JasMwyZt5XELj6RQJ9pbq3jg22HGgWgpQDSMO4hp7%2FkIB5Z0LCIqfSZHKaDY3r0OjhRerK8o9fblzJol%2FH0Oj4kA1j93cuhjE32XzkF06OLNYruIgFBfOjtX9grtTjbLqR5oRfH2B87I4IrAQVyDGykFz%2FLe8Q2NVEAOdhu507U8QSYgfXaJDbTwJKJmnECtRNgTh84MAfwf9KHZuM4qo%2FLf%2F4ZALLJLaf614rEZ%2B68NDrVAgJqPhkJOjcD3g%2FNbiVI9dMLbH%2BLwGOqUB5fGiakrIfdKGR3ky47p9Z1xN%2FesAa38ftWoxGxMNVScuPAbq1MLrR66nK7J0%2BXSNoayxs4QXqa4%2F2LiomxYGop2MwLk394mhsFYVhhvLtZMBE8U3HQtEb4Dh3LZVlgRn34Kg0SWuSa1HlZGh6hQ5FhYqrIyA1xqQfeCseugW2hQHiK7kMEQgrD61f9A2JQdT5BabOKJ2OxXFshH9PZIN1Yz0dy5j&X-Amz-Signature=c8de5f2793dcbcaff9d145e573a0947eb094538dd2347655f75fff0a134d2929&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRKDHXL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrz06553gQyMQXG0vJZUNNoUgtsES7kzVdYgDH61cm6AiEA84YJCUgpuCstE5930SBvZ3p2DHj6LMqusGuAn0gSoRoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGue5tTwK8bXHzp%2BoCrcA12EDji1p79zHxz%2FM63XRb%2BpujBzg8lSu0IqNU248mUwabiwkP14wtzS%2Fi3%2Fozk6ryDFGb8YJ4R4iTwrsR22KWF9fFH0vYlINjuFs33RC91982V8WjrGqxPfaQyRA21s%2F%2BkdYJ%2BwVUXqUEEBIymeV7e6jL0lChpNFns416JQ3Pa3QKnJhT8q2W8m%2FLy7QkoBMaQxJWWtCeE7aKnwyYQweyHbTcVTX1VzBvK%2B6Q40YjeIkEg3xDXd4eXQqGGu7N6afcW5YemrRZF26oWrkLUjSMMi30caysxHMsTG%2BRK4mdo%2Fqy7DJ0i9pLbD%2Fs92%2FvUB95SzOvnmFqUvaIs5xpTW3efseJlaLY5V%2F9N91s3snn%2FKgk65z7nFXZ1JasMwyZt5XELj6RQJ9pbq3jg22HGgWgpQDSMO4hp7%2FkIB5Z0LCIqfSZHKaDY3r0OjhRerK8o9fblzJol%2FH0Oj4kA1j93cuhjE32XzkF06OLNYruIgFBfOjtX9grtTjbLqR5oRfH2B87I4IrAQVyDGykFz%2FLe8Q2NVEAOdhu507U8QSYgfXaJDbTwJKJmnECtRNgTh84MAfwf9KHZuM4qo%2FLf%2F4ZALLJLaf614rEZ%2B68NDrVAgJqPhkJOjcD3g%2FNbiVI9dMLbH%2BLwGOqUB5fGiakrIfdKGR3ky47p9Z1xN%2FesAa38ftWoxGxMNVScuPAbq1MLrR66nK7J0%2BXSNoayxs4QXqa4%2F2LiomxYGop2MwLk394mhsFYVhhvLtZMBE8U3HQtEb4Dh3LZVlgRn34Kg0SWuSa1HlZGh6hQ5FhYqrIyA1xqQfeCseugW2hQHiK7kMEQgrD61f9A2JQdT5BabOKJ2OxXFshH9PZIN1Yz0dy5j&X-Amz-Signature=9756cad1ec9733cdcab33d7919cad770b3d5457958dfe87b015a33be437c1803&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRKDHXL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrz06553gQyMQXG0vJZUNNoUgtsES7kzVdYgDH61cm6AiEA84YJCUgpuCstE5930SBvZ3p2DHj6LMqusGuAn0gSoRoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGue5tTwK8bXHzp%2BoCrcA12EDji1p79zHxz%2FM63XRb%2BpujBzg8lSu0IqNU248mUwabiwkP14wtzS%2Fi3%2Fozk6ryDFGb8YJ4R4iTwrsR22KWF9fFH0vYlINjuFs33RC91982V8WjrGqxPfaQyRA21s%2F%2BkdYJ%2BwVUXqUEEBIymeV7e6jL0lChpNFns416JQ3Pa3QKnJhT8q2W8m%2FLy7QkoBMaQxJWWtCeE7aKnwyYQweyHbTcVTX1VzBvK%2B6Q40YjeIkEg3xDXd4eXQqGGu7N6afcW5YemrRZF26oWrkLUjSMMi30caysxHMsTG%2BRK4mdo%2Fqy7DJ0i9pLbD%2Fs92%2FvUB95SzOvnmFqUvaIs5xpTW3efseJlaLY5V%2F9N91s3snn%2FKgk65z7nFXZ1JasMwyZt5XELj6RQJ9pbq3jg22HGgWgpQDSMO4hp7%2FkIB5Z0LCIqfSZHKaDY3r0OjhRerK8o9fblzJol%2FH0Oj4kA1j93cuhjE32XzkF06OLNYruIgFBfOjtX9grtTjbLqR5oRfH2B87I4IrAQVyDGykFz%2FLe8Q2NVEAOdhu507U8QSYgfXaJDbTwJKJmnECtRNgTh84MAfwf9KHZuM4qo%2FLf%2F4ZALLJLaf614rEZ%2B68NDrVAgJqPhkJOjcD3g%2FNbiVI9dMLbH%2BLwGOqUB5fGiakrIfdKGR3ky47p9Z1xN%2FesAa38ftWoxGxMNVScuPAbq1MLrR66nK7J0%2BXSNoayxs4QXqa4%2F2LiomxYGop2MwLk394mhsFYVhhvLtZMBE8U3HQtEb4Dh3LZVlgRn34Kg0SWuSa1HlZGh6hQ5FhYqrIyA1xqQfeCseugW2hQHiK7kMEQgrD61f9A2JQdT5BabOKJ2OxXFshH9PZIN1Yz0dy5j&X-Amz-Signature=a98eb558decc13cbba2bb6a54d5109c6912a623341809b4782b811c97f2129ed&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

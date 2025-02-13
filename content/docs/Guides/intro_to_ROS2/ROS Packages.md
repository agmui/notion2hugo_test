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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBYQNGB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ctshtWD4wHv74RqP5QJ6M%2F1n2zRUISy9ZR7ysWUlpgIgNkiTNF6M7JMA%2FhNRf3ZhWQn99hVbOTBYKy%2Bl%2B7SAOqwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCoSbOGhqnOrQ%2F0FqyrcA7%2B4Wo5kaOAtubC0Wno%2BALQkRa59NI9KUan9hXZQuJn9mvCUFCzP%2BeTR8LPNp8cocIzV5ucoGhF7sc60bE7Z0jX4btTIPyvXV%2FN2dcz9rWbjw1ttKTw%2BriaAvQCwi%2BWOdXZv6PTvJOse6Vwdvk5nhYMhrkRXXyCX1YY3CfZF9gHNfNYMtWbhxo0Gb0bqKXMfJekgKfXA0zLmV9uNPqknPK9GClkwmB%2FPcPlA0HgKn%2FD51oaivmC9l4P%2BWCpRQHzKPtGR5G%2FS0LkjgUwPXI%2BdpovFW4Yii%2BsKze6kfN%2BUhyzTutNvElZNWYZybqLuhvvAP2ztAnVP8pTejxwotYcE1Dp%2B7EXNzNDQnnwSYnvY1gHsC5zm%2BmNFaXoMdOg5%2BkNzC9%2BU%2FRscUe3Di2ZsvUoVlYYY3Lx1SmEwTjrguqYi0t9jibvYxnb%2Fpcx3dI5NXiv1X3i%2BTUnuMjBrjXSaj0USbiaIDnHlsHucNbj4%2FkD77h3U2sLtyufMICJLDBKcGZP6lRa3K14bR1ZvsRwt6Z4fMwG%2FjfAka5rfxbw3E17w8erKjNf%2FihXuvWdLiob%2BVpscF%2B7pJsZZ8fS0HZRseS%2FaWczvBXlJz7ZNpWjnn8kwgJvHK57nY0Q4%2FjEObFl6MJTKtr0GOqUBJu6rXaVWvwTeTXFgYMG2CsKhtlDFJKbz2BneKlnze6SC7IvrtUPGmcPSH9Qg1Zg%2FAbkQ%2B3gCx7sG8VHYhAdQWcrw2dX7qogSkuL%2FhnJX%2F3DhhPjtznRg3feOxGF8jr6rAyUkXa3%2Fxnum0BgZS01QA7sXjIDz9zihZAnKA9qBIfEb0clRK3nLCustDnCnm54kB%2BsXaOknOfZ%2BFKOGphEHc9WwSn%2FT&X-Amz-Signature=fcac784ef64c7a0240499e56344b8b2878a5715beb102cf60eedba670278ebbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBYQNGB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ctshtWD4wHv74RqP5QJ6M%2F1n2zRUISy9ZR7ysWUlpgIgNkiTNF6M7JMA%2FhNRf3ZhWQn99hVbOTBYKy%2Bl%2B7SAOqwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCoSbOGhqnOrQ%2F0FqyrcA7%2B4Wo5kaOAtubC0Wno%2BALQkRa59NI9KUan9hXZQuJn9mvCUFCzP%2BeTR8LPNp8cocIzV5ucoGhF7sc60bE7Z0jX4btTIPyvXV%2FN2dcz9rWbjw1ttKTw%2BriaAvQCwi%2BWOdXZv6PTvJOse6Vwdvk5nhYMhrkRXXyCX1YY3CfZF9gHNfNYMtWbhxo0Gb0bqKXMfJekgKfXA0zLmV9uNPqknPK9GClkwmB%2FPcPlA0HgKn%2FD51oaivmC9l4P%2BWCpRQHzKPtGR5G%2FS0LkjgUwPXI%2BdpovFW4Yii%2BsKze6kfN%2BUhyzTutNvElZNWYZybqLuhvvAP2ztAnVP8pTejxwotYcE1Dp%2B7EXNzNDQnnwSYnvY1gHsC5zm%2BmNFaXoMdOg5%2BkNzC9%2BU%2FRscUe3Di2ZsvUoVlYYY3Lx1SmEwTjrguqYi0t9jibvYxnb%2Fpcx3dI5NXiv1X3i%2BTUnuMjBrjXSaj0USbiaIDnHlsHucNbj4%2FkD77h3U2sLtyufMICJLDBKcGZP6lRa3K14bR1ZvsRwt6Z4fMwG%2FjfAka5rfxbw3E17w8erKjNf%2FihXuvWdLiob%2BVpscF%2B7pJsZZ8fS0HZRseS%2FaWczvBXlJz7ZNpWjnn8kwgJvHK57nY0Q4%2FjEObFl6MJTKtr0GOqUBJu6rXaVWvwTeTXFgYMG2CsKhtlDFJKbz2BneKlnze6SC7IvrtUPGmcPSH9Qg1Zg%2FAbkQ%2B3gCx7sG8VHYhAdQWcrw2dX7qogSkuL%2FhnJX%2F3DhhPjtznRg3feOxGF8jr6rAyUkXa3%2Fxnum0BgZS01QA7sXjIDz9zihZAnKA9qBIfEb0clRK3nLCustDnCnm54kB%2BsXaOknOfZ%2BFKOGphEHc9WwSn%2FT&X-Amz-Signature=1da32431690a3d16669408e18f87582884ded4a09d796ded4a43da809f0fec8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBYQNGB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ctshtWD4wHv74RqP5QJ6M%2F1n2zRUISy9ZR7ysWUlpgIgNkiTNF6M7JMA%2FhNRf3ZhWQn99hVbOTBYKy%2Bl%2B7SAOqwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCoSbOGhqnOrQ%2F0FqyrcA7%2B4Wo5kaOAtubC0Wno%2BALQkRa59NI9KUan9hXZQuJn9mvCUFCzP%2BeTR8LPNp8cocIzV5ucoGhF7sc60bE7Z0jX4btTIPyvXV%2FN2dcz9rWbjw1ttKTw%2BriaAvQCwi%2BWOdXZv6PTvJOse6Vwdvk5nhYMhrkRXXyCX1YY3CfZF9gHNfNYMtWbhxo0Gb0bqKXMfJekgKfXA0zLmV9uNPqknPK9GClkwmB%2FPcPlA0HgKn%2FD51oaivmC9l4P%2BWCpRQHzKPtGR5G%2FS0LkjgUwPXI%2BdpovFW4Yii%2BsKze6kfN%2BUhyzTutNvElZNWYZybqLuhvvAP2ztAnVP8pTejxwotYcE1Dp%2B7EXNzNDQnnwSYnvY1gHsC5zm%2BmNFaXoMdOg5%2BkNzC9%2BU%2FRscUe3Di2ZsvUoVlYYY3Lx1SmEwTjrguqYi0t9jibvYxnb%2Fpcx3dI5NXiv1X3i%2BTUnuMjBrjXSaj0USbiaIDnHlsHucNbj4%2FkD77h3U2sLtyufMICJLDBKcGZP6lRa3K14bR1ZvsRwt6Z4fMwG%2FjfAka5rfxbw3E17w8erKjNf%2FihXuvWdLiob%2BVpscF%2B7pJsZZ8fS0HZRseS%2FaWczvBXlJz7ZNpWjnn8kwgJvHK57nY0Q4%2FjEObFl6MJTKtr0GOqUBJu6rXaVWvwTeTXFgYMG2CsKhtlDFJKbz2BneKlnze6SC7IvrtUPGmcPSH9Qg1Zg%2FAbkQ%2B3gCx7sG8VHYhAdQWcrw2dX7qogSkuL%2FhnJX%2F3DhhPjtznRg3feOxGF8jr6rAyUkXa3%2Fxnum0BgZS01QA7sXjIDz9zihZAnKA9qBIfEb0clRK3nLCustDnCnm54kB%2BsXaOknOfZ%2BFKOGphEHc9WwSn%2FT&X-Amz-Signature=8a318da24a093a6c1fd521ef429fc2e5dcaed97816e865650b864988991f92e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBYQNGB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ctshtWD4wHv74RqP5QJ6M%2F1n2zRUISy9ZR7ysWUlpgIgNkiTNF6M7JMA%2FhNRf3ZhWQn99hVbOTBYKy%2Bl%2B7SAOqwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCoSbOGhqnOrQ%2F0FqyrcA7%2B4Wo5kaOAtubC0Wno%2BALQkRa59NI9KUan9hXZQuJn9mvCUFCzP%2BeTR8LPNp8cocIzV5ucoGhF7sc60bE7Z0jX4btTIPyvXV%2FN2dcz9rWbjw1ttKTw%2BriaAvQCwi%2BWOdXZv6PTvJOse6Vwdvk5nhYMhrkRXXyCX1YY3CfZF9gHNfNYMtWbhxo0Gb0bqKXMfJekgKfXA0zLmV9uNPqknPK9GClkwmB%2FPcPlA0HgKn%2FD51oaivmC9l4P%2BWCpRQHzKPtGR5G%2FS0LkjgUwPXI%2BdpovFW4Yii%2BsKze6kfN%2BUhyzTutNvElZNWYZybqLuhvvAP2ztAnVP8pTejxwotYcE1Dp%2B7EXNzNDQnnwSYnvY1gHsC5zm%2BmNFaXoMdOg5%2BkNzC9%2BU%2FRscUe3Di2ZsvUoVlYYY3Lx1SmEwTjrguqYi0t9jibvYxnb%2Fpcx3dI5NXiv1X3i%2BTUnuMjBrjXSaj0USbiaIDnHlsHucNbj4%2FkD77h3U2sLtyufMICJLDBKcGZP6lRa3K14bR1ZvsRwt6Z4fMwG%2FjfAka5rfxbw3E17w8erKjNf%2FihXuvWdLiob%2BVpscF%2B7pJsZZ8fS0HZRseS%2FaWczvBXlJz7ZNpWjnn8kwgJvHK57nY0Q4%2FjEObFl6MJTKtr0GOqUBJu6rXaVWvwTeTXFgYMG2CsKhtlDFJKbz2BneKlnze6SC7IvrtUPGmcPSH9Qg1Zg%2FAbkQ%2B3gCx7sG8VHYhAdQWcrw2dX7qogSkuL%2FhnJX%2F3DhhPjtznRg3feOxGF8jr6rAyUkXa3%2Fxnum0BgZS01QA7sXjIDz9zihZAnKA9qBIfEb0clRK3nLCustDnCnm54kB%2BsXaOknOfZ%2BFKOGphEHc9WwSn%2FT&X-Amz-Signature=8440c1fa766739b32a18459fab8dc08a1b7f1f40a1bbf995393b179bb4d63c45&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBYQNGB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ctshtWD4wHv74RqP5QJ6M%2F1n2zRUISy9ZR7ysWUlpgIgNkiTNF6M7JMA%2FhNRf3ZhWQn99hVbOTBYKy%2Bl%2B7SAOqwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCoSbOGhqnOrQ%2F0FqyrcA7%2B4Wo5kaOAtubC0Wno%2BALQkRa59NI9KUan9hXZQuJn9mvCUFCzP%2BeTR8LPNp8cocIzV5ucoGhF7sc60bE7Z0jX4btTIPyvXV%2FN2dcz9rWbjw1ttKTw%2BriaAvQCwi%2BWOdXZv6PTvJOse6Vwdvk5nhYMhrkRXXyCX1YY3CfZF9gHNfNYMtWbhxo0Gb0bqKXMfJekgKfXA0zLmV9uNPqknPK9GClkwmB%2FPcPlA0HgKn%2FD51oaivmC9l4P%2BWCpRQHzKPtGR5G%2FS0LkjgUwPXI%2BdpovFW4Yii%2BsKze6kfN%2BUhyzTutNvElZNWYZybqLuhvvAP2ztAnVP8pTejxwotYcE1Dp%2B7EXNzNDQnnwSYnvY1gHsC5zm%2BmNFaXoMdOg5%2BkNzC9%2BU%2FRscUe3Di2ZsvUoVlYYY3Lx1SmEwTjrguqYi0t9jibvYxnb%2Fpcx3dI5NXiv1X3i%2BTUnuMjBrjXSaj0USbiaIDnHlsHucNbj4%2FkD77h3U2sLtyufMICJLDBKcGZP6lRa3K14bR1ZvsRwt6Z4fMwG%2FjfAka5rfxbw3E17w8erKjNf%2FihXuvWdLiob%2BVpscF%2B7pJsZZ8fS0HZRseS%2FaWczvBXlJz7ZNpWjnn8kwgJvHK57nY0Q4%2FjEObFl6MJTKtr0GOqUBJu6rXaVWvwTeTXFgYMG2CsKhtlDFJKbz2BneKlnze6SC7IvrtUPGmcPSH9Qg1Zg%2FAbkQ%2B3gCx7sG8VHYhAdQWcrw2dX7qogSkuL%2FhnJX%2F3DhhPjtznRg3feOxGF8jr6rAyUkXa3%2Fxnum0BgZS01QA7sXjIDz9zihZAnKA9qBIfEb0clRK3nLCustDnCnm54kB%2BsXaOknOfZ%2BFKOGphEHc9WwSn%2FT&X-Amz-Signature=6da7d841895276f53dc99f63cb3c15f5380ecb17760df6136b20ffdeb5e960bd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBYQNGB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ctshtWD4wHv74RqP5QJ6M%2F1n2zRUISy9ZR7ysWUlpgIgNkiTNF6M7JMA%2FhNRf3ZhWQn99hVbOTBYKy%2Bl%2B7SAOqwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCoSbOGhqnOrQ%2F0FqyrcA7%2B4Wo5kaOAtubC0Wno%2BALQkRa59NI9KUan9hXZQuJn9mvCUFCzP%2BeTR8LPNp8cocIzV5ucoGhF7sc60bE7Z0jX4btTIPyvXV%2FN2dcz9rWbjw1ttKTw%2BriaAvQCwi%2BWOdXZv6PTvJOse6Vwdvk5nhYMhrkRXXyCX1YY3CfZF9gHNfNYMtWbhxo0Gb0bqKXMfJekgKfXA0zLmV9uNPqknPK9GClkwmB%2FPcPlA0HgKn%2FD51oaivmC9l4P%2BWCpRQHzKPtGR5G%2FS0LkjgUwPXI%2BdpovFW4Yii%2BsKze6kfN%2BUhyzTutNvElZNWYZybqLuhvvAP2ztAnVP8pTejxwotYcE1Dp%2B7EXNzNDQnnwSYnvY1gHsC5zm%2BmNFaXoMdOg5%2BkNzC9%2BU%2FRscUe3Di2ZsvUoVlYYY3Lx1SmEwTjrguqYi0t9jibvYxnb%2Fpcx3dI5NXiv1X3i%2BTUnuMjBrjXSaj0USbiaIDnHlsHucNbj4%2FkD77h3U2sLtyufMICJLDBKcGZP6lRa3K14bR1ZvsRwt6Z4fMwG%2FjfAka5rfxbw3E17w8erKjNf%2FihXuvWdLiob%2BVpscF%2B7pJsZZ8fS0HZRseS%2FaWczvBXlJz7ZNpWjnn8kwgJvHK57nY0Q4%2FjEObFl6MJTKtr0GOqUBJu6rXaVWvwTeTXFgYMG2CsKhtlDFJKbz2BneKlnze6SC7IvrtUPGmcPSH9Qg1Zg%2FAbkQ%2B3gCx7sG8VHYhAdQWcrw2dX7qogSkuL%2FhnJX%2F3DhhPjtznRg3feOxGF8jr6rAyUkXa3%2Fxnum0BgZS01QA7sXjIDz9zihZAnKA9qBIfEb0clRK3nLCustDnCnm54kB%2BsXaOknOfZ%2BFKOGphEHc9WwSn%2FT&X-Amz-Signature=2b204dc44ce05f6ceade9df63fb395dbe68acbcf4df9dcaec947c5fbf8d40676&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBYQNGB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ctshtWD4wHv74RqP5QJ6M%2F1n2zRUISy9ZR7ysWUlpgIgNkiTNF6M7JMA%2FhNRf3ZhWQn99hVbOTBYKy%2Bl%2B7SAOqwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCoSbOGhqnOrQ%2F0FqyrcA7%2B4Wo5kaOAtubC0Wno%2BALQkRa59NI9KUan9hXZQuJn9mvCUFCzP%2BeTR8LPNp8cocIzV5ucoGhF7sc60bE7Z0jX4btTIPyvXV%2FN2dcz9rWbjw1ttKTw%2BriaAvQCwi%2BWOdXZv6PTvJOse6Vwdvk5nhYMhrkRXXyCX1YY3CfZF9gHNfNYMtWbhxo0Gb0bqKXMfJekgKfXA0zLmV9uNPqknPK9GClkwmB%2FPcPlA0HgKn%2FD51oaivmC9l4P%2BWCpRQHzKPtGR5G%2FS0LkjgUwPXI%2BdpovFW4Yii%2BsKze6kfN%2BUhyzTutNvElZNWYZybqLuhvvAP2ztAnVP8pTejxwotYcE1Dp%2B7EXNzNDQnnwSYnvY1gHsC5zm%2BmNFaXoMdOg5%2BkNzC9%2BU%2FRscUe3Di2ZsvUoVlYYY3Lx1SmEwTjrguqYi0t9jibvYxnb%2Fpcx3dI5NXiv1X3i%2BTUnuMjBrjXSaj0USbiaIDnHlsHucNbj4%2FkD77h3U2sLtyufMICJLDBKcGZP6lRa3K14bR1ZvsRwt6Z4fMwG%2FjfAka5rfxbw3E17w8erKjNf%2FihXuvWdLiob%2BVpscF%2B7pJsZZ8fS0HZRseS%2FaWczvBXlJz7ZNpWjnn8kwgJvHK57nY0Q4%2FjEObFl6MJTKtr0GOqUBJu6rXaVWvwTeTXFgYMG2CsKhtlDFJKbz2BneKlnze6SC7IvrtUPGmcPSH9Qg1Zg%2FAbkQ%2B3gCx7sG8VHYhAdQWcrw2dX7qogSkuL%2FhnJX%2F3DhhPjtznRg3feOxGF8jr6rAyUkXa3%2Fxnum0BgZS01QA7sXjIDz9zihZAnKA9qBIfEb0clRK3nLCustDnCnm54kB%2BsXaOknOfZ%2BFKOGphEHc9WwSn%2FT&X-Amz-Signature=0e3c7709552586600a09a7ba58593290aa91c8e4b5c6e294faa850c3094a978c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

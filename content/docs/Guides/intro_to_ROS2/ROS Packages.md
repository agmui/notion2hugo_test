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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RR44KKH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw8psLn5Z9uH%2FVXs6cgkDYu%2Bf%2BJ00ig%2FWj28l8FpqXiAiEAnzUA8XeSZbTIQhDNsuYn%2Bc8vW%2Bku3%2BiIu7%2BqQPbHHfwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDzvRfrhNWrDya%2FMRyrcA77Ofj4x2nko45%2BlGIN8nrTLtgIggB%2B%2BYGkYZWvJn2y2z0SgZGAFGExJGccCtRzfcJsaz70pTofAAzKvID3TRzav1z233bKq8f1C8Sqg7KPKiFH0%2Bg%2F9wyZK1Aq8JxCHgtur2Xk0EL2mDySdI908eLP8qvq5AH9jrVueW0zNV7BYlgqCqnY%2BuW%2FgDBvp5iWPszP5wGZnXXiu7N2rDE3kOxGsyJWU%2BgHYXx4dL6RFkz0ryH3ppxrW6Qp24g%2FdkQC%2BUy0MZmw15WzpMfOqYiOHAneL4hgiBfFtyK%2Fypt5UBlc3Kxf65J59VFgjk8o32tLheLXvbfIRJAltIbgc3JWQYobL7FBVSYhpkoyLHsjswODJJCjX%2FIDpcC%2BE9PGB5YbEr%2BK%2Br3ay%2BwgGf0hN3MdgVtLntZY7iyFYDC0vjqDaJsC8NkJzLhMLxFk%2FpCzPjU980LVqIld8CF9N6U333Z2Ts0t6AlNNEGaiI9dKWlL11Q44Q2bY0pNeaEixmrkHhp9o8XvhpxtZ7NLaTWNb6DAi5EwSFTSKSlwjdA%2F1wxIcpQlVRNNQ0fStIB5nqY0fByrZ0isH%2F6tz%2F%2FVGnuOah3T0M%2BZpSSZlJzvE%2B79cE20Z6oaRUZX548vRXCdqgoKtMPj0vsAGOqUBdFBKJBWEa6G26WTkLQkE6wZli20zcB96ZdLdWiE%2FcP%2BtBiJ73p1jvEow9k1ojrte%2F4rmakdyS5tdYhBXdHW%2Fsxy1GdYddYa35L3E%2BjPgiVe395%2FE%2FFMaNhn7oXOg60pwgoQyHEpB11j9PTzFJc9meAZ4%2BqKPxvayCnib8jIvufDWUEb4uZe9z0s0NQE5ykFkluQVimOzCVmtXVe6Q53Z9FF0DqUW&X-Amz-Signature=3a442db01ca23c4ca60b2748198574335d38527f19c86e1ab3289962fd9317b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RR44KKH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw8psLn5Z9uH%2FVXs6cgkDYu%2Bf%2BJ00ig%2FWj28l8FpqXiAiEAnzUA8XeSZbTIQhDNsuYn%2Bc8vW%2Bku3%2BiIu7%2BqQPbHHfwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDzvRfrhNWrDya%2FMRyrcA77Ofj4x2nko45%2BlGIN8nrTLtgIggB%2B%2BYGkYZWvJn2y2z0SgZGAFGExJGccCtRzfcJsaz70pTofAAzKvID3TRzav1z233bKq8f1C8Sqg7KPKiFH0%2Bg%2F9wyZK1Aq8JxCHgtur2Xk0EL2mDySdI908eLP8qvq5AH9jrVueW0zNV7BYlgqCqnY%2BuW%2FgDBvp5iWPszP5wGZnXXiu7N2rDE3kOxGsyJWU%2BgHYXx4dL6RFkz0ryH3ppxrW6Qp24g%2FdkQC%2BUy0MZmw15WzpMfOqYiOHAneL4hgiBfFtyK%2Fypt5UBlc3Kxf65J59VFgjk8o32tLheLXvbfIRJAltIbgc3JWQYobL7FBVSYhpkoyLHsjswODJJCjX%2FIDpcC%2BE9PGB5YbEr%2BK%2Br3ay%2BwgGf0hN3MdgVtLntZY7iyFYDC0vjqDaJsC8NkJzLhMLxFk%2FpCzPjU980LVqIld8CF9N6U333Z2Ts0t6AlNNEGaiI9dKWlL11Q44Q2bY0pNeaEixmrkHhp9o8XvhpxtZ7NLaTWNb6DAi5EwSFTSKSlwjdA%2F1wxIcpQlVRNNQ0fStIB5nqY0fByrZ0isH%2F6tz%2F%2FVGnuOah3T0M%2BZpSSZlJzvE%2B79cE20Z6oaRUZX548vRXCdqgoKtMPj0vsAGOqUBdFBKJBWEa6G26WTkLQkE6wZli20zcB96ZdLdWiE%2FcP%2BtBiJ73p1jvEow9k1ojrte%2F4rmakdyS5tdYhBXdHW%2Fsxy1GdYddYa35L3E%2BjPgiVe395%2FE%2FFMaNhn7oXOg60pwgoQyHEpB11j9PTzFJc9meAZ4%2BqKPxvayCnib8jIvufDWUEb4uZe9z0s0NQE5ykFkluQVimOzCVmtXVe6Q53Z9FF0DqUW&X-Amz-Signature=35bcbbcd6aad3755bcd2850b154fd9028494fa04edc5b16112c593aa72b11fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RR44KKH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw8psLn5Z9uH%2FVXs6cgkDYu%2Bf%2BJ00ig%2FWj28l8FpqXiAiEAnzUA8XeSZbTIQhDNsuYn%2Bc8vW%2Bku3%2BiIu7%2BqQPbHHfwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDzvRfrhNWrDya%2FMRyrcA77Ofj4x2nko45%2BlGIN8nrTLtgIggB%2B%2BYGkYZWvJn2y2z0SgZGAFGExJGccCtRzfcJsaz70pTofAAzKvID3TRzav1z233bKq8f1C8Sqg7KPKiFH0%2Bg%2F9wyZK1Aq8JxCHgtur2Xk0EL2mDySdI908eLP8qvq5AH9jrVueW0zNV7BYlgqCqnY%2BuW%2FgDBvp5iWPszP5wGZnXXiu7N2rDE3kOxGsyJWU%2BgHYXx4dL6RFkz0ryH3ppxrW6Qp24g%2FdkQC%2BUy0MZmw15WzpMfOqYiOHAneL4hgiBfFtyK%2Fypt5UBlc3Kxf65J59VFgjk8o32tLheLXvbfIRJAltIbgc3JWQYobL7FBVSYhpkoyLHsjswODJJCjX%2FIDpcC%2BE9PGB5YbEr%2BK%2Br3ay%2BwgGf0hN3MdgVtLntZY7iyFYDC0vjqDaJsC8NkJzLhMLxFk%2FpCzPjU980LVqIld8CF9N6U333Z2Ts0t6AlNNEGaiI9dKWlL11Q44Q2bY0pNeaEixmrkHhp9o8XvhpxtZ7NLaTWNb6DAi5EwSFTSKSlwjdA%2F1wxIcpQlVRNNQ0fStIB5nqY0fByrZ0isH%2F6tz%2F%2FVGnuOah3T0M%2BZpSSZlJzvE%2B79cE20Z6oaRUZX548vRXCdqgoKtMPj0vsAGOqUBdFBKJBWEa6G26WTkLQkE6wZli20zcB96ZdLdWiE%2FcP%2BtBiJ73p1jvEow9k1ojrte%2F4rmakdyS5tdYhBXdHW%2Fsxy1GdYddYa35L3E%2BjPgiVe395%2FE%2FFMaNhn7oXOg60pwgoQyHEpB11j9PTzFJc9meAZ4%2BqKPxvayCnib8jIvufDWUEb4uZe9z0s0NQE5ykFkluQVimOzCVmtXVe6Q53Z9FF0DqUW&X-Amz-Signature=487e6f4f49896e0274d5a1e5cacf4e8d5f4f2d171beb2459420cdc4f6828ea11&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RR44KKH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw8psLn5Z9uH%2FVXs6cgkDYu%2Bf%2BJ00ig%2FWj28l8FpqXiAiEAnzUA8XeSZbTIQhDNsuYn%2Bc8vW%2Bku3%2BiIu7%2BqQPbHHfwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDzvRfrhNWrDya%2FMRyrcA77Ofj4x2nko45%2BlGIN8nrTLtgIggB%2B%2BYGkYZWvJn2y2z0SgZGAFGExJGccCtRzfcJsaz70pTofAAzKvID3TRzav1z233bKq8f1C8Sqg7KPKiFH0%2Bg%2F9wyZK1Aq8JxCHgtur2Xk0EL2mDySdI908eLP8qvq5AH9jrVueW0zNV7BYlgqCqnY%2BuW%2FgDBvp5iWPszP5wGZnXXiu7N2rDE3kOxGsyJWU%2BgHYXx4dL6RFkz0ryH3ppxrW6Qp24g%2FdkQC%2BUy0MZmw15WzpMfOqYiOHAneL4hgiBfFtyK%2Fypt5UBlc3Kxf65J59VFgjk8o32tLheLXvbfIRJAltIbgc3JWQYobL7FBVSYhpkoyLHsjswODJJCjX%2FIDpcC%2BE9PGB5YbEr%2BK%2Br3ay%2BwgGf0hN3MdgVtLntZY7iyFYDC0vjqDaJsC8NkJzLhMLxFk%2FpCzPjU980LVqIld8CF9N6U333Z2Ts0t6AlNNEGaiI9dKWlL11Q44Q2bY0pNeaEixmrkHhp9o8XvhpxtZ7NLaTWNb6DAi5EwSFTSKSlwjdA%2F1wxIcpQlVRNNQ0fStIB5nqY0fByrZ0isH%2F6tz%2F%2FVGnuOah3T0M%2BZpSSZlJzvE%2B79cE20Z6oaRUZX548vRXCdqgoKtMPj0vsAGOqUBdFBKJBWEa6G26WTkLQkE6wZli20zcB96ZdLdWiE%2FcP%2BtBiJ73p1jvEow9k1ojrte%2F4rmakdyS5tdYhBXdHW%2Fsxy1GdYddYa35L3E%2BjPgiVe395%2FE%2FFMaNhn7oXOg60pwgoQyHEpB11j9PTzFJc9meAZ4%2BqKPxvayCnib8jIvufDWUEb4uZe9z0s0NQE5ykFkluQVimOzCVmtXVe6Q53Z9FF0DqUW&X-Amz-Signature=d7d45b03cf8ebe6ac798e254f6e15d0003936350d253a2d3aba20bb6aa91bc38&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RR44KKH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw8psLn5Z9uH%2FVXs6cgkDYu%2Bf%2BJ00ig%2FWj28l8FpqXiAiEAnzUA8XeSZbTIQhDNsuYn%2Bc8vW%2Bku3%2BiIu7%2BqQPbHHfwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDzvRfrhNWrDya%2FMRyrcA77Ofj4x2nko45%2BlGIN8nrTLtgIggB%2B%2BYGkYZWvJn2y2z0SgZGAFGExJGccCtRzfcJsaz70pTofAAzKvID3TRzav1z233bKq8f1C8Sqg7KPKiFH0%2Bg%2F9wyZK1Aq8JxCHgtur2Xk0EL2mDySdI908eLP8qvq5AH9jrVueW0zNV7BYlgqCqnY%2BuW%2FgDBvp5iWPszP5wGZnXXiu7N2rDE3kOxGsyJWU%2BgHYXx4dL6RFkz0ryH3ppxrW6Qp24g%2FdkQC%2BUy0MZmw15WzpMfOqYiOHAneL4hgiBfFtyK%2Fypt5UBlc3Kxf65J59VFgjk8o32tLheLXvbfIRJAltIbgc3JWQYobL7FBVSYhpkoyLHsjswODJJCjX%2FIDpcC%2BE9PGB5YbEr%2BK%2Br3ay%2BwgGf0hN3MdgVtLntZY7iyFYDC0vjqDaJsC8NkJzLhMLxFk%2FpCzPjU980LVqIld8CF9N6U333Z2Ts0t6AlNNEGaiI9dKWlL11Q44Q2bY0pNeaEixmrkHhp9o8XvhpxtZ7NLaTWNb6DAi5EwSFTSKSlwjdA%2F1wxIcpQlVRNNQ0fStIB5nqY0fByrZ0isH%2F6tz%2F%2FVGnuOah3T0M%2BZpSSZlJzvE%2B79cE20Z6oaRUZX548vRXCdqgoKtMPj0vsAGOqUBdFBKJBWEa6G26WTkLQkE6wZli20zcB96ZdLdWiE%2FcP%2BtBiJ73p1jvEow9k1ojrte%2F4rmakdyS5tdYhBXdHW%2Fsxy1GdYddYa35L3E%2BjPgiVe395%2FE%2FFMaNhn7oXOg60pwgoQyHEpB11j9PTzFJc9meAZ4%2BqKPxvayCnib8jIvufDWUEb4uZe9z0s0NQE5ykFkluQVimOzCVmtXVe6Q53Z9FF0DqUW&X-Amz-Signature=3dfd3673532eaad52f4c7c9e8f93816051b8e4aca9220468ef685746aac7530f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RR44KKH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw8psLn5Z9uH%2FVXs6cgkDYu%2Bf%2BJ00ig%2FWj28l8FpqXiAiEAnzUA8XeSZbTIQhDNsuYn%2Bc8vW%2Bku3%2BiIu7%2BqQPbHHfwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDzvRfrhNWrDya%2FMRyrcA77Ofj4x2nko45%2BlGIN8nrTLtgIggB%2B%2BYGkYZWvJn2y2z0SgZGAFGExJGccCtRzfcJsaz70pTofAAzKvID3TRzav1z233bKq8f1C8Sqg7KPKiFH0%2Bg%2F9wyZK1Aq8JxCHgtur2Xk0EL2mDySdI908eLP8qvq5AH9jrVueW0zNV7BYlgqCqnY%2BuW%2FgDBvp5iWPszP5wGZnXXiu7N2rDE3kOxGsyJWU%2BgHYXx4dL6RFkz0ryH3ppxrW6Qp24g%2FdkQC%2BUy0MZmw15WzpMfOqYiOHAneL4hgiBfFtyK%2Fypt5UBlc3Kxf65J59VFgjk8o32tLheLXvbfIRJAltIbgc3JWQYobL7FBVSYhpkoyLHsjswODJJCjX%2FIDpcC%2BE9PGB5YbEr%2BK%2Br3ay%2BwgGf0hN3MdgVtLntZY7iyFYDC0vjqDaJsC8NkJzLhMLxFk%2FpCzPjU980LVqIld8CF9N6U333Z2Ts0t6AlNNEGaiI9dKWlL11Q44Q2bY0pNeaEixmrkHhp9o8XvhpxtZ7NLaTWNb6DAi5EwSFTSKSlwjdA%2F1wxIcpQlVRNNQ0fStIB5nqY0fByrZ0isH%2F6tz%2F%2FVGnuOah3T0M%2BZpSSZlJzvE%2B79cE20Z6oaRUZX548vRXCdqgoKtMPj0vsAGOqUBdFBKJBWEa6G26WTkLQkE6wZli20zcB96ZdLdWiE%2FcP%2BtBiJ73p1jvEow9k1ojrte%2F4rmakdyS5tdYhBXdHW%2Fsxy1GdYddYa35L3E%2BjPgiVe395%2FE%2FFMaNhn7oXOg60pwgoQyHEpB11j9PTzFJc9meAZ4%2BqKPxvayCnib8jIvufDWUEb4uZe9z0s0NQE5ykFkluQVimOzCVmtXVe6Q53Z9FF0DqUW&X-Amz-Signature=5ee89af053df4e195c8e4a5de43a5d29d23615f90a7b58e2b0f27e8d66875f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RR44KKH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw8psLn5Z9uH%2FVXs6cgkDYu%2Bf%2BJ00ig%2FWj28l8FpqXiAiEAnzUA8XeSZbTIQhDNsuYn%2Bc8vW%2Bku3%2BiIu7%2BqQPbHHfwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDzvRfrhNWrDya%2FMRyrcA77Ofj4x2nko45%2BlGIN8nrTLtgIggB%2B%2BYGkYZWvJn2y2z0SgZGAFGExJGccCtRzfcJsaz70pTofAAzKvID3TRzav1z233bKq8f1C8Sqg7KPKiFH0%2Bg%2F9wyZK1Aq8JxCHgtur2Xk0EL2mDySdI908eLP8qvq5AH9jrVueW0zNV7BYlgqCqnY%2BuW%2FgDBvp5iWPszP5wGZnXXiu7N2rDE3kOxGsyJWU%2BgHYXx4dL6RFkz0ryH3ppxrW6Qp24g%2FdkQC%2BUy0MZmw15WzpMfOqYiOHAneL4hgiBfFtyK%2Fypt5UBlc3Kxf65J59VFgjk8o32tLheLXvbfIRJAltIbgc3JWQYobL7FBVSYhpkoyLHsjswODJJCjX%2FIDpcC%2BE9PGB5YbEr%2BK%2Br3ay%2BwgGf0hN3MdgVtLntZY7iyFYDC0vjqDaJsC8NkJzLhMLxFk%2FpCzPjU980LVqIld8CF9N6U333Z2Ts0t6AlNNEGaiI9dKWlL11Q44Q2bY0pNeaEixmrkHhp9o8XvhpxtZ7NLaTWNb6DAi5EwSFTSKSlwjdA%2F1wxIcpQlVRNNQ0fStIB5nqY0fByrZ0isH%2F6tz%2F%2FVGnuOah3T0M%2BZpSSZlJzvE%2B79cE20Z6oaRUZX548vRXCdqgoKtMPj0vsAGOqUBdFBKJBWEa6G26WTkLQkE6wZli20zcB96ZdLdWiE%2FcP%2BtBiJ73p1jvEow9k1ojrte%2F4rmakdyS5tdYhBXdHW%2Fsxy1GdYddYa35L3E%2BjPgiVe395%2FE%2FFMaNhn7oXOg60pwgoQyHEpB11j9PTzFJc9meAZ4%2BqKPxvayCnib8jIvufDWUEb4uZe9z0s0NQE5ykFkluQVimOzCVmtXVe6Q53Z9FF0DqUW&X-Amz-Signature=63a4bafaff8e114cc15a4765053807493fb95eed27954f6f14714303012c52ce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

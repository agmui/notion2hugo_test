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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUJ3T5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bmX5blVcH6Ct5PrJqLYaWvojrojj8Z8xdK8wf%2BDcggIhAKIu37DvJH0fRs62lpvOOI59PULdblrDEXGA10tOCEcSKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS1m0L7kTG8ueCN9kq3APvZ9PfqAz0xyX3C%2BhRsbAuaFgn9yBD8DfKeBHIdlvOZwBwVeI6tWD9rtvAO68zj9Mr2TX4W6Clj5mIkLSWexscn6OUfYO2jWjz%2FscIxgMFiXE2jVK3oqDW4bl4F3Cv%2FgLaWK%2FQ%2BNIkm0iLfDB%2BCR1mELkGAp3IRvvTYS0zEp1QYRkwK%2FFiW0xIZOgJRMYbP2L4wZiP1cJoIiDzXRsK6xUodZTVg1oCzxNOzgW6fzq2fHzGest0g%2B9YbTYceAwijEj0v5vtEE5%2FR8SwQrelcp48xoRGQ%2FG6tdyKl0T4NlgdkZuzM3CGwTknIAdpizRlFVi%2Fuv0iHYBZqQNelGFXibOevLpFLuyonjAgMheexk9N94y8D%2B9jpNdRIG2U0ZuHW56WG9zpUw4VP0BmkziyZlqcgGIFzRc565ZmbaFGLOFrkNSpw9y01CeJVh3uS6hrg4UHtOxytTBh1jNJ2FRH3Jlj57PHyagAcyqE4Hk%2FL%2BMDxXFF8tHrZ9puWVKuUJw1XZEVfbyPwMjhwssWXDoX05TdKmbgTG5APfqLFnv9YL7WqBf9BId0qMqxexRyWf7q9JXrVLDxK%2Ft%2FBNUlKFyHzIdw%2B4yRX9ge0iVotxovRMkz2hYkG1BaYUOPoB86MTD8spbCBjqkAYFB3IJexUBg%2FZAjbWr5lYvhvWfiUxueLREAXKzyeZLzkKsOsilkDUNDqvtQgNnG2vt8V%2FEG2LnlHrBpaC%2Bgtaq%2FY4XYzkTfPX0YmiGxO49E7LR9QRNH%2BQEsoRpT%2BYYEuGbhv9A6VlY2HQ6XyA35eX6HxHQw5ljIaCd%2BwmZ%2F59gzAnc7ENGZ9EH25NAWKDsFTzN1HtEiYIDVeaO9osjXL4cdRTUi&X-Amz-Signature=18a774bc13d1476ab86e25656cb4ee603b271ee74571c66a845b3093be4ac8f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUJ3T5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bmX5blVcH6Ct5PrJqLYaWvojrojj8Z8xdK8wf%2BDcggIhAKIu37DvJH0fRs62lpvOOI59PULdblrDEXGA10tOCEcSKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS1m0L7kTG8ueCN9kq3APvZ9PfqAz0xyX3C%2BhRsbAuaFgn9yBD8DfKeBHIdlvOZwBwVeI6tWD9rtvAO68zj9Mr2TX4W6Clj5mIkLSWexscn6OUfYO2jWjz%2FscIxgMFiXE2jVK3oqDW4bl4F3Cv%2FgLaWK%2FQ%2BNIkm0iLfDB%2BCR1mELkGAp3IRvvTYS0zEp1QYRkwK%2FFiW0xIZOgJRMYbP2L4wZiP1cJoIiDzXRsK6xUodZTVg1oCzxNOzgW6fzq2fHzGest0g%2B9YbTYceAwijEj0v5vtEE5%2FR8SwQrelcp48xoRGQ%2FG6tdyKl0T4NlgdkZuzM3CGwTknIAdpizRlFVi%2Fuv0iHYBZqQNelGFXibOevLpFLuyonjAgMheexk9N94y8D%2B9jpNdRIG2U0ZuHW56WG9zpUw4VP0BmkziyZlqcgGIFzRc565ZmbaFGLOFrkNSpw9y01CeJVh3uS6hrg4UHtOxytTBh1jNJ2FRH3Jlj57PHyagAcyqE4Hk%2FL%2BMDxXFF8tHrZ9puWVKuUJw1XZEVfbyPwMjhwssWXDoX05TdKmbgTG5APfqLFnv9YL7WqBf9BId0qMqxexRyWf7q9JXrVLDxK%2Ft%2FBNUlKFyHzIdw%2B4yRX9ge0iVotxovRMkz2hYkG1BaYUOPoB86MTD8spbCBjqkAYFB3IJexUBg%2FZAjbWr5lYvhvWfiUxueLREAXKzyeZLzkKsOsilkDUNDqvtQgNnG2vt8V%2FEG2LnlHrBpaC%2Bgtaq%2FY4XYzkTfPX0YmiGxO49E7LR9QRNH%2BQEsoRpT%2BYYEuGbhv9A6VlY2HQ6XyA35eX6HxHQw5ljIaCd%2BwmZ%2F59gzAnc7ENGZ9EH25NAWKDsFTzN1HtEiYIDVeaO9osjXL4cdRTUi&X-Amz-Signature=a36e1f3e15f2bb0e745cf15cf81b3abbbdaf817c67ffa4a750a7a224ac027a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUJ3T5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bmX5blVcH6Ct5PrJqLYaWvojrojj8Z8xdK8wf%2BDcggIhAKIu37DvJH0fRs62lpvOOI59PULdblrDEXGA10tOCEcSKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS1m0L7kTG8ueCN9kq3APvZ9PfqAz0xyX3C%2BhRsbAuaFgn9yBD8DfKeBHIdlvOZwBwVeI6tWD9rtvAO68zj9Mr2TX4W6Clj5mIkLSWexscn6OUfYO2jWjz%2FscIxgMFiXE2jVK3oqDW4bl4F3Cv%2FgLaWK%2FQ%2BNIkm0iLfDB%2BCR1mELkGAp3IRvvTYS0zEp1QYRkwK%2FFiW0xIZOgJRMYbP2L4wZiP1cJoIiDzXRsK6xUodZTVg1oCzxNOzgW6fzq2fHzGest0g%2B9YbTYceAwijEj0v5vtEE5%2FR8SwQrelcp48xoRGQ%2FG6tdyKl0T4NlgdkZuzM3CGwTknIAdpizRlFVi%2Fuv0iHYBZqQNelGFXibOevLpFLuyonjAgMheexk9N94y8D%2B9jpNdRIG2U0ZuHW56WG9zpUw4VP0BmkziyZlqcgGIFzRc565ZmbaFGLOFrkNSpw9y01CeJVh3uS6hrg4UHtOxytTBh1jNJ2FRH3Jlj57PHyagAcyqE4Hk%2FL%2BMDxXFF8tHrZ9puWVKuUJw1XZEVfbyPwMjhwssWXDoX05TdKmbgTG5APfqLFnv9YL7WqBf9BId0qMqxexRyWf7q9JXrVLDxK%2Ft%2FBNUlKFyHzIdw%2B4yRX9ge0iVotxovRMkz2hYkG1BaYUOPoB86MTD8spbCBjqkAYFB3IJexUBg%2FZAjbWr5lYvhvWfiUxueLREAXKzyeZLzkKsOsilkDUNDqvtQgNnG2vt8V%2FEG2LnlHrBpaC%2Bgtaq%2FY4XYzkTfPX0YmiGxO49E7LR9QRNH%2BQEsoRpT%2BYYEuGbhv9A6VlY2HQ6XyA35eX6HxHQw5ljIaCd%2BwmZ%2F59gzAnc7ENGZ9EH25NAWKDsFTzN1HtEiYIDVeaO9osjXL4cdRTUi&X-Amz-Signature=0c2fd9d93442b0a844daa0e5ffbc885253735e0b8a146c716cb168fcecc6a7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUJ3T5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bmX5blVcH6Ct5PrJqLYaWvojrojj8Z8xdK8wf%2BDcggIhAKIu37DvJH0fRs62lpvOOI59PULdblrDEXGA10tOCEcSKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS1m0L7kTG8ueCN9kq3APvZ9PfqAz0xyX3C%2BhRsbAuaFgn9yBD8DfKeBHIdlvOZwBwVeI6tWD9rtvAO68zj9Mr2TX4W6Clj5mIkLSWexscn6OUfYO2jWjz%2FscIxgMFiXE2jVK3oqDW4bl4F3Cv%2FgLaWK%2FQ%2BNIkm0iLfDB%2BCR1mELkGAp3IRvvTYS0zEp1QYRkwK%2FFiW0xIZOgJRMYbP2L4wZiP1cJoIiDzXRsK6xUodZTVg1oCzxNOzgW6fzq2fHzGest0g%2B9YbTYceAwijEj0v5vtEE5%2FR8SwQrelcp48xoRGQ%2FG6tdyKl0T4NlgdkZuzM3CGwTknIAdpizRlFVi%2Fuv0iHYBZqQNelGFXibOevLpFLuyonjAgMheexk9N94y8D%2B9jpNdRIG2U0ZuHW56WG9zpUw4VP0BmkziyZlqcgGIFzRc565ZmbaFGLOFrkNSpw9y01CeJVh3uS6hrg4UHtOxytTBh1jNJ2FRH3Jlj57PHyagAcyqE4Hk%2FL%2BMDxXFF8tHrZ9puWVKuUJw1XZEVfbyPwMjhwssWXDoX05TdKmbgTG5APfqLFnv9YL7WqBf9BId0qMqxexRyWf7q9JXrVLDxK%2Ft%2FBNUlKFyHzIdw%2B4yRX9ge0iVotxovRMkz2hYkG1BaYUOPoB86MTD8spbCBjqkAYFB3IJexUBg%2FZAjbWr5lYvhvWfiUxueLREAXKzyeZLzkKsOsilkDUNDqvtQgNnG2vt8V%2FEG2LnlHrBpaC%2Bgtaq%2FY4XYzkTfPX0YmiGxO49E7LR9QRNH%2BQEsoRpT%2BYYEuGbhv9A6VlY2HQ6XyA35eX6HxHQw5ljIaCd%2BwmZ%2F59gzAnc7ENGZ9EH25NAWKDsFTzN1HtEiYIDVeaO9osjXL4cdRTUi&X-Amz-Signature=ffda05763a0a88a75ff5ccaa8c03f5e0f8510277ff6da082a1480a67a9ade0f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUJ3T5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bmX5blVcH6Ct5PrJqLYaWvojrojj8Z8xdK8wf%2BDcggIhAKIu37DvJH0fRs62lpvOOI59PULdblrDEXGA10tOCEcSKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS1m0L7kTG8ueCN9kq3APvZ9PfqAz0xyX3C%2BhRsbAuaFgn9yBD8DfKeBHIdlvOZwBwVeI6tWD9rtvAO68zj9Mr2TX4W6Clj5mIkLSWexscn6OUfYO2jWjz%2FscIxgMFiXE2jVK3oqDW4bl4F3Cv%2FgLaWK%2FQ%2BNIkm0iLfDB%2BCR1mELkGAp3IRvvTYS0zEp1QYRkwK%2FFiW0xIZOgJRMYbP2L4wZiP1cJoIiDzXRsK6xUodZTVg1oCzxNOzgW6fzq2fHzGest0g%2B9YbTYceAwijEj0v5vtEE5%2FR8SwQrelcp48xoRGQ%2FG6tdyKl0T4NlgdkZuzM3CGwTknIAdpizRlFVi%2Fuv0iHYBZqQNelGFXibOevLpFLuyonjAgMheexk9N94y8D%2B9jpNdRIG2U0ZuHW56WG9zpUw4VP0BmkziyZlqcgGIFzRc565ZmbaFGLOFrkNSpw9y01CeJVh3uS6hrg4UHtOxytTBh1jNJ2FRH3Jlj57PHyagAcyqE4Hk%2FL%2BMDxXFF8tHrZ9puWVKuUJw1XZEVfbyPwMjhwssWXDoX05TdKmbgTG5APfqLFnv9YL7WqBf9BId0qMqxexRyWf7q9JXrVLDxK%2Ft%2FBNUlKFyHzIdw%2B4yRX9ge0iVotxovRMkz2hYkG1BaYUOPoB86MTD8spbCBjqkAYFB3IJexUBg%2FZAjbWr5lYvhvWfiUxueLREAXKzyeZLzkKsOsilkDUNDqvtQgNnG2vt8V%2FEG2LnlHrBpaC%2Bgtaq%2FY4XYzkTfPX0YmiGxO49E7LR9QRNH%2BQEsoRpT%2BYYEuGbhv9A6VlY2HQ6XyA35eX6HxHQw5ljIaCd%2BwmZ%2F59gzAnc7ENGZ9EH25NAWKDsFTzN1HtEiYIDVeaO9osjXL4cdRTUi&X-Amz-Signature=a970f1fb73623605ab772a85426f08fe55ad62e2ccb34b05f1f161c40ee8b8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUJ3T5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bmX5blVcH6Ct5PrJqLYaWvojrojj8Z8xdK8wf%2BDcggIhAKIu37DvJH0fRs62lpvOOI59PULdblrDEXGA10tOCEcSKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS1m0L7kTG8ueCN9kq3APvZ9PfqAz0xyX3C%2BhRsbAuaFgn9yBD8DfKeBHIdlvOZwBwVeI6tWD9rtvAO68zj9Mr2TX4W6Clj5mIkLSWexscn6OUfYO2jWjz%2FscIxgMFiXE2jVK3oqDW4bl4F3Cv%2FgLaWK%2FQ%2BNIkm0iLfDB%2BCR1mELkGAp3IRvvTYS0zEp1QYRkwK%2FFiW0xIZOgJRMYbP2L4wZiP1cJoIiDzXRsK6xUodZTVg1oCzxNOzgW6fzq2fHzGest0g%2B9YbTYceAwijEj0v5vtEE5%2FR8SwQrelcp48xoRGQ%2FG6tdyKl0T4NlgdkZuzM3CGwTknIAdpizRlFVi%2Fuv0iHYBZqQNelGFXibOevLpFLuyonjAgMheexk9N94y8D%2B9jpNdRIG2U0ZuHW56WG9zpUw4VP0BmkziyZlqcgGIFzRc565ZmbaFGLOFrkNSpw9y01CeJVh3uS6hrg4UHtOxytTBh1jNJ2FRH3Jlj57PHyagAcyqE4Hk%2FL%2BMDxXFF8tHrZ9puWVKuUJw1XZEVfbyPwMjhwssWXDoX05TdKmbgTG5APfqLFnv9YL7WqBf9BId0qMqxexRyWf7q9JXrVLDxK%2Ft%2FBNUlKFyHzIdw%2B4yRX9ge0iVotxovRMkz2hYkG1BaYUOPoB86MTD8spbCBjqkAYFB3IJexUBg%2FZAjbWr5lYvhvWfiUxueLREAXKzyeZLzkKsOsilkDUNDqvtQgNnG2vt8V%2FEG2LnlHrBpaC%2Bgtaq%2FY4XYzkTfPX0YmiGxO49E7LR9QRNH%2BQEsoRpT%2BYYEuGbhv9A6VlY2HQ6XyA35eX6HxHQw5ljIaCd%2BwmZ%2F59gzAnc7ENGZ9EH25NAWKDsFTzN1HtEiYIDVeaO9osjXL4cdRTUi&X-Amz-Signature=fedb7ee889b5db06c27a48bd1991f2144fb5ee8b871887ffd5b039be8c105fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUJ3T5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bmX5blVcH6Ct5PrJqLYaWvojrojj8Z8xdK8wf%2BDcggIhAKIu37DvJH0fRs62lpvOOI59PULdblrDEXGA10tOCEcSKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS1m0L7kTG8ueCN9kq3APvZ9PfqAz0xyX3C%2BhRsbAuaFgn9yBD8DfKeBHIdlvOZwBwVeI6tWD9rtvAO68zj9Mr2TX4W6Clj5mIkLSWexscn6OUfYO2jWjz%2FscIxgMFiXE2jVK3oqDW4bl4F3Cv%2FgLaWK%2FQ%2BNIkm0iLfDB%2BCR1mELkGAp3IRvvTYS0zEp1QYRkwK%2FFiW0xIZOgJRMYbP2L4wZiP1cJoIiDzXRsK6xUodZTVg1oCzxNOzgW6fzq2fHzGest0g%2B9YbTYceAwijEj0v5vtEE5%2FR8SwQrelcp48xoRGQ%2FG6tdyKl0T4NlgdkZuzM3CGwTknIAdpizRlFVi%2Fuv0iHYBZqQNelGFXibOevLpFLuyonjAgMheexk9N94y8D%2B9jpNdRIG2U0ZuHW56WG9zpUw4VP0BmkziyZlqcgGIFzRc565ZmbaFGLOFrkNSpw9y01CeJVh3uS6hrg4UHtOxytTBh1jNJ2FRH3Jlj57PHyagAcyqE4Hk%2FL%2BMDxXFF8tHrZ9puWVKuUJw1XZEVfbyPwMjhwssWXDoX05TdKmbgTG5APfqLFnv9YL7WqBf9BId0qMqxexRyWf7q9JXrVLDxK%2Ft%2FBNUlKFyHzIdw%2B4yRX9ge0iVotxovRMkz2hYkG1BaYUOPoB86MTD8spbCBjqkAYFB3IJexUBg%2FZAjbWr5lYvhvWfiUxueLREAXKzyeZLzkKsOsilkDUNDqvtQgNnG2vt8V%2FEG2LnlHrBpaC%2Bgtaq%2FY4XYzkTfPX0YmiGxO49E7LR9QRNH%2BQEsoRpT%2BYYEuGbhv9A6VlY2HQ6XyA35eX6HxHQw5ljIaCd%2BwmZ%2F59gzAnc7ENGZ9EH25NAWKDsFTzN1HtEiYIDVeaO9osjXL4cdRTUi&X-Amz-Signature=b8350035ede1384da75e4d0c6b1c054ff87ab5fb713015c54ba1b54da9c33b52&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

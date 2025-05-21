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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZWOMIB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsG2ljUwVDMNqB2WbTL77fWJtbUYVNvuNLqVd86PTSzAiEA7RbzQYAfs%2BfDyI8Lhm4VPPzLczQ1fO1ewbejHIpdXdUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHlnEFgHQexpBXC3ircA5vSagy73MvxB1zQQJqncqN7t7lWx62ERoGCJOpdgCGneoMtYR5bEbbgr4WrmnWdHLVNVSOgOTpNiH2GD4O2eaazlWsVhIBYBMrUm5AYb099NqqqVKsNGwwe9rA1EtSpM9P6vn1JeZjFr90eiqVlLbj3COug5su4RFa8zThX8hu%2FIkUzJranX6j%2FZtAQUZsF9KUmlZZFeiY6uecpyFBem6Z8kCF67%2F5M3r3iMPEZjlbyT0sQfk6KTXS1QQBA1%2BQWQ7ZtV3PE%2FypYDNTcFxp0lBgUBzCqLnmI4rCd42yCPnZTzvqB6OetRCVmWXITbMlhD53ZNj74V%2BeNVtfF0nzJM%2FOOtFhgbwTcw7OaGnzWsMkOvjxl5BpmzqxKXDfdxsJ3UVVaumC0L57FAzxE6G6iQ568h6WRyGSb%2FRT9fWlskV5zU6LdkdIbb6BIqmlpOECKkQVDAf9BphU%2BkulyB5NgFQvRpPFTDKC0Nth4sZg3qhYER6oIMw%2FAvVLlMrCBGQBNi%2ByyLlJ78CpflzZK8eLSxXPVn1i%2BwgrtAgmE%2Btucvz%2B7y%2B2%2BBl%2FVg5ffUMt8ZUjJSFJ8hltHXiFKwbIyIlKa7hvWMXpjJPuijeGMAWAinJ23cZuXm9xeJVwdbh1lMJ%2BjtMEGOqUB50ExccGKawzBaQrPmQOxDPVzUCHd9K2TCs1ShIkgWZ3A55zzw%2Br1G1h%2BsNpBIg0WMGy6aFFE%2FSQI1N%2F1T92sFAeExeeI%2B7pr0qBQ7g7fIepvxJAavJGa8o5LuSPJqKM6xQ0r7HO5KN2Gc6uK%2BUaWJ0pEyxwJzcLC%2BYh5X97VM2bRZ%2FKlSckBJ4c4uD72UMNwCHVnQCeK2%2BIB6361CihAaacjJLCV&X-Amz-Signature=041a18bedf92a2c829837b2ac8dcb1df9e0acee0ae31298e8010fb4d060b796b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZWOMIB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsG2ljUwVDMNqB2WbTL77fWJtbUYVNvuNLqVd86PTSzAiEA7RbzQYAfs%2BfDyI8Lhm4VPPzLczQ1fO1ewbejHIpdXdUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHlnEFgHQexpBXC3ircA5vSagy73MvxB1zQQJqncqN7t7lWx62ERoGCJOpdgCGneoMtYR5bEbbgr4WrmnWdHLVNVSOgOTpNiH2GD4O2eaazlWsVhIBYBMrUm5AYb099NqqqVKsNGwwe9rA1EtSpM9P6vn1JeZjFr90eiqVlLbj3COug5su4RFa8zThX8hu%2FIkUzJranX6j%2FZtAQUZsF9KUmlZZFeiY6uecpyFBem6Z8kCF67%2F5M3r3iMPEZjlbyT0sQfk6KTXS1QQBA1%2BQWQ7ZtV3PE%2FypYDNTcFxp0lBgUBzCqLnmI4rCd42yCPnZTzvqB6OetRCVmWXITbMlhD53ZNj74V%2BeNVtfF0nzJM%2FOOtFhgbwTcw7OaGnzWsMkOvjxl5BpmzqxKXDfdxsJ3UVVaumC0L57FAzxE6G6iQ568h6WRyGSb%2FRT9fWlskV5zU6LdkdIbb6BIqmlpOECKkQVDAf9BphU%2BkulyB5NgFQvRpPFTDKC0Nth4sZg3qhYER6oIMw%2FAvVLlMrCBGQBNi%2ByyLlJ78CpflzZK8eLSxXPVn1i%2BwgrtAgmE%2Btucvz%2B7y%2B2%2BBl%2FVg5ffUMt8ZUjJSFJ8hltHXiFKwbIyIlKa7hvWMXpjJPuijeGMAWAinJ23cZuXm9xeJVwdbh1lMJ%2BjtMEGOqUB50ExccGKawzBaQrPmQOxDPVzUCHd9K2TCs1ShIkgWZ3A55zzw%2Br1G1h%2BsNpBIg0WMGy6aFFE%2FSQI1N%2F1T92sFAeExeeI%2B7pr0qBQ7g7fIepvxJAavJGa8o5LuSPJqKM6xQ0r7HO5KN2Gc6uK%2BUaWJ0pEyxwJzcLC%2BYh5X97VM2bRZ%2FKlSckBJ4c4uD72UMNwCHVnQCeK2%2BIB6361CihAaacjJLCV&X-Amz-Signature=cb83c43c1797a1834531de440f4334c9d64b065f753ad677e905573cedf57cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZWOMIB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsG2ljUwVDMNqB2WbTL77fWJtbUYVNvuNLqVd86PTSzAiEA7RbzQYAfs%2BfDyI8Lhm4VPPzLczQ1fO1ewbejHIpdXdUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHlnEFgHQexpBXC3ircA5vSagy73MvxB1zQQJqncqN7t7lWx62ERoGCJOpdgCGneoMtYR5bEbbgr4WrmnWdHLVNVSOgOTpNiH2GD4O2eaazlWsVhIBYBMrUm5AYb099NqqqVKsNGwwe9rA1EtSpM9P6vn1JeZjFr90eiqVlLbj3COug5su4RFa8zThX8hu%2FIkUzJranX6j%2FZtAQUZsF9KUmlZZFeiY6uecpyFBem6Z8kCF67%2F5M3r3iMPEZjlbyT0sQfk6KTXS1QQBA1%2BQWQ7ZtV3PE%2FypYDNTcFxp0lBgUBzCqLnmI4rCd42yCPnZTzvqB6OetRCVmWXITbMlhD53ZNj74V%2BeNVtfF0nzJM%2FOOtFhgbwTcw7OaGnzWsMkOvjxl5BpmzqxKXDfdxsJ3UVVaumC0L57FAzxE6G6iQ568h6WRyGSb%2FRT9fWlskV5zU6LdkdIbb6BIqmlpOECKkQVDAf9BphU%2BkulyB5NgFQvRpPFTDKC0Nth4sZg3qhYER6oIMw%2FAvVLlMrCBGQBNi%2ByyLlJ78CpflzZK8eLSxXPVn1i%2BwgrtAgmE%2Btucvz%2B7y%2B2%2BBl%2FVg5ffUMt8ZUjJSFJ8hltHXiFKwbIyIlKa7hvWMXpjJPuijeGMAWAinJ23cZuXm9xeJVwdbh1lMJ%2BjtMEGOqUB50ExccGKawzBaQrPmQOxDPVzUCHd9K2TCs1ShIkgWZ3A55zzw%2Br1G1h%2BsNpBIg0WMGy6aFFE%2FSQI1N%2F1T92sFAeExeeI%2B7pr0qBQ7g7fIepvxJAavJGa8o5LuSPJqKM6xQ0r7HO5KN2Gc6uK%2BUaWJ0pEyxwJzcLC%2BYh5X97VM2bRZ%2FKlSckBJ4c4uD72UMNwCHVnQCeK2%2BIB6361CihAaacjJLCV&X-Amz-Signature=36b12ec30141e76983e713807dfcecd9712d5b00aa0449e779b2c898406bedd6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZWOMIB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsG2ljUwVDMNqB2WbTL77fWJtbUYVNvuNLqVd86PTSzAiEA7RbzQYAfs%2BfDyI8Lhm4VPPzLczQ1fO1ewbejHIpdXdUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHlnEFgHQexpBXC3ircA5vSagy73MvxB1zQQJqncqN7t7lWx62ERoGCJOpdgCGneoMtYR5bEbbgr4WrmnWdHLVNVSOgOTpNiH2GD4O2eaazlWsVhIBYBMrUm5AYb099NqqqVKsNGwwe9rA1EtSpM9P6vn1JeZjFr90eiqVlLbj3COug5su4RFa8zThX8hu%2FIkUzJranX6j%2FZtAQUZsF9KUmlZZFeiY6uecpyFBem6Z8kCF67%2F5M3r3iMPEZjlbyT0sQfk6KTXS1QQBA1%2BQWQ7ZtV3PE%2FypYDNTcFxp0lBgUBzCqLnmI4rCd42yCPnZTzvqB6OetRCVmWXITbMlhD53ZNj74V%2BeNVtfF0nzJM%2FOOtFhgbwTcw7OaGnzWsMkOvjxl5BpmzqxKXDfdxsJ3UVVaumC0L57FAzxE6G6iQ568h6WRyGSb%2FRT9fWlskV5zU6LdkdIbb6BIqmlpOECKkQVDAf9BphU%2BkulyB5NgFQvRpPFTDKC0Nth4sZg3qhYER6oIMw%2FAvVLlMrCBGQBNi%2ByyLlJ78CpflzZK8eLSxXPVn1i%2BwgrtAgmE%2Btucvz%2B7y%2B2%2BBl%2FVg5ffUMt8ZUjJSFJ8hltHXiFKwbIyIlKa7hvWMXpjJPuijeGMAWAinJ23cZuXm9xeJVwdbh1lMJ%2BjtMEGOqUB50ExccGKawzBaQrPmQOxDPVzUCHd9K2TCs1ShIkgWZ3A55zzw%2Br1G1h%2BsNpBIg0WMGy6aFFE%2FSQI1N%2F1T92sFAeExeeI%2B7pr0qBQ7g7fIepvxJAavJGa8o5LuSPJqKM6xQ0r7HO5KN2Gc6uK%2BUaWJ0pEyxwJzcLC%2BYh5X97VM2bRZ%2FKlSckBJ4c4uD72UMNwCHVnQCeK2%2BIB6361CihAaacjJLCV&X-Amz-Signature=75ac8ce36a83d14b713fdbc5b210650534d6a5b461845e9897e2ae32d7da2cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZWOMIB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsG2ljUwVDMNqB2WbTL77fWJtbUYVNvuNLqVd86PTSzAiEA7RbzQYAfs%2BfDyI8Lhm4VPPzLczQ1fO1ewbejHIpdXdUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHlnEFgHQexpBXC3ircA5vSagy73MvxB1zQQJqncqN7t7lWx62ERoGCJOpdgCGneoMtYR5bEbbgr4WrmnWdHLVNVSOgOTpNiH2GD4O2eaazlWsVhIBYBMrUm5AYb099NqqqVKsNGwwe9rA1EtSpM9P6vn1JeZjFr90eiqVlLbj3COug5su4RFa8zThX8hu%2FIkUzJranX6j%2FZtAQUZsF9KUmlZZFeiY6uecpyFBem6Z8kCF67%2F5M3r3iMPEZjlbyT0sQfk6KTXS1QQBA1%2BQWQ7ZtV3PE%2FypYDNTcFxp0lBgUBzCqLnmI4rCd42yCPnZTzvqB6OetRCVmWXITbMlhD53ZNj74V%2BeNVtfF0nzJM%2FOOtFhgbwTcw7OaGnzWsMkOvjxl5BpmzqxKXDfdxsJ3UVVaumC0L57FAzxE6G6iQ568h6WRyGSb%2FRT9fWlskV5zU6LdkdIbb6BIqmlpOECKkQVDAf9BphU%2BkulyB5NgFQvRpPFTDKC0Nth4sZg3qhYER6oIMw%2FAvVLlMrCBGQBNi%2ByyLlJ78CpflzZK8eLSxXPVn1i%2BwgrtAgmE%2Btucvz%2B7y%2B2%2BBl%2FVg5ffUMt8ZUjJSFJ8hltHXiFKwbIyIlKa7hvWMXpjJPuijeGMAWAinJ23cZuXm9xeJVwdbh1lMJ%2BjtMEGOqUB50ExccGKawzBaQrPmQOxDPVzUCHd9K2TCs1ShIkgWZ3A55zzw%2Br1G1h%2BsNpBIg0WMGy6aFFE%2FSQI1N%2F1T92sFAeExeeI%2B7pr0qBQ7g7fIepvxJAavJGa8o5LuSPJqKM6xQ0r7HO5KN2Gc6uK%2BUaWJ0pEyxwJzcLC%2BYh5X97VM2bRZ%2FKlSckBJ4c4uD72UMNwCHVnQCeK2%2BIB6361CihAaacjJLCV&X-Amz-Signature=3e9a5a355948a871d849c61a2eba1878c74f1ff2a1836f8379fc13de7f1259f6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZWOMIB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsG2ljUwVDMNqB2WbTL77fWJtbUYVNvuNLqVd86PTSzAiEA7RbzQYAfs%2BfDyI8Lhm4VPPzLczQ1fO1ewbejHIpdXdUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHlnEFgHQexpBXC3ircA5vSagy73MvxB1zQQJqncqN7t7lWx62ERoGCJOpdgCGneoMtYR5bEbbgr4WrmnWdHLVNVSOgOTpNiH2GD4O2eaazlWsVhIBYBMrUm5AYb099NqqqVKsNGwwe9rA1EtSpM9P6vn1JeZjFr90eiqVlLbj3COug5su4RFa8zThX8hu%2FIkUzJranX6j%2FZtAQUZsF9KUmlZZFeiY6uecpyFBem6Z8kCF67%2F5M3r3iMPEZjlbyT0sQfk6KTXS1QQBA1%2BQWQ7ZtV3PE%2FypYDNTcFxp0lBgUBzCqLnmI4rCd42yCPnZTzvqB6OetRCVmWXITbMlhD53ZNj74V%2BeNVtfF0nzJM%2FOOtFhgbwTcw7OaGnzWsMkOvjxl5BpmzqxKXDfdxsJ3UVVaumC0L57FAzxE6G6iQ568h6WRyGSb%2FRT9fWlskV5zU6LdkdIbb6BIqmlpOECKkQVDAf9BphU%2BkulyB5NgFQvRpPFTDKC0Nth4sZg3qhYER6oIMw%2FAvVLlMrCBGQBNi%2ByyLlJ78CpflzZK8eLSxXPVn1i%2BwgrtAgmE%2Btucvz%2B7y%2B2%2BBl%2FVg5ffUMt8ZUjJSFJ8hltHXiFKwbIyIlKa7hvWMXpjJPuijeGMAWAinJ23cZuXm9xeJVwdbh1lMJ%2BjtMEGOqUB50ExccGKawzBaQrPmQOxDPVzUCHd9K2TCs1ShIkgWZ3A55zzw%2Br1G1h%2BsNpBIg0WMGy6aFFE%2FSQI1N%2F1T92sFAeExeeI%2B7pr0qBQ7g7fIepvxJAavJGa8o5LuSPJqKM6xQ0r7HO5KN2Gc6uK%2BUaWJ0pEyxwJzcLC%2BYh5X97VM2bRZ%2FKlSckBJ4c4uD72UMNwCHVnQCeK2%2BIB6361CihAaacjJLCV&X-Amz-Signature=5cca6127bef551b4d3aceba4e1062cbb3f1aeb25e9bb884243a168fabe5fa836&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZWOMIB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsG2ljUwVDMNqB2WbTL77fWJtbUYVNvuNLqVd86PTSzAiEA7RbzQYAfs%2BfDyI8Lhm4VPPzLczQ1fO1ewbejHIpdXdUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHlnEFgHQexpBXC3ircA5vSagy73MvxB1zQQJqncqN7t7lWx62ERoGCJOpdgCGneoMtYR5bEbbgr4WrmnWdHLVNVSOgOTpNiH2GD4O2eaazlWsVhIBYBMrUm5AYb099NqqqVKsNGwwe9rA1EtSpM9P6vn1JeZjFr90eiqVlLbj3COug5su4RFa8zThX8hu%2FIkUzJranX6j%2FZtAQUZsF9KUmlZZFeiY6uecpyFBem6Z8kCF67%2F5M3r3iMPEZjlbyT0sQfk6KTXS1QQBA1%2BQWQ7ZtV3PE%2FypYDNTcFxp0lBgUBzCqLnmI4rCd42yCPnZTzvqB6OetRCVmWXITbMlhD53ZNj74V%2BeNVtfF0nzJM%2FOOtFhgbwTcw7OaGnzWsMkOvjxl5BpmzqxKXDfdxsJ3UVVaumC0L57FAzxE6G6iQ568h6WRyGSb%2FRT9fWlskV5zU6LdkdIbb6BIqmlpOECKkQVDAf9BphU%2BkulyB5NgFQvRpPFTDKC0Nth4sZg3qhYER6oIMw%2FAvVLlMrCBGQBNi%2ByyLlJ78CpflzZK8eLSxXPVn1i%2BwgrtAgmE%2Btucvz%2B7y%2B2%2BBl%2FVg5ffUMt8ZUjJSFJ8hltHXiFKwbIyIlKa7hvWMXpjJPuijeGMAWAinJ23cZuXm9xeJVwdbh1lMJ%2BjtMEGOqUB50ExccGKawzBaQrPmQOxDPVzUCHd9K2TCs1ShIkgWZ3A55zzw%2Br1G1h%2BsNpBIg0WMGy6aFFE%2FSQI1N%2F1T92sFAeExeeI%2B7pr0qBQ7g7fIepvxJAavJGa8o5LuSPJqKM6xQ0r7HO5KN2Gc6uK%2BUaWJ0pEyxwJzcLC%2BYh5X97VM2bRZ%2FKlSckBJ4c4uD72UMNwCHVnQCeK2%2BIB6361CihAaacjJLCV&X-Amz-Signature=1c5bd24b010fdbf189e8128f567e69c14af349a2fe29d2843f40d80d0bd797ea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

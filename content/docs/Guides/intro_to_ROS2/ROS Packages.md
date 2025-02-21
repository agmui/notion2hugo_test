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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OBVAVO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmDXGYW7tcydLdrnzlnZzHstg%2BrdOzGbfuaMMHwgqPmAiBwF9T7GFkin8ifbQG60mzACtOVp1REQ26n0VXJMiXjqiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFGUWE7PHTdiZm5nKtwDkk71iqYesYk0Jy0KoKe6CvtVyu1XoG7%2FDna2ovPsjGcSwOnw8A3JC8%2BlTNR%2FN%2FCMS4ghjZHrPJnFD8rReFT1RAYl7TrBpj9qMCglS0UqvdCeXlO4r3JlER1WYB6jDRYQ%2BXEl%2FcyRgNBIY1bxWEmNjfwVXAT5NhvIwAH8CgfQ%2B9%2BR1qdnQ%2Btl95XlqSjC9JZc4fSwW825kpTYkd7ETgmT8WTr4PjhNtWl%2BOCh6Ih9xuBjd4urRKlpVuSLR0BtaxZlGt6aNUn08dUaztgjpzqbH5gllZ9hubaVRnlXYEBt9tzVpnlNALg2DaIXJAxyfBG%2F%2BJj9JWi%2FkpRPquFGwzfb7tp3NEZjHdz6cxw2KiqgFDdMqRX5OxO2feIstPrgZXQ4JZOnd9mQ9pa9CEruKk5Lmn8PukdyTXIMQcvRggKI0p4F%2BADA2uUSZE8ykkyYWmAfuuIkB0OsToz5GbpEoHXNU6pQM92VXmeqKIVkeF9D3%2FyzBjfI6xHwKZepguZCsTrCvPamkMLc373YXou8%2FAAJo%2B71haxubFMgL6lq5YfKVE9RVpHim6lrTfAiDVdhW5wyRWwmRwiD6YBZf3Nf8ZUvBXWpltJf8ZdI%2FWE0E2u0dHSr7XM0IcCZFUxt%2BOgwgt7gvQY6pgGQuv6wiD3LCgPnKMW0C8Aez%2B9T8k39YV6h30WXBiZh%2BDGnBb64soBWsyGrI2VPOBPkuKj21Yhnq7XlVmqVp5Fm6mRGkSKD%2BerSY2uFZ2ZkuwcHeEiiXuaZRAK6OAaXBKVewsQdjp%2Fl2kbqsG%2BFuyIFKzGaG1pBhVqD3w9vAeZHNpzSlNR4VBC92nPDwa5C9pxvjGVX9Mq0TKACeCyucAO1fSrM0I0d&X-Amz-Signature=c0676088ccbd05f2b0cb8d2d65a3bb62a46113ce9755efa8ff0c4d2e95e3e8ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OBVAVO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmDXGYW7tcydLdrnzlnZzHstg%2BrdOzGbfuaMMHwgqPmAiBwF9T7GFkin8ifbQG60mzACtOVp1REQ26n0VXJMiXjqiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFGUWE7PHTdiZm5nKtwDkk71iqYesYk0Jy0KoKe6CvtVyu1XoG7%2FDna2ovPsjGcSwOnw8A3JC8%2BlTNR%2FN%2FCMS4ghjZHrPJnFD8rReFT1RAYl7TrBpj9qMCglS0UqvdCeXlO4r3JlER1WYB6jDRYQ%2BXEl%2FcyRgNBIY1bxWEmNjfwVXAT5NhvIwAH8CgfQ%2B9%2BR1qdnQ%2Btl95XlqSjC9JZc4fSwW825kpTYkd7ETgmT8WTr4PjhNtWl%2BOCh6Ih9xuBjd4urRKlpVuSLR0BtaxZlGt6aNUn08dUaztgjpzqbH5gllZ9hubaVRnlXYEBt9tzVpnlNALg2DaIXJAxyfBG%2F%2BJj9JWi%2FkpRPquFGwzfb7tp3NEZjHdz6cxw2KiqgFDdMqRX5OxO2feIstPrgZXQ4JZOnd9mQ9pa9CEruKk5Lmn8PukdyTXIMQcvRggKI0p4F%2BADA2uUSZE8ykkyYWmAfuuIkB0OsToz5GbpEoHXNU6pQM92VXmeqKIVkeF9D3%2FyzBjfI6xHwKZepguZCsTrCvPamkMLc373YXou8%2FAAJo%2B71haxubFMgL6lq5YfKVE9RVpHim6lrTfAiDVdhW5wyRWwmRwiD6YBZf3Nf8ZUvBXWpltJf8ZdI%2FWE0E2u0dHSr7XM0IcCZFUxt%2BOgwgt7gvQY6pgGQuv6wiD3LCgPnKMW0C8Aez%2B9T8k39YV6h30WXBiZh%2BDGnBb64soBWsyGrI2VPOBPkuKj21Yhnq7XlVmqVp5Fm6mRGkSKD%2BerSY2uFZ2ZkuwcHeEiiXuaZRAK6OAaXBKVewsQdjp%2Fl2kbqsG%2BFuyIFKzGaG1pBhVqD3w9vAeZHNpzSlNR4VBC92nPDwa5C9pxvjGVX9Mq0TKACeCyucAO1fSrM0I0d&X-Amz-Signature=709ee5b3e99f79c4e27cabb8e9abf46d22aa4437e373b5dd1e8c2bd46ea3fb45&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OBVAVO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmDXGYW7tcydLdrnzlnZzHstg%2BrdOzGbfuaMMHwgqPmAiBwF9T7GFkin8ifbQG60mzACtOVp1REQ26n0VXJMiXjqiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFGUWE7PHTdiZm5nKtwDkk71iqYesYk0Jy0KoKe6CvtVyu1XoG7%2FDna2ovPsjGcSwOnw8A3JC8%2BlTNR%2FN%2FCMS4ghjZHrPJnFD8rReFT1RAYl7TrBpj9qMCglS0UqvdCeXlO4r3JlER1WYB6jDRYQ%2BXEl%2FcyRgNBIY1bxWEmNjfwVXAT5NhvIwAH8CgfQ%2B9%2BR1qdnQ%2Btl95XlqSjC9JZc4fSwW825kpTYkd7ETgmT8WTr4PjhNtWl%2BOCh6Ih9xuBjd4urRKlpVuSLR0BtaxZlGt6aNUn08dUaztgjpzqbH5gllZ9hubaVRnlXYEBt9tzVpnlNALg2DaIXJAxyfBG%2F%2BJj9JWi%2FkpRPquFGwzfb7tp3NEZjHdz6cxw2KiqgFDdMqRX5OxO2feIstPrgZXQ4JZOnd9mQ9pa9CEruKk5Lmn8PukdyTXIMQcvRggKI0p4F%2BADA2uUSZE8ykkyYWmAfuuIkB0OsToz5GbpEoHXNU6pQM92VXmeqKIVkeF9D3%2FyzBjfI6xHwKZepguZCsTrCvPamkMLc373YXou8%2FAAJo%2B71haxubFMgL6lq5YfKVE9RVpHim6lrTfAiDVdhW5wyRWwmRwiD6YBZf3Nf8ZUvBXWpltJf8ZdI%2FWE0E2u0dHSr7XM0IcCZFUxt%2BOgwgt7gvQY6pgGQuv6wiD3LCgPnKMW0C8Aez%2B9T8k39YV6h30WXBiZh%2BDGnBb64soBWsyGrI2VPOBPkuKj21Yhnq7XlVmqVp5Fm6mRGkSKD%2BerSY2uFZ2ZkuwcHeEiiXuaZRAK6OAaXBKVewsQdjp%2Fl2kbqsG%2BFuyIFKzGaG1pBhVqD3w9vAeZHNpzSlNR4VBC92nPDwa5C9pxvjGVX9Mq0TKACeCyucAO1fSrM0I0d&X-Amz-Signature=f341f0c94f0451a25b59d15adadc5de217c8b97cca977de814e185e513348207&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OBVAVO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmDXGYW7tcydLdrnzlnZzHstg%2BrdOzGbfuaMMHwgqPmAiBwF9T7GFkin8ifbQG60mzACtOVp1REQ26n0VXJMiXjqiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFGUWE7PHTdiZm5nKtwDkk71iqYesYk0Jy0KoKe6CvtVyu1XoG7%2FDna2ovPsjGcSwOnw8A3JC8%2BlTNR%2FN%2FCMS4ghjZHrPJnFD8rReFT1RAYl7TrBpj9qMCglS0UqvdCeXlO4r3JlER1WYB6jDRYQ%2BXEl%2FcyRgNBIY1bxWEmNjfwVXAT5NhvIwAH8CgfQ%2B9%2BR1qdnQ%2Btl95XlqSjC9JZc4fSwW825kpTYkd7ETgmT8WTr4PjhNtWl%2BOCh6Ih9xuBjd4urRKlpVuSLR0BtaxZlGt6aNUn08dUaztgjpzqbH5gllZ9hubaVRnlXYEBt9tzVpnlNALg2DaIXJAxyfBG%2F%2BJj9JWi%2FkpRPquFGwzfb7tp3NEZjHdz6cxw2KiqgFDdMqRX5OxO2feIstPrgZXQ4JZOnd9mQ9pa9CEruKk5Lmn8PukdyTXIMQcvRggKI0p4F%2BADA2uUSZE8ykkyYWmAfuuIkB0OsToz5GbpEoHXNU6pQM92VXmeqKIVkeF9D3%2FyzBjfI6xHwKZepguZCsTrCvPamkMLc373YXou8%2FAAJo%2B71haxubFMgL6lq5YfKVE9RVpHim6lrTfAiDVdhW5wyRWwmRwiD6YBZf3Nf8ZUvBXWpltJf8ZdI%2FWE0E2u0dHSr7XM0IcCZFUxt%2BOgwgt7gvQY6pgGQuv6wiD3LCgPnKMW0C8Aez%2B9T8k39YV6h30WXBiZh%2BDGnBb64soBWsyGrI2VPOBPkuKj21Yhnq7XlVmqVp5Fm6mRGkSKD%2BerSY2uFZ2ZkuwcHeEiiXuaZRAK6OAaXBKVewsQdjp%2Fl2kbqsG%2BFuyIFKzGaG1pBhVqD3w9vAeZHNpzSlNR4VBC92nPDwa5C9pxvjGVX9Mq0TKACeCyucAO1fSrM0I0d&X-Amz-Signature=36b51f497d855d3c22c8f5adceac7ec1a5642a44390ef0824eedf91e0d8a870d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OBVAVO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmDXGYW7tcydLdrnzlnZzHstg%2BrdOzGbfuaMMHwgqPmAiBwF9T7GFkin8ifbQG60mzACtOVp1REQ26n0VXJMiXjqiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFGUWE7PHTdiZm5nKtwDkk71iqYesYk0Jy0KoKe6CvtVyu1XoG7%2FDna2ovPsjGcSwOnw8A3JC8%2BlTNR%2FN%2FCMS4ghjZHrPJnFD8rReFT1RAYl7TrBpj9qMCglS0UqvdCeXlO4r3JlER1WYB6jDRYQ%2BXEl%2FcyRgNBIY1bxWEmNjfwVXAT5NhvIwAH8CgfQ%2B9%2BR1qdnQ%2Btl95XlqSjC9JZc4fSwW825kpTYkd7ETgmT8WTr4PjhNtWl%2BOCh6Ih9xuBjd4urRKlpVuSLR0BtaxZlGt6aNUn08dUaztgjpzqbH5gllZ9hubaVRnlXYEBt9tzVpnlNALg2DaIXJAxyfBG%2F%2BJj9JWi%2FkpRPquFGwzfb7tp3NEZjHdz6cxw2KiqgFDdMqRX5OxO2feIstPrgZXQ4JZOnd9mQ9pa9CEruKk5Lmn8PukdyTXIMQcvRggKI0p4F%2BADA2uUSZE8ykkyYWmAfuuIkB0OsToz5GbpEoHXNU6pQM92VXmeqKIVkeF9D3%2FyzBjfI6xHwKZepguZCsTrCvPamkMLc373YXou8%2FAAJo%2B71haxubFMgL6lq5YfKVE9RVpHim6lrTfAiDVdhW5wyRWwmRwiD6YBZf3Nf8ZUvBXWpltJf8ZdI%2FWE0E2u0dHSr7XM0IcCZFUxt%2BOgwgt7gvQY6pgGQuv6wiD3LCgPnKMW0C8Aez%2B9T8k39YV6h30WXBiZh%2BDGnBb64soBWsyGrI2VPOBPkuKj21Yhnq7XlVmqVp5Fm6mRGkSKD%2BerSY2uFZ2ZkuwcHeEiiXuaZRAK6OAaXBKVewsQdjp%2Fl2kbqsG%2BFuyIFKzGaG1pBhVqD3w9vAeZHNpzSlNR4VBC92nPDwa5C9pxvjGVX9Mq0TKACeCyucAO1fSrM0I0d&X-Amz-Signature=0639a17794cf38093011c38947400d25d5ffe41053162b72cb4bfa77121d3b02&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OBVAVO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmDXGYW7tcydLdrnzlnZzHstg%2BrdOzGbfuaMMHwgqPmAiBwF9T7GFkin8ifbQG60mzACtOVp1REQ26n0VXJMiXjqiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFGUWE7PHTdiZm5nKtwDkk71iqYesYk0Jy0KoKe6CvtVyu1XoG7%2FDna2ovPsjGcSwOnw8A3JC8%2BlTNR%2FN%2FCMS4ghjZHrPJnFD8rReFT1RAYl7TrBpj9qMCglS0UqvdCeXlO4r3JlER1WYB6jDRYQ%2BXEl%2FcyRgNBIY1bxWEmNjfwVXAT5NhvIwAH8CgfQ%2B9%2BR1qdnQ%2Btl95XlqSjC9JZc4fSwW825kpTYkd7ETgmT8WTr4PjhNtWl%2BOCh6Ih9xuBjd4urRKlpVuSLR0BtaxZlGt6aNUn08dUaztgjpzqbH5gllZ9hubaVRnlXYEBt9tzVpnlNALg2DaIXJAxyfBG%2F%2BJj9JWi%2FkpRPquFGwzfb7tp3NEZjHdz6cxw2KiqgFDdMqRX5OxO2feIstPrgZXQ4JZOnd9mQ9pa9CEruKk5Lmn8PukdyTXIMQcvRggKI0p4F%2BADA2uUSZE8ykkyYWmAfuuIkB0OsToz5GbpEoHXNU6pQM92VXmeqKIVkeF9D3%2FyzBjfI6xHwKZepguZCsTrCvPamkMLc373YXou8%2FAAJo%2B71haxubFMgL6lq5YfKVE9RVpHim6lrTfAiDVdhW5wyRWwmRwiD6YBZf3Nf8ZUvBXWpltJf8ZdI%2FWE0E2u0dHSr7XM0IcCZFUxt%2BOgwgt7gvQY6pgGQuv6wiD3LCgPnKMW0C8Aez%2B9T8k39YV6h30WXBiZh%2BDGnBb64soBWsyGrI2VPOBPkuKj21Yhnq7XlVmqVp5Fm6mRGkSKD%2BerSY2uFZ2ZkuwcHeEiiXuaZRAK6OAaXBKVewsQdjp%2Fl2kbqsG%2BFuyIFKzGaG1pBhVqD3w9vAeZHNpzSlNR4VBC92nPDwa5C9pxvjGVX9Mq0TKACeCyucAO1fSrM0I0d&X-Amz-Signature=fed9b6c95aab3eba8c8de7bc07c41915abe0f9fd6ccdee6f4a45bc437360fcbc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OBVAVO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmDXGYW7tcydLdrnzlnZzHstg%2BrdOzGbfuaMMHwgqPmAiBwF9T7GFkin8ifbQG60mzACtOVp1REQ26n0VXJMiXjqiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFGUWE7PHTdiZm5nKtwDkk71iqYesYk0Jy0KoKe6CvtVyu1XoG7%2FDna2ovPsjGcSwOnw8A3JC8%2BlTNR%2FN%2FCMS4ghjZHrPJnFD8rReFT1RAYl7TrBpj9qMCglS0UqvdCeXlO4r3JlER1WYB6jDRYQ%2BXEl%2FcyRgNBIY1bxWEmNjfwVXAT5NhvIwAH8CgfQ%2B9%2BR1qdnQ%2Btl95XlqSjC9JZc4fSwW825kpTYkd7ETgmT8WTr4PjhNtWl%2BOCh6Ih9xuBjd4urRKlpVuSLR0BtaxZlGt6aNUn08dUaztgjpzqbH5gllZ9hubaVRnlXYEBt9tzVpnlNALg2DaIXJAxyfBG%2F%2BJj9JWi%2FkpRPquFGwzfb7tp3NEZjHdz6cxw2KiqgFDdMqRX5OxO2feIstPrgZXQ4JZOnd9mQ9pa9CEruKk5Lmn8PukdyTXIMQcvRggKI0p4F%2BADA2uUSZE8ykkyYWmAfuuIkB0OsToz5GbpEoHXNU6pQM92VXmeqKIVkeF9D3%2FyzBjfI6xHwKZepguZCsTrCvPamkMLc373YXou8%2FAAJo%2B71haxubFMgL6lq5YfKVE9RVpHim6lrTfAiDVdhW5wyRWwmRwiD6YBZf3Nf8ZUvBXWpltJf8ZdI%2FWE0E2u0dHSr7XM0IcCZFUxt%2BOgwgt7gvQY6pgGQuv6wiD3LCgPnKMW0C8Aez%2B9T8k39YV6h30WXBiZh%2BDGnBb64soBWsyGrI2VPOBPkuKj21Yhnq7XlVmqVp5Fm6mRGkSKD%2BerSY2uFZ2ZkuwcHeEiiXuaZRAK6OAaXBKVewsQdjp%2Fl2kbqsG%2BFuyIFKzGaG1pBhVqD3w9vAeZHNpzSlNR4VBC92nPDwa5C9pxvjGVX9Mq0TKACeCyucAO1fSrM0I0d&X-Amz-Signature=10ca9e2ef188849093dd6e0f705b2dce6a522aa5917119c4fdb68270fc1fc3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

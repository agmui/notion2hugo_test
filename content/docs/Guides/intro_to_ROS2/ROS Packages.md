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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RAA5P7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDeMItmkrC6qzszDU8LJambzh3bOqtcY%2BTMwDgQt4j7xQIhAJoyFCKFYr3NyBz8cyowNwroP6HDq24WRth57WlCsRQ%2FKv8DCE8QABoMNjM3NDIzMTgzODA1IgzYv6PG5%2Blf8HMa9cMq3AM4IAkgmh26TwbwqWECKiThuMQntA6%2Fzia4zAZWaLWXWfhD%2FeuNeo2E7h63EUhmr%2FRpGp5sswjsTkX33g5Grlj5Cz3pk3IRSxCKSN%2BrZYPcWxwAuZP5HwAnBMcHhOhD0kkgG7MsfyH%2BOi5R9GrWPAMN9Mq02nwm2yCVNhBpIYQX6sbc8xfO2ozrGsZcMWdrwKfnXA%2FrQ7szUwWbUO51Kfg1F68M1dKcKU1lPCF81YlgdGQzJiWDUlvXZSgGa%2FFf4U9XYLyKkpaVkeZk7UaIMgFc6oCIZgjcVpH0Lz1V16jx87brl54G9YdluFZ2DJWgH8YxOzT4YdwvGKoV1oSnuVPfS3xOvR43oJGtl9O2OfHM3LOIKVEOs4kJCvrlIDCQ6i%2BoUBpNsLK%2BL6go6R0Hixs3SjRoJcupCNiGSYO5Pc6spNkLBZA%2Fz0XJX46AOAkFkEa0A9K30zYj6c4pqjhIQRBkWcHRtv3UL7FOdeI%2BvZgOQNLdjmzsTgbp3Vb9CDCU8TZbMTzKrihTgRax1mZcGRs0yeGzeGCOuP1ote9uxHrHHDpdjwoU642bcpjmBNwQiv7o7dXyY5G7hiui9jCi8GYryh5gXhtTo2NW4Cvv3kc6%2BgiYTyFkK%2BTXwF4UujCVpdvDBjqkAaiwMRVabpoHDyzKy5SJtyaPznXGjBzpbRSxmTek35s2vYfVjoFdSx6skNwGCxiX9oi3P5rMdwVc2%2F8WDvl36juTkhbSb%2BziaQwnAmoMLkQrcp%2B6fMhU6wu6SHy8Mb39Ph65S0nGF3xNaCPb8feyPFgitBJ0E%2FJTVhwSozTz3p6F%2BQZOYNeq4Pzsn0DKWwFye%2F4JNH%2FPBo4ge6LdHiEPR4bcID9z&X-Amz-Signature=d9c95561d6d1270bfc896e263ef7999293bf706469adf3155bbae03cde083f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RAA5P7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDeMItmkrC6qzszDU8LJambzh3bOqtcY%2BTMwDgQt4j7xQIhAJoyFCKFYr3NyBz8cyowNwroP6HDq24WRth57WlCsRQ%2FKv8DCE8QABoMNjM3NDIzMTgzODA1IgzYv6PG5%2Blf8HMa9cMq3AM4IAkgmh26TwbwqWECKiThuMQntA6%2Fzia4zAZWaLWXWfhD%2FeuNeo2E7h63EUhmr%2FRpGp5sswjsTkX33g5Grlj5Cz3pk3IRSxCKSN%2BrZYPcWxwAuZP5HwAnBMcHhOhD0kkgG7MsfyH%2BOi5R9GrWPAMN9Mq02nwm2yCVNhBpIYQX6sbc8xfO2ozrGsZcMWdrwKfnXA%2FrQ7szUwWbUO51Kfg1F68M1dKcKU1lPCF81YlgdGQzJiWDUlvXZSgGa%2FFf4U9XYLyKkpaVkeZk7UaIMgFc6oCIZgjcVpH0Lz1V16jx87brl54G9YdluFZ2DJWgH8YxOzT4YdwvGKoV1oSnuVPfS3xOvR43oJGtl9O2OfHM3LOIKVEOs4kJCvrlIDCQ6i%2BoUBpNsLK%2BL6go6R0Hixs3SjRoJcupCNiGSYO5Pc6spNkLBZA%2Fz0XJX46AOAkFkEa0A9K30zYj6c4pqjhIQRBkWcHRtv3UL7FOdeI%2BvZgOQNLdjmzsTgbp3Vb9CDCU8TZbMTzKrihTgRax1mZcGRs0yeGzeGCOuP1ote9uxHrHHDpdjwoU642bcpjmBNwQiv7o7dXyY5G7hiui9jCi8GYryh5gXhtTo2NW4Cvv3kc6%2BgiYTyFkK%2BTXwF4UujCVpdvDBjqkAaiwMRVabpoHDyzKy5SJtyaPznXGjBzpbRSxmTek35s2vYfVjoFdSx6skNwGCxiX9oi3P5rMdwVc2%2F8WDvl36juTkhbSb%2BziaQwnAmoMLkQrcp%2B6fMhU6wu6SHy8Mb39Ph65S0nGF3xNaCPb8feyPFgitBJ0E%2FJTVhwSozTz3p6F%2BQZOYNeq4Pzsn0DKWwFye%2F4JNH%2FPBo4ge6LdHiEPR4bcID9z&X-Amz-Signature=3b3bb8f93c33b4434253b2ca0a966b8bca98b561d5a81cea1b31b454bc7ea75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RAA5P7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDeMItmkrC6qzszDU8LJambzh3bOqtcY%2BTMwDgQt4j7xQIhAJoyFCKFYr3NyBz8cyowNwroP6HDq24WRth57WlCsRQ%2FKv8DCE8QABoMNjM3NDIzMTgzODA1IgzYv6PG5%2Blf8HMa9cMq3AM4IAkgmh26TwbwqWECKiThuMQntA6%2Fzia4zAZWaLWXWfhD%2FeuNeo2E7h63EUhmr%2FRpGp5sswjsTkX33g5Grlj5Cz3pk3IRSxCKSN%2BrZYPcWxwAuZP5HwAnBMcHhOhD0kkgG7MsfyH%2BOi5R9GrWPAMN9Mq02nwm2yCVNhBpIYQX6sbc8xfO2ozrGsZcMWdrwKfnXA%2FrQ7szUwWbUO51Kfg1F68M1dKcKU1lPCF81YlgdGQzJiWDUlvXZSgGa%2FFf4U9XYLyKkpaVkeZk7UaIMgFc6oCIZgjcVpH0Lz1V16jx87brl54G9YdluFZ2DJWgH8YxOzT4YdwvGKoV1oSnuVPfS3xOvR43oJGtl9O2OfHM3LOIKVEOs4kJCvrlIDCQ6i%2BoUBpNsLK%2BL6go6R0Hixs3SjRoJcupCNiGSYO5Pc6spNkLBZA%2Fz0XJX46AOAkFkEa0A9K30zYj6c4pqjhIQRBkWcHRtv3UL7FOdeI%2BvZgOQNLdjmzsTgbp3Vb9CDCU8TZbMTzKrihTgRax1mZcGRs0yeGzeGCOuP1ote9uxHrHHDpdjwoU642bcpjmBNwQiv7o7dXyY5G7hiui9jCi8GYryh5gXhtTo2NW4Cvv3kc6%2BgiYTyFkK%2BTXwF4UujCVpdvDBjqkAaiwMRVabpoHDyzKy5SJtyaPznXGjBzpbRSxmTek35s2vYfVjoFdSx6skNwGCxiX9oi3P5rMdwVc2%2F8WDvl36juTkhbSb%2BziaQwnAmoMLkQrcp%2B6fMhU6wu6SHy8Mb39Ph65S0nGF3xNaCPb8feyPFgitBJ0E%2FJTVhwSozTz3p6F%2BQZOYNeq4Pzsn0DKWwFye%2F4JNH%2FPBo4ge6LdHiEPR4bcID9z&X-Amz-Signature=ff6db966c3dfd0ddbb2dc8430eed65492601d47501a2feb39df2701e874136ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RAA5P7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDeMItmkrC6qzszDU8LJambzh3bOqtcY%2BTMwDgQt4j7xQIhAJoyFCKFYr3NyBz8cyowNwroP6HDq24WRth57WlCsRQ%2FKv8DCE8QABoMNjM3NDIzMTgzODA1IgzYv6PG5%2Blf8HMa9cMq3AM4IAkgmh26TwbwqWECKiThuMQntA6%2Fzia4zAZWaLWXWfhD%2FeuNeo2E7h63EUhmr%2FRpGp5sswjsTkX33g5Grlj5Cz3pk3IRSxCKSN%2BrZYPcWxwAuZP5HwAnBMcHhOhD0kkgG7MsfyH%2BOi5R9GrWPAMN9Mq02nwm2yCVNhBpIYQX6sbc8xfO2ozrGsZcMWdrwKfnXA%2FrQ7szUwWbUO51Kfg1F68M1dKcKU1lPCF81YlgdGQzJiWDUlvXZSgGa%2FFf4U9XYLyKkpaVkeZk7UaIMgFc6oCIZgjcVpH0Lz1V16jx87brl54G9YdluFZ2DJWgH8YxOzT4YdwvGKoV1oSnuVPfS3xOvR43oJGtl9O2OfHM3LOIKVEOs4kJCvrlIDCQ6i%2BoUBpNsLK%2BL6go6R0Hixs3SjRoJcupCNiGSYO5Pc6spNkLBZA%2Fz0XJX46AOAkFkEa0A9K30zYj6c4pqjhIQRBkWcHRtv3UL7FOdeI%2BvZgOQNLdjmzsTgbp3Vb9CDCU8TZbMTzKrihTgRax1mZcGRs0yeGzeGCOuP1ote9uxHrHHDpdjwoU642bcpjmBNwQiv7o7dXyY5G7hiui9jCi8GYryh5gXhtTo2NW4Cvv3kc6%2BgiYTyFkK%2BTXwF4UujCVpdvDBjqkAaiwMRVabpoHDyzKy5SJtyaPznXGjBzpbRSxmTek35s2vYfVjoFdSx6skNwGCxiX9oi3P5rMdwVc2%2F8WDvl36juTkhbSb%2BziaQwnAmoMLkQrcp%2B6fMhU6wu6SHy8Mb39Ph65S0nGF3xNaCPb8feyPFgitBJ0E%2FJTVhwSozTz3p6F%2BQZOYNeq4Pzsn0DKWwFye%2F4JNH%2FPBo4ge6LdHiEPR4bcID9z&X-Amz-Signature=2cea2c2c5e3dead8a2f1c7ca7e60feaaf25b9be995ccece8416c31641d9b1cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RAA5P7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDeMItmkrC6qzszDU8LJambzh3bOqtcY%2BTMwDgQt4j7xQIhAJoyFCKFYr3NyBz8cyowNwroP6HDq24WRth57WlCsRQ%2FKv8DCE8QABoMNjM3NDIzMTgzODA1IgzYv6PG5%2Blf8HMa9cMq3AM4IAkgmh26TwbwqWECKiThuMQntA6%2Fzia4zAZWaLWXWfhD%2FeuNeo2E7h63EUhmr%2FRpGp5sswjsTkX33g5Grlj5Cz3pk3IRSxCKSN%2BrZYPcWxwAuZP5HwAnBMcHhOhD0kkgG7MsfyH%2BOi5R9GrWPAMN9Mq02nwm2yCVNhBpIYQX6sbc8xfO2ozrGsZcMWdrwKfnXA%2FrQ7szUwWbUO51Kfg1F68M1dKcKU1lPCF81YlgdGQzJiWDUlvXZSgGa%2FFf4U9XYLyKkpaVkeZk7UaIMgFc6oCIZgjcVpH0Lz1V16jx87brl54G9YdluFZ2DJWgH8YxOzT4YdwvGKoV1oSnuVPfS3xOvR43oJGtl9O2OfHM3LOIKVEOs4kJCvrlIDCQ6i%2BoUBpNsLK%2BL6go6R0Hixs3SjRoJcupCNiGSYO5Pc6spNkLBZA%2Fz0XJX46AOAkFkEa0A9K30zYj6c4pqjhIQRBkWcHRtv3UL7FOdeI%2BvZgOQNLdjmzsTgbp3Vb9CDCU8TZbMTzKrihTgRax1mZcGRs0yeGzeGCOuP1ote9uxHrHHDpdjwoU642bcpjmBNwQiv7o7dXyY5G7hiui9jCi8GYryh5gXhtTo2NW4Cvv3kc6%2BgiYTyFkK%2BTXwF4UujCVpdvDBjqkAaiwMRVabpoHDyzKy5SJtyaPznXGjBzpbRSxmTek35s2vYfVjoFdSx6skNwGCxiX9oi3P5rMdwVc2%2F8WDvl36juTkhbSb%2BziaQwnAmoMLkQrcp%2B6fMhU6wu6SHy8Mb39Ph65S0nGF3xNaCPb8feyPFgitBJ0E%2FJTVhwSozTz3p6F%2BQZOYNeq4Pzsn0DKWwFye%2F4JNH%2FPBo4ge6LdHiEPR4bcID9z&X-Amz-Signature=7ad0849f4fe715e6ba3f6f0c817525ed914550a918bfdf6df9abd08dda6e4ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RAA5P7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDeMItmkrC6qzszDU8LJambzh3bOqtcY%2BTMwDgQt4j7xQIhAJoyFCKFYr3NyBz8cyowNwroP6HDq24WRth57WlCsRQ%2FKv8DCE8QABoMNjM3NDIzMTgzODA1IgzYv6PG5%2Blf8HMa9cMq3AM4IAkgmh26TwbwqWECKiThuMQntA6%2Fzia4zAZWaLWXWfhD%2FeuNeo2E7h63EUhmr%2FRpGp5sswjsTkX33g5Grlj5Cz3pk3IRSxCKSN%2BrZYPcWxwAuZP5HwAnBMcHhOhD0kkgG7MsfyH%2BOi5R9GrWPAMN9Mq02nwm2yCVNhBpIYQX6sbc8xfO2ozrGsZcMWdrwKfnXA%2FrQ7szUwWbUO51Kfg1F68M1dKcKU1lPCF81YlgdGQzJiWDUlvXZSgGa%2FFf4U9XYLyKkpaVkeZk7UaIMgFc6oCIZgjcVpH0Lz1V16jx87brl54G9YdluFZ2DJWgH8YxOzT4YdwvGKoV1oSnuVPfS3xOvR43oJGtl9O2OfHM3LOIKVEOs4kJCvrlIDCQ6i%2BoUBpNsLK%2BL6go6R0Hixs3SjRoJcupCNiGSYO5Pc6spNkLBZA%2Fz0XJX46AOAkFkEa0A9K30zYj6c4pqjhIQRBkWcHRtv3UL7FOdeI%2BvZgOQNLdjmzsTgbp3Vb9CDCU8TZbMTzKrihTgRax1mZcGRs0yeGzeGCOuP1ote9uxHrHHDpdjwoU642bcpjmBNwQiv7o7dXyY5G7hiui9jCi8GYryh5gXhtTo2NW4Cvv3kc6%2BgiYTyFkK%2BTXwF4UujCVpdvDBjqkAaiwMRVabpoHDyzKy5SJtyaPznXGjBzpbRSxmTek35s2vYfVjoFdSx6skNwGCxiX9oi3P5rMdwVc2%2F8WDvl36juTkhbSb%2BziaQwnAmoMLkQrcp%2B6fMhU6wu6SHy8Mb39Ph65S0nGF3xNaCPb8feyPFgitBJ0E%2FJTVhwSozTz3p6F%2BQZOYNeq4Pzsn0DKWwFye%2F4JNH%2FPBo4ge6LdHiEPR4bcID9z&X-Amz-Signature=3286228a762ee685aca8fbb5b20d0432cda8aa2fae3b42706595b2d6d5b23a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RAA5P7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDeMItmkrC6qzszDU8LJambzh3bOqtcY%2BTMwDgQt4j7xQIhAJoyFCKFYr3NyBz8cyowNwroP6HDq24WRth57WlCsRQ%2FKv8DCE8QABoMNjM3NDIzMTgzODA1IgzYv6PG5%2Blf8HMa9cMq3AM4IAkgmh26TwbwqWECKiThuMQntA6%2Fzia4zAZWaLWXWfhD%2FeuNeo2E7h63EUhmr%2FRpGp5sswjsTkX33g5Grlj5Cz3pk3IRSxCKSN%2BrZYPcWxwAuZP5HwAnBMcHhOhD0kkgG7MsfyH%2BOi5R9GrWPAMN9Mq02nwm2yCVNhBpIYQX6sbc8xfO2ozrGsZcMWdrwKfnXA%2FrQ7szUwWbUO51Kfg1F68M1dKcKU1lPCF81YlgdGQzJiWDUlvXZSgGa%2FFf4U9XYLyKkpaVkeZk7UaIMgFc6oCIZgjcVpH0Lz1V16jx87brl54G9YdluFZ2DJWgH8YxOzT4YdwvGKoV1oSnuVPfS3xOvR43oJGtl9O2OfHM3LOIKVEOs4kJCvrlIDCQ6i%2BoUBpNsLK%2BL6go6R0Hixs3SjRoJcupCNiGSYO5Pc6spNkLBZA%2Fz0XJX46AOAkFkEa0A9K30zYj6c4pqjhIQRBkWcHRtv3UL7FOdeI%2BvZgOQNLdjmzsTgbp3Vb9CDCU8TZbMTzKrihTgRax1mZcGRs0yeGzeGCOuP1ote9uxHrHHDpdjwoU642bcpjmBNwQiv7o7dXyY5G7hiui9jCi8GYryh5gXhtTo2NW4Cvv3kc6%2BgiYTyFkK%2BTXwF4UujCVpdvDBjqkAaiwMRVabpoHDyzKy5SJtyaPznXGjBzpbRSxmTek35s2vYfVjoFdSx6skNwGCxiX9oi3P5rMdwVc2%2F8WDvl36juTkhbSb%2BziaQwnAmoMLkQrcp%2B6fMhU6wu6SHy8Mb39Ph65S0nGF3xNaCPb8feyPFgitBJ0E%2FJTVhwSozTz3p6F%2BQZOYNeq4Pzsn0DKWwFye%2F4JNH%2FPBo4ge6LdHiEPR4bcID9z&X-Amz-Signature=22b9fec64cb6dd44f672229d422eede10a0ae86fb2aae3b38a197a12e6ac18d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

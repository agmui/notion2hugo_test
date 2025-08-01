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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRRYPE2E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYZBfQEM0pP5e6QSlafuTDmOIjWCMjQxNUjWDpSeVwyAiEAj1J%2B1tf55Jn4i3qZAkdliF7bRXhb3wm%2BgOyHk%2FGH3uQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6%2BFEquVfculyiOkyrcA5rN%2FneZ0f9rilWovQydmrLBN944hyOJbvV3AvHICvJJEpm6fNHBdJDkpkPKqXb6%2FO7WokClXrRD6eV%2FMNm%2BgyTEzgM91eIJ3KjRYBAVBbATCJWJH2mHF8DjUAnBRHAyrqIxVq%2BX6MYrrnl1gc5Hnh5%2FyZXAUq0WfvBg7SHKzg87c1X%2BzkPl2HcgQtr%2BWDEYPQDUUuOCMYjrcmnZ5lbIns0NqGnfa6Hx9kO1Ep1IAPXYyv97YA%2B%2F2NVgHLIo5q6s8NOQBkFJuj8NpGOlL%2FA5yKmzBzfDUKQMI9Fuq34xtwzlAH6yW7eXuZcXUn8PrPZdIbAu44kQENo723%2BUws2StCd7zCvsioZvflP16GQGbHE%2FjXfxy0nBWgUFerOQTLUyMk5s7%2BstJTNvELbeQziGnyqHohSAHccQzZM0V%2BAHE8tNsjpTMtmI6bdVn1gXBOXz3KfGy%2FQs5EYXIvgsIW1M3tL3RFk5Dq%2FSHr3eHG%2F1KEhjOo%2FpW%2BSC%2FrNUCdJ9eKnr5flEeFFCSSD%2ByLeDll6rbb3jzyczDMkQQ0uckLDQL0ISzoqgwbRbw57b9dm5eVF10971dPyq6hrwP6zUPuDV5ktSGM7wfXoiBDa%2BIcUPNJG2BjN1rMijxjc2Cpk6MIWRssQGOqUBvHXJAa3cG0aq2Ou3eWE7oDjyZEwXvGgn%2FE6INO%2Ba%2BqzLJtBYylS%2BkVxm3F4ro4o9PL2Jgpmj6TWE%2FHsIiF6wnIhdtTpDq772sqkmiiiSYwv37iym8ahA6wVrpz%2BpLXPy9Mw8ECecVXYjAaKAebrvw253co4vWMCBfXlFZ7wVEXaG4A4tQc5xW%2FEetSuEscD8zLxgYZuhxGOmaxekAPYFu8kACBMS&X-Amz-Signature=d85472c5f4c71e901152bebfc8759ee5f3dc9b298443e24804aebbe425dc9318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRRYPE2E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYZBfQEM0pP5e6QSlafuTDmOIjWCMjQxNUjWDpSeVwyAiEAj1J%2B1tf55Jn4i3qZAkdliF7bRXhb3wm%2BgOyHk%2FGH3uQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6%2BFEquVfculyiOkyrcA5rN%2FneZ0f9rilWovQydmrLBN944hyOJbvV3AvHICvJJEpm6fNHBdJDkpkPKqXb6%2FO7WokClXrRD6eV%2FMNm%2BgyTEzgM91eIJ3KjRYBAVBbATCJWJH2mHF8DjUAnBRHAyrqIxVq%2BX6MYrrnl1gc5Hnh5%2FyZXAUq0WfvBg7SHKzg87c1X%2BzkPl2HcgQtr%2BWDEYPQDUUuOCMYjrcmnZ5lbIns0NqGnfa6Hx9kO1Ep1IAPXYyv97YA%2B%2F2NVgHLIo5q6s8NOQBkFJuj8NpGOlL%2FA5yKmzBzfDUKQMI9Fuq34xtwzlAH6yW7eXuZcXUn8PrPZdIbAu44kQENo723%2BUws2StCd7zCvsioZvflP16GQGbHE%2FjXfxy0nBWgUFerOQTLUyMk5s7%2BstJTNvELbeQziGnyqHohSAHccQzZM0V%2BAHE8tNsjpTMtmI6bdVn1gXBOXz3KfGy%2FQs5EYXIvgsIW1M3tL3RFk5Dq%2FSHr3eHG%2F1KEhjOo%2FpW%2BSC%2FrNUCdJ9eKnr5flEeFFCSSD%2ByLeDll6rbb3jzyczDMkQQ0uckLDQL0ISzoqgwbRbw57b9dm5eVF10971dPyq6hrwP6zUPuDV5ktSGM7wfXoiBDa%2BIcUPNJG2BjN1rMijxjc2Cpk6MIWRssQGOqUBvHXJAa3cG0aq2Ou3eWE7oDjyZEwXvGgn%2FE6INO%2Ba%2BqzLJtBYylS%2BkVxm3F4ro4o9PL2Jgpmj6TWE%2FHsIiF6wnIhdtTpDq772sqkmiiiSYwv37iym8ahA6wVrpz%2BpLXPy9Mw8ECecVXYjAaKAebrvw253co4vWMCBfXlFZ7wVEXaG4A4tQc5xW%2FEetSuEscD8zLxgYZuhxGOmaxekAPYFu8kACBMS&X-Amz-Signature=4408fb1fc878b996c456bb4999725fa7613fe461fbb8bb64a59607bb56f03fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRRYPE2E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYZBfQEM0pP5e6QSlafuTDmOIjWCMjQxNUjWDpSeVwyAiEAj1J%2B1tf55Jn4i3qZAkdliF7bRXhb3wm%2BgOyHk%2FGH3uQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6%2BFEquVfculyiOkyrcA5rN%2FneZ0f9rilWovQydmrLBN944hyOJbvV3AvHICvJJEpm6fNHBdJDkpkPKqXb6%2FO7WokClXrRD6eV%2FMNm%2BgyTEzgM91eIJ3KjRYBAVBbATCJWJH2mHF8DjUAnBRHAyrqIxVq%2BX6MYrrnl1gc5Hnh5%2FyZXAUq0WfvBg7SHKzg87c1X%2BzkPl2HcgQtr%2BWDEYPQDUUuOCMYjrcmnZ5lbIns0NqGnfa6Hx9kO1Ep1IAPXYyv97YA%2B%2F2NVgHLIo5q6s8NOQBkFJuj8NpGOlL%2FA5yKmzBzfDUKQMI9Fuq34xtwzlAH6yW7eXuZcXUn8PrPZdIbAu44kQENo723%2BUws2StCd7zCvsioZvflP16GQGbHE%2FjXfxy0nBWgUFerOQTLUyMk5s7%2BstJTNvELbeQziGnyqHohSAHccQzZM0V%2BAHE8tNsjpTMtmI6bdVn1gXBOXz3KfGy%2FQs5EYXIvgsIW1M3tL3RFk5Dq%2FSHr3eHG%2F1KEhjOo%2FpW%2BSC%2FrNUCdJ9eKnr5flEeFFCSSD%2ByLeDll6rbb3jzyczDMkQQ0uckLDQL0ISzoqgwbRbw57b9dm5eVF10971dPyq6hrwP6zUPuDV5ktSGM7wfXoiBDa%2BIcUPNJG2BjN1rMijxjc2Cpk6MIWRssQGOqUBvHXJAa3cG0aq2Ou3eWE7oDjyZEwXvGgn%2FE6INO%2Ba%2BqzLJtBYylS%2BkVxm3F4ro4o9PL2Jgpmj6TWE%2FHsIiF6wnIhdtTpDq772sqkmiiiSYwv37iym8ahA6wVrpz%2BpLXPy9Mw8ECecVXYjAaKAebrvw253co4vWMCBfXlFZ7wVEXaG4A4tQc5xW%2FEetSuEscD8zLxgYZuhxGOmaxekAPYFu8kACBMS&X-Amz-Signature=774e6a67d4740337a56920057e55e13297d59fcd2f03f6356a4e354517c8bffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRRYPE2E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYZBfQEM0pP5e6QSlafuTDmOIjWCMjQxNUjWDpSeVwyAiEAj1J%2B1tf55Jn4i3qZAkdliF7bRXhb3wm%2BgOyHk%2FGH3uQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6%2BFEquVfculyiOkyrcA5rN%2FneZ0f9rilWovQydmrLBN944hyOJbvV3AvHICvJJEpm6fNHBdJDkpkPKqXb6%2FO7WokClXrRD6eV%2FMNm%2BgyTEzgM91eIJ3KjRYBAVBbATCJWJH2mHF8DjUAnBRHAyrqIxVq%2BX6MYrrnl1gc5Hnh5%2FyZXAUq0WfvBg7SHKzg87c1X%2BzkPl2HcgQtr%2BWDEYPQDUUuOCMYjrcmnZ5lbIns0NqGnfa6Hx9kO1Ep1IAPXYyv97YA%2B%2F2NVgHLIo5q6s8NOQBkFJuj8NpGOlL%2FA5yKmzBzfDUKQMI9Fuq34xtwzlAH6yW7eXuZcXUn8PrPZdIbAu44kQENo723%2BUws2StCd7zCvsioZvflP16GQGbHE%2FjXfxy0nBWgUFerOQTLUyMk5s7%2BstJTNvELbeQziGnyqHohSAHccQzZM0V%2BAHE8tNsjpTMtmI6bdVn1gXBOXz3KfGy%2FQs5EYXIvgsIW1M3tL3RFk5Dq%2FSHr3eHG%2F1KEhjOo%2FpW%2BSC%2FrNUCdJ9eKnr5flEeFFCSSD%2ByLeDll6rbb3jzyczDMkQQ0uckLDQL0ISzoqgwbRbw57b9dm5eVF10971dPyq6hrwP6zUPuDV5ktSGM7wfXoiBDa%2BIcUPNJG2BjN1rMijxjc2Cpk6MIWRssQGOqUBvHXJAa3cG0aq2Ou3eWE7oDjyZEwXvGgn%2FE6INO%2Ba%2BqzLJtBYylS%2BkVxm3F4ro4o9PL2Jgpmj6TWE%2FHsIiF6wnIhdtTpDq772sqkmiiiSYwv37iym8ahA6wVrpz%2BpLXPy9Mw8ECecVXYjAaKAebrvw253co4vWMCBfXlFZ7wVEXaG4A4tQc5xW%2FEetSuEscD8zLxgYZuhxGOmaxekAPYFu8kACBMS&X-Amz-Signature=a65e2353b808d4361c9cdb243d17151c9d4b41e26f223365cec339ae106f8690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRRYPE2E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYZBfQEM0pP5e6QSlafuTDmOIjWCMjQxNUjWDpSeVwyAiEAj1J%2B1tf55Jn4i3qZAkdliF7bRXhb3wm%2BgOyHk%2FGH3uQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6%2BFEquVfculyiOkyrcA5rN%2FneZ0f9rilWovQydmrLBN944hyOJbvV3AvHICvJJEpm6fNHBdJDkpkPKqXb6%2FO7WokClXrRD6eV%2FMNm%2BgyTEzgM91eIJ3KjRYBAVBbATCJWJH2mHF8DjUAnBRHAyrqIxVq%2BX6MYrrnl1gc5Hnh5%2FyZXAUq0WfvBg7SHKzg87c1X%2BzkPl2HcgQtr%2BWDEYPQDUUuOCMYjrcmnZ5lbIns0NqGnfa6Hx9kO1Ep1IAPXYyv97YA%2B%2F2NVgHLIo5q6s8NOQBkFJuj8NpGOlL%2FA5yKmzBzfDUKQMI9Fuq34xtwzlAH6yW7eXuZcXUn8PrPZdIbAu44kQENo723%2BUws2StCd7zCvsioZvflP16GQGbHE%2FjXfxy0nBWgUFerOQTLUyMk5s7%2BstJTNvELbeQziGnyqHohSAHccQzZM0V%2BAHE8tNsjpTMtmI6bdVn1gXBOXz3KfGy%2FQs5EYXIvgsIW1M3tL3RFk5Dq%2FSHr3eHG%2F1KEhjOo%2FpW%2BSC%2FrNUCdJ9eKnr5flEeFFCSSD%2ByLeDll6rbb3jzyczDMkQQ0uckLDQL0ISzoqgwbRbw57b9dm5eVF10971dPyq6hrwP6zUPuDV5ktSGM7wfXoiBDa%2BIcUPNJG2BjN1rMijxjc2Cpk6MIWRssQGOqUBvHXJAa3cG0aq2Ou3eWE7oDjyZEwXvGgn%2FE6INO%2Ba%2BqzLJtBYylS%2BkVxm3F4ro4o9PL2Jgpmj6TWE%2FHsIiF6wnIhdtTpDq772sqkmiiiSYwv37iym8ahA6wVrpz%2BpLXPy9Mw8ECecVXYjAaKAebrvw253co4vWMCBfXlFZ7wVEXaG4A4tQc5xW%2FEetSuEscD8zLxgYZuhxGOmaxekAPYFu8kACBMS&X-Amz-Signature=1a0e79a0efab973141dba67e1efe8e59faa0b2e74b4d5ad30c979b750d777771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRRYPE2E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYZBfQEM0pP5e6QSlafuTDmOIjWCMjQxNUjWDpSeVwyAiEAj1J%2B1tf55Jn4i3qZAkdliF7bRXhb3wm%2BgOyHk%2FGH3uQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6%2BFEquVfculyiOkyrcA5rN%2FneZ0f9rilWovQydmrLBN944hyOJbvV3AvHICvJJEpm6fNHBdJDkpkPKqXb6%2FO7WokClXrRD6eV%2FMNm%2BgyTEzgM91eIJ3KjRYBAVBbATCJWJH2mHF8DjUAnBRHAyrqIxVq%2BX6MYrrnl1gc5Hnh5%2FyZXAUq0WfvBg7SHKzg87c1X%2BzkPl2HcgQtr%2BWDEYPQDUUuOCMYjrcmnZ5lbIns0NqGnfa6Hx9kO1Ep1IAPXYyv97YA%2B%2F2NVgHLIo5q6s8NOQBkFJuj8NpGOlL%2FA5yKmzBzfDUKQMI9Fuq34xtwzlAH6yW7eXuZcXUn8PrPZdIbAu44kQENo723%2BUws2StCd7zCvsioZvflP16GQGbHE%2FjXfxy0nBWgUFerOQTLUyMk5s7%2BstJTNvELbeQziGnyqHohSAHccQzZM0V%2BAHE8tNsjpTMtmI6bdVn1gXBOXz3KfGy%2FQs5EYXIvgsIW1M3tL3RFk5Dq%2FSHr3eHG%2F1KEhjOo%2FpW%2BSC%2FrNUCdJ9eKnr5flEeFFCSSD%2ByLeDll6rbb3jzyczDMkQQ0uckLDQL0ISzoqgwbRbw57b9dm5eVF10971dPyq6hrwP6zUPuDV5ktSGM7wfXoiBDa%2BIcUPNJG2BjN1rMijxjc2Cpk6MIWRssQGOqUBvHXJAa3cG0aq2Ou3eWE7oDjyZEwXvGgn%2FE6INO%2Ba%2BqzLJtBYylS%2BkVxm3F4ro4o9PL2Jgpmj6TWE%2FHsIiF6wnIhdtTpDq772sqkmiiiSYwv37iym8ahA6wVrpz%2BpLXPy9Mw8ECecVXYjAaKAebrvw253co4vWMCBfXlFZ7wVEXaG4A4tQc5xW%2FEetSuEscD8zLxgYZuhxGOmaxekAPYFu8kACBMS&X-Amz-Signature=c8ab0f54598fb58b115b353a19764167dacc5cd6f9f1df0a3098c4641614fd18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRRYPE2E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYZBfQEM0pP5e6QSlafuTDmOIjWCMjQxNUjWDpSeVwyAiEAj1J%2B1tf55Jn4i3qZAkdliF7bRXhb3wm%2BgOyHk%2FGH3uQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6%2BFEquVfculyiOkyrcA5rN%2FneZ0f9rilWovQydmrLBN944hyOJbvV3AvHICvJJEpm6fNHBdJDkpkPKqXb6%2FO7WokClXrRD6eV%2FMNm%2BgyTEzgM91eIJ3KjRYBAVBbATCJWJH2mHF8DjUAnBRHAyrqIxVq%2BX6MYrrnl1gc5Hnh5%2FyZXAUq0WfvBg7SHKzg87c1X%2BzkPl2HcgQtr%2BWDEYPQDUUuOCMYjrcmnZ5lbIns0NqGnfa6Hx9kO1Ep1IAPXYyv97YA%2B%2F2NVgHLIo5q6s8NOQBkFJuj8NpGOlL%2FA5yKmzBzfDUKQMI9Fuq34xtwzlAH6yW7eXuZcXUn8PrPZdIbAu44kQENo723%2BUws2StCd7zCvsioZvflP16GQGbHE%2FjXfxy0nBWgUFerOQTLUyMk5s7%2BstJTNvELbeQziGnyqHohSAHccQzZM0V%2BAHE8tNsjpTMtmI6bdVn1gXBOXz3KfGy%2FQs5EYXIvgsIW1M3tL3RFk5Dq%2FSHr3eHG%2F1KEhjOo%2FpW%2BSC%2FrNUCdJ9eKnr5flEeFFCSSD%2ByLeDll6rbb3jzyczDMkQQ0uckLDQL0ISzoqgwbRbw57b9dm5eVF10971dPyq6hrwP6zUPuDV5ktSGM7wfXoiBDa%2BIcUPNJG2BjN1rMijxjc2Cpk6MIWRssQGOqUBvHXJAa3cG0aq2Ou3eWE7oDjyZEwXvGgn%2FE6INO%2Ba%2BqzLJtBYylS%2BkVxm3F4ro4o9PL2Jgpmj6TWE%2FHsIiF6wnIhdtTpDq772sqkmiiiSYwv37iym8ahA6wVrpz%2BpLXPy9Mw8ECecVXYjAaKAebrvw253co4vWMCBfXlFZ7wVEXaG4A4tQc5xW%2FEetSuEscD8zLxgYZuhxGOmaxekAPYFu8kACBMS&X-Amz-Signature=63701d79e99a5cf8448520d72c9f90d158540acafd5407a53668c510407c19c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

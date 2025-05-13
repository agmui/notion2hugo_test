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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTXQULA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA2KhPF%2FrxePANZQ8GCxt0f3z3X2Esb%2BXCqEMJeizyAoAiBQ6T6SAZRwsWCyXsjK%2FxqiNF1Ov4rlysdChEcHCXRP5CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84tl1dM5%2B38bKf6XKtwDhau51jS%2BZf8fZiwE%2FKxakvaP9rM0A%2FPna%2Fszstxd2QRnLiIvQNkPU1%2FM%2F7P0CTexvEjqUp9pSQp0QxpeWtzIFmCfw6RI%2Beeky7SCaPfJXmY8VWbzWLyJqimFcR3ghnquJy6UQhixJmzgsTDkKSsV7yDzBMQjKICgixBgLWzmq0UQwULwCFMaoNphE%2F7JjWSecf6e%2FJuPbEgaifhVTuFE%2BHCiOwpmmki8arfDV1FZ4pxNnk8MEJDYApzIDcqJGIn8ji4y3kO6ZWB8Z%2BSQ7b5j4BsiwqW%2B9zJlaFD58xCIHY0An3bjRltlDt6JNCGKaFjqxJC6BioTubJbOTqlhKnBYfu9oB%2B5KEsTBsQrVEVITYN31zBLgWp7jBhjpua9yPky5n%2F93ClR2MigxTJrJ19nHFJ98u2uer3DOLfyrKeNRuomBVf%2FwceOOa8YpbTRqtLA%2FnI97uePlxB43f85yTOwQKXj2NzmdWfW9tQmcPYVg606ZwEIaw8Kay7GcPFC3J2oNGl85UdOym8c1LgAEKCPmyqKhcJ%2FRYlgBqudp9MlKQpscM2vsmw2Uyn89vCPymSQvaOstJe1fgAjCiBL3X8cvxYOig5WTkDpF1%2Ft6XA2TIH1AQ5uoqema%2BoRcMMw48aKwQY6pgFvKJHU2nDBtFqtyxkfiqbYTUFaGbL%2FhDHMuPOXJTmqoz5HveO8YpjvKdbvW5E%2B1ZKGiz%2BWAc91%2FoFFQ1P8XeJjU5QFCaOs8qDSrT8cHHKZaA88uHC%2F%2B7rlNnPwuv3g3CEHYEv0osoURS5VnpnzCKd8II3qRnyk3K3RKB6nt96HNvxuZcz2swp9mVt6YVVcRZulPz2Ncd7tilpjB09puiqCTs6Azeru&X-Amz-Signature=2eb96e9cb3845508f2647eeadec8e1ef2770905c91450b94accd56600cd5b95c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTXQULA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA2KhPF%2FrxePANZQ8GCxt0f3z3X2Esb%2BXCqEMJeizyAoAiBQ6T6SAZRwsWCyXsjK%2FxqiNF1Ov4rlysdChEcHCXRP5CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84tl1dM5%2B38bKf6XKtwDhau51jS%2BZf8fZiwE%2FKxakvaP9rM0A%2FPna%2Fszstxd2QRnLiIvQNkPU1%2FM%2F7P0CTexvEjqUp9pSQp0QxpeWtzIFmCfw6RI%2Beeky7SCaPfJXmY8VWbzWLyJqimFcR3ghnquJy6UQhixJmzgsTDkKSsV7yDzBMQjKICgixBgLWzmq0UQwULwCFMaoNphE%2F7JjWSecf6e%2FJuPbEgaifhVTuFE%2BHCiOwpmmki8arfDV1FZ4pxNnk8MEJDYApzIDcqJGIn8ji4y3kO6ZWB8Z%2BSQ7b5j4BsiwqW%2B9zJlaFD58xCIHY0An3bjRltlDt6JNCGKaFjqxJC6BioTubJbOTqlhKnBYfu9oB%2B5KEsTBsQrVEVITYN31zBLgWp7jBhjpua9yPky5n%2F93ClR2MigxTJrJ19nHFJ98u2uer3DOLfyrKeNRuomBVf%2FwceOOa8YpbTRqtLA%2FnI97uePlxB43f85yTOwQKXj2NzmdWfW9tQmcPYVg606ZwEIaw8Kay7GcPFC3J2oNGl85UdOym8c1LgAEKCPmyqKhcJ%2FRYlgBqudp9MlKQpscM2vsmw2Uyn89vCPymSQvaOstJe1fgAjCiBL3X8cvxYOig5WTkDpF1%2Ft6XA2TIH1AQ5uoqema%2BoRcMMw48aKwQY6pgFvKJHU2nDBtFqtyxkfiqbYTUFaGbL%2FhDHMuPOXJTmqoz5HveO8YpjvKdbvW5E%2B1ZKGiz%2BWAc91%2FoFFQ1P8XeJjU5QFCaOs8qDSrT8cHHKZaA88uHC%2F%2B7rlNnPwuv3g3CEHYEv0osoURS5VnpnzCKd8II3qRnyk3K3RKB6nt96HNvxuZcz2swp9mVt6YVVcRZulPz2Ncd7tilpjB09puiqCTs6Azeru&X-Amz-Signature=2e51505ee10dc45bb124a68df001c05cfe38338139986bd037bded6544f269c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTXQULA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA2KhPF%2FrxePANZQ8GCxt0f3z3X2Esb%2BXCqEMJeizyAoAiBQ6T6SAZRwsWCyXsjK%2FxqiNF1Ov4rlysdChEcHCXRP5CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84tl1dM5%2B38bKf6XKtwDhau51jS%2BZf8fZiwE%2FKxakvaP9rM0A%2FPna%2Fszstxd2QRnLiIvQNkPU1%2FM%2F7P0CTexvEjqUp9pSQp0QxpeWtzIFmCfw6RI%2Beeky7SCaPfJXmY8VWbzWLyJqimFcR3ghnquJy6UQhixJmzgsTDkKSsV7yDzBMQjKICgixBgLWzmq0UQwULwCFMaoNphE%2F7JjWSecf6e%2FJuPbEgaifhVTuFE%2BHCiOwpmmki8arfDV1FZ4pxNnk8MEJDYApzIDcqJGIn8ji4y3kO6ZWB8Z%2BSQ7b5j4BsiwqW%2B9zJlaFD58xCIHY0An3bjRltlDt6JNCGKaFjqxJC6BioTubJbOTqlhKnBYfu9oB%2B5KEsTBsQrVEVITYN31zBLgWp7jBhjpua9yPky5n%2F93ClR2MigxTJrJ19nHFJ98u2uer3DOLfyrKeNRuomBVf%2FwceOOa8YpbTRqtLA%2FnI97uePlxB43f85yTOwQKXj2NzmdWfW9tQmcPYVg606ZwEIaw8Kay7GcPFC3J2oNGl85UdOym8c1LgAEKCPmyqKhcJ%2FRYlgBqudp9MlKQpscM2vsmw2Uyn89vCPymSQvaOstJe1fgAjCiBL3X8cvxYOig5WTkDpF1%2Ft6XA2TIH1AQ5uoqema%2BoRcMMw48aKwQY6pgFvKJHU2nDBtFqtyxkfiqbYTUFaGbL%2FhDHMuPOXJTmqoz5HveO8YpjvKdbvW5E%2B1ZKGiz%2BWAc91%2FoFFQ1P8XeJjU5QFCaOs8qDSrT8cHHKZaA88uHC%2F%2B7rlNnPwuv3g3CEHYEv0osoURS5VnpnzCKd8II3qRnyk3K3RKB6nt96HNvxuZcz2swp9mVt6YVVcRZulPz2Ncd7tilpjB09puiqCTs6Azeru&X-Amz-Signature=16f1da9b6714e7b76df1a44e253d8d7a8ebd04008eaad24ee7183f3838ff75e1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTXQULA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA2KhPF%2FrxePANZQ8GCxt0f3z3X2Esb%2BXCqEMJeizyAoAiBQ6T6SAZRwsWCyXsjK%2FxqiNF1Ov4rlysdChEcHCXRP5CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84tl1dM5%2B38bKf6XKtwDhau51jS%2BZf8fZiwE%2FKxakvaP9rM0A%2FPna%2Fszstxd2QRnLiIvQNkPU1%2FM%2F7P0CTexvEjqUp9pSQp0QxpeWtzIFmCfw6RI%2Beeky7SCaPfJXmY8VWbzWLyJqimFcR3ghnquJy6UQhixJmzgsTDkKSsV7yDzBMQjKICgixBgLWzmq0UQwULwCFMaoNphE%2F7JjWSecf6e%2FJuPbEgaifhVTuFE%2BHCiOwpmmki8arfDV1FZ4pxNnk8MEJDYApzIDcqJGIn8ji4y3kO6ZWB8Z%2BSQ7b5j4BsiwqW%2B9zJlaFD58xCIHY0An3bjRltlDt6JNCGKaFjqxJC6BioTubJbOTqlhKnBYfu9oB%2B5KEsTBsQrVEVITYN31zBLgWp7jBhjpua9yPky5n%2F93ClR2MigxTJrJ19nHFJ98u2uer3DOLfyrKeNRuomBVf%2FwceOOa8YpbTRqtLA%2FnI97uePlxB43f85yTOwQKXj2NzmdWfW9tQmcPYVg606ZwEIaw8Kay7GcPFC3J2oNGl85UdOym8c1LgAEKCPmyqKhcJ%2FRYlgBqudp9MlKQpscM2vsmw2Uyn89vCPymSQvaOstJe1fgAjCiBL3X8cvxYOig5WTkDpF1%2Ft6XA2TIH1AQ5uoqema%2BoRcMMw48aKwQY6pgFvKJHU2nDBtFqtyxkfiqbYTUFaGbL%2FhDHMuPOXJTmqoz5HveO8YpjvKdbvW5E%2B1ZKGiz%2BWAc91%2FoFFQ1P8XeJjU5QFCaOs8qDSrT8cHHKZaA88uHC%2F%2B7rlNnPwuv3g3CEHYEv0osoURS5VnpnzCKd8II3qRnyk3K3RKB6nt96HNvxuZcz2swp9mVt6YVVcRZulPz2Ncd7tilpjB09puiqCTs6Azeru&X-Amz-Signature=0cd521b098c762243ad8039e19acbfd9ddaa0e6a953b55aa3ce5b8edaa45a56e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTXQULA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA2KhPF%2FrxePANZQ8GCxt0f3z3X2Esb%2BXCqEMJeizyAoAiBQ6T6SAZRwsWCyXsjK%2FxqiNF1Ov4rlysdChEcHCXRP5CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84tl1dM5%2B38bKf6XKtwDhau51jS%2BZf8fZiwE%2FKxakvaP9rM0A%2FPna%2Fszstxd2QRnLiIvQNkPU1%2FM%2F7P0CTexvEjqUp9pSQp0QxpeWtzIFmCfw6RI%2Beeky7SCaPfJXmY8VWbzWLyJqimFcR3ghnquJy6UQhixJmzgsTDkKSsV7yDzBMQjKICgixBgLWzmq0UQwULwCFMaoNphE%2F7JjWSecf6e%2FJuPbEgaifhVTuFE%2BHCiOwpmmki8arfDV1FZ4pxNnk8MEJDYApzIDcqJGIn8ji4y3kO6ZWB8Z%2BSQ7b5j4BsiwqW%2B9zJlaFD58xCIHY0An3bjRltlDt6JNCGKaFjqxJC6BioTubJbOTqlhKnBYfu9oB%2B5KEsTBsQrVEVITYN31zBLgWp7jBhjpua9yPky5n%2F93ClR2MigxTJrJ19nHFJ98u2uer3DOLfyrKeNRuomBVf%2FwceOOa8YpbTRqtLA%2FnI97uePlxB43f85yTOwQKXj2NzmdWfW9tQmcPYVg606ZwEIaw8Kay7GcPFC3J2oNGl85UdOym8c1LgAEKCPmyqKhcJ%2FRYlgBqudp9MlKQpscM2vsmw2Uyn89vCPymSQvaOstJe1fgAjCiBL3X8cvxYOig5WTkDpF1%2Ft6XA2TIH1AQ5uoqema%2BoRcMMw48aKwQY6pgFvKJHU2nDBtFqtyxkfiqbYTUFaGbL%2FhDHMuPOXJTmqoz5HveO8YpjvKdbvW5E%2B1ZKGiz%2BWAc91%2FoFFQ1P8XeJjU5QFCaOs8qDSrT8cHHKZaA88uHC%2F%2B7rlNnPwuv3g3CEHYEv0osoURS5VnpnzCKd8II3qRnyk3K3RKB6nt96HNvxuZcz2swp9mVt6YVVcRZulPz2Ncd7tilpjB09puiqCTs6Azeru&X-Amz-Signature=1f99d731a99d1b381fcb6184f00fea2bd20f94620ef4ac33a8d9e93bbc22ca24&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTXQULA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA2KhPF%2FrxePANZQ8GCxt0f3z3X2Esb%2BXCqEMJeizyAoAiBQ6T6SAZRwsWCyXsjK%2FxqiNF1Ov4rlysdChEcHCXRP5CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84tl1dM5%2B38bKf6XKtwDhau51jS%2BZf8fZiwE%2FKxakvaP9rM0A%2FPna%2Fszstxd2QRnLiIvQNkPU1%2FM%2F7P0CTexvEjqUp9pSQp0QxpeWtzIFmCfw6RI%2Beeky7SCaPfJXmY8VWbzWLyJqimFcR3ghnquJy6UQhixJmzgsTDkKSsV7yDzBMQjKICgixBgLWzmq0UQwULwCFMaoNphE%2F7JjWSecf6e%2FJuPbEgaifhVTuFE%2BHCiOwpmmki8arfDV1FZ4pxNnk8MEJDYApzIDcqJGIn8ji4y3kO6ZWB8Z%2BSQ7b5j4BsiwqW%2B9zJlaFD58xCIHY0An3bjRltlDt6JNCGKaFjqxJC6BioTubJbOTqlhKnBYfu9oB%2B5KEsTBsQrVEVITYN31zBLgWp7jBhjpua9yPky5n%2F93ClR2MigxTJrJ19nHFJ98u2uer3DOLfyrKeNRuomBVf%2FwceOOa8YpbTRqtLA%2FnI97uePlxB43f85yTOwQKXj2NzmdWfW9tQmcPYVg606ZwEIaw8Kay7GcPFC3J2oNGl85UdOym8c1LgAEKCPmyqKhcJ%2FRYlgBqudp9MlKQpscM2vsmw2Uyn89vCPymSQvaOstJe1fgAjCiBL3X8cvxYOig5WTkDpF1%2Ft6XA2TIH1AQ5uoqema%2BoRcMMw48aKwQY6pgFvKJHU2nDBtFqtyxkfiqbYTUFaGbL%2FhDHMuPOXJTmqoz5HveO8YpjvKdbvW5E%2B1ZKGiz%2BWAc91%2FoFFQ1P8XeJjU5QFCaOs8qDSrT8cHHKZaA88uHC%2F%2B7rlNnPwuv3g3CEHYEv0osoURS5VnpnzCKd8II3qRnyk3K3RKB6nt96HNvxuZcz2swp9mVt6YVVcRZulPz2Ncd7tilpjB09puiqCTs6Azeru&X-Amz-Signature=e5308a5c3b01880caffefb016d7d9c0c104d8be74197bb92f8298c579aaee257&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTXQULA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA2KhPF%2FrxePANZQ8GCxt0f3z3X2Esb%2BXCqEMJeizyAoAiBQ6T6SAZRwsWCyXsjK%2FxqiNF1Ov4rlysdChEcHCXRP5CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84tl1dM5%2B38bKf6XKtwDhau51jS%2BZf8fZiwE%2FKxakvaP9rM0A%2FPna%2Fszstxd2QRnLiIvQNkPU1%2FM%2F7P0CTexvEjqUp9pSQp0QxpeWtzIFmCfw6RI%2Beeky7SCaPfJXmY8VWbzWLyJqimFcR3ghnquJy6UQhixJmzgsTDkKSsV7yDzBMQjKICgixBgLWzmq0UQwULwCFMaoNphE%2F7JjWSecf6e%2FJuPbEgaifhVTuFE%2BHCiOwpmmki8arfDV1FZ4pxNnk8MEJDYApzIDcqJGIn8ji4y3kO6ZWB8Z%2BSQ7b5j4BsiwqW%2B9zJlaFD58xCIHY0An3bjRltlDt6JNCGKaFjqxJC6BioTubJbOTqlhKnBYfu9oB%2B5KEsTBsQrVEVITYN31zBLgWp7jBhjpua9yPky5n%2F93ClR2MigxTJrJ19nHFJ98u2uer3DOLfyrKeNRuomBVf%2FwceOOa8YpbTRqtLA%2FnI97uePlxB43f85yTOwQKXj2NzmdWfW9tQmcPYVg606ZwEIaw8Kay7GcPFC3J2oNGl85UdOym8c1LgAEKCPmyqKhcJ%2FRYlgBqudp9MlKQpscM2vsmw2Uyn89vCPymSQvaOstJe1fgAjCiBL3X8cvxYOig5WTkDpF1%2Ft6XA2TIH1AQ5uoqema%2BoRcMMw48aKwQY6pgFvKJHU2nDBtFqtyxkfiqbYTUFaGbL%2FhDHMuPOXJTmqoz5HveO8YpjvKdbvW5E%2B1ZKGiz%2BWAc91%2FoFFQ1P8XeJjU5QFCaOs8qDSrT8cHHKZaA88uHC%2F%2B7rlNnPwuv3g3CEHYEv0osoURS5VnpnzCKd8II3qRnyk3K3RKB6nt96HNvxuZcz2swp9mVt6YVVcRZulPz2Ncd7tilpjB09puiqCTs6Azeru&X-Amz-Signature=e49b5dce77b7e8dd47a583285598ae5e0544f240b578ac2bf3b26cd6f3f0ca62&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

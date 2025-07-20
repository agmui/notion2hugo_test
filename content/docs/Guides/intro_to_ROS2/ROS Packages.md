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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH77L477%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzqQD2MjZYvTLFxRxK2jYS%2Bi5R8QCDyH%2FUI5ukOttRrAiA8JaxRS9qCuUwE7VDxag1T5VEL4oBQqu1RsWlgzEGaUyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeowg4MwiAh%2FUKSiKtwDgsEy%2B7GZtE5uHL%2FMULlSuh6hf5SEaBJ0uW0Cd%2FcGxeFFvo0oBjNaa4Qzw5PFCkwTLVT60FNHCxd9TTBDNE2TVxP7tfTVce9Di3SBa%2B%2Bi4JQuG%2FVKzvs1p17E7%2FQpUo%2F7WBpWb%2F3WCdP6WMs8KpsYREzkTZrFZYTWzLOVcgXCkxsl1vvMSgQxObzY9oBPW9cTgEKxpaf9AhMNV14DsYii0Lkcu3svPhh6kEwBGEreJuHzfeIhjb3%2Bi64tMRzwA9givIuDhq4Zq1j3teROB71e0YrAd9jHhT5wUvO3Td%2FrstXzJXyB%2Bk%2FZsCQLqwZumE1aXL1bC1urQzri%2BQhsunKEccSdNiQo0nYj6HPOK1IvwDjLVWXq8lO5nRDZavjAQc0sXYDjMfDdziyYTgV1vNNL7ZCVTNILZzYJ%2BWv%2B%2FiUL0OPI8IjWlJer1lBqxSH7nWEjLQhq6wFupklMABbPfokHirGWq10PD21Qg2OEk%2BbTDASd%2Bcv7%2FIOPQEnVKT5j4wm8iY4G7lGn%2BEoBLm9FxHWKMYaPrqNg8XDhGtU2qZX6XrqgQapwEr110qO6tu2E0%2FUkdS%2FE%2F8Gma0er0Aw6DUtkkW22HH97S4bWUw4%2FONYswJY%2B3DFjXnxD%2BQuO0Uswt9TzwwY6pgFu0ccsJyYJCykpjNZchnO%2Fm6iznmerNV%2B9n355x2Bbe%2Fk0riDdAqnkK%2BTtwRaaLR8FNXvBBLMcC35lrqCYxam1OH9hHd9bRXpZ9FDkIJFtvb4JS8QTh0zBncgXfUy3uh0g4TbWCdPhG59UF8NTkSTRcLTJEO%2BLGhWB0zWr7Zm8quWO0ffB2t57nZGnfoTO7bz6GmCv%2FV%2FBvyEI4HvGJ%2FE%2BrOys42wl&X-Amz-Signature=202c060b4e6cf842da58fc43866eeb261f23fdb522b01deec62ef9a62f3cca80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH77L477%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzqQD2MjZYvTLFxRxK2jYS%2Bi5R8QCDyH%2FUI5ukOttRrAiA8JaxRS9qCuUwE7VDxag1T5VEL4oBQqu1RsWlgzEGaUyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeowg4MwiAh%2FUKSiKtwDgsEy%2B7GZtE5uHL%2FMULlSuh6hf5SEaBJ0uW0Cd%2FcGxeFFvo0oBjNaa4Qzw5PFCkwTLVT60FNHCxd9TTBDNE2TVxP7tfTVce9Di3SBa%2B%2Bi4JQuG%2FVKzvs1p17E7%2FQpUo%2F7WBpWb%2F3WCdP6WMs8KpsYREzkTZrFZYTWzLOVcgXCkxsl1vvMSgQxObzY9oBPW9cTgEKxpaf9AhMNV14DsYii0Lkcu3svPhh6kEwBGEreJuHzfeIhjb3%2Bi64tMRzwA9givIuDhq4Zq1j3teROB71e0YrAd9jHhT5wUvO3Td%2FrstXzJXyB%2Bk%2FZsCQLqwZumE1aXL1bC1urQzri%2BQhsunKEccSdNiQo0nYj6HPOK1IvwDjLVWXq8lO5nRDZavjAQc0sXYDjMfDdziyYTgV1vNNL7ZCVTNILZzYJ%2BWv%2B%2FiUL0OPI8IjWlJer1lBqxSH7nWEjLQhq6wFupklMABbPfokHirGWq10PD21Qg2OEk%2BbTDASd%2Bcv7%2FIOPQEnVKT5j4wm8iY4G7lGn%2BEoBLm9FxHWKMYaPrqNg8XDhGtU2qZX6XrqgQapwEr110qO6tu2E0%2FUkdS%2FE%2F8Gma0er0Aw6DUtkkW22HH97S4bWUw4%2FONYswJY%2B3DFjXnxD%2BQuO0Uswt9TzwwY6pgFu0ccsJyYJCykpjNZchnO%2Fm6iznmerNV%2B9n355x2Bbe%2Fk0riDdAqnkK%2BTtwRaaLR8FNXvBBLMcC35lrqCYxam1OH9hHd9bRXpZ9FDkIJFtvb4JS8QTh0zBncgXfUy3uh0g4TbWCdPhG59UF8NTkSTRcLTJEO%2BLGhWB0zWr7Zm8quWO0ffB2t57nZGnfoTO7bz6GmCv%2FV%2FBvyEI4HvGJ%2FE%2BrOys42wl&X-Amz-Signature=e8332328f118fc8c6a6ada16cb6169fb5b0073f4d87d7e52ee8ccbe5d6cc8e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH77L477%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzqQD2MjZYvTLFxRxK2jYS%2Bi5R8QCDyH%2FUI5ukOttRrAiA8JaxRS9qCuUwE7VDxag1T5VEL4oBQqu1RsWlgzEGaUyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeowg4MwiAh%2FUKSiKtwDgsEy%2B7GZtE5uHL%2FMULlSuh6hf5SEaBJ0uW0Cd%2FcGxeFFvo0oBjNaa4Qzw5PFCkwTLVT60FNHCxd9TTBDNE2TVxP7tfTVce9Di3SBa%2B%2Bi4JQuG%2FVKzvs1p17E7%2FQpUo%2F7WBpWb%2F3WCdP6WMs8KpsYREzkTZrFZYTWzLOVcgXCkxsl1vvMSgQxObzY9oBPW9cTgEKxpaf9AhMNV14DsYii0Lkcu3svPhh6kEwBGEreJuHzfeIhjb3%2Bi64tMRzwA9givIuDhq4Zq1j3teROB71e0YrAd9jHhT5wUvO3Td%2FrstXzJXyB%2Bk%2FZsCQLqwZumE1aXL1bC1urQzri%2BQhsunKEccSdNiQo0nYj6HPOK1IvwDjLVWXq8lO5nRDZavjAQc0sXYDjMfDdziyYTgV1vNNL7ZCVTNILZzYJ%2BWv%2B%2FiUL0OPI8IjWlJer1lBqxSH7nWEjLQhq6wFupklMABbPfokHirGWq10PD21Qg2OEk%2BbTDASd%2Bcv7%2FIOPQEnVKT5j4wm8iY4G7lGn%2BEoBLm9FxHWKMYaPrqNg8XDhGtU2qZX6XrqgQapwEr110qO6tu2E0%2FUkdS%2FE%2F8Gma0er0Aw6DUtkkW22HH97S4bWUw4%2FONYswJY%2B3DFjXnxD%2BQuO0Uswt9TzwwY6pgFu0ccsJyYJCykpjNZchnO%2Fm6iznmerNV%2B9n355x2Bbe%2Fk0riDdAqnkK%2BTtwRaaLR8FNXvBBLMcC35lrqCYxam1OH9hHd9bRXpZ9FDkIJFtvb4JS8QTh0zBncgXfUy3uh0g4TbWCdPhG59UF8NTkSTRcLTJEO%2BLGhWB0zWr7Zm8quWO0ffB2t57nZGnfoTO7bz6GmCv%2FV%2FBvyEI4HvGJ%2FE%2BrOys42wl&X-Amz-Signature=7b099c488b42966a975f5d87e6acc3c3dbab5af78298d086efd233107e176d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH77L477%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzqQD2MjZYvTLFxRxK2jYS%2Bi5R8QCDyH%2FUI5ukOttRrAiA8JaxRS9qCuUwE7VDxag1T5VEL4oBQqu1RsWlgzEGaUyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeowg4MwiAh%2FUKSiKtwDgsEy%2B7GZtE5uHL%2FMULlSuh6hf5SEaBJ0uW0Cd%2FcGxeFFvo0oBjNaa4Qzw5PFCkwTLVT60FNHCxd9TTBDNE2TVxP7tfTVce9Di3SBa%2B%2Bi4JQuG%2FVKzvs1p17E7%2FQpUo%2F7WBpWb%2F3WCdP6WMs8KpsYREzkTZrFZYTWzLOVcgXCkxsl1vvMSgQxObzY9oBPW9cTgEKxpaf9AhMNV14DsYii0Lkcu3svPhh6kEwBGEreJuHzfeIhjb3%2Bi64tMRzwA9givIuDhq4Zq1j3teROB71e0YrAd9jHhT5wUvO3Td%2FrstXzJXyB%2Bk%2FZsCQLqwZumE1aXL1bC1urQzri%2BQhsunKEccSdNiQo0nYj6HPOK1IvwDjLVWXq8lO5nRDZavjAQc0sXYDjMfDdziyYTgV1vNNL7ZCVTNILZzYJ%2BWv%2B%2FiUL0OPI8IjWlJer1lBqxSH7nWEjLQhq6wFupklMABbPfokHirGWq10PD21Qg2OEk%2BbTDASd%2Bcv7%2FIOPQEnVKT5j4wm8iY4G7lGn%2BEoBLm9FxHWKMYaPrqNg8XDhGtU2qZX6XrqgQapwEr110qO6tu2E0%2FUkdS%2FE%2F8Gma0er0Aw6DUtkkW22HH97S4bWUw4%2FONYswJY%2B3DFjXnxD%2BQuO0Uswt9TzwwY6pgFu0ccsJyYJCykpjNZchnO%2Fm6iznmerNV%2B9n355x2Bbe%2Fk0riDdAqnkK%2BTtwRaaLR8FNXvBBLMcC35lrqCYxam1OH9hHd9bRXpZ9FDkIJFtvb4JS8QTh0zBncgXfUy3uh0g4TbWCdPhG59UF8NTkSTRcLTJEO%2BLGhWB0zWr7Zm8quWO0ffB2t57nZGnfoTO7bz6GmCv%2FV%2FBvyEI4HvGJ%2FE%2BrOys42wl&X-Amz-Signature=ba1c75a7a01690efb66ed35af0db65d4d86d015194ad14a2b6b0d0df46161b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH77L477%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzqQD2MjZYvTLFxRxK2jYS%2Bi5R8QCDyH%2FUI5ukOttRrAiA8JaxRS9qCuUwE7VDxag1T5VEL4oBQqu1RsWlgzEGaUyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeowg4MwiAh%2FUKSiKtwDgsEy%2B7GZtE5uHL%2FMULlSuh6hf5SEaBJ0uW0Cd%2FcGxeFFvo0oBjNaa4Qzw5PFCkwTLVT60FNHCxd9TTBDNE2TVxP7tfTVce9Di3SBa%2B%2Bi4JQuG%2FVKzvs1p17E7%2FQpUo%2F7WBpWb%2F3WCdP6WMs8KpsYREzkTZrFZYTWzLOVcgXCkxsl1vvMSgQxObzY9oBPW9cTgEKxpaf9AhMNV14DsYii0Lkcu3svPhh6kEwBGEreJuHzfeIhjb3%2Bi64tMRzwA9givIuDhq4Zq1j3teROB71e0YrAd9jHhT5wUvO3Td%2FrstXzJXyB%2Bk%2FZsCQLqwZumE1aXL1bC1urQzri%2BQhsunKEccSdNiQo0nYj6HPOK1IvwDjLVWXq8lO5nRDZavjAQc0sXYDjMfDdziyYTgV1vNNL7ZCVTNILZzYJ%2BWv%2B%2FiUL0OPI8IjWlJer1lBqxSH7nWEjLQhq6wFupklMABbPfokHirGWq10PD21Qg2OEk%2BbTDASd%2Bcv7%2FIOPQEnVKT5j4wm8iY4G7lGn%2BEoBLm9FxHWKMYaPrqNg8XDhGtU2qZX6XrqgQapwEr110qO6tu2E0%2FUkdS%2FE%2F8Gma0er0Aw6DUtkkW22HH97S4bWUw4%2FONYswJY%2B3DFjXnxD%2BQuO0Uswt9TzwwY6pgFu0ccsJyYJCykpjNZchnO%2Fm6iznmerNV%2B9n355x2Bbe%2Fk0riDdAqnkK%2BTtwRaaLR8FNXvBBLMcC35lrqCYxam1OH9hHd9bRXpZ9FDkIJFtvb4JS8QTh0zBncgXfUy3uh0g4TbWCdPhG59UF8NTkSTRcLTJEO%2BLGhWB0zWr7Zm8quWO0ffB2t57nZGnfoTO7bz6GmCv%2FV%2FBvyEI4HvGJ%2FE%2BrOys42wl&X-Amz-Signature=249df431fd04ca33cb2967de9a52c8f7a1f76489a9f1496269a52165eb919f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH77L477%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzqQD2MjZYvTLFxRxK2jYS%2Bi5R8QCDyH%2FUI5ukOttRrAiA8JaxRS9qCuUwE7VDxag1T5VEL4oBQqu1RsWlgzEGaUyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeowg4MwiAh%2FUKSiKtwDgsEy%2B7GZtE5uHL%2FMULlSuh6hf5SEaBJ0uW0Cd%2FcGxeFFvo0oBjNaa4Qzw5PFCkwTLVT60FNHCxd9TTBDNE2TVxP7tfTVce9Di3SBa%2B%2Bi4JQuG%2FVKzvs1p17E7%2FQpUo%2F7WBpWb%2F3WCdP6WMs8KpsYREzkTZrFZYTWzLOVcgXCkxsl1vvMSgQxObzY9oBPW9cTgEKxpaf9AhMNV14DsYii0Lkcu3svPhh6kEwBGEreJuHzfeIhjb3%2Bi64tMRzwA9givIuDhq4Zq1j3teROB71e0YrAd9jHhT5wUvO3Td%2FrstXzJXyB%2Bk%2FZsCQLqwZumE1aXL1bC1urQzri%2BQhsunKEccSdNiQo0nYj6HPOK1IvwDjLVWXq8lO5nRDZavjAQc0sXYDjMfDdziyYTgV1vNNL7ZCVTNILZzYJ%2BWv%2B%2FiUL0OPI8IjWlJer1lBqxSH7nWEjLQhq6wFupklMABbPfokHirGWq10PD21Qg2OEk%2BbTDASd%2Bcv7%2FIOPQEnVKT5j4wm8iY4G7lGn%2BEoBLm9FxHWKMYaPrqNg8XDhGtU2qZX6XrqgQapwEr110qO6tu2E0%2FUkdS%2FE%2F8Gma0er0Aw6DUtkkW22HH97S4bWUw4%2FONYswJY%2B3DFjXnxD%2BQuO0Uswt9TzwwY6pgFu0ccsJyYJCykpjNZchnO%2Fm6iznmerNV%2B9n355x2Bbe%2Fk0riDdAqnkK%2BTtwRaaLR8FNXvBBLMcC35lrqCYxam1OH9hHd9bRXpZ9FDkIJFtvb4JS8QTh0zBncgXfUy3uh0g4TbWCdPhG59UF8NTkSTRcLTJEO%2BLGhWB0zWr7Zm8quWO0ffB2t57nZGnfoTO7bz6GmCv%2FV%2FBvyEI4HvGJ%2FE%2BrOys42wl&X-Amz-Signature=fea212834b6dafd6094f9fd15eedbb28dfca1f916de37b039e8f910474d4d930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH77L477%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzqQD2MjZYvTLFxRxK2jYS%2Bi5R8QCDyH%2FUI5ukOttRrAiA8JaxRS9qCuUwE7VDxag1T5VEL4oBQqu1RsWlgzEGaUyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeowg4MwiAh%2FUKSiKtwDgsEy%2B7GZtE5uHL%2FMULlSuh6hf5SEaBJ0uW0Cd%2FcGxeFFvo0oBjNaa4Qzw5PFCkwTLVT60FNHCxd9TTBDNE2TVxP7tfTVce9Di3SBa%2B%2Bi4JQuG%2FVKzvs1p17E7%2FQpUo%2F7WBpWb%2F3WCdP6WMs8KpsYREzkTZrFZYTWzLOVcgXCkxsl1vvMSgQxObzY9oBPW9cTgEKxpaf9AhMNV14DsYii0Lkcu3svPhh6kEwBGEreJuHzfeIhjb3%2Bi64tMRzwA9givIuDhq4Zq1j3teROB71e0YrAd9jHhT5wUvO3Td%2FrstXzJXyB%2Bk%2FZsCQLqwZumE1aXL1bC1urQzri%2BQhsunKEccSdNiQo0nYj6HPOK1IvwDjLVWXq8lO5nRDZavjAQc0sXYDjMfDdziyYTgV1vNNL7ZCVTNILZzYJ%2BWv%2B%2FiUL0OPI8IjWlJer1lBqxSH7nWEjLQhq6wFupklMABbPfokHirGWq10PD21Qg2OEk%2BbTDASd%2Bcv7%2FIOPQEnVKT5j4wm8iY4G7lGn%2BEoBLm9FxHWKMYaPrqNg8XDhGtU2qZX6XrqgQapwEr110qO6tu2E0%2FUkdS%2FE%2F8Gma0er0Aw6DUtkkW22HH97S4bWUw4%2FONYswJY%2B3DFjXnxD%2BQuO0Uswt9TzwwY6pgFu0ccsJyYJCykpjNZchnO%2Fm6iznmerNV%2B9n355x2Bbe%2Fk0riDdAqnkK%2BTtwRaaLR8FNXvBBLMcC35lrqCYxam1OH9hHd9bRXpZ9FDkIJFtvb4JS8QTh0zBncgXfUy3uh0g4TbWCdPhG59UF8NTkSTRcLTJEO%2BLGhWB0zWr7Zm8quWO0ffB2t57nZGnfoTO7bz6GmCv%2FV%2FBvyEI4HvGJ%2FE%2BrOys42wl&X-Amz-Signature=ee37daad0ee1f48de0f4fef6d8deea1753a2df74159cc5ea19d794354421bf73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

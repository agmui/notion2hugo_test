---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4YARNZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy2pFjeE33F5MGDpjzq%2BLUEsgCu0M35O6mB7uIh6giVAiEAhQ0jtJftU8Ovi2TkRzsPiYVwyJQQcz02rS1BxwybsB0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgLsaLdZDy3G3GeFCrcAxMtcpkNNj76qiTiQv%2Fiej4hhENsGQD070EElZKAM3EJCqvFa6JhWhUEeP94q7DKOSYZi3VriFQbYjq9OZ89r8Trgm5xcITVLxyh37fMkY9Knf7hr5OLmow72wdr94a%2FqQUcDwDzEilTyfW7aOUo69PR970BtWjlPK4C1VquG%2FQ23rha2a4A9%2BJWHaGqTmm%2FTZcafzmDrsTWj9EszVjipPmxoxDixpCGtvDDCPBrfFae7PWwa8A8F2cwLFnts5GzNWlwfafqGMz64bvax0foB1J0ivpuepik2yA98ZHGm8I8OWI6IFMqd9jFp5o9902I33EaP5v3VShU0MeZbZi%2BKcnurXxDGm8quwQyJ2T88W0RcmdLQh%2F6B%2BuiXytR%2FPjaMZDMjBjH4UH2P9ao9RJDB%2B6zixaHYLGZ9Q9osw5HO13uWSWMw6AIT%2Fej10p25bt2LtjbDY6szTZWGtQjeTrl1g2EV%2FJ63QIEDsTjh4VKjPUhflkS0NHZn5hVMkayeSo3kTuKF7QZU6dmsxmLI10riO87wvwm9Vm8mjFSYEYAHvjLO%2FhDxGl9FCNTTw28vDNTQ7IFDHF4DeESg%2BNf8WTkWnQNDh9i5lAZGmpZHE%2BXi3DnJKO4vJwkrAzRd5ZoMMzf6cgGOqUBtJlVULfeT7HHzfAC55EdAlu%2BIMlamOTF8Kppc9%2ByWyulwWdpc%2BUOqsh5jR2zD7AzyEr%2Fpzo37S7boOZC8wSzzU8NegZ671%2Bu27CY1RRzGZ7nGLBQsHxWw2JsJZA6sLrR57Pv%2FpUWz8UURWwFAZYCKv1vtYusRnZCjI62tGypZo684HnhoUM8r9MfY2aGm%2BdGaU8gGJyU2O5B2W6LsemsV3LkR%2BdX&X-Amz-Signature=f2308e7b67430e91e9c89c1d0ff37a41cb8990560016c3f19efe0ee83f9afe7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4YARNZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy2pFjeE33F5MGDpjzq%2BLUEsgCu0M35O6mB7uIh6giVAiEAhQ0jtJftU8Ovi2TkRzsPiYVwyJQQcz02rS1BxwybsB0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgLsaLdZDy3G3GeFCrcAxMtcpkNNj76qiTiQv%2Fiej4hhENsGQD070EElZKAM3EJCqvFa6JhWhUEeP94q7DKOSYZi3VriFQbYjq9OZ89r8Trgm5xcITVLxyh37fMkY9Knf7hr5OLmow72wdr94a%2FqQUcDwDzEilTyfW7aOUo69PR970BtWjlPK4C1VquG%2FQ23rha2a4A9%2BJWHaGqTmm%2FTZcafzmDrsTWj9EszVjipPmxoxDixpCGtvDDCPBrfFae7PWwa8A8F2cwLFnts5GzNWlwfafqGMz64bvax0foB1J0ivpuepik2yA98ZHGm8I8OWI6IFMqd9jFp5o9902I33EaP5v3VShU0MeZbZi%2BKcnurXxDGm8quwQyJ2T88W0RcmdLQh%2F6B%2BuiXytR%2FPjaMZDMjBjH4UH2P9ao9RJDB%2B6zixaHYLGZ9Q9osw5HO13uWSWMw6AIT%2Fej10p25bt2LtjbDY6szTZWGtQjeTrl1g2EV%2FJ63QIEDsTjh4VKjPUhflkS0NHZn5hVMkayeSo3kTuKF7QZU6dmsxmLI10riO87wvwm9Vm8mjFSYEYAHvjLO%2FhDxGl9FCNTTw28vDNTQ7IFDHF4DeESg%2BNf8WTkWnQNDh9i5lAZGmpZHE%2BXi3DnJKO4vJwkrAzRd5ZoMMzf6cgGOqUBtJlVULfeT7HHzfAC55EdAlu%2BIMlamOTF8Kppc9%2ByWyulwWdpc%2BUOqsh5jR2zD7AzyEr%2Fpzo37S7boOZC8wSzzU8NegZ671%2Bu27CY1RRzGZ7nGLBQsHxWw2JsJZA6sLrR57Pv%2FpUWz8UURWwFAZYCKv1vtYusRnZCjI62tGypZo684HnhoUM8r9MfY2aGm%2BdGaU8gGJyU2O5B2W6LsemsV3LkR%2BdX&X-Amz-Signature=f00fb1d1f31e3b15339d2f619d23fa4749ba8f1386849d90b867a5475782ebaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4YARNZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy2pFjeE33F5MGDpjzq%2BLUEsgCu0M35O6mB7uIh6giVAiEAhQ0jtJftU8Ovi2TkRzsPiYVwyJQQcz02rS1BxwybsB0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgLsaLdZDy3G3GeFCrcAxMtcpkNNj76qiTiQv%2Fiej4hhENsGQD070EElZKAM3EJCqvFa6JhWhUEeP94q7DKOSYZi3VriFQbYjq9OZ89r8Trgm5xcITVLxyh37fMkY9Knf7hr5OLmow72wdr94a%2FqQUcDwDzEilTyfW7aOUo69PR970BtWjlPK4C1VquG%2FQ23rha2a4A9%2BJWHaGqTmm%2FTZcafzmDrsTWj9EszVjipPmxoxDixpCGtvDDCPBrfFae7PWwa8A8F2cwLFnts5GzNWlwfafqGMz64bvax0foB1J0ivpuepik2yA98ZHGm8I8OWI6IFMqd9jFp5o9902I33EaP5v3VShU0MeZbZi%2BKcnurXxDGm8quwQyJ2T88W0RcmdLQh%2F6B%2BuiXytR%2FPjaMZDMjBjH4UH2P9ao9RJDB%2B6zixaHYLGZ9Q9osw5HO13uWSWMw6AIT%2Fej10p25bt2LtjbDY6szTZWGtQjeTrl1g2EV%2FJ63QIEDsTjh4VKjPUhflkS0NHZn5hVMkayeSo3kTuKF7QZU6dmsxmLI10riO87wvwm9Vm8mjFSYEYAHvjLO%2FhDxGl9FCNTTw28vDNTQ7IFDHF4DeESg%2BNf8WTkWnQNDh9i5lAZGmpZHE%2BXi3DnJKO4vJwkrAzRd5ZoMMzf6cgGOqUBtJlVULfeT7HHzfAC55EdAlu%2BIMlamOTF8Kppc9%2ByWyulwWdpc%2BUOqsh5jR2zD7AzyEr%2Fpzo37S7boOZC8wSzzU8NegZ671%2Bu27CY1RRzGZ7nGLBQsHxWw2JsJZA6sLrR57Pv%2FpUWz8UURWwFAZYCKv1vtYusRnZCjI62tGypZo684HnhoUM8r9MfY2aGm%2BdGaU8gGJyU2O5B2W6LsemsV3LkR%2BdX&X-Amz-Signature=485490585d4dd1601b9dca4898af7eb855b9a27e0e3185360de086bb5ef9da11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4YARNZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy2pFjeE33F5MGDpjzq%2BLUEsgCu0M35O6mB7uIh6giVAiEAhQ0jtJftU8Ovi2TkRzsPiYVwyJQQcz02rS1BxwybsB0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgLsaLdZDy3G3GeFCrcAxMtcpkNNj76qiTiQv%2Fiej4hhENsGQD070EElZKAM3EJCqvFa6JhWhUEeP94q7DKOSYZi3VriFQbYjq9OZ89r8Trgm5xcITVLxyh37fMkY9Knf7hr5OLmow72wdr94a%2FqQUcDwDzEilTyfW7aOUo69PR970BtWjlPK4C1VquG%2FQ23rha2a4A9%2BJWHaGqTmm%2FTZcafzmDrsTWj9EszVjipPmxoxDixpCGtvDDCPBrfFae7PWwa8A8F2cwLFnts5GzNWlwfafqGMz64bvax0foB1J0ivpuepik2yA98ZHGm8I8OWI6IFMqd9jFp5o9902I33EaP5v3VShU0MeZbZi%2BKcnurXxDGm8quwQyJ2T88W0RcmdLQh%2F6B%2BuiXytR%2FPjaMZDMjBjH4UH2P9ao9RJDB%2B6zixaHYLGZ9Q9osw5HO13uWSWMw6AIT%2Fej10p25bt2LtjbDY6szTZWGtQjeTrl1g2EV%2FJ63QIEDsTjh4VKjPUhflkS0NHZn5hVMkayeSo3kTuKF7QZU6dmsxmLI10riO87wvwm9Vm8mjFSYEYAHvjLO%2FhDxGl9FCNTTw28vDNTQ7IFDHF4DeESg%2BNf8WTkWnQNDh9i5lAZGmpZHE%2BXi3DnJKO4vJwkrAzRd5ZoMMzf6cgGOqUBtJlVULfeT7HHzfAC55EdAlu%2BIMlamOTF8Kppc9%2ByWyulwWdpc%2BUOqsh5jR2zD7AzyEr%2Fpzo37S7boOZC8wSzzU8NegZ671%2Bu27CY1RRzGZ7nGLBQsHxWw2JsJZA6sLrR57Pv%2FpUWz8UURWwFAZYCKv1vtYusRnZCjI62tGypZo684HnhoUM8r9MfY2aGm%2BdGaU8gGJyU2O5B2W6LsemsV3LkR%2BdX&X-Amz-Signature=9aa9d1de48d8769110d7025af985a0490f07bb4a57a341b2786bbbc5f9de801d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4YARNZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy2pFjeE33F5MGDpjzq%2BLUEsgCu0M35O6mB7uIh6giVAiEAhQ0jtJftU8Ovi2TkRzsPiYVwyJQQcz02rS1BxwybsB0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgLsaLdZDy3G3GeFCrcAxMtcpkNNj76qiTiQv%2Fiej4hhENsGQD070EElZKAM3EJCqvFa6JhWhUEeP94q7DKOSYZi3VriFQbYjq9OZ89r8Trgm5xcITVLxyh37fMkY9Knf7hr5OLmow72wdr94a%2FqQUcDwDzEilTyfW7aOUo69PR970BtWjlPK4C1VquG%2FQ23rha2a4A9%2BJWHaGqTmm%2FTZcafzmDrsTWj9EszVjipPmxoxDixpCGtvDDCPBrfFae7PWwa8A8F2cwLFnts5GzNWlwfafqGMz64bvax0foB1J0ivpuepik2yA98ZHGm8I8OWI6IFMqd9jFp5o9902I33EaP5v3VShU0MeZbZi%2BKcnurXxDGm8quwQyJ2T88W0RcmdLQh%2F6B%2BuiXytR%2FPjaMZDMjBjH4UH2P9ao9RJDB%2B6zixaHYLGZ9Q9osw5HO13uWSWMw6AIT%2Fej10p25bt2LtjbDY6szTZWGtQjeTrl1g2EV%2FJ63QIEDsTjh4VKjPUhflkS0NHZn5hVMkayeSo3kTuKF7QZU6dmsxmLI10riO87wvwm9Vm8mjFSYEYAHvjLO%2FhDxGl9FCNTTw28vDNTQ7IFDHF4DeESg%2BNf8WTkWnQNDh9i5lAZGmpZHE%2BXi3DnJKO4vJwkrAzRd5ZoMMzf6cgGOqUBtJlVULfeT7HHzfAC55EdAlu%2BIMlamOTF8Kppc9%2ByWyulwWdpc%2BUOqsh5jR2zD7AzyEr%2Fpzo37S7boOZC8wSzzU8NegZ671%2Bu27CY1RRzGZ7nGLBQsHxWw2JsJZA6sLrR57Pv%2FpUWz8UURWwFAZYCKv1vtYusRnZCjI62tGypZo684HnhoUM8r9MfY2aGm%2BdGaU8gGJyU2O5B2W6LsemsV3LkR%2BdX&X-Amz-Signature=4ac84af117ab4143c1837abb9524fc908347311f540f6f653af2ce57bddc45a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4YARNZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy2pFjeE33F5MGDpjzq%2BLUEsgCu0M35O6mB7uIh6giVAiEAhQ0jtJftU8Ovi2TkRzsPiYVwyJQQcz02rS1BxwybsB0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgLsaLdZDy3G3GeFCrcAxMtcpkNNj76qiTiQv%2Fiej4hhENsGQD070EElZKAM3EJCqvFa6JhWhUEeP94q7DKOSYZi3VriFQbYjq9OZ89r8Trgm5xcITVLxyh37fMkY9Knf7hr5OLmow72wdr94a%2FqQUcDwDzEilTyfW7aOUo69PR970BtWjlPK4C1VquG%2FQ23rha2a4A9%2BJWHaGqTmm%2FTZcafzmDrsTWj9EszVjipPmxoxDixpCGtvDDCPBrfFae7PWwa8A8F2cwLFnts5GzNWlwfafqGMz64bvax0foB1J0ivpuepik2yA98ZHGm8I8OWI6IFMqd9jFp5o9902I33EaP5v3VShU0MeZbZi%2BKcnurXxDGm8quwQyJ2T88W0RcmdLQh%2F6B%2BuiXytR%2FPjaMZDMjBjH4UH2P9ao9RJDB%2B6zixaHYLGZ9Q9osw5HO13uWSWMw6AIT%2Fej10p25bt2LtjbDY6szTZWGtQjeTrl1g2EV%2FJ63QIEDsTjh4VKjPUhflkS0NHZn5hVMkayeSo3kTuKF7QZU6dmsxmLI10riO87wvwm9Vm8mjFSYEYAHvjLO%2FhDxGl9FCNTTw28vDNTQ7IFDHF4DeESg%2BNf8WTkWnQNDh9i5lAZGmpZHE%2BXi3DnJKO4vJwkrAzRd5ZoMMzf6cgGOqUBtJlVULfeT7HHzfAC55EdAlu%2BIMlamOTF8Kppc9%2ByWyulwWdpc%2BUOqsh5jR2zD7AzyEr%2Fpzo37S7boOZC8wSzzU8NegZ671%2Bu27CY1RRzGZ7nGLBQsHxWw2JsJZA6sLrR57Pv%2FpUWz8UURWwFAZYCKv1vtYusRnZCjI62tGypZo684HnhoUM8r9MfY2aGm%2BdGaU8gGJyU2O5B2W6LsemsV3LkR%2BdX&X-Amz-Signature=6b3c1538cc4adafdef8d86a9a9b52e329399ce839a951ffa5f0fb5a967c2f76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4YARNZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy2pFjeE33F5MGDpjzq%2BLUEsgCu0M35O6mB7uIh6giVAiEAhQ0jtJftU8Ovi2TkRzsPiYVwyJQQcz02rS1BxwybsB0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgLsaLdZDy3G3GeFCrcAxMtcpkNNj76qiTiQv%2Fiej4hhENsGQD070EElZKAM3EJCqvFa6JhWhUEeP94q7DKOSYZi3VriFQbYjq9OZ89r8Trgm5xcITVLxyh37fMkY9Knf7hr5OLmow72wdr94a%2FqQUcDwDzEilTyfW7aOUo69PR970BtWjlPK4C1VquG%2FQ23rha2a4A9%2BJWHaGqTmm%2FTZcafzmDrsTWj9EszVjipPmxoxDixpCGtvDDCPBrfFae7PWwa8A8F2cwLFnts5GzNWlwfafqGMz64bvax0foB1J0ivpuepik2yA98ZHGm8I8OWI6IFMqd9jFp5o9902I33EaP5v3VShU0MeZbZi%2BKcnurXxDGm8quwQyJ2T88W0RcmdLQh%2F6B%2BuiXytR%2FPjaMZDMjBjH4UH2P9ao9RJDB%2B6zixaHYLGZ9Q9osw5HO13uWSWMw6AIT%2Fej10p25bt2LtjbDY6szTZWGtQjeTrl1g2EV%2FJ63QIEDsTjh4VKjPUhflkS0NHZn5hVMkayeSo3kTuKF7QZU6dmsxmLI10riO87wvwm9Vm8mjFSYEYAHvjLO%2FhDxGl9FCNTTw28vDNTQ7IFDHF4DeESg%2BNf8WTkWnQNDh9i5lAZGmpZHE%2BXi3DnJKO4vJwkrAzRd5ZoMMzf6cgGOqUBtJlVULfeT7HHzfAC55EdAlu%2BIMlamOTF8Kppc9%2ByWyulwWdpc%2BUOqsh5jR2zD7AzyEr%2Fpzo37S7boOZC8wSzzU8NegZ671%2Bu27CY1RRzGZ7nGLBQsHxWw2JsJZA6sLrR57Pv%2FpUWz8UURWwFAZYCKv1vtYusRnZCjI62tGypZo684HnhoUM8r9MfY2aGm%2BdGaU8gGJyU2O5B2W6LsemsV3LkR%2BdX&X-Amz-Signature=03ee89af387940149fff9189ee91ed34b6f522577a8cbefd403fd2208cfe5e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZ23PK2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYz%2FiMR22ZZetIwik6UOe90Mh2u9QA34G4etgw7%2FD76QIgRhRigVTw67BoORKMqDWcBurJuGNPde1iQxAso3WPNmIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFDa1IS7P9SZGCYWkircA8RdHu3ZQ1zaZHcasrE3hB5iap0ItWY4dKfiPQyEsRX9j9gTqAmVgilVzSLvNKZ6%2FlACVczQlMo%2Br8fQib9axULHlvhdRplg4tl6nSOSbEL9rzR6IoAijM5lI7wqxsqdidGNP%2BJsNgg0Vxdscc%2Fs186%2FshjlYke0cRD3%2FvJGgIUO9KOgJ0CJPdgfdhlStQW1oyJadFO5PDqgD%2B8ZKoFedDvuQAjW7Tf5eVVPxJWVa2VUoIPHr7EZNWnQlTVMP%2BzeOmBmwkYFSiVIIYsqkh4pSa6%2Bi6OnaBaKXTKEOk1%2B%2F4XidgDFdNhSokE7bZ4JIBQxTekNbT6uIaPfIlpyIE8vzZ9pUy%2FMS3K%2BgYfeo25TA4xaUu0pmE%2F4eZGB%2Fn0PswDcrh%2FTYvvNdB17T3bUHCrDlcNHr57E3cWnz4UAv5tjB%2BpqGjFuJSGoAAcwaT1Zn9qrXyvUmgrA7UF%2F0mQmIqDJLSZF61Vkun7oJqchO9xr7obQh4A5O8YJu1aKlpP1RBIO2hipUS7fLBO5LQ9DsXF0GEEs3gJHmCAwuJZTVgAO%2FtLrHwdl3jYRFzNxHvZRS6pNKYfrT8GhOm31klJsqd7D200a5jRUG0698Cw4ONiczyGnSk1MpPL7EZDDvboHMP7noMMGOqUBqHTTwZdgOiLAnwIwX7DGM3N1t7dJ9AQYiRMVIRy8sxR8YKXQt3SXJWnTqKGLRlPBVrD9bl2pIKRFUUnaSvuCiSWqTBlzfib15YYkmRNouLcMRbL4%2BytAQGMDgjHQt%2Fm9nb5ewI9aryLdZ%2FXBlMEquPDfL9X81RcyBzayV8NC7WFWvkOMh4U5i0k%2BHJa4sOUqyQ659wAFejQ%2Bt%2FXtKHmUoxZhIQ%2Fe&X-Amz-Signature=b069ff1abe34239cb83d90ee08d4c8cc96ab36001b1dc865eb6533e60a1cb922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZ23PK2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYz%2FiMR22ZZetIwik6UOe90Mh2u9QA34G4etgw7%2FD76QIgRhRigVTw67BoORKMqDWcBurJuGNPde1iQxAso3WPNmIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFDa1IS7P9SZGCYWkircA8RdHu3ZQ1zaZHcasrE3hB5iap0ItWY4dKfiPQyEsRX9j9gTqAmVgilVzSLvNKZ6%2FlACVczQlMo%2Br8fQib9axULHlvhdRplg4tl6nSOSbEL9rzR6IoAijM5lI7wqxsqdidGNP%2BJsNgg0Vxdscc%2Fs186%2FshjlYke0cRD3%2FvJGgIUO9KOgJ0CJPdgfdhlStQW1oyJadFO5PDqgD%2B8ZKoFedDvuQAjW7Tf5eVVPxJWVa2VUoIPHr7EZNWnQlTVMP%2BzeOmBmwkYFSiVIIYsqkh4pSa6%2Bi6OnaBaKXTKEOk1%2B%2F4XidgDFdNhSokE7bZ4JIBQxTekNbT6uIaPfIlpyIE8vzZ9pUy%2FMS3K%2BgYfeo25TA4xaUu0pmE%2F4eZGB%2Fn0PswDcrh%2FTYvvNdB17T3bUHCrDlcNHr57E3cWnz4UAv5tjB%2BpqGjFuJSGoAAcwaT1Zn9qrXyvUmgrA7UF%2F0mQmIqDJLSZF61Vkun7oJqchO9xr7obQh4A5O8YJu1aKlpP1RBIO2hipUS7fLBO5LQ9DsXF0GEEs3gJHmCAwuJZTVgAO%2FtLrHwdl3jYRFzNxHvZRS6pNKYfrT8GhOm31klJsqd7D200a5jRUG0698Cw4ONiczyGnSk1MpPL7EZDDvboHMP7noMMGOqUBqHTTwZdgOiLAnwIwX7DGM3N1t7dJ9AQYiRMVIRy8sxR8YKXQt3SXJWnTqKGLRlPBVrD9bl2pIKRFUUnaSvuCiSWqTBlzfib15YYkmRNouLcMRbL4%2BytAQGMDgjHQt%2Fm9nb5ewI9aryLdZ%2FXBlMEquPDfL9X81RcyBzayV8NC7WFWvkOMh4U5i0k%2BHJa4sOUqyQ659wAFejQ%2Bt%2FXtKHmUoxZhIQ%2Fe&X-Amz-Signature=4bec29616941253e6bd47406ff92ea6a60b96ca0212b092473bc58b21ec724e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZ23PK2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYz%2FiMR22ZZetIwik6UOe90Mh2u9QA34G4etgw7%2FD76QIgRhRigVTw67BoORKMqDWcBurJuGNPde1iQxAso3WPNmIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFDa1IS7P9SZGCYWkircA8RdHu3ZQ1zaZHcasrE3hB5iap0ItWY4dKfiPQyEsRX9j9gTqAmVgilVzSLvNKZ6%2FlACVczQlMo%2Br8fQib9axULHlvhdRplg4tl6nSOSbEL9rzR6IoAijM5lI7wqxsqdidGNP%2BJsNgg0Vxdscc%2Fs186%2FshjlYke0cRD3%2FvJGgIUO9KOgJ0CJPdgfdhlStQW1oyJadFO5PDqgD%2B8ZKoFedDvuQAjW7Tf5eVVPxJWVa2VUoIPHr7EZNWnQlTVMP%2BzeOmBmwkYFSiVIIYsqkh4pSa6%2Bi6OnaBaKXTKEOk1%2B%2F4XidgDFdNhSokE7bZ4JIBQxTekNbT6uIaPfIlpyIE8vzZ9pUy%2FMS3K%2BgYfeo25TA4xaUu0pmE%2F4eZGB%2Fn0PswDcrh%2FTYvvNdB17T3bUHCrDlcNHr57E3cWnz4UAv5tjB%2BpqGjFuJSGoAAcwaT1Zn9qrXyvUmgrA7UF%2F0mQmIqDJLSZF61Vkun7oJqchO9xr7obQh4A5O8YJu1aKlpP1RBIO2hipUS7fLBO5LQ9DsXF0GEEs3gJHmCAwuJZTVgAO%2FtLrHwdl3jYRFzNxHvZRS6pNKYfrT8GhOm31klJsqd7D200a5jRUG0698Cw4ONiczyGnSk1MpPL7EZDDvboHMP7noMMGOqUBqHTTwZdgOiLAnwIwX7DGM3N1t7dJ9AQYiRMVIRy8sxR8YKXQt3SXJWnTqKGLRlPBVrD9bl2pIKRFUUnaSvuCiSWqTBlzfib15YYkmRNouLcMRbL4%2BytAQGMDgjHQt%2Fm9nb5ewI9aryLdZ%2FXBlMEquPDfL9X81RcyBzayV8NC7WFWvkOMh4U5i0k%2BHJa4sOUqyQ659wAFejQ%2Bt%2FXtKHmUoxZhIQ%2Fe&X-Amz-Signature=fac9d1bfed731b2cb436f41f0a23af6d6e0c7c0af088271e3a1510ea3b36dc28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZ23PK2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYz%2FiMR22ZZetIwik6UOe90Mh2u9QA34G4etgw7%2FD76QIgRhRigVTw67BoORKMqDWcBurJuGNPde1iQxAso3WPNmIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFDa1IS7P9SZGCYWkircA8RdHu3ZQ1zaZHcasrE3hB5iap0ItWY4dKfiPQyEsRX9j9gTqAmVgilVzSLvNKZ6%2FlACVczQlMo%2Br8fQib9axULHlvhdRplg4tl6nSOSbEL9rzR6IoAijM5lI7wqxsqdidGNP%2BJsNgg0Vxdscc%2Fs186%2FshjlYke0cRD3%2FvJGgIUO9KOgJ0CJPdgfdhlStQW1oyJadFO5PDqgD%2B8ZKoFedDvuQAjW7Tf5eVVPxJWVa2VUoIPHr7EZNWnQlTVMP%2BzeOmBmwkYFSiVIIYsqkh4pSa6%2Bi6OnaBaKXTKEOk1%2B%2F4XidgDFdNhSokE7bZ4JIBQxTekNbT6uIaPfIlpyIE8vzZ9pUy%2FMS3K%2BgYfeo25TA4xaUu0pmE%2F4eZGB%2Fn0PswDcrh%2FTYvvNdB17T3bUHCrDlcNHr57E3cWnz4UAv5tjB%2BpqGjFuJSGoAAcwaT1Zn9qrXyvUmgrA7UF%2F0mQmIqDJLSZF61Vkun7oJqchO9xr7obQh4A5O8YJu1aKlpP1RBIO2hipUS7fLBO5LQ9DsXF0GEEs3gJHmCAwuJZTVgAO%2FtLrHwdl3jYRFzNxHvZRS6pNKYfrT8GhOm31klJsqd7D200a5jRUG0698Cw4ONiczyGnSk1MpPL7EZDDvboHMP7noMMGOqUBqHTTwZdgOiLAnwIwX7DGM3N1t7dJ9AQYiRMVIRy8sxR8YKXQt3SXJWnTqKGLRlPBVrD9bl2pIKRFUUnaSvuCiSWqTBlzfib15YYkmRNouLcMRbL4%2BytAQGMDgjHQt%2Fm9nb5ewI9aryLdZ%2FXBlMEquPDfL9X81RcyBzayV8NC7WFWvkOMh4U5i0k%2BHJa4sOUqyQ659wAFejQ%2Bt%2FXtKHmUoxZhIQ%2Fe&X-Amz-Signature=7a736113472518b6c04296da62c72ce0563e2c25f0abdc3c782371bdee2bfe40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZ23PK2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYz%2FiMR22ZZetIwik6UOe90Mh2u9QA34G4etgw7%2FD76QIgRhRigVTw67BoORKMqDWcBurJuGNPde1iQxAso3WPNmIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFDa1IS7P9SZGCYWkircA8RdHu3ZQ1zaZHcasrE3hB5iap0ItWY4dKfiPQyEsRX9j9gTqAmVgilVzSLvNKZ6%2FlACVczQlMo%2Br8fQib9axULHlvhdRplg4tl6nSOSbEL9rzR6IoAijM5lI7wqxsqdidGNP%2BJsNgg0Vxdscc%2Fs186%2FshjlYke0cRD3%2FvJGgIUO9KOgJ0CJPdgfdhlStQW1oyJadFO5PDqgD%2B8ZKoFedDvuQAjW7Tf5eVVPxJWVa2VUoIPHr7EZNWnQlTVMP%2BzeOmBmwkYFSiVIIYsqkh4pSa6%2Bi6OnaBaKXTKEOk1%2B%2F4XidgDFdNhSokE7bZ4JIBQxTekNbT6uIaPfIlpyIE8vzZ9pUy%2FMS3K%2BgYfeo25TA4xaUu0pmE%2F4eZGB%2Fn0PswDcrh%2FTYvvNdB17T3bUHCrDlcNHr57E3cWnz4UAv5tjB%2BpqGjFuJSGoAAcwaT1Zn9qrXyvUmgrA7UF%2F0mQmIqDJLSZF61Vkun7oJqchO9xr7obQh4A5O8YJu1aKlpP1RBIO2hipUS7fLBO5LQ9DsXF0GEEs3gJHmCAwuJZTVgAO%2FtLrHwdl3jYRFzNxHvZRS6pNKYfrT8GhOm31klJsqd7D200a5jRUG0698Cw4ONiczyGnSk1MpPL7EZDDvboHMP7noMMGOqUBqHTTwZdgOiLAnwIwX7DGM3N1t7dJ9AQYiRMVIRy8sxR8YKXQt3SXJWnTqKGLRlPBVrD9bl2pIKRFUUnaSvuCiSWqTBlzfib15YYkmRNouLcMRbL4%2BytAQGMDgjHQt%2Fm9nb5ewI9aryLdZ%2FXBlMEquPDfL9X81RcyBzayV8NC7WFWvkOMh4U5i0k%2BHJa4sOUqyQ659wAFejQ%2Bt%2FXtKHmUoxZhIQ%2Fe&X-Amz-Signature=6944f6a9447367c7278c6780ab2796eeac398ba866fee07d736d6cdcd567aec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZ23PK2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYz%2FiMR22ZZetIwik6UOe90Mh2u9QA34G4etgw7%2FD76QIgRhRigVTw67BoORKMqDWcBurJuGNPde1iQxAso3WPNmIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFDa1IS7P9SZGCYWkircA8RdHu3ZQ1zaZHcasrE3hB5iap0ItWY4dKfiPQyEsRX9j9gTqAmVgilVzSLvNKZ6%2FlACVczQlMo%2Br8fQib9axULHlvhdRplg4tl6nSOSbEL9rzR6IoAijM5lI7wqxsqdidGNP%2BJsNgg0Vxdscc%2Fs186%2FshjlYke0cRD3%2FvJGgIUO9KOgJ0CJPdgfdhlStQW1oyJadFO5PDqgD%2B8ZKoFedDvuQAjW7Tf5eVVPxJWVa2VUoIPHr7EZNWnQlTVMP%2BzeOmBmwkYFSiVIIYsqkh4pSa6%2Bi6OnaBaKXTKEOk1%2B%2F4XidgDFdNhSokE7bZ4JIBQxTekNbT6uIaPfIlpyIE8vzZ9pUy%2FMS3K%2BgYfeo25TA4xaUu0pmE%2F4eZGB%2Fn0PswDcrh%2FTYvvNdB17T3bUHCrDlcNHr57E3cWnz4UAv5tjB%2BpqGjFuJSGoAAcwaT1Zn9qrXyvUmgrA7UF%2F0mQmIqDJLSZF61Vkun7oJqchO9xr7obQh4A5O8YJu1aKlpP1RBIO2hipUS7fLBO5LQ9DsXF0GEEs3gJHmCAwuJZTVgAO%2FtLrHwdl3jYRFzNxHvZRS6pNKYfrT8GhOm31klJsqd7D200a5jRUG0698Cw4ONiczyGnSk1MpPL7EZDDvboHMP7noMMGOqUBqHTTwZdgOiLAnwIwX7DGM3N1t7dJ9AQYiRMVIRy8sxR8YKXQt3SXJWnTqKGLRlPBVrD9bl2pIKRFUUnaSvuCiSWqTBlzfib15YYkmRNouLcMRbL4%2BytAQGMDgjHQt%2Fm9nb5ewI9aryLdZ%2FXBlMEquPDfL9X81RcyBzayV8NC7WFWvkOMh4U5i0k%2BHJa4sOUqyQ659wAFejQ%2Bt%2FXtKHmUoxZhIQ%2Fe&X-Amz-Signature=ba8d67cfe979c6cc1515a48de2a7eb49cf0f87a93af4af7fd209e97eea24ff31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZ23PK2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYz%2FiMR22ZZetIwik6UOe90Mh2u9QA34G4etgw7%2FD76QIgRhRigVTw67BoORKMqDWcBurJuGNPde1iQxAso3WPNmIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFDa1IS7P9SZGCYWkircA8RdHu3ZQ1zaZHcasrE3hB5iap0ItWY4dKfiPQyEsRX9j9gTqAmVgilVzSLvNKZ6%2FlACVczQlMo%2Br8fQib9axULHlvhdRplg4tl6nSOSbEL9rzR6IoAijM5lI7wqxsqdidGNP%2BJsNgg0Vxdscc%2Fs186%2FshjlYke0cRD3%2FvJGgIUO9KOgJ0CJPdgfdhlStQW1oyJadFO5PDqgD%2B8ZKoFedDvuQAjW7Tf5eVVPxJWVa2VUoIPHr7EZNWnQlTVMP%2BzeOmBmwkYFSiVIIYsqkh4pSa6%2Bi6OnaBaKXTKEOk1%2B%2F4XidgDFdNhSokE7bZ4JIBQxTekNbT6uIaPfIlpyIE8vzZ9pUy%2FMS3K%2BgYfeo25TA4xaUu0pmE%2F4eZGB%2Fn0PswDcrh%2FTYvvNdB17T3bUHCrDlcNHr57E3cWnz4UAv5tjB%2BpqGjFuJSGoAAcwaT1Zn9qrXyvUmgrA7UF%2F0mQmIqDJLSZF61Vkun7oJqchO9xr7obQh4A5O8YJu1aKlpP1RBIO2hipUS7fLBO5LQ9DsXF0GEEs3gJHmCAwuJZTVgAO%2FtLrHwdl3jYRFzNxHvZRS6pNKYfrT8GhOm31klJsqd7D200a5jRUG0698Cw4ONiczyGnSk1MpPL7EZDDvboHMP7noMMGOqUBqHTTwZdgOiLAnwIwX7DGM3N1t7dJ9AQYiRMVIRy8sxR8YKXQt3SXJWnTqKGLRlPBVrD9bl2pIKRFUUnaSvuCiSWqTBlzfib15YYkmRNouLcMRbL4%2BytAQGMDgjHQt%2Fm9nb5ewI9aryLdZ%2FXBlMEquPDfL9X81RcyBzayV8NC7WFWvkOMh4U5i0k%2BHJa4sOUqyQ659wAFejQ%2Bt%2FXtKHmUoxZhIQ%2Fe&X-Amz-Signature=f6e1e4f708fc3996251824cf9df1c7755b242be80a3867647596c6dcffecd628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

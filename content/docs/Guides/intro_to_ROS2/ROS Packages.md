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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPKSAUCR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbKZ%2Fhp%2BDIpIuVy6A27rev3CtV35zjOJh3KBEFN%2BcPlAiEAxizAkLRrUbSXfGl0jbAJcQwt3h%2BkXc620E3KuEcEECMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOvYFPOgR14TjuKjOyrcAzChJolRiksALasmiyItky%2F9itoJ8VRE2N7ttufiFq3dGIKgGEhv9hj0ZTqlKrtQ0%2B%2BUzvmECIiIgctNvDPKehbG6wNul29OQm4CIHKo6MwISlAKBWVqOPJCEv2h7Hi3SSgV7fPGiR0txJ%2FHEtCfWwtlh7QeryrfBeUdxVONl8huCknk4Xvz1auuFJH324OkLANPGci7eR4isKnQ8Kb8n%2FvyrkQ0XZpBvkPgSiut2%2F0xcbVcAX6cgz0p2YL89ri0AZFg4M0DeZh7xIF0wtp%2B8DzUEN7V2VWSNc4ejCljJuvNhvVVNu3qtLbk9wAFlarpjFa4NHJ2tRuZn%2FrHHQOvgpZyABzpJ8LA9BLehZ3JSBK2Jn4pVLc3tUL4cPtc9rj1cY12lHJ79kfVD5R2QWiMcOiYallNqqcxWd7B%2FZ%2FDATOx31tPN09wrtdr8%2FseDraerU2Ih7fvd8a56Wd2YxBdwqCXF0MJ4kWo4uN7zWIn7208FMk%2F5be1aPupTYRAZUQNdV64qvYZFr9G%2FB660yQgVqO7Nk2IsLNZ%2BjV1IjTQKy9FpXKKr%2B0QH9TvWzi%2Fe8FYNHgypIga%2F5YLgrM4663zNnUbIZE2gbrY0yLK8%2B%2FFIjvHQcPuw5cN61SL7eGLMMSoqr4GOqUByoGpNX93M%2FxHRw7xPucjb2geVoGONlmsaH33dHRztDTgiA%2BJsk7DeUwjTLm4PVTNJSdP5j5zt6FDOr%2Ft08pOUGYyFss7cHvHf42LXTMARcg04D17pQHmhaHQldtrvmh4rwbSK6E8vMImfTkB9ugFNuJTYJfRtgrTUi8QSnBwh1bhktfP3RRT3deG2c9sx%2BA354h9JETGACkCTpypOz7jN8Ci1E2t&X-Amz-Signature=40b65b3354a2f2267228feac92d239788acec9da7ee4bee6d8d99fc5ea3ae6cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPKSAUCR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbKZ%2Fhp%2BDIpIuVy6A27rev3CtV35zjOJh3KBEFN%2BcPlAiEAxizAkLRrUbSXfGl0jbAJcQwt3h%2BkXc620E3KuEcEECMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOvYFPOgR14TjuKjOyrcAzChJolRiksALasmiyItky%2F9itoJ8VRE2N7ttufiFq3dGIKgGEhv9hj0ZTqlKrtQ0%2B%2BUzvmECIiIgctNvDPKehbG6wNul29OQm4CIHKo6MwISlAKBWVqOPJCEv2h7Hi3SSgV7fPGiR0txJ%2FHEtCfWwtlh7QeryrfBeUdxVONl8huCknk4Xvz1auuFJH324OkLANPGci7eR4isKnQ8Kb8n%2FvyrkQ0XZpBvkPgSiut2%2F0xcbVcAX6cgz0p2YL89ri0AZFg4M0DeZh7xIF0wtp%2B8DzUEN7V2VWSNc4ejCljJuvNhvVVNu3qtLbk9wAFlarpjFa4NHJ2tRuZn%2FrHHQOvgpZyABzpJ8LA9BLehZ3JSBK2Jn4pVLc3tUL4cPtc9rj1cY12lHJ79kfVD5R2QWiMcOiYallNqqcxWd7B%2FZ%2FDATOx31tPN09wrtdr8%2FseDraerU2Ih7fvd8a56Wd2YxBdwqCXF0MJ4kWo4uN7zWIn7208FMk%2F5be1aPupTYRAZUQNdV64qvYZFr9G%2FB660yQgVqO7Nk2IsLNZ%2BjV1IjTQKy9FpXKKr%2B0QH9TvWzi%2Fe8FYNHgypIga%2F5YLgrM4663zNnUbIZE2gbrY0yLK8%2B%2FFIjvHQcPuw5cN61SL7eGLMMSoqr4GOqUByoGpNX93M%2FxHRw7xPucjb2geVoGONlmsaH33dHRztDTgiA%2BJsk7DeUwjTLm4PVTNJSdP5j5zt6FDOr%2Ft08pOUGYyFss7cHvHf42LXTMARcg04D17pQHmhaHQldtrvmh4rwbSK6E8vMImfTkB9ugFNuJTYJfRtgrTUi8QSnBwh1bhktfP3RRT3deG2c9sx%2BA354h9JETGACkCTpypOz7jN8Ci1E2t&X-Amz-Signature=f862927cb812d84db2af5f2ad5c7e907f78e8bcef44119abe45896160a422cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPKSAUCR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbKZ%2Fhp%2BDIpIuVy6A27rev3CtV35zjOJh3KBEFN%2BcPlAiEAxizAkLRrUbSXfGl0jbAJcQwt3h%2BkXc620E3KuEcEECMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOvYFPOgR14TjuKjOyrcAzChJolRiksALasmiyItky%2F9itoJ8VRE2N7ttufiFq3dGIKgGEhv9hj0ZTqlKrtQ0%2B%2BUzvmECIiIgctNvDPKehbG6wNul29OQm4CIHKo6MwISlAKBWVqOPJCEv2h7Hi3SSgV7fPGiR0txJ%2FHEtCfWwtlh7QeryrfBeUdxVONl8huCknk4Xvz1auuFJH324OkLANPGci7eR4isKnQ8Kb8n%2FvyrkQ0XZpBvkPgSiut2%2F0xcbVcAX6cgz0p2YL89ri0AZFg4M0DeZh7xIF0wtp%2B8DzUEN7V2VWSNc4ejCljJuvNhvVVNu3qtLbk9wAFlarpjFa4NHJ2tRuZn%2FrHHQOvgpZyABzpJ8LA9BLehZ3JSBK2Jn4pVLc3tUL4cPtc9rj1cY12lHJ79kfVD5R2QWiMcOiYallNqqcxWd7B%2FZ%2FDATOx31tPN09wrtdr8%2FseDraerU2Ih7fvd8a56Wd2YxBdwqCXF0MJ4kWo4uN7zWIn7208FMk%2F5be1aPupTYRAZUQNdV64qvYZFr9G%2FB660yQgVqO7Nk2IsLNZ%2BjV1IjTQKy9FpXKKr%2B0QH9TvWzi%2Fe8FYNHgypIga%2F5YLgrM4663zNnUbIZE2gbrY0yLK8%2B%2FFIjvHQcPuw5cN61SL7eGLMMSoqr4GOqUByoGpNX93M%2FxHRw7xPucjb2geVoGONlmsaH33dHRztDTgiA%2BJsk7DeUwjTLm4PVTNJSdP5j5zt6FDOr%2Ft08pOUGYyFss7cHvHf42LXTMARcg04D17pQHmhaHQldtrvmh4rwbSK6E8vMImfTkB9ugFNuJTYJfRtgrTUi8QSnBwh1bhktfP3RRT3deG2c9sx%2BA354h9JETGACkCTpypOz7jN8Ci1E2t&X-Amz-Signature=088d250df598337834ce5bfef6da1bf78b8ea8c881401371a63b75a89c1d7a31&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPKSAUCR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbKZ%2Fhp%2BDIpIuVy6A27rev3CtV35zjOJh3KBEFN%2BcPlAiEAxizAkLRrUbSXfGl0jbAJcQwt3h%2BkXc620E3KuEcEECMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOvYFPOgR14TjuKjOyrcAzChJolRiksALasmiyItky%2F9itoJ8VRE2N7ttufiFq3dGIKgGEhv9hj0ZTqlKrtQ0%2B%2BUzvmECIiIgctNvDPKehbG6wNul29OQm4CIHKo6MwISlAKBWVqOPJCEv2h7Hi3SSgV7fPGiR0txJ%2FHEtCfWwtlh7QeryrfBeUdxVONl8huCknk4Xvz1auuFJH324OkLANPGci7eR4isKnQ8Kb8n%2FvyrkQ0XZpBvkPgSiut2%2F0xcbVcAX6cgz0p2YL89ri0AZFg4M0DeZh7xIF0wtp%2B8DzUEN7V2VWSNc4ejCljJuvNhvVVNu3qtLbk9wAFlarpjFa4NHJ2tRuZn%2FrHHQOvgpZyABzpJ8LA9BLehZ3JSBK2Jn4pVLc3tUL4cPtc9rj1cY12lHJ79kfVD5R2QWiMcOiYallNqqcxWd7B%2FZ%2FDATOx31tPN09wrtdr8%2FseDraerU2Ih7fvd8a56Wd2YxBdwqCXF0MJ4kWo4uN7zWIn7208FMk%2F5be1aPupTYRAZUQNdV64qvYZFr9G%2FB660yQgVqO7Nk2IsLNZ%2BjV1IjTQKy9FpXKKr%2B0QH9TvWzi%2Fe8FYNHgypIga%2F5YLgrM4663zNnUbIZE2gbrY0yLK8%2B%2FFIjvHQcPuw5cN61SL7eGLMMSoqr4GOqUByoGpNX93M%2FxHRw7xPucjb2geVoGONlmsaH33dHRztDTgiA%2BJsk7DeUwjTLm4PVTNJSdP5j5zt6FDOr%2Ft08pOUGYyFss7cHvHf42LXTMARcg04D17pQHmhaHQldtrvmh4rwbSK6E8vMImfTkB9ugFNuJTYJfRtgrTUi8QSnBwh1bhktfP3RRT3deG2c9sx%2BA354h9JETGACkCTpypOz7jN8Ci1E2t&X-Amz-Signature=b1527ba757af19e1633bedf14e16eafa6d7932c83a5dcfcb0f9bb9986736ff6d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPKSAUCR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbKZ%2Fhp%2BDIpIuVy6A27rev3CtV35zjOJh3KBEFN%2BcPlAiEAxizAkLRrUbSXfGl0jbAJcQwt3h%2BkXc620E3KuEcEECMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOvYFPOgR14TjuKjOyrcAzChJolRiksALasmiyItky%2F9itoJ8VRE2N7ttufiFq3dGIKgGEhv9hj0ZTqlKrtQ0%2B%2BUzvmECIiIgctNvDPKehbG6wNul29OQm4CIHKo6MwISlAKBWVqOPJCEv2h7Hi3SSgV7fPGiR0txJ%2FHEtCfWwtlh7QeryrfBeUdxVONl8huCknk4Xvz1auuFJH324OkLANPGci7eR4isKnQ8Kb8n%2FvyrkQ0XZpBvkPgSiut2%2F0xcbVcAX6cgz0p2YL89ri0AZFg4M0DeZh7xIF0wtp%2B8DzUEN7V2VWSNc4ejCljJuvNhvVVNu3qtLbk9wAFlarpjFa4NHJ2tRuZn%2FrHHQOvgpZyABzpJ8LA9BLehZ3JSBK2Jn4pVLc3tUL4cPtc9rj1cY12lHJ79kfVD5R2QWiMcOiYallNqqcxWd7B%2FZ%2FDATOx31tPN09wrtdr8%2FseDraerU2Ih7fvd8a56Wd2YxBdwqCXF0MJ4kWo4uN7zWIn7208FMk%2F5be1aPupTYRAZUQNdV64qvYZFr9G%2FB660yQgVqO7Nk2IsLNZ%2BjV1IjTQKy9FpXKKr%2B0QH9TvWzi%2Fe8FYNHgypIga%2F5YLgrM4663zNnUbIZE2gbrY0yLK8%2B%2FFIjvHQcPuw5cN61SL7eGLMMSoqr4GOqUByoGpNX93M%2FxHRw7xPucjb2geVoGONlmsaH33dHRztDTgiA%2BJsk7DeUwjTLm4PVTNJSdP5j5zt6FDOr%2Ft08pOUGYyFss7cHvHf42LXTMARcg04D17pQHmhaHQldtrvmh4rwbSK6E8vMImfTkB9ugFNuJTYJfRtgrTUi8QSnBwh1bhktfP3RRT3deG2c9sx%2BA354h9JETGACkCTpypOz7jN8Ci1E2t&X-Amz-Signature=ba8d9bf0f48b1fdabd65fe129ec49e48671ffc0f1c3e4982a20df87698fa0e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPKSAUCR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbKZ%2Fhp%2BDIpIuVy6A27rev3CtV35zjOJh3KBEFN%2BcPlAiEAxizAkLRrUbSXfGl0jbAJcQwt3h%2BkXc620E3KuEcEECMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOvYFPOgR14TjuKjOyrcAzChJolRiksALasmiyItky%2F9itoJ8VRE2N7ttufiFq3dGIKgGEhv9hj0ZTqlKrtQ0%2B%2BUzvmECIiIgctNvDPKehbG6wNul29OQm4CIHKo6MwISlAKBWVqOPJCEv2h7Hi3SSgV7fPGiR0txJ%2FHEtCfWwtlh7QeryrfBeUdxVONl8huCknk4Xvz1auuFJH324OkLANPGci7eR4isKnQ8Kb8n%2FvyrkQ0XZpBvkPgSiut2%2F0xcbVcAX6cgz0p2YL89ri0AZFg4M0DeZh7xIF0wtp%2B8DzUEN7V2VWSNc4ejCljJuvNhvVVNu3qtLbk9wAFlarpjFa4NHJ2tRuZn%2FrHHQOvgpZyABzpJ8LA9BLehZ3JSBK2Jn4pVLc3tUL4cPtc9rj1cY12lHJ79kfVD5R2QWiMcOiYallNqqcxWd7B%2FZ%2FDATOx31tPN09wrtdr8%2FseDraerU2Ih7fvd8a56Wd2YxBdwqCXF0MJ4kWo4uN7zWIn7208FMk%2F5be1aPupTYRAZUQNdV64qvYZFr9G%2FB660yQgVqO7Nk2IsLNZ%2BjV1IjTQKy9FpXKKr%2B0QH9TvWzi%2Fe8FYNHgypIga%2F5YLgrM4663zNnUbIZE2gbrY0yLK8%2B%2FFIjvHQcPuw5cN61SL7eGLMMSoqr4GOqUByoGpNX93M%2FxHRw7xPucjb2geVoGONlmsaH33dHRztDTgiA%2BJsk7DeUwjTLm4PVTNJSdP5j5zt6FDOr%2Ft08pOUGYyFss7cHvHf42LXTMARcg04D17pQHmhaHQldtrvmh4rwbSK6E8vMImfTkB9ugFNuJTYJfRtgrTUi8QSnBwh1bhktfP3RRT3deG2c9sx%2BA354h9JETGACkCTpypOz7jN8Ci1E2t&X-Amz-Signature=88a48c3326eac5d2b2807a8e4a2a1759e2bf62c7e551fabf445f519674651b56&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPKSAUCR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbKZ%2Fhp%2BDIpIuVy6A27rev3CtV35zjOJh3KBEFN%2BcPlAiEAxizAkLRrUbSXfGl0jbAJcQwt3h%2BkXc620E3KuEcEECMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOvYFPOgR14TjuKjOyrcAzChJolRiksALasmiyItky%2F9itoJ8VRE2N7ttufiFq3dGIKgGEhv9hj0ZTqlKrtQ0%2B%2BUzvmECIiIgctNvDPKehbG6wNul29OQm4CIHKo6MwISlAKBWVqOPJCEv2h7Hi3SSgV7fPGiR0txJ%2FHEtCfWwtlh7QeryrfBeUdxVONl8huCknk4Xvz1auuFJH324OkLANPGci7eR4isKnQ8Kb8n%2FvyrkQ0XZpBvkPgSiut2%2F0xcbVcAX6cgz0p2YL89ri0AZFg4M0DeZh7xIF0wtp%2B8DzUEN7V2VWSNc4ejCljJuvNhvVVNu3qtLbk9wAFlarpjFa4NHJ2tRuZn%2FrHHQOvgpZyABzpJ8LA9BLehZ3JSBK2Jn4pVLc3tUL4cPtc9rj1cY12lHJ79kfVD5R2QWiMcOiYallNqqcxWd7B%2FZ%2FDATOx31tPN09wrtdr8%2FseDraerU2Ih7fvd8a56Wd2YxBdwqCXF0MJ4kWo4uN7zWIn7208FMk%2F5be1aPupTYRAZUQNdV64qvYZFr9G%2FB660yQgVqO7Nk2IsLNZ%2BjV1IjTQKy9FpXKKr%2B0QH9TvWzi%2Fe8FYNHgypIga%2F5YLgrM4663zNnUbIZE2gbrY0yLK8%2B%2FFIjvHQcPuw5cN61SL7eGLMMSoqr4GOqUByoGpNX93M%2FxHRw7xPucjb2geVoGONlmsaH33dHRztDTgiA%2BJsk7DeUwjTLm4PVTNJSdP5j5zt6FDOr%2Ft08pOUGYyFss7cHvHf42LXTMARcg04D17pQHmhaHQldtrvmh4rwbSK6E8vMImfTkB9ugFNuJTYJfRtgrTUi8QSnBwh1bhktfP3RRT3deG2c9sx%2BA354h9JETGACkCTpypOz7jN8Ci1E2t&X-Amz-Signature=83f33573525879e3b069cf12ab31699d59db71df1925902d0e7360e9d0ad2c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

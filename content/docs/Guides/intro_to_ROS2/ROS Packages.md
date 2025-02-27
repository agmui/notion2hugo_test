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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQRXYCJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB4AQwBGMdy2W9u3yEz49eOfhR3y920imC0OBq%2FP5r%2F0AiEAyYnvj0PRWBDc%2F1l7iqhr1wFg1VhWnEnPVNaJwgvzGbEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGEFFLfeuK1ti9HOMircA1B2q88At%2FLgIl8HDh5TdEvktojLD4eF39GtrPcfx2A%2Fuc7rL%2FNkKWllzkOHKOOiFHgrh%2BAfFjH2iKMmk95x0odpk80nxhwaGxg6M3nCXcxOUnu0clOoxwewQcG40%2BXCQUSWuD7Y81oKpETBf5qVQfP4OopRU0kaKALe8roAY32Xh572TcXPIERjPVZeiy8jtAAtx9ForKqiOQBC%2BHPZvGSAJ8LNN1XxTtuXhoykGV1M6xskKEk27C6%2F%2FmS%2Bd8j3dMB1Jhu7eLWoW4V9VviOKykbhoc7XahYw5qGxJ%2BR%2FDNNeFASyfobzdwtj1GwFt7b3nvA9X%2FGtzlSeumo5ULNdWzvFgadCzYuIEOby5xlExh9SiGzyAJOvMBaVrYJkAbww%2F9u87g1wmWmsDZ7FNF6nrxTQPqQMqb5EbIKWPd8JVhVZskj2PzauhgcuDIOj4E%2B04OKyTO1zRB1%2FwA5ka3TmYe6RPDREbeRJl5igLQgeJCJIaWwkJX3WiFshO89712Dq%2FZZElKshWZET%2B1cc1e9RloNw9vbEuXmSKBLz%2BjXq%2F5GJ26%2BTuxkgzdqVrCXaO6Hp%2FHohJrS7kgwK2f%2FnqnOXQ4KGAW4MTLPKE8xs7M5nh7lj4sRuz57FyJjVUZyMJvtgb4GOqUBIeawoV%2BGzqUiQleCryfUCGTX%2FoadWnpW4xuo49UsfMFCPv7rLG%2FPXaDNfQG1TmNwe58sPYf3DdC%2Ba%2BzzRll3RutgqXffl02r5EHZtXcKgr8AALMmL5MBq6rHHLmgTu%2B8nupEX7RPly%2BU%2BapOgEQKPTPk1dBNNKuUxWuIdxdsS94FLW2MNviWl%2BGBhrtN%2BpdeWyQnyZ6hZeYeeI0IwobUjfzMtPDd&X-Amz-Signature=de1e378df0dcfa41029d7c5a8335e532e427bbd25f2dd83a325a8c5e8df782f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQRXYCJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB4AQwBGMdy2W9u3yEz49eOfhR3y920imC0OBq%2FP5r%2F0AiEAyYnvj0PRWBDc%2F1l7iqhr1wFg1VhWnEnPVNaJwgvzGbEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGEFFLfeuK1ti9HOMircA1B2q88At%2FLgIl8HDh5TdEvktojLD4eF39GtrPcfx2A%2Fuc7rL%2FNkKWllzkOHKOOiFHgrh%2BAfFjH2iKMmk95x0odpk80nxhwaGxg6M3nCXcxOUnu0clOoxwewQcG40%2BXCQUSWuD7Y81oKpETBf5qVQfP4OopRU0kaKALe8roAY32Xh572TcXPIERjPVZeiy8jtAAtx9ForKqiOQBC%2BHPZvGSAJ8LNN1XxTtuXhoykGV1M6xskKEk27C6%2F%2FmS%2Bd8j3dMB1Jhu7eLWoW4V9VviOKykbhoc7XahYw5qGxJ%2BR%2FDNNeFASyfobzdwtj1GwFt7b3nvA9X%2FGtzlSeumo5ULNdWzvFgadCzYuIEOby5xlExh9SiGzyAJOvMBaVrYJkAbww%2F9u87g1wmWmsDZ7FNF6nrxTQPqQMqb5EbIKWPd8JVhVZskj2PzauhgcuDIOj4E%2B04OKyTO1zRB1%2FwA5ka3TmYe6RPDREbeRJl5igLQgeJCJIaWwkJX3WiFshO89712Dq%2FZZElKshWZET%2B1cc1e9RloNw9vbEuXmSKBLz%2BjXq%2F5GJ26%2BTuxkgzdqVrCXaO6Hp%2FHohJrS7kgwK2f%2FnqnOXQ4KGAW4MTLPKE8xs7M5nh7lj4sRuz57FyJjVUZyMJvtgb4GOqUBIeawoV%2BGzqUiQleCryfUCGTX%2FoadWnpW4xuo49UsfMFCPv7rLG%2FPXaDNfQG1TmNwe58sPYf3DdC%2Ba%2BzzRll3RutgqXffl02r5EHZtXcKgr8AALMmL5MBq6rHHLmgTu%2B8nupEX7RPly%2BU%2BapOgEQKPTPk1dBNNKuUxWuIdxdsS94FLW2MNviWl%2BGBhrtN%2BpdeWyQnyZ6hZeYeeI0IwobUjfzMtPDd&X-Amz-Signature=127483fd5e69f70749348ee0263b8b8c8e78625a77dd5e7a6ce5f6b8e4e06164&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQRXYCJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB4AQwBGMdy2W9u3yEz49eOfhR3y920imC0OBq%2FP5r%2F0AiEAyYnvj0PRWBDc%2F1l7iqhr1wFg1VhWnEnPVNaJwgvzGbEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGEFFLfeuK1ti9HOMircA1B2q88At%2FLgIl8HDh5TdEvktojLD4eF39GtrPcfx2A%2Fuc7rL%2FNkKWllzkOHKOOiFHgrh%2BAfFjH2iKMmk95x0odpk80nxhwaGxg6M3nCXcxOUnu0clOoxwewQcG40%2BXCQUSWuD7Y81oKpETBf5qVQfP4OopRU0kaKALe8roAY32Xh572TcXPIERjPVZeiy8jtAAtx9ForKqiOQBC%2BHPZvGSAJ8LNN1XxTtuXhoykGV1M6xskKEk27C6%2F%2FmS%2Bd8j3dMB1Jhu7eLWoW4V9VviOKykbhoc7XahYw5qGxJ%2BR%2FDNNeFASyfobzdwtj1GwFt7b3nvA9X%2FGtzlSeumo5ULNdWzvFgadCzYuIEOby5xlExh9SiGzyAJOvMBaVrYJkAbww%2F9u87g1wmWmsDZ7FNF6nrxTQPqQMqb5EbIKWPd8JVhVZskj2PzauhgcuDIOj4E%2B04OKyTO1zRB1%2FwA5ka3TmYe6RPDREbeRJl5igLQgeJCJIaWwkJX3WiFshO89712Dq%2FZZElKshWZET%2B1cc1e9RloNw9vbEuXmSKBLz%2BjXq%2F5GJ26%2BTuxkgzdqVrCXaO6Hp%2FHohJrS7kgwK2f%2FnqnOXQ4KGAW4MTLPKE8xs7M5nh7lj4sRuz57FyJjVUZyMJvtgb4GOqUBIeawoV%2BGzqUiQleCryfUCGTX%2FoadWnpW4xuo49UsfMFCPv7rLG%2FPXaDNfQG1TmNwe58sPYf3DdC%2Ba%2BzzRll3RutgqXffl02r5EHZtXcKgr8AALMmL5MBq6rHHLmgTu%2B8nupEX7RPly%2BU%2BapOgEQKPTPk1dBNNKuUxWuIdxdsS94FLW2MNviWl%2BGBhrtN%2BpdeWyQnyZ6hZeYeeI0IwobUjfzMtPDd&X-Amz-Signature=362c99c314884c831f7e19691b890d5a5763679458f35268dd2f392216193165&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQRXYCJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB4AQwBGMdy2W9u3yEz49eOfhR3y920imC0OBq%2FP5r%2F0AiEAyYnvj0PRWBDc%2F1l7iqhr1wFg1VhWnEnPVNaJwgvzGbEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGEFFLfeuK1ti9HOMircA1B2q88At%2FLgIl8HDh5TdEvktojLD4eF39GtrPcfx2A%2Fuc7rL%2FNkKWllzkOHKOOiFHgrh%2BAfFjH2iKMmk95x0odpk80nxhwaGxg6M3nCXcxOUnu0clOoxwewQcG40%2BXCQUSWuD7Y81oKpETBf5qVQfP4OopRU0kaKALe8roAY32Xh572TcXPIERjPVZeiy8jtAAtx9ForKqiOQBC%2BHPZvGSAJ8LNN1XxTtuXhoykGV1M6xskKEk27C6%2F%2FmS%2Bd8j3dMB1Jhu7eLWoW4V9VviOKykbhoc7XahYw5qGxJ%2BR%2FDNNeFASyfobzdwtj1GwFt7b3nvA9X%2FGtzlSeumo5ULNdWzvFgadCzYuIEOby5xlExh9SiGzyAJOvMBaVrYJkAbww%2F9u87g1wmWmsDZ7FNF6nrxTQPqQMqb5EbIKWPd8JVhVZskj2PzauhgcuDIOj4E%2B04OKyTO1zRB1%2FwA5ka3TmYe6RPDREbeRJl5igLQgeJCJIaWwkJX3WiFshO89712Dq%2FZZElKshWZET%2B1cc1e9RloNw9vbEuXmSKBLz%2BjXq%2F5GJ26%2BTuxkgzdqVrCXaO6Hp%2FHohJrS7kgwK2f%2FnqnOXQ4KGAW4MTLPKE8xs7M5nh7lj4sRuz57FyJjVUZyMJvtgb4GOqUBIeawoV%2BGzqUiQleCryfUCGTX%2FoadWnpW4xuo49UsfMFCPv7rLG%2FPXaDNfQG1TmNwe58sPYf3DdC%2Ba%2BzzRll3RutgqXffl02r5EHZtXcKgr8AALMmL5MBq6rHHLmgTu%2B8nupEX7RPly%2BU%2BapOgEQKPTPk1dBNNKuUxWuIdxdsS94FLW2MNviWl%2BGBhrtN%2BpdeWyQnyZ6hZeYeeI0IwobUjfzMtPDd&X-Amz-Signature=f56bcc066ace29c4e03f67278738548e3000dd4ad20b32ca53826780d9ba3676&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQRXYCJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB4AQwBGMdy2W9u3yEz49eOfhR3y920imC0OBq%2FP5r%2F0AiEAyYnvj0PRWBDc%2F1l7iqhr1wFg1VhWnEnPVNaJwgvzGbEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGEFFLfeuK1ti9HOMircA1B2q88At%2FLgIl8HDh5TdEvktojLD4eF39GtrPcfx2A%2Fuc7rL%2FNkKWllzkOHKOOiFHgrh%2BAfFjH2iKMmk95x0odpk80nxhwaGxg6M3nCXcxOUnu0clOoxwewQcG40%2BXCQUSWuD7Y81oKpETBf5qVQfP4OopRU0kaKALe8roAY32Xh572TcXPIERjPVZeiy8jtAAtx9ForKqiOQBC%2BHPZvGSAJ8LNN1XxTtuXhoykGV1M6xskKEk27C6%2F%2FmS%2Bd8j3dMB1Jhu7eLWoW4V9VviOKykbhoc7XahYw5qGxJ%2BR%2FDNNeFASyfobzdwtj1GwFt7b3nvA9X%2FGtzlSeumo5ULNdWzvFgadCzYuIEOby5xlExh9SiGzyAJOvMBaVrYJkAbww%2F9u87g1wmWmsDZ7FNF6nrxTQPqQMqb5EbIKWPd8JVhVZskj2PzauhgcuDIOj4E%2B04OKyTO1zRB1%2FwA5ka3TmYe6RPDREbeRJl5igLQgeJCJIaWwkJX3WiFshO89712Dq%2FZZElKshWZET%2B1cc1e9RloNw9vbEuXmSKBLz%2BjXq%2F5GJ26%2BTuxkgzdqVrCXaO6Hp%2FHohJrS7kgwK2f%2FnqnOXQ4KGAW4MTLPKE8xs7M5nh7lj4sRuz57FyJjVUZyMJvtgb4GOqUBIeawoV%2BGzqUiQleCryfUCGTX%2FoadWnpW4xuo49UsfMFCPv7rLG%2FPXaDNfQG1TmNwe58sPYf3DdC%2Ba%2BzzRll3RutgqXffl02r5EHZtXcKgr8AALMmL5MBq6rHHLmgTu%2B8nupEX7RPly%2BU%2BapOgEQKPTPk1dBNNKuUxWuIdxdsS94FLW2MNviWl%2BGBhrtN%2BpdeWyQnyZ6hZeYeeI0IwobUjfzMtPDd&X-Amz-Signature=b4f54b6655533c6355b22a32f0c892638ee026a8b3b9de347a061863f1cac0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQRXYCJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB4AQwBGMdy2W9u3yEz49eOfhR3y920imC0OBq%2FP5r%2F0AiEAyYnvj0PRWBDc%2F1l7iqhr1wFg1VhWnEnPVNaJwgvzGbEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGEFFLfeuK1ti9HOMircA1B2q88At%2FLgIl8HDh5TdEvktojLD4eF39GtrPcfx2A%2Fuc7rL%2FNkKWllzkOHKOOiFHgrh%2BAfFjH2iKMmk95x0odpk80nxhwaGxg6M3nCXcxOUnu0clOoxwewQcG40%2BXCQUSWuD7Y81oKpETBf5qVQfP4OopRU0kaKALe8roAY32Xh572TcXPIERjPVZeiy8jtAAtx9ForKqiOQBC%2BHPZvGSAJ8LNN1XxTtuXhoykGV1M6xskKEk27C6%2F%2FmS%2Bd8j3dMB1Jhu7eLWoW4V9VviOKykbhoc7XahYw5qGxJ%2BR%2FDNNeFASyfobzdwtj1GwFt7b3nvA9X%2FGtzlSeumo5ULNdWzvFgadCzYuIEOby5xlExh9SiGzyAJOvMBaVrYJkAbww%2F9u87g1wmWmsDZ7FNF6nrxTQPqQMqb5EbIKWPd8JVhVZskj2PzauhgcuDIOj4E%2B04OKyTO1zRB1%2FwA5ka3TmYe6RPDREbeRJl5igLQgeJCJIaWwkJX3WiFshO89712Dq%2FZZElKshWZET%2B1cc1e9RloNw9vbEuXmSKBLz%2BjXq%2F5GJ26%2BTuxkgzdqVrCXaO6Hp%2FHohJrS7kgwK2f%2FnqnOXQ4KGAW4MTLPKE8xs7M5nh7lj4sRuz57FyJjVUZyMJvtgb4GOqUBIeawoV%2BGzqUiQleCryfUCGTX%2FoadWnpW4xuo49UsfMFCPv7rLG%2FPXaDNfQG1TmNwe58sPYf3DdC%2Ba%2BzzRll3RutgqXffl02r5EHZtXcKgr8AALMmL5MBq6rHHLmgTu%2B8nupEX7RPly%2BU%2BapOgEQKPTPk1dBNNKuUxWuIdxdsS94FLW2MNviWl%2BGBhrtN%2BpdeWyQnyZ6hZeYeeI0IwobUjfzMtPDd&X-Amz-Signature=4f700de9edcd476a72f5026ee8da81be70ca0006bc399aba5dbf1942eb99d759&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQRXYCJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB4AQwBGMdy2W9u3yEz49eOfhR3y920imC0OBq%2FP5r%2F0AiEAyYnvj0PRWBDc%2F1l7iqhr1wFg1VhWnEnPVNaJwgvzGbEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGEFFLfeuK1ti9HOMircA1B2q88At%2FLgIl8HDh5TdEvktojLD4eF39GtrPcfx2A%2Fuc7rL%2FNkKWllzkOHKOOiFHgrh%2BAfFjH2iKMmk95x0odpk80nxhwaGxg6M3nCXcxOUnu0clOoxwewQcG40%2BXCQUSWuD7Y81oKpETBf5qVQfP4OopRU0kaKALe8roAY32Xh572TcXPIERjPVZeiy8jtAAtx9ForKqiOQBC%2BHPZvGSAJ8LNN1XxTtuXhoykGV1M6xskKEk27C6%2F%2FmS%2Bd8j3dMB1Jhu7eLWoW4V9VviOKykbhoc7XahYw5qGxJ%2BR%2FDNNeFASyfobzdwtj1GwFt7b3nvA9X%2FGtzlSeumo5ULNdWzvFgadCzYuIEOby5xlExh9SiGzyAJOvMBaVrYJkAbww%2F9u87g1wmWmsDZ7FNF6nrxTQPqQMqb5EbIKWPd8JVhVZskj2PzauhgcuDIOj4E%2B04OKyTO1zRB1%2FwA5ka3TmYe6RPDREbeRJl5igLQgeJCJIaWwkJX3WiFshO89712Dq%2FZZElKshWZET%2B1cc1e9RloNw9vbEuXmSKBLz%2BjXq%2F5GJ26%2BTuxkgzdqVrCXaO6Hp%2FHohJrS7kgwK2f%2FnqnOXQ4KGAW4MTLPKE8xs7M5nh7lj4sRuz57FyJjVUZyMJvtgb4GOqUBIeawoV%2BGzqUiQleCryfUCGTX%2FoadWnpW4xuo49UsfMFCPv7rLG%2FPXaDNfQG1TmNwe58sPYf3DdC%2Ba%2BzzRll3RutgqXffl02r5EHZtXcKgr8AALMmL5MBq6rHHLmgTu%2B8nupEX7RPly%2BU%2BapOgEQKPTPk1dBNNKuUxWuIdxdsS94FLW2MNviWl%2BGBhrtN%2BpdeWyQnyZ6hZeYeeI0IwobUjfzMtPDd&X-Amz-Signature=cf055a272fc904ab5e81fbf1a10bcf1d738fa0e3a3d563cda78f1b55f81fee54&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567U2EVV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBVHDxf306nnZnZGq%2BO%2FcrmvmkhZwmGmUVjLRRhE9WzuAiEAwhMQYYU%2Bxtn7U0joMxsP3AjpTpO0Dus0BbzqvlNPYJgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw88ZWwMa4l%2FHCmpSrcA7Wx2A7yX2gF49B9t%2BRHmFq1zAuaJIBuTNB8%2FWuMAK1Sn2WLZavJn%2Be9buBjP1R7pRg4IldqUJ8vCODStBqp%2F0LlGGY%2BEarQ5SOeVnCemBYo71o6tZmG5RZPwpVOeeg6zhGDPA2ItnQhTLyZw9oL9FNYNo7OpnM1gyutKw3z2v53pD8aXSdVb95k5EHJc3Ystalid76R%2FlJvbBZotTQ4QllzHQ1xJBplXeSwBqQUPQN%2FFoF4adGhaNU%2BuiLegvgTIKUQoQMlW73drQFy9OBmpcRYRNdGXc3vIH61pglNmUvsWjxAVtWwT6qpzXKdczF0gYgablSxgPeIMFI7dHEwHPv65t7mReQLTj7PoC%2B8tKeVD%2B5cu%2FwtJMjFvKKZd9xVpPOBfGWzuhJfF%2FrbfUSiXMTFjyDM80vXD8JZDq%2BSWO0YbcmJsNhMjaZwFvJjMxWD%2FrhF9qYaATfTTdywrmsdRiFpAe7l8dQAIGnPHsVKpYDxtyDK163uqozOgtXvJRdbm93AC7VPkB0EXJr4mO41oHUP4863F6cHZhtPNpYY61%2Bze%2B52Tds6ytQxhQK3sjYrfdXwSf%2BYR1wjXbX2p9C8WB9yket8Jhb2wI6tsTUN4MTmPVEQWWzQbjKE3N6cMNSEgMEGOqUB%2BsvDM4ejDAODjjgUBCrx3nmf6pfpTbNEbZYb9TVY4Uh9G5Dw5uXUgu0AGI1joJiuKbOaoCPrxuAgwT8GmnCAhg%2Fa7Lcisnf%2Fc24bufHocLQ7CreazQfx4XxJ61hO1eGTMZUdMCqc9hoNZvImy5%2BCelwqdnR7EsmLZdE51HId%2FQFcgAksQvYTGpMJJ5NIlVzsM5k3N57EEsDjp%2B64l9EW5I9iwCmX&X-Amz-Signature=5d79b8eb079b2975f8886dfe921d8ed97a9aa7adbe6da4abadb891c3a214ad66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567U2EVV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBVHDxf306nnZnZGq%2BO%2FcrmvmkhZwmGmUVjLRRhE9WzuAiEAwhMQYYU%2Bxtn7U0joMxsP3AjpTpO0Dus0BbzqvlNPYJgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw88ZWwMa4l%2FHCmpSrcA7Wx2A7yX2gF49B9t%2BRHmFq1zAuaJIBuTNB8%2FWuMAK1Sn2WLZavJn%2Be9buBjP1R7pRg4IldqUJ8vCODStBqp%2F0LlGGY%2BEarQ5SOeVnCemBYo71o6tZmG5RZPwpVOeeg6zhGDPA2ItnQhTLyZw9oL9FNYNo7OpnM1gyutKw3z2v53pD8aXSdVb95k5EHJc3Ystalid76R%2FlJvbBZotTQ4QllzHQ1xJBplXeSwBqQUPQN%2FFoF4adGhaNU%2BuiLegvgTIKUQoQMlW73drQFy9OBmpcRYRNdGXc3vIH61pglNmUvsWjxAVtWwT6qpzXKdczF0gYgablSxgPeIMFI7dHEwHPv65t7mReQLTj7PoC%2B8tKeVD%2B5cu%2FwtJMjFvKKZd9xVpPOBfGWzuhJfF%2FrbfUSiXMTFjyDM80vXD8JZDq%2BSWO0YbcmJsNhMjaZwFvJjMxWD%2FrhF9qYaATfTTdywrmsdRiFpAe7l8dQAIGnPHsVKpYDxtyDK163uqozOgtXvJRdbm93AC7VPkB0EXJr4mO41oHUP4863F6cHZhtPNpYY61%2Bze%2B52Tds6ytQxhQK3sjYrfdXwSf%2BYR1wjXbX2p9C8WB9yket8Jhb2wI6tsTUN4MTmPVEQWWzQbjKE3N6cMNSEgMEGOqUB%2BsvDM4ejDAODjjgUBCrx3nmf6pfpTbNEbZYb9TVY4Uh9G5Dw5uXUgu0AGI1joJiuKbOaoCPrxuAgwT8GmnCAhg%2Fa7Lcisnf%2Fc24bufHocLQ7CreazQfx4XxJ61hO1eGTMZUdMCqc9hoNZvImy5%2BCelwqdnR7EsmLZdE51HId%2FQFcgAksQvYTGpMJJ5NIlVzsM5k3N57EEsDjp%2B64l9EW5I9iwCmX&X-Amz-Signature=22c3adb2dd668eb548f6ceb2934e638b6ac76497be6cf139876c20573440723f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567U2EVV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBVHDxf306nnZnZGq%2BO%2FcrmvmkhZwmGmUVjLRRhE9WzuAiEAwhMQYYU%2Bxtn7U0joMxsP3AjpTpO0Dus0BbzqvlNPYJgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw88ZWwMa4l%2FHCmpSrcA7Wx2A7yX2gF49B9t%2BRHmFq1zAuaJIBuTNB8%2FWuMAK1Sn2WLZavJn%2Be9buBjP1R7pRg4IldqUJ8vCODStBqp%2F0LlGGY%2BEarQ5SOeVnCemBYo71o6tZmG5RZPwpVOeeg6zhGDPA2ItnQhTLyZw9oL9FNYNo7OpnM1gyutKw3z2v53pD8aXSdVb95k5EHJc3Ystalid76R%2FlJvbBZotTQ4QllzHQ1xJBplXeSwBqQUPQN%2FFoF4adGhaNU%2BuiLegvgTIKUQoQMlW73drQFy9OBmpcRYRNdGXc3vIH61pglNmUvsWjxAVtWwT6qpzXKdczF0gYgablSxgPeIMFI7dHEwHPv65t7mReQLTj7PoC%2B8tKeVD%2B5cu%2FwtJMjFvKKZd9xVpPOBfGWzuhJfF%2FrbfUSiXMTFjyDM80vXD8JZDq%2BSWO0YbcmJsNhMjaZwFvJjMxWD%2FrhF9qYaATfTTdywrmsdRiFpAe7l8dQAIGnPHsVKpYDxtyDK163uqozOgtXvJRdbm93AC7VPkB0EXJr4mO41oHUP4863F6cHZhtPNpYY61%2Bze%2B52Tds6ytQxhQK3sjYrfdXwSf%2BYR1wjXbX2p9C8WB9yket8Jhb2wI6tsTUN4MTmPVEQWWzQbjKE3N6cMNSEgMEGOqUB%2BsvDM4ejDAODjjgUBCrx3nmf6pfpTbNEbZYb9TVY4Uh9G5Dw5uXUgu0AGI1joJiuKbOaoCPrxuAgwT8GmnCAhg%2Fa7Lcisnf%2Fc24bufHocLQ7CreazQfx4XxJ61hO1eGTMZUdMCqc9hoNZvImy5%2BCelwqdnR7EsmLZdE51HId%2FQFcgAksQvYTGpMJJ5NIlVzsM5k3N57EEsDjp%2B64l9EW5I9iwCmX&X-Amz-Signature=7175e9abb338208daa8449cbd1ebb47a026eb58549b96a190c16afc251a89344&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567U2EVV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBVHDxf306nnZnZGq%2BO%2FcrmvmkhZwmGmUVjLRRhE9WzuAiEAwhMQYYU%2Bxtn7U0joMxsP3AjpTpO0Dus0BbzqvlNPYJgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw88ZWwMa4l%2FHCmpSrcA7Wx2A7yX2gF49B9t%2BRHmFq1zAuaJIBuTNB8%2FWuMAK1Sn2WLZavJn%2Be9buBjP1R7pRg4IldqUJ8vCODStBqp%2F0LlGGY%2BEarQ5SOeVnCemBYo71o6tZmG5RZPwpVOeeg6zhGDPA2ItnQhTLyZw9oL9FNYNo7OpnM1gyutKw3z2v53pD8aXSdVb95k5EHJc3Ystalid76R%2FlJvbBZotTQ4QllzHQ1xJBplXeSwBqQUPQN%2FFoF4adGhaNU%2BuiLegvgTIKUQoQMlW73drQFy9OBmpcRYRNdGXc3vIH61pglNmUvsWjxAVtWwT6qpzXKdczF0gYgablSxgPeIMFI7dHEwHPv65t7mReQLTj7PoC%2B8tKeVD%2B5cu%2FwtJMjFvKKZd9xVpPOBfGWzuhJfF%2FrbfUSiXMTFjyDM80vXD8JZDq%2BSWO0YbcmJsNhMjaZwFvJjMxWD%2FrhF9qYaATfTTdywrmsdRiFpAe7l8dQAIGnPHsVKpYDxtyDK163uqozOgtXvJRdbm93AC7VPkB0EXJr4mO41oHUP4863F6cHZhtPNpYY61%2Bze%2B52Tds6ytQxhQK3sjYrfdXwSf%2BYR1wjXbX2p9C8WB9yket8Jhb2wI6tsTUN4MTmPVEQWWzQbjKE3N6cMNSEgMEGOqUB%2BsvDM4ejDAODjjgUBCrx3nmf6pfpTbNEbZYb9TVY4Uh9G5Dw5uXUgu0AGI1joJiuKbOaoCPrxuAgwT8GmnCAhg%2Fa7Lcisnf%2Fc24bufHocLQ7CreazQfx4XxJ61hO1eGTMZUdMCqc9hoNZvImy5%2BCelwqdnR7EsmLZdE51HId%2FQFcgAksQvYTGpMJJ5NIlVzsM5k3N57EEsDjp%2B64l9EW5I9iwCmX&X-Amz-Signature=34938f6ba8eb5a3322efa530d0c0afd4e5eeacc305565877b7471facaa411ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567U2EVV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBVHDxf306nnZnZGq%2BO%2FcrmvmkhZwmGmUVjLRRhE9WzuAiEAwhMQYYU%2Bxtn7U0joMxsP3AjpTpO0Dus0BbzqvlNPYJgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw88ZWwMa4l%2FHCmpSrcA7Wx2A7yX2gF49B9t%2BRHmFq1zAuaJIBuTNB8%2FWuMAK1Sn2WLZavJn%2Be9buBjP1R7pRg4IldqUJ8vCODStBqp%2F0LlGGY%2BEarQ5SOeVnCemBYo71o6tZmG5RZPwpVOeeg6zhGDPA2ItnQhTLyZw9oL9FNYNo7OpnM1gyutKw3z2v53pD8aXSdVb95k5EHJc3Ystalid76R%2FlJvbBZotTQ4QllzHQ1xJBplXeSwBqQUPQN%2FFoF4adGhaNU%2BuiLegvgTIKUQoQMlW73drQFy9OBmpcRYRNdGXc3vIH61pglNmUvsWjxAVtWwT6qpzXKdczF0gYgablSxgPeIMFI7dHEwHPv65t7mReQLTj7PoC%2B8tKeVD%2B5cu%2FwtJMjFvKKZd9xVpPOBfGWzuhJfF%2FrbfUSiXMTFjyDM80vXD8JZDq%2BSWO0YbcmJsNhMjaZwFvJjMxWD%2FrhF9qYaATfTTdywrmsdRiFpAe7l8dQAIGnPHsVKpYDxtyDK163uqozOgtXvJRdbm93AC7VPkB0EXJr4mO41oHUP4863F6cHZhtPNpYY61%2Bze%2B52Tds6ytQxhQK3sjYrfdXwSf%2BYR1wjXbX2p9C8WB9yket8Jhb2wI6tsTUN4MTmPVEQWWzQbjKE3N6cMNSEgMEGOqUB%2BsvDM4ejDAODjjgUBCrx3nmf6pfpTbNEbZYb9TVY4Uh9G5Dw5uXUgu0AGI1joJiuKbOaoCPrxuAgwT8GmnCAhg%2Fa7Lcisnf%2Fc24bufHocLQ7CreazQfx4XxJ61hO1eGTMZUdMCqc9hoNZvImy5%2BCelwqdnR7EsmLZdE51HId%2FQFcgAksQvYTGpMJJ5NIlVzsM5k3N57EEsDjp%2B64l9EW5I9iwCmX&X-Amz-Signature=106ce952299747fa0f650c52cb5592a9690252945b2f1b057bb41d7ea803ba2e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567U2EVV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBVHDxf306nnZnZGq%2BO%2FcrmvmkhZwmGmUVjLRRhE9WzuAiEAwhMQYYU%2Bxtn7U0joMxsP3AjpTpO0Dus0BbzqvlNPYJgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw88ZWwMa4l%2FHCmpSrcA7Wx2A7yX2gF49B9t%2BRHmFq1zAuaJIBuTNB8%2FWuMAK1Sn2WLZavJn%2Be9buBjP1R7pRg4IldqUJ8vCODStBqp%2F0LlGGY%2BEarQ5SOeVnCemBYo71o6tZmG5RZPwpVOeeg6zhGDPA2ItnQhTLyZw9oL9FNYNo7OpnM1gyutKw3z2v53pD8aXSdVb95k5EHJc3Ystalid76R%2FlJvbBZotTQ4QllzHQ1xJBplXeSwBqQUPQN%2FFoF4adGhaNU%2BuiLegvgTIKUQoQMlW73drQFy9OBmpcRYRNdGXc3vIH61pglNmUvsWjxAVtWwT6qpzXKdczF0gYgablSxgPeIMFI7dHEwHPv65t7mReQLTj7PoC%2B8tKeVD%2B5cu%2FwtJMjFvKKZd9xVpPOBfGWzuhJfF%2FrbfUSiXMTFjyDM80vXD8JZDq%2BSWO0YbcmJsNhMjaZwFvJjMxWD%2FrhF9qYaATfTTdywrmsdRiFpAe7l8dQAIGnPHsVKpYDxtyDK163uqozOgtXvJRdbm93AC7VPkB0EXJr4mO41oHUP4863F6cHZhtPNpYY61%2Bze%2B52Tds6ytQxhQK3sjYrfdXwSf%2BYR1wjXbX2p9C8WB9yket8Jhb2wI6tsTUN4MTmPVEQWWzQbjKE3N6cMNSEgMEGOqUB%2BsvDM4ejDAODjjgUBCrx3nmf6pfpTbNEbZYb9TVY4Uh9G5Dw5uXUgu0AGI1joJiuKbOaoCPrxuAgwT8GmnCAhg%2Fa7Lcisnf%2Fc24bufHocLQ7CreazQfx4XxJ61hO1eGTMZUdMCqc9hoNZvImy5%2BCelwqdnR7EsmLZdE51HId%2FQFcgAksQvYTGpMJJ5NIlVzsM5k3N57EEsDjp%2B64l9EW5I9iwCmX&X-Amz-Signature=ffae4dc6c6c0db4f64e2af7f25b43aec056fff0fdc5c0924dc0edefff5daef34&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567U2EVV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBVHDxf306nnZnZGq%2BO%2FcrmvmkhZwmGmUVjLRRhE9WzuAiEAwhMQYYU%2Bxtn7U0joMxsP3AjpTpO0Dus0BbzqvlNPYJgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw88ZWwMa4l%2FHCmpSrcA7Wx2A7yX2gF49B9t%2BRHmFq1zAuaJIBuTNB8%2FWuMAK1Sn2WLZavJn%2Be9buBjP1R7pRg4IldqUJ8vCODStBqp%2F0LlGGY%2BEarQ5SOeVnCemBYo71o6tZmG5RZPwpVOeeg6zhGDPA2ItnQhTLyZw9oL9FNYNo7OpnM1gyutKw3z2v53pD8aXSdVb95k5EHJc3Ystalid76R%2FlJvbBZotTQ4QllzHQ1xJBplXeSwBqQUPQN%2FFoF4adGhaNU%2BuiLegvgTIKUQoQMlW73drQFy9OBmpcRYRNdGXc3vIH61pglNmUvsWjxAVtWwT6qpzXKdczF0gYgablSxgPeIMFI7dHEwHPv65t7mReQLTj7PoC%2B8tKeVD%2B5cu%2FwtJMjFvKKZd9xVpPOBfGWzuhJfF%2FrbfUSiXMTFjyDM80vXD8JZDq%2BSWO0YbcmJsNhMjaZwFvJjMxWD%2FrhF9qYaATfTTdywrmsdRiFpAe7l8dQAIGnPHsVKpYDxtyDK163uqozOgtXvJRdbm93AC7VPkB0EXJr4mO41oHUP4863F6cHZhtPNpYY61%2Bze%2B52Tds6ytQxhQK3sjYrfdXwSf%2BYR1wjXbX2p9C8WB9yket8Jhb2wI6tsTUN4MTmPVEQWWzQbjKE3N6cMNSEgMEGOqUB%2BsvDM4ejDAODjjgUBCrx3nmf6pfpTbNEbZYb9TVY4Uh9G5Dw5uXUgu0AGI1joJiuKbOaoCPrxuAgwT8GmnCAhg%2Fa7Lcisnf%2Fc24bufHocLQ7CreazQfx4XxJ61hO1eGTMZUdMCqc9hoNZvImy5%2BCelwqdnR7EsmLZdE51HId%2FQFcgAksQvYTGpMJJ5NIlVzsM5k3N57EEsDjp%2B64l9EW5I9iwCmX&X-Amz-Signature=01287ccb20a1d7b9af8d7b1c68224ec2616ea400bba6cda07356114a036022e0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLUAWIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOKRsNkyHfY7p85oIdvx8nXS9rf6o57%2FxVEiohLHJe%2FAiAkd%2Bw3ncDd2V99RtiF%2BJaFCF%2BtCumFB6Bw%2FGRvYkZPRCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqanf9HDG5q9PpjQKtwDrPw1DMDikVAYv6d6bG7MnMosqVY5xQ6YpZhvONHndbZKqNu85ZZ%2F3Od2lxLturtBEIdhe1E3wgY7UItsob4NoQubSptZOlP5GJi6vDRxNNScCmWhbKyjDzT0oH1yXl0p9sVTDTQ1CdSMu9MSCKv7%2BoktV5l7YVk3QLZ8XpZMaZWO3tIid%2B24refkyT5pEFp9EKcShTdwbLaPwMVNEfschhPVtzsn0FGIMFQGIeKwgxm%2F8wFybEdXtF0Uso%2BI%2FZ8yfNIlKjBx8pvezNSYgDVT9xW%2BrGDdlKC1D0H9rjfPpLhroTYJOurSCeNF%2BGCogBZDtP2hGuC8xVGt8puKlr38e9kQijJAb5or42AvM3z4WWyt%2FzCOBJLXf5Ya8SRbN%2F8R7dq6SaOfFu95K2kWoRdCeA0kTfsQE5EUz8OaOs0SXMBVeXomOJloM4nIy1kr6zpouicNznjJvQAwn0dq56Spi8GhLqG92ZEo2E7ZgFRA0RO7n8FCaCo5w2KIEwBqQf6sBal82FLdkR76ykrJUhFY3U7MeiwrGBpgIB2MufEqQrb1Oa3feYx1edDa8b01ZUvajS63lNcWIATU1DVd4AN%2BfiP02INLIiTsNEqFJ2K82OIEJe%2F9T2EPZYuW6yEw5%2BffvQY6pgG%2FpdpPz56AgOjeI6WCO27HlNkxIUFTWbU%2Firj0A%2BmYOClrCewA3R7cJ9rJBJJT8ZKCYKymll6Wt7oQT56AHnHsPTTjMm%2FRjIXrSA1lB88FlEO%2B71JmOXZTfTrCVh8wRcpqSVxFO%2F9XIBTtD8PFqTimJ6tRhO7yibHPD6ErYoLCzqKd%2BMyCoOO9a%2B0EN0ZmwtaVqY3TyK3i8tq5ZO8z8bQounyeXdR0&X-Amz-Signature=06e6a7cd841fb7a48064087802e49f1864a4127bcff52806e317ffba2907d498&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLUAWIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOKRsNkyHfY7p85oIdvx8nXS9rf6o57%2FxVEiohLHJe%2FAiAkd%2Bw3ncDd2V99RtiF%2BJaFCF%2BtCumFB6Bw%2FGRvYkZPRCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqanf9HDG5q9PpjQKtwDrPw1DMDikVAYv6d6bG7MnMosqVY5xQ6YpZhvONHndbZKqNu85ZZ%2F3Od2lxLturtBEIdhe1E3wgY7UItsob4NoQubSptZOlP5GJi6vDRxNNScCmWhbKyjDzT0oH1yXl0p9sVTDTQ1CdSMu9MSCKv7%2BoktV5l7YVk3QLZ8XpZMaZWO3tIid%2B24refkyT5pEFp9EKcShTdwbLaPwMVNEfschhPVtzsn0FGIMFQGIeKwgxm%2F8wFybEdXtF0Uso%2BI%2FZ8yfNIlKjBx8pvezNSYgDVT9xW%2BrGDdlKC1D0H9rjfPpLhroTYJOurSCeNF%2BGCogBZDtP2hGuC8xVGt8puKlr38e9kQijJAb5or42AvM3z4WWyt%2FzCOBJLXf5Ya8SRbN%2F8R7dq6SaOfFu95K2kWoRdCeA0kTfsQE5EUz8OaOs0SXMBVeXomOJloM4nIy1kr6zpouicNznjJvQAwn0dq56Spi8GhLqG92ZEo2E7ZgFRA0RO7n8FCaCo5w2KIEwBqQf6sBal82FLdkR76ykrJUhFY3U7MeiwrGBpgIB2MufEqQrb1Oa3feYx1edDa8b01ZUvajS63lNcWIATU1DVd4AN%2BfiP02INLIiTsNEqFJ2K82OIEJe%2F9T2EPZYuW6yEw5%2BffvQY6pgG%2FpdpPz56AgOjeI6WCO27HlNkxIUFTWbU%2Firj0A%2BmYOClrCewA3R7cJ9rJBJJT8ZKCYKymll6Wt7oQT56AHnHsPTTjMm%2FRjIXrSA1lB88FlEO%2B71JmOXZTfTrCVh8wRcpqSVxFO%2F9XIBTtD8PFqTimJ6tRhO7yibHPD6ErYoLCzqKd%2BMyCoOO9a%2B0EN0ZmwtaVqY3TyK3i8tq5ZO8z8bQounyeXdR0&X-Amz-Signature=f8df626b8c7fcb3c4126668166e3cfb5ed98834d93d946ea1680bb4c28898423&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLUAWIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOKRsNkyHfY7p85oIdvx8nXS9rf6o57%2FxVEiohLHJe%2FAiAkd%2Bw3ncDd2V99RtiF%2BJaFCF%2BtCumFB6Bw%2FGRvYkZPRCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqanf9HDG5q9PpjQKtwDrPw1DMDikVAYv6d6bG7MnMosqVY5xQ6YpZhvONHndbZKqNu85ZZ%2F3Od2lxLturtBEIdhe1E3wgY7UItsob4NoQubSptZOlP5GJi6vDRxNNScCmWhbKyjDzT0oH1yXl0p9sVTDTQ1CdSMu9MSCKv7%2BoktV5l7YVk3QLZ8XpZMaZWO3tIid%2B24refkyT5pEFp9EKcShTdwbLaPwMVNEfschhPVtzsn0FGIMFQGIeKwgxm%2F8wFybEdXtF0Uso%2BI%2FZ8yfNIlKjBx8pvezNSYgDVT9xW%2BrGDdlKC1D0H9rjfPpLhroTYJOurSCeNF%2BGCogBZDtP2hGuC8xVGt8puKlr38e9kQijJAb5or42AvM3z4WWyt%2FzCOBJLXf5Ya8SRbN%2F8R7dq6SaOfFu95K2kWoRdCeA0kTfsQE5EUz8OaOs0SXMBVeXomOJloM4nIy1kr6zpouicNznjJvQAwn0dq56Spi8GhLqG92ZEo2E7ZgFRA0RO7n8FCaCo5w2KIEwBqQf6sBal82FLdkR76ykrJUhFY3U7MeiwrGBpgIB2MufEqQrb1Oa3feYx1edDa8b01ZUvajS63lNcWIATU1DVd4AN%2BfiP02INLIiTsNEqFJ2K82OIEJe%2F9T2EPZYuW6yEw5%2BffvQY6pgG%2FpdpPz56AgOjeI6WCO27HlNkxIUFTWbU%2Firj0A%2BmYOClrCewA3R7cJ9rJBJJT8ZKCYKymll6Wt7oQT56AHnHsPTTjMm%2FRjIXrSA1lB88FlEO%2B71JmOXZTfTrCVh8wRcpqSVxFO%2F9XIBTtD8PFqTimJ6tRhO7yibHPD6ErYoLCzqKd%2BMyCoOO9a%2B0EN0ZmwtaVqY3TyK3i8tq5ZO8z8bQounyeXdR0&X-Amz-Signature=c242d9f1fca91d018cb4ba1643d90c9ca8b752c92d085f8e4e235b831bf55dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLUAWIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOKRsNkyHfY7p85oIdvx8nXS9rf6o57%2FxVEiohLHJe%2FAiAkd%2Bw3ncDd2V99RtiF%2BJaFCF%2BtCumFB6Bw%2FGRvYkZPRCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqanf9HDG5q9PpjQKtwDrPw1DMDikVAYv6d6bG7MnMosqVY5xQ6YpZhvONHndbZKqNu85ZZ%2F3Od2lxLturtBEIdhe1E3wgY7UItsob4NoQubSptZOlP5GJi6vDRxNNScCmWhbKyjDzT0oH1yXl0p9sVTDTQ1CdSMu9MSCKv7%2BoktV5l7YVk3QLZ8XpZMaZWO3tIid%2B24refkyT5pEFp9EKcShTdwbLaPwMVNEfschhPVtzsn0FGIMFQGIeKwgxm%2F8wFybEdXtF0Uso%2BI%2FZ8yfNIlKjBx8pvezNSYgDVT9xW%2BrGDdlKC1D0H9rjfPpLhroTYJOurSCeNF%2BGCogBZDtP2hGuC8xVGt8puKlr38e9kQijJAb5or42AvM3z4WWyt%2FzCOBJLXf5Ya8SRbN%2F8R7dq6SaOfFu95K2kWoRdCeA0kTfsQE5EUz8OaOs0SXMBVeXomOJloM4nIy1kr6zpouicNznjJvQAwn0dq56Spi8GhLqG92ZEo2E7ZgFRA0RO7n8FCaCo5w2KIEwBqQf6sBal82FLdkR76ykrJUhFY3U7MeiwrGBpgIB2MufEqQrb1Oa3feYx1edDa8b01ZUvajS63lNcWIATU1DVd4AN%2BfiP02INLIiTsNEqFJ2K82OIEJe%2F9T2EPZYuW6yEw5%2BffvQY6pgG%2FpdpPz56AgOjeI6WCO27HlNkxIUFTWbU%2Firj0A%2BmYOClrCewA3R7cJ9rJBJJT8ZKCYKymll6Wt7oQT56AHnHsPTTjMm%2FRjIXrSA1lB88FlEO%2B71JmOXZTfTrCVh8wRcpqSVxFO%2F9XIBTtD8PFqTimJ6tRhO7yibHPD6ErYoLCzqKd%2BMyCoOO9a%2B0EN0ZmwtaVqY3TyK3i8tq5ZO8z8bQounyeXdR0&X-Amz-Signature=48d77b7c037591cfb5975ef0380508b04985f70b3b1c29928a4956600304153a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLUAWIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOKRsNkyHfY7p85oIdvx8nXS9rf6o57%2FxVEiohLHJe%2FAiAkd%2Bw3ncDd2V99RtiF%2BJaFCF%2BtCumFB6Bw%2FGRvYkZPRCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqanf9HDG5q9PpjQKtwDrPw1DMDikVAYv6d6bG7MnMosqVY5xQ6YpZhvONHndbZKqNu85ZZ%2F3Od2lxLturtBEIdhe1E3wgY7UItsob4NoQubSptZOlP5GJi6vDRxNNScCmWhbKyjDzT0oH1yXl0p9sVTDTQ1CdSMu9MSCKv7%2BoktV5l7YVk3QLZ8XpZMaZWO3tIid%2B24refkyT5pEFp9EKcShTdwbLaPwMVNEfschhPVtzsn0FGIMFQGIeKwgxm%2F8wFybEdXtF0Uso%2BI%2FZ8yfNIlKjBx8pvezNSYgDVT9xW%2BrGDdlKC1D0H9rjfPpLhroTYJOurSCeNF%2BGCogBZDtP2hGuC8xVGt8puKlr38e9kQijJAb5or42AvM3z4WWyt%2FzCOBJLXf5Ya8SRbN%2F8R7dq6SaOfFu95K2kWoRdCeA0kTfsQE5EUz8OaOs0SXMBVeXomOJloM4nIy1kr6zpouicNznjJvQAwn0dq56Spi8GhLqG92ZEo2E7ZgFRA0RO7n8FCaCo5w2KIEwBqQf6sBal82FLdkR76ykrJUhFY3U7MeiwrGBpgIB2MufEqQrb1Oa3feYx1edDa8b01ZUvajS63lNcWIATU1DVd4AN%2BfiP02INLIiTsNEqFJ2K82OIEJe%2F9T2EPZYuW6yEw5%2BffvQY6pgG%2FpdpPz56AgOjeI6WCO27HlNkxIUFTWbU%2Firj0A%2BmYOClrCewA3R7cJ9rJBJJT8ZKCYKymll6Wt7oQT56AHnHsPTTjMm%2FRjIXrSA1lB88FlEO%2B71JmOXZTfTrCVh8wRcpqSVxFO%2F9XIBTtD8PFqTimJ6tRhO7yibHPD6ErYoLCzqKd%2BMyCoOO9a%2B0EN0ZmwtaVqY3TyK3i8tq5ZO8z8bQounyeXdR0&X-Amz-Signature=b09d8b43cfdff3db98dd176de958bdf5b96c0be27f9ecb148a06804ca94a5acd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLUAWIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOKRsNkyHfY7p85oIdvx8nXS9rf6o57%2FxVEiohLHJe%2FAiAkd%2Bw3ncDd2V99RtiF%2BJaFCF%2BtCumFB6Bw%2FGRvYkZPRCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqanf9HDG5q9PpjQKtwDrPw1DMDikVAYv6d6bG7MnMosqVY5xQ6YpZhvONHndbZKqNu85ZZ%2F3Od2lxLturtBEIdhe1E3wgY7UItsob4NoQubSptZOlP5GJi6vDRxNNScCmWhbKyjDzT0oH1yXl0p9sVTDTQ1CdSMu9MSCKv7%2BoktV5l7YVk3QLZ8XpZMaZWO3tIid%2B24refkyT5pEFp9EKcShTdwbLaPwMVNEfschhPVtzsn0FGIMFQGIeKwgxm%2F8wFybEdXtF0Uso%2BI%2FZ8yfNIlKjBx8pvezNSYgDVT9xW%2BrGDdlKC1D0H9rjfPpLhroTYJOurSCeNF%2BGCogBZDtP2hGuC8xVGt8puKlr38e9kQijJAb5or42AvM3z4WWyt%2FzCOBJLXf5Ya8SRbN%2F8R7dq6SaOfFu95K2kWoRdCeA0kTfsQE5EUz8OaOs0SXMBVeXomOJloM4nIy1kr6zpouicNznjJvQAwn0dq56Spi8GhLqG92ZEo2E7ZgFRA0RO7n8FCaCo5w2KIEwBqQf6sBal82FLdkR76ykrJUhFY3U7MeiwrGBpgIB2MufEqQrb1Oa3feYx1edDa8b01ZUvajS63lNcWIATU1DVd4AN%2BfiP02INLIiTsNEqFJ2K82OIEJe%2F9T2EPZYuW6yEw5%2BffvQY6pgG%2FpdpPz56AgOjeI6WCO27HlNkxIUFTWbU%2Firj0A%2BmYOClrCewA3R7cJ9rJBJJT8ZKCYKymll6Wt7oQT56AHnHsPTTjMm%2FRjIXrSA1lB88FlEO%2B71JmOXZTfTrCVh8wRcpqSVxFO%2F9XIBTtD8PFqTimJ6tRhO7yibHPD6ErYoLCzqKd%2BMyCoOO9a%2B0EN0ZmwtaVqY3TyK3i8tq5ZO8z8bQounyeXdR0&X-Amz-Signature=f7739ba9df4d906dc57deba50552e98ca97da049c02e1a953502cd8d63dd3df7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLUAWIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOKRsNkyHfY7p85oIdvx8nXS9rf6o57%2FxVEiohLHJe%2FAiAkd%2Bw3ncDd2V99RtiF%2BJaFCF%2BtCumFB6Bw%2FGRvYkZPRCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqanf9HDG5q9PpjQKtwDrPw1DMDikVAYv6d6bG7MnMosqVY5xQ6YpZhvONHndbZKqNu85ZZ%2F3Od2lxLturtBEIdhe1E3wgY7UItsob4NoQubSptZOlP5GJi6vDRxNNScCmWhbKyjDzT0oH1yXl0p9sVTDTQ1CdSMu9MSCKv7%2BoktV5l7YVk3QLZ8XpZMaZWO3tIid%2B24refkyT5pEFp9EKcShTdwbLaPwMVNEfschhPVtzsn0FGIMFQGIeKwgxm%2F8wFybEdXtF0Uso%2BI%2FZ8yfNIlKjBx8pvezNSYgDVT9xW%2BrGDdlKC1D0H9rjfPpLhroTYJOurSCeNF%2BGCogBZDtP2hGuC8xVGt8puKlr38e9kQijJAb5or42AvM3z4WWyt%2FzCOBJLXf5Ya8SRbN%2F8R7dq6SaOfFu95K2kWoRdCeA0kTfsQE5EUz8OaOs0SXMBVeXomOJloM4nIy1kr6zpouicNznjJvQAwn0dq56Spi8GhLqG92ZEo2E7ZgFRA0RO7n8FCaCo5w2KIEwBqQf6sBal82FLdkR76ykrJUhFY3U7MeiwrGBpgIB2MufEqQrb1Oa3feYx1edDa8b01ZUvajS63lNcWIATU1DVd4AN%2BfiP02INLIiTsNEqFJ2K82OIEJe%2F9T2EPZYuW6yEw5%2BffvQY6pgG%2FpdpPz56AgOjeI6WCO27HlNkxIUFTWbU%2Firj0A%2BmYOClrCewA3R7cJ9rJBJJT8ZKCYKymll6Wt7oQT56AHnHsPTTjMm%2FRjIXrSA1lB88FlEO%2B71JmOXZTfTrCVh8wRcpqSVxFO%2F9XIBTtD8PFqTimJ6tRhO7yibHPD6ErYoLCzqKd%2BMyCoOO9a%2B0EN0ZmwtaVqY3TyK3i8tq5ZO8z8bQounyeXdR0&X-Amz-Signature=26f81d85c4861ef1dd5c4badce50f24a24fadc987b8efaead1f7e005a31a89df&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

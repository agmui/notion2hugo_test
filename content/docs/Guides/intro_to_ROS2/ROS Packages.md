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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOOJIKZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg9jUgTnV85Lc2YnDSSDfoK4JxcT76WZI8buFX2TMipAiBgtXGG7FP3PQKzS40YBSzye%2BeQO5hpfYu3WtdqjPCdESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdnV%2BPMLzyokwveWSKtwDP%2F9n1gjjx95R3%2FedOg3tW6sMmhirY4eif%2BQxmWh3SThX3ItSrHDmwsbP3%2FxM2t2S%2FPZUlnVQHnpoU2QYjRUUKXBXspAaePsHJDQdS48u5%2F12kJHcBLWZFjUf3o4VQJ9r09o37RzgvWjk2F%2BkPBnhV36wi9AzV6BF%2FCjDJ07PJdIz%2F0LmRpHL3JcYgOsrQOt8wtYSTaMrSXmpAN8ROPT%2FP%2B%2FXnd8e%2B2v%2FF3No50S%2FYV3a36qPPgiq5PV2%2BY4K7zhs%2FZ3QJKGvuiWtSmjhXYbv2VSZCESzHhQjVAU%2F%2F6crtSphEht4UfFj58YI%2BJyimLtHBnw3LkTZyrq8MU5IMXzrKIJAm9ImQf%2BOfiC42CHaoZB5VisHM%2FvV%2Bia5BbiTH%2FOEOouljHHiRByYjLlDK9I4768chzI0LEyNNJd1w%2BCVt148xCFeHOuktlBCmuDscWbF9DBYIRuZX0BW3AC0rl1fv7TqhycGeCuQJSdDguPKtYN0snZZkHfQe8rCOr%2FGvpw4xu4DerQp7FBTSoEZ3tNsp92iwHKvkTtzEG%2BZu7bTnFH4%2BrOrxEjlRLF7%2BqC7lJLRQ7V5pGYMwvJrL98owxvqP9k9hRCSR%2By3ZVrMP8LxQ4sf%2Bz6abX7Msi%2BXCwYw8revwAY6pgFq8W6mEIs5KoUUVGOurCcTGw7JuubGNeIINTmojYPW2F1%2FeXXok%2FhXPI9KH57qOETReXW4lcnfaSLchfiAbvwbAc35zOYacOxaUqbJkdjuPuwCABWs8ZymQPbZSPx%2BTZfVd9xts1z6YVhT1eWGTyf93f%2FS2hcsY5TC6TwEMJ93kKJS9pWx%2ForwFqOTpLTOop2yNNnCJ3og%2BBwfMIJ3r6J2ESS%2FA4qV&X-Amz-Signature=d7019b71b2f4549ea1a7dc097c9fff82752f57bdcc3229e41d72e8a57e742bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOOJIKZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg9jUgTnV85Lc2YnDSSDfoK4JxcT76WZI8buFX2TMipAiBgtXGG7FP3PQKzS40YBSzye%2BeQO5hpfYu3WtdqjPCdESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdnV%2BPMLzyokwveWSKtwDP%2F9n1gjjx95R3%2FedOg3tW6sMmhirY4eif%2BQxmWh3SThX3ItSrHDmwsbP3%2FxM2t2S%2FPZUlnVQHnpoU2QYjRUUKXBXspAaePsHJDQdS48u5%2F12kJHcBLWZFjUf3o4VQJ9r09o37RzgvWjk2F%2BkPBnhV36wi9AzV6BF%2FCjDJ07PJdIz%2F0LmRpHL3JcYgOsrQOt8wtYSTaMrSXmpAN8ROPT%2FP%2B%2FXnd8e%2B2v%2FF3No50S%2FYV3a36qPPgiq5PV2%2BY4K7zhs%2FZ3QJKGvuiWtSmjhXYbv2VSZCESzHhQjVAU%2F%2F6crtSphEht4UfFj58YI%2BJyimLtHBnw3LkTZyrq8MU5IMXzrKIJAm9ImQf%2BOfiC42CHaoZB5VisHM%2FvV%2Bia5BbiTH%2FOEOouljHHiRByYjLlDK9I4768chzI0LEyNNJd1w%2BCVt148xCFeHOuktlBCmuDscWbF9DBYIRuZX0BW3AC0rl1fv7TqhycGeCuQJSdDguPKtYN0snZZkHfQe8rCOr%2FGvpw4xu4DerQp7FBTSoEZ3tNsp92iwHKvkTtzEG%2BZu7bTnFH4%2BrOrxEjlRLF7%2BqC7lJLRQ7V5pGYMwvJrL98owxvqP9k9hRCSR%2By3ZVrMP8LxQ4sf%2Bz6abX7Msi%2BXCwYw8revwAY6pgFq8W6mEIs5KoUUVGOurCcTGw7JuubGNeIINTmojYPW2F1%2FeXXok%2FhXPI9KH57qOETReXW4lcnfaSLchfiAbvwbAc35zOYacOxaUqbJkdjuPuwCABWs8ZymQPbZSPx%2BTZfVd9xts1z6YVhT1eWGTyf93f%2FS2hcsY5TC6TwEMJ93kKJS9pWx%2ForwFqOTpLTOop2yNNnCJ3og%2BBwfMIJ3r6J2ESS%2FA4qV&X-Amz-Signature=de4436db59f31de51f3c9d4e13380ed72039a71101098105b4f66585a067f1de&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOOJIKZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg9jUgTnV85Lc2YnDSSDfoK4JxcT76WZI8buFX2TMipAiBgtXGG7FP3PQKzS40YBSzye%2BeQO5hpfYu3WtdqjPCdESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdnV%2BPMLzyokwveWSKtwDP%2F9n1gjjx95R3%2FedOg3tW6sMmhirY4eif%2BQxmWh3SThX3ItSrHDmwsbP3%2FxM2t2S%2FPZUlnVQHnpoU2QYjRUUKXBXspAaePsHJDQdS48u5%2F12kJHcBLWZFjUf3o4VQJ9r09o37RzgvWjk2F%2BkPBnhV36wi9AzV6BF%2FCjDJ07PJdIz%2F0LmRpHL3JcYgOsrQOt8wtYSTaMrSXmpAN8ROPT%2FP%2B%2FXnd8e%2B2v%2FF3No50S%2FYV3a36qPPgiq5PV2%2BY4K7zhs%2FZ3QJKGvuiWtSmjhXYbv2VSZCESzHhQjVAU%2F%2F6crtSphEht4UfFj58YI%2BJyimLtHBnw3LkTZyrq8MU5IMXzrKIJAm9ImQf%2BOfiC42CHaoZB5VisHM%2FvV%2Bia5BbiTH%2FOEOouljHHiRByYjLlDK9I4768chzI0LEyNNJd1w%2BCVt148xCFeHOuktlBCmuDscWbF9DBYIRuZX0BW3AC0rl1fv7TqhycGeCuQJSdDguPKtYN0snZZkHfQe8rCOr%2FGvpw4xu4DerQp7FBTSoEZ3tNsp92iwHKvkTtzEG%2BZu7bTnFH4%2BrOrxEjlRLF7%2BqC7lJLRQ7V5pGYMwvJrL98owxvqP9k9hRCSR%2By3ZVrMP8LxQ4sf%2Bz6abX7Msi%2BXCwYw8revwAY6pgFq8W6mEIs5KoUUVGOurCcTGw7JuubGNeIINTmojYPW2F1%2FeXXok%2FhXPI9KH57qOETReXW4lcnfaSLchfiAbvwbAc35zOYacOxaUqbJkdjuPuwCABWs8ZymQPbZSPx%2BTZfVd9xts1z6YVhT1eWGTyf93f%2FS2hcsY5TC6TwEMJ93kKJS9pWx%2ForwFqOTpLTOop2yNNnCJ3og%2BBwfMIJ3r6J2ESS%2FA4qV&X-Amz-Signature=d3b9c508eb4f0242e5f74851dd34dbada110688fb36cfd5eb974fc5bc6b79fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOOJIKZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg9jUgTnV85Lc2YnDSSDfoK4JxcT76WZI8buFX2TMipAiBgtXGG7FP3PQKzS40YBSzye%2BeQO5hpfYu3WtdqjPCdESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdnV%2BPMLzyokwveWSKtwDP%2F9n1gjjx95R3%2FedOg3tW6sMmhirY4eif%2BQxmWh3SThX3ItSrHDmwsbP3%2FxM2t2S%2FPZUlnVQHnpoU2QYjRUUKXBXspAaePsHJDQdS48u5%2F12kJHcBLWZFjUf3o4VQJ9r09o37RzgvWjk2F%2BkPBnhV36wi9AzV6BF%2FCjDJ07PJdIz%2F0LmRpHL3JcYgOsrQOt8wtYSTaMrSXmpAN8ROPT%2FP%2B%2FXnd8e%2B2v%2FF3No50S%2FYV3a36qPPgiq5PV2%2BY4K7zhs%2FZ3QJKGvuiWtSmjhXYbv2VSZCESzHhQjVAU%2F%2F6crtSphEht4UfFj58YI%2BJyimLtHBnw3LkTZyrq8MU5IMXzrKIJAm9ImQf%2BOfiC42CHaoZB5VisHM%2FvV%2Bia5BbiTH%2FOEOouljHHiRByYjLlDK9I4768chzI0LEyNNJd1w%2BCVt148xCFeHOuktlBCmuDscWbF9DBYIRuZX0BW3AC0rl1fv7TqhycGeCuQJSdDguPKtYN0snZZkHfQe8rCOr%2FGvpw4xu4DerQp7FBTSoEZ3tNsp92iwHKvkTtzEG%2BZu7bTnFH4%2BrOrxEjlRLF7%2BqC7lJLRQ7V5pGYMwvJrL98owxvqP9k9hRCSR%2By3ZVrMP8LxQ4sf%2Bz6abX7Msi%2BXCwYw8revwAY6pgFq8W6mEIs5KoUUVGOurCcTGw7JuubGNeIINTmojYPW2F1%2FeXXok%2FhXPI9KH57qOETReXW4lcnfaSLchfiAbvwbAc35zOYacOxaUqbJkdjuPuwCABWs8ZymQPbZSPx%2BTZfVd9xts1z6YVhT1eWGTyf93f%2FS2hcsY5TC6TwEMJ93kKJS9pWx%2ForwFqOTpLTOop2yNNnCJ3og%2BBwfMIJ3r6J2ESS%2FA4qV&X-Amz-Signature=a07cf8beafe303edaaaf7cb1cfb5f4120b3ea98b7a3a9590c5001b0513e44f5e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOOJIKZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg9jUgTnV85Lc2YnDSSDfoK4JxcT76WZI8buFX2TMipAiBgtXGG7FP3PQKzS40YBSzye%2BeQO5hpfYu3WtdqjPCdESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdnV%2BPMLzyokwveWSKtwDP%2F9n1gjjx95R3%2FedOg3tW6sMmhirY4eif%2BQxmWh3SThX3ItSrHDmwsbP3%2FxM2t2S%2FPZUlnVQHnpoU2QYjRUUKXBXspAaePsHJDQdS48u5%2F12kJHcBLWZFjUf3o4VQJ9r09o37RzgvWjk2F%2BkPBnhV36wi9AzV6BF%2FCjDJ07PJdIz%2F0LmRpHL3JcYgOsrQOt8wtYSTaMrSXmpAN8ROPT%2FP%2B%2FXnd8e%2B2v%2FF3No50S%2FYV3a36qPPgiq5PV2%2BY4K7zhs%2FZ3QJKGvuiWtSmjhXYbv2VSZCESzHhQjVAU%2F%2F6crtSphEht4UfFj58YI%2BJyimLtHBnw3LkTZyrq8MU5IMXzrKIJAm9ImQf%2BOfiC42CHaoZB5VisHM%2FvV%2Bia5BbiTH%2FOEOouljHHiRByYjLlDK9I4768chzI0LEyNNJd1w%2BCVt148xCFeHOuktlBCmuDscWbF9DBYIRuZX0BW3AC0rl1fv7TqhycGeCuQJSdDguPKtYN0snZZkHfQe8rCOr%2FGvpw4xu4DerQp7FBTSoEZ3tNsp92iwHKvkTtzEG%2BZu7bTnFH4%2BrOrxEjlRLF7%2BqC7lJLRQ7V5pGYMwvJrL98owxvqP9k9hRCSR%2By3ZVrMP8LxQ4sf%2Bz6abX7Msi%2BXCwYw8revwAY6pgFq8W6mEIs5KoUUVGOurCcTGw7JuubGNeIINTmojYPW2F1%2FeXXok%2FhXPI9KH57qOETReXW4lcnfaSLchfiAbvwbAc35zOYacOxaUqbJkdjuPuwCABWs8ZymQPbZSPx%2BTZfVd9xts1z6YVhT1eWGTyf93f%2FS2hcsY5TC6TwEMJ93kKJS9pWx%2ForwFqOTpLTOop2yNNnCJ3og%2BBwfMIJ3r6J2ESS%2FA4qV&X-Amz-Signature=1c965e6690b90fef803713c51e706e4552077d7298871fb0265d31445781056e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOOJIKZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg9jUgTnV85Lc2YnDSSDfoK4JxcT76WZI8buFX2TMipAiBgtXGG7FP3PQKzS40YBSzye%2BeQO5hpfYu3WtdqjPCdESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdnV%2BPMLzyokwveWSKtwDP%2F9n1gjjx95R3%2FedOg3tW6sMmhirY4eif%2BQxmWh3SThX3ItSrHDmwsbP3%2FxM2t2S%2FPZUlnVQHnpoU2QYjRUUKXBXspAaePsHJDQdS48u5%2F12kJHcBLWZFjUf3o4VQJ9r09o37RzgvWjk2F%2BkPBnhV36wi9AzV6BF%2FCjDJ07PJdIz%2F0LmRpHL3JcYgOsrQOt8wtYSTaMrSXmpAN8ROPT%2FP%2B%2FXnd8e%2B2v%2FF3No50S%2FYV3a36qPPgiq5PV2%2BY4K7zhs%2FZ3QJKGvuiWtSmjhXYbv2VSZCESzHhQjVAU%2F%2F6crtSphEht4UfFj58YI%2BJyimLtHBnw3LkTZyrq8MU5IMXzrKIJAm9ImQf%2BOfiC42CHaoZB5VisHM%2FvV%2Bia5BbiTH%2FOEOouljHHiRByYjLlDK9I4768chzI0LEyNNJd1w%2BCVt148xCFeHOuktlBCmuDscWbF9DBYIRuZX0BW3AC0rl1fv7TqhycGeCuQJSdDguPKtYN0snZZkHfQe8rCOr%2FGvpw4xu4DerQp7FBTSoEZ3tNsp92iwHKvkTtzEG%2BZu7bTnFH4%2BrOrxEjlRLF7%2BqC7lJLRQ7V5pGYMwvJrL98owxvqP9k9hRCSR%2By3ZVrMP8LxQ4sf%2Bz6abX7Msi%2BXCwYw8revwAY6pgFq8W6mEIs5KoUUVGOurCcTGw7JuubGNeIINTmojYPW2F1%2FeXXok%2FhXPI9KH57qOETReXW4lcnfaSLchfiAbvwbAc35zOYacOxaUqbJkdjuPuwCABWs8ZymQPbZSPx%2BTZfVd9xts1z6YVhT1eWGTyf93f%2FS2hcsY5TC6TwEMJ93kKJS9pWx%2ForwFqOTpLTOop2yNNnCJ3og%2BBwfMIJ3r6J2ESS%2FA4qV&X-Amz-Signature=eb98b7e2028afadb4567e565182dfd5105564b900de97f15d5875ba4dbcb6cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOOJIKZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg9jUgTnV85Lc2YnDSSDfoK4JxcT76WZI8buFX2TMipAiBgtXGG7FP3PQKzS40YBSzye%2BeQO5hpfYu3WtdqjPCdESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdnV%2BPMLzyokwveWSKtwDP%2F9n1gjjx95R3%2FedOg3tW6sMmhirY4eif%2BQxmWh3SThX3ItSrHDmwsbP3%2FxM2t2S%2FPZUlnVQHnpoU2QYjRUUKXBXspAaePsHJDQdS48u5%2F12kJHcBLWZFjUf3o4VQJ9r09o37RzgvWjk2F%2BkPBnhV36wi9AzV6BF%2FCjDJ07PJdIz%2F0LmRpHL3JcYgOsrQOt8wtYSTaMrSXmpAN8ROPT%2FP%2B%2FXnd8e%2B2v%2FF3No50S%2FYV3a36qPPgiq5PV2%2BY4K7zhs%2FZ3QJKGvuiWtSmjhXYbv2VSZCESzHhQjVAU%2F%2F6crtSphEht4UfFj58YI%2BJyimLtHBnw3LkTZyrq8MU5IMXzrKIJAm9ImQf%2BOfiC42CHaoZB5VisHM%2FvV%2Bia5BbiTH%2FOEOouljHHiRByYjLlDK9I4768chzI0LEyNNJd1w%2BCVt148xCFeHOuktlBCmuDscWbF9DBYIRuZX0BW3AC0rl1fv7TqhycGeCuQJSdDguPKtYN0snZZkHfQe8rCOr%2FGvpw4xu4DerQp7FBTSoEZ3tNsp92iwHKvkTtzEG%2BZu7bTnFH4%2BrOrxEjlRLF7%2BqC7lJLRQ7V5pGYMwvJrL98owxvqP9k9hRCSR%2By3ZVrMP8LxQ4sf%2Bz6abX7Msi%2BXCwYw8revwAY6pgFq8W6mEIs5KoUUVGOurCcTGw7JuubGNeIINTmojYPW2F1%2FeXXok%2FhXPI9KH57qOETReXW4lcnfaSLchfiAbvwbAc35zOYacOxaUqbJkdjuPuwCABWs8ZymQPbZSPx%2BTZfVd9xts1z6YVhT1eWGTyf93f%2FS2hcsY5TC6TwEMJ93kKJS9pWx%2ForwFqOTpLTOop2yNNnCJ3og%2BBwfMIJ3r6J2ESS%2FA4qV&X-Amz-Signature=1175dcee2b30a4f8c6cdfd662d589050bf1585b85f759859ce3570d1729e70ff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VQ6QDG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkW3B2bagiXa4EeiMtcg%2FZL9vxdnUhJofCECBGIVowEAiEAm1Obu8Lk7c8RD4hI8G%2BRFqhBu8TWKVfsPgszg%2FEiaLMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjOCpYQd0HWPz%2FnrCrcAzKiiL11Bm8jtf37Q%2FrvxJ7%2FX0aj0W%2F6vVg9avgJQQINfConPKB29Rq08GK8LKXe4TdGABxgceIgfzyccI3aT7eJGPIpv%2FYmqWbYdQ2vcx9eiaN6S%2BsawxewVoYR1USZlf3arIWdk4tohuK17EwRq6%2FVc6LfARV2EDji4CfY7bIiN3OLLrFsZuFWOJjbwZ6tZ8QBv5Y0h1Y7B%2Bk4J2Gt0RVUdGGH%2FMa65Dq9WrfBDCZ9KgMKTKJ3Ty%2Bd2QsrhsGNu76JVeEKnbTaTfGmNQiww6%2F90itpU7amGNg7pJ6BQSsPgvqu5A%2BS2jISqJSF3SiPfczpNeqxutAzNqDp2KSGho25RmH4HfHly%2F%2Bv6Sq8Q30kZ%2BkD1iHHzcOJP828hi%2FvHx5PGY2Le7B3U6BEfr6K%2BBCtVIGY7joAiV670Nk%2BJr0ulOUDUQCpUdvA%2FhIKry7ak6%2BeVTUyE29ex%2BO1haCccNLPmnI%2FwhcfgVWvc9n0bfuqhw%2BDDaHjRH6Rzt%2FvhdkvlH7saCLQ14o88vG6MqBPNyGBx0gfXgszCX3Wo6XnibgDkjDlPQ7ClGyxePgOfKkC031SiVkeoJor4CpA1TeUCbvFm3jE6wRU5dhrIiS1EntJRex4fFK5%2Bz6Fz1mrML%2Bcl74GOqUBopocrmDIZKMn5Z7hPe2yZ56Looq6ln%2F3Rlx%2BwPl6BYlLF5Z5S4c9HNxVQfBXFFpwn6C8AwWWkhKeYc5MIe8XLbYpLppujJspDZ8JgRBKUIwp7nmgd34O57CvowiyaGCAmgAOO29raal8GXvC79Jq%2BdlzUuE8Efce7Fn45ArAkEZa%2FfSf%2FBbVOqVHYEz1pGj%2FWDkAYo2Z0ozei7QWieXQzLJoA57v&X-Amz-Signature=e86ef626bcac9962b1c9759d4c0e168bb61c9fe67c1c59cee01f810c699779b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VQ6QDG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkW3B2bagiXa4EeiMtcg%2FZL9vxdnUhJofCECBGIVowEAiEAm1Obu8Lk7c8RD4hI8G%2BRFqhBu8TWKVfsPgszg%2FEiaLMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjOCpYQd0HWPz%2FnrCrcAzKiiL11Bm8jtf37Q%2FrvxJ7%2FX0aj0W%2F6vVg9avgJQQINfConPKB29Rq08GK8LKXe4TdGABxgceIgfzyccI3aT7eJGPIpv%2FYmqWbYdQ2vcx9eiaN6S%2BsawxewVoYR1USZlf3arIWdk4tohuK17EwRq6%2FVc6LfARV2EDji4CfY7bIiN3OLLrFsZuFWOJjbwZ6tZ8QBv5Y0h1Y7B%2Bk4J2Gt0RVUdGGH%2FMa65Dq9WrfBDCZ9KgMKTKJ3Ty%2Bd2QsrhsGNu76JVeEKnbTaTfGmNQiww6%2F90itpU7amGNg7pJ6BQSsPgvqu5A%2BS2jISqJSF3SiPfczpNeqxutAzNqDp2KSGho25RmH4HfHly%2F%2Bv6Sq8Q30kZ%2BkD1iHHzcOJP828hi%2FvHx5PGY2Le7B3U6BEfr6K%2BBCtVIGY7joAiV670Nk%2BJr0ulOUDUQCpUdvA%2FhIKry7ak6%2BeVTUyE29ex%2BO1haCccNLPmnI%2FwhcfgVWvc9n0bfuqhw%2BDDaHjRH6Rzt%2FvhdkvlH7saCLQ14o88vG6MqBPNyGBx0gfXgszCX3Wo6XnibgDkjDlPQ7ClGyxePgOfKkC031SiVkeoJor4CpA1TeUCbvFm3jE6wRU5dhrIiS1EntJRex4fFK5%2Bz6Fz1mrML%2Bcl74GOqUBopocrmDIZKMn5Z7hPe2yZ56Looq6ln%2F3Rlx%2BwPl6BYlLF5Z5S4c9HNxVQfBXFFpwn6C8AwWWkhKeYc5MIe8XLbYpLppujJspDZ8JgRBKUIwp7nmgd34O57CvowiyaGCAmgAOO29raal8GXvC79Jq%2BdlzUuE8Efce7Fn45ArAkEZa%2FfSf%2FBbVOqVHYEz1pGj%2FWDkAYo2Z0ozei7QWieXQzLJoA57v&X-Amz-Signature=d30e757d6794cac642351f682087eff149ba9fb85b531b3976cf68bf18ffffdc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VQ6QDG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkW3B2bagiXa4EeiMtcg%2FZL9vxdnUhJofCECBGIVowEAiEAm1Obu8Lk7c8RD4hI8G%2BRFqhBu8TWKVfsPgszg%2FEiaLMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjOCpYQd0HWPz%2FnrCrcAzKiiL11Bm8jtf37Q%2FrvxJ7%2FX0aj0W%2F6vVg9avgJQQINfConPKB29Rq08GK8LKXe4TdGABxgceIgfzyccI3aT7eJGPIpv%2FYmqWbYdQ2vcx9eiaN6S%2BsawxewVoYR1USZlf3arIWdk4tohuK17EwRq6%2FVc6LfARV2EDji4CfY7bIiN3OLLrFsZuFWOJjbwZ6tZ8QBv5Y0h1Y7B%2Bk4J2Gt0RVUdGGH%2FMa65Dq9WrfBDCZ9KgMKTKJ3Ty%2Bd2QsrhsGNu76JVeEKnbTaTfGmNQiww6%2F90itpU7amGNg7pJ6BQSsPgvqu5A%2BS2jISqJSF3SiPfczpNeqxutAzNqDp2KSGho25RmH4HfHly%2F%2Bv6Sq8Q30kZ%2BkD1iHHzcOJP828hi%2FvHx5PGY2Le7B3U6BEfr6K%2BBCtVIGY7joAiV670Nk%2BJr0ulOUDUQCpUdvA%2FhIKry7ak6%2BeVTUyE29ex%2BO1haCccNLPmnI%2FwhcfgVWvc9n0bfuqhw%2BDDaHjRH6Rzt%2FvhdkvlH7saCLQ14o88vG6MqBPNyGBx0gfXgszCX3Wo6XnibgDkjDlPQ7ClGyxePgOfKkC031SiVkeoJor4CpA1TeUCbvFm3jE6wRU5dhrIiS1EntJRex4fFK5%2Bz6Fz1mrML%2Bcl74GOqUBopocrmDIZKMn5Z7hPe2yZ56Looq6ln%2F3Rlx%2BwPl6BYlLF5Z5S4c9HNxVQfBXFFpwn6C8AwWWkhKeYc5MIe8XLbYpLppujJspDZ8JgRBKUIwp7nmgd34O57CvowiyaGCAmgAOO29raal8GXvC79Jq%2BdlzUuE8Efce7Fn45ArAkEZa%2FfSf%2FBbVOqVHYEz1pGj%2FWDkAYo2Z0ozei7QWieXQzLJoA57v&X-Amz-Signature=1046b2642b60ef657b2e04cdb9e49333b840d90030862732f05cb210ffb6e617&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VQ6QDG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkW3B2bagiXa4EeiMtcg%2FZL9vxdnUhJofCECBGIVowEAiEAm1Obu8Lk7c8RD4hI8G%2BRFqhBu8TWKVfsPgszg%2FEiaLMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjOCpYQd0HWPz%2FnrCrcAzKiiL11Bm8jtf37Q%2FrvxJ7%2FX0aj0W%2F6vVg9avgJQQINfConPKB29Rq08GK8LKXe4TdGABxgceIgfzyccI3aT7eJGPIpv%2FYmqWbYdQ2vcx9eiaN6S%2BsawxewVoYR1USZlf3arIWdk4tohuK17EwRq6%2FVc6LfARV2EDji4CfY7bIiN3OLLrFsZuFWOJjbwZ6tZ8QBv5Y0h1Y7B%2Bk4J2Gt0RVUdGGH%2FMa65Dq9WrfBDCZ9KgMKTKJ3Ty%2Bd2QsrhsGNu76JVeEKnbTaTfGmNQiww6%2F90itpU7amGNg7pJ6BQSsPgvqu5A%2BS2jISqJSF3SiPfczpNeqxutAzNqDp2KSGho25RmH4HfHly%2F%2Bv6Sq8Q30kZ%2BkD1iHHzcOJP828hi%2FvHx5PGY2Le7B3U6BEfr6K%2BBCtVIGY7joAiV670Nk%2BJr0ulOUDUQCpUdvA%2FhIKry7ak6%2BeVTUyE29ex%2BO1haCccNLPmnI%2FwhcfgVWvc9n0bfuqhw%2BDDaHjRH6Rzt%2FvhdkvlH7saCLQ14o88vG6MqBPNyGBx0gfXgszCX3Wo6XnibgDkjDlPQ7ClGyxePgOfKkC031SiVkeoJor4CpA1TeUCbvFm3jE6wRU5dhrIiS1EntJRex4fFK5%2Bz6Fz1mrML%2Bcl74GOqUBopocrmDIZKMn5Z7hPe2yZ56Looq6ln%2F3Rlx%2BwPl6BYlLF5Z5S4c9HNxVQfBXFFpwn6C8AwWWkhKeYc5MIe8XLbYpLppujJspDZ8JgRBKUIwp7nmgd34O57CvowiyaGCAmgAOO29raal8GXvC79Jq%2BdlzUuE8Efce7Fn45ArAkEZa%2FfSf%2FBbVOqVHYEz1pGj%2FWDkAYo2Z0ozei7QWieXQzLJoA57v&X-Amz-Signature=0fcb84180a445e8d253519442f3cc5e5c1b4481528397638a5295b134fd09a59&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VQ6QDG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkW3B2bagiXa4EeiMtcg%2FZL9vxdnUhJofCECBGIVowEAiEAm1Obu8Lk7c8RD4hI8G%2BRFqhBu8TWKVfsPgszg%2FEiaLMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjOCpYQd0HWPz%2FnrCrcAzKiiL11Bm8jtf37Q%2FrvxJ7%2FX0aj0W%2F6vVg9avgJQQINfConPKB29Rq08GK8LKXe4TdGABxgceIgfzyccI3aT7eJGPIpv%2FYmqWbYdQ2vcx9eiaN6S%2BsawxewVoYR1USZlf3arIWdk4tohuK17EwRq6%2FVc6LfARV2EDji4CfY7bIiN3OLLrFsZuFWOJjbwZ6tZ8QBv5Y0h1Y7B%2Bk4J2Gt0RVUdGGH%2FMa65Dq9WrfBDCZ9KgMKTKJ3Ty%2Bd2QsrhsGNu76JVeEKnbTaTfGmNQiww6%2F90itpU7amGNg7pJ6BQSsPgvqu5A%2BS2jISqJSF3SiPfczpNeqxutAzNqDp2KSGho25RmH4HfHly%2F%2Bv6Sq8Q30kZ%2BkD1iHHzcOJP828hi%2FvHx5PGY2Le7B3U6BEfr6K%2BBCtVIGY7joAiV670Nk%2BJr0ulOUDUQCpUdvA%2FhIKry7ak6%2BeVTUyE29ex%2BO1haCccNLPmnI%2FwhcfgVWvc9n0bfuqhw%2BDDaHjRH6Rzt%2FvhdkvlH7saCLQ14o88vG6MqBPNyGBx0gfXgszCX3Wo6XnibgDkjDlPQ7ClGyxePgOfKkC031SiVkeoJor4CpA1TeUCbvFm3jE6wRU5dhrIiS1EntJRex4fFK5%2Bz6Fz1mrML%2Bcl74GOqUBopocrmDIZKMn5Z7hPe2yZ56Looq6ln%2F3Rlx%2BwPl6BYlLF5Z5S4c9HNxVQfBXFFpwn6C8AwWWkhKeYc5MIe8XLbYpLppujJspDZ8JgRBKUIwp7nmgd34O57CvowiyaGCAmgAOO29raal8GXvC79Jq%2BdlzUuE8Efce7Fn45ArAkEZa%2FfSf%2FBbVOqVHYEz1pGj%2FWDkAYo2Z0ozei7QWieXQzLJoA57v&X-Amz-Signature=e9db3026b1949459cadf7b04c78a619ccb475b02c5303bfef94a8a122d25ad86&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VQ6QDG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkW3B2bagiXa4EeiMtcg%2FZL9vxdnUhJofCECBGIVowEAiEAm1Obu8Lk7c8RD4hI8G%2BRFqhBu8TWKVfsPgszg%2FEiaLMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjOCpYQd0HWPz%2FnrCrcAzKiiL11Bm8jtf37Q%2FrvxJ7%2FX0aj0W%2F6vVg9avgJQQINfConPKB29Rq08GK8LKXe4TdGABxgceIgfzyccI3aT7eJGPIpv%2FYmqWbYdQ2vcx9eiaN6S%2BsawxewVoYR1USZlf3arIWdk4tohuK17EwRq6%2FVc6LfARV2EDji4CfY7bIiN3OLLrFsZuFWOJjbwZ6tZ8QBv5Y0h1Y7B%2Bk4J2Gt0RVUdGGH%2FMa65Dq9WrfBDCZ9KgMKTKJ3Ty%2Bd2QsrhsGNu76JVeEKnbTaTfGmNQiww6%2F90itpU7amGNg7pJ6BQSsPgvqu5A%2BS2jISqJSF3SiPfczpNeqxutAzNqDp2KSGho25RmH4HfHly%2F%2Bv6Sq8Q30kZ%2BkD1iHHzcOJP828hi%2FvHx5PGY2Le7B3U6BEfr6K%2BBCtVIGY7joAiV670Nk%2BJr0ulOUDUQCpUdvA%2FhIKry7ak6%2BeVTUyE29ex%2BO1haCccNLPmnI%2FwhcfgVWvc9n0bfuqhw%2BDDaHjRH6Rzt%2FvhdkvlH7saCLQ14o88vG6MqBPNyGBx0gfXgszCX3Wo6XnibgDkjDlPQ7ClGyxePgOfKkC031SiVkeoJor4CpA1TeUCbvFm3jE6wRU5dhrIiS1EntJRex4fFK5%2Bz6Fz1mrML%2Bcl74GOqUBopocrmDIZKMn5Z7hPe2yZ56Looq6ln%2F3Rlx%2BwPl6BYlLF5Z5S4c9HNxVQfBXFFpwn6C8AwWWkhKeYc5MIe8XLbYpLppujJspDZ8JgRBKUIwp7nmgd34O57CvowiyaGCAmgAOO29raal8GXvC79Jq%2BdlzUuE8Efce7Fn45ArAkEZa%2FfSf%2FBbVOqVHYEz1pGj%2FWDkAYo2Z0ozei7QWieXQzLJoA57v&X-Amz-Signature=3ee1f6ab7bf5fc1850484f443e6584f3d68dae90f715f6b231af70222193eaa5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VQ6QDG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkW3B2bagiXa4EeiMtcg%2FZL9vxdnUhJofCECBGIVowEAiEAm1Obu8Lk7c8RD4hI8G%2BRFqhBu8TWKVfsPgszg%2FEiaLMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjOCpYQd0HWPz%2FnrCrcAzKiiL11Bm8jtf37Q%2FrvxJ7%2FX0aj0W%2F6vVg9avgJQQINfConPKB29Rq08GK8LKXe4TdGABxgceIgfzyccI3aT7eJGPIpv%2FYmqWbYdQ2vcx9eiaN6S%2BsawxewVoYR1USZlf3arIWdk4tohuK17EwRq6%2FVc6LfARV2EDji4CfY7bIiN3OLLrFsZuFWOJjbwZ6tZ8QBv5Y0h1Y7B%2Bk4J2Gt0RVUdGGH%2FMa65Dq9WrfBDCZ9KgMKTKJ3Ty%2Bd2QsrhsGNu76JVeEKnbTaTfGmNQiww6%2F90itpU7amGNg7pJ6BQSsPgvqu5A%2BS2jISqJSF3SiPfczpNeqxutAzNqDp2KSGho25RmH4HfHly%2F%2Bv6Sq8Q30kZ%2BkD1iHHzcOJP828hi%2FvHx5PGY2Le7B3U6BEfr6K%2BBCtVIGY7joAiV670Nk%2BJr0ulOUDUQCpUdvA%2FhIKry7ak6%2BeVTUyE29ex%2BO1haCccNLPmnI%2FwhcfgVWvc9n0bfuqhw%2BDDaHjRH6Rzt%2FvhdkvlH7saCLQ14o88vG6MqBPNyGBx0gfXgszCX3Wo6XnibgDkjDlPQ7ClGyxePgOfKkC031SiVkeoJor4CpA1TeUCbvFm3jE6wRU5dhrIiS1EntJRex4fFK5%2Bz6Fz1mrML%2Bcl74GOqUBopocrmDIZKMn5Z7hPe2yZ56Looq6ln%2F3Rlx%2BwPl6BYlLF5Z5S4c9HNxVQfBXFFpwn6C8AwWWkhKeYc5MIe8XLbYpLppujJspDZ8JgRBKUIwp7nmgd34O57CvowiyaGCAmgAOO29raal8GXvC79Jq%2BdlzUuE8Efce7Fn45ArAkEZa%2FfSf%2FBbVOqVHYEz1pGj%2FWDkAYo2Z0ozei7QWieXQzLJoA57v&X-Amz-Signature=ec0c049cac49598fd07f9675198606470362644a111eddfeab2def38d643c6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

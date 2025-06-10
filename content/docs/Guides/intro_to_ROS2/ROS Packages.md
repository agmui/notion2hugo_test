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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRFLRM7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqGPaBz8%2BnesgJJdy%2FcKkwguwR99Gp7vCKxiH87pnX5gIgc8ORvBBDMfjS3tQaT46mp%2F4b2xLfsYwW0nlyN%2Bq0QHoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1qTSPTk9wp1V5%2FtSrcA510keCCyDOcyWwiVETONuWBDrqDkJHRQpxKGA56U1AaBrY94bXaOmKcsZOipF6qkXLjr6uVseBEXKuPAgmQj5cl%2F80XUJCiznw4lD6fglxYtfX%2BB02btoJ4vLdkABuJXKHiUUX1D9HzRJCCqs4IDaOl6DwIgz9J4e3znLxvbGDs0RdhHlIj%2FWqlt5JIDZbqziFZqrhXofyYOHfKuA1H9OT1uMePb4NpYmigMC%2Biu7mQKqyCilYaHMDElnBJgzkmujOBUwP%2Bqe7yXXBrqNinpAw4ODjsNfPMYDHfUHrkj%2FpS3dyxthD3l6%2FzXPCFjMkXKW6x7QdIVuP%2B7V7OikXv3n8DjsvhW%2FL%2B4Z4rivJjX%2FKuJaXWXlTVDseahGGrjoIE%2BQ4BGKMtmaHyEgzIe8yn9Wy%2F4oRwqVyttd3iYYfPWQmcjZg1pLbQWcoO5o4Lb6y8YhjIlbnfDBEjjvsGa%2FQ0TXeJIkIZpqxo09ow7bidOcxlybbvT1JzDFZZssMsDw9b4lGirp9edQVJxwxmjHcV53jGYq0shD0fnexNBlWea%2BltGoXmJZZKtdPcX9MujoDMVUx2TUSvrbB5s9jKWRaJIpK5vOJu395TYyfYp8AGBovM64eNveIMlDokJBqEMPjen8IGOqUBcewJFyg3dZlCBVipRu2uwjLSrP82lHgiWcEZU8fAtDKoRYyyc%2BPOlHcnfMUEvfbq%2B8217sdcLPKV6wi5Sh7sgnXPy%2BP1AapCs9Vf1emYlm2T773%2FygxhKWi4xzXoceh8XcifQCsMNV6ItGMdZLHqIZFHzBW2I%2FFFTINXxDo%2FklqZG5L%2F3cqlgnoaJyV7cBrEVju2cgTCKl4yc4UKR9rM1WJJFqyu&X-Amz-Signature=35334b0fd2b57b1803ef1ae37c32424bed9d310344d0f7b8f9f24afe19119868&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRFLRM7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqGPaBz8%2BnesgJJdy%2FcKkwguwR99Gp7vCKxiH87pnX5gIgc8ORvBBDMfjS3tQaT46mp%2F4b2xLfsYwW0nlyN%2Bq0QHoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1qTSPTk9wp1V5%2FtSrcA510keCCyDOcyWwiVETONuWBDrqDkJHRQpxKGA56U1AaBrY94bXaOmKcsZOipF6qkXLjr6uVseBEXKuPAgmQj5cl%2F80XUJCiznw4lD6fglxYtfX%2BB02btoJ4vLdkABuJXKHiUUX1D9HzRJCCqs4IDaOl6DwIgz9J4e3znLxvbGDs0RdhHlIj%2FWqlt5JIDZbqziFZqrhXofyYOHfKuA1H9OT1uMePb4NpYmigMC%2Biu7mQKqyCilYaHMDElnBJgzkmujOBUwP%2Bqe7yXXBrqNinpAw4ODjsNfPMYDHfUHrkj%2FpS3dyxthD3l6%2FzXPCFjMkXKW6x7QdIVuP%2B7V7OikXv3n8DjsvhW%2FL%2B4Z4rivJjX%2FKuJaXWXlTVDseahGGrjoIE%2BQ4BGKMtmaHyEgzIe8yn9Wy%2F4oRwqVyttd3iYYfPWQmcjZg1pLbQWcoO5o4Lb6y8YhjIlbnfDBEjjvsGa%2FQ0TXeJIkIZpqxo09ow7bidOcxlybbvT1JzDFZZssMsDw9b4lGirp9edQVJxwxmjHcV53jGYq0shD0fnexNBlWea%2BltGoXmJZZKtdPcX9MujoDMVUx2TUSvrbB5s9jKWRaJIpK5vOJu395TYyfYp8AGBovM64eNveIMlDokJBqEMPjen8IGOqUBcewJFyg3dZlCBVipRu2uwjLSrP82lHgiWcEZU8fAtDKoRYyyc%2BPOlHcnfMUEvfbq%2B8217sdcLPKV6wi5Sh7sgnXPy%2BP1AapCs9Vf1emYlm2T773%2FygxhKWi4xzXoceh8XcifQCsMNV6ItGMdZLHqIZFHzBW2I%2FFFTINXxDo%2FklqZG5L%2F3cqlgnoaJyV7cBrEVju2cgTCKl4yc4UKR9rM1WJJFqyu&X-Amz-Signature=23b2464e8192d4d02c736d68b4c7236d95e6634432d1d9d332b1665b3d11b74f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRFLRM7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqGPaBz8%2BnesgJJdy%2FcKkwguwR99Gp7vCKxiH87pnX5gIgc8ORvBBDMfjS3tQaT46mp%2F4b2xLfsYwW0nlyN%2Bq0QHoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1qTSPTk9wp1V5%2FtSrcA510keCCyDOcyWwiVETONuWBDrqDkJHRQpxKGA56U1AaBrY94bXaOmKcsZOipF6qkXLjr6uVseBEXKuPAgmQj5cl%2F80XUJCiznw4lD6fglxYtfX%2BB02btoJ4vLdkABuJXKHiUUX1D9HzRJCCqs4IDaOl6DwIgz9J4e3znLxvbGDs0RdhHlIj%2FWqlt5JIDZbqziFZqrhXofyYOHfKuA1H9OT1uMePb4NpYmigMC%2Biu7mQKqyCilYaHMDElnBJgzkmujOBUwP%2Bqe7yXXBrqNinpAw4ODjsNfPMYDHfUHrkj%2FpS3dyxthD3l6%2FzXPCFjMkXKW6x7QdIVuP%2B7V7OikXv3n8DjsvhW%2FL%2B4Z4rivJjX%2FKuJaXWXlTVDseahGGrjoIE%2BQ4BGKMtmaHyEgzIe8yn9Wy%2F4oRwqVyttd3iYYfPWQmcjZg1pLbQWcoO5o4Lb6y8YhjIlbnfDBEjjvsGa%2FQ0TXeJIkIZpqxo09ow7bidOcxlybbvT1JzDFZZssMsDw9b4lGirp9edQVJxwxmjHcV53jGYq0shD0fnexNBlWea%2BltGoXmJZZKtdPcX9MujoDMVUx2TUSvrbB5s9jKWRaJIpK5vOJu395TYyfYp8AGBovM64eNveIMlDokJBqEMPjen8IGOqUBcewJFyg3dZlCBVipRu2uwjLSrP82lHgiWcEZU8fAtDKoRYyyc%2BPOlHcnfMUEvfbq%2B8217sdcLPKV6wi5Sh7sgnXPy%2BP1AapCs9Vf1emYlm2T773%2FygxhKWi4xzXoceh8XcifQCsMNV6ItGMdZLHqIZFHzBW2I%2FFFTINXxDo%2FklqZG5L%2F3cqlgnoaJyV7cBrEVju2cgTCKl4yc4UKR9rM1WJJFqyu&X-Amz-Signature=d9d52ed0a534cfabf132c7a9a2a6831c04198408b26d740063cbb8c2ce3b70f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRFLRM7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqGPaBz8%2BnesgJJdy%2FcKkwguwR99Gp7vCKxiH87pnX5gIgc8ORvBBDMfjS3tQaT46mp%2F4b2xLfsYwW0nlyN%2Bq0QHoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1qTSPTk9wp1V5%2FtSrcA510keCCyDOcyWwiVETONuWBDrqDkJHRQpxKGA56U1AaBrY94bXaOmKcsZOipF6qkXLjr6uVseBEXKuPAgmQj5cl%2F80XUJCiznw4lD6fglxYtfX%2BB02btoJ4vLdkABuJXKHiUUX1D9HzRJCCqs4IDaOl6DwIgz9J4e3znLxvbGDs0RdhHlIj%2FWqlt5JIDZbqziFZqrhXofyYOHfKuA1H9OT1uMePb4NpYmigMC%2Biu7mQKqyCilYaHMDElnBJgzkmujOBUwP%2Bqe7yXXBrqNinpAw4ODjsNfPMYDHfUHrkj%2FpS3dyxthD3l6%2FzXPCFjMkXKW6x7QdIVuP%2B7V7OikXv3n8DjsvhW%2FL%2B4Z4rivJjX%2FKuJaXWXlTVDseahGGrjoIE%2BQ4BGKMtmaHyEgzIe8yn9Wy%2F4oRwqVyttd3iYYfPWQmcjZg1pLbQWcoO5o4Lb6y8YhjIlbnfDBEjjvsGa%2FQ0TXeJIkIZpqxo09ow7bidOcxlybbvT1JzDFZZssMsDw9b4lGirp9edQVJxwxmjHcV53jGYq0shD0fnexNBlWea%2BltGoXmJZZKtdPcX9MujoDMVUx2TUSvrbB5s9jKWRaJIpK5vOJu395TYyfYp8AGBovM64eNveIMlDokJBqEMPjen8IGOqUBcewJFyg3dZlCBVipRu2uwjLSrP82lHgiWcEZU8fAtDKoRYyyc%2BPOlHcnfMUEvfbq%2B8217sdcLPKV6wi5Sh7sgnXPy%2BP1AapCs9Vf1emYlm2T773%2FygxhKWi4xzXoceh8XcifQCsMNV6ItGMdZLHqIZFHzBW2I%2FFFTINXxDo%2FklqZG5L%2F3cqlgnoaJyV7cBrEVju2cgTCKl4yc4UKR9rM1WJJFqyu&X-Amz-Signature=5f94781bc43e5aa17b22b8d6f3776547845302ae7603172fd96dfa0d8a1a55c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRFLRM7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqGPaBz8%2BnesgJJdy%2FcKkwguwR99Gp7vCKxiH87pnX5gIgc8ORvBBDMfjS3tQaT46mp%2F4b2xLfsYwW0nlyN%2Bq0QHoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1qTSPTk9wp1V5%2FtSrcA510keCCyDOcyWwiVETONuWBDrqDkJHRQpxKGA56U1AaBrY94bXaOmKcsZOipF6qkXLjr6uVseBEXKuPAgmQj5cl%2F80XUJCiznw4lD6fglxYtfX%2BB02btoJ4vLdkABuJXKHiUUX1D9HzRJCCqs4IDaOl6DwIgz9J4e3znLxvbGDs0RdhHlIj%2FWqlt5JIDZbqziFZqrhXofyYOHfKuA1H9OT1uMePb4NpYmigMC%2Biu7mQKqyCilYaHMDElnBJgzkmujOBUwP%2Bqe7yXXBrqNinpAw4ODjsNfPMYDHfUHrkj%2FpS3dyxthD3l6%2FzXPCFjMkXKW6x7QdIVuP%2B7V7OikXv3n8DjsvhW%2FL%2B4Z4rivJjX%2FKuJaXWXlTVDseahGGrjoIE%2BQ4BGKMtmaHyEgzIe8yn9Wy%2F4oRwqVyttd3iYYfPWQmcjZg1pLbQWcoO5o4Lb6y8YhjIlbnfDBEjjvsGa%2FQ0TXeJIkIZpqxo09ow7bidOcxlybbvT1JzDFZZssMsDw9b4lGirp9edQVJxwxmjHcV53jGYq0shD0fnexNBlWea%2BltGoXmJZZKtdPcX9MujoDMVUx2TUSvrbB5s9jKWRaJIpK5vOJu395TYyfYp8AGBovM64eNveIMlDokJBqEMPjen8IGOqUBcewJFyg3dZlCBVipRu2uwjLSrP82lHgiWcEZU8fAtDKoRYyyc%2BPOlHcnfMUEvfbq%2B8217sdcLPKV6wi5Sh7sgnXPy%2BP1AapCs9Vf1emYlm2T773%2FygxhKWi4xzXoceh8XcifQCsMNV6ItGMdZLHqIZFHzBW2I%2FFFTINXxDo%2FklqZG5L%2F3cqlgnoaJyV7cBrEVju2cgTCKl4yc4UKR9rM1WJJFqyu&X-Amz-Signature=f8e52b7282b8d09bb99881a4f545f315d00c2d83f467da4b302227df00fdaa94&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRFLRM7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqGPaBz8%2BnesgJJdy%2FcKkwguwR99Gp7vCKxiH87pnX5gIgc8ORvBBDMfjS3tQaT46mp%2F4b2xLfsYwW0nlyN%2Bq0QHoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1qTSPTk9wp1V5%2FtSrcA510keCCyDOcyWwiVETONuWBDrqDkJHRQpxKGA56U1AaBrY94bXaOmKcsZOipF6qkXLjr6uVseBEXKuPAgmQj5cl%2F80XUJCiznw4lD6fglxYtfX%2BB02btoJ4vLdkABuJXKHiUUX1D9HzRJCCqs4IDaOl6DwIgz9J4e3znLxvbGDs0RdhHlIj%2FWqlt5JIDZbqziFZqrhXofyYOHfKuA1H9OT1uMePb4NpYmigMC%2Biu7mQKqyCilYaHMDElnBJgzkmujOBUwP%2Bqe7yXXBrqNinpAw4ODjsNfPMYDHfUHrkj%2FpS3dyxthD3l6%2FzXPCFjMkXKW6x7QdIVuP%2B7V7OikXv3n8DjsvhW%2FL%2B4Z4rivJjX%2FKuJaXWXlTVDseahGGrjoIE%2BQ4BGKMtmaHyEgzIe8yn9Wy%2F4oRwqVyttd3iYYfPWQmcjZg1pLbQWcoO5o4Lb6y8YhjIlbnfDBEjjvsGa%2FQ0TXeJIkIZpqxo09ow7bidOcxlybbvT1JzDFZZssMsDw9b4lGirp9edQVJxwxmjHcV53jGYq0shD0fnexNBlWea%2BltGoXmJZZKtdPcX9MujoDMVUx2TUSvrbB5s9jKWRaJIpK5vOJu395TYyfYp8AGBovM64eNveIMlDokJBqEMPjen8IGOqUBcewJFyg3dZlCBVipRu2uwjLSrP82lHgiWcEZU8fAtDKoRYyyc%2BPOlHcnfMUEvfbq%2B8217sdcLPKV6wi5Sh7sgnXPy%2BP1AapCs9Vf1emYlm2T773%2FygxhKWi4xzXoceh8XcifQCsMNV6ItGMdZLHqIZFHzBW2I%2FFFTINXxDo%2FklqZG5L%2F3cqlgnoaJyV7cBrEVju2cgTCKl4yc4UKR9rM1WJJFqyu&X-Amz-Signature=19e22633aaa9167889648b7fff50780de1e0927681ce00c904298ec97649e2df&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRFLRM7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqGPaBz8%2BnesgJJdy%2FcKkwguwR99Gp7vCKxiH87pnX5gIgc8ORvBBDMfjS3tQaT46mp%2F4b2xLfsYwW0nlyN%2Bq0QHoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1qTSPTk9wp1V5%2FtSrcA510keCCyDOcyWwiVETONuWBDrqDkJHRQpxKGA56U1AaBrY94bXaOmKcsZOipF6qkXLjr6uVseBEXKuPAgmQj5cl%2F80XUJCiznw4lD6fglxYtfX%2BB02btoJ4vLdkABuJXKHiUUX1D9HzRJCCqs4IDaOl6DwIgz9J4e3znLxvbGDs0RdhHlIj%2FWqlt5JIDZbqziFZqrhXofyYOHfKuA1H9OT1uMePb4NpYmigMC%2Biu7mQKqyCilYaHMDElnBJgzkmujOBUwP%2Bqe7yXXBrqNinpAw4ODjsNfPMYDHfUHrkj%2FpS3dyxthD3l6%2FzXPCFjMkXKW6x7QdIVuP%2B7V7OikXv3n8DjsvhW%2FL%2B4Z4rivJjX%2FKuJaXWXlTVDseahGGrjoIE%2BQ4BGKMtmaHyEgzIe8yn9Wy%2F4oRwqVyttd3iYYfPWQmcjZg1pLbQWcoO5o4Lb6y8YhjIlbnfDBEjjvsGa%2FQ0TXeJIkIZpqxo09ow7bidOcxlybbvT1JzDFZZssMsDw9b4lGirp9edQVJxwxmjHcV53jGYq0shD0fnexNBlWea%2BltGoXmJZZKtdPcX9MujoDMVUx2TUSvrbB5s9jKWRaJIpK5vOJu395TYyfYp8AGBovM64eNveIMlDokJBqEMPjen8IGOqUBcewJFyg3dZlCBVipRu2uwjLSrP82lHgiWcEZU8fAtDKoRYyyc%2BPOlHcnfMUEvfbq%2B8217sdcLPKV6wi5Sh7sgnXPy%2BP1AapCs9Vf1emYlm2T773%2FygxhKWi4xzXoceh8XcifQCsMNV6ItGMdZLHqIZFHzBW2I%2FFFTINXxDo%2FklqZG5L%2F3cqlgnoaJyV7cBrEVju2cgTCKl4yc4UKR9rM1WJJFqyu&X-Amz-Signature=4d32e060ccc6641f270c9f9b300cbd4dd56e6f973b76332ea0396c7f57ecc850&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

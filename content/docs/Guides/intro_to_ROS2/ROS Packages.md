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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZDFPPE7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIbgnEZUFNp0awf1PIgMUZGNBDAKLU%2FEDMZHRSHYZglAIgVtx1rISin6kPkD2HI1ylAUIMR%2BILiCPYiqWrRVhOeJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIkiXkDGho9AEqJxUCrcA1na9ymDdz1yp0AJ57KT%2BBUGezRoD7KOmrqhTQGA63p9ml5EU3zPUe%2FhqP3M8OY02nI6JgWayC6NOJtqLI1rUuNoR1dwLITza%2FIQkzabRneQ%2F1ch1Nc%2FG2icM%2FK%2B5HGVDA0%2BifGwoUN6rtZHwxnBROMJOFcWVsCrcnZO7BsHob%2B8w2nyZd9AVGTqxdfVoD9S1fPx%2Fllu89jjcigBIH8vYr7fAfJCmTMBVNlE1AnG3YSdZ4dS1VW4neW6nb7yKA1kwq8V0g83ON4C2Mo0AiHlbXnpIdztel25goMpjR%2BTngl4MT6Iyr1viVBakHiKc0jrcr5S%2FGjgyvm6qZdUSXDsx%2F2gHGgWl1U25o%2FMJ44mZbnfkJOFcbbFVxsJwDQiC5%2FX5J1uzPsMMHxVjFEncNUkCBJif8L4%2BI4TT4cHetbtiFaLH1g0GQxdGUfHboodxVpMB2iD980FYUsq17aiJtJNn2eA5B3Go0Vp1TsnWXVIxsUfHe5Jh0Te2JHxJ%2BJ6AW0X9fExF5uWnJe4ed60d%2FRuFQSkhU%2BxugfDHzXKQ2YXM0Udw7aXS3igkAlrtdfajZDb3cjsQTxBpt%2BmFVZax6cnzxBJLCuXe%2FBip8WP4Iy%2BaXqgzwkNc4OMAgChlDXUMJLdt70GOqUBwq%2BFjzf0ySkmbfi9tI2Cifso4AeGHFtoxQogMutwbwEKaqhVXTWzAxHs%2FCdROLJpvA0Z5rA6iTbv%2BlvmWG6yLAERhQfHtW7%2FKLWXDshHMUdeBCOFSmEI4jJgX364DJr65ubuhdXiR%2FLC6r3%2FYqTjk82VEO4KUN51PFytyyGu1Ug9EYaOLyuZ1B7ntiAhY1DhN9nF6uFMwYC0PC3ydhTxBFzx%2FksF&X-Amz-Signature=c50584f5ec733f984c8989fcb85df679d77ee7c64cd37c61567d2b8cb549f3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZDFPPE7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIbgnEZUFNp0awf1PIgMUZGNBDAKLU%2FEDMZHRSHYZglAIgVtx1rISin6kPkD2HI1ylAUIMR%2BILiCPYiqWrRVhOeJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIkiXkDGho9AEqJxUCrcA1na9ymDdz1yp0AJ57KT%2BBUGezRoD7KOmrqhTQGA63p9ml5EU3zPUe%2FhqP3M8OY02nI6JgWayC6NOJtqLI1rUuNoR1dwLITza%2FIQkzabRneQ%2F1ch1Nc%2FG2icM%2FK%2B5HGVDA0%2BifGwoUN6rtZHwxnBROMJOFcWVsCrcnZO7BsHob%2B8w2nyZd9AVGTqxdfVoD9S1fPx%2Fllu89jjcigBIH8vYr7fAfJCmTMBVNlE1AnG3YSdZ4dS1VW4neW6nb7yKA1kwq8V0g83ON4C2Mo0AiHlbXnpIdztel25goMpjR%2BTngl4MT6Iyr1viVBakHiKc0jrcr5S%2FGjgyvm6qZdUSXDsx%2F2gHGgWl1U25o%2FMJ44mZbnfkJOFcbbFVxsJwDQiC5%2FX5J1uzPsMMHxVjFEncNUkCBJif8L4%2BI4TT4cHetbtiFaLH1g0GQxdGUfHboodxVpMB2iD980FYUsq17aiJtJNn2eA5B3Go0Vp1TsnWXVIxsUfHe5Jh0Te2JHxJ%2BJ6AW0X9fExF5uWnJe4ed60d%2FRuFQSkhU%2BxugfDHzXKQ2YXM0Udw7aXS3igkAlrtdfajZDb3cjsQTxBpt%2BmFVZax6cnzxBJLCuXe%2FBip8WP4Iy%2BaXqgzwkNc4OMAgChlDXUMJLdt70GOqUBwq%2BFjzf0ySkmbfi9tI2Cifso4AeGHFtoxQogMutwbwEKaqhVXTWzAxHs%2FCdROLJpvA0Z5rA6iTbv%2BlvmWG6yLAERhQfHtW7%2FKLWXDshHMUdeBCOFSmEI4jJgX364DJr65ubuhdXiR%2FLC6r3%2FYqTjk82VEO4KUN51PFytyyGu1Ug9EYaOLyuZ1B7ntiAhY1DhN9nF6uFMwYC0PC3ydhTxBFzx%2FksF&X-Amz-Signature=188b200d5795f2d68ccfa36b162ce73d44b1e281b1fb32ffc45de194c4c76d2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZDFPPE7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIbgnEZUFNp0awf1PIgMUZGNBDAKLU%2FEDMZHRSHYZglAIgVtx1rISin6kPkD2HI1ylAUIMR%2BILiCPYiqWrRVhOeJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIkiXkDGho9AEqJxUCrcA1na9ymDdz1yp0AJ57KT%2BBUGezRoD7KOmrqhTQGA63p9ml5EU3zPUe%2FhqP3M8OY02nI6JgWayC6NOJtqLI1rUuNoR1dwLITza%2FIQkzabRneQ%2F1ch1Nc%2FG2icM%2FK%2B5HGVDA0%2BifGwoUN6rtZHwxnBROMJOFcWVsCrcnZO7BsHob%2B8w2nyZd9AVGTqxdfVoD9S1fPx%2Fllu89jjcigBIH8vYr7fAfJCmTMBVNlE1AnG3YSdZ4dS1VW4neW6nb7yKA1kwq8V0g83ON4C2Mo0AiHlbXnpIdztel25goMpjR%2BTngl4MT6Iyr1viVBakHiKc0jrcr5S%2FGjgyvm6qZdUSXDsx%2F2gHGgWl1U25o%2FMJ44mZbnfkJOFcbbFVxsJwDQiC5%2FX5J1uzPsMMHxVjFEncNUkCBJif8L4%2BI4TT4cHetbtiFaLH1g0GQxdGUfHboodxVpMB2iD980FYUsq17aiJtJNn2eA5B3Go0Vp1TsnWXVIxsUfHe5Jh0Te2JHxJ%2BJ6AW0X9fExF5uWnJe4ed60d%2FRuFQSkhU%2BxugfDHzXKQ2YXM0Udw7aXS3igkAlrtdfajZDb3cjsQTxBpt%2BmFVZax6cnzxBJLCuXe%2FBip8WP4Iy%2BaXqgzwkNc4OMAgChlDXUMJLdt70GOqUBwq%2BFjzf0ySkmbfi9tI2Cifso4AeGHFtoxQogMutwbwEKaqhVXTWzAxHs%2FCdROLJpvA0Z5rA6iTbv%2BlvmWG6yLAERhQfHtW7%2FKLWXDshHMUdeBCOFSmEI4jJgX364DJr65ubuhdXiR%2FLC6r3%2FYqTjk82VEO4KUN51PFytyyGu1Ug9EYaOLyuZ1B7ntiAhY1DhN9nF6uFMwYC0PC3ydhTxBFzx%2FksF&X-Amz-Signature=633b53c096f224fd81d3ef17018c6cd0040f92657464344c857eb6e408d6fe7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZDFPPE7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIbgnEZUFNp0awf1PIgMUZGNBDAKLU%2FEDMZHRSHYZglAIgVtx1rISin6kPkD2HI1ylAUIMR%2BILiCPYiqWrRVhOeJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIkiXkDGho9AEqJxUCrcA1na9ymDdz1yp0AJ57KT%2BBUGezRoD7KOmrqhTQGA63p9ml5EU3zPUe%2FhqP3M8OY02nI6JgWayC6NOJtqLI1rUuNoR1dwLITza%2FIQkzabRneQ%2F1ch1Nc%2FG2icM%2FK%2B5HGVDA0%2BifGwoUN6rtZHwxnBROMJOFcWVsCrcnZO7BsHob%2B8w2nyZd9AVGTqxdfVoD9S1fPx%2Fllu89jjcigBIH8vYr7fAfJCmTMBVNlE1AnG3YSdZ4dS1VW4neW6nb7yKA1kwq8V0g83ON4C2Mo0AiHlbXnpIdztel25goMpjR%2BTngl4MT6Iyr1viVBakHiKc0jrcr5S%2FGjgyvm6qZdUSXDsx%2F2gHGgWl1U25o%2FMJ44mZbnfkJOFcbbFVxsJwDQiC5%2FX5J1uzPsMMHxVjFEncNUkCBJif8L4%2BI4TT4cHetbtiFaLH1g0GQxdGUfHboodxVpMB2iD980FYUsq17aiJtJNn2eA5B3Go0Vp1TsnWXVIxsUfHe5Jh0Te2JHxJ%2BJ6AW0X9fExF5uWnJe4ed60d%2FRuFQSkhU%2BxugfDHzXKQ2YXM0Udw7aXS3igkAlrtdfajZDb3cjsQTxBpt%2BmFVZax6cnzxBJLCuXe%2FBip8WP4Iy%2BaXqgzwkNc4OMAgChlDXUMJLdt70GOqUBwq%2BFjzf0ySkmbfi9tI2Cifso4AeGHFtoxQogMutwbwEKaqhVXTWzAxHs%2FCdROLJpvA0Z5rA6iTbv%2BlvmWG6yLAERhQfHtW7%2FKLWXDshHMUdeBCOFSmEI4jJgX364DJr65ubuhdXiR%2FLC6r3%2FYqTjk82VEO4KUN51PFytyyGu1Ug9EYaOLyuZ1B7ntiAhY1DhN9nF6uFMwYC0PC3ydhTxBFzx%2FksF&X-Amz-Signature=6b699a4911c055eb9f396066ce5a15eda9622ac914b8faa25f1131626d171e22&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZDFPPE7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIbgnEZUFNp0awf1PIgMUZGNBDAKLU%2FEDMZHRSHYZglAIgVtx1rISin6kPkD2HI1ylAUIMR%2BILiCPYiqWrRVhOeJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIkiXkDGho9AEqJxUCrcA1na9ymDdz1yp0AJ57KT%2BBUGezRoD7KOmrqhTQGA63p9ml5EU3zPUe%2FhqP3M8OY02nI6JgWayC6NOJtqLI1rUuNoR1dwLITza%2FIQkzabRneQ%2F1ch1Nc%2FG2icM%2FK%2B5HGVDA0%2BifGwoUN6rtZHwxnBROMJOFcWVsCrcnZO7BsHob%2B8w2nyZd9AVGTqxdfVoD9S1fPx%2Fllu89jjcigBIH8vYr7fAfJCmTMBVNlE1AnG3YSdZ4dS1VW4neW6nb7yKA1kwq8V0g83ON4C2Mo0AiHlbXnpIdztel25goMpjR%2BTngl4MT6Iyr1viVBakHiKc0jrcr5S%2FGjgyvm6qZdUSXDsx%2F2gHGgWl1U25o%2FMJ44mZbnfkJOFcbbFVxsJwDQiC5%2FX5J1uzPsMMHxVjFEncNUkCBJif8L4%2BI4TT4cHetbtiFaLH1g0GQxdGUfHboodxVpMB2iD980FYUsq17aiJtJNn2eA5B3Go0Vp1TsnWXVIxsUfHe5Jh0Te2JHxJ%2BJ6AW0X9fExF5uWnJe4ed60d%2FRuFQSkhU%2BxugfDHzXKQ2YXM0Udw7aXS3igkAlrtdfajZDb3cjsQTxBpt%2BmFVZax6cnzxBJLCuXe%2FBip8WP4Iy%2BaXqgzwkNc4OMAgChlDXUMJLdt70GOqUBwq%2BFjzf0ySkmbfi9tI2Cifso4AeGHFtoxQogMutwbwEKaqhVXTWzAxHs%2FCdROLJpvA0Z5rA6iTbv%2BlvmWG6yLAERhQfHtW7%2FKLWXDshHMUdeBCOFSmEI4jJgX364DJr65ubuhdXiR%2FLC6r3%2FYqTjk82VEO4KUN51PFytyyGu1Ug9EYaOLyuZ1B7ntiAhY1DhN9nF6uFMwYC0PC3ydhTxBFzx%2FksF&X-Amz-Signature=97a3e22f7ef323010fc1860a550dbeeedd4dc14c1a6f6283eee99eb8210346a1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZDFPPE7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIbgnEZUFNp0awf1PIgMUZGNBDAKLU%2FEDMZHRSHYZglAIgVtx1rISin6kPkD2HI1ylAUIMR%2BILiCPYiqWrRVhOeJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIkiXkDGho9AEqJxUCrcA1na9ymDdz1yp0AJ57KT%2BBUGezRoD7KOmrqhTQGA63p9ml5EU3zPUe%2FhqP3M8OY02nI6JgWayC6NOJtqLI1rUuNoR1dwLITza%2FIQkzabRneQ%2F1ch1Nc%2FG2icM%2FK%2B5HGVDA0%2BifGwoUN6rtZHwxnBROMJOFcWVsCrcnZO7BsHob%2B8w2nyZd9AVGTqxdfVoD9S1fPx%2Fllu89jjcigBIH8vYr7fAfJCmTMBVNlE1AnG3YSdZ4dS1VW4neW6nb7yKA1kwq8V0g83ON4C2Mo0AiHlbXnpIdztel25goMpjR%2BTngl4MT6Iyr1viVBakHiKc0jrcr5S%2FGjgyvm6qZdUSXDsx%2F2gHGgWl1U25o%2FMJ44mZbnfkJOFcbbFVxsJwDQiC5%2FX5J1uzPsMMHxVjFEncNUkCBJif8L4%2BI4TT4cHetbtiFaLH1g0GQxdGUfHboodxVpMB2iD980FYUsq17aiJtJNn2eA5B3Go0Vp1TsnWXVIxsUfHe5Jh0Te2JHxJ%2BJ6AW0X9fExF5uWnJe4ed60d%2FRuFQSkhU%2BxugfDHzXKQ2YXM0Udw7aXS3igkAlrtdfajZDb3cjsQTxBpt%2BmFVZax6cnzxBJLCuXe%2FBip8WP4Iy%2BaXqgzwkNc4OMAgChlDXUMJLdt70GOqUBwq%2BFjzf0ySkmbfi9tI2Cifso4AeGHFtoxQogMutwbwEKaqhVXTWzAxHs%2FCdROLJpvA0Z5rA6iTbv%2BlvmWG6yLAERhQfHtW7%2FKLWXDshHMUdeBCOFSmEI4jJgX364DJr65ubuhdXiR%2FLC6r3%2FYqTjk82VEO4KUN51PFytyyGu1Ug9EYaOLyuZ1B7ntiAhY1DhN9nF6uFMwYC0PC3ydhTxBFzx%2FksF&X-Amz-Signature=ab42c7189dfe569ffbf01a4816d5f5b66cfbe168136314f28405af3734588016&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZDFPPE7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIbgnEZUFNp0awf1PIgMUZGNBDAKLU%2FEDMZHRSHYZglAIgVtx1rISin6kPkD2HI1ylAUIMR%2BILiCPYiqWrRVhOeJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIkiXkDGho9AEqJxUCrcA1na9ymDdz1yp0AJ57KT%2BBUGezRoD7KOmrqhTQGA63p9ml5EU3zPUe%2FhqP3M8OY02nI6JgWayC6NOJtqLI1rUuNoR1dwLITza%2FIQkzabRneQ%2F1ch1Nc%2FG2icM%2FK%2B5HGVDA0%2BifGwoUN6rtZHwxnBROMJOFcWVsCrcnZO7BsHob%2B8w2nyZd9AVGTqxdfVoD9S1fPx%2Fllu89jjcigBIH8vYr7fAfJCmTMBVNlE1AnG3YSdZ4dS1VW4neW6nb7yKA1kwq8V0g83ON4C2Mo0AiHlbXnpIdztel25goMpjR%2BTngl4MT6Iyr1viVBakHiKc0jrcr5S%2FGjgyvm6qZdUSXDsx%2F2gHGgWl1U25o%2FMJ44mZbnfkJOFcbbFVxsJwDQiC5%2FX5J1uzPsMMHxVjFEncNUkCBJif8L4%2BI4TT4cHetbtiFaLH1g0GQxdGUfHboodxVpMB2iD980FYUsq17aiJtJNn2eA5B3Go0Vp1TsnWXVIxsUfHe5Jh0Te2JHxJ%2BJ6AW0X9fExF5uWnJe4ed60d%2FRuFQSkhU%2BxugfDHzXKQ2YXM0Udw7aXS3igkAlrtdfajZDb3cjsQTxBpt%2BmFVZax6cnzxBJLCuXe%2FBip8WP4Iy%2BaXqgzwkNc4OMAgChlDXUMJLdt70GOqUBwq%2BFjzf0ySkmbfi9tI2Cifso4AeGHFtoxQogMutwbwEKaqhVXTWzAxHs%2FCdROLJpvA0Z5rA6iTbv%2BlvmWG6yLAERhQfHtW7%2FKLWXDshHMUdeBCOFSmEI4jJgX364DJr65ubuhdXiR%2FLC6r3%2FYqTjk82VEO4KUN51PFytyyGu1Ug9EYaOLyuZ1B7ntiAhY1DhN9nF6uFMwYC0PC3ydhTxBFzx%2FksF&X-Amz-Signature=ba0442bf7afd101232df5839f2e4bc48e20dd2fb7582e44c9e13b3464adb80dc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

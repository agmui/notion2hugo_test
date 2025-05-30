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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANTOGNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmh6Bd%2FvQi8rX%2FJyg%2FJZogpKkg4mWJFB7ySTQ6Bx39uAiA9vDgjeneEv1pwsCVk5OlpYfawf%2BTJB8SEdIXRtx4k3iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzd6kyvw0XK%2BasVYKtwDzAU9Rx6CVmHomQM8bdP6JJWb3747X7k9jLi55F5Tf2Vm9rr2p4MU1p6z9S%2BYluDH72LThbLdlIqquW4x7DC%2BZ%2FNe5V%2BwJO%2FEBa23xMPvpShNfS%2FTbtLuhEL0bBE6QdCdQTxbREOst%2BJMT1l3PHvN5W7s8OV69lRjFF%2FrqdhAbutX%2FhUDDTgV91Oc2aK7%2FNNFy4VKMo4BlyanWPEh6HQ0qmbCrnSgKuiPDJR4O8aAQlKrXKNQO8dGtBXPpjwkhzXF2NdQc1H3uhFaqRyR6iqsyeuA45lXhffOxinTa0qPvxTacoRXjmqr8jrdshIQMHj%2BpHwVnClECRMYAXv0PAMXjaJVsvdGg7w%2BwBZ0buhmI6oeWq4DGp2SHxIHPaCSZW7FHI%2BdZ%2Buq3BsgdwW2V%2FDikf%2BNyvRceaowmeYnjF0QByxYK7DXcNJYv138OhNZTO9AWJhIT25YqWMU%2BFBoYEqJcQZeZfNMGfOeKCdzM1tKsk8zlvQZooVKD2MwLp%2FAv38G0txuGRa0y%2B2thytIoAHRHNaWHDe9RwgB9ovVMxJLgXVuPBhsJExQ5yKAK6sHurkCWeqW%2Fw7BZeM3fti0uYOQqVknaMTX9UE2RyX%2FUMtTHKrHnHEYMbUyMozNLNswkt7kwQY6pgGG%2BHIW%2Bp2%2FC8KiA56tDEppdFbb2oamsKjt%2BXkkAXLkPJl0VfNZreMrpZ0tFmmSURSZ%2BXrOc0KeJsvVef58rE7EG1%2Bc2OMdf0a1Mja1Cl9NEQ1MlfxqUl9TrudEcSXFG%2FEbXkG6%2FVl4eQqeZHKoqpK%2BV9SvBgh2c9%2B%2FMWkfngg5gxMcariw45iAvz2ncolD8F13WiBS54eY5XwgGTYJ6zJHyFPSWsNk&X-Amz-Signature=1fe1477e67d72b6244d0396ab5e37c5ba8328133335cf1be1413c82c975b5629&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANTOGNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmh6Bd%2FvQi8rX%2FJyg%2FJZogpKkg4mWJFB7ySTQ6Bx39uAiA9vDgjeneEv1pwsCVk5OlpYfawf%2BTJB8SEdIXRtx4k3iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzd6kyvw0XK%2BasVYKtwDzAU9Rx6CVmHomQM8bdP6JJWb3747X7k9jLi55F5Tf2Vm9rr2p4MU1p6z9S%2BYluDH72LThbLdlIqquW4x7DC%2BZ%2FNe5V%2BwJO%2FEBa23xMPvpShNfS%2FTbtLuhEL0bBE6QdCdQTxbREOst%2BJMT1l3PHvN5W7s8OV69lRjFF%2FrqdhAbutX%2FhUDDTgV91Oc2aK7%2FNNFy4VKMo4BlyanWPEh6HQ0qmbCrnSgKuiPDJR4O8aAQlKrXKNQO8dGtBXPpjwkhzXF2NdQc1H3uhFaqRyR6iqsyeuA45lXhffOxinTa0qPvxTacoRXjmqr8jrdshIQMHj%2BpHwVnClECRMYAXv0PAMXjaJVsvdGg7w%2BwBZ0buhmI6oeWq4DGp2SHxIHPaCSZW7FHI%2BdZ%2Buq3BsgdwW2V%2FDikf%2BNyvRceaowmeYnjF0QByxYK7DXcNJYv138OhNZTO9AWJhIT25YqWMU%2BFBoYEqJcQZeZfNMGfOeKCdzM1tKsk8zlvQZooVKD2MwLp%2FAv38G0txuGRa0y%2B2thytIoAHRHNaWHDe9RwgB9ovVMxJLgXVuPBhsJExQ5yKAK6sHurkCWeqW%2Fw7BZeM3fti0uYOQqVknaMTX9UE2RyX%2FUMtTHKrHnHEYMbUyMozNLNswkt7kwQY6pgGG%2BHIW%2Bp2%2FC8KiA56tDEppdFbb2oamsKjt%2BXkkAXLkPJl0VfNZreMrpZ0tFmmSURSZ%2BXrOc0KeJsvVef58rE7EG1%2Bc2OMdf0a1Mja1Cl9NEQ1MlfxqUl9TrudEcSXFG%2FEbXkG6%2FVl4eQqeZHKoqpK%2BV9SvBgh2c9%2B%2FMWkfngg5gxMcariw45iAvz2ncolD8F13WiBS54eY5XwgGTYJ6zJHyFPSWsNk&X-Amz-Signature=7974705d23c55bbe39bbb34620c07f9de60b0dbedc6ee4bc325446d3b53e14f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANTOGNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmh6Bd%2FvQi8rX%2FJyg%2FJZogpKkg4mWJFB7ySTQ6Bx39uAiA9vDgjeneEv1pwsCVk5OlpYfawf%2BTJB8SEdIXRtx4k3iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzd6kyvw0XK%2BasVYKtwDzAU9Rx6CVmHomQM8bdP6JJWb3747X7k9jLi55F5Tf2Vm9rr2p4MU1p6z9S%2BYluDH72LThbLdlIqquW4x7DC%2BZ%2FNe5V%2BwJO%2FEBa23xMPvpShNfS%2FTbtLuhEL0bBE6QdCdQTxbREOst%2BJMT1l3PHvN5W7s8OV69lRjFF%2FrqdhAbutX%2FhUDDTgV91Oc2aK7%2FNNFy4VKMo4BlyanWPEh6HQ0qmbCrnSgKuiPDJR4O8aAQlKrXKNQO8dGtBXPpjwkhzXF2NdQc1H3uhFaqRyR6iqsyeuA45lXhffOxinTa0qPvxTacoRXjmqr8jrdshIQMHj%2BpHwVnClECRMYAXv0PAMXjaJVsvdGg7w%2BwBZ0buhmI6oeWq4DGp2SHxIHPaCSZW7FHI%2BdZ%2Buq3BsgdwW2V%2FDikf%2BNyvRceaowmeYnjF0QByxYK7DXcNJYv138OhNZTO9AWJhIT25YqWMU%2BFBoYEqJcQZeZfNMGfOeKCdzM1tKsk8zlvQZooVKD2MwLp%2FAv38G0txuGRa0y%2B2thytIoAHRHNaWHDe9RwgB9ovVMxJLgXVuPBhsJExQ5yKAK6sHurkCWeqW%2Fw7BZeM3fti0uYOQqVknaMTX9UE2RyX%2FUMtTHKrHnHEYMbUyMozNLNswkt7kwQY6pgGG%2BHIW%2Bp2%2FC8KiA56tDEppdFbb2oamsKjt%2BXkkAXLkPJl0VfNZreMrpZ0tFmmSURSZ%2BXrOc0KeJsvVef58rE7EG1%2Bc2OMdf0a1Mja1Cl9NEQ1MlfxqUl9TrudEcSXFG%2FEbXkG6%2FVl4eQqeZHKoqpK%2BV9SvBgh2c9%2B%2FMWkfngg5gxMcariw45iAvz2ncolD8F13WiBS54eY5XwgGTYJ6zJHyFPSWsNk&X-Amz-Signature=ba566fe525719053773fcf6be741ab642f2734a8ed562e26f324374178942151&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANTOGNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmh6Bd%2FvQi8rX%2FJyg%2FJZogpKkg4mWJFB7ySTQ6Bx39uAiA9vDgjeneEv1pwsCVk5OlpYfawf%2BTJB8SEdIXRtx4k3iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzd6kyvw0XK%2BasVYKtwDzAU9Rx6CVmHomQM8bdP6JJWb3747X7k9jLi55F5Tf2Vm9rr2p4MU1p6z9S%2BYluDH72LThbLdlIqquW4x7DC%2BZ%2FNe5V%2BwJO%2FEBa23xMPvpShNfS%2FTbtLuhEL0bBE6QdCdQTxbREOst%2BJMT1l3PHvN5W7s8OV69lRjFF%2FrqdhAbutX%2FhUDDTgV91Oc2aK7%2FNNFy4VKMo4BlyanWPEh6HQ0qmbCrnSgKuiPDJR4O8aAQlKrXKNQO8dGtBXPpjwkhzXF2NdQc1H3uhFaqRyR6iqsyeuA45lXhffOxinTa0qPvxTacoRXjmqr8jrdshIQMHj%2BpHwVnClECRMYAXv0PAMXjaJVsvdGg7w%2BwBZ0buhmI6oeWq4DGp2SHxIHPaCSZW7FHI%2BdZ%2Buq3BsgdwW2V%2FDikf%2BNyvRceaowmeYnjF0QByxYK7DXcNJYv138OhNZTO9AWJhIT25YqWMU%2BFBoYEqJcQZeZfNMGfOeKCdzM1tKsk8zlvQZooVKD2MwLp%2FAv38G0txuGRa0y%2B2thytIoAHRHNaWHDe9RwgB9ovVMxJLgXVuPBhsJExQ5yKAK6sHurkCWeqW%2Fw7BZeM3fti0uYOQqVknaMTX9UE2RyX%2FUMtTHKrHnHEYMbUyMozNLNswkt7kwQY6pgGG%2BHIW%2Bp2%2FC8KiA56tDEppdFbb2oamsKjt%2BXkkAXLkPJl0VfNZreMrpZ0tFmmSURSZ%2BXrOc0KeJsvVef58rE7EG1%2Bc2OMdf0a1Mja1Cl9NEQ1MlfxqUl9TrudEcSXFG%2FEbXkG6%2FVl4eQqeZHKoqpK%2BV9SvBgh2c9%2B%2FMWkfngg5gxMcariw45iAvz2ncolD8F13WiBS54eY5XwgGTYJ6zJHyFPSWsNk&X-Amz-Signature=b8213dc1b3544bc8a41cf5e48c93b925bf4b937625495a4b7c2ed9e9eb67c4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANTOGNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmh6Bd%2FvQi8rX%2FJyg%2FJZogpKkg4mWJFB7ySTQ6Bx39uAiA9vDgjeneEv1pwsCVk5OlpYfawf%2BTJB8SEdIXRtx4k3iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzd6kyvw0XK%2BasVYKtwDzAU9Rx6CVmHomQM8bdP6JJWb3747X7k9jLi55F5Tf2Vm9rr2p4MU1p6z9S%2BYluDH72LThbLdlIqquW4x7DC%2BZ%2FNe5V%2BwJO%2FEBa23xMPvpShNfS%2FTbtLuhEL0bBE6QdCdQTxbREOst%2BJMT1l3PHvN5W7s8OV69lRjFF%2FrqdhAbutX%2FhUDDTgV91Oc2aK7%2FNNFy4VKMo4BlyanWPEh6HQ0qmbCrnSgKuiPDJR4O8aAQlKrXKNQO8dGtBXPpjwkhzXF2NdQc1H3uhFaqRyR6iqsyeuA45lXhffOxinTa0qPvxTacoRXjmqr8jrdshIQMHj%2BpHwVnClECRMYAXv0PAMXjaJVsvdGg7w%2BwBZ0buhmI6oeWq4DGp2SHxIHPaCSZW7FHI%2BdZ%2Buq3BsgdwW2V%2FDikf%2BNyvRceaowmeYnjF0QByxYK7DXcNJYv138OhNZTO9AWJhIT25YqWMU%2BFBoYEqJcQZeZfNMGfOeKCdzM1tKsk8zlvQZooVKD2MwLp%2FAv38G0txuGRa0y%2B2thytIoAHRHNaWHDe9RwgB9ovVMxJLgXVuPBhsJExQ5yKAK6sHurkCWeqW%2Fw7BZeM3fti0uYOQqVknaMTX9UE2RyX%2FUMtTHKrHnHEYMbUyMozNLNswkt7kwQY6pgGG%2BHIW%2Bp2%2FC8KiA56tDEppdFbb2oamsKjt%2BXkkAXLkPJl0VfNZreMrpZ0tFmmSURSZ%2BXrOc0KeJsvVef58rE7EG1%2Bc2OMdf0a1Mja1Cl9NEQ1MlfxqUl9TrudEcSXFG%2FEbXkG6%2FVl4eQqeZHKoqpK%2BV9SvBgh2c9%2B%2FMWkfngg5gxMcariw45iAvz2ncolD8F13WiBS54eY5XwgGTYJ6zJHyFPSWsNk&X-Amz-Signature=54089e1682475fd0c0f37ef01b83a059f165ff78490d8f6072bcbe739fc4dee3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANTOGNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmh6Bd%2FvQi8rX%2FJyg%2FJZogpKkg4mWJFB7ySTQ6Bx39uAiA9vDgjeneEv1pwsCVk5OlpYfawf%2BTJB8SEdIXRtx4k3iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzd6kyvw0XK%2BasVYKtwDzAU9Rx6CVmHomQM8bdP6JJWb3747X7k9jLi55F5Tf2Vm9rr2p4MU1p6z9S%2BYluDH72LThbLdlIqquW4x7DC%2BZ%2FNe5V%2BwJO%2FEBa23xMPvpShNfS%2FTbtLuhEL0bBE6QdCdQTxbREOst%2BJMT1l3PHvN5W7s8OV69lRjFF%2FrqdhAbutX%2FhUDDTgV91Oc2aK7%2FNNFy4VKMo4BlyanWPEh6HQ0qmbCrnSgKuiPDJR4O8aAQlKrXKNQO8dGtBXPpjwkhzXF2NdQc1H3uhFaqRyR6iqsyeuA45lXhffOxinTa0qPvxTacoRXjmqr8jrdshIQMHj%2BpHwVnClECRMYAXv0PAMXjaJVsvdGg7w%2BwBZ0buhmI6oeWq4DGp2SHxIHPaCSZW7FHI%2BdZ%2Buq3BsgdwW2V%2FDikf%2BNyvRceaowmeYnjF0QByxYK7DXcNJYv138OhNZTO9AWJhIT25YqWMU%2BFBoYEqJcQZeZfNMGfOeKCdzM1tKsk8zlvQZooVKD2MwLp%2FAv38G0txuGRa0y%2B2thytIoAHRHNaWHDe9RwgB9ovVMxJLgXVuPBhsJExQ5yKAK6sHurkCWeqW%2Fw7BZeM3fti0uYOQqVknaMTX9UE2RyX%2FUMtTHKrHnHEYMbUyMozNLNswkt7kwQY6pgGG%2BHIW%2Bp2%2FC8KiA56tDEppdFbb2oamsKjt%2BXkkAXLkPJl0VfNZreMrpZ0tFmmSURSZ%2BXrOc0KeJsvVef58rE7EG1%2Bc2OMdf0a1Mja1Cl9NEQ1MlfxqUl9TrudEcSXFG%2FEbXkG6%2FVl4eQqeZHKoqpK%2BV9SvBgh2c9%2B%2FMWkfngg5gxMcariw45iAvz2ncolD8F13WiBS54eY5XwgGTYJ6zJHyFPSWsNk&X-Amz-Signature=ddd04541daed3de12393877089779202ae7c121dbfa7f2282ff36b35a97d9d63&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANTOGNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmh6Bd%2FvQi8rX%2FJyg%2FJZogpKkg4mWJFB7ySTQ6Bx39uAiA9vDgjeneEv1pwsCVk5OlpYfawf%2BTJB8SEdIXRtx4k3iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzd6kyvw0XK%2BasVYKtwDzAU9Rx6CVmHomQM8bdP6JJWb3747X7k9jLi55F5Tf2Vm9rr2p4MU1p6z9S%2BYluDH72LThbLdlIqquW4x7DC%2BZ%2FNe5V%2BwJO%2FEBa23xMPvpShNfS%2FTbtLuhEL0bBE6QdCdQTxbREOst%2BJMT1l3PHvN5W7s8OV69lRjFF%2FrqdhAbutX%2FhUDDTgV91Oc2aK7%2FNNFy4VKMo4BlyanWPEh6HQ0qmbCrnSgKuiPDJR4O8aAQlKrXKNQO8dGtBXPpjwkhzXF2NdQc1H3uhFaqRyR6iqsyeuA45lXhffOxinTa0qPvxTacoRXjmqr8jrdshIQMHj%2BpHwVnClECRMYAXv0PAMXjaJVsvdGg7w%2BwBZ0buhmI6oeWq4DGp2SHxIHPaCSZW7FHI%2BdZ%2Buq3BsgdwW2V%2FDikf%2BNyvRceaowmeYnjF0QByxYK7DXcNJYv138OhNZTO9AWJhIT25YqWMU%2BFBoYEqJcQZeZfNMGfOeKCdzM1tKsk8zlvQZooVKD2MwLp%2FAv38G0txuGRa0y%2B2thytIoAHRHNaWHDe9RwgB9ovVMxJLgXVuPBhsJExQ5yKAK6sHurkCWeqW%2Fw7BZeM3fti0uYOQqVknaMTX9UE2RyX%2FUMtTHKrHnHEYMbUyMozNLNswkt7kwQY6pgGG%2BHIW%2Bp2%2FC8KiA56tDEppdFbb2oamsKjt%2BXkkAXLkPJl0VfNZreMrpZ0tFmmSURSZ%2BXrOc0KeJsvVef58rE7EG1%2Bc2OMdf0a1Mja1Cl9NEQ1MlfxqUl9TrudEcSXFG%2FEbXkG6%2FVl4eQqeZHKoqpK%2BV9SvBgh2c9%2B%2FMWkfngg5gxMcariw45iAvz2ncolD8F13WiBS54eY5XwgGTYJ6zJHyFPSWsNk&X-Amz-Signature=b820624df5236636b79ce27712a16132e4f3cfd07dd6d9da4f0432228b62f0ef&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

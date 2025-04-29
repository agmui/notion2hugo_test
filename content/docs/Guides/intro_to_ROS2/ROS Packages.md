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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZ3OIIH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2n%2BgofNKVHLK2o24q6Umxe4o1Aiv1mR4mUE6EQqmg%2FAiB44mrTKPnspMGpmaTEkJF%2FR3ZpQGWmPWolwrmOhmgiAiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqwfEM1l7bKWFJoY3KtwD%2B92HuZH%2BbuorulnUbi5luaZVjFoAc%2FrOp8JEpXl1fVuEGz5RefsA2FpTdVhpUt%2BKInNv87hgEK77MnhBNOK53H5JNFOrlNS6pDFQpzzkk7U6Z6MoRDoyWTQsdNTj9JBbEau%2B6IEC9GrR%2FMkwQmvhV1fdy2gBZXk9r9y2YHifqReaPYGDO2fkt1uQc6ANnTQHNPuM6NdT44PV6u%2BfwUi2KM6RZlOopfrpCLjahw%2Fdm8q3tFuWfvuY8uE4B%2Fz9OckvqAyYDJ%2FIiHpv%2B0ZUqqnWXkU8oiR%2FZJDi2rCTBE9xP4iEXXEU1Gb5rIyNc2LSq6EN0DT5LT%2F%2FT7p6SlVl0lk9Smpm6sWsNP8X%2BamJ5wXvGQop4HAPiVdOvj6FGNkIK8iI9%2FHblHfxApl%2BMfHfAY%2FXpGPZJM29PK4d5ZxfY64QWaJU5xvZWX5A2nahxwBWCRGlrrASDzptm%2FTF4TGVf139jynOhOprWWV9FKDYd14LiTcJhj0Hhe8MsMWmlJKRTTS9XTqNTE7Rf1wynl%2FnTWaCyuvifZEA4flZpd0HyiJmwrFQK5rwBGte1FunMfkKiPefZUcJxCI4G%2BFf1VX3oIhsMyJOwKfInG3%2F3th0D7m5HZwWSV9IOaxIJUGbHWUwn4vCwAY6pgEbswRR1FjaY6B2Iy8chQ95TuA%2FfH4INwk5UBhqykMPbw5z8S5PbDE6mva2vhBUAfH6gjWWRbEwSqZupUoL7%2F0bmkE50bDmBpZDNRkAb2Xg3MQp1iEbn2gyfcGXh9m9Gcuz4j9%2FoZ%2Bl3BXHPrHMHSYxtqwnVfVdYUsetVUWMAq3BuFHDG6bVv%2BQTZFyMzopVRT6LGPTT7%2Bxh%2FXGKXeg55zmxPmHDoIp&X-Amz-Signature=49c109de3655e47fbe0754df6aec4a09bac087052ebb299882abb378c2163771&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZ3OIIH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2n%2BgofNKVHLK2o24q6Umxe4o1Aiv1mR4mUE6EQqmg%2FAiB44mrTKPnspMGpmaTEkJF%2FR3ZpQGWmPWolwrmOhmgiAiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqwfEM1l7bKWFJoY3KtwD%2B92HuZH%2BbuorulnUbi5luaZVjFoAc%2FrOp8JEpXl1fVuEGz5RefsA2FpTdVhpUt%2BKInNv87hgEK77MnhBNOK53H5JNFOrlNS6pDFQpzzkk7U6Z6MoRDoyWTQsdNTj9JBbEau%2B6IEC9GrR%2FMkwQmvhV1fdy2gBZXk9r9y2YHifqReaPYGDO2fkt1uQc6ANnTQHNPuM6NdT44PV6u%2BfwUi2KM6RZlOopfrpCLjahw%2Fdm8q3tFuWfvuY8uE4B%2Fz9OckvqAyYDJ%2FIiHpv%2B0ZUqqnWXkU8oiR%2FZJDi2rCTBE9xP4iEXXEU1Gb5rIyNc2LSq6EN0DT5LT%2F%2FT7p6SlVl0lk9Smpm6sWsNP8X%2BamJ5wXvGQop4HAPiVdOvj6FGNkIK8iI9%2FHblHfxApl%2BMfHfAY%2FXpGPZJM29PK4d5ZxfY64QWaJU5xvZWX5A2nahxwBWCRGlrrASDzptm%2FTF4TGVf139jynOhOprWWV9FKDYd14LiTcJhj0Hhe8MsMWmlJKRTTS9XTqNTE7Rf1wynl%2FnTWaCyuvifZEA4flZpd0HyiJmwrFQK5rwBGte1FunMfkKiPefZUcJxCI4G%2BFf1VX3oIhsMyJOwKfInG3%2F3th0D7m5HZwWSV9IOaxIJUGbHWUwn4vCwAY6pgEbswRR1FjaY6B2Iy8chQ95TuA%2FfH4INwk5UBhqykMPbw5z8S5PbDE6mva2vhBUAfH6gjWWRbEwSqZupUoL7%2F0bmkE50bDmBpZDNRkAb2Xg3MQp1iEbn2gyfcGXh9m9Gcuz4j9%2FoZ%2Bl3BXHPrHMHSYxtqwnVfVdYUsetVUWMAq3BuFHDG6bVv%2BQTZFyMzopVRT6LGPTT7%2Bxh%2FXGKXeg55zmxPmHDoIp&X-Amz-Signature=9d443ff8c825f3eff8f5b46b387c6e923c7225bbef2d856aa328e8c44662ea9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZ3OIIH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2n%2BgofNKVHLK2o24q6Umxe4o1Aiv1mR4mUE6EQqmg%2FAiB44mrTKPnspMGpmaTEkJF%2FR3ZpQGWmPWolwrmOhmgiAiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqwfEM1l7bKWFJoY3KtwD%2B92HuZH%2BbuorulnUbi5luaZVjFoAc%2FrOp8JEpXl1fVuEGz5RefsA2FpTdVhpUt%2BKInNv87hgEK77MnhBNOK53H5JNFOrlNS6pDFQpzzkk7U6Z6MoRDoyWTQsdNTj9JBbEau%2B6IEC9GrR%2FMkwQmvhV1fdy2gBZXk9r9y2YHifqReaPYGDO2fkt1uQc6ANnTQHNPuM6NdT44PV6u%2BfwUi2KM6RZlOopfrpCLjahw%2Fdm8q3tFuWfvuY8uE4B%2Fz9OckvqAyYDJ%2FIiHpv%2B0ZUqqnWXkU8oiR%2FZJDi2rCTBE9xP4iEXXEU1Gb5rIyNc2LSq6EN0DT5LT%2F%2FT7p6SlVl0lk9Smpm6sWsNP8X%2BamJ5wXvGQop4HAPiVdOvj6FGNkIK8iI9%2FHblHfxApl%2BMfHfAY%2FXpGPZJM29PK4d5ZxfY64QWaJU5xvZWX5A2nahxwBWCRGlrrASDzptm%2FTF4TGVf139jynOhOprWWV9FKDYd14LiTcJhj0Hhe8MsMWmlJKRTTS9XTqNTE7Rf1wynl%2FnTWaCyuvifZEA4flZpd0HyiJmwrFQK5rwBGte1FunMfkKiPefZUcJxCI4G%2BFf1VX3oIhsMyJOwKfInG3%2F3th0D7m5HZwWSV9IOaxIJUGbHWUwn4vCwAY6pgEbswRR1FjaY6B2Iy8chQ95TuA%2FfH4INwk5UBhqykMPbw5z8S5PbDE6mva2vhBUAfH6gjWWRbEwSqZupUoL7%2F0bmkE50bDmBpZDNRkAb2Xg3MQp1iEbn2gyfcGXh9m9Gcuz4j9%2FoZ%2Bl3BXHPrHMHSYxtqwnVfVdYUsetVUWMAq3BuFHDG6bVv%2BQTZFyMzopVRT6LGPTT7%2Bxh%2FXGKXeg55zmxPmHDoIp&X-Amz-Signature=490b9e8e6db77a6a8c8c80fa69c82182f9e0ba9d80cf389f5be5e08ccbf7c62a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZ3OIIH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2n%2BgofNKVHLK2o24q6Umxe4o1Aiv1mR4mUE6EQqmg%2FAiB44mrTKPnspMGpmaTEkJF%2FR3ZpQGWmPWolwrmOhmgiAiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqwfEM1l7bKWFJoY3KtwD%2B92HuZH%2BbuorulnUbi5luaZVjFoAc%2FrOp8JEpXl1fVuEGz5RefsA2FpTdVhpUt%2BKInNv87hgEK77MnhBNOK53H5JNFOrlNS6pDFQpzzkk7U6Z6MoRDoyWTQsdNTj9JBbEau%2B6IEC9GrR%2FMkwQmvhV1fdy2gBZXk9r9y2YHifqReaPYGDO2fkt1uQc6ANnTQHNPuM6NdT44PV6u%2BfwUi2KM6RZlOopfrpCLjahw%2Fdm8q3tFuWfvuY8uE4B%2Fz9OckvqAyYDJ%2FIiHpv%2B0ZUqqnWXkU8oiR%2FZJDi2rCTBE9xP4iEXXEU1Gb5rIyNc2LSq6EN0DT5LT%2F%2FT7p6SlVl0lk9Smpm6sWsNP8X%2BamJ5wXvGQop4HAPiVdOvj6FGNkIK8iI9%2FHblHfxApl%2BMfHfAY%2FXpGPZJM29PK4d5ZxfY64QWaJU5xvZWX5A2nahxwBWCRGlrrASDzptm%2FTF4TGVf139jynOhOprWWV9FKDYd14LiTcJhj0Hhe8MsMWmlJKRTTS9XTqNTE7Rf1wynl%2FnTWaCyuvifZEA4flZpd0HyiJmwrFQK5rwBGte1FunMfkKiPefZUcJxCI4G%2BFf1VX3oIhsMyJOwKfInG3%2F3th0D7m5HZwWSV9IOaxIJUGbHWUwn4vCwAY6pgEbswRR1FjaY6B2Iy8chQ95TuA%2FfH4INwk5UBhqykMPbw5z8S5PbDE6mva2vhBUAfH6gjWWRbEwSqZupUoL7%2F0bmkE50bDmBpZDNRkAb2Xg3MQp1iEbn2gyfcGXh9m9Gcuz4j9%2FoZ%2Bl3BXHPrHMHSYxtqwnVfVdYUsetVUWMAq3BuFHDG6bVv%2BQTZFyMzopVRT6LGPTT7%2Bxh%2FXGKXeg55zmxPmHDoIp&X-Amz-Signature=24199ce361b1566f8f308105c5fc25071d6b49ebd778395dc41152621dcae4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZ3OIIH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2n%2BgofNKVHLK2o24q6Umxe4o1Aiv1mR4mUE6EQqmg%2FAiB44mrTKPnspMGpmaTEkJF%2FR3ZpQGWmPWolwrmOhmgiAiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqwfEM1l7bKWFJoY3KtwD%2B92HuZH%2BbuorulnUbi5luaZVjFoAc%2FrOp8JEpXl1fVuEGz5RefsA2FpTdVhpUt%2BKInNv87hgEK77MnhBNOK53H5JNFOrlNS6pDFQpzzkk7U6Z6MoRDoyWTQsdNTj9JBbEau%2B6IEC9GrR%2FMkwQmvhV1fdy2gBZXk9r9y2YHifqReaPYGDO2fkt1uQc6ANnTQHNPuM6NdT44PV6u%2BfwUi2KM6RZlOopfrpCLjahw%2Fdm8q3tFuWfvuY8uE4B%2Fz9OckvqAyYDJ%2FIiHpv%2B0ZUqqnWXkU8oiR%2FZJDi2rCTBE9xP4iEXXEU1Gb5rIyNc2LSq6EN0DT5LT%2F%2FT7p6SlVl0lk9Smpm6sWsNP8X%2BamJ5wXvGQop4HAPiVdOvj6FGNkIK8iI9%2FHblHfxApl%2BMfHfAY%2FXpGPZJM29PK4d5ZxfY64QWaJU5xvZWX5A2nahxwBWCRGlrrASDzptm%2FTF4TGVf139jynOhOprWWV9FKDYd14LiTcJhj0Hhe8MsMWmlJKRTTS9XTqNTE7Rf1wynl%2FnTWaCyuvifZEA4flZpd0HyiJmwrFQK5rwBGte1FunMfkKiPefZUcJxCI4G%2BFf1VX3oIhsMyJOwKfInG3%2F3th0D7m5HZwWSV9IOaxIJUGbHWUwn4vCwAY6pgEbswRR1FjaY6B2Iy8chQ95TuA%2FfH4INwk5UBhqykMPbw5z8S5PbDE6mva2vhBUAfH6gjWWRbEwSqZupUoL7%2F0bmkE50bDmBpZDNRkAb2Xg3MQp1iEbn2gyfcGXh9m9Gcuz4j9%2FoZ%2Bl3BXHPrHMHSYxtqwnVfVdYUsetVUWMAq3BuFHDG6bVv%2BQTZFyMzopVRT6LGPTT7%2Bxh%2FXGKXeg55zmxPmHDoIp&X-Amz-Signature=bfafdb249042565657a550e3ebe1170fedacefe68e7cdff7cc5a28f74aaa316e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZ3OIIH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2n%2BgofNKVHLK2o24q6Umxe4o1Aiv1mR4mUE6EQqmg%2FAiB44mrTKPnspMGpmaTEkJF%2FR3ZpQGWmPWolwrmOhmgiAiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqwfEM1l7bKWFJoY3KtwD%2B92HuZH%2BbuorulnUbi5luaZVjFoAc%2FrOp8JEpXl1fVuEGz5RefsA2FpTdVhpUt%2BKInNv87hgEK77MnhBNOK53H5JNFOrlNS6pDFQpzzkk7U6Z6MoRDoyWTQsdNTj9JBbEau%2B6IEC9GrR%2FMkwQmvhV1fdy2gBZXk9r9y2YHifqReaPYGDO2fkt1uQc6ANnTQHNPuM6NdT44PV6u%2BfwUi2KM6RZlOopfrpCLjahw%2Fdm8q3tFuWfvuY8uE4B%2Fz9OckvqAyYDJ%2FIiHpv%2B0ZUqqnWXkU8oiR%2FZJDi2rCTBE9xP4iEXXEU1Gb5rIyNc2LSq6EN0DT5LT%2F%2FT7p6SlVl0lk9Smpm6sWsNP8X%2BamJ5wXvGQop4HAPiVdOvj6FGNkIK8iI9%2FHblHfxApl%2BMfHfAY%2FXpGPZJM29PK4d5ZxfY64QWaJU5xvZWX5A2nahxwBWCRGlrrASDzptm%2FTF4TGVf139jynOhOprWWV9FKDYd14LiTcJhj0Hhe8MsMWmlJKRTTS9XTqNTE7Rf1wynl%2FnTWaCyuvifZEA4flZpd0HyiJmwrFQK5rwBGte1FunMfkKiPefZUcJxCI4G%2BFf1VX3oIhsMyJOwKfInG3%2F3th0D7m5HZwWSV9IOaxIJUGbHWUwn4vCwAY6pgEbswRR1FjaY6B2Iy8chQ95TuA%2FfH4INwk5UBhqykMPbw5z8S5PbDE6mva2vhBUAfH6gjWWRbEwSqZupUoL7%2F0bmkE50bDmBpZDNRkAb2Xg3MQp1iEbn2gyfcGXh9m9Gcuz4j9%2FoZ%2Bl3BXHPrHMHSYxtqwnVfVdYUsetVUWMAq3BuFHDG6bVv%2BQTZFyMzopVRT6LGPTT7%2Bxh%2FXGKXeg55zmxPmHDoIp&X-Amz-Signature=931ef4190fdf7f1567e3216a764257eadd592d45c4845dcb7e5fc3fff00025ff&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZ3OIIH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2n%2BgofNKVHLK2o24q6Umxe4o1Aiv1mR4mUE6EQqmg%2FAiB44mrTKPnspMGpmaTEkJF%2FR3ZpQGWmPWolwrmOhmgiAiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqwfEM1l7bKWFJoY3KtwD%2B92HuZH%2BbuorulnUbi5luaZVjFoAc%2FrOp8JEpXl1fVuEGz5RefsA2FpTdVhpUt%2BKInNv87hgEK77MnhBNOK53H5JNFOrlNS6pDFQpzzkk7U6Z6MoRDoyWTQsdNTj9JBbEau%2B6IEC9GrR%2FMkwQmvhV1fdy2gBZXk9r9y2YHifqReaPYGDO2fkt1uQc6ANnTQHNPuM6NdT44PV6u%2BfwUi2KM6RZlOopfrpCLjahw%2Fdm8q3tFuWfvuY8uE4B%2Fz9OckvqAyYDJ%2FIiHpv%2B0ZUqqnWXkU8oiR%2FZJDi2rCTBE9xP4iEXXEU1Gb5rIyNc2LSq6EN0DT5LT%2F%2FT7p6SlVl0lk9Smpm6sWsNP8X%2BamJ5wXvGQop4HAPiVdOvj6FGNkIK8iI9%2FHblHfxApl%2BMfHfAY%2FXpGPZJM29PK4d5ZxfY64QWaJU5xvZWX5A2nahxwBWCRGlrrASDzptm%2FTF4TGVf139jynOhOprWWV9FKDYd14LiTcJhj0Hhe8MsMWmlJKRTTS9XTqNTE7Rf1wynl%2FnTWaCyuvifZEA4flZpd0HyiJmwrFQK5rwBGte1FunMfkKiPefZUcJxCI4G%2BFf1VX3oIhsMyJOwKfInG3%2F3th0D7m5HZwWSV9IOaxIJUGbHWUwn4vCwAY6pgEbswRR1FjaY6B2Iy8chQ95TuA%2FfH4INwk5UBhqykMPbw5z8S5PbDE6mva2vhBUAfH6gjWWRbEwSqZupUoL7%2F0bmkE50bDmBpZDNRkAb2Xg3MQp1iEbn2gyfcGXh9m9Gcuz4j9%2FoZ%2Bl3BXHPrHMHSYxtqwnVfVdYUsetVUWMAq3BuFHDG6bVv%2BQTZFyMzopVRT6LGPTT7%2Bxh%2FXGKXeg55zmxPmHDoIp&X-Amz-Signature=34afc4cca82e70b21b5edea4d74f61c698166c183e6925fb1a1412cb07b5363c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM3F4MD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrCfVCy4h9ovLBWYJgwiUpf7SCcSnxmoun%2FYcLWB5fFAiEAoXeBtfk7Vt0VSjrwZHFe9a%2FxJ6Ero144aTHy3tJ0XJIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN71FHzexFqGxmBd%2BircA9tq6gjEzlcnW%2Fzp9RKkprN9n68DyFx2qyn6kt5HiYyvHfJrgezgE6f8z2l%2FTOzFStb%2BByGdivX0ovvZp%2BZRQxtAq0rXhXukUB7aCu9EPsLZgrRm3V%2FT%2F213KVjSqUnAy8nl290VX5aeYsfYIPOej68p7dFUjaPjyzn2rJP08LkBQKy5pqoQFRs1Irinqm2Sja2Q4enLrHY9naja0er7OzG7K0jUMp7Xc1EjhvDO5zj8gy%2BwWtFaOgak815K3foPAmG56U%2BoTD6ifDGB388mMUKgNIIxVRISJ1c9Pi0eKHk4G6wxlrDSI0wvhFrNaEYA4ydxMue9YvVAwPgeqEWZTblEm%2F%2Fc4PUNf9y2eJce2sQcoWy6QX6Lx9rZXl%2BtAJ6Qfw2aGcpzguTt8WS1KQt1ZRAIHT2Oi6LjzeQUdNErGZWKzg2yejK7dRfCyyquRIEsbiHA%2Bfk5tkTpmgvZNUix59JRGlqlf08uw9MYj54n25rJD1OeWgewqwQkTnPxEevKbWrgGXPBDYGbBZdfk7QSCb3IP6Ff%2FP00bu9x%2BvdUOS9GW9k6vOBQGGr%2Ff2jZzq30P527EWggyld%2BCG6KEuLbd9crgKqRWg5y6QDDbeZUZ7oJNT8bPyVq68%2BNz%2B9mMJWy%2BrwGOqUBQm6HumGkZx%2FTYTdv6yQuRLvcj6KNEA%2FITOQUOzAOp0If8THLoBihdjPzh6gFnXzJwG4O4NUPZKEyhE%2F46WSDKfXZjs%2B6O6e5eNnFiqtPKtodhbynV%2F7ze%2Fg%2F01ZvAm5wvCk3ZKCEoBZpcyuwrpIp73ZLhMBLBP03fPBhWLqhAJxyKIl25Jqt8FJbIX2gvMrTLuF6VRojm6vASlhUAXwqWZcF2l%2FF&X-Amz-Signature=2845ea63da30e081d9046e753451f38c75f7c1beea17150481fbc75739d982fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM3F4MD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrCfVCy4h9ovLBWYJgwiUpf7SCcSnxmoun%2FYcLWB5fFAiEAoXeBtfk7Vt0VSjrwZHFe9a%2FxJ6Ero144aTHy3tJ0XJIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN71FHzexFqGxmBd%2BircA9tq6gjEzlcnW%2Fzp9RKkprN9n68DyFx2qyn6kt5HiYyvHfJrgezgE6f8z2l%2FTOzFStb%2BByGdivX0ovvZp%2BZRQxtAq0rXhXukUB7aCu9EPsLZgrRm3V%2FT%2F213KVjSqUnAy8nl290VX5aeYsfYIPOej68p7dFUjaPjyzn2rJP08LkBQKy5pqoQFRs1Irinqm2Sja2Q4enLrHY9naja0er7OzG7K0jUMp7Xc1EjhvDO5zj8gy%2BwWtFaOgak815K3foPAmG56U%2BoTD6ifDGB388mMUKgNIIxVRISJ1c9Pi0eKHk4G6wxlrDSI0wvhFrNaEYA4ydxMue9YvVAwPgeqEWZTblEm%2F%2Fc4PUNf9y2eJce2sQcoWy6QX6Lx9rZXl%2BtAJ6Qfw2aGcpzguTt8WS1KQt1ZRAIHT2Oi6LjzeQUdNErGZWKzg2yejK7dRfCyyquRIEsbiHA%2Bfk5tkTpmgvZNUix59JRGlqlf08uw9MYj54n25rJD1OeWgewqwQkTnPxEevKbWrgGXPBDYGbBZdfk7QSCb3IP6Ff%2FP00bu9x%2BvdUOS9GW9k6vOBQGGr%2Ff2jZzq30P527EWggyld%2BCG6KEuLbd9crgKqRWg5y6QDDbeZUZ7oJNT8bPyVq68%2BNz%2B9mMJWy%2BrwGOqUBQm6HumGkZx%2FTYTdv6yQuRLvcj6KNEA%2FITOQUOzAOp0If8THLoBihdjPzh6gFnXzJwG4O4NUPZKEyhE%2F46WSDKfXZjs%2B6O6e5eNnFiqtPKtodhbynV%2F7ze%2Fg%2F01ZvAm5wvCk3ZKCEoBZpcyuwrpIp73ZLhMBLBP03fPBhWLqhAJxyKIl25Jqt8FJbIX2gvMrTLuF6VRojm6vASlhUAXwqWZcF2l%2FF&X-Amz-Signature=629c9576eedc2cb0179ee5b760325f184315d03e0011e26b2127f2e2ecd34c75&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM3F4MD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrCfVCy4h9ovLBWYJgwiUpf7SCcSnxmoun%2FYcLWB5fFAiEAoXeBtfk7Vt0VSjrwZHFe9a%2FxJ6Ero144aTHy3tJ0XJIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN71FHzexFqGxmBd%2BircA9tq6gjEzlcnW%2Fzp9RKkprN9n68DyFx2qyn6kt5HiYyvHfJrgezgE6f8z2l%2FTOzFStb%2BByGdivX0ovvZp%2BZRQxtAq0rXhXukUB7aCu9EPsLZgrRm3V%2FT%2F213KVjSqUnAy8nl290VX5aeYsfYIPOej68p7dFUjaPjyzn2rJP08LkBQKy5pqoQFRs1Irinqm2Sja2Q4enLrHY9naja0er7OzG7K0jUMp7Xc1EjhvDO5zj8gy%2BwWtFaOgak815K3foPAmG56U%2BoTD6ifDGB388mMUKgNIIxVRISJ1c9Pi0eKHk4G6wxlrDSI0wvhFrNaEYA4ydxMue9YvVAwPgeqEWZTblEm%2F%2Fc4PUNf9y2eJce2sQcoWy6QX6Lx9rZXl%2BtAJ6Qfw2aGcpzguTt8WS1KQt1ZRAIHT2Oi6LjzeQUdNErGZWKzg2yejK7dRfCyyquRIEsbiHA%2Bfk5tkTpmgvZNUix59JRGlqlf08uw9MYj54n25rJD1OeWgewqwQkTnPxEevKbWrgGXPBDYGbBZdfk7QSCb3IP6Ff%2FP00bu9x%2BvdUOS9GW9k6vOBQGGr%2Ff2jZzq30P527EWggyld%2BCG6KEuLbd9crgKqRWg5y6QDDbeZUZ7oJNT8bPyVq68%2BNz%2B9mMJWy%2BrwGOqUBQm6HumGkZx%2FTYTdv6yQuRLvcj6KNEA%2FITOQUOzAOp0If8THLoBihdjPzh6gFnXzJwG4O4NUPZKEyhE%2F46WSDKfXZjs%2B6O6e5eNnFiqtPKtodhbynV%2F7ze%2Fg%2F01ZvAm5wvCk3ZKCEoBZpcyuwrpIp73ZLhMBLBP03fPBhWLqhAJxyKIl25Jqt8FJbIX2gvMrTLuF6VRojm6vASlhUAXwqWZcF2l%2FF&X-Amz-Signature=d0986901cf04b68f87a45f6c9ee500e5472a00fb067238b18af76fdcba9e3b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM3F4MD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrCfVCy4h9ovLBWYJgwiUpf7SCcSnxmoun%2FYcLWB5fFAiEAoXeBtfk7Vt0VSjrwZHFe9a%2FxJ6Ero144aTHy3tJ0XJIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN71FHzexFqGxmBd%2BircA9tq6gjEzlcnW%2Fzp9RKkprN9n68DyFx2qyn6kt5HiYyvHfJrgezgE6f8z2l%2FTOzFStb%2BByGdivX0ovvZp%2BZRQxtAq0rXhXukUB7aCu9EPsLZgrRm3V%2FT%2F213KVjSqUnAy8nl290VX5aeYsfYIPOej68p7dFUjaPjyzn2rJP08LkBQKy5pqoQFRs1Irinqm2Sja2Q4enLrHY9naja0er7OzG7K0jUMp7Xc1EjhvDO5zj8gy%2BwWtFaOgak815K3foPAmG56U%2BoTD6ifDGB388mMUKgNIIxVRISJ1c9Pi0eKHk4G6wxlrDSI0wvhFrNaEYA4ydxMue9YvVAwPgeqEWZTblEm%2F%2Fc4PUNf9y2eJce2sQcoWy6QX6Lx9rZXl%2BtAJ6Qfw2aGcpzguTt8WS1KQt1ZRAIHT2Oi6LjzeQUdNErGZWKzg2yejK7dRfCyyquRIEsbiHA%2Bfk5tkTpmgvZNUix59JRGlqlf08uw9MYj54n25rJD1OeWgewqwQkTnPxEevKbWrgGXPBDYGbBZdfk7QSCb3IP6Ff%2FP00bu9x%2BvdUOS9GW9k6vOBQGGr%2Ff2jZzq30P527EWggyld%2BCG6KEuLbd9crgKqRWg5y6QDDbeZUZ7oJNT8bPyVq68%2BNz%2B9mMJWy%2BrwGOqUBQm6HumGkZx%2FTYTdv6yQuRLvcj6KNEA%2FITOQUOzAOp0If8THLoBihdjPzh6gFnXzJwG4O4NUPZKEyhE%2F46WSDKfXZjs%2B6O6e5eNnFiqtPKtodhbynV%2F7ze%2Fg%2F01ZvAm5wvCk3ZKCEoBZpcyuwrpIp73ZLhMBLBP03fPBhWLqhAJxyKIl25Jqt8FJbIX2gvMrTLuF6VRojm6vASlhUAXwqWZcF2l%2FF&X-Amz-Signature=f1d9de5faa6def544a72daee89fddf4a76bf54f1277d6198d5997da15029ae5a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM3F4MD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrCfVCy4h9ovLBWYJgwiUpf7SCcSnxmoun%2FYcLWB5fFAiEAoXeBtfk7Vt0VSjrwZHFe9a%2FxJ6Ero144aTHy3tJ0XJIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN71FHzexFqGxmBd%2BircA9tq6gjEzlcnW%2Fzp9RKkprN9n68DyFx2qyn6kt5HiYyvHfJrgezgE6f8z2l%2FTOzFStb%2BByGdivX0ovvZp%2BZRQxtAq0rXhXukUB7aCu9EPsLZgrRm3V%2FT%2F213KVjSqUnAy8nl290VX5aeYsfYIPOej68p7dFUjaPjyzn2rJP08LkBQKy5pqoQFRs1Irinqm2Sja2Q4enLrHY9naja0er7OzG7K0jUMp7Xc1EjhvDO5zj8gy%2BwWtFaOgak815K3foPAmG56U%2BoTD6ifDGB388mMUKgNIIxVRISJ1c9Pi0eKHk4G6wxlrDSI0wvhFrNaEYA4ydxMue9YvVAwPgeqEWZTblEm%2F%2Fc4PUNf9y2eJce2sQcoWy6QX6Lx9rZXl%2BtAJ6Qfw2aGcpzguTt8WS1KQt1ZRAIHT2Oi6LjzeQUdNErGZWKzg2yejK7dRfCyyquRIEsbiHA%2Bfk5tkTpmgvZNUix59JRGlqlf08uw9MYj54n25rJD1OeWgewqwQkTnPxEevKbWrgGXPBDYGbBZdfk7QSCb3IP6Ff%2FP00bu9x%2BvdUOS9GW9k6vOBQGGr%2Ff2jZzq30P527EWggyld%2BCG6KEuLbd9crgKqRWg5y6QDDbeZUZ7oJNT8bPyVq68%2BNz%2B9mMJWy%2BrwGOqUBQm6HumGkZx%2FTYTdv6yQuRLvcj6KNEA%2FITOQUOzAOp0If8THLoBihdjPzh6gFnXzJwG4O4NUPZKEyhE%2F46WSDKfXZjs%2B6O6e5eNnFiqtPKtodhbynV%2F7ze%2Fg%2F01ZvAm5wvCk3ZKCEoBZpcyuwrpIp73ZLhMBLBP03fPBhWLqhAJxyKIl25Jqt8FJbIX2gvMrTLuF6VRojm6vASlhUAXwqWZcF2l%2FF&X-Amz-Signature=60422738e15057f779d4d38dcfa23125d39911fca0101f4808e400af875aecd5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM3F4MD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrCfVCy4h9ovLBWYJgwiUpf7SCcSnxmoun%2FYcLWB5fFAiEAoXeBtfk7Vt0VSjrwZHFe9a%2FxJ6Ero144aTHy3tJ0XJIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN71FHzexFqGxmBd%2BircA9tq6gjEzlcnW%2Fzp9RKkprN9n68DyFx2qyn6kt5HiYyvHfJrgezgE6f8z2l%2FTOzFStb%2BByGdivX0ovvZp%2BZRQxtAq0rXhXukUB7aCu9EPsLZgrRm3V%2FT%2F213KVjSqUnAy8nl290VX5aeYsfYIPOej68p7dFUjaPjyzn2rJP08LkBQKy5pqoQFRs1Irinqm2Sja2Q4enLrHY9naja0er7OzG7K0jUMp7Xc1EjhvDO5zj8gy%2BwWtFaOgak815K3foPAmG56U%2BoTD6ifDGB388mMUKgNIIxVRISJ1c9Pi0eKHk4G6wxlrDSI0wvhFrNaEYA4ydxMue9YvVAwPgeqEWZTblEm%2F%2Fc4PUNf9y2eJce2sQcoWy6QX6Lx9rZXl%2BtAJ6Qfw2aGcpzguTt8WS1KQt1ZRAIHT2Oi6LjzeQUdNErGZWKzg2yejK7dRfCyyquRIEsbiHA%2Bfk5tkTpmgvZNUix59JRGlqlf08uw9MYj54n25rJD1OeWgewqwQkTnPxEevKbWrgGXPBDYGbBZdfk7QSCb3IP6Ff%2FP00bu9x%2BvdUOS9GW9k6vOBQGGr%2Ff2jZzq30P527EWggyld%2BCG6KEuLbd9crgKqRWg5y6QDDbeZUZ7oJNT8bPyVq68%2BNz%2B9mMJWy%2BrwGOqUBQm6HumGkZx%2FTYTdv6yQuRLvcj6KNEA%2FITOQUOzAOp0If8THLoBihdjPzh6gFnXzJwG4O4NUPZKEyhE%2F46WSDKfXZjs%2B6O6e5eNnFiqtPKtodhbynV%2F7ze%2Fg%2F01ZvAm5wvCk3ZKCEoBZpcyuwrpIp73ZLhMBLBP03fPBhWLqhAJxyKIl25Jqt8FJbIX2gvMrTLuF6VRojm6vASlhUAXwqWZcF2l%2FF&X-Amz-Signature=7c95d8d9eb1bce302f6facf387061da61c9db0ebd55d2d75f616571c4c228897&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM3F4MD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrCfVCy4h9ovLBWYJgwiUpf7SCcSnxmoun%2FYcLWB5fFAiEAoXeBtfk7Vt0VSjrwZHFe9a%2FxJ6Ero144aTHy3tJ0XJIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN71FHzexFqGxmBd%2BircA9tq6gjEzlcnW%2Fzp9RKkprN9n68DyFx2qyn6kt5HiYyvHfJrgezgE6f8z2l%2FTOzFStb%2BByGdivX0ovvZp%2BZRQxtAq0rXhXukUB7aCu9EPsLZgrRm3V%2FT%2F213KVjSqUnAy8nl290VX5aeYsfYIPOej68p7dFUjaPjyzn2rJP08LkBQKy5pqoQFRs1Irinqm2Sja2Q4enLrHY9naja0er7OzG7K0jUMp7Xc1EjhvDO5zj8gy%2BwWtFaOgak815K3foPAmG56U%2BoTD6ifDGB388mMUKgNIIxVRISJ1c9Pi0eKHk4G6wxlrDSI0wvhFrNaEYA4ydxMue9YvVAwPgeqEWZTblEm%2F%2Fc4PUNf9y2eJce2sQcoWy6QX6Lx9rZXl%2BtAJ6Qfw2aGcpzguTt8WS1KQt1ZRAIHT2Oi6LjzeQUdNErGZWKzg2yejK7dRfCyyquRIEsbiHA%2Bfk5tkTpmgvZNUix59JRGlqlf08uw9MYj54n25rJD1OeWgewqwQkTnPxEevKbWrgGXPBDYGbBZdfk7QSCb3IP6Ff%2FP00bu9x%2BvdUOS9GW9k6vOBQGGr%2Ff2jZzq30P527EWggyld%2BCG6KEuLbd9crgKqRWg5y6QDDbeZUZ7oJNT8bPyVq68%2BNz%2B9mMJWy%2BrwGOqUBQm6HumGkZx%2FTYTdv6yQuRLvcj6KNEA%2FITOQUOzAOp0If8THLoBihdjPzh6gFnXzJwG4O4NUPZKEyhE%2F46WSDKfXZjs%2B6O6e5eNnFiqtPKtodhbynV%2F7ze%2Fg%2F01ZvAm5wvCk3ZKCEoBZpcyuwrpIp73ZLhMBLBP03fPBhWLqhAJxyKIl25Jqt8FJbIX2gvMrTLuF6VRojm6vASlhUAXwqWZcF2l%2FF&X-Amz-Signature=11e7da0645c1cfe4dee49a8b7a88573844e9399017322f95851910a9eb29aeaa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

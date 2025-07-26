---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=17ee1ab3c40c85157396bc426c661ed0c174f6d644b3610c8ef8d2c73ac7a30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=ca82705207bcbe20bdbf9b0a1bb133cc505f79b8110dcf2dc2fcef42d83e13df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=b367fa50bde0b912f0caa59b0cffe2a8eb17eb65d296d863d4cfc21793270ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=89d2f623f6f6ceaf56ee1033ca0e25372fb3e00a28e9a4053cc71a51678ed357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=5a2d238ae4c8eb25eedceada94155346d20c9ebb22639e495c99b2f49b37b577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=7370fcef840bce4e831ceda2be7d53d452546c7136896f1f81d3b223e82414bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=5102c358e9ba84497e87725ee40541a647946a9ea088bbb9c14c7dab411bbf91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

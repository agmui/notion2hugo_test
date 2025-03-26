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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64A54RM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfQ5b83LJ9FtrRohnmGU7ZL%2F2DIJ9oeiETToSftqW9kgIgaRQrgXOcPVYK0VorLjGdMDKGAzmeNTurcFKOmHqA184q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDN%2B1YQsTzvSwJ5vN1ircA6LfrVtmqmXBODXsdJGaG6qHHSZBw0xCjE3liipRXA2JSIzx1aWKa%2Fezblf1OVwUuM6FYE%2BlCnfZhf8CXJN2fgoIwFs1WhwBxLRzngudo%2BIa1%2BZKcYzx2R9lfR%2BbwFRUNwAW2AxyiPmhmfDdF92dSGuwvJ4Mw2pYc5C3iF1eZTbZ4Jox7%2BLCDbCtHbYDmLsdVdlozJ%2FGN7x4lPQDUYHVB2R3%2FCx9MgzGoSjWdZQoFapLWFd3ttQ11lXY%2Fnk82nLube%2BtGl5bVTaU4exx%2BQE8u87UD4pKknFS4MdgAbd1aPmfzRV6H75Sbu%2BY6GmUuSglo94uHsShMXU0ER7FHZbzKvGVV6Ikexy9Tp4taQKfJWaJ99%2FMEpyOQAt2dta%2BOaFK0gx9v3Mi%2BH0%2FTMBuLx6LOe99zUnClrth%2FUo81%2Bfkf%2FHva6o929MaGL5WwhikSWseX2KVyi4%2FieogDmeWYUkmv5uKtU3K7t4r1eFmjs5qYquqQ%2BQ96L3qjX73YHGZidalFTaOEY%2Fz6fVnacRa2DSNEZ77%2FODyiKKaJFVSd4JG%2BKEvO9yMwxOAE%2BEZ8DAp1wXNJapesSQns%2F%2F0oJP9Illhgf2f5xpExAkFQWHZdZcQcqcOCB%2Bn%2Fs5NawdDGYCrMNaNkr8GOqUBI%2BLQgz8OgQ7J6YN8w986EKwu1Jl316iAH4uY702yt%2Bi9dVbAsxLv4m7UypVON6dV1vsVnnXDLK5cKApLeWvV4axYpK2IlscsiXeebnV07CoN6shmlc37N5DEVKt%2Fr4mP%2Ff1SgSVECEDx%2BhtJHJIPsLAA08nN8VRhZmx7RlLaPJK%2FMzl78KMFIbc%2FqXbsS2Oi0Xh3mwibgWT9%2Be4moTo5j3dclHh8&X-Amz-Signature=12d15b7f84d1264ee92228956249f7dc6940ca057dbad213b4423b268aef71ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64A54RM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfQ5b83LJ9FtrRohnmGU7ZL%2F2DIJ9oeiETToSftqW9kgIgaRQrgXOcPVYK0VorLjGdMDKGAzmeNTurcFKOmHqA184q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDN%2B1YQsTzvSwJ5vN1ircA6LfrVtmqmXBODXsdJGaG6qHHSZBw0xCjE3liipRXA2JSIzx1aWKa%2Fezblf1OVwUuM6FYE%2BlCnfZhf8CXJN2fgoIwFs1WhwBxLRzngudo%2BIa1%2BZKcYzx2R9lfR%2BbwFRUNwAW2AxyiPmhmfDdF92dSGuwvJ4Mw2pYc5C3iF1eZTbZ4Jox7%2BLCDbCtHbYDmLsdVdlozJ%2FGN7x4lPQDUYHVB2R3%2FCx9MgzGoSjWdZQoFapLWFd3ttQ11lXY%2Fnk82nLube%2BtGl5bVTaU4exx%2BQE8u87UD4pKknFS4MdgAbd1aPmfzRV6H75Sbu%2BY6GmUuSglo94uHsShMXU0ER7FHZbzKvGVV6Ikexy9Tp4taQKfJWaJ99%2FMEpyOQAt2dta%2BOaFK0gx9v3Mi%2BH0%2FTMBuLx6LOe99zUnClrth%2FUo81%2Bfkf%2FHva6o929MaGL5WwhikSWseX2KVyi4%2FieogDmeWYUkmv5uKtU3K7t4r1eFmjs5qYquqQ%2BQ96L3qjX73YHGZidalFTaOEY%2Fz6fVnacRa2DSNEZ77%2FODyiKKaJFVSd4JG%2BKEvO9yMwxOAE%2BEZ8DAp1wXNJapesSQns%2F%2F0oJP9Illhgf2f5xpExAkFQWHZdZcQcqcOCB%2Bn%2Fs5NawdDGYCrMNaNkr8GOqUBI%2BLQgz8OgQ7J6YN8w986EKwu1Jl316iAH4uY702yt%2Bi9dVbAsxLv4m7UypVON6dV1vsVnnXDLK5cKApLeWvV4axYpK2IlscsiXeebnV07CoN6shmlc37N5DEVKt%2Fr4mP%2Ff1SgSVECEDx%2BhtJHJIPsLAA08nN8VRhZmx7RlLaPJK%2FMzl78KMFIbc%2FqXbsS2Oi0Xh3mwibgWT9%2Be4moTo5j3dclHh8&X-Amz-Signature=f1262cd422f70ac3f7dd2d4e607665c6a8d68477ea720392d5aafdd55a7cfce8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64A54RM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfQ5b83LJ9FtrRohnmGU7ZL%2F2DIJ9oeiETToSftqW9kgIgaRQrgXOcPVYK0VorLjGdMDKGAzmeNTurcFKOmHqA184q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDN%2B1YQsTzvSwJ5vN1ircA6LfrVtmqmXBODXsdJGaG6qHHSZBw0xCjE3liipRXA2JSIzx1aWKa%2Fezblf1OVwUuM6FYE%2BlCnfZhf8CXJN2fgoIwFs1WhwBxLRzngudo%2BIa1%2BZKcYzx2R9lfR%2BbwFRUNwAW2AxyiPmhmfDdF92dSGuwvJ4Mw2pYc5C3iF1eZTbZ4Jox7%2BLCDbCtHbYDmLsdVdlozJ%2FGN7x4lPQDUYHVB2R3%2FCx9MgzGoSjWdZQoFapLWFd3ttQ11lXY%2Fnk82nLube%2BtGl5bVTaU4exx%2BQE8u87UD4pKknFS4MdgAbd1aPmfzRV6H75Sbu%2BY6GmUuSglo94uHsShMXU0ER7FHZbzKvGVV6Ikexy9Tp4taQKfJWaJ99%2FMEpyOQAt2dta%2BOaFK0gx9v3Mi%2BH0%2FTMBuLx6LOe99zUnClrth%2FUo81%2Bfkf%2FHva6o929MaGL5WwhikSWseX2KVyi4%2FieogDmeWYUkmv5uKtU3K7t4r1eFmjs5qYquqQ%2BQ96L3qjX73YHGZidalFTaOEY%2Fz6fVnacRa2DSNEZ77%2FODyiKKaJFVSd4JG%2BKEvO9yMwxOAE%2BEZ8DAp1wXNJapesSQns%2F%2F0oJP9Illhgf2f5xpExAkFQWHZdZcQcqcOCB%2Bn%2Fs5NawdDGYCrMNaNkr8GOqUBI%2BLQgz8OgQ7J6YN8w986EKwu1Jl316iAH4uY702yt%2Bi9dVbAsxLv4m7UypVON6dV1vsVnnXDLK5cKApLeWvV4axYpK2IlscsiXeebnV07CoN6shmlc37N5DEVKt%2Fr4mP%2Ff1SgSVECEDx%2BhtJHJIPsLAA08nN8VRhZmx7RlLaPJK%2FMzl78KMFIbc%2FqXbsS2Oi0Xh3mwibgWT9%2Be4moTo5j3dclHh8&X-Amz-Signature=a1b07dca04d6f5c38c4be27bf725e44a88d352932d9294a304f4dcef697a26c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64A54RM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfQ5b83LJ9FtrRohnmGU7ZL%2F2DIJ9oeiETToSftqW9kgIgaRQrgXOcPVYK0VorLjGdMDKGAzmeNTurcFKOmHqA184q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDN%2B1YQsTzvSwJ5vN1ircA6LfrVtmqmXBODXsdJGaG6qHHSZBw0xCjE3liipRXA2JSIzx1aWKa%2Fezblf1OVwUuM6FYE%2BlCnfZhf8CXJN2fgoIwFs1WhwBxLRzngudo%2BIa1%2BZKcYzx2R9lfR%2BbwFRUNwAW2AxyiPmhmfDdF92dSGuwvJ4Mw2pYc5C3iF1eZTbZ4Jox7%2BLCDbCtHbYDmLsdVdlozJ%2FGN7x4lPQDUYHVB2R3%2FCx9MgzGoSjWdZQoFapLWFd3ttQ11lXY%2Fnk82nLube%2BtGl5bVTaU4exx%2BQE8u87UD4pKknFS4MdgAbd1aPmfzRV6H75Sbu%2BY6GmUuSglo94uHsShMXU0ER7FHZbzKvGVV6Ikexy9Tp4taQKfJWaJ99%2FMEpyOQAt2dta%2BOaFK0gx9v3Mi%2BH0%2FTMBuLx6LOe99zUnClrth%2FUo81%2Bfkf%2FHva6o929MaGL5WwhikSWseX2KVyi4%2FieogDmeWYUkmv5uKtU3K7t4r1eFmjs5qYquqQ%2BQ96L3qjX73YHGZidalFTaOEY%2Fz6fVnacRa2DSNEZ77%2FODyiKKaJFVSd4JG%2BKEvO9yMwxOAE%2BEZ8DAp1wXNJapesSQns%2F%2F0oJP9Illhgf2f5xpExAkFQWHZdZcQcqcOCB%2Bn%2Fs5NawdDGYCrMNaNkr8GOqUBI%2BLQgz8OgQ7J6YN8w986EKwu1Jl316iAH4uY702yt%2Bi9dVbAsxLv4m7UypVON6dV1vsVnnXDLK5cKApLeWvV4axYpK2IlscsiXeebnV07CoN6shmlc37N5DEVKt%2Fr4mP%2Ff1SgSVECEDx%2BhtJHJIPsLAA08nN8VRhZmx7RlLaPJK%2FMzl78KMFIbc%2FqXbsS2Oi0Xh3mwibgWT9%2Be4moTo5j3dclHh8&X-Amz-Signature=9f1c3dee67d72ea86e80911a919f4d0df34f6684acad44d9b700f153729bebdc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64A54RM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfQ5b83LJ9FtrRohnmGU7ZL%2F2DIJ9oeiETToSftqW9kgIgaRQrgXOcPVYK0VorLjGdMDKGAzmeNTurcFKOmHqA184q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDN%2B1YQsTzvSwJ5vN1ircA6LfrVtmqmXBODXsdJGaG6qHHSZBw0xCjE3liipRXA2JSIzx1aWKa%2Fezblf1OVwUuM6FYE%2BlCnfZhf8CXJN2fgoIwFs1WhwBxLRzngudo%2BIa1%2BZKcYzx2R9lfR%2BbwFRUNwAW2AxyiPmhmfDdF92dSGuwvJ4Mw2pYc5C3iF1eZTbZ4Jox7%2BLCDbCtHbYDmLsdVdlozJ%2FGN7x4lPQDUYHVB2R3%2FCx9MgzGoSjWdZQoFapLWFd3ttQ11lXY%2Fnk82nLube%2BtGl5bVTaU4exx%2BQE8u87UD4pKknFS4MdgAbd1aPmfzRV6H75Sbu%2BY6GmUuSglo94uHsShMXU0ER7FHZbzKvGVV6Ikexy9Tp4taQKfJWaJ99%2FMEpyOQAt2dta%2BOaFK0gx9v3Mi%2BH0%2FTMBuLx6LOe99zUnClrth%2FUo81%2Bfkf%2FHva6o929MaGL5WwhikSWseX2KVyi4%2FieogDmeWYUkmv5uKtU3K7t4r1eFmjs5qYquqQ%2BQ96L3qjX73YHGZidalFTaOEY%2Fz6fVnacRa2DSNEZ77%2FODyiKKaJFVSd4JG%2BKEvO9yMwxOAE%2BEZ8DAp1wXNJapesSQns%2F%2F0oJP9Illhgf2f5xpExAkFQWHZdZcQcqcOCB%2Bn%2Fs5NawdDGYCrMNaNkr8GOqUBI%2BLQgz8OgQ7J6YN8w986EKwu1Jl316iAH4uY702yt%2Bi9dVbAsxLv4m7UypVON6dV1vsVnnXDLK5cKApLeWvV4axYpK2IlscsiXeebnV07CoN6shmlc37N5DEVKt%2Fr4mP%2Ff1SgSVECEDx%2BhtJHJIPsLAA08nN8VRhZmx7RlLaPJK%2FMzl78KMFIbc%2FqXbsS2Oi0Xh3mwibgWT9%2Be4moTo5j3dclHh8&X-Amz-Signature=a2291955361eaa327687804b3f6d8c18ed5de86e4e00db41c895d3753056e410&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64A54RM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfQ5b83LJ9FtrRohnmGU7ZL%2F2DIJ9oeiETToSftqW9kgIgaRQrgXOcPVYK0VorLjGdMDKGAzmeNTurcFKOmHqA184q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDN%2B1YQsTzvSwJ5vN1ircA6LfrVtmqmXBODXsdJGaG6qHHSZBw0xCjE3liipRXA2JSIzx1aWKa%2Fezblf1OVwUuM6FYE%2BlCnfZhf8CXJN2fgoIwFs1WhwBxLRzngudo%2BIa1%2BZKcYzx2R9lfR%2BbwFRUNwAW2AxyiPmhmfDdF92dSGuwvJ4Mw2pYc5C3iF1eZTbZ4Jox7%2BLCDbCtHbYDmLsdVdlozJ%2FGN7x4lPQDUYHVB2R3%2FCx9MgzGoSjWdZQoFapLWFd3ttQ11lXY%2Fnk82nLube%2BtGl5bVTaU4exx%2BQE8u87UD4pKknFS4MdgAbd1aPmfzRV6H75Sbu%2BY6GmUuSglo94uHsShMXU0ER7FHZbzKvGVV6Ikexy9Tp4taQKfJWaJ99%2FMEpyOQAt2dta%2BOaFK0gx9v3Mi%2BH0%2FTMBuLx6LOe99zUnClrth%2FUo81%2Bfkf%2FHva6o929MaGL5WwhikSWseX2KVyi4%2FieogDmeWYUkmv5uKtU3K7t4r1eFmjs5qYquqQ%2BQ96L3qjX73YHGZidalFTaOEY%2Fz6fVnacRa2DSNEZ77%2FODyiKKaJFVSd4JG%2BKEvO9yMwxOAE%2BEZ8DAp1wXNJapesSQns%2F%2F0oJP9Illhgf2f5xpExAkFQWHZdZcQcqcOCB%2Bn%2Fs5NawdDGYCrMNaNkr8GOqUBI%2BLQgz8OgQ7J6YN8w986EKwu1Jl316iAH4uY702yt%2Bi9dVbAsxLv4m7UypVON6dV1vsVnnXDLK5cKApLeWvV4axYpK2IlscsiXeebnV07CoN6shmlc37N5DEVKt%2Fr4mP%2Ff1SgSVECEDx%2BhtJHJIPsLAA08nN8VRhZmx7RlLaPJK%2FMzl78KMFIbc%2FqXbsS2Oi0Xh3mwibgWT9%2Be4moTo5j3dclHh8&X-Amz-Signature=c1c92c948ef580bf832ccd545d40db1e262071fe5feffb1e428e62af67a53fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64A54RM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfQ5b83LJ9FtrRohnmGU7ZL%2F2DIJ9oeiETToSftqW9kgIgaRQrgXOcPVYK0VorLjGdMDKGAzmeNTurcFKOmHqA184q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDN%2B1YQsTzvSwJ5vN1ircA6LfrVtmqmXBODXsdJGaG6qHHSZBw0xCjE3liipRXA2JSIzx1aWKa%2Fezblf1OVwUuM6FYE%2BlCnfZhf8CXJN2fgoIwFs1WhwBxLRzngudo%2BIa1%2BZKcYzx2R9lfR%2BbwFRUNwAW2AxyiPmhmfDdF92dSGuwvJ4Mw2pYc5C3iF1eZTbZ4Jox7%2BLCDbCtHbYDmLsdVdlozJ%2FGN7x4lPQDUYHVB2R3%2FCx9MgzGoSjWdZQoFapLWFd3ttQ11lXY%2Fnk82nLube%2BtGl5bVTaU4exx%2BQE8u87UD4pKknFS4MdgAbd1aPmfzRV6H75Sbu%2BY6GmUuSglo94uHsShMXU0ER7FHZbzKvGVV6Ikexy9Tp4taQKfJWaJ99%2FMEpyOQAt2dta%2BOaFK0gx9v3Mi%2BH0%2FTMBuLx6LOe99zUnClrth%2FUo81%2Bfkf%2FHva6o929MaGL5WwhikSWseX2KVyi4%2FieogDmeWYUkmv5uKtU3K7t4r1eFmjs5qYquqQ%2BQ96L3qjX73YHGZidalFTaOEY%2Fz6fVnacRa2DSNEZ77%2FODyiKKaJFVSd4JG%2BKEvO9yMwxOAE%2BEZ8DAp1wXNJapesSQns%2F%2F0oJP9Illhgf2f5xpExAkFQWHZdZcQcqcOCB%2Bn%2Fs5NawdDGYCrMNaNkr8GOqUBI%2BLQgz8OgQ7J6YN8w986EKwu1Jl316iAH4uY702yt%2Bi9dVbAsxLv4m7UypVON6dV1vsVnnXDLK5cKApLeWvV4axYpK2IlscsiXeebnV07CoN6shmlc37N5DEVKt%2Fr4mP%2Ff1SgSVECEDx%2BhtJHJIPsLAA08nN8VRhZmx7RlLaPJK%2FMzl78KMFIbc%2FqXbsS2Oi0Xh3mwibgWT9%2Be4moTo5j3dclHh8&X-Amz-Signature=2fb444ce2ce789a3f24317b13019b1d99fdf9e8261396232336b621ff8d732f4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPZHCCI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAUfdJcPTIJRfZZUdP13vYQdps3r%2FBHrRWISYANBNabAiEApruxqUDfXIR2cPCSh4NoN%2FGfKLMuuPQEOgGTtgAdlOYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAWH3WTep2jp%2BZWlSrcA5oG7UbfS%2BdR4kJpgJIuR3%2FMJ%2BSS7ZxBFxmI6x9H2EOr85npa1%2FPeCGh6e326CkfXghwBxs5%2Bg6lnFblV5wmLPIV1rlPWYurTYqmJpfo%2B6pUt4mhXXbtEkBSQiMLuTuA5fcR57qQgMMZZpVOGGEa58neEfRhvkiNFeBOcyhr%2B4%2F8YvE3wbrVLhbYjODfX5KDWgnB%2B4mn7tOYtfTNeFKFFXixSsky856UI%2F%2Buj%2FoRjOvvfv4rysX4StryYBvh%2FUtoyrXPGzuTG3YKJNZZknhDOjdcWMgRWtCc%2B80LLugn05S2tJBu8K1a11o0xxXO3lEZtNHJzCghYVA0TKoF%2F0OBqsja73MYABDKiBVq7Wf819O%2BEx%2BW2OwQhXAoPUlgURVzF%2BGgT%2BCHJyW6KcZFb4uxle8NAh2j8z4eq4uejFwFYdW6Qbtgb7aWAKNyYls9H0cs2MjODylIL116UIuUjxusxEboOmejfNdaYmK3TXLpM%2BSG4jlzClS3UyGrCBaVcon10mv84ns3XNhw68XQu4shqyPaBX1TzngPtN5PCZ4i8dMpxnBOltSjeohrtPgVafdn2Wc0D%2FsgHifhpC5FEq1OTrWkRVD4CyPZdkskDTeKHDLcHfuFArepaVFa1LGjMOTHrsEGOqUBxLUEGqyPzk54283ztIMVILDNd1LRIBXSOQ30af%2BrSaMPQvAkNm4P0NFeJ1FjHeX3ITTmhopkJLf5pHjrllFTA3FTnEBAOcdHV8uFUMleN%2BHjEwc05%2FNjHHH6kkfuEFVi8jZmJzXGxMWsEw%2FvkViB%2By9cX1RYkQkEgi6RUXDy1cyK42ez2rZdPxl%2BaXffQwkgjlvi0rOL8vSHa5dr%2Bpn9TSoOIin3&X-Amz-Signature=45480a772ee6f5df4b6c952eca23d73dbe1f3f1fd763fb556de01bf0320cf66a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPZHCCI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAUfdJcPTIJRfZZUdP13vYQdps3r%2FBHrRWISYANBNabAiEApruxqUDfXIR2cPCSh4NoN%2FGfKLMuuPQEOgGTtgAdlOYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAWH3WTep2jp%2BZWlSrcA5oG7UbfS%2BdR4kJpgJIuR3%2FMJ%2BSS7ZxBFxmI6x9H2EOr85npa1%2FPeCGh6e326CkfXghwBxs5%2Bg6lnFblV5wmLPIV1rlPWYurTYqmJpfo%2B6pUt4mhXXbtEkBSQiMLuTuA5fcR57qQgMMZZpVOGGEa58neEfRhvkiNFeBOcyhr%2B4%2F8YvE3wbrVLhbYjODfX5KDWgnB%2B4mn7tOYtfTNeFKFFXixSsky856UI%2F%2Buj%2FoRjOvvfv4rysX4StryYBvh%2FUtoyrXPGzuTG3YKJNZZknhDOjdcWMgRWtCc%2B80LLugn05S2tJBu8K1a11o0xxXO3lEZtNHJzCghYVA0TKoF%2F0OBqsja73MYABDKiBVq7Wf819O%2BEx%2BW2OwQhXAoPUlgURVzF%2BGgT%2BCHJyW6KcZFb4uxle8NAh2j8z4eq4uejFwFYdW6Qbtgb7aWAKNyYls9H0cs2MjODylIL116UIuUjxusxEboOmejfNdaYmK3TXLpM%2BSG4jlzClS3UyGrCBaVcon10mv84ns3XNhw68XQu4shqyPaBX1TzngPtN5PCZ4i8dMpxnBOltSjeohrtPgVafdn2Wc0D%2FsgHifhpC5FEq1OTrWkRVD4CyPZdkskDTeKHDLcHfuFArepaVFa1LGjMOTHrsEGOqUBxLUEGqyPzk54283ztIMVILDNd1LRIBXSOQ30af%2BrSaMPQvAkNm4P0NFeJ1FjHeX3ITTmhopkJLf5pHjrllFTA3FTnEBAOcdHV8uFUMleN%2BHjEwc05%2FNjHHH6kkfuEFVi8jZmJzXGxMWsEw%2FvkViB%2By9cX1RYkQkEgi6RUXDy1cyK42ez2rZdPxl%2BaXffQwkgjlvi0rOL8vSHa5dr%2Bpn9TSoOIin3&X-Amz-Signature=56a6e47b5e831407070aa6f5a9c9b9c54a3d6533e4e1b3f2af82cf998b0c4a99&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPZHCCI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAUfdJcPTIJRfZZUdP13vYQdps3r%2FBHrRWISYANBNabAiEApruxqUDfXIR2cPCSh4NoN%2FGfKLMuuPQEOgGTtgAdlOYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAWH3WTep2jp%2BZWlSrcA5oG7UbfS%2BdR4kJpgJIuR3%2FMJ%2BSS7ZxBFxmI6x9H2EOr85npa1%2FPeCGh6e326CkfXghwBxs5%2Bg6lnFblV5wmLPIV1rlPWYurTYqmJpfo%2B6pUt4mhXXbtEkBSQiMLuTuA5fcR57qQgMMZZpVOGGEa58neEfRhvkiNFeBOcyhr%2B4%2F8YvE3wbrVLhbYjODfX5KDWgnB%2B4mn7tOYtfTNeFKFFXixSsky856UI%2F%2Buj%2FoRjOvvfv4rysX4StryYBvh%2FUtoyrXPGzuTG3YKJNZZknhDOjdcWMgRWtCc%2B80LLugn05S2tJBu8K1a11o0xxXO3lEZtNHJzCghYVA0TKoF%2F0OBqsja73MYABDKiBVq7Wf819O%2BEx%2BW2OwQhXAoPUlgURVzF%2BGgT%2BCHJyW6KcZFb4uxle8NAh2j8z4eq4uejFwFYdW6Qbtgb7aWAKNyYls9H0cs2MjODylIL116UIuUjxusxEboOmejfNdaYmK3TXLpM%2BSG4jlzClS3UyGrCBaVcon10mv84ns3XNhw68XQu4shqyPaBX1TzngPtN5PCZ4i8dMpxnBOltSjeohrtPgVafdn2Wc0D%2FsgHifhpC5FEq1OTrWkRVD4CyPZdkskDTeKHDLcHfuFArepaVFa1LGjMOTHrsEGOqUBxLUEGqyPzk54283ztIMVILDNd1LRIBXSOQ30af%2BrSaMPQvAkNm4P0NFeJ1FjHeX3ITTmhopkJLf5pHjrllFTA3FTnEBAOcdHV8uFUMleN%2BHjEwc05%2FNjHHH6kkfuEFVi8jZmJzXGxMWsEw%2FvkViB%2By9cX1RYkQkEgi6RUXDy1cyK42ez2rZdPxl%2BaXffQwkgjlvi0rOL8vSHa5dr%2Bpn9TSoOIin3&X-Amz-Signature=7e336c4e77bffb761ad89e70d870d8fade2c88cd5e494f23f9a8039765754dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPZHCCI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAUfdJcPTIJRfZZUdP13vYQdps3r%2FBHrRWISYANBNabAiEApruxqUDfXIR2cPCSh4NoN%2FGfKLMuuPQEOgGTtgAdlOYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAWH3WTep2jp%2BZWlSrcA5oG7UbfS%2BdR4kJpgJIuR3%2FMJ%2BSS7ZxBFxmI6x9H2EOr85npa1%2FPeCGh6e326CkfXghwBxs5%2Bg6lnFblV5wmLPIV1rlPWYurTYqmJpfo%2B6pUt4mhXXbtEkBSQiMLuTuA5fcR57qQgMMZZpVOGGEa58neEfRhvkiNFeBOcyhr%2B4%2F8YvE3wbrVLhbYjODfX5KDWgnB%2B4mn7tOYtfTNeFKFFXixSsky856UI%2F%2Buj%2FoRjOvvfv4rysX4StryYBvh%2FUtoyrXPGzuTG3YKJNZZknhDOjdcWMgRWtCc%2B80LLugn05S2tJBu8K1a11o0xxXO3lEZtNHJzCghYVA0TKoF%2F0OBqsja73MYABDKiBVq7Wf819O%2BEx%2BW2OwQhXAoPUlgURVzF%2BGgT%2BCHJyW6KcZFb4uxle8NAh2j8z4eq4uejFwFYdW6Qbtgb7aWAKNyYls9H0cs2MjODylIL116UIuUjxusxEboOmejfNdaYmK3TXLpM%2BSG4jlzClS3UyGrCBaVcon10mv84ns3XNhw68XQu4shqyPaBX1TzngPtN5PCZ4i8dMpxnBOltSjeohrtPgVafdn2Wc0D%2FsgHifhpC5FEq1OTrWkRVD4CyPZdkskDTeKHDLcHfuFArepaVFa1LGjMOTHrsEGOqUBxLUEGqyPzk54283ztIMVILDNd1LRIBXSOQ30af%2BrSaMPQvAkNm4P0NFeJ1FjHeX3ITTmhopkJLf5pHjrllFTA3FTnEBAOcdHV8uFUMleN%2BHjEwc05%2FNjHHH6kkfuEFVi8jZmJzXGxMWsEw%2FvkViB%2By9cX1RYkQkEgi6RUXDy1cyK42ez2rZdPxl%2BaXffQwkgjlvi0rOL8vSHa5dr%2Bpn9TSoOIin3&X-Amz-Signature=c8f80b1d755c4b8577bee3360a7897173387014835ad6cc99604d3169179d05b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPZHCCI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAUfdJcPTIJRfZZUdP13vYQdps3r%2FBHrRWISYANBNabAiEApruxqUDfXIR2cPCSh4NoN%2FGfKLMuuPQEOgGTtgAdlOYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAWH3WTep2jp%2BZWlSrcA5oG7UbfS%2BdR4kJpgJIuR3%2FMJ%2BSS7ZxBFxmI6x9H2EOr85npa1%2FPeCGh6e326CkfXghwBxs5%2Bg6lnFblV5wmLPIV1rlPWYurTYqmJpfo%2B6pUt4mhXXbtEkBSQiMLuTuA5fcR57qQgMMZZpVOGGEa58neEfRhvkiNFeBOcyhr%2B4%2F8YvE3wbrVLhbYjODfX5KDWgnB%2B4mn7tOYtfTNeFKFFXixSsky856UI%2F%2Buj%2FoRjOvvfv4rysX4StryYBvh%2FUtoyrXPGzuTG3YKJNZZknhDOjdcWMgRWtCc%2B80LLugn05S2tJBu8K1a11o0xxXO3lEZtNHJzCghYVA0TKoF%2F0OBqsja73MYABDKiBVq7Wf819O%2BEx%2BW2OwQhXAoPUlgURVzF%2BGgT%2BCHJyW6KcZFb4uxle8NAh2j8z4eq4uejFwFYdW6Qbtgb7aWAKNyYls9H0cs2MjODylIL116UIuUjxusxEboOmejfNdaYmK3TXLpM%2BSG4jlzClS3UyGrCBaVcon10mv84ns3XNhw68XQu4shqyPaBX1TzngPtN5PCZ4i8dMpxnBOltSjeohrtPgVafdn2Wc0D%2FsgHifhpC5FEq1OTrWkRVD4CyPZdkskDTeKHDLcHfuFArepaVFa1LGjMOTHrsEGOqUBxLUEGqyPzk54283ztIMVILDNd1LRIBXSOQ30af%2BrSaMPQvAkNm4P0NFeJ1FjHeX3ITTmhopkJLf5pHjrllFTA3FTnEBAOcdHV8uFUMleN%2BHjEwc05%2FNjHHH6kkfuEFVi8jZmJzXGxMWsEw%2FvkViB%2By9cX1RYkQkEgi6RUXDy1cyK42ez2rZdPxl%2BaXffQwkgjlvi0rOL8vSHa5dr%2Bpn9TSoOIin3&X-Amz-Signature=75ca668980f1d0547d038d0a530a1a691182d49684bf338bf378a0b5da599e09&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPZHCCI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAUfdJcPTIJRfZZUdP13vYQdps3r%2FBHrRWISYANBNabAiEApruxqUDfXIR2cPCSh4NoN%2FGfKLMuuPQEOgGTtgAdlOYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAWH3WTep2jp%2BZWlSrcA5oG7UbfS%2BdR4kJpgJIuR3%2FMJ%2BSS7ZxBFxmI6x9H2EOr85npa1%2FPeCGh6e326CkfXghwBxs5%2Bg6lnFblV5wmLPIV1rlPWYurTYqmJpfo%2B6pUt4mhXXbtEkBSQiMLuTuA5fcR57qQgMMZZpVOGGEa58neEfRhvkiNFeBOcyhr%2B4%2F8YvE3wbrVLhbYjODfX5KDWgnB%2B4mn7tOYtfTNeFKFFXixSsky856UI%2F%2Buj%2FoRjOvvfv4rysX4StryYBvh%2FUtoyrXPGzuTG3YKJNZZknhDOjdcWMgRWtCc%2B80LLugn05S2tJBu8K1a11o0xxXO3lEZtNHJzCghYVA0TKoF%2F0OBqsja73MYABDKiBVq7Wf819O%2BEx%2BW2OwQhXAoPUlgURVzF%2BGgT%2BCHJyW6KcZFb4uxle8NAh2j8z4eq4uejFwFYdW6Qbtgb7aWAKNyYls9H0cs2MjODylIL116UIuUjxusxEboOmejfNdaYmK3TXLpM%2BSG4jlzClS3UyGrCBaVcon10mv84ns3XNhw68XQu4shqyPaBX1TzngPtN5PCZ4i8dMpxnBOltSjeohrtPgVafdn2Wc0D%2FsgHifhpC5FEq1OTrWkRVD4CyPZdkskDTeKHDLcHfuFArepaVFa1LGjMOTHrsEGOqUBxLUEGqyPzk54283ztIMVILDNd1LRIBXSOQ30af%2BrSaMPQvAkNm4P0NFeJ1FjHeX3ITTmhopkJLf5pHjrllFTA3FTnEBAOcdHV8uFUMleN%2BHjEwc05%2FNjHHH6kkfuEFVi8jZmJzXGxMWsEw%2FvkViB%2By9cX1RYkQkEgi6RUXDy1cyK42ez2rZdPxl%2BaXffQwkgjlvi0rOL8vSHa5dr%2Bpn9TSoOIin3&X-Amz-Signature=d9b2d032113011726a21565bab1d9a1648f2eafb38d7ced8ddf8c4d24f6f60c2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPZHCCI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAUfdJcPTIJRfZZUdP13vYQdps3r%2FBHrRWISYANBNabAiEApruxqUDfXIR2cPCSh4NoN%2FGfKLMuuPQEOgGTtgAdlOYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAWH3WTep2jp%2BZWlSrcA5oG7UbfS%2BdR4kJpgJIuR3%2FMJ%2BSS7ZxBFxmI6x9H2EOr85npa1%2FPeCGh6e326CkfXghwBxs5%2Bg6lnFblV5wmLPIV1rlPWYurTYqmJpfo%2B6pUt4mhXXbtEkBSQiMLuTuA5fcR57qQgMMZZpVOGGEa58neEfRhvkiNFeBOcyhr%2B4%2F8YvE3wbrVLhbYjODfX5KDWgnB%2B4mn7tOYtfTNeFKFFXixSsky856UI%2F%2Buj%2FoRjOvvfv4rysX4StryYBvh%2FUtoyrXPGzuTG3YKJNZZknhDOjdcWMgRWtCc%2B80LLugn05S2tJBu8K1a11o0xxXO3lEZtNHJzCghYVA0TKoF%2F0OBqsja73MYABDKiBVq7Wf819O%2BEx%2BW2OwQhXAoPUlgURVzF%2BGgT%2BCHJyW6KcZFb4uxle8NAh2j8z4eq4uejFwFYdW6Qbtgb7aWAKNyYls9H0cs2MjODylIL116UIuUjxusxEboOmejfNdaYmK3TXLpM%2BSG4jlzClS3UyGrCBaVcon10mv84ns3XNhw68XQu4shqyPaBX1TzngPtN5PCZ4i8dMpxnBOltSjeohrtPgVafdn2Wc0D%2FsgHifhpC5FEq1OTrWkRVD4CyPZdkskDTeKHDLcHfuFArepaVFa1LGjMOTHrsEGOqUBxLUEGqyPzk54283ztIMVILDNd1LRIBXSOQ30af%2BrSaMPQvAkNm4P0NFeJ1FjHeX3ITTmhopkJLf5pHjrllFTA3FTnEBAOcdHV8uFUMleN%2BHjEwc05%2FNjHHH6kkfuEFVi8jZmJzXGxMWsEw%2FvkViB%2By9cX1RYkQkEgi6RUXDy1cyK42ez2rZdPxl%2BaXffQwkgjlvi0rOL8vSHa5dr%2Bpn9TSoOIin3&X-Amz-Signature=9fd15c4b8fbb2021ec9ef6eb45bc81178ea051e43133dfcac0fd080d0df1f34a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

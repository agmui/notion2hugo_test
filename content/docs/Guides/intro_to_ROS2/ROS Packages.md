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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMIQMT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFzeYv3Jpb%2BMcEdCNV0WhY5Tbjy7kNwqlwMQVVHdnALDAiEA7T7qK29cUJEmRDo01XJ9%2Bp1b265vW74lfVVnrTSBi9oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPXjTPCsl7jqTYOmtyrcAzBHU8HHrmF2eY4CONL6RLSUwjajRIH44ZDAuR7XNGoPxCnlL4FhU8JG44kJd40hCPnFAndKsgRg8cAYNtuXp0P3BENZvPacTg2JcByj%2Fjcq4Yxj0oyY0RFCp5pCBlf5NJ3AlLpWu2M5iPINjsJX%2BbykQxC5cMwnZeMVCgnGC%2FpppDyTPmy5MEFHYRTvep%2B50vYdKGlMQY%2Fq7%2FprXsEd2AcqrXCUVuSpi8ZpjCFVmYvdny99MABBHDj3af9qj0Yo1TOqkw4uT%2BnwLXaZ0MZn2nqL6PpGZ4LpzgQeGcIL%2BEwoMbHcwXmY7SmxcBtkDUpIrpKgRmptP%2F23thXqC53I3THOoqC2LkEgmd66uHYpv3U5nyz%2FfTInNmg%2F7BUwI2fqARpJOjXNA%2BDG6Sn59yVYa5PQCVChWP9bDF3kZmOPgxXJhZP6ioZ08icom6fIvG0PjOIibp1OsDfs3l%2FktIQyhqx8TueZueP2cBNyeySvTd25aNTfS4LzLs3Fkj74WcKbjP%2FYNmflmFj7wwfUZfcCwaIjr%2Fg%2FxZP95eS8SERvx6sKqyRYalyqvTtV345hHqjuWg4BA7BEl5qJdaKRu6D4Zq7CKv2Mcc3mpncsNfkZJXcDCeXlxv%2B1GjA6zUeXMOftqsMGOqUBY9dZ8WwdgijlbuFyGg6p4qFFzqVLruA2Ac1H7gkw%2BYB4cE7edC%2B4Znp9y23T1K%2FF52Nsjby7yApSqeitvBPUl6P5cWuMXNGpmM4yit9jEkC4ViZocaUqhu79f2U4kKt6aSMv8d%2Bg89QtNXp5LEHA19U%2BAP1y8iPix1Klv5v1%2Bl7SSDdKVOh4SMJpqxJs4ECQUt%2B6Dv607hjNT0i3OHBbhAv36l84&X-Amz-Signature=cf5854d1c4d35ad316bcd6941e497565a322d697035f0930bebf9d8cde56be0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMIQMT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFzeYv3Jpb%2BMcEdCNV0WhY5Tbjy7kNwqlwMQVVHdnALDAiEA7T7qK29cUJEmRDo01XJ9%2Bp1b265vW74lfVVnrTSBi9oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPXjTPCsl7jqTYOmtyrcAzBHU8HHrmF2eY4CONL6RLSUwjajRIH44ZDAuR7XNGoPxCnlL4FhU8JG44kJd40hCPnFAndKsgRg8cAYNtuXp0P3BENZvPacTg2JcByj%2Fjcq4Yxj0oyY0RFCp5pCBlf5NJ3AlLpWu2M5iPINjsJX%2BbykQxC5cMwnZeMVCgnGC%2FpppDyTPmy5MEFHYRTvep%2B50vYdKGlMQY%2Fq7%2FprXsEd2AcqrXCUVuSpi8ZpjCFVmYvdny99MABBHDj3af9qj0Yo1TOqkw4uT%2BnwLXaZ0MZn2nqL6PpGZ4LpzgQeGcIL%2BEwoMbHcwXmY7SmxcBtkDUpIrpKgRmptP%2F23thXqC53I3THOoqC2LkEgmd66uHYpv3U5nyz%2FfTInNmg%2F7BUwI2fqARpJOjXNA%2BDG6Sn59yVYa5PQCVChWP9bDF3kZmOPgxXJhZP6ioZ08icom6fIvG0PjOIibp1OsDfs3l%2FktIQyhqx8TueZueP2cBNyeySvTd25aNTfS4LzLs3Fkj74WcKbjP%2FYNmflmFj7wwfUZfcCwaIjr%2Fg%2FxZP95eS8SERvx6sKqyRYalyqvTtV345hHqjuWg4BA7BEl5qJdaKRu6D4Zq7CKv2Mcc3mpncsNfkZJXcDCeXlxv%2B1GjA6zUeXMOftqsMGOqUBY9dZ8WwdgijlbuFyGg6p4qFFzqVLruA2Ac1H7gkw%2BYB4cE7edC%2B4Znp9y23T1K%2FF52Nsjby7yApSqeitvBPUl6P5cWuMXNGpmM4yit9jEkC4ViZocaUqhu79f2U4kKt6aSMv8d%2Bg89QtNXp5LEHA19U%2BAP1y8iPix1Klv5v1%2Bl7SSDdKVOh4SMJpqxJs4ECQUt%2B6Dv607hjNT0i3OHBbhAv36l84&X-Amz-Signature=9f14c8910b07c512b175ad96c6636f652bc7c5e94694e39040e6c0b74fccbf74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMIQMT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFzeYv3Jpb%2BMcEdCNV0WhY5Tbjy7kNwqlwMQVVHdnALDAiEA7T7qK29cUJEmRDo01XJ9%2Bp1b265vW74lfVVnrTSBi9oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPXjTPCsl7jqTYOmtyrcAzBHU8HHrmF2eY4CONL6RLSUwjajRIH44ZDAuR7XNGoPxCnlL4FhU8JG44kJd40hCPnFAndKsgRg8cAYNtuXp0P3BENZvPacTg2JcByj%2Fjcq4Yxj0oyY0RFCp5pCBlf5NJ3AlLpWu2M5iPINjsJX%2BbykQxC5cMwnZeMVCgnGC%2FpppDyTPmy5MEFHYRTvep%2B50vYdKGlMQY%2Fq7%2FprXsEd2AcqrXCUVuSpi8ZpjCFVmYvdny99MABBHDj3af9qj0Yo1TOqkw4uT%2BnwLXaZ0MZn2nqL6PpGZ4LpzgQeGcIL%2BEwoMbHcwXmY7SmxcBtkDUpIrpKgRmptP%2F23thXqC53I3THOoqC2LkEgmd66uHYpv3U5nyz%2FfTInNmg%2F7BUwI2fqARpJOjXNA%2BDG6Sn59yVYa5PQCVChWP9bDF3kZmOPgxXJhZP6ioZ08icom6fIvG0PjOIibp1OsDfs3l%2FktIQyhqx8TueZueP2cBNyeySvTd25aNTfS4LzLs3Fkj74WcKbjP%2FYNmflmFj7wwfUZfcCwaIjr%2Fg%2FxZP95eS8SERvx6sKqyRYalyqvTtV345hHqjuWg4BA7BEl5qJdaKRu6D4Zq7CKv2Mcc3mpncsNfkZJXcDCeXlxv%2B1GjA6zUeXMOftqsMGOqUBY9dZ8WwdgijlbuFyGg6p4qFFzqVLruA2Ac1H7gkw%2BYB4cE7edC%2B4Znp9y23T1K%2FF52Nsjby7yApSqeitvBPUl6P5cWuMXNGpmM4yit9jEkC4ViZocaUqhu79f2U4kKt6aSMv8d%2Bg89QtNXp5LEHA19U%2BAP1y8iPix1Klv5v1%2Bl7SSDdKVOh4SMJpqxJs4ECQUt%2B6Dv607hjNT0i3OHBbhAv36l84&X-Amz-Signature=fd2c31117d5ec08319ce6b33a54bca0475817531534b1a99443ac9c23d2e2be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMIQMT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFzeYv3Jpb%2BMcEdCNV0WhY5Tbjy7kNwqlwMQVVHdnALDAiEA7T7qK29cUJEmRDo01XJ9%2Bp1b265vW74lfVVnrTSBi9oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPXjTPCsl7jqTYOmtyrcAzBHU8HHrmF2eY4CONL6RLSUwjajRIH44ZDAuR7XNGoPxCnlL4FhU8JG44kJd40hCPnFAndKsgRg8cAYNtuXp0P3BENZvPacTg2JcByj%2Fjcq4Yxj0oyY0RFCp5pCBlf5NJ3AlLpWu2M5iPINjsJX%2BbykQxC5cMwnZeMVCgnGC%2FpppDyTPmy5MEFHYRTvep%2B50vYdKGlMQY%2Fq7%2FprXsEd2AcqrXCUVuSpi8ZpjCFVmYvdny99MABBHDj3af9qj0Yo1TOqkw4uT%2BnwLXaZ0MZn2nqL6PpGZ4LpzgQeGcIL%2BEwoMbHcwXmY7SmxcBtkDUpIrpKgRmptP%2F23thXqC53I3THOoqC2LkEgmd66uHYpv3U5nyz%2FfTInNmg%2F7BUwI2fqARpJOjXNA%2BDG6Sn59yVYa5PQCVChWP9bDF3kZmOPgxXJhZP6ioZ08icom6fIvG0PjOIibp1OsDfs3l%2FktIQyhqx8TueZueP2cBNyeySvTd25aNTfS4LzLs3Fkj74WcKbjP%2FYNmflmFj7wwfUZfcCwaIjr%2Fg%2FxZP95eS8SERvx6sKqyRYalyqvTtV345hHqjuWg4BA7BEl5qJdaKRu6D4Zq7CKv2Mcc3mpncsNfkZJXcDCeXlxv%2B1GjA6zUeXMOftqsMGOqUBY9dZ8WwdgijlbuFyGg6p4qFFzqVLruA2Ac1H7gkw%2BYB4cE7edC%2B4Znp9y23T1K%2FF52Nsjby7yApSqeitvBPUl6P5cWuMXNGpmM4yit9jEkC4ViZocaUqhu79f2U4kKt6aSMv8d%2Bg89QtNXp5LEHA19U%2BAP1y8iPix1Klv5v1%2Bl7SSDdKVOh4SMJpqxJs4ECQUt%2B6Dv607hjNT0i3OHBbhAv36l84&X-Amz-Signature=afd9208cf5af02233e3929cbfd8acb61c83b43cffe76d7142187219859063ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMIQMT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFzeYv3Jpb%2BMcEdCNV0WhY5Tbjy7kNwqlwMQVVHdnALDAiEA7T7qK29cUJEmRDo01XJ9%2Bp1b265vW74lfVVnrTSBi9oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPXjTPCsl7jqTYOmtyrcAzBHU8HHrmF2eY4CONL6RLSUwjajRIH44ZDAuR7XNGoPxCnlL4FhU8JG44kJd40hCPnFAndKsgRg8cAYNtuXp0P3BENZvPacTg2JcByj%2Fjcq4Yxj0oyY0RFCp5pCBlf5NJ3AlLpWu2M5iPINjsJX%2BbykQxC5cMwnZeMVCgnGC%2FpppDyTPmy5MEFHYRTvep%2B50vYdKGlMQY%2Fq7%2FprXsEd2AcqrXCUVuSpi8ZpjCFVmYvdny99MABBHDj3af9qj0Yo1TOqkw4uT%2BnwLXaZ0MZn2nqL6PpGZ4LpzgQeGcIL%2BEwoMbHcwXmY7SmxcBtkDUpIrpKgRmptP%2F23thXqC53I3THOoqC2LkEgmd66uHYpv3U5nyz%2FfTInNmg%2F7BUwI2fqARpJOjXNA%2BDG6Sn59yVYa5PQCVChWP9bDF3kZmOPgxXJhZP6ioZ08icom6fIvG0PjOIibp1OsDfs3l%2FktIQyhqx8TueZueP2cBNyeySvTd25aNTfS4LzLs3Fkj74WcKbjP%2FYNmflmFj7wwfUZfcCwaIjr%2Fg%2FxZP95eS8SERvx6sKqyRYalyqvTtV345hHqjuWg4BA7BEl5qJdaKRu6D4Zq7CKv2Mcc3mpncsNfkZJXcDCeXlxv%2B1GjA6zUeXMOftqsMGOqUBY9dZ8WwdgijlbuFyGg6p4qFFzqVLruA2Ac1H7gkw%2BYB4cE7edC%2B4Znp9y23T1K%2FF52Nsjby7yApSqeitvBPUl6P5cWuMXNGpmM4yit9jEkC4ViZocaUqhu79f2U4kKt6aSMv8d%2Bg89QtNXp5LEHA19U%2BAP1y8iPix1Klv5v1%2Bl7SSDdKVOh4SMJpqxJs4ECQUt%2B6Dv607hjNT0i3OHBbhAv36l84&X-Amz-Signature=e4f4612fb90eea4c93a5b996438629ed0d8e0010a8e8d374448930a90ecca32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMIQMT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFzeYv3Jpb%2BMcEdCNV0WhY5Tbjy7kNwqlwMQVVHdnALDAiEA7T7qK29cUJEmRDo01XJ9%2Bp1b265vW74lfVVnrTSBi9oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPXjTPCsl7jqTYOmtyrcAzBHU8HHrmF2eY4CONL6RLSUwjajRIH44ZDAuR7XNGoPxCnlL4FhU8JG44kJd40hCPnFAndKsgRg8cAYNtuXp0P3BENZvPacTg2JcByj%2Fjcq4Yxj0oyY0RFCp5pCBlf5NJ3AlLpWu2M5iPINjsJX%2BbykQxC5cMwnZeMVCgnGC%2FpppDyTPmy5MEFHYRTvep%2B50vYdKGlMQY%2Fq7%2FprXsEd2AcqrXCUVuSpi8ZpjCFVmYvdny99MABBHDj3af9qj0Yo1TOqkw4uT%2BnwLXaZ0MZn2nqL6PpGZ4LpzgQeGcIL%2BEwoMbHcwXmY7SmxcBtkDUpIrpKgRmptP%2F23thXqC53I3THOoqC2LkEgmd66uHYpv3U5nyz%2FfTInNmg%2F7BUwI2fqARpJOjXNA%2BDG6Sn59yVYa5PQCVChWP9bDF3kZmOPgxXJhZP6ioZ08icom6fIvG0PjOIibp1OsDfs3l%2FktIQyhqx8TueZueP2cBNyeySvTd25aNTfS4LzLs3Fkj74WcKbjP%2FYNmflmFj7wwfUZfcCwaIjr%2Fg%2FxZP95eS8SERvx6sKqyRYalyqvTtV345hHqjuWg4BA7BEl5qJdaKRu6D4Zq7CKv2Mcc3mpncsNfkZJXcDCeXlxv%2B1GjA6zUeXMOftqsMGOqUBY9dZ8WwdgijlbuFyGg6p4qFFzqVLruA2Ac1H7gkw%2BYB4cE7edC%2B4Znp9y23T1K%2FF52Nsjby7yApSqeitvBPUl6P5cWuMXNGpmM4yit9jEkC4ViZocaUqhu79f2U4kKt6aSMv8d%2Bg89QtNXp5LEHA19U%2BAP1y8iPix1Klv5v1%2Bl7SSDdKVOh4SMJpqxJs4ECQUt%2B6Dv607hjNT0i3OHBbhAv36l84&X-Amz-Signature=cd578a4c5c7ded88001b84f414f07974fdd8cfa84878df4093256ab0a5b4a7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMIQMT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFzeYv3Jpb%2BMcEdCNV0WhY5Tbjy7kNwqlwMQVVHdnALDAiEA7T7qK29cUJEmRDo01XJ9%2Bp1b265vW74lfVVnrTSBi9oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPXjTPCsl7jqTYOmtyrcAzBHU8HHrmF2eY4CONL6RLSUwjajRIH44ZDAuR7XNGoPxCnlL4FhU8JG44kJd40hCPnFAndKsgRg8cAYNtuXp0P3BENZvPacTg2JcByj%2Fjcq4Yxj0oyY0RFCp5pCBlf5NJ3AlLpWu2M5iPINjsJX%2BbykQxC5cMwnZeMVCgnGC%2FpppDyTPmy5MEFHYRTvep%2B50vYdKGlMQY%2Fq7%2FprXsEd2AcqrXCUVuSpi8ZpjCFVmYvdny99MABBHDj3af9qj0Yo1TOqkw4uT%2BnwLXaZ0MZn2nqL6PpGZ4LpzgQeGcIL%2BEwoMbHcwXmY7SmxcBtkDUpIrpKgRmptP%2F23thXqC53I3THOoqC2LkEgmd66uHYpv3U5nyz%2FfTInNmg%2F7BUwI2fqARpJOjXNA%2BDG6Sn59yVYa5PQCVChWP9bDF3kZmOPgxXJhZP6ioZ08icom6fIvG0PjOIibp1OsDfs3l%2FktIQyhqx8TueZueP2cBNyeySvTd25aNTfS4LzLs3Fkj74WcKbjP%2FYNmflmFj7wwfUZfcCwaIjr%2Fg%2FxZP95eS8SERvx6sKqyRYalyqvTtV345hHqjuWg4BA7BEl5qJdaKRu6D4Zq7CKv2Mcc3mpncsNfkZJXcDCeXlxv%2B1GjA6zUeXMOftqsMGOqUBY9dZ8WwdgijlbuFyGg6p4qFFzqVLruA2Ac1H7gkw%2BYB4cE7edC%2B4Znp9y23T1K%2FF52Nsjby7yApSqeitvBPUl6P5cWuMXNGpmM4yit9jEkC4ViZocaUqhu79f2U4kKt6aSMv8d%2Bg89QtNXp5LEHA19U%2BAP1y8iPix1Klv5v1%2Bl7SSDdKVOh4SMJpqxJs4ECQUt%2B6Dv607hjNT0i3OHBbhAv36l84&X-Amz-Signature=7879efeaf7137287f71f8cb228b8dc4db285e20e2a0857fa8b93fecf4fb7c947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

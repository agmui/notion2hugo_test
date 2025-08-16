---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24OEZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDTs2qXdAJ5%2BeIoOJGNZe11UFC%2FoV8LAdeXYVO4RLIWtAIgNFoB0Wh8sf1rjItEtCJS99kM7ItixSoRfcRY2ae3jcEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDEVnILZ54iL60bEECrcA%2Bfhij26hqAVZZ3L7T01ekQ3EB1PFIrrWLmDQcoflVb6cDsnO5j5A20jYgdsYd2tQqIMLtxyJHzmGZyKV%2BnBhUJ%2F%2BfnkIWYeIs2KDKSUWYW8fBNmZkTexLirdzk7e%2FZZ0scFjxAFNPLT1b6wKvQSguow7LRXPU%2B%2FT3nbIiUZc5NTYN2NI4R0ydaK%2Fe%2FYk2ZlXbsdCT8I1Cfl6Ckh0q6UQ%2FCmHhDlnx%2Firka%2FN80gRoS9URWkIzo38rO3rbJSGTceSkRybnAAuwnY94kcQJTWssJ6XWZZJxn9EBe%2B%2BopJ4hh%2FgXnhyHNCel1kLTibfnrFmmu%2BLu00E2VN3pIWPBxL9YSJ2M8xQvBYJKEn7Q4wxzPN9y02uuOCh8pVKEQUzNbdZOIX5TVBsLkxc7o44Is7GWwoWPFWY3TlzhassjyV7Xvx6Tmvb%2BLodvbsw8gQuIlOJIqjWUXSAtNXcv4TNByZXnv4X6ozYCf7qzalbVmLLBAckgGU6hu80xR0jgZCmKcYsTEx2UPlfaDuC8fX2Y1z2QrUpA14hg6Xprybi%2BOGvs%2BCcZo7aPw2Siif6EpB385TR197tHu7UD8lKG0KbxScQcvMM0Ik8SR7uGpouLik5v2dZlxxwOvpsv8DzXBwMOGcgsUGOqUBfvoYUjsPFjjyCQjAEWhJ%2BaOKhtXd2wG9F3gZOx35OYCX71e4nNuBWlhnugSPS6UMTuyUeV32EuTm8rdY43kENxkqWvsRU7NWRwYPt1Vvz8i38LAEW3PxzLlpRTZYZGvL4NFv3%2F2RfWyzaT1ztc0fvulp71WoVvZ8f%2BjoPsDmKOSsc9k0JAbcuwS7gRJFs38J4FbRAwvEjy1WBlom5qaJl%2BR3IG77&X-Amz-Signature=303597537eab98b8aef2d7d02db3395202bcc9f724adc7818d9fae3974bafd59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24OEZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDTs2qXdAJ5%2BeIoOJGNZe11UFC%2FoV8LAdeXYVO4RLIWtAIgNFoB0Wh8sf1rjItEtCJS99kM7ItixSoRfcRY2ae3jcEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDEVnILZ54iL60bEECrcA%2Bfhij26hqAVZZ3L7T01ekQ3EB1PFIrrWLmDQcoflVb6cDsnO5j5A20jYgdsYd2tQqIMLtxyJHzmGZyKV%2BnBhUJ%2F%2BfnkIWYeIs2KDKSUWYW8fBNmZkTexLirdzk7e%2FZZ0scFjxAFNPLT1b6wKvQSguow7LRXPU%2B%2FT3nbIiUZc5NTYN2NI4R0ydaK%2Fe%2FYk2ZlXbsdCT8I1Cfl6Ckh0q6UQ%2FCmHhDlnx%2Firka%2FN80gRoS9URWkIzo38rO3rbJSGTceSkRybnAAuwnY94kcQJTWssJ6XWZZJxn9EBe%2B%2BopJ4hh%2FgXnhyHNCel1kLTibfnrFmmu%2BLu00E2VN3pIWPBxL9YSJ2M8xQvBYJKEn7Q4wxzPN9y02uuOCh8pVKEQUzNbdZOIX5TVBsLkxc7o44Is7GWwoWPFWY3TlzhassjyV7Xvx6Tmvb%2BLodvbsw8gQuIlOJIqjWUXSAtNXcv4TNByZXnv4X6ozYCf7qzalbVmLLBAckgGU6hu80xR0jgZCmKcYsTEx2UPlfaDuC8fX2Y1z2QrUpA14hg6Xprybi%2BOGvs%2BCcZo7aPw2Siif6EpB385TR197tHu7UD8lKG0KbxScQcvMM0Ik8SR7uGpouLik5v2dZlxxwOvpsv8DzXBwMOGcgsUGOqUBfvoYUjsPFjjyCQjAEWhJ%2BaOKhtXd2wG9F3gZOx35OYCX71e4nNuBWlhnugSPS6UMTuyUeV32EuTm8rdY43kENxkqWvsRU7NWRwYPt1Vvz8i38LAEW3PxzLlpRTZYZGvL4NFv3%2F2RfWyzaT1ztc0fvulp71WoVvZ8f%2BjoPsDmKOSsc9k0JAbcuwS7gRJFs38J4FbRAwvEjy1WBlom5qaJl%2BR3IG77&X-Amz-Signature=effe162b825125089866ded4981a674bf9afd38959501e951c336973a8b4362c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24OEZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDTs2qXdAJ5%2BeIoOJGNZe11UFC%2FoV8LAdeXYVO4RLIWtAIgNFoB0Wh8sf1rjItEtCJS99kM7ItixSoRfcRY2ae3jcEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDEVnILZ54iL60bEECrcA%2Bfhij26hqAVZZ3L7T01ekQ3EB1PFIrrWLmDQcoflVb6cDsnO5j5A20jYgdsYd2tQqIMLtxyJHzmGZyKV%2BnBhUJ%2F%2BfnkIWYeIs2KDKSUWYW8fBNmZkTexLirdzk7e%2FZZ0scFjxAFNPLT1b6wKvQSguow7LRXPU%2B%2FT3nbIiUZc5NTYN2NI4R0ydaK%2Fe%2FYk2ZlXbsdCT8I1Cfl6Ckh0q6UQ%2FCmHhDlnx%2Firka%2FN80gRoS9URWkIzo38rO3rbJSGTceSkRybnAAuwnY94kcQJTWssJ6XWZZJxn9EBe%2B%2BopJ4hh%2FgXnhyHNCel1kLTibfnrFmmu%2BLu00E2VN3pIWPBxL9YSJ2M8xQvBYJKEn7Q4wxzPN9y02uuOCh8pVKEQUzNbdZOIX5TVBsLkxc7o44Is7GWwoWPFWY3TlzhassjyV7Xvx6Tmvb%2BLodvbsw8gQuIlOJIqjWUXSAtNXcv4TNByZXnv4X6ozYCf7qzalbVmLLBAckgGU6hu80xR0jgZCmKcYsTEx2UPlfaDuC8fX2Y1z2QrUpA14hg6Xprybi%2BOGvs%2BCcZo7aPw2Siif6EpB385TR197tHu7UD8lKG0KbxScQcvMM0Ik8SR7uGpouLik5v2dZlxxwOvpsv8DzXBwMOGcgsUGOqUBfvoYUjsPFjjyCQjAEWhJ%2BaOKhtXd2wG9F3gZOx35OYCX71e4nNuBWlhnugSPS6UMTuyUeV32EuTm8rdY43kENxkqWvsRU7NWRwYPt1Vvz8i38LAEW3PxzLlpRTZYZGvL4NFv3%2F2RfWyzaT1ztc0fvulp71WoVvZ8f%2BjoPsDmKOSsc9k0JAbcuwS7gRJFs38J4FbRAwvEjy1WBlom5qaJl%2BR3IG77&X-Amz-Signature=5053857ebf4f3446bf32093158e2030c4c7f4345f6a3d046293a35bb305deac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24OEZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDTs2qXdAJ5%2BeIoOJGNZe11UFC%2FoV8LAdeXYVO4RLIWtAIgNFoB0Wh8sf1rjItEtCJS99kM7ItixSoRfcRY2ae3jcEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDEVnILZ54iL60bEECrcA%2Bfhij26hqAVZZ3L7T01ekQ3EB1PFIrrWLmDQcoflVb6cDsnO5j5A20jYgdsYd2tQqIMLtxyJHzmGZyKV%2BnBhUJ%2F%2BfnkIWYeIs2KDKSUWYW8fBNmZkTexLirdzk7e%2FZZ0scFjxAFNPLT1b6wKvQSguow7LRXPU%2B%2FT3nbIiUZc5NTYN2NI4R0ydaK%2Fe%2FYk2ZlXbsdCT8I1Cfl6Ckh0q6UQ%2FCmHhDlnx%2Firka%2FN80gRoS9URWkIzo38rO3rbJSGTceSkRybnAAuwnY94kcQJTWssJ6XWZZJxn9EBe%2B%2BopJ4hh%2FgXnhyHNCel1kLTibfnrFmmu%2BLu00E2VN3pIWPBxL9YSJ2M8xQvBYJKEn7Q4wxzPN9y02uuOCh8pVKEQUzNbdZOIX5TVBsLkxc7o44Is7GWwoWPFWY3TlzhassjyV7Xvx6Tmvb%2BLodvbsw8gQuIlOJIqjWUXSAtNXcv4TNByZXnv4X6ozYCf7qzalbVmLLBAckgGU6hu80xR0jgZCmKcYsTEx2UPlfaDuC8fX2Y1z2QrUpA14hg6Xprybi%2BOGvs%2BCcZo7aPw2Siif6EpB385TR197tHu7UD8lKG0KbxScQcvMM0Ik8SR7uGpouLik5v2dZlxxwOvpsv8DzXBwMOGcgsUGOqUBfvoYUjsPFjjyCQjAEWhJ%2BaOKhtXd2wG9F3gZOx35OYCX71e4nNuBWlhnugSPS6UMTuyUeV32EuTm8rdY43kENxkqWvsRU7NWRwYPt1Vvz8i38LAEW3PxzLlpRTZYZGvL4NFv3%2F2RfWyzaT1ztc0fvulp71WoVvZ8f%2BjoPsDmKOSsc9k0JAbcuwS7gRJFs38J4FbRAwvEjy1WBlom5qaJl%2BR3IG77&X-Amz-Signature=07260a68a94e71be060edff2695850451f301452459b946b999ead7efbc0b7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24OEZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDTs2qXdAJ5%2BeIoOJGNZe11UFC%2FoV8LAdeXYVO4RLIWtAIgNFoB0Wh8sf1rjItEtCJS99kM7ItixSoRfcRY2ae3jcEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDEVnILZ54iL60bEECrcA%2Bfhij26hqAVZZ3L7T01ekQ3EB1PFIrrWLmDQcoflVb6cDsnO5j5A20jYgdsYd2tQqIMLtxyJHzmGZyKV%2BnBhUJ%2F%2BfnkIWYeIs2KDKSUWYW8fBNmZkTexLirdzk7e%2FZZ0scFjxAFNPLT1b6wKvQSguow7LRXPU%2B%2FT3nbIiUZc5NTYN2NI4R0ydaK%2Fe%2FYk2ZlXbsdCT8I1Cfl6Ckh0q6UQ%2FCmHhDlnx%2Firka%2FN80gRoS9URWkIzo38rO3rbJSGTceSkRybnAAuwnY94kcQJTWssJ6XWZZJxn9EBe%2B%2BopJ4hh%2FgXnhyHNCel1kLTibfnrFmmu%2BLu00E2VN3pIWPBxL9YSJ2M8xQvBYJKEn7Q4wxzPN9y02uuOCh8pVKEQUzNbdZOIX5TVBsLkxc7o44Is7GWwoWPFWY3TlzhassjyV7Xvx6Tmvb%2BLodvbsw8gQuIlOJIqjWUXSAtNXcv4TNByZXnv4X6ozYCf7qzalbVmLLBAckgGU6hu80xR0jgZCmKcYsTEx2UPlfaDuC8fX2Y1z2QrUpA14hg6Xprybi%2BOGvs%2BCcZo7aPw2Siif6EpB385TR197tHu7UD8lKG0KbxScQcvMM0Ik8SR7uGpouLik5v2dZlxxwOvpsv8DzXBwMOGcgsUGOqUBfvoYUjsPFjjyCQjAEWhJ%2BaOKhtXd2wG9F3gZOx35OYCX71e4nNuBWlhnugSPS6UMTuyUeV32EuTm8rdY43kENxkqWvsRU7NWRwYPt1Vvz8i38LAEW3PxzLlpRTZYZGvL4NFv3%2F2RfWyzaT1ztc0fvulp71WoVvZ8f%2BjoPsDmKOSsc9k0JAbcuwS7gRJFs38J4FbRAwvEjy1WBlom5qaJl%2BR3IG77&X-Amz-Signature=4e735f4040c87bc88398c5428ac199e0ec71bf4536e34cb58b81e7b0c1de2fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24OEZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDTs2qXdAJ5%2BeIoOJGNZe11UFC%2FoV8LAdeXYVO4RLIWtAIgNFoB0Wh8sf1rjItEtCJS99kM7ItixSoRfcRY2ae3jcEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDEVnILZ54iL60bEECrcA%2Bfhij26hqAVZZ3L7T01ekQ3EB1PFIrrWLmDQcoflVb6cDsnO5j5A20jYgdsYd2tQqIMLtxyJHzmGZyKV%2BnBhUJ%2F%2BfnkIWYeIs2KDKSUWYW8fBNmZkTexLirdzk7e%2FZZ0scFjxAFNPLT1b6wKvQSguow7LRXPU%2B%2FT3nbIiUZc5NTYN2NI4R0ydaK%2Fe%2FYk2ZlXbsdCT8I1Cfl6Ckh0q6UQ%2FCmHhDlnx%2Firka%2FN80gRoS9URWkIzo38rO3rbJSGTceSkRybnAAuwnY94kcQJTWssJ6XWZZJxn9EBe%2B%2BopJ4hh%2FgXnhyHNCel1kLTibfnrFmmu%2BLu00E2VN3pIWPBxL9YSJ2M8xQvBYJKEn7Q4wxzPN9y02uuOCh8pVKEQUzNbdZOIX5TVBsLkxc7o44Is7GWwoWPFWY3TlzhassjyV7Xvx6Tmvb%2BLodvbsw8gQuIlOJIqjWUXSAtNXcv4TNByZXnv4X6ozYCf7qzalbVmLLBAckgGU6hu80xR0jgZCmKcYsTEx2UPlfaDuC8fX2Y1z2QrUpA14hg6Xprybi%2BOGvs%2BCcZo7aPw2Siif6EpB385TR197tHu7UD8lKG0KbxScQcvMM0Ik8SR7uGpouLik5v2dZlxxwOvpsv8DzXBwMOGcgsUGOqUBfvoYUjsPFjjyCQjAEWhJ%2BaOKhtXd2wG9F3gZOx35OYCX71e4nNuBWlhnugSPS6UMTuyUeV32EuTm8rdY43kENxkqWvsRU7NWRwYPt1Vvz8i38LAEW3PxzLlpRTZYZGvL4NFv3%2F2RfWyzaT1ztc0fvulp71WoVvZ8f%2BjoPsDmKOSsc9k0JAbcuwS7gRJFs38J4FbRAwvEjy1WBlom5qaJl%2BR3IG77&X-Amz-Signature=05f1fdd2033586ae6cfe5709b6e9408ea7922b00f682f4dd1a0b8ef55e99d742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24OEZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDTs2qXdAJ5%2BeIoOJGNZe11UFC%2FoV8LAdeXYVO4RLIWtAIgNFoB0Wh8sf1rjItEtCJS99kM7ItixSoRfcRY2ae3jcEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDEVnILZ54iL60bEECrcA%2Bfhij26hqAVZZ3L7T01ekQ3EB1PFIrrWLmDQcoflVb6cDsnO5j5A20jYgdsYd2tQqIMLtxyJHzmGZyKV%2BnBhUJ%2F%2BfnkIWYeIs2KDKSUWYW8fBNmZkTexLirdzk7e%2FZZ0scFjxAFNPLT1b6wKvQSguow7LRXPU%2B%2FT3nbIiUZc5NTYN2NI4R0ydaK%2Fe%2FYk2ZlXbsdCT8I1Cfl6Ckh0q6UQ%2FCmHhDlnx%2Firka%2FN80gRoS9URWkIzo38rO3rbJSGTceSkRybnAAuwnY94kcQJTWssJ6XWZZJxn9EBe%2B%2BopJ4hh%2FgXnhyHNCel1kLTibfnrFmmu%2BLu00E2VN3pIWPBxL9YSJ2M8xQvBYJKEn7Q4wxzPN9y02uuOCh8pVKEQUzNbdZOIX5TVBsLkxc7o44Is7GWwoWPFWY3TlzhassjyV7Xvx6Tmvb%2BLodvbsw8gQuIlOJIqjWUXSAtNXcv4TNByZXnv4X6ozYCf7qzalbVmLLBAckgGU6hu80xR0jgZCmKcYsTEx2UPlfaDuC8fX2Y1z2QrUpA14hg6Xprybi%2BOGvs%2BCcZo7aPw2Siif6EpB385TR197tHu7UD8lKG0KbxScQcvMM0Ik8SR7uGpouLik5v2dZlxxwOvpsv8DzXBwMOGcgsUGOqUBfvoYUjsPFjjyCQjAEWhJ%2BaOKhtXd2wG9F3gZOx35OYCX71e4nNuBWlhnugSPS6UMTuyUeV32EuTm8rdY43kENxkqWvsRU7NWRwYPt1Vvz8i38LAEW3PxzLlpRTZYZGvL4NFv3%2F2RfWyzaT1ztc0fvulp71WoVvZ8f%2BjoPsDmKOSsc9k0JAbcuwS7gRJFs38J4FbRAwvEjy1WBlom5qaJl%2BR3IG77&X-Amz-Signature=59142257a896730c8b2b8f479e3d550a90f86f2d71341d0378173d356a5d82a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

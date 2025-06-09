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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKF6WZO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOoEsMnoTwc%2BsRIkH7rlxy%2B5n0XixkdTVqE2eWdMubdQIhAP2OWVIqQMmPfwvuOOFznvgIFPVAG9pE12U5tg3tnoGIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5ZkHdHrwxJA0aF7Iq3AOEwdguhdSYmgGCb8Q74orLJF4EAOYmmz%2FGcxSWq41FIt%2BQRJCEcabOPF4Dzn5noh%2F%2F%2B%2BnOC1VJX8LzrUv065f9zmWXisn3YBI2LYzSti6SFIJTE8LGdYtSmEDloBAoSc6errRPav0rA%2B39ufUc9TkYiNxI0SXGrEtG5Ogn3HRwywcEEjyhZ046UtHfG4MGwUJroiblCucsxj7dDAc93n6odcmBW4mUiR4A9dleDA7A4UNfsRT8IAHKUi2y5hsG9AXYLvY%2BfteRzuB8nvEgNSjvaYGbYODmXCI%2BQpncsibE3Xp9NuoTnwy%2BJpJgIFYF8OQFBsbwg9enkBGzQTYTaUL6%2FbbyEsrl07ky%2Fegq2WWxXbUsM%2BKOCBMLlrTO%2FZt9BwHZfCBtc1VRf%2FAlqRsfVipFVHQL0reBe9Q5e2wE7iLjDSA5N6yHKMbh6knZZzaAxI2xAJxu8BgA9w2CO6RT9uu%2F3b%2FJx7e%2BwVENPpMKxmC6uwTouwZWu6l8ImgR9dPRcZRbTPxNRMjUdII%2FFKGKcmn3S7TtxFEEEgZbVvCJA0spbs%2BD2cJT4Q9WU%2FEi%2FubjmasvquOTL5EoA0Q0kJ5E5BgMD7YRiZSR3yZ45N1hZ8GLZmTzoLVgmvea6vJSGjCAoprCBjqkAZg5hSmVfkrQg3MMp9Lk8KojcE8HVmNIvPy8YCfzBR8nQyhHNjQ%2F8B0ilAHGQMctwMUbSPTutl8DOA0lePdly7zGGNmBuEhrwYwUpavKyZLEZqkU5I6MNgeje1kSf2LttoK%2BuI7N%2B7THq%2F8tTH451rPdptPTPyxXcghkhadrNnDHwwFMz%2Fu4hvtBvOs6VbqGza%2B8COfNdjIL0pxXwpnukUyfTmxb&X-Amz-Signature=a51f826481133cf9a4794042afd49057847877a8bca416a4d9dbde609fc7ccb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKF6WZO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOoEsMnoTwc%2BsRIkH7rlxy%2B5n0XixkdTVqE2eWdMubdQIhAP2OWVIqQMmPfwvuOOFznvgIFPVAG9pE12U5tg3tnoGIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5ZkHdHrwxJA0aF7Iq3AOEwdguhdSYmgGCb8Q74orLJF4EAOYmmz%2FGcxSWq41FIt%2BQRJCEcabOPF4Dzn5noh%2F%2F%2B%2BnOC1VJX8LzrUv065f9zmWXisn3YBI2LYzSti6SFIJTE8LGdYtSmEDloBAoSc6errRPav0rA%2B39ufUc9TkYiNxI0SXGrEtG5Ogn3HRwywcEEjyhZ046UtHfG4MGwUJroiblCucsxj7dDAc93n6odcmBW4mUiR4A9dleDA7A4UNfsRT8IAHKUi2y5hsG9AXYLvY%2BfteRzuB8nvEgNSjvaYGbYODmXCI%2BQpncsibE3Xp9NuoTnwy%2BJpJgIFYF8OQFBsbwg9enkBGzQTYTaUL6%2FbbyEsrl07ky%2Fegq2WWxXbUsM%2BKOCBMLlrTO%2FZt9BwHZfCBtc1VRf%2FAlqRsfVipFVHQL0reBe9Q5e2wE7iLjDSA5N6yHKMbh6knZZzaAxI2xAJxu8BgA9w2CO6RT9uu%2F3b%2FJx7e%2BwVENPpMKxmC6uwTouwZWu6l8ImgR9dPRcZRbTPxNRMjUdII%2FFKGKcmn3S7TtxFEEEgZbVvCJA0spbs%2BD2cJT4Q9WU%2FEi%2FubjmasvquOTL5EoA0Q0kJ5E5BgMD7YRiZSR3yZ45N1hZ8GLZmTzoLVgmvea6vJSGjCAoprCBjqkAZg5hSmVfkrQg3MMp9Lk8KojcE8HVmNIvPy8YCfzBR8nQyhHNjQ%2F8B0ilAHGQMctwMUbSPTutl8DOA0lePdly7zGGNmBuEhrwYwUpavKyZLEZqkU5I6MNgeje1kSf2LttoK%2BuI7N%2B7THq%2F8tTH451rPdptPTPyxXcghkhadrNnDHwwFMz%2Fu4hvtBvOs6VbqGza%2B8COfNdjIL0pxXwpnukUyfTmxb&X-Amz-Signature=588d25a15feb9ec066d45917e1754927a9b56f6446d33b3d0090aeeccbc89244&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKF6WZO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOoEsMnoTwc%2BsRIkH7rlxy%2B5n0XixkdTVqE2eWdMubdQIhAP2OWVIqQMmPfwvuOOFznvgIFPVAG9pE12U5tg3tnoGIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5ZkHdHrwxJA0aF7Iq3AOEwdguhdSYmgGCb8Q74orLJF4EAOYmmz%2FGcxSWq41FIt%2BQRJCEcabOPF4Dzn5noh%2F%2F%2B%2BnOC1VJX8LzrUv065f9zmWXisn3YBI2LYzSti6SFIJTE8LGdYtSmEDloBAoSc6errRPav0rA%2B39ufUc9TkYiNxI0SXGrEtG5Ogn3HRwywcEEjyhZ046UtHfG4MGwUJroiblCucsxj7dDAc93n6odcmBW4mUiR4A9dleDA7A4UNfsRT8IAHKUi2y5hsG9AXYLvY%2BfteRzuB8nvEgNSjvaYGbYODmXCI%2BQpncsibE3Xp9NuoTnwy%2BJpJgIFYF8OQFBsbwg9enkBGzQTYTaUL6%2FbbyEsrl07ky%2Fegq2WWxXbUsM%2BKOCBMLlrTO%2FZt9BwHZfCBtc1VRf%2FAlqRsfVipFVHQL0reBe9Q5e2wE7iLjDSA5N6yHKMbh6knZZzaAxI2xAJxu8BgA9w2CO6RT9uu%2F3b%2FJx7e%2BwVENPpMKxmC6uwTouwZWu6l8ImgR9dPRcZRbTPxNRMjUdII%2FFKGKcmn3S7TtxFEEEgZbVvCJA0spbs%2BD2cJT4Q9WU%2FEi%2FubjmasvquOTL5EoA0Q0kJ5E5BgMD7YRiZSR3yZ45N1hZ8GLZmTzoLVgmvea6vJSGjCAoprCBjqkAZg5hSmVfkrQg3MMp9Lk8KojcE8HVmNIvPy8YCfzBR8nQyhHNjQ%2F8B0ilAHGQMctwMUbSPTutl8DOA0lePdly7zGGNmBuEhrwYwUpavKyZLEZqkU5I6MNgeje1kSf2LttoK%2BuI7N%2B7THq%2F8tTH451rPdptPTPyxXcghkhadrNnDHwwFMz%2Fu4hvtBvOs6VbqGza%2B8COfNdjIL0pxXwpnukUyfTmxb&X-Amz-Signature=ae25e6bffe58230b403b5294523178091e98c4ce4dc5b6a2a262f621018c7d70&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKF6WZO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOoEsMnoTwc%2BsRIkH7rlxy%2B5n0XixkdTVqE2eWdMubdQIhAP2OWVIqQMmPfwvuOOFznvgIFPVAG9pE12U5tg3tnoGIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5ZkHdHrwxJA0aF7Iq3AOEwdguhdSYmgGCb8Q74orLJF4EAOYmmz%2FGcxSWq41FIt%2BQRJCEcabOPF4Dzn5noh%2F%2F%2B%2BnOC1VJX8LzrUv065f9zmWXisn3YBI2LYzSti6SFIJTE8LGdYtSmEDloBAoSc6errRPav0rA%2B39ufUc9TkYiNxI0SXGrEtG5Ogn3HRwywcEEjyhZ046UtHfG4MGwUJroiblCucsxj7dDAc93n6odcmBW4mUiR4A9dleDA7A4UNfsRT8IAHKUi2y5hsG9AXYLvY%2BfteRzuB8nvEgNSjvaYGbYODmXCI%2BQpncsibE3Xp9NuoTnwy%2BJpJgIFYF8OQFBsbwg9enkBGzQTYTaUL6%2FbbyEsrl07ky%2Fegq2WWxXbUsM%2BKOCBMLlrTO%2FZt9BwHZfCBtc1VRf%2FAlqRsfVipFVHQL0reBe9Q5e2wE7iLjDSA5N6yHKMbh6knZZzaAxI2xAJxu8BgA9w2CO6RT9uu%2F3b%2FJx7e%2BwVENPpMKxmC6uwTouwZWu6l8ImgR9dPRcZRbTPxNRMjUdII%2FFKGKcmn3S7TtxFEEEgZbVvCJA0spbs%2BD2cJT4Q9WU%2FEi%2FubjmasvquOTL5EoA0Q0kJ5E5BgMD7YRiZSR3yZ45N1hZ8GLZmTzoLVgmvea6vJSGjCAoprCBjqkAZg5hSmVfkrQg3MMp9Lk8KojcE8HVmNIvPy8YCfzBR8nQyhHNjQ%2F8B0ilAHGQMctwMUbSPTutl8DOA0lePdly7zGGNmBuEhrwYwUpavKyZLEZqkU5I6MNgeje1kSf2LttoK%2BuI7N%2B7THq%2F8tTH451rPdptPTPyxXcghkhadrNnDHwwFMz%2Fu4hvtBvOs6VbqGza%2B8COfNdjIL0pxXwpnukUyfTmxb&X-Amz-Signature=671fc598f7e6ff3d93be877ee8ca4fa1c7e00ae59a054b5c36fc0543b0412657&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKF6WZO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOoEsMnoTwc%2BsRIkH7rlxy%2B5n0XixkdTVqE2eWdMubdQIhAP2OWVIqQMmPfwvuOOFznvgIFPVAG9pE12U5tg3tnoGIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5ZkHdHrwxJA0aF7Iq3AOEwdguhdSYmgGCb8Q74orLJF4EAOYmmz%2FGcxSWq41FIt%2BQRJCEcabOPF4Dzn5noh%2F%2F%2B%2BnOC1VJX8LzrUv065f9zmWXisn3YBI2LYzSti6SFIJTE8LGdYtSmEDloBAoSc6errRPav0rA%2B39ufUc9TkYiNxI0SXGrEtG5Ogn3HRwywcEEjyhZ046UtHfG4MGwUJroiblCucsxj7dDAc93n6odcmBW4mUiR4A9dleDA7A4UNfsRT8IAHKUi2y5hsG9AXYLvY%2BfteRzuB8nvEgNSjvaYGbYODmXCI%2BQpncsibE3Xp9NuoTnwy%2BJpJgIFYF8OQFBsbwg9enkBGzQTYTaUL6%2FbbyEsrl07ky%2Fegq2WWxXbUsM%2BKOCBMLlrTO%2FZt9BwHZfCBtc1VRf%2FAlqRsfVipFVHQL0reBe9Q5e2wE7iLjDSA5N6yHKMbh6knZZzaAxI2xAJxu8BgA9w2CO6RT9uu%2F3b%2FJx7e%2BwVENPpMKxmC6uwTouwZWu6l8ImgR9dPRcZRbTPxNRMjUdII%2FFKGKcmn3S7TtxFEEEgZbVvCJA0spbs%2BD2cJT4Q9WU%2FEi%2FubjmasvquOTL5EoA0Q0kJ5E5BgMD7YRiZSR3yZ45N1hZ8GLZmTzoLVgmvea6vJSGjCAoprCBjqkAZg5hSmVfkrQg3MMp9Lk8KojcE8HVmNIvPy8YCfzBR8nQyhHNjQ%2F8B0ilAHGQMctwMUbSPTutl8DOA0lePdly7zGGNmBuEhrwYwUpavKyZLEZqkU5I6MNgeje1kSf2LttoK%2BuI7N%2B7THq%2F8tTH451rPdptPTPyxXcghkhadrNnDHwwFMz%2Fu4hvtBvOs6VbqGza%2B8COfNdjIL0pxXwpnukUyfTmxb&X-Amz-Signature=8f1aa19b992a3ef2defd1691b7a905857a667b3dff804f3b0caa4d847a8eb3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKF6WZO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOoEsMnoTwc%2BsRIkH7rlxy%2B5n0XixkdTVqE2eWdMubdQIhAP2OWVIqQMmPfwvuOOFznvgIFPVAG9pE12U5tg3tnoGIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5ZkHdHrwxJA0aF7Iq3AOEwdguhdSYmgGCb8Q74orLJF4EAOYmmz%2FGcxSWq41FIt%2BQRJCEcabOPF4Dzn5noh%2F%2F%2B%2BnOC1VJX8LzrUv065f9zmWXisn3YBI2LYzSti6SFIJTE8LGdYtSmEDloBAoSc6errRPav0rA%2B39ufUc9TkYiNxI0SXGrEtG5Ogn3HRwywcEEjyhZ046UtHfG4MGwUJroiblCucsxj7dDAc93n6odcmBW4mUiR4A9dleDA7A4UNfsRT8IAHKUi2y5hsG9AXYLvY%2BfteRzuB8nvEgNSjvaYGbYODmXCI%2BQpncsibE3Xp9NuoTnwy%2BJpJgIFYF8OQFBsbwg9enkBGzQTYTaUL6%2FbbyEsrl07ky%2Fegq2WWxXbUsM%2BKOCBMLlrTO%2FZt9BwHZfCBtc1VRf%2FAlqRsfVipFVHQL0reBe9Q5e2wE7iLjDSA5N6yHKMbh6knZZzaAxI2xAJxu8BgA9w2CO6RT9uu%2F3b%2FJx7e%2BwVENPpMKxmC6uwTouwZWu6l8ImgR9dPRcZRbTPxNRMjUdII%2FFKGKcmn3S7TtxFEEEgZbVvCJA0spbs%2BD2cJT4Q9WU%2FEi%2FubjmasvquOTL5EoA0Q0kJ5E5BgMD7YRiZSR3yZ45N1hZ8GLZmTzoLVgmvea6vJSGjCAoprCBjqkAZg5hSmVfkrQg3MMp9Lk8KojcE8HVmNIvPy8YCfzBR8nQyhHNjQ%2F8B0ilAHGQMctwMUbSPTutl8DOA0lePdly7zGGNmBuEhrwYwUpavKyZLEZqkU5I6MNgeje1kSf2LttoK%2BuI7N%2B7THq%2F8tTH451rPdptPTPyxXcghkhadrNnDHwwFMz%2Fu4hvtBvOs6VbqGza%2B8COfNdjIL0pxXwpnukUyfTmxb&X-Amz-Signature=46924ad916544850d7c51cd1f84615e4fc04c1a80ca2c6af35c05fdb13a579e4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKF6WZO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOoEsMnoTwc%2BsRIkH7rlxy%2B5n0XixkdTVqE2eWdMubdQIhAP2OWVIqQMmPfwvuOOFznvgIFPVAG9pE12U5tg3tnoGIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5ZkHdHrwxJA0aF7Iq3AOEwdguhdSYmgGCb8Q74orLJF4EAOYmmz%2FGcxSWq41FIt%2BQRJCEcabOPF4Dzn5noh%2F%2F%2B%2BnOC1VJX8LzrUv065f9zmWXisn3YBI2LYzSti6SFIJTE8LGdYtSmEDloBAoSc6errRPav0rA%2B39ufUc9TkYiNxI0SXGrEtG5Ogn3HRwywcEEjyhZ046UtHfG4MGwUJroiblCucsxj7dDAc93n6odcmBW4mUiR4A9dleDA7A4UNfsRT8IAHKUi2y5hsG9AXYLvY%2BfteRzuB8nvEgNSjvaYGbYODmXCI%2BQpncsibE3Xp9NuoTnwy%2BJpJgIFYF8OQFBsbwg9enkBGzQTYTaUL6%2FbbyEsrl07ky%2Fegq2WWxXbUsM%2BKOCBMLlrTO%2FZt9BwHZfCBtc1VRf%2FAlqRsfVipFVHQL0reBe9Q5e2wE7iLjDSA5N6yHKMbh6knZZzaAxI2xAJxu8BgA9w2CO6RT9uu%2F3b%2FJx7e%2BwVENPpMKxmC6uwTouwZWu6l8ImgR9dPRcZRbTPxNRMjUdII%2FFKGKcmn3S7TtxFEEEgZbVvCJA0spbs%2BD2cJT4Q9WU%2FEi%2FubjmasvquOTL5EoA0Q0kJ5E5BgMD7YRiZSR3yZ45N1hZ8GLZmTzoLVgmvea6vJSGjCAoprCBjqkAZg5hSmVfkrQg3MMp9Lk8KojcE8HVmNIvPy8YCfzBR8nQyhHNjQ%2F8B0ilAHGQMctwMUbSPTutl8DOA0lePdly7zGGNmBuEhrwYwUpavKyZLEZqkU5I6MNgeje1kSf2LttoK%2BuI7N%2B7THq%2F8tTH451rPdptPTPyxXcghkhadrNnDHwwFMz%2Fu4hvtBvOs6VbqGza%2B8COfNdjIL0pxXwpnukUyfTmxb&X-Amz-Signature=9cc42223d098a91c963b69b50ea2ad001324404b51bf139f4e4092377c96b68c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

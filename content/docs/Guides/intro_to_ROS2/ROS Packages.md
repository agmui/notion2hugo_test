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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7VMUDQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETg2ztm5o4t4GYZPnPU16qDaqeMr5pdvbaXT51emOKxAiAD7XAAwHLLe4zP1WDeqJd4hhGRS3Wsc46AtgaepposUyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMvSuc4kcSJ2BV28wIKtwDCkSJBYiV1IQt0%2FiSXoXgINIm80XvLBVWSUMDmKFynDNdy6GrWIme54bTHeQ7Oo8CrJTJaUkv9%2F1r8M4eqWGkA6RAxbi8Zx5FK2zdPMFTcRE3MYa15bYL%2FQN2%2Fj%2Fnp6k%2BsPswZamsvLCRUznSxdnO6HmHW4etBkkVxd78iFalAeCIutxwzBSuC1YkeqntBsWKYeAX%2FYL91cjHHUCIakS%2Fcga7cTwEEDgyhrj%2F%2BqYWyGigCBWg%2Fu9DJ66uXSFECJ6EPzy7wkbMIPeWhB32ci0GPT0BV7ziV4O8%2FX075kywahqOO1OMmnK1RCXLCQ9RSbMzD3OGmUcK1earqn8mtP%2FZ6uz2PWP%2BwZo8c17Hlre4H85Jmmc6yzxKuWFi2Y8o366AvYLc9HzDFtol9G%2B2ZZ9WkLp3ARz6ldQOsaba%2B6ha%2Ft0j9HtyRRTfDXm6tavgqhdrPcIIT46nPSZ5tmnRU5a%2FxQXCGn6uyVe7qouBXmwvwh0C7tgz5xGDXZy7sRP%2BrFfqmc56FOG8NqaMJEZAc6ww%2BdrwuRCEsrsyqJLAGiM2AaH2QLkxaSCmlmmKcfc2d4FjoS8NpUm5zz9zQdxLRu4pkDBm5rZH359OpBkPmFIWzJsnqtr%2F28RNLCnmdYIwhp64vQY6pgFkz%2FknFByvLFbQYXCsHCSPad0MrrOZyRYWxVGwhOvbKHbBZ%2BWvYGrA48r8U4EgwcpywPUDHRfXXOyMsO9UI%2FHpC4rK9Wo8IsMTHil6wzBEjaKay0TvWiXq4WovjdiqaNtZEF6aDtPz5vdy0WPH3SNxYitBxtPM25eO5wQUij02%2BAIyehW%2BNnqoKoUzoXCfgL41IGDFztO2U00jmb3kiC1Jqt%2By3BX4&X-Amz-Signature=ea79be6fa99d575c34011f1aa83797225118ccf56cc95e9aa8cd68fa579c3e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7VMUDQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETg2ztm5o4t4GYZPnPU16qDaqeMr5pdvbaXT51emOKxAiAD7XAAwHLLe4zP1WDeqJd4hhGRS3Wsc46AtgaepposUyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMvSuc4kcSJ2BV28wIKtwDCkSJBYiV1IQt0%2FiSXoXgINIm80XvLBVWSUMDmKFynDNdy6GrWIme54bTHeQ7Oo8CrJTJaUkv9%2F1r8M4eqWGkA6RAxbi8Zx5FK2zdPMFTcRE3MYa15bYL%2FQN2%2Fj%2Fnp6k%2BsPswZamsvLCRUznSxdnO6HmHW4etBkkVxd78iFalAeCIutxwzBSuC1YkeqntBsWKYeAX%2FYL91cjHHUCIakS%2Fcga7cTwEEDgyhrj%2F%2BqYWyGigCBWg%2Fu9DJ66uXSFECJ6EPzy7wkbMIPeWhB32ci0GPT0BV7ziV4O8%2FX075kywahqOO1OMmnK1RCXLCQ9RSbMzD3OGmUcK1earqn8mtP%2FZ6uz2PWP%2BwZo8c17Hlre4H85Jmmc6yzxKuWFi2Y8o366AvYLc9HzDFtol9G%2B2ZZ9WkLp3ARz6ldQOsaba%2B6ha%2Ft0j9HtyRRTfDXm6tavgqhdrPcIIT46nPSZ5tmnRU5a%2FxQXCGn6uyVe7qouBXmwvwh0C7tgz5xGDXZy7sRP%2BrFfqmc56FOG8NqaMJEZAc6ww%2BdrwuRCEsrsyqJLAGiM2AaH2QLkxaSCmlmmKcfc2d4FjoS8NpUm5zz9zQdxLRu4pkDBm5rZH359OpBkPmFIWzJsnqtr%2F28RNLCnmdYIwhp64vQY6pgFkz%2FknFByvLFbQYXCsHCSPad0MrrOZyRYWxVGwhOvbKHbBZ%2BWvYGrA48r8U4EgwcpywPUDHRfXXOyMsO9UI%2FHpC4rK9Wo8IsMTHil6wzBEjaKay0TvWiXq4WovjdiqaNtZEF6aDtPz5vdy0WPH3SNxYitBxtPM25eO5wQUij02%2BAIyehW%2BNnqoKoUzoXCfgL41IGDFztO2U00jmb3kiC1Jqt%2By3BX4&X-Amz-Signature=77f6b5b178e1d19ef54de3ae17fd8bd931a1f60f4d186cef5344d4e842fc4ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7VMUDQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETg2ztm5o4t4GYZPnPU16qDaqeMr5pdvbaXT51emOKxAiAD7XAAwHLLe4zP1WDeqJd4hhGRS3Wsc46AtgaepposUyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMvSuc4kcSJ2BV28wIKtwDCkSJBYiV1IQt0%2FiSXoXgINIm80XvLBVWSUMDmKFynDNdy6GrWIme54bTHeQ7Oo8CrJTJaUkv9%2F1r8M4eqWGkA6RAxbi8Zx5FK2zdPMFTcRE3MYa15bYL%2FQN2%2Fj%2Fnp6k%2BsPswZamsvLCRUznSxdnO6HmHW4etBkkVxd78iFalAeCIutxwzBSuC1YkeqntBsWKYeAX%2FYL91cjHHUCIakS%2Fcga7cTwEEDgyhrj%2F%2BqYWyGigCBWg%2Fu9DJ66uXSFECJ6EPzy7wkbMIPeWhB32ci0GPT0BV7ziV4O8%2FX075kywahqOO1OMmnK1RCXLCQ9RSbMzD3OGmUcK1earqn8mtP%2FZ6uz2PWP%2BwZo8c17Hlre4H85Jmmc6yzxKuWFi2Y8o366AvYLc9HzDFtol9G%2B2ZZ9WkLp3ARz6ldQOsaba%2B6ha%2Ft0j9HtyRRTfDXm6tavgqhdrPcIIT46nPSZ5tmnRU5a%2FxQXCGn6uyVe7qouBXmwvwh0C7tgz5xGDXZy7sRP%2BrFfqmc56FOG8NqaMJEZAc6ww%2BdrwuRCEsrsyqJLAGiM2AaH2QLkxaSCmlmmKcfc2d4FjoS8NpUm5zz9zQdxLRu4pkDBm5rZH359OpBkPmFIWzJsnqtr%2F28RNLCnmdYIwhp64vQY6pgFkz%2FknFByvLFbQYXCsHCSPad0MrrOZyRYWxVGwhOvbKHbBZ%2BWvYGrA48r8U4EgwcpywPUDHRfXXOyMsO9UI%2FHpC4rK9Wo8IsMTHil6wzBEjaKay0TvWiXq4WovjdiqaNtZEF6aDtPz5vdy0WPH3SNxYitBxtPM25eO5wQUij02%2BAIyehW%2BNnqoKoUzoXCfgL41IGDFztO2U00jmb3kiC1Jqt%2By3BX4&X-Amz-Signature=b230d25aed8e8bba914f5e1fcafc6e61927ec0260cd5e14fc6699e54e882a9a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7VMUDQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETg2ztm5o4t4GYZPnPU16qDaqeMr5pdvbaXT51emOKxAiAD7XAAwHLLe4zP1WDeqJd4hhGRS3Wsc46AtgaepposUyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMvSuc4kcSJ2BV28wIKtwDCkSJBYiV1IQt0%2FiSXoXgINIm80XvLBVWSUMDmKFynDNdy6GrWIme54bTHeQ7Oo8CrJTJaUkv9%2F1r8M4eqWGkA6RAxbi8Zx5FK2zdPMFTcRE3MYa15bYL%2FQN2%2Fj%2Fnp6k%2BsPswZamsvLCRUznSxdnO6HmHW4etBkkVxd78iFalAeCIutxwzBSuC1YkeqntBsWKYeAX%2FYL91cjHHUCIakS%2Fcga7cTwEEDgyhrj%2F%2BqYWyGigCBWg%2Fu9DJ66uXSFECJ6EPzy7wkbMIPeWhB32ci0GPT0BV7ziV4O8%2FX075kywahqOO1OMmnK1RCXLCQ9RSbMzD3OGmUcK1earqn8mtP%2FZ6uz2PWP%2BwZo8c17Hlre4H85Jmmc6yzxKuWFi2Y8o366AvYLc9HzDFtol9G%2B2ZZ9WkLp3ARz6ldQOsaba%2B6ha%2Ft0j9HtyRRTfDXm6tavgqhdrPcIIT46nPSZ5tmnRU5a%2FxQXCGn6uyVe7qouBXmwvwh0C7tgz5xGDXZy7sRP%2BrFfqmc56FOG8NqaMJEZAc6ww%2BdrwuRCEsrsyqJLAGiM2AaH2QLkxaSCmlmmKcfc2d4FjoS8NpUm5zz9zQdxLRu4pkDBm5rZH359OpBkPmFIWzJsnqtr%2F28RNLCnmdYIwhp64vQY6pgFkz%2FknFByvLFbQYXCsHCSPad0MrrOZyRYWxVGwhOvbKHbBZ%2BWvYGrA48r8U4EgwcpywPUDHRfXXOyMsO9UI%2FHpC4rK9Wo8IsMTHil6wzBEjaKay0TvWiXq4WovjdiqaNtZEF6aDtPz5vdy0WPH3SNxYitBxtPM25eO5wQUij02%2BAIyehW%2BNnqoKoUzoXCfgL41IGDFztO2U00jmb3kiC1Jqt%2By3BX4&X-Amz-Signature=2fdae76642f06742b77610ef47a3fa3173f8c5f633023b9bb8752b3526f2d5fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7VMUDQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETg2ztm5o4t4GYZPnPU16qDaqeMr5pdvbaXT51emOKxAiAD7XAAwHLLe4zP1WDeqJd4hhGRS3Wsc46AtgaepposUyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMvSuc4kcSJ2BV28wIKtwDCkSJBYiV1IQt0%2FiSXoXgINIm80XvLBVWSUMDmKFynDNdy6GrWIme54bTHeQ7Oo8CrJTJaUkv9%2F1r8M4eqWGkA6RAxbi8Zx5FK2zdPMFTcRE3MYa15bYL%2FQN2%2Fj%2Fnp6k%2BsPswZamsvLCRUznSxdnO6HmHW4etBkkVxd78iFalAeCIutxwzBSuC1YkeqntBsWKYeAX%2FYL91cjHHUCIakS%2Fcga7cTwEEDgyhrj%2F%2BqYWyGigCBWg%2Fu9DJ66uXSFECJ6EPzy7wkbMIPeWhB32ci0GPT0BV7ziV4O8%2FX075kywahqOO1OMmnK1RCXLCQ9RSbMzD3OGmUcK1earqn8mtP%2FZ6uz2PWP%2BwZo8c17Hlre4H85Jmmc6yzxKuWFi2Y8o366AvYLc9HzDFtol9G%2B2ZZ9WkLp3ARz6ldQOsaba%2B6ha%2Ft0j9HtyRRTfDXm6tavgqhdrPcIIT46nPSZ5tmnRU5a%2FxQXCGn6uyVe7qouBXmwvwh0C7tgz5xGDXZy7sRP%2BrFfqmc56FOG8NqaMJEZAc6ww%2BdrwuRCEsrsyqJLAGiM2AaH2QLkxaSCmlmmKcfc2d4FjoS8NpUm5zz9zQdxLRu4pkDBm5rZH359OpBkPmFIWzJsnqtr%2F28RNLCnmdYIwhp64vQY6pgFkz%2FknFByvLFbQYXCsHCSPad0MrrOZyRYWxVGwhOvbKHbBZ%2BWvYGrA48r8U4EgwcpywPUDHRfXXOyMsO9UI%2FHpC4rK9Wo8IsMTHil6wzBEjaKay0TvWiXq4WovjdiqaNtZEF6aDtPz5vdy0WPH3SNxYitBxtPM25eO5wQUij02%2BAIyehW%2BNnqoKoUzoXCfgL41IGDFztO2U00jmb3kiC1Jqt%2By3BX4&X-Amz-Signature=c077bcdda41073166442357130189dc6d9095e3728cf35c64d75a2b3fd344f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7VMUDQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETg2ztm5o4t4GYZPnPU16qDaqeMr5pdvbaXT51emOKxAiAD7XAAwHLLe4zP1WDeqJd4hhGRS3Wsc46AtgaepposUyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMvSuc4kcSJ2BV28wIKtwDCkSJBYiV1IQt0%2FiSXoXgINIm80XvLBVWSUMDmKFynDNdy6GrWIme54bTHeQ7Oo8CrJTJaUkv9%2F1r8M4eqWGkA6RAxbi8Zx5FK2zdPMFTcRE3MYa15bYL%2FQN2%2Fj%2Fnp6k%2BsPswZamsvLCRUznSxdnO6HmHW4etBkkVxd78iFalAeCIutxwzBSuC1YkeqntBsWKYeAX%2FYL91cjHHUCIakS%2Fcga7cTwEEDgyhrj%2F%2BqYWyGigCBWg%2Fu9DJ66uXSFECJ6EPzy7wkbMIPeWhB32ci0GPT0BV7ziV4O8%2FX075kywahqOO1OMmnK1RCXLCQ9RSbMzD3OGmUcK1earqn8mtP%2FZ6uz2PWP%2BwZo8c17Hlre4H85Jmmc6yzxKuWFi2Y8o366AvYLc9HzDFtol9G%2B2ZZ9WkLp3ARz6ldQOsaba%2B6ha%2Ft0j9HtyRRTfDXm6tavgqhdrPcIIT46nPSZ5tmnRU5a%2FxQXCGn6uyVe7qouBXmwvwh0C7tgz5xGDXZy7sRP%2BrFfqmc56FOG8NqaMJEZAc6ww%2BdrwuRCEsrsyqJLAGiM2AaH2QLkxaSCmlmmKcfc2d4FjoS8NpUm5zz9zQdxLRu4pkDBm5rZH359OpBkPmFIWzJsnqtr%2F28RNLCnmdYIwhp64vQY6pgFkz%2FknFByvLFbQYXCsHCSPad0MrrOZyRYWxVGwhOvbKHbBZ%2BWvYGrA48r8U4EgwcpywPUDHRfXXOyMsO9UI%2FHpC4rK9Wo8IsMTHil6wzBEjaKay0TvWiXq4WovjdiqaNtZEF6aDtPz5vdy0WPH3SNxYitBxtPM25eO5wQUij02%2BAIyehW%2BNnqoKoUzoXCfgL41IGDFztO2U00jmb3kiC1Jqt%2By3BX4&X-Amz-Signature=2ea984bc108fec11b34b93a19a690f1b78e16ba886bb9ed3c12b991e7cb43769&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7VMUDQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETg2ztm5o4t4GYZPnPU16qDaqeMr5pdvbaXT51emOKxAiAD7XAAwHLLe4zP1WDeqJd4hhGRS3Wsc46AtgaepposUyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMvSuc4kcSJ2BV28wIKtwDCkSJBYiV1IQt0%2FiSXoXgINIm80XvLBVWSUMDmKFynDNdy6GrWIme54bTHeQ7Oo8CrJTJaUkv9%2F1r8M4eqWGkA6RAxbi8Zx5FK2zdPMFTcRE3MYa15bYL%2FQN2%2Fj%2Fnp6k%2BsPswZamsvLCRUznSxdnO6HmHW4etBkkVxd78iFalAeCIutxwzBSuC1YkeqntBsWKYeAX%2FYL91cjHHUCIakS%2Fcga7cTwEEDgyhrj%2F%2BqYWyGigCBWg%2Fu9DJ66uXSFECJ6EPzy7wkbMIPeWhB32ci0GPT0BV7ziV4O8%2FX075kywahqOO1OMmnK1RCXLCQ9RSbMzD3OGmUcK1earqn8mtP%2FZ6uz2PWP%2BwZo8c17Hlre4H85Jmmc6yzxKuWFi2Y8o366AvYLc9HzDFtol9G%2B2ZZ9WkLp3ARz6ldQOsaba%2B6ha%2Ft0j9HtyRRTfDXm6tavgqhdrPcIIT46nPSZ5tmnRU5a%2FxQXCGn6uyVe7qouBXmwvwh0C7tgz5xGDXZy7sRP%2BrFfqmc56FOG8NqaMJEZAc6ww%2BdrwuRCEsrsyqJLAGiM2AaH2QLkxaSCmlmmKcfc2d4FjoS8NpUm5zz9zQdxLRu4pkDBm5rZH359OpBkPmFIWzJsnqtr%2F28RNLCnmdYIwhp64vQY6pgFkz%2FknFByvLFbQYXCsHCSPad0MrrOZyRYWxVGwhOvbKHbBZ%2BWvYGrA48r8U4EgwcpywPUDHRfXXOyMsO9UI%2FHpC4rK9Wo8IsMTHil6wzBEjaKay0TvWiXq4WovjdiqaNtZEF6aDtPz5vdy0WPH3SNxYitBxtPM25eO5wQUij02%2BAIyehW%2BNnqoKoUzoXCfgL41IGDFztO2U00jmb3kiC1Jqt%2By3BX4&X-Amz-Signature=5f37760a7182822db8fafaebac3d7807d9b06cd85184925753d8a9ca322a55b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

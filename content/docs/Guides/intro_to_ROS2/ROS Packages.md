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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLSRAFI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAzJlsm%2BMAU9RmcGDsFRJYjzEcMUOQGWUajk3W1bWIgdAiEA4P%2BCQnpZkTCt1TtiIJIn8GseB2BNG%2FOK1sTPAB99YDQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAUSorFjaJ6qkfPHYircA3f69oxIaYqkHgiWPfGNGHfUTC55eRfpRuJPSL6ZGPmtgAGhRXYwVoTTrePXzixTeqcIaL2A1Uvv6JxRaHRWjG48xAyvah2sJotojD4no3FTAgihjzFXbEbZAeD6Sakaalbf9zjcmsIAahtvdDkUQ5qZuAXmoS8a%2BpQHd2yXJIM7%2BnvgteQRijjYNbASG8HU5171j7g%2F%2B0a1LChMsWXRv1Ss3kBIwf3%2BaxiTtGp4kMk21kBGqony4HsyOmCP2%2Bn4jE%2BlVcad1YdFNO94%2FX9Y7cb0OQi%2B8K1IQFTp09%2BlvaJ2AUZxuszzCgg213c3VRGoyKuvDv70eyphXMVq8JSYY8BjoEoMEu1tVmE64VJdnoxK6090kSIZdyNNLDJhCwVcBOFNvteiyGmMY1ovcSEFgVyWzwHsGHnH1KrIV4GDbblF1W7M5GSH5kj%2FN6esFCV7jDW%2F1u8caWdpl3THrSN8Jz5gBiHly7J37sTqBX0FuRwM4zH80SdNsSBRnTUDe7aks9wqY6mQK7u0YbZ6SX2yb9B%2F2VFOXv4bH0EhOv1Fx9vesBITuCf6Uu1ccD13gpiRyg4e9A%2BUWm9%2F1SGSP4juqHed5FxPbD1JG9OGh8ZSTwVFnNsh86%2FLhD36b3zgMM3qzsQGOqUB3e1mYJileZhG6gICTx8DArzJL2ALZJcdwYXdF09IhFRYCc68V2p1Qtw6iHxp6Y%2FO4%2FiTkvC2agomRnrMORjaDX7z1mITqaff8cKGvmPmKf576n8G2S6IVJlNbtGx3qAkFYjhQGXgKnNCuieDS5hqHT8CEOMtB694jJKT70uO0uy5I8gLYXpsdVLCG%2FyEJwoTGecmKMOKpY9YV%2FI%2BCK7wU9OAbqqc&X-Amz-Signature=3a90b5fb8c72e247c1c81e6d944893a61779c2ee4a31728a6164d43282f5e33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLSRAFI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAzJlsm%2BMAU9RmcGDsFRJYjzEcMUOQGWUajk3W1bWIgdAiEA4P%2BCQnpZkTCt1TtiIJIn8GseB2BNG%2FOK1sTPAB99YDQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAUSorFjaJ6qkfPHYircA3f69oxIaYqkHgiWPfGNGHfUTC55eRfpRuJPSL6ZGPmtgAGhRXYwVoTTrePXzixTeqcIaL2A1Uvv6JxRaHRWjG48xAyvah2sJotojD4no3FTAgihjzFXbEbZAeD6Sakaalbf9zjcmsIAahtvdDkUQ5qZuAXmoS8a%2BpQHd2yXJIM7%2BnvgteQRijjYNbASG8HU5171j7g%2F%2B0a1LChMsWXRv1Ss3kBIwf3%2BaxiTtGp4kMk21kBGqony4HsyOmCP2%2Bn4jE%2BlVcad1YdFNO94%2FX9Y7cb0OQi%2B8K1IQFTp09%2BlvaJ2AUZxuszzCgg213c3VRGoyKuvDv70eyphXMVq8JSYY8BjoEoMEu1tVmE64VJdnoxK6090kSIZdyNNLDJhCwVcBOFNvteiyGmMY1ovcSEFgVyWzwHsGHnH1KrIV4GDbblF1W7M5GSH5kj%2FN6esFCV7jDW%2F1u8caWdpl3THrSN8Jz5gBiHly7J37sTqBX0FuRwM4zH80SdNsSBRnTUDe7aks9wqY6mQK7u0YbZ6SX2yb9B%2F2VFOXv4bH0EhOv1Fx9vesBITuCf6Uu1ccD13gpiRyg4e9A%2BUWm9%2F1SGSP4juqHed5FxPbD1JG9OGh8ZSTwVFnNsh86%2FLhD36b3zgMM3qzsQGOqUB3e1mYJileZhG6gICTx8DArzJL2ALZJcdwYXdF09IhFRYCc68V2p1Qtw6iHxp6Y%2FO4%2FiTkvC2agomRnrMORjaDX7z1mITqaff8cKGvmPmKf576n8G2S6IVJlNbtGx3qAkFYjhQGXgKnNCuieDS5hqHT8CEOMtB694jJKT70uO0uy5I8gLYXpsdVLCG%2FyEJwoTGecmKMOKpY9YV%2FI%2BCK7wU9OAbqqc&X-Amz-Signature=b9f7e8e0211b5bbe1060af07b268838d3d26478af0f5be32a7a66bec9c52b60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLSRAFI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAzJlsm%2BMAU9RmcGDsFRJYjzEcMUOQGWUajk3W1bWIgdAiEA4P%2BCQnpZkTCt1TtiIJIn8GseB2BNG%2FOK1sTPAB99YDQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAUSorFjaJ6qkfPHYircA3f69oxIaYqkHgiWPfGNGHfUTC55eRfpRuJPSL6ZGPmtgAGhRXYwVoTTrePXzixTeqcIaL2A1Uvv6JxRaHRWjG48xAyvah2sJotojD4no3FTAgihjzFXbEbZAeD6Sakaalbf9zjcmsIAahtvdDkUQ5qZuAXmoS8a%2BpQHd2yXJIM7%2BnvgteQRijjYNbASG8HU5171j7g%2F%2B0a1LChMsWXRv1Ss3kBIwf3%2BaxiTtGp4kMk21kBGqony4HsyOmCP2%2Bn4jE%2BlVcad1YdFNO94%2FX9Y7cb0OQi%2B8K1IQFTp09%2BlvaJ2AUZxuszzCgg213c3VRGoyKuvDv70eyphXMVq8JSYY8BjoEoMEu1tVmE64VJdnoxK6090kSIZdyNNLDJhCwVcBOFNvteiyGmMY1ovcSEFgVyWzwHsGHnH1KrIV4GDbblF1W7M5GSH5kj%2FN6esFCV7jDW%2F1u8caWdpl3THrSN8Jz5gBiHly7J37sTqBX0FuRwM4zH80SdNsSBRnTUDe7aks9wqY6mQK7u0YbZ6SX2yb9B%2F2VFOXv4bH0EhOv1Fx9vesBITuCf6Uu1ccD13gpiRyg4e9A%2BUWm9%2F1SGSP4juqHed5FxPbD1JG9OGh8ZSTwVFnNsh86%2FLhD36b3zgMM3qzsQGOqUB3e1mYJileZhG6gICTx8DArzJL2ALZJcdwYXdF09IhFRYCc68V2p1Qtw6iHxp6Y%2FO4%2FiTkvC2agomRnrMORjaDX7z1mITqaff8cKGvmPmKf576n8G2S6IVJlNbtGx3qAkFYjhQGXgKnNCuieDS5hqHT8CEOMtB694jJKT70uO0uy5I8gLYXpsdVLCG%2FyEJwoTGecmKMOKpY9YV%2FI%2BCK7wU9OAbqqc&X-Amz-Signature=b39710b6b5c72e98c46e0a25a2fe5d4f9355f455b209a39181609644c2f57a46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLSRAFI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAzJlsm%2BMAU9RmcGDsFRJYjzEcMUOQGWUajk3W1bWIgdAiEA4P%2BCQnpZkTCt1TtiIJIn8GseB2BNG%2FOK1sTPAB99YDQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAUSorFjaJ6qkfPHYircA3f69oxIaYqkHgiWPfGNGHfUTC55eRfpRuJPSL6ZGPmtgAGhRXYwVoTTrePXzixTeqcIaL2A1Uvv6JxRaHRWjG48xAyvah2sJotojD4no3FTAgihjzFXbEbZAeD6Sakaalbf9zjcmsIAahtvdDkUQ5qZuAXmoS8a%2BpQHd2yXJIM7%2BnvgteQRijjYNbASG8HU5171j7g%2F%2B0a1LChMsWXRv1Ss3kBIwf3%2BaxiTtGp4kMk21kBGqony4HsyOmCP2%2Bn4jE%2BlVcad1YdFNO94%2FX9Y7cb0OQi%2B8K1IQFTp09%2BlvaJ2AUZxuszzCgg213c3VRGoyKuvDv70eyphXMVq8JSYY8BjoEoMEu1tVmE64VJdnoxK6090kSIZdyNNLDJhCwVcBOFNvteiyGmMY1ovcSEFgVyWzwHsGHnH1KrIV4GDbblF1W7M5GSH5kj%2FN6esFCV7jDW%2F1u8caWdpl3THrSN8Jz5gBiHly7J37sTqBX0FuRwM4zH80SdNsSBRnTUDe7aks9wqY6mQK7u0YbZ6SX2yb9B%2F2VFOXv4bH0EhOv1Fx9vesBITuCf6Uu1ccD13gpiRyg4e9A%2BUWm9%2F1SGSP4juqHed5FxPbD1JG9OGh8ZSTwVFnNsh86%2FLhD36b3zgMM3qzsQGOqUB3e1mYJileZhG6gICTx8DArzJL2ALZJcdwYXdF09IhFRYCc68V2p1Qtw6iHxp6Y%2FO4%2FiTkvC2agomRnrMORjaDX7z1mITqaff8cKGvmPmKf576n8G2S6IVJlNbtGx3qAkFYjhQGXgKnNCuieDS5hqHT8CEOMtB694jJKT70uO0uy5I8gLYXpsdVLCG%2FyEJwoTGecmKMOKpY9YV%2FI%2BCK7wU9OAbqqc&X-Amz-Signature=f408a4cef1583cfbf4b5f82fafa3427b40d8abcb09469a6c494c6bce4c00fe68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLSRAFI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAzJlsm%2BMAU9RmcGDsFRJYjzEcMUOQGWUajk3W1bWIgdAiEA4P%2BCQnpZkTCt1TtiIJIn8GseB2BNG%2FOK1sTPAB99YDQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAUSorFjaJ6qkfPHYircA3f69oxIaYqkHgiWPfGNGHfUTC55eRfpRuJPSL6ZGPmtgAGhRXYwVoTTrePXzixTeqcIaL2A1Uvv6JxRaHRWjG48xAyvah2sJotojD4no3FTAgihjzFXbEbZAeD6Sakaalbf9zjcmsIAahtvdDkUQ5qZuAXmoS8a%2BpQHd2yXJIM7%2BnvgteQRijjYNbASG8HU5171j7g%2F%2B0a1LChMsWXRv1Ss3kBIwf3%2BaxiTtGp4kMk21kBGqony4HsyOmCP2%2Bn4jE%2BlVcad1YdFNO94%2FX9Y7cb0OQi%2B8K1IQFTp09%2BlvaJ2AUZxuszzCgg213c3VRGoyKuvDv70eyphXMVq8JSYY8BjoEoMEu1tVmE64VJdnoxK6090kSIZdyNNLDJhCwVcBOFNvteiyGmMY1ovcSEFgVyWzwHsGHnH1KrIV4GDbblF1W7M5GSH5kj%2FN6esFCV7jDW%2F1u8caWdpl3THrSN8Jz5gBiHly7J37sTqBX0FuRwM4zH80SdNsSBRnTUDe7aks9wqY6mQK7u0YbZ6SX2yb9B%2F2VFOXv4bH0EhOv1Fx9vesBITuCf6Uu1ccD13gpiRyg4e9A%2BUWm9%2F1SGSP4juqHed5FxPbD1JG9OGh8ZSTwVFnNsh86%2FLhD36b3zgMM3qzsQGOqUB3e1mYJileZhG6gICTx8DArzJL2ALZJcdwYXdF09IhFRYCc68V2p1Qtw6iHxp6Y%2FO4%2FiTkvC2agomRnrMORjaDX7z1mITqaff8cKGvmPmKf576n8G2S6IVJlNbtGx3qAkFYjhQGXgKnNCuieDS5hqHT8CEOMtB694jJKT70uO0uy5I8gLYXpsdVLCG%2FyEJwoTGecmKMOKpY9YV%2FI%2BCK7wU9OAbqqc&X-Amz-Signature=f43fca097e2f874ed908e5dc9940a5d2c5225358327c6bdb298f3de00a23e5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLSRAFI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAzJlsm%2BMAU9RmcGDsFRJYjzEcMUOQGWUajk3W1bWIgdAiEA4P%2BCQnpZkTCt1TtiIJIn8GseB2BNG%2FOK1sTPAB99YDQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAUSorFjaJ6qkfPHYircA3f69oxIaYqkHgiWPfGNGHfUTC55eRfpRuJPSL6ZGPmtgAGhRXYwVoTTrePXzixTeqcIaL2A1Uvv6JxRaHRWjG48xAyvah2sJotojD4no3FTAgihjzFXbEbZAeD6Sakaalbf9zjcmsIAahtvdDkUQ5qZuAXmoS8a%2BpQHd2yXJIM7%2BnvgteQRijjYNbASG8HU5171j7g%2F%2B0a1LChMsWXRv1Ss3kBIwf3%2BaxiTtGp4kMk21kBGqony4HsyOmCP2%2Bn4jE%2BlVcad1YdFNO94%2FX9Y7cb0OQi%2B8K1IQFTp09%2BlvaJ2AUZxuszzCgg213c3VRGoyKuvDv70eyphXMVq8JSYY8BjoEoMEu1tVmE64VJdnoxK6090kSIZdyNNLDJhCwVcBOFNvteiyGmMY1ovcSEFgVyWzwHsGHnH1KrIV4GDbblF1W7M5GSH5kj%2FN6esFCV7jDW%2F1u8caWdpl3THrSN8Jz5gBiHly7J37sTqBX0FuRwM4zH80SdNsSBRnTUDe7aks9wqY6mQK7u0YbZ6SX2yb9B%2F2VFOXv4bH0EhOv1Fx9vesBITuCf6Uu1ccD13gpiRyg4e9A%2BUWm9%2F1SGSP4juqHed5FxPbD1JG9OGh8ZSTwVFnNsh86%2FLhD36b3zgMM3qzsQGOqUB3e1mYJileZhG6gICTx8DArzJL2ALZJcdwYXdF09IhFRYCc68V2p1Qtw6iHxp6Y%2FO4%2FiTkvC2agomRnrMORjaDX7z1mITqaff8cKGvmPmKf576n8G2S6IVJlNbtGx3qAkFYjhQGXgKnNCuieDS5hqHT8CEOMtB694jJKT70uO0uy5I8gLYXpsdVLCG%2FyEJwoTGecmKMOKpY9YV%2FI%2BCK7wU9OAbqqc&X-Amz-Signature=dbcc109cab4978afef0fceb418890dc96a59ab899399311a1cb8f97cca5eb61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLSRAFI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAzJlsm%2BMAU9RmcGDsFRJYjzEcMUOQGWUajk3W1bWIgdAiEA4P%2BCQnpZkTCt1TtiIJIn8GseB2BNG%2FOK1sTPAB99YDQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAUSorFjaJ6qkfPHYircA3f69oxIaYqkHgiWPfGNGHfUTC55eRfpRuJPSL6ZGPmtgAGhRXYwVoTTrePXzixTeqcIaL2A1Uvv6JxRaHRWjG48xAyvah2sJotojD4no3FTAgihjzFXbEbZAeD6Sakaalbf9zjcmsIAahtvdDkUQ5qZuAXmoS8a%2BpQHd2yXJIM7%2BnvgteQRijjYNbASG8HU5171j7g%2F%2B0a1LChMsWXRv1Ss3kBIwf3%2BaxiTtGp4kMk21kBGqony4HsyOmCP2%2Bn4jE%2BlVcad1YdFNO94%2FX9Y7cb0OQi%2B8K1IQFTp09%2BlvaJ2AUZxuszzCgg213c3VRGoyKuvDv70eyphXMVq8JSYY8BjoEoMEu1tVmE64VJdnoxK6090kSIZdyNNLDJhCwVcBOFNvteiyGmMY1ovcSEFgVyWzwHsGHnH1KrIV4GDbblF1W7M5GSH5kj%2FN6esFCV7jDW%2F1u8caWdpl3THrSN8Jz5gBiHly7J37sTqBX0FuRwM4zH80SdNsSBRnTUDe7aks9wqY6mQK7u0YbZ6SX2yb9B%2F2VFOXv4bH0EhOv1Fx9vesBITuCf6Uu1ccD13gpiRyg4e9A%2BUWm9%2F1SGSP4juqHed5FxPbD1JG9OGh8ZSTwVFnNsh86%2FLhD36b3zgMM3qzsQGOqUB3e1mYJileZhG6gICTx8DArzJL2ALZJcdwYXdF09IhFRYCc68V2p1Qtw6iHxp6Y%2FO4%2FiTkvC2agomRnrMORjaDX7z1mITqaff8cKGvmPmKf576n8G2S6IVJlNbtGx3qAkFYjhQGXgKnNCuieDS5hqHT8CEOMtB694jJKT70uO0uy5I8gLYXpsdVLCG%2FyEJwoTGecmKMOKpY9YV%2FI%2BCK7wU9OAbqqc&X-Amz-Signature=a550ea56fe93a8675b4af24ced3b82443be4219510b2e36a21dba9b42772a4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

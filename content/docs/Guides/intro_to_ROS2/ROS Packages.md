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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWR4XNL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hKamIx07E18NlXcKnNCK%2BNiR3m12dj3CFTjpNI0I7AIhANshHJuyKjZXyOc62k1l2ZL99oiAdT3O5GDWJkHCt7mzKv8DCHUQABoMNjM3NDIzMTgzODA1IgxgEXWHvi9hm%2BltQ%2FMq3APro5VMW4BU5QXMWc%2Bv9Z0gIG0KMXTEetzY0Zeji6Xk2TDsWlrSSpT905wJnA%2FnDx1kDiAP2hMwhclkd6j7TFMx%2BLGt%2BEESgWsTmyjr4H3KvyjOVrjvJVQGlE%2FndPXrB1oeuBia%2BNTGnTJlSwY1oEgYuN5vtng5jHxGIOBZyX2QDdGHmnb0O9x69NzaFT%2FxA3SmROJNhmpOH%2BmF3yhN3xbPpaVon9eS8mR1E3pQvspZI7wvijycVQuHZXSpbWrbkYRxOAOrlXGvFaJ9l5Hr7vXw0TmTXUZZnogBstDXvrSk0KisVN8uGF%2BzYVEiXQH7PpTUSNknkaMAtCoG5iEq067mKF6JGg7GDl%2FkBTYGfkjqMqsE2LtzBgyYyPcy29FqTOXC%2Fc8nGsoGOKHeo9J1Ptw563WFxSLCz1kTixV3UAl9ld7BDaYtQFTbVmpx9W19T3Hr2X7JUYylNcSg4GaxYqGUs1N%2FG9C0JqfqWPC5UjG1fHy3ILZkv4QH%2FNm8ntRoneiceFR7Q9eJ9wcV%2Fr6e0gGl7vTrJlwQdKMDahQS1gIE0ERNfu0vsvFIBX0b9cTS%2FOoPgMPXvcBSdPCgKk0Sgomp%2BZuqxYqtEF%2FEQdlBXUoAy3SjUXIKP90Ht1TKnDDnpsXCBjqkAfauSpNOH%2B3KfAHhWNQ8tIi5Qaudo7fK7FpRIo65zRyziJQuveFTvaZvpxsUS2SyO20%2FrFGnYbygWYgycLIpecBjFb5VOsT8X9JTuYRcs%2FN4Ig05j8PLV2Bl2Ji8mUepgVWU9SaCQHrFvobx%2FTQKcRg6r5VX7QFiN93bxKEiPAIggQRwXIysHEJ5ZDtN%2F8xuHyiz66TfOnv43pIi2qrlT9%2B3I4h%2B&X-Amz-Signature=c0a1adcdc4fbca73410c267a0f7b65065de047ca25295d1dad55f610dcc342a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWR4XNL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hKamIx07E18NlXcKnNCK%2BNiR3m12dj3CFTjpNI0I7AIhANshHJuyKjZXyOc62k1l2ZL99oiAdT3O5GDWJkHCt7mzKv8DCHUQABoMNjM3NDIzMTgzODA1IgxgEXWHvi9hm%2BltQ%2FMq3APro5VMW4BU5QXMWc%2Bv9Z0gIG0KMXTEetzY0Zeji6Xk2TDsWlrSSpT905wJnA%2FnDx1kDiAP2hMwhclkd6j7TFMx%2BLGt%2BEESgWsTmyjr4H3KvyjOVrjvJVQGlE%2FndPXrB1oeuBia%2BNTGnTJlSwY1oEgYuN5vtng5jHxGIOBZyX2QDdGHmnb0O9x69NzaFT%2FxA3SmROJNhmpOH%2BmF3yhN3xbPpaVon9eS8mR1E3pQvspZI7wvijycVQuHZXSpbWrbkYRxOAOrlXGvFaJ9l5Hr7vXw0TmTXUZZnogBstDXvrSk0KisVN8uGF%2BzYVEiXQH7PpTUSNknkaMAtCoG5iEq067mKF6JGg7GDl%2FkBTYGfkjqMqsE2LtzBgyYyPcy29FqTOXC%2Fc8nGsoGOKHeo9J1Ptw563WFxSLCz1kTixV3UAl9ld7BDaYtQFTbVmpx9W19T3Hr2X7JUYylNcSg4GaxYqGUs1N%2FG9C0JqfqWPC5UjG1fHy3ILZkv4QH%2FNm8ntRoneiceFR7Q9eJ9wcV%2Fr6e0gGl7vTrJlwQdKMDahQS1gIE0ERNfu0vsvFIBX0b9cTS%2FOoPgMPXvcBSdPCgKk0Sgomp%2BZuqxYqtEF%2FEQdlBXUoAy3SjUXIKP90Ht1TKnDDnpsXCBjqkAfauSpNOH%2B3KfAHhWNQ8tIi5Qaudo7fK7FpRIo65zRyziJQuveFTvaZvpxsUS2SyO20%2FrFGnYbygWYgycLIpecBjFb5VOsT8X9JTuYRcs%2FN4Ig05j8PLV2Bl2Ji8mUepgVWU9SaCQHrFvobx%2FTQKcRg6r5VX7QFiN93bxKEiPAIggQRwXIysHEJ5ZDtN%2F8xuHyiz66TfOnv43pIi2qrlT9%2B3I4h%2B&X-Amz-Signature=e3a1cf92954b253f9525dd0fa7ee8b9928979896f163a2f0118473d80f07e26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWR4XNL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hKamIx07E18NlXcKnNCK%2BNiR3m12dj3CFTjpNI0I7AIhANshHJuyKjZXyOc62k1l2ZL99oiAdT3O5GDWJkHCt7mzKv8DCHUQABoMNjM3NDIzMTgzODA1IgxgEXWHvi9hm%2BltQ%2FMq3APro5VMW4BU5QXMWc%2Bv9Z0gIG0KMXTEetzY0Zeji6Xk2TDsWlrSSpT905wJnA%2FnDx1kDiAP2hMwhclkd6j7TFMx%2BLGt%2BEESgWsTmyjr4H3KvyjOVrjvJVQGlE%2FndPXrB1oeuBia%2BNTGnTJlSwY1oEgYuN5vtng5jHxGIOBZyX2QDdGHmnb0O9x69NzaFT%2FxA3SmROJNhmpOH%2BmF3yhN3xbPpaVon9eS8mR1E3pQvspZI7wvijycVQuHZXSpbWrbkYRxOAOrlXGvFaJ9l5Hr7vXw0TmTXUZZnogBstDXvrSk0KisVN8uGF%2BzYVEiXQH7PpTUSNknkaMAtCoG5iEq067mKF6JGg7GDl%2FkBTYGfkjqMqsE2LtzBgyYyPcy29FqTOXC%2Fc8nGsoGOKHeo9J1Ptw563WFxSLCz1kTixV3UAl9ld7BDaYtQFTbVmpx9W19T3Hr2X7JUYylNcSg4GaxYqGUs1N%2FG9C0JqfqWPC5UjG1fHy3ILZkv4QH%2FNm8ntRoneiceFR7Q9eJ9wcV%2Fr6e0gGl7vTrJlwQdKMDahQS1gIE0ERNfu0vsvFIBX0b9cTS%2FOoPgMPXvcBSdPCgKk0Sgomp%2BZuqxYqtEF%2FEQdlBXUoAy3SjUXIKP90Ht1TKnDDnpsXCBjqkAfauSpNOH%2B3KfAHhWNQ8tIi5Qaudo7fK7FpRIo65zRyziJQuveFTvaZvpxsUS2SyO20%2FrFGnYbygWYgycLIpecBjFb5VOsT8X9JTuYRcs%2FN4Ig05j8PLV2Bl2Ji8mUepgVWU9SaCQHrFvobx%2FTQKcRg6r5VX7QFiN93bxKEiPAIggQRwXIysHEJ5ZDtN%2F8xuHyiz66TfOnv43pIi2qrlT9%2B3I4h%2B&X-Amz-Signature=eab5850ad3c07732aa533db8ffb3cbd7d2fb92819345bd3f73499ef082f5e5a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWR4XNL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hKamIx07E18NlXcKnNCK%2BNiR3m12dj3CFTjpNI0I7AIhANshHJuyKjZXyOc62k1l2ZL99oiAdT3O5GDWJkHCt7mzKv8DCHUQABoMNjM3NDIzMTgzODA1IgxgEXWHvi9hm%2BltQ%2FMq3APro5VMW4BU5QXMWc%2Bv9Z0gIG0KMXTEetzY0Zeji6Xk2TDsWlrSSpT905wJnA%2FnDx1kDiAP2hMwhclkd6j7TFMx%2BLGt%2BEESgWsTmyjr4H3KvyjOVrjvJVQGlE%2FndPXrB1oeuBia%2BNTGnTJlSwY1oEgYuN5vtng5jHxGIOBZyX2QDdGHmnb0O9x69NzaFT%2FxA3SmROJNhmpOH%2BmF3yhN3xbPpaVon9eS8mR1E3pQvspZI7wvijycVQuHZXSpbWrbkYRxOAOrlXGvFaJ9l5Hr7vXw0TmTXUZZnogBstDXvrSk0KisVN8uGF%2BzYVEiXQH7PpTUSNknkaMAtCoG5iEq067mKF6JGg7GDl%2FkBTYGfkjqMqsE2LtzBgyYyPcy29FqTOXC%2Fc8nGsoGOKHeo9J1Ptw563WFxSLCz1kTixV3UAl9ld7BDaYtQFTbVmpx9W19T3Hr2X7JUYylNcSg4GaxYqGUs1N%2FG9C0JqfqWPC5UjG1fHy3ILZkv4QH%2FNm8ntRoneiceFR7Q9eJ9wcV%2Fr6e0gGl7vTrJlwQdKMDahQS1gIE0ERNfu0vsvFIBX0b9cTS%2FOoPgMPXvcBSdPCgKk0Sgomp%2BZuqxYqtEF%2FEQdlBXUoAy3SjUXIKP90Ht1TKnDDnpsXCBjqkAfauSpNOH%2B3KfAHhWNQ8tIi5Qaudo7fK7FpRIo65zRyziJQuveFTvaZvpxsUS2SyO20%2FrFGnYbygWYgycLIpecBjFb5VOsT8X9JTuYRcs%2FN4Ig05j8PLV2Bl2Ji8mUepgVWU9SaCQHrFvobx%2FTQKcRg6r5VX7QFiN93bxKEiPAIggQRwXIysHEJ5ZDtN%2F8xuHyiz66TfOnv43pIi2qrlT9%2B3I4h%2B&X-Amz-Signature=f86ef93b04c523b56741d2427d6160b516e92c0bcc8445591ea1a1667e465df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWR4XNL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hKamIx07E18NlXcKnNCK%2BNiR3m12dj3CFTjpNI0I7AIhANshHJuyKjZXyOc62k1l2ZL99oiAdT3O5GDWJkHCt7mzKv8DCHUQABoMNjM3NDIzMTgzODA1IgxgEXWHvi9hm%2BltQ%2FMq3APro5VMW4BU5QXMWc%2Bv9Z0gIG0KMXTEetzY0Zeji6Xk2TDsWlrSSpT905wJnA%2FnDx1kDiAP2hMwhclkd6j7TFMx%2BLGt%2BEESgWsTmyjr4H3KvyjOVrjvJVQGlE%2FndPXrB1oeuBia%2BNTGnTJlSwY1oEgYuN5vtng5jHxGIOBZyX2QDdGHmnb0O9x69NzaFT%2FxA3SmROJNhmpOH%2BmF3yhN3xbPpaVon9eS8mR1E3pQvspZI7wvijycVQuHZXSpbWrbkYRxOAOrlXGvFaJ9l5Hr7vXw0TmTXUZZnogBstDXvrSk0KisVN8uGF%2BzYVEiXQH7PpTUSNknkaMAtCoG5iEq067mKF6JGg7GDl%2FkBTYGfkjqMqsE2LtzBgyYyPcy29FqTOXC%2Fc8nGsoGOKHeo9J1Ptw563WFxSLCz1kTixV3UAl9ld7BDaYtQFTbVmpx9W19T3Hr2X7JUYylNcSg4GaxYqGUs1N%2FG9C0JqfqWPC5UjG1fHy3ILZkv4QH%2FNm8ntRoneiceFR7Q9eJ9wcV%2Fr6e0gGl7vTrJlwQdKMDahQS1gIE0ERNfu0vsvFIBX0b9cTS%2FOoPgMPXvcBSdPCgKk0Sgomp%2BZuqxYqtEF%2FEQdlBXUoAy3SjUXIKP90Ht1TKnDDnpsXCBjqkAfauSpNOH%2B3KfAHhWNQ8tIi5Qaudo7fK7FpRIo65zRyziJQuveFTvaZvpxsUS2SyO20%2FrFGnYbygWYgycLIpecBjFb5VOsT8X9JTuYRcs%2FN4Ig05j8PLV2Bl2Ji8mUepgVWU9SaCQHrFvobx%2FTQKcRg6r5VX7QFiN93bxKEiPAIggQRwXIysHEJ5ZDtN%2F8xuHyiz66TfOnv43pIi2qrlT9%2B3I4h%2B&X-Amz-Signature=39d2bc4f7a8cf3386aae80c031694b774192789f8d3522fa6400b082ec6b165a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWR4XNL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hKamIx07E18NlXcKnNCK%2BNiR3m12dj3CFTjpNI0I7AIhANshHJuyKjZXyOc62k1l2ZL99oiAdT3O5GDWJkHCt7mzKv8DCHUQABoMNjM3NDIzMTgzODA1IgxgEXWHvi9hm%2BltQ%2FMq3APro5VMW4BU5QXMWc%2Bv9Z0gIG0KMXTEetzY0Zeji6Xk2TDsWlrSSpT905wJnA%2FnDx1kDiAP2hMwhclkd6j7TFMx%2BLGt%2BEESgWsTmyjr4H3KvyjOVrjvJVQGlE%2FndPXrB1oeuBia%2BNTGnTJlSwY1oEgYuN5vtng5jHxGIOBZyX2QDdGHmnb0O9x69NzaFT%2FxA3SmROJNhmpOH%2BmF3yhN3xbPpaVon9eS8mR1E3pQvspZI7wvijycVQuHZXSpbWrbkYRxOAOrlXGvFaJ9l5Hr7vXw0TmTXUZZnogBstDXvrSk0KisVN8uGF%2BzYVEiXQH7PpTUSNknkaMAtCoG5iEq067mKF6JGg7GDl%2FkBTYGfkjqMqsE2LtzBgyYyPcy29FqTOXC%2Fc8nGsoGOKHeo9J1Ptw563WFxSLCz1kTixV3UAl9ld7BDaYtQFTbVmpx9W19T3Hr2X7JUYylNcSg4GaxYqGUs1N%2FG9C0JqfqWPC5UjG1fHy3ILZkv4QH%2FNm8ntRoneiceFR7Q9eJ9wcV%2Fr6e0gGl7vTrJlwQdKMDahQS1gIE0ERNfu0vsvFIBX0b9cTS%2FOoPgMPXvcBSdPCgKk0Sgomp%2BZuqxYqtEF%2FEQdlBXUoAy3SjUXIKP90Ht1TKnDDnpsXCBjqkAfauSpNOH%2B3KfAHhWNQ8tIi5Qaudo7fK7FpRIo65zRyziJQuveFTvaZvpxsUS2SyO20%2FrFGnYbygWYgycLIpecBjFb5VOsT8X9JTuYRcs%2FN4Ig05j8PLV2Bl2Ji8mUepgVWU9SaCQHrFvobx%2FTQKcRg6r5VX7QFiN93bxKEiPAIggQRwXIysHEJ5ZDtN%2F8xuHyiz66TfOnv43pIi2qrlT9%2B3I4h%2B&X-Amz-Signature=be8eff67723e5ce394c3174e893a825afca63086f8fbe6f6c92ee1689e0494bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWR4XNL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hKamIx07E18NlXcKnNCK%2BNiR3m12dj3CFTjpNI0I7AIhANshHJuyKjZXyOc62k1l2ZL99oiAdT3O5GDWJkHCt7mzKv8DCHUQABoMNjM3NDIzMTgzODA1IgxgEXWHvi9hm%2BltQ%2FMq3APro5VMW4BU5QXMWc%2Bv9Z0gIG0KMXTEetzY0Zeji6Xk2TDsWlrSSpT905wJnA%2FnDx1kDiAP2hMwhclkd6j7TFMx%2BLGt%2BEESgWsTmyjr4H3KvyjOVrjvJVQGlE%2FndPXrB1oeuBia%2BNTGnTJlSwY1oEgYuN5vtng5jHxGIOBZyX2QDdGHmnb0O9x69NzaFT%2FxA3SmROJNhmpOH%2BmF3yhN3xbPpaVon9eS8mR1E3pQvspZI7wvijycVQuHZXSpbWrbkYRxOAOrlXGvFaJ9l5Hr7vXw0TmTXUZZnogBstDXvrSk0KisVN8uGF%2BzYVEiXQH7PpTUSNknkaMAtCoG5iEq067mKF6JGg7GDl%2FkBTYGfkjqMqsE2LtzBgyYyPcy29FqTOXC%2Fc8nGsoGOKHeo9J1Ptw563WFxSLCz1kTixV3UAl9ld7BDaYtQFTbVmpx9W19T3Hr2X7JUYylNcSg4GaxYqGUs1N%2FG9C0JqfqWPC5UjG1fHy3ILZkv4QH%2FNm8ntRoneiceFR7Q9eJ9wcV%2Fr6e0gGl7vTrJlwQdKMDahQS1gIE0ERNfu0vsvFIBX0b9cTS%2FOoPgMPXvcBSdPCgKk0Sgomp%2BZuqxYqtEF%2FEQdlBXUoAy3SjUXIKP90Ht1TKnDDnpsXCBjqkAfauSpNOH%2B3KfAHhWNQ8tIi5Qaudo7fK7FpRIo65zRyziJQuveFTvaZvpxsUS2SyO20%2FrFGnYbygWYgycLIpecBjFb5VOsT8X9JTuYRcs%2FN4Ig05j8PLV2Bl2Ji8mUepgVWU9SaCQHrFvobx%2FTQKcRg6r5VX7QFiN93bxKEiPAIggQRwXIysHEJ5ZDtN%2F8xuHyiz66TfOnv43pIi2qrlT9%2B3I4h%2B&X-Amz-Signature=40a099e9c077dd1e291370f4e33645caef5cda7c83e3f3d3a8fdf3a499e4eca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

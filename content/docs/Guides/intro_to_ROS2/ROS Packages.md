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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UTVPTI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBlgANF4cqqYTPJuS4gHBJZdaWpH7KF0zGHizjhFoBsHAiA0H57W7iH8fbvchulOXGRii2Rxr0JedlfB1hSm%2FhmSOiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2BdEH7VeBxBlETGWKtwD2RHqJ%2BIITzybt5u2Jfr5k26r5bHSEvIkx4iMjEe6GZBNG5rdGX03QyLHliWn%2BYouS%2FrpRWz9NQ5DOwggN%2BUQhfPZmAgoNKwHd2JzQeOhOCtl5itn%2BtOVV2V9dsPm8BowOexggPGqCgpetmQmgqAXR7%2B6GNwEP1FLSCR9xwp09BA%2F1rMG5xJn9z%2Fyrwrdp2v12POFOtIJ2DIhxqM1Maj25Fza5Vp6sttOx36163aqiUCn%2BY8qBb65EePtjuhZLSynAdLZMEcTHyqq1Ba6wgnfiOo46UFSY3Ecz3XJUjgNapno%2Bcc3IsG3nDN64s8VisjBJB2%2FMiXxFZbLPhB6lnT98LL54ZZf02MvwjxyL%2B%2FgEAIo3lB%2F%2FgL5890lrqbANkHkw6JL%2FbcXv07l0zN7tpZ2v0x%2Bp96LwIMiSHJ0wMaphEfpOmRCv5bZNHxo6%2F2eARSBqda9Oiq6cTx8enVKeeMa2BqbWe4I5K7oqMP2ykePmPwK6zD1h%2FN6BI1AKqlQQf5B7KPjqBv7zMM8xNLHCQvsLqqt%2FmAGyoPw0ApYyMLuiupgUmWmFSIyo6eBgDD0DQY30gEYuw0U0QkHtIYAXNEBPbVFwxCM5VtyaeW1va4pEk65Sz3w4%2B9oivfEiZEwztuVwAY6pgF1oErNq1ISvioTR%2Fl1Fz0nPApwc31rpbU%2BdCbBv4hGSZiMK8PEZ9lFOTKFKsfokzqgilb8LW%2FMWrBSCi442RQEn4qPbL0xyDe16EDraMVb6okNqXfeGUEUau7nNxQkeZMLyKJgQCFypsdVyIT8LmCBrI0AinLKyIE%2BGHutTLqxWZ1%2Bzbplp%2Bfyf9b4nLmaGjNpfQxV8aA2MsuenBoudjei6gb8hf%2FU&X-Amz-Signature=800186b215786f7f0dfd48ec6ac24fca3fe2bb5f322566ae4690a6b86a5da5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UTVPTI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBlgANF4cqqYTPJuS4gHBJZdaWpH7KF0zGHizjhFoBsHAiA0H57W7iH8fbvchulOXGRii2Rxr0JedlfB1hSm%2FhmSOiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2BdEH7VeBxBlETGWKtwD2RHqJ%2BIITzybt5u2Jfr5k26r5bHSEvIkx4iMjEe6GZBNG5rdGX03QyLHliWn%2BYouS%2FrpRWz9NQ5DOwggN%2BUQhfPZmAgoNKwHd2JzQeOhOCtl5itn%2BtOVV2V9dsPm8BowOexggPGqCgpetmQmgqAXR7%2B6GNwEP1FLSCR9xwp09BA%2F1rMG5xJn9z%2Fyrwrdp2v12POFOtIJ2DIhxqM1Maj25Fza5Vp6sttOx36163aqiUCn%2BY8qBb65EePtjuhZLSynAdLZMEcTHyqq1Ba6wgnfiOo46UFSY3Ecz3XJUjgNapno%2Bcc3IsG3nDN64s8VisjBJB2%2FMiXxFZbLPhB6lnT98LL54ZZf02MvwjxyL%2B%2FgEAIo3lB%2F%2FgL5890lrqbANkHkw6JL%2FbcXv07l0zN7tpZ2v0x%2Bp96LwIMiSHJ0wMaphEfpOmRCv5bZNHxo6%2F2eARSBqda9Oiq6cTx8enVKeeMa2BqbWe4I5K7oqMP2ykePmPwK6zD1h%2FN6BI1AKqlQQf5B7KPjqBv7zMM8xNLHCQvsLqqt%2FmAGyoPw0ApYyMLuiupgUmWmFSIyo6eBgDD0DQY30gEYuw0U0QkHtIYAXNEBPbVFwxCM5VtyaeW1va4pEk65Sz3w4%2B9oivfEiZEwztuVwAY6pgF1oErNq1ISvioTR%2Fl1Fz0nPApwc31rpbU%2BdCbBv4hGSZiMK8PEZ9lFOTKFKsfokzqgilb8LW%2FMWrBSCi442RQEn4qPbL0xyDe16EDraMVb6okNqXfeGUEUau7nNxQkeZMLyKJgQCFypsdVyIT8LmCBrI0AinLKyIE%2BGHutTLqxWZ1%2Bzbplp%2Bfyf9b4nLmaGjNpfQxV8aA2MsuenBoudjei6gb8hf%2FU&X-Amz-Signature=082b94ed37ad986bb8a9d795040fce2af47fd37bcd32d0b3e8ea91f7cc18d5a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UTVPTI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBlgANF4cqqYTPJuS4gHBJZdaWpH7KF0zGHizjhFoBsHAiA0H57W7iH8fbvchulOXGRii2Rxr0JedlfB1hSm%2FhmSOiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2BdEH7VeBxBlETGWKtwD2RHqJ%2BIITzybt5u2Jfr5k26r5bHSEvIkx4iMjEe6GZBNG5rdGX03QyLHliWn%2BYouS%2FrpRWz9NQ5DOwggN%2BUQhfPZmAgoNKwHd2JzQeOhOCtl5itn%2BtOVV2V9dsPm8BowOexggPGqCgpetmQmgqAXR7%2B6GNwEP1FLSCR9xwp09BA%2F1rMG5xJn9z%2Fyrwrdp2v12POFOtIJ2DIhxqM1Maj25Fza5Vp6sttOx36163aqiUCn%2BY8qBb65EePtjuhZLSynAdLZMEcTHyqq1Ba6wgnfiOo46UFSY3Ecz3XJUjgNapno%2Bcc3IsG3nDN64s8VisjBJB2%2FMiXxFZbLPhB6lnT98LL54ZZf02MvwjxyL%2B%2FgEAIo3lB%2F%2FgL5890lrqbANkHkw6JL%2FbcXv07l0zN7tpZ2v0x%2Bp96LwIMiSHJ0wMaphEfpOmRCv5bZNHxo6%2F2eARSBqda9Oiq6cTx8enVKeeMa2BqbWe4I5K7oqMP2ykePmPwK6zD1h%2FN6BI1AKqlQQf5B7KPjqBv7zMM8xNLHCQvsLqqt%2FmAGyoPw0ApYyMLuiupgUmWmFSIyo6eBgDD0DQY30gEYuw0U0QkHtIYAXNEBPbVFwxCM5VtyaeW1va4pEk65Sz3w4%2B9oivfEiZEwztuVwAY6pgF1oErNq1ISvioTR%2Fl1Fz0nPApwc31rpbU%2BdCbBv4hGSZiMK8PEZ9lFOTKFKsfokzqgilb8LW%2FMWrBSCi442RQEn4qPbL0xyDe16EDraMVb6okNqXfeGUEUau7nNxQkeZMLyKJgQCFypsdVyIT8LmCBrI0AinLKyIE%2BGHutTLqxWZ1%2Bzbplp%2Bfyf9b4nLmaGjNpfQxV8aA2MsuenBoudjei6gb8hf%2FU&X-Amz-Signature=005141e4ace7c44c0ed0fdc78ec59c2c814c1c3de99552a9dd4f3dfe55d5c5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UTVPTI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBlgANF4cqqYTPJuS4gHBJZdaWpH7KF0zGHizjhFoBsHAiA0H57W7iH8fbvchulOXGRii2Rxr0JedlfB1hSm%2FhmSOiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2BdEH7VeBxBlETGWKtwD2RHqJ%2BIITzybt5u2Jfr5k26r5bHSEvIkx4iMjEe6GZBNG5rdGX03QyLHliWn%2BYouS%2FrpRWz9NQ5DOwggN%2BUQhfPZmAgoNKwHd2JzQeOhOCtl5itn%2BtOVV2V9dsPm8BowOexggPGqCgpetmQmgqAXR7%2B6GNwEP1FLSCR9xwp09BA%2F1rMG5xJn9z%2Fyrwrdp2v12POFOtIJ2DIhxqM1Maj25Fza5Vp6sttOx36163aqiUCn%2BY8qBb65EePtjuhZLSynAdLZMEcTHyqq1Ba6wgnfiOo46UFSY3Ecz3XJUjgNapno%2Bcc3IsG3nDN64s8VisjBJB2%2FMiXxFZbLPhB6lnT98LL54ZZf02MvwjxyL%2B%2FgEAIo3lB%2F%2FgL5890lrqbANkHkw6JL%2FbcXv07l0zN7tpZ2v0x%2Bp96LwIMiSHJ0wMaphEfpOmRCv5bZNHxo6%2F2eARSBqda9Oiq6cTx8enVKeeMa2BqbWe4I5K7oqMP2ykePmPwK6zD1h%2FN6BI1AKqlQQf5B7KPjqBv7zMM8xNLHCQvsLqqt%2FmAGyoPw0ApYyMLuiupgUmWmFSIyo6eBgDD0DQY30gEYuw0U0QkHtIYAXNEBPbVFwxCM5VtyaeW1va4pEk65Sz3w4%2B9oivfEiZEwztuVwAY6pgF1oErNq1ISvioTR%2Fl1Fz0nPApwc31rpbU%2BdCbBv4hGSZiMK8PEZ9lFOTKFKsfokzqgilb8LW%2FMWrBSCi442RQEn4qPbL0xyDe16EDraMVb6okNqXfeGUEUau7nNxQkeZMLyKJgQCFypsdVyIT8LmCBrI0AinLKyIE%2BGHutTLqxWZ1%2Bzbplp%2Bfyf9b4nLmaGjNpfQxV8aA2MsuenBoudjei6gb8hf%2FU&X-Amz-Signature=9ef156640158e74f171d0877b98e3fd0649294b3d44b93307dea66267dbc2273&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UTVPTI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBlgANF4cqqYTPJuS4gHBJZdaWpH7KF0zGHizjhFoBsHAiA0H57W7iH8fbvchulOXGRii2Rxr0JedlfB1hSm%2FhmSOiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2BdEH7VeBxBlETGWKtwD2RHqJ%2BIITzybt5u2Jfr5k26r5bHSEvIkx4iMjEe6GZBNG5rdGX03QyLHliWn%2BYouS%2FrpRWz9NQ5DOwggN%2BUQhfPZmAgoNKwHd2JzQeOhOCtl5itn%2BtOVV2V9dsPm8BowOexggPGqCgpetmQmgqAXR7%2B6GNwEP1FLSCR9xwp09BA%2F1rMG5xJn9z%2Fyrwrdp2v12POFOtIJ2DIhxqM1Maj25Fza5Vp6sttOx36163aqiUCn%2BY8qBb65EePtjuhZLSynAdLZMEcTHyqq1Ba6wgnfiOo46UFSY3Ecz3XJUjgNapno%2Bcc3IsG3nDN64s8VisjBJB2%2FMiXxFZbLPhB6lnT98LL54ZZf02MvwjxyL%2B%2FgEAIo3lB%2F%2FgL5890lrqbANkHkw6JL%2FbcXv07l0zN7tpZ2v0x%2Bp96LwIMiSHJ0wMaphEfpOmRCv5bZNHxo6%2F2eARSBqda9Oiq6cTx8enVKeeMa2BqbWe4I5K7oqMP2ykePmPwK6zD1h%2FN6BI1AKqlQQf5B7KPjqBv7zMM8xNLHCQvsLqqt%2FmAGyoPw0ApYyMLuiupgUmWmFSIyo6eBgDD0DQY30gEYuw0U0QkHtIYAXNEBPbVFwxCM5VtyaeW1va4pEk65Sz3w4%2B9oivfEiZEwztuVwAY6pgF1oErNq1ISvioTR%2Fl1Fz0nPApwc31rpbU%2BdCbBv4hGSZiMK8PEZ9lFOTKFKsfokzqgilb8LW%2FMWrBSCi442RQEn4qPbL0xyDe16EDraMVb6okNqXfeGUEUau7nNxQkeZMLyKJgQCFypsdVyIT8LmCBrI0AinLKyIE%2BGHutTLqxWZ1%2Bzbplp%2Bfyf9b4nLmaGjNpfQxV8aA2MsuenBoudjei6gb8hf%2FU&X-Amz-Signature=3512024615f78396e3471797fd2152055d092811b6c89b1803823a05e9e53fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UTVPTI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBlgANF4cqqYTPJuS4gHBJZdaWpH7KF0zGHizjhFoBsHAiA0H57W7iH8fbvchulOXGRii2Rxr0JedlfB1hSm%2FhmSOiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2BdEH7VeBxBlETGWKtwD2RHqJ%2BIITzybt5u2Jfr5k26r5bHSEvIkx4iMjEe6GZBNG5rdGX03QyLHliWn%2BYouS%2FrpRWz9NQ5DOwggN%2BUQhfPZmAgoNKwHd2JzQeOhOCtl5itn%2BtOVV2V9dsPm8BowOexggPGqCgpetmQmgqAXR7%2B6GNwEP1FLSCR9xwp09BA%2F1rMG5xJn9z%2Fyrwrdp2v12POFOtIJ2DIhxqM1Maj25Fza5Vp6sttOx36163aqiUCn%2BY8qBb65EePtjuhZLSynAdLZMEcTHyqq1Ba6wgnfiOo46UFSY3Ecz3XJUjgNapno%2Bcc3IsG3nDN64s8VisjBJB2%2FMiXxFZbLPhB6lnT98LL54ZZf02MvwjxyL%2B%2FgEAIo3lB%2F%2FgL5890lrqbANkHkw6JL%2FbcXv07l0zN7tpZ2v0x%2Bp96LwIMiSHJ0wMaphEfpOmRCv5bZNHxo6%2F2eARSBqda9Oiq6cTx8enVKeeMa2BqbWe4I5K7oqMP2ykePmPwK6zD1h%2FN6BI1AKqlQQf5B7KPjqBv7zMM8xNLHCQvsLqqt%2FmAGyoPw0ApYyMLuiupgUmWmFSIyo6eBgDD0DQY30gEYuw0U0QkHtIYAXNEBPbVFwxCM5VtyaeW1va4pEk65Sz3w4%2B9oivfEiZEwztuVwAY6pgF1oErNq1ISvioTR%2Fl1Fz0nPApwc31rpbU%2BdCbBv4hGSZiMK8PEZ9lFOTKFKsfokzqgilb8LW%2FMWrBSCi442RQEn4qPbL0xyDe16EDraMVb6okNqXfeGUEUau7nNxQkeZMLyKJgQCFypsdVyIT8LmCBrI0AinLKyIE%2BGHutTLqxWZ1%2Bzbplp%2Bfyf9b4nLmaGjNpfQxV8aA2MsuenBoudjei6gb8hf%2FU&X-Amz-Signature=204215e84b8317c5b3fe63572482815040dfc2ce8054a64ac0905b3a530ec1ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UTVPTI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBlgANF4cqqYTPJuS4gHBJZdaWpH7KF0zGHizjhFoBsHAiA0H57W7iH8fbvchulOXGRii2Rxr0JedlfB1hSm%2FhmSOiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2BdEH7VeBxBlETGWKtwD2RHqJ%2BIITzybt5u2Jfr5k26r5bHSEvIkx4iMjEe6GZBNG5rdGX03QyLHliWn%2BYouS%2FrpRWz9NQ5DOwggN%2BUQhfPZmAgoNKwHd2JzQeOhOCtl5itn%2BtOVV2V9dsPm8BowOexggPGqCgpetmQmgqAXR7%2B6GNwEP1FLSCR9xwp09BA%2F1rMG5xJn9z%2Fyrwrdp2v12POFOtIJ2DIhxqM1Maj25Fza5Vp6sttOx36163aqiUCn%2BY8qBb65EePtjuhZLSynAdLZMEcTHyqq1Ba6wgnfiOo46UFSY3Ecz3XJUjgNapno%2Bcc3IsG3nDN64s8VisjBJB2%2FMiXxFZbLPhB6lnT98LL54ZZf02MvwjxyL%2B%2FgEAIo3lB%2F%2FgL5890lrqbANkHkw6JL%2FbcXv07l0zN7tpZ2v0x%2Bp96LwIMiSHJ0wMaphEfpOmRCv5bZNHxo6%2F2eARSBqda9Oiq6cTx8enVKeeMa2BqbWe4I5K7oqMP2ykePmPwK6zD1h%2FN6BI1AKqlQQf5B7KPjqBv7zMM8xNLHCQvsLqqt%2FmAGyoPw0ApYyMLuiupgUmWmFSIyo6eBgDD0DQY30gEYuw0U0QkHtIYAXNEBPbVFwxCM5VtyaeW1va4pEk65Sz3w4%2B9oivfEiZEwztuVwAY6pgF1oErNq1ISvioTR%2Fl1Fz0nPApwc31rpbU%2BdCbBv4hGSZiMK8PEZ9lFOTKFKsfokzqgilb8LW%2FMWrBSCi442RQEn4qPbL0xyDe16EDraMVb6okNqXfeGUEUau7nNxQkeZMLyKJgQCFypsdVyIT8LmCBrI0AinLKyIE%2BGHutTLqxWZ1%2Bzbplp%2Bfyf9b4nLmaGjNpfQxV8aA2MsuenBoudjei6gb8hf%2FU&X-Amz-Signature=7ee81d4b3ed2e4ffa0a8c1272a525c17ab224041bcdf8a8ebb5fc6605cc6cc5a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

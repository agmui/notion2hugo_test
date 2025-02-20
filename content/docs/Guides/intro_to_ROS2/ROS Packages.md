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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNROAWX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGb2ewLNglfM%2B8BSswaNHOGu6LMwggyEy5eHIUPSRlxQIgFUh3ZOKer8zsmaiYTDrFjkeEI2UOEo0DI44PJgITY6IqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5lz3DA8P%2F8%2B8%2BYlyrcA9j5l2fkEHJnaP5aM01M5NfR3uYXgjOSDL5Q%2BpKDnKJE2NJO3gZoD9gKelEDMazXkdT5NiB9nHztXa9U56raz6vkMCRjrGpECkvXS4CoR2WzW8xwUZ65rc5HB4p5l%2BwTNem7S6gOZiB2cOjpvNEmCwrWzLZpuAAY%2FjPiXYTS%2FpZkAZm37tiGRAvUrORoL7YMOHL%2BCyL0%2F2WrE%2BYuur1ey00rSx9p0JnspmTHuYvoIRSO%2FxJGe4zMWfKWIGJJ36CCzCRzxTwiFyRZ6dZhfLL6kW%2B4FAEcNX7dbpHyouSlMXyqppyuADTX7FpRG9sz7IZkPrtn%2FG7EW9dCSZotzmuO6U3CPR3yvzEXRxtUNKoBAtEaGNmXlmjrBr%2BuwZBruHnO8Xskh1Q2WbXkcRt6yOWndzrBLeEqS1d47FDHr5gzDHxFcF%2Bc52T%2BwAkZ8TCJ93dKgEO47nzueyeJaunNUaH5CgopsLoMz%2F1Uyy1cjiBTZIF62AT%2FZD4E9RlX98%2Famgn98Zb4CQFXccD17KlhS5fNPxlFENBbKSj08ujN%2FkMnjuY78Fr%2Fko8iGiG2JJuMLIMlfMYcW3ML8q3drmCh9wyNQ5PvTcGkHS3mzp9rmtuNi9ZTtSc3v%2B0afj2suW7pMM%2FK3L0GOqUBmoLEkQLXO5Ku6e0%2FisXmHUNVb9W0R%2FJMGyRcmxdrqoPJ7Gj7SU49vzlW5y%2BvonC%2BikARj16tVewZdHypU51tvkbsUOPHB1wci2cUqlSDH6icbL%2FuJUFF%2Fcl%2B9k%2BbZQW4J%2BYayt3ws7Zcjzfk2j78m912Fw0ZyogXBGFaWJ1SgWwZGetHNldm%2FKFHtrDWsGScbYVudIFwxP9UNYrjjiQrX8BYJ5GU&X-Amz-Signature=5f667f203d0144ffda673a85e21e6571f10bf6fc68fc8661d4ea8d612dffb1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNROAWX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGb2ewLNglfM%2B8BSswaNHOGu6LMwggyEy5eHIUPSRlxQIgFUh3ZOKer8zsmaiYTDrFjkeEI2UOEo0DI44PJgITY6IqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5lz3DA8P%2F8%2B8%2BYlyrcA9j5l2fkEHJnaP5aM01M5NfR3uYXgjOSDL5Q%2BpKDnKJE2NJO3gZoD9gKelEDMazXkdT5NiB9nHztXa9U56raz6vkMCRjrGpECkvXS4CoR2WzW8xwUZ65rc5HB4p5l%2BwTNem7S6gOZiB2cOjpvNEmCwrWzLZpuAAY%2FjPiXYTS%2FpZkAZm37tiGRAvUrORoL7YMOHL%2BCyL0%2F2WrE%2BYuur1ey00rSx9p0JnspmTHuYvoIRSO%2FxJGe4zMWfKWIGJJ36CCzCRzxTwiFyRZ6dZhfLL6kW%2B4FAEcNX7dbpHyouSlMXyqppyuADTX7FpRG9sz7IZkPrtn%2FG7EW9dCSZotzmuO6U3CPR3yvzEXRxtUNKoBAtEaGNmXlmjrBr%2BuwZBruHnO8Xskh1Q2WbXkcRt6yOWndzrBLeEqS1d47FDHr5gzDHxFcF%2Bc52T%2BwAkZ8TCJ93dKgEO47nzueyeJaunNUaH5CgopsLoMz%2F1Uyy1cjiBTZIF62AT%2FZD4E9RlX98%2Famgn98Zb4CQFXccD17KlhS5fNPxlFENBbKSj08ujN%2FkMnjuY78Fr%2Fko8iGiG2JJuMLIMlfMYcW3ML8q3drmCh9wyNQ5PvTcGkHS3mzp9rmtuNi9ZTtSc3v%2B0afj2suW7pMM%2FK3L0GOqUBmoLEkQLXO5Ku6e0%2FisXmHUNVb9W0R%2FJMGyRcmxdrqoPJ7Gj7SU49vzlW5y%2BvonC%2BikARj16tVewZdHypU51tvkbsUOPHB1wci2cUqlSDH6icbL%2FuJUFF%2Fcl%2B9k%2BbZQW4J%2BYayt3ws7Zcjzfk2j78m912Fw0ZyogXBGFaWJ1SgWwZGetHNldm%2FKFHtrDWsGScbYVudIFwxP9UNYrjjiQrX8BYJ5GU&X-Amz-Signature=7a6be8475b1e13b8a2f12fc2564ff808cd2f872ddbb8cc40854fde194cc1a736&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNROAWX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGb2ewLNglfM%2B8BSswaNHOGu6LMwggyEy5eHIUPSRlxQIgFUh3ZOKer8zsmaiYTDrFjkeEI2UOEo0DI44PJgITY6IqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5lz3DA8P%2F8%2B8%2BYlyrcA9j5l2fkEHJnaP5aM01M5NfR3uYXgjOSDL5Q%2BpKDnKJE2NJO3gZoD9gKelEDMazXkdT5NiB9nHztXa9U56raz6vkMCRjrGpECkvXS4CoR2WzW8xwUZ65rc5HB4p5l%2BwTNem7S6gOZiB2cOjpvNEmCwrWzLZpuAAY%2FjPiXYTS%2FpZkAZm37tiGRAvUrORoL7YMOHL%2BCyL0%2F2WrE%2BYuur1ey00rSx9p0JnspmTHuYvoIRSO%2FxJGe4zMWfKWIGJJ36CCzCRzxTwiFyRZ6dZhfLL6kW%2B4FAEcNX7dbpHyouSlMXyqppyuADTX7FpRG9sz7IZkPrtn%2FG7EW9dCSZotzmuO6U3CPR3yvzEXRxtUNKoBAtEaGNmXlmjrBr%2BuwZBruHnO8Xskh1Q2WbXkcRt6yOWndzrBLeEqS1d47FDHr5gzDHxFcF%2Bc52T%2BwAkZ8TCJ93dKgEO47nzueyeJaunNUaH5CgopsLoMz%2F1Uyy1cjiBTZIF62AT%2FZD4E9RlX98%2Famgn98Zb4CQFXccD17KlhS5fNPxlFENBbKSj08ujN%2FkMnjuY78Fr%2Fko8iGiG2JJuMLIMlfMYcW3ML8q3drmCh9wyNQ5PvTcGkHS3mzp9rmtuNi9ZTtSc3v%2B0afj2suW7pMM%2FK3L0GOqUBmoLEkQLXO5Ku6e0%2FisXmHUNVb9W0R%2FJMGyRcmxdrqoPJ7Gj7SU49vzlW5y%2BvonC%2BikARj16tVewZdHypU51tvkbsUOPHB1wci2cUqlSDH6icbL%2FuJUFF%2Fcl%2B9k%2BbZQW4J%2BYayt3ws7Zcjzfk2j78m912Fw0ZyogXBGFaWJ1SgWwZGetHNldm%2FKFHtrDWsGScbYVudIFwxP9UNYrjjiQrX8BYJ5GU&X-Amz-Signature=a6e22c0c80a2ed3ddce7837d2dcf2b704c2cef5082fe408e6db94bf7636b2f46&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNROAWX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGb2ewLNglfM%2B8BSswaNHOGu6LMwggyEy5eHIUPSRlxQIgFUh3ZOKer8zsmaiYTDrFjkeEI2UOEo0DI44PJgITY6IqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5lz3DA8P%2F8%2B8%2BYlyrcA9j5l2fkEHJnaP5aM01M5NfR3uYXgjOSDL5Q%2BpKDnKJE2NJO3gZoD9gKelEDMazXkdT5NiB9nHztXa9U56raz6vkMCRjrGpECkvXS4CoR2WzW8xwUZ65rc5HB4p5l%2BwTNem7S6gOZiB2cOjpvNEmCwrWzLZpuAAY%2FjPiXYTS%2FpZkAZm37tiGRAvUrORoL7YMOHL%2BCyL0%2F2WrE%2BYuur1ey00rSx9p0JnspmTHuYvoIRSO%2FxJGe4zMWfKWIGJJ36CCzCRzxTwiFyRZ6dZhfLL6kW%2B4FAEcNX7dbpHyouSlMXyqppyuADTX7FpRG9sz7IZkPrtn%2FG7EW9dCSZotzmuO6U3CPR3yvzEXRxtUNKoBAtEaGNmXlmjrBr%2BuwZBruHnO8Xskh1Q2WbXkcRt6yOWndzrBLeEqS1d47FDHr5gzDHxFcF%2Bc52T%2BwAkZ8TCJ93dKgEO47nzueyeJaunNUaH5CgopsLoMz%2F1Uyy1cjiBTZIF62AT%2FZD4E9RlX98%2Famgn98Zb4CQFXccD17KlhS5fNPxlFENBbKSj08ujN%2FkMnjuY78Fr%2Fko8iGiG2JJuMLIMlfMYcW3ML8q3drmCh9wyNQ5PvTcGkHS3mzp9rmtuNi9ZTtSc3v%2B0afj2suW7pMM%2FK3L0GOqUBmoLEkQLXO5Ku6e0%2FisXmHUNVb9W0R%2FJMGyRcmxdrqoPJ7Gj7SU49vzlW5y%2BvonC%2BikARj16tVewZdHypU51tvkbsUOPHB1wci2cUqlSDH6icbL%2FuJUFF%2Fcl%2B9k%2BbZQW4J%2BYayt3ws7Zcjzfk2j78m912Fw0ZyogXBGFaWJ1SgWwZGetHNldm%2FKFHtrDWsGScbYVudIFwxP9UNYrjjiQrX8BYJ5GU&X-Amz-Signature=b2b17071c0569e0b45550be441bd4e38a349f544e54ced32933bbcdaea54a21c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNROAWX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGb2ewLNglfM%2B8BSswaNHOGu6LMwggyEy5eHIUPSRlxQIgFUh3ZOKer8zsmaiYTDrFjkeEI2UOEo0DI44PJgITY6IqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5lz3DA8P%2F8%2B8%2BYlyrcA9j5l2fkEHJnaP5aM01M5NfR3uYXgjOSDL5Q%2BpKDnKJE2NJO3gZoD9gKelEDMazXkdT5NiB9nHztXa9U56raz6vkMCRjrGpECkvXS4CoR2WzW8xwUZ65rc5HB4p5l%2BwTNem7S6gOZiB2cOjpvNEmCwrWzLZpuAAY%2FjPiXYTS%2FpZkAZm37tiGRAvUrORoL7YMOHL%2BCyL0%2F2WrE%2BYuur1ey00rSx9p0JnspmTHuYvoIRSO%2FxJGe4zMWfKWIGJJ36CCzCRzxTwiFyRZ6dZhfLL6kW%2B4FAEcNX7dbpHyouSlMXyqppyuADTX7FpRG9sz7IZkPrtn%2FG7EW9dCSZotzmuO6U3CPR3yvzEXRxtUNKoBAtEaGNmXlmjrBr%2BuwZBruHnO8Xskh1Q2WbXkcRt6yOWndzrBLeEqS1d47FDHr5gzDHxFcF%2Bc52T%2BwAkZ8TCJ93dKgEO47nzueyeJaunNUaH5CgopsLoMz%2F1Uyy1cjiBTZIF62AT%2FZD4E9RlX98%2Famgn98Zb4CQFXccD17KlhS5fNPxlFENBbKSj08ujN%2FkMnjuY78Fr%2Fko8iGiG2JJuMLIMlfMYcW3ML8q3drmCh9wyNQ5PvTcGkHS3mzp9rmtuNi9ZTtSc3v%2B0afj2suW7pMM%2FK3L0GOqUBmoLEkQLXO5Ku6e0%2FisXmHUNVb9W0R%2FJMGyRcmxdrqoPJ7Gj7SU49vzlW5y%2BvonC%2BikARj16tVewZdHypU51tvkbsUOPHB1wci2cUqlSDH6icbL%2FuJUFF%2Fcl%2B9k%2BbZQW4J%2BYayt3ws7Zcjzfk2j78m912Fw0ZyogXBGFaWJ1SgWwZGetHNldm%2FKFHtrDWsGScbYVudIFwxP9UNYrjjiQrX8BYJ5GU&X-Amz-Signature=9c794e7fa947f1b09a661d62d26f67828a3f3e6a846fa38ccdf13d798eb87903&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNROAWX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGb2ewLNglfM%2B8BSswaNHOGu6LMwggyEy5eHIUPSRlxQIgFUh3ZOKer8zsmaiYTDrFjkeEI2UOEo0DI44PJgITY6IqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5lz3DA8P%2F8%2B8%2BYlyrcA9j5l2fkEHJnaP5aM01M5NfR3uYXgjOSDL5Q%2BpKDnKJE2NJO3gZoD9gKelEDMazXkdT5NiB9nHztXa9U56raz6vkMCRjrGpECkvXS4CoR2WzW8xwUZ65rc5HB4p5l%2BwTNem7S6gOZiB2cOjpvNEmCwrWzLZpuAAY%2FjPiXYTS%2FpZkAZm37tiGRAvUrORoL7YMOHL%2BCyL0%2F2WrE%2BYuur1ey00rSx9p0JnspmTHuYvoIRSO%2FxJGe4zMWfKWIGJJ36CCzCRzxTwiFyRZ6dZhfLL6kW%2B4FAEcNX7dbpHyouSlMXyqppyuADTX7FpRG9sz7IZkPrtn%2FG7EW9dCSZotzmuO6U3CPR3yvzEXRxtUNKoBAtEaGNmXlmjrBr%2BuwZBruHnO8Xskh1Q2WbXkcRt6yOWndzrBLeEqS1d47FDHr5gzDHxFcF%2Bc52T%2BwAkZ8TCJ93dKgEO47nzueyeJaunNUaH5CgopsLoMz%2F1Uyy1cjiBTZIF62AT%2FZD4E9RlX98%2Famgn98Zb4CQFXccD17KlhS5fNPxlFENBbKSj08ujN%2FkMnjuY78Fr%2Fko8iGiG2JJuMLIMlfMYcW3ML8q3drmCh9wyNQ5PvTcGkHS3mzp9rmtuNi9ZTtSc3v%2B0afj2suW7pMM%2FK3L0GOqUBmoLEkQLXO5Ku6e0%2FisXmHUNVb9W0R%2FJMGyRcmxdrqoPJ7Gj7SU49vzlW5y%2BvonC%2BikARj16tVewZdHypU51tvkbsUOPHB1wci2cUqlSDH6icbL%2FuJUFF%2Fcl%2B9k%2BbZQW4J%2BYayt3ws7Zcjzfk2j78m912Fw0ZyogXBGFaWJ1SgWwZGetHNldm%2FKFHtrDWsGScbYVudIFwxP9UNYrjjiQrX8BYJ5GU&X-Amz-Signature=a7c824869b16a5a383b26de560f6a9eb5a8504b8dbbe34f04e73d8a95dbe7f75&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNROAWX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGb2ewLNglfM%2B8BSswaNHOGu6LMwggyEy5eHIUPSRlxQIgFUh3ZOKer8zsmaiYTDrFjkeEI2UOEo0DI44PJgITY6IqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5lz3DA8P%2F8%2B8%2BYlyrcA9j5l2fkEHJnaP5aM01M5NfR3uYXgjOSDL5Q%2BpKDnKJE2NJO3gZoD9gKelEDMazXkdT5NiB9nHztXa9U56raz6vkMCRjrGpECkvXS4CoR2WzW8xwUZ65rc5HB4p5l%2BwTNem7S6gOZiB2cOjpvNEmCwrWzLZpuAAY%2FjPiXYTS%2FpZkAZm37tiGRAvUrORoL7YMOHL%2BCyL0%2F2WrE%2BYuur1ey00rSx9p0JnspmTHuYvoIRSO%2FxJGe4zMWfKWIGJJ36CCzCRzxTwiFyRZ6dZhfLL6kW%2B4FAEcNX7dbpHyouSlMXyqppyuADTX7FpRG9sz7IZkPrtn%2FG7EW9dCSZotzmuO6U3CPR3yvzEXRxtUNKoBAtEaGNmXlmjrBr%2BuwZBruHnO8Xskh1Q2WbXkcRt6yOWndzrBLeEqS1d47FDHr5gzDHxFcF%2Bc52T%2BwAkZ8TCJ93dKgEO47nzueyeJaunNUaH5CgopsLoMz%2F1Uyy1cjiBTZIF62AT%2FZD4E9RlX98%2Famgn98Zb4CQFXccD17KlhS5fNPxlFENBbKSj08ujN%2FkMnjuY78Fr%2Fko8iGiG2JJuMLIMlfMYcW3ML8q3drmCh9wyNQ5PvTcGkHS3mzp9rmtuNi9ZTtSc3v%2B0afj2suW7pMM%2FK3L0GOqUBmoLEkQLXO5Ku6e0%2FisXmHUNVb9W0R%2FJMGyRcmxdrqoPJ7Gj7SU49vzlW5y%2BvonC%2BikARj16tVewZdHypU51tvkbsUOPHB1wci2cUqlSDH6icbL%2FuJUFF%2Fcl%2B9k%2BbZQW4J%2BYayt3ws7Zcjzfk2j78m912Fw0ZyogXBGFaWJ1SgWwZGetHNldm%2FKFHtrDWsGScbYVudIFwxP9UNYrjjiQrX8BYJ5GU&X-Amz-Signature=f6fe3ffdad47f9e423a64602fdec2a77904c0cb8548c28997032c40a351f3064&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

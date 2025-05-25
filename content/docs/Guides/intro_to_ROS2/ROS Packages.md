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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOOE4PY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAShRMgidsv%2FmQvFKlwC%2FV5khG5qHINQgOQHdgR3N7z0AiBnuLgMaZR1zG2CcIiPM5VRuO%2F5j%2BC6leUdz1%2Fk4KXk5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMsbRvCnKGEhoTNvx8KtwDOKACaN8qk9IwI91ZYFxjlCgUCFKNsKk8ar%2B8UWml4ouQpI5Qt9yLW9Tj%2BiM5XfOaPBA5xJpkSNXRSrJP%2BuhKNWuKilr%2FsyJ0J2YO1FG3crEyO1t9GdWpJWqeJFcOrFM57F8MO6jZIMjoXpuTQG%2FO9a9v%2FYmi3JOK1v7MQt6aaX1hbWIDvtSuj9FIvjC8s6v1QqAVrWJAbFnDawoTqNFDiIA0YDIP96EUANUj%2Fp1GsQDBLc0hJa6cyITkVRKes51N55rEg63lWrAGcC%2BbDTRnnRMNLPKsO%2F9oDVcOX3DlfDW%2F4Vc7YvWs8XT1%2B%2ByMRHTu1obLXGg2nnwUWSDAf4lvsSsM6oVEDOgB81LREKJ1Eh5uLMeCuzne8bC72cWBTvTguijl%2B1FQss6yBhnL2e68Ts3W4yK0szw7OiFPjjA5Ue62H44N8OI%2FbFrMlHdI2nJFmUSZzm6z3k3WoLgcFztmY2Dtxu1wZdGYu05pv2XHMw%2BSoAycrvIWlQLwRhwnR800%2Bi2rNw%2BetQZrEEPt%2B68EZavApnEscIF%2BcObNtzo3oNrNp7YRJFU2Z5kojmoi1IwkBcTI2SVxJoSx0Txjt0cZnHbrm7QPiYAOWiFUhZ2tkW7TPyV0giENrFSDcNUw0rzLwQY6pgH7iwh2hq82opRoxpL%2FNMIiVcO1qIfYno530P8sfRVnm4GQPAw9wKkUES9k%2Bi8TjH2ZaLwb5aUpxOS8OUBlq7K%2Bgg1hZs5eR4t2%2BE%2FiiUzymMuw%2Bx50K0Rx%2FSK2UUjtta%2BqWMMMpvax4RQoNFjxtlDY4z9qNBUkPD88kfylHcxFMElHwjAeAXVVKx1i81S09wTs3VpiXUfE%2BZzRo9CP5KkixS4R%2FGN%2B&X-Amz-Signature=019671ea82e33222cd68751cc46faa22ab35d8a9bd6b3c44ab38ca6ea8e11465&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOOE4PY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAShRMgidsv%2FmQvFKlwC%2FV5khG5qHINQgOQHdgR3N7z0AiBnuLgMaZR1zG2CcIiPM5VRuO%2F5j%2BC6leUdz1%2Fk4KXk5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMsbRvCnKGEhoTNvx8KtwDOKACaN8qk9IwI91ZYFxjlCgUCFKNsKk8ar%2B8UWml4ouQpI5Qt9yLW9Tj%2BiM5XfOaPBA5xJpkSNXRSrJP%2BuhKNWuKilr%2FsyJ0J2YO1FG3crEyO1t9GdWpJWqeJFcOrFM57F8MO6jZIMjoXpuTQG%2FO9a9v%2FYmi3JOK1v7MQt6aaX1hbWIDvtSuj9FIvjC8s6v1QqAVrWJAbFnDawoTqNFDiIA0YDIP96EUANUj%2Fp1GsQDBLc0hJa6cyITkVRKes51N55rEg63lWrAGcC%2BbDTRnnRMNLPKsO%2F9oDVcOX3DlfDW%2F4Vc7YvWs8XT1%2B%2ByMRHTu1obLXGg2nnwUWSDAf4lvsSsM6oVEDOgB81LREKJ1Eh5uLMeCuzne8bC72cWBTvTguijl%2B1FQss6yBhnL2e68Ts3W4yK0szw7OiFPjjA5Ue62H44N8OI%2FbFrMlHdI2nJFmUSZzm6z3k3WoLgcFztmY2Dtxu1wZdGYu05pv2XHMw%2BSoAycrvIWlQLwRhwnR800%2Bi2rNw%2BetQZrEEPt%2B68EZavApnEscIF%2BcObNtzo3oNrNp7YRJFU2Z5kojmoi1IwkBcTI2SVxJoSx0Txjt0cZnHbrm7QPiYAOWiFUhZ2tkW7TPyV0giENrFSDcNUw0rzLwQY6pgH7iwh2hq82opRoxpL%2FNMIiVcO1qIfYno530P8sfRVnm4GQPAw9wKkUES9k%2Bi8TjH2ZaLwb5aUpxOS8OUBlq7K%2Bgg1hZs5eR4t2%2BE%2FiiUzymMuw%2Bx50K0Rx%2FSK2UUjtta%2BqWMMMpvax4RQoNFjxtlDY4z9qNBUkPD88kfylHcxFMElHwjAeAXVVKx1i81S09wTs3VpiXUfE%2BZzRo9CP5KkixS4R%2FGN%2B&X-Amz-Signature=fba5e1d107da8e5d2e5f74192b5d32f52b8c293b12772c0c70e80576b1faa259&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOOE4PY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAShRMgidsv%2FmQvFKlwC%2FV5khG5qHINQgOQHdgR3N7z0AiBnuLgMaZR1zG2CcIiPM5VRuO%2F5j%2BC6leUdz1%2Fk4KXk5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMsbRvCnKGEhoTNvx8KtwDOKACaN8qk9IwI91ZYFxjlCgUCFKNsKk8ar%2B8UWml4ouQpI5Qt9yLW9Tj%2BiM5XfOaPBA5xJpkSNXRSrJP%2BuhKNWuKilr%2FsyJ0J2YO1FG3crEyO1t9GdWpJWqeJFcOrFM57F8MO6jZIMjoXpuTQG%2FO9a9v%2FYmi3JOK1v7MQt6aaX1hbWIDvtSuj9FIvjC8s6v1QqAVrWJAbFnDawoTqNFDiIA0YDIP96EUANUj%2Fp1GsQDBLc0hJa6cyITkVRKes51N55rEg63lWrAGcC%2BbDTRnnRMNLPKsO%2F9oDVcOX3DlfDW%2F4Vc7YvWs8XT1%2B%2ByMRHTu1obLXGg2nnwUWSDAf4lvsSsM6oVEDOgB81LREKJ1Eh5uLMeCuzne8bC72cWBTvTguijl%2B1FQss6yBhnL2e68Ts3W4yK0szw7OiFPjjA5Ue62H44N8OI%2FbFrMlHdI2nJFmUSZzm6z3k3WoLgcFztmY2Dtxu1wZdGYu05pv2XHMw%2BSoAycrvIWlQLwRhwnR800%2Bi2rNw%2BetQZrEEPt%2B68EZavApnEscIF%2BcObNtzo3oNrNp7YRJFU2Z5kojmoi1IwkBcTI2SVxJoSx0Txjt0cZnHbrm7QPiYAOWiFUhZ2tkW7TPyV0giENrFSDcNUw0rzLwQY6pgH7iwh2hq82opRoxpL%2FNMIiVcO1qIfYno530P8sfRVnm4GQPAw9wKkUES9k%2Bi8TjH2ZaLwb5aUpxOS8OUBlq7K%2Bgg1hZs5eR4t2%2BE%2FiiUzymMuw%2Bx50K0Rx%2FSK2UUjtta%2BqWMMMpvax4RQoNFjxtlDY4z9qNBUkPD88kfylHcxFMElHwjAeAXVVKx1i81S09wTs3VpiXUfE%2BZzRo9CP5KkixS4R%2FGN%2B&X-Amz-Signature=42ca17f29c336cc25dfeeba724e38e4b00e88d43afdaed7be8ab234bbd955724&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOOE4PY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAShRMgidsv%2FmQvFKlwC%2FV5khG5qHINQgOQHdgR3N7z0AiBnuLgMaZR1zG2CcIiPM5VRuO%2F5j%2BC6leUdz1%2Fk4KXk5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMsbRvCnKGEhoTNvx8KtwDOKACaN8qk9IwI91ZYFxjlCgUCFKNsKk8ar%2B8UWml4ouQpI5Qt9yLW9Tj%2BiM5XfOaPBA5xJpkSNXRSrJP%2BuhKNWuKilr%2FsyJ0J2YO1FG3crEyO1t9GdWpJWqeJFcOrFM57F8MO6jZIMjoXpuTQG%2FO9a9v%2FYmi3JOK1v7MQt6aaX1hbWIDvtSuj9FIvjC8s6v1QqAVrWJAbFnDawoTqNFDiIA0YDIP96EUANUj%2Fp1GsQDBLc0hJa6cyITkVRKes51N55rEg63lWrAGcC%2BbDTRnnRMNLPKsO%2F9oDVcOX3DlfDW%2F4Vc7YvWs8XT1%2B%2ByMRHTu1obLXGg2nnwUWSDAf4lvsSsM6oVEDOgB81LREKJ1Eh5uLMeCuzne8bC72cWBTvTguijl%2B1FQss6yBhnL2e68Ts3W4yK0szw7OiFPjjA5Ue62H44N8OI%2FbFrMlHdI2nJFmUSZzm6z3k3WoLgcFztmY2Dtxu1wZdGYu05pv2XHMw%2BSoAycrvIWlQLwRhwnR800%2Bi2rNw%2BetQZrEEPt%2B68EZavApnEscIF%2BcObNtzo3oNrNp7YRJFU2Z5kojmoi1IwkBcTI2SVxJoSx0Txjt0cZnHbrm7QPiYAOWiFUhZ2tkW7TPyV0giENrFSDcNUw0rzLwQY6pgH7iwh2hq82opRoxpL%2FNMIiVcO1qIfYno530P8sfRVnm4GQPAw9wKkUES9k%2Bi8TjH2ZaLwb5aUpxOS8OUBlq7K%2Bgg1hZs5eR4t2%2BE%2FiiUzymMuw%2Bx50K0Rx%2FSK2UUjtta%2BqWMMMpvax4RQoNFjxtlDY4z9qNBUkPD88kfylHcxFMElHwjAeAXVVKx1i81S09wTs3VpiXUfE%2BZzRo9CP5KkixS4R%2FGN%2B&X-Amz-Signature=cd041487a80e4ffbeed53f109afe3e795475e0629e7e12507ec2a80b49942370&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOOE4PY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAShRMgidsv%2FmQvFKlwC%2FV5khG5qHINQgOQHdgR3N7z0AiBnuLgMaZR1zG2CcIiPM5VRuO%2F5j%2BC6leUdz1%2Fk4KXk5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMsbRvCnKGEhoTNvx8KtwDOKACaN8qk9IwI91ZYFxjlCgUCFKNsKk8ar%2B8UWml4ouQpI5Qt9yLW9Tj%2BiM5XfOaPBA5xJpkSNXRSrJP%2BuhKNWuKilr%2FsyJ0J2YO1FG3crEyO1t9GdWpJWqeJFcOrFM57F8MO6jZIMjoXpuTQG%2FO9a9v%2FYmi3JOK1v7MQt6aaX1hbWIDvtSuj9FIvjC8s6v1QqAVrWJAbFnDawoTqNFDiIA0YDIP96EUANUj%2Fp1GsQDBLc0hJa6cyITkVRKes51N55rEg63lWrAGcC%2BbDTRnnRMNLPKsO%2F9oDVcOX3DlfDW%2F4Vc7YvWs8XT1%2B%2ByMRHTu1obLXGg2nnwUWSDAf4lvsSsM6oVEDOgB81LREKJ1Eh5uLMeCuzne8bC72cWBTvTguijl%2B1FQss6yBhnL2e68Ts3W4yK0szw7OiFPjjA5Ue62H44N8OI%2FbFrMlHdI2nJFmUSZzm6z3k3WoLgcFztmY2Dtxu1wZdGYu05pv2XHMw%2BSoAycrvIWlQLwRhwnR800%2Bi2rNw%2BetQZrEEPt%2B68EZavApnEscIF%2BcObNtzo3oNrNp7YRJFU2Z5kojmoi1IwkBcTI2SVxJoSx0Txjt0cZnHbrm7QPiYAOWiFUhZ2tkW7TPyV0giENrFSDcNUw0rzLwQY6pgH7iwh2hq82opRoxpL%2FNMIiVcO1qIfYno530P8sfRVnm4GQPAw9wKkUES9k%2Bi8TjH2ZaLwb5aUpxOS8OUBlq7K%2Bgg1hZs5eR4t2%2BE%2FiiUzymMuw%2Bx50K0Rx%2FSK2UUjtta%2BqWMMMpvax4RQoNFjxtlDY4z9qNBUkPD88kfylHcxFMElHwjAeAXVVKx1i81S09wTs3VpiXUfE%2BZzRo9CP5KkixS4R%2FGN%2B&X-Amz-Signature=0dc17b44e99f93bd0ee629a8c7d8ead7b44232de3fcdbae58fb0173a397006b6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOOE4PY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAShRMgidsv%2FmQvFKlwC%2FV5khG5qHINQgOQHdgR3N7z0AiBnuLgMaZR1zG2CcIiPM5VRuO%2F5j%2BC6leUdz1%2Fk4KXk5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMsbRvCnKGEhoTNvx8KtwDOKACaN8qk9IwI91ZYFxjlCgUCFKNsKk8ar%2B8UWml4ouQpI5Qt9yLW9Tj%2BiM5XfOaPBA5xJpkSNXRSrJP%2BuhKNWuKilr%2FsyJ0J2YO1FG3crEyO1t9GdWpJWqeJFcOrFM57F8MO6jZIMjoXpuTQG%2FO9a9v%2FYmi3JOK1v7MQt6aaX1hbWIDvtSuj9FIvjC8s6v1QqAVrWJAbFnDawoTqNFDiIA0YDIP96EUANUj%2Fp1GsQDBLc0hJa6cyITkVRKes51N55rEg63lWrAGcC%2BbDTRnnRMNLPKsO%2F9oDVcOX3DlfDW%2F4Vc7YvWs8XT1%2B%2ByMRHTu1obLXGg2nnwUWSDAf4lvsSsM6oVEDOgB81LREKJ1Eh5uLMeCuzne8bC72cWBTvTguijl%2B1FQss6yBhnL2e68Ts3W4yK0szw7OiFPjjA5Ue62H44N8OI%2FbFrMlHdI2nJFmUSZzm6z3k3WoLgcFztmY2Dtxu1wZdGYu05pv2XHMw%2BSoAycrvIWlQLwRhwnR800%2Bi2rNw%2BetQZrEEPt%2B68EZavApnEscIF%2BcObNtzo3oNrNp7YRJFU2Z5kojmoi1IwkBcTI2SVxJoSx0Txjt0cZnHbrm7QPiYAOWiFUhZ2tkW7TPyV0giENrFSDcNUw0rzLwQY6pgH7iwh2hq82opRoxpL%2FNMIiVcO1qIfYno530P8sfRVnm4GQPAw9wKkUES9k%2Bi8TjH2ZaLwb5aUpxOS8OUBlq7K%2Bgg1hZs5eR4t2%2BE%2FiiUzymMuw%2Bx50K0Rx%2FSK2UUjtta%2BqWMMMpvax4RQoNFjxtlDY4z9qNBUkPD88kfylHcxFMElHwjAeAXVVKx1i81S09wTs3VpiXUfE%2BZzRo9CP5KkixS4R%2FGN%2B&X-Amz-Signature=f8c27e4798535f0392f898e9c73305b900af410e6acc84b05afc85902d1f29ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOOE4PY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAShRMgidsv%2FmQvFKlwC%2FV5khG5qHINQgOQHdgR3N7z0AiBnuLgMaZR1zG2CcIiPM5VRuO%2F5j%2BC6leUdz1%2Fk4KXk5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMsbRvCnKGEhoTNvx8KtwDOKACaN8qk9IwI91ZYFxjlCgUCFKNsKk8ar%2B8UWml4ouQpI5Qt9yLW9Tj%2BiM5XfOaPBA5xJpkSNXRSrJP%2BuhKNWuKilr%2FsyJ0J2YO1FG3crEyO1t9GdWpJWqeJFcOrFM57F8MO6jZIMjoXpuTQG%2FO9a9v%2FYmi3JOK1v7MQt6aaX1hbWIDvtSuj9FIvjC8s6v1QqAVrWJAbFnDawoTqNFDiIA0YDIP96EUANUj%2Fp1GsQDBLc0hJa6cyITkVRKes51N55rEg63lWrAGcC%2BbDTRnnRMNLPKsO%2F9oDVcOX3DlfDW%2F4Vc7YvWs8XT1%2B%2ByMRHTu1obLXGg2nnwUWSDAf4lvsSsM6oVEDOgB81LREKJ1Eh5uLMeCuzne8bC72cWBTvTguijl%2B1FQss6yBhnL2e68Ts3W4yK0szw7OiFPjjA5Ue62H44N8OI%2FbFrMlHdI2nJFmUSZzm6z3k3WoLgcFztmY2Dtxu1wZdGYu05pv2XHMw%2BSoAycrvIWlQLwRhwnR800%2Bi2rNw%2BetQZrEEPt%2B68EZavApnEscIF%2BcObNtzo3oNrNp7YRJFU2Z5kojmoi1IwkBcTI2SVxJoSx0Txjt0cZnHbrm7QPiYAOWiFUhZ2tkW7TPyV0giENrFSDcNUw0rzLwQY6pgH7iwh2hq82opRoxpL%2FNMIiVcO1qIfYno530P8sfRVnm4GQPAw9wKkUES9k%2Bi8TjH2ZaLwb5aUpxOS8OUBlq7K%2Bgg1hZs5eR4t2%2BE%2FiiUzymMuw%2Bx50K0Rx%2FSK2UUjtta%2BqWMMMpvax4RQoNFjxtlDY4z9qNBUkPD88kfylHcxFMElHwjAeAXVVKx1i81S09wTs3VpiXUfE%2BZzRo9CP5KkixS4R%2FGN%2B&X-Amz-Signature=cf09dc7159b659699928852a467da679165e84749ab4114cd85e85f04c89e480&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

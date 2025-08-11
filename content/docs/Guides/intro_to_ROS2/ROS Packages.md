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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJBYFWXL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzVlVspH1cNA2CDb8ezdiV%2Fc9ciCKAAnIAOUolbDj0oAiB8c06lIr2a3J%2Fi26oJsGJEXC%2BnwFkRKZstS4BwiXbF8SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTgeYCB4S6qifT27nKtwDZvDmQTYPUUbAeAoSrzRyLA3sNTeURffYb5SsZH90%2BJ0eHbpabJ8twcdDbFjIyjP1TKETq3lKD3rVBrMR6xFIAChyalV5CoovK7XCVJVbAtNsTDXoSWuO2bM5hZEi0pE2Fj8G2%2FMda0HFnFH28THZGoErwdRI2M0kOKXDtSl5JPvauGk6BdwpiknCir%2FkSBtNwevEL8EHh%2FaW6%2BosvbRZg0jEEKvaGY%2FiZaOn6CnnnPtSLRrXB5ve9cGKEzi%2F07vLJXQDReftiXDsL%2FSCbbEehGumkwYQbJnvECIReOw%2BnfhOXhzvA68LkkewBAxF4NI8L8iv9m6P3%2BJ6y1ZvXcTTgqH9kAY%2BIlwuGIseeIzCbLWC3POlI7fm8o%2Be9CTNowEUtgo%2BWg0H9DywjvsrDl5Bhb6NtLQ%2B019BakruS79vT5cLPFbuLK6lENSkV0uFMb3dDrbWQIQhePstzic8gloILvTxvTGYULar%2FrwxKR3Xf%2BRb0OpO4CZ7yxnvBnWrz7Auu6bIzmK%2FqoknlZQPz9Bj698mBKzR9lVx4aZVeo0TzgYt%2BPl3gVTM0MAIbDWDLFBhPFGSnmVKDAkyEoOZBG5BGEBgTABlnjvK7lf1F37M9cUfi8oTAR%2BnpND7rvAwqdzkxAY6pgEZQ3WQHadky8dFRX56O0xAtwbku913iFDz1htUUh%2BLsSerwW4eR0go9LE9qs5809E2NH1lfIsDD76MMp9iyDCg9qst0G0hnudrftbOA8slg5tP7Z4q1IdPTeYdyHIYsl%2BhlG%2FoFBGoyOLAC5VWYeH7PJEtKxH%2BTRSARQw6lYvqvP5Q0BWhncSkUt3nXBAwetS4Nh4wTpKTkuzNvYAzPzhEBnCjJHYI&X-Amz-Signature=fe8ceba49fec1e162a0d74f574bbf87d69ebcad38a15288d9288643fdafb9ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJBYFWXL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzVlVspH1cNA2CDb8ezdiV%2Fc9ciCKAAnIAOUolbDj0oAiB8c06lIr2a3J%2Fi26oJsGJEXC%2BnwFkRKZstS4BwiXbF8SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTgeYCB4S6qifT27nKtwDZvDmQTYPUUbAeAoSrzRyLA3sNTeURffYb5SsZH90%2BJ0eHbpabJ8twcdDbFjIyjP1TKETq3lKD3rVBrMR6xFIAChyalV5CoovK7XCVJVbAtNsTDXoSWuO2bM5hZEi0pE2Fj8G2%2FMda0HFnFH28THZGoErwdRI2M0kOKXDtSl5JPvauGk6BdwpiknCir%2FkSBtNwevEL8EHh%2FaW6%2BosvbRZg0jEEKvaGY%2FiZaOn6CnnnPtSLRrXB5ve9cGKEzi%2F07vLJXQDReftiXDsL%2FSCbbEehGumkwYQbJnvECIReOw%2BnfhOXhzvA68LkkewBAxF4NI8L8iv9m6P3%2BJ6y1ZvXcTTgqH9kAY%2BIlwuGIseeIzCbLWC3POlI7fm8o%2Be9CTNowEUtgo%2BWg0H9DywjvsrDl5Bhb6NtLQ%2B019BakruS79vT5cLPFbuLK6lENSkV0uFMb3dDrbWQIQhePstzic8gloILvTxvTGYULar%2FrwxKR3Xf%2BRb0OpO4CZ7yxnvBnWrz7Auu6bIzmK%2FqoknlZQPz9Bj698mBKzR9lVx4aZVeo0TzgYt%2BPl3gVTM0MAIbDWDLFBhPFGSnmVKDAkyEoOZBG5BGEBgTABlnjvK7lf1F37M9cUfi8oTAR%2BnpND7rvAwqdzkxAY6pgEZQ3WQHadky8dFRX56O0xAtwbku913iFDz1htUUh%2BLsSerwW4eR0go9LE9qs5809E2NH1lfIsDD76MMp9iyDCg9qst0G0hnudrftbOA8slg5tP7Z4q1IdPTeYdyHIYsl%2BhlG%2FoFBGoyOLAC5VWYeH7PJEtKxH%2BTRSARQw6lYvqvP5Q0BWhncSkUt3nXBAwetS4Nh4wTpKTkuzNvYAzPzhEBnCjJHYI&X-Amz-Signature=bdbe5045cbcd3ff4d069e7cec3ae0eb12826989607d239eb7d34a659ec55fe3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJBYFWXL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzVlVspH1cNA2CDb8ezdiV%2Fc9ciCKAAnIAOUolbDj0oAiB8c06lIr2a3J%2Fi26oJsGJEXC%2BnwFkRKZstS4BwiXbF8SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTgeYCB4S6qifT27nKtwDZvDmQTYPUUbAeAoSrzRyLA3sNTeURffYb5SsZH90%2BJ0eHbpabJ8twcdDbFjIyjP1TKETq3lKD3rVBrMR6xFIAChyalV5CoovK7XCVJVbAtNsTDXoSWuO2bM5hZEi0pE2Fj8G2%2FMda0HFnFH28THZGoErwdRI2M0kOKXDtSl5JPvauGk6BdwpiknCir%2FkSBtNwevEL8EHh%2FaW6%2BosvbRZg0jEEKvaGY%2FiZaOn6CnnnPtSLRrXB5ve9cGKEzi%2F07vLJXQDReftiXDsL%2FSCbbEehGumkwYQbJnvECIReOw%2BnfhOXhzvA68LkkewBAxF4NI8L8iv9m6P3%2BJ6y1ZvXcTTgqH9kAY%2BIlwuGIseeIzCbLWC3POlI7fm8o%2Be9CTNowEUtgo%2BWg0H9DywjvsrDl5Bhb6NtLQ%2B019BakruS79vT5cLPFbuLK6lENSkV0uFMb3dDrbWQIQhePstzic8gloILvTxvTGYULar%2FrwxKR3Xf%2BRb0OpO4CZ7yxnvBnWrz7Auu6bIzmK%2FqoknlZQPz9Bj698mBKzR9lVx4aZVeo0TzgYt%2BPl3gVTM0MAIbDWDLFBhPFGSnmVKDAkyEoOZBG5BGEBgTABlnjvK7lf1F37M9cUfi8oTAR%2BnpND7rvAwqdzkxAY6pgEZQ3WQHadky8dFRX56O0xAtwbku913iFDz1htUUh%2BLsSerwW4eR0go9LE9qs5809E2NH1lfIsDD76MMp9iyDCg9qst0G0hnudrftbOA8slg5tP7Z4q1IdPTeYdyHIYsl%2BhlG%2FoFBGoyOLAC5VWYeH7PJEtKxH%2BTRSARQw6lYvqvP5Q0BWhncSkUt3nXBAwetS4Nh4wTpKTkuzNvYAzPzhEBnCjJHYI&X-Amz-Signature=9aa91921d522c6147d13b194e136f9f46412dd260882db79529f3295e4105a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJBYFWXL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzVlVspH1cNA2CDb8ezdiV%2Fc9ciCKAAnIAOUolbDj0oAiB8c06lIr2a3J%2Fi26oJsGJEXC%2BnwFkRKZstS4BwiXbF8SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTgeYCB4S6qifT27nKtwDZvDmQTYPUUbAeAoSrzRyLA3sNTeURffYb5SsZH90%2BJ0eHbpabJ8twcdDbFjIyjP1TKETq3lKD3rVBrMR6xFIAChyalV5CoovK7XCVJVbAtNsTDXoSWuO2bM5hZEi0pE2Fj8G2%2FMda0HFnFH28THZGoErwdRI2M0kOKXDtSl5JPvauGk6BdwpiknCir%2FkSBtNwevEL8EHh%2FaW6%2BosvbRZg0jEEKvaGY%2FiZaOn6CnnnPtSLRrXB5ve9cGKEzi%2F07vLJXQDReftiXDsL%2FSCbbEehGumkwYQbJnvECIReOw%2BnfhOXhzvA68LkkewBAxF4NI8L8iv9m6P3%2BJ6y1ZvXcTTgqH9kAY%2BIlwuGIseeIzCbLWC3POlI7fm8o%2Be9CTNowEUtgo%2BWg0H9DywjvsrDl5Bhb6NtLQ%2B019BakruS79vT5cLPFbuLK6lENSkV0uFMb3dDrbWQIQhePstzic8gloILvTxvTGYULar%2FrwxKR3Xf%2BRb0OpO4CZ7yxnvBnWrz7Auu6bIzmK%2FqoknlZQPz9Bj698mBKzR9lVx4aZVeo0TzgYt%2BPl3gVTM0MAIbDWDLFBhPFGSnmVKDAkyEoOZBG5BGEBgTABlnjvK7lf1F37M9cUfi8oTAR%2BnpND7rvAwqdzkxAY6pgEZQ3WQHadky8dFRX56O0xAtwbku913iFDz1htUUh%2BLsSerwW4eR0go9LE9qs5809E2NH1lfIsDD76MMp9iyDCg9qst0G0hnudrftbOA8slg5tP7Z4q1IdPTeYdyHIYsl%2BhlG%2FoFBGoyOLAC5VWYeH7PJEtKxH%2BTRSARQw6lYvqvP5Q0BWhncSkUt3nXBAwetS4Nh4wTpKTkuzNvYAzPzhEBnCjJHYI&X-Amz-Signature=fe3220a1eb09da274a45bd25f9e19c61054f84969148f84b74a8b6bec32baaf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJBYFWXL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzVlVspH1cNA2CDb8ezdiV%2Fc9ciCKAAnIAOUolbDj0oAiB8c06lIr2a3J%2Fi26oJsGJEXC%2BnwFkRKZstS4BwiXbF8SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTgeYCB4S6qifT27nKtwDZvDmQTYPUUbAeAoSrzRyLA3sNTeURffYb5SsZH90%2BJ0eHbpabJ8twcdDbFjIyjP1TKETq3lKD3rVBrMR6xFIAChyalV5CoovK7XCVJVbAtNsTDXoSWuO2bM5hZEi0pE2Fj8G2%2FMda0HFnFH28THZGoErwdRI2M0kOKXDtSl5JPvauGk6BdwpiknCir%2FkSBtNwevEL8EHh%2FaW6%2BosvbRZg0jEEKvaGY%2FiZaOn6CnnnPtSLRrXB5ve9cGKEzi%2F07vLJXQDReftiXDsL%2FSCbbEehGumkwYQbJnvECIReOw%2BnfhOXhzvA68LkkewBAxF4NI8L8iv9m6P3%2BJ6y1ZvXcTTgqH9kAY%2BIlwuGIseeIzCbLWC3POlI7fm8o%2Be9CTNowEUtgo%2BWg0H9DywjvsrDl5Bhb6NtLQ%2B019BakruS79vT5cLPFbuLK6lENSkV0uFMb3dDrbWQIQhePstzic8gloILvTxvTGYULar%2FrwxKR3Xf%2BRb0OpO4CZ7yxnvBnWrz7Auu6bIzmK%2FqoknlZQPz9Bj698mBKzR9lVx4aZVeo0TzgYt%2BPl3gVTM0MAIbDWDLFBhPFGSnmVKDAkyEoOZBG5BGEBgTABlnjvK7lf1F37M9cUfi8oTAR%2BnpND7rvAwqdzkxAY6pgEZQ3WQHadky8dFRX56O0xAtwbku913iFDz1htUUh%2BLsSerwW4eR0go9LE9qs5809E2NH1lfIsDD76MMp9iyDCg9qst0G0hnudrftbOA8slg5tP7Z4q1IdPTeYdyHIYsl%2BhlG%2FoFBGoyOLAC5VWYeH7PJEtKxH%2BTRSARQw6lYvqvP5Q0BWhncSkUt3nXBAwetS4Nh4wTpKTkuzNvYAzPzhEBnCjJHYI&X-Amz-Signature=fef7dab5ff43f156071f900271421a6b1fa36072848953eca913b8aadcb993a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJBYFWXL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzVlVspH1cNA2CDb8ezdiV%2Fc9ciCKAAnIAOUolbDj0oAiB8c06lIr2a3J%2Fi26oJsGJEXC%2BnwFkRKZstS4BwiXbF8SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTgeYCB4S6qifT27nKtwDZvDmQTYPUUbAeAoSrzRyLA3sNTeURffYb5SsZH90%2BJ0eHbpabJ8twcdDbFjIyjP1TKETq3lKD3rVBrMR6xFIAChyalV5CoovK7XCVJVbAtNsTDXoSWuO2bM5hZEi0pE2Fj8G2%2FMda0HFnFH28THZGoErwdRI2M0kOKXDtSl5JPvauGk6BdwpiknCir%2FkSBtNwevEL8EHh%2FaW6%2BosvbRZg0jEEKvaGY%2FiZaOn6CnnnPtSLRrXB5ve9cGKEzi%2F07vLJXQDReftiXDsL%2FSCbbEehGumkwYQbJnvECIReOw%2BnfhOXhzvA68LkkewBAxF4NI8L8iv9m6P3%2BJ6y1ZvXcTTgqH9kAY%2BIlwuGIseeIzCbLWC3POlI7fm8o%2Be9CTNowEUtgo%2BWg0H9DywjvsrDl5Bhb6NtLQ%2B019BakruS79vT5cLPFbuLK6lENSkV0uFMb3dDrbWQIQhePstzic8gloILvTxvTGYULar%2FrwxKR3Xf%2BRb0OpO4CZ7yxnvBnWrz7Auu6bIzmK%2FqoknlZQPz9Bj698mBKzR9lVx4aZVeo0TzgYt%2BPl3gVTM0MAIbDWDLFBhPFGSnmVKDAkyEoOZBG5BGEBgTABlnjvK7lf1F37M9cUfi8oTAR%2BnpND7rvAwqdzkxAY6pgEZQ3WQHadky8dFRX56O0xAtwbku913iFDz1htUUh%2BLsSerwW4eR0go9LE9qs5809E2NH1lfIsDD76MMp9iyDCg9qst0G0hnudrftbOA8slg5tP7Z4q1IdPTeYdyHIYsl%2BhlG%2FoFBGoyOLAC5VWYeH7PJEtKxH%2BTRSARQw6lYvqvP5Q0BWhncSkUt3nXBAwetS4Nh4wTpKTkuzNvYAzPzhEBnCjJHYI&X-Amz-Signature=92f2fd56aa69af2622290ce2a8022c47e4305c118a097266ac086a83f12995db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJBYFWXL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzVlVspH1cNA2CDb8ezdiV%2Fc9ciCKAAnIAOUolbDj0oAiB8c06lIr2a3J%2Fi26oJsGJEXC%2BnwFkRKZstS4BwiXbF8SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTgeYCB4S6qifT27nKtwDZvDmQTYPUUbAeAoSrzRyLA3sNTeURffYb5SsZH90%2BJ0eHbpabJ8twcdDbFjIyjP1TKETq3lKD3rVBrMR6xFIAChyalV5CoovK7XCVJVbAtNsTDXoSWuO2bM5hZEi0pE2Fj8G2%2FMda0HFnFH28THZGoErwdRI2M0kOKXDtSl5JPvauGk6BdwpiknCir%2FkSBtNwevEL8EHh%2FaW6%2BosvbRZg0jEEKvaGY%2FiZaOn6CnnnPtSLRrXB5ve9cGKEzi%2F07vLJXQDReftiXDsL%2FSCbbEehGumkwYQbJnvECIReOw%2BnfhOXhzvA68LkkewBAxF4NI8L8iv9m6P3%2BJ6y1ZvXcTTgqH9kAY%2BIlwuGIseeIzCbLWC3POlI7fm8o%2Be9CTNowEUtgo%2BWg0H9DywjvsrDl5Bhb6NtLQ%2B019BakruS79vT5cLPFbuLK6lENSkV0uFMb3dDrbWQIQhePstzic8gloILvTxvTGYULar%2FrwxKR3Xf%2BRb0OpO4CZ7yxnvBnWrz7Auu6bIzmK%2FqoknlZQPz9Bj698mBKzR9lVx4aZVeo0TzgYt%2BPl3gVTM0MAIbDWDLFBhPFGSnmVKDAkyEoOZBG5BGEBgTABlnjvK7lf1F37M9cUfi8oTAR%2BnpND7rvAwqdzkxAY6pgEZQ3WQHadky8dFRX56O0xAtwbku913iFDz1htUUh%2BLsSerwW4eR0go9LE9qs5809E2NH1lfIsDD76MMp9iyDCg9qst0G0hnudrftbOA8slg5tP7Z4q1IdPTeYdyHIYsl%2BhlG%2FoFBGoyOLAC5VWYeH7PJEtKxH%2BTRSARQw6lYvqvP5Q0BWhncSkUt3nXBAwetS4Nh4wTpKTkuzNvYAzPzhEBnCjJHYI&X-Amz-Signature=e1e87c64f72e2533d0e04cda38bb0fe786e62b6a170988b00229db0b3a7fee81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBFC2B5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8sMfkiEwZKWVOv%2FoogVsXoPwOyjIWgyWU5NuXeg2%2BrAiEAz56UZAxF%2FN%2FjMtwN2pqGSW%2Fnas1UwcD4ADfRTB2Y9moqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrmfVnWjUXwnI2wSrcA%2BRhKvbMYlUwsS5iBnzFZqOM%2Fl4Fvq5APlMUPVMemBNxiW5U38ZpzGoOSfsdTEjwTVwp10Ydy2X9wdrEREeNTuQLZ6URE4ksi3meVinuZDnANkV%2FvVrx2%2FF%2BzAFQKbUCXD%2Fz4BgYfAQunBjZf2Mz9iTmoD96Yymw6RxMxCSw8oIL2KLkILvT5y0XGx26z1KW5eXqvy%2BM%2F0xmgIfe5zDQ8cHopDeYNwRXo9l4PKHVfm68RSTkR5XexIvZnlHpPCfpmomaGCwtBXQkfO65dvIZ5dgHT%2BJK%2FEVNst9ix6fyQpMgx8vq22D5OwtYA5UliyJ1MvLs%2BQmM3x4ds%2F6hKyi60Oso1qnw%2FU%2BIwuLrBJysJzkJvGMtvIxz1r3wn7gF4Djkj6ISrfkqfn0PLh2WQdA3zZFA0%2BaqWdUiNPTOxpsrg1yrLHVDg2R4WQgYVRkAHXzgUXLXEkEbB5LIJWbwNQafsIDGHuGisA53Vmhl2FF7tLM%2BaZZhvkcug0RQtmK4zUhjNSW4yjlwHM7n%2B%2Bd5%2F5opfq64vGoH0b%2BqcY0zTecZxE8a1mimplwQ0hemjtrIkPisiGLDZHUn561DoQtRSZjdfXJXve%2Fu2GEpRHTAoETsqmr%2B4T%2FxH%2Fx5HuL767HsMNbNi8MGOqUBONr7sWXdLNS3QefGO0LOBp6pMnU47YrzxvQCE3kkgALuTNXGFSQqqc0u%2BzwZvQ0XYLmWBg2hcUM4g2WU%2BewjJiuGlwbvzf%2FDLR1Wvl%2BGztcpYVse04EHLIxf8r%2BzpQ%2FFMnmx4FajX2soUmt%2BlhcQL5HvNdOMLIcMms%2BoFS2mdrikVpPnAh6ogJW4SqSBtbNp3PvMoBhZioZWBbZkOt8OAA%2Fqa4JJ&X-Amz-Signature=e6eb613d6882ce6aa9d2ad60a5674db897c11f6d2a1be55b597048c7cb46a7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBFC2B5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8sMfkiEwZKWVOv%2FoogVsXoPwOyjIWgyWU5NuXeg2%2BrAiEAz56UZAxF%2FN%2FjMtwN2pqGSW%2Fnas1UwcD4ADfRTB2Y9moqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrmfVnWjUXwnI2wSrcA%2BRhKvbMYlUwsS5iBnzFZqOM%2Fl4Fvq5APlMUPVMemBNxiW5U38ZpzGoOSfsdTEjwTVwp10Ydy2X9wdrEREeNTuQLZ6URE4ksi3meVinuZDnANkV%2FvVrx2%2FF%2BzAFQKbUCXD%2Fz4BgYfAQunBjZf2Mz9iTmoD96Yymw6RxMxCSw8oIL2KLkILvT5y0XGx26z1KW5eXqvy%2BM%2F0xmgIfe5zDQ8cHopDeYNwRXo9l4PKHVfm68RSTkR5XexIvZnlHpPCfpmomaGCwtBXQkfO65dvIZ5dgHT%2BJK%2FEVNst9ix6fyQpMgx8vq22D5OwtYA5UliyJ1MvLs%2BQmM3x4ds%2F6hKyi60Oso1qnw%2FU%2BIwuLrBJysJzkJvGMtvIxz1r3wn7gF4Djkj6ISrfkqfn0PLh2WQdA3zZFA0%2BaqWdUiNPTOxpsrg1yrLHVDg2R4WQgYVRkAHXzgUXLXEkEbB5LIJWbwNQafsIDGHuGisA53Vmhl2FF7tLM%2BaZZhvkcug0RQtmK4zUhjNSW4yjlwHM7n%2B%2Bd5%2F5opfq64vGoH0b%2BqcY0zTecZxE8a1mimplwQ0hemjtrIkPisiGLDZHUn561DoQtRSZjdfXJXve%2Fu2GEpRHTAoETsqmr%2B4T%2FxH%2Fx5HuL767HsMNbNi8MGOqUBONr7sWXdLNS3QefGO0LOBp6pMnU47YrzxvQCE3kkgALuTNXGFSQqqc0u%2BzwZvQ0XYLmWBg2hcUM4g2WU%2BewjJiuGlwbvzf%2FDLR1Wvl%2BGztcpYVse04EHLIxf8r%2BzpQ%2FFMnmx4FajX2soUmt%2BlhcQL5HvNdOMLIcMms%2BoFS2mdrikVpPnAh6ogJW4SqSBtbNp3PvMoBhZioZWBbZkOt8OAA%2Fqa4JJ&X-Amz-Signature=e47787111d62a7e468c13839862eb334b742d4fc9950c169c7013ce9e09efe8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBFC2B5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8sMfkiEwZKWVOv%2FoogVsXoPwOyjIWgyWU5NuXeg2%2BrAiEAz56UZAxF%2FN%2FjMtwN2pqGSW%2Fnas1UwcD4ADfRTB2Y9moqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrmfVnWjUXwnI2wSrcA%2BRhKvbMYlUwsS5iBnzFZqOM%2Fl4Fvq5APlMUPVMemBNxiW5U38ZpzGoOSfsdTEjwTVwp10Ydy2X9wdrEREeNTuQLZ6URE4ksi3meVinuZDnANkV%2FvVrx2%2FF%2BzAFQKbUCXD%2Fz4BgYfAQunBjZf2Mz9iTmoD96Yymw6RxMxCSw8oIL2KLkILvT5y0XGx26z1KW5eXqvy%2BM%2F0xmgIfe5zDQ8cHopDeYNwRXo9l4PKHVfm68RSTkR5XexIvZnlHpPCfpmomaGCwtBXQkfO65dvIZ5dgHT%2BJK%2FEVNst9ix6fyQpMgx8vq22D5OwtYA5UliyJ1MvLs%2BQmM3x4ds%2F6hKyi60Oso1qnw%2FU%2BIwuLrBJysJzkJvGMtvIxz1r3wn7gF4Djkj6ISrfkqfn0PLh2WQdA3zZFA0%2BaqWdUiNPTOxpsrg1yrLHVDg2R4WQgYVRkAHXzgUXLXEkEbB5LIJWbwNQafsIDGHuGisA53Vmhl2FF7tLM%2BaZZhvkcug0RQtmK4zUhjNSW4yjlwHM7n%2B%2Bd5%2F5opfq64vGoH0b%2BqcY0zTecZxE8a1mimplwQ0hemjtrIkPisiGLDZHUn561DoQtRSZjdfXJXve%2Fu2GEpRHTAoETsqmr%2B4T%2FxH%2Fx5HuL767HsMNbNi8MGOqUBONr7sWXdLNS3QefGO0LOBp6pMnU47YrzxvQCE3kkgALuTNXGFSQqqc0u%2BzwZvQ0XYLmWBg2hcUM4g2WU%2BewjJiuGlwbvzf%2FDLR1Wvl%2BGztcpYVse04EHLIxf8r%2BzpQ%2FFMnmx4FajX2soUmt%2BlhcQL5HvNdOMLIcMms%2BoFS2mdrikVpPnAh6ogJW4SqSBtbNp3PvMoBhZioZWBbZkOt8OAA%2Fqa4JJ&X-Amz-Signature=1bdbcdda5b7a21f2f37cfa236b4a1e478c4d41aa93dc56c7b6c5e3416d6eac86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBFC2B5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8sMfkiEwZKWVOv%2FoogVsXoPwOyjIWgyWU5NuXeg2%2BrAiEAz56UZAxF%2FN%2FjMtwN2pqGSW%2Fnas1UwcD4ADfRTB2Y9moqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrmfVnWjUXwnI2wSrcA%2BRhKvbMYlUwsS5iBnzFZqOM%2Fl4Fvq5APlMUPVMemBNxiW5U38ZpzGoOSfsdTEjwTVwp10Ydy2X9wdrEREeNTuQLZ6URE4ksi3meVinuZDnANkV%2FvVrx2%2FF%2BzAFQKbUCXD%2Fz4BgYfAQunBjZf2Mz9iTmoD96Yymw6RxMxCSw8oIL2KLkILvT5y0XGx26z1KW5eXqvy%2BM%2F0xmgIfe5zDQ8cHopDeYNwRXo9l4PKHVfm68RSTkR5XexIvZnlHpPCfpmomaGCwtBXQkfO65dvIZ5dgHT%2BJK%2FEVNst9ix6fyQpMgx8vq22D5OwtYA5UliyJ1MvLs%2BQmM3x4ds%2F6hKyi60Oso1qnw%2FU%2BIwuLrBJysJzkJvGMtvIxz1r3wn7gF4Djkj6ISrfkqfn0PLh2WQdA3zZFA0%2BaqWdUiNPTOxpsrg1yrLHVDg2R4WQgYVRkAHXzgUXLXEkEbB5LIJWbwNQafsIDGHuGisA53Vmhl2FF7tLM%2BaZZhvkcug0RQtmK4zUhjNSW4yjlwHM7n%2B%2Bd5%2F5opfq64vGoH0b%2BqcY0zTecZxE8a1mimplwQ0hemjtrIkPisiGLDZHUn561DoQtRSZjdfXJXve%2Fu2GEpRHTAoETsqmr%2B4T%2FxH%2Fx5HuL767HsMNbNi8MGOqUBONr7sWXdLNS3QefGO0LOBp6pMnU47YrzxvQCE3kkgALuTNXGFSQqqc0u%2BzwZvQ0XYLmWBg2hcUM4g2WU%2BewjJiuGlwbvzf%2FDLR1Wvl%2BGztcpYVse04EHLIxf8r%2BzpQ%2FFMnmx4FajX2soUmt%2BlhcQL5HvNdOMLIcMms%2BoFS2mdrikVpPnAh6ogJW4SqSBtbNp3PvMoBhZioZWBbZkOt8OAA%2Fqa4JJ&X-Amz-Signature=039901d4a0a870a78444b13be876cd237d1d7d563600e9c98323b1b171792c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBFC2B5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8sMfkiEwZKWVOv%2FoogVsXoPwOyjIWgyWU5NuXeg2%2BrAiEAz56UZAxF%2FN%2FjMtwN2pqGSW%2Fnas1UwcD4ADfRTB2Y9moqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrmfVnWjUXwnI2wSrcA%2BRhKvbMYlUwsS5iBnzFZqOM%2Fl4Fvq5APlMUPVMemBNxiW5U38ZpzGoOSfsdTEjwTVwp10Ydy2X9wdrEREeNTuQLZ6URE4ksi3meVinuZDnANkV%2FvVrx2%2FF%2BzAFQKbUCXD%2Fz4BgYfAQunBjZf2Mz9iTmoD96Yymw6RxMxCSw8oIL2KLkILvT5y0XGx26z1KW5eXqvy%2BM%2F0xmgIfe5zDQ8cHopDeYNwRXo9l4PKHVfm68RSTkR5XexIvZnlHpPCfpmomaGCwtBXQkfO65dvIZ5dgHT%2BJK%2FEVNst9ix6fyQpMgx8vq22D5OwtYA5UliyJ1MvLs%2BQmM3x4ds%2F6hKyi60Oso1qnw%2FU%2BIwuLrBJysJzkJvGMtvIxz1r3wn7gF4Djkj6ISrfkqfn0PLh2WQdA3zZFA0%2BaqWdUiNPTOxpsrg1yrLHVDg2R4WQgYVRkAHXzgUXLXEkEbB5LIJWbwNQafsIDGHuGisA53Vmhl2FF7tLM%2BaZZhvkcug0RQtmK4zUhjNSW4yjlwHM7n%2B%2Bd5%2F5opfq64vGoH0b%2BqcY0zTecZxE8a1mimplwQ0hemjtrIkPisiGLDZHUn561DoQtRSZjdfXJXve%2Fu2GEpRHTAoETsqmr%2B4T%2FxH%2Fx5HuL767HsMNbNi8MGOqUBONr7sWXdLNS3QefGO0LOBp6pMnU47YrzxvQCE3kkgALuTNXGFSQqqc0u%2BzwZvQ0XYLmWBg2hcUM4g2WU%2BewjJiuGlwbvzf%2FDLR1Wvl%2BGztcpYVse04EHLIxf8r%2BzpQ%2FFMnmx4FajX2soUmt%2BlhcQL5HvNdOMLIcMms%2BoFS2mdrikVpPnAh6ogJW4SqSBtbNp3PvMoBhZioZWBbZkOt8OAA%2Fqa4JJ&X-Amz-Signature=d61e65f2eabe96c024f9ace24230015745f90b269387c8d9557a030e209c81c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBFC2B5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8sMfkiEwZKWVOv%2FoogVsXoPwOyjIWgyWU5NuXeg2%2BrAiEAz56UZAxF%2FN%2FjMtwN2pqGSW%2Fnas1UwcD4ADfRTB2Y9moqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrmfVnWjUXwnI2wSrcA%2BRhKvbMYlUwsS5iBnzFZqOM%2Fl4Fvq5APlMUPVMemBNxiW5U38ZpzGoOSfsdTEjwTVwp10Ydy2X9wdrEREeNTuQLZ6URE4ksi3meVinuZDnANkV%2FvVrx2%2FF%2BzAFQKbUCXD%2Fz4BgYfAQunBjZf2Mz9iTmoD96Yymw6RxMxCSw8oIL2KLkILvT5y0XGx26z1KW5eXqvy%2BM%2F0xmgIfe5zDQ8cHopDeYNwRXo9l4PKHVfm68RSTkR5XexIvZnlHpPCfpmomaGCwtBXQkfO65dvIZ5dgHT%2BJK%2FEVNst9ix6fyQpMgx8vq22D5OwtYA5UliyJ1MvLs%2BQmM3x4ds%2F6hKyi60Oso1qnw%2FU%2BIwuLrBJysJzkJvGMtvIxz1r3wn7gF4Djkj6ISrfkqfn0PLh2WQdA3zZFA0%2BaqWdUiNPTOxpsrg1yrLHVDg2R4WQgYVRkAHXzgUXLXEkEbB5LIJWbwNQafsIDGHuGisA53Vmhl2FF7tLM%2BaZZhvkcug0RQtmK4zUhjNSW4yjlwHM7n%2B%2Bd5%2F5opfq64vGoH0b%2BqcY0zTecZxE8a1mimplwQ0hemjtrIkPisiGLDZHUn561DoQtRSZjdfXJXve%2Fu2GEpRHTAoETsqmr%2B4T%2FxH%2Fx5HuL767HsMNbNi8MGOqUBONr7sWXdLNS3QefGO0LOBp6pMnU47YrzxvQCE3kkgALuTNXGFSQqqc0u%2BzwZvQ0XYLmWBg2hcUM4g2WU%2BewjJiuGlwbvzf%2FDLR1Wvl%2BGztcpYVse04EHLIxf8r%2BzpQ%2FFMnmx4FajX2soUmt%2BlhcQL5HvNdOMLIcMms%2BoFS2mdrikVpPnAh6ogJW4SqSBtbNp3PvMoBhZioZWBbZkOt8OAA%2Fqa4JJ&X-Amz-Signature=33938a252fdb8fc9bde1ef226c24491780c0800dbda1818de788f26c90dceb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBFC2B5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8sMfkiEwZKWVOv%2FoogVsXoPwOyjIWgyWU5NuXeg2%2BrAiEAz56UZAxF%2FN%2FjMtwN2pqGSW%2Fnas1UwcD4ADfRTB2Y9moqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrmfVnWjUXwnI2wSrcA%2BRhKvbMYlUwsS5iBnzFZqOM%2Fl4Fvq5APlMUPVMemBNxiW5U38ZpzGoOSfsdTEjwTVwp10Ydy2X9wdrEREeNTuQLZ6URE4ksi3meVinuZDnANkV%2FvVrx2%2FF%2BzAFQKbUCXD%2Fz4BgYfAQunBjZf2Mz9iTmoD96Yymw6RxMxCSw8oIL2KLkILvT5y0XGx26z1KW5eXqvy%2BM%2F0xmgIfe5zDQ8cHopDeYNwRXo9l4PKHVfm68RSTkR5XexIvZnlHpPCfpmomaGCwtBXQkfO65dvIZ5dgHT%2BJK%2FEVNst9ix6fyQpMgx8vq22D5OwtYA5UliyJ1MvLs%2BQmM3x4ds%2F6hKyi60Oso1qnw%2FU%2BIwuLrBJysJzkJvGMtvIxz1r3wn7gF4Djkj6ISrfkqfn0PLh2WQdA3zZFA0%2BaqWdUiNPTOxpsrg1yrLHVDg2R4WQgYVRkAHXzgUXLXEkEbB5LIJWbwNQafsIDGHuGisA53Vmhl2FF7tLM%2BaZZhvkcug0RQtmK4zUhjNSW4yjlwHM7n%2B%2Bd5%2F5opfq64vGoH0b%2BqcY0zTecZxE8a1mimplwQ0hemjtrIkPisiGLDZHUn561DoQtRSZjdfXJXve%2Fu2GEpRHTAoETsqmr%2B4T%2FxH%2Fx5HuL767HsMNbNi8MGOqUBONr7sWXdLNS3QefGO0LOBp6pMnU47YrzxvQCE3kkgALuTNXGFSQqqc0u%2BzwZvQ0XYLmWBg2hcUM4g2WU%2BewjJiuGlwbvzf%2FDLR1Wvl%2BGztcpYVse04EHLIxf8r%2BzpQ%2FFMnmx4FajX2soUmt%2BlhcQL5HvNdOMLIcMms%2BoFS2mdrikVpPnAh6ogJW4SqSBtbNp3PvMoBhZioZWBbZkOt8OAA%2Fqa4JJ&X-Amz-Signature=7093dbb1b2dff8848a5ff0ce4cc2b4223977889bfda7e27db169ac6002d07770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

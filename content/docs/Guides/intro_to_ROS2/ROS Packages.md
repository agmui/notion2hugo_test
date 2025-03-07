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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLFHXFKW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFvaM2Qf9puz8h7V6nOdKKibMvj4WDaayGIMkUNvqIgIgbtJ7PybbFNMXKGRQBPy4Mh%2B82it4q5TagkPqZuxCDgEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ%2Fi61m5ge5mCBJsHCrcA3hNE8leBzOA2UvLsuVXrOz7BSc6AxFnD8LfPurmTnZ5Z%2BXrklCnZNYvm6xXdSZQC0WtwvqIk15HMgryUXQSTbYeqXqzaFonTgF7qmQ2woMyM0x9nlba%2Bjy4L0e6b%2F4iVStIP1egeIT%2BDfKVf%2FWSCqbT1ze0YT9fUN1fH78oF%2FksaFkS71nhNT5kflBdTXAwdNzwQM9yze48g5aImpIHv%2FuF7mGpR12M5hu5SWzb1nAXpM8XqkBvilOu8vzQquvZE%2BepcwTw%2FHrPdYlmIuJ1hyB7Br%2FrPhQEi8EEN7qDh%2B5b5j%2Fu%2BgujhPORHfoLduLu4QXhhHkd63O6N3ABcypsAJ86mHJHBaLjHyAigwAJmWyfsLgnHTm47vdvAWpYC%2Beds%2Bbql6G3cOdP7VnZDpUlPmriq15YgJAwxLYLQwd%2BJSTqI5uYT2SWmG0EA7YLvbx9xD6D4qlTGW%2FzdCuts8cc78mUNtN7gCEQVdSaeOQzjIA1i%2Bjjvc1F5qOPspj2HC01TDopyImSL9aZL1HYIhBA98YjeCDh%2BEPWX2RXvFTX0krkDUXL2xvOIXLPPOBXwhe6%2Fk5aUQ4TiLlS3HujeHHtTbZlfNFlAnI2mSSBTPdnv6ERCcS3I66NkRiYRsyIMO%2FHqr4GOqUBhFxzdEG55RK9DUaixZ7R3DvslWYE4DsaWue6%2FMOYRRFIqnj5LxJXtF2kYaE4JgsUMfwvOgw%2BD5Jnc%2BMs9ilj6yqMlRIZDgo6jD69nHV2xWMLgklhkSXVqiK86FBfBN6R9EN%2FcpoHUGATvo3WqiAG5%2Fw0QYnznW8kxwSdOGMXmezI0Zc4kFJIpLL11SnoHcBp5eFFMXsU1ebAlXwK8%2B85Pr8YqCBH&X-Amz-Signature=391d4cfe69ce6af9855c89573d0ec68c0e90e4402874fc31f7ec42f2caab60e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLFHXFKW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFvaM2Qf9puz8h7V6nOdKKibMvj4WDaayGIMkUNvqIgIgbtJ7PybbFNMXKGRQBPy4Mh%2B82it4q5TagkPqZuxCDgEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ%2Fi61m5ge5mCBJsHCrcA3hNE8leBzOA2UvLsuVXrOz7BSc6AxFnD8LfPurmTnZ5Z%2BXrklCnZNYvm6xXdSZQC0WtwvqIk15HMgryUXQSTbYeqXqzaFonTgF7qmQ2woMyM0x9nlba%2Bjy4L0e6b%2F4iVStIP1egeIT%2BDfKVf%2FWSCqbT1ze0YT9fUN1fH78oF%2FksaFkS71nhNT5kflBdTXAwdNzwQM9yze48g5aImpIHv%2FuF7mGpR12M5hu5SWzb1nAXpM8XqkBvilOu8vzQquvZE%2BepcwTw%2FHrPdYlmIuJ1hyB7Br%2FrPhQEi8EEN7qDh%2B5b5j%2Fu%2BgujhPORHfoLduLu4QXhhHkd63O6N3ABcypsAJ86mHJHBaLjHyAigwAJmWyfsLgnHTm47vdvAWpYC%2Beds%2Bbql6G3cOdP7VnZDpUlPmriq15YgJAwxLYLQwd%2BJSTqI5uYT2SWmG0EA7YLvbx9xD6D4qlTGW%2FzdCuts8cc78mUNtN7gCEQVdSaeOQzjIA1i%2Bjjvc1F5qOPspj2HC01TDopyImSL9aZL1HYIhBA98YjeCDh%2BEPWX2RXvFTX0krkDUXL2xvOIXLPPOBXwhe6%2Fk5aUQ4TiLlS3HujeHHtTbZlfNFlAnI2mSSBTPdnv6ERCcS3I66NkRiYRsyIMO%2FHqr4GOqUBhFxzdEG55RK9DUaixZ7R3DvslWYE4DsaWue6%2FMOYRRFIqnj5LxJXtF2kYaE4JgsUMfwvOgw%2BD5Jnc%2BMs9ilj6yqMlRIZDgo6jD69nHV2xWMLgklhkSXVqiK86FBfBN6R9EN%2FcpoHUGATvo3WqiAG5%2Fw0QYnznW8kxwSdOGMXmezI0Zc4kFJIpLL11SnoHcBp5eFFMXsU1ebAlXwK8%2B85Pr8YqCBH&X-Amz-Signature=557d84cb51b2a9f88fb62f88b324c3820ab8640aa135ffd1a9700cf67488c177&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLFHXFKW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFvaM2Qf9puz8h7V6nOdKKibMvj4WDaayGIMkUNvqIgIgbtJ7PybbFNMXKGRQBPy4Mh%2B82it4q5TagkPqZuxCDgEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ%2Fi61m5ge5mCBJsHCrcA3hNE8leBzOA2UvLsuVXrOz7BSc6AxFnD8LfPurmTnZ5Z%2BXrklCnZNYvm6xXdSZQC0WtwvqIk15HMgryUXQSTbYeqXqzaFonTgF7qmQ2woMyM0x9nlba%2Bjy4L0e6b%2F4iVStIP1egeIT%2BDfKVf%2FWSCqbT1ze0YT9fUN1fH78oF%2FksaFkS71nhNT5kflBdTXAwdNzwQM9yze48g5aImpIHv%2FuF7mGpR12M5hu5SWzb1nAXpM8XqkBvilOu8vzQquvZE%2BepcwTw%2FHrPdYlmIuJ1hyB7Br%2FrPhQEi8EEN7qDh%2B5b5j%2Fu%2BgujhPORHfoLduLu4QXhhHkd63O6N3ABcypsAJ86mHJHBaLjHyAigwAJmWyfsLgnHTm47vdvAWpYC%2Beds%2Bbql6G3cOdP7VnZDpUlPmriq15YgJAwxLYLQwd%2BJSTqI5uYT2SWmG0EA7YLvbx9xD6D4qlTGW%2FzdCuts8cc78mUNtN7gCEQVdSaeOQzjIA1i%2Bjjvc1F5qOPspj2HC01TDopyImSL9aZL1HYIhBA98YjeCDh%2BEPWX2RXvFTX0krkDUXL2xvOIXLPPOBXwhe6%2Fk5aUQ4TiLlS3HujeHHtTbZlfNFlAnI2mSSBTPdnv6ERCcS3I66NkRiYRsyIMO%2FHqr4GOqUBhFxzdEG55RK9DUaixZ7R3DvslWYE4DsaWue6%2FMOYRRFIqnj5LxJXtF2kYaE4JgsUMfwvOgw%2BD5Jnc%2BMs9ilj6yqMlRIZDgo6jD69nHV2xWMLgklhkSXVqiK86FBfBN6R9EN%2FcpoHUGATvo3WqiAG5%2Fw0QYnznW8kxwSdOGMXmezI0Zc4kFJIpLL11SnoHcBp5eFFMXsU1ebAlXwK8%2B85Pr8YqCBH&X-Amz-Signature=0a00310cb035cd7a3cc84f740312a183225e3cb628c8f9a66a88523194178ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLFHXFKW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFvaM2Qf9puz8h7V6nOdKKibMvj4WDaayGIMkUNvqIgIgbtJ7PybbFNMXKGRQBPy4Mh%2B82it4q5TagkPqZuxCDgEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ%2Fi61m5ge5mCBJsHCrcA3hNE8leBzOA2UvLsuVXrOz7BSc6AxFnD8LfPurmTnZ5Z%2BXrklCnZNYvm6xXdSZQC0WtwvqIk15HMgryUXQSTbYeqXqzaFonTgF7qmQ2woMyM0x9nlba%2Bjy4L0e6b%2F4iVStIP1egeIT%2BDfKVf%2FWSCqbT1ze0YT9fUN1fH78oF%2FksaFkS71nhNT5kflBdTXAwdNzwQM9yze48g5aImpIHv%2FuF7mGpR12M5hu5SWzb1nAXpM8XqkBvilOu8vzQquvZE%2BepcwTw%2FHrPdYlmIuJ1hyB7Br%2FrPhQEi8EEN7qDh%2B5b5j%2Fu%2BgujhPORHfoLduLu4QXhhHkd63O6N3ABcypsAJ86mHJHBaLjHyAigwAJmWyfsLgnHTm47vdvAWpYC%2Beds%2Bbql6G3cOdP7VnZDpUlPmriq15YgJAwxLYLQwd%2BJSTqI5uYT2SWmG0EA7YLvbx9xD6D4qlTGW%2FzdCuts8cc78mUNtN7gCEQVdSaeOQzjIA1i%2Bjjvc1F5qOPspj2HC01TDopyImSL9aZL1HYIhBA98YjeCDh%2BEPWX2RXvFTX0krkDUXL2xvOIXLPPOBXwhe6%2Fk5aUQ4TiLlS3HujeHHtTbZlfNFlAnI2mSSBTPdnv6ERCcS3I66NkRiYRsyIMO%2FHqr4GOqUBhFxzdEG55RK9DUaixZ7R3DvslWYE4DsaWue6%2FMOYRRFIqnj5LxJXtF2kYaE4JgsUMfwvOgw%2BD5Jnc%2BMs9ilj6yqMlRIZDgo6jD69nHV2xWMLgklhkSXVqiK86FBfBN6R9EN%2FcpoHUGATvo3WqiAG5%2Fw0QYnznW8kxwSdOGMXmezI0Zc4kFJIpLL11SnoHcBp5eFFMXsU1ebAlXwK8%2B85Pr8YqCBH&X-Amz-Signature=ac007250c6f9d9a4df4a4c238901c5a1c2663b4d79752e5c63d7aae916747091&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLFHXFKW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFvaM2Qf9puz8h7V6nOdKKibMvj4WDaayGIMkUNvqIgIgbtJ7PybbFNMXKGRQBPy4Mh%2B82it4q5TagkPqZuxCDgEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ%2Fi61m5ge5mCBJsHCrcA3hNE8leBzOA2UvLsuVXrOz7BSc6AxFnD8LfPurmTnZ5Z%2BXrklCnZNYvm6xXdSZQC0WtwvqIk15HMgryUXQSTbYeqXqzaFonTgF7qmQ2woMyM0x9nlba%2Bjy4L0e6b%2F4iVStIP1egeIT%2BDfKVf%2FWSCqbT1ze0YT9fUN1fH78oF%2FksaFkS71nhNT5kflBdTXAwdNzwQM9yze48g5aImpIHv%2FuF7mGpR12M5hu5SWzb1nAXpM8XqkBvilOu8vzQquvZE%2BepcwTw%2FHrPdYlmIuJ1hyB7Br%2FrPhQEi8EEN7qDh%2B5b5j%2Fu%2BgujhPORHfoLduLu4QXhhHkd63O6N3ABcypsAJ86mHJHBaLjHyAigwAJmWyfsLgnHTm47vdvAWpYC%2Beds%2Bbql6G3cOdP7VnZDpUlPmriq15YgJAwxLYLQwd%2BJSTqI5uYT2SWmG0EA7YLvbx9xD6D4qlTGW%2FzdCuts8cc78mUNtN7gCEQVdSaeOQzjIA1i%2Bjjvc1F5qOPspj2HC01TDopyImSL9aZL1HYIhBA98YjeCDh%2BEPWX2RXvFTX0krkDUXL2xvOIXLPPOBXwhe6%2Fk5aUQ4TiLlS3HujeHHtTbZlfNFlAnI2mSSBTPdnv6ERCcS3I66NkRiYRsyIMO%2FHqr4GOqUBhFxzdEG55RK9DUaixZ7R3DvslWYE4DsaWue6%2FMOYRRFIqnj5LxJXtF2kYaE4JgsUMfwvOgw%2BD5Jnc%2BMs9ilj6yqMlRIZDgo6jD69nHV2xWMLgklhkSXVqiK86FBfBN6R9EN%2FcpoHUGATvo3WqiAG5%2Fw0QYnznW8kxwSdOGMXmezI0Zc4kFJIpLL11SnoHcBp5eFFMXsU1ebAlXwK8%2B85Pr8YqCBH&X-Amz-Signature=9ab1a4264b02bd3f30f70433740cf8076a8a6cf7790b19d2ea8f47cd3a21bafa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLFHXFKW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFvaM2Qf9puz8h7V6nOdKKibMvj4WDaayGIMkUNvqIgIgbtJ7PybbFNMXKGRQBPy4Mh%2B82it4q5TagkPqZuxCDgEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ%2Fi61m5ge5mCBJsHCrcA3hNE8leBzOA2UvLsuVXrOz7BSc6AxFnD8LfPurmTnZ5Z%2BXrklCnZNYvm6xXdSZQC0WtwvqIk15HMgryUXQSTbYeqXqzaFonTgF7qmQ2woMyM0x9nlba%2Bjy4L0e6b%2F4iVStIP1egeIT%2BDfKVf%2FWSCqbT1ze0YT9fUN1fH78oF%2FksaFkS71nhNT5kflBdTXAwdNzwQM9yze48g5aImpIHv%2FuF7mGpR12M5hu5SWzb1nAXpM8XqkBvilOu8vzQquvZE%2BepcwTw%2FHrPdYlmIuJ1hyB7Br%2FrPhQEi8EEN7qDh%2B5b5j%2Fu%2BgujhPORHfoLduLu4QXhhHkd63O6N3ABcypsAJ86mHJHBaLjHyAigwAJmWyfsLgnHTm47vdvAWpYC%2Beds%2Bbql6G3cOdP7VnZDpUlPmriq15YgJAwxLYLQwd%2BJSTqI5uYT2SWmG0EA7YLvbx9xD6D4qlTGW%2FzdCuts8cc78mUNtN7gCEQVdSaeOQzjIA1i%2Bjjvc1F5qOPspj2HC01TDopyImSL9aZL1HYIhBA98YjeCDh%2BEPWX2RXvFTX0krkDUXL2xvOIXLPPOBXwhe6%2Fk5aUQ4TiLlS3HujeHHtTbZlfNFlAnI2mSSBTPdnv6ERCcS3I66NkRiYRsyIMO%2FHqr4GOqUBhFxzdEG55RK9DUaixZ7R3DvslWYE4DsaWue6%2FMOYRRFIqnj5LxJXtF2kYaE4JgsUMfwvOgw%2BD5Jnc%2BMs9ilj6yqMlRIZDgo6jD69nHV2xWMLgklhkSXVqiK86FBfBN6R9EN%2FcpoHUGATvo3WqiAG5%2Fw0QYnznW8kxwSdOGMXmezI0Zc4kFJIpLL11SnoHcBp5eFFMXsU1ebAlXwK8%2B85Pr8YqCBH&X-Amz-Signature=f6ab5a2d6fab129ace51f12d48bbf91ac9d53df795c49b8757e6fda5b96b8ced&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLFHXFKW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFvaM2Qf9puz8h7V6nOdKKibMvj4WDaayGIMkUNvqIgIgbtJ7PybbFNMXKGRQBPy4Mh%2B82it4q5TagkPqZuxCDgEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ%2Fi61m5ge5mCBJsHCrcA3hNE8leBzOA2UvLsuVXrOz7BSc6AxFnD8LfPurmTnZ5Z%2BXrklCnZNYvm6xXdSZQC0WtwvqIk15HMgryUXQSTbYeqXqzaFonTgF7qmQ2woMyM0x9nlba%2Bjy4L0e6b%2F4iVStIP1egeIT%2BDfKVf%2FWSCqbT1ze0YT9fUN1fH78oF%2FksaFkS71nhNT5kflBdTXAwdNzwQM9yze48g5aImpIHv%2FuF7mGpR12M5hu5SWzb1nAXpM8XqkBvilOu8vzQquvZE%2BepcwTw%2FHrPdYlmIuJ1hyB7Br%2FrPhQEi8EEN7qDh%2B5b5j%2Fu%2BgujhPORHfoLduLu4QXhhHkd63O6N3ABcypsAJ86mHJHBaLjHyAigwAJmWyfsLgnHTm47vdvAWpYC%2Beds%2Bbql6G3cOdP7VnZDpUlPmriq15YgJAwxLYLQwd%2BJSTqI5uYT2SWmG0EA7YLvbx9xD6D4qlTGW%2FzdCuts8cc78mUNtN7gCEQVdSaeOQzjIA1i%2Bjjvc1F5qOPspj2HC01TDopyImSL9aZL1HYIhBA98YjeCDh%2BEPWX2RXvFTX0krkDUXL2xvOIXLPPOBXwhe6%2Fk5aUQ4TiLlS3HujeHHtTbZlfNFlAnI2mSSBTPdnv6ERCcS3I66NkRiYRsyIMO%2FHqr4GOqUBhFxzdEG55RK9DUaixZ7R3DvslWYE4DsaWue6%2FMOYRRFIqnj5LxJXtF2kYaE4JgsUMfwvOgw%2BD5Jnc%2BMs9ilj6yqMlRIZDgo6jD69nHV2xWMLgklhkSXVqiK86FBfBN6R9EN%2FcpoHUGATvo3WqiAG5%2Fw0QYnznW8kxwSdOGMXmezI0Zc4kFJIpLL11SnoHcBp5eFFMXsU1ebAlXwK8%2B85Pr8YqCBH&X-Amz-Signature=bacf670b1876596a4d947258f846945a3c896e360fcd468378430055fb2ab9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

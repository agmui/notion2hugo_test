---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3PX7X3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBjWpHowKDakODue4tEBHruxBbf6ngvo25Sa%2F3990%2B7xAiEAzQRdFMpVyBqQ0pCW2Z8gensXrYlLIacJq2kDfDDOJwoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBDkCbqMMQkx%2F6lzpSrcA57AcwBBtnYsfAW27VJDXCFFN5Xnqh22AY%2FWfVThxNBKNixIVp9vIrCiGRU4WyPPuwOUBG9Fu7xCOYVievsvCIaQl5AYsgZb5NDNxlSNdXSqw9lZxSNk8YQqKv4B7Sp38gP%2B2WZmWlo7%2FM44BQlUeeIdRlTr1l3Dg8TM3skvqB3dXxm8aFcNg5qyoVg3uEnOcS52e%2F9UsysRm7Qbr%2BjpMs1GizwGX7r%2F1S3hc5MOledf68Sb1W3bIILWg61eAw0wRzioaZLtV4LuzEW0h%2F2l3%2FjV0ydmb%2B8NkAngt2ZOOt3aEpYeVKV1D1dtMTVqapCh0K0xvEnqb9sTMjHQ9qoUPSoxwrhTA8%2BHlquuMT%2F4IN9sym8oENYccCPQIwQ%2FxLUPG3PnQsQy5D5mZpHFnpUD2YhUCklEeHJb%2BsrHQsXMoY1hU4POBO3lijUG%2FnDKeS%2FxlV6t34x20qy99G0%2FE9zgGXg7Lsq40PIDDtSmFlMZk%2BpcG1gdmZzxYYIFuPlgFrUNwls9rhcb4xNrdzAyNPFGQgJHL2HN714VNL2qjZo8vilTvxH2L9PXnHx3jI4PGg%2BkUYISRp%2BKssTxqhKT2LP5yKYI9gqTZLyC0Jy0hAd6PPRtw4SeJFgkmukVLeF6MLn3gMUGOqUBS7d2syO9pDWzYRP75ouC%2FKd3vLmaFfA38mzTNN2eqFSx69SUx02XacbSjKzQnJ3nlzu2qKd0YjkXvHw6JZ59znKBGTv8JMJ9TJAeaUXisJsvfmDExweEV6JQpnYZ95pYq2u4hcjETbFTGwvzG17h1znK9PhyVEopsJsFyGAyM0xeAdiv1%2Bcanf44nPaC1DN6tqLMSdg6aMpIeIVbHVsYhtxPNAi8&X-Amz-Signature=07f9612f2c23843052d2849974150ad68040d8eb659157aadedace9c9d3e3ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3PX7X3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBjWpHowKDakODue4tEBHruxBbf6ngvo25Sa%2F3990%2B7xAiEAzQRdFMpVyBqQ0pCW2Z8gensXrYlLIacJq2kDfDDOJwoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBDkCbqMMQkx%2F6lzpSrcA57AcwBBtnYsfAW27VJDXCFFN5Xnqh22AY%2FWfVThxNBKNixIVp9vIrCiGRU4WyPPuwOUBG9Fu7xCOYVievsvCIaQl5AYsgZb5NDNxlSNdXSqw9lZxSNk8YQqKv4B7Sp38gP%2B2WZmWlo7%2FM44BQlUeeIdRlTr1l3Dg8TM3skvqB3dXxm8aFcNg5qyoVg3uEnOcS52e%2F9UsysRm7Qbr%2BjpMs1GizwGX7r%2F1S3hc5MOledf68Sb1W3bIILWg61eAw0wRzioaZLtV4LuzEW0h%2F2l3%2FjV0ydmb%2B8NkAngt2ZOOt3aEpYeVKV1D1dtMTVqapCh0K0xvEnqb9sTMjHQ9qoUPSoxwrhTA8%2BHlquuMT%2F4IN9sym8oENYccCPQIwQ%2FxLUPG3PnQsQy5D5mZpHFnpUD2YhUCklEeHJb%2BsrHQsXMoY1hU4POBO3lijUG%2FnDKeS%2FxlV6t34x20qy99G0%2FE9zgGXg7Lsq40PIDDtSmFlMZk%2BpcG1gdmZzxYYIFuPlgFrUNwls9rhcb4xNrdzAyNPFGQgJHL2HN714VNL2qjZo8vilTvxH2L9PXnHx3jI4PGg%2BkUYISRp%2BKssTxqhKT2LP5yKYI9gqTZLyC0Jy0hAd6PPRtw4SeJFgkmukVLeF6MLn3gMUGOqUBS7d2syO9pDWzYRP75ouC%2FKd3vLmaFfA38mzTNN2eqFSx69SUx02XacbSjKzQnJ3nlzu2qKd0YjkXvHw6JZ59znKBGTv8JMJ9TJAeaUXisJsvfmDExweEV6JQpnYZ95pYq2u4hcjETbFTGwvzG17h1znK9PhyVEopsJsFyGAyM0xeAdiv1%2Bcanf44nPaC1DN6tqLMSdg6aMpIeIVbHVsYhtxPNAi8&X-Amz-Signature=bcc0d3ffe335071285df04a99462411704136d7a7d4f08bf8f2c0603de74bb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3PX7X3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBjWpHowKDakODue4tEBHruxBbf6ngvo25Sa%2F3990%2B7xAiEAzQRdFMpVyBqQ0pCW2Z8gensXrYlLIacJq2kDfDDOJwoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBDkCbqMMQkx%2F6lzpSrcA57AcwBBtnYsfAW27VJDXCFFN5Xnqh22AY%2FWfVThxNBKNixIVp9vIrCiGRU4WyPPuwOUBG9Fu7xCOYVievsvCIaQl5AYsgZb5NDNxlSNdXSqw9lZxSNk8YQqKv4B7Sp38gP%2B2WZmWlo7%2FM44BQlUeeIdRlTr1l3Dg8TM3skvqB3dXxm8aFcNg5qyoVg3uEnOcS52e%2F9UsysRm7Qbr%2BjpMs1GizwGX7r%2F1S3hc5MOledf68Sb1W3bIILWg61eAw0wRzioaZLtV4LuzEW0h%2F2l3%2FjV0ydmb%2B8NkAngt2ZOOt3aEpYeVKV1D1dtMTVqapCh0K0xvEnqb9sTMjHQ9qoUPSoxwrhTA8%2BHlquuMT%2F4IN9sym8oENYccCPQIwQ%2FxLUPG3PnQsQy5D5mZpHFnpUD2YhUCklEeHJb%2BsrHQsXMoY1hU4POBO3lijUG%2FnDKeS%2FxlV6t34x20qy99G0%2FE9zgGXg7Lsq40PIDDtSmFlMZk%2BpcG1gdmZzxYYIFuPlgFrUNwls9rhcb4xNrdzAyNPFGQgJHL2HN714VNL2qjZo8vilTvxH2L9PXnHx3jI4PGg%2BkUYISRp%2BKssTxqhKT2LP5yKYI9gqTZLyC0Jy0hAd6PPRtw4SeJFgkmukVLeF6MLn3gMUGOqUBS7d2syO9pDWzYRP75ouC%2FKd3vLmaFfA38mzTNN2eqFSx69SUx02XacbSjKzQnJ3nlzu2qKd0YjkXvHw6JZ59znKBGTv8JMJ9TJAeaUXisJsvfmDExweEV6JQpnYZ95pYq2u4hcjETbFTGwvzG17h1znK9PhyVEopsJsFyGAyM0xeAdiv1%2Bcanf44nPaC1DN6tqLMSdg6aMpIeIVbHVsYhtxPNAi8&X-Amz-Signature=61574fe9b554448cf7dec44304a61d02a5428e6f83ca9c60a6afd185cad96fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3PX7X3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBjWpHowKDakODue4tEBHruxBbf6ngvo25Sa%2F3990%2B7xAiEAzQRdFMpVyBqQ0pCW2Z8gensXrYlLIacJq2kDfDDOJwoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBDkCbqMMQkx%2F6lzpSrcA57AcwBBtnYsfAW27VJDXCFFN5Xnqh22AY%2FWfVThxNBKNixIVp9vIrCiGRU4WyPPuwOUBG9Fu7xCOYVievsvCIaQl5AYsgZb5NDNxlSNdXSqw9lZxSNk8YQqKv4B7Sp38gP%2B2WZmWlo7%2FM44BQlUeeIdRlTr1l3Dg8TM3skvqB3dXxm8aFcNg5qyoVg3uEnOcS52e%2F9UsysRm7Qbr%2BjpMs1GizwGX7r%2F1S3hc5MOledf68Sb1W3bIILWg61eAw0wRzioaZLtV4LuzEW0h%2F2l3%2FjV0ydmb%2B8NkAngt2ZOOt3aEpYeVKV1D1dtMTVqapCh0K0xvEnqb9sTMjHQ9qoUPSoxwrhTA8%2BHlquuMT%2F4IN9sym8oENYccCPQIwQ%2FxLUPG3PnQsQy5D5mZpHFnpUD2YhUCklEeHJb%2BsrHQsXMoY1hU4POBO3lijUG%2FnDKeS%2FxlV6t34x20qy99G0%2FE9zgGXg7Lsq40PIDDtSmFlMZk%2BpcG1gdmZzxYYIFuPlgFrUNwls9rhcb4xNrdzAyNPFGQgJHL2HN714VNL2qjZo8vilTvxH2L9PXnHx3jI4PGg%2BkUYISRp%2BKssTxqhKT2LP5yKYI9gqTZLyC0Jy0hAd6PPRtw4SeJFgkmukVLeF6MLn3gMUGOqUBS7d2syO9pDWzYRP75ouC%2FKd3vLmaFfA38mzTNN2eqFSx69SUx02XacbSjKzQnJ3nlzu2qKd0YjkXvHw6JZ59znKBGTv8JMJ9TJAeaUXisJsvfmDExweEV6JQpnYZ95pYq2u4hcjETbFTGwvzG17h1znK9PhyVEopsJsFyGAyM0xeAdiv1%2Bcanf44nPaC1DN6tqLMSdg6aMpIeIVbHVsYhtxPNAi8&X-Amz-Signature=e3d4c1c38a5a404428e1116ae60d44d46fb7749ac597068d5504f7fa7e0ad8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3PX7X3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBjWpHowKDakODue4tEBHruxBbf6ngvo25Sa%2F3990%2B7xAiEAzQRdFMpVyBqQ0pCW2Z8gensXrYlLIacJq2kDfDDOJwoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBDkCbqMMQkx%2F6lzpSrcA57AcwBBtnYsfAW27VJDXCFFN5Xnqh22AY%2FWfVThxNBKNixIVp9vIrCiGRU4WyPPuwOUBG9Fu7xCOYVievsvCIaQl5AYsgZb5NDNxlSNdXSqw9lZxSNk8YQqKv4B7Sp38gP%2B2WZmWlo7%2FM44BQlUeeIdRlTr1l3Dg8TM3skvqB3dXxm8aFcNg5qyoVg3uEnOcS52e%2F9UsysRm7Qbr%2BjpMs1GizwGX7r%2F1S3hc5MOledf68Sb1W3bIILWg61eAw0wRzioaZLtV4LuzEW0h%2F2l3%2FjV0ydmb%2B8NkAngt2ZOOt3aEpYeVKV1D1dtMTVqapCh0K0xvEnqb9sTMjHQ9qoUPSoxwrhTA8%2BHlquuMT%2F4IN9sym8oENYccCPQIwQ%2FxLUPG3PnQsQy5D5mZpHFnpUD2YhUCklEeHJb%2BsrHQsXMoY1hU4POBO3lijUG%2FnDKeS%2FxlV6t34x20qy99G0%2FE9zgGXg7Lsq40PIDDtSmFlMZk%2BpcG1gdmZzxYYIFuPlgFrUNwls9rhcb4xNrdzAyNPFGQgJHL2HN714VNL2qjZo8vilTvxH2L9PXnHx3jI4PGg%2BkUYISRp%2BKssTxqhKT2LP5yKYI9gqTZLyC0Jy0hAd6PPRtw4SeJFgkmukVLeF6MLn3gMUGOqUBS7d2syO9pDWzYRP75ouC%2FKd3vLmaFfA38mzTNN2eqFSx69SUx02XacbSjKzQnJ3nlzu2qKd0YjkXvHw6JZ59znKBGTv8JMJ9TJAeaUXisJsvfmDExweEV6JQpnYZ95pYq2u4hcjETbFTGwvzG17h1znK9PhyVEopsJsFyGAyM0xeAdiv1%2Bcanf44nPaC1DN6tqLMSdg6aMpIeIVbHVsYhtxPNAi8&X-Amz-Signature=c191a7fe724748ed94aac69f79e1a4a473e6452436d06f576813f49d8f2985a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3PX7X3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBjWpHowKDakODue4tEBHruxBbf6ngvo25Sa%2F3990%2B7xAiEAzQRdFMpVyBqQ0pCW2Z8gensXrYlLIacJq2kDfDDOJwoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBDkCbqMMQkx%2F6lzpSrcA57AcwBBtnYsfAW27VJDXCFFN5Xnqh22AY%2FWfVThxNBKNixIVp9vIrCiGRU4WyPPuwOUBG9Fu7xCOYVievsvCIaQl5AYsgZb5NDNxlSNdXSqw9lZxSNk8YQqKv4B7Sp38gP%2B2WZmWlo7%2FM44BQlUeeIdRlTr1l3Dg8TM3skvqB3dXxm8aFcNg5qyoVg3uEnOcS52e%2F9UsysRm7Qbr%2BjpMs1GizwGX7r%2F1S3hc5MOledf68Sb1W3bIILWg61eAw0wRzioaZLtV4LuzEW0h%2F2l3%2FjV0ydmb%2B8NkAngt2ZOOt3aEpYeVKV1D1dtMTVqapCh0K0xvEnqb9sTMjHQ9qoUPSoxwrhTA8%2BHlquuMT%2F4IN9sym8oENYccCPQIwQ%2FxLUPG3PnQsQy5D5mZpHFnpUD2YhUCklEeHJb%2BsrHQsXMoY1hU4POBO3lijUG%2FnDKeS%2FxlV6t34x20qy99G0%2FE9zgGXg7Lsq40PIDDtSmFlMZk%2BpcG1gdmZzxYYIFuPlgFrUNwls9rhcb4xNrdzAyNPFGQgJHL2HN714VNL2qjZo8vilTvxH2L9PXnHx3jI4PGg%2BkUYISRp%2BKssTxqhKT2LP5yKYI9gqTZLyC0Jy0hAd6PPRtw4SeJFgkmukVLeF6MLn3gMUGOqUBS7d2syO9pDWzYRP75ouC%2FKd3vLmaFfA38mzTNN2eqFSx69SUx02XacbSjKzQnJ3nlzu2qKd0YjkXvHw6JZ59znKBGTv8JMJ9TJAeaUXisJsvfmDExweEV6JQpnYZ95pYq2u4hcjETbFTGwvzG17h1znK9PhyVEopsJsFyGAyM0xeAdiv1%2Bcanf44nPaC1DN6tqLMSdg6aMpIeIVbHVsYhtxPNAi8&X-Amz-Signature=05a97c38c5c011115748303b830697cf73c47a0446ffe457782d40d82737fc60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3PX7X3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBjWpHowKDakODue4tEBHruxBbf6ngvo25Sa%2F3990%2B7xAiEAzQRdFMpVyBqQ0pCW2Z8gensXrYlLIacJq2kDfDDOJwoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBDkCbqMMQkx%2F6lzpSrcA57AcwBBtnYsfAW27VJDXCFFN5Xnqh22AY%2FWfVThxNBKNixIVp9vIrCiGRU4WyPPuwOUBG9Fu7xCOYVievsvCIaQl5AYsgZb5NDNxlSNdXSqw9lZxSNk8YQqKv4B7Sp38gP%2B2WZmWlo7%2FM44BQlUeeIdRlTr1l3Dg8TM3skvqB3dXxm8aFcNg5qyoVg3uEnOcS52e%2F9UsysRm7Qbr%2BjpMs1GizwGX7r%2F1S3hc5MOledf68Sb1W3bIILWg61eAw0wRzioaZLtV4LuzEW0h%2F2l3%2FjV0ydmb%2B8NkAngt2ZOOt3aEpYeVKV1D1dtMTVqapCh0K0xvEnqb9sTMjHQ9qoUPSoxwrhTA8%2BHlquuMT%2F4IN9sym8oENYccCPQIwQ%2FxLUPG3PnQsQy5D5mZpHFnpUD2YhUCklEeHJb%2BsrHQsXMoY1hU4POBO3lijUG%2FnDKeS%2FxlV6t34x20qy99G0%2FE9zgGXg7Lsq40PIDDtSmFlMZk%2BpcG1gdmZzxYYIFuPlgFrUNwls9rhcb4xNrdzAyNPFGQgJHL2HN714VNL2qjZo8vilTvxH2L9PXnHx3jI4PGg%2BkUYISRp%2BKssTxqhKT2LP5yKYI9gqTZLyC0Jy0hAd6PPRtw4SeJFgkmukVLeF6MLn3gMUGOqUBS7d2syO9pDWzYRP75ouC%2FKd3vLmaFfA38mzTNN2eqFSx69SUx02XacbSjKzQnJ3nlzu2qKd0YjkXvHw6JZ59znKBGTv8JMJ9TJAeaUXisJsvfmDExweEV6JQpnYZ95pYq2u4hcjETbFTGwvzG17h1znK9PhyVEopsJsFyGAyM0xeAdiv1%2Bcanf44nPaC1DN6tqLMSdg6aMpIeIVbHVsYhtxPNAi8&X-Amz-Signature=dd0a9bc8905553672272a359cdf5b148f98b31dd8d5cd5967b5033e44581523b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

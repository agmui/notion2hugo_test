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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZEV3PN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD1rqkQG3PfaHgclMKTdL2JUbSY5Y1ub%2BBDAGSp9P7TgQIga3KQoHxaPCNTWvhomcKlAL3c5PhDjJMtpCx0pHvZMgwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHzAncA%2FLMRK%2BZRU%2FCrcA0LCft286iZyBI%2BYlDKvcxglLthynS8BHLkLriy8W8xSgd08No249bi%2FGD989on%2BuGwvlaXMp%2BHSPCYXiZoba3hhYqZtqbNBiHIU0nBaxc4A2YPEwGUGcTPPVCgamFBsrs6ZotwfeugcXcF7KKvT8mFSzsjGlfLW3pfYUE1y6ZIuzds4Q3%2BMeZvAFfQFGrhw5rvtLcAQCrtHokR3svGJf4mmDVM1Y%2Fa5oKlkO5gFcdI9RPCEwHmSnr4pWdrb1%2BDRyv13XX2urVn4UtkVeRxZsTlXulv1akqlrLKMHx%2B8XAYAAElSalMsdrXUZxwwfVE6sU3I04fxyRW1k6XAptvEberH6OzC7dgI2M5MFNw1Nruc8vOPcKSvkoku4AQWuZDFB7EMNx1A9vzoaSGUb57EM9UBn4IrNQqEkBJgIyaMgxePz5gQ5XqtlDwrmcK6GBmo3mCa7NDCHMvJsASJGXJFLy2OMi1lvBnvoMRy8stWmS8v1ZnXrGPuZhvuhjm5ABZgFZskPx6MICiAaafd8Rbs4uN1dceA87ELmOI5SIx6weizPAjLALC2ckBhO83txLCRuiKeELT1P%2FnG1Ch1yeNqcJOcyVcw78g8ygAEJsXadgE9Bd1iWnew7XAWvK9kMPy7tMIGOqUBdcpKYurYvAQRzT%2BeuKX5XB88Af7LcSyPk99S0d0iSRyiLNjsfPQpYtayogvPR4qJWpGIMBc4O31jS3PpMmrG%2BWTiupqg5X1%2B9LagWBc7zGrv7VTb0BKz6654FCG6EdamoSgr0iC1HaK8XgG3QcVGiZ4qnPzkkrJDSnSnAucmZSq83vrKXqOCmrN%2BSKteDbIIsvIMJotwlBQDoiOw%2BtqFkWDXOWzi&X-Amz-Signature=a1dd061f69c9e406eee4425b2854df5f3227cd29def6c1e029a6ad313042be55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZEV3PN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD1rqkQG3PfaHgclMKTdL2JUbSY5Y1ub%2BBDAGSp9P7TgQIga3KQoHxaPCNTWvhomcKlAL3c5PhDjJMtpCx0pHvZMgwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHzAncA%2FLMRK%2BZRU%2FCrcA0LCft286iZyBI%2BYlDKvcxglLthynS8BHLkLriy8W8xSgd08No249bi%2FGD989on%2BuGwvlaXMp%2BHSPCYXiZoba3hhYqZtqbNBiHIU0nBaxc4A2YPEwGUGcTPPVCgamFBsrs6ZotwfeugcXcF7KKvT8mFSzsjGlfLW3pfYUE1y6ZIuzds4Q3%2BMeZvAFfQFGrhw5rvtLcAQCrtHokR3svGJf4mmDVM1Y%2Fa5oKlkO5gFcdI9RPCEwHmSnr4pWdrb1%2BDRyv13XX2urVn4UtkVeRxZsTlXulv1akqlrLKMHx%2B8XAYAAElSalMsdrXUZxwwfVE6sU3I04fxyRW1k6XAptvEberH6OzC7dgI2M5MFNw1Nruc8vOPcKSvkoku4AQWuZDFB7EMNx1A9vzoaSGUb57EM9UBn4IrNQqEkBJgIyaMgxePz5gQ5XqtlDwrmcK6GBmo3mCa7NDCHMvJsASJGXJFLy2OMi1lvBnvoMRy8stWmS8v1ZnXrGPuZhvuhjm5ABZgFZskPx6MICiAaafd8Rbs4uN1dceA87ELmOI5SIx6weizPAjLALC2ckBhO83txLCRuiKeELT1P%2FnG1Ch1yeNqcJOcyVcw78g8ygAEJsXadgE9Bd1iWnew7XAWvK9kMPy7tMIGOqUBdcpKYurYvAQRzT%2BeuKX5XB88Af7LcSyPk99S0d0iSRyiLNjsfPQpYtayogvPR4qJWpGIMBc4O31jS3PpMmrG%2BWTiupqg5X1%2B9LagWBc7zGrv7VTb0BKz6654FCG6EdamoSgr0iC1HaK8XgG3QcVGiZ4qnPzkkrJDSnSnAucmZSq83vrKXqOCmrN%2BSKteDbIIsvIMJotwlBQDoiOw%2BtqFkWDXOWzi&X-Amz-Signature=99384e6357147f08b378fa9e5153f9aa61922bd1ac88af6a34cc0efe3683e939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZEV3PN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD1rqkQG3PfaHgclMKTdL2JUbSY5Y1ub%2BBDAGSp9P7TgQIga3KQoHxaPCNTWvhomcKlAL3c5PhDjJMtpCx0pHvZMgwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHzAncA%2FLMRK%2BZRU%2FCrcA0LCft286iZyBI%2BYlDKvcxglLthynS8BHLkLriy8W8xSgd08No249bi%2FGD989on%2BuGwvlaXMp%2BHSPCYXiZoba3hhYqZtqbNBiHIU0nBaxc4A2YPEwGUGcTPPVCgamFBsrs6ZotwfeugcXcF7KKvT8mFSzsjGlfLW3pfYUE1y6ZIuzds4Q3%2BMeZvAFfQFGrhw5rvtLcAQCrtHokR3svGJf4mmDVM1Y%2Fa5oKlkO5gFcdI9RPCEwHmSnr4pWdrb1%2BDRyv13XX2urVn4UtkVeRxZsTlXulv1akqlrLKMHx%2B8XAYAAElSalMsdrXUZxwwfVE6sU3I04fxyRW1k6XAptvEberH6OzC7dgI2M5MFNw1Nruc8vOPcKSvkoku4AQWuZDFB7EMNx1A9vzoaSGUb57EM9UBn4IrNQqEkBJgIyaMgxePz5gQ5XqtlDwrmcK6GBmo3mCa7NDCHMvJsASJGXJFLy2OMi1lvBnvoMRy8stWmS8v1ZnXrGPuZhvuhjm5ABZgFZskPx6MICiAaafd8Rbs4uN1dceA87ELmOI5SIx6weizPAjLALC2ckBhO83txLCRuiKeELT1P%2FnG1Ch1yeNqcJOcyVcw78g8ygAEJsXadgE9Bd1iWnew7XAWvK9kMPy7tMIGOqUBdcpKYurYvAQRzT%2BeuKX5XB88Af7LcSyPk99S0d0iSRyiLNjsfPQpYtayogvPR4qJWpGIMBc4O31jS3PpMmrG%2BWTiupqg5X1%2B9LagWBc7zGrv7VTb0BKz6654FCG6EdamoSgr0iC1HaK8XgG3QcVGiZ4qnPzkkrJDSnSnAucmZSq83vrKXqOCmrN%2BSKteDbIIsvIMJotwlBQDoiOw%2BtqFkWDXOWzi&X-Amz-Signature=078c5ed6e45b86c50b7df1c424d1ea3b474f7a489619b37037fc2c79b5b2b60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZEV3PN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD1rqkQG3PfaHgclMKTdL2JUbSY5Y1ub%2BBDAGSp9P7TgQIga3KQoHxaPCNTWvhomcKlAL3c5PhDjJMtpCx0pHvZMgwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHzAncA%2FLMRK%2BZRU%2FCrcA0LCft286iZyBI%2BYlDKvcxglLthynS8BHLkLriy8W8xSgd08No249bi%2FGD989on%2BuGwvlaXMp%2BHSPCYXiZoba3hhYqZtqbNBiHIU0nBaxc4A2YPEwGUGcTPPVCgamFBsrs6ZotwfeugcXcF7KKvT8mFSzsjGlfLW3pfYUE1y6ZIuzds4Q3%2BMeZvAFfQFGrhw5rvtLcAQCrtHokR3svGJf4mmDVM1Y%2Fa5oKlkO5gFcdI9RPCEwHmSnr4pWdrb1%2BDRyv13XX2urVn4UtkVeRxZsTlXulv1akqlrLKMHx%2B8XAYAAElSalMsdrXUZxwwfVE6sU3I04fxyRW1k6XAptvEberH6OzC7dgI2M5MFNw1Nruc8vOPcKSvkoku4AQWuZDFB7EMNx1A9vzoaSGUb57EM9UBn4IrNQqEkBJgIyaMgxePz5gQ5XqtlDwrmcK6GBmo3mCa7NDCHMvJsASJGXJFLy2OMi1lvBnvoMRy8stWmS8v1ZnXrGPuZhvuhjm5ABZgFZskPx6MICiAaafd8Rbs4uN1dceA87ELmOI5SIx6weizPAjLALC2ckBhO83txLCRuiKeELT1P%2FnG1Ch1yeNqcJOcyVcw78g8ygAEJsXadgE9Bd1iWnew7XAWvK9kMPy7tMIGOqUBdcpKYurYvAQRzT%2BeuKX5XB88Af7LcSyPk99S0d0iSRyiLNjsfPQpYtayogvPR4qJWpGIMBc4O31jS3PpMmrG%2BWTiupqg5X1%2B9LagWBc7zGrv7VTb0BKz6654FCG6EdamoSgr0iC1HaK8XgG3QcVGiZ4qnPzkkrJDSnSnAucmZSq83vrKXqOCmrN%2BSKteDbIIsvIMJotwlBQDoiOw%2BtqFkWDXOWzi&X-Amz-Signature=20ba05479b1c42281fb93eb96074a8f7ca5a58b6aaf9c55b712679cf6c70e756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZEV3PN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD1rqkQG3PfaHgclMKTdL2JUbSY5Y1ub%2BBDAGSp9P7TgQIga3KQoHxaPCNTWvhomcKlAL3c5PhDjJMtpCx0pHvZMgwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHzAncA%2FLMRK%2BZRU%2FCrcA0LCft286iZyBI%2BYlDKvcxglLthynS8BHLkLriy8W8xSgd08No249bi%2FGD989on%2BuGwvlaXMp%2BHSPCYXiZoba3hhYqZtqbNBiHIU0nBaxc4A2YPEwGUGcTPPVCgamFBsrs6ZotwfeugcXcF7KKvT8mFSzsjGlfLW3pfYUE1y6ZIuzds4Q3%2BMeZvAFfQFGrhw5rvtLcAQCrtHokR3svGJf4mmDVM1Y%2Fa5oKlkO5gFcdI9RPCEwHmSnr4pWdrb1%2BDRyv13XX2urVn4UtkVeRxZsTlXulv1akqlrLKMHx%2B8XAYAAElSalMsdrXUZxwwfVE6sU3I04fxyRW1k6XAptvEberH6OzC7dgI2M5MFNw1Nruc8vOPcKSvkoku4AQWuZDFB7EMNx1A9vzoaSGUb57EM9UBn4IrNQqEkBJgIyaMgxePz5gQ5XqtlDwrmcK6GBmo3mCa7NDCHMvJsASJGXJFLy2OMi1lvBnvoMRy8stWmS8v1ZnXrGPuZhvuhjm5ABZgFZskPx6MICiAaafd8Rbs4uN1dceA87ELmOI5SIx6weizPAjLALC2ckBhO83txLCRuiKeELT1P%2FnG1Ch1yeNqcJOcyVcw78g8ygAEJsXadgE9Bd1iWnew7XAWvK9kMPy7tMIGOqUBdcpKYurYvAQRzT%2BeuKX5XB88Af7LcSyPk99S0d0iSRyiLNjsfPQpYtayogvPR4qJWpGIMBc4O31jS3PpMmrG%2BWTiupqg5X1%2B9LagWBc7zGrv7VTb0BKz6654FCG6EdamoSgr0iC1HaK8XgG3QcVGiZ4qnPzkkrJDSnSnAucmZSq83vrKXqOCmrN%2BSKteDbIIsvIMJotwlBQDoiOw%2BtqFkWDXOWzi&X-Amz-Signature=67276c59ad967731438a06961c54f512a41914ce64412d61e2b2535fe5689167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZEV3PN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD1rqkQG3PfaHgclMKTdL2JUbSY5Y1ub%2BBDAGSp9P7TgQIga3KQoHxaPCNTWvhomcKlAL3c5PhDjJMtpCx0pHvZMgwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHzAncA%2FLMRK%2BZRU%2FCrcA0LCft286iZyBI%2BYlDKvcxglLthynS8BHLkLriy8W8xSgd08No249bi%2FGD989on%2BuGwvlaXMp%2BHSPCYXiZoba3hhYqZtqbNBiHIU0nBaxc4A2YPEwGUGcTPPVCgamFBsrs6ZotwfeugcXcF7KKvT8mFSzsjGlfLW3pfYUE1y6ZIuzds4Q3%2BMeZvAFfQFGrhw5rvtLcAQCrtHokR3svGJf4mmDVM1Y%2Fa5oKlkO5gFcdI9RPCEwHmSnr4pWdrb1%2BDRyv13XX2urVn4UtkVeRxZsTlXulv1akqlrLKMHx%2B8XAYAAElSalMsdrXUZxwwfVE6sU3I04fxyRW1k6XAptvEberH6OzC7dgI2M5MFNw1Nruc8vOPcKSvkoku4AQWuZDFB7EMNx1A9vzoaSGUb57EM9UBn4IrNQqEkBJgIyaMgxePz5gQ5XqtlDwrmcK6GBmo3mCa7NDCHMvJsASJGXJFLy2OMi1lvBnvoMRy8stWmS8v1ZnXrGPuZhvuhjm5ABZgFZskPx6MICiAaafd8Rbs4uN1dceA87ELmOI5SIx6weizPAjLALC2ckBhO83txLCRuiKeELT1P%2FnG1Ch1yeNqcJOcyVcw78g8ygAEJsXadgE9Bd1iWnew7XAWvK9kMPy7tMIGOqUBdcpKYurYvAQRzT%2BeuKX5XB88Af7LcSyPk99S0d0iSRyiLNjsfPQpYtayogvPR4qJWpGIMBc4O31jS3PpMmrG%2BWTiupqg5X1%2B9LagWBc7zGrv7VTb0BKz6654FCG6EdamoSgr0iC1HaK8XgG3QcVGiZ4qnPzkkrJDSnSnAucmZSq83vrKXqOCmrN%2BSKteDbIIsvIMJotwlBQDoiOw%2BtqFkWDXOWzi&X-Amz-Signature=ffd6ab142f0e7968c43170f42e7a70acddd7f37ab562b66dd2356770937b7dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZEV3PN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD1rqkQG3PfaHgclMKTdL2JUbSY5Y1ub%2BBDAGSp9P7TgQIga3KQoHxaPCNTWvhomcKlAL3c5PhDjJMtpCx0pHvZMgwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHzAncA%2FLMRK%2BZRU%2FCrcA0LCft286iZyBI%2BYlDKvcxglLthynS8BHLkLriy8W8xSgd08No249bi%2FGD989on%2BuGwvlaXMp%2BHSPCYXiZoba3hhYqZtqbNBiHIU0nBaxc4A2YPEwGUGcTPPVCgamFBsrs6ZotwfeugcXcF7KKvT8mFSzsjGlfLW3pfYUE1y6ZIuzds4Q3%2BMeZvAFfQFGrhw5rvtLcAQCrtHokR3svGJf4mmDVM1Y%2Fa5oKlkO5gFcdI9RPCEwHmSnr4pWdrb1%2BDRyv13XX2urVn4UtkVeRxZsTlXulv1akqlrLKMHx%2B8XAYAAElSalMsdrXUZxwwfVE6sU3I04fxyRW1k6XAptvEberH6OzC7dgI2M5MFNw1Nruc8vOPcKSvkoku4AQWuZDFB7EMNx1A9vzoaSGUb57EM9UBn4IrNQqEkBJgIyaMgxePz5gQ5XqtlDwrmcK6GBmo3mCa7NDCHMvJsASJGXJFLy2OMi1lvBnvoMRy8stWmS8v1ZnXrGPuZhvuhjm5ABZgFZskPx6MICiAaafd8Rbs4uN1dceA87ELmOI5SIx6weizPAjLALC2ckBhO83txLCRuiKeELT1P%2FnG1Ch1yeNqcJOcyVcw78g8ygAEJsXadgE9Bd1iWnew7XAWvK9kMPy7tMIGOqUBdcpKYurYvAQRzT%2BeuKX5XB88Af7LcSyPk99S0d0iSRyiLNjsfPQpYtayogvPR4qJWpGIMBc4O31jS3PpMmrG%2BWTiupqg5X1%2B9LagWBc7zGrv7VTb0BKz6654FCG6EdamoSgr0iC1HaK8XgG3QcVGiZ4qnPzkkrJDSnSnAucmZSq83vrKXqOCmrN%2BSKteDbIIsvIMJotwlBQDoiOw%2BtqFkWDXOWzi&X-Amz-Signature=08dfd5e006f8cbd8c24a0c08d6dca0663bad54c5e04a498634107bc5db9e2b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

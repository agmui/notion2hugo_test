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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB32VPMU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeeQrt6vMQDUzrIDyEqLvCKOU79w3yfZpGLV2ePQIygIgA%2BiLQ2Hfyl1zoer8hvYEVNo7lw8LjVe2GagPoqsZV00qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wUc2Uz%2BsFie0BhyrcA5ajL8gEtUpAb4SCFS6mmeL0SzDmXDksxwddi3oGrgcSIpFtKAZltAJ5gHt0JMNYlRyMhy8yzFGNkHD3x2MnYnIO9G2T5NYZJ%2Bryc6NlVbzLcLYIPLRQK0W0Fi%2FUAIpf9rgTx29uM8uY%2F6NAikl0B92CKWKnkt1NFiAcHiaLV1RsDHnwyZNlTiUar1y%2BLOe%2FG22sykBJmN6jYHw65XT%2F%2BMIKrMf0Z1POs%2BPHLxJDFWZ%2FH6G%2BWvbmGC5h3SWc2IReq2lLHlGP6gDoKTLozGRqD0JnZp9rbexJ%2F93uJJjJL55OpShwZ7vH2IUCSV11Cl33szf4I5XjRt9Eie%2FAoQphDr%2FCmQsg6ATFs3RwjxGwROmRS4e3jzfDAqVPE5dRaupv34TqUI3QkXqhMZGkwY1bYstwFRNPb16YxOUfMSn1pm3RjcGCEcri9U3Z0fwDkIzKpzjomjVdkIXI5vzf4YCweR%2BqUnM%2FVBDXfCTn3J02xPMng12hVrGxx%2BSdS5EW9sT8VvaNUsy1e1aTH4OcOQc%2F60q5kdmlvItyOrBfbCRrHdkXT9Xojh%2Fm5JQwImCu%2Buz4ZqtGAuINcUrgASEmp%2F1rzt0pRHXGY%2BHGCnCogJpJpJFv28HxkJ9DRjKNfERMMOjfzsIGOqUBC3Gpr9gyA1AzxtWGoBMHJk%2FtLfoEVTdi8u9i1KpcK%2BL%2F6KWFNrCmUECeSC96gDInaimD3DN%2BddIWLvJ1TnANtokLzkQjS6pM%2BwQl6DMd5itd81ntvzXktWySJg0V0JKULMfoF5%2FgQ80w9xn37MXS0m5O8nmSHrbs5vVoEFzggPDtWLSpfmZtyncf12JOZPTW4bTf7sQ8AQErGMp0qll8K%2BVIch9H&X-Amz-Signature=25fd8f75be936a02ece87ec6abd9c2bbd76b56b86c26532b8881189d43714408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB32VPMU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeeQrt6vMQDUzrIDyEqLvCKOU79w3yfZpGLV2ePQIygIgA%2BiLQ2Hfyl1zoer8hvYEVNo7lw8LjVe2GagPoqsZV00qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wUc2Uz%2BsFie0BhyrcA5ajL8gEtUpAb4SCFS6mmeL0SzDmXDksxwddi3oGrgcSIpFtKAZltAJ5gHt0JMNYlRyMhy8yzFGNkHD3x2MnYnIO9G2T5NYZJ%2Bryc6NlVbzLcLYIPLRQK0W0Fi%2FUAIpf9rgTx29uM8uY%2F6NAikl0B92CKWKnkt1NFiAcHiaLV1RsDHnwyZNlTiUar1y%2BLOe%2FG22sykBJmN6jYHw65XT%2F%2BMIKrMf0Z1POs%2BPHLxJDFWZ%2FH6G%2BWvbmGC5h3SWc2IReq2lLHlGP6gDoKTLozGRqD0JnZp9rbexJ%2F93uJJjJL55OpShwZ7vH2IUCSV11Cl33szf4I5XjRt9Eie%2FAoQphDr%2FCmQsg6ATFs3RwjxGwROmRS4e3jzfDAqVPE5dRaupv34TqUI3QkXqhMZGkwY1bYstwFRNPb16YxOUfMSn1pm3RjcGCEcri9U3Z0fwDkIzKpzjomjVdkIXI5vzf4YCweR%2BqUnM%2FVBDXfCTn3J02xPMng12hVrGxx%2BSdS5EW9sT8VvaNUsy1e1aTH4OcOQc%2F60q5kdmlvItyOrBfbCRrHdkXT9Xojh%2Fm5JQwImCu%2Buz4ZqtGAuINcUrgASEmp%2F1rzt0pRHXGY%2BHGCnCogJpJpJFv28HxkJ9DRjKNfERMMOjfzsIGOqUBC3Gpr9gyA1AzxtWGoBMHJk%2FtLfoEVTdi8u9i1KpcK%2BL%2F6KWFNrCmUECeSC96gDInaimD3DN%2BddIWLvJ1TnANtokLzkQjS6pM%2BwQl6DMd5itd81ntvzXktWySJg0V0JKULMfoF5%2FgQ80w9xn37MXS0m5O8nmSHrbs5vVoEFzggPDtWLSpfmZtyncf12JOZPTW4bTf7sQ8AQErGMp0qll8K%2BVIch9H&X-Amz-Signature=51d8e82a00083ce344b1b1c0ee74fdb755d72cb03e3e968f20f1e682693f4a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB32VPMU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeeQrt6vMQDUzrIDyEqLvCKOU79w3yfZpGLV2ePQIygIgA%2BiLQ2Hfyl1zoer8hvYEVNo7lw8LjVe2GagPoqsZV00qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wUc2Uz%2BsFie0BhyrcA5ajL8gEtUpAb4SCFS6mmeL0SzDmXDksxwddi3oGrgcSIpFtKAZltAJ5gHt0JMNYlRyMhy8yzFGNkHD3x2MnYnIO9G2T5NYZJ%2Bryc6NlVbzLcLYIPLRQK0W0Fi%2FUAIpf9rgTx29uM8uY%2F6NAikl0B92CKWKnkt1NFiAcHiaLV1RsDHnwyZNlTiUar1y%2BLOe%2FG22sykBJmN6jYHw65XT%2F%2BMIKrMf0Z1POs%2BPHLxJDFWZ%2FH6G%2BWvbmGC5h3SWc2IReq2lLHlGP6gDoKTLozGRqD0JnZp9rbexJ%2F93uJJjJL55OpShwZ7vH2IUCSV11Cl33szf4I5XjRt9Eie%2FAoQphDr%2FCmQsg6ATFs3RwjxGwROmRS4e3jzfDAqVPE5dRaupv34TqUI3QkXqhMZGkwY1bYstwFRNPb16YxOUfMSn1pm3RjcGCEcri9U3Z0fwDkIzKpzjomjVdkIXI5vzf4YCweR%2BqUnM%2FVBDXfCTn3J02xPMng12hVrGxx%2BSdS5EW9sT8VvaNUsy1e1aTH4OcOQc%2F60q5kdmlvItyOrBfbCRrHdkXT9Xojh%2Fm5JQwImCu%2Buz4ZqtGAuINcUrgASEmp%2F1rzt0pRHXGY%2BHGCnCogJpJpJFv28HxkJ9DRjKNfERMMOjfzsIGOqUBC3Gpr9gyA1AzxtWGoBMHJk%2FtLfoEVTdi8u9i1KpcK%2BL%2F6KWFNrCmUECeSC96gDInaimD3DN%2BddIWLvJ1TnANtokLzkQjS6pM%2BwQl6DMd5itd81ntvzXktWySJg0V0JKULMfoF5%2FgQ80w9xn37MXS0m5O8nmSHrbs5vVoEFzggPDtWLSpfmZtyncf12JOZPTW4bTf7sQ8AQErGMp0qll8K%2BVIch9H&X-Amz-Signature=e885b47750adf0d38ba9e0f910ea08032328c0353baa3acfb5edd1a2a706b5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB32VPMU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeeQrt6vMQDUzrIDyEqLvCKOU79w3yfZpGLV2ePQIygIgA%2BiLQ2Hfyl1zoer8hvYEVNo7lw8LjVe2GagPoqsZV00qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wUc2Uz%2BsFie0BhyrcA5ajL8gEtUpAb4SCFS6mmeL0SzDmXDksxwddi3oGrgcSIpFtKAZltAJ5gHt0JMNYlRyMhy8yzFGNkHD3x2MnYnIO9G2T5NYZJ%2Bryc6NlVbzLcLYIPLRQK0W0Fi%2FUAIpf9rgTx29uM8uY%2F6NAikl0B92CKWKnkt1NFiAcHiaLV1RsDHnwyZNlTiUar1y%2BLOe%2FG22sykBJmN6jYHw65XT%2F%2BMIKrMf0Z1POs%2BPHLxJDFWZ%2FH6G%2BWvbmGC5h3SWc2IReq2lLHlGP6gDoKTLozGRqD0JnZp9rbexJ%2F93uJJjJL55OpShwZ7vH2IUCSV11Cl33szf4I5XjRt9Eie%2FAoQphDr%2FCmQsg6ATFs3RwjxGwROmRS4e3jzfDAqVPE5dRaupv34TqUI3QkXqhMZGkwY1bYstwFRNPb16YxOUfMSn1pm3RjcGCEcri9U3Z0fwDkIzKpzjomjVdkIXI5vzf4YCweR%2BqUnM%2FVBDXfCTn3J02xPMng12hVrGxx%2BSdS5EW9sT8VvaNUsy1e1aTH4OcOQc%2F60q5kdmlvItyOrBfbCRrHdkXT9Xojh%2Fm5JQwImCu%2Buz4ZqtGAuINcUrgASEmp%2F1rzt0pRHXGY%2BHGCnCogJpJpJFv28HxkJ9DRjKNfERMMOjfzsIGOqUBC3Gpr9gyA1AzxtWGoBMHJk%2FtLfoEVTdi8u9i1KpcK%2BL%2F6KWFNrCmUECeSC96gDInaimD3DN%2BddIWLvJ1TnANtokLzkQjS6pM%2BwQl6DMd5itd81ntvzXktWySJg0V0JKULMfoF5%2FgQ80w9xn37MXS0m5O8nmSHrbs5vVoEFzggPDtWLSpfmZtyncf12JOZPTW4bTf7sQ8AQErGMp0qll8K%2BVIch9H&X-Amz-Signature=87dae3930da87131ed11107230b702197619bb19674c0672c134c2245f800fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB32VPMU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeeQrt6vMQDUzrIDyEqLvCKOU79w3yfZpGLV2ePQIygIgA%2BiLQ2Hfyl1zoer8hvYEVNo7lw8LjVe2GagPoqsZV00qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wUc2Uz%2BsFie0BhyrcA5ajL8gEtUpAb4SCFS6mmeL0SzDmXDksxwddi3oGrgcSIpFtKAZltAJ5gHt0JMNYlRyMhy8yzFGNkHD3x2MnYnIO9G2T5NYZJ%2Bryc6NlVbzLcLYIPLRQK0W0Fi%2FUAIpf9rgTx29uM8uY%2F6NAikl0B92CKWKnkt1NFiAcHiaLV1RsDHnwyZNlTiUar1y%2BLOe%2FG22sykBJmN6jYHw65XT%2F%2BMIKrMf0Z1POs%2BPHLxJDFWZ%2FH6G%2BWvbmGC5h3SWc2IReq2lLHlGP6gDoKTLozGRqD0JnZp9rbexJ%2F93uJJjJL55OpShwZ7vH2IUCSV11Cl33szf4I5XjRt9Eie%2FAoQphDr%2FCmQsg6ATFs3RwjxGwROmRS4e3jzfDAqVPE5dRaupv34TqUI3QkXqhMZGkwY1bYstwFRNPb16YxOUfMSn1pm3RjcGCEcri9U3Z0fwDkIzKpzjomjVdkIXI5vzf4YCweR%2BqUnM%2FVBDXfCTn3J02xPMng12hVrGxx%2BSdS5EW9sT8VvaNUsy1e1aTH4OcOQc%2F60q5kdmlvItyOrBfbCRrHdkXT9Xojh%2Fm5JQwImCu%2Buz4ZqtGAuINcUrgASEmp%2F1rzt0pRHXGY%2BHGCnCogJpJpJFv28HxkJ9DRjKNfERMMOjfzsIGOqUBC3Gpr9gyA1AzxtWGoBMHJk%2FtLfoEVTdi8u9i1KpcK%2BL%2F6KWFNrCmUECeSC96gDInaimD3DN%2BddIWLvJ1TnANtokLzkQjS6pM%2BwQl6DMd5itd81ntvzXktWySJg0V0JKULMfoF5%2FgQ80w9xn37MXS0m5O8nmSHrbs5vVoEFzggPDtWLSpfmZtyncf12JOZPTW4bTf7sQ8AQErGMp0qll8K%2BVIch9H&X-Amz-Signature=a2683acb9a1aca37b3fc8f2fa99344bf694581277ed0b14677ecd030fa009412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB32VPMU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeeQrt6vMQDUzrIDyEqLvCKOU79w3yfZpGLV2ePQIygIgA%2BiLQ2Hfyl1zoer8hvYEVNo7lw8LjVe2GagPoqsZV00qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wUc2Uz%2BsFie0BhyrcA5ajL8gEtUpAb4SCFS6mmeL0SzDmXDksxwddi3oGrgcSIpFtKAZltAJ5gHt0JMNYlRyMhy8yzFGNkHD3x2MnYnIO9G2T5NYZJ%2Bryc6NlVbzLcLYIPLRQK0W0Fi%2FUAIpf9rgTx29uM8uY%2F6NAikl0B92CKWKnkt1NFiAcHiaLV1RsDHnwyZNlTiUar1y%2BLOe%2FG22sykBJmN6jYHw65XT%2F%2BMIKrMf0Z1POs%2BPHLxJDFWZ%2FH6G%2BWvbmGC5h3SWc2IReq2lLHlGP6gDoKTLozGRqD0JnZp9rbexJ%2F93uJJjJL55OpShwZ7vH2IUCSV11Cl33szf4I5XjRt9Eie%2FAoQphDr%2FCmQsg6ATFs3RwjxGwROmRS4e3jzfDAqVPE5dRaupv34TqUI3QkXqhMZGkwY1bYstwFRNPb16YxOUfMSn1pm3RjcGCEcri9U3Z0fwDkIzKpzjomjVdkIXI5vzf4YCweR%2BqUnM%2FVBDXfCTn3J02xPMng12hVrGxx%2BSdS5EW9sT8VvaNUsy1e1aTH4OcOQc%2F60q5kdmlvItyOrBfbCRrHdkXT9Xojh%2Fm5JQwImCu%2Buz4ZqtGAuINcUrgASEmp%2F1rzt0pRHXGY%2BHGCnCogJpJpJFv28HxkJ9DRjKNfERMMOjfzsIGOqUBC3Gpr9gyA1AzxtWGoBMHJk%2FtLfoEVTdi8u9i1KpcK%2BL%2F6KWFNrCmUECeSC96gDInaimD3DN%2BddIWLvJ1TnANtokLzkQjS6pM%2BwQl6DMd5itd81ntvzXktWySJg0V0JKULMfoF5%2FgQ80w9xn37MXS0m5O8nmSHrbs5vVoEFzggPDtWLSpfmZtyncf12JOZPTW4bTf7sQ8AQErGMp0qll8K%2BVIch9H&X-Amz-Signature=fb0ea0304dab44e341c0d5337441a8ee00b4826d46ffc0eca87606aec919ff41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB32VPMU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeeQrt6vMQDUzrIDyEqLvCKOU79w3yfZpGLV2ePQIygIgA%2BiLQ2Hfyl1zoer8hvYEVNo7lw8LjVe2GagPoqsZV00qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wUc2Uz%2BsFie0BhyrcA5ajL8gEtUpAb4SCFS6mmeL0SzDmXDksxwddi3oGrgcSIpFtKAZltAJ5gHt0JMNYlRyMhy8yzFGNkHD3x2MnYnIO9G2T5NYZJ%2Bryc6NlVbzLcLYIPLRQK0W0Fi%2FUAIpf9rgTx29uM8uY%2F6NAikl0B92CKWKnkt1NFiAcHiaLV1RsDHnwyZNlTiUar1y%2BLOe%2FG22sykBJmN6jYHw65XT%2F%2BMIKrMf0Z1POs%2BPHLxJDFWZ%2FH6G%2BWvbmGC5h3SWc2IReq2lLHlGP6gDoKTLozGRqD0JnZp9rbexJ%2F93uJJjJL55OpShwZ7vH2IUCSV11Cl33szf4I5XjRt9Eie%2FAoQphDr%2FCmQsg6ATFs3RwjxGwROmRS4e3jzfDAqVPE5dRaupv34TqUI3QkXqhMZGkwY1bYstwFRNPb16YxOUfMSn1pm3RjcGCEcri9U3Z0fwDkIzKpzjomjVdkIXI5vzf4YCweR%2BqUnM%2FVBDXfCTn3J02xPMng12hVrGxx%2BSdS5EW9sT8VvaNUsy1e1aTH4OcOQc%2F60q5kdmlvItyOrBfbCRrHdkXT9Xojh%2Fm5JQwImCu%2Buz4ZqtGAuINcUrgASEmp%2F1rzt0pRHXGY%2BHGCnCogJpJpJFv28HxkJ9DRjKNfERMMOjfzsIGOqUBC3Gpr9gyA1AzxtWGoBMHJk%2FtLfoEVTdi8u9i1KpcK%2BL%2F6KWFNrCmUECeSC96gDInaimD3DN%2BddIWLvJ1TnANtokLzkQjS6pM%2BwQl6DMd5itd81ntvzXktWySJg0V0JKULMfoF5%2FgQ80w9xn37MXS0m5O8nmSHrbs5vVoEFzggPDtWLSpfmZtyncf12JOZPTW4bTf7sQ8AQErGMp0qll8K%2BVIch9H&X-Amz-Signature=8f499871aa3fd581c61146fb0b6b8817e07c279e80b23d812cdf0ee4efce4f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

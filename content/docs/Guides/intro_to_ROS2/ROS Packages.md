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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJARZ57%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCrT7a%2BroGFZTCjWKg1YQXg02956XJrSlEiZHlAWrreggIgA9qsTE0S2zQALdR0eqyefs1ZBeVS%2FMBIJWQ8MFU3Tosq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDdaC6KlyHLFRy0qzSrcA3kfbq1ayU3PinS9%2F3JJEcxk4Ml0JRO3h9WZ4i6xq0pTOvFSZa%2F1MRqenp8RjbgA%2FB4A5kjDSo4RdD3P5i6lnUTYUwzEUunIFRNssks0El8muUVx%2Fph94dfp67VLLT%2B9SqTIFKoMuXlIy5w7C2z3hOdiR1bq%2B5lINMd94W99xmI7SUyEhwml%2FXXSBKZKrAWhHawJS2rxYJvOohlx64aOQw3VAsYt2oYVEDzWYILMdLFEqfDV60xLJjvDc45iyt1i6ekCDkFku0AE1ny9pAMgLGV0%2FrziktHVcps%2FJo3fQyx5QFIh166xaw8DKrf3%2B8UOa1qLOvJVg2SJcaVPUku7GGs0Vtl1PMFhaEwqhY7r8JEd%2BkxfI%2FQvtV7NV0%2FA1zh3c%2FRl4Aay50GqKM4yQ2qrR11aiOMv0sZLXp1KE8fYnfAtGdT%2FeQ%2B5s5ZQkqBJbD6bq2Dkg2nsZWFA2duGBU1cpi5a9vm3zXvOgSXbc%2BiLCJ8H3stxhxLjPhArJzTM1aiC6%2FTtUdwMrwD5YOHhA0sLNQ%2FZuwQwnGNEfsDLEM4R9B6r3I0aP%2Fys%2BvDmdwjbEMF1YJKPu3QOLLgYrAqSFetaGqp%2B5y0rU1eQuxoaV1pfnj3g6fWfLVCZ%2BwDmtcZ9MN%2FSscIGOqUBu2e2NTpJGIiPqVkZ%2B%2FJxU4BAYwlBzFGV6AqjDtoudoD5wyKsgJpXSOgOJezvMSRAql7VrersXMah72x%2BGRSVHr1FL64mlH3UySS%2BK55cpQZAUrhRdmXzNxJPqPwEfZ4BojlyCJcEBFBfURwv28uDJU%2ByUm0d1ohydfCNKP%2BdIBa9vyoVcxB%2FkYdixExkjq7fSBZpJIBXIlU9MqEsBPMTksiViM%2Bz&X-Amz-Signature=7d3983baeb2e8488a068f3627190c8ca427e595c13ef6717b4dd058571b56cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJARZ57%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCrT7a%2BroGFZTCjWKg1YQXg02956XJrSlEiZHlAWrreggIgA9qsTE0S2zQALdR0eqyefs1ZBeVS%2FMBIJWQ8MFU3Tosq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDdaC6KlyHLFRy0qzSrcA3kfbq1ayU3PinS9%2F3JJEcxk4Ml0JRO3h9WZ4i6xq0pTOvFSZa%2F1MRqenp8RjbgA%2FB4A5kjDSo4RdD3P5i6lnUTYUwzEUunIFRNssks0El8muUVx%2Fph94dfp67VLLT%2B9SqTIFKoMuXlIy5w7C2z3hOdiR1bq%2B5lINMd94W99xmI7SUyEhwml%2FXXSBKZKrAWhHawJS2rxYJvOohlx64aOQw3VAsYt2oYVEDzWYILMdLFEqfDV60xLJjvDc45iyt1i6ekCDkFku0AE1ny9pAMgLGV0%2FrziktHVcps%2FJo3fQyx5QFIh166xaw8DKrf3%2B8UOa1qLOvJVg2SJcaVPUku7GGs0Vtl1PMFhaEwqhY7r8JEd%2BkxfI%2FQvtV7NV0%2FA1zh3c%2FRl4Aay50GqKM4yQ2qrR11aiOMv0sZLXp1KE8fYnfAtGdT%2FeQ%2B5s5ZQkqBJbD6bq2Dkg2nsZWFA2duGBU1cpi5a9vm3zXvOgSXbc%2BiLCJ8H3stxhxLjPhArJzTM1aiC6%2FTtUdwMrwD5YOHhA0sLNQ%2FZuwQwnGNEfsDLEM4R9B6r3I0aP%2Fys%2BvDmdwjbEMF1YJKPu3QOLLgYrAqSFetaGqp%2B5y0rU1eQuxoaV1pfnj3g6fWfLVCZ%2BwDmtcZ9MN%2FSscIGOqUBu2e2NTpJGIiPqVkZ%2B%2FJxU4BAYwlBzFGV6AqjDtoudoD5wyKsgJpXSOgOJezvMSRAql7VrersXMah72x%2BGRSVHr1FL64mlH3UySS%2BK55cpQZAUrhRdmXzNxJPqPwEfZ4BojlyCJcEBFBfURwv28uDJU%2ByUm0d1ohydfCNKP%2BdIBa9vyoVcxB%2FkYdixExkjq7fSBZpJIBXIlU9MqEsBPMTksiViM%2Bz&X-Amz-Signature=e47abf11093f11820a41103419f74603acba55ce1ca338545a1dfb350b748dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJARZ57%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCrT7a%2BroGFZTCjWKg1YQXg02956XJrSlEiZHlAWrreggIgA9qsTE0S2zQALdR0eqyefs1ZBeVS%2FMBIJWQ8MFU3Tosq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDdaC6KlyHLFRy0qzSrcA3kfbq1ayU3PinS9%2F3JJEcxk4Ml0JRO3h9WZ4i6xq0pTOvFSZa%2F1MRqenp8RjbgA%2FB4A5kjDSo4RdD3P5i6lnUTYUwzEUunIFRNssks0El8muUVx%2Fph94dfp67VLLT%2B9SqTIFKoMuXlIy5w7C2z3hOdiR1bq%2B5lINMd94W99xmI7SUyEhwml%2FXXSBKZKrAWhHawJS2rxYJvOohlx64aOQw3VAsYt2oYVEDzWYILMdLFEqfDV60xLJjvDc45iyt1i6ekCDkFku0AE1ny9pAMgLGV0%2FrziktHVcps%2FJo3fQyx5QFIh166xaw8DKrf3%2B8UOa1qLOvJVg2SJcaVPUku7GGs0Vtl1PMFhaEwqhY7r8JEd%2BkxfI%2FQvtV7NV0%2FA1zh3c%2FRl4Aay50GqKM4yQ2qrR11aiOMv0sZLXp1KE8fYnfAtGdT%2FeQ%2B5s5ZQkqBJbD6bq2Dkg2nsZWFA2duGBU1cpi5a9vm3zXvOgSXbc%2BiLCJ8H3stxhxLjPhArJzTM1aiC6%2FTtUdwMrwD5YOHhA0sLNQ%2FZuwQwnGNEfsDLEM4R9B6r3I0aP%2Fys%2BvDmdwjbEMF1YJKPu3QOLLgYrAqSFetaGqp%2B5y0rU1eQuxoaV1pfnj3g6fWfLVCZ%2BwDmtcZ9MN%2FSscIGOqUBu2e2NTpJGIiPqVkZ%2B%2FJxU4BAYwlBzFGV6AqjDtoudoD5wyKsgJpXSOgOJezvMSRAql7VrersXMah72x%2BGRSVHr1FL64mlH3UySS%2BK55cpQZAUrhRdmXzNxJPqPwEfZ4BojlyCJcEBFBfURwv28uDJU%2ByUm0d1ohydfCNKP%2BdIBa9vyoVcxB%2FkYdixExkjq7fSBZpJIBXIlU9MqEsBPMTksiViM%2Bz&X-Amz-Signature=c2039f061ffffbed97a4b7afd14ad72d984fe6f7dc9a8f3b75f9c733c490b610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJARZ57%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCrT7a%2BroGFZTCjWKg1YQXg02956XJrSlEiZHlAWrreggIgA9qsTE0S2zQALdR0eqyefs1ZBeVS%2FMBIJWQ8MFU3Tosq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDdaC6KlyHLFRy0qzSrcA3kfbq1ayU3PinS9%2F3JJEcxk4Ml0JRO3h9WZ4i6xq0pTOvFSZa%2F1MRqenp8RjbgA%2FB4A5kjDSo4RdD3P5i6lnUTYUwzEUunIFRNssks0El8muUVx%2Fph94dfp67VLLT%2B9SqTIFKoMuXlIy5w7C2z3hOdiR1bq%2B5lINMd94W99xmI7SUyEhwml%2FXXSBKZKrAWhHawJS2rxYJvOohlx64aOQw3VAsYt2oYVEDzWYILMdLFEqfDV60xLJjvDc45iyt1i6ekCDkFku0AE1ny9pAMgLGV0%2FrziktHVcps%2FJo3fQyx5QFIh166xaw8DKrf3%2B8UOa1qLOvJVg2SJcaVPUku7GGs0Vtl1PMFhaEwqhY7r8JEd%2BkxfI%2FQvtV7NV0%2FA1zh3c%2FRl4Aay50GqKM4yQ2qrR11aiOMv0sZLXp1KE8fYnfAtGdT%2FeQ%2B5s5ZQkqBJbD6bq2Dkg2nsZWFA2duGBU1cpi5a9vm3zXvOgSXbc%2BiLCJ8H3stxhxLjPhArJzTM1aiC6%2FTtUdwMrwD5YOHhA0sLNQ%2FZuwQwnGNEfsDLEM4R9B6r3I0aP%2Fys%2BvDmdwjbEMF1YJKPu3QOLLgYrAqSFetaGqp%2B5y0rU1eQuxoaV1pfnj3g6fWfLVCZ%2BwDmtcZ9MN%2FSscIGOqUBu2e2NTpJGIiPqVkZ%2B%2FJxU4BAYwlBzFGV6AqjDtoudoD5wyKsgJpXSOgOJezvMSRAql7VrersXMah72x%2BGRSVHr1FL64mlH3UySS%2BK55cpQZAUrhRdmXzNxJPqPwEfZ4BojlyCJcEBFBfURwv28uDJU%2ByUm0d1ohydfCNKP%2BdIBa9vyoVcxB%2FkYdixExkjq7fSBZpJIBXIlU9MqEsBPMTksiViM%2Bz&X-Amz-Signature=a69a7a1f087223cffc36e07e6a99ebeadbb19c08f08876edfa9e70c022751d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJARZ57%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCrT7a%2BroGFZTCjWKg1YQXg02956XJrSlEiZHlAWrreggIgA9qsTE0S2zQALdR0eqyefs1ZBeVS%2FMBIJWQ8MFU3Tosq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDdaC6KlyHLFRy0qzSrcA3kfbq1ayU3PinS9%2F3JJEcxk4Ml0JRO3h9WZ4i6xq0pTOvFSZa%2F1MRqenp8RjbgA%2FB4A5kjDSo4RdD3P5i6lnUTYUwzEUunIFRNssks0El8muUVx%2Fph94dfp67VLLT%2B9SqTIFKoMuXlIy5w7C2z3hOdiR1bq%2B5lINMd94W99xmI7SUyEhwml%2FXXSBKZKrAWhHawJS2rxYJvOohlx64aOQw3VAsYt2oYVEDzWYILMdLFEqfDV60xLJjvDc45iyt1i6ekCDkFku0AE1ny9pAMgLGV0%2FrziktHVcps%2FJo3fQyx5QFIh166xaw8DKrf3%2B8UOa1qLOvJVg2SJcaVPUku7GGs0Vtl1PMFhaEwqhY7r8JEd%2BkxfI%2FQvtV7NV0%2FA1zh3c%2FRl4Aay50GqKM4yQ2qrR11aiOMv0sZLXp1KE8fYnfAtGdT%2FeQ%2B5s5ZQkqBJbD6bq2Dkg2nsZWFA2duGBU1cpi5a9vm3zXvOgSXbc%2BiLCJ8H3stxhxLjPhArJzTM1aiC6%2FTtUdwMrwD5YOHhA0sLNQ%2FZuwQwnGNEfsDLEM4R9B6r3I0aP%2Fys%2BvDmdwjbEMF1YJKPu3QOLLgYrAqSFetaGqp%2B5y0rU1eQuxoaV1pfnj3g6fWfLVCZ%2BwDmtcZ9MN%2FSscIGOqUBu2e2NTpJGIiPqVkZ%2B%2FJxU4BAYwlBzFGV6AqjDtoudoD5wyKsgJpXSOgOJezvMSRAql7VrersXMah72x%2BGRSVHr1FL64mlH3UySS%2BK55cpQZAUrhRdmXzNxJPqPwEfZ4BojlyCJcEBFBfURwv28uDJU%2ByUm0d1ohydfCNKP%2BdIBa9vyoVcxB%2FkYdixExkjq7fSBZpJIBXIlU9MqEsBPMTksiViM%2Bz&X-Amz-Signature=897caa78686709d1fe3dfdaf0670106713f16152a1418cfa00ce53d6af4f1f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJARZ57%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCrT7a%2BroGFZTCjWKg1YQXg02956XJrSlEiZHlAWrreggIgA9qsTE0S2zQALdR0eqyefs1ZBeVS%2FMBIJWQ8MFU3Tosq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDdaC6KlyHLFRy0qzSrcA3kfbq1ayU3PinS9%2F3JJEcxk4Ml0JRO3h9WZ4i6xq0pTOvFSZa%2F1MRqenp8RjbgA%2FB4A5kjDSo4RdD3P5i6lnUTYUwzEUunIFRNssks0El8muUVx%2Fph94dfp67VLLT%2B9SqTIFKoMuXlIy5w7C2z3hOdiR1bq%2B5lINMd94W99xmI7SUyEhwml%2FXXSBKZKrAWhHawJS2rxYJvOohlx64aOQw3VAsYt2oYVEDzWYILMdLFEqfDV60xLJjvDc45iyt1i6ekCDkFku0AE1ny9pAMgLGV0%2FrziktHVcps%2FJo3fQyx5QFIh166xaw8DKrf3%2B8UOa1qLOvJVg2SJcaVPUku7GGs0Vtl1PMFhaEwqhY7r8JEd%2BkxfI%2FQvtV7NV0%2FA1zh3c%2FRl4Aay50GqKM4yQ2qrR11aiOMv0sZLXp1KE8fYnfAtGdT%2FeQ%2B5s5ZQkqBJbD6bq2Dkg2nsZWFA2duGBU1cpi5a9vm3zXvOgSXbc%2BiLCJ8H3stxhxLjPhArJzTM1aiC6%2FTtUdwMrwD5YOHhA0sLNQ%2FZuwQwnGNEfsDLEM4R9B6r3I0aP%2Fys%2BvDmdwjbEMF1YJKPu3QOLLgYrAqSFetaGqp%2B5y0rU1eQuxoaV1pfnj3g6fWfLVCZ%2BwDmtcZ9MN%2FSscIGOqUBu2e2NTpJGIiPqVkZ%2B%2FJxU4BAYwlBzFGV6AqjDtoudoD5wyKsgJpXSOgOJezvMSRAql7VrersXMah72x%2BGRSVHr1FL64mlH3UySS%2BK55cpQZAUrhRdmXzNxJPqPwEfZ4BojlyCJcEBFBfURwv28uDJU%2ByUm0d1ohydfCNKP%2BdIBa9vyoVcxB%2FkYdixExkjq7fSBZpJIBXIlU9MqEsBPMTksiViM%2Bz&X-Amz-Signature=33c0227ee9e7a8b8f319e458f5a5a1835d55035bb256e0dedcf1b680f67da043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJARZ57%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCrT7a%2BroGFZTCjWKg1YQXg02956XJrSlEiZHlAWrreggIgA9qsTE0S2zQALdR0eqyefs1ZBeVS%2FMBIJWQ8MFU3Tosq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDdaC6KlyHLFRy0qzSrcA3kfbq1ayU3PinS9%2F3JJEcxk4Ml0JRO3h9WZ4i6xq0pTOvFSZa%2F1MRqenp8RjbgA%2FB4A5kjDSo4RdD3P5i6lnUTYUwzEUunIFRNssks0El8muUVx%2Fph94dfp67VLLT%2B9SqTIFKoMuXlIy5w7C2z3hOdiR1bq%2B5lINMd94W99xmI7SUyEhwml%2FXXSBKZKrAWhHawJS2rxYJvOohlx64aOQw3VAsYt2oYVEDzWYILMdLFEqfDV60xLJjvDc45iyt1i6ekCDkFku0AE1ny9pAMgLGV0%2FrziktHVcps%2FJo3fQyx5QFIh166xaw8DKrf3%2B8UOa1qLOvJVg2SJcaVPUku7GGs0Vtl1PMFhaEwqhY7r8JEd%2BkxfI%2FQvtV7NV0%2FA1zh3c%2FRl4Aay50GqKM4yQ2qrR11aiOMv0sZLXp1KE8fYnfAtGdT%2FeQ%2B5s5ZQkqBJbD6bq2Dkg2nsZWFA2duGBU1cpi5a9vm3zXvOgSXbc%2BiLCJ8H3stxhxLjPhArJzTM1aiC6%2FTtUdwMrwD5YOHhA0sLNQ%2FZuwQwnGNEfsDLEM4R9B6r3I0aP%2Fys%2BvDmdwjbEMF1YJKPu3QOLLgYrAqSFetaGqp%2B5y0rU1eQuxoaV1pfnj3g6fWfLVCZ%2BwDmtcZ9MN%2FSscIGOqUBu2e2NTpJGIiPqVkZ%2B%2FJxU4BAYwlBzFGV6AqjDtoudoD5wyKsgJpXSOgOJezvMSRAql7VrersXMah72x%2BGRSVHr1FL64mlH3UySS%2BK55cpQZAUrhRdmXzNxJPqPwEfZ4BojlyCJcEBFBfURwv28uDJU%2ByUm0d1ohydfCNKP%2BdIBa9vyoVcxB%2FkYdixExkjq7fSBZpJIBXIlU9MqEsBPMTksiViM%2Bz&X-Amz-Signature=38f0cb010f45549e96f87700d6231bdfc71701b7a55e74b615bc3b8248275d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

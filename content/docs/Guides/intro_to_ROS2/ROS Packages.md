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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZWZKALX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICnI8qsxzrs2I52xiFDU47O4va5ZmErOzBzDz5bZoX0HAiEAxWI42Wo5UW%2BmIxzzFLSVUwgCWCUT1YaqpPwzLM7HU0UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZlz3kYJ8njC1g1NCrcAxi3My%2FBFyQIfeLcOBOzIQNKn0blux4FOKtWyX2djlNXZS94%2BX1bhEhH%2BOxj2BaKtoKnbhJj1c1f6%2BeS7KpZLwkrbm4iYiVnAdSIw1l%2B%2Bhk7GqBGYj7u42%2BfsoW927iCG7mIRC7IclqskrR90hhCEPNVPoDFZMMd%2FYeSm8ck1DejcDOGQJWrTkRK9aAWPN%2FyQQEmHL2W%2BnPW1wfqtvHZg40cLUaZRlhyK4VPC4nXmJDtKA5wCXt4nBJaKr%2BRpKeNyMkUSJyrZwx4d99UXaxWTpNABvymjw0%2BSJAZMkBPXTzlxvFL9BZWusBuGyabGHY2rnFiZXeb9H%2FtxyqrpCzg4Sz2ITMXUsF6rTD5CCYTpnGbLEhBBAcNqgbDSjLhxE33sjYOQVZpneIxQhjghTlM07qJfngIxB1hnSMHIOqzL%2Fuwuch9uW5QtHqmsBv0wsBfewIqM8CkoeLuuMlOlxvhSpAVKyVcxbvS8mOx%2BkHAttRiZBabYZbfrZ5qBJGC3%2FzUyTyWqJT04ulER3kWuml894D4LV0ZNFvrw7kRuPgryAN1xvJ70os%2FAjHX3WeJ1f%2FK4z%2FcOLi4xtp8kQGsZBlgXGHlNI4sNNxkW4VFRljPaf7Ow%2BxBGjdrndShQjfjMM%2BHmMMGOqUBX8AOc9R1lnY9ImFLw9a0fWmOhDEkNceAVb3HmpDbJln9txJlH867EXGtEv8Zi6UZWMz9p5uCECAdQTNuhuU%2FyBPcbC2srafCiqwmluB7oQipAPf4F6MAdM%2F7ZgtQWEcDgx2jFlLWCEOLcli0M%2FWxii9IU3%2F9O%2BZGw5FBPUY6FhMJ0pTyWIy22V%2FpK52tFrGLapuRmCm%2BJXpMNWJ0xp1TNMOFf2qN&X-Amz-Signature=6bfbe852aec8474ab237f2cb2b9258ed05340c6909b33aa76b5accfb6b6a39e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZWZKALX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICnI8qsxzrs2I52xiFDU47O4va5ZmErOzBzDz5bZoX0HAiEAxWI42Wo5UW%2BmIxzzFLSVUwgCWCUT1YaqpPwzLM7HU0UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZlz3kYJ8njC1g1NCrcAxi3My%2FBFyQIfeLcOBOzIQNKn0blux4FOKtWyX2djlNXZS94%2BX1bhEhH%2BOxj2BaKtoKnbhJj1c1f6%2BeS7KpZLwkrbm4iYiVnAdSIw1l%2B%2Bhk7GqBGYj7u42%2BfsoW927iCG7mIRC7IclqskrR90hhCEPNVPoDFZMMd%2FYeSm8ck1DejcDOGQJWrTkRK9aAWPN%2FyQQEmHL2W%2BnPW1wfqtvHZg40cLUaZRlhyK4VPC4nXmJDtKA5wCXt4nBJaKr%2BRpKeNyMkUSJyrZwx4d99UXaxWTpNABvymjw0%2BSJAZMkBPXTzlxvFL9BZWusBuGyabGHY2rnFiZXeb9H%2FtxyqrpCzg4Sz2ITMXUsF6rTD5CCYTpnGbLEhBBAcNqgbDSjLhxE33sjYOQVZpneIxQhjghTlM07qJfngIxB1hnSMHIOqzL%2Fuwuch9uW5QtHqmsBv0wsBfewIqM8CkoeLuuMlOlxvhSpAVKyVcxbvS8mOx%2BkHAttRiZBabYZbfrZ5qBJGC3%2FzUyTyWqJT04ulER3kWuml894D4LV0ZNFvrw7kRuPgryAN1xvJ70os%2FAjHX3WeJ1f%2FK4z%2FcOLi4xtp8kQGsZBlgXGHlNI4sNNxkW4VFRljPaf7Ow%2BxBGjdrndShQjfjMM%2BHmMMGOqUBX8AOc9R1lnY9ImFLw9a0fWmOhDEkNceAVb3HmpDbJln9txJlH867EXGtEv8Zi6UZWMz9p5uCECAdQTNuhuU%2FyBPcbC2srafCiqwmluB7oQipAPf4F6MAdM%2F7ZgtQWEcDgx2jFlLWCEOLcli0M%2FWxii9IU3%2F9O%2BZGw5FBPUY6FhMJ0pTyWIy22V%2FpK52tFrGLapuRmCm%2BJXpMNWJ0xp1TNMOFf2qN&X-Amz-Signature=bd7a1ba17a766cbed8f5d63d721560f9d0d4b5edd8126057a5063a820d9efae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZWZKALX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICnI8qsxzrs2I52xiFDU47O4va5ZmErOzBzDz5bZoX0HAiEAxWI42Wo5UW%2BmIxzzFLSVUwgCWCUT1YaqpPwzLM7HU0UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZlz3kYJ8njC1g1NCrcAxi3My%2FBFyQIfeLcOBOzIQNKn0blux4FOKtWyX2djlNXZS94%2BX1bhEhH%2BOxj2BaKtoKnbhJj1c1f6%2BeS7KpZLwkrbm4iYiVnAdSIw1l%2B%2Bhk7GqBGYj7u42%2BfsoW927iCG7mIRC7IclqskrR90hhCEPNVPoDFZMMd%2FYeSm8ck1DejcDOGQJWrTkRK9aAWPN%2FyQQEmHL2W%2BnPW1wfqtvHZg40cLUaZRlhyK4VPC4nXmJDtKA5wCXt4nBJaKr%2BRpKeNyMkUSJyrZwx4d99UXaxWTpNABvymjw0%2BSJAZMkBPXTzlxvFL9BZWusBuGyabGHY2rnFiZXeb9H%2FtxyqrpCzg4Sz2ITMXUsF6rTD5CCYTpnGbLEhBBAcNqgbDSjLhxE33sjYOQVZpneIxQhjghTlM07qJfngIxB1hnSMHIOqzL%2Fuwuch9uW5QtHqmsBv0wsBfewIqM8CkoeLuuMlOlxvhSpAVKyVcxbvS8mOx%2BkHAttRiZBabYZbfrZ5qBJGC3%2FzUyTyWqJT04ulER3kWuml894D4LV0ZNFvrw7kRuPgryAN1xvJ70os%2FAjHX3WeJ1f%2FK4z%2FcOLi4xtp8kQGsZBlgXGHlNI4sNNxkW4VFRljPaf7Ow%2BxBGjdrndShQjfjMM%2BHmMMGOqUBX8AOc9R1lnY9ImFLw9a0fWmOhDEkNceAVb3HmpDbJln9txJlH867EXGtEv8Zi6UZWMz9p5uCECAdQTNuhuU%2FyBPcbC2srafCiqwmluB7oQipAPf4F6MAdM%2F7ZgtQWEcDgx2jFlLWCEOLcli0M%2FWxii9IU3%2F9O%2BZGw5FBPUY6FhMJ0pTyWIy22V%2FpK52tFrGLapuRmCm%2BJXpMNWJ0xp1TNMOFf2qN&X-Amz-Signature=5832ce6d2a3d27887e5cb42f6e384996c35b9fd19b3e005291ea50d55c8cc9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZWZKALX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICnI8qsxzrs2I52xiFDU47O4va5ZmErOzBzDz5bZoX0HAiEAxWI42Wo5UW%2BmIxzzFLSVUwgCWCUT1YaqpPwzLM7HU0UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZlz3kYJ8njC1g1NCrcAxi3My%2FBFyQIfeLcOBOzIQNKn0blux4FOKtWyX2djlNXZS94%2BX1bhEhH%2BOxj2BaKtoKnbhJj1c1f6%2BeS7KpZLwkrbm4iYiVnAdSIw1l%2B%2Bhk7GqBGYj7u42%2BfsoW927iCG7mIRC7IclqskrR90hhCEPNVPoDFZMMd%2FYeSm8ck1DejcDOGQJWrTkRK9aAWPN%2FyQQEmHL2W%2BnPW1wfqtvHZg40cLUaZRlhyK4VPC4nXmJDtKA5wCXt4nBJaKr%2BRpKeNyMkUSJyrZwx4d99UXaxWTpNABvymjw0%2BSJAZMkBPXTzlxvFL9BZWusBuGyabGHY2rnFiZXeb9H%2FtxyqrpCzg4Sz2ITMXUsF6rTD5CCYTpnGbLEhBBAcNqgbDSjLhxE33sjYOQVZpneIxQhjghTlM07qJfngIxB1hnSMHIOqzL%2Fuwuch9uW5QtHqmsBv0wsBfewIqM8CkoeLuuMlOlxvhSpAVKyVcxbvS8mOx%2BkHAttRiZBabYZbfrZ5qBJGC3%2FzUyTyWqJT04ulER3kWuml894D4LV0ZNFvrw7kRuPgryAN1xvJ70os%2FAjHX3WeJ1f%2FK4z%2FcOLi4xtp8kQGsZBlgXGHlNI4sNNxkW4VFRljPaf7Ow%2BxBGjdrndShQjfjMM%2BHmMMGOqUBX8AOc9R1lnY9ImFLw9a0fWmOhDEkNceAVb3HmpDbJln9txJlH867EXGtEv8Zi6UZWMz9p5uCECAdQTNuhuU%2FyBPcbC2srafCiqwmluB7oQipAPf4F6MAdM%2F7ZgtQWEcDgx2jFlLWCEOLcli0M%2FWxii9IU3%2F9O%2BZGw5FBPUY6FhMJ0pTyWIy22V%2FpK52tFrGLapuRmCm%2BJXpMNWJ0xp1TNMOFf2qN&X-Amz-Signature=49fc83e7bf9f9f39610cbc924ae7c6e50b93ae46b821961ce918372c001f0ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZWZKALX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICnI8qsxzrs2I52xiFDU47O4va5ZmErOzBzDz5bZoX0HAiEAxWI42Wo5UW%2BmIxzzFLSVUwgCWCUT1YaqpPwzLM7HU0UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZlz3kYJ8njC1g1NCrcAxi3My%2FBFyQIfeLcOBOzIQNKn0blux4FOKtWyX2djlNXZS94%2BX1bhEhH%2BOxj2BaKtoKnbhJj1c1f6%2BeS7KpZLwkrbm4iYiVnAdSIw1l%2B%2Bhk7GqBGYj7u42%2BfsoW927iCG7mIRC7IclqskrR90hhCEPNVPoDFZMMd%2FYeSm8ck1DejcDOGQJWrTkRK9aAWPN%2FyQQEmHL2W%2BnPW1wfqtvHZg40cLUaZRlhyK4VPC4nXmJDtKA5wCXt4nBJaKr%2BRpKeNyMkUSJyrZwx4d99UXaxWTpNABvymjw0%2BSJAZMkBPXTzlxvFL9BZWusBuGyabGHY2rnFiZXeb9H%2FtxyqrpCzg4Sz2ITMXUsF6rTD5CCYTpnGbLEhBBAcNqgbDSjLhxE33sjYOQVZpneIxQhjghTlM07qJfngIxB1hnSMHIOqzL%2Fuwuch9uW5QtHqmsBv0wsBfewIqM8CkoeLuuMlOlxvhSpAVKyVcxbvS8mOx%2BkHAttRiZBabYZbfrZ5qBJGC3%2FzUyTyWqJT04ulER3kWuml894D4LV0ZNFvrw7kRuPgryAN1xvJ70os%2FAjHX3WeJ1f%2FK4z%2FcOLi4xtp8kQGsZBlgXGHlNI4sNNxkW4VFRljPaf7Ow%2BxBGjdrndShQjfjMM%2BHmMMGOqUBX8AOc9R1lnY9ImFLw9a0fWmOhDEkNceAVb3HmpDbJln9txJlH867EXGtEv8Zi6UZWMz9p5uCECAdQTNuhuU%2FyBPcbC2srafCiqwmluB7oQipAPf4F6MAdM%2F7ZgtQWEcDgx2jFlLWCEOLcli0M%2FWxii9IU3%2F9O%2BZGw5FBPUY6FhMJ0pTyWIy22V%2FpK52tFrGLapuRmCm%2BJXpMNWJ0xp1TNMOFf2qN&X-Amz-Signature=c53052b7dea4909413c98c1a17731e65a33e20c99347d252b289b477a759900e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZWZKALX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICnI8qsxzrs2I52xiFDU47O4va5ZmErOzBzDz5bZoX0HAiEAxWI42Wo5UW%2BmIxzzFLSVUwgCWCUT1YaqpPwzLM7HU0UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZlz3kYJ8njC1g1NCrcAxi3My%2FBFyQIfeLcOBOzIQNKn0blux4FOKtWyX2djlNXZS94%2BX1bhEhH%2BOxj2BaKtoKnbhJj1c1f6%2BeS7KpZLwkrbm4iYiVnAdSIw1l%2B%2Bhk7GqBGYj7u42%2BfsoW927iCG7mIRC7IclqskrR90hhCEPNVPoDFZMMd%2FYeSm8ck1DejcDOGQJWrTkRK9aAWPN%2FyQQEmHL2W%2BnPW1wfqtvHZg40cLUaZRlhyK4VPC4nXmJDtKA5wCXt4nBJaKr%2BRpKeNyMkUSJyrZwx4d99UXaxWTpNABvymjw0%2BSJAZMkBPXTzlxvFL9BZWusBuGyabGHY2rnFiZXeb9H%2FtxyqrpCzg4Sz2ITMXUsF6rTD5CCYTpnGbLEhBBAcNqgbDSjLhxE33sjYOQVZpneIxQhjghTlM07qJfngIxB1hnSMHIOqzL%2Fuwuch9uW5QtHqmsBv0wsBfewIqM8CkoeLuuMlOlxvhSpAVKyVcxbvS8mOx%2BkHAttRiZBabYZbfrZ5qBJGC3%2FzUyTyWqJT04ulER3kWuml894D4LV0ZNFvrw7kRuPgryAN1xvJ70os%2FAjHX3WeJ1f%2FK4z%2FcOLi4xtp8kQGsZBlgXGHlNI4sNNxkW4VFRljPaf7Ow%2BxBGjdrndShQjfjMM%2BHmMMGOqUBX8AOc9R1lnY9ImFLw9a0fWmOhDEkNceAVb3HmpDbJln9txJlH867EXGtEv8Zi6UZWMz9p5uCECAdQTNuhuU%2FyBPcbC2srafCiqwmluB7oQipAPf4F6MAdM%2F7ZgtQWEcDgx2jFlLWCEOLcli0M%2FWxii9IU3%2F9O%2BZGw5FBPUY6FhMJ0pTyWIy22V%2FpK52tFrGLapuRmCm%2BJXpMNWJ0xp1TNMOFf2qN&X-Amz-Signature=9af92de09b532e516488d757f8049ae003efb7a2cda8fb099690212fc659897d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZWZKALX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICnI8qsxzrs2I52xiFDU47O4va5ZmErOzBzDz5bZoX0HAiEAxWI42Wo5UW%2BmIxzzFLSVUwgCWCUT1YaqpPwzLM7HU0UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZlz3kYJ8njC1g1NCrcAxi3My%2FBFyQIfeLcOBOzIQNKn0blux4FOKtWyX2djlNXZS94%2BX1bhEhH%2BOxj2BaKtoKnbhJj1c1f6%2BeS7KpZLwkrbm4iYiVnAdSIw1l%2B%2Bhk7GqBGYj7u42%2BfsoW927iCG7mIRC7IclqskrR90hhCEPNVPoDFZMMd%2FYeSm8ck1DejcDOGQJWrTkRK9aAWPN%2FyQQEmHL2W%2BnPW1wfqtvHZg40cLUaZRlhyK4VPC4nXmJDtKA5wCXt4nBJaKr%2BRpKeNyMkUSJyrZwx4d99UXaxWTpNABvymjw0%2BSJAZMkBPXTzlxvFL9BZWusBuGyabGHY2rnFiZXeb9H%2FtxyqrpCzg4Sz2ITMXUsF6rTD5CCYTpnGbLEhBBAcNqgbDSjLhxE33sjYOQVZpneIxQhjghTlM07qJfngIxB1hnSMHIOqzL%2Fuwuch9uW5QtHqmsBv0wsBfewIqM8CkoeLuuMlOlxvhSpAVKyVcxbvS8mOx%2BkHAttRiZBabYZbfrZ5qBJGC3%2FzUyTyWqJT04ulER3kWuml894D4LV0ZNFvrw7kRuPgryAN1xvJ70os%2FAjHX3WeJ1f%2FK4z%2FcOLi4xtp8kQGsZBlgXGHlNI4sNNxkW4VFRljPaf7Ow%2BxBGjdrndShQjfjMM%2BHmMMGOqUBX8AOc9R1lnY9ImFLw9a0fWmOhDEkNceAVb3HmpDbJln9txJlH867EXGtEv8Zi6UZWMz9p5uCECAdQTNuhuU%2FyBPcbC2srafCiqwmluB7oQipAPf4F6MAdM%2F7ZgtQWEcDgx2jFlLWCEOLcli0M%2FWxii9IU3%2F9O%2BZGw5FBPUY6FhMJ0pTyWIy22V%2FpK52tFrGLapuRmCm%2BJXpMNWJ0xp1TNMOFf2qN&X-Amz-Signature=729f25aa3945e42ffe38d60574f47f64964252474fdcc08412006a32b96a1ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

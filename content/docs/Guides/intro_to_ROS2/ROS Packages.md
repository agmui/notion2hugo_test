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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CGIUPO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZQ3RAMlVcgsFjkGwxpNh6hSifG1VE9hPgF8dpCgjAiA9uHNsIfLNmT6embDsnuU%2FArC1m9b5B4DRWoVjLE3zwCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh502s%2F%2BCKSTN1vWPKtwDZoC1mpSvbmVfCpnY7dve0rv4FzosxAVpvChQknMolvqhY6rpTSw6VOXPuiRcescJSxKeKPkX0no1ghpeqbukV3ULWnquyzfdbP8gD8Z4lqSZ5oB2vdm7vxuvN9cwGm1z02TXfLBgCWr4Z1PaFA5IKk52UtX4aurHKAlI0usNK%2FfLadjnNlAq1JpF4Wbx5is58srOMaRfYP3KU%2FcShvJn1TlmldmTCte61xFdJB91%2F7Cb1NZQj0dQgNLANENYSi1XZXcTsezGgBXb9baR5X9LAGL%2BXkcgjwp6KVS0l7wmNVUFJEYcTCtq4yqG44BIM09G%2FhFI90g8XZ66Co9oltYyweO9u7s4VRb51D%2FWkS1CASvzBigIgDr9NYVuFvOvu%2B%2F6Hm%2FB26g%2FpFZGtjZukCHe0rPOh9FoJVVnSqBADGB2RCwxJ3VFVZVNou3e7MKgBRHb3cLhmVmIKp4Kdfk%2FaaWkp1yFOYxZTrw54bmgCRYaMtDcV1vBrCZkD7zf1Feds%2FGrD%2FA5xsN%2FO4yf5y2%2F7PuZ%2FBi%2FRbuMrx4Wqe5XF4cHylJi%2FDN4fuIMByN8pylCc17Vmt%2Fe8TdVdqFCWxSPQF0MHUBm7jJPpW%2F80goIwjlJ%2B7oLxXy0KUTTTzGvdDIw6IPOwgY6pgEC2UtUwn4GqVEzhcaW0ehidqT%2B%2FoLxQlq7ercoThRBmw7suc1GM1bdrxClcR89bcqE%2B5ZKmhMf%2BGKOAdkwu7NOk1OZIm8hejFbquzGyRwii9bMqGhhzYYgBwnPs9sc1fqpAGkuBD2j0Qx5gL1srLJ8Y4RhGO1xpH8odwaXdXl%2B7Gf%2FH2pnTyCdRRys%2FmpJjdw54LJnUGeU1UooafMq8pN23%2Bb410Y1&X-Amz-Signature=6a72077c291e3901cc79af1278def041ea653916836c32cce68a349491bf3fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CGIUPO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZQ3RAMlVcgsFjkGwxpNh6hSifG1VE9hPgF8dpCgjAiA9uHNsIfLNmT6embDsnuU%2FArC1m9b5B4DRWoVjLE3zwCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh502s%2F%2BCKSTN1vWPKtwDZoC1mpSvbmVfCpnY7dve0rv4FzosxAVpvChQknMolvqhY6rpTSw6VOXPuiRcescJSxKeKPkX0no1ghpeqbukV3ULWnquyzfdbP8gD8Z4lqSZ5oB2vdm7vxuvN9cwGm1z02TXfLBgCWr4Z1PaFA5IKk52UtX4aurHKAlI0usNK%2FfLadjnNlAq1JpF4Wbx5is58srOMaRfYP3KU%2FcShvJn1TlmldmTCte61xFdJB91%2F7Cb1NZQj0dQgNLANENYSi1XZXcTsezGgBXb9baR5X9LAGL%2BXkcgjwp6KVS0l7wmNVUFJEYcTCtq4yqG44BIM09G%2FhFI90g8XZ66Co9oltYyweO9u7s4VRb51D%2FWkS1CASvzBigIgDr9NYVuFvOvu%2B%2F6Hm%2FB26g%2FpFZGtjZukCHe0rPOh9FoJVVnSqBADGB2RCwxJ3VFVZVNou3e7MKgBRHb3cLhmVmIKp4Kdfk%2FaaWkp1yFOYxZTrw54bmgCRYaMtDcV1vBrCZkD7zf1Feds%2FGrD%2FA5xsN%2FO4yf5y2%2F7PuZ%2FBi%2FRbuMrx4Wqe5XF4cHylJi%2FDN4fuIMByN8pylCc17Vmt%2Fe8TdVdqFCWxSPQF0MHUBm7jJPpW%2F80goIwjlJ%2B7oLxXy0KUTTTzGvdDIw6IPOwgY6pgEC2UtUwn4GqVEzhcaW0ehidqT%2B%2FoLxQlq7ercoThRBmw7suc1GM1bdrxClcR89bcqE%2B5ZKmhMf%2BGKOAdkwu7NOk1OZIm8hejFbquzGyRwii9bMqGhhzYYgBwnPs9sc1fqpAGkuBD2j0Qx5gL1srLJ8Y4RhGO1xpH8odwaXdXl%2B7Gf%2FH2pnTyCdRRys%2FmpJjdw54LJnUGeU1UooafMq8pN23%2Bb410Y1&X-Amz-Signature=1a75151e108d6f51794423da4b64a75f397ed53cbf7a26dffcacc520eca4f745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CGIUPO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZQ3RAMlVcgsFjkGwxpNh6hSifG1VE9hPgF8dpCgjAiA9uHNsIfLNmT6embDsnuU%2FArC1m9b5B4DRWoVjLE3zwCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh502s%2F%2BCKSTN1vWPKtwDZoC1mpSvbmVfCpnY7dve0rv4FzosxAVpvChQknMolvqhY6rpTSw6VOXPuiRcescJSxKeKPkX0no1ghpeqbukV3ULWnquyzfdbP8gD8Z4lqSZ5oB2vdm7vxuvN9cwGm1z02TXfLBgCWr4Z1PaFA5IKk52UtX4aurHKAlI0usNK%2FfLadjnNlAq1JpF4Wbx5is58srOMaRfYP3KU%2FcShvJn1TlmldmTCte61xFdJB91%2F7Cb1NZQj0dQgNLANENYSi1XZXcTsezGgBXb9baR5X9LAGL%2BXkcgjwp6KVS0l7wmNVUFJEYcTCtq4yqG44BIM09G%2FhFI90g8XZ66Co9oltYyweO9u7s4VRb51D%2FWkS1CASvzBigIgDr9NYVuFvOvu%2B%2F6Hm%2FB26g%2FpFZGtjZukCHe0rPOh9FoJVVnSqBADGB2RCwxJ3VFVZVNou3e7MKgBRHb3cLhmVmIKp4Kdfk%2FaaWkp1yFOYxZTrw54bmgCRYaMtDcV1vBrCZkD7zf1Feds%2FGrD%2FA5xsN%2FO4yf5y2%2F7PuZ%2FBi%2FRbuMrx4Wqe5XF4cHylJi%2FDN4fuIMByN8pylCc17Vmt%2Fe8TdVdqFCWxSPQF0MHUBm7jJPpW%2F80goIwjlJ%2B7oLxXy0KUTTTzGvdDIw6IPOwgY6pgEC2UtUwn4GqVEzhcaW0ehidqT%2B%2FoLxQlq7ercoThRBmw7suc1GM1bdrxClcR89bcqE%2B5ZKmhMf%2BGKOAdkwu7NOk1OZIm8hejFbquzGyRwii9bMqGhhzYYgBwnPs9sc1fqpAGkuBD2j0Qx5gL1srLJ8Y4RhGO1xpH8odwaXdXl%2B7Gf%2FH2pnTyCdRRys%2FmpJjdw54LJnUGeU1UooafMq8pN23%2Bb410Y1&X-Amz-Signature=6be1af31fda6f892e4ebd7486a8ba69819c6ae5c96b3d4b3e797f907bba4f2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CGIUPO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZQ3RAMlVcgsFjkGwxpNh6hSifG1VE9hPgF8dpCgjAiA9uHNsIfLNmT6embDsnuU%2FArC1m9b5B4DRWoVjLE3zwCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh502s%2F%2BCKSTN1vWPKtwDZoC1mpSvbmVfCpnY7dve0rv4FzosxAVpvChQknMolvqhY6rpTSw6VOXPuiRcescJSxKeKPkX0no1ghpeqbukV3ULWnquyzfdbP8gD8Z4lqSZ5oB2vdm7vxuvN9cwGm1z02TXfLBgCWr4Z1PaFA5IKk52UtX4aurHKAlI0usNK%2FfLadjnNlAq1JpF4Wbx5is58srOMaRfYP3KU%2FcShvJn1TlmldmTCte61xFdJB91%2F7Cb1NZQj0dQgNLANENYSi1XZXcTsezGgBXb9baR5X9LAGL%2BXkcgjwp6KVS0l7wmNVUFJEYcTCtq4yqG44BIM09G%2FhFI90g8XZ66Co9oltYyweO9u7s4VRb51D%2FWkS1CASvzBigIgDr9NYVuFvOvu%2B%2F6Hm%2FB26g%2FpFZGtjZukCHe0rPOh9FoJVVnSqBADGB2RCwxJ3VFVZVNou3e7MKgBRHb3cLhmVmIKp4Kdfk%2FaaWkp1yFOYxZTrw54bmgCRYaMtDcV1vBrCZkD7zf1Feds%2FGrD%2FA5xsN%2FO4yf5y2%2F7PuZ%2FBi%2FRbuMrx4Wqe5XF4cHylJi%2FDN4fuIMByN8pylCc17Vmt%2Fe8TdVdqFCWxSPQF0MHUBm7jJPpW%2F80goIwjlJ%2B7oLxXy0KUTTTzGvdDIw6IPOwgY6pgEC2UtUwn4GqVEzhcaW0ehidqT%2B%2FoLxQlq7ercoThRBmw7suc1GM1bdrxClcR89bcqE%2B5ZKmhMf%2BGKOAdkwu7NOk1OZIm8hejFbquzGyRwii9bMqGhhzYYgBwnPs9sc1fqpAGkuBD2j0Qx5gL1srLJ8Y4RhGO1xpH8odwaXdXl%2B7Gf%2FH2pnTyCdRRys%2FmpJjdw54LJnUGeU1UooafMq8pN23%2Bb410Y1&X-Amz-Signature=9e3446f45f338e4c4ee35f1b0ff4905af3d40abbeb6892224fd2c6c6495646e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CGIUPO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZQ3RAMlVcgsFjkGwxpNh6hSifG1VE9hPgF8dpCgjAiA9uHNsIfLNmT6embDsnuU%2FArC1m9b5B4DRWoVjLE3zwCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh502s%2F%2BCKSTN1vWPKtwDZoC1mpSvbmVfCpnY7dve0rv4FzosxAVpvChQknMolvqhY6rpTSw6VOXPuiRcescJSxKeKPkX0no1ghpeqbukV3ULWnquyzfdbP8gD8Z4lqSZ5oB2vdm7vxuvN9cwGm1z02TXfLBgCWr4Z1PaFA5IKk52UtX4aurHKAlI0usNK%2FfLadjnNlAq1JpF4Wbx5is58srOMaRfYP3KU%2FcShvJn1TlmldmTCte61xFdJB91%2F7Cb1NZQj0dQgNLANENYSi1XZXcTsezGgBXb9baR5X9LAGL%2BXkcgjwp6KVS0l7wmNVUFJEYcTCtq4yqG44BIM09G%2FhFI90g8XZ66Co9oltYyweO9u7s4VRb51D%2FWkS1CASvzBigIgDr9NYVuFvOvu%2B%2F6Hm%2FB26g%2FpFZGtjZukCHe0rPOh9FoJVVnSqBADGB2RCwxJ3VFVZVNou3e7MKgBRHb3cLhmVmIKp4Kdfk%2FaaWkp1yFOYxZTrw54bmgCRYaMtDcV1vBrCZkD7zf1Feds%2FGrD%2FA5xsN%2FO4yf5y2%2F7PuZ%2FBi%2FRbuMrx4Wqe5XF4cHylJi%2FDN4fuIMByN8pylCc17Vmt%2Fe8TdVdqFCWxSPQF0MHUBm7jJPpW%2F80goIwjlJ%2B7oLxXy0KUTTTzGvdDIw6IPOwgY6pgEC2UtUwn4GqVEzhcaW0ehidqT%2B%2FoLxQlq7ercoThRBmw7suc1GM1bdrxClcR89bcqE%2B5ZKmhMf%2BGKOAdkwu7NOk1OZIm8hejFbquzGyRwii9bMqGhhzYYgBwnPs9sc1fqpAGkuBD2j0Qx5gL1srLJ8Y4RhGO1xpH8odwaXdXl%2B7Gf%2FH2pnTyCdRRys%2FmpJjdw54LJnUGeU1UooafMq8pN23%2Bb410Y1&X-Amz-Signature=5d5e95fdffe999ac055fc27a09e0ac1529396f92d7435efa8accfefa29ca3364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CGIUPO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZQ3RAMlVcgsFjkGwxpNh6hSifG1VE9hPgF8dpCgjAiA9uHNsIfLNmT6embDsnuU%2FArC1m9b5B4DRWoVjLE3zwCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh502s%2F%2BCKSTN1vWPKtwDZoC1mpSvbmVfCpnY7dve0rv4FzosxAVpvChQknMolvqhY6rpTSw6VOXPuiRcescJSxKeKPkX0no1ghpeqbukV3ULWnquyzfdbP8gD8Z4lqSZ5oB2vdm7vxuvN9cwGm1z02TXfLBgCWr4Z1PaFA5IKk52UtX4aurHKAlI0usNK%2FfLadjnNlAq1JpF4Wbx5is58srOMaRfYP3KU%2FcShvJn1TlmldmTCte61xFdJB91%2F7Cb1NZQj0dQgNLANENYSi1XZXcTsezGgBXb9baR5X9LAGL%2BXkcgjwp6KVS0l7wmNVUFJEYcTCtq4yqG44BIM09G%2FhFI90g8XZ66Co9oltYyweO9u7s4VRb51D%2FWkS1CASvzBigIgDr9NYVuFvOvu%2B%2F6Hm%2FB26g%2FpFZGtjZukCHe0rPOh9FoJVVnSqBADGB2RCwxJ3VFVZVNou3e7MKgBRHb3cLhmVmIKp4Kdfk%2FaaWkp1yFOYxZTrw54bmgCRYaMtDcV1vBrCZkD7zf1Feds%2FGrD%2FA5xsN%2FO4yf5y2%2F7PuZ%2FBi%2FRbuMrx4Wqe5XF4cHylJi%2FDN4fuIMByN8pylCc17Vmt%2Fe8TdVdqFCWxSPQF0MHUBm7jJPpW%2F80goIwjlJ%2B7oLxXy0KUTTTzGvdDIw6IPOwgY6pgEC2UtUwn4GqVEzhcaW0ehidqT%2B%2FoLxQlq7ercoThRBmw7suc1GM1bdrxClcR89bcqE%2B5ZKmhMf%2BGKOAdkwu7NOk1OZIm8hejFbquzGyRwii9bMqGhhzYYgBwnPs9sc1fqpAGkuBD2j0Qx5gL1srLJ8Y4RhGO1xpH8odwaXdXl%2B7Gf%2FH2pnTyCdRRys%2FmpJjdw54LJnUGeU1UooafMq8pN23%2Bb410Y1&X-Amz-Signature=610285995d58e82311f863fc4b75edbd64d3af78dd9a2ec433722ad669ce472c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CGIUPO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZQ3RAMlVcgsFjkGwxpNh6hSifG1VE9hPgF8dpCgjAiA9uHNsIfLNmT6embDsnuU%2FArC1m9b5B4DRWoVjLE3zwCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh502s%2F%2BCKSTN1vWPKtwDZoC1mpSvbmVfCpnY7dve0rv4FzosxAVpvChQknMolvqhY6rpTSw6VOXPuiRcescJSxKeKPkX0no1ghpeqbukV3ULWnquyzfdbP8gD8Z4lqSZ5oB2vdm7vxuvN9cwGm1z02TXfLBgCWr4Z1PaFA5IKk52UtX4aurHKAlI0usNK%2FfLadjnNlAq1JpF4Wbx5is58srOMaRfYP3KU%2FcShvJn1TlmldmTCte61xFdJB91%2F7Cb1NZQj0dQgNLANENYSi1XZXcTsezGgBXb9baR5X9LAGL%2BXkcgjwp6KVS0l7wmNVUFJEYcTCtq4yqG44BIM09G%2FhFI90g8XZ66Co9oltYyweO9u7s4VRb51D%2FWkS1CASvzBigIgDr9NYVuFvOvu%2B%2F6Hm%2FB26g%2FpFZGtjZukCHe0rPOh9FoJVVnSqBADGB2RCwxJ3VFVZVNou3e7MKgBRHb3cLhmVmIKp4Kdfk%2FaaWkp1yFOYxZTrw54bmgCRYaMtDcV1vBrCZkD7zf1Feds%2FGrD%2FA5xsN%2FO4yf5y2%2F7PuZ%2FBi%2FRbuMrx4Wqe5XF4cHylJi%2FDN4fuIMByN8pylCc17Vmt%2Fe8TdVdqFCWxSPQF0MHUBm7jJPpW%2F80goIwjlJ%2B7oLxXy0KUTTTzGvdDIw6IPOwgY6pgEC2UtUwn4GqVEzhcaW0ehidqT%2B%2FoLxQlq7ercoThRBmw7suc1GM1bdrxClcR89bcqE%2B5ZKmhMf%2BGKOAdkwu7NOk1OZIm8hejFbquzGyRwii9bMqGhhzYYgBwnPs9sc1fqpAGkuBD2j0Qx5gL1srLJ8Y4RhGO1xpH8odwaXdXl%2B7Gf%2FH2pnTyCdRRys%2FmpJjdw54LJnUGeU1UooafMq8pN23%2Bb410Y1&X-Amz-Signature=f40a2ff0f85b69637fae60eb75ed98001a67ff853b07787d00728981f80c1493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

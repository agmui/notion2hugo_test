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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=98e63c57f08007fa3809609ccd1c4155ff5a28532470df32d51a9dc5e8db5cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=a85dce3e43394df175d9fa0a3ff3064ac887ee135bb3d38464e742dab4863a92&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=8e8d1887bca3e44f185cfbf03cd9712cebb77b13c29c0ce35fdd9ce7373aeab3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=ca0c06c7ce056ed5bdb9048efe92fdbe774670e7692b69bde2760f953b8c1a58&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=462677f61df7eab90abdf9b52c4a72227e5c4cb0dc20f6ed87bee717ede2b0ca&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=bb928fb26801cdb8296ce976fc9342f3acd844d72d456d75bb900841e1991979&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=757124a1acd49cd17e61d78ea7f59f05a812b1831c2b749b8ddae636d947996f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

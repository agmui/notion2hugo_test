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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKA44QR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC4uCnH5CSvVjeOu%2BtVHIQkGSaBNPjzzVkHXCZ7EQrnngIhAOScns0bL%2BrfSsyHMa0zTSYPS1ZY%2B4WUTr2ltJ2iQQtMKv8DCGAQABoMNjM3NDIzMTgzODA1IgyLKkkYsn5Kxr48ij0q3ANZYLQ5vVEznV1%2BW%2Ba2S80yKxlxXyxEnw4giGcli3fViw8alasG5yPPSd66K3762oel2KnBSVdk6stdhqid51uJdg4ySyxQOEyExWH6bGjppigCNt2FsSw7wA%2BSZP4pXcafESP%2F9D%2BtEsT5Ytvz2SIVYFsoiDCR3G6b82CYkIbofVBIH8jp2djuq9095zfoG7b0%2FcxFwwzB6O1oftjtZJ66sGSjR7p82wcj3Xa1rFau8%2FG1Vx0FVVOOKYh8sWBIRCJqFFY8ZZo0Yi7BV1UOnHhMb1KXClpM1dCUYY%2FH8BklPIrB3ZTjV4Eso4NOCxQOeZ1ljP0K%2B%2Bd0Gdd7Sp7TebcdFpymyP0B0V0dHHSaezEKzbExTXn6008VG8fvT2%2F3ka%2B%2F70LZonLk0AzC13jQHpPVA5TpohE6hSGWAjIrvWV%2FJhPBNkwFGlu3%2FJjhZEAibY0KrhRjjeBVMiliCKmDL8TCCTiHSvtTvixD%2FeAfgdtQWS3r2Zuve8faHt75RTzhSAatwWp0CP%2Bzk2wDKuKXZElS6w423%2B26ymqJ9DVl7T54caCJFq%2FdRrGUHcHRO%2FI1KbIs9hUiFc782kmeU6CjCKqN6p7ql3pxtiNoSoHYBEjBdAP3VLXNVWTSmcAobDDRlOa%2BBjqkAQDzSz%2BsCXsxtJyfWqd2KWgYR3a9djGC5p5BsVFl4yo9EL2DOHnJAPzzXQmcHvv8Irtrumhr%2FIHEu5SZBdDvo7bWFxgI3UNkZYIzfG3Ev1lGH4lbiH4B9GhEEVQmqDy3pkHMi4whcXOHRXWgvx89gmwAyBOhJgJOvb1KgeEliIWjBF0EbAAwXL188KVmzrNMk58ms6tOOQ4%2FFjprsDoBT1SfnSlG&X-Amz-Signature=5f58ab5a9b850c67deecf3ff6b8afb9ddeb13fcb74d972fa9413658d6e9217ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKA44QR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC4uCnH5CSvVjeOu%2BtVHIQkGSaBNPjzzVkHXCZ7EQrnngIhAOScns0bL%2BrfSsyHMa0zTSYPS1ZY%2B4WUTr2ltJ2iQQtMKv8DCGAQABoMNjM3NDIzMTgzODA1IgyLKkkYsn5Kxr48ij0q3ANZYLQ5vVEznV1%2BW%2Ba2S80yKxlxXyxEnw4giGcli3fViw8alasG5yPPSd66K3762oel2KnBSVdk6stdhqid51uJdg4ySyxQOEyExWH6bGjppigCNt2FsSw7wA%2BSZP4pXcafESP%2F9D%2BtEsT5Ytvz2SIVYFsoiDCR3G6b82CYkIbofVBIH8jp2djuq9095zfoG7b0%2FcxFwwzB6O1oftjtZJ66sGSjR7p82wcj3Xa1rFau8%2FG1Vx0FVVOOKYh8sWBIRCJqFFY8ZZo0Yi7BV1UOnHhMb1KXClpM1dCUYY%2FH8BklPIrB3ZTjV4Eso4NOCxQOeZ1ljP0K%2B%2Bd0Gdd7Sp7TebcdFpymyP0B0V0dHHSaezEKzbExTXn6008VG8fvT2%2F3ka%2B%2F70LZonLk0AzC13jQHpPVA5TpohE6hSGWAjIrvWV%2FJhPBNkwFGlu3%2FJjhZEAibY0KrhRjjeBVMiliCKmDL8TCCTiHSvtTvixD%2FeAfgdtQWS3r2Zuve8faHt75RTzhSAatwWp0CP%2Bzk2wDKuKXZElS6w423%2B26ymqJ9DVl7T54caCJFq%2FdRrGUHcHRO%2FI1KbIs9hUiFc782kmeU6CjCKqN6p7ql3pxtiNoSoHYBEjBdAP3VLXNVWTSmcAobDDRlOa%2BBjqkAQDzSz%2BsCXsxtJyfWqd2KWgYR3a9djGC5p5BsVFl4yo9EL2DOHnJAPzzXQmcHvv8Irtrumhr%2FIHEu5SZBdDvo7bWFxgI3UNkZYIzfG3Ev1lGH4lbiH4B9GhEEVQmqDy3pkHMi4whcXOHRXWgvx89gmwAyBOhJgJOvb1KgeEliIWjBF0EbAAwXL188KVmzrNMk58ms6tOOQ4%2FFjprsDoBT1SfnSlG&X-Amz-Signature=cadc7bdbfe05473a6844d5752c471d3521ca47b8eeaf27373fc4d6b73137c41e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKA44QR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC4uCnH5CSvVjeOu%2BtVHIQkGSaBNPjzzVkHXCZ7EQrnngIhAOScns0bL%2BrfSsyHMa0zTSYPS1ZY%2B4WUTr2ltJ2iQQtMKv8DCGAQABoMNjM3NDIzMTgzODA1IgyLKkkYsn5Kxr48ij0q3ANZYLQ5vVEznV1%2BW%2Ba2S80yKxlxXyxEnw4giGcli3fViw8alasG5yPPSd66K3762oel2KnBSVdk6stdhqid51uJdg4ySyxQOEyExWH6bGjppigCNt2FsSw7wA%2BSZP4pXcafESP%2F9D%2BtEsT5Ytvz2SIVYFsoiDCR3G6b82CYkIbofVBIH8jp2djuq9095zfoG7b0%2FcxFwwzB6O1oftjtZJ66sGSjR7p82wcj3Xa1rFau8%2FG1Vx0FVVOOKYh8sWBIRCJqFFY8ZZo0Yi7BV1UOnHhMb1KXClpM1dCUYY%2FH8BklPIrB3ZTjV4Eso4NOCxQOeZ1ljP0K%2B%2Bd0Gdd7Sp7TebcdFpymyP0B0V0dHHSaezEKzbExTXn6008VG8fvT2%2F3ka%2B%2F70LZonLk0AzC13jQHpPVA5TpohE6hSGWAjIrvWV%2FJhPBNkwFGlu3%2FJjhZEAibY0KrhRjjeBVMiliCKmDL8TCCTiHSvtTvixD%2FeAfgdtQWS3r2Zuve8faHt75RTzhSAatwWp0CP%2Bzk2wDKuKXZElS6w423%2B26ymqJ9DVl7T54caCJFq%2FdRrGUHcHRO%2FI1KbIs9hUiFc782kmeU6CjCKqN6p7ql3pxtiNoSoHYBEjBdAP3VLXNVWTSmcAobDDRlOa%2BBjqkAQDzSz%2BsCXsxtJyfWqd2KWgYR3a9djGC5p5BsVFl4yo9EL2DOHnJAPzzXQmcHvv8Irtrumhr%2FIHEu5SZBdDvo7bWFxgI3UNkZYIzfG3Ev1lGH4lbiH4B9GhEEVQmqDy3pkHMi4whcXOHRXWgvx89gmwAyBOhJgJOvb1KgeEliIWjBF0EbAAwXL188KVmzrNMk58ms6tOOQ4%2FFjprsDoBT1SfnSlG&X-Amz-Signature=5473b18be06698cb4f934eec15097333d35ed18e333caffdcc0ac7bb0de0f606&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKA44QR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC4uCnH5CSvVjeOu%2BtVHIQkGSaBNPjzzVkHXCZ7EQrnngIhAOScns0bL%2BrfSsyHMa0zTSYPS1ZY%2B4WUTr2ltJ2iQQtMKv8DCGAQABoMNjM3NDIzMTgzODA1IgyLKkkYsn5Kxr48ij0q3ANZYLQ5vVEznV1%2BW%2Ba2S80yKxlxXyxEnw4giGcli3fViw8alasG5yPPSd66K3762oel2KnBSVdk6stdhqid51uJdg4ySyxQOEyExWH6bGjppigCNt2FsSw7wA%2BSZP4pXcafESP%2F9D%2BtEsT5Ytvz2SIVYFsoiDCR3G6b82CYkIbofVBIH8jp2djuq9095zfoG7b0%2FcxFwwzB6O1oftjtZJ66sGSjR7p82wcj3Xa1rFau8%2FG1Vx0FVVOOKYh8sWBIRCJqFFY8ZZo0Yi7BV1UOnHhMb1KXClpM1dCUYY%2FH8BklPIrB3ZTjV4Eso4NOCxQOeZ1ljP0K%2B%2Bd0Gdd7Sp7TebcdFpymyP0B0V0dHHSaezEKzbExTXn6008VG8fvT2%2F3ka%2B%2F70LZonLk0AzC13jQHpPVA5TpohE6hSGWAjIrvWV%2FJhPBNkwFGlu3%2FJjhZEAibY0KrhRjjeBVMiliCKmDL8TCCTiHSvtTvixD%2FeAfgdtQWS3r2Zuve8faHt75RTzhSAatwWp0CP%2Bzk2wDKuKXZElS6w423%2B26ymqJ9DVl7T54caCJFq%2FdRrGUHcHRO%2FI1KbIs9hUiFc782kmeU6CjCKqN6p7ql3pxtiNoSoHYBEjBdAP3VLXNVWTSmcAobDDRlOa%2BBjqkAQDzSz%2BsCXsxtJyfWqd2KWgYR3a9djGC5p5BsVFl4yo9EL2DOHnJAPzzXQmcHvv8Irtrumhr%2FIHEu5SZBdDvo7bWFxgI3UNkZYIzfG3Ev1lGH4lbiH4B9GhEEVQmqDy3pkHMi4whcXOHRXWgvx89gmwAyBOhJgJOvb1KgeEliIWjBF0EbAAwXL188KVmzrNMk58ms6tOOQ4%2FFjprsDoBT1SfnSlG&X-Amz-Signature=bd314b29326e996e7525650b9cec48f7f96f28b45cb22370c7edc5cd86ecd8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKA44QR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC4uCnH5CSvVjeOu%2BtVHIQkGSaBNPjzzVkHXCZ7EQrnngIhAOScns0bL%2BrfSsyHMa0zTSYPS1ZY%2B4WUTr2ltJ2iQQtMKv8DCGAQABoMNjM3NDIzMTgzODA1IgyLKkkYsn5Kxr48ij0q3ANZYLQ5vVEznV1%2BW%2Ba2S80yKxlxXyxEnw4giGcli3fViw8alasG5yPPSd66K3762oel2KnBSVdk6stdhqid51uJdg4ySyxQOEyExWH6bGjppigCNt2FsSw7wA%2BSZP4pXcafESP%2F9D%2BtEsT5Ytvz2SIVYFsoiDCR3G6b82CYkIbofVBIH8jp2djuq9095zfoG7b0%2FcxFwwzB6O1oftjtZJ66sGSjR7p82wcj3Xa1rFau8%2FG1Vx0FVVOOKYh8sWBIRCJqFFY8ZZo0Yi7BV1UOnHhMb1KXClpM1dCUYY%2FH8BklPIrB3ZTjV4Eso4NOCxQOeZ1ljP0K%2B%2Bd0Gdd7Sp7TebcdFpymyP0B0V0dHHSaezEKzbExTXn6008VG8fvT2%2F3ka%2B%2F70LZonLk0AzC13jQHpPVA5TpohE6hSGWAjIrvWV%2FJhPBNkwFGlu3%2FJjhZEAibY0KrhRjjeBVMiliCKmDL8TCCTiHSvtTvixD%2FeAfgdtQWS3r2Zuve8faHt75RTzhSAatwWp0CP%2Bzk2wDKuKXZElS6w423%2B26ymqJ9DVl7T54caCJFq%2FdRrGUHcHRO%2FI1KbIs9hUiFc782kmeU6CjCKqN6p7ql3pxtiNoSoHYBEjBdAP3VLXNVWTSmcAobDDRlOa%2BBjqkAQDzSz%2BsCXsxtJyfWqd2KWgYR3a9djGC5p5BsVFl4yo9EL2DOHnJAPzzXQmcHvv8Irtrumhr%2FIHEu5SZBdDvo7bWFxgI3UNkZYIzfG3Ev1lGH4lbiH4B9GhEEVQmqDy3pkHMi4whcXOHRXWgvx89gmwAyBOhJgJOvb1KgeEliIWjBF0EbAAwXL188KVmzrNMk58ms6tOOQ4%2FFjprsDoBT1SfnSlG&X-Amz-Signature=18b5779ebcae5b6496adf73fe653c8cc71fc60b7d026dfdb3dabcabc39c5c3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKA44QR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC4uCnH5CSvVjeOu%2BtVHIQkGSaBNPjzzVkHXCZ7EQrnngIhAOScns0bL%2BrfSsyHMa0zTSYPS1ZY%2B4WUTr2ltJ2iQQtMKv8DCGAQABoMNjM3NDIzMTgzODA1IgyLKkkYsn5Kxr48ij0q3ANZYLQ5vVEznV1%2BW%2Ba2S80yKxlxXyxEnw4giGcli3fViw8alasG5yPPSd66K3762oel2KnBSVdk6stdhqid51uJdg4ySyxQOEyExWH6bGjppigCNt2FsSw7wA%2BSZP4pXcafESP%2F9D%2BtEsT5Ytvz2SIVYFsoiDCR3G6b82CYkIbofVBIH8jp2djuq9095zfoG7b0%2FcxFwwzB6O1oftjtZJ66sGSjR7p82wcj3Xa1rFau8%2FG1Vx0FVVOOKYh8sWBIRCJqFFY8ZZo0Yi7BV1UOnHhMb1KXClpM1dCUYY%2FH8BklPIrB3ZTjV4Eso4NOCxQOeZ1ljP0K%2B%2Bd0Gdd7Sp7TebcdFpymyP0B0V0dHHSaezEKzbExTXn6008VG8fvT2%2F3ka%2B%2F70LZonLk0AzC13jQHpPVA5TpohE6hSGWAjIrvWV%2FJhPBNkwFGlu3%2FJjhZEAibY0KrhRjjeBVMiliCKmDL8TCCTiHSvtTvixD%2FeAfgdtQWS3r2Zuve8faHt75RTzhSAatwWp0CP%2Bzk2wDKuKXZElS6w423%2B26ymqJ9DVl7T54caCJFq%2FdRrGUHcHRO%2FI1KbIs9hUiFc782kmeU6CjCKqN6p7ql3pxtiNoSoHYBEjBdAP3VLXNVWTSmcAobDDRlOa%2BBjqkAQDzSz%2BsCXsxtJyfWqd2KWgYR3a9djGC5p5BsVFl4yo9EL2DOHnJAPzzXQmcHvv8Irtrumhr%2FIHEu5SZBdDvo7bWFxgI3UNkZYIzfG3Ev1lGH4lbiH4B9GhEEVQmqDy3pkHMi4whcXOHRXWgvx89gmwAyBOhJgJOvb1KgeEliIWjBF0EbAAwXL188KVmzrNMk58ms6tOOQ4%2FFjprsDoBT1SfnSlG&X-Amz-Signature=6ada55203101c525eb01233dc5f0ddfb8d195ae460f7a4452a69e5c9505061cb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKA44QR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC4uCnH5CSvVjeOu%2BtVHIQkGSaBNPjzzVkHXCZ7EQrnngIhAOScns0bL%2BrfSsyHMa0zTSYPS1ZY%2B4WUTr2ltJ2iQQtMKv8DCGAQABoMNjM3NDIzMTgzODA1IgyLKkkYsn5Kxr48ij0q3ANZYLQ5vVEznV1%2BW%2Ba2S80yKxlxXyxEnw4giGcli3fViw8alasG5yPPSd66K3762oel2KnBSVdk6stdhqid51uJdg4ySyxQOEyExWH6bGjppigCNt2FsSw7wA%2BSZP4pXcafESP%2F9D%2BtEsT5Ytvz2SIVYFsoiDCR3G6b82CYkIbofVBIH8jp2djuq9095zfoG7b0%2FcxFwwzB6O1oftjtZJ66sGSjR7p82wcj3Xa1rFau8%2FG1Vx0FVVOOKYh8sWBIRCJqFFY8ZZo0Yi7BV1UOnHhMb1KXClpM1dCUYY%2FH8BklPIrB3ZTjV4Eso4NOCxQOeZ1ljP0K%2B%2Bd0Gdd7Sp7TebcdFpymyP0B0V0dHHSaezEKzbExTXn6008VG8fvT2%2F3ka%2B%2F70LZonLk0AzC13jQHpPVA5TpohE6hSGWAjIrvWV%2FJhPBNkwFGlu3%2FJjhZEAibY0KrhRjjeBVMiliCKmDL8TCCTiHSvtTvixD%2FeAfgdtQWS3r2Zuve8faHt75RTzhSAatwWp0CP%2Bzk2wDKuKXZElS6w423%2B26ymqJ9DVl7T54caCJFq%2FdRrGUHcHRO%2FI1KbIs9hUiFc782kmeU6CjCKqN6p7ql3pxtiNoSoHYBEjBdAP3VLXNVWTSmcAobDDRlOa%2BBjqkAQDzSz%2BsCXsxtJyfWqd2KWgYR3a9djGC5p5BsVFl4yo9EL2DOHnJAPzzXQmcHvv8Irtrumhr%2FIHEu5SZBdDvo7bWFxgI3UNkZYIzfG3Ev1lGH4lbiH4B9GhEEVQmqDy3pkHMi4whcXOHRXWgvx89gmwAyBOhJgJOvb1KgeEliIWjBF0EbAAwXL188KVmzrNMk58ms6tOOQ4%2FFjprsDoBT1SfnSlG&X-Amz-Signature=933283ef813be9e451f3edf593b63e76a06d03bc10a29f4d14d4284e9532f140&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

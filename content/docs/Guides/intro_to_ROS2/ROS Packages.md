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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGLTQT5B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHYqR1f9skkrfbGj6%2B3S%2BFZYQ63nHJW2AKoIdZV3bTzxAiAyuimOAyHjk1ql7wwVD2%2BZeHfuWaB3Cu4unCdgyCGyrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJg5L9lg5A8QKmbMEKtwD%2FoZyByDyrc7%2BYNE8oIklzQfBCTIRESY1FV7mR0JUp0jtXfDGkidOdLN5qDrtHPgdWHNEC991Zu%2FX%2FgR4qdJ%2F3D95BmWp7eY6tatJ7khaQ1g4GagrwWhsSwMPrJ0auicyOAsWmaTV9qVbvSaUwdL9nwOsogbDRrC%2BmhpZ%2BCzfmTLkwubLHe82lJ8bo7R9PNINnQcstN1ERaHLIobSwZBrHCzrrmXJY5Dj%2FbCWmoK0x6MbPOzTcYRQM%2FHRUEJC1E7wyCMETw7D%2FcCbC4AQUCM9%2BY%2FO2y4brS94i5%2FP4zJHpjli6nAOYysVTkEMPa%2F4WazKPLlcW8bq2mvmjtRpJvWQClB7jZrWHtJ9BAK9uHR3t%2FlNWuC4%2BMau6zbsLMqDCfL%2B6yRCOFR6HEhDeeYtijuDXUH0aQGi4tVxbv96LpT5ZFpaKm7%2BwYjDIUqbMB5W4FnuMvyXa0cnc7baCY40s8qtVHxlL%2BfPILIb9rVfII5ORLkIMYgeq49KGvczIfEaN%2FRydG2tIJscFem7DTnO6%2BA0XMN737j6s0%2BYAriVXYdF3lq3zIghCL5tggXGLP9MKmgZ0sU4v24ykbkxJIBrWNI6lKYCAnExHgd1gRVWjpHRN6KuP3L2eoCm4OVNGaAwstimvwY6pgHfIlZqTKXtF1Jv%2FOnkNm1DJYCArhBcGhQwDhKC7jmKDrCV2p2fj5pR1e7hsrAZUd4uRai5aGZKf%2BxhKs3HB%2FHSfLVAWkbI6flGLVaNaxGZsloUOW%2Bjsyi%2BNF21LJ42%2FNtr7EugXLqqly4DpsOM0c1qAmsYkPN3BzLDDVVVLtntrACdsmXHap4bo6C9ySvXe8%2F%2FBZRz9FOyNnecDFyR8jYWPQ9rDFCv&X-Amz-Signature=9a1e8d9d1a2470ec4afd995e7eadf20c27b3d69d0056b5a32530db0d22942aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGLTQT5B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHYqR1f9skkrfbGj6%2B3S%2BFZYQ63nHJW2AKoIdZV3bTzxAiAyuimOAyHjk1ql7wwVD2%2BZeHfuWaB3Cu4unCdgyCGyrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJg5L9lg5A8QKmbMEKtwD%2FoZyByDyrc7%2BYNE8oIklzQfBCTIRESY1FV7mR0JUp0jtXfDGkidOdLN5qDrtHPgdWHNEC991Zu%2FX%2FgR4qdJ%2F3D95BmWp7eY6tatJ7khaQ1g4GagrwWhsSwMPrJ0auicyOAsWmaTV9qVbvSaUwdL9nwOsogbDRrC%2BmhpZ%2BCzfmTLkwubLHe82lJ8bo7R9PNINnQcstN1ERaHLIobSwZBrHCzrrmXJY5Dj%2FbCWmoK0x6MbPOzTcYRQM%2FHRUEJC1E7wyCMETw7D%2FcCbC4AQUCM9%2BY%2FO2y4brS94i5%2FP4zJHpjli6nAOYysVTkEMPa%2F4WazKPLlcW8bq2mvmjtRpJvWQClB7jZrWHtJ9BAK9uHR3t%2FlNWuC4%2BMau6zbsLMqDCfL%2B6yRCOFR6HEhDeeYtijuDXUH0aQGi4tVxbv96LpT5ZFpaKm7%2BwYjDIUqbMB5W4FnuMvyXa0cnc7baCY40s8qtVHxlL%2BfPILIb9rVfII5ORLkIMYgeq49KGvczIfEaN%2FRydG2tIJscFem7DTnO6%2BA0XMN737j6s0%2BYAriVXYdF3lq3zIghCL5tggXGLP9MKmgZ0sU4v24ykbkxJIBrWNI6lKYCAnExHgd1gRVWjpHRN6KuP3L2eoCm4OVNGaAwstimvwY6pgHfIlZqTKXtF1Jv%2FOnkNm1DJYCArhBcGhQwDhKC7jmKDrCV2p2fj5pR1e7hsrAZUd4uRai5aGZKf%2BxhKs3HB%2FHSfLVAWkbI6flGLVaNaxGZsloUOW%2Bjsyi%2BNF21LJ42%2FNtr7EugXLqqly4DpsOM0c1qAmsYkPN3BzLDDVVVLtntrACdsmXHap4bo6C9ySvXe8%2F%2FBZRz9FOyNnecDFyR8jYWPQ9rDFCv&X-Amz-Signature=b0242a30f42c83da230df0eced6fff43d8609dac9eda46a9bd10d9c7bdf9eb92&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGLTQT5B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHYqR1f9skkrfbGj6%2B3S%2BFZYQ63nHJW2AKoIdZV3bTzxAiAyuimOAyHjk1ql7wwVD2%2BZeHfuWaB3Cu4unCdgyCGyrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJg5L9lg5A8QKmbMEKtwD%2FoZyByDyrc7%2BYNE8oIklzQfBCTIRESY1FV7mR0JUp0jtXfDGkidOdLN5qDrtHPgdWHNEC991Zu%2FX%2FgR4qdJ%2F3D95BmWp7eY6tatJ7khaQ1g4GagrwWhsSwMPrJ0auicyOAsWmaTV9qVbvSaUwdL9nwOsogbDRrC%2BmhpZ%2BCzfmTLkwubLHe82lJ8bo7R9PNINnQcstN1ERaHLIobSwZBrHCzrrmXJY5Dj%2FbCWmoK0x6MbPOzTcYRQM%2FHRUEJC1E7wyCMETw7D%2FcCbC4AQUCM9%2BY%2FO2y4brS94i5%2FP4zJHpjli6nAOYysVTkEMPa%2F4WazKPLlcW8bq2mvmjtRpJvWQClB7jZrWHtJ9BAK9uHR3t%2FlNWuC4%2BMau6zbsLMqDCfL%2B6yRCOFR6HEhDeeYtijuDXUH0aQGi4tVxbv96LpT5ZFpaKm7%2BwYjDIUqbMB5W4FnuMvyXa0cnc7baCY40s8qtVHxlL%2BfPILIb9rVfII5ORLkIMYgeq49KGvczIfEaN%2FRydG2tIJscFem7DTnO6%2BA0XMN737j6s0%2BYAriVXYdF3lq3zIghCL5tggXGLP9MKmgZ0sU4v24ykbkxJIBrWNI6lKYCAnExHgd1gRVWjpHRN6KuP3L2eoCm4OVNGaAwstimvwY6pgHfIlZqTKXtF1Jv%2FOnkNm1DJYCArhBcGhQwDhKC7jmKDrCV2p2fj5pR1e7hsrAZUd4uRai5aGZKf%2BxhKs3HB%2FHSfLVAWkbI6flGLVaNaxGZsloUOW%2Bjsyi%2BNF21LJ42%2FNtr7EugXLqqly4DpsOM0c1qAmsYkPN3BzLDDVVVLtntrACdsmXHap4bo6C9ySvXe8%2F%2FBZRz9FOyNnecDFyR8jYWPQ9rDFCv&X-Amz-Signature=e4fd8a56944eeac23fba033eaa28a029a3a143431245294aaffba377346616b0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGLTQT5B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHYqR1f9skkrfbGj6%2B3S%2BFZYQ63nHJW2AKoIdZV3bTzxAiAyuimOAyHjk1ql7wwVD2%2BZeHfuWaB3Cu4unCdgyCGyrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJg5L9lg5A8QKmbMEKtwD%2FoZyByDyrc7%2BYNE8oIklzQfBCTIRESY1FV7mR0JUp0jtXfDGkidOdLN5qDrtHPgdWHNEC991Zu%2FX%2FgR4qdJ%2F3D95BmWp7eY6tatJ7khaQ1g4GagrwWhsSwMPrJ0auicyOAsWmaTV9qVbvSaUwdL9nwOsogbDRrC%2BmhpZ%2BCzfmTLkwubLHe82lJ8bo7R9PNINnQcstN1ERaHLIobSwZBrHCzrrmXJY5Dj%2FbCWmoK0x6MbPOzTcYRQM%2FHRUEJC1E7wyCMETw7D%2FcCbC4AQUCM9%2BY%2FO2y4brS94i5%2FP4zJHpjli6nAOYysVTkEMPa%2F4WazKPLlcW8bq2mvmjtRpJvWQClB7jZrWHtJ9BAK9uHR3t%2FlNWuC4%2BMau6zbsLMqDCfL%2B6yRCOFR6HEhDeeYtijuDXUH0aQGi4tVxbv96LpT5ZFpaKm7%2BwYjDIUqbMB5W4FnuMvyXa0cnc7baCY40s8qtVHxlL%2BfPILIb9rVfII5ORLkIMYgeq49KGvczIfEaN%2FRydG2tIJscFem7DTnO6%2BA0XMN737j6s0%2BYAriVXYdF3lq3zIghCL5tggXGLP9MKmgZ0sU4v24ykbkxJIBrWNI6lKYCAnExHgd1gRVWjpHRN6KuP3L2eoCm4OVNGaAwstimvwY6pgHfIlZqTKXtF1Jv%2FOnkNm1DJYCArhBcGhQwDhKC7jmKDrCV2p2fj5pR1e7hsrAZUd4uRai5aGZKf%2BxhKs3HB%2FHSfLVAWkbI6flGLVaNaxGZsloUOW%2Bjsyi%2BNF21LJ42%2FNtr7EugXLqqly4DpsOM0c1qAmsYkPN3BzLDDVVVLtntrACdsmXHap4bo6C9ySvXe8%2F%2FBZRz9FOyNnecDFyR8jYWPQ9rDFCv&X-Amz-Signature=3b52828178f380281d7f567b6da422648f61ccca9d481fec51a8e934882c8241&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGLTQT5B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHYqR1f9skkrfbGj6%2B3S%2BFZYQ63nHJW2AKoIdZV3bTzxAiAyuimOAyHjk1ql7wwVD2%2BZeHfuWaB3Cu4unCdgyCGyrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJg5L9lg5A8QKmbMEKtwD%2FoZyByDyrc7%2BYNE8oIklzQfBCTIRESY1FV7mR0JUp0jtXfDGkidOdLN5qDrtHPgdWHNEC991Zu%2FX%2FgR4qdJ%2F3D95BmWp7eY6tatJ7khaQ1g4GagrwWhsSwMPrJ0auicyOAsWmaTV9qVbvSaUwdL9nwOsogbDRrC%2BmhpZ%2BCzfmTLkwubLHe82lJ8bo7R9PNINnQcstN1ERaHLIobSwZBrHCzrrmXJY5Dj%2FbCWmoK0x6MbPOzTcYRQM%2FHRUEJC1E7wyCMETw7D%2FcCbC4AQUCM9%2BY%2FO2y4brS94i5%2FP4zJHpjli6nAOYysVTkEMPa%2F4WazKPLlcW8bq2mvmjtRpJvWQClB7jZrWHtJ9BAK9uHR3t%2FlNWuC4%2BMau6zbsLMqDCfL%2B6yRCOFR6HEhDeeYtijuDXUH0aQGi4tVxbv96LpT5ZFpaKm7%2BwYjDIUqbMB5W4FnuMvyXa0cnc7baCY40s8qtVHxlL%2BfPILIb9rVfII5ORLkIMYgeq49KGvczIfEaN%2FRydG2tIJscFem7DTnO6%2BA0XMN737j6s0%2BYAriVXYdF3lq3zIghCL5tggXGLP9MKmgZ0sU4v24ykbkxJIBrWNI6lKYCAnExHgd1gRVWjpHRN6KuP3L2eoCm4OVNGaAwstimvwY6pgHfIlZqTKXtF1Jv%2FOnkNm1DJYCArhBcGhQwDhKC7jmKDrCV2p2fj5pR1e7hsrAZUd4uRai5aGZKf%2BxhKs3HB%2FHSfLVAWkbI6flGLVaNaxGZsloUOW%2Bjsyi%2BNF21LJ42%2FNtr7EugXLqqly4DpsOM0c1qAmsYkPN3BzLDDVVVLtntrACdsmXHap4bo6C9ySvXe8%2F%2FBZRz9FOyNnecDFyR8jYWPQ9rDFCv&X-Amz-Signature=c3d4d80c106d26b156806fe946941d8498fb2c0003846829eb50a09521d7686e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGLTQT5B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHYqR1f9skkrfbGj6%2B3S%2BFZYQ63nHJW2AKoIdZV3bTzxAiAyuimOAyHjk1ql7wwVD2%2BZeHfuWaB3Cu4unCdgyCGyrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJg5L9lg5A8QKmbMEKtwD%2FoZyByDyrc7%2BYNE8oIklzQfBCTIRESY1FV7mR0JUp0jtXfDGkidOdLN5qDrtHPgdWHNEC991Zu%2FX%2FgR4qdJ%2F3D95BmWp7eY6tatJ7khaQ1g4GagrwWhsSwMPrJ0auicyOAsWmaTV9qVbvSaUwdL9nwOsogbDRrC%2BmhpZ%2BCzfmTLkwubLHe82lJ8bo7R9PNINnQcstN1ERaHLIobSwZBrHCzrrmXJY5Dj%2FbCWmoK0x6MbPOzTcYRQM%2FHRUEJC1E7wyCMETw7D%2FcCbC4AQUCM9%2BY%2FO2y4brS94i5%2FP4zJHpjli6nAOYysVTkEMPa%2F4WazKPLlcW8bq2mvmjtRpJvWQClB7jZrWHtJ9BAK9uHR3t%2FlNWuC4%2BMau6zbsLMqDCfL%2B6yRCOFR6HEhDeeYtijuDXUH0aQGi4tVxbv96LpT5ZFpaKm7%2BwYjDIUqbMB5W4FnuMvyXa0cnc7baCY40s8qtVHxlL%2BfPILIb9rVfII5ORLkIMYgeq49KGvczIfEaN%2FRydG2tIJscFem7DTnO6%2BA0XMN737j6s0%2BYAriVXYdF3lq3zIghCL5tggXGLP9MKmgZ0sU4v24ykbkxJIBrWNI6lKYCAnExHgd1gRVWjpHRN6KuP3L2eoCm4OVNGaAwstimvwY6pgHfIlZqTKXtF1Jv%2FOnkNm1DJYCArhBcGhQwDhKC7jmKDrCV2p2fj5pR1e7hsrAZUd4uRai5aGZKf%2BxhKs3HB%2FHSfLVAWkbI6flGLVaNaxGZsloUOW%2Bjsyi%2BNF21LJ42%2FNtr7EugXLqqly4DpsOM0c1qAmsYkPN3BzLDDVVVLtntrACdsmXHap4bo6C9ySvXe8%2F%2FBZRz9FOyNnecDFyR8jYWPQ9rDFCv&X-Amz-Signature=8fc5c6b87db1a2fbab305a37a078994cccd1b65cfbab7efbb57190fad6e62303&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGLTQT5B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHYqR1f9skkrfbGj6%2B3S%2BFZYQ63nHJW2AKoIdZV3bTzxAiAyuimOAyHjk1ql7wwVD2%2BZeHfuWaB3Cu4unCdgyCGyrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJg5L9lg5A8QKmbMEKtwD%2FoZyByDyrc7%2BYNE8oIklzQfBCTIRESY1FV7mR0JUp0jtXfDGkidOdLN5qDrtHPgdWHNEC991Zu%2FX%2FgR4qdJ%2F3D95BmWp7eY6tatJ7khaQ1g4GagrwWhsSwMPrJ0auicyOAsWmaTV9qVbvSaUwdL9nwOsogbDRrC%2BmhpZ%2BCzfmTLkwubLHe82lJ8bo7R9PNINnQcstN1ERaHLIobSwZBrHCzrrmXJY5Dj%2FbCWmoK0x6MbPOzTcYRQM%2FHRUEJC1E7wyCMETw7D%2FcCbC4AQUCM9%2BY%2FO2y4brS94i5%2FP4zJHpjli6nAOYysVTkEMPa%2F4WazKPLlcW8bq2mvmjtRpJvWQClB7jZrWHtJ9BAK9uHR3t%2FlNWuC4%2BMau6zbsLMqDCfL%2B6yRCOFR6HEhDeeYtijuDXUH0aQGi4tVxbv96LpT5ZFpaKm7%2BwYjDIUqbMB5W4FnuMvyXa0cnc7baCY40s8qtVHxlL%2BfPILIb9rVfII5ORLkIMYgeq49KGvczIfEaN%2FRydG2tIJscFem7DTnO6%2BA0XMN737j6s0%2BYAriVXYdF3lq3zIghCL5tggXGLP9MKmgZ0sU4v24ykbkxJIBrWNI6lKYCAnExHgd1gRVWjpHRN6KuP3L2eoCm4OVNGaAwstimvwY6pgHfIlZqTKXtF1Jv%2FOnkNm1DJYCArhBcGhQwDhKC7jmKDrCV2p2fj5pR1e7hsrAZUd4uRai5aGZKf%2BxhKs3HB%2FHSfLVAWkbI6flGLVaNaxGZsloUOW%2Bjsyi%2BNF21LJ42%2FNtr7EugXLqqly4DpsOM0c1qAmsYkPN3BzLDDVVVLtntrACdsmXHap4bo6C9ySvXe8%2F%2FBZRz9FOyNnecDFyR8jYWPQ9rDFCv&X-Amz-Signature=4038642a20f82843d0318f5a2a4edc52c713a31c8cb1cb4a9ff567644a71f1ab&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

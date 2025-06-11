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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GFRRX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiFU6cxBi3PYmdlKbd9YR5JAc1gN9IQeB8bptdviHoegIgApx0efFCykGKL7JenHXXuVuOOGMer3oGCME2UtR%2Br%2FEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFKOgoye05Y4PBeZCrcA8d6zOT21heXMunkNt3noM434Krq6pcSmud4fzHIdAcDGhLn%2BWHdBXAN3lzs7y0kh6xwmPIkZyuMir0pVnbx3J0AbbCvhuHY7Dyc7hhjkmXwHWhOOB%2BTaWVm07h8MxEBrP0Lnx%2F3TbJwxdqaPBx3QXXvnLejhLM7tw9NpPLczKymBnEnrvQeNcGk4U57wqQmssBh8deK7rgh1oFgtjRSGydjAKyeht2q7Cy5kjt%2FGQh5SEaC7lRrwCMT%2FYOcgJEB9n3kr%2B4fFXBrp0X762s6DJTXt76osj6qTObjC7zsyV6SL5qJVyruEMBzuJ2EN5Q3fTdFNvcwHv%2F4IkN0RAu7aUGgFn3XB64Z0F%2Bu85PPJKg%2FR7tyzEJfogdSVUjFTZpnq4OboS8HpBlk4zBXx5D0YulyIdhm7brEYgHizcRqDImSMxJtj0SdvqrW02wNwy9ZI2tXxQljed9MfzauA5zaeiShWMutQ4Cf5Hn2mLIgV5dRPm1P7ryRpJhh02b7HI5NcmrYNVbrMH4sCS7hyOTbhN%2B01J%2FKTa5r%2BFX9gyhPs6WCC8j3ae0Xc6hUZHyblpDr8EOyO1POn0Fw5NwJTHGwwvfMnupItDWK85rymsfFghcnZz7wbBs7KM39qBX5MKbmpcIGOqUBOmZNUpO6X3G4mgGYVnfG2omW%2FX%2B8WVrXOC7yX2IE76Nza318L40pF%2BPlGtOJUTuTOPQPly74hcqvYQuZL6M1aWrvbyQKJJR86TiDK2mLHLtvj1MKXau1F9jllWj%2FTmdi1hnhQQnsdJVvUZEVGUziLdDfNiHdzHHgG0tcIsLqy4kjW7CM5Ai1Sd6%2F9TjyaVMAEnzV0LeLeKR9SJqbmOc8uL6%2BkMpI&X-Amz-Signature=d9b49c8c0d43ce077f422a4376e9574cbbaf4b1e99f8f43fd059b8c91deaef4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GFRRX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiFU6cxBi3PYmdlKbd9YR5JAc1gN9IQeB8bptdviHoegIgApx0efFCykGKL7JenHXXuVuOOGMer3oGCME2UtR%2Br%2FEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFKOgoye05Y4PBeZCrcA8d6zOT21heXMunkNt3noM434Krq6pcSmud4fzHIdAcDGhLn%2BWHdBXAN3lzs7y0kh6xwmPIkZyuMir0pVnbx3J0AbbCvhuHY7Dyc7hhjkmXwHWhOOB%2BTaWVm07h8MxEBrP0Lnx%2F3TbJwxdqaPBx3QXXvnLejhLM7tw9NpPLczKymBnEnrvQeNcGk4U57wqQmssBh8deK7rgh1oFgtjRSGydjAKyeht2q7Cy5kjt%2FGQh5SEaC7lRrwCMT%2FYOcgJEB9n3kr%2B4fFXBrp0X762s6DJTXt76osj6qTObjC7zsyV6SL5qJVyruEMBzuJ2EN5Q3fTdFNvcwHv%2F4IkN0RAu7aUGgFn3XB64Z0F%2Bu85PPJKg%2FR7tyzEJfogdSVUjFTZpnq4OboS8HpBlk4zBXx5D0YulyIdhm7brEYgHizcRqDImSMxJtj0SdvqrW02wNwy9ZI2tXxQljed9MfzauA5zaeiShWMutQ4Cf5Hn2mLIgV5dRPm1P7ryRpJhh02b7HI5NcmrYNVbrMH4sCS7hyOTbhN%2B01J%2FKTa5r%2BFX9gyhPs6WCC8j3ae0Xc6hUZHyblpDr8EOyO1POn0Fw5NwJTHGwwvfMnupItDWK85rymsfFghcnZz7wbBs7KM39qBX5MKbmpcIGOqUBOmZNUpO6X3G4mgGYVnfG2omW%2FX%2B8WVrXOC7yX2IE76Nza318L40pF%2BPlGtOJUTuTOPQPly74hcqvYQuZL6M1aWrvbyQKJJR86TiDK2mLHLtvj1MKXau1F9jllWj%2FTmdi1hnhQQnsdJVvUZEVGUziLdDfNiHdzHHgG0tcIsLqy4kjW7CM5Ai1Sd6%2F9TjyaVMAEnzV0LeLeKR9SJqbmOc8uL6%2BkMpI&X-Amz-Signature=22bffe018db2bf5f53f8648005c4f53adfb725b07f1a024504799977a2382077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GFRRX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiFU6cxBi3PYmdlKbd9YR5JAc1gN9IQeB8bptdviHoegIgApx0efFCykGKL7JenHXXuVuOOGMer3oGCME2UtR%2Br%2FEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFKOgoye05Y4PBeZCrcA8d6zOT21heXMunkNt3noM434Krq6pcSmud4fzHIdAcDGhLn%2BWHdBXAN3lzs7y0kh6xwmPIkZyuMir0pVnbx3J0AbbCvhuHY7Dyc7hhjkmXwHWhOOB%2BTaWVm07h8MxEBrP0Lnx%2F3TbJwxdqaPBx3QXXvnLejhLM7tw9NpPLczKymBnEnrvQeNcGk4U57wqQmssBh8deK7rgh1oFgtjRSGydjAKyeht2q7Cy5kjt%2FGQh5SEaC7lRrwCMT%2FYOcgJEB9n3kr%2B4fFXBrp0X762s6DJTXt76osj6qTObjC7zsyV6SL5qJVyruEMBzuJ2EN5Q3fTdFNvcwHv%2F4IkN0RAu7aUGgFn3XB64Z0F%2Bu85PPJKg%2FR7tyzEJfogdSVUjFTZpnq4OboS8HpBlk4zBXx5D0YulyIdhm7brEYgHizcRqDImSMxJtj0SdvqrW02wNwy9ZI2tXxQljed9MfzauA5zaeiShWMutQ4Cf5Hn2mLIgV5dRPm1P7ryRpJhh02b7HI5NcmrYNVbrMH4sCS7hyOTbhN%2B01J%2FKTa5r%2BFX9gyhPs6WCC8j3ae0Xc6hUZHyblpDr8EOyO1POn0Fw5NwJTHGwwvfMnupItDWK85rymsfFghcnZz7wbBs7KM39qBX5MKbmpcIGOqUBOmZNUpO6X3G4mgGYVnfG2omW%2FX%2B8WVrXOC7yX2IE76Nza318L40pF%2BPlGtOJUTuTOPQPly74hcqvYQuZL6M1aWrvbyQKJJR86TiDK2mLHLtvj1MKXau1F9jllWj%2FTmdi1hnhQQnsdJVvUZEVGUziLdDfNiHdzHHgG0tcIsLqy4kjW7CM5Ai1Sd6%2F9TjyaVMAEnzV0LeLeKR9SJqbmOc8uL6%2BkMpI&X-Amz-Signature=f5483e8f7bd6209fb951b9a188d1168ad08a9541ad4f02689b19aaf72c809ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GFRRX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiFU6cxBi3PYmdlKbd9YR5JAc1gN9IQeB8bptdviHoegIgApx0efFCykGKL7JenHXXuVuOOGMer3oGCME2UtR%2Br%2FEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFKOgoye05Y4PBeZCrcA8d6zOT21heXMunkNt3noM434Krq6pcSmud4fzHIdAcDGhLn%2BWHdBXAN3lzs7y0kh6xwmPIkZyuMir0pVnbx3J0AbbCvhuHY7Dyc7hhjkmXwHWhOOB%2BTaWVm07h8MxEBrP0Lnx%2F3TbJwxdqaPBx3QXXvnLejhLM7tw9NpPLczKymBnEnrvQeNcGk4U57wqQmssBh8deK7rgh1oFgtjRSGydjAKyeht2q7Cy5kjt%2FGQh5SEaC7lRrwCMT%2FYOcgJEB9n3kr%2B4fFXBrp0X762s6DJTXt76osj6qTObjC7zsyV6SL5qJVyruEMBzuJ2EN5Q3fTdFNvcwHv%2F4IkN0RAu7aUGgFn3XB64Z0F%2Bu85PPJKg%2FR7tyzEJfogdSVUjFTZpnq4OboS8HpBlk4zBXx5D0YulyIdhm7brEYgHizcRqDImSMxJtj0SdvqrW02wNwy9ZI2tXxQljed9MfzauA5zaeiShWMutQ4Cf5Hn2mLIgV5dRPm1P7ryRpJhh02b7HI5NcmrYNVbrMH4sCS7hyOTbhN%2B01J%2FKTa5r%2BFX9gyhPs6WCC8j3ae0Xc6hUZHyblpDr8EOyO1POn0Fw5NwJTHGwwvfMnupItDWK85rymsfFghcnZz7wbBs7KM39qBX5MKbmpcIGOqUBOmZNUpO6X3G4mgGYVnfG2omW%2FX%2B8WVrXOC7yX2IE76Nza318L40pF%2BPlGtOJUTuTOPQPly74hcqvYQuZL6M1aWrvbyQKJJR86TiDK2mLHLtvj1MKXau1F9jllWj%2FTmdi1hnhQQnsdJVvUZEVGUziLdDfNiHdzHHgG0tcIsLqy4kjW7CM5Ai1Sd6%2F9TjyaVMAEnzV0LeLeKR9SJqbmOc8uL6%2BkMpI&X-Amz-Signature=0f936b8fcd760d8830edefbfeabadd093e758ae95a84c6f102f6e39409cd2866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GFRRX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiFU6cxBi3PYmdlKbd9YR5JAc1gN9IQeB8bptdviHoegIgApx0efFCykGKL7JenHXXuVuOOGMer3oGCME2UtR%2Br%2FEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFKOgoye05Y4PBeZCrcA8d6zOT21heXMunkNt3noM434Krq6pcSmud4fzHIdAcDGhLn%2BWHdBXAN3lzs7y0kh6xwmPIkZyuMir0pVnbx3J0AbbCvhuHY7Dyc7hhjkmXwHWhOOB%2BTaWVm07h8MxEBrP0Lnx%2F3TbJwxdqaPBx3QXXvnLejhLM7tw9NpPLczKymBnEnrvQeNcGk4U57wqQmssBh8deK7rgh1oFgtjRSGydjAKyeht2q7Cy5kjt%2FGQh5SEaC7lRrwCMT%2FYOcgJEB9n3kr%2B4fFXBrp0X762s6DJTXt76osj6qTObjC7zsyV6SL5qJVyruEMBzuJ2EN5Q3fTdFNvcwHv%2F4IkN0RAu7aUGgFn3XB64Z0F%2Bu85PPJKg%2FR7tyzEJfogdSVUjFTZpnq4OboS8HpBlk4zBXx5D0YulyIdhm7brEYgHizcRqDImSMxJtj0SdvqrW02wNwy9ZI2tXxQljed9MfzauA5zaeiShWMutQ4Cf5Hn2mLIgV5dRPm1P7ryRpJhh02b7HI5NcmrYNVbrMH4sCS7hyOTbhN%2B01J%2FKTa5r%2BFX9gyhPs6WCC8j3ae0Xc6hUZHyblpDr8EOyO1POn0Fw5NwJTHGwwvfMnupItDWK85rymsfFghcnZz7wbBs7KM39qBX5MKbmpcIGOqUBOmZNUpO6X3G4mgGYVnfG2omW%2FX%2B8WVrXOC7yX2IE76Nza318L40pF%2BPlGtOJUTuTOPQPly74hcqvYQuZL6M1aWrvbyQKJJR86TiDK2mLHLtvj1MKXau1F9jllWj%2FTmdi1hnhQQnsdJVvUZEVGUziLdDfNiHdzHHgG0tcIsLqy4kjW7CM5Ai1Sd6%2F9TjyaVMAEnzV0LeLeKR9SJqbmOc8uL6%2BkMpI&X-Amz-Signature=5eef07a8408b8e7b2ce4829a3c6df021fb0962571288f344b219258b35d5032e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GFRRX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiFU6cxBi3PYmdlKbd9YR5JAc1gN9IQeB8bptdviHoegIgApx0efFCykGKL7JenHXXuVuOOGMer3oGCME2UtR%2Br%2FEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFKOgoye05Y4PBeZCrcA8d6zOT21heXMunkNt3noM434Krq6pcSmud4fzHIdAcDGhLn%2BWHdBXAN3lzs7y0kh6xwmPIkZyuMir0pVnbx3J0AbbCvhuHY7Dyc7hhjkmXwHWhOOB%2BTaWVm07h8MxEBrP0Lnx%2F3TbJwxdqaPBx3QXXvnLejhLM7tw9NpPLczKymBnEnrvQeNcGk4U57wqQmssBh8deK7rgh1oFgtjRSGydjAKyeht2q7Cy5kjt%2FGQh5SEaC7lRrwCMT%2FYOcgJEB9n3kr%2B4fFXBrp0X762s6DJTXt76osj6qTObjC7zsyV6SL5qJVyruEMBzuJ2EN5Q3fTdFNvcwHv%2F4IkN0RAu7aUGgFn3XB64Z0F%2Bu85PPJKg%2FR7tyzEJfogdSVUjFTZpnq4OboS8HpBlk4zBXx5D0YulyIdhm7brEYgHizcRqDImSMxJtj0SdvqrW02wNwy9ZI2tXxQljed9MfzauA5zaeiShWMutQ4Cf5Hn2mLIgV5dRPm1P7ryRpJhh02b7HI5NcmrYNVbrMH4sCS7hyOTbhN%2B01J%2FKTa5r%2BFX9gyhPs6WCC8j3ae0Xc6hUZHyblpDr8EOyO1POn0Fw5NwJTHGwwvfMnupItDWK85rymsfFghcnZz7wbBs7KM39qBX5MKbmpcIGOqUBOmZNUpO6X3G4mgGYVnfG2omW%2FX%2B8WVrXOC7yX2IE76Nza318L40pF%2BPlGtOJUTuTOPQPly74hcqvYQuZL6M1aWrvbyQKJJR86TiDK2mLHLtvj1MKXau1F9jllWj%2FTmdi1hnhQQnsdJVvUZEVGUziLdDfNiHdzHHgG0tcIsLqy4kjW7CM5Ai1Sd6%2F9TjyaVMAEnzV0LeLeKR9SJqbmOc8uL6%2BkMpI&X-Amz-Signature=46fb1d31dd2f04c589ad3c0e267dd858453e652684aeb357fcf6deaa935ced95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GFRRX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiFU6cxBi3PYmdlKbd9YR5JAc1gN9IQeB8bptdviHoegIgApx0efFCykGKL7JenHXXuVuOOGMer3oGCME2UtR%2Br%2FEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFKOgoye05Y4PBeZCrcA8d6zOT21heXMunkNt3noM434Krq6pcSmud4fzHIdAcDGhLn%2BWHdBXAN3lzs7y0kh6xwmPIkZyuMir0pVnbx3J0AbbCvhuHY7Dyc7hhjkmXwHWhOOB%2BTaWVm07h8MxEBrP0Lnx%2F3TbJwxdqaPBx3QXXvnLejhLM7tw9NpPLczKymBnEnrvQeNcGk4U57wqQmssBh8deK7rgh1oFgtjRSGydjAKyeht2q7Cy5kjt%2FGQh5SEaC7lRrwCMT%2FYOcgJEB9n3kr%2B4fFXBrp0X762s6DJTXt76osj6qTObjC7zsyV6SL5qJVyruEMBzuJ2EN5Q3fTdFNvcwHv%2F4IkN0RAu7aUGgFn3XB64Z0F%2Bu85PPJKg%2FR7tyzEJfogdSVUjFTZpnq4OboS8HpBlk4zBXx5D0YulyIdhm7brEYgHizcRqDImSMxJtj0SdvqrW02wNwy9ZI2tXxQljed9MfzauA5zaeiShWMutQ4Cf5Hn2mLIgV5dRPm1P7ryRpJhh02b7HI5NcmrYNVbrMH4sCS7hyOTbhN%2B01J%2FKTa5r%2BFX9gyhPs6WCC8j3ae0Xc6hUZHyblpDr8EOyO1POn0Fw5NwJTHGwwvfMnupItDWK85rymsfFghcnZz7wbBs7KM39qBX5MKbmpcIGOqUBOmZNUpO6X3G4mgGYVnfG2omW%2FX%2B8WVrXOC7yX2IE76Nza318L40pF%2BPlGtOJUTuTOPQPly74hcqvYQuZL6M1aWrvbyQKJJR86TiDK2mLHLtvj1MKXau1F9jllWj%2FTmdi1hnhQQnsdJVvUZEVGUziLdDfNiHdzHHgG0tcIsLqy4kjW7CM5Ai1Sd6%2F9TjyaVMAEnzV0LeLeKR9SJqbmOc8uL6%2BkMpI&X-Amz-Signature=4f3fedad29505b256130f710b37e77270bdd8e563d0f18988075808c01405739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

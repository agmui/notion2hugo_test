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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIBZEAP%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDvVwT4vPjPIhYl1DLUvTEAMmZaUdTzSldaWhvgL55ongIgJavM26e6zr2KClrPvDQZQy1BrJ2M%2BxixG26KULZwhYIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGARUszncZz4xX3O0yrcAx8SmOUTTZGLoZqpd76wfr9GVlFAlNoxzXohUa7usv%2FBKRLwGIbv7vFdl7Xn3jWv4DfCnk8HUDXcFVkWoYjDqw4lqdLWWcYuxG6kLsm3YDqZEzYN1V0ebt9v5Vpv%2BoAv3m25DE6buqFZWENI1vmAmoRylO4li1cg%2FpnCthHPFtfCGxnPNkVYB6wb0LGcRQjCCSmOhjo6Mc2x1ISvh3EXIYALjsv6zGGsyuOyX5wIMm0N%2BgstzVW%2BtzeOPdPi3w2sY5J%2FAjIAnseW9irFTz7MiOZJvOUCRUDwG9p090wlPsIbaONSfzx7oKRejT6WBQ1bc9Hxr0rJW8GAM4iBqQ9MbkDs86f33dyftCrLMt%2BBylr7U6Xbo8rE8VgFHulcgqy63zIozPy2%2BKc3iEp5lT303xNQbNTnN90gVZEGLdeOBgs4dr6XwfFU7x0etDNgDzowSyUeRCRqoUbxFtLIs4yv3aHYzBiWLhAjFDEu50v8r1BMPz1448Ff0zn2kXGGAXg4OuNnXMlKRO7IzW6UR6YuZ7NuICx5prtiDuhijRvRsH1aT3T%2FArc49nFR%2FIn%2FBvwqwqpu8EZi4uHb5kLmRtIJpCS1uiph5pdspwLAJR4Yhrm9nAGLAZSluRwCipvnMM6M8cIGOqUB8g3kiFbdEH%2FjP89U0y5MruLI8pATwGqSqZLan3TpSaBUolfjQNwbsgFxs7M8u3SzG7w0bH%2BS4wCS7sy74QlnLvOXlj0fWS3w6OwNSKvr5oD2QbloRGhNfbmLMRbZpDE1O4Fw5kzjAiTCySY9mtsLRpXsxdGjXloumaYR9J3xCqvvSmoD8glUtEDV0zH%2BCBarNLg3NNqq1TW8k8CjuC%2BaPNrmhjmA&X-Amz-Signature=0fd50ba2f69cf59693d6d9b00fbd5ad2d58de9a93d95fe7b7007f8287878e749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIBZEAP%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDvVwT4vPjPIhYl1DLUvTEAMmZaUdTzSldaWhvgL55ongIgJavM26e6zr2KClrPvDQZQy1BrJ2M%2BxixG26KULZwhYIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGARUszncZz4xX3O0yrcAx8SmOUTTZGLoZqpd76wfr9GVlFAlNoxzXohUa7usv%2FBKRLwGIbv7vFdl7Xn3jWv4DfCnk8HUDXcFVkWoYjDqw4lqdLWWcYuxG6kLsm3YDqZEzYN1V0ebt9v5Vpv%2BoAv3m25DE6buqFZWENI1vmAmoRylO4li1cg%2FpnCthHPFtfCGxnPNkVYB6wb0LGcRQjCCSmOhjo6Mc2x1ISvh3EXIYALjsv6zGGsyuOyX5wIMm0N%2BgstzVW%2BtzeOPdPi3w2sY5J%2FAjIAnseW9irFTz7MiOZJvOUCRUDwG9p090wlPsIbaONSfzx7oKRejT6WBQ1bc9Hxr0rJW8GAM4iBqQ9MbkDs86f33dyftCrLMt%2BBylr7U6Xbo8rE8VgFHulcgqy63zIozPy2%2BKc3iEp5lT303xNQbNTnN90gVZEGLdeOBgs4dr6XwfFU7x0etDNgDzowSyUeRCRqoUbxFtLIs4yv3aHYzBiWLhAjFDEu50v8r1BMPz1448Ff0zn2kXGGAXg4OuNnXMlKRO7IzW6UR6YuZ7NuICx5prtiDuhijRvRsH1aT3T%2FArc49nFR%2FIn%2FBvwqwqpu8EZi4uHb5kLmRtIJpCS1uiph5pdspwLAJR4Yhrm9nAGLAZSluRwCipvnMM6M8cIGOqUB8g3kiFbdEH%2FjP89U0y5MruLI8pATwGqSqZLan3TpSaBUolfjQNwbsgFxs7M8u3SzG7w0bH%2BS4wCS7sy74QlnLvOXlj0fWS3w6OwNSKvr5oD2QbloRGhNfbmLMRbZpDE1O4Fw5kzjAiTCySY9mtsLRpXsxdGjXloumaYR9J3xCqvvSmoD8glUtEDV0zH%2BCBarNLg3NNqq1TW8k8CjuC%2BaPNrmhjmA&X-Amz-Signature=0c0d59a963e9fd09039719ced6b90826f83a14844594ba0579ed5b89e4c64066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIBZEAP%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDvVwT4vPjPIhYl1DLUvTEAMmZaUdTzSldaWhvgL55ongIgJavM26e6zr2KClrPvDQZQy1BrJ2M%2BxixG26KULZwhYIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGARUszncZz4xX3O0yrcAx8SmOUTTZGLoZqpd76wfr9GVlFAlNoxzXohUa7usv%2FBKRLwGIbv7vFdl7Xn3jWv4DfCnk8HUDXcFVkWoYjDqw4lqdLWWcYuxG6kLsm3YDqZEzYN1V0ebt9v5Vpv%2BoAv3m25DE6buqFZWENI1vmAmoRylO4li1cg%2FpnCthHPFtfCGxnPNkVYB6wb0LGcRQjCCSmOhjo6Mc2x1ISvh3EXIYALjsv6zGGsyuOyX5wIMm0N%2BgstzVW%2BtzeOPdPi3w2sY5J%2FAjIAnseW9irFTz7MiOZJvOUCRUDwG9p090wlPsIbaONSfzx7oKRejT6WBQ1bc9Hxr0rJW8GAM4iBqQ9MbkDs86f33dyftCrLMt%2BBylr7U6Xbo8rE8VgFHulcgqy63zIozPy2%2BKc3iEp5lT303xNQbNTnN90gVZEGLdeOBgs4dr6XwfFU7x0etDNgDzowSyUeRCRqoUbxFtLIs4yv3aHYzBiWLhAjFDEu50v8r1BMPz1448Ff0zn2kXGGAXg4OuNnXMlKRO7IzW6UR6YuZ7NuICx5prtiDuhijRvRsH1aT3T%2FArc49nFR%2FIn%2FBvwqwqpu8EZi4uHb5kLmRtIJpCS1uiph5pdspwLAJR4Yhrm9nAGLAZSluRwCipvnMM6M8cIGOqUB8g3kiFbdEH%2FjP89U0y5MruLI8pATwGqSqZLan3TpSaBUolfjQNwbsgFxs7M8u3SzG7w0bH%2BS4wCS7sy74QlnLvOXlj0fWS3w6OwNSKvr5oD2QbloRGhNfbmLMRbZpDE1O4Fw5kzjAiTCySY9mtsLRpXsxdGjXloumaYR9J3xCqvvSmoD8glUtEDV0zH%2BCBarNLg3NNqq1TW8k8CjuC%2BaPNrmhjmA&X-Amz-Signature=ec7856ad6badd12f5cfd0b3b305f9561b3e3edc12cd1ad78831fa5ee6454c075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIBZEAP%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDvVwT4vPjPIhYl1DLUvTEAMmZaUdTzSldaWhvgL55ongIgJavM26e6zr2KClrPvDQZQy1BrJ2M%2BxixG26KULZwhYIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGARUszncZz4xX3O0yrcAx8SmOUTTZGLoZqpd76wfr9GVlFAlNoxzXohUa7usv%2FBKRLwGIbv7vFdl7Xn3jWv4DfCnk8HUDXcFVkWoYjDqw4lqdLWWcYuxG6kLsm3YDqZEzYN1V0ebt9v5Vpv%2BoAv3m25DE6buqFZWENI1vmAmoRylO4li1cg%2FpnCthHPFtfCGxnPNkVYB6wb0LGcRQjCCSmOhjo6Mc2x1ISvh3EXIYALjsv6zGGsyuOyX5wIMm0N%2BgstzVW%2BtzeOPdPi3w2sY5J%2FAjIAnseW9irFTz7MiOZJvOUCRUDwG9p090wlPsIbaONSfzx7oKRejT6WBQ1bc9Hxr0rJW8GAM4iBqQ9MbkDs86f33dyftCrLMt%2BBylr7U6Xbo8rE8VgFHulcgqy63zIozPy2%2BKc3iEp5lT303xNQbNTnN90gVZEGLdeOBgs4dr6XwfFU7x0etDNgDzowSyUeRCRqoUbxFtLIs4yv3aHYzBiWLhAjFDEu50v8r1BMPz1448Ff0zn2kXGGAXg4OuNnXMlKRO7IzW6UR6YuZ7NuICx5prtiDuhijRvRsH1aT3T%2FArc49nFR%2FIn%2FBvwqwqpu8EZi4uHb5kLmRtIJpCS1uiph5pdspwLAJR4Yhrm9nAGLAZSluRwCipvnMM6M8cIGOqUB8g3kiFbdEH%2FjP89U0y5MruLI8pATwGqSqZLan3TpSaBUolfjQNwbsgFxs7M8u3SzG7w0bH%2BS4wCS7sy74QlnLvOXlj0fWS3w6OwNSKvr5oD2QbloRGhNfbmLMRbZpDE1O4Fw5kzjAiTCySY9mtsLRpXsxdGjXloumaYR9J3xCqvvSmoD8glUtEDV0zH%2BCBarNLg3NNqq1TW8k8CjuC%2BaPNrmhjmA&X-Amz-Signature=ce6bce7161a0c0f0fdfc44876ccc12413960fc8b8e4476f29ab1ab32a2b8b70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIBZEAP%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDvVwT4vPjPIhYl1DLUvTEAMmZaUdTzSldaWhvgL55ongIgJavM26e6zr2KClrPvDQZQy1BrJ2M%2BxixG26KULZwhYIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGARUszncZz4xX3O0yrcAx8SmOUTTZGLoZqpd76wfr9GVlFAlNoxzXohUa7usv%2FBKRLwGIbv7vFdl7Xn3jWv4DfCnk8HUDXcFVkWoYjDqw4lqdLWWcYuxG6kLsm3YDqZEzYN1V0ebt9v5Vpv%2BoAv3m25DE6buqFZWENI1vmAmoRylO4li1cg%2FpnCthHPFtfCGxnPNkVYB6wb0LGcRQjCCSmOhjo6Mc2x1ISvh3EXIYALjsv6zGGsyuOyX5wIMm0N%2BgstzVW%2BtzeOPdPi3w2sY5J%2FAjIAnseW9irFTz7MiOZJvOUCRUDwG9p090wlPsIbaONSfzx7oKRejT6WBQ1bc9Hxr0rJW8GAM4iBqQ9MbkDs86f33dyftCrLMt%2BBylr7U6Xbo8rE8VgFHulcgqy63zIozPy2%2BKc3iEp5lT303xNQbNTnN90gVZEGLdeOBgs4dr6XwfFU7x0etDNgDzowSyUeRCRqoUbxFtLIs4yv3aHYzBiWLhAjFDEu50v8r1BMPz1448Ff0zn2kXGGAXg4OuNnXMlKRO7IzW6UR6YuZ7NuICx5prtiDuhijRvRsH1aT3T%2FArc49nFR%2FIn%2FBvwqwqpu8EZi4uHb5kLmRtIJpCS1uiph5pdspwLAJR4Yhrm9nAGLAZSluRwCipvnMM6M8cIGOqUB8g3kiFbdEH%2FjP89U0y5MruLI8pATwGqSqZLan3TpSaBUolfjQNwbsgFxs7M8u3SzG7w0bH%2BS4wCS7sy74QlnLvOXlj0fWS3w6OwNSKvr5oD2QbloRGhNfbmLMRbZpDE1O4Fw5kzjAiTCySY9mtsLRpXsxdGjXloumaYR9J3xCqvvSmoD8glUtEDV0zH%2BCBarNLg3NNqq1TW8k8CjuC%2BaPNrmhjmA&X-Amz-Signature=2af5409e05a46d3764f55080964b5d84e3b7fb5a8377b0607aad65cc3f72b19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIBZEAP%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDvVwT4vPjPIhYl1DLUvTEAMmZaUdTzSldaWhvgL55ongIgJavM26e6zr2KClrPvDQZQy1BrJ2M%2BxixG26KULZwhYIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGARUszncZz4xX3O0yrcAx8SmOUTTZGLoZqpd76wfr9GVlFAlNoxzXohUa7usv%2FBKRLwGIbv7vFdl7Xn3jWv4DfCnk8HUDXcFVkWoYjDqw4lqdLWWcYuxG6kLsm3YDqZEzYN1V0ebt9v5Vpv%2BoAv3m25DE6buqFZWENI1vmAmoRylO4li1cg%2FpnCthHPFtfCGxnPNkVYB6wb0LGcRQjCCSmOhjo6Mc2x1ISvh3EXIYALjsv6zGGsyuOyX5wIMm0N%2BgstzVW%2BtzeOPdPi3w2sY5J%2FAjIAnseW9irFTz7MiOZJvOUCRUDwG9p090wlPsIbaONSfzx7oKRejT6WBQ1bc9Hxr0rJW8GAM4iBqQ9MbkDs86f33dyftCrLMt%2BBylr7U6Xbo8rE8VgFHulcgqy63zIozPy2%2BKc3iEp5lT303xNQbNTnN90gVZEGLdeOBgs4dr6XwfFU7x0etDNgDzowSyUeRCRqoUbxFtLIs4yv3aHYzBiWLhAjFDEu50v8r1BMPz1448Ff0zn2kXGGAXg4OuNnXMlKRO7IzW6UR6YuZ7NuICx5prtiDuhijRvRsH1aT3T%2FArc49nFR%2FIn%2FBvwqwqpu8EZi4uHb5kLmRtIJpCS1uiph5pdspwLAJR4Yhrm9nAGLAZSluRwCipvnMM6M8cIGOqUB8g3kiFbdEH%2FjP89U0y5MruLI8pATwGqSqZLan3TpSaBUolfjQNwbsgFxs7M8u3SzG7w0bH%2BS4wCS7sy74QlnLvOXlj0fWS3w6OwNSKvr5oD2QbloRGhNfbmLMRbZpDE1O4Fw5kzjAiTCySY9mtsLRpXsxdGjXloumaYR9J3xCqvvSmoD8glUtEDV0zH%2BCBarNLg3NNqq1TW8k8CjuC%2BaPNrmhjmA&X-Amz-Signature=cbd7f6ac9179c2c494c93f8748cf9a909a876cbe7c88afc8097db60cb1b7c921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIBZEAP%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDvVwT4vPjPIhYl1DLUvTEAMmZaUdTzSldaWhvgL55ongIgJavM26e6zr2KClrPvDQZQy1BrJ2M%2BxixG26KULZwhYIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGARUszncZz4xX3O0yrcAx8SmOUTTZGLoZqpd76wfr9GVlFAlNoxzXohUa7usv%2FBKRLwGIbv7vFdl7Xn3jWv4DfCnk8HUDXcFVkWoYjDqw4lqdLWWcYuxG6kLsm3YDqZEzYN1V0ebt9v5Vpv%2BoAv3m25DE6buqFZWENI1vmAmoRylO4li1cg%2FpnCthHPFtfCGxnPNkVYB6wb0LGcRQjCCSmOhjo6Mc2x1ISvh3EXIYALjsv6zGGsyuOyX5wIMm0N%2BgstzVW%2BtzeOPdPi3w2sY5J%2FAjIAnseW9irFTz7MiOZJvOUCRUDwG9p090wlPsIbaONSfzx7oKRejT6WBQ1bc9Hxr0rJW8GAM4iBqQ9MbkDs86f33dyftCrLMt%2BBylr7U6Xbo8rE8VgFHulcgqy63zIozPy2%2BKc3iEp5lT303xNQbNTnN90gVZEGLdeOBgs4dr6XwfFU7x0etDNgDzowSyUeRCRqoUbxFtLIs4yv3aHYzBiWLhAjFDEu50v8r1BMPz1448Ff0zn2kXGGAXg4OuNnXMlKRO7IzW6UR6YuZ7NuICx5prtiDuhijRvRsH1aT3T%2FArc49nFR%2FIn%2FBvwqwqpu8EZi4uHb5kLmRtIJpCS1uiph5pdspwLAJR4Yhrm9nAGLAZSluRwCipvnMM6M8cIGOqUB8g3kiFbdEH%2FjP89U0y5MruLI8pATwGqSqZLan3TpSaBUolfjQNwbsgFxs7M8u3SzG7w0bH%2BS4wCS7sy74QlnLvOXlj0fWS3w6OwNSKvr5oD2QbloRGhNfbmLMRbZpDE1O4Fw5kzjAiTCySY9mtsLRpXsxdGjXloumaYR9J3xCqvvSmoD8glUtEDV0zH%2BCBarNLg3NNqq1TW8k8CjuC%2BaPNrmhjmA&X-Amz-Signature=7eb56cde1206594b2166e59dffe2856d8d18bff17596e421ab1bd08bcefaf5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

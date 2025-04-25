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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YCSGRS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJemxia6AypfaPlFCz7vVUfu6MulBH%2FsV9SYB%2F0fythwIhAPFpGpCLO4r1IyD48uNqVdMfAt84vXmjq9qSFfI6eqDRKv8DCCgQABoMNjM3NDIzMTgzODA1IgwAnQMq9Em8%2B5USWnsq3AMIsgG1HM0Oo8qbpkT4pDRpMBl69Tqij6ZxLhdEnEZJo4X0IcFdMH8Z5dPIYP1G4D8MS0MAEp9DldImBzHbQchIQR%2B0dqW%2Bh%2FX%2BM7QTFUkLptnnU%2BwSgXy7O91kanrZUXZEpR0VR%2FKGNvssbQ2KSsOYA34E3WdPLwj7S8PYrlR7LgA3qVR3b55CTS8n%2Fl5z3IKJUo3vbPl%2B1r%2Fsp4kXmgmAZETdGajCSG4idGpyl5Tn6ZPUmuNfmFFdhQXYQPwcUv9iy%2BrhEtT5QnBy26W4tdBzTTFWmQHZDxfhScRMZe8D3LZ4Fm34AzkFhyZ3iZAiTTMsWiPeeXwFb%2B205UQUuk%2Bk6dWnoqxuJAzMOeXIGLnFx%2F7ha6JxCgYoLkZ0tbbg7wDpYFtF1vhp5NwAH1rr24o4rW93hzWoWDhSxgOcuAi4qRq1z0NIZSU2OCBgyCTZie%2Fpaxw9YYBVsLr6tAjG6ceKE5ncfio%2FZLuzS00DWas3MDdZdqyEXfUkiDla0DztnBehuJHDEeGfJKJjic9XsRI1A7bdHOzPdBg0Id35TUJWZFszHDxMwUzk6krgLfyb%2Biu0zqaxz94nzyWdqldaBeg3wMWOQqXwcxNMFoTYIMgTninOAklgfkKUCetotjCz5qzABjqkAQ7SuhxVekzXqfxE4Jdj5L0Z4Iqq9WArseH4ouio1ERHFl%2FWkOinsJaNZNQbeHB7gULkjjgdDsW%2BpMf7BlH6xaNJF5sTx%2FMmDSZTuVgb%2BoOiSVzOQi9BQI%2FeI5Fr7yRxQiseWyneSSmiFsqC2sc27J%2Fr820SYl9IYMhHa0RDWDXmyC8gPggqgcEI7XgZuOCsS3p39cuxG9BoMlk0JD2U%2FCBfBrgu&X-Amz-Signature=910e703a62064d765bcb63f7a2a0c12d21a537569582ad2c88faedc658f34323&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YCSGRS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJemxia6AypfaPlFCz7vVUfu6MulBH%2FsV9SYB%2F0fythwIhAPFpGpCLO4r1IyD48uNqVdMfAt84vXmjq9qSFfI6eqDRKv8DCCgQABoMNjM3NDIzMTgzODA1IgwAnQMq9Em8%2B5USWnsq3AMIsgG1HM0Oo8qbpkT4pDRpMBl69Tqij6ZxLhdEnEZJo4X0IcFdMH8Z5dPIYP1G4D8MS0MAEp9DldImBzHbQchIQR%2B0dqW%2Bh%2FX%2BM7QTFUkLptnnU%2BwSgXy7O91kanrZUXZEpR0VR%2FKGNvssbQ2KSsOYA34E3WdPLwj7S8PYrlR7LgA3qVR3b55CTS8n%2Fl5z3IKJUo3vbPl%2B1r%2Fsp4kXmgmAZETdGajCSG4idGpyl5Tn6ZPUmuNfmFFdhQXYQPwcUv9iy%2BrhEtT5QnBy26W4tdBzTTFWmQHZDxfhScRMZe8D3LZ4Fm34AzkFhyZ3iZAiTTMsWiPeeXwFb%2B205UQUuk%2Bk6dWnoqxuJAzMOeXIGLnFx%2F7ha6JxCgYoLkZ0tbbg7wDpYFtF1vhp5NwAH1rr24o4rW93hzWoWDhSxgOcuAi4qRq1z0NIZSU2OCBgyCTZie%2Fpaxw9YYBVsLr6tAjG6ceKE5ncfio%2FZLuzS00DWas3MDdZdqyEXfUkiDla0DztnBehuJHDEeGfJKJjic9XsRI1A7bdHOzPdBg0Id35TUJWZFszHDxMwUzk6krgLfyb%2Biu0zqaxz94nzyWdqldaBeg3wMWOQqXwcxNMFoTYIMgTninOAklgfkKUCetotjCz5qzABjqkAQ7SuhxVekzXqfxE4Jdj5L0Z4Iqq9WArseH4ouio1ERHFl%2FWkOinsJaNZNQbeHB7gULkjjgdDsW%2BpMf7BlH6xaNJF5sTx%2FMmDSZTuVgb%2BoOiSVzOQi9BQI%2FeI5Fr7yRxQiseWyneSSmiFsqC2sc27J%2Fr820SYl9IYMhHa0RDWDXmyC8gPggqgcEI7XgZuOCsS3p39cuxG9BoMlk0JD2U%2FCBfBrgu&X-Amz-Signature=0e71c52c25d6d2eedba39ab287601795a66a8847d663503fd8da02482f6b93af&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YCSGRS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJemxia6AypfaPlFCz7vVUfu6MulBH%2FsV9SYB%2F0fythwIhAPFpGpCLO4r1IyD48uNqVdMfAt84vXmjq9qSFfI6eqDRKv8DCCgQABoMNjM3NDIzMTgzODA1IgwAnQMq9Em8%2B5USWnsq3AMIsgG1HM0Oo8qbpkT4pDRpMBl69Tqij6ZxLhdEnEZJo4X0IcFdMH8Z5dPIYP1G4D8MS0MAEp9DldImBzHbQchIQR%2B0dqW%2Bh%2FX%2BM7QTFUkLptnnU%2BwSgXy7O91kanrZUXZEpR0VR%2FKGNvssbQ2KSsOYA34E3WdPLwj7S8PYrlR7LgA3qVR3b55CTS8n%2Fl5z3IKJUo3vbPl%2B1r%2Fsp4kXmgmAZETdGajCSG4idGpyl5Tn6ZPUmuNfmFFdhQXYQPwcUv9iy%2BrhEtT5QnBy26W4tdBzTTFWmQHZDxfhScRMZe8D3LZ4Fm34AzkFhyZ3iZAiTTMsWiPeeXwFb%2B205UQUuk%2Bk6dWnoqxuJAzMOeXIGLnFx%2F7ha6JxCgYoLkZ0tbbg7wDpYFtF1vhp5NwAH1rr24o4rW93hzWoWDhSxgOcuAi4qRq1z0NIZSU2OCBgyCTZie%2Fpaxw9YYBVsLr6tAjG6ceKE5ncfio%2FZLuzS00DWas3MDdZdqyEXfUkiDla0DztnBehuJHDEeGfJKJjic9XsRI1A7bdHOzPdBg0Id35TUJWZFszHDxMwUzk6krgLfyb%2Biu0zqaxz94nzyWdqldaBeg3wMWOQqXwcxNMFoTYIMgTninOAklgfkKUCetotjCz5qzABjqkAQ7SuhxVekzXqfxE4Jdj5L0Z4Iqq9WArseH4ouio1ERHFl%2FWkOinsJaNZNQbeHB7gULkjjgdDsW%2BpMf7BlH6xaNJF5sTx%2FMmDSZTuVgb%2BoOiSVzOQi9BQI%2FeI5Fr7yRxQiseWyneSSmiFsqC2sc27J%2Fr820SYl9IYMhHa0RDWDXmyC8gPggqgcEI7XgZuOCsS3p39cuxG9BoMlk0JD2U%2FCBfBrgu&X-Amz-Signature=a22e92d94f8178688512a293686aa362aaca858103d18ac15b079dba8ed14494&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YCSGRS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJemxia6AypfaPlFCz7vVUfu6MulBH%2FsV9SYB%2F0fythwIhAPFpGpCLO4r1IyD48uNqVdMfAt84vXmjq9qSFfI6eqDRKv8DCCgQABoMNjM3NDIzMTgzODA1IgwAnQMq9Em8%2B5USWnsq3AMIsgG1HM0Oo8qbpkT4pDRpMBl69Tqij6ZxLhdEnEZJo4X0IcFdMH8Z5dPIYP1G4D8MS0MAEp9DldImBzHbQchIQR%2B0dqW%2Bh%2FX%2BM7QTFUkLptnnU%2BwSgXy7O91kanrZUXZEpR0VR%2FKGNvssbQ2KSsOYA34E3WdPLwj7S8PYrlR7LgA3qVR3b55CTS8n%2Fl5z3IKJUo3vbPl%2B1r%2Fsp4kXmgmAZETdGajCSG4idGpyl5Tn6ZPUmuNfmFFdhQXYQPwcUv9iy%2BrhEtT5QnBy26W4tdBzTTFWmQHZDxfhScRMZe8D3LZ4Fm34AzkFhyZ3iZAiTTMsWiPeeXwFb%2B205UQUuk%2Bk6dWnoqxuJAzMOeXIGLnFx%2F7ha6JxCgYoLkZ0tbbg7wDpYFtF1vhp5NwAH1rr24o4rW93hzWoWDhSxgOcuAi4qRq1z0NIZSU2OCBgyCTZie%2Fpaxw9YYBVsLr6tAjG6ceKE5ncfio%2FZLuzS00DWas3MDdZdqyEXfUkiDla0DztnBehuJHDEeGfJKJjic9XsRI1A7bdHOzPdBg0Id35TUJWZFszHDxMwUzk6krgLfyb%2Biu0zqaxz94nzyWdqldaBeg3wMWOQqXwcxNMFoTYIMgTninOAklgfkKUCetotjCz5qzABjqkAQ7SuhxVekzXqfxE4Jdj5L0Z4Iqq9WArseH4ouio1ERHFl%2FWkOinsJaNZNQbeHB7gULkjjgdDsW%2BpMf7BlH6xaNJF5sTx%2FMmDSZTuVgb%2BoOiSVzOQi9BQI%2FeI5Fr7yRxQiseWyneSSmiFsqC2sc27J%2Fr820SYl9IYMhHa0RDWDXmyC8gPggqgcEI7XgZuOCsS3p39cuxG9BoMlk0JD2U%2FCBfBrgu&X-Amz-Signature=117a9e3026a4da483fc5791e1a5fe680c642da0e6b1eb4315cd2ed1361aabffa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YCSGRS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJemxia6AypfaPlFCz7vVUfu6MulBH%2FsV9SYB%2F0fythwIhAPFpGpCLO4r1IyD48uNqVdMfAt84vXmjq9qSFfI6eqDRKv8DCCgQABoMNjM3NDIzMTgzODA1IgwAnQMq9Em8%2B5USWnsq3AMIsgG1HM0Oo8qbpkT4pDRpMBl69Tqij6ZxLhdEnEZJo4X0IcFdMH8Z5dPIYP1G4D8MS0MAEp9DldImBzHbQchIQR%2B0dqW%2Bh%2FX%2BM7QTFUkLptnnU%2BwSgXy7O91kanrZUXZEpR0VR%2FKGNvssbQ2KSsOYA34E3WdPLwj7S8PYrlR7LgA3qVR3b55CTS8n%2Fl5z3IKJUo3vbPl%2B1r%2Fsp4kXmgmAZETdGajCSG4idGpyl5Tn6ZPUmuNfmFFdhQXYQPwcUv9iy%2BrhEtT5QnBy26W4tdBzTTFWmQHZDxfhScRMZe8D3LZ4Fm34AzkFhyZ3iZAiTTMsWiPeeXwFb%2B205UQUuk%2Bk6dWnoqxuJAzMOeXIGLnFx%2F7ha6JxCgYoLkZ0tbbg7wDpYFtF1vhp5NwAH1rr24o4rW93hzWoWDhSxgOcuAi4qRq1z0NIZSU2OCBgyCTZie%2Fpaxw9YYBVsLr6tAjG6ceKE5ncfio%2FZLuzS00DWas3MDdZdqyEXfUkiDla0DztnBehuJHDEeGfJKJjic9XsRI1A7bdHOzPdBg0Id35TUJWZFszHDxMwUzk6krgLfyb%2Biu0zqaxz94nzyWdqldaBeg3wMWOQqXwcxNMFoTYIMgTninOAklgfkKUCetotjCz5qzABjqkAQ7SuhxVekzXqfxE4Jdj5L0Z4Iqq9WArseH4ouio1ERHFl%2FWkOinsJaNZNQbeHB7gULkjjgdDsW%2BpMf7BlH6xaNJF5sTx%2FMmDSZTuVgb%2BoOiSVzOQi9BQI%2FeI5Fr7yRxQiseWyneSSmiFsqC2sc27J%2Fr820SYl9IYMhHa0RDWDXmyC8gPggqgcEI7XgZuOCsS3p39cuxG9BoMlk0JD2U%2FCBfBrgu&X-Amz-Signature=2de1405daae867307c79bb9feefba50fd3ac13b2259127323e221a40d592d977&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YCSGRS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJemxia6AypfaPlFCz7vVUfu6MulBH%2FsV9SYB%2F0fythwIhAPFpGpCLO4r1IyD48uNqVdMfAt84vXmjq9qSFfI6eqDRKv8DCCgQABoMNjM3NDIzMTgzODA1IgwAnQMq9Em8%2B5USWnsq3AMIsgG1HM0Oo8qbpkT4pDRpMBl69Tqij6ZxLhdEnEZJo4X0IcFdMH8Z5dPIYP1G4D8MS0MAEp9DldImBzHbQchIQR%2B0dqW%2Bh%2FX%2BM7QTFUkLptnnU%2BwSgXy7O91kanrZUXZEpR0VR%2FKGNvssbQ2KSsOYA34E3WdPLwj7S8PYrlR7LgA3qVR3b55CTS8n%2Fl5z3IKJUo3vbPl%2B1r%2Fsp4kXmgmAZETdGajCSG4idGpyl5Tn6ZPUmuNfmFFdhQXYQPwcUv9iy%2BrhEtT5QnBy26W4tdBzTTFWmQHZDxfhScRMZe8D3LZ4Fm34AzkFhyZ3iZAiTTMsWiPeeXwFb%2B205UQUuk%2Bk6dWnoqxuJAzMOeXIGLnFx%2F7ha6JxCgYoLkZ0tbbg7wDpYFtF1vhp5NwAH1rr24o4rW93hzWoWDhSxgOcuAi4qRq1z0NIZSU2OCBgyCTZie%2Fpaxw9YYBVsLr6tAjG6ceKE5ncfio%2FZLuzS00DWas3MDdZdqyEXfUkiDla0DztnBehuJHDEeGfJKJjic9XsRI1A7bdHOzPdBg0Id35TUJWZFszHDxMwUzk6krgLfyb%2Biu0zqaxz94nzyWdqldaBeg3wMWOQqXwcxNMFoTYIMgTninOAklgfkKUCetotjCz5qzABjqkAQ7SuhxVekzXqfxE4Jdj5L0Z4Iqq9WArseH4ouio1ERHFl%2FWkOinsJaNZNQbeHB7gULkjjgdDsW%2BpMf7BlH6xaNJF5sTx%2FMmDSZTuVgb%2BoOiSVzOQi9BQI%2FeI5Fr7yRxQiseWyneSSmiFsqC2sc27J%2Fr820SYl9IYMhHa0RDWDXmyC8gPggqgcEI7XgZuOCsS3p39cuxG9BoMlk0JD2U%2FCBfBrgu&X-Amz-Signature=d1bbbf2012ce50a341d4423222291b95f3718887c5ede300e28366fc21078104&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YCSGRS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJemxia6AypfaPlFCz7vVUfu6MulBH%2FsV9SYB%2F0fythwIhAPFpGpCLO4r1IyD48uNqVdMfAt84vXmjq9qSFfI6eqDRKv8DCCgQABoMNjM3NDIzMTgzODA1IgwAnQMq9Em8%2B5USWnsq3AMIsgG1HM0Oo8qbpkT4pDRpMBl69Tqij6ZxLhdEnEZJo4X0IcFdMH8Z5dPIYP1G4D8MS0MAEp9DldImBzHbQchIQR%2B0dqW%2Bh%2FX%2BM7QTFUkLptnnU%2BwSgXy7O91kanrZUXZEpR0VR%2FKGNvssbQ2KSsOYA34E3WdPLwj7S8PYrlR7LgA3qVR3b55CTS8n%2Fl5z3IKJUo3vbPl%2B1r%2Fsp4kXmgmAZETdGajCSG4idGpyl5Tn6ZPUmuNfmFFdhQXYQPwcUv9iy%2BrhEtT5QnBy26W4tdBzTTFWmQHZDxfhScRMZe8D3LZ4Fm34AzkFhyZ3iZAiTTMsWiPeeXwFb%2B205UQUuk%2Bk6dWnoqxuJAzMOeXIGLnFx%2F7ha6JxCgYoLkZ0tbbg7wDpYFtF1vhp5NwAH1rr24o4rW93hzWoWDhSxgOcuAi4qRq1z0NIZSU2OCBgyCTZie%2Fpaxw9YYBVsLr6tAjG6ceKE5ncfio%2FZLuzS00DWas3MDdZdqyEXfUkiDla0DztnBehuJHDEeGfJKJjic9XsRI1A7bdHOzPdBg0Id35TUJWZFszHDxMwUzk6krgLfyb%2Biu0zqaxz94nzyWdqldaBeg3wMWOQqXwcxNMFoTYIMgTninOAklgfkKUCetotjCz5qzABjqkAQ7SuhxVekzXqfxE4Jdj5L0Z4Iqq9WArseH4ouio1ERHFl%2FWkOinsJaNZNQbeHB7gULkjjgdDsW%2BpMf7BlH6xaNJF5sTx%2FMmDSZTuVgb%2BoOiSVzOQi9BQI%2FeI5Fr7yRxQiseWyneSSmiFsqC2sc27J%2Fr820SYl9IYMhHa0RDWDXmyC8gPggqgcEI7XgZuOCsS3p39cuxG9BoMlk0JD2U%2FCBfBrgu&X-Amz-Signature=33deaeb813b8a9f345810b6f6d4d93f3ef211379ca086ba889ce7ebc8bc86013&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

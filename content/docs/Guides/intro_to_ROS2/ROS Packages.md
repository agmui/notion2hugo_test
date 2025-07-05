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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXT775G4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDhPC2ExV6T1PhsViJv0gx0F9rv1L%2FHDcWoP1ceXjZHEAiEAtBfDkJ90PQco4%2BzfaWuJufMsB3w6CaQkBAB4xeUxlEcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDLr4WEa8AmCnFgy4SrcAyI1iIRDdGlt4uvP67vtL6aDQTXlfYyCJHOxIfeUuEjAY6XYJk7h55NvAYjHafi2XD%2BZxIhjz8FCzTeI%2FF0699ftEG6UCAnnXxMJAlN4ymL%2BGNf113fvSocUkmRVUtNmpZonN1YUZoe5ZDy%2BNZl%2BprEDr8js5%2FxMR5Vem9mb%2FKw1ubQlKCgT22mVHlBYnkosMIMJ8FiHRFS7QMUM5%2FTLazT3cB%2BBJ7WB932EmH3pUlr2XygV7CJt0xGjki7d9bhWZVQf0zjGsDj9b%2Bumacq9ADWgyMEOSgC9Md8o9VD5ES3HPCitAK3F6mgkIJSvjRzSCdrzH9i7Aq0uGdxVBoA7HvBJ%2Bh%2FOhZsX%2Bp%2BocFzNijrkOIJlrNPzuQtZnJ6QYy%2FMSJF1NICnhoLodK1kWm6YuJbB8gMX%2B6%2FFQZpwDup69vLkQauivWUs8EKKoKNjLZXq%2B4Hhdk4hU%2FTPXU4Z%2F4E7Dm612fpYTFdvDkJu%2BdpR0Iar%2BNJxhOyLOucQqVrbZnXEAga34tDXbAzc5RV5OHZN6rPtEYSEa%2FjQSm6QOkah4VBGpYM1EHQ%2F7VuD4VcsKc9JXAlMzGzJpmdnQnKrIvZZQ6aekxHEJXI%2FrB4x2JH5w6J0pw0l7iuczd6mUqzbMLbmpcMGOqUBu%2BhkwOxxo2P3va6bJv%2BKRBWmDbGbMoBJFgjqmFOsxoNPdiRxj7VKsD5x1DfeILtoePGA62xLFrK9EmAOC4w2XIO0%2BqLQtwLW%2F0p%2Bhml3V7sezumBJTCoYI9pszT0ForKV%2B6y2a5EGxNRl0ai%2Fa%2Ft2YTUnlAc2fZpfUaBbWxVpmEQTiQ6FF3Sncjxxccti6w6kMbHZs5e9803NfO4kfyH2bKJ5FsO&X-Amz-Signature=ee06950d1bc87fe42b916a3dac79df4f4cbc2e8a95d6c8c27f776786d29e26e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXT775G4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDhPC2ExV6T1PhsViJv0gx0F9rv1L%2FHDcWoP1ceXjZHEAiEAtBfDkJ90PQco4%2BzfaWuJufMsB3w6CaQkBAB4xeUxlEcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDLr4WEa8AmCnFgy4SrcAyI1iIRDdGlt4uvP67vtL6aDQTXlfYyCJHOxIfeUuEjAY6XYJk7h55NvAYjHafi2XD%2BZxIhjz8FCzTeI%2FF0699ftEG6UCAnnXxMJAlN4ymL%2BGNf113fvSocUkmRVUtNmpZonN1YUZoe5ZDy%2BNZl%2BprEDr8js5%2FxMR5Vem9mb%2FKw1ubQlKCgT22mVHlBYnkosMIMJ8FiHRFS7QMUM5%2FTLazT3cB%2BBJ7WB932EmH3pUlr2XygV7CJt0xGjki7d9bhWZVQf0zjGsDj9b%2Bumacq9ADWgyMEOSgC9Md8o9VD5ES3HPCitAK3F6mgkIJSvjRzSCdrzH9i7Aq0uGdxVBoA7HvBJ%2Bh%2FOhZsX%2Bp%2BocFzNijrkOIJlrNPzuQtZnJ6QYy%2FMSJF1NICnhoLodK1kWm6YuJbB8gMX%2B6%2FFQZpwDup69vLkQauivWUs8EKKoKNjLZXq%2B4Hhdk4hU%2FTPXU4Z%2F4E7Dm612fpYTFdvDkJu%2BdpR0Iar%2BNJxhOyLOucQqVrbZnXEAga34tDXbAzc5RV5OHZN6rPtEYSEa%2FjQSm6QOkah4VBGpYM1EHQ%2F7VuD4VcsKc9JXAlMzGzJpmdnQnKrIvZZQ6aekxHEJXI%2FrB4x2JH5w6J0pw0l7iuczd6mUqzbMLbmpcMGOqUBu%2BhkwOxxo2P3va6bJv%2BKRBWmDbGbMoBJFgjqmFOsxoNPdiRxj7VKsD5x1DfeILtoePGA62xLFrK9EmAOC4w2XIO0%2BqLQtwLW%2F0p%2Bhml3V7sezumBJTCoYI9pszT0ForKV%2B6y2a5EGxNRl0ai%2Fa%2Ft2YTUnlAc2fZpfUaBbWxVpmEQTiQ6FF3Sncjxxccti6w6kMbHZs5e9803NfO4kfyH2bKJ5FsO&X-Amz-Signature=13d909bac403be8d4c255b91af94406dd55f5a3cf38be09c25aeccbc7dac7d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXT775G4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDhPC2ExV6T1PhsViJv0gx0F9rv1L%2FHDcWoP1ceXjZHEAiEAtBfDkJ90PQco4%2BzfaWuJufMsB3w6CaQkBAB4xeUxlEcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDLr4WEa8AmCnFgy4SrcAyI1iIRDdGlt4uvP67vtL6aDQTXlfYyCJHOxIfeUuEjAY6XYJk7h55NvAYjHafi2XD%2BZxIhjz8FCzTeI%2FF0699ftEG6UCAnnXxMJAlN4ymL%2BGNf113fvSocUkmRVUtNmpZonN1YUZoe5ZDy%2BNZl%2BprEDr8js5%2FxMR5Vem9mb%2FKw1ubQlKCgT22mVHlBYnkosMIMJ8FiHRFS7QMUM5%2FTLazT3cB%2BBJ7WB932EmH3pUlr2XygV7CJt0xGjki7d9bhWZVQf0zjGsDj9b%2Bumacq9ADWgyMEOSgC9Md8o9VD5ES3HPCitAK3F6mgkIJSvjRzSCdrzH9i7Aq0uGdxVBoA7HvBJ%2Bh%2FOhZsX%2Bp%2BocFzNijrkOIJlrNPzuQtZnJ6QYy%2FMSJF1NICnhoLodK1kWm6YuJbB8gMX%2B6%2FFQZpwDup69vLkQauivWUs8EKKoKNjLZXq%2B4Hhdk4hU%2FTPXU4Z%2F4E7Dm612fpYTFdvDkJu%2BdpR0Iar%2BNJxhOyLOucQqVrbZnXEAga34tDXbAzc5RV5OHZN6rPtEYSEa%2FjQSm6QOkah4VBGpYM1EHQ%2F7VuD4VcsKc9JXAlMzGzJpmdnQnKrIvZZQ6aekxHEJXI%2FrB4x2JH5w6J0pw0l7iuczd6mUqzbMLbmpcMGOqUBu%2BhkwOxxo2P3va6bJv%2BKRBWmDbGbMoBJFgjqmFOsxoNPdiRxj7VKsD5x1DfeILtoePGA62xLFrK9EmAOC4w2XIO0%2BqLQtwLW%2F0p%2Bhml3V7sezumBJTCoYI9pszT0ForKV%2B6y2a5EGxNRl0ai%2Fa%2Ft2YTUnlAc2fZpfUaBbWxVpmEQTiQ6FF3Sncjxxccti6w6kMbHZs5e9803NfO4kfyH2bKJ5FsO&X-Amz-Signature=cdc7c04e28d5bc1c496117ce11db73bb30aac6d1e2ea71d15be1e374cdc89970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXT775G4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDhPC2ExV6T1PhsViJv0gx0F9rv1L%2FHDcWoP1ceXjZHEAiEAtBfDkJ90PQco4%2BzfaWuJufMsB3w6CaQkBAB4xeUxlEcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDLr4WEa8AmCnFgy4SrcAyI1iIRDdGlt4uvP67vtL6aDQTXlfYyCJHOxIfeUuEjAY6XYJk7h55NvAYjHafi2XD%2BZxIhjz8FCzTeI%2FF0699ftEG6UCAnnXxMJAlN4ymL%2BGNf113fvSocUkmRVUtNmpZonN1YUZoe5ZDy%2BNZl%2BprEDr8js5%2FxMR5Vem9mb%2FKw1ubQlKCgT22mVHlBYnkosMIMJ8FiHRFS7QMUM5%2FTLazT3cB%2BBJ7WB932EmH3pUlr2XygV7CJt0xGjki7d9bhWZVQf0zjGsDj9b%2Bumacq9ADWgyMEOSgC9Md8o9VD5ES3HPCitAK3F6mgkIJSvjRzSCdrzH9i7Aq0uGdxVBoA7HvBJ%2Bh%2FOhZsX%2Bp%2BocFzNijrkOIJlrNPzuQtZnJ6QYy%2FMSJF1NICnhoLodK1kWm6YuJbB8gMX%2B6%2FFQZpwDup69vLkQauivWUs8EKKoKNjLZXq%2B4Hhdk4hU%2FTPXU4Z%2F4E7Dm612fpYTFdvDkJu%2BdpR0Iar%2BNJxhOyLOucQqVrbZnXEAga34tDXbAzc5RV5OHZN6rPtEYSEa%2FjQSm6QOkah4VBGpYM1EHQ%2F7VuD4VcsKc9JXAlMzGzJpmdnQnKrIvZZQ6aekxHEJXI%2FrB4x2JH5w6J0pw0l7iuczd6mUqzbMLbmpcMGOqUBu%2BhkwOxxo2P3va6bJv%2BKRBWmDbGbMoBJFgjqmFOsxoNPdiRxj7VKsD5x1DfeILtoePGA62xLFrK9EmAOC4w2XIO0%2BqLQtwLW%2F0p%2Bhml3V7sezumBJTCoYI9pszT0ForKV%2B6y2a5EGxNRl0ai%2Fa%2Ft2YTUnlAc2fZpfUaBbWxVpmEQTiQ6FF3Sncjxxccti6w6kMbHZs5e9803NfO4kfyH2bKJ5FsO&X-Amz-Signature=3c5182f1a95a214b411e1b9895edba0c26139dc01e935905d96239bd4128c28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXT775G4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDhPC2ExV6T1PhsViJv0gx0F9rv1L%2FHDcWoP1ceXjZHEAiEAtBfDkJ90PQco4%2BzfaWuJufMsB3w6CaQkBAB4xeUxlEcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDLr4WEa8AmCnFgy4SrcAyI1iIRDdGlt4uvP67vtL6aDQTXlfYyCJHOxIfeUuEjAY6XYJk7h55NvAYjHafi2XD%2BZxIhjz8FCzTeI%2FF0699ftEG6UCAnnXxMJAlN4ymL%2BGNf113fvSocUkmRVUtNmpZonN1YUZoe5ZDy%2BNZl%2BprEDr8js5%2FxMR5Vem9mb%2FKw1ubQlKCgT22mVHlBYnkosMIMJ8FiHRFS7QMUM5%2FTLazT3cB%2BBJ7WB932EmH3pUlr2XygV7CJt0xGjki7d9bhWZVQf0zjGsDj9b%2Bumacq9ADWgyMEOSgC9Md8o9VD5ES3HPCitAK3F6mgkIJSvjRzSCdrzH9i7Aq0uGdxVBoA7HvBJ%2Bh%2FOhZsX%2Bp%2BocFzNijrkOIJlrNPzuQtZnJ6QYy%2FMSJF1NICnhoLodK1kWm6YuJbB8gMX%2B6%2FFQZpwDup69vLkQauivWUs8EKKoKNjLZXq%2B4Hhdk4hU%2FTPXU4Z%2F4E7Dm612fpYTFdvDkJu%2BdpR0Iar%2BNJxhOyLOucQqVrbZnXEAga34tDXbAzc5RV5OHZN6rPtEYSEa%2FjQSm6QOkah4VBGpYM1EHQ%2F7VuD4VcsKc9JXAlMzGzJpmdnQnKrIvZZQ6aekxHEJXI%2FrB4x2JH5w6J0pw0l7iuczd6mUqzbMLbmpcMGOqUBu%2BhkwOxxo2P3va6bJv%2BKRBWmDbGbMoBJFgjqmFOsxoNPdiRxj7VKsD5x1DfeILtoePGA62xLFrK9EmAOC4w2XIO0%2BqLQtwLW%2F0p%2Bhml3V7sezumBJTCoYI9pszT0ForKV%2B6y2a5EGxNRl0ai%2Fa%2Ft2YTUnlAc2fZpfUaBbWxVpmEQTiQ6FF3Sncjxxccti6w6kMbHZs5e9803NfO4kfyH2bKJ5FsO&X-Amz-Signature=e2e3f8fb3d1ab13a41feecf7d2bd404f8a6860385827179224e1d18e4d0e4357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXT775G4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDhPC2ExV6T1PhsViJv0gx0F9rv1L%2FHDcWoP1ceXjZHEAiEAtBfDkJ90PQco4%2BzfaWuJufMsB3w6CaQkBAB4xeUxlEcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDLr4WEa8AmCnFgy4SrcAyI1iIRDdGlt4uvP67vtL6aDQTXlfYyCJHOxIfeUuEjAY6XYJk7h55NvAYjHafi2XD%2BZxIhjz8FCzTeI%2FF0699ftEG6UCAnnXxMJAlN4ymL%2BGNf113fvSocUkmRVUtNmpZonN1YUZoe5ZDy%2BNZl%2BprEDr8js5%2FxMR5Vem9mb%2FKw1ubQlKCgT22mVHlBYnkosMIMJ8FiHRFS7QMUM5%2FTLazT3cB%2BBJ7WB932EmH3pUlr2XygV7CJt0xGjki7d9bhWZVQf0zjGsDj9b%2Bumacq9ADWgyMEOSgC9Md8o9VD5ES3HPCitAK3F6mgkIJSvjRzSCdrzH9i7Aq0uGdxVBoA7HvBJ%2Bh%2FOhZsX%2Bp%2BocFzNijrkOIJlrNPzuQtZnJ6QYy%2FMSJF1NICnhoLodK1kWm6YuJbB8gMX%2B6%2FFQZpwDup69vLkQauivWUs8EKKoKNjLZXq%2B4Hhdk4hU%2FTPXU4Z%2F4E7Dm612fpYTFdvDkJu%2BdpR0Iar%2BNJxhOyLOucQqVrbZnXEAga34tDXbAzc5RV5OHZN6rPtEYSEa%2FjQSm6QOkah4VBGpYM1EHQ%2F7VuD4VcsKc9JXAlMzGzJpmdnQnKrIvZZQ6aekxHEJXI%2FrB4x2JH5w6J0pw0l7iuczd6mUqzbMLbmpcMGOqUBu%2BhkwOxxo2P3va6bJv%2BKRBWmDbGbMoBJFgjqmFOsxoNPdiRxj7VKsD5x1DfeILtoePGA62xLFrK9EmAOC4w2XIO0%2BqLQtwLW%2F0p%2Bhml3V7sezumBJTCoYI9pszT0ForKV%2B6y2a5EGxNRl0ai%2Fa%2Ft2YTUnlAc2fZpfUaBbWxVpmEQTiQ6FF3Sncjxxccti6w6kMbHZs5e9803NfO4kfyH2bKJ5FsO&X-Amz-Signature=e559aeb57acc695d33956b6465049eef80de898775f01dfdd70354983ac8343d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXT775G4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDhPC2ExV6T1PhsViJv0gx0F9rv1L%2FHDcWoP1ceXjZHEAiEAtBfDkJ90PQco4%2BzfaWuJufMsB3w6CaQkBAB4xeUxlEcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDLr4WEa8AmCnFgy4SrcAyI1iIRDdGlt4uvP67vtL6aDQTXlfYyCJHOxIfeUuEjAY6XYJk7h55NvAYjHafi2XD%2BZxIhjz8FCzTeI%2FF0699ftEG6UCAnnXxMJAlN4ymL%2BGNf113fvSocUkmRVUtNmpZonN1YUZoe5ZDy%2BNZl%2BprEDr8js5%2FxMR5Vem9mb%2FKw1ubQlKCgT22mVHlBYnkosMIMJ8FiHRFS7QMUM5%2FTLazT3cB%2BBJ7WB932EmH3pUlr2XygV7CJt0xGjki7d9bhWZVQf0zjGsDj9b%2Bumacq9ADWgyMEOSgC9Md8o9VD5ES3HPCitAK3F6mgkIJSvjRzSCdrzH9i7Aq0uGdxVBoA7HvBJ%2Bh%2FOhZsX%2Bp%2BocFzNijrkOIJlrNPzuQtZnJ6QYy%2FMSJF1NICnhoLodK1kWm6YuJbB8gMX%2B6%2FFQZpwDup69vLkQauivWUs8EKKoKNjLZXq%2B4Hhdk4hU%2FTPXU4Z%2F4E7Dm612fpYTFdvDkJu%2BdpR0Iar%2BNJxhOyLOucQqVrbZnXEAga34tDXbAzc5RV5OHZN6rPtEYSEa%2FjQSm6QOkah4VBGpYM1EHQ%2F7VuD4VcsKc9JXAlMzGzJpmdnQnKrIvZZQ6aekxHEJXI%2FrB4x2JH5w6J0pw0l7iuczd6mUqzbMLbmpcMGOqUBu%2BhkwOxxo2P3va6bJv%2BKRBWmDbGbMoBJFgjqmFOsxoNPdiRxj7VKsD5x1DfeILtoePGA62xLFrK9EmAOC4w2XIO0%2BqLQtwLW%2F0p%2Bhml3V7sezumBJTCoYI9pszT0ForKV%2B6y2a5EGxNRl0ai%2Fa%2Ft2YTUnlAc2fZpfUaBbWxVpmEQTiQ6FF3Sncjxxccti6w6kMbHZs5e9803NfO4kfyH2bKJ5FsO&X-Amz-Signature=343c00fe9a53c0914792a8777aeec562a4eb1382ce16064ac58af4bae0a045db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

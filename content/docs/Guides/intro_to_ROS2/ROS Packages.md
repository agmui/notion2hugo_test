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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6NMVDY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfhxxqmAt11lz3JqB1cBqLKFZPYc3OkwcODcxHVmk9oAiBZm7eRDRu5KjNqO5z9YcgXPY9lzyF8H2WbcU%2BP4RrqYSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM04K8bGHG%2Fa4SBMN3KtwDh3kl0uLoZKBIv8K3sdPP%2Bs77R1Z0%2FdjezzE6Lf7rQmmNCfJW8yohKB%2Bu94cH15tkpj36lBftpUtsuvBZ9Bs93XmIOvL5v1ea7DAfrzzJY4emRRWASNFvMQR80397dN7zPd06nZxFEH4cTUKsZpe2NSYcyM3j%2Fj68Lief397NWRI%2FZgYK86CFULOM%2B5bGOmMfJWLWsHedmsKJP9SkgKFKnvaDhbkypWILq7OJKvtwtQz0e7xM9aTW%2Bwondjz6u1PhDoav%2Fy3EBAZhyKcHASd2Eb63cpkiIm56P8rdPR7r3LOKWWS4qjLKu%2F%2Fjo8kxSK%2FEpaUxNFfBsTQ9ZQou7G5aTarfBrCUipODj8ro05gyU1Zrwd3tSZF7cqT%2BLziMSG6VJA%2Fb4vq1y%2BkZy8zYUlwzYYE9RlIBc5NXP9opvmrLYtZixKk3nFxO5iGwUH3fGKKE67hj0MI2K3MHvmFLFv1vP7yOHs3x44DJbEOqXCi%2Bl%2BJ%2BY2kyr8h8Rbgv8eg98dlISVvX8tGHbRxGeiNxgaztED7AkH4vFAwXHN6mbYZwCHN2UJbXyov0qdps1DmuZZegTJ3s%2FNpd%2FK0Yh8OwsE3dYUQ5AHnceb1lhgyIGCTeyCc8g%2BuUP%2FvfuNPysGQwhZ6OwAY6pgEpDZXUi8jIDKIHnJORcB4%2Bn7iKja7%2BkL%2FcDyPxcVo1XCLd7uwcioRQCgHtiHDhALUCncaMoWa34%2BqXHzfFDZ9jmKtG%2BkOZplBpeftRxTud1UI3lZFnNmaq9P0Xlc%2FSeSrTRSWLZijs6xno7B0W4fPXXBRgsdY4Exod2%2BBKaD1gSGvpKAcpDuU23rlQ29L4j7zS3u4tGhhdtdmxNKzAV0aUIeAywTG%2B&X-Amz-Signature=34b15d6947223ba9f499c0a94721264cffd1c95b1678e2a852962cef025f2800&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6NMVDY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfhxxqmAt11lz3JqB1cBqLKFZPYc3OkwcODcxHVmk9oAiBZm7eRDRu5KjNqO5z9YcgXPY9lzyF8H2WbcU%2BP4RrqYSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM04K8bGHG%2Fa4SBMN3KtwDh3kl0uLoZKBIv8K3sdPP%2Bs77R1Z0%2FdjezzE6Lf7rQmmNCfJW8yohKB%2Bu94cH15tkpj36lBftpUtsuvBZ9Bs93XmIOvL5v1ea7DAfrzzJY4emRRWASNFvMQR80397dN7zPd06nZxFEH4cTUKsZpe2NSYcyM3j%2Fj68Lief397NWRI%2FZgYK86CFULOM%2B5bGOmMfJWLWsHedmsKJP9SkgKFKnvaDhbkypWILq7OJKvtwtQz0e7xM9aTW%2Bwondjz6u1PhDoav%2Fy3EBAZhyKcHASd2Eb63cpkiIm56P8rdPR7r3LOKWWS4qjLKu%2F%2Fjo8kxSK%2FEpaUxNFfBsTQ9ZQou7G5aTarfBrCUipODj8ro05gyU1Zrwd3tSZF7cqT%2BLziMSG6VJA%2Fb4vq1y%2BkZy8zYUlwzYYE9RlIBc5NXP9opvmrLYtZixKk3nFxO5iGwUH3fGKKE67hj0MI2K3MHvmFLFv1vP7yOHs3x44DJbEOqXCi%2Bl%2BJ%2BY2kyr8h8Rbgv8eg98dlISVvX8tGHbRxGeiNxgaztED7AkH4vFAwXHN6mbYZwCHN2UJbXyov0qdps1DmuZZegTJ3s%2FNpd%2FK0Yh8OwsE3dYUQ5AHnceb1lhgyIGCTeyCc8g%2BuUP%2FvfuNPysGQwhZ6OwAY6pgEpDZXUi8jIDKIHnJORcB4%2Bn7iKja7%2BkL%2FcDyPxcVo1XCLd7uwcioRQCgHtiHDhALUCncaMoWa34%2BqXHzfFDZ9jmKtG%2BkOZplBpeftRxTud1UI3lZFnNmaq9P0Xlc%2FSeSrTRSWLZijs6xno7B0W4fPXXBRgsdY4Exod2%2BBKaD1gSGvpKAcpDuU23rlQ29L4j7zS3u4tGhhdtdmxNKzAV0aUIeAywTG%2B&X-Amz-Signature=901a34db58d19888db41e4c8ad9d4a6c54f35852b2d24c98008a4506aa197e37&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6NMVDY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfhxxqmAt11lz3JqB1cBqLKFZPYc3OkwcODcxHVmk9oAiBZm7eRDRu5KjNqO5z9YcgXPY9lzyF8H2WbcU%2BP4RrqYSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM04K8bGHG%2Fa4SBMN3KtwDh3kl0uLoZKBIv8K3sdPP%2Bs77R1Z0%2FdjezzE6Lf7rQmmNCfJW8yohKB%2Bu94cH15tkpj36lBftpUtsuvBZ9Bs93XmIOvL5v1ea7DAfrzzJY4emRRWASNFvMQR80397dN7zPd06nZxFEH4cTUKsZpe2NSYcyM3j%2Fj68Lief397NWRI%2FZgYK86CFULOM%2B5bGOmMfJWLWsHedmsKJP9SkgKFKnvaDhbkypWILq7OJKvtwtQz0e7xM9aTW%2Bwondjz6u1PhDoav%2Fy3EBAZhyKcHASd2Eb63cpkiIm56P8rdPR7r3LOKWWS4qjLKu%2F%2Fjo8kxSK%2FEpaUxNFfBsTQ9ZQou7G5aTarfBrCUipODj8ro05gyU1Zrwd3tSZF7cqT%2BLziMSG6VJA%2Fb4vq1y%2BkZy8zYUlwzYYE9RlIBc5NXP9opvmrLYtZixKk3nFxO5iGwUH3fGKKE67hj0MI2K3MHvmFLFv1vP7yOHs3x44DJbEOqXCi%2Bl%2BJ%2BY2kyr8h8Rbgv8eg98dlISVvX8tGHbRxGeiNxgaztED7AkH4vFAwXHN6mbYZwCHN2UJbXyov0qdps1DmuZZegTJ3s%2FNpd%2FK0Yh8OwsE3dYUQ5AHnceb1lhgyIGCTeyCc8g%2BuUP%2FvfuNPysGQwhZ6OwAY6pgEpDZXUi8jIDKIHnJORcB4%2Bn7iKja7%2BkL%2FcDyPxcVo1XCLd7uwcioRQCgHtiHDhALUCncaMoWa34%2BqXHzfFDZ9jmKtG%2BkOZplBpeftRxTud1UI3lZFnNmaq9P0Xlc%2FSeSrTRSWLZijs6xno7B0W4fPXXBRgsdY4Exod2%2BBKaD1gSGvpKAcpDuU23rlQ29L4j7zS3u4tGhhdtdmxNKzAV0aUIeAywTG%2B&X-Amz-Signature=29aa199effb19e0bfd6c75af0e3cf6accd06e9d2158ccd9f3d12efa91644e2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6NMVDY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfhxxqmAt11lz3JqB1cBqLKFZPYc3OkwcODcxHVmk9oAiBZm7eRDRu5KjNqO5z9YcgXPY9lzyF8H2WbcU%2BP4RrqYSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM04K8bGHG%2Fa4SBMN3KtwDh3kl0uLoZKBIv8K3sdPP%2Bs77R1Z0%2FdjezzE6Lf7rQmmNCfJW8yohKB%2Bu94cH15tkpj36lBftpUtsuvBZ9Bs93XmIOvL5v1ea7DAfrzzJY4emRRWASNFvMQR80397dN7zPd06nZxFEH4cTUKsZpe2NSYcyM3j%2Fj68Lief397NWRI%2FZgYK86CFULOM%2B5bGOmMfJWLWsHedmsKJP9SkgKFKnvaDhbkypWILq7OJKvtwtQz0e7xM9aTW%2Bwondjz6u1PhDoav%2Fy3EBAZhyKcHASd2Eb63cpkiIm56P8rdPR7r3LOKWWS4qjLKu%2F%2Fjo8kxSK%2FEpaUxNFfBsTQ9ZQou7G5aTarfBrCUipODj8ro05gyU1Zrwd3tSZF7cqT%2BLziMSG6VJA%2Fb4vq1y%2BkZy8zYUlwzYYE9RlIBc5NXP9opvmrLYtZixKk3nFxO5iGwUH3fGKKE67hj0MI2K3MHvmFLFv1vP7yOHs3x44DJbEOqXCi%2Bl%2BJ%2BY2kyr8h8Rbgv8eg98dlISVvX8tGHbRxGeiNxgaztED7AkH4vFAwXHN6mbYZwCHN2UJbXyov0qdps1DmuZZegTJ3s%2FNpd%2FK0Yh8OwsE3dYUQ5AHnceb1lhgyIGCTeyCc8g%2BuUP%2FvfuNPysGQwhZ6OwAY6pgEpDZXUi8jIDKIHnJORcB4%2Bn7iKja7%2BkL%2FcDyPxcVo1XCLd7uwcioRQCgHtiHDhALUCncaMoWa34%2BqXHzfFDZ9jmKtG%2BkOZplBpeftRxTud1UI3lZFnNmaq9P0Xlc%2FSeSrTRSWLZijs6xno7B0W4fPXXBRgsdY4Exod2%2BBKaD1gSGvpKAcpDuU23rlQ29L4j7zS3u4tGhhdtdmxNKzAV0aUIeAywTG%2B&X-Amz-Signature=351bec689dd2cf6fbefc6b2d728067fb87c48c6f6d29627f33eb0636c3d671eb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6NMVDY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfhxxqmAt11lz3JqB1cBqLKFZPYc3OkwcODcxHVmk9oAiBZm7eRDRu5KjNqO5z9YcgXPY9lzyF8H2WbcU%2BP4RrqYSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM04K8bGHG%2Fa4SBMN3KtwDh3kl0uLoZKBIv8K3sdPP%2Bs77R1Z0%2FdjezzE6Lf7rQmmNCfJW8yohKB%2Bu94cH15tkpj36lBftpUtsuvBZ9Bs93XmIOvL5v1ea7DAfrzzJY4emRRWASNFvMQR80397dN7zPd06nZxFEH4cTUKsZpe2NSYcyM3j%2Fj68Lief397NWRI%2FZgYK86CFULOM%2B5bGOmMfJWLWsHedmsKJP9SkgKFKnvaDhbkypWILq7OJKvtwtQz0e7xM9aTW%2Bwondjz6u1PhDoav%2Fy3EBAZhyKcHASd2Eb63cpkiIm56P8rdPR7r3LOKWWS4qjLKu%2F%2Fjo8kxSK%2FEpaUxNFfBsTQ9ZQou7G5aTarfBrCUipODj8ro05gyU1Zrwd3tSZF7cqT%2BLziMSG6VJA%2Fb4vq1y%2BkZy8zYUlwzYYE9RlIBc5NXP9opvmrLYtZixKk3nFxO5iGwUH3fGKKE67hj0MI2K3MHvmFLFv1vP7yOHs3x44DJbEOqXCi%2Bl%2BJ%2BY2kyr8h8Rbgv8eg98dlISVvX8tGHbRxGeiNxgaztED7AkH4vFAwXHN6mbYZwCHN2UJbXyov0qdps1DmuZZegTJ3s%2FNpd%2FK0Yh8OwsE3dYUQ5AHnceb1lhgyIGCTeyCc8g%2BuUP%2FvfuNPysGQwhZ6OwAY6pgEpDZXUi8jIDKIHnJORcB4%2Bn7iKja7%2BkL%2FcDyPxcVo1XCLd7uwcioRQCgHtiHDhALUCncaMoWa34%2BqXHzfFDZ9jmKtG%2BkOZplBpeftRxTud1UI3lZFnNmaq9P0Xlc%2FSeSrTRSWLZijs6xno7B0W4fPXXBRgsdY4Exod2%2BBKaD1gSGvpKAcpDuU23rlQ29L4j7zS3u4tGhhdtdmxNKzAV0aUIeAywTG%2B&X-Amz-Signature=792dda75f0edabc5e8b90851028c8220d36a391e1ef6a4facca41642a2761faf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6NMVDY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfhxxqmAt11lz3JqB1cBqLKFZPYc3OkwcODcxHVmk9oAiBZm7eRDRu5KjNqO5z9YcgXPY9lzyF8H2WbcU%2BP4RrqYSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM04K8bGHG%2Fa4SBMN3KtwDh3kl0uLoZKBIv8K3sdPP%2Bs77R1Z0%2FdjezzE6Lf7rQmmNCfJW8yohKB%2Bu94cH15tkpj36lBftpUtsuvBZ9Bs93XmIOvL5v1ea7DAfrzzJY4emRRWASNFvMQR80397dN7zPd06nZxFEH4cTUKsZpe2NSYcyM3j%2Fj68Lief397NWRI%2FZgYK86CFULOM%2B5bGOmMfJWLWsHedmsKJP9SkgKFKnvaDhbkypWILq7OJKvtwtQz0e7xM9aTW%2Bwondjz6u1PhDoav%2Fy3EBAZhyKcHASd2Eb63cpkiIm56P8rdPR7r3LOKWWS4qjLKu%2F%2Fjo8kxSK%2FEpaUxNFfBsTQ9ZQou7G5aTarfBrCUipODj8ro05gyU1Zrwd3tSZF7cqT%2BLziMSG6VJA%2Fb4vq1y%2BkZy8zYUlwzYYE9RlIBc5NXP9opvmrLYtZixKk3nFxO5iGwUH3fGKKE67hj0MI2K3MHvmFLFv1vP7yOHs3x44DJbEOqXCi%2Bl%2BJ%2BY2kyr8h8Rbgv8eg98dlISVvX8tGHbRxGeiNxgaztED7AkH4vFAwXHN6mbYZwCHN2UJbXyov0qdps1DmuZZegTJ3s%2FNpd%2FK0Yh8OwsE3dYUQ5AHnceb1lhgyIGCTeyCc8g%2BuUP%2FvfuNPysGQwhZ6OwAY6pgEpDZXUi8jIDKIHnJORcB4%2Bn7iKja7%2BkL%2FcDyPxcVo1XCLd7uwcioRQCgHtiHDhALUCncaMoWa34%2BqXHzfFDZ9jmKtG%2BkOZplBpeftRxTud1UI3lZFnNmaq9P0Xlc%2FSeSrTRSWLZijs6xno7B0W4fPXXBRgsdY4Exod2%2BBKaD1gSGvpKAcpDuU23rlQ29L4j7zS3u4tGhhdtdmxNKzAV0aUIeAywTG%2B&X-Amz-Signature=20124cc0a788355c3414c11a6ffbf2277ba14333f715d9c78c926b703018c82a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6NMVDY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfhxxqmAt11lz3JqB1cBqLKFZPYc3OkwcODcxHVmk9oAiBZm7eRDRu5KjNqO5z9YcgXPY9lzyF8H2WbcU%2BP4RrqYSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM04K8bGHG%2Fa4SBMN3KtwDh3kl0uLoZKBIv8K3sdPP%2Bs77R1Z0%2FdjezzE6Lf7rQmmNCfJW8yohKB%2Bu94cH15tkpj36lBftpUtsuvBZ9Bs93XmIOvL5v1ea7DAfrzzJY4emRRWASNFvMQR80397dN7zPd06nZxFEH4cTUKsZpe2NSYcyM3j%2Fj68Lief397NWRI%2FZgYK86CFULOM%2B5bGOmMfJWLWsHedmsKJP9SkgKFKnvaDhbkypWILq7OJKvtwtQz0e7xM9aTW%2Bwondjz6u1PhDoav%2Fy3EBAZhyKcHASd2Eb63cpkiIm56P8rdPR7r3LOKWWS4qjLKu%2F%2Fjo8kxSK%2FEpaUxNFfBsTQ9ZQou7G5aTarfBrCUipODj8ro05gyU1Zrwd3tSZF7cqT%2BLziMSG6VJA%2Fb4vq1y%2BkZy8zYUlwzYYE9RlIBc5NXP9opvmrLYtZixKk3nFxO5iGwUH3fGKKE67hj0MI2K3MHvmFLFv1vP7yOHs3x44DJbEOqXCi%2Bl%2BJ%2BY2kyr8h8Rbgv8eg98dlISVvX8tGHbRxGeiNxgaztED7AkH4vFAwXHN6mbYZwCHN2UJbXyov0qdps1DmuZZegTJ3s%2FNpd%2FK0Yh8OwsE3dYUQ5AHnceb1lhgyIGCTeyCc8g%2BuUP%2FvfuNPysGQwhZ6OwAY6pgEpDZXUi8jIDKIHnJORcB4%2Bn7iKja7%2BkL%2FcDyPxcVo1XCLd7uwcioRQCgHtiHDhALUCncaMoWa34%2BqXHzfFDZ9jmKtG%2BkOZplBpeftRxTud1UI3lZFnNmaq9P0Xlc%2FSeSrTRSWLZijs6xno7B0W4fPXXBRgsdY4Exod2%2BBKaD1gSGvpKAcpDuU23rlQ29L4j7zS3u4tGhhdtdmxNKzAV0aUIeAywTG%2B&X-Amz-Signature=028b1ac8279f1ab9736c8a3fb50df4dc2b8b48ca221428771b96ad5c1f8ba4a7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

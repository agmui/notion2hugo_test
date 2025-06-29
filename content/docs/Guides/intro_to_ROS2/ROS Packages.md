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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMANXCIO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIy7pDTCyqRAtLEu22fgy10Oqc1IOsDQv9h9wteNMQIhAJv4PqjcfHfFoVf%2FFzZdQWi5pNRmt%2FheqfHX6vYn%2BFYUKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjR1ktXw2orRpoGkq3AOIIZS3YuBVXqNazzwSDjfZM8owIobml6aW5Mtkg8gCX27lvBRof2Vo1vd%2BkkaMLSjC2ynot5IVR8503sqywxua%2BcYYreI%2BAjM7jhMswArt2MWKH2sOYyLurmUIBFDCTb7NW5ysrMSYUuezZZ3J0gr4OQ5ypta%2B5O5UzilrhIYPZG2mI1vVNSAeuHbUboOrcLDLxWY3VmFTgljF5a9Lrow3mse6e2PQ9D1mdXgOm%2F%2BDVJ27JLg9azNGmzMvkJIFF2%2BJFqTdJM3mEVPxhRPx4GNwEZN58O5B7m1qbJvrDOhfMymHjgfADgLpB%2B9jfRcYx%2FcRYudP7yOF4bFpRk5D%2FLVz9yBRp7HPj3MtYP9Q%2FDvWBFXAXe8GFatXOX7qjN5oRn8ySDCqm7y%2FY5PWpsJgVWusiAm%2FyVQtE6W03TnjZ1ZPULetVvzc7Z84FhacBLVSKe5udYQn1fGk68wUJseGoRxkoRsNMJeCNKHGewQGhR8wNcGY6YUcfC4AoincAh1UpoPbh33fBIdcmu8sJFC48L97txCjhNf5YLhsAMFaerL3SwoQXzamRdWiUnkRWrYx0thgDbj9uo8xuuYHlXvP1hQc%2B0bNKVxjClro6vrjb5y6FXidipLuUkb74AnDQjDVuoTDBjqkAfaoxQdjltyPiAeFn6m9W2O0wUnos3lfbljiPh2cjaC8LlRizkKvOjXK%2F%2FSpDUm4oSiGGciSeYt70SH%2FZSNnp0p1OwDl7dAMaCD4ufNFIAL1T6MHGTf27deuKS%2Fl5Z7F2SUcqSjjgp1%2Fhfo%2BkLSMbuPY3jCdn9ZpGVxsTaNDsvYnZbeUcOjwUnzHR%2BgFilyrEUP1wWUqtLdUel1TQ5jNBgnkwRt2&X-Amz-Signature=01cadc39e9a2073fa6884936a5e0433f3e22cb112e39ca393cb3059c9eaab6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMANXCIO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIy7pDTCyqRAtLEu22fgy10Oqc1IOsDQv9h9wteNMQIhAJv4PqjcfHfFoVf%2FFzZdQWi5pNRmt%2FheqfHX6vYn%2BFYUKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjR1ktXw2orRpoGkq3AOIIZS3YuBVXqNazzwSDjfZM8owIobml6aW5Mtkg8gCX27lvBRof2Vo1vd%2BkkaMLSjC2ynot5IVR8503sqywxua%2BcYYreI%2BAjM7jhMswArt2MWKH2sOYyLurmUIBFDCTb7NW5ysrMSYUuezZZ3J0gr4OQ5ypta%2B5O5UzilrhIYPZG2mI1vVNSAeuHbUboOrcLDLxWY3VmFTgljF5a9Lrow3mse6e2PQ9D1mdXgOm%2F%2BDVJ27JLg9azNGmzMvkJIFF2%2BJFqTdJM3mEVPxhRPx4GNwEZN58O5B7m1qbJvrDOhfMymHjgfADgLpB%2B9jfRcYx%2FcRYudP7yOF4bFpRk5D%2FLVz9yBRp7HPj3MtYP9Q%2FDvWBFXAXe8GFatXOX7qjN5oRn8ySDCqm7y%2FY5PWpsJgVWusiAm%2FyVQtE6W03TnjZ1ZPULetVvzc7Z84FhacBLVSKe5udYQn1fGk68wUJseGoRxkoRsNMJeCNKHGewQGhR8wNcGY6YUcfC4AoincAh1UpoPbh33fBIdcmu8sJFC48L97txCjhNf5YLhsAMFaerL3SwoQXzamRdWiUnkRWrYx0thgDbj9uo8xuuYHlXvP1hQc%2B0bNKVxjClro6vrjb5y6FXidipLuUkb74AnDQjDVuoTDBjqkAfaoxQdjltyPiAeFn6m9W2O0wUnos3lfbljiPh2cjaC8LlRizkKvOjXK%2F%2FSpDUm4oSiGGciSeYt70SH%2FZSNnp0p1OwDl7dAMaCD4ufNFIAL1T6MHGTf27deuKS%2Fl5Z7F2SUcqSjjgp1%2Fhfo%2BkLSMbuPY3jCdn9ZpGVxsTaNDsvYnZbeUcOjwUnzHR%2BgFilyrEUP1wWUqtLdUel1TQ5jNBgnkwRt2&X-Amz-Signature=1ff78eb7c62c91e14f191e2f2cbb9655b95e80ade92688f86c3f10564381273f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMANXCIO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIy7pDTCyqRAtLEu22fgy10Oqc1IOsDQv9h9wteNMQIhAJv4PqjcfHfFoVf%2FFzZdQWi5pNRmt%2FheqfHX6vYn%2BFYUKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjR1ktXw2orRpoGkq3AOIIZS3YuBVXqNazzwSDjfZM8owIobml6aW5Mtkg8gCX27lvBRof2Vo1vd%2BkkaMLSjC2ynot5IVR8503sqywxua%2BcYYreI%2BAjM7jhMswArt2MWKH2sOYyLurmUIBFDCTb7NW5ysrMSYUuezZZ3J0gr4OQ5ypta%2B5O5UzilrhIYPZG2mI1vVNSAeuHbUboOrcLDLxWY3VmFTgljF5a9Lrow3mse6e2PQ9D1mdXgOm%2F%2BDVJ27JLg9azNGmzMvkJIFF2%2BJFqTdJM3mEVPxhRPx4GNwEZN58O5B7m1qbJvrDOhfMymHjgfADgLpB%2B9jfRcYx%2FcRYudP7yOF4bFpRk5D%2FLVz9yBRp7HPj3MtYP9Q%2FDvWBFXAXe8GFatXOX7qjN5oRn8ySDCqm7y%2FY5PWpsJgVWusiAm%2FyVQtE6W03TnjZ1ZPULetVvzc7Z84FhacBLVSKe5udYQn1fGk68wUJseGoRxkoRsNMJeCNKHGewQGhR8wNcGY6YUcfC4AoincAh1UpoPbh33fBIdcmu8sJFC48L97txCjhNf5YLhsAMFaerL3SwoQXzamRdWiUnkRWrYx0thgDbj9uo8xuuYHlXvP1hQc%2B0bNKVxjClro6vrjb5y6FXidipLuUkb74AnDQjDVuoTDBjqkAfaoxQdjltyPiAeFn6m9W2O0wUnos3lfbljiPh2cjaC8LlRizkKvOjXK%2F%2FSpDUm4oSiGGciSeYt70SH%2FZSNnp0p1OwDl7dAMaCD4ufNFIAL1T6MHGTf27deuKS%2Fl5Z7F2SUcqSjjgp1%2Fhfo%2BkLSMbuPY3jCdn9ZpGVxsTaNDsvYnZbeUcOjwUnzHR%2BgFilyrEUP1wWUqtLdUel1TQ5jNBgnkwRt2&X-Amz-Signature=228240d449205ff7024e9fbf3d0469fc1773d72637cbb18a869135853fe3293e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMANXCIO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIy7pDTCyqRAtLEu22fgy10Oqc1IOsDQv9h9wteNMQIhAJv4PqjcfHfFoVf%2FFzZdQWi5pNRmt%2FheqfHX6vYn%2BFYUKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjR1ktXw2orRpoGkq3AOIIZS3YuBVXqNazzwSDjfZM8owIobml6aW5Mtkg8gCX27lvBRof2Vo1vd%2BkkaMLSjC2ynot5IVR8503sqywxua%2BcYYreI%2BAjM7jhMswArt2MWKH2sOYyLurmUIBFDCTb7NW5ysrMSYUuezZZ3J0gr4OQ5ypta%2B5O5UzilrhIYPZG2mI1vVNSAeuHbUboOrcLDLxWY3VmFTgljF5a9Lrow3mse6e2PQ9D1mdXgOm%2F%2BDVJ27JLg9azNGmzMvkJIFF2%2BJFqTdJM3mEVPxhRPx4GNwEZN58O5B7m1qbJvrDOhfMymHjgfADgLpB%2B9jfRcYx%2FcRYudP7yOF4bFpRk5D%2FLVz9yBRp7HPj3MtYP9Q%2FDvWBFXAXe8GFatXOX7qjN5oRn8ySDCqm7y%2FY5PWpsJgVWusiAm%2FyVQtE6W03TnjZ1ZPULetVvzc7Z84FhacBLVSKe5udYQn1fGk68wUJseGoRxkoRsNMJeCNKHGewQGhR8wNcGY6YUcfC4AoincAh1UpoPbh33fBIdcmu8sJFC48L97txCjhNf5YLhsAMFaerL3SwoQXzamRdWiUnkRWrYx0thgDbj9uo8xuuYHlXvP1hQc%2B0bNKVxjClro6vrjb5y6FXidipLuUkb74AnDQjDVuoTDBjqkAfaoxQdjltyPiAeFn6m9W2O0wUnos3lfbljiPh2cjaC8LlRizkKvOjXK%2F%2FSpDUm4oSiGGciSeYt70SH%2FZSNnp0p1OwDl7dAMaCD4ufNFIAL1T6MHGTf27deuKS%2Fl5Z7F2SUcqSjjgp1%2Fhfo%2BkLSMbuPY3jCdn9ZpGVxsTaNDsvYnZbeUcOjwUnzHR%2BgFilyrEUP1wWUqtLdUel1TQ5jNBgnkwRt2&X-Amz-Signature=d8d95445ef6a746a8fdce5f743c493db07c8184f470417689854b9d3e5231e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMANXCIO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIy7pDTCyqRAtLEu22fgy10Oqc1IOsDQv9h9wteNMQIhAJv4PqjcfHfFoVf%2FFzZdQWi5pNRmt%2FheqfHX6vYn%2BFYUKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjR1ktXw2orRpoGkq3AOIIZS3YuBVXqNazzwSDjfZM8owIobml6aW5Mtkg8gCX27lvBRof2Vo1vd%2BkkaMLSjC2ynot5IVR8503sqywxua%2BcYYreI%2BAjM7jhMswArt2MWKH2sOYyLurmUIBFDCTb7NW5ysrMSYUuezZZ3J0gr4OQ5ypta%2B5O5UzilrhIYPZG2mI1vVNSAeuHbUboOrcLDLxWY3VmFTgljF5a9Lrow3mse6e2PQ9D1mdXgOm%2F%2BDVJ27JLg9azNGmzMvkJIFF2%2BJFqTdJM3mEVPxhRPx4GNwEZN58O5B7m1qbJvrDOhfMymHjgfADgLpB%2B9jfRcYx%2FcRYudP7yOF4bFpRk5D%2FLVz9yBRp7HPj3MtYP9Q%2FDvWBFXAXe8GFatXOX7qjN5oRn8ySDCqm7y%2FY5PWpsJgVWusiAm%2FyVQtE6W03TnjZ1ZPULetVvzc7Z84FhacBLVSKe5udYQn1fGk68wUJseGoRxkoRsNMJeCNKHGewQGhR8wNcGY6YUcfC4AoincAh1UpoPbh33fBIdcmu8sJFC48L97txCjhNf5YLhsAMFaerL3SwoQXzamRdWiUnkRWrYx0thgDbj9uo8xuuYHlXvP1hQc%2B0bNKVxjClro6vrjb5y6FXidipLuUkb74AnDQjDVuoTDBjqkAfaoxQdjltyPiAeFn6m9W2O0wUnos3lfbljiPh2cjaC8LlRizkKvOjXK%2F%2FSpDUm4oSiGGciSeYt70SH%2FZSNnp0p1OwDl7dAMaCD4ufNFIAL1T6MHGTf27deuKS%2Fl5Z7F2SUcqSjjgp1%2Fhfo%2BkLSMbuPY3jCdn9ZpGVxsTaNDsvYnZbeUcOjwUnzHR%2BgFilyrEUP1wWUqtLdUel1TQ5jNBgnkwRt2&X-Amz-Signature=fb995a963b4692e148fc48e109035fde74a13a4002c0c92717f45e351b21953e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMANXCIO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIy7pDTCyqRAtLEu22fgy10Oqc1IOsDQv9h9wteNMQIhAJv4PqjcfHfFoVf%2FFzZdQWi5pNRmt%2FheqfHX6vYn%2BFYUKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjR1ktXw2orRpoGkq3AOIIZS3YuBVXqNazzwSDjfZM8owIobml6aW5Mtkg8gCX27lvBRof2Vo1vd%2BkkaMLSjC2ynot5IVR8503sqywxua%2BcYYreI%2BAjM7jhMswArt2MWKH2sOYyLurmUIBFDCTb7NW5ysrMSYUuezZZ3J0gr4OQ5ypta%2B5O5UzilrhIYPZG2mI1vVNSAeuHbUboOrcLDLxWY3VmFTgljF5a9Lrow3mse6e2PQ9D1mdXgOm%2F%2BDVJ27JLg9azNGmzMvkJIFF2%2BJFqTdJM3mEVPxhRPx4GNwEZN58O5B7m1qbJvrDOhfMymHjgfADgLpB%2B9jfRcYx%2FcRYudP7yOF4bFpRk5D%2FLVz9yBRp7HPj3MtYP9Q%2FDvWBFXAXe8GFatXOX7qjN5oRn8ySDCqm7y%2FY5PWpsJgVWusiAm%2FyVQtE6W03TnjZ1ZPULetVvzc7Z84FhacBLVSKe5udYQn1fGk68wUJseGoRxkoRsNMJeCNKHGewQGhR8wNcGY6YUcfC4AoincAh1UpoPbh33fBIdcmu8sJFC48L97txCjhNf5YLhsAMFaerL3SwoQXzamRdWiUnkRWrYx0thgDbj9uo8xuuYHlXvP1hQc%2B0bNKVxjClro6vrjb5y6FXidipLuUkb74AnDQjDVuoTDBjqkAfaoxQdjltyPiAeFn6m9W2O0wUnos3lfbljiPh2cjaC8LlRizkKvOjXK%2F%2FSpDUm4oSiGGciSeYt70SH%2FZSNnp0p1OwDl7dAMaCD4ufNFIAL1T6MHGTf27deuKS%2Fl5Z7F2SUcqSjjgp1%2Fhfo%2BkLSMbuPY3jCdn9ZpGVxsTaNDsvYnZbeUcOjwUnzHR%2BgFilyrEUP1wWUqtLdUel1TQ5jNBgnkwRt2&X-Amz-Signature=169199a5801f9387b6152e483d702925055b16ab7e5a0dfa1656846d09c3a2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMANXCIO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIy7pDTCyqRAtLEu22fgy10Oqc1IOsDQv9h9wteNMQIhAJv4PqjcfHfFoVf%2FFzZdQWi5pNRmt%2FheqfHX6vYn%2BFYUKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjR1ktXw2orRpoGkq3AOIIZS3YuBVXqNazzwSDjfZM8owIobml6aW5Mtkg8gCX27lvBRof2Vo1vd%2BkkaMLSjC2ynot5IVR8503sqywxua%2BcYYreI%2BAjM7jhMswArt2MWKH2sOYyLurmUIBFDCTb7NW5ysrMSYUuezZZ3J0gr4OQ5ypta%2B5O5UzilrhIYPZG2mI1vVNSAeuHbUboOrcLDLxWY3VmFTgljF5a9Lrow3mse6e2PQ9D1mdXgOm%2F%2BDVJ27JLg9azNGmzMvkJIFF2%2BJFqTdJM3mEVPxhRPx4GNwEZN58O5B7m1qbJvrDOhfMymHjgfADgLpB%2B9jfRcYx%2FcRYudP7yOF4bFpRk5D%2FLVz9yBRp7HPj3MtYP9Q%2FDvWBFXAXe8GFatXOX7qjN5oRn8ySDCqm7y%2FY5PWpsJgVWusiAm%2FyVQtE6W03TnjZ1ZPULetVvzc7Z84FhacBLVSKe5udYQn1fGk68wUJseGoRxkoRsNMJeCNKHGewQGhR8wNcGY6YUcfC4AoincAh1UpoPbh33fBIdcmu8sJFC48L97txCjhNf5YLhsAMFaerL3SwoQXzamRdWiUnkRWrYx0thgDbj9uo8xuuYHlXvP1hQc%2B0bNKVxjClro6vrjb5y6FXidipLuUkb74AnDQjDVuoTDBjqkAfaoxQdjltyPiAeFn6m9W2O0wUnos3lfbljiPh2cjaC8LlRizkKvOjXK%2F%2FSpDUm4oSiGGciSeYt70SH%2FZSNnp0p1OwDl7dAMaCD4ufNFIAL1T6MHGTf27deuKS%2Fl5Z7F2SUcqSjjgp1%2Fhfo%2BkLSMbuPY3jCdn9ZpGVxsTaNDsvYnZbeUcOjwUnzHR%2BgFilyrEUP1wWUqtLdUel1TQ5jNBgnkwRt2&X-Amz-Signature=cb64ba9d67ff0de2c17a5b175ae43df6e2bfae6c1971e944adcff262bd5d91ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

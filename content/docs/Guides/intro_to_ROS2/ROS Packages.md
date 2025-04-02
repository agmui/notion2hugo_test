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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEAHFDA6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjmgV%2BDRAiMSCOJumYCfvZyv24SWJ%2FVkshUy9069OfaAiEAo%2B9uIjJWnvNbYsUiRuNGosqicDIqHGB%2BujwLSrmanPAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhxJJHCUhBukCA33CrcA%2F1dMbZmtm8XLi5o8VtjJHaOXWldZBRXzyX3ZXJKbmhM%2BKHZSN3DQcdATLrXmETqBlryY7NQneHDIinXH83umx7CVLDmAjlb0Y%2BIH43fAXMMBoEoVGqdyQk1TzQNGUTn6dPFmEZOD%2FDu4WiEJaepK5RSEI7isCrkg0%2Bbfv7JTqP%2F%2B6LLZUGIv%2B3SmEU0CH8Jvn30hRwf1zyehatotNgg09m%2FFXQQ33mtJeWuBkqAe7q8XSpQ3jCST3qzllYTnb2ZoU%2BS9jqSRrbwlvkiYfEzupQqeNvTEyc7PlsUqrSwYFoY9oGgoALYFsGsyvcjBqm2h20TJzf2%2Bb3Ql4CC3MW039UqewPviyZTRX1B5vuVXl%2Btk0iTMTVNcEm7XG1MxOP1KVA9JVmS4MBZ8DwKsgzCuiUZUuK95Fsu3WkDuMX5oP4557ov0hAbcoK31MMPw05u73wzikd%2FTSzY%2F%2BQBNIObr9q2JSQsKWAANi%2F1ZftMgetbey886DkjZsQ4Bq0cESH3u%2BdFNnUNp1XgOhsVP7kmkEJddHh41%2BYpNxrtjTI16%2B3Wzo%2B0lY%2BxOtBkQsqaR4oE8tH3eYPxbEBRG0tkdE4O5vBvQ0JjN8cyBBUWscxGpBg7UExs41ivsw7ps%2BM%2BMOSqtL8GOqUBonCyWUNgXivEASADvrT4qZ174xWQ0gycqbUKjBq0l9Jq4p8hNI07gJg%2F0YNKmkA82HxaNU726zKi28EgHYWtPKFn4tv0poLScf8izTPY30Sa%2BtKpfUeUbnK6HXjugWNbUuL6cW45X43is05SX85XlaV9DicRfV628Uf2DDUkCuEFL1coonDrkFS2L%2Bn3oXWptKLvSq7cJ%2F9oZIQLFGniP8mG84%2FW&X-Amz-Signature=f618381724f4fff55bf013e8a2b594e03ebfa4f34529e8cba268a9c5838167c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEAHFDA6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjmgV%2BDRAiMSCOJumYCfvZyv24SWJ%2FVkshUy9069OfaAiEAo%2B9uIjJWnvNbYsUiRuNGosqicDIqHGB%2BujwLSrmanPAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhxJJHCUhBukCA33CrcA%2F1dMbZmtm8XLi5o8VtjJHaOXWldZBRXzyX3ZXJKbmhM%2BKHZSN3DQcdATLrXmETqBlryY7NQneHDIinXH83umx7CVLDmAjlb0Y%2BIH43fAXMMBoEoVGqdyQk1TzQNGUTn6dPFmEZOD%2FDu4WiEJaepK5RSEI7isCrkg0%2Bbfv7JTqP%2F%2B6LLZUGIv%2B3SmEU0CH8Jvn30hRwf1zyehatotNgg09m%2FFXQQ33mtJeWuBkqAe7q8XSpQ3jCST3qzllYTnb2ZoU%2BS9jqSRrbwlvkiYfEzupQqeNvTEyc7PlsUqrSwYFoY9oGgoALYFsGsyvcjBqm2h20TJzf2%2Bb3Ql4CC3MW039UqewPviyZTRX1B5vuVXl%2Btk0iTMTVNcEm7XG1MxOP1KVA9JVmS4MBZ8DwKsgzCuiUZUuK95Fsu3WkDuMX5oP4557ov0hAbcoK31MMPw05u73wzikd%2FTSzY%2F%2BQBNIObr9q2JSQsKWAANi%2F1ZftMgetbey886DkjZsQ4Bq0cESH3u%2BdFNnUNp1XgOhsVP7kmkEJddHh41%2BYpNxrtjTI16%2B3Wzo%2B0lY%2BxOtBkQsqaR4oE8tH3eYPxbEBRG0tkdE4O5vBvQ0JjN8cyBBUWscxGpBg7UExs41ivsw7ps%2BM%2BMOSqtL8GOqUBonCyWUNgXivEASADvrT4qZ174xWQ0gycqbUKjBq0l9Jq4p8hNI07gJg%2F0YNKmkA82HxaNU726zKi28EgHYWtPKFn4tv0poLScf8izTPY30Sa%2BtKpfUeUbnK6HXjugWNbUuL6cW45X43is05SX85XlaV9DicRfV628Uf2DDUkCuEFL1coonDrkFS2L%2Bn3oXWptKLvSq7cJ%2F9oZIQLFGniP8mG84%2FW&X-Amz-Signature=1a69e355a45b1766c8a504e028ccd7ebf524699643e6e02e9d10f6a88c6adcd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEAHFDA6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjmgV%2BDRAiMSCOJumYCfvZyv24SWJ%2FVkshUy9069OfaAiEAo%2B9uIjJWnvNbYsUiRuNGosqicDIqHGB%2BujwLSrmanPAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhxJJHCUhBukCA33CrcA%2F1dMbZmtm8XLi5o8VtjJHaOXWldZBRXzyX3ZXJKbmhM%2BKHZSN3DQcdATLrXmETqBlryY7NQneHDIinXH83umx7CVLDmAjlb0Y%2BIH43fAXMMBoEoVGqdyQk1TzQNGUTn6dPFmEZOD%2FDu4WiEJaepK5RSEI7isCrkg0%2Bbfv7JTqP%2F%2B6LLZUGIv%2B3SmEU0CH8Jvn30hRwf1zyehatotNgg09m%2FFXQQ33mtJeWuBkqAe7q8XSpQ3jCST3qzllYTnb2ZoU%2BS9jqSRrbwlvkiYfEzupQqeNvTEyc7PlsUqrSwYFoY9oGgoALYFsGsyvcjBqm2h20TJzf2%2Bb3Ql4CC3MW039UqewPviyZTRX1B5vuVXl%2Btk0iTMTVNcEm7XG1MxOP1KVA9JVmS4MBZ8DwKsgzCuiUZUuK95Fsu3WkDuMX5oP4557ov0hAbcoK31MMPw05u73wzikd%2FTSzY%2F%2BQBNIObr9q2JSQsKWAANi%2F1ZftMgetbey886DkjZsQ4Bq0cESH3u%2BdFNnUNp1XgOhsVP7kmkEJddHh41%2BYpNxrtjTI16%2B3Wzo%2B0lY%2BxOtBkQsqaR4oE8tH3eYPxbEBRG0tkdE4O5vBvQ0JjN8cyBBUWscxGpBg7UExs41ivsw7ps%2BM%2BMOSqtL8GOqUBonCyWUNgXivEASADvrT4qZ174xWQ0gycqbUKjBq0l9Jq4p8hNI07gJg%2F0YNKmkA82HxaNU726zKi28EgHYWtPKFn4tv0poLScf8izTPY30Sa%2BtKpfUeUbnK6HXjugWNbUuL6cW45X43is05SX85XlaV9DicRfV628Uf2DDUkCuEFL1coonDrkFS2L%2Bn3oXWptKLvSq7cJ%2F9oZIQLFGniP8mG84%2FW&X-Amz-Signature=59980eb1dfa83094b062148889c2a08037f2b9ea99df595769d554fbcc4c05ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEAHFDA6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjmgV%2BDRAiMSCOJumYCfvZyv24SWJ%2FVkshUy9069OfaAiEAo%2B9uIjJWnvNbYsUiRuNGosqicDIqHGB%2BujwLSrmanPAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhxJJHCUhBukCA33CrcA%2F1dMbZmtm8XLi5o8VtjJHaOXWldZBRXzyX3ZXJKbmhM%2BKHZSN3DQcdATLrXmETqBlryY7NQneHDIinXH83umx7CVLDmAjlb0Y%2BIH43fAXMMBoEoVGqdyQk1TzQNGUTn6dPFmEZOD%2FDu4WiEJaepK5RSEI7isCrkg0%2Bbfv7JTqP%2F%2B6LLZUGIv%2B3SmEU0CH8Jvn30hRwf1zyehatotNgg09m%2FFXQQ33mtJeWuBkqAe7q8XSpQ3jCST3qzllYTnb2ZoU%2BS9jqSRrbwlvkiYfEzupQqeNvTEyc7PlsUqrSwYFoY9oGgoALYFsGsyvcjBqm2h20TJzf2%2Bb3Ql4CC3MW039UqewPviyZTRX1B5vuVXl%2Btk0iTMTVNcEm7XG1MxOP1KVA9JVmS4MBZ8DwKsgzCuiUZUuK95Fsu3WkDuMX5oP4557ov0hAbcoK31MMPw05u73wzikd%2FTSzY%2F%2BQBNIObr9q2JSQsKWAANi%2F1ZftMgetbey886DkjZsQ4Bq0cESH3u%2BdFNnUNp1XgOhsVP7kmkEJddHh41%2BYpNxrtjTI16%2B3Wzo%2B0lY%2BxOtBkQsqaR4oE8tH3eYPxbEBRG0tkdE4O5vBvQ0JjN8cyBBUWscxGpBg7UExs41ivsw7ps%2BM%2BMOSqtL8GOqUBonCyWUNgXivEASADvrT4qZ174xWQ0gycqbUKjBq0l9Jq4p8hNI07gJg%2F0YNKmkA82HxaNU726zKi28EgHYWtPKFn4tv0poLScf8izTPY30Sa%2BtKpfUeUbnK6HXjugWNbUuL6cW45X43is05SX85XlaV9DicRfV628Uf2DDUkCuEFL1coonDrkFS2L%2Bn3oXWptKLvSq7cJ%2F9oZIQLFGniP8mG84%2FW&X-Amz-Signature=b0783af113e2b24b3102ebc1ac3795fb9fc26c96b5043023c0b62c2fb825b44f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEAHFDA6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjmgV%2BDRAiMSCOJumYCfvZyv24SWJ%2FVkshUy9069OfaAiEAo%2B9uIjJWnvNbYsUiRuNGosqicDIqHGB%2BujwLSrmanPAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhxJJHCUhBukCA33CrcA%2F1dMbZmtm8XLi5o8VtjJHaOXWldZBRXzyX3ZXJKbmhM%2BKHZSN3DQcdATLrXmETqBlryY7NQneHDIinXH83umx7CVLDmAjlb0Y%2BIH43fAXMMBoEoVGqdyQk1TzQNGUTn6dPFmEZOD%2FDu4WiEJaepK5RSEI7isCrkg0%2Bbfv7JTqP%2F%2B6LLZUGIv%2B3SmEU0CH8Jvn30hRwf1zyehatotNgg09m%2FFXQQ33mtJeWuBkqAe7q8XSpQ3jCST3qzllYTnb2ZoU%2BS9jqSRrbwlvkiYfEzupQqeNvTEyc7PlsUqrSwYFoY9oGgoALYFsGsyvcjBqm2h20TJzf2%2Bb3Ql4CC3MW039UqewPviyZTRX1B5vuVXl%2Btk0iTMTVNcEm7XG1MxOP1KVA9JVmS4MBZ8DwKsgzCuiUZUuK95Fsu3WkDuMX5oP4557ov0hAbcoK31MMPw05u73wzikd%2FTSzY%2F%2BQBNIObr9q2JSQsKWAANi%2F1ZftMgetbey886DkjZsQ4Bq0cESH3u%2BdFNnUNp1XgOhsVP7kmkEJddHh41%2BYpNxrtjTI16%2B3Wzo%2B0lY%2BxOtBkQsqaR4oE8tH3eYPxbEBRG0tkdE4O5vBvQ0JjN8cyBBUWscxGpBg7UExs41ivsw7ps%2BM%2BMOSqtL8GOqUBonCyWUNgXivEASADvrT4qZ174xWQ0gycqbUKjBq0l9Jq4p8hNI07gJg%2F0YNKmkA82HxaNU726zKi28EgHYWtPKFn4tv0poLScf8izTPY30Sa%2BtKpfUeUbnK6HXjugWNbUuL6cW45X43is05SX85XlaV9DicRfV628Uf2DDUkCuEFL1coonDrkFS2L%2Bn3oXWptKLvSq7cJ%2F9oZIQLFGniP8mG84%2FW&X-Amz-Signature=83e91c9bf3e841556af6faf5982b6f807963c693efff55607c9aa1efc5a87c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEAHFDA6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjmgV%2BDRAiMSCOJumYCfvZyv24SWJ%2FVkshUy9069OfaAiEAo%2B9uIjJWnvNbYsUiRuNGosqicDIqHGB%2BujwLSrmanPAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhxJJHCUhBukCA33CrcA%2F1dMbZmtm8XLi5o8VtjJHaOXWldZBRXzyX3ZXJKbmhM%2BKHZSN3DQcdATLrXmETqBlryY7NQneHDIinXH83umx7CVLDmAjlb0Y%2BIH43fAXMMBoEoVGqdyQk1TzQNGUTn6dPFmEZOD%2FDu4WiEJaepK5RSEI7isCrkg0%2Bbfv7JTqP%2F%2B6LLZUGIv%2B3SmEU0CH8Jvn30hRwf1zyehatotNgg09m%2FFXQQ33mtJeWuBkqAe7q8XSpQ3jCST3qzllYTnb2ZoU%2BS9jqSRrbwlvkiYfEzupQqeNvTEyc7PlsUqrSwYFoY9oGgoALYFsGsyvcjBqm2h20TJzf2%2Bb3Ql4CC3MW039UqewPviyZTRX1B5vuVXl%2Btk0iTMTVNcEm7XG1MxOP1KVA9JVmS4MBZ8DwKsgzCuiUZUuK95Fsu3WkDuMX5oP4557ov0hAbcoK31MMPw05u73wzikd%2FTSzY%2F%2BQBNIObr9q2JSQsKWAANi%2F1ZftMgetbey886DkjZsQ4Bq0cESH3u%2BdFNnUNp1XgOhsVP7kmkEJddHh41%2BYpNxrtjTI16%2B3Wzo%2B0lY%2BxOtBkQsqaR4oE8tH3eYPxbEBRG0tkdE4O5vBvQ0JjN8cyBBUWscxGpBg7UExs41ivsw7ps%2BM%2BMOSqtL8GOqUBonCyWUNgXivEASADvrT4qZ174xWQ0gycqbUKjBq0l9Jq4p8hNI07gJg%2F0YNKmkA82HxaNU726zKi28EgHYWtPKFn4tv0poLScf8izTPY30Sa%2BtKpfUeUbnK6HXjugWNbUuL6cW45X43is05SX85XlaV9DicRfV628Uf2DDUkCuEFL1coonDrkFS2L%2Bn3oXWptKLvSq7cJ%2F9oZIQLFGniP8mG84%2FW&X-Amz-Signature=7fe462ecabe28f1676d7029c85e6c70332879f5b6b23799d195dee4954909b66&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEAHFDA6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjmgV%2BDRAiMSCOJumYCfvZyv24SWJ%2FVkshUy9069OfaAiEAo%2B9uIjJWnvNbYsUiRuNGosqicDIqHGB%2BujwLSrmanPAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhxJJHCUhBukCA33CrcA%2F1dMbZmtm8XLi5o8VtjJHaOXWldZBRXzyX3ZXJKbmhM%2BKHZSN3DQcdATLrXmETqBlryY7NQneHDIinXH83umx7CVLDmAjlb0Y%2BIH43fAXMMBoEoVGqdyQk1TzQNGUTn6dPFmEZOD%2FDu4WiEJaepK5RSEI7isCrkg0%2Bbfv7JTqP%2F%2B6LLZUGIv%2B3SmEU0CH8Jvn30hRwf1zyehatotNgg09m%2FFXQQ33mtJeWuBkqAe7q8XSpQ3jCST3qzllYTnb2ZoU%2BS9jqSRrbwlvkiYfEzupQqeNvTEyc7PlsUqrSwYFoY9oGgoALYFsGsyvcjBqm2h20TJzf2%2Bb3Ql4CC3MW039UqewPviyZTRX1B5vuVXl%2Btk0iTMTVNcEm7XG1MxOP1KVA9JVmS4MBZ8DwKsgzCuiUZUuK95Fsu3WkDuMX5oP4557ov0hAbcoK31MMPw05u73wzikd%2FTSzY%2F%2BQBNIObr9q2JSQsKWAANi%2F1ZftMgetbey886DkjZsQ4Bq0cESH3u%2BdFNnUNp1XgOhsVP7kmkEJddHh41%2BYpNxrtjTI16%2B3Wzo%2B0lY%2BxOtBkQsqaR4oE8tH3eYPxbEBRG0tkdE4O5vBvQ0JjN8cyBBUWscxGpBg7UExs41ivsw7ps%2BM%2BMOSqtL8GOqUBonCyWUNgXivEASADvrT4qZ174xWQ0gycqbUKjBq0l9Jq4p8hNI07gJg%2F0YNKmkA82HxaNU726zKi28EgHYWtPKFn4tv0poLScf8izTPY30Sa%2BtKpfUeUbnK6HXjugWNbUuL6cW45X43is05SX85XlaV9DicRfV628Uf2DDUkCuEFL1coonDrkFS2L%2Bn3oXWptKLvSq7cJ%2F9oZIQLFGniP8mG84%2FW&X-Amz-Signature=9174921e60c2c262171aa89dc1ed22ba04ec3a98a27825d148d2e3ef4f543a37&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

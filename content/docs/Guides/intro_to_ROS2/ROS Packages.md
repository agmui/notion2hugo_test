---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILY2YRP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCM1aAiY5RnZAqAlxW2cRqYiOTQDL0niBCn57NtDIDcEwIhAMJhOJMQ6heT%2Fj%2BHPM0L4z%2FGYUQC6tNGVBjI9801kF6xKv8DCHEQABoMNjM3NDIzMTgzODA1IgwIGcA9re2ZD8TEYuUq3AMy%2Fj%2BtCBM42qCrzIPbljgVVcrHZ%2BiDqcQhGEQXnQzHGGGK2NgwuZ8ELXcemqeTDqx%2Bh9YZH5sLe%2FMZrteQH8DNVw%2Bchg5Uc2%2F7r%2BmKXubEz6UClJrU7XmfxqjMrI0gk65ihG5FR%2FCfCifjZsQMN5mczS3aGsqjBjZ%2BpygyKJ2gFDL972GdD9c%2Bm8yB01jFMGPr%2BuCZIcTDYwesjzRrX%2FxCje4jYanediOrRVukPuPxqFENt%2FcqEpw0CnY9bFA8tZy4AeTQWNfBmC2hZM%2F1JfSDKsD%2F1KOKGBwKlsSOQfPdtAl2mw6p0WXrroGFSB2AzUSKrg1OTBuVIjD%2BsXThJtI4Z7OvwXUZXfCBZmAuSqlMJNM00tPHzSNN3aV%2BYjICnXqxYbzM8l0VDXDGqO711bdT4ozEGXWZdjFT4W4dQ09sSFOZjbUuS3nyoO8LsdFs0ciZoIMiQdvGFHbDf5SCxK4o%2FobwGcsowsyEq%2Fbz6LK5UvPEAnLVNUnOJO4Rkq8DRCv3eLjQrGPKcVfu6IdXv0QJ%2BDWC9nqcSfBj%2BW0%2BFz0Xuu8ocivwfiTCMsebX%2BD1OVxGIhMOxpTxzuaxn3cH%2FQz%2FRPCdf1rpnHxdesFw9KQdXECISBIhpukaOcS6mDCk%2BYDFBjqkARm9n9Iz2DYo4j69NIvNdXEN0iKarux4Pw8OmIrrln%2B%2BARVsNMXvysCylvDjbIaTDh8KZVNzUBBX2qZ0Hw7G2MkdKA1AhESlGBZiRnhIO5U52t%2BvAz51Jeh3KYGW0wXXgVkBi%2BVkebMm09sM26%2FNnPsjGih0ccRnaSf3uJRYDGWMXaImnf2uJnib%2BCE%2FgEbswFbfRPbH87UQUaOaehqQQ4bTQCOX&X-Amz-Signature=c9cbc2bd1b0f7b0a4695466a63bc3e8a3479b83813e20a7a6a9528c493e5751d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILY2YRP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCM1aAiY5RnZAqAlxW2cRqYiOTQDL0niBCn57NtDIDcEwIhAMJhOJMQ6heT%2Fj%2BHPM0L4z%2FGYUQC6tNGVBjI9801kF6xKv8DCHEQABoMNjM3NDIzMTgzODA1IgwIGcA9re2ZD8TEYuUq3AMy%2Fj%2BtCBM42qCrzIPbljgVVcrHZ%2BiDqcQhGEQXnQzHGGGK2NgwuZ8ELXcemqeTDqx%2Bh9YZH5sLe%2FMZrteQH8DNVw%2Bchg5Uc2%2F7r%2BmKXubEz6UClJrU7XmfxqjMrI0gk65ihG5FR%2FCfCifjZsQMN5mczS3aGsqjBjZ%2BpygyKJ2gFDL972GdD9c%2Bm8yB01jFMGPr%2BuCZIcTDYwesjzRrX%2FxCje4jYanediOrRVukPuPxqFENt%2FcqEpw0CnY9bFA8tZy4AeTQWNfBmC2hZM%2F1JfSDKsD%2F1KOKGBwKlsSOQfPdtAl2mw6p0WXrroGFSB2AzUSKrg1OTBuVIjD%2BsXThJtI4Z7OvwXUZXfCBZmAuSqlMJNM00tPHzSNN3aV%2BYjICnXqxYbzM8l0VDXDGqO711bdT4ozEGXWZdjFT4W4dQ09sSFOZjbUuS3nyoO8LsdFs0ciZoIMiQdvGFHbDf5SCxK4o%2FobwGcsowsyEq%2Fbz6LK5UvPEAnLVNUnOJO4Rkq8DRCv3eLjQrGPKcVfu6IdXv0QJ%2BDWC9nqcSfBj%2BW0%2BFz0Xuu8ocivwfiTCMsebX%2BD1OVxGIhMOxpTxzuaxn3cH%2FQz%2FRPCdf1rpnHxdesFw9KQdXECISBIhpukaOcS6mDCk%2BYDFBjqkARm9n9Iz2DYo4j69NIvNdXEN0iKarux4Pw8OmIrrln%2B%2BARVsNMXvysCylvDjbIaTDh8KZVNzUBBX2qZ0Hw7G2MkdKA1AhESlGBZiRnhIO5U52t%2BvAz51Jeh3KYGW0wXXgVkBi%2BVkebMm09sM26%2FNnPsjGih0ccRnaSf3uJRYDGWMXaImnf2uJnib%2BCE%2FgEbswFbfRPbH87UQUaOaehqQQ4bTQCOX&X-Amz-Signature=6f92ad7d661bdb88ae939d721a5bff584671be53ce95d33612f88a540035b561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILY2YRP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCM1aAiY5RnZAqAlxW2cRqYiOTQDL0niBCn57NtDIDcEwIhAMJhOJMQ6heT%2Fj%2BHPM0L4z%2FGYUQC6tNGVBjI9801kF6xKv8DCHEQABoMNjM3NDIzMTgzODA1IgwIGcA9re2ZD8TEYuUq3AMy%2Fj%2BtCBM42qCrzIPbljgVVcrHZ%2BiDqcQhGEQXnQzHGGGK2NgwuZ8ELXcemqeTDqx%2Bh9YZH5sLe%2FMZrteQH8DNVw%2Bchg5Uc2%2F7r%2BmKXubEz6UClJrU7XmfxqjMrI0gk65ihG5FR%2FCfCifjZsQMN5mczS3aGsqjBjZ%2BpygyKJ2gFDL972GdD9c%2Bm8yB01jFMGPr%2BuCZIcTDYwesjzRrX%2FxCje4jYanediOrRVukPuPxqFENt%2FcqEpw0CnY9bFA8tZy4AeTQWNfBmC2hZM%2F1JfSDKsD%2F1KOKGBwKlsSOQfPdtAl2mw6p0WXrroGFSB2AzUSKrg1OTBuVIjD%2BsXThJtI4Z7OvwXUZXfCBZmAuSqlMJNM00tPHzSNN3aV%2BYjICnXqxYbzM8l0VDXDGqO711bdT4ozEGXWZdjFT4W4dQ09sSFOZjbUuS3nyoO8LsdFs0ciZoIMiQdvGFHbDf5SCxK4o%2FobwGcsowsyEq%2Fbz6LK5UvPEAnLVNUnOJO4Rkq8DRCv3eLjQrGPKcVfu6IdXv0QJ%2BDWC9nqcSfBj%2BW0%2BFz0Xuu8ocivwfiTCMsebX%2BD1OVxGIhMOxpTxzuaxn3cH%2FQz%2FRPCdf1rpnHxdesFw9KQdXECISBIhpukaOcS6mDCk%2BYDFBjqkARm9n9Iz2DYo4j69NIvNdXEN0iKarux4Pw8OmIrrln%2B%2BARVsNMXvysCylvDjbIaTDh8KZVNzUBBX2qZ0Hw7G2MkdKA1AhESlGBZiRnhIO5U52t%2BvAz51Jeh3KYGW0wXXgVkBi%2BVkebMm09sM26%2FNnPsjGih0ccRnaSf3uJRYDGWMXaImnf2uJnib%2BCE%2FgEbswFbfRPbH87UQUaOaehqQQ4bTQCOX&X-Amz-Signature=eea00e8b66b6405572092d0af3ee4fae9c6092a8d250ef73866112b1c9f43c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILY2YRP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCM1aAiY5RnZAqAlxW2cRqYiOTQDL0niBCn57NtDIDcEwIhAMJhOJMQ6heT%2Fj%2BHPM0L4z%2FGYUQC6tNGVBjI9801kF6xKv8DCHEQABoMNjM3NDIzMTgzODA1IgwIGcA9re2ZD8TEYuUq3AMy%2Fj%2BtCBM42qCrzIPbljgVVcrHZ%2BiDqcQhGEQXnQzHGGGK2NgwuZ8ELXcemqeTDqx%2Bh9YZH5sLe%2FMZrteQH8DNVw%2Bchg5Uc2%2F7r%2BmKXubEz6UClJrU7XmfxqjMrI0gk65ihG5FR%2FCfCifjZsQMN5mczS3aGsqjBjZ%2BpygyKJ2gFDL972GdD9c%2Bm8yB01jFMGPr%2BuCZIcTDYwesjzRrX%2FxCje4jYanediOrRVukPuPxqFENt%2FcqEpw0CnY9bFA8tZy4AeTQWNfBmC2hZM%2F1JfSDKsD%2F1KOKGBwKlsSOQfPdtAl2mw6p0WXrroGFSB2AzUSKrg1OTBuVIjD%2BsXThJtI4Z7OvwXUZXfCBZmAuSqlMJNM00tPHzSNN3aV%2BYjICnXqxYbzM8l0VDXDGqO711bdT4ozEGXWZdjFT4W4dQ09sSFOZjbUuS3nyoO8LsdFs0ciZoIMiQdvGFHbDf5SCxK4o%2FobwGcsowsyEq%2Fbz6LK5UvPEAnLVNUnOJO4Rkq8DRCv3eLjQrGPKcVfu6IdXv0QJ%2BDWC9nqcSfBj%2BW0%2BFz0Xuu8ocivwfiTCMsebX%2BD1OVxGIhMOxpTxzuaxn3cH%2FQz%2FRPCdf1rpnHxdesFw9KQdXECISBIhpukaOcS6mDCk%2BYDFBjqkARm9n9Iz2DYo4j69NIvNdXEN0iKarux4Pw8OmIrrln%2B%2BARVsNMXvysCylvDjbIaTDh8KZVNzUBBX2qZ0Hw7G2MkdKA1AhESlGBZiRnhIO5U52t%2BvAz51Jeh3KYGW0wXXgVkBi%2BVkebMm09sM26%2FNnPsjGih0ccRnaSf3uJRYDGWMXaImnf2uJnib%2BCE%2FgEbswFbfRPbH87UQUaOaehqQQ4bTQCOX&X-Amz-Signature=f88adde085379968ff112d0c2fe5985c65a13ec1f848977cc09d798d3993fc52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILY2YRP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCM1aAiY5RnZAqAlxW2cRqYiOTQDL0niBCn57NtDIDcEwIhAMJhOJMQ6heT%2Fj%2BHPM0L4z%2FGYUQC6tNGVBjI9801kF6xKv8DCHEQABoMNjM3NDIzMTgzODA1IgwIGcA9re2ZD8TEYuUq3AMy%2Fj%2BtCBM42qCrzIPbljgVVcrHZ%2BiDqcQhGEQXnQzHGGGK2NgwuZ8ELXcemqeTDqx%2Bh9YZH5sLe%2FMZrteQH8DNVw%2Bchg5Uc2%2F7r%2BmKXubEz6UClJrU7XmfxqjMrI0gk65ihG5FR%2FCfCifjZsQMN5mczS3aGsqjBjZ%2BpygyKJ2gFDL972GdD9c%2Bm8yB01jFMGPr%2BuCZIcTDYwesjzRrX%2FxCje4jYanediOrRVukPuPxqFENt%2FcqEpw0CnY9bFA8tZy4AeTQWNfBmC2hZM%2F1JfSDKsD%2F1KOKGBwKlsSOQfPdtAl2mw6p0WXrroGFSB2AzUSKrg1OTBuVIjD%2BsXThJtI4Z7OvwXUZXfCBZmAuSqlMJNM00tPHzSNN3aV%2BYjICnXqxYbzM8l0VDXDGqO711bdT4ozEGXWZdjFT4W4dQ09sSFOZjbUuS3nyoO8LsdFs0ciZoIMiQdvGFHbDf5SCxK4o%2FobwGcsowsyEq%2Fbz6LK5UvPEAnLVNUnOJO4Rkq8DRCv3eLjQrGPKcVfu6IdXv0QJ%2BDWC9nqcSfBj%2BW0%2BFz0Xuu8ocivwfiTCMsebX%2BD1OVxGIhMOxpTxzuaxn3cH%2FQz%2FRPCdf1rpnHxdesFw9KQdXECISBIhpukaOcS6mDCk%2BYDFBjqkARm9n9Iz2DYo4j69NIvNdXEN0iKarux4Pw8OmIrrln%2B%2BARVsNMXvysCylvDjbIaTDh8KZVNzUBBX2qZ0Hw7G2MkdKA1AhESlGBZiRnhIO5U52t%2BvAz51Jeh3KYGW0wXXgVkBi%2BVkebMm09sM26%2FNnPsjGih0ccRnaSf3uJRYDGWMXaImnf2uJnib%2BCE%2FgEbswFbfRPbH87UQUaOaehqQQ4bTQCOX&X-Amz-Signature=18f7b14b8721dc4296de225b459908a939730df8806c3f5621b7284ca777a95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILY2YRP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCM1aAiY5RnZAqAlxW2cRqYiOTQDL0niBCn57NtDIDcEwIhAMJhOJMQ6heT%2Fj%2BHPM0L4z%2FGYUQC6tNGVBjI9801kF6xKv8DCHEQABoMNjM3NDIzMTgzODA1IgwIGcA9re2ZD8TEYuUq3AMy%2Fj%2BtCBM42qCrzIPbljgVVcrHZ%2BiDqcQhGEQXnQzHGGGK2NgwuZ8ELXcemqeTDqx%2Bh9YZH5sLe%2FMZrteQH8DNVw%2Bchg5Uc2%2F7r%2BmKXubEz6UClJrU7XmfxqjMrI0gk65ihG5FR%2FCfCifjZsQMN5mczS3aGsqjBjZ%2BpygyKJ2gFDL972GdD9c%2Bm8yB01jFMGPr%2BuCZIcTDYwesjzRrX%2FxCje4jYanediOrRVukPuPxqFENt%2FcqEpw0CnY9bFA8tZy4AeTQWNfBmC2hZM%2F1JfSDKsD%2F1KOKGBwKlsSOQfPdtAl2mw6p0WXrroGFSB2AzUSKrg1OTBuVIjD%2BsXThJtI4Z7OvwXUZXfCBZmAuSqlMJNM00tPHzSNN3aV%2BYjICnXqxYbzM8l0VDXDGqO711bdT4ozEGXWZdjFT4W4dQ09sSFOZjbUuS3nyoO8LsdFs0ciZoIMiQdvGFHbDf5SCxK4o%2FobwGcsowsyEq%2Fbz6LK5UvPEAnLVNUnOJO4Rkq8DRCv3eLjQrGPKcVfu6IdXv0QJ%2BDWC9nqcSfBj%2BW0%2BFz0Xuu8ocivwfiTCMsebX%2BD1OVxGIhMOxpTxzuaxn3cH%2FQz%2FRPCdf1rpnHxdesFw9KQdXECISBIhpukaOcS6mDCk%2BYDFBjqkARm9n9Iz2DYo4j69NIvNdXEN0iKarux4Pw8OmIrrln%2B%2BARVsNMXvysCylvDjbIaTDh8KZVNzUBBX2qZ0Hw7G2MkdKA1AhESlGBZiRnhIO5U52t%2BvAz51Jeh3KYGW0wXXgVkBi%2BVkebMm09sM26%2FNnPsjGih0ccRnaSf3uJRYDGWMXaImnf2uJnib%2BCE%2FgEbswFbfRPbH87UQUaOaehqQQ4bTQCOX&X-Amz-Signature=f1e8b4563a3aeb831d806da06024e8cb176e316922338ddfe50114b77e26fcfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILY2YRP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCM1aAiY5RnZAqAlxW2cRqYiOTQDL0niBCn57NtDIDcEwIhAMJhOJMQ6heT%2Fj%2BHPM0L4z%2FGYUQC6tNGVBjI9801kF6xKv8DCHEQABoMNjM3NDIzMTgzODA1IgwIGcA9re2ZD8TEYuUq3AMy%2Fj%2BtCBM42qCrzIPbljgVVcrHZ%2BiDqcQhGEQXnQzHGGGK2NgwuZ8ELXcemqeTDqx%2Bh9YZH5sLe%2FMZrteQH8DNVw%2Bchg5Uc2%2F7r%2BmKXubEz6UClJrU7XmfxqjMrI0gk65ihG5FR%2FCfCifjZsQMN5mczS3aGsqjBjZ%2BpygyKJ2gFDL972GdD9c%2Bm8yB01jFMGPr%2BuCZIcTDYwesjzRrX%2FxCje4jYanediOrRVukPuPxqFENt%2FcqEpw0CnY9bFA8tZy4AeTQWNfBmC2hZM%2F1JfSDKsD%2F1KOKGBwKlsSOQfPdtAl2mw6p0WXrroGFSB2AzUSKrg1OTBuVIjD%2BsXThJtI4Z7OvwXUZXfCBZmAuSqlMJNM00tPHzSNN3aV%2BYjICnXqxYbzM8l0VDXDGqO711bdT4ozEGXWZdjFT4W4dQ09sSFOZjbUuS3nyoO8LsdFs0ciZoIMiQdvGFHbDf5SCxK4o%2FobwGcsowsyEq%2Fbz6LK5UvPEAnLVNUnOJO4Rkq8DRCv3eLjQrGPKcVfu6IdXv0QJ%2BDWC9nqcSfBj%2BW0%2BFz0Xuu8ocivwfiTCMsebX%2BD1OVxGIhMOxpTxzuaxn3cH%2FQz%2FRPCdf1rpnHxdesFw9KQdXECISBIhpukaOcS6mDCk%2BYDFBjqkARm9n9Iz2DYo4j69NIvNdXEN0iKarux4Pw8OmIrrln%2B%2BARVsNMXvysCylvDjbIaTDh8KZVNzUBBX2qZ0Hw7G2MkdKA1AhESlGBZiRnhIO5U52t%2BvAz51Jeh3KYGW0wXXgVkBi%2BVkebMm09sM26%2FNnPsjGih0ccRnaSf3uJRYDGWMXaImnf2uJnib%2BCE%2FgEbswFbfRPbH87UQUaOaehqQQ4bTQCOX&X-Amz-Signature=89d8aedb565f3ab672d5dae7fc6f21767bd87b7f64b8ac27ebb95f324f029623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

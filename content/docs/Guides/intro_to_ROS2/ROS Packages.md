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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJRX4NR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC5nOdl9E8rVwZOw7zTuPnArjek7LAkHIsL3q6MT3GlrAiEA3tl1Hy38SRNBGgxiqQpmDNdkAcbjl9JLSbrzDbonraQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3Y58Bt7fNElUyKVircA5iIsVnfGCJtQ%2BCjZfQr43uLyJmfPIoONjkR5FyeQnL3Tb%2BBL7hfeXUuJqf6QHYIwZEHOwmY1nyCkQpbO%2BhTuKp45bdgeEHjD3PY6qOS2SxadeHqvh10LeSnjj7RwkXScQPdLN7YIwYM%2BqUyRG6TeVFkmRiEfJQ4Dc0Q%2B2g6z%2ByTYf56M%2FMmVkexttSeRQAF8X%2FL%2BsAyJLg1bqeHGgzp%2BcQSwjaMhtx%2FjfITqtEY9zIiv2qGd4SZzK4dXTtP45Nju6TXSYURpxTfdv%2FAeeZg%2BspG9Y%2B0CrPewpujpsFEC3js31AxoDdcSfXUV3WTHsb01HX4Rm0Wy86oxnyai1MunDmP83kyCVUYqSAPkJingukOg3%2FiL7jFoGmNak3vgva%2BslERbrCRxXSZ3BySvvJfHet3FyIratLmpOqCCPI69Pz%2FHvBqpYGfjlHtzUr9YBDEe1k9VDZKnPdIm4aLVifT5dtst2n%2F%2BXaBR5gQwIv%2BB4DAfBLA74fEpEu0tK58yrxOHVUrtirStrJJxgeUV5gwPFzvun2lGNc9%2BIQU0KwYExFKn%2B3KG%2FIHpqzJFro0FybQU7A1Lb09YorNmo%2FEFj9Q43c8Mv4ZlqC%2BmPQXBO%2BDz3qOOqkkIif8kR0uDPX6MJzYj74GOqUBPgW87JwBE3dgq49h3fb7cnCNzBiiC2Oiiutf7SGoW5ehHVQMvqTm2ofZqGOz4KhsNBO%2FgZb3RlzqMkubFzUKACWzhWQp7SKPcJIScqwGgICRP3LK6eexnJtV8ZrqE4sooEY1qMehv05KoBR6%2BN7nG1wM91M%2FCz1w1Z%2BrUGl1AuhPyUQTkB%2F2Gi%2BKwBVYCzjNOGIK6dzfDPTUZs%2BFx%2FhFZouhCu8v&X-Amz-Signature=2a16111e237aaecc084f9d13958716a6811bad2cd14e6dcaf3986c8c91d7ec58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJRX4NR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC5nOdl9E8rVwZOw7zTuPnArjek7LAkHIsL3q6MT3GlrAiEA3tl1Hy38SRNBGgxiqQpmDNdkAcbjl9JLSbrzDbonraQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3Y58Bt7fNElUyKVircA5iIsVnfGCJtQ%2BCjZfQr43uLyJmfPIoONjkR5FyeQnL3Tb%2BBL7hfeXUuJqf6QHYIwZEHOwmY1nyCkQpbO%2BhTuKp45bdgeEHjD3PY6qOS2SxadeHqvh10LeSnjj7RwkXScQPdLN7YIwYM%2BqUyRG6TeVFkmRiEfJQ4Dc0Q%2B2g6z%2ByTYf56M%2FMmVkexttSeRQAF8X%2FL%2BsAyJLg1bqeHGgzp%2BcQSwjaMhtx%2FjfITqtEY9zIiv2qGd4SZzK4dXTtP45Nju6TXSYURpxTfdv%2FAeeZg%2BspG9Y%2B0CrPewpujpsFEC3js31AxoDdcSfXUV3WTHsb01HX4Rm0Wy86oxnyai1MunDmP83kyCVUYqSAPkJingukOg3%2FiL7jFoGmNak3vgva%2BslERbrCRxXSZ3BySvvJfHet3FyIratLmpOqCCPI69Pz%2FHvBqpYGfjlHtzUr9YBDEe1k9VDZKnPdIm4aLVifT5dtst2n%2F%2BXaBR5gQwIv%2BB4DAfBLA74fEpEu0tK58yrxOHVUrtirStrJJxgeUV5gwPFzvun2lGNc9%2BIQU0KwYExFKn%2B3KG%2FIHpqzJFro0FybQU7A1Lb09YorNmo%2FEFj9Q43c8Mv4ZlqC%2BmPQXBO%2BDz3qOOqkkIif8kR0uDPX6MJzYj74GOqUBPgW87JwBE3dgq49h3fb7cnCNzBiiC2Oiiutf7SGoW5ehHVQMvqTm2ofZqGOz4KhsNBO%2FgZb3RlzqMkubFzUKACWzhWQp7SKPcJIScqwGgICRP3LK6eexnJtV8ZrqE4sooEY1qMehv05KoBR6%2BN7nG1wM91M%2FCz1w1Z%2BrUGl1AuhPyUQTkB%2F2Gi%2BKwBVYCzjNOGIK6dzfDPTUZs%2BFx%2FhFZouhCu8v&X-Amz-Signature=e44037fc03e22048f4db29810c0baf221ca1c212efded3bb613211eaad027992&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJRX4NR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC5nOdl9E8rVwZOw7zTuPnArjek7LAkHIsL3q6MT3GlrAiEA3tl1Hy38SRNBGgxiqQpmDNdkAcbjl9JLSbrzDbonraQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3Y58Bt7fNElUyKVircA5iIsVnfGCJtQ%2BCjZfQr43uLyJmfPIoONjkR5FyeQnL3Tb%2BBL7hfeXUuJqf6QHYIwZEHOwmY1nyCkQpbO%2BhTuKp45bdgeEHjD3PY6qOS2SxadeHqvh10LeSnjj7RwkXScQPdLN7YIwYM%2BqUyRG6TeVFkmRiEfJQ4Dc0Q%2B2g6z%2ByTYf56M%2FMmVkexttSeRQAF8X%2FL%2BsAyJLg1bqeHGgzp%2BcQSwjaMhtx%2FjfITqtEY9zIiv2qGd4SZzK4dXTtP45Nju6TXSYURpxTfdv%2FAeeZg%2BspG9Y%2B0CrPewpujpsFEC3js31AxoDdcSfXUV3WTHsb01HX4Rm0Wy86oxnyai1MunDmP83kyCVUYqSAPkJingukOg3%2FiL7jFoGmNak3vgva%2BslERbrCRxXSZ3BySvvJfHet3FyIratLmpOqCCPI69Pz%2FHvBqpYGfjlHtzUr9YBDEe1k9VDZKnPdIm4aLVifT5dtst2n%2F%2BXaBR5gQwIv%2BB4DAfBLA74fEpEu0tK58yrxOHVUrtirStrJJxgeUV5gwPFzvun2lGNc9%2BIQU0KwYExFKn%2B3KG%2FIHpqzJFro0FybQU7A1Lb09YorNmo%2FEFj9Q43c8Mv4ZlqC%2BmPQXBO%2BDz3qOOqkkIif8kR0uDPX6MJzYj74GOqUBPgW87JwBE3dgq49h3fb7cnCNzBiiC2Oiiutf7SGoW5ehHVQMvqTm2ofZqGOz4KhsNBO%2FgZb3RlzqMkubFzUKACWzhWQp7SKPcJIScqwGgICRP3LK6eexnJtV8ZrqE4sooEY1qMehv05KoBR6%2BN7nG1wM91M%2FCz1w1Z%2BrUGl1AuhPyUQTkB%2F2Gi%2BKwBVYCzjNOGIK6dzfDPTUZs%2BFx%2FhFZouhCu8v&X-Amz-Signature=b3d66696bbcf7856191aa01c9cff8b4e7fa319d450a5883d1d5f57ccd94f2b37&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJRX4NR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC5nOdl9E8rVwZOw7zTuPnArjek7LAkHIsL3q6MT3GlrAiEA3tl1Hy38SRNBGgxiqQpmDNdkAcbjl9JLSbrzDbonraQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3Y58Bt7fNElUyKVircA5iIsVnfGCJtQ%2BCjZfQr43uLyJmfPIoONjkR5FyeQnL3Tb%2BBL7hfeXUuJqf6QHYIwZEHOwmY1nyCkQpbO%2BhTuKp45bdgeEHjD3PY6qOS2SxadeHqvh10LeSnjj7RwkXScQPdLN7YIwYM%2BqUyRG6TeVFkmRiEfJQ4Dc0Q%2B2g6z%2ByTYf56M%2FMmVkexttSeRQAF8X%2FL%2BsAyJLg1bqeHGgzp%2BcQSwjaMhtx%2FjfITqtEY9zIiv2qGd4SZzK4dXTtP45Nju6TXSYURpxTfdv%2FAeeZg%2BspG9Y%2B0CrPewpujpsFEC3js31AxoDdcSfXUV3WTHsb01HX4Rm0Wy86oxnyai1MunDmP83kyCVUYqSAPkJingukOg3%2FiL7jFoGmNak3vgva%2BslERbrCRxXSZ3BySvvJfHet3FyIratLmpOqCCPI69Pz%2FHvBqpYGfjlHtzUr9YBDEe1k9VDZKnPdIm4aLVifT5dtst2n%2F%2BXaBR5gQwIv%2BB4DAfBLA74fEpEu0tK58yrxOHVUrtirStrJJxgeUV5gwPFzvun2lGNc9%2BIQU0KwYExFKn%2B3KG%2FIHpqzJFro0FybQU7A1Lb09YorNmo%2FEFj9Q43c8Mv4ZlqC%2BmPQXBO%2BDz3qOOqkkIif8kR0uDPX6MJzYj74GOqUBPgW87JwBE3dgq49h3fb7cnCNzBiiC2Oiiutf7SGoW5ehHVQMvqTm2ofZqGOz4KhsNBO%2FgZb3RlzqMkubFzUKACWzhWQp7SKPcJIScqwGgICRP3LK6eexnJtV8ZrqE4sooEY1qMehv05KoBR6%2BN7nG1wM91M%2FCz1w1Z%2BrUGl1AuhPyUQTkB%2F2Gi%2BKwBVYCzjNOGIK6dzfDPTUZs%2BFx%2FhFZouhCu8v&X-Amz-Signature=690da18cd4ae6ba2aba677fc4c5d3a70cbf3082c3ece5c26b75294178efd916c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJRX4NR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC5nOdl9E8rVwZOw7zTuPnArjek7LAkHIsL3q6MT3GlrAiEA3tl1Hy38SRNBGgxiqQpmDNdkAcbjl9JLSbrzDbonraQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3Y58Bt7fNElUyKVircA5iIsVnfGCJtQ%2BCjZfQr43uLyJmfPIoONjkR5FyeQnL3Tb%2BBL7hfeXUuJqf6QHYIwZEHOwmY1nyCkQpbO%2BhTuKp45bdgeEHjD3PY6qOS2SxadeHqvh10LeSnjj7RwkXScQPdLN7YIwYM%2BqUyRG6TeVFkmRiEfJQ4Dc0Q%2B2g6z%2ByTYf56M%2FMmVkexttSeRQAF8X%2FL%2BsAyJLg1bqeHGgzp%2BcQSwjaMhtx%2FjfITqtEY9zIiv2qGd4SZzK4dXTtP45Nju6TXSYURpxTfdv%2FAeeZg%2BspG9Y%2B0CrPewpujpsFEC3js31AxoDdcSfXUV3WTHsb01HX4Rm0Wy86oxnyai1MunDmP83kyCVUYqSAPkJingukOg3%2FiL7jFoGmNak3vgva%2BslERbrCRxXSZ3BySvvJfHet3FyIratLmpOqCCPI69Pz%2FHvBqpYGfjlHtzUr9YBDEe1k9VDZKnPdIm4aLVifT5dtst2n%2F%2BXaBR5gQwIv%2BB4DAfBLA74fEpEu0tK58yrxOHVUrtirStrJJxgeUV5gwPFzvun2lGNc9%2BIQU0KwYExFKn%2B3KG%2FIHpqzJFro0FybQU7A1Lb09YorNmo%2FEFj9Q43c8Mv4ZlqC%2BmPQXBO%2BDz3qOOqkkIif8kR0uDPX6MJzYj74GOqUBPgW87JwBE3dgq49h3fb7cnCNzBiiC2Oiiutf7SGoW5ehHVQMvqTm2ofZqGOz4KhsNBO%2FgZb3RlzqMkubFzUKACWzhWQp7SKPcJIScqwGgICRP3LK6eexnJtV8ZrqE4sooEY1qMehv05KoBR6%2BN7nG1wM91M%2FCz1w1Z%2BrUGl1AuhPyUQTkB%2F2Gi%2BKwBVYCzjNOGIK6dzfDPTUZs%2BFx%2FhFZouhCu8v&X-Amz-Signature=d1f26a9832a6b88d912e5a594f3d4c18507d926e37d35ff85b7d12a8943bde7d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJRX4NR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC5nOdl9E8rVwZOw7zTuPnArjek7LAkHIsL3q6MT3GlrAiEA3tl1Hy38SRNBGgxiqQpmDNdkAcbjl9JLSbrzDbonraQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3Y58Bt7fNElUyKVircA5iIsVnfGCJtQ%2BCjZfQr43uLyJmfPIoONjkR5FyeQnL3Tb%2BBL7hfeXUuJqf6QHYIwZEHOwmY1nyCkQpbO%2BhTuKp45bdgeEHjD3PY6qOS2SxadeHqvh10LeSnjj7RwkXScQPdLN7YIwYM%2BqUyRG6TeVFkmRiEfJQ4Dc0Q%2B2g6z%2ByTYf56M%2FMmVkexttSeRQAF8X%2FL%2BsAyJLg1bqeHGgzp%2BcQSwjaMhtx%2FjfITqtEY9zIiv2qGd4SZzK4dXTtP45Nju6TXSYURpxTfdv%2FAeeZg%2BspG9Y%2B0CrPewpujpsFEC3js31AxoDdcSfXUV3WTHsb01HX4Rm0Wy86oxnyai1MunDmP83kyCVUYqSAPkJingukOg3%2FiL7jFoGmNak3vgva%2BslERbrCRxXSZ3BySvvJfHet3FyIratLmpOqCCPI69Pz%2FHvBqpYGfjlHtzUr9YBDEe1k9VDZKnPdIm4aLVifT5dtst2n%2F%2BXaBR5gQwIv%2BB4DAfBLA74fEpEu0tK58yrxOHVUrtirStrJJxgeUV5gwPFzvun2lGNc9%2BIQU0KwYExFKn%2B3KG%2FIHpqzJFro0FybQU7A1Lb09YorNmo%2FEFj9Q43c8Mv4ZlqC%2BmPQXBO%2BDz3qOOqkkIif8kR0uDPX6MJzYj74GOqUBPgW87JwBE3dgq49h3fb7cnCNzBiiC2Oiiutf7SGoW5ehHVQMvqTm2ofZqGOz4KhsNBO%2FgZb3RlzqMkubFzUKACWzhWQp7SKPcJIScqwGgICRP3LK6eexnJtV8ZrqE4sooEY1qMehv05KoBR6%2BN7nG1wM91M%2FCz1w1Z%2BrUGl1AuhPyUQTkB%2F2Gi%2BKwBVYCzjNOGIK6dzfDPTUZs%2BFx%2FhFZouhCu8v&X-Amz-Signature=0baeab765591f1029b4a63da3b86142c913f12fe39aba823c58506adb764f5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJRX4NR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC5nOdl9E8rVwZOw7zTuPnArjek7LAkHIsL3q6MT3GlrAiEA3tl1Hy38SRNBGgxiqQpmDNdkAcbjl9JLSbrzDbonraQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3Y58Bt7fNElUyKVircA5iIsVnfGCJtQ%2BCjZfQr43uLyJmfPIoONjkR5FyeQnL3Tb%2BBL7hfeXUuJqf6QHYIwZEHOwmY1nyCkQpbO%2BhTuKp45bdgeEHjD3PY6qOS2SxadeHqvh10LeSnjj7RwkXScQPdLN7YIwYM%2BqUyRG6TeVFkmRiEfJQ4Dc0Q%2B2g6z%2ByTYf56M%2FMmVkexttSeRQAF8X%2FL%2BsAyJLg1bqeHGgzp%2BcQSwjaMhtx%2FjfITqtEY9zIiv2qGd4SZzK4dXTtP45Nju6TXSYURpxTfdv%2FAeeZg%2BspG9Y%2B0CrPewpujpsFEC3js31AxoDdcSfXUV3WTHsb01HX4Rm0Wy86oxnyai1MunDmP83kyCVUYqSAPkJingukOg3%2FiL7jFoGmNak3vgva%2BslERbrCRxXSZ3BySvvJfHet3FyIratLmpOqCCPI69Pz%2FHvBqpYGfjlHtzUr9YBDEe1k9VDZKnPdIm4aLVifT5dtst2n%2F%2BXaBR5gQwIv%2BB4DAfBLA74fEpEu0tK58yrxOHVUrtirStrJJxgeUV5gwPFzvun2lGNc9%2BIQU0KwYExFKn%2B3KG%2FIHpqzJFro0FybQU7A1Lb09YorNmo%2FEFj9Q43c8Mv4ZlqC%2BmPQXBO%2BDz3qOOqkkIif8kR0uDPX6MJzYj74GOqUBPgW87JwBE3dgq49h3fb7cnCNzBiiC2Oiiutf7SGoW5ehHVQMvqTm2ofZqGOz4KhsNBO%2FgZb3RlzqMkubFzUKACWzhWQp7SKPcJIScqwGgICRP3LK6eexnJtV8ZrqE4sooEY1qMehv05KoBR6%2BN7nG1wM91M%2FCz1w1Z%2BrUGl1AuhPyUQTkB%2F2Gi%2BKwBVYCzjNOGIK6dzfDPTUZs%2BFx%2FhFZouhCu8v&X-Amz-Signature=315142c529edc9a71f2fbe958c8a42166e1233637598d01d72c8cd12a1ed30ec&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

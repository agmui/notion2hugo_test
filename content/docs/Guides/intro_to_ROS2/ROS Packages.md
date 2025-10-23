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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEROVDV%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkH%2F%2FOuf%2BxLX7lUnCFhmssANgWT9QsDW0cIu1bX0YEewIgCnzUmLk8LPz7fxEOxxqSP2wLOHGN7qXRYLtB0jGpKxgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLRCEm6CZkjojCHrjSrcA3kX4q8nZuANZSqT0Y8HvfFsU930cZ%2Fq8awWC0x7J9773OXk%2BR3l47s3fpxq5P0oSkZs9sLUdjnI7qSDDxv4eUxwPtQWxK3UOtC7hrgHSCec1V%2FiJ2jRuBWQytz%2B3T50qBeLYo7ioyoVr4dvAwnz4ujLWTwcCsdDgZBcFTGa4Ff9taJbsUhX3DQLf7XYvgC3GPFEWndudoaUeuoOrIkXdZZLRd%2BH0t65UU6wTpRQGfeCEOltwgJSpqwl2pDZLlLMhb7un5H4wgImQ%2FnOQcp8N5wUuBqKNlTJh3JaYcNB6pGs77F%2BNwLWa%2B6BWaY856CVxf6PbFzpWt9kaqt4SC%2F201TLd0duPG6UhdjYrJPDnRBn9AFXOpJEpHh2CHL7kWzZXfFo4WICYqnga48PTRMz5xxHP9cHOPVn%2BXIxZOcBLYs2Tav04h9RTU0CnXKrcfbPJerRQ9rlSEXmuCSxRmhMIHmqtPCLyqDMzlpRu9S86rUgVwrgBcLeNEyAIZA9Fd%2BT9TFX93fuVb%2FNv%2BV%2Bwyj89px4hzFju0x2jQQxKaoSUHCXESB3k5XCENg2k%2FGxK%2Bvmx84wiFX%2BATvu8ryTtX0hlZCVUlX0ZoaNJNEFRkp3yN%2F61sS5FBKPjcSPI3g3MJPw5ccGOqUBUF9TI1sa5XNxf1r%2BEmwofq8%2BWsw1ULjO9vTrueuJdLF8rPpF6CwjhhxhlfcLv92NalIvjLty07skytNGFdDsxXLZ6Kv%2FXxVvKAHxOZExtfMxB28BFRYnb6pfmmVL22D%2BUl%2FReDdIz5XDx07DbTew2OK3JDtDH%2FIcQ%2FWnyxqoEDi5CfSluNdxs40gt1fGzswiBH4dm56rMuOh8U9QFPTa4HkZSjRf&X-Amz-Signature=fd720902038c048669ed1afce283e7bb58285242173e4bcaabf2b95d68a168cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEROVDV%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkH%2F%2FOuf%2BxLX7lUnCFhmssANgWT9QsDW0cIu1bX0YEewIgCnzUmLk8LPz7fxEOxxqSP2wLOHGN7qXRYLtB0jGpKxgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLRCEm6CZkjojCHrjSrcA3kX4q8nZuANZSqT0Y8HvfFsU930cZ%2Fq8awWC0x7J9773OXk%2BR3l47s3fpxq5P0oSkZs9sLUdjnI7qSDDxv4eUxwPtQWxK3UOtC7hrgHSCec1V%2FiJ2jRuBWQytz%2B3T50qBeLYo7ioyoVr4dvAwnz4ujLWTwcCsdDgZBcFTGa4Ff9taJbsUhX3DQLf7XYvgC3GPFEWndudoaUeuoOrIkXdZZLRd%2BH0t65UU6wTpRQGfeCEOltwgJSpqwl2pDZLlLMhb7un5H4wgImQ%2FnOQcp8N5wUuBqKNlTJh3JaYcNB6pGs77F%2BNwLWa%2B6BWaY856CVxf6PbFzpWt9kaqt4SC%2F201TLd0duPG6UhdjYrJPDnRBn9AFXOpJEpHh2CHL7kWzZXfFo4WICYqnga48PTRMz5xxHP9cHOPVn%2BXIxZOcBLYs2Tav04h9RTU0CnXKrcfbPJerRQ9rlSEXmuCSxRmhMIHmqtPCLyqDMzlpRu9S86rUgVwrgBcLeNEyAIZA9Fd%2BT9TFX93fuVb%2FNv%2BV%2Bwyj89px4hzFju0x2jQQxKaoSUHCXESB3k5XCENg2k%2FGxK%2Bvmx84wiFX%2BATvu8ryTtX0hlZCVUlX0ZoaNJNEFRkp3yN%2F61sS5FBKPjcSPI3g3MJPw5ccGOqUBUF9TI1sa5XNxf1r%2BEmwofq8%2BWsw1ULjO9vTrueuJdLF8rPpF6CwjhhxhlfcLv92NalIvjLty07skytNGFdDsxXLZ6Kv%2FXxVvKAHxOZExtfMxB28BFRYnb6pfmmVL22D%2BUl%2FReDdIz5XDx07DbTew2OK3JDtDH%2FIcQ%2FWnyxqoEDi5CfSluNdxs40gt1fGzswiBH4dm56rMuOh8U9QFPTa4HkZSjRf&X-Amz-Signature=7ab8333064bbf136dab6160cefb9650144b3ba5799b21bf028a7b980920f4ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEROVDV%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkH%2F%2FOuf%2BxLX7lUnCFhmssANgWT9QsDW0cIu1bX0YEewIgCnzUmLk8LPz7fxEOxxqSP2wLOHGN7qXRYLtB0jGpKxgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLRCEm6CZkjojCHrjSrcA3kX4q8nZuANZSqT0Y8HvfFsU930cZ%2Fq8awWC0x7J9773OXk%2BR3l47s3fpxq5P0oSkZs9sLUdjnI7qSDDxv4eUxwPtQWxK3UOtC7hrgHSCec1V%2FiJ2jRuBWQytz%2B3T50qBeLYo7ioyoVr4dvAwnz4ujLWTwcCsdDgZBcFTGa4Ff9taJbsUhX3DQLf7XYvgC3GPFEWndudoaUeuoOrIkXdZZLRd%2BH0t65UU6wTpRQGfeCEOltwgJSpqwl2pDZLlLMhb7un5H4wgImQ%2FnOQcp8N5wUuBqKNlTJh3JaYcNB6pGs77F%2BNwLWa%2B6BWaY856CVxf6PbFzpWt9kaqt4SC%2F201TLd0duPG6UhdjYrJPDnRBn9AFXOpJEpHh2CHL7kWzZXfFo4WICYqnga48PTRMz5xxHP9cHOPVn%2BXIxZOcBLYs2Tav04h9RTU0CnXKrcfbPJerRQ9rlSEXmuCSxRmhMIHmqtPCLyqDMzlpRu9S86rUgVwrgBcLeNEyAIZA9Fd%2BT9TFX93fuVb%2FNv%2BV%2Bwyj89px4hzFju0x2jQQxKaoSUHCXESB3k5XCENg2k%2FGxK%2Bvmx84wiFX%2BATvu8ryTtX0hlZCVUlX0ZoaNJNEFRkp3yN%2F61sS5FBKPjcSPI3g3MJPw5ccGOqUBUF9TI1sa5XNxf1r%2BEmwofq8%2BWsw1ULjO9vTrueuJdLF8rPpF6CwjhhxhlfcLv92NalIvjLty07skytNGFdDsxXLZ6Kv%2FXxVvKAHxOZExtfMxB28BFRYnb6pfmmVL22D%2BUl%2FReDdIz5XDx07DbTew2OK3JDtDH%2FIcQ%2FWnyxqoEDi5CfSluNdxs40gt1fGzswiBH4dm56rMuOh8U9QFPTa4HkZSjRf&X-Amz-Signature=e31e6cd753803567bfe3260f5639e2af6954348156d413ce80a58d3f7da49a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEROVDV%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkH%2F%2FOuf%2BxLX7lUnCFhmssANgWT9QsDW0cIu1bX0YEewIgCnzUmLk8LPz7fxEOxxqSP2wLOHGN7qXRYLtB0jGpKxgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLRCEm6CZkjojCHrjSrcA3kX4q8nZuANZSqT0Y8HvfFsU930cZ%2Fq8awWC0x7J9773OXk%2BR3l47s3fpxq5P0oSkZs9sLUdjnI7qSDDxv4eUxwPtQWxK3UOtC7hrgHSCec1V%2FiJ2jRuBWQytz%2B3T50qBeLYo7ioyoVr4dvAwnz4ujLWTwcCsdDgZBcFTGa4Ff9taJbsUhX3DQLf7XYvgC3GPFEWndudoaUeuoOrIkXdZZLRd%2BH0t65UU6wTpRQGfeCEOltwgJSpqwl2pDZLlLMhb7un5H4wgImQ%2FnOQcp8N5wUuBqKNlTJh3JaYcNB6pGs77F%2BNwLWa%2B6BWaY856CVxf6PbFzpWt9kaqt4SC%2F201TLd0duPG6UhdjYrJPDnRBn9AFXOpJEpHh2CHL7kWzZXfFo4WICYqnga48PTRMz5xxHP9cHOPVn%2BXIxZOcBLYs2Tav04h9RTU0CnXKrcfbPJerRQ9rlSEXmuCSxRmhMIHmqtPCLyqDMzlpRu9S86rUgVwrgBcLeNEyAIZA9Fd%2BT9TFX93fuVb%2FNv%2BV%2Bwyj89px4hzFju0x2jQQxKaoSUHCXESB3k5XCENg2k%2FGxK%2Bvmx84wiFX%2BATvu8ryTtX0hlZCVUlX0ZoaNJNEFRkp3yN%2F61sS5FBKPjcSPI3g3MJPw5ccGOqUBUF9TI1sa5XNxf1r%2BEmwofq8%2BWsw1ULjO9vTrueuJdLF8rPpF6CwjhhxhlfcLv92NalIvjLty07skytNGFdDsxXLZ6Kv%2FXxVvKAHxOZExtfMxB28BFRYnb6pfmmVL22D%2BUl%2FReDdIz5XDx07DbTew2OK3JDtDH%2FIcQ%2FWnyxqoEDi5CfSluNdxs40gt1fGzswiBH4dm56rMuOh8U9QFPTa4HkZSjRf&X-Amz-Signature=9b1722be41a9088dc20a92c263ce0352dc7fb0a3a628564ac9aaa775d70963e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEROVDV%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkH%2F%2FOuf%2BxLX7lUnCFhmssANgWT9QsDW0cIu1bX0YEewIgCnzUmLk8LPz7fxEOxxqSP2wLOHGN7qXRYLtB0jGpKxgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLRCEm6CZkjojCHrjSrcA3kX4q8nZuANZSqT0Y8HvfFsU930cZ%2Fq8awWC0x7J9773OXk%2BR3l47s3fpxq5P0oSkZs9sLUdjnI7qSDDxv4eUxwPtQWxK3UOtC7hrgHSCec1V%2FiJ2jRuBWQytz%2B3T50qBeLYo7ioyoVr4dvAwnz4ujLWTwcCsdDgZBcFTGa4Ff9taJbsUhX3DQLf7XYvgC3GPFEWndudoaUeuoOrIkXdZZLRd%2BH0t65UU6wTpRQGfeCEOltwgJSpqwl2pDZLlLMhb7un5H4wgImQ%2FnOQcp8N5wUuBqKNlTJh3JaYcNB6pGs77F%2BNwLWa%2B6BWaY856CVxf6PbFzpWt9kaqt4SC%2F201TLd0duPG6UhdjYrJPDnRBn9AFXOpJEpHh2CHL7kWzZXfFo4WICYqnga48PTRMz5xxHP9cHOPVn%2BXIxZOcBLYs2Tav04h9RTU0CnXKrcfbPJerRQ9rlSEXmuCSxRmhMIHmqtPCLyqDMzlpRu9S86rUgVwrgBcLeNEyAIZA9Fd%2BT9TFX93fuVb%2FNv%2BV%2Bwyj89px4hzFju0x2jQQxKaoSUHCXESB3k5XCENg2k%2FGxK%2Bvmx84wiFX%2BATvu8ryTtX0hlZCVUlX0ZoaNJNEFRkp3yN%2F61sS5FBKPjcSPI3g3MJPw5ccGOqUBUF9TI1sa5XNxf1r%2BEmwofq8%2BWsw1ULjO9vTrueuJdLF8rPpF6CwjhhxhlfcLv92NalIvjLty07skytNGFdDsxXLZ6Kv%2FXxVvKAHxOZExtfMxB28BFRYnb6pfmmVL22D%2BUl%2FReDdIz5XDx07DbTew2OK3JDtDH%2FIcQ%2FWnyxqoEDi5CfSluNdxs40gt1fGzswiBH4dm56rMuOh8U9QFPTa4HkZSjRf&X-Amz-Signature=cd141062068be8204f10192c9c0d3589dc62d5b12b9c91b7952c6548d6174217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEROVDV%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkH%2F%2FOuf%2BxLX7lUnCFhmssANgWT9QsDW0cIu1bX0YEewIgCnzUmLk8LPz7fxEOxxqSP2wLOHGN7qXRYLtB0jGpKxgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLRCEm6CZkjojCHrjSrcA3kX4q8nZuANZSqT0Y8HvfFsU930cZ%2Fq8awWC0x7J9773OXk%2BR3l47s3fpxq5P0oSkZs9sLUdjnI7qSDDxv4eUxwPtQWxK3UOtC7hrgHSCec1V%2FiJ2jRuBWQytz%2B3T50qBeLYo7ioyoVr4dvAwnz4ujLWTwcCsdDgZBcFTGa4Ff9taJbsUhX3DQLf7XYvgC3GPFEWndudoaUeuoOrIkXdZZLRd%2BH0t65UU6wTpRQGfeCEOltwgJSpqwl2pDZLlLMhb7un5H4wgImQ%2FnOQcp8N5wUuBqKNlTJh3JaYcNB6pGs77F%2BNwLWa%2B6BWaY856CVxf6PbFzpWt9kaqt4SC%2F201TLd0duPG6UhdjYrJPDnRBn9AFXOpJEpHh2CHL7kWzZXfFo4WICYqnga48PTRMz5xxHP9cHOPVn%2BXIxZOcBLYs2Tav04h9RTU0CnXKrcfbPJerRQ9rlSEXmuCSxRmhMIHmqtPCLyqDMzlpRu9S86rUgVwrgBcLeNEyAIZA9Fd%2BT9TFX93fuVb%2FNv%2BV%2Bwyj89px4hzFju0x2jQQxKaoSUHCXESB3k5XCENg2k%2FGxK%2Bvmx84wiFX%2BATvu8ryTtX0hlZCVUlX0ZoaNJNEFRkp3yN%2F61sS5FBKPjcSPI3g3MJPw5ccGOqUBUF9TI1sa5XNxf1r%2BEmwofq8%2BWsw1ULjO9vTrueuJdLF8rPpF6CwjhhxhlfcLv92NalIvjLty07skytNGFdDsxXLZ6Kv%2FXxVvKAHxOZExtfMxB28BFRYnb6pfmmVL22D%2BUl%2FReDdIz5XDx07DbTew2OK3JDtDH%2FIcQ%2FWnyxqoEDi5CfSluNdxs40gt1fGzswiBH4dm56rMuOh8U9QFPTa4HkZSjRf&X-Amz-Signature=6e9390bb39dfdbcbf3ac9118f4aaae70400451335d4f1a65e8a131ba6c243d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEROVDV%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkH%2F%2FOuf%2BxLX7lUnCFhmssANgWT9QsDW0cIu1bX0YEewIgCnzUmLk8LPz7fxEOxxqSP2wLOHGN7qXRYLtB0jGpKxgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLRCEm6CZkjojCHrjSrcA3kX4q8nZuANZSqT0Y8HvfFsU930cZ%2Fq8awWC0x7J9773OXk%2BR3l47s3fpxq5P0oSkZs9sLUdjnI7qSDDxv4eUxwPtQWxK3UOtC7hrgHSCec1V%2FiJ2jRuBWQytz%2B3T50qBeLYo7ioyoVr4dvAwnz4ujLWTwcCsdDgZBcFTGa4Ff9taJbsUhX3DQLf7XYvgC3GPFEWndudoaUeuoOrIkXdZZLRd%2BH0t65UU6wTpRQGfeCEOltwgJSpqwl2pDZLlLMhb7un5H4wgImQ%2FnOQcp8N5wUuBqKNlTJh3JaYcNB6pGs77F%2BNwLWa%2B6BWaY856CVxf6PbFzpWt9kaqt4SC%2F201TLd0duPG6UhdjYrJPDnRBn9AFXOpJEpHh2CHL7kWzZXfFo4WICYqnga48PTRMz5xxHP9cHOPVn%2BXIxZOcBLYs2Tav04h9RTU0CnXKrcfbPJerRQ9rlSEXmuCSxRmhMIHmqtPCLyqDMzlpRu9S86rUgVwrgBcLeNEyAIZA9Fd%2BT9TFX93fuVb%2FNv%2BV%2Bwyj89px4hzFju0x2jQQxKaoSUHCXESB3k5XCENg2k%2FGxK%2Bvmx84wiFX%2BATvu8ryTtX0hlZCVUlX0ZoaNJNEFRkp3yN%2F61sS5FBKPjcSPI3g3MJPw5ccGOqUBUF9TI1sa5XNxf1r%2BEmwofq8%2BWsw1ULjO9vTrueuJdLF8rPpF6CwjhhxhlfcLv92NalIvjLty07skytNGFdDsxXLZ6Kv%2FXxVvKAHxOZExtfMxB28BFRYnb6pfmmVL22D%2BUl%2FReDdIz5XDx07DbTew2OK3JDtDH%2FIcQ%2FWnyxqoEDi5CfSluNdxs40gt1fGzswiBH4dm56rMuOh8U9QFPTa4HkZSjRf&X-Amz-Signature=44d8f54c2007a72b956d2b45eda6c8db1833cfbbeded6df919cda1e169546f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

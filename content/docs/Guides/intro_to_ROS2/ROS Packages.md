---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEAGFTC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCACFvbmIJUnXTbXNGNuxRNhuxhexiY9oUDpiadX7XCXAIhAJuVir6mKv9ZF%2BTiYGNnVy8svmvrNfZJmMwafhLBhab1Kv8DCGwQABoMNjM3NDIzMTgzODA1IgwWf6hUL8f0ocuWb%2BIq3APueHemJissUWHKA%2FCKu1Hb2UBMEbMkrp9Ng1tP%2FMdJje0EMTSGp1ilEXFDsbioAutepkRD7pg%2BiTcbqgF3E831ABOXdk3tWcO5ClqC7%2Fd6uPFVRnUJzPSV2PfA%2BL5qvwTH0tFYN5aV63T9wbvW5zU2keZrrmn91upjc0ayNjArK8pxcJpWOfbChNOcHeVY1wVTDAz1MDIHbOt6vtquBzSo60282vagjNvXzqt1QvDQGHiyc2cwfwArn3IQH3%2BJxMixHVisRSbSQvbU5qIkLxLDYkQxE53rAKe6eALPuyz08Ei0nusxSQCHliI3bDHVIvOoe4scj7uxe%2BnZMLEyghy3EBrlKzhgtvhqTJW22K6VnRRdyDRCOWGyYCiEam1StQbiMP0qIMWveRiLH4aTGZ2aIV%2F4MgwVRWHoBLsz4jJ2R525CefCCrGeV1FpqcFjw4Pql5%2Fz%2BdmyKegRkYiR7S7Ok4qDVBmv59k2NKvtoRuXpA2OwupExdAdjz%2FjpO9RRV4YHa%2FRv%2FdnUl06RTviIpplh6RsGJbah7Bmy6FPL5tLS6%2ByJvvlSXc9NZlwoX8XPsdl0XSDeahzd5jg0oNCOYBGDRh0WkevesFYXNK9FkkRBqKALqtTW2ngsFUpLDC3yOHDBjqkAZvyC6rAtYoscfOYfrUIUnSrh1DwNmq2EChIljh6MLJEuceMWubjHnmMxBDhoTTX3X1woINoCoDNpB8CCdk0g5NKTbRb7lod6TmQVEjAssMEODQrqKaQVWVzjCXQqbfBLnINpnppyhwt1C4vB4TBrUTQPdI5CGiQT%2F9bkHXalvi2p3xtSIUxmmnPI5Om%2BBPvHRi%2B0ivRlaIZHhYnLfZt%2BnVR1FS8&X-Amz-Signature=0b84134c518297a0d93b6c2ededf69fb01984c12bac7d524160f8aa100a80019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEAGFTC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCACFvbmIJUnXTbXNGNuxRNhuxhexiY9oUDpiadX7XCXAIhAJuVir6mKv9ZF%2BTiYGNnVy8svmvrNfZJmMwafhLBhab1Kv8DCGwQABoMNjM3NDIzMTgzODA1IgwWf6hUL8f0ocuWb%2BIq3APueHemJissUWHKA%2FCKu1Hb2UBMEbMkrp9Ng1tP%2FMdJje0EMTSGp1ilEXFDsbioAutepkRD7pg%2BiTcbqgF3E831ABOXdk3tWcO5ClqC7%2Fd6uPFVRnUJzPSV2PfA%2BL5qvwTH0tFYN5aV63T9wbvW5zU2keZrrmn91upjc0ayNjArK8pxcJpWOfbChNOcHeVY1wVTDAz1MDIHbOt6vtquBzSo60282vagjNvXzqt1QvDQGHiyc2cwfwArn3IQH3%2BJxMixHVisRSbSQvbU5qIkLxLDYkQxE53rAKe6eALPuyz08Ei0nusxSQCHliI3bDHVIvOoe4scj7uxe%2BnZMLEyghy3EBrlKzhgtvhqTJW22K6VnRRdyDRCOWGyYCiEam1StQbiMP0qIMWveRiLH4aTGZ2aIV%2F4MgwVRWHoBLsz4jJ2R525CefCCrGeV1FpqcFjw4Pql5%2Fz%2BdmyKegRkYiR7S7Ok4qDVBmv59k2NKvtoRuXpA2OwupExdAdjz%2FjpO9RRV4YHa%2FRv%2FdnUl06RTviIpplh6RsGJbah7Bmy6FPL5tLS6%2ByJvvlSXc9NZlwoX8XPsdl0XSDeahzd5jg0oNCOYBGDRh0WkevesFYXNK9FkkRBqKALqtTW2ngsFUpLDC3yOHDBjqkAZvyC6rAtYoscfOYfrUIUnSrh1DwNmq2EChIljh6MLJEuceMWubjHnmMxBDhoTTX3X1woINoCoDNpB8CCdk0g5NKTbRb7lod6TmQVEjAssMEODQrqKaQVWVzjCXQqbfBLnINpnppyhwt1C4vB4TBrUTQPdI5CGiQT%2F9bkHXalvi2p3xtSIUxmmnPI5Om%2BBPvHRi%2B0ivRlaIZHhYnLfZt%2BnVR1FS8&X-Amz-Signature=0aad06c5e0d3321f3334161ec59a5f22d4d336ee9f4dfe2dfe0761e38f17abf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEAGFTC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCACFvbmIJUnXTbXNGNuxRNhuxhexiY9oUDpiadX7XCXAIhAJuVir6mKv9ZF%2BTiYGNnVy8svmvrNfZJmMwafhLBhab1Kv8DCGwQABoMNjM3NDIzMTgzODA1IgwWf6hUL8f0ocuWb%2BIq3APueHemJissUWHKA%2FCKu1Hb2UBMEbMkrp9Ng1tP%2FMdJje0EMTSGp1ilEXFDsbioAutepkRD7pg%2BiTcbqgF3E831ABOXdk3tWcO5ClqC7%2Fd6uPFVRnUJzPSV2PfA%2BL5qvwTH0tFYN5aV63T9wbvW5zU2keZrrmn91upjc0ayNjArK8pxcJpWOfbChNOcHeVY1wVTDAz1MDIHbOt6vtquBzSo60282vagjNvXzqt1QvDQGHiyc2cwfwArn3IQH3%2BJxMixHVisRSbSQvbU5qIkLxLDYkQxE53rAKe6eALPuyz08Ei0nusxSQCHliI3bDHVIvOoe4scj7uxe%2BnZMLEyghy3EBrlKzhgtvhqTJW22K6VnRRdyDRCOWGyYCiEam1StQbiMP0qIMWveRiLH4aTGZ2aIV%2F4MgwVRWHoBLsz4jJ2R525CefCCrGeV1FpqcFjw4Pql5%2Fz%2BdmyKegRkYiR7S7Ok4qDVBmv59k2NKvtoRuXpA2OwupExdAdjz%2FjpO9RRV4YHa%2FRv%2FdnUl06RTviIpplh6RsGJbah7Bmy6FPL5tLS6%2ByJvvlSXc9NZlwoX8XPsdl0XSDeahzd5jg0oNCOYBGDRh0WkevesFYXNK9FkkRBqKALqtTW2ngsFUpLDC3yOHDBjqkAZvyC6rAtYoscfOYfrUIUnSrh1DwNmq2EChIljh6MLJEuceMWubjHnmMxBDhoTTX3X1woINoCoDNpB8CCdk0g5NKTbRb7lod6TmQVEjAssMEODQrqKaQVWVzjCXQqbfBLnINpnppyhwt1C4vB4TBrUTQPdI5CGiQT%2F9bkHXalvi2p3xtSIUxmmnPI5Om%2BBPvHRi%2B0ivRlaIZHhYnLfZt%2BnVR1FS8&X-Amz-Signature=dc2bd29ecfd1cb48841a85370f8bb9ccb0923c7c0f4cc28b86dc8c9d7e564da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEAGFTC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCACFvbmIJUnXTbXNGNuxRNhuxhexiY9oUDpiadX7XCXAIhAJuVir6mKv9ZF%2BTiYGNnVy8svmvrNfZJmMwafhLBhab1Kv8DCGwQABoMNjM3NDIzMTgzODA1IgwWf6hUL8f0ocuWb%2BIq3APueHemJissUWHKA%2FCKu1Hb2UBMEbMkrp9Ng1tP%2FMdJje0EMTSGp1ilEXFDsbioAutepkRD7pg%2BiTcbqgF3E831ABOXdk3tWcO5ClqC7%2Fd6uPFVRnUJzPSV2PfA%2BL5qvwTH0tFYN5aV63T9wbvW5zU2keZrrmn91upjc0ayNjArK8pxcJpWOfbChNOcHeVY1wVTDAz1MDIHbOt6vtquBzSo60282vagjNvXzqt1QvDQGHiyc2cwfwArn3IQH3%2BJxMixHVisRSbSQvbU5qIkLxLDYkQxE53rAKe6eALPuyz08Ei0nusxSQCHliI3bDHVIvOoe4scj7uxe%2BnZMLEyghy3EBrlKzhgtvhqTJW22K6VnRRdyDRCOWGyYCiEam1StQbiMP0qIMWveRiLH4aTGZ2aIV%2F4MgwVRWHoBLsz4jJ2R525CefCCrGeV1FpqcFjw4Pql5%2Fz%2BdmyKegRkYiR7S7Ok4qDVBmv59k2NKvtoRuXpA2OwupExdAdjz%2FjpO9RRV4YHa%2FRv%2FdnUl06RTviIpplh6RsGJbah7Bmy6FPL5tLS6%2ByJvvlSXc9NZlwoX8XPsdl0XSDeahzd5jg0oNCOYBGDRh0WkevesFYXNK9FkkRBqKALqtTW2ngsFUpLDC3yOHDBjqkAZvyC6rAtYoscfOYfrUIUnSrh1DwNmq2EChIljh6MLJEuceMWubjHnmMxBDhoTTX3X1woINoCoDNpB8CCdk0g5NKTbRb7lod6TmQVEjAssMEODQrqKaQVWVzjCXQqbfBLnINpnppyhwt1C4vB4TBrUTQPdI5CGiQT%2F9bkHXalvi2p3xtSIUxmmnPI5Om%2BBPvHRi%2B0ivRlaIZHhYnLfZt%2BnVR1FS8&X-Amz-Signature=1f5aefe2d2d3cd962566bedc6ef1da4234616b915dcf75d9cf5a6f2e88717b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEAGFTC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCACFvbmIJUnXTbXNGNuxRNhuxhexiY9oUDpiadX7XCXAIhAJuVir6mKv9ZF%2BTiYGNnVy8svmvrNfZJmMwafhLBhab1Kv8DCGwQABoMNjM3NDIzMTgzODA1IgwWf6hUL8f0ocuWb%2BIq3APueHemJissUWHKA%2FCKu1Hb2UBMEbMkrp9Ng1tP%2FMdJje0EMTSGp1ilEXFDsbioAutepkRD7pg%2BiTcbqgF3E831ABOXdk3tWcO5ClqC7%2Fd6uPFVRnUJzPSV2PfA%2BL5qvwTH0tFYN5aV63T9wbvW5zU2keZrrmn91upjc0ayNjArK8pxcJpWOfbChNOcHeVY1wVTDAz1MDIHbOt6vtquBzSo60282vagjNvXzqt1QvDQGHiyc2cwfwArn3IQH3%2BJxMixHVisRSbSQvbU5qIkLxLDYkQxE53rAKe6eALPuyz08Ei0nusxSQCHliI3bDHVIvOoe4scj7uxe%2BnZMLEyghy3EBrlKzhgtvhqTJW22K6VnRRdyDRCOWGyYCiEam1StQbiMP0qIMWveRiLH4aTGZ2aIV%2F4MgwVRWHoBLsz4jJ2R525CefCCrGeV1FpqcFjw4Pql5%2Fz%2BdmyKegRkYiR7S7Ok4qDVBmv59k2NKvtoRuXpA2OwupExdAdjz%2FjpO9RRV4YHa%2FRv%2FdnUl06RTviIpplh6RsGJbah7Bmy6FPL5tLS6%2ByJvvlSXc9NZlwoX8XPsdl0XSDeahzd5jg0oNCOYBGDRh0WkevesFYXNK9FkkRBqKALqtTW2ngsFUpLDC3yOHDBjqkAZvyC6rAtYoscfOYfrUIUnSrh1DwNmq2EChIljh6MLJEuceMWubjHnmMxBDhoTTX3X1woINoCoDNpB8CCdk0g5NKTbRb7lod6TmQVEjAssMEODQrqKaQVWVzjCXQqbfBLnINpnppyhwt1C4vB4TBrUTQPdI5CGiQT%2F9bkHXalvi2p3xtSIUxmmnPI5Om%2BBPvHRi%2B0ivRlaIZHhYnLfZt%2BnVR1FS8&X-Amz-Signature=a6d05f6e8b7797a722501173808c3ce6db5954b77bb5c5c86cc34ca5351c8d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEAGFTC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCACFvbmIJUnXTbXNGNuxRNhuxhexiY9oUDpiadX7XCXAIhAJuVir6mKv9ZF%2BTiYGNnVy8svmvrNfZJmMwafhLBhab1Kv8DCGwQABoMNjM3NDIzMTgzODA1IgwWf6hUL8f0ocuWb%2BIq3APueHemJissUWHKA%2FCKu1Hb2UBMEbMkrp9Ng1tP%2FMdJje0EMTSGp1ilEXFDsbioAutepkRD7pg%2BiTcbqgF3E831ABOXdk3tWcO5ClqC7%2Fd6uPFVRnUJzPSV2PfA%2BL5qvwTH0tFYN5aV63T9wbvW5zU2keZrrmn91upjc0ayNjArK8pxcJpWOfbChNOcHeVY1wVTDAz1MDIHbOt6vtquBzSo60282vagjNvXzqt1QvDQGHiyc2cwfwArn3IQH3%2BJxMixHVisRSbSQvbU5qIkLxLDYkQxE53rAKe6eALPuyz08Ei0nusxSQCHliI3bDHVIvOoe4scj7uxe%2BnZMLEyghy3EBrlKzhgtvhqTJW22K6VnRRdyDRCOWGyYCiEam1StQbiMP0qIMWveRiLH4aTGZ2aIV%2F4MgwVRWHoBLsz4jJ2R525CefCCrGeV1FpqcFjw4Pql5%2Fz%2BdmyKegRkYiR7S7Ok4qDVBmv59k2NKvtoRuXpA2OwupExdAdjz%2FjpO9RRV4YHa%2FRv%2FdnUl06RTviIpplh6RsGJbah7Bmy6FPL5tLS6%2ByJvvlSXc9NZlwoX8XPsdl0XSDeahzd5jg0oNCOYBGDRh0WkevesFYXNK9FkkRBqKALqtTW2ngsFUpLDC3yOHDBjqkAZvyC6rAtYoscfOYfrUIUnSrh1DwNmq2EChIljh6MLJEuceMWubjHnmMxBDhoTTX3X1woINoCoDNpB8CCdk0g5NKTbRb7lod6TmQVEjAssMEODQrqKaQVWVzjCXQqbfBLnINpnppyhwt1C4vB4TBrUTQPdI5CGiQT%2F9bkHXalvi2p3xtSIUxmmnPI5Om%2BBPvHRi%2B0ivRlaIZHhYnLfZt%2BnVR1FS8&X-Amz-Signature=6ab7d696ba8848f395cec039d3ccf07c455f337f91d0818034844cedd94645d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEAGFTC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCACFvbmIJUnXTbXNGNuxRNhuxhexiY9oUDpiadX7XCXAIhAJuVir6mKv9ZF%2BTiYGNnVy8svmvrNfZJmMwafhLBhab1Kv8DCGwQABoMNjM3NDIzMTgzODA1IgwWf6hUL8f0ocuWb%2BIq3APueHemJissUWHKA%2FCKu1Hb2UBMEbMkrp9Ng1tP%2FMdJje0EMTSGp1ilEXFDsbioAutepkRD7pg%2BiTcbqgF3E831ABOXdk3tWcO5ClqC7%2Fd6uPFVRnUJzPSV2PfA%2BL5qvwTH0tFYN5aV63T9wbvW5zU2keZrrmn91upjc0ayNjArK8pxcJpWOfbChNOcHeVY1wVTDAz1MDIHbOt6vtquBzSo60282vagjNvXzqt1QvDQGHiyc2cwfwArn3IQH3%2BJxMixHVisRSbSQvbU5qIkLxLDYkQxE53rAKe6eALPuyz08Ei0nusxSQCHliI3bDHVIvOoe4scj7uxe%2BnZMLEyghy3EBrlKzhgtvhqTJW22K6VnRRdyDRCOWGyYCiEam1StQbiMP0qIMWveRiLH4aTGZ2aIV%2F4MgwVRWHoBLsz4jJ2R525CefCCrGeV1FpqcFjw4Pql5%2Fz%2BdmyKegRkYiR7S7Ok4qDVBmv59k2NKvtoRuXpA2OwupExdAdjz%2FjpO9RRV4YHa%2FRv%2FdnUl06RTviIpplh6RsGJbah7Bmy6FPL5tLS6%2ByJvvlSXc9NZlwoX8XPsdl0XSDeahzd5jg0oNCOYBGDRh0WkevesFYXNK9FkkRBqKALqtTW2ngsFUpLDC3yOHDBjqkAZvyC6rAtYoscfOYfrUIUnSrh1DwNmq2EChIljh6MLJEuceMWubjHnmMxBDhoTTX3X1woINoCoDNpB8CCdk0g5NKTbRb7lod6TmQVEjAssMEODQrqKaQVWVzjCXQqbfBLnINpnppyhwt1C4vB4TBrUTQPdI5CGiQT%2F9bkHXalvi2p3xtSIUxmmnPI5Om%2BBPvHRi%2B0ivRlaIZHhYnLfZt%2BnVR1FS8&X-Amz-Signature=746adeeb7f0f653591234d256e18765f9e5494f78d3e548c657982022a07ec08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HYIDFF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Q%2B3%2BVgz4Hxh9MRpAMiLCfsmGIHZMYQSUdL%2Ba6Il5ywIhAIlIWiZFkt%2FXpsLXiKeuH0ykJnzTGJ2ZEseh1Ymq7iqsKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr7Fm1k7ZjiWf2hdgq3AMeXevoL%2FXZjNJWqhn1XHORjTasXGdhc%2BVWHiCqqFEGQXXyeLPT3dQM%2BZYoh46ES8hCjBvGVSIEzL94SCDvA8w0CSKN6Fz3HCAwrK5vdrxJcxlJhDQM3PWjqM%2Bj6jUFTCufvqRiWMjMeO08tIA9EQkxJPm9uN7mte4HCQDcIpEU2hddmrC4d3%2Fl1tldrHNSBDJRDualFsTpdOOvU%2BjubL7ziLjhDOnxlGDRGvN9NX5dcPPKfgVDhVITEKMe9F4xcraQxPlKAh5AlUY1OT1jWj7eLc1WqCkIiZj4NJVAgLOHRn8UtgBnvt3lKGl70HjH99kgJiZUcl8UBXFiMmnLvTOOG7ivsj7yoz6ng04gLuGfwEOtfIV%2FrsLrXWJqBsGN0ee5KVTD15KykTL586%2BEUoiJHe9%2FF7TZaYCoPjghzUaFzNL9JFRchgBEJsi4AVt2YlYAqrdIjn80zMOU8jrH0BvCNyK9BL39nlO0wyatHOV7reInX6OXO%2BRALUqpkxrY8ss8%2FV3EEYGL%2FXtgvPwBkxXUseCGsE6XsBd2QmgTU%2FUO6y0OtyyvXpaZhhik3OCUa1LkkJhVQW16rF%2BDC3SoHbzVX2WpBGeazBcDFfUNGPAUxX4xwOhCrD63mouKfDDwprTDBjqkAeqpvVW7DrSCcU%2FyhWIjui1Tk1OqF5YTd0X1A%2B6sRyo699I%2F8y%2BINZXn8kjsRjD%2B6WD6SkIZhCb9HW88uAisxOb51Miz0brvbSR5ZDprsqVBbBrcxoU56AyTAELn7s4QhJrSk8YqGKRSAsIjEAiuQLbUuxmjY828KGBYubKFrxUx7MTz1LQYTMRmsY5FvWe5WG4CKkSoGRtxGPJsEiSUUFhbSBkq&X-Amz-Signature=fc21a754123ba963274b737b6e9c8d2ff1730925698d5f098c704f750e0f2e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HYIDFF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Q%2B3%2BVgz4Hxh9MRpAMiLCfsmGIHZMYQSUdL%2Ba6Il5ywIhAIlIWiZFkt%2FXpsLXiKeuH0ykJnzTGJ2ZEseh1Ymq7iqsKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr7Fm1k7ZjiWf2hdgq3AMeXevoL%2FXZjNJWqhn1XHORjTasXGdhc%2BVWHiCqqFEGQXXyeLPT3dQM%2BZYoh46ES8hCjBvGVSIEzL94SCDvA8w0CSKN6Fz3HCAwrK5vdrxJcxlJhDQM3PWjqM%2Bj6jUFTCufvqRiWMjMeO08tIA9EQkxJPm9uN7mte4HCQDcIpEU2hddmrC4d3%2Fl1tldrHNSBDJRDualFsTpdOOvU%2BjubL7ziLjhDOnxlGDRGvN9NX5dcPPKfgVDhVITEKMe9F4xcraQxPlKAh5AlUY1OT1jWj7eLc1WqCkIiZj4NJVAgLOHRn8UtgBnvt3lKGl70HjH99kgJiZUcl8UBXFiMmnLvTOOG7ivsj7yoz6ng04gLuGfwEOtfIV%2FrsLrXWJqBsGN0ee5KVTD15KykTL586%2BEUoiJHe9%2FF7TZaYCoPjghzUaFzNL9JFRchgBEJsi4AVt2YlYAqrdIjn80zMOU8jrH0BvCNyK9BL39nlO0wyatHOV7reInX6OXO%2BRALUqpkxrY8ss8%2FV3EEYGL%2FXtgvPwBkxXUseCGsE6XsBd2QmgTU%2FUO6y0OtyyvXpaZhhik3OCUa1LkkJhVQW16rF%2BDC3SoHbzVX2WpBGeazBcDFfUNGPAUxX4xwOhCrD63mouKfDDwprTDBjqkAeqpvVW7DrSCcU%2FyhWIjui1Tk1OqF5YTd0X1A%2B6sRyo699I%2F8y%2BINZXn8kjsRjD%2B6WD6SkIZhCb9HW88uAisxOb51Miz0brvbSR5ZDprsqVBbBrcxoU56AyTAELn7s4QhJrSk8YqGKRSAsIjEAiuQLbUuxmjY828KGBYubKFrxUx7MTz1LQYTMRmsY5FvWe5WG4CKkSoGRtxGPJsEiSUUFhbSBkq&X-Amz-Signature=25e6a019a9686289ddbb3e04f480cfcc4586f5159af17c47a28215c44364be78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HYIDFF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Q%2B3%2BVgz4Hxh9MRpAMiLCfsmGIHZMYQSUdL%2Ba6Il5ywIhAIlIWiZFkt%2FXpsLXiKeuH0ykJnzTGJ2ZEseh1Ymq7iqsKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr7Fm1k7ZjiWf2hdgq3AMeXevoL%2FXZjNJWqhn1XHORjTasXGdhc%2BVWHiCqqFEGQXXyeLPT3dQM%2BZYoh46ES8hCjBvGVSIEzL94SCDvA8w0CSKN6Fz3HCAwrK5vdrxJcxlJhDQM3PWjqM%2Bj6jUFTCufvqRiWMjMeO08tIA9EQkxJPm9uN7mte4HCQDcIpEU2hddmrC4d3%2Fl1tldrHNSBDJRDualFsTpdOOvU%2BjubL7ziLjhDOnxlGDRGvN9NX5dcPPKfgVDhVITEKMe9F4xcraQxPlKAh5AlUY1OT1jWj7eLc1WqCkIiZj4NJVAgLOHRn8UtgBnvt3lKGl70HjH99kgJiZUcl8UBXFiMmnLvTOOG7ivsj7yoz6ng04gLuGfwEOtfIV%2FrsLrXWJqBsGN0ee5KVTD15KykTL586%2BEUoiJHe9%2FF7TZaYCoPjghzUaFzNL9JFRchgBEJsi4AVt2YlYAqrdIjn80zMOU8jrH0BvCNyK9BL39nlO0wyatHOV7reInX6OXO%2BRALUqpkxrY8ss8%2FV3EEYGL%2FXtgvPwBkxXUseCGsE6XsBd2QmgTU%2FUO6y0OtyyvXpaZhhik3OCUa1LkkJhVQW16rF%2BDC3SoHbzVX2WpBGeazBcDFfUNGPAUxX4xwOhCrD63mouKfDDwprTDBjqkAeqpvVW7DrSCcU%2FyhWIjui1Tk1OqF5YTd0X1A%2B6sRyo699I%2F8y%2BINZXn8kjsRjD%2B6WD6SkIZhCb9HW88uAisxOb51Miz0brvbSR5ZDprsqVBbBrcxoU56AyTAELn7s4QhJrSk8YqGKRSAsIjEAiuQLbUuxmjY828KGBYubKFrxUx7MTz1LQYTMRmsY5FvWe5WG4CKkSoGRtxGPJsEiSUUFhbSBkq&X-Amz-Signature=7b118f44d89d9f48f80bf68d51e1f48bade69413600b8dcf314063a5c1cccdb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HYIDFF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Q%2B3%2BVgz4Hxh9MRpAMiLCfsmGIHZMYQSUdL%2Ba6Il5ywIhAIlIWiZFkt%2FXpsLXiKeuH0ykJnzTGJ2ZEseh1Ymq7iqsKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr7Fm1k7ZjiWf2hdgq3AMeXevoL%2FXZjNJWqhn1XHORjTasXGdhc%2BVWHiCqqFEGQXXyeLPT3dQM%2BZYoh46ES8hCjBvGVSIEzL94SCDvA8w0CSKN6Fz3HCAwrK5vdrxJcxlJhDQM3PWjqM%2Bj6jUFTCufvqRiWMjMeO08tIA9EQkxJPm9uN7mte4HCQDcIpEU2hddmrC4d3%2Fl1tldrHNSBDJRDualFsTpdOOvU%2BjubL7ziLjhDOnxlGDRGvN9NX5dcPPKfgVDhVITEKMe9F4xcraQxPlKAh5AlUY1OT1jWj7eLc1WqCkIiZj4NJVAgLOHRn8UtgBnvt3lKGl70HjH99kgJiZUcl8UBXFiMmnLvTOOG7ivsj7yoz6ng04gLuGfwEOtfIV%2FrsLrXWJqBsGN0ee5KVTD15KykTL586%2BEUoiJHe9%2FF7TZaYCoPjghzUaFzNL9JFRchgBEJsi4AVt2YlYAqrdIjn80zMOU8jrH0BvCNyK9BL39nlO0wyatHOV7reInX6OXO%2BRALUqpkxrY8ss8%2FV3EEYGL%2FXtgvPwBkxXUseCGsE6XsBd2QmgTU%2FUO6y0OtyyvXpaZhhik3OCUa1LkkJhVQW16rF%2BDC3SoHbzVX2WpBGeazBcDFfUNGPAUxX4xwOhCrD63mouKfDDwprTDBjqkAeqpvVW7DrSCcU%2FyhWIjui1Tk1OqF5YTd0X1A%2B6sRyo699I%2F8y%2BINZXn8kjsRjD%2B6WD6SkIZhCb9HW88uAisxOb51Miz0brvbSR5ZDprsqVBbBrcxoU56AyTAELn7s4QhJrSk8YqGKRSAsIjEAiuQLbUuxmjY828KGBYubKFrxUx7MTz1LQYTMRmsY5FvWe5WG4CKkSoGRtxGPJsEiSUUFhbSBkq&X-Amz-Signature=3ebfaf184b6208dd5f8452edf62239c98b8b23791c582a030a885a2a41baf927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HYIDFF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Q%2B3%2BVgz4Hxh9MRpAMiLCfsmGIHZMYQSUdL%2Ba6Il5ywIhAIlIWiZFkt%2FXpsLXiKeuH0ykJnzTGJ2ZEseh1Ymq7iqsKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr7Fm1k7ZjiWf2hdgq3AMeXevoL%2FXZjNJWqhn1XHORjTasXGdhc%2BVWHiCqqFEGQXXyeLPT3dQM%2BZYoh46ES8hCjBvGVSIEzL94SCDvA8w0CSKN6Fz3HCAwrK5vdrxJcxlJhDQM3PWjqM%2Bj6jUFTCufvqRiWMjMeO08tIA9EQkxJPm9uN7mte4HCQDcIpEU2hddmrC4d3%2Fl1tldrHNSBDJRDualFsTpdOOvU%2BjubL7ziLjhDOnxlGDRGvN9NX5dcPPKfgVDhVITEKMe9F4xcraQxPlKAh5AlUY1OT1jWj7eLc1WqCkIiZj4NJVAgLOHRn8UtgBnvt3lKGl70HjH99kgJiZUcl8UBXFiMmnLvTOOG7ivsj7yoz6ng04gLuGfwEOtfIV%2FrsLrXWJqBsGN0ee5KVTD15KykTL586%2BEUoiJHe9%2FF7TZaYCoPjghzUaFzNL9JFRchgBEJsi4AVt2YlYAqrdIjn80zMOU8jrH0BvCNyK9BL39nlO0wyatHOV7reInX6OXO%2BRALUqpkxrY8ss8%2FV3EEYGL%2FXtgvPwBkxXUseCGsE6XsBd2QmgTU%2FUO6y0OtyyvXpaZhhik3OCUa1LkkJhVQW16rF%2BDC3SoHbzVX2WpBGeazBcDFfUNGPAUxX4xwOhCrD63mouKfDDwprTDBjqkAeqpvVW7DrSCcU%2FyhWIjui1Tk1OqF5YTd0X1A%2B6sRyo699I%2F8y%2BINZXn8kjsRjD%2B6WD6SkIZhCb9HW88uAisxOb51Miz0brvbSR5ZDprsqVBbBrcxoU56AyTAELn7s4QhJrSk8YqGKRSAsIjEAiuQLbUuxmjY828KGBYubKFrxUx7MTz1LQYTMRmsY5FvWe5WG4CKkSoGRtxGPJsEiSUUFhbSBkq&X-Amz-Signature=7d727fd00a205b03389af0aa3185cd13950d38ad9fd18cab8cb60dbee28b330f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HYIDFF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Q%2B3%2BVgz4Hxh9MRpAMiLCfsmGIHZMYQSUdL%2Ba6Il5ywIhAIlIWiZFkt%2FXpsLXiKeuH0ykJnzTGJ2ZEseh1Ymq7iqsKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr7Fm1k7ZjiWf2hdgq3AMeXevoL%2FXZjNJWqhn1XHORjTasXGdhc%2BVWHiCqqFEGQXXyeLPT3dQM%2BZYoh46ES8hCjBvGVSIEzL94SCDvA8w0CSKN6Fz3HCAwrK5vdrxJcxlJhDQM3PWjqM%2Bj6jUFTCufvqRiWMjMeO08tIA9EQkxJPm9uN7mte4HCQDcIpEU2hddmrC4d3%2Fl1tldrHNSBDJRDualFsTpdOOvU%2BjubL7ziLjhDOnxlGDRGvN9NX5dcPPKfgVDhVITEKMe9F4xcraQxPlKAh5AlUY1OT1jWj7eLc1WqCkIiZj4NJVAgLOHRn8UtgBnvt3lKGl70HjH99kgJiZUcl8UBXFiMmnLvTOOG7ivsj7yoz6ng04gLuGfwEOtfIV%2FrsLrXWJqBsGN0ee5KVTD15KykTL586%2BEUoiJHe9%2FF7TZaYCoPjghzUaFzNL9JFRchgBEJsi4AVt2YlYAqrdIjn80zMOU8jrH0BvCNyK9BL39nlO0wyatHOV7reInX6OXO%2BRALUqpkxrY8ss8%2FV3EEYGL%2FXtgvPwBkxXUseCGsE6XsBd2QmgTU%2FUO6y0OtyyvXpaZhhik3OCUa1LkkJhVQW16rF%2BDC3SoHbzVX2WpBGeazBcDFfUNGPAUxX4xwOhCrD63mouKfDDwprTDBjqkAeqpvVW7DrSCcU%2FyhWIjui1Tk1OqF5YTd0X1A%2B6sRyo699I%2F8y%2BINZXn8kjsRjD%2B6WD6SkIZhCb9HW88uAisxOb51Miz0brvbSR5ZDprsqVBbBrcxoU56AyTAELn7s4QhJrSk8YqGKRSAsIjEAiuQLbUuxmjY828KGBYubKFrxUx7MTz1LQYTMRmsY5FvWe5WG4CKkSoGRtxGPJsEiSUUFhbSBkq&X-Amz-Signature=d7eaf3314740abbc6691c53831e16d10710018f7c30d1a78aca835255e2b5510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HYIDFF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Q%2B3%2BVgz4Hxh9MRpAMiLCfsmGIHZMYQSUdL%2Ba6Il5ywIhAIlIWiZFkt%2FXpsLXiKeuH0ykJnzTGJ2ZEseh1Ymq7iqsKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr7Fm1k7ZjiWf2hdgq3AMeXevoL%2FXZjNJWqhn1XHORjTasXGdhc%2BVWHiCqqFEGQXXyeLPT3dQM%2BZYoh46ES8hCjBvGVSIEzL94SCDvA8w0CSKN6Fz3HCAwrK5vdrxJcxlJhDQM3PWjqM%2Bj6jUFTCufvqRiWMjMeO08tIA9EQkxJPm9uN7mte4HCQDcIpEU2hddmrC4d3%2Fl1tldrHNSBDJRDualFsTpdOOvU%2BjubL7ziLjhDOnxlGDRGvN9NX5dcPPKfgVDhVITEKMe9F4xcraQxPlKAh5AlUY1OT1jWj7eLc1WqCkIiZj4NJVAgLOHRn8UtgBnvt3lKGl70HjH99kgJiZUcl8UBXFiMmnLvTOOG7ivsj7yoz6ng04gLuGfwEOtfIV%2FrsLrXWJqBsGN0ee5KVTD15KykTL586%2BEUoiJHe9%2FF7TZaYCoPjghzUaFzNL9JFRchgBEJsi4AVt2YlYAqrdIjn80zMOU8jrH0BvCNyK9BL39nlO0wyatHOV7reInX6OXO%2BRALUqpkxrY8ss8%2FV3EEYGL%2FXtgvPwBkxXUseCGsE6XsBd2QmgTU%2FUO6y0OtyyvXpaZhhik3OCUa1LkkJhVQW16rF%2BDC3SoHbzVX2WpBGeazBcDFfUNGPAUxX4xwOhCrD63mouKfDDwprTDBjqkAeqpvVW7DrSCcU%2FyhWIjui1Tk1OqF5YTd0X1A%2B6sRyo699I%2F8y%2BINZXn8kjsRjD%2B6WD6SkIZhCb9HW88uAisxOb51Miz0brvbSR5ZDprsqVBbBrcxoU56AyTAELn7s4QhJrSk8YqGKRSAsIjEAiuQLbUuxmjY828KGBYubKFrxUx7MTz1LQYTMRmsY5FvWe5WG4CKkSoGRtxGPJsEiSUUFhbSBkq&X-Amz-Signature=e01f5c2b9ec45b75cc624018762992787e42cda8f35282a30b95221782011b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

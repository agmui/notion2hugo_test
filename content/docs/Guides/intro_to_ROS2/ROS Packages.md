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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446DOSNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCLKHgsR%2FYBDVluukIUlqIxEtNaCjNpC7sNX3AIBjJh5QIgd26QOtSIATErGVeXbolzPLJpIjONA5EihE%2Brrn8tdxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKLm2sY1dspfH5QVnyrcA2SSy18N4DWaDHR9wzktGArUMejWw6DOEWsPIUb51RfHQH41LDcDXMwXmGdWfeEz%2B0C%2Bh4y8MB0YhHVHCUX2iUva%2FqSSzxWnZMs83Jh9vSsnC5J5VD6a7OBY0jYHyQYWkqYeqFmieAXMrTLW4nNgAhALAqkPT8%2B4TvEQgpaQ7vsWmhgCnLvwgcA4oBf30qHK2ZGV3SvPs1IVfwisZEUQrZLNMRk3Pa1kCRkM0Mh%2FBwA3lXgKmhtxv9hL6LcX55q%2Fr26BY8lkgQJjdc%2Bs2vJsDyeo1BGP3g7QSIwQ6THSaqT9PrSFKrP0VJVjiSrudkgumk52p2Tc32l9Z65ZYSsRtjy%2FNfya0xuQRCr1fnsCpvZcb4quvBVBEal2lja%2BjTXbEV4xlBHN9ZlFM7e83rgQuROGlWpuaS2ud1xAGU5qUmd%2BtRaPTDBX1mIMpX506n6Yz%2BDcBtm8RO1O%2FWMQfeZjw3t6A4dnMHHd5uhw3w8SsPxOIbBENZhdalUy3cfeeaGY5bluRZjt5i%2FX2xVSAg11P6%2FX73Rh8QinpTM9%2FRb8zkSKTBVQfZyz%2Bj9YAbNokY1%2BH952hlev2fyy4mzxyipmfxgXqQARrMsk8n8boGJNS98pO6Sa2O0U%2FAtBPj7ZMIPMyMQGOqUBidRwu9UN4Ya7R2msmc1L4dN%2Fn3mZ7vTYjEHQj%2FExaynT2Ub8msd3H9pW9yfM4x%2F35G5H4w2u2XSAcxEnqr7vyLje36Qv7Gqm9WLFz5ekrUryM0pn%2BVuwK2Uuo3SdRylaC%2BVeArpGRe3XkHgy5k%2FWa1%2BFXjSEPyyiRDT3Belxy5TDYBdZHt7oP%2BSzinRU5y%2Bh%2FmtCJoZiMm1YfCtPX3ZfFcjwrd6v&X-Amz-Signature=6072ba05160f028866421cfbde6fbe36a9764c8a633dcf4fa4877c752e3477cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446DOSNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCLKHgsR%2FYBDVluukIUlqIxEtNaCjNpC7sNX3AIBjJh5QIgd26QOtSIATErGVeXbolzPLJpIjONA5EihE%2Brrn8tdxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKLm2sY1dspfH5QVnyrcA2SSy18N4DWaDHR9wzktGArUMejWw6DOEWsPIUb51RfHQH41LDcDXMwXmGdWfeEz%2B0C%2Bh4y8MB0YhHVHCUX2iUva%2FqSSzxWnZMs83Jh9vSsnC5J5VD6a7OBY0jYHyQYWkqYeqFmieAXMrTLW4nNgAhALAqkPT8%2B4TvEQgpaQ7vsWmhgCnLvwgcA4oBf30qHK2ZGV3SvPs1IVfwisZEUQrZLNMRk3Pa1kCRkM0Mh%2FBwA3lXgKmhtxv9hL6LcX55q%2Fr26BY8lkgQJjdc%2Bs2vJsDyeo1BGP3g7QSIwQ6THSaqT9PrSFKrP0VJVjiSrudkgumk52p2Tc32l9Z65ZYSsRtjy%2FNfya0xuQRCr1fnsCpvZcb4quvBVBEal2lja%2BjTXbEV4xlBHN9ZlFM7e83rgQuROGlWpuaS2ud1xAGU5qUmd%2BtRaPTDBX1mIMpX506n6Yz%2BDcBtm8RO1O%2FWMQfeZjw3t6A4dnMHHd5uhw3w8SsPxOIbBENZhdalUy3cfeeaGY5bluRZjt5i%2FX2xVSAg11P6%2FX73Rh8QinpTM9%2FRb8zkSKTBVQfZyz%2Bj9YAbNokY1%2BH952hlev2fyy4mzxyipmfxgXqQARrMsk8n8boGJNS98pO6Sa2O0U%2FAtBPj7ZMIPMyMQGOqUBidRwu9UN4Ya7R2msmc1L4dN%2Fn3mZ7vTYjEHQj%2FExaynT2Ub8msd3H9pW9yfM4x%2F35G5H4w2u2XSAcxEnqr7vyLje36Qv7Gqm9WLFz5ekrUryM0pn%2BVuwK2Uuo3SdRylaC%2BVeArpGRe3XkHgy5k%2FWa1%2BFXjSEPyyiRDT3Belxy5TDYBdZHt7oP%2BSzinRU5y%2Bh%2FmtCJoZiMm1YfCtPX3ZfFcjwrd6v&X-Amz-Signature=368fdf1299dbf63f9f0a2db0f011c3cc9939327ca30c0ef5e840a992efe1a58a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446DOSNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCLKHgsR%2FYBDVluukIUlqIxEtNaCjNpC7sNX3AIBjJh5QIgd26QOtSIATErGVeXbolzPLJpIjONA5EihE%2Brrn8tdxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKLm2sY1dspfH5QVnyrcA2SSy18N4DWaDHR9wzktGArUMejWw6DOEWsPIUb51RfHQH41LDcDXMwXmGdWfeEz%2B0C%2Bh4y8MB0YhHVHCUX2iUva%2FqSSzxWnZMs83Jh9vSsnC5J5VD6a7OBY0jYHyQYWkqYeqFmieAXMrTLW4nNgAhALAqkPT8%2B4TvEQgpaQ7vsWmhgCnLvwgcA4oBf30qHK2ZGV3SvPs1IVfwisZEUQrZLNMRk3Pa1kCRkM0Mh%2FBwA3lXgKmhtxv9hL6LcX55q%2Fr26BY8lkgQJjdc%2Bs2vJsDyeo1BGP3g7QSIwQ6THSaqT9PrSFKrP0VJVjiSrudkgumk52p2Tc32l9Z65ZYSsRtjy%2FNfya0xuQRCr1fnsCpvZcb4quvBVBEal2lja%2BjTXbEV4xlBHN9ZlFM7e83rgQuROGlWpuaS2ud1xAGU5qUmd%2BtRaPTDBX1mIMpX506n6Yz%2BDcBtm8RO1O%2FWMQfeZjw3t6A4dnMHHd5uhw3w8SsPxOIbBENZhdalUy3cfeeaGY5bluRZjt5i%2FX2xVSAg11P6%2FX73Rh8QinpTM9%2FRb8zkSKTBVQfZyz%2Bj9YAbNokY1%2BH952hlev2fyy4mzxyipmfxgXqQARrMsk8n8boGJNS98pO6Sa2O0U%2FAtBPj7ZMIPMyMQGOqUBidRwu9UN4Ya7R2msmc1L4dN%2Fn3mZ7vTYjEHQj%2FExaynT2Ub8msd3H9pW9yfM4x%2F35G5H4w2u2XSAcxEnqr7vyLje36Qv7Gqm9WLFz5ekrUryM0pn%2BVuwK2Uuo3SdRylaC%2BVeArpGRe3XkHgy5k%2FWa1%2BFXjSEPyyiRDT3Belxy5TDYBdZHt7oP%2BSzinRU5y%2Bh%2FmtCJoZiMm1YfCtPX3ZfFcjwrd6v&X-Amz-Signature=4a3ebbde7acb4a477f10cf5178ba5a7167e73c47c48b430183eabbc3f3b059eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446DOSNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCLKHgsR%2FYBDVluukIUlqIxEtNaCjNpC7sNX3AIBjJh5QIgd26QOtSIATErGVeXbolzPLJpIjONA5EihE%2Brrn8tdxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKLm2sY1dspfH5QVnyrcA2SSy18N4DWaDHR9wzktGArUMejWw6DOEWsPIUb51RfHQH41LDcDXMwXmGdWfeEz%2B0C%2Bh4y8MB0YhHVHCUX2iUva%2FqSSzxWnZMs83Jh9vSsnC5J5VD6a7OBY0jYHyQYWkqYeqFmieAXMrTLW4nNgAhALAqkPT8%2B4TvEQgpaQ7vsWmhgCnLvwgcA4oBf30qHK2ZGV3SvPs1IVfwisZEUQrZLNMRk3Pa1kCRkM0Mh%2FBwA3lXgKmhtxv9hL6LcX55q%2Fr26BY8lkgQJjdc%2Bs2vJsDyeo1BGP3g7QSIwQ6THSaqT9PrSFKrP0VJVjiSrudkgumk52p2Tc32l9Z65ZYSsRtjy%2FNfya0xuQRCr1fnsCpvZcb4quvBVBEal2lja%2BjTXbEV4xlBHN9ZlFM7e83rgQuROGlWpuaS2ud1xAGU5qUmd%2BtRaPTDBX1mIMpX506n6Yz%2BDcBtm8RO1O%2FWMQfeZjw3t6A4dnMHHd5uhw3w8SsPxOIbBENZhdalUy3cfeeaGY5bluRZjt5i%2FX2xVSAg11P6%2FX73Rh8QinpTM9%2FRb8zkSKTBVQfZyz%2Bj9YAbNokY1%2BH952hlev2fyy4mzxyipmfxgXqQARrMsk8n8boGJNS98pO6Sa2O0U%2FAtBPj7ZMIPMyMQGOqUBidRwu9UN4Ya7R2msmc1L4dN%2Fn3mZ7vTYjEHQj%2FExaynT2Ub8msd3H9pW9yfM4x%2F35G5H4w2u2XSAcxEnqr7vyLje36Qv7Gqm9WLFz5ekrUryM0pn%2BVuwK2Uuo3SdRylaC%2BVeArpGRe3XkHgy5k%2FWa1%2BFXjSEPyyiRDT3Belxy5TDYBdZHt7oP%2BSzinRU5y%2Bh%2FmtCJoZiMm1YfCtPX3ZfFcjwrd6v&X-Amz-Signature=9be1f5c229202187cacbbaf79e315909b86395c827972921b652c027dd14ac9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446DOSNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCLKHgsR%2FYBDVluukIUlqIxEtNaCjNpC7sNX3AIBjJh5QIgd26QOtSIATErGVeXbolzPLJpIjONA5EihE%2Brrn8tdxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKLm2sY1dspfH5QVnyrcA2SSy18N4DWaDHR9wzktGArUMejWw6DOEWsPIUb51RfHQH41LDcDXMwXmGdWfeEz%2B0C%2Bh4y8MB0YhHVHCUX2iUva%2FqSSzxWnZMs83Jh9vSsnC5J5VD6a7OBY0jYHyQYWkqYeqFmieAXMrTLW4nNgAhALAqkPT8%2B4TvEQgpaQ7vsWmhgCnLvwgcA4oBf30qHK2ZGV3SvPs1IVfwisZEUQrZLNMRk3Pa1kCRkM0Mh%2FBwA3lXgKmhtxv9hL6LcX55q%2Fr26BY8lkgQJjdc%2Bs2vJsDyeo1BGP3g7QSIwQ6THSaqT9PrSFKrP0VJVjiSrudkgumk52p2Tc32l9Z65ZYSsRtjy%2FNfya0xuQRCr1fnsCpvZcb4quvBVBEal2lja%2BjTXbEV4xlBHN9ZlFM7e83rgQuROGlWpuaS2ud1xAGU5qUmd%2BtRaPTDBX1mIMpX506n6Yz%2BDcBtm8RO1O%2FWMQfeZjw3t6A4dnMHHd5uhw3w8SsPxOIbBENZhdalUy3cfeeaGY5bluRZjt5i%2FX2xVSAg11P6%2FX73Rh8QinpTM9%2FRb8zkSKTBVQfZyz%2Bj9YAbNokY1%2BH952hlev2fyy4mzxyipmfxgXqQARrMsk8n8boGJNS98pO6Sa2O0U%2FAtBPj7ZMIPMyMQGOqUBidRwu9UN4Ya7R2msmc1L4dN%2Fn3mZ7vTYjEHQj%2FExaynT2Ub8msd3H9pW9yfM4x%2F35G5H4w2u2XSAcxEnqr7vyLje36Qv7Gqm9WLFz5ekrUryM0pn%2BVuwK2Uuo3SdRylaC%2BVeArpGRe3XkHgy5k%2FWa1%2BFXjSEPyyiRDT3Belxy5TDYBdZHt7oP%2BSzinRU5y%2Bh%2FmtCJoZiMm1YfCtPX3ZfFcjwrd6v&X-Amz-Signature=3ffca2bd957228a626f3f46b884ddb2491d48f8477e926c47bcdeb9fcb7673bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446DOSNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCLKHgsR%2FYBDVluukIUlqIxEtNaCjNpC7sNX3AIBjJh5QIgd26QOtSIATErGVeXbolzPLJpIjONA5EihE%2Brrn8tdxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKLm2sY1dspfH5QVnyrcA2SSy18N4DWaDHR9wzktGArUMejWw6DOEWsPIUb51RfHQH41LDcDXMwXmGdWfeEz%2B0C%2Bh4y8MB0YhHVHCUX2iUva%2FqSSzxWnZMs83Jh9vSsnC5J5VD6a7OBY0jYHyQYWkqYeqFmieAXMrTLW4nNgAhALAqkPT8%2B4TvEQgpaQ7vsWmhgCnLvwgcA4oBf30qHK2ZGV3SvPs1IVfwisZEUQrZLNMRk3Pa1kCRkM0Mh%2FBwA3lXgKmhtxv9hL6LcX55q%2Fr26BY8lkgQJjdc%2Bs2vJsDyeo1BGP3g7QSIwQ6THSaqT9PrSFKrP0VJVjiSrudkgumk52p2Tc32l9Z65ZYSsRtjy%2FNfya0xuQRCr1fnsCpvZcb4quvBVBEal2lja%2BjTXbEV4xlBHN9ZlFM7e83rgQuROGlWpuaS2ud1xAGU5qUmd%2BtRaPTDBX1mIMpX506n6Yz%2BDcBtm8RO1O%2FWMQfeZjw3t6A4dnMHHd5uhw3w8SsPxOIbBENZhdalUy3cfeeaGY5bluRZjt5i%2FX2xVSAg11P6%2FX73Rh8QinpTM9%2FRb8zkSKTBVQfZyz%2Bj9YAbNokY1%2BH952hlev2fyy4mzxyipmfxgXqQARrMsk8n8boGJNS98pO6Sa2O0U%2FAtBPj7ZMIPMyMQGOqUBidRwu9UN4Ya7R2msmc1L4dN%2Fn3mZ7vTYjEHQj%2FExaynT2Ub8msd3H9pW9yfM4x%2F35G5H4w2u2XSAcxEnqr7vyLje36Qv7Gqm9WLFz5ekrUryM0pn%2BVuwK2Uuo3SdRylaC%2BVeArpGRe3XkHgy5k%2FWa1%2BFXjSEPyyiRDT3Belxy5TDYBdZHt7oP%2BSzinRU5y%2Bh%2FmtCJoZiMm1YfCtPX3ZfFcjwrd6v&X-Amz-Signature=583c9c1828b14cdd5b80e590dad14f9121a7c7c8c8a1c881a5342a311fcce47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446DOSNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCLKHgsR%2FYBDVluukIUlqIxEtNaCjNpC7sNX3AIBjJh5QIgd26QOtSIATErGVeXbolzPLJpIjONA5EihE%2Brrn8tdxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKLm2sY1dspfH5QVnyrcA2SSy18N4DWaDHR9wzktGArUMejWw6DOEWsPIUb51RfHQH41LDcDXMwXmGdWfeEz%2B0C%2Bh4y8MB0YhHVHCUX2iUva%2FqSSzxWnZMs83Jh9vSsnC5J5VD6a7OBY0jYHyQYWkqYeqFmieAXMrTLW4nNgAhALAqkPT8%2B4TvEQgpaQ7vsWmhgCnLvwgcA4oBf30qHK2ZGV3SvPs1IVfwisZEUQrZLNMRk3Pa1kCRkM0Mh%2FBwA3lXgKmhtxv9hL6LcX55q%2Fr26BY8lkgQJjdc%2Bs2vJsDyeo1BGP3g7QSIwQ6THSaqT9PrSFKrP0VJVjiSrudkgumk52p2Tc32l9Z65ZYSsRtjy%2FNfya0xuQRCr1fnsCpvZcb4quvBVBEal2lja%2BjTXbEV4xlBHN9ZlFM7e83rgQuROGlWpuaS2ud1xAGU5qUmd%2BtRaPTDBX1mIMpX506n6Yz%2BDcBtm8RO1O%2FWMQfeZjw3t6A4dnMHHd5uhw3w8SsPxOIbBENZhdalUy3cfeeaGY5bluRZjt5i%2FX2xVSAg11P6%2FX73Rh8QinpTM9%2FRb8zkSKTBVQfZyz%2Bj9YAbNokY1%2BH952hlev2fyy4mzxyipmfxgXqQARrMsk8n8boGJNS98pO6Sa2O0U%2FAtBPj7ZMIPMyMQGOqUBidRwu9UN4Ya7R2msmc1L4dN%2Fn3mZ7vTYjEHQj%2FExaynT2Ub8msd3H9pW9yfM4x%2F35G5H4w2u2XSAcxEnqr7vyLje36Qv7Gqm9WLFz5ekrUryM0pn%2BVuwK2Uuo3SdRylaC%2BVeArpGRe3XkHgy5k%2FWa1%2BFXjSEPyyiRDT3Belxy5TDYBdZHt7oP%2BSzinRU5y%2Bh%2FmtCJoZiMm1YfCtPX3ZfFcjwrd6v&X-Amz-Signature=4f1da5ed52313324b386e9fd9a3122222668a822ea4fd7c76b7ce351c6a4940b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

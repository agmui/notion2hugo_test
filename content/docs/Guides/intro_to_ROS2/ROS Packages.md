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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42NHWGO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGMG2iIkizr3iVMai62Dj%2BLxADTFjgzTnMzh5BqRAsotAiAusypphSZtkzwqlCS%2BVdM6g0npWTGwNXHPgvNwNAYIOSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlKe%2FbI%2Fq8pJfxTQ%2BKtwDFQAWVNY45PJaBfzPgnVYkNxe58wOPGTgDPOTniYkF0sO7g2hqb3vql%2FlO3C6j3I%2BWdr0VkGuPnYv45qj5SreN3jg0%2FN4AMffJHVpv%2BG088MJvFaz%2BA2jR9zhT21PCX9PUZo%2BkZciDK1x2EAVsFmoeJ0lv7ZUV4TR6uiiqBsOap61ONP8lzw1sdgM3YPEh3F8CvR%2BE3kk%2BNhdMx7z3t4X4H%2BoULSJYslnxEPNQzQGwdT2JevQgfAAPbGMu%2FDPgyw7wTTyDbhoTyxfZzkJphnBTxHzeHT4SnvrDgQSSJBiuz%2BcJl4brb6wrh17s2xVdCAwXuyCKUIonYNEUr%2F7UlvCWpQ1AuwtXPGYqF8d1fVvX%2B2I1bMZTEm59x4afFJRV7jYNMadDuUzJGSm%2FzLVgTDTh8dgv6gFiL7GRT2j6WzEKps4nx163qG4ftH14tIH%2FRnQCq26ZaJfEOqRCdv57uBn5F18YNcVFkhUfTqPQL1UQq9m7TdxrejdZQHdKb4GucHUWk%2BPAlIkIBZYdwWIsYiTRX%2BR6G%2B7T%2BxBqz3NprKcYA%2BcL9XcHzmEXlSay9hWkar2wZ0XUWTUUyhDRH40bT8GCTS0Q1yTgJ%2BmEV81c4pAKeFObaU%2BbZHmElhhQLswyfaOvgY6pgG0SWpN6tQh8xkA1WG%2F8R73eZ9aksRvWb7huZ4kb5FZ9e9JNnSeFenlgqaeYEU8qYyCjG8quwhiw2DDaJlh%2B00lcmhgce5aBiML4407lyumVATm9%2FPBLrmxkbaQystyDdbeeJl0F%2FS7LA0WNKShEkEIqbB1B5jcLqYZa8HNGEI593imNWpprTXHnZVbDbqo43%2F4EaPqOHRMj9KtRLS9K%2BMS0WMW8mxO&X-Amz-Signature=fb898f4cb3f4482c33b672f5a31a66ecf511aa4be5551683244be379bac98ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42NHWGO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGMG2iIkizr3iVMai62Dj%2BLxADTFjgzTnMzh5BqRAsotAiAusypphSZtkzwqlCS%2BVdM6g0npWTGwNXHPgvNwNAYIOSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlKe%2FbI%2Fq8pJfxTQ%2BKtwDFQAWVNY45PJaBfzPgnVYkNxe58wOPGTgDPOTniYkF0sO7g2hqb3vql%2FlO3C6j3I%2BWdr0VkGuPnYv45qj5SreN3jg0%2FN4AMffJHVpv%2BG088MJvFaz%2BA2jR9zhT21PCX9PUZo%2BkZciDK1x2EAVsFmoeJ0lv7ZUV4TR6uiiqBsOap61ONP8lzw1sdgM3YPEh3F8CvR%2BE3kk%2BNhdMx7z3t4X4H%2BoULSJYslnxEPNQzQGwdT2JevQgfAAPbGMu%2FDPgyw7wTTyDbhoTyxfZzkJphnBTxHzeHT4SnvrDgQSSJBiuz%2BcJl4brb6wrh17s2xVdCAwXuyCKUIonYNEUr%2F7UlvCWpQ1AuwtXPGYqF8d1fVvX%2B2I1bMZTEm59x4afFJRV7jYNMadDuUzJGSm%2FzLVgTDTh8dgv6gFiL7GRT2j6WzEKps4nx163qG4ftH14tIH%2FRnQCq26ZaJfEOqRCdv57uBn5F18YNcVFkhUfTqPQL1UQq9m7TdxrejdZQHdKb4GucHUWk%2BPAlIkIBZYdwWIsYiTRX%2BR6G%2B7T%2BxBqz3NprKcYA%2BcL9XcHzmEXlSay9hWkar2wZ0XUWTUUyhDRH40bT8GCTS0Q1yTgJ%2BmEV81c4pAKeFObaU%2BbZHmElhhQLswyfaOvgY6pgG0SWpN6tQh8xkA1WG%2F8R73eZ9aksRvWb7huZ4kb5FZ9e9JNnSeFenlgqaeYEU8qYyCjG8quwhiw2DDaJlh%2B00lcmhgce5aBiML4407lyumVATm9%2FPBLrmxkbaQystyDdbeeJl0F%2FS7LA0WNKShEkEIqbB1B5jcLqYZa8HNGEI593imNWpprTXHnZVbDbqo43%2F4EaPqOHRMj9KtRLS9K%2BMS0WMW8mxO&X-Amz-Signature=3e8326c3934ce49ef4c621d4f912841a945cfe3733f74858468012f7647ecb56&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42NHWGO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGMG2iIkizr3iVMai62Dj%2BLxADTFjgzTnMzh5BqRAsotAiAusypphSZtkzwqlCS%2BVdM6g0npWTGwNXHPgvNwNAYIOSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlKe%2FbI%2Fq8pJfxTQ%2BKtwDFQAWVNY45PJaBfzPgnVYkNxe58wOPGTgDPOTniYkF0sO7g2hqb3vql%2FlO3C6j3I%2BWdr0VkGuPnYv45qj5SreN3jg0%2FN4AMffJHVpv%2BG088MJvFaz%2BA2jR9zhT21PCX9PUZo%2BkZciDK1x2EAVsFmoeJ0lv7ZUV4TR6uiiqBsOap61ONP8lzw1sdgM3YPEh3F8CvR%2BE3kk%2BNhdMx7z3t4X4H%2BoULSJYslnxEPNQzQGwdT2JevQgfAAPbGMu%2FDPgyw7wTTyDbhoTyxfZzkJphnBTxHzeHT4SnvrDgQSSJBiuz%2BcJl4brb6wrh17s2xVdCAwXuyCKUIonYNEUr%2F7UlvCWpQ1AuwtXPGYqF8d1fVvX%2B2I1bMZTEm59x4afFJRV7jYNMadDuUzJGSm%2FzLVgTDTh8dgv6gFiL7GRT2j6WzEKps4nx163qG4ftH14tIH%2FRnQCq26ZaJfEOqRCdv57uBn5F18YNcVFkhUfTqPQL1UQq9m7TdxrejdZQHdKb4GucHUWk%2BPAlIkIBZYdwWIsYiTRX%2BR6G%2B7T%2BxBqz3NprKcYA%2BcL9XcHzmEXlSay9hWkar2wZ0XUWTUUyhDRH40bT8GCTS0Q1yTgJ%2BmEV81c4pAKeFObaU%2BbZHmElhhQLswyfaOvgY6pgG0SWpN6tQh8xkA1WG%2F8R73eZ9aksRvWb7huZ4kb5FZ9e9JNnSeFenlgqaeYEU8qYyCjG8quwhiw2DDaJlh%2B00lcmhgce5aBiML4407lyumVATm9%2FPBLrmxkbaQystyDdbeeJl0F%2FS7LA0WNKShEkEIqbB1B5jcLqYZa8HNGEI593imNWpprTXHnZVbDbqo43%2F4EaPqOHRMj9KtRLS9K%2BMS0WMW8mxO&X-Amz-Signature=c52ee12f9f18816c7f8093b3262e4e2c611c62e7bd547efb611cf6a7658574f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42NHWGO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGMG2iIkizr3iVMai62Dj%2BLxADTFjgzTnMzh5BqRAsotAiAusypphSZtkzwqlCS%2BVdM6g0npWTGwNXHPgvNwNAYIOSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlKe%2FbI%2Fq8pJfxTQ%2BKtwDFQAWVNY45PJaBfzPgnVYkNxe58wOPGTgDPOTniYkF0sO7g2hqb3vql%2FlO3C6j3I%2BWdr0VkGuPnYv45qj5SreN3jg0%2FN4AMffJHVpv%2BG088MJvFaz%2BA2jR9zhT21PCX9PUZo%2BkZciDK1x2EAVsFmoeJ0lv7ZUV4TR6uiiqBsOap61ONP8lzw1sdgM3YPEh3F8CvR%2BE3kk%2BNhdMx7z3t4X4H%2BoULSJYslnxEPNQzQGwdT2JevQgfAAPbGMu%2FDPgyw7wTTyDbhoTyxfZzkJphnBTxHzeHT4SnvrDgQSSJBiuz%2BcJl4brb6wrh17s2xVdCAwXuyCKUIonYNEUr%2F7UlvCWpQ1AuwtXPGYqF8d1fVvX%2B2I1bMZTEm59x4afFJRV7jYNMadDuUzJGSm%2FzLVgTDTh8dgv6gFiL7GRT2j6WzEKps4nx163qG4ftH14tIH%2FRnQCq26ZaJfEOqRCdv57uBn5F18YNcVFkhUfTqPQL1UQq9m7TdxrejdZQHdKb4GucHUWk%2BPAlIkIBZYdwWIsYiTRX%2BR6G%2B7T%2BxBqz3NprKcYA%2BcL9XcHzmEXlSay9hWkar2wZ0XUWTUUyhDRH40bT8GCTS0Q1yTgJ%2BmEV81c4pAKeFObaU%2BbZHmElhhQLswyfaOvgY6pgG0SWpN6tQh8xkA1WG%2F8R73eZ9aksRvWb7huZ4kb5FZ9e9JNnSeFenlgqaeYEU8qYyCjG8quwhiw2DDaJlh%2B00lcmhgce5aBiML4407lyumVATm9%2FPBLrmxkbaQystyDdbeeJl0F%2FS7LA0WNKShEkEIqbB1B5jcLqYZa8HNGEI593imNWpprTXHnZVbDbqo43%2F4EaPqOHRMj9KtRLS9K%2BMS0WMW8mxO&X-Amz-Signature=0d93381ca989d4141b474f72af0ff01154b1d38890c980dc1d897f85cc2a9ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42NHWGO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGMG2iIkizr3iVMai62Dj%2BLxADTFjgzTnMzh5BqRAsotAiAusypphSZtkzwqlCS%2BVdM6g0npWTGwNXHPgvNwNAYIOSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlKe%2FbI%2Fq8pJfxTQ%2BKtwDFQAWVNY45PJaBfzPgnVYkNxe58wOPGTgDPOTniYkF0sO7g2hqb3vql%2FlO3C6j3I%2BWdr0VkGuPnYv45qj5SreN3jg0%2FN4AMffJHVpv%2BG088MJvFaz%2BA2jR9zhT21PCX9PUZo%2BkZciDK1x2EAVsFmoeJ0lv7ZUV4TR6uiiqBsOap61ONP8lzw1sdgM3YPEh3F8CvR%2BE3kk%2BNhdMx7z3t4X4H%2BoULSJYslnxEPNQzQGwdT2JevQgfAAPbGMu%2FDPgyw7wTTyDbhoTyxfZzkJphnBTxHzeHT4SnvrDgQSSJBiuz%2BcJl4brb6wrh17s2xVdCAwXuyCKUIonYNEUr%2F7UlvCWpQ1AuwtXPGYqF8d1fVvX%2B2I1bMZTEm59x4afFJRV7jYNMadDuUzJGSm%2FzLVgTDTh8dgv6gFiL7GRT2j6WzEKps4nx163qG4ftH14tIH%2FRnQCq26ZaJfEOqRCdv57uBn5F18YNcVFkhUfTqPQL1UQq9m7TdxrejdZQHdKb4GucHUWk%2BPAlIkIBZYdwWIsYiTRX%2BR6G%2B7T%2BxBqz3NprKcYA%2BcL9XcHzmEXlSay9hWkar2wZ0XUWTUUyhDRH40bT8GCTS0Q1yTgJ%2BmEV81c4pAKeFObaU%2BbZHmElhhQLswyfaOvgY6pgG0SWpN6tQh8xkA1WG%2F8R73eZ9aksRvWb7huZ4kb5FZ9e9JNnSeFenlgqaeYEU8qYyCjG8quwhiw2DDaJlh%2B00lcmhgce5aBiML4407lyumVATm9%2FPBLrmxkbaQystyDdbeeJl0F%2FS7LA0WNKShEkEIqbB1B5jcLqYZa8HNGEI593imNWpprTXHnZVbDbqo43%2F4EaPqOHRMj9KtRLS9K%2BMS0WMW8mxO&X-Amz-Signature=8eca3c03f126c7f1b1d2d97c1dd72df8c34046bbbd1462dd9afc6babc8b0cdea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42NHWGO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGMG2iIkizr3iVMai62Dj%2BLxADTFjgzTnMzh5BqRAsotAiAusypphSZtkzwqlCS%2BVdM6g0npWTGwNXHPgvNwNAYIOSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlKe%2FbI%2Fq8pJfxTQ%2BKtwDFQAWVNY45PJaBfzPgnVYkNxe58wOPGTgDPOTniYkF0sO7g2hqb3vql%2FlO3C6j3I%2BWdr0VkGuPnYv45qj5SreN3jg0%2FN4AMffJHVpv%2BG088MJvFaz%2BA2jR9zhT21PCX9PUZo%2BkZciDK1x2EAVsFmoeJ0lv7ZUV4TR6uiiqBsOap61ONP8lzw1sdgM3YPEh3F8CvR%2BE3kk%2BNhdMx7z3t4X4H%2BoULSJYslnxEPNQzQGwdT2JevQgfAAPbGMu%2FDPgyw7wTTyDbhoTyxfZzkJphnBTxHzeHT4SnvrDgQSSJBiuz%2BcJl4brb6wrh17s2xVdCAwXuyCKUIonYNEUr%2F7UlvCWpQ1AuwtXPGYqF8d1fVvX%2B2I1bMZTEm59x4afFJRV7jYNMadDuUzJGSm%2FzLVgTDTh8dgv6gFiL7GRT2j6WzEKps4nx163qG4ftH14tIH%2FRnQCq26ZaJfEOqRCdv57uBn5F18YNcVFkhUfTqPQL1UQq9m7TdxrejdZQHdKb4GucHUWk%2BPAlIkIBZYdwWIsYiTRX%2BR6G%2B7T%2BxBqz3NprKcYA%2BcL9XcHzmEXlSay9hWkar2wZ0XUWTUUyhDRH40bT8GCTS0Q1yTgJ%2BmEV81c4pAKeFObaU%2BbZHmElhhQLswyfaOvgY6pgG0SWpN6tQh8xkA1WG%2F8R73eZ9aksRvWb7huZ4kb5FZ9e9JNnSeFenlgqaeYEU8qYyCjG8quwhiw2DDaJlh%2B00lcmhgce5aBiML4407lyumVATm9%2FPBLrmxkbaQystyDdbeeJl0F%2FS7LA0WNKShEkEIqbB1B5jcLqYZa8HNGEI593imNWpprTXHnZVbDbqo43%2F4EaPqOHRMj9KtRLS9K%2BMS0WMW8mxO&X-Amz-Signature=71c08b5165d99353d27609e54a5a7343ad25d22039d81599114c4a9bb7f9d6d5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42NHWGO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGMG2iIkizr3iVMai62Dj%2BLxADTFjgzTnMzh5BqRAsotAiAusypphSZtkzwqlCS%2BVdM6g0npWTGwNXHPgvNwNAYIOSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlKe%2FbI%2Fq8pJfxTQ%2BKtwDFQAWVNY45PJaBfzPgnVYkNxe58wOPGTgDPOTniYkF0sO7g2hqb3vql%2FlO3C6j3I%2BWdr0VkGuPnYv45qj5SreN3jg0%2FN4AMffJHVpv%2BG088MJvFaz%2BA2jR9zhT21PCX9PUZo%2BkZciDK1x2EAVsFmoeJ0lv7ZUV4TR6uiiqBsOap61ONP8lzw1sdgM3YPEh3F8CvR%2BE3kk%2BNhdMx7z3t4X4H%2BoULSJYslnxEPNQzQGwdT2JevQgfAAPbGMu%2FDPgyw7wTTyDbhoTyxfZzkJphnBTxHzeHT4SnvrDgQSSJBiuz%2BcJl4brb6wrh17s2xVdCAwXuyCKUIonYNEUr%2F7UlvCWpQ1AuwtXPGYqF8d1fVvX%2B2I1bMZTEm59x4afFJRV7jYNMadDuUzJGSm%2FzLVgTDTh8dgv6gFiL7GRT2j6WzEKps4nx163qG4ftH14tIH%2FRnQCq26ZaJfEOqRCdv57uBn5F18YNcVFkhUfTqPQL1UQq9m7TdxrejdZQHdKb4GucHUWk%2BPAlIkIBZYdwWIsYiTRX%2BR6G%2B7T%2BxBqz3NprKcYA%2BcL9XcHzmEXlSay9hWkar2wZ0XUWTUUyhDRH40bT8GCTS0Q1yTgJ%2BmEV81c4pAKeFObaU%2BbZHmElhhQLswyfaOvgY6pgG0SWpN6tQh8xkA1WG%2F8R73eZ9aksRvWb7huZ4kb5FZ9e9JNnSeFenlgqaeYEU8qYyCjG8quwhiw2DDaJlh%2B00lcmhgce5aBiML4407lyumVATm9%2FPBLrmxkbaQystyDdbeeJl0F%2FS7LA0WNKShEkEIqbB1B5jcLqYZa8HNGEI593imNWpprTXHnZVbDbqo43%2F4EaPqOHRMj9KtRLS9K%2BMS0WMW8mxO&X-Amz-Signature=98ba5fd75ebfc9fff84faf35c45750ce133145088fd8f5471ec8dd3f05a61b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

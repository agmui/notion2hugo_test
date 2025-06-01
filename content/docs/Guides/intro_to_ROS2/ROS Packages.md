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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZSBWSY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCZytXD9%2FQvgpuF8uMuLn33il2RWwF897oKhMLY%2B%2Fe6jQIgQspWs%2FDUHylngKHvepvSJDel5lkhiMGShhpOFyJteYQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaEj2mfNb%2BwefKj%2BCrcA6dxTFItIxxZEupJdvo4M5De%2BLGtM%2B0UNkx7%2B0XYFcvybpSPOeKLeSXIuXNdNkPAywPEsWswdWAi7RjKFuUDWTbfcYHB8OHdXbjPujiEDfMIgumvDkMv39IZIeVr7E8I22ozeP5PB5qgBQw1xKjPPg93WqKCSnYYmRSdIfID3rGOMqeWCVwbJQpTyhlDhk83kuXgEC8VR0zIx4IQ%2FmRBn3U%2FvBsU7DgX0%2FguwlSO46QrSTPVH7JhNUc0eGs3NLiAeM6xErJLY02Z7IxCaBcFeoJsXz82vQUSLOuuLchdIxX2sInNYZzurmBiJG8RRwai47p5zVkIuzExUvduIDFVNEDXIeUeNUxuhxg%2BpbnM4lEJGxTpvDS%2BhTDKKZBl6X2bnoafOlyGgWSQiKs7jqZFicEUlq2YKJ%2FHJTycr4ZI98YhlmhoL63Sns3IeFxu3Bo5wNc4kiNt9SdxteBAvafR8Kfk%2BFsMCZEx8cMBIn%2F6DyJp4xEbzajB51gfZhgPoMhZCDCyqAidbVMMEJsWrjvQEetx23IOduR74uFCnH0NRiJGbwm%2FAeF7jx528%2FN075mS4oaT6Zzm0YbubxWGNOrKyeizqjJZoNrDeEQnENpiAoBlCi%2FL4XUiu%2BaeKISwMPfe8MEGOqUB%2Fs7naVWWKQJjNDhw2Rw%2FzMe9xtc7uDHd9IaNgiZNWbxEX1%2FA8SGWlRxCC%2BdD6kuG10BwWElUCQ%2BT%2BmL3JpZ6bAoKJ9%2BaAEQb2cSK2eGvNlNaUhFUgPdapOY5QnDLZ2ss9Miu9GxaIwqACc8b5t0CG3yRqEUEfa2BsrGiH8X3l3vH7Yx3jyi0b1kX9f%2FRJT6zKQSdjImEIBzlw9VlUrgsFslYoo9G&X-Amz-Signature=78f2ef677bf97a8a7fb5043735078b34936919e7e088ea207cfb9e996a0d818a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZSBWSY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCZytXD9%2FQvgpuF8uMuLn33il2RWwF897oKhMLY%2B%2Fe6jQIgQspWs%2FDUHylngKHvepvSJDel5lkhiMGShhpOFyJteYQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaEj2mfNb%2BwefKj%2BCrcA6dxTFItIxxZEupJdvo4M5De%2BLGtM%2B0UNkx7%2B0XYFcvybpSPOeKLeSXIuXNdNkPAywPEsWswdWAi7RjKFuUDWTbfcYHB8OHdXbjPujiEDfMIgumvDkMv39IZIeVr7E8I22ozeP5PB5qgBQw1xKjPPg93WqKCSnYYmRSdIfID3rGOMqeWCVwbJQpTyhlDhk83kuXgEC8VR0zIx4IQ%2FmRBn3U%2FvBsU7DgX0%2FguwlSO46QrSTPVH7JhNUc0eGs3NLiAeM6xErJLY02Z7IxCaBcFeoJsXz82vQUSLOuuLchdIxX2sInNYZzurmBiJG8RRwai47p5zVkIuzExUvduIDFVNEDXIeUeNUxuhxg%2BpbnM4lEJGxTpvDS%2BhTDKKZBl6X2bnoafOlyGgWSQiKs7jqZFicEUlq2YKJ%2FHJTycr4ZI98YhlmhoL63Sns3IeFxu3Bo5wNc4kiNt9SdxteBAvafR8Kfk%2BFsMCZEx8cMBIn%2F6DyJp4xEbzajB51gfZhgPoMhZCDCyqAidbVMMEJsWrjvQEetx23IOduR74uFCnH0NRiJGbwm%2FAeF7jx528%2FN075mS4oaT6Zzm0YbubxWGNOrKyeizqjJZoNrDeEQnENpiAoBlCi%2FL4XUiu%2BaeKISwMPfe8MEGOqUB%2Fs7naVWWKQJjNDhw2Rw%2FzMe9xtc7uDHd9IaNgiZNWbxEX1%2FA8SGWlRxCC%2BdD6kuG10BwWElUCQ%2BT%2BmL3JpZ6bAoKJ9%2BaAEQb2cSK2eGvNlNaUhFUgPdapOY5QnDLZ2ss9Miu9GxaIwqACc8b5t0CG3yRqEUEfa2BsrGiH8X3l3vH7Yx3jyi0b1kX9f%2FRJT6zKQSdjImEIBzlw9VlUrgsFslYoo9G&X-Amz-Signature=5f63efbb413ce47eb8f0584213d347edc06260b0092d1b94a73d595f0d5475a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZSBWSY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCZytXD9%2FQvgpuF8uMuLn33il2RWwF897oKhMLY%2B%2Fe6jQIgQspWs%2FDUHylngKHvepvSJDel5lkhiMGShhpOFyJteYQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaEj2mfNb%2BwefKj%2BCrcA6dxTFItIxxZEupJdvo4M5De%2BLGtM%2B0UNkx7%2B0XYFcvybpSPOeKLeSXIuXNdNkPAywPEsWswdWAi7RjKFuUDWTbfcYHB8OHdXbjPujiEDfMIgumvDkMv39IZIeVr7E8I22ozeP5PB5qgBQw1xKjPPg93WqKCSnYYmRSdIfID3rGOMqeWCVwbJQpTyhlDhk83kuXgEC8VR0zIx4IQ%2FmRBn3U%2FvBsU7DgX0%2FguwlSO46QrSTPVH7JhNUc0eGs3NLiAeM6xErJLY02Z7IxCaBcFeoJsXz82vQUSLOuuLchdIxX2sInNYZzurmBiJG8RRwai47p5zVkIuzExUvduIDFVNEDXIeUeNUxuhxg%2BpbnM4lEJGxTpvDS%2BhTDKKZBl6X2bnoafOlyGgWSQiKs7jqZFicEUlq2YKJ%2FHJTycr4ZI98YhlmhoL63Sns3IeFxu3Bo5wNc4kiNt9SdxteBAvafR8Kfk%2BFsMCZEx8cMBIn%2F6DyJp4xEbzajB51gfZhgPoMhZCDCyqAidbVMMEJsWrjvQEetx23IOduR74uFCnH0NRiJGbwm%2FAeF7jx528%2FN075mS4oaT6Zzm0YbubxWGNOrKyeizqjJZoNrDeEQnENpiAoBlCi%2FL4XUiu%2BaeKISwMPfe8MEGOqUB%2Fs7naVWWKQJjNDhw2Rw%2FzMe9xtc7uDHd9IaNgiZNWbxEX1%2FA8SGWlRxCC%2BdD6kuG10BwWElUCQ%2BT%2BmL3JpZ6bAoKJ9%2BaAEQb2cSK2eGvNlNaUhFUgPdapOY5QnDLZ2ss9Miu9GxaIwqACc8b5t0CG3yRqEUEfa2BsrGiH8X3l3vH7Yx3jyi0b1kX9f%2FRJT6zKQSdjImEIBzlw9VlUrgsFslYoo9G&X-Amz-Signature=fb4a095935d5b4c7fc499a00bd2940f9076de49c7442b5fb598e94bb844a239c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZSBWSY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCZytXD9%2FQvgpuF8uMuLn33il2RWwF897oKhMLY%2B%2Fe6jQIgQspWs%2FDUHylngKHvepvSJDel5lkhiMGShhpOFyJteYQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaEj2mfNb%2BwefKj%2BCrcA6dxTFItIxxZEupJdvo4M5De%2BLGtM%2B0UNkx7%2B0XYFcvybpSPOeKLeSXIuXNdNkPAywPEsWswdWAi7RjKFuUDWTbfcYHB8OHdXbjPujiEDfMIgumvDkMv39IZIeVr7E8I22ozeP5PB5qgBQw1xKjPPg93WqKCSnYYmRSdIfID3rGOMqeWCVwbJQpTyhlDhk83kuXgEC8VR0zIx4IQ%2FmRBn3U%2FvBsU7DgX0%2FguwlSO46QrSTPVH7JhNUc0eGs3NLiAeM6xErJLY02Z7IxCaBcFeoJsXz82vQUSLOuuLchdIxX2sInNYZzurmBiJG8RRwai47p5zVkIuzExUvduIDFVNEDXIeUeNUxuhxg%2BpbnM4lEJGxTpvDS%2BhTDKKZBl6X2bnoafOlyGgWSQiKs7jqZFicEUlq2YKJ%2FHJTycr4ZI98YhlmhoL63Sns3IeFxu3Bo5wNc4kiNt9SdxteBAvafR8Kfk%2BFsMCZEx8cMBIn%2F6DyJp4xEbzajB51gfZhgPoMhZCDCyqAidbVMMEJsWrjvQEetx23IOduR74uFCnH0NRiJGbwm%2FAeF7jx528%2FN075mS4oaT6Zzm0YbubxWGNOrKyeizqjJZoNrDeEQnENpiAoBlCi%2FL4XUiu%2BaeKISwMPfe8MEGOqUB%2Fs7naVWWKQJjNDhw2Rw%2FzMe9xtc7uDHd9IaNgiZNWbxEX1%2FA8SGWlRxCC%2BdD6kuG10BwWElUCQ%2BT%2BmL3JpZ6bAoKJ9%2BaAEQb2cSK2eGvNlNaUhFUgPdapOY5QnDLZ2ss9Miu9GxaIwqACc8b5t0CG3yRqEUEfa2BsrGiH8X3l3vH7Yx3jyi0b1kX9f%2FRJT6zKQSdjImEIBzlw9VlUrgsFslYoo9G&X-Amz-Signature=dfce854e049dd80a385147740950ffc8ecc5d3b1ef91bb725a7f29ff14014121&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZSBWSY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCZytXD9%2FQvgpuF8uMuLn33il2RWwF897oKhMLY%2B%2Fe6jQIgQspWs%2FDUHylngKHvepvSJDel5lkhiMGShhpOFyJteYQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaEj2mfNb%2BwefKj%2BCrcA6dxTFItIxxZEupJdvo4M5De%2BLGtM%2B0UNkx7%2B0XYFcvybpSPOeKLeSXIuXNdNkPAywPEsWswdWAi7RjKFuUDWTbfcYHB8OHdXbjPujiEDfMIgumvDkMv39IZIeVr7E8I22ozeP5PB5qgBQw1xKjPPg93WqKCSnYYmRSdIfID3rGOMqeWCVwbJQpTyhlDhk83kuXgEC8VR0zIx4IQ%2FmRBn3U%2FvBsU7DgX0%2FguwlSO46QrSTPVH7JhNUc0eGs3NLiAeM6xErJLY02Z7IxCaBcFeoJsXz82vQUSLOuuLchdIxX2sInNYZzurmBiJG8RRwai47p5zVkIuzExUvduIDFVNEDXIeUeNUxuhxg%2BpbnM4lEJGxTpvDS%2BhTDKKZBl6X2bnoafOlyGgWSQiKs7jqZFicEUlq2YKJ%2FHJTycr4ZI98YhlmhoL63Sns3IeFxu3Bo5wNc4kiNt9SdxteBAvafR8Kfk%2BFsMCZEx8cMBIn%2F6DyJp4xEbzajB51gfZhgPoMhZCDCyqAidbVMMEJsWrjvQEetx23IOduR74uFCnH0NRiJGbwm%2FAeF7jx528%2FN075mS4oaT6Zzm0YbubxWGNOrKyeizqjJZoNrDeEQnENpiAoBlCi%2FL4XUiu%2BaeKISwMPfe8MEGOqUB%2Fs7naVWWKQJjNDhw2Rw%2FzMe9xtc7uDHd9IaNgiZNWbxEX1%2FA8SGWlRxCC%2BdD6kuG10BwWElUCQ%2BT%2BmL3JpZ6bAoKJ9%2BaAEQb2cSK2eGvNlNaUhFUgPdapOY5QnDLZ2ss9Miu9GxaIwqACc8b5t0CG3yRqEUEfa2BsrGiH8X3l3vH7Yx3jyi0b1kX9f%2FRJT6zKQSdjImEIBzlw9VlUrgsFslYoo9G&X-Amz-Signature=b3dcbddc5b95c9a9f654e9fc63cc2e2dd624fbc320ddf678da75535a68ec1601&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZSBWSY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCZytXD9%2FQvgpuF8uMuLn33il2RWwF897oKhMLY%2B%2Fe6jQIgQspWs%2FDUHylngKHvepvSJDel5lkhiMGShhpOFyJteYQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaEj2mfNb%2BwefKj%2BCrcA6dxTFItIxxZEupJdvo4M5De%2BLGtM%2B0UNkx7%2B0XYFcvybpSPOeKLeSXIuXNdNkPAywPEsWswdWAi7RjKFuUDWTbfcYHB8OHdXbjPujiEDfMIgumvDkMv39IZIeVr7E8I22ozeP5PB5qgBQw1xKjPPg93WqKCSnYYmRSdIfID3rGOMqeWCVwbJQpTyhlDhk83kuXgEC8VR0zIx4IQ%2FmRBn3U%2FvBsU7DgX0%2FguwlSO46QrSTPVH7JhNUc0eGs3NLiAeM6xErJLY02Z7IxCaBcFeoJsXz82vQUSLOuuLchdIxX2sInNYZzurmBiJG8RRwai47p5zVkIuzExUvduIDFVNEDXIeUeNUxuhxg%2BpbnM4lEJGxTpvDS%2BhTDKKZBl6X2bnoafOlyGgWSQiKs7jqZFicEUlq2YKJ%2FHJTycr4ZI98YhlmhoL63Sns3IeFxu3Bo5wNc4kiNt9SdxteBAvafR8Kfk%2BFsMCZEx8cMBIn%2F6DyJp4xEbzajB51gfZhgPoMhZCDCyqAidbVMMEJsWrjvQEetx23IOduR74uFCnH0NRiJGbwm%2FAeF7jx528%2FN075mS4oaT6Zzm0YbubxWGNOrKyeizqjJZoNrDeEQnENpiAoBlCi%2FL4XUiu%2BaeKISwMPfe8MEGOqUB%2Fs7naVWWKQJjNDhw2Rw%2FzMe9xtc7uDHd9IaNgiZNWbxEX1%2FA8SGWlRxCC%2BdD6kuG10BwWElUCQ%2BT%2BmL3JpZ6bAoKJ9%2BaAEQb2cSK2eGvNlNaUhFUgPdapOY5QnDLZ2ss9Miu9GxaIwqACc8b5t0CG3yRqEUEfa2BsrGiH8X3l3vH7Yx3jyi0b1kX9f%2FRJT6zKQSdjImEIBzlw9VlUrgsFslYoo9G&X-Amz-Signature=276c9103d61719a1de731085f7b245c72f15c4e56ed6396d265aa1233ce2d198&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZSBWSY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCZytXD9%2FQvgpuF8uMuLn33il2RWwF897oKhMLY%2B%2Fe6jQIgQspWs%2FDUHylngKHvepvSJDel5lkhiMGShhpOFyJteYQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaEj2mfNb%2BwefKj%2BCrcA6dxTFItIxxZEupJdvo4M5De%2BLGtM%2B0UNkx7%2B0XYFcvybpSPOeKLeSXIuXNdNkPAywPEsWswdWAi7RjKFuUDWTbfcYHB8OHdXbjPujiEDfMIgumvDkMv39IZIeVr7E8I22ozeP5PB5qgBQw1xKjPPg93WqKCSnYYmRSdIfID3rGOMqeWCVwbJQpTyhlDhk83kuXgEC8VR0zIx4IQ%2FmRBn3U%2FvBsU7DgX0%2FguwlSO46QrSTPVH7JhNUc0eGs3NLiAeM6xErJLY02Z7IxCaBcFeoJsXz82vQUSLOuuLchdIxX2sInNYZzurmBiJG8RRwai47p5zVkIuzExUvduIDFVNEDXIeUeNUxuhxg%2BpbnM4lEJGxTpvDS%2BhTDKKZBl6X2bnoafOlyGgWSQiKs7jqZFicEUlq2YKJ%2FHJTycr4ZI98YhlmhoL63Sns3IeFxu3Bo5wNc4kiNt9SdxteBAvafR8Kfk%2BFsMCZEx8cMBIn%2F6DyJp4xEbzajB51gfZhgPoMhZCDCyqAidbVMMEJsWrjvQEetx23IOduR74uFCnH0NRiJGbwm%2FAeF7jx528%2FN075mS4oaT6Zzm0YbubxWGNOrKyeizqjJZoNrDeEQnENpiAoBlCi%2FL4XUiu%2BaeKISwMPfe8MEGOqUB%2Fs7naVWWKQJjNDhw2Rw%2FzMe9xtc7uDHd9IaNgiZNWbxEX1%2FA8SGWlRxCC%2BdD6kuG10BwWElUCQ%2BT%2BmL3JpZ6bAoKJ9%2BaAEQb2cSK2eGvNlNaUhFUgPdapOY5QnDLZ2ss9Miu9GxaIwqACc8b5t0CG3yRqEUEfa2BsrGiH8X3l3vH7Yx3jyi0b1kX9f%2FRJT6zKQSdjImEIBzlw9VlUrgsFslYoo9G&X-Amz-Signature=8a71549e49f84441b3efc78630747431edda94245fb841ed0086376d713e6ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

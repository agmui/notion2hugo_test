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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKXTN26%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL7jzh131gvhovSyCr3pewMUBmojS0e%2FLq325ppIb3dAiBwlX24lGLs4SRawZl4yZ%2BbsaAsenAe%2FEaJR6Q4QIjjJSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXmzwQ0x9J8xBo8fmKtwDNCRDwZADLrAIhpz4NMT%2BJ85g19PxzGPKx%2FTyQHYaQNUsniav%2FZCWW5B8aSW6rs%2BhQWnen9dBjEQHNw6ZA%2FXP24n75RD9RsZy4EeUSNm82aJFdrWTBtsNAfN7KnE2hEVvTmbG8do2k3m6My%2BTkzls%2FjfOzeWxdFhdVLKZZDZQBZNmGH3qgKIAXBWsc2oVHJ8XBMawKWSKZC0wO07EhPj9dzzCZW0NJR39Hsq3QFU7sUwCmVWLlSoCQhQLjEPcfOZHyUzOrNOy%2FkGoUj%2FOY3qNzNOVBiVlzgW03HoSdedHTpZhy8yYpYAfVYSGp4nsviGuiORAGw7LPOw0wOqROr6Nl3SfBe17pZ%2BT1WYT1%2F8ZyIl9ui57pfdudBSfpkyh1NEyCGqsy%2BTwy5w9BEGOXLD%2FBzd%2BOBCMkyLC38HFiFtB5DU8hVf4RT1%2FAKQjgYhon4IUliBwiTwLX6E4MmIJfhkF8INGa%2BRzMGGp18x%2ByqN7PiXLdK44qGfn68FfvKmRrprhaLyc44aFJf%2Be4fe1oSeGLue0g9mfZ59%2BvKgg7oMtaWXe4t6NjW7Q0H%2FlFvqbARV4oBHGJi2wyQjX56XEoENAgZUw00ChQb6URQPLGrF%2F6BpFZK1XWeJvHISK8nMw5pyvwAY6pgES3CpAW4hyemadqZihi2vKTiQWmZThvOzY4zNrsshxMR1uUXUYPQ30YKdAhEFE1WUcf3RR1XTUSh10wM1nPBptHHykqBS5dvM2yvqsWnQhxFL65yrHqbS8%2BDsmzYp81%2BZneX9%2Fz3fxvQpzXv0OxN2hDRXB2rXwP8qZUayChgluDlLBB%2B%2B5fHv3yatOiQtymyqJTliTX55s3Yv5pM7JNTZ4S9x9O2yg&X-Amz-Signature=6f6147d0a5a282414e7f41719fbcb5a026cb70499a4943aeed2afa2d176f3d60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKXTN26%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL7jzh131gvhovSyCr3pewMUBmojS0e%2FLq325ppIb3dAiBwlX24lGLs4SRawZl4yZ%2BbsaAsenAe%2FEaJR6Q4QIjjJSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXmzwQ0x9J8xBo8fmKtwDNCRDwZADLrAIhpz4NMT%2BJ85g19PxzGPKx%2FTyQHYaQNUsniav%2FZCWW5B8aSW6rs%2BhQWnen9dBjEQHNw6ZA%2FXP24n75RD9RsZy4EeUSNm82aJFdrWTBtsNAfN7KnE2hEVvTmbG8do2k3m6My%2BTkzls%2FjfOzeWxdFhdVLKZZDZQBZNmGH3qgKIAXBWsc2oVHJ8XBMawKWSKZC0wO07EhPj9dzzCZW0NJR39Hsq3QFU7sUwCmVWLlSoCQhQLjEPcfOZHyUzOrNOy%2FkGoUj%2FOY3qNzNOVBiVlzgW03HoSdedHTpZhy8yYpYAfVYSGp4nsviGuiORAGw7LPOw0wOqROr6Nl3SfBe17pZ%2BT1WYT1%2F8ZyIl9ui57pfdudBSfpkyh1NEyCGqsy%2BTwy5w9BEGOXLD%2FBzd%2BOBCMkyLC38HFiFtB5DU8hVf4RT1%2FAKQjgYhon4IUliBwiTwLX6E4MmIJfhkF8INGa%2BRzMGGp18x%2ByqN7PiXLdK44qGfn68FfvKmRrprhaLyc44aFJf%2Be4fe1oSeGLue0g9mfZ59%2BvKgg7oMtaWXe4t6NjW7Q0H%2FlFvqbARV4oBHGJi2wyQjX56XEoENAgZUw00ChQb6URQPLGrF%2F6BpFZK1XWeJvHISK8nMw5pyvwAY6pgES3CpAW4hyemadqZihi2vKTiQWmZThvOzY4zNrsshxMR1uUXUYPQ30YKdAhEFE1WUcf3RR1XTUSh10wM1nPBptHHykqBS5dvM2yvqsWnQhxFL65yrHqbS8%2BDsmzYp81%2BZneX9%2Fz3fxvQpzXv0OxN2hDRXB2rXwP8qZUayChgluDlLBB%2B%2B5fHv3yatOiQtymyqJTliTX55s3Yv5pM7JNTZ4S9x9O2yg&X-Amz-Signature=bc834f35ee566870df0cb288ccd2dba740944a65a3e683343d71acbe7158f3d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKXTN26%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL7jzh131gvhovSyCr3pewMUBmojS0e%2FLq325ppIb3dAiBwlX24lGLs4SRawZl4yZ%2BbsaAsenAe%2FEaJR6Q4QIjjJSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXmzwQ0x9J8xBo8fmKtwDNCRDwZADLrAIhpz4NMT%2BJ85g19PxzGPKx%2FTyQHYaQNUsniav%2FZCWW5B8aSW6rs%2BhQWnen9dBjEQHNw6ZA%2FXP24n75RD9RsZy4EeUSNm82aJFdrWTBtsNAfN7KnE2hEVvTmbG8do2k3m6My%2BTkzls%2FjfOzeWxdFhdVLKZZDZQBZNmGH3qgKIAXBWsc2oVHJ8XBMawKWSKZC0wO07EhPj9dzzCZW0NJR39Hsq3QFU7sUwCmVWLlSoCQhQLjEPcfOZHyUzOrNOy%2FkGoUj%2FOY3qNzNOVBiVlzgW03HoSdedHTpZhy8yYpYAfVYSGp4nsviGuiORAGw7LPOw0wOqROr6Nl3SfBe17pZ%2BT1WYT1%2F8ZyIl9ui57pfdudBSfpkyh1NEyCGqsy%2BTwy5w9BEGOXLD%2FBzd%2BOBCMkyLC38HFiFtB5DU8hVf4RT1%2FAKQjgYhon4IUliBwiTwLX6E4MmIJfhkF8INGa%2BRzMGGp18x%2ByqN7PiXLdK44qGfn68FfvKmRrprhaLyc44aFJf%2Be4fe1oSeGLue0g9mfZ59%2BvKgg7oMtaWXe4t6NjW7Q0H%2FlFvqbARV4oBHGJi2wyQjX56XEoENAgZUw00ChQb6URQPLGrF%2F6BpFZK1XWeJvHISK8nMw5pyvwAY6pgES3CpAW4hyemadqZihi2vKTiQWmZThvOzY4zNrsshxMR1uUXUYPQ30YKdAhEFE1WUcf3RR1XTUSh10wM1nPBptHHykqBS5dvM2yvqsWnQhxFL65yrHqbS8%2BDsmzYp81%2BZneX9%2Fz3fxvQpzXv0OxN2hDRXB2rXwP8qZUayChgluDlLBB%2B%2B5fHv3yatOiQtymyqJTliTX55s3Yv5pM7JNTZ4S9x9O2yg&X-Amz-Signature=614821f1198b6eb6dcef16b6395353335a6cb772a96aa375c4b923f4f3b8dbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKXTN26%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL7jzh131gvhovSyCr3pewMUBmojS0e%2FLq325ppIb3dAiBwlX24lGLs4SRawZl4yZ%2BbsaAsenAe%2FEaJR6Q4QIjjJSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXmzwQ0x9J8xBo8fmKtwDNCRDwZADLrAIhpz4NMT%2BJ85g19PxzGPKx%2FTyQHYaQNUsniav%2FZCWW5B8aSW6rs%2BhQWnen9dBjEQHNw6ZA%2FXP24n75RD9RsZy4EeUSNm82aJFdrWTBtsNAfN7KnE2hEVvTmbG8do2k3m6My%2BTkzls%2FjfOzeWxdFhdVLKZZDZQBZNmGH3qgKIAXBWsc2oVHJ8XBMawKWSKZC0wO07EhPj9dzzCZW0NJR39Hsq3QFU7sUwCmVWLlSoCQhQLjEPcfOZHyUzOrNOy%2FkGoUj%2FOY3qNzNOVBiVlzgW03HoSdedHTpZhy8yYpYAfVYSGp4nsviGuiORAGw7LPOw0wOqROr6Nl3SfBe17pZ%2BT1WYT1%2F8ZyIl9ui57pfdudBSfpkyh1NEyCGqsy%2BTwy5w9BEGOXLD%2FBzd%2BOBCMkyLC38HFiFtB5DU8hVf4RT1%2FAKQjgYhon4IUliBwiTwLX6E4MmIJfhkF8INGa%2BRzMGGp18x%2ByqN7PiXLdK44qGfn68FfvKmRrprhaLyc44aFJf%2Be4fe1oSeGLue0g9mfZ59%2BvKgg7oMtaWXe4t6NjW7Q0H%2FlFvqbARV4oBHGJi2wyQjX56XEoENAgZUw00ChQb6URQPLGrF%2F6BpFZK1XWeJvHISK8nMw5pyvwAY6pgES3CpAW4hyemadqZihi2vKTiQWmZThvOzY4zNrsshxMR1uUXUYPQ30YKdAhEFE1WUcf3RR1XTUSh10wM1nPBptHHykqBS5dvM2yvqsWnQhxFL65yrHqbS8%2BDsmzYp81%2BZneX9%2Fz3fxvQpzXv0OxN2hDRXB2rXwP8qZUayChgluDlLBB%2B%2B5fHv3yatOiQtymyqJTliTX55s3Yv5pM7JNTZ4S9x9O2yg&X-Amz-Signature=4889f4cb7c34e3bb914b18bb6e35dd697ac3fca971ecc7cca6c8a3710a8cd909&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKXTN26%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL7jzh131gvhovSyCr3pewMUBmojS0e%2FLq325ppIb3dAiBwlX24lGLs4SRawZl4yZ%2BbsaAsenAe%2FEaJR6Q4QIjjJSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXmzwQ0x9J8xBo8fmKtwDNCRDwZADLrAIhpz4NMT%2BJ85g19PxzGPKx%2FTyQHYaQNUsniav%2FZCWW5B8aSW6rs%2BhQWnen9dBjEQHNw6ZA%2FXP24n75RD9RsZy4EeUSNm82aJFdrWTBtsNAfN7KnE2hEVvTmbG8do2k3m6My%2BTkzls%2FjfOzeWxdFhdVLKZZDZQBZNmGH3qgKIAXBWsc2oVHJ8XBMawKWSKZC0wO07EhPj9dzzCZW0NJR39Hsq3QFU7sUwCmVWLlSoCQhQLjEPcfOZHyUzOrNOy%2FkGoUj%2FOY3qNzNOVBiVlzgW03HoSdedHTpZhy8yYpYAfVYSGp4nsviGuiORAGw7LPOw0wOqROr6Nl3SfBe17pZ%2BT1WYT1%2F8ZyIl9ui57pfdudBSfpkyh1NEyCGqsy%2BTwy5w9BEGOXLD%2FBzd%2BOBCMkyLC38HFiFtB5DU8hVf4RT1%2FAKQjgYhon4IUliBwiTwLX6E4MmIJfhkF8INGa%2BRzMGGp18x%2ByqN7PiXLdK44qGfn68FfvKmRrprhaLyc44aFJf%2Be4fe1oSeGLue0g9mfZ59%2BvKgg7oMtaWXe4t6NjW7Q0H%2FlFvqbARV4oBHGJi2wyQjX56XEoENAgZUw00ChQb6URQPLGrF%2F6BpFZK1XWeJvHISK8nMw5pyvwAY6pgES3CpAW4hyemadqZihi2vKTiQWmZThvOzY4zNrsshxMR1uUXUYPQ30YKdAhEFE1WUcf3RR1XTUSh10wM1nPBptHHykqBS5dvM2yvqsWnQhxFL65yrHqbS8%2BDsmzYp81%2BZneX9%2Fz3fxvQpzXv0OxN2hDRXB2rXwP8qZUayChgluDlLBB%2B%2B5fHv3yatOiQtymyqJTliTX55s3Yv5pM7JNTZ4S9x9O2yg&X-Amz-Signature=106b3501949820fb2d65c785ae51a89e66a36ba1650d70e29c0a6bb4d09b4351&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKXTN26%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL7jzh131gvhovSyCr3pewMUBmojS0e%2FLq325ppIb3dAiBwlX24lGLs4SRawZl4yZ%2BbsaAsenAe%2FEaJR6Q4QIjjJSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXmzwQ0x9J8xBo8fmKtwDNCRDwZADLrAIhpz4NMT%2BJ85g19PxzGPKx%2FTyQHYaQNUsniav%2FZCWW5B8aSW6rs%2BhQWnen9dBjEQHNw6ZA%2FXP24n75RD9RsZy4EeUSNm82aJFdrWTBtsNAfN7KnE2hEVvTmbG8do2k3m6My%2BTkzls%2FjfOzeWxdFhdVLKZZDZQBZNmGH3qgKIAXBWsc2oVHJ8XBMawKWSKZC0wO07EhPj9dzzCZW0NJR39Hsq3QFU7sUwCmVWLlSoCQhQLjEPcfOZHyUzOrNOy%2FkGoUj%2FOY3qNzNOVBiVlzgW03HoSdedHTpZhy8yYpYAfVYSGp4nsviGuiORAGw7LPOw0wOqROr6Nl3SfBe17pZ%2BT1WYT1%2F8ZyIl9ui57pfdudBSfpkyh1NEyCGqsy%2BTwy5w9BEGOXLD%2FBzd%2BOBCMkyLC38HFiFtB5DU8hVf4RT1%2FAKQjgYhon4IUliBwiTwLX6E4MmIJfhkF8INGa%2BRzMGGp18x%2ByqN7PiXLdK44qGfn68FfvKmRrprhaLyc44aFJf%2Be4fe1oSeGLue0g9mfZ59%2BvKgg7oMtaWXe4t6NjW7Q0H%2FlFvqbARV4oBHGJi2wyQjX56XEoENAgZUw00ChQb6URQPLGrF%2F6BpFZK1XWeJvHISK8nMw5pyvwAY6pgES3CpAW4hyemadqZihi2vKTiQWmZThvOzY4zNrsshxMR1uUXUYPQ30YKdAhEFE1WUcf3RR1XTUSh10wM1nPBptHHykqBS5dvM2yvqsWnQhxFL65yrHqbS8%2BDsmzYp81%2BZneX9%2Fz3fxvQpzXv0OxN2hDRXB2rXwP8qZUayChgluDlLBB%2B%2B5fHv3yatOiQtymyqJTliTX55s3Yv5pM7JNTZ4S9x9O2yg&X-Amz-Signature=36855665293bd519002fff3be1067d8fdc076f987e49262b3eda4eb1306108d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKXTN26%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL7jzh131gvhovSyCr3pewMUBmojS0e%2FLq325ppIb3dAiBwlX24lGLs4SRawZl4yZ%2BbsaAsenAe%2FEaJR6Q4QIjjJSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXmzwQ0x9J8xBo8fmKtwDNCRDwZADLrAIhpz4NMT%2BJ85g19PxzGPKx%2FTyQHYaQNUsniav%2FZCWW5B8aSW6rs%2BhQWnen9dBjEQHNw6ZA%2FXP24n75RD9RsZy4EeUSNm82aJFdrWTBtsNAfN7KnE2hEVvTmbG8do2k3m6My%2BTkzls%2FjfOzeWxdFhdVLKZZDZQBZNmGH3qgKIAXBWsc2oVHJ8XBMawKWSKZC0wO07EhPj9dzzCZW0NJR39Hsq3QFU7sUwCmVWLlSoCQhQLjEPcfOZHyUzOrNOy%2FkGoUj%2FOY3qNzNOVBiVlzgW03HoSdedHTpZhy8yYpYAfVYSGp4nsviGuiORAGw7LPOw0wOqROr6Nl3SfBe17pZ%2BT1WYT1%2F8ZyIl9ui57pfdudBSfpkyh1NEyCGqsy%2BTwy5w9BEGOXLD%2FBzd%2BOBCMkyLC38HFiFtB5DU8hVf4RT1%2FAKQjgYhon4IUliBwiTwLX6E4MmIJfhkF8INGa%2BRzMGGp18x%2ByqN7PiXLdK44qGfn68FfvKmRrprhaLyc44aFJf%2Be4fe1oSeGLue0g9mfZ59%2BvKgg7oMtaWXe4t6NjW7Q0H%2FlFvqbARV4oBHGJi2wyQjX56XEoENAgZUw00ChQb6URQPLGrF%2F6BpFZK1XWeJvHISK8nMw5pyvwAY6pgES3CpAW4hyemadqZihi2vKTiQWmZThvOzY4zNrsshxMR1uUXUYPQ30YKdAhEFE1WUcf3RR1XTUSh10wM1nPBptHHykqBS5dvM2yvqsWnQhxFL65yrHqbS8%2BDsmzYp81%2BZneX9%2Fz3fxvQpzXv0OxN2hDRXB2rXwP8qZUayChgluDlLBB%2B%2B5fHv3yatOiQtymyqJTliTX55s3Yv5pM7JNTZ4S9x9O2yg&X-Amz-Signature=d2572a154d1644a0df10df416aacc001044518e5b2a85cc9b2456dfb919dacb2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

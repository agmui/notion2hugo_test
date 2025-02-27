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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KURIZED%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDTduKRBL02XVa1QE8x5oj7ZQFIRdCBBbA%2BZOTo8nY9nwIhALcEcRPs1VhPLMEGrPc7aPVXH%2FGruMzZzmw3BdSg4AmOKv8DCG0QABoMNjM3NDIzMTgzODA1Igwag%2BkKeTv5t4cz4Sgq3AMDFnas0DnMnU4dv6ihAvKSrpX%2B7uYgQQGtoCklsFfppx9TrOXXzwekOKVWW3ciiXQz0nTiO9oRKUvqNkGt3ncji1bp23O0wJt9OLgdNpVHj7e6B%2BZfl2YECh%2FZ55iQlShhebDxBSAIN07kmQqpxzg9Km0wYYtC3%2FGtzodLr1w%2FhUrcCsiOlChsezOQqzVA7i5emMyD6bXcPQRSe179CbJ8QA120yszmKu9OtsUs6M6ExrKqMQ8vJ7StMxZ4s8cghouLnzS%2BfDwoPQhOOmApMOoVnKwm2hV5nuEv7wnmq%2BRh07CxPiwWNYzkVAtsk6E5K7%2BoXejJmA%2BRXEkNjCevDU39lid5O0UJ%2FD5aoZAB8YlXWkdPHuc9FV07GUhbGfWBLDFBPtYU8hDmCAo3TFV%2BeMJ1v6WdWl2xaqNH%2FhDk3%2FkxRXfbkY9Ua3w4ihZ8jmRh3jGk2J%2FHzUiS4N8f26whk51LgwYTba8H1k5ofVtDawrNbEqhDEJS3seJzkV7suLLXPHJJLxJ7BzkDZJHS1M6ibbtdhWguR89zYkq13m7RLYGHYFekr7mn2RjLL0K3Ou6swprOzUuio548sdYsRNeu2t4uG8zSoEBYlIJ70d5W0KY%2F%2FUI5hAsywwv6pKeTDO0P%2B9BjqkAVhI8v2CsWzcCnjJe2nfRJeKLq0xhyqfTlwK%2BK6XJjB9%2BlKBRyIJBvkuWA8MXi28jT7c4t2LcwNIcRI6Kkh23mUimn2rFOPSScjPmMGFZ%2FukfkKaoInwgEiUSAI0WVohtN5olgxx1sJXm0JMGfVSINKx8M0EwEUVj96pK6At1pM6xczrI9RkzADZt%2FXztTSp4SPJCcDd%2FAJCMtewjqnnNGMrDOxU&X-Amz-Signature=446ac004c7ddd96f453724e07f1898bbeab360d7f25f92c0c75a798b8aa6a530&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KURIZED%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDTduKRBL02XVa1QE8x5oj7ZQFIRdCBBbA%2BZOTo8nY9nwIhALcEcRPs1VhPLMEGrPc7aPVXH%2FGruMzZzmw3BdSg4AmOKv8DCG0QABoMNjM3NDIzMTgzODA1Igwag%2BkKeTv5t4cz4Sgq3AMDFnas0DnMnU4dv6ihAvKSrpX%2B7uYgQQGtoCklsFfppx9TrOXXzwekOKVWW3ciiXQz0nTiO9oRKUvqNkGt3ncji1bp23O0wJt9OLgdNpVHj7e6B%2BZfl2YECh%2FZ55iQlShhebDxBSAIN07kmQqpxzg9Km0wYYtC3%2FGtzodLr1w%2FhUrcCsiOlChsezOQqzVA7i5emMyD6bXcPQRSe179CbJ8QA120yszmKu9OtsUs6M6ExrKqMQ8vJ7StMxZ4s8cghouLnzS%2BfDwoPQhOOmApMOoVnKwm2hV5nuEv7wnmq%2BRh07CxPiwWNYzkVAtsk6E5K7%2BoXejJmA%2BRXEkNjCevDU39lid5O0UJ%2FD5aoZAB8YlXWkdPHuc9FV07GUhbGfWBLDFBPtYU8hDmCAo3TFV%2BeMJ1v6WdWl2xaqNH%2FhDk3%2FkxRXfbkY9Ua3w4ihZ8jmRh3jGk2J%2FHzUiS4N8f26whk51LgwYTba8H1k5ofVtDawrNbEqhDEJS3seJzkV7suLLXPHJJLxJ7BzkDZJHS1M6ibbtdhWguR89zYkq13m7RLYGHYFekr7mn2RjLL0K3Ou6swprOzUuio548sdYsRNeu2t4uG8zSoEBYlIJ70d5W0KY%2F%2FUI5hAsywwv6pKeTDO0P%2B9BjqkAVhI8v2CsWzcCnjJe2nfRJeKLq0xhyqfTlwK%2BK6XJjB9%2BlKBRyIJBvkuWA8MXi28jT7c4t2LcwNIcRI6Kkh23mUimn2rFOPSScjPmMGFZ%2FukfkKaoInwgEiUSAI0WVohtN5olgxx1sJXm0JMGfVSINKx8M0EwEUVj96pK6At1pM6xczrI9RkzADZt%2FXztTSp4SPJCcDd%2FAJCMtewjqnnNGMrDOxU&X-Amz-Signature=1f03eab1481c5b60cd676686e57bbf7e187ee16470058144475480800976f731&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KURIZED%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDTduKRBL02XVa1QE8x5oj7ZQFIRdCBBbA%2BZOTo8nY9nwIhALcEcRPs1VhPLMEGrPc7aPVXH%2FGruMzZzmw3BdSg4AmOKv8DCG0QABoMNjM3NDIzMTgzODA1Igwag%2BkKeTv5t4cz4Sgq3AMDFnas0DnMnU4dv6ihAvKSrpX%2B7uYgQQGtoCklsFfppx9TrOXXzwekOKVWW3ciiXQz0nTiO9oRKUvqNkGt3ncji1bp23O0wJt9OLgdNpVHj7e6B%2BZfl2YECh%2FZ55iQlShhebDxBSAIN07kmQqpxzg9Km0wYYtC3%2FGtzodLr1w%2FhUrcCsiOlChsezOQqzVA7i5emMyD6bXcPQRSe179CbJ8QA120yszmKu9OtsUs6M6ExrKqMQ8vJ7StMxZ4s8cghouLnzS%2BfDwoPQhOOmApMOoVnKwm2hV5nuEv7wnmq%2BRh07CxPiwWNYzkVAtsk6E5K7%2BoXejJmA%2BRXEkNjCevDU39lid5O0UJ%2FD5aoZAB8YlXWkdPHuc9FV07GUhbGfWBLDFBPtYU8hDmCAo3TFV%2BeMJ1v6WdWl2xaqNH%2FhDk3%2FkxRXfbkY9Ua3w4ihZ8jmRh3jGk2J%2FHzUiS4N8f26whk51LgwYTba8H1k5ofVtDawrNbEqhDEJS3seJzkV7suLLXPHJJLxJ7BzkDZJHS1M6ibbtdhWguR89zYkq13m7RLYGHYFekr7mn2RjLL0K3Ou6swprOzUuio548sdYsRNeu2t4uG8zSoEBYlIJ70d5W0KY%2F%2FUI5hAsywwv6pKeTDO0P%2B9BjqkAVhI8v2CsWzcCnjJe2nfRJeKLq0xhyqfTlwK%2BK6XJjB9%2BlKBRyIJBvkuWA8MXi28jT7c4t2LcwNIcRI6Kkh23mUimn2rFOPSScjPmMGFZ%2FukfkKaoInwgEiUSAI0WVohtN5olgxx1sJXm0JMGfVSINKx8M0EwEUVj96pK6At1pM6xczrI9RkzADZt%2FXztTSp4SPJCcDd%2FAJCMtewjqnnNGMrDOxU&X-Amz-Signature=52840d2930dd47d3ec6e6072ad7cc3a6141a89195e2fdd5d50684865d4163c35&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KURIZED%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDTduKRBL02XVa1QE8x5oj7ZQFIRdCBBbA%2BZOTo8nY9nwIhALcEcRPs1VhPLMEGrPc7aPVXH%2FGruMzZzmw3BdSg4AmOKv8DCG0QABoMNjM3NDIzMTgzODA1Igwag%2BkKeTv5t4cz4Sgq3AMDFnas0DnMnU4dv6ihAvKSrpX%2B7uYgQQGtoCklsFfppx9TrOXXzwekOKVWW3ciiXQz0nTiO9oRKUvqNkGt3ncji1bp23O0wJt9OLgdNpVHj7e6B%2BZfl2YECh%2FZ55iQlShhebDxBSAIN07kmQqpxzg9Km0wYYtC3%2FGtzodLr1w%2FhUrcCsiOlChsezOQqzVA7i5emMyD6bXcPQRSe179CbJ8QA120yszmKu9OtsUs6M6ExrKqMQ8vJ7StMxZ4s8cghouLnzS%2BfDwoPQhOOmApMOoVnKwm2hV5nuEv7wnmq%2BRh07CxPiwWNYzkVAtsk6E5K7%2BoXejJmA%2BRXEkNjCevDU39lid5O0UJ%2FD5aoZAB8YlXWkdPHuc9FV07GUhbGfWBLDFBPtYU8hDmCAo3TFV%2BeMJ1v6WdWl2xaqNH%2FhDk3%2FkxRXfbkY9Ua3w4ihZ8jmRh3jGk2J%2FHzUiS4N8f26whk51LgwYTba8H1k5ofVtDawrNbEqhDEJS3seJzkV7suLLXPHJJLxJ7BzkDZJHS1M6ibbtdhWguR89zYkq13m7RLYGHYFekr7mn2RjLL0K3Ou6swprOzUuio548sdYsRNeu2t4uG8zSoEBYlIJ70d5W0KY%2F%2FUI5hAsywwv6pKeTDO0P%2B9BjqkAVhI8v2CsWzcCnjJe2nfRJeKLq0xhyqfTlwK%2BK6XJjB9%2BlKBRyIJBvkuWA8MXi28jT7c4t2LcwNIcRI6Kkh23mUimn2rFOPSScjPmMGFZ%2FukfkKaoInwgEiUSAI0WVohtN5olgxx1sJXm0JMGfVSINKx8M0EwEUVj96pK6At1pM6xczrI9RkzADZt%2FXztTSp4SPJCcDd%2FAJCMtewjqnnNGMrDOxU&X-Amz-Signature=a8b25704efd20d78b577cbcd7cce0a85f8726bd7933b24ec6703a688d2545179&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KURIZED%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDTduKRBL02XVa1QE8x5oj7ZQFIRdCBBbA%2BZOTo8nY9nwIhALcEcRPs1VhPLMEGrPc7aPVXH%2FGruMzZzmw3BdSg4AmOKv8DCG0QABoMNjM3NDIzMTgzODA1Igwag%2BkKeTv5t4cz4Sgq3AMDFnas0DnMnU4dv6ihAvKSrpX%2B7uYgQQGtoCklsFfppx9TrOXXzwekOKVWW3ciiXQz0nTiO9oRKUvqNkGt3ncji1bp23O0wJt9OLgdNpVHj7e6B%2BZfl2YECh%2FZ55iQlShhebDxBSAIN07kmQqpxzg9Km0wYYtC3%2FGtzodLr1w%2FhUrcCsiOlChsezOQqzVA7i5emMyD6bXcPQRSe179CbJ8QA120yszmKu9OtsUs6M6ExrKqMQ8vJ7StMxZ4s8cghouLnzS%2BfDwoPQhOOmApMOoVnKwm2hV5nuEv7wnmq%2BRh07CxPiwWNYzkVAtsk6E5K7%2BoXejJmA%2BRXEkNjCevDU39lid5O0UJ%2FD5aoZAB8YlXWkdPHuc9FV07GUhbGfWBLDFBPtYU8hDmCAo3TFV%2BeMJ1v6WdWl2xaqNH%2FhDk3%2FkxRXfbkY9Ua3w4ihZ8jmRh3jGk2J%2FHzUiS4N8f26whk51LgwYTba8H1k5ofVtDawrNbEqhDEJS3seJzkV7suLLXPHJJLxJ7BzkDZJHS1M6ibbtdhWguR89zYkq13m7RLYGHYFekr7mn2RjLL0K3Ou6swprOzUuio548sdYsRNeu2t4uG8zSoEBYlIJ70d5W0KY%2F%2FUI5hAsywwv6pKeTDO0P%2B9BjqkAVhI8v2CsWzcCnjJe2nfRJeKLq0xhyqfTlwK%2BK6XJjB9%2BlKBRyIJBvkuWA8MXi28jT7c4t2LcwNIcRI6Kkh23mUimn2rFOPSScjPmMGFZ%2FukfkKaoInwgEiUSAI0WVohtN5olgxx1sJXm0JMGfVSINKx8M0EwEUVj96pK6At1pM6xczrI9RkzADZt%2FXztTSp4SPJCcDd%2FAJCMtewjqnnNGMrDOxU&X-Amz-Signature=72cd6f1407d8e1e53c6505e1663ee395a9993ec57c3fb15e17335b788aec4d04&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KURIZED%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDTduKRBL02XVa1QE8x5oj7ZQFIRdCBBbA%2BZOTo8nY9nwIhALcEcRPs1VhPLMEGrPc7aPVXH%2FGruMzZzmw3BdSg4AmOKv8DCG0QABoMNjM3NDIzMTgzODA1Igwag%2BkKeTv5t4cz4Sgq3AMDFnas0DnMnU4dv6ihAvKSrpX%2B7uYgQQGtoCklsFfppx9TrOXXzwekOKVWW3ciiXQz0nTiO9oRKUvqNkGt3ncji1bp23O0wJt9OLgdNpVHj7e6B%2BZfl2YECh%2FZ55iQlShhebDxBSAIN07kmQqpxzg9Km0wYYtC3%2FGtzodLr1w%2FhUrcCsiOlChsezOQqzVA7i5emMyD6bXcPQRSe179CbJ8QA120yszmKu9OtsUs6M6ExrKqMQ8vJ7StMxZ4s8cghouLnzS%2BfDwoPQhOOmApMOoVnKwm2hV5nuEv7wnmq%2BRh07CxPiwWNYzkVAtsk6E5K7%2BoXejJmA%2BRXEkNjCevDU39lid5O0UJ%2FD5aoZAB8YlXWkdPHuc9FV07GUhbGfWBLDFBPtYU8hDmCAo3TFV%2BeMJ1v6WdWl2xaqNH%2FhDk3%2FkxRXfbkY9Ua3w4ihZ8jmRh3jGk2J%2FHzUiS4N8f26whk51LgwYTba8H1k5ofVtDawrNbEqhDEJS3seJzkV7suLLXPHJJLxJ7BzkDZJHS1M6ibbtdhWguR89zYkq13m7RLYGHYFekr7mn2RjLL0K3Ou6swprOzUuio548sdYsRNeu2t4uG8zSoEBYlIJ70d5W0KY%2F%2FUI5hAsywwv6pKeTDO0P%2B9BjqkAVhI8v2CsWzcCnjJe2nfRJeKLq0xhyqfTlwK%2BK6XJjB9%2BlKBRyIJBvkuWA8MXi28jT7c4t2LcwNIcRI6Kkh23mUimn2rFOPSScjPmMGFZ%2FukfkKaoInwgEiUSAI0WVohtN5olgxx1sJXm0JMGfVSINKx8M0EwEUVj96pK6At1pM6xczrI9RkzADZt%2FXztTSp4SPJCcDd%2FAJCMtewjqnnNGMrDOxU&X-Amz-Signature=86e59b846b5ecd20b1bb8cf32f3c76019f2df6aec0296ebd202fa96f5d71b351&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KURIZED%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDTduKRBL02XVa1QE8x5oj7ZQFIRdCBBbA%2BZOTo8nY9nwIhALcEcRPs1VhPLMEGrPc7aPVXH%2FGruMzZzmw3BdSg4AmOKv8DCG0QABoMNjM3NDIzMTgzODA1Igwag%2BkKeTv5t4cz4Sgq3AMDFnas0DnMnU4dv6ihAvKSrpX%2B7uYgQQGtoCklsFfppx9TrOXXzwekOKVWW3ciiXQz0nTiO9oRKUvqNkGt3ncji1bp23O0wJt9OLgdNpVHj7e6B%2BZfl2YECh%2FZ55iQlShhebDxBSAIN07kmQqpxzg9Km0wYYtC3%2FGtzodLr1w%2FhUrcCsiOlChsezOQqzVA7i5emMyD6bXcPQRSe179CbJ8QA120yszmKu9OtsUs6M6ExrKqMQ8vJ7StMxZ4s8cghouLnzS%2BfDwoPQhOOmApMOoVnKwm2hV5nuEv7wnmq%2BRh07CxPiwWNYzkVAtsk6E5K7%2BoXejJmA%2BRXEkNjCevDU39lid5O0UJ%2FD5aoZAB8YlXWkdPHuc9FV07GUhbGfWBLDFBPtYU8hDmCAo3TFV%2BeMJ1v6WdWl2xaqNH%2FhDk3%2FkxRXfbkY9Ua3w4ihZ8jmRh3jGk2J%2FHzUiS4N8f26whk51LgwYTba8H1k5ofVtDawrNbEqhDEJS3seJzkV7suLLXPHJJLxJ7BzkDZJHS1M6ibbtdhWguR89zYkq13m7RLYGHYFekr7mn2RjLL0K3Ou6swprOzUuio548sdYsRNeu2t4uG8zSoEBYlIJ70d5W0KY%2F%2FUI5hAsywwv6pKeTDO0P%2B9BjqkAVhI8v2CsWzcCnjJe2nfRJeKLq0xhyqfTlwK%2BK6XJjB9%2BlKBRyIJBvkuWA8MXi28jT7c4t2LcwNIcRI6Kkh23mUimn2rFOPSScjPmMGFZ%2FukfkKaoInwgEiUSAI0WVohtN5olgxx1sJXm0JMGfVSINKx8M0EwEUVj96pK6At1pM6xczrI9RkzADZt%2FXztTSp4SPJCcDd%2FAJCMtewjqnnNGMrDOxU&X-Amz-Signature=32567b7a8d17fba29fb311dd363e436e2d86ba3eacbdebdbdd052524262d3168&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

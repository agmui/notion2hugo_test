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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WVUPJZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Y%2BCfC7UfXfmtvaTe3p8QgG%2F9o37fzB5gt%2BjgKJzDgAIgOXUZEWd1PRDYG%2FEZAqlJyhhfrp5BbMDNbAWIMS5cNlgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMxFFjCkqZK4%2BZDVnCrcAx%2BYBm0DmpGuRm%2BN3Mcs3MZCFswmQFps2eCabGnCgzMqvg%2FZWkvaxbva95lWX2Y89ZyyomO54B%2B2TeJ2jKqufmp8yzXKl%2FGw9k%2FgfHPVDT%2F1CwtwWqJAn%2F%2BTUENbOxAmBmH7xyS2ykh%2F67%2FFrI9t6K6ikOqOlKa0ZLrtKt0tER2rLmb3yCnB6EQdnqYB9ywoYx1pMYgrg2c0f39V0cfYtZV7p%2FBjMPHOPlp6FlY50GkNkFeoPyGekxbJOx7fhaoJ3VD9jwLFoD%2FMfxj8ZNQwEgP1mFCZdpe9xeG8HNl2CzwmtVguEM0P35XL5zERyJuyeAsX0t31jm8x1DQ9xSW97aOV5aoJlTHgaflHksPZMZl9XfdFFTKXVSYOHF3b0TuLVhGpO21lt8fx13dObGWbmHvaMR67EIm2mUx5uaSagr5HJc4L%2BrICN4IBcbjsv7gNT%2BKPWszddfSs9%2BtjG%2BN6gtQW9FXX3i5n0EtRiqT3ohO1ysA18oH2Ep68yLRXp1S6oohcauh0HSBsGJ7iFTEc%2FGNx7CHLaaOhSIdfZIGSwPHyswsSk50ia7KjOiP31d%2Fx3JGPdHe96Px32Y%2F9nL4i5rugCbPomTAoQlQwaBzeR2D7KdrcbxiGMukFQI%2FqMPjf8cAGOqUBGGaLmMqvAl4CdU2bfyFEUF3msqrrJdlkYB5VfiLjKJuS%2BH6iN8SsDus5X9RpMd3UBR1DF%2Fs0m%2BEvV%2BFyYOUS3s39D0iY6gpupHmLE7%2FyGpKBpUeswPf%2Ft9JD0KCBZXbgXFWGdkPnKsAAbSfRND1f4KHzNI1kNWzxjlEiEFdL8AFnH0Ne9CvGgouK%2B%2FYzWhS3KdGibRNHhB8j0bu8QdcHfY3N7BXi&X-Amz-Signature=5ab7ff826c4979bfff3d0043f27f50ffd698f2313c5d14d451147fcd21cf98c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WVUPJZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Y%2BCfC7UfXfmtvaTe3p8QgG%2F9o37fzB5gt%2BjgKJzDgAIgOXUZEWd1PRDYG%2FEZAqlJyhhfrp5BbMDNbAWIMS5cNlgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMxFFjCkqZK4%2BZDVnCrcAx%2BYBm0DmpGuRm%2BN3Mcs3MZCFswmQFps2eCabGnCgzMqvg%2FZWkvaxbva95lWX2Y89ZyyomO54B%2B2TeJ2jKqufmp8yzXKl%2FGw9k%2FgfHPVDT%2F1CwtwWqJAn%2F%2BTUENbOxAmBmH7xyS2ykh%2F67%2FFrI9t6K6ikOqOlKa0ZLrtKt0tER2rLmb3yCnB6EQdnqYB9ywoYx1pMYgrg2c0f39V0cfYtZV7p%2FBjMPHOPlp6FlY50GkNkFeoPyGekxbJOx7fhaoJ3VD9jwLFoD%2FMfxj8ZNQwEgP1mFCZdpe9xeG8HNl2CzwmtVguEM0P35XL5zERyJuyeAsX0t31jm8x1DQ9xSW97aOV5aoJlTHgaflHksPZMZl9XfdFFTKXVSYOHF3b0TuLVhGpO21lt8fx13dObGWbmHvaMR67EIm2mUx5uaSagr5HJc4L%2BrICN4IBcbjsv7gNT%2BKPWszddfSs9%2BtjG%2BN6gtQW9FXX3i5n0EtRiqT3ohO1ysA18oH2Ep68yLRXp1S6oohcauh0HSBsGJ7iFTEc%2FGNx7CHLaaOhSIdfZIGSwPHyswsSk50ia7KjOiP31d%2Fx3JGPdHe96Px32Y%2F9nL4i5rugCbPomTAoQlQwaBzeR2D7KdrcbxiGMukFQI%2FqMPjf8cAGOqUBGGaLmMqvAl4CdU2bfyFEUF3msqrrJdlkYB5VfiLjKJuS%2BH6iN8SsDus5X9RpMd3UBR1DF%2Fs0m%2BEvV%2BFyYOUS3s39D0iY6gpupHmLE7%2FyGpKBpUeswPf%2Ft9JD0KCBZXbgXFWGdkPnKsAAbSfRND1f4KHzNI1kNWzxjlEiEFdL8AFnH0Ne9CvGgouK%2B%2FYzWhS3KdGibRNHhB8j0bu8QdcHfY3N7BXi&X-Amz-Signature=cccd7325fb450313fe257823060aeae13f1929018538c720e6092491f86a5b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WVUPJZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Y%2BCfC7UfXfmtvaTe3p8QgG%2F9o37fzB5gt%2BjgKJzDgAIgOXUZEWd1PRDYG%2FEZAqlJyhhfrp5BbMDNbAWIMS5cNlgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMxFFjCkqZK4%2BZDVnCrcAx%2BYBm0DmpGuRm%2BN3Mcs3MZCFswmQFps2eCabGnCgzMqvg%2FZWkvaxbva95lWX2Y89ZyyomO54B%2B2TeJ2jKqufmp8yzXKl%2FGw9k%2FgfHPVDT%2F1CwtwWqJAn%2F%2BTUENbOxAmBmH7xyS2ykh%2F67%2FFrI9t6K6ikOqOlKa0ZLrtKt0tER2rLmb3yCnB6EQdnqYB9ywoYx1pMYgrg2c0f39V0cfYtZV7p%2FBjMPHOPlp6FlY50GkNkFeoPyGekxbJOx7fhaoJ3VD9jwLFoD%2FMfxj8ZNQwEgP1mFCZdpe9xeG8HNl2CzwmtVguEM0P35XL5zERyJuyeAsX0t31jm8x1DQ9xSW97aOV5aoJlTHgaflHksPZMZl9XfdFFTKXVSYOHF3b0TuLVhGpO21lt8fx13dObGWbmHvaMR67EIm2mUx5uaSagr5HJc4L%2BrICN4IBcbjsv7gNT%2BKPWszddfSs9%2BtjG%2BN6gtQW9FXX3i5n0EtRiqT3ohO1ysA18oH2Ep68yLRXp1S6oohcauh0HSBsGJ7iFTEc%2FGNx7CHLaaOhSIdfZIGSwPHyswsSk50ia7KjOiP31d%2Fx3JGPdHe96Px32Y%2F9nL4i5rugCbPomTAoQlQwaBzeR2D7KdrcbxiGMukFQI%2FqMPjf8cAGOqUBGGaLmMqvAl4CdU2bfyFEUF3msqrrJdlkYB5VfiLjKJuS%2BH6iN8SsDus5X9RpMd3UBR1DF%2Fs0m%2BEvV%2BFyYOUS3s39D0iY6gpupHmLE7%2FyGpKBpUeswPf%2Ft9JD0KCBZXbgXFWGdkPnKsAAbSfRND1f4KHzNI1kNWzxjlEiEFdL8AFnH0Ne9CvGgouK%2B%2FYzWhS3KdGibRNHhB8j0bu8QdcHfY3N7BXi&X-Amz-Signature=b7a5db11675a25ae913040cfce5c3a1729de5c1c312529aab466562ff41ab491&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WVUPJZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Y%2BCfC7UfXfmtvaTe3p8QgG%2F9o37fzB5gt%2BjgKJzDgAIgOXUZEWd1PRDYG%2FEZAqlJyhhfrp5BbMDNbAWIMS5cNlgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMxFFjCkqZK4%2BZDVnCrcAx%2BYBm0DmpGuRm%2BN3Mcs3MZCFswmQFps2eCabGnCgzMqvg%2FZWkvaxbva95lWX2Y89ZyyomO54B%2B2TeJ2jKqufmp8yzXKl%2FGw9k%2FgfHPVDT%2F1CwtwWqJAn%2F%2BTUENbOxAmBmH7xyS2ykh%2F67%2FFrI9t6K6ikOqOlKa0ZLrtKt0tER2rLmb3yCnB6EQdnqYB9ywoYx1pMYgrg2c0f39V0cfYtZV7p%2FBjMPHOPlp6FlY50GkNkFeoPyGekxbJOx7fhaoJ3VD9jwLFoD%2FMfxj8ZNQwEgP1mFCZdpe9xeG8HNl2CzwmtVguEM0P35XL5zERyJuyeAsX0t31jm8x1DQ9xSW97aOV5aoJlTHgaflHksPZMZl9XfdFFTKXVSYOHF3b0TuLVhGpO21lt8fx13dObGWbmHvaMR67EIm2mUx5uaSagr5HJc4L%2BrICN4IBcbjsv7gNT%2BKPWszddfSs9%2BtjG%2BN6gtQW9FXX3i5n0EtRiqT3ohO1ysA18oH2Ep68yLRXp1S6oohcauh0HSBsGJ7iFTEc%2FGNx7CHLaaOhSIdfZIGSwPHyswsSk50ia7KjOiP31d%2Fx3JGPdHe96Px32Y%2F9nL4i5rugCbPomTAoQlQwaBzeR2D7KdrcbxiGMukFQI%2FqMPjf8cAGOqUBGGaLmMqvAl4CdU2bfyFEUF3msqrrJdlkYB5VfiLjKJuS%2BH6iN8SsDus5X9RpMd3UBR1DF%2Fs0m%2BEvV%2BFyYOUS3s39D0iY6gpupHmLE7%2FyGpKBpUeswPf%2Ft9JD0KCBZXbgXFWGdkPnKsAAbSfRND1f4KHzNI1kNWzxjlEiEFdL8AFnH0Ne9CvGgouK%2B%2FYzWhS3KdGibRNHhB8j0bu8QdcHfY3N7BXi&X-Amz-Signature=82ee7675198d2d2cfa172c4ce7cdb437def63e9006a15ff64c7b91dc1c9315b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WVUPJZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Y%2BCfC7UfXfmtvaTe3p8QgG%2F9o37fzB5gt%2BjgKJzDgAIgOXUZEWd1PRDYG%2FEZAqlJyhhfrp5BbMDNbAWIMS5cNlgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMxFFjCkqZK4%2BZDVnCrcAx%2BYBm0DmpGuRm%2BN3Mcs3MZCFswmQFps2eCabGnCgzMqvg%2FZWkvaxbva95lWX2Y89ZyyomO54B%2B2TeJ2jKqufmp8yzXKl%2FGw9k%2FgfHPVDT%2F1CwtwWqJAn%2F%2BTUENbOxAmBmH7xyS2ykh%2F67%2FFrI9t6K6ikOqOlKa0ZLrtKt0tER2rLmb3yCnB6EQdnqYB9ywoYx1pMYgrg2c0f39V0cfYtZV7p%2FBjMPHOPlp6FlY50GkNkFeoPyGekxbJOx7fhaoJ3VD9jwLFoD%2FMfxj8ZNQwEgP1mFCZdpe9xeG8HNl2CzwmtVguEM0P35XL5zERyJuyeAsX0t31jm8x1DQ9xSW97aOV5aoJlTHgaflHksPZMZl9XfdFFTKXVSYOHF3b0TuLVhGpO21lt8fx13dObGWbmHvaMR67EIm2mUx5uaSagr5HJc4L%2BrICN4IBcbjsv7gNT%2BKPWszddfSs9%2BtjG%2BN6gtQW9FXX3i5n0EtRiqT3ohO1ysA18oH2Ep68yLRXp1S6oohcauh0HSBsGJ7iFTEc%2FGNx7CHLaaOhSIdfZIGSwPHyswsSk50ia7KjOiP31d%2Fx3JGPdHe96Px32Y%2F9nL4i5rugCbPomTAoQlQwaBzeR2D7KdrcbxiGMukFQI%2FqMPjf8cAGOqUBGGaLmMqvAl4CdU2bfyFEUF3msqrrJdlkYB5VfiLjKJuS%2BH6iN8SsDus5X9RpMd3UBR1DF%2Fs0m%2BEvV%2BFyYOUS3s39D0iY6gpupHmLE7%2FyGpKBpUeswPf%2Ft9JD0KCBZXbgXFWGdkPnKsAAbSfRND1f4KHzNI1kNWzxjlEiEFdL8AFnH0Ne9CvGgouK%2B%2FYzWhS3KdGibRNHhB8j0bu8QdcHfY3N7BXi&X-Amz-Signature=3c293b77c9210616dbfeb03dc0edfa7e8718f8791ecb75dfb06ffe123f24083c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WVUPJZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Y%2BCfC7UfXfmtvaTe3p8QgG%2F9o37fzB5gt%2BjgKJzDgAIgOXUZEWd1PRDYG%2FEZAqlJyhhfrp5BbMDNbAWIMS5cNlgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMxFFjCkqZK4%2BZDVnCrcAx%2BYBm0DmpGuRm%2BN3Mcs3MZCFswmQFps2eCabGnCgzMqvg%2FZWkvaxbva95lWX2Y89ZyyomO54B%2B2TeJ2jKqufmp8yzXKl%2FGw9k%2FgfHPVDT%2F1CwtwWqJAn%2F%2BTUENbOxAmBmH7xyS2ykh%2F67%2FFrI9t6K6ikOqOlKa0ZLrtKt0tER2rLmb3yCnB6EQdnqYB9ywoYx1pMYgrg2c0f39V0cfYtZV7p%2FBjMPHOPlp6FlY50GkNkFeoPyGekxbJOx7fhaoJ3VD9jwLFoD%2FMfxj8ZNQwEgP1mFCZdpe9xeG8HNl2CzwmtVguEM0P35XL5zERyJuyeAsX0t31jm8x1DQ9xSW97aOV5aoJlTHgaflHksPZMZl9XfdFFTKXVSYOHF3b0TuLVhGpO21lt8fx13dObGWbmHvaMR67EIm2mUx5uaSagr5HJc4L%2BrICN4IBcbjsv7gNT%2BKPWszddfSs9%2BtjG%2BN6gtQW9FXX3i5n0EtRiqT3ohO1ysA18oH2Ep68yLRXp1S6oohcauh0HSBsGJ7iFTEc%2FGNx7CHLaaOhSIdfZIGSwPHyswsSk50ia7KjOiP31d%2Fx3JGPdHe96Px32Y%2F9nL4i5rugCbPomTAoQlQwaBzeR2D7KdrcbxiGMukFQI%2FqMPjf8cAGOqUBGGaLmMqvAl4CdU2bfyFEUF3msqrrJdlkYB5VfiLjKJuS%2BH6iN8SsDus5X9RpMd3UBR1DF%2Fs0m%2BEvV%2BFyYOUS3s39D0iY6gpupHmLE7%2FyGpKBpUeswPf%2Ft9JD0KCBZXbgXFWGdkPnKsAAbSfRND1f4KHzNI1kNWzxjlEiEFdL8AFnH0Ne9CvGgouK%2B%2FYzWhS3KdGibRNHhB8j0bu8QdcHfY3N7BXi&X-Amz-Signature=5e4d8cf4df119dca0f698faba6acc0a3673761bd5b14b504a2322973b3c1c6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WVUPJZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Y%2BCfC7UfXfmtvaTe3p8QgG%2F9o37fzB5gt%2BjgKJzDgAIgOXUZEWd1PRDYG%2FEZAqlJyhhfrp5BbMDNbAWIMS5cNlgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMxFFjCkqZK4%2BZDVnCrcAx%2BYBm0DmpGuRm%2BN3Mcs3MZCFswmQFps2eCabGnCgzMqvg%2FZWkvaxbva95lWX2Y89ZyyomO54B%2B2TeJ2jKqufmp8yzXKl%2FGw9k%2FgfHPVDT%2F1CwtwWqJAn%2F%2BTUENbOxAmBmH7xyS2ykh%2F67%2FFrI9t6K6ikOqOlKa0ZLrtKt0tER2rLmb3yCnB6EQdnqYB9ywoYx1pMYgrg2c0f39V0cfYtZV7p%2FBjMPHOPlp6FlY50GkNkFeoPyGekxbJOx7fhaoJ3VD9jwLFoD%2FMfxj8ZNQwEgP1mFCZdpe9xeG8HNl2CzwmtVguEM0P35XL5zERyJuyeAsX0t31jm8x1DQ9xSW97aOV5aoJlTHgaflHksPZMZl9XfdFFTKXVSYOHF3b0TuLVhGpO21lt8fx13dObGWbmHvaMR67EIm2mUx5uaSagr5HJc4L%2BrICN4IBcbjsv7gNT%2BKPWszddfSs9%2BtjG%2BN6gtQW9FXX3i5n0EtRiqT3ohO1ysA18oH2Ep68yLRXp1S6oohcauh0HSBsGJ7iFTEc%2FGNx7CHLaaOhSIdfZIGSwPHyswsSk50ia7KjOiP31d%2Fx3JGPdHe96Px32Y%2F9nL4i5rugCbPomTAoQlQwaBzeR2D7KdrcbxiGMukFQI%2FqMPjf8cAGOqUBGGaLmMqvAl4CdU2bfyFEUF3msqrrJdlkYB5VfiLjKJuS%2BH6iN8SsDus5X9RpMd3UBR1DF%2Fs0m%2BEvV%2BFyYOUS3s39D0iY6gpupHmLE7%2FyGpKBpUeswPf%2Ft9JD0KCBZXbgXFWGdkPnKsAAbSfRND1f4KHzNI1kNWzxjlEiEFdL8AFnH0Ne9CvGgouK%2B%2FYzWhS3KdGibRNHhB8j0bu8QdcHfY3N7BXi&X-Amz-Signature=361dd0ea61d4f0fa14b1ec816ab3749b723ef0a0d42dfde93d076ae4eb2bf15b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

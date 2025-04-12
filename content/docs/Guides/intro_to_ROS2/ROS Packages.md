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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6Y42GV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCy%2Bxiba5fvwhDTXdTKmQtu0Sw2uOCjBtR%2Bj4E%2Bn%2BRNfAIgbl9yD1%2F%2Brpr8W2NmOb60mrLgNERSESVUiwXMwaLBs1AqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWtZ63Lefm3kQHi9yrcA01vsMnwaAnwrfM52QE4XbQTH%2BdGu9QRXfBx3agFdgi%2FabIQIkP1XqZ9kLnOGSl2G2Wb6RgV%2FqWhhWOTax6gceHUFuIJCjHYh65iifiqSN9sIOCwpP37hQPHUwbaJi00ozfiiU%2BjuGKDDDVZskaCh6aNRxOaE70ew4mSV1koIItcbhcu%2FfKAog7aO%2BDxerfjKP9HMKe5%2Bn5eV3Q3MjzI90%2B%2BR8JPJNJz1b80otTx1%2B5n5HQUOI4fevNDQ0aqhd6L87Dyr%2FXOHYKdjPD8POAyPbFKysNlQxwBfelCcIHPqGI2ZnvIFm%2FQYrM9InyiOrloQqph6ERpa0CK5RTMy0DexeaDFkpw%2Fi2Wx1RAfN0bT5c2Wfa5bFKmrXywt1fawM9y2WinaYrEZU1hWTSEsrPUyMtt6qQXAO6aH9%2F57tUFIOCrCIgVQD9nwX16OAgCVXLPDlvAEL2aiu%2FF6hCzlH8jIDOjr9yhUQrm6Rayp%2FHTcdNEDX5yCTCaNx9IaNOrGdNCEzxJ7XgJE1w0%2F0kAoi6SfGIfvmV1em6L%2BiUJ2c%2FOnXyuppC%2BF7oMdVZWwc2QTZpXKH%2FmpfVxrsA1Dix38p%2FHS6Blt9elF4wUYplOWm%2FkC%2FDqXeJAHqEglJHdk6IUMOT76b8GOqUB4l71AAypP877nS5CeR9JHh6M71IsQ3iD732%2FhxBjyQQIgQt9RwiHq3QMxUbtF9ijBk5KYmy%2BLWqLmGUbzShdx%2B6CdZobXj2s6Pj50mKms%2F%2Fp%2BySeiOWd7frLMxWlmL6t023u2F%2F1y5ChHVcRlNDGInkBp24qoNk%2FjLz8KYsDP2oC7VBPOc2sVesFHKN%2BKKdpC8zfU%2FmIIpe6cGqfPdQ8Px19XxCv&X-Amz-Signature=a18621f7e8d4783b58f1c6a2eeee982c1ff88ee4fa3ed623c12fca65744256c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6Y42GV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCy%2Bxiba5fvwhDTXdTKmQtu0Sw2uOCjBtR%2Bj4E%2Bn%2BRNfAIgbl9yD1%2F%2Brpr8W2NmOb60mrLgNERSESVUiwXMwaLBs1AqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWtZ63Lefm3kQHi9yrcA01vsMnwaAnwrfM52QE4XbQTH%2BdGu9QRXfBx3agFdgi%2FabIQIkP1XqZ9kLnOGSl2G2Wb6RgV%2FqWhhWOTax6gceHUFuIJCjHYh65iifiqSN9sIOCwpP37hQPHUwbaJi00ozfiiU%2BjuGKDDDVZskaCh6aNRxOaE70ew4mSV1koIItcbhcu%2FfKAog7aO%2BDxerfjKP9HMKe5%2Bn5eV3Q3MjzI90%2B%2BR8JPJNJz1b80otTx1%2B5n5HQUOI4fevNDQ0aqhd6L87Dyr%2FXOHYKdjPD8POAyPbFKysNlQxwBfelCcIHPqGI2ZnvIFm%2FQYrM9InyiOrloQqph6ERpa0CK5RTMy0DexeaDFkpw%2Fi2Wx1RAfN0bT5c2Wfa5bFKmrXywt1fawM9y2WinaYrEZU1hWTSEsrPUyMtt6qQXAO6aH9%2F57tUFIOCrCIgVQD9nwX16OAgCVXLPDlvAEL2aiu%2FF6hCzlH8jIDOjr9yhUQrm6Rayp%2FHTcdNEDX5yCTCaNx9IaNOrGdNCEzxJ7XgJE1w0%2F0kAoi6SfGIfvmV1em6L%2BiUJ2c%2FOnXyuppC%2BF7oMdVZWwc2QTZpXKH%2FmpfVxrsA1Dix38p%2FHS6Blt9elF4wUYplOWm%2FkC%2FDqXeJAHqEglJHdk6IUMOT76b8GOqUB4l71AAypP877nS5CeR9JHh6M71IsQ3iD732%2FhxBjyQQIgQt9RwiHq3QMxUbtF9ijBk5KYmy%2BLWqLmGUbzShdx%2B6CdZobXj2s6Pj50mKms%2F%2Fp%2BySeiOWd7frLMxWlmL6t023u2F%2F1y5ChHVcRlNDGInkBp24qoNk%2FjLz8KYsDP2oC7VBPOc2sVesFHKN%2BKKdpC8zfU%2FmIIpe6cGqfPdQ8Px19XxCv&X-Amz-Signature=dcd5be3ead320c00a11a788a704751eb3d6c88de058321e67aece37d4c2af262&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6Y42GV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCy%2Bxiba5fvwhDTXdTKmQtu0Sw2uOCjBtR%2Bj4E%2Bn%2BRNfAIgbl9yD1%2F%2Brpr8W2NmOb60mrLgNERSESVUiwXMwaLBs1AqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWtZ63Lefm3kQHi9yrcA01vsMnwaAnwrfM52QE4XbQTH%2BdGu9QRXfBx3agFdgi%2FabIQIkP1XqZ9kLnOGSl2G2Wb6RgV%2FqWhhWOTax6gceHUFuIJCjHYh65iifiqSN9sIOCwpP37hQPHUwbaJi00ozfiiU%2BjuGKDDDVZskaCh6aNRxOaE70ew4mSV1koIItcbhcu%2FfKAog7aO%2BDxerfjKP9HMKe5%2Bn5eV3Q3MjzI90%2B%2BR8JPJNJz1b80otTx1%2B5n5HQUOI4fevNDQ0aqhd6L87Dyr%2FXOHYKdjPD8POAyPbFKysNlQxwBfelCcIHPqGI2ZnvIFm%2FQYrM9InyiOrloQqph6ERpa0CK5RTMy0DexeaDFkpw%2Fi2Wx1RAfN0bT5c2Wfa5bFKmrXywt1fawM9y2WinaYrEZU1hWTSEsrPUyMtt6qQXAO6aH9%2F57tUFIOCrCIgVQD9nwX16OAgCVXLPDlvAEL2aiu%2FF6hCzlH8jIDOjr9yhUQrm6Rayp%2FHTcdNEDX5yCTCaNx9IaNOrGdNCEzxJ7XgJE1w0%2F0kAoi6SfGIfvmV1em6L%2BiUJ2c%2FOnXyuppC%2BF7oMdVZWwc2QTZpXKH%2FmpfVxrsA1Dix38p%2FHS6Blt9elF4wUYplOWm%2FkC%2FDqXeJAHqEglJHdk6IUMOT76b8GOqUB4l71AAypP877nS5CeR9JHh6M71IsQ3iD732%2FhxBjyQQIgQt9RwiHq3QMxUbtF9ijBk5KYmy%2BLWqLmGUbzShdx%2B6CdZobXj2s6Pj50mKms%2F%2Fp%2BySeiOWd7frLMxWlmL6t023u2F%2F1y5ChHVcRlNDGInkBp24qoNk%2FjLz8KYsDP2oC7VBPOc2sVesFHKN%2BKKdpC8zfU%2FmIIpe6cGqfPdQ8Px19XxCv&X-Amz-Signature=d15c68cab35d3e77b6e0a1ab7bbc1116851cb9a29679e1f68f3fa7eb02a13c63&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6Y42GV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCy%2Bxiba5fvwhDTXdTKmQtu0Sw2uOCjBtR%2Bj4E%2Bn%2BRNfAIgbl9yD1%2F%2Brpr8W2NmOb60mrLgNERSESVUiwXMwaLBs1AqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWtZ63Lefm3kQHi9yrcA01vsMnwaAnwrfM52QE4XbQTH%2BdGu9QRXfBx3agFdgi%2FabIQIkP1XqZ9kLnOGSl2G2Wb6RgV%2FqWhhWOTax6gceHUFuIJCjHYh65iifiqSN9sIOCwpP37hQPHUwbaJi00ozfiiU%2BjuGKDDDVZskaCh6aNRxOaE70ew4mSV1koIItcbhcu%2FfKAog7aO%2BDxerfjKP9HMKe5%2Bn5eV3Q3MjzI90%2B%2BR8JPJNJz1b80otTx1%2B5n5HQUOI4fevNDQ0aqhd6L87Dyr%2FXOHYKdjPD8POAyPbFKysNlQxwBfelCcIHPqGI2ZnvIFm%2FQYrM9InyiOrloQqph6ERpa0CK5RTMy0DexeaDFkpw%2Fi2Wx1RAfN0bT5c2Wfa5bFKmrXywt1fawM9y2WinaYrEZU1hWTSEsrPUyMtt6qQXAO6aH9%2F57tUFIOCrCIgVQD9nwX16OAgCVXLPDlvAEL2aiu%2FF6hCzlH8jIDOjr9yhUQrm6Rayp%2FHTcdNEDX5yCTCaNx9IaNOrGdNCEzxJ7XgJE1w0%2F0kAoi6SfGIfvmV1em6L%2BiUJ2c%2FOnXyuppC%2BF7oMdVZWwc2QTZpXKH%2FmpfVxrsA1Dix38p%2FHS6Blt9elF4wUYplOWm%2FkC%2FDqXeJAHqEglJHdk6IUMOT76b8GOqUB4l71AAypP877nS5CeR9JHh6M71IsQ3iD732%2FhxBjyQQIgQt9RwiHq3QMxUbtF9ijBk5KYmy%2BLWqLmGUbzShdx%2B6CdZobXj2s6Pj50mKms%2F%2Fp%2BySeiOWd7frLMxWlmL6t023u2F%2F1y5ChHVcRlNDGInkBp24qoNk%2FjLz8KYsDP2oC7VBPOc2sVesFHKN%2BKKdpC8zfU%2FmIIpe6cGqfPdQ8Px19XxCv&X-Amz-Signature=625ee25c83e90bf26894068e783cc6eb0dcbeefabd3dfc5ca4f72e8ed2095e46&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6Y42GV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCy%2Bxiba5fvwhDTXdTKmQtu0Sw2uOCjBtR%2Bj4E%2Bn%2BRNfAIgbl9yD1%2F%2Brpr8W2NmOb60mrLgNERSESVUiwXMwaLBs1AqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWtZ63Lefm3kQHi9yrcA01vsMnwaAnwrfM52QE4XbQTH%2BdGu9QRXfBx3agFdgi%2FabIQIkP1XqZ9kLnOGSl2G2Wb6RgV%2FqWhhWOTax6gceHUFuIJCjHYh65iifiqSN9sIOCwpP37hQPHUwbaJi00ozfiiU%2BjuGKDDDVZskaCh6aNRxOaE70ew4mSV1koIItcbhcu%2FfKAog7aO%2BDxerfjKP9HMKe5%2Bn5eV3Q3MjzI90%2B%2BR8JPJNJz1b80otTx1%2B5n5HQUOI4fevNDQ0aqhd6L87Dyr%2FXOHYKdjPD8POAyPbFKysNlQxwBfelCcIHPqGI2ZnvIFm%2FQYrM9InyiOrloQqph6ERpa0CK5RTMy0DexeaDFkpw%2Fi2Wx1RAfN0bT5c2Wfa5bFKmrXywt1fawM9y2WinaYrEZU1hWTSEsrPUyMtt6qQXAO6aH9%2F57tUFIOCrCIgVQD9nwX16OAgCVXLPDlvAEL2aiu%2FF6hCzlH8jIDOjr9yhUQrm6Rayp%2FHTcdNEDX5yCTCaNx9IaNOrGdNCEzxJ7XgJE1w0%2F0kAoi6SfGIfvmV1em6L%2BiUJ2c%2FOnXyuppC%2BF7oMdVZWwc2QTZpXKH%2FmpfVxrsA1Dix38p%2FHS6Blt9elF4wUYplOWm%2FkC%2FDqXeJAHqEglJHdk6IUMOT76b8GOqUB4l71AAypP877nS5CeR9JHh6M71IsQ3iD732%2FhxBjyQQIgQt9RwiHq3QMxUbtF9ijBk5KYmy%2BLWqLmGUbzShdx%2B6CdZobXj2s6Pj50mKms%2F%2Fp%2BySeiOWd7frLMxWlmL6t023u2F%2F1y5ChHVcRlNDGInkBp24qoNk%2FjLz8KYsDP2oC7VBPOc2sVesFHKN%2BKKdpC8zfU%2FmIIpe6cGqfPdQ8Px19XxCv&X-Amz-Signature=6b730821481053b36ffb0f814c3111671af4959f09d831a6cc76cadf79c97d61&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6Y42GV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCy%2Bxiba5fvwhDTXdTKmQtu0Sw2uOCjBtR%2Bj4E%2Bn%2BRNfAIgbl9yD1%2F%2Brpr8W2NmOb60mrLgNERSESVUiwXMwaLBs1AqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWtZ63Lefm3kQHi9yrcA01vsMnwaAnwrfM52QE4XbQTH%2BdGu9QRXfBx3agFdgi%2FabIQIkP1XqZ9kLnOGSl2G2Wb6RgV%2FqWhhWOTax6gceHUFuIJCjHYh65iifiqSN9sIOCwpP37hQPHUwbaJi00ozfiiU%2BjuGKDDDVZskaCh6aNRxOaE70ew4mSV1koIItcbhcu%2FfKAog7aO%2BDxerfjKP9HMKe5%2Bn5eV3Q3MjzI90%2B%2BR8JPJNJz1b80otTx1%2B5n5HQUOI4fevNDQ0aqhd6L87Dyr%2FXOHYKdjPD8POAyPbFKysNlQxwBfelCcIHPqGI2ZnvIFm%2FQYrM9InyiOrloQqph6ERpa0CK5RTMy0DexeaDFkpw%2Fi2Wx1RAfN0bT5c2Wfa5bFKmrXywt1fawM9y2WinaYrEZU1hWTSEsrPUyMtt6qQXAO6aH9%2F57tUFIOCrCIgVQD9nwX16OAgCVXLPDlvAEL2aiu%2FF6hCzlH8jIDOjr9yhUQrm6Rayp%2FHTcdNEDX5yCTCaNx9IaNOrGdNCEzxJ7XgJE1w0%2F0kAoi6SfGIfvmV1em6L%2BiUJ2c%2FOnXyuppC%2BF7oMdVZWwc2QTZpXKH%2FmpfVxrsA1Dix38p%2FHS6Blt9elF4wUYplOWm%2FkC%2FDqXeJAHqEglJHdk6IUMOT76b8GOqUB4l71AAypP877nS5CeR9JHh6M71IsQ3iD732%2FhxBjyQQIgQt9RwiHq3QMxUbtF9ijBk5KYmy%2BLWqLmGUbzShdx%2B6CdZobXj2s6Pj50mKms%2F%2Fp%2BySeiOWd7frLMxWlmL6t023u2F%2F1y5ChHVcRlNDGInkBp24qoNk%2FjLz8KYsDP2oC7VBPOc2sVesFHKN%2BKKdpC8zfU%2FmIIpe6cGqfPdQ8Px19XxCv&X-Amz-Signature=27a4e6473b5a574c4adf34dc2165010293b11b76ffd882560f92ac13659f7613&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6Y42GV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCy%2Bxiba5fvwhDTXdTKmQtu0Sw2uOCjBtR%2Bj4E%2Bn%2BRNfAIgbl9yD1%2F%2Brpr8W2NmOb60mrLgNERSESVUiwXMwaLBs1AqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWtZ63Lefm3kQHi9yrcA01vsMnwaAnwrfM52QE4XbQTH%2BdGu9QRXfBx3agFdgi%2FabIQIkP1XqZ9kLnOGSl2G2Wb6RgV%2FqWhhWOTax6gceHUFuIJCjHYh65iifiqSN9sIOCwpP37hQPHUwbaJi00ozfiiU%2BjuGKDDDVZskaCh6aNRxOaE70ew4mSV1koIItcbhcu%2FfKAog7aO%2BDxerfjKP9HMKe5%2Bn5eV3Q3MjzI90%2B%2BR8JPJNJz1b80otTx1%2B5n5HQUOI4fevNDQ0aqhd6L87Dyr%2FXOHYKdjPD8POAyPbFKysNlQxwBfelCcIHPqGI2ZnvIFm%2FQYrM9InyiOrloQqph6ERpa0CK5RTMy0DexeaDFkpw%2Fi2Wx1RAfN0bT5c2Wfa5bFKmrXywt1fawM9y2WinaYrEZU1hWTSEsrPUyMtt6qQXAO6aH9%2F57tUFIOCrCIgVQD9nwX16OAgCVXLPDlvAEL2aiu%2FF6hCzlH8jIDOjr9yhUQrm6Rayp%2FHTcdNEDX5yCTCaNx9IaNOrGdNCEzxJ7XgJE1w0%2F0kAoi6SfGIfvmV1em6L%2BiUJ2c%2FOnXyuppC%2BF7oMdVZWwc2QTZpXKH%2FmpfVxrsA1Dix38p%2FHS6Blt9elF4wUYplOWm%2FkC%2FDqXeJAHqEglJHdk6IUMOT76b8GOqUB4l71AAypP877nS5CeR9JHh6M71IsQ3iD732%2FhxBjyQQIgQt9RwiHq3QMxUbtF9ijBk5KYmy%2BLWqLmGUbzShdx%2B6CdZobXj2s6Pj50mKms%2F%2Fp%2BySeiOWd7frLMxWlmL6t023u2F%2F1y5ChHVcRlNDGInkBp24qoNk%2FjLz8KYsDP2oC7VBPOc2sVesFHKN%2BKKdpC8zfU%2FmIIpe6cGqfPdQ8Px19XxCv&X-Amz-Signature=35c999e02fe1f35c73e5a3729d999a92efb32ffc3bf302e6b59fc6c2169d49ef&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYNU3WH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCmT%2BoDuzm%2FJL1p0fBGNqsSc5ydY0tv8fSnlcZqs4k3SQIhAJrha0gi819uCS%2Fa%2BWz7qZCSgRyg6pqC4uilqhnmEcuPKv8DCEgQABoMNjM3NDIzMTgzODA1IgzNVvLBiOiguyVRuTcq3APVz5PP1TE3L2k%2BOWabC%2FLoc3a8rtG%2BEZBXCU4vy3kGv17f09%2B2xTCWPiBh57NlN%2Bl7ldL2dUcqki09hyF3xaKREP%2FZb0ENWUJPrwgc%2BrDiqVQxt3pOT933p7byF4%2BncsSz3r%2FIdWMIf0xmF6q1sYQUnEjNXhEEbdLZWuSEtIg3fGMLCafakQFB24%2BG17R6kfH2Ots9QjI7shTXLYxj13Qh3kxxWMJvuvyRSHjFnmppFmLCJrJ%2FMRBEY2MuJx%2F1hmj0y%2FupiA9mC9cCVGHrl2EqY7Q5AE8kPjo4k0pYmbwewWJUMvIBFpdxZqyL4jpGG3096uGf6ZUCn7S7B1lQKmqdSWhncX9AEj%2BCEBVUfePjkbguoRmjBEeHsaDcvDGCpv3DHGTbxon61V6PvcArKgQUDiI6iV1qEfa43HRIc9ggPOQinj1ikUKnbIvaDJhwA%2BisQ1GanhkxUkbMVQEHXwbz%2FcUSrFeead4YQJ4T3DdGPbKAQyLX10u5Qj6Ya50Yfj2sbcy5OrcGtlkLIvFWf3coF1rqfteiHO2GP3JewyAN6Iu8A5QtRMquVF5imTBHk1%2BnLB1UUwODBMhLmNqmPBFzXVmwn0hVewL7vLYvlGGDgaKiwTnHlKM0QBoDGDDMyLvCBjqkAe1UEh8qziVhfil1b2e4xsX5ulFjhRhzvz6WsO4DAgG%2F2YHKl%2FCYxQppGLj6%2BjcCQzoZ7PIXr5%2BVnhUgEdIjEkeuRw6iN75pea55eX2u109MJO9X0WXGswBWsclZgW6R0reXs2UVQ%2FG%2BYI1frGc4sO2ZTEFRbHum4ZMFHTF%2BSQhKRCd829Zf%2BNk%2F9lvAALTydE8jHFhPhZiOsPNdvh6Bqjl3Ly8e&X-Amz-Signature=26c7e02db56cabf5f792d16bc4e0dba82a565eced30db96cc64b07bdcaf71960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYNU3WH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCmT%2BoDuzm%2FJL1p0fBGNqsSc5ydY0tv8fSnlcZqs4k3SQIhAJrha0gi819uCS%2Fa%2BWz7qZCSgRyg6pqC4uilqhnmEcuPKv8DCEgQABoMNjM3NDIzMTgzODA1IgzNVvLBiOiguyVRuTcq3APVz5PP1TE3L2k%2BOWabC%2FLoc3a8rtG%2BEZBXCU4vy3kGv17f09%2B2xTCWPiBh57NlN%2Bl7ldL2dUcqki09hyF3xaKREP%2FZb0ENWUJPrwgc%2BrDiqVQxt3pOT933p7byF4%2BncsSz3r%2FIdWMIf0xmF6q1sYQUnEjNXhEEbdLZWuSEtIg3fGMLCafakQFB24%2BG17R6kfH2Ots9QjI7shTXLYxj13Qh3kxxWMJvuvyRSHjFnmppFmLCJrJ%2FMRBEY2MuJx%2F1hmj0y%2FupiA9mC9cCVGHrl2EqY7Q5AE8kPjo4k0pYmbwewWJUMvIBFpdxZqyL4jpGG3096uGf6ZUCn7S7B1lQKmqdSWhncX9AEj%2BCEBVUfePjkbguoRmjBEeHsaDcvDGCpv3DHGTbxon61V6PvcArKgQUDiI6iV1qEfa43HRIc9ggPOQinj1ikUKnbIvaDJhwA%2BisQ1GanhkxUkbMVQEHXwbz%2FcUSrFeead4YQJ4T3DdGPbKAQyLX10u5Qj6Ya50Yfj2sbcy5OrcGtlkLIvFWf3coF1rqfteiHO2GP3JewyAN6Iu8A5QtRMquVF5imTBHk1%2BnLB1UUwODBMhLmNqmPBFzXVmwn0hVewL7vLYvlGGDgaKiwTnHlKM0QBoDGDDMyLvCBjqkAe1UEh8qziVhfil1b2e4xsX5ulFjhRhzvz6WsO4DAgG%2F2YHKl%2FCYxQppGLj6%2BjcCQzoZ7PIXr5%2BVnhUgEdIjEkeuRw6iN75pea55eX2u109MJO9X0WXGswBWsclZgW6R0reXs2UVQ%2FG%2BYI1frGc4sO2ZTEFRbHum4ZMFHTF%2BSQhKRCd829Zf%2BNk%2F9lvAALTydE8jHFhPhZiOsPNdvh6Bqjl3Ly8e&X-Amz-Signature=73a79e1df62d490e7bd655284304de85cf4fc071b4432bd09a0e23a638d567e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYNU3WH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCmT%2BoDuzm%2FJL1p0fBGNqsSc5ydY0tv8fSnlcZqs4k3SQIhAJrha0gi819uCS%2Fa%2BWz7qZCSgRyg6pqC4uilqhnmEcuPKv8DCEgQABoMNjM3NDIzMTgzODA1IgzNVvLBiOiguyVRuTcq3APVz5PP1TE3L2k%2BOWabC%2FLoc3a8rtG%2BEZBXCU4vy3kGv17f09%2B2xTCWPiBh57NlN%2Bl7ldL2dUcqki09hyF3xaKREP%2FZb0ENWUJPrwgc%2BrDiqVQxt3pOT933p7byF4%2BncsSz3r%2FIdWMIf0xmF6q1sYQUnEjNXhEEbdLZWuSEtIg3fGMLCafakQFB24%2BG17R6kfH2Ots9QjI7shTXLYxj13Qh3kxxWMJvuvyRSHjFnmppFmLCJrJ%2FMRBEY2MuJx%2F1hmj0y%2FupiA9mC9cCVGHrl2EqY7Q5AE8kPjo4k0pYmbwewWJUMvIBFpdxZqyL4jpGG3096uGf6ZUCn7S7B1lQKmqdSWhncX9AEj%2BCEBVUfePjkbguoRmjBEeHsaDcvDGCpv3DHGTbxon61V6PvcArKgQUDiI6iV1qEfa43HRIc9ggPOQinj1ikUKnbIvaDJhwA%2BisQ1GanhkxUkbMVQEHXwbz%2FcUSrFeead4YQJ4T3DdGPbKAQyLX10u5Qj6Ya50Yfj2sbcy5OrcGtlkLIvFWf3coF1rqfteiHO2GP3JewyAN6Iu8A5QtRMquVF5imTBHk1%2BnLB1UUwODBMhLmNqmPBFzXVmwn0hVewL7vLYvlGGDgaKiwTnHlKM0QBoDGDDMyLvCBjqkAe1UEh8qziVhfil1b2e4xsX5ulFjhRhzvz6WsO4DAgG%2F2YHKl%2FCYxQppGLj6%2BjcCQzoZ7PIXr5%2BVnhUgEdIjEkeuRw6iN75pea55eX2u109MJO9X0WXGswBWsclZgW6R0reXs2UVQ%2FG%2BYI1frGc4sO2ZTEFRbHum4ZMFHTF%2BSQhKRCd829Zf%2BNk%2F9lvAALTydE8jHFhPhZiOsPNdvh6Bqjl3Ly8e&X-Amz-Signature=3432fc1ba380b6e538f42f8ab2bcee200eef38751ec0b5265fafa5df61bf29fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYNU3WH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCmT%2BoDuzm%2FJL1p0fBGNqsSc5ydY0tv8fSnlcZqs4k3SQIhAJrha0gi819uCS%2Fa%2BWz7qZCSgRyg6pqC4uilqhnmEcuPKv8DCEgQABoMNjM3NDIzMTgzODA1IgzNVvLBiOiguyVRuTcq3APVz5PP1TE3L2k%2BOWabC%2FLoc3a8rtG%2BEZBXCU4vy3kGv17f09%2B2xTCWPiBh57NlN%2Bl7ldL2dUcqki09hyF3xaKREP%2FZb0ENWUJPrwgc%2BrDiqVQxt3pOT933p7byF4%2BncsSz3r%2FIdWMIf0xmF6q1sYQUnEjNXhEEbdLZWuSEtIg3fGMLCafakQFB24%2BG17R6kfH2Ots9QjI7shTXLYxj13Qh3kxxWMJvuvyRSHjFnmppFmLCJrJ%2FMRBEY2MuJx%2F1hmj0y%2FupiA9mC9cCVGHrl2EqY7Q5AE8kPjo4k0pYmbwewWJUMvIBFpdxZqyL4jpGG3096uGf6ZUCn7S7B1lQKmqdSWhncX9AEj%2BCEBVUfePjkbguoRmjBEeHsaDcvDGCpv3DHGTbxon61V6PvcArKgQUDiI6iV1qEfa43HRIc9ggPOQinj1ikUKnbIvaDJhwA%2BisQ1GanhkxUkbMVQEHXwbz%2FcUSrFeead4YQJ4T3DdGPbKAQyLX10u5Qj6Ya50Yfj2sbcy5OrcGtlkLIvFWf3coF1rqfteiHO2GP3JewyAN6Iu8A5QtRMquVF5imTBHk1%2BnLB1UUwODBMhLmNqmPBFzXVmwn0hVewL7vLYvlGGDgaKiwTnHlKM0QBoDGDDMyLvCBjqkAe1UEh8qziVhfil1b2e4xsX5ulFjhRhzvz6WsO4DAgG%2F2YHKl%2FCYxQppGLj6%2BjcCQzoZ7PIXr5%2BVnhUgEdIjEkeuRw6iN75pea55eX2u109MJO9X0WXGswBWsclZgW6R0reXs2UVQ%2FG%2BYI1frGc4sO2ZTEFRbHum4ZMFHTF%2BSQhKRCd829Zf%2BNk%2F9lvAALTydE8jHFhPhZiOsPNdvh6Bqjl3Ly8e&X-Amz-Signature=199ee5ed85c01d14ba017c2c3c83e6a4b9f5cb09132169c45387400d86ede433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYNU3WH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCmT%2BoDuzm%2FJL1p0fBGNqsSc5ydY0tv8fSnlcZqs4k3SQIhAJrha0gi819uCS%2Fa%2BWz7qZCSgRyg6pqC4uilqhnmEcuPKv8DCEgQABoMNjM3NDIzMTgzODA1IgzNVvLBiOiguyVRuTcq3APVz5PP1TE3L2k%2BOWabC%2FLoc3a8rtG%2BEZBXCU4vy3kGv17f09%2B2xTCWPiBh57NlN%2Bl7ldL2dUcqki09hyF3xaKREP%2FZb0ENWUJPrwgc%2BrDiqVQxt3pOT933p7byF4%2BncsSz3r%2FIdWMIf0xmF6q1sYQUnEjNXhEEbdLZWuSEtIg3fGMLCafakQFB24%2BG17R6kfH2Ots9QjI7shTXLYxj13Qh3kxxWMJvuvyRSHjFnmppFmLCJrJ%2FMRBEY2MuJx%2F1hmj0y%2FupiA9mC9cCVGHrl2EqY7Q5AE8kPjo4k0pYmbwewWJUMvIBFpdxZqyL4jpGG3096uGf6ZUCn7S7B1lQKmqdSWhncX9AEj%2BCEBVUfePjkbguoRmjBEeHsaDcvDGCpv3DHGTbxon61V6PvcArKgQUDiI6iV1qEfa43HRIc9ggPOQinj1ikUKnbIvaDJhwA%2BisQ1GanhkxUkbMVQEHXwbz%2FcUSrFeead4YQJ4T3DdGPbKAQyLX10u5Qj6Ya50Yfj2sbcy5OrcGtlkLIvFWf3coF1rqfteiHO2GP3JewyAN6Iu8A5QtRMquVF5imTBHk1%2BnLB1UUwODBMhLmNqmPBFzXVmwn0hVewL7vLYvlGGDgaKiwTnHlKM0QBoDGDDMyLvCBjqkAe1UEh8qziVhfil1b2e4xsX5ulFjhRhzvz6WsO4DAgG%2F2YHKl%2FCYxQppGLj6%2BjcCQzoZ7PIXr5%2BVnhUgEdIjEkeuRw6iN75pea55eX2u109MJO9X0WXGswBWsclZgW6R0reXs2UVQ%2FG%2BYI1frGc4sO2ZTEFRbHum4ZMFHTF%2BSQhKRCd829Zf%2BNk%2F9lvAALTydE8jHFhPhZiOsPNdvh6Bqjl3Ly8e&X-Amz-Signature=0038881ba4a6408c011a44f3d27895cacaa7de45005318b0dac1ee580ec1e56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYNU3WH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCmT%2BoDuzm%2FJL1p0fBGNqsSc5ydY0tv8fSnlcZqs4k3SQIhAJrha0gi819uCS%2Fa%2BWz7qZCSgRyg6pqC4uilqhnmEcuPKv8DCEgQABoMNjM3NDIzMTgzODA1IgzNVvLBiOiguyVRuTcq3APVz5PP1TE3L2k%2BOWabC%2FLoc3a8rtG%2BEZBXCU4vy3kGv17f09%2B2xTCWPiBh57NlN%2Bl7ldL2dUcqki09hyF3xaKREP%2FZb0ENWUJPrwgc%2BrDiqVQxt3pOT933p7byF4%2BncsSz3r%2FIdWMIf0xmF6q1sYQUnEjNXhEEbdLZWuSEtIg3fGMLCafakQFB24%2BG17R6kfH2Ots9QjI7shTXLYxj13Qh3kxxWMJvuvyRSHjFnmppFmLCJrJ%2FMRBEY2MuJx%2F1hmj0y%2FupiA9mC9cCVGHrl2EqY7Q5AE8kPjo4k0pYmbwewWJUMvIBFpdxZqyL4jpGG3096uGf6ZUCn7S7B1lQKmqdSWhncX9AEj%2BCEBVUfePjkbguoRmjBEeHsaDcvDGCpv3DHGTbxon61V6PvcArKgQUDiI6iV1qEfa43HRIc9ggPOQinj1ikUKnbIvaDJhwA%2BisQ1GanhkxUkbMVQEHXwbz%2FcUSrFeead4YQJ4T3DdGPbKAQyLX10u5Qj6Ya50Yfj2sbcy5OrcGtlkLIvFWf3coF1rqfteiHO2GP3JewyAN6Iu8A5QtRMquVF5imTBHk1%2BnLB1UUwODBMhLmNqmPBFzXVmwn0hVewL7vLYvlGGDgaKiwTnHlKM0QBoDGDDMyLvCBjqkAe1UEh8qziVhfil1b2e4xsX5ulFjhRhzvz6WsO4DAgG%2F2YHKl%2FCYxQppGLj6%2BjcCQzoZ7PIXr5%2BVnhUgEdIjEkeuRw6iN75pea55eX2u109MJO9X0WXGswBWsclZgW6R0reXs2UVQ%2FG%2BYI1frGc4sO2ZTEFRbHum4ZMFHTF%2BSQhKRCd829Zf%2BNk%2F9lvAALTydE8jHFhPhZiOsPNdvh6Bqjl3Ly8e&X-Amz-Signature=f576e883bf18c6ec13694112f5699d6050bc24504361fe56b9b2919fdad33e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYNU3WH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCmT%2BoDuzm%2FJL1p0fBGNqsSc5ydY0tv8fSnlcZqs4k3SQIhAJrha0gi819uCS%2Fa%2BWz7qZCSgRyg6pqC4uilqhnmEcuPKv8DCEgQABoMNjM3NDIzMTgzODA1IgzNVvLBiOiguyVRuTcq3APVz5PP1TE3L2k%2BOWabC%2FLoc3a8rtG%2BEZBXCU4vy3kGv17f09%2B2xTCWPiBh57NlN%2Bl7ldL2dUcqki09hyF3xaKREP%2FZb0ENWUJPrwgc%2BrDiqVQxt3pOT933p7byF4%2BncsSz3r%2FIdWMIf0xmF6q1sYQUnEjNXhEEbdLZWuSEtIg3fGMLCafakQFB24%2BG17R6kfH2Ots9QjI7shTXLYxj13Qh3kxxWMJvuvyRSHjFnmppFmLCJrJ%2FMRBEY2MuJx%2F1hmj0y%2FupiA9mC9cCVGHrl2EqY7Q5AE8kPjo4k0pYmbwewWJUMvIBFpdxZqyL4jpGG3096uGf6ZUCn7S7B1lQKmqdSWhncX9AEj%2BCEBVUfePjkbguoRmjBEeHsaDcvDGCpv3DHGTbxon61V6PvcArKgQUDiI6iV1qEfa43HRIc9ggPOQinj1ikUKnbIvaDJhwA%2BisQ1GanhkxUkbMVQEHXwbz%2FcUSrFeead4YQJ4T3DdGPbKAQyLX10u5Qj6Ya50Yfj2sbcy5OrcGtlkLIvFWf3coF1rqfteiHO2GP3JewyAN6Iu8A5QtRMquVF5imTBHk1%2BnLB1UUwODBMhLmNqmPBFzXVmwn0hVewL7vLYvlGGDgaKiwTnHlKM0QBoDGDDMyLvCBjqkAe1UEh8qziVhfil1b2e4xsX5ulFjhRhzvz6WsO4DAgG%2F2YHKl%2FCYxQppGLj6%2BjcCQzoZ7PIXr5%2BVnhUgEdIjEkeuRw6iN75pea55eX2u109MJO9X0WXGswBWsclZgW6R0reXs2UVQ%2FG%2BYI1frGc4sO2ZTEFRbHum4ZMFHTF%2BSQhKRCd829Zf%2BNk%2F9lvAALTydE8jHFhPhZiOsPNdvh6Bqjl3Ly8e&X-Amz-Signature=6cdc78a703bb5968478a9c9c019bfcf8031fe448f4546d9f55ff3cbb9944f0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

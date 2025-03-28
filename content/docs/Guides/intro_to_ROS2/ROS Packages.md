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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67AAOF4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3pWjYSASItSqMVnf2TsURO6XQMD94w%2B%2FxpPtCwvp%2B8AiBSoSJYXZjeL4jIhOT3u2klRYQJAiKetcU6UJSV%2BpSPAir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjpKgSamhBkyyew3XKtwDQOuMKpD96Lf5OCThr2j16JVKG8I25txZdZZHfeOcQefi8%2FWFXeIAID6mVFzKutmpssNovvjo1Y%2Fl25Cnim%2BJqdETeFXCehgsgYqxIRnRHzvNQAApNNxSh1aH5XIcOu2IuK13H6POC6hXzMOBYWNG%2BZdluw79EZO2%2B1w9vhjlxcwidMFD3NnLPUGBBv0bELnTGYx0eQjmzPj2KMVVaHrK7TPBXgUfrVrTDhij%2BCioZX7J%2B3y0gPEcsE99z902BNuKohxu2IC5K97DlbMFPE0ER7CIr6y9z2Yt%2F1JK%2BhnEiCvLTjXiSrjZIP2udia3fuA%2FC3%2BFOZBPLXtiLLXdlX3AR%2BRo4zUyGXUMYBwmCZl%2BxdCchWvduXi82f2wXpJZn8BA9gDjSKCkPMPiDPY5msHm0pbcOUOX%2FEM8Q%2FLXkE07S2tmOZvIYr%2FLGR2GhqEt5uEEHQrZR7Jc2Wqd8Lp7Qc1HfFileJuL3IoyL05N0qPkhso7wDDTrfQAkOv0t5qVHHUYgQFTgNNWxZrgtVVJe%2FxD1WzM8MOghyzZwpVnbaWR3KWzavoYnFrZoUxPypGwhIVQHvSpOQV81o8AyqYFCaciD1mIhyxE1MFNRMVc9YS1yn%2FMhbD4PNnVanlAHFIw2NuZvwY6pgF4cDeCQ6m0jnVBVI6iLN2qgGgVLZg%2F562AnL0Ei1ap7Ukej%2Bo1mysCHOq03IQjyDwY9R%2Frv%2B6RLKyRqiT%2Bv6ixad1cUpoQlP21ckpmaSJFVvFbtkd4cxCtONcEeH4e385T4r7O3gabB90mj3XcoMZiZXemSI5yk%2FND4EEl%2F2JeBAXfYEkBRTsfDnYMpcLitkjVzA5zMDz3MLq20e%2FLStnwsYibUgyg&X-Amz-Signature=077cebd23002ffae50062ee13e5df51cb8b78081f90cc2f714849257930df48b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67AAOF4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3pWjYSASItSqMVnf2TsURO6XQMD94w%2B%2FxpPtCwvp%2B8AiBSoSJYXZjeL4jIhOT3u2klRYQJAiKetcU6UJSV%2BpSPAir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjpKgSamhBkyyew3XKtwDQOuMKpD96Lf5OCThr2j16JVKG8I25txZdZZHfeOcQefi8%2FWFXeIAID6mVFzKutmpssNovvjo1Y%2Fl25Cnim%2BJqdETeFXCehgsgYqxIRnRHzvNQAApNNxSh1aH5XIcOu2IuK13H6POC6hXzMOBYWNG%2BZdluw79EZO2%2B1w9vhjlxcwidMFD3NnLPUGBBv0bELnTGYx0eQjmzPj2KMVVaHrK7TPBXgUfrVrTDhij%2BCioZX7J%2B3y0gPEcsE99z902BNuKohxu2IC5K97DlbMFPE0ER7CIr6y9z2Yt%2F1JK%2BhnEiCvLTjXiSrjZIP2udia3fuA%2FC3%2BFOZBPLXtiLLXdlX3AR%2BRo4zUyGXUMYBwmCZl%2BxdCchWvduXi82f2wXpJZn8BA9gDjSKCkPMPiDPY5msHm0pbcOUOX%2FEM8Q%2FLXkE07S2tmOZvIYr%2FLGR2GhqEt5uEEHQrZR7Jc2Wqd8Lp7Qc1HfFileJuL3IoyL05N0qPkhso7wDDTrfQAkOv0t5qVHHUYgQFTgNNWxZrgtVVJe%2FxD1WzM8MOghyzZwpVnbaWR3KWzavoYnFrZoUxPypGwhIVQHvSpOQV81o8AyqYFCaciD1mIhyxE1MFNRMVc9YS1yn%2FMhbD4PNnVanlAHFIw2NuZvwY6pgF4cDeCQ6m0jnVBVI6iLN2qgGgVLZg%2F562AnL0Ei1ap7Ukej%2Bo1mysCHOq03IQjyDwY9R%2Frv%2B6RLKyRqiT%2Bv6ixad1cUpoQlP21ckpmaSJFVvFbtkd4cxCtONcEeH4e385T4r7O3gabB90mj3XcoMZiZXemSI5yk%2FND4EEl%2F2JeBAXfYEkBRTsfDnYMpcLitkjVzA5zMDz3MLq20e%2FLStnwsYibUgyg&X-Amz-Signature=3d3868916be99b4830f8cfb1ff3b6e30dc0660aee2e396fc0bef12d208614619&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67AAOF4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3pWjYSASItSqMVnf2TsURO6XQMD94w%2B%2FxpPtCwvp%2B8AiBSoSJYXZjeL4jIhOT3u2klRYQJAiKetcU6UJSV%2BpSPAir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjpKgSamhBkyyew3XKtwDQOuMKpD96Lf5OCThr2j16JVKG8I25txZdZZHfeOcQefi8%2FWFXeIAID6mVFzKutmpssNovvjo1Y%2Fl25Cnim%2BJqdETeFXCehgsgYqxIRnRHzvNQAApNNxSh1aH5XIcOu2IuK13H6POC6hXzMOBYWNG%2BZdluw79EZO2%2B1w9vhjlxcwidMFD3NnLPUGBBv0bELnTGYx0eQjmzPj2KMVVaHrK7TPBXgUfrVrTDhij%2BCioZX7J%2B3y0gPEcsE99z902BNuKohxu2IC5K97DlbMFPE0ER7CIr6y9z2Yt%2F1JK%2BhnEiCvLTjXiSrjZIP2udia3fuA%2FC3%2BFOZBPLXtiLLXdlX3AR%2BRo4zUyGXUMYBwmCZl%2BxdCchWvduXi82f2wXpJZn8BA9gDjSKCkPMPiDPY5msHm0pbcOUOX%2FEM8Q%2FLXkE07S2tmOZvIYr%2FLGR2GhqEt5uEEHQrZR7Jc2Wqd8Lp7Qc1HfFileJuL3IoyL05N0qPkhso7wDDTrfQAkOv0t5qVHHUYgQFTgNNWxZrgtVVJe%2FxD1WzM8MOghyzZwpVnbaWR3KWzavoYnFrZoUxPypGwhIVQHvSpOQV81o8AyqYFCaciD1mIhyxE1MFNRMVc9YS1yn%2FMhbD4PNnVanlAHFIw2NuZvwY6pgF4cDeCQ6m0jnVBVI6iLN2qgGgVLZg%2F562AnL0Ei1ap7Ukej%2Bo1mysCHOq03IQjyDwY9R%2Frv%2B6RLKyRqiT%2Bv6ixad1cUpoQlP21ckpmaSJFVvFbtkd4cxCtONcEeH4e385T4r7O3gabB90mj3XcoMZiZXemSI5yk%2FND4EEl%2F2JeBAXfYEkBRTsfDnYMpcLitkjVzA5zMDz3MLq20e%2FLStnwsYibUgyg&X-Amz-Signature=5c6e4a7a3ef8d0fa6bc19c3521658da57626b8fe75437ff7983421c9817abea5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67AAOF4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3pWjYSASItSqMVnf2TsURO6XQMD94w%2B%2FxpPtCwvp%2B8AiBSoSJYXZjeL4jIhOT3u2klRYQJAiKetcU6UJSV%2BpSPAir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjpKgSamhBkyyew3XKtwDQOuMKpD96Lf5OCThr2j16JVKG8I25txZdZZHfeOcQefi8%2FWFXeIAID6mVFzKutmpssNovvjo1Y%2Fl25Cnim%2BJqdETeFXCehgsgYqxIRnRHzvNQAApNNxSh1aH5XIcOu2IuK13H6POC6hXzMOBYWNG%2BZdluw79EZO2%2B1w9vhjlxcwidMFD3NnLPUGBBv0bELnTGYx0eQjmzPj2KMVVaHrK7TPBXgUfrVrTDhij%2BCioZX7J%2B3y0gPEcsE99z902BNuKohxu2IC5K97DlbMFPE0ER7CIr6y9z2Yt%2F1JK%2BhnEiCvLTjXiSrjZIP2udia3fuA%2FC3%2BFOZBPLXtiLLXdlX3AR%2BRo4zUyGXUMYBwmCZl%2BxdCchWvduXi82f2wXpJZn8BA9gDjSKCkPMPiDPY5msHm0pbcOUOX%2FEM8Q%2FLXkE07S2tmOZvIYr%2FLGR2GhqEt5uEEHQrZR7Jc2Wqd8Lp7Qc1HfFileJuL3IoyL05N0qPkhso7wDDTrfQAkOv0t5qVHHUYgQFTgNNWxZrgtVVJe%2FxD1WzM8MOghyzZwpVnbaWR3KWzavoYnFrZoUxPypGwhIVQHvSpOQV81o8AyqYFCaciD1mIhyxE1MFNRMVc9YS1yn%2FMhbD4PNnVanlAHFIw2NuZvwY6pgF4cDeCQ6m0jnVBVI6iLN2qgGgVLZg%2F562AnL0Ei1ap7Ukej%2Bo1mysCHOq03IQjyDwY9R%2Frv%2B6RLKyRqiT%2Bv6ixad1cUpoQlP21ckpmaSJFVvFbtkd4cxCtONcEeH4e385T4r7O3gabB90mj3XcoMZiZXemSI5yk%2FND4EEl%2F2JeBAXfYEkBRTsfDnYMpcLitkjVzA5zMDz3MLq20e%2FLStnwsYibUgyg&X-Amz-Signature=3b35dbae2e2a228a533624ea5e8be72c3959c722bfaf90122441a321e3b7bf83&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67AAOF4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3pWjYSASItSqMVnf2TsURO6XQMD94w%2B%2FxpPtCwvp%2B8AiBSoSJYXZjeL4jIhOT3u2klRYQJAiKetcU6UJSV%2BpSPAir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjpKgSamhBkyyew3XKtwDQOuMKpD96Lf5OCThr2j16JVKG8I25txZdZZHfeOcQefi8%2FWFXeIAID6mVFzKutmpssNovvjo1Y%2Fl25Cnim%2BJqdETeFXCehgsgYqxIRnRHzvNQAApNNxSh1aH5XIcOu2IuK13H6POC6hXzMOBYWNG%2BZdluw79EZO2%2B1w9vhjlxcwidMFD3NnLPUGBBv0bELnTGYx0eQjmzPj2KMVVaHrK7TPBXgUfrVrTDhij%2BCioZX7J%2B3y0gPEcsE99z902BNuKohxu2IC5K97DlbMFPE0ER7CIr6y9z2Yt%2F1JK%2BhnEiCvLTjXiSrjZIP2udia3fuA%2FC3%2BFOZBPLXtiLLXdlX3AR%2BRo4zUyGXUMYBwmCZl%2BxdCchWvduXi82f2wXpJZn8BA9gDjSKCkPMPiDPY5msHm0pbcOUOX%2FEM8Q%2FLXkE07S2tmOZvIYr%2FLGR2GhqEt5uEEHQrZR7Jc2Wqd8Lp7Qc1HfFileJuL3IoyL05N0qPkhso7wDDTrfQAkOv0t5qVHHUYgQFTgNNWxZrgtVVJe%2FxD1WzM8MOghyzZwpVnbaWR3KWzavoYnFrZoUxPypGwhIVQHvSpOQV81o8AyqYFCaciD1mIhyxE1MFNRMVc9YS1yn%2FMhbD4PNnVanlAHFIw2NuZvwY6pgF4cDeCQ6m0jnVBVI6iLN2qgGgVLZg%2F562AnL0Ei1ap7Ukej%2Bo1mysCHOq03IQjyDwY9R%2Frv%2B6RLKyRqiT%2Bv6ixad1cUpoQlP21ckpmaSJFVvFbtkd4cxCtONcEeH4e385T4r7O3gabB90mj3XcoMZiZXemSI5yk%2FND4EEl%2F2JeBAXfYEkBRTsfDnYMpcLitkjVzA5zMDz3MLq20e%2FLStnwsYibUgyg&X-Amz-Signature=e0fb4cde779fe93b776bc7d8949d51b16f1016f0cae9981541d62ab9901c44c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67AAOF4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3pWjYSASItSqMVnf2TsURO6XQMD94w%2B%2FxpPtCwvp%2B8AiBSoSJYXZjeL4jIhOT3u2klRYQJAiKetcU6UJSV%2BpSPAir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjpKgSamhBkyyew3XKtwDQOuMKpD96Lf5OCThr2j16JVKG8I25txZdZZHfeOcQefi8%2FWFXeIAID6mVFzKutmpssNovvjo1Y%2Fl25Cnim%2BJqdETeFXCehgsgYqxIRnRHzvNQAApNNxSh1aH5XIcOu2IuK13H6POC6hXzMOBYWNG%2BZdluw79EZO2%2B1w9vhjlxcwidMFD3NnLPUGBBv0bELnTGYx0eQjmzPj2KMVVaHrK7TPBXgUfrVrTDhij%2BCioZX7J%2B3y0gPEcsE99z902BNuKohxu2IC5K97DlbMFPE0ER7CIr6y9z2Yt%2F1JK%2BhnEiCvLTjXiSrjZIP2udia3fuA%2FC3%2BFOZBPLXtiLLXdlX3AR%2BRo4zUyGXUMYBwmCZl%2BxdCchWvduXi82f2wXpJZn8BA9gDjSKCkPMPiDPY5msHm0pbcOUOX%2FEM8Q%2FLXkE07S2tmOZvIYr%2FLGR2GhqEt5uEEHQrZR7Jc2Wqd8Lp7Qc1HfFileJuL3IoyL05N0qPkhso7wDDTrfQAkOv0t5qVHHUYgQFTgNNWxZrgtVVJe%2FxD1WzM8MOghyzZwpVnbaWR3KWzavoYnFrZoUxPypGwhIVQHvSpOQV81o8AyqYFCaciD1mIhyxE1MFNRMVc9YS1yn%2FMhbD4PNnVanlAHFIw2NuZvwY6pgF4cDeCQ6m0jnVBVI6iLN2qgGgVLZg%2F562AnL0Ei1ap7Ukej%2Bo1mysCHOq03IQjyDwY9R%2Frv%2B6RLKyRqiT%2Bv6ixad1cUpoQlP21ckpmaSJFVvFbtkd4cxCtONcEeH4e385T4r7O3gabB90mj3XcoMZiZXemSI5yk%2FND4EEl%2F2JeBAXfYEkBRTsfDnYMpcLitkjVzA5zMDz3MLq20e%2FLStnwsYibUgyg&X-Amz-Signature=57c1241439f651f16ce2d98aca7d62ba2b986ead48119811f6bfb0390f4285a1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67AAOF4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3pWjYSASItSqMVnf2TsURO6XQMD94w%2B%2FxpPtCwvp%2B8AiBSoSJYXZjeL4jIhOT3u2klRYQJAiKetcU6UJSV%2BpSPAir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjpKgSamhBkyyew3XKtwDQOuMKpD96Lf5OCThr2j16JVKG8I25txZdZZHfeOcQefi8%2FWFXeIAID6mVFzKutmpssNovvjo1Y%2Fl25Cnim%2BJqdETeFXCehgsgYqxIRnRHzvNQAApNNxSh1aH5XIcOu2IuK13H6POC6hXzMOBYWNG%2BZdluw79EZO2%2B1w9vhjlxcwidMFD3NnLPUGBBv0bELnTGYx0eQjmzPj2KMVVaHrK7TPBXgUfrVrTDhij%2BCioZX7J%2B3y0gPEcsE99z902BNuKohxu2IC5K97DlbMFPE0ER7CIr6y9z2Yt%2F1JK%2BhnEiCvLTjXiSrjZIP2udia3fuA%2FC3%2BFOZBPLXtiLLXdlX3AR%2BRo4zUyGXUMYBwmCZl%2BxdCchWvduXi82f2wXpJZn8BA9gDjSKCkPMPiDPY5msHm0pbcOUOX%2FEM8Q%2FLXkE07S2tmOZvIYr%2FLGR2GhqEt5uEEHQrZR7Jc2Wqd8Lp7Qc1HfFileJuL3IoyL05N0qPkhso7wDDTrfQAkOv0t5qVHHUYgQFTgNNWxZrgtVVJe%2FxD1WzM8MOghyzZwpVnbaWR3KWzavoYnFrZoUxPypGwhIVQHvSpOQV81o8AyqYFCaciD1mIhyxE1MFNRMVc9YS1yn%2FMhbD4PNnVanlAHFIw2NuZvwY6pgF4cDeCQ6m0jnVBVI6iLN2qgGgVLZg%2F562AnL0Ei1ap7Ukej%2Bo1mysCHOq03IQjyDwY9R%2Frv%2B6RLKyRqiT%2Bv6ixad1cUpoQlP21ckpmaSJFVvFbtkd4cxCtONcEeH4e385T4r7O3gabB90mj3XcoMZiZXemSI5yk%2FND4EEl%2F2JeBAXfYEkBRTsfDnYMpcLitkjVzA5zMDz3MLq20e%2FLStnwsYibUgyg&X-Amz-Signature=7e0a63f6813b9d30b01e7131551ca87c9dd9eca242625488c5ff0610217f7d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

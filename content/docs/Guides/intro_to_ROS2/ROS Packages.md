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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566XKPVI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPt2izH9MShMOyBLXEay%2BZKQmftEAudiaD1EJh7S8eOAiA5P%2FXh3eAxKYOcftgS28ZhfPj1lCAeZ5Rh4D7vll8Heir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5gOCmoAoEg9bQviRKtwD13%2BiOzllYZZ9vUrZ773tcUMr5G0YHUOQEPu6wic1yC0q7IhHjozquYyyVVKVj2fiCNw3WgiOaw4TUG7IFH2yvXCyUeUz%2BRvPy1QoWMs%2BeB58NA6vNTV1PaLJ63zQjBotCDtzYYEOrVFVrvgA%2BlXTvT19F60d2ikxdXbgV%2FYDByV6xzbdElE%2BRtf%2BsXrj5rea96lAjYtSyhMLVgLkWmt9poJq9j82HWZNJGcqSlXKvDDkOgfBR%2FF5cl7BZ9R77CSbGBr89JiAzLZu3dOm%2BOPKFXFjswZn94%2FQ2GNjpNo2Yi1ExBzvmw0b6UgW4BpcB%2Bj862EBjQR7GymEWJ1mg3r%2BbmhTT6epH30sfq2QmvHOapB9bPy0zzz%2FU38mObNjBBDxO5bwfD%2F7yuwrnKKiMeVsizn0nq4XkgbQllLhvxv9sp%2BkCBXxrY%2BshJ%2BTGzUWPrK2ng8KKyA5NJReuGgTOvEjmk89CRSfz2vvjXX6RngemKpjftoleKTWLkKToGt1gppiTZfpzqoA0QIfirxo4uK1Q7fM2klDsFBBz8hNIRxwGLSHhnOcXGPvwY2qfFqkSLTiWIit%2BidDuX7aX9%2BN7xPZDgM79jH%2FRrfg5g2dWwoRffehG%2FZqP%2BW5UDLCTiswg6OpwQY6pgFOVYLkI4TdZKXz6MAjerauePc%2BuacNoS0myaadA0IzCrcU38XKQ4NWqI9tnXQFAF5pgG4JGvHuqPryfOtb0b%2Fm2rAW5KAlvJy4ZIlIY45OEfkH4msjSHJxNNCg%2Fx4gb9pTgevM4rQ12Vo4FFRxrroDrmksKA%2FuN%2FDBmYW2UszSzrVYJyJJlJOX%2BoLy3EPYn2%2BmEHO3hfAx6srE2F%2BThSsiY3by9S%2FM&X-Amz-Signature=3b22d7fd6a91712df43d4d7478ce82ff345e1e760bfc1c2b250e18464c8c3144&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566XKPVI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPt2izH9MShMOyBLXEay%2BZKQmftEAudiaD1EJh7S8eOAiA5P%2FXh3eAxKYOcftgS28ZhfPj1lCAeZ5Rh4D7vll8Heir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5gOCmoAoEg9bQviRKtwD13%2BiOzllYZZ9vUrZ773tcUMr5G0YHUOQEPu6wic1yC0q7IhHjozquYyyVVKVj2fiCNw3WgiOaw4TUG7IFH2yvXCyUeUz%2BRvPy1QoWMs%2BeB58NA6vNTV1PaLJ63zQjBotCDtzYYEOrVFVrvgA%2BlXTvT19F60d2ikxdXbgV%2FYDByV6xzbdElE%2BRtf%2BsXrj5rea96lAjYtSyhMLVgLkWmt9poJq9j82HWZNJGcqSlXKvDDkOgfBR%2FF5cl7BZ9R77CSbGBr89JiAzLZu3dOm%2BOPKFXFjswZn94%2FQ2GNjpNo2Yi1ExBzvmw0b6UgW4BpcB%2Bj862EBjQR7GymEWJ1mg3r%2BbmhTT6epH30sfq2QmvHOapB9bPy0zzz%2FU38mObNjBBDxO5bwfD%2F7yuwrnKKiMeVsizn0nq4XkgbQllLhvxv9sp%2BkCBXxrY%2BshJ%2BTGzUWPrK2ng8KKyA5NJReuGgTOvEjmk89CRSfz2vvjXX6RngemKpjftoleKTWLkKToGt1gppiTZfpzqoA0QIfirxo4uK1Q7fM2klDsFBBz8hNIRxwGLSHhnOcXGPvwY2qfFqkSLTiWIit%2BidDuX7aX9%2BN7xPZDgM79jH%2FRrfg5g2dWwoRffehG%2FZqP%2BW5UDLCTiswg6OpwQY6pgFOVYLkI4TdZKXz6MAjerauePc%2BuacNoS0myaadA0IzCrcU38XKQ4NWqI9tnXQFAF5pgG4JGvHuqPryfOtb0b%2Fm2rAW5KAlvJy4ZIlIY45OEfkH4msjSHJxNNCg%2Fx4gb9pTgevM4rQ12Vo4FFRxrroDrmksKA%2FuN%2FDBmYW2UszSzrVYJyJJlJOX%2BoLy3EPYn2%2BmEHO3hfAx6srE2F%2BThSsiY3by9S%2FM&X-Amz-Signature=c31ec764f8ab962ee39a2ee5ecd48d5a2a9f037de5f0b042242374fe811808ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566XKPVI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPt2izH9MShMOyBLXEay%2BZKQmftEAudiaD1EJh7S8eOAiA5P%2FXh3eAxKYOcftgS28ZhfPj1lCAeZ5Rh4D7vll8Heir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5gOCmoAoEg9bQviRKtwD13%2BiOzllYZZ9vUrZ773tcUMr5G0YHUOQEPu6wic1yC0q7IhHjozquYyyVVKVj2fiCNw3WgiOaw4TUG7IFH2yvXCyUeUz%2BRvPy1QoWMs%2BeB58NA6vNTV1PaLJ63zQjBotCDtzYYEOrVFVrvgA%2BlXTvT19F60d2ikxdXbgV%2FYDByV6xzbdElE%2BRtf%2BsXrj5rea96lAjYtSyhMLVgLkWmt9poJq9j82HWZNJGcqSlXKvDDkOgfBR%2FF5cl7BZ9R77CSbGBr89JiAzLZu3dOm%2BOPKFXFjswZn94%2FQ2GNjpNo2Yi1ExBzvmw0b6UgW4BpcB%2Bj862EBjQR7GymEWJ1mg3r%2BbmhTT6epH30sfq2QmvHOapB9bPy0zzz%2FU38mObNjBBDxO5bwfD%2F7yuwrnKKiMeVsizn0nq4XkgbQllLhvxv9sp%2BkCBXxrY%2BshJ%2BTGzUWPrK2ng8KKyA5NJReuGgTOvEjmk89CRSfz2vvjXX6RngemKpjftoleKTWLkKToGt1gppiTZfpzqoA0QIfirxo4uK1Q7fM2klDsFBBz8hNIRxwGLSHhnOcXGPvwY2qfFqkSLTiWIit%2BidDuX7aX9%2BN7xPZDgM79jH%2FRrfg5g2dWwoRffehG%2FZqP%2BW5UDLCTiswg6OpwQY6pgFOVYLkI4TdZKXz6MAjerauePc%2BuacNoS0myaadA0IzCrcU38XKQ4NWqI9tnXQFAF5pgG4JGvHuqPryfOtb0b%2Fm2rAW5KAlvJy4ZIlIY45OEfkH4msjSHJxNNCg%2Fx4gb9pTgevM4rQ12Vo4FFRxrroDrmksKA%2FuN%2FDBmYW2UszSzrVYJyJJlJOX%2BoLy3EPYn2%2BmEHO3hfAx6srE2F%2BThSsiY3by9S%2FM&X-Amz-Signature=6818a4861b677989b1836720efabd49228befa53c2a642d44ce4b8d637b48c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566XKPVI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPt2izH9MShMOyBLXEay%2BZKQmftEAudiaD1EJh7S8eOAiA5P%2FXh3eAxKYOcftgS28ZhfPj1lCAeZ5Rh4D7vll8Heir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5gOCmoAoEg9bQviRKtwD13%2BiOzllYZZ9vUrZ773tcUMr5G0YHUOQEPu6wic1yC0q7IhHjozquYyyVVKVj2fiCNw3WgiOaw4TUG7IFH2yvXCyUeUz%2BRvPy1QoWMs%2BeB58NA6vNTV1PaLJ63zQjBotCDtzYYEOrVFVrvgA%2BlXTvT19F60d2ikxdXbgV%2FYDByV6xzbdElE%2BRtf%2BsXrj5rea96lAjYtSyhMLVgLkWmt9poJq9j82HWZNJGcqSlXKvDDkOgfBR%2FF5cl7BZ9R77CSbGBr89JiAzLZu3dOm%2BOPKFXFjswZn94%2FQ2GNjpNo2Yi1ExBzvmw0b6UgW4BpcB%2Bj862EBjQR7GymEWJ1mg3r%2BbmhTT6epH30sfq2QmvHOapB9bPy0zzz%2FU38mObNjBBDxO5bwfD%2F7yuwrnKKiMeVsizn0nq4XkgbQllLhvxv9sp%2BkCBXxrY%2BshJ%2BTGzUWPrK2ng8KKyA5NJReuGgTOvEjmk89CRSfz2vvjXX6RngemKpjftoleKTWLkKToGt1gppiTZfpzqoA0QIfirxo4uK1Q7fM2klDsFBBz8hNIRxwGLSHhnOcXGPvwY2qfFqkSLTiWIit%2BidDuX7aX9%2BN7xPZDgM79jH%2FRrfg5g2dWwoRffehG%2FZqP%2BW5UDLCTiswg6OpwQY6pgFOVYLkI4TdZKXz6MAjerauePc%2BuacNoS0myaadA0IzCrcU38XKQ4NWqI9tnXQFAF5pgG4JGvHuqPryfOtb0b%2Fm2rAW5KAlvJy4ZIlIY45OEfkH4msjSHJxNNCg%2Fx4gb9pTgevM4rQ12Vo4FFRxrroDrmksKA%2FuN%2FDBmYW2UszSzrVYJyJJlJOX%2BoLy3EPYn2%2BmEHO3hfAx6srE2F%2BThSsiY3by9S%2FM&X-Amz-Signature=2cf5eabab817c0c1b2dab262dcd49a16054902cde0f86dd8ac790cb3bbe14cac&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566XKPVI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPt2izH9MShMOyBLXEay%2BZKQmftEAudiaD1EJh7S8eOAiA5P%2FXh3eAxKYOcftgS28ZhfPj1lCAeZ5Rh4D7vll8Heir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5gOCmoAoEg9bQviRKtwD13%2BiOzllYZZ9vUrZ773tcUMr5G0YHUOQEPu6wic1yC0q7IhHjozquYyyVVKVj2fiCNw3WgiOaw4TUG7IFH2yvXCyUeUz%2BRvPy1QoWMs%2BeB58NA6vNTV1PaLJ63zQjBotCDtzYYEOrVFVrvgA%2BlXTvT19F60d2ikxdXbgV%2FYDByV6xzbdElE%2BRtf%2BsXrj5rea96lAjYtSyhMLVgLkWmt9poJq9j82HWZNJGcqSlXKvDDkOgfBR%2FF5cl7BZ9R77CSbGBr89JiAzLZu3dOm%2BOPKFXFjswZn94%2FQ2GNjpNo2Yi1ExBzvmw0b6UgW4BpcB%2Bj862EBjQR7GymEWJ1mg3r%2BbmhTT6epH30sfq2QmvHOapB9bPy0zzz%2FU38mObNjBBDxO5bwfD%2F7yuwrnKKiMeVsizn0nq4XkgbQllLhvxv9sp%2BkCBXxrY%2BshJ%2BTGzUWPrK2ng8KKyA5NJReuGgTOvEjmk89CRSfz2vvjXX6RngemKpjftoleKTWLkKToGt1gppiTZfpzqoA0QIfirxo4uK1Q7fM2klDsFBBz8hNIRxwGLSHhnOcXGPvwY2qfFqkSLTiWIit%2BidDuX7aX9%2BN7xPZDgM79jH%2FRrfg5g2dWwoRffehG%2FZqP%2BW5UDLCTiswg6OpwQY6pgFOVYLkI4TdZKXz6MAjerauePc%2BuacNoS0myaadA0IzCrcU38XKQ4NWqI9tnXQFAF5pgG4JGvHuqPryfOtb0b%2Fm2rAW5KAlvJy4ZIlIY45OEfkH4msjSHJxNNCg%2Fx4gb9pTgevM4rQ12Vo4FFRxrroDrmksKA%2FuN%2FDBmYW2UszSzrVYJyJJlJOX%2BoLy3EPYn2%2BmEHO3hfAx6srE2F%2BThSsiY3by9S%2FM&X-Amz-Signature=416bde3b555123bf090d280a07c9b4782081e38fa3c3714dc96ffaf18f462a65&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566XKPVI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPt2izH9MShMOyBLXEay%2BZKQmftEAudiaD1EJh7S8eOAiA5P%2FXh3eAxKYOcftgS28ZhfPj1lCAeZ5Rh4D7vll8Heir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5gOCmoAoEg9bQviRKtwD13%2BiOzllYZZ9vUrZ773tcUMr5G0YHUOQEPu6wic1yC0q7IhHjozquYyyVVKVj2fiCNw3WgiOaw4TUG7IFH2yvXCyUeUz%2BRvPy1QoWMs%2BeB58NA6vNTV1PaLJ63zQjBotCDtzYYEOrVFVrvgA%2BlXTvT19F60d2ikxdXbgV%2FYDByV6xzbdElE%2BRtf%2BsXrj5rea96lAjYtSyhMLVgLkWmt9poJq9j82HWZNJGcqSlXKvDDkOgfBR%2FF5cl7BZ9R77CSbGBr89JiAzLZu3dOm%2BOPKFXFjswZn94%2FQ2GNjpNo2Yi1ExBzvmw0b6UgW4BpcB%2Bj862EBjQR7GymEWJ1mg3r%2BbmhTT6epH30sfq2QmvHOapB9bPy0zzz%2FU38mObNjBBDxO5bwfD%2F7yuwrnKKiMeVsizn0nq4XkgbQllLhvxv9sp%2BkCBXxrY%2BshJ%2BTGzUWPrK2ng8KKyA5NJReuGgTOvEjmk89CRSfz2vvjXX6RngemKpjftoleKTWLkKToGt1gppiTZfpzqoA0QIfirxo4uK1Q7fM2klDsFBBz8hNIRxwGLSHhnOcXGPvwY2qfFqkSLTiWIit%2BidDuX7aX9%2BN7xPZDgM79jH%2FRrfg5g2dWwoRffehG%2FZqP%2BW5UDLCTiswg6OpwQY6pgFOVYLkI4TdZKXz6MAjerauePc%2BuacNoS0myaadA0IzCrcU38XKQ4NWqI9tnXQFAF5pgG4JGvHuqPryfOtb0b%2Fm2rAW5KAlvJy4ZIlIY45OEfkH4msjSHJxNNCg%2Fx4gb9pTgevM4rQ12Vo4FFRxrroDrmksKA%2FuN%2FDBmYW2UszSzrVYJyJJlJOX%2BoLy3EPYn2%2BmEHO3hfAx6srE2F%2BThSsiY3by9S%2FM&X-Amz-Signature=071a7a0f9c3ef5cde08b39302d3cb24993d260f39d500e7edb7f3cc18e07249e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566XKPVI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPt2izH9MShMOyBLXEay%2BZKQmftEAudiaD1EJh7S8eOAiA5P%2FXh3eAxKYOcftgS28ZhfPj1lCAeZ5Rh4D7vll8Heir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5gOCmoAoEg9bQviRKtwD13%2BiOzllYZZ9vUrZ773tcUMr5G0YHUOQEPu6wic1yC0q7IhHjozquYyyVVKVj2fiCNw3WgiOaw4TUG7IFH2yvXCyUeUz%2BRvPy1QoWMs%2BeB58NA6vNTV1PaLJ63zQjBotCDtzYYEOrVFVrvgA%2BlXTvT19F60d2ikxdXbgV%2FYDByV6xzbdElE%2BRtf%2BsXrj5rea96lAjYtSyhMLVgLkWmt9poJq9j82HWZNJGcqSlXKvDDkOgfBR%2FF5cl7BZ9R77CSbGBr89JiAzLZu3dOm%2BOPKFXFjswZn94%2FQ2GNjpNo2Yi1ExBzvmw0b6UgW4BpcB%2Bj862EBjQR7GymEWJ1mg3r%2BbmhTT6epH30sfq2QmvHOapB9bPy0zzz%2FU38mObNjBBDxO5bwfD%2F7yuwrnKKiMeVsizn0nq4XkgbQllLhvxv9sp%2BkCBXxrY%2BshJ%2BTGzUWPrK2ng8KKyA5NJReuGgTOvEjmk89CRSfz2vvjXX6RngemKpjftoleKTWLkKToGt1gppiTZfpzqoA0QIfirxo4uK1Q7fM2klDsFBBz8hNIRxwGLSHhnOcXGPvwY2qfFqkSLTiWIit%2BidDuX7aX9%2BN7xPZDgM79jH%2FRrfg5g2dWwoRffehG%2FZqP%2BW5UDLCTiswg6OpwQY6pgFOVYLkI4TdZKXz6MAjerauePc%2BuacNoS0myaadA0IzCrcU38XKQ4NWqI9tnXQFAF5pgG4JGvHuqPryfOtb0b%2Fm2rAW5KAlvJy4ZIlIY45OEfkH4msjSHJxNNCg%2Fx4gb9pTgevM4rQ12Vo4FFRxrroDrmksKA%2FuN%2FDBmYW2UszSzrVYJyJJlJOX%2BoLy3EPYn2%2BmEHO3hfAx6srE2F%2BThSsiY3by9S%2FM&X-Amz-Signature=00656632c9fa526dc287750aeee674b700921740828a59833d02e3e5b2781b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722ZQFIS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICze%2BU5OLDRoQzqKKfQBKeuFNSYuICdY%2F7FIbPW%2Foc3aAiEAiAOaor7hAUSVJ%2BToDuVuYonNHz%2BjQ507aPW8nO1QGPgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGLKSESpyR6UDe8EECrcA0cGwtPxcuC2rpgDOUUrg2s1vs4jNMhBRH9cYNwFmLWnWoWx6qG7gnoHm2pys%2BMzTi4tl9dVXXFIHwfn%2FoZua3rrtkMgSU68ebtsnHMRllXjHVYaY2yTtzEgXmRWqEPoANv81SybISqIUCMl0Pl8OTuaqY37HMnqweGpQ3foj71WPOMqruMaWaXVh5mrCb9sdC4ml9a5jJ84crBbwWcDZ4nPr9cDYHiwet7D00n6k31la7CvMaUzbuadr9OWuN1Yyt%2BwY49u7Vre%2BYLFe2qwZ3bPwSNpm4jrGparSBPRWAha8%2FkT38jNEjPRMNRE9Qoa6UZuqRm1dfwjczvhDNDkte%2Bs3l7rctwmC9N82EPfTQTbd0wqnWx8KEepxi8wC%2B8mL%2Bst4gY9Wqq%2B%2F6vnqX1bgcaK9JfoMyYQ0MAeDFuBaVqSzkMueaq9Bm2JOIm9BPYiuvTt3Hg0KQK%2FGxGOcVRYjkFbPPKoL6zrM7gijIVotv4dZr37TtQfGqay%2F0GdmCkNO0mtTRy5jktSJXiuM9%2BhxQ05gMv6UeEAkH3SuTI%2BI10djGmGI%2F1NxgzL6E5R7Fq1%2BzR2wcPVg%2BgbsU46gCgoWDwvjpwN0Rnlux4NOl7ytJLlsoMaoCym378Uw0i%2FMOitgb4GOqUBN%2FlvewMtJ9FvRz%2Bxi5lVg8rnnJbASpWGaEbZafh9SMcjhKQRSuURMTdZedAtqQtfZfANxEZOIVSjplmjLzzqqlKMoSdanUPDWHY%2BR2tiyDdITTTFXjgfV7kx3f8qmv3Cuhnyac44n4C2Fmy2Ji%2F9kgK5UWkGdFUVyAVv9mz4CCRe3HBL%2Fs0N%2FrWjKuupUnYQYv4mcuGdQzPCsfe%2FxRfgVHZajRm8&X-Amz-Signature=08fec7e431b31ce7912d8b27b142b308dd00e64e230cf159b30e54a51446b0be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722ZQFIS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICze%2BU5OLDRoQzqKKfQBKeuFNSYuICdY%2F7FIbPW%2Foc3aAiEAiAOaor7hAUSVJ%2BToDuVuYonNHz%2BjQ507aPW8nO1QGPgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGLKSESpyR6UDe8EECrcA0cGwtPxcuC2rpgDOUUrg2s1vs4jNMhBRH9cYNwFmLWnWoWx6qG7gnoHm2pys%2BMzTi4tl9dVXXFIHwfn%2FoZua3rrtkMgSU68ebtsnHMRllXjHVYaY2yTtzEgXmRWqEPoANv81SybISqIUCMl0Pl8OTuaqY37HMnqweGpQ3foj71WPOMqruMaWaXVh5mrCb9sdC4ml9a5jJ84crBbwWcDZ4nPr9cDYHiwet7D00n6k31la7CvMaUzbuadr9OWuN1Yyt%2BwY49u7Vre%2BYLFe2qwZ3bPwSNpm4jrGparSBPRWAha8%2FkT38jNEjPRMNRE9Qoa6UZuqRm1dfwjczvhDNDkte%2Bs3l7rctwmC9N82EPfTQTbd0wqnWx8KEepxi8wC%2B8mL%2Bst4gY9Wqq%2B%2F6vnqX1bgcaK9JfoMyYQ0MAeDFuBaVqSzkMueaq9Bm2JOIm9BPYiuvTt3Hg0KQK%2FGxGOcVRYjkFbPPKoL6zrM7gijIVotv4dZr37TtQfGqay%2F0GdmCkNO0mtTRy5jktSJXiuM9%2BhxQ05gMv6UeEAkH3SuTI%2BI10djGmGI%2F1NxgzL6E5R7Fq1%2BzR2wcPVg%2BgbsU46gCgoWDwvjpwN0Rnlux4NOl7ytJLlsoMaoCym378Uw0i%2FMOitgb4GOqUBN%2FlvewMtJ9FvRz%2Bxi5lVg8rnnJbASpWGaEbZafh9SMcjhKQRSuURMTdZedAtqQtfZfANxEZOIVSjplmjLzzqqlKMoSdanUPDWHY%2BR2tiyDdITTTFXjgfV7kx3f8qmv3Cuhnyac44n4C2Fmy2Ji%2F9kgK5UWkGdFUVyAVv9mz4CCRe3HBL%2Fs0N%2FrWjKuupUnYQYv4mcuGdQzPCsfe%2FxRfgVHZajRm8&X-Amz-Signature=2e16b9c940895170a9e57f4583705daf8188ddcdc2bf1162b5e158fe6cbb3b93&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722ZQFIS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICze%2BU5OLDRoQzqKKfQBKeuFNSYuICdY%2F7FIbPW%2Foc3aAiEAiAOaor7hAUSVJ%2BToDuVuYonNHz%2BjQ507aPW8nO1QGPgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGLKSESpyR6UDe8EECrcA0cGwtPxcuC2rpgDOUUrg2s1vs4jNMhBRH9cYNwFmLWnWoWx6qG7gnoHm2pys%2BMzTi4tl9dVXXFIHwfn%2FoZua3rrtkMgSU68ebtsnHMRllXjHVYaY2yTtzEgXmRWqEPoANv81SybISqIUCMl0Pl8OTuaqY37HMnqweGpQ3foj71WPOMqruMaWaXVh5mrCb9sdC4ml9a5jJ84crBbwWcDZ4nPr9cDYHiwet7D00n6k31la7CvMaUzbuadr9OWuN1Yyt%2BwY49u7Vre%2BYLFe2qwZ3bPwSNpm4jrGparSBPRWAha8%2FkT38jNEjPRMNRE9Qoa6UZuqRm1dfwjczvhDNDkte%2Bs3l7rctwmC9N82EPfTQTbd0wqnWx8KEepxi8wC%2B8mL%2Bst4gY9Wqq%2B%2F6vnqX1bgcaK9JfoMyYQ0MAeDFuBaVqSzkMueaq9Bm2JOIm9BPYiuvTt3Hg0KQK%2FGxGOcVRYjkFbPPKoL6zrM7gijIVotv4dZr37TtQfGqay%2F0GdmCkNO0mtTRy5jktSJXiuM9%2BhxQ05gMv6UeEAkH3SuTI%2BI10djGmGI%2F1NxgzL6E5R7Fq1%2BzR2wcPVg%2BgbsU46gCgoWDwvjpwN0Rnlux4NOl7ytJLlsoMaoCym378Uw0i%2FMOitgb4GOqUBN%2FlvewMtJ9FvRz%2Bxi5lVg8rnnJbASpWGaEbZafh9SMcjhKQRSuURMTdZedAtqQtfZfANxEZOIVSjplmjLzzqqlKMoSdanUPDWHY%2BR2tiyDdITTTFXjgfV7kx3f8qmv3Cuhnyac44n4C2Fmy2Ji%2F9kgK5UWkGdFUVyAVv9mz4CCRe3HBL%2Fs0N%2FrWjKuupUnYQYv4mcuGdQzPCsfe%2FxRfgVHZajRm8&X-Amz-Signature=82a51fe851a280ddf171d23cab22b1b41bb46aced0e8fd4d4bf7041a60df948c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722ZQFIS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICze%2BU5OLDRoQzqKKfQBKeuFNSYuICdY%2F7FIbPW%2Foc3aAiEAiAOaor7hAUSVJ%2BToDuVuYonNHz%2BjQ507aPW8nO1QGPgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGLKSESpyR6UDe8EECrcA0cGwtPxcuC2rpgDOUUrg2s1vs4jNMhBRH9cYNwFmLWnWoWx6qG7gnoHm2pys%2BMzTi4tl9dVXXFIHwfn%2FoZua3rrtkMgSU68ebtsnHMRllXjHVYaY2yTtzEgXmRWqEPoANv81SybISqIUCMl0Pl8OTuaqY37HMnqweGpQ3foj71WPOMqruMaWaXVh5mrCb9sdC4ml9a5jJ84crBbwWcDZ4nPr9cDYHiwet7D00n6k31la7CvMaUzbuadr9OWuN1Yyt%2BwY49u7Vre%2BYLFe2qwZ3bPwSNpm4jrGparSBPRWAha8%2FkT38jNEjPRMNRE9Qoa6UZuqRm1dfwjczvhDNDkte%2Bs3l7rctwmC9N82EPfTQTbd0wqnWx8KEepxi8wC%2B8mL%2Bst4gY9Wqq%2B%2F6vnqX1bgcaK9JfoMyYQ0MAeDFuBaVqSzkMueaq9Bm2JOIm9BPYiuvTt3Hg0KQK%2FGxGOcVRYjkFbPPKoL6zrM7gijIVotv4dZr37TtQfGqay%2F0GdmCkNO0mtTRy5jktSJXiuM9%2BhxQ05gMv6UeEAkH3SuTI%2BI10djGmGI%2F1NxgzL6E5R7Fq1%2BzR2wcPVg%2BgbsU46gCgoWDwvjpwN0Rnlux4NOl7ytJLlsoMaoCym378Uw0i%2FMOitgb4GOqUBN%2FlvewMtJ9FvRz%2Bxi5lVg8rnnJbASpWGaEbZafh9SMcjhKQRSuURMTdZedAtqQtfZfANxEZOIVSjplmjLzzqqlKMoSdanUPDWHY%2BR2tiyDdITTTFXjgfV7kx3f8qmv3Cuhnyac44n4C2Fmy2Ji%2F9kgK5UWkGdFUVyAVv9mz4CCRe3HBL%2Fs0N%2FrWjKuupUnYQYv4mcuGdQzPCsfe%2FxRfgVHZajRm8&X-Amz-Signature=de4b9542eb9de7439f553cbbb47063e0854c02294fcacd0d9d6988b071d56b05&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722ZQFIS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICze%2BU5OLDRoQzqKKfQBKeuFNSYuICdY%2F7FIbPW%2Foc3aAiEAiAOaor7hAUSVJ%2BToDuVuYonNHz%2BjQ507aPW8nO1QGPgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGLKSESpyR6UDe8EECrcA0cGwtPxcuC2rpgDOUUrg2s1vs4jNMhBRH9cYNwFmLWnWoWx6qG7gnoHm2pys%2BMzTi4tl9dVXXFIHwfn%2FoZua3rrtkMgSU68ebtsnHMRllXjHVYaY2yTtzEgXmRWqEPoANv81SybISqIUCMl0Pl8OTuaqY37HMnqweGpQ3foj71WPOMqruMaWaXVh5mrCb9sdC4ml9a5jJ84crBbwWcDZ4nPr9cDYHiwet7D00n6k31la7CvMaUzbuadr9OWuN1Yyt%2BwY49u7Vre%2BYLFe2qwZ3bPwSNpm4jrGparSBPRWAha8%2FkT38jNEjPRMNRE9Qoa6UZuqRm1dfwjczvhDNDkte%2Bs3l7rctwmC9N82EPfTQTbd0wqnWx8KEepxi8wC%2B8mL%2Bst4gY9Wqq%2B%2F6vnqX1bgcaK9JfoMyYQ0MAeDFuBaVqSzkMueaq9Bm2JOIm9BPYiuvTt3Hg0KQK%2FGxGOcVRYjkFbPPKoL6zrM7gijIVotv4dZr37TtQfGqay%2F0GdmCkNO0mtTRy5jktSJXiuM9%2BhxQ05gMv6UeEAkH3SuTI%2BI10djGmGI%2F1NxgzL6E5R7Fq1%2BzR2wcPVg%2BgbsU46gCgoWDwvjpwN0Rnlux4NOl7ytJLlsoMaoCym378Uw0i%2FMOitgb4GOqUBN%2FlvewMtJ9FvRz%2Bxi5lVg8rnnJbASpWGaEbZafh9SMcjhKQRSuURMTdZedAtqQtfZfANxEZOIVSjplmjLzzqqlKMoSdanUPDWHY%2BR2tiyDdITTTFXjgfV7kx3f8qmv3Cuhnyac44n4C2Fmy2Ji%2F9kgK5UWkGdFUVyAVv9mz4CCRe3HBL%2Fs0N%2FrWjKuupUnYQYv4mcuGdQzPCsfe%2FxRfgVHZajRm8&X-Amz-Signature=fa6f35779f682f0063ee313bc70eb7d57502ec224de91bda44bf08efb6f67177&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722ZQFIS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICze%2BU5OLDRoQzqKKfQBKeuFNSYuICdY%2F7FIbPW%2Foc3aAiEAiAOaor7hAUSVJ%2BToDuVuYonNHz%2BjQ507aPW8nO1QGPgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGLKSESpyR6UDe8EECrcA0cGwtPxcuC2rpgDOUUrg2s1vs4jNMhBRH9cYNwFmLWnWoWx6qG7gnoHm2pys%2BMzTi4tl9dVXXFIHwfn%2FoZua3rrtkMgSU68ebtsnHMRllXjHVYaY2yTtzEgXmRWqEPoANv81SybISqIUCMl0Pl8OTuaqY37HMnqweGpQ3foj71WPOMqruMaWaXVh5mrCb9sdC4ml9a5jJ84crBbwWcDZ4nPr9cDYHiwet7D00n6k31la7CvMaUzbuadr9OWuN1Yyt%2BwY49u7Vre%2BYLFe2qwZ3bPwSNpm4jrGparSBPRWAha8%2FkT38jNEjPRMNRE9Qoa6UZuqRm1dfwjczvhDNDkte%2Bs3l7rctwmC9N82EPfTQTbd0wqnWx8KEepxi8wC%2B8mL%2Bst4gY9Wqq%2B%2F6vnqX1bgcaK9JfoMyYQ0MAeDFuBaVqSzkMueaq9Bm2JOIm9BPYiuvTt3Hg0KQK%2FGxGOcVRYjkFbPPKoL6zrM7gijIVotv4dZr37TtQfGqay%2F0GdmCkNO0mtTRy5jktSJXiuM9%2BhxQ05gMv6UeEAkH3SuTI%2BI10djGmGI%2F1NxgzL6E5R7Fq1%2BzR2wcPVg%2BgbsU46gCgoWDwvjpwN0Rnlux4NOl7ytJLlsoMaoCym378Uw0i%2FMOitgb4GOqUBN%2FlvewMtJ9FvRz%2Bxi5lVg8rnnJbASpWGaEbZafh9SMcjhKQRSuURMTdZedAtqQtfZfANxEZOIVSjplmjLzzqqlKMoSdanUPDWHY%2BR2tiyDdITTTFXjgfV7kx3f8qmv3Cuhnyac44n4C2Fmy2Ji%2F9kgK5UWkGdFUVyAVv9mz4CCRe3HBL%2Fs0N%2FrWjKuupUnYQYv4mcuGdQzPCsfe%2FxRfgVHZajRm8&X-Amz-Signature=1d4b13976e1407278ae7207da18867e71e64d63a860f4b952ba6fb15179edbf7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722ZQFIS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICze%2BU5OLDRoQzqKKfQBKeuFNSYuICdY%2F7FIbPW%2Foc3aAiEAiAOaor7hAUSVJ%2BToDuVuYonNHz%2BjQ507aPW8nO1QGPgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGLKSESpyR6UDe8EECrcA0cGwtPxcuC2rpgDOUUrg2s1vs4jNMhBRH9cYNwFmLWnWoWx6qG7gnoHm2pys%2BMzTi4tl9dVXXFIHwfn%2FoZua3rrtkMgSU68ebtsnHMRllXjHVYaY2yTtzEgXmRWqEPoANv81SybISqIUCMl0Pl8OTuaqY37HMnqweGpQ3foj71WPOMqruMaWaXVh5mrCb9sdC4ml9a5jJ84crBbwWcDZ4nPr9cDYHiwet7D00n6k31la7CvMaUzbuadr9OWuN1Yyt%2BwY49u7Vre%2BYLFe2qwZ3bPwSNpm4jrGparSBPRWAha8%2FkT38jNEjPRMNRE9Qoa6UZuqRm1dfwjczvhDNDkte%2Bs3l7rctwmC9N82EPfTQTbd0wqnWx8KEepxi8wC%2B8mL%2Bst4gY9Wqq%2B%2F6vnqX1bgcaK9JfoMyYQ0MAeDFuBaVqSzkMueaq9Bm2JOIm9BPYiuvTt3Hg0KQK%2FGxGOcVRYjkFbPPKoL6zrM7gijIVotv4dZr37TtQfGqay%2F0GdmCkNO0mtTRy5jktSJXiuM9%2BhxQ05gMv6UeEAkH3SuTI%2BI10djGmGI%2F1NxgzL6E5R7Fq1%2BzR2wcPVg%2BgbsU46gCgoWDwvjpwN0Rnlux4NOl7ytJLlsoMaoCym378Uw0i%2FMOitgb4GOqUBN%2FlvewMtJ9FvRz%2Bxi5lVg8rnnJbASpWGaEbZafh9SMcjhKQRSuURMTdZedAtqQtfZfANxEZOIVSjplmjLzzqqlKMoSdanUPDWHY%2BR2tiyDdITTTFXjgfV7kx3f8qmv3Cuhnyac44n4C2Fmy2Ji%2F9kgK5UWkGdFUVyAVv9mz4CCRe3HBL%2Fs0N%2FrWjKuupUnYQYv4mcuGdQzPCsfe%2FxRfgVHZajRm8&X-Amz-Signature=cec45a4d44f32ae575eb239c62b0fcc69234c084d2497f20c94be23444feedc2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

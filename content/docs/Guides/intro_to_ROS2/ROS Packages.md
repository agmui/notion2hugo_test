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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCAS7C7L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFrFr%2BILv%2BeywMjMkn%2BgBMzj1BaBDdMO3GrxZOjHTpjAiBfGbCOcVIJ4fSBUvNZHMZubY%2BB7nfQuoFSYN998r8V4Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMT4UQm%2BtkqyghBkWuKtwDoMbh902fK%2FBFQvPlGMlXbT0ZLizUGK%2Bniw8ZDxfYm2Dsh4XhbUYu50RSDqFvMkAOeWz%2BIo6FHcbRgqt%2FQPYn1G9hueuBD2ID1erO6dOLMN2g%2FMsKOzShQ02IEmGD2ydOMBw2hQikM7JLNc71Hj%2FUmkDziA3eaNjQre61kcDFzDI6SdrUlptAdQvD8mcOudph2eH8NeW9CQIVDtPkGWr2yJFmjoR6NgZAqK9SCMsrOdMpq2E5xnaQR4%2BX77E2FX%2BrUEDs4GH2C%2Fe00sdjDLo81y6rf5BgjNoTlfCJk75BxNB6iri6b%2BionyKtcgA0utJ7102sQofslkIbC7c%2BZs8aVmYGqjJb6UXc2D0znm0ECsQCRYroyhPSxRrWZlVctRCBbLkPPuBV96tEnGDnUzrxch%2BPO6lx3PmIijdUUqxM%2B1qF81yZ%2B8C4ipKolUcgbHiAp4r6WI6j4otVj40W7eYVkPrThCqw1lxG8DbYEaz%2BA%2BwdtQydbZiRdcLFMRkc8XnsE1dpNuLHT2fTKOJ2nWDbTh5u8CS5DAwurQxoV%2FgLTbIMjtkl%2BwUy8UYHRQZyYZSypzZt9u6mylnZoj42UrO5z1YkdO8DlR%2FKxp4uGRH7vkitl%2FUNWNBOj8ZympEwkoy4wAY6pgHt3l7qL9c4FxcUMHMP5ZCBc7A8AEgfg4tWxcDbbW8ntHA4RsDf%2BCwO7jORGLMpakDvpjrCm9GNYQFU5HqLEe0xqprMb%2FfLFBTlTk9XdhPK9dvkYgNcp346dy8Bph%2F%2F%2BmnHcS3aMbYtT8GLKMOaltgcNBod2gRwTRS1yFapgCN9oGPe3eJb9ALQG7t6f7AAKFrKuDxGT4BOgGcQSjUE7j8tSFc4ENgV&X-Amz-Signature=3c219a7da4ae638bb4d50de7c64637c3f9edbd2a80ba3ca98ea0ef94d4a00936&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCAS7C7L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFrFr%2BILv%2BeywMjMkn%2BgBMzj1BaBDdMO3GrxZOjHTpjAiBfGbCOcVIJ4fSBUvNZHMZubY%2BB7nfQuoFSYN998r8V4Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMT4UQm%2BtkqyghBkWuKtwDoMbh902fK%2FBFQvPlGMlXbT0ZLizUGK%2Bniw8ZDxfYm2Dsh4XhbUYu50RSDqFvMkAOeWz%2BIo6FHcbRgqt%2FQPYn1G9hueuBD2ID1erO6dOLMN2g%2FMsKOzShQ02IEmGD2ydOMBw2hQikM7JLNc71Hj%2FUmkDziA3eaNjQre61kcDFzDI6SdrUlptAdQvD8mcOudph2eH8NeW9CQIVDtPkGWr2yJFmjoR6NgZAqK9SCMsrOdMpq2E5xnaQR4%2BX77E2FX%2BrUEDs4GH2C%2Fe00sdjDLo81y6rf5BgjNoTlfCJk75BxNB6iri6b%2BionyKtcgA0utJ7102sQofslkIbC7c%2BZs8aVmYGqjJb6UXc2D0znm0ECsQCRYroyhPSxRrWZlVctRCBbLkPPuBV96tEnGDnUzrxch%2BPO6lx3PmIijdUUqxM%2B1qF81yZ%2B8C4ipKolUcgbHiAp4r6WI6j4otVj40W7eYVkPrThCqw1lxG8DbYEaz%2BA%2BwdtQydbZiRdcLFMRkc8XnsE1dpNuLHT2fTKOJ2nWDbTh5u8CS5DAwurQxoV%2FgLTbIMjtkl%2BwUy8UYHRQZyYZSypzZt9u6mylnZoj42UrO5z1YkdO8DlR%2FKxp4uGRH7vkitl%2FUNWNBOj8ZympEwkoy4wAY6pgHt3l7qL9c4FxcUMHMP5ZCBc7A8AEgfg4tWxcDbbW8ntHA4RsDf%2BCwO7jORGLMpakDvpjrCm9GNYQFU5HqLEe0xqprMb%2FfLFBTlTk9XdhPK9dvkYgNcp346dy8Bph%2F%2F%2BmnHcS3aMbYtT8GLKMOaltgcNBod2gRwTRS1yFapgCN9oGPe3eJb9ALQG7t6f7AAKFrKuDxGT4BOgGcQSjUE7j8tSFc4ENgV&X-Amz-Signature=f1962aed75d84465bc8a57991779cfc208e68bc66732cb9032b1f5f7eebad5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCAS7C7L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFrFr%2BILv%2BeywMjMkn%2BgBMzj1BaBDdMO3GrxZOjHTpjAiBfGbCOcVIJ4fSBUvNZHMZubY%2BB7nfQuoFSYN998r8V4Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMT4UQm%2BtkqyghBkWuKtwDoMbh902fK%2FBFQvPlGMlXbT0ZLizUGK%2Bniw8ZDxfYm2Dsh4XhbUYu50RSDqFvMkAOeWz%2BIo6FHcbRgqt%2FQPYn1G9hueuBD2ID1erO6dOLMN2g%2FMsKOzShQ02IEmGD2ydOMBw2hQikM7JLNc71Hj%2FUmkDziA3eaNjQre61kcDFzDI6SdrUlptAdQvD8mcOudph2eH8NeW9CQIVDtPkGWr2yJFmjoR6NgZAqK9SCMsrOdMpq2E5xnaQR4%2BX77E2FX%2BrUEDs4GH2C%2Fe00sdjDLo81y6rf5BgjNoTlfCJk75BxNB6iri6b%2BionyKtcgA0utJ7102sQofslkIbC7c%2BZs8aVmYGqjJb6UXc2D0znm0ECsQCRYroyhPSxRrWZlVctRCBbLkPPuBV96tEnGDnUzrxch%2BPO6lx3PmIijdUUqxM%2B1qF81yZ%2B8C4ipKolUcgbHiAp4r6WI6j4otVj40W7eYVkPrThCqw1lxG8DbYEaz%2BA%2BwdtQydbZiRdcLFMRkc8XnsE1dpNuLHT2fTKOJ2nWDbTh5u8CS5DAwurQxoV%2FgLTbIMjtkl%2BwUy8UYHRQZyYZSypzZt9u6mylnZoj42UrO5z1YkdO8DlR%2FKxp4uGRH7vkitl%2FUNWNBOj8ZympEwkoy4wAY6pgHt3l7qL9c4FxcUMHMP5ZCBc7A8AEgfg4tWxcDbbW8ntHA4RsDf%2BCwO7jORGLMpakDvpjrCm9GNYQFU5HqLEe0xqprMb%2FfLFBTlTk9XdhPK9dvkYgNcp346dy8Bph%2F%2F%2BmnHcS3aMbYtT8GLKMOaltgcNBod2gRwTRS1yFapgCN9oGPe3eJb9ALQG7t6f7AAKFrKuDxGT4BOgGcQSjUE7j8tSFc4ENgV&X-Amz-Signature=c5e9189580d8a6bf4a59cef6cf77808472a0a9b870110db89f260d8f76b42c33&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCAS7C7L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFrFr%2BILv%2BeywMjMkn%2BgBMzj1BaBDdMO3GrxZOjHTpjAiBfGbCOcVIJ4fSBUvNZHMZubY%2BB7nfQuoFSYN998r8V4Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMT4UQm%2BtkqyghBkWuKtwDoMbh902fK%2FBFQvPlGMlXbT0ZLizUGK%2Bniw8ZDxfYm2Dsh4XhbUYu50RSDqFvMkAOeWz%2BIo6FHcbRgqt%2FQPYn1G9hueuBD2ID1erO6dOLMN2g%2FMsKOzShQ02IEmGD2ydOMBw2hQikM7JLNc71Hj%2FUmkDziA3eaNjQre61kcDFzDI6SdrUlptAdQvD8mcOudph2eH8NeW9CQIVDtPkGWr2yJFmjoR6NgZAqK9SCMsrOdMpq2E5xnaQR4%2BX77E2FX%2BrUEDs4GH2C%2Fe00sdjDLo81y6rf5BgjNoTlfCJk75BxNB6iri6b%2BionyKtcgA0utJ7102sQofslkIbC7c%2BZs8aVmYGqjJb6UXc2D0znm0ECsQCRYroyhPSxRrWZlVctRCBbLkPPuBV96tEnGDnUzrxch%2BPO6lx3PmIijdUUqxM%2B1qF81yZ%2B8C4ipKolUcgbHiAp4r6WI6j4otVj40W7eYVkPrThCqw1lxG8DbYEaz%2BA%2BwdtQydbZiRdcLFMRkc8XnsE1dpNuLHT2fTKOJ2nWDbTh5u8CS5DAwurQxoV%2FgLTbIMjtkl%2BwUy8UYHRQZyYZSypzZt9u6mylnZoj42UrO5z1YkdO8DlR%2FKxp4uGRH7vkitl%2FUNWNBOj8ZympEwkoy4wAY6pgHt3l7qL9c4FxcUMHMP5ZCBc7A8AEgfg4tWxcDbbW8ntHA4RsDf%2BCwO7jORGLMpakDvpjrCm9GNYQFU5HqLEe0xqprMb%2FfLFBTlTk9XdhPK9dvkYgNcp346dy8Bph%2F%2F%2BmnHcS3aMbYtT8GLKMOaltgcNBod2gRwTRS1yFapgCN9oGPe3eJb9ALQG7t6f7AAKFrKuDxGT4BOgGcQSjUE7j8tSFc4ENgV&X-Amz-Signature=baa474d8437b96b8d0d55ee54cc52a4fdcc0c190080cfc40602702ecdff4b456&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCAS7C7L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFrFr%2BILv%2BeywMjMkn%2BgBMzj1BaBDdMO3GrxZOjHTpjAiBfGbCOcVIJ4fSBUvNZHMZubY%2BB7nfQuoFSYN998r8V4Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMT4UQm%2BtkqyghBkWuKtwDoMbh902fK%2FBFQvPlGMlXbT0ZLizUGK%2Bniw8ZDxfYm2Dsh4XhbUYu50RSDqFvMkAOeWz%2BIo6FHcbRgqt%2FQPYn1G9hueuBD2ID1erO6dOLMN2g%2FMsKOzShQ02IEmGD2ydOMBw2hQikM7JLNc71Hj%2FUmkDziA3eaNjQre61kcDFzDI6SdrUlptAdQvD8mcOudph2eH8NeW9CQIVDtPkGWr2yJFmjoR6NgZAqK9SCMsrOdMpq2E5xnaQR4%2BX77E2FX%2BrUEDs4GH2C%2Fe00sdjDLo81y6rf5BgjNoTlfCJk75BxNB6iri6b%2BionyKtcgA0utJ7102sQofslkIbC7c%2BZs8aVmYGqjJb6UXc2D0znm0ECsQCRYroyhPSxRrWZlVctRCBbLkPPuBV96tEnGDnUzrxch%2BPO6lx3PmIijdUUqxM%2B1qF81yZ%2B8C4ipKolUcgbHiAp4r6WI6j4otVj40W7eYVkPrThCqw1lxG8DbYEaz%2BA%2BwdtQydbZiRdcLFMRkc8XnsE1dpNuLHT2fTKOJ2nWDbTh5u8CS5DAwurQxoV%2FgLTbIMjtkl%2BwUy8UYHRQZyYZSypzZt9u6mylnZoj42UrO5z1YkdO8DlR%2FKxp4uGRH7vkitl%2FUNWNBOj8ZympEwkoy4wAY6pgHt3l7qL9c4FxcUMHMP5ZCBc7A8AEgfg4tWxcDbbW8ntHA4RsDf%2BCwO7jORGLMpakDvpjrCm9GNYQFU5HqLEe0xqprMb%2FfLFBTlTk9XdhPK9dvkYgNcp346dy8Bph%2F%2F%2BmnHcS3aMbYtT8GLKMOaltgcNBod2gRwTRS1yFapgCN9oGPe3eJb9ALQG7t6f7AAKFrKuDxGT4BOgGcQSjUE7j8tSFc4ENgV&X-Amz-Signature=861c0976dba77d81e18d5dcae9a7ae41cff3eda8bc9f42f416dcf28fbca332a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCAS7C7L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFrFr%2BILv%2BeywMjMkn%2BgBMzj1BaBDdMO3GrxZOjHTpjAiBfGbCOcVIJ4fSBUvNZHMZubY%2BB7nfQuoFSYN998r8V4Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMT4UQm%2BtkqyghBkWuKtwDoMbh902fK%2FBFQvPlGMlXbT0ZLizUGK%2Bniw8ZDxfYm2Dsh4XhbUYu50RSDqFvMkAOeWz%2BIo6FHcbRgqt%2FQPYn1G9hueuBD2ID1erO6dOLMN2g%2FMsKOzShQ02IEmGD2ydOMBw2hQikM7JLNc71Hj%2FUmkDziA3eaNjQre61kcDFzDI6SdrUlptAdQvD8mcOudph2eH8NeW9CQIVDtPkGWr2yJFmjoR6NgZAqK9SCMsrOdMpq2E5xnaQR4%2BX77E2FX%2BrUEDs4GH2C%2Fe00sdjDLo81y6rf5BgjNoTlfCJk75BxNB6iri6b%2BionyKtcgA0utJ7102sQofslkIbC7c%2BZs8aVmYGqjJb6UXc2D0znm0ECsQCRYroyhPSxRrWZlVctRCBbLkPPuBV96tEnGDnUzrxch%2BPO6lx3PmIijdUUqxM%2B1qF81yZ%2B8C4ipKolUcgbHiAp4r6WI6j4otVj40W7eYVkPrThCqw1lxG8DbYEaz%2BA%2BwdtQydbZiRdcLFMRkc8XnsE1dpNuLHT2fTKOJ2nWDbTh5u8CS5DAwurQxoV%2FgLTbIMjtkl%2BwUy8UYHRQZyYZSypzZt9u6mylnZoj42UrO5z1YkdO8DlR%2FKxp4uGRH7vkitl%2FUNWNBOj8ZympEwkoy4wAY6pgHt3l7qL9c4FxcUMHMP5ZCBc7A8AEgfg4tWxcDbbW8ntHA4RsDf%2BCwO7jORGLMpakDvpjrCm9GNYQFU5HqLEe0xqprMb%2FfLFBTlTk9XdhPK9dvkYgNcp346dy8Bph%2F%2F%2BmnHcS3aMbYtT8GLKMOaltgcNBod2gRwTRS1yFapgCN9oGPe3eJb9ALQG7t6f7AAKFrKuDxGT4BOgGcQSjUE7j8tSFc4ENgV&X-Amz-Signature=ff5b090ad7e42bb1a7e081298041fda00110dfdf17ede92dc63e7c6622067f97&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCAS7C7L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFrFr%2BILv%2BeywMjMkn%2BgBMzj1BaBDdMO3GrxZOjHTpjAiBfGbCOcVIJ4fSBUvNZHMZubY%2BB7nfQuoFSYN998r8V4Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMT4UQm%2BtkqyghBkWuKtwDoMbh902fK%2FBFQvPlGMlXbT0ZLizUGK%2Bniw8ZDxfYm2Dsh4XhbUYu50RSDqFvMkAOeWz%2BIo6FHcbRgqt%2FQPYn1G9hueuBD2ID1erO6dOLMN2g%2FMsKOzShQ02IEmGD2ydOMBw2hQikM7JLNc71Hj%2FUmkDziA3eaNjQre61kcDFzDI6SdrUlptAdQvD8mcOudph2eH8NeW9CQIVDtPkGWr2yJFmjoR6NgZAqK9SCMsrOdMpq2E5xnaQR4%2BX77E2FX%2BrUEDs4GH2C%2Fe00sdjDLo81y6rf5BgjNoTlfCJk75BxNB6iri6b%2BionyKtcgA0utJ7102sQofslkIbC7c%2BZs8aVmYGqjJb6UXc2D0znm0ECsQCRYroyhPSxRrWZlVctRCBbLkPPuBV96tEnGDnUzrxch%2BPO6lx3PmIijdUUqxM%2B1qF81yZ%2B8C4ipKolUcgbHiAp4r6WI6j4otVj40W7eYVkPrThCqw1lxG8DbYEaz%2BA%2BwdtQydbZiRdcLFMRkc8XnsE1dpNuLHT2fTKOJ2nWDbTh5u8CS5DAwurQxoV%2FgLTbIMjtkl%2BwUy8UYHRQZyYZSypzZt9u6mylnZoj42UrO5z1YkdO8DlR%2FKxp4uGRH7vkitl%2FUNWNBOj8ZympEwkoy4wAY6pgHt3l7qL9c4FxcUMHMP5ZCBc7A8AEgfg4tWxcDbbW8ntHA4RsDf%2BCwO7jORGLMpakDvpjrCm9GNYQFU5HqLEe0xqprMb%2FfLFBTlTk9XdhPK9dvkYgNcp346dy8Bph%2F%2F%2BmnHcS3aMbYtT8GLKMOaltgcNBod2gRwTRS1yFapgCN9oGPe3eJb9ALQG7t6f7AAKFrKuDxGT4BOgGcQSjUE7j8tSFc4ENgV&X-Amz-Signature=31c3aca724e760081f5513ac9b214039fb0d9c008e20c9c54fd1daf459174d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

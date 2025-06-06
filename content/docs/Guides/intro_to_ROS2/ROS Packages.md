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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNIAH6H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPXSCsRI19KGNOpsXmEaofe0fyPkETH7zIxDQQcqIwyAIhAPylNGahpZQ0YuWvIPHjXh1Zkc%2FUK1ICf2P2XmSMJoemKv8DCGUQABoMNjM3NDIzMTgzODA1Igx5zgKgk0jj9FHk9n0q3APqENIxPHfTGaQCxXTEP%2BWf%2Fvt%2BjAbW5Jyg%2FQ7TcJuterZpNV9maaUK37p01Nnlbbd1aW98zuvL4QcNKjTCszP5QntMmOaA7WaWrlxTjfEO7lh1oKlygxYZgCcBDw4RTEGyw1lk%2Fo%2B%2BI9XZS7%2BfjXhYq%2BWrQ4DaDPAooigrahoOLBUiWb37bps2U78BmeoZ%2Bcae9FbA6BrOmaReVGbTKSW9IZt0ti6EfN5nVNLL2rdArgXp3x9EzNdZWx6joiiWVDcSpSVA76AkxP1P%2BPg%2BeLAyDMcvd6Olfo04X5SdFgk5E14U8BZZLVKThgJ23DNwHFcQzmh9DmxOct9QD%2B3bIJFCRk0A9rdxoCDq0Piu%2F7HvDXZngjzU18dp%2B0Tld1dkC3TruRDnFFRpWj6MZqDpRaByTCkLEOgIfr41hZ6k2g7LD6wdawSLT6nFoembWIBvNVuRpiUmhFvmTVCFVIxrMLSpoB7v5ZnOmBDFMbIYGiuLe5XFzkjpqin5P4CiFMtyfrjGFAkAG0YZ9HalLXHdNGdYWyyRmOD7gUWEsFXlzngVE6ArXoJB2%2B0k1e8V4jTeUusNbg7Hq3nJ9xc9Nx0H1wUszEXID4jbqmxxoby52qlYgbaQO5fWdx3LzOo1BjDbkY3CBjqkARsx%2FGy%2BXDUE%2B5si%2Fu5s20IutHmR4hJ4AWXvtjB5FhEV7PIumALrLadbbyBhiAGjTOPZHTAgT1ChCsOyPvrrVodTHV2hd1IMLwIgG0nDGfh2uhkqoGhtbNBO3xsLldS545vg4mFvFTGEBeJfYQKUJohgKTAuh3s%2B2uyc61yGGNRYFJFsQ%2B7gW27feMXMmTbs1uWGEyshLf%2BtFib%2F%2BZv2nl6nrMhu&X-Amz-Signature=3a877c0c76277322a7aa9a13c96c1633967125d4f743107eeee471bcd0e27bba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNIAH6H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPXSCsRI19KGNOpsXmEaofe0fyPkETH7zIxDQQcqIwyAIhAPylNGahpZQ0YuWvIPHjXh1Zkc%2FUK1ICf2P2XmSMJoemKv8DCGUQABoMNjM3NDIzMTgzODA1Igx5zgKgk0jj9FHk9n0q3APqENIxPHfTGaQCxXTEP%2BWf%2Fvt%2BjAbW5Jyg%2FQ7TcJuterZpNV9maaUK37p01Nnlbbd1aW98zuvL4QcNKjTCszP5QntMmOaA7WaWrlxTjfEO7lh1oKlygxYZgCcBDw4RTEGyw1lk%2Fo%2B%2BI9XZS7%2BfjXhYq%2BWrQ4DaDPAooigrahoOLBUiWb37bps2U78BmeoZ%2Bcae9FbA6BrOmaReVGbTKSW9IZt0ti6EfN5nVNLL2rdArgXp3x9EzNdZWx6joiiWVDcSpSVA76AkxP1P%2BPg%2BeLAyDMcvd6Olfo04X5SdFgk5E14U8BZZLVKThgJ23DNwHFcQzmh9DmxOct9QD%2B3bIJFCRk0A9rdxoCDq0Piu%2F7HvDXZngjzU18dp%2B0Tld1dkC3TruRDnFFRpWj6MZqDpRaByTCkLEOgIfr41hZ6k2g7LD6wdawSLT6nFoembWIBvNVuRpiUmhFvmTVCFVIxrMLSpoB7v5ZnOmBDFMbIYGiuLe5XFzkjpqin5P4CiFMtyfrjGFAkAG0YZ9HalLXHdNGdYWyyRmOD7gUWEsFXlzngVE6ArXoJB2%2B0k1e8V4jTeUusNbg7Hq3nJ9xc9Nx0H1wUszEXID4jbqmxxoby52qlYgbaQO5fWdx3LzOo1BjDbkY3CBjqkARsx%2FGy%2BXDUE%2B5si%2Fu5s20IutHmR4hJ4AWXvtjB5FhEV7PIumALrLadbbyBhiAGjTOPZHTAgT1ChCsOyPvrrVodTHV2hd1IMLwIgG0nDGfh2uhkqoGhtbNBO3xsLldS545vg4mFvFTGEBeJfYQKUJohgKTAuh3s%2B2uyc61yGGNRYFJFsQ%2B7gW27feMXMmTbs1uWGEyshLf%2BtFib%2F%2BZv2nl6nrMhu&X-Amz-Signature=319a89e729845abe70420c93dd588703a0fe0d37b0c00e19b1c3465b99dd0399&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNIAH6H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPXSCsRI19KGNOpsXmEaofe0fyPkETH7zIxDQQcqIwyAIhAPylNGahpZQ0YuWvIPHjXh1Zkc%2FUK1ICf2P2XmSMJoemKv8DCGUQABoMNjM3NDIzMTgzODA1Igx5zgKgk0jj9FHk9n0q3APqENIxPHfTGaQCxXTEP%2BWf%2Fvt%2BjAbW5Jyg%2FQ7TcJuterZpNV9maaUK37p01Nnlbbd1aW98zuvL4QcNKjTCszP5QntMmOaA7WaWrlxTjfEO7lh1oKlygxYZgCcBDw4RTEGyw1lk%2Fo%2B%2BI9XZS7%2BfjXhYq%2BWrQ4DaDPAooigrahoOLBUiWb37bps2U78BmeoZ%2Bcae9FbA6BrOmaReVGbTKSW9IZt0ti6EfN5nVNLL2rdArgXp3x9EzNdZWx6joiiWVDcSpSVA76AkxP1P%2BPg%2BeLAyDMcvd6Olfo04X5SdFgk5E14U8BZZLVKThgJ23DNwHFcQzmh9DmxOct9QD%2B3bIJFCRk0A9rdxoCDq0Piu%2F7HvDXZngjzU18dp%2B0Tld1dkC3TruRDnFFRpWj6MZqDpRaByTCkLEOgIfr41hZ6k2g7LD6wdawSLT6nFoembWIBvNVuRpiUmhFvmTVCFVIxrMLSpoB7v5ZnOmBDFMbIYGiuLe5XFzkjpqin5P4CiFMtyfrjGFAkAG0YZ9HalLXHdNGdYWyyRmOD7gUWEsFXlzngVE6ArXoJB2%2B0k1e8V4jTeUusNbg7Hq3nJ9xc9Nx0H1wUszEXID4jbqmxxoby52qlYgbaQO5fWdx3LzOo1BjDbkY3CBjqkARsx%2FGy%2BXDUE%2B5si%2Fu5s20IutHmR4hJ4AWXvtjB5FhEV7PIumALrLadbbyBhiAGjTOPZHTAgT1ChCsOyPvrrVodTHV2hd1IMLwIgG0nDGfh2uhkqoGhtbNBO3xsLldS545vg4mFvFTGEBeJfYQKUJohgKTAuh3s%2B2uyc61yGGNRYFJFsQ%2B7gW27feMXMmTbs1uWGEyshLf%2BtFib%2F%2BZv2nl6nrMhu&X-Amz-Signature=87aa25e6632a2c00db8570748898f88821ce011237a5520ec12f5dd95192b73a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNIAH6H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPXSCsRI19KGNOpsXmEaofe0fyPkETH7zIxDQQcqIwyAIhAPylNGahpZQ0YuWvIPHjXh1Zkc%2FUK1ICf2P2XmSMJoemKv8DCGUQABoMNjM3NDIzMTgzODA1Igx5zgKgk0jj9FHk9n0q3APqENIxPHfTGaQCxXTEP%2BWf%2Fvt%2BjAbW5Jyg%2FQ7TcJuterZpNV9maaUK37p01Nnlbbd1aW98zuvL4QcNKjTCszP5QntMmOaA7WaWrlxTjfEO7lh1oKlygxYZgCcBDw4RTEGyw1lk%2Fo%2B%2BI9XZS7%2BfjXhYq%2BWrQ4DaDPAooigrahoOLBUiWb37bps2U78BmeoZ%2Bcae9FbA6BrOmaReVGbTKSW9IZt0ti6EfN5nVNLL2rdArgXp3x9EzNdZWx6joiiWVDcSpSVA76AkxP1P%2BPg%2BeLAyDMcvd6Olfo04X5SdFgk5E14U8BZZLVKThgJ23DNwHFcQzmh9DmxOct9QD%2B3bIJFCRk0A9rdxoCDq0Piu%2F7HvDXZngjzU18dp%2B0Tld1dkC3TruRDnFFRpWj6MZqDpRaByTCkLEOgIfr41hZ6k2g7LD6wdawSLT6nFoembWIBvNVuRpiUmhFvmTVCFVIxrMLSpoB7v5ZnOmBDFMbIYGiuLe5XFzkjpqin5P4CiFMtyfrjGFAkAG0YZ9HalLXHdNGdYWyyRmOD7gUWEsFXlzngVE6ArXoJB2%2B0k1e8V4jTeUusNbg7Hq3nJ9xc9Nx0H1wUszEXID4jbqmxxoby52qlYgbaQO5fWdx3LzOo1BjDbkY3CBjqkARsx%2FGy%2BXDUE%2B5si%2Fu5s20IutHmR4hJ4AWXvtjB5FhEV7PIumALrLadbbyBhiAGjTOPZHTAgT1ChCsOyPvrrVodTHV2hd1IMLwIgG0nDGfh2uhkqoGhtbNBO3xsLldS545vg4mFvFTGEBeJfYQKUJohgKTAuh3s%2B2uyc61yGGNRYFJFsQ%2B7gW27feMXMmTbs1uWGEyshLf%2BtFib%2F%2BZv2nl6nrMhu&X-Amz-Signature=4a1352608a267e3fb621b7737ebfbc5646819f9c8cbf0fe177c8554491857102&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNIAH6H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPXSCsRI19KGNOpsXmEaofe0fyPkETH7zIxDQQcqIwyAIhAPylNGahpZQ0YuWvIPHjXh1Zkc%2FUK1ICf2P2XmSMJoemKv8DCGUQABoMNjM3NDIzMTgzODA1Igx5zgKgk0jj9FHk9n0q3APqENIxPHfTGaQCxXTEP%2BWf%2Fvt%2BjAbW5Jyg%2FQ7TcJuterZpNV9maaUK37p01Nnlbbd1aW98zuvL4QcNKjTCszP5QntMmOaA7WaWrlxTjfEO7lh1oKlygxYZgCcBDw4RTEGyw1lk%2Fo%2B%2BI9XZS7%2BfjXhYq%2BWrQ4DaDPAooigrahoOLBUiWb37bps2U78BmeoZ%2Bcae9FbA6BrOmaReVGbTKSW9IZt0ti6EfN5nVNLL2rdArgXp3x9EzNdZWx6joiiWVDcSpSVA76AkxP1P%2BPg%2BeLAyDMcvd6Olfo04X5SdFgk5E14U8BZZLVKThgJ23DNwHFcQzmh9DmxOct9QD%2B3bIJFCRk0A9rdxoCDq0Piu%2F7HvDXZngjzU18dp%2B0Tld1dkC3TruRDnFFRpWj6MZqDpRaByTCkLEOgIfr41hZ6k2g7LD6wdawSLT6nFoembWIBvNVuRpiUmhFvmTVCFVIxrMLSpoB7v5ZnOmBDFMbIYGiuLe5XFzkjpqin5P4CiFMtyfrjGFAkAG0YZ9HalLXHdNGdYWyyRmOD7gUWEsFXlzngVE6ArXoJB2%2B0k1e8V4jTeUusNbg7Hq3nJ9xc9Nx0H1wUszEXID4jbqmxxoby52qlYgbaQO5fWdx3LzOo1BjDbkY3CBjqkARsx%2FGy%2BXDUE%2B5si%2Fu5s20IutHmR4hJ4AWXvtjB5FhEV7PIumALrLadbbyBhiAGjTOPZHTAgT1ChCsOyPvrrVodTHV2hd1IMLwIgG0nDGfh2uhkqoGhtbNBO3xsLldS545vg4mFvFTGEBeJfYQKUJohgKTAuh3s%2B2uyc61yGGNRYFJFsQ%2B7gW27feMXMmTbs1uWGEyshLf%2BtFib%2F%2BZv2nl6nrMhu&X-Amz-Signature=d59ef40f4d5a4a8ef549899ff02965c47ad1a56bc0b6d1b6ee3e2530bca542fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNIAH6H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPXSCsRI19KGNOpsXmEaofe0fyPkETH7zIxDQQcqIwyAIhAPylNGahpZQ0YuWvIPHjXh1Zkc%2FUK1ICf2P2XmSMJoemKv8DCGUQABoMNjM3NDIzMTgzODA1Igx5zgKgk0jj9FHk9n0q3APqENIxPHfTGaQCxXTEP%2BWf%2Fvt%2BjAbW5Jyg%2FQ7TcJuterZpNV9maaUK37p01Nnlbbd1aW98zuvL4QcNKjTCszP5QntMmOaA7WaWrlxTjfEO7lh1oKlygxYZgCcBDw4RTEGyw1lk%2Fo%2B%2BI9XZS7%2BfjXhYq%2BWrQ4DaDPAooigrahoOLBUiWb37bps2U78BmeoZ%2Bcae9FbA6BrOmaReVGbTKSW9IZt0ti6EfN5nVNLL2rdArgXp3x9EzNdZWx6joiiWVDcSpSVA76AkxP1P%2BPg%2BeLAyDMcvd6Olfo04X5SdFgk5E14U8BZZLVKThgJ23DNwHFcQzmh9DmxOct9QD%2B3bIJFCRk0A9rdxoCDq0Piu%2F7HvDXZngjzU18dp%2B0Tld1dkC3TruRDnFFRpWj6MZqDpRaByTCkLEOgIfr41hZ6k2g7LD6wdawSLT6nFoembWIBvNVuRpiUmhFvmTVCFVIxrMLSpoB7v5ZnOmBDFMbIYGiuLe5XFzkjpqin5P4CiFMtyfrjGFAkAG0YZ9HalLXHdNGdYWyyRmOD7gUWEsFXlzngVE6ArXoJB2%2B0k1e8V4jTeUusNbg7Hq3nJ9xc9Nx0H1wUszEXID4jbqmxxoby52qlYgbaQO5fWdx3LzOo1BjDbkY3CBjqkARsx%2FGy%2BXDUE%2B5si%2Fu5s20IutHmR4hJ4AWXvtjB5FhEV7PIumALrLadbbyBhiAGjTOPZHTAgT1ChCsOyPvrrVodTHV2hd1IMLwIgG0nDGfh2uhkqoGhtbNBO3xsLldS545vg4mFvFTGEBeJfYQKUJohgKTAuh3s%2B2uyc61yGGNRYFJFsQ%2B7gW27feMXMmTbs1uWGEyshLf%2BtFib%2F%2BZv2nl6nrMhu&X-Amz-Signature=f937e2b00a2b20f8f322e2ca5143dc38d8f133f7d64f92f044fa8a037b5f9ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNIAH6H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPXSCsRI19KGNOpsXmEaofe0fyPkETH7zIxDQQcqIwyAIhAPylNGahpZQ0YuWvIPHjXh1Zkc%2FUK1ICf2P2XmSMJoemKv8DCGUQABoMNjM3NDIzMTgzODA1Igx5zgKgk0jj9FHk9n0q3APqENIxPHfTGaQCxXTEP%2BWf%2Fvt%2BjAbW5Jyg%2FQ7TcJuterZpNV9maaUK37p01Nnlbbd1aW98zuvL4QcNKjTCszP5QntMmOaA7WaWrlxTjfEO7lh1oKlygxYZgCcBDw4RTEGyw1lk%2Fo%2B%2BI9XZS7%2BfjXhYq%2BWrQ4DaDPAooigrahoOLBUiWb37bps2U78BmeoZ%2Bcae9FbA6BrOmaReVGbTKSW9IZt0ti6EfN5nVNLL2rdArgXp3x9EzNdZWx6joiiWVDcSpSVA76AkxP1P%2BPg%2BeLAyDMcvd6Olfo04X5SdFgk5E14U8BZZLVKThgJ23DNwHFcQzmh9DmxOct9QD%2B3bIJFCRk0A9rdxoCDq0Piu%2F7HvDXZngjzU18dp%2B0Tld1dkC3TruRDnFFRpWj6MZqDpRaByTCkLEOgIfr41hZ6k2g7LD6wdawSLT6nFoembWIBvNVuRpiUmhFvmTVCFVIxrMLSpoB7v5ZnOmBDFMbIYGiuLe5XFzkjpqin5P4CiFMtyfrjGFAkAG0YZ9HalLXHdNGdYWyyRmOD7gUWEsFXlzngVE6ArXoJB2%2B0k1e8V4jTeUusNbg7Hq3nJ9xc9Nx0H1wUszEXID4jbqmxxoby52qlYgbaQO5fWdx3LzOo1BjDbkY3CBjqkARsx%2FGy%2BXDUE%2B5si%2Fu5s20IutHmR4hJ4AWXvtjB5FhEV7PIumALrLadbbyBhiAGjTOPZHTAgT1ChCsOyPvrrVodTHV2hd1IMLwIgG0nDGfh2uhkqoGhtbNBO3xsLldS545vg4mFvFTGEBeJfYQKUJohgKTAuh3s%2B2uyc61yGGNRYFJFsQ%2B7gW27feMXMmTbs1uWGEyshLf%2BtFib%2F%2BZv2nl6nrMhu&X-Amz-Signature=00c3d4dbc84518ea237a4000dadd294c19bc098f996339d1cf4b1afc0c983d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

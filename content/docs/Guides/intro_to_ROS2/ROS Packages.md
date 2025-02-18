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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IT3J5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCMZTrO6f%2Bisgfb25vIS5p2m2QtOXDOByHzw5idW8rxmwIhAM42JQPkKJ13w4PZCKRQmk%2Bu4LoITWWLdQ0oAOlwuBQGKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZQy3QwjDyn3XNfMq3AMxNNXLDiSfSRhVCF9IhvIUhu60JCvZuloyNGEMwBs85bdRt1odNqCRAyk8LKkp8K9Hu%2Fs1BwZDx5RMyzeXK%2B0Kw0x21%2F5%2BbGAzv%2FYVQsgHl%2B437oRMCLGkt4SNvqICbxeYCKW0U5dBVKG8qg0h%2B5kdw8ELhHFZ6xT9x%2BqAVTkUaNwHguJZlTWC1Ads4uyN0qOU4CB7%2BeC%2BnJwDDpujE9y1fR1dtqQVjvM2W4Tt4HtlUjHigSTc%2Fxra1IxN36xuvVLO9UBAD8XmzN8J0bOR1rx4zsTxxsRTp%2BghdF2FB9ULwsIUF9K0tG3AXP%2BCe3mHkgbde8Om5fnoVt8RJ22JApQioc4zWxfbfErRnH6iLqtu3WP7MZK72tzjOwcmwzjSuHr7zF7sbE6XCCatqQFPkgox9gFp9BAJh68tNE%2BFJZksyn9nm50l1954wh%2B4c4ZujuI%2F%2FJ2zIr1hK80k78lazGm%2BHtX6AK%2FD0TmdN0yLo4t8mMrelUr7WY5Qj%2BoUNSVZc3SQWB3ylCb%2BFVchSHywzNijvcNLn8PChi6c4Kt1xilIxXtW5dycsb%2FlwyDVraFa81o75kA%2BtraCl5NoQEgEK0%2FsK2RG8PiuBguGP%2BRD38ASXwSVXXIY64lNR5tNwzDvsdK9BjqkAfQW0PrjAv5SUhCVQVCkQHCulw92TVAGyhn5DmOgkCdEk7IBxcWD0Gx0%2BZJK9qnY3UBiMetqXnLyO3fK8TrZU%2Bc3twYLWBmn36AdxAF5fUynFWP1pydoO4N8zsRJr9zySWjozWGl3xB60HcGQWLBTjPipElr94TC%2FvG%2Brk0cIc9RSGLoA2UkXJBun1dEbepzSVBpXnn%2Fjpwb7DzIlUNZb%2Fj%2FSNUM&X-Amz-Signature=82bf64650100b989df7df164a0a28c75d2064fd71363b54f2992793a9cd5cac9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IT3J5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCMZTrO6f%2Bisgfb25vIS5p2m2QtOXDOByHzw5idW8rxmwIhAM42JQPkKJ13w4PZCKRQmk%2Bu4LoITWWLdQ0oAOlwuBQGKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZQy3QwjDyn3XNfMq3AMxNNXLDiSfSRhVCF9IhvIUhu60JCvZuloyNGEMwBs85bdRt1odNqCRAyk8LKkp8K9Hu%2Fs1BwZDx5RMyzeXK%2B0Kw0x21%2F5%2BbGAzv%2FYVQsgHl%2B437oRMCLGkt4SNvqICbxeYCKW0U5dBVKG8qg0h%2B5kdw8ELhHFZ6xT9x%2BqAVTkUaNwHguJZlTWC1Ads4uyN0qOU4CB7%2BeC%2BnJwDDpujE9y1fR1dtqQVjvM2W4Tt4HtlUjHigSTc%2Fxra1IxN36xuvVLO9UBAD8XmzN8J0bOR1rx4zsTxxsRTp%2BghdF2FB9ULwsIUF9K0tG3AXP%2BCe3mHkgbde8Om5fnoVt8RJ22JApQioc4zWxfbfErRnH6iLqtu3WP7MZK72tzjOwcmwzjSuHr7zF7sbE6XCCatqQFPkgox9gFp9BAJh68tNE%2BFJZksyn9nm50l1954wh%2B4c4ZujuI%2F%2FJ2zIr1hK80k78lazGm%2BHtX6AK%2FD0TmdN0yLo4t8mMrelUr7WY5Qj%2BoUNSVZc3SQWB3ylCb%2BFVchSHywzNijvcNLn8PChi6c4Kt1xilIxXtW5dycsb%2FlwyDVraFa81o75kA%2BtraCl5NoQEgEK0%2FsK2RG8PiuBguGP%2BRD38ASXwSVXXIY64lNR5tNwzDvsdK9BjqkAfQW0PrjAv5SUhCVQVCkQHCulw92TVAGyhn5DmOgkCdEk7IBxcWD0Gx0%2BZJK9qnY3UBiMetqXnLyO3fK8TrZU%2Bc3twYLWBmn36AdxAF5fUynFWP1pydoO4N8zsRJr9zySWjozWGl3xB60HcGQWLBTjPipElr94TC%2FvG%2Brk0cIc9RSGLoA2UkXJBun1dEbepzSVBpXnn%2Fjpwb7DzIlUNZb%2Fj%2FSNUM&X-Amz-Signature=5a2ef47e9a8655d1b05d500973f699e28190deaa6d17e7fa6df37740b9dc108c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IT3J5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCMZTrO6f%2Bisgfb25vIS5p2m2QtOXDOByHzw5idW8rxmwIhAM42JQPkKJ13w4PZCKRQmk%2Bu4LoITWWLdQ0oAOlwuBQGKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZQy3QwjDyn3XNfMq3AMxNNXLDiSfSRhVCF9IhvIUhu60JCvZuloyNGEMwBs85bdRt1odNqCRAyk8LKkp8K9Hu%2Fs1BwZDx5RMyzeXK%2B0Kw0x21%2F5%2BbGAzv%2FYVQsgHl%2B437oRMCLGkt4SNvqICbxeYCKW0U5dBVKG8qg0h%2B5kdw8ELhHFZ6xT9x%2BqAVTkUaNwHguJZlTWC1Ads4uyN0qOU4CB7%2BeC%2BnJwDDpujE9y1fR1dtqQVjvM2W4Tt4HtlUjHigSTc%2Fxra1IxN36xuvVLO9UBAD8XmzN8J0bOR1rx4zsTxxsRTp%2BghdF2FB9ULwsIUF9K0tG3AXP%2BCe3mHkgbde8Om5fnoVt8RJ22JApQioc4zWxfbfErRnH6iLqtu3WP7MZK72tzjOwcmwzjSuHr7zF7sbE6XCCatqQFPkgox9gFp9BAJh68tNE%2BFJZksyn9nm50l1954wh%2B4c4ZujuI%2F%2FJ2zIr1hK80k78lazGm%2BHtX6AK%2FD0TmdN0yLo4t8mMrelUr7WY5Qj%2BoUNSVZc3SQWB3ylCb%2BFVchSHywzNijvcNLn8PChi6c4Kt1xilIxXtW5dycsb%2FlwyDVraFa81o75kA%2BtraCl5NoQEgEK0%2FsK2RG8PiuBguGP%2BRD38ASXwSVXXIY64lNR5tNwzDvsdK9BjqkAfQW0PrjAv5SUhCVQVCkQHCulw92TVAGyhn5DmOgkCdEk7IBxcWD0Gx0%2BZJK9qnY3UBiMetqXnLyO3fK8TrZU%2Bc3twYLWBmn36AdxAF5fUynFWP1pydoO4N8zsRJr9zySWjozWGl3xB60HcGQWLBTjPipElr94TC%2FvG%2Brk0cIc9RSGLoA2UkXJBun1dEbepzSVBpXnn%2Fjpwb7DzIlUNZb%2Fj%2FSNUM&X-Amz-Signature=0af1b61fc95e97929fdb8e0fbd5d499fd4fe63f8d275e886d1726108affa2c04&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IT3J5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCMZTrO6f%2Bisgfb25vIS5p2m2QtOXDOByHzw5idW8rxmwIhAM42JQPkKJ13w4PZCKRQmk%2Bu4LoITWWLdQ0oAOlwuBQGKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZQy3QwjDyn3XNfMq3AMxNNXLDiSfSRhVCF9IhvIUhu60JCvZuloyNGEMwBs85bdRt1odNqCRAyk8LKkp8K9Hu%2Fs1BwZDx5RMyzeXK%2B0Kw0x21%2F5%2BbGAzv%2FYVQsgHl%2B437oRMCLGkt4SNvqICbxeYCKW0U5dBVKG8qg0h%2B5kdw8ELhHFZ6xT9x%2BqAVTkUaNwHguJZlTWC1Ads4uyN0qOU4CB7%2BeC%2BnJwDDpujE9y1fR1dtqQVjvM2W4Tt4HtlUjHigSTc%2Fxra1IxN36xuvVLO9UBAD8XmzN8J0bOR1rx4zsTxxsRTp%2BghdF2FB9ULwsIUF9K0tG3AXP%2BCe3mHkgbde8Om5fnoVt8RJ22JApQioc4zWxfbfErRnH6iLqtu3WP7MZK72tzjOwcmwzjSuHr7zF7sbE6XCCatqQFPkgox9gFp9BAJh68tNE%2BFJZksyn9nm50l1954wh%2B4c4ZujuI%2F%2FJ2zIr1hK80k78lazGm%2BHtX6AK%2FD0TmdN0yLo4t8mMrelUr7WY5Qj%2BoUNSVZc3SQWB3ylCb%2BFVchSHywzNijvcNLn8PChi6c4Kt1xilIxXtW5dycsb%2FlwyDVraFa81o75kA%2BtraCl5NoQEgEK0%2FsK2RG8PiuBguGP%2BRD38ASXwSVXXIY64lNR5tNwzDvsdK9BjqkAfQW0PrjAv5SUhCVQVCkQHCulw92TVAGyhn5DmOgkCdEk7IBxcWD0Gx0%2BZJK9qnY3UBiMetqXnLyO3fK8TrZU%2Bc3twYLWBmn36AdxAF5fUynFWP1pydoO4N8zsRJr9zySWjozWGl3xB60HcGQWLBTjPipElr94TC%2FvG%2Brk0cIc9RSGLoA2UkXJBun1dEbepzSVBpXnn%2Fjpwb7DzIlUNZb%2Fj%2FSNUM&X-Amz-Signature=fcb90dbf4ea1b4cf1ce76cadb82763d40f4b094c40c7d88689f16e57e8382d05&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IT3J5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCMZTrO6f%2Bisgfb25vIS5p2m2QtOXDOByHzw5idW8rxmwIhAM42JQPkKJ13w4PZCKRQmk%2Bu4LoITWWLdQ0oAOlwuBQGKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZQy3QwjDyn3XNfMq3AMxNNXLDiSfSRhVCF9IhvIUhu60JCvZuloyNGEMwBs85bdRt1odNqCRAyk8LKkp8K9Hu%2Fs1BwZDx5RMyzeXK%2B0Kw0x21%2F5%2BbGAzv%2FYVQsgHl%2B437oRMCLGkt4SNvqICbxeYCKW0U5dBVKG8qg0h%2B5kdw8ELhHFZ6xT9x%2BqAVTkUaNwHguJZlTWC1Ads4uyN0qOU4CB7%2BeC%2BnJwDDpujE9y1fR1dtqQVjvM2W4Tt4HtlUjHigSTc%2Fxra1IxN36xuvVLO9UBAD8XmzN8J0bOR1rx4zsTxxsRTp%2BghdF2FB9ULwsIUF9K0tG3AXP%2BCe3mHkgbde8Om5fnoVt8RJ22JApQioc4zWxfbfErRnH6iLqtu3WP7MZK72tzjOwcmwzjSuHr7zF7sbE6XCCatqQFPkgox9gFp9BAJh68tNE%2BFJZksyn9nm50l1954wh%2B4c4ZujuI%2F%2FJ2zIr1hK80k78lazGm%2BHtX6AK%2FD0TmdN0yLo4t8mMrelUr7WY5Qj%2BoUNSVZc3SQWB3ylCb%2BFVchSHywzNijvcNLn8PChi6c4Kt1xilIxXtW5dycsb%2FlwyDVraFa81o75kA%2BtraCl5NoQEgEK0%2FsK2RG8PiuBguGP%2BRD38ASXwSVXXIY64lNR5tNwzDvsdK9BjqkAfQW0PrjAv5SUhCVQVCkQHCulw92TVAGyhn5DmOgkCdEk7IBxcWD0Gx0%2BZJK9qnY3UBiMetqXnLyO3fK8TrZU%2Bc3twYLWBmn36AdxAF5fUynFWP1pydoO4N8zsRJr9zySWjozWGl3xB60HcGQWLBTjPipElr94TC%2FvG%2Brk0cIc9RSGLoA2UkXJBun1dEbepzSVBpXnn%2Fjpwb7DzIlUNZb%2Fj%2FSNUM&X-Amz-Signature=472cfbc12982fe8b5e27ab89f5e79b79df46dded094949bc34fcc85b73014f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IT3J5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCMZTrO6f%2Bisgfb25vIS5p2m2QtOXDOByHzw5idW8rxmwIhAM42JQPkKJ13w4PZCKRQmk%2Bu4LoITWWLdQ0oAOlwuBQGKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZQy3QwjDyn3XNfMq3AMxNNXLDiSfSRhVCF9IhvIUhu60JCvZuloyNGEMwBs85bdRt1odNqCRAyk8LKkp8K9Hu%2Fs1BwZDx5RMyzeXK%2B0Kw0x21%2F5%2BbGAzv%2FYVQsgHl%2B437oRMCLGkt4SNvqICbxeYCKW0U5dBVKG8qg0h%2B5kdw8ELhHFZ6xT9x%2BqAVTkUaNwHguJZlTWC1Ads4uyN0qOU4CB7%2BeC%2BnJwDDpujE9y1fR1dtqQVjvM2W4Tt4HtlUjHigSTc%2Fxra1IxN36xuvVLO9UBAD8XmzN8J0bOR1rx4zsTxxsRTp%2BghdF2FB9ULwsIUF9K0tG3AXP%2BCe3mHkgbde8Om5fnoVt8RJ22JApQioc4zWxfbfErRnH6iLqtu3WP7MZK72tzjOwcmwzjSuHr7zF7sbE6XCCatqQFPkgox9gFp9BAJh68tNE%2BFJZksyn9nm50l1954wh%2B4c4ZujuI%2F%2FJ2zIr1hK80k78lazGm%2BHtX6AK%2FD0TmdN0yLo4t8mMrelUr7WY5Qj%2BoUNSVZc3SQWB3ylCb%2BFVchSHywzNijvcNLn8PChi6c4Kt1xilIxXtW5dycsb%2FlwyDVraFa81o75kA%2BtraCl5NoQEgEK0%2FsK2RG8PiuBguGP%2BRD38ASXwSVXXIY64lNR5tNwzDvsdK9BjqkAfQW0PrjAv5SUhCVQVCkQHCulw92TVAGyhn5DmOgkCdEk7IBxcWD0Gx0%2BZJK9qnY3UBiMetqXnLyO3fK8TrZU%2Bc3twYLWBmn36AdxAF5fUynFWP1pydoO4N8zsRJr9zySWjozWGl3xB60HcGQWLBTjPipElr94TC%2FvG%2Brk0cIc9RSGLoA2UkXJBun1dEbepzSVBpXnn%2Fjpwb7DzIlUNZb%2Fj%2FSNUM&X-Amz-Signature=7c10fcfc354149fd3b7937c19f10deff3bb26f75b22135b354f4853fd4db01be&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IT3J5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCMZTrO6f%2Bisgfb25vIS5p2m2QtOXDOByHzw5idW8rxmwIhAM42JQPkKJ13w4PZCKRQmk%2Bu4LoITWWLdQ0oAOlwuBQGKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZQy3QwjDyn3XNfMq3AMxNNXLDiSfSRhVCF9IhvIUhu60JCvZuloyNGEMwBs85bdRt1odNqCRAyk8LKkp8K9Hu%2Fs1BwZDx5RMyzeXK%2B0Kw0x21%2F5%2BbGAzv%2FYVQsgHl%2B437oRMCLGkt4SNvqICbxeYCKW0U5dBVKG8qg0h%2B5kdw8ELhHFZ6xT9x%2BqAVTkUaNwHguJZlTWC1Ads4uyN0qOU4CB7%2BeC%2BnJwDDpujE9y1fR1dtqQVjvM2W4Tt4HtlUjHigSTc%2Fxra1IxN36xuvVLO9UBAD8XmzN8J0bOR1rx4zsTxxsRTp%2BghdF2FB9ULwsIUF9K0tG3AXP%2BCe3mHkgbde8Om5fnoVt8RJ22JApQioc4zWxfbfErRnH6iLqtu3WP7MZK72tzjOwcmwzjSuHr7zF7sbE6XCCatqQFPkgox9gFp9BAJh68tNE%2BFJZksyn9nm50l1954wh%2B4c4ZujuI%2F%2FJ2zIr1hK80k78lazGm%2BHtX6AK%2FD0TmdN0yLo4t8mMrelUr7WY5Qj%2BoUNSVZc3SQWB3ylCb%2BFVchSHywzNijvcNLn8PChi6c4Kt1xilIxXtW5dycsb%2FlwyDVraFa81o75kA%2BtraCl5NoQEgEK0%2FsK2RG8PiuBguGP%2BRD38ASXwSVXXIY64lNR5tNwzDvsdK9BjqkAfQW0PrjAv5SUhCVQVCkQHCulw92TVAGyhn5DmOgkCdEk7IBxcWD0Gx0%2BZJK9qnY3UBiMetqXnLyO3fK8TrZU%2Bc3twYLWBmn36AdxAF5fUynFWP1pydoO4N8zsRJr9zySWjozWGl3xB60HcGQWLBTjPipElr94TC%2FvG%2Brk0cIc9RSGLoA2UkXJBun1dEbepzSVBpXnn%2Fjpwb7DzIlUNZb%2Fj%2FSNUM&X-Amz-Signature=04d257371b9b7d1690f8c73ae1a23adb21bbe1903a11d2d09e6bb835ccbb84ae&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

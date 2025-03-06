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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2H5HWGJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhlM0dG8mG%2Bzm2Pth5hbVwcgZFf24SNZLImeD4WPtUgIhALv5g%2FAg%2F3f2krNoXTPw855NYYURxKraG26chQ6Kl80JKv8DCC0QABoMNjM3NDIzMTgzODA1Igz7F7ZYHv3Rplgempsq3AOOf8qIBNt7HGv3ftxpHMwF8a6ifrcDpyclR8yACTERDh8xAM60ayH7Z9MZcS983KTKbGWLin8%2F7E%2BBuRoCDsqn1p5TCupp8PsCGDfyWVf%2Fi8MP6dSJnxbQ5X%2FKhxKSMcHPj9pc46hrZ7XO6EpL%2Ft2zUOlLf6D%2FFNmxhECxGHsGGUuT9jArrrnh5oycBCh0gQfpOY%2BKIfgGwnUnlnAO22rNkdl%2FF%2FZXjQ6VFXYToqSNujVNWT1ioE7pmebA4bnU6cx3yBN2q607EjhznK215dQyDS3uCEXsANlzdHsEGDXXkn201gUK6Gmx0r7bA402igCbRVWUbt%2B13O6WMsKdhDv2WkAZFRF2HFqPwD59d08Z8R4AIsmni7JO8o2ZHAyNKCR2AuqmomfbOX2JrcOPuSfxnTjjxqFQsSiRxT7k4O9mAcxYPcpQOgeUKn%2BK4YepArC%2BdYH935C%2FugPrr1R2lRFcaPmGScGULHh2034wyKrTlRahLS1sNIiykB4iAnbmqy4EaSByqYizjsM7LeBi0qFP3TiwZ%2FfVQBac9upww0ckr9iu5H58bwzbAqcO1RIoALNaCR4y7WKjoTefopHPyKTvJdeb8Xpa1v9ZpwXpzI0RtSbKr8nLKiI%2BvhGkgjC0kaa%2BBjqkAe1387deH4%2F1mSU10sN2Oa28iQ8XNg%2BAb5gPnT1rgI6DqrPEQn1EBah1cbw3LhaDAVETRPsqeHfyvu0MT0lcQcKDP4CeAyfgdgJ3J4r7ikZGtD61qlQs%2FSIxRtWT9kNP0XGlWFISOkq2fWqeGrClfxA4Ru12pI7AqqfpD6ESKRrBsM96MKNHP4j%2BdRXve1fFwiAbWaUJggJ0omoWRKvPfgAtdahD&X-Amz-Signature=13b9443783917f8f08ebf2c4906a594f8a474e73ab3aa6c64bc26869da62bff8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2H5HWGJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhlM0dG8mG%2Bzm2Pth5hbVwcgZFf24SNZLImeD4WPtUgIhALv5g%2FAg%2F3f2krNoXTPw855NYYURxKraG26chQ6Kl80JKv8DCC0QABoMNjM3NDIzMTgzODA1Igz7F7ZYHv3Rplgempsq3AOOf8qIBNt7HGv3ftxpHMwF8a6ifrcDpyclR8yACTERDh8xAM60ayH7Z9MZcS983KTKbGWLin8%2F7E%2BBuRoCDsqn1p5TCupp8PsCGDfyWVf%2Fi8MP6dSJnxbQ5X%2FKhxKSMcHPj9pc46hrZ7XO6EpL%2Ft2zUOlLf6D%2FFNmxhECxGHsGGUuT9jArrrnh5oycBCh0gQfpOY%2BKIfgGwnUnlnAO22rNkdl%2FF%2FZXjQ6VFXYToqSNujVNWT1ioE7pmebA4bnU6cx3yBN2q607EjhznK215dQyDS3uCEXsANlzdHsEGDXXkn201gUK6Gmx0r7bA402igCbRVWUbt%2B13O6WMsKdhDv2WkAZFRF2HFqPwD59d08Z8R4AIsmni7JO8o2ZHAyNKCR2AuqmomfbOX2JrcOPuSfxnTjjxqFQsSiRxT7k4O9mAcxYPcpQOgeUKn%2BK4YepArC%2BdYH935C%2FugPrr1R2lRFcaPmGScGULHh2034wyKrTlRahLS1sNIiykB4iAnbmqy4EaSByqYizjsM7LeBi0qFP3TiwZ%2FfVQBac9upww0ckr9iu5H58bwzbAqcO1RIoALNaCR4y7WKjoTefopHPyKTvJdeb8Xpa1v9ZpwXpzI0RtSbKr8nLKiI%2BvhGkgjC0kaa%2BBjqkAe1387deH4%2F1mSU10sN2Oa28iQ8XNg%2BAb5gPnT1rgI6DqrPEQn1EBah1cbw3LhaDAVETRPsqeHfyvu0MT0lcQcKDP4CeAyfgdgJ3J4r7ikZGtD61qlQs%2FSIxRtWT9kNP0XGlWFISOkq2fWqeGrClfxA4Ru12pI7AqqfpD6ESKRrBsM96MKNHP4j%2BdRXve1fFwiAbWaUJggJ0omoWRKvPfgAtdahD&X-Amz-Signature=82a2ce5f422d784a6274ded0a37b2037dc2152c26ab8aef5619fa3e9c4108e76&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2H5HWGJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhlM0dG8mG%2Bzm2Pth5hbVwcgZFf24SNZLImeD4WPtUgIhALv5g%2FAg%2F3f2krNoXTPw855NYYURxKraG26chQ6Kl80JKv8DCC0QABoMNjM3NDIzMTgzODA1Igz7F7ZYHv3Rplgempsq3AOOf8qIBNt7HGv3ftxpHMwF8a6ifrcDpyclR8yACTERDh8xAM60ayH7Z9MZcS983KTKbGWLin8%2F7E%2BBuRoCDsqn1p5TCupp8PsCGDfyWVf%2Fi8MP6dSJnxbQ5X%2FKhxKSMcHPj9pc46hrZ7XO6EpL%2Ft2zUOlLf6D%2FFNmxhECxGHsGGUuT9jArrrnh5oycBCh0gQfpOY%2BKIfgGwnUnlnAO22rNkdl%2FF%2FZXjQ6VFXYToqSNujVNWT1ioE7pmebA4bnU6cx3yBN2q607EjhznK215dQyDS3uCEXsANlzdHsEGDXXkn201gUK6Gmx0r7bA402igCbRVWUbt%2B13O6WMsKdhDv2WkAZFRF2HFqPwD59d08Z8R4AIsmni7JO8o2ZHAyNKCR2AuqmomfbOX2JrcOPuSfxnTjjxqFQsSiRxT7k4O9mAcxYPcpQOgeUKn%2BK4YepArC%2BdYH935C%2FugPrr1R2lRFcaPmGScGULHh2034wyKrTlRahLS1sNIiykB4iAnbmqy4EaSByqYizjsM7LeBi0qFP3TiwZ%2FfVQBac9upww0ckr9iu5H58bwzbAqcO1RIoALNaCR4y7WKjoTefopHPyKTvJdeb8Xpa1v9ZpwXpzI0RtSbKr8nLKiI%2BvhGkgjC0kaa%2BBjqkAe1387deH4%2F1mSU10sN2Oa28iQ8XNg%2BAb5gPnT1rgI6DqrPEQn1EBah1cbw3LhaDAVETRPsqeHfyvu0MT0lcQcKDP4CeAyfgdgJ3J4r7ikZGtD61qlQs%2FSIxRtWT9kNP0XGlWFISOkq2fWqeGrClfxA4Ru12pI7AqqfpD6ESKRrBsM96MKNHP4j%2BdRXve1fFwiAbWaUJggJ0omoWRKvPfgAtdahD&X-Amz-Signature=90a77cfa86314c78db37ef12fb87f2fe9b746da29ec96704b19fced177cc38bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2H5HWGJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhlM0dG8mG%2Bzm2Pth5hbVwcgZFf24SNZLImeD4WPtUgIhALv5g%2FAg%2F3f2krNoXTPw855NYYURxKraG26chQ6Kl80JKv8DCC0QABoMNjM3NDIzMTgzODA1Igz7F7ZYHv3Rplgempsq3AOOf8qIBNt7HGv3ftxpHMwF8a6ifrcDpyclR8yACTERDh8xAM60ayH7Z9MZcS983KTKbGWLin8%2F7E%2BBuRoCDsqn1p5TCupp8PsCGDfyWVf%2Fi8MP6dSJnxbQ5X%2FKhxKSMcHPj9pc46hrZ7XO6EpL%2Ft2zUOlLf6D%2FFNmxhECxGHsGGUuT9jArrrnh5oycBCh0gQfpOY%2BKIfgGwnUnlnAO22rNkdl%2FF%2FZXjQ6VFXYToqSNujVNWT1ioE7pmebA4bnU6cx3yBN2q607EjhznK215dQyDS3uCEXsANlzdHsEGDXXkn201gUK6Gmx0r7bA402igCbRVWUbt%2B13O6WMsKdhDv2WkAZFRF2HFqPwD59d08Z8R4AIsmni7JO8o2ZHAyNKCR2AuqmomfbOX2JrcOPuSfxnTjjxqFQsSiRxT7k4O9mAcxYPcpQOgeUKn%2BK4YepArC%2BdYH935C%2FugPrr1R2lRFcaPmGScGULHh2034wyKrTlRahLS1sNIiykB4iAnbmqy4EaSByqYizjsM7LeBi0qFP3TiwZ%2FfVQBac9upww0ckr9iu5H58bwzbAqcO1RIoALNaCR4y7WKjoTefopHPyKTvJdeb8Xpa1v9ZpwXpzI0RtSbKr8nLKiI%2BvhGkgjC0kaa%2BBjqkAe1387deH4%2F1mSU10sN2Oa28iQ8XNg%2BAb5gPnT1rgI6DqrPEQn1EBah1cbw3LhaDAVETRPsqeHfyvu0MT0lcQcKDP4CeAyfgdgJ3J4r7ikZGtD61qlQs%2FSIxRtWT9kNP0XGlWFISOkq2fWqeGrClfxA4Ru12pI7AqqfpD6ESKRrBsM96MKNHP4j%2BdRXve1fFwiAbWaUJggJ0omoWRKvPfgAtdahD&X-Amz-Signature=185d4685fca0390400d9b1de1bda8f44548141892ccab1c639bb3ef3347f5562&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2H5HWGJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhlM0dG8mG%2Bzm2Pth5hbVwcgZFf24SNZLImeD4WPtUgIhALv5g%2FAg%2F3f2krNoXTPw855NYYURxKraG26chQ6Kl80JKv8DCC0QABoMNjM3NDIzMTgzODA1Igz7F7ZYHv3Rplgempsq3AOOf8qIBNt7HGv3ftxpHMwF8a6ifrcDpyclR8yACTERDh8xAM60ayH7Z9MZcS983KTKbGWLin8%2F7E%2BBuRoCDsqn1p5TCupp8PsCGDfyWVf%2Fi8MP6dSJnxbQ5X%2FKhxKSMcHPj9pc46hrZ7XO6EpL%2Ft2zUOlLf6D%2FFNmxhECxGHsGGUuT9jArrrnh5oycBCh0gQfpOY%2BKIfgGwnUnlnAO22rNkdl%2FF%2FZXjQ6VFXYToqSNujVNWT1ioE7pmebA4bnU6cx3yBN2q607EjhznK215dQyDS3uCEXsANlzdHsEGDXXkn201gUK6Gmx0r7bA402igCbRVWUbt%2B13O6WMsKdhDv2WkAZFRF2HFqPwD59d08Z8R4AIsmni7JO8o2ZHAyNKCR2AuqmomfbOX2JrcOPuSfxnTjjxqFQsSiRxT7k4O9mAcxYPcpQOgeUKn%2BK4YepArC%2BdYH935C%2FugPrr1R2lRFcaPmGScGULHh2034wyKrTlRahLS1sNIiykB4iAnbmqy4EaSByqYizjsM7LeBi0qFP3TiwZ%2FfVQBac9upww0ckr9iu5H58bwzbAqcO1RIoALNaCR4y7WKjoTefopHPyKTvJdeb8Xpa1v9ZpwXpzI0RtSbKr8nLKiI%2BvhGkgjC0kaa%2BBjqkAe1387deH4%2F1mSU10sN2Oa28iQ8XNg%2BAb5gPnT1rgI6DqrPEQn1EBah1cbw3LhaDAVETRPsqeHfyvu0MT0lcQcKDP4CeAyfgdgJ3J4r7ikZGtD61qlQs%2FSIxRtWT9kNP0XGlWFISOkq2fWqeGrClfxA4Ru12pI7AqqfpD6ESKRrBsM96MKNHP4j%2BdRXve1fFwiAbWaUJggJ0omoWRKvPfgAtdahD&X-Amz-Signature=8570fcfe0269461736e808fef81908d0269382ab99398a2cd3add03f75b537c7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2H5HWGJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhlM0dG8mG%2Bzm2Pth5hbVwcgZFf24SNZLImeD4WPtUgIhALv5g%2FAg%2F3f2krNoXTPw855NYYURxKraG26chQ6Kl80JKv8DCC0QABoMNjM3NDIzMTgzODA1Igz7F7ZYHv3Rplgempsq3AOOf8qIBNt7HGv3ftxpHMwF8a6ifrcDpyclR8yACTERDh8xAM60ayH7Z9MZcS983KTKbGWLin8%2F7E%2BBuRoCDsqn1p5TCupp8PsCGDfyWVf%2Fi8MP6dSJnxbQ5X%2FKhxKSMcHPj9pc46hrZ7XO6EpL%2Ft2zUOlLf6D%2FFNmxhECxGHsGGUuT9jArrrnh5oycBCh0gQfpOY%2BKIfgGwnUnlnAO22rNkdl%2FF%2FZXjQ6VFXYToqSNujVNWT1ioE7pmebA4bnU6cx3yBN2q607EjhznK215dQyDS3uCEXsANlzdHsEGDXXkn201gUK6Gmx0r7bA402igCbRVWUbt%2B13O6WMsKdhDv2WkAZFRF2HFqPwD59d08Z8R4AIsmni7JO8o2ZHAyNKCR2AuqmomfbOX2JrcOPuSfxnTjjxqFQsSiRxT7k4O9mAcxYPcpQOgeUKn%2BK4YepArC%2BdYH935C%2FugPrr1R2lRFcaPmGScGULHh2034wyKrTlRahLS1sNIiykB4iAnbmqy4EaSByqYizjsM7LeBi0qFP3TiwZ%2FfVQBac9upww0ckr9iu5H58bwzbAqcO1RIoALNaCR4y7WKjoTefopHPyKTvJdeb8Xpa1v9ZpwXpzI0RtSbKr8nLKiI%2BvhGkgjC0kaa%2BBjqkAe1387deH4%2F1mSU10sN2Oa28iQ8XNg%2BAb5gPnT1rgI6DqrPEQn1EBah1cbw3LhaDAVETRPsqeHfyvu0MT0lcQcKDP4CeAyfgdgJ3J4r7ikZGtD61qlQs%2FSIxRtWT9kNP0XGlWFISOkq2fWqeGrClfxA4Ru12pI7AqqfpD6ESKRrBsM96MKNHP4j%2BdRXve1fFwiAbWaUJggJ0omoWRKvPfgAtdahD&X-Amz-Signature=857da78dc2d98b3e2a8876f5260d6213056cff3b6d495f70f5ccf1cfb41ece3b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2H5HWGJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhlM0dG8mG%2Bzm2Pth5hbVwcgZFf24SNZLImeD4WPtUgIhALv5g%2FAg%2F3f2krNoXTPw855NYYURxKraG26chQ6Kl80JKv8DCC0QABoMNjM3NDIzMTgzODA1Igz7F7ZYHv3Rplgempsq3AOOf8qIBNt7HGv3ftxpHMwF8a6ifrcDpyclR8yACTERDh8xAM60ayH7Z9MZcS983KTKbGWLin8%2F7E%2BBuRoCDsqn1p5TCupp8PsCGDfyWVf%2Fi8MP6dSJnxbQ5X%2FKhxKSMcHPj9pc46hrZ7XO6EpL%2Ft2zUOlLf6D%2FFNmxhECxGHsGGUuT9jArrrnh5oycBCh0gQfpOY%2BKIfgGwnUnlnAO22rNkdl%2FF%2FZXjQ6VFXYToqSNujVNWT1ioE7pmebA4bnU6cx3yBN2q607EjhznK215dQyDS3uCEXsANlzdHsEGDXXkn201gUK6Gmx0r7bA402igCbRVWUbt%2B13O6WMsKdhDv2WkAZFRF2HFqPwD59d08Z8R4AIsmni7JO8o2ZHAyNKCR2AuqmomfbOX2JrcOPuSfxnTjjxqFQsSiRxT7k4O9mAcxYPcpQOgeUKn%2BK4YepArC%2BdYH935C%2FugPrr1R2lRFcaPmGScGULHh2034wyKrTlRahLS1sNIiykB4iAnbmqy4EaSByqYizjsM7LeBi0qFP3TiwZ%2FfVQBac9upww0ckr9iu5H58bwzbAqcO1RIoALNaCR4y7WKjoTefopHPyKTvJdeb8Xpa1v9ZpwXpzI0RtSbKr8nLKiI%2BvhGkgjC0kaa%2BBjqkAe1387deH4%2F1mSU10sN2Oa28iQ8XNg%2BAb5gPnT1rgI6DqrPEQn1EBah1cbw3LhaDAVETRPsqeHfyvu0MT0lcQcKDP4CeAyfgdgJ3J4r7ikZGtD61qlQs%2FSIxRtWT9kNP0XGlWFISOkq2fWqeGrClfxA4Ru12pI7AqqfpD6ESKRrBsM96MKNHP4j%2BdRXve1fFwiAbWaUJggJ0omoWRKvPfgAtdahD&X-Amz-Signature=1aa654bcb499afd739001e472c6d3225cb6317fd3a9f7f5b1203eb880c768555&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

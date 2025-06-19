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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYCMFAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPjeEapZ2dGJCUa6wxfA3nmj822ZcvANqlYp0KottjgIhAJ4jIX%2F573RsOLWt9YkmlBjU7mcx3GquumNfH3T%2Be7oJKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMeYvpdxu4XPPZPB0q3APpXEO9qP%2BeDf0VKDImrT1g4K5Pv2hsrZVNNZEGbJktezMh52PDbI%2BqoKjjE%2FpbDJw720%2FEbZ1YUxIY48nhetfuKfUCy6LbSlGhfCwabxujo3FfPlN%2B3pXKjpw0vKEJ5L2hFC5b%2BlSNcSIQjd%2FkjBiiBmFoY%2Ft8itHvuX6FUY38JszkLDxbyNP3CqFybQCOsc%2FjlWSwbvi8z9lPcBIfpmxZMXSHq6ZKFuuOF33iSH54d%2BkkL44eWEk6zuxeCDjTAPfGrhZMuYZWaX39BCxkNnuSDvA04uoqvn%2FIUtgNSk6rspZTbvkKilyMljscE%2BKsrlqFt7BNtSkA8joh7oMmQaMGMhU3Yo9TOxDwoogyMkSh4oVyx24UsCZfbjCqkmdy3vUy1nInCUoeYWiV3l4zALM7cTW4QA8DjWUoJPbr0oQ%2B8idiSAe%2B%2BUTlSq6wZrmuu2899rpNp6rC%2Fp0gMWWNoOdpyl1F5yANZwnfYAyzrJ%2FOius4tAIi6uh08tIjNgYHLOHKdfoXNkc2pD79j6UOuXlRMaoF8nyoiLj%2FfhUe09tt7AwqZAQfUfvtG%2B9z%2B5VNY0r0nbZcrPDtOdIR5XR9u84Rv3Hjrn7zIRSsOWONJuqRXZxZcfJaikFUDQ%2FgjTDTs9DCBjqkAQjRh0dX0Bwvc7UpJZHHIv0Ow5rf4IhSnW14N%2BXXTGMdxvfOyDVD4WNc3ti%2FwKvnqNk5eKIpfXrvXSVpLutD0qUr26U3RPpzwFU88%2Fr9EZ7fsTmfQB45MgM7i%2F%2F9mzwknJYvGkSnYr1B8dsgx49k5TkkTAX9Nyr7pOCSYh8FQhZLo083iN3%2BGMKgbskoKlE7f2nHbVDoDTKqxaxAarBZEIlP5bTP&X-Amz-Signature=414885ead115d27d4ce4e84c7d73f4bfa5e77f5f12be4eab725690d6fd0abead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYCMFAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPjeEapZ2dGJCUa6wxfA3nmj822ZcvANqlYp0KottjgIhAJ4jIX%2F573RsOLWt9YkmlBjU7mcx3GquumNfH3T%2Be7oJKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMeYvpdxu4XPPZPB0q3APpXEO9qP%2BeDf0VKDImrT1g4K5Pv2hsrZVNNZEGbJktezMh52PDbI%2BqoKjjE%2FpbDJw720%2FEbZ1YUxIY48nhetfuKfUCy6LbSlGhfCwabxujo3FfPlN%2B3pXKjpw0vKEJ5L2hFC5b%2BlSNcSIQjd%2FkjBiiBmFoY%2Ft8itHvuX6FUY38JszkLDxbyNP3CqFybQCOsc%2FjlWSwbvi8z9lPcBIfpmxZMXSHq6ZKFuuOF33iSH54d%2BkkL44eWEk6zuxeCDjTAPfGrhZMuYZWaX39BCxkNnuSDvA04uoqvn%2FIUtgNSk6rspZTbvkKilyMljscE%2BKsrlqFt7BNtSkA8joh7oMmQaMGMhU3Yo9TOxDwoogyMkSh4oVyx24UsCZfbjCqkmdy3vUy1nInCUoeYWiV3l4zALM7cTW4QA8DjWUoJPbr0oQ%2B8idiSAe%2B%2BUTlSq6wZrmuu2899rpNp6rC%2Fp0gMWWNoOdpyl1F5yANZwnfYAyzrJ%2FOius4tAIi6uh08tIjNgYHLOHKdfoXNkc2pD79j6UOuXlRMaoF8nyoiLj%2FfhUe09tt7AwqZAQfUfvtG%2B9z%2B5VNY0r0nbZcrPDtOdIR5XR9u84Rv3Hjrn7zIRSsOWONJuqRXZxZcfJaikFUDQ%2FgjTDTs9DCBjqkAQjRh0dX0Bwvc7UpJZHHIv0Ow5rf4IhSnW14N%2BXXTGMdxvfOyDVD4WNc3ti%2FwKvnqNk5eKIpfXrvXSVpLutD0qUr26U3RPpzwFU88%2Fr9EZ7fsTmfQB45MgM7i%2F%2F9mzwknJYvGkSnYr1B8dsgx49k5TkkTAX9Nyr7pOCSYh8FQhZLo083iN3%2BGMKgbskoKlE7f2nHbVDoDTKqxaxAarBZEIlP5bTP&X-Amz-Signature=2c3c3852027308955415cffb8eb0b6f3cd48cc6b1b565a2f936ff1de18029087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYCMFAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPjeEapZ2dGJCUa6wxfA3nmj822ZcvANqlYp0KottjgIhAJ4jIX%2F573RsOLWt9YkmlBjU7mcx3GquumNfH3T%2Be7oJKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMeYvpdxu4XPPZPB0q3APpXEO9qP%2BeDf0VKDImrT1g4K5Pv2hsrZVNNZEGbJktezMh52PDbI%2BqoKjjE%2FpbDJw720%2FEbZ1YUxIY48nhetfuKfUCy6LbSlGhfCwabxujo3FfPlN%2B3pXKjpw0vKEJ5L2hFC5b%2BlSNcSIQjd%2FkjBiiBmFoY%2Ft8itHvuX6FUY38JszkLDxbyNP3CqFybQCOsc%2FjlWSwbvi8z9lPcBIfpmxZMXSHq6ZKFuuOF33iSH54d%2BkkL44eWEk6zuxeCDjTAPfGrhZMuYZWaX39BCxkNnuSDvA04uoqvn%2FIUtgNSk6rspZTbvkKilyMljscE%2BKsrlqFt7BNtSkA8joh7oMmQaMGMhU3Yo9TOxDwoogyMkSh4oVyx24UsCZfbjCqkmdy3vUy1nInCUoeYWiV3l4zALM7cTW4QA8DjWUoJPbr0oQ%2B8idiSAe%2B%2BUTlSq6wZrmuu2899rpNp6rC%2Fp0gMWWNoOdpyl1F5yANZwnfYAyzrJ%2FOius4tAIi6uh08tIjNgYHLOHKdfoXNkc2pD79j6UOuXlRMaoF8nyoiLj%2FfhUe09tt7AwqZAQfUfvtG%2B9z%2B5VNY0r0nbZcrPDtOdIR5XR9u84Rv3Hjrn7zIRSsOWONJuqRXZxZcfJaikFUDQ%2FgjTDTs9DCBjqkAQjRh0dX0Bwvc7UpJZHHIv0Ow5rf4IhSnW14N%2BXXTGMdxvfOyDVD4WNc3ti%2FwKvnqNk5eKIpfXrvXSVpLutD0qUr26U3RPpzwFU88%2Fr9EZ7fsTmfQB45MgM7i%2F%2F9mzwknJYvGkSnYr1B8dsgx49k5TkkTAX9Nyr7pOCSYh8FQhZLo083iN3%2BGMKgbskoKlE7f2nHbVDoDTKqxaxAarBZEIlP5bTP&X-Amz-Signature=7f5868848ce5ea1f9b67a4a687653c9ea2b31dfb79c3457dc3851bb730ed794e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYCMFAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPjeEapZ2dGJCUa6wxfA3nmj822ZcvANqlYp0KottjgIhAJ4jIX%2F573RsOLWt9YkmlBjU7mcx3GquumNfH3T%2Be7oJKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMeYvpdxu4XPPZPB0q3APpXEO9qP%2BeDf0VKDImrT1g4K5Pv2hsrZVNNZEGbJktezMh52PDbI%2BqoKjjE%2FpbDJw720%2FEbZ1YUxIY48nhetfuKfUCy6LbSlGhfCwabxujo3FfPlN%2B3pXKjpw0vKEJ5L2hFC5b%2BlSNcSIQjd%2FkjBiiBmFoY%2Ft8itHvuX6FUY38JszkLDxbyNP3CqFybQCOsc%2FjlWSwbvi8z9lPcBIfpmxZMXSHq6ZKFuuOF33iSH54d%2BkkL44eWEk6zuxeCDjTAPfGrhZMuYZWaX39BCxkNnuSDvA04uoqvn%2FIUtgNSk6rspZTbvkKilyMljscE%2BKsrlqFt7BNtSkA8joh7oMmQaMGMhU3Yo9TOxDwoogyMkSh4oVyx24UsCZfbjCqkmdy3vUy1nInCUoeYWiV3l4zALM7cTW4QA8DjWUoJPbr0oQ%2B8idiSAe%2B%2BUTlSq6wZrmuu2899rpNp6rC%2Fp0gMWWNoOdpyl1F5yANZwnfYAyzrJ%2FOius4tAIi6uh08tIjNgYHLOHKdfoXNkc2pD79j6UOuXlRMaoF8nyoiLj%2FfhUe09tt7AwqZAQfUfvtG%2B9z%2B5VNY0r0nbZcrPDtOdIR5XR9u84Rv3Hjrn7zIRSsOWONJuqRXZxZcfJaikFUDQ%2FgjTDTs9DCBjqkAQjRh0dX0Bwvc7UpJZHHIv0Ow5rf4IhSnW14N%2BXXTGMdxvfOyDVD4WNc3ti%2FwKvnqNk5eKIpfXrvXSVpLutD0qUr26U3RPpzwFU88%2Fr9EZ7fsTmfQB45MgM7i%2F%2F9mzwknJYvGkSnYr1B8dsgx49k5TkkTAX9Nyr7pOCSYh8FQhZLo083iN3%2BGMKgbskoKlE7f2nHbVDoDTKqxaxAarBZEIlP5bTP&X-Amz-Signature=d6eb8efb283cb27859354748701d065af16c687b967599596af847e5f2c8d03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYCMFAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPjeEapZ2dGJCUa6wxfA3nmj822ZcvANqlYp0KottjgIhAJ4jIX%2F573RsOLWt9YkmlBjU7mcx3GquumNfH3T%2Be7oJKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMeYvpdxu4XPPZPB0q3APpXEO9qP%2BeDf0VKDImrT1g4K5Pv2hsrZVNNZEGbJktezMh52PDbI%2BqoKjjE%2FpbDJw720%2FEbZ1YUxIY48nhetfuKfUCy6LbSlGhfCwabxujo3FfPlN%2B3pXKjpw0vKEJ5L2hFC5b%2BlSNcSIQjd%2FkjBiiBmFoY%2Ft8itHvuX6FUY38JszkLDxbyNP3CqFybQCOsc%2FjlWSwbvi8z9lPcBIfpmxZMXSHq6ZKFuuOF33iSH54d%2BkkL44eWEk6zuxeCDjTAPfGrhZMuYZWaX39BCxkNnuSDvA04uoqvn%2FIUtgNSk6rspZTbvkKilyMljscE%2BKsrlqFt7BNtSkA8joh7oMmQaMGMhU3Yo9TOxDwoogyMkSh4oVyx24UsCZfbjCqkmdy3vUy1nInCUoeYWiV3l4zALM7cTW4QA8DjWUoJPbr0oQ%2B8idiSAe%2B%2BUTlSq6wZrmuu2899rpNp6rC%2Fp0gMWWNoOdpyl1F5yANZwnfYAyzrJ%2FOius4tAIi6uh08tIjNgYHLOHKdfoXNkc2pD79j6UOuXlRMaoF8nyoiLj%2FfhUe09tt7AwqZAQfUfvtG%2B9z%2B5VNY0r0nbZcrPDtOdIR5XR9u84Rv3Hjrn7zIRSsOWONJuqRXZxZcfJaikFUDQ%2FgjTDTs9DCBjqkAQjRh0dX0Bwvc7UpJZHHIv0Ow5rf4IhSnW14N%2BXXTGMdxvfOyDVD4WNc3ti%2FwKvnqNk5eKIpfXrvXSVpLutD0qUr26U3RPpzwFU88%2Fr9EZ7fsTmfQB45MgM7i%2F%2F9mzwknJYvGkSnYr1B8dsgx49k5TkkTAX9Nyr7pOCSYh8FQhZLo083iN3%2BGMKgbskoKlE7f2nHbVDoDTKqxaxAarBZEIlP5bTP&X-Amz-Signature=e5217f21a00607e265f8fffa24cc04a7dac71a4ee18159e99356049e10c993f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYCMFAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPjeEapZ2dGJCUa6wxfA3nmj822ZcvANqlYp0KottjgIhAJ4jIX%2F573RsOLWt9YkmlBjU7mcx3GquumNfH3T%2Be7oJKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMeYvpdxu4XPPZPB0q3APpXEO9qP%2BeDf0VKDImrT1g4K5Pv2hsrZVNNZEGbJktezMh52PDbI%2BqoKjjE%2FpbDJw720%2FEbZ1YUxIY48nhetfuKfUCy6LbSlGhfCwabxujo3FfPlN%2B3pXKjpw0vKEJ5L2hFC5b%2BlSNcSIQjd%2FkjBiiBmFoY%2Ft8itHvuX6FUY38JszkLDxbyNP3CqFybQCOsc%2FjlWSwbvi8z9lPcBIfpmxZMXSHq6ZKFuuOF33iSH54d%2BkkL44eWEk6zuxeCDjTAPfGrhZMuYZWaX39BCxkNnuSDvA04uoqvn%2FIUtgNSk6rspZTbvkKilyMljscE%2BKsrlqFt7BNtSkA8joh7oMmQaMGMhU3Yo9TOxDwoogyMkSh4oVyx24UsCZfbjCqkmdy3vUy1nInCUoeYWiV3l4zALM7cTW4QA8DjWUoJPbr0oQ%2B8idiSAe%2B%2BUTlSq6wZrmuu2899rpNp6rC%2Fp0gMWWNoOdpyl1F5yANZwnfYAyzrJ%2FOius4tAIi6uh08tIjNgYHLOHKdfoXNkc2pD79j6UOuXlRMaoF8nyoiLj%2FfhUe09tt7AwqZAQfUfvtG%2B9z%2B5VNY0r0nbZcrPDtOdIR5XR9u84Rv3Hjrn7zIRSsOWONJuqRXZxZcfJaikFUDQ%2FgjTDTs9DCBjqkAQjRh0dX0Bwvc7UpJZHHIv0Ow5rf4IhSnW14N%2BXXTGMdxvfOyDVD4WNc3ti%2FwKvnqNk5eKIpfXrvXSVpLutD0qUr26U3RPpzwFU88%2Fr9EZ7fsTmfQB45MgM7i%2F%2F9mzwknJYvGkSnYr1B8dsgx49k5TkkTAX9Nyr7pOCSYh8FQhZLo083iN3%2BGMKgbskoKlE7f2nHbVDoDTKqxaxAarBZEIlP5bTP&X-Amz-Signature=de36b78072d59f7c838887c821273949f9074b66031565dcff7068cc02e0c6bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYCMFAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPjeEapZ2dGJCUa6wxfA3nmj822ZcvANqlYp0KottjgIhAJ4jIX%2F573RsOLWt9YkmlBjU7mcx3GquumNfH3T%2Be7oJKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMeYvpdxu4XPPZPB0q3APpXEO9qP%2BeDf0VKDImrT1g4K5Pv2hsrZVNNZEGbJktezMh52PDbI%2BqoKjjE%2FpbDJw720%2FEbZ1YUxIY48nhetfuKfUCy6LbSlGhfCwabxujo3FfPlN%2B3pXKjpw0vKEJ5L2hFC5b%2BlSNcSIQjd%2FkjBiiBmFoY%2Ft8itHvuX6FUY38JszkLDxbyNP3CqFybQCOsc%2FjlWSwbvi8z9lPcBIfpmxZMXSHq6ZKFuuOF33iSH54d%2BkkL44eWEk6zuxeCDjTAPfGrhZMuYZWaX39BCxkNnuSDvA04uoqvn%2FIUtgNSk6rspZTbvkKilyMljscE%2BKsrlqFt7BNtSkA8joh7oMmQaMGMhU3Yo9TOxDwoogyMkSh4oVyx24UsCZfbjCqkmdy3vUy1nInCUoeYWiV3l4zALM7cTW4QA8DjWUoJPbr0oQ%2B8idiSAe%2B%2BUTlSq6wZrmuu2899rpNp6rC%2Fp0gMWWNoOdpyl1F5yANZwnfYAyzrJ%2FOius4tAIi6uh08tIjNgYHLOHKdfoXNkc2pD79j6UOuXlRMaoF8nyoiLj%2FfhUe09tt7AwqZAQfUfvtG%2B9z%2B5VNY0r0nbZcrPDtOdIR5XR9u84Rv3Hjrn7zIRSsOWONJuqRXZxZcfJaikFUDQ%2FgjTDTs9DCBjqkAQjRh0dX0Bwvc7UpJZHHIv0Ow5rf4IhSnW14N%2BXXTGMdxvfOyDVD4WNc3ti%2FwKvnqNk5eKIpfXrvXSVpLutD0qUr26U3RPpzwFU88%2Fr9EZ7fsTmfQB45MgM7i%2F%2F9mzwknJYvGkSnYr1B8dsgx49k5TkkTAX9Nyr7pOCSYh8FQhZLo083iN3%2BGMKgbskoKlE7f2nHbVDoDTKqxaxAarBZEIlP5bTP&X-Amz-Signature=924262c37cb05163ccb26b821f87869ae90afb392a9b8b46aacfd7bbeb14166d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

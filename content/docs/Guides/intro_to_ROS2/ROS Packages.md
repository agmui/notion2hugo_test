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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNW5QNI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHDwh8EvQiBhaf%2Bo8WXIH5CZMQy2ZxkmY9qQFho9eKxAiAsbsQdfWSixfW8jnJZeq1FFX1AwQM0h%2BGnT5gb74bx5ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCA9GwdWIf1e3YP3jKtwD3UfbTZWPTKqmRU7WOISOrmSXKikHxV%2BCuOfC01pWTZ7bVVRSDXrXgdZwIqQkC0XU9DkxgZg%2B855M8NNVYUntyYOdEsY90AaSRUBk1Z1%2B7LNR0QNSxMs%2FQyEtx6kKEnnftsIIV%2FbH9k5M%2FS%2Fgp8wZ9NnAM5ZGoNK%2BddsoBEluSW9csVzITir5vCq2QaOiEmF3sbBIGuHEMU07TZ7ItfWV%2B1Uhv1t%2FSVMYZhWVZB7IwjQ8UChg9jo0UZwVJBV9mw919Bzs0GLq919Q4zGZHnHvx6TuQ12F6jknb%2BF6JfVLVp1v1I9HhivC%2F%2Fv1Gudn9OSCWSbvEmIKrIPBDrxyoQBbEhV2Hcw71XrStrHoFYuj8DTREk3jM7UK62Xmn1%2BIP6UOyJXsHlJHUX%2FI4uP0iXs4CnKiaWvaB1cbeSAn4KVfz%2BkgdXZaocuq3zK0Bh8N9AAsIUjCHukihHxmLVlJnDAqllGAKBomwAZULi6AnuL6T0KLJPVQEn9ARhfb%2F5FFnqY%2F4TsjcqJsV0j47oXVW2v3YffCyQB10%2FbU3mJZBbfWaUsoVOD5wD7KSzycULVfsbYtQyFozp8%2F2QOWCIjrzhhDsNreRjWlpyYHJIQCHoJFgrNouXPg6N0hGar3scYwxff6wgY6pgEsfYMb8NHx1wm7jcm5ADCU072OJHZRhd%2FbKTzXjCEoKLIfQe5s511sfwjG9S1AGeLZDtsHzqYEtiYzLeDUeQYU5IJuMrYDM%2FilG0G73Gdz2G2O9ZoAmsaYNnxWJXtRGW0fV2aOAh8iEXBijUnGNCVF9vHYbXbs9a4saJaqW9nwmNuKL5ojZ2ovS5pmJoKH5aToGP9gvVoolmlU3BT8SwBySHI5Qs10&X-Amz-Signature=3c1cdfb2ac0cc3daf344065fcd2bcf59931f9343b3e078ead8583b1a10e689a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNW5QNI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHDwh8EvQiBhaf%2Bo8WXIH5CZMQy2ZxkmY9qQFho9eKxAiAsbsQdfWSixfW8jnJZeq1FFX1AwQM0h%2BGnT5gb74bx5ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCA9GwdWIf1e3YP3jKtwD3UfbTZWPTKqmRU7WOISOrmSXKikHxV%2BCuOfC01pWTZ7bVVRSDXrXgdZwIqQkC0XU9DkxgZg%2B855M8NNVYUntyYOdEsY90AaSRUBk1Z1%2B7LNR0QNSxMs%2FQyEtx6kKEnnftsIIV%2FbH9k5M%2FS%2Fgp8wZ9NnAM5ZGoNK%2BddsoBEluSW9csVzITir5vCq2QaOiEmF3sbBIGuHEMU07TZ7ItfWV%2B1Uhv1t%2FSVMYZhWVZB7IwjQ8UChg9jo0UZwVJBV9mw919Bzs0GLq919Q4zGZHnHvx6TuQ12F6jknb%2BF6JfVLVp1v1I9HhivC%2F%2Fv1Gudn9OSCWSbvEmIKrIPBDrxyoQBbEhV2Hcw71XrStrHoFYuj8DTREk3jM7UK62Xmn1%2BIP6UOyJXsHlJHUX%2FI4uP0iXs4CnKiaWvaB1cbeSAn4KVfz%2BkgdXZaocuq3zK0Bh8N9AAsIUjCHukihHxmLVlJnDAqllGAKBomwAZULi6AnuL6T0KLJPVQEn9ARhfb%2F5FFnqY%2F4TsjcqJsV0j47oXVW2v3YffCyQB10%2FbU3mJZBbfWaUsoVOD5wD7KSzycULVfsbYtQyFozp8%2F2QOWCIjrzhhDsNreRjWlpyYHJIQCHoJFgrNouXPg6N0hGar3scYwxff6wgY6pgEsfYMb8NHx1wm7jcm5ADCU072OJHZRhd%2FbKTzXjCEoKLIfQe5s511sfwjG9S1AGeLZDtsHzqYEtiYzLeDUeQYU5IJuMrYDM%2FilG0G73Gdz2G2O9ZoAmsaYNnxWJXtRGW0fV2aOAh8iEXBijUnGNCVF9vHYbXbs9a4saJaqW9nwmNuKL5ojZ2ovS5pmJoKH5aToGP9gvVoolmlU3BT8SwBySHI5Qs10&X-Amz-Signature=b1a3622fc09327c678b16fb8e1d977329c4c5b2ef9307c5da22c7001084bfade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNW5QNI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHDwh8EvQiBhaf%2Bo8WXIH5CZMQy2ZxkmY9qQFho9eKxAiAsbsQdfWSixfW8jnJZeq1FFX1AwQM0h%2BGnT5gb74bx5ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCA9GwdWIf1e3YP3jKtwD3UfbTZWPTKqmRU7WOISOrmSXKikHxV%2BCuOfC01pWTZ7bVVRSDXrXgdZwIqQkC0XU9DkxgZg%2B855M8NNVYUntyYOdEsY90AaSRUBk1Z1%2B7LNR0QNSxMs%2FQyEtx6kKEnnftsIIV%2FbH9k5M%2FS%2Fgp8wZ9NnAM5ZGoNK%2BddsoBEluSW9csVzITir5vCq2QaOiEmF3sbBIGuHEMU07TZ7ItfWV%2B1Uhv1t%2FSVMYZhWVZB7IwjQ8UChg9jo0UZwVJBV9mw919Bzs0GLq919Q4zGZHnHvx6TuQ12F6jknb%2BF6JfVLVp1v1I9HhivC%2F%2Fv1Gudn9OSCWSbvEmIKrIPBDrxyoQBbEhV2Hcw71XrStrHoFYuj8DTREk3jM7UK62Xmn1%2BIP6UOyJXsHlJHUX%2FI4uP0iXs4CnKiaWvaB1cbeSAn4KVfz%2BkgdXZaocuq3zK0Bh8N9AAsIUjCHukihHxmLVlJnDAqllGAKBomwAZULi6AnuL6T0KLJPVQEn9ARhfb%2F5FFnqY%2F4TsjcqJsV0j47oXVW2v3YffCyQB10%2FbU3mJZBbfWaUsoVOD5wD7KSzycULVfsbYtQyFozp8%2F2QOWCIjrzhhDsNreRjWlpyYHJIQCHoJFgrNouXPg6N0hGar3scYwxff6wgY6pgEsfYMb8NHx1wm7jcm5ADCU072OJHZRhd%2FbKTzXjCEoKLIfQe5s511sfwjG9S1AGeLZDtsHzqYEtiYzLeDUeQYU5IJuMrYDM%2FilG0G73Gdz2G2O9ZoAmsaYNnxWJXtRGW0fV2aOAh8iEXBijUnGNCVF9vHYbXbs9a4saJaqW9nwmNuKL5ojZ2ovS5pmJoKH5aToGP9gvVoolmlU3BT8SwBySHI5Qs10&X-Amz-Signature=a25f0b0cbd5f2b54c02a316f42bf0cead9f0205c782157a2d884d4c721f69607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNW5QNI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHDwh8EvQiBhaf%2Bo8WXIH5CZMQy2ZxkmY9qQFho9eKxAiAsbsQdfWSixfW8jnJZeq1FFX1AwQM0h%2BGnT5gb74bx5ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCA9GwdWIf1e3YP3jKtwD3UfbTZWPTKqmRU7WOISOrmSXKikHxV%2BCuOfC01pWTZ7bVVRSDXrXgdZwIqQkC0XU9DkxgZg%2B855M8NNVYUntyYOdEsY90AaSRUBk1Z1%2B7LNR0QNSxMs%2FQyEtx6kKEnnftsIIV%2FbH9k5M%2FS%2Fgp8wZ9NnAM5ZGoNK%2BddsoBEluSW9csVzITir5vCq2QaOiEmF3sbBIGuHEMU07TZ7ItfWV%2B1Uhv1t%2FSVMYZhWVZB7IwjQ8UChg9jo0UZwVJBV9mw919Bzs0GLq919Q4zGZHnHvx6TuQ12F6jknb%2BF6JfVLVp1v1I9HhivC%2F%2Fv1Gudn9OSCWSbvEmIKrIPBDrxyoQBbEhV2Hcw71XrStrHoFYuj8DTREk3jM7UK62Xmn1%2BIP6UOyJXsHlJHUX%2FI4uP0iXs4CnKiaWvaB1cbeSAn4KVfz%2BkgdXZaocuq3zK0Bh8N9AAsIUjCHukihHxmLVlJnDAqllGAKBomwAZULi6AnuL6T0KLJPVQEn9ARhfb%2F5FFnqY%2F4TsjcqJsV0j47oXVW2v3YffCyQB10%2FbU3mJZBbfWaUsoVOD5wD7KSzycULVfsbYtQyFozp8%2F2QOWCIjrzhhDsNreRjWlpyYHJIQCHoJFgrNouXPg6N0hGar3scYwxff6wgY6pgEsfYMb8NHx1wm7jcm5ADCU072OJHZRhd%2FbKTzXjCEoKLIfQe5s511sfwjG9S1AGeLZDtsHzqYEtiYzLeDUeQYU5IJuMrYDM%2FilG0G73Gdz2G2O9ZoAmsaYNnxWJXtRGW0fV2aOAh8iEXBijUnGNCVF9vHYbXbs9a4saJaqW9nwmNuKL5ojZ2ovS5pmJoKH5aToGP9gvVoolmlU3BT8SwBySHI5Qs10&X-Amz-Signature=a334cb622794170bb905f2f5a9cb41778ec96c973120b039c916d99ccf5e6b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNW5QNI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHDwh8EvQiBhaf%2Bo8WXIH5CZMQy2ZxkmY9qQFho9eKxAiAsbsQdfWSixfW8jnJZeq1FFX1AwQM0h%2BGnT5gb74bx5ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCA9GwdWIf1e3YP3jKtwD3UfbTZWPTKqmRU7WOISOrmSXKikHxV%2BCuOfC01pWTZ7bVVRSDXrXgdZwIqQkC0XU9DkxgZg%2B855M8NNVYUntyYOdEsY90AaSRUBk1Z1%2B7LNR0QNSxMs%2FQyEtx6kKEnnftsIIV%2FbH9k5M%2FS%2Fgp8wZ9NnAM5ZGoNK%2BddsoBEluSW9csVzITir5vCq2QaOiEmF3sbBIGuHEMU07TZ7ItfWV%2B1Uhv1t%2FSVMYZhWVZB7IwjQ8UChg9jo0UZwVJBV9mw919Bzs0GLq919Q4zGZHnHvx6TuQ12F6jknb%2BF6JfVLVp1v1I9HhivC%2F%2Fv1Gudn9OSCWSbvEmIKrIPBDrxyoQBbEhV2Hcw71XrStrHoFYuj8DTREk3jM7UK62Xmn1%2BIP6UOyJXsHlJHUX%2FI4uP0iXs4CnKiaWvaB1cbeSAn4KVfz%2BkgdXZaocuq3zK0Bh8N9AAsIUjCHukihHxmLVlJnDAqllGAKBomwAZULi6AnuL6T0KLJPVQEn9ARhfb%2F5FFnqY%2F4TsjcqJsV0j47oXVW2v3YffCyQB10%2FbU3mJZBbfWaUsoVOD5wD7KSzycULVfsbYtQyFozp8%2F2QOWCIjrzhhDsNreRjWlpyYHJIQCHoJFgrNouXPg6N0hGar3scYwxff6wgY6pgEsfYMb8NHx1wm7jcm5ADCU072OJHZRhd%2FbKTzXjCEoKLIfQe5s511sfwjG9S1AGeLZDtsHzqYEtiYzLeDUeQYU5IJuMrYDM%2FilG0G73Gdz2G2O9ZoAmsaYNnxWJXtRGW0fV2aOAh8iEXBijUnGNCVF9vHYbXbs9a4saJaqW9nwmNuKL5ojZ2ovS5pmJoKH5aToGP9gvVoolmlU3BT8SwBySHI5Qs10&X-Amz-Signature=d29331a48bc9b22d3bdd35ffdd0e658822bc99f754f95441f4e49a323657bffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNW5QNI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHDwh8EvQiBhaf%2Bo8WXIH5CZMQy2ZxkmY9qQFho9eKxAiAsbsQdfWSixfW8jnJZeq1FFX1AwQM0h%2BGnT5gb74bx5ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCA9GwdWIf1e3YP3jKtwD3UfbTZWPTKqmRU7WOISOrmSXKikHxV%2BCuOfC01pWTZ7bVVRSDXrXgdZwIqQkC0XU9DkxgZg%2B855M8NNVYUntyYOdEsY90AaSRUBk1Z1%2B7LNR0QNSxMs%2FQyEtx6kKEnnftsIIV%2FbH9k5M%2FS%2Fgp8wZ9NnAM5ZGoNK%2BddsoBEluSW9csVzITir5vCq2QaOiEmF3sbBIGuHEMU07TZ7ItfWV%2B1Uhv1t%2FSVMYZhWVZB7IwjQ8UChg9jo0UZwVJBV9mw919Bzs0GLq919Q4zGZHnHvx6TuQ12F6jknb%2BF6JfVLVp1v1I9HhivC%2F%2Fv1Gudn9OSCWSbvEmIKrIPBDrxyoQBbEhV2Hcw71XrStrHoFYuj8DTREk3jM7UK62Xmn1%2BIP6UOyJXsHlJHUX%2FI4uP0iXs4CnKiaWvaB1cbeSAn4KVfz%2BkgdXZaocuq3zK0Bh8N9AAsIUjCHukihHxmLVlJnDAqllGAKBomwAZULi6AnuL6T0KLJPVQEn9ARhfb%2F5FFnqY%2F4TsjcqJsV0j47oXVW2v3YffCyQB10%2FbU3mJZBbfWaUsoVOD5wD7KSzycULVfsbYtQyFozp8%2F2QOWCIjrzhhDsNreRjWlpyYHJIQCHoJFgrNouXPg6N0hGar3scYwxff6wgY6pgEsfYMb8NHx1wm7jcm5ADCU072OJHZRhd%2FbKTzXjCEoKLIfQe5s511sfwjG9S1AGeLZDtsHzqYEtiYzLeDUeQYU5IJuMrYDM%2FilG0G73Gdz2G2O9ZoAmsaYNnxWJXtRGW0fV2aOAh8iEXBijUnGNCVF9vHYbXbs9a4saJaqW9nwmNuKL5ojZ2ovS5pmJoKH5aToGP9gvVoolmlU3BT8SwBySHI5Qs10&X-Amz-Signature=22ecdb4ba5cf4bdd583fa455a568cb885e8d07cd46e0b432750364a2abe3c56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNW5QNI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHDwh8EvQiBhaf%2Bo8WXIH5CZMQy2ZxkmY9qQFho9eKxAiAsbsQdfWSixfW8jnJZeq1FFX1AwQM0h%2BGnT5gb74bx5ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCA9GwdWIf1e3YP3jKtwD3UfbTZWPTKqmRU7WOISOrmSXKikHxV%2BCuOfC01pWTZ7bVVRSDXrXgdZwIqQkC0XU9DkxgZg%2B855M8NNVYUntyYOdEsY90AaSRUBk1Z1%2B7LNR0QNSxMs%2FQyEtx6kKEnnftsIIV%2FbH9k5M%2FS%2Fgp8wZ9NnAM5ZGoNK%2BddsoBEluSW9csVzITir5vCq2QaOiEmF3sbBIGuHEMU07TZ7ItfWV%2B1Uhv1t%2FSVMYZhWVZB7IwjQ8UChg9jo0UZwVJBV9mw919Bzs0GLq919Q4zGZHnHvx6TuQ12F6jknb%2BF6JfVLVp1v1I9HhivC%2F%2Fv1Gudn9OSCWSbvEmIKrIPBDrxyoQBbEhV2Hcw71XrStrHoFYuj8DTREk3jM7UK62Xmn1%2BIP6UOyJXsHlJHUX%2FI4uP0iXs4CnKiaWvaB1cbeSAn4KVfz%2BkgdXZaocuq3zK0Bh8N9AAsIUjCHukihHxmLVlJnDAqllGAKBomwAZULi6AnuL6T0KLJPVQEn9ARhfb%2F5FFnqY%2F4TsjcqJsV0j47oXVW2v3YffCyQB10%2FbU3mJZBbfWaUsoVOD5wD7KSzycULVfsbYtQyFozp8%2F2QOWCIjrzhhDsNreRjWlpyYHJIQCHoJFgrNouXPg6N0hGar3scYwxff6wgY6pgEsfYMb8NHx1wm7jcm5ADCU072OJHZRhd%2FbKTzXjCEoKLIfQe5s511sfwjG9S1AGeLZDtsHzqYEtiYzLeDUeQYU5IJuMrYDM%2FilG0G73Gdz2G2O9ZoAmsaYNnxWJXtRGW0fV2aOAh8iEXBijUnGNCVF9vHYbXbs9a4saJaqW9nwmNuKL5ojZ2ovS5pmJoKH5aToGP9gvVoolmlU3BT8SwBySHI5Qs10&X-Amz-Signature=3bedfb253561ed7790587e16ea9560187aca76144e2d3c711494891afcd015a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

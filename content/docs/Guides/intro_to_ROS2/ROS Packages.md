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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DK6GEEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFtaKgjjfDt36kzq3OIBjte%2BFpDBOwJ0kZ91K%2BtWp4XAiBLthAvNA1EpvpJ27gwV8b%2BKESSSSDr9%2F%2BZ8M7HCVxF3SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzGSZmXcKFOG6T3P8KtwD0Rid%2FPJH%2Fu2Mk4N4EbZfQjU%2BMBHjT9jz%2Fe98tjvZ0gsArJGh5wykObQ0hdTKZ4MbhHNdWn3rmU0dGJrPH5PzQIT5%2BaFYauXr1DO2bEf5uZfLseqR6FjO3DxmZOvGUyA%2Fq6jxHF1IqGEKWa7cW8pzdagdNzjHyN6x%2B40bJGqiEcHHZhwZEV2zqMflMYC%2BVnV0FlXa0ecCptWPiGZe5EVj9EDaBZ7aM7qP2adkVcG%2FQypysaFVfQk9SxPb3ZSpQtFrl6aLMxeSwUDg6U8vWjgFjNjEO%2FkX%2BI6%2FB0fzEVX9ul3CVpsZOL54wJsU%2Boh0iCYvBJlLG6qy6wf4ZZpv3BBQt6Wko4XUAt%2Fe3S%2BZOTaMHKU%2Fc%2BUQWeau7XWPDtMzxfEKXYITN%2F1D9tWeHwqn4%2FbRxyS4y8rNsPw3ut0SpgTjd%2FfNnaCrvEi%2FKorhnHRyM1mA4DkhzWUtGu9voUn5E0VxERHPHFG5lOVa9Izvz9nkwNrkPgBay1HsiNeLczlufvsy9ZLvaKf0zV%2B0iCzLEo14pH7%2BnB5jVo4B%2BEDCvgDkw1TwGpQ4x2lNy7qFgf9XTOyxGuDJTCNIih2JfHpbzwVgN0oGDaEltJFCdCavIB3zPJA1%2FX2fp8uNnBybUjAwsvfMwgY6pgFiahrwAaEFj5gZAJT%2BUsjSId1Df0Lv9LMCbe7mz4rQ9u7RzWBuipax2q7%2BBuWR94KKG%2FDj4DIxa9kiX6QQo%2F%2BTeA%2B3q6SCST4hjxQz20pBqf1%2F8cP%2BlAkzvJDP3kG59qK22n%2FbsDrCsFN0q8TNP%2BZSXBhvNiM5ITuY0fjXlRFOCBA297YhORagFRLz3JDtg3RcDF6D5LXpbpGngT%2B5Du%2Fi4GqyLqEo&X-Amz-Signature=bd76c0532f36320aa44d86cf7c2116e15c24c91dddec9bd4a2602a06ed77b148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DK6GEEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFtaKgjjfDt36kzq3OIBjte%2BFpDBOwJ0kZ91K%2BtWp4XAiBLthAvNA1EpvpJ27gwV8b%2BKESSSSDr9%2F%2BZ8M7HCVxF3SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzGSZmXcKFOG6T3P8KtwD0Rid%2FPJH%2Fu2Mk4N4EbZfQjU%2BMBHjT9jz%2Fe98tjvZ0gsArJGh5wykObQ0hdTKZ4MbhHNdWn3rmU0dGJrPH5PzQIT5%2BaFYauXr1DO2bEf5uZfLseqR6FjO3DxmZOvGUyA%2Fq6jxHF1IqGEKWa7cW8pzdagdNzjHyN6x%2B40bJGqiEcHHZhwZEV2zqMflMYC%2BVnV0FlXa0ecCptWPiGZe5EVj9EDaBZ7aM7qP2adkVcG%2FQypysaFVfQk9SxPb3ZSpQtFrl6aLMxeSwUDg6U8vWjgFjNjEO%2FkX%2BI6%2FB0fzEVX9ul3CVpsZOL54wJsU%2Boh0iCYvBJlLG6qy6wf4ZZpv3BBQt6Wko4XUAt%2Fe3S%2BZOTaMHKU%2Fc%2BUQWeau7XWPDtMzxfEKXYITN%2F1D9tWeHwqn4%2FbRxyS4y8rNsPw3ut0SpgTjd%2FfNnaCrvEi%2FKorhnHRyM1mA4DkhzWUtGu9voUn5E0VxERHPHFG5lOVa9Izvz9nkwNrkPgBay1HsiNeLczlufvsy9ZLvaKf0zV%2B0iCzLEo14pH7%2BnB5jVo4B%2BEDCvgDkw1TwGpQ4x2lNy7qFgf9XTOyxGuDJTCNIih2JfHpbzwVgN0oGDaEltJFCdCavIB3zPJA1%2FX2fp8uNnBybUjAwsvfMwgY6pgFiahrwAaEFj5gZAJT%2BUsjSId1Df0Lv9LMCbe7mz4rQ9u7RzWBuipax2q7%2BBuWR94KKG%2FDj4DIxa9kiX6QQo%2F%2BTeA%2B3q6SCST4hjxQz20pBqf1%2F8cP%2BlAkzvJDP3kG59qK22n%2FbsDrCsFN0q8TNP%2BZSXBhvNiM5ITuY0fjXlRFOCBA297YhORagFRLz3JDtg3RcDF6D5LXpbpGngT%2B5Du%2Fi4GqyLqEo&X-Amz-Signature=00cc5bf4c04fc1ede3e2b75eb6424c6fb2f279db782ff5d0308842fde8fd9c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DK6GEEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFtaKgjjfDt36kzq3OIBjte%2BFpDBOwJ0kZ91K%2BtWp4XAiBLthAvNA1EpvpJ27gwV8b%2BKESSSSDr9%2F%2BZ8M7HCVxF3SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzGSZmXcKFOG6T3P8KtwD0Rid%2FPJH%2Fu2Mk4N4EbZfQjU%2BMBHjT9jz%2Fe98tjvZ0gsArJGh5wykObQ0hdTKZ4MbhHNdWn3rmU0dGJrPH5PzQIT5%2BaFYauXr1DO2bEf5uZfLseqR6FjO3DxmZOvGUyA%2Fq6jxHF1IqGEKWa7cW8pzdagdNzjHyN6x%2B40bJGqiEcHHZhwZEV2zqMflMYC%2BVnV0FlXa0ecCptWPiGZe5EVj9EDaBZ7aM7qP2adkVcG%2FQypysaFVfQk9SxPb3ZSpQtFrl6aLMxeSwUDg6U8vWjgFjNjEO%2FkX%2BI6%2FB0fzEVX9ul3CVpsZOL54wJsU%2Boh0iCYvBJlLG6qy6wf4ZZpv3BBQt6Wko4XUAt%2Fe3S%2BZOTaMHKU%2Fc%2BUQWeau7XWPDtMzxfEKXYITN%2F1D9tWeHwqn4%2FbRxyS4y8rNsPw3ut0SpgTjd%2FfNnaCrvEi%2FKorhnHRyM1mA4DkhzWUtGu9voUn5E0VxERHPHFG5lOVa9Izvz9nkwNrkPgBay1HsiNeLczlufvsy9ZLvaKf0zV%2B0iCzLEo14pH7%2BnB5jVo4B%2BEDCvgDkw1TwGpQ4x2lNy7qFgf9XTOyxGuDJTCNIih2JfHpbzwVgN0oGDaEltJFCdCavIB3zPJA1%2FX2fp8uNnBybUjAwsvfMwgY6pgFiahrwAaEFj5gZAJT%2BUsjSId1Df0Lv9LMCbe7mz4rQ9u7RzWBuipax2q7%2BBuWR94KKG%2FDj4DIxa9kiX6QQo%2F%2BTeA%2B3q6SCST4hjxQz20pBqf1%2F8cP%2BlAkzvJDP3kG59qK22n%2FbsDrCsFN0q8TNP%2BZSXBhvNiM5ITuY0fjXlRFOCBA297YhORagFRLz3JDtg3RcDF6D5LXpbpGngT%2B5Du%2Fi4GqyLqEo&X-Amz-Signature=27c5bf50fb45870b77f2b0ee4d4b73815aad8c7f190dbb62b1a4045c649a37ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DK6GEEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFtaKgjjfDt36kzq3OIBjte%2BFpDBOwJ0kZ91K%2BtWp4XAiBLthAvNA1EpvpJ27gwV8b%2BKESSSSDr9%2F%2BZ8M7HCVxF3SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzGSZmXcKFOG6T3P8KtwD0Rid%2FPJH%2Fu2Mk4N4EbZfQjU%2BMBHjT9jz%2Fe98tjvZ0gsArJGh5wykObQ0hdTKZ4MbhHNdWn3rmU0dGJrPH5PzQIT5%2BaFYauXr1DO2bEf5uZfLseqR6FjO3DxmZOvGUyA%2Fq6jxHF1IqGEKWa7cW8pzdagdNzjHyN6x%2B40bJGqiEcHHZhwZEV2zqMflMYC%2BVnV0FlXa0ecCptWPiGZe5EVj9EDaBZ7aM7qP2adkVcG%2FQypysaFVfQk9SxPb3ZSpQtFrl6aLMxeSwUDg6U8vWjgFjNjEO%2FkX%2BI6%2FB0fzEVX9ul3CVpsZOL54wJsU%2Boh0iCYvBJlLG6qy6wf4ZZpv3BBQt6Wko4XUAt%2Fe3S%2BZOTaMHKU%2Fc%2BUQWeau7XWPDtMzxfEKXYITN%2F1D9tWeHwqn4%2FbRxyS4y8rNsPw3ut0SpgTjd%2FfNnaCrvEi%2FKorhnHRyM1mA4DkhzWUtGu9voUn5E0VxERHPHFG5lOVa9Izvz9nkwNrkPgBay1HsiNeLczlufvsy9ZLvaKf0zV%2B0iCzLEo14pH7%2BnB5jVo4B%2BEDCvgDkw1TwGpQ4x2lNy7qFgf9XTOyxGuDJTCNIih2JfHpbzwVgN0oGDaEltJFCdCavIB3zPJA1%2FX2fp8uNnBybUjAwsvfMwgY6pgFiahrwAaEFj5gZAJT%2BUsjSId1Df0Lv9LMCbe7mz4rQ9u7RzWBuipax2q7%2BBuWR94KKG%2FDj4DIxa9kiX6QQo%2F%2BTeA%2B3q6SCST4hjxQz20pBqf1%2F8cP%2BlAkzvJDP3kG59qK22n%2FbsDrCsFN0q8TNP%2BZSXBhvNiM5ITuY0fjXlRFOCBA297YhORagFRLz3JDtg3RcDF6D5LXpbpGngT%2B5Du%2Fi4GqyLqEo&X-Amz-Signature=40bff94e20a033f8de84bd62454dfbde898e6af369753f6751dd7d5e16d44b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DK6GEEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFtaKgjjfDt36kzq3OIBjte%2BFpDBOwJ0kZ91K%2BtWp4XAiBLthAvNA1EpvpJ27gwV8b%2BKESSSSDr9%2F%2BZ8M7HCVxF3SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzGSZmXcKFOG6T3P8KtwD0Rid%2FPJH%2Fu2Mk4N4EbZfQjU%2BMBHjT9jz%2Fe98tjvZ0gsArJGh5wykObQ0hdTKZ4MbhHNdWn3rmU0dGJrPH5PzQIT5%2BaFYauXr1DO2bEf5uZfLseqR6FjO3DxmZOvGUyA%2Fq6jxHF1IqGEKWa7cW8pzdagdNzjHyN6x%2B40bJGqiEcHHZhwZEV2zqMflMYC%2BVnV0FlXa0ecCptWPiGZe5EVj9EDaBZ7aM7qP2adkVcG%2FQypysaFVfQk9SxPb3ZSpQtFrl6aLMxeSwUDg6U8vWjgFjNjEO%2FkX%2BI6%2FB0fzEVX9ul3CVpsZOL54wJsU%2Boh0iCYvBJlLG6qy6wf4ZZpv3BBQt6Wko4XUAt%2Fe3S%2BZOTaMHKU%2Fc%2BUQWeau7XWPDtMzxfEKXYITN%2F1D9tWeHwqn4%2FbRxyS4y8rNsPw3ut0SpgTjd%2FfNnaCrvEi%2FKorhnHRyM1mA4DkhzWUtGu9voUn5E0VxERHPHFG5lOVa9Izvz9nkwNrkPgBay1HsiNeLczlufvsy9ZLvaKf0zV%2B0iCzLEo14pH7%2BnB5jVo4B%2BEDCvgDkw1TwGpQ4x2lNy7qFgf9XTOyxGuDJTCNIih2JfHpbzwVgN0oGDaEltJFCdCavIB3zPJA1%2FX2fp8uNnBybUjAwsvfMwgY6pgFiahrwAaEFj5gZAJT%2BUsjSId1Df0Lv9LMCbe7mz4rQ9u7RzWBuipax2q7%2BBuWR94KKG%2FDj4DIxa9kiX6QQo%2F%2BTeA%2B3q6SCST4hjxQz20pBqf1%2F8cP%2BlAkzvJDP3kG59qK22n%2FbsDrCsFN0q8TNP%2BZSXBhvNiM5ITuY0fjXlRFOCBA297YhORagFRLz3JDtg3RcDF6D5LXpbpGngT%2B5Du%2Fi4GqyLqEo&X-Amz-Signature=cb02cc81e09d4ffd2867f9002f5621eec1fe8a6ca76bf88c3d37b715b893f41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DK6GEEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFtaKgjjfDt36kzq3OIBjte%2BFpDBOwJ0kZ91K%2BtWp4XAiBLthAvNA1EpvpJ27gwV8b%2BKESSSSDr9%2F%2BZ8M7HCVxF3SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzGSZmXcKFOG6T3P8KtwD0Rid%2FPJH%2Fu2Mk4N4EbZfQjU%2BMBHjT9jz%2Fe98tjvZ0gsArJGh5wykObQ0hdTKZ4MbhHNdWn3rmU0dGJrPH5PzQIT5%2BaFYauXr1DO2bEf5uZfLseqR6FjO3DxmZOvGUyA%2Fq6jxHF1IqGEKWa7cW8pzdagdNzjHyN6x%2B40bJGqiEcHHZhwZEV2zqMflMYC%2BVnV0FlXa0ecCptWPiGZe5EVj9EDaBZ7aM7qP2adkVcG%2FQypysaFVfQk9SxPb3ZSpQtFrl6aLMxeSwUDg6U8vWjgFjNjEO%2FkX%2BI6%2FB0fzEVX9ul3CVpsZOL54wJsU%2Boh0iCYvBJlLG6qy6wf4ZZpv3BBQt6Wko4XUAt%2Fe3S%2BZOTaMHKU%2Fc%2BUQWeau7XWPDtMzxfEKXYITN%2F1D9tWeHwqn4%2FbRxyS4y8rNsPw3ut0SpgTjd%2FfNnaCrvEi%2FKorhnHRyM1mA4DkhzWUtGu9voUn5E0VxERHPHFG5lOVa9Izvz9nkwNrkPgBay1HsiNeLczlufvsy9ZLvaKf0zV%2B0iCzLEo14pH7%2BnB5jVo4B%2BEDCvgDkw1TwGpQ4x2lNy7qFgf9XTOyxGuDJTCNIih2JfHpbzwVgN0oGDaEltJFCdCavIB3zPJA1%2FX2fp8uNnBybUjAwsvfMwgY6pgFiahrwAaEFj5gZAJT%2BUsjSId1Df0Lv9LMCbe7mz4rQ9u7RzWBuipax2q7%2BBuWR94KKG%2FDj4DIxa9kiX6QQo%2F%2BTeA%2B3q6SCST4hjxQz20pBqf1%2F8cP%2BlAkzvJDP3kG59qK22n%2FbsDrCsFN0q8TNP%2BZSXBhvNiM5ITuY0fjXlRFOCBA297YhORagFRLz3JDtg3RcDF6D5LXpbpGngT%2B5Du%2Fi4GqyLqEo&X-Amz-Signature=c45fe0c2dd93d49fbe5813d0c1dcb66c6ebf674b635ff1968893050dda976db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DK6GEEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFtaKgjjfDt36kzq3OIBjte%2BFpDBOwJ0kZ91K%2BtWp4XAiBLthAvNA1EpvpJ27gwV8b%2BKESSSSDr9%2F%2BZ8M7HCVxF3SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzGSZmXcKFOG6T3P8KtwD0Rid%2FPJH%2Fu2Mk4N4EbZfQjU%2BMBHjT9jz%2Fe98tjvZ0gsArJGh5wykObQ0hdTKZ4MbhHNdWn3rmU0dGJrPH5PzQIT5%2BaFYauXr1DO2bEf5uZfLseqR6FjO3DxmZOvGUyA%2Fq6jxHF1IqGEKWa7cW8pzdagdNzjHyN6x%2B40bJGqiEcHHZhwZEV2zqMflMYC%2BVnV0FlXa0ecCptWPiGZe5EVj9EDaBZ7aM7qP2adkVcG%2FQypysaFVfQk9SxPb3ZSpQtFrl6aLMxeSwUDg6U8vWjgFjNjEO%2FkX%2BI6%2FB0fzEVX9ul3CVpsZOL54wJsU%2Boh0iCYvBJlLG6qy6wf4ZZpv3BBQt6Wko4XUAt%2Fe3S%2BZOTaMHKU%2Fc%2BUQWeau7XWPDtMzxfEKXYITN%2F1D9tWeHwqn4%2FbRxyS4y8rNsPw3ut0SpgTjd%2FfNnaCrvEi%2FKorhnHRyM1mA4DkhzWUtGu9voUn5E0VxERHPHFG5lOVa9Izvz9nkwNrkPgBay1HsiNeLczlufvsy9ZLvaKf0zV%2B0iCzLEo14pH7%2BnB5jVo4B%2BEDCvgDkw1TwGpQ4x2lNy7qFgf9XTOyxGuDJTCNIih2JfHpbzwVgN0oGDaEltJFCdCavIB3zPJA1%2FX2fp8uNnBybUjAwsvfMwgY6pgFiahrwAaEFj5gZAJT%2BUsjSId1Df0Lv9LMCbe7mz4rQ9u7RzWBuipax2q7%2BBuWR94KKG%2FDj4DIxa9kiX6QQo%2F%2BTeA%2B3q6SCST4hjxQz20pBqf1%2F8cP%2BlAkzvJDP3kG59qK22n%2FbsDrCsFN0q8TNP%2BZSXBhvNiM5ITuY0fjXlRFOCBA297YhORagFRLz3JDtg3RcDF6D5LXpbpGngT%2B5Du%2Fi4GqyLqEo&X-Amz-Signature=c87247100da094eb17ad0c1590288e873369c969f9d108157c1849d46ac46841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

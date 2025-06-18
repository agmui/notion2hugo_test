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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYC6VSS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi1qFerepga5fL%2Bk2pKiCsbfmpMrJgXcm2rUKy5BKvDgIhAJA8Bu2s%2BSO2xSTQfbvNpmw1OOHOtw1MCyxd7%2FH5dIyfKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUiUYNoSnsujyCYFgq3AM9Oat3icF9NxCgT0ycqpVXu6m8W4%2BroOTUmQdleRX1BwXUp6SBtObBonXYRAn5jfXvfP0w4ISdSqnei81d8yCYgB%2F7dy%2FtXsaTPGnD0vaqPq%2BmBHsZd1WsflvBot%2FfGcJMtX1ueX%2FvkkvkpNR%2Fdr6xQhLs6XK7hzU7A4arffjLcsj59tZYExdPjSDCK1Xs%2Bacd58fcru1CSxLb4qrsJx7m19gj6Hk3Z%2FXp7XrDVQOu34kdDHQBAGUn1uVjyXNFOnQslXL9lTIgMOnfsFZ0pyt1%2B3%2BVydjQ%2BWKNbW3SFsO32p9GIIC7aPYEpnoeRVNu6nsy13XMFSeoyQpUGHqnxvCF%2Bp8FzDqndAd%2BFLBhjjQVOd86tnQ0Pl1oMjIhpSKG2iXWtOCbvFzYOM9o5ubT7ggKhtfx6ZtcAwC%2BAKONGTNFKWszAjB5iW3v%2Fka%2FXosEccbiFgx0Lpwtz0J1jN4zDyjaZZRXLmbIKZZdUTOuwT67tQh2cBOF2620IqFwDjdPuMG6mIFRWNp3SouOUikvoYWygDRCN38gpTpm2eU5YI5UBAfjA8sjrAHHELI8LJ6IHNd4FQS3xj8lsUAyoAVQETbI9RwX04kj3B7eWzV579AGSdh6VtKw%2BCoOVIMzrzCjocjCBjqkAWS4Yqs0EL0eohHK8fM2ZIFmpKhbMnWEcbbuYjr3jmqakXm%2FjxZNnZeZ8G4iHfXsH0afPOMzl3sdRiiJ7PXkVmGLLJiazbf4Vn2b9zp6628PsAls5t1ba9AfVPCeZdc1c%2FQVQNjelWGhxYmPNVpEbkmWBFylxoeTzI9D%2FYjHyRFzxNg5f4aQpFrTdg7ZtHdoBbun%2Fu8tJU1yZxb%2FELMkgF%2BnGAcN&X-Amz-Signature=aa2a4e1916be0940678fc11ed9a40005d2a4a1b0d5a8b2f4fa70c80013942212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYC6VSS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi1qFerepga5fL%2Bk2pKiCsbfmpMrJgXcm2rUKy5BKvDgIhAJA8Bu2s%2BSO2xSTQfbvNpmw1OOHOtw1MCyxd7%2FH5dIyfKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUiUYNoSnsujyCYFgq3AM9Oat3icF9NxCgT0ycqpVXu6m8W4%2BroOTUmQdleRX1BwXUp6SBtObBonXYRAn5jfXvfP0w4ISdSqnei81d8yCYgB%2F7dy%2FtXsaTPGnD0vaqPq%2BmBHsZd1WsflvBot%2FfGcJMtX1ueX%2FvkkvkpNR%2Fdr6xQhLs6XK7hzU7A4arffjLcsj59tZYExdPjSDCK1Xs%2Bacd58fcru1CSxLb4qrsJx7m19gj6Hk3Z%2FXp7XrDVQOu34kdDHQBAGUn1uVjyXNFOnQslXL9lTIgMOnfsFZ0pyt1%2B3%2BVydjQ%2BWKNbW3SFsO32p9GIIC7aPYEpnoeRVNu6nsy13XMFSeoyQpUGHqnxvCF%2Bp8FzDqndAd%2BFLBhjjQVOd86tnQ0Pl1oMjIhpSKG2iXWtOCbvFzYOM9o5ubT7ggKhtfx6ZtcAwC%2BAKONGTNFKWszAjB5iW3v%2Fka%2FXosEccbiFgx0Lpwtz0J1jN4zDyjaZZRXLmbIKZZdUTOuwT67tQh2cBOF2620IqFwDjdPuMG6mIFRWNp3SouOUikvoYWygDRCN38gpTpm2eU5YI5UBAfjA8sjrAHHELI8LJ6IHNd4FQS3xj8lsUAyoAVQETbI9RwX04kj3B7eWzV579AGSdh6VtKw%2BCoOVIMzrzCjocjCBjqkAWS4Yqs0EL0eohHK8fM2ZIFmpKhbMnWEcbbuYjr3jmqakXm%2FjxZNnZeZ8G4iHfXsH0afPOMzl3sdRiiJ7PXkVmGLLJiazbf4Vn2b9zp6628PsAls5t1ba9AfVPCeZdc1c%2FQVQNjelWGhxYmPNVpEbkmWBFylxoeTzI9D%2FYjHyRFzxNg5f4aQpFrTdg7ZtHdoBbun%2Fu8tJU1yZxb%2FELMkgF%2BnGAcN&X-Amz-Signature=63486215e15ef3dd607d893c817e6be6fd9acccf8eafcd5db86301e4e99c53b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYC6VSS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi1qFerepga5fL%2Bk2pKiCsbfmpMrJgXcm2rUKy5BKvDgIhAJA8Bu2s%2BSO2xSTQfbvNpmw1OOHOtw1MCyxd7%2FH5dIyfKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUiUYNoSnsujyCYFgq3AM9Oat3icF9NxCgT0ycqpVXu6m8W4%2BroOTUmQdleRX1BwXUp6SBtObBonXYRAn5jfXvfP0w4ISdSqnei81d8yCYgB%2F7dy%2FtXsaTPGnD0vaqPq%2BmBHsZd1WsflvBot%2FfGcJMtX1ueX%2FvkkvkpNR%2Fdr6xQhLs6XK7hzU7A4arffjLcsj59tZYExdPjSDCK1Xs%2Bacd58fcru1CSxLb4qrsJx7m19gj6Hk3Z%2FXp7XrDVQOu34kdDHQBAGUn1uVjyXNFOnQslXL9lTIgMOnfsFZ0pyt1%2B3%2BVydjQ%2BWKNbW3SFsO32p9GIIC7aPYEpnoeRVNu6nsy13XMFSeoyQpUGHqnxvCF%2Bp8FzDqndAd%2BFLBhjjQVOd86tnQ0Pl1oMjIhpSKG2iXWtOCbvFzYOM9o5ubT7ggKhtfx6ZtcAwC%2BAKONGTNFKWszAjB5iW3v%2Fka%2FXosEccbiFgx0Lpwtz0J1jN4zDyjaZZRXLmbIKZZdUTOuwT67tQh2cBOF2620IqFwDjdPuMG6mIFRWNp3SouOUikvoYWygDRCN38gpTpm2eU5YI5UBAfjA8sjrAHHELI8LJ6IHNd4FQS3xj8lsUAyoAVQETbI9RwX04kj3B7eWzV579AGSdh6VtKw%2BCoOVIMzrzCjocjCBjqkAWS4Yqs0EL0eohHK8fM2ZIFmpKhbMnWEcbbuYjr3jmqakXm%2FjxZNnZeZ8G4iHfXsH0afPOMzl3sdRiiJ7PXkVmGLLJiazbf4Vn2b9zp6628PsAls5t1ba9AfVPCeZdc1c%2FQVQNjelWGhxYmPNVpEbkmWBFylxoeTzI9D%2FYjHyRFzxNg5f4aQpFrTdg7ZtHdoBbun%2Fu8tJU1yZxb%2FELMkgF%2BnGAcN&X-Amz-Signature=eac110bdc40fe0504fa4dcc35be50ab39f2c2ee90ebd68f5d7c3c863c59e83e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYC6VSS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi1qFerepga5fL%2Bk2pKiCsbfmpMrJgXcm2rUKy5BKvDgIhAJA8Bu2s%2BSO2xSTQfbvNpmw1OOHOtw1MCyxd7%2FH5dIyfKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUiUYNoSnsujyCYFgq3AM9Oat3icF9NxCgT0ycqpVXu6m8W4%2BroOTUmQdleRX1BwXUp6SBtObBonXYRAn5jfXvfP0w4ISdSqnei81d8yCYgB%2F7dy%2FtXsaTPGnD0vaqPq%2BmBHsZd1WsflvBot%2FfGcJMtX1ueX%2FvkkvkpNR%2Fdr6xQhLs6XK7hzU7A4arffjLcsj59tZYExdPjSDCK1Xs%2Bacd58fcru1CSxLb4qrsJx7m19gj6Hk3Z%2FXp7XrDVQOu34kdDHQBAGUn1uVjyXNFOnQslXL9lTIgMOnfsFZ0pyt1%2B3%2BVydjQ%2BWKNbW3SFsO32p9GIIC7aPYEpnoeRVNu6nsy13XMFSeoyQpUGHqnxvCF%2Bp8FzDqndAd%2BFLBhjjQVOd86tnQ0Pl1oMjIhpSKG2iXWtOCbvFzYOM9o5ubT7ggKhtfx6ZtcAwC%2BAKONGTNFKWszAjB5iW3v%2Fka%2FXosEccbiFgx0Lpwtz0J1jN4zDyjaZZRXLmbIKZZdUTOuwT67tQh2cBOF2620IqFwDjdPuMG6mIFRWNp3SouOUikvoYWygDRCN38gpTpm2eU5YI5UBAfjA8sjrAHHELI8LJ6IHNd4FQS3xj8lsUAyoAVQETbI9RwX04kj3B7eWzV579AGSdh6VtKw%2BCoOVIMzrzCjocjCBjqkAWS4Yqs0EL0eohHK8fM2ZIFmpKhbMnWEcbbuYjr3jmqakXm%2FjxZNnZeZ8G4iHfXsH0afPOMzl3sdRiiJ7PXkVmGLLJiazbf4Vn2b9zp6628PsAls5t1ba9AfVPCeZdc1c%2FQVQNjelWGhxYmPNVpEbkmWBFylxoeTzI9D%2FYjHyRFzxNg5f4aQpFrTdg7ZtHdoBbun%2Fu8tJU1yZxb%2FELMkgF%2BnGAcN&X-Amz-Signature=6f71f59e175c89dfd8145ccea0bdeb913c719fffc7f6e3c4b2bde616eb60b6ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYC6VSS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi1qFerepga5fL%2Bk2pKiCsbfmpMrJgXcm2rUKy5BKvDgIhAJA8Bu2s%2BSO2xSTQfbvNpmw1OOHOtw1MCyxd7%2FH5dIyfKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUiUYNoSnsujyCYFgq3AM9Oat3icF9NxCgT0ycqpVXu6m8W4%2BroOTUmQdleRX1BwXUp6SBtObBonXYRAn5jfXvfP0w4ISdSqnei81d8yCYgB%2F7dy%2FtXsaTPGnD0vaqPq%2BmBHsZd1WsflvBot%2FfGcJMtX1ueX%2FvkkvkpNR%2Fdr6xQhLs6XK7hzU7A4arffjLcsj59tZYExdPjSDCK1Xs%2Bacd58fcru1CSxLb4qrsJx7m19gj6Hk3Z%2FXp7XrDVQOu34kdDHQBAGUn1uVjyXNFOnQslXL9lTIgMOnfsFZ0pyt1%2B3%2BVydjQ%2BWKNbW3SFsO32p9GIIC7aPYEpnoeRVNu6nsy13XMFSeoyQpUGHqnxvCF%2Bp8FzDqndAd%2BFLBhjjQVOd86tnQ0Pl1oMjIhpSKG2iXWtOCbvFzYOM9o5ubT7ggKhtfx6ZtcAwC%2BAKONGTNFKWszAjB5iW3v%2Fka%2FXosEccbiFgx0Lpwtz0J1jN4zDyjaZZRXLmbIKZZdUTOuwT67tQh2cBOF2620IqFwDjdPuMG6mIFRWNp3SouOUikvoYWygDRCN38gpTpm2eU5YI5UBAfjA8sjrAHHELI8LJ6IHNd4FQS3xj8lsUAyoAVQETbI9RwX04kj3B7eWzV579AGSdh6VtKw%2BCoOVIMzrzCjocjCBjqkAWS4Yqs0EL0eohHK8fM2ZIFmpKhbMnWEcbbuYjr3jmqakXm%2FjxZNnZeZ8G4iHfXsH0afPOMzl3sdRiiJ7PXkVmGLLJiazbf4Vn2b9zp6628PsAls5t1ba9AfVPCeZdc1c%2FQVQNjelWGhxYmPNVpEbkmWBFylxoeTzI9D%2FYjHyRFzxNg5f4aQpFrTdg7ZtHdoBbun%2Fu8tJU1yZxb%2FELMkgF%2BnGAcN&X-Amz-Signature=58bc3bb77dd096047d68716f2dcf7e2a40caa786d4079bce457f0c9413a46b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYC6VSS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi1qFerepga5fL%2Bk2pKiCsbfmpMrJgXcm2rUKy5BKvDgIhAJA8Bu2s%2BSO2xSTQfbvNpmw1OOHOtw1MCyxd7%2FH5dIyfKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUiUYNoSnsujyCYFgq3AM9Oat3icF9NxCgT0ycqpVXu6m8W4%2BroOTUmQdleRX1BwXUp6SBtObBonXYRAn5jfXvfP0w4ISdSqnei81d8yCYgB%2F7dy%2FtXsaTPGnD0vaqPq%2BmBHsZd1WsflvBot%2FfGcJMtX1ueX%2FvkkvkpNR%2Fdr6xQhLs6XK7hzU7A4arffjLcsj59tZYExdPjSDCK1Xs%2Bacd58fcru1CSxLb4qrsJx7m19gj6Hk3Z%2FXp7XrDVQOu34kdDHQBAGUn1uVjyXNFOnQslXL9lTIgMOnfsFZ0pyt1%2B3%2BVydjQ%2BWKNbW3SFsO32p9GIIC7aPYEpnoeRVNu6nsy13XMFSeoyQpUGHqnxvCF%2Bp8FzDqndAd%2BFLBhjjQVOd86tnQ0Pl1oMjIhpSKG2iXWtOCbvFzYOM9o5ubT7ggKhtfx6ZtcAwC%2BAKONGTNFKWszAjB5iW3v%2Fka%2FXosEccbiFgx0Lpwtz0J1jN4zDyjaZZRXLmbIKZZdUTOuwT67tQh2cBOF2620IqFwDjdPuMG6mIFRWNp3SouOUikvoYWygDRCN38gpTpm2eU5YI5UBAfjA8sjrAHHELI8LJ6IHNd4FQS3xj8lsUAyoAVQETbI9RwX04kj3B7eWzV579AGSdh6VtKw%2BCoOVIMzrzCjocjCBjqkAWS4Yqs0EL0eohHK8fM2ZIFmpKhbMnWEcbbuYjr3jmqakXm%2FjxZNnZeZ8G4iHfXsH0afPOMzl3sdRiiJ7PXkVmGLLJiazbf4Vn2b9zp6628PsAls5t1ba9AfVPCeZdc1c%2FQVQNjelWGhxYmPNVpEbkmWBFylxoeTzI9D%2FYjHyRFzxNg5f4aQpFrTdg7ZtHdoBbun%2Fu8tJU1yZxb%2FELMkgF%2BnGAcN&X-Amz-Signature=77ae1c6dfd6d1a30acb9cd1ab998dfc82ad9ac5ec7ab0d481fa6ad273c160632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYC6VSS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi1qFerepga5fL%2Bk2pKiCsbfmpMrJgXcm2rUKy5BKvDgIhAJA8Bu2s%2BSO2xSTQfbvNpmw1OOHOtw1MCyxd7%2FH5dIyfKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUiUYNoSnsujyCYFgq3AM9Oat3icF9NxCgT0ycqpVXu6m8W4%2BroOTUmQdleRX1BwXUp6SBtObBonXYRAn5jfXvfP0w4ISdSqnei81d8yCYgB%2F7dy%2FtXsaTPGnD0vaqPq%2BmBHsZd1WsflvBot%2FfGcJMtX1ueX%2FvkkvkpNR%2Fdr6xQhLs6XK7hzU7A4arffjLcsj59tZYExdPjSDCK1Xs%2Bacd58fcru1CSxLb4qrsJx7m19gj6Hk3Z%2FXp7XrDVQOu34kdDHQBAGUn1uVjyXNFOnQslXL9lTIgMOnfsFZ0pyt1%2B3%2BVydjQ%2BWKNbW3SFsO32p9GIIC7aPYEpnoeRVNu6nsy13XMFSeoyQpUGHqnxvCF%2Bp8FzDqndAd%2BFLBhjjQVOd86tnQ0Pl1oMjIhpSKG2iXWtOCbvFzYOM9o5ubT7ggKhtfx6ZtcAwC%2BAKONGTNFKWszAjB5iW3v%2Fka%2FXosEccbiFgx0Lpwtz0J1jN4zDyjaZZRXLmbIKZZdUTOuwT67tQh2cBOF2620IqFwDjdPuMG6mIFRWNp3SouOUikvoYWygDRCN38gpTpm2eU5YI5UBAfjA8sjrAHHELI8LJ6IHNd4FQS3xj8lsUAyoAVQETbI9RwX04kj3B7eWzV579AGSdh6VtKw%2BCoOVIMzrzCjocjCBjqkAWS4Yqs0EL0eohHK8fM2ZIFmpKhbMnWEcbbuYjr3jmqakXm%2FjxZNnZeZ8G4iHfXsH0afPOMzl3sdRiiJ7PXkVmGLLJiazbf4Vn2b9zp6628PsAls5t1ba9AfVPCeZdc1c%2FQVQNjelWGhxYmPNVpEbkmWBFylxoeTzI9D%2FYjHyRFzxNg5f4aQpFrTdg7ZtHdoBbun%2Fu8tJU1yZxb%2FELMkgF%2BnGAcN&X-Amz-Signature=052b287c987b8aefed5bea4b2fd3ed190b2e6a41a63641d998c96c7853b45966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

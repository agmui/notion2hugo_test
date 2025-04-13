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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3C45MW7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGPU2bhUUZbawvLeV60DpkwUnlB79pSmE86io%2F1NDBXdAiAbOgGMAlTTdmCvLZMHM%2FN1pNv7tOjrWGsbQGxJSElq6SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMka4YOwAD9JHi4HKtwDMQoUvfY%2FLfUJ4aesB%2FqZBlq2V4UbZ77RCjffkT5TNVg3dMRmsqVT4dWrsF9%2FEoTlXNlSU%2FSexcHZsWZNbdR7hZ2x5h%2FjwxAobz1nXGUiz0pC6dk1czmFBfvuNEkB5bTeunJWhe6kSfVGMcnmZ%2BMFlII2gsfu7y9cPgbzs9VU%2FjJ4ujQfoLi%2FCdl14jLdvtMgl9j1dEete0Kbmy%2Fv4oPoVKEl1kw39uygsLQAeoZwkMTK84sVApeSKG4UMcX1iGQaCmTbVA%2Bz3c6EmkNezAhvQgut%2FO5TGvI%2F%2BKkisMOeFaB8i2c%2B7cQr7cBqTnNJFm8v5DkJJ8vC0dRa5jWg72wiYLD9doK6y331xCTd%2Ff%2FA%2Bx6edqgqkNqfXLArXuaxee%2F7y9ikSzDdS81uJw1gV1L3XBKxKg2YFs%2FQ2Nd0MUY0d30lZSqrdnNY39%2BR1Fxrxlg%2BDL7o7ZzugXHq9fwkMOSUr1p2nFIYZynCkwwUG8SJTqZpnzJquDmafQCkyano9KKTm8jlyWhPZRxzF8FlFmfZo7jibB%2FG7jmf64Q4jpcP4LmsORHWal2fB0sp8vUa5RQsT9tUrKmln%2FRZdhhsInOGnUns0O9gv0fYDvpsad4cbPMsguj6UDsj5mDExIYw1r3uvwY6pgEu9pfLtLqQT0NQ3Ddyzs8Bo6Yw%2FoijBFm2xmgZVCJyggNmjJ1iONV1gNEusl5mYtf2JUIjK0qlNSkyiqaLXvNa5qsNxSmIAmVi4GFlrzj01Snwd38t0ZRsqJs0JJQ2HNWkcB7qQ%2F0P5Q%2FBQpgVA0AUyuoORXf%2FZ%2Bru2RoS3hrE7wcU2Fg8qr50rZakjWcaTP5wgfXqLBCRyttEu7DxV4N5V9FJpnn%2B&X-Amz-Signature=69aa9679a1793cac5106a16e8eab34cfa079288d6217c6dbc016b861a5fe08b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3C45MW7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGPU2bhUUZbawvLeV60DpkwUnlB79pSmE86io%2F1NDBXdAiAbOgGMAlTTdmCvLZMHM%2FN1pNv7tOjrWGsbQGxJSElq6SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMka4YOwAD9JHi4HKtwDMQoUvfY%2FLfUJ4aesB%2FqZBlq2V4UbZ77RCjffkT5TNVg3dMRmsqVT4dWrsF9%2FEoTlXNlSU%2FSexcHZsWZNbdR7hZ2x5h%2FjwxAobz1nXGUiz0pC6dk1czmFBfvuNEkB5bTeunJWhe6kSfVGMcnmZ%2BMFlII2gsfu7y9cPgbzs9VU%2FjJ4ujQfoLi%2FCdl14jLdvtMgl9j1dEete0Kbmy%2Fv4oPoVKEl1kw39uygsLQAeoZwkMTK84sVApeSKG4UMcX1iGQaCmTbVA%2Bz3c6EmkNezAhvQgut%2FO5TGvI%2F%2BKkisMOeFaB8i2c%2B7cQr7cBqTnNJFm8v5DkJJ8vC0dRa5jWg72wiYLD9doK6y331xCTd%2Ff%2FA%2Bx6edqgqkNqfXLArXuaxee%2F7y9ikSzDdS81uJw1gV1L3XBKxKg2YFs%2FQ2Nd0MUY0d30lZSqrdnNY39%2BR1Fxrxlg%2BDL7o7ZzugXHq9fwkMOSUr1p2nFIYZynCkwwUG8SJTqZpnzJquDmafQCkyano9KKTm8jlyWhPZRxzF8FlFmfZo7jibB%2FG7jmf64Q4jpcP4LmsORHWal2fB0sp8vUa5RQsT9tUrKmln%2FRZdhhsInOGnUns0O9gv0fYDvpsad4cbPMsguj6UDsj5mDExIYw1r3uvwY6pgEu9pfLtLqQT0NQ3Ddyzs8Bo6Yw%2FoijBFm2xmgZVCJyggNmjJ1iONV1gNEusl5mYtf2JUIjK0qlNSkyiqaLXvNa5qsNxSmIAmVi4GFlrzj01Snwd38t0ZRsqJs0JJQ2HNWkcB7qQ%2F0P5Q%2FBQpgVA0AUyuoORXf%2FZ%2Bru2RoS3hrE7wcU2Fg8qr50rZakjWcaTP5wgfXqLBCRyttEu7DxV4N5V9FJpnn%2B&X-Amz-Signature=8fd95ebc9cbeeacb2a5a3756fc8f30a7d9a5a423ef34a7080684c6e8b3ee69fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3C45MW7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGPU2bhUUZbawvLeV60DpkwUnlB79pSmE86io%2F1NDBXdAiAbOgGMAlTTdmCvLZMHM%2FN1pNv7tOjrWGsbQGxJSElq6SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMka4YOwAD9JHi4HKtwDMQoUvfY%2FLfUJ4aesB%2FqZBlq2V4UbZ77RCjffkT5TNVg3dMRmsqVT4dWrsF9%2FEoTlXNlSU%2FSexcHZsWZNbdR7hZ2x5h%2FjwxAobz1nXGUiz0pC6dk1czmFBfvuNEkB5bTeunJWhe6kSfVGMcnmZ%2BMFlII2gsfu7y9cPgbzs9VU%2FjJ4ujQfoLi%2FCdl14jLdvtMgl9j1dEete0Kbmy%2Fv4oPoVKEl1kw39uygsLQAeoZwkMTK84sVApeSKG4UMcX1iGQaCmTbVA%2Bz3c6EmkNezAhvQgut%2FO5TGvI%2F%2BKkisMOeFaB8i2c%2B7cQr7cBqTnNJFm8v5DkJJ8vC0dRa5jWg72wiYLD9doK6y331xCTd%2Ff%2FA%2Bx6edqgqkNqfXLArXuaxee%2F7y9ikSzDdS81uJw1gV1L3XBKxKg2YFs%2FQ2Nd0MUY0d30lZSqrdnNY39%2BR1Fxrxlg%2BDL7o7ZzugXHq9fwkMOSUr1p2nFIYZynCkwwUG8SJTqZpnzJquDmafQCkyano9KKTm8jlyWhPZRxzF8FlFmfZo7jibB%2FG7jmf64Q4jpcP4LmsORHWal2fB0sp8vUa5RQsT9tUrKmln%2FRZdhhsInOGnUns0O9gv0fYDvpsad4cbPMsguj6UDsj5mDExIYw1r3uvwY6pgEu9pfLtLqQT0NQ3Ddyzs8Bo6Yw%2FoijBFm2xmgZVCJyggNmjJ1iONV1gNEusl5mYtf2JUIjK0qlNSkyiqaLXvNa5qsNxSmIAmVi4GFlrzj01Snwd38t0ZRsqJs0JJQ2HNWkcB7qQ%2F0P5Q%2FBQpgVA0AUyuoORXf%2FZ%2Bru2RoS3hrE7wcU2Fg8qr50rZakjWcaTP5wgfXqLBCRyttEu7DxV4N5V9FJpnn%2B&X-Amz-Signature=76d330e2605b70c63be7ea1ef7ec625bc0a0641af4f7b7152410a6811459b48c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3C45MW7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGPU2bhUUZbawvLeV60DpkwUnlB79pSmE86io%2F1NDBXdAiAbOgGMAlTTdmCvLZMHM%2FN1pNv7tOjrWGsbQGxJSElq6SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMka4YOwAD9JHi4HKtwDMQoUvfY%2FLfUJ4aesB%2FqZBlq2V4UbZ77RCjffkT5TNVg3dMRmsqVT4dWrsF9%2FEoTlXNlSU%2FSexcHZsWZNbdR7hZ2x5h%2FjwxAobz1nXGUiz0pC6dk1czmFBfvuNEkB5bTeunJWhe6kSfVGMcnmZ%2BMFlII2gsfu7y9cPgbzs9VU%2FjJ4ujQfoLi%2FCdl14jLdvtMgl9j1dEete0Kbmy%2Fv4oPoVKEl1kw39uygsLQAeoZwkMTK84sVApeSKG4UMcX1iGQaCmTbVA%2Bz3c6EmkNezAhvQgut%2FO5TGvI%2F%2BKkisMOeFaB8i2c%2B7cQr7cBqTnNJFm8v5DkJJ8vC0dRa5jWg72wiYLD9doK6y331xCTd%2Ff%2FA%2Bx6edqgqkNqfXLArXuaxee%2F7y9ikSzDdS81uJw1gV1L3XBKxKg2YFs%2FQ2Nd0MUY0d30lZSqrdnNY39%2BR1Fxrxlg%2BDL7o7ZzugXHq9fwkMOSUr1p2nFIYZynCkwwUG8SJTqZpnzJquDmafQCkyano9KKTm8jlyWhPZRxzF8FlFmfZo7jibB%2FG7jmf64Q4jpcP4LmsORHWal2fB0sp8vUa5RQsT9tUrKmln%2FRZdhhsInOGnUns0O9gv0fYDvpsad4cbPMsguj6UDsj5mDExIYw1r3uvwY6pgEu9pfLtLqQT0NQ3Ddyzs8Bo6Yw%2FoijBFm2xmgZVCJyggNmjJ1iONV1gNEusl5mYtf2JUIjK0qlNSkyiqaLXvNa5qsNxSmIAmVi4GFlrzj01Snwd38t0ZRsqJs0JJQ2HNWkcB7qQ%2F0P5Q%2FBQpgVA0AUyuoORXf%2FZ%2Bru2RoS3hrE7wcU2Fg8qr50rZakjWcaTP5wgfXqLBCRyttEu7DxV4N5V9FJpnn%2B&X-Amz-Signature=9f59a3316cbb2da7c2a24414710b6985872c7e97e262382dcd61b7bf444639f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3C45MW7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGPU2bhUUZbawvLeV60DpkwUnlB79pSmE86io%2F1NDBXdAiAbOgGMAlTTdmCvLZMHM%2FN1pNv7tOjrWGsbQGxJSElq6SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMka4YOwAD9JHi4HKtwDMQoUvfY%2FLfUJ4aesB%2FqZBlq2V4UbZ77RCjffkT5TNVg3dMRmsqVT4dWrsF9%2FEoTlXNlSU%2FSexcHZsWZNbdR7hZ2x5h%2FjwxAobz1nXGUiz0pC6dk1czmFBfvuNEkB5bTeunJWhe6kSfVGMcnmZ%2BMFlII2gsfu7y9cPgbzs9VU%2FjJ4ujQfoLi%2FCdl14jLdvtMgl9j1dEete0Kbmy%2Fv4oPoVKEl1kw39uygsLQAeoZwkMTK84sVApeSKG4UMcX1iGQaCmTbVA%2Bz3c6EmkNezAhvQgut%2FO5TGvI%2F%2BKkisMOeFaB8i2c%2B7cQr7cBqTnNJFm8v5DkJJ8vC0dRa5jWg72wiYLD9doK6y331xCTd%2Ff%2FA%2Bx6edqgqkNqfXLArXuaxee%2F7y9ikSzDdS81uJw1gV1L3XBKxKg2YFs%2FQ2Nd0MUY0d30lZSqrdnNY39%2BR1Fxrxlg%2BDL7o7ZzugXHq9fwkMOSUr1p2nFIYZynCkwwUG8SJTqZpnzJquDmafQCkyano9KKTm8jlyWhPZRxzF8FlFmfZo7jibB%2FG7jmf64Q4jpcP4LmsORHWal2fB0sp8vUa5RQsT9tUrKmln%2FRZdhhsInOGnUns0O9gv0fYDvpsad4cbPMsguj6UDsj5mDExIYw1r3uvwY6pgEu9pfLtLqQT0NQ3Ddyzs8Bo6Yw%2FoijBFm2xmgZVCJyggNmjJ1iONV1gNEusl5mYtf2JUIjK0qlNSkyiqaLXvNa5qsNxSmIAmVi4GFlrzj01Snwd38t0ZRsqJs0JJQ2HNWkcB7qQ%2F0P5Q%2FBQpgVA0AUyuoORXf%2FZ%2Bru2RoS3hrE7wcU2Fg8qr50rZakjWcaTP5wgfXqLBCRyttEu7DxV4N5V9FJpnn%2B&X-Amz-Signature=12f783258c02422998ce64cbcf1157e6b1bff4e43b77713215a8fb826935e34f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3C45MW7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGPU2bhUUZbawvLeV60DpkwUnlB79pSmE86io%2F1NDBXdAiAbOgGMAlTTdmCvLZMHM%2FN1pNv7tOjrWGsbQGxJSElq6SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMka4YOwAD9JHi4HKtwDMQoUvfY%2FLfUJ4aesB%2FqZBlq2V4UbZ77RCjffkT5TNVg3dMRmsqVT4dWrsF9%2FEoTlXNlSU%2FSexcHZsWZNbdR7hZ2x5h%2FjwxAobz1nXGUiz0pC6dk1czmFBfvuNEkB5bTeunJWhe6kSfVGMcnmZ%2BMFlII2gsfu7y9cPgbzs9VU%2FjJ4ujQfoLi%2FCdl14jLdvtMgl9j1dEete0Kbmy%2Fv4oPoVKEl1kw39uygsLQAeoZwkMTK84sVApeSKG4UMcX1iGQaCmTbVA%2Bz3c6EmkNezAhvQgut%2FO5TGvI%2F%2BKkisMOeFaB8i2c%2B7cQr7cBqTnNJFm8v5DkJJ8vC0dRa5jWg72wiYLD9doK6y331xCTd%2Ff%2FA%2Bx6edqgqkNqfXLArXuaxee%2F7y9ikSzDdS81uJw1gV1L3XBKxKg2YFs%2FQ2Nd0MUY0d30lZSqrdnNY39%2BR1Fxrxlg%2BDL7o7ZzugXHq9fwkMOSUr1p2nFIYZynCkwwUG8SJTqZpnzJquDmafQCkyano9KKTm8jlyWhPZRxzF8FlFmfZo7jibB%2FG7jmf64Q4jpcP4LmsORHWal2fB0sp8vUa5RQsT9tUrKmln%2FRZdhhsInOGnUns0O9gv0fYDvpsad4cbPMsguj6UDsj5mDExIYw1r3uvwY6pgEu9pfLtLqQT0NQ3Ddyzs8Bo6Yw%2FoijBFm2xmgZVCJyggNmjJ1iONV1gNEusl5mYtf2JUIjK0qlNSkyiqaLXvNa5qsNxSmIAmVi4GFlrzj01Snwd38t0ZRsqJs0JJQ2HNWkcB7qQ%2F0P5Q%2FBQpgVA0AUyuoORXf%2FZ%2Bru2RoS3hrE7wcU2Fg8qr50rZakjWcaTP5wgfXqLBCRyttEu7DxV4N5V9FJpnn%2B&X-Amz-Signature=045cc8e809fb2f3016acbe912f45be2fdd219a1fc2eaf606d3f3609510e20b24&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3C45MW7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGPU2bhUUZbawvLeV60DpkwUnlB79pSmE86io%2F1NDBXdAiAbOgGMAlTTdmCvLZMHM%2FN1pNv7tOjrWGsbQGxJSElq6SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMka4YOwAD9JHi4HKtwDMQoUvfY%2FLfUJ4aesB%2FqZBlq2V4UbZ77RCjffkT5TNVg3dMRmsqVT4dWrsF9%2FEoTlXNlSU%2FSexcHZsWZNbdR7hZ2x5h%2FjwxAobz1nXGUiz0pC6dk1czmFBfvuNEkB5bTeunJWhe6kSfVGMcnmZ%2BMFlII2gsfu7y9cPgbzs9VU%2FjJ4ujQfoLi%2FCdl14jLdvtMgl9j1dEete0Kbmy%2Fv4oPoVKEl1kw39uygsLQAeoZwkMTK84sVApeSKG4UMcX1iGQaCmTbVA%2Bz3c6EmkNezAhvQgut%2FO5TGvI%2F%2BKkisMOeFaB8i2c%2B7cQr7cBqTnNJFm8v5DkJJ8vC0dRa5jWg72wiYLD9doK6y331xCTd%2Ff%2FA%2Bx6edqgqkNqfXLArXuaxee%2F7y9ikSzDdS81uJw1gV1L3XBKxKg2YFs%2FQ2Nd0MUY0d30lZSqrdnNY39%2BR1Fxrxlg%2BDL7o7ZzugXHq9fwkMOSUr1p2nFIYZynCkwwUG8SJTqZpnzJquDmafQCkyano9KKTm8jlyWhPZRxzF8FlFmfZo7jibB%2FG7jmf64Q4jpcP4LmsORHWal2fB0sp8vUa5RQsT9tUrKmln%2FRZdhhsInOGnUns0O9gv0fYDvpsad4cbPMsguj6UDsj5mDExIYw1r3uvwY6pgEu9pfLtLqQT0NQ3Ddyzs8Bo6Yw%2FoijBFm2xmgZVCJyggNmjJ1iONV1gNEusl5mYtf2JUIjK0qlNSkyiqaLXvNa5qsNxSmIAmVi4GFlrzj01Snwd38t0ZRsqJs0JJQ2HNWkcB7qQ%2F0P5Q%2FBQpgVA0AUyuoORXf%2FZ%2Bru2RoS3hrE7wcU2Fg8qr50rZakjWcaTP5wgfXqLBCRyttEu7DxV4N5V9FJpnn%2B&X-Amz-Signature=5a88b1e25cf27141ac70e2304f9a1610e21be4f0410825d049101566c18e0157&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVOVWRT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsn%2B%2FbfEcoB1NBdsyDB81EQVVgVNP%2BSHDYbJ86BByNwAiA6nfSljUzLGow8%2ByOGc2vBGKWTmMnvh1ry2PNx6FFqMSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOC%2F63Rd%2FQCO9tXdRKtwDoG0tqlmki3ofRyFOYSZiWddIYGow3N5ZP9k%2BA30FBJ1eZ3iWWYpA3RADPOSxVAeaLMUMvF8LqCAv2%2FT8TxODjcbqA6KWpPo2F9eT8efKHCojHKM5pHDvjroGmC7Co743y4PjEnZbpqPPtPEYsXaJhMoOsup7PokBnfeaPSa504Mm%2F4zJ40jRQbCPjH22qdqp5gA8idf72J%2FmlO1vp%2BnBeuSQ51RzkuOpBzk%2BZzNtNFRkiQe9%2BGkUYWSXGkhzP0dyVYlNiOXfnsmRo9bSBzDg3FIMpSOeVc%2F88lHDxvKuX%2Bwo4UHys1gRkOlg033anyW5vnq3tWj5WkdnXcynllUuDHph%2FpC27biEjXaLV0jKA5%2FpXuBy5lrtHHkW3e6G4qm3FCuj3cIPzpisW%2Br4K5xpokAyNV%2FM%2FrHmQ9pJc%2FfrRPJgdr1JYVpOTucH91G6ZdcBJFgRil70yMP6QLC9bQ5AylcsbB20BMLFxKcCGVaJ5c6ZlMWhg5uIGQB9lmBvwjyau5wXZbqRIXZluDLIJPMu8MCWeUAHAmBNjQGIDGOjhD1dpaXXBsRCa9W3kdnrohwMBhgkEYbMCU0hIZVVa%2FmjNHM8LqlX4gQYZuU9N36nPH2%2Fhk1LCtvEmuhPAZIw7rX6wAY6pgEbzQ2l9RnarCW5s%2BCxccqGDNtNhybajQ9M2n2MzEpT36SatTT9vW7mA%2BvSogB2qSgvNv9eSeim%2Fu0DrwwzNwqaoWVJ6902k1ejAkqskWOEBVj59Okrvp4yFK2NQRFZ1vfOG8u6y9Ys%2FsQebU%2FE4v6I6KZ7P%2BCb%2ByDUJQ0KMfpHoIES7%2Bu5ajV8mnN69c9YQbdCALW69pyfCgj7Dm7KGak2kCOeFhKL&X-Amz-Signature=42f4e4a8160f51f3f64f69f27c2915596f3d0a6ed2ba8cc679dd50d65a326361&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVOVWRT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsn%2B%2FbfEcoB1NBdsyDB81EQVVgVNP%2BSHDYbJ86BByNwAiA6nfSljUzLGow8%2ByOGc2vBGKWTmMnvh1ry2PNx6FFqMSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOC%2F63Rd%2FQCO9tXdRKtwDoG0tqlmki3ofRyFOYSZiWddIYGow3N5ZP9k%2BA30FBJ1eZ3iWWYpA3RADPOSxVAeaLMUMvF8LqCAv2%2FT8TxODjcbqA6KWpPo2F9eT8efKHCojHKM5pHDvjroGmC7Co743y4PjEnZbpqPPtPEYsXaJhMoOsup7PokBnfeaPSa504Mm%2F4zJ40jRQbCPjH22qdqp5gA8idf72J%2FmlO1vp%2BnBeuSQ51RzkuOpBzk%2BZzNtNFRkiQe9%2BGkUYWSXGkhzP0dyVYlNiOXfnsmRo9bSBzDg3FIMpSOeVc%2F88lHDxvKuX%2Bwo4UHys1gRkOlg033anyW5vnq3tWj5WkdnXcynllUuDHph%2FpC27biEjXaLV0jKA5%2FpXuBy5lrtHHkW3e6G4qm3FCuj3cIPzpisW%2Br4K5xpokAyNV%2FM%2FrHmQ9pJc%2FfrRPJgdr1JYVpOTucH91G6ZdcBJFgRil70yMP6QLC9bQ5AylcsbB20BMLFxKcCGVaJ5c6ZlMWhg5uIGQB9lmBvwjyau5wXZbqRIXZluDLIJPMu8MCWeUAHAmBNjQGIDGOjhD1dpaXXBsRCa9W3kdnrohwMBhgkEYbMCU0hIZVVa%2FmjNHM8LqlX4gQYZuU9N36nPH2%2Fhk1LCtvEmuhPAZIw7rX6wAY6pgEbzQ2l9RnarCW5s%2BCxccqGDNtNhybajQ9M2n2MzEpT36SatTT9vW7mA%2BvSogB2qSgvNv9eSeim%2Fu0DrwwzNwqaoWVJ6902k1ejAkqskWOEBVj59Okrvp4yFK2NQRFZ1vfOG8u6y9Ys%2FsQebU%2FE4v6I6KZ7P%2BCb%2ByDUJQ0KMfpHoIES7%2Bu5ajV8mnN69c9YQbdCALW69pyfCgj7Dm7KGak2kCOeFhKL&X-Amz-Signature=c2557b3e6617d250fe8c0f6fdd176d76ffcea254d405d94e76af2882121a7f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVOVWRT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsn%2B%2FbfEcoB1NBdsyDB81EQVVgVNP%2BSHDYbJ86BByNwAiA6nfSljUzLGow8%2ByOGc2vBGKWTmMnvh1ry2PNx6FFqMSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOC%2F63Rd%2FQCO9tXdRKtwDoG0tqlmki3ofRyFOYSZiWddIYGow3N5ZP9k%2BA30FBJ1eZ3iWWYpA3RADPOSxVAeaLMUMvF8LqCAv2%2FT8TxODjcbqA6KWpPo2F9eT8efKHCojHKM5pHDvjroGmC7Co743y4PjEnZbpqPPtPEYsXaJhMoOsup7PokBnfeaPSa504Mm%2F4zJ40jRQbCPjH22qdqp5gA8idf72J%2FmlO1vp%2BnBeuSQ51RzkuOpBzk%2BZzNtNFRkiQe9%2BGkUYWSXGkhzP0dyVYlNiOXfnsmRo9bSBzDg3FIMpSOeVc%2F88lHDxvKuX%2Bwo4UHys1gRkOlg033anyW5vnq3tWj5WkdnXcynllUuDHph%2FpC27biEjXaLV0jKA5%2FpXuBy5lrtHHkW3e6G4qm3FCuj3cIPzpisW%2Br4K5xpokAyNV%2FM%2FrHmQ9pJc%2FfrRPJgdr1JYVpOTucH91G6ZdcBJFgRil70yMP6QLC9bQ5AylcsbB20BMLFxKcCGVaJ5c6ZlMWhg5uIGQB9lmBvwjyau5wXZbqRIXZluDLIJPMu8MCWeUAHAmBNjQGIDGOjhD1dpaXXBsRCa9W3kdnrohwMBhgkEYbMCU0hIZVVa%2FmjNHM8LqlX4gQYZuU9N36nPH2%2Fhk1LCtvEmuhPAZIw7rX6wAY6pgEbzQ2l9RnarCW5s%2BCxccqGDNtNhybajQ9M2n2MzEpT36SatTT9vW7mA%2BvSogB2qSgvNv9eSeim%2Fu0DrwwzNwqaoWVJ6902k1ejAkqskWOEBVj59Okrvp4yFK2NQRFZ1vfOG8u6y9Ys%2FsQebU%2FE4v6I6KZ7P%2BCb%2ByDUJQ0KMfpHoIES7%2Bu5ajV8mnN69c9YQbdCALW69pyfCgj7Dm7KGak2kCOeFhKL&X-Amz-Signature=c0d5b6d331814de24c9cd0c052eb9a8c668b372c7b01adb253934ffce06b0d09&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVOVWRT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsn%2B%2FbfEcoB1NBdsyDB81EQVVgVNP%2BSHDYbJ86BByNwAiA6nfSljUzLGow8%2ByOGc2vBGKWTmMnvh1ry2PNx6FFqMSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOC%2F63Rd%2FQCO9tXdRKtwDoG0tqlmki3ofRyFOYSZiWddIYGow3N5ZP9k%2BA30FBJ1eZ3iWWYpA3RADPOSxVAeaLMUMvF8LqCAv2%2FT8TxODjcbqA6KWpPo2F9eT8efKHCojHKM5pHDvjroGmC7Co743y4PjEnZbpqPPtPEYsXaJhMoOsup7PokBnfeaPSa504Mm%2F4zJ40jRQbCPjH22qdqp5gA8idf72J%2FmlO1vp%2BnBeuSQ51RzkuOpBzk%2BZzNtNFRkiQe9%2BGkUYWSXGkhzP0dyVYlNiOXfnsmRo9bSBzDg3FIMpSOeVc%2F88lHDxvKuX%2Bwo4UHys1gRkOlg033anyW5vnq3tWj5WkdnXcynllUuDHph%2FpC27biEjXaLV0jKA5%2FpXuBy5lrtHHkW3e6G4qm3FCuj3cIPzpisW%2Br4K5xpokAyNV%2FM%2FrHmQ9pJc%2FfrRPJgdr1JYVpOTucH91G6ZdcBJFgRil70yMP6QLC9bQ5AylcsbB20BMLFxKcCGVaJ5c6ZlMWhg5uIGQB9lmBvwjyau5wXZbqRIXZluDLIJPMu8MCWeUAHAmBNjQGIDGOjhD1dpaXXBsRCa9W3kdnrohwMBhgkEYbMCU0hIZVVa%2FmjNHM8LqlX4gQYZuU9N36nPH2%2Fhk1LCtvEmuhPAZIw7rX6wAY6pgEbzQ2l9RnarCW5s%2BCxccqGDNtNhybajQ9M2n2MzEpT36SatTT9vW7mA%2BvSogB2qSgvNv9eSeim%2Fu0DrwwzNwqaoWVJ6902k1ejAkqskWOEBVj59Okrvp4yFK2NQRFZ1vfOG8u6y9Ys%2FsQebU%2FE4v6I6KZ7P%2BCb%2ByDUJQ0KMfpHoIES7%2Bu5ajV8mnN69c9YQbdCALW69pyfCgj7Dm7KGak2kCOeFhKL&X-Amz-Signature=c8ee48cc8c2a595ba2e9f149dd27ff1ecbd54a8d4d1bfecf5ed3bda3ab05a8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVOVWRT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsn%2B%2FbfEcoB1NBdsyDB81EQVVgVNP%2BSHDYbJ86BByNwAiA6nfSljUzLGow8%2ByOGc2vBGKWTmMnvh1ry2PNx6FFqMSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOC%2F63Rd%2FQCO9tXdRKtwDoG0tqlmki3ofRyFOYSZiWddIYGow3N5ZP9k%2BA30FBJ1eZ3iWWYpA3RADPOSxVAeaLMUMvF8LqCAv2%2FT8TxODjcbqA6KWpPo2F9eT8efKHCojHKM5pHDvjroGmC7Co743y4PjEnZbpqPPtPEYsXaJhMoOsup7PokBnfeaPSa504Mm%2F4zJ40jRQbCPjH22qdqp5gA8idf72J%2FmlO1vp%2BnBeuSQ51RzkuOpBzk%2BZzNtNFRkiQe9%2BGkUYWSXGkhzP0dyVYlNiOXfnsmRo9bSBzDg3FIMpSOeVc%2F88lHDxvKuX%2Bwo4UHys1gRkOlg033anyW5vnq3tWj5WkdnXcynllUuDHph%2FpC27biEjXaLV0jKA5%2FpXuBy5lrtHHkW3e6G4qm3FCuj3cIPzpisW%2Br4K5xpokAyNV%2FM%2FrHmQ9pJc%2FfrRPJgdr1JYVpOTucH91G6ZdcBJFgRil70yMP6QLC9bQ5AylcsbB20BMLFxKcCGVaJ5c6ZlMWhg5uIGQB9lmBvwjyau5wXZbqRIXZluDLIJPMu8MCWeUAHAmBNjQGIDGOjhD1dpaXXBsRCa9W3kdnrohwMBhgkEYbMCU0hIZVVa%2FmjNHM8LqlX4gQYZuU9N36nPH2%2Fhk1LCtvEmuhPAZIw7rX6wAY6pgEbzQ2l9RnarCW5s%2BCxccqGDNtNhybajQ9M2n2MzEpT36SatTT9vW7mA%2BvSogB2qSgvNv9eSeim%2Fu0DrwwzNwqaoWVJ6902k1ejAkqskWOEBVj59Okrvp4yFK2NQRFZ1vfOG8u6y9Ys%2FsQebU%2FE4v6I6KZ7P%2BCb%2ByDUJQ0KMfpHoIES7%2Bu5ajV8mnN69c9YQbdCALW69pyfCgj7Dm7KGak2kCOeFhKL&X-Amz-Signature=86205382c23cdee027fd0bbeb73f1aa5d9d09e52681efd753eab18cc585bd7f6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVOVWRT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsn%2B%2FbfEcoB1NBdsyDB81EQVVgVNP%2BSHDYbJ86BByNwAiA6nfSljUzLGow8%2ByOGc2vBGKWTmMnvh1ry2PNx6FFqMSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOC%2F63Rd%2FQCO9tXdRKtwDoG0tqlmki3ofRyFOYSZiWddIYGow3N5ZP9k%2BA30FBJ1eZ3iWWYpA3RADPOSxVAeaLMUMvF8LqCAv2%2FT8TxODjcbqA6KWpPo2F9eT8efKHCojHKM5pHDvjroGmC7Co743y4PjEnZbpqPPtPEYsXaJhMoOsup7PokBnfeaPSa504Mm%2F4zJ40jRQbCPjH22qdqp5gA8idf72J%2FmlO1vp%2BnBeuSQ51RzkuOpBzk%2BZzNtNFRkiQe9%2BGkUYWSXGkhzP0dyVYlNiOXfnsmRo9bSBzDg3FIMpSOeVc%2F88lHDxvKuX%2Bwo4UHys1gRkOlg033anyW5vnq3tWj5WkdnXcynllUuDHph%2FpC27biEjXaLV0jKA5%2FpXuBy5lrtHHkW3e6G4qm3FCuj3cIPzpisW%2Br4K5xpokAyNV%2FM%2FrHmQ9pJc%2FfrRPJgdr1JYVpOTucH91G6ZdcBJFgRil70yMP6QLC9bQ5AylcsbB20BMLFxKcCGVaJ5c6ZlMWhg5uIGQB9lmBvwjyau5wXZbqRIXZluDLIJPMu8MCWeUAHAmBNjQGIDGOjhD1dpaXXBsRCa9W3kdnrohwMBhgkEYbMCU0hIZVVa%2FmjNHM8LqlX4gQYZuU9N36nPH2%2Fhk1LCtvEmuhPAZIw7rX6wAY6pgEbzQ2l9RnarCW5s%2BCxccqGDNtNhybajQ9M2n2MzEpT36SatTT9vW7mA%2BvSogB2qSgvNv9eSeim%2Fu0DrwwzNwqaoWVJ6902k1ejAkqskWOEBVj59Okrvp4yFK2NQRFZ1vfOG8u6y9Ys%2FsQebU%2FE4v6I6KZ7P%2BCb%2ByDUJQ0KMfpHoIES7%2Bu5ajV8mnN69c9YQbdCALW69pyfCgj7Dm7KGak2kCOeFhKL&X-Amz-Signature=c13a67267991ed7858b32a3b543e985302aed24d6661afc31bcaf9c83688a36f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVOVWRT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsn%2B%2FbfEcoB1NBdsyDB81EQVVgVNP%2BSHDYbJ86BByNwAiA6nfSljUzLGow8%2ByOGc2vBGKWTmMnvh1ry2PNx6FFqMSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOC%2F63Rd%2FQCO9tXdRKtwDoG0tqlmki3ofRyFOYSZiWddIYGow3N5ZP9k%2BA30FBJ1eZ3iWWYpA3RADPOSxVAeaLMUMvF8LqCAv2%2FT8TxODjcbqA6KWpPo2F9eT8efKHCojHKM5pHDvjroGmC7Co743y4PjEnZbpqPPtPEYsXaJhMoOsup7PokBnfeaPSa504Mm%2F4zJ40jRQbCPjH22qdqp5gA8idf72J%2FmlO1vp%2BnBeuSQ51RzkuOpBzk%2BZzNtNFRkiQe9%2BGkUYWSXGkhzP0dyVYlNiOXfnsmRo9bSBzDg3FIMpSOeVc%2F88lHDxvKuX%2Bwo4UHys1gRkOlg033anyW5vnq3tWj5WkdnXcynllUuDHph%2FpC27biEjXaLV0jKA5%2FpXuBy5lrtHHkW3e6G4qm3FCuj3cIPzpisW%2Br4K5xpokAyNV%2FM%2FrHmQ9pJc%2FfrRPJgdr1JYVpOTucH91G6ZdcBJFgRil70yMP6QLC9bQ5AylcsbB20BMLFxKcCGVaJ5c6ZlMWhg5uIGQB9lmBvwjyau5wXZbqRIXZluDLIJPMu8MCWeUAHAmBNjQGIDGOjhD1dpaXXBsRCa9W3kdnrohwMBhgkEYbMCU0hIZVVa%2FmjNHM8LqlX4gQYZuU9N36nPH2%2Fhk1LCtvEmuhPAZIw7rX6wAY6pgEbzQ2l9RnarCW5s%2BCxccqGDNtNhybajQ9M2n2MzEpT36SatTT9vW7mA%2BvSogB2qSgvNv9eSeim%2Fu0DrwwzNwqaoWVJ6902k1ejAkqskWOEBVj59Okrvp4yFK2NQRFZ1vfOG8u6y9Ys%2FsQebU%2FE4v6I6KZ7P%2BCb%2ByDUJQ0KMfpHoIES7%2Bu5ajV8mnN69c9YQbdCALW69pyfCgj7Dm7KGak2kCOeFhKL&X-Amz-Signature=24308bae25f94a616027dcfa129d9816d2f96fc059ef86b268d2579e05c4677c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OG5T3IH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiBbWYigWXke4RZaU8otR76x7xeEJ6oIQUz2be8sS%2FgAIhAN%2BK7iRnxcMsDmeddCiqTeAaKO0rmSh6xAkGvNIbumxqKv8DCFoQABoMNjM3NDIzMTgzODA1IgxCZ5ZZ0KVX5mlAyRkq3AO%2B5FUCkmfzlO4q4LV3K7Y6ycZ8qQneGTtl0eL6nJOpQalEo9exsdncYp35a0jAXHVqKt7lFDRG%2FXrV5S8msbbZBTj0KpJuyEb6NVgVtjH1tjzwJ7rzfi%2BksP03zR0rXNT71I8OY9LyDzaR40N8IjV06mGswow3p1ENf%2BhPZbOZo0rmA0%2F06EMsCDaNSli1QmZGQnxN2b0ipDTwTJJkLsCrAcVXbY9eOeCN%2BKQ6IQIST%2Fy%2Bonr2RKuJQY9wl24k1H%2F2Ib88%2B1bx5L7nD1rKyrSoFq%2FlwPKw7OzU8H7VMplS3xRiDXZH3InWCG7dbvWrW2gJ90GiSZ9e8NN437LwdzAsFVFv5L0nf7P8TGrqkac2Lb1fYQEXKH9R%2BkTt8VkKaIrytsnhZOhiHhGfzDZP9Ba9lpn941nVRVQMPtE3ZemjdW4wE6Db4g5HvVtET0uslLy6G%2BbStxrEKnDkRmXAs8Mwz0ETSdCgDGyMmV2M7x6N%2F4DF4ho0R%2BYo%2BRmIRkeZxJpjP4Vkbh%2ByG2ZOzHA7J%2ByhBe9EcRV3mmC49AFw%2FJzZRjIn4l3ZrqUjXWnpNTTUzQyCQagNs4n6tBIGtJOtiFsrmSr60G0ivsLiD4QQip9sgG%2FmIwC1QSscqYzYBzCd%2BoLABjqkAVsbPR%2BbZK0BxGiDal60pHXKgjbDSlu4hqEvYvH5Jdqjcgxl%2B39yE238qmpfbHgmj2MCE4kfmOTpEw7Ge8UbqDaVkIXB3o6vALacMZIyyeSrxWtUdu2VaXLaflJt8mqtS9N1irv7QwkPRqc2twQQiHyeTAs3chzM%2FD78dr6eseuB7EGpjq2VvJKGN3u8u0dIvvgiV5LAC46k1namgtkdNUUI7H9W&X-Amz-Signature=846de203e405fd69d11eb6eab36113f67528f6a9afc56b56122f7812e6263696&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OG5T3IH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiBbWYigWXke4RZaU8otR76x7xeEJ6oIQUz2be8sS%2FgAIhAN%2BK7iRnxcMsDmeddCiqTeAaKO0rmSh6xAkGvNIbumxqKv8DCFoQABoMNjM3NDIzMTgzODA1IgxCZ5ZZ0KVX5mlAyRkq3AO%2B5FUCkmfzlO4q4LV3K7Y6ycZ8qQneGTtl0eL6nJOpQalEo9exsdncYp35a0jAXHVqKt7lFDRG%2FXrV5S8msbbZBTj0KpJuyEb6NVgVtjH1tjzwJ7rzfi%2BksP03zR0rXNT71I8OY9LyDzaR40N8IjV06mGswow3p1ENf%2BhPZbOZo0rmA0%2F06EMsCDaNSli1QmZGQnxN2b0ipDTwTJJkLsCrAcVXbY9eOeCN%2BKQ6IQIST%2Fy%2Bonr2RKuJQY9wl24k1H%2F2Ib88%2B1bx5L7nD1rKyrSoFq%2FlwPKw7OzU8H7VMplS3xRiDXZH3InWCG7dbvWrW2gJ90GiSZ9e8NN437LwdzAsFVFv5L0nf7P8TGrqkac2Lb1fYQEXKH9R%2BkTt8VkKaIrytsnhZOhiHhGfzDZP9Ba9lpn941nVRVQMPtE3ZemjdW4wE6Db4g5HvVtET0uslLy6G%2BbStxrEKnDkRmXAs8Mwz0ETSdCgDGyMmV2M7x6N%2F4DF4ho0R%2BYo%2BRmIRkeZxJpjP4Vkbh%2ByG2ZOzHA7J%2ByhBe9EcRV3mmC49AFw%2FJzZRjIn4l3ZrqUjXWnpNTTUzQyCQagNs4n6tBIGtJOtiFsrmSr60G0ivsLiD4QQip9sgG%2FmIwC1QSscqYzYBzCd%2BoLABjqkAVsbPR%2BbZK0BxGiDal60pHXKgjbDSlu4hqEvYvH5Jdqjcgxl%2B39yE238qmpfbHgmj2MCE4kfmOTpEw7Ge8UbqDaVkIXB3o6vALacMZIyyeSrxWtUdu2VaXLaflJt8mqtS9N1irv7QwkPRqc2twQQiHyeTAs3chzM%2FD78dr6eseuB7EGpjq2VvJKGN3u8u0dIvvgiV5LAC46k1namgtkdNUUI7H9W&X-Amz-Signature=650a854de2b87e94be8cb5d729ce052d7fbba2f645b6b48bbf031fce31814582&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OG5T3IH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiBbWYigWXke4RZaU8otR76x7xeEJ6oIQUz2be8sS%2FgAIhAN%2BK7iRnxcMsDmeddCiqTeAaKO0rmSh6xAkGvNIbumxqKv8DCFoQABoMNjM3NDIzMTgzODA1IgxCZ5ZZ0KVX5mlAyRkq3AO%2B5FUCkmfzlO4q4LV3K7Y6ycZ8qQneGTtl0eL6nJOpQalEo9exsdncYp35a0jAXHVqKt7lFDRG%2FXrV5S8msbbZBTj0KpJuyEb6NVgVtjH1tjzwJ7rzfi%2BksP03zR0rXNT71I8OY9LyDzaR40N8IjV06mGswow3p1ENf%2BhPZbOZo0rmA0%2F06EMsCDaNSli1QmZGQnxN2b0ipDTwTJJkLsCrAcVXbY9eOeCN%2BKQ6IQIST%2Fy%2Bonr2RKuJQY9wl24k1H%2F2Ib88%2B1bx5L7nD1rKyrSoFq%2FlwPKw7OzU8H7VMplS3xRiDXZH3InWCG7dbvWrW2gJ90GiSZ9e8NN437LwdzAsFVFv5L0nf7P8TGrqkac2Lb1fYQEXKH9R%2BkTt8VkKaIrytsnhZOhiHhGfzDZP9Ba9lpn941nVRVQMPtE3ZemjdW4wE6Db4g5HvVtET0uslLy6G%2BbStxrEKnDkRmXAs8Mwz0ETSdCgDGyMmV2M7x6N%2F4DF4ho0R%2BYo%2BRmIRkeZxJpjP4Vkbh%2ByG2ZOzHA7J%2ByhBe9EcRV3mmC49AFw%2FJzZRjIn4l3ZrqUjXWnpNTTUzQyCQagNs4n6tBIGtJOtiFsrmSr60G0ivsLiD4QQip9sgG%2FmIwC1QSscqYzYBzCd%2BoLABjqkAVsbPR%2BbZK0BxGiDal60pHXKgjbDSlu4hqEvYvH5Jdqjcgxl%2B39yE238qmpfbHgmj2MCE4kfmOTpEw7Ge8UbqDaVkIXB3o6vALacMZIyyeSrxWtUdu2VaXLaflJt8mqtS9N1irv7QwkPRqc2twQQiHyeTAs3chzM%2FD78dr6eseuB7EGpjq2VvJKGN3u8u0dIvvgiV5LAC46k1namgtkdNUUI7H9W&X-Amz-Signature=8288502eb8d65072dae72c95397dc634952c737bc5c8f768a45aa479e9a5832a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OG5T3IH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiBbWYigWXke4RZaU8otR76x7xeEJ6oIQUz2be8sS%2FgAIhAN%2BK7iRnxcMsDmeddCiqTeAaKO0rmSh6xAkGvNIbumxqKv8DCFoQABoMNjM3NDIzMTgzODA1IgxCZ5ZZ0KVX5mlAyRkq3AO%2B5FUCkmfzlO4q4LV3K7Y6ycZ8qQneGTtl0eL6nJOpQalEo9exsdncYp35a0jAXHVqKt7lFDRG%2FXrV5S8msbbZBTj0KpJuyEb6NVgVtjH1tjzwJ7rzfi%2BksP03zR0rXNT71I8OY9LyDzaR40N8IjV06mGswow3p1ENf%2BhPZbOZo0rmA0%2F06EMsCDaNSli1QmZGQnxN2b0ipDTwTJJkLsCrAcVXbY9eOeCN%2BKQ6IQIST%2Fy%2Bonr2RKuJQY9wl24k1H%2F2Ib88%2B1bx5L7nD1rKyrSoFq%2FlwPKw7OzU8H7VMplS3xRiDXZH3InWCG7dbvWrW2gJ90GiSZ9e8NN437LwdzAsFVFv5L0nf7P8TGrqkac2Lb1fYQEXKH9R%2BkTt8VkKaIrytsnhZOhiHhGfzDZP9Ba9lpn941nVRVQMPtE3ZemjdW4wE6Db4g5HvVtET0uslLy6G%2BbStxrEKnDkRmXAs8Mwz0ETSdCgDGyMmV2M7x6N%2F4DF4ho0R%2BYo%2BRmIRkeZxJpjP4Vkbh%2ByG2ZOzHA7J%2ByhBe9EcRV3mmC49AFw%2FJzZRjIn4l3ZrqUjXWnpNTTUzQyCQagNs4n6tBIGtJOtiFsrmSr60G0ivsLiD4QQip9sgG%2FmIwC1QSscqYzYBzCd%2BoLABjqkAVsbPR%2BbZK0BxGiDal60pHXKgjbDSlu4hqEvYvH5Jdqjcgxl%2B39yE238qmpfbHgmj2MCE4kfmOTpEw7Ge8UbqDaVkIXB3o6vALacMZIyyeSrxWtUdu2VaXLaflJt8mqtS9N1irv7QwkPRqc2twQQiHyeTAs3chzM%2FD78dr6eseuB7EGpjq2VvJKGN3u8u0dIvvgiV5LAC46k1namgtkdNUUI7H9W&X-Amz-Signature=c90ae51c90e70d2ef5a2a29a59566137e761e48ec66a0c0cbfd499d9441797a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OG5T3IH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiBbWYigWXke4RZaU8otR76x7xeEJ6oIQUz2be8sS%2FgAIhAN%2BK7iRnxcMsDmeddCiqTeAaKO0rmSh6xAkGvNIbumxqKv8DCFoQABoMNjM3NDIzMTgzODA1IgxCZ5ZZ0KVX5mlAyRkq3AO%2B5FUCkmfzlO4q4LV3K7Y6ycZ8qQneGTtl0eL6nJOpQalEo9exsdncYp35a0jAXHVqKt7lFDRG%2FXrV5S8msbbZBTj0KpJuyEb6NVgVtjH1tjzwJ7rzfi%2BksP03zR0rXNT71I8OY9LyDzaR40N8IjV06mGswow3p1ENf%2BhPZbOZo0rmA0%2F06EMsCDaNSli1QmZGQnxN2b0ipDTwTJJkLsCrAcVXbY9eOeCN%2BKQ6IQIST%2Fy%2Bonr2RKuJQY9wl24k1H%2F2Ib88%2B1bx5L7nD1rKyrSoFq%2FlwPKw7OzU8H7VMplS3xRiDXZH3InWCG7dbvWrW2gJ90GiSZ9e8NN437LwdzAsFVFv5L0nf7P8TGrqkac2Lb1fYQEXKH9R%2BkTt8VkKaIrytsnhZOhiHhGfzDZP9Ba9lpn941nVRVQMPtE3ZemjdW4wE6Db4g5HvVtET0uslLy6G%2BbStxrEKnDkRmXAs8Mwz0ETSdCgDGyMmV2M7x6N%2F4DF4ho0R%2BYo%2BRmIRkeZxJpjP4Vkbh%2ByG2ZOzHA7J%2ByhBe9EcRV3mmC49AFw%2FJzZRjIn4l3ZrqUjXWnpNTTUzQyCQagNs4n6tBIGtJOtiFsrmSr60G0ivsLiD4QQip9sgG%2FmIwC1QSscqYzYBzCd%2BoLABjqkAVsbPR%2BbZK0BxGiDal60pHXKgjbDSlu4hqEvYvH5Jdqjcgxl%2B39yE238qmpfbHgmj2MCE4kfmOTpEw7Ge8UbqDaVkIXB3o6vALacMZIyyeSrxWtUdu2VaXLaflJt8mqtS9N1irv7QwkPRqc2twQQiHyeTAs3chzM%2FD78dr6eseuB7EGpjq2VvJKGN3u8u0dIvvgiV5LAC46k1namgtkdNUUI7H9W&X-Amz-Signature=425258e980bc2edfd1b4d05e78fdbe4a4f3178033c998f47f0686cbe8a2f8866&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OG5T3IH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiBbWYigWXke4RZaU8otR76x7xeEJ6oIQUz2be8sS%2FgAIhAN%2BK7iRnxcMsDmeddCiqTeAaKO0rmSh6xAkGvNIbumxqKv8DCFoQABoMNjM3NDIzMTgzODA1IgxCZ5ZZ0KVX5mlAyRkq3AO%2B5FUCkmfzlO4q4LV3K7Y6ycZ8qQneGTtl0eL6nJOpQalEo9exsdncYp35a0jAXHVqKt7lFDRG%2FXrV5S8msbbZBTj0KpJuyEb6NVgVtjH1tjzwJ7rzfi%2BksP03zR0rXNT71I8OY9LyDzaR40N8IjV06mGswow3p1ENf%2BhPZbOZo0rmA0%2F06EMsCDaNSli1QmZGQnxN2b0ipDTwTJJkLsCrAcVXbY9eOeCN%2BKQ6IQIST%2Fy%2Bonr2RKuJQY9wl24k1H%2F2Ib88%2B1bx5L7nD1rKyrSoFq%2FlwPKw7OzU8H7VMplS3xRiDXZH3InWCG7dbvWrW2gJ90GiSZ9e8NN437LwdzAsFVFv5L0nf7P8TGrqkac2Lb1fYQEXKH9R%2BkTt8VkKaIrytsnhZOhiHhGfzDZP9Ba9lpn941nVRVQMPtE3ZemjdW4wE6Db4g5HvVtET0uslLy6G%2BbStxrEKnDkRmXAs8Mwz0ETSdCgDGyMmV2M7x6N%2F4DF4ho0R%2BYo%2BRmIRkeZxJpjP4Vkbh%2ByG2ZOzHA7J%2ByhBe9EcRV3mmC49AFw%2FJzZRjIn4l3ZrqUjXWnpNTTUzQyCQagNs4n6tBIGtJOtiFsrmSr60G0ivsLiD4QQip9sgG%2FmIwC1QSscqYzYBzCd%2BoLABjqkAVsbPR%2BbZK0BxGiDal60pHXKgjbDSlu4hqEvYvH5Jdqjcgxl%2B39yE238qmpfbHgmj2MCE4kfmOTpEw7Ge8UbqDaVkIXB3o6vALacMZIyyeSrxWtUdu2VaXLaflJt8mqtS9N1irv7QwkPRqc2twQQiHyeTAs3chzM%2FD78dr6eseuB7EGpjq2VvJKGN3u8u0dIvvgiV5LAC46k1namgtkdNUUI7H9W&X-Amz-Signature=a380efe6ba2c1f9e5b9cd5e081368d923e81b356da99dd0ae8ef04348a9ca38c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OG5T3IH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiBbWYigWXke4RZaU8otR76x7xeEJ6oIQUz2be8sS%2FgAIhAN%2BK7iRnxcMsDmeddCiqTeAaKO0rmSh6xAkGvNIbumxqKv8DCFoQABoMNjM3NDIzMTgzODA1IgxCZ5ZZ0KVX5mlAyRkq3AO%2B5FUCkmfzlO4q4LV3K7Y6ycZ8qQneGTtl0eL6nJOpQalEo9exsdncYp35a0jAXHVqKt7lFDRG%2FXrV5S8msbbZBTj0KpJuyEb6NVgVtjH1tjzwJ7rzfi%2BksP03zR0rXNT71I8OY9LyDzaR40N8IjV06mGswow3p1ENf%2BhPZbOZo0rmA0%2F06EMsCDaNSli1QmZGQnxN2b0ipDTwTJJkLsCrAcVXbY9eOeCN%2BKQ6IQIST%2Fy%2Bonr2RKuJQY9wl24k1H%2F2Ib88%2B1bx5L7nD1rKyrSoFq%2FlwPKw7OzU8H7VMplS3xRiDXZH3InWCG7dbvWrW2gJ90GiSZ9e8NN437LwdzAsFVFv5L0nf7P8TGrqkac2Lb1fYQEXKH9R%2BkTt8VkKaIrytsnhZOhiHhGfzDZP9Ba9lpn941nVRVQMPtE3ZemjdW4wE6Db4g5HvVtET0uslLy6G%2BbStxrEKnDkRmXAs8Mwz0ETSdCgDGyMmV2M7x6N%2F4DF4ho0R%2BYo%2BRmIRkeZxJpjP4Vkbh%2ByG2ZOzHA7J%2ByhBe9EcRV3mmC49AFw%2FJzZRjIn4l3ZrqUjXWnpNTTUzQyCQagNs4n6tBIGtJOtiFsrmSr60G0ivsLiD4QQip9sgG%2FmIwC1QSscqYzYBzCd%2BoLABjqkAVsbPR%2BbZK0BxGiDal60pHXKgjbDSlu4hqEvYvH5Jdqjcgxl%2B39yE238qmpfbHgmj2MCE4kfmOTpEw7Ge8UbqDaVkIXB3o6vALacMZIyyeSrxWtUdu2VaXLaflJt8mqtS9N1irv7QwkPRqc2twQQiHyeTAs3chzM%2FD78dr6eseuB7EGpjq2VvJKGN3u8u0dIvvgiV5LAC46k1namgtkdNUUI7H9W&X-Amz-Signature=9270eaca492d93c24b8c3bace6b955fdb23e513de06a18b31a5cef7be3a5bb9e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

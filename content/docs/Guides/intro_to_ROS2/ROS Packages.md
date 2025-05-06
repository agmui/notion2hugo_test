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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DXG7JR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxi5rU6zBDkopjFrosETSTWjmKMpFg%2BQpoMZ5%2FZzUMIQIhANHNFAnyfWNFERy3T6%2FgyuJPeUHt0nwoXs9AqvB0XJbJKv8DCD0QABoMNjM3NDIzMTgzODA1IgxY1w%2BAXgcavrnD4Bwq3ANU31i8l10fe1%2Fu%2Fleoyr0czxcvFl4MHuZBQEHa0Sifspvm1iNl7LaBEfu9TqIbEiFAs2d1qi3V3S9PK10aEc%2Bhikf9Ik0YWNLUI3k0atj%2BE3D4HUYn1MGHgQcyea6Qb%2Bso3NO06B6byQLWcPA00i6Jza3mybEFjty2pA6jWQHMm9uFVjN1xLOKnZtT4FRjlPeQHyudP8C8lmz0Q5SXrAacdlK93yZFmpCk0jamoeSnxhlJASzoze3qBMMm9vNJCo%2BQB77kCD31B7cHsWlUfBX63VgUL8w0LtdZHrY6MYTobdxzq38t15u8OZ3%2FB7sMI4gXZOtNxTFfEK3o0dCuqQAwrSU9TOHd8uVFKD%2Bsv4HldxzjrrubglnO3Oaismu%2Byxl8pwhACQV1rrtYCc5xiz1ZKdsKZUuJwBoDMClhuq1m8IlEQ2PLyVZdAuAhlvUcTrrzMfm4UM227NquRSPvJGd%2BLDOSuSbNrbxGJl792Y4WPBeoQUAymU776IZHMcheskgyPGnomX7E9ecOjvdTS7wqiwNLLwNYIzMYSPAczcnPcBw5mCVq61v%2B1hkUUMJIpBQOXRokrXz%2B%2BJpQC0Uh7DyotRK0m7BQm5tK0E1ty9RZJ1chUWXLdQQsSsNzLzDCl%2BbABjqkAcpHjx7JyJ7D4vPVPWELMQm%2BHIU7t3JpTVILswe%2BQbPYZIn4z2RvIbbGblhOqdgevK1%2Fb1vUbYznb6jeqPnQhGU0Zo4Y6G9azR%2FSpzzMGaX6PRpeci%2Bea9V578C22uoCC5Llhexc%2B0%2BG9PxCrhp3jxZFed8iskqM3tzdt2LVFOcB4niNcDMOLr7TOqlVS4I5JvDp9%2FuzVE3l3ykgKd%2FpoZ50xNyG&X-Amz-Signature=485674d8ecd243a835ac4e847a50095ba776d35c4b7cb8d6204c4fcfccc1a49f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DXG7JR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxi5rU6zBDkopjFrosETSTWjmKMpFg%2BQpoMZ5%2FZzUMIQIhANHNFAnyfWNFERy3T6%2FgyuJPeUHt0nwoXs9AqvB0XJbJKv8DCD0QABoMNjM3NDIzMTgzODA1IgxY1w%2BAXgcavrnD4Bwq3ANU31i8l10fe1%2Fu%2Fleoyr0czxcvFl4MHuZBQEHa0Sifspvm1iNl7LaBEfu9TqIbEiFAs2d1qi3V3S9PK10aEc%2Bhikf9Ik0YWNLUI3k0atj%2BE3D4HUYn1MGHgQcyea6Qb%2Bso3NO06B6byQLWcPA00i6Jza3mybEFjty2pA6jWQHMm9uFVjN1xLOKnZtT4FRjlPeQHyudP8C8lmz0Q5SXrAacdlK93yZFmpCk0jamoeSnxhlJASzoze3qBMMm9vNJCo%2BQB77kCD31B7cHsWlUfBX63VgUL8w0LtdZHrY6MYTobdxzq38t15u8OZ3%2FB7sMI4gXZOtNxTFfEK3o0dCuqQAwrSU9TOHd8uVFKD%2Bsv4HldxzjrrubglnO3Oaismu%2Byxl8pwhACQV1rrtYCc5xiz1ZKdsKZUuJwBoDMClhuq1m8IlEQ2PLyVZdAuAhlvUcTrrzMfm4UM227NquRSPvJGd%2BLDOSuSbNrbxGJl792Y4WPBeoQUAymU776IZHMcheskgyPGnomX7E9ecOjvdTS7wqiwNLLwNYIzMYSPAczcnPcBw5mCVq61v%2B1hkUUMJIpBQOXRokrXz%2B%2BJpQC0Uh7DyotRK0m7BQm5tK0E1ty9RZJ1chUWXLdQQsSsNzLzDCl%2BbABjqkAcpHjx7JyJ7D4vPVPWELMQm%2BHIU7t3JpTVILswe%2BQbPYZIn4z2RvIbbGblhOqdgevK1%2Fb1vUbYznb6jeqPnQhGU0Zo4Y6G9azR%2FSpzzMGaX6PRpeci%2Bea9V578C22uoCC5Llhexc%2B0%2BG9PxCrhp3jxZFed8iskqM3tzdt2LVFOcB4niNcDMOLr7TOqlVS4I5JvDp9%2FuzVE3l3ykgKd%2FpoZ50xNyG&X-Amz-Signature=3844d74edb5e143b7a81e106e6063c93935eee119cec84298cc47cfd0f077b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DXG7JR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxi5rU6zBDkopjFrosETSTWjmKMpFg%2BQpoMZ5%2FZzUMIQIhANHNFAnyfWNFERy3T6%2FgyuJPeUHt0nwoXs9AqvB0XJbJKv8DCD0QABoMNjM3NDIzMTgzODA1IgxY1w%2BAXgcavrnD4Bwq3ANU31i8l10fe1%2Fu%2Fleoyr0czxcvFl4MHuZBQEHa0Sifspvm1iNl7LaBEfu9TqIbEiFAs2d1qi3V3S9PK10aEc%2Bhikf9Ik0YWNLUI3k0atj%2BE3D4HUYn1MGHgQcyea6Qb%2Bso3NO06B6byQLWcPA00i6Jza3mybEFjty2pA6jWQHMm9uFVjN1xLOKnZtT4FRjlPeQHyudP8C8lmz0Q5SXrAacdlK93yZFmpCk0jamoeSnxhlJASzoze3qBMMm9vNJCo%2BQB77kCD31B7cHsWlUfBX63VgUL8w0LtdZHrY6MYTobdxzq38t15u8OZ3%2FB7sMI4gXZOtNxTFfEK3o0dCuqQAwrSU9TOHd8uVFKD%2Bsv4HldxzjrrubglnO3Oaismu%2Byxl8pwhACQV1rrtYCc5xiz1ZKdsKZUuJwBoDMClhuq1m8IlEQ2PLyVZdAuAhlvUcTrrzMfm4UM227NquRSPvJGd%2BLDOSuSbNrbxGJl792Y4WPBeoQUAymU776IZHMcheskgyPGnomX7E9ecOjvdTS7wqiwNLLwNYIzMYSPAczcnPcBw5mCVq61v%2B1hkUUMJIpBQOXRokrXz%2B%2BJpQC0Uh7DyotRK0m7BQm5tK0E1ty9RZJ1chUWXLdQQsSsNzLzDCl%2BbABjqkAcpHjx7JyJ7D4vPVPWELMQm%2BHIU7t3JpTVILswe%2BQbPYZIn4z2RvIbbGblhOqdgevK1%2Fb1vUbYznb6jeqPnQhGU0Zo4Y6G9azR%2FSpzzMGaX6PRpeci%2Bea9V578C22uoCC5Llhexc%2B0%2BG9PxCrhp3jxZFed8iskqM3tzdt2LVFOcB4niNcDMOLr7TOqlVS4I5JvDp9%2FuzVE3l3ykgKd%2FpoZ50xNyG&X-Amz-Signature=518bacf38e2427e70acec5c241ef6188f85aad4826b862c3a359edcd5809a306&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DXG7JR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxi5rU6zBDkopjFrosETSTWjmKMpFg%2BQpoMZ5%2FZzUMIQIhANHNFAnyfWNFERy3T6%2FgyuJPeUHt0nwoXs9AqvB0XJbJKv8DCD0QABoMNjM3NDIzMTgzODA1IgxY1w%2BAXgcavrnD4Bwq3ANU31i8l10fe1%2Fu%2Fleoyr0czxcvFl4MHuZBQEHa0Sifspvm1iNl7LaBEfu9TqIbEiFAs2d1qi3V3S9PK10aEc%2Bhikf9Ik0YWNLUI3k0atj%2BE3D4HUYn1MGHgQcyea6Qb%2Bso3NO06B6byQLWcPA00i6Jza3mybEFjty2pA6jWQHMm9uFVjN1xLOKnZtT4FRjlPeQHyudP8C8lmz0Q5SXrAacdlK93yZFmpCk0jamoeSnxhlJASzoze3qBMMm9vNJCo%2BQB77kCD31B7cHsWlUfBX63VgUL8w0LtdZHrY6MYTobdxzq38t15u8OZ3%2FB7sMI4gXZOtNxTFfEK3o0dCuqQAwrSU9TOHd8uVFKD%2Bsv4HldxzjrrubglnO3Oaismu%2Byxl8pwhACQV1rrtYCc5xiz1ZKdsKZUuJwBoDMClhuq1m8IlEQ2PLyVZdAuAhlvUcTrrzMfm4UM227NquRSPvJGd%2BLDOSuSbNrbxGJl792Y4WPBeoQUAymU776IZHMcheskgyPGnomX7E9ecOjvdTS7wqiwNLLwNYIzMYSPAczcnPcBw5mCVq61v%2B1hkUUMJIpBQOXRokrXz%2B%2BJpQC0Uh7DyotRK0m7BQm5tK0E1ty9RZJ1chUWXLdQQsSsNzLzDCl%2BbABjqkAcpHjx7JyJ7D4vPVPWELMQm%2BHIU7t3JpTVILswe%2BQbPYZIn4z2RvIbbGblhOqdgevK1%2Fb1vUbYznb6jeqPnQhGU0Zo4Y6G9azR%2FSpzzMGaX6PRpeci%2Bea9V578C22uoCC5Llhexc%2B0%2BG9PxCrhp3jxZFed8iskqM3tzdt2LVFOcB4niNcDMOLr7TOqlVS4I5JvDp9%2FuzVE3l3ykgKd%2FpoZ50xNyG&X-Amz-Signature=295da311adaa09ad10c11a0a9e637cc8eb17418361778205f12e2cc241cef180&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DXG7JR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxi5rU6zBDkopjFrosETSTWjmKMpFg%2BQpoMZ5%2FZzUMIQIhANHNFAnyfWNFERy3T6%2FgyuJPeUHt0nwoXs9AqvB0XJbJKv8DCD0QABoMNjM3NDIzMTgzODA1IgxY1w%2BAXgcavrnD4Bwq3ANU31i8l10fe1%2Fu%2Fleoyr0czxcvFl4MHuZBQEHa0Sifspvm1iNl7LaBEfu9TqIbEiFAs2d1qi3V3S9PK10aEc%2Bhikf9Ik0YWNLUI3k0atj%2BE3D4HUYn1MGHgQcyea6Qb%2Bso3NO06B6byQLWcPA00i6Jza3mybEFjty2pA6jWQHMm9uFVjN1xLOKnZtT4FRjlPeQHyudP8C8lmz0Q5SXrAacdlK93yZFmpCk0jamoeSnxhlJASzoze3qBMMm9vNJCo%2BQB77kCD31B7cHsWlUfBX63VgUL8w0LtdZHrY6MYTobdxzq38t15u8OZ3%2FB7sMI4gXZOtNxTFfEK3o0dCuqQAwrSU9TOHd8uVFKD%2Bsv4HldxzjrrubglnO3Oaismu%2Byxl8pwhACQV1rrtYCc5xiz1ZKdsKZUuJwBoDMClhuq1m8IlEQ2PLyVZdAuAhlvUcTrrzMfm4UM227NquRSPvJGd%2BLDOSuSbNrbxGJl792Y4WPBeoQUAymU776IZHMcheskgyPGnomX7E9ecOjvdTS7wqiwNLLwNYIzMYSPAczcnPcBw5mCVq61v%2B1hkUUMJIpBQOXRokrXz%2B%2BJpQC0Uh7DyotRK0m7BQm5tK0E1ty9RZJ1chUWXLdQQsSsNzLzDCl%2BbABjqkAcpHjx7JyJ7D4vPVPWELMQm%2BHIU7t3JpTVILswe%2BQbPYZIn4z2RvIbbGblhOqdgevK1%2Fb1vUbYznb6jeqPnQhGU0Zo4Y6G9azR%2FSpzzMGaX6PRpeci%2Bea9V578C22uoCC5Llhexc%2B0%2BG9PxCrhp3jxZFed8iskqM3tzdt2LVFOcB4niNcDMOLr7TOqlVS4I5JvDp9%2FuzVE3l3ykgKd%2FpoZ50xNyG&X-Amz-Signature=2e9b94813986490b3f4d26477de93f39da525c69178f2c4ea61430dd03d5c3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DXG7JR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxi5rU6zBDkopjFrosETSTWjmKMpFg%2BQpoMZ5%2FZzUMIQIhANHNFAnyfWNFERy3T6%2FgyuJPeUHt0nwoXs9AqvB0XJbJKv8DCD0QABoMNjM3NDIzMTgzODA1IgxY1w%2BAXgcavrnD4Bwq3ANU31i8l10fe1%2Fu%2Fleoyr0czxcvFl4MHuZBQEHa0Sifspvm1iNl7LaBEfu9TqIbEiFAs2d1qi3V3S9PK10aEc%2Bhikf9Ik0YWNLUI3k0atj%2BE3D4HUYn1MGHgQcyea6Qb%2Bso3NO06B6byQLWcPA00i6Jza3mybEFjty2pA6jWQHMm9uFVjN1xLOKnZtT4FRjlPeQHyudP8C8lmz0Q5SXrAacdlK93yZFmpCk0jamoeSnxhlJASzoze3qBMMm9vNJCo%2BQB77kCD31B7cHsWlUfBX63VgUL8w0LtdZHrY6MYTobdxzq38t15u8OZ3%2FB7sMI4gXZOtNxTFfEK3o0dCuqQAwrSU9TOHd8uVFKD%2Bsv4HldxzjrrubglnO3Oaismu%2Byxl8pwhACQV1rrtYCc5xiz1ZKdsKZUuJwBoDMClhuq1m8IlEQ2PLyVZdAuAhlvUcTrrzMfm4UM227NquRSPvJGd%2BLDOSuSbNrbxGJl792Y4WPBeoQUAymU776IZHMcheskgyPGnomX7E9ecOjvdTS7wqiwNLLwNYIzMYSPAczcnPcBw5mCVq61v%2B1hkUUMJIpBQOXRokrXz%2B%2BJpQC0Uh7DyotRK0m7BQm5tK0E1ty9RZJ1chUWXLdQQsSsNzLzDCl%2BbABjqkAcpHjx7JyJ7D4vPVPWELMQm%2BHIU7t3JpTVILswe%2BQbPYZIn4z2RvIbbGblhOqdgevK1%2Fb1vUbYznb6jeqPnQhGU0Zo4Y6G9azR%2FSpzzMGaX6PRpeci%2Bea9V578C22uoCC5Llhexc%2B0%2BG9PxCrhp3jxZFed8iskqM3tzdt2LVFOcB4niNcDMOLr7TOqlVS4I5JvDp9%2FuzVE3l3ykgKd%2FpoZ50xNyG&X-Amz-Signature=b4b46085383aad608ff3a80fef79119c14285c9030f846ce8522bc632489b26c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DXG7JR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxi5rU6zBDkopjFrosETSTWjmKMpFg%2BQpoMZ5%2FZzUMIQIhANHNFAnyfWNFERy3T6%2FgyuJPeUHt0nwoXs9AqvB0XJbJKv8DCD0QABoMNjM3NDIzMTgzODA1IgxY1w%2BAXgcavrnD4Bwq3ANU31i8l10fe1%2Fu%2Fleoyr0czxcvFl4MHuZBQEHa0Sifspvm1iNl7LaBEfu9TqIbEiFAs2d1qi3V3S9PK10aEc%2Bhikf9Ik0YWNLUI3k0atj%2BE3D4HUYn1MGHgQcyea6Qb%2Bso3NO06B6byQLWcPA00i6Jza3mybEFjty2pA6jWQHMm9uFVjN1xLOKnZtT4FRjlPeQHyudP8C8lmz0Q5SXrAacdlK93yZFmpCk0jamoeSnxhlJASzoze3qBMMm9vNJCo%2BQB77kCD31B7cHsWlUfBX63VgUL8w0LtdZHrY6MYTobdxzq38t15u8OZ3%2FB7sMI4gXZOtNxTFfEK3o0dCuqQAwrSU9TOHd8uVFKD%2Bsv4HldxzjrrubglnO3Oaismu%2Byxl8pwhACQV1rrtYCc5xiz1ZKdsKZUuJwBoDMClhuq1m8IlEQ2PLyVZdAuAhlvUcTrrzMfm4UM227NquRSPvJGd%2BLDOSuSbNrbxGJl792Y4WPBeoQUAymU776IZHMcheskgyPGnomX7E9ecOjvdTS7wqiwNLLwNYIzMYSPAczcnPcBw5mCVq61v%2B1hkUUMJIpBQOXRokrXz%2B%2BJpQC0Uh7DyotRK0m7BQm5tK0E1ty9RZJ1chUWXLdQQsSsNzLzDCl%2BbABjqkAcpHjx7JyJ7D4vPVPWELMQm%2BHIU7t3JpTVILswe%2BQbPYZIn4z2RvIbbGblhOqdgevK1%2Fb1vUbYznb6jeqPnQhGU0Zo4Y6G9azR%2FSpzzMGaX6PRpeci%2Bea9V578C22uoCC5Llhexc%2B0%2BG9PxCrhp3jxZFed8iskqM3tzdt2LVFOcB4niNcDMOLr7TOqlVS4I5JvDp9%2FuzVE3l3ykgKd%2FpoZ50xNyG&X-Amz-Signature=13148da9119aca7cd77a378b764d129abf2f3e2928ae91364d2bee0df8ce1f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

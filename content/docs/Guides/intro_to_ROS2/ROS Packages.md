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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZQ5RJ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGKGIZRv4s7AtNRV8krCvIam8P8pCxPa8%2FDOoKOrcH8AiAntVLW7a6fvQFOdrFgcs%2F2dq1dmNo9ZXCbrMOvqNQRfCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMOAQwwUV5bgEM4x1lKtwDXg8Nk3lABq%2BZMzR%2FpaL7PwLjZlOLzJSVcbfyon17WnK4CgLj588y5oxewIzsxDm8ximZ6lDqYxzXJGO6%2B1Jl53q2lCweixuK17wyxti%2FkWreFPBcKxC1NHoD1AlxQ1hcOlsbvePOJ3iiD2WZ%2BiONyqUI0OJhuT%2FuxQYI6lasN7kln5mI%2F48GiDaefI0xDsWmmIalrCxVIDBuCPKvBpHFpkkLdWnZFjnPsmGiwEzp6FZ8KpQZYWoaIOsHy97H1UzACKtlljuqT0PYro8hh7FnnSk41tn795qHK165p5yFgod4s1Hmr9u186NIgpwR6iZVWQ7rQy4uB9svnOgCZpZWFLf7V4ePncBJaOtDUEK24FQa7kh3N2Gtb3vgEbzIe3hTulIlUigOr1tUIW95mCBFDQEDpMuBc2eWO4IQVLk5%2FR9CZfiVUFruwrzMjmBUt%2BMsm5pshObIwTs9j1S%2B9qGHkkqvezH7%2B0rQrN5lO%2B5iDz2auKrOmNyiMyTJOdsJIes18fAHUEcFzFti71OBcUomy3902CFig7Ap1E0%2BP2oI6hJFt6FTPWT%2Fq7tduP7byavWtCTz7pfdOcI9E8B0Yzz4eqMfuK7Diqn83454HwwAIrKGcUDPhlXDiPUtcoUwmejjvgY6pgFDQVKvln%2FMF20Nsqi1Q6fyrSy2Q2leNFWo9ceKAyN%2B7aWBAD8m0u441tIVs7%2Bd8L9HICfn4TQB2xr6rHZs6QT3UR3G6PheN7u3ADf6f05%2BMhFDtVhvbQivMXGDQhaBseT%2FyoGtOluLUXcQmDyVPmX4%2Fb564je%2FbsgROKLUXbtzldwIj0%2FAxNBE%2FfWTqNM9wC9MjKWMkaTwlj0py0e8Wki5jfJhaeE0&X-Amz-Signature=d13df5805b7d10bd3e80b0e7ac90e47ae41caf8611c50ae7e153828a19c542f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZQ5RJ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGKGIZRv4s7AtNRV8krCvIam8P8pCxPa8%2FDOoKOrcH8AiAntVLW7a6fvQFOdrFgcs%2F2dq1dmNo9ZXCbrMOvqNQRfCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMOAQwwUV5bgEM4x1lKtwDXg8Nk3lABq%2BZMzR%2FpaL7PwLjZlOLzJSVcbfyon17WnK4CgLj588y5oxewIzsxDm8ximZ6lDqYxzXJGO6%2B1Jl53q2lCweixuK17wyxti%2FkWreFPBcKxC1NHoD1AlxQ1hcOlsbvePOJ3iiD2WZ%2BiONyqUI0OJhuT%2FuxQYI6lasN7kln5mI%2F48GiDaefI0xDsWmmIalrCxVIDBuCPKvBpHFpkkLdWnZFjnPsmGiwEzp6FZ8KpQZYWoaIOsHy97H1UzACKtlljuqT0PYro8hh7FnnSk41tn795qHK165p5yFgod4s1Hmr9u186NIgpwR6iZVWQ7rQy4uB9svnOgCZpZWFLf7V4ePncBJaOtDUEK24FQa7kh3N2Gtb3vgEbzIe3hTulIlUigOr1tUIW95mCBFDQEDpMuBc2eWO4IQVLk5%2FR9CZfiVUFruwrzMjmBUt%2BMsm5pshObIwTs9j1S%2B9qGHkkqvezH7%2B0rQrN5lO%2B5iDz2auKrOmNyiMyTJOdsJIes18fAHUEcFzFti71OBcUomy3902CFig7Ap1E0%2BP2oI6hJFt6FTPWT%2Fq7tduP7byavWtCTz7pfdOcI9E8B0Yzz4eqMfuK7Diqn83454HwwAIrKGcUDPhlXDiPUtcoUwmejjvgY6pgFDQVKvln%2FMF20Nsqi1Q6fyrSy2Q2leNFWo9ceKAyN%2B7aWBAD8m0u441tIVs7%2Bd8L9HICfn4TQB2xr6rHZs6QT3UR3G6PheN7u3ADf6f05%2BMhFDtVhvbQivMXGDQhaBseT%2FyoGtOluLUXcQmDyVPmX4%2Fb564je%2FbsgROKLUXbtzldwIj0%2FAxNBE%2FfWTqNM9wC9MjKWMkaTwlj0py0e8Wki5jfJhaeE0&X-Amz-Signature=99e0a14a11b0210bdf2bcfd03e2f202e69b62b23751aaa514ec114c376c0a406&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZQ5RJ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGKGIZRv4s7AtNRV8krCvIam8P8pCxPa8%2FDOoKOrcH8AiAntVLW7a6fvQFOdrFgcs%2F2dq1dmNo9ZXCbrMOvqNQRfCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMOAQwwUV5bgEM4x1lKtwDXg8Nk3lABq%2BZMzR%2FpaL7PwLjZlOLzJSVcbfyon17WnK4CgLj588y5oxewIzsxDm8ximZ6lDqYxzXJGO6%2B1Jl53q2lCweixuK17wyxti%2FkWreFPBcKxC1NHoD1AlxQ1hcOlsbvePOJ3iiD2WZ%2BiONyqUI0OJhuT%2FuxQYI6lasN7kln5mI%2F48GiDaefI0xDsWmmIalrCxVIDBuCPKvBpHFpkkLdWnZFjnPsmGiwEzp6FZ8KpQZYWoaIOsHy97H1UzACKtlljuqT0PYro8hh7FnnSk41tn795qHK165p5yFgod4s1Hmr9u186NIgpwR6iZVWQ7rQy4uB9svnOgCZpZWFLf7V4ePncBJaOtDUEK24FQa7kh3N2Gtb3vgEbzIe3hTulIlUigOr1tUIW95mCBFDQEDpMuBc2eWO4IQVLk5%2FR9CZfiVUFruwrzMjmBUt%2BMsm5pshObIwTs9j1S%2B9qGHkkqvezH7%2B0rQrN5lO%2B5iDz2auKrOmNyiMyTJOdsJIes18fAHUEcFzFti71OBcUomy3902CFig7Ap1E0%2BP2oI6hJFt6FTPWT%2Fq7tduP7byavWtCTz7pfdOcI9E8B0Yzz4eqMfuK7Diqn83454HwwAIrKGcUDPhlXDiPUtcoUwmejjvgY6pgFDQVKvln%2FMF20Nsqi1Q6fyrSy2Q2leNFWo9ceKAyN%2B7aWBAD8m0u441tIVs7%2Bd8L9HICfn4TQB2xr6rHZs6QT3UR3G6PheN7u3ADf6f05%2BMhFDtVhvbQivMXGDQhaBseT%2FyoGtOluLUXcQmDyVPmX4%2Fb564je%2FbsgROKLUXbtzldwIj0%2FAxNBE%2FfWTqNM9wC9MjKWMkaTwlj0py0e8Wki5jfJhaeE0&X-Amz-Signature=8be9af7b13ad3400a55833152330318c3319eb40031de4b06cf28a6b77f964e1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZQ5RJ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGKGIZRv4s7AtNRV8krCvIam8P8pCxPa8%2FDOoKOrcH8AiAntVLW7a6fvQFOdrFgcs%2F2dq1dmNo9ZXCbrMOvqNQRfCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMOAQwwUV5bgEM4x1lKtwDXg8Nk3lABq%2BZMzR%2FpaL7PwLjZlOLzJSVcbfyon17WnK4CgLj588y5oxewIzsxDm8ximZ6lDqYxzXJGO6%2B1Jl53q2lCweixuK17wyxti%2FkWreFPBcKxC1NHoD1AlxQ1hcOlsbvePOJ3iiD2WZ%2BiONyqUI0OJhuT%2FuxQYI6lasN7kln5mI%2F48GiDaefI0xDsWmmIalrCxVIDBuCPKvBpHFpkkLdWnZFjnPsmGiwEzp6FZ8KpQZYWoaIOsHy97H1UzACKtlljuqT0PYro8hh7FnnSk41tn795qHK165p5yFgod4s1Hmr9u186NIgpwR6iZVWQ7rQy4uB9svnOgCZpZWFLf7V4ePncBJaOtDUEK24FQa7kh3N2Gtb3vgEbzIe3hTulIlUigOr1tUIW95mCBFDQEDpMuBc2eWO4IQVLk5%2FR9CZfiVUFruwrzMjmBUt%2BMsm5pshObIwTs9j1S%2B9qGHkkqvezH7%2B0rQrN5lO%2B5iDz2auKrOmNyiMyTJOdsJIes18fAHUEcFzFti71OBcUomy3902CFig7Ap1E0%2BP2oI6hJFt6FTPWT%2Fq7tduP7byavWtCTz7pfdOcI9E8B0Yzz4eqMfuK7Diqn83454HwwAIrKGcUDPhlXDiPUtcoUwmejjvgY6pgFDQVKvln%2FMF20Nsqi1Q6fyrSy2Q2leNFWo9ceKAyN%2B7aWBAD8m0u441tIVs7%2Bd8L9HICfn4TQB2xr6rHZs6QT3UR3G6PheN7u3ADf6f05%2BMhFDtVhvbQivMXGDQhaBseT%2FyoGtOluLUXcQmDyVPmX4%2Fb564je%2FbsgROKLUXbtzldwIj0%2FAxNBE%2FfWTqNM9wC9MjKWMkaTwlj0py0e8Wki5jfJhaeE0&X-Amz-Signature=797110f76492d35aabeae09fda2d5b66f9005ebbd96a64835e55900af2772a59&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZQ5RJ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGKGIZRv4s7AtNRV8krCvIam8P8pCxPa8%2FDOoKOrcH8AiAntVLW7a6fvQFOdrFgcs%2F2dq1dmNo9ZXCbrMOvqNQRfCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMOAQwwUV5bgEM4x1lKtwDXg8Nk3lABq%2BZMzR%2FpaL7PwLjZlOLzJSVcbfyon17WnK4CgLj588y5oxewIzsxDm8ximZ6lDqYxzXJGO6%2B1Jl53q2lCweixuK17wyxti%2FkWreFPBcKxC1NHoD1AlxQ1hcOlsbvePOJ3iiD2WZ%2BiONyqUI0OJhuT%2FuxQYI6lasN7kln5mI%2F48GiDaefI0xDsWmmIalrCxVIDBuCPKvBpHFpkkLdWnZFjnPsmGiwEzp6FZ8KpQZYWoaIOsHy97H1UzACKtlljuqT0PYro8hh7FnnSk41tn795qHK165p5yFgod4s1Hmr9u186NIgpwR6iZVWQ7rQy4uB9svnOgCZpZWFLf7V4ePncBJaOtDUEK24FQa7kh3N2Gtb3vgEbzIe3hTulIlUigOr1tUIW95mCBFDQEDpMuBc2eWO4IQVLk5%2FR9CZfiVUFruwrzMjmBUt%2BMsm5pshObIwTs9j1S%2B9qGHkkqvezH7%2B0rQrN5lO%2B5iDz2auKrOmNyiMyTJOdsJIes18fAHUEcFzFti71OBcUomy3902CFig7Ap1E0%2BP2oI6hJFt6FTPWT%2Fq7tduP7byavWtCTz7pfdOcI9E8B0Yzz4eqMfuK7Diqn83454HwwAIrKGcUDPhlXDiPUtcoUwmejjvgY6pgFDQVKvln%2FMF20Nsqi1Q6fyrSy2Q2leNFWo9ceKAyN%2B7aWBAD8m0u441tIVs7%2Bd8L9HICfn4TQB2xr6rHZs6QT3UR3G6PheN7u3ADf6f05%2BMhFDtVhvbQivMXGDQhaBseT%2FyoGtOluLUXcQmDyVPmX4%2Fb564je%2FbsgROKLUXbtzldwIj0%2FAxNBE%2FfWTqNM9wC9MjKWMkaTwlj0py0e8Wki5jfJhaeE0&X-Amz-Signature=86d103a30d914ff2c637ad999b5bc27932b83707d4590396b7fc6615e3f23734&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZQ5RJ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGKGIZRv4s7AtNRV8krCvIam8P8pCxPa8%2FDOoKOrcH8AiAntVLW7a6fvQFOdrFgcs%2F2dq1dmNo9ZXCbrMOvqNQRfCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMOAQwwUV5bgEM4x1lKtwDXg8Nk3lABq%2BZMzR%2FpaL7PwLjZlOLzJSVcbfyon17WnK4CgLj588y5oxewIzsxDm8ximZ6lDqYxzXJGO6%2B1Jl53q2lCweixuK17wyxti%2FkWreFPBcKxC1NHoD1AlxQ1hcOlsbvePOJ3iiD2WZ%2BiONyqUI0OJhuT%2FuxQYI6lasN7kln5mI%2F48GiDaefI0xDsWmmIalrCxVIDBuCPKvBpHFpkkLdWnZFjnPsmGiwEzp6FZ8KpQZYWoaIOsHy97H1UzACKtlljuqT0PYro8hh7FnnSk41tn795qHK165p5yFgod4s1Hmr9u186NIgpwR6iZVWQ7rQy4uB9svnOgCZpZWFLf7V4ePncBJaOtDUEK24FQa7kh3N2Gtb3vgEbzIe3hTulIlUigOr1tUIW95mCBFDQEDpMuBc2eWO4IQVLk5%2FR9CZfiVUFruwrzMjmBUt%2BMsm5pshObIwTs9j1S%2B9qGHkkqvezH7%2B0rQrN5lO%2B5iDz2auKrOmNyiMyTJOdsJIes18fAHUEcFzFti71OBcUomy3902CFig7Ap1E0%2BP2oI6hJFt6FTPWT%2Fq7tduP7byavWtCTz7pfdOcI9E8B0Yzz4eqMfuK7Diqn83454HwwAIrKGcUDPhlXDiPUtcoUwmejjvgY6pgFDQVKvln%2FMF20Nsqi1Q6fyrSy2Q2leNFWo9ceKAyN%2B7aWBAD8m0u441tIVs7%2Bd8L9HICfn4TQB2xr6rHZs6QT3UR3G6PheN7u3ADf6f05%2BMhFDtVhvbQivMXGDQhaBseT%2FyoGtOluLUXcQmDyVPmX4%2Fb564je%2FbsgROKLUXbtzldwIj0%2FAxNBE%2FfWTqNM9wC9MjKWMkaTwlj0py0e8Wki5jfJhaeE0&X-Amz-Signature=0325aa9b12a127cbf54628e7602c2447cf4a40108aa775d14bfb7c4a639f40bc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZQ5RJ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGKGIZRv4s7AtNRV8krCvIam8P8pCxPa8%2FDOoKOrcH8AiAntVLW7a6fvQFOdrFgcs%2F2dq1dmNo9ZXCbrMOvqNQRfCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMOAQwwUV5bgEM4x1lKtwDXg8Nk3lABq%2BZMzR%2FpaL7PwLjZlOLzJSVcbfyon17WnK4CgLj588y5oxewIzsxDm8ximZ6lDqYxzXJGO6%2B1Jl53q2lCweixuK17wyxti%2FkWreFPBcKxC1NHoD1AlxQ1hcOlsbvePOJ3iiD2WZ%2BiONyqUI0OJhuT%2FuxQYI6lasN7kln5mI%2F48GiDaefI0xDsWmmIalrCxVIDBuCPKvBpHFpkkLdWnZFjnPsmGiwEzp6FZ8KpQZYWoaIOsHy97H1UzACKtlljuqT0PYro8hh7FnnSk41tn795qHK165p5yFgod4s1Hmr9u186NIgpwR6iZVWQ7rQy4uB9svnOgCZpZWFLf7V4ePncBJaOtDUEK24FQa7kh3N2Gtb3vgEbzIe3hTulIlUigOr1tUIW95mCBFDQEDpMuBc2eWO4IQVLk5%2FR9CZfiVUFruwrzMjmBUt%2BMsm5pshObIwTs9j1S%2B9qGHkkqvezH7%2B0rQrN5lO%2B5iDz2auKrOmNyiMyTJOdsJIes18fAHUEcFzFti71OBcUomy3902CFig7Ap1E0%2BP2oI6hJFt6FTPWT%2Fq7tduP7byavWtCTz7pfdOcI9E8B0Yzz4eqMfuK7Diqn83454HwwAIrKGcUDPhlXDiPUtcoUwmejjvgY6pgFDQVKvln%2FMF20Nsqi1Q6fyrSy2Q2leNFWo9ceKAyN%2B7aWBAD8m0u441tIVs7%2Bd8L9HICfn4TQB2xr6rHZs6QT3UR3G6PheN7u3ADf6f05%2BMhFDtVhvbQivMXGDQhaBseT%2FyoGtOluLUXcQmDyVPmX4%2Fb564je%2FbsgROKLUXbtzldwIj0%2FAxNBE%2FfWTqNM9wC9MjKWMkaTwlj0py0e8Wki5jfJhaeE0&X-Amz-Signature=85ee00233d4bd72313a950802dbb0d19d1abefcdca324b4682562d5e651efc68&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

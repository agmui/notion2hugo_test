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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLIRR5F%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCEr61jv6gsEuDXRWN%2Fb4KO73majiVfJoG725qd2gc7XgIgJkDe70pIJa%2Brvny%2BsSfXkTvO8Bz1OnFHImtGLJZLnV8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH%2Ftz3QGqEaXohIkSrcAxTl5nbAY8pItrnwivDXnWQ2qXTYtO%2BGFYDA0LLo00OlroPZXZsM0ZNmI7R33jfe7P7xYqicf8G%2F%2BDuC4Xq9cWSNcJ4U7KNCHotuTycZOmXcSpPOWvW2BndDdevTZQpDaesM0%2FzsxozlC7pFotAeBTZebByrLOvaiL6pngBYyWgRr6HFthLss6VTQLEpD9OH6MylcITUPtN29Y6wYSETt8djrj4Bn7pbqAGLow%2F6TI0BwkjC9uxSnX%2Fs32n3Cg2Ckh7btzANWjaZi6Y%2FeEdAHLlKKN3VTWrYEfuOEGemUXLsELifCw0qeQ7ILGchZWqaLobam262dGZwVyE0WYjJDtAcZKaYGsG8Ps%2B13PfsiQ3A4COyFyoEgSI0DWkM37hw6GVkp9eTUIajeyk%2FmWUXLI%2BDSWHljkh0g30iSO0qqjdS7EZ%2FhqJdtsnkOpuoEMb3YHvDokfW4GCKvaXMGA5KkQkF5PgfUDTqxRQavqXgM5t%2B7JuyXO5Z7QhFqFlTf2nWT5M0ZkdVe1tzDU7vNmkuWLyUbbZLP1VXxfuuPIgwL54OcD%2FiVUY1ysm1D%2BODZ3tvUzbayY0mTFhcXPw0v25bGaA7KHywlOkAEmcECwLBidFasiG7ylQQGiTgmOWFMNChw8EGOqUBH5Mtr1t4rn3QQT670Wvkqm00rw%2BdhXNjQskMB3g5gsFNu%2Bg4Xusoj9i8L0y8D7lce8fJR5Kmq2mDUwaduGiFKeohe7GbgCKeX1mSuojyhBOiTE2g2hkvmqaYNnueQDvYPlz8pBBWxV48DiyTlxMnXfQmJBkJfFlIvdXfNwhP3N4Ik334Amb%2F1J9PTHA1c8PLeV4xlEHYpNNj%2BMPEr2OQdDzUBm4X&X-Amz-Signature=9c4c9cc8360e55a2702b2c2cd31b50edfa40e7ac8a8ca15fd4ebfdc3dfe76b97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLIRR5F%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCEr61jv6gsEuDXRWN%2Fb4KO73majiVfJoG725qd2gc7XgIgJkDe70pIJa%2Brvny%2BsSfXkTvO8Bz1OnFHImtGLJZLnV8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH%2Ftz3QGqEaXohIkSrcAxTl5nbAY8pItrnwivDXnWQ2qXTYtO%2BGFYDA0LLo00OlroPZXZsM0ZNmI7R33jfe7P7xYqicf8G%2F%2BDuC4Xq9cWSNcJ4U7KNCHotuTycZOmXcSpPOWvW2BndDdevTZQpDaesM0%2FzsxozlC7pFotAeBTZebByrLOvaiL6pngBYyWgRr6HFthLss6VTQLEpD9OH6MylcITUPtN29Y6wYSETt8djrj4Bn7pbqAGLow%2F6TI0BwkjC9uxSnX%2Fs32n3Cg2Ckh7btzANWjaZi6Y%2FeEdAHLlKKN3VTWrYEfuOEGemUXLsELifCw0qeQ7ILGchZWqaLobam262dGZwVyE0WYjJDtAcZKaYGsG8Ps%2B13PfsiQ3A4COyFyoEgSI0DWkM37hw6GVkp9eTUIajeyk%2FmWUXLI%2BDSWHljkh0g30iSO0qqjdS7EZ%2FhqJdtsnkOpuoEMb3YHvDokfW4GCKvaXMGA5KkQkF5PgfUDTqxRQavqXgM5t%2B7JuyXO5Z7QhFqFlTf2nWT5M0ZkdVe1tzDU7vNmkuWLyUbbZLP1VXxfuuPIgwL54OcD%2FiVUY1ysm1D%2BODZ3tvUzbayY0mTFhcXPw0v25bGaA7KHywlOkAEmcECwLBidFasiG7ylQQGiTgmOWFMNChw8EGOqUBH5Mtr1t4rn3QQT670Wvkqm00rw%2BdhXNjQskMB3g5gsFNu%2Bg4Xusoj9i8L0y8D7lce8fJR5Kmq2mDUwaduGiFKeohe7GbgCKeX1mSuojyhBOiTE2g2hkvmqaYNnueQDvYPlz8pBBWxV48DiyTlxMnXfQmJBkJfFlIvdXfNwhP3N4Ik334Amb%2F1J9PTHA1c8PLeV4xlEHYpNNj%2BMPEr2OQdDzUBm4X&X-Amz-Signature=af7410b987e7c0024480c721e22069467948ce595452ae4bc39e1add4cababc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLIRR5F%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCEr61jv6gsEuDXRWN%2Fb4KO73majiVfJoG725qd2gc7XgIgJkDe70pIJa%2Brvny%2BsSfXkTvO8Bz1OnFHImtGLJZLnV8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH%2Ftz3QGqEaXohIkSrcAxTl5nbAY8pItrnwivDXnWQ2qXTYtO%2BGFYDA0LLo00OlroPZXZsM0ZNmI7R33jfe7P7xYqicf8G%2F%2BDuC4Xq9cWSNcJ4U7KNCHotuTycZOmXcSpPOWvW2BndDdevTZQpDaesM0%2FzsxozlC7pFotAeBTZebByrLOvaiL6pngBYyWgRr6HFthLss6VTQLEpD9OH6MylcITUPtN29Y6wYSETt8djrj4Bn7pbqAGLow%2F6TI0BwkjC9uxSnX%2Fs32n3Cg2Ckh7btzANWjaZi6Y%2FeEdAHLlKKN3VTWrYEfuOEGemUXLsELifCw0qeQ7ILGchZWqaLobam262dGZwVyE0WYjJDtAcZKaYGsG8Ps%2B13PfsiQ3A4COyFyoEgSI0DWkM37hw6GVkp9eTUIajeyk%2FmWUXLI%2BDSWHljkh0g30iSO0qqjdS7EZ%2FhqJdtsnkOpuoEMb3YHvDokfW4GCKvaXMGA5KkQkF5PgfUDTqxRQavqXgM5t%2B7JuyXO5Z7QhFqFlTf2nWT5M0ZkdVe1tzDU7vNmkuWLyUbbZLP1VXxfuuPIgwL54OcD%2FiVUY1ysm1D%2BODZ3tvUzbayY0mTFhcXPw0v25bGaA7KHywlOkAEmcECwLBidFasiG7ylQQGiTgmOWFMNChw8EGOqUBH5Mtr1t4rn3QQT670Wvkqm00rw%2BdhXNjQskMB3g5gsFNu%2Bg4Xusoj9i8L0y8D7lce8fJR5Kmq2mDUwaduGiFKeohe7GbgCKeX1mSuojyhBOiTE2g2hkvmqaYNnueQDvYPlz8pBBWxV48DiyTlxMnXfQmJBkJfFlIvdXfNwhP3N4Ik334Amb%2F1J9PTHA1c8PLeV4xlEHYpNNj%2BMPEr2OQdDzUBm4X&X-Amz-Signature=74f6dc364f477ded705334de00b33e3a52a5cd36d9a0151983ac923ae41ea2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLIRR5F%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCEr61jv6gsEuDXRWN%2Fb4KO73majiVfJoG725qd2gc7XgIgJkDe70pIJa%2Brvny%2BsSfXkTvO8Bz1OnFHImtGLJZLnV8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH%2Ftz3QGqEaXohIkSrcAxTl5nbAY8pItrnwivDXnWQ2qXTYtO%2BGFYDA0LLo00OlroPZXZsM0ZNmI7R33jfe7P7xYqicf8G%2F%2BDuC4Xq9cWSNcJ4U7KNCHotuTycZOmXcSpPOWvW2BndDdevTZQpDaesM0%2FzsxozlC7pFotAeBTZebByrLOvaiL6pngBYyWgRr6HFthLss6VTQLEpD9OH6MylcITUPtN29Y6wYSETt8djrj4Bn7pbqAGLow%2F6TI0BwkjC9uxSnX%2Fs32n3Cg2Ckh7btzANWjaZi6Y%2FeEdAHLlKKN3VTWrYEfuOEGemUXLsELifCw0qeQ7ILGchZWqaLobam262dGZwVyE0WYjJDtAcZKaYGsG8Ps%2B13PfsiQ3A4COyFyoEgSI0DWkM37hw6GVkp9eTUIajeyk%2FmWUXLI%2BDSWHljkh0g30iSO0qqjdS7EZ%2FhqJdtsnkOpuoEMb3YHvDokfW4GCKvaXMGA5KkQkF5PgfUDTqxRQavqXgM5t%2B7JuyXO5Z7QhFqFlTf2nWT5M0ZkdVe1tzDU7vNmkuWLyUbbZLP1VXxfuuPIgwL54OcD%2FiVUY1ysm1D%2BODZ3tvUzbayY0mTFhcXPw0v25bGaA7KHywlOkAEmcECwLBidFasiG7ylQQGiTgmOWFMNChw8EGOqUBH5Mtr1t4rn3QQT670Wvkqm00rw%2BdhXNjQskMB3g5gsFNu%2Bg4Xusoj9i8L0y8D7lce8fJR5Kmq2mDUwaduGiFKeohe7GbgCKeX1mSuojyhBOiTE2g2hkvmqaYNnueQDvYPlz8pBBWxV48DiyTlxMnXfQmJBkJfFlIvdXfNwhP3N4Ik334Amb%2F1J9PTHA1c8PLeV4xlEHYpNNj%2BMPEr2OQdDzUBm4X&X-Amz-Signature=de0a270445bd5a4cf1797f800a0fe36c39ed76979f6de84bad9b1ad086858197&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLIRR5F%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCEr61jv6gsEuDXRWN%2Fb4KO73majiVfJoG725qd2gc7XgIgJkDe70pIJa%2Brvny%2BsSfXkTvO8Bz1OnFHImtGLJZLnV8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH%2Ftz3QGqEaXohIkSrcAxTl5nbAY8pItrnwivDXnWQ2qXTYtO%2BGFYDA0LLo00OlroPZXZsM0ZNmI7R33jfe7P7xYqicf8G%2F%2BDuC4Xq9cWSNcJ4U7KNCHotuTycZOmXcSpPOWvW2BndDdevTZQpDaesM0%2FzsxozlC7pFotAeBTZebByrLOvaiL6pngBYyWgRr6HFthLss6VTQLEpD9OH6MylcITUPtN29Y6wYSETt8djrj4Bn7pbqAGLow%2F6TI0BwkjC9uxSnX%2Fs32n3Cg2Ckh7btzANWjaZi6Y%2FeEdAHLlKKN3VTWrYEfuOEGemUXLsELifCw0qeQ7ILGchZWqaLobam262dGZwVyE0WYjJDtAcZKaYGsG8Ps%2B13PfsiQ3A4COyFyoEgSI0DWkM37hw6GVkp9eTUIajeyk%2FmWUXLI%2BDSWHljkh0g30iSO0qqjdS7EZ%2FhqJdtsnkOpuoEMb3YHvDokfW4GCKvaXMGA5KkQkF5PgfUDTqxRQavqXgM5t%2B7JuyXO5Z7QhFqFlTf2nWT5M0ZkdVe1tzDU7vNmkuWLyUbbZLP1VXxfuuPIgwL54OcD%2FiVUY1ysm1D%2BODZ3tvUzbayY0mTFhcXPw0v25bGaA7KHywlOkAEmcECwLBidFasiG7ylQQGiTgmOWFMNChw8EGOqUBH5Mtr1t4rn3QQT670Wvkqm00rw%2BdhXNjQskMB3g5gsFNu%2Bg4Xusoj9i8L0y8D7lce8fJR5Kmq2mDUwaduGiFKeohe7GbgCKeX1mSuojyhBOiTE2g2hkvmqaYNnueQDvYPlz8pBBWxV48DiyTlxMnXfQmJBkJfFlIvdXfNwhP3N4Ik334Amb%2F1J9PTHA1c8PLeV4xlEHYpNNj%2BMPEr2OQdDzUBm4X&X-Amz-Signature=41522fc632d5ede9bcd4aa3736a299f9f3a8e7610c0deefd55e1729d3de1184c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLIRR5F%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCEr61jv6gsEuDXRWN%2Fb4KO73majiVfJoG725qd2gc7XgIgJkDe70pIJa%2Brvny%2BsSfXkTvO8Bz1OnFHImtGLJZLnV8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH%2Ftz3QGqEaXohIkSrcAxTl5nbAY8pItrnwivDXnWQ2qXTYtO%2BGFYDA0LLo00OlroPZXZsM0ZNmI7R33jfe7P7xYqicf8G%2F%2BDuC4Xq9cWSNcJ4U7KNCHotuTycZOmXcSpPOWvW2BndDdevTZQpDaesM0%2FzsxozlC7pFotAeBTZebByrLOvaiL6pngBYyWgRr6HFthLss6VTQLEpD9OH6MylcITUPtN29Y6wYSETt8djrj4Bn7pbqAGLow%2F6TI0BwkjC9uxSnX%2Fs32n3Cg2Ckh7btzANWjaZi6Y%2FeEdAHLlKKN3VTWrYEfuOEGemUXLsELifCw0qeQ7ILGchZWqaLobam262dGZwVyE0WYjJDtAcZKaYGsG8Ps%2B13PfsiQ3A4COyFyoEgSI0DWkM37hw6GVkp9eTUIajeyk%2FmWUXLI%2BDSWHljkh0g30iSO0qqjdS7EZ%2FhqJdtsnkOpuoEMb3YHvDokfW4GCKvaXMGA5KkQkF5PgfUDTqxRQavqXgM5t%2B7JuyXO5Z7QhFqFlTf2nWT5M0ZkdVe1tzDU7vNmkuWLyUbbZLP1VXxfuuPIgwL54OcD%2FiVUY1ysm1D%2BODZ3tvUzbayY0mTFhcXPw0v25bGaA7KHywlOkAEmcECwLBidFasiG7ylQQGiTgmOWFMNChw8EGOqUBH5Mtr1t4rn3QQT670Wvkqm00rw%2BdhXNjQskMB3g5gsFNu%2Bg4Xusoj9i8L0y8D7lce8fJR5Kmq2mDUwaduGiFKeohe7GbgCKeX1mSuojyhBOiTE2g2hkvmqaYNnueQDvYPlz8pBBWxV48DiyTlxMnXfQmJBkJfFlIvdXfNwhP3N4Ik334Amb%2F1J9PTHA1c8PLeV4xlEHYpNNj%2BMPEr2OQdDzUBm4X&X-Amz-Signature=c15826ed3888931c3ff1605c28e8cfec2e128cc29df9cec37960bb633ce91be4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLIRR5F%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCEr61jv6gsEuDXRWN%2Fb4KO73majiVfJoG725qd2gc7XgIgJkDe70pIJa%2Brvny%2BsSfXkTvO8Bz1OnFHImtGLJZLnV8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH%2Ftz3QGqEaXohIkSrcAxTl5nbAY8pItrnwivDXnWQ2qXTYtO%2BGFYDA0LLo00OlroPZXZsM0ZNmI7R33jfe7P7xYqicf8G%2F%2BDuC4Xq9cWSNcJ4U7KNCHotuTycZOmXcSpPOWvW2BndDdevTZQpDaesM0%2FzsxozlC7pFotAeBTZebByrLOvaiL6pngBYyWgRr6HFthLss6VTQLEpD9OH6MylcITUPtN29Y6wYSETt8djrj4Bn7pbqAGLow%2F6TI0BwkjC9uxSnX%2Fs32n3Cg2Ckh7btzANWjaZi6Y%2FeEdAHLlKKN3VTWrYEfuOEGemUXLsELifCw0qeQ7ILGchZWqaLobam262dGZwVyE0WYjJDtAcZKaYGsG8Ps%2B13PfsiQ3A4COyFyoEgSI0DWkM37hw6GVkp9eTUIajeyk%2FmWUXLI%2BDSWHljkh0g30iSO0qqjdS7EZ%2FhqJdtsnkOpuoEMb3YHvDokfW4GCKvaXMGA5KkQkF5PgfUDTqxRQavqXgM5t%2B7JuyXO5Z7QhFqFlTf2nWT5M0ZkdVe1tzDU7vNmkuWLyUbbZLP1VXxfuuPIgwL54OcD%2FiVUY1ysm1D%2BODZ3tvUzbayY0mTFhcXPw0v25bGaA7KHywlOkAEmcECwLBidFasiG7ylQQGiTgmOWFMNChw8EGOqUBH5Mtr1t4rn3QQT670Wvkqm00rw%2BdhXNjQskMB3g5gsFNu%2Bg4Xusoj9i8L0y8D7lce8fJR5Kmq2mDUwaduGiFKeohe7GbgCKeX1mSuojyhBOiTE2g2hkvmqaYNnueQDvYPlz8pBBWxV48DiyTlxMnXfQmJBkJfFlIvdXfNwhP3N4Ik334Amb%2F1J9PTHA1c8PLeV4xlEHYpNNj%2BMPEr2OQdDzUBm4X&X-Amz-Signature=a3d4913e1a30a2599635643b7392b860cd2a0ea995b5b3fedce4156060565cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

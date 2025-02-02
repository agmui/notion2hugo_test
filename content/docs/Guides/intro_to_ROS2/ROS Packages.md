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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5JP5WO%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv%2BY1bVM0AkwpS64t42c8TwC8wnVgKdtPwnA7PgbQwMAiBqo1K31Fkq2gC451EJHvMYcKsDKMc8sk8xMPbpLPp1KiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCROrHKVGoEspCvKKtwDYnQTTWpuJqSxlaGoZTFoO7qqCifz7cRpqi99S%2Fg9wEF29XL7Jq%2BL1MbVsTzZWuoiTudRntE4l7ODjhTLxKzJAm8zFIlSkHLA2jRdh6sh8oGWq%2FI0HhQBuKoHzVyKFOfFNaF4SeMFRD9PUOfMCmeiyTLkfCNhUN2b1WwVgXlhsQ07uiCzXki2MHymFFhX5OEKr4ES3ZmVWWnORj2djsYjblC7kKO9yFqYYYFYBsENxShJFT9ngLVANXdDRRmn5aczR%2F%2BpluFsiDqBqhGyg7hUFF9tPmycK0EEwc7T%2BBW1O3p%2BA9A2Yvw%2BwevPZO9ATzTDGiyMazuGH%2BWv1pSdDdLp3dAdxWcizX0ApbcaKtpjxf%2FxTEQHpM%2BIhxkEH4Q1b8RiPDImgJLSzIozlmIPsmfnOsBpVYHvhcJg%2FPUQc%2BOVv6epjpHa8iA7S%2B3IdFzyboIZjPs5zPOZMMVZ2FDu6E1jFGndeR%2BR3cHoFWGK0bd37geu2sQa4MPkKE90nRHgTh2X8kPtSbOF6CQASKFWxrPj%2FdqbJ24I5IAviEcRYsYESIsp5sC0%2FyF8B98sdWaAqPnvfcL3CzcryZL4kz%2FcfovHuENKriPN7n7GDTSMvVEUsXZRYgYxmZfR1AA%2BzYYwmJ38vAY6pgHam1QbEuONFdkRaL%2BvvUX5ZKa8eEi4sr1bSycO2gnsw%2F2jmCf3lNEYlkvBIlZh4fQxJjXBQlLXWxdGjmAE3Npz7Af%2BgbHP9Xvv6H8yI6bGZ%2FtJwTDsrmYYftNFmfWNuv4rks3LjvPGDpu8SBd9qeeLI6bOAkiHxUIhyz7I%2FiCbway3J7Xav41KqlE1E3xjHuuVfK8TImZtgjZbqWF%2FRyb3Iwmv%2BjHg&X-Amz-Signature=f2d9c2ce676eb15d0dfc07e56a0812162ba5592460508adcc71b24b3b4847f39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5JP5WO%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv%2BY1bVM0AkwpS64t42c8TwC8wnVgKdtPwnA7PgbQwMAiBqo1K31Fkq2gC451EJHvMYcKsDKMc8sk8xMPbpLPp1KiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCROrHKVGoEspCvKKtwDYnQTTWpuJqSxlaGoZTFoO7qqCifz7cRpqi99S%2Fg9wEF29XL7Jq%2BL1MbVsTzZWuoiTudRntE4l7ODjhTLxKzJAm8zFIlSkHLA2jRdh6sh8oGWq%2FI0HhQBuKoHzVyKFOfFNaF4SeMFRD9PUOfMCmeiyTLkfCNhUN2b1WwVgXlhsQ07uiCzXki2MHymFFhX5OEKr4ES3ZmVWWnORj2djsYjblC7kKO9yFqYYYFYBsENxShJFT9ngLVANXdDRRmn5aczR%2F%2BpluFsiDqBqhGyg7hUFF9tPmycK0EEwc7T%2BBW1O3p%2BA9A2Yvw%2BwevPZO9ATzTDGiyMazuGH%2BWv1pSdDdLp3dAdxWcizX0ApbcaKtpjxf%2FxTEQHpM%2BIhxkEH4Q1b8RiPDImgJLSzIozlmIPsmfnOsBpVYHvhcJg%2FPUQc%2BOVv6epjpHa8iA7S%2B3IdFzyboIZjPs5zPOZMMVZ2FDu6E1jFGndeR%2BR3cHoFWGK0bd37geu2sQa4MPkKE90nRHgTh2X8kPtSbOF6CQASKFWxrPj%2FdqbJ24I5IAviEcRYsYESIsp5sC0%2FyF8B98sdWaAqPnvfcL3CzcryZL4kz%2FcfovHuENKriPN7n7GDTSMvVEUsXZRYgYxmZfR1AA%2BzYYwmJ38vAY6pgHam1QbEuONFdkRaL%2BvvUX5ZKa8eEi4sr1bSycO2gnsw%2F2jmCf3lNEYlkvBIlZh4fQxJjXBQlLXWxdGjmAE3Npz7Af%2BgbHP9Xvv6H8yI6bGZ%2FtJwTDsrmYYftNFmfWNuv4rks3LjvPGDpu8SBd9qeeLI6bOAkiHxUIhyz7I%2FiCbway3J7Xav41KqlE1E3xjHuuVfK8TImZtgjZbqWF%2FRyb3Iwmv%2BjHg&X-Amz-Signature=b9c4bbcc6a415929839d5a0b747cdfcd899ca38720119b5d7c5885e32d580e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5JP5WO%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv%2BY1bVM0AkwpS64t42c8TwC8wnVgKdtPwnA7PgbQwMAiBqo1K31Fkq2gC451EJHvMYcKsDKMc8sk8xMPbpLPp1KiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCROrHKVGoEspCvKKtwDYnQTTWpuJqSxlaGoZTFoO7qqCifz7cRpqi99S%2Fg9wEF29XL7Jq%2BL1MbVsTzZWuoiTudRntE4l7ODjhTLxKzJAm8zFIlSkHLA2jRdh6sh8oGWq%2FI0HhQBuKoHzVyKFOfFNaF4SeMFRD9PUOfMCmeiyTLkfCNhUN2b1WwVgXlhsQ07uiCzXki2MHymFFhX5OEKr4ES3ZmVWWnORj2djsYjblC7kKO9yFqYYYFYBsENxShJFT9ngLVANXdDRRmn5aczR%2F%2BpluFsiDqBqhGyg7hUFF9tPmycK0EEwc7T%2BBW1O3p%2BA9A2Yvw%2BwevPZO9ATzTDGiyMazuGH%2BWv1pSdDdLp3dAdxWcizX0ApbcaKtpjxf%2FxTEQHpM%2BIhxkEH4Q1b8RiPDImgJLSzIozlmIPsmfnOsBpVYHvhcJg%2FPUQc%2BOVv6epjpHa8iA7S%2B3IdFzyboIZjPs5zPOZMMVZ2FDu6E1jFGndeR%2BR3cHoFWGK0bd37geu2sQa4MPkKE90nRHgTh2X8kPtSbOF6CQASKFWxrPj%2FdqbJ24I5IAviEcRYsYESIsp5sC0%2FyF8B98sdWaAqPnvfcL3CzcryZL4kz%2FcfovHuENKriPN7n7GDTSMvVEUsXZRYgYxmZfR1AA%2BzYYwmJ38vAY6pgHam1QbEuONFdkRaL%2BvvUX5ZKa8eEi4sr1bSycO2gnsw%2F2jmCf3lNEYlkvBIlZh4fQxJjXBQlLXWxdGjmAE3Npz7Af%2BgbHP9Xvv6H8yI6bGZ%2FtJwTDsrmYYftNFmfWNuv4rks3LjvPGDpu8SBd9qeeLI6bOAkiHxUIhyz7I%2FiCbway3J7Xav41KqlE1E3xjHuuVfK8TImZtgjZbqWF%2FRyb3Iwmv%2BjHg&X-Amz-Signature=af517e0930271aae0ef910e502e148daa0d3e145bac5de3451b2c66a7f5e4b69&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5JP5WO%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv%2BY1bVM0AkwpS64t42c8TwC8wnVgKdtPwnA7PgbQwMAiBqo1K31Fkq2gC451EJHvMYcKsDKMc8sk8xMPbpLPp1KiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCROrHKVGoEspCvKKtwDYnQTTWpuJqSxlaGoZTFoO7qqCifz7cRpqi99S%2Fg9wEF29XL7Jq%2BL1MbVsTzZWuoiTudRntE4l7ODjhTLxKzJAm8zFIlSkHLA2jRdh6sh8oGWq%2FI0HhQBuKoHzVyKFOfFNaF4SeMFRD9PUOfMCmeiyTLkfCNhUN2b1WwVgXlhsQ07uiCzXki2MHymFFhX5OEKr4ES3ZmVWWnORj2djsYjblC7kKO9yFqYYYFYBsENxShJFT9ngLVANXdDRRmn5aczR%2F%2BpluFsiDqBqhGyg7hUFF9tPmycK0EEwc7T%2BBW1O3p%2BA9A2Yvw%2BwevPZO9ATzTDGiyMazuGH%2BWv1pSdDdLp3dAdxWcizX0ApbcaKtpjxf%2FxTEQHpM%2BIhxkEH4Q1b8RiPDImgJLSzIozlmIPsmfnOsBpVYHvhcJg%2FPUQc%2BOVv6epjpHa8iA7S%2B3IdFzyboIZjPs5zPOZMMVZ2FDu6E1jFGndeR%2BR3cHoFWGK0bd37geu2sQa4MPkKE90nRHgTh2X8kPtSbOF6CQASKFWxrPj%2FdqbJ24I5IAviEcRYsYESIsp5sC0%2FyF8B98sdWaAqPnvfcL3CzcryZL4kz%2FcfovHuENKriPN7n7GDTSMvVEUsXZRYgYxmZfR1AA%2BzYYwmJ38vAY6pgHam1QbEuONFdkRaL%2BvvUX5ZKa8eEi4sr1bSycO2gnsw%2F2jmCf3lNEYlkvBIlZh4fQxJjXBQlLXWxdGjmAE3Npz7Af%2BgbHP9Xvv6H8yI6bGZ%2FtJwTDsrmYYftNFmfWNuv4rks3LjvPGDpu8SBd9qeeLI6bOAkiHxUIhyz7I%2FiCbway3J7Xav41KqlE1E3xjHuuVfK8TImZtgjZbqWF%2FRyb3Iwmv%2BjHg&X-Amz-Signature=41f6b2878f8d41cd9359490b5897658676239fb68a3a0905a7ab6384776021dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5JP5WO%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv%2BY1bVM0AkwpS64t42c8TwC8wnVgKdtPwnA7PgbQwMAiBqo1K31Fkq2gC451EJHvMYcKsDKMc8sk8xMPbpLPp1KiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCROrHKVGoEspCvKKtwDYnQTTWpuJqSxlaGoZTFoO7qqCifz7cRpqi99S%2Fg9wEF29XL7Jq%2BL1MbVsTzZWuoiTudRntE4l7ODjhTLxKzJAm8zFIlSkHLA2jRdh6sh8oGWq%2FI0HhQBuKoHzVyKFOfFNaF4SeMFRD9PUOfMCmeiyTLkfCNhUN2b1WwVgXlhsQ07uiCzXki2MHymFFhX5OEKr4ES3ZmVWWnORj2djsYjblC7kKO9yFqYYYFYBsENxShJFT9ngLVANXdDRRmn5aczR%2F%2BpluFsiDqBqhGyg7hUFF9tPmycK0EEwc7T%2BBW1O3p%2BA9A2Yvw%2BwevPZO9ATzTDGiyMazuGH%2BWv1pSdDdLp3dAdxWcizX0ApbcaKtpjxf%2FxTEQHpM%2BIhxkEH4Q1b8RiPDImgJLSzIozlmIPsmfnOsBpVYHvhcJg%2FPUQc%2BOVv6epjpHa8iA7S%2B3IdFzyboIZjPs5zPOZMMVZ2FDu6E1jFGndeR%2BR3cHoFWGK0bd37geu2sQa4MPkKE90nRHgTh2X8kPtSbOF6CQASKFWxrPj%2FdqbJ24I5IAviEcRYsYESIsp5sC0%2FyF8B98sdWaAqPnvfcL3CzcryZL4kz%2FcfovHuENKriPN7n7GDTSMvVEUsXZRYgYxmZfR1AA%2BzYYwmJ38vAY6pgHam1QbEuONFdkRaL%2BvvUX5ZKa8eEi4sr1bSycO2gnsw%2F2jmCf3lNEYlkvBIlZh4fQxJjXBQlLXWxdGjmAE3Npz7Af%2BgbHP9Xvv6H8yI6bGZ%2FtJwTDsrmYYftNFmfWNuv4rks3LjvPGDpu8SBd9qeeLI6bOAkiHxUIhyz7I%2FiCbway3J7Xav41KqlE1E3xjHuuVfK8TImZtgjZbqWF%2FRyb3Iwmv%2BjHg&X-Amz-Signature=143f5b117a14c42dd28cbb1c729a3b2b6ac67be99d3404cdea8bc8926fbc2d29&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5JP5WO%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv%2BY1bVM0AkwpS64t42c8TwC8wnVgKdtPwnA7PgbQwMAiBqo1K31Fkq2gC451EJHvMYcKsDKMc8sk8xMPbpLPp1KiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCROrHKVGoEspCvKKtwDYnQTTWpuJqSxlaGoZTFoO7qqCifz7cRpqi99S%2Fg9wEF29XL7Jq%2BL1MbVsTzZWuoiTudRntE4l7ODjhTLxKzJAm8zFIlSkHLA2jRdh6sh8oGWq%2FI0HhQBuKoHzVyKFOfFNaF4SeMFRD9PUOfMCmeiyTLkfCNhUN2b1WwVgXlhsQ07uiCzXki2MHymFFhX5OEKr4ES3ZmVWWnORj2djsYjblC7kKO9yFqYYYFYBsENxShJFT9ngLVANXdDRRmn5aczR%2F%2BpluFsiDqBqhGyg7hUFF9tPmycK0EEwc7T%2BBW1O3p%2BA9A2Yvw%2BwevPZO9ATzTDGiyMazuGH%2BWv1pSdDdLp3dAdxWcizX0ApbcaKtpjxf%2FxTEQHpM%2BIhxkEH4Q1b8RiPDImgJLSzIozlmIPsmfnOsBpVYHvhcJg%2FPUQc%2BOVv6epjpHa8iA7S%2B3IdFzyboIZjPs5zPOZMMVZ2FDu6E1jFGndeR%2BR3cHoFWGK0bd37geu2sQa4MPkKE90nRHgTh2X8kPtSbOF6CQASKFWxrPj%2FdqbJ24I5IAviEcRYsYESIsp5sC0%2FyF8B98sdWaAqPnvfcL3CzcryZL4kz%2FcfovHuENKriPN7n7GDTSMvVEUsXZRYgYxmZfR1AA%2BzYYwmJ38vAY6pgHam1QbEuONFdkRaL%2BvvUX5ZKa8eEi4sr1bSycO2gnsw%2F2jmCf3lNEYlkvBIlZh4fQxJjXBQlLXWxdGjmAE3Npz7Af%2BgbHP9Xvv6H8yI6bGZ%2FtJwTDsrmYYftNFmfWNuv4rks3LjvPGDpu8SBd9qeeLI6bOAkiHxUIhyz7I%2FiCbway3J7Xav41KqlE1E3xjHuuVfK8TImZtgjZbqWF%2FRyb3Iwmv%2BjHg&X-Amz-Signature=561fa94605669bcb3e7d04ce5b5951fd88fe14baf808a40a283bbb49face3eee&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5JP5WO%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv%2BY1bVM0AkwpS64t42c8TwC8wnVgKdtPwnA7PgbQwMAiBqo1K31Fkq2gC451EJHvMYcKsDKMc8sk8xMPbpLPp1KiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCROrHKVGoEspCvKKtwDYnQTTWpuJqSxlaGoZTFoO7qqCifz7cRpqi99S%2Fg9wEF29XL7Jq%2BL1MbVsTzZWuoiTudRntE4l7ODjhTLxKzJAm8zFIlSkHLA2jRdh6sh8oGWq%2FI0HhQBuKoHzVyKFOfFNaF4SeMFRD9PUOfMCmeiyTLkfCNhUN2b1WwVgXlhsQ07uiCzXki2MHymFFhX5OEKr4ES3ZmVWWnORj2djsYjblC7kKO9yFqYYYFYBsENxShJFT9ngLVANXdDRRmn5aczR%2F%2BpluFsiDqBqhGyg7hUFF9tPmycK0EEwc7T%2BBW1O3p%2BA9A2Yvw%2BwevPZO9ATzTDGiyMazuGH%2BWv1pSdDdLp3dAdxWcizX0ApbcaKtpjxf%2FxTEQHpM%2BIhxkEH4Q1b8RiPDImgJLSzIozlmIPsmfnOsBpVYHvhcJg%2FPUQc%2BOVv6epjpHa8iA7S%2B3IdFzyboIZjPs5zPOZMMVZ2FDu6E1jFGndeR%2BR3cHoFWGK0bd37geu2sQa4MPkKE90nRHgTh2X8kPtSbOF6CQASKFWxrPj%2FdqbJ24I5IAviEcRYsYESIsp5sC0%2FyF8B98sdWaAqPnvfcL3CzcryZL4kz%2FcfovHuENKriPN7n7GDTSMvVEUsXZRYgYxmZfR1AA%2BzYYwmJ38vAY6pgHam1QbEuONFdkRaL%2BvvUX5ZKa8eEi4sr1bSycO2gnsw%2F2jmCf3lNEYlkvBIlZh4fQxJjXBQlLXWxdGjmAE3Npz7Af%2BgbHP9Xvv6H8yI6bGZ%2FtJwTDsrmYYftNFmfWNuv4rks3LjvPGDpu8SBd9qeeLI6bOAkiHxUIhyz7I%2FiCbway3J7Xav41KqlE1E3xjHuuVfK8TImZtgjZbqWF%2FRyb3Iwmv%2BjHg&X-Amz-Signature=e640fa3e7fbe26985ff384ec034adb0f1244662de6baa1906bcf9aa8ef22c241&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

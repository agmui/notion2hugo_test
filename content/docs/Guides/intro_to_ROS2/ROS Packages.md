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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKCW3KB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCU7ELSA9AbU%2FcUJGJ4e6etuAUHJ1xmGaxoe8y3a7YAcwIhALDovE5Sy6wiVmpAPyWEEZvjWSHvnS0Gf3ccMhZsb4JJKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNhdFezLAKOI6f0bAq3APm5pqmhi6pB5F9Vky2JatkXrXdItogPMv3TTYuHVy08Gacc2xSQew1Ymow0aYqpLKQS6sgrAliAvbwK%2BGlmOAKb1m%2FmuQK0EtRV8wHk%2BLl2k5XyKO%2BIiiuXMsWfD8abvkCy9okWFiYTQuG7X%2B123ESn%2BGEh%2BXCzgtbwb%2FaAdQQKjPk5%2Bx%2FjD%2FbuDScNKHzhJ7Bh8sJiUuludnjxt985at2Zwk25jehbIfzqDIsJevh2GfvAHdq2h11ur7FtZNgGGL4mHxNMEYrTVIzgHSE8KeBZhybs%2FYy%2FK6Kp2Gk%2BJkywIcW52XnpMoETR7ckoEtSMv1omjq3%2BGFkm%2BGTQq8a%2FL0FMn%2Bnw6oDUHZPN1KUHl9gnilRc%2B%2BneHQtSwBMaKrGL4fGNpEHDEtEAPr1bhMPm3tXGjW%2Bjk6eR1y6Dz04f4yCcxbsu7V3h2snNUEd%2FDDz4NYKXCgExp0nS3rpsc6oF0lDv4g1cqi9KM36%2B8RyAOT97gUazHrpFFSCewljlByAUDfV0fj0ui%2BqtvmGq9kTMV7%2B9E7nB2pkil4%2FoTRfNuu7M%2Fk723JKmwam%2FUAY8rH7mtaHY58QrTIxcvkVrtBDAlyhkYOGDwVb%2Ftnor0g6woBgg155Ba5%2Bz%2FN8jc0%2BDDKkJvDBjqkAbixHqsCA5IM0%2Bbpw2x6KIw2Uo%2BFbPovBhX6HnMrh3XRFnQc431FNFrtbmVbr281sKuK%2FoLVwOZfKEak7nEdIOSqmbkOqcqEVlwNZ0QBXt%2BqsEQtma%2FJxJWLEt2Vh0%2B07psp6idr5xxCwaCKewzd%2BjE%2BMMMuLtk%2FU9D8PhenEKZ3Jh5udO1mNGBLZJ0Npgooio9%2FlFnI16RdwickRMhYpqRo%2BYuP&X-Amz-Signature=efdf9376019a5d5a69171e731f5534d7f7dff130aa6eaadb7ca7b87bc8ca7c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKCW3KB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCU7ELSA9AbU%2FcUJGJ4e6etuAUHJ1xmGaxoe8y3a7YAcwIhALDovE5Sy6wiVmpAPyWEEZvjWSHvnS0Gf3ccMhZsb4JJKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNhdFezLAKOI6f0bAq3APm5pqmhi6pB5F9Vky2JatkXrXdItogPMv3TTYuHVy08Gacc2xSQew1Ymow0aYqpLKQS6sgrAliAvbwK%2BGlmOAKb1m%2FmuQK0EtRV8wHk%2BLl2k5XyKO%2BIiiuXMsWfD8abvkCy9okWFiYTQuG7X%2B123ESn%2BGEh%2BXCzgtbwb%2FaAdQQKjPk5%2Bx%2FjD%2FbuDScNKHzhJ7Bh8sJiUuludnjxt985at2Zwk25jehbIfzqDIsJevh2GfvAHdq2h11ur7FtZNgGGL4mHxNMEYrTVIzgHSE8KeBZhybs%2FYy%2FK6Kp2Gk%2BJkywIcW52XnpMoETR7ckoEtSMv1omjq3%2BGFkm%2BGTQq8a%2FL0FMn%2Bnw6oDUHZPN1KUHl9gnilRc%2B%2BneHQtSwBMaKrGL4fGNpEHDEtEAPr1bhMPm3tXGjW%2Bjk6eR1y6Dz04f4yCcxbsu7V3h2snNUEd%2FDDz4NYKXCgExp0nS3rpsc6oF0lDv4g1cqi9KM36%2B8RyAOT97gUazHrpFFSCewljlByAUDfV0fj0ui%2BqtvmGq9kTMV7%2B9E7nB2pkil4%2FoTRfNuu7M%2Fk723JKmwam%2FUAY8rH7mtaHY58QrTIxcvkVrtBDAlyhkYOGDwVb%2Ftnor0g6woBgg155Ba5%2Bz%2FN8jc0%2BDDKkJvDBjqkAbixHqsCA5IM0%2Bbpw2x6KIw2Uo%2BFbPovBhX6HnMrh3XRFnQc431FNFrtbmVbr281sKuK%2FoLVwOZfKEak7nEdIOSqmbkOqcqEVlwNZ0QBXt%2BqsEQtma%2FJxJWLEt2Vh0%2B07psp6idr5xxCwaCKewzd%2BjE%2BMMMuLtk%2FU9D8PhenEKZ3Jh5udO1mNGBLZJ0Npgooio9%2FlFnI16RdwickRMhYpqRo%2BYuP&X-Amz-Signature=93efa54d4c51b0f18bdb35a7da3f6740ae22ddc3164934d1471afa9fa2f93b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKCW3KB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCU7ELSA9AbU%2FcUJGJ4e6etuAUHJ1xmGaxoe8y3a7YAcwIhALDovE5Sy6wiVmpAPyWEEZvjWSHvnS0Gf3ccMhZsb4JJKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNhdFezLAKOI6f0bAq3APm5pqmhi6pB5F9Vky2JatkXrXdItogPMv3TTYuHVy08Gacc2xSQew1Ymow0aYqpLKQS6sgrAliAvbwK%2BGlmOAKb1m%2FmuQK0EtRV8wHk%2BLl2k5XyKO%2BIiiuXMsWfD8abvkCy9okWFiYTQuG7X%2B123ESn%2BGEh%2BXCzgtbwb%2FaAdQQKjPk5%2Bx%2FjD%2FbuDScNKHzhJ7Bh8sJiUuludnjxt985at2Zwk25jehbIfzqDIsJevh2GfvAHdq2h11ur7FtZNgGGL4mHxNMEYrTVIzgHSE8KeBZhybs%2FYy%2FK6Kp2Gk%2BJkywIcW52XnpMoETR7ckoEtSMv1omjq3%2BGFkm%2BGTQq8a%2FL0FMn%2Bnw6oDUHZPN1KUHl9gnilRc%2B%2BneHQtSwBMaKrGL4fGNpEHDEtEAPr1bhMPm3tXGjW%2Bjk6eR1y6Dz04f4yCcxbsu7V3h2snNUEd%2FDDz4NYKXCgExp0nS3rpsc6oF0lDv4g1cqi9KM36%2B8RyAOT97gUazHrpFFSCewljlByAUDfV0fj0ui%2BqtvmGq9kTMV7%2B9E7nB2pkil4%2FoTRfNuu7M%2Fk723JKmwam%2FUAY8rH7mtaHY58QrTIxcvkVrtBDAlyhkYOGDwVb%2Ftnor0g6woBgg155Ba5%2Bz%2FN8jc0%2BDDKkJvDBjqkAbixHqsCA5IM0%2Bbpw2x6KIw2Uo%2BFbPovBhX6HnMrh3XRFnQc431FNFrtbmVbr281sKuK%2FoLVwOZfKEak7nEdIOSqmbkOqcqEVlwNZ0QBXt%2BqsEQtma%2FJxJWLEt2Vh0%2B07psp6idr5xxCwaCKewzd%2BjE%2BMMMuLtk%2FU9D8PhenEKZ3Jh5udO1mNGBLZJ0Npgooio9%2FlFnI16RdwickRMhYpqRo%2BYuP&X-Amz-Signature=eb0b85d6437d638cd43c3f5733c045311cfeda1db0d8d82110a8ed1e201e2d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKCW3KB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCU7ELSA9AbU%2FcUJGJ4e6etuAUHJ1xmGaxoe8y3a7YAcwIhALDovE5Sy6wiVmpAPyWEEZvjWSHvnS0Gf3ccMhZsb4JJKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNhdFezLAKOI6f0bAq3APm5pqmhi6pB5F9Vky2JatkXrXdItogPMv3TTYuHVy08Gacc2xSQew1Ymow0aYqpLKQS6sgrAliAvbwK%2BGlmOAKb1m%2FmuQK0EtRV8wHk%2BLl2k5XyKO%2BIiiuXMsWfD8abvkCy9okWFiYTQuG7X%2B123ESn%2BGEh%2BXCzgtbwb%2FaAdQQKjPk5%2Bx%2FjD%2FbuDScNKHzhJ7Bh8sJiUuludnjxt985at2Zwk25jehbIfzqDIsJevh2GfvAHdq2h11ur7FtZNgGGL4mHxNMEYrTVIzgHSE8KeBZhybs%2FYy%2FK6Kp2Gk%2BJkywIcW52XnpMoETR7ckoEtSMv1omjq3%2BGFkm%2BGTQq8a%2FL0FMn%2Bnw6oDUHZPN1KUHl9gnilRc%2B%2BneHQtSwBMaKrGL4fGNpEHDEtEAPr1bhMPm3tXGjW%2Bjk6eR1y6Dz04f4yCcxbsu7V3h2snNUEd%2FDDz4NYKXCgExp0nS3rpsc6oF0lDv4g1cqi9KM36%2B8RyAOT97gUazHrpFFSCewljlByAUDfV0fj0ui%2BqtvmGq9kTMV7%2B9E7nB2pkil4%2FoTRfNuu7M%2Fk723JKmwam%2FUAY8rH7mtaHY58QrTIxcvkVrtBDAlyhkYOGDwVb%2Ftnor0g6woBgg155Ba5%2Bz%2FN8jc0%2BDDKkJvDBjqkAbixHqsCA5IM0%2Bbpw2x6KIw2Uo%2BFbPovBhX6HnMrh3XRFnQc431FNFrtbmVbr281sKuK%2FoLVwOZfKEak7nEdIOSqmbkOqcqEVlwNZ0QBXt%2BqsEQtma%2FJxJWLEt2Vh0%2B07psp6idr5xxCwaCKewzd%2BjE%2BMMMuLtk%2FU9D8PhenEKZ3Jh5udO1mNGBLZJ0Npgooio9%2FlFnI16RdwickRMhYpqRo%2BYuP&X-Amz-Signature=50dc8db1e6ff57af1b83aa4c561c83c64cc5fcf7118f32255ed334e99fa11d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKCW3KB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCU7ELSA9AbU%2FcUJGJ4e6etuAUHJ1xmGaxoe8y3a7YAcwIhALDovE5Sy6wiVmpAPyWEEZvjWSHvnS0Gf3ccMhZsb4JJKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNhdFezLAKOI6f0bAq3APm5pqmhi6pB5F9Vky2JatkXrXdItogPMv3TTYuHVy08Gacc2xSQew1Ymow0aYqpLKQS6sgrAliAvbwK%2BGlmOAKb1m%2FmuQK0EtRV8wHk%2BLl2k5XyKO%2BIiiuXMsWfD8abvkCy9okWFiYTQuG7X%2B123ESn%2BGEh%2BXCzgtbwb%2FaAdQQKjPk5%2Bx%2FjD%2FbuDScNKHzhJ7Bh8sJiUuludnjxt985at2Zwk25jehbIfzqDIsJevh2GfvAHdq2h11ur7FtZNgGGL4mHxNMEYrTVIzgHSE8KeBZhybs%2FYy%2FK6Kp2Gk%2BJkywIcW52XnpMoETR7ckoEtSMv1omjq3%2BGFkm%2BGTQq8a%2FL0FMn%2Bnw6oDUHZPN1KUHl9gnilRc%2B%2BneHQtSwBMaKrGL4fGNpEHDEtEAPr1bhMPm3tXGjW%2Bjk6eR1y6Dz04f4yCcxbsu7V3h2snNUEd%2FDDz4NYKXCgExp0nS3rpsc6oF0lDv4g1cqi9KM36%2B8RyAOT97gUazHrpFFSCewljlByAUDfV0fj0ui%2BqtvmGq9kTMV7%2B9E7nB2pkil4%2FoTRfNuu7M%2Fk723JKmwam%2FUAY8rH7mtaHY58QrTIxcvkVrtBDAlyhkYOGDwVb%2Ftnor0g6woBgg155Ba5%2Bz%2FN8jc0%2BDDKkJvDBjqkAbixHqsCA5IM0%2Bbpw2x6KIw2Uo%2BFbPovBhX6HnMrh3XRFnQc431FNFrtbmVbr281sKuK%2FoLVwOZfKEak7nEdIOSqmbkOqcqEVlwNZ0QBXt%2BqsEQtma%2FJxJWLEt2Vh0%2B07psp6idr5xxCwaCKewzd%2BjE%2BMMMuLtk%2FU9D8PhenEKZ3Jh5udO1mNGBLZJ0Npgooio9%2FlFnI16RdwickRMhYpqRo%2BYuP&X-Amz-Signature=5e661d8f6fa727d7310d908f88c613288738cb339ae4c7675ab1229048bf0adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKCW3KB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCU7ELSA9AbU%2FcUJGJ4e6etuAUHJ1xmGaxoe8y3a7YAcwIhALDovE5Sy6wiVmpAPyWEEZvjWSHvnS0Gf3ccMhZsb4JJKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNhdFezLAKOI6f0bAq3APm5pqmhi6pB5F9Vky2JatkXrXdItogPMv3TTYuHVy08Gacc2xSQew1Ymow0aYqpLKQS6sgrAliAvbwK%2BGlmOAKb1m%2FmuQK0EtRV8wHk%2BLl2k5XyKO%2BIiiuXMsWfD8abvkCy9okWFiYTQuG7X%2B123ESn%2BGEh%2BXCzgtbwb%2FaAdQQKjPk5%2Bx%2FjD%2FbuDScNKHzhJ7Bh8sJiUuludnjxt985at2Zwk25jehbIfzqDIsJevh2GfvAHdq2h11ur7FtZNgGGL4mHxNMEYrTVIzgHSE8KeBZhybs%2FYy%2FK6Kp2Gk%2BJkywIcW52XnpMoETR7ckoEtSMv1omjq3%2BGFkm%2BGTQq8a%2FL0FMn%2Bnw6oDUHZPN1KUHl9gnilRc%2B%2BneHQtSwBMaKrGL4fGNpEHDEtEAPr1bhMPm3tXGjW%2Bjk6eR1y6Dz04f4yCcxbsu7V3h2snNUEd%2FDDz4NYKXCgExp0nS3rpsc6oF0lDv4g1cqi9KM36%2B8RyAOT97gUazHrpFFSCewljlByAUDfV0fj0ui%2BqtvmGq9kTMV7%2B9E7nB2pkil4%2FoTRfNuu7M%2Fk723JKmwam%2FUAY8rH7mtaHY58QrTIxcvkVrtBDAlyhkYOGDwVb%2Ftnor0g6woBgg155Ba5%2Bz%2FN8jc0%2BDDKkJvDBjqkAbixHqsCA5IM0%2Bbpw2x6KIw2Uo%2BFbPovBhX6HnMrh3XRFnQc431FNFrtbmVbr281sKuK%2FoLVwOZfKEak7nEdIOSqmbkOqcqEVlwNZ0QBXt%2BqsEQtma%2FJxJWLEt2Vh0%2B07psp6idr5xxCwaCKewzd%2BjE%2BMMMuLtk%2FU9D8PhenEKZ3Jh5udO1mNGBLZJ0Npgooio9%2FlFnI16RdwickRMhYpqRo%2BYuP&X-Amz-Signature=99c213b1e3cdd611434b30f8bd3fe7d15ed84388ef84907d41f9255e09d08620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKCW3KB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCU7ELSA9AbU%2FcUJGJ4e6etuAUHJ1xmGaxoe8y3a7YAcwIhALDovE5Sy6wiVmpAPyWEEZvjWSHvnS0Gf3ccMhZsb4JJKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNhdFezLAKOI6f0bAq3APm5pqmhi6pB5F9Vky2JatkXrXdItogPMv3TTYuHVy08Gacc2xSQew1Ymow0aYqpLKQS6sgrAliAvbwK%2BGlmOAKb1m%2FmuQK0EtRV8wHk%2BLl2k5XyKO%2BIiiuXMsWfD8abvkCy9okWFiYTQuG7X%2B123ESn%2BGEh%2BXCzgtbwb%2FaAdQQKjPk5%2Bx%2FjD%2FbuDScNKHzhJ7Bh8sJiUuludnjxt985at2Zwk25jehbIfzqDIsJevh2GfvAHdq2h11ur7FtZNgGGL4mHxNMEYrTVIzgHSE8KeBZhybs%2FYy%2FK6Kp2Gk%2BJkywIcW52XnpMoETR7ckoEtSMv1omjq3%2BGFkm%2BGTQq8a%2FL0FMn%2Bnw6oDUHZPN1KUHl9gnilRc%2B%2BneHQtSwBMaKrGL4fGNpEHDEtEAPr1bhMPm3tXGjW%2Bjk6eR1y6Dz04f4yCcxbsu7V3h2snNUEd%2FDDz4NYKXCgExp0nS3rpsc6oF0lDv4g1cqi9KM36%2B8RyAOT97gUazHrpFFSCewljlByAUDfV0fj0ui%2BqtvmGq9kTMV7%2B9E7nB2pkil4%2FoTRfNuu7M%2Fk723JKmwam%2FUAY8rH7mtaHY58QrTIxcvkVrtBDAlyhkYOGDwVb%2Ftnor0g6woBgg155Ba5%2Bz%2FN8jc0%2BDDKkJvDBjqkAbixHqsCA5IM0%2Bbpw2x6KIw2Uo%2BFbPovBhX6HnMrh3XRFnQc431FNFrtbmVbr281sKuK%2FoLVwOZfKEak7nEdIOSqmbkOqcqEVlwNZ0QBXt%2BqsEQtma%2FJxJWLEt2Vh0%2B07psp6idr5xxCwaCKewzd%2BjE%2BMMMuLtk%2FU9D8PhenEKZ3Jh5udO1mNGBLZJ0Npgooio9%2FlFnI16RdwickRMhYpqRo%2BYuP&X-Amz-Signature=ef3219b4f6ed736261fd68cf783226550ab2bd7c18d3b08b17c14d045d71c0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

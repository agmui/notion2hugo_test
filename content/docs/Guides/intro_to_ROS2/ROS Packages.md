---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637H5TXEF%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCTJiNlUL2MxHi8ZOKMi7pz4bOvEoVqwrD%2F0QxGlgMKWAIhAMQqt8ukbbOoRsCZo7Fh%2BYI1ZwhkHaGyuN4hH9Uc8RoKKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE%2BOd46ZtcsEZEIaYq3ANdXSj0tKNRen3AOdSVaanCA6jJTEH7bzEhYr3sH%2Fvg9pcDEPR%2BC5EI6bNGF7HMpedb227Fifid6ZKV2CCOUEA4AeAhfiEdB00YxLRau8r33w1ZK9i82EUO%2BSj9tAldqqDtSK1iynp%2Fy198HuoRhLsRvj4xZoVurhP0w8Iyr2WtUhkUZ8RmkqLXcf6bKOUZA9h88yrt2jKCXnX%2B%2BEfrlmUxPZl3EJ4a0UjccT3bfd4YmzSQa4lAOTzJPCNtulooJPMHqS40uHZUJLI4ozHrUJWRknlSEayViC2Un1aAORqq8jgTnhFj3d8qfn5mh8i9c0SbHzcwAUbnHtqJp%2BvKJxGkywJuDzdiBGquiIs0GQ8HkryMSw2auA23HMA1NblNlVsTwEQZE8bEYi7Ns2K9w8f8H5d4oonBfJrxcBzUc2p%2B9QV5QZqpTalX1%2BDvUYgumHreFxxDpR%2FrZkU0QMXDMX2nTOM0VTR68x9s1A%2B0v9H9k4DNiD%2FN09YljNoB8U5k6F%2FOQzKl33q3kpkGEA0Tp1H7%2FDGS4gdIkqibEppeo%2B0CiadTmcO1z5NVUoNnFL3P9WPSkKoUyw0w3Kosaif%2Fsa%2BpG8M962c8tJTUTHwOTScNhFs%2FL3vgT6uNMD1L0TCvisvLBjqkAcl71EVixYQK92pbxoxnZ%2FsORi13V2Fwo1h4v9ICdBLEESvCLWXNZP389H%2F%2FQzvOeMfzCMA1W2dZ80ICVeoGODNP9bCnqjWdvTSSMn7sosdMk4gnjEbgdaI629CZTtIxj1t38jEyCVx23l%2FQD5%2Bn67uwnSphT3GdyggXyRz%2F4JYGgSLVQGJvuxUJTX8bSNpmqVJMa5CCzFXKqQ4TjrtoCx7SeU6T&X-Amz-Signature=4ca0b0887e8902912258503c63de93c33af6e5b231e74e735e9d3b63e9d2c168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637H5TXEF%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCTJiNlUL2MxHi8ZOKMi7pz4bOvEoVqwrD%2F0QxGlgMKWAIhAMQqt8ukbbOoRsCZo7Fh%2BYI1ZwhkHaGyuN4hH9Uc8RoKKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE%2BOd46ZtcsEZEIaYq3ANdXSj0tKNRen3AOdSVaanCA6jJTEH7bzEhYr3sH%2Fvg9pcDEPR%2BC5EI6bNGF7HMpedb227Fifid6ZKV2CCOUEA4AeAhfiEdB00YxLRau8r33w1ZK9i82EUO%2BSj9tAldqqDtSK1iynp%2Fy198HuoRhLsRvj4xZoVurhP0w8Iyr2WtUhkUZ8RmkqLXcf6bKOUZA9h88yrt2jKCXnX%2B%2BEfrlmUxPZl3EJ4a0UjccT3bfd4YmzSQa4lAOTzJPCNtulooJPMHqS40uHZUJLI4ozHrUJWRknlSEayViC2Un1aAORqq8jgTnhFj3d8qfn5mh8i9c0SbHzcwAUbnHtqJp%2BvKJxGkywJuDzdiBGquiIs0GQ8HkryMSw2auA23HMA1NblNlVsTwEQZE8bEYi7Ns2K9w8f8H5d4oonBfJrxcBzUc2p%2B9QV5QZqpTalX1%2BDvUYgumHreFxxDpR%2FrZkU0QMXDMX2nTOM0VTR68x9s1A%2B0v9H9k4DNiD%2FN09YljNoB8U5k6F%2FOQzKl33q3kpkGEA0Tp1H7%2FDGS4gdIkqibEppeo%2B0CiadTmcO1z5NVUoNnFL3P9WPSkKoUyw0w3Kosaif%2Fsa%2BpG8M962c8tJTUTHwOTScNhFs%2FL3vgT6uNMD1L0TCvisvLBjqkAcl71EVixYQK92pbxoxnZ%2FsORi13V2Fwo1h4v9ICdBLEESvCLWXNZP389H%2F%2FQzvOeMfzCMA1W2dZ80ICVeoGODNP9bCnqjWdvTSSMn7sosdMk4gnjEbgdaI629CZTtIxj1t38jEyCVx23l%2FQD5%2Bn67uwnSphT3GdyggXyRz%2F4JYGgSLVQGJvuxUJTX8bSNpmqVJMa5CCzFXKqQ4TjrtoCx7SeU6T&X-Amz-Signature=5068224f8f3bf713cf19f3cbcb877167fde3a39bbdd0cb948464607ddc446d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637H5TXEF%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCTJiNlUL2MxHi8ZOKMi7pz4bOvEoVqwrD%2F0QxGlgMKWAIhAMQqt8ukbbOoRsCZo7Fh%2BYI1ZwhkHaGyuN4hH9Uc8RoKKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE%2BOd46ZtcsEZEIaYq3ANdXSj0tKNRen3AOdSVaanCA6jJTEH7bzEhYr3sH%2Fvg9pcDEPR%2BC5EI6bNGF7HMpedb227Fifid6ZKV2CCOUEA4AeAhfiEdB00YxLRau8r33w1ZK9i82EUO%2BSj9tAldqqDtSK1iynp%2Fy198HuoRhLsRvj4xZoVurhP0w8Iyr2WtUhkUZ8RmkqLXcf6bKOUZA9h88yrt2jKCXnX%2B%2BEfrlmUxPZl3EJ4a0UjccT3bfd4YmzSQa4lAOTzJPCNtulooJPMHqS40uHZUJLI4ozHrUJWRknlSEayViC2Un1aAORqq8jgTnhFj3d8qfn5mh8i9c0SbHzcwAUbnHtqJp%2BvKJxGkywJuDzdiBGquiIs0GQ8HkryMSw2auA23HMA1NblNlVsTwEQZE8bEYi7Ns2K9w8f8H5d4oonBfJrxcBzUc2p%2B9QV5QZqpTalX1%2BDvUYgumHreFxxDpR%2FrZkU0QMXDMX2nTOM0VTR68x9s1A%2B0v9H9k4DNiD%2FN09YljNoB8U5k6F%2FOQzKl33q3kpkGEA0Tp1H7%2FDGS4gdIkqibEppeo%2B0CiadTmcO1z5NVUoNnFL3P9WPSkKoUyw0w3Kosaif%2Fsa%2BpG8M962c8tJTUTHwOTScNhFs%2FL3vgT6uNMD1L0TCvisvLBjqkAcl71EVixYQK92pbxoxnZ%2FsORi13V2Fwo1h4v9ICdBLEESvCLWXNZP389H%2F%2FQzvOeMfzCMA1W2dZ80ICVeoGODNP9bCnqjWdvTSSMn7sosdMk4gnjEbgdaI629CZTtIxj1t38jEyCVx23l%2FQD5%2Bn67uwnSphT3GdyggXyRz%2F4JYGgSLVQGJvuxUJTX8bSNpmqVJMa5CCzFXKqQ4TjrtoCx7SeU6T&X-Amz-Signature=5e0dd0458a78ff927d82e5911088ed3aca50c4cb52dd6e805c49e435f2a74e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637H5TXEF%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCTJiNlUL2MxHi8ZOKMi7pz4bOvEoVqwrD%2F0QxGlgMKWAIhAMQqt8ukbbOoRsCZo7Fh%2BYI1ZwhkHaGyuN4hH9Uc8RoKKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE%2BOd46ZtcsEZEIaYq3ANdXSj0tKNRen3AOdSVaanCA6jJTEH7bzEhYr3sH%2Fvg9pcDEPR%2BC5EI6bNGF7HMpedb227Fifid6ZKV2CCOUEA4AeAhfiEdB00YxLRau8r33w1ZK9i82EUO%2BSj9tAldqqDtSK1iynp%2Fy198HuoRhLsRvj4xZoVurhP0w8Iyr2WtUhkUZ8RmkqLXcf6bKOUZA9h88yrt2jKCXnX%2B%2BEfrlmUxPZl3EJ4a0UjccT3bfd4YmzSQa4lAOTzJPCNtulooJPMHqS40uHZUJLI4ozHrUJWRknlSEayViC2Un1aAORqq8jgTnhFj3d8qfn5mh8i9c0SbHzcwAUbnHtqJp%2BvKJxGkywJuDzdiBGquiIs0GQ8HkryMSw2auA23HMA1NblNlVsTwEQZE8bEYi7Ns2K9w8f8H5d4oonBfJrxcBzUc2p%2B9QV5QZqpTalX1%2BDvUYgumHreFxxDpR%2FrZkU0QMXDMX2nTOM0VTR68x9s1A%2B0v9H9k4DNiD%2FN09YljNoB8U5k6F%2FOQzKl33q3kpkGEA0Tp1H7%2FDGS4gdIkqibEppeo%2B0CiadTmcO1z5NVUoNnFL3P9WPSkKoUyw0w3Kosaif%2Fsa%2BpG8M962c8tJTUTHwOTScNhFs%2FL3vgT6uNMD1L0TCvisvLBjqkAcl71EVixYQK92pbxoxnZ%2FsORi13V2Fwo1h4v9ICdBLEESvCLWXNZP389H%2F%2FQzvOeMfzCMA1W2dZ80ICVeoGODNP9bCnqjWdvTSSMn7sosdMk4gnjEbgdaI629CZTtIxj1t38jEyCVx23l%2FQD5%2Bn67uwnSphT3GdyggXyRz%2F4JYGgSLVQGJvuxUJTX8bSNpmqVJMa5CCzFXKqQ4TjrtoCx7SeU6T&X-Amz-Signature=2461e3fc4a6479f65b9ee1835f048a84614ccdceb4162e441e7f82dc4548f303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637H5TXEF%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCTJiNlUL2MxHi8ZOKMi7pz4bOvEoVqwrD%2F0QxGlgMKWAIhAMQqt8ukbbOoRsCZo7Fh%2BYI1ZwhkHaGyuN4hH9Uc8RoKKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE%2BOd46ZtcsEZEIaYq3ANdXSj0tKNRen3AOdSVaanCA6jJTEH7bzEhYr3sH%2Fvg9pcDEPR%2BC5EI6bNGF7HMpedb227Fifid6ZKV2CCOUEA4AeAhfiEdB00YxLRau8r33w1ZK9i82EUO%2BSj9tAldqqDtSK1iynp%2Fy198HuoRhLsRvj4xZoVurhP0w8Iyr2WtUhkUZ8RmkqLXcf6bKOUZA9h88yrt2jKCXnX%2B%2BEfrlmUxPZl3EJ4a0UjccT3bfd4YmzSQa4lAOTzJPCNtulooJPMHqS40uHZUJLI4ozHrUJWRknlSEayViC2Un1aAORqq8jgTnhFj3d8qfn5mh8i9c0SbHzcwAUbnHtqJp%2BvKJxGkywJuDzdiBGquiIs0GQ8HkryMSw2auA23HMA1NblNlVsTwEQZE8bEYi7Ns2K9w8f8H5d4oonBfJrxcBzUc2p%2B9QV5QZqpTalX1%2BDvUYgumHreFxxDpR%2FrZkU0QMXDMX2nTOM0VTR68x9s1A%2B0v9H9k4DNiD%2FN09YljNoB8U5k6F%2FOQzKl33q3kpkGEA0Tp1H7%2FDGS4gdIkqibEppeo%2B0CiadTmcO1z5NVUoNnFL3P9WPSkKoUyw0w3Kosaif%2Fsa%2BpG8M962c8tJTUTHwOTScNhFs%2FL3vgT6uNMD1L0TCvisvLBjqkAcl71EVixYQK92pbxoxnZ%2FsORi13V2Fwo1h4v9ICdBLEESvCLWXNZP389H%2F%2FQzvOeMfzCMA1W2dZ80ICVeoGODNP9bCnqjWdvTSSMn7sosdMk4gnjEbgdaI629CZTtIxj1t38jEyCVx23l%2FQD5%2Bn67uwnSphT3GdyggXyRz%2F4JYGgSLVQGJvuxUJTX8bSNpmqVJMa5CCzFXKqQ4TjrtoCx7SeU6T&X-Amz-Signature=72c0355659c1135e52597a5729389c324923774daa2062816a13846c65ca1fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637H5TXEF%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCTJiNlUL2MxHi8ZOKMi7pz4bOvEoVqwrD%2F0QxGlgMKWAIhAMQqt8ukbbOoRsCZo7Fh%2BYI1ZwhkHaGyuN4hH9Uc8RoKKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE%2BOd46ZtcsEZEIaYq3ANdXSj0tKNRen3AOdSVaanCA6jJTEH7bzEhYr3sH%2Fvg9pcDEPR%2BC5EI6bNGF7HMpedb227Fifid6ZKV2CCOUEA4AeAhfiEdB00YxLRau8r33w1ZK9i82EUO%2BSj9tAldqqDtSK1iynp%2Fy198HuoRhLsRvj4xZoVurhP0w8Iyr2WtUhkUZ8RmkqLXcf6bKOUZA9h88yrt2jKCXnX%2B%2BEfrlmUxPZl3EJ4a0UjccT3bfd4YmzSQa4lAOTzJPCNtulooJPMHqS40uHZUJLI4ozHrUJWRknlSEayViC2Un1aAORqq8jgTnhFj3d8qfn5mh8i9c0SbHzcwAUbnHtqJp%2BvKJxGkywJuDzdiBGquiIs0GQ8HkryMSw2auA23HMA1NblNlVsTwEQZE8bEYi7Ns2K9w8f8H5d4oonBfJrxcBzUc2p%2B9QV5QZqpTalX1%2BDvUYgumHreFxxDpR%2FrZkU0QMXDMX2nTOM0VTR68x9s1A%2B0v9H9k4DNiD%2FN09YljNoB8U5k6F%2FOQzKl33q3kpkGEA0Tp1H7%2FDGS4gdIkqibEppeo%2B0CiadTmcO1z5NVUoNnFL3P9WPSkKoUyw0w3Kosaif%2Fsa%2BpG8M962c8tJTUTHwOTScNhFs%2FL3vgT6uNMD1L0TCvisvLBjqkAcl71EVixYQK92pbxoxnZ%2FsORi13V2Fwo1h4v9ICdBLEESvCLWXNZP389H%2F%2FQzvOeMfzCMA1W2dZ80ICVeoGODNP9bCnqjWdvTSSMn7sosdMk4gnjEbgdaI629CZTtIxj1t38jEyCVx23l%2FQD5%2Bn67uwnSphT3GdyggXyRz%2F4JYGgSLVQGJvuxUJTX8bSNpmqVJMa5CCzFXKqQ4TjrtoCx7SeU6T&X-Amz-Signature=c51f609c2ad5e769dd5455e32e63e4f6dd2a375ec5c6947c611e9a4371b38428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637H5TXEF%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCTJiNlUL2MxHi8ZOKMi7pz4bOvEoVqwrD%2F0QxGlgMKWAIhAMQqt8ukbbOoRsCZo7Fh%2BYI1ZwhkHaGyuN4hH9Uc8RoKKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE%2BOd46ZtcsEZEIaYq3ANdXSj0tKNRen3AOdSVaanCA6jJTEH7bzEhYr3sH%2Fvg9pcDEPR%2BC5EI6bNGF7HMpedb227Fifid6ZKV2CCOUEA4AeAhfiEdB00YxLRau8r33w1ZK9i82EUO%2BSj9tAldqqDtSK1iynp%2Fy198HuoRhLsRvj4xZoVurhP0w8Iyr2WtUhkUZ8RmkqLXcf6bKOUZA9h88yrt2jKCXnX%2B%2BEfrlmUxPZl3EJ4a0UjccT3bfd4YmzSQa4lAOTzJPCNtulooJPMHqS40uHZUJLI4ozHrUJWRknlSEayViC2Un1aAORqq8jgTnhFj3d8qfn5mh8i9c0SbHzcwAUbnHtqJp%2BvKJxGkywJuDzdiBGquiIs0GQ8HkryMSw2auA23HMA1NblNlVsTwEQZE8bEYi7Ns2K9w8f8H5d4oonBfJrxcBzUc2p%2B9QV5QZqpTalX1%2BDvUYgumHreFxxDpR%2FrZkU0QMXDMX2nTOM0VTR68x9s1A%2B0v9H9k4DNiD%2FN09YljNoB8U5k6F%2FOQzKl33q3kpkGEA0Tp1H7%2FDGS4gdIkqibEppeo%2B0CiadTmcO1z5NVUoNnFL3P9WPSkKoUyw0w3Kosaif%2Fsa%2BpG8M962c8tJTUTHwOTScNhFs%2FL3vgT6uNMD1L0TCvisvLBjqkAcl71EVixYQK92pbxoxnZ%2FsORi13V2Fwo1h4v9ICdBLEESvCLWXNZP389H%2F%2FQzvOeMfzCMA1W2dZ80ICVeoGODNP9bCnqjWdvTSSMn7sosdMk4gnjEbgdaI629CZTtIxj1t38jEyCVx23l%2FQD5%2Bn67uwnSphT3GdyggXyRz%2F4JYGgSLVQGJvuxUJTX8bSNpmqVJMa5CCzFXKqQ4TjrtoCx7SeU6T&X-Amz-Signature=5c9fed7c41a9bebaca8ebc1d7484f758fb6286b2be09bd71ca5530b4799f1733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

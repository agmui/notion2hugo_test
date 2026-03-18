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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVOIZPQ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCjmdV9CWfSRsH8v8vZwhg9Vc8yBLijYT5Vy2NHONrQ0wIhAOBmcpuL0POCLz7DrI5rc3kQGK%2FX%2FRmB11qK%2BPo6Zl%2FZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJGQV2nViuggywmAMq3AO3UpynsCYmMys%2FYq%2FjGqI%2B2WZ%2Fcm9J40svz%2BKXMA3shhddqf20On04FzFFUR%2BJ8TSekh74pwATPLa74fXDcwLiXG49rwfeVJ8zQ9JYz790IFKWszjn%2BzlmJlVxE35xKB0NS0uSAH99NZ%2Fpw6ELxsRNr7%2BVC%2BdB8D7Mk%2Fyqwb0ZnS1vUoBbwmLaPcX0UmpXdhZr%2BUiPN0rOW%2FB%2BFAW3T0pZAwyQmmLJhwpW0x1rmxY%2BVyvLt3rzJTE%2Fp7vv9lbJdmft0LVcETv2ImRAJg1i8PtAkEcCO9C3VLFnI4Ys79W6qGZzpS3KyqgB8MYW2CWmpy5PRN3ZgyvKk9oseX%2ByNu%2FQJOK%2BgYgQMYW1%2BAN3EZa%2BRCa3hOeQgGTzLZfwqngdhEW%2BG%2Fvz9WyATZiX63A2CH5CUqvBXQYaWfUavut5WGqpE5FBMhSF9xLQyAxGVTvQT2WhyX1j1yJ5b7o0wod2MsG%2FvjoiKbUCRS5LP01CiEwvbzSfU2c3ycu%2Bft8PuGH%2B7GlfgpmFcM6JgiW58z1naJpyIzBinxGUc1KKxE%2BgxLKARLXPFjT7etlKEFkgUKCHDjTjdaJ%2FkQgD%2F46jBbEr4WYbl39dOuIm%2F6KmqDYJZI%2F4oq92PUb%2BznS0FTrxfDDd6efNBjqkAXlTHcT4gze7dCSFC7rL3MdEOveZH0GQlMxI%2FdKBrXchSqFhIXvY8item5BxXu%2FAmU5ZaqsmziwHKVQ83iPDlDITXKcAtMVv6jP6OWl4GGu7lSXP6%2FHed2eoZYMy2icVtizx%2BV7UZlokYP8Xiu6uv%2Bj%2BlNLMPrOGDNSiDH4RICo65rXN6SagIxudQ6pBFD2vtP05RCMhDtoNJh4UJJHu%2FbDOAreJ&X-Amz-Signature=785435c272db093f6dadf16001d48cf049aa47b100450987016171a61c3c7217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVOIZPQ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCjmdV9CWfSRsH8v8vZwhg9Vc8yBLijYT5Vy2NHONrQ0wIhAOBmcpuL0POCLz7DrI5rc3kQGK%2FX%2FRmB11qK%2BPo6Zl%2FZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJGQV2nViuggywmAMq3AO3UpynsCYmMys%2FYq%2FjGqI%2B2WZ%2Fcm9J40svz%2BKXMA3shhddqf20On04FzFFUR%2BJ8TSekh74pwATPLa74fXDcwLiXG49rwfeVJ8zQ9JYz790IFKWszjn%2BzlmJlVxE35xKB0NS0uSAH99NZ%2Fpw6ELxsRNr7%2BVC%2BdB8D7Mk%2Fyqwb0ZnS1vUoBbwmLaPcX0UmpXdhZr%2BUiPN0rOW%2FB%2BFAW3T0pZAwyQmmLJhwpW0x1rmxY%2BVyvLt3rzJTE%2Fp7vv9lbJdmft0LVcETv2ImRAJg1i8PtAkEcCO9C3VLFnI4Ys79W6qGZzpS3KyqgB8MYW2CWmpy5PRN3ZgyvKk9oseX%2ByNu%2FQJOK%2BgYgQMYW1%2BAN3EZa%2BRCa3hOeQgGTzLZfwqngdhEW%2BG%2Fvz9WyATZiX63A2CH5CUqvBXQYaWfUavut5WGqpE5FBMhSF9xLQyAxGVTvQT2WhyX1j1yJ5b7o0wod2MsG%2FvjoiKbUCRS5LP01CiEwvbzSfU2c3ycu%2Bft8PuGH%2B7GlfgpmFcM6JgiW58z1naJpyIzBinxGUc1KKxE%2BgxLKARLXPFjT7etlKEFkgUKCHDjTjdaJ%2FkQgD%2F46jBbEr4WYbl39dOuIm%2F6KmqDYJZI%2F4oq92PUb%2BznS0FTrxfDDd6efNBjqkAXlTHcT4gze7dCSFC7rL3MdEOveZH0GQlMxI%2FdKBrXchSqFhIXvY8item5BxXu%2FAmU5ZaqsmziwHKVQ83iPDlDITXKcAtMVv6jP6OWl4GGu7lSXP6%2FHed2eoZYMy2icVtizx%2BV7UZlokYP8Xiu6uv%2Bj%2BlNLMPrOGDNSiDH4RICo65rXN6SagIxudQ6pBFD2vtP05RCMhDtoNJh4UJJHu%2FbDOAreJ&X-Amz-Signature=23870fcc685a1ec14cd91b98fd611c48fdbcd365eff5866491d704523563ea3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVOIZPQ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCjmdV9CWfSRsH8v8vZwhg9Vc8yBLijYT5Vy2NHONrQ0wIhAOBmcpuL0POCLz7DrI5rc3kQGK%2FX%2FRmB11qK%2BPo6Zl%2FZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJGQV2nViuggywmAMq3AO3UpynsCYmMys%2FYq%2FjGqI%2B2WZ%2Fcm9J40svz%2BKXMA3shhddqf20On04FzFFUR%2BJ8TSekh74pwATPLa74fXDcwLiXG49rwfeVJ8zQ9JYz790IFKWszjn%2BzlmJlVxE35xKB0NS0uSAH99NZ%2Fpw6ELxsRNr7%2BVC%2BdB8D7Mk%2Fyqwb0ZnS1vUoBbwmLaPcX0UmpXdhZr%2BUiPN0rOW%2FB%2BFAW3T0pZAwyQmmLJhwpW0x1rmxY%2BVyvLt3rzJTE%2Fp7vv9lbJdmft0LVcETv2ImRAJg1i8PtAkEcCO9C3VLFnI4Ys79W6qGZzpS3KyqgB8MYW2CWmpy5PRN3ZgyvKk9oseX%2ByNu%2FQJOK%2BgYgQMYW1%2BAN3EZa%2BRCa3hOeQgGTzLZfwqngdhEW%2BG%2Fvz9WyATZiX63A2CH5CUqvBXQYaWfUavut5WGqpE5FBMhSF9xLQyAxGVTvQT2WhyX1j1yJ5b7o0wod2MsG%2FvjoiKbUCRS5LP01CiEwvbzSfU2c3ycu%2Bft8PuGH%2B7GlfgpmFcM6JgiW58z1naJpyIzBinxGUc1KKxE%2BgxLKARLXPFjT7etlKEFkgUKCHDjTjdaJ%2FkQgD%2F46jBbEr4WYbl39dOuIm%2F6KmqDYJZI%2F4oq92PUb%2BznS0FTrxfDDd6efNBjqkAXlTHcT4gze7dCSFC7rL3MdEOveZH0GQlMxI%2FdKBrXchSqFhIXvY8item5BxXu%2FAmU5ZaqsmziwHKVQ83iPDlDITXKcAtMVv6jP6OWl4GGu7lSXP6%2FHed2eoZYMy2icVtizx%2BV7UZlokYP8Xiu6uv%2Bj%2BlNLMPrOGDNSiDH4RICo65rXN6SagIxudQ6pBFD2vtP05RCMhDtoNJh4UJJHu%2FbDOAreJ&X-Amz-Signature=e0ec41a39bbc6f0aa665f1375cf3e6206d7832c766f76f2abaa215c74c92faf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVOIZPQ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCjmdV9CWfSRsH8v8vZwhg9Vc8yBLijYT5Vy2NHONrQ0wIhAOBmcpuL0POCLz7DrI5rc3kQGK%2FX%2FRmB11qK%2BPo6Zl%2FZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJGQV2nViuggywmAMq3AO3UpynsCYmMys%2FYq%2FjGqI%2B2WZ%2Fcm9J40svz%2BKXMA3shhddqf20On04FzFFUR%2BJ8TSekh74pwATPLa74fXDcwLiXG49rwfeVJ8zQ9JYz790IFKWszjn%2BzlmJlVxE35xKB0NS0uSAH99NZ%2Fpw6ELxsRNr7%2BVC%2BdB8D7Mk%2Fyqwb0ZnS1vUoBbwmLaPcX0UmpXdhZr%2BUiPN0rOW%2FB%2BFAW3T0pZAwyQmmLJhwpW0x1rmxY%2BVyvLt3rzJTE%2Fp7vv9lbJdmft0LVcETv2ImRAJg1i8PtAkEcCO9C3VLFnI4Ys79W6qGZzpS3KyqgB8MYW2CWmpy5PRN3ZgyvKk9oseX%2ByNu%2FQJOK%2BgYgQMYW1%2BAN3EZa%2BRCa3hOeQgGTzLZfwqngdhEW%2BG%2Fvz9WyATZiX63A2CH5CUqvBXQYaWfUavut5WGqpE5FBMhSF9xLQyAxGVTvQT2WhyX1j1yJ5b7o0wod2MsG%2FvjoiKbUCRS5LP01CiEwvbzSfU2c3ycu%2Bft8PuGH%2B7GlfgpmFcM6JgiW58z1naJpyIzBinxGUc1KKxE%2BgxLKARLXPFjT7etlKEFkgUKCHDjTjdaJ%2FkQgD%2F46jBbEr4WYbl39dOuIm%2F6KmqDYJZI%2F4oq92PUb%2BznS0FTrxfDDd6efNBjqkAXlTHcT4gze7dCSFC7rL3MdEOveZH0GQlMxI%2FdKBrXchSqFhIXvY8item5BxXu%2FAmU5ZaqsmziwHKVQ83iPDlDITXKcAtMVv6jP6OWl4GGu7lSXP6%2FHed2eoZYMy2icVtizx%2BV7UZlokYP8Xiu6uv%2Bj%2BlNLMPrOGDNSiDH4RICo65rXN6SagIxudQ6pBFD2vtP05RCMhDtoNJh4UJJHu%2FbDOAreJ&X-Amz-Signature=5e821d5216cbd457cc8fa323ecf37b7a2c732799d22a0844e75fdb079e57eb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVOIZPQ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCjmdV9CWfSRsH8v8vZwhg9Vc8yBLijYT5Vy2NHONrQ0wIhAOBmcpuL0POCLz7DrI5rc3kQGK%2FX%2FRmB11qK%2BPo6Zl%2FZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJGQV2nViuggywmAMq3AO3UpynsCYmMys%2FYq%2FjGqI%2B2WZ%2Fcm9J40svz%2BKXMA3shhddqf20On04FzFFUR%2BJ8TSekh74pwATPLa74fXDcwLiXG49rwfeVJ8zQ9JYz790IFKWszjn%2BzlmJlVxE35xKB0NS0uSAH99NZ%2Fpw6ELxsRNr7%2BVC%2BdB8D7Mk%2Fyqwb0ZnS1vUoBbwmLaPcX0UmpXdhZr%2BUiPN0rOW%2FB%2BFAW3T0pZAwyQmmLJhwpW0x1rmxY%2BVyvLt3rzJTE%2Fp7vv9lbJdmft0LVcETv2ImRAJg1i8PtAkEcCO9C3VLFnI4Ys79W6qGZzpS3KyqgB8MYW2CWmpy5PRN3ZgyvKk9oseX%2ByNu%2FQJOK%2BgYgQMYW1%2BAN3EZa%2BRCa3hOeQgGTzLZfwqngdhEW%2BG%2Fvz9WyATZiX63A2CH5CUqvBXQYaWfUavut5WGqpE5FBMhSF9xLQyAxGVTvQT2WhyX1j1yJ5b7o0wod2MsG%2FvjoiKbUCRS5LP01CiEwvbzSfU2c3ycu%2Bft8PuGH%2B7GlfgpmFcM6JgiW58z1naJpyIzBinxGUc1KKxE%2BgxLKARLXPFjT7etlKEFkgUKCHDjTjdaJ%2FkQgD%2F46jBbEr4WYbl39dOuIm%2F6KmqDYJZI%2F4oq92PUb%2BznS0FTrxfDDd6efNBjqkAXlTHcT4gze7dCSFC7rL3MdEOveZH0GQlMxI%2FdKBrXchSqFhIXvY8item5BxXu%2FAmU5ZaqsmziwHKVQ83iPDlDITXKcAtMVv6jP6OWl4GGu7lSXP6%2FHed2eoZYMy2icVtizx%2BV7UZlokYP8Xiu6uv%2Bj%2BlNLMPrOGDNSiDH4RICo65rXN6SagIxudQ6pBFD2vtP05RCMhDtoNJh4UJJHu%2FbDOAreJ&X-Amz-Signature=4a2a0de48acbc1c19442ba92984d47792d314e47ec77aa9bf8f6a762fbff81fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVOIZPQ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCjmdV9CWfSRsH8v8vZwhg9Vc8yBLijYT5Vy2NHONrQ0wIhAOBmcpuL0POCLz7DrI5rc3kQGK%2FX%2FRmB11qK%2BPo6Zl%2FZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJGQV2nViuggywmAMq3AO3UpynsCYmMys%2FYq%2FjGqI%2B2WZ%2Fcm9J40svz%2BKXMA3shhddqf20On04FzFFUR%2BJ8TSekh74pwATPLa74fXDcwLiXG49rwfeVJ8zQ9JYz790IFKWszjn%2BzlmJlVxE35xKB0NS0uSAH99NZ%2Fpw6ELxsRNr7%2BVC%2BdB8D7Mk%2Fyqwb0ZnS1vUoBbwmLaPcX0UmpXdhZr%2BUiPN0rOW%2FB%2BFAW3T0pZAwyQmmLJhwpW0x1rmxY%2BVyvLt3rzJTE%2Fp7vv9lbJdmft0LVcETv2ImRAJg1i8PtAkEcCO9C3VLFnI4Ys79W6qGZzpS3KyqgB8MYW2CWmpy5PRN3ZgyvKk9oseX%2ByNu%2FQJOK%2BgYgQMYW1%2BAN3EZa%2BRCa3hOeQgGTzLZfwqngdhEW%2BG%2Fvz9WyATZiX63A2CH5CUqvBXQYaWfUavut5WGqpE5FBMhSF9xLQyAxGVTvQT2WhyX1j1yJ5b7o0wod2MsG%2FvjoiKbUCRS5LP01CiEwvbzSfU2c3ycu%2Bft8PuGH%2B7GlfgpmFcM6JgiW58z1naJpyIzBinxGUc1KKxE%2BgxLKARLXPFjT7etlKEFkgUKCHDjTjdaJ%2FkQgD%2F46jBbEr4WYbl39dOuIm%2F6KmqDYJZI%2F4oq92PUb%2BznS0FTrxfDDd6efNBjqkAXlTHcT4gze7dCSFC7rL3MdEOveZH0GQlMxI%2FdKBrXchSqFhIXvY8item5BxXu%2FAmU5ZaqsmziwHKVQ83iPDlDITXKcAtMVv6jP6OWl4GGu7lSXP6%2FHed2eoZYMy2icVtizx%2BV7UZlokYP8Xiu6uv%2Bj%2BlNLMPrOGDNSiDH4RICo65rXN6SagIxudQ6pBFD2vtP05RCMhDtoNJh4UJJHu%2FbDOAreJ&X-Amz-Signature=02d2959fca8731490070d19f8249be94ea844ae1b1e8b7c06482289ea73ff9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVOIZPQ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCjmdV9CWfSRsH8v8vZwhg9Vc8yBLijYT5Vy2NHONrQ0wIhAOBmcpuL0POCLz7DrI5rc3kQGK%2FX%2FRmB11qK%2BPo6Zl%2FZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJGQV2nViuggywmAMq3AO3UpynsCYmMys%2FYq%2FjGqI%2B2WZ%2Fcm9J40svz%2BKXMA3shhddqf20On04FzFFUR%2BJ8TSekh74pwATPLa74fXDcwLiXG49rwfeVJ8zQ9JYz790IFKWszjn%2BzlmJlVxE35xKB0NS0uSAH99NZ%2Fpw6ELxsRNr7%2BVC%2BdB8D7Mk%2Fyqwb0ZnS1vUoBbwmLaPcX0UmpXdhZr%2BUiPN0rOW%2FB%2BFAW3T0pZAwyQmmLJhwpW0x1rmxY%2BVyvLt3rzJTE%2Fp7vv9lbJdmft0LVcETv2ImRAJg1i8PtAkEcCO9C3VLFnI4Ys79W6qGZzpS3KyqgB8MYW2CWmpy5PRN3ZgyvKk9oseX%2ByNu%2FQJOK%2BgYgQMYW1%2BAN3EZa%2BRCa3hOeQgGTzLZfwqngdhEW%2BG%2Fvz9WyATZiX63A2CH5CUqvBXQYaWfUavut5WGqpE5FBMhSF9xLQyAxGVTvQT2WhyX1j1yJ5b7o0wod2MsG%2FvjoiKbUCRS5LP01CiEwvbzSfU2c3ycu%2Bft8PuGH%2B7GlfgpmFcM6JgiW58z1naJpyIzBinxGUc1KKxE%2BgxLKARLXPFjT7etlKEFkgUKCHDjTjdaJ%2FkQgD%2F46jBbEr4WYbl39dOuIm%2F6KmqDYJZI%2F4oq92PUb%2BznS0FTrxfDDd6efNBjqkAXlTHcT4gze7dCSFC7rL3MdEOveZH0GQlMxI%2FdKBrXchSqFhIXvY8item5BxXu%2FAmU5ZaqsmziwHKVQ83iPDlDITXKcAtMVv6jP6OWl4GGu7lSXP6%2FHed2eoZYMy2icVtizx%2BV7UZlokYP8Xiu6uv%2Bj%2BlNLMPrOGDNSiDH4RICo65rXN6SagIxudQ6pBFD2vtP05RCMhDtoNJh4UJJHu%2FbDOAreJ&X-Amz-Signature=c68fd75974eaf192379bcfec368c99e81483ab7f3c4cfd40efefee8a9a7e7e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

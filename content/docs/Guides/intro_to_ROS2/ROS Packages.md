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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN3QUSF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1EF5u4%2FO%2FHNHGRK1DFPhmEpZBWI3ocgntjGCYDYuEdwIhAPVY46y6RbyIf81Mf4DOoqR8KMJTZGDB%2BVsPAH2Vz4QfKv8DCBYQABoMNjM3NDIzMTgzODA1IgxAzR434QzsRIm9t5Uq3AM%2BHMOXjpfQ1ix97P36wr6Rxohjxj6uv2RkAM0bdPxhNu2JlW2wn%2BqO2cyJTQI56Kc59tPPFvMrgLmLyI5Sd4KuHJdBI3%2Bze0K%2BNDV73%2FDD5AZoR0I4wk7CreY2ybCqqUzlAzWHslEcK5Egt1E6TyTosXAdYHs1QXzHHEvmTOvHDmFa%2B%2FD0ohATKoggpSW%2F28ES3IAl80RO%2BwY9DuqnsgARyse%2Brgp37%2BIW3aJlcHYtSP1NrV2CSbobIUVLVJ2nSZ5uPMV76%2Fi6flJmYfHAQY00KxNRumOF55seNlv2cgmywbTxwd95iFdHxg2G0yrs57hEtuhydM756lMI%2FFlOzUA25ZhupUO8JJvHjuNiY7GQ4Ieq3g42AqtzAaWK4FbtaypR6IVzhGRcxPe3sAa6lrJxpvF90lXt0YS9OGlMu5EqIou0KWQEMKEXKYBg%2B8g8v%2FyU8txLss2tdiT0h0KyoqmarIUgGmdtmrV68Jx9zy2jZYsO6mre%2FvnQHs8mVaEokOAqaynx2eBBBh%2B5t5P36JhT7PWBNRi2sODAxLKbROyTl0voCjtkbv%2BNtzQT1MxwSzuukKxvsn78yWqe1WvR53dQDWLjNgppcxSUAY%2BsAEqsS2ENFxC91MrC4hs9KjCn6KjABjqkATiYVb539%2Fyx71gqxqYJyzTF4z9sJH%2FnKOcjuRYmfV4tIlprwfFsWlnQwFqxYf304J8VIYD5YNcKGTnADhbEPp8sAhW%2FlY6ifkIbQb0ASS%2BlMKI4zSojTiBt%2F3qi5vTLaZ9iC7fqiK1q8wo5UNjsv50%2BTKQ9O096PO9H108RFYLlXnXE2Fp807%2Bb7%2FyyVbKEoG3QlERKZFLeoJek5VvpBHZ3Of4m&X-Amz-Signature=31b7b620eb0d4cc28454ec8df4e7342caff79fa7e5393938f45a1a3c08e3620a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN3QUSF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1EF5u4%2FO%2FHNHGRK1DFPhmEpZBWI3ocgntjGCYDYuEdwIhAPVY46y6RbyIf81Mf4DOoqR8KMJTZGDB%2BVsPAH2Vz4QfKv8DCBYQABoMNjM3NDIzMTgzODA1IgxAzR434QzsRIm9t5Uq3AM%2BHMOXjpfQ1ix97P36wr6Rxohjxj6uv2RkAM0bdPxhNu2JlW2wn%2BqO2cyJTQI56Kc59tPPFvMrgLmLyI5Sd4KuHJdBI3%2Bze0K%2BNDV73%2FDD5AZoR0I4wk7CreY2ybCqqUzlAzWHslEcK5Egt1E6TyTosXAdYHs1QXzHHEvmTOvHDmFa%2B%2FD0ohATKoggpSW%2F28ES3IAl80RO%2BwY9DuqnsgARyse%2Brgp37%2BIW3aJlcHYtSP1NrV2CSbobIUVLVJ2nSZ5uPMV76%2Fi6flJmYfHAQY00KxNRumOF55seNlv2cgmywbTxwd95iFdHxg2G0yrs57hEtuhydM756lMI%2FFlOzUA25ZhupUO8JJvHjuNiY7GQ4Ieq3g42AqtzAaWK4FbtaypR6IVzhGRcxPe3sAa6lrJxpvF90lXt0YS9OGlMu5EqIou0KWQEMKEXKYBg%2B8g8v%2FyU8txLss2tdiT0h0KyoqmarIUgGmdtmrV68Jx9zy2jZYsO6mre%2FvnQHs8mVaEokOAqaynx2eBBBh%2B5t5P36JhT7PWBNRi2sODAxLKbROyTl0voCjtkbv%2BNtzQT1MxwSzuukKxvsn78yWqe1WvR53dQDWLjNgppcxSUAY%2BsAEqsS2ENFxC91MrC4hs9KjCn6KjABjqkATiYVb539%2Fyx71gqxqYJyzTF4z9sJH%2FnKOcjuRYmfV4tIlprwfFsWlnQwFqxYf304J8VIYD5YNcKGTnADhbEPp8sAhW%2FlY6ifkIbQb0ASS%2BlMKI4zSojTiBt%2F3qi5vTLaZ9iC7fqiK1q8wo5UNjsv50%2BTKQ9O096PO9H108RFYLlXnXE2Fp807%2Bb7%2FyyVbKEoG3QlERKZFLeoJek5VvpBHZ3Of4m&X-Amz-Signature=6ed77a6bbe5bb5f29829b4ada7271505809c7834a734c54b9ebb8d96cd323f65&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN3QUSF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1EF5u4%2FO%2FHNHGRK1DFPhmEpZBWI3ocgntjGCYDYuEdwIhAPVY46y6RbyIf81Mf4DOoqR8KMJTZGDB%2BVsPAH2Vz4QfKv8DCBYQABoMNjM3NDIzMTgzODA1IgxAzR434QzsRIm9t5Uq3AM%2BHMOXjpfQ1ix97P36wr6Rxohjxj6uv2RkAM0bdPxhNu2JlW2wn%2BqO2cyJTQI56Kc59tPPFvMrgLmLyI5Sd4KuHJdBI3%2Bze0K%2BNDV73%2FDD5AZoR0I4wk7CreY2ybCqqUzlAzWHslEcK5Egt1E6TyTosXAdYHs1QXzHHEvmTOvHDmFa%2B%2FD0ohATKoggpSW%2F28ES3IAl80RO%2BwY9DuqnsgARyse%2Brgp37%2BIW3aJlcHYtSP1NrV2CSbobIUVLVJ2nSZ5uPMV76%2Fi6flJmYfHAQY00KxNRumOF55seNlv2cgmywbTxwd95iFdHxg2G0yrs57hEtuhydM756lMI%2FFlOzUA25ZhupUO8JJvHjuNiY7GQ4Ieq3g42AqtzAaWK4FbtaypR6IVzhGRcxPe3sAa6lrJxpvF90lXt0YS9OGlMu5EqIou0KWQEMKEXKYBg%2B8g8v%2FyU8txLss2tdiT0h0KyoqmarIUgGmdtmrV68Jx9zy2jZYsO6mre%2FvnQHs8mVaEokOAqaynx2eBBBh%2B5t5P36JhT7PWBNRi2sODAxLKbROyTl0voCjtkbv%2BNtzQT1MxwSzuukKxvsn78yWqe1WvR53dQDWLjNgppcxSUAY%2BsAEqsS2ENFxC91MrC4hs9KjCn6KjABjqkATiYVb539%2Fyx71gqxqYJyzTF4z9sJH%2FnKOcjuRYmfV4tIlprwfFsWlnQwFqxYf304J8VIYD5YNcKGTnADhbEPp8sAhW%2FlY6ifkIbQb0ASS%2BlMKI4zSojTiBt%2F3qi5vTLaZ9iC7fqiK1q8wo5UNjsv50%2BTKQ9O096PO9H108RFYLlXnXE2Fp807%2Bb7%2FyyVbKEoG3QlERKZFLeoJek5VvpBHZ3Of4m&X-Amz-Signature=50f45a320ba7684ec66ce21cf0d29c542f0f6eb9088a7d1eca414549c6109ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN3QUSF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1EF5u4%2FO%2FHNHGRK1DFPhmEpZBWI3ocgntjGCYDYuEdwIhAPVY46y6RbyIf81Mf4DOoqR8KMJTZGDB%2BVsPAH2Vz4QfKv8DCBYQABoMNjM3NDIzMTgzODA1IgxAzR434QzsRIm9t5Uq3AM%2BHMOXjpfQ1ix97P36wr6Rxohjxj6uv2RkAM0bdPxhNu2JlW2wn%2BqO2cyJTQI56Kc59tPPFvMrgLmLyI5Sd4KuHJdBI3%2Bze0K%2BNDV73%2FDD5AZoR0I4wk7CreY2ybCqqUzlAzWHslEcK5Egt1E6TyTosXAdYHs1QXzHHEvmTOvHDmFa%2B%2FD0ohATKoggpSW%2F28ES3IAl80RO%2BwY9DuqnsgARyse%2Brgp37%2BIW3aJlcHYtSP1NrV2CSbobIUVLVJ2nSZ5uPMV76%2Fi6flJmYfHAQY00KxNRumOF55seNlv2cgmywbTxwd95iFdHxg2G0yrs57hEtuhydM756lMI%2FFlOzUA25ZhupUO8JJvHjuNiY7GQ4Ieq3g42AqtzAaWK4FbtaypR6IVzhGRcxPe3sAa6lrJxpvF90lXt0YS9OGlMu5EqIou0KWQEMKEXKYBg%2B8g8v%2FyU8txLss2tdiT0h0KyoqmarIUgGmdtmrV68Jx9zy2jZYsO6mre%2FvnQHs8mVaEokOAqaynx2eBBBh%2B5t5P36JhT7PWBNRi2sODAxLKbROyTl0voCjtkbv%2BNtzQT1MxwSzuukKxvsn78yWqe1WvR53dQDWLjNgppcxSUAY%2BsAEqsS2ENFxC91MrC4hs9KjCn6KjABjqkATiYVb539%2Fyx71gqxqYJyzTF4z9sJH%2FnKOcjuRYmfV4tIlprwfFsWlnQwFqxYf304J8VIYD5YNcKGTnADhbEPp8sAhW%2FlY6ifkIbQb0ASS%2BlMKI4zSojTiBt%2F3qi5vTLaZ9iC7fqiK1q8wo5UNjsv50%2BTKQ9O096PO9H108RFYLlXnXE2Fp807%2Bb7%2FyyVbKEoG3QlERKZFLeoJek5VvpBHZ3Of4m&X-Amz-Signature=edabb9642e6097acf417acbcde8753145c7b82b3f6664846443880e84a8fa953&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN3QUSF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1EF5u4%2FO%2FHNHGRK1DFPhmEpZBWI3ocgntjGCYDYuEdwIhAPVY46y6RbyIf81Mf4DOoqR8KMJTZGDB%2BVsPAH2Vz4QfKv8DCBYQABoMNjM3NDIzMTgzODA1IgxAzR434QzsRIm9t5Uq3AM%2BHMOXjpfQ1ix97P36wr6Rxohjxj6uv2RkAM0bdPxhNu2JlW2wn%2BqO2cyJTQI56Kc59tPPFvMrgLmLyI5Sd4KuHJdBI3%2Bze0K%2BNDV73%2FDD5AZoR0I4wk7CreY2ybCqqUzlAzWHslEcK5Egt1E6TyTosXAdYHs1QXzHHEvmTOvHDmFa%2B%2FD0ohATKoggpSW%2F28ES3IAl80RO%2BwY9DuqnsgARyse%2Brgp37%2BIW3aJlcHYtSP1NrV2CSbobIUVLVJ2nSZ5uPMV76%2Fi6flJmYfHAQY00KxNRumOF55seNlv2cgmywbTxwd95iFdHxg2G0yrs57hEtuhydM756lMI%2FFlOzUA25ZhupUO8JJvHjuNiY7GQ4Ieq3g42AqtzAaWK4FbtaypR6IVzhGRcxPe3sAa6lrJxpvF90lXt0YS9OGlMu5EqIou0KWQEMKEXKYBg%2B8g8v%2FyU8txLss2tdiT0h0KyoqmarIUgGmdtmrV68Jx9zy2jZYsO6mre%2FvnQHs8mVaEokOAqaynx2eBBBh%2B5t5P36JhT7PWBNRi2sODAxLKbROyTl0voCjtkbv%2BNtzQT1MxwSzuukKxvsn78yWqe1WvR53dQDWLjNgppcxSUAY%2BsAEqsS2ENFxC91MrC4hs9KjCn6KjABjqkATiYVb539%2Fyx71gqxqYJyzTF4z9sJH%2FnKOcjuRYmfV4tIlprwfFsWlnQwFqxYf304J8VIYD5YNcKGTnADhbEPp8sAhW%2FlY6ifkIbQb0ASS%2BlMKI4zSojTiBt%2F3qi5vTLaZ9iC7fqiK1q8wo5UNjsv50%2BTKQ9O096PO9H108RFYLlXnXE2Fp807%2Bb7%2FyyVbKEoG3QlERKZFLeoJek5VvpBHZ3Of4m&X-Amz-Signature=3863a15fe2cf2c0d7da766de9b78a0ae79b319d075dcac63cb372088d4d05cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN3QUSF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1EF5u4%2FO%2FHNHGRK1DFPhmEpZBWI3ocgntjGCYDYuEdwIhAPVY46y6RbyIf81Mf4DOoqR8KMJTZGDB%2BVsPAH2Vz4QfKv8DCBYQABoMNjM3NDIzMTgzODA1IgxAzR434QzsRIm9t5Uq3AM%2BHMOXjpfQ1ix97P36wr6Rxohjxj6uv2RkAM0bdPxhNu2JlW2wn%2BqO2cyJTQI56Kc59tPPFvMrgLmLyI5Sd4KuHJdBI3%2Bze0K%2BNDV73%2FDD5AZoR0I4wk7CreY2ybCqqUzlAzWHslEcK5Egt1E6TyTosXAdYHs1QXzHHEvmTOvHDmFa%2B%2FD0ohATKoggpSW%2F28ES3IAl80RO%2BwY9DuqnsgARyse%2Brgp37%2BIW3aJlcHYtSP1NrV2CSbobIUVLVJ2nSZ5uPMV76%2Fi6flJmYfHAQY00KxNRumOF55seNlv2cgmywbTxwd95iFdHxg2G0yrs57hEtuhydM756lMI%2FFlOzUA25ZhupUO8JJvHjuNiY7GQ4Ieq3g42AqtzAaWK4FbtaypR6IVzhGRcxPe3sAa6lrJxpvF90lXt0YS9OGlMu5EqIou0KWQEMKEXKYBg%2B8g8v%2FyU8txLss2tdiT0h0KyoqmarIUgGmdtmrV68Jx9zy2jZYsO6mre%2FvnQHs8mVaEokOAqaynx2eBBBh%2B5t5P36JhT7PWBNRi2sODAxLKbROyTl0voCjtkbv%2BNtzQT1MxwSzuukKxvsn78yWqe1WvR53dQDWLjNgppcxSUAY%2BsAEqsS2ENFxC91MrC4hs9KjCn6KjABjqkATiYVb539%2Fyx71gqxqYJyzTF4z9sJH%2FnKOcjuRYmfV4tIlprwfFsWlnQwFqxYf304J8VIYD5YNcKGTnADhbEPp8sAhW%2FlY6ifkIbQb0ASS%2BlMKI4zSojTiBt%2F3qi5vTLaZ9iC7fqiK1q8wo5UNjsv50%2BTKQ9O096PO9H108RFYLlXnXE2Fp807%2Bb7%2FyyVbKEoG3QlERKZFLeoJek5VvpBHZ3Of4m&X-Amz-Signature=3746a7066978aba2b2a219454bfcb387f50eacb7c5dc5befc084d920163bf508&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN3QUSF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1EF5u4%2FO%2FHNHGRK1DFPhmEpZBWI3ocgntjGCYDYuEdwIhAPVY46y6RbyIf81Mf4DOoqR8KMJTZGDB%2BVsPAH2Vz4QfKv8DCBYQABoMNjM3NDIzMTgzODA1IgxAzR434QzsRIm9t5Uq3AM%2BHMOXjpfQ1ix97P36wr6Rxohjxj6uv2RkAM0bdPxhNu2JlW2wn%2BqO2cyJTQI56Kc59tPPFvMrgLmLyI5Sd4KuHJdBI3%2Bze0K%2BNDV73%2FDD5AZoR0I4wk7CreY2ybCqqUzlAzWHslEcK5Egt1E6TyTosXAdYHs1QXzHHEvmTOvHDmFa%2B%2FD0ohATKoggpSW%2F28ES3IAl80RO%2BwY9DuqnsgARyse%2Brgp37%2BIW3aJlcHYtSP1NrV2CSbobIUVLVJ2nSZ5uPMV76%2Fi6flJmYfHAQY00KxNRumOF55seNlv2cgmywbTxwd95iFdHxg2G0yrs57hEtuhydM756lMI%2FFlOzUA25ZhupUO8JJvHjuNiY7GQ4Ieq3g42AqtzAaWK4FbtaypR6IVzhGRcxPe3sAa6lrJxpvF90lXt0YS9OGlMu5EqIou0KWQEMKEXKYBg%2B8g8v%2FyU8txLss2tdiT0h0KyoqmarIUgGmdtmrV68Jx9zy2jZYsO6mre%2FvnQHs8mVaEokOAqaynx2eBBBh%2B5t5P36JhT7PWBNRi2sODAxLKbROyTl0voCjtkbv%2BNtzQT1MxwSzuukKxvsn78yWqe1WvR53dQDWLjNgppcxSUAY%2BsAEqsS2ENFxC91MrC4hs9KjCn6KjABjqkATiYVb539%2Fyx71gqxqYJyzTF4z9sJH%2FnKOcjuRYmfV4tIlprwfFsWlnQwFqxYf304J8VIYD5YNcKGTnADhbEPp8sAhW%2FlY6ifkIbQb0ASS%2BlMKI4zSojTiBt%2F3qi5vTLaZ9iC7fqiK1q8wo5UNjsv50%2BTKQ9O096PO9H108RFYLlXnXE2Fp807%2Bb7%2FyyVbKEoG3QlERKZFLeoJek5VvpBHZ3Of4m&X-Amz-Signature=ac561917a36037404cad06d2b0e109dffb3bfd26bbb669c5d31b2db4e314a4c0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

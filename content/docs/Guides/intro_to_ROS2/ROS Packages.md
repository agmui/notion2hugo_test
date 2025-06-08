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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKE3R7VG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyFSOtRXghOtuMWtcj1AMyDsKuETsTiftRP%2B6NDD72UAiAw7uWwx5mA3yQhr03hy67AQE8u5isbagjwXULUJ0RVKCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5JaM6sF4i7apGkOFKtwDMhayiRNJZs%2BkLndsVt3rg7IlJMaxicqwIXSg%2F3qaEU5%2B6Km1bWqnr0Y6JtFfpzw6VtpJaZR34yjT2H1rvCjsUkBujT9CGADhbV37RsYONOW%2FOK2cvMphK6LpO%2B8RbO2VOlX4wB5NsHLj32vxpZP8IMmzXSOpdUXWi84ik%2BOWtPd6oIlu3Sdvk26ajkFw%2BGfpGTPGJbkQF2hjsnFViFnEOlJw4JjFEsHc%2BPoFzqfpN0YPuCQy22mbpA5kkE1CHnZshJhiLqFv7b7fhMkA9nmFSmFWUjIUlLYEpP2%2FjA%2FOHF8MygI3ipYWgW4MFr41Jeu2ehFU4q1q85vCtzXHtl2RaAFJ2xtQe4VeeZwi1aRU0Ig5%2Bru8iaXxT39345ckV17v25GbQbk%2FcjQQVTc8506BNsSEWnYMdNSOLcpaMV1kMwPd55eM6DHJSZIAJsA8xBQg8DO65Ii30yyNTd468kB7AnD1mjJQ5nwSVp04sew2ToLIy19AP%2Ba1GQlDVthd56RpeCpLaeVogkQHzcufvnL2mezOUYhhDlPXGgS7c3%2BN%2FZBQGMiKoBQeCjCwNWJCwaJ9FAjTebTcS3WxnWyqeGAhPHjN0eOSUNGovv9EGnD8xXa1KFDGSi%2BaBc%2FhlbAwsN2UwgY6pgGINBcFM8ykAjdYJwR4RsgeaoaPs%2FDPE6uZm77vjVjTGVHF6v7gWwYxBV%2FT3INphUWnlItCbkbgfwSN2PPpV%2FnoiGJwcgUQC7fgiu9cACtnDPE5pYfycT7jLJCuA8DfmtRxmJWNELPVzfjxdtyJ9TFksbnwvhAAjrN%2ByhF5JFeOA7%2FvZqK6vSdTQXYe3tU2%2B5gkck6JApd1rC%2BiPVrZCpX%2BctdPCF9v&X-Amz-Signature=a31903f9a87dc40e413e38c2b8fc09fac229e481b022e227b6fd86330b8c66af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKE3R7VG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyFSOtRXghOtuMWtcj1AMyDsKuETsTiftRP%2B6NDD72UAiAw7uWwx5mA3yQhr03hy67AQE8u5isbagjwXULUJ0RVKCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5JaM6sF4i7apGkOFKtwDMhayiRNJZs%2BkLndsVt3rg7IlJMaxicqwIXSg%2F3qaEU5%2B6Km1bWqnr0Y6JtFfpzw6VtpJaZR34yjT2H1rvCjsUkBujT9CGADhbV37RsYONOW%2FOK2cvMphK6LpO%2B8RbO2VOlX4wB5NsHLj32vxpZP8IMmzXSOpdUXWi84ik%2BOWtPd6oIlu3Sdvk26ajkFw%2BGfpGTPGJbkQF2hjsnFViFnEOlJw4JjFEsHc%2BPoFzqfpN0YPuCQy22mbpA5kkE1CHnZshJhiLqFv7b7fhMkA9nmFSmFWUjIUlLYEpP2%2FjA%2FOHF8MygI3ipYWgW4MFr41Jeu2ehFU4q1q85vCtzXHtl2RaAFJ2xtQe4VeeZwi1aRU0Ig5%2Bru8iaXxT39345ckV17v25GbQbk%2FcjQQVTc8506BNsSEWnYMdNSOLcpaMV1kMwPd55eM6DHJSZIAJsA8xBQg8DO65Ii30yyNTd468kB7AnD1mjJQ5nwSVp04sew2ToLIy19AP%2Ba1GQlDVthd56RpeCpLaeVogkQHzcufvnL2mezOUYhhDlPXGgS7c3%2BN%2FZBQGMiKoBQeCjCwNWJCwaJ9FAjTebTcS3WxnWyqeGAhPHjN0eOSUNGovv9EGnD8xXa1KFDGSi%2BaBc%2FhlbAwsN2UwgY6pgGINBcFM8ykAjdYJwR4RsgeaoaPs%2FDPE6uZm77vjVjTGVHF6v7gWwYxBV%2FT3INphUWnlItCbkbgfwSN2PPpV%2FnoiGJwcgUQC7fgiu9cACtnDPE5pYfycT7jLJCuA8DfmtRxmJWNELPVzfjxdtyJ9TFksbnwvhAAjrN%2ByhF5JFeOA7%2FvZqK6vSdTQXYe3tU2%2B5gkck6JApd1rC%2BiPVrZCpX%2BctdPCF9v&X-Amz-Signature=5472de5665794ee9e274fbd5f551894e879a0c06ff472f034229b06133625036&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKE3R7VG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyFSOtRXghOtuMWtcj1AMyDsKuETsTiftRP%2B6NDD72UAiAw7uWwx5mA3yQhr03hy67AQE8u5isbagjwXULUJ0RVKCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5JaM6sF4i7apGkOFKtwDMhayiRNJZs%2BkLndsVt3rg7IlJMaxicqwIXSg%2F3qaEU5%2B6Km1bWqnr0Y6JtFfpzw6VtpJaZR34yjT2H1rvCjsUkBujT9CGADhbV37RsYONOW%2FOK2cvMphK6LpO%2B8RbO2VOlX4wB5NsHLj32vxpZP8IMmzXSOpdUXWi84ik%2BOWtPd6oIlu3Sdvk26ajkFw%2BGfpGTPGJbkQF2hjsnFViFnEOlJw4JjFEsHc%2BPoFzqfpN0YPuCQy22mbpA5kkE1CHnZshJhiLqFv7b7fhMkA9nmFSmFWUjIUlLYEpP2%2FjA%2FOHF8MygI3ipYWgW4MFr41Jeu2ehFU4q1q85vCtzXHtl2RaAFJ2xtQe4VeeZwi1aRU0Ig5%2Bru8iaXxT39345ckV17v25GbQbk%2FcjQQVTc8506BNsSEWnYMdNSOLcpaMV1kMwPd55eM6DHJSZIAJsA8xBQg8DO65Ii30yyNTd468kB7AnD1mjJQ5nwSVp04sew2ToLIy19AP%2Ba1GQlDVthd56RpeCpLaeVogkQHzcufvnL2mezOUYhhDlPXGgS7c3%2BN%2FZBQGMiKoBQeCjCwNWJCwaJ9FAjTebTcS3WxnWyqeGAhPHjN0eOSUNGovv9EGnD8xXa1KFDGSi%2BaBc%2FhlbAwsN2UwgY6pgGINBcFM8ykAjdYJwR4RsgeaoaPs%2FDPE6uZm77vjVjTGVHF6v7gWwYxBV%2FT3INphUWnlItCbkbgfwSN2PPpV%2FnoiGJwcgUQC7fgiu9cACtnDPE5pYfycT7jLJCuA8DfmtRxmJWNELPVzfjxdtyJ9TFksbnwvhAAjrN%2ByhF5JFeOA7%2FvZqK6vSdTQXYe3tU2%2B5gkck6JApd1rC%2BiPVrZCpX%2BctdPCF9v&X-Amz-Signature=5eb0a583b612517c4f4a44e09bddbcc4a732d3f45848220b3176dc53ceb2393b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKE3R7VG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyFSOtRXghOtuMWtcj1AMyDsKuETsTiftRP%2B6NDD72UAiAw7uWwx5mA3yQhr03hy67AQE8u5isbagjwXULUJ0RVKCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5JaM6sF4i7apGkOFKtwDMhayiRNJZs%2BkLndsVt3rg7IlJMaxicqwIXSg%2F3qaEU5%2B6Km1bWqnr0Y6JtFfpzw6VtpJaZR34yjT2H1rvCjsUkBujT9CGADhbV37RsYONOW%2FOK2cvMphK6LpO%2B8RbO2VOlX4wB5NsHLj32vxpZP8IMmzXSOpdUXWi84ik%2BOWtPd6oIlu3Sdvk26ajkFw%2BGfpGTPGJbkQF2hjsnFViFnEOlJw4JjFEsHc%2BPoFzqfpN0YPuCQy22mbpA5kkE1CHnZshJhiLqFv7b7fhMkA9nmFSmFWUjIUlLYEpP2%2FjA%2FOHF8MygI3ipYWgW4MFr41Jeu2ehFU4q1q85vCtzXHtl2RaAFJ2xtQe4VeeZwi1aRU0Ig5%2Bru8iaXxT39345ckV17v25GbQbk%2FcjQQVTc8506BNsSEWnYMdNSOLcpaMV1kMwPd55eM6DHJSZIAJsA8xBQg8DO65Ii30yyNTd468kB7AnD1mjJQ5nwSVp04sew2ToLIy19AP%2Ba1GQlDVthd56RpeCpLaeVogkQHzcufvnL2mezOUYhhDlPXGgS7c3%2BN%2FZBQGMiKoBQeCjCwNWJCwaJ9FAjTebTcS3WxnWyqeGAhPHjN0eOSUNGovv9EGnD8xXa1KFDGSi%2BaBc%2FhlbAwsN2UwgY6pgGINBcFM8ykAjdYJwR4RsgeaoaPs%2FDPE6uZm77vjVjTGVHF6v7gWwYxBV%2FT3INphUWnlItCbkbgfwSN2PPpV%2FnoiGJwcgUQC7fgiu9cACtnDPE5pYfycT7jLJCuA8DfmtRxmJWNELPVzfjxdtyJ9TFksbnwvhAAjrN%2ByhF5JFeOA7%2FvZqK6vSdTQXYe3tU2%2B5gkck6JApd1rC%2BiPVrZCpX%2BctdPCF9v&X-Amz-Signature=44a310fdef46025f31f9e6d11f7499dedf7d0bb9a2daf68c24e03bf84d5e7bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKE3R7VG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyFSOtRXghOtuMWtcj1AMyDsKuETsTiftRP%2B6NDD72UAiAw7uWwx5mA3yQhr03hy67AQE8u5isbagjwXULUJ0RVKCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5JaM6sF4i7apGkOFKtwDMhayiRNJZs%2BkLndsVt3rg7IlJMaxicqwIXSg%2F3qaEU5%2B6Km1bWqnr0Y6JtFfpzw6VtpJaZR34yjT2H1rvCjsUkBujT9CGADhbV37RsYONOW%2FOK2cvMphK6LpO%2B8RbO2VOlX4wB5NsHLj32vxpZP8IMmzXSOpdUXWi84ik%2BOWtPd6oIlu3Sdvk26ajkFw%2BGfpGTPGJbkQF2hjsnFViFnEOlJw4JjFEsHc%2BPoFzqfpN0YPuCQy22mbpA5kkE1CHnZshJhiLqFv7b7fhMkA9nmFSmFWUjIUlLYEpP2%2FjA%2FOHF8MygI3ipYWgW4MFr41Jeu2ehFU4q1q85vCtzXHtl2RaAFJ2xtQe4VeeZwi1aRU0Ig5%2Bru8iaXxT39345ckV17v25GbQbk%2FcjQQVTc8506BNsSEWnYMdNSOLcpaMV1kMwPd55eM6DHJSZIAJsA8xBQg8DO65Ii30yyNTd468kB7AnD1mjJQ5nwSVp04sew2ToLIy19AP%2Ba1GQlDVthd56RpeCpLaeVogkQHzcufvnL2mezOUYhhDlPXGgS7c3%2BN%2FZBQGMiKoBQeCjCwNWJCwaJ9FAjTebTcS3WxnWyqeGAhPHjN0eOSUNGovv9EGnD8xXa1KFDGSi%2BaBc%2FhlbAwsN2UwgY6pgGINBcFM8ykAjdYJwR4RsgeaoaPs%2FDPE6uZm77vjVjTGVHF6v7gWwYxBV%2FT3INphUWnlItCbkbgfwSN2PPpV%2FnoiGJwcgUQC7fgiu9cACtnDPE5pYfycT7jLJCuA8DfmtRxmJWNELPVzfjxdtyJ9TFksbnwvhAAjrN%2ByhF5JFeOA7%2FvZqK6vSdTQXYe3tU2%2B5gkck6JApd1rC%2BiPVrZCpX%2BctdPCF9v&X-Amz-Signature=772527a3082f6c93627d18aef1e402fd26f09cd8f71358a4df007695ddb642c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKE3R7VG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyFSOtRXghOtuMWtcj1AMyDsKuETsTiftRP%2B6NDD72UAiAw7uWwx5mA3yQhr03hy67AQE8u5isbagjwXULUJ0RVKCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5JaM6sF4i7apGkOFKtwDMhayiRNJZs%2BkLndsVt3rg7IlJMaxicqwIXSg%2F3qaEU5%2B6Km1bWqnr0Y6JtFfpzw6VtpJaZR34yjT2H1rvCjsUkBujT9CGADhbV37RsYONOW%2FOK2cvMphK6LpO%2B8RbO2VOlX4wB5NsHLj32vxpZP8IMmzXSOpdUXWi84ik%2BOWtPd6oIlu3Sdvk26ajkFw%2BGfpGTPGJbkQF2hjsnFViFnEOlJw4JjFEsHc%2BPoFzqfpN0YPuCQy22mbpA5kkE1CHnZshJhiLqFv7b7fhMkA9nmFSmFWUjIUlLYEpP2%2FjA%2FOHF8MygI3ipYWgW4MFr41Jeu2ehFU4q1q85vCtzXHtl2RaAFJ2xtQe4VeeZwi1aRU0Ig5%2Bru8iaXxT39345ckV17v25GbQbk%2FcjQQVTc8506BNsSEWnYMdNSOLcpaMV1kMwPd55eM6DHJSZIAJsA8xBQg8DO65Ii30yyNTd468kB7AnD1mjJQ5nwSVp04sew2ToLIy19AP%2Ba1GQlDVthd56RpeCpLaeVogkQHzcufvnL2mezOUYhhDlPXGgS7c3%2BN%2FZBQGMiKoBQeCjCwNWJCwaJ9FAjTebTcS3WxnWyqeGAhPHjN0eOSUNGovv9EGnD8xXa1KFDGSi%2BaBc%2FhlbAwsN2UwgY6pgGINBcFM8ykAjdYJwR4RsgeaoaPs%2FDPE6uZm77vjVjTGVHF6v7gWwYxBV%2FT3INphUWnlItCbkbgfwSN2PPpV%2FnoiGJwcgUQC7fgiu9cACtnDPE5pYfycT7jLJCuA8DfmtRxmJWNELPVzfjxdtyJ9TFksbnwvhAAjrN%2ByhF5JFeOA7%2FvZqK6vSdTQXYe3tU2%2B5gkck6JApd1rC%2BiPVrZCpX%2BctdPCF9v&X-Amz-Signature=a73db8d8b2a9efc9f869584f2114a516435321859445c20451c8c4483ec32e69&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKE3R7VG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyFSOtRXghOtuMWtcj1AMyDsKuETsTiftRP%2B6NDD72UAiAw7uWwx5mA3yQhr03hy67AQE8u5isbagjwXULUJ0RVKCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5JaM6sF4i7apGkOFKtwDMhayiRNJZs%2BkLndsVt3rg7IlJMaxicqwIXSg%2F3qaEU5%2B6Km1bWqnr0Y6JtFfpzw6VtpJaZR34yjT2H1rvCjsUkBujT9CGADhbV37RsYONOW%2FOK2cvMphK6LpO%2B8RbO2VOlX4wB5NsHLj32vxpZP8IMmzXSOpdUXWi84ik%2BOWtPd6oIlu3Sdvk26ajkFw%2BGfpGTPGJbkQF2hjsnFViFnEOlJw4JjFEsHc%2BPoFzqfpN0YPuCQy22mbpA5kkE1CHnZshJhiLqFv7b7fhMkA9nmFSmFWUjIUlLYEpP2%2FjA%2FOHF8MygI3ipYWgW4MFr41Jeu2ehFU4q1q85vCtzXHtl2RaAFJ2xtQe4VeeZwi1aRU0Ig5%2Bru8iaXxT39345ckV17v25GbQbk%2FcjQQVTc8506BNsSEWnYMdNSOLcpaMV1kMwPd55eM6DHJSZIAJsA8xBQg8DO65Ii30yyNTd468kB7AnD1mjJQ5nwSVp04sew2ToLIy19AP%2Ba1GQlDVthd56RpeCpLaeVogkQHzcufvnL2mezOUYhhDlPXGgS7c3%2BN%2FZBQGMiKoBQeCjCwNWJCwaJ9FAjTebTcS3WxnWyqeGAhPHjN0eOSUNGovv9EGnD8xXa1KFDGSi%2BaBc%2FhlbAwsN2UwgY6pgGINBcFM8ykAjdYJwR4RsgeaoaPs%2FDPE6uZm77vjVjTGVHF6v7gWwYxBV%2FT3INphUWnlItCbkbgfwSN2PPpV%2FnoiGJwcgUQC7fgiu9cACtnDPE5pYfycT7jLJCuA8DfmtRxmJWNELPVzfjxdtyJ9TFksbnwvhAAjrN%2ByhF5JFeOA7%2FvZqK6vSdTQXYe3tU2%2B5gkck6JApd1rC%2BiPVrZCpX%2BctdPCF9v&X-Amz-Signature=7d3be463560a48549335a12dcc5b0df8fda6a56d5d8b6c300b4f5fdc7adfa063&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPIAF4F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzXoCXPjMDyRoi5Ioxb5HRZr%2BmEWgwtTD%2BsInBuv%2FY4AiAvrkemBpy5iLn%2Bv5KY06GuKQNk%2BtO%2FifH8k1vrAK3wZir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMfBcb37xK2WxUzaHlKtwDbTXJbsIo%2FsDTPK2IyqltON4t1p%2FYBdFKAXT5%2BeEjsRhleIoXj6BFoxKuewwTIx6988JRkWHt2jd%2FR8q54x38bqcC%2B1Uj5sKZ4mfIw9eRUMlM%2BmWbU%2Bj8bG2G766pNHIgEKcWvxEjF7IzM%2FL7es0%2F%2BryS0ZPMlcJ8BUPbiwgyWe1Bh62WPnJOyz3Y1IREaO2VLKPVH47RmHPNuSrEgLC7RsZ%2FhIPZoprsYSW6bnVAmgGIO630IIcBakciDnnqzpBFZk6Mxb0piZmMV8bjqx3b4%2BWhxZXD8Kgn7drC%2B5pVag8Qi%2B2ZzZli2px%2Bo44Sc6WegiKpOmqq%2Bv7idSBzZ%2F4PVMvNdNs1jp2CK3jUZnWb3NNBpwfqxSJid%2B5xS86Po2dCE%2BNWn%2BxNRVgs%2BlE7lcZIO71ED%2BRm7ctH07tse42V75HXhV52eQTXmLK190JvsoKBzpGIgStKijwUgV2iYWczVKi7x%2FCpZCvKlysxr0RI4NkLUYDsQgaTtCxfBdTxy1nCtFQHdsGJKU5f8wth5zs6SRH3GObSh8oqwcjSRvWoi8Utl4YLrnUyXuzSuAlFJKqvdHM%2FbSOif9K%2BOonFy8CbhV2Ch%2Bkg4IDu7UgLgCtQBJtL0EcV5cwSxjGwWn4wov%2FzwAY6pgFUrd%2BmdNfUVQxrpzCVhyP70RdiWJYOcDc7LYaDrwpVYbz0sms5%2BRHH4jeFEp0nOy%2BALViioMnX4g29kRn%2FSnN9AsbC674PVPmUDnuOn7Fk7y41Z9dnkBjlub4zDN1ca4og76W9gLvXHUabvMnl0DNRU6yZs7LN2kIHTDveLYRUpOnmPXCYOmM%2BMQHALz2cO%2BlIve%2BH8pB5mdmgLyfbnq0yw%2Beg5%2B35&X-Amz-Signature=5c7163e6148f0ec5613721690c1675e99011b11039acfcee73b119f4d6099352&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPIAF4F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzXoCXPjMDyRoi5Ioxb5HRZr%2BmEWgwtTD%2BsInBuv%2FY4AiAvrkemBpy5iLn%2Bv5KY06GuKQNk%2BtO%2FifH8k1vrAK3wZir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMfBcb37xK2WxUzaHlKtwDbTXJbsIo%2FsDTPK2IyqltON4t1p%2FYBdFKAXT5%2BeEjsRhleIoXj6BFoxKuewwTIx6988JRkWHt2jd%2FR8q54x38bqcC%2B1Uj5sKZ4mfIw9eRUMlM%2BmWbU%2Bj8bG2G766pNHIgEKcWvxEjF7IzM%2FL7es0%2F%2BryS0ZPMlcJ8BUPbiwgyWe1Bh62WPnJOyz3Y1IREaO2VLKPVH47RmHPNuSrEgLC7RsZ%2FhIPZoprsYSW6bnVAmgGIO630IIcBakciDnnqzpBFZk6Mxb0piZmMV8bjqx3b4%2BWhxZXD8Kgn7drC%2B5pVag8Qi%2B2ZzZli2px%2Bo44Sc6WegiKpOmqq%2Bv7idSBzZ%2F4PVMvNdNs1jp2CK3jUZnWb3NNBpwfqxSJid%2B5xS86Po2dCE%2BNWn%2BxNRVgs%2BlE7lcZIO71ED%2BRm7ctH07tse42V75HXhV52eQTXmLK190JvsoKBzpGIgStKijwUgV2iYWczVKi7x%2FCpZCvKlysxr0RI4NkLUYDsQgaTtCxfBdTxy1nCtFQHdsGJKU5f8wth5zs6SRH3GObSh8oqwcjSRvWoi8Utl4YLrnUyXuzSuAlFJKqvdHM%2FbSOif9K%2BOonFy8CbhV2Ch%2Bkg4IDu7UgLgCtQBJtL0EcV5cwSxjGwWn4wov%2FzwAY6pgFUrd%2BmdNfUVQxrpzCVhyP70RdiWJYOcDc7LYaDrwpVYbz0sms5%2BRHH4jeFEp0nOy%2BALViioMnX4g29kRn%2FSnN9AsbC674PVPmUDnuOn7Fk7y41Z9dnkBjlub4zDN1ca4og76W9gLvXHUabvMnl0DNRU6yZs7LN2kIHTDveLYRUpOnmPXCYOmM%2BMQHALz2cO%2BlIve%2BH8pB5mdmgLyfbnq0yw%2Beg5%2B35&X-Amz-Signature=91465324c68e621e98a56baa6d120e0edb46226f3c75549a341f7ff3da2a47f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPIAF4F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzXoCXPjMDyRoi5Ioxb5HRZr%2BmEWgwtTD%2BsInBuv%2FY4AiAvrkemBpy5iLn%2Bv5KY06GuKQNk%2BtO%2FifH8k1vrAK3wZir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMfBcb37xK2WxUzaHlKtwDbTXJbsIo%2FsDTPK2IyqltON4t1p%2FYBdFKAXT5%2BeEjsRhleIoXj6BFoxKuewwTIx6988JRkWHt2jd%2FR8q54x38bqcC%2B1Uj5sKZ4mfIw9eRUMlM%2BmWbU%2Bj8bG2G766pNHIgEKcWvxEjF7IzM%2FL7es0%2F%2BryS0ZPMlcJ8BUPbiwgyWe1Bh62WPnJOyz3Y1IREaO2VLKPVH47RmHPNuSrEgLC7RsZ%2FhIPZoprsYSW6bnVAmgGIO630IIcBakciDnnqzpBFZk6Mxb0piZmMV8bjqx3b4%2BWhxZXD8Kgn7drC%2B5pVag8Qi%2B2ZzZli2px%2Bo44Sc6WegiKpOmqq%2Bv7idSBzZ%2F4PVMvNdNs1jp2CK3jUZnWb3NNBpwfqxSJid%2B5xS86Po2dCE%2BNWn%2BxNRVgs%2BlE7lcZIO71ED%2BRm7ctH07tse42V75HXhV52eQTXmLK190JvsoKBzpGIgStKijwUgV2iYWczVKi7x%2FCpZCvKlysxr0RI4NkLUYDsQgaTtCxfBdTxy1nCtFQHdsGJKU5f8wth5zs6SRH3GObSh8oqwcjSRvWoi8Utl4YLrnUyXuzSuAlFJKqvdHM%2FbSOif9K%2BOonFy8CbhV2Ch%2Bkg4IDu7UgLgCtQBJtL0EcV5cwSxjGwWn4wov%2FzwAY6pgFUrd%2BmdNfUVQxrpzCVhyP70RdiWJYOcDc7LYaDrwpVYbz0sms5%2BRHH4jeFEp0nOy%2BALViioMnX4g29kRn%2FSnN9AsbC674PVPmUDnuOn7Fk7y41Z9dnkBjlub4zDN1ca4og76W9gLvXHUabvMnl0DNRU6yZs7LN2kIHTDveLYRUpOnmPXCYOmM%2BMQHALz2cO%2BlIve%2BH8pB5mdmgLyfbnq0yw%2Beg5%2B35&X-Amz-Signature=ac8aa1ffd36df94f882bb02058b9c886ebfe5982cb8e6601de091a2342791515&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPIAF4F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzXoCXPjMDyRoi5Ioxb5HRZr%2BmEWgwtTD%2BsInBuv%2FY4AiAvrkemBpy5iLn%2Bv5KY06GuKQNk%2BtO%2FifH8k1vrAK3wZir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMfBcb37xK2WxUzaHlKtwDbTXJbsIo%2FsDTPK2IyqltON4t1p%2FYBdFKAXT5%2BeEjsRhleIoXj6BFoxKuewwTIx6988JRkWHt2jd%2FR8q54x38bqcC%2B1Uj5sKZ4mfIw9eRUMlM%2BmWbU%2Bj8bG2G766pNHIgEKcWvxEjF7IzM%2FL7es0%2F%2BryS0ZPMlcJ8BUPbiwgyWe1Bh62WPnJOyz3Y1IREaO2VLKPVH47RmHPNuSrEgLC7RsZ%2FhIPZoprsYSW6bnVAmgGIO630IIcBakciDnnqzpBFZk6Mxb0piZmMV8bjqx3b4%2BWhxZXD8Kgn7drC%2B5pVag8Qi%2B2ZzZli2px%2Bo44Sc6WegiKpOmqq%2Bv7idSBzZ%2F4PVMvNdNs1jp2CK3jUZnWb3NNBpwfqxSJid%2B5xS86Po2dCE%2BNWn%2BxNRVgs%2BlE7lcZIO71ED%2BRm7ctH07tse42V75HXhV52eQTXmLK190JvsoKBzpGIgStKijwUgV2iYWczVKi7x%2FCpZCvKlysxr0RI4NkLUYDsQgaTtCxfBdTxy1nCtFQHdsGJKU5f8wth5zs6SRH3GObSh8oqwcjSRvWoi8Utl4YLrnUyXuzSuAlFJKqvdHM%2FbSOif9K%2BOonFy8CbhV2Ch%2Bkg4IDu7UgLgCtQBJtL0EcV5cwSxjGwWn4wov%2FzwAY6pgFUrd%2BmdNfUVQxrpzCVhyP70RdiWJYOcDc7LYaDrwpVYbz0sms5%2BRHH4jeFEp0nOy%2BALViioMnX4g29kRn%2FSnN9AsbC674PVPmUDnuOn7Fk7y41Z9dnkBjlub4zDN1ca4og76W9gLvXHUabvMnl0DNRU6yZs7LN2kIHTDveLYRUpOnmPXCYOmM%2BMQHALz2cO%2BlIve%2BH8pB5mdmgLyfbnq0yw%2Beg5%2B35&X-Amz-Signature=0b5252f660e1e5c40194cc83c181c8b483e90b48a9746be7eb66a9cd643f06d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPIAF4F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzXoCXPjMDyRoi5Ioxb5HRZr%2BmEWgwtTD%2BsInBuv%2FY4AiAvrkemBpy5iLn%2Bv5KY06GuKQNk%2BtO%2FifH8k1vrAK3wZir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMfBcb37xK2WxUzaHlKtwDbTXJbsIo%2FsDTPK2IyqltON4t1p%2FYBdFKAXT5%2BeEjsRhleIoXj6BFoxKuewwTIx6988JRkWHt2jd%2FR8q54x38bqcC%2B1Uj5sKZ4mfIw9eRUMlM%2BmWbU%2Bj8bG2G766pNHIgEKcWvxEjF7IzM%2FL7es0%2F%2BryS0ZPMlcJ8BUPbiwgyWe1Bh62WPnJOyz3Y1IREaO2VLKPVH47RmHPNuSrEgLC7RsZ%2FhIPZoprsYSW6bnVAmgGIO630IIcBakciDnnqzpBFZk6Mxb0piZmMV8bjqx3b4%2BWhxZXD8Kgn7drC%2B5pVag8Qi%2B2ZzZli2px%2Bo44Sc6WegiKpOmqq%2Bv7idSBzZ%2F4PVMvNdNs1jp2CK3jUZnWb3NNBpwfqxSJid%2B5xS86Po2dCE%2BNWn%2BxNRVgs%2BlE7lcZIO71ED%2BRm7ctH07tse42V75HXhV52eQTXmLK190JvsoKBzpGIgStKijwUgV2iYWczVKi7x%2FCpZCvKlysxr0RI4NkLUYDsQgaTtCxfBdTxy1nCtFQHdsGJKU5f8wth5zs6SRH3GObSh8oqwcjSRvWoi8Utl4YLrnUyXuzSuAlFJKqvdHM%2FbSOif9K%2BOonFy8CbhV2Ch%2Bkg4IDu7UgLgCtQBJtL0EcV5cwSxjGwWn4wov%2FzwAY6pgFUrd%2BmdNfUVQxrpzCVhyP70RdiWJYOcDc7LYaDrwpVYbz0sms5%2BRHH4jeFEp0nOy%2BALViioMnX4g29kRn%2FSnN9AsbC674PVPmUDnuOn7Fk7y41Z9dnkBjlub4zDN1ca4og76W9gLvXHUabvMnl0DNRU6yZs7LN2kIHTDveLYRUpOnmPXCYOmM%2BMQHALz2cO%2BlIve%2BH8pB5mdmgLyfbnq0yw%2Beg5%2B35&X-Amz-Signature=73ba596854a1d738dc8e7eade03ad34b363be7eb487f08fa7f849bbde4d0038a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPIAF4F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzXoCXPjMDyRoi5Ioxb5HRZr%2BmEWgwtTD%2BsInBuv%2FY4AiAvrkemBpy5iLn%2Bv5KY06GuKQNk%2BtO%2FifH8k1vrAK3wZir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMfBcb37xK2WxUzaHlKtwDbTXJbsIo%2FsDTPK2IyqltON4t1p%2FYBdFKAXT5%2BeEjsRhleIoXj6BFoxKuewwTIx6988JRkWHt2jd%2FR8q54x38bqcC%2B1Uj5sKZ4mfIw9eRUMlM%2BmWbU%2Bj8bG2G766pNHIgEKcWvxEjF7IzM%2FL7es0%2F%2BryS0ZPMlcJ8BUPbiwgyWe1Bh62WPnJOyz3Y1IREaO2VLKPVH47RmHPNuSrEgLC7RsZ%2FhIPZoprsYSW6bnVAmgGIO630IIcBakciDnnqzpBFZk6Mxb0piZmMV8bjqx3b4%2BWhxZXD8Kgn7drC%2B5pVag8Qi%2B2ZzZli2px%2Bo44Sc6WegiKpOmqq%2Bv7idSBzZ%2F4PVMvNdNs1jp2CK3jUZnWb3NNBpwfqxSJid%2B5xS86Po2dCE%2BNWn%2BxNRVgs%2BlE7lcZIO71ED%2BRm7ctH07tse42V75HXhV52eQTXmLK190JvsoKBzpGIgStKijwUgV2iYWczVKi7x%2FCpZCvKlysxr0RI4NkLUYDsQgaTtCxfBdTxy1nCtFQHdsGJKU5f8wth5zs6SRH3GObSh8oqwcjSRvWoi8Utl4YLrnUyXuzSuAlFJKqvdHM%2FbSOif9K%2BOonFy8CbhV2Ch%2Bkg4IDu7UgLgCtQBJtL0EcV5cwSxjGwWn4wov%2FzwAY6pgFUrd%2BmdNfUVQxrpzCVhyP70RdiWJYOcDc7LYaDrwpVYbz0sms5%2BRHH4jeFEp0nOy%2BALViioMnX4g29kRn%2FSnN9AsbC674PVPmUDnuOn7Fk7y41Z9dnkBjlub4zDN1ca4og76W9gLvXHUabvMnl0DNRU6yZs7LN2kIHTDveLYRUpOnmPXCYOmM%2BMQHALz2cO%2BlIve%2BH8pB5mdmgLyfbnq0yw%2Beg5%2B35&X-Amz-Signature=217d170b15bdfed34d96070a6786d14433dc1716040784dd472e3bfd8746598f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPIAF4F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzXoCXPjMDyRoi5Ioxb5HRZr%2BmEWgwtTD%2BsInBuv%2FY4AiAvrkemBpy5iLn%2Bv5KY06GuKQNk%2BtO%2FifH8k1vrAK3wZir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMfBcb37xK2WxUzaHlKtwDbTXJbsIo%2FsDTPK2IyqltON4t1p%2FYBdFKAXT5%2BeEjsRhleIoXj6BFoxKuewwTIx6988JRkWHt2jd%2FR8q54x38bqcC%2B1Uj5sKZ4mfIw9eRUMlM%2BmWbU%2Bj8bG2G766pNHIgEKcWvxEjF7IzM%2FL7es0%2F%2BryS0ZPMlcJ8BUPbiwgyWe1Bh62WPnJOyz3Y1IREaO2VLKPVH47RmHPNuSrEgLC7RsZ%2FhIPZoprsYSW6bnVAmgGIO630IIcBakciDnnqzpBFZk6Mxb0piZmMV8bjqx3b4%2BWhxZXD8Kgn7drC%2B5pVag8Qi%2B2ZzZli2px%2Bo44Sc6WegiKpOmqq%2Bv7idSBzZ%2F4PVMvNdNs1jp2CK3jUZnWb3NNBpwfqxSJid%2B5xS86Po2dCE%2BNWn%2BxNRVgs%2BlE7lcZIO71ED%2BRm7ctH07tse42V75HXhV52eQTXmLK190JvsoKBzpGIgStKijwUgV2iYWczVKi7x%2FCpZCvKlysxr0RI4NkLUYDsQgaTtCxfBdTxy1nCtFQHdsGJKU5f8wth5zs6SRH3GObSh8oqwcjSRvWoi8Utl4YLrnUyXuzSuAlFJKqvdHM%2FbSOif9K%2BOonFy8CbhV2Ch%2Bkg4IDu7UgLgCtQBJtL0EcV5cwSxjGwWn4wov%2FzwAY6pgFUrd%2BmdNfUVQxrpzCVhyP70RdiWJYOcDc7LYaDrwpVYbz0sms5%2BRHH4jeFEp0nOy%2BALViioMnX4g29kRn%2FSnN9AsbC674PVPmUDnuOn7Fk7y41Z9dnkBjlub4zDN1ca4og76W9gLvXHUabvMnl0DNRU6yZs7LN2kIHTDveLYRUpOnmPXCYOmM%2BMQHALz2cO%2BlIve%2BH8pB5mdmgLyfbnq0yw%2Beg5%2B35&X-Amz-Signature=e8d14b3a16caffc06325e45aae94beaffa6675de2d8f33c9deae9a625338d472&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

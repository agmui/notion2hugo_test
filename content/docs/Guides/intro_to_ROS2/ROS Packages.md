---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTPPUTC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKGbGZ%2BelQZ9272RSk0QSonBRsPruajrKZP1prRBVyzAiBUfIFZWSc5GJN%2F%2FNRshDF0hRVcfOaJvdxuR%2FjYT5p09iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5VvLFwWDAMNH2eLKtwDwTR18XJ7SH44c35gCZj8FrB9YeISjld6FonhsGPHQNs75M5Wo%2FmFIYxdXF%2BipNUoFVSPflSUoANG%2BieKZlFmS0AVlfv34ptIdzCAMCal1wr1JgcD%2BLm6AbAe4ZIi16xdmjoZSxiCdsvArDZ9wrbN4kXt%2FvGbHDExcpFJtjBLae7iRdj%2BAF1km%2BvXpXXKNkI%2Ff7x1mmAw6bVvsVC8TnMh8Z1cJGsXRG5Hq5tzsZGBLypl%2BXolcTazANOB9HPLoHaKVI5x9zc5VxxnwREnk%2FSOvZZ%2FrbYRbopLhGWrYwaSP%2BUNB%2FEhmUcy%2BvLAtXc1Ciz1ZARYGqBleJf%2FydD6rMflYUdYLRr9Se%2Ba8UMJKazbN5hWIDHzljHXNfRJakaknQ4E%2FCWDDfiNSK4fJMtMT5S64BJVLpw%2Bl6wYIj%2FC9NW3Dng2HDUxiMg5rwK3CWLsqAxf0eq63atIsFXkrYAXx0Vue28NCnfP2WW6KsT9mVABYFPdEokkETi047kUTljDSEWpf50HowPgv3bR1ql5s4FUWVoc4FZZ36DtdOP1bLkGsqByKm9ByVGlNG8398RrtF02D%2F8haukxksA62y2kECUNr%2FOE2C%2BNlrQCIXKTZcpXXDai4BCTeti9Ikkbi0swxpqsxAY6pgGOqaO8fh9UZROq5tnhZPN6OS95vDyjemcOmZzavg%2FdhHAG4utztmhhtaw%2BBB%2FI48MJTmXYCbXCLl6nFO1IKlBB%2FA2SeaQyd5ZdbZ%2B%2Bj%2BbIisG1c6yXBH5r1Np0J5JwPgDz43QTT4S7NaCf2romuKSKpc2fdgZDixnX0%2FTj0W4zeahSWby2n%2F8MYqB26mBz9Ko0SestggfzNj99buTNJr8SsyevYmvE&X-Amz-Signature=3cd1274ed48fa8a62c3f2d632c042329f9e8fba5d9e23bd8b91ae5ea66adf859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTPPUTC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKGbGZ%2BelQZ9272RSk0QSonBRsPruajrKZP1prRBVyzAiBUfIFZWSc5GJN%2F%2FNRshDF0hRVcfOaJvdxuR%2FjYT5p09iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5VvLFwWDAMNH2eLKtwDwTR18XJ7SH44c35gCZj8FrB9YeISjld6FonhsGPHQNs75M5Wo%2FmFIYxdXF%2BipNUoFVSPflSUoANG%2BieKZlFmS0AVlfv34ptIdzCAMCal1wr1JgcD%2BLm6AbAe4ZIi16xdmjoZSxiCdsvArDZ9wrbN4kXt%2FvGbHDExcpFJtjBLae7iRdj%2BAF1km%2BvXpXXKNkI%2Ff7x1mmAw6bVvsVC8TnMh8Z1cJGsXRG5Hq5tzsZGBLypl%2BXolcTazANOB9HPLoHaKVI5x9zc5VxxnwREnk%2FSOvZZ%2FrbYRbopLhGWrYwaSP%2BUNB%2FEhmUcy%2BvLAtXc1Ciz1ZARYGqBleJf%2FydD6rMflYUdYLRr9Se%2Ba8UMJKazbN5hWIDHzljHXNfRJakaknQ4E%2FCWDDfiNSK4fJMtMT5S64BJVLpw%2Bl6wYIj%2FC9NW3Dng2HDUxiMg5rwK3CWLsqAxf0eq63atIsFXkrYAXx0Vue28NCnfP2WW6KsT9mVABYFPdEokkETi047kUTljDSEWpf50HowPgv3bR1ql5s4FUWVoc4FZZ36DtdOP1bLkGsqByKm9ByVGlNG8398RrtF02D%2F8haukxksA62y2kECUNr%2FOE2C%2BNlrQCIXKTZcpXXDai4BCTeti9Ikkbi0swxpqsxAY6pgGOqaO8fh9UZROq5tnhZPN6OS95vDyjemcOmZzavg%2FdhHAG4utztmhhtaw%2BBB%2FI48MJTmXYCbXCLl6nFO1IKlBB%2FA2SeaQyd5ZdbZ%2B%2Bj%2BbIisG1c6yXBH5r1Np0J5JwPgDz43QTT4S7NaCf2romuKSKpc2fdgZDixnX0%2FTj0W4zeahSWby2n%2F8MYqB26mBz9Ko0SestggfzNj99buTNJr8SsyevYmvE&X-Amz-Signature=19225070bff88405f8ccb89886d41396d2be22a3a1b152ca84ff9cd5d4ef6063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTPPUTC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKGbGZ%2BelQZ9272RSk0QSonBRsPruajrKZP1prRBVyzAiBUfIFZWSc5GJN%2F%2FNRshDF0hRVcfOaJvdxuR%2FjYT5p09iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5VvLFwWDAMNH2eLKtwDwTR18XJ7SH44c35gCZj8FrB9YeISjld6FonhsGPHQNs75M5Wo%2FmFIYxdXF%2BipNUoFVSPflSUoANG%2BieKZlFmS0AVlfv34ptIdzCAMCal1wr1JgcD%2BLm6AbAe4ZIi16xdmjoZSxiCdsvArDZ9wrbN4kXt%2FvGbHDExcpFJtjBLae7iRdj%2BAF1km%2BvXpXXKNkI%2Ff7x1mmAw6bVvsVC8TnMh8Z1cJGsXRG5Hq5tzsZGBLypl%2BXolcTazANOB9HPLoHaKVI5x9zc5VxxnwREnk%2FSOvZZ%2FrbYRbopLhGWrYwaSP%2BUNB%2FEhmUcy%2BvLAtXc1Ciz1ZARYGqBleJf%2FydD6rMflYUdYLRr9Se%2Ba8UMJKazbN5hWIDHzljHXNfRJakaknQ4E%2FCWDDfiNSK4fJMtMT5S64BJVLpw%2Bl6wYIj%2FC9NW3Dng2HDUxiMg5rwK3CWLsqAxf0eq63atIsFXkrYAXx0Vue28NCnfP2WW6KsT9mVABYFPdEokkETi047kUTljDSEWpf50HowPgv3bR1ql5s4FUWVoc4FZZ36DtdOP1bLkGsqByKm9ByVGlNG8398RrtF02D%2F8haukxksA62y2kECUNr%2FOE2C%2BNlrQCIXKTZcpXXDai4BCTeti9Ikkbi0swxpqsxAY6pgGOqaO8fh9UZROq5tnhZPN6OS95vDyjemcOmZzavg%2FdhHAG4utztmhhtaw%2BBB%2FI48MJTmXYCbXCLl6nFO1IKlBB%2FA2SeaQyd5ZdbZ%2B%2Bj%2BbIisG1c6yXBH5r1Np0J5JwPgDz43QTT4S7NaCf2romuKSKpc2fdgZDixnX0%2FTj0W4zeahSWby2n%2F8MYqB26mBz9Ko0SestggfzNj99buTNJr8SsyevYmvE&X-Amz-Signature=841ed640c81326b53afb8c94a65753412cb89b505ee3c690532727cbfa267e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTPPUTC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKGbGZ%2BelQZ9272RSk0QSonBRsPruajrKZP1prRBVyzAiBUfIFZWSc5GJN%2F%2FNRshDF0hRVcfOaJvdxuR%2FjYT5p09iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5VvLFwWDAMNH2eLKtwDwTR18XJ7SH44c35gCZj8FrB9YeISjld6FonhsGPHQNs75M5Wo%2FmFIYxdXF%2BipNUoFVSPflSUoANG%2BieKZlFmS0AVlfv34ptIdzCAMCal1wr1JgcD%2BLm6AbAe4ZIi16xdmjoZSxiCdsvArDZ9wrbN4kXt%2FvGbHDExcpFJtjBLae7iRdj%2BAF1km%2BvXpXXKNkI%2Ff7x1mmAw6bVvsVC8TnMh8Z1cJGsXRG5Hq5tzsZGBLypl%2BXolcTazANOB9HPLoHaKVI5x9zc5VxxnwREnk%2FSOvZZ%2FrbYRbopLhGWrYwaSP%2BUNB%2FEhmUcy%2BvLAtXc1Ciz1ZARYGqBleJf%2FydD6rMflYUdYLRr9Se%2Ba8UMJKazbN5hWIDHzljHXNfRJakaknQ4E%2FCWDDfiNSK4fJMtMT5S64BJVLpw%2Bl6wYIj%2FC9NW3Dng2HDUxiMg5rwK3CWLsqAxf0eq63atIsFXkrYAXx0Vue28NCnfP2WW6KsT9mVABYFPdEokkETi047kUTljDSEWpf50HowPgv3bR1ql5s4FUWVoc4FZZ36DtdOP1bLkGsqByKm9ByVGlNG8398RrtF02D%2F8haukxksA62y2kECUNr%2FOE2C%2BNlrQCIXKTZcpXXDai4BCTeti9Ikkbi0swxpqsxAY6pgGOqaO8fh9UZROq5tnhZPN6OS95vDyjemcOmZzavg%2FdhHAG4utztmhhtaw%2BBB%2FI48MJTmXYCbXCLl6nFO1IKlBB%2FA2SeaQyd5ZdbZ%2B%2Bj%2BbIisG1c6yXBH5r1Np0J5JwPgDz43QTT4S7NaCf2romuKSKpc2fdgZDixnX0%2FTj0W4zeahSWby2n%2F8MYqB26mBz9Ko0SestggfzNj99buTNJr8SsyevYmvE&X-Amz-Signature=3888e64b9fee6c40bf981fba25e694f789405ee722a4a8cbf2681b4523584a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTPPUTC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKGbGZ%2BelQZ9272RSk0QSonBRsPruajrKZP1prRBVyzAiBUfIFZWSc5GJN%2F%2FNRshDF0hRVcfOaJvdxuR%2FjYT5p09iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5VvLFwWDAMNH2eLKtwDwTR18XJ7SH44c35gCZj8FrB9YeISjld6FonhsGPHQNs75M5Wo%2FmFIYxdXF%2BipNUoFVSPflSUoANG%2BieKZlFmS0AVlfv34ptIdzCAMCal1wr1JgcD%2BLm6AbAe4ZIi16xdmjoZSxiCdsvArDZ9wrbN4kXt%2FvGbHDExcpFJtjBLae7iRdj%2BAF1km%2BvXpXXKNkI%2Ff7x1mmAw6bVvsVC8TnMh8Z1cJGsXRG5Hq5tzsZGBLypl%2BXolcTazANOB9HPLoHaKVI5x9zc5VxxnwREnk%2FSOvZZ%2FrbYRbopLhGWrYwaSP%2BUNB%2FEhmUcy%2BvLAtXc1Ciz1ZARYGqBleJf%2FydD6rMflYUdYLRr9Se%2Ba8UMJKazbN5hWIDHzljHXNfRJakaknQ4E%2FCWDDfiNSK4fJMtMT5S64BJVLpw%2Bl6wYIj%2FC9NW3Dng2HDUxiMg5rwK3CWLsqAxf0eq63atIsFXkrYAXx0Vue28NCnfP2WW6KsT9mVABYFPdEokkETi047kUTljDSEWpf50HowPgv3bR1ql5s4FUWVoc4FZZ36DtdOP1bLkGsqByKm9ByVGlNG8398RrtF02D%2F8haukxksA62y2kECUNr%2FOE2C%2BNlrQCIXKTZcpXXDai4BCTeti9Ikkbi0swxpqsxAY6pgGOqaO8fh9UZROq5tnhZPN6OS95vDyjemcOmZzavg%2FdhHAG4utztmhhtaw%2BBB%2FI48MJTmXYCbXCLl6nFO1IKlBB%2FA2SeaQyd5ZdbZ%2B%2Bj%2BbIisG1c6yXBH5r1Np0J5JwPgDz43QTT4S7NaCf2romuKSKpc2fdgZDixnX0%2FTj0W4zeahSWby2n%2F8MYqB26mBz9Ko0SestggfzNj99buTNJr8SsyevYmvE&X-Amz-Signature=c605b780f6397a92e21fd12780570c3d14cd9f10cb7e7e49236d8a35bc0693b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTPPUTC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKGbGZ%2BelQZ9272RSk0QSonBRsPruajrKZP1prRBVyzAiBUfIFZWSc5GJN%2F%2FNRshDF0hRVcfOaJvdxuR%2FjYT5p09iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5VvLFwWDAMNH2eLKtwDwTR18XJ7SH44c35gCZj8FrB9YeISjld6FonhsGPHQNs75M5Wo%2FmFIYxdXF%2BipNUoFVSPflSUoANG%2BieKZlFmS0AVlfv34ptIdzCAMCal1wr1JgcD%2BLm6AbAe4ZIi16xdmjoZSxiCdsvArDZ9wrbN4kXt%2FvGbHDExcpFJtjBLae7iRdj%2BAF1km%2BvXpXXKNkI%2Ff7x1mmAw6bVvsVC8TnMh8Z1cJGsXRG5Hq5tzsZGBLypl%2BXolcTazANOB9HPLoHaKVI5x9zc5VxxnwREnk%2FSOvZZ%2FrbYRbopLhGWrYwaSP%2BUNB%2FEhmUcy%2BvLAtXc1Ciz1ZARYGqBleJf%2FydD6rMflYUdYLRr9Se%2Ba8UMJKazbN5hWIDHzljHXNfRJakaknQ4E%2FCWDDfiNSK4fJMtMT5S64BJVLpw%2Bl6wYIj%2FC9NW3Dng2HDUxiMg5rwK3CWLsqAxf0eq63atIsFXkrYAXx0Vue28NCnfP2WW6KsT9mVABYFPdEokkETi047kUTljDSEWpf50HowPgv3bR1ql5s4FUWVoc4FZZ36DtdOP1bLkGsqByKm9ByVGlNG8398RrtF02D%2F8haukxksA62y2kECUNr%2FOE2C%2BNlrQCIXKTZcpXXDai4BCTeti9Ikkbi0swxpqsxAY6pgGOqaO8fh9UZROq5tnhZPN6OS95vDyjemcOmZzavg%2FdhHAG4utztmhhtaw%2BBB%2FI48MJTmXYCbXCLl6nFO1IKlBB%2FA2SeaQyd5ZdbZ%2B%2Bj%2BbIisG1c6yXBH5r1Np0J5JwPgDz43QTT4S7NaCf2romuKSKpc2fdgZDixnX0%2FTj0W4zeahSWby2n%2F8MYqB26mBz9Ko0SestggfzNj99buTNJr8SsyevYmvE&X-Amz-Signature=4af8996075211ce59e996cbde55af2db9063a0874debc70ab4cbd0d8cfe40045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTPPUTC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKGbGZ%2BelQZ9272RSk0QSonBRsPruajrKZP1prRBVyzAiBUfIFZWSc5GJN%2F%2FNRshDF0hRVcfOaJvdxuR%2FjYT5p09iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5VvLFwWDAMNH2eLKtwDwTR18XJ7SH44c35gCZj8FrB9YeISjld6FonhsGPHQNs75M5Wo%2FmFIYxdXF%2BipNUoFVSPflSUoANG%2BieKZlFmS0AVlfv34ptIdzCAMCal1wr1JgcD%2BLm6AbAe4ZIi16xdmjoZSxiCdsvArDZ9wrbN4kXt%2FvGbHDExcpFJtjBLae7iRdj%2BAF1km%2BvXpXXKNkI%2Ff7x1mmAw6bVvsVC8TnMh8Z1cJGsXRG5Hq5tzsZGBLypl%2BXolcTazANOB9HPLoHaKVI5x9zc5VxxnwREnk%2FSOvZZ%2FrbYRbopLhGWrYwaSP%2BUNB%2FEhmUcy%2BvLAtXc1Ciz1ZARYGqBleJf%2FydD6rMflYUdYLRr9Se%2Ba8UMJKazbN5hWIDHzljHXNfRJakaknQ4E%2FCWDDfiNSK4fJMtMT5S64BJVLpw%2Bl6wYIj%2FC9NW3Dng2HDUxiMg5rwK3CWLsqAxf0eq63atIsFXkrYAXx0Vue28NCnfP2WW6KsT9mVABYFPdEokkETi047kUTljDSEWpf50HowPgv3bR1ql5s4FUWVoc4FZZ36DtdOP1bLkGsqByKm9ByVGlNG8398RrtF02D%2F8haukxksA62y2kECUNr%2FOE2C%2BNlrQCIXKTZcpXXDai4BCTeti9Ikkbi0swxpqsxAY6pgGOqaO8fh9UZROq5tnhZPN6OS95vDyjemcOmZzavg%2FdhHAG4utztmhhtaw%2BBB%2FI48MJTmXYCbXCLl6nFO1IKlBB%2FA2SeaQyd5ZdbZ%2B%2Bj%2BbIisG1c6yXBH5r1Np0J5JwPgDz43QTT4S7NaCf2romuKSKpc2fdgZDixnX0%2FTj0W4zeahSWby2n%2F8MYqB26mBz9Ko0SestggfzNj99buTNJr8SsyevYmvE&X-Amz-Signature=3aec080bfeca0f7f72c916d3799ff84a8b17bcc7dc7eb18c2d696482d3305e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

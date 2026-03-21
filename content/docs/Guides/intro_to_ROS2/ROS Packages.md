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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHMNM56%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCOcRTOT0vZrOtMkVR66zwCVU8SBGsrhmKWh8wiXXBGBwIhAOu1RLhCLbVrTV3u83rwfUfDTc8Isr%2Bh1zbVO9x5hrwLKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0Xjb21ndL8UjuMvcq3AO%2FZDkVZFnWOH4zX%2FGOYuX%2B8lxIYEjAwLtU3CbthzTk%2Bg2h44ibhT92LbDHcyt961zEGENTAa2s36hK2LjRkSugmNj175STGiWxq1O69DmXAjK80AwkPdeEmaoMmjV9kOdtzh%2FxHvgHK%2By4emmd5zGdKL6F5A3l8ktgWmqgwg2%2Bv%2BfqO9cbkwtPXLAP1%2FsrlkwsIEA%2Fpp6B%2Bcnd3ItB9l7CN434U2Hqh8VTrm%2FBTI3jvSi1wCLcWH2CLHqlUSPDWSOYjRavFg9YaRpGWAwkyx38DH%2F6ey8M%2BYuGTrhYpGZySJO3HCPWaAqBFtSPCRR8%2B2W79%2B%2BnJ%2BcqzNESrHDAK%2FHTO6E3f%2FtI3H9VQy3hOEuO8QyFaTv1bpjQvUGe82TIbWK9MNJRUusSuFfpfhUUABN%2FormN7bHJWQqJ6BZV%2FAdPsle4Uk%2B2evHDQ1M%2FNRwoiufJZlksfHmnvgKtbT%2B37MaWVkd%2F%2F4BARjenGa9KcgIQhqa5O3NtFX%2BV%2BSU6NpriRF3p73rj03gBfPVJMWw4NWhMsPT23GHs8nNk6rXYphoQyT7evAx555WUHlxmPZ7dzofUNQs0%2BSnt4FHo6QI6uUcKcCSVZ%2BM2LN7VoIPAebRpodzRB6RJmt48TTjZzDCE3vbNBjqkARx%2BLv2hpyTwcxJTgTVNA%2B84gU9ha3HVciniHz%2BHESBtq2J0dzM8ndMu9GonGVOal43LtjxeoHd50pzga02sEJtO%2BYVH%2Bw5ghIu7UNzHECmy1%2FNxlGVTrMfAH6P8pBhFPeKXoebmAzJKd6qkfw4bNHdvb7tzuGL1m%2FzbNABQEcQ1AkjxOzyHxp1JQRAtH%2BGh8uKcHBvNqEwg7s0xTr%2FDn%2FqBK7qt&X-Amz-Signature=1cd1956bc9468a2d3b3158edfb684b9a4bc3a474ed9a541de91870d1ccc32a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHMNM56%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCOcRTOT0vZrOtMkVR66zwCVU8SBGsrhmKWh8wiXXBGBwIhAOu1RLhCLbVrTV3u83rwfUfDTc8Isr%2Bh1zbVO9x5hrwLKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0Xjb21ndL8UjuMvcq3AO%2FZDkVZFnWOH4zX%2FGOYuX%2B8lxIYEjAwLtU3CbthzTk%2Bg2h44ibhT92LbDHcyt961zEGENTAa2s36hK2LjRkSugmNj175STGiWxq1O69DmXAjK80AwkPdeEmaoMmjV9kOdtzh%2FxHvgHK%2By4emmd5zGdKL6F5A3l8ktgWmqgwg2%2Bv%2BfqO9cbkwtPXLAP1%2FsrlkwsIEA%2Fpp6B%2Bcnd3ItB9l7CN434U2Hqh8VTrm%2FBTI3jvSi1wCLcWH2CLHqlUSPDWSOYjRavFg9YaRpGWAwkyx38DH%2F6ey8M%2BYuGTrhYpGZySJO3HCPWaAqBFtSPCRR8%2B2W79%2B%2BnJ%2BcqzNESrHDAK%2FHTO6E3f%2FtI3H9VQy3hOEuO8QyFaTv1bpjQvUGe82TIbWK9MNJRUusSuFfpfhUUABN%2FormN7bHJWQqJ6BZV%2FAdPsle4Uk%2B2evHDQ1M%2FNRwoiufJZlksfHmnvgKtbT%2B37MaWVkd%2F%2F4BARjenGa9KcgIQhqa5O3NtFX%2BV%2BSU6NpriRF3p73rj03gBfPVJMWw4NWhMsPT23GHs8nNk6rXYphoQyT7evAx555WUHlxmPZ7dzofUNQs0%2BSnt4FHo6QI6uUcKcCSVZ%2BM2LN7VoIPAebRpodzRB6RJmt48TTjZzDCE3vbNBjqkARx%2BLv2hpyTwcxJTgTVNA%2B84gU9ha3HVciniHz%2BHESBtq2J0dzM8ndMu9GonGVOal43LtjxeoHd50pzga02sEJtO%2BYVH%2Bw5ghIu7UNzHECmy1%2FNxlGVTrMfAH6P8pBhFPeKXoebmAzJKd6qkfw4bNHdvb7tzuGL1m%2FzbNABQEcQ1AkjxOzyHxp1JQRAtH%2BGh8uKcHBvNqEwg7s0xTr%2FDn%2FqBK7qt&X-Amz-Signature=516d5fbfa9330e4c5353f4d96f50b14752b097832d57a02369c4eb2cae6eb943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHMNM56%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCOcRTOT0vZrOtMkVR66zwCVU8SBGsrhmKWh8wiXXBGBwIhAOu1RLhCLbVrTV3u83rwfUfDTc8Isr%2Bh1zbVO9x5hrwLKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0Xjb21ndL8UjuMvcq3AO%2FZDkVZFnWOH4zX%2FGOYuX%2B8lxIYEjAwLtU3CbthzTk%2Bg2h44ibhT92LbDHcyt961zEGENTAa2s36hK2LjRkSugmNj175STGiWxq1O69DmXAjK80AwkPdeEmaoMmjV9kOdtzh%2FxHvgHK%2By4emmd5zGdKL6F5A3l8ktgWmqgwg2%2Bv%2BfqO9cbkwtPXLAP1%2FsrlkwsIEA%2Fpp6B%2Bcnd3ItB9l7CN434U2Hqh8VTrm%2FBTI3jvSi1wCLcWH2CLHqlUSPDWSOYjRavFg9YaRpGWAwkyx38DH%2F6ey8M%2BYuGTrhYpGZySJO3HCPWaAqBFtSPCRR8%2B2W79%2B%2BnJ%2BcqzNESrHDAK%2FHTO6E3f%2FtI3H9VQy3hOEuO8QyFaTv1bpjQvUGe82TIbWK9MNJRUusSuFfpfhUUABN%2FormN7bHJWQqJ6BZV%2FAdPsle4Uk%2B2evHDQ1M%2FNRwoiufJZlksfHmnvgKtbT%2B37MaWVkd%2F%2F4BARjenGa9KcgIQhqa5O3NtFX%2BV%2BSU6NpriRF3p73rj03gBfPVJMWw4NWhMsPT23GHs8nNk6rXYphoQyT7evAx555WUHlxmPZ7dzofUNQs0%2BSnt4FHo6QI6uUcKcCSVZ%2BM2LN7VoIPAebRpodzRB6RJmt48TTjZzDCE3vbNBjqkARx%2BLv2hpyTwcxJTgTVNA%2B84gU9ha3HVciniHz%2BHESBtq2J0dzM8ndMu9GonGVOal43LtjxeoHd50pzga02sEJtO%2BYVH%2Bw5ghIu7UNzHECmy1%2FNxlGVTrMfAH6P8pBhFPeKXoebmAzJKd6qkfw4bNHdvb7tzuGL1m%2FzbNABQEcQ1AkjxOzyHxp1JQRAtH%2BGh8uKcHBvNqEwg7s0xTr%2FDn%2FqBK7qt&X-Amz-Signature=9ee6f8f788c0fe756f5a2465cbe55954d4add147d6109f49b48faec5e7b67615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHMNM56%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCOcRTOT0vZrOtMkVR66zwCVU8SBGsrhmKWh8wiXXBGBwIhAOu1RLhCLbVrTV3u83rwfUfDTc8Isr%2Bh1zbVO9x5hrwLKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0Xjb21ndL8UjuMvcq3AO%2FZDkVZFnWOH4zX%2FGOYuX%2B8lxIYEjAwLtU3CbthzTk%2Bg2h44ibhT92LbDHcyt961zEGENTAa2s36hK2LjRkSugmNj175STGiWxq1O69DmXAjK80AwkPdeEmaoMmjV9kOdtzh%2FxHvgHK%2By4emmd5zGdKL6F5A3l8ktgWmqgwg2%2Bv%2BfqO9cbkwtPXLAP1%2FsrlkwsIEA%2Fpp6B%2Bcnd3ItB9l7CN434U2Hqh8VTrm%2FBTI3jvSi1wCLcWH2CLHqlUSPDWSOYjRavFg9YaRpGWAwkyx38DH%2F6ey8M%2BYuGTrhYpGZySJO3HCPWaAqBFtSPCRR8%2B2W79%2B%2BnJ%2BcqzNESrHDAK%2FHTO6E3f%2FtI3H9VQy3hOEuO8QyFaTv1bpjQvUGe82TIbWK9MNJRUusSuFfpfhUUABN%2FormN7bHJWQqJ6BZV%2FAdPsle4Uk%2B2evHDQ1M%2FNRwoiufJZlksfHmnvgKtbT%2B37MaWVkd%2F%2F4BARjenGa9KcgIQhqa5O3NtFX%2BV%2BSU6NpriRF3p73rj03gBfPVJMWw4NWhMsPT23GHs8nNk6rXYphoQyT7evAx555WUHlxmPZ7dzofUNQs0%2BSnt4FHo6QI6uUcKcCSVZ%2BM2LN7VoIPAebRpodzRB6RJmt48TTjZzDCE3vbNBjqkARx%2BLv2hpyTwcxJTgTVNA%2B84gU9ha3HVciniHz%2BHESBtq2J0dzM8ndMu9GonGVOal43LtjxeoHd50pzga02sEJtO%2BYVH%2Bw5ghIu7UNzHECmy1%2FNxlGVTrMfAH6P8pBhFPeKXoebmAzJKd6qkfw4bNHdvb7tzuGL1m%2FzbNABQEcQ1AkjxOzyHxp1JQRAtH%2BGh8uKcHBvNqEwg7s0xTr%2FDn%2FqBK7qt&X-Amz-Signature=cea02e49245dd54d6985117c3b045da9dedeead32754cf76f7d57735fa9431ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHMNM56%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCOcRTOT0vZrOtMkVR66zwCVU8SBGsrhmKWh8wiXXBGBwIhAOu1RLhCLbVrTV3u83rwfUfDTc8Isr%2Bh1zbVO9x5hrwLKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0Xjb21ndL8UjuMvcq3AO%2FZDkVZFnWOH4zX%2FGOYuX%2B8lxIYEjAwLtU3CbthzTk%2Bg2h44ibhT92LbDHcyt961zEGENTAa2s36hK2LjRkSugmNj175STGiWxq1O69DmXAjK80AwkPdeEmaoMmjV9kOdtzh%2FxHvgHK%2By4emmd5zGdKL6F5A3l8ktgWmqgwg2%2Bv%2BfqO9cbkwtPXLAP1%2FsrlkwsIEA%2Fpp6B%2Bcnd3ItB9l7CN434U2Hqh8VTrm%2FBTI3jvSi1wCLcWH2CLHqlUSPDWSOYjRavFg9YaRpGWAwkyx38DH%2F6ey8M%2BYuGTrhYpGZySJO3HCPWaAqBFtSPCRR8%2B2W79%2B%2BnJ%2BcqzNESrHDAK%2FHTO6E3f%2FtI3H9VQy3hOEuO8QyFaTv1bpjQvUGe82TIbWK9MNJRUusSuFfpfhUUABN%2FormN7bHJWQqJ6BZV%2FAdPsle4Uk%2B2evHDQ1M%2FNRwoiufJZlksfHmnvgKtbT%2B37MaWVkd%2F%2F4BARjenGa9KcgIQhqa5O3NtFX%2BV%2BSU6NpriRF3p73rj03gBfPVJMWw4NWhMsPT23GHs8nNk6rXYphoQyT7evAx555WUHlxmPZ7dzofUNQs0%2BSnt4FHo6QI6uUcKcCSVZ%2BM2LN7VoIPAebRpodzRB6RJmt48TTjZzDCE3vbNBjqkARx%2BLv2hpyTwcxJTgTVNA%2B84gU9ha3HVciniHz%2BHESBtq2J0dzM8ndMu9GonGVOal43LtjxeoHd50pzga02sEJtO%2BYVH%2Bw5ghIu7UNzHECmy1%2FNxlGVTrMfAH6P8pBhFPeKXoebmAzJKd6qkfw4bNHdvb7tzuGL1m%2FzbNABQEcQ1AkjxOzyHxp1JQRAtH%2BGh8uKcHBvNqEwg7s0xTr%2FDn%2FqBK7qt&X-Amz-Signature=4c61ac307435665df2e2d8f5ab5502afa08c6d0494c3715976b4531b4ef21566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHMNM56%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCOcRTOT0vZrOtMkVR66zwCVU8SBGsrhmKWh8wiXXBGBwIhAOu1RLhCLbVrTV3u83rwfUfDTc8Isr%2Bh1zbVO9x5hrwLKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0Xjb21ndL8UjuMvcq3AO%2FZDkVZFnWOH4zX%2FGOYuX%2B8lxIYEjAwLtU3CbthzTk%2Bg2h44ibhT92LbDHcyt961zEGENTAa2s36hK2LjRkSugmNj175STGiWxq1O69DmXAjK80AwkPdeEmaoMmjV9kOdtzh%2FxHvgHK%2By4emmd5zGdKL6F5A3l8ktgWmqgwg2%2Bv%2BfqO9cbkwtPXLAP1%2FsrlkwsIEA%2Fpp6B%2Bcnd3ItB9l7CN434U2Hqh8VTrm%2FBTI3jvSi1wCLcWH2CLHqlUSPDWSOYjRavFg9YaRpGWAwkyx38DH%2F6ey8M%2BYuGTrhYpGZySJO3HCPWaAqBFtSPCRR8%2B2W79%2B%2BnJ%2BcqzNESrHDAK%2FHTO6E3f%2FtI3H9VQy3hOEuO8QyFaTv1bpjQvUGe82TIbWK9MNJRUusSuFfpfhUUABN%2FormN7bHJWQqJ6BZV%2FAdPsle4Uk%2B2evHDQ1M%2FNRwoiufJZlksfHmnvgKtbT%2B37MaWVkd%2F%2F4BARjenGa9KcgIQhqa5O3NtFX%2BV%2BSU6NpriRF3p73rj03gBfPVJMWw4NWhMsPT23GHs8nNk6rXYphoQyT7evAx555WUHlxmPZ7dzofUNQs0%2BSnt4FHo6QI6uUcKcCSVZ%2BM2LN7VoIPAebRpodzRB6RJmt48TTjZzDCE3vbNBjqkARx%2BLv2hpyTwcxJTgTVNA%2B84gU9ha3HVciniHz%2BHESBtq2J0dzM8ndMu9GonGVOal43LtjxeoHd50pzga02sEJtO%2BYVH%2Bw5ghIu7UNzHECmy1%2FNxlGVTrMfAH6P8pBhFPeKXoebmAzJKd6qkfw4bNHdvb7tzuGL1m%2FzbNABQEcQ1AkjxOzyHxp1JQRAtH%2BGh8uKcHBvNqEwg7s0xTr%2FDn%2FqBK7qt&X-Amz-Signature=0e3fc66d806ca3bf6f90b4fc5902c14dd7cb877771a26bb730f1321d0b75d522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHMNM56%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCOcRTOT0vZrOtMkVR66zwCVU8SBGsrhmKWh8wiXXBGBwIhAOu1RLhCLbVrTV3u83rwfUfDTc8Isr%2Bh1zbVO9x5hrwLKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0Xjb21ndL8UjuMvcq3AO%2FZDkVZFnWOH4zX%2FGOYuX%2B8lxIYEjAwLtU3CbthzTk%2Bg2h44ibhT92LbDHcyt961zEGENTAa2s36hK2LjRkSugmNj175STGiWxq1O69DmXAjK80AwkPdeEmaoMmjV9kOdtzh%2FxHvgHK%2By4emmd5zGdKL6F5A3l8ktgWmqgwg2%2Bv%2BfqO9cbkwtPXLAP1%2FsrlkwsIEA%2Fpp6B%2Bcnd3ItB9l7CN434U2Hqh8VTrm%2FBTI3jvSi1wCLcWH2CLHqlUSPDWSOYjRavFg9YaRpGWAwkyx38DH%2F6ey8M%2BYuGTrhYpGZySJO3HCPWaAqBFtSPCRR8%2B2W79%2B%2BnJ%2BcqzNESrHDAK%2FHTO6E3f%2FtI3H9VQy3hOEuO8QyFaTv1bpjQvUGe82TIbWK9MNJRUusSuFfpfhUUABN%2FormN7bHJWQqJ6BZV%2FAdPsle4Uk%2B2evHDQ1M%2FNRwoiufJZlksfHmnvgKtbT%2B37MaWVkd%2F%2F4BARjenGa9KcgIQhqa5O3NtFX%2BV%2BSU6NpriRF3p73rj03gBfPVJMWw4NWhMsPT23GHs8nNk6rXYphoQyT7evAx555WUHlxmPZ7dzofUNQs0%2BSnt4FHo6QI6uUcKcCSVZ%2BM2LN7VoIPAebRpodzRB6RJmt48TTjZzDCE3vbNBjqkARx%2BLv2hpyTwcxJTgTVNA%2B84gU9ha3HVciniHz%2BHESBtq2J0dzM8ndMu9GonGVOal43LtjxeoHd50pzga02sEJtO%2BYVH%2Bw5ghIu7UNzHECmy1%2FNxlGVTrMfAH6P8pBhFPeKXoebmAzJKd6qkfw4bNHdvb7tzuGL1m%2FzbNABQEcQ1AkjxOzyHxp1JQRAtH%2BGh8uKcHBvNqEwg7s0xTr%2FDn%2FqBK7qt&X-Amz-Signature=88bdfdb1c0e0375b01c69c369e66105c90de47063b2fa8f729c9aa08569c6221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

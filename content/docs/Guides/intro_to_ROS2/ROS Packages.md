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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7E23G%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCID%2BfBl5uVv31PeTQaaPBlB9D9sZ0BxyzjrRNi0QnAiTJAiEAgqMOH4MbpUP8dsFfvGusK1uhMVLDpLJU11eqYbmv5R8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETSiop1eyQHKDYGrSrcAx6lHcIdpksRs3ifNXWTkMZFUW0ai94m5I5tKN3F3xTO%2B0d6yRfRVeTGSTAoTs66kn1E06qTt4fAkGSEOg7Y8bFNfwwMwCisAgTQfEYl8nc2KYAF5Lb1X7oU9Mzh4IPtc2jT8vH4Xo2H2t99hFKzpilaBWR0SXrVP3ipiI714SjK1XLlOuEx5kFzzVrjrZDYRnpwwHFuFVWR94RezXbGftiBCB3Tpj%2Fj2PNZy%2Fvm2MVwtQkqTeSmF5W7g6kuqA0fLlEBWqj1IDkg8gUjmGKmfZo7EdVgT5F7wHwNm93U0V5g%2FglW%2B%2Bz%2FsanIa3PDKg2cpfS0AGdb6a18w9kcaPmpGJFGBRBQteV7%2FTQU7UHnaBHZeqdlBUPFFPYFG09X8S9KnCQpOP9MKEcCjysZiFJN9i7VulOyjurykIGAjulDN6c3sHS%2BtIfYqW64lm6QrtsQfHUSzUW5KB%2BLkT93UY24KCDd4QbAnN4eENSolMCB5XvnkFcbk9ZWk2B2ARZLzskQwsvxrSM%2BeeMNzU5c2FApeDNY%2FTCcfd0Q9rUD3wtRxJkdM5CXIFzfUyzDLkadDvXFvy%2FH30mgxHhMPp3MDRm7mYr47KFgzK0r6jQKc5mCQMb1NK7eW0Dt%2B46XK7qTMIj2isgGOqUBNo1fOQy4fYnnw6kFULqpV%2FHXDeLmc1hZxNw0ahFYqANO50v3jjCfI%2FXa8GiC%2B5%2B6i2rS0OirGQa6eptYL8MJHMBSVwyV7TO1s%2BZo2pzuMDGkZht1np8gnNJ4PiBNZHHN3KRu%2FIZgwHgopom%2BVOfhFoNA0G6sh5llI%2BVtvVZCLDnvIx0P4FVZGa6Btf0rVvYxrwZZUn0COpxw%2BWf6ToUWa3Zif4h2&X-Amz-Signature=71258332bae9ba74ce0fda36e54c47ac6026e7fdf07ef26c4208b4ea2e24ddda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7E23G%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCID%2BfBl5uVv31PeTQaaPBlB9D9sZ0BxyzjrRNi0QnAiTJAiEAgqMOH4MbpUP8dsFfvGusK1uhMVLDpLJU11eqYbmv5R8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETSiop1eyQHKDYGrSrcAx6lHcIdpksRs3ifNXWTkMZFUW0ai94m5I5tKN3F3xTO%2B0d6yRfRVeTGSTAoTs66kn1E06qTt4fAkGSEOg7Y8bFNfwwMwCisAgTQfEYl8nc2KYAF5Lb1X7oU9Mzh4IPtc2jT8vH4Xo2H2t99hFKzpilaBWR0SXrVP3ipiI714SjK1XLlOuEx5kFzzVrjrZDYRnpwwHFuFVWR94RezXbGftiBCB3Tpj%2Fj2PNZy%2Fvm2MVwtQkqTeSmF5W7g6kuqA0fLlEBWqj1IDkg8gUjmGKmfZo7EdVgT5F7wHwNm93U0V5g%2FglW%2B%2Bz%2FsanIa3PDKg2cpfS0AGdb6a18w9kcaPmpGJFGBRBQteV7%2FTQU7UHnaBHZeqdlBUPFFPYFG09X8S9KnCQpOP9MKEcCjysZiFJN9i7VulOyjurykIGAjulDN6c3sHS%2BtIfYqW64lm6QrtsQfHUSzUW5KB%2BLkT93UY24KCDd4QbAnN4eENSolMCB5XvnkFcbk9ZWk2B2ARZLzskQwsvxrSM%2BeeMNzU5c2FApeDNY%2FTCcfd0Q9rUD3wtRxJkdM5CXIFzfUyzDLkadDvXFvy%2FH30mgxHhMPp3MDRm7mYr47KFgzK0r6jQKc5mCQMb1NK7eW0Dt%2B46XK7qTMIj2isgGOqUBNo1fOQy4fYnnw6kFULqpV%2FHXDeLmc1hZxNw0ahFYqANO50v3jjCfI%2FXa8GiC%2B5%2B6i2rS0OirGQa6eptYL8MJHMBSVwyV7TO1s%2BZo2pzuMDGkZht1np8gnNJ4PiBNZHHN3KRu%2FIZgwHgopom%2BVOfhFoNA0G6sh5llI%2BVtvVZCLDnvIx0P4FVZGa6Btf0rVvYxrwZZUn0COpxw%2BWf6ToUWa3Zif4h2&X-Amz-Signature=d40f259da4ff30bf455674aa21c9ce13c1609138bf6ca003405e2ec4a7a0e23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7E23G%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCID%2BfBl5uVv31PeTQaaPBlB9D9sZ0BxyzjrRNi0QnAiTJAiEAgqMOH4MbpUP8dsFfvGusK1uhMVLDpLJU11eqYbmv5R8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETSiop1eyQHKDYGrSrcAx6lHcIdpksRs3ifNXWTkMZFUW0ai94m5I5tKN3F3xTO%2B0d6yRfRVeTGSTAoTs66kn1E06qTt4fAkGSEOg7Y8bFNfwwMwCisAgTQfEYl8nc2KYAF5Lb1X7oU9Mzh4IPtc2jT8vH4Xo2H2t99hFKzpilaBWR0SXrVP3ipiI714SjK1XLlOuEx5kFzzVrjrZDYRnpwwHFuFVWR94RezXbGftiBCB3Tpj%2Fj2PNZy%2Fvm2MVwtQkqTeSmF5W7g6kuqA0fLlEBWqj1IDkg8gUjmGKmfZo7EdVgT5F7wHwNm93U0V5g%2FglW%2B%2Bz%2FsanIa3PDKg2cpfS0AGdb6a18w9kcaPmpGJFGBRBQteV7%2FTQU7UHnaBHZeqdlBUPFFPYFG09X8S9KnCQpOP9MKEcCjysZiFJN9i7VulOyjurykIGAjulDN6c3sHS%2BtIfYqW64lm6QrtsQfHUSzUW5KB%2BLkT93UY24KCDd4QbAnN4eENSolMCB5XvnkFcbk9ZWk2B2ARZLzskQwsvxrSM%2BeeMNzU5c2FApeDNY%2FTCcfd0Q9rUD3wtRxJkdM5CXIFzfUyzDLkadDvXFvy%2FH30mgxHhMPp3MDRm7mYr47KFgzK0r6jQKc5mCQMb1NK7eW0Dt%2B46XK7qTMIj2isgGOqUBNo1fOQy4fYnnw6kFULqpV%2FHXDeLmc1hZxNw0ahFYqANO50v3jjCfI%2FXa8GiC%2B5%2B6i2rS0OirGQa6eptYL8MJHMBSVwyV7TO1s%2BZo2pzuMDGkZht1np8gnNJ4PiBNZHHN3KRu%2FIZgwHgopom%2BVOfhFoNA0G6sh5llI%2BVtvVZCLDnvIx0P4FVZGa6Btf0rVvYxrwZZUn0COpxw%2BWf6ToUWa3Zif4h2&X-Amz-Signature=a238cd4be7bdb5e2dfcaaea63843717ba6b728b40a34d3efaa7ec99cf075e454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7E23G%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCID%2BfBl5uVv31PeTQaaPBlB9D9sZ0BxyzjrRNi0QnAiTJAiEAgqMOH4MbpUP8dsFfvGusK1uhMVLDpLJU11eqYbmv5R8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETSiop1eyQHKDYGrSrcAx6lHcIdpksRs3ifNXWTkMZFUW0ai94m5I5tKN3F3xTO%2B0d6yRfRVeTGSTAoTs66kn1E06qTt4fAkGSEOg7Y8bFNfwwMwCisAgTQfEYl8nc2KYAF5Lb1X7oU9Mzh4IPtc2jT8vH4Xo2H2t99hFKzpilaBWR0SXrVP3ipiI714SjK1XLlOuEx5kFzzVrjrZDYRnpwwHFuFVWR94RezXbGftiBCB3Tpj%2Fj2PNZy%2Fvm2MVwtQkqTeSmF5W7g6kuqA0fLlEBWqj1IDkg8gUjmGKmfZo7EdVgT5F7wHwNm93U0V5g%2FglW%2B%2Bz%2FsanIa3PDKg2cpfS0AGdb6a18w9kcaPmpGJFGBRBQteV7%2FTQU7UHnaBHZeqdlBUPFFPYFG09X8S9KnCQpOP9MKEcCjysZiFJN9i7VulOyjurykIGAjulDN6c3sHS%2BtIfYqW64lm6QrtsQfHUSzUW5KB%2BLkT93UY24KCDd4QbAnN4eENSolMCB5XvnkFcbk9ZWk2B2ARZLzskQwsvxrSM%2BeeMNzU5c2FApeDNY%2FTCcfd0Q9rUD3wtRxJkdM5CXIFzfUyzDLkadDvXFvy%2FH30mgxHhMPp3MDRm7mYr47KFgzK0r6jQKc5mCQMb1NK7eW0Dt%2B46XK7qTMIj2isgGOqUBNo1fOQy4fYnnw6kFULqpV%2FHXDeLmc1hZxNw0ahFYqANO50v3jjCfI%2FXa8GiC%2B5%2B6i2rS0OirGQa6eptYL8MJHMBSVwyV7TO1s%2BZo2pzuMDGkZht1np8gnNJ4PiBNZHHN3KRu%2FIZgwHgopom%2BVOfhFoNA0G6sh5llI%2BVtvVZCLDnvIx0P4FVZGa6Btf0rVvYxrwZZUn0COpxw%2BWf6ToUWa3Zif4h2&X-Amz-Signature=1d69aed8e7b8dc0e675f3efd4c56156359fd7fbaa0f00dd1c7b2c91c7b4ebb17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7E23G%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCID%2BfBl5uVv31PeTQaaPBlB9D9sZ0BxyzjrRNi0QnAiTJAiEAgqMOH4MbpUP8dsFfvGusK1uhMVLDpLJU11eqYbmv5R8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETSiop1eyQHKDYGrSrcAx6lHcIdpksRs3ifNXWTkMZFUW0ai94m5I5tKN3F3xTO%2B0d6yRfRVeTGSTAoTs66kn1E06qTt4fAkGSEOg7Y8bFNfwwMwCisAgTQfEYl8nc2KYAF5Lb1X7oU9Mzh4IPtc2jT8vH4Xo2H2t99hFKzpilaBWR0SXrVP3ipiI714SjK1XLlOuEx5kFzzVrjrZDYRnpwwHFuFVWR94RezXbGftiBCB3Tpj%2Fj2PNZy%2Fvm2MVwtQkqTeSmF5W7g6kuqA0fLlEBWqj1IDkg8gUjmGKmfZo7EdVgT5F7wHwNm93U0V5g%2FglW%2B%2Bz%2FsanIa3PDKg2cpfS0AGdb6a18w9kcaPmpGJFGBRBQteV7%2FTQU7UHnaBHZeqdlBUPFFPYFG09X8S9KnCQpOP9MKEcCjysZiFJN9i7VulOyjurykIGAjulDN6c3sHS%2BtIfYqW64lm6QrtsQfHUSzUW5KB%2BLkT93UY24KCDd4QbAnN4eENSolMCB5XvnkFcbk9ZWk2B2ARZLzskQwsvxrSM%2BeeMNzU5c2FApeDNY%2FTCcfd0Q9rUD3wtRxJkdM5CXIFzfUyzDLkadDvXFvy%2FH30mgxHhMPp3MDRm7mYr47KFgzK0r6jQKc5mCQMb1NK7eW0Dt%2B46XK7qTMIj2isgGOqUBNo1fOQy4fYnnw6kFULqpV%2FHXDeLmc1hZxNw0ahFYqANO50v3jjCfI%2FXa8GiC%2B5%2B6i2rS0OirGQa6eptYL8MJHMBSVwyV7TO1s%2BZo2pzuMDGkZht1np8gnNJ4PiBNZHHN3KRu%2FIZgwHgopom%2BVOfhFoNA0G6sh5llI%2BVtvVZCLDnvIx0P4FVZGa6Btf0rVvYxrwZZUn0COpxw%2BWf6ToUWa3Zif4h2&X-Amz-Signature=a14552e55dbab22e6f0366869d8d7cba40d2cc8dedfc4285e800bb613e32cfb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7E23G%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCID%2BfBl5uVv31PeTQaaPBlB9D9sZ0BxyzjrRNi0QnAiTJAiEAgqMOH4MbpUP8dsFfvGusK1uhMVLDpLJU11eqYbmv5R8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETSiop1eyQHKDYGrSrcAx6lHcIdpksRs3ifNXWTkMZFUW0ai94m5I5tKN3F3xTO%2B0d6yRfRVeTGSTAoTs66kn1E06qTt4fAkGSEOg7Y8bFNfwwMwCisAgTQfEYl8nc2KYAF5Lb1X7oU9Mzh4IPtc2jT8vH4Xo2H2t99hFKzpilaBWR0SXrVP3ipiI714SjK1XLlOuEx5kFzzVrjrZDYRnpwwHFuFVWR94RezXbGftiBCB3Tpj%2Fj2PNZy%2Fvm2MVwtQkqTeSmF5W7g6kuqA0fLlEBWqj1IDkg8gUjmGKmfZo7EdVgT5F7wHwNm93U0V5g%2FglW%2B%2Bz%2FsanIa3PDKg2cpfS0AGdb6a18w9kcaPmpGJFGBRBQteV7%2FTQU7UHnaBHZeqdlBUPFFPYFG09X8S9KnCQpOP9MKEcCjysZiFJN9i7VulOyjurykIGAjulDN6c3sHS%2BtIfYqW64lm6QrtsQfHUSzUW5KB%2BLkT93UY24KCDd4QbAnN4eENSolMCB5XvnkFcbk9ZWk2B2ARZLzskQwsvxrSM%2BeeMNzU5c2FApeDNY%2FTCcfd0Q9rUD3wtRxJkdM5CXIFzfUyzDLkadDvXFvy%2FH30mgxHhMPp3MDRm7mYr47KFgzK0r6jQKc5mCQMb1NK7eW0Dt%2B46XK7qTMIj2isgGOqUBNo1fOQy4fYnnw6kFULqpV%2FHXDeLmc1hZxNw0ahFYqANO50v3jjCfI%2FXa8GiC%2B5%2B6i2rS0OirGQa6eptYL8MJHMBSVwyV7TO1s%2BZo2pzuMDGkZht1np8gnNJ4PiBNZHHN3KRu%2FIZgwHgopom%2BVOfhFoNA0G6sh5llI%2BVtvVZCLDnvIx0P4FVZGa6Btf0rVvYxrwZZUn0COpxw%2BWf6ToUWa3Zif4h2&X-Amz-Signature=18d1e1283add3b65694739347c17658d420e8d78c106b8124d04ea3dd173cee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7E23G%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCID%2BfBl5uVv31PeTQaaPBlB9D9sZ0BxyzjrRNi0QnAiTJAiEAgqMOH4MbpUP8dsFfvGusK1uhMVLDpLJU11eqYbmv5R8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETSiop1eyQHKDYGrSrcAx6lHcIdpksRs3ifNXWTkMZFUW0ai94m5I5tKN3F3xTO%2B0d6yRfRVeTGSTAoTs66kn1E06qTt4fAkGSEOg7Y8bFNfwwMwCisAgTQfEYl8nc2KYAF5Lb1X7oU9Mzh4IPtc2jT8vH4Xo2H2t99hFKzpilaBWR0SXrVP3ipiI714SjK1XLlOuEx5kFzzVrjrZDYRnpwwHFuFVWR94RezXbGftiBCB3Tpj%2Fj2PNZy%2Fvm2MVwtQkqTeSmF5W7g6kuqA0fLlEBWqj1IDkg8gUjmGKmfZo7EdVgT5F7wHwNm93U0V5g%2FglW%2B%2Bz%2FsanIa3PDKg2cpfS0AGdb6a18w9kcaPmpGJFGBRBQteV7%2FTQU7UHnaBHZeqdlBUPFFPYFG09X8S9KnCQpOP9MKEcCjysZiFJN9i7VulOyjurykIGAjulDN6c3sHS%2BtIfYqW64lm6QrtsQfHUSzUW5KB%2BLkT93UY24KCDd4QbAnN4eENSolMCB5XvnkFcbk9ZWk2B2ARZLzskQwsvxrSM%2BeeMNzU5c2FApeDNY%2FTCcfd0Q9rUD3wtRxJkdM5CXIFzfUyzDLkadDvXFvy%2FH30mgxHhMPp3MDRm7mYr47KFgzK0r6jQKc5mCQMb1NK7eW0Dt%2B46XK7qTMIj2isgGOqUBNo1fOQy4fYnnw6kFULqpV%2FHXDeLmc1hZxNw0ahFYqANO50v3jjCfI%2FXa8GiC%2B5%2B6i2rS0OirGQa6eptYL8MJHMBSVwyV7TO1s%2BZo2pzuMDGkZht1np8gnNJ4PiBNZHHN3KRu%2FIZgwHgopom%2BVOfhFoNA0G6sh5llI%2BVtvVZCLDnvIx0P4FVZGa6Btf0rVvYxrwZZUn0COpxw%2BWf6ToUWa3Zif4h2&X-Amz-Signature=090d67e47c8a09521ed43c16c0cfb3eeea4a894ca818aaf4215be868675c016c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

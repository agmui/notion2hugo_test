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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCVLGT2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxKKSo52%2FnThKoHe5e%2F0RyQr5HEmQRrQRsglcwe3VJJAiAfBeAugnshGtzjZVTbMDWi7jTp5vq0y2GGjzUx32%2FkVyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFQO2103HOdyw5AlzKtwD3D03XSmH8noDjcNpsg%2FQljuWSfoHCRY0rAJXPeuu6H9yZzeE3bWcdRKpTrHzuz6CPErurHQcYEQMhEt8CdPKqq2Gm%2BIEBE1f%2FxytgRRv5B5TnoRaJgWjCp1Sty%2F7kHcbCi1MAviBxzSzhLtLomCZp%2B2w5ow3qhPYgUQNuOVZBwoRukoMtC7uRGbXO5Qr04VbtUu3rbZSo17ShEffcEDeLH3ujj%2B38UbL5sVSQMvt4FmLgltwhcmHbE8EHxJHk1aDCZY%2FcGONFipAXcag1brCMOx3HRrPdgL5dBLRjXM9iUZZahXxzPCKjLaHcmNiwft8TAQzrBPrvCQ2kOeiLjhrStOHYd6J0ZcjZwbvskxv12YgCQR3uK9AQbJVwG7i080xa1FzSlAyZRY9sfQsqXtRJS9JyZRTqEWAt2AFjEUSoIqVC6lQDRPWyGVXyrFDJUaqX95kgm%2B8rtDeuwJYjN3ks%2BRRzCdsPKxc6SgH7I6h8xhVbRo%2BVKhwG%2FC%2BhcorRaA%2F%2BqnAxWiaYUXp8kf0uxYD07mQhPZ%2FzN8xVFh3UC%2B1MMlgPNs82tGmpCBTYmg%2FG0GfvbvYoR53HIyUN4Cxcq3TsrZQMy9fOcvKad%2B4SWVul%2BMsejmTYG6dqovihZowof7rwQY6pgHIpUmwA32BG34Xq5XUO2O19GE8m76a%2B7zMBm3BOy15edMIOq13si%2FoKlyNLmbIaH%2BNA4qkmK3cMhNgXfIyniqaNuO0aG3FC3VyaVsLJfUlF3NoPy2rq24Im6vbBjOyDCe7EDC4WU%2BtyPDLAw2gghrnesiwxnKCGB0o%2FUDHipODz45YTey0QUT4ecwViR9631KWpY7qcZHNk2dsD7gPoBy0Ep%2BvJMJc&X-Amz-Signature=c4c1a7c844fefa7615c377d8953c7efafe09ab1fcf89a3afe06229887891934b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCVLGT2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxKKSo52%2FnThKoHe5e%2F0RyQr5HEmQRrQRsglcwe3VJJAiAfBeAugnshGtzjZVTbMDWi7jTp5vq0y2GGjzUx32%2FkVyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFQO2103HOdyw5AlzKtwD3D03XSmH8noDjcNpsg%2FQljuWSfoHCRY0rAJXPeuu6H9yZzeE3bWcdRKpTrHzuz6CPErurHQcYEQMhEt8CdPKqq2Gm%2BIEBE1f%2FxytgRRv5B5TnoRaJgWjCp1Sty%2F7kHcbCi1MAviBxzSzhLtLomCZp%2B2w5ow3qhPYgUQNuOVZBwoRukoMtC7uRGbXO5Qr04VbtUu3rbZSo17ShEffcEDeLH3ujj%2B38UbL5sVSQMvt4FmLgltwhcmHbE8EHxJHk1aDCZY%2FcGONFipAXcag1brCMOx3HRrPdgL5dBLRjXM9iUZZahXxzPCKjLaHcmNiwft8TAQzrBPrvCQ2kOeiLjhrStOHYd6J0ZcjZwbvskxv12YgCQR3uK9AQbJVwG7i080xa1FzSlAyZRY9sfQsqXtRJS9JyZRTqEWAt2AFjEUSoIqVC6lQDRPWyGVXyrFDJUaqX95kgm%2B8rtDeuwJYjN3ks%2BRRzCdsPKxc6SgH7I6h8xhVbRo%2BVKhwG%2FC%2BhcorRaA%2F%2BqnAxWiaYUXp8kf0uxYD07mQhPZ%2FzN8xVFh3UC%2B1MMlgPNs82tGmpCBTYmg%2FG0GfvbvYoR53HIyUN4Cxcq3TsrZQMy9fOcvKad%2B4SWVul%2BMsejmTYG6dqovihZowof7rwQY6pgHIpUmwA32BG34Xq5XUO2O19GE8m76a%2B7zMBm3BOy15edMIOq13si%2FoKlyNLmbIaH%2BNA4qkmK3cMhNgXfIyniqaNuO0aG3FC3VyaVsLJfUlF3NoPy2rq24Im6vbBjOyDCe7EDC4WU%2BtyPDLAw2gghrnesiwxnKCGB0o%2FUDHipODz45YTey0QUT4ecwViR9631KWpY7qcZHNk2dsD7gPoBy0Ep%2BvJMJc&X-Amz-Signature=992c255b066214cde97c8a2ac3861cd578ea65c409fd5b84fae2910347e0558b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCVLGT2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxKKSo52%2FnThKoHe5e%2F0RyQr5HEmQRrQRsglcwe3VJJAiAfBeAugnshGtzjZVTbMDWi7jTp5vq0y2GGjzUx32%2FkVyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFQO2103HOdyw5AlzKtwD3D03XSmH8noDjcNpsg%2FQljuWSfoHCRY0rAJXPeuu6H9yZzeE3bWcdRKpTrHzuz6CPErurHQcYEQMhEt8CdPKqq2Gm%2BIEBE1f%2FxytgRRv5B5TnoRaJgWjCp1Sty%2F7kHcbCi1MAviBxzSzhLtLomCZp%2B2w5ow3qhPYgUQNuOVZBwoRukoMtC7uRGbXO5Qr04VbtUu3rbZSo17ShEffcEDeLH3ujj%2B38UbL5sVSQMvt4FmLgltwhcmHbE8EHxJHk1aDCZY%2FcGONFipAXcag1brCMOx3HRrPdgL5dBLRjXM9iUZZahXxzPCKjLaHcmNiwft8TAQzrBPrvCQ2kOeiLjhrStOHYd6J0ZcjZwbvskxv12YgCQR3uK9AQbJVwG7i080xa1FzSlAyZRY9sfQsqXtRJS9JyZRTqEWAt2AFjEUSoIqVC6lQDRPWyGVXyrFDJUaqX95kgm%2B8rtDeuwJYjN3ks%2BRRzCdsPKxc6SgH7I6h8xhVbRo%2BVKhwG%2FC%2BhcorRaA%2F%2BqnAxWiaYUXp8kf0uxYD07mQhPZ%2FzN8xVFh3UC%2B1MMlgPNs82tGmpCBTYmg%2FG0GfvbvYoR53HIyUN4Cxcq3TsrZQMy9fOcvKad%2B4SWVul%2BMsejmTYG6dqovihZowof7rwQY6pgHIpUmwA32BG34Xq5XUO2O19GE8m76a%2B7zMBm3BOy15edMIOq13si%2FoKlyNLmbIaH%2BNA4qkmK3cMhNgXfIyniqaNuO0aG3FC3VyaVsLJfUlF3NoPy2rq24Im6vbBjOyDCe7EDC4WU%2BtyPDLAw2gghrnesiwxnKCGB0o%2FUDHipODz45YTey0QUT4ecwViR9631KWpY7qcZHNk2dsD7gPoBy0Ep%2BvJMJc&X-Amz-Signature=70beb3e547792098501d7af70953e4228e3c7a65d2348158b983abaf3f6f9d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCVLGT2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxKKSo52%2FnThKoHe5e%2F0RyQr5HEmQRrQRsglcwe3VJJAiAfBeAugnshGtzjZVTbMDWi7jTp5vq0y2GGjzUx32%2FkVyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFQO2103HOdyw5AlzKtwD3D03XSmH8noDjcNpsg%2FQljuWSfoHCRY0rAJXPeuu6H9yZzeE3bWcdRKpTrHzuz6CPErurHQcYEQMhEt8CdPKqq2Gm%2BIEBE1f%2FxytgRRv5B5TnoRaJgWjCp1Sty%2F7kHcbCi1MAviBxzSzhLtLomCZp%2B2w5ow3qhPYgUQNuOVZBwoRukoMtC7uRGbXO5Qr04VbtUu3rbZSo17ShEffcEDeLH3ujj%2B38UbL5sVSQMvt4FmLgltwhcmHbE8EHxJHk1aDCZY%2FcGONFipAXcag1brCMOx3HRrPdgL5dBLRjXM9iUZZahXxzPCKjLaHcmNiwft8TAQzrBPrvCQ2kOeiLjhrStOHYd6J0ZcjZwbvskxv12YgCQR3uK9AQbJVwG7i080xa1FzSlAyZRY9sfQsqXtRJS9JyZRTqEWAt2AFjEUSoIqVC6lQDRPWyGVXyrFDJUaqX95kgm%2B8rtDeuwJYjN3ks%2BRRzCdsPKxc6SgH7I6h8xhVbRo%2BVKhwG%2FC%2BhcorRaA%2F%2BqnAxWiaYUXp8kf0uxYD07mQhPZ%2FzN8xVFh3UC%2B1MMlgPNs82tGmpCBTYmg%2FG0GfvbvYoR53HIyUN4Cxcq3TsrZQMy9fOcvKad%2B4SWVul%2BMsejmTYG6dqovihZowof7rwQY6pgHIpUmwA32BG34Xq5XUO2O19GE8m76a%2B7zMBm3BOy15edMIOq13si%2FoKlyNLmbIaH%2BNA4qkmK3cMhNgXfIyniqaNuO0aG3FC3VyaVsLJfUlF3NoPy2rq24Im6vbBjOyDCe7EDC4WU%2BtyPDLAw2gghrnesiwxnKCGB0o%2FUDHipODz45YTey0QUT4ecwViR9631KWpY7qcZHNk2dsD7gPoBy0Ep%2BvJMJc&X-Amz-Signature=8194e8f66e665eb68a31f54c63111648c96a99e5fce045e62997a15ff1d14fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCVLGT2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxKKSo52%2FnThKoHe5e%2F0RyQr5HEmQRrQRsglcwe3VJJAiAfBeAugnshGtzjZVTbMDWi7jTp5vq0y2GGjzUx32%2FkVyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFQO2103HOdyw5AlzKtwD3D03XSmH8noDjcNpsg%2FQljuWSfoHCRY0rAJXPeuu6H9yZzeE3bWcdRKpTrHzuz6CPErurHQcYEQMhEt8CdPKqq2Gm%2BIEBE1f%2FxytgRRv5B5TnoRaJgWjCp1Sty%2F7kHcbCi1MAviBxzSzhLtLomCZp%2B2w5ow3qhPYgUQNuOVZBwoRukoMtC7uRGbXO5Qr04VbtUu3rbZSo17ShEffcEDeLH3ujj%2B38UbL5sVSQMvt4FmLgltwhcmHbE8EHxJHk1aDCZY%2FcGONFipAXcag1brCMOx3HRrPdgL5dBLRjXM9iUZZahXxzPCKjLaHcmNiwft8TAQzrBPrvCQ2kOeiLjhrStOHYd6J0ZcjZwbvskxv12YgCQR3uK9AQbJVwG7i080xa1FzSlAyZRY9sfQsqXtRJS9JyZRTqEWAt2AFjEUSoIqVC6lQDRPWyGVXyrFDJUaqX95kgm%2B8rtDeuwJYjN3ks%2BRRzCdsPKxc6SgH7I6h8xhVbRo%2BVKhwG%2FC%2BhcorRaA%2F%2BqnAxWiaYUXp8kf0uxYD07mQhPZ%2FzN8xVFh3UC%2B1MMlgPNs82tGmpCBTYmg%2FG0GfvbvYoR53HIyUN4Cxcq3TsrZQMy9fOcvKad%2B4SWVul%2BMsejmTYG6dqovihZowof7rwQY6pgHIpUmwA32BG34Xq5XUO2O19GE8m76a%2B7zMBm3BOy15edMIOq13si%2FoKlyNLmbIaH%2BNA4qkmK3cMhNgXfIyniqaNuO0aG3FC3VyaVsLJfUlF3NoPy2rq24Im6vbBjOyDCe7EDC4WU%2BtyPDLAw2gghrnesiwxnKCGB0o%2FUDHipODz45YTey0QUT4ecwViR9631KWpY7qcZHNk2dsD7gPoBy0Ep%2BvJMJc&X-Amz-Signature=debc2d281edec900ce1f0a2ea2f4f0c63bc55471fbe9702dbd55c3254d625579&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCVLGT2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxKKSo52%2FnThKoHe5e%2F0RyQr5HEmQRrQRsglcwe3VJJAiAfBeAugnshGtzjZVTbMDWi7jTp5vq0y2GGjzUx32%2FkVyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFQO2103HOdyw5AlzKtwD3D03XSmH8noDjcNpsg%2FQljuWSfoHCRY0rAJXPeuu6H9yZzeE3bWcdRKpTrHzuz6CPErurHQcYEQMhEt8CdPKqq2Gm%2BIEBE1f%2FxytgRRv5B5TnoRaJgWjCp1Sty%2F7kHcbCi1MAviBxzSzhLtLomCZp%2B2w5ow3qhPYgUQNuOVZBwoRukoMtC7uRGbXO5Qr04VbtUu3rbZSo17ShEffcEDeLH3ujj%2B38UbL5sVSQMvt4FmLgltwhcmHbE8EHxJHk1aDCZY%2FcGONFipAXcag1brCMOx3HRrPdgL5dBLRjXM9iUZZahXxzPCKjLaHcmNiwft8TAQzrBPrvCQ2kOeiLjhrStOHYd6J0ZcjZwbvskxv12YgCQR3uK9AQbJVwG7i080xa1FzSlAyZRY9sfQsqXtRJS9JyZRTqEWAt2AFjEUSoIqVC6lQDRPWyGVXyrFDJUaqX95kgm%2B8rtDeuwJYjN3ks%2BRRzCdsPKxc6SgH7I6h8xhVbRo%2BVKhwG%2FC%2BhcorRaA%2F%2BqnAxWiaYUXp8kf0uxYD07mQhPZ%2FzN8xVFh3UC%2B1MMlgPNs82tGmpCBTYmg%2FG0GfvbvYoR53HIyUN4Cxcq3TsrZQMy9fOcvKad%2B4SWVul%2BMsejmTYG6dqovihZowof7rwQY6pgHIpUmwA32BG34Xq5XUO2O19GE8m76a%2B7zMBm3BOy15edMIOq13si%2FoKlyNLmbIaH%2BNA4qkmK3cMhNgXfIyniqaNuO0aG3FC3VyaVsLJfUlF3NoPy2rq24Im6vbBjOyDCe7EDC4WU%2BtyPDLAw2gghrnesiwxnKCGB0o%2FUDHipODz45YTey0QUT4ecwViR9631KWpY7qcZHNk2dsD7gPoBy0Ep%2BvJMJc&X-Amz-Signature=2a223a48280035a47ef38233e3a1785b9fe215a48d6bcc8c44e88bb4ffb2bdec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCVLGT2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxKKSo52%2FnThKoHe5e%2F0RyQr5HEmQRrQRsglcwe3VJJAiAfBeAugnshGtzjZVTbMDWi7jTp5vq0y2GGjzUx32%2FkVyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFQO2103HOdyw5AlzKtwD3D03XSmH8noDjcNpsg%2FQljuWSfoHCRY0rAJXPeuu6H9yZzeE3bWcdRKpTrHzuz6CPErurHQcYEQMhEt8CdPKqq2Gm%2BIEBE1f%2FxytgRRv5B5TnoRaJgWjCp1Sty%2F7kHcbCi1MAviBxzSzhLtLomCZp%2B2w5ow3qhPYgUQNuOVZBwoRukoMtC7uRGbXO5Qr04VbtUu3rbZSo17ShEffcEDeLH3ujj%2B38UbL5sVSQMvt4FmLgltwhcmHbE8EHxJHk1aDCZY%2FcGONFipAXcag1brCMOx3HRrPdgL5dBLRjXM9iUZZahXxzPCKjLaHcmNiwft8TAQzrBPrvCQ2kOeiLjhrStOHYd6J0ZcjZwbvskxv12YgCQR3uK9AQbJVwG7i080xa1FzSlAyZRY9sfQsqXtRJS9JyZRTqEWAt2AFjEUSoIqVC6lQDRPWyGVXyrFDJUaqX95kgm%2B8rtDeuwJYjN3ks%2BRRzCdsPKxc6SgH7I6h8xhVbRo%2BVKhwG%2FC%2BhcorRaA%2F%2BqnAxWiaYUXp8kf0uxYD07mQhPZ%2FzN8xVFh3UC%2B1MMlgPNs82tGmpCBTYmg%2FG0GfvbvYoR53HIyUN4Cxcq3TsrZQMy9fOcvKad%2B4SWVul%2BMsejmTYG6dqovihZowof7rwQY6pgHIpUmwA32BG34Xq5XUO2O19GE8m76a%2B7zMBm3BOy15edMIOq13si%2FoKlyNLmbIaH%2BNA4qkmK3cMhNgXfIyniqaNuO0aG3FC3VyaVsLJfUlF3NoPy2rq24Im6vbBjOyDCe7EDC4WU%2BtyPDLAw2gghrnesiwxnKCGB0o%2FUDHipODz45YTey0QUT4ecwViR9631KWpY7qcZHNk2dsD7gPoBy0Ep%2BvJMJc&X-Amz-Signature=180d56a8c417cdb8215aa4a8fc3e9ec5ff580489618ce73e51a6b9aae669adbd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

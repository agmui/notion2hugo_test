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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3AXPCJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdJYaFYPQ1HBg5ZCRcXeNdFW1rMVx%2FYIw1mQeVEcxLgIhALnK56eEDGf2zHNaEUefC6snfNU783aoAUvhuMGdaOi8Kv8DCFIQABoMNjM3NDIzMTgzODA1IgzhTF6YRZPZMSBZ%2B8sq3AOWYD9PZ05PHMtcbKzSpiyoGKdRX4GNfL4h2rnN9okMDk7kqBwT5CvyVlEvfosQusGnAajBtRHDP2sqmUDmyJOth%2FDTmiAeL%2BOEiSxL2xoEdnRWmWpe0FhC9F8KSiu6kwFuUSKWG6ZHN29Sv412euTqBjD7gBh5QS99JJIru2rvB9iyPyyv8Xj9dMjVQFzgzSgpxw5ZI3q3g2giBuhh3dFSZZKvvAMTaGP8GRf5Vjj0Etuc7EcguP7Ie%2FTWIb8kTv0FM34yEZnzmqNnMYOZVVzD%2BhcWuaYpzrNrhNKiI4oMFgoXGnnX8p4S2PSmppI%2FwGpmqzj2Yq%2FTE%2FjE%2FGBBj1w%2BRHL%2BOhEL%2BValdjC2sR61cnawklMqafnkhw3JbfwSiZZhuQYxxkpfs4S8xRfU0ghQVKxDWF%2BBcANguNwYtrc4awlMg2T%2FWjGc%2FEaN1laASmyKAEESylxrB5CqEblj24BqIFCVAQF%2FTbkUo5Xp26pDt0vJoln0k3YpqVp1MBy2UVhSrXbEjnKvivmMmgpUEPDHOv1p%2BiyD7%2B5a7MLchpgG6%2F6D5YPRmFY3n44lBw%2BY2tvz5J4eFO3rhqzvR%2F8knu4RvYpSs0ywMhYIJWQMofuyvooplJKalYN4WazITjDnltTBBjqkAf8YYCKVT%2F8oXay%2F6uO3L1V4pkzxhlArSUJAUFe5CRavnTMIl9q57wPYw%2FXjoiq5qwFgyLRwxxikG%2Bf9vY4eKLoy3T%2F5Z%2BV9bZ2mvFt1TYv7d5EDNGAZ3LCeTgvd3Idn1oHHZ2ZE9gcH41eqT0bOMOzqJRvA%2FwftQMhYbDyjtldBlkr5nCVzDQBU80wVFOLGmCHP%2F48w2APuXt3DQbjnbPFZQkAq&X-Amz-Signature=53072f470d3ebf84b0bddd9ca6a78e48be5e38e37ac4ed037a655dea394acf0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3AXPCJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdJYaFYPQ1HBg5ZCRcXeNdFW1rMVx%2FYIw1mQeVEcxLgIhALnK56eEDGf2zHNaEUefC6snfNU783aoAUvhuMGdaOi8Kv8DCFIQABoMNjM3NDIzMTgzODA1IgzhTF6YRZPZMSBZ%2B8sq3AOWYD9PZ05PHMtcbKzSpiyoGKdRX4GNfL4h2rnN9okMDk7kqBwT5CvyVlEvfosQusGnAajBtRHDP2sqmUDmyJOth%2FDTmiAeL%2BOEiSxL2xoEdnRWmWpe0FhC9F8KSiu6kwFuUSKWG6ZHN29Sv412euTqBjD7gBh5QS99JJIru2rvB9iyPyyv8Xj9dMjVQFzgzSgpxw5ZI3q3g2giBuhh3dFSZZKvvAMTaGP8GRf5Vjj0Etuc7EcguP7Ie%2FTWIb8kTv0FM34yEZnzmqNnMYOZVVzD%2BhcWuaYpzrNrhNKiI4oMFgoXGnnX8p4S2PSmppI%2FwGpmqzj2Yq%2FTE%2FjE%2FGBBj1w%2BRHL%2BOhEL%2BValdjC2sR61cnawklMqafnkhw3JbfwSiZZhuQYxxkpfs4S8xRfU0ghQVKxDWF%2BBcANguNwYtrc4awlMg2T%2FWjGc%2FEaN1laASmyKAEESylxrB5CqEblj24BqIFCVAQF%2FTbkUo5Xp26pDt0vJoln0k3YpqVp1MBy2UVhSrXbEjnKvivmMmgpUEPDHOv1p%2BiyD7%2B5a7MLchpgG6%2F6D5YPRmFY3n44lBw%2BY2tvz5J4eFO3rhqzvR%2F8knu4RvYpSs0ywMhYIJWQMofuyvooplJKalYN4WazITjDnltTBBjqkAf8YYCKVT%2F8oXay%2F6uO3L1V4pkzxhlArSUJAUFe5CRavnTMIl9q57wPYw%2FXjoiq5qwFgyLRwxxikG%2Bf9vY4eKLoy3T%2F5Z%2BV9bZ2mvFt1TYv7d5EDNGAZ3LCeTgvd3Idn1oHHZ2ZE9gcH41eqT0bOMOzqJRvA%2FwftQMhYbDyjtldBlkr5nCVzDQBU80wVFOLGmCHP%2F48w2APuXt3DQbjnbPFZQkAq&X-Amz-Signature=ca3fb87eabecb08bac4dd92aecf58909e25fc2a6e419b47e4ae8f9c0fa7378ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3AXPCJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdJYaFYPQ1HBg5ZCRcXeNdFW1rMVx%2FYIw1mQeVEcxLgIhALnK56eEDGf2zHNaEUefC6snfNU783aoAUvhuMGdaOi8Kv8DCFIQABoMNjM3NDIzMTgzODA1IgzhTF6YRZPZMSBZ%2B8sq3AOWYD9PZ05PHMtcbKzSpiyoGKdRX4GNfL4h2rnN9okMDk7kqBwT5CvyVlEvfosQusGnAajBtRHDP2sqmUDmyJOth%2FDTmiAeL%2BOEiSxL2xoEdnRWmWpe0FhC9F8KSiu6kwFuUSKWG6ZHN29Sv412euTqBjD7gBh5QS99JJIru2rvB9iyPyyv8Xj9dMjVQFzgzSgpxw5ZI3q3g2giBuhh3dFSZZKvvAMTaGP8GRf5Vjj0Etuc7EcguP7Ie%2FTWIb8kTv0FM34yEZnzmqNnMYOZVVzD%2BhcWuaYpzrNrhNKiI4oMFgoXGnnX8p4S2PSmppI%2FwGpmqzj2Yq%2FTE%2FjE%2FGBBj1w%2BRHL%2BOhEL%2BValdjC2sR61cnawklMqafnkhw3JbfwSiZZhuQYxxkpfs4S8xRfU0ghQVKxDWF%2BBcANguNwYtrc4awlMg2T%2FWjGc%2FEaN1laASmyKAEESylxrB5CqEblj24BqIFCVAQF%2FTbkUo5Xp26pDt0vJoln0k3YpqVp1MBy2UVhSrXbEjnKvivmMmgpUEPDHOv1p%2BiyD7%2B5a7MLchpgG6%2F6D5YPRmFY3n44lBw%2BY2tvz5J4eFO3rhqzvR%2F8knu4RvYpSs0ywMhYIJWQMofuyvooplJKalYN4WazITjDnltTBBjqkAf8YYCKVT%2F8oXay%2F6uO3L1V4pkzxhlArSUJAUFe5CRavnTMIl9q57wPYw%2FXjoiq5qwFgyLRwxxikG%2Bf9vY4eKLoy3T%2F5Z%2BV9bZ2mvFt1TYv7d5EDNGAZ3LCeTgvd3Idn1oHHZ2ZE9gcH41eqT0bOMOzqJRvA%2FwftQMhYbDyjtldBlkr5nCVzDQBU80wVFOLGmCHP%2F48w2APuXt3DQbjnbPFZQkAq&X-Amz-Signature=71205e86b2e0f1eaf9ce26b27e3f3056a28bba71f76e5c8dc1c66b2ee29dc5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3AXPCJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdJYaFYPQ1HBg5ZCRcXeNdFW1rMVx%2FYIw1mQeVEcxLgIhALnK56eEDGf2zHNaEUefC6snfNU783aoAUvhuMGdaOi8Kv8DCFIQABoMNjM3NDIzMTgzODA1IgzhTF6YRZPZMSBZ%2B8sq3AOWYD9PZ05PHMtcbKzSpiyoGKdRX4GNfL4h2rnN9okMDk7kqBwT5CvyVlEvfosQusGnAajBtRHDP2sqmUDmyJOth%2FDTmiAeL%2BOEiSxL2xoEdnRWmWpe0FhC9F8KSiu6kwFuUSKWG6ZHN29Sv412euTqBjD7gBh5QS99JJIru2rvB9iyPyyv8Xj9dMjVQFzgzSgpxw5ZI3q3g2giBuhh3dFSZZKvvAMTaGP8GRf5Vjj0Etuc7EcguP7Ie%2FTWIb8kTv0FM34yEZnzmqNnMYOZVVzD%2BhcWuaYpzrNrhNKiI4oMFgoXGnnX8p4S2PSmppI%2FwGpmqzj2Yq%2FTE%2FjE%2FGBBj1w%2BRHL%2BOhEL%2BValdjC2sR61cnawklMqafnkhw3JbfwSiZZhuQYxxkpfs4S8xRfU0ghQVKxDWF%2BBcANguNwYtrc4awlMg2T%2FWjGc%2FEaN1laASmyKAEESylxrB5CqEblj24BqIFCVAQF%2FTbkUo5Xp26pDt0vJoln0k3YpqVp1MBy2UVhSrXbEjnKvivmMmgpUEPDHOv1p%2BiyD7%2B5a7MLchpgG6%2F6D5YPRmFY3n44lBw%2BY2tvz5J4eFO3rhqzvR%2F8knu4RvYpSs0ywMhYIJWQMofuyvooplJKalYN4WazITjDnltTBBjqkAf8YYCKVT%2F8oXay%2F6uO3L1V4pkzxhlArSUJAUFe5CRavnTMIl9q57wPYw%2FXjoiq5qwFgyLRwxxikG%2Bf9vY4eKLoy3T%2F5Z%2BV9bZ2mvFt1TYv7d5EDNGAZ3LCeTgvd3Idn1oHHZ2ZE9gcH41eqT0bOMOzqJRvA%2FwftQMhYbDyjtldBlkr5nCVzDQBU80wVFOLGmCHP%2F48w2APuXt3DQbjnbPFZQkAq&X-Amz-Signature=e0226067fcb46f69c696d89618fbcbc66d5ffb3670d5d79d58d3cd518f6f0818&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3AXPCJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdJYaFYPQ1HBg5ZCRcXeNdFW1rMVx%2FYIw1mQeVEcxLgIhALnK56eEDGf2zHNaEUefC6snfNU783aoAUvhuMGdaOi8Kv8DCFIQABoMNjM3NDIzMTgzODA1IgzhTF6YRZPZMSBZ%2B8sq3AOWYD9PZ05PHMtcbKzSpiyoGKdRX4GNfL4h2rnN9okMDk7kqBwT5CvyVlEvfosQusGnAajBtRHDP2sqmUDmyJOth%2FDTmiAeL%2BOEiSxL2xoEdnRWmWpe0FhC9F8KSiu6kwFuUSKWG6ZHN29Sv412euTqBjD7gBh5QS99JJIru2rvB9iyPyyv8Xj9dMjVQFzgzSgpxw5ZI3q3g2giBuhh3dFSZZKvvAMTaGP8GRf5Vjj0Etuc7EcguP7Ie%2FTWIb8kTv0FM34yEZnzmqNnMYOZVVzD%2BhcWuaYpzrNrhNKiI4oMFgoXGnnX8p4S2PSmppI%2FwGpmqzj2Yq%2FTE%2FjE%2FGBBj1w%2BRHL%2BOhEL%2BValdjC2sR61cnawklMqafnkhw3JbfwSiZZhuQYxxkpfs4S8xRfU0ghQVKxDWF%2BBcANguNwYtrc4awlMg2T%2FWjGc%2FEaN1laASmyKAEESylxrB5CqEblj24BqIFCVAQF%2FTbkUo5Xp26pDt0vJoln0k3YpqVp1MBy2UVhSrXbEjnKvivmMmgpUEPDHOv1p%2BiyD7%2B5a7MLchpgG6%2F6D5YPRmFY3n44lBw%2BY2tvz5J4eFO3rhqzvR%2F8knu4RvYpSs0ywMhYIJWQMofuyvooplJKalYN4WazITjDnltTBBjqkAf8YYCKVT%2F8oXay%2F6uO3L1V4pkzxhlArSUJAUFe5CRavnTMIl9q57wPYw%2FXjoiq5qwFgyLRwxxikG%2Bf9vY4eKLoy3T%2F5Z%2BV9bZ2mvFt1TYv7d5EDNGAZ3LCeTgvd3Idn1oHHZ2ZE9gcH41eqT0bOMOzqJRvA%2FwftQMhYbDyjtldBlkr5nCVzDQBU80wVFOLGmCHP%2F48w2APuXt3DQbjnbPFZQkAq&X-Amz-Signature=3ee27fa727fe4034b8643f25111aba75ca707b0f16d10f8f3b5551249b07a31d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3AXPCJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdJYaFYPQ1HBg5ZCRcXeNdFW1rMVx%2FYIw1mQeVEcxLgIhALnK56eEDGf2zHNaEUefC6snfNU783aoAUvhuMGdaOi8Kv8DCFIQABoMNjM3NDIzMTgzODA1IgzhTF6YRZPZMSBZ%2B8sq3AOWYD9PZ05PHMtcbKzSpiyoGKdRX4GNfL4h2rnN9okMDk7kqBwT5CvyVlEvfosQusGnAajBtRHDP2sqmUDmyJOth%2FDTmiAeL%2BOEiSxL2xoEdnRWmWpe0FhC9F8KSiu6kwFuUSKWG6ZHN29Sv412euTqBjD7gBh5QS99JJIru2rvB9iyPyyv8Xj9dMjVQFzgzSgpxw5ZI3q3g2giBuhh3dFSZZKvvAMTaGP8GRf5Vjj0Etuc7EcguP7Ie%2FTWIb8kTv0FM34yEZnzmqNnMYOZVVzD%2BhcWuaYpzrNrhNKiI4oMFgoXGnnX8p4S2PSmppI%2FwGpmqzj2Yq%2FTE%2FjE%2FGBBj1w%2BRHL%2BOhEL%2BValdjC2sR61cnawklMqafnkhw3JbfwSiZZhuQYxxkpfs4S8xRfU0ghQVKxDWF%2BBcANguNwYtrc4awlMg2T%2FWjGc%2FEaN1laASmyKAEESylxrB5CqEblj24BqIFCVAQF%2FTbkUo5Xp26pDt0vJoln0k3YpqVp1MBy2UVhSrXbEjnKvivmMmgpUEPDHOv1p%2BiyD7%2B5a7MLchpgG6%2F6D5YPRmFY3n44lBw%2BY2tvz5J4eFO3rhqzvR%2F8knu4RvYpSs0ywMhYIJWQMofuyvooplJKalYN4WazITjDnltTBBjqkAf8YYCKVT%2F8oXay%2F6uO3L1V4pkzxhlArSUJAUFe5CRavnTMIl9q57wPYw%2FXjoiq5qwFgyLRwxxikG%2Bf9vY4eKLoy3T%2F5Z%2BV9bZ2mvFt1TYv7d5EDNGAZ3LCeTgvd3Idn1oHHZ2ZE9gcH41eqT0bOMOzqJRvA%2FwftQMhYbDyjtldBlkr5nCVzDQBU80wVFOLGmCHP%2F48w2APuXt3DQbjnbPFZQkAq&X-Amz-Signature=e0c83846fa99e89f8839518ee8320abb66918be631bc6237927ff7404864e84d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3AXPCJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdJYaFYPQ1HBg5ZCRcXeNdFW1rMVx%2FYIw1mQeVEcxLgIhALnK56eEDGf2zHNaEUefC6snfNU783aoAUvhuMGdaOi8Kv8DCFIQABoMNjM3NDIzMTgzODA1IgzhTF6YRZPZMSBZ%2B8sq3AOWYD9PZ05PHMtcbKzSpiyoGKdRX4GNfL4h2rnN9okMDk7kqBwT5CvyVlEvfosQusGnAajBtRHDP2sqmUDmyJOth%2FDTmiAeL%2BOEiSxL2xoEdnRWmWpe0FhC9F8KSiu6kwFuUSKWG6ZHN29Sv412euTqBjD7gBh5QS99JJIru2rvB9iyPyyv8Xj9dMjVQFzgzSgpxw5ZI3q3g2giBuhh3dFSZZKvvAMTaGP8GRf5Vjj0Etuc7EcguP7Ie%2FTWIb8kTv0FM34yEZnzmqNnMYOZVVzD%2BhcWuaYpzrNrhNKiI4oMFgoXGnnX8p4S2PSmppI%2FwGpmqzj2Yq%2FTE%2FjE%2FGBBj1w%2BRHL%2BOhEL%2BValdjC2sR61cnawklMqafnkhw3JbfwSiZZhuQYxxkpfs4S8xRfU0ghQVKxDWF%2BBcANguNwYtrc4awlMg2T%2FWjGc%2FEaN1laASmyKAEESylxrB5CqEblj24BqIFCVAQF%2FTbkUo5Xp26pDt0vJoln0k3YpqVp1MBy2UVhSrXbEjnKvivmMmgpUEPDHOv1p%2BiyD7%2B5a7MLchpgG6%2F6D5YPRmFY3n44lBw%2BY2tvz5J4eFO3rhqzvR%2F8knu4RvYpSs0ywMhYIJWQMofuyvooplJKalYN4WazITjDnltTBBjqkAf8YYCKVT%2F8oXay%2F6uO3L1V4pkzxhlArSUJAUFe5CRavnTMIl9q57wPYw%2FXjoiq5qwFgyLRwxxikG%2Bf9vY4eKLoy3T%2F5Z%2BV9bZ2mvFt1TYv7d5EDNGAZ3LCeTgvd3Idn1oHHZ2ZE9gcH41eqT0bOMOzqJRvA%2FwftQMhYbDyjtldBlkr5nCVzDQBU80wVFOLGmCHP%2F48w2APuXt3DQbjnbPFZQkAq&X-Amz-Signature=38367d26e959c9cab9cc0947be9ef29412802c8c07b7f2a5d4ab784165a0fd28&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

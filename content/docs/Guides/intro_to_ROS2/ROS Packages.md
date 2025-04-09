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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SSZOR2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCd4JGLY2gxyo7YZzvr6TFDmg45W5y%2FhsJ6s3oSVymGMQIhANQv1JKKQ3kcCoq4AjZfrsj5jY3emUOVfbVN2uuMwk7CKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDQHz23Xy0wNRtbdYq3ANED7OUq1scbVIveP0KOgWFRJpJT063pBDCy%2BPK5WKSnDvvArE1Vnl0wNNmW2PvPAQIud9WC%2FgKrCKLU%2BgHtzCjRrUo7GMJ4C39TyLzitX0UAAX6DPSynUA4Ja9RcNZbUdfTL9n%2FzOZFYlOMEdtJkiXNWslxB16m9Zqr%2Bwz07kL3JXxahpiALhWPO1dMw6aHdDJlSUCP40yd7r337pheM0EFqN2nM%2B2dL1%2FL%2FqY%2FNtt%2BFtfvb6pVJ%2FBaDzrzYLVUd8EqKbfWZX37rbmwZWi7gmHnY1SWZCFQEmxZRqNJ7oqUBqcU9rzKLHoaXooC6TV2buepypiUqQ6y1CoNqtID9hINR%2FUkL9fUR2E7Yr8eApInA4bRVVH8lLCkDjt3UAYYuMb635vf%2F5X6c7I9T7XaznDJogUXLpJv7UNHVFcLUSXgtrTnfdC%2FoHsAdhV4PtvqxzLz75olPSeJA2UzR3lJvSMicjzaiRDy6IXd%2FiUbPg2IdAo1jjxdMfJCUltB6SrzLHZnkZrKhHxxw%2F818VlZ17pZIIKZ7UjL5wcjmID3DajbbGL6r2WA8OYPTWZQUzQanBtyU%2FAFCo4LFRqR%2BuvfYLnUbnLXl0haAgt0vkzmW%2BJkjbQxbvTCMWerOBZRjCt%2Fdm%2FBjqkAdPHgmzwKWzroYJ%2FV6pn%2FkaUzTabLLk%2BRceqeetSUBgQST6kO%2BLV%2BLYN6szeVw3CG%2BjOlsKUA2Ws6IdjlHmjz5X5a3gg3aPG1gM7B49z2lg9OX6ShjWKscD%2BDj%2FBf2KzqwttdB6%2B4R%2Fr0NuiFZ9GI14%2B9DJWGmgBM%2F9zSmguuuj6tzTjtYjHtNABfC%2B3u5SRMvUnbfkHw67sa14zcpw6VWDKWEFm&X-Amz-Signature=c169a49470a6e7db7b61abd0cd1801e11413b1bd8aaf1cf71881ec26eaa15f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SSZOR2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCd4JGLY2gxyo7YZzvr6TFDmg45W5y%2FhsJ6s3oSVymGMQIhANQv1JKKQ3kcCoq4AjZfrsj5jY3emUOVfbVN2uuMwk7CKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDQHz23Xy0wNRtbdYq3ANED7OUq1scbVIveP0KOgWFRJpJT063pBDCy%2BPK5WKSnDvvArE1Vnl0wNNmW2PvPAQIud9WC%2FgKrCKLU%2BgHtzCjRrUo7GMJ4C39TyLzitX0UAAX6DPSynUA4Ja9RcNZbUdfTL9n%2FzOZFYlOMEdtJkiXNWslxB16m9Zqr%2Bwz07kL3JXxahpiALhWPO1dMw6aHdDJlSUCP40yd7r337pheM0EFqN2nM%2B2dL1%2FL%2FqY%2FNtt%2BFtfvb6pVJ%2FBaDzrzYLVUd8EqKbfWZX37rbmwZWi7gmHnY1SWZCFQEmxZRqNJ7oqUBqcU9rzKLHoaXooC6TV2buepypiUqQ6y1CoNqtID9hINR%2FUkL9fUR2E7Yr8eApInA4bRVVH8lLCkDjt3UAYYuMb635vf%2F5X6c7I9T7XaznDJogUXLpJv7UNHVFcLUSXgtrTnfdC%2FoHsAdhV4PtvqxzLz75olPSeJA2UzR3lJvSMicjzaiRDy6IXd%2FiUbPg2IdAo1jjxdMfJCUltB6SrzLHZnkZrKhHxxw%2F818VlZ17pZIIKZ7UjL5wcjmID3DajbbGL6r2WA8OYPTWZQUzQanBtyU%2FAFCo4LFRqR%2BuvfYLnUbnLXl0haAgt0vkzmW%2BJkjbQxbvTCMWerOBZRjCt%2Fdm%2FBjqkAdPHgmzwKWzroYJ%2FV6pn%2FkaUzTabLLk%2BRceqeetSUBgQST6kO%2BLV%2BLYN6szeVw3CG%2BjOlsKUA2Ws6IdjlHmjz5X5a3gg3aPG1gM7B49z2lg9OX6ShjWKscD%2BDj%2FBf2KzqwttdB6%2B4R%2Fr0NuiFZ9GI14%2B9DJWGmgBM%2F9zSmguuuj6tzTjtYjHtNABfC%2B3u5SRMvUnbfkHw67sa14zcpw6VWDKWEFm&X-Amz-Signature=b0de045e736f172d4dae703a5c7cb954e2ed4456f87209a701cd7c70c3269c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SSZOR2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCd4JGLY2gxyo7YZzvr6TFDmg45W5y%2FhsJ6s3oSVymGMQIhANQv1JKKQ3kcCoq4AjZfrsj5jY3emUOVfbVN2uuMwk7CKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDQHz23Xy0wNRtbdYq3ANED7OUq1scbVIveP0KOgWFRJpJT063pBDCy%2BPK5WKSnDvvArE1Vnl0wNNmW2PvPAQIud9WC%2FgKrCKLU%2BgHtzCjRrUo7GMJ4C39TyLzitX0UAAX6DPSynUA4Ja9RcNZbUdfTL9n%2FzOZFYlOMEdtJkiXNWslxB16m9Zqr%2Bwz07kL3JXxahpiALhWPO1dMw6aHdDJlSUCP40yd7r337pheM0EFqN2nM%2B2dL1%2FL%2FqY%2FNtt%2BFtfvb6pVJ%2FBaDzrzYLVUd8EqKbfWZX37rbmwZWi7gmHnY1SWZCFQEmxZRqNJ7oqUBqcU9rzKLHoaXooC6TV2buepypiUqQ6y1CoNqtID9hINR%2FUkL9fUR2E7Yr8eApInA4bRVVH8lLCkDjt3UAYYuMb635vf%2F5X6c7I9T7XaznDJogUXLpJv7UNHVFcLUSXgtrTnfdC%2FoHsAdhV4PtvqxzLz75olPSeJA2UzR3lJvSMicjzaiRDy6IXd%2FiUbPg2IdAo1jjxdMfJCUltB6SrzLHZnkZrKhHxxw%2F818VlZ17pZIIKZ7UjL5wcjmID3DajbbGL6r2WA8OYPTWZQUzQanBtyU%2FAFCo4LFRqR%2BuvfYLnUbnLXl0haAgt0vkzmW%2BJkjbQxbvTCMWerOBZRjCt%2Fdm%2FBjqkAdPHgmzwKWzroYJ%2FV6pn%2FkaUzTabLLk%2BRceqeetSUBgQST6kO%2BLV%2BLYN6szeVw3CG%2BjOlsKUA2Ws6IdjlHmjz5X5a3gg3aPG1gM7B49z2lg9OX6ShjWKscD%2BDj%2FBf2KzqwttdB6%2B4R%2Fr0NuiFZ9GI14%2B9DJWGmgBM%2F9zSmguuuj6tzTjtYjHtNABfC%2B3u5SRMvUnbfkHw67sa14zcpw6VWDKWEFm&X-Amz-Signature=706b19a24ca1b39280011effeed2c5bbb2d9aeee3590d743531f51c714cd3457&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SSZOR2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCd4JGLY2gxyo7YZzvr6TFDmg45W5y%2FhsJ6s3oSVymGMQIhANQv1JKKQ3kcCoq4AjZfrsj5jY3emUOVfbVN2uuMwk7CKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDQHz23Xy0wNRtbdYq3ANED7OUq1scbVIveP0KOgWFRJpJT063pBDCy%2BPK5WKSnDvvArE1Vnl0wNNmW2PvPAQIud9WC%2FgKrCKLU%2BgHtzCjRrUo7GMJ4C39TyLzitX0UAAX6DPSynUA4Ja9RcNZbUdfTL9n%2FzOZFYlOMEdtJkiXNWslxB16m9Zqr%2Bwz07kL3JXxahpiALhWPO1dMw6aHdDJlSUCP40yd7r337pheM0EFqN2nM%2B2dL1%2FL%2FqY%2FNtt%2BFtfvb6pVJ%2FBaDzrzYLVUd8EqKbfWZX37rbmwZWi7gmHnY1SWZCFQEmxZRqNJ7oqUBqcU9rzKLHoaXooC6TV2buepypiUqQ6y1CoNqtID9hINR%2FUkL9fUR2E7Yr8eApInA4bRVVH8lLCkDjt3UAYYuMb635vf%2F5X6c7I9T7XaznDJogUXLpJv7UNHVFcLUSXgtrTnfdC%2FoHsAdhV4PtvqxzLz75olPSeJA2UzR3lJvSMicjzaiRDy6IXd%2FiUbPg2IdAo1jjxdMfJCUltB6SrzLHZnkZrKhHxxw%2F818VlZ17pZIIKZ7UjL5wcjmID3DajbbGL6r2WA8OYPTWZQUzQanBtyU%2FAFCo4LFRqR%2BuvfYLnUbnLXl0haAgt0vkzmW%2BJkjbQxbvTCMWerOBZRjCt%2Fdm%2FBjqkAdPHgmzwKWzroYJ%2FV6pn%2FkaUzTabLLk%2BRceqeetSUBgQST6kO%2BLV%2BLYN6szeVw3CG%2BjOlsKUA2Ws6IdjlHmjz5X5a3gg3aPG1gM7B49z2lg9OX6ShjWKscD%2BDj%2FBf2KzqwttdB6%2B4R%2Fr0NuiFZ9GI14%2B9DJWGmgBM%2F9zSmguuuj6tzTjtYjHtNABfC%2B3u5SRMvUnbfkHw67sa14zcpw6VWDKWEFm&X-Amz-Signature=6f00e4da28c7f604966d2167be65e33794f11d544cea2c6d2637e3dca37f7a97&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SSZOR2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCd4JGLY2gxyo7YZzvr6TFDmg45W5y%2FhsJ6s3oSVymGMQIhANQv1JKKQ3kcCoq4AjZfrsj5jY3emUOVfbVN2uuMwk7CKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDQHz23Xy0wNRtbdYq3ANED7OUq1scbVIveP0KOgWFRJpJT063pBDCy%2BPK5WKSnDvvArE1Vnl0wNNmW2PvPAQIud9WC%2FgKrCKLU%2BgHtzCjRrUo7GMJ4C39TyLzitX0UAAX6DPSynUA4Ja9RcNZbUdfTL9n%2FzOZFYlOMEdtJkiXNWslxB16m9Zqr%2Bwz07kL3JXxahpiALhWPO1dMw6aHdDJlSUCP40yd7r337pheM0EFqN2nM%2B2dL1%2FL%2FqY%2FNtt%2BFtfvb6pVJ%2FBaDzrzYLVUd8EqKbfWZX37rbmwZWi7gmHnY1SWZCFQEmxZRqNJ7oqUBqcU9rzKLHoaXooC6TV2buepypiUqQ6y1CoNqtID9hINR%2FUkL9fUR2E7Yr8eApInA4bRVVH8lLCkDjt3UAYYuMb635vf%2F5X6c7I9T7XaznDJogUXLpJv7UNHVFcLUSXgtrTnfdC%2FoHsAdhV4PtvqxzLz75olPSeJA2UzR3lJvSMicjzaiRDy6IXd%2FiUbPg2IdAo1jjxdMfJCUltB6SrzLHZnkZrKhHxxw%2F818VlZ17pZIIKZ7UjL5wcjmID3DajbbGL6r2WA8OYPTWZQUzQanBtyU%2FAFCo4LFRqR%2BuvfYLnUbnLXl0haAgt0vkzmW%2BJkjbQxbvTCMWerOBZRjCt%2Fdm%2FBjqkAdPHgmzwKWzroYJ%2FV6pn%2FkaUzTabLLk%2BRceqeetSUBgQST6kO%2BLV%2BLYN6szeVw3CG%2BjOlsKUA2Ws6IdjlHmjz5X5a3gg3aPG1gM7B49z2lg9OX6ShjWKscD%2BDj%2FBf2KzqwttdB6%2B4R%2Fr0NuiFZ9GI14%2B9DJWGmgBM%2F9zSmguuuj6tzTjtYjHtNABfC%2B3u5SRMvUnbfkHw67sa14zcpw6VWDKWEFm&X-Amz-Signature=95146e105a6c1c866ab6e6779750c37a5ed9a78258f357f7c3860f61a9cde2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SSZOR2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCd4JGLY2gxyo7YZzvr6TFDmg45W5y%2FhsJ6s3oSVymGMQIhANQv1JKKQ3kcCoq4AjZfrsj5jY3emUOVfbVN2uuMwk7CKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDQHz23Xy0wNRtbdYq3ANED7OUq1scbVIveP0KOgWFRJpJT063pBDCy%2BPK5WKSnDvvArE1Vnl0wNNmW2PvPAQIud9WC%2FgKrCKLU%2BgHtzCjRrUo7GMJ4C39TyLzitX0UAAX6DPSynUA4Ja9RcNZbUdfTL9n%2FzOZFYlOMEdtJkiXNWslxB16m9Zqr%2Bwz07kL3JXxahpiALhWPO1dMw6aHdDJlSUCP40yd7r337pheM0EFqN2nM%2B2dL1%2FL%2FqY%2FNtt%2BFtfvb6pVJ%2FBaDzrzYLVUd8EqKbfWZX37rbmwZWi7gmHnY1SWZCFQEmxZRqNJ7oqUBqcU9rzKLHoaXooC6TV2buepypiUqQ6y1CoNqtID9hINR%2FUkL9fUR2E7Yr8eApInA4bRVVH8lLCkDjt3UAYYuMb635vf%2F5X6c7I9T7XaznDJogUXLpJv7UNHVFcLUSXgtrTnfdC%2FoHsAdhV4PtvqxzLz75olPSeJA2UzR3lJvSMicjzaiRDy6IXd%2FiUbPg2IdAo1jjxdMfJCUltB6SrzLHZnkZrKhHxxw%2F818VlZ17pZIIKZ7UjL5wcjmID3DajbbGL6r2WA8OYPTWZQUzQanBtyU%2FAFCo4LFRqR%2BuvfYLnUbnLXl0haAgt0vkzmW%2BJkjbQxbvTCMWerOBZRjCt%2Fdm%2FBjqkAdPHgmzwKWzroYJ%2FV6pn%2FkaUzTabLLk%2BRceqeetSUBgQST6kO%2BLV%2BLYN6szeVw3CG%2BjOlsKUA2Ws6IdjlHmjz5X5a3gg3aPG1gM7B49z2lg9OX6ShjWKscD%2BDj%2FBf2KzqwttdB6%2B4R%2Fr0NuiFZ9GI14%2B9DJWGmgBM%2F9zSmguuuj6tzTjtYjHtNABfC%2B3u5SRMvUnbfkHw67sa14zcpw6VWDKWEFm&X-Amz-Signature=e471180f824f28ca6cebf5aa988af0ec9ace1f54e227a1d9e2682c1ee685fd40&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SSZOR2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCd4JGLY2gxyo7YZzvr6TFDmg45W5y%2FhsJ6s3oSVymGMQIhANQv1JKKQ3kcCoq4AjZfrsj5jY3emUOVfbVN2uuMwk7CKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDQHz23Xy0wNRtbdYq3ANED7OUq1scbVIveP0KOgWFRJpJT063pBDCy%2BPK5WKSnDvvArE1Vnl0wNNmW2PvPAQIud9WC%2FgKrCKLU%2BgHtzCjRrUo7GMJ4C39TyLzitX0UAAX6DPSynUA4Ja9RcNZbUdfTL9n%2FzOZFYlOMEdtJkiXNWslxB16m9Zqr%2Bwz07kL3JXxahpiALhWPO1dMw6aHdDJlSUCP40yd7r337pheM0EFqN2nM%2B2dL1%2FL%2FqY%2FNtt%2BFtfvb6pVJ%2FBaDzrzYLVUd8EqKbfWZX37rbmwZWi7gmHnY1SWZCFQEmxZRqNJ7oqUBqcU9rzKLHoaXooC6TV2buepypiUqQ6y1CoNqtID9hINR%2FUkL9fUR2E7Yr8eApInA4bRVVH8lLCkDjt3UAYYuMb635vf%2F5X6c7I9T7XaznDJogUXLpJv7UNHVFcLUSXgtrTnfdC%2FoHsAdhV4PtvqxzLz75olPSeJA2UzR3lJvSMicjzaiRDy6IXd%2FiUbPg2IdAo1jjxdMfJCUltB6SrzLHZnkZrKhHxxw%2F818VlZ17pZIIKZ7UjL5wcjmID3DajbbGL6r2WA8OYPTWZQUzQanBtyU%2FAFCo4LFRqR%2BuvfYLnUbnLXl0haAgt0vkzmW%2BJkjbQxbvTCMWerOBZRjCt%2Fdm%2FBjqkAdPHgmzwKWzroYJ%2FV6pn%2FkaUzTabLLk%2BRceqeetSUBgQST6kO%2BLV%2BLYN6szeVw3CG%2BjOlsKUA2Ws6IdjlHmjz5X5a3gg3aPG1gM7B49z2lg9OX6ShjWKscD%2BDj%2FBf2KzqwttdB6%2B4R%2Fr0NuiFZ9GI14%2B9DJWGmgBM%2F9zSmguuuj6tzTjtYjHtNABfC%2B3u5SRMvUnbfkHw67sa14zcpw6VWDKWEFm&X-Amz-Signature=d0d41aee8f874bd57e2c93d4046c459ac9630ec5b4284c47cb54fdc6dfebf305&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK2VYZJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReqlc48dF%2BXf3jibLS%2FHJEDDFwn1Nn%2FGq8MgWcYclzQIgWXHIAiqli%2BVENhfDqsrRus7POiDnjs%2Fow7%2FUulWWWVwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3%2Bih0TQr%2BBmk5nrSrcAy7MIFJT6mxs3cwYGz7IDpdhufyUDK4iVIldWGa4DoM94C08JXFJWi%2F15rB%2FSaVgelYqEdHPesqUDsZV1QFi0D5eyAweVJDmxYIAgOeR7T5zs2ENmQs3gCRm8DzNjZ99g6nA12RqNyKSAJwlwbQoSpnaxaYUQlIhjh4goQOFCcv52mtVEPKsoYWXMDup6vvijQsq1daDwbGZpbZnLkVWahC2q4oS0%2Bk0mmKLG8EwRtHDTmXWtC1xZQOqrwF6zyV6%2BAP4nmB7X7sPbp7VUYbPuqcEH90TIrGlEq3PVc%2BFnYlCvSsl9XrKe8KlAG4%2BTgbu7j5sTDMmMsh31lC152FgXYZ2sJB49wHtYafOK6gOgeZZL5ek0GWOUANwoZ2xFr6G8dRL7Tx%2BybVI3Vo%2Bjqi8%2FwpcVg%2Bnl3Bc4bHxWKeEckaF7fEhJXk3Me2t5ohzouafWsPU%2Bfant6OQqMcGwkm2hpMGAyCPI16VAJr3QsqInvfu%2FxqeCKxsDtHtWxBhH%2BFRuocS%2BE6yXyw9smBwUbgQ5tF30kijuBw8DiEWK%2B6z8%2Fx1ckTuQkTVNSP37bBmw7dsoZLtGDsFzeQZmjrJuj4sRYcUsBReaxoXL4Ault6fUYY4EwxmyY3b7%2BCKJRVyMMzA1MIGOqUBBJtjaxPSBHyr7%2BTb69aCHhYIvxHuzqKksb%2BNzqaqkT3BSSLuhlAS4iVIoglYBwJEHZVjyhsQk0eQUX81oCaSbFZUbiwLV%2FobIoU37kjmLlUCe6YBbg8FPOf4MCpZYnzJDkG9l3qhVoMo3a2WKasoe9qPKLA3K%2FfG%2BbqCVyFKsjJwpKpxgzfGaL0aEH4kalGPjek5B4PEkOVHJBUu8MyKzK4exLtU&X-Amz-Signature=d89cdb74f7c573efa120b4fb5404c7637822a563f36f73e0fb4f60e53a214234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK2VYZJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReqlc48dF%2BXf3jibLS%2FHJEDDFwn1Nn%2FGq8MgWcYclzQIgWXHIAiqli%2BVENhfDqsrRus7POiDnjs%2Fow7%2FUulWWWVwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3%2Bih0TQr%2BBmk5nrSrcAy7MIFJT6mxs3cwYGz7IDpdhufyUDK4iVIldWGa4DoM94C08JXFJWi%2F15rB%2FSaVgelYqEdHPesqUDsZV1QFi0D5eyAweVJDmxYIAgOeR7T5zs2ENmQs3gCRm8DzNjZ99g6nA12RqNyKSAJwlwbQoSpnaxaYUQlIhjh4goQOFCcv52mtVEPKsoYWXMDup6vvijQsq1daDwbGZpbZnLkVWahC2q4oS0%2Bk0mmKLG8EwRtHDTmXWtC1xZQOqrwF6zyV6%2BAP4nmB7X7sPbp7VUYbPuqcEH90TIrGlEq3PVc%2BFnYlCvSsl9XrKe8KlAG4%2BTgbu7j5sTDMmMsh31lC152FgXYZ2sJB49wHtYafOK6gOgeZZL5ek0GWOUANwoZ2xFr6G8dRL7Tx%2BybVI3Vo%2Bjqi8%2FwpcVg%2Bnl3Bc4bHxWKeEckaF7fEhJXk3Me2t5ohzouafWsPU%2Bfant6OQqMcGwkm2hpMGAyCPI16VAJr3QsqInvfu%2FxqeCKxsDtHtWxBhH%2BFRuocS%2BE6yXyw9smBwUbgQ5tF30kijuBw8DiEWK%2B6z8%2Fx1ckTuQkTVNSP37bBmw7dsoZLtGDsFzeQZmjrJuj4sRYcUsBReaxoXL4Ault6fUYY4EwxmyY3b7%2BCKJRVyMMzA1MIGOqUBBJtjaxPSBHyr7%2BTb69aCHhYIvxHuzqKksb%2BNzqaqkT3BSSLuhlAS4iVIoglYBwJEHZVjyhsQk0eQUX81oCaSbFZUbiwLV%2FobIoU37kjmLlUCe6YBbg8FPOf4MCpZYnzJDkG9l3qhVoMo3a2WKasoe9qPKLA3K%2FfG%2BbqCVyFKsjJwpKpxgzfGaL0aEH4kalGPjek5B4PEkOVHJBUu8MyKzK4exLtU&X-Amz-Signature=3507b3a5ae527b56f8246454a4dbb6cb56e716ccc6e1261b3d04cc02dd978a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK2VYZJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReqlc48dF%2BXf3jibLS%2FHJEDDFwn1Nn%2FGq8MgWcYclzQIgWXHIAiqli%2BVENhfDqsrRus7POiDnjs%2Fow7%2FUulWWWVwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3%2Bih0TQr%2BBmk5nrSrcAy7MIFJT6mxs3cwYGz7IDpdhufyUDK4iVIldWGa4DoM94C08JXFJWi%2F15rB%2FSaVgelYqEdHPesqUDsZV1QFi0D5eyAweVJDmxYIAgOeR7T5zs2ENmQs3gCRm8DzNjZ99g6nA12RqNyKSAJwlwbQoSpnaxaYUQlIhjh4goQOFCcv52mtVEPKsoYWXMDup6vvijQsq1daDwbGZpbZnLkVWahC2q4oS0%2Bk0mmKLG8EwRtHDTmXWtC1xZQOqrwF6zyV6%2BAP4nmB7X7sPbp7VUYbPuqcEH90TIrGlEq3PVc%2BFnYlCvSsl9XrKe8KlAG4%2BTgbu7j5sTDMmMsh31lC152FgXYZ2sJB49wHtYafOK6gOgeZZL5ek0GWOUANwoZ2xFr6G8dRL7Tx%2BybVI3Vo%2Bjqi8%2FwpcVg%2Bnl3Bc4bHxWKeEckaF7fEhJXk3Me2t5ohzouafWsPU%2Bfant6OQqMcGwkm2hpMGAyCPI16VAJr3QsqInvfu%2FxqeCKxsDtHtWxBhH%2BFRuocS%2BE6yXyw9smBwUbgQ5tF30kijuBw8DiEWK%2B6z8%2Fx1ckTuQkTVNSP37bBmw7dsoZLtGDsFzeQZmjrJuj4sRYcUsBReaxoXL4Ault6fUYY4EwxmyY3b7%2BCKJRVyMMzA1MIGOqUBBJtjaxPSBHyr7%2BTb69aCHhYIvxHuzqKksb%2BNzqaqkT3BSSLuhlAS4iVIoglYBwJEHZVjyhsQk0eQUX81oCaSbFZUbiwLV%2FobIoU37kjmLlUCe6YBbg8FPOf4MCpZYnzJDkG9l3qhVoMo3a2WKasoe9qPKLA3K%2FfG%2BbqCVyFKsjJwpKpxgzfGaL0aEH4kalGPjek5B4PEkOVHJBUu8MyKzK4exLtU&X-Amz-Signature=ffaeab10cc745cf84f3e8fff123bef1f4109a77065239c96f3f6da03d462bee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK2VYZJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReqlc48dF%2BXf3jibLS%2FHJEDDFwn1Nn%2FGq8MgWcYclzQIgWXHIAiqli%2BVENhfDqsrRus7POiDnjs%2Fow7%2FUulWWWVwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3%2Bih0TQr%2BBmk5nrSrcAy7MIFJT6mxs3cwYGz7IDpdhufyUDK4iVIldWGa4DoM94C08JXFJWi%2F15rB%2FSaVgelYqEdHPesqUDsZV1QFi0D5eyAweVJDmxYIAgOeR7T5zs2ENmQs3gCRm8DzNjZ99g6nA12RqNyKSAJwlwbQoSpnaxaYUQlIhjh4goQOFCcv52mtVEPKsoYWXMDup6vvijQsq1daDwbGZpbZnLkVWahC2q4oS0%2Bk0mmKLG8EwRtHDTmXWtC1xZQOqrwF6zyV6%2BAP4nmB7X7sPbp7VUYbPuqcEH90TIrGlEq3PVc%2BFnYlCvSsl9XrKe8KlAG4%2BTgbu7j5sTDMmMsh31lC152FgXYZ2sJB49wHtYafOK6gOgeZZL5ek0GWOUANwoZ2xFr6G8dRL7Tx%2BybVI3Vo%2Bjqi8%2FwpcVg%2Bnl3Bc4bHxWKeEckaF7fEhJXk3Me2t5ohzouafWsPU%2Bfant6OQqMcGwkm2hpMGAyCPI16VAJr3QsqInvfu%2FxqeCKxsDtHtWxBhH%2BFRuocS%2BE6yXyw9smBwUbgQ5tF30kijuBw8DiEWK%2B6z8%2Fx1ckTuQkTVNSP37bBmw7dsoZLtGDsFzeQZmjrJuj4sRYcUsBReaxoXL4Ault6fUYY4EwxmyY3b7%2BCKJRVyMMzA1MIGOqUBBJtjaxPSBHyr7%2BTb69aCHhYIvxHuzqKksb%2BNzqaqkT3BSSLuhlAS4iVIoglYBwJEHZVjyhsQk0eQUX81oCaSbFZUbiwLV%2FobIoU37kjmLlUCe6YBbg8FPOf4MCpZYnzJDkG9l3qhVoMo3a2WKasoe9qPKLA3K%2FfG%2BbqCVyFKsjJwpKpxgzfGaL0aEH4kalGPjek5B4PEkOVHJBUu8MyKzK4exLtU&X-Amz-Signature=38d2cf2cc625f823e7a3d9ba412a6e6b0f329bb49aba92e700b3dbeab7eaf6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK2VYZJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReqlc48dF%2BXf3jibLS%2FHJEDDFwn1Nn%2FGq8MgWcYclzQIgWXHIAiqli%2BVENhfDqsrRus7POiDnjs%2Fow7%2FUulWWWVwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3%2Bih0TQr%2BBmk5nrSrcAy7MIFJT6mxs3cwYGz7IDpdhufyUDK4iVIldWGa4DoM94C08JXFJWi%2F15rB%2FSaVgelYqEdHPesqUDsZV1QFi0D5eyAweVJDmxYIAgOeR7T5zs2ENmQs3gCRm8DzNjZ99g6nA12RqNyKSAJwlwbQoSpnaxaYUQlIhjh4goQOFCcv52mtVEPKsoYWXMDup6vvijQsq1daDwbGZpbZnLkVWahC2q4oS0%2Bk0mmKLG8EwRtHDTmXWtC1xZQOqrwF6zyV6%2BAP4nmB7X7sPbp7VUYbPuqcEH90TIrGlEq3PVc%2BFnYlCvSsl9XrKe8KlAG4%2BTgbu7j5sTDMmMsh31lC152FgXYZ2sJB49wHtYafOK6gOgeZZL5ek0GWOUANwoZ2xFr6G8dRL7Tx%2BybVI3Vo%2Bjqi8%2FwpcVg%2Bnl3Bc4bHxWKeEckaF7fEhJXk3Me2t5ohzouafWsPU%2Bfant6OQqMcGwkm2hpMGAyCPI16VAJr3QsqInvfu%2FxqeCKxsDtHtWxBhH%2BFRuocS%2BE6yXyw9smBwUbgQ5tF30kijuBw8DiEWK%2B6z8%2Fx1ckTuQkTVNSP37bBmw7dsoZLtGDsFzeQZmjrJuj4sRYcUsBReaxoXL4Ault6fUYY4EwxmyY3b7%2BCKJRVyMMzA1MIGOqUBBJtjaxPSBHyr7%2BTb69aCHhYIvxHuzqKksb%2BNzqaqkT3BSSLuhlAS4iVIoglYBwJEHZVjyhsQk0eQUX81oCaSbFZUbiwLV%2FobIoU37kjmLlUCe6YBbg8FPOf4MCpZYnzJDkG9l3qhVoMo3a2WKasoe9qPKLA3K%2FfG%2BbqCVyFKsjJwpKpxgzfGaL0aEH4kalGPjek5B4PEkOVHJBUu8MyKzK4exLtU&X-Amz-Signature=6e9dd7348bf9eaab0587902d2570bdd4923b362b4f1b0dbacfd801bc27526b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK2VYZJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReqlc48dF%2BXf3jibLS%2FHJEDDFwn1Nn%2FGq8MgWcYclzQIgWXHIAiqli%2BVENhfDqsrRus7POiDnjs%2Fow7%2FUulWWWVwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3%2Bih0TQr%2BBmk5nrSrcAy7MIFJT6mxs3cwYGz7IDpdhufyUDK4iVIldWGa4DoM94C08JXFJWi%2F15rB%2FSaVgelYqEdHPesqUDsZV1QFi0D5eyAweVJDmxYIAgOeR7T5zs2ENmQs3gCRm8DzNjZ99g6nA12RqNyKSAJwlwbQoSpnaxaYUQlIhjh4goQOFCcv52mtVEPKsoYWXMDup6vvijQsq1daDwbGZpbZnLkVWahC2q4oS0%2Bk0mmKLG8EwRtHDTmXWtC1xZQOqrwF6zyV6%2BAP4nmB7X7sPbp7VUYbPuqcEH90TIrGlEq3PVc%2BFnYlCvSsl9XrKe8KlAG4%2BTgbu7j5sTDMmMsh31lC152FgXYZ2sJB49wHtYafOK6gOgeZZL5ek0GWOUANwoZ2xFr6G8dRL7Tx%2BybVI3Vo%2Bjqi8%2FwpcVg%2Bnl3Bc4bHxWKeEckaF7fEhJXk3Me2t5ohzouafWsPU%2Bfant6OQqMcGwkm2hpMGAyCPI16VAJr3QsqInvfu%2FxqeCKxsDtHtWxBhH%2BFRuocS%2BE6yXyw9smBwUbgQ5tF30kijuBw8DiEWK%2B6z8%2Fx1ckTuQkTVNSP37bBmw7dsoZLtGDsFzeQZmjrJuj4sRYcUsBReaxoXL4Ault6fUYY4EwxmyY3b7%2BCKJRVyMMzA1MIGOqUBBJtjaxPSBHyr7%2BTb69aCHhYIvxHuzqKksb%2BNzqaqkT3BSSLuhlAS4iVIoglYBwJEHZVjyhsQk0eQUX81oCaSbFZUbiwLV%2FobIoU37kjmLlUCe6YBbg8FPOf4MCpZYnzJDkG9l3qhVoMo3a2WKasoe9qPKLA3K%2FfG%2BbqCVyFKsjJwpKpxgzfGaL0aEH4kalGPjek5B4PEkOVHJBUu8MyKzK4exLtU&X-Amz-Signature=8faa86099f28731cbd81b911c2ccc5a4cb6340227ca280545fb558f0eaeb6125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK2VYZJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReqlc48dF%2BXf3jibLS%2FHJEDDFwn1Nn%2FGq8MgWcYclzQIgWXHIAiqli%2BVENhfDqsrRus7POiDnjs%2Fow7%2FUulWWWVwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3%2Bih0TQr%2BBmk5nrSrcAy7MIFJT6mxs3cwYGz7IDpdhufyUDK4iVIldWGa4DoM94C08JXFJWi%2F15rB%2FSaVgelYqEdHPesqUDsZV1QFi0D5eyAweVJDmxYIAgOeR7T5zs2ENmQs3gCRm8DzNjZ99g6nA12RqNyKSAJwlwbQoSpnaxaYUQlIhjh4goQOFCcv52mtVEPKsoYWXMDup6vvijQsq1daDwbGZpbZnLkVWahC2q4oS0%2Bk0mmKLG8EwRtHDTmXWtC1xZQOqrwF6zyV6%2BAP4nmB7X7sPbp7VUYbPuqcEH90TIrGlEq3PVc%2BFnYlCvSsl9XrKe8KlAG4%2BTgbu7j5sTDMmMsh31lC152FgXYZ2sJB49wHtYafOK6gOgeZZL5ek0GWOUANwoZ2xFr6G8dRL7Tx%2BybVI3Vo%2Bjqi8%2FwpcVg%2Bnl3Bc4bHxWKeEckaF7fEhJXk3Me2t5ohzouafWsPU%2Bfant6OQqMcGwkm2hpMGAyCPI16VAJr3QsqInvfu%2FxqeCKxsDtHtWxBhH%2BFRuocS%2BE6yXyw9smBwUbgQ5tF30kijuBw8DiEWK%2B6z8%2Fx1ckTuQkTVNSP37bBmw7dsoZLtGDsFzeQZmjrJuj4sRYcUsBReaxoXL4Ault6fUYY4EwxmyY3b7%2BCKJRVyMMzA1MIGOqUBBJtjaxPSBHyr7%2BTb69aCHhYIvxHuzqKksb%2BNzqaqkT3BSSLuhlAS4iVIoglYBwJEHZVjyhsQk0eQUX81oCaSbFZUbiwLV%2FobIoU37kjmLlUCe6YBbg8FPOf4MCpZYnzJDkG9l3qhVoMo3a2WKasoe9qPKLA3K%2FfG%2BbqCVyFKsjJwpKpxgzfGaL0aEH4kalGPjek5B4PEkOVHJBUu8MyKzK4exLtU&X-Amz-Signature=98c8dbcef0d1f3297e0d9c9fcc553cdfda06a43b65a0a64e95ca79e1df5ca073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

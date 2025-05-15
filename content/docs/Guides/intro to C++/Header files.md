---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUGZGJH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDtXSmARNyQAdYKOZRvONLDIB498pISJxSBs3alNqUTlAIgNQCCwu4KD%2B2ezjQ5HXa4aptJbylQR%2BqwTKGXauG9ov0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNfTkZb5P6POvOOAIyrcAys7oPi2iMII%2BR%2FenvFczcmnNWc5N9%2BiuyQCw1WpJMWfbC%2FSGs0G5HQh4c4c8oIxw9u8J44d3pPGm9T1sV9%2F4we7J%2F%2FpOSOTCUV297yTAqf7PX0Lwsloa901JEdBaLTIEBF2UIERiK6jLEvvkFmnhr8JTJoJj68EN27wPAkwoFT6rR8ijeh2G5LgU9eySqg1kswmQ0JqP%2FzHKHlNQgMpWQ5vq9vcQ9vT1GHjqYgF3iXV2sugFL2JaiD29rRuL0ejCXzrq4%2Bvj8TbUgdPjZ1ow58H584%2FHB%2Bx5xUSIHyLJ9TMPuQ8ye5NQkXsD8GJ4w7TaYf58uXjTWcareAcsro18fUB8pl5EgQvj023v7URWuV0mclBI3O37Zrk0tfSLpqoByDDPDY4DK7DbPEHd0b%2FXxhUKkgnIaXGIcCe7nEYLAGY9giwasjf4EQvaLfFtAG%2BbcM4xtGUGhc9EkEJzmgAFYL7aypdAX%2F06%2FLCRBo34t9D%2FehVJWgQHe%2B4BEoBvy%2BHlUtKViZRUOhgDaoirPYk69p3PwPZQ%2F%2FepIQ7QVbxwDv7Pp1IXfLZt2MjPI07tLTupkFDOaJoN0tWrtndETh0TZPpG1uZ7M8DjcpsEyUzozn5zyvzfsoYl%2Bf9HMNAMNf7mMEGOqUBE9nQi099jMoWI%2BKhKOavIHq%2FYw5FUCvS04gY87KtosGIdHn%2Ft7NUS3d5KOx76O4j54ijH454j47b%2BQJ616EgGu3FUVo42%2FnIoT6t2d64a%2FbMyZ%2B75m%2FFX0kt360XuV64E9oXcn48PFWLEdONm5FjjZ3iDBKNXYFafShh0x1fyDE3ijmK%2FIt%2B4cz0xB%2BzIcHt3uos%2BfziPhJzZg9Foex2B3tFdK%2Fb&X-Amz-Signature=5098952938334a4770d8e5f93ed1fd55cb69b3b700d970bc90c1cf32e9ae2bba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

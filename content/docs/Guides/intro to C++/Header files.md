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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSBGLIR%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaelovMe2U8JWMyMBVfQARrMLmGJ3KdmqMcWvVDaLQoAiBkIq8je43okGYMCVBw7ouka10OsEWWDoIS6I8PdX99yCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMA3uV4l35BIUtMLXfKtwDj8EOJPdiy6UXqcdHXRw6K9APQRWQtHsc9SBP8venB%2BsYvLCjjuE5OVy4J3pj3KwPcg%2BwzZ7r44kHs%2Fg4X2Z%2BpPp3PeH6SjNxtnzGoyWxL3qK5%2FwY70OEbVsOY6aOTbXclf7WmEYh5J8uCEMvz9ap5HMBQh8oUGQrLEbzi8M%2BHsnV30MjLyNuV6iPy1e%2BSHQDgMa0Z4p3vE6M%2Bwn6SB9GiDFukPgqe14QjuD%2FKRvOARmzzU6%2Bhu2fv1xkcIiKyvlsxajdVtmMX%2BYeBzEcd8KIHQ2e%2B6fFKSMiqw3kOJSnuDl5QarJFRoao0vN6PfzwXnTyDTqclyE4nhyickl1C403NUpgB%2BnDvxnakQpoEW6tRSMjfr7j7fYQeOUKKCw%2BG9Hbs3o%2FTBejBKmZ2D%2BOy3nyfZ9RZyfp8jVdZHhBrgbkZ%2F22bx5bRJrRoVH%2BSO7Ko2keLlIoAfmVRzLSjBlVY4kTkKzeD5rlZO7TCWUK5tL%2FtQP6q1%2BwvOu46yPNW%2FYMECsRHe8KyRSzpvyuMwcuCvAQzrhZVJQqgppf72jkaJM9FLOiId24x2DXMDNYEcvTeTrMp7902P5ZAzVroQ%2By59cbA4X6yUYH%2FYWE41WX2cc63S%2FjrFgEZ6lZx8YCNQwo930vwY6pgG8Z5Zx3ELF5eQkMHuqDTrIvIb4Y0NPQpLc3c6ARYkIlHHFhY3dErgyrxCLrZbxV6kfVG8z3%2BtaSyw3HzCMGWYhijmKuiNgSC%2BOdunFCEqYB85yEAAUyHRi2Qu1fFq9BI0CGJ4kH5OGRIYBX2lEfPESkH%2F0%2BOCjBx5sD59NFikl8g2jrJHRzMy7Q8VZ8jokXPsMYQUJSIZJMn4XOw7EWVSu5G3Bk%2BbE&X-Amz-Signature=87ab5f487c4be66ad7797eb5e3acb632aa943e9532f927282b83162628bd1353&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY5SCW2P%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCID%2FriNksijpTmj5Y0D1aQKzZL0R24d3t88oVW2lcZq74AiAGI4VyxJLV2ZOwx6jd4l6bM94pw5CwOxDQ5NzM2JUB6Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMWgY991QZF8qg1B0RKtwDRcCUyCJDf%2BqE%2BpVHqmKCUjiZlhgaZ12VnxzQ%2F9lUY5DA%2BA9%2Btxp4DJBs8yDZkOr98Tb1pgE3ruOJ7bXkt8mUCy6yke6GMY3WtpG5EN282FXTUYf9JJ%2FK7YOmbY4krE0oUob%2B8qADjmFZ50zGXBtKQ4dtr0zro%2FiYw5Q1kD0FsVwe3ledUoWdxzBWG8fu5aaqihFvy2sate82ljR4VDE6DtpZkEaQ9orC9b9W31hXGt5%2BnwB3rsAOufFugwillpaQjFFnEQHu5K1gzi5k%2BKintUEcfCSBR3PH%2BwOnV2TnwNPqlNp4np%2FpeQLpJLq%2BcP4tjDqvp203%2BgQQ5bJpH%2Fd0VHZsK%2ByS4X5Zz2ghtJSKcq9aBHBLI92ykZLdQZ2aJGSjDt%2FMvhtsL7izyFy7V1eETmqOlM8beDGd5JyFmR%2FqgdoMRIRCycO2S6xGxTJvpJ7d%2Bp6Ke7GGGhG9Y7FnJGFOungefhVhqpxmRc4tHYl173C3UKgXsbIQAmzdcACFqZWtm037X3DXYKxt5UsrwUoiRq2WV91jHbQ8ZvH5p1HEO%2BncGeKMLVf%2FZ7Jfupog0iZVhJsala6Fh5W8YU9Jcut8dOu1HUn2zNHOjVGLUNf3Q694H4m1hgD3lkROmhwwo4LYwwY6pgHCN%2BnakWGLbSuU5Fn9q8Xq7FCTjO59kPLHGyFVRr8y%2BbFNmPN6Io%2BnYxWVfmZXap1%2FwBDYzpep3XpsQO7hWeXP0%2BphliYxrpNlgXcciw%2FfMksPUtZd9EGdMkif5h0Jj5IyClCe9DeujDm6DyVjJcAlw0J44oLLmJy6lhDMB4a7M8V2j9SMCn02NIJMblg3wjUUorojNwDNWoxe%2BhBb6kgbynn0fkSS&X-Amz-Signature=7ef7fd557a980d4bd441fd4987db82deeb626598b3e33b21a9d7c5dc454cafb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E2FRNPB%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEV6AHAv2H%2FkJ4R9HKgHmueBZUxUxj4yHCTPkaib3722AiEA6q3ykKqSn1pumU41YUheYJGlZNvpMvB87BC4ETH48QwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuGzixKaowYKCJZTyrcA6%2FQ7xU4uweyG2O32UlqH8jrD%2BzGVkrRCreLVINWGS1rFD0F7MjAFHfY%2FDPJslymkYykEFlCnGr1JbmeeXVragORUSMirHoCeTFYfjnE1guz4LuYYPV8q4SeCRDoDfABt9CI3degtIPHVIMDUendm%2BUcmJ%2B5SVLc0fFvwS6W4fU4cExoG24Emmv72%2FFJTUDL%2Bm0w0fOSGobfdW%2BmNl18HEssBeeT53o%2FrJaHppMN1JG6ndkzZE4wNy51p%2F2IBQuzDprjqUBrYafpZ6%2FYLpmL5n6uT5ec147dtCVUIprMIN9dgbRZxBN7LJqQsW9hiPbYqoUbzS2zAsQmU0veuN7LgbstB%2F424BAk117W0T%2Fe9Eand%2BfNDnVyaQy5ydIwbb3W4ATu1QfLCq9tu%2BqiYcYORKLmfHPdnMLZQHtkN0z4uql5U3NlU4hyK%2BhgFto3y4NeExrp01R18jGWtj9C7%2BNIE3a4mIkguL27QVlzLGgXTdEzGUum3uuhggAHRXlqId6mtInMbYdo9m48%2FaE8Fov2e85RzHrVUkLmGpya2ETKzW0pioAxOMY2tz0lRjSSDdw8lwAqt%2FQiS%2BrWiCoARmf8MNmg%2BphXy6Bhc0quVaeN4L6WGf%2FN6%2BgK5hrHa5CiMKrIt78GOqUBbDD063X%2FxfAMXoOFHvF7jPhk8xPgTDQUt5ttMiJ4X3azHafbTnnqTng9fOkGaC3LZrW2jzAwhjobtXoWGsWHvwbnlH1I%2BSI8vvr%2BPJHlJhVlZBojfpYKDyIjRuYJ2I0ZPgEthfefERiRXMavkLEnhTDMojVGmlmOxMsAJNKWDljg86PZstfYNU7YzjtdDmacsQXHHUVJm9E9E0k%2F0yZwfdy%2BxzCo&X-Amz-Signature=01c766edb20bf19b6691ee8303f5ebcf0296096fd1f7a192a1c80497d0082ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

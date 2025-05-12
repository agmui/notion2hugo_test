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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFWA3VO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIC8vlDLuUhzk3I4Kv98UXBex8PMoG%2FVCNiR44w22iBCpAiAVrEoEtnxxkeZIQkD7bBrZwrPjoSmDyJuQm9Ubs9QIsyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeB7W%2FMBtNDsVYy8LKtwDhTdK0jtyfUoqkE29Ze9Grd73y157dDbXxTn94zZZ8NtY4o09navZTCSmu0YSgyWDzv9SLBZlLvEWGrWOW1EMh%2Bxa%2Bq%2BsaXQQxc5ZwEVUdb%2B6iFLk7p8jC9UBzt0%2BA3etOHyKAjnaukPYr8J1G5vYa8lpwwhD4fXYKgV4gKhwc1hBJMvzDGqEyixjJOlCZ6XcuXPikjGq1bPm0u8P6KHmfna06tguR%2B0D37wM4QW1URAlSschuCMb5flMC4%2BXIUTx%2FUY%2BSmWpK%2FekCqrMFUoKNDJlMNInFpZO1JZ2c91LWkUWXFIofLbyPnVaImly5obmuYvMK%2BOYRgXjUrdLrr5iWNhl%2BN17ugEgpYb9rz8LVwR%2BBSiIF2ZAOICUIAXaL91LHGJWfxOB9vXpeYVGygssjmZ1iB%2BIp9fvG6RELOWQXo8CNb8rtVewljI6tXiCfa%2FVUzthpTV6Guyx9W5%2Bjiv%2FwFWCQI4LnaZwmjhnqV20QvVSy%2FygeP1KafxhHAsTT1S9He74GVSmrCfhzRAFaMS4RMyzipOjNdeb7tCZY8kWgLnEe1lIvqFp8iaMiLnyaqosyinG9EENJCi0OyYfJN%2F5KuoqcEgYULj16WXvQxZPU5yT6%2F5U1leb6Nw4IwUwyoOIwQY6pgFhqWBmDh0aP1I6fZp4keAdkyCbyD9Zhf9BGud1KTIOoeAAOdZrlZC3Yh0dUWkW%2By2F8FtOvFhCK0Jniev5iK6DKr4KoZav3rFnFJbuJU0jjkw44oMp32%2FixNc5bDja%2BpTFduHEzD%2FhpJohTVr73bY1v6TMj8n1CXn9LpFnw1kqhSrSguX0OpP3LeGV2GIZ5CDOwOGdzeIhRf5evo%2FmxPbRFOyuy9NG&X-Amz-Signature=6acb027f40edbea4d9e5b13b268860b13c83152623e8f955e4df941cc0cfb8b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

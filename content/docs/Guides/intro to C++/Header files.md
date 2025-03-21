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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRENDR4K%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIC016bxJJeLkmlDW3qAA7CmIlzBU79moZYc5edgkS312AiEA%2BvtqZYKJKfPBnxDWzKKRGg9gIOBI8OKgIxtOvkbCLF8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQQfwddlAiVpbETvyrcAz9iC6cuDzIYfspV2dY5SRiTCS9v2mwnFHXdQPA0Wh7bQhn9Wq1mp2VUwMsvEMtyjCpY30XS1GZZlVj%2BVSUiK1pPBArTeZzZOwBONDyHYf3M0ezgmjy7guFHl62NgdbKw7hp6sK5I0BWfQlr8FaOnrE4%2BVpt0i6nP2EDWN54UO47wc3jClxP%2BqFHo4RWQGBIk4evGO1XZA1wy8UtDtsvZOmeFz2EKaA7Zf3kbrUPAjCdmUt4W5mn0lIg8AtXnTWdCz1UerP5HK80BjJyx%2Fne6FglzexNwvEU42Xi86EZC05vGSLp1qeFxnc%2B0Gr56qU%2FSbyIi36Z%2FtIOJV1ri87AfvQAgrwngJY3IZO4y6gnGbX9s%2Bmam5RHZYOUxb1HpSxeEDq1QowAszgna5WtDUof1vbB%2F3QQCZg3ttc0LbqvXWV817VN9lqI5zh7sqwFJHVh0DibFlV9sL%2FCsh5qONicLaSWepZlFHWh5nnt%2FJ6yiSHLI4lAbKXlm%2FBtqpZGj4eECRjBxb0SmMieqGthJ%2BWlDvwCb%2BXj046pInjaCGIM%2F8J6BX4CdN2KY5v2UDPIeqsb9LqlqH3q%2BKE4bHCFNQIn9O2rNxyW%2FWGtfxuBOObbqWr7kJqgvhfqmQUQUOMAMP2X874GOqUBaAuCkjT8RNVElobSVYW%2FNVeNHosAhBE9%2FqZ%2BMdT8iVSTEzlR3rMDbBmKUTmBHfdNSy82ZOdaR1pZthbyBPJJhnounPPGrd3F%2FPx016YpZBn9rlDDUtLxA6zN3E3FYvjASGwnmaFhEP8RF4HzqOwoz9pd5x2ZmR3F1dQ6ELg33Qrl4hbVS8h8cfQE4a3%2Fm4XzjwnTl0QX%2BGcHcFL84FfQQ3Yu%2B6Uy&X-Amz-Signature=5c7ef887f8b2e981b4a1e45f11bad8d96c3c62b9cbc520a33d99b9eb0330ad08&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

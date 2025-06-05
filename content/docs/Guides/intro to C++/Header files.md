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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2T6MWQ2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCCaFsJbFbyaB0AD1qHGOY4%2BBNOzDyu2YJcK1k3R%2FhcZAIhAMjSM%2B0JRAIxsTgeX2LX54LZ9W25MQJ%2FyTsJFT4X9Z6eKv8DCEkQABoMNjM3NDIzMTgzODA1IgzjhzwESjb0vDTiIb4q3AMY4zXF%2BM%2Fgch3clc0CU7FHcyVIp9fiMOzLa6614wXe0WKmDnWET6xHKnAB4qOk1AfSlk7ti%2B6S8cXvEmvcdWCZmgh0fwu4XIArYAxE7hS5Q1zzmnfE7%2FZ8gZODRhCKbS2w0hIo2Ln0JL2BFiUKazQhb59RphEXAl8ZBo5vYkGdZPBrkfsJj0h8SQLE1AV8uBJmsey8U9BHu%2BO%2FIVyHYciXhGbgRfKo9po0rfVJMWxarzzYLiSWuNhHPc7GOCQeMTDjpAk6PRDgFmQO3rWw2AE75BbgI8inmZCSAEzJhAzmrTOihN9HF0XcGcd9H8j9bg%2FcYAFrz3gv0VjsfjLAphlNg9kZv7hjfK1OwY4OPmG2OVFcrbipiGuvXb4ExjJUyHiQpn1ERKDCqrRYvxWViKSh59N4trPXnZqE1afvVVJMuefcstl70tVL3AmQe6nBASl3scAhLvi7yrmFyU4wqH1X2yzaBKDQeQUkd%2Fok2tucCOCEWzCc%2FbKsGzthixNHgClVGRD3l9sHGv8YXjn69y%2FKBXXWLTpKrDOiQOY0Ra%2B2MzKeXFiKBVY8hR0mVV49gGwS%2FYyDn%2F1S1RnYdwgx6%2Bri%2Budp9wDr1hRbSXvOoO%2B%2F5Cr%2FrwoOd8LBkeBpLDCchYfCBjqkAfc9LthIKRJrWOliBKQPGrdRFZIMM7Y7caZvyji3zIDcN2e%2FuusHVuFFjlbIOdnbM4gacxi50ECyxy1WitlgeIkyNDalzx06lzxoD8xk9rZqXeTGEN%2BJh8RMNKooSb8TTguck5iuywBPZQdtqdA2AVqo4AYF2wQHlLTPXDacu1jAN5E8f9CHsWqU9wazreL0EzsYZhzXI2UxLMOjxrLk1QutduGk&X-Amz-Signature=e8b280fc8b334816ca4194cdb65ba954e0c08cf43c9435ed316d6e1fe03070a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

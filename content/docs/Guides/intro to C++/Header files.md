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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AI63BQU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD3b6ijgr0U%2B97LxXtoQ8yqBAgSQ8GEHF2%2FLtH%2FqbvcAIhAKI%2FRy55OqctzjbZOk65pcoiarIK7r4ENoV0QKP5EXxRKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWUGiDOnMhoCLwP2Uq3AMTXpXjo%2BJrBmizgNpHDN7RjzQ9k8TAQ140j9t%2B2fGd4ZCh5EC%2FrElZaEzrqXoj3NJ7s9RY4kuPC2j6a3jaaeBPyTF2TBn%2BH6RhE9zGUKAIu1%2FDMwZDTQjP0%2Blb3fFKse7QyOHimVe9syqyPJva5KYqZaAfEyT24LZTd7gsEta8w%2Fy4bKTnDDCC%2FfcE5bCjyg21t%2F6gHr5bOEuz1290D0OyL%2BgFKryy5Rz2b8MhF9k%2BGGDwA9Xw4q4zu%2Bcl%2FseX72A5GZDRysDxk1V0x9YVBqc7TdX6C%2BsvCFW5GMwsFqm4vcgYq2pOGWyRma97ECFp%2BLiRza1QOrtYvu7KWMXJkWfXkTM9uvXnZa0p4FliFdowC%2FaCixvAdF1XSXfw6h3SWJb%2FzM5FieSpQKx0yNCttU0toco3w9f9W7Lz5h0vG2Xr7hwEH4e1GK8iOzRFOEXPfl8Wb4pFBLm9qdBrrHToL1kibUfRGLgpckk0pfQhbU%2FMBw0dTeZwka6dQVQvXwnkWUOi6yQQ2V%2BSgprw9pN0SpTNdMVh7nD%2F%2BLFJsrQOHKnTZsASEeMsSYmh7na9rbYHExQqvFS35Pbg%2FkD%2FudrBrYVnxO0VOmtuEJ2cBau3vZLn9XgHdksbYDKWVj0i%2BjCZ%2B%2Fa8BjqkAXFOYSScqoLHu6s8iuymDOjeDv1GEs3ENcLNEtBrE4L6snKvFWR6%2FMX0R4b59L%2Bzgar1SSHuWKmI3z%2FW6lDNhzFbUC8pqLeIpqI84S8rbApyM0Ul3NftC77BExqIB3%2FCf9t4WXK8fJnpgzOj6sxLx03rnNNfi3t5Ag0O0jm6njUy2MbyXEiQCj8y3U1tP8bEPyA7RR8qO1e47tGF2jtXh1eXzvD9&X-Amz-Signature=ff43ffbd0f99481a347a6459cbc0823876b01181ed8352e7fbe04e29aa6f3854&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
